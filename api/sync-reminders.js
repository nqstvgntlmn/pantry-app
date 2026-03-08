const FIREBASE_PROJECT = "family-pantry-c65d6";
const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY;
const BASE = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT}/databases/(default)/documents`;

async function fsGet(path) {
  const r = await fetch(`${BASE}/${path}?key=${FIREBASE_API_KEY}`);
  return r.json();
}
async function fsSet(path, fields) {
  const body = { fields: toFsFields(fields) };
  const r = await fetch(`${BASE}/${path}?key=${FIREBASE_API_KEY}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  const json = await r.json();
  if (json.error) console.error("fsSet error:", JSON.stringify(json.error));
  return json;
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
  if (!doc || !doc.fields) return null;
  const out = { id: doc.name.split("/").pop() };
  for (const [k, v] of Object.entries(doc.fields)) {
    out[k] = v.stringValue !== undefined ? v.stringValue : v.booleanValue !== undefined ? v.booleanValue : v.integerValue !== undefined ? v.integerValue : null;
  }
  return out;
}
function extractName(item) {
  if (typeof item === "string") return item.trim();
  if (typeof item !== "object" || item === null) return "";
  const val = item.title || item.name || item.Title || item.Name || item.text || item.Text || item.value || item.Value || Object.values(item).find(v => typeof v === "string") || "";
  return String(val).trim();
}
export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-api-key");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const apiKey = req.headers["x-api-key"];
  if (!apiKey || apiKey !== process.env.REMINDERS_SYNC_KEY) return res.status(401).json({ error: "Unauthorized" });
  const { household, items } = req.body || {};
  if (!household) return res.status(400).json({ error: "household required" });
  console.log("household:", household);
  console.log("items raw:", JSON.stringify(items).substring(0, 200));
  const rawArr = Array.isArray(items) ? items : items ? [items] : [];
  const itemsArr = rawArr.flatMap(i =>
    typeof i === "string" && i.includes("\n") ? i.split("\n").map(s => s.trim()).filter(Boolean) : [i]
  );
  console.log("items after split:", itemsArr.length, JSON.stringify(itemsArr).substring(0,200));
  try {
    const listPath = `households/${household}/shopping`;
    const snap = await fsGet(listPath);
    const existing = (snap.documents || []).map(fromFsDoc).filter(Boolean);
    console.log("existing items:", existing.length);
    const incomingNames = itemsArr.map(extractName).filter(Boolean);
    const existingNames = existing.map(e => (e.name || "").toLowerCase());
    const toAdd = incomingNames.filter(name => !existingNames.includes(name.toLowerCase()));
    const toRemove = existing.filter(e => e.src === "reminders" && !incomingNames.map(n => n.toLowerCase()).includes((e.name || "").toLowerCase()));
    console.log("toAdd:", toAdd.length, JSON.stringify(toAdd).substring(0,200));
    console.log("toRemove:", toRemove.length);
    for (const name of toAdd) {
      const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
      await fsSet(`${listPath}/${id}`, { name, checked: false, src: "reminders", addedAt: new Date().toISOString() });
    }
    for (const item of toRemove) await fsDelete(`${listPath}/${item.id}`);
    return res.status(200).json({ ok: true, added: toAdd.length, removed: toRemove.length, message: `+${toAdd.length} added, -${toRemove.length} removed` });
  } catch (err) {
    console.error("handler error:", err);
    return res.status(500).json({ error: err.message });
  }
}