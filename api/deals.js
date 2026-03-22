// ── DEALS API PROXY ──────────────────────────────────────────────────────────
// Serverless function that fetches REAL local grocery deals from the Flipp API.
// Flipp aggregates weekly flyer/circular data from hundreds of US grocery chains.
//
// No API key is required — Flipp's endpoints are publicly accessible.
// Results are actual store circular data, not AI-generated estimates.
//
// ── ACTIONS ──────────────────────────────────────────────────────────────────
//   "browse"  — Fetch full weekly circulars for target stores (cached in Firestore, 24hr TTL)
//   "search"  — Search Flipp for a specific query across all nearby stores (unchanged)
//
// ── FLIPP API ENDPOINTS USED ─────────────────────────────────────────────────
//   GET /flipp/flyers?locale=en-us&postal_code=XXXXX
//       → Returns list of active flyers (merchant, flyer_id, valid dates)
//   GET /flipp/flyers/{flyer_id}
//       → Returns all items in a specific flyer (name, brand, price, discount, image)
//   GET /flipp/items/search?locale=en-us&postal_code=XXXXX&q=QUERY
//       → Searches across all stores for a specific product
//
// ── FIRESTORE CACHE ──────────────────────────────────────────────────────────
//   Path: households/{hid}/cache/flippDeals
//   TTL:  24 hours (circulars update weekly but we refresh daily for accuracy)
//   Data: { deals: [...], stores: [...], cachedAt: timestamp, validTo: ISO date }
//
// Request body: { action: "browse"|"search", zipcode, query?, householdId? }
// Response:     { deals: [...], stores: [...], sources: ["Flipp"], fromCache? }

import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// ── Firebase Admin SDK initialization (module-level) ─────────────────────────
// Same pattern as api/shoprite-coupons.js — must init before any Firestore calls.
// Uses getApps() guard to avoid double-initialization on warm invocations.
if (!getApps().length) {
  initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID || "family-pantry-c65d6",
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: (process.env.FIREBASE_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
    }),
  });
}
const adminDb = getFirestore();

// ── Flipp API Configuration ─────────────────────────────────────────────────

// Base URLs for Flipp's public API endpoints
const FLIPP_FLYERS_URL = "https://backflipp.wishabi.com/flipp/flyers";
const FLIPP_SEARCH_URL = "https://backflipp.wishabi.com/flipp/items/search";

// Target stores we care about — these are the grocery stores near Edison, NJ (08817).
// The merchant names must match exactly what Flipp returns in the flyers endpoint.
const TARGET_STORES = ["Walmart", "ALDI", "Stop & Shop", "Wegmans"];

// Cache TTL — 24 hours in milliseconds. Weekly circulars typically update once per week,
// but we refresh daily so users always see current deals. This balances freshness vs API load.
const CACHE_TTL_MS = 24 * 60 * 60 * 1000;

// ── Flipp API: Fetch Flyers List ─────────────────────────────────────────────

/**
 * fetchFlyers(zipcode) — Fetch the list of active flyers near the given zipcode.
 * Returns an array of flyer objects with id, merchant name, valid dates, etc.
 * This is the first step in the browse flow: we use this to find which target
 * stores have active circulars, then fetch items from each.
 */
async function fetchFlyers(zipcode) {
  const url = `${FLIPP_FLYERS_URL}?locale=en-us&postal_code=${encodeURIComponent(zipcode)}`;

  const res = await fetch(url, {
    headers: { "Accept": "application/json", "User-Agent": "KitchenApp/1.0" }
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error("Flipp flyers API error (HTTP " + res.status + "): " + err.substring(0, 200));
  }

  return res.json();
}

/**
 * findTargetFlyers(flyers) — Filter the flyers list to only include our target
 * grocery stores. Matches by case-insensitive merchant name comparison.
 * Returns an array of { flyerId, merchant, validFrom, validTo } for each match.
 */
function findTargetFlyers(flyers) {
  if (!Array.isArray(flyers)) return [];

  const matches = [];
  // Normalize target store names for case-insensitive matching
  const targetLower = TARGET_STORES.map(s => s.toLowerCase());

  for (const f of flyers) {
    const merchant = (f.merchant || "").trim();
    const merchantLower = merchant.toLowerCase();

    // Check if this flyer's merchant matches any of our target stores
    // Uses exact match after lowercasing (e.g. "ALDI" matches "aldi", "Wegman's" matches "wegman's")
    const isTarget = targetLower.some(t =>
      merchantLower === t || merchantLower === t + "'s" || merchantLower.replace(/'/g, "") === t.replace(/'/g, "")
    );

    if (isTarget) {
      matches.push({
        flyerId: f.id,
        merchant: merchant,
        validFrom: f.valid_from || null,
        validTo: f.valid_to || null,
        merchantLogo: f.merchant_logo || null,
      });
    }
  }

  return matches;
}

// ── Flipp API: Fetch Flyer Items ─────────────────────────────────────────────

/**
 * fetchFlyerItems(flyerId) — Fetch all items from a specific weekly flyer.
 * Uses the /flipp/flyers/{id} endpoint which returns the complete flyer with
 * all items including names, prices, discounts, and cutout images.
 *
 * Each item has: id, name, brand, price, discount (%), cutout_image_url,
 * valid_from, valid_to, ttm_url (product link).
 */
async function fetchFlyerItems(flyerId) {
  const url = `${FLIPP_FLYERS_URL}/${flyerId}`;

  const res = await fetch(url, {
    headers: { "Accept": "application/json", "User-Agent": "KitchenApp/1.0" }
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error("Flipp flyer items error (HTTP " + res.status + "): " + err.substring(0, 200));
  }

  return res.json();
}

/**
 * normalizeFlippItem(item, merchant, merchantLogo) — Convert a raw Flipp flyer
 * item into our standardized deal object shape for the frontend.
 *
 * Filters out non-product items (social media links, empty names, items without prices).
 * Returns null for items that should be skipped.
 */
function normalizeFlippItem(item, merchant, merchantLogo) {
  // Skip items without a name or with empty/missing price
  if (!item.name || item.name.length < 2) return null;
  const priceStr = String(item.price || "").trim();
  if (!priceStr || priceStr === "0" || priceStr === "0.0") return null;

  // Skip social media links and non-product items (ALDI flyers include Twitter/Facebook links)
  const ttm = (item.ttm_url || "").toLowerCase();
  if (ttm.includes("twitter.com") || ttm.includes("facebook.com") || ttm.includes("instagram.com")) return null;

  // Parse price — Flipp returns price as string or number
  const price = parseFloat(priceStr);
  if (isNaN(price) || price <= 0) return null;

  // Build the normalized deal object matching our frontend's expected shape
  return {
    name: item.name,
    brand: item.brand || "",
    store: merchant,
    price: "$" + price.toFixed(2),
    discount: item.discount ? (item.discount + "% off") : null,
    image: item.cutout_image_url ? item.cutout_image_url.replace("http://", "https://") : null,
    validFrom: item.valid_from || null,
    validTo: item.valid_to || null,
    itemId: item.id,
    flyerId: item.flyer_id,
    merchantLogo: merchantLogo || null,
    source: "Flipp",
  };
}

// ── Browse Action: Fetch Full Weekly Circulars ───────────────────────────────

/**
 * browseDeals(zipcode) — Fetch all weekly circular items from our target stores.
 *
 * Flow:
 * 1. Get list of active flyers near the zipcode
 * 2. Filter to our target stores (Walmart, ALDI, Stop & Shop, Wegmans)
 * 3. Fetch all items from each target store's flyer (in parallel for speed)
 * 4. Normalize and filter items into deal objects
 * 5. Return deals grouped by store with metadata
 *
 * This is the core of the "Weekly Circular Deals" feature — it gives users
 * a browsable list of every deal in their local stores' weekly circulars.
 */
async function browseDeals(zipcode) {
  // Step 1: Fetch the list of all active flyers near this zipcode
  const flyersData = await fetchFlyers(zipcode);
  const allFlyers = flyersData.flyers || flyersData || [];

  // Step 2: Filter to only our target grocery stores
  const targetFlyers = findTargetFlyers(allFlyers);

  if (!targetFlyers.length) {
    return {
      deals: [],
      stores: [],
      message: "No weekly circulars found for target stores near " + zipcode,
    };
  }

  // Step 3: Fetch items from each target flyer in parallel for speed
  const flyerResults = await Promise.all(
    targetFlyers.map(async (flyer) => {
      try {
        const data = await fetchFlyerItems(flyer.flyerId);
        const items = data.items || [];
        console.log(`[Deals Browse] ${flyer.merchant}: ${items.length} raw items from flyer ${flyer.flyerId}`);

        // Step 4: Normalize each item, filtering out non-products
        const deals = items
          .map(item => normalizeFlippItem(item, flyer.merchant, flyer.merchantLogo))
          .filter(Boolean);

        return {
          merchant: flyer.merchant,
          validFrom: flyer.validFrom,
          validTo: flyer.validTo,
          merchantLogo: flyer.merchantLogo,
          deals,
        };
      } catch (err) {
        // Non-fatal: log error and skip this store's flyer
        console.error(`[Deals Browse] Failed to fetch ${flyer.merchant} flyer:`, err.message);
        return { merchant: flyer.merchant, deals: [], error: err.message };
      }
    })
  );

  // Step 5: Flatten all deals and build store metadata
  const allDeals = [];
  const stores = [];

  for (const result of flyerResults) {
    if (result.deals.length > 0) {
      allDeals.push(...result.deals);
      stores.push({
        name: result.merchant,
        count: result.deals.length,
        validFrom: result.validFrom,
        validTo: result.validTo,
        merchantLogo: result.merchantLogo,
      });
    }
  }

  // Sort deals: items with discounts first, then alphabetically by store
  allDeals.sort((a, b) => {
    if (a.discount && !b.discount) return -1;
    if (!a.discount && b.discount) return 1;
    return a.store.localeCompare(b.store);
  });

  // Calculate the latest validTo date across all flyers (for cache metadata)
  const latestValidTo = stores.reduce((latest, s) => {
    if (s.validTo && (!latest || s.validTo > latest)) return s.validTo;
    return latest;
  }, null);

  return { deals: allDeals, stores, validTo: latestValidTo };
}

// ── Search Action: Query-Based Deal Search (Legacy) ──────────────────────────

/**
 * fetchFlippSearch(zipcode, query) — Searches Flipp's aggregated product
 * database for items matching the query near the given zipcode.
 * Returns an array of normalized deal objects ready for the frontend.
 *
 * This uses the /items/search endpoint which returns ecom_items and ads.
 * Covers most major US retailers but returns catalog items, not flyer items.
 * Kept for the manual search feature in the Deals tab.
 */
async function fetchFlippSearch(zipcode, query) {
  const url = `${FLIPP_SEARCH_URL}?locale=en-us&postal_code=${encodeURIComponent(zipcode)}&q=${encodeURIComponent(query)}`;

  const res = await fetch(url, {
    headers: { "Accept": "application/json", "User-Agent": "KitchenApp/1.0" }
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error("Flipp API error (HTTP " + res.status + "): " + err.substring(0, 200));
  }

  const data = await res.json();
  const deals = [];

  // Process ecom_items — real product listings from store catalogs
  if (data.ecom_items && Array.isArray(data.ecom_items)) {
    for (const item of data.ecom_items) {
      if (!item.current_price || item.display === "hide") continue;

      const hasDiscount = item.original_price && item.original_price > item.current_price;

      deals.push({
        name: item.name || "",
        brand: "",
        store: item.merchant || "Store",
        price: "$" + Number(item.current_price).toFixed(2),
        discount: hasDiscount
          ? "$" + (item.original_price - item.current_price).toFixed(2) + " off"
          : null,
        image: item.image_url || null,
        size: item.description || "",
        source: "Flipp",
        merchantLogo: item.merchant_logo || null,
      });
    }
  }

  return deals;
}

// ── Firestore Cache Helpers ─────────────────────────────────────────────────
// Weekly circular deals are cached in Firestore at households/{hid}/cache/flippDeals
// to avoid re-fetching from Flipp on every page load. Cache has a 24-hour TTL.

/**
 * getCachedDeals(householdId) — Read cached weekly circular data from Firestore.
 * Returns the cached data object or null if cache is expired or missing.
 */
async function getCachedDeals(householdId) {
  try {
    const doc = await adminDb
      .doc(`households/${householdId}/cache/flippDeals`)
      .get();

    if (!doc.exists) return null;

    const data = doc.data();
    // Check if cache is still valid (within 24-hour TTL)
    if (!data.cachedAt || Date.now() - data.cachedAt > CACHE_TTL_MS) {
      return null; // Expired — will trigger fresh fetch
    }

    return {
      deals: data.deals || [],
      stores: data.stores || [],
      validTo: data.validTo || null,
      cachedAt: data.cachedAt,
    };
  } catch (err) {
    console.error("[Deals Cache] Read error:", err.message);
    return null;
  }
}

/**
 * saveDealCache(householdId, deals, stores, validTo) — Write weekly circular
 * data to Firestore cache with a timestamp for TTL checking.
 * Non-fatal on failure — logs the error and continues.
 */
async function saveDealCache(householdId, deals, stores, validTo) {
  try {
    await adminDb
      .doc(`households/${householdId}/cache/flippDeals`)
      .set({
        deals,
        stores,
        validTo: validTo || null,
        cachedAt: Date.now(),
      });
    console.log("[Deals Cache] Saved", deals.length, "deals for household", householdId);
  } catch (err) {
    // Cache write failure is non-fatal — log and continue
    console.error("[Deals Cache] Write error:", err.message);
  }
}

// ── Main Handler ────────────────────────────────────────────────────────────

export default async function handler(req, res) {
  // Standard CORS headers for the frontend to call this endpoint
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });

  const { action, zipcode, query, householdId } = req.body || {};

  // Validate required parameters
  if (!zipcode) return res.status(400).json({ error: "zipcode is required — set it in Settings" });

  try {
    // ── BROWSE: Fetch full weekly circulars for target stores ──
    if (action === "browse") {
      if (!householdId) return res.status(400).json({ error: "householdId is required for browse" });

      // Check Firestore cache first — avoids hitting Flipp API on every page load
      const cached = await getCachedDeals(householdId);
      if (cached) {
        console.log("[Deals Browse] Serving", cached.deals.length, "deals from cache (age:", Math.round((Date.now() - cached.cachedAt) / 60000), "min)");
        return res.json({
          deals: cached.deals,
          stores: cached.stores,
          validTo: cached.validTo,
          sources: ["Flipp"],
          fromCache: true,
        });
      }

      // Cache miss or expired — fetch fresh data from Flipp
      console.log("[Deals Browse] Cache miss — fetching fresh circulars for zip", zipcode);
      const data = await browseDeals(zipcode);

      // Cache the results in Firestore for next time
      await saveDealCache(householdId, data.deals, data.stores, data.validTo);

      return res.json({
        deals: data.deals,
        stores: data.stores,
        validTo: data.validTo,
        message: data.message || null,
        sources: ["Flipp"],
        fromCache: false,
      });
    }

    // ── SEARCH: Query-based deal search (default action, backward-compatible) ──
    if (!query) return res.status(400).json({ error: "search query is required" });

    const deals = await fetchFlippSearch(zipcode, query);

    // Sort so discounted items appear first
    deals.sort((a, b) => (b.discount ? 1 : 0) - (a.discount ? 1 : 0));

    // Collect unique store names for the "nearby stores" display
    const storeSet = new Set();
    deals.forEach(d => { if (d.store) storeSet.add(d.store); });
    const stores = [...storeSet].map(name => ({ name }));

    return res.json({ deals, stores, sources: ["Flipp"] });
  } catch (err) {
    console.error("Deals API error:", err);
    return res.status(500).json({ error: "Failed to fetch deals: " + err.message });
  }
}
