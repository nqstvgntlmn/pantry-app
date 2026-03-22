// ── SHOPRITE DIGITAL COUPONS API ─────────────────────────────────────────────
// Serverless function that fetches ShopRite digital coupons and clips them
// to the household's Price Plus Card (PPC). Uses the Wakefern/ShopRite
// storefront gateway API to browse and clip digital coupons.
//
// Actions:
//   "list"    — Fetch available digital coupons (cached in Firestore, 4hr TTL)
//   "clip"    — Clip a specific coupon to the household PPC
//   "clipped" — Return IDs of already-clipped coupons for the PPC
//
// Env vars (set in Vercel):
//   SHOPRITE_PPC          — Price Plus Card number for coupon clipping
//   FIREBASE_PROJECT_ID   — Firebase project ID (family-pantry-c65d6)
//   FIREBASE_CLIENT_EMAIL — Firebase Admin SDK client email
//   FIREBASE_PRIVATE_KEY  — Firebase Admin SDK private key
//
// Request body: { action: "list"|"clip"|"clipped", householdId, couponId?, query? }
// Response:     { coupons: [...], clippedIds: [...] } or { ok: true }

import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// ── Firebase Admin SDK initialization (module-level) ─────────────────────────
// Same pattern as api/db.js — must init before any Firestore calls.
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

// ── ShopRite API Configuration ──────────────────────────────────────────────
// Wakefern storefront gateway — powers shoprite.com digital coupons.
// If ShopRite changes their API, update these URLs.
const SR_API_BASE = "https://storefrontgateway.shoprite.com/api/v2";

// Default ShopRite store ID — Edison, NJ (ShopRite of Edison on Rt 1).
// Can be overridden in request body if user selects a different store.
const DEFAULT_STORE_ID = "0498";

// Cache TTL — 4 hours in milliseconds. ShopRite coupons refresh daily,
// so 4 hours keeps data fresh without hammering the API.
const CACHE_TTL_MS = 4 * 60 * 60 * 1000;

// Price Plus Card number — stored as Vercel env var, never sent to client
const PPC = process.env.SHOPRITE_PPC || "";

// ── Session management ──────────────────────────────────────────────────────
// ShopRite requires an auth token to list and clip coupons.
// We cache the session token in a module-level variable so it persists
// across warm invocations of the serverless function.
let cachedToken = null;
let tokenExpiresAt = 0;

/**
 * getAuthToken() — Authenticate with ShopRite using the Price Plus Card.
 * Returns a bearer token for subsequent API calls.
 * Caches the token and reuses it until expiry to minimize auth calls.
 */
async function getAuthToken() {
  // Reuse cached token if still valid (with 5-minute buffer)
  if (cachedToken && Date.now() < tokenExpiresAt - 300000) {
    return cachedToken;
  }

  // Authenticate with PPC number via ShopRite's session endpoint
  const res = await fetch(`${SR_API_BASE}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "User-Agent": "KitchenApp/1.0",
    },
    body: JSON.stringify({
      ppcNumber: PPC,
      banner: "ShopRite",
    }),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    throw new Error(`ShopRite auth failed (HTTP ${res.status}): ${errText.substring(0, 200)}`);
  }

  const data = await res.json();

  // Extract token from response — ShopRite returns it in the accessToken field
  const token = data.accessToken || data.token || data.access_token;
  if (!token) {
    throw new Error("ShopRite auth response missing token — API may have changed");
  }

  // Cache the token with a 1-hour default expiry if not specified
  cachedToken = token;
  tokenExpiresAt = Date.now() + (data.expiresIn ? data.expiresIn * 1000 : 3600000);

  return token;
}

/**
 * fetchCouponsFromAPI(token, storeId) — Fetch all available digital coupons
 * from ShopRite's coupons endpoint for the given store.
 * Returns an array of normalized coupon objects.
 */
async function fetchCouponsFromAPI(token, storeId) {
  const url = `${SR_API_BASE}/stores/${storeId}/coupons?limit=200`;

  const res = await fetch(url, {
    headers: {
      "Authorization": `Bearer ${token}`,
      "Accept": "application/json",
      "User-Agent": "KitchenApp/1.0",
    },
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    throw new Error(`ShopRite coupons fetch failed (HTTP ${res.status}): ${errText.substring(0, 200)}`);
  }

  const data = await res.json();
  const raw = data.coupons || data.offers || data.items || data.data || [];

  // Normalize each coupon into a consistent shape for the frontend
  return raw.map(c => ({
    id: String(c.id || c.couponId || c.offerId || ""),
    brand: c.brand || c.brandName || "",
    name: c.name || c.title || c.productName || "",
    description: c.description || c.shortDescription || c.details || "",
    value: c.value || c.offerValue || c.savings || c.displayValue || "",
    image: c.imageUrl || c.image || c.thumbnailUrl || null,
    category: c.category || c.categoryName || "Other",
    expiryDate: c.expirationDate || c.endDate || c.expiryDate || null,
    requirementDescription: c.requirementDescription || c.requirements || "",
    clipped: !!c.clipped || !!c.isClipped || !!c.activated,
  }));
}

/**
 * clipCouponToCard(token, couponId) — Clip a single coupon to the PPC.
 * After clipping, the coupon is automatically applied at checkout when
 * the cashier scans the Price Plus Card.
 */
async function clipCouponToCard(token, couponId) {
  const res = await fetch(`${SR_API_BASE}/coupons/${couponId}/clip`, {
    method: "PUT",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
      "Accept": "application/json",
      "User-Agent": "KitchenApp/1.0",
    },
    body: JSON.stringify({ couponId }),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    throw new Error(`Clip failed (HTTP ${res.status}): ${errText.substring(0, 200)}`);
  }

  return true;
}

/**
 * fetchClippedIds(token) — Get the list of coupon IDs already clipped to the PPC.
 * Used to show "✓ Clipped" state in the UI without re-fetching all coupons.
 */
async function fetchClippedIds(token) {
  const res = await fetch(`${SR_API_BASE}/coupons/clipped`, {
    headers: {
      "Authorization": `Bearer ${token}`,
      "Accept": "application/json",
      "User-Agent": "KitchenApp/1.0",
    },
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    throw new Error(`Fetch clipped failed (HTTP ${res.status}): ${errText.substring(0, 200)}`);
  }

  const data = await res.json();
  const items = data.coupons || data.offers || data.items || data.data || [];

  // Return just the IDs — the frontend uses these to mark coupons as clipped
  return items.map(c => String(c.id || c.couponId || c.offerId || ""));
}

// ── Firestore Cache Helpers ─────────────────────────────────────────────────
// Coupons are cached in Firestore at households/{hid}/cache/shopriteCoupons
// to avoid hammering ShopRite's API on every page load. The cache has a 4hr TTL.

/**
 * getCachedCoupons(householdId) — Read cached coupon data from Firestore.
 * Returns { coupons, clippedIds, cachedAt } or null if cache is expired/missing.
 */
async function getCachedCoupons(householdId) {
  try {
    const doc = await adminDb
      .doc(`households/${householdId}/cache/shopriteCoupons`)
      .get();

    if (!doc.exists) return null;

    const data = doc.data();
    // Check if cache is still valid (within TTL)
    if (!data.cachedAt || Date.now() - data.cachedAt > CACHE_TTL_MS) {
      return null; // Expired
    }

    return {
      coupons: data.coupons || [],
      clippedIds: data.clippedIds || [],
      cachedAt: data.cachedAt,
    };
  } catch (err) {
    console.error("Cache read error:", err.message);
    return null;
  }
}

/**
 * saveCouponCache(householdId, coupons, clippedIds) — Write coupon data
 * to Firestore cache with a timestamp for TTL checking.
 */
async function saveCouponCache(householdId, coupons, clippedIds) {
  try {
    await adminDb
      .doc(`households/${householdId}/cache/shopriteCoupons`)
      .set({
        coupons,
        clippedIds,
        cachedAt: Date.now(),
      });
  } catch (err) {
    // Cache write failure is non-fatal — log and continue
    console.error("Cache write error:", err.message);
  }
}

/**
 * updateClippedInCache(householdId, couponId) — After clipping a coupon,
 * update the Firestore cache to add the newly clipped ID. This avoids
 * a full refetch just to update one coupon's clip state.
 */
async function updateClippedInCache(householdId, couponId) {
  try {
    const doc = await adminDb
      .doc(`households/${householdId}/cache/shopriteCoupons`)
      .get();

    if (!doc.exists) return;

    const data = doc.data();
    const clippedIds = data.clippedIds || [];

    // Add the newly clipped ID if not already present
    if (!clippedIds.includes(couponId)) {
      clippedIds.push(couponId);

      // Also update the clipped flag on the cached coupon object
      const coupons = (data.coupons || []).map(c =>
        c.id === couponId ? { ...c, clipped: true } : c
      );

      await adminDb
        .doc(`households/${householdId}/cache/shopriteCoupons`)
        .set({ ...data, coupons, clippedIds });
    }
  } catch (err) {
    console.error("Cache update error:", err.message);
  }
}

// ── Main Handler ────────────────────────────────────────────────────────────

export default async function handler(req, res) {
  // Standard CORS headers for the frontend to call this endpoint
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });

  const { action, householdId, couponId, query, storeId } = req.body || {};

  // Validate required fields
  if (!action) return res.status(400).json({ error: "action is required (list, clip, clipped)" });
  if (!householdId) return res.status(400).json({ error: "householdId is required" });

  // Verify PPC is configured — without it, we can't authenticate with ShopRite
  if (!PPC) {
    return res.status(500).json({ error: "SHOPRITE_PPC not configured — add it in Vercel env vars" });
  }

  try {
    // ── LIST: Fetch available digital coupons ──
    if (action === "list") {
      // Check Firestore cache first — avoids hitting ShopRite API on every load
      const cached = await getCachedCoupons(householdId);
      if (cached && !query) {
        // Serve from cache if valid and no specific search query
        return res.json({
          coupons: cached.coupons,
          clippedIds: cached.clippedIds,
          fromCache: true,
        });
      }

      // Cache miss or expired — fetch fresh data from ShopRite
      const token = await getAuthToken();
      const store = storeId || DEFAULT_STORE_ID;
      const coupons = await fetchCouponsFromAPI(token, store);
      const clippedIds = await fetchClippedIds(token);

      // Mark already-clipped coupons in the coupon list for UI convenience
      const enriched = coupons.map(c => ({
        ...c,
        clipped: clippedIds.includes(c.id),
      }));

      // If there's a search query, filter results server-side
      let filtered = enriched;
      if (query) {
        const q = query.toLowerCase();
        filtered = enriched.filter(c =>
          (c.name || "").toLowerCase().includes(q) ||
          (c.brand || "").toLowerCase().includes(q) ||
          (c.description || "").toLowerCase().includes(q) ||
          (c.category || "").toLowerCase().includes(q)
        );
      }

      // Cache the full unfiltered dataset (filtered results aren't cached)
      if (!query) {
        await saveCouponCache(householdId, enriched, clippedIds);
      }

      return res.json({
        coupons: filtered,
        clippedIds,
        fromCache: false,
      });
    }

    // ── CLIP: Clip a coupon to the Price Plus Card ──
    if (action === "clip") {
      if (!couponId) return res.status(400).json({ error: "couponId is required" });

      const token = await getAuthToken();
      await clipCouponToCard(token, couponId);

      // Update the Firestore cache to reflect the newly clipped coupon
      await updateClippedInCache(householdId, couponId);

      return res.json({ ok: true, couponId });
    }

    // ── CLIPPED: Get list of already-clipped coupon IDs ──
    if (action === "clipped") {
      // Check cache first for clipped IDs
      const cached = await getCachedCoupons(householdId);
      if (cached) {
        return res.json({ clippedIds: cached.clippedIds, fromCache: true });
      }

      // No cache — fetch from API
      const token = await getAuthToken();
      const clippedIds = await fetchClippedIds(token);

      return res.json({ clippedIds, fromCache: false });
    }

    return res.status(400).json({ error: "Unknown action: " + action });
  } catch (err) {
    console.error("ShopRite coupons error:", err);
    return res.status(500).json({
      error: "ShopRite coupons: " + err.message,
    });
  }
}
