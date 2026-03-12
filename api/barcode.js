// ── BARCODE LOOKUP API ──────────────────────────────────────────────────────
// Serverless function that looks up a barcode (UPC/EAN) against a waterfall
// of five free product databases. Tries each in priority order and returns
// the first successful match. This keeps all API keys server-side and
// centralizes lookup logic so the frontend makes a single request.
// Five databases are tried in priority order; the first match wins.
//
// Waterfall order:
//   1. Edamam         — best for food + nutritional data
//   2. Open Food Facts — community-driven food database (no key needed)
//   3. Open Beauty Facts — cosmetics, shampoos, personal care (no key needed)
//   4. Open Pet Food Facts — pet food and treats (no key needed)
//   5. UPC Item DB    — general products, 100 lookups/day free tier (no key needed for trial)
//
// Request:  GET /api/barcode?code=013000006408
// Response: { found: true, product: { barcode, name, brand, category, image, source, description, nutrition } }
//      or:  { found: false }

// --- Edamam credentials (free tier) ---
const EID = "2b6ecac2";
const EK = "8db76605e873aaf2fbdf41256cb24cb4";

// --- In-memory image cache ---
// Google Custom Search has a 100 queries/day free limit, so we cache image URLs
// by product name to avoid redundant lookups within the same serverless instance.
const googleImageCache = new Map();

/**
 * fetchGoogleImage(productName) — Fetches a product image via Google Custom Search.
 * Used as a universal fallback when any database returns a result without an image.
 * Caches results in memory so repeated lookups for the same product name don't
 * burn through the 100/day free tier quota.
 * Returns the image URL string, or null if not found / not configured.
 */
async function fetchGoogleImage(productName) {
  if (!productName) return null;

  // Check in-memory cache first to preserve daily quota
  const cacheKey = productName.toLowerCase().trim();
  if (googleImageCache.has(cacheKey)) return googleImageCache.get(cacheKey);

  const key = process.env.GOOGLE_SEARCH_API_KEY;
  const cx = process.env.GOOGLE_SEARCH_ENGINE_ID;
  if (!key || !cx) return null;

  try {
    const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(productName + " product")}&key=${key}&cx=${cx}&num=1`;
    const r = await fetch(url);
    if (!r.ok) return null;
    const d = await r.json();

    const item = (d.items || [])[0];
    if (!item) {
      // Cache the miss too so we don't re-query Google for the same product
      googleImageCache.set(cacheKey, null);
      return null;
    }

    // Prefer full-size image from pagemap, fall back to thumbnail
    const pagemap = item.pagemap || {};
    const imgUrl = pagemap.cse_image?.[0]?.src
      || pagemap.cse_thumbnail?.[0]?.src
      || null;

    googleImageCache.set(cacheKey, imgUrl);
    return imgUrl;
  } catch {
    return null;
  }
}

/**
 * isLowQualityName(name) — Detects truncated, generic, or garbled product names.
 * Returns true if the name looks like it was cut off mid-word, contains import/export
 * artifacts ("imp", "exp"), or is too short/generic to be useful.
 * Used by the waterfall to decide whether to try the next database for a better result.
 */
function isLowQualityName(name) {
  if (!name || name.length < 3) return true;
  const lower = name.toLowerCase().trim();
  // Ends with common truncation artifacts from import databases
  if (/\b(imp|exp|impo|expo|inc|co|lt|gm|oz|pk)\.?$/i.test(lower)) return true;
  // Ends mid-word (lowercase letter after a space, 1-2 chars — likely truncated)
  if (/\s[a-z]{1,2}$/.test(lower)) return true;
  // All uppercase single word under 5 chars (often a code, not a name)
  if (/^[A-Z]{1,4}$/.test(name.trim())) return true;
  return false;
}

/**
 * cleanProductName(name, brand) — Combines brand + product name into a clean display name.
 * Strips truncation artifacts, excessive packaging info, and ensures the brand is included
 * at the start of the name (e.g. "Melinda's Ghost Pepper Sauce" not "Ghost Pepper Sauce imp").
 */
function cleanProductName(name, brand) {
  if (!name) return brand || "Unknown Product";
  let clean = name.trim();

  // Strip common trailing truncation artifacts (e.g. "imp", "exp", trailing incomplete words)
  clean = clean.replace(/\s*\b(imp|exp|impo|expo|inc|co|ltd|llc|corp)\.?\s*$/gi, "").trim();

  // Strip excessive packaging info in parentheses at the end (e.g. "(12 oz box)")
  clean = clean.replace(/\s*\([\d.,]+\s*(oz|lb|lbs|g|kg|ml|l|fl|ct|pk|pack|count|unit|each)\.?\)$/gi, "").trim();

  // Remove trailing commas, dashes, or pipes left after stripping
  clean = clean.replace(/[,\-|]+\s*$/, "").trim();

  // If brand exists and the name doesn't already start with the brand, prepend it
  if (brand && brand.trim()) {
    const brandClean = brand.trim();
    const nameStart = clean.toLowerCase().slice(0, brandClean.length);
    if (nameStart !== brandClean.toLowerCase()) {
      clean = brandClean + " " + clean;
    }
  }

  return clean || brand || "Unknown Product";
}

/**
 * tryEdamam(barcode) — Queries the Edamam Food Database API.
 * Best source for food products because it returns structured nutrition
 * data (calories, protein, fat, carbs) alongside basic product info.
 * Returns a normalized product object on success, or null on failure.
 */
async function tryEdamam(bc) {
  try {
    const r = await fetch(
      `https://api.edamam.com/api/food-database/v2/parser?upc=${bc}&app_id=${EID}&app_key=${EK}`
    );
    if (!r.ok) return null;
    const d = await r.json();

    // Edamam returns matches in "hints" (fuzzy) or "parsed" (exact) arrays
    const f =
      (d.hints && d.hints[0] && d.hints[0].food) ||
      (d.parsed && d.parsed[0] && d.parsed[0].food);
    if (!f) return null;

    // Extract nutrient values using Edamam's standardized codes
    const n = f.nutrients || {};
    return {
      barcode: bc,
      name: f.label || "",
      brand: f.brand || "",
      quantity: f.servingSize ? `${f.servingSize}${f.servingSizeUnit || "g"}` : "",
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
  } catch {
    return null;
  }
}

/**
 * tryOpenFoodFacts(barcode) — Queries the Open Food Facts community database.
 * No API key required. Excellent international food coverage.
 * Returns null if the product isn't found or has no name.
 */
async function tryOpenFoodFacts(bc) {
  try {
    const r = await fetch(
      `https://world.openfoodfacts.org/api/v0/product/${bc}.json`,
      { headers: { "User-Agent": "KitchenApp/1.0" } }
    );
    const d = await r.json();
    if (d.status === 1 && d.product) {
      const p = d.product;
      const nm = p.product_name || p.product_name_en || "";
      if (!nm) return null; // Product exists but has no name — treat as not found

      // Extract nutrition from the nutriments object if available
      const nt = p.nutriments || {};
      const hasNutrition = nt["energy-kcal_100g"] || nt["proteins_100g"];

      return {
        barcode: bc,
        name: nm,
        brand: p.brands || "",
        quantity: p.quantity || "",
        // Category tags are prefixed with language code (e.g. "en:dairy"), strip it
        category: ((p.categories_tags || [])[0] || "").replace("en:", "") || "General",
        // Prefer high-res front image, fall back to standard, then small thumbnail
        image: p.image_front_url || p.image_url || p.image_small_url || null,
        source: "Open Food Facts",
        description: p.generic_name || "",
        nutrition: hasNutrition
          ? {
              calories: nt["energy-kcal_100g"] ? Math.round(nt["energy-kcal_100g"]) : null,
              protein: nt["proteins_100g"] ? `${nt["proteins_100g"].toFixed(1)}g` : null,
              fat: nt["fat_100g"] ? `${nt["fat_100g"].toFixed(1)}g` : null,
              carbs: nt["carbohydrates_100g"] ? `${nt["carbohydrates_100g"].toFixed(1)}g` : null,
            }
          : null,
      };
    }
  } catch {}
  return null;
}

/**
 * tryOpenBeautyFacts(barcode) — Queries the Open Beauty Facts database.
 * Covers cosmetics, shampoos, lotions, and other personal care items.
 * Same API structure as Open Food Facts (they share the same platform).
 * No API key required.
 */
async function tryOpenBeautyFacts(bc) {
  try {
    const r = await fetch(
      `https://world.openbeautyfacts.org/api/v0/product/${bc}.json`,
      { headers: { "User-Agent": "KitchenApp/1.0" } }
    );
    const d = await r.json();
    if (d.status === 1 && d.product) {
      const p = d.product;
      const nm = p.product_name || p.product_name_en || "";
      if (!nm) return null;

      return {
        barcode: bc,
        name: nm,
        brand: p.brands || "",
        quantity: p.quantity || "",
        category: ((p.categories_tags || [])[0] || "").replace("en:", "") || "Personal Care",
        // Prefer high-res front image over small thumbnail
        image: p.image_front_url || p.image_url || p.image_small_url || null,
        source: "Open Beauty Facts",
        description: p.generic_name || "",
        nutrition: null, // Beauty products don't have nutrition data
      };
    }
  } catch {}
  return null;
}

/**
 * tryOpenPetFoodFacts(barcode) — Queries the Open Pet Food Facts database.
 * Covers pet food and treats. Same Open*Facts platform/API structure.
 * No API key required.
 */
async function tryOpenPetFoodFacts(bc) {
  try {
    const r = await fetch(
      `https://world.openpetfoodfacts.org/api/v0/product/${bc}.json`,
      { headers: { "User-Agent": "KitchenApp/1.0" } }
    );
    const d = await r.json();
    if (d.status === 1 && d.product) {
      const p = d.product;
      const nm = p.product_name || p.product_name_en || "";
      if (!nm) return null;

      return {
        barcode: bc,
        name: nm,
        brand: p.brands || "",
        quantity: p.quantity || "",
        category: ((p.categories_tags || [])[0] || "").replace("en:", "") || "Pet Food",
        // Prefer high-res front image over small thumbnail
        image: p.image_front_url || p.image_url || p.image_small_url || null,
        source: "Open Pet Food Facts",
        description: p.generic_name || "",
        nutrition: null, // Pet food nutrition not standardized the same way
      };
    }
  } catch {}
  return null;
}

/**
 * tryUpcItemDb(barcode) — Queries the UPC Item DB free trial endpoint.
 * Covers general US products across all categories.
 * Limited to 100 lookups/day on the free tier — no API key needed for trial.
 */
async function tryUpcItemDb(bc) {
  try {
    const r = await fetch(
      `https://api.upcitemdb.com/prod/trial/lookup?upc=${bc}`,
      { headers: { "User-Agent": "KitchenApp/1.0" } }
    );
    const d = await r.json();
    if (d.code === "OK" && d.items && d.items.length > 0) {
      const i = d.items[0];
      return {
        barcode: bc,
        name: i.title || "",
        brand: i.brand || "",
        quantity: i.size || "",
        category: i.category || "General",
        // UPC Item DB may return multiple images; pick the largest (last in array tends to be highest res)
        image: (i.images || []).length > 1 ? i.images[i.images.length - 1] : (i.images || [])[0] || null,
        source: "UPC Item DB",
        description: i.description || "",
        nutrition: null,
      };
    }
  } catch {}
  return null;
}

/**
 * Vercel serverless handler — accepts a GET request with a barcode query param,
 * runs the waterfall of product database lookups, and returns the first match.
 * If no database has the product, returns { found: false }.
 */
export default async function handler(req, res) {
  // --- CORS headers so the browser frontend can call this endpoint ---
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Browsers may send a preflight OPTIONS request
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const code = (req.query.code || "").trim();
  if (!code) return res.status(400).json({ error: "Missing 'code' query parameter" });

  // Run the waterfall: try each database in order.
  // If a result has a truncated or low-quality name (e.g. ends with "imp", cut off mid-word),
  // keep it as a fallback but continue trying other databases for a better match.
  // This ensures we return the most complete product info available.
  const fns = [tryEdamam, tryOpenFoodFacts, tryOpenBeautyFacts, tryOpenPetFoodFacts, tryUpcItemDb];
  let bestFallback = null;

  for (const fn of fns) {
    const result = await fn(code);
    if (!result) continue;

    // If the name looks complete and good, use it immediately
    if (!isLowQualityName(result.name)) {
      // Merge in any missing fields from the fallback (e.g. image, description)
      if (bestFallback) {
        if (!result.image && bestFallback.image) result.image = bestFallback.image;
        if (!result.description && bestFallback.description) result.description = bestFallback.description;
      }
      // Clean the product name: strip artifacts and prepend brand if missing
      result.name = cleanProductName(result.name, result.brand);

      // If no image from any database, try Google Custom Search as a universal fallback
      if (!result.image) {
        result.image = await fetchGoogleImage(result.name);
      }

      return res.status(200).json({ found: true, product: result });
    }

    // Low-quality name — save as fallback and keep trying other databases
    if (!bestFallback) bestFallback = result;
  }

  // No high-quality result found; return the best fallback we have (with cleaned name)
  if (bestFallback) {
    bestFallback.name = cleanProductName(bestFallback.name, bestFallback.brand);

    // If no image from any database, try Google Custom Search as a universal fallback
    if (!bestFallback.image) {
      bestFallback.image = await fetchGoogleImage(bestFallback.name);
    }

    return res.status(200).json({ found: true, product: bestFallback });
  }

  // All five databases returned nothing for this barcode
  return res.status(200).json({ found: false });
}
