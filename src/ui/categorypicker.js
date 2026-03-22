// ── CATEGORY PICKER MODULE ─────────────────────────────────────────────────
// Shared category assignment and picker component used across all add surfaces
// (Shopping add, Supplies add, Home universal add, barcode scan, Shopping Prep).
//
// Responsibilities:
//   1. Define the canonical PREP_CATEGORIES list (single source of truth)
//   2. Auto-detect a category for any item using OFF data + keyword matching
//   3. Render a compact tappable category badge pill on add sheets and detail views
//   4. Open a bottom-sheet category picker for manual override
//   5. CRUD for custom household categories (stored in state.cfg.customPrepCategories)
//
// The prepCategory field on each item document is the user's explicit choice.
// Shopping Prep reads prepCategory first, falling back to auto-detection only
// when no stored category exists.

import { state } from '../state.js';
import { g, showNotif, mapOffCategory } from '../helpers.js';
import { dbSet, svi, svShopItem } from '../db.js';

// ── PREP CATEGORY DEFINITIONS ──────────────────────────────────────────────
// Each category has a display name, emoji, and keyword lists for mapping
// inventory items to grocery store aisle categories.
// Moved here from shoppingprep.js so all modules share a single source of truth.
export const PREP_CATEGORIES = [
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
    key: "personal",
    name: "Personal Care",
    emoji: "🧴",
    // Checked BEFORE meat/seafood to prevent false positives — personal care
    // product names should never fall through to food categories
    keywords: ["shampoo", "conditioner", "lotion", "soap", "toothpaste",
      "deodorant", "vitamins", "vitamin", "supplement", "sunscreen",
      "razor", "body wash", "face wash", "moisturizer", "floss",
      "mouthwash", "band-aid", "bandage", "medicine", "aspirin",
      "ibuprofen", "cotton", "tissue", "q-tip", "cleanser",
      "hair", "skin care", "personal care"]
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
    key: "pantry",
    name: "Pantry Staples",
    emoji: "🏺",
    // Catch-all for pantry-stored items not covered by other categories
    keywords: ["pantry", "shelf stable", "canned good", "dry good", "staple",
      "baking mix", "cooking oil", "shortening", "cornstarch", "gelatin",
      "yeast", "cocoa", "chocolate chip", "powdered milk", "evaporated",
      "instant", "bouillon", "broth cube", "stock cube"]
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
      "vanilla", "sugar", "brown sugar", "powdered sugar",
      // Pickled/preserved items and herbs that were previously falling through to "other"
      "olive", "olives", "black olive", "green olive", "caper", "capers",
      "pickle", "pickles", "gherkin", "preserve", "marmalade",
      "herb", "rosemary", "sage", "bay leaf", "tarragon", "chive"]
  },
  {
    key: "other",
    name: "Other",
    emoji: "🍳",
    keywords: [] // catch-all — items that don't match any other category
  }
];

// ── CURATED EMOJI SET FOR CUSTOM CATEGORIES ─────────────────────────────────
// Organized emoji groups for the emoji picker popup. Each group has a label
// and a list of relevant food/household emojis displayed in a scrollable grid.
export const EMOJI_GROUPS = [
  { label: "Produce",              emojis: ["🥦","🥕","🧅","🧄","🥔","🍅","🥑","🌽","🥒","🫑","🥬","🥗","🍎","🍊","🍋","🍇","🍓","🫐","🍌","🍑","🥭","🍍"] },
  { label: "Dairy & Eggs",         emojis: ["🥛","🧀","🥚","🧈","🍦","🫙"] },
  { label: "Meat & Seafood",       emojis: ["🥩","🍗","🥓","🌭","🍖","🐟","🦐","🦞","🦀","🦑"] },
  { label: "Bakery & Grains",      emojis: ["🍞","🥐","🥖","🫓","🥨","🧁","🎂","🍰","🌾","🍝","🍜","🍚","🍛"] },
  { label: "Beverages",            emojis: ["🥤","🧃","☕","🍵","🧋","🍺","🍷","🥂","💧","🫖"] },
  { label: "Condiments & Sauces",  emojis: ["🫙","🧂","🫒","🌶️","🍯","🥫"] },
  { label: "Snacks",               emojis: ["🍿","🍪","🍩","🍫","🍬","🍭","🥜","🌰","🥨","🍡"] },
  { label: "Frozen",               emojis: ["🧊","🍦","🧇","🥞"] },
  { label: "Personal Care",        emojis: ["🧴","🧼","🪥","💊","💉","🩹","🧻","🪒"] },
  { label: "Cleaning & Household", emojis: ["🧹","🧺","🧽","🪣","🗑️","🧯","🔧","🏠"] },
  { label: "Cultural & Custom",    emojis: ["🌍","🕌","✡️","🍱","🥘","🫕","🌿","🎋","🏮","📁"] }
];

// Flat list of all emojis (for backwards-compat and simple lookups)
export const CUSTOM_EMOJI_OPTIONS = EMOJI_GROUPS.flatMap(grp => grp.emojis);

// Default emoji for new custom categories
export const DEFAULT_CUSTOM_EMOJI = "📁";

// ── INTERNAL STATE ──────────────────────────────────────────────────────────
// Tracks the active picker session so the selection callback knows where to apply.
let _pickerCallback = null; // function(catKey) called when user picks a category
let _pickerCurrentKey = null; // currently selected category key (for highlight)

// ── AUTO-CATEGORIZE ─────────────────────────────────────────────────────────

/**
 * autoCategorize(item) — Determines the best prep category for an item.
 * Uses a hybrid resolution order for maximum accuracy:
 *   1. Open Food Facts category (offCategory) → mapOffCategory() — most accurate
 *   2. Item location (Freezer → "frozen") — physical location override
 *   3. Keyword matching on item name/scanTitle — fallback heuristic
 *   4. "other" — catch-all when nothing matches
 *
 * Does NOT check item.prepCategory — that's the caller's job.
 * This function only does auto-detection from item data.
 */
export function autoCategorize(item) {
  // 1. Try Open Food Facts category first — most accurate source because OFF
  //    has human-curated taxonomy (e.g. "Olives" correctly maps to Condiments)
  if (item.offCategory) {
    const offMatch = mapOffCategory(item.offCategory);
    if (offMatch) return offMatch;
  }

  // 2. Freezer location items always go to Frozen category regardless of name
  if (item.location === "freezer") return "frozen";

  // 3. Fall back to keyword matching on item name, scanTitle, and category fields
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
 * autoCategorizeByName(name) — Quick category detection from just a product name.
 * Used on add sheets where we only have a name string (no full item object).
 */
export function autoCategorizeByName(name) {
  if (!name) return "other";
  return autoCategorize({ name, scanTitle: "", category: "", offCategory: "" });
}

// ── CATEGORY LOOKUP HELPERS ─────────────────────────────────────────────────

/**
 * getCustomCategories() — Returns the array of custom household categories
 * from the current config. Each entry: { key, name, emoji }.
 */
export function getCustomCategories() {
  return state.cfg.customPrepCategories || [];
}

/**
 * getAllCategories() — Returns all default + custom categories merged.
 * Custom categories are appended after default ones (before "other").
 * Includes sub-categories flattened under their parents for complete coverage.
 */
export function getAllCategories() {
  const customs = getCustomCategories();
  if (!customs.length) return PREP_CATEGORIES;

  // Insert custom categories (and their sub-categories) before "other" (which is always last)
  const result = PREP_CATEGORIES.filter(c => c.key !== "other");
  for (const cc of customs) {
    result.push({ key: cc.key, name: cc.name, emoji: cc.emoji, keywords: [], isCustom: true });
    // Flatten sub-categories so they're recognized as valid category keys
    if (cc.children && cc.children.length > 0) {
      for (const sub of cc.children) {
        result.push({ key: sub.key, name: sub.name, emoji: sub.emoji, keywords: [], isCustom: true, isSubCategory: true, parentKey: cc.key });
      }
    }
  }
  result.push(PREP_CATEGORIES.find(c => c.key === "other"));
  return result;
}

/**
 * getCategoryDisplay(catKey) — Returns { name, emoji } for any category key
 * (default or custom). Falls back to Other if key is unknown.
 */
export function getCategoryDisplay(catKey) {
  if (!catKey) return { name: "Other", emoji: "🍳" };

  // Check default categories
  const def = PREP_CATEGORIES.find(c => c.key === catKey);
  if (def) return { name: def.name, emoji: def.emoji };

  // Check custom categories
  const custom = getCustomCategories().find(c => c.key === catKey);
  if (custom) return { name: custom.name, emoji: custom.emoji };

  return { name: "Other", emoji: "🍳" };
}

// ── CATEGORY BADGE ──────────────────────────────────────────────────────────

/**
 * renderCategoryBadge(catKey, onclickAttr) — Returns HTML for a compact
 * tappable category pill badge: "🥫 Canned & Dry Goods ▼".
 * The onclickAttr should be a valid onclick handler string.
 */
export function renderCategoryBadge(catKey, onclickAttr) {
  const { name, emoji } = getCategoryDisplay(catKey);
  return `<div class="cat-badge" onclick="${onclickAttr}">${emoji} ${name} ▼</div>`;
}

// ── CATEGORY PICKER SHEET ───────────────────────────────────────────────────

/**
 * openCategoryPicker(currentCatKey, callback) — Opens the category picker
 * bottom sheet. Shows all default categories + custom household categories.
 * Calls callback(selectedCatKey) when the user picks one.
 *
 * @param {string} currentCatKey — Currently selected category (highlighted in gold)
 * @param {function} callback — Called with the selected category key
 */
export function openCategoryPicker(currentCatKey, callback) {
  _pickerCallback = callback;
  _pickerCurrentKey = currentCatKey;

  const backdrop = g("catPickerBackdrop");
  const sheet = g("catPickerSheet");
  if (!backdrop || !sheet) return;

  // Build the picker content
  _renderPickerContent();

  // Show the sheet
  backdrop.classList.add("active");
  sheet.classList.add("active");
}

/**
 * closeCategoryPicker() — Dismisses the category picker bottom sheet.
 */
export function closeCategoryPicker() {
  const backdrop = g("catPickerBackdrop");
  const sheet = g("catPickerSheet");
  if (backdrop) backdrop.classList.remove("active");
  if (sheet) sheet.classList.remove("active");
  _pickerCallback = null;
  _pickerCurrentKey = null;
}

/**
 * _renderPickerContent() — Builds the inner HTML for the category picker sheet.
 * Shows default categories, then custom categories (with divider), then create button.
 */
function _renderPickerContent() {
  const body = g("catPickerBody");
  if (!body) return;

  const customs = getCustomCategories();
  let html = "";

  // Default categories
  for (const cat of PREP_CATEGORIES) {
    const selected = cat.key === _pickerCurrentKey;
    html += `<div class="cat-picker-item${selected ? " cat-picker-selected" : ""}" onclick="selectCategory('${cat.key}')">
      <span class="cat-picker-emoji">${cat.emoji}</span>
      <span class="cat-picker-name">${cat.name}</span>
      ${selected ? '<span class="cat-picker-check">✓</span>' : ""}
    </div>`;
  }

  // Custom categories section (if any exist)
  if (customs.length > 0) {
    html += `<div class="cat-picker-divider">Custom</div>`;
    for (const cc of customs) {
      const selected = cc.key === _pickerCurrentKey;
      html += `<div class="cat-picker-item${selected ? " cat-picker-selected" : ""}" onclick="selectCategory('${cc.key}')">
        <span class="cat-picker-emoji">${cc.emoji}</span>
        <span class="cat-picker-name">${cc.name}</span>
        ${selected ? '<span class="cat-picker-check">✓</span>' : ""}
      </div>`;
    }
  }

  // Create custom category button
  html += `<div id="catPickerCreateSection">
    <button class="cat-picker-create" onclick="showCreateCustomCategory()">＋ Create custom category</button>
  </div>`;

  // Inline create form (hidden by default) — emoji trigger opens the full picker popup
  html += `<div id="catPickerCreateForm" style="display:none">
    <div class="cat-create-form">
      <div style="display:flex;gap:8px;align-items:center">
        <button class="emoji-trigger-btn" id="catCreateEmojiBtn" onclick="openCatCreateEmojiPicker(this)">${DEFAULT_CUSTOM_EMOJI}</button>
        <input class="fi cat-create-input" id="catCreateName" placeholder="Category name..." style="flex:1"/>
        <button class="btn bp bsm" onclick="confirmCreateCustomCategory()">Add</button>
      </div>
    </div>
  </div>`;

  body.innerHTML = html;
}

/**
 * selectCategory(catKey) — Called when user taps a category in the picker.
 * Invokes the stored callback and closes the picker.
 */
export function selectCategory(catKey) {
  if (_pickerCallback) _pickerCallback(catKey);
  closeCategoryPicker();
}

// ── EMOJI PICKER POPUP ──────────────────────────────────────────────────────
// Floating popup grid of food/household emojis organized by labeled groups.
// Replaces the old inline emoji button row with a richer, scrollable picker.

// Tracks the callback and the currently selected emoji for the open picker
let _emojiPickerCallback = null;
let _emojiPickerSelected = null;

/**
 * openEmojiPicker(triggerEl, currentEmoji, callback) — Shows the emoji picker
 * popup positioned above/near the trigger element.
 *
 * @param {HTMLElement} triggerEl — the emoji button that was tapped (for positioning)
 * @param {string} currentEmoji — currently selected emoji (highlighted with gold border)
 * @param {function} callback — called with the selected emoji string when user picks one
 */
export function openEmojiPicker(triggerEl, currentEmoji, callback) {
  // Remove any existing picker before setting new state (closeEmojiPicker clears state)
  closeEmojiPicker();

  _emojiPickerCallback = callback;
  _emojiPickerSelected = currentEmoji || DEFAULT_CUSTOM_EMOJI;

  // Build the popup HTML with grouped emoji sections
  const popup = document.createElement("div");
  popup.id = "emojiPickerPopup";
  popup.className = "emoji-picker-popup";

  let gridHtml = "";
  for (const group of EMOJI_GROUPS) {
    // Section header label for each emoji group
    gridHtml += `<div class="emoji-picker-group-label">${group.label}</div>`;
    gridHtml += `<div class="emoji-picker-grid">`;
    for (const em of group.emojis) {
      const selected = em === _emojiPickerSelected ? " emoji-picker-selected" : "";
      // Each emoji cell: 44px tap target for mobile usability
      gridHtml += `<button class="emoji-picker-cell${selected}" onclick="selectEmojiFromPicker('${em}')">${em}</button>`;
    }
    gridHtml += `</div>`;
  }

  popup.innerHTML = gridHtml;

  // Create backdrop to handle tap-outside-to-close
  const backdrop = document.createElement("div");
  backdrop.id = "emojiPickerBackdrop";
  backdrop.className = "emoji-picker-backdrop";
  backdrop.onclick = () => closeEmojiPicker();

  document.body.appendChild(backdrop);
  document.body.appendChild(popup);

  // Position the popup near the trigger element (centered above it)
  _positionEmojiPicker(popup, triggerEl);

  // Animate in after a frame so the transition plays
  requestAnimationFrame(() => {
    backdrop.classList.add("active");
    popup.classList.add("active");
  });
}

/**
 * _positionEmojiPicker(popup, triggerEl) — Centers the popup horizontally on
 * screen and positions it above the trigger button (or below if not enough room).
 */
function _positionEmojiPicker(popup, triggerEl) {
  if (!triggerEl) return;

  const rect = triggerEl.getBoundingClientRect();
  const vw = window.innerWidth;
  const popupWidth = Math.min(vw - 24, 360); // max 360px, 12px margin each side

  // Center horizontally
  popup.style.width = popupWidth + "px";
  popup.style.left = Math.max(12, (vw - popupWidth) / 2) + "px";

  // Position above trigger by default; if too close to top, show below
  const popupMaxHeight = 340;
  if (rect.top > popupMaxHeight + 16) {
    // Enough room above — anchor to bottom of popup above the trigger
    popup.style.bottom = (window.innerHeight - rect.top + 8) + "px";
    popup.style.top = "auto";
  } else {
    // Not enough room above — show below trigger
    popup.style.top = (rect.bottom + 8) + "px";
    popup.style.bottom = "auto";
  }
}

/**
 * selectEmojiFromPicker(emoji) — Called when user taps an emoji in the picker.
 * Invokes the stored callback with the chosen emoji and closes the popup.
 */
export function selectEmojiFromPicker(emoji) {
  if (_emojiPickerCallback) _emojiPickerCallback(emoji);
  closeEmojiPicker();
}

/**
 * closeEmojiPicker() — Removes the emoji picker popup and backdrop from the DOM.
 */
export function closeEmojiPicker() {
  const popup = document.getElementById("emojiPickerPopup");
  const backdrop = document.getElementById("emojiPickerBackdrop");
  if (popup) popup.remove();
  if (backdrop) backdrop.remove();
  _emojiPickerCallback = null;
  _emojiPickerSelected = null;
}

// ── CREATE CUSTOM CATEGORY (inline in picker) ──────────────────────────────

// Tracks which emoji the user picked in the create form (default: 📁)
let _createEmoji = DEFAULT_CUSTOM_EMOJI;

/**
 * showCreateCustomCategory() — Reveals the inline create form inside the picker.
 */
export function showCreateCustomCategory() {
  const btn = g("catPickerCreateSection");
  const form = g("catPickerCreateForm");
  if (btn) btn.style.display = "none";
  if (form) form.style.display = "block";
  // Focus the name input
  setTimeout(() => { const inp = g("catCreateName"); if (inp) inp.focus(); }, 100);
  _createEmoji = DEFAULT_CUSTOM_EMOJI;
}

/**
 * openCatCreateEmojiPicker(triggerEl) — Opens the emoji picker popup for the
 * inline create form in the category picker sheet.
 */
export function openCatCreateEmojiPicker(triggerEl) {
  openEmojiPicker(triggerEl, _createEmoji, (emoji) => {
    _createEmoji = emoji;
    // Update the trigger button to show the selected emoji
    const btn = g("catCreateEmojiBtn");
    if (btn) btn.textContent = emoji;
  });
}

/**
 * pickCustomEmoji(el, emoji) — Legacy: selects an emoji in the custom category create form.
 * Kept for backwards compatibility; new code uses openCatCreateEmojiPicker().
 */
export function pickCustomEmoji(el, emoji) {
  _createEmoji = emoji;
  // Update visual selection on old-style inline buttons
  document.querySelectorAll(".cat-emoji-btn").forEach(b => b.classList.remove("cat-emoji-selected"));
  if (el) el.classList.add("cat-emoji-selected");
}

/**
 * confirmCreateCustomCategory() — Saves the new custom category to Firestore
 * and adds it to the picker immediately.
 */
export async function confirmCreateCustomCategory() {
  const inp = g("catCreateName");
  const name = inp ? inp.value.trim() : "";
  if (!name) { showNotif("Please enter a category name"); return; }

  // Generate a unique key from the name
  const key = "custom-" + name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "").slice(0, 40) + "-" + Date.now();

  // Build the new category entry
  const newCat = { key, name, emoji: _createEmoji };

  // Add to the in-memory config and persist to Firestore
  const existing = state.cfg.customPrepCategories || [];
  state.cfg.customPrepCategories = [...existing, newCat];

  try {
    await dbSet(`households/${state.hid}/settings/config`, state.cfg);
    showNotif(`${_createEmoji} ${name} category created!`);
  } catch (e) {
    console.error("Failed to save custom category:", e);
    showNotif("Failed to save category");
    return;
  }

  // If picker is open, select the new category immediately
  if (_pickerCallback) {
    _pickerCallback(key);
    closeCategoryPicker();
  }
}

// ── CUSTOM CATEGORY MANAGEMENT (from Settings) ─────────────────────────────

/**
 * deleteCustomCategory(key) — Removes a custom category from the household config.
 * Items with this category will fall back to "other" in Shopping Prep
 * (their prepCategory field becomes orphaned and _categorizeItem handles the fallback).
 */
export async function deleteCustomCategory(key) {
  const existing = state.cfg.customPrepCategories || [];
  const cat = existing.find(c => c.key === key);
  if (!cat) return;

  if (!confirm(`Delete "${cat.name}" category? Items will move to Other.`)) return;

  // Remove from config
  state.cfg.customPrepCategories = existing.filter(c => c.key !== key);

  // Move any inventory items with this prepCategory to "other"
  for (const item of state.inv) {
    if (item.prepCategory === key) {
      item.prepCategory = "other";
      svi(item);
    }
  }
  // Move any shopping items with this prepCategory to "other"
  for (const item of state.shop) {
    if (item.prepCategory === key) {
      item.prepCategory = "other";
      svShopItem(item);
    }
  }

  try {
    await dbSet(`households/${state.hid}/settings/config`, state.cfg);
    showNotif(`"${cat.name}" category deleted`);
  } catch (e) {
    console.error("Failed to delete custom category:", e);
    showNotif("Failed to delete category");
  }
}

/**
 * renameCustomCategory(key, newName, newEmoji) — Updates name/emoji of a custom category.
 */
export async function renameCustomCategory(key, newName, newEmoji) {
  const existing = state.cfg.customPrepCategories || [];
  const cat = existing.find(c => c.key === key);
  if (!cat) return;

  if (newName) cat.name = newName;
  if (newEmoji) cat.emoji = newEmoji;

  try {
    await dbSet(`households/${state.hid}/settings/config`, state.cfg);
    showNotif("Category updated");
  } catch (e) {
    console.error("Failed to rename custom category:", e);
  }
}

// ── ITEM CATEGORY CHANGE HELPERS ────────────────────────────────────────────
// Used from detail sheets and Shopping Prep to recategorize items.

/**
 * changeShopItemCategory(id, catKey) — Updates the prepCategory on a shopping item.
 * Saves to Firestore and re-renders.
 */
export async function changeShopItemCategory(id, catKey) {
  const item = state.shop.find(i => i.id === id);
  if (!item) return;
  await svShopItem({ ...item, prepCategory: catKey });
}

/**
 * changeInvItemCategory(id, catKey) — Updates the prepCategory on an inventory item.
 * Saves to Firestore and re-renders.
 */
export async function changeInvItemCategory(id, catKey) {
  const item = state.inv.find(i => i.id === id);
  if (!item) return;
  await svi({ ...item, prepCategory: catKey });
}

// ── SUBCATEGORY SUPPORT ────────────────────────────────────────────────────
// Custom categories can have one level of sub-categories nested under them.
// Sub-categories are stored as a children[] array on the parent custom category.
// Example: { key: "custom-...", name: "Asian", emoji: "🍱", children: [{ key: "custom-...-sub-...", name: "Sauces", emoji: "🫙" }] }

/**
 * addSubCategory(parentKey, name, emoji) — Adds a sub-category under a parent custom category.
 * Sub-categories share the same Firestore location as their parent (nested in customPrepCategories).
 */
export async function addSubCategory(parentKey, name, emoji) {
  const existing = state.cfg.customPrepCategories || [];
  const parent = existing.find(c => c.key === parentKey);
  if (!parent) { showNotif("Parent category not found"); return; }

  // Generate a unique key for the sub-category
  const subKey = parentKey + "-sub-" + Date.now();
  const subCat = { key: subKey, name, emoji: emoji || DEFAULT_CUSTOM_EMOJI };

  // Initialize children array if needed, then add the sub-category
  if (!parent.children) parent.children = [];
  parent.children.push(subCat);

  try {
    await dbSet(`households/${state.hid}/settings/config`, state.cfg);
    showNotif(`Sub-category "${name}" added`);
  } catch (e) {
    console.error("Failed to add sub-category:", e);
    showNotif("Failed to add sub-category");
  }
}

/**
 * reorderCustomCategory(key, direction) — Moves a custom category up or down in the list.
 * direction: -1 for up, +1 for down. Persists the new order to Firestore.
 */
export async function reorderCustomCategory(key, direction) {
  const cats = state.cfg.customPrepCategories || [];
  const idx = cats.findIndex(c => c.key === key);
  if (idx < 0) return;

  const newIdx = idx + direction;
  // Bounds check — can't move before first or after last
  if (newIdx < 0 || newIdx >= cats.length) return;

  // Swap positions
  [cats[idx], cats[newIdx]] = [cats[newIdx], cats[idx]];

  try {
    await dbSet(`households/${state.hid}/settings/config`, state.cfg);
    showNotif("Category reordered");
  } catch (e) {
    console.error("Failed to reorder category:", e);
  }
}

/**
 * getAllCategories() variant that includes sub-categories flattened for display.
 * Returns all categories including nested sub-categories with a parentKey field.
 */
export function getAllCategoriesFlat() {
  const customs = getCustomCategories();
  const result = PREP_CATEGORIES.filter(c => c.key !== "other");

  for (const cc of customs) {
    result.push({ key: cc.key, name: cc.name, emoji: cc.emoji, keywords: [], isCustom: true });
    // Flatten sub-categories under their parent
    if (cc.children && cc.children.length > 0) {
      for (const sub of cc.children) {
        result.push({ key: sub.key, name: sub.name, emoji: sub.emoji, keywords: [], isCustom: true, isSubCategory: true, parentKey: cc.key });
      }
    }
  }

  result.push(PREP_CATEGORIES.find(c => c.key === "other"));
  return result;
}

// ── PRODUCT CATEGORY MEMORY ─────────────────────────────────────────────────
// When a user confirms a category for a product name, save it to Firestore
// under productPreferences/{normalizedName} so future additions auto-categorize.

/**
 * saveProductCategory(productName, catKey) — Permanently stores a category preference
 * for a product name. Future additions of this product auto-get this category.
 */
export async function saveProductCategory(productName, catKey) {
  if (!productName || !catKey || !state.hid) return;
  const normalized = productName.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  if (!normalized) return;

  try {
    await dbSet(`households/${state.hid}/productPreferences/${normalized}`, {
      prepCategory: catKey,
      updatedAt: new Date().toISOString()
    });
  } catch (e) {
    console.error("Failed to save product category preference:", e);
  }
}

/**
 * getProductCategory(productName) — Looks up a previously saved category preference
 * for a product name. Returns the catKey if found, null otherwise.
 * Checks in-memory first (productPreferences loaded during boot), then falls back.
 */
export function getProductCategory(productName) {
  if (!productName) return null;
  const normalized = productName.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

  // Check state.productPrefs if it's been loaded (populated by db.js during loadFirestoreData)
  if (state.productPrefs && state.productPrefs[normalized]) {
    return state.productPrefs[normalized].prepCategory || null;
  }
  return null;
}

// ── UNCATEGORIZED ITEMS TRACKING ──────────────────────────────────────────────
// Tracks items that were auto-categorized but not yet confirmed by the user.
// Items are "pending review" if they have no prepCategory AND no saved product preference.

/**
 * getUncategorizedItems() — Returns inventory items that need category confirmation.
 * An item needs review if: no explicit prepCategory AND no saved product preference.
 */
export function getUncategorizedItems() {
  return state.inv.filter(item => {
    // If user already explicitly set a category, it's confirmed
    if (item.prepCategory) return false;
    // If there's a saved preference for this product name, it's confirmed
    if (getProductCategory(item.name)) return false;
    // Otherwise, needs review
    return true;
  });
}

/**
 * confirmItemCategory(itemId, catKey) — Confirms an auto-suggested category for an item.
 * Saves the category to the item AND as a permanent product preference.
 */
export async function confirmItemCategory(itemId, catKey) {
  const item = state.inv.find(i => i.id === itemId);
  if (!item) return;

  // Save category on the item itself
  await svi({ ...item, prepCategory: catKey });

  // Save as a permanent product preference for future additions
  await saveProductCategory(item.name, catKey);
}
