// ── TEXT SEARCH API ──────────────────────────────────────────────────────────
// Serverless function that searches for products by name/text query across
// a 5-database waterfall. Short-circuits once enough high-quality results are
// found to keep response times fast.
//
// Waterfall order (fastest/most relevant first):
//   Tier 1 (parallel): Spoonacular + Kroger + USDA + Open Food Facts (OFF gets 1.5s timeout)
//   Tier 2: UPC Item DB
//   Tier 3 (deprioritized): Open Beauty Facts + Open Pet Food Facts
// Note: OFF is in Tier 1 because it's the most reliable source of real product
// images for branded/packaged goods. Without it, USDA (which never has images)
// can return enough results to short-circuit, leaving ALL results imageless.
// Beauty/Pet results are kept but score-penalized so food results always rank above them.
//
// Image priority (real product photos always beat illustrations):
//   1. Kroger product image — real product packaging, highest quality
//   2. Spoonacular product image (img.spoonacular.com/products/) — real photos
//   3. Open Food Facts image — real photos for packaged goods
//   4. Lookup table / Spoonacular ingredient illustrations — last resort only
//
// Request:  GET /api/text-search?q=olive+oil
// Response: { results: [{ name, brand, category, image, source, nutrition }] }
//      or:  { results: [] }  (no matches found)

// ── FIREBASE ADMIN SDK ──────────────────────────────────────────────────────
// Used for server-side Firestore reads (custom product lookups). The client-side
// Firebase SDK can't run in Vercel serverless functions, and the REST API with
// just an API key fails when Firestore security rules require authentication.
// The Admin SDK uses service account credentials to bypass security rules entirely,
// which is the correct approach for trusted server-side code.
import admin from 'firebase-admin';

// Initialize the Admin SDK once (survives across warm invocations on Vercel).
// Uses FIREBASE_CLIENT_EMAIL + FIREBASE_PRIVATE_KEY env vars set in Vercel dashboard.
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID || 'family-pantry-c65d6',
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: (process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
    }),
  });
}

// Firestore instance for custom product lookups
const firestore = admin.firestore();

// --- Edamam credentials (free tier — same as barcode.js) ---
const EID = "2b6ecac2";
const EK = "8db76605e873aaf2fbdf41256cb24cb4";

// ── CUSTOM PRODUCTS DB LOOKUP ───────────────────────────────────────────────
// Before checking any external database, we check the household's own custom
// product image database in Firestore. This lets user-uploaded photos take
// priority over all external sources (Kroger, Spoonacular, OFF, etc.).
//
// Firestore path: households/{householdId}/customProducts/{normalizedProductName}
// The normalized name is: lowercase, trimmed, spaces → underscores, stripped of special chars.
//
// Uses Firebase Admin SDK for authenticated server-side reads — the previous
// approach (REST API with FIREBASE_API_KEY) failed silently because Firestore
// security rules require authentication, and the text-search endpoint doesn't
// receive the client's Bearer token.

/**
 * normalizeForLookup(name) — Normalizes a product name the same way the client does,
 * so we can look up the exact document path in the customProducts collection.
 */
function normalizeForLookup(name) {
  return (name || "").trim().toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "");
}

/**
 * lookupCustomProduct(householdId, query) — Checks the household's customProducts
 * Firestore collection for a matching image using Firebase Admin SDK.
 *
 * Returns an object with { name, imageUrl, imageDismissed } if a custom product
 * record exists, or null if no record is found. Called at the very top of the
 * handler before any external API tiers — user-uploaded photos always win.
 *
 * Uses Admin SDK (not REST API) because this runs server-side on Vercel where
 * we don't have the client's Firebase Auth token. Admin SDK authenticates via
 * service account credentials and bypasses Firestore security rules.
 */
async function lookupCustomProduct(householdId, query) {
  if (!householdId || !query) return null;
  const normalized = normalizeForLookup(query);
  if (!normalized) return null;

  try {
    // Read the custom product document from Firestore via Admin SDK.
    // Path: households/{householdId}/customProducts/{normalizedProductName}
    const docRef = firestore.collection('households').doc(householdId)
      .collection('customProducts').doc(normalized);
    const doc = await docRef.get();

    // No document found — no custom product image for this query
    if (!doc.exists) {
      console.log(`[TextSearch] Custom product MISS for "${query}" → "${normalized}" (household: ${householdId})`);
      return null;
    }

    const data = doc.data();

    // Check imageDismissed flag — if the user explicitly deleted the image for
    // this product, skip ALL image enrichment. This flag lives on the customProducts
    // record (not the shopping item) so it persists across item deletions.
    if (data.imageDismissed === true) {
      console.log(`[TextSearch] Custom product DISMISSED for "${query}" (household: ${householdId}) — skipping all images`);
      return { name: query, imageUrl: null, imageDismissed: true };
    }

    // Extract the custom image URL — if no imageUrl field, treat as no custom image
    const imageUrl = data.imageUrl || null;
    const name = data.name || query;
    if (!imageUrl) {
      console.log(`[TextSearch] Custom product found but no imageUrl for "${query}" (household: ${householdId})`);
      return null;
    }

    console.log(`[TextSearch] Custom product HIT for "${query}" (household: ${householdId}) → ${imageUrl}`);
    return { name, imageUrl, imageDismissed: false };
  } catch (e) {
    // Non-blocking — if the lookup fails, fall through to external APIs.
    // Log the full error for debugging since this was previously failing silently.
    console.error(`[TextSearch] Custom product lookup FAILED for "${query}" (household: ${householdId}):`, e.message);
    return null;
  }
}

// ── PREBUILT IMAGE LOOKUP TABLE ─────────────────────────────────────────────
// Maps ~1000 common grocery and household item names to their Spoonacular CDN
// image filenames. Used as a LAST-RESORT fallback — only applied after all API
// sources have been tried and no real product photo was found. These are generic
// ingredient illustrations (a glass of milk, a loaf of bread), not real product
// packaging photos. A real Horizon Organic Milk carton from Kroger is always
// better than a stock illustration of a glass of milk.
//
// Base URL: https://img.spoonacular.com/ingredients_100x100/{filename}
// IMPORTANT: Only .jpg works on this CDN — .png files return 404.
// spoonacular.com/cdn/ 301-redirects to img.spoonacular.com.
//
// Keys are lowercase. Lookup function does case-insensitive partial matching.
const SPOON_CDN = "https://img.spoonacular.com/ingredients_100x100";
const IMAGE_LOOKUP = {
  // ── FRUITS ──────────────────────────────────────────────────────────────
  "apple": "apple.jpg",
  "apples": "apple.jpg",
  "red apple": "apple.jpg",
  "green apple": "apple.jpg",
  "granny smith": "apple.jpg",
  "fuji apple": "apple.jpg",
  "gala apple": "apple.jpg",
  "honeycrisp apple": "apple.jpg",
  "banana": "bananas.jpg",
  "bananas": "bananas.jpg",
  "orange": "orange.jpg",
  "oranges": "orange.jpg",
  "navel orange": "orange.jpg",
  "blood orange": "orange.jpg",
  "mandarin": "mandarin-oranges.jpg",
  "mandarin orange": "mandarin-oranges.jpg",
  "tangerine": "mandarin-oranges.jpg",
  "clementine": "clementine.jpg",
  "clementines": "clementine.jpg",
  "grapefruit": "grapefruit.jpg",
  "lemon": "lemon.jpg",
  "lemons": "lemon.jpg",
  "lime": "lime.jpg",
  "limes": "lime.jpg",
  "key lime": "lime.jpg",
  "grape": "grapes.jpg",
  "grapes": "grapes.jpg",
  "red grapes": "red-grapes.jpg",
  "green grapes": "grapes.jpg",
  "strawberry": "strawberries.jpg",
  "strawberries": "strawberries.jpg",
  "blueberry": "blueberries.jpg",
  "blueberries": "blueberries.jpg",
  "raspberry": "raspberries.jpg",
  "raspberries": "raspberries.jpg",
  "blackberry": "blackberries.jpg",
  "blackberries": "blackberries.jpg",
  "cranberry": "cranberries.jpg",
  "cranberries": "cranberries.jpg",
  "cherry": "cherries.jpg",
  "cherries": "cherries.jpg",
  "peach": "peach.jpg",
  "peaches": "peach.jpg",
  "nectarine": "nectarine.jpg",
  "plum": "plum.jpg",
  "plums": "plum.jpg",
  "apricot": "apricot.jpg",
  "apricots": "apricot.jpg",
  "pear": "pear.jpg",
  "pears": "pear.jpg",
  "mango": "mango.jpg",
  "mangoes": "mango.jpg",
  "mangos": "mango.jpg",
  "pineapple": "pineapple.jpg",
  "papaya": "papaya.jpg",
  "kiwi": "kiwi.jpg",
  "kiwi fruit": "kiwi.jpg",
  "coconut": "coconut.jpg",
  "pomegranate": "pomegranate.jpg",
  "fig": "figs.jpg",
  "figs": "figs.jpg",
  "date": "dates.jpg",
  "dates": "dates.jpg",
  "medjool dates": "dates.jpg",
  "watermelon": "watermelon.jpg",
  "cantaloupe": "cantaloupe.jpg",
  "honeydew": "honeydew.jpg",
  "honeydew melon": "honeydew.jpg",
  "passion fruit": "passion-fruit.jpg",
  "guava": "guava.jpg",
  "lychee": "lychee.jpg",
  "dragon fruit": "dragon-fruit.jpg",
  "star fruit": "star-fruit.jpg",
  "persimmon": "persimmon.jpg",
  "plantain": "plantains.jpg",
  "plantains": "plantains.jpg",
  "rhubarb": "rhubarb.jpg",
  "avocado": "avocado.jpg",
  "avocados": "avocado.jpg",
  "raisins": "raisins.jpg",
  "dried cranberries": "dried-cranberries.jpg",
  "dried apricots": "dried-apricots.jpg",
  "dried figs": "dried-figs.jpg",
  "prunes": "prunes.jpg",
  "dried mango": "dried-mango.jpg",
  "fruit cocktail": "fruit-cocktail.jpg",
  "mixed berries": "mixed-berries.jpg",
  "frozen strawberries": "strawberries.jpg",
  "frozen blueberries": "blueberries.jpg",
  "frozen raspberries": "raspberries.jpg",
  "frozen mixed berries": "mixed-berries.jpg",
  "applesauce": "applesauce.jpg",
  "currants": "currants.jpg",

  // ── VEGETABLES ──────────────────────────────────────────────────────────
  "tomato": "tomato.jpg",
  "tomatoes": "tomato.jpg",
  "roma tomato": "roma-tomatoes.jpg",
  "cherry tomatoes": "cherry-tomatoes.jpg",
  "grape tomatoes": "grape-tomatoes.jpg",
  "plum tomato": "plum-tomato.jpg",
  "heirloom tomato": "tomato.jpg",
  "sun dried tomatoes": "sundried-tomatoes.jpg",
  "sundried tomatoes": "sundried-tomatoes.jpg",
  "potato": "potatoes-yukon-gold.jpg",
  "potatoes": "potatoes-yukon-gold.jpg",
  "russet potato": "russet-potatoes.jpg",
  "sweet potato": "sweet-potato.jpg",
  "sweet potatoes": "sweet-potato.jpg",
  "yam": "sweet-potato.jpg",
  "yams": "sweet-potato.jpg",
  "red potato": "red-potatoes.jpg",
  "fingerling potato": "potatoes-fingerling.jpg",
  "yukon gold potato": "potatoes-yukon-gold.jpg",
  "onion": "brown-onion.jpg",
  "onions": "brown-onion.jpg",
  "yellow onion": "brown-onion.jpg",
  "white onion": "white-onion.jpg",
  "red onion": "red-onion.jpg",
  "sweet onion": "brown-onion.jpg",
  "vidalia onion": "brown-onion.jpg",
  "green onion": "spring-onions.jpg",
  "green onions": "spring-onions.jpg",
  "scallion": "spring-onions.jpg",
  "scallions": "spring-onions.jpg",
  "shallot": "shallots.jpg",
  "shallots": "shallots.jpg",
  "leek": "leeks.jpg",
  "leeks": "leeks.jpg",
  "garlic": "garlic.jpg",
  "garlic cloves": "garlic.jpg",
  "garlic bulb": "garlic.jpg",
  "elephant garlic": "garlic.jpg",
  "ginger": "ginger.jpg",
  "ginger root": "ginger.jpg",
  "fresh ginger": "ginger.jpg",
  "carrot": "carrots.jpg",
  "carrots": "carrots.jpg",
  "baby carrots": "baby-carrots.jpg",
  "celery": "celery.jpg",
  "celery stalk": "celery.jpg",
  "broccoli": "broccoli.jpg",
  "broccoli florets": "broccoli.jpg",
  "broccolini": "broccolini.jpg",
  "cauliflower": "cauliflower.jpg",
  "cabbage": "cabbage.jpg",
  "green cabbage": "cabbage.jpg",
  "red cabbage": "red-cabbage.jpg",
  "napa cabbage": "napa-cabbage.jpg",
  "brussels sprouts": "brussels-sprouts.jpg",
  "brussels sprout": "brussels-sprouts.jpg",
  "lettuce": "iceberg-lettuce.jpg",
  "iceberg lettuce": "iceberg-lettuce.jpg",
  "romaine lettuce": "romaine-lettuce.jpg",
  "romaine": "romaine-lettuce.jpg",
  "butter lettuce": "butter-lettuce.jpg",
  "arugula": "arugula.jpg",
  "spinach": "spinach.jpg",
  "baby spinach": "baby-spinach.jpg",
  "kale": "kale.jpg",
  "swiss chard": "swiss-chard.jpg",
  "chard": "swiss-chard.jpg",
  "collard greens": "collard-greens.jpg",
  "mustard greens": "mustard-greens.jpg",
  "turnip greens": "turnip-greens.jpg",
  "watercress": "watercress.jpg",
  "mixed greens": "mixed-greens.jpg",
  "spring mix": "mixed-greens.jpg",
  "salad mix": "mixed-greens.jpg",
  "cucumber": "cucumber.jpg",
  "cucumbers": "cucumber.jpg",
  "english cucumber": "cucumber.jpg",
  "persian cucumber": "cucumber.jpg",
  "bell pepper": "bell-pepper-orange.jpg",
  "bell peppers": "bell-pepper-orange.jpg",
  "green bell pepper": "bell-pepper-green.jpg",
  "red bell pepper": "bell-pepper-red.jpg",
  "yellow bell pepper": "bell-pepper-yellow.jpg",
  "orange bell pepper": "bell-pepper-orange.jpg",
  "pepper": "bell-pepper-orange.jpg",
  "peppers": "bell-pepper-orange.jpg",
  "jalapeno": "jalapeno-pepper.jpg",
  "jalapeño": "jalapeno-pepper.jpg",
  "serrano pepper": "serrano-pepper.jpg",
  "habanero": "habanero-pepper.jpg",
  "poblano": "poblano-pepper.jpg",
  "anaheim pepper": "anaheim-pepper.jpg",
  "banana pepper": "banana-pepper.jpg",
  "chili pepper": "chili-peppers.jpg",
  "chili peppers": "chili-peppers.jpg",
  "hot pepper": "chili-peppers.jpg",
  "zucchini": "zucchini.jpg",
  "yellow squash": "yellow-squash.jpg",
  "summer squash": "yellow-squash.jpg",
  "butternut squash": "butternut-squash.jpg",
  "acorn squash": "acorn-squash.jpg",
  "spaghetti squash": "spaghetti-squash.jpg",
  "pumpkin": "pumpkin.jpg",
  "delicata squash": "delicata-squash.jpg",
  "corn": "corn.jpg",
  "corn on the cob": "corn-on-the-cob.jpg",
  "sweet corn": "corn.jpg",
  "frozen corn": "corn.jpg",
  "corn kernels": "corn.jpg",
  "peas": "peas.jpg",
  "green peas": "peas.jpg",
  "snow peas": "snow-peas.jpg",
  "snap peas": "sugar-snap-peas.jpg",
  "sugar snap peas": "sugar-snap-peas.jpg",
  "frozen peas": "peas.jpg",
  "green beans": "green-beans.jpg",
  "string beans": "green-beans.jpg",
  "french beans": "french-green-beans.jpg",
  "wax beans": "wax-beans.jpg",
  "asparagus": "asparagus.jpg",
  "artichoke": "artichoke.jpg",
  "artichoke hearts": "artichoke-hearts.jpg",
  "eggplant": "eggplant.jpg",
  "mushroom": "mushrooms.jpg",
  "mushrooms": "mushrooms.jpg",
  "button mushrooms": "mushrooms.jpg",
  "cremini mushrooms": "cremini-mushrooms.jpg",
  "baby bella mushrooms": "cremini-mushrooms.jpg",
  "portobello mushroom": "portobello-mushrooms.jpg",
  "portobello mushrooms": "portobello-mushrooms.jpg",
  "shiitake mushrooms": "shiitake-mushrooms.jpg",
  "oyster mushrooms": "oyster-mushroom.jpg",
  "enoki mushrooms": "enoki-mushrooms.jpg",
  "radish": "radishes.jpg",
  "radishes": "radishes.jpg",
  "daikon": "daikon.jpg",
  "turnip": "turnip.jpg",
  "turnips": "turnip.jpg",
  "parsnip": "parsnips.jpg",
  "parsnips": "parsnips.jpg",
  "beet": "beet.jpg",
  "beets": "beet.jpg",
  "beetroot": "beet.jpg",
  "rutabaga": "rutabaga.jpg",
  "jicama": "jicama.jpg",
  "kohlrabi": "kohlrabi.jpg",
  "fennel": "fennel.jpg",
  "okra": "okra.jpg",
  "edamame": "edamame.jpg",
  "bean sprouts": "bean-sprouts.jpg",
  "bamboo shoots": "bamboo-shoots.jpg",
  "water chestnuts": "water-chestnuts.jpg",
  "hearts of palm": "hearts-of-palm.jpg",
  "tomatillo": "tomatillos.jpg",
  "tomatillos": "tomatillos.jpg",
  "bok choy": "bok-choy.jpg",
  "baby bok choy": "baby-bok-choy.jpg",
  "endive": "endive.jpg",
  "radicchio": "radicchio.jpg",
  "escarole": "escarole.jpg",
  "chives": "chives.jpg",
  "horseradish": "horseradish.jpg",
  "seaweed": "seaweed.jpg",
  "nori": "nori.jpg",
  "kelp": "kelp.jpg",

  // ── MEATS ───────────────────────────────────────────────────────────────
  "chicken": "whole-chicken.jpg",
  "chicken breast": "chicken-breasts.jpg",
  "chicken breasts": "chicken-breasts.jpg",
  "chicken thigh": "chicken-thigh.jpg",
  "chicken thighs": "chicken-thigh.jpg",
  "chicken drumstick": "chicken-drumsticks.jpg",
  "chicken drumsticks": "chicken-drumsticks.jpg",
  "chicken leg": "chicken-leg.jpg",
  "chicken legs": "chicken-leg.jpg",
  "chicken wing": "chicken-wings.jpg",
  "chicken wings": "chicken-wings.jpg",
  "chicken tender": "chicken-tenders.jpg",
  "chicken tenders": "chicken-tenders.jpg",
  "chicken cutlet": "chicken-breasts.jpg",
  "rotisserie chicken": "whole-chicken.jpg",
  "whole chicken": "whole-chicken.jpg",
  "ground chicken": "ground-chicken.jpg",
  "chicken sausage": "chicken-sausage.jpg",
  "beef": "beef-cubes-background.jpg",
  "ground beef": "fresh-ground-beef.jpg",
  "ground turkey": "fresh-ground-turkey.jpg",
  "steak": "steak.jpg",
  "ribeye": "ribeye-steak.jpg",
  "ribeye steak": "ribeye-steak.jpg",
  "sirloin": "sirloin-steak.jpg",
  "sirloin steak": "sirloin-steak.jpg",
  "ny strip": "new-york-steak.jpg",
  "new york strip": "new-york-steak.jpg",
  "filet mignon": "filet-mignon.jpg",
  "t-bone steak": "t-bone-steak.jpg",
  "flank steak": "flank-steak.jpg",
  "skirt steak": "skirt-steak.jpg",
  "chuck roast": "chuck-roast.jpg",
  "beef roast": "beef-roast.jpg",
  "pot roast": "chuck-roast.jpg",
  "beef stew meat": "beef-cubes-background.jpg",
  "stew meat": "beef-cubes-background.jpg",
  "beef brisket": "beef-brisket.jpg",
  "brisket": "beef-brisket.jpg",
  "corned beef": "corned-beef.jpg",
  "beef ribs": "beef-short-ribs.jpg",
  "short ribs": "beef-short-ribs.jpg",
  "beef tenderloin": "beef-tenderloin.jpg",
  "veal": "veal.jpg",
  "pork": "pork-tenderloin.jpg",
  "pork chop": "pork-chops.jpg",
  "pork chops": "pork-chops.jpg",
  "pork loin": "pork-loin-roast.jpg",
  "pork tenderloin": "pork-tenderloin.jpg",
  "pork roast": "pork-loin-roast.jpg",
  "pork shoulder": "pork-shoulder.jpg",
  "pork butt": "pork-shoulder.jpg",
  "pulled pork": "pork-shoulder.jpg",
  "pork belly": "pork-belly.jpg",
  "pork ribs": "pork-ribs.jpg",
  "baby back ribs": "pork-ribs.jpg",
  "spare ribs": "pork-ribs.jpg",
  "ground pork": "ground-pork.jpg",
  "pork sausage": "pork-sausage.jpg",
  "bacon": "raw-bacon.jpg",
  "turkey bacon": "turkey-bacon.jpg",
  "ham": "ham-slices.jpg",
  "deli ham": "ham-slices.jpg",
  "prosciutto": "prosciutto.jpg",
  "pancetta": "pancetta.jpg",
  "salami": "salami.jpg",
  "pepperoni": "pepperoni.jpg",
  "sausage": "sausage.jpg",
  "italian sausage": "italian-sausage.jpg",
  "bratwurst": "bratwurst.jpg",
  "hot dog": "hot-dogs.jpg",
  "hot dogs": "hot-dogs.jpg",
  "frankfurter": "hot-dogs.jpg",
  "turkey": "turkey-raw-whole.jpg",
  "turkey breast": "turkey-breast.jpg",
  "deli turkey": "deli-turkey.jpg",
  "turkey sausage": "turkey-sausage.jpg",
  "turkey leg": "turkey-leg.jpg",
  "lamb": "lamb-loin-chops.jpg",
  "lamb chop": "lamb-loin-chops.jpg",
  "lamb chops": "lamb-loin-chops.jpg",
  "lamb leg": "leg-of-lamb.jpg",
  "leg of lamb": "leg-of-lamb.jpg",
  "lamb shank": "lamb-shank.jpg",
  "lamb shoulder": "lamb-shoulder.jpg",
  "ground lamb": "ground-lamb.jpg",
  "rack of lamb": "rack-of-lamb.jpg",
  "duck": "whole-duck.jpg",
  "duck breast": "duck-breast.jpg",
  "duck leg": "duck-legs.jpg",
  "venison": "venison.jpg",
  "bison": "bison-meat.jpg",
  "liver": "beef-liver.jpg",
  "beef jerky": "beef-jerky.jpg",
  "jerky": "beef-jerky.jpg",
  "meatball": "meatballs.jpg",
  "meatballs": "meatballs.jpg",
  "bologna": "bologna.jpg",
  "pastrami": "pastrami.jpg",

  // ── SEAFOOD ─────────────────────────────────────────────────────────────
  "salmon": "salmon.jpg",
  "salmon fillet": "salmon.jpg",
  "smoked salmon": "smoked-salmon.jpg",
  "lox": "smoked-salmon.jpg",
  "tuna": "tuna-steak.jpg",
  "tuna steak": "tuna-steak.jpg",
  "canned tuna": "canned-tuna.jpg",
  "ahi tuna": "tuna-steak.jpg",
  "cod": "cod-fillet.jpg",
  "cod fillet": "cod-fillet.jpg",
  "tilapia": "tilapia-fillets.jpg",
  "tilapia fillet": "tilapia-fillets.jpg",
  "halibut": "halibut-fillet.jpg",
  "sea bass": "sea-bass.jpg",
  "bass": "sea-bass.jpg",
  "trout": "trout.jpg",
  "rainbow trout": "trout.jpg",
  "catfish": "catfish.jpg",
  "catfish fillet": "catfish.jpg",
  "mahi mahi": "mahi-mahi.jpg",
  "swordfish": "swordfish.jpg",
  "flounder": "flounder.jpg",
  "sole": "sole-fillet.jpg",
  "snapper": "snapper.jpg",
  "red snapper": "snapper.jpg",
  "sardine": "sardines.jpg",
  "sardines": "sardines.jpg",
  "anchovy": "anchovies.jpg",
  "anchovies": "anchovies.jpg",
  "herring": "herring.jpg",
  "mackerel": "mackerel.jpg",
  "perch": "perch.jpg",
  "walleye": "walleye.jpg",
  "pollock": "pollock.jpg",
  "haddock": "haddock.jpg",
  "grouper": "grouper.jpg",
  "shrimp": "shrimp.jpg",
  "prawns": "shrimp.jpg",
  "jumbo shrimp": "shrimp.jpg",
  "frozen shrimp": "shrimp.jpg",
  "crab": "crab.jpg",
  "crab meat": "crab-meat.jpg",
  "crab legs": "crab-legs.jpg",
  "lobster": "lobster.jpg",
  "lobster tail": "lobster-tails.jpg",
  "clam": "clams.jpg",
  "clams": "clams.jpg",
  "mussel": "mussels.jpg",
  "mussels": "mussels.jpg",
  "oyster": "oysters.jpg",
  "oysters": "oysters.jpg",
  "scallop": "bay-scallops.jpg",
  "scallops": "bay-scallops.jpg",
  "squid": "squid.jpg",
  "calamari": "squid.jpg",
  "octopus": "octopus.jpg",
  "crawfish": "crawfish.jpg",
  "crayfish": "crawfish.jpg",
  "fish sticks": "fish-sticks.jpg",
  "fish fillet": "fish-fillets.jpg",
  "surimi": "surimi.jpg",
  "crab stick": "surimi.jpg",
  "imitation crab": "surimi.jpg",

  // ── DAIRY & EGGS ────────────────────────────────────────────────────────
  "milk": "milk.jpg",
  "whole milk": "milk.jpg",
  "2% milk": "milk.jpg",
  "skim milk": "milk.jpg",
  "1% milk": "milk.jpg",
  "buttermilk": "buttermilk.jpg",
  "heavy cream": "heavy-cream.jpg",
  "whipping cream": "heavy-cream.jpg",
  "half and half": "half-and-half.jpg",
  "half & half": "half-and-half.jpg",
  "cream": "heavy-cream.jpg",
  "sour cream": "sour-cream.jpg",
  "cream cheese": "cream-cheese.jpg",
  "butter": "butter-sliced.jpg",
  "unsalted butter": "butter-sliced.jpg",
  "salted butter": "butter-sliced.jpg",
  "ghee": "ghee.jpg",
  "margarine": "margarine.jpg",
  "egg": "egg.jpg",
  "eggs": "egg.jpg",
  "large eggs": "egg.jpg",
  "egg whites": "egg-white.jpg",
  "egg yolk": "egg-yolk.jpg",
  "cheese": "cheddar-cheese.jpg",
  "cheddar cheese": "cheddar-cheese.jpg",
  "cheddar": "cheddar-cheese.jpg",
  "sharp cheddar": "cheddar-cheese.jpg",
  "mozzarella": "mozzarella.jpg",
  "mozzarella cheese": "mozzarella.jpg",
  "fresh mozzarella": "fresh-mozzarella.jpg",
  "parmesan": "parmesan.jpg",
  "parmesan cheese": "parmesan.jpg",
  "parmigiano reggiano": "parmesan.jpg",
  "swiss cheese": "swiss-cheese.jpg",
  "swiss": "swiss-cheese.jpg",
  "provolone": "provolone-cheese.jpg",
  "provolone cheese": "provolone-cheese.jpg",
  "gouda": "gouda-cheese.jpg",
  "brie": "brie.jpg",
  "camembert": "camembert.jpg",
  "blue cheese": "blue-cheese.jpg",
  "gorgonzola": "gorgonzola.jpg",
  "feta": "feta.jpg",
  "feta cheese": "feta.jpg",
  "goat cheese": "goat-cheese.jpg",
  "ricotta": "ricotta-cheese.jpg",
  "ricotta cheese": "ricotta-cheese.jpg",
  "cottage cheese": "cottage-cheese.jpg",
  "mascarpone": "mascarpone.jpg",
  "gruyere": "gruyere.jpg",
  "monterey jack": "monterey-jack-cheese.jpg",
  "pepper jack": "pepper-jack-cheese.jpg",
  "colby jack": "colby-jack.jpg",
  "american cheese": "american-cheese.jpg",
  "string cheese": "string-cheese.jpg",
  "shredded cheese": "shredded-cheese.jpg",
  "velveeta": "velveeta.jpg",
  "queso fresco": "queso-fresco.jpg",
  "paneer": "paneer.jpg",
  "halloumi": "halloumi.jpg",
  "burrata": "burrata.jpg",
  "yogurt": "plain-yogurt.jpg",
  "greek yogurt": "greek-yogurt.jpg",
  "plain yogurt": "plain-yogurt.jpg",
  "vanilla yogurt": "vanilla-yogurt.jpg",
  "strawberry yogurt": "strawberry-yogurt.jpg",
  "kefir": "kefir.jpg",
  "whipped cream": "whipped-cream.jpg",
  "cool whip": "whipped-cream.jpg",
  "condensed milk": "condensed-milk.jpg",
  "sweetened condensed milk": "condensed-milk.jpg",
  "evaporated milk": "evaporated-milk.jpg",
  "powdered milk": "milk-powder.jpg",
  "dry milk": "milk-powder.jpg",
  "ice cream": "ice-cream.jpg",
  "vanilla ice cream": "ice-cream.jpg",
  "chocolate ice cream": "ice-cream.jpg",
  "frozen yogurt": "frozen-yogurt.jpg",
  "sherbet": "sherbet.jpg",
  "sorbet": "sorbet.jpg",
  "gelato": "gelato.jpg",

  // ── GRAINS, PASTA & BREAD ──────────────────────────────────────────────
  "rice": "uncooked-white-rice.jpg",
  "white rice": "uncooked-white-rice.jpg",
  "brown rice": "brown-rice.jpg",
  "jasmine rice": "jasmine-rice.jpg",
  "basmati rice": "basmati-rice.jpg",
  "wild rice": "wild-rice.jpg",
  "arborio rice": "arborio-rice.jpg",
  "sushi rice": "sushi-rice.jpg",
  "rice pilaf": "rice-pilaf.jpg",
  "fried rice": "fried-rice.jpg",
  "instant rice": "minute-rice.jpg",
  "quinoa": "quinoa.jpg",
  "couscous": "couscous.jpg",
  "bulgur": "bulgur.jpg",
  "bulgur wheat": "bulgur.jpg",
  "farro": "farro.jpg",
  "barley": "barley.jpg",
  "pearl barley": "barley.jpg",
  "millet": "millet.jpg",
  "amaranth": "amaranth.jpg",
  "buckwheat": "buckwheat.jpg",
  "polenta": "polenta.jpg",
  "grits": "grits.jpg",
  "cornmeal": "cornmeal.jpg",
  "oats": "rolled-oats.jpg",
  "rolled oats": "rolled-oats.jpg",
  "steel cut oats": "steel-cut-oats.jpg",
  "instant oatmeal": "instant-oatmeal.jpg",
  "oatmeal": "rolled-oats.jpg",
  "granola": "granola.jpg",
  "muesli": "muesli.jpg",
  "cereal": "cereal.jpg",
  "corn flakes": "corn-flakes.jpg",
  "cheerios": "cheerios.jpg",
  "pasta": "pasta.jpg",
  "spaghetti": "spaghetti.jpg",
  "penne": "penne.jpg",
  "rigatoni": "rigatoni.jpg",
  "fusilli": "fusilli.jpg",
  "rotini": "rotini.jpg",
  "farfalle": "farfalle.jpg",
  "bow tie pasta": "farfalle.jpg",
  "linguine": "linguine.jpg",
  "fettuccine": "fettuccine.jpg",
  "angel hair": "angel-hair-pasta.jpg",
  "angel hair pasta": "angel-hair-pasta.jpg",
  "macaroni": "macaroni.jpg",
  "elbow macaroni": "macaroni.jpg",
  "lasagna noodles": "lasagna-noodles.jpg",
  "lasagna sheets": "lasagna-noodles.jpg",
  "lasagna": "lasagna-noodles.jpg",
  "orzo": "orzo.jpg",
  "egg noodles": "egg-noodles.jpg",
  "ramen noodles": "ramen-noodles.jpg",
  "ramen": "ramen-noodles.jpg",
  "rice noodles": "rice-noodles.jpg",
  "udon noodles": "udon-noodles.jpg",
  "udon": "udon-noodles.jpg",
  "soba noodles": "soba-noodles.jpg",
  "lo mein noodles": "lo-mein-noodles.jpg",
  "glass noodles": "glass-noodles.jpg",
  "vermicelli": "rice-vermicelli.jpg",
  "gnocchi": "gnocchi.jpg",
  "tortellini": "tortellini.jpg",
  "ravioli": "ravioli.jpg",
  "mac and cheese": "macaroni-and-cheese.jpg",
  "bread": "white-bread.jpg",
  "white bread": "white-bread.jpg",
  "wheat bread": "whole-wheat-bread.jpg",
  "whole wheat bread": "whole-wheat-bread.jpg",
  "sourdough bread": "sourdough-bread.jpg",
  "sourdough": "sourdough-bread.jpg",
  "rye bread": "rye-bread.jpg",
  "pumpernickel": "pumpernickel-bread.jpg",
  "multigrain bread": "multigrain-bread.jpg",
  "french bread": "french-bread.jpg",
  "baguette": "baguette.jpg",
  "ciabatta": "ciabatta.jpg",
  "focaccia": "focaccia.jpg",
  "pita": "pita-bread.jpg",
  "pita bread": "pita-bread.jpg",
  "naan": "naan.jpg",
  "naan bread": "naan.jpg",
  "flatbread": "flatbread.jpg",
  "tortilla": "flour-tortilla.jpg",
  "tortillas": "flour-tortilla.jpg",
  "flour tortilla": "flour-tortilla.jpg",
  "flour tortillas": "flour-tortilla.jpg",
  "corn tortilla": "corn-tortillas.jpg",
  "corn tortillas": "corn-tortillas.jpg",
  "wrap": "flour-tortilla.jpg",
  "wraps": "flour-tortilla.jpg",
  "croissant": "croissant.jpg",
  "croissants": "croissant.jpg",
  "bagel": "bagel.jpg",
  "bagels": "bagel.jpg",
  "english muffin": "english-muffins.jpg",
  "english muffins": "english-muffins.jpg",
  "hamburger bun": "hamburger-buns.jpg",
  "hamburger buns": "hamburger-buns.jpg",
  "hot dog bun": "hot-dog-bun.jpg",
  "hot dog buns": "hot-dog-bun.jpg",
  "dinner roll": "dinner-rolls.jpg",
  "dinner rolls": "dinner-rolls.jpg",
  "breadcrumbs": "breadcrumbs.jpg",
  "bread crumbs": "breadcrumbs.jpg",
  "panko": "panko.jpg",
  "panko breadcrumbs": "panko.jpg",
  "croutons": "croutons.jpg",
  "stuffing": "stuffing.jpg",
  "stuffing mix": "stuffing.jpg",
  "cornbread": "cornbread.jpg",
  "biscuit": "biscuits.jpg",
  "biscuits": "biscuits.jpg",
  "crackers": "crackers.jpg",
  "saltine crackers": "saltines.jpg",
  "saltines": "saltines.jpg",
  "graham crackers": "graham-crackers.jpg",
  "rice cakes": "rice-cakes.jpg",
  "taco shells": "taco-shells.jpg",
  "taco": "taco-shells.jpg",
  "pizza dough": "pizza-dough.jpg",
  "pie crust": "pie-crust.jpg",
  "puff pastry": "puff-pastry.jpg",
  "phyllo dough": "phyllo-dough.jpg",
  "wonton wrappers": "wonton-wrappers.jpg",
  "spring roll wrappers": "spring-roll-wrappers.jpg",

  // ── PANTRY STAPLES — OILS, VINEGARS, SAUCES, CONDIMENTS ────────────────
  "olive oil": "olive-oil.jpg",
  "extra virgin olive oil": "olive-oil.jpg",
  "vegetable oil": "vegetable-oil.jpg",
  "canola oil": "canola-oil.jpg",
  "coconut oil": "coconut-oil.jpg",
  "sesame oil": "sesame-oil.jpg",
  "avocado oil": "avocado-oil.jpg",
  "peanut oil": "peanut-oil.jpg",
  "sunflower oil": "sunflower-oil.jpg",
  "corn oil": "corn-oil.jpg",
  "grapeseed oil": "grapeseed-oil.jpg",
  "truffle oil": "truffle-oil.jpg",
  "cooking spray": "cooking-spray.jpg",
  "nonstick spray": "cooking-spray.jpg",
  "vinegar": "vinegar.jpg",
  "white vinegar": "white-vinegar.jpg",
  "apple cider vinegar": "apple-cider-vinegar.jpg",
  "balsamic vinegar": "balsamic-vinegar.jpg",
  "red wine vinegar": "red-wine-vinegar.jpg",
  "white wine vinegar": "white-wine-vinegar.jpg",
  "rice vinegar": "rice-vinegar.jpg",
  "sherry vinegar": "sherry-vinegar.jpg",
  "malt vinegar": "malt-vinegar.jpg",
  "soy sauce": "soy-sauce.jpg",
  "tamari": "tamari.jpg",
  "coconut aminos": "coconut-aminos.jpg",
  "fish sauce": "fish-sauce.jpg",
  "oyster sauce": "oyster-sauce.jpg",
  "hoisin sauce": "hoisin-sauce.jpg",
  "teriyaki sauce": "teriyaki-sauce.jpg",
  "worcestershire sauce": "worcestershire-sauce.jpg",
  "hot sauce": "hot-sauce.jpg",
  "sriracha": "sriracha.jpg",
  "tabasco": "hot-sauce.jpg",
  "frank's red hot": "hot-sauce.jpg",
  "chili sauce": "chili-sauce.jpg",
  "sweet chili sauce": "sweet-chili-sauce.jpg",
  "bbq sauce": "bbq-sauce.jpg",
  "barbecue sauce": "bbq-sauce.jpg",
  "ketchup": "ketchup.jpg",
  "mustard": "mustard.jpg",
  "yellow mustard": "yellow-mustard.jpg",
  "dijon mustard": "dijon-mustard.jpg",
  "honey mustard": "honey-mustard.jpg",
  "whole grain mustard": "whole-grain-mustard.jpg",
  "mayonnaise": "mayonnaise.jpg",
  "mayo": "mayonnaise.jpg",
  "ranch dressing": "ranch-dressing.jpg",
  "ranch": "ranch-dressing.jpg",
  "italian dressing": "italian-dressing.jpg",
  "caesar dressing": "caesar-dressing.jpg",
  "balsamic dressing": "balsamic-glaze.jpg",
  "thousand island": "thousand-island-dressing.jpg",
  "blue cheese dressing": "blue-cheese-dressing.jpg",
  "vinaigrette": "vinaigrette.jpg",
  "salad dressing": "italian-dressing.jpg",
  "salsa": "salsa.jpg",
  "pico de gallo": "pico-de-gallo.jpg",
  "guacamole": "guacamole.jpg",
  "hummus": "hummus.jpg",
  "tahini": "tahini.jpg",
  "pesto": "pesto.jpg",
  "basil pesto": "pesto.jpg",
  "marinara sauce": "marinara.jpg",
  "marinara": "marinara.jpg",
  "pasta sauce": "pasta-sauce.jpg",
  "tomato sauce": "tomato-sauce.jpg",
  "pizza sauce": "pizza-sauce.jpg",
  "alfredo sauce": "alfredo-sauce.jpg",
  "enchilada sauce": "enchilada-sauce.jpg",
  "curry paste": "curry-paste.jpg",
  "red curry paste": "red-curry-paste.jpg",
  "green curry paste": "green-curry-paste.jpg",
  "thai curry paste": "curry-paste.jpg",
  "harissa": "harissa.jpg",
  "gochujang": "gochujang.jpg",
  "miso paste": "miso.jpg",
  "miso": "miso.jpg",
  "tomato paste": "tomato-paste.jpg",
  "tomato puree": "tomato-puree.jpg",
  "steak sauce": "steak-sauce.jpg",
  "a1 sauce": "steak-sauce.jpg",
  "relish": "relish.jpg",
  "pickle relish": "relish.jpg",
  "chutney": "chutney.jpg",
  "mango chutney": "mango-chutney.jpg",
  "cranberry sauce": "cranberry-sauce.jpg",
  "apple sauce": "applesauce.jpg",
  "caramel sauce": "caramel-sauce.jpg",
  "chocolate sauce": "chocolate-sauce.jpg",
  "chocolate syrup": "chocolate-syrup.jpg",
  "maple syrup": "maple-syrup.jpg",
  "syrup": "maple-syrup.jpg",
  "honey": "honey.jpg",
  "agave": "agave.jpg",
  "agave nectar": "agave.jpg",
  "molasses": "molasses.jpg",
  "corn syrup": "corn-syrup.jpg",
  "jam": "jam.jpg",
  "jelly": "jelly.jpg",
  "strawberry jam": "strawberry-jam.jpg",
  "grape jelly": "grape-jelly.jpg",
  "raspberry jam": "raspberry-jam.jpg",
  "orange marmalade": "orange-marmalade.jpg",
  "marmalade": "orange-marmalade.jpg",
  "preserves": "preserves.jpg",
  "peanut butter": "peanut-butter.jpg",
  "almond butter": "almond-butter.jpg",
  "cashew butter": "cashew-butter.jpg",
  "sunflower butter": "sunflower-seed-butter.jpg",
  "nutella": "nutella.jpg",
  "hazelnut spread": "nutella.jpg",

  // ── SPICES & HERBS ──────────────────────────────────────────────────────
  "salt": "salt.jpg",
  "sea salt": "sea-salt.jpg",
  "kosher salt": "kosher-salt.jpg",
  "table salt": "salt.jpg",
  "black pepper": "pepper.jpg",
  "pepper": "pepper.jpg",
  "peppercorns": "peppercorns.jpg",
  "white pepper": "white-pepper.jpg",
  "cayenne pepper": "cayenne.jpg",
  "cayenne": "cayenne.jpg",
  "red pepper flakes": "red-pepper-flakes.jpg",
  "crushed red pepper": "red-pepper-flakes.jpg",
  "chili powder": "chili-powder.jpg",
  "chipotle powder": "chipotle-powder.jpg",
  "paprika": "paprika.jpg",
  "smoked paprika": "smoked-paprika.jpg",
  "hungarian paprika": "paprika.jpg",
  "cumin": "cumin.jpg",
  "ground cumin": "cumin.jpg",
  "cumin seeds": "cumin-seeds.jpg",
  "coriander": "coriander-seeds.jpg",
  "ground coriander": "ground-coriander.jpg",
  "turmeric": "turmeric.jpg",
  "ground turmeric": "turmeric.jpg",
  "cinnamon": "cinnamon.jpg",
  "ground cinnamon": "cinnamon.jpg",
  "cinnamon sticks": "cinnamon-sticks.jpg",
  "nutmeg": "nutmeg.jpg",
  "ground nutmeg": "nutmeg.jpg",
  "cloves": "cloves.jpg",
  "ground cloves": "ground-cloves.jpg",
  "allspice": "allspice.jpg",
  "cardamom": "cardamom.jpg",
  "ground cardamom": "cardamom.jpg",
  "cardamom pods": "cardamom-pods.jpg",
  "star anise": "star-anise.jpg",
  "anise": "anise.jpg",
  "fennel seeds": "fennel-seeds.jpg",
  "caraway seeds": "caraway-seeds.jpg",
  "celery seed": "celery-seed.jpg",
  "mustard seeds": "mustard-seeds.jpg",
  "mustard powder": "mustard-powder.jpg",
  "dry mustard": "mustard-powder.jpg",
  "onion powder": "onion-powder.jpg",
  "garlic powder": "garlic-powder.jpg",
  "garlic salt": "garlic-salt.jpg",
  "ginger powder": "ground-ginger.jpg",
  "ground ginger": "ground-ginger.jpg",
  "oregano": "oregano.jpg",
  "dried oregano": "oregano.jpg",
  "basil": "basil.jpg",
  "fresh basil": "fresh-basil.jpg",
  "dried basil": "dried-basil.jpg",
  "thyme": "thyme.jpg",
  "fresh thyme": "fresh-thyme.jpg",
  "dried thyme": "dried-thyme.jpg",
  "rosemary": "rosemary.jpg",
  "fresh rosemary": "fresh-rosemary.jpg",
  "dried rosemary": "dried-rosemary.jpg",
  "sage": "sage.jpg",
  "fresh sage": "fresh-sage.jpg",
  "parsley": "parsley.jpg",
  "fresh parsley": "fresh-parsley.jpg",
  "dried parsley": "dried-parsley.jpg",
  "cilantro": "cilantro.jpg",
  "fresh cilantro": "cilantro.jpg",
  "coriander leaves": "cilantro.jpg",
  "dill": "dill.jpg",
  "fresh dill": "fresh-dill.jpg",
  "dried dill": "dill.jpg",
  "dill weed": "dill.jpg",
  "mint": "mint.jpg",
  "fresh mint": "fresh-mint.jpg",
  "peppermint": "peppermint.jpg",
  "spearmint": "spearmint.jpg",
  "tarragon": "tarragon.jpg",
  "marjoram": "marjoram.jpg",
  "bay leaf": "bay-leaves.jpg",
  "bay leaves": "bay-leaves.jpg",
  "lemongrass": "lemongrass.jpg",
  "lavender": "lavender.jpg",
  "chive": "chives.jpg",
  "italian seasoning": "italian-seasoning.jpg",
  "herbs de provence": "herbs-de-provence.jpg",
  "herbes de provence": "herbs-de-provence.jpg",
  "poultry seasoning": "poultry-seasoning.jpg",
  "taco seasoning": "taco-seasoning.jpg",
  "old bay": "old-bay-seasoning.jpg",
  "old bay seasoning": "old-bay-seasoning.jpg",
  "cajun seasoning": "cajun-seasoning.jpg",
  "curry powder": "curry-powder.jpg",
  "garam masala": "garam-masala.jpg",
  "five spice": "five-spice-powder.jpg",
  "chinese five spice": "five-spice-powder.jpg",
  "za'atar": "zaatar.jpg",
  "zaatar": "zaatar.jpg",
  "sumac": "sumac.jpg",
  "saffron": "saffron.jpg",
  "vanilla extract": "vanilla-extract.jpg",
  "vanilla": "vanilla.jpg",
  "vanilla bean": "vanilla-bean.jpg",
  "almond extract": "almond-extract.jpg",
  "peppermint extract": "peppermint-extract.jpg",
  "lemon extract": "lemon-extract.jpg",
  "food coloring": "food-coloring.jpg",
  "cream of tartar": "cream-of-tartar.jpg",
  "msg": "msg.jpg",
  "bouillon": "bouillon-cubes.jpg",
  "bouillon cubes": "bouillon-cubes.jpg",
  "chicken bouillon": "bouillon-cubes.jpg",
  "beef bouillon": "bouillon-cubes.jpg",
  "seasoning salt": "seasoning-salt.jpg",
  "everything bagel seasoning": "everything-bagel-seasoning.jpg",
  "ranch seasoning": "ranch-seasoning.jpg",
  "lemon pepper": "lemon-pepper.jpg",
  "steak seasoning": "steak-seasoning.jpg",

  // ── LEGUMES & NUTS ──────────────────────────────────────────────────────
  "black beans": "black-beans.jpg",
  "kidney beans": "kidney-beans.jpg",
  "pinto beans": "pinto-beans.jpg",
  "navy beans": "navy-beans.jpg",
  "cannellini beans": "cannellini-beans.jpg",
  "white beans": "cannellini-beans.jpg",
  "great northern beans": "great-northern-beans.jpg",
  "lima beans": "lima-beans.jpg",
  "garbanzo beans": "chickpeas.jpg",
  "chickpeas": "chickpeas.jpg",
  "chickpea": "chickpeas.jpg",
  "lentils": "lentils.jpg",
  "red lentils": "red-lentils.jpg",
  "green lentils": "green-lentils.jpg",
  "brown lentils": "lentils.jpg",
  "black lentils": "black-lentils.jpg",
  "split peas": "split-peas.jpg",
  "black eyed peas": "black-eyed-peas.jpg",
  "refried beans": "refried-beans.jpg",
  "baked beans": "baked-beans.jpg",
  "bean": "beans.jpg",
  "beans": "beans.jpg",
  "soybeans": "soybeans.jpg",
  "tofu": "tofu.jpg",
  "firm tofu": "firm-tofu.jpg",
  "silken tofu": "silken-tofu.jpg",
  "tempeh": "tempeh.jpg",
  "seitan": "seitan.jpg",
  "almond": "almonds.jpg",
  "almonds": "almonds.jpg",
  "sliced almonds": "sliced-almonds.jpg",
  "slivered almonds": "slivered-almonds.jpg",
  "almond flour": "almond-flour.jpg",
  "walnut": "walnuts.jpg",
  "walnuts": "walnuts.jpg",
  "pecan": "pecans.jpg",
  "pecans": "pecans.jpg",
  "cashew": "cashews.jpg",
  "cashews": "cashews.jpg",
  "pistachio": "pistachios.jpg",
  "pistachios": "pistachios.jpg",
  "peanut": "peanuts.jpg",
  "peanuts": "peanuts.jpg",
  "macadamia": "macadamia-nuts.jpg",
  "macadamia nuts": "macadamia-nuts.jpg",
  "brazil nuts": "brazil-nuts.jpg",
  "hazelnuts": "hazelnuts.jpg",
  "hazelnut": "hazelnuts.jpg",
  "filbert": "hazelnuts.jpg",
  "pine nuts": "pine-nuts.jpg",
  "pine nut": "pine-nuts.jpg",
  "pignoli": "pine-nuts.jpg",
  "chestnut": "chestnuts.jpg",
  "chestnuts": "chestnuts.jpg",
  "mixed nuts": "mixed-nuts.jpg",
  "trail mix": "trail-mix.jpg",
  "sunflower seeds": "sunflower-seeds.jpg",
  "pumpkin seeds": "pumpkin-seeds.jpg",
  "pepitas": "pumpkin-seeds.jpg",
  "sesame seeds": "sesame-seeds.jpg",
  "chia seeds": "chia-seeds.jpg",
  "flax seeds": "flax-seeds.jpg",
  "flaxseed": "flax-seeds.jpg",
  "ground flaxseed": "ground-flaxseed.jpg",
  "hemp seeds": "hemp-seeds.jpg",
  "poppy seeds": "poppy-seeds.jpg",

  // ── BEVERAGES ───────────────────────────────────────────────────────────
  "water": "water.jpg",
  "sparkling water": "sparkling-water.jpg",
  "seltzer": "sparkling-water.jpg",
  "club soda": "club-soda.jpg",
  "tonic water": "tonic-water.jpg",
  "coconut water": "coconut-water.jpg",
  "orange juice": "orange-juice.jpg",
  "apple juice": "apple-juice.jpg",
  "cranberry juice": "cranberry-juice.jpg",
  "grape juice": "grape-juice.jpg",
  "grapefruit juice": "grapefruit-juice.jpg",
  "pineapple juice": "pineapple-juice.jpg",
  "tomato juice": "tomato-juice.jpg",
  "lemon juice": "lemon-juice.jpg",
  "lime juice": "lime-juice.jpg",
  "pomegranate juice": "pomegranate-juice.jpg",
  "juice": "orange-juice.jpg",
  "lemonade": "lemonade.jpg",
  "iced tea": "iced-tea.jpg",
  "coffee": "brewed-coffee.jpg",
  "ground coffee": "ground-coffee.jpg",
  "coffee beans": "coffee-beans.jpg",
  "instant coffee": "instant-coffee.jpg",
  "espresso": "espresso.jpg",
  "decaf coffee": "decaf-coffee.jpg",
  "cold brew": "cold-brew.jpg",
  "cold brew coffee": "cold-brew.jpg",
  "tea": "tea-bags.jpg",
  "green tea": "green-tea.jpg",
  "black tea": "black-tea.jpg",
  "herbal tea": "herbal-tea.jpg",
  "chamomile tea": "chamomile-tea.jpg",
  "chai tea": "chai-tea.jpg",
  "earl grey": "earl-grey.jpg",
  "matcha": "matcha.jpg",
  "matcha powder": "matcha.jpg",
  "hot chocolate": "hot-chocolate-mix.jpg",
  "cocoa mix": "hot-chocolate-mix.jpg",
  "hot cocoa": "hot-chocolate-mix.jpg",
  "soda": "soda.jpg",
  "cola": "cola.jpg",
  "diet coke": "cola.jpg",
  "sprite": "lemon-lime-soda.jpg",
  "ginger ale": "ginger-ale.jpg",
  "root beer": "root-beer.jpg",
  "cream soda": "cream-soda.jpg",
  "energy drink": "energy-drink.jpg",
  "sports drink": "sports-drink.jpg",
  "gatorade": "sports-drink.jpg",
  "almond milk": "almond-milk.jpg",
  "oat milk": "oat-milk.jpg",
  "soy milk": "soy-milk.jpg",
  "coconut milk": "coconut-milk.jpg",
  "rice milk": "rice-milk.jpg",
  "cashew milk": "cashew-milk.jpg",
  "hemp milk": "hemp-milk.jpg",
  "chocolate milk": "chocolate-milk.jpg",
  "eggnog": "eggnog.jpg",
  "protein shake": "protein-shake.jpg",
  "smoothie": "smoothie.jpg",
  "kombucha": "kombucha.jpg",
  "apple cider": "apple-cider.jpg",
  "cider": "apple-cider.jpg",
  "beer": "beer.jpg",
  "wine": "wine.jpg",
  "red wine": "red-wine.jpg",
  "white wine": "white-wine.jpg",
  "champagne": "champagne.jpg",
  "prosecco": "prosecco.jpg",
  "sake": "sake.jpg",
  "vodka": "vodka.jpg",
  "rum": "rum.jpg",
  "tequila": "tequila.jpg",
  "whiskey": "whiskey.jpg",
  "bourbon": "bourbon.jpg",
  "gin": "gin.jpg",
  "brandy": "brandy.jpg",
  "cooking wine": "cooking-wine.jpg",
  "sherry": "sherry.jpg",
  "marsala wine": "marsala.jpg",
  "rice wine": "rice-wine.jpg",
  "mirin": "mirin.jpg",
  "vermouth": "vermouth.jpg",

  // ── SNACKS ──────────────────────────────────────────────────────────────
  "chips": "potato-chips.jpg",
  "potato chips": "potato-chips.jpg",
  "tortilla chips": "tortilla-chips.jpg",
  "corn chips": "corn-chips.jpg",
  "pita chips": "pita-chips.jpg",
  "veggie chips": "veggie-chips.jpg",
  "kettle chips": "kettle-chips.jpg",
  "pretzels": "pretzels.jpg",
  "pretzel": "pretzels.jpg",
  "popcorn": "popcorn.jpg",
  "microwave popcorn": "microwave-popcorn.jpg",
  "cheese puffs": "cheese-puffs.jpg",
  "cheetos": "cheese-puffs.jpg",
  "doritos": "tortilla-chips.jpg",
  "goldfish": "goldfish-crackers.jpg",
  "animal crackers": "animal-crackers.jpg",
  "cookies": "cookies.jpg",
  "cookie": "cookies.jpg",
  "chocolate chip cookies": "chocolate-chip-cookies.jpg",
  "oreos": "oreos.jpg",
  "oreo": "oreos.jpg",
  "brownie": "brownies.jpg",
  "brownies": "brownies.jpg",
  "brownie mix": "brownie-mix.jpg",
  "granola bar": "granola-bar.jpg",
  "granola bars": "granola-bar.jpg",
  "protein bar": "protein-bar.jpg",
  "protein bars": "protein-bar.jpg",
  "energy bar": "energy-bar.jpg",
  "fruit snacks": "fruit-snacks.jpg",
  "dried fruit": "dried-fruit.jpg",
  "fruit leather": "fruit-leather.jpg",
  "fruit roll up": "fruit-leather.jpg",
  "gummy bears": "gummy-bears.jpg",
  "gummies": "gummy-bears.jpg",
  "chocolate": "dark-chocolate.jpg",
  "dark chocolate": "dark-chocolate.jpg",
  "milk chocolate": "milk-chocolate.jpg",
  "white chocolate": "white-chocolate.jpg",
  "chocolate bar": "chocolate-bar.jpg",
  "chocolate chips": "chocolate-chips.jpg",
  "candy": "candy.jpg",
  "candy bar": "candy-bar.jpg",
  "m&ms": "m-and-ms.jpg",
  "skittles": "skittles.jpg",
  "marshmallow": "marshmallows.jpg",
  "marshmallows": "marshmallows.jpg",
  "licorice": "licorice.jpg",
  "jelly beans": "jelly-beans.jpg",
  "caramel": "caramel.jpg",
  "toffee": "toffee.jpg",
  "fudge": "fudge.jpg",
  "mints": "mints.jpg",
  "rice krispie treats": "rice-krispie-treats.jpg",
  "pudding": "pudding.jpg",
  "pudding cup": "pudding.jpg",
  "jello": "jello.jpg",
  "gelatin": "gelatin.jpg",
  "fruit cup": "fruit-cup.jpg",
  "nuts": "mixed-nuts.jpg",
  "roasted peanuts": "roasted-peanuts.jpg",
  "salted peanuts": "roasted-peanuts.jpg",
  "honey roasted peanuts": "honey-roasted-peanuts.jpg",
  "wasabi peas": "wasabi-peas.jpg",
  "seaweed snacks": "seaweed-snacks.jpg",
  "cheese crackers": "cheese-crackers.jpg",
  "wheat thins": "wheat-thins.jpg",
  "triscuits": "triscuits.jpg",
  "ritz crackers": "ritz-crackers.jpg",

  // ── BAKING ──────────────────────────────────────────────────────────────
  "flour": "flour.jpg",
  "all purpose flour": "all-purpose-flour.jpg",
  "all-purpose flour": "all-purpose-flour.jpg",
  "bread flour": "bread-flour.jpg",
  "cake flour": "cake-flour.jpg",
  "self rising flour": "self-rising-flour.jpg",
  "self-rising flour": "self-rising-flour.jpg",
  "whole wheat flour": "whole-wheat-flour.jpg",
  "coconut flour": "coconut-flour.jpg",
  "rice flour": "rice-flour.jpg",
  "tapioca flour": "tapioca-flour.jpg",
  "tapioca starch": "tapioca-flour.jpg",
  "cornstarch": "cornstarch.jpg",
  "corn starch": "cornstarch.jpg",
  "arrowroot": "arrowroot-powder.jpg",
  "arrowroot powder": "arrowroot-powder.jpg",
  "sugar": "sugar.jpg",
  "white sugar": "sugar.jpg",
  "granulated sugar": "sugar.jpg",
  "brown sugar": "brown-sugar.jpg",
  "light brown sugar": "light-brown-sugar.jpg",
  "dark brown sugar": "dark-brown-sugar.jpg",
  "powdered sugar": "powdered-sugar.jpg",
  "confectioners sugar": "powdered-sugar.jpg",
  "icing sugar": "powdered-sugar.jpg",
  "turbinado sugar": "turbinado-sugar.jpg",
  "raw sugar": "turbinado-sugar.jpg",
  "coconut sugar": "coconut-sugar.jpg",
  "stevia": "stevia.jpg",
  "splenda": "splenda.jpg",
  "sweetener": "sugar.jpg",
  "artificial sweetener": "sugar-substitute.jpg",
  "baking powder": "baking-powder.jpg",
  "baking soda": "baking-soda.jpg",
  "yeast": "yeast.jpg",
  "active dry yeast": "active-dry-yeast.jpg",
  "instant yeast": "instant-yeast.jpg",
  "cocoa powder": "cocoa-powder.jpg",
  "unsweetened cocoa": "cocoa-powder.jpg",
  "dutch process cocoa": "dutch-process-cocoa.jpg",
  "baking chocolate": "baking-chocolate.jpg",
  "unsweetened chocolate": "unsweetened-chocolate.jpg",
  "semi sweet chocolate": "semi-sweet-chocolate.jpg",
  "chocolate chunks": "chocolate-chunks.jpg",
  "white chocolate chips": "white-chocolate-chips.jpg",
  "butterscotch chips": "butterscotch-chips.jpg",
  "peanut butter chips": "peanut-butter-chips.jpg",
  "sprinkles": "sprinkles.jpg",
  "food color": "food-coloring.jpg",
  "cake mix": "cake-mix.jpg",
  "pancake mix": "pancake-mix.jpg",
  "waffle mix": "pancake-mix.jpg",
  "bisquick": "bisquick.jpg",
  "muffin mix": "muffin-mix.jpg",
  "cornbread mix": "cornbread-mix.jpg",
  "frosting": "frosting.jpg",
  "icing": "frosting.jpg",
  "cake frosting": "frosting.jpg",
  "whipped topping": "whipped-cream.jpg",
  "pie filling": "pie-filling.jpg",
  "cherry pie filling": "cherry-pie-filling.jpg",
  "apple pie filling": "apple-pie-filling.jpg",
  "pumpkin puree": "pumpkin-puree.jpg",
  "canned pumpkin": "pumpkin-puree.jpg",
  "sweetened condensed milk": "condensed-milk.jpg",
  "shredded coconut": "shredded-coconut.jpg",
  "coconut flakes": "coconut-flakes.jpg",
  "pectin": "pectin.jpg",
  "meringue powder": "meringue-powder.jpg",
  "corn meal": "cornmeal.jpg",

  // ── CANNED GOODS ────────────────────────────────────────────────────────
  "canned tomatoes": "canned-tomatoes.jpg",
  "diced tomatoes": "diced-tomatoes.jpg",
  "crushed tomatoes": "crushed-tomatoes.jpg",
  "stewed tomatoes": "stewed-tomatoes.jpg",
  "whole peeled tomatoes": "whole-peeled-tomatoes.jpg",
  "san marzano tomatoes": "san-marzano-tomatoes.jpg",
  "fire roasted tomatoes": "fire-roasted-tomatoes.jpg",
  "rotel": "rotel.jpg",
  "canned beans": "canned-beans.jpg",
  "canned black beans": "canned-black-beans.jpg",
  "canned kidney beans": "canned-kidney-beans.jpg",
  "canned chickpeas": "canned-chickpeas.jpg",
  "canned corn": "canned-corn.jpg",
  "creamed corn": "creamed-corn.jpg",
  "canned peas": "canned-peas.jpg",
  "canned green beans": "canned-green-beans.jpg",
  "canned mushrooms": "canned-mushrooms.jpg",
  "canned olives": "olives.jpg",
  "olives": "olives.jpg",
  "black olives": "black-olives.jpg",
  "green olives": "green-olives.jpg",
  "kalamata olives": "kalamata-olives.jpg",
  "stuffed olives": "stuffed-olives.jpg",
  "capers": "capers.jpg",
  "pickles": "pickles.jpg",
  "dill pickles": "dill-pickles.jpg",
  "sweet pickles": "sweet-pickles.jpg",
  "pickle": "pickles.jpg",
  "sauerkraut": "sauerkraut.jpg",
  "kimchi": "kimchi.jpg",
  "canned salmon": "canned-salmon.jpg",
  "canned chicken": "canned-chicken.jpg",
  "spam": "spam.jpg",
  "vienna sausage": "vienna-sausages.jpg",
  "chicken broth": "chicken-broth.jpg",
  "beef broth": "beef-broth.jpg",
  "vegetable broth": "vegetable-broth.jpg",
  "bone broth": "bone-broth.jpg",
  "broth": "chicken-broth.jpg",
  "stock": "chicken-broth.jpg",
  "chicken stock": "chicken-stock.jpg",
  "beef stock": "beef-stock.jpg",
  "vegetable stock": "vegetable-stock.jpg",
  "soup": "soup.jpg",
  "chicken noodle soup": "chicken-noodle-soup.jpg",
  "tomato soup": "tomato-soup.jpg",
  "cream of mushroom soup": "cream-of-mushroom-soup.jpg",
  "cream of chicken soup": "cream-of-chicken-soup.jpg",
  "clam chowder": "clam-chowder.jpg",
  "chili": "chili.jpg",
  "canned chili": "canned-chili.jpg",
  "coconut cream": "coconut-cream.jpg",
  "canned coconut milk": "coconut-milk.jpg",
  "evaporated milk": "evaporated-milk.jpg",
  "roasted red peppers": "roasted-red-peppers.jpg",
  "chipotle peppers": "chipotle-peppers.jpg",
  "chipotles in adobo": "chipotle-peppers.jpg",
  "green chiles": "green-chiles.jpg",
  "diced green chiles": "green-chiles.jpg",
  "jalapenos": "jarred-jalapenos.jpg",
  "pickled jalapenos": "jarred-jalapenos.jpg",
  "pepperoncini": "pepperoncini.jpg",
  "sun dried tomatoes in oil": "sundried-tomatoes.jpg",
  "artichoke hearts": "artichoke-hearts.jpg",
  "canned artichoke hearts": "artichoke-hearts.jpg",
  "water chestnuts": "water-chestnuts.jpg",
  "canned pineapple": "canned-pineapple.jpg",
  "mandarin oranges": "mandarin-oranges.jpg",
  "canned mandarin oranges": "mandarin-oranges.jpg",
  "canned peaches": "canned-peaches.jpg",
  "canned pears": "canned-pears.jpg",

  // ── FROZEN FOODS ────────────────────────────────────────────────────────
  "frozen vegetables": "frozen-vegetables.jpg",
  "frozen broccoli": "frozen-broccoli.jpg",
  "frozen spinach": "frozen-spinach.jpg",
  "frozen green beans": "frozen-green-beans.jpg",
  "frozen cauliflower": "frozen-cauliflower.jpg",
  "frozen stir fry vegetables": "frozen-stir-fry-vegetables.jpg",
  "frozen french fries": "french-fries.jpg",
  "french fries": "french-fries.jpg",
  "fries": "french-fries.jpg",
  "tater tots": "tater-tots.jpg",
  "hash browns": "hash-browns.jpg",
  "frozen hash browns": "hash-browns.jpg",
  "frozen pizza": "frozen-pizza.jpg",
  "pizza": "frozen-pizza.jpg",
  "frozen waffles": "frozen-waffles.jpg",
  "waffles": "frozen-waffles.jpg",
  "frozen pancakes": "frozen-pancakes.jpg",
  "frozen burritos": "frozen-burrito.jpg",
  "frozen dinner": "frozen-dinner.jpg",
  "tv dinner": "frozen-dinner.jpg",
  "frozen meal": "frozen-dinner.jpg",
  "chicken nuggets": "chicken-nuggets.jpg",
  "frozen chicken nuggets": "chicken-nuggets.jpg",
  "fish sticks": "fish-sticks.jpg",
  "frozen fish sticks": "fish-sticks.jpg",
  "frozen shrimp": "frozen-shrimp.jpg",
  "frozen fruit": "frozen-fruit.jpg",
  "frozen mango": "frozen-mango.jpg",
  "frozen peaches": "frozen-peaches.jpg",
  "frozen pineapple": "frozen-pineapple.jpg",
  "frozen edamame": "frozen-edamame.jpg",
  "ice cream sandwich": "ice-cream-sandwich.jpg",
  "popsicle": "popsicle.jpg",
  "ice pop": "popsicle.jpg",
  "frozen pie": "frozen-pie.jpg",
  "frozen pie crust": "frozen-pie-crust.jpg",
  "cool whip": "whipped-cream.jpg",
  "frozen bread dough": "frozen-bread-dough.jpg",
  "frozen rolls": "frozen-rolls.jpg",
  "frozen bagels": "frozen-bagels.jpg",
  "egg rolls": "egg-rolls.jpg",
  "frozen egg rolls": "egg-rolls.jpg",
  "pot stickers": "pot-stickers.jpg",
  "dumplings": "dumplings.jpg",
  "frozen dumplings": "dumplings.jpg",
  "samosas": "samosas.jpg",
  "frozen samosas": "samosas.jpg",
  "frozen meatballs": "frozen-meatballs.jpg",
  "frozen burger patties": "frozen-burger-patties.jpg",
  "veggie burger": "veggie-burger.jpg",
  "veggie burgers": "veggie-burger.jpg",
  "impossible burger": "veggie-burger.jpg",
  "beyond burger": "veggie-burger.jpg",

  // ── BREAKFAST ───────────────────────────────────────────────────────────
  "pancake": "pancakes.jpg",
  "pancakes": "pancakes.jpg",
  "waffle": "waffles.jpg",
  "french toast": "french-toast.jpg",
  "breakfast sausage": "breakfast-sausage.jpg",
  "sausage links": "sausage-links.jpg",
  "sausage patties": "sausage-patties.jpg",
  "hash brown": "hash-browns.jpg",

  // ── DELI & PREPARED ─────────────────────────────────────────────────────
  "deli meat": "deli-meat.jpg",
  "lunch meat": "deli-meat.jpg",
  "roast beef": "roast-beef.jpg",
  "deli roast beef": "roast-beef.jpg",
  "chicken salad": "chicken-salad.jpg",
  "tuna salad": "tuna-salad.jpg",
  "egg salad": "egg-salad.jpg",
  "coleslaw": "coleslaw.jpg",
  "potato salad": "potato-salad.jpg",
  "macaroni salad": "macaroni-salad.jpg",

  // ── CLEANING & HOUSEHOLD PRODUCTS ───────────────────────────────────────
  "dish soap": "dish-soap.jpg",
  "dishwasher detergent": "dishwasher-detergent.jpg",
  "dishwasher pods": "dishwasher-detergent.jpg",
  "laundry detergent": "laundry-detergent.jpg",
  "fabric softener": "fabric-softener.jpg",
  "dryer sheets": "dryer-sheets.jpg",
  "bleach": "bleach.jpg",
  "all purpose cleaner": "all-purpose-cleaner.jpg",
  "glass cleaner": "glass-cleaner.jpg",
  "windex": "glass-cleaner.jpg",
  "disinfectant": "disinfectant.jpg",
  "disinfectant wipes": "disinfectant-wipes.jpg",
  "clorox wipes": "disinfectant-wipes.jpg",
  "lysol": "disinfectant.jpg",
  "paper towels": "paper-towels.jpg",
  "paper towel": "paper-towels.jpg",
  "toilet paper": "toilet-paper.jpg",
  "tissues": "tissues.jpg",
  "facial tissue": "tissues.jpg",
  "kleenex": "tissues.jpg",
  "napkins": "napkins.jpg",
  "trash bags": "trash-bags.jpg",
  "garbage bags": "trash-bags.jpg",
  "zip lock bags": "ziplock-bags.jpg",
  "ziploc bags": "ziplock-bags.jpg",
  "plastic wrap": "plastic-wrap.jpg",
  "saran wrap": "plastic-wrap.jpg",
  "cling wrap": "plastic-wrap.jpg",
  "aluminum foil": "aluminum-foil.jpg",
  "foil": "aluminum-foil.jpg",
  "tin foil": "aluminum-foil.jpg",
  "parchment paper": "parchment-paper.jpg",
  "wax paper": "wax-paper.jpg",
  "sponge": "sponge.jpg",
  "sponges": "sponge.jpg",
  "steel wool": "steel-wool.jpg",
  "scrub brush": "scrub-brush.jpg",
  "mop": "mop.jpg",
  "broom": "broom.jpg",
  "dustpan": "dustpan.jpg",
  "vacuum bags": "vacuum-bags.jpg",
  "air freshener": "air-freshener.jpg",
  "candles": "candles.jpg",
  "candle": "candles.jpg",
  "matches": "matches.jpg",
  "lighter": "lighter.jpg",
  "batteries": "batteries.jpg",
  "light bulbs": "light-bulbs.jpg",
  "light bulb": "light-bulbs.jpg",

  // ── PERSONAL CARE ───────────────────────────────────────────────────────
  "shampoo": "shampoo.jpg",
  "conditioner": "conditioner.jpg",
  "body wash": "body-wash.jpg",
  "soap": "bar-soap.jpg",
  "bar soap": "bar-soap.jpg",
  "hand soap": "hand-soap.jpg",
  "lotion": "lotion.jpg",
  "body lotion": "lotion.jpg",
  "hand lotion": "lotion.jpg",
  "sunscreen": "sunscreen.jpg",
  "sunblock": "sunscreen.jpg",
  "deodorant": "deodorant.jpg",
  "antiperspirant": "deodorant.jpg",
  "toothpaste": "toothpaste.jpg",
  "toothbrush": "toothbrush.jpg",
  "mouthwash": "mouthwash.jpg",
  "dental floss": "dental-floss.jpg",
  "floss": "dental-floss.jpg",
  "razor": "razor.jpg",
  "razors": "razor.jpg",
  "shaving cream": "shaving-cream.jpg",
  "cotton balls": "cotton-balls.jpg",
  "cotton swabs": "cotton-swabs.jpg",
  "q-tips": "cotton-swabs.jpg",
  "band-aids": "band-aids.jpg",
  "bandages": "band-aids.jpg",
  "first aid kit": "first-aid-kit.jpg",
  "hand sanitizer": "hand-sanitizer.jpg",
  "face wash": "face-wash.jpg",
  "moisturizer": "moisturizer.jpg",
  "lip balm": "lip-balm.jpg",
  "chapstick": "lip-balm.jpg",
  "hair gel": "hair-gel.jpg",
  "hair spray": "hair-spray.jpg",
  "nail polish remover": "nail-polish-remover.jpg",

  // ── BABY PRODUCTS ───────────────────────────────────────────────────────
  "baby food": "baby-food.jpg",
  "baby formula": "baby-formula.jpg",
  "formula": "baby-formula.jpg",
  "infant formula": "baby-formula.jpg",
  "baby cereal": "baby-cereal.jpg",
  "baby puffs": "baby-puffs.jpg",
  "diapers": "diapers.jpg",
  "diaper": "diapers.jpg",
  "baby wipes": "baby-wipes.jpg",
  "wipes": "baby-wipes.jpg",
  "diaper cream": "diaper-cream.jpg",
  "baby lotion": "baby-lotion.jpg",
  "baby shampoo": "baby-shampoo.jpg",
  "baby wash": "baby-wash.jpg",
  "baby bottle": "baby-bottle.jpg",
  "sippy cup": "sippy-cup.jpg",
  "pacifier": "pacifier.jpg",
  "teething ring": "teething-ring.jpg",
  "baby snacks": "baby-snacks.jpg",
  "baby yogurt": "baby-yogurt.jpg",
  "toddler snacks": "toddler-snacks.jpg",
  "kids snacks": "toddler-snacks.jpg",
  "juice box": "juice-box.jpg",
  "juice boxes": "juice-box.jpg",
  "applesauce pouches": "applesauce-pouch.jpg",
  "squeeze pouch": "applesauce-pouch.jpg",
  "pedialyte": "pedialyte.jpg",

  // ── PET FOOD & SUPPLIES ─────────────────────────────────────────────────
  "dog food": "dog-food.jpg",
  "dry dog food": "dry-dog-food.jpg",
  "wet dog food": "wet-dog-food.jpg",
  "canned dog food": "wet-dog-food.jpg",
  "puppy food": "puppy-food.jpg",
  "dog treats": "dog-treats.jpg",
  "dog biscuits": "dog-treats.jpg",
  "cat food": "cat-food.jpg",
  "dry cat food": "dry-cat-food.jpg",
  "wet cat food": "wet-cat-food.jpg",
  "canned cat food": "wet-cat-food.jpg",
  "kitten food": "kitten-food.jpg",
  "cat treats": "cat-treats.jpg",
  "cat litter": "cat-litter.jpg",
  "kitty litter": "cat-litter.jpg",
  "pet food": "dog-food.jpg",
  "fish food": "fish-food.jpg",
  "bird food": "bird-food.jpg",
  "bird seed": "bird-seed.jpg",

  // ── MISCELLANEOUS GROCERY ───────────────────────────────────────────────
  "tortilla chips": "tortilla-chips.jpg",
  "taco seasoning": "taco-seasoning.jpg",
  "taco kit": "taco-kit.jpg",
  "protein powder": "protein-powder.jpg",
  "whey protein": "whey-protein.jpg",
  "collagen": "collagen.jpg",
  "vitamins": "vitamins.jpg",
  "multivitamin": "multivitamin.jpg",
  "vitamin c": "vitamin-c.jpg",
  "vitamin d": "vitamin-d.jpg",
  "fish oil": "fish-oil.jpg",
  "omega 3": "fish-oil.jpg",
  "probiotics": "probiotics.jpg",
  "melatonin": "melatonin.jpg",
  "ibuprofen": "ibuprofen.jpg",
  "advil": "ibuprofen.jpg",
  "tylenol": "tylenol.jpg",
  "acetaminophen": "tylenol.jpg",
  "aspirin": "aspirin.jpg",
  "antacid": "antacid.jpg",
  "tums": "antacid.jpg",
  "cough drops": "cough-drops.jpg",
  "cough syrup": "cough-syrup.jpg",

  // ── ADDITIONAL COMMON ITEMS ─────────────────────────────────────────────
  "tortilla": "flour-tortilla.jpg",
  "pita": "pita-bread.jpg",
  "cooked rice": "cooked-rice.jpg",
  "risotto": "risotto.jpg",
  "polenta": "polenta.jpg",
  "tahini": "tahini.jpg",
  "sriracha": "sriracha.jpg",
  "sambal": "sambal.jpg",
  "chili garlic sauce": "chili-garlic-sauce.jpg",
  "ponzu": "ponzu.jpg",
  "hoisin": "hoisin-sauce.jpg",
  "duck sauce": "duck-sauce.jpg",
  "plum sauce": "plum-sauce.jpg",
  "cocktail sauce": "cocktail-sauce.jpg",
  "tartar sauce": "tartar-sauce.jpg",
  "horseradish sauce": "horseradish-sauce.jpg",
  "wasabi": "wasabi.jpg",
  "soy": "soy-sauce.jpg",
  "nutritional yeast": "nutritional-yeast.jpg",
  "brewer's yeast": "brewers-yeast.jpg",
  "gelatin": "gelatin-unflavored.jpg",
  "agar agar": "agar-agar.jpg",
  "xanthan gum": "xanthan-gum.jpg",
  "cornstarch": "cornstarch.jpg",
  "tapioca": "tapioca.jpg",
  "tapioca pearls": "tapioca-pearls.jpg",
  "boba": "tapioca-pearls.jpg",
};

/**
 * lookupImage(query) — Searches the prebuilt image lookup table for a matching
 * Spoonacular CDN URL. Does case-insensitive matching:
 *   1. Exact match on the full query
 *   2. Partial match — checks if any lookup key starts with the query,
 *      or if the query starts with any lookup key
 *
 * Returns the full CDN URL string if found, or null if no match.
 * This avoids API calls for ~1000 common grocery items.
 */
function lookupImage(query) {
  if (!query) return null;
  const q = query.toLowerCase().trim();

  // Exact match (fastest path)
  if (IMAGE_LOOKUP[q]) {
    return `${SPOON_CDN}/${IMAGE_LOOKUP[q]}`;
  }

  // Partial match — try to find a key that starts with the query or vice versa
  for (const [key, filename] of Object.entries(IMAGE_LOOKUP)) {
    if (key.startsWith(q) || q.startsWith(key)) {
      return `${SPOON_CDN}/${filename}`;
    }
  }

  // No match — caller should fall through to API-based image sources
  return null;
}

// ── RECIPE/DISH NAME DETECTION ───────────────────────────────────────────────
// Detects product names that describe prepared dishes or recipes rather than
// raw ingredients. A user searching "cucumber" wants to buy a cucumber, not
// "Cucumber salad made with cucumber and vinegar". These get rejected outright
// in addResults() so they never reach the client.

// Single words that indicate a dish/recipe when they appear in the product name
// but NOT in the user's search query. Checked after splitting on whitespace.
const RECIPE_WORDS = new Set([
  "salad", "soup", "stew", "casserole", "dish", "recipe", "curry", "pie",
  "sandwich", "wrap", "risotto", "gratin", "puree", "smoothie", "juice",
  "namasu", "pickled", "marinated", "braised", "sauteed", "sautéed",
  "coleslaw", "gazpacho", "chutney", "relish", "compote", "ragout",
  "ratatouille", "succotash", "bruschetta", "ceviche", "tartare",
]);

// Multi-word phrases that signal a recipe/dish description.
// Checked as substrings of the full (lowercased) product name.
const RECIPE_PHRASES = [
  "made with", "and vegetable", "and rice", "and noodle", "and cheese",
  "cooked in", "served with", "topped with", "stuffed with",
  "mixed with", "tossed with", "dressed with",
];

/**
 * isRecipeName(name, query) — Returns true if the product name looks like a
 * prepared dish or recipe rather than a plain ingredient/product.
 * Only triggers when recipe indicators are NOT part of the user's own query
 * (so searching "chicken soup" still returns chicken soup).
 */
function isRecipeName(name, query) {
  const nameLower = (name || "").toLowerCase().trim();
  const queryLower = query.toLowerCase().trim();

  // Exact match is never a recipe mismatch
  if (nameLower === queryLower) return false;

  // Check multi-word recipe phrases in the full name
  for (const phrase of RECIPE_PHRASES) {
    if (nameLower.includes(phrase) && !queryLower.includes(phrase)) return true;
  }

  // Check single recipe indicator words that aren't in the user's query
  const queryWords = new Set(queryLower.split(/\s+/));
  const nameWords = nameLower.split(/[\s,&+\-–—/()[\]]+/).filter(w => w.length >= 2);
  for (const nw of nameWords) {
    if (RECIPE_WORDS.has(nw) && !queryWords.has(nw)) return true;
  }

  return false;
}

// ── RELEVANCE SCORING ────────────────────────────────────────────────────────
// Server-side relevance filter applied to ALL database results.
// Three-layer approach:
//   1. isRelevant() — gate check: query must match a primary word in the name
//   2. isStrictlyRelevant() — majority check: most meaningful words must relate
//   3. isRecipeName() — rejects dish/recipe names (user wants the ingredient)

// Common stop words ignored when checking product name relevance.
// These carry no product-category meaning (articles, prepositions, conjunctions).
const STOP_WORDS = new Set([
  // Articles, prepositions, conjunctions
  "a", "an", "the", "and", "or", "with", "for", "of", "in", "to", "by",
  "is", "it", "at", "on", "no", "not", "all", "each", "per", "from",
  // Marketing / quality descriptors (don't indicate product category)
  "free", "style", "natural", "original", "premium", "organic", "fresh",
  "whole", "pure", "real", "lite", "light", "low", "high", "extra",
  "reduced", "fat", "nonfat", "skim", "raw", "roasted", "unsweetened",
  "sweetened", "flavored", "smoked", "dried", "frozen", "canned",
  // Packaging / measurement units
  "pack", "ct", "oz", "lb", "ml", "kg", "fl", "count", "size",
  "gallon", "quart", "pint", "liter", "bag", "box", "can", "jar",
  "bottle", "container", "pouch", "tub", "carton",
  // Food preparation / flavor descriptors
  "plain", "creamy", "chunky", "crispy", "crunchy", "spicy", "mild",
  "hot", "cold", "classic", "homestyle", "traditional", "artisan",
  "greek", "italian", "mexican", "asian", "indian",
  // Product descriptor noise (common in long product names)
  "mini", "small", "medium", "large", "jumbo", "giant", "big",
  "handheld", "electric", "portable", "automatic", "manual",
  "new", "best", "top", "value", "brand",
]);

/**
 * isRelevant(name, query) — Returns true only if the query is a primary word
 * in the product name (starts with query, or one of the first 3 words matches).
 * First-pass gate filter: anything that fails this is immediately rejected.
 */
function isRelevant(name, query) {
  const nameLower = (name || "").toLowerCase().trim();
  const queryLower = query.toLowerCase().trim();

  // Exact match
  if (nameLower === queryLower) return true;

  // Name starts with query
  if (nameLower.startsWith(queryLower)) return true;

  // Split into words and check the first 3
  const words = nameLower.split(/[\s,&+\-–—/]+/).filter(w => w.length >= 2);
  const earlyWords = words.slice(0, 3);
  for (const w of earlyWords) {
    if (w.startsWith(queryLower) || queryLower.startsWith(w)) return true;
  }

  return false;
}

/**
 * isStrictlyRelevant(name, query) — Stricter second-pass filter.
 * Splits the product name into meaningful words (excluding stop words),
 * then checks that at least half of those words relate to the query terms.
 * A word "relates" if it shares a stem/prefix with any query term (≥3 chars match).
 *
 * This kills results like "Formula Mixer Milk Powder Blender Stirrer Handheld
 * Mini Electric Mixer" for "milk" — only 2 of 8 meaningful words match,
 * so the product is clearly not about milk.
 */
function isStrictlyRelevant(name, query) {
  const nameLower = (name || "").toLowerCase().trim();
  const queryLower = query.toLowerCase().trim();

  // Exact or starts-with always passes
  if (nameLower === queryLower || nameLower.startsWith(queryLower + " ")) return true;

  // Split query into individual search terms
  const queryTerms = queryLower.split(/\s+/).filter(w => w.length >= 2);

  // Split product name into meaningful words (strip stop words, short words, numbers)
  const nameWords = nameLower
    .split(/[\s,&+\-–—/()[\]]+/)
    .filter(w => w.length >= 2 && !STOP_WORDS.has(w) && !/^\d+$/.test(w));

  // If the name has very few meaningful words (≤2), just rely on isRelevant
  if (nameWords.length <= 2) return true;

  // Count how many meaningful name words relate to at least one query term.
  // "Relate" = the name word starts with a query term, or vice versa,
  // or they share a common prefix of ≥3 characters.
  let matched = 0;
  for (const nw of nameWords) {
    const relates = queryTerms.some(qt => {
      if (nw.startsWith(qt) || qt.startsWith(nw)) return true;
      // Shared prefix ≥3 chars (catches plurals, verb forms, etc.)
      const minLen = Math.min(nw.length, qt.length, 3);
      return minLen >= 3 && nw.slice(0, minLen) === qt.slice(0, minLen);
    });
    if (relates) matched++;
  }

  // At least half the meaningful words must relate to the query.
  // For products with many words (like the mixer example), this is a strong filter.
  const ratio = matched / nameWords.length;
  return ratio >= 0.5;
}

// Non-food sources that should be ranked below food results when food sources
// already returned matches. These are legitimate grocery items (shampoo, pet food)
// but shouldn't outrank actual food when the query is ambiguous (e.g. "cucumber").
const NON_FOOD_SOURCES = new Set(["Open Beauty Facts", "Open Pet Food Facts"]);

/**
 * scoreResult(name, query, source) — Server-side relevance score for sorting results
 * before returning to the client. Higher score = better match.
 * Skips stop words in position matching so "Organic Milk" scores as high as "Milk"
 * when searching for "milk". Penalizes names with many extra non-query words
 * (e.g. "Hershey's Special Dark Chocolate Milk" scores lower than "Whole Milk").
 *
 * Non-food sources (beauty, pet) get a -50 penalty when food results exist,
 * ensuring food always ranks above cosmetics/pet products for food queries.
 */
function scoreResult(name, query, source) {
  const nameLower = (name || "").toLowerCase().trim();
  const queryLower = query.toLowerCase().trim();

  // Recipe/dish names get a very low score even if they start with the query —
  // "Cucumber salad made with cucumber and vinegar" should never outrank "Cucumber"
  if (isRecipeName(name, query)) return 2;

  // Compute base relevance score from name-vs-query matching
  let base;

  // Exact match is the best possible result
  if (nameLower === queryLower) {
    base = 100;
  // Name starts with the query (e.g. "Milk 2% Fat" for "milk")
  } else if (nameLower.startsWith(queryLower + " ")) {
    base = 95;
  } else {
    // Split into all words and meaningful-only words (skip stop words)
    const nameWords = nameLower.split(/[\s,&+\-–—/]+/).filter(w => w.length >= 2);
    const meaningful = nameWords.filter(w => !STOP_WORDS.has(w) && !/^\d+$/.test(w));

    // First meaningful word matches query (e.g. "Organic Milk" → "milk" is first meaningful)
    if (meaningful.length && (meaningful[0].startsWith(queryLower) || queryLower.startsWith(meaningful[0]))) {
      const extras = meaningful.filter(w => !w.startsWith(queryLower) && !queryLower.startsWith(w)).length;
      base = 85 - Math.min(extras * 5, 25);
    // Query matches one of the first 3 meaningful words
    } else {
      base = 10; // default: passed filters but query isn't a leading word
      for (let i = 1; i < Math.min(3, meaningful.length); i++) {
        if (meaningful[i].startsWith(queryLower) || queryLower.startsWith(meaningful[i])) {
          const extras = meaningful.filter(w => !w.startsWith(queryLower) && !queryLower.startsWith(w)).length;
          base = 60 - (i * 10) - Math.min(extras * 5, 20);
          break;
        }
      }
    }
  }

  // Non-food sources (beauty, pet food) get a heavy penalty so food results
  // always rank above them. The penalty is large enough (-50) that even a
  // perfect beauty match (100 - 50 = 50) ranks below a decent food match (60+).
  // This keeps them in results for legitimate non-food searches (e.g. "shampoo")
  // while preventing "Cucumber Mint Lip Balm" from outranking actual cucumbers.
  if (source && NON_FOOD_SOURCES.has(source)) {
    base -= 50;
  }

  return Math.max(base, 1); // floor at 1 — never go negative
}

// ── IMAGE CLASSIFICATION ─────────────────────────────────────────────────────
// Distinguishes real product photos (packaging shots from Kroger, Spoonacular
// product images, Open Food Facts, etc.) from generic ingredient illustrations
// (Spoonacular's ingredients_* CDN). Illustrations are a glass of milk or a
// slice of bread — useful as a last resort but always worse than a real photo
// of the actual product packaging.

/**
 * isIngredientIllustration(url) — Returns true if the URL points to a
 * Spoonacular ingredient illustration rather than a real product photo.
 * These are the generic stock illustrations at img.spoonacular.com/ingredients_*
 * (e.g., a glass of milk, a single apple, a piece of bread).
 * Real product photos live at img.spoonacular.com/products/ or on other CDNs.
 */
function isIngredientIllustration(url) {
  if (!url || typeof url !== "string") return false;
  const lower = url.toLowerCase();
  // Spoonacular ingredient CDN — illustrations, not real product photos
  return lower.includes("img.spoonacular.com/ingredients_");
}

// ── IMAGE URL VALIDATION ─────────────────────────────────────────────────────
// Filters out placeholder images, SVG icons, and broken/relative URLs before
// they reach the client. If a URL fails validation, it's treated as "no image"
// and the client can show a generic placeholder instead.

/**
 * isValidImageUrl(url) — Returns true only if the URL looks like a real product
 * photo (not a placeholder icon, SVG, or relative path).
 * Checks:
 *   - Must be absolute (http/https)
 *   - Must not be an SVG (usually icons/logos, not product photos)
 *   - Must not match known placeholder/cart-icon patterns
 *   - Must have a real image extension OR come from a known CDN
 */
function isValidImageUrl(url) {
  if (!url || typeof url !== "string") return false;

  // Must be an absolute URL
  if (!url.startsWith("http://") && !url.startsWith("https://")) return false;

  const lower = url.toLowerCase();

  // Reject SVGs — almost always icons/logos, not product photos
  if (lower.endsWith(".svg") || lower.includes(".svg?")) return false;

  // Reject known placeholder/icon patterns
  const placeholderPatterns = [
    "placeholder", "no-image", "noimage", "no_image", "default-image",
    "cart-icon", "cart_icon", "shopping-cart", "generic-product",
    "missing", "fallback", "dummy", "blank", "empty",
    "1x1", "pixel", "spacer", "transparent",
  ];
  if (placeholderPatterns.some(pat => lower.includes(pat))) return false;

  // Known CDNs that serve real product images — always valid
  const trustedCdns = [
    "spoonacular.com", "kroger.com", "edamam.com",
    "openfoodfacts.org", "openbeautyfacts.org", "openpetfoodfacts.org",
    "googleapis.com", "gstatic.com", "ggpht.com",
    "walmart.com", "target.com", "amazon.com", "cloudinary.com",
    "shopify.com", "walmartimages.com",
  ];
  if (trustedCdns.some(cdn => lower.includes(cdn))) return true;

  // For other URLs, must end with a real image extension
  const imageExts = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"];
  const pathPart = lower.split("?")[0]; // strip query params
  if (imageExts.some(ext => pathPart.endsWith(ext))) return true;

  // URLs with no recognizable image extension and not from a known CDN —
  // could be anything (HTML page, API endpoint, etc.), so reject
  return false;
}

// ── DATABASE SEARCH FUNCTIONS ────────────────────────────────────────────────
// Each function searches one product database and returns an array of
// normalized product objects. Returns [] on failure (never throws).

/**
 * spoonacularImageUrl(raw) — Normalizes a Spoonacular image field into a full URL.
 * Spoonacular returns either a full URL or just a filename (e.g. "apple.jpg") that
 * needs the CDN base URL prepended. Returns null if no image is available.
 *
 * IMPORTANT: The Spoonacular CDN (img.spoonacular.com) only serves .jpg files.
 * Their API sometimes returns .png filenames, but .png URLs 404 on the CDN.
 * We convert any .png extension to .jpg before building the URL.
 */
/**
 * spoonacularImageUrl(raw) — Normalizes a Spoonacular image reference to a full URL.
 * Full URLs are returned as-is. Bare filenames (rare — usually from the ingredients
 * API, not the products API) are resolved to the ingredients CDN as a last resort.
 * The products API almost always returns full URLs like
 * https://img.spoonacular.com/products/12345-312x231.jpg — those pass through unchanged.
 */
function spoonacularImageUrl(raw) {
  if (!raw) return null;
  // Already a full URL — use as-is (most common path for products API)
  if (raw.startsWith("http")) return raw;
  // If the raw value is just an image type like "jpg" (no actual filename),
  // it's unusable — return null instead of constructing a broken URL
  if (raw.length <= 4 && /^\w+$/.test(raw)) return null;
  // Spoonacular CDN only serves .jpg — convert .png → .jpg to avoid 404s
  let filename = raw;
  if (filename.toLowerCase().endsWith(".png")) {
    filename = filename.slice(0, -4) + ".jpg";
  }
  // Bare filename — resolve to ingredients CDN (will be caught by isIngredientIllustration
  // and downgraded to fallback status in addResults)
  return `https://img.spoonacular.com/ingredients_250x250/${filename}`;
}

/**
 * searchSpoonacular(query) — Searches the Spoonacular Grocery Products API.
 * Excellent for fresh produce, common ingredients, and branded grocery items.
 * Requires SPOONACULAR_API_KEY env var.
 */
async function searchSpoonacular(query) {
  const key = process.env.SPOONACULAR_API_KEY;
  if (!key) return []; // API key not configured — skip this source

  try {
    const url = `https://api.spoonacular.com/food/products/search?query=${encodeURIComponent(query)}&number=5&apiKey=${key}`;
    const r = await fetch(url);
    if (!r.ok) return [];
    const d = await r.json();

    return (d.products || []).slice(0, 5).map(p => {
      // Spoonacular may return a bare filename — normalize to full CDN URL, then validate
      const rawImg = p.image || p.imageType || null;
      const fullImg = spoonacularImageUrl(rawImg);
      let validImg = isValidImageUrl(fullImg) ? fullImg : null;
      // Spoonacular product images at img.spoonacular.com require the API key
      // appended as a query parameter — without it browsers get 401 and onerror hides them
      if (validImg && validImg.includes('img.spoonacular.com')) {
        validImg = `${validImg}?apiKey=${key}`;
      }
      // Log what Spoonacular returns so we can verify image extraction in Vercel logs
      console.log(`[Spoonacular] "${p.title}" — raw image: ${rawImg}, resolved: ${fullImg}, authed: ${!!validImg}`);
      return {
        name: p.title || "",
        brand: "",
        category: "Grocery",
        image: validImg,
        source: "Spoonacular",
        description: "",
        nutrition: null,
      };
    }).filter(p => p.name);
  } catch {
    return [];
  }
}

/**
 * searchKroger(query) — Searches the Kroger Products API.
 * Real grocery store inventory with clean product images and brand data.
 * Requires KROGER_API_KEY env var (client_id:client_secret format or bearer token).
 */
async function searchKroger(query) {
  const key = process.env.KROGER_API_KEY;
  if (!key) return []; // API key not configured — skip

  try {
    // Kroger API uses OAuth2 client credentials — the env var should contain
    // a base64-encoded "client_id:client_secret" string for the token request.
    // First, get an access token.
    const tokenRes = await fetch("https://api.kroger.com/v1/connect/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Basic ${key}`,
      },
      body: "grant_type=client_credentials&scope=product.compact",
    });
    if (!tokenRes.ok) return [];
    const tokenData = await tokenRes.json();
    const token = tokenData.access_token;
    if (!token) return [];

    // Search products with the access token
    const url = `https://api.kroger.com/v1/products?filter.term=${encodeURIComponent(query)}&filter.limit=5`;
    const r = await fetch(url, {
      headers: { "Authorization": `Bearer ${token}`, "Accept": "application/json" },
    });
    if (!r.ok) return [];
    const d = await r.json();

    return (d.data || []).slice(0, 5).map(p => {
      // Kroger images are in p.images array — pick the front-facing perspective,
      // preferring "large" or "medium" size for good quality without being huge.
      // Validate that the URL is absolute and a real image (not a placeholder).
      const images = p.images || [];
      const frontImg = images.find(img => img.perspective === "front");
      const anyImg = frontImg || images[0]; // fall back to any available perspective
      let imgUrl = anyImg?.sizes?.find(s => s.size === "large")?.url
        || anyImg?.sizes?.find(s => s.size === "medium")?.url
        || anyImg?.sizes?.[0]?.url
        || null;
      // Kroger sometimes returns relative paths — ensure it's absolute
      if (imgUrl && !imgUrl.startsWith("http")) {
        imgUrl = `https://www.kroger.com${imgUrl.startsWith("/") ? "" : "/"}${imgUrl}`;
      }
      // Validate the image URL is real (not a placeholder/icon)
      if (!isValidImageUrl(imgUrl)) imgUrl = null;

      return {
        name: p.description || "",
        brand: p.brand || "",
        category: (p.categories || []).join(", ") || "Grocery",
        image: imgUrl,
        source: "Kroger",
        description: "",
        nutrition: null,
      };
    }).filter(p => p.name);
  } catch {
    return [];
  }
}

/**
 * searchUSDA(query) — Searches USDA FoodData Central.
 * Authoritative source for fresh produce, whole foods, and generic ingredients.
 * Requires USDA_API_KEY env var. Free tier allows 1000 requests/hour.
 * USDA has no product images — results will have image: null.
 * The client shows a generic placeholder for imageless results.
 */
async function searchUSDA(query) {
  const key = process.env.USDA_API_KEY;
  if (!key) return []; // API key not configured — skip

  try {
    const url = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${encodeURIComponent(query)}&pageSize=5&api_key=${key}`;
    const r = await fetch(url);
    if (!r.ok) return [];
    const d = await r.json();

    return (d.foods || []).slice(0, 5).map(f => {
      // Extract key nutrients from the nutrients array
      const nutrients = f.foodNutrients || [];
      const findNutr = (name) => nutrients.find(n => (n.nutrientName || "").toLowerCase().includes(name.toLowerCase()));
      const cal = findNutr("Energy");
      const protein = findNutr("Protein");
      const fat = findNutr("Total lipid");
      const carbs = findNutr("Carbohydrate");

      return {
        name: f.description || "",
        brand: f.brandName || f.brandOwner || "",
        category: f.foodCategory || "General",
        image: null, // USDA has no product images
        source: "USDA",
        description: f.additionalDescriptions || "",
        nutrition: {
          calories: cal ? Math.round(cal.value) : null,
          protein: protein ? `${protein.value.toFixed(1)}g` : null,
          fat: fat ? `${fat.value.toFixed(1)}g` : null,
          carbs: carbs ? `${carbs.value.toFixed(1)}g` : null,
        },
      };
    }).filter(p => p.name);
  } catch {
    return [];
  }
}

/**
 * searchEdamam(query) — Searches the Edamam Food Database by text.
 * Returns an array of normalized product objects (up to 5).
 * Edamam's parser endpoint supports free-text ingredient search.
 */
async function searchEdamam(query) {
  try {
    const url = `https://api.edamam.com/api/food-database/v2/parser?ingr=${encodeURIComponent(query)}&app_id=${EID}&app_key=${EK}`;
    const r = await fetch(url);
    if (!r.ok) return [];
    const d = await r.json();

    const hints = d.hints || [];
    return hints.slice(0, 5).map(h => {
      const f = h.food;
      const n = f.nutrients || {};
      return {
        name: f.label || "",
        brand: f.brand || "",
        category: f.category || "General",
        image: isValidImageUrl(f.image) ? f.image : null,
        source: "Edamam",
        description: f.categoryLabel || "",
        nutrition: {
          calories: n.ENERC_KCAL ? Math.round(n.ENERC_KCAL) : null,
          protein: n.PROCNT ? `${n.PROCNT.toFixed(1)}g` : null,
          fat: n.FAT ? `${n.FAT.toFixed(1)}g` : null,
          carbs: n.CHOCDF ? `${n.CHOCDF.toFixed(1)}g` : null,
        },
      };
    }).filter(r => r.name);
  } catch {
    return [];
  }
}

/**
 * searchOpenFoodFacts(query) — Text search against Open Food Facts.
 * Uses their v2 search API. No API key needed.
 * Returns an array of normalized product objects (up to 5).
 */
async function searchOpenFoodFacts(query) {
  try {
    // Request image_url too — some products only have a generic image, not a front-specific one
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(query)}&search_simple=1&action=process&json=1&page_size=5&fields=product_name,brands,categories_tags,image_front_small_url,image_front_url,image_url,nutriments,generic_name`;
    const r = await fetch(url, {
      headers: { "User-Agent": "KitchenApp/1.0" }
    });
    if (!r.ok) return [];
    const d = await r.json();

    const products = d.products || [];
    return products.slice(0, 5).map(p => {
      const nm = p.product_name || "";
      if (!nm) return null;

      const nt = p.nutriments || {};
      const hasNutrition = nt["energy-kcal_100g"] || nt["proteins_100g"];

      return {
        name: nm,
        brand: p.brands || "",
        category: ((p.categories_tags || [])[0] || "").replace("en:", "") || "General",
        // Prefer front-facing image, fall back to generic image_url (some packaged goods only have this)
        image: isValidImageUrl(p.image_front_url) ? p.image_front_url
             : isValidImageUrl(p.image_front_small_url) ? p.image_front_small_url
             : isValidImageUrl(p.image_url) ? p.image_url
             : null,
        source: "Open Food Facts",
        description: p.generic_name || "",
        nutrition: hasNutrition ? {
          calories: nt["energy-kcal_100g"] ? Math.round(nt["energy-kcal_100g"]) : null,
          protein: nt["proteins_100g"] ? `${nt["proteins_100g"].toFixed(1)}g` : null,
          fat: nt["fat_100g"] ? `${nt["fat_100g"].toFixed(1)}g` : null,
          carbs: nt["carbohydrates_100g"] ? `${nt["carbohydrates_100g"].toFixed(1)}g` : null,
        } : null,
      };
    }).filter(Boolean);
  } catch {
    return [];
  }
}

/**
 * searchUpcItemDb(query) — Text search against UPC Item DB trial endpoint.
 * General US products across all categories. No API key for trial tier.
 * Limited to 100 lookups/day.
 */
async function searchUpcItemDb(query) {
  try {
    const url = `https://api.upcitemdb.com/prod/trial/search?s=${encodeURIComponent(query)}&type=product`;
    const r = await fetch(url, {
      headers: { "User-Agent": "KitchenApp/1.0" }
    });
    if (!r.ok) return [];
    const d = await r.json();

    return (d.items || []).slice(0, 5).map(i => ({
      name: i.title || "",
      brand: i.brand || "",
      category: i.category || "General",
      image: (i.images || []).find(img => isValidImageUrl(img)) || null,
      source: "UPC Item DB",
      description: i.description || "",
      nutrition: null,
    })).filter(p => p.name);
  } catch {
    return [];
  }
}

/**
 * searchOpenBeautyFacts(query) — Text search against Open Beauty Facts.
 * Cosmetics, shampoos, and personal care products. No API key needed.
 */
async function searchOpenBeautyFacts(query) {
  try {
    const url = `https://world.openbeautyfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(query)}&search_simple=1&action=process&json=1&page_size=5&fields=product_name,brands,categories_tags,image_front_url,generic_name`;
    const r = await fetch(url, {
      headers: { "User-Agent": "KitchenApp/1.0" }
    });
    if (!r.ok) return [];
    const d = await r.json();

    return (d.products || []).slice(0, 5).map(p => {
      const nm = p.product_name || "";
      if (!nm) return null;
      return {
        name: nm,
        brand: p.brands || "",
        category: ((p.categories_tags || [])[0] || "").replace("en:", "") || "Personal Care",
        image: p.image_front_url || null,
        source: "Open Beauty Facts",
        description: p.generic_name || "",
        nutrition: null,
      };
    }).filter(Boolean);
  } catch {
    return [];
  }
}

/**
 * searchOpenPetFoodFacts(query) — Text search against Open Pet Food Facts.
 * Pet food and treats. No API key needed.
 */
async function searchOpenPetFoodFacts(query) {
  try {
    const url = `https://world.openpetfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(query)}&search_simple=1&action=process&json=1&page_size=5&fields=product_name,brands,categories_tags,image_front_url,generic_name`;
    const r = await fetch(url, {
      headers: { "User-Agent": "KitchenApp/1.0" }
    });
    if (!r.ok) return [];
    const d = await r.json();

    return (d.products || []).slice(0, 5).map(p => {
      const nm = p.product_name || "";
      if (!nm) return null;
      return {
        name: nm,
        brand: p.brands || "",
        category: ((p.categories_tags || [])[0] || "").replace("en:", "") || "Pet Food",
        image: p.image_front_url || null,
        source: "Open Pet Food Facts",
        description: p.generic_name || "",
        nutrition: null,
      };
    }).filter(Boolean);
  } catch {
    return [];
  }
}

// ── HANDLER ──────────────────────────────────────────────────────────────────

/**
 * Vercel serverless handler — accepts a GET request with a text query,
 * runs a 5-database waterfall with short-circuit logic, applies strict
 * relevance filtering, deduplicates, and returns the best matches (up to 5).
 *
 * Short-circuit: the waterfall runs databases in tiers. Each tier fires its
 * databases in parallel. As soon as we have >= 3 relevant results after a tier,
 * we stop and return — no need to hit slower/less-relevant sources.
 */
export default async function handler(req, res) {
  // --- CORS + cache-control headers for browser frontend ---
  // no-store prevents 304 responses — every request gets fresh results
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
  res.setHeader("Pragma", "no-cache");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const query = (req.query.q || "").trim();
  const householdId = (req.query.hid || "").trim(); // Optional household ID for custom product lookup
  console.log(`[TextSearch] ── Incoming query: "${query}" | hid: "${householdId}" | method: ${req.method}`);
  if (!query) return res.status(400).json({ error: "Missing 'q' query parameter" });

  // ── Priority 0: Check household's custom product database ─────────
  // If the household has uploaded a custom photo for this product, use it
  // immediately and skip all external API lookups. This makes user-uploaded
  // images the absolute highest priority source.
  if (householdId) {
    const customProduct = await lookupCustomProduct(householdId, query);
    if (customProduct) {
      // If the user previously dismissed (deleted) the image for this product,
      // return empty results so no image is applied — respects user's choice
      // even after the item is deleted and re-added to the shopping list.
      if (customProduct.imageDismissed) {
        console.log(`[TextSearch] ── Image dismissed for "${query}" — returning imageDismissed flag`);
        return res.status(200).json({
          results: [],
          imageDismissed: true
        });
      }

      // Custom photo exists — return it as the sole result, skipping all external APIs.
      // User-uploaded photos are always the highest priority image source.
      console.log(`[TextSearch] ── Returning custom product image for "${query}" — skipping external APIs`);
      return res.status(200).json({
        results: [{
          name: customProduct.name,
          brand: "",
          category: "",
          image: customProduct.imageUrl,
          source: "custom",
        }]
      });
    }
  }

  // ── Pre-check: look up the query in our prebuilt image table ────────
  // Pre-compute the lookup table match so it's ready if needed as a last-resort
  // fallback. This is NOT applied immediately — real product photos from Kroger,
  // Spoonacular products, and Open Food Facts all take priority. The lookup image
  // is only applied in post-processing after all tiers have been searched.
  const lookupImg = lookupImage(query);
  if (lookupImg) {
    console.log(`[TextSearch] Image lookup HIT for "${query}" → ${lookupImg}`);
  }

  // Track all unique results across tiers — deduped by lowercase name
  const seen = new Set();
  const allResults = [];

  /**
   * addResults(results) — Merges new results into allResults, deduplicating
   * by name and applying TWO relevance filters:
   *   1. isRelevant() — query must match a primary/leading word
   *   2. isStrictlyRelevant() — majority of product name words must relate to query
   * This double filter prevents kitchen appliances/gadgets from appearing in food searches.
   */
  function addResults(results) {
    let added = 0;
    for (const r of results) {
      if (!r || !r.name) continue;
      // First gate: query must be a primary word in the product name
      if (!isRelevant(r.name, query)) continue;
      // Second gate: majority of name words must relate to query terms
      if (!isStrictlyRelevant(r.name, query)) {
        console.log(`[TextSearch] Rejected (strict): "${r.name}" for query "${query}"`);
        continue;
      }
      // Third gate: reject recipe/dish names — user wants the raw ingredient,
      // not a prepared dish (e.g. "Cucumber salad" for a "cucumber" search)
      if (isRecipeName(r.name, query)) {
        console.log(`[TextSearch] Rejected (recipe-style): "${r.name}" for query "${query}"`);
        continue;
      }
      // Validate image URL — reject placeholders/icons before they reach the client
      if (r.image && !isValidImageUrl(r.image)) {
        console.log(`[TextSearch] Rejected bad image for "${r.name}": ${r.image}`);
        r.image = null;
      }
      // Downgrade ingredient illustrations to fallback status. Real product photos
      // (Kroger, Spoonacular /products/, Open Food Facts) stay as r.image.
      // Illustrations (Spoonacular /ingredients_*) are saved as _fallbackImg so
      // they're only used when NO real product photo is found from any source.
      if (r.image && isIngredientIllustration(r.image)) {
        console.log(`[TextSearch] Downgraded illustration for "${r.name}": ${r.image}`);
        r._fallbackImg = r.image;
        r.image = null;
      }
      const key = r.name.toLowerCase().trim();
      if (seen.has(key)) {
        // Duplicate name — but upgrade the existing result's image if the new one
        // has a real product photo and the existing one only has an illustration fallback.
        // This prevents Spoonacular's illustration from blocking a Kroger/OFF real photo.
        if (r.image && !isIngredientIllustration(r.image)) {
          const existing = allResults.find(x => x.name.toLowerCase().trim() === key);
          if (existing && !existing.image) {
            console.log(`[TextSearch] Upgraded image for "${existing.name}" from ${r.source}: ${r.image}`);
            existing.image = r.image;
            existing._imageSource = r.source;  // Track which source provided the winning image
          }
        }
        continue;
      }
      seen.add(key);
      // Track the image source for debugging — helps verify priority order in DevTools
      if (r.image) r._imageSource = r.source;
      allResults.push(r);
      added++;
    }
    return added;
  }

  /**
   * applyFallbackImages(results) — Post-processing step that fills in images
   * for results that have no real product photo. Applies fallback images in
   * priority order:
   *   1. The result's own ingredient illustration (from Spoonacular's ingredients CDN)
   *   2. The prebuilt lookup table illustration
   * Only called right before returning results to the client, so all API sources
   * have had a chance to provide a real product photo first.
   */
  function applyFallbackImages(results) {
    for (const r of results) {
      if (!r.image) {
        // No real product photo — apply fallbacks in priority order
        if (r._fallbackImg) {
          // Use the result's own ingredient illustration as first fallback
          r.image = r._fallbackImg;
          r._imageSource = "illustration-fallback";
          console.log(`[TextSearch] Applied illustration fallback to "${r.name}" → ${r._fallbackImg}`);
        } else if (lookupImg) {
          // Last resort: use the prebuilt lookup table illustration
          r.image = lookupImg;
          r._imageSource = "lookup-table";
          console.log(`[TextSearch] Applied lookup fallback to "${r.name}" → ${lookupImg}`);
        }
      }
      // Log the winning image source for every result — verify priority order in Vercel logs
      console.log(`[TextSearch] IMAGE WINNER: "${r.name}" → source: ${r._imageSource || "none"}, url: ${r.image || "(no image)"}`);
      // Clean up internal fields before sending to client
      delete r._fallbackImg;
      delete r._imageSource;
    }
  }

  // Minimum relevant results to short-circuit (stop searching more databases)
  const ENOUGH = 3;

  // Maximum time (ms) slower sources (OFF, Beauty/Pet) get before we move on.
  // Reduced from 3s → 1.5s because these sources consistently hit the old timeout.
  // Target total search time is under 2 seconds for common items.
  const SLOW_SOURCE_TIMEOUT_MS = 1500;

  /**
   * withTimeout(promise, ms) — Races a promise against a timeout.
   * Returns [] if the timeout fires first, so the waterfall can continue
   * without waiting for a slow database that's holding up the response.
   */
  function withTimeout(promise, ms) {
    return Promise.race([
      promise,
      new Promise(resolve => setTimeout(() => resolve([]), ms)),
    ]);
  }

  // ── Tier 1: Spoonacular + Kroger + USDA + Open Food Facts (parallel) ──
  // All four primary databases run concurrently. Open Food Facts (free, no API key)
  // is included here instead of a separate tier because it's the most reliable
  // source of real product images for branded/packaged goods. Without it in Tier 1,
  // USDA (which never has images) could return enough results to trigger the
  // short-circuit, causing ALL results to have image: NONE.
  // OFF gets a 1.5s timeout so a slow response doesn't hold up the whole tier.
  console.log(`[TextSearch] Starting Tier 1 (Spoonacular + Kroger + USDA + OFF) in parallel`);
  const t1Start = Date.now();
  const tier1 = await Promise.allSettled([
    searchSpoonacular(query),
    searchKroger(query),
    searchUSDA(query),
    withTimeout(searchOpenFoodFacts(query), SLOW_SOURCE_TIMEOUT_MS),
  ]);
  // Extract results from settled promises (fulfilled only — rejected = [])
  tier1.forEach(r => {
    if (r.status === "fulfilled") addResults(r.value);
  });
  console.log(`[TextSearch] Tier 1 done in ${Date.now() - t1Start}ms — ${allResults.length} result(s)`);

  // Short-circuit only if we have enough results AND at least one has a real image.
  // Without the image check, imageless sources (like USDA) can trigger early exit
  // before image-rich sources (like OFF or UPC Item DB) get a chance to contribute.
  const hasAnyImage = allResults.some(r => r.image);
  if (allResults.length >= ENOUGH && hasAnyImage) {
    // Sort by relevance so the best matches appear first in the dropdown
    allResults.sort((a, b) => scoreResult(b.name, query, b.source) - scoreResult(a.name, query, a.source));
    const slice1 = allResults.slice(0, 5);
    // Apply illustration/lookup fallbacks to results that have no real product photo
    applyFallbackImages(slice1);
    return res.status(200).json({ results: slice1 });
  }

  // ── Tier 2: UPC Item DB (fallback for obscure queries) ──────────────────
  // Only reached if Tier 1 didn't return enough results with images.
  // UPC Item DB has Walmart/Target CDN images for many packaged goods.
  console.log(`[TextSearch] Starting Tier 2 (UPC Item DB only)`);
  const t2Start = Date.now();
  const tier2 = await Promise.allSettled([
    searchUpcItemDb(query),
  ]);
  tier2.forEach(r => {
    if (r.status === "fulfilled") addResults(r.value);
  });
  console.log(`[TextSearch] Tier 2 done in ${Date.now() - t2Start}ms — ${allResults.length} total result(s)`);

  // ── Tier 3: Open Beauty Facts + Open Pet Food Facts (deprioritized) ────
  // Non-food grocery items (shampoo, lotion, pet food, treats). Always included
  // so users can find legitimate non-food items, but scoreResult() applies a -50
  // penalty so food results always rank higher. Prevents "Cucumber Mint Lip Balm"
  // from outranking "Cucumber" while still surfacing "Dog Food" when intended.
  console.log(`[TextSearch] Starting Tier 3 (Open Beauty Facts + Open Pet Food Facts — deprioritized)`);
  const t3Start = Date.now();
  const tier3 = await Promise.allSettled([
    withTimeout(searchOpenBeautyFacts(query), SLOW_SOURCE_TIMEOUT_MS),
    withTimeout(searchOpenPetFoodFacts(query), SLOW_SOURCE_TIMEOUT_MS),
  ]);
  tier3.forEach(r => {
    if (r.status === "fulfilled") addResults(r.value);
  });
  console.log(`[TextSearch] Tier 3 done in ${Date.now() - t3Start}ms — ${allResults.length} total result(s)`);

  // Sort by relevance score so the best matches appear first, then take top 5.
  // Non-food sources get a -50 penalty in scoreResult(), so food results will
  // always appear above beauty/pet results when both are present.
  allResults.sort((a, b) => scoreResult(b.name, query, b.source) - scoreResult(a.name, query, a.source));
  const final = allResults.slice(0, 5);
  // Last step: fill in illustration/lookup fallbacks for results with no real photo
  applyFallbackImages(final);
  const totalMs = Date.now() - t1Start;
  console.log(`[TextSearch] ── Complete: ${final.length} result(s) in ${totalMs}ms`);
  return res.status(200).json({ results: final });
}
