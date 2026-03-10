// ── PUBLIC RECIPE SHARE PAGE ──────────────────────────────────────────────────
// Serverless endpoint that renders a read-only public recipe page at
// /recipe/{recipeId}. Viewable by anyone without authentication.
// Fetches the recipe directly from Firestore REST API and returns
// a self-contained HTML page with the app's visual style.

const PROJECT = "family-pantry-c65d6";
const API_KEY = process.env.FIREBASE_API_KEY;
const BASE = `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents`;

/**
 * fromFsValue — unwraps a single Firestore typed-value into a plain JS value.
 * Handles strings, booleans, integers, doubles, nulls, arrays, and maps.
 */
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

/**
 * fromFsDoc — converts a full Firestore document into a plain JS object.
 * Extracts the document ID from the resource path and unwraps all fields.
 */
function fromFsDoc(doc) {
  if (!doc || !doc.fields) return null;
  const out = { id: doc.name.split("/").pop() };
  for (const [k, v] of Object.entries(doc.fields)) {
    out[k] = fromFsValue(v);
  }
  return out;
}

/**
 * esc — escapes HTML special characters to prevent XSS in the rendered page.
 */
function esc(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/**
 * handler — Vercel serverless function that serves the public recipe page.
 * Reads the recipe ID from the URL path, fetches from Firestore, and
 * returns a styled HTML page. Shows a 404 page if the recipe doesn't exist.
 */
export default async function handler(req, res) {
  const { id } = req.query;

  try {
    // Fetch the public recipe document from Firestore using API key auth (no user token needed)
    const r = await fetch(`${BASE}/public_recipes/${id}?key=${API_KEY}`);
    if (r.status === 404) return res.status(404).send(notFoundPage());
    const j = await r.json();
    if (j.error) return res.status(404).send(notFoundPage());

    const recipe = fromFsDoc(j);
    if (!recipe) return res.status(404).send(notFoundPage());

    // Fetch comments for the recipe
    let comments = [];
    try {
      const cr = await fetch(`${BASE}/public_recipes/${id}/comments?key=${API_KEY}`);
      const cj = await cr.json();
      comments = (cj.documents || []).map(fromFsDoc).filter(Boolean);
      comments.sort((a, b) => new Date(a.createdAt || 0) - new Date(b.createdAt || 0));
    } catch { /* comments are optional, skip on error */ }

    // Build and return the recipe HTML page
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
    return res.status(200).send(recipePage(recipe, comments));
  } catch (e) {
    console.error("Public recipe page error:", e);
    return res.status(500).send(notFoundPage("Something went wrong. Please try again."));
  }
}

/**
 * recipePage — builds the full HTML page for a public recipe.
 * Styled to match the app's dark/gold theme with DM Sans font.
 */
function recipePage(r, comments) {
  const tags = (r.tags || []).map(t => `<span class="tag">${esc(t)}</span>`).join("");
  const date = r.createdAt ? new Date(r.createdAt).toLocaleDateString() : "";

  const commentsHtml = comments.length
    ? comments.map(c => `<div class="comment">
        <div class="comment-hdr">
          <strong>${esc(c.authorName || "Anonymous")}</strong>
          <span class="meta">${c.createdAt ? new Date(c.createdAt).toLocaleDateString() : ""}</span>
        </div>
        <div class="comment-body">${esc(c.text || "")}</div>
      </div>`).join("")
    : '<p class="meta">No comments yet.</p>';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${esc(r.title)} — Kitchen Community</title>
  <meta name="description" content="${esc((r.ingredients || "").substring(0, 150))}"/>
  <meta property="og:title" content="${esc(r.title)} — Kitchen Community"/>
  <meta property="og:description" content="Shared by ${esc(r.authorName || "Anonymous")}"/>
  <meta property="og:type" content="article"/>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:wght@300;400&display=swap" rel="stylesheet"/>
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    body{background:#0c0c0a;color:#f0ead8;font-family:"DM Sans",sans-serif;padding:0;min-height:100vh}
    .wrap{max-width:600px;margin:0 auto;padding:20px 16px 40px}
    .brand{font-size:.72rem;text-transform:uppercase;letter-spacing:.12em;color:#6e6858;margin-bottom:24px;text-align:center}
    .brand a{color:#d4a853;text-decoration:none}
    h1{font-family:"Fraunces",serif;font-size:1.8rem;font-weight:300;line-height:1.3;margin-bottom:8px}
    .cuisine{font-size:.82rem;color:#d4a853;font-weight:600;margin-bottom:8px}
    .meta{font-size:.76rem;color:#6e6858}
    .likes{display:inline-flex;align-items:center;gap:4px;font-size:.82rem;color:#d96b6b;margin-top:8px}
    .tags{display:flex;gap:6px;flex-wrap:wrap;margin-top:12px}
    .tag{font-size:.68rem;padding:3px 10px;border-radius:20px;background:rgba(212,168,83,.13);color:#d4a853;border:1px solid rgba(212,168,83,.25);font-weight:600}
    .section{margin-top:24px}
    .section-ttl{font-size:.7rem;text-transform:uppercase;letter-spacing:.1em;color:#6e6858;font-weight:700;margin-bottom:10px}
    .section-body{font-size:.9rem;line-height:1.8;color:#b0a890;white-space:pre-wrap}
    .comment{padding:12px 0;border-bottom:1px solid #2e2e2a}
    .comment:last-child{border-bottom:none}
    .comment-hdr{display:flex;justify-content:space-between;align-items:center;margin-bottom:4px}
    .comment-body{font-size:.84rem;color:#b0a890;line-height:1.5}
    .cta{display:block;text-align:center;margin-top:32px;padding:14px 24px;background:#d4a853;color:#0c0c0a;border-radius:12px;font-weight:700;font-size:.9rem;text-decoration:none}
    .cta:hover{opacity:.9}
  </style>
</head>
<body>
  <div class="wrap">
    <div class="brand">Kitchen Community · <a href="https://pantry-app-zeta-six.vercel.app">Open App</a></div>
    <h1>${esc(r.title)}</h1>
    ${r.cuisine ? `<div class="cuisine">${esc(r.cuisine)}</div>` : ""}
    <div class="meta">by ${esc(r.authorName || "Anonymous")} · ${date}</div>
    <div class="likes">❤️ ${r.likes || 0} like${(r.likes || 0) !== 1 ? "s" : ""}</div>
    ${tags ? `<div class="tags">${tags}</div>` : ""}

    ${r.ingredients ? `<div class="section">
      <div class="section-ttl">Ingredients</div>
      <div class="section-body">${esc(r.ingredients)}</div>
    </div>` : ""}

    ${r.steps ? `<div class="section">
      <div class="section-ttl">Steps</div>
      <div class="section-body">${esc(r.steps)}</div>
    </div>` : ""}

    <div class="section">
      <div class="section-ttl">Comments (${comments.length})</div>
      ${commentsHtml}
    </div>

    <a class="cta" href="https://pantry-app-zeta-six.vercel.app">Open in Kitchen App to save, like & comment</a>
  </div>
</body>
</html>`;
}

/**
 * notFoundPage — returns a styled 404 page when a recipe doesn't exist.
 */
function notFoundPage(msg) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Recipe Not Found — Kitchen Community</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:wght@300;400&display=swap" rel="stylesheet"/>
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    body{background:#0c0c0a;color:#f0ead8;font-family:"DM Sans",sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;text-align:center;padding:20px}
    h1{font-family:"Fraunces",serif;font-size:1.6rem;font-weight:300;margin-bottom:12px}
    p{color:#6e6858;font-size:.9rem;margin-bottom:24px}
    a{color:#d4a853;text-decoration:none;font-weight:600}
  </style>
</head>
<body>
  <div>
    <h1>${msg || "Recipe not found"}</h1>
    <p>This recipe may have been removed or the link is incorrect.</p>
    <a href="https://pantry-app-zeta-six.vercel.app">← Back to Kitchen App</a>
  </div>
</body>
</html>`;
}
