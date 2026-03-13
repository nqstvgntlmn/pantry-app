// ── SHOPPING SCREEN ──────────────────────────────────────────────────────────
// This module handles the entire Shopping tab: the shopping list UI, quick-add,
// inline notes, aisle-grouping mode, "Build from meal plan" (AI-powered),
// the "Add to Kitchen" flow that moves purchased items into inventory,
// a Deals sub-tab that searches for live grocery deals via Flipp API,
// and bidirectional Reminders sync (records completed items for iOS Shortcut polling).

import { state, J, Js } from '../state.js';       // J = read from localStorage (JSON parse), Js = write to localStorage (JSON stringify) — Js also used for deals caching
import { svShopItem, dlShopItem, dbSet, dbGet } from '../db.js';  // svShopItem = save/upsert a shopping item, dlShopItem = delete one, dbSet = raw Firestore write, dbGet = read single doc
import { g, guessAisle, guessLocation, gcat, showNotif, showOv, hideOv, fmtR, toTitleCase } from '../helpers.js';
// g = getElementById shorthand, guessAisle = heuristic aisle label from item name,
// guessLocation = heuristic storage location (fridge/freezer/pantry),
// gcat = guess category for inventory, showNotif = toast notification,
// showOv/hideOv = show/hide overlay modals, fmtR = format helper
import { svi } from '../db.js';       // svi = save/upsert an inventory item to Firestore
import { wDates } from '../helpers.js'; // wDates = returns array of Date objects for the current week (Mon–Sun)
// [IMAGES DISABLED] — Product images commented out pending decision.
// See session notes: images caused false positives from external databases,
// inconsistent UX, and unnecessary costs. Custom photo pipeline preserved.
// To re-enable: uncomment these blocks and restore image display logic.
// import { uploadProductImage, normalizeProductName } from '../storage.js'; // Upload custom product photos to Firebase Storage, normalizeProductName for customProducts collection keys

// ── PRODUCT LOCATION PREFERENCES ─────────────────────────────────────────────
// Remembers where a user stores each product (e.g. eggs → fridge) so next time
// that product is added, the correct location is auto-selected.
// Stored in Firestore at households/{hid}/productPreferences/{normalizedName}.

/**
 * _normalizeForPref(name) — Normalizes a product name for use as a Firestore
 * document key in the productPreferences collection. Lowercases, trims, and
 * replaces spaces/special chars with hyphens.
 */
export function _normalizeForPref(name) {
  if (!name) return null;
  return name.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "").slice(0, 60);
}

/**
 * _getPreferredLocation(name) — Looks up the saved preferred storage location
 * for a product. Returns the location string ("fridge", "freezer", "pantry",
 * "household") or null if no preference is saved.
 */
export async function _getPreferredLocation(name) {
  if (!state.hid || !name) return null;
  const key = _normalizeForPref(name);
  if (!key) return null;
  try {
    const doc = await dbGet(`households/${state.hid}/productPreferences/${key}`);
    return doc?.preferredLocation || null;
  } catch { return null; }
}

/**
 * _savePreferredLocation(name, location) — Saves the user's preferred storage
 * location for a product. Fire-and-forget — errors logged but don't block UI.
 */
export function _savePreferredLocation(name, location) {
  if (!state.hid || !name || !location) return;
  const key = _normalizeForPref(name);
  if (!key) return;
  dbSet(`households/${state.hid}/productPreferences/${key}`, {
    preferredLocation: location,
    productName: name.trim(),
    updatedAt: new Date().toISOString()
  }).catch(e => console.warn("Failed to save product preference:", e));
}

// ── VOICE INPUT (Web Speech API) ─────────────────────────────────────────────
// Uses the SpeechRecognition API to let users speak items into the shopping list.
// The mic button is hidden if the browser doesn't support the API (graceful fallback).
// Shows a live interim transcript in the input field while speaking.
// A red "Stop" button appears while listening so the user can end recording manually.
// After capture, the item is saved and enrichment search runs (same dropdown as text input).

/** Module-level reference to the active SpeechRecognition instance (null when not listening) */
let _recognition = null;
/** Tracks whether we're currently listening for speech */
let _listening = false;
/** Accumulates finalized transcript segments across multiple speech results */
let _finalTranscript = "";
/** Flag: true when the user manually tapped "Stop" (commit speech), false when cancelled/auto-stopped */
let _manualStop = false;

/**
 * initVoice() — Called on page load to detect Web Speech API support.
 * If supported, shows the mic option in the add-item bottom sheet.
 * Works across Chrome (webkitSpeechRecognition) and other browsers (SpeechRecognition).
 */
export function initVoice() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return; // Browser doesn't support speech — option stays hidden

  // Show the voice option in the add-item bottom sheet
  const opt = g("shopAddMicOpt");
  if (opt) opt.style.display = "";
}

/**
 * _setMicUI(active) — Toggles all mic-related visual indicators on or off.
 * Controls the "Listening..." status label shown on the shopping list screen.
 * Called when voice recognition starts/stops.
 */
function _setMicUI(active) {
  const status = g("micstatus");
  if (status) status.classList.toggle("visible", active);
}

/**
 * toggleVoice() — Starts or stops voice recognition.
 * Tap once to start listening — button pulses, "Listening..." label appears,
 * and a live transcript is shown in the input field as the user speaks.
 * Recognition auto-stops when the user pauses speaking (silence detection).
 */
export function toggleVoice() {
  // If already listening, stop and COMMIT the speech — the onend handler will
  // finalize and trigger the enrichment search (same as auto-stop on silence).
  // Setting _manualStop = true tells onend to use the input field value as a
  // fallback if _finalTranscript is empty (interim text hasn't been finalized yet).
  if (_listening && _recognition) {
    _manualStop = true;
    _recognition.stop();
    return;
  }

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) { showNotif("Voice input not supported"); return; }

  _recognition = new SpeechRecognition();
  _recognition.lang = "en-US";
  _recognition.interimResults = true;   // Show live transcript as the user speaks
  _recognition.maxAlternatives = 1;
  _recognition.continuous = false;      // Auto-stop after silence — no manual stop needed

  _finalTranscript = "";
  _listening = true;
  _setMicUI(true);

  /**
   * onresult — Fired each time the speech engine produces results.
   * Builds a combined transcript from all finalized segments plus the current
   * interim (in-progress) text, and displays it live in the input field.
   */
  _recognition.onresult = (event) => {
    let interim = "";
    // Walk through all result segments — some are final, some are still interim
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const t = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        _finalTranscript += t;  // Append finalized text to our accumulator
      } else {
        interim += t;           // Collect in-progress text for live preview
      }
    }
    // Show combined final + interim text in the input so user sees it in real time
    const inp = g("shi");
    if (inp) inp.value = (_finalTranscript + interim).trim();
  };

  /** onerror — Fired on recognition errors (e.g. no-speech, not-allowed, network) */
  _recognition.onerror = (event) => {
    // "no-speech" and "aborted" are normal (user was silent or stopped early) — don't notify
    if (event.error !== "no-speech" && event.error !== "aborted") {
      showNotif("Couldn't hear that — try again");
    }
  };

  /**
   * onend — Fires when recognition stops (silence detected, manual stop, or error).
   * Takes whatever was recognized, adds it to the shopping list, and triggers enrichment.
   *
   * When the user taps "Stop" (_manualStop = true), the speech engine may not have
   * finalized the interim transcript yet. In that case, we fall back to whatever
   * text is visible in the input field (which includes interim text shown live).
   * This ensures Stop = commit + search, not discard.
   */
  _recognition.onend = () => {
    // Use finalized transcript, or fall back to the input field value when manually stopped.
    // The input field contains the live preview (final + interim) so it captures partial speech.
    let transcript = (_finalTranscript || "").trim();
    if (!transcript && _manualStop) {
      const inp = g("shi");
      transcript = inp ? inp.value.trim() : "";
    }

    _listening = false;
    _recognition = null;
    _finalTranscript = "";
    _manualStop = false;
    _setMicUI(false);

    // If we got recognized text, add it to the shopping list directly
    // (bypasses the bottom sheet since voice already captured the text)
    if (transcript) {
      // Parse optional quantity from common patterns (e.g. "5 apples", "eggs x3")
      let name = transcript, qty = 1;
      const leadMatch = transcript.match(/^(\d+)\s+(.+)/);
      const trailMatch = transcript.match(/^(.+?)\s*[x×]\s*(\d+)$/i);
      if (trailMatch) { name = trailMatch[1].trim(); qty = parseInt(trailMatch[2], 10) || 1; }
      else if (leadMatch) { name = leadMatch[2].trim(); qty = parseInt(leadMatch[1], 10) || 1; }

      const item = { id: Date.now().toString(), name, qty, checked: false, src: "manual" };
      svShopItem(item);
      showNotif(`Added "${transcript}" 🎤`);

      // Clear the input field since the item has been committed
      const inp = g("shi");
      if (inp) inp.value = "";

      // Trigger enrichment search for the voice-added item
      searchAndEnrich(item.id, name, "shop");
    }
  };

  _recognition.start();
}

/**
 * sH(item) — Renders a single shopping list item as an HTML string.
 *
 * Each item is wrapped in a "swipe-wrap" container that supports:
 *   - Tap to toggle checked state (via swipeRowTap, defined globally in swipe handler)
 *   - Swipe-to-delete (the hidden .swipe-del panel revealed on swipe)
 *   - Inline note editing (expandable textarea below the item)
 *   - Inline quantity editing (tap the qty badge to show an input)
 *   - Multi-select mode (sel-cb checkbox shown when selectMode is active)
 *
 * The "shit" class name is short for "shopping item" row.
 * "chk" class applies strikethrough styling for checked-off items.
 *
 * Quantity display: shows "× N" next to the item name when qty > 1.
 * Tapping the qty badge opens an inline number input for quick editing.
 */

// toTitleCase imported from helpers.js — used for uniform product name display

/**
 * _shouldShowBrand(item) — Determines whether to display the brand name on a shopping list item.
 * Rules:
 *   - Barcode scans (src === "scan"): always show brand — user explicitly scanned that product.
 *   - Text search (src === "search"): only show brand if at least one word from the user's
 *     original search query matches a word in the brand name (case-insensitive).
 *     e.g. search "Monster Energy" → show "Monster" brand ✅
 *         search "milk" → hide "Great Value" brand ✅
 *   - All other sources (manual, meal-plan, etc.): hide brand — no enrichment context.
 */
function _shouldShowBrand(item) {
  if (!item.brand) return false;

  // Barcode scans always show brand — user intentionally scanned that exact product
  if (item.src === "scan") return true;

  // Text search: compare search query words against brand name words
  if (item.src === "search" && item.searchQuery) {
    const queryWords = item.searchQuery.toLowerCase().split(/\s+/).filter(w => w.length >= 2);
    const brandLower = item.brand.toLowerCase();
    // Show brand if any query word appears in the brand name
    return queryWords.some(w => brandLower.includes(w));
  }

  // For manual adds, meal-plan items, etc. — no brand display
  return false;
}

export function sH(item) {
  // Default to qty 1 if the field is missing (backwards compat with old items)
  const qty = item.qty || 1;
  // Always show the qty badge so users can tap to edit; qty=1 gets a muted style via sh-qty-one
  const qtyBadge = `<span class="sh-qty${qty === 1 ? ' sh-qty-one' : ''}" onclick="event.stopPropagation();openShQty('${item.id}')"> × ${qty}</span>`;

  // [IMAGES DISABLED] — Product images commented out pending decision.
  // See session notes: images caused false positives from external databases,
  // inconsistent UX, and unnecessary costs. Custom photo pipeline preserved.
  // To re-enable: uncomment these blocks and restore image display logic.
  // const thumb = item.image ? `<img src="${item.image}" class="sh-thumb" alt="" onerror="this.style.display='none'"/>` : "";

  return `<div class="swipe-wrap" id="sw-${item.id}" data-id="${item.id}" data-list="shop">
    <div class="swipe-inner">
      <!-- Main row: swipeRowTap handles multi-select; checkbox toggles checked; content area opens detail -->
      <div class="shit${item.checked ? " chk" : ""}" onclick="swipeRowTap('${item.id}','shop')">
        <div class="sel-cb">✓</div>           <!-- Multi-select checkbox (hidden unless selectMode is active) -->
        <div class="shck" onclick="event.stopPropagation();togShop('${item.id}')">${item.checked ? "✓" : ""}</div>  <!-- Slim ring: tap to mark as bought; hidden in select mode (replaced by sel-cb) -->
        <div style="flex:1;min-width:0;cursor:pointer" onclick="openItemDetail('${item.id}')">
          <div class="shnm">${toTitleCase(item.name)}${qtyBadge}</div>
          ${_shouldShowBrand(item) ? `<div class="sh-brand">${item.brand}</div>` : ""}  <!-- Brand shown for barcode scans always; for text search only if the user's query matches the brand name -->
          ${item.note ? `<div class="shnote">📝 ${item.note}</div>` : ""}  <!-- Optional user note shown below name -->
        </div>
        ${item.price ? `<div class="price-tag">~$${item.price}</div>` : ""}  <!-- Estimated price if available -->
        <button class="sh-note-btn" onclick="toggleShNote(event,'${item.id}')" title="Add note">✏️</button>
      </div>
      <!-- Inline qty editor (hidden by default, toggled by openShQty) -->
      <div class="sh-qty-edit" id="sqe-${item.id}">
        <label class="sh-qty-lbl">Qty</label>
        <div class="sh-qty-ctl">
          <button class="qbtn" onclick="adjShQty('${item.id}',-1)">−</button>
          <input class="sh-qty-inp" id="sqi-${item.id}" type="number" min="1" value="${qty}" onblur="saveShQty('${item.id}')"/>
          <button class="qbtn" onclick="adjShQty('${item.id}',1)">+</button>
        </div>
      </div>
      <!-- Expandable note editor (hidden by default, toggled by toggleShNote) -->
      <div class="sh-note-edit" id="sne-${item.id}">
        <textarea class="sh-note-inp" id="sni-${item.id}" rows="2" placeholder="Add a note… (e.g. brand, size, store)" onblur="saveShNote('${item.id}')">${item.note || ""}</textarea>
      </div>
    </div>
    <!-- Delete zone: slides in from right on swipe. Trash can lid animates open past threshold. -->
    <div class="swipe-del" onclick="swipeDelItem('${item.id}','shop')">
      <div class="swipe-del-icon">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path class="trash-lid" d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0H5"/>
          <path class="trash-body" d="M6 6v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6M10 11v6M14 11v6"/>
        </svg>
      </div>
      <span class="swipe-del-label">Delete</span>
    </div>
  </div>`;
}

/**
 * renderShop() — Full re-render of the shopping list container (#shlist).
 *
 * Splits items into unchecked ("to buy") and checked ("done") groups,
 * sorts each alphabetically, and renders them as HTML.
 *
 * Two display modes:
 *   1. Category mode (state.aisleMode) — groups unchecked items by product category
 *      (e.g. "Dairy", "Produce") so the user can browse by category.
 *   2. Flat mode — simple "To buy" / "Done" sections.
 *
 * Also handles multi-select mode styling when the user is bulk-selecting items.
 */
export function renderShop() {
  const az = (a, b) => a.name.localeCompare(b.name); // Alphabetical comparator
  const c = g("shlist");                               // The main list container element
  const un = state.shop.filter(i => !i.checked).sort(az);  // Unchecked items, sorted A-Z
  const ch = state.shop.filter(i => i.checked).sort(az);   // Checked items, sorted A-Z

  // Show/hide the "Clear checked" button depending on whether any items are checked
  const clrchk = g("clrchk");
  if (clrchk) clrchk.style.display = ch.length ? "block" : "none";

  // Update the subtitle counter (e.g. "5 items to buy")
  const shsub = g("shsub");
  if (shsub) shsub.textContent = un.length + " items to buy";

  if (!c) return; // Safety: if the list container doesn't exist in DOM, bail

  // Empty state placeholder
  if (!state.shop.length) { c.innerHTML = `<div class="es"><div class="ei">🛒</div><p>Your list is empty!<br/>Add items or use "Build from meal plan".</p></div>`; return; }

  if (state.aisleMode && un.length) {
    // Category-grouped mode: bucket unchecked items by their guessed product category
    const grps = {};
    un.forEach(i => { const a = guessAisle(i.name); if (!grps[a]) grps[a] = []; grps[a].push(i); });
    // Render each category group with a section header, followed by checked ("Done") items at the bottom
    c.innerHTML = Object.entries(grps).sort().map(([aisle, its]) => `<div class="shsec">${aisle}</div>${its.map(sH).join("")}`).join("") + (ch.length ? `<div class="shsec">Done</div>${ch.map(sH).join("")}` : "");
  } else {
    // Flat mode: "To buy" section, then "Done" section
    c.innerHTML = (un.length ? `<div class="shsec">To buy (${un.length})</div>${un.map(sH).join("")}` : "") + (ch.length ? `<div class="shsec">Done</div>${ch.map(sH).join("")}` : "");
  }

  // If multi-select mode is active for the shopping list, mark rows as "selecting"
  // and highlight any already-selected rows
  if (state.selectMode === "shop") {
    document.querySelectorAll("#shlist .swipe-wrap").forEach(w => { w.classList.add("selecting"); if (state.selectedIds.has(w.dataset.id)) w.classList.add("selected"); });
    const body = document.querySelector(".shbody");
    if (body) body.style.paddingLeft = "52px"; // Shift body right to make room for selection checkboxes
  }

  // Auto-enrich any Reminders items that arrived without product images.
  // Runs in the background — no UI interruption, results applied silently.
  enrichRemindersItems();
}

/**
 * qadd() — Quick-add: reads the text input (#shi), creates a new shopping item.
 *
 * Add button behavior depends on the dropdown state:
 *   - Exactly 1 result showing → auto-grabs that result (enriched with image/brand/category)
 *   - Multiple results or no results → adds as plain text (user must tap a row to get enriched)
 * This makes the Add button a reliable plain-text escape hatch when multiple options exist,
 * while still being smart when there's an obvious single match.
 *
 * Supports optional inline quantity with these patterns:
 *   "5 apples"    → qty 5, name "apples"
 *   "apples x3"   → qty 3, name "apples"
 *   "apples ×3"   → qty 3, name "apples"
 *   "apples"      → qty 1, name "apples" (default)
 *
 * Also captures the optional note from the collapsible note field (#addNoteInp).
 * The note is cleared and the field collapsed after adding.
 */
export function qadd() {
  const i = g("shi"), v = i.value.trim(); // "shi" = shopping input text field
  if (!v) return; // Do nothing if input is empty

  // If exactly 1 result in the dropdown, auto-pick it (enriched data with image/brand)
  // This gives the user the best match automatically without needing to tap the row.
  if (_inlineSearchResults && _inlineSearchResults.length === 1) {
    pickInlineResult(0);
    return;
  }

  // Multiple results or no results: add as plain text.
  // User must tap a specific dropdown row to get enriched data when there are choices.

  // Try to parse a quantity from common patterns
  let name = v, qty = 1;
  // Pattern 1: leading number, e.g. "5 apples" or "12 eggs"
  const leadMatch = v.match(/^(\d+)\s+(.+)/);
  // Pattern 2: trailing multiplier, e.g. "apples x3" or "eggs ×12"
  const trailMatch = v.match(/^(.+?)\s*[x×]\s*(\d+)$/i);

  if (trailMatch) {
    name = trailMatch[1].trim();
    qty = parseInt(trailMatch[2], 10) || 1;
  } else if (leadMatch) {
    name = leadMatch[2].trim();
    qty = parseInt(leadMatch[1], 10) || 1;
  }

  // Capture the optional note from the collapsible "Note" field (if expanded and filled)
  const noteInp = g("addNoteInp");
  const note = noteInp ? noteInp.value.trim() : "";

  const item = { id: Date.now().toString(), name, qty, checked: false, src: "manual" };
  if (note) item.note = note; // Only include note field if the user typed something

  // Save the item as plain text — no enriched data since user didn't pick a specific result
  svShopItem(item);
  i.value = ""; // Clear the input after adding

  // Reset and collapse the note field so it's clean for the next item
  if (noteInp) noteInp.value = "";
  const wrap = g("addNoteWrap");
  if (wrap) wrap.style.display = "none";

  // Clear the inline search dropdown so stale results don't linger
  _clearInlineSearch();

  // Close the add-item bottom sheet after adding
  closeShopAddSheet();
}

/**
 * toggleAddNote() — Toggles the optional note field below the quick-add input.
 * When shown, focuses the textarea so the user can start typing immediately.
 * Keeps the add flow clean: the note field is hidden by default to avoid clutter.
 */
export function toggleAddNote() {
  const wrap = g("addNoteWrap");
  if (!wrap) return;
  const showing = wrap.style.display === "none";
  wrap.style.display = showing ? "block" : "none";
  if (showing) {
    const inp = g("addNoteInp");
    if (inp) inp.focus();
  }
}

// ── BOTTOM SHEET: ADD ITEM ───────────────────────────────────────────────────
// The add-item bottom sheet slides up with the text input auto-focused and keyboard
// open, so the user can start typing immediately. Barcode scan and voice input
// options are visible below the input field for quick access.

/**
 * openShopAddSheet() — Opens the add-item bottom sheet.
 * Immediately shows the text input with keyboard focused, plus scan/voice options below.
 */
export function openShopAddSheet() {
  const backdrop = g("shopAddBackdrop");
  const sheet = g("shopAddSheet");
  if (backdrop) backdrop.classList.add("active");
  if (sheet) sheet.classList.add("active");
  // Auto-focus the input so the keyboard pops up immediately
  setTimeout(() => { const inp = g("shi"); if (inp) { inp.value = ""; inp.focus(); } }, 150);
}

/**
 * closeShopAddSheet() — Dismisses the add-item bottom sheet.
 * Called when tapping the backdrop or after an item is added.
 * Also clears the inline search dropdown to avoid stale results on next open.
 */
export function closeShopAddSheet() {
  const backdrop = g("shopAddBackdrop");
  const sheet = g("shopAddSheet");
  if (backdrop) backdrop.classList.remove("active");
  if (sheet) sheet.classList.remove("active");
  _clearInlineSearch();
}

/**
 * shopAddScan() — Handles the "Scan barcode" option in the bottom sheet.
 * Closes the bottom sheet and opens the barcode scanner in list mode.
 */
export function shopAddScan() {
  closeShopAddSheet();
  // openScanForList is on window (registered in main.js)
  if (window.openScanForList) window.openScanForList();
}

/**
 * shopAddVoice() — Handles the "Voice input" option in the bottom sheet.
 * Closes the bottom sheet and starts voice recognition.
 * The mic status indicator (with stop button) will appear on the shopping list screen.
 */
export function shopAddVoice() {
  closeShopAddSheet();
  toggleVoice();
}

// ── LIVE INLINE SEARCH (DEBOUNCED) ──────────────────────────────────────────
// As the user types in the add-item input (#shi), we debounce and search product
// databases. Results appear in an inline dropdown below the input (inside the
// bottom sheet) so the user can pick a match BEFORE the item is added.
// This avoids the old flow where the item was auto-added as plain text and
// then enriched after-the-fact.

/** Timer ID for the debounced search — cleared on each keystroke to restart the wait */
let _searchDebounceTimer = null;
/** Stores the most recent inline search results so qadd() and pickInlineResult() can use them */
let _inlineSearchResults = null;

// ── SEARCH RESULT CACHE ─────────────────────────────────────────────────────
// Caches recent API responses in memory so repeated/similar searches don't
// re-hit the API waterfall. Entries expire after 5 minutes.
const _searchCache = new Map();
const _CACHE_TTL = 5 * 60 * 1000;  // 5 minutes
const _CACHE_MAX = 30;             // Max cached queries

/**
 * onShopInput() — Called on every keystroke in the add-item input (#shi).
 * Debounces the product search by 350ms so we don't fire API calls on every
 * character. Clears the dropdown if the input is too short (< 2 chars).
 */
export function onShopInput() {
  // Clear any pending search timer so only the last keystroke triggers a search
  if (_searchDebounceTimer) clearTimeout(_searchDebounceTimer);

  const inp = g("shi");
  const query = inp ? inp.value.trim() : "";
  const dropdown = g("shopSearchDropdown");

  // If input is too short, hide the dropdown and bail
  if (!query || query.length < 2) {
    if (dropdown) { dropdown.classList.remove("active"); dropdown.innerHTML = ""; }
    _inlineSearchResults = null;
    return;
  }

  // Wait 350ms after the user stops typing before searching (debounce)
  _searchDebounceTimer = setTimeout(() => _runInlineSearch(query), 350);
}

// ── RECIPE/DISH NAME DETECTION (client-side mirror of server logic) ──────────
// Catches recipe-style names that slip through or were cached before the server
// filter was added. Same word lists as api/text-search.js — keep in sync.
const _RECIPE_WORDS = new Set([
  "salad", "soup", "stew", "casserole", "dish", "recipe", "curry", "pie",
  "sandwich", "wrap", "risotto", "gratin", "puree", "smoothie", "juice",
  "namasu", "pickled", "marinated", "braised", "sauteed", "sautéed",
  "coleslaw", "gazpacho", "chutney", "relish", "compote", "ragout",
  "ratatouille", "succotash", "bruschetta", "ceviche", "tartare",
]);
const _RECIPE_PHRASES = [
  "made with", "and vegetable", "and rice", "and noodle", "and cheese",
  "cooked in", "served with", "topped with", "stuffed with",
  "mixed with", "tossed with", "dressed with",
];

/**
 * _isRecipeName(name, query) — Client-side check: returns true if the product
 * name describes a prepared dish/recipe rather than a plain ingredient.
 * Only triggers when recipe indicators aren't part of the user's own query.
 */
function _isRecipeName(name, query) {
  const nameLower = (name || "").toLowerCase().trim();
  const queryLower = query.toLowerCase().trim();
  if (nameLower === queryLower) return false;

  for (const phrase of _RECIPE_PHRASES) {
    if (nameLower.includes(phrase) && !queryLower.includes(phrase)) return true;
  }

  const queryWords = new Set(queryLower.split(/\s+/));
  const nameWords = nameLower.split(/[\s,&+\-–—/()[\]]+/).filter(w => w.length >= 2);
  for (const nw of nameWords) {
    if (_RECIPE_WORDS.has(nw) && !queryWords.has(nw)) return true;
  }

  return false;
}

// Stop words for client-side relevance scoring — words that carry no product-category
// meaning. Must match the server-side STOP_WORDS list in api/text-search.js.
const _STOP_WORDS = new Set([
  // Articles, prepositions, conjunctions
  "a", "an", "the", "and", "or", "with", "for", "of", "in", "to", "by",
  "is", "it", "at", "on", "no", "not", "all", "each", "per", "from",
  // Marketing / quality descriptors (don't indicate product category)
  "free", "style", "natural", "original", "premium", "organic", "fresh",
  "whole", "pure", "real", "lite", "light", "low", "high", "extra",
  "reduced", "fat", "nonfat", "skim", "raw", "roasted", "unsweetened",
  "sweetened", "flavored", "smoked", "dried", "frozen", "canned",
  // Packaging / measurement units
  "pack", "ct", "oz", "lb", "ml", "kg", "fl", "count", "size",
  "gallon", "quart", "pint", "liter", "bag", "box", "can", "jar",
  "bottle", "container", "pouch", "tub", "carton",
  // Food preparation / flavor descriptors
  "plain", "creamy", "chunky", "crispy", "crunchy", "spicy", "mild",
  "hot", "cold", "classic", "homestyle", "traditional", "artisan",
  "greek", "italian", "mexican", "asian", "indian",
  // Product descriptor noise (common in long product names)
  "mini", "small", "medium", "large", "jumbo", "giant", "big",
  "handheld", "electric", "portable", "automatic", "manual",
  "new", "best", "top", "value", "brand",
]);

/**
 * _isStrictlyRelevant(name, query) — Client-side strict relevance check.
 * Ensures that at least half the meaningful words in the product name relate
 * to the search query. Prevents kitchen appliances (blenders, mixers) from
 * appearing in food searches just because one ingredient word matches.
 * E.g., "Formula Mixer Milk Powder Blender Stirrer" fails for "milk" because
 * only 2 of 8 meaningful words relate to milk.
 */
function _isStrictlyRelevant(name, query) {
  const nameLower = (name || "").toLowerCase().trim();
  const queryLower = query.toLowerCase().trim();

  // Exact or starts-with always passes
  if (nameLower === queryLower || nameLower.startsWith(queryLower + " ")) return true;

  const queryTerms = queryLower.split(/\s+/).filter(w => w.length >= 2);
  const nameWords = nameLower
    .split(/[\s,&+\-–—/()[\]]+/)
    .filter(w => w.length >= 2 && !_STOP_WORDS.has(w) && !/^\d+$/.test(w));

  // Very short names — rely on the position-based scoring below
  if (nameWords.length <= 2) return true;

  let matched = 0;
  for (const nw of nameWords) {
    const relates = queryTerms.some(qt => {
      if (nw.startsWith(qt) || qt.startsWith(nw)) return true;
      const minLen = Math.min(nw.length, qt.length, 3);
      return minLen >= 3 && nw.slice(0, minLen) === qt.slice(0, minLen);
    });
    if (relates) matched++;
  }

  return (matched / nameWords.length) >= 0.5;
}

/**
 * scoreSearchResult(name, query) — Scores how relevant a product name is to
 * the user's search query. Skips stop words (descriptors like "organic", "whole",
 * "low") when determining position so "Organic Milk" scores as high as "Milk"
 * for a "milk" search. Penalizes heavily modified product names so generic/plain
 * versions always rank above flavored, diet, or specialty variants.
 *
 * Returns a score > 0 for relevant results, 0 for rejected ones.
 * @param {string} name — The product name to score
 * @param {string} query — The user's search query
 * @returns {number} Relevance score (higher = more relevant, 0 = rejected)
 */
export function scoreSearchResult(name, query) {
  const nameLower = (name || "").toLowerCase().trim();
  const queryLower = query.toLowerCase().trim();

  // Recipe/dish names get score 0 — filtered out entirely.
  // "Cucumber salad made with cucumber and vinegar" should never appear
  // when the user searches "cucumber" (they want to buy a cucumber).
  if (_isRecipeName(name, query)) return 0;

  // Exact match is the best possible result
  if (nameLower === queryLower) return 100;

  // Name starts with the query (e.g. "Milk 2% Fat" for "milk")
  if (nameLower.startsWith(queryLower + " ") || nameLower.startsWith(queryLower)) return 95;

  // Split name into all words and meaningful-only words (skip stop words).
  // Stop words like "organic", "whole", "low", "fat" are descriptors that shouldn't
  // affect position ranking — "Organic Milk" should rank the same as "Milk".
  const nameWords = nameLower.split(/[\s,&+\-–—/]+/).filter(w => w.length >= 2);
  const meaningful = nameWords.filter(w => !_STOP_WORDS.has(w) && !/^\d+$/.test(w));

  // First meaningful word matches query (e.g. "Organic Milk" → "milk" is first meaningful)
  if (meaningful.length && (meaningful[0].startsWith(queryLower) || queryLower.startsWith(meaningful[0]))) {
    // Fewer extra meaningful words = more relevant to user's simple search.
    // "Whole Milk" (1 extra) beats "Hershey's Chocolate Milk" (2 extras).
    const extras = meaningful.filter(w => !w.startsWith(queryLower) && !queryLower.startsWith(w)).length;
    const score = 85 - Math.min(extras * 8, 30);
    return _isStrictlyRelevant(name, query) ? score : 0;
  }

  // Query matches one of the first 3 meaningful words (2nd or 3rd position)
  for (let i = 1; i < Math.min(3, meaningful.length); i++) {
    if (meaningful[i].startsWith(queryLower) || queryLower.startsWith(meaningful[i])) {
      const extras = meaningful.filter(w => !w.startsWith(queryLower) && !queryLower.startsWith(w)).length;
      const score = 60 - (i * 10) - Math.min(extras * 8, 20);
      return _isStrictlyRelevant(name, query) ? Math.max(score, 5) : 0;
    }
  }

  // STRICT: if the query doesn't match any of the first 3 meaningful words, reject
  return 0;
}

/**
 * _fetchAndScoreResults(query) — Fetches product search results from the API
 * (with in-memory caching) and scores/sorts them by relevance.
 * Returns an array of scored, filtered, sorted results (top 5).
 * @param {string} query — The search query
 * @returns {Promise<Array>} Scored and sorted product results
 */
async function _fetchAndScoreResults(query) {
  const cacheKey = query.toLowerCase();

  // Check cache first — avoids re-hitting the API for repeated searches
  const cached = _searchCache.get(cacheKey);
  if (cached && Date.now() - cached.ts < _CACHE_TTL) {
    return cached.scored;
  }

  // Fetch from the text search API (product enrichment waterfall).
  // Pass the household ID so the API can check the custom product image database
  // first — user-uploaded photos take priority over all external sources.
  const hidParam = state.hid ? `&hid=${encodeURIComponent(state.hid)}` : "";
  console.log(`[ShopSearch] Fetching /api/text-search?q=${encodeURIComponent(query)}${hidParam}`);
  const r = await fetch(`/api/text-search?q=${encodeURIComponent(query)}${hidParam}`);
  const data = await r.json();

  // [IMAGES DISABLED] — Product images commented out pending decision.
  // See session notes: images caused false positives from external databases,
  // inconsistent UX, and unnecessary costs. Custom photo pipeline preserved.
  // To re-enable: uncomment these blocks and restore image display logic.
  // if (data.imageDismissed) {
  //   console.log(`[ShopSearch] imageDismissed for "${query}" — stripping images from results`);
  // }
  let results = data.results || [];

  // Filter: at least one query word must appear in the product name
  const queryWords = query.toLowerCase().split(/\s+/).filter(w => w.length >= 2);
  results = results.filter(p => {
    const nameLower = (p.name || "").toLowerCase();
    return queryWords.some(w => nameLower.includes(w));
  });

  // Score by relevance and STRICTLY filter: only results where the query is
  // a primary/leading word in the product name pass (score > 0).
  // Score each result by relevance. Drop anything scoring below 20 — these are
  // heavily modified variants (e.g. "Hershey's Chocolate Milk" for "milk") that
  // clutter the dropdown. Keep only the top 5 best matches.
  const scored = results
    .map(p => ({ ...p, _score: scoreSearchResult(p.name || "", query) }))
    .filter(p => p._score >= 20)
    .sort((a, b) => b._score - a._score)
    .slice(0, 5);

  // Cache the scored results
  _searchCache.set(cacheKey, { scored, ts: Date.now() });
  // Evict oldest entries if cache is full
  if (_searchCache.size > _CACHE_MAX) {
    const oldest = _searchCache.keys().next().value;
    _searchCache.delete(oldest);
  }

  return scored;
}

/**
 * _classifyImageSource(url) — Identifies the origin of an image URL for debug logging.
 * Helps verify that real product photos (Kroger, Spoonacular /products/, OFF) are
 * winning over generic ingredient illustrations (Spoonacular /ingredients_*).
 */
function _classifyImageSource(url) {
  if (!url) return "NONE";
  const lower = url.toLowerCase();
  if (lower.includes("kroger.com")) return "Kroger (real product)";
  if (lower.includes("img.spoonacular.com/products")) return "Spoonacular product (real photo)";
  if (lower.includes("img.spoonacular.com/ingredients")) return "Spoonacular ingredient (illustration)";
  if (lower.includes("openfoodfacts.org")) return "Open Food Facts (real photo)";
  if (lower.includes("edamam")) return "Edamam";
  return "Other: " + new URL(url).hostname;
}

/**
 * _renderShopDropdown(results) — Renders an array of product results into
 * the shopping search dropdown. Extracted so both the instant custom-product
 * path and the full API path can share the same rendering logic.
 * @param {Array} results — Scored product results to render
 */
function _renderShopDropdown(results) {
  const dropdown = g("shopSearchDropdown");
  if (!dropdown || !results.length) return;

  _inlineSearchResults = results;

  // Log each result's image source for debugging in DevTools
  results.forEach((p, i) => {
    const imgSrc = _classifyImageSource(p.image);
    console.log(`[ShopDropdown] #${i} "${p.name}" → image: ${imgSrc} | url: ${p.image || "(none)"} | score: ${p._score}`);
  });

  // Render result rows with consistent layout: image LEFT, text RIGHT.
  // Brand is intentionally hidden — often generic/irrelevant in text search.
  // On image error, swap to placeholder so the row layout stays aligned.
  dropdown.innerHTML = results.map((p, i) => {
    // [IMAGES DISABLED] — Product images commented out pending decision.
    // See session notes: images caused false positives from external databases,
    // inconsistent UX, and unnecessary costs. Custom photo pipeline preserved.
    // To re-enable: uncomment these blocks and restore image display logic.
    // const img = p.image
    //   ? `<img src="${p.image}" class="enrich-img" alt="" onerror="this.outerHTML='<div class=\\'enrich-img-ph\\'>🛒</div>'">`
    //   : `<div class="enrich-img-ph">🛒</div>`;
    const img = `<div class="enrich-img-ph">🛒</div>`;
    const cat = p.category && p.category !== "General"
      ? `<div class="enrich-cat">${p.category}</div>` : "";
    return `<div class="enrich-row" onclick="pickInlineResult(${i})">
      ${img}
      <div class="enrich-text">
        <div class="enrich-name">${p.name}</div>
        ${cat}
      </div>
    </div>`;
  }).join("");

  dropdown.classList.add("active");
}

/**
 * _checkCustomProductLocal(query) — Client-side instant lookup of the household's
 * customProducts collection in Firestore. Returns a search-result-shaped object
 * if a matching custom product exists with a non-dismissed image, or null.
 *
 * This avoids the round-trip through api/text-search.js for items the user has
 * already uploaded photos for, giving sub-100ms dropdown results.
 */
async function _checkCustomProductLocal(query) {
  // [IMAGES DISABLED] — Product images commented out pending decision.
  // See session notes: images caused false positives from external databases,
  // inconsistent UX, and unnecessary costs. Custom photo pipeline preserved.
  // To re-enable: uncomment these blocks and restore image display logic.
  return null;
  // if (!state.hid || !query) return null;
  // const normalized = normalizeProductName(query);
  // if (!normalized) return null;
  //
  // const cpDoc = await dbGet(`households/${state.hid}/customProducts/${normalized}`);
  // if (!cpDoc || cpDoc.imageDismissed || !cpDoc.imageUrl) return null;
  //
  // // Build a result object matching the shape returned by _fetchAndScoreResults
  // // so it can be rendered by the same dropdown renderer.
  // const displayName = query.trim().replace(/\b\w/g, c => c.toUpperCase());
  // return {
  //   name: displayName,
  //   image: cpDoc.imageUrl,
  //   brand: "",
  //   category: cpDoc.category || "",
  //   source: "customProduct",
  //   _score: 100, // Exact match — highest priority
  // };
}

/**
 * _runInlineSearch(query) — Two-phase search: instantly checks the local
 * customProducts collection for a match (sub-100ms), then fires the API
 * in parallel for external database results. If a custom product is found,
 * it appears immediately in the dropdown while the API call completes.
 * API results are merged in when they arrive, with the custom product
 * deduplicated to avoid showing it twice.
 * @param {string} query — The text to search for
 */
async function _runInlineSearch(query) {
  const dropdown = g("shopSearchDropdown");
  if (!dropdown) return;

  // Show loading indicator
  dropdown.innerHTML = '<div class="search-hint">Searching…</div>';
  dropdown.classList.add("active");

  try {
    // Phase 1: Instant client-side customProduct lookup (no API round-trip).
    // Fire this AND the API call in parallel — custom result renders immediately
    // if found, API results merge in when they arrive.
    const customPromise = _checkCustomProductLocal(query);
    const apiPromise = _fetchAndScoreResults(query);

    // Show custom product result instantly if available
    const customResult = await customPromise;
    if (customResult) {
      // Bail if user changed the input while we were checking
      const curQuery = g("shi") ? g("shi").value.trim() : "";
      if (curQuery.toLowerCase() === query.toLowerCase()) {
        console.log(`[ShopSearch] Instant custom product match for "${query}"`);
        _renderShopDropdown([customResult]);
      }
    }

    // Phase 2: Wait for the full API results from external databases
    const apiResults = await apiPromise;

    // Bail if the input changed while we were fetching (stale response)
    const currentQuery = g("shi") ? g("shi").value.trim() : "";
    if (currentQuery.toLowerCase() !== query.toLowerCase()) return;

    // Merge: prepend the custom product (if found) ahead of API results,
    // deduplicating by normalized name so it doesn't appear twice.
    let merged = apiResults;
    if (customResult) {
      const customNorm = normalizeProductName(customResult.name);
      const deduped = apiResults.filter(r => normalizeProductName(r.name) !== customNorm);
      merged = [customResult, ...deduped].slice(0, 5);
    }

    if (!merged.length) {
      dropdown.classList.remove("active");
      dropdown.innerHTML = "";
      _inlineSearchResults = null;
      return;
    }

    _renderShopDropdown(merged);

  } catch (e) {
    // Search failed silently — user can still add as plain text via Enter
    console.warn("Inline search failed:", e);
    dropdown.classList.remove("active");
    dropdown.innerHTML = "";
    _inlineSearchResults = null;
  }
}

/**
 * pickInlineResult(index) — Called when the user taps a product in the inline
 * search dropdown. Creates a new shopping item enriched with the product's
 * rich data (name, brand, image, category) and closes the sheet.
 */
export function pickInlineResult(index) {
  if (!_inlineSearchResults || !_inlineSearchResults[index]) return;
  const product = _inlineSearchResults[index];

  // Capture the optional note from the collapsible note field
  const noteInp = g("addNoteInp");
  const note = noteInp ? noteInp.value.trim() : "";

  // Capture the original search query so we can decide later whether to show the brand.
  // The brand is only displayed if the user's search terms match it (avoids showing
  // irrelevant brands like "Great Value" when the user just searched "milk").
  const searchQuery = g("shi") ? g("shi").value.trim() : "";

  // Build an enriched shopping item with full product data from the search result
  const item = {
    id: Date.now().toString(),
    name: product.name,
    qty: 1,
    checked: false,
    src: "search",
    brand: product.brand || "",
    // [IMAGES DISABLED] — Product images commented out pending decision.
    // image: product.image || null,
    category: product.category || "",
    source: product.source || "search",
    searchQuery,  // Original search text — used by _shouldShowBrand() to decide brand visibility
  };
  if (note) item.note = note;

  svShopItem(item);
  showNotif(`Added "${product.name}" ✓`);

  // Clean up: clear input, collapse note, close sheet, reset dropdown
  const inp = g("shi"); if (inp) inp.value = "";
  if (noteInp) noteInp.value = "";
  const wrap = g("addNoteWrap"); if (wrap) wrap.style.display = "none";
  _clearInlineSearch();
  closeShopAddSheet();
}

/**
 * _clearInlineSearch() — Hides the inline search dropdown and clears stored results.
 * Called when the sheet closes, an item is picked, or the input is cleared.
 */
function _clearInlineSearch() {
  if (_searchDebounceTimer) clearTimeout(_searchDebounceTimer);
  _inlineSearchResults = null;
  const dropdown = g("shopSearchDropdown");
  if (dropdown) { dropdown.classList.remove("active"); dropdown.innerHTML = ""; }
}

// ── AUTO-ENRICH REMINDERS ITEMS ──────────────────────────────────────────────
// When items arrive from Apple Reminders (via /api/sync-reminders), they may
// lack product images. This runs each unenriched Reminders item through the
// same text search pipeline used by the shopping list input, and silently
// applies the top result's image if it scores well enough (>= 20).

/** Tracks item IDs currently being enriched or already processed, to prevent
 *  duplicate API calls when renderShop triggers multiple times. */
const _enrichedIds = new Set();

/**
 * enrichRemindersItems() — Scans the shopping list for Reminders-sourced items
 * that have no image and enriches them in the background using the text search
 * pipeline (/api/text-search → score → apply top result).
 *
 * Called from renderShop() on each render. The _enrichedIds guard ensures each
 * item is only processed once per session, even if renderShop fires repeatedly.
 * Enrichment is fire-and-forget — failures are silently ignored.
 */
export function enrichRemindersItems() {
  // [IMAGES DISABLED] — Product images commented out pending decision.
  // See session notes: images caused false positives from external databases,
  // inconsistent UX, and unnecessary costs. Custom photo pipeline preserved.
  // To re-enable: uncomment these blocks and restore image display logic.
  return;
  // // Find Reminders items that haven't been enriched and aren't being processed.
  // // Skip items where the user explicitly dismissed the image (imageDismissed flag) —
  // // re-enriching those would undo the user's deliberate deletion.
  // const unenriched = state.shop.filter(i =>
  //   i.src === "reminders" && !i.image && !i.imageDismissed && !_enrichedIds.has(i.id)
  // );
  // if (!unenriched.length) return;
  //
  // for (const item of unenriched) {
  //   // Mark as in-progress so we don't re-process on the next render cycle
  //   _enrichedIds.add(item.id);
  //
  //   // Fire-and-forget: search, score, and apply the best image if found.
  //   _fetchAndScoreResults(item.name).then(results => {
  //     const liveItem = state.shop.find(i => i.id === item.id);
  //     if (!liveItem || liveItem.imageDismissed || liveItem.image) return;
  //
  //     if (results.length && results[0]._score >= 80) {
  //       const best = results[0];
  //       const updated = { ...liveItem };
  //       if (best.image) updated.image = best.image;
  //       if (best.brand && !liveItem.brand) updated.brand = best.brand;
  //       if (best.category && best.category !== "General" && !liveItem.category) updated.category = best.category;
  //       updated.src = "reminders";
  //       svShopItem(updated);
  //     }
  //   }).catch(() => {});
  // }
}

// ── PRODUCT TEXT SEARCH & ENRICHMENT (BOTTOM SHEET) ─────────────────────────
// Used for enrichment AFTER an item is already added (e.g. voice input, inventory).
// For shopping list text input, the inline dropdown (above) is used instead.

/**
 * searchAndEnrich(itemId, query, list) — Searches product databases for matches
 * and shows an enrichment bottom sheet if results are found.
 * Called after voice input commits an item or when manually adding to inventory.
 * @param {string} itemId — ID of the just-added item (to update if user picks a match)
 * @param {string} query — The item name to search for
 * @param {string} list — "shop" for shopping list, "inv" for inventory
 */
export async function searchAndEnrich(itemId, query, list) {
  // Skip enrichment for very short queries (likely abbreviations, not product names)
  if (!query || query.length < 2) return;

  const resultsEl = g("enrichResults");
  const titleEl = g("enrichTitle");
  if (!resultsEl) return;

  // Show loading state in the enrichment sheet
  if (titleEl) titleEl.textContent = `Finding "${query}"…`;
  resultsEl.innerHTML = '<div class="enrich-loading"><div class="spin" style="width:28px;height:28px;margin:0 auto 8px"></div>Searching products…</div>';

  // Open the enrichment bottom sheet
  const backdrop = g("enrichBackdrop");
  const sheet = g("enrichSheet");
  if (backdrop) backdrop.classList.add("active");
  if (sheet) sheet.classList.add("active");

  try {
    // Use the shared fetch-and-score pipeline (with caching) for consistent
    // relevance ranking across inline search and post-add enrichment
    let results = await _fetchAndScoreResults(query);

    // If no relevant matches, silently close — item is already saved as plain text
    if (!results.length) {
      closeEnrichSheet();
      return;
    }

    // Update the title and render the results
    if (titleEl) titleEl.textContent = "Choose a match";

    // Build results HTML with consistent layout: image LEFT, text RIGHT.
    // On image error, swap to placeholder so alignment never breaks.
    let html = results.map((p, i) => {
      // [IMAGES DISABLED] — Product images commented out pending decision.
      // See session notes: images caused false positives from external databases,
      // inconsistent UX, and unnecessary costs. Custom photo pipeline preserved.
      // To re-enable: uncomment these blocks and restore image display logic.
      // const img = p.image
      //   ? `<img src="${p.image}" class="enrich-img" alt="" onerror="this.outerHTML='<div class=\\'enrich-img-ph\\'>🛒</div>'">`
      //   : `<div class="enrich-img-ph">🛒</div>`;
      const img = `<div class="enrich-img-ph">🛒</div>`;
      const cat = p.category && p.category !== "General"
        ? `<div class="enrich-cat">${p.category}</div>` : "";
      return `<div class="enrich-row" onclick="pickEnrichResult(${i})">
        ${img}
        <div class="enrich-text">
          <div class="enrich-name">${p.name}</div>
          ${cat}
        </div>
      </div>`;
    }).join("");

    // "Just add as typed" fallback option at the bottom
    html += `<button class="enrich-fallback" onclick="closeEnrichSheet()">
      <span style="font-size:1.1rem">📝</span>
      Just add "${query}" as typed
    </button>`;

    resultsEl.innerHTML = html;

    // Store results and context in a temporary global for the click handler
    window._enrichCtx = { itemId, query, list, results };

  } catch (e) {
    // On error, silently close — the item is already saved as plain text
    console.warn("Text search failed:", e);
    closeEnrichSheet();
  }
}

/**
 * closeEnrichSheet() — Dismisses the product enrichment bottom sheet.
 */
export function closeEnrichSheet() {
  const backdrop = g("enrichBackdrop");
  const sheet = g("enrichSheet");
  if (backdrop) backdrop.classList.remove("active");
  if (sheet) sheet.classList.remove("active");
  // Clean up the temporary enrichment context
  window._enrichCtx = null;
}

// ── PRODUCT DETAIL BOTTOM SHEET ──────────────────────────────────────────────
// Shows full product info when a user taps a shopping list item's name/content area.
// Displays whatever data is stored on the item: name, brand, image,
// quantity, and note.

/**
 * openItemDetail(id) — Opens the product detail bottom sheet for a shopping item.
 * Reads all stored fields from the item and renders them into the sheet.
 * In multi-select mode, delegates to the parent row tap handler instead.
 *
 * Custom product image lookup: checks the shared customProducts collection
 * for a household-wide image so photos uploaded from pantry show here too.
 * Respects imageDismissed: if the user deleted the image, shows placeholder.
 */
export async function openItemDetail(id) {
  // In multi-select mode, let the parent swipeRowTap handle the tap for selection toggle
  if (state.selectMode) return;

  // Stop propagation so the parent row's swipeRowTap doesn't also fire (toggling checked)
  if (event) event.stopPropagation();

  const item = state.shop.find(i => i.id === id);
  if (!item) return;

  const content = g("itemDetailContent");
  if (!content) return;

  // [IMAGES DISABLED] — Product images commented out pending decision.
  // See session notes: images caused false positives from external databases,
  // inconsistent UX, and unnecessary costs. Custom photo pipeline preserved.
  // To re-enable: uncomment these blocks and restore image display logic.

  // // ── Custom product image lookup ──
  // let displayImage = item.image;
  // let dismissed = item.imageDismissed || false;
  //
  // if (state.hid && item.name) {
  //   const normalized = normalizeProductName(item.name);
  //   if (normalized) {
  //     const cpDoc = await dbGet(`households/${state.hid}/customProducts/${normalized}`);
  //     if (cpDoc) {
  //       if (cpDoc.imageDismissed) {
  //         displayImage = null;
  //         dismissed = true;
  //       } else if (cpDoc.imageUrl) {
  //         displayImage = cpDoc.imageUrl;
  //         dismissed = false;
  //       }
  //     }
  //   }
  // }

  // // ── Product image display ──
  // const img = displayImage
  //   ? `<div class="item-detail-img-wrap drop-zone" data-item-id="${item.id}">
  //       <img src="${displayImage}" class="item-detail-img" alt="" onerror="this.style.display='none'"/>
  //       <button class="item-detail-img-del" onclick="deleteItemImage('${item.id}')" title="Remove image">×</button>
  //     </div>`
  //   : `<div class="item-detail-img-ph drop-zone" data-item-id="${item.id}" onclick="triggerProductPhotoUpload('${item.id}')" style="cursor:pointer">
  //       <div style="text-align:center">
  //         <div style="font-size:1.3rem;margin-bottom:2px;opacity:.45">📷</div>
  //         <div style="font-size:.6rem;color:var(--mt);opacity:.7">Add photo</div>
  //       </div>
  //     </div>`;

  // Build the header section (name + brand, no image).
  const showBrand = _shouldShowBrand(item);
  // const changePhotoLink = displayImage
  //   ? `<div class="item-detail-change-photo" onclick="triggerProductPhotoUpload('${item.id}')">Change photo</div>`
  //   : "";
  let html = `<div class="item-detail-header">
    <div style="flex:1;min-width:0">
      <div class="item-detail-name">${toTitleCase(item.name)}</div>
      ${showBrand ? `<div class="item-detail-brand">${item.brand}</div>` : ""}
      ${item.checked ? `<div style="margin-top:4px"><span class="item-detail-badge" style="background:var(--gnd);color:var(--gn)">✓ Purchased</span></div>` : ""}
    </div>
  </div>`;
  // <!-- Hidden file input for product photo uploads — triggered by Add/Change photo buttons -->
  // <input type="file" id="productPhotoInput" accept="image/*" style="display:none"
  //   onchange="handleProductPhotoSelected('${item.id}')" />`;

  // Category/source tags removed — hyphenated category names (e.g. "plant-based-foods-and-beverages")
  // and source labels ("via reminders") added no user value and looked ugly/technical.

  // Quantity section
  const qty = item.qty || 1;
  if (qty > 1) {
    html += `<div class="item-detail-section">
      <div class="item-detail-label">Quantity</div>
      <div class="item-detail-value">× ${qty}</div>
    </div>`;
  }

  // Note section (if present)
  if (item.note) {
    html += `<div class="item-detail-section">
      <div class="item-detail-label">Note</div>
      <div class="item-detail-value">${item.note}</div>
    </div>`;
  }

  // Nutrition section removed — text search enrichment often matches the wrong
  // product, making calorie/protein/fat/carb data unreliable and misleading.

  // Close button at the bottom
  html += `<button class="btn bs bf" onclick="closeItemDetail()" style="margin-top:8px">Close</button>`;

  content.innerHTML = html;

  // Show the bottom sheet
  const backdrop = g("itemDetailBackdrop");
  const sheet = g("itemDetailSheet");
  if (backdrop) backdrop.classList.add("active");
  if (sheet) sheet.classList.add("active");

  // [IMAGES DISABLED] — drag-and-drop listeners commented out.
  // const dropZone = content.querySelector(".drop-zone");
  // if (dropZone) _setupDropZone(dropZone, item.id);
}

/**
 * closeItemDetail() — Dismisses the product detail bottom sheet.
 */
export function closeItemDetail() {
  const backdrop = g("itemDetailBackdrop");
  const sheet = g("itemDetailSheet");
  if (backdrop) backdrop.classList.remove("active");
  if (sheet) sheet.classList.remove("active");
}

// ── DRAG-AND-DROP IMAGE UPLOAD ────────────────────────────────────────────────
// Supports dropping image files onto the product detail sheet's image area.
// Works on desktop (dragging from Finder, browser tabs, Google Images) and on
// mobile where the OS supports HTML5 drag events (iOS 15+, Android Chrome).
// The drop zone covers the entire image placeholder/wrap area for a large target.

/**
 * _setupDropZone(el, itemId) — Attaches drag-and-drop event listeners to an element.
 * Adds a golden highlight glow on dragover (matching app accent color) and handles
 * the dropped file through the same compress → upload pipeline as the file picker.
 * Also handles images dragged from browser tabs (extracts URL from DataTransfer).
 */
function _setupDropZone(el, itemId) {
  // [IMAGES DISABLED] — Product images commented out pending decision.
  // See session notes: images caused false positives from external databases,
  // inconsistent UX, and unnecessary costs. Custom photo pipeline preserved.
  // To re-enable: uncomment these blocks and restore image display logic.
  return;
  // let dragDepth = 0;
  // el.addEventListener("dragenter", (e) => {
  //   e.preventDefault(); e.stopPropagation(); dragDepth++;
  //   el.classList.add("drop-zone-active");
  // });
  // el.addEventListener("dragover", (e) => { e.preventDefault(); e.stopPropagation(); });
  // el.addEventListener("dragleave", (e) => {
  //   e.preventDefault(); e.stopPropagation(); dragDepth--;
  //   if (dragDepth <= 0) { dragDepth = 0; el.classList.remove("drop-zone-active"); }
  // });
  // el.addEventListener("drop", (e) => {
  //   e.preventDefault(); e.stopPropagation(); dragDepth = 0;
  //   el.classList.remove("drop-zone-active");
  //   _handleDrop(e.dataTransfer, itemId);
  // });
}

/**
 * _handleDrop(dataTransfer, itemId) — Processes a drop event's DataTransfer.
 * Handles two cases:
 *   1. File drop — user dragged an image file from Finder or Photos app
 *   2. URL drop — user dragged an image from a browser tab or Google Images
 *      (extracts the image URL from text/uri-list or text/html, fetches it as a blob)
 */
async function _handleDrop(dt, itemId) {
  // [IMAGES DISABLED] — Product images commented out pending decision.
  // See session notes: images caused false positives from external databases,
  // inconsistent UX, and unnecessary costs. Custom photo pipeline preserved.
  // To re-enable: uncomment these blocks and restore image display logic.
  return;
  // const item = state.shop.find(i => i.id === itemId);
  // if (!item) return;
  // if (dt.files && dt.files.length > 0) {
  //   const file = dt.files[0];
  //   if (file.type && file.type.startsWith("image/")) {
  //     await _processDroppedImage(file, item);
  //     return;
  //   }
  // }
  // const uriList = dt.getData("text/uri-list");
  // const plainText = dt.getData("text/plain");
  // const imgUrl = uriList || plainText || "";
  // if (imgUrl && /^https?:\/\/.+\.(jpe?g|png|gif|webp|bmp)/i.test(imgUrl)) {
  //   await _fetchAndUploadImageUrl(imgUrl, item);
  //   return;
  // }
  // const htmlData = dt.getData("text/html");
  // if (htmlData) {
  //   const match = htmlData.match(/<img[^>]+src=["']([^"']+)["']/i);
  //   if (match && match[1] && /^https?:\/\//.test(match[1])) {
  //     await _fetchAndUploadImageUrl(match[1], item);
  //     return;
  //   }
  // }
}

/**
 * _processDroppedImage(file, item) — Compresses and uploads a dropped image file.
 * Same pipeline as the file picker: compress → upload → save → refresh detail sheet.
 */
async function _processDroppedImage(file, item) {
  // [IMAGES DISABLED] — Product images commented out pending decision.
  // See session notes: images caused false positives from external databases,
  // inconsistent UX, and unnecessary costs. Custom photo pipeline preserved.
  // To re-enable: uncomment these blocks and restore image display logic.
  return;
  // const content = g("itemDetailContent");
  // if (content) {
  //   const imgWrap = content.querySelector(".item-detail-img-wrap, .item-detail-img-ph");
  //   if (imgWrap) {
  //     imgWrap.innerHTML = `<div style="text-align:center;padding:16px 0">
  //       <div style="font-size:1.2rem">⏳</div>
  //       <div style="font-size:.65rem;color:var(--mt);margin-top:2px">Uploading…</div>
  //     </div>`;
  //   }
  // }
  // try {
  //   const downloadUrl = await uploadProductImage(file, item.name);
  //   const updated = { ...item, image: downloadUrl, imageDismissed: false };
  //   await svShopItem(updated);
  //   _saveCustomProductImage(item.name, downloadUrl);
  //   showNotif("Photo saved ✓");
  //   openItemDetail(item.id);
  // } catch (e) {
  //   console.error("[DropZone] Upload failed:", e);
  //   showNotif("Upload failed — try again");
  //   openItemDetail(item.id);
  // }
}

/**
 * _fetchAndUploadImageUrl(url, item) — Fetches an image from a URL (e.g. dragged
 * from Google Images), converts it to a File, then runs it through the standard
 * compress → upload pipeline. Uses a CORS proxy fallback if direct fetch fails.
 */
async function _fetchAndUploadImageUrl(url, item) {
  // [IMAGES DISABLED] — Product images commented out pending decision.
  // See session notes: images caused false positives from external databases,
  // inconsistent UX, and unnecessary costs. Custom photo pipeline preserved.
  // To re-enable: uncomment these blocks and restore image display logic.
  return;
  // const content = g("itemDetailContent");
  // if (content) {
  //   const imgWrap = content.querySelector(".item-detail-img-wrap, .item-detail-img-ph");
  //   if (imgWrap) {
  //     imgWrap.innerHTML = `<div style="text-align:center;padding:16px 0">
  //       <div style="font-size:1.2rem">⏳</div>
  //       <div style="font-size:.65rem;color:var(--mt);margin-top:2px">Fetching image…</div>
  //     </div>`;
  //   }
  // }
  // try {
  //   const resp = await fetch(url);
  //   if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  //   const blob = await resp.blob();
  //   if (!blob.type || !blob.type.startsWith("image/")) throw new Error("Not an image");
  //   const file = new File([blob], "dropped-image.jpg", { type: blob.type });
  //   await _processDroppedImage(file, item);
  // } catch (e) {
  //   console.warn("[DropZone] Could not fetch dropped image URL:", e);
  //   showNotif("Couldn't load that image — try saving it first");
  //   openItemDetail(item.id);
  // }
}

/**
 * _saveCustomProductImage(name, downloadUrl) — Writes a custom product image to the
 * shared customProducts collection so it's visible across both shopping and pantry.
 * Clears imageDismissed since the user is explicitly uploading a new photo.
 * Fire-and-forget — errors are logged but don't block the UI.
 */
function _saveCustomProductImage(name, downloadUrl) {
  // [IMAGES DISABLED] — Product images commented out pending decision.
  // See session notes: images caused false positives from external databases,
  // inconsistent UX, and unnecessary costs. Custom photo pipeline preserved.
  // To re-enable: uncomment these blocks and restore image display logic.
  return;
  // if (!state.hid || !name) return;
  // const normalized = normalizeProductName(name);
  // if (!normalized) return;
  // dbSet(`households/${state.hid}/customProducts/${normalized}`, {
  //   name: name.trim(),
  //   imageUrl: downloadUrl,
  //   imageDismissed: false,
  //   updatedAt: new Date().toISOString()
  // }).catch(e => console.warn("Failed to save custom product image:", e));
}

/**
 * deleteItemImage(id) — Removes the product image from a shopping list item.
 * Clears the image field and saves immediately to Firestore, keeping all other
 * fields (name, brand, category, note, etc.) intact. Then re-opens the detail
 * sheet to show the updated placeholder state.
 */
export async function deleteItemImage(id) {
  // [IMAGES DISABLED] — Product images commented out pending decision.
  // See session notes: images caused false positives from external databases,
  // inconsistent UX, and unnecessary costs. Custom photo pipeline preserved.
  // To re-enable: uncomment these blocks and restore image display logic.
  return;
  // const item = state.shop.find(i => i.id === id);
  // if (!item) return;
  // const updated = { ...item, image: null, imageDismissed: true };
  // await svShopItem(updated);
  // if (state.hid && item.name) {
  //   const normalized = normalizeProductName(item.name);
  //   if (normalized) {
  //     dbSet(`households/${state.hid}/customProducts/${normalized}`, {
  //       name: item.name.trim(),
  //       imageDismissed: true,
  //       imageUrl: null,
  //       updatedAt: new Date().toISOString()
  //     }).catch(e => console.warn("Failed to save imageDismissed to customProducts:", e));
  //   }
  // }
  // openItemDetail(id);
}

// ── CUSTOM PRODUCT PHOTO UPLOAD ──────────────────────────────────────────────
// Lets users upload their own product photos directly from the product detail sheet.
// Photos are compressed client-side (max 400×400px, 150KB) and uploaded to Firebase
// Storage, then saved to a household-wide customProducts collection so both users
// benefit. This is the highest-priority image source — checked before external APIs.

/**
 * triggerProductPhotoUpload(id) — Opens the device file picker / camera roll.
 * Stores the target item ID so the onchange handler knows which item to update.
 */
export function triggerProductPhotoUpload(id) {
  // [IMAGES DISABLED] — Product images commented out pending decision.
  // See session notes: images caused false positives from external databases,
  // inconsistent UX, and unnecessary costs. Custom photo pipeline preserved.
  // To re-enable: uncomment these blocks and restore image display logic.
  return;
  // window._uploadTargetItemId = id;
  // const input = document.getElementById("productPhotoInput");
  // if (input) {
  //   input.value = "";
  //   input.click();
  // }
}

/**
 * handleProductPhotoSelected(id) — Called when the user picks a file from the camera roll.
 * Compresses the image, uploads to Firebase Storage, saves the URL to the item in
 * Firestore, updates the customProducts collection, and refreshes the detail sheet.
 */
export async function handleProductPhotoSelected(id) {
  // [IMAGES DISABLED] — Product images commented out pending decision.
  // See session notes: images caused false positives from external databases,
  // inconsistent UX, and unnecessary costs. Custom photo pipeline preserved.
  // To re-enable: uncomment these blocks and restore image display logic.
  return;
  // const input = document.getElementById("productPhotoInput");
  // if (!input || !input.files || !input.files[0]) return;
  // const file = input.files[0];
  // const item = state.shop.find(i => i.id === id);
  // if (!item) return;
  // const content = g("itemDetailContent");
  // if (content) {
  //   const imgWrap = content.querySelector(".item-detail-img-wrap, .item-detail-img-ph");
  //   if (imgWrap) {
  //     imgWrap.innerHTML = `<div style="text-align:center;padding:16px 0">
  //       <div style="font-size:1.2rem">⏳</div>
  //       <div style="font-size:.65rem;color:var(--mt);margin-top:2px">Uploading…</div>
  //     </div>`;
  //   }
  // }
  // try {
  //   const downloadUrl = await uploadProductImage(file, item.name);
  //   const updated = { ...item, image: downloadUrl, imageDismissed: false };
  //   await svShopItem(updated);
  //   _saveCustomProductImage(item.name, downloadUrl);
  //   showNotif("Photo saved ✓");
  //   openItemDetail(id);
  // } catch (e) {
  //   console.error("Product photo upload failed:", e);
  //   showNotif("Upload failed — try again");
  //   openItemDetail(id);
  // }
}

/**
 * pickEnrichResult(index) — Called when the user picks a product match from the
 * enrichment bottom sheet. Updates the existing item with rich product data
 * (image, brand, category) from the selected search result.
 */
export function pickEnrichResult(index) {
  const ctx = window._enrichCtx;
  if (!ctx) return;

  const product = ctx.results[index];
  if (!product) return;

  if (ctx.list === "shop") {
    // Update the shopping list item with enriched product data.
    const item = state.shop.find(i => i.id === ctx.itemId);
    if (item) {
      svShopItem({
        ...item,
        name: product.name,
        brand: product.brand || "",
        // [IMAGES DISABLED] — Product images commented out pending decision.
        // image: product.image || null,
        category: product.category || "",
        source: product.source || "search",
        // imageDismissed: false,
      });

      // [IMAGES DISABLED] — customProducts imageDismissed clearing commented out.
      // if (state.hid && product.name) {
      //   const normalized = normalizeProductName(product.name);
      //   if (normalized) {
      //     dbSet(`households/${state.hid}/customProducts/${normalized}`, {
      //       name: product.name.trim(),
      //       imageDismissed: false,
      //       updatedAt: new Date().toISOString()
      //     }).catch(e => console.warn("Failed to clear imageDismissed in customProducts:", e));
      //   }
      // }
    }
  } else if (ctx.list === "inv") {
    // Update the inventory item with enriched product data.
    const item = state.inv.find(i => i.id === ctx.itemId);
    if (item) {
      svi({
        ...item,
        name: product.name,
        brand: product.brand || "",
        // [IMAGES DISABLED] — Product images commented out pending decision.
        // image: product.image || null,
        category: product.category || item.category,
        source: product.source || "search",
        // imageDismissed: false,
      });
    }
  }

  closeEnrichSheet();
  showNotif(`Updated with "${product.name}" ✓`);
}

/**
 * recordCompleted(name) — Records a completed shopping item for bidirectional
 * Reminders sync. Writes to households/{hid}/completed_items/{id} so the
 * iOS Shortcut can poll /api/completed-items and mark it done in Apple Reminders.
 * Fire-and-forget — errors are logged but don't block the UI.
 */
export function recordCompleted(name) {
  if (!state.hid || !name) return;
  const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  dbSet(`households/${state.hid}/completed_items/${id}`, {
    name,
    completedAt: new Date().toISOString()
  }).catch(e => console.warn("recordCompleted error:", e));
}

/**
 * togShop(id) — Toggles the checked/unchecked state of a shopping item.
 * Called when a user taps a row to mark it as bought or un-bought.
 * Persists the change via svShopItem (which writes to Firestore and re-renders).
 * When checking off an item, also records it as completed for Reminders sync.
 */
export function togShop(id) {
  const item = state.shop.find(i => i.id === id);
  if (!item) return;
  const nowChecked = !item.checked;
  svShopItem({ ...item, checked: nowChecked });
  // Record completion for bidirectional Reminders sync (only when checking off, not unchecking)
  if (nowChecked) recordCompleted(item.name);
}

/**
 * toggleShNote(e, id) — Expands or collapses the inline note editor for a shopping item.
 * Stops event propagation so the tap doesn't also toggle the item's checked state.
 * When opening, focuses the textarea and places the cursor at the end.
 */
export function toggleShNote(e, id) {
  e.stopPropagation(); // Prevent the parent row's onclick from firing
  const edit = g("sne-" + id); // The note editor container div
  const inp = g("sni-" + id);  // The textarea inside it
  if (!edit) return;
  const open = edit.classList.toggle("open"); // CSS transition handles the expand/collapse animation
  if (open && inp) { inp.focus(); inp.setSelectionRange(inp.value.length, inp.value.length); }
}

/**
 * saveShNote(id) — Persists the note text when the textarea loses focus (onblur).
 * Only saves if the note actually changed, to avoid unnecessary writes.
 */
export function saveShNote(id) {
  const inp = g("sni-" + id);
  if (!inp) return;
  const item = state.shop.find(i => i.id === id);
  if (!item) return;
  const note = inp.value.trim();
  if (note === (item.note || "")) return; // No change — skip the write
  svShopItem({ ...item, note });
}

// ── INLINE QUANTITY EDITING ──────────────────────────────────────────────────
// Tapping the qty badge on a shopping item opens a small inline editor with
// +/− buttons and a number input. Changes persist to Firestore on blur or
// when +/− is tapped. The editor slides open/closed like the note editor.

/**
 * openShQty(id) — Toggles the inline quantity editor for a shopping item.
 * If the editor is already open, closes it. Otherwise opens it and focuses
 * the number input for quick editing.
 */
export function openShQty(id) {
  const edit = g("sqe-" + id); // The qty editor container div
  const inp = g("sqi-" + id);  // The number input inside it
  if (!edit) return;
  const open = edit.classList.toggle("open"); // CSS transition handles expand/collapse
  if (open && inp) { inp.focus(); inp.select(); }
}

/**
 * adjShQty(id, delta) — Adjusts a shopping item's quantity by +1 or −1.
 * Called by the +/− buttons in the inline qty editor.
 * Clamps to a minimum of 1 (can't have zero items on a shopping list).
 */
export function adjShQty(id, delta) {
  const inp = g("sqi-" + id);
  if (!inp) return;
  const newVal = Math.max(1, (parseInt(inp.value, 10) || 1) + delta);
  inp.value = newVal;
  // Persist immediately so tapping +/− feels responsive without waiting for blur
  saveShQty(id);
}

/**
 * saveShQty(id) — Persists the quantity value from the inline editor to Firestore.
 * Called on blur of the number input and after each +/− tap.
 * Skips the write if the value hasn't actually changed.
 */
export function saveShQty(id) {
  const inp = g("sqi-" + id);
  if (!inp) return;
  const item = state.shop.find(i => i.id === id);
  if (!item) return;
  const qty = Math.max(1, parseInt(inp.value, 10) || 1);
  if (qty === (item.qty || 1)) return; // No change — skip the write
  svShopItem({ ...item, qty });
}

/**
 * togAisle() — Toggles "category mode" on/off.
 * When active, unchecked items are grouped by product category (Dairy, Produce, etc.)
 * instead of a flat list. The button is visually highlighted when active.
 */
export function togAisle() {
  state.aisleMode = !state.aisleMode;
  const btn = g("aislebtn");
  // Highlight the button with the accent color when aisle mode is on
  if (btn) { btn.style.background = state.aisleMode ? "var(--ac)" : ""; btn.style.color = state.aisleMode ? "var(--bg)" : ""; }
  renderShop();
}

/**
 * setSHT(t) — Switches between the "My List" and "Deals" sub-tabs within the Shopping screen.
 * Deactivates all tabs, then activates the selected one by toggling CSS classes and display.
 * @param {string} t — "list" or "deals"
 */
export function setSHT(t) {
  // First, hide all tab bodies and deactivate all tab headers
  ["list", "deals"].forEach(x => {
    const _xt = g("shtab-" + x); if (_xt) _xt.classList.remove("active");
    const body = g("sh-" + x + "-body"); if (body) body.style.display = "none";
  });
  // Then activate only the selected tab
  const _tt = g("shtab-" + t); if (_tt) _tt.classList.add("active");
  const body = g("sh-" + t + "-body"); if (body) body.style.display = "block";

  // When switching to the Deals tab, refresh the zipcode status banner
  if (t === "deals") renderDealsZipBanner();
}

/**
 * shareList() — Shares the unchecked shopping list items via the Web Share API
 * (on mobile) or copies to clipboard (on desktop). Formats items as a bulleted
 * text list with optional prices.
 */
export function shareList() {
  const items = state.shop.filter(i => !i.checked); // Only share items not yet bought
  if (!items.length) { showNotif("List is empty!"); return; }
  // Include quantity in the shared text when > 1, e.g. "• Apples × 3"
  const lines = items.map(i => {
    let line = "• " + i.name;
    if ((i.qty || 1) > 1) line += " × " + i.qty;
    if (i.price) line += " (~$" + i.price + ")";
    return line;
  });
  const txt = "🛒 Shopping List\n\n" + lines.join("\n");
  // Prefer native share sheet (iOS/Android), fall back to clipboard copy
  if (navigator.share) { navigator.share({ title: "Shopping List", text: txt }).catch(() => {}); }
  else if (navigator.clipboard) { navigator.clipboard.writeText(txt).then(() => showNotif("List copied!")); }
}

// Cached preferred locations for the current Add to Kitchen session.
// Populated by openAddToKitchen() so the template can read them synchronously.
let _atkPreferredLocations = {};

/**
 * openAddToKitchen() — Opens the "Add to Kitchen" overlay modal.
 *
 * This flow lets the user move checked (purchased) shopping items into their
 * kitchen inventory. For each checked item, the overlay shows a row with
 * Fridge / Freezer / Pantry / Household buttons so the user can choose the storage location.
 * The default location checks saved product preferences first, then falls back to heuristic.
 */
export async function openAddToKitchen() {
  const checked = state.shop.filter(i => i.checked);
  if (!checked.length) { showNotif("No completed items!"); return; }

  // Load saved product location preferences for all checked items
  _atkPreferredLocations = {};
  for (const item of checked) {
    const pref = await _getPreferredLocation(item.name);
    if (pref) _atkPreferredLocations[item.name.toLowerCase()] = pref;
  }
  const body = g("atk-body"); // "atk" = Add To Kitchen
  body.innerHTML = `<div style="padding:16px">
    <p style="font-size:.82rem;color:var(--mt);margin-bottom:16px">Choose where each item goes in your kitchen, then tap Add All.</p>
    ${checked.map(item => {
      // Check for a saved product preference first, fall back to heuristic
      const def = _atkPreferredLocations[item.name.toLowerCase()] || guessLocation(item.name);
      return `<div class="atk-item" id="atk-${item.id}" data-loc="${def}">
        <div class="atk-name">${item.name}</div>
        <div class="atk-loc">
          <button onclick="setAtkLoc('${item.id}','fridge',this)" class="${def === 'fridge' ? 'sel' : ''}">🌡 Fridge</button>
          <button onclick="setAtkLoc('${item.id}','freezer',this)" class="${def === 'freezer' ? 'sel' : ''}">🧊 Freeze</button>
          <button onclick="setAtkLoc('${item.id}','pantry',this)" class="${def === 'pantry' ? 'sel' : ''}">🥫 Pantry</button>
          <button onclick="setAtkLoc('${item.id}','household',this)" class="${def === 'household' ? 'sel' : ''}">🏠 House</button>
        </div>
      </div>`;
    }).join("")}
  </div>`;
  showOv("atk"); // Display the overlay modal
}

/**
 * setAtkLoc(id, loc, btn) — Updates the selected storage location for an item
 * in the "Add to Kitchen" overlay. Called when the user taps Fridge/Freezer/Pantry.
 * Stores the choice in the row's data-loc attribute for later use by confirmAddToKitchen.
 */
export function setAtkLoc(id, loc, btn) {
  const row = g("atk-" + id);
  row.dataset.loc = loc; // Persist the selection in the DOM for confirmAddToKitchen to read
  row.querySelectorAll(".atk-loc button").forEach(b => b.classList.remove("sel")); // Deselect all
  btn.classList.add("sel"); // Highlight the tapped button
}

/**
 * confirmAddToKitchen() — Executes the "Add to Kitchen" action.
 *
 * For each checked shopping item:
 *   1. Reads the user-selected storage location from the overlay DOM (data-loc).
 *   2. Checks if the item already exists in inventory (case-insensitive name match).
 *      - If it exists: increments qty by 1, preserves all existing fields.
 *      - If it's new: creates a new inventory entry with guessed category, qty=1, etc.
 *   3. Saves the inventory item to Firestore (svi).
 *   4. Deletes the shopping item from Firestore (dlShopItem).
 *
 * After processing all items, closes the overlay and shows a success notification.
 */
export async function confirmAddToKitchen() {
  const checked = state.shop.filter(i => i.checked);
  const today = new Date().toLocaleDateString();
  let added = 0;
  for (const item of checked) {
    const row = g("atk-" + item.id);
    if (!row) continue;
    const loc = row.dataset.loc || guessLocation(item.name); // Fall back to heuristic if DOM missing
    // Check if this item already exists in the kitchen inventory (by name, case-insensitive)
    const existing = state.inv.find(i => i.name.toLowerCase() === item.name.toLowerCase());
    // Use the shopping item's quantity (default 1 for old items without qty field)
    const shopQty = item.qty || 1;
    await svi({
      // If item exists, reuse its ID; otherwise generate a unique ID with timestamp + random suffix
      id: existing ? existing.id : "inv-" + Date.now() + "-" + Math.random().toString(36).slice(2),
      name: existing ? existing.name : item.name,
      qty: existing ? (existing.qty + shopQty) : shopQty, // Add shopping qty to existing kitchen qty
      unit: existing ? existing.unit : "unit",
      location: loc,
      category: existing ? existing.category : gcat({ name: item.name }), // gcat guesses category from name
      addedAt: existing ? existing.addedAt : today,  // Preserve original add date for existing items
      brand: existing ? existing.brand : (item.brand || ""),  // Preserve brand from scanned shopping items
      expiry: existing ? existing.expiry : null,
      image: existing ? existing.image : (item.image || null),  // Preserve product image from scanned items
      source: "shopping", // Track that this item came from the shopping list
    });
    // Save the user's location choice as a preference for next time
    _savePreferredLocation(item.name, loc);
    await dlShopItem(item.id); // Remove from shopping list after adding to kitchen
    added++;
  }
  hideOv("atk");
  showNotif(`${added} item${added !== 1 ? "s" : ""} added to your supplies! 🧺`);
}

/**
 * buildList() — AI-powered "Build from Meal Plan" feature.
 *
 * Flow:
 *   1. Collects the user's meal plan for the current week (from state.mp).
 *   2. Collects their current kitchen inventory (from state.inv).
 *   3. Sends both to Claude (Haiku) via /api/proxy, asking it to return ONLY
 *      the ingredients that are still needed (not already in inventory).
 *   4. Parses the bulleted response, filters out items already on the shopping list.
 *   5. Opens a preview modal (#buildPreviewM) where the user can toggle items on/off
 *      before adding them to their shopping list.
 *
 * The button shows a loading state ("Thinking...") while the API call is in progress.
 */
export async function buildList() {
  // Build a string of this week's meals, e.g. "Mon: Pasta, Tue: Tacos"
  const ms = wDates().map(d => { const k = d.toISOString().split("T")[0]; return state.mp[k] ? `${d.toLocaleDateString("en-US", { weekday: "short" })}: ${state.mp[k]}` : ""; }).filter(Boolean).join(", ");
  if (!ms) { showNotif("No meals planned yet!"); return; }

  // Build a string of current inventory, e.g. "Milk (1 gallon), Eggs (12 unit)"
  const is = state.inv.map(i => `${i.name} (${i.qty} ${i.unit})`).join(", ");

  // Show loading state on the button
  const btn = document.querySelector('[onclick="buildList()"]');
  const origTxt = btn ? btn.textContent : "";
  if (btn) { btn.disabled = true; btn.textContent = "⏳ Thinking…"; }

  try {
    // Call Claude Haiku via the server-side proxy to avoid exposing API keys
    const r = await fetch("/api/proxy", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ model: "claude-haiku-4-5-20251001", max_tokens: 500, messages: [{ role: "user", content: `Week meals: ${ms}\nAlready have: ${is}\nList ONLY ingredients still needed. Return ONLY a bullet list, each line starting "- ". No categories, no headers, no explanation.` }] }) });
    const data = await r.json(), text = (data.content && data.content[0] && data.content[0].text || "");

    // Parse the bullet list response: extract item names from lines like "- Chicken breast"
    const suggested = [];
    const skipped = [];  // Items fully in stock (skipped by AI)
    text.split("\n").forEach(line => {
      const m = line.match(/^[-•*]\s+(.+)/); // Match lines starting with -, •, or *
      if (m) {
        const nm = m[1].replace(/\*\*/g, "").trim(); // Strip markdown bold formatting
        // Only add if it's not already on the shopping list (case-insensitive dedup)
        if (nm && !state.shop.find(i => i.name.toLowerCase() === nm.toLowerCase())) suggested.push({ name: nm, sel: true });
      }
    });

    // Cross-check AI suggestions against current inventory for a summary.
    // Items the AI didn't suggest (but the recipe needs) were skipped because
    // we already have them — count those for the user's information.
    const allIngredients = text.split("\n").filter(l => l.match(/^[-•*]\s+/)).length;
    const invNames = state.inv.map(i => i.name.toLowerCase());

    // Check each suggested item against inventory for "have some, need more" notes
    suggested.forEach(item => {
      const match = state.inv.find(i => i.name.toLowerCase() === item.name.toLowerCase());
      if (match && match.qty > 0) {
        item.note = `Have ${match.qty} ${match.unit} — need more`;
      }
    });

    if (!suggested.length) { showNotif("Nothing new needed — you're all stocked! ✓"); return; }

    // Store suggestions globally so the preview modal helpers (bpTog, bpConfirm) can access them
    window._bpItems = suggested;

    // Build a summary banner showing inventory check results
    const inStockCount = state.inv.length > 0 ? Math.max(0, allIngredients - suggested.length) : 0;
    const partialCount = suggested.filter(i => i.note).length;
    const summaryParts = [];
    if (inStockCount > 0) summaryParts.push(`✅ ${inStockCount} already in stock`);
    if (partialCount > 0) summaryParts.push(`⚠️ ${partialCount} partially stocked`);
    summaryParts.push(`🛒 ${suggested.length} to add`);
    const summaryHtml = `<div style="padding:10px 16px;background:var(--acd);border-radius:12px;margin-bottom:12px;font-size:.82rem;color:var(--tx2);line-height:1.6">${summaryParts.join("<br>")}</div>`;

    // Render the preview list: each item is a toggleable row with a green check circle.
    // Items that partially match inventory show a note below the name.
    g("bpList").innerHTML = summaryHtml + suggested.map((it, i) => `<div id="bpitem-${i}" onclick="bpTog(${i})" style="display:flex;align-items:center;gap:12px;padding:13px 16px;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;cursor:pointer;transition:all .15s"><div id="bpck-${i}" style="width:24px;height:24px;border-radius:50%;background:var(--gn);border:2px solid var(--gn);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.8rem;color:#0c0c0a;transition:all .2s">✓</div><div style="flex:1;min-width:0"><div style="font-size:.9rem;font-weight:500">${it.name}</div>${it.note ? `<div style="font-size:.72rem;color:var(--am);margin-top:2px">${it.note}</div>` : ""}</div></div>`).join("");
    bpUpdBtn(); // Update the "Add N items" button label
    g("buildPreviewM").classList.add("active"); // Show the preview modal
  } catch { showNotif("Couldn't reach Claude — check connection"); }
  finally { if (btn) { btn.disabled = false; btn.textContent = origTxt; } } // Restore button state
}

// ── BUILD PREVIEW MODAL HELPERS ─────────────────────────────────────────────
// These functions manage the "Build from Meal Plan" preview modal, where the user
// can select/deselect AI-suggested items before adding them to the shopping list.
// The suggested items are stored in window._bpItems (array of { name, sel }).

/**
 * bpTog(i) — Toggles a single item's selection in the build preview modal.
 * Updates both the data model (window._bpItems[i].sel) and the visual state
 * (checkbox fill color and row border).
 */
export function bpTog(i) {
  window._bpItems[i].sel = !window._bpItems[i].sel;
  const ck = g("bpck-" + i), row = g("bpitem-" + i);
  // Green filled circle = selected; transparent circle = deselected
  if (window._bpItems[i].sel) { ck.textContent = "✓"; ck.style.background = "var(--gn)"; ck.style.borderColor = "var(--gn)"; ck.style.color = "#0c0c0a"; row.style.borderColor = "var(--b1)"; }
  else { ck.textContent = ""; ck.style.background = "transparent"; ck.style.borderColor = "var(--b2)"; row.style.borderColor = "var(--b2)"; }
  bpUpdBtn(); // Recalculate the "Add N items" button label
}

/**
 * bpSelAll(on) — Selects or deselects ALL items in the build preview modal.
 * @param {boolean} on — true to select all, false to deselect all.
 */
export function bpSelAll(on) {
  window._bpItems.forEach((_, i) => { window._bpItems[i].sel = on; const ck = g("bpck-" + i), row = g("bpitem-" + i); if (on) { ck.textContent = "✓"; ck.style.background = "var(--gn)"; ck.style.borderColor = "var(--gn)"; ck.style.color = "#0c0c0a"; row.style.borderColor = "var(--b1)"; } else { ck.textContent = ""; ck.style.background = "transparent"; ck.style.borderColor = "var(--b2)"; row.style.borderColor = "var(--b2)"; } }); bpUpdBtn();
}

/**
 * bpUpdBtn() — Updates the confirm button text and disabled state in the build
 * preview modal. Shows "Add 5 items" or "Nothing selected" depending on count.
 */
function bpUpdBtn() {
  const n = window._bpItems.filter(i => i.sel).length;
  const btn = g("bpAddBtn");
  if (btn) btn.textContent = n ? `Add ${n} item${n !== 1 ? "s" : ""}  ✓` : "Nothing selected";
  if (btn) btn.disabled = !n; // Disable button when nothing is selected
}

/**
 * bpConfirm() — Confirms the build preview: saves all selected items to Firestore
 * as new shopping list entries (tagged with src "meal-plan"), then closes the modal.
 * Each item gets a unique ID combining timestamp + random string to avoid collisions.
 */
export async function bpConfirm() {
  const toAdd = window._bpItems.filter(i => i.sel);
  if (!toAdd.length) { g("buildPreviewM").classList.remove("active"); return; } // Nothing selected — just close
  for (const it of toAdd) await svShopItem({ id: Date.now().toString() + Math.random().toString(36).slice(2), name: it.name, qty: 1, checked: false, src: "meal-plan" });
  g("buildPreviewM").classList.remove("active"); // Close the preview modal
  showNotif(`Added ${toAdd.length} item${toAdd.length !== 1 ? "s" : ""}! 🛒`);
}

// ── DEALS (FLIPP API) ────────────────────────────────────────────────────────
// The Deals sub-tab fetches REAL local grocery deals from the Flipp API.
// Flipp aggregates weekly flyer/circular data from hundreds of US grocery chains
// including ShopRite, Stop & Shop, Walmart, Target, Aldi, and many more.
// Results are actual store circular data — no AI-generated estimates.
// If no deals are found, we show a clear message (never falls back to AI).

/**
 * renderDealsZipBanner() — Shows the user's configured zipcode in the Deals tab,
 * or prompts them to set one in Settings if not configured yet.
 * Called when the Deals tab is opened.
 */
export function renderDealsZipBanner() {
  const banner = g("deals-zip-banner");
  if (!banner) return;
  const zip = state.cfg.zipcode;
  if (zip) {
    banner.innerHTML = `📍 Searching deals near <strong>${zip}</strong> <span style="font-size:.72rem;color:var(--mt)">(change in Settings)</span>`;
    banner.style.borderColor = "var(--b2)";
  } else {
    banner.innerHTML = `⚠️ Set your zipcode in <strong style="cursor:pointer;color:var(--ac)" onclick="hideOv('');showOv('settings')">Settings</strong> to find local deals near you.`;
    banner.style.borderColor = "var(--am)";
  }
}

/**
 * renderDeals(deals, query) — Renders an array of deal objects into the #dealslist container.
 * Each deal object has: { name, brand, store, storeAddress, regular, sale_price, onSale, savings, image, size }.
 * If no deals are found, shows an empty-state placeholder with a clear message.
 *
 * Uses imperative DOM creation (createElement) rather than innerHTML for the cards,
 * which avoids XSS issues with deal names that could contain HTML.
 */
function renderDeals(deals, query) {
  const el = g("dealslist");
  if (!deals || !deals.length) {
    el.innerHTML = `<div class="es"><div class="ei">🏷</div><p>No deals found for <strong>${query}</strong>.<br>Try a different search term or check back later for new circulars.</p></div>`;
    return;
  }
  el.innerHTML = ""; // Clear previous results
  deals.forEach(d => {
    // Build each deal card using DOM elements (avoids XSS with untrusted API data)
    const card = document.createElement("div"); card.className = "deal-card" + (d.onSale ? " deal-match" : "");
    const left = document.createElement("div"); left.style.flex = "1"; // Left side: text content

    // Store name (with merchant logo if available from Flipp)
    const store = document.createElement("div"); store.className = "deal-store"; store.textContent = d.store || "Store";
    const name = document.createElement("div"); name.className = "deal-name"; name.textContent = d.name || "";

    // Brand + size line (if available)
    if (d.brand || d.size) {
      const meta = document.createElement("div");
      meta.style.cssText = "font-size:.72rem;color:var(--mt);margin-top:1px";
      meta.textContent = [d.brand, d.size].filter(Boolean).join(" · ");
      left.appendChild(store); left.appendChild(name); left.appendChild(meta);
    } else {
      left.appendChild(store); left.appendChild(name);
    }

    // Price row: sale price, regular price (strikethrough via CSS), and savings badge
    const priceRow = document.createElement("div"); priceRow.style.cssText = "display:flex;align-items:baseline;gap:6px;margin-top:4px;flex-wrap:wrap";
    if (d.sale_price) { const sp = document.createElement("span"); sp.className = "deal-price"; sp.textContent = d.sale_price; priceRow.appendChild(sp); }
    // Show original price with strikethrough only when item is on sale
    if (d.onSale && d.regular) { const op = document.createElement("span"); op.className = "deal-orig"; op.textContent = d.regular; priceRow.appendChild(op); }
    if (d.savings) { const sv = document.createElement("span"); sv.className = "deal-badge"; sv.textContent = "Save " + d.savings; priceRow.appendChild(sv); }
    left.appendChild(priceRow);

    // "+ List" button: adds this deal's item to the shopping list
    const btn = document.createElement("button"); btn.className = "btn bs bsm"; btn.style.cssText = "align-self:center;flex-shrink:0;margin-left:8px"; btn.textContent = "+ List";
    // Closure captures the deal name for the click handler (avoids stale reference in loop)
    ((n) => { btn.onclick = () => addDealToList(n); })(d.name || "");
    card.appendChild(left); card.appendChild(btn); el.appendChild(card);
  });
}

/**
 * renderNearbyStores(stores) — Displays a compact list of stores with deals
 * found near the user's zipcode. Shown after the first successful search.
 */
function renderNearbyStores(stores) {
  const el = g("deals-stores");
  if (!el || !stores || !stores.length) return;
  el.style.display = "block";
  el.innerHTML = `<div style="font-size:.72rem;color:var(--mt);font-weight:600;margin-bottom:4px">Stores with deals</div>` +
    stores.map(s => `<div style="font-size:.74rem;color:var(--tx2);padding:2px 0">${s.name}</div>`).join("");
}

/**
 * addDealToList(name) — Adds a deal item to the shopping list.
 * Deduplicates by checking if an item with the same name (case-insensitive) already exists.
 */
export function addDealToList(name) {
  const decoded = (name || "").replace(/&#39;/g, "'"); // Fix any HTML-encoded apostrophes
  if (!state.shop.find(i => i.name.toLowerCase() === decoded.toLowerCase())) {
    svShopItem({ id: Date.now().toString(), name: decoded, qty: 1, checked: false, src: "deal" });
    showNotif(decoded + " added!");
  } else { showNotif("Already on your list!"); }
}

/**
 * fetchDeals(query) — Core deal-fetching function via the Flipp API.
 *
 * Calls /api/deals with the user's configured zipcode and the search query.
 * Results are cached in localStorage for 2 hours per query to reduce API calls.
 * Flipp covers ShopRite, Stop & Shop, Walmart, Target, Aldi, and many more.
 *
 * @param {string} query — What to search for (e.g. "chicken breast")
 * @returns {Object} — { deals: [...], stores: [...], sources: [...] }
 */
async function fetchDeals(query) {
  const zipcode = state.cfg.zipcode;
  if (!zipcode) throw new Error("Set your zipcode in Settings to search for local deals.");

  // Check localStorage cache (2-hour TTL — flyer data updates weekly, so this is fine)
  const cacheKey = "ks-deals-" + zipcode + "-" + query.toLowerCase().replace(/\s+/g, "_").substring(0, 40);
  const cached = J(cacheKey);
  if (cached && cached.ts && (Date.now() - cached.ts) < 7200000) return cached; // 2 hours

  // Call the serverless deals proxy endpoint (Flipp API)
  const r = await fetch("/api/deals", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ zipcode, query })
  });

  const data = await r.json();

  // Handle API-level errors
  if (!r.ok || data.error) {
    throw new Error(data.message || data.error || "Deals API request failed");
  }

  // Cache successful results for 2 hours
  Js(cacheKey, { ...data, ts: Date.now() });
  return data;
}

/**
 * searchDeals() — Triggered by the "Search" button in the Deals tab.
 * Reads the user's search query, calls the Flipp API via /api/deals, and renders results.
 * Shows clear error messages when the API is unavailable or no deals are found.
 */
export async function searchDeals() {
  const q = g("dealsearch").value.trim();
  if (!q) { showNotif("Enter something to search"); return; }

  const st = g("dealsstatus"); // Status message element
  st.style.display = "block"; st.style.color = "var(--mt)";
  st.textContent = "🔍 Searching deals for " + q + " near " + (state.cfg.zipcode || "your area") + "…";
  g("dealslist").innerHTML = ""; // Clear previous results

  try {
    const data = await fetchDeals(q);
    st.style.display = "none"; // Hide status on success

    // Show message from API if provided (e.g. no coverage in this area)
    if (data.message) {
      g("dealslist").innerHTML = `<div class="es"><div class="ei">🏷</div><p>${data.message}</p></div>`;
      return;
    }

    // Render stores with deals (helps user see which stores are covered nearby)
    if (data.stores) renderNearbyStores(data.stores);

    renderDeals(data.deals, q);
  } catch (e) {
    st.style.color = "var(--rd)"; // Red text for errors
    st.textContent = e.message || "Unknown error";
  }
}

/**
 * dealsFromList() — "Find Deals for My List" button handler.
 *
 * Searches deals for all unchecked shopping list items at once (up to 8 items,
 * combined into a single search query to minimize API calls).
 *
 * If the shopping list is empty but there are meals planned,
 * offers to search deals based on the meal plan instead (via confirm dialog).
 */
export async function dealsFromList() {
  const items = state.shop.filter(i => !i.checked);

  // If list is empty, offer to search by meal plan instead
  if (!items.length) {
    const meals = Object.values(state.mp).filter(Boolean);
    if (!meals.length) { showNotif("Add items to your list first!"); return; }
    const confirmed = confirm("Your list is empty. Search deals for this week's meals?\n\n" + meals.join(", "));
    if (!confirmed) return;
    const st = g("dealsstatus");
    st.style.display = "block"; st.textContent = "Searching deals for your meal plan...";
    g("dealslist").innerHTML = "";
    try {
      const data = await fetchDeals(meals.join(", "));
      st.style.display = "none";
      if (data.message) { g("dealslist").innerHTML = `<div class="es"><div class="ei">🏷</div><p>${data.message}</p></div>`; return; }
      if (data.stores) renderNearbyStores(data.stores);
      renderDeals(data.deals, meals.join(", "));
    } catch (e) { st.style.color = "var(--rd)"; st.textContent = e.message; }
    return;
  }

  // Normal path: search deals for up to 8 unchecked shopping list items
  const st = g("dealsstatus");
  const names = items.slice(0, 8).map(i => i.name).join(", "); // Cap at 8 for a reasonable query
  st.style.display = "block"; st.style.color = "var(--mt)"; st.textContent = "Searching deals for: " + names + "...";
  g("dealslist").innerHTML = "";
  try {
    const data = await fetchDeals(names);
    st.style.display = "none";
    if (data.message) { g("dealslist").innerHTML = `<div class="es"><div class="ei">🏷</div><p>${data.message}</p></div>`; return; }
    if (data.stores) renderNearbyStores(data.stores);
    if (!data.deals.length) g("dealslist").innerHTML = '<div class="es"><div class="ei">🏷</div><p>No deals found for your list items.<br/>Try searching for individual items.</p></div>';
    else renderDeals(data.deals, names);
  } catch (e) { st.style.color = "var(--rd)"; st.textContent = e.message; }
}
