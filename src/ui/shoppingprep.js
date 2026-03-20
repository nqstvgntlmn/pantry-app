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
import { svi } from '../db.js';
import { g, showNotif, showOv, hideOv, toTitleCase, formatQty, splitQty, combineQty } from '../helpers.js';
import { consolidateShopItem } from './shopping.js';
import { _defaultThreshold } from './home.js';
import { enableSwipeBack, disableSwipeBack } from './swipeback.js';

// ── PREP CATEGORY DEFINITIONS ──────────────────────────────────────────────
// Each category has a display name, emoji, and keyword lists for mapping
// inventory items to grocery store aisle categories.
const PREP_CATEGORIES = [
  {
    key: "produce",
    name: "Produce",
    emoji: "🥦",
    keywords: ["vegetable", "fruit", "fresh herb", "cucumber", "tomato", "lettuce",
      "onion", "garlic", "pepper", "carrot", "potato", "banana", "apple", "avocado",
      "broccoli", "spinach", "kale", "celery", "mushroom", "corn", "zucchini",
      "squash", "cabbage", "cauliflower", "sweet potato", "green bean", "asparagus",
      "berry", "blueberry", "strawberry", "raspberry", "grape", "orange", "lemon",
      "lime", "mango", "pineapple", "watermelon", "peach", "pear", "plum",
      "cilantro", "parsley", "basil", "mint", "dill", "ginger", "jalap",
      "scallion", "radish", "beet", "turnip", "eggplant", "artichoke"]
  },
  {
    key: "dairy",
    name: "Dairy, Eggs & Milk",
    emoji: "🥛",
    keywords: ["milk", "cheese", "butter", "yogurt", "cream", "egg", "dairy",
      "sour cream", "cottage cheese", "cream cheese", "half and half",
      "whipped cream", "ghee", "curd", "paneer", "mozzarella", "cheddar",
      "parmesan", "feta", "ricotta", "gouda", "brie", "provolone"]
  },
  {
    key: "meat",
    name: "Meat & Seafood",
    emoji: "🥩",
    keywords: ["chicken", "beef", "pork", "fish", "salmon", "tuna", "shrimp",
      "turkey", "lamb", "meat", "steak", "bacon", "sausage", "ground",
      "tilapia", "cod", "crab", "lobster", "scallop", "clam", "mussel",
      "prawn", "veal", "brisket", "ribs", "wing", "thigh", "breast",
      "drumstick", "ham", "pepperoni", "salami", "deli"]
  },
  {
    key: "bakery",
    name: "Bakery & Bread",
    emoji: "🧁",
    keywords: ["bread", "pita", "bagel", "tortilla", "muffin", "croissant",
      "roll", "loaf", "bun", "cake", "cookie", "donut", "pastry", "naan",
      "flatbread", "ciabatta", "sourdough", "brioche", "biscuit", "waffle",
      "pancake", "english muffin", "wrap"]
  },
  {
    key: "frozen",
    name: "Frozen",
    emoji: "🧊",
    keywords: ["frozen", "ice cream", "popsicle", "freezer"]
  },
  {
    key: "canned",
    name: "Canned & Dry Goods",
    emoji: "🥫",
    keywords: ["can", "canned", "beans", "lentils", "chickpeas", "soup",
      "broth", "stock", "tomato paste", "tomato sauce", "diced tomato",
      "tuna can", "sardine", "coconut milk", "evaporated milk",
      "condensed milk", "corn can", "peas can", "dried"]
  },
  {
    key: "snacks",
    name: "Snacks & Beverages",
    emoji: "🍿",
    keywords: ["chips", "crackers", "popcorn", "soda", "juice", "water",
      "energy drink", "gum", "candy", "snack", "pretzel", "granola bar",
      "protein bar", "trail mix", "nuts", "dried fruit", "chocolate",
      "cookie", "tea", "coffee", "sparkling", "kombucha", "sports drink",
      "seltzer", "lemonade"]
  },
  {
    key: "personal",
    name: "Personal Care",
    emoji: "🧴",
    keywords: ["shampoo", "conditioner", "lotion", "soap", "toothpaste",
      "deodorant", "vitamins", "vitamin", "supplement", "sunscreen",
      "razor", "body wash", "face wash", "moisturizer", "floss",
      "mouthwash", "band-aid", "bandage", "medicine", "aspirin",
      "ibuprofen", "cotton", "tissue", "q-tip"]
  },
  {
    key: "cleaning",
    name: "Cleaning & Household",
    emoji: "🧹",
    keywords: ["detergent", "bleach", "cleaner", "dish soap", "sponge",
      "trash bag", "paper towel", "toilet paper", "aluminum foil",
      "plastic wrap", "ziplock", "ziploc", "battery", "light bulb",
      "air freshener", "laundry", "fabric softener", "dryer sheet",
      "disinfectant", "wipes", "broom", "mop"]
  },
  {
    key: "grains",
    name: "Grains, Pasta & Rice",
    emoji: "🌾",
    keywords: ["rice", "pasta", "flour", "oats", "quinoa", "cereal", "grain",
      "noodle", "spaghetti", "penne", "macaroni", "couscous", "barley",
      "bulgur", "farro", "polenta", "cornmeal", "breadcrumb", "pancake mix",
      "oatmeal", "granola"]
  },
  {
    key: "condiments",
    name: "Condiments & Sauces",
    emoji: "🫙",
    keywords: ["ketchup", "mustard", "mayo", "mayonnaise", "hot sauce",
      "soy sauce", "olive oil", "vinegar", "sauce", "condiment", "dressing",
      "salsa", "bbq sauce", "barbecue", "teriyaki", "sriracha", "pesto",
      "hummus", "tahini", "honey", "jam", "jelly", "peanut butter",
      "almond butter", "nutella", "syrup", "marinade", "relish",
      "worcestershire", "fish sauce", "oyster sauce", "chili paste",
      "seasoning", "spice", "salt", "pepper", "cumin", "paprika",
      "cinnamon", "oregano", "thyme", "turmeric", "curry", "chili powder",
      "garlic powder", "onion powder", "baking soda", "baking powder",
      "vanilla", "sugar", "brown sugar", "powdered sugar"]
  },
  {
    key: "other",
    name: "Other",
    emoji: "🍳",
    keywords: [] // catch-all — items that don't match any other category
  }
];

// ── SESSION STATE ──────────────────────────────────────────────────────────
// Ephemeral state that lives only while Shopping Prep is open.
// Reset when the overlay is closed.
let _verified = new Set();       // item IDs physically verified during this audit
let _addedToShop = new Set();    // item IDs already added to shopping list this session
let _qtyUpdated = 0;             // count of items whose qty was changed this session
let _currentCategory = null;     // currently viewing category key, null = grid view
let _saveTimers = new Map();     // per-item debounce timers for qty auto-save (itemId → timerId)
let _qtyCounted = new Set();     // item IDs whose qty change has been counted for the summary

// ── CATEGORY MAPPING ───────────────────────────────────────────────────────

/**
 * _categorizeItem(item) — Maps a single inventory item to a prep category key.
 * Checks item location (Freezer → "frozen"), then matches scanTitle/name
 * against keyword lists. Falls back to "other" if no match.
 */
function _categorizeItem(item) {
  // Freezer location items always go to Frozen category regardless of name
  if (item.location === "freezer") return "frozen";

  // Build a search string from all relevant item fields
  const searchStr = [
    item.scanTitle || "",
    item.name || "",
    item.category || ""
  ].join(" ").toLowerCase();

  // Check each category's keywords (skip "other" which has no keywords)
  for (const cat of PREP_CATEGORIES) {
    if (cat.key === "other") continue;
    for (const kw of cat.keywords) {
      if (searchStr.includes(kw)) return cat.key;
    }
  }

  return "other";
}

/**
 * _groupByCategory() — Groups all inventory items into prep categories.
 * Returns a Map<categoryKey, item[]> with only non-empty categories.
 */
function _groupByCategory() {
  const groups = new Map();

  // Initialize all categories as empty arrays
  for (const cat of PREP_CATEGORIES) {
    groups.set(cat.key, []);
  }

  // Assign each inventory item to its category
  for (const item of state.inv) {
    const catKey = _categorizeItem(item);
    groups.get(catKey).push(item);
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
  _saveTimers.forEach(timerId => clearTimeout(timerId));
  _saveTimers.clear();

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

  let html = '<div class="prep-grid">';

  for (const cat of PREP_CATEGORIES) {
    const items = groups.get(cat.key) || [];
    // Count items that are at or below restock threshold
    const lowCount = items.filter(i => _isLowStock(i)).length;

    // Show card even if empty (with 0 count) for complete category coverage
    html += `<div class="prep-cat-card${lowCount > 0 ? " prep-cat-low" : ""}" onclick="openPrepCategory('${cat.key}')">
      <div class="prep-emoji">${cat.emoji}</div>
      <div class="prep-cat-name">${cat.name}</div>
      <div class="prep-cat-count">${items.length} item${items.length !== 1 ? "s" : ""}</div>
      ${lowCount > 0 ? `<div class="prep-low-badge">${lowCount} low</div>` : ""}
    </div>`;
  }

  html += "</div>";
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

  const cat = PREP_CATEGORIES.find(c => c.key === categoryKey);
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
        <div class="prep-item-meta">Updated ${_timeAgo(item.addedAt)}</div>
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
 * prepAddToShop(itemId) — Adds a single inventory item to the shopping list.
 * Uses consolidateShopItem for dedup/qty-merge. Updates the button to show "✓ Added".
 */
export async function prepAddToShop(itemId) {
  // Prevent double-add
  if (_addedToShop.has(itemId)) return;

  const item = state.inv.find(i => i.id === itemId);
  if (!item) return;

  // Add to shopping list via the consolidation-aware function
  await consolidateShopItem({
    id: "shop-" + Date.now() + "-" + Math.random().toString(36).slice(2),
    name: item.name,
    qty: 1,
    unit: item.unit || "Unit",
    checked: false,
    brand: item.brand || "",
    src: "prep"
  });

  _addedToShop.add(itemId);

  // Update the button to show "✓ Added" state
  const btn = g(`prep-shop-${itemId}`);
  if (btn) {
    btn.classList.add("prep-shop-added");
    btn.textContent = "✓ Added";
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
 * prepAddNewItem() — Opens the standard add-item sheet pre-set to Shopping list.
 * Elevates the sheet's z-index above the Shopping Prep overlay so it renders
 * in the foreground even on iOS Safari (where fixed-inside-fixed stacking
 * contexts can cause layering issues).
 */
export function prepAddNewItem() {
  // Elevate the add-item sheet and backdrop above the Shopping Prep overlay
  // (z-index 100) so the sheet always appears on top regardless of DOM nesting.
  const backdrop = g("shopAddBackdrop");
  const sheet = g("shopAddSheet");
  if (backdrop) backdrop.style.zIndex = "250";
  if (sheet) sheet.style.zIndex = "260";

  // Use the existing add-to-shopping sheet
  if (window.openShopAddSheet) {
    window.openShopAddSheet();
  }

  // Restore default z-index when the sheet closes so it doesn't interfere
  // with normal (non-prep) usage. Listen for the sheet losing .active class.
  const observer = new MutationObserver(() => {
    if (sheet && !sheet.classList.contains("active")) {
      if (backdrop) backdrop.style.zIndex = "";
      if (sheet) sheet.style.zIndex = "";
      observer.disconnect();
    }
  });
  if (sheet) observer.observe(sheet, { attributes: true, attributeFilter: ["class"] });
}
