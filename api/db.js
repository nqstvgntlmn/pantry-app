const PROJECT = "family-pantry-c65d6";
const API_KEY = process.env.FIREBASE_API_KEY;
const BASE = `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents`;

function toFsValue(v) {
  if (v === null || v === undefined) return { nullValue: null };
  if (typeof v === "boolean") return { booleanValue: v };
  if (typeof v === "number") return Number.isInteger(v) ? { integerValue: String(v) } : { doubleValue: v };
  if (typeof v === "string") return { stringValue: v };
  if (Array.isArray(v)) return { arrayValue: { values: v.map(toFsValue) } };
  if (typeof v === "object") return { mapValue: { fields: Object.fromEntries(Object.entries(v).map(([k, val]) => [k, toFsValue(val)])) } };
  return { stringValue: String(v) };
}

function toFsFields(obj) {
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v !== undefined) out[k] = toFsValue(v);
  }
  return out;
}

function fromFsValue(v) {
  if (!v) return null;
  if (v.stringValue !== undefined) return v.stringValue;
  if (v.booleanValue !== undefined) return v.booleanValue;
  if (v.integerValue !== undefined) return Number(v.integerValue);
  if (v.doubleValue !== undefined) return v.doubleValue;
  if (v.nullValue !== undefined) return null;
  if (v.arrayValue !== undefined) return (v.arrayValue.values || []).map(fromFsValue);
  if (v.mapValue !== undefined) return Object.fromEntries(Object.entries(v.mapValue.fields || {}).map(([k, val]) => [k, fromFsValue(val)]));
  return null;
}

function fromFsDoc(doc) {
  if (!doc || !doc.fields) return null;
  const out = { id: doc.name.split("/").pop() };
  for (const [k, v] of Object.entries(doc.fields)) {
    out[k] = fromFsValue(v);
  }
  return out;
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { op, path, data } = req.body || {};
  if (!op || !path) return res.status(400).json({ error: "op and path required" });

  try {
    if (op === "list") {
      const r = await fetch(`${BASE}/${path}?key=${API_KEY}`);
      const j = await r.json();
      return res.status(200).json({ docs: (j.documents || []).map(fromFsDoc).filter(Boolean) });
    }
    if (op === "set") {
      const r = await fetch(`${BASE}/${path}?key=${API_KEY}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fields: toFsFields(data) })
      });
      const j = await r.json();
      if (j.error) return res.status(500).json({ error: j.error.message });
      return res.status(200).json({ ok: true });
    }
    if (op === "delete") {
      await fetch(`${BASE}/${path}?key=${API_KEY}`, { method: "DELETE" });
      return res.status(200).json({ ok: true });
    }
    return res.status(400).json({ error: "Unknown op: " + op });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
