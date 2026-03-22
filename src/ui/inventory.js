// ── INVENTORY SCREEN ─────────────────────────────────────────────────────────
// This module owns the entire inventory tab UI: rendering the item list,
// the "Adjust Item" detail overlay, the manual-add form, and the
// bulk-import feature. It reads from the shared `state` object and
// persists changes through the db layer (svi = save inventory item,
// dli = delete inventory item).

import { state } from '../state.js';
import { svi, dli, addWasteEntry, dbSet, dbGet, svShopItem } from '../db.js';
import { consolidateShopItem } from './shopping.js'; // Consolidation-aware add to shopping list
// g        – getElementById shorthand
// xSt      – returns expiry status object { c: class, l: label } for a date
// ll       – location label (e.g. "fridge" → "🌡 Fridge")
// gcat     – guess/get category for an item
// CATS     – map of category name → emoji icon
// showNotif/showOv/hideOv – toast notifications and overlay show/hide
import { g, xSt, ll, gcat, CATS, showNotif, showOv, hideOv, guessLocation, toTitleCase, splitQty, combineQty, formatQty, pluralizeUnit, renderFracSelect, parseVoiceMultiItems, deduplicateSubtitle, applyTitleCaseWhileTyping, FRAC_OPTIONS, getItemEmoji } from '../helpers.js';
// updExport refreshes the "export" button / data on the home screen
// _defaultThreshold returns the smart restock threshold based on unit type
import { updExport, _defaultThreshold } from './home.js';
// searchAndEnrich — searches product databases for text matches and shows enrichment picker
// scoreSearchResult — relevance scoring for search results
// _savePreferredLocation / _getPreferredLocation — remember where user stores each product
import { searchAndEnrich, scoreSearchResult, _savePreferredLocation, _getPreferredLocation, _savePreferredUnit, _getPreferredUnit, _getProductPreference } from './shopping.js';
import { autoCategorizeByName, autoCategorize, getCategoryDisplay, renderCategoryBadge, openCategoryPicker, changeInvItemCategory } from './categorypicker.js';
// [IMAGES DISABLED] — Product images commented out pending decision.
// See session notes: images caused false positives from external databases,
// inconsistent UX, and unnecessary costs. Custom photo pipeline preserved.
// To re-enable: uncomment these blocks and restore image display logic.
// import { uploadProductImage, normalizeProductName } from '../storage.js';

// ── UNITS OF MEASURE ────────────────────────────────────────────────────────
// Shared list of available units for both Shopping and Supplies items.
// Alphabetically sorted so dropdowns are easy to scan.
// Exported so shopping.js can use the same list.
// Alphabetically sorted — "Unit" sits naturally at the end.
// "Bar" added for granola bars, protein bars, soap bars, etc.
export const UNITS = [
  "Bag","Bar","Bottle","Box","Bucket","Bunch","Can","Carton","Clove",
  "Container","Dozen","Gallon","Half Gallon","Head","Jar","Liter","Loaf",
  "Oz","Pack","Piece","Pound","Roll","Tube","Unit"
];

// Flag to ensure stagger entrance animation only plays once per tab activation,
// not on every re-render (e.g. after checkoff, sub-tab switch within same tab)
let _invStaggerPlayed = false;

/**
 * _applyInvStagger(container) — Applies staggered entrance animation to inventory list items.
 * First 8 .swipe-wrap items get a cascading 40ms delay (total ~320ms entrance).
 * Only runs once per tab load — subsequent re-renders skip animation to prevent flicker.
 */
function _applyInvStagger(container) {
  if (_invStaggerPlayed) return;
  _invStaggerPlayed = true;
  const items = container.querySelectorAll(".swipe-wrap");
  items.forEach((item, i) => {
    if (i < 8) {
      item.classList.add("stagger-item");
      item.style.animationDelay = `${i * 40}ms`;
    }
  });
}

/**
 * resetInvStagger() — Resets the stagger flag so the next renderInv() plays entrance animation.
 * Called when switching tabs so the list animates in fresh on tab activation.
 */
export function resetInvStagger() { _invStaggerPlayed = false; }

// toTitleCase imported from helpers.js — used for uniform product name display

/**
 * _shouldShowInvBrand(item) — Determines whether to display the brand on an inventory item.
 * Rules mirror shopping: barcode scans always show brand; text search only if the user's
 * query matched the brand; all other sources (manual, meal-plan, etc.) hide brand.
 */
function _shouldShowInvBrand(item) {
  if (!item.brand) return false;
  // Barcode scans always show brand — user intentionally scanned that exact product
  if (item.source === "scan" || item.source === "Barcode") return true;
  // Text search: compare search query words against brand name words
  if (item.source === "search" && item.searchQuery) {
    const queryWords = item.searchQuery.toLowerCase().split(/\s+/).filter(w => w.length >= 2);
    const brandLower = item.brand.toLowerCase();
    return queryWords.some(w => brandLower.includes(w));
  }
  // For manual adds, imported items, etc. — no brand display
  return false;
}

/**
 * iH(item) — Renders a single inventory item as an HTML string.
 * Mirrors the shopping list sH() layout:
 *   - Slim outlined circle for marking/selecting (shck equivalent)
 *   - Tapping circle opens detail sheet; tapping anywhere else also opens detail sheet
 *   - In Select mode, circles become multi-select checkboxes
 *   - Swipe-to-delete with Apple-style animation
 *   - Title Case product names, uniform font size/weight
 *   - Brand shown only for barcode scans or brand-matched searches
 */
export function iH(item) {
  // Resolve a smart emoji icon based on product name/type/category
  const ic = getItemEmoji(item);
  // [IMAGES DISABLED] — Product images commented out pending decision.
  // See session notes: images caused false positives from external databases,
  // inconsistent UX, and unnecessary costs. Custom photo pipeline preserved.
  // To re-enable: uncomment these blocks and restore image display logic.
  // const thumb = item.image ? `<img src="${item.image}" class="sh-thumb" alt="" onerror="this.style.display='none'"/>` : "";

  // Determine expiry status (expired / expiring-soon / OK)
  const ex = xSt(item.expiry),
    // bc = extra CSS class appended to the row for visual urgency
    bc = ex ? (ex.c === "expired" ? " expired" : ex.c === "expiring" ? " expiring" : "") : "",
    // et = small expiry tag badge shown below the item name
    et = ex ? `<div class="etag ${ex.c}">${ex.l}</div>` : "";

  // Brand and subtitle intentionally NOT shown on list rows (Fix #8, #9).
  // Brand is only shown on the scan result preview and in the detail sheet.
  // Subtitle is only shown in the detail sheet when the user taps to open it.

  // Determine if item is running low — at or below restock threshold.
  // Shows a pulsing amber dot next to the quantity as a visual warning.
  const thresh = item.restockThreshold != null ? item.restockThreshold : _defaultThreshold(item.unit);
  const isLow = !item.doNotRestock && typeof item.qty === "number" && item.qty <= thresh && item.qty > 0;
  const lowCls = isLow ? " low-stock" : "";

  // Build the full row HTML mirroring shopping list structure:
  //   .swipe-wrap  – outermost container, carries the item id for JS lookups
  //   .swipe-inner – the visible card (moves on swipe)
  //   .swipe-del   – the red delete button revealed behind the card on swipe
  return `<div class="swipe-wrap" id="sw-${item.id}" data-id="${item.id}" data-list="inv">
    <div class="swipe-inner">
      <div class="iit${bc}${lowCls}" onclick="swipeRowTap('${item.id}','inv')">
        <div class="sel-cb">✓</div>
        <!-- Slim outlined circle: tapping opens detail sheet -->
        <div class="shck" onclick="event.stopPropagation();openInvItemDetail('${item.id}')"></div>
        <div style="flex:1;min-width:0;cursor:pointer" onclick="event.stopPropagation();openInvItemDetail('${item.id}')">
          <div class="inm">${toTitleCase(item.scanTitle || item.name)}</div>
          ${item.note ? `<div class="shnote" style="margin-top:2px">📝 ${item.note}</div>` : ""}
          ${et}
        </div>
        <!-- Quantity and unit stacked on the right. Pulsing amber dot if low stock. -->
        <div style="text-align:right;flex-shrink:0">
          <div class="iqt">${formatQty(item.qty)}${isLow ? '<span class="low-stock-dot" title="Running low"></span>' : ""}</div>
          <div class="iun">${pluralizeUnit(item.unit || "Unit", item.qty)}</div>
        </div>
      </div>
    </div>
    <!-- Add-to-shopping zone: slides in from left on right-swipe (green, mirrors delete zone) -->
    <div class="swipe-add" onclick="swipeAddItem('${item.id}','inv')">
      <div class="swipe-add-icon">🛒</div>
      <span class="swipe-add-label">Add to List</span>
    </div>
    <!-- Delete zone: slides in from right on swipe. Trash can lid animates open past threshold. -->
    <div class="swipe-del" onclick="swipeDelItem('${item.id}','inv')">
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

// ── SHELF VIEW ──────────────────────────────────────────────────────────────
// Visual grid layout grouped by category. Items displayed as compact cards
// on "shelves" (horizontal scrollable rows). Toggle between list/shelf views.

// View mode persisted in localStorage: "list" (default) or "shelf"
let _invViewMode = localStorage.getItem("ks-inv-view") || "list";

/**
 * toggleInvViewMode() — Switches between "list" and "shelf" view modes.
 * Persists the choice in localStorage and re-renders the inventory.
 */
export function toggleInvViewMode() {
  _invViewMode = _invViewMode === "list" ? "shelf" : "list";
  localStorage.setItem("ks-inv-view", _invViewMode);
  // Update toggle button visual state
  const btn = g("inv-view-toggle");
  if (btn) btn.classList.toggle("inv-view-active", _invViewMode === "shelf");
  renderInv();
}

/**
 * _renderInvShelf(items) — Renders items in a shelf/grid layout grouped by
 * category. Each category becomes a horizontal scrollable row of item cards.
 * Low-stock items are visually smaller with an amber border.
 */
function _renderInvShelf(items) {
  // Group items by their guessed category
  const groups = {};
  for (const item of items) {
    const cat = gcat(item) || "Other";
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(item);
  }

  // Sort category names alphabetically for consistent ordering
  const sortedCats = Object.keys(groups).sort((a, b) => a.localeCompare(b));

  let html = "";
  for (const cat of sortedCats) {
    const catItems = groups[cat];
    const emoji = CATS[cat] || "📦";

    html += `<div class="shelf-row">
      <div class="shelf-label">${emoji} ${cat}</div>
      <div class="shelf-items">
        ${catItems.map(item => {
          const ic = getItemEmoji(item);
          const thresh = item.restockThreshold != null ? item.restockThreshold : _defaultThreshold(item.unit);
          const isLow = !item.doNotRestock && typeof item.qty === "number" && item.qty <= thresh && item.qty > 0;
          return `<div class="shelf-item${isLow ? " shelf-item-low" : ""}" onclick="openInvItemDetail('${item.id}')">
            <div class="shelf-emoji">${ic}</div>
            <div class="shelf-name">${toTitleCase(item.scanTitle || item.name)}</div>
            <div class="shelf-qty">${formatQty(item.qty)} ${pluralizeUnit(item.unit || "Unit", item.qty)}</div>
          </div>`;
        }).join("")}
      </div>
      <div class="shelf-line"></div>
    </div>`;
  }

  return html;
}

// ── EXPIRY TIMELINE ──────────────────────────────────────────────────────────
// Horizontal scrollable timeline strip showing items with expiry dates,
// color-coded by urgency: red (expired), amber (expiring soon), green (OK).

/**
 * _renderExpiryTimeline() — Populates the #expiryTimeline container with
 * a horizontal strip of items that have expiry dates, sorted soonest first.
 * Hidden when no items have expiry dates set.
 */
function _renderExpiryTimeline() {
  const el = g("expiryTimeline");
  if (!el) return;

  // Filter to items with an expiry date, sort soonest first
  const withExpiry = state.inv
    .filter(i => i.expiry)
    .sort((a, b) => new Date(a.expiry) - new Date(b.expiry));

  // Hide when no items have expiry dates
  if (!withExpiry.length) {
    el.style.display = "none";
    el.innerHTML = "";
    return;
  }

  el.style.display = "flex";

  // Build timeline items with color-coded dots via xSt()
  el.innerHTML = withExpiry.map(item => {
    const s = xSt(item.expiry);
    // Map xSt class to timeline dot color class
    const dotClass = s ? (s.c === "expired" ? "exp-tl-red" : s.c === "expiring" ? "exp-tl-amber" : "exp-tl-green") : "exp-tl-green";
    const label = s ? s.l : "";
    return `<div class="exp-tl-item" onclick="openInvItemDetail('${item.id}')">
      <div class="exp-tl-dot ${dotClass}"></div>
      <div class="exp-tl-name">${toTitleCase(item.scanTitle || item.name)}</div>
      <div class="exp-tl-date">${label}</div>
    </div>`;
  }).join("");
}

// Full re-render of the inventory list (#ibody).
// The active tab (state.it) controls which sub-tab is shown:
//   "all" – all items from all locations, sorted alphabetically
//   "fridge"/"freezer"/"pantry"/"household" – flat list filtered to one location
export function renderInv() {
  // Sort by the display name (scanTitle if available, otherwise raw name) — matches what the user sees on each row
  const az = (a, b) => (a.scanTitle || a.name).localeCompare(b.scanTitle || b.name, undefined, { sensitivity: 'base' });

  // Filter items by the selected location sub-tab; "all" shows everything
  const f = state.it === "all"
    ? state.inv.slice().sort(az)
    : state.inv.filter(i => i.location === state.it).slice().sort(az);

  // Update the subtitle text (e.g. "12 fridge items")
  const isub = g("isub");
  const labels = { all: "items", fridge: "fridge items", freezer: "frozen items", pantry: "pantry items", household: "household items" };
  if (isub) isub.textContent = f.length + " " + (labels[state.it] || "items");

  // Keep the export feature on the home screen in sync with current data
  updExport();

  const c = g("ibody");
  if (!c) return;

  // Illustrated empty state — food-themed with warm, inviting message
  if (!f.length) {
    const isFiltered = state.it !== "all";
    const msg = isFiltered
      ? `Nothing in your ${labels[state.it]?.replace(" items","") || "filter"} yet.`
      : "Your pantry is waiting to be filled.";
    c.innerHTML = `<div class="es"><div class="ei">🍳</div><p>${msg}<br><span style="font-size:.78rem;color:var(--ac);margin-top:8px;display:inline-block">Tap + Add item above to get started</span></p></div>`;
    return;
  }

  // Render shelf view or flat list based on current view mode
  if (_invViewMode === "shelf") {
    c.innerHTML = _renderInvShelf(f);
  } else {
    // Render flat list for the selected location sub-tab
    c.innerHTML = `<div class="ilst">${f.map(iH).join("")}</div>`;
    // Apply multi-select state if active
    if (state.selectMode === "inv") {
      document.querySelectorAll("#ibody .swipe-wrap").forEach(w => { w.classList.add("selecting"); if (state.selectedIds.has(w.dataset.id)) w.classList.add("selected"); });
    }
    // Apply staggered entrance animation only on first render per tab activation.
    // Subsequent re-renders (e.g. after checkoff, edit) skip animation to prevent flicker.
    _applyInvStagger(c);
  }

  // Update expiry timeline strip (shown above the main item list)
  _renderExpiryTimeline();

  // Sync view toggle button state
  const vBtn = g("inv-view-toggle");
  if (vBtn) vBtn.classList.toggle("inv-view-active", _invViewMode === "shelf");
}

// [ADJUST OVERLAY DISABLED] — All fields merged into detail sheet. Uncomment to restore.
// openAdj() now redirects to the detail sheet so any remaining callers
// (e.g. Home screen "Expiring Soon" / "Running Low" cards) still work.
export function openAdj(id) {
  openInvItemDetail(id);
}
// -- Original openAdj overlay code removed --
// The old overlay duplicated every field that now lives in openInvItemDetail().
// If you ever need the standalone overlay back, check git history for the
// full implementation (location picker, qty stepper, unit, expiry, notes,
// restock threshold, doNotRestock toggle).

// ── INVENTORY ITEM DETAIL BOTTOM SHEET ──────────────────────────────────────
// Mirrors the shopping list's openItemDetail() — shows product info with
// Add photo / Change photo / Delete photo, drag-and-drop image upload,
// imageDismissed flag respected, no category/source tags.

/**
 * openInvItemDetail(id) — Opens the product detail bottom sheet for an inventory item.
 * Shows the product image (with Add/Change/Delete photo), name in Title Case,
 * brand (if barcode scan or brand-matched search), quantity, location, expiry,
 * note, and buttons for Adjust (full overlay) and Remove.
 * In multi-select mode, delegates to the parent row tap handler instead.
 *
 * Custom product image lookup: before rendering, checks the shared
 * households/{hid}/customProducts/{normalizedName} collection for a custom image.
 * This ensures images uploaded from the shopping list detail sheet are also
 * visible here in the pantry, and vice versa — one image per product across the app.
 * Respects imageDismissed: if the user deleted the image, shows placeholder instead.
 */
export async function openInvItemDetail(id) {
  // In multi-select mode, let the parent swipeRowTap handle the tap for selection toggle
  if (state.selectMode) return;

  const item = state.inv.find(i => i.id === id);
  if (!item) return;

  const content = g("invItemDetailContent");
  if (!content) return;

  // [IMAGES DISABLED] — Product images commented out pending decision.
  // See session notes: images caused false positives from external databases,
  // inconsistent UX, and unnecessary costs. Custom photo pipeline preserved.
  // To re-enable: uncomment these blocks and restore image display logic.
  //
  // // ── Custom product image lookup ──
  // let displayImage = item.image;
  // let dismissed = item.imageDismissed || false;
  // if (state.hid && item.name) {
  //   const normalized = normalizeProductName(item.name);
  //   if (normalized) {
  //     const cpDoc = await dbGet(`households/${state.hid}/customProducts/${normalized}`);
  //     if (cpDoc) {
  //       if (cpDoc.imageDismissed) { displayImage = null; dismissed = true; }
  //       else if (cpDoc.imageUrl) { displayImage = cpDoc.imageUrl; dismissed = false; }
  //     }
  //   }
  // }
  //
  // const img = displayImage
  //   ? `<div class="item-detail-img-wrap drop-zone" data-item-id="${item.id}" data-list="inv">
  //       <img src="${displayImage}" class="item-detail-img" alt="" onerror="this.style.display='none'"/>
  //       <button class="item-detail-img-del" onclick="deleteInvItemImage('${item.id}')" title="Remove image">×</button>
  //     </div>`
  //   : `<div class="item-detail-img-ph drop-zone" data-item-id="${item.id}" data-list="inv" onclick="triggerInvPhotoUpload('${item.id}')" style="cursor:pointer">
  //       <div style="text-align:center">
  //         <div style="font-size:1.3rem;margin-bottom:2px;opacity:.45">📷</div>
  //         <div style="font-size:.6rem;color:var(--mt);opacity:.7">Add photo</div>
  //       </div>
  //     </div>`;
  //
  // const changePhotoLink = displayImage
  //   ? `<div class="item-detail-change-photo" onclick="triggerInvPhotoUpload('${item.id}')">Change photo</div>`
  //   : "";

  // No-image display: smart emoji placeholder based on product name/type
  const ic = getItemEmoji(item);
  const img = `<div class="item-detail-img-ph" style="display:flex;align-items:center;justify-content:center">
    <div style="font-size:1.6rem">${ic}</div>
  </div>`;
  const changePhotoLink = "";

  // Brand visibility — same rules as the list row
  const showBrand = _shouldShowInvBrand(item);

  // Build the detail sheet content — all fields editable inline (no separate Adjust screen)
  const curUnit = item.unit || "Unit";
  const unitOpts = UNITS.map(u => `<option value="${u}"${u === curUnit ? " selected" : ""}>${u}</option>`).join("");
  const thresh = item.restockThreshold != null ? item.restockThreshold : _defaultThreshold(curUnit);
  const ex = xSt(item.expiry);

  // Use scanTitle (corrected/formatted name) if available, fallback to raw name
  const displayName = item.scanTitle || item.name;
  // Subtitle: show the raw DB name only when it differs from the display name
  const detailSubtitle = item.scanTitle && item.scanTitle !== item.name ? item.name : "";

  // Build the header with combined inline title+subtitle editing (Fix #11).
  // Tapping ✏️ reveals both fields at once with a Save button below.
  let html = `<div class="item-detail-header">
    <div>${img}${changePhotoLink}</div>
    <div style="flex:1;min-width:0">
      <div id="inv-detail-display-${item.id}">
        <div class="detail-editable" onclick="editInvDetailCombined('${item.id}')">
          <span class="item-detail-name" id="inv-detail-name-${item.id}">${toTitleCase(displayName)}</span>
          <span class="detail-edit-hint">✏️</span>
        </div>
        ${detailSubtitle ? `<div class="item-detail-brand" style="margin-top:2px">${toTitleCase(detailSubtitle)}</div>` : ""}
      </div>
      <div id="inv-detail-edit-${item.id}" style="display:none">
        <input class="detail-edit-input" id="inv-detail-name-input-${item.id}" value="${toTitleCase(displayName).replace(/"/g, '&quot;')}"
          placeholder="Title" oninput="applyTitleCaseWhileTyping(this)"
          onkeydown="if(event.key==='Enter')document.getElementById('inv-detail-sub-input-${item.id}').focus()"
          style="font-size:1.1rem;font-weight:700;margin-bottom:6px"/>
        <input class="detail-edit-input" id="inv-detail-sub-input-${item.id}" value="${toTitleCase(detailSubtitle || item.name).replace(/"/g, '&quot;')}"
          placeholder="Subtitle (full product name)" oninput="applyTitleCaseWhileTyping(this)"
          onkeydown="if(event.key==='Enter')saveInvDetailCombined('${item.id}')"
          style="font-size:.82rem;margin-bottom:6px"/>
        <button class="btn bp" onclick="saveInvDetailCombined('${item.id}')" style="font-size:.85rem;padding:6px 16px;width:100%">Save</button>
      </div>
      ${showBrand ? `<div class="item-detail-brand">${item.brand}</div>` : ""}
      <div style="font-size:.7rem;color:var(--mt);margin-top:4px">Added ${item.addedAt || "—"}</div>
    </div>
  </div>`;

  // Category badge — tappable pill to view/change the item's prep category
  const invItemCat = item.prepCategory || autoCategorize(item);
  html += renderCategoryBadge(invItemCat, `changeInvCategory('${item.id}')`);

  // Location picker — four buttons, selected one is highlighted
  html += `<div class="item-detail-section">
    <div class="item-detail-label">Location</div>
    <div class="lpick">
      <button class="lbtn ${item.location === "fridge" ? "sel" : ""}" onclick="changeInvLocation('${item.id}','fridge',this)">🌡 Fridge</button>
      <button class="lbtn ${item.location === "freezer" ? "sel" : ""}" onclick="changeInvLocation('${item.id}','freezer',this)">🧊 Freezer</button>
      <button class="lbtn ${item.location === "pantry" ? "sel" : ""}" onclick="changeInvLocation('${item.id}','pantry',this)">🥫 Pantry</button>
      <button class="lbtn ${item.location === "household" ? "sel" : ""}" onclick="changeInvLocation('${item.id}','household',this)">🏠 Household</button>
    </div>
  </div>`;

  // Quantity stepper — layout: [−] [qty] [+] [frac ▼] [unit ▼] all inline.
  // Stored as a single decimal in Firestore (e.g. 5.5), split here for UI display.
  const { whole: invWhole, frac: invFrac } = splitQty(item.qty);
  html += `<div class="item-detail-section">
    <div class="item-detail-label">Quantity</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeInvQty('${item.id}',-1)">−</button>
        <!-- inputmode="numeric" forces numeric keypad on mobile instead of full QWERTY -->
        <input class="qinp" id="inv-qty-${item.id}" type="number" inputmode="numeric" min="0" max="99" value="${invWhole}" style="width:48px;text-align:center" onblur="changeInvQtyDirect('${item.id}')"/>
        <button class="qbtn" onclick="changeInvQty('${item.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${renderFracSelect(`inv-frac-${item.id}`, invFrac).replace('<select', '<select onchange="changeInvFrac(\'' + item.id + '\')"')}
      </div>
      <select class="frac-select frac-active" onchange="changeInvUnit('${item.id}',this.value)">
        ${unitOpts}
      </select>
    </div>
  </div>`;

  // Expiry date — conditional UI: if no expiry set, show "No expiry" badge + "Set expiry" button.
  // If expiry is set, show the date picker + "Clear" button + status tag.
  // This avoids forcing users into the native iOS date picker unless they actively want to set one.
  if (item.expiry) {
    // Expiry IS set — show date picker, status tag, and clear button
    html += `<div class="item-detail-section">
      <div class="item-detail-label">Expiry Date <span class="otag">optional</span></div>
      <div style="display:flex;align-items:center;gap:8px">
        <input class="fd" id="inv-expiry-${item.id}" type="date" value="${item.expiry}" onchange="changeInvExpiry('${item.id}')" style="flex:1"/>
        <button class="inv-expiry-clear-btn" onclick="clearInvExpiry('${item.id}')" title="Clear expiry date">✕ Clear</button>
      </div>
      ${ex ? `<div class="etag ${ex.c}" style="margin-top:6px">${ex.l}</div>` : ""}
    </div>`;
  } else {
    // No expiry set — show badge and a button to reveal the date picker
    html += `<div class="item-detail-section">
      <div class="item-detail-label">Expiry Date <span class="otag">optional</span></div>
      <div style="display:flex;align-items:center;gap:10px">
        <span class="inv-no-expiry-badge">No expiry set</span>
        <button class="inv-set-expiry-btn" onclick="setInvExpiry('${item.id}')">Set expiry</button>
      </div>
    </div>`;
  }

  // Notes textarea — always visible, saves on blur
  html += `<div class="item-detail-section">
    <div class="item-detail-label">Notes <span class="otag">optional</span></div>
    <textarea class="sh-note-inp" id="inv-note-${item.id}" rows="2" placeholder="Brand, store, reminders…" onblur="changeInvNote('${item.id}')">${item.note || ""}</textarea>
  </div>`;

  // Restock threshold — "Restock when below [X]" with whole + fraction picker.
  // Thresholds are also stored as decimals for accurate comparison against fractional quantities.
  const { whole: threshWhole, frac: threshFrac } = splitQty(thresh);
  html += `<div class="item-detail-section">
    <div class="item-detail-label">Restock when below</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeInvThreshold('${item.id}',-1)">−</button>
        <!-- inputmode="numeric" forces numeric keypad on mobile instead of full QWERTY -->
        <input class="qinp" id="inv-thresh-${item.id}" type="number" inputmode="numeric" min="0" max="99" value="${threshWhole}" style="width:48px;text-align:center" onblur="changeInvThresholdDirect('${item.id}')"/>
        <button class="qbtn" onclick="changeInvThreshold('${item.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${renderFracSelect(`inv-threshfrac-${item.id}`, threshFrac).replace('<select', '<select onchange="changeInvThreshFrac(\'' + item.id + '\')"')}
      </div>
    </div>
  </div>`;

  // Don't Restock toggle
  html += `<div class="item-detail-section" style="display:flex;align-items:center;justify-content:space-between">
    <div class="item-detail-label" style="margin-bottom:0">Don't add to Running Low</div>
    <label class="toggle-switch">
      <input type="checkbox" ${item.doNotRestock ? "checked" : ""} onchange="toggleDoNotRestock('${item.id}',this.checked)"/>
      <span class="toggle-slider"></span>
    </label>
  </div>`;

  // Action buttons: Add to Shopping List and Remove (no separate Adjust screen needed)
  html += `<button class="btn bf" style="margin-top:12px;background:var(--gnd);color:var(--gn);border:1.5px solid var(--gn)" onclick="addInvToShopping('${item.id}')">🛒 Add to Shopping List</button>
  <button class="btn bd bf" onclick="closeInvItemDetail();remItem('${item.id}')" style="margin-top:8px">Remove</button>`;

  content.innerHTML = html;

  // Show the bottom sheet
  const backdrop = g("invItemDetailBackdrop");
  const sheet = g("invItemDetailSheet");
  if (backdrop) backdrop.classList.add("active");
  if (sheet) sheet.classList.add("active");

  // [IMAGES DISABLED] — Drag-and-drop listeners commented out
  // const dropZone = content.querySelector(".drop-zone");
  // if (dropZone) _setupInvDropZone(dropZone, item.id);
}

/**
 * closeInvItemDetail() — Dismisses the inventory item detail bottom sheet.
 */
export function closeInvItemDetail() {
  const backdrop = g("invItemDetailBackdrop");
  const sheet = g("invItemDetailSheet");
  if (backdrop) backdrop.classList.remove("active");
  if (sheet) sheet.classList.remove("active");
}

// ── DRAG-AND-DROP IMAGE UPLOAD FOR INVENTORY ──────────────────────────────────
// Mirrors the shopping list's drop zone handling for inventory items.

/**
 * _setupInvDropZone(el, itemId) — Attaches drag-and-drop event listeners to an element.
 * Adds a golden highlight glow on dragover and handles the dropped file through
 * the same compress → upload pipeline as the file picker.
 */
function _setupInvDropZone(el, itemId) {
  // [IMAGES DISABLED] — Product images commented out pending decision.
  // See session notes: images caused false positives from external databases,
  // inconsistent UX, and unnecessary costs. Custom photo pipeline preserved.
  // To re-enable: uncomment these blocks and restore image display logic.
  return;
  // let dragDepth = 0;
  // el.addEventListener("dragenter", (e) => {
  //   e.preventDefault(); e.stopPropagation(); dragDepth++; el.classList.add("drop-zone-active");
  // });
  // el.addEventListener("dragover", (e) => { e.preventDefault(); e.stopPropagation(); });
  // el.addEventListener("dragleave", (e) => {
  //   e.preventDefault(); e.stopPropagation(); dragDepth--;
  //   if (dragDepth <= 0) { dragDepth = 0; el.classList.remove("drop-zone-active"); }
  // });
  // el.addEventListener("drop", (e) => {
  //   e.preventDefault(); e.stopPropagation(); dragDepth = 0;
  //   el.classList.remove("drop-zone-active"); _handleInvDrop(e.dataTransfer, itemId);
  // });
}

/**
 * _handleInvDrop(dataTransfer, itemId) — Processes a drop event's DataTransfer for inventory.
 * Handles file drops and URL drops (dragged from browser tabs).
 */
async function _handleInvDrop(dt, itemId) {
  // [IMAGES DISABLED] — Product images commented out pending decision.
  // See session notes: images caused false positives from external databases,
  // inconsistent UX, and unnecessary costs. Custom photo pipeline preserved.
  // To re-enable: uncomment these blocks and restore image display logic.
  return;
  // const item = state.inv.find(i => i.id === itemId);
  // if (!item) return;
  // if (dt.files && dt.files.length > 0) {
  //   const file = dt.files[0];
  //   if (file.type && file.type.startsWith("image/")) { await _processInvDroppedImage(file, item); return; }
  // }
  // const uriList = dt.getData("text/uri-list");
  // const plainText = dt.getData("text/plain");
  // const imgUrl = uriList || plainText || "";
  // if (imgUrl && /^https?:\/\/.+\.(jpe?g|png|gif|webp|bmp)/i.test(imgUrl)) { await _fetchAndUploadInvImageUrl(imgUrl, item); return; }
  // const htmlData = dt.getData("text/html");
  // if (htmlData) {
  //   const match = htmlData.match(/<img[^>]+src=["']([^"']+)["']/i);
  //   if (match && match[1] && /^https?:\/\//.test(match[1])) { await _fetchAndUploadInvImageUrl(match[1], item); return; }
  // }
  // console.warn("[InvDropZone] Dropped data didn't contain a usable image");
}

/**
 * _processInvDroppedImage(file, item) — Compresses and uploads a dropped image file for inventory.
 * Same pipeline as the file picker: compress → upload → save → refresh detail sheet.
 */
async function _processInvDroppedImage(file, item) {
  // [IMAGES DISABLED] — Product images commented out pending decision.
  // See session notes: images caused false positives from external databases,
  // inconsistent UX, and unnecessary costs. Custom photo pipeline preserved.
  // To re-enable: uncomment these blocks and restore image display logic.
  return;
  // const content = g("invItemDetailContent");
  // if (content) {
  //   const imgWrap = content.querySelector(".item-detail-img-wrap, .item-detail-img-ph");
  //   if (imgWrap) { imgWrap.innerHTML = `<div style="text-align:center;padding:16px 0"><div style="font-size:1.2rem">⏳</div><div style="font-size:.65rem;color:var(--mt);margin-top:2px">Uploading…</div></div>`; }
  // }
  // try {
  //   const downloadUrl = await uploadProductImage(file, item.name);
  //   const updated = { ...item, image: downloadUrl, imageDismissed: false };
  //   await svi(updated);
  //   _saveCustomProductImage(item.name, downloadUrl);
  //   showNotif("Photo saved ✓");
  //   openInvItemDetail(item.id);
  // } catch (e) {
  //   console.error("[InvDropZone] Upload failed:", e);
  //   showNotif("Upload failed — try again");
  //   openInvItemDetail(item.id);
  // }
}

/**
 * _fetchAndUploadInvImageUrl(url, item) — Fetches an image from a URL (e.g. dragged from
 * Google Images), converts to File, then uploads through the standard pipeline.
 */
async function _fetchAndUploadInvImageUrl(url, item) {
  // [IMAGES DISABLED] — Product images commented out pending decision.
  // See session notes: images caused false positives from external databases,
  // inconsistent UX, and unnecessary costs. Custom photo pipeline preserved.
  // To re-enable: uncomment these blocks and restore image display logic.
  return;
  // const content = g("invItemDetailContent");
  // if (content) {
  //   const imgWrap = content.querySelector(".item-detail-img-wrap, .item-detail-img-ph");
  //   if (imgWrap) { imgWrap.innerHTML = `<div style="text-align:center;padding:16px 0"><div style="font-size:1.2rem">⏳</div><div style="font-size:.65rem;color:var(--mt);margin-top:2px">Fetching image…</div></div>`; }
  // }
  // try {
  //   const resp = await fetch(url);
  //   if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  //   const blob = await resp.blob();
  //   if (!blob.type || !blob.type.startsWith("image/")) throw new Error("Fetched resource is not an image");
  //   const file = new File([blob], "dropped-image.jpg", { type: blob.type });
  //   await _processInvDroppedImage(file, item);
  // } catch (e) {
  //   console.warn("[InvDropZone] Could not fetch dropped image URL:", e);
  //   showNotif("Couldn't load that image — try saving it first");
  //   openInvItemDetail(item.id);
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
 * deleteInvItemImage(id) — Removes the product image from an inventory item.
 * Sets imageDismissed flag so enrichment pipelines won't re-apply the same image.
 * Persists imageDismissed to customProducts collection for cross-item persistence.
 */
export async function deleteInvItemImage(id) {
  // [IMAGES DISABLED] — Product images commented out pending decision.
  // See session notes: images caused false positives from external databases,
  // inconsistent UX, and unnecessary costs. Custom photo pipeline preserved.
  // To re-enable: uncomment these blocks and restore image display logic.
  return;
  // const item = state.inv.find(i => i.id === id);
  // if (!item) return;
  // const updated = { ...item, image: null, imageDismissed: true };
  // await svi(updated);
  // if (state.hid && item.name) {
  //   const normalized = normalizeProductName(item.name);
  //   if (normalized) {
  //     dbSet(`households/${state.hid}/customProducts/${normalized}`, {
  //       name: item.name.trim(), imageDismissed: true, imageUrl: null,
  //       updatedAt: new Date().toISOString()
  //     }).catch(e => console.warn("Failed to save imageDismissed to customProducts:", e));
  //   }
  // }
  // openInvItemDetail(id);
}

/**
 * triggerInvPhotoUpload(id) — Opens the device file picker / camera roll for inventory.
 * Stores the target item ID so the onchange handler knows which item to update.
 */
export function triggerInvPhotoUpload(id) {
  // [IMAGES DISABLED] — Product images commented out pending decision.
  // See session notes: images caused false positives from external databases,
  // inconsistent UX, and unnecessary costs. Custom photo pipeline preserved.
  // To re-enable: uncomment these blocks and restore image display logic.
  return;
  // window._invUploadTargetId = id;
  // const input = document.getElementById("invProductPhotoInput");
  // if (input) { input.value = ""; input.click(); }
}

/**
 * handleInvPhotoSelected(id) — Called when user picks a file from camera roll for inventory.
 * Compresses the image, uploads to Firebase Storage, saves URL to item, refreshes sheet.
 */
export async function handleInvPhotoSelected(id) {
  // [IMAGES DISABLED] — Product images commented out pending decision.
  // See session notes: images caused false positives from external databases,
  // inconsistent UX, and unnecessary costs. Custom photo pipeline preserved.
  // To re-enable: uncomment these blocks and restore image display logic.
  return;
  // const input = document.getElementById("invProductPhotoInput");
  // if (!input || !input.files || !input.files[0]) return;
  // const file = input.files[0];
  // const item = state.inv.find(i => i.id === id);
  // if (!item) return;
  // const content = g("invItemDetailContent");
  // if (content) {
  //   const imgWrap = content.querySelector(".item-detail-img-wrap, .item-detail-img-ph");
  //   if (imgWrap) { imgWrap.innerHTML = `<div style="text-align:center;padding:16px 0"><div style="font-size:1.2rem">⏳</div><div style="font-size:.65rem;color:var(--mt);margin-top:2px">Uploading…</div></div>`; }
  // }
  // try {
  //   const downloadUrl = await uploadProductImage(file, item.name);
  //   const updated = { ...item, image: downloadUrl, imageDismissed: false };
  //   await svi(updated);
  //   _saveCustomProductImage(item.name, downloadUrl);
  //   showNotif("Photo saved ✓");
  //   openInvItemDetail(id);
  // } catch (e) {
  //   console.error("Inventory photo upload failed:", e);
  //   showNotif("Upload failed — try again");
  //   openInvItemDetail(id);
  // }
}

// Removes an inventory item with a 5-second undo window.
// Closes the detail sheet, defers the Firestore delete, and shows the undo toast.
// If the item was expiring or already expired, waste tracking fires on commit
// (after the undo window expires or is forfeited).
export async function remItem(id) {
  const item = state.inv.find(i => i.id === id);

  // Close any open detail sheet or overlay before showing the undo toast
  closeInvItemDetail();
  hideOv("adj");

  // Use the centralized undo system — waste tracking happens on commit
  if (window.deleteWithUndo) {
    window.deleteWithUndo(id, "inv", {
      onCommit: (deletedItem) => {
        // Log waste only for items that went bad — not for items used normally
        const s = xSt(deletedItem.expiry);
        if (s && (s.c === "expired" || s.c === "expiring")) addWasteEntry(deletedItem.name);
      }
    });
  } else {
    // Fallback if undo system not available — immediate delete
    await dli(id);
    showNotif("Item removed");
  }
}

// ── Adjust overlay inline handlers ──────────────────────────────────────────
// These are called directly from onclick/oninput/onchange attributes inside
// the adjust overlay HTML. They all follow the same pattern: look up the
// item being edited via state.adjId, apply the change, and persist via svi().

// Updates the storage location for the current item and saves the preference
// so next time this product is added, the same location is auto-selected.
export async function updL(loc, btn) {
  const item = state.inv.find(i => i.id === state.adjId);
  if (!item) return;
  // Deselect all location buttons, then highlight the chosen one
  document.querySelectorAll("#adjbody .lbtn").forEach(b => b.classList.remove("sel"));
  btn.classList.add("sel");
  await svi({ ...item, location: loc });
  // Save location preference for this product
  _savePreferredLocation(item.name, loc);
}

// Adjusts quantity by a delta (d): +1 or -1 from the stepper buttons.
// Does nothing if already at minimum — deletion only via swipe or Remove button.
export async function adjQ(d) {
  const item = state.inv.find(i => i.id === state.adjId);
  if (!item) return;
  const q = Math.max(0, (item.qty || 1) + d);
  if (q <= 0) return; // Don't delete via stepper — minimum qty is enforced
  g("adjqty").value = q;
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

// Saves a new unit of measure when the user picks one from the adjust overlay dropdown.
// Also propagates the unit change to the matching shopping item (if any) and saves
// the unit as a product preference, so all tabs stay in sync (universal unit sync).
export async function adjUnit() {
  const item = state.inv.find(i => i.id === state.adjId);
  if (!item) return;
  const unit = g("adjunit").value;
  await svi({ ...item, unit });
  // Remember this unit choice so it auto-populates next time this product is added
  _savePreferredUnit(item.name, unit);
  // Propagate unit change to matching shopping item (universal unit sync)
  const shopItem = state.shop.find(i => i.name.toLowerCase().trim() === item.name.toLowerCase().trim());
  if (shopItem) await svShopItem({ ...shopItem, unit });
  // Subtle 2-second banner confirming unit preference was saved across both tabs
  showNotif("Unit updated everywhere", 2000);
}

// Adjusts the restock threshold by a delta (+1 / -1).
// When qty drops to or below this threshold, the item appears in "Running Low".
export async function adjLowThresh(d) {
  const item = state.inv.find(i => i.id === state.adjId);
  if (!item) return;
  const cur = item.restockThreshold != null ? item.restockThreshold : _defaultThreshold(item.unit);
  const v = Math.max(0, cur + d);
  g("adjlowthresh").value = v;
  await svi({ ...item, restockThreshold: v });
}

// Handles direct input into the restock threshold field (free-type).
export async function adjLowThreshD() {
  const item = state.inv.find(i => i.id === state.adjId);
  if (!item) return;
  const v = parseInt(g("adjlowthresh").value);
  if (!isNaN(v) && v >= 0) await svi({ ...item, restockThreshold: v });
}

// Toggles the "Don't add to Running Low" flag in the adjust overlay.
export async function adjDoNotRestock() {
  const item = state.inv.find(i => i.id === state.adjId);
  if (!item) return;
  const checked = g("adjdonotrestock")?.checked || false;
  await svi({ ...item, doNotRestock: checked });
}

// ── DETAIL SHEET INLINE HANDLERS ────────────────────────────────────────────
// These are called from onclick/onchange attributes in the inventory detail sheet.

/**
 * changeInvUnit(id, unit) — Updates the unit of measure for an inventory item.
 * Saves the unit as a product preference for next time, recalculates the restock
 * threshold if the user hasn't set a custom one, and propagates the change to the
 * matching shopping item (if any) so both tabs stay in sync (universal unit sync).
 */
export async function changeInvUnit(id, unit) {
  const item = state.inv.find(i => i.id === id);
  if (!item) return;
  const updated = { ...item, unit };
  // If no custom threshold was set, let it follow the smart default
  if (item.restockThreshold == null) {
    // Don't persist restockThreshold — let it stay null so smart default applies
  }
  await svi(updated);
  // Remember this unit choice so it auto-populates next time this product is added
  _savePreferredUnit(item.name, unit);
  // Propagate unit change to matching shopping item (universal unit sync)
  const shopItem = state.shop.find(i => i.name.toLowerCase().trim() === item.name.toLowerCase().trim());
  if (shopItem) await svShopItem({ ...shopItem, unit });
  // Subtle 2-second banner confirming unit preference was saved across both tabs
  showNotif("Unit updated everywhere", 2000);
  openInvItemDetail(id); // refresh the sheet to show updated data
}

/**
 * changeInvThreshold(id, delta) — Adjusts the WHOLE part of the restock threshold by +1 or -1.
 * Reads fraction from the threshold fraction dropdown and combines into decimal.
 */
export async function changeInvThreshold(id, delta) {
  const item = state.inv.find(i => i.id === id);
  if (!item) return;
  const el = g(`inv-thresh-${id}`);
  const fracEl = g(`inv-threshfrac-${id}`);
  const curWhole = parseInt(el?.value, 10) || 0;
  const curFrac = parseFloat(fracEl?.value) || 0;
  const newWhole = Math.max(0, curWhole + delta);
  // Threshold CAN be 0 (meaning "never show as running low" effectively)
  const combined = newWhole + curFrac;
  if (el) el.value = newWhole;
  await svi({ ...item, restockThreshold: Math.max(0, combined) });
}

/**
 * changeInvThresholdDirect(id) — Saves direct keyboard input for restock threshold whole part.
 * Reads fraction from dropdown and combines.
 */
export async function changeInvThresholdDirect(id) {
  const item = state.inv.find(i => i.id === id);
  if (!item) return;
  const el = g(`inv-thresh-${id}`);
  const fracEl = g(`inv-threshfrac-${id}`);
  const w = parseInt(el?.value, 10);
  const f = parseFloat(fracEl?.value) || 0;
  if (isNaN(w) || w < 0) return;
  await svi({ ...item, restockThreshold: Math.max(0, w + f) });
}

/**
 * changeInvThreshFrac(id) — Handles fraction dropdown change for restock threshold.
 * Reads whole number from input, combines with new fraction, saves.
 */
export async function changeInvThreshFrac(id) {
  const item = state.inv.find(i => i.id === id);
  if (!item) return;
  const el = g(`inv-thresh-${id}`);
  const fracEl = g(`inv-threshfrac-${id}`);
  const w = parseInt(el?.value, 10) || 0;
  const f = parseFloat(fracEl?.value) || 0;
  await svi({ ...item, restockThreshold: Math.max(0, w + f) });
}

/**
 * toggleDoNotRestock(id, checked) — Toggles the "don't add to Running Low" flag.
 * When true, item never appears in Running Low regardless of quantity.
 */
export async function toggleDoNotRestock(id, checked) {
  const item = state.inv.find(i => i.id === id);
  if (!item) return;
  await svi({ ...item, doNotRestock: checked });
}

// ── DETAIL SHEET INLINE HANDLERS (MERGED FROM ADJUST OVERLAY) ───────────────
// These handlers let the user edit all item fields directly on the detail sheet
// without needing a separate Adjust sub-screen.

/**
 * changeInvLocation(id, loc, btn) — Updates storage location from the detail sheet.
 * Highlights the selected location button and saves the preference.
 */
export async function changeInvLocation(id, loc, btn) {
  const item = state.inv.find(i => i.id === id);
  if (!item) return;
  // Deselect all location buttons in the detail sheet, then highlight the chosen one
  const sheet = g("invItemDetailContent");
  if (sheet) sheet.querySelectorAll(".lbtn").forEach(b => b.classList.remove("sel"));
  if (btn) btn.classList.add("sel");
  await svi({ ...item, location: loc });
  _savePreferredLocation(item.name, loc);
}

/**
 * changeInvQty(id, delta) — Adjusts the WHOLE part of quantity by +1 or -1.
 * Reads the current fraction from the dropdown and combines both into a decimal.
 * Does nothing if already at minimum (whole=0 with a fraction, or whole=1 with none).
 * Deletion only happens via swipe-to-delete or the Remove button — never by stepper.
 */
export async function changeInvQty(id, delta) {
  const item = state.inv.find(i => i.id === id);
  if (!item) return;
  const el = g(`inv-qty-${id}`);
  const fracEl = g(`inv-frac-${id}`);
  const curWhole = parseInt(el?.value, 10) || 0;
  const curFrac = parseFloat(fracEl?.value) || 0;
  const newWhole = Math.max(0, Math.min(99, curWhole + delta));
  const combined = combineQty(newWhole, curFrac);
  // If combined is at minimum (0.25) and delta is negative, do nothing
  if (delta < 0 && combineQty(curWhole, curFrac) <= 0.25) return;
  // Snappy number flip animation (150ms) — rolls up for increment, down for decrement
  if (el) {
    el.classList.remove("num-flip-up", "num-flip-down");
    void el.offsetWidth; // Force reflow to restart animation
    el.classList.add(delta > 0 ? "num-flip-up" : "num-flip-down");
    el.value = Math.floor(combined);
  }
  // If whole went to 0 and no fraction, auto-set fraction to smallest
  if (newWhole === 0 && curFrac === 0 && fracEl) fracEl.value = "0.25";
  await svi({ ...item, qty: combined });
}

/**
 * changeInvQtyDirect(id) — Saves direct keyboard input for the whole part of quantity.
 * Reads fraction from the dropdown, combines into decimal, enforces minimum.
 */
export async function changeInvQtyDirect(id) {
  const item = state.inv.find(i => i.id === id);
  if (!item) return;
  const el = g(`inv-qty-${id}`);
  const fracEl = g(`inv-frac-${id}`);
  const w = parseInt(el?.value, 10);
  const f = parseFloat(fracEl?.value) || 0;
  if (isNaN(w) || w < 0) return;
  const combined = combineQty(w, f);
  await svi({ ...item, qty: combined });
}

/**
 * changeInvFrac(id) — Handles fraction dropdown change for inventory quantity.
 * Reads the whole number from the input, combines with the new fraction, saves.
 */
export async function changeInvFrac(id) {
  const item = state.inv.find(i => i.id === id);
  if (!item) return;
  const el = g(`inv-qty-${id}`);
  const fracEl = g(`inv-frac-${id}`);
  const w = parseInt(el?.value, 10) || 0;
  const f = parseFloat(fracEl?.value) || 0;
  const combined = combineQty(w, f);
  // If user sets fraction to None while whole is 0, bump whole to 1
  if (f === 0 && w === 0 && el) el.value = 1;
  await svi({ ...item, qty: combined });
}

/**
 * changeInvExpiry(id) — Saves a new expiry date from the detail sheet date picker.
 */
export async function changeInvExpiry(id) {
  const item = state.inv.find(i => i.id === id);
  if (!item) return;
  const el = g(`inv-expiry-${id}`);
  await svi({ ...item, expiry: el?.value || null });
}

/**
 * clearInvExpiry(id) — Clears the expiry date, making it truly "no expiry".
 * Saves null to Firestore and refreshes the detail sheet to show the
 * "No expiry set" badge instead of the date picker.
 */
export async function clearInvExpiry(id) {
  const item = state.inv.find(i => i.id === id);
  if (!item) return;
  await svi({ ...item, expiry: null });
  // Refresh the detail sheet to swap from date picker to "No expiry" badge
  openInvItemDetail(id);
}

/**
 * setInvExpiry(id) — Transitions from "No expiry" badge to the date picker.
 * Sets today's date as default, saves to Firestore, and refreshes the sheet
 * so the user sees the date input and can adjust it.
 */
export async function setInvExpiry(id) {
  const item = state.inv.find(i => i.id === id);
  if (!item) return;
  // Default to today's date so the picker opens with a sensible value
  const today = new Date().toISOString().split("T")[0];
  await svi({ ...item, expiry: today });
  // Refresh the detail sheet to show the date picker with today's date
  openInvItemDetail(id);
}

/**
 * changeInvNote(id) — Saves the notes textarea value on blur from the detail sheet.
 */
export async function changeInvNote(id) {
  const item = state.inv.find(i => i.id === id);
  if (!item) return;
  const el = g(`inv-note-${id}`);
  const v = (el?.value || "").trim();
  await svi({ ...item, note: v || null });
}

// ── EDITABLE NAME / SUBTITLE IN DETAIL SHEET ─────────────────────────────────
// Allows users to tap the product name or subtitle in the detail sheet to
// inline-edit it. Changes save to Firestore and, for barcoded items, also
// persist to customProducts/{barcode} so future scans use the corrected name.

/**
 * editInvDetailCombined(id) — Shows both title and subtitle as inline editable
 * fields with a Save button below. Replaces the old separate edit/save pattern.
 * Auto-applies Title Case as the user types in both fields.
 */
export function editInvDetailCombined(id) {
  const displayEl = g(`inv-detail-display-${id}`);
  const editEl = g(`inv-detail-edit-${id}`);
  const titleInput = g(`inv-detail-name-input-${id}`);
  if (!displayEl || !editEl || !titleInput) return;
  displayEl.style.display = "none";
  editEl.style.display = "block";
  titleInput.focus();
  titleInput.select();
}

/**
 * saveInvDetailCombined(id) — Saves both title and subtitle from the combined
 * edit form. Updates scanTitle/name in Firestore. For barcoded items, also
 * persists correctedName to customProducts/{barcode} for future scans.
 */
export async function saveInvDetailCombined(id) {
  const item = state.inv.find(i => i.id === id);
  if (!item) return;
  const titleInput = g(`inv-detail-name-input-${id}`);
  const subInput = g(`inv-detail-sub-input-${id}`);
  const newTitle = (titleInput?.value || "").trim();
  const newSub = (subInput?.value || "").trim();
  if (!newTitle) return; // Title is required

  // Build update: title goes to scanTitle (or name if no scanTitle), subtitle goes to name
  const updates = { ...item };
  if (item.scanTitle || newSub) {
    // Item has or will have separate title/subtitle — store title in scanTitle, subtitle in name
    updates.scanTitle = newTitle;
    if (newSub) updates.name = newSub;
  } else {
    // No subtitle — store title directly as name
    updates.name = newTitle;
  }
  await svi(updates);

  // For barcoded items, save correctedName to customProducts for future barcode scans
  if (item.barcode && state.hid) {
    await _saveInvCustomProductName(item.barcode, newTitle);
  }

  showNotif("✓ Name updated");
  openInvItemDetail(id); // Refresh the sheet to reflect changes
}

// Keep legacy functions as aliases so any remaining callers don't break
export function editInvDetailName(id) { editInvDetailCombined(id); }
export async function saveInvDetailName(id) { await saveInvDetailCombined(id); }
export function editInvDetailSubtitle(id) { editInvDetailCombined(id); }
export async function saveInvDetailSubtitle(id) { await saveInvDetailCombined(id); }

/**
 * _saveInvCustomProductName(barcode, correctedName) — Saves a corrected name
 * to customProducts/{barcode} so future barcode scans return this name.
 */
async function _saveInvCustomProductName(barcode, correctedName) {
  if (!state.hid || !barcode) return;
  const normalizedBarcode = barcode.replace(/[^a-zA-Z0-9]/g, "");
  const docPath = `households/${state.hid}/customProducts/barcode_${normalizedBarcode}`;
  // dbSet uses PATCH (merge) so this only updates correctedName + updatedAt without overwriting other fields
  await dbSet(docPath, { correctedName, updatedAt: new Date().toISOString() });
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
  await svi({ id, barcode: id, name: nm, brand: "", unit, qty, location: state.maL, category: cat, image: null, source: "Manual", expiry: exp, addedAt: new Date().toLocaleDateString() });

  // Reset the form fields for next use
  g("man").value = ""; g("maq").value = 1; g("mae").value = "";
  g("mabtn").disabled = true;
  showNotif(`${nm} added!`); hideOv("madd");

  // Trigger product enrichment search — lets user pick a richer match with image/brand/category
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
      await svi({ id, barcode: id, name, brand: "", unit: unit || "unit", qty, location: curL, category: "Imported", image: null, source: "Imported", expiry: null, addedAt: ex ? ex.addedAt : new Date().toLocaleDateString() });
      ex ? updated++ : imported++;
    }
  }

  g("imptxt").value = ""; // clear the textarea
  showNotif(`Imported ${imported} new, updated ${updated}`);
  hideOv("import");
}

// ══════════════════════════════════════════════════════════════════════════════
// ── INVENTORY BOTTOM SHEET (ADD TO SUPPLIES) ────────────────────────────────
// Mirrors the Shopping screen's bottom sheet add-item flow:
//   - Text input with keyboard auto-focused
//   - Live search dropdown with debounced product database lookup
//   - Location picker (fridge / freezer / pantry / household)
//   - Optional note field
//   - "Scan barcode" and "Voice input" options
// Items added here go to the supplies/inventory collection, not shopping list.
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

  // Reset the qty/unit toolbar to defaults each time the sheet opens
  resetInvQtyToolbar();

  // Reset category badge — hidden until user types enough chars
  const catBadge = g("invAddCatBadge");
  if (catBadge) { catBadge.style.display = "none"; catBadge.innerHTML = ""; }
  const catKey = g("invAddCatKey");
  if (catKey) { catKey.value = ""; catKey.dataset.manual = ""; }

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

// ── QTY TOOLBAR STATE (INVENTORY) ────────────────────────────────────────────
// Tracks the quantity, fraction, and unit selected in the inventory add-item toolbar.
// These values are applied to items when the user taps Add or picks a search result.

/** Current whole-number quantity in the inventory add toolbar (default 1) */
let _invToolbarQty = 1;
/** Current fraction value in the inventory add toolbar (default 0 = none) */
let _invToolbarFrac = 0;

/**
 * initInvQtyToolbar() — Populates the fraction and unit dropdowns in the
 * inventory add-item toolbar. Called once on app init.
 */
export function initInvQtyToolbar() {
  // Build fraction dropdown options from FRAC_OPTIONS
  const fracSel = g("invQtyFrac");
  if (fracSel) {
    // "·/·" placeholder when no fraction selected; fraction glyph + "▼" arrow when selected
    fracSel.innerHTML = FRAC_OPTIONS.map(o =>
      `<option value="${o.value}">${o.value === 0 ? "·/· ▼" : o.label + " ▼"}</option>`
    ).join("");
  }
  // Build unit dropdown — "Unit" placeholder first, then all units alphabetically
  const unitSel = g("invQtyUnit");
  if (unitSel) {
    unitSel.innerHTML = UNITS.map(u =>
      `<option value="${u}"${u === "Unit" ? " selected" : ""}>${u}</option>`
    ).join("");
  }
}

/**
 * resetInvQtyToolbar() — Resets the toolbar to defaults (qty 1, no fraction, Unit).
 * Called each time the add-item sheet opens so prior values don't carry over.
 */
export function resetInvQtyToolbar() {
  _invToolbarQty = 1;
  _invToolbarFrac = 0;
  const valEl = g("invQtyVal");
  if (valEl) valEl.textContent = "1";
  const fracSel = g("invQtyFrac");
  if (fracSel) fracSel.value = "0";
  const unitSel = g("invQtyUnit");
  if (unitSel) unitSel.value = "Unit";
}

/**
 * invQtyStep(delta) — Increments or decrements the inventory toolbar whole qty.
 * Clamps to 1–99 range so the user can't go below 1 or above 99.
 */
export function invQtyStep(delta) {
  _invToolbarQty = Math.max(1, Math.min(99, _invToolbarQty + delta));
  const valEl = g("invQtyVal");
  if (valEl) {
    // Snappy number flip animation (150ms) — rolls up for increment, down for decrement
    valEl.classList.remove("num-flip-up", "num-flip-down");
    void valEl.offsetWidth; // Force reflow to restart animation
    valEl.classList.add(delta > 0 ? "num-flip-up" : "num-flip-down");
    valEl.textContent = _invToolbarQty;
  }
}

/**
 * invFracChange() — Updates the stored fraction value when the user picks
 * a fraction from the inventory toolbar dropdown.
 */
export function invFracChange() {
  const fracSel = g("invQtyFrac");
  _invToolbarFrac = fracSel ? parseFloat(fracSel.value) || 0 : 0;
}

/**
 * _getInvToolbarValues() — Returns the current toolbar qty, fraction, and unit
 * as a combined quantity decimal + unit string. Used by qaddInv() and pickInvInlineResult().
 */
function _getInvToolbarValues() {
  const fracSel = g("invQtyFrac");
  const unitSel = g("invQtyUnit");
  const frac = fracSel ? parseFloat(fracSel.value) || 0 : 0;
  const unit = unitSel ? unitSel.value : "Unit";
  // Combine whole + fraction into a single decimal (e.g. 2 + 0.5 = 2.5)
  const qty = combineQty(_invToolbarQty, frac);
  return { qty, unit };
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
 * checks for a saved product location preference, saves the item to the
 * selected location, and triggers product enrichment.
 */
export async function qaddInv() {
  const inp = g("invi"), v = inp ? inp.value.trim() : "";
  if (!v) return;

  // Try to parse a quantity from common text patterns (e.g. "5 apples", "eggs x3")
  let name = v, textQty = null;
  const leadMatch = v.match(/^(\d+)\s+(.+)/);
  const trailMatch = v.match(/^(.+?)\s*[x×]\s*(\d+)$/i);
  if (trailMatch) { name = trailMatch[1].trim(); textQty = parseInt(trailMatch[2], 10) || null; }
  else if (leadMatch) { name = leadMatch[2].trim(); textQty = parseInt(leadMatch[1], 10) || null; }

  // Use toolbar qty/unit — toolbar is the primary source; text-parsed qty overrides only the whole number
  const tb = _getInvToolbarValues();
  const qty = textQty || tb.qty;

  // Capture the optional note from the collapsible note field
  const noteInp = g("invAddNoteInp");
  const note = noteInp ? noteInp.value.trim() : "";

  // Check for saved product preferences (location + unit) in a single Firestore read
  const pref = await _getProductPreference(name);
  const loc = pref?.preferredLocation || _invAddLocation;
  // Toolbar unit takes priority, then saved preference, then default "unit"
  const unit = tb.unit !== "Unit" ? tb.unit : (pref?.preferredUnit || "unit");

  // Generate a unique ID for the new inventory item
  const id = "itm-" + name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") + "-" + Date.now();

  // Auto-detect prep category or use the manually picked one from the add sheet badge
  const pickedCat = g("invAddCatKey");
  const prepCategory = (pickedCat && pickedCat.value) || autoCategorizeByName(name);

  // Save the item to inventory with toolbar qty/unit and preferred location
  const item = {
    id, barcode: id, name, brand: "", unit, qty,
    location: loc, category: gcat({ name }),
    image: null, source: "Manual",
    expiry: null, addedAt: new Date().toLocaleDateString(),
    prepCategory
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
 * Applies Title Case as the user types and (when search is enabled) debounces
 * the product search by 350ms to avoid excessive API calls.
 */
export function onInvInput() {
  // Auto Title Case: capitalize the first letter of every word as the user types
  const inp = g("invi");
  if (inp) applyTitleCaseWhileTyping(inp);

  // Update the category badge pill as the user types — auto-detects from the name
  _updateInvAddCatBadge(inp ? inp.value.trim() : "");

  // [SEARCH DISABLED] — uncomment to re-enable product search
  // Text search on keystroke is disabled. The input field still works for
  // plain-text adds via qaddInv(). Debounce and _runInvSearch calls are
  // commented out so no API calls fire while typing.
  return;

  // // Clear any pending search timer so only the last keystroke triggers a search
  // if (_invSearchTimer) clearTimeout(_invSearchTimer);
  //
  // const query = inp ? inp.value.trim() : "";
  // const dropdown = g("invSearchDropdown");
  //
  // // If input is too short, hide the dropdown and bail
  // if (!query || query.length < 2) {
  //   if (dropdown) { dropdown.classList.remove("active"); dropdown.innerHTML = ""; }
  //   _invInlineResults = null;
  //   return;
  // }
  //
  // // Wait 350ms after the user stops typing before searching (debounce)
  // _invSearchTimer = setTimeout(() => _runInvSearch(query), 350);
}

// ── CATEGORY BADGE ON ADD SHEET ──────────────────────────────────────────────
// Shows a collapsed category pill below the input that auto-updates as the user types.

/**
 * _updateInvAddCatBadge(name) — Updates the category badge pill on the Supplies
 * add sheet based on the current input text. Shows the badge once 2+ chars are typed.
 */
function _updateInvAddCatBadge(name) {
  const badge = g("invAddCatBadge");
  const hiddenKey = g("invAddCatKey");
  if (!badge) return;

  if (!name || name.length < 2) {
    badge.style.display = "none";
    if (hiddenKey) hiddenKey.value = "";
    return;
  }

  // If user manually picked a category, keep it
  if (hiddenKey && hiddenKey.value && hiddenKey.dataset.manual === "true") {
    badge.style.display = "block";
    return;
  }

  const catKey = autoCategorizeByName(name);
  badge.innerHTML = renderCategoryBadge(catKey, "openInvAddCatPicker()");
  badge.style.display = "block";
  if (hiddenKey) { hiddenKey.value = catKey; hiddenKey.dataset.manual = ""; }
}

/**
 * openInvAddCatPicker() — Opens the category picker from the Supplies add sheet.
 * When a category is selected, updates the badge and hidden field.
 */
export function openInvAddCatPicker() {
  const hiddenKey = g("invAddCatKey");
  const currentCat = hiddenKey ? hiddenKey.value : "other";
  openCategoryPicker(currentCat, (catKey) => {
    if (hiddenKey) { hiddenKey.value = catKey; hiddenKey.dataset.manual = "true"; }
    const badge = g("invAddCatBadge");
    if (badge) badge.innerHTML = renderCategoryBadge(catKey, "openInvAddCatPicker()");
  });
}

/**
 * changeInvCategory(id) — Opens the category picker for an existing inventory
 * item (from its detail sheet). Saves the new category to Firestore on selection.
 */
export function changeInvCategory(id) {
  const item = state.inv.find(i => i.id === id);
  if (!item) return;
  const currentCat = item.prepCategory || autoCategorize(item);
  openCategoryPicker(currentCat, async (catKey) => {
    await changeInvItemCategory(id, catKey);
    // Refresh the detail sheet to show updated badge
    openInvItemDetail(id);
    const { name: catName } = getCategoryDisplay(catKey);
    showNotif(`Category: ${catName}`);
  });
}

/**
 * _classifyInvImageSource(url) — Identifies the origin of an image URL for debug logging.
 * Helps verify that real product photos beat generic illustrations in search results.
 */
function _classifyInvImageSource(url) {
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
 * _renderInvDropdown(results) — Renders an array of product results into
 * the inventory search dropdown. Extracted so both the instant custom-product
 * path and the full API path can share the same rendering logic.
 * @param {Array} results — Scored product results to render
 */
function _renderInvDropdown(results) {
  const dropdown = g("invSearchDropdown");
  if (!dropdown || !results.length) return;

  _invInlineResults = results;

  // Log each result's image source for debugging image priority in DevTools
  results.forEach((p, i) => {
    const imgSrc = _classifyInvImageSource(p.image);
    console.log(`[InvDropdown] #${i} "${p.name}" → image: ${imgSrc} | url: ${p.image || "(none)"} | score: ${p._score}`);
  });

  // Render result rows with consistent layout: image LEFT, text RIGHT.
  // Matches shopping dropdown layout — no brand shown (often irrelevant in text search).
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
    return `<div class="enrich-row" onclick="pickInvInlineResult(${i})">
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
 * _checkInvCustomProductLocal(query) — Client-side instant lookup of the
 * household's customProducts collection in Firestore. Returns a search-result-
 * shaped object if a matching custom product exists with a non-dismissed image,
 * or null. Avoids the api/text-search.js round-trip for known custom products.
 */
async function _checkInvCustomProductLocal(query) {
  // [IMAGES DISABLED] — Product images commented out pending decision.
  // See session notes: images caused false positives from external databases,
  // inconsistent UX, and unnecessary costs. Custom photo pipeline preserved.
  // To re-enable: uncomment these blocks and restore image display logic.
  return null;
  // if (!state.hid || !query) return null;
  // const normalized = normalizeProductName(query);
  // if (!normalized) return null;
  // const cpDoc = await dbGet(`households/${state.hid}/customProducts/${normalized}`);
  // if (!cpDoc || cpDoc.imageDismissed || !cpDoc.imageUrl) return null;
  // const displayName = query.trim().replace(/\b\w/g, c => c.toUpperCase());
  // return {
  //   name: displayName, image: cpDoc.imageUrl, brand: "",
  //   category: cpDoc.category || "", source: "customProduct", _score: 100,
  // };
}

/**
 * _fetchInvApiResults(query) — Fetches product search results from the API
 * (with in-memory caching), scores/filters them, and returns the top 5.
 * Extracted from _runInvSearch so the API call can run in parallel with
 * the instant customProduct lookup.
 */
async function _fetchInvApiResults(query) {
  const cacheKey = query.toLowerCase();
  const cached = _invSearchCache.get(cacheKey);

  if (cached && Date.now() - cached.ts < _INV_CACHE_TTL) {
    return cached.scored;
  }

  // Fetch from API — include household ID so the API can also check
  // customProducts server-side as a fallback
  const hidParam = state.hid ? `&hid=${encodeURIComponent(state.hid)}` : "";
  const r = await fetch(`/api/text-search?q=${encodeURIComponent(query)}${hidParam}`);
  const data = await r.json();
  let raw = data.results || [];

  // Filter: at least one query word must appear in the product name
  const queryWords = query.toLowerCase().split(/\s+/).filter(w => w.length >= 2);
  raw = raw.filter(p => {
    const nameLower = (p.name || "").toLowerCase();
    return queryWords.some(w => nameLower.includes(w));
  });

  // Score, filter low-relevance, sort, and cap at 5
  const results = raw
    .map(p => ({ ...p, _score: scoreSearchResult(p.name || "", query) }))
    .filter(p => p._score >= 15)
    .sort((a, b) => b._score - a._score)
    .slice(0, 5);

  // Cache the scored results
  _invSearchCache.set(cacheKey, { scored: results, ts: Date.now() });
  if (_invSearchCache.size > _INV_CACHE_MAX) {
    _invSearchCache.delete(_invSearchCache.keys().next().value);
  }

  return results;
}

/**
 * _runInvSearch(query) — Two-phase search for inventory: instantly checks
 * the local customProducts collection (sub-100ms), then fires the API in
 * parallel for external database results. Custom product appears immediately;
 * API results merge in when they arrive, deduplicated.
 */
async function _runInvSearch(query) {
  const dropdown = g("invSearchDropdown");
  if (!dropdown) return;

  dropdown.innerHTML = '<div class="search-hint">Searching…</div>';
  dropdown.classList.add("active");

  try {
    // Phase 1: Instant client-side customProduct lookup.
    // Fire both in parallel — custom result renders immediately if found.
    const customPromise = _checkInvCustomProductLocal(query);
    const apiPromise = _fetchInvApiResults(query);

    // Show custom product result instantly if available
    const customResult = await customPromise;
    if (customResult) {
      const curQuery = g("invi") ? g("invi").value.trim() : "";
      if (curQuery.toLowerCase() === query.toLowerCase()) {
        console.log(`[InvSearch] Instant custom product match for "${query}"`);
        _renderInvDropdown([customResult]);
      }
    }

    // Phase 2: Wait for full API results from external databases
    const apiResults = await apiPromise;

    // Bail if input changed during fetch (stale response)
    const currentQuery = g("invi") ? g("invi").value.trim() : "";
    if (currentQuery.toLowerCase() !== query.toLowerCase()) return;

    // Merge: prepend custom product ahead of API results, dedup by normalized name
    let merged = apiResults;
    if (customResult) {
      const customNorm = normalizeProductName(customResult.name);
      const deduped = apiResults.filter(r => normalizeProductName(r.name) !== customNorm);
      merged = [customResult, ...deduped].slice(0, 5);
    }

    if (!merged.length) {
      dropdown.classList.remove("active");
      dropdown.innerHTML = "";
      _invInlineResults = null;
      return;
    }

    _renderInvDropdown(merged);

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
 * the product's rich data (name, brand, image, category).
 * Also applies saved unit preference if one exists.
 */
export async function pickInvInlineResult(index) {
  if (!_invInlineResults || !_invInlineResults[index]) return;
  const product = _invInlineResults[index];

  // Capture the optional note
  const noteInp = g("invAddNoteInp");
  const note = noteInp ? noteInp.value.trim() : "";

  // Use toolbar qty/unit values so the user's stepper/dropdown choices carry through
  const tb = _getInvToolbarValues();

  // Check for saved product preferences (location + unit) in a single read
  const pref = await _getProductPreference(product.name);

  // Generate a unique ID
  const id = "itm-" + (product.name || "item").toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") + "-" + Date.now();

  // Toolbar unit takes priority, then saved preference, then default "unit"
  const unit = tb.unit !== "Unit" ? tb.unit : (pref?.preferredUnit || "unit");

  // Save the enriched item to inventory, applying toolbar and saved preferences
  const item = {
    id, barcode: id,
    name: product.name,
    brand: product.brand || "",
    unit, qty: tb.qty,
    location: pref?.preferredLocation || _invAddLocation,
    category: product.category || gcat({ name: product.name }),
    // [IMAGES DISABLED] — product image field commented out
    // image: product.image || null,
    source: product.source || "search",
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
  _invRecognition.onend = async () => {
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

    // Parse the transcript for multiple items (e.g. "eggs, milk, and bread")
    const parsedItems = parseVoiceMultiItems(text);

    // Add each parsed item to inventory
    for (const { name } of parsedItems) {
      // Check for saved product preferences (location + unit) in a single read
      const pref = await _getProductPreference(name);
      const id = "itm-" + name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") + "-" + Date.now();
      const loc = pref?.preferredLocation || guessLocation(name);
      svi({
        id, barcode: id, name, brand: "", unit: pref?.preferredUnit || "unit", qty: 1,
        location: loc, category: gcat({ name }),
        image: null, source: "Voice",
        expiry: null, addedAt: new Date().toLocaleDateString()
      });
      // Trigger enrichment search for each item
      searchAndEnrich(id, name, "inv");
    }

    // Show appropriate notification
    if (parsedItems.length > 1) {
      showNotif(`Added ${parsedItems.length} items 🎤`);
    } else {
      const loc = guessLocation(parsedItems[0].name);
      showNotif(`Added "${parsedItems[0].name}" to ${loc}`);
    }

    // Clear the input field
    const inp = g("invi");
    if (inp) inp.value = "";
  };

  _invRecognition.start();
}

// ── ADD INVENTORY ITEM TO SHOPPING LIST ──────────────────────────────────────
// Lets the user quickly add a supplies item to their shopping list — useful
// when they notice they're running low while browsing their inventory.

/**
 * addInvToShopping(id) — Creates a new shopping list entry from an inventory item.
 * Copies the item's name, brand, and image (if any). Prevents duplicates by
 * checking if the item is already on the shopping list.
 */
export async function addInvToShopping(id) {
  const item = state.inv.find(i => i.id === id);
  if (!item) return;

  // Consolidate with existing items — increments qty if already on the list
  const result = await consolidateShopItem({
    id: "shop-" + Date.now() + "-" + Math.random().toString(36).slice(2),
    name: item.name,
    qty: 1,
    checked: false,
    brand: item.brand || "",
    image: item.image || null,
    src: "supplies"
  });

  if (result.action === "new") {
    showNotif(`${item.name} added to shopping list 🛒`);
  } else {
    showNotif(`${item.name} quantity updated on shopping list 🛒`);
  }
  closeInvItemDetail();
}
