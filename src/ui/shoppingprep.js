// ── SHOPPING PREP SCREEN ────────────────────────────────────────────────────
// Full-screen pre-shop audit mode. The user walks through grocery categories,
// verifies quantities, corrects them inline, and builds a shopping list —
// all in one focused flow before heading to the store.
//
// Two-level navigation inside a single overlay (ov-shoppingprep):
//   1. Category grid — shows all aisle categories with item counts
//   2. Category detail — shows items in one category with qty controls
//
// Session state (verified items, added-to-shop items, qty changes) is held
// in memory and reset when Shopping Prep is closed. Only qty changes are
// persisted to Firestore (auto-saved with 500ms debounce).

import { state } from '../state.js';
import { svi, dbSet } from '../db.js';
import { g, showNotif, showOv, hideOv, toTitleCase, formatQty, splitQty, combineQty, mapOffCategory } from '../helpers.js';
import { consolidateShopItem } from './shopping.js';
import { _defaultThreshold } from './home.js';
import { enableSwipeBack, disableSwipeBack } from './swipeback.js';
import { PREP_CATEGORIES, getAllCategories, getCategoryDisplay, autoCategorize, openCategoryPicker, changeInvItemCategory, deleteCustomCategory, renameCustomCategory, reorderCustomCategory, addSubCategory, confirmCreateCustomCategory, showCreateCustomCategory, DEFAULT_CUSTOM_EMOJI, openEmojiPicker } from './categorypicker.js';

// PREP_CATEGORIES now imported from categorypicker.js (single source of truth)

// ── SESSION STATE ──────────────────────────────────────────────────────────
// Ephemeral state that lives only while Shopping Prep is open.
// Reset when the overlay is closed.
let _verified = new Set();       // item IDs physically verified during this audit
let _addedToShop = new Set();    // item IDs already added to shopping list this session
let _qtyUpdated = 0;             // count of items whose qty was changed this session
let _currentCategory = null;     // currently viewing category key, null = grid view
let _saveTimers = new Map();     // per-item debounce timers for qty auto-save (itemId → timerId)
let _qtyCounted = new Set();     // item IDs whose qty change has been counted for the summary
let _prepSearchQuery = "";       // current search query for filtering across all categories

/**
 * filterPrepSearch() — Called on search input change. Updates the search query
 * and re-renders the grid or detail view to show matching items.
 */
export function filterPrepSearch() {
  const inp = g("prep-search");
  _prepSearchQuery = inp ? inp.value.trim().toLowerCase() : "";

  // If we're in grid view, render search results across all categories
  if (!_currentCategory) {
    if (_prepSearchQuery) {
      _renderSearchResults();
    } else {
      _renderGrid();
    }
  } else {
    // In detail view, re-render to filter within the category
    _renderDetail(_currentCategory);
  }
}

/**
 * _renderSearchResults() — Renders search results across ALL categories.
 * Groups matching items under their respective category headers.
 */
function _renderSearchResults() {
  const body = g("prep-body");
  if (!body) return;

  const groups = _groupByCategory();
  const allCats = getAllCategories();
  let html = "";
  let totalMatches = 0;

  for (const cat of allCats) {
    const items = (groups.get(cat.key) || []).filter(item => {
      const searchStr = [item.scanTitle || "", item.name || "", item.brand || ""].join(" ").toLowerCase();
      return searchStr.includes(_prepSearchQuery);
    });
    if (!items.length) continue;
    totalMatches += items.length;

    // Category header
    html += `<div class="prep-search-cat-header">${cat.emoji} ${cat.name} (${items.length})</div>`;

    // Render matching items with full controls
    for (const item of items) {
      const isLow = _isLowStock(item);
      const isAdded = _addedToShop.has(item.id);
      const displayName = toTitleCase(item.scanTitle || item.name);

      html += `<div class="prep-item${isLow ? " prep-item-low" : ""}" id="prep-row-${item.id}">
        <div class="prep-item-info" style="flex:1;min-width:0">
          <div class="prep-item-name">${displayName}</div>
        </div>
        <div class="prep-qty-group">
          <button class="prep-qty-btn" onclick="prepQtyStep('${item.id}',-1)">−</button>
          <span class="prep-qty-val" id="prep-qty-${item.id}">${formatQty(item.qty)}</span>
          <button class="prep-qty-btn" onclick="prepQtyStep('${item.id}',1)">+</button>
        </div>
        <div class="prep-unit">${item.unit || "Unit"}</div>
        <button class="prep-shop-btn${isAdded ? " prep-shop-added" : ""}" id="prep-shop-${item.id}"
          onclick="prepAddToShop('${item.id}')"${isAdded ? " disabled" : ""}>
          ${isAdded ? "✓ Added" : "🛒"}
        </button>
      </div>`;
    }
  }

  if (!totalMatches) {
    html = `<div class="es" style="padding:40px 20px"><div class="ei">🔍</div>
      <p>No items matching "${_prepSearchQuery}"</p></div>`;
  }

  body.innerHTML = html;
}

// ── CATEGORY MAPPING ───────────────────────────────────────────────────────

/**
 * _categorizeItem(item) — Maps a single inventory item to a prep category key.
 * Resolution order (most authoritative first):
 *   0. Stored prepCategory — user's explicit choice (highest priority)
 *   1. Open Food Facts category (offCategory) → mapOffCategory() — most accurate auto
 *   2. Item location (Freezer → "frozen") — physical location override
 *   3. Keyword matching on item name/scanTitle — fallback heuristic
 *   4. "other" — catch-all when nothing matches
 */
function _categorizeItem(item) {
  // 0. Use stored prepCategory if the user has explicitly assigned one.
  //    Validates that the key still exists (default or custom) to handle
  //    deleted custom categories gracefully — falls through if orphaned.
  if (item.prepCategory) {
    const allCats = getAllCategories();
    if (allCats.some(c => c.key === item.prepCategory)) return item.prepCategory;
  }

  // 1–4. Fall back to auto-detection (OFF data, location, keywords)
  return autoCategorize(item);
}

/**
 * _groupByCategory() — Groups all inventory items into prep categories.
 * Includes both default and custom household categories.
 * Returns a Map<categoryKey, item[]> with only non-empty categories.
 */
function _groupByCategory() {
  const groups = new Map();
  const allCats = getAllCategories();

  // Initialize all categories (default + custom) as empty arrays
  for (const cat of allCats) {
    groups.set(cat.key, []);
  }

  // Assign each inventory item to its category
  for (const item of state.inv) {
    const catKey = _categorizeItem(item);
    // If catKey isn't in groups (orphaned custom category), put in "other"
    if (groups.has(catKey)) {
      groups.get(catKey).push(item);
    } else {
      groups.get("other").push(item);
    }
  }

  // Sort items within each category alphabetically by display name
  for (const [key, items] of groups) {
    items.sort((a, b) =>
      (a.scanTitle || a.name).localeCompare(b.scanTitle || b.name, undefined, { sensitivity: "base" })
    );
  }

  return groups;
}

/**
 * _isLowStock(item) — Returns true if the item is at or below its restock threshold.
 * Respects custom thresholds and the doNotRestock flag.
 */
function _isLowStock(item) {
  if (item.doNotRestock) return false;
  const thresh = item.restockThreshold != null ? item.restockThreshold : _defaultThreshold(item.unit);
  return item.qty <= thresh;
}

/**
 * _timeAgo(dateStr) — Returns a human-readable "X days ago" string from an addedAt date.
 * Falls back to "—" if no date is available.
 */
function _timeAgo(dateStr) {
  if (!dateStr) return "—";
  // Try parsing various date formats (ISO, locale string, etc.)
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  const diffMs = Date.now() - d.getTime();
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days} days ago`;
  if (days < 30) return `${Math.floor(days / 7)} week${Math.floor(days / 7) > 1 ? "s" : ""} ago`;
  if (days < 365) return `${Math.floor(days / 30)} month${Math.floor(days / 30) > 1 ? "s" : ""} ago`;
  return `${Math.floor(days / 365)} year${Math.floor(days / 365) > 1 ? "s" : ""} ago`;
}

// ── OPEN / CLOSE ───────────────────────────────────────────────────────────

/**
 * openShoppingPrep() — Opens the Shopping Prep full-screen overlay.
 * Resets all session state, renders the category grid, and enables swipe-back.
 */
export function openShoppingPrep() {
  // Reset session state for a fresh audit
  _verified = new Set();
  _addedToShop = new Set();
  _qtyUpdated = 0;
  _currentCategory = null;
  _qtyCounted = new Set();
  _prepSearchQuery = "";
  _saveTimers.forEach(timerId => clearTimeout(timerId));
  _saveTimers.clear();

  // Clear search input
  const searchInp = g("prep-search");
  if (searchInp) searchInp.value = "";

  // Render the category grid and show the overlay
  _renderGrid();
  showOv("shoppingprep");

  // Swipe-back from grid closes the overlay entirely
  enableSwipeBack(() => closeShoppingPrep());
}

/**
 * closeShoppingPrep() — Closes the Shopping Prep overlay and shows a summary toast.
 * Clears any pending save timers and resets session state.
 */
export function closeShoppingPrep() {
  // Clear any pending debounced saves
  _saveTimers.forEach(timerId => clearTimeout(timerId));
  _saveTimers.clear();

  disableSwipeBack();
  hideOv("shoppingprep");

  // Show summary toast
  const addedCount = _addedToShop.size;
  const qtyCount = _qtyUpdated;
  if (addedCount > 0 || qtyCount > 0) {
    const parts = [];
    if (addedCount > 0) parts.push(`${addedCount} item${addedCount !== 1 ? "s" : ""} added to Shopping List`);
    if (qtyCount > 0) parts.push(`${qtyCount} quantit${qtyCount !== 1 ? "ies" : "y"} updated`);
    showNotif(`Shopping Prep complete — ${parts.join(", ")}`);
  } else {
    showNotif("No changes made");
  }
}

// ── CATEGORY GRID ──────────────────────────────────────────────────────────

/**
 * _renderGrid() — Renders the category overview grid inside the prep overlay.
 * Each card shows the category emoji, name, item count, and a low-stock indicator.
 */
function _renderGrid() {
  const body = g("prep-body");
  if (!body) return;

  // Update overlay header title
  const title = g("prep-title");
  if (title) title.textContent = "Shopping Prep";
  const backBtn = g("prep-back");
  if (backBtn) backBtn.setAttribute("onclick", "closeShoppingPrep()");

  const groups = _groupByCategory();
  const allCats = getAllCategories();
  const customs = (state.cfg.customPrepCategories || []);
  const customKeys = new Set(customs.map(c => c.key));

  let html = '<div class="prep-grid">';
  let customDividerAdded = false;

  for (const cat of allCats) {
    const items = groups.get(cat.key) || [];
    // Count items that are at or below restock threshold
    const lowCount = items.filter(i => _isLowStock(i)).length;
    const isCustom = customKeys.has(cat.key);

    // Add a divider before the first custom category card
    if (isCustom && !customDividerAdded) {
      html += `<div class="prep-custom-divider">Custom Categories</div>`;
      customDividerAdded = true;
    }

    // Show card even if empty (with 0 count) for complete category coverage.
    // Skip sub-categories (they render under their parent in detail view)
    if (cat.isSubCategory) continue;

    // Long-press opens management options for custom categories
    const longPressAttr = isCustom ? ` ontouchstart="prepCatLongPress(event,'${cat.key}')" oncontextmenu="prepCatLongPress(event,'${cat.key}')"` : "";

    html += `<div class="prep-cat-card${lowCount > 0 ? " prep-cat-low" : ""}" onclick="openPrepCategory('${cat.key}')"${longPressAttr}>
      <div class="prep-emoji">${cat.emoji}</div>
      <div class="prep-cat-name">${cat.name}</div>
      <div class="prep-cat-count">${items.length} item${items.length !== 1 ? "s" : ""}</div>
      ${lowCount > 0 ? `<div class="prep-low-badge">${lowCount} low</div>` : ""}
    </div>`;
  }

  html += "</div>";

  // "+ Add Category" button at the bottom of the grid
  html += `<button class="btn bs bf prep-add-cat-btn" onclick="openPrepAddCategory()">
    + Add Category
  </button>`;

  body.innerHTML = html;
}

// ── CATEGORY DETAIL VIEW ───────────────────────────────────────────────────

/**
 * openPrepCategory(categoryKey) — Opens the detail view for a specific category.
 * Shows all items in that category with qty controls, verify checkboxes, and
 * add-to-shopping buttons. Enables swipe-back to return to the grid.
 */
export function openPrepCategory(categoryKey) {
  _currentCategory = categoryKey;

  // Switch swipe-back to go back to grid (not close overlay)
  enableSwipeBack(() => backToGrid());

  _renderDetail(categoryKey);
}

/**
 * backToGrid() — Returns from category detail view to the category grid.
 * Re-enables swipe-back to close the overlay.
 */
export function backToGrid() {
  _currentCategory = null;
  _renderGrid();

  // Reset swipe-back target to close the overlay
  enableSwipeBack(() => closeShoppingPrep());
}

/**
 * _renderDetail(categoryKey) — Renders the detail list for one category.
 * Shows each item with: verify checkbox, name, qty stepper, unit, last updated,
 * and an "Add to Shopping List" button.
 */
function _renderDetail(categoryKey) {
  const body = g("prep-body");
  if (!body) return;

  const cat = getAllCategories().find(c => c.key === categoryKey);
  if (!cat) return;

  // Update overlay header
  const title = g("prep-title");
  if (title) title.textContent = `${cat.emoji} ${cat.name}`;
  const backBtn = g("prep-back");
  if (backBtn) backBtn.setAttribute("onclick", "backToGrid()");

  const groups = _groupByCategory();
  const items = groups.get(categoryKey) || [];

  // Count items that are at or below restock threshold
  const lowItems = items.filter(i => _isLowStock(i));

  let html = "";

  // "Add all low items" button at top — only show if there are low items
  if (lowItems.length > 0) {
    html += `<button class="btn bp bf prep-add-all-low" onclick="prepAddAllLow('${categoryKey}')">
      Add all low (${lowItems.length})
    </button>`;
  }

  // Empty state if no items in this category
  if (!items.length) {
    html += `<div class="es" style="padding:40px 20px"><div class="ei">${cat.emoji}</div>
      <p>No items in ${cat.name}</p></div>`;
  }

  // Render each item row
  for (const item of items) {
    const isLow = _isLowStock(item);
    const isVerified = _verified.has(item.id);
    const isAdded = _addedToShop.has(item.id);
    const displayName = toTitleCase(item.scanTitle || item.name);
    const { whole, frac } = splitQty(item.qty);
    const unitDisplay = item.unit || "Unit";

    html += `<div class="prep-item${isLow ? " prep-item-low" : ""}${isVerified ? " prep-item-verified" : ""}" id="prep-row-${item.id}">
      <!-- Verify checkbox: marks item as physically checked during audit -->
      <div class="prep-verify${isVerified ? " checked" : ""}" onclick="prepToggleVerify('${item.id}')">
        ${isVerified ? "✓" : ""}
      </div>
      <div class="prep-item-info">
        <div class="prep-item-name">${displayName}</div>
        <!-- Category badge: tappable pill to recategorize this item -->
        <div class="prep-cat-badge" onclick="event.stopPropagation();prepRecategorize('${item.id}')">${getCategoryDisplay(_categorizeItem(item)).emoji} ${getCategoryDisplay(_categorizeItem(item)).name} ▼</div>
      </div>
      <!-- Inline quantity stepper: auto-saves to Firestore with 500ms debounce -->
      <div class="prep-qty-group">
        <button class="prep-qty-btn" onclick="prepQtyStep('${item.id}',-1)">−</button>
        <span class="prep-qty-val" id="prep-qty-${item.id}">${formatQty(item.qty)}</span>
        <button class="prep-qty-btn" onclick="prepQtyStep('${item.id}',1)">+</button>
      </div>
      <div class="prep-unit">${unitDisplay}</div>
      <!-- Add to Shopping List / Added indicator -->
      <button class="prep-shop-btn${isAdded ? " prep-shop-added" : ""}" id="prep-shop-${item.id}"
        onclick="prepAddToShop('${item.id}')"${isAdded ? " disabled" : ""}>
        ${isAdded ? "✓ Added" : "🛒"}
      </button>
    </div>`;
  }

  // "+ Add new item to Shopping List" button at bottom
  html += `<button class="btn bs bf" style="margin-top:16px" onclick="prepAddNewItem()">
    + Add new item to Shopping List
  </button>`;

  body.innerHTML = html;
}

// ── ITEM ACTIONS ───────────────────────────────────────────────────────────

/**
 * prepToggleVerify(itemId) — Toggles the "physically verified" checkbox on an item.
 * Stored in memory only (resets when Shopping Prep closes). Gives the user
 * a sense of audit progress as they walk through the kitchen.
 */
export function prepToggleVerify(itemId) {
  if (_verified.has(itemId)) {
    _verified.delete(itemId);
  } else {
    _verified.add(itemId);
  }

  // Update the checkbox UI without full re-render for snappy feedback
  const row = g(`prep-row-${itemId}`);
  if (row) {
    const cb = row.querySelector(".prep-verify");
    if (cb) {
      cb.classList.toggle("checked");
      cb.innerHTML = _verified.has(itemId) ? "✓" : "";
    }
    row.classList.toggle("prep-item-verified");
  }
}

/**
 * prepAddToShop(itemId) — Shows a quick quantity picker before adding an item
 * to the shopping list. The picker appears inline next to the cart button
 * for a fast, non-intrusive selection experience.
 */
export function prepAddToShop(itemId) {
  // Prevent double-add
  if (_addedToShop.has(itemId)) return;

  const item = state.inv.find(i => i.id === itemId);
  if (!item) return;

  // Replace the cart button with an inline quantity stepper + confirm button
  const btn = g(`prep-shop-${itemId}`);
  if (!btn) return;

  // Create the inline quantity picker
  const parent = btn.parentElement;
  const picker = document.createElement("div");
  picker.className = "prep-qty-picker";
  picker.id = `prep-picker-${itemId}`;
  picker.innerHTML = `
    <button class="prep-qty-btn" onclick="event.stopPropagation();prepPickerStep('${itemId}',-1)">−</button>
    <span class="prep-picker-val" id="prep-pick-val-${itemId}">1</span>
    <button class="prep-qty-btn" onclick="event.stopPropagation();prepPickerStep('${itemId}',1)">+</button>
    <button class="prep-picker-confirm" onclick="event.stopPropagation();prepConfirmAdd('${itemId}')">✓</button>
  `;

  // Hide the original cart button and show the picker
  btn.style.display = "none";
  parent.appendChild(picker);
}

// Tracks qty values for the inline quantity pickers (itemId → qty)
const _pickerQtys = new Map();

/**
 * prepPickerStep(itemId, delta) — Adjusts the quantity in the inline picker by +/- 1.
 */
export function prepPickerStep(itemId, delta) {
  const current = _pickerQtys.get(itemId) || 1;
  const newQty = Math.max(1, Math.min(99, current + delta));
  _pickerQtys.set(itemId, newQty);
  const el = g(`prep-pick-val-${itemId}`);
  if (el) el.textContent = newQty;
}

/**
 * prepConfirmAdd(itemId) — Confirms the quantity and adds the item to shopping list.
 * Uses the quantity from the inline picker.
 */
export async function prepConfirmAdd(itemId) {
  const item = state.inv.find(i => i.id === itemId);
  if (!item) return;

  const qty = _pickerQtys.get(itemId) || 1;
  _pickerQtys.delete(itemId);

  // Add to shopping list via the consolidation-aware function
  await consolidateShopItem({
    id: "shop-" + Date.now() + "-" + Math.random().toString(36).slice(2),
    name: item.name,
    qty: qty,
    unit: item.unit || "Unit",
    checked: false,
    brand: item.brand || "",
    src: "prep"
  });

  _addedToShop.add(itemId);

  // Remove the picker and show "✓ Added" on the original button
  const picker = g(`prep-picker-${itemId}`);
  if (picker) picker.remove();

  const btn = g(`prep-shop-${itemId}`);
  if (btn) {
    btn.style.display = "";
    btn.classList.add("prep-shop-added");
    btn.textContent = `✓ ${qty > 1 ? qty + " " : ""}Added`;
    btn.disabled = true;
  }
}

/**
 * prepAddAllLow(categoryKey) — Adds ALL low-stock items in a category to the shopping list.
 * Skips items already added this session. Shows a count toast when done.
 */
export async function prepAddAllLow(categoryKey) {
  const groups = _groupByCategory();
  const items = (groups.get(categoryKey) || []).filter(i => _isLowStock(i) && !_addedToShop.has(i.id));

  if (!items.length) {
    showNotif("All low items already added");
    return;
  }

  // Add each low item to the shopping list
  for (const item of items) {
    await consolidateShopItem({
      id: "shop-" + Date.now() + "-" + Math.random().toString(36).slice(2),
      name: item.name,
      qty: 1,
      unit: item.unit || "Unit",
      checked: false,
      brand: item.brand || "",
      src: "prep"
    });
    _addedToShop.add(item.id);

    // Update button UI
    const btn = g(`prep-shop-${item.id}`);
    if (btn) {
      btn.classList.add("prep-shop-added");
      btn.textContent = "✓ Added";
      btn.disabled = true;
    }
  }

  showNotif(`Added ${items.length} low item${items.length !== 1 ? "s" : ""} to Shopping List`);
}

/**
 * prepQtyStep(itemId, delta) — Adjusts the whole-number part of an item's qty by +1 or -1.
 * Updates the UI immediately for snappy feedback, then auto-saves to Firestore
 * after a 500ms debounce so rapid taps only produce one write.
 */
export function prepQtyStep(itemId, delta) {
  const item = state.inv.find(i => i.id === itemId);
  if (!item) return;

  const { whole, frac } = splitQty(item.qty);
  const newWhole = Math.max(0, Math.min(99, whole + delta));
  const combined = combineQty(newWhole, frac);

  // Don't go below minimum
  if (delta < 0 && item.qty <= 0.25) return;

  // Update in-memory state immediately for instant UI feedback
  item.qty = combined;

  // Update displayed qty
  const el = g(`prep-qty-${itemId}`);
  if (el) el.textContent = formatQty(combined);

  // Update low-stock highlight on the row
  const row = g(`prep-row-${itemId}`);
  if (row) {
    if (_isLowStock(item)) {
      row.classList.add("prep-item-low");
    } else {
      row.classList.remove("prep-item-low");
    }
  }

  // Track that a qty was changed (for summary toast) — count each item only once
  if (!_qtyCounted.has(itemId)) {
    _qtyUpdated++;
    _qtyCounted.add(itemId);
  }

  // Debounced save to Firestore — clears previous timer for this item
  if (_saveTimers.has(itemId)) clearTimeout(_saveTimers.get(itemId));
  _saveTimers.set(itemId, setTimeout(() => {
    svi({ ...item, qty: combined });
    _saveTimers.delete(itemId);
  }, 500));
}

/**
 * prepAddNewItem() — Dismisses Shopping Prep, switches to the Shopping tab,
 * and opens the standard add-item sheet. This avoids z-index stacking issues
 * on iOS Safari by not layering sheets on top of the prep overlay. The user
 * lands on the Shopping tab where the new item will live — cleaner UX.
 */
/**
 * prepRecategorize(itemId) — Opens the category picker for an item in the
 * Shopping Prep detail view. When the user picks a new category, updates the
 * item's prepCategory in Firestore and re-renders the current detail view
 * so the item moves to its new category.
 */
export function prepRecategorize(itemId) {
  const item = state.inv.find(i => i.id === itemId);
  if (!item) return;

  const currentCat = _categorizeItem(item);
  openCategoryPicker(currentCat, async (newCatKey) => {
    // Save the new category to the item
    await changeInvItemCategory(itemId, newCatKey);
    // Re-render the current detail view to reflect the move
    if (_currentCategory) {
      _renderDetail(_currentCategory);
    }
    const { name: catName } = getCategoryDisplay(newCatKey);
    showNotif(`Moved to ${catName}`);
  });
}

/**
 * prepCatLongPress(event, catKey) — Handles long-press / context menu on a
 * custom category card in the grid. Shows an inline action menu with
 * Rename, Add Sub-category, Delete, and Reorder options.
 */
export function prepCatLongPress(event, catKey) {
  event.preventDefault();
  event.stopPropagation();

  // Remove any existing action menu first
  const existing = document.getElementById("prep-cat-actions");
  if (existing) existing.remove();

  // Build the action menu
  const menu = document.createElement("div");
  menu.id = "prep-cat-actions";
  menu.className = "prep-cat-action-menu";
  menu.innerHTML = `
    <div class="prep-cat-action" onclick="prepCatRename('${catKey}')">✏️ Rename</div>
    <div class="prep-cat-action" onclick="prepCatAddSub('${catKey}')">📁 Add Sub-category</div>
    <div class="prep-cat-action" onclick="prepCatReorder('${catKey}',-1)">⬆️ Move Up</div>
    <div class="prep-cat-action" onclick="prepCatReorder('${catKey}',1)">⬇️ Move Down</div>
    <div class="prep-cat-action prep-cat-action-danger" onclick="prepCatDelete('${catKey}')">🗑 Delete</div>
  `;

  // Create backdrop to dismiss the menu
  const backdrop = document.createElement("div");
  backdrop.className = "prep-cat-action-backdrop";
  backdrop.onclick = () => { menu.remove(); backdrop.remove(); };

  document.body.appendChild(backdrop);
  document.body.appendChild(menu);

  // Position near the touch/click point
  const x = event.touches ? event.touches[0].clientX : event.clientX;
  const y = event.touches ? event.touches[0].clientY : event.clientY;
  menu.style.left = Math.min(x, window.innerWidth - 200) + "px";
  menu.style.top = Math.min(y, window.innerHeight - 250) + "px";
}

/**
 * prepCatRename(catKey) — Prompts user to rename a custom category.
 * Shows inline input fields for name and emoji.
 */
export function prepCatRename(catKey) {
  _dismissCatActionMenu();
  const customs = state.cfg.customPrepCategories || [];
  const cat = customs.find(c => c.key === catKey);
  if (!cat) return;

  const newName = prompt(`Rename "${cat.name}" to:`, cat.name);
  if (!newName || !newName.trim()) return;

  renameCustomCategory(catKey, newName.trim(), null);
  _renderGrid();
}

/**
 * prepCatAddSub(catKey) — Prompts user to add a sub-category under a parent category.
 */
export function prepCatAddSub(catKey) {
  _dismissCatActionMenu();
  const name = prompt("Sub-category name:");
  if (!name || !name.trim()) return;

  addSubCategory(catKey, name.trim(), DEFAULT_CUSTOM_EMOJI);
  _renderGrid();
}

/**
 * prepCatReorder(catKey, direction) — Moves a custom category up or down in the list.
 */
export async function prepCatReorder(catKey, direction) {
  _dismissCatActionMenu();
  await reorderCustomCategory(catKey, direction);
  _renderGrid();
}

/**
 * prepCatDelete(catKey) — Deletes a custom category after confirmation.
 */
export async function prepCatDelete(catKey) {
  _dismissCatActionMenu();
  await deleteCustomCategory(catKey);
  _renderGrid();
}

/**
 * _dismissCatActionMenu() — Removes the category action menu and its backdrop.
 */
function _dismissCatActionMenu() {
  const menu = document.getElementById("prep-cat-actions");
  const backdrop = document.querySelector(".prep-cat-action-backdrop");
  if (menu) menu.remove();
  if (backdrop) backdrop.remove();
}

/**
 * openPrepAddCategory() — Shows an inline form at the bottom of the grid
 * for creating a new custom category. Uses the same flow as the category picker.
 */
export function openPrepAddCategory() {
  const body = g("prep-body");
  if (!body) return;

  // Check if the add form already exists
  let form = document.getElementById("prep-add-cat-form");
  if (form) { form.scrollIntoView({ behavior: "smooth" }); return; }

  // Create the inline add form
  form = document.createElement("div");
  form.id = "prep-add-cat-form";
  form.className = "prep-add-cat-form";
  form.innerHTML = `
    <div class="cat-create-form" style="margin-top:12px">
      <div style="font-size:.82rem;font-weight:600;color:var(--tx);margin-bottom:8px">New Category</div>
      <div style="display:flex;gap:8px;align-items:center">
        <button class="emoji-trigger-btn" id="prepCatEmojiBtn" onclick="openPrepCatEmojiPicker(this)">📁</button>
        <input class="fi cat-create-input" id="prepCatNameInput" placeholder="Category name..." style="flex:1"/>
        <button class="btn bp bsm" onclick="confirmPrepAddCategory()">Add</button>
      </div>
    </div>
  `;

  body.appendChild(form);
  form.scrollIntoView({ behavior: "smooth" });
  setTimeout(() => { const inp = g("prepCatNameInput"); if (inp) inp.focus(); }, 150);
}

// Tracks the selected emoji for the prep add category form
let _prepCatEmoji = DEFAULT_CUSTOM_EMOJI;

/**
 * openPrepCatEmojiPicker(triggerEl) — Opens the emoji picker for the add category form.
 */
export function openPrepCatEmojiPicker(triggerEl) {
  openEmojiPicker(triggerEl, _prepCatEmoji, (emoji) => {
    _prepCatEmoji = emoji;
    const btn = g("prepCatEmojiBtn");
    if (btn) btn.textContent = emoji;
  });
}

/**
 * confirmPrepAddCategory() — Creates the new category and adds it to Firestore.
 * Re-renders the grid to show the new category immediately.
 */
export async function confirmPrepAddCategory() {
  const inp = g("prepCatNameInput");
  const name = inp ? inp.value.trim() : "";
  if (!name) { showNotif("Please enter a category name"); return; }

  // Generate a unique key from the name
  const key = "custom-" + name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "").slice(0, 40) + "-" + Date.now();
  const newCat = { key, name, emoji: _prepCatEmoji };

  // Add to the in-memory config and persist to Firestore
  const existing = state.cfg.customPrepCategories || [];
  state.cfg.customPrepCategories = [...existing, newCat];

  try {
    await dbSet(`households/${state.hid}/settings/config`, state.cfg);
    showNotif(`${_prepCatEmoji} ${name} category created!`);
    _prepCatEmoji = DEFAULT_CUSTOM_EMOJI; // Reset emoji for next time
    _renderGrid(); // Re-render to show the new category
  } catch (e) {
    console.error("Failed to save custom category:", e);
    showNotif("Failed to save category");
  }
}

export function prepAddNewItem() {
  // Close Shopping Prep without showing the summary toast — we're continuing
  // the workflow, not finishing it. Clear pending save timers and swipe-back.
  _saveTimers.forEach(timerId => clearTimeout(timerId));
  _saveTimers.clear();
  disableSwipeBack();
  hideOv("shoppingprep");

  // Switch to the Shopping tab so the add-item sheet renders in its normal context
  if (window.showScreen) window.showScreen("shopping");

  // Open the add-item sheet after a brief delay to let the tab transition settle
  setTimeout(() => {
    if (window.openShopAddSheet) window.openShopAddSheet();
  }, 150);
}
