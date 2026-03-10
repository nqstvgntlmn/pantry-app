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

    // Batch all writes into a single atomic Firestore operation
    const batch = db.batch();

    for (const name of toAdd) {
      const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
      batch.set(shopRef.doc(id), {
        name,
        checked: false,
        src: "reminders",
        addedAt: new Date().toISOString(),
      });
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
