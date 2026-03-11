// ──────────────────────────────────────────────────────────────────────
// sync-reminders.js — Vercel serverless endpoint called by the iOS
// Shortcuts automation to sync Apple Reminders → shopping list.
//
// Uses the Firebase Admin SDK (service account) to bypass Firestore
// security rules, since this is a server-to-server call with no user
// auth token. Authenticated by a shared secret (REMINDERS_SYNC_KEY).
// ──────────────────────────────────────────────────────────────────────

import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// ── Edamam credentials (same free tier keys used by text-search.js) ──
const EID = "2b6ecac2";
const EK = "8db76605e873aaf2fbdf41256cb24cb4";

/**
 * searchEdamam(query) — Searches the Edamam Food Database by text.
 * Returns an array of normalized product objects (up to 5).
 * Used for auto-enrichment of Reminders items.
 */
async function searchEdamam(query) {
  try {
    const url = `https://api.edamam.com/api/food-database/v2/parser?ingr=${encodeURIComponent(query)}&app_id=${EID}&app_key=${EK}`;
    const r = await fetch(url);
    if (!r.ok) return [];
    const d = await r.json();
    const hints = d.hints || [];
    return hints.slice(0, 3).map(h => {
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
 * No API key needed. Returns up to 3 normalized product objects.
 * Used for auto-enrichment of Reminders items.
 */
async function searchOpenFoodFacts(query) {
  try {
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(query)}&search_simple=1&action=process&json=1&page_size=3&fields=product_name,brands,categories_tags,image_front_small_url,image_front_url,nutriments,generic_name`;
    const r = await fetch(url, {
      headers: { "User-Agent": "KitchenApp/1.0" }
    });
    if (!r.ok) return [];
    const d = await r.json();
    const products = d.products || [];
    return products.slice(0, 3).map(p => {
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
 * enrichItem(name) — Searches Edamam and Open Food Facts in parallel
 * for the given item name. Auto-picks the best match: prefers results
 * with an image, then Edamam over OFF. Returns enrichment fields to
 * merge into the Firestore doc, or an empty object if no good match.
 */
async function enrichItem(name) {
  try {
    const [edamamResults, offResults] = await Promise.all([
      searchEdamam(name),
      searchOpenFoodFacts(name),
    ]);

    // Merge: Edamam first (better nutrition), then OFF
    const all = [...edamamResults, ...offResults];
    if (!all.length) return {};

    // Prefer the first result that has an image; fall back to first overall
    const best = all.find(r => r.image) || all[0];

    // Only enrich if the result name reasonably matches the query
    // (simple check: the query words appear somewhere in the result name)
    const queryWords = name.toLowerCase().split(/\s+/);
    const resultName = best.name.toLowerCase();
    const matchCount = queryWords.filter(w => resultName.includes(w)).length;

    // Require at least half the query words to match for confidence
    if (matchCount < Math.ceil(queryWords.length / 2)) return {};

    return {
      brand: best.brand || "",
      category: best.category || "",
      image: best.image || null,
      source: best.source || "",
      nutrition: best.nutrition || null,
      enrichedName: best.name || "",
    };
  } catch (err) {
    console.warn("enrichItem failed for", name, err.message);
    return {};
  }
}

/**
 * getDb() — Lazily initializes the Firebase Admin SDK and returns
 * the Firestore instance. Uses the service account credentials from
 * environment variables (FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY).
 * The Admin SDK bypasses security rules entirely, which is exactly
 * what we need for this server-side automation endpoint.
 */
function getDb() {
  if (!getApps().length) {
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKeyRaw = process.env.FIREBASE_PRIVATE_KEY;

    // Log whether env vars are present (values redacted for security)
    console.log("FIREBASE_CLIENT_EMAIL set:", !!clientEmail, clientEmail ? `(${clientEmail.length} chars)` : "(missing)");
    console.log("FIREBASE_PRIVATE_KEY set:", !!privateKeyRaw, privateKeyRaw ? `(${privateKeyRaw.length} chars)` : "(missing)");

    if (!clientEmail || !privateKeyRaw) {
      const missing = [!clientEmail && "FIREBASE_CLIENT_EMAIL", !privateKeyRaw && "FIREBASE_PRIVATE_KEY"].filter(Boolean);
      console.error("Missing required env vars:", missing.join(", "));
      throw new Error("Server misconfigured: missing " + missing.join(", "));
    }

    const privateKey = privateKeyRaw.replace(/\\n/g, "\n");

    try {
      initializeApp({
        credential: cert({
          projectId: "family-pantry-c65d6",
          clientEmail,
          privateKey,
        }),
      });
    } catch (initErr) {
      console.error("Firebase Admin initializeApp failed:", initErr);
      throw initErr;
    }
  }
  return getFirestore();
}

/**
 * extractName(item) — Pulls a plain string name from whatever shape
 * the iOS Shortcuts automation sends. Handles raw strings, Reminder
 * objects with various key names, and nested structures.
 */
function extractName(item) {
  if (typeof item === "string") return item.trim();
  if (typeof item !== "object" || item === null) return "";
  const val = item.title || item.name || item.Title || item.Name
           || item.text || item.Text || item.value || item.Value
           || Object.values(item).find(v => typeof v === "string") || "";
  return String(val).trim();
}

export default async function handler(req, res) {
  // --- CORS headers for preflight requests ---
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-api-key");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  // --- Shared secret check — the iOS Shortcut sends this header ---
  const apiKey = req.headers["x-api-key"];
  if (!apiKey || apiKey !== process.env.REMINDERS_SYNC_KEY) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { household, items } = req.body || {};
  if (!household) return res.status(400).json({ error: "household required" });

  // Log what we received for debugging
  console.log("household:", household);
  console.log("items type:", typeof items, Array.isArray(items) ? "array" : "not array");
  console.log("items sample:", JSON.stringify(items && items[0]));
  console.log("items count:", items ? (Array.isArray(items) ? items.length : "not array") : "null");

  /**
   * Flatten nested arrays and newline-delimited strings into a flat
   * array of values. Shortcuts sometimes sends items in unexpected shapes.
   */
  const flatten = (x) => {
    if (Array.isArray(x)) return x.flatMap(flatten);
    if (typeof x === "string") return x.split("\n").map(s => s.trim()).filter(Boolean);
    return [x];
  };
  const itemsArr = flatten(items);

  try {
    let db;
    try {
      db = getDb();
    } catch (dbErr) {
      console.error("getDb() failed:", dbErr.message, dbErr.stack);
      return res.status(500).json({ error: "Firebase init failed: " + dbErr.message });
    }
    const shopRef = db.collection(`households/${household}/shopping`);

    // Fetch all existing shopping items in one read
    const snap = await shopRef.get();
    const existing = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    console.log("existing items:", existing.length);

    const incomingNames = itemsArr.map(extractName).filter(Boolean);
    console.log("incoming names:", JSON.stringify(incomingNames));

    const existingNames = existing.map(e => (e.name || "").toLowerCase());

    // Items in Reminders that aren't already on the shopping list
    const toAdd = incomingNames.filter(name => !existingNames.includes(name.toLowerCase()));

    // Items previously synced from Reminders (src === "reminders") that are
    // no longer in the Reminders list — remove them to keep lists in sync
    const toRemove = existing.filter(
      e => e.src === "reminders" &&
        !incomingNames.map(n => n.toLowerCase()).includes((e.name || "").toLowerCase())
    );

    console.log("toAdd:", toAdd.length, JSON.stringify(toAdd));
    console.log("toRemove:", toRemove.length);

    // ── Auto-enrich new items via product database search ──
    // Run all enrichment lookups in parallel. Each item is searched against
    // Edamam and Open Food Facts; the best match (if any) provides image,
    // brand, category, and nutrition data. If no match, item saves as plain text.
    const enrichments = await Promise.all(
      toAdd.map(name => enrichItem(name))
    );
    console.log("enrichment results:", enrichments.map((e, i) => `${toAdd[i]}: ${e.image ? "enriched" : "plain"}`));

    // Batch all writes into a single atomic Firestore operation
    const batch = db.batch();

    for (let i = 0; i < toAdd.length; i++) {
      const name = toAdd[i];
      const enrich = enrichments[i];
      const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

      // Build the item doc — start with base fields, then merge any
      // enrichment data found from the product databases
      const doc = {
        name,
        checked: false,
        src: "reminders",
        addedAt: new Date().toISOString(),
      };

      // Only add enrichment fields when a good match was found
      if (enrich.image || enrich.brand) {
        if (enrich.brand) doc.brand = enrich.brand;
        if (enrich.category) doc.category = enrich.category;
        if (enrich.image) doc.image = enrich.image;
        if (enrich.source) doc.source_db = enrich.source;
        if (enrich.nutrition) doc.nutrition = enrich.nutrition;
        if (enrich.enrichedName) doc.enrichedName = enrich.enrichedName;
      }

      batch.set(shopRef.doc(id), doc);
    }

    for (const item of toRemove) {
      batch.delete(shopRef.doc(item.id));
    }

    await batch.commit();

    return res.status(200).json({
      ok: true,
      added: toAdd.length,
      removed: toRemove.length,
      incoming: incomingNames,
      message: `+${toAdd.length} added, -${toRemove.length} removed`,
    });
  } catch (err) {
    console.error("handler error:", err);
    return res.status(500).json({ error: err.message });
  }
}
