// ── BARCODE LOOKUP API ──────────────────────────────────────────────────────
// Serverless function that looks up a barcode (UPC/EAN) against a waterfall
// of six free product databases. Tries each in priority order and returns
// the first successful match. This keeps all API keys server-side and
// centralizes lookup logic so the frontend makes a single request.
//
// Waterfall order:
//   1. Edamam         — best for food + nutritional data
//   2. Open Food Facts — community-driven food database (no key needed)
//   3. Open Beauty Facts — cosmetics, shampoos, personal care (no key needed)
//   4. Open Pet Food Facts — pet food and treats (no key needed)
//   5. UPC Item DB    — general products, 100 lookups/day free tier (no key needed for trial)
//   6. Go UPC         — last resort fallback (requires GO_UPC_KEY env var)
//
// Request:  GET /api/barcode?code=013000006408
// Response: { found: true, product: { barcode, name, brand, category, image, source, description, nutrition } }
//      or:  { found: false }

// --- Edamam credentials (free tier) ---
const EID = "2b6ecac2";
const EK = "8db76605e873aaf2fbdf41256cb24cb4";

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
        image: p.image_small_url || p.image_url || null,
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
        image: p.image_small_url || p.image_url || null,
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
        image: p.image_small_url || p.image_url || null,
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
        image: (i.images || [])[0] || null,
        source: "UPC Item DB",
        description: i.description || "",
        nutrition: null,
      };
    }
  } catch {}
  return null;
}

/**
 * tryGoUpc(barcode) — Queries the Go UPC API as a last-resort fallback.
 * Requires a GO_UPC_KEY environment variable. If the key is not set,
 * this step is silently skipped. Covers a broad range of products.
 */
async function tryGoUpc(bc) {
  const key = process.env.GO_UPC_KEY;
  if (!key) return null; // Skip if no API key configured

  try {
    const r = await fetch(
      `https://go-upc.com/api/v1/code/${bc}`,
      { headers: { Authorization: `Bearer ${key}` } }
    );
    if (!r.ok) return null;
    const d = await r.json();

    if (d.product && d.product.name) {
      return {
        barcode: bc,
        name: d.product.name || "",
        brand: d.product.brand || "",
        quantity: "",
        category: d.product.category || "General",
        image: d.product.imageUrl || null,
        source: "Go UPC",
        description: d.product.description || "",
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

  // Run the waterfall: try each database in order, stop at the first result.
  // Each function returns null on failure, so we chain with ||.
  const product =
    (await tryEdamam(code)) ||
    (await tryOpenFoodFacts(code)) ||
    (await tryOpenBeautyFacts(code)) ||
    (await tryOpenPetFoodFacts(code)) ||
    (await tryUpcItemDb(code)) ||
    (await tryGoUpc(code)) ||
    null;

  if (product) {
    return res.status(200).json({ found: true, product });
  }

  // All six databases returned nothing for this barcode
  return res.status(200).json({ found: false });
}
