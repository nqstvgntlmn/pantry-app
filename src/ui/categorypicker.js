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
import { dbSet } from '../db.js';
import { svi, svShopItem } from '../db.js';

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
// Small set of emojis users can pick from when creating custom categories.
export const CUSTOM_EMOJI_OPTIONS = ["📁", "🫙", "🌍", "🕌", "🍱", "🥘", "🧃", "🌿", "💊", "🐾"];

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
 */
export function getAllCategories() {
  const customs = getCustomCategories();
  if (!customs.length) return PREP_CATEGORIES;

  // Insert custom categories before "other" (which is always last)
  const result = PREP_CATEGORIES.filter(c => c.key !== "other");
  for (const cc of customs) {
    result.push({ key: cc.key, name: cc.name, emoji: cc.emoji, keywords: [], isCustom: true });
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

  // Inline create form (hidden by default)
  html += `<div id="catPickerCreateForm" style="display:none">
    <div class="cat-create-form">
      <div class="cat-create-emoji-row">
        ${CUSTOM_EMOJI_OPTIONS.map((e, i) =>
          `<button class="cat-emoji-btn${i === 0 ? " cat-emoji-selected" : ""}" onclick="pickCustomEmoji(this,'${e}')">${e}</button>`
        ).join("")}
      </div>
      <div style="display:flex;gap:8px;margin-top:8px">
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

// ── CREATE CUSTOM CATEGORY (inline in picker) ──────────────────────────────

// Tracks which emoji the user picked in the create form (default: first option)
let _createEmoji = CUSTOM_EMOJI_OPTIONS[0];

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
  _createEmoji = CUSTOM_EMOJI_OPTIONS[0];
}

/**
 * pickCustomEmoji(el, emoji) — Selects an emoji in the custom category create form.
 */
export function pickCustomEmoji(el, emoji) {
  _createEmoji = emoji;
  // Update visual selection
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
