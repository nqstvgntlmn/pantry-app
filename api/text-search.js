// ── TEXT SEARCH API ──────────────────────────────────────────────────────────
// Serverless function that searches for products by name/text query across
// an 8-database waterfall. Short-circuits once enough high-quality results are
// found to keep response times fast.
//
// Waterfall order (fastest/most relevant first):
//   Tier 1 (parallel): Spoonacular + Kroger + USDA
//   Tier 2 (parallel, 3s timeout): Edamam + Open Food Facts
//   Tier 3 (parallel): UPC Item DB + Open Beauty Facts + Open Pet Food Facts
//
// Image priority: Spoonacular CDN > Kroger > Open Food Facts > Edamam > others
// (Google Custom Search removed — API closed to new customers)
//
// Request:  GET /api/text-search?q=olive+oil
// Response: { results: [{ name, brand, category, image, source, nutrition }] }
//      or:  { results: [] }  (no matches found)

// --- Edamam credentials (free tier — same as barcode.js) ---
const EID = "2b6ecac2";
const EK = "8db76605e873aaf2fbdf41256cb24cb4";

// ── PREBUILT IMAGE LOOKUP TABLE ─────────────────────────────────────────────
// Maps ~1000 common grocery and household item names to their Spoonacular CDN
// image filenames. Used as the FIRST image fallback — checked before any API
// calls, so we can instantly provide an image for common queries without
// burning API quota or adding latency.
//
// Base URL: https://spoonacular.com/cdn/ingredients_100x100/{filename}
//
// Keys are lowercase. Lookup function does case-insensitive partial matching.
const SPOON_CDN = "https://spoonacular.com/cdn/ingredients_100x100";
const IMAGE_LOOKUP = {
  // ── FRUITS ──────────────────────────────────────────────────────────────
  "apple": "apple.png",
  "apples": "apple.png",
  "red apple": "apple.png",
  "green apple": "apple.png",
  "granny smith": "apple.png",
  "fuji apple": "apple.png",
  "gala apple": "apple.png",
  "honeycrisp apple": "apple.png",
  "banana": "bananas.png",
  "bananas": "bananas.png",
  "orange": "orange.png",
  "oranges": "orange.png",
  "navel orange": "orange.png",
  "blood orange": "orange.png",
  "mandarin": "mandarin-oranges.png",
  "mandarin orange": "mandarin-oranges.png",
  "tangerine": "mandarin-oranges.png",
  "clementine": "clementine.png",
  "clementines": "clementine.png",
  "grapefruit": "grapefruit.png",
  "lemon": "lemon.png",
  "lemons": "lemon.png",
  "lime": "lime.png",
  "limes": "lime.png",
  "key lime": "lime.png",
  "grape": "grapes.png",
  "grapes": "grapes.png",
  "red grapes": "red-grapes.png",
  "green grapes": "grapes.png",
  "strawberry": "strawberries.png",
  "strawberries": "strawberries.png",
  "blueberry": "blueberries.png",
  "blueberries": "blueberries.png",
  "raspberry": "raspberries.png",
  "raspberries": "raspberries.png",
  "blackberry": "blackberries.png",
  "blackberries": "blackberries.png",
  "cranberry": "cranberries.png",
  "cranberries": "cranberries.png",
  "cherry": "cherries.png",
  "cherries": "cherries.png",
  "peach": "peach.png",
  "peaches": "peach.png",
  "nectarine": "nectarine.png",
  "plum": "plum.png",
  "plums": "plum.png",
  "apricot": "apricot.png",
  "apricots": "apricot.png",
  "pear": "pear.png",
  "pears": "pear.png",
  "mango": "mango.png",
  "mangoes": "mango.png",
  "mangos": "mango.png",
  "pineapple": "pineapple.png",
  "papaya": "papaya.png",
  "kiwi": "kiwi.png",
  "kiwi fruit": "kiwi.png",
  "coconut": "coconut.png",
  "pomegranate": "pomegranate.png",
  "fig": "figs.png",
  "figs": "figs.png",
  "date": "dates.png",
  "dates": "dates.png",
  "medjool dates": "dates.png",
  "watermelon": "watermelon.png",
  "cantaloupe": "cantaloupe.png",
  "honeydew": "honeydew.png",
  "honeydew melon": "honeydew.png",
  "passion fruit": "passion-fruit.png",
  "guava": "guava.png",
  "lychee": "lychee.png",
  "dragon fruit": "dragon-fruit.png",
  "star fruit": "star-fruit.png",
  "persimmon": "persimmon.png",
  "plantain": "plantains.png",
  "plantains": "plantains.png",
  "rhubarb": "rhubarb.png",
  "avocado": "avocado.png",
  "avocados": "avocado.png",
  "raisins": "raisins.png",
  "dried cranberries": "dried-cranberries.png",
  "dried apricots": "dried-apricots.png",
  "dried figs": "dried-figs.png",
  "prunes": "prunes.png",
  "dried mango": "dried-mango.png",
  "fruit cocktail": "fruit-cocktail.png",
  "mixed berries": "mixed-berries.png",
  "frozen strawberries": "strawberries.png",
  "frozen blueberries": "blueberries.png",
  "frozen raspberries": "raspberries.png",
  "frozen mixed berries": "mixed-berries.png",
  "applesauce": "applesauce.png",
  "currants": "currants.png",

  // ── VEGETABLES ──────────────────────────────────────────────────────────
  "tomato": "tomato.png",
  "tomatoes": "tomato.png",
  "roma tomato": "roma-tomatoes.png",
  "cherry tomatoes": "cherry-tomatoes.png",
  "grape tomatoes": "grape-tomatoes.png",
  "plum tomato": "plum-tomato.png",
  "heirloom tomato": "tomato.png",
  "sun dried tomatoes": "sundried-tomatoes.png",
  "sundried tomatoes": "sundried-tomatoes.png",
  "potato": "potatoes-yukon-gold.png",
  "potatoes": "potatoes-yukon-gold.png",
  "russet potato": "russet-potatoes.png",
  "sweet potato": "sweet-potato.png",
  "sweet potatoes": "sweet-potato.png",
  "yam": "sweet-potato.png",
  "yams": "sweet-potato.png",
  "red potato": "red-potatoes.png",
  "fingerling potato": "potatoes-fingerling.png",
  "yukon gold potato": "potatoes-yukon-gold.png",
  "onion": "brown-onion.png",
  "onions": "brown-onion.png",
  "yellow onion": "brown-onion.png",
  "white onion": "white-onion.png",
  "red onion": "red-onion.png",
  "sweet onion": "brown-onion.png",
  "vidalia onion": "brown-onion.png",
  "green onion": "spring-onions.png",
  "green onions": "spring-onions.png",
  "scallion": "spring-onions.png",
  "scallions": "spring-onions.png",
  "shallot": "shallots.png",
  "shallots": "shallots.png",
  "leek": "leeks.png",
  "leeks": "leeks.png",
  "garlic": "garlic.png",
  "garlic cloves": "garlic.png",
  "garlic bulb": "garlic.png",
  "elephant garlic": "garlic.png",
  "ginger": "ginger.png",
  "ginger root": "ginger.png",
  "fresh ginger": "ginger.png",
  "carrot": "carrots.png",
  "carrots": "carrots.png",
  "baby carrots": "baby-carrots.png",
  "celery": "celery.png",
  "celery stalk": "celery.png",
  "broccoli": "broccoli.png",
  "broccoli florets": "broccoli.png",
  "broccolini": "broccolini.png",
  "cauliflower": "cauliflower.png",
  "cabbage": "cabbage.png",
  "green cabbage": "cabbage.png",
  "red cabbage": "red-cabbage.png",
  "napa cabbage": "napa-cabbage.png",
  "brussels sprouts": "brussels-sprouts.png",
  "brussels sprout": "brussels-sprouts.png",
  "lettuce": "iceberg-lettuce.png",
  "iceberg lettuce": "iceberg-lettuce.png",
  "romaine lettuce": "romaine-lettuce.png",
  "romaine": "romaine-lettuce.png",
  "butter lettuce": "butter-lettuce.png",
  "arugula": "arugula.png",
  "spinach": "spinach.png",
  "baby spinach": "baby-spinach.png",
  "kale": "kale.png",
  "swiss chard": "swiss-chard.png",
  "chard": "swiss-chard.png",
  "collard greens": "collard-greens.png",
  "mustard greens": "mustard-greens.png",
  "turnip greens": "turnip-greens.png",
  "watercress": "watercress.png",
  "mixed greens": "mixed-greens.png",
  "spring mix": "mixed-greens.png",
  "salad mix": "mixed-greens.png",
  "cucumber": "cucumber.png",
  "cucumbers": "cucumber.png",
  "english cucumber": "cucumber.png",
  "persian cucumber": "cucumber.png",
  "bell pepper": "bell-pepper-orange.png",
  "bell peppers": "bell-pepper-orange.png",
  "green bell pepper": "bell-pepper-green.png",
  "red bell pepper": "bell-pepper-red.png",
  "yellow bell pepper": "bell-pepper-yellow.png",
  "orange bell pepper": "bell-pepper-orange.png",
  "pepper": "bell-pepper-orange.png",
  "peppers": "bell-pepper-orange.png",
  "jalapeno": "jalapeno-pepper.png",
  "jalapeño": "jalapeno-pepper.png",
  "serrano pepper": "serrano-pepper.png",
  "habanero": "habanero-pepper.png",
  "poblano": "poblano-pepper.png",
  "anaheim pepper": "anaheim-pepper.png",
  "banana pepper": "banana-pepper.png",
  "chili pepper": "chili-peppers.png",
  "chili peppers": "chili-peppers.png",
  "hot pepper": "chili-peppers.png",
  "zucchini": "zucchini.png",
  "yellow squash": "yellow-squash.png",
  "summer squash": "yellow-squash.png",
  "butternut squash": "butternut-squash.png",
  "acorn squash": "acorn-squash.png",
  "spaghetti squash": "spaghetti-squash.png",
  "pumpkin": "pumpkin.png",
  "delicata squash": "delicata-squash.png",
  "corn": "corn.png",
  "corn on the cob": "corn-on-the-cob.png",
  "sweet corn": "corn.png",
  "frozen corn": "corn.png",
  "corn kernels": "corn.png",
  "peas": "peas.png",
  "green peas": "peas.png",
  "snow peas": "snow-peas.png",
  "snap peas": "sugar-snap-peas.png",
  "sugar snap peas": "sugar-snap-peas.png",
  "frozen peas": "peas.png",
  "green beans": "green-beans.png",
  "string beans": "green-beans.png",
  "french beans": "french-green-beans.png",
  "wax beans": "wax-beans.png",
  "asparagus": "asparagus.png",
  "artichoke": "artichoke.png",
  "artichoke hearts": "artichoke-hearts.png",
  "eggplant": "eggplant.png",
  "mushroom": "mushrooms.png",
  "mushrooms": "mushrooms.png",
  "button mushrooms": "mushrooms.png",
  "cremini mushrooms": "cremini-mushrooms.png",
  "baby bella mushrooms": "cremini-mushrooms.png",
  "portobello mushroom": "portobello-mushrooms.png",
  "portobello mushrooms": "portobello-mushrooms.png",
  "shiitake mushrooms": "shiitake-mushrooms.png",
  "oyster mushrooms": "oyster-mushroom.png",
  "enoki mushrooms": "enoki-mushrooms.png",
  "radish": "radishes.png",
  "radishes": "radishes.png",
  "daikon": "daikon.png",
  "turnip": "turnip.png",
  "turnips": "turnip.png",
  "parsnip": "parsnips.png",
  "parsnips": "parsnips.png",
  "beet": "beet.png",
  "beets": "beet.png",
  "beetroot": "beet.png",
  "rutabaga": "rutabaga.png",
  "jicama": "jicama.png",
  "kohlrabi": "kohlrabi.png",
  "fennel": "fennel.png",
  "okra": "okra.png",
  "edamame": "edamame.png",
  "bean sprouts": "bean-sprouts.png",
  "bamboo shoots": "bamboo-shoots.png",
  "water chestnuts": "water-chestnuts.png",
  "hearts of palm": "hearts-of-palm.png",
  "tomatillo": "tomatillos.png",
  "tomatillos": "tomatillos.png",
  "bok choy": "bok-choy.png",
  "baby bok choy": "baby-bok-choy.png",
  "endive": "endive.png",
  "radicchio": "radicchio.png",
  "escarole": "escarole.png",
  "chives": "chives.png",
  "horseradish": "horseradish.png",
  "seaweed": "seaweed.png",
  "nori": "nori.png",
  "kelp": "kelp.png",

  // ── MEATS ───────────────────────────────────────────────────────────────
  "chicken": "whole-chicken.png",
  "chicken breast": "chicken-breasts.png",
  "chicken breasts": "chicken-breasts.png",
  "chicken thigh": "chicken-thigh.png",
  "chicken thighs": "chicken-thigh.png",
  "chicken drumstick": "chicken-drumsticks.png",
  "chicken drumsticks": "chicken-drumsticks.png",
  "chicken leg": "chicken-leg.png",
  "chicken legs": "chicken-leg.png",
  "chicken wing": "chicken-wings.png",
  "chicken wings": "chicken-wings.png",
  "chicken tender": "chicken-tenders.png",
  "chicken tenders": "chicken-tenders.png",
  "chicken cutlet": "chicken-breasts.png",
  "rotisserie chicken": "whole-chicken.png",
  "whole chicken": "whole-chicken.png",
  "ground chicken": "ground-chicken.png",
  "chicken sausage": "chicken-sausage.png",
  "beef": "beef-cubes-background.png",
  "ground beef": "fresh-ground-beef.png",
  "ground turkey": "fresh-ground-turkey.png",
  "steak": "steak.png",
  "ribeye": "ribeye-steak.png",
  "ribeye steak": "ribeye-steak.png",
  "sirloin": "sirloin-steak.png",
  "sirloin steak": "sirloin-steak.png",
  "ny strip": "new-york-steak.png",
  "new york strip": "new-york-steak.png",
  "filet mignon": "filet-mignon.png",
  "t-bone steak": "t-bone-steak.png",
  "flank steak": "flank-steak.png",
  "skirt steak": "skirt-steak.png",
  "chuck roast": "chuck-roast.png",
  "beef roast": "beef-roast.png",
  "pot roast": "chuck-roast.png",
  "beef stew meat": "beef-cubes-background.png",
  "stew meat": "beef-cubes-background.png",
  "beef brisket": "beef-brisket.png",
  "brisket": "beef-brisket.png",
  "corned beef": "corned-beef.png",
  "beef ribs": "beef-short-ribs.png",
  "short ribs": "beef-short-ribs.png",
  "beef tenderloin": "beef-tenderloin.png",
  "veal": "veal.png",
  "pork": "pork-tenderloin.png",
  "pork chop": "pork-chops.png",
  "pork chops": "pork-chops.png",
  "pork loin": "pork-loin-roast.png",
  "pork tenderloin": "pork-tenderloin.png",
  "pork roast": "pork-loin-roast.png",
  "pork shoulder": "pork-shoulder.png",
  "pork butt": "pork-shoulder.png",
  "pulled pork": "pork-shoulder.png",
  "pork belly": "pork-belly.png",
  "pork ribs": "pork-ribs.png",
  "baby back ribs": "pork-ribs.png",
  "spare ribs": "pork-ribs.png",
  "ground pork": "ground-pork.png",
  "pork sausage": "pork-sausage.png",
  "bacon": "raw-bacon.png",
  "turkey bacon": "turkey-bacon.png",
  "ham": "ham-slices.png",
  "deli ham": "ham-slices.png",
  "prosciutto": "prosciutto.png",
  "pancetta": "pancetta.png",
  "salami": "salami.png",
  "pepperoni": "pepperoni.png",
  "sausage": "sausage.png",
  "italian sausage": "italian-sausage.png",
  "bratwurst": "bratwurst.png",
  "hot dog": "hot-dogs.png",
  "hot dogs": "hot-dogs.png",
  "frankfurter": "hot-dogs.png",
  "turkey": "turkey-raw-whole.png",
  "turkey breast": "turkey-breast.png",
  "deli turkey": "deli-turkey.png",
  "turkey sausage": "turkey-sausage.png",
  "turkey leg": "turkey-leg.png",
  "lamb": "lamb-loin-chops.png",
  "lamb chop": "lamb-loin-chops.png",
  "lamb chops": "lamb-loin-chops.png",
  "lamb leg": "leg-of-lamb.png",
  "leg of lamb": "leg-of-lamb.png",
  "lamb shank": "lamb-shank.png",
  "lamb shoulder": "lamb-shoulder.png",
  "ground lamb": "ground-lamb.png",
  "rack of lamb": "rack-of-lamb.png",
  "duck": "whole-duck.png",
  "duck breast": "duck-breast.png",
  "duck leg": "duck-legs.png",
  "venison": "venison.png",
  "bison": "bison-meat.png",
  "liver": "beef-liver.png",
  "beef jerky": "beef-jerky.png",
  "jerky": "beef-jerky.png",
  "meatball": "meatballs.png",
  "meatballs": "meatballs.png",
  "bologna": "bologna.png",
  "pastrami": "pastrami.png",

  // ── SEAFOOD ─────────────────────────────────────────────────────────────
  "salmon": "salmon.png",
  "salmon fillet": "salmon.png",
  "smoked salmon": "smoked-salmon.png",
  "lox": "smoked-salmon.png",
  "tuna": "tuna-steak.png",
  "tuna steak": "tuna-steak.png",
  "canned tuna": "canned-tuna.png",
  "ahi tuna": "tuna-steak.png",
  "cod": "cod-fillet.png",
  "cod fillet": "cod-fillet.png",
  "tilapia": "tilapia-fillets.png",
  "tilapia fillet": "tilapia-fillets.png",
  "halibut": "halibut-fillet.png",
  "sea bass": "sea-bass.png",
  "bass": "sea-bass.png",
  "trout": "trout.png",
  "rainbow trout": "trout.png",
  "catfish": "catfish.png",
  "catfish fillet": "catfish.png",
  "mahi mahi": "mahi-mahi.png",
  "swordfish": "swordfish.png",
  "flounder": "flounder.png",
  "sole": "sole-fillet.png",
  "snapper": "snapper.png",
  "red snapper": "snapper.png",
  "sardine": "sardines.png",
  "sardines": "sardines.png",
  "anchovy": "anchovies.png",
  "anchovies": "anchovies.png",
  "herring": "herring.png",
  "mackerel": "mackerel.png",
  "perch": "perch.png",
  "walleye": "walleye.png",
  "pollock": "pollock.png",
  "haddock": "haddock.png",
  "grouper": "grouper.png",
  "shrimp": "shrimp.png",
  "prawns": "shrimp.png",
  "jumbo shrimp": "shrimp.png",
  "frozen shrimp": "shrimp.png",
  "crab": "crab.png",
  "crab meat": "crab-meat.png",
  "crab legs": "crab-legs.png",
  "lobster": "lobster.png",
  "lobster tail": "lobster-tails.png",
  "clam": "clams.png",
  "clams": "clams.png",
  "mussel": "mussels.png",
  "mussels": "mussels.png",
  "oyster": "oysters.png",
  "oysters": "oysters.png",
  "scallop": "bay-scallops.png",
  "scallops": "bay-scallops.png",
  "squid": "squid.png",
  "calamari": "squid.png",
  "octopus": "octopus.png",
  "crawfish": "crawfish.png",
  "crayfish": "crawfish.png",
  "fish sticks": "fish-sticks.png",
  "fish fillet": "fish-fillets.png",
  "surimi": "surimi.png",
  "crab stick": "surimi.png",
  "imitation crab": "surimi.png",

  // ── DAIRY & EGGS ────────────────────────────────────────────────────────
  "milk": "milk.png",
  "whole milk": "milk.png",
  "2% milk": "milk.png",
  "skim milk": "milk.png",
  "1% milk": "milk.png",
  "buttermilk": "buttermilk.png",
  "heavy cream": "heavy-cream.png",
  "whipping cream": "heavy-cream.png",
  "half and half": "half-and-half.png",
  "half & half": "half-and-half.png",
  "cream": "heavy-cream.png",
  "sour cream": "sour-cream.png",
  "cream cheese": "cream-cheese.png",
  "butter": "butter-sliced.png",
  "unsalted butter": "butter-sliced.png",
  "salted butter": "butter-sliced.png",
  "ghee": "ghee.png",
  "margarine": "margarine.png",
  "egg": "egg.png",
  "eggs": "egg.png",
  "large eggs": "egg.png",
  "egg whites": "egg-white.png",
  "egg yolk": "egg-yolk.png",
  "cheese": "cheddar-cheese.png",
  "cheddar cheese": "cheddar-cheese.png",
  "cheddar": "cheddar-cheese.png",
  "sharp cheddar": "cheddar-cheese.png",
  "mozzarella": "mozzarella.png",
  "mozzarella cheese": "mozzarella.png",
  "fresh mozzarella": "fresh-mozzarella.png",
  "parmesan": "parmesan.png",
  "parmesan cheese": "parmesan.png",
  "parmigiano reggiano": "parmesan.png",
  "swiss cheese": "swiss-cheese.png",
  "swiss": "swiss-cheese.png",
  "provolone": "provolone-cheese.png",
  "provolone cheese": "provolone-cheese.png",
  "gouda": "gouda-cheese.png",
  "brie": "brie.png",
  "camembert": "camembert.png",
  "blue cheese": "blue-cheese.png",
  "gorgonzola": "gorgonzola.png",
  "feta": "feta.png",
  "feta cheese": "feta.png",
  "goat cheese": "goat-cheese.png",
  "ricotta": "ricotta-cheese.png",
  "ricotta cheese": "ricotta-cheese.png",
  "cottage cheese": "cottage-cheese.png",
  "mascarpone": "mascarpone.png",
  "gruyere": "gruyere.png",
  "monterey jack": "monterey-jack-cheese.png",
  "pepper jack": "pepper-jack-cheese.png",
  "colby jack": "colby-jack.png",
  "american cheese": "american-cheese.png",
  "string cheese": "string-cheese.png",
  "shredded cheese": "shredded-cheese.png",
  "velveeta": "velveeta.png",
  "queso fresco": "queso-fresco.png",
  "paneer": "paneer.png",
  "halloumi": "halloumi.png",
  "burrata": "burrata.png",
  "yogurt": "plain-yogurt.png",
  "greek yogurt": "greek-yogurt.png",
  "plain yogurt": "plain-yogurt.png",
  "vanilla yogurt": "vanilla-yogurt.png",
  "strawberry yogurt": "strawberry-yogurt.png",
  "kefir": "kefir.png",
  "whipped cream": "whipped-cream.png",
  "cool whip": "whipped-cream.png",
  "condensed milk": "condensed-milk.png",
  "sweetened condensed milk": "condensed-milk.png",
  "evaporated milk": "evaporated-milk.png",
  "powdered milk": "milk-powder.png",
  "dry milk": "milk-powder.png",
  "ice cream": "ice-cream.png",
  "vanilla ice cream": "ice-cream.png",
  "chocolate ice cream": "ice-cream.png",
  "frozen yogurt": "frozen-yogurt.png",
  "sherbet": "sherbet.png",
  "sorbet": "sorbet.png",
  "gelato": "gelato.png",

  // ── GRAINS, PASTA & BREAD ──────────────────────────────────────────────
  "rice": "uncooked-white-rice.png",
  "white rice": "uncooked-white-rice.png",
  "brown rice": "brown-rice.png",
  "jasmine rice": "jasmine-rice.png",
  "basmati rice": "basmati-rice.png",
  "wild rice": "wild-rice.png",
  "arborio rice": "arborio-rice.png",
  "sushi rice": "sushi-rice.png",
  "rice pilaf": "rice-pilaf.png",
  "fried rice": "fried-rice.png",
  "instant rice": "minute-rice.png",
  "quinoa": "quinoa.png",
  "couscous": "couscous.png",
  "bulgur": "bulgur.png",
  "bulgur wheat": "bulgur.png",
  "farro": "farro.png",
  "barley": "barley.png",
  "pearl barley": "barley.png",
  "millet": "millet.png",
  "amaranth": "amaranth.png",
  "buckwheat": "buckwheat.png",
  "polenta": "polenta.png",
  "grits": "grits.png",
  "cornmeal": "cornmeal.png",
  "oats": "rolled-oats.png",
  "rolled oats": "rolled-oats.png",
  "steel cut oats": "steel-cut-oats.png",
  "instant oatmeal": "instant-oatmeal.png",
  "oatmeal": "rolled-oats.png",
  "granola": "granola.png",
  "muesli": "muesli.png",
  "cereal": "cereal.png",
  "corn flakes": "corn-flakes.png",
  "cheerios": "cheerios.png",
  "pasta": "pasta.png",
  "spaghetti": "spaghetti.png",
  "penne": "penne.png",
  "rigatoni": "rigatoni.png",
  "fusilli": "fusilli.png",
  "rotini": "rotini.png",
  "farfalle": "farfalle.png",
  "bow tie pasta": "farfalle.png",
  "linguine": "linguine.png",
  "fettuccine": "fettuccine.png",
  "angel hair": "angel-hair-pasta.png",
  "angel hair pasta": "angel-hair-pasta.png",
  "macaroni": "macaroni.png",
  "elbow macaroni": "macaroni.png",
  "lasagna noodles": "lasagna-noodles.png",
  "lasagna sheets": "lasagna-noodles.png",
  "lasagna": "lasagna-noodles.png",
  "orzo": "orzo.png",
  "egg noodles": "egg-noodles.png",
  "ramen noodles": "ramen-noodles.png",
  "ramen": "ramen-noodles.png",
  "rice noodles": "rice-noodles.png",
  "udon noodles": "udon-noodles.png",
  "udon": "udon-noodles.png",
  "soba noodles": "soba-noodles.png",
  "lo mein noodles": "lo-mein-noodles.png",
  "glass noodles": "glass-noodles.png",
  "vermicelli": "rice-vermicelli.png",
  "gnocchi": "gnocchi.png",
  "tortellini": "tortellini.png",
  "ravioli": "ravioli.png",
  "mac and cheese": "macaroni-and-cheese.png",
  "bread": "white-bread.png",
  "white bread": "white-bread.png",
  "wheat bread": "whole-wheat-bread.png",
  "whole wheat bread": "whole-wheat-bread.png",
  "sourdough bread": "sourdough-bread.png",
  "sourdough": "sourdough-bread.png",
  "rye bread": "rye-bread.png",
  "pumpernickel": "pumpernickel-bread.png",
  "multigrain bread": "multigrain-bread.png",
  "french bread": "french-bread.png",
  "baguette": "baguette.png",
  "ciabatta": "ciabatta.png",
  "focaccia": "focaccia.png",
  "pita": "pita-bread.png",
  "pita bread": "pita-bread.png",
  "naan": "naan.png",
  "naan bread": "naan.png",
  "flatbread": "flatbread.png",
  "tortilla": "flour-tortilla.png",
  "tortillas": "flour-tortilla.png",
  "flour tortilla": "flour-tortilla.png",
  "flour tortillas": "flour-tortilla.png",
  "corn tortilla": "corn-tortillas.png",
  "corn tortillas": "corn-tortillas.png",
  "wrap": "flour-tortilla.png",
  "wraps": "flour-tortilla.png",
  "croissant": "croissant.png",
  "croissants": "croissant.png",
  "bagel": "bagel.png",
  "bagels": "bagel.png",
  "english muffin": "english-muffins.png",
  "english muffins": "english-muffins.png",
  "hamburger bun": "hamburger-buns.png",
  "hamburger buns": "hamburger-buns.png",
  "hot dog bun": "hot-dog-bun.png",
  "hot dog buns": "hot-dog-bun.png",
  "dinner roll": "dinner-rolls.png",
  "dinner rolls": "dinner-rolls.png",
  "breadcrumbs": "breadcrumbs.png",
  "bread crumbs": "breadcrumbs.png",
  "panko": "panko.png",
  "panko breadcrumbs": "panko.png",
  "croutons": "croutons.png",
  "stuffing": "stuffing.png",
  "stuffing mix": "stuffing.png",
  "cornbread": "cornbread.png",
  "biscuit": "biscuits.png",
  "biscuits": "biscuits.png",
  "crackers": "crackers.png",
  "saltine crackers": "saltines.png",
  "saltines": "saltines.png",
  "graham crackers": "graham-crackers.png",
  "rice cakes": "rice-cakes.png",
  "taco shells": "taco-shells.png",
  "taco": "taco-shells.png",
  "pizza dough": "pizza-dough.png",
  "pie crust": "pie-crust.png",
  "puff pastry": "puff-pastry.png",
  "phyllo dough": "phyllo-dough.png",
  "wonton wrappers": "wonton-wrappers.png",
  "spring roll wrappers": "spring-roll-wrappers.png",

  // ── PANTRY STAPLES — OILS, VINEGARS, SAUCES, CONDIMENTS ────────────────
  "olive oil": "olive-oil.png",
  "extra virgin olive oil": "olive-oil.png",
  "vegetable oil": "vegetable-oil.png",
  "canola oil": "canola-oil.png",
  "coconut oil": "coconut-oil.png",
  "sesame oil": "sesame-oil.png",
  "avocado oil": "avocado-oil.png",
  "peanut oil": "peanut-oil.png",
  "sunflower oil": "sunflower-oil.png",
  "corn oil": "corn-oil.png",
  "grapeseed oil": "grapeseed-oil.png",
  "truffle oil": "truffle-oil.png",
  "cooking spray": "cooking-spray.png",
  "nonstick spray": "cooking-spray.png",
  "vinegar": "vinegar.png",
  "white vinegar": "white-vinegar.png",
  "apple cider vinegar": "apple-cider-vinegar.png",
  "balsamic vinegar": "balsamic-vinegar.png",
  "red wine vinegar": "red-wine-vinegar.png",
  "white wine vinegar": "white-wine-vinegar.png",
  "rice vinegar": "rice-vinegar.png",
  "sherry vinegar": "sherry-vinegar.png",
  "malt vinegar": "malt-vinegar.png",
  "soy sauce": "soy-sauce.png",
  "tamari": "tamari.png",
  "coconut aminos": "coconut-aminos.png",
  "fish sauce": "fish-sauce.png",
  "oyster sauce": "oyster-sauce.png",
  "hoisin sauce": "hoisin-sauce.png",
  "teriyaki sauce": "teriyaki-sauce.png",
  "worcestershire sauce": "worcestershire-sauce.png",
  "hot sauce": "hot-sauce.png",
  "sriracha": "sriracha.png",
  "tabasco": "hot-sauce.png",
  "frank's red hot": "hot-sauce.png",
  "chili sauce": "chili-sauce.png",
  "sweet chili sauce": "sweet-chili-sauce.png",
  "bbq sauce": "bbq-sauce.png",
  "barbecue sauce": "bbq-sauce.png",
  "ketchup": "ketchup.png",
  "mustard": "mustard.png",
  "yellow mustard": "yellow-mustard.png",
  "dijon mustard": "dijon-mustard.png",
  "honey mustard": "honey-mustard.png",
  "whole grain mustard": "whole-grain-mustard.png",
  "mayonnaise": "mayonnaise.png",
  "mayo": "mayonnaise.png",
  "ranch dressing": "ranch-dressing.png",
  "ranch": "ranch-dressing.png",
  "italian dressing": "italian-dressing.png",
  "caesar dressing": "caesar-dressing.png",
  "balsamic dressing": "balsamic-glaze.png",
  "thousand island": "thousand-island-dressing.png",
  "blue cheese dressing": "blue-cheese-dressing.png",
  "vinaigrette": "vinaigrette.png",
  "salad dressing": "italian-dressing.png",
  "salsa": "salsa.png",
  "pico de gallo": "pico-de-gallo.png",
  "guacamole": "guacamole.png",
  "hummus": "hummus.png",
  "tahini": "tahini.png",
  "pesto": "pesto.png",
  "basil pesto": "pesto.png",
  "marinara sauce": "marinara.png",
  "marinara": "marinara.png",
  "pasta sauce": "pasta-sauce.png",
  "tomato sauce": "tomato-sauce.png",
  "pizza sauce": "pizza-sauce.png",
  "alfredo sauce": "alfredo-sauce.png",
  "enchilada sauce": "enchilada-sauce.png",
  "curry paste": "curry-paste.png",
  "red curry paste": "red-curry-paste.png",
  "green curry paste": "green-curry-paste.png",
  "thai curry paste": "curry-paste.png",
  "harissa": "harissa.png",
  "gochujang": "gochujang.png",
  "miso paste": "miso.png",
  "miso": "miso.png",
  "tomato paste": "tomato-paste.png",
  "tomato puree": "tomato-puree.png",
  "steak sauce": "steak-sauce.png",
  "a1 sauce": "steak-sauce.png",
  "relish": "relish.png",
  "pickle relish": "relish.png",
  "chutney": "chutney.png",
  "mango chutney": "mango-chutney.png",
  "cranberry sauce": "cranberry-sauce.png",
  "apple sauce": "applesauce.png",
  "caramel sauce": "caramel-sauce.png",
  "chocolate sauce": "chocolate-sauce.png",
  "chocolate syrup": "chocolate-syrup.png",
  "maple syrup": "maple-syrup.png",
  "syrup": "maple-syrup.png",
  "honey": "honey.png",
  "agave": "agave.png",
  "agave nectar": "agave.png",
  "molasses": "molasses.png",
  "corn syrup": "corn-syrup.png",
  "jam": "jam.png",
  "jelly": "jelly.png",
  "strawberry jam": "strawberry-jam.png",
  "grape jelly": "grape-jelly.png",
  "raspberry jam": "raspberry-jam.png",
  "orange marmalade": "orange-marmalade.png",
  "marmalade": "orange-marmalade.png",
  "preserves": "preserves.png",
  "peanut butter": "peanut-butter.png",
  "almond butter": "almond-butter.png",
  "cashew butter": "cashew-butter.png",
  "sunflower butter": "sunflower-seed-butter.png",
  "nutella": "nutella.png",
  "hazelnut spread": "nutella.png",

  // ── SPICES & HERBS ──────────────────────────────────────────────────────
  "salt": "salt.png",
  "sea salt": "sea-salt.png",
  "kosher salt": "kosher-salt.png",
  "table salt": "salt.png",
  "black pepper": "pepper.png",
  "pepper": "pepper.png",
  "peppercorns": "peppercorns.png",
  "white pepper": "white-pepper.png",
  "cayenne pepper": "cayenne.png",
  "cayenne": "cayenne.png",
  "red pepper flakes": "red-pepper-flakes.png",
  "crushed red pepper": "red-pepper-flakes.png",
  "chili powder": "chili-powder.png",
  "chipotle powder": "chipotle-powder.png",
  "paprika": "paprika.png",
  "smoked paprika": "smoked-paprika.png",
  "hungarian paprika": "paprika.png",
  "cumin": "cumin.png",
  "ground cumin": "cumin.png",
  "cumin seeds": "cumin-seeds.png",
  "coriander": "coriander-seeds.png",
  "ground coriander": "ground-coriander.png",
  "turmeric": "turmeric.png",
  "ground turmeric": "turmeric.png",
  "cinnamon": "cinnamon.png",
  "ground cinnamon": "cinnamon.png",
  "cinnamon sticks": "cinnamon-sticks.png",
  "nutmeg": "nutmeg.png",
  "ground nutmeg": "nutmeg.png",
  "cloves": "cloves.png",
  "ground cloves": "ground-cloves.png",
  "allspice": "allspice.png",
  "cardamom": "cardamom.png",
  "ground cardamom": "cardamom.png",
  "cardamom pods": "cardamom-pods.png",
  "star anise": "star-anise.png",
  "anise": "anise.png",
  "fennel seeds": "fennel-seeds.png",
  "caraway seeds": "caraway-seeds.png",
  "celery seed": "celery-seed.png",
  "mustard seeds": "mustard-seeds.png",
  "mustard powder": "mustard-powder.png",
  "dry mustard": "mustard-powder.png",
  "onion powder": "onion-powder.png",
  "garlic powder": "garlic-powder.png",
  "garlic salt": "garlic-salt.png",
  "ginger powder": "ground-ginger.png",
  "ground ginger": "ground-ginger.png",
  "oregano": "oregano.png",
  "dried oregano": "oregano.png",
  "basil": "basil.png",
  "fresh basil": "fresh-basil.png",
  "dried basil": "dried-basil.png",
  "thyme": "thyme.png",
  "fresh thyme": "fresh-thyme.png",
  "dried thyme": "dried-thyme.png",
  "rosemary": "rosemary.png",
  "fresh rosemary": "fresh-rosemary.png",
  "dried rosemary": "dried-rosemary.png",
  "sage": "sage.png",
  "fresh sage": "fresh-sage.png",
  "parsley": "parsley.png",
  "fresh parsley": "fresh-parsley.png",
  "dried parsley": "dried-parsley.png",
  "cilantro": "cilantro.png",
  "fresh cilantro": "cilantro.png",
  "coriander leaves": "cilantro.png",
  "dill": "dill.png",
  "fresh dill": "fresh-dill.png",
  "dried dill": "dill.png",
  "dill weed": "dill.png",
  "mint": "mint.png",
  "fresh mint": "fresh-mint.png",
  "peppermint": "peppermint.png",
  "spearmint": "spearmint.png",
  "tarragon": "tarragon.png",
  "marjoram": "marjoram.png",
  "bay leaf": "bay-leaves.png",
  "bay leaves": "bay-leaves.png",
  "lemongrass": "lemongrass.png",
  "lavender": "lavender.png",
  "chive": "chives.png",
  "italian seasoning": "italian-seasoning.png",
  "herbs de provence": "herbs-de-provence.png",
  "herbes de provence": "herbs-de-provence.png",
  "poultry seasoning": "poultry-seasoning.png",
  "taco seasoning": "taco-seasoning.png",
  "old bay": "old-bay-seasoning.png",
  "old bay seasoning": "old-bay-seasoning.png",
  "cajun seasoning": "cajun-seasoning.png",
  "curry powder": "curry-powder.png",
  "garam masala": "garam-masala.png",
  "five spice": "five-spice-powder.png",
  "chinese five spice": "five-spice-powder.png",
  "za'atar": "zaatar.png",
  "zaatar": "zaatar.png",
  "sumac": "sumac.png",
  "saffron": "saffron.png",
  "vanilla extract": "vanilla-extract.png",
  "vanilla": "vanilla.png",
  "vanilla bean": "vanilla-bean.png",
  "almond extract": "almond-extract.png",
  "peppermint extract": "peppermint-extract.png",
  "lemon extract": "lemon-extract.png",
  "food coloring": "food-coloring.png",
  "cream of tartar": "cream-of-tartar.png",
  "msg": "msg.png",
  "bouillon": "bouillon-cubes.png",
  "bouillon cubes": "bouillon-cubes.png",
  "chicken bouillon": "bouillon-cubes.png",
  "beef bouillon": "bouillon-cubes.png",
  "seasoning salt": "seasoning-salt.png",
  "everything bagel seasoning": "everything-bagel-seasoning.png",
  "ranch seasoning": "ranch-seasoning.png",
  "lemon pepper": "lemon-pepper.png",
  "steak seasoning": "steak-seasoning.png",

  // ── LEGUMES & NUTS ──────────────────────────────────────────────────────
  "black beans": "black-beans.png",
  "kidney beans": "kidney-beans.png",
  "pinto beans": "pinto-beans.png",
  "navy beans": "navy-beans.png",
  "cannellini beans": "cannellini-beans.png",
  "white beans": "cannellini-beans.png",
  "great northern beans": "great-northern-beans.png",
  "lima beans": "lima-beans.png",
  "garbanzo beans": "chickpeas.png",
  "chickpeas": "chickpeas.png",
  "chickpea": "chickpeas.png",
  "lentils": "lentils.png",
  "red lentils": "red-lentils.png",
  "green lentils": "green-lentils.png",
  "brown lentils": "lentils.png",
  "black lentils": "black-lentils.png",
  "split peas": "split-peas.png",
  "black eyed peas": "black-eyed-peas.png",
  "refried beans": "refried-beans.png",
  "baked beans": "baked-beans.png",
  "bean": "beans.png",
  "beans": "beans.png",
  "soybeans": "soybeans.png",
  "tofu": "tofu.png",
  "firm tofu": "firm-tofu.png",
  "silken tofu": "silken-tofu.png",
  "tempeh": "tempeh.png",
  "seitan": "seitan.png",
  "almond": "almonds.png",
  "almonds": "almonds.png",
  "sliced almonds": "sliced-almonds.png",
  "slivered almonds": "slivered-almonds.png",
  "almond flour": "almond-flour.png",
  "walnut": "walnuts.png",
  "walnuts": "walnuts.png",
  "pecan": "pecans.png",
  "pecans": "pecans.png",
  "cashew": "cashews.png",
  "cashews": "cashews.png",
  "pistachio": "pistachios.png",
  "pistachios": "pistachios.png",
  "peanut": "peanuts.png",
  "peanuts": "peanuts.png",
  "macadamia": "macadamia-nuts.png",
  "macadamia nuts": "macadamia-nuts.png",
  "brazil nuts": "brazil-nuts.png",
  "hazelnuts": "hazelnuts.png",
  "hazelnut": "hazelnuts.png",
  "filbert": "hazelnuts.png",
  "pine nuts": "pine-nuts.png",
  "pine nut": "pine-nuts.png",
  "pignoli": "pine-nuts.png",
  "chestnut": "chestnuts.png",
  "chestnuts": "chestnuts.png",
  "mixed nuts": "mixed-nuts.png",
  "trail mix": "trail-mix.png",
  "sunflower seeds": "sunflower-seeds.png",
  "pumpkin seeds": "pumpkin-seeds.png",
  "pepitas": "pumpkin-seeds.png",
  "sesame seeds": "sesame-seeds.png",
  "chia seeds": "chia-seeds.png",
  "flax seeds": "flax-seeds.png",
  "flaxseed": "flax-seeds.png",
  "ground flaxseed": "ground-flaxseed.png",
  "hemp seeds": "hemp-seeds.png",
  "poppy seeds": "poppy-seeds.png",

  // ── BEVERAGES ───────────────────────────────────────────────────────────
  "water": "water.png",
  "sparkling water": "sparkling-water.png",
  "seltzer": "sparkling-water.png",
  "club soda": "club-soda.png",
  "tonic water": "tonic-water.png",
  "coconut water": "coconut-water.png",
  "orange juice": "orange-juice.png",
  "apple juice": "apple-juice.png",
  "cranberry juice": "cranberry-juice.png",
  "grape juice": "grape-juice.png",
  "grapefruit juice": "grapefruit-juice.png",
  "pineapple juice": "pineapple-juice.png",
  "tomato juice": "tomato-juice.png",
  "lemon juice": "lemon-juice.png",
  "lime juice": "lime-juice.png",
  "pomegranate juice": "pomegranate-juice.png",
  "juice": "orange-juice.png",
  "lemonade": "lemonade.png",
  "iced tea": "iced-tea.png",
  "coffee": "brewed-coffee.png",
  "ground coffee": "ground-coffee.png",
  "coffee beans": "coffee-beans.png",
  "instant coffee": "instant-coffee.png",
  "espresso": "espresso.png",
  "decaf coffee": "decaf-coffee.png",
  "cold brew": "cold-brew.png",
  "cold brew coffee": "cold-brew.png",
  "tea": "tea-bags.png",
  "green tea": "green-tea.png",
  "black tea": "black-tea.png",
  "herbal tea": "herbal-tea.png",
  "chamomile tea": "chamomile-tea.png",
  "chai tea": "chai-tea.png",
  "earl grey": "earl-grey.png",
  "matcha": "matcha.png",
  "matcha powder": "matcha.png",
  "hot chocolate": "hot-chocolate-mix.png",
  "cocoa mix": "hot-chocolate-mix.png",
  "hot cocoa": "hot-chocolate-mix.png",
  "soda": "soda.png",
  "cola": "cola.png",
  "diet coke": "cola.png",
  "sprite": "lemon-lime-soda.png",
  "ginger ale": "ginger-ale.png",
  "root beer": "root-beer.png",
  "cream soda": "cream-soda.png",
  "energy drink": "energy-drink.png",
  "sports drink": "sports-drink.png",
  "gatorade": "sports-drink.png",
  "almond milk": "almond-milk.png",
  "oat milk": "oat-milk.png",
  "soy milk": "soy-milk.png",
  "coconut milk": "coconut-milk.png",
  "rice milk": "rice-milk.png",
  "cashew milk": "cashew-milk.png",
  "hemp milk": "hemp-milk.png",
  "chocolate milk": "chocolate-milk.png",
  "eggnog": "eggnog.png",
  "protein shake": "protein-shake.png",
  "smoothie": "smoothie.png",
  "kombucha": "kombucha.png",
  "apple cider": "apple-cider.png",
  "cider": "apple-cider.png",
  "beer": "beer.png",
  "wine": "wine.png",
  "red wine": "red-wine.png",
  "white wine": "white-wine.png",
  "champagne": "champagne.png",
  "prosecco": "prosecco.png",
  "sake": "sake.png",
  "vodka": "vodka.png",
  "rum": "rum.png",
  "tequila": "tequila.png",
  "whiskey": "whiskey.png",
  "bourbon": "bourbon.png",
  "gin": "gin.png",
  "brandy": "brandy.png",
  "cooking wine": "cooking-wine.png",
  "sherry": "sherry.png",
  "marsala wine": "marsala.png",
  "rice wine": "rice-wine.png",
  "mirin": "mirin.png",
  "vermouth": "vermouth.png",

  // ── SNACKS ──────────────────────────────────────────────────────────────
  "chips": "potato-chips.png",
  "potato chips": "potato-chips.png",
  "tortilla chips": "tortilla-chips.png",
  "corn chips": "corn-chips.png",
  "pita chips": "pita-chips.png",
  "veggie chips": "veggie-chips.png",
  "kettle chips": "kettle-chips.png",
  "pretzels": "pretzels.png",
  "pretzel": "pretzels.png",
  "popcorn": "popcorn.png",
  "microwave popcorn": "microwave-popcorn.png",
  "cheese puffs": "cheese-puffs.png",
  "cheetos": "cheese-puffs.png",
  "doritos": "tortilla-chips.png",
  "goldfish": "goldfish-crackers.png",
  "animal crackers": "animal-crackers.png",
  "cookies": "cookies.png",
  "cookie": "cookies.png",
  "chocolate chip cookies": "chocolate-chip-cookies.png",
  "oreos": "oreos.png",
  "oreo": "oreos.png",
  "brownie": "brownies.png",
  "brownies": "brownies.png",
  "brownie mix": "brownie-mix.png",
  "granola bar": "granola-bar.png",
  "granola bars": "granola-bar.png",
  "protein bar": "protein-bar.png",
  "protein bars": "protein-bar.png",
  "energy bar": "energy-bar.png",
  "fruit snacks": "fruit-snacks.png",
  "dried fruit": "dried-fruit.png",
  "fruit leather": "fruit-leather.png",
  "fruit roll up": "fruit-leather.png",
  "gummy bears": "gummy-bears.png",
  "gummies": "gummy-bears.png",
  "chocolate": "dark-chocolate.png",
  "dark chocolate": "dark-chocolate.png",
  "milk chocolate": "milk-chocolate.png",
  "white chocolate": "white-chocolate.png",
  "chocolate bar": "chocolate-bar.png",
  "chocolate chips": "chocolate-chips.png",
  "candy": "candy.png",
  "candy bar": "candy-bar.png",
  "m&ms": "m-and-ms.png",
  "skittles": "skittles.png",
  "marshmallow": "marshmallows.png",
  "marshmallows": "marshmallows.png",
  "licorice": "licorice.png",
  "jelly beans": "jelly-beans.png",
  "caramel": "caramel.png",
  "toffee": "toffee.png",
  "fudge": "fudge.png",
  "mints": "mints.png",
  "rice krispie treats": "rice-krispie-treats.png",
  "pudding": "pudding.png",
  "pudding cup": "pudding.png",
  "jello": "jello.png",
  "gelatin": "gelatin.png",
  "fruit cup": "fruit-cup.png",
  "nuts": "mixed-nuts.png",
  "roasted peanuts": "roasted-peanuts.png",
  "salted peanuts": "roasted-peanuts.png",
  "honey roasted peanuts": "honey-roasted-peanuts.png",
  "wasabi peas": "wasabi-peas.png",
  "seaweed snacks": "seaweed-snacks.png",
  "cheese crackers": "cheese-crackers.png",
  "wheat thins": "wheat-thins.png",
  "triscuits": "triscuits.png",
  "ritz crackers": "ritz-crackers.png",

  // ── BAKING ──────────────────────────────────────────────────────────────
  "flour": "flour.png",
  "all purpose flour": "all-purpose-flour.png",
  "all-purpose flour": "all-purpose-flour.png",
  "bread flour": "bread-flour.png",
  "cake flour": "cake-flour.png",
  "self rising flour": "self-rising-flour.png",
  "self-rising flour": "self-rising-flour.png",
  "whole wheat flour": "whole-wheat-flour.png",
  "coconut flour": "coconut-flour.png",
  "rice flour": "rice-flour.png",
  "tapioca flour": "tapioca-flour.png",
  "tapioca starch": "tapioca-flour.png",
  "cornstarch": "cornstarch.png",
  "corn starch": "cornstarch.png",
  "arrowroot": "arrowroot-powder.png",
  "arrowroot powder": "arrowroot-powder.png",
  "sugar": "sugar.png",
  "white sugar": "sugar.png",
  "granulated sugar": "sugar.png",
  "brown sugar": "brown-sugar.png",
  "light brown sugar": "light-brown-sugar.png",
  "dark brown sugar": "dark-brown-sugar.png",
  "powdered sugar": "powdered-sugar.png",
  "confectioners sugar": "powdered-sugar.png",
  "icing sugar": "powdered-sugar.png",
  "turbinado sugar": "turbinado-sugar.png",
  "raw sugar": "turbinado-sugar.png",
  "coconut sugar": "coconut-sugar.png",
  "stevia": "stevia.png",
  "splenda": "splenda.png",
  "sweetener": "sugar.png",
  "artificial sweetener": "sugar-substitute.png",
  "baking powder": "baking-powder.png",
  "baking soda": "baking-soda.png",
  "yeast": "yeast.png",
  "active dry yeast": "active-dry-yeast.png",
  "instant yeast": "instant-yeast.png",
  "cocoa powder": "cocoa-powder.png",
  "unsweetened cocoa": "cocoa-powder.png",
  "dutch process cocoa": "dutch-process-cocoa.png",
  "baking chocolate": "baking-chocolate.png",
  "unsweetened chocolate": "unsweetened-chocolate.png",
  "semi sweet chocolate": "semi-sweet-chocolate.png",
  "chocolate chunks": "chocolate-chunks.png",
  "white chocolate chips": "white-chocolate-chips.png",
  "butterscotch chips": "butterscotch-chips.png",
  "peanut butter chips": "peanut-butter-chips.png",
  "sprinkles": "sprinkles.png",
  "food color": "food-coloring.png",
  "cake mix": "cake-mix.png",
  "pancake mix": "pancake-mix.png",
  "waffle mix": "pancake-mix.png",
  "bisquick": "bisquick.png",
  "muffin mix": "muffin-mix.png",
  "cornbread mix": "cornbread-mix.png",
  "frosting": "frosting.png",
  "icing": "frosting.png",
  "cake frosting": "frosting.png",
  "whipped topping": "whipped-cream.png",
  "pie filling": "pie-filling.png",
  "cherry pie filling": "cherry-pie-filling.png",
  "apple pie filling": "apple-pie-filling.png",
  "pumpkin puree": "pumpkin-puree.png",
  "canned pumpkin": "pumpkin-puree.png",
  "sweetened condensed milk": "condensed-milk.png",
  "shredded coconut": "shredded-coconut.png",
  "coconut flakes": "coconut-flakes.png",
  "pectin": "pectin.png",
  "meringue powder": "meringue-powder.png",
  "corn meal": "cornmeal.png",

  // ── CANNED GOODS ────────────────────────────────────────────────────────
  "canned tomatoes": "canned-tomatoes.png",
  "diced tomatoes": "diced-tomatoes.png",
  "crushed tomatoes": "crushed-tomatoes.png",
  "stewed tomatoes": "stewed-tomatoes.png",
  "whole peeled tomatoes": "whole-peeled-tomatoes.png",
  "san marzano tomatoes": "san-marzano-tomatoes.png",
  "fire roasted tomatoes": "fire-roasted-tomatoes.png",
  "rotel": "rotel.png",
  "canned beans": "canned-beans.png",
  "canned black beans": "canned-black-beans.png",
  "canned kidney beans": "canned-kidney-beans.png",
  "canned chickpeas": "canned-chickpeas.png",
  "canned corn": "canned-corn.png",
  "creamed corn": "creamed-corn.png",
  "canned peas": "canned-peas.png",
  "canned green beans": "canned-green-beans.png",
  "canned mushrooms": "canned-mushrooms.png",
  "canned olives": "olives.png",
  "olives": "olives.png",
  "black olives": "black-olives.png",
  "green olives": "green-olives.png",
  "kalamata olives": "kalamata-olives.png",
  "stuffed olives": "stuffed-olives.png",
  "capers": "capers.png",
  "pickles": "pickles.png",
  "dill pickles": "dill-pickles.png",
  "sweet pickles": "sweet-pickles.png",
  "pickle": "pickles.png",
  "sauerkraut": "sauerkraut.png",
  "kimchi": "kimchi.png",
  "canned salmon": "canned-salmon.png",
  "canned chicken": "canned-chicken.png",
  "spam": "spam.png",
  "vienna sausage": "vienna-sausages.png",
  "chicken broth": "chicken-broth.png",
  "beef broth": "beef-broth.png",
  "vegetable broth": "vegetable-broth.png",
  "bone broth": "bone-broth.png",
  "broth": "chicken-broth.png",
  "stock": "chicken-broth.png",
  "chicken stock": "chicken-stock.png",
  "beef stock": "beef-stock.png",
  "vegetable stock": "vegetable-stock.png",
  "soup": "soup.png",
  "chicken noodle soup": "chicken-noodle-soup.png",
  "tomato soup": "tomato-soup.png",
  "cream of mushroom soup": "cream-of-mushroom-soup.png",
  "cream of chicken soup": "cream-of-chicken-soup.png",
  "clam chowder": "clam-chowder.png",
  "chili": "chili.png",
  "canned chili": "canned-chili.png",
  "coconut cream": "coconut-cream.png",
  "canned coconut milk": "coconut-milk.png",
  "evaporated milk": "evaporated-milk.png",
  "roasted red peppers": "roasted-red-peppers.png",
  "chipotle peppers": "chipotle-peppers.png",
  "chipotles in adobo": "chipotle-peppers.png",
  "green chiles": "green-chiles.png",
  "diced green chiles": "green-chiles.png",
  "jalapenos": "jarred-jalapenos.png",
  "pickled jalapenos": "jarred-jalapenos.png",
  "pepperoncini": "pepperoncini.png",
  "sun dried tomatoes in oil": "sundried-tomatoes.png",
  "artichoke hearts": "artichoke-hearts.png",
  "canned artichoke hearts": "artichoke-hearts.png",
  "water chestnuts": "water-chestnuts.png",
  "canned pineapple": "canned-pineapple.png",
  "mandarin oranges": "mandarin-oranges.png",
  "canned mandarin oranges": "mandarin-oranges.png",
  "canned peaches": "canned-peaches.png",
  "canned pears": "canned-pears.png",

  // ── FROZEN FOODS ────────────────────────────────────────────────────────
  "frozen vegetables": "frozen-vegetables.png",
  "frozen broccoli": "frozen-broccoli.png",
  "frozen spinach": "frozen-spinach.png",
  "frozen green beans": "frozen-green-beans.png",
  "frozen cauliflower": "frozen-cauliflower.png",
  "frozen stir fry vegetables": "frozen-stir-fry-vegetables.png",
  "frozen french fries": "french-fries.png",
  "french fries": "french-fries.png",
  "fries": "french-fries.png",
  "tater tots": "tater-tots.png",
  "hash browns": "hash-browns.png",
  "frozen hash browns": "hash-browns.png",
  "frozen pizza": "frozen-pizza.png",
  "pizza": "frozen-pizza.png",
  "frozen waffles": "frozen-waffles.png",
  "waffles": "frozen-waffles.png",
  "frozen pancakes": "frozen-pancakes.png",
  "frozen burritos": "frozen-burrito.png",
  "frozen dinner": "frozen-dinner.png",
  "tv dinner": "frozen-dinner.png",
  "frozen meal": "frozen-dinner.png",
  "chicken nuggets": "chicken-nuggets.png",
  "frozen chicken nuggets": "chicken-nuggets.png",
  "fish sticks": "fish-sticks.png",
  "frozen fish sticks": "fish-sticks.png",
  "frozen shrimp": "frozen-shrimp.png",
  "frozen fruit": "frozen-fruit.png",
  "frozen mango": "frozen-mango.png",
  "frozen peaches": "frozen-peaches.png",
  "frozen pineapple": "frozen-pineapple.png",
  "frozen edamame": "frozen-edamame.png",
  "ice cream sandwich": "ice-cream-sandwich.png",
  "popsicle": "popsicle.png",
  "ice pop": "popsicle.png",
  "frozen pie": "frozen-pie.png",
  "frozen pie crust": "frozen-pie-crust.png",
  "cool whip": "whipped-cream.png",
  "frozen bread dough": "frozen-bread-dough.png",
  "frozen rolls": "frozen-rolls.png",
  "frozen bagels": "frozen-bagels.png",
  "egg rolls": "egg-rolls.png",
  "frozen egg rolls": "egg-rolls.png",
  "pot stickers": "pot-stickers.png",
  "dumplings": "dumplings.png",
  "frozen dumplings": "dumplings.png",
  "samosas": "samosas.png",
  "frozen samosas": "samosas.png",
  "frozen meatballs": "frozen-meatballs.png",
  "frozen burger patties": "frozen-burger-patties.png",
  "veggie burger": "veggie-burger.png",
  "veggie burgers": "veggie-burger.png",
  "impossible burger": "veggie-burger.png",
  "beyond burger": "veggie-burger.png",

  // ── BREAKFAST ───────────────────────────────────────────────────────────
  "pancake": "pancakes.png",
  "pancakes": "pancakes.png",
  "waffle": "waffles.png",
  "french toast": "french-toast.png",
  "breakfast sausage": "breakfast-sausage.png",
  "sausage links": "sausage-links.png",
  "sausage patties": "sausage-patties.png",
  "hash brown": "hash-browns.png",

  // ── DELI & PREPARED ─────────────────────────────────────────────────────
  "deli meat": "deli-meat.png",
  "lunch meat": "deli-meat.png",
  "roast beef": "roast-beef.png",
  "deli roast beef": "roast-beef.png",
  "chicken salad": "chicken-salad.png",
  "tuna salad": "tuna-salad.png",
  "egg salad": "egg-salad.png",
  "coleslaw": "coleslaw.png",
  "potato salad": "potato-salad.png",
  "macaroni salad": "macaroni-salad.png",

  // ── CLEANING & HOUSEHOLD PRODUCTS ───────────────────────────────────────
  "dish soap": "dish-soap.png",
  "dishwasher detergent": "dishwasher-detergent.png",
  "dishwasher pods": "dishwasher-detergent.png",
  "laundry detergent": "laundry-detergent.png",
  "fabric softener": "fabric-softener.png",
  "dryer sheets": "dryer-sheets.png",
  "bleach": "bleach.png",
  "all purpose cleaner": "all-purpose-cleaner.png",
  "glass cleaner": "glass-cleaner.png",
  "windex": "glass-cleaner.png",
  "disinfectant": "disinfectant.png",
  "disinfectant wipes": "disinfectant-wipes.png",
  "clorox wipes": "disinfectant-wipes.png",
  "lysol": "disinfectant.png",
  "paper towels": "paper-towels.png",
  "paper towel": "paper-towels.png",
  "toilet paper": "toilet-paper.png",
  "tissues": "tissues.png",
  "facial tissue": "tissues.png",
  "kleenex": "tissues.png",
  "napkins": "napkins.png",
  "trash bags": "trash-bags.png",
  "garbage bags": "trash-bags.png",
  "zip lock bags": "ziplock-bags.png",
  "ziploc bags": "ziplock-bags.png",
  "plastic wrap": "plastic-wrap.png",
  "saran wrap": "plastic-wrap.png",
  "cling wrap": "plastic-wrap.png",
  "aluminum foil": "aluminum-foil.png",
  "foil": "aluminum-foil.png",
  "tin foil": "aluminum-foil.png",
  "parchment paper": "parchment-paper.png",
  "wax paper": "wax-paper.png",
  "sponge": "sponge.png",
  "sponges": "sponge.png",
  "steel wool": "steel-wool.png",
  "scrub brush": "scrub-brush.png",
  "mop": "mop.png",
  "broom": "broom.png",
  "dustpan": "dustpan.png",
  "vacuum bags": "vacuum-bags.png",
  "air freshener": "air-freshener.png",
  "candles": "candles.png",
  "candle": "candles.png",
  "matches": "matches.png",
  "lighter": "lighter.png",
  "batteries": "batteries.png",
  "light bulbs": "light-bulbs.png",
  "light bulb": "light-bulbs.png",

  // ── PERSONAL CARE ───────────────────────────────────────────────────────
  "shampoo": "shampoo.png",
  "conditioner": "conditioner.png",
  "body wash": "body-wash.png",
  "soap": "bar-soap.png",
  "bar soap": "bar-soap.png",
  "hand soap": "hand-soap.png",
  "lotion": "lotion.png",
  "body lotion": "lotion.png",
  "hand lotion": "lotion.png",
  "sunscreen": "sunscreen.png",
  "sunblock": "sunscreen.png",
  "deodorant": "deodorant.png",
  "antiperspirant": "deodorant.png",
  "toothpaste": "toothpaste.png",
  "toothbrush": "toothbrush.png",
  "mouthwash": "mouthwash.png",
  "dental floss": "dental-floss.png",
  "floss": "dental-floss.png",
  "razor": "razor.png",
  "razors": "razor.png",
  "shaving cream": "shaving-cream.png",
  "cotton balls": "cotton-balls.png",
  "cotton swabs": "cotton-swabs.png",
  "q-tips": "cotton-swabs.png",
  "band-aids": "band-aids.png",
  "bandages": "band-aids.png",
  "first aid kit": "first-aid-kit.png",
  "hand sanitizer": "hand-sanitizer.png",
  "face wash": "face-wash.png",
  "moisturizer": "moisturizer.png",
  "lip balm": "lip-balm.png",
  "chapstick": "lip-balm.png",
  "hair gel": "hair-gel.png",
  "hair spray": "hair-spray.png",
  "nail polish remover": "nail-polish-remover.png",

  // ── BABY PRODUCTS ───────────────────────────────────────────────────────
  "baby food": "baby-food.png",
  "baby formula": "baby-formula.png",
  "formula": "baby-formula.png",
  "infant formula": "baby-formula.png",
  "baby cereal": "baby-cereal.png",
  "baby puffs": "baby-puffs.png",
  "diapers": "diapers.png",
  "diaper": "diapers.png",
  "baby wipes": "baby-wipes.png",
  "wipes": "baby-wipes.png",
  "diaper cream": "diaper-cream.png",
  "baby lotion": "baby-lotion.png",
  "baby shampoo": "baby-shampoo.png",
  "baby wash": "baby-wash.png",
  "baby bottle": "baby-bottle.png",
  "sippy cup": "sippy-cup.png",
  "pacifier": "pacifier.png",
  "teething ring": "teething-ring.png",
  "baby snacks": "baby-snacks.png",
  "baby yogurt": "baby-yogurt.png",
  "toddler snacks": "toddler-snacks.png",
  "kids snacks": "toddler-snacks.png",
  "juice box": "juice-box.png",
  "juice boxes": "juice-box.png",
  "applesauce pouches": "applesauce-pouch.png",
  "squeeze pouch": "applesauce-pouch.png",
  "pedialyte": "pedialyte.png",

  // ── PET FOOD & SUPPLIES ─────────────────────────────────────────────────
  "dog food": "dog-food.png",
  "dry dog food": "dry-dog-food.png",
  "wet dog food": "wet-dog-food.png",
  "canned dog food": "wet-dog-food.png",
  "puppy food": "puppy-food.png",
  "dog treats": "dog-treats.png",
  "dog biscuits": "dog-treats.png",
  "cat food": "cat-food.png",
  "dry cat food": "dry-cat-food.png",
  "wet cat food": "wet-cat-food.png",
  "canned cat food": "wet-cat-food.png",
  "kitten food": "kitten-food.png",
  "cat treats": "cat-treats.png",
  "cat litter": "cat-litter.png",
  "kitty litter": "cat-litter.png",
  "pet food": "dog-food.png",
  "fish food": "fish-food.png",
  "bird food": "bird-food.png",
  "bird seed": "bird-seed.png",

  // ── MISCELLANEOUS GROCERY ───────────────────────────────────────────────
  "tortilla chips": "tortilla-chips.png",
  "taco seasoning": "taco-seasoning.png",
  "taco kit": "taco-kit.png",
  "protein powder": "protein-powder.png",
  "whey protein": "whey-protein.png",
  "collagen": "collagen.png",
  "vitamins": "vitamins.png",
  "multivitamin": "multivitamin.png",
  "vitamin c": "vitamin-c.png",
  "vitamin d": "vitamin-d.png",
  "fish oil": "fish-oil.png",
  "omega 3": "fish-oil.png",
  "probiotics": "probiotics.png",
  "melatonin": "melatonin.png",
  "ibuprofen": "ibuprofen.png",
  "advil": "ibuprofen.png",
  "tylenol": "tylenol.png",
  "acetaminophen": "tylenol.png",
  "aspirin": "aspirin.png",
  "antacid": "antacid.png",
  "tums": "antacid.png",
  "cough drops": "cough-drops.png",
  "cough syrup": "cough-syrup.png",

  // ── ADDITIONAL COMMON ITEMS ─────────────────────────────────────────────
  "tortilla": "flour-tortilla.png",
  "pita": "pita-bread.png",
  "cooked rice": "cooked-rice.png",
  "risotto": "risotto.png",
  "polenta": "polenta.png",
  "tahini": "tahini.png",
  "sriracha": "sriracha.png",
  "sambal": "sambal.png",
  "chili garlic sauce": "chili-garlic-sauce.png",
  "ponzu": "ponzu.png",
  "hoisin": "hoisin-sauce.png",
  "duck sauce": "duck-sauce.png",
  "plum sauce": "plum-sauce.png",
  "cocktail sauce": "cocktail-sauce.png",
  "tartar sauce": "tartar-sauce.png",
  "horseradish sauce": "horseradish-sauce.png",
  "wasabi": "wasabi.png",
  "soy": "soy-sauce.png",
  "nutritional yeast": "nutritional-yeast.png",
  "brewer's yeast": "brewers-yeast.png",
  "gelatin": "gelatin-unflavored.png",
  "agar agar": "agar-agar.png",
  "xanthan gum": "xanthan-gum.png",
  "cornstarch": "cornstarch.png",
  "tapioca": "tapioca.png",
  "tapioca pearls": "tapioca-pearls.png",
  "boba": "tapioca-pearls.png",
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

// ── RELEVANCE SCORING ────────────────────────────────────────────────────────
// Server-side relevance filter applied to ALL database results.
// Two-layer approach:
//   1. isRelevant() — gate check: query must match a primary word in the name
//   2. isStrictlyRelevant() — majority check: most meaningful words in the name
//      must relate to the query. Catches products like
//      "Formula Mixer Milk Powder Blender Stirrer" for a "milk" search — the word
//      "milk" appears but the product is clearly a kitchen appliance, not food.

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
 */
function spoonacularImageUrl(raw) {
  if (!raw) return null;
  // Already a full URL — use as-is
  if (raw.startsWith("http")) return raw;
  // Bare filename — prepend Spoonacular's ingredient image CDN
  return `https://spoonacular.com/cdn/ingredients_250x250/${raw}`;
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
      const validImg = isValidImageUrl(fullImg) ? fullImg : null;
      // Log what Spoonacular returns so we can verify image extraction in Vercel logs
      console.log(`[Spoonacular] "${p.title}" — raw image: ${rawImg}, resolved: ${fullImg}, valid: ${!!validImg}`);
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
 * runs an 8-database waterfall with short-circuit logic, applies strict
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
  console.log(`[TextSearch] ── Incoming query: "${query}" | method: ${req.method}`);
  if (!query) return res.status(400).json({ error: "Missing 'q' query parameter" });

  // ── Pre-check: look up the query in our prebuilt image table ────────
  // If we have a cached Spoonacular CDN URL for this common item, we can
  // instantly provide an image to any search result that comes back without one.
  // This saves API calls and cuts latency for the ~1000 most common grocery items.
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
      // Validate image URL — reject placeholders/icons before they reach the client
      if (r.image && !isValidImageUrl(r.image)) {
        console.log(`[TextSearch] Rejected bad image for "${r.name}": ${r.image}`);
        r.image = null;
      }
      // If the result has no image, try the prebuilt lookup table before giving up.
      // This catches USDA results (never have images) and any other source that
      // returned null — we can still provide a relevant Spoonacular CDN image.
      if (!r.image && lookupImg) {
        r.image = lookupImg;
        console.log(`[TextSearch] Applied lookup image to "${r.name}" → ${lookupImg}`);
      }
      const key = r.name.toLowerCase().trim();
      if (seen.has(key)) continue;
      seen.add(key);
      allResults.push(r);
      added++;
    }
    return added;
  }

  // Minimum relevant results to short-circuit (stop searching more databases)
  const ENOUGH = 3;

  // Maximum time (ms) any single Tier 2 database gets before we move on.
  // Prevents slow external APIs from blocking the entire response.
  const TIER2_TIMEOUT_MS = 3000;

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

  // ── Tier 1: Spoonacular + Kroger + USDA (top 3 — run in parallel) ─────
  // These are the fastest and most grocery-relevant databases. Running all 3
  // in parallel instead of sequentially cuts Tier 1 from ~3-4s to ~1-1.5s.
  console.log(`[TextSearch] Starting Tier 1 (Spoonacular + Kroger + USDA) in parallel`);
  const t1Start = Date.now();
  const tier1 = await Promise.allSettled([
    searchSpoonacular(query),
    searchKroger(query),
    searchUSDA(query),
  ]);
  // Extract results from settled promises (fulfilled only — rejected = [])
  tier1.forEach(r => {
    if (r.status === "fulfilled") addResults(r.value);
  });
  console.log(`[TextSearch] Tier 1 done in ${Date.now() - t1Start}ms — ${allResults.length} result(s)`);

  if (allResults.length >= ENOUGH) {
    return res.status(200).json({ results: allResults.slice(0, 5) });
  }

  // ── Tier 2: Edamam + Open Food Facts (broader coverage, 3s timeout) ────
  // Only reached if Tier 1 returned fewer than 3 relevant results.
  // Both run in parallel with a 3s timeout each to prevent slow APIs from
  // blocking the response (previously took 8+ seconds with Google included).
  console.log(`[TextSearch] Starting Tier 2 (Edamam + Open Food Facts) in parallel, ${TIER2_TIMEOUT_MS}ms timeout each`);
  const t2Start = Date.now();
  const tier2 = await Promise.allSettled([
    withTimeout(searchEdamam(query), TIER2_TIMEOUT_MS),
    withTimeout(searchOpenFoodFacts(query), TIER2_TIMEOUT_MS),
  ]);
  tier2.forEach(r => {
    if (r.status === "fulfilled") addResults(r.value);
  });
  console.log(`[TextSearch] Tier 2 done in ${Date.now() - t2Start}ms — ${allResults.length} total result(s)`);

  if (allResults.length >= ENOUGH) {
    return res.status(200).json({ results: allResults.slice(0, 5) });
  }

  // ── Tier 3: UPC Item DB + niche databases (rarely needed fallbacks) ────
  // Only reached for very obscure queries that major databases don't cover
  console.log(`[TextSearch] Starting Tier 3 (UPC + Beauty + Pet Food) in parallel`);
  const t3Start = Date.now();
  const tier3 = await Promise.allSettled([
    searchUpcItemDb(query),
    searchOpenBeautyFacts(query),
    searchOpenPetFoodFacts(query),
  ]);
  tier3.forEach(r => {
    if (r.status === "fulfilled") addResults(r.value);
  });
  console.log(`[TextSearch] Tier 3 done in ${Date.now() - t3Start}ms — ${allResults.length} total result(s)`);

  // Return whatever we found (may be 0-5 results) — no image backfill needed
  // since all remaining sources provide their own images natively
  const final = allResults.slice(0, 5);
  const totalMs = Date.now() - t1Start;
  console.log(`[TextSearch] ── Complete: ${final.length} result(s) in ${totalMs}ms`);
  return res.status(200).json({ results: final });
}
