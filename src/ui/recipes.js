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
import { svr, dlr, dbSet, svShopItem, publishRecipe, unpublishRecipe, listPublicRecipes, getPublicRecipe, toggleLike, addComment, listComments, checkMyLike, saveRecipeToKitchen, addReview, listReviews, checkMyReview, submitRating, getMyRating, deleteComment, submitReport, listNotifications, markNotificationRead, markAllNotificationsRead, getUnreadNotifCount } from '../db.js';
import { g, fmtR, showNotif, showOv, hideOv, renderStars } from '../helpers.js';
import { getCurrentUser } from '../auth.js';
import { uploadRecipeCover, uploadStepPhoto, uploadCommentPhoto, deleteRecipeStorageFile } from '../storage.js';
// g = getElementById shorthand, fmtR = format AI response text to HTML,
// showNotif = toast notification, showOv/hideOv = show/hide overlay panels,
// renderStars = re-render a star-rating widget, getCurrentUser = Firebase user

// ── MODULE-LEVEL STATE ──────────────────────────────────────────────────────
// Tracks whether the recipe overlay is in read-only or edit mode,
// pending cover photo for upload, and step photo data during editing.
let _recipeViewMode = "view"; // "view" or "edit" — controls overlay behavior
let _pendingCoverFile = null; // File object for a cover photo selected but not yet uploaded
let _pendingStepPhotos = {};  // { stepIndex: File } — step photos selected during editing
let _pendingCommentPhotos = []; // Array of File objects for comment photo attachments
let _photoViewerImages = [];  // Array of image URLs for the fullscreen photo viewer
let _photoViewerIndex = 0;    // Current index in the photo viewer

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

  // Assemble the full card — tapping opens the read-only view (not edit).
  // stopPropagation on the heart so tapping it doesn't also open the recipe.
  return `<div class="rcd${r.favorited ? " fav" : ""}" onclick="openRecipeView('${r.id}')">${imgHtml}<div class="rrow"><div class="rnm">${r.name}</div><div class="rfav" onclick="event.stopPropagation();togFav('${r.id}')">${r.favorited ? "❤️" : "🤍"}</div></div><div class="stars">${st}</div>${metaHtml}${r.description ? `<div class="rnot" style="color:var(--tx2);margin-top:6px">${r.description.substring(0, 100)}${r.description.length > 100 ? "…" : ""}</div>` : ""}${r.notes ? `<div class="rnot">${r.notes}</div>` : ""}<div class="rmeta"><span>${r.savedAt}</span>${srcLink}</div></div>`;
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
  else if (state.rt === "quick") f = f.filter(r => (r.tags || []).includes("Quick"));
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

// ── BULK IMPORT ─────────────────────────────────────────────────────────────

/**
 * setImportMode — toggles between "Import one" and "Import many" panes.
 * Highlights the active tab and shows/hides the corresponding pane.
 * @param {string} mode - "one" for single URL, "many" for bulk import
 */
export function setImportMode(mode) {
  const onePane = g("importOnePane");
  const manyPane = g("importManyPane");
  const oneTab = g("importOneTab");
  const manyTab = g("importManyTab");

  // Toggle pane visibility based on selected mode
  if (onePane) onePane.style.display = mode === "one" ? "block" : "none";
  if (manyPane) manyPane.style.display = mode === "many" ? "block" : "none";

  // Highlight the active tab, reset the inactive one
  if (oneTab) {
    oneTab.style.background = mode === "one" ? "var(--ac)" : "";
    oneTab.style.color = mode === "one" ? "var(--bg)" : "";
  }
  if (manyTab) {
    manyTab.style.background = mode === "many" ? "var(--ac)" : "";
    manyTab.style.color = mode === "many" ? "var(--bg)" : "";
  }
}

/**
 * _extractUrls — extracts all valid HTTP/HTTPS URLs from free-form text.
 * Handles messy input: URLs mixed with prose, one per line, comma-separated, etc.
 * @param {string} text - raw input text that may contain URLs
 * @returns {string[]} array of unique URL strings found in the text
 */
function _extractUrls(text) {
  // Match http:// or https:// followed by non-whitespace characters
  const urlRegex = /https?:\/\/[^\s<>"'`,;)}\]]+/gi;
  const matches = text.match(urlRegex) || [];

  // Strip trailing punctuation that's likely not part of the URL (period, comma, etc.)
  const cleaned = matches.map(u => u.replace(/[.,;:!?)}\]]+$/, ""));

  // Deduplicate URLs while preserving order
  return [...new Set(cleaned)];
}

/**
 * _classifyUrl — pre-validates a URL before attempting import.
 * Flags video platforms (can't scrape), paywalled sites (may fail),
 * and private/inaccessible sources (Evernote, Google Docs, etc.)
 * @param {string} url - the URL to classify
 * @returns {{ status: "ok"|"video"|"paywall"|"private", reason: string }}
 */
function _classifyUrl(url) {
  const lower = url.toLowerCase();

  // Video platforms — these don't have scrapable recipe text
  const videoPatterns = [
    { pattern: /youtube\.com|youtu\.be/, name: "YouTube" },
    { pattern: /tiktok\.com/, name: "TikTok" },
    { pattern: /instagram\.com\/reel/, name: "Instagram Reel" },
    { pattern: /vimeo\.com/, name: "Vimeo" },
    { pattern: /twitter\.com|x\.com/, name: "X/Twitter" },
  ];
  for (const v of videoPatterns) {
    if (v.pattern.test(lower)) {
      return { status: "video", reason: `${v.name} video — can't extract recipe text` };
    }
  }

  // Private / inaccessible sources — these require login or return empty content
  const privatePatterns = [
    { pattern: /evernote\.com/, name: "Evernote" },
    { pattern: /docs\.google\.com/, name: "Google Docs" },
    { pattern: /drive\.google\.com/, name: "Google Drive" },
    { pattern: /dropbox\.com/, name: "Dropbox" },
    { pattern: /notion\.so/, name: "Notion" },
    { pattern: /onenote\.com|onedrive\.live\.com/, name: "OneDrive/OneNote" },
    { pattern: /icloud\.com/, name: "iCloud" },
    { pattern: /keep\.google\.com/, name: "Google Keep" },
  ];
  for (const p of privatePatterns) {
    if (p.pattern.test(lower)) {
      return { status: "private", reason: `${p.name} — private or inaccessible link` };
    }
  }

  // Paywall sites — may work but likely to fail or return partial data
  const paywallPatterns = [
    { pattern: /cooking\.nytimes\.com/, name: "NYT Cooking" },
    { pattern: /food52\.com/, name: "Food52" },
  ];
  for (const p of paywallPatterns) {
    if (p.pattern.test(lower)) {
      return { status: "paywall", reason: `${p.name} — may be paywalled` };
    }
  }

  return { status: "ok", reason: "" };
}

/**
 * startBulkImport — main bulk import flow. Extracts URLs from the textarea,
 * classifies them (ok / video / paywall), then imports them sequentially.
 * Each imported recipe is saved directly as a private recipe (no form review).
 * Shows real-time progress and a final summary with retry options for failures.
 */
export async function startBulkImport() {
  const textarea = g("bulkUrls");
  const rawText = textarea ? textarea.value.trim() : "";
  if (!rawText) return;

  // Extract and deduplicate all URLs from the raw text
  const allUrls = _extractUrls(rawText);
  if (!allUrls.length) {
    showNotif("No URLs found in the text");
    return;
  }

  // Pre-classify each URL to flag videos, private links, and paywalled sites
  const classified = allUrls.map(url => ({ url, ...(_classifyUrl(url)) }));
  const okUrls = classified.filter(c => c.status === "ok");
  const paywallUrls = classified.filter(c => c.status === "paywall");
  const videoUrls = classified.filter(c => c.status === "video");
  const privateUrls = classified.filter(c => c.status === "private");

  // Show the progress area and disable the button to prevent double-submits
  const progress = g("bulkImportProgress");
  if (!progress) return;
  progress.style.display = "block";

  const btn = g("bulkImportBtn");
  if (btn) btn.disabled = true;

  // Include paywall URLs (they might work) but skip video + private URLs entirely
  const toImport = [...okUrls, ...paywallUrls];

  // Track results for the final summary — private links go to skipped alongside videos
  const results = { success: [], failed: [], skipped: [...videoUrls, ...privateUrls] };

  // Import each URL sequentially with a delay to avoid API rate limits
  for (let i = 0; i < toImport.length; i++) {
    const entry = toImport[i];
    const paywallWarn = entry.status === "paywall" ? " — may be paywalled" : "";

    // 3-second delay between imports to avoid hitting Anthropic rate limits
    // (skip delay before the very first import)
    if (i > 0) {
      progress.innerHTML = `<div style="font-size:.78rem;color:var(--mt)">Waiting before next import… (${i + 1} of ${toImport.length})</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;
      await new Promise(r => setTimeout(r, 3000));
    }

    // Update progress indicator with current URL index
    progress.innerHTML = `<div style="font-size:.78rem;color:var(--mt)">Importing ${i + 1} of ${toImport.length}…${paywallWarn}</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;

    try {
      // Call the AI-powered import endpoint; _importWithRetry handles 429s
      const data = await _importWithRetry(entry.url, progress, i, toImport.length);

      if (data.success && data.recipe) {
        const recipe = data.recipe;

        // Build a formatted description from structured ingredients + steps
        const desc = _buildDescription(recipe);

        // Generate a unique ID for this recipe
        const id = "rec-" + Date.now() + "-" + Math.random().toString(36).slice(2, 6);

        // Save the recipe directly — bulk imports are ALWAYS private (no publishedId)
        await svr({
          id,
          name: recipe.title || "Untitled Recipe",
          description: desc,
          notes: recipe.notes || "",
          rating: 0,
          favorited: false,
          sourceUrl: entry.url,
          source: "AI Import",
          imageUrl: recipe.imageUrl || null,
          ingredientsRaw: recipe.ingredients || [],
          stepsRaw: recipe.steps || [],
          prepTime: recipe.prepTime || "",
          cookTime: recipe.cookTime || "",
          totalTime: recipe.totalTime || "",
          servings: recipe.servings || "",
          tags: recipe.tags || [],
          savedAt: new Date().toLocaleDateString(),
        });

        results.success.push({ url: entry.url, name: recipe.title });
      } else {
        // Use specific error reason from the API if available
        const errorMsg = _friendlyError(data.reason, data.error);
        results.failed.push({ url: entry.url, error: errorMsg });
      }
    } catch (e) {
      results.failed.push({ url: entry.url, error: e.message });
    }
  }

  // Show the final summary with success/fail/skip counts
  _renderBulkSummary(progress, results);
  if (btn) btn.disabled = false;
}

/**
 * _importWithRetry — calls the import-recipe API and auto-retries once
 * on rate limit (429) errors with a 10-second backoff. This prevents
 * rate limit failures from immediately marking the URL as failed.
 * @param {string} url - the recipe URL to import
 * @param {HTMLElement} progress - the progress DOM element for status updates
 * @param {number} idx - current index in the import queue (for display)
 * @param {number} total - total number of URLs being imported (for display)
 * @returns {Object} the parsed API response (success/error)
 */
async function _importWithRetry(url, progress, idx, total) {
  const r = await fetch("/api/import-recipe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url })
  });
  const data = await r.json();

  // If rate limited (429 or reason flag), wait 10s and retry once
  if (r.status === 429 || data.reason === "rate_limit") {
    progress.innerHTML = `<div style="font-size:.78rem;color:var(--yw,orange)">Rate limited — waiting 10s before retry… (${idx + 1} of ${total})</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;
    await new Promise(r => setTimeout(r, 10000));

    progress.innerHTML = `<div style="font-size:.78rem;color:var(--mt)">Retrying ${idx + 1} of ${total}…</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;
    const r2 = await fetch("/api/import-recipe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url })
    });
    return await r2.json();
  }

  return data;
}

/**
 * _friendlyError — converts API error reason codes into human-readable
 * messages for the bulk import summary. Falls back to the raw error string
 * if no specific reason code is provided.
 * @param {string} reason - error reason code from the API (e.g. "rate_limit", "timeout")
 * @param {string} fallback - raw error message to use if no reason code
 * @returns {string} user-friendly error description
 */
function _friendlyError(reason, fallback) {
  const messages = {
    rate_limit: "Rate limit hit — too many requests",
    timeout: "Timed out — page took too long to load",
    page_blocked: "Page blocked access (login required or bot detection)",
    page_not_found: "Page not found (404)",
    page_inaccessible: "Page not accessible",
    no_recipe: "No recipe content found on page",
    api_error: "AI parsing error",
    fetch_error: "Could not fetch page",
  };
  return messages[reason] || fallback || "Unknown error";
}

/**
 * _renderBulkSummary — renders the final results of a bulk import into
 * the progress container. Shows success count, skipped videos, and
 * failed URLs with individual retry buttons.
 * @param {HTMLElement} container - the DOM element to render into
 * @param {Object} results - { success[], failed[], skipped[] }
 */
function _renderBulkSummary(container, results) {
  let html = "";

  // Successful imports — green summary
  if (results.success.length) {
    html += `<div style="color:var(--gn);font-size:.78rem;margin-bottom:6px">✓ ${results.success.length} recipe${results.success.length > 1 ? "s" : ""} imported</div>`;
    html += `<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">`;
    results.success.forEach(s => {
      html += `<div>• ${s.name || s.url}</div>`;
    });
    html += `</div>`;
  }

  // Skipped links (video, private/inaccessible) — yellow warning
  if (results.skipped.length) {
    html += `<div style="color:var(--yw,orange);font-size:.78rem;margin-bottom:6px">⚠ ${results.skipped.length} skipped</div>`;
    html += `<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">`;
    results.skipped.forEach(s => {
      html += `<div>• ${s.url} <span style="color:var(--mt);font-size:.68rem">(${s.reason})</span></div>`;
    });
    html += `</div>`;
  }

  // Failed imports — red with specific error reason and retry buttons
  if (results.failed.length) {
    html += `<div style="color:var(--rd);font-size:.78rem;margin-bottom:6px">✗ ${results.failed.length} failed</div>`;
    html += `<div style="font-size:.72rem;margin-bottom:10px;line-height:1.8">`;
    results.failed.forEach(f => {
      html += `<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">`;
      html += `<span style="color:var(--mt);flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${f.url}</span>`;
      html += `<span style="color:var(--rd);font-size:.66rem;white-space:nowrap">${f.error}</span>`;
      html += `<button class="btn bsm" onclick="retryBulkImport('${f.url.replace(/'/g, "\\'")}')">Retry</button>`;
      html += `</div>`;
    });
    html += `</div>`;
  }

  // Handle edge case: nothing was imported at all
  if (!results.success.length && !results.failed.length && !results.skipped.length) {
    html = `<div style="font-size:.78rem;color:var(--mt)">No URLs were processed.</div>`;
  }

  container.innerHTML = html;
}

/**
 * retryBulkImport — retries importing a single failed URL from the bulk summary.
 * Runs the same import + save flow, then updates the summary in place.
 * @param {string} url - the URL to retry
 */
export async function retryBulkImport(url) {
  const progress = g("bulkImportProgress");
  if (!progress) return;

  // Show a spinner for this specific retry
  const prevHtml = progress.innerHTML;
  progress.innerHTML = `<div style="font-size:.78rem;color:var(--mt)">Retrying ${url}…</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;

  try {
    // Call the AI-powered import endpoint
    const r = await fetch("/api/import-recipe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url })
    });
    const data = await r.json();

    if (data.success && data.recipe) {
      const recipe = data.recipe;
      const desc = _buildDescription(recipe);
      const id = "rec-" + Date.now() + "-" + Math.random().toString(36).slice(2, 6);

      // Save as private recipe (no publishedId)
      await svr({
        id,
        name: recipe.title || "Untitled Recipe",
        description: desc,
        notes: recipe.notes || "",
        rating: 0,
        favorited: false,
        sourceUrl: url,
        source: "AI Import",
        imageUrl: recipe.imageUrl || null,
        ingredientsRaw: recipe.ingredients || [],
        stepsRaw: recipe.steps || [],
        prepTime: recipe.prepTime || "",
        cookTime: recipe.cookTime || "",
        totalTime: recipe.totalTime || "",
        servings: recipe.servings || "",
        tags: recipe.tags || [],
        savedAt: new Date().toLocaleDateString(),
      });

      showNotif(`Imported: ${recipe.title || "Recipe"}`);

      // Remove the retry button for this URL and show success instead
      progress.innerHTML = prevHtml.replace(
        new RegExp(`<div style="display:flex[^]*?${url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^]*?</div>\\s*</div>`),
        `<div style="color:var(--gn);font-size:.72rem">✓ ${recipe.title || url} — imported</div>`
      );
    } else {
      // Still failed — restore previous summary
      showNotif("Import failed: " + (data.error || "Unknown error"));
      progress.innerHTML = prevHtml;
    }
  } catch (e) {
    showNotif("Import failed: " + e.message);
    progress.innerHTML = prevHtml;
  }
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

  // Update the cover upload zone to show the imported image as the cover preview
  const coverZone = g("addRecCoverZone");
  if (coverZone) {
    coverZone.classList.add("has-preview");
    coverZone.innerHTML = `<img src="${imageUrl}" alt="Cover preview" onerror="this.parentElement.classList.remove('has-preview')"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('add')">✕</button>`;
  }
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

  // Generate the recipe ID early so we can use it for storage paths
  const recipeId = "rec-" + Date.now();

  // Upload pending cover photo if user selected one in the add form
  let coverUrl = imported.imageUrl || null;
  if (_pendingCoverFile) {
    try {
      showNotif("Uploading cover photo…");
      coverUrl = await uploadRecipeCover(_pendingCoverFile, recipeId);
      _pendingCoverFile = null;
    } catch (e) {
      console.error("Cover upload failed:", e);
      showNotif("Cover photo upload failed — saving recipe without it");
    }
  }

  // Build the recipe object with both flat text and structured data
  const recipe = {
    id: recipeId,
    name: nm,
    rating: state.nr,
    favorited: false,
    notes: g("rnotes").value.trim(),
    description: desc,
    source: srcUrl ? "AI Import" : "Manual",
    sourceUrl: srcUrl || null,
    imageUrl: coverUrl,
    tags,
    cuisine,
    prepTime: imported.prepTime || "",
    cookTime: imported.cookTime || "",
    totalTime: imported.totalTime || "",
    servings: imported.servings || "",
    ingredientsRaw: imported.ingredientsRaw || [],
    stepsRaw: imported.stepsRaw || [],
    stepPhotos: {},
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

  // Remove the image preview if it was shown (from AI import)
  const imgPreview = document.getElementById("rimgpreview");
  if (imgPreview) imgPreview.remove();

  // Reset the cover photo upload zone
  const coverZone = g("addRecCoverZone");
  if (coverZone) {
    coverZone.classList.remove("has-preview");
    coverZone.innerHTML = `<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop</div>`;
  }

  // Reset the publish toggle
  if (pubToggle) pubToggle.classList.remove("on");

  // Reset the import status text
  const urlStatus = g("rurlstatus");
  if (urlStatus) { urlStatus.style.display = "none"; urlStatus.textContent = ""; }

  showNotif("Recipe saved! 📖");
  hideOv("arec"); // close the Add Recipe overlay
}

// ── READ-ONLY RECIPE VIEW ────────────────────────────────────────────────────
// A clean, cookbook-style view shown when a user taps a saved recipe card.
// Shows cover photo, title, metadata, ingredients, numbered steps with optional
// step photos, and action buttons. An "Edit" pencil button switches to edit mode.

/**
 * openRecipeView — opens a read-only cookbook-style view for a saved recipe.
 * This is the default view when tapping a recipe card. The edit overlay
 * (openER) is accessed via the pencil button in the top-right corner.
 */
export function openRecipeView(id) {
  const r = state.recs.find(r => r.id === id);
  if (!r) return;
  state.eid = id;
  _recipeViewMode = "view";

  // Update overlay header for read-only mode
  const titleEl = g("erecTitle");
  if (titleEl) titleEl.textContent = "Recipe";

  // ── Cover photo or tasteful placeholder ──
  let coverHtml;
  if (r.imageUrl) {
    coverHtml = `<div class="rv-cover">
      <img src="${r.imageUrl}" alt="${(r.name || "").replace(/"/g, "&quot;")}" onerror="this.parentElement.style.display='none'"/>
      <div class="rv-edit-btn" onclick="openER('${r.id}')" title="Edit recipe">✏️</div>
    </div>`;
  } else {
    coverHtml = `<div class="rv-cover-placeholder">
      <div class="rv-cover-title">${(r.name || "Untitled").replace(/</g, "&lt;")}</div>
      <div class="rv-edit-btn" onclick="openER('${r.id}')" title="Edit recipe">✏️</div>
    </div>`;
  }

  // ── Recipe header — title (shown again if cover has image), description ──
  const showTitleAgain = r.imageUrl; // only show title below image if we have a cover photo
  const headerHtml = `<div class="rv-header">
    ${showTitleAgain ? `<div class="rv-title">${(r.name || "").replace(/</g, "&lt;")}</div>` : ""}
    ${r.rating ? `<div class="stars" style="margin-bottom:6px">${Array.from({length:5},(_,i)=>`<span class="star${i<r.rating?" on":""}">` + (i<r.rating?"★":"☆") + "</span>").join("")}</div>` : ""}
    ${r.savedAt ? `<div class="rv-author">Saved ${r.savedAt}${r.source && r.source !== "Manual" ? ` · ${r.source}` : ""}${r.cookCount ? ` · Cooked ${r.cookCount}×` : ""}</div>` : ""}
  </div>`;

  // ── Metadata pills — prep, cook, total time, servings ──
  const metaParts = [
    r.prepTime ? `🔪 Prep: ${r.prepTime}` : "",
    r.cookTime ? `🔥 Cook: ${r.cookTime}` : "",
    r.totalTime ? `⏱ Total: ${r.totalTime}` : "",
    r.servings ? `🍽 Serves: ${r.servings}` : "",
  ].filter(Boolean);
  const metaHtml = metaParts.length
    ? `<div class="rv-meta">${metaParts.map(m => `<div class="rv-meta-pill">${m}</div>`).join("")}</div>`
    : "";

  // ── Cuisine and tags ──
  const cuisineHtml = r.cuisine ? `<div class="rv-cuisine">${r.cuisine}</div>` : "";
  const tagsHtml = (r.tags || []).length
    ? `<div class="rv-tags">${r.tags.map(t => `<span class="com-tag">${t}</span>`).join("")}</div>`
    : "";

  // ── Ingredients section — prefer structured ingredientsRaw, fall back to description ──
  let ingredientsHtml = "";
  if (r.ingredientsRaw && r.ingredientsRaw.length) {
    const items = r.ingredientsRaw.map(ing => {
      if (typeof ing === "string") return `<li>${_esc(ing)}</li>`;
      const amt = [ing.amount, ing.unit].filter(Boolean).join(" ");
      return `<li>${amt ? `<strong>${_esc(amt)}</strong> ` : ""}${_esc(ing.name || "")}</li>`;
    }).join("");
    ingredientsHtml = `<div class="rv-section">Ingredients</div><ul class="rv-ingredients">${items}</ul>`;
  } else if (r.description) {
    // Try to extract ingredients section from description text
    const descLines = r.description.split("\n");
    const ingStart = descLines.findIndex(l => /^ingredients/i.test(l.trim()));
    const stepsStart = descLines.findIndex(l => /^steps/i.test(l.trim()));
    if (ingStart >= 0) {
      const end = stepsStart > ingStart ? stepsStart : descLines.length;
      const ingLines = descLines.slice(ingStart + 1, end).filter(l => l.trim());
      if (ingLines.length) {
        ingredientsHtml = `<div class="rv-section">Ingredients</div><ul class="rv-ingredients">${ingLines.map(l => `<li>${_esc(l.replace(/^[-•*]\s*/, ""))}</li>`).join("")}</ul>`;
      }
    }
  }

  // ── Steps section — prefer structured stepsRaw, fall back to description ──
  let stepsHtml = "";
  if (r.stepsRaw && r.stepsRaw.length) {
    const items = r.stepsRaw.map((s, i) => {
      const text = typeof s === "string" ? s : (s.text || "");
      // Check for step photo URL stored on the recipe
      const stepPhotoUrl = r.stepPhotos?.[i];
      const photoHtml = stepPhotoUrl
        ? `<div class="rv-step-photo" onclick="openPhotoViewer(['${stepPhotoUrl}'],0)"><img src="${stepPhotoUrl}" alt="Step ${i + 1}" onerror="this.parentElement.style.display='none'"/></div>`
        : "";
      return `<li>${_esc(text)}${photoHtml}</li>`;
    }).join("");
    stepsHtml = `<div class="rv-section">Instructions</div><ol class="rv-steps">${items}</ol>`;
  } else if (r.description) {
    // Try to extract steps section from description text
    const descLines = r.description.split("\n");
    const stepsStart = descLines.findIndex(l => /^steps/i.test(l.trim()));
    if (stepsStart >= 0) {
      const stepLines = descLines.slice(stepsStart + 1).filter(l => l.trim());
      if (stepLines.length) {
        stepsHtml = `<div class="rv-section">Instructions</div><ol class="rv-steps">${stepLines.map(l => `<li>${_esc(l.replace(/^\d+\.\s*/, ""))}</li>`).join("")}</ol>`;
      }
    }
  }

  // ── If no structured data at all, show raw description ──
  let rawDescHtml = "";
  if (!ingredientsHtml && !stepsHtml && r.description) {
    rawDescHtml = `<div class="rv-section">Details</div><div style="font-size:.88rem;color:var(--tx2);line-height:1.8;white-space:pre-wrap">${_esc(r.description)}</div>`;
  }

  // ── Notes ──
  const notesHtml = r.notes
    ? `<div class="rv-section">Notes</div><div style="font-size:.86rem;color:var(--tx2);line-height:1.6;font-style:italic;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">${_esc(r.notes)}</div>`
    : "";

  // ── Source link ──
  const sourceHtml = r.sourceUrl
    ? `<div style="margin-top:16px"><a href="${r.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);text-decoration:none">🔗 View original recipe ↗</a></div>`
    : "";

  // ── Action buttons ──
  const actionsHtml = `<div class="rv-actions">
    <button class="btn bp bsm" style="flex:1" onclick="scheduleRecipe('${r.name.replace(/'/g, "\\'")}')">📅 Schedule</button>
    <button class="btn bs bsm" style="flex:1" onclick="addRecIngToShop('${r.id}')">🛒 Shop ingredients</button>
    <button class="btn bs bsm" onclick="openER('${r.id}')">✏️ Edit</button>
  </div>`;

  // ── Assemble the full read-only view ──
  g("erecbody").innerHTML = `
    ${coverHtml}
    ${headerHtml}
    ${metaHtml}
    ${cuisineHtml}
    ${tagsHtml}
    ${actionsHtml}
    ${ingredientsHtml}
    ${stepsHtml}
    ${rawDescHtml}
    ${notesHtml}
    ${sourceHtml}
  `;

  showOv("erec");
}

/**
 * handleRecipeBack — handles the back button in the recipe overlay.
 * If in edit mode, goes back to read-only view. If in read-only, closes the overlay.
 */
export function handleRecipeBack() {
  if (_recipeViewMode === "edit" && state.eid) {
    // Go back to read-only view instead of closing
    openRecipeView(state.eid);
  } else {
    hideOv("erec");
  }
}

/**
 * _esc — escapes HTML special characters to prevent XSS in user content.
 */
function _esc(str) {
  return (str || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// ── EDIT RECIPE OVERLAY ──────────────────────────────────────────────────────

/**
 * Opens the Edit Recipe overlay for a given recipe ID. Builds a rich detail
 * view with: cover photo upload, action buttons (schedule, shop ingredients),
 * a serving-size scaler, editable fields (name, rating, tags, description,
 * notes, favorite toggle), step photo uploads, and delete/save buttons.
 */
export function openER(id) {
  const r = state.recs.find(r => r.id === id); if (!r) return;
  state.eid = id; // store which recipe is being edited for updR() and delER()
  _recipeViewMode = "edit"; // mark overlay as being in edit mode
  _pendingCoverFile = null;  // reset pending cover upload
  _pendingStepPhotos = {};   // reset pending step photo uploads

  // Update overlay header for edit mode
  const titleEl = g("erecTitle");
  if (titleEl) titleEl.textContent = "Edit Recipe";

  // Build the star rating display with click handlers for editing
  const rt2 = r.rating || 0;
  const st = Array.from({ length: 5 }, (_, i) => `<span class="star${i < rt2 ? " on" : ""}" onclick="setStar(${i + 1},'e')">${i < rt2 ? "★" : "☆"}</span>`).join("");

  // If the recipe was imported from a URL, show a clickable link to the original
  const srcLink = r.sourceUrl ? `<div class="frow"><label class="flbl">Original</label><a href="${r.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);word-break:break-all">${r.sourceUrl}</a></div>` : "";

  // Build curated tag pills grouped by category, pre-selecting tags the recipe already has
  const _t = r.tags || [];
  const _sel = (tag) => _t.includes(tag) ? " sel" : "";
  const tagsHtml = `<div class="frow"><label class="flbl">Tags</label><div class="tags-grid" id="etags">
    <div class="tag-cat">Meal Type</div>
    <div class="tag${_sel("Breakfast")}" data-tag="Breakfast" onclick="togTag(this)">🌅 Breakfast</div>
    <div class="tag${_sel("Lunch")}" data-tag="Lunch" onclick="togTag(this)">🥪 Lunch</div>
    <div class="tag${_sel("Dinner")}" data-tag="Dinner" onclick="togTag(this)">🍽️ Dinner</div>
    <div class="tag${_sel("Snack")}" data-tag="Snack" onclick="togTag(this)">🍿 Snack</div>
    <div class="tag${_sel("Dessert")}" data-tag="Dessert" onclick="togTag(this)">🎂 Dessert</div>
    <div class="tag${_sel("Drinks")}" data-tag="Drinks" onclick="togTag(this)">🥤 Drinks</div>
    <div class="tag${_sel("Brunch")}" data-tag="Brunch" onclick="togTag(this)">🥣 Brunch</div>
    <div class="tag${_sel("Bread & Baking")}" data-tag="Bread & Baking" onclick="togTag(this)">🍞 Bread & Baking</div>
    <div class="tag${_sel("Sauce & Condiment")}" data-tag="Sauce & Condiment" onclick="togTag(this)">🫙 Sauce & Condiment</div>
    <div class="tag${_sel("Preserve & Pickle")}" data-tag="Preserve & Pickle" onclick="togTag(this)">🥫 Preserve & Pickle</div>
    <div class="tag-cat">Diet & Lifestyle</div>
    <div class="tag${_sel("Vegetarian")}" data-tag="Vegetarian" onclick="togTag(this)">🌱 Vegetarian</div>
    <div class="tag${_sel("Vegan")}" data-tag="Vegan" onclick="togTag(this)">🌿 Vegan</div>
    <div class="tag${_sel("Pescatarian")}" data-tag="Pescatarian" onclick="togTag(this)">🐟 Pescatarian</div>
    <div class="tag${_sel("Meat")}" data-tag="Meat" onclick="togTag(this)">🥩 Meat</div>
    <div class="tag${_sel("Gluten-Free")}" data-tag="Gluten-Free" onclick="togTag(this)">🫘 Gluten-Free</div>
    <div class="tag${_sel("Dairy-Free")}" data-tag="Dairy-Free" onclick="togTag(this)">🥛 Dairy-Free</div>
    <div class="tag${_sel("Nut-Free")}" data-tag="Nut-Free" onclick="togTag(this)">🥜 Nut-Free</div>
    <div class="tag${_sel("Sugar-Free")}" data-tag="Sugar-Free" onclick="togTag(this)">🍬 Sugar-Free</div>
    <div class="tag${_sel("Healthy")}" data-tag="Healthy" onclick="togTag(this)">🥗 Healthy</div>
    <div class="tag${_sel("High Protein")}" data-tag="High Protein" onclick="togTag(this)">💪 High Protein</div>
    <div class="tag${_sel("Low Carb")}" data-tag="Low Carb" onclick="togTag(this)">🫀 Low Carb</div>
    <div class="tag${_sel("Keto")}" data-tag="Keto" onclick="togTag(this)">🔥 Keto</div>
    <div class="tag${_sel("Heart Healthy")}" data-tag="Heart Healthy" onclick="togTag(this)">🫀 Heart Healthy</div>
    <div class="tag${_sel("Pregnancy-Safe")}" data-tag="Pregnancy-Safe" onclick="togTag(this)">🤰 Pregnancy-Safe</div>
    <div class="tag${_sel("Baby & Toddler")}" data-tag="Baby & Toddler" onclick="togTag(this)">👶 Baby & Toddler</div>
    <div class="tag${_sel("Halal")}" data-tag="Halal" onclick="togTag(this)">🍽️ Halal</div>
    <div class="tag${_sel("Kosher")}" data-tag="Kosher" onclick="togTag(this)">✡️ Kosher</div>
    <div class="tag${_sel("Paleo")}" data-tag="Paleo" onclick="togTag(this)">🌾 Paleo</div>
    <div class="tag${_sel("Egg-Free")}" data-tag="Egg-Free" onclick="togTag(this)">🥚 Egg-Free</div>
    <div class="tag${_sel("Mediterranean")}" data-tag="Mediterranean" onclick="togTag(this)">🌊 Mediterranean</div>
    <div class="tag-cat">Cook Style</div>
    <div class="tag${_sel("Quick")}" data-tag="Quick" onclick="togTag(this)">⚡ Quick</div>
    <div class="tag${_sel("Kid-Friendly")}" data-tag="Kid-Friendly" onclick="togTag(this)">👨‍👩‍👧 Kid-Friendly</div>
    <div class="tag${_sel("Date Night")}" data-tag="Date Night" onclick="togTag(this)">🌙 Date Night</div>
    <div class="tag${_sel("Batch Cook")}" data-tag="Batch Cook" onclick="togTag(this)">📦 Batch Cook</div>
    <div class="tag${_sel("Freezer Friendly")}" data-tag="Freezer Friendly" onclick="togTag(this)">❄️ Freezer Friendly</div>
    <div class="tag${_sel("One Pot")}" data-tag="One Pot" onclick="togTag(this)">🥘 One Pot</div>
    <div class="tag${_sel("Special Occasion")}" data-tag="Special Occasion" onclick="togTag(this)">🎉 Special Occasion</div>
    <div class="tag${_sel("Budget Friendly")}" data-tag="Budget Friendly" onclick="togTag(this)">💰 Budget Friendly</div>
    <div class="tag${_sel("Spicy")}" data-tag="Spicy" onclick="togTag(this)">🌶️ Spicy</div>
    <div class="tag${_sel("Pasta")}" data-tag="Pasta" onclick="togTag(this)">🍝 Pasta</div>
    <div class="tag${_sel("Salad")}" data-tag="Salad" onclick="togTag(this)">🥗 Salad</div>
    <div class="tag${_sel("Soup & Stew")}" data-tag="Soup & Stew" onclick="togTag(this)">🍲 Soup & Stew</div>
    <div class="tag${_sel("Grill & BBQ")}" data-tag="Grill & BBQ" onclick="togTag(this)">🔥 Grill & BBQ</div>
    <div class="tag${_sel("Slow Cooker")}" data-tag="Slow Cooker" onclick="togTag(this)">🫕 Slow Cooker</div>
    <div class="tag${_sel("Air Fryer")}" data-tag="Air Fryer" onclick="togTag(this)">⚡ Air Fryer</div>
    <div class="tag${_sel("Meal Prep")}" data-tag="Meal Prep" onclick="togTag(this)">🍱 Meal Prep</div>
    <div class="tag${_sel("World Cuisine")}" data-tag="World Cuisine" onclick="togTag(this)">🌍 World Cuisine</div>
    <div class="tag${_sel("Fermented & Preserved")}" data-tag="Fermented & Preserved" onclick="togTag(this)">🫙 Fermented & Preserved</div>
    <div class="tag${_sel("Stovetop")}" data-tag="Stovetop" onclick="togTag(this)">🍳 Stovetop</div>
    <div class="tag${_sel("Wrap & Sandwich")}" data-tag="Wrap & Sandwich" onclick="togTag(this)">🫔 Wrap & Sandwich</div>
    <div class="tag${_sel("Street Food")}" data-tag="Street Food" onclick="togTag(this)">🥙 Street Food</div>
    <div class="tag${_sel("Raw & No-Cook")}" data-tag="Raw & No-Cook" onclick="togTag(this)">🍣 Raw & No-Cook</div>
    <div class="tag${_sel("Camping & Outdoors")}" data-tag="Camping & Outdoors" onclick="togTag(this)">🏕️ Camping & Outdoors</div>
    <div class="tag-cat">Occasion</div>
    <div class="tag${_sel("Holiday")}" data-tag="Holiday" onclick="togTag(this)">🎄 Holiday</div>
    <div class="tag${_sel("Party")}" data-tag="Party" onclick="togTag(this)">🎊 Party</div>
    <div class="tag${_sel("Summer")}" data-tag="Summer" onclick="togTag(this)">🏖️ Summer</div>
    <div class="tag${_sel("Winter Comfort")}" data-tag="Winter Comfort" onclick="togTag(this)">❄️ Winter Comfort</div>
    <div class="tag${_sel("Halloween")}" data-tag="Halloween" onclick="togTag(this)">🎃 Halloween</div>
    <div class="tag${_sel("Thanksgiving")}" data-tag="Thanksgiving" onclick="togTag(this)">🦃 Thanksgiving</div>
    <div class="tag${_sel("Easter")}" data-tag="Easter" onclick="togTag(this)">🐣 Easter</div>
    <div class="tag${_sel("Valentine's Day")}" data-tag="Valentine's Day" onclick="togTag(this)">💝 Valentine's Day</div>
    <div class="tag${_sel("Game Day")}" data-tag="Game Day" onclick="togTag(this)">🏈 Game Day</div>
    <div class="tag${_sel("Graduation")}" data-tag="Graduation" onclick="togTag(this)">🎓 Graduation</div>
    <div class="tag${_sel("Brunch Party")}" data-tag="Brunch Party" onclick="togTag(this)">🍳 Brunch Party</div>
    <div class="tag${_sel("Ramadan")}" data-tag="Ramadan" onclick="togTag(this)">🌿 Ramadan</div>
    <div class="tag${_sel("Hanukkah")}" data-tag="Hanukkah" onclick="togTag(this)">🕎 Hanukkah</div>
    <!-- Cuisine — regional/cultural food origin tags -->
    <div class="tag-cat">Cuisine</div>
    <div class="tag${_sel("Italian")}" data-tag="Italian" onclick="togTag(this)">🇮🇹 Italian</div>
    <div class="tag${_sel("Mexican")}" data-tag="Mexican" onclick="togTag(this)">🇲🇽 Mexican</div>
    <div class="tag${_sel("Japanese")}" data-tag="Japanese" onclick="togTag(this)">🇯🇵 Japanese</div>
    <div class="tag${_sel("Chinese")}" data-tag="Chinese" onclick="togTag(this)">🇨🇳 Chinese</div>
    <div class="tag${_sel("Indian")}" data-tag="Indian" onclick="togTag(this)">🇮🇳 Indian</div>
    <div class="tag${_sel("Thai")}" data-tag="Thai" onclick="togTag(this)">🇹🇭 Thai</div>
    <div class="tag${_sel("Greek")}" data-tag="Greek" onclick="togTag(this)">🇬🇷 Greek</div>
    <div class="tag${_sel("French")}" data-tag="French" onclick="togTag(this)">🇫🇷 French</div>
    <div class="tag${_sel("Middle Eastern")}" data-tag="Middle Eastern" onclick="togTag(this)">🇱🇧 Middle Eastern</div>
    <div class="tag${_sel("Korean")}" data-tag="Korean" onclick="togTag(this)">🇰🇷 Korean</div>
    <div class="tag${_sel("Spanish")}" data-tag="Spanish" onclick="togTag(this)">🇪🇸 Spanish</div>
    <div class="tag${_sel("Vietnamese")}" data-tag="Vietnamese" onclick="togTag(this)">🇻🇳 Vietnamese</div>
    <div class="tag${_sel("American")}" data-tag="American" onclick="togTag(this)">🇺🇸 American</div>
    <div class="tag${_sel("African")}" data-tag="African" onclick="togTag(this)">🌍 African</div>
    <div class="tag${_sel("Latin American")}" data-tag="Latin American" onclick="togTag(this)">🌎 Latin American</div>
    <div class="tag${_sel("Turkish")}" data-tag="Turkish" onclick="togTag(this)">🇹🇷 Turkish</div>
    <div class="tag${_sel("Mediterranean Cuisine")}" data-tag="Mediterranean Cuisine" onclick="togTag(this)">🫔 Mediterranean</div>
    <!-- Protein — main protein source tags -->
    <div class="tag-cat">Protein</div>
    <div class="tag${_sel("Chicken")}" data-tag="Chicken" onclick="togTag(this)">🐔 Chicken</div>
    <div class="tag${_sel("Beef")}" data-tag="Beef" onclick="togTag(this)">🥩 Beef</div>
    <div class="tag${_sel("Pork")}" data-tag="Pork" onclick="togTag(this)">🐷 Pork</div>
    <div class="tag${_sel("Fish")}" data-tag="Fish" onclick="togTag(this)">🐟 Fish</div>
    <div class="tag${_sel("Seafood")}" data-tag="Seafood" onclick="togTag(this)">🦐 Seafood</div>
    <div class="tag${_sel("Eggs")}" data-tag="Eggs" onclick="togTag(this)">🥚 Eggs</div>
    <div class="tag${_sel("Beans & Legumes")}" data-tag="Beans & Legumes" onclick="togTag(this)">🫘 Beans & Legumes</div>
    <div class="tag${_sel("Nuts & Seeds")}" data-tag="Nuts & Seeds" onclick="togTag(this)">🌰 Nuts & Seeds</div>
    <div class="tag${_sel("Cheese")}" data-tag="Cheese" onclick="togTag(this)">🧀 Cheese</div>
  </div></div>`;

  // ── Cover photo upload zone — shows current cover or empty upload area ──
  const hasCover = !!r.imageUrl;
  const coverUploadHtml = `<div class="cover-upload-zone${hasCover ? " has-preview" : ""}" id="editCoverZone" onclick="triggerCoverUpload('edit')" ondragover="event.preventDefault();this.classList.add('drag-over')" ondragleave="this.classList.remove('drag-over')" ondrop="event.preventDefault();this.classList.remove('drag-over');handleCoverDrop(event,'edit')">
    ${hasCover ? `<img src="${r.imageUrl}" alt="Cover" onerror="this.parentElement.classList.remove('has-preview');this.remove()"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('edit')">✕</button>` : `<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop · Max 800×600, 300KB</div>`}
  </div>
  <input type="file" id="editCoverInput" accept="image/*" style="display:none" onchange="handleCoverSelected(event,'edit')"/>`;

  // Time & servings metadata bar — shown for AI-imported recipes
  const editMeta = [
    r.prepTime ? `Prep: ${r.prepTime}` : "",
    r.cookTime ? `Cook: ${r.cookTime}` : "",
    r.totalTime ? `Total: ${r.totalTime}` : "",
    r.servings ? `Serves: ${r.servings}` : "",
  ].filter(Boolean);
  const editMetaHtml = editMeta.length ? `<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px">${editMeta.map(m => `<span style="font-size:.74rem;color:var(--mt);background:var(--b1);border-radius:8px;padding:4px 10px">${m}</span>`).join("")}</div>` : "";

  // ── Step photos — build upload buttons for each step (if structured steps exist) ──
  let stepPhotosHtml = "";
  if (r.stepsRaw && r.stepsRaw.length) {
    const stepItems = r.stepsRaw.map((s, i) => {
      const text = typeof s === "string" ? s : (s.text || "");
      const hasPhoto = r.stepPhotos?.[i];
      return `<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:12px;padding:10px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">
        <div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:var(--acd);color:var(--ac);font-size:.72rem;font-weight:700;display:flex;align-items:center;justify-content:center">${i + 1}</div>
        <div style="flex:1;font-size:.84rem;color:var(--tx2);line-height:1.5">${_esc(text)}</div>
        ${hasPhoto ? `<img src="${hasPhoto}" class="step-photo-preview" onclick="event.stopPropagation();openPhotoViewer(['${hasPhoto}'],0)" alt="Step ${i+1}"/>` : ""}
        <button class="step-photo-btn${hasPhoto ? " has-photo" : ""}" onclick="event.stopPropagation();triggerStepPhotoUpload(${i})" title="${hasPhoto ? "Change" : "Add"} step photo">📷</button>
        ${hasPhoto ? `<button class="step-photo-btn" onclick="event.stopPropagation();removeStepPhoto(${i})" title="Remove step photo" style="color:var(--rd)">✕</button>` : ""}
      </div>`;
    }).join("");
    stepPhotosHtml = `<div class="frow"><label class="flbl">Step Photos <span class="otag">optional</span></label>${stepItems}</div>`;
    // Hidden file input for step photos
    stepPhotosHtml += `<input type="file" id="stepPhotoInput" accept="image/*" style="display:none" onchange="handleStepPhotoSelected(event)"/>`;
  }

  // Render the full edit overlay body — includes cover upload, action buttons,
  // scaling controls, form fields, step photos, and save/delete buttons
  g("erecbody").innerHTML = `
    ${coverUploadHtml}
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
    ${stepPhotosHtml}
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

  // ── Upload pending cover photo if user selected one, or clear if removed ──
  let imageUrl = r.imageUrl;
  if (_pendingCoverFile) {
    try {
      showNotif("Uploading cover photo…");
      imageUrl = await uploadRecipeCover(_pendingCoverFile, r.id);
      _pendingCoverFile = null;
    } catch (e) {
      console.error("Cover upload failed:", e);
      showNotif("Cover photo upload failed — saving recipe without it");
    }
  } else if (r._removeCover) {
    // User clicked remove on the cover photo — clear the URL and delete from Storage
    imageUrl = null;
    delete r._removeCover;
    deleteRecipeStorageFile(`recipes/${r.id}/cover.jpg`).catch(() => {});
  }

  // ── Upload pending step photos ──
  const stepPhotos = { ...(r.stepPhotos || {}) };
  const stepKeys = Object.keys(_pendingStepPhotos);
  if (stepKeys.length) {
    showNotif("Uploading step photos…");
    for (const idx of stepKeys) {
      try {
        const url = await uploadStepPhoto(_pendingStepPhotos[idx], r.id, parseInt(idx));
        stepPhotos[idx] = url;
      } catch (e) {
        console.error(`Step ${idx} photo upload failed:`, e);
      }
    }
    _pendingStepPhotos = {};
  }

  // Spread the original recipe and override only the editable fields
  await svr({ ...r, name: g("ern").value.trim(), rating: rt2, description: g("erd").value.trim(), notes: g("erno").value.trim(), favorited: g("etog").classList.contains("on"), tags, cuisine, imageUrl, stepPhotos });
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

// ═══════════════════════════════════════════════════════════════════════════════
// COVER PHOTO HANDLERS — upload, preview, remove for both add and edit forms
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * triggerCoverUpload — opens the file picker for cover photo upload.
 * Called from the cover upload zone's onclick. Context is "add" or "edit".
 */
export function triggerCoverUpload(ctx) {
  const inputId = ctx === "add" ? "addRecCoverInput" : "editCoverInput";
  const input = g(inputId);
  if (input) input.click();
}

/**
 * handleCoverSelected — processes a cover photo file selected via file picker.
 * Shows an instant preview and stores the file for upload on save.
 */
export function handleCoverSelected(event, ctx) {
  const file = event.target?.files?.[0];
  if (!file) return;
  _pendingCoverFile = file;
  _showCoverPreview(file, ctx);
}

/**
 * handleCoverDrop — processes a cover photo file dropped onto the upload zone.
 */
export function handleCoverDrop(event, ctx) {
  const file = event.dataTransfer?.files?.[0];
  if (!file || !file.type.startsWith("image/")) return;
  _pendingCoverFile = file;
  _showCoverPreview(file, ctx);
}

/**
 * _showCoverPreview — reads a File and renders an instant preview in the upload zone.
 */
function _showCoverPreview(file, ctx) {
  const zoneId = ctx === "add" ? "addRecCoverZone" : "editCoverZone";
  const zone = g(zoneId);
  if (!zone) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    zone.classList.add("has-preview");
    zone.innerHTML = `<img src="${e.target.result}" alt="Cover preview"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('${ctx}')">✕</button>`;
  };
  reader.readAsDataURL(file);
}

/**
 * removeCoverPhoto — removes the cover photo preview and clears the pending file.
 * If editing, also removes the imageUrl from the recipe on next save.
 */
export function removeCoverPhoto(ctx) {
  _pendingCoverFile = null;
  const zoneId = ctx === "add" ? "addRecCoverZone" : "editCoverZone";
  const zone = g(zoneId);
  if (!zone) return;

  zone.classList.remove("has-preview");
  zone.innerHTML = `<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop · Max 800×600, 300KB</div>`;

  // If in edit mode, mark the imageUrl for removal on save
  if (ctx === "edit" && state.eid) {
    const r = state.recs.find(r => r.id === state.eid);
    if (r) r._removeCover = true;
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// STEP PHOTO HANDLERS — optional photos per instruction step
// ═══════════════════════════════════════════════════════════════════════════════

// Tracks which step index is being uploaded to
let _activeStepIndex = null;

/**
 * triggerStepPhotoUpload — opens the file picker for a specific step's photo.
 */
export function triggerStepPhotoUpload(stepIndex) {
  _activeStepIndex = stepIndex;
  const input = g("stepPhotoInput");
  if (input) { input.value = ""; input.click(); }
}

/**
 * handleStepPhotoSelected — processes a step photo file selected via file picker.
 * Shows an instant preview thumbnail next to the step and queues for upload on save.
 */
export function handleStepPhotoSelected(event) {
  const file = event.target?.files?.[0];
  if (!file || _activeStepIndex === null) return;

  _pendingStepPhotos[_activeStepIndex] = file;

  // Show preview — find the step's photo button and add a thumbnail
  const reader = new FileReader();
  reader.onload = (e) => {
    // Re-render would be complex, so update the button state visually
    showNotif(`Step ${_activeStepIndex + 1} photo added`);
  };
  reader.readAsDataURL(file);
}

/**
 * removeStepPhoto — removes a step photo from the recipe.
 * Queues the deletion and updates the UI.
 */
export function removeStepPhoto(stepIndex) {
  const r = state.recs.find(r => r.id === state.eid);
  if (!r) return;

  // Remove from pending uploads if it was just added
  delete _pendingStepPhotos[stepIndex];

  // Remove from saved step photos
  if (r.stepPhotos && r.stepPhotos[stepIndex]) {
    // Queue deletion from Firebase Storage
    const path = `recipes/${r.id}/steps/${stepIndex}.jpg`;
    deleteRecipeStorageFile(path).catch(() => {});
    delete r.stepPhotos[stepIndex];
  }

  // Re-render the edit view to reflect the change
  openER(r.id);
  showNotif(`Step ${stepIndex + 1} photo removed`);
}

// ═══════════════════════════════════════════════════════════════════════════════
// FULLSCREEN PHOTO VIEWER — tap to expand, swipe navigation, pinch-to-zoom
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * openPhotoViewer — opens the fullscreen photo viewer overlay.
 * Accepts an array of image URLs and the starting index.
 * Supports single photos (recipe cover, step photos) and multi-photo
 * galleries (comment photos with swipe navigation).
 */
export function openPhotoViewer(images, startIndex) {
  _photoViewerImages = images || [];
  _photoViewerIndex = startIndex || 0;
  _renderPhotoViewer();

  const overlay = g("photoViewer");
  if (overlay) overlay.classList.add("active");

  // Set up swipe gestures for navigation on touch devices
  _initPhotoViewerSwipe();
}

/**
 * closePhotoViewer — closes the fullscreen photo viewer.
 */
export function closePhotoViewer() {
  const overlay = g("photoViewer");
  if (overlay) overlay.classList.remove("active");
  _photoViewerImages = [];
}

/**
 * photoViewerNav — navigates to the previous (-1) or next (+1) photo.
 */
export function photoViewerNav(dir) {
  const newIdx = _photoViewerIndex + dir;
  if (newIdx < 0 || newIdx >= _photoViewerImages.length) return;
  _photoViewerIndex = newIdx;
  _renderPhotoViewer();
}

/**
 * _renderPhotoViewer — updates the viewer image and navigation UI.
 */
function _renderPhotoViewer() {
  const img = g("pvImg");
  const counter = g("pvCounter");
  const prev = g("pvPrev");
  const next = g("pvNext");

  if (img) img.src = _photoViewerImages[_photoViewerIndex] || "";
  if (counter) {
    counter.textContent = _photoViewerImages.length > 1
      ? `${_photoViewerIndex + 1} / ${_photoViewerImages.length}` : "";
  }
  // Show/hide navigation arrows based on position
  if (prev) prev.style.display = _photoViewerIndex > 0 ? "flex" : "none";
  if (next) next.style.display = _photoViewerIndex < _photoViewerImages.length - 1 ? "flex" : "none";
}

/**
 * _initPhotoViewerSwipe — sets up touch swipe gestures on the photo viewer.
 * Swipe left/right to navigate between photos in a multi-photo gallery.
 */
function _initPhotoViewerSwipe() {
  const wrap = g("pvWrap");
  if (!wrap) return;

  let startX = 0;
  let startY = 0;

  // Remove old listeners by cloning the element
  const newWrap = wrap.cloneNode(true);
  wrap.parentNode.replaceChild(newWrap, wrap);

  newWrap.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });

  newWrap.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    // Only trigger swipe if horizontal movement > 50px and more horizontal than vertical
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      photoViewerNav(dx < 0 ? 1 : -1); // swipe left = next, swipe right = prev
    }
  }, { passive: true });
}

// ═══════════════════════════════════════════════════════════════════════════════
// COMMENT PHOTO HANDLERS — attach photos to community recipe comments
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * triggerCommentPhotoUpload — opens file picker to add photos to a comment.
 * Supports multiple photos — user can add as many as they want.
 */
export function triggerCommentPhotoUpload() {
  const input = g("cmtPhotoInput");
  if (input) { input.value = ""; input.click(); }
}

/**
 * handleCommentPhotosSelected — processes photo files selected for a comment.
 * Shows thumbnails in the preview area and queues files for upload on post.
 */
export function handleCommentPhotosSelected(event) {
  const files = event.target?.files;
  if (!files || !files.length) return;

  // Add new files to the pending array
  for (let i = 0; i < files.length; i++) {
    if (files[i].type.startsWith("image/")) {
      _pendingCommentPhotos.push(files[i]);
    }
  }

  _renderCommentPhotoPreview();
}

/**
 * removeCommentPhoto — removes a photo from the pending comment attachments.
 */
export function removeCommentPhoto(index) {
  _pendingCommentPhotos.splice(index, 1);
  _renderCommentPhotoPreview();
}

/**
 * _renderCommentPhotoPreview — renders thumbnail previews of pending comment photos.
 */
function _renderCommentPhotoPreview() {
  const container = g("cmtPhotoPreview");
  if (!container) return;

  if (!_pendingCommentPhotos.length) {
    container.innerHTML = "";
    return;
  }

  // Read and display thumbnails for each pending file
  let html = "";
  _pendingCommentPhotos.forEach((file, i) => {
    const url = URL.createObjectURL(file);
    html += `<div style="position:relative;display:inline-block"><img src="${url}" class="cmt-preview-thumb" alt=""/><button onclick="event.stopPropagation();removeCommentPhoto(${i})" style="position:absolute;top:-4px;right:-4px;width:18px;height:18px;border-radius:50%;background:var(--rd);color:#fff;border:none;font-size:.6rem;cursor:pointer;display:flex;align-items:center;justify-content:center">✕</button></div>`;
  });
  // Add button to add more photos
  html += `<div class="cmt-preview-add" onclick="triggerCommentPhotoUpload()">+</div>`;
  container.innerHTML = html;
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
  // Cuisine dropdown options — matches the new Cuisine tag category plus legacy values
  const cuisines = [
    ["all", "All Cuisines"], ["italian", "Italian"], ["mexican", "Mexican"],
    ["japanese", "Japanese"], ["chinese", "Chinese"], ["indian", "Indian"],
    ["thai", "Thai"], ["greek", "Greek"], ["french", "French"],
    ["middle eastern", "Middle Eastern"], ["korean", "Korean"], ["spanish", "Spanish"],
    ["vietnamese", "Vietnamese"], ["american", "American"], ["african", "African"],
    ["latin american", "Latin American"], ["turkish", "Turkish"],
    ["mediterranean", "Mediterranean"], ["asian", "Asian"], ["bangladeshi", "Bangladeshi"]
  ];
  const cuisineOpts = cuisines.map(([v, l]) =>
    `<option value="${v}"${state.comCuisine === v ? " selected" : ""}>${l}</option>`
  ).join("");

  // Tag filter pills — curated fixed set matching the recipe tag system.
  // Grouped visually but rendered inline. Each pill toggles filtering.
  // Includes all 6 categories: Meal Type, Diet & Lifestyle, Cook Style, Occasion, Cuisine, Protein
  const tagList = [
    // Meal Type
    "Breakfast", "Lunch", "Dinner", "Snack", "Dessert", "Drinks",
    "Brunch", "Bread & Baking", "Sauce & Condiment", "Preserve & Pickle",
    // Diet & Lifestyle
    "Vegetarian", "Vegan", "Pescatarian", "Meat", "Gluten-Free",
    "Dairy-Free", "Nut-Free", "Sugar-Free", "Healthy", "High Protein",
    "Low Carb", "Keto", "Heart Healthy", "Pregnancy-Safe", "Baby & Toddler",
    "Halal", "Kosher", "Paleo", "Egg-Free", "Mediterranean",
    // Cook Style
    "Quick", "Kid-Friendly", "Date Night",
    "Batch Cook", "Freezer Friendly", "One Pot", "Special Occasion",
    "Budget Friendly", "Spicy", "Pasta", "Salad", "Soup & Stew",
    "Grill & BBQ", "Slow Cooker", "Air Fryer", "Meal Prep", "World Cuisine",
    "Fermented & Preserved", "Stovetop", "Wrap & Sandwich", "Street Food",
    "Raw & No-Cook", "Camping & Outdoors",
    // Occasion
    "Holiday", "Party", "Summer", "Winter Comfort",
    "Halloween", "Thanksgiving", "Easter", "Valentine's Day",
    "Game Day", "Graduation", "Brunch Party", "Ramadan", "Hanukkah",
    // Cuisine
    "Italian", "Mexican", "Japanese", "Chinese", "Indian", "Thai",
    "Greek", "French", "Middle Eastern", "Korean", "Spanish", "Vietnamese",
    "American", "African", "Latin American", "Turkish", "Mediterranean Cuisine",
    // Protein
    "Chicken", "Beef", "Pork", "Fish", "Seafood", "Eggs",
    "Beans & Legumes", "Nuts & Seeds", "Cheese"
  ];
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
  _recipeViewMode = "view"; // community recipes use the same overlay
  _pendingCommentPhotos = []; // reset any pending comment photo uploads

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
        <button class="btn bs bsm" onclick="triggerCommentPhotoUpload()" title="Attach photos">📷</button>
        <button class="btn bp bsm" onclick="addComComment('${id}')">Post</button>
      </div>
      <input type="file" id="cmtPhotoInput" accept="image/*" multiple style="display:none" onchange="handleCommentPhotosSelected(event)"/>
      <div id="cmtPhotoPreview" class="cmt-photo-previews"></div>
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
  if (!text && !_pendingCommentPhotos.length) return;

  // Enforce 500-character limit
  if (text && text.length > 500) {
    showNotif("Comment must be 500 characters or less");
    return;
  }

  const authorName = user.displayName || localStorage.getItem("ks-who") || "Anonymous";

  try {
    // Post the comment text first to get the commentId
    const cmt = await addComment(id, text || "", authorName);
    if (!cmt) return;

    // Upload any attached photos to Firebase Storage
    let photoUrls = [];
    if (_pendingCommentPhotos.length) {
      showNotif("Uploading photos…");
      for (let i = 0; i < _pendingCommentPhotos.length; i++) {
        try {
          const url = await uploadCommentPhoto(_pendingCommentPhotos[i], id, cmt.id, i);
          photoUrls.push(url);
        } catch (e) {
          console.error(`Comment photo ${i} upload failed:`, e);
        }
      }
      // Save photo URLs back to the comment doc if any uploaded
      if (photoUrls.length) {
        cmt.photoUrls = photoUrls;
        // Update the comment in Firestore with photo URLs
        await dbSet(`public_recipes/${id}/comments/${cmt.id}`, { ...cmt, id: undefined });
      }
    }

    // Reset input and photo state
    if (input) input.value = "";
    _pendingCommentPhotos = [];
    const previewEl = g("cmtPhotoPreview");
    if (previewEl) previewEl.innerHTML = "";
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
      container.innerHTML += _buildSingleCommentHtml(cmt, id, user.uid, isAuthor);
    }

    // Add to cached comments array
    if (state._comComments) state._comComments.push(cmt);

    showNotif(photoUrls.length ? `Comment posted with ${photoUrls.length} photo${photoUrls.length !== 1 ? "s" : ""}!` : "Comment posted!");
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

  // ── Comment photos — render as a 3-column thumbnail grid ──
  let photosHtml = "";
  const photos = c.photoUrls || [];
  if (photos.length) {
    // Build JSON-safe URL array for the viewer — each URL is escaped
    const urlsJson = JSON.stringify(photos).replace(/'/g, "\\'");
    const thumbs = photos.map((url, i) =>
      `<img src="${url}" alt="Photo ${i + 1}" onclick="event.stopPropagation();openPhotoViewer(${urlsJson.replace(/"/g, '&quot;')},${i})" onerror="this.style.display='none'"/>`
    ).join("");
    photosHtml = `<div class="cmt-photos-grid">${thumbs}</div>
      <div class="cmt-photo-count">📷 ${photos.length} photo${photos.length !== 1 ? "s" : ""}</div>`;
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
    ${photosHtml}
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
