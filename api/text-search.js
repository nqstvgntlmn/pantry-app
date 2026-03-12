// ── TEXT SEARCH API ──────────────────────────────────────────────────────────
// Serverless function that searches for products by name/text query across
// a 9-database waterfall. Short-circuits once enough high-quality results are
// found to keep response times fast.
//
// Waterfall order (fastest/most relevant first):
//   1. Spoonacular   — food-focused, great for produce & ingredients
//   2. Kroger        — real grocery inventory with clean product images
//   3. USDA FoodData — authoritative for fresh produce & whole foods
//   4. Google Custom Search — catch-all with product images from the web
//   5. Edamam        — food database with nutrition data
//   6. Open Food Facts — community-driven food database (no key needed)
//   7. UPC Item DB   — general products (no key for trial)
//   8. Open Beauty Facts — cosmetics & personal care (no key needed)
//   9. Open Pet Food Facts — pet food & treats (no key needed)
//
// Request:  GET /api/text-search?q=olive+oil
// Response: { results: [{ name, brand, category, image, source, nutrition }] }
//      or:  { results: [] }  (no matches found)

// --- Edamam credentials (free tier — same as barcode.js) ---
const EID = "2b6ecac2";
const EK = "8db76605e873aaf2fbdf41256cb24cb4";

// ── RELEVANCE SCORING ────────────────────────────────────────────────────────
// Server-side relevance filter applied to ALL database results. Ensures only
// products where the query is a primary/leading word pass through.
// This prevents irrelevant matches like "Chicken & Mushroom POT noodle" for "mushroom".

/**
 * isRelevant(name, query) — Returns true only if the query is a primary word
 * in the product name (starts with query, or one of the first 3 words matches).
 * Strict filter: anything else is rejected before results reach the client.
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

    return (d.products || []).slice(0, 5).map(p => ({
      name: p.title || "",
      brand: "",
      category: "Grocery",
      // Spoonacular may return a bare filename — normalize to full CDN URL
      image: spoonacularImageUrl(p.image),
      source: "Spoonacular",
      description: "",
      nutrition: null,
    })).filter(p => p.name);
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
      // preferring "large" or "medium" size for good quality without being huge
      const images = p.images || [];
      const frontImg = images.find(img => img.perspective === "front");
      const anyImg = frontImg || images[0]; // fall back to any available perspective
      const imgUrl = anyImg?.sizes?.find(s => s.size === "large")?.url
        || anyImg?.sizes?.find(s => s.size === "medium")?.url
        || anyImg?.sizes?.[0]?.url
        || null;

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
 * USDA has no product images, so we backfill each result's image via Google
 * Custom Search (if configured). Image fetches run in parallel for speed.
 */
async function searchUSDA(query) {
  const key = process.env.USDA_API_KEY;
  if (!key) return []; // API key not configured — skip

  try {
    const url = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${encodeURIComponent(query)}&pageSize=5&api_key=${key}`;
    const r = await fetch(url);
    if (!r.ok) return [];
    const d = await r.json();

    const results = (d.foods || []).slice(0, 5).map(f => {
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
        image: null, // USDA doesn't provide images — backfilled below via Google
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

    // Backfill images from Google Custom Search in parallel.
    // Each USDA result gets a Google image lookup for its product name.
    // If Google isn't configured or a lookup fails, the result stays imageless.
    await Promise.all(results.map(async (item) => {
      const img = await fetchGoogleImage(item.name);
      if (img) item.image = img;
    }));

    return results;
  } catch {
    return [];
  }
}

/**
 * searchGoogle(query) — Searches Google Custom Search for product info/images.
 * Uses regular web search (not image search) to get product pages with embedded
 * images via pagemap.cse_image. Falls back to cse_thumbnail if no full image.
 * Requires GOOGLE_SEARCH_API_KEY and GOOGLE_SEARCH_ENGINE_ID env vars.
 */
async function searchGoogle(query) {
  const key = process.env.GOOGLE_SEARCH_API_KEY;
  const cx = process.env.GOOGLE_SEARCH_ENGINE_ID;
  if (!key || !cx) return []; // Not configured — skip

  try {
    // Regular web search (no searchType=image) — results include pagemap with product images
    const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query + " grocery product")}&key=${key}&cx=${cx}&num=5`;
    const r = await fetch(url);
    if (!r.ok) return [];
    const d = await r.json();

    return (d.items || []).slice(0, 5).map(item => {
      // Extract image from pagemap: prefer cse_image (full size), fall back to cse_thumbnail
      const pagemap = item.pagemap || {};
      const imgUrl = pagemap.cse_image?.[0]?.src
        || pagemap.cse_thumbnail?.[0]?.src
        || null;

      return {
        name: (item.title || "").replace(/ - .*$/, "").replace(/\|.*$/, "").trim(),
        brand: "",
        category: "General",
        image: imgUrl,
        source: "Google",
        description: (item.snippet || "").slice(0, 120),
        nutrition: null,
      };
    }).filter(p => p.name);
  } catch {
    return [];
  }
}

/**
 * fetchGoogleImage(productName) — Fetches a single product image from Google Custom Search.
 * Used to backfill images for sources that don't provide them (e.g. USDA).
 * Returns the image URL string, or null if not found.
 */
async function fetchGoogleImage(productName) {
  const key = process.env.GOOGLE_SEARCH_API_KEY;
  const cx = process.env.GOOGLE_SEARCH_ENGINE_ID;
  if (!key || !cx) return null;

  try {
    const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(productName + " food product")}&key=${key}&cx=${cx}&num=1`;
    const r = await fetch(url);
    if (!r.ok) return null;
    const d = await r.json();

    const item = (d.items || [])[0];
    if (!item) return null;

    // Extract image from pagemap — same logic as searchGoogle
    const pagemap = item.pagemap || {};
    return pagemap.cse_image?.[0]?.src
      || pagemap.cse_thumbnail?.[0]?.src
      || null;
  } catch {
    return null;
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
        image: f.image || null,
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
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(query)}&search_simple=1&action=process&json=1&page_size=5&fields=product_name,brands,categories_tags,image_front_small_url,image_front_url,nutriments,generic_name`;
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
        image: p.image_front_url || p.image_front_small_url || null,
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
      image: (i.images || []).length > 0 ? i.images[0] : null,
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
 * runs a 9-database waterfall with short-circuit logic, applies strict
 * relevance filtering, deduplicates, and returns the best matches (up to 5).
 *
 * Short-circuit: the waterfall runs databases in tiers. Each tier fires its
 * databases in parallel. As soon as we have >= 3 relevant results after a tier,
 * we stop and return — no need to hit slower/less-relevant sources.
 */
export default async function handler(req, res) {
  // --- CORS headers for browser frontend ---
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const query = (req.query.q || "").trim();
  console.log(`[TextSearch] ── Incoming query: "${query}" | method: ${req.method}`);
  if (!query) return res.status(400).json({ error: "Missing 'q' query parameter" });

  // Track all unique results across tiers — deduped by lowercase name
  const seen = new Set();
  const allResults = [];

  /**
   * addResults(results) — Merges new results into allResults, deduplicating
   * by name and applying strict relevance filtering. Returns the count of
   * new results added (for short-circuit decision).
   */
  function addResults(results) {
    let added = 0;
    for (const r of results) {
      if (!r || !r.name) continue;
      // Strict relevance: query must be a primary word in the product name
      if (!isRelevant(r.name, query)) continue;
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

  // ── Tier 1: Spoonacular + Kroger (fastest, most grocery-relevant) ──
  const tier1 = await Promise.all([
    searchSpoonacular(query),
    searchKroger(query),
  ]);
  tier1.forEach(r => addResults(r));
  if (allResults.length >= ENOUGH) {
    return res.status(200).json({ results: allResults.slice(0, 5) });
  }

  // ── Tier 2: USDA + Google + Edamam (good coverage, slightly slower) ──
  const tier2 = await Promise.all([
    searchUSDA(query),
    searchGoogle(query),
    searchEdamam(query),
  ]);
  tier2.forEach(r => addResults(r));
  if (allResults.length >= ENOUGH) {
    return res.status(200).json({ results: allResults.slice(0, 5) });
  }

  // ── Tier 3: Open Food Facts + UPC Item DB (community/general fallbacks) ──
  const tier3 = await Promise.all([
    searchOpenFoodFacts(query),
    searchUpcItemDb(query),
  ]);
  tier3.forEach(r => addResults(r));
  if (allResults.length >= ENOUGH) {
    return res.status(200).json({ results: allResults.slice(0, 5) });
  }

  // ── Tier 4: Niche databases (beauty, pet food — rarely needed) ──
  const tier4 = await Promise.all([
    searchOpenBeautyFacts(query),
    searchOpenPetFoodFacts(query),
  ]);
  tier4.forEach(r => addResults(r));

  // Return whatever we found (may be 0-5 results)
  return res.status(200).json({ results: allResults.slice(0, 5) });
}
