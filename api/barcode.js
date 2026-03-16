// ── BARCODE LOOKUP API ──────────────────────────────────────────────────────
// Serverless function that looks up a barcode (UPC/EAN) against five free
// product databases using a SEQUENTIAL WATERFALL — each database is tried
// one at a time in strict priority order. If a database returns a good-quality
// result, we return immediately without querying the remaining databases.
// This keeps all API keys server-side and centralizes lookup logic so the
// frontend makes a single request.
//
// Custom product override:
//   Before querying any external database, checks the household's
//   customProducts/{normalizedBarcode} collection in Firestore. If a
//   correctedName exists, returns it immediately — skipping all external
//   lookups (instant + free).
//
// Sequential waterfall order (tried one at a time, stops on first good match):
//   1. Open Food Facts     — FIRST — community-driven food database (no key needed), best coverage
//   2. UPC Item DB         — general products, often has complete variant names (e.g. "Zero Sugar", "Diet")
//   3. Open Beauty Facts   — cosmetics, shampoos, personal care (no key needed)
//   4. Open Pet Food Facts — pet food and treats (no key needed)
//   5. Edamam              — last resort, best for nutritional data but often lacks product variants
//
// Request:  GET /api/barcode?code=013000006408&hid=householdId
// Response: { found: true, product: { barcode, name, brand, category, image, source, description, nutrition } }
//      or:  { found: false }

// Firebase Admin SDK — used to check customProducts before external lookups
import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// ── Firebase Admin SDK initialization (module-level) ─────────────────────────
// Same pattern as api/db.js — module-level init with getApps() guard to
// avoid double-initialization on warm Vercel serverless invocations.
if (!getApps().length) {
  initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID || "family-pantry-c65d6",
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: (process.env.FIREBASE_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
    }),
  });
}

// Admin Firestore instance for customProducts lookup
const adminDb = getFirestore();

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
  if (!productName) {
    console.log("[GoogleImage] Skipped — no product name provided");
    return null;
  }

  // Check in-memory cache first to preserve daily quota
  const cacheKey = productName.toLowerCase().trim();
  if (googleImageCache.has(cacheKey)) {
    console.log(`[GoogleImage] Cache hit for "${cacheKey}" → ${googleImageCache.get(cacheKey) || "null (cached miss)"}`);
    return googleImageCache.get(cacheKey);
  }

  // Confirm env vars are present without exposing actual keys
  const key = process.env.GOOGLE_SEARCH_API_KEY;
  const cx = process.env.GOOGLE_SEARCH_ENGINE_ID;
  console.log(`[GoogleImage] Env check — GOOGLE_SEARCH_API_KEY present: ${!!key}, GOOGLE_SEARCH_ENGINE_ID present: ${!!cx}`);
  if (!key || !cx) {
    console.log("[GoogleImage] Aborting — missing env var(s)");
    return null;
  }

  try {
    const query = productName + " product";
    console.log(`[GoogleImage] Querying Google Custom Search for: "${query}"`);
    const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${key}&cx=${cx}&num=1`;
    const r = await fetch(url);
    console.log(`[GoogleImage] Google API response status: ${r.status}`);
    if (!r.ok) {
      const errBody = await r.text().catch(() => "(unreadable)");
      console.log(`[GoogleImage] Google API error body: ${errBody.slice(0, 300)}`);
      return null;
    }
    const d = await r.json();
    console.log(`[GoogleImage] Google returned ${(d.items || []).length} item(s)`);

    const item = (d.items || [])[0];
    if (!item) {
      // Cache the miss too so we don't re-query Google for the same product
      console.log("[GoogleImage] No items returned — caching miss");
      googleImageCache.set(cacheKey, null);
      return null;
    }

    // Prefer full-size image from pagemap, fall back to thumbnail
    const pagemap = item.pagemap || {};
    const imgUrl = pagemap.cse_image?.[0]?.src
      || pagemap.cse_thumbnail?.[0]?.src
      || null;

    console.log(`[GoogleImage] Extracted image URL: ${imgUrl || "null (no image in pagemap)"}`);
    googleImageCache.set(cacheKey, imgUrl);
    return imgUrl;
  } catch (err) {
    console.log(`[GoogleImage] Exception: ${err.message}`);
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

  // Household ID passed from frontend — used to check customProducts override
  const hid = (req.query.hid || "").trim();

  console.log(`[Barcode] ── Lookup started for barcode: ${code} | household: ${hid || "(none)"}`);

  // ── CUSTOM PRODUCT OVERRIDE ────────────────────────────────────────────────
  // Before hitting any external database, check if this household has a
  // corrected name saved for this barcode. If found, return immediately —
  // this makes repeat scans of corrected products instant and free.
  if (hid) {
    try {
      const normalizedBarcode = code.replace(/[^a-zA-Z0-9]/g, "");
      const customDoc = await adminDb
        .collection("households").doc(hid)
        .collection("customProducts").doc(`barcode_${normalizedBarcode}`)
        .get();

      if (customDoc.exists) {
        const data = customDoc.data();
        if (data.correctedName) {
          console.log(`[Barcode] ── Custom product override found: "${data.correctedName}" — skipping all external lookups`);
          return res.status(200).json({
            found: true,
            product: {
              barcode: code,
              name: data.correctedName,
              brand: data.brand || "",
              quantity: data.quantity || "",
              category: data.category || "General",
              image: data.image || null,
              source: "Custom",
              description: data.description || "",
              nutrition: null,
              customOverride: true,
            }
          });
        }
      }
    } catch (err) {
      // Non-fatal — if custom product check fails, fall through to normal lookups
      console.log(`[Barcode] Custom product check failed (non-fatal): ${err.message}`);
    }
  }

  // ── SEQUENTIAL WATERFALL ──────────────────────────────────────────────────
  // Try each database one at a time in strict priority order.
  // Open Food Facts is ALWAYS tried first. If it returns a good-quality
  // result, we return immediately without querying any other database.
  // Low-quality results (truncated names, etc.) are saved as fallback
  // while we continue down the waterfall.
  //
  // Order: 1) Open Food Facts  2) UPC Item DB  3) Open Beauty Facts
  //        4) Open Pet Food Facts  5) Edamam
  const waterfall = [
    { fn: tryOpenFoodFacts,     name: "Open Food Facts" },
    { fn: tryUpcItemDb,         name: "UPC Item DB" },
    { fn: tryOpenBeautyFacts,   name: "Open Beauty Facts" },
    { fn: tryOpenPetFoodFacts,  name: "Open Pet Food Facts" },
    { fn: tryEdamam,            name: "Edamam" },
  ];

  let bestFallback = null;

  for (const { fn, name: dbName } of waterfall) {
    let result = null;
    try {
      result = await fn(code);
    } catch {
      // Non-fatal — if a database throws, skip it and try the next one
      console.log(`[Barcode] ${dbName}: exception — skipping`);
    }

    if (!result) {
      console.log(`[Barcode] ${dbName}: no result`);
      continue;
    }

    console.log(`[Barcode] ${dbName}: found "${result.name}" | image: ${result.image ? "YES" : "NONE"} | source: ${result.source}`);

    // If the name looks complete and good, return immediately (short-circuit)
    if (!isLowQualityName(result.name)) {
      console.log(`[Barcode] Name quality OK — using ${dbName} as primary result`);

      // Merge in any missing fields from a previously-seen fallback
      if (bestFallback) {
        if (!result.image && bestFallback.image) {
          console.log(`[Barcode] Merging image from fallback (${bestFallback.source})`);
          result.image = bestFallback.image;
        }
        if (!result.description && bestFallback.description) result.description = bestFallback.description;
      }
      // Clean the product name: strip artifacts and prepend brand if missing
      result.name = cleanProductName(result.name, result.brand);

      // If no image from any database, try Google Custom Search as a universal fallback
      if (!result.image) {
        console.log(`[Barcode] No image from any DB — invoking Google Custom Search fallback for "${result.name}"`);
        result.image = await fetchGoogleImage(result.name);
        console.log(`[Barcode] Google fallback result: ${result.image ? result.image : "null (no image found)"}`);
      } else {
        console.log(`[Barcode] Image present from DB — skipping Google fallback`);
      }

      console.log(`[Barcode] ── Returning product: "${result.name}" | image: ${result.image ? "YES" : "NONE"} | source: ${result.source}`);
      return res.status(200).json({ found: true, product: result });
    }

    // Low-quality name — save as fallback and continue to next database
    console.log(`[Barcode] ${dbName}: low-quality name "${result.name}" — saving as fallback, trying next DB`);
    if (!bestFallback) bestFallback = result;
  }

  // No high-quality result found; return the best fallback we have (with cleaned name)
  if (bestFallback) {
    console.log(`[Barcode] No high-quality match — using fallback from ${bestFallback.source}: "${bestFallback.name}"`);
    bestFallback.name = cleanProductName(bestFallback.name, bestFallback.brand);

    // If no image from any database, try Google Custom Search as a universal fallback
    if (!bestFallback.image) {
      console.log(`[Barcode] Fallback has no image — invoking Google Custom Search for "${bestFallback.name}"`);
      bestFallback.image = await fetchGoogleImage(bestFallback.name);
      console.log(`[Barcode] Google fallback result: ${bestFallback.image ? bestFallback.image : "null (no image found)"}`);
    } else {
      console.log(`[Barcode] Fallback has image — skipping Google fallback`);
    }

    console.log(`[Barcode] ── Returning fallback: "${bestFallback.name}" | image: ${bestFallback.image ? "YES" : "NONE"} | source: ${bestFallback.source}`);
    return res.status(200).json({ found: true, product: bestFallback });
  }

  // All five databases returned nothing for this barcode
  console.log(`[Barcode] ── All databases returned nothing for ${code}`);
  return res.status(200).json({ found: false });
}
