// ── RECIPES SCREEN ───────────────────────────────────────────────────────────
// renderRecs, rH, openER, saveRec, scaleRec, whatCanIMake

import { state } from '../state.js';
import { svr, dlr, svShopItem } from '../db.js';
import { g, fmtR, showNotif, showOv, hideOv, renderStars } from '../helpers.js';

// Tag helpers
function getSelTags(containerId) {
  return [...document.querySelectorAll("#" + containerId + " .tag.sel")].map(t => t.dataset.tag);
}
function setTagsUI(containerId, tags) {
  document.querySelectorAll("#" + containerId + " .tag").forEach(t => {
    t.classList.toggle("sel", (tags || []).includes(t.dataset.tag));
  });
}
export function togTag(el) { el.classList.toggle("sel"); }

// rH(recipe) — renders a single recipe card as HTML string
function rH(r) {
  const st = Array.from({ length: 5 }, (_, i) => `<span class="star${i < r.rating ? " on" : ""}">${i < r.rating ? "★" : "☆"}</span>`).join("");
  const srcLink = r.sourceUrl ? `<a href="${r.sourceUrl}" target="_blank" onclick="event.stopPropagation()" style="font-size:.68rem;color:var(--ac);text-decoration:none;border:1px solid rgba(212,168,83,.3);border-radius:20px;padding:2px 8px;background:transparent">🔗 View original</a>` : r.source ? `<span class="sbdg">${r.source}</span>` : "";
  return `<div class="rcd${r.favorited ? " fav" : ""}" onclick="openER('${r.id}')"><div class="rrow"><div class="rnm">${r.name}</div><div class="rfav" onclick="event.stopPropagation();togFav('${r.id}')">${r.favorited ? "❤️" : "🤍"}</div></div><div class="stars">${st}</div>${r.description ? `<div class="rnot" style="color:var(--tx2);margin-top:6px">${r.description.substring(0, 100)}${r.description.length > 100 ? "…" : ""}</div>` : ""}${r.notes ? `<div class="rnot">${r.notes}</div>` : ""}<div class="rmeta"><span>${r.savedAt}</span>${srcLink}</div></div>`;
}

// setRT(tab) — changes recipe tab filter
export function setRT(t) {
  state.rt = t;
  document.querySelectorAll(".rtab").forEach(x => x.classList.remove("active"));
  const el = g("rtab-" + t);
  if (el) el.classList.add("active");
  renderRecs();
}

// renderRecs() — full re-render of the recipes list
export function renderRecs() {
  let f = [...state.recs];
  if (state.rt === "fav") f = f.filter(r => r.favorited);
  else if (state.rt === "top") f = f.filter(r => r.rating >= 4).sort((a, b) => b.rating - a.rating);
  else if (state.rt === "quick") f = f.filter(r => (r.tags || []).includes("Quick") || (r.tags || []).includes("Under 30 min"));
  else if (state.rt === "kid") f = f.filter(r => (r.tags || []).includes("Kid-Friendly"));
  else f = f.sort((a, b) => new Date(b.savedAt || 0) - new Date(a.savedAt || 0));
  const rsub = g("rsub");
  if (rsub) rsub.textContent = f.length + " recipe" + (f.length !== 1 ? "s" : "");
  const c = g("rbody");
  if (!c) return;
  if (!f.length) {
    c.innerHTML = `<div class="es"><div class="ei">📖</div><p>${state.rt === "fav" ? "No favorites yet!" : state.rt === "top" ? "No 4–5 star recipes yet." : state.rt === "quick" ? "No quick recipes saved yet." : state.rt === "kid" ? "No kid-friendly recipes yet." : "No recipes saved yet.<br/>Mark meals as cooked or tap + Add."}</p></div>`;
    return;
  }
  c.innerHTML = f.map(rH).join("");
}

// togFav(id) — toggles recipe favorite status
export async function togFav(id) {
  const r = state.recs.find(r => r.id === id); if (!r) return;
  await svr({ ...r, favorited: !r.favorited });
  showNotif(r.favorited ? "Removed from favorites" : "Added to favorites! ❤️");
}

// valR() — validates recipe form
export function valR() { g("savrecbtn").disabled = !g("rn").value.trim(); }

// importFromUrl() — fetches and parses a recipe from a URL using Claude web search
export async function importFromUrl() {
  const url = g("rurl").value.trim(); if (!url) return;
  const st = g("rurlstatus"), btn = g("rimportbtn");
  st.style.display = "block"; st.style.color = "var(--mt)"; st.textContent = "⏳ Fetching recipe…"; btn.disabled = true;
  try {
    const prompt = `Please fetch and read this recipe URL: ${url}\n\nExtract the recipe and return ONLY a JSON object with exactly these fields (no extra text, no markdown fences):\n{"name":"recipe name","description":"ingredient list and brief method (2-3 sentences max)","notes":"any useful tips or serving suggestions"}\n\nIf you cannot access the page, return: {"error":"Could not access this page"}`;
    const r = await fetch("/api/proxy", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ model: "claude-haiku-4-5-20251001", max_tokens: 800, tools: [{ type: "web_search_20250305", name: "web_search" }], messages: [{ role: "user", content: prompt }] }) });
    const data = await r.json();
    const text = (data.content || []).filter(b => b.type === "text").map(b => b.text).join("");
    let parsed;
    try { parsed = JSON.parse(text.replace(/```json|```/g, "").trim()); } catch { const m = text.match(/\{[\s\S]*\}/); if (m) parsed = JSON.parse(m[0]); else throw new Error("No JSON found"); }
    if (parsed.error) { st.style.color = "var(--rd)"; st.textContent = "⚠️ " + parsed.error; btn.disabled = false; return; }
    g("rn").value = parsed.name || "";
    g("rd").value = parsed.description || "";
    g("rnotes").value = parsed.notes || "";
    g("rsourceurl").value = url;
    g("savrecbtn").disabled = !parsed.name;
    st.style.color = "var(--gn)"; st.textContent = "✓ Recipe imported! Review and save.";
  } catch { st.style.color = "var(--rd)"; st.textContent = "⚠️ Couldn't import — try copying the recipe text manually."; }
  btn.disabled = false;
}

// saveRec() — saves a new recipe from the Add Recipe form
export async function saveRec() {
  const nm = g("rn").value.trim(); if (!nm) return;
  const desc = g("rd").value.trim();
  const srcUrl = (g("rsourceurl") ? g("rsourceurl").value.trim() : "");
  const tags = getSelTags("rtags");
  await svr({ id: "rec-" + Date.now(), name: nm, rating: state.nr, favorited: false, notes: g("rnotes").value.trim(), description: desc, source: srcUrl ? "Web Import" : "Manual", sourceUrl: srcUrl || null, tags, cookCount: 0, savedAt: new Date().toLocaleDateString() });
  g("rn").value = ""; g("rnotes").value = ""; g("rd").value = ""; g("rsourceurl").value = ""; g("rurl").value = "";
  setTagsUI("rtags", []); state.nr = 0; g("savrecbtn").disabled = true; renderStars("rstars", 0);
  showNotif("Recipe saved! 📖");
  hideOv("arec");
}

// openER(id) — opens the Edit Recipe overlay
export function openER(id) {
  const r = state.recs.find(r => r.id === id); if (!r) return;
  state.eid = id;
  const rt2 = r.rating || 0;
  const st = Array.from({ length: 5 }, (_, i) => `<span class="star${i < rt2 ? " on" : ""}" onclick="setStar(${i + 1},'e')">${i < rt2 ? "★" : "☆"}</span>`).join("");
  const srcLink = r.sourceUrl ? `<div class="frow"><label class="flbl">Original</label><a href="${r.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);word-break:break-all">${r.sourceUrl}</a></div>` : "";
  const tagsHtml = `<div class="frow"><label class="flbl">Tags</label><div class="tags" id="etags">
    <div class="tag${(r.tags || []).includes("Quick") ? " sel" : ""}" data-tag="Quick" onclick="togTag(this)">⚡ Quick</div>
    <div class="tag kid${(r.tags || []).includes("Kid-Friendly") ? " sel" : ""}" data-tag="Kid-Friendly" onclick="togTag(this)">👶 Kid-Friendly</div>
    <div class="tag date${(r.tags || []).includes("Date Night") ? " sel" : ""}" data-tag="Date Night" onclick="togTag(this)">🕯 Date Night</div>
    <div class="tag batch${(r.tags || []).includes("Batch Cook") ? " sel" : ""}" data-tag="Batch Cook" onclick="togTag(this)">📦 Batch Cook</div>
    <div class="tag${(r.tags || []).includes("Healthy") ? " sel" : ""}" data-tag="Healthy" onclick="togTag(this)">🥗 Healthy</div>
    <div class="tag${(r.tags || []).includes("Under 30 min") ? " sel" : ""}" data-tag="Under 30 min" onclick="togTag(this)">⏱ Under 30 min</div>
  </div></div>`;
  g("erecbody").innerHTML = `
    <div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap">
      <button class="btn bp bsm" style="flex:1" onclick="scheduleRecipe('${r.name.replace(/'/g, "\\'")}')">📅 Schedule</button>
      <button class="btn bs bsm" style="flex:1" onclick="addRecIngToShop('${r.id}')">🛒 Shop ingredients</button>
      ${r.cookCount ? `<div style="background:var(--acd);border:1px solid var(--ac);border-radius:9px;padding:7px 14px;font-size:.78rem;color:var(--ac);font-weight:600">🍳 Cooked ${r.cookCount}×</div>` : ""}
    </div>
    <div style="background:var(--card);border:1px solid var(--b2);border-radius:12px;padding:14px;margin-bottom:16px">
      <div style="font-size:.78rem;color:var(--mt);margin-bottom:10px;font-weight:500">⚖️ Scale serving size</div>
      <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
        <button class="btn bs bsm" onclick="scaleRec(0.5)">½×</button><button class="btn bs bsm" onclick="scaleRec(1)">1×</button>
        <button class="btn bs bsm" onclick="scaleRec(2)">2×</button><button class="btn bs bsm" onclick="scaleRec(3)">3×</button>
        <input id="scaleCustom" class="qinp" type="number" min="0.25" max="10" step="0.25" placeholder="×" style="width:58px" oninput="if(this.value)scaleRec(parseFloat(this.value))"/>
      </div>
      <div id="scaleStatus" style="font-size:.74rem;color:var(--mt);margin-top:8px;display:none"></div>
    </div>
    <div class="frow"><label class="flbl">Name</label><input class="fi" id="ern" value="${r.name}"/></div>
    <div class="frow"><label class="flbl">Rating</label><div class="sinp" id="estars">${st}</div></div>
    ${tagsHtml}
    <div class="frow"><label class="flbl">Description / Ingredients</label><textarea class="fta" id="erd" style="min-height:140px">${r.description || ""}</textarea></div>
    <div class="frow"><label class="flbl">Notes</label><input class="fi" id="erno" value="${r.notes || ""}"/></div>
    ${srcLink}
    <div style="display:flex;align-items:center;gap:10px;margin:12px 0"><span style="font-size:.88rem">Favorite</span><div class="tog${r.favorited ? " on" : ""}" id="etog" onclick="this.classList.toggle('on')"></div></div>
    <div class="brow"><button class="btn bd" style="flex:1" onclick="delER()">Delete</button><button class="btn bp" style="flex:2" onclick="updR()">Save</button></div>`;
  showOv("erec");
}

// updR() — saves edits from the Edit Recipe form
export async function updR() {
  const r = state.recs.find(r => r.id === state.eid); if (!r) return;
  const rt2 = [...document.querySelectorAll("#estars .star")].filter(s => s.classList.contains("on")).length;
  const tags = getSelTags("etags");
  await svr({ ...r, name: g("ern").value.trim(), rating: rt2, description: g("erd").value.trim(), notes: g("erno").value.trim(), favorited: g("etog").classList.contains("on"), tags });
  showNotif("Recipe updated!"); hideOv("erec");
}

// delER() — deletes the currently open recipe
export async function delER() {
  if (!confirm("Delete this recipe?")) return;
  await dlr(state.eid);
  showNotif("Deleted"); hideOv("erec");
}

// scaleRec(mult) — scales recipe serving size using Claude
export async function scaleRec(mult) {
  const descEl = g("erd"); if (!descEl) return;
  const orig = descEl.value.trim(); if (!orig) { showNotif("No ingredients to scale"); return; }
  const st = g("scaleStatus");
  st.style.display = "block"; st.style.color = "var(--mt)"; st.textContent = `⏳ Scaling to ${mult}× with Claude…`;
  try {
    const r = await fetch("/api/proxy", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ model: "claude-haiku-4-5-20251001", max_tokens: 600, messages: [{ role: "user", content: `Scale ALL ingredient quantities in this recipe by ${mult}x. Return ONLY the updated recipe text with scaled quantities. Keep the same format. Do not add any explanation.\n\n${orig}` }] }) });
    const data = await r.json(), scaled = (data.content && data.content[0] && data.content[0].text || "");
    if (scaled) { descEl.value = scaled.trim(); st.style.color = "var(--gn)"; st.textContent = `✓ Scaled to ${mult}×`; }
    else { st.style.color = "var(--rd)"; st.textContent = "Couldn't scale — try again"; }
  } catch { st.style.color = "var(--rd)"; st.textContent = "Couldn't reach Claude — check connection"; }
}

// whatCanIMake() — asks Claude what meals can be made with current inventory
export async function whatCanIMake() {
  const rsub = g("rsub");
  if (rsub) rsub.textContent = "Thinking…";
  const is = state.inv.map(i => `${i.name} (${i.qty} ${i.unit})`).join(", ");
  const saved = state.recs.map(r => r.name).join(", ");
  const restr = [state.cfg.nopork ? "no pork" : null, state.cfg.noshellfish ? "no shellfish" : null, state.cfg.vegetarian ? "vegetarian" : null, state.cfg.glutenfree ? "gluten-free" : null, state.cfg.other || null].filter(Boolean).join(", ");
  try {
    const r = await fetch("/api/proxy", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ model: "claude-haiku-4-5-20251001", max_tokens: 600, messages: [{ role: "user", content: `Based on this exact inventory: ${is}\nRestrictions: ${restr || "none"}\nSaved recipes: ${saved || "none"}\nSuggest 5 complete meals I can make RIGHT NOW with no extra shopping. Be specific with names. Format as a numbered list.` }] }) });
    const data = await r.json(), text = (data.content && data.content[0] && data.content[0].text || "");
    const c = g("rbody");
    if (c) c.innerHTML = `<div style="background:var(--card);border:1px solid var(--ac);border-radius:14px;padding:16px;margin-bottom:12px"><div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ac);margin-bottom:10px">🔍 Make right now — no shopping needed</div><div style="font-size:.88rem;line-height:1.8;color:var(--tx2)">${fmtR(text)}</div><button class="btn bs bsm" style="margin-top:12px;width:100%" onclick="setRT('all')">← Back to recipes</button></div>`;
    if (rsub) rsub.textContent = "Based on your inventory";
  } catch { if (rsub) rsub.textContent = "Couldn't reach Claude"; }
}

// addRecIngToShop(id) — extracts ingredients from a recipe and adds to shopping list
export async function addRecIngToShop(id) {
  const r = state.recs.find(x => x.id === id);
  if (!r || !r.description) { showNotif("No ingredients listed"); return; }
  showNotif("Parsing ingredients…");
  try {
    const invNames = state.inv.map(i => i.name.toLowerCase());
    const res = await fetch("/api/proxy", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ model: "claude-haiku-4-5-20251001", max_tokens: 400, messages: [{ role: "user", content: `Extract a list of ingredient names from this recipe description. Return ONLY a JSON array of strings, no markdown, no quantities, just clean ingredient names. Example: ["chicken","garlic","olive oil"]\n\nRecipe: ${r.description}` }] }) });
    const data = await res.json();
    const text = (data.content && data.content[0] && data.content[0].text || "").replace(/```json|```/g, "").trim();
    const ingredients = JSON.parse(text);
    const toAdd = ingredients.filter(ing => !invNames.some(n => n.includes(ing.toLowerCase()) || ing.toLowerCase().includes(n)));
    if (!toAdd.length) { showNotif("All ingredients already in pantry ✓"); return; }
    for (const ing of toAdd) {
      await svShopItem({ id: "shop-" + Date.now() + "-" + Math.random().toString(36).slice(2), name: ing, checked: false, src: "recipe" });
    }
    showNotif(`Added ${toAdd.length} ingredient${toAdd.length !== 1 ? "s" : ""} to shopping list 🛒`);
    hideOv("erec"); window.showScreen("shopping");
  } catch { showNotif("Couldn't parse ingredients"); }
}

// setStar(n, ctx) — sets star rating
export function setStar(n, ctx) {
  state.nr = n;
  if (ctx === "r") renderStars("rstars", n);
  else if (ctx === "c") renderStars("cstars", n);
  else if (ctx === "e") renderStars("estars", n);
}
