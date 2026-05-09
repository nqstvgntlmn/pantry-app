// ── SHOPRITE DIGITAL COUPONS API ─────────────────────────────────────────────
// Serverless function that fetches ShopRite digital coupons and clips them
// to the household's Price Plus Card (PPC).
//
// ── BACKEND: Wakefern Azure "Digital Coupon Center" Proxy ────────────────────
// Uses shop-rite-web-prod.azurewebsites.net — an Azure App Service that hosts
// ShopRite's "Digital Coupon Center" Angular SPA and proxies coupon API calls.
// This endpoint is NOT behind Cloudflare (unlike storefrontgateway.shoprite.com
// and sts.shoprite.com which block server-to-server requests).
//
// ── AUTH FLOW ────────────────────────────────────────────────────────────────
// 1. POST /getToken/auth/login with:
//      - Authorization: Bearer <SERVICE_JWT>  (hardcoded in their Angular app)
//      - x-user-key: base64("<ppc>-Coupon+User-<timestamp_ms>")
//      - Body: { "ppc": "<PPC_NUMBER>" }  (or {} for anonymous browsing)
//    Returns: { "access_token": "<jwt>" }  (HTTP 201, valid ~24 hours)
//
// 2. Use the access_token as Bearer token for all /proxy/* coupon endpoints:
//      - GET  /proxy/shoprite/coupons/available?storeId=592   (list coupons)
//      - GET  /proxy/shoprite/coupons/clipped?storeId=592     (clipped list)
//      - POST /proxy/shoprite/coupons/clip?storeId=592        (clip coupons)
//        Body: [{"couponId":"<id>"}]
//
// ── SERVICE JWT DETAILS ──────────────────────────────────────────────────────
// The service JWT is a pre-shared credential embedded in ShopRite's Angular
// coupon center app. It authenticates our server as a valid coupon client.
// Payload: { fullName: "couponWebUsers_SR", iss: "Digital Coupons v3" }
// Expires: 2026-04-23 (exp: 1776863263). Must be replaced before then.
//
// ── COUPON RESPONSE SHAPE ────────────────────────────────────────────────────
// { size, page, itemCount, pages, coupons: [{ id, brand, category,
//   categoryName, description, shortDescription, displayValue, valueText,
//   value (cents), imageUrl, expirationDate, clipEndDate, status,
//   isAvailableForClip, minPurchase, badges, displayBadge, ... }] }
//
// ── ACTIONS ──────────────────────────────────────────────────────────────────
//   "list"    — Fetch available digital coupons (cached in Firestore, 4hr TTL)
//   "clip"    — Clip a specific coupon to the household PPC
//   "clipped" — Return IDs of already-clipped coupons for the PPC
//
// Env vars (set in Vercel):
//   SHOPRITE_PPC          — Bora's Price Plus Card number (primary)
//   SHOPRITE_PPC_BUSHRA   — Bushra's Price Plus Card number (secondary, dual clip)
//   FIREBASE_PROJECT_ID   — Firebase project ID (family-pantry-c65d6)
//   FIREBASE_CLIENT_EMAIL — Firebase Admin SDK client email
//   FIREBASE_PRIVATE_KEY  — Firebase Admin SDK private key
//
// Request body: { action: "list"|"clip"|"clipped", householdId, couponId?, query?, storeId? }
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

// ── Azure Coupon Center Proxy Configuration ─────────────────────────────────
// This is the Wakefern Azure App Service that hosts ShopRite's coupon center.
// It proxies requests to the underlying coupon API without Cloudflare blocking.
const AZURE_BASE = "https://shop-rite-web-prod.azurewebsites.net";

// Service JWT — hardcoded in ShopRite's Angular coupon center app.
// This authenticates our server as a valid coupon client to the /getToken endpoint.
// Decoded payload: { fullName: "couponWebUsers_SR", iss: "Digital Coupons v3", exp: 1776863263 }
// IMPORTANT: This JWT expires on 2026-04-23. Must be updated before then.
const SERVICE_JWT = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0NzEwODE3NTEwOSIsImh0dHBzOi8vd3d3Mi53YWtlZmVybi5jb20vY2xpcF9zb3VyY2UiOiJTUl9XRUIiLCJodHRwczovL3dha2VmZXJuLmljZS5kcG4uY29tL3Rva2VuIjoiTHNMVXVuclpGcUQyRmhDMExEYkJiaU13X2NkZWF6UEd0dERKX2VTM1B4ckFOUVVTN2lwQTFZQjdIYVQ4Q1lYd3FGT09zckN1LUxCUFpYTzVnX0ZrVVEiLCJpYXQiOjE3NzgyOTk1OTMsImV4cCI6MTc3ODM4NTk5MywiaXNzIjoiRGlnaXRhbCBDb3Vwb25zIHYzIn0.LXDmJFUiYAfn17mtoK6EoACwUz-90D3WziFRozmyurDnvXXKmUtqvCX84Mmj8oP40nflET6TwGzdBWL4J5XG8Q";

// Default store ID — ShopRite store 592. Can be overridden per request.
const DEFAULT_STORE_ID = "592";

// Cache TTL — 4 hours in milliseconds. ShopRite coupons refresh daily,
// so 4 hours keeps data fresh without hammering the API.
const CACHE_TTL_MS = 4 * 60 * 60 * 1000;

// Price Plus Card numbers — stored as Vercel env vars, never sent to client.
// SHOPRITE_PPC = Bora's card, SHOPRITE_PPC_BUSHRA = Bushra's card.
// Both cards get coupons clipped simultaneously (dual PPC clipping).
const PPC = process.env.SHOPRITE_PPC || "";
const PPC_BUSHRA = process.env.SHOPRITE_PPC_BUSHRA || "";

// ── Session management ──────────────────────────────────────────────────────
// The Azure proxy returns access tokens valid for ~24 hours.
// We cache tokens per PPC in a module-level map so each card gets its own
// auth session. This supports dual PPC clipping (Bora + Bushra).
const _tokenCache = {}; // { [ppc]: { token, expiresAt } }

/**
 * buildXUserKey(ppc) — Construct the x-user-key header value.
 * The Azure coupon center expects this header on the /getToken/auth/login call.
 * Format: base64("<ppc>-Coupon+User-<timestamp_ms>")
 * When no PPC is provided, the ppc portion is empty (anonymous browsing).
 */
function buildXUserKey(ppc) {
  const raw = `${ppc || ""}-Coupon+User-${Date.now()}`;
  return Buffer.from(raw).toString("base64");
}

/**
 * getAuthToken(ppc) — Authenticate with the Azure coupon center proxy.
 * POSTs to /getToken/auth/login with the service JWT and x-user-key header.
 * When a PPC is provided, the returned token is linked to that card (needed for clipping).
 * Caches tokens per PPC and reuses them until near expiry to minimize auth calls.
 * @param {string} ppc — Price Plus Card number (empty string for anonymous browsing)
 */
async function getAuthToken(ppc = PPC) {
  // Cache key — use "anon" for anonymous (no PPC) tokens
  const cacheKey = ppc || "anon";

  // Reuse cached token if still valid (with 5-minute buffer)
  const cached = _tokenCache[cacheKey];
  if (cached && Date.now() < cached.expiresAt - 300000) {
    console.log("[ShopRite Auth] Using cached token for", cacheKey, "expires in", Math.round((cached.expiresAt - Date.now()) / 60000), "min");
    return cached.token;
  }

  const loginUrl = `${AZURE_BASE}/getToken/auth/login`;
  console.log("[ShopRite Auth] POST", loginUrl, "| PPC:", ppc ? "set" : "anonymous");

  // Build the request body — include PPC if available for card-linked token
  const body = ppc ? { ppc } : {};

  const res = await fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      // Service JWT — authenticates us as a valid coupon center client
      "Authorization": `Bearer ${SERVICE_JWT}`,
      // x-user-key — required by the Azure proxy, encodes PPC + timestamp
      "x-user-key": buildXUserKey(ppc),
    },
    body: JSON.stringify(body),
  });

  // Read raw text for debug logging before parsing
  const rawText = await res.text();
  console.log("[ShopRite Auth] Response status:", res.status, res.statusText);
  console.log("[ShopRite Auth] Response body (first 300 chars):", rawText.substring(0, 300));

  if (!res.ok) {
    throw new Error(`Azure coupon center auth failed (HTTP ${res.status}): ${rawText.substring(0, 300)}`);
  }

  // Parse the JSON response — expects { access_token: "<jwt>" }
  let data;
  try {
    data = JSON.parse(rawText);
  } catch (e) {
    throw new Error(`Azure coupon center returned non-JSON (HTTP ${res.status}): ${rawText.substring(0, 300)}`);
  }

  // Extract the access token from the response
  const token = data.access_token || data.accessToken || data.token;
  if (!token) {
    console.error("[ShopRite Auth] No token in response. Keys:", Object.keys(data).join(", "));
    throw new Error("Azure coupon center response missing token — keys: " + Object.keys(data).join(", "));
  }

  // Cache the token per PPC — Azure proxy tokens are valid ~24 hours,
  // but we default to 12 hours to be safe if exp isn't parseable
  let expiresAt;
  try {
    // Decode the JWT payload to read the expiration timestamp
    const payload = JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
    expiresAt = payload.exp ? payload.exp * 1000 : Date.now() + 12 * 60 * 60 * 1000;
  } catch {
    // If JWT decode fails, default to 12-hour cache
    expiresAt = Date.now() + 12 * 60 * 60 * 1000;
  }

  _tokenCache[cacheKey] = { token, expiresAt };
  console.log("[ShopRite Auth] Login successful for", cacheKey, "— token cached for", Math.round((expiresAt - Date.now()) / 60000), "min");

  return token;
}

/**
 * fetchCouponsFromAPI(token, storeId) — Fetch all available digital coupons
 * from the Azure coupon center proxy for the given store.
 * Returns an array of normalized coupon objects for the frontend.
 */
async function fetchCouponsFromAPI(token, storeId) {
  const url = `${AZURE_BASE}/proxy/shoprite/coupons/available?storeId=${storeId}`;
  console.log("[ShopRite Coupons] GET", url);

  const res = await fetch(url, {
    headers: {
      "Authorization": `Bearer ${token}`,
      "Accept": "application/json",
      // Optional API version header — matches what the Angular app sends
      "x-api-version": "v4",
    },
  });

  console.log("[ShopRite Coupons] Response status:", res.status, res.statusText);

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    console.error("[ShopRite Coupons] Fetch failed. Body (first 500 chars):", errText.substring(0, 500));
    throw new Error(`Coupon fetch failed (HTTP ${res.status}): ${errText.substring(0, 200)}`);
  }

  const data = await res.json();
  // The Azure proxy returns { coupons: [...], itemCount, size, page, pages }
  const raw = data.coupons || [];
  console.log("[ShopRite Coupons] Received", raw.length, "coupons (itemCount:", data.itemCount, ")");

  // Normalize each coupon into a consistent shape for the frontend.
  // The Azure proxy returns rich coupon objects — we pick the fields we need.
  return raw.map(c => ({
    id: String(c.id || ""),
    brand: c.brand || "",
    name: c.shortDescription || c.description || "",
    description: c.description || "",
    shortDescription: c.shortDescription || "",
    value: c.displayValue || c.valueText || "",
    valueCents: c.value || 0,
    image: c.imageUrl || null,
    category: c.category || "other",
    categoryName: c.categoryName || "Other",
    expiryDate: c.expirationDate || c.clipEndDate || null,
    clipEndDate: c.clipEndDate || null,
    status: c.status || "available",
    isAvailableForClip: c.isAvailableForClip !== false,
    minPurchase: c.minPurchase || null,
    badges: c.displayBadge || c.badges || [],
    clipped: false, // Will be enriched by caller with clipped IDs
  }));
}

/**
 * clipCouponToCard(token, couponId, storeId) — Clip a coupon to the PPC.
 * POSTs to /proxy/shoprite/coupons/clip with an array of coupon IDs.
 * After clipping, the coupon auto-applies at checkout when PPC is scanned.
 * Requires a PPC-linked token (getAuthToken with PPC set).
 */
async function clipCouponToCard(token, couponId, storeId) {
  const url = `${AZURE_BASE}/proxy/shoprite/coupons/clip?storeId=${storeId}`;
  console.log("[ShopRite Clip] POST", url, "| couponId:", couponId);

  // The clip endpoint expects an array of { couponId } objects
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
      "Accept": "application/json",
      "x-api-version": "v4",
    },
    body: JSON.stringify([{ couponId: String(couponId) }]),
  });

  const rawText = await res.text();
  console.log("[ShopRite Clip] Response status:", res.status, "| Body:", rawText.substring(0, 300));

  if (!res.ok) {
    throw new Error(`Clip failed (HTTP ${res.status}): ${rawText.substring(0, 200)}`);
  }

  // Parse the response — the API returns an array of results per coupon
  let results;
  try {
    results = JSON.parse(rawText);
  } catch {
    // If parsing fails but HTTP was OK, assume success
    return true;
  }

  // Check if the clip was successful (array of { result, couponId, message })
  if (Array.isArray(results) && results.length > 0 && results[0].result === false) {
    throw new Error(`Clip rejected: ${results[0].message || results[0].shortMessage || "unknown error"}`);
  }

  return true;
}

/**
 * fetchClippedIds(token, storeId) — Get coupon IDs already clipped to the PPC.
 * Used to show clipped state in the UI. Requires a PPC-linked token.
 */
async function fetchClippedIds(token, storeId) {
  const url = `${AZURE_BASE}/proxy/shoprite/coupons/clipped?storeId=${storeId}`;
  console.log("[ShopRite Clipped] GET", url);

  const res = await fetch(url, {
    headers: {
      "Authorization": `Bearer ${token}`,
      "Accept": "application/json",
      "x-api-version": "v4",
    },
  });

  console.log("[ShopRite Clipped] Response status:", res.status, res.statusText);

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    console.error("[ShopRite Clipped] Failed. Body:", errText.substring(0, 500));
    throw new Error(`Fetch clipped failed (HTTP ${res.status}): ${errText.substring(0, 200)}`);
  }

  const data = await res.json();
  // Same shape as available — { coupons: [...] } but only clipped ones
  const items = data.coupons || [];
  console.log("[ShopRite Clipped] Found", items.length, "clipped coupons");

  // Return just the IDs — the frontend uses these to mark coupons as clipped
  return items.map(c => String(c.id || ""));
}

// ── Firestore Cache Helpers ─────────────────────────────────────────────────
// Coupons are cached in Firestore at households/{hid}/cache/shopriteCoupons
// to avoid hammering the Azure proxy on every page load. The cache has a 4hr TTL.

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

  // PPC is optional for listing coupons but required for clipping
  if (!PPC) {
    console.warn("[ShopRite] SHOPRITE_PPC not set — coupons can be listed but not clipped to a card");
  }
  if (!PPC_BUSHRA) {
    console.warn("[ShopRite] SHOPRITE_PPC_BUSHRA not set — coupons will only clip to primary PPC");
  }

  // Resolve store ID — default to 592 if not provided
  const store = storeId || DEFAULT_STORE_ID;

  try {
    // ── LIST: Fetch available digital coupons ──
    if (action === "list") {
      // Check Firestore cache first — avoids hitting the Azure proxy on every load
      const cached = await getCachedCoupons(householdId);
      if (cached && !query) {
        // Serve from cache if valid and no specific search query
        return res.json({
          coupons: cached.coupons,
          clippedIds: cached.clippedIds,
          fromCache: true,
        });
      }

      // Cache miss or expired — fetch fresh data from ShopRite via Azure proxy
      const token = await getAuthToken();
      const coupons = await fetchCouponsFromAPI(token, store);

      // Fetch clipped IDs only if PPC is configured (otherwise no card to check)
      let clippedIds = [];
      if (PPC) {
        try {
          clippedIds = await fetchClippedIds(token, store);
        } catch (clipErr) {
          // Non-fatal — we can still show coupons without clip state
          console.warn("[ShopRite] Failed to fetch clipped IDs:", clipErr.message);
        }
      }

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
          (c.categoryName || "").toLowerCase().includes(q)
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

    // ── CLIP: Clip a coupon to both Price Plus Cards (dual PPC) ──
    // When both SHOPRITE_PPC and SHOPRITE_PPC_BUSHRA are configured, clip to
    // both cards simultaneously so one tap covers the whole household.
    if (action === "clip") {
      if (!couponId) return res.status(400).json({ error: "couponId is required" });
      if (!PPC) return res.status(400).json({ error: "SHOPRITE_PPC not configured — cannot clip without a Price Plus Card" });

      // Clip to Bora's PPC (primary card)
      const token = await getAuthToken(PPC);
      await clipCouponToCard(token, couponId, store);
      console.log("[ShopRite Clip] Clipped coupon", couponId, "to primary PPC");

      // Clip to Bushra's PPC (second card) if configured
      if (PPC_BUSHRA) {
        try {
          const tokenB = await getAuthToken(PPC_BUSHRA);
          await clipCouponToCard(tokenB, couponId, store);
          console.log("[ShopRite Clip] Clipped coupon", couponId, "to Bushra's PPC");
        } catch (err2) {
          // Non-fatal — primary clip succeeded, log the secondary failure
          console.warn("[ShopRite Clip] Failed to clip to Bushra's PPC:", err2.message);
        }
      }

      // Update the Firestore cache to reflect the newly clipped coupon
      await updateClippedInCache(householdId, couponId);

      return res.json({ ok: true, couponId, dualClipped: !!PPC_BUSHRA });
    }

    // ── CLIPPED: Get list of already-clipped coupon IDs ──
    if (action === "clipped") {
      if (!PPC) return res.status(400).json({ error: "SHOPRITE_PPC not configured — cannot check clipped without a Price Plus Card" });

      // Check cache first for clipped IDs
      const cached = await getCachedCoupons(householdId);
      if (cached) {
        return res.json({ clippedIds: cached.clippedIds, fromCache: true });
      }

      // No cache — fetch from API
      const token = await getAuthToken();
      const clippedIds = await fetchClippedIds(token, store);

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
