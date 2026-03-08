// Uses Firestore REST API — no firebase-admin needed, matches existing setup
const FIREBASE_PROJECT = "family-pantry-c65d6";
const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY; // add to Vercel env vars

const BASE = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT}/databases/(default)/documents`;

async function fsGet(path) {
  const r = await fetch(`${BASE}/${path}?key=${FIREBASE_API_KEY}`);
  return r.json();
}

async function fsSet(path, fields) {
  const body = { fields: toFsFields(fields) };
  const r = await fetch(`${BASE}/${path}?key=${FIREBASE_API_KEY}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return r.json();
}

async function fsDelete(path) {
  await fetch(`${BASE}/${path}?key=${FIREBASE_API_KEY}`, { method: "DELETE" });
}

function toFsFields(obj) {
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    if (typeof v === "string") out[k] = { stringValue: v };
    else if (typeof v === "boolean") out[k] = { booleanValue: v };
    else if (typeof v === "number") out[k] = { integerValue: String(v) };
  }
  return out;
}

function fromFsDoc(doc) {
  if (!doc.fields) return null;
  const out = { id: doc.name.split("/").pop() };
  for (const [k, v] of Object.entries(doc.fields)) {
    out[k] = v.stringValue ?? v.booleanValue ?? v.integerValue ?? null;
  }
  return out;
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-api-key");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  // Simple shared secret check
  const apiKey = req.headers["x-api-key"];
  if (!apiKey || apiKey !== process.env.REMINDERS_SYNC_KEY) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { household, items } = req.body || {};
  if (!household) return res.status(400).json({ error: "household required" });
  if (!Array.isArray(items)) return res.status(400).json({ error: "items must be array" });

  try {
    // Get existing shopping list from Firestore
    const listPath = `households/${household}/shopping`;
    const snap = await fsGet(listPath);
    const existing = (snap.documents || []).map(fromFsDoc).filter(Boolean);

    // Normalize incoming Reminders items to plain strings
    const incomingNames = items
      .map(i => (typeof i === "string" ? i : i.title || i.name || "").trim())
      .filter(Boolean);

    const existingNames = existing.map(e => (e.name || "").toLowerCase());

    // Add items in Reminders but not in shopping list
    const toAdd = incomingNames.filter(
      name => !existingNames.includes(name.toLowerCase())
    );

    // Remove items that came from Reminders but are no longer in incoming list
    const toRemove = existing.filter(
      e => e.src === "reminders" &&
        !incomingNames.map(n => n.toLowerCase()).includes((e.name || "").toLowerCase())
    );

    for (const name of toAdd) {
      const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
      await fsSet(`${listPath}/${id}`, {
        name,
        checked: false,
        src: "reminders",
        addedAt: new Date().toISOString(),
      });
    }

    for (const item of toRemove) {
      await fsDelete(`${listPath}/${item.id}`);
    }

    return res.status(200).json({
      ok: true,
      added: toAdd.length,
      removed: toRemove.length,
      message: `+${toAdd.length} added, -${toRemove.length} removed`,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
}
