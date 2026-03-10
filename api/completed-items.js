// ── COMPLETED ITEMS ENDPOINT ─────────────────────────────────────────────────
// Vercel serverless function for bidirectional Reminders sync.
//
// When a user checks off or deletes a shopping list item in Kitchen,
// the frontend writes it to households/{hid}/completed_items/{id}.
// This endpoint lets the iOS Shortcut poll for those completions and
// mark them as done in Apple Reminders.
//
// GET /api/completed-items?household={hid}
//   - Requires x-api-key header (same REMINDERS_SYNC_KEY as sync-reminders.js)
//   - Returns completed items from the last 24 hours
//   - Clears returned items so they aren't sent again on the next poll
//
// This completes the bidirectional sync loop:
//   Apple Reminders → Kitchen:  handled by /api/sync-reminders (POST)
//   Kitchen → Apple Reminders:  handled by this endpoint (GET)

import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

/**
 * getDb() — Lazily initializes the Firebase Admin SDK and returns
 * the Firestore instance. Same pattern as sync-reminders.js.
 * Uses service account credentials from environment variables.
 */
function getDb() {
  if (!getApps().length) {
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKeyRaw = process.env.FIREBASE_PRIVATE_KEY;

    if (!clientEmail || !privateKeyRaw) {
      const missing = [!clientEmail && "FIREBASE_CLIENT_EMAIL", !privateKeyRaw && "FIREBASE_PRIVATE_KEY"].filter(Boolean);
      throw new Error("Server misconfigured: missing " + missing.join(", "));
    }

    const privateKey = privateKeyRaw.replace(/\\n/g, "\n");

    initializeApp({
      credential: cert({
        projectId: "family-pantry-c65d6",
        clientEmail,
        privateKey,
      }),
    });
  }
  return getFirestore();
}

export default async function handler(req, res) {
  // CORS headers — same pattern as sync-reminders.js
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-api-key");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "GET only" });

  // Authenticate with the shared secret (same key used by sync-reminders.js)
  const apiKey = req.headers["x-api-key"];
  if (!apiKey || apiKey !== process.env.REMINDERS_SYNC_KEY) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // The household ID comes as a query parameter
  const household = req.query.household;
  if (!household) return res.status(400).json({ error: "household query param required" });

  try {
    const db = getDb();
    const completedRef = db.collection(`households/${household}/completed_items`);

    // Calculate the 24-hour cutoff — only return recently completed items
    const cutoff = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();

    // Fetch all completed items from the last 24 hours
    const snap = await completedRef
      .where("completedAt", ">=", cutoff)
      .get();

    const items = [];
    const batch = db.batch();

    snap.docs.forEach(doc => {
      const data = doc.data();
      items.push({
        id: doc.id,
        name: data.name,
        completedAt: data.completedAt
      });
      // Delete each item after reading so it won't be returned on the next poll
      batch.delete(doc.ref);
    });

    // Commit all deletes in a single atomic batch
    if (items.length) {
      await batch.commit();
    }

    console.log(`[completed-items] household=${household}, returned=${items.length} items, cleared`);

    return res.status(200).json({
      ok: true,
      items,
      count: items.length
    });
  } catch (err) {
    console.error("completed-items error:", err);
    return res.status(500).json({ error: err.message });
  }
}
