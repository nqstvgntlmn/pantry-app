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
import { svr, dlr, svShopItem, publishRecipe, unpublishRecipe, listPublicRecipes, getPublicRecipe, toggleLike, addComment, listComments, checkMyLike, saveRecipeToKitchen, addReview, listReviews, checkMyReview, submitRating, getMyRating, deleteComment, submitReport, listNotifications, markNotificationRead, markAllNotificationsRead, getUnreadNotifCount } from '../db.js';
import { g, fmtR, showNotif, showOv, hideOv, renderStars } from '../helpers.js';
import { getCurrentUser } from '../auth.js';
// g = getElementById shorthand, fmtR = format AI response text to HTML,
// showNotif = toast notification, showOv/hideOv = show/hide overlay panels,
// renderStars = re-render a star-rating widget, getCurrentUser = Firebase user

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
 * Each card shows: cover image (if available), name, favorite heart, star
 * rating, truncated description, time/servings metadata, notes, date saved,
 * and an optional source link. Clicking the card opens the edit/detail overlay.
 */
function rH(r) {
  // Build 5 star spans — filled stars up to the rating, hollow after
  const st = Array.from({ length: 5 }, (_, i) => `<span class="star${i < r.rating ? " on" : ""}">${i < r.rating ? "★" : "☆"}</span>`).join("");

  // Source link: if we have a URL show a clickable pill link; if just a source
  // label (e.g. "Manual"), show it as a badge; otherwise nothing
  const srcLink = r.sourceUrl ? `<a href="${r.sourceUrl}" target="_blank" onclick="event.stopPropagation()" style="font-size:.68rem;color:var(--ac);text-decoration:none;border:1px solid rgba(212,168,83,.3);border-radius:20px;padding:2px 8px;background:transparent">🔗 View original</a>` : r.source ? `<span class="sbdg">${r.source}</span>` : "";

  // Cover image: show a hero image at the top of the card if available
  const imgHtml = r.imageUrl ? `<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;max-height:140px"><img src="${r.imageUrl}" alt="" style="width:100%;height:140px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>` : "";

  // Time/servings metadata pills — show if imported via AI
  const metaParts = [
    r.totalTime || r.cookTime ? `⏱ ${r.totalTime || r.cookTime}` : "",
    r.servings ? `🍽 ${r.servings} servings` : "",
  ].filter(Boolean);
  const metaHtml = metaParts.length ? `<div style="display:flex;gap:6px;margin-top:6px;flex-wrap:wrap">${metaParts.map(m => `<span style="font-size:.68rem;color:var(--mt);background:var(--b1);border-radius:8px;padding:2px 8px">${m}</span>`).join("")}</div>` : "";

  // Assemble the full card — stopPropagation on the heart so tapping it
  // doesn't also open the edit overlay
  return `<div class="rcd${r.favorited ? " fav" : ""}" onclick="openER('${r.id}')">${imgHtml}<div class="rrow"><div class="rnm">${r.name}</div><div class="rfav" onclick="event.stopPropagation();togFav('${r.id}')">${r.favorited ? "❤️" : "🤍"}</div></div><div class="stars">${st}</div>${metaHtml}${r.description ? `<div class="rnot" style="color:var(--tx2);margin-top:6px">${r.description.substring(0, 100)}${r.description.length > 100 ? "…" : ""}</div>` : ""}${r.notes ? `<div class="rnot">${r.notes}</div>` : ""}<div class="rmeta"><span>${r.savedAt}</span>${srcLink}</div></div>`;
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

  // Community tab loads public recipes; all other tabs render local recipes
  if (t === "community") { loadCommunity(); } else { renderRecs(); }
}

// ── RECIPE LIST RENDERING ────────────────────────────────────────────────────

/**
 * Full re-render of the recipe list based on the current tab filter.
 * Filters/sorts the master recipe array from state, updates the subtitle
 * count, and writes all matching recipe cards into the DOM. Shows an
 * appropriate empty-state message when there are no matches.
 */
export function renderRecs() {
  // Skip rendering local recipes when the community tab is active —
  // the poll loop calls renderRecs() which would overwrite the community feed
  if (state.rt === "community") return;

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
 * Fetches a recipe from a URL using the Claude AI-powered import endpoint.
 * Sends the URL to /api/import-recipe which fetches HTML, parses with Claude
 * Sonnet, downloads the cover image, and returns structured recipe data.
 * On success, populates the Add Recipe form for user review before saving.
 */
export async function importFromUrl() {
  const url = g("rurl").value.trim(); if (!url) return;

  const st = g("rurlstatus"), btn = g("rimportbtn");
  // Show a loading indicator and disable the button to prevent double-submits
  st.style.display = "block";
  st.style.color = "var(--mt)";
  st.textContent = "🤖 Importing recipe with AI…";
  btn.disabled = true;

  try {
    // Call the AI-powered import endpoint — sends HTML to Claude Sonnet
    const r = await fetch("/api/import-recipe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url })
    });
    const data = await r.json();

    if (!data.success) {
      st.style.color = "var(--rd)";
      st.textContent = "⚠️ " + (data.error || "Couldn't import this recipe");
      btn.disabled = false;
      return;
    }

    const p = data.recipe;

    // Build the description from structured ingredients + steps arrays
    // so it displays nicely in the recipe view
    const desc = _buildDescription(p);

    // Populate the Add Recipe form with the extracted data
    g("rn").value = p.title || "";
    g("rd").value = desc;
    g("rnotes").value = p.notes || "";
    g("rsourceurl").value = url;
    if (g("rcuisine")) g("rcuisine").value = p.cuisine || "";

    // Auto-select tags that Claude inferred from the recipe content
    if (p.tags && p.tags.length) {
      setTagsUI("rtags", p.tags);
    }

    // Enable save button since we have a title
    g("savrecbtn").disabled = !p.title;

    // Show the cover image preview if the endpoint found one
    _showImagePreview(p.imageUrl);

    // Store structured data and image URL in a temp variable so saveRec
    // can include them when saving to Firestore
    state._importedRecipe = {
      ingredientsRaw: p.ingredients || [],
      stepsRaw: p.steps || [],
      imageUrl: p.imageUrl || null,
      prepTime: p.prepTime || "",
      cookTime: p.cookTime || "",
      totalTime: p.totalTime || "",
      servings: p.servings || "",
    };

    // Show time/serving metadata if available
    const metaParts = [
      p.prepTime ? `Prep: ${p.prepTime}` : "",
      p.cookTime ? `Cook: ${p.cookTime}` : "",
      p.servings ? `Serves: ${p.servings}` : "",
    ].filter(Boolean);

    st.style.color = "var(--gn)";
    st.textContent = "✓ Recipe imported! " + (metaParts.length ? metaParts.join(" · ") : "Review and save.");
  } catch (e) {
    console.error("importFromUrl:", e);
    st.style.color = "var(--rd)";
    st.textContent = "⚠️ Couldn't import — try copying the recipe text manually.";
  }
  btn.disabled = false;
}

/**
 * _buildDescription — converts structured ingredient and step arrays into
 * a formatted text string for the description field. Keeps ingredients with
 * amounts and steps numbered for readability.
 */
function _buildDescription(recipe) {
  const parts = [];

  // Add brief description if provided
  if (recipe.description) {
    parts.push(recipe.description);
    parts.push("");
  }

  // Format structured ingredients with amounts and units
  if (recipe.ingredients && recipe.ingredients.length) {
    parts.push("Ingredients:");
    recipe.ingredients.forEach(ing => {
      if (typeof ing === "string") {
        parts.push(`- ${ing}`);
      } else {
        const amt = [ing.amount, ing.unit].filter(Boolean).join(" ");
        parts.push(`- ${amt ? amt + " " : ""}${ing.name}`);
      }
    });
    parts.push("");
  }

  // Format steps as numbered list
  if (recipe.steps && recipe.steps.length) {
    parts.push("Steps:");
    recipe.steps.forEach((step, i) => {
      parts.push(`${i + 1}. ${step}`);
    });
  }

  return parts.join("\n");
}

/**
 * _showImagePreview — displays the imported recipe's cover image in the
 * save form so the user can see what they're importing. Creates or updates
 * the preview element above the form fields.
 */
function _showImagePreview(imageUrl) {
  // Remove existing preview if any
  const existing = document.getElementById("rimgpreview");
  if (existing) existing.remove();

  if (!imageUrl) return;

  // Insert the image preview after the import section, before the form fields
  const importSection = g("rurlstatus")?.parentElement;
  if (!importSection) return;

  const preview = document.createElement("div");
  preview.id = "rimgpreview";
  preview.style.cssText = "margin:12px 0;border-radius:12px;overflow:hidden;background:var(--b1);max-height:200px;display:flex;align-items:center;justify-content:center";
  preview.innerHTML = `<img src="${imageUrl}" alt="Recipe photo" style="width:100%;height:200px;object-fit:cover;border-radius:12px" onerror="this.parentElement.style.display='none'"/>`;

  // Insert after the import card
  importSection.after(preview);
}

// ── SAVE NEW RECIPE ──────────────────────────────────────────────────────────

/**
 * Collects data from the Add Recipe form and saves a new recipe to Firestore.
 * Generates a unique ID using timestamp, sets initial metadata (cook count,
 * saved date), then resets the form and closes the overlay.
 *
 * If this recipe was imported via AI (state._importedRecipe exists), includes
 * the structured ingredient/step arrays, image URL, and time metadata.
 */
export async function saveRec() {
  const nm = g("rn").value.trim(); if (!nm) return; // name is required
  const desc = g("rd").value.trim();
  const srcUrl = (g("rsourceurl") ? g("rsourceurl").value.trim() : "");
  const cuisine = g("rcuisine") ? g("rcuisine").value.trim() : "";
  const tags = getSelTags("rtags"); // read which tag pills are selected

  // Check if the "Publish to community" toggle is on
  const pubToggle = document.getElementById("rpubtoggle");
  const isPublic = pubToggle ? pubToggle.classList.contains("on") : false;

  // Pull structured data from AI import if available
  const imported = state._importedRecipe || {};

  // Build the recipe object with both flat text and structured data
  const recipe = {
    id: "rec-" + Date.now(),
    name: nm,
    rating: state.nr,
    favorited: false,
    notes: g("rnotes").value.trim(),
    description: desc,
    source: srcUrl ? "AI Import" : "Manual",
    sourceUrl: srcUrl || null,
    imageUrl: imported.imageUrl || null,
    tags,
    cuisine,
    prepTime: imported.prepTime || "",
    cookTime: imported.cookTime || "",
    totalTime: imported.totalTime || "",
    servings: imported.servings || "",
    ingredientsRaw: imported.ingredientsRaw || [],
    stepsRaw: imported.stepsRaw || [],
    cookCount: 0,
    savedAt: new Date().toLocaleDateString(),
    isPublic,
  };

  await svr(recipe);

  // If publishing, also save to the public community collection
  if (isPublic) {
    const user = getCurrentUser();
    const authorName = user?.displayName || localStorage.getItem("ks-who") || "Anonymous";
    await publishRecipe(recipe, authorName, state.hid);
  }

  // Reset all form fields back to empty/default
  g("rn").value = ""; g("rnotes").value = ""; g("rd").value = "";
  g("rsourceurl").value = ""; g("rurl").value = "";
  if (g("rcuisine")) g("rcuisine").value = "";
  setTagsUI("rtags", []); // deselect all tags
  state.nr = 0;           // reset the star rating state
  state._importedRecipe = null; // clear imported data
  g("savrecbtn").disabled = true;
  renderStars("rstars", 0); // visually clear the star widget

  // Remove the image preview if it was shown
  const imgPreview = document.getElementById("rimgpreview");
  if (imgPreview) imgPreview.remove();

  // Reset the publish toggle
  if (pubToggle) pubToggle.classList.remove("on");

  // Reset the import status text
  const urlStatus = g("rurlstatus");
  if (urlStatus) { urlStatus.style.display = "none"; urlStatus.textContent = ""; }

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

  // Cover image at the top of the edit overlay (if recipe has one)
  const coverImg = r.imageUrl ? `<div style="margin:-16px -16px 16px;border-radius:0;overflow:hidden;max-height:220px"><img src="${r.imageUrl}" alt="" style="width:100%;height:220px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>` : "";

  // Time & servings metadata bar — shown for AI-imported recipes
  const editMeta = [
    r.prepTime ? `Prep: ${r.prepTime}` : "",
    r.cookTime ? `Cook: ${r.cookTime}` : "",
    r.totalTime ? `Total: ${r.totalTime}` : "",
    r.servings ? `Serves: ${r.servings}` : "",
  ].filter(Boolean);
  const editMetaHtml = editMeta.length ? `<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px">${editMeta.map(m => `<span style="font-size:.74rem;color:var(--mt);background:var(--b1);border-radius:8px;padding:4px 10px">${m}</span>`).join("")}</div>` : "";

  // Render the full edit overlay body — includes action buttons at top,
  // scaling controls, form fields, and save/delete buttons at bottom
  g("erecbody").innerHTML = `
    ${coverImg}
    ${editMetaHtml}
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
    <div class="frow"><label class="flbl">Cuisine <span class="otag">optional</span></label><input class="fi" id="ecuis" value="${r.cuisine || ""}" placeholder="e.g. Mediterranean, Turkish, Asian…"/></div>
    <div style="display:flex;align-items:center;gap:10px;margin:12px 0"><span style="font-size:.88rem">Favorite</span><div class="tog${r.favorited ? " on" : ""}" id="etog" onclick="this.classList.toggle('on')"></div></div>
    <div style="display:flex;align-items:center;gap:10px;margin:6px 0 14px"><span style="font-size:.88rem">Share publicly</span><div class="tog${r.isPublic ? " on" : ""}" id="epub" onclick="togglePublic('${r.id}');this.classList.toggle('on')"></div><span style="font-size:.72rem;color:var(--mt)">Visible to the community</span></div>
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

  // Read the cuisine field from the edit form
  const cuisine = g("ecuis") ? g("ecuis").value.trim() : (r.cuisine || "");

  // Spread the original recipe and override only the editable fields
  await svr({ ...r, name: g("ern").value.trim(), rating: rt2, description: g("erd").value.trim(), notes: g("erno").value.trim(), favorited: g("etog").classList.contains("on"), tags, cuisine });
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
      await svShopItem({ id: "shop-" + Date.now() + "-" + Math.random().toString(36).slice(2), name: ing, qty: 1, checked: false, src: "recipe" });
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

// ── SHARE PUBLICLY TOGGLE ────────────────────────────────────────────────────

/**
 * togglePublic — publishes or unpublishes a recipe to the community feed.
 * Called from the edit overlay's "Share publicly" toggle. When turned on,
 * copies the recipe to public_recipes/{id}. When turned off, deletes it.
 */
export async function togglePublic(id) {
  const r = state.recs.find(x => x.id === id);
  if (!r) return;

  const isPublic = !r.isPublic;
  const user = getCurrentUser();
  const authorName = user?.displayName || localStorage.getItem("ks-who") || "Anonymous";

  if (isPublic) {
    // Publish to the community collection
    await publishRecipe(r, authorName, state.hid);
    showNotif("Recipe shared with the community!");
  } else {
    // Remove from the community collection
    await unpublishRecipe(r.id);
    showNotif("Recipe removed from community");
  }

  // Update the local recipe's isPublic flag and persist
  await svr({ ...r, isPublic });
}

// ── COMMUNITY TAB ────────────────────────────────────────────────────────────
// The community tab lets users browse all public recipes with rich filtering,
// search, pagination (infinite scroll), star ratings, and full detail views.

// IntersectionObserver reference for infinite scroll cleanup
let _comScrollObs = null;

/**
 * _parseMinutes — extracts the total minutes from a time string like "30 min",
 * "1 hour", "1 hr 15 min". Returns 0 if unparseable. Used for cook time filtering.
 */
function _parseMinutes(str) {
  if (!str) return 0;
  const s = str.toLowerCase();
  let mins = 0;
  const hMatch = s.match(/(\d+)\s*(?:hr|hour)/);
  const mMatch = s.match(/(\d+)\s*min/);
  if (hMatch) mins += parseInt(hMatch[1]) * 60;
  if (mMatch) mins += parseInt(mMatch[1]);
  return mins;
}

/**
 * _starDisplay — renders a compact star display string for a given rating.
 * Returns filled/empty star characters, e.g. "★★★★☆" for 4.0.
 */
function _starDisplay(avg, count) {
  const rounded = Math.round(avg || 0);
  const stars = Array.from({ length: 5 }, (_, i) => i < rounded ? "★" : "☆").join("");
  const label = count ? `(${count})` : "";
  return `<span style="color:var(--ac);font-size:.74rem;letter-spacing:1px">${stars}</span><span style="font-size:.68rem;color:var(--mt);margin-left:3px">${label}</span>`;
}

/**
 * loadCommunity — fetches all public recipes and renders the community feed.
 * Called when the user taps the "Community" tab on the Recipes screen.
 * Resets pagination to page 0 on each fresh load.
 */
export async function loadCommunity() {
  const c = g("rbody");
  if (!c) return;

  // Show loading state
  c.innerHTML = `<div class="es"><div class="ei">🌍</div><p>Loading community recipes…</p></div>`;
  state.comPage = 0; // reset pagination on fresh load

  try {
    state.comRecs = await listPublicRecipes();
    renderCommunity();
  } catch (e) {
    console.error("loadCommunity:", e);
    c.innerHTML = `<div class="es"><div class="ei">⚠️</div><p>Couldn't load community recipes.</p></div>`;
  }
}

/**
 * setComCuisine — updates the cuisine filter and resets pagination.
 */
export function setComCuisine(val) {
  state.comCuisine = val;
  state.comPage = 0;
  renderCommunity();
}

/**
 * setComSearch — updates the search text and resets pagination.
 */
export function setComSearch(val) {
  state.comSearch = val;
  state.comPage = 0;
  renderCommunity();
}

/**
 * setComSort — updates the sort order (newest, popular, rated) and re-renders.
 */
export function setComSort(val) {
  state.comSort = val;
  state.comPage = 0;
  renderCommunity();
}

/**
 * toggleComTag — toggles a tag in the community filter and re-renders.
 * If the tag is already selected, removes it; otherwise adds it.
 */
export function toggleComTag(tag) {
  const idx = state.comTags.indexOf(tag);
  if (idx >= 0) state.comTags.splice(idx, 1);
  else state.comTags.push(tag);
  state.comPage = 0;
  renderCommunity();
}

/**
 * setComTime — sets the cook time filter ("any", "under30", "30to60", "over60").
 */
export function setComTime(val) {
  state.comTime = val;
  state.comPage = 0;
  renderCommunity();
}

/**
 * setComMinRating — sets the minimum avg rating filter (0, 3, or 4).
 */
export function setComMinRating(val) {
  state.comMinRating = parseInt(val) || 0;
  state.comPage = 0;
  renderCommunity();
}

/**
 * renderCommunity — renders the full community recipe feed into rbody.
 * Applies all active filters (cuisine, search, tags, cook time, rating),
 * sorts by the selected order, and paginates with infinite scroll (20 per page).
 */
export function renderCommunity() {
  const c = g("rbody");
  if (!c) return;

  // Clean up any previous infinite scroll observer
  if (_comScrollObs) { _comScrollObs.disconnect(); _comScrollObs = null; }

  let recs = [...state.comRecs];

  // ── Apply filters ──

  // Cuisine filter
  if (state.comCuisine && state.comCuisine !== "all") {
    recs = recs.filter(r =>
      (r.cuisine || "").toLowerCase().includes(state.comCuisine.toLowerCase()) ||
      (r.tags || []).some(t => t.toLowerCase().includes(state.comCuisine.toLowerCase()))
    );
  }

  // Text search filter — matches title, tags, cuisine, and author username/name
  if (state.comSearch) {
    const q = state.comSearch.toLowerCase();
    recs = recs.filter(r =>
      (r.title || "").toLowerCase().includes(q) ||
      (r.tags || []).join(" ").toLowerCase().includes(q) ||
      (r.cuisine || "").toLowerCase().includes(q) ||
      (r.authorUsername || "").toLowerCase().includes(q) ||
      (r.authorName || "").toLowerCase().includes(q)
    );
  }

  // Tag filter — recipe must have ALL selected tags
  if (state.comTags.length) {
    recs = recs.filter(r => state.comTags.every(t => (r.tags || []).includes(t)));
  }

  // Cook time filter
  if (state.comTime && state.comTime !== "any") {
    recs = recs.filter(r => {
      const mins = _parseMinutes(r.cookTime || r.totalTime);
      if (!mins) return false; // skip recipes without cook time data
      if (state.comTime === "under30") return mins <= 30;
      if (state.comTime === "30to60") return mins > 30 && mins <= 60;
      if (state.comTime === "over60") return mins > 60;
      return true;
    });
  }

  // Minimum rating filter
  if (state.comMinRating > 0) {
    recs = recs.filter(r => (r.avgRating || 0) >= state.comMinRating);
  }

  // ── Sort ──
  if (state.comSort === "popular") {
    recs.sort((a, b) => (b.likes || 0) - (a.likes || 0));
  } else if (state.comSort === "rated") {
    recs.sort((a, b) => (b.avgRating || 0) - (a.avgRating || 0));
  } else {
    // Default: newest first
    recs.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
  }

  // ── Pagination — show 20 per page ──
  const pageSize = 20;
  const visible = recs.slice(0, (state.comPage + 1) * pageSize);
  const hasMore = visible.length < recs.length;

  // Update subtitle count
  const rsub = g("rsub");
  if (rsub) rsub.textContent = recs.length + " community recipe" + (recs.length !== 1 ? "s" : "");

  // ── Build the filter panel ──
  const cuisines = [
    ["all", "All Cuisines"], ["turkish", "Turkish"], ["mediterranean", "Mediterranean"],
    ["italian", "Italian"], ["mexican", "Mexican"], ["asian", "Asian"],
    ["american", "American"], ["indian", "Indian"], ["bangladeshi", "Bangladeshi"],
    ["japanese", "Japanese"], ["thai", "Thai"], ["french", "French"],
    ["korean", "Korean"], ["middle eastern", "Middle Eastern"]
  ];
  const cuisineOpts = cuisines.map(([v, l]) =>
    `<option value="${v}"${state.comCuisine === v ? " selected" : ""}>${l}</option>`
  ).join("");

  // Tag filter pills — highlight selected tags
  const tagList = ["Quick", "Healthy", "Kid-Friendly", "Date Night", "Batch Cook", "Under 30 min"];
  const tagPills = tagList.map(t => {
    const sel = state.comTags.includes(t);
    return `<div class="com-tag${sel ? " com-tag-sel" : ""}" onclick="toggleComTag('${t}')" style="cursor:pointer;${sel ? "background:var(--ac);color:#fff;border-color:var(--ac)" : ""}">${t}</div>`;
  }).join("");

  let html = `<div style="margin-bottom:14px">
    <input class="fi" id="com-search" placeholder="Search recipes, tags, authors…" value="${state.comSearch.replace(/"/g, "&quot;")}" oninput="setComSearch(this.value)" style="margin-bottom:10px"/>
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px">
      <select class="fsel" onchange="setComCuisine(this.value)" style="flex:1;font-size:.78rem;padding:7px 10px">${cuisineOpts}</select>
      <select class="fsel" onchange="setComTime(this.value)" style="flex:1;font-size:.78rem;padding:7px 10px">
        <option value="any"${state.comTime === "any" ? " selected" : ""}>Any time</option>
        <option value="under30"${state.comTime === "under30" ? " selected" : ""}>Under 30 min</option>
        <option value="30to60"${state.comTime === "30to60" ? " selected" : ""}>30–60 min</option>
        <option value="over60"${state.comTime === "over60" ? " selected" : ""}>Over 1 hour</option>
      </select>
    </div>
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px">
      <select class="fsel" onchange="setComMinRating(this.value)" style="font-size:.78rem;padding:7px 10px;flex:1">
        <option value="0"${state.comMinRating === 0 ? " selected" : ""}>Any rating</option>
        <option value="3"${state.comMinRating === 3 ? " selected" : ""}>3+ stars</option>
        <option value="4"${state.comMinRating === 4 ? " selected" : ""}>4+ stars</option>
      </select>
      <select class="fsel" onchange="setComSort(this.value)" style="font-size:.78rem;padding:7px 10px;flex:1">
        <option value="newest"${state.comSort === "newest" ? " selected" : ""}>Newest</option>
        <option value="popular"${state.comSort === "popular" ? " selected" : ""}>Most popular</option>
        <option value="rated"${state.comSort === "rated" ? " selected" : ""}>Highest rated</option>
      </select>
    </div>
    <div style="display:flex;gap:5px;flex-wrap:wrap">${tagPills}</div>
  </div>`;

  // ── Empty state ──
  if (!recs.length) {
    const hasFilters = state.comSearch || state.comCuisine !== "all" || state.comTags.length || state.comTime !== "any" || state.comMinRating > 0;
    html += `<div class="es"><div class="ei">🌍</div><p>${hasFilters ? "No recipes match your filters." : "No community recipes yet. Be the first to share!"}</p></div>`;
    c.innerHTML = html;
    return;
  }

  // ── Render recipe cards ──
  visible.forEach(r => {
    const tagsHtml = (r.tags || []).slice(0, 3).map(t => `<span class="com-tag">${t}</span>`).join("");
    const author = r.authorUsername ? `@${r.authorUsername}` : (r.authorName || "Anonymous");
    const timeStr = r.cookTime || r.totalTime || "";

    // Cover image (if available)
    const coverHtml = r.imageUrl
      ? `<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${r.imageUrl}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`
      : "";

    // Comment count badge on the card
    const cmtCount = r.commentCount || 0;

    html += `<div class="rcd com-rcd" onclick="openComRecipe('${r.id}')">
      ${coverHtml}
      <div class="rrow">
        <div class="rnm" style="flex:1">${r.title || "Untitled"}</div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <span style="font-size:.78rem;color:var(--rd)">❤️ ${r.likes || 0}</span>
          ${cmtCount ? `<span style="font-size:.78rem;color:var(--mt)">💬 ${cmtCount}</span>` : ""}
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-top:4px;flex-wrap:wrap">
        ${r.cuisine ? `<span style="font-size:.72rem;color:var(--ac);font-weight:600">${r.cuisine}</span>` : ""}
        ${(r.avgRating || r.ratingCount) ? `<span>${_starDisplay(r.avgRating, r.ratingCount)}</span>` : ""}
        ${timeStr ? `<span style="font-size:.7rem;color:var(--mt)">⏱ ${timeStr}</span>` : ""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${tagsHtml}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${author}</div>
      </div>
    </div>`;
  });

  // Infinite scroll sentinel — observed to load more when visible
  if (hasMore) {
    html += `<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>`;
  }

  c.innerHTML = html;

  // Set up IntersectionObserver for infinite scroll pagination
  if (hasMore) {
    const sentinel = g("com-scroll-sentinel");
    if (sentinel) {
      _comScrollObs = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          state.comPage++;
          _appendComPage(recs, c);
        }
      }, { rootMargin: "200px" });
      _comScrollObs.observe(sentinel);
    }
  }
}

/**
 * _appendComPage — appends the next page of community recipe cards.
 * Called by the IntersectionObserver when the user scrolls to the bottom.
 * Avoids a full re-render by inserting new cards before the sentinel.
 */
function _appendComPage(allRecs, container) {
  const pageSize = 20;
  const start = state.comPage * pageSize;
  const end = start + pageSize;
  const pageRecs = allRecs.slice(start, end);
  const hasMore = end < allRecs.length;

  let html = "";
  pageRecs.forEach(r => {
    const tagsHtml = (r.tags || []).slice(0, 3).map(t => `<span class="com-tag">${t}</span>`).join("");
    const author = r.authorUsername ? `@${r.authorUsername}` : (r.authorName || "Anonymous");
    const timeStr = r.cookTime || r.totalTime || "";
    const cmtCount = r.commentCount || 0;
    const coverHtml = r.imageUrl
      ? `<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${r.imageUrl}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`
      : "";

    html += `<div class="rcd com-rcd" onclick="openComRecipe('${r.id}')">
      ${coverHtml}
      <div class="rrow">
        <div class="rnm" style="flex:1">${r.title || "Untitled"}</div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <span style="font-size:.78rem;color:var(--rd)">❤️ ${r.likes || 0}</span>
          ${cmtCount ? `<span style="font-size:.78rem;color:var(--mt)">💬 ${cmtCount}</span>` : ""}
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-top:4px;flex-wrap:wrap">
        ${r.cuisine ? `<span style="font-size:.72rem;color:var(--ac);font-weight:600">${r.cuisine}</span>` : ""}
        ${(r.avgRating || r.ratingCount) ? `<span>${_starDisplay(r.avgRating, r.ratingCount)}</span>` : ""}
        ${timeStr ? `<span style="font-size:.7rem;color:var(--mt)">⏱ ${timeStr}</span>` : ""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${tagsHtml}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${author}</div>
      </div>
    </div>`;
  });

  // Remove the old sentinel, insert new cards, then add new sentinel if more exist
  const sentinel = g("com-scroll-sentinel");
  if (sentinel) sentinel.remove();
  if (_comScrollObs) { _comScrollObs.disconnect(); _comScrollObs = null; }

  container.insertAdjacentHTML("beforeend", html);

  if (hasMore) {
    container.insertAdjacentHTML("beforeend",
      `<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>`
    );
    const newSentinel = g("com-scroll-sentinel");
    if (newSentinel) {
      _comScrollObs = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          state.comPage++;
          _appendComPage(allRecs, container);
        }
      }, { rootMargin: "200px" });
      _comScrollObs.observe(newSentinel);
    }
  }
}

/**
 * openComRecipe — opens a full detail view for a community recipe.
 * Shows cover photo, metadata (prep/cook time, servings), structured
 * ingredients and steps, star rating (1-5 with per-user persistence),
 * like/save/comment actions, report button, comment delete, pagination,
 * and publish/unpublish button for the recipe author.
 */
export async function openComRecipe(id) {
  const r = state.comRecs.find(x => x.id === id);
  if (!r) return;

  // Store which community recipe is open (for report/comment/rating handlers)
  state._openComId = id;

  // Fetch like status, comments, user's rating, and review in parallel
  const uid = getCurrentUser()?.uid;
  const [liked, comments, myRating, myReview] = await Promise.all([
    checkMyLike(id),
    listComments(id).catch(() => []),
    getMyRating(id).catch(() => null),
    checkMyReview(id),
  ]);

  if (liked) state.myLikes.add(id); else state.myLikes.delete(id);
  // Sort comments chronologically (oldest first) for natural reading order
  comments.sort((a, b) => new Date(a.createdAt || 0) - new Date(b.createdAt || 0));

  // Cache comments for pagination — show first 20, "Load more" for the rest
  state._comComments = comments;

  // Share link URL
  const shareUrl = `https://pantry-app-zeta-six.vercel.app/recipe/${id}`;

  // Cover image
  const coverImg = r.imageUrl
    ? `<div style="margin:-16px -16px 16px;overflow:hidden;max-height:240px"><img src="${r.imageUrl}" alt="" style="width:100%;height:240px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`
    : "";

  // Time and servings metadata bar
  const meta = [
    r.prepTime ? `Prep: ${r.prepTime}` : "",
    r.cookTime ? `Cook: ${r.cookTime}` : "",
    r.totalTime ? `Total: ${r.totalTime}` : "",
    r.servings ? `Serves: ${r.servings}` : "",
  ].filter(Boolean);
  const metaHtml = meta.length ? `<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px">${meta.map(m => `<span style="font-size:.74rem;color:var(--mt);background:var(--b1);border-radius:8px;padding:4px 10px">${m}</span>`).join("")}</div>` : "";

  // Rating display — show aggregate rating with star icons
  const ratingHtml = (r.ratingCount || 0) > 0
    ? `<div style="margin-bottom:6px">${_starDisplay(r.avgRating, r.ratingCount)}</div>`
    : "";

  // Tags
  const tagsHtml = (r.tags || []).map(t => `<span class="com-tag">${t}</span>`).join("");
  const author = r.authorUsername ? `@${r.authorUsername}` : (r.authorName || "Anonymous");
  const isLiked = state.myLikes.has(id);
  const isAuthor = uid && uid === r.authorUid;

  // Ingredients — prefer structured ingredientsRaw array, fall back to flat text
  let ingredientsContent = "";
  if (r.ingredientsRaw && r.ingredientsRaw.length) {
    ingredientsContent = `<ul style="margin:0;padding-left:18px;font-size:.88rem;color:var(--tx2);line-height:2">${
      r.ingredientsRaw.map(ing => `<li>${(typeof ing === "string" ? ing : (ing.amount || "") + " " + (ing.unit || "") + " " + (ing.name || "")).replace(/</g, "&lt;").replace(/>/g, "&gt;").trim()}</li>`).join("")
    }</ul>`;
  } else if (r.ingredients) {
    ingredientsContent = `<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(r.ingredients || "").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>`;
  }

  // Steps — prefer structured stepsRaw array, fall back to flat text
  let stepsContent = "";
  if (r.stepsRaw && r.stepsRaw.length) {
    stepsContent = `<ol style="margin:0;padding-left:22px;font-size:.88rem;color:var(--tx2);line-height:1.8">${
      r.stepsRaw.map(s => `<li style="margin-bottom:8px">${(typeof s === "string" ? s : s.text || "").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</li>`).join("")
    }</ol>`;
  } else if (r.steps) {
    stepsContent = `<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(r.steps || "").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>`;
  }

  // Build comments HTML with pagination (first 20) and delete/report buttons
  const commentsHtml = _buildCommentsHtml(comments.slice(0, 20), id, uid, isAuthor);
  const hasMoreComments = comments.length > 20;

  // Star rating input — allows user to rate 1-5 (disabled for recipe author)
  const myRatingVal = myRating?.rating || 0;
  const ratingStars = isAuthor
    ? `<div style="font-size:.78rem;color:var(--mt);font-style:italic">You can't rate your own recipe</div>`
    : Array.from({ length: 5 }, (_, i) =>
        `<span class="star${i < myRatingVal ? " on" : ""}" onclick="rateComRecipe('${id}',${i + 1})" style="cursor:pointer;font-size:1.3rem">${i < myRatingVal ? "★" : "☆"}</span>`
      ).join("");

  // Publish/unpublish button (only for the recipe author)
  const publishBtn = isAuthor
    ? `<button class="btn bd bsm" onclick="unpublishComRecipe('${id}')" style="margin-top:12px;width:100%">🚫 Unpublish this recipe</button>`
    : "";

  // Report button for the recipe (subtle, not shown to author)
  const reportRecipeBtn = !isAuthor && uid
    ? `<button class="btn-report" onclick="openReportSheet('recipe','${id}','${id}')" title="Report recipe">🚩 Report</button>`
    : "";

  g("erecbody").innerHTML = `
    ${coverImg}
    <div style="margin-bottom:14px">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px">
        <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;line-height:1.3;margin-bottom:6px;flex:1">${r.title || "Untitled"}</div>
        ${reportRecipeBtn}
      </div>
      ${r.cuisine ? `<div style="font-size:.78rem;color:var(--ac);font-weight:600;margin-bottom:6px">${r.cuisine}</div>` : ""}
      ${ratingHtml}
      <div style="font-size:.76rem;color:var(--mt)">by ${author} · ${r.createdAt ? new Date(r.createdAt).toLocaleDateString() : ""}</div>
      ${tagsHtml ? `<div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:8px">${tagsHtml}</div>` : ""}
    </div>

    ${metaHtml}

    <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap">
      <button class="btn ${isLiked ? "bp" : "bs"} bsm" onclick="likeComRecipe('${id}')" id="com-like-btn">
        ${isLiked ? "❤️" : "🤍"} ${r.likes || 0} Like${(r.likes || 0) !== 1 ? "s" : ""}
      </button>
      <button class="btn bs bsm" style="flex:1" onclick="saveComToKitchen('${id}')">📖 Save to my recipes</button>
      <button class="btn bs bsm" onclick="shareComRecipe('${id}')">📤 Share</button>
    </div>

    ${ingredientsContent ? `<div class="frow"><label class="flbl">Ingredients</label>${ingredientsContent}</div>` : ""}
    ${stepsContent ? `<div class="frow"><label class="flbl">Instructions</label>${stepsContent}</div>` : ""}

    <div style="background:var(--card);border:1px solid var(--b2);border-radius:12px;padding:14px;margin-top:16px">
      <div class="flbl" style="margin-bottom:8px">Rate this recipe</div>
      <div id="com-rating-stars" style="display:flex;align-items:center;gap:2px">${ratingStars}</div>
      ${myRatingVal ? `<div id="com-rating-label" style="font-size:.72rem;color:var(--mt);margin-top:4px">You rated this ${myRatingVal}★</div>` : '<div id="com-rating-label"></div>'}
    </div>

    <div style="margin-top:16px">
      <div class="flbl" style="margin-bottom:10px">Comments (${comments.length})</div>
      <div id="com-comments">${commentsHtml || '<div style="font-size:.82rem;color:var(--mt);padding:8px 0">No comments yet.</div>'}</div>
      ${hasMoreComments ? `<button class="btn bs bsm" id="com-load-more" onclick="loadMoreComments()" style="width:100%;margin-top:8px">Load more comments (${comments.length - 20} remaining)</button>` : ""}
      <div style="display:flex;gap:8px;margin-top:12px">
        <input class="fi" id="com-cmt-input" placeholder="Add a comment…" maxlength="500" style="flex:1" onkeydown="if(event.key==='Enter')addComComment('${id}')"/>
        <button class="btn bp bsm" onclick="addComComment('${id}')">Post</button>
      </div>
      <div style="font-size:.68rem;color:var(--mt);margin-top:4px;text-align:right" id="com-cmt-counter">0 / 500</div>
    </div>

    <div style="margin-top:16px;padding:12px;background:var(--card);border:1px solid var(--b1);border-radius:12px">
      <div style="font-size:.72rem;color:var(--mt);margin-bottom:6px">Share link (viewable without sign-in)</div>
      <div style="font-size:.8rem;color:var(--ac);word-break:break-all;cursor:pointer" onclick="navigator.clipboard.writeText('${shareUrl}');showNotif('Link copied!')">${shareUrl}</div>
    </div>

    ${publishBtn}`;

  // Wire up the character counter on the comment input
  const cmtInput = g("com-cmt-input");
  if (cmtInput) {
    cmtInput.addEventListener("input", () => {
      const counter = g("com-cmt-counter");
      if (counter) counter.textContent = `${cmtInput.value.length} / 500`;
    });
  }

  showOv("erec");
}

/**
 * submitComReview — submit a star rating for a community recipe (legacy wrapper).
 * Now delegates to rateComRecipe which uses the new ratings subcollection.
 */
export async function submitComReview(id, rating) {
  return rateComRecipe(id, rating);
}

/**
 * rateComRecipe — submit or update a 1-5 star rating on a community recipe.
 * Uses the per-user ratings subcollection (public_recipes/{id}/ratings/{uid}).
 * Recipe authors cannot rate their own recipes (enforced by submitRating in db.js).
 */
export async function rateComRecipe(id, rating) {
  const user = getCurrentUser();
  if (!user) { showNotif("Sign in to rate recipes"); return; }

  try {
    const result = await submitRating(id, rating);

    // submitRating returns null if the user is the recipe author
    if (!result) { showNotif("You can't rate your own recipe"); return; }

    // Update local cache with the new aggregate values
    const r = state.comRecs.find(x => x.id === id);
    if (r) {
      r.ratingSum = result.ratingSum;
      r.ratingCount = result.ratingCount;
      r.avgRating = result.avgRating;
    }

    // Update the star display in the detail overlay
    const starsEl = g("com-rating-stars");
    if (starsEl) {
      starsEl.innerHTML = Array.from({ length: 5 }, (_, i) =>
        `<span class="star${i < rating ? " on" : ""}" onclick="rateComRecipe('${id}',${i + 1})" style="cursor:pointer;font-size:1.3rem">${i < rating ? "★" : "☆"}</span>`
      ).join("");
    }
    // Update the "You rated" label
    const labelEl = g("com-rating-label");
    if (labelEl) labelEl.textContent = `You rated this ${rating}★`;

    showNotif(`Rated ${rating}★`);
  } catch (e) {
    console.error("rateComRecipe:", e);
    showNotif("Couldn't submit rating");
  }
}

/**
 * unpublishComRecipe — unpublishes the current user's recipe from the community.
 * Only callable by the recipe author. Removes from public_recipes collection.
 */
export async function unpublishComRecipe(id) {
  if (!confirm("Remove this recipe from the community?")) return;

  try {
    await unpublishRecipe(id);
    // Remove from local cache and re-render
    state.comRecs = state.comRecs.filter(r => r.id !== id);
    showNotif("Recipe unpublished");
    hideOv("erec");
    renderCommunity();
  } catch (e) {
    console.error("unpublishComRecipe:", e);
    showNotif("Couldn't unpublish recipe");
  }
}

/**
 * likeComRecipe — toggles the current user's like on a community recipe.
 * Updates the like count in the UI and persists to Firestore.
 */
export async function likeComRecipe(id) {
  const user = getCurrentUser();
  if (!user) { showNotif("Sign in to like recipes"); return; }

  const wasLiked = state.myLikes.has(id);

  try {
    await toggleLike(id, wasLiked);

    // Update local state
    if (wasLiked) state.myLikes.delete(id); else state.myLikes.add(id);

    // Update the like count in the cached community recipes
    const r = state.comRecs.find(x => x.id === id);
    if (r) r.likes = (r.likes || 0) + (wasLiked ? -1 : 1);

    // Update the button in the detail overlay
    const btn = g("com-like-btn");
    if (btn) {
      const isNowLiked = state.myLikes.has(id);
      btn.className = `btn ${isNowLiked ? "bp" : "bs"} bsm`;
      btn.innerHTML = `${isNowLiked ? "❤️" : "🤍"} ${r?.likes || 0} Like${(r?.likes || 0) !== 1 ? "s" : ""}`;
    }

    showNotif(wasLiked ? "Like removed" : "Liked!");
  } catch (e) {
    console.error("likeComRecipe:", e);
    showNotif("Couldn't update like");
  }
}

/**
 * saveComToKitchen — saves a community recipe to the user's household recipes.
 * Copies the public recipe data into households/{hid}/recipes/ with a new ID.
 */
export async function saveComToKitchen(id) {
  const user = getCurrentUser();
  if (!user) { showNotif("Sign in to save recipes"); return; }

  const r = state.comRecs.find(x => x.id === id);
  if (!r) return;

  try {
    await saveRecipeToKitchen(r);
    showNotif("Recipe saved to your kitchen! 📖");
    hideOv("erec");
  } catch (e) {
    console.error("saveComToKitchen:", e);
    showNotif("Couldn't save recipe");
  }
}

/**
 * addComComment — posts a new comment on a community recipe.
 * Enforces 500-character limit, persists to Firestore, and appends inline.
 * Also notifies the recipe author (handled by addComment in db.js).
 */
export async function addComComment(id) {
  const user = getCurrentUser();
  if (!user) { showNotif("Sign in to comment"); return; }

  const input = g("com-cmt-input");
  const text = input?.value?.trim();
  if (!text) return;

  // Enforce 500-character limit
  if (text.length > 500) {
    showNotif("Comment must be 500 characters or less");
    return;
  }

  const authorName = user.displayName || localStorage.getItem("ks-who") || "Anonymous";

  try {
    const cmt = await addComment(id, text, authorName);
    input.value = "";
    // Reset character counter
    const counter = g("com-cmt-counter");
    if (counter) counter.textContent = "0 / 500";

    // Append the new comment to the DOM without a full reload
    const container = g("com-comments");
    const r = state.comRecs.find(x => x.id === id);
    const isAuthor = user.uid === r?.authorUid;

    if (container && cmt) {
      // Remove "no comments" placeholder if present
      if (container.querySelector("div[style*='color:var(--mt)']") && !container.querySelector("div[style*='border-bottom']")) {
        container.innerHTML = "";
      }
      // Build comment HTML with delete button (user can always delete own comments)
      container.innerHTML += _buildSingleCommentHtml(cmt, id, user.uid, isAuthor);
    }

    // Add to cached comments array
    if (state._comComments) state._comComments.push(cmt);

    showNotif("Comment posted!");
  } catch (e) {
    console.error("addComComment:", e);
    showNotif("Couldn't post comment");
  }
}

/**
 * shareComRecipe — shares a community recipe link via Web Share API or clipboard.
 */
export async function shareComRecipe(id) {
  const r = state.comRecs.find(x => x.id === id);
  const url = `https://pantry-app-zeta-six.vercel.app/recipe/${id}`;
  const title = r?.title || "Recipe";

  if (navigator.share) {
    try {
      await navigator.share({ title, text: `Check out this recipe: ${title}`, url });
      return;
    } catch { /* user cancelled or share failed — fall through to clipboard */ }
  }

  try {
    await navigator.clipboard.writeText(url);
    showNotif("Link copied!");
  } catch {
    showNotif("Couldn't copy link");
  }
}

// ── COMMENT HELPERS ──────────────────────────────────────────────────────
// Build HTML for a single comment row and for the paginated comments list.

/**
 * _buildSingleCommentHtml — renders one comment with author, date, text,
 * and action buttons (delete for author/recipe-owner, report for others).
 */
function _buildSingleCommentHtml(c, recipeId, currentUid, isRecipeAuthor) {
  const displayName = (c.authorUsername ? "@" + c.authorUsername : c.authorName) || "Anonymous";
  const dateStr = c.createdAt ? new Date(c.createdAt).toLocaleDateString() : "";
  const escapedText = (c.text || "").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  // Show delete if the current user wrote this comment OR is the recipe author
  const canDelete = currentUid && (c.authorUid === currentUid || isRecipeAuthor);
  // Show report if signed in, not the comment author, and not the recipe author
  const canReport = currentUid && c.authorUid !== currentUid;

  let actions = "";
  if (canDelete) {
    actions += `<button class="btn-report" onclick="deleteComComment('${recipeId}','${c.id}')" title="Delete comment" style="font-size:.7rem">🗑</button>`;
  }
  if (canReport) {
    actions += `<button class="btn-report" onclick="openReportSheet('comment','${c.id}','${recipeId}')" title="Report comment" style="font-size:.7rem">🚩</button>`;
  }

  return `<div class="com-comment-row" id="cmt-${c.id}" style="padding:10px 0;border-bottom:1px solid var(--b1)">
    <div style="display:flex;justify-content:space-between;align-items:center">
      <span style="font-size:.78rem;font-weight:600">${displayName}</span>
      <div style="display:flex;align-items:center;gap:6px">
        ${actions}
        <span style="font-size:.68rem;color:var(--mt)">${dateStr}</span>
      </div>
    </div>
    <div style="font-size:.84rem;color:var(--tx2);margin-top:4px;line-height:1.5">${escapedText}</div>
  </div>`;
}

/**
 * _buildCommentsHtml — renders the first page of comments (up to 20).
 * Each comment gets delete/report action buttons based on permissions.
 */
function _buildCommentsHtml(comments, recipeId, currentUid, isRecipeAuthor) {
  if (!comments.length) return "";
  return comments.map(c => _buildSingleCommentHtml(c, recipeId, currentUid, isRecipeAuthor)).join("");
}

/**
 * loadMoreComments — loads the next batch of 20 comments and appends them.
 * Called by the "Load more" button in the comment section.
 */
export function loadMoreComments() {
  const id = state._openComId;
  const uid = getCurrentUser()?.uid;
  const r = state.comRecs.find(x => x.id === id);
  const isAuthor = uid && uid === r?.authorUid;
  const container = g("com-comments");
  if (!container || !state._comComments) return;

  // Count how many comments are currently displayed
  const displayed = container.querySelectorAll(".com-comment-row").length;
  const nextBatch = state._comComments.slice(displayed, displayed + 20);

  if (nextBatch.length) {
    const html = nextBatch.map(c => _buildSingleCommentHtml(c, id, uid, isAuthor)).join("");
    container.insertAdjacentHTML("beforeend", html);
  }

  // Update or remove the "Load more" button
  const remaining = state._comComments.length - displayed - nextBatch.length;
  const btn = g("com-load-more");
  if (btn) {
    if (remaining > 0) {
      btn.textContent = `Load more comments (${remaining} remaining)`;
    } else {
      btn.remove();
    }
  }
}

/**
 * deleteComComment — deletes a comment from a community recipe.
 * Allowed for comment author or recipe author. Removes from DOM and Firestore.
 */
export async function deleteComComment(recipeId, commentId) {
  if (!confirm("Delete this comment?")) return;

  try {
    await deleteComment(recipeId, commentId);

    // Remove from DOM
    const el = document.getElementById("cmt-" + commentId);
    if (el) el.remove();

    // Remove from cached comments
    if (state._comComments) {
      state._comComments = state._comComments.filter(c => c.id !== commentId);
    }

    showNotif("Comment deleted");
  } catch (e) {
    console.error("deleteComComment:", e);
    showNotif("Couldn't delete comment");
  }
}

// ── REPORT SYSTEM ────────────────────────────────────────────────────────
// Report sheet shows a bottom sheet with reason options. After submission,
// a report doc is created in the top-level reports collection.

/**
 * openReportSheet — shows the report reason bottom sheet for a recipe or comment.
 * Stores the target info in state so submitComReport can read it.
 */
export function openReportSheet(type, targetId, recipeId) {
  const user = getCurrentUser();
  if (!user) { showNotif("Sign in to report content"); return; }

  // Store report context for the submit handler
  state._reportTarget = { type, targetId, recipeId };

  // Show the report bottom sheet and its backdrop
  const sheet = g("report-sheet");
  const backdrop = g("reportBackdrop");
  if (sheet) sheet.classList.add("active");
  if (backdrop) backdrop.classList.add("active");
}

/**
 * closeReportSheet — hides the report bottom sheet.
 */
export function closeReportSheet() {
  const sheet = g("report-sheet");
  const backdrop = g("reportBackdrop");
  if (sheet) sheet.classList.remove("active");
  if (backdrop) backdrop.classList.remove("active");
  state._reportTarget = null;
}

/**
 * submitComReport — submits a report with the selected reason.
 * Called when the user picks a reason from the report sheet.
 */
export async function submitComReport(reason) {
  const target = state._reportTarget;
  if (!target) return;

  try {
    const result = await submitReport(target.type, target.targetId, reason, target.recipeId);

    if (result === "duplicate") {
      showNotif("You've already reported this");
    } else {
      showNotif("Thanks for your report");
    }
  } catch (e) {
    console.error("submitComReport:", e);
    showNotif("Couldn't submit report");
  }

  closeReportSheet();
}

// ── NOTIFICATIONS ────────────────────────────────────────────────────────
// Notification badge on the Recipes tab, notification list, and read handling.

/**
 * updateNotifBadge — checks for unread notifications and shows/hides the
 * badge on the Recipes nav tab. Called on app boot and after actions.
 */
export async function updateNotifBadge() {
  try {
    const count = await getUnreadNotifCount();
    const badgeText = count > 9 ? "9+" : String(count);
    const show = count > 0;

    // Update the nav tab badge
    const badge = g("recipes-notif-badge");
    if (badge) {
      badge.textContent = badgeText;
      badge.style.display = show ? "flex" : "none";
    }
    // Update the header bell badge
    const hdrBadge = g("recipes-notif-badge-hdr");
    if (hdrBadge) {
      hdrBadge.textContent = badgeText;
      hdrBadge.style.display = show ? "flex" : "none";
    }
  } catch { /* best-effort badge update */ }
}

/**
 * openNotifications — opens the notification list overlay.
 * Fetches all notifications and renders them as a list.
 */
export async function openNotifications() {
  const user = getCurrentUser();
  if (!user) { showNotif("Sign in to view notifications"); return; }

  try {
    const notifs = await listNotifications();

    // Mark all as read (fire-and-forget)
    markAllNotificationsRead().then(() => updateNotifBadge());

    const body = g("erecbody");
    if (!body) return;

    let html = `<div style="margin-bottom:14px">
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;margin-bottom:6px">Notifications</div>
      <div style="font-size:.76rem;color:var(--mt)">${notifs.length ? notifs.length + " notification" + (notifs.length !== 1 ? "s" : "") : "No notifications yet"}</div>
    </div>`;

    if (!notifs.length) {
      html += `<div class="es"><div class="ei">🔔</div><p>When someone comments on your recipe, you'll see it here.</p></div>`;
    } else {
      notifs.forEach(n => {
        const isUnread = !n.read;
        const dateStr = n.createdAt ? new Date(n.createdAt).toLocaleDateString() : "";

        if (n.type === "comment") {
          html += `<div class="rcd" style="${isUnread ? "border-left:3px solid var(--ac);" : ""}" onclick="openComRecipeFromNotif('${n.recipeId}')">
            <div style="font-size:.84rem;font-weight:${isUnread ? "600" : "400"};line-height:1.5">
              <span style="color:var(--ac)">${(n.commenterUsername || "Someone").replace(/</g, "&lt;")}</span> commented on your recipe
              <span style="font-weight:600">${(n.recipeName || "").replace(/</g, "&lt;")}</span>
            </div>
            <div style="font-size:.68rem;color:var(--mt);margin-top:4px">${dateStr}</div>
          </div>`;
        }
      });
    }

    body.innerHTML = html;
    showOv("erec");
  } catch (e) {
    console.error("openNotifications:", e);
    showNotif("Couldn't load notifications");
  }
}

/**
 * openComRecipeFromNotif — opens a community recipe from a notification tap.
 * Fetches the recipe if not already in local cache, then opens the detail view.
 */
export async function openComRecipeFromNotif(recipeId) {
  hideOv("erec");

  // Ensure community recipes are loaded
  if (!state.comRecs.length) {
    try {
      state.comRecs = await listPublicRecipes();
    } catch { /* will fail gracefully in openComRecipe */ }
  }

  // If recipe is in cache, open it directly
  if (state.comRecs.find(x => x.id === recipeId)) {
    // Switch to community tab first
    state.rt = "community";
    document.querySelectorAll(".rtab").forEach(x => x.classList.remove("active"));
    const el = g("rtab-community");
    if (el) el.classList.add("active");

    setTimeout(() => openComRecipe(recipeId), 100);
  } else {
    // Recipe not in cache — try fetching it directly
    try {
      const r = await getPublicRecipe(recipeId);
      if (r) {
        state.comRecs.push({ id: recipeId, ...r });
        state.rt = "community";
        setTimeout(() => openComRecipe(recipeId), 100);
      } else {
        showNotif("Recipe no longer available");
      }
    } catch {
      showNotif("Couldn't load recipe");
    }
  }
}
