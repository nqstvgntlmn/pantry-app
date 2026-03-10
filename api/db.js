// ──────────────────────────────────────────────────────────────────────
// db.js — Serverless API endpoint (Vercel) that proxies CRUD operations
// to the Firestore REST API. The frontend never talks to Firestore
// directly; it POSTs { op, path, data } here and gets plain JSON back.
// ──────────────────────────────────────────────────────────────────────

// Firebase project ID — determines which Firestore database we hit
const PROJECT = "family-pantry-c65d6";

// API key is stored as a Vercel environment variable, never shipped to the client
const API_KEY = process.env.FIREBASE_API_KEY;

// Firestore REST API base URL — all document paths are appended to this
const BASE = `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents`;

/**
 * Convert a plain JS value into Firestore's typed-value format.
 *
 * Firestore REST API doesn't accept raw JSON — every value must be
 * wrapped in a type descriptor like { stringValue: "hello" }.
 * This function handles all JS primitives, arrays, and nested objects
 * recursively so the rest of the code can work with plain objects.
 */
function toFsValue(v) {
  if (v === null || v === undefined) return { nullValue: null };
  if (typeof v === "boolean") return { booleanValue: v };
  // Firestore distinguishes integers from doubles; integers must be strings per the REST API spec
  if (typeof v === "number") return Number.isInteger(v) ? { integerValue: String(v) } : { doubleValue: v };
  if (typeof v === "string") return { stringValue: v };
  // Recursively convert each element in an array
  if (Array.isArray(v)) return { arrayValue: { values: v.map(toFsValue) } };
  // Recursively convert each key-value pair in a nested object
  if (typeof v === "object") return { mapValue: { fields: Object.fromEntries(Object.entries(v).map(([k, val]) => [k, toFsValue(val)])) } };
  // Fallback: coerce unknown types to string
  return { stringValue: String(v) };
}

/**
 * Convert a plain JS object into a Firestore "fields" map.
 *
 * This is the top-level wrapper used when writing a document —
 * each property becomes a typed Firestore field. Undefined values
 * are silently skipped so callers can pass partial updates.
 */
function toFsFields(obj) {
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v !== undefined) out[k] = toFsValue(v);
  }
  return out;
}

/**
 * Convert a Firestore typed-value back into a plain JS value.
 *
 * This is the inverse of toFsValue — it unwraps the type descriptor
 * so the frontend receives clean JSON it can use directly.
 */
function fromFsValue(v) {
  if (!v) return null;
  if (v.stringValue !== undefined) return v.stringValue;
  if (v.booleanValue !== undefined) return v.booleanValue;
  // Firestore returns integers as strings; convert back to a JS number
  if (v.integerValue !== undefined) return Number(v.integerValue);
  if (v.doubleValue !== undefined) return v.doubleValue;
  if (v.nullValue !== undefined) return null;
  // Recursively unwrap arrays (guard against missing .values on empty arrays)
  if (v.arrayValue !== undefined) return (v.arrayValue.values || []).map(fromFsValue);
  // Recursively unwrap nested objects (guard against missing .fields on empty maps)
  if (v.mapValue !== undefined) return Object.fromEntries(Object.entries(v.mapValue.fields || {}).map(([k, val]) => [k, fromFsValue(val)]));
  return null;
}

/**
 * Convert an entire Firestore document into a plain JS object.
 *
 * Extracts the document ID from the full resource path
 * (e.g. "projects/.../documents/items/abc123" -> "abc123")
 * and unwraps every field value so the result is a flat, usable object.
 */
function fromFsDoc(doc) {
  if (!doc || !doc.fields) return null;
  // The document ID is the last segment of the full Firestore resource path
  const out = { id: doc.name.split("/").pop() };
  for (const [k, v] of Object.entries(doc.fields)) {
    out[k] = fromFsValue(v);
  }
  return out;
}

/**
 * Vercel serverless handler — the single entry point for all Firestore
 * operations. The frontend POSTs a JSON body with:
 *   op   — "list" | "get" | "set" | "delete"
 *   path — Firestore collection/document path (e.g. "items" or "items/abc123")
 *   data — (only for "set") plain object of fields to write
 */
export default async function handler(req, res) {
  // --- CORS headers so the browser frontend can call this endpoint ---
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Browsers send a preflight OPTIONS request before the real POST
  if (req.method === "OPTIONS") return res.status(200).end();
  // Only POST is valid — everything else is rejected
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  // Destructure the operation type, Firestore path, and optional write data
  const { op, path, data } = req.body || {};
  if (!op || !path) return res.status(400).json({ error: "op and path required" });

  // --- AUTH: extract Firebase ID token from the Authorization header ---
  // The client sends `Authorization: Bearer <firebase_id_token>`.
  // We forward this to the Firestore REST API so security rules see `request.auth`.
  // If no token is provided, we fall back to API key auth (unauthenticated).
  const authHeader = req.headers.authorization || "";
  const bearerToken = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;

  // Build the auth query/headers for Firestore REST API calls.
  // With a Bearer token: Firestore evaluates security rules with the user's identity.
  // Without: falls back to API key (rules see request.auth == null).
  const fsAuth = bearerToken
    ? { headers: { "Authorization": `Bearer ${bearerToken}` }, query: "" }
    : { headers: {}, query: `?key=${API_KEY}` };

  try {
    // --- LIST: fetch all documents in a collection ---
    if (op === "list") {
      const r = await fetch(`${BASE}/${path}${fsAuth.query}`, {
        headers: fsAuth.headers
      });
      const j = await r.json();
      // Convert each Firestore doc to a plain object; filter out any nulls from bad docs
      return res.status(200).json({ docs: (j.documents || []).map(fromFsDoc).filter(Boolean) });
    }

    // --- GET: fetch a single document by its full path ---
    if (op === "get") {
      const r = await fetch(`${BASE}/${path}${fsAuth.query}`, {
        headers: fsAuth.headers
      });
      // Return null (not an error) when the document doesn't exist — callers expect this
      if (r.status === 404) return res.status(200).json({ doc: null });
      const j = await r.json();
      if (j.error) return res.status(200).json({ doc: null });
      return res.status(200).json({ doc: fromFsDoc(j) });
    }

    // --- SET: create or overwrite a document (PATCH = merge semantics) ---
    if (op === "set") {
      const r = await fetch(`${BASE}/${path}${fsAuth.query}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", ...fsAuth.headers },
        // Convert plain JS data to Firestore's typed field format before sending
        body: JSON.stringify({ fields: toFsFields(data) })
      });
      const j = await r.json();
      if (j.error) return res.status(500).json({ error: j.error.message });
      return res.status(200).json({ ok: true });
    }

    // --- DELETE: remove a document by its full path ---
    if (op === "delete") {
      await fetch(`${BASE}/${path}${fsAuth.query}`, {
        method: "DELETE",
        headers: fsAuth.headers
      });
      return res.status(200).json({ ok: true });
    }

    // If we reach here, the caller passed an unrecognized operation
    return res.status(400).json({ error: "Unknown op: " + op });
  } catch (e) {
    // Catch network errors, JSON parse failures, etc.
    return res.status(500).json({ error: e.message });
  }
}
