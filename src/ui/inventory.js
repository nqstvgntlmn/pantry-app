// ── INVENTORY SCREEN ─────────────────────────────────────────────────────────
// This module owns the entire inventory tab UI: rendering the item list,
// the "Adjust Item" detail overlay, the manual-add form, and the
// bulk-import feature. It reads from the shared `state` object and
// persists changes through the db layer (svi = save inventory item,
// dli = delete inventory item).

import { state } from '../state.js';
import { svi, dli, addWasteEntry } from '../db.js';
// g        – getElementById shorthand
// xSt      – returns expiry status object { c: class, l: label } for a date
// ll       – location label (e.g. "fridge" → "🌡 Fridge")
// gcat     – guess/get category for an item
// CATS     – map of category name → emoji icon
// showNotif/showOv/hideOv – toast notifications and overlay show/hide
import { g, xSt, ll, gcat, CATS, showNotif, showOv, hideOv, guessLocation } from '../helpers.js';
// updExport refreshes the "export" button / data on the home screen
import { updExport } from './home.js';
// searchAndEnrich — searches product databases for text matches and shows enrichment picker
// scoreSearchResult — relevance scoring for search results
import { searchAndEnrich, scoreSearchResult } from './shopping.js';

// Renders a single inventory item as an HTML string.
// Each item is wrapped in a swipe container so the user can swipe-to-delete.
// The row also supports tap (opens adjust overlay) and multi-select mode.
export function iH(item) {
  // Resolve the category emoji; fall back to a shopping-cart icon
  const ic = CATS[gcat(item)] || "🛒",
    // If the item has a product image, show it; otherwise show the category emoji
    img = item.image ? `<img src="${item.image}" class="iimg" onerror="this.style.display='none'"/>` : `<div class="iph">${ic}</div>`;

  // Determine expiry status (expired / expiring-soon / OK)
  const ex = xSt(item.expiry),
    // bc = extra CSS class appended to the row for visual urgency
    bc = ex ? (ex.c === "expired" ? " expired" : ex.c === "expiring" ? " expiring" : "") : "",
    // et = small expiry tag badge shown below the item name
    et = ex ? `<div class="etag ${ex.c}">${ex.l}</div>` : "";

  // Build the full row HTML:
  //   .swipe-wrap  – outermost container, carries the item id for JS lookups
  //   .swipe-inner – the visible card (moves on swipe)
  //   .swipe-del   – the red delete button revealed behind the card on swipe
  return `<div class="swipe-wrap" id="sw-${item.id}" data-id="${item.id}" data-list="inv">
    <div class="swipe-inner">
      <div class="iit${bc}" onclick="swipeRowTap('${item.id}','inv')">
        <div class="sel-cb">✓</div>
        <div class="iileft">${img}<div>
          <div class="inm">${item.name}</div>
          <div class="isb">${item.brand || gcat(item)}</div>
          ${item.note ? `<div class="shnote" style="margin-top:2px">📝 ${item.note}</div>` : ""}
          ${et}
        </div></div>
        <div style="text-align:right">
          <div class="iqt">${item.qty}</div>
          <div class="iun">${item.unit}</div>
        </div>
      </div>
    </div>
    <div class="swipe-del" onclick="swipeDelItem('${item.id}','inv')"><span>🗑</span>Delete</div>
  </div>`;
}

// Full re-render of the inventory list (#ibody).
// The active tab (state.it) controls which view is shown:
//   "all"  – items grouped by location, with an "Expiring Soon" section on top
//   "cat"  – items grouped by category
//   "fridge"/"freezer"/"pantry" – flat list filtered to one location
export function renderInv() {
  // Alphabetical sort comparator used for every view
  const az = (a, b) => a.name.localeCompare(b.name);

  // Build the filtered + sorted item list.
  // "all" and "cat" show everything; other tabs filter by location.
  const f = (state.it === "all" || state.it === "cat" ? state.inv : state.inv.filter(i => i.location === state.it)).slice().sort(az);

  // Update the subtitle text (e.g. "12 fridge items")
  const isub = g("isub");
  if (isub) isub.textContent = f.length + " " + ({ all: "items", fridge: "fridge items", freezer: "frozen items", pantry: "pantry items", cat: "items by type" }[state.it] || "items");

  // Keep the export feature on the home screen in sync with current data
  updExport();

  const c = g("ibody");
  if (!c) return;

  // Empty-state placeholder when no items match the current filter
  if (!f.length) { c.innerHTML = `<div class="es"><div class="ei">🧺</div><p>No items here yet.<br/>Tap Scan or Add to get started.</p></div>`; return; }

  // ── "By Category" view ──
  if (state.it === "cat") {
    // Group items into a { category: [items] } map, then render each group
    const gr = {}; f.forEach(item => { const cat = gcat(item); if (!gr[cat]) gr[cat] = []; gr[cat].push(item); });
    c.innerHTML = Object.entries(gr).sort((a, b) => a[0].localeCompare(b[0])).map(([cat, its]) => `<div class="lgrp"><div class="lgt">${CATS[cat] || "📦"} ${cat}</div><div class="ilst">${its.map(iH).join("")}</div></div>`).join("");
    // If multi-select mode is active, mark each row with the "selecting" class
    // and highlight already-selected items
    if (state.selectMode === "inv") document.querySelectorAll("#ibody .swipe-wrap").forEach(w => { w.classList.add("selecting"); if (state.selectedIds.has(w.dataset.id)) w.classList.add("selected"); });
    return;
  }

  // ── "All" view: expiring items on top, then groups by location ──
  if (state.it === "all") {
    // Collect items that are expiring or already expired, sorted by earliest expiry
    const ex = state.inv.filter(i => { const s = xSt(i.expiry); return s && (s.c === "expiring" || s.c === "expired"); }).sort((a, b) => new Date(a.expiry) - new Date(b.expiry));
    // Render the "Expiring Soon" warning group (only if any items qualify)
    const exH = ex.length ? `<div class="lgrp"><div class="lgt" style="color:var(--am)">⚠️ Expiring Soon</div><div class="ilst">${ex.map(iH).join("")}</div></div>` : "";
    // Follow with groups for each storage location (fridge, freezer, pantry)
    c.innerHTML = exH + ["fridge", "freezer", "pantry"].map(loc => { const its = f.filter(i => i.location === loc); return its.length ? `<div class="lgrp"><div class="lgt">${ll(loc)}</div><div class="ilst">${its.map(iH).join("")}</div></div>` : ""; }).join("");
    // Apply multi-select state if active
    if (state.selectMode === "inv") document.querySelectorAll("#ibody .swipe-wrap").forEach(w => { w.classList.add("selecting"); if (state.selectedIds.has(w.dataset.id)) w.classList.add("selected"); });
    return;
  }

  // ── Single-location view (fridge / freezer / pantry) ──
  c.innerHTML = `<div class="ilst">${f.map(iH).join("")}</div>`;
  // Apply multi-select state if active
  if (state.selectMode === "inv") {
    document.querySelectorAll("#ibody .swipe-wrap").forEach(w => { w.classList.add("selecting"); if (state.selectedIds.has(w.dataset.id)) w.classList.add("selected"); });
  }
}

// Opens the "Adjust Item" detail overlay for a given inventory item.
// This overlay lets the user change location, quantity, expiry, and notes,
// or remove the item entirely. All fields auto-save on change (no submit button).
export function openAdj(id) {
  const item = state.inv.find(i => i.id === id);
  if (!item) return;

  // Track which item the overlay is editing so the inline handlers
  // (adjQ, adjE, updL, etc.) know which item to update
  state.adjId = id;

  // Build the product image / emoji fallback
  const ic = CATS[gcat(item)] || "🛒",
    img = item.image ? `<img src="${item.image}" class="pimg" onerror="this.style.display='none'"/>` : `<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">${ic}</div>`;

  // Build the nutrition grid (only shown if we have calorie or protein data)
  let nut = "";
  if (item.nutrition && (item.nutrition.calories || item.nutrition.protein)) {
    nut = `<div class="ngrd">${[["Cal", item.nutrition.calories], ["Protein", item.nutrition.protein], ["Fat", item.nutrition.fat], ["Carbs", item.nutrition.carbs]].map(([l, v]) => `<div class="nb"><div class="nv">${v || "—"}</div><div class="nl">${l}</div></div>`).join("")}</div>`;
  }

  // Inject the full overlay body: header card, nutrition, location picker,
  // quantity stepper, expiry date picker, and notes textarea.
  // Each control calls its own global handler on change (e.g. updL, adjQ).
  g("adjbody").innerHTML = `<div class="pcard"><div class="phdr">${img}<div style="flex:1"><div class="pnm">${item.name}</div>${item.brand ? `<div class="pbr">${item.brand}</div>` : ""}<div style="font-size:.7rem;color:var(--mt);margin-top:2px">Added ${item.addedAt}</div>${item.source ? `<span class="srcb" style="display:inline-block;margin-top:4px">${item.source}</span>` : ""}</div></div>${nut}<div class="frow" style="margin-top:14px"><label class="flbl">Location</label><div class="lpick"><button class="lbtn ${item.location === "fridge" ? "sel" : ""}" onclick="updL('fridge',this)">🌡 Fridge</button><button class="lbtn ${item.location === "freezer" ? "sel" : ""}" onclick="updL('freezer',this)">🧊 Freezer</button><button class="lbtn ${item.location === "pantry" ? "sel" : ""}" onclick="updL('pantry',this)">🥫 Pantry</button></div></div><div class="qrow"><span class="qlbl">Quantity</span><div class="qctl"><button class="qbtn" onclick="adjQ(-1)">−</button><input class="qinp" id="adjqty" type="number" min="0" value="${item.qty}" oninput="adjQD()"/><button class="qbtn" onclick="adjQ(1)">+</button></div></div><div class="frow"><label class="flbl">Expiry Date <span class="otag">optional</span></label><input class="fd" id="adjexp" type="date" value="${item.expiry || ""}" onchange="adjE()"/></div><div class="frow"><label class="flbl">Notes <span class="otag">optional</span></label><textarea class="sh-note-inp" id="adjnote" rows="2" placeholder="Brand, store, reminders…" onblur="adjNote()">${item.note || ""}</textarea></div><div class="qrow"><span class="qlbl">Low stock alert at</span><div class="qctl"><button class="qbtn" onclick="adjLowThresh(-1)">−</button><input class="qinp" id="adjlowthresh" type="number" min="0" value="${item.lowStockThreshold || 1}" oninput="adjLowThreshD()"/><button class="qbtn" onclick="adjLowThresh(1)">+</button></div></div></div>`;

  // Wire the "Remove" button at the bottom of the overlay
  g("rembtn").onclick = () => remItem(id);
  showOv("adj");
}

// Removes an inventory item from the database and closes the adjust overlay.
// If the item was expiring or already expired, it also logs a waste entry
// so the user can track food waste over time.
export async function remItem(id) {
  const item = state.inv.find(i => i.id === id);
  if (item) {
    const s = xSt(item.expiry);
    // Log waste only for items that went bad — not for items used normally
    if (s && (s.c === "expired" || s.c === "expiring")) await addWasteEntry(item.name);
  }
  await dli(id); // delete from Firestore / local state
  showNotif("Item removed");
  hideOv("adj");
}

// ── Adjust overlay inline handlers ──────────────────────────────────────────
// These are called directly from onclick/oninput/onchange attributes inside
// the adjust overlay HTML. They all follow the same pattern: look up the
// item being edited via state.adjId, apply the change, and persist via svi().

// Updates the storage location (fridge / freezer / pantry) for the current item
export async function updL(loc, btn) {
  const item = state.inv.find(i => i.id === state.adjId);
  if (!item) return;
  // Deselect all location buttons, then highlight the chosen one
  document.querySelectorAll("#adjbody .lbtn").forEach(b => b.classList.remove("sel"));
  btn.classList.add("sel");
  await svi({ ...item, location: loc });
}

// Adjusts quantity by a delta (d): +1 or -1 from the stepper buttons.
// If quantity reaches 0, the item is removed entirely.
export async function adjQ(d) {
  const item = state.inv.find(i => i.id === state.adjId);
  if (!item) return;
  const q = Math.max(0, item.qty + d);
  g("adjqty").value = q;
  if (q === 0) { await remItem(state.adjId); return; }
  await svi({ ...item, qty: q });
}

// Handles direct keyboard input into the quantity field (free-type).
// Only persists if the value is a valid non-negative integer.
export async function adjQD() {
  const item = state.inv.find(i => i.id === state.adjId);
  if (!item) return;
  const v = parseInt(g("adjqty").value);
  if (!isNaN(v) && v >= 0) await svi({ ...item, qty: v });
}

// Saves a new expiry date when the user picks one from the date input.
// Clears the expiry (null) if the field is emptied.
export async function adjE() {
  const item = state.inv.find(i => i.id === state.adjId);
  if (!item) return;
  await svi({ ...item, expiry: g("adjexp").value || null });
}

// Saves the notes field when the textarea loses focus (onblur).
// Stores null instead of an empty string to keep Firestore docs clean.
export async function adjNote() {
  const item = state.inv.find(i => i.id === state.adjId);
  if (!item) return;
  const v = (g("adjnote").value || "").trim();
  await svi({ ...item, note: v || null });
}

// Adjusts the low-stock alert threshold by a delta (+1 / -1).
// When qty drops to or below this threshold, the item appears in "Running Low".
export async function adjLowThresh(d) {
  const item = state.inv.find(i => i.id === state.adjId);
  if (!item) return;
  const v = Math.max(0, (item.lowStockThreshold || 1) + d);
  g("adjlowthresh").value = v;
  await svi({ ...item, lowStockThreshold: v });
}

// Handles direct input into the low-stock threshold field (free-type).
export async function adjLowThreshD() {
  const item = state.inv.find(i => i.id === state.adjId);
  if (!item) return;
  const v = parseInt(g("adjlowthresh").value);
  if (!isNaN(v) && v >= 0) await svi({ ...item, lowStockThreshold: v });
}

// Switches the active inventory tab (all / fridge / freezer / pantry / cat).
// Updates the tab bar highlight and re-renders the list with the new filter.
export function setIT(t) {
  state.it = t; // persist the active tab so other code can read it
  // Remove "active" from all tabs, then highlight the selected one
  document.querySelectorAll(".itab").forEach(x => x.classList.remove("active"));
  const el = g("itab-" + t);
  if (el) el.classList.add("active");
  renderInv();
}

// ── Manual Add overlay ─────────────────────────────────────────────────────
// Lets the user type in a new item by hand (as opposed to scanning a barcode).

// Reads form values from the manual-add overlay, builds an inventory item
// object, saves it to the database, then resets the form and closes the overlay.
export async function addManual() {
  const nm = g("man").value.trim(); // item name (required)
  if (!nm) return;

  const cat = g("mac").value,                              // category dropdown
    unit = g("mau").value.trim() || "unit",                // unit (default "unit")
    qty = Math.max(1, parseInt(g("maq").value) || 1),      // quantity, at least 1
    exp = g("mae").value || null,                          // optional expiry date
    // Generate a deterministic-ish ID from the name + timestamp to avoid collisions
    id = "itm-" + nm.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") + "-" + Date.now();

  // Persist the new item (state.maL holds the location chosen in the overlay)
  await svi({ id, barcode: id, name: nm, brand: "", unit, qty, location: state.maL, category: cat, image: null, source: "Manual", nutrition: null, expiry: exp, addedAt: new Date().toLocaleDateString() });

  // Reset the form fields for next use
  g("man").value = ""; g("maq").value = 1; g("mae").value = "";
  g("mabtn").disabled = true;
  showNotif(`${nm} added!`); hideOv("madd");

  // Trigger product enrichment search — lets user pick a richer match with image/brand/nutrition
  searchAndEnrich(id, nm, "inv");
}

// Validates the manual-add form: enables the submit button only if a name is entered
export function valMA() { g("mabtn").disabled = !g("man").value.trim(); }

// Adjusts the quantity stepper in the manual-add form by delta d (+1 / -1),
// clamping at a minimum of 1
export function chgMQ(d) { const i = g("maq"); i.value = Math.max(1, (parseInt(i.value) || 1) + d); }

// Sets the storage location in the manual-add overlay and highlights the chosen button
export function selML(loc, btn) {
  state.maL = loc;
  document.querySelectorAll("#ov-madd .lbtn").forEach(b => b.classList.remove("sel"));
  if (btn) btn.classList.add("sel");
}

// ── Bulk Import ────────────────────────────────────────────────────────────
// Parses a pasted "living document" (plain text) and upserts inventory items.
// Supports two formats:
//   1. Markdown table rows:  | Item Name | 3 | bags |
//   2. Bullet-list rows:     - Item Name: 3 bags
// Location headers (lines containing "fridge", "freezer", or "pantry") switch
// the storage location for all items that follow them.
export async function importDoc() {
  const text = g("imptxt").value.trim();
  if (!text) return;

  let imported = 0, updated = 0, curL = "pantry"; // default location

  for (const line of text.split("\n")) {
    const lw = line.toLowerCase();

    // Detect location header lines (e.g. "## Fridge", "--- Freezer ---")
    if (lw.includes("fridge")) curL = "fridge";
    else if (lw.includes("freezer")) curL = "freezer";
    else if (lw.includes("pantry")) curL = "pantry";

    // Try to match a markdown table row: | name | qty | unit |
    const tm = line.match(/^\|\s*([^|]+?)\s*\|\s*(\d+(?:\.\d+)?)\s*\|\s*([^|]+?)\s*\|/);
    // Try to match a bullet-list row: - name: qty unit
    const lm = line.match(/^[-*]\s+(.+?):\s*(\d+(?:\.\d+)?)\s*([a-zA-Z%\/]+.*)?$/);

    let name, qty, unit;
    if (tm) { name = tm[1].trim(); qty = parseFloat(tm[2]); unit = tm[3].trim(); }
    else if (lm) { name = lm[1].trim(); qty = parseFloat(lm[2]); unit = (lm[3] || "unit").trim(); }

    // Skip header rows, separators, and lines that didn't match either pattern
    if (name && qty && name !== "Item" && name !== "---" && !name.startsWith("-")) {
      // Deterministic ID from name so re-importing the same doc updates instead of duplicating
      const id = "item-imp-" + name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
      const ex = state.inv.find(i => i.id === id); // check if item already exists
      await svi({ id, barcode: id, name, brand: "", unit: unit || "unit", qty, location: curL, category: "Imported", image: null, source: "Imported", nutrition: null, expiry: null, addedAt: ex ? ex.addedAt : new Date().toLocaleDateString() });
      ex ? updated++ : imported++;
    }
  }

  g("imptxt").value = ""; // clear the textarea
  showNotif(`Imported ${imported} new, updated ${updated}`);
  hideOv("import");
}

// ══════════════════════════════════════════════════════════════════════════════
// ── INVENTORY BOTTOM SHEET (ADD TO PANTRY) ──────────────────────────────────
// Mirrors the Shopping screen's bottom sheet add-item flow:
//   - Text input with keyboard auto-focused
//   - Live search dropdown with debounced product database lookup
//   - Location picker (fridge / freezer / pantry)
//   - Optional note field
//   - "Scan barcode" and "Voice input" options
// Items added here go to the pantry/inventory collection, not shopping list.
// ══════════════════════════════════════════════════════════════════════════════

// ── Module-level state for the inventory add flow ──
/** Timer ID for debounced search in the inventory add sheet */
let _invSearchTimer = null;
/** Stores inline search results so pickInvInlineResult can reference them */
let _invInlineResults = null;
/** Currently selected storage location in the add sheet (default: fridge) */
let _invAddLocation = "fridge";

// ── Voice input state (mirrors shopping.js voice pattern) ──
/** Active SpeechRecognition instance for inventory voice input */
let _invRecognition = null;
/** Whether inventory voice recognition is currently listening */
let _invListening = false;
/** Accumulated finalized transcript segments for inventory voice input */
let _invFinalTranscript = "";
/** Flag: true when user manually tapped Stop (commit speech) */
let _invManualStop = false;

// ── In-memory cache for inventory search results ──
const _invSearchCache = new Map();
const _INV_CACHE_TTL = 5 * 60 * 1000;  // 5 minutes
const _INV_CACHE_MAX = 30;

/**
 * openInvAddSheet() — Opens the add-to-pantry bottom sheet.
 * Shows the text input with keyboard focused, location picker, and scan/voice options.
 * Resets the location to "fridge" and clears previous input on each open.
 */
export function openInvAddSheet() {
  const backdrop = g("invAddBackdrop");
  const sheet = g("invAddSheet");
  if (backdrop) backdrop.classList.add("active");
  if (sheet) sheet.classList.add("active");

  // Reset location picker to default (fridge)
  _invAddLocation = "fridge";
  document.querySelectorAll("#invAddSheet .lbtn").forEach(b => b.classList.remove("sel"));
  const fBtn = g("invAddLoc-fridge");
  if (fBtn) fBtn.classList.add("sel");

  // Auto-focus the input so the keyboard pops up immediately
  setTimeout(() => { const inp = g("invi"); if (inp) { inp.value = ""; inp.focus(); } }, 150);
}

/**
 * closeInvAddSheet() — Dismisses the add-to-pantry bottom sheet.
 * Clears the search dropdown to avoid stale results on next open.
 */
export function closeInvAddSheet() {
  const backdrop = g("invAddBackdrop");
  const sheet = g("invAddSheet");
  if (backdrop) backdrop.classList.remove("active");
  if (sheet) sheet.classList.remove("active");
  _clearInvSearch();
}

/**
 * invAddScan() — Handles the "Scan barcode" option in the inventory bottom sheet.
 * Closes the sheet and opens the barcode scanner in inventory mode.
 */
export function invAddScan() {
  closeInvAddSheet();
  if (window.openScanForInventory) window.openScanForInventory();
}

/**
 * invAddVoice() — Handles the "Voice input" option in the inventory bottom sheet.
 * Closes the sheet and starts voice recognition for inventory.
 */
export function invAddVoice() {
  closeInvAddSheet();
  toggleInvVoice();
}

/**
 * setInvAddLoc(loc, btn) — Sets the storage location in the inventory add sheet.
 * Updates the module state and highlights the selected location button.
 */
export function setInvAddLoc(loc, btn) {
  _invAddLocation = loc;
  document.querySelectorAll("#invAddSheet .lbtn").forEach(b => b.classList.remove("sel"));
  if (btn) btn.classList.add("sel");
}

/**
 * toggleInvAddNote() — Toggles the optional note field in the inventory add sheet.
 * When shown, focuses the textarea so the user can start typing immediately.
 */
export function toggleInvAddNote() {
  const wrap = g("invAddNoteWrap");
  if (!wrap) return;
  const showing = wrap.style.display === "none";
  wrap.style.display = showing ? "block" : "none";
  if (showing) {
    const inp = g("invAddNoteInp");
    if (inp) inp.focus();
  }
}

/**
 * qaddInv() — Quick-add an item to inventory from the bottom sheet text input.
 * Parses optional quantity from common patterns (e.g. "5 apples", "eggs x3"),
 * saves the item to the selected location, and triggers product enrichment
 * so the user can pick a richer match with image/brand/nutrition.
 */
export function qaddInv() {
  const inp = g("invi"), v = inp ? inp.value.trim() : "";
  if (!v) return;

  // Parse optional quantity from the input text
  let name = v, qty = 1;
  const leadMatch = v.match(/^(\d+)\s+(.+)/);
  const trailMatch = v.match(/^(.+?)\s*[x×]\s*(\d+)$/i);
  if (trailMatch) { name = trailMatch[1].trim(); qty = parseInt(trailMatch[2], 10) || 1; }
  else if (leadMatch) { name = leadMatch[2].trim(); qty = parseInt(leadMatch[1], 10) || 1; }

  // Capture the optional note from the collapsible note field
  const noteInp = g("invAddNoteInp");
  const note = noteInp ? noteInp.value.trim() : "";

  // Generate a unique ID for the new inventory item
  const id = "itm-" + name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") + "-" + Date.now();

  // Save the item to inventory with the selected location
  const item = {
    id, barcode: id, name, brand: "", unit: "unit", qty,
    location: _invAddLocation, category: gcat({ name }),
    image: null, source: "Manual", nutrition: null,
    expiry: null, addedAt: new Date().toLocaleDateString()
  };
  if (note) item.note = note;
  svi(item);

  showNotif(`${name} added!`);

  // Reset form fields for next use
  if (inp) inp.value = "";
  if (noteInp) noteInp.value = "";
  const wrap = g("invAddNoteWrap");
  if (wrap) wrap.style.display = "none";
  _clearInvSearch();
  closeInvAddSheet();

  // Trigger product enrichment search — lets user pick a richer match
  searchAndEnrich(id, name, "inv");
}

// ── LIVE INLINE SEARCH FOR INVENTORY ─────────────────────────────────────────
// As the user types in the inventory add input (#invi), we debounce and search
// product databases. Results appear in a dropdown below the input (inside the
// bottom sheet) so the user can pick a match BEFORE the item is added.
// Mirrors the shopping inline search pattern.

/**
 * onInvInput() — Called on every keystroke in the inventory add input (#invi).
 * Debounces the product search by 350ms to avoid excessive API calls.
 */
export function onInvInput() {
  if (_invSearchTimer) clearTimeout(_invSearchTimer);

  const inp = g("invi");
  const query = inp ? inp.value.trim() : "";
  const dropdown = g("invSearchDropdown");

  // If input is too short, hide the dropdown
  if (!query || query.length < 2) {
    if (dropdown) { dropdown.classList.remove("active"); dropdown.innerHTML = ""; }
    _invInlineResults = null;
    return;
  }

  // Wait 350ms after the user stops typing before searching
  _invSearchTimer = setTimeout(() => _runInvSearch(query), 350);
}

/**
 * _runInvSearch(query) — Fetches and renders product search results in the
 * inventory add sheet dropdown. Uses relevance scoring and in-memory caching.
 */
async function _runInvSearch(query) {
  const dropdown = g("invSearchDropdown");
  if (!dropdown) return;

  dropdown.innerHTML = '<div class="search-hint">Searching…</div>';
  dropdown.classList.add("active");

  try {
    // Check cache first
    const cacheKey = query.toLowerCase();
    let results;
    const cached = _invSearchCache.get(cacheKey);

    if (cached && Date.now() - cached.ts < _INV_CACHE_TTL) {
      results = cached.scored;
    } else {
      // Fetch from API
      const r = await fetch(`/api/text-search?q=${encodeURIComponent(query)}`);
      const data = await r.json();
      let raw = data.results || [];

      // Filter: at least one query word must appear in the product name
      const queryWords = query.toLowerCase().split(/\s+/).filter(w => w.length >= 2);
      raw = raw.filter(p => {
        const nameLower = (p.name || "").toLowerCase();
        return queryWords.some(w => nameLower.includes(w));
      });

      // Score, filter low-relevance, sort, and cap at 5
      results = raw
        .map(p => ({ ...p, _score: scoreSearchResult(p.name || "", query) }))
        .filter(p => p._score >= 15)
        .sort((a, b) => b._score - a._score)
        .slice(0, 5);

      // Cache the scored results
      _invSearchCache.set(cacheKey, { scored: results, ts: Date.now() });
      if (_invSearchCache.size > _INV_CACHE_MAX) {
        _invSearchCache.delete(_invSearchCache.keys().next().value);
      }
    }

    // Bail if input changed during fetch (stale response)
    const currentQuery = g("invi") ? g("invi").value.trim() : "";
    if (currentQuery.toLowerCase() !== query.toLowerCase()) return;

    if (!results.length) {
      dropdown.classList.remove("active");
      dropdown.innerHTML = "";
      _invInlineResults = null;
      return;
    }

    _invInlineResults = results;

    // Render result rows
    dropdown.innerHTML = results.map((p, i) => {
      const img = p.image
        ? `<img src="${p.image}" class="enrich-img" alt="" onerror="this.style.display='none'"/>`
        : `<div class="enrich-img-ph">🛒</div>`;
      const brand = p.brand ? `<div class="enrich-brand">${p.brand}</div>` : "";
      const cat = p.category && p.category !== "General"
        ? `<div class="enrich-cat">${p.category}</div>` : "";
      return `<div class="enrich-row" onclick="pickInvInlineResult(${i})">
        ${img}
        <div style="flex:1;min-width:0">
          <div class="enrich-name">${p.name}</div>
          ${brand}${cat}
        </div>
      </div>`;
    }).join("");

  } catch (e) {
    console.warn("Inventory inline search failed:", e);
    dropdown.classList.remove("active");
    dropdown.innerHTML = "";
    _invInlineResults = null;
  }
}

/**
 * pickInvInlineResult(index) — Called when the user taps a product in the
 * inventory search dropdown. Creates a new inventory item enriched with
 * the product's rich data (name, brand, image, category, nutrition).
 */
export function pickInvInlineResult(index) {
  if (!_invInlineResults || !_invInlineResults[index]) return;
  const product = _invInlineResults[index];

  // Capture the optional note
  const noteInp = g("invAddNoteInp");
  const note = noteInp ? noteInp.value.trim() : "";

  // Generate a unique ID
  const id = "itm-" + (product.name || "item").toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") + "-" + Date.now();

  // Save the enriched item to inventory
  const item = {
    id, barcode: id,
    name: product.name,
    brand: product.brand || "",
    unit: "unit", qty: 1,
    location: _invAddLocation,
    category: product.category || gcat({ name: product.name }),
    image: product.image || null,
    source: product.source || "search",
    nutrition: product.nutrition || null,
    expiry: null,
    addedAt: new Date().toLocaleDateString()
  };
  if (note) item.note = note;
  svi(item);

  showNotif(`Added "${product.name}" ✓`);

  // Clean up: clear input, collapse note, close sheet
  const inp = g("invi"); if (inp) inp.value = "";
  if (noteInp) noteInp.value = "";
  const wrap = g("invAddNoteWrap"); if (wrap) wrap.style.display = "none";
  _clearInvSearch();
  closeInvAddSheet();
}

/**
 * _clearInvSearch() — Hides the inventory search dropdown and clears stored results.
 */
function _clearInvSearch() {
  if (_invSearchTimer) clearTimeout(_invSearchTimer);
  _invInlineResults = null;
  const dropdown = g("invSearchDropdown");
  if (dropdown) { dropdown.classList.remove("active"); dropdown.innerHTML = ""; }
}

// ── VOICE INPUT FOR INVENTORY ───────────────────────────────────────────────
// Mirrors the shopping voice input pattern but routes items to inventory.
// Uses the Web Speech API to capture spoken item names.

/**
 * initInvVoice() — Detects Web Speech API support and shows the mic option
 * in the inventory add sheet if supported.
 */
export function initInvVoice() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return;
  const opt = g("invAddMicOpt");
  if (opt) opt.style.display = "";
}

/**
 * _setInvMicUI(active) — Toggles the inventory voice listening indicator.
 */
function _setInvMicUI(active) {
  const status = g("inv-micstatus");
  if (status) status.classList.toggle("visible", active);
}

/**
 * toggleInvVoice() — Starts or stops voice recognition for inventory.
 * When speech is committed, the recognized text is added as an inventory item
 * and product enrichment is triggered.
 */
export function toggleInvVoice() {
  // If already listening, stop and commit the speech
  if (_invListening && _invRecognition) {
    _invManualStop = true;
    _invRecognition.stop();
    return;
  }

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) { showNotif("Voice input not supported"); return; }

  _invRecognition = new SpeechRecognition();
  _invRecognition.lang = "en-US";
  _invRecognition.interimResults = true;
  _invRecognition.maxAlternatives = 1;
  _invRecognition.continuous = false;

  _invFinalTranscript = "";
  _invListening = true;
  _setInvMicUI(true);

  // Show live transcript in the input field as the user speaks
  _invRecognition.onresult = (event) => {
    let interim = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const t = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        _invFinalTranscript += t;
      } else {
        interim += t;
      }
    }
    const inp = g("invi");
    if (inp) inp.value = (_invFinalTranscript + interim).trim();
  };

  _invRecognition.onerror = (event) => {
    if (event.error !== "no-speech" && event.error !== "aborted") {
      showNotif("Couldn't hear that — try again");
    }
  };

  // When recognition ends, commit the item to inventory
  _invRecognition.onend = () => {
    _invListening = false;
    _setInvMicUI(false);
    _invRecognition = null;

    // Use finalized transcript, or fall back to whatever is in the input field
    let text = _invFinalTranscript.trim();
    if (!text && _invManualStop) {
      const inp = g("invi");
      text = inp ? inp.value.trim() : "";
    }
    _invManualStop = false;

    if (!text) return;

    // Add to inventory with a guessed storage location
    const id = "itm-" + text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") + "-" + Date.now();
    const loc = guessLocation(text);
    svi({
      id, barcode: id, name: text, brand: "", unit: "unit", qty: 1,
      location: loc, category: gcat({ name: text }),
      image: null, source: "Voice", nutrition: null,
      expiry: null, addedAt: new Date().toLocaleDateString()
    });
    showNotif(`Added "${text}" to ${loc}`);

    // Clear the input field
    const inp = g("invi");
    if (inp) inp.value = "";

    // Trigger enrichment search so user can pick a richer product match
    searchAndEnrich(id, text, "inv");
  };

  _invRecognition.start();
}
