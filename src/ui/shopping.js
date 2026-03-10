// ── SHOPPING SCREEN ──────────────────────────────────────────────────────────
// This module handles the entire Shopping tab: the shopping list UI, quick-add,
// inline notes, aisle-grouping mode, "Build from meal plan" (AI-powered),
// the "Add to Kitchen" flow that moves purchased items into inventory,
// and a Deals sub-tab that searches for live grocery deals via Claude web search.

import { state, J, Js } from '../state.js';       // J = read from localStorage (JSON parse), Js = write to localStorage (JSON stringify)
import { svShopItem, dlShopItem } from '../db.js';  // svShopItem = save/upsert a shopping item, dlShopItem = delete one
import { g, guessAisle, guessLocation, gcat, showNotif, showOv, hideOv, fmtR } from '../helpers.js';
// g = getElementById shorthand, guessAisle = heuristic aisle label from item name,
// guessLocation = heuristic storage location (fridge/freezer/pantry),
// gcat = guess category for inventory, showNotif = toast notification,
// showOv/hideOv = show/hide overlay modals, fmtR = format helper
import { svi } from '../db.js';       // svi = save/upsert an inventory item to Firestore
import { wDates } from '../helpers.js'; // wDates = returns array of Date objects for the current week (Mon–Sun)

// ── VOICE INPUT (Web Speech API) ─────────────────────────────────────────────
// Uses the SpeechRecognition API to let users speak items into the shopping list.
// The mic button is hidden if the browser doesn't support the API (graceful fallback).
// Listens continuously until the user taps the mic button again to stop.
// Shows a live interim transcript in the input field while speaking.

/** Module-level reference to the active SpeechRecognition instance (null when not listening) */
let _recognition = null;
/** Tracks whether we're currently listening for speech */
let _listening = false;
/** Accumulates finalized transcript segments across multiple speech results */
let _finalTranscript = "";

/**
 * initVoice() — Called on page load to detect Web Speech API support.
 * If supported, shows the mic button. If not, the button stays hidden (graceful fallback).
 * Works across Chrome (webkitSpeechRecognition) and other browsers (SpeechRecognition).
 */
export function initVoice() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return; // Browser doesn't support speech — button stays hidden

  const btn = g("micbtn");
  if (btn) btn.style.display = ""; // Show the mic button since API is available
}

/**
 * _setMicUI(active) — Toggles all mic-related visual indicators on or off.
 * Controls the pulsing button animation, the "Listening..." status label,
 * and clears the input field placeholder when entering/exiting voice mode.
 */
function _setMicUI(active) {
  const btn = g("micbtn");
  const status = g("micstatus");
  if (btn) btn.classList.toggle("mic-active", active);
  if (status) status.classList.toggle("visible", active);
}

/**
 * toggleVoice() — Starts or stops voice recognition.
 * Tap once to start listening — button pulses, "Listening..." label appears,
 * and a live transcript is shown in the input field as the user speaks.
 * Tap again to stop — whatever was recognized gets added to the shopping list.
 * The user has full control over when to stop; there is no auto-stop on silence.
 */
export function toggleVoice() {
  // If already listening, stop — the onend handler will finalize and add the item
  if (_listening && _recognition) {
    _recognition.stop();
    return;
  }

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) { showNotif("Voice input not supported"); return; }

  _recognition = new SpeechRecognition();
  _recognition.lang = "en-US";
  _recognition.interimResults = true;   // Show live transcript as the user speaks
  _recognition.maxAlternatives = 1;
  _recognition.continuous = true;       // Keep listening until user taps stop — no auto-stop

  _finalTranscript = "";
  _listening = true;
  _setMicUI(true);

  // Clear the input and set placeholder to guide the user
  const inp = g("shi");
  if (inp) { inp.value = ""; inp.placeholder = "Speak now..."; }

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
   * onend — Fires when recognition stops (user tapped stop or an error occurred).
   * Takes whatever was recognized, adds it to the shopping list, and resets UI.
   */
  _recognition.onend = () => {
    const transcript = (_finalTranscript || "").trim();
    _listening = false;
    _recognition = null;
    _finalTranscript = "";
    _setMicUI(false);

    // Restore the default placeholder
    const inp = g("shi");
    if (inp) inp.placeholder = "Add item\u2026";

    // If we got any recognized text, add it to the shopping list
    if (transcript && inp) {
      inp.value = transcript;
      qadd();
      showNotif(`Added "${transcript}" 🎤`);
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
 *   - Multi-select mode (sel-cb checkbox shown when selectMode is active)
 *
 * The "shit" class name is short for "shopping item" row.
 * "chk" class applies strikethrough styling for checked-off items.
 */
export function sH(item) {
  return `<div class="swipe-wrap" id="sw-${item.id}" data-id="${item.id}" data-list="shop">
    <div class="swipe-inner">
      <!-- Main row: tap toggles checked state -->
      <div class="shit${item.checked ? " chk" : ""}" onclick="swipeRowTap('${item.id}','shop')">
        <div class="sel-cb">✓</div>           <!-- Multi-select checkbox (hidden unless selectMode is active) -->
        <div class="shck">${item.checked ? "✓" : ""}</div>  <!-- Checked indicator circle -->
        <div style="flex:1;min-width:0">
          <div class="shnm">${item.name}</div>
          ${item.note ? `<div class="shnote">📝 ${item.note}</div>` : ""}  <!-- Optional user note shown below name -->
        </div>
        ${item.price ? `<div class="price-tag">~$${item.price}</div>` : ""}  <!-- Estimated price if available -->
        <button class="sh-note-btn" onclick="toggleShNote(event,'${item.id}')" title="Add note">✏️</button>
      </div>
      <!-- Expandable note editor (hidden by default, toggled by toggleShNote) -->
      <div class="sh-note-edit" id="sne-${item.id}">
        <textarea class="sh-note-inp" id="sni-${item.id}" rows="2" placeholder="Add a note… (e.g. brand, size, store)" onblur="saveShNote('${item.id}')">${item.note || ""}</textarea>
      </div>
    </div>
    <!-- Delete action revealed when user swipes the row left -->
    <div class="swipe-del" onclick="swipeDelItem('${item.id}','shop')"><span>🗑</span>Delete</div>
  </div>`;
}

/**
 * renderShop() — Full re-render of the shopping list container (#shlist).
 *
 * Splits items into unchecked ("to buy") and checked ("done") groups,
 * sorts each alphabetically, and renders them as HTML.
 *
 * Two display modes:
 *   1. Aisle mode (state.aisleMode) — groups unchecked items by guessed aisle
 *      (e.g. "Dairy", "Produce") so the user can shop aisle-by-aisle.
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
    // Aisle-grouped mode: bucket unchecked items by their guessed aisle name
    const grps = {};
    un.forEach(i => { const a = guessAisle(i.name); if (!grps[a]) grps[a] = []; grps[a].push(i); });
    // Render each aisle group with a section header, followed by checked ("Done") items at the bottom
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
}

/**
 * qadd() — Quick-add: reads the text input (#shi), creates a new shopping item,
 * saves it to Firestore, and clears the input. Uses timestamp as a unique ID.
 * Source is tagged "manual" to distinguish from AI-generated or meal-plan items.
 */
export function qadd() {
  const i = g("shi"), v = i.value.trim(); // "shi" = shopping input text field
  if (!v) return; // Do nothing if input is empty
  svShopItem({ id: Date.now().toString(), name: v, checked: false, src: "manual" });
  i.value = ""; // Clear the input after adding
}

/**
 * togShop(id) — Toggles the checked/unchecked state of a shopping item.
 * Called when a user taps a row to mark it as bought or un-bought.
 * Persists the change via svShopItem (which writes to Firestore and re-renders).
 */
export function togShop(id) {
  const item = state.shop.find(i => i.id === id);
  if (!item) return;
  svShopItem({ ...item, checked: !item.checked });
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

/**
 * togAisle() — Toggles "aisle mode" on/off.
 * When active, unchecked items are grouped by guessed grocery aisle (Dairy, Produce, etc.)
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
}

/**
 * shareList() — Shares the unchecked shopping list items via the Web Share API
 * (on mobile) or copies to clipboard (on desktop). Formats items as a bulleted
 * text list with optional prices.
 */
export function shareList() {
  const items = state.shop.filter(i => !i.checked); // Only share items not yet bought
  if (!items.length) { showNotif("List is empty!"); return; }
  const lines = items.map(i => i.price ? "• " + i.name + " (~$" + i.price + ")" : "• " + i.name);
  const txt = "🛒 Shopping List\n\n" + lines.join("\n");
  // Prefer native share sheet (iOS/Android), fall back to clipboard copy
  if (navigator.share) { navigator.share({ title: "Shopping List", text: txt }).catch(() => {}); }
  else if (navigator.clipboard) { navigator.clipboard.writeText(txt).then(() => showNotif("List copied!")); }
}

/**
 * openAddToKitchen() — Opens the "Add to Kitchen" overlay modal.
 *
 * This flow lets the user move checked (purchased) shopping items into their
 * kitchen inventory. For each checked item, the overlay shows a row with
 * Fridge / Freezer / Pantry buttons so the user can choose the storage location.
 * The default location is guessed heuristically from the item name (e.g. "milk" -> fridge).
 */
export function openAddToKitchen() {
  const checked = state.shop.filter(i => i.checked);
  if (!checked.length) { showNotif("No completed items!"); return; }
  const body = g("atk-body"); // "atk" = Add To Kitchen
  body.innerHTML = `<div style="padding:16px">
    <p style="font-size:.82rem;color:var(--mt);margin-bottom:16px">Choose where each item goes in your kitchen, then tap Add All.</p>
    ${checked.map(item => {
      const def = guessLocation(item.name); // Heuristic default: "fridge", "freezer", or "pantry"
      return `<div class="atk-item" id="atk-${item.id}" data-loc="${def}">
        <div class="atk-name">${item.name}</div>
        <div class="atk-loc">
          <button onclick="setAtkLoc('${item.id}','fridge',this)" class="${def === 'fridge' ? 'sel' : ''}">🌡 Fridge</button>
          <button onclick="setAtkLoc('${item.id}','freezer',this)" class="${def === 'freezer' ? 'sel' : ''}">🧊 Freeze</button>
          <button onclick="setAtkLoc('${item.id}','pantry',this)" class="${def === 'pantry' ? 'sel' : ''}">🥫 Pantry</button>
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
    await svi({
      // If item exists, reuse its ID; otherwise generate a unique ID with timestamp + random suffix
      id: existing ? existing.id : "inv-" + Date.now() + "-" + Math.random().toString(36).slice(2),
      name: existing ? existing.name : item.name,
      qty: existing ? (existing.qty + 1) : 1,       // Increment quantity if already in kitchen
      unit: existing ? existing.unit : "unit",
      location: loc,
      category: existing ? existing.category : gcat({ name: item.name }), // gcat guesses category from name
      addedAt: existing ? existing.addedAt : today,  // Preserve original add date for existing items
      brand: existing ? existing.brand : "",
      expiry: existing ? existing.expiry : null,
      image: existing ? existing.image : null,
      source: "shopping", // Track that this item came from the shopping list
    });
    await dlShopItem(item.id); // Remove from shopping list after adding to kitchen
    added++;
  }
  hideOv("atk");
  showNotif(`${added} item${added !== 1 ? "s" : ""} added to your kitchen! 🧺`);
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
    text.split("\n").forEach(line => {
      const m = line.match(/^[-•*]\s+(.+)/); // Match lines starting with -, •, or *
      if (m) {
        const nm = m[1].replace(/\*\*/g, "").trim(); // Strip markdown bold formatting
        // Only add if it's not already on the shopping list (case-insensitive dedup)
        if (nm && !state.shop.find(i => i.name.toLowerCase() === nm.toLowerCase())) suggested.push({ name: nm, sel: true });
      }
    });

    if (!suggested.length) { showNotif("Nothing new needed — you're all stocked! ✓"); return; }

    // Store suggestions globally so the preview modal helpers (bpTog, bpConfirm) can access them
    window._bpItems = suggested;

    // Render the preview list: each item is a toggleable row with a green check circle
    g("bpList").innerHTML = suggested.map((it, i) => `<div id="bpitem-${i}" onclick="bpTog(${i})" style="display:flex;align-items:center;gap:12px;padding:13px 16px;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;cursor:pointer;transition:all .15s"><div id="bpck-${i}" style="width:24px;height:24px;border-radius:50%;background:var(--gn);border:2px solid var(--gn);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.8rem;color:#0c0c0a;transition:all .2s">✓</div><div style="font-size:.9rem;font-weight:500">${it.name}</div></div>`).join("");
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
  for (const it of toAdd) await svShopItem({ id: Date.now().toString() + Math.random().toString(36).slice(2), name: it.name, checked: false, src: "meal-plan" });
  g("buildPreviewM").classList.remove("active"); // Close the preview modal
  showNotif(`Added ${toAdd.length} item${toAdd.length !== 1 ? "s" : ""}! 🛒`);
}

// ── DEALS ────────────────────────────────────────────────────────────────────
// The Deals sub-tab lets users search for current grocery deals via Claude web search.
// Results are rendered as cards with store name, sale/original price, savings badge,
// and a "+ List" button to add the deal item directly to the shopping list.

/**
 * renderDeals(deals, query) — Renders an array of deal objects into the #dealslist container.
 * Each deal object has: { name, store, sale_price, orig_price, unit, savings, details, valid }.
 * If no deals are found, shows an empty-state placeholder.
 *
 * Uses imperative DOM creation (createElement) rather than innerHTML for the cards,
 * which avoids XSS issues with deal names that could contain HTML.
 */
function renderDeals(deals, query) {
  const el = g("dealslist");
  if (!deals || !deals.length) {
    el.innerHTML = `<div class="es"><div class="ei">🏷</div><p>No deals found for <strong>${query}</strong>.<br>Try a broader term or pick a different store.</p></div>`;
    return;
  }
  el.innerHTML = ""; // Clear previous results
  deals.forEach(d => {
    // Build each deal card using DOM elements
    const card = document.createElement("div"); card.className = "deal-card deal-match";
    const left = document.createElement("div"); left.style.flex = "1"; // Left side: text content
    const store = document.createElement("div"); store.className = "deal-store"; store.textContent = d.store || "Local Store";
    const name = document.createElement("div"); name.className = "deal-name"; name.textContent = d.name || "";

    // Price row: sale price, original price (strikethrough via CSS), unit, and savings badge
    const priceRow = document.createElement("div"); priceRow.style.cssText = "display:flex;align-items:baseline;gap:6px;margin-top:4px;flex-wrap:wrap";
    if (d.sale_price) { const sp = document.createElement("span"); sp.className = "deal-price"; sp.textContent = d.sale_price; priceRow.appendChild(sp); }
    if (d.orig_price) { const op = document.createElement("span"); op.className = "deal-orig"; op.textContent = d.orig_price; priceRow.appendChild(op); }
    if (d.unit) { const un = document.createElement("span"); un.style.cssText = "font-size:.7rem;color:var(--mt)"; un.textContent = d.unit; priceRow.appendChild(un); }
    if (d.savings) { const sv = document.createElement("span"); sv.className = "deal-badge"; sv.textContent = "Save " + d.savings; priceRow.appendChild(sv); }
    left.appendChild(store); left.appendChild(name); left.appendChild(priceRow);

    // Optional: promo details text and validity dates
    if (d.details) { const det = document.createElement("div"); det.style.cssText = "font-size:.74rem;color:var(--tx2);margin-top:5px;line-height:1.5"; det.textContent = d.details; left.appendChild(det); }
    if (d.valid) { const vl = document.createElement("div"); vl.style.cssText = "font-size:.68rem;color:var(--mt);margin-top:4px"; vl.textContent = "📅 " + d.valid; left.appendChild(vl); }

    // "+ List" button: adds this deal's item to the shopping list
    const btn = document.createElement("button"); btn.className = "btn bs bsm"; btn.style.cssText = "align-self:center;flex-shrink:0;margin-left:8px"; btn.textContent = "+ List";
    // IIFE closure to capture the deal name for the click handler (avoids stale reference in loop)
    ((n) => { btn.onclick = () => addDealToList(n); })(d.name || "");
    card.appendChild(left); card.appendChild(btn); el.appendChild(card);
  });
}

/**
 * addDealToList(name) — Adds a deal item to the shopping list.
 * Decodes HTML entities (&#39; -> apostrophe) since deal names may come from API responses.
 * Deduplicates by checking if an item with the same name (case-insensitive) already exists.
 */
export function addDealToList(name) {
  const decoded = (name || "").replace(/&#39;/g, "'"); // Fix HTML-encoded apostrophes
  if (!state.shop.find(i => i.name.toLowerCase() === decoded.toLowerCase())) {
    svShopItem({ id: Date.now().toString(), name: decoded, checked: false });
    showNotif(decoded + " added!");
  } else { showNotif("Already on your list!"); }
}

/**
 * claudeSearchDeals(query, store) — Core deal-search engine.
 *
 * Uses Claude Haiku with the web_search tool to find current grocery deals.
 * The prompt instructs Claude to do exactly ONE web search and return structured
 * JSON with deal info (name, store, prices, savings, dates).
 *
 * Caching: Results are cached in localStorage for 24 hours (86400000ms) per
 * store+query combination to avoid redundant API calls. Cache key prefix is "ks-deals-".
 *
 * @param {string} query — What to search for (e.g. "chicken breast")
 * @param {string} store — Store filter ("any" or a specific store name)
 * @returns {Array} — Array of deal objects
 */
async function claudeSearchDeals(query, store) {
  // Build a cache key from store + normalized query; check localStorage for recent results
  const cacheKey = "ks-deals-" + store + "-" + query.toLowerCase().replace(/\s+/g, "_").substring(0, 40);
  const cached = J(cacheKey); // J = JSON parse from localStorage
  if (cached && cached.ts && (Date.now() - cached.ts) < 86400000) return cached.deals; // Return cached if < 24h old

  // If no specific store, search across several common NJ grocery chains
  const storeStr = (store && store !== "any") ? store : "ShopRite, Stop & Shop, Wegmans, Whole Foods, or Trader Joe's";
  const prompt = 'Search for current this-week grocery deals on: ' + query + ' at ' + storeStr + ' near Edison NJ 08817. Do ONE web search only. Return ONLY a JSON array, no markdown fences: [{"name":"product","store":"store","sale_price":"$X.XX","orig_price":"$X.XX","unit":"per lb","savings":"$X off","details":"promo details","valid":"dates"}]. Return [] if nothing found. Up to 8 deals.';

  const st = g("dealsstatus");
  if (st) st.textContent = "Searching this week's flyers (1 search)...";

  // Call Claude via server-side proxy with web_search tool enabled
  const r = await fetch("/api/proxy", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ model: "claude-haiku-4-5-20251001", max_tokens: 1000, tools: [{ type: "web_search_20250305", name: "web_search" }], system: "You are a grocery deals finder. Use exactly ONE web search. Return only a JSON array.", messages: [{ role: "user", content: prompt }] }) });
  if (!r.ok) { const err = await r.text(); throw new Error("HTTP " + r.status + ": " + err.substring(0, 200)); }
  const data = await r.json();
  if (data.error) throw new Error("API error: " + data.error.message);

  // Extract text blocks from the response (skip tool_use blocks)
  const text = (data.content || []).filter(b => b.type === "text").map(b => b.text).join("");
  if (!text) throw new Error("No response. Stop: " + data.stop_reason);

  // Parse the JSON array from Claude's response, stripping any markdown code fences
  const clean = text.replace(/```json|```/g, "").trim();
  let arr = [], m = clean.match(/\[[\s\S]*\]/); // Extract the JSON array from the text
  if (m) { try { arr = JSON.parse(m[0]); } catch { arr = []; } } // Gracefully handle malformed JSON

  // Cache the results in localStorage for 24 hours
  Js(cacheKey, { deals: arr, ts: Date.now(), query, store: storeStr });
  return arr;
}

/**
 * searchDeals() — Triggered by the "Search" button in the Deals tab.
 * Reads the user's search query and optional store filter, then calls
 * claudeSearchDeals and renders the results (or shows an error).
 */
export async function searchDeals() {
  const q = g("dealsearch").value.trim(); if (!q) { showNotif("Enter something to search"); return; }
  const store = g("dealstore")?.value || "any"; // Store dropdown, defaults to "any"
  const st = g("dealsstatus"); // Status message element (shows loading/error text)
  st.style.display = "block"; st.style.color = "var(--mt)";
  st.textContent = "🔍 Searching " + (store !== "any" ? store : "nearby stores") + " for " + q + "…";
  g("dealslist").innerHTML = ""; // Clear previous results
  try {
    const deals = await claudeSearchDeals(q, store);
    st.style.display = "none"; // Hide status on success
    renderDeals(deals, q);
  } catch (e) {
    st.style.color = "var(--rd)"; // Red text for errors
    st.textContent = "Error: " + (e.message || "Unknown error");
  }
}

/**
 * dealsFromList() — "Find Deals for My List" button handler.
 *
 * Searches deals for all unchecked shopping list items at once (up to 8 items,
 * combined into a single search query to minimize API calls).
 *
 * Fallback behavior: if the shopping list is empty but there are meals planned,
 * offers to search deals based on the meal plan instead (via confirm dialog).
 */
export async function dealsFromList() {
  const items = state.shop.filter(i => !i.checked);

  // Fallback: if list is empty, offer to search by meal plan instead
  if (!items.length) {
    const meals = Object.values(state.mp).filter(Boolean);
    if (!meals.length) { showNotif("Add items to your list first!"); return; }
    const confirmed = confirm("Your list is empty. Search deals for this week's meals?\n\n" + meals.join(", "));
    if (!confirmed) return;
    const store = g("dealstore")?.value || "any";
    const st = g("dealsstatus");
    st.style.display = "block"; st.textContent = "Searching deals for your meal plan...";
    g("dealslist").innerHTML = "";
    try { const deals = await claudeSearchDeals(meals.join(", "), store); st.style.display = "none"; renderDeals(deals, meals.join(", ")); }
    catch (e) { st.style.display = "none"; st.style.color = "var(--rd)"; st.textContent = "Error: " + e.message; }
    return;
  }

  // Normal path: search deals for up to 8 unchecked shopping list items
  const store = g("dealstore")?.value || "any";
  const st = g("dealsstatus");
  const names = items.slice(0, 8).map(i => i.name).join(", "); // Cap at 8 to keep the query reasonable
  st.style.display = "block"; st.style.color = "var(--mt)"; st.textContent = "Searching deals for: " + names + "...";
  g("dealslist").innerHTML = "";
  try {
    const deals = await claudeSearchDeals(names, store); st.style.display = "none";
    if (!deals.length) g("dealslist").innerHTML = '<div class="es"><div class="ei">🏷</div><p>No deals found this week.<br/>Try searching individually or a different store.</p></div>';
    else renderDeals(deals, names);
  } catch (e) { st.style.display = "none"; st.style.color = "var(--rd)"; st.textContent = "Error: " + e.message; }
}

/**
 * testProxy() — Diagnostic function: sends a minimal request to /api/proxy
 * to verify the server-side Claude API proxy is reachable and working.
 * Displays success (green) or error (red) in the deals status element.
 * Useful for debugging when deal searches fail — helps isolate whether
 * the issue is the proxy connection or the search query itself.
 */
export async function testProxy() {
  const st = g("dealsstatus");
  st.style.display = "block"; st.style.color = "var(--mt)"; st.textContent = "Testing proxy...";
  try {
    // Send a trivial prompt to confirm the proxy + Claude API are both responding
    const r = await fetch("/api/proxy", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ model: "claude-haiku-4-5-20251001", max_tokens: 20, messages: [{ role: "user", content: "Say 'connected' in one word." }] }) });
    const data = await r.json();
    if (data.error) { st.style.color = "var(--rd)"; st.textContent = "Error: " + (data.error.message || JSON.stringify(data.error)); }
    else { st.style.color = "var(--gn)"; st.textContent = "✓ Proxy connected! Response: " + (data.content?.[0]?.text || "OK"); }
  } catch (e) { st.style.color = "var(--rd)"; st.textContent = "Connection failed: " + e.message; }
}
