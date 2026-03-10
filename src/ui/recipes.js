// ── RECIPES SCREEN ───────────────────────────────────────────────────────────
// This module handles the entire Recipes tab: listing, filtering, creating,
// editing, deleting, favoriting, scaling, and AI-powered features (import from
// URL, "What can I make?", ingredient extraction). Recipes are stored in
// Firestore via the db module and cached in the global state object.
//
// Exported functions are called from HTML onclick handlers and other UI modules.
// Abbreviation key used in this file:
//   r / recs  = recipe(s)         rt  = recipe tab filter
//   rH        = recipe HTML       sv  = save
//   dl        = delete            ov  = overlay
//   g(id)     = getElementById    nr  = new rating (star count)
//   eid       = edit-target ID    cfg = user config/preferences

import { state } from '../state.js';
import { svr, dlr, svShopItem } from '../db.js';       // svr = save recipe, dlr = delete recipe, svShopItem = save shopping item
import { g, fmtR, showNotif, showOv, hideOv, renderStars } from '../helpers.js';
// g = getElementById shorthand, fmtR = format AI response text to HTML,
// showNotif = toast notification, showOv/hideOv = show/hide overlay panels,
// renderStars = re-render a star-rating widget

// ── TAG HELPERS ──────────────────────────────────────────────────────────────

/**
 * Reads which tags are currently selected (highlighted) in a tag container.
 * Returns an array of tag name strings, e.g. ["Quick", "Healthy"].
 */
function getSelTags(containerId) {
  return [...document.querySelectorAll("#" + containerId + " .tag.sel")].map(t => t.dataset.tag);
}

/**
 * Sets the visual selected/unselected state of tag elements inside a container
 * to match the provided `tags` array. Used when opening a form that should
 * reflect previously saved tags.
 */
function setTagsUI(containerId, tags) {
  document.querySelectorAll("#" + containerId + " .tag").forEach(t => {
    t.classList.toggle("sel", (tags || []).includes(t.dataset.tag));
  });
}

/**
 * Toggles a single tag element's selected state. Called via onclick on each
 * tag pill in both the Add and Edit recipe overlays.
 */
export function togTag(el) { el.classList.toggle("sel"); }

// ── SINGLE RECIPE CARD HTML ─────────────────────────────────────────────────

/**
 * Builds the HTML string for one recipe card in the list view.
 * Each card shows: name, favorite heart, star rating, truncated description,
 * notes, date saved, and an optional source link. Clicking the card opens
 * the edit/detail overlay (openER).
 */
function rH(r) {
  // Build 5 star spans — filled stars up to the rating, hollow after
  const st = Array.from({ length: 5 }, (_, i) => `<span class="star${i < r.rating ? " on" : ""}">${i < r.rating ? "★" : "☆"}</span>`).join("");

  // Source link: if we have a URL show a clickable pill link; if just a source
  // label (e.g. "Manual"), show it as a badge; otherwise nothing
  const srcLink = r.sourceUrl ? `<a href="${r.sourceUrl}" target="_blank" onclick="event.stopPropagation()" style="font-size:.68rem;color:var(--ac);text-decoration:none;border:1px solid rgba(212,168,83,.3);border-radius:20px;padding:2px 8px;background:transparent">🔗 View original</a>` : r.source ? `<span class="sbdg">${r.source}</span>` : "";

  // Assemble the full card — stopPropagation on the heart so tapping it
  // doesn't also open the edit overlay
  return `<div class="rcd${r.favorited ? " fav" : ""}" onclick="openER('${r.id}')"><div class="rrow"><div class="rnm">${r.name}</div><div class="rfav" onclick="event.stopPropagation();togFav('${r.id}')">${r.favorited ? "❤️" : "🤍"}</div></div><div class="stars">${st}</div>${r.description ? `<div class="rnot" style="color:var(--tx2);margin-top:6px">${r.description.substring(0, 100)}${r.description.length > 100 ? "…" : ""}</div>` : ""}${r.notes ? `<div class="rnot">${r.notes}</div>` : ""}<div class="rmeta"><span>${r.savedAt}</span>${srcLink}</div></div>`;
}

// ── TAB SWITCHING ────────────────────────────────────────────────────────────

/**
 * Switches the active recipe tab filter (all / fav / top / quick / kid).
 * Updates the visual active-tab highlight and re-renders the recipe list.
 */
export function setRT(t) {
  state.rt = t; // persist current tab in global state
  // Remove "active" class from all tabs, then add it to the selected one
  document.querySelectorAll(".rtab").forEach(x => x.classList.remove("active"));
  const el = g("rtab-" + t);
  if (el) el.classList.add("active");
  renderRecs();
}

// ── RECIPE LIST RENDERING ────────────────────────────────────────────────────

/**
 * Full re-render of the recipe list based on the current tab filter.
 * Filters/sorts the master recipe array from state, updates the subtitle
 * count, and writes all matching recipe cards into the DOM. Shows an
 * appropriate empty-state message when there are no matches.
 */
export function renderRecs() {
  let f = [...state.recs]; // shallow copy so we can filter/sort without mutating state

  // Apply the currently selected tab filter
  if (state.rt === "fav") f = f.filter(r => r.favorited);
  else if (state.rt === "top") f = f.filter(r => r.rating >= 4).sort((a, b) => b.rating - a.rating);
  else if (state.rt === "quick") f = f.filter(r => (r.tags || []).includes("Quick") || (r.tags || []).includes("Under 30 min"));
  else if (state.rt === "kid") f = f.filter(r => (r.tags || []).includes("Kid-Friendly"));
  else f = f.sort((a, b) => new Date(b.savedAt || 0) - new Date(a.savedAt || 0)); // "all" tab — newest first

  // Update the subtitle with a count like "12 recipes"
  const rsub = g("rsub");
  if (rsub) rsub.textContent = f.length + " recipe" + (f.length !== 1 ? "s" : "");

  const c = g("rbody"); // container div that holds recipe cards
  if (!c) return;

  // Show a friendly empty state if no recipes match the filter
  if (!f.length) {
    c.innerHTML = `<div class="es"><div class="ei">📖</div><p>${state.rt === "fav" ? "No favorites yet!" : state.rt === "top" ? "No 4–5 star recipes yet." : state.rt === "quick" ? "No quick recipes saved yet." : state.rt === "kid" ? "No kid-friendly recipes yet." : "No recipes saved yet.<br/>Mark meals as cooked or tap + Add."}</p></div>`;
    return;
  }

  // Render all matching recipes as card HTML
  c.innerHTML = f.map(rH).join("");
}

// ── FAVORITE TOGGLE ──────────────────────────────────────────────────────────

/**
 * Toggles the favorited flag on a recipe and persists it to Firestore.
 * The svr (save recipe) call triggers a Firestore onSnapshot listener
 * that automatically re-renders the list, so we don't need to call
 * renderRecs() manually here.
 */
export async function togFav(id) {
  const r = state.recs.find(r => r.id === id); if (!r) return;
  await svr({ ...r, favorited: !r.favorited });
  // Notification text is based on the OLD value (before toggle) because
  // svr hasn't updated state.recs yet when this line runs
  showNotif(r.favorited ? "Removed from favorites" : "Added to favorites! ❤️");
}

// ── ADD RECIPE FORM VALIDATION ───────────────────────────────────────────────

/**
 * Enables/disables the Save button on the Add Recipe form based on whether
 * the recipe name field has a value. Called on every keystroke in the name input.
 */
export function valR() { g("savrecbtn").disabled = !g("rn").value.trim(); }

// ── URL IMPORT (AI-POWERED) ─────────────────────────────────────────────────

/**
 * Fetches a recipe from a URL using the Claude API with web search tool.
 * Sends the URL to Claude Haiku, which reads the page and extracts structured
 * recipe data (name, description, notes). On success, populates the Add Recipe
 * form fields so the user can review before saving.
 */
export async function importFromUrl() {
  const url = g("rurl").value.trim(); if (!url) return;

  const st = g("rurlstatus"), btn = g("rimportbtn");
  // Show a loading indicator and disable the button to prevent double-submits
  st.style.display = "block"; st.style.color = "var(--mt)"; st.textContent = "⏳ Fetching recipe…"; btn.disabled = true;

  try {
    // Prompt asks Claude to visit the URL (via web_search tool) and return
    // structured JSON with recipe name, description, and notes
    const prompt = `Please fetch and read this recipe URL: ${url}\n\nExtract the recipe and return ONLY a JSON object with exactly these fields (no extra text, no markdown fences):\n{"name":"recipe name","description":"ingredient list and brief method (2-3 sentences max)","notes":"any useful tips or serving suggestions"}\n\nIf you cannot access the page, return: {"error":"Could not access this page"}`;

    // Call our backend proxy which forwards to the Anthropic API
    const r = await fetch("/api/proxy", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ model: "claude-haiku-4-5-20251001", max_tokens: 800, tools: [{ type: "web_search_20250305", name: "web_search" }], messages: [{ role: "user", content: prompt }] }) });
    const data = await r.json();

    // Claude's response may contain multiple content blocks (text + tool_use);
    // we only care about the text blocks, which we concatenate
    const text = (data.content || []).filter(b => b.type === "text").map(b => b.text).join("");

    // Parse the JSON from the response — try direct parse first, then
    // fall back to regex extraction in case Claude wrapped it in markdown fences
    let parsed;
    try { parsed = JSON.parse(text.replace(/```json|```/g, "").trim()); } catch { const m = text.match(/\{[\s\S]*\}/); if (m) parsed = JSON.parse(m[0]); else throw new Error("No JSON found"); }

    // If Claude returned an error message (e.g. couldn't access the page)
    if (parsed.error) { st.style.color = "var(--rd)"; st.textContent = "⚠️ " + parsed.error; btn.disabled = false; return; }

    // Populate the Add Recipe form with the extracted data
    g("rn").value = parsed.name || "";
    g("rd").value = parsed.description || "";
    g("rnotes").value = parsed.notes || "";
    g("rsourceurl").value = url; // store the original URL as the recipe source
    g("savrecbtn").disabled = !parsed.name; // enable Save only if we got a name
    st.style.color = "var(--gn)"; st.textContent = "✓ Recipe imported! Review and save.";
  } catch { st.style.color = "var(--rd)"; st.textContent = "⚠️ Couldn't import — try copying the recipe text manually."; }
  btn.disabled = false; // re-enable the import button regardless of outcome
}

// ── SAVE NEW RECIPE ──────────────────────────────────────────────────────────

/**
 * Collects data from the Add Recipe form and saves a new recipe to Firestore.
 * Generates a unique ID using timestamp, sets initial metadata (cook count,
 * saved date), then resets the form and closes the overlay.
 */
export async function saveRec() {
  const nm = g("rn").value.trim(); if (!nm) return; // name is required
  const desc = g("rd").value.trim();
  const srcUrl = (g("rsourceurl") ? g("rsourceurl").value.trim() : "");
  const tags = getSelTags("rtags"); // read which tag pills are selected

  // Build the recipe object and persist it
  await svr({ id: "rec-" + Date.now(), name: nm, rating: state.nr, favorited: false, notes: g("rnotes").value.trim(), description: desc, source: srcUrl ? "Web Import" : "Manual", sourceUrl: srcUrl || null, tags, cookCount: 0, savedAt: new Date().toLocaleDateString() });

  // Reset all form fields back to empty/default
  g("rn").value = ""; g("rnotes").value = ""; g("rd").value = ""; g("rsourceurl").value = ""; g("rurl").value = "";
  setTagsUI("rtags", []); // deselect all tags
  state.nr = 0;           // reset the star rating state
  g("savrecbtn").disabled = true;
  renderStars("rstars", 0); // visually clear the star widget
  showNotif("Recipe saved! 📖");
  hideOv("arec"); // close the Add Recipe overlay
}

// ── EDIT RECIPE OVERLAY ──────────────────────────────────────────────────────

/**
 * Opens the Edit Recipe overlay for a given recipe ID. Builds a rich detail
 * view with: action buttons (schedule, shop ingredients), a serving-size
 * scaler, editable fields (name, rating, tags, description, notes, favorite
 * toggle), and delete/save buttons. All rendered as innerHTML into the
 * overlay body.
 */
export function openER(id) {
  const r = state.recs.find(r => r.id === id); if (!r) return;
  state.eid = id; // store which recipe is being edited for updR() and delER()

  // Build the star rating display with click handlers for editing
  const rt2 = r.rating || 0;
  const st = Array.from({ length: 5 }, (_, i) => `<span class="star${i < rt2 ? " on" : ""}" onclick="setStar(${i + 1},'e')">${i < rt2 ? "★" : "☆"}</span>`).join("");

  // If the recipe was imported from a URL, show a clickable link to the original
  const srcLink = r.sourceUrl ? `<div class="frow"><label class="flbl">Original</label><a href="${r.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);word-break:break-all">${r.sourceUrl}</a></div>` : "";

  // Build tag pills, pre-selecting any tags the recipe already has
  const tagsHtml = `<div class="frow"><label class="flbl">Tags</label><div class="tags" id="etags">
    <div class="tag${(r.tags || []).includes("Quick") ? " sel" : ""}" data-tag="Quick" onclick="togTag(this)">⚡ Quick</div>
    <div class="tag kid${(r.tags || []).includes("Kid-Friendly") ? " sel" : ""}" data-tag="Kid-Friendly" onclick="togTag(this)">👶 Kid-Friendly</div>
    <div class="tag date${(r.tags || []).includes("Date Night") ? " sel" : ""}" data-tag="Date Night" onclick="togTag(this)">🕯 Date Night</div>
    <div class="tag batch${(r.tags || []).includes("Batch Cook") ? " sel" : ""}" data-tag="Batch Cook" onclick="togTag(this)">📦 Batch Cook</div>
    <div class="tag${(r.tags || []).includes("Healthy") ? " sel" : ""}" data-tag="Healthy" onclick="togTag(this)">🥗 Healthy</div>
    <div class="tag${(r.tags || []).includes("Under 30 min") ? " sel" : ""}" data-tag="Under 30 min" onclick="togTag(this)">⏱ Under 30 min</div>
  </div></div>`;

  // Render the full edit overlay body — includes action buttons at top,
  // scaling controls, form fields, and save/delete buttons at bottom
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

  showOv("erec"); // display the Edit Recipe overlay
}

// ── UPDATE (SAVE EDITS) ─────────────────────────────────────────────────────

/**
 * Reads values from the Edit Recipe form and persists them to Firestore.
 * Merges the edited fields onto the existing recipe object (preserving
 * fields like cookCount and savedAt that aren't editable here).
 */
export async function updR() {
  const r = state.recs.find(r => r.id === state.eid); if (!r) return;

  // Count how many stars have the "on" class to get the edited rating
  const rt2 = [...document.querySelectorAll("#estars .star")].filter(s => s.classList.contains("on")).length;
  const tags = getSelTags("etags"); // read selected tags from the edit form

  // Spread the original recipe and override only the editable fields
  await svr({ ...r, name: g("ern").value.trim(), rating: rt2, description: g("erd").value.trim(), notes: g("erno").value.trim(), favorited: g("etog").classList.contains("on"), tags });
  showNotif("Recipe updated!"); hideOv("erec");
}

// ── DELETE RECIPE ────────────────────────────────────────────────────────────

/**
 * Deletes the recipe currently open in the Edit overlay after a confirmation
 * dialog. Uses the recipe ID stored in state.eid (set by openER).
 */
export async function delER() {
  if (!confirm("Delete this recipe?")) return;
  await dlr(state.eid); // dlr = delete recipe from Firestore
  showNotif("Deleted"); hideOv("erec");
}

// ── RECIPE SCALING (AI-POWERED) ──────────────────────────────────────────────

/**
 * Scales the ingredient quantities in the recipe description by a multiplier
 * (e.g. 0.5 for half, 2 for double). Sends the current description text to
 * Claude Haiku, which returns the same text with all quantities adjusted.
 * The result replaces the description textarea content in the edit form.
 */
export async function scaleRec(mult) {
  const descEl = g("erd"); if (!descEl) return; // erd = edit recipe description textarea
  const orig = descEl.value.trim(); if (!orig) { showNotif("No ingredients to scale"); return; }

  // Show a status indicator below the scale buttons
  const st = g("scaleStatus");
  st.style.display = "block"; st.style.color = "var(--mt)"; st.textContent = `⏳ Scaling to ${mult}× with Claude…`;

  try {
    const r = await fetch("/api/proxy", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ model: "claude-haiku-4-5-20251001", max_tokens: 600, messages: [{ role: "user", content: `Scale ALL ingredient quantities in this recipe by ${mult}x. Return ONLY the updated recipe text with scaled quantities. Keep the same format. Do not add any explanation.\n\n${orig}` }] }) });
    const data = await r.json(), scaled = (data.content && data.content[0] && data.content[0].text || "");

    if (scaled) { descEl.value = scaled.trim(); st.style.color = "var(--gn)"; st.textContent = `✓ Scaled to ${mult}×`; }
    else { st.style.color = "var(--rd)"; st.textContent = "Couldn't scale — try again"; }
  } catch { st.style.color = "var(--rd)"; st.textContent = "Couldn't reach Claude — check connection"; }
}

// ── "WHAT CAN I MAKE?" (AI-POWERED) ─────────────────────────────────────────

/**
 * Asks Claude what complete meals can be made using only the items currently
 * in the user's pantry inventory — no extra shopping required. Takes into
 * account dietary restrictions from user settings and already-saved recipe
 * names (so Claude can reference them). Replaces the recipe list view with
 * Claude's suggestions.
 */
export async function whatCanIMake() {
  const rsub = g("rsub");
  if (rsub) rsub.textContent = "Thinking…"; // temporary subtitle while waiting

  // Build a comma-separated inventory string like "chicken (2 lbs), rice (1 bag)"
  const is = state.inv.map(i => `${i.name} (${i.qty} ${i.unit})`).join(", ");

  // Include saved recipe names so Claude can suggest ones the user already has
  const saved = state.recs.map(r => r.name).join(", ");

  // Gather any dietary restrictions from user config
  const restr = [state.cfg.nopork ? "no pork" : null, state.cfg.noshellfish ? "no shellfish" : null, state.cfg.vegetarian ? "vegetarian" : null, state.cfg.glutenfree ? "gluten-free" : null, state.cfg.other || null].filter(Boolean).join(", ");

  try {
    const r = await fetch("/api/proxy", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ model: "claude-haiku-4-5-20251001", max_tokens: 600, messages: [{ role: "user", content: `Based on this exact inventory: ${is}\nRestrictions: ${restr || "none"}\nSaved recipes: ${saved || "none"}\nSuggest 5 complete meals I can make RIGHT NOW with no extra shopping. Be specific with names. Format as a numbered list.` }] }) });
    const data = await r.json(), text = (data.content && data.content[0] && data.content[0].text || "");

    // Replace the recipe list with a styled card showing Claude's suggestions
    const c = g("rbody");
    if (c) c.innerHTML = `<div style="background:var(--card);border:1px solid var(--ac);border-radius:14px;padding:16px;margin-bottom:12px"><div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ac);margin-bottom:10px">🔍 Make right now — no shopping needed</div><div style="font-size:.88rem;line-height:1.8;color:var(--tx2)">${fmtR(text)}</div><button class="btn bs bsm" style="margin-top:12px;width:100%" onclick="setRT('all')">← Back to recipes</button></div>`;
    if (rsub) rsub.textContent = "Based on your inventory";
  } catch { if (rsub) rsub.textContent = "Couldn't reach Claude"; }
}

// ── ADD RECIPE INGREDIENTS TO SHOPPING LIST (AI-POWERED) ─────────────────────

/**
 * Extracts individual ingredient names from a recipe's description using
 * Claude, then adds any ingredients NOT already in the user's pantry to the
 * shopping list. This lets users quickly shop for missing ingredients when
 * they decide to cook a recipe.
 */
export async function addRecIngToShop(id) {
  const r = state.recs.find(x => x.id === id);
  if (!r || !r.description) { showNotif("No ingredients listed"); return; }
  showNotif("Parsing ingredients…");

  try {
    // Build a lowercase list of pantry item names for comparison
    const invNames = state.inv.map(i => i.name.toLowerCase());

    // Ask Claude to extract just the ingredient names as a JSON array
    const res = await fetch("/api/proxy", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ model: "claude-haiku-4-5-20251001", max_tokens: 400, messages: [{ role: "user", content: `Extract a list of ingredient names from this recipe description. Return ONLY a JSON array of strings, no markdown, no quantities, just clean ingredient names. Example: ["chicken","garlic","olive oil"]\n\nRecipe: ${r.description}` }] }) });
    const data = await res.json();

    // Strip markdown fences if Claude added them, then parse the JSON array
    const text = (data.content && data.content[0] && data.content[0].text || "").replace(/```json|```/g, "").trim();
    const ingredients = JSON.parse(text);

    // Filter out ingredients the user already has in their pantry.
    // Uses substring matching in both directions so "chicken breast" matches "chicken"
    const toAdd = ingredients.filter(ing => !invNames.some(n => n.includes(ing.toLowerCase()) || ing.toLowerCase().includes(n)));

    if (!toAdd.length) { showNotif("All ingredients already in pantry ✓"); return; }

    // Save each missing ingredient as a new shopping list item
    for (const ing of toAdd) {
      await svShopItem({ id: "shop-" + Date.now() + "-" + Math.random().toString(36).slice(2), name: ing, checked: false, src: "recipe" });
    }

    showNotif(`Added ${toAdd.length} ingredient${toAdd.length !== 1 ? "s" : ""} to shopping list 🛒`);
    hideOv("erec");                  // close the Edit Recipe overlay
    window.showScreen("shopping");   // navigate to the shopping list screen
  } catch { showNotif("Couldn't parse ingredients"); }
}

// ── STAR RATING ──────────────────────────────────────────────────────────────

/**
 * Sets the star rating to `n` (1-5) for a given context:
 *   "r" = Add Recipe form stars
 *   "c" = Cook/log form stars
 *   "e" = Edit Recipe form stars
 * Updates both the global state and the visual star display.
 */
export function setStar(n, ctx) {
  state.nr = n; // store the rating value in state for use when saving
  if (ctx === "r") renderStars("rstars", n);
  else if (ctx === "c") renderStars("cstars", n);
  else if (ctx === "e") renderStars("estars", n);
}
