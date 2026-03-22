// ── SHARED UI HELPERS ────────────────────────────────────────────────────────
// Small utility functions used across multiple UI modules in the pantry app.
// These cover DOM access, date math, item categorization, display formatting,
// overlay management, and store-aisle guessing.

import { state } from './state.js';

// ── FRACTION / QUANTITY UTILITIES ─────────────────────────────────────────────
// Quantities are stored as decimals in Firestore (e.g. 5.5, 0.25) but displayed
// as mixed fractions in the UI (e.g. "5 1/2", "1/4"). These helpers convert
// between the two representations and render the fraction picker controls.

/** Map of supported fraction decimals → display labels */
const FRAC_MAP = { 0: "·/·", 0.25: "1/4", [1/3]: "1/3", 0.5: "1/2", [2/3]: "2/3", 0.75: "3/4" };

/** Fraction options for <select> dropdowns — value is the decimal stored in Firestore.
 *  The "none" option shows "·/·" placeholder when no fraction is selected. */
export const FRAC_OPTIONS = [
  { value: 0,    label: "·/·" },
  { value: 0.25, label: "¼" },
  { value: 1/3,  label: "⅓" },
  { value: 0.5,  label: "½" },
  { value: 2/3,  label: "⅔" },
  { value: 0.75, label: "¾" }
];

/**
 * splitQty(decimal) — Splits a decimal quantity into whole and fraction parts.
 * Snaps the fractional remainder to the nearest supported fraction value.
 * @param {number} qty - Decimal quantity (e.g. 5.5, 0.25, 3)
 * @returns {{ whole: number, frac: number }} e.g. { whole: 5, frac: 0.5 }
 */
export function splitQty(qty) {
  const n = Number(qty) || 0;
  const whole = Math.floor(n);
  const remainder = n - whole;
  // Snap to the nearest supported fraction by finding the closest match
  const snapped = FRAC_OPTIONS.reduce((best, opt) =>
    Math.abs(opt.value - remainder) < Math.abs(best - remainder) ? opt.value : best
  , 0);
  return { whole, frac: snapped };
}

/**
 * combineQty(whole, frac) — Combines whole + fraction into a single decimal.
 * Enforces minimum of 0.25 (cannot have 0 whole + no fraction).
 * @param {number} whole - Whole number part (0–99)
 * @param {number} frac - Fraction part as decimal (0, 0.25, 0.333..., 0.5, 0.666..., 0.75)
 * @returns {number} Combined decimal, minimum 0.25
 */
export function combineQty(whole, frac) {
  const w = Math.max(0, Math.min(99, Math.floor(Number(whole) || 0)));
  const f = Number(frac) || 0;
  const total = w + f;
  // Enforce minimum: if whole is 0 and no fraction, bump to smallest fraction
  return total <= 0 ? 0.25 : total;
}

/**
 * formatQty(qty) — Formats a decimal quantity as a display string with fractions.
 * Rules:
 *   - 0.5  → "1/2"       (no leading zero)
 *   - 5    → "5"          (no fraction shown)
 *   - 5.5  → "5 1/2"     (mixed number)
 *   - 0.25 → "1/4"
 * @param {number} qty - Decimal quantity from Firestore
 * @returns {string} Human-readable fraction string
 */
export function formatQty(qty) {
  const { whole, frac } = splitQty(qty);
  // Look up the Unicode fraction glyph for the fractional part
  const fracLabel = frac > 0 ? (FRAC_OPTIONS.find(o => Math.abs(o.value - frac) < 0.01) || {}).label : "";
  if (whole === 0 && fracLabel) return fracLabel;       // e.g. "½"
  if (whole > 0 && fracLabel) return `${whole} ${fracLabel}`; // e.g. "5 ½"
  return `${whole || 1}`;                                // integer only, minimum display "1"
}

// ── UNIT PLURALIZATION ────────────────────────────────────────────────────────
// Automatically pluralizes unit names when quantity > 1 (whole number part).
// Fraction-only quantities (e.g. ½, ¼) stay singular. Mixed numbers like "2 ½"
// use plural because the whole part > 1. Some units never change (Oz, Dozen).

/** Lookup table mapping singular unit names (lowercase) to their plural forms */
const PLURAL_MAP = {
  bag: "Bags", bar: "Bars", bottle: "Bottles", box: "Boxes",
  bucket: "Buckets", bunch: "Bunches", can: "Cans", carton: "Cartons",
  clove: "Cloves", container: "Containers",
  gallon: "Gallons", "half gallon": "Half Gallons", head: "Heads",
  jar: "Jars", liter: "Liters", loaf: "Loaves", pack: "Packs",
  piece: "Pieces", pound: "Pounds", roll: "Rolls", tube: "Tubes",
  unit: "Units"
};

/**
 * pluralizeUnit(unit, qty) — Returns the correct singular or plural form of a unit.
 *
 * Rules:
 *   - qty > 1 (whole number part): plural form (e.g. "Bags")
 *   - qty = 1 or fraction-only (e.g. ½, ¼): singular form (e.g. "Bag")
 *   - Mixed number with whole > 1 (e.g. 2½): plural (whole part drives it)
 *   - Oz and Dozen never change (inherently plural or invariant)
 *
 * @param {string} unit - Singular unit name (e.g. "Bag", "Loaf", "Oz")
 * @param {number} qty - Decimal quantity (e.g. 1, 2.5, 0.25)
 * @returns {string} Correctly pluralized unit string
 */
export function pluralizeUnit(unit, qty) {
  if (!unit) return "Unit";
  const n = Number(qty) || 0;
  // Use the whole-number part to decide: fractions alone (0.25, 0.5) stay singular
  const whole = Math.floor(n);
  if (whole <= 1) return unit; // singular for 0, 1, or fraction-only
  // Look up the plural form; fall back to the original if not in the map
  return PLURAL_MAP[unit.toLowerCase()] || unit;
}

/**
 * formatQtyWithUnit(qty, unit) — Formats quantity + unit for display.
 * Combines formatQty() output with the pluralized unit string.
 * @param {number} qty - Decimal quantity
 * @param {string} unit - Unit of measure (e.g. "Gallon", "Piece")
 * @returns {string} e.g. "5 ½ Gallons", "½ Gallon"
 */
export function formatQtyWithUnit(qty, unit) {
  return `${formatQty(qty)} ${pluralizeUnit(unit || "Unit", qty)}`;
}

/**
 * renderFracSelect(idPrefix, selectedFrac) — Returns an HTML <select> for fraction picking.
 * The select fires an onchange event using the idPrefix to identify the control.
 * @param {string} idPrefix - ID prefix for the select element (e.g. "inv-frac-{id}")
 * @param {number} selectedFrac - Currently selected fraction as decimal
 * @returns {string} HTML string for the fraction <select>
 */
export function renderFracSelect(idPrefix, selectedFrac) {
  // Build the <select> options — the "none" option gets muted styling via a CSS class.
  // When a fraction IS selected, show the value clearly (e.g. "½", "¼").
  const hasFrac = selectedFrac > 0.01;
  const opts = FRAC_OPTIONS.map(o => {
    const sel = Math.abs(o.value - selectedFrac) < 0.01 ? " selected" : "";
    return `<option value="${o.value}"${sel}>${o.label}</option>`;
  }).join("");
  // Add "frac-active" class when a fraction is selected for clear visual feedback
  const activeClass = hasFrac ? " frac-active" : "";
  return `<select class="frac-select${activeClass}" id="${idPrefix}">${opts}</select>`;
}

/**
 * Converts a string to Title Case (first letter of each word capitalized).
 * Used across all product name displays for consistent formatting.
 */
export function toTitleCase(str) {
  if (!str) return "";
  return str.replace(/\w\S*/g, t => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase());
}

/**
 * applyTitleCaseWhileTyping(inputEl) — Applies Title Case transformation to an
 * input element's value on every keystroke. Preserves the user's cursor position
 * so typing feels natural (no cursor jump to end). Only capitalizes the first
 * letter of each word; leaves the rest of the word as-is while the user is still
 * typing it (so mid-word characters stay lowercase naturally).
 * @param {HTMLInputElement} inputEl - The text input element to transform
 */
export function applyTitleCaseWhileTyping(inputEl) {
  if (!inputEl) return;
  const val = inputEl.value;
  if (!val) return;

  // Save cursor position before modifying — prevents the cursor from jumping to the end
  const cursorPos = inputEl.selectionStart;

  // Capitalize the first letter of every word (after a space or at the start).
  // This only uppercases the first char of each word — leaves the rest as-is so
  // the user can naturally type lowercase mid-word without fighting the transform.
  const titleCased = val.replace(/(^|\s)(\w)/g, (match, space, char) => space + char.toUpperCase());

  // Only update if the value actually changed (avoids unnecessary DOM writes)
  if (titleCased !== val) {
    inputEl.value = titleCased;
    // Restore cursor position so typing isn't interrupted
    inputEl.setSelectionRange(cursorPos, cursorPos);
  }
}

/**
 * Shorthand for document.getElementById.
 * Used everywhere to keep DOM lookups concise (e.g., g("notif") instead of
 * document.getElementById("notif")).
 */
export function g(id) { return document.getElementById(id); }

/**
 * Returns today's date as a "YYYY-MM-DD" string (the app's standard date
 * format for expiry dates, shopping list entries, etc.).
 * Uses toISOString which always gives UTC — the split("T")[0] strips the time.
 */
export function tk() { return new Date().toISOString().split("T")[0]; }

/**
 * Returns an array of 7 Date objects representing the current calendar week,
 * starting on Sunday and ending on Saturday.
 * Used for the weekly meal-plan grid so each column maps to one day.
 */
export function wDates() {
  // Start from today at midnight to avoid time-of-day drift
  const t = new Date(); t.setHours(0, 0, 0, 0);
  // Rewind to Sunday (getDay() returns 0 for Sunday, 6 for Saturday)
  const s = new Date(t); s.setDate(t.getDate() - t.getDay());
  // Build array of 7 days: Sun through Sat
  return Array.from({ length: 7 }, (_, i) => { const d = new Date(s); d.setDate(s.getDate() + i); return d; });
}

/**
 * Returns tomorrow's date as a "YYYY-MM-DD" string.
 * Useful for default expiry suggestions or "shop by" dates.
 */
export function nextDay() {
  const d = new Date(); d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
}

/**
 * Computes the expiry status for a pantry item given its expiry date string.
 *
 * @param {string} exp - Expiry date in "YYYY-MM-DD" format.
 * @returns {object|null} An object with two fields:
 *   - c: CSS class / status key — "expired", "expiring", or "ok"
 *   - l: Human-readable label — e.g., "Expired", "Expires today", "Expires in 3d",
 *        or a formatted date like "Mar 15"
 *   Returns null if no expiry date is provided.
 */
export function xSt(exp) {
  if (!exp) return null;
  // Midnight today — used as the baseline for "days remaining" math
  const t = new Date(); t.setHours(0, 0, 0, 0);
  // Parse the expiry date at midnight local time (the "T00:00:00" suffix
  // prevents the Date constructor from interpreting a bare YYYY-MM-DD as UTC)
  const e = new Date(exp + "T00:00:00");
  // Number of whole days between today and the expiry date
  // 86400000 = milliseconds in one day
  const d = Math.round((e - t) / 86400000);
  if (d < 0) return { c: "expired", l: "Expired" };
  if (d === 0) return { c: "expiring", l: "Expires today" };
  if (d <= 7) return { c: "expiring", l: `Expires in ${d}d` };
  // More than a week out — show a short date like "Mar 15"
  return { c: "ok", l: e.toLocaleDateString("en-US", { month: "short", day: "numeric" }) };
}

/**
 * Returns a display-friendly label (with emoji) for a storage location key.
 * The three valid location keys are "fridge", "freezer", and "pantry".
 * Falls back to the raw key if it doesn't match any known location.
 */
export function ll(l) {
  return { fridge: "🌡 Fridge", freezer: "🧊 Freezer", pantry: "🥫 Pantry", household: "🏠 Household" }[l] || l;
}

/**
 * Mapping of food category names to their display emoji icons.
 * Used in the pantry list UI to visually distinguish categories at a glance.
 * "Imported" is a special category for items brought in via receipt scanning
 * or external data sources that haven't been manually categorized yet.
 */
export const CATS = {
  Produce: "🥦", Proteins: "🍗", Dairy: "🧀", Grains: "🌾",
  Condiments: "🧴", Snacks: "🍿", Beverages: "🥤", Frozen: "❄️",
  General: "📦", Imported: "📥"
};

// ── SMART EMOJI MAPPING ─────────────────────────────────────────────────────
// Maps product types, categories, and name keywords to specific emoji icons.
// Falls back to 🛒 for unknown items. Used by inventory and shopping list rows
// to display a more relevant icon than the generic category-level emoji.

/** Keyword → emoji mapping table, checked top-to-bottom (first match wins) */
const _EMOJI_MAP = [
  // Bread & bakery
  { keywords: ["bread", "pita", "bagel", "tortilla", "naan", "flatbread", "bun", "roll", "croissant", "muffin"], emoji: "🫓" },
  { keywords: ["loaf"], emoji: "🫓" },
  // Spices & herbs
  { keywords: ["peppercorn", "spice", "herb", "cumin", "turmeric", "paprika", "cinnamon", "oregano", "basil", "thyme", "rosemary", "cayenne", "chili flake", "seasoning"], emoji: "🌶️" },
  // Chocolate & candy
  { keywords: ["chocolate bar"], emoji: "🍫" },
  { keywords: ["chocolate"], emoji: "🍫" },
  { keywords: ["candy", "gummy", "gum"], emoji: "🍬" },
  // Beverages
  { keywords: ["soda", "cola", "pepsi", "coke", "sprite", "fanta", "energy drink", "red bull", "monster"], emoji: "🥤" },
  { keywords: ["water", "sparkling water", "seltzer"], emoji: "💧" },
  { keywords: ["coffee", "espresso"], emoji: "☕" },
  { keywords: ["tea", "matcha", "chai"], emoji: "🍵" },
  // Dairy
  { keywords: ["milk", "oat milk", "almond milk", "soy milk"], emoji: "🥛" },
  { keywords: ["cheese", "cheddar", "mozzarella", "parmesan", "brie", "gouda", "feta"], emoji: "🧀" },
  { keywords: ["butter", "margarine", "ghee"], emoji: "🧈" },
  { keywords: ["egg"], emoji: "🥚" },
  // Proteins
  { keywords: ["chicken", "poultry", "turkey"], emoji: "🍗" },
  { keywords: ["beef", "steak", "meat", "lamb", "pork", "bacon", "sausage", "ground"], emoji: "🥩" },
  { keywords: ["fish", "salmon", "tuna", "cod", "shrimp", "seafood", "crab", "lobster"], emoji: "🐟" },
  // Produce
  { keywords: ["apple", "banana", "orange", "grape", "berry", "berries", "strawberry", "blueberry", "mango", "peach", "pear", "plum", "kiwi", "melon", "watermelon", "pineapple", "cherry", "lemon", "lime", "avocado", "fruit"], emoji: "🍎" },
  { keywords: ["broccoli", "carrot", "celery", "cabbage", "tomato", "onion", "garlic", "spinach", "mushroom", "squash", "lettuce", "cucumber", "pepper", "potato", "corn", "zucchini", "eggplant", "vegetable", "produce", "jalap", "kale"], emoji: "🥦" },
  // Snacks
  { keywords: ["chip", "crisp", "pringles", "snack", "pretzel", "popcorn", "cracker"], emoji: "🍿" },
  // Frozen
  { keywords: ["ice cream", "gelato", "sorbet", "frozen yogurt"], emoji: "🍦" },
  { keywords: ["frozen"], emoji: "🧊" },
  // Cleaning
  { keywords: ["cleaning", "cleaner", "detergent", "bleach", "dish soap", "windex", "sponge", "mop", "broom"], emoji: "🧹" },
  // Personal care
  { keywords: ["lotion", "shampoo", "conditioner", "body wash", "deodorant", "sunscreen", "face wash", "moisturizer", "soap"], emoji: "🧴" },
  // Health
  { keywords: ["vitamin", "medicine", "supplement", "capsule", "tablet", "pain relief", "tylenol", "advil", "ibuprofen"], emoji: "💊" },
  // Baby
  { keywords: ["baby food", "baby formula", "diaper", "baby"], emoji: "👶" },
  // Pet
  { keywords: ["pet food", "dog food", "cat food", "dog treat", "cat treat", "pet"], emoji: "🐾" },
  // Nuts
  { keywords: ["nut", "almond", "cashew", "peanut", "walnut", "pecan", "pistachio"], emoji: "🥜" },
  // Grains & pasta
  { keywords: ["rice", "pasta", "noodle", "grain", "oat", "cereal", "flour", "quinoa"], emoji: "🌾" },
  // Sauces & condiments
  { keywords: ["sauce", "ketchup", "mustard", "mayo", "mayonnaise", "hot sauce", "sriracha", "soy sauce", "vinegar", "salsa", "dressing", "condiment", "jam", "jelly"], emoji: "🫙" },
  // Oil
  { keywords: ["oil", "olive oil", "cooking oil", "vegetable oil", "coconut oil"], emoji: "🫒" },
];

/**
 * getItemEmoji(item) — Returns a specific emoji icon for a product based on its
 * name, scanTitle, and category. Uses keyword matching against _EMOJI_MAP.
 * Falls back to 🛒 (shopping cart) for unknown items.
 *
 * @param {object} item - Item with at least { name } and optionally { scanTitle, category }
 * @returns {string} A single emoji character
 */
export function getItemEmoji(item) {
  if (!item) return "🛒";

  // Build a combined lowercase string from all available text fields for matching
  const text = [
    item.scanTitle || "",
    item.name || "",
    item.category || ""
  ].join(" ").toLowerCase();

  // Check each emoji mapping entry — first keyword match wins
  for (const entry of _EMOJI_MAP) {
    if (entry.keywords.some(kw => text.includes(kw))) {
      return entry.emoji;
    }
  }

  return "🛒"; // Default: shopping cart for unrecognized items
}

/**
 * Infers the best food category for a pantry item by inspecting its name and
 * any existing category field. Uses keyword matching against common food terms.
 *
 * Priority order: Produce > Proteins > Dairy > Grains > Condiments > Frozen > General.
 * If the item is stored in the freezer and didn't match earlier categories,
 * it gets classified as "Frozen". Everything else falls through to "General".
 *
 * @param {object} item - A pantry item with at least { name, category, location }.
 * @returns {string} One of the keys in the CATS map above.
 */
export function gcat(item) {
  const n = (item.name || "").toLowerCase();
  const c = (item.category || "").toLowerCase();
  // Check category field first (may already be set), then fall back to name-based keyword matching
  if (c.includes("produce") || c.includes("vegetable") || c.includes("fruit") || n.match(/apple|banana|broccoli|carrot|celery|cabbage|tomato|onion|garlic|jalap|spinach|mushroom|squash|lettuce|cucumber|pepper/)) return "Produce";
  if (c.includes("protein") || c.includes("meat") || c.includes("seafood") || c.includes("poultry") || n.match(/chicken|beef|lamb|turkey|salmon|cod|tuna|fish|steak|pork|shrimp/)) return "Proteins";
  if (c.includes("dairy") || c.includes("egg") || n.match(/egg|butter|cheese|milk|cream|yogurt|ghee/)) return "Dairy";
  if (c.includes("grain") || c.includes("bread") || c.includes("pasta") || n.match(/rice|pasta|bread|flour|oat|cereal|grain|noodle|tortilla/)) return "Grains";
  if (c.includes("condiment") || c.includes("sauce") || n.match(/sauce|ketchup|mustard|oil|vinegar|salt|pepper|spice|herb|seasoning|mayo/)) return "Condiments";
  // Items stored in the freezer that didn't match a more specific category
  if (item.location === "freezer") return "Frozen";
  return "General";
}

/**
 * Formats a Claude AI response string into safe, displayable HTML.
 * Performs the following transformations in order:
 *   1. Escapes HTML entities (&, <, >) to prevent XSS
 *   2. Converts **bold** markdown to <strong> tags
 *   3. Converts numbered lists (e.g., "1. item") to bullet-style divs
 *   4. Converts markdown bullet lists (- or bullet) to bullet-style divs
 *   5. Converts newlines to <br> tags
 *
 * @param {string} text - Raw text from Claude API response.
 * @returns {string} Sanitized HTML string ready for innerHTML insertion.
 */
export function fmtR(text) {
  return text
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/^\d+\.\s+(.+)$/gm, "<div style='margin:4px 0'>• $1</div>")
    .replace(/^[-•]\s+(.+)$/gm, "<div style='margin:4px 0'>• $1</div>")
    .replace(/\n/g, "<br>");
}

// Timer handle for the toast notification — tracked so we can cancel a
// previous timeout if a new notification fires before the old one fades out.
let _notifTimer = null;

/**
 * Shows a brief toast notification at the top of the screen.
 * The notification auto-hides after the specified duration using a CSS animation
 * named "fn" (fade-notification). Default duration is 2.5 seconds.
 *
 * @param {string} msg - The message to display.
 * @param {number} [duration=2500] - Duration in ms before the notification fades out.
 */
export function showNotif(msg, duration = 2500) {
  const el = g("notif");
  if (!el) return;
  el.textContent = msg;
  el.style.display = "block";
  // Reset animation: set to "none", force a reflow via offsetWidth read,
  // then re-apply. This restarts the CSS animation even if the element
  // was already animating from a previous notification.
  el.style.animation = "none";
  void el.offsetWidth; // Force reflow — without this the browser won't restart the animation
  // Spring overshoot animation — toast slides in from top with bounce, fades out after delay
  el.style.animation = `toastSpring ${duration / 1000}s ease forwards`;
  // Cancel any existing hide-timer so rapid-fire notifications don't
  // disappear too early
  if (_notifTimer) clearTimeout(_notifTimer);
  _notifTimer = setTimeout(() => el.style.display = "none", duration);
}

/**
 * Shows a named overlay panel by adding the "active" CSS class.
 * Overlays are identified by DOM id "ov-{name}" (e.g., "ov-kitchen").
 */
export function showOv(n) { g("ov-" + n)?.classList.add("active"); }

/**
 * Hides a named overlay panel by removing the "active" CSS class.
 */
export function hideOv(n) { g("ov-" + n)?.classList.remove("active"); }

/**
 * Renders an interactive star-rating display inside a container element.
 * Stars at index < n are filled (solid star), the rest are empty outlines.
 * The "on" CSS class is toggled for styling (e.g., gold color).
 *
 * @param {string} id - DOM id of the container holding .star elements.
 * @param {number} n  - The rating value (1-based; e.g., 3 fills the first 3 stars).
 */
export function renderStars(id, n) {
  const el = g(id);
  if (!el) return;
  el.querySelectorAll(".star").forEach((s, i) => {
    s.textContent = i < n ? "★" : "☆";
    s.classList.toggle("on", i < n);
  });
}

// ── INGREDIENT VALIDATION ────────────────────────────────────────────────────
// Reusable filter to detect invalid ingredient entries — preparation methods,
// cooking instructions, or other non-food text that leaked into ingredient lists.

/** Words/phrases that are preparation methods, not food items */
const PREP_METHOD_WORDS = [
  "chopped", "finely chopped", "diced", "sliced", "minced", "grated",
  "shredded", "crushed", "mashed", "julienned", "cubed", "halved",
  "quartered", "torn", "peeled", "deveined", "deboned", "trimmed",
  "drained", "rinsed", "sifted", "seared", "blanched", "toasted",
  "roasted", "grilled", "fried", "baked", "steamed", "boiled",
  "melted", "softened", "dissolved", "beaten", "whipped", "whisked",
  "divided", "separated", "combined", "mixed", "tossed", "coated",
  "marinated", "soaked", "chilled", "frozen", "thawed", "warmed",
  "room temperature", "at room temperature",
  "for serving", "for garnish", "for garnishing", "for topping",
  "for drizzling", "for decoration", "for dusting", "for dipping",
  "to taste", "to serve", "as needed", "as required", "as desired",
  "optional", "if desired", "if needed", "if using",
  "fresh", "dried", "ground", "whole", "packed", "loosely packed",
  "tightly packed", "lightly", "roughly", "coarsely", "finely",
  "thinly", "thickly", "into pieces", "into strips", "into cubes",
  "plus more", "plus extra", "or more", "or less", "about",
  "approximately", "heaping", "scant", "level", "generous",
  "garnish", "topping", "finishing", "reserved"
];

/**
 * isValidIngredient(name) — checks whether an ingredient entry contains a real
 * food item vs. being just a preparation method, modifier, or junk entry.
 * Returns true if the ingredient is valid, false if it should be filtered out.
 *
 * Filters out:
 *   - Entries shorter than 3 characters (e.g. "", "a", "or")
 *   - Number-only entries (e.g. "2", "1.5")
 *   - Entries that consist ONLY of known preparation/serving method words
 *   - Entries longer than 100 characters (likely instruction text, not an ingredient)
 *
 * @param {string} name - The ingredient name/text to validate
 * @returns {boolean} true if valid food ingredient, false if should be filtered
 */
export function isValidIngredient(name) {
  if (!name || typeof name !== "string") return false;

  const trimmed = name.trim();

  // Too short to be a real ingredient
  if (trimmed.length < 3) return false;

  // Number-only entries (e.g. "2", "1.5", "½")
  if (/^[\d\s.\/½¼¾⅓⅔]+$/.test(trimmed)) return false;

  // Too long — likely instruction text that leaked into ingredients
  if (trimmed.length > 100) return false;

  // Check if the entire entry is ONLY prep method words (no food item)
  const lower = trimmed.toLowerCase();
  // Direct match against known prep-only phrases
  if (PREP_METHOD_WORDS.includes(lower)) return false;

  // Split into words and check if ALL words are prep-method words or trivial connectors
  const trivialWords = new Set(["and", "or", "the", "a", "an", "of", "with", "in", "on", "for", "to", "into", "per"]);
  const words = lower.split(/\s+/);
  const allPrepOrTrivial = words.every(w =>
    trivialWords.has(w) || PREP_METHOD_WORDS.includes(w) ||
    PREP_METHOD_WORDS.some(p => p === w)
  );
  if (allPrepOrTrivial && words.length > 0) return false;

  return true;
}

/**
 * Guesses the most appropriate storage location (fridge, freezer, or pantry)
 * for a grocery item based on keyword matching against its name.
 * Used when adding new items so the user doesn't have to pick manually.
 *
 * @param {string} name - The item name (e.g., "frozen pizza", "milk").
 * @returns {string} "freezer", "fridge", or "pantry".
 */
export function guessLocation(name) {
  const n = name.toLowerCase();
  if (/frozen|ice cream|pizza|nugget|waffle|tater|edamame|popsicle/.test(n)) return "freezer";
  if (/milk|cheese|yogurt|butter|cream|egg|meat|chicken|beef|pork|fish|salmon|shrimp|tofu|deli|bacon|sausage|produce|lettuce|spinach|berry|berries|fruit|vegetable|carrot|broccoli|juice/.test(n)) return "fridge";
  return "pantry";
}

/**
 * Mapping of store aisle names to arrays of keyword fragments.
 * Used by guessAisle() to group shopping list items by the section of the
 * store where they're typically found. This helps users shop more efficiently
 * by walking aisle-by-aisle instead of zigzagging.
 *
 * Each keyword is matched as a substring against the item name (case-insensitive).
 * For example, "jalap" matches "jalapeno" without needing the full word.
 */
export const AISLES = {
  "Produce": ["apple", "banana", "carrot", "celery", "onion", "garlic", "tomato", "lettuce", "cucumber", "pepper", "broccoli", "spinach", "mushroom", "lemon", "lime", "herb", "cabbage", "squash", "jalap", "avocado", "potato", "ginger", "kale", "zucchini", "corn", "berry", "grape", "orange", "melon", "pear", "mango", "peach"],
  "Meat & Fish": ["chicken", "beef", "lamb", "turkey", "salmon", "cod", "tuna", "fish", "steak", "shrimp", "pork", "sausage", "ground", "tilapia", "crab", "lobster", "scallop"],
  "Bakery": ["bread", "bagel", "muffin", "croissant", "tortilla", "pita", "naan", "roll", "bun", "baguette", "flatbread", "english muffin", "biscuit"],
  "Deli": ["deli", "ham", "salami", "prosciutto", "roast beef", "sliced turkey", "cold cut", "hummus", "prepared"],
  "Dairy & Eggs": ["egg", "butter", "cheese", "milk", "cream", "yogurt", "ghee", "kefir", "sour cream", "cottage cheese", "half and half", "whipping cream"],
  "Frozen": ["frozen", "ice cream", "pizza", "nugget", "waffle", "edamame", "okra", "lima", "broccoli floret", "pot pie", "burrito"],
  "Canned Goods": ["canned", "can of", "diced tomato", "tomato paste", "tomato sauce", "bean", "lentil", "chickpea", "stock", "broth", "soup", "tuna can", "sardine"],
  "Condiments & Sauces": ["ketchup", "mustard", "mayo", "mayonnaise", "hot sauce", "soy sauce", "worcestershire", "bbq sauce", "salsa", "ranch", "dressing", "vinegar", "relish", "sriracha", "teriyaki", "pesto"],
  "Baking": ["flour", "sugar", "baking soda", "baking powder", "vanilla", "yeast", "cocoa", "chocolate chip", "corn starch", "powdered sugar", "brown sugar", "molasses", "food coloring"],
  "Pantry": ["rice", "pasta", "oil", "spice", "salt", "honey", "oat", "cereal", "granola", "peanut butter", "jam", "jelly", "syrup", "olive oil"],
  "Snacks & Drinks": ["chip", "cracker", "cookie", "juice", "soda", "water", "tea", "coffee", "snack", "nut", "seed", "popcorn", "pretzel", "energy drink", "sparkling"],
  "Paper & Cleaning": ["paper towel", "toilet paper", "napkin", "dish soap", "detergent", "sponge", "trash bag", "foil", "plastic wrap", "wipe", "bleach", "cleaner"],
  "Baby": ["diaper", "formula", "baby food", "baby wipe", "pacifier", "bottle nipple"],
  "Pet": ["dog food", "cat food", "pet treat", "litter", "pet food"],
  "Health & Beauty": ["shampoo", "conditioner", "body wash", "lotion", "toothpaste", "toothbrush", "deodorant", "razor", "vitamin", "medicine", "band-aid", "sunscreen"]
};

// AISLE_ICONS — emoji icon for each aisle category, used in rich aisle dividers
export const AISLE_ICONS = {
  "Produce": "🥬",
  "Meat & Fish": "🥩",
  "Bakery": "🍞",
  "Deli": "🥪",
  "Dairy & Eggs": "🥛",
  "Frozen": "🧊",
  "Canned Goods": "🥫",
  "Condiments & Sauces": "🫙",
  "Baking": "🧁",
  "Pantry": "🫘",
  "Snacks & Drinks": "🥤",
  "Paper & Cleaning": "🧻",
  "Baby": "👶",
  "Pet": "🐾",
  "Health & Beauty": "💊",
  "Other": "📦"
};

/**
 * Guesses which store aisle a shopping-list item belongs to, based on keyword
 * matching against the AISLES map above. Returns "Other" if no keywords match.
 *
 * @param {string} name - The item name (e.g., "cheddar cheese").
 * @returns {string} An aisle name like "Dairy & Eggs", or "Other" as fallback.
 */
// ── OPEN FOOD FACTS CATEGORY → SHOPPING PREP CATEGORY MAPPER ─────────────────
// Maps the raw `categories` string from Open Food Facts to one of the Shopping
// Prep aisle categories. This is the most accurate categorization source because
// OFF has human-curated category taxonomies (e.g. "Olives,Condiments,Pickled foods").
// The keyword-based name matching in Shopping Prep is the fallback when this data
// is unavailable.

/**
 * mapOffCategory(offCategory) — Maps an Open Food Facts categories string to a
 * Shopping Prep category key. Checks the OFF string for known keywords in priority
 * order (most specific first) and returns the matching prep category key.
 * Returns null if no match — caller should fall back to other heuristics.
 *
 * @param {string} offCategory - Raw categories string from OFF (e.g. "Olives,Condiments")
 * @returns {string|null} Shopping Prep category key (e.g. "condiments") or null
 */
export function mapOffCategory(offCategory) {
  if (!offCategory) return null;
  const lc = offCategory.toLowerCase();

  // ── Priority-ordered keyword → category mapping ──
  // More specific terms checked first to avoid false positives
  // (e.g. "ice cream" before generic "cream" which would match dairy)

  // Cleaning & Household
  if (/cleaning|household|laundry|detergent|disinfectant/.test(lc)) return "cleaning";

  // Personal Care — checked before Meat & Seafood to prevent false positives
  // (e.g. "body wash" shouldn't match meat keywords)
  if (/personal care|hygiene|cosmetic|vitamin|supplement|medicine|pharmaceutical|beauty|shampoo|conditioner|lotion|body wash|soap|deodorant|toothpaste|toothbrush|moisturizer|sunscreen|face wash|cleanser|hair|skin care/.test(lc)) return "personal";

  // Frozen — check before other food categories since frozen items span many types
  if (/frozen/.test(lc)) return "frozen";

  // Meat & Seafood
  if (/\bmeat|poultry|chicken|beef|pork|fish|seafood|deli|sausage|bacon|ham\b/.test(lc)) return "meat";

  // Dairy, Eggs & Milk
  if (/dairy|milk|cheese|yogurt|yoghurt|butter|cream|egg|curd|paneer/.test(lc)) return "dairy";

  // Produce
  if (/vegetable|produce|fresh fruit|salad|fresh herb/.test(lc)) return "produce";

  // Condiments & Sauces — broad set including olives, capers, pickles, spices, oils
  if (/olive|pickle|caper|condiment|sauce|dressing|vinegar|oil|ketchup|mustard|mayo|relish|spice|seasoning|herb|pepper|salt|cumin|oregano|thyme|jam|jelly|preserve|marmalade|honey|syrup|hummus|tahini|pesto|salsa/.test(lc)) return "condiments";

  // Bakery & Bread
  if (/bread|bakery|pastry|baguette|croissant|muffin|bagel|tortilla|naan|pita|flatbread/.test(lc)) return "bakery";

  // Grains, Pasta & Rice
  if (/cereal|grain|pasta|rice|flour|oat|noodle|couscous|quinoa|barley|bulgur/.test(lc)) return "grains";

  // Canned & Dry Goods
  if (/canned|preserved|tinned|bean|legume|lentil|chickpea|broth|stock/.test(lc)) return "canned";

  // Snacks & Beverages — checked late so specific categories above take priority
  if (/snack|chip|crisp|popcorn|nut|beverage|drink|soda|juice|water|coffee|tea|chocolate|candy|sweet|confection|dessert|ice cream|cookie|biscuit|cake|energy drink/.test(lc)) return "snacks";

  return null; // No match — caller should fall back to name-based keyword matching
}

// ── SMART SCAN RESULT FORMATTING ─────────────────────────────────────────────
// These helpers extract a clean, short product type title from barcode scan
// results using existing database fields (no AI API calls needed).

// ── PRODUCT TYPE MAPPING TABLE ────────────────────────────────────────────────
// Comprehensive local mapping that checks both the database category AND keywords
// in the product name to determine a more specific, human-friendly product type.
// Falls back to the existing formatScanResult() logic if no mapping matches.
// Each entry: { category (regex or null for "any"), keywords (array of lowercase substrings), title }
const PRODUCT_TYPE_MAP = [
  // ── Universal matches (any category) ──
  { category: null, keywords: ["chewing gum", "gum"],                                   title: "Gum" },
  { category: null, keywords: ["eye drop", "eye relief", "visine", "contact"],           title: "Eye Drops" },
  { category: null, keywords: ["chocolate bar"],                                         title: "Chocolate Bar" },
  { category: null, keywords: ["dark chocolate", "milk chocolate", "white chocolate", "chocolate"], title: "Chocolate" },

  // ── Snacks ──
  { category: /snack/i, keywords: ["chip", "crisp", "pringles"],                         title: "Chips" },
  { category: /snack/i, keywords: ["cookie", "biscuit"],                                 title: "Cookies" },
  { category: /snack/i, keywords: ["cracker"],                                           title: "Crackers" },
  { category: /snack/i, keywords: ["popcorn"],                                           title: "Popcorn" },
  { category: /snack/i, keywords: ["pretzel"],                                           title: "Pretzels" },
  { category: /snack/i, keywords: ["granola bar", "energy bar", "protein bar"],          title: "Energy Bar" },
  { category: /snack/i, keywords: ["chocolate bar"],                                    title: "Chocolate Bar" },
  { category: /snack/i, keywords: ["dark chocolate", "milk chocolate", "white chocolate", "chocolate"], title: "Chocolate" },
  { category: /snack/i, keywords: ["candy", "gummy"],                                  title: "Candy" },
  { category: /snack/i, keywords: ["nut", "almond", "cashew", "peanut"],                title: "Nuts" },

  // ── Beverages ──
  { category: /beverage/i, keywords: ["water"],                                          title: "Water" },
  { category: /beverage/i, keywords: ["juice"],                                          title: "Juice" },
  { category: /beverage/i, keywords: ["soda", "cola", "pepsi", "coke"],                 title: "Soda" },
  { category: /beverage/i, keywords: ["coffee"],                                         title: "Coffee" },
  { category: /beverage/i, keywords: ["tea"],                                            title: "Tea" },
  { category: /beverage/i, keywords: ["energy drink", "red bull", "monster"],            title: "Energy Drink" },

  // ── Dairy ──
  { category: /dairy/i, keywords: ["cream cheese"],                                      title: "Cream Cheese" },
  { category: /dairy/i, keywords: ["milk"],                                              title: "Milk" },
  { category: /dairy/i, keywords: ["yogurt", "yoghurt"],                                 title: "Yogurt" },
  { category: /dairy/i, keywords: ["cheese"],                                            title: "Cheese" },
  { category: /dairy/i, keywords: ["butter"],                                            title: "Butter" },

  // ── Personal Care / Health ──
  // "shampoo and conditioner" / "2-in-1" checked first (most specific), then
  // "conditioner" before "shampoo" so "VO5 Conditioner" doesn't match "Shampoo"
  { category: /personal care/i, keywords: ["shampoo and conditioner", "shampoo & conditioner", "2-in-1", "2 in 1"], title: "Shampoo & Conditioner" },
  { category: /personal care/i, keywords: ["conditioner"],                                title: "Conditioner" },
  { category: /personal care/i, keywords: ["shampoo"],                                   title: "Shampoo" },
  { category: /personal care/i, keywords: ["body lotion", "lotion", "moisturizer"],      title: "Body Lotion" },
  { category: /personal care/i, keywords: ["body wash", "shower gel"],                   title: "Body Wash" },
  { category: /personal care/i, keywords: ["deodorant", "antiperspirant"],               title: "Deodorant" },
  { category: /personal care/i, keywords: ["toothpaste"],                                title: "Toothpaste" },
  { category: /personal care/i, keywords: ["toothbrush"],                                title: "Toothbrush" },
  { category: /personal care/i, keywords: ["sunscreen", "spf"],                          title: "Sunscreen" },
  { category: /personal care/i, keywords: ["face wash", "cleanser"],                     title: "Face Wash" },
  { category: /personal care/i, keywords: ["vitamin", "supplement", "capsule", "tablet"], title: "Vitamins" },
  { category: /personal care/i, keywords: ["pain relief", "tylenol", "advil", "ibuprofen"], title: "Pain Relief" },
  { category: /personal care/i, keywords: ["band-aid", "bandage"],                      title: "Bandages" },

  // ── Cleaning ──
  { category: /clean/i, keywords: ["detergent", "laundry"],                              title: "Laundry Detergent" },
  { category: /clean/i, keywords: ["dish soap", "dishwasher"],                           title: "Dish Soap" },
  { category: /clean/i, keywords: ["bleach"],                                            title: "Bleach" },
  { category: /clean/i, keywords: ["spray", "cleaner", "windex"],                       title: "Cleaning Spray" },

  // ── Frozen ──
  { category: /frozen/i, keywords: ["pizza"],                                            title: "Frozen Pizza" },
  { category: /frozen/i, keywords: ["ice cream", "gelato"],                              title: "Ice Cream" },
  { category: /frozen/i, keywords: ["fries", "potato"],                                  title: "Frozen Fries" },

  // ── Condiments ──
  { category: /condiment/i, keywords: ["ketchup"],                                       title: "Ketchup" },
  { category: /condiment/i, keywords: ["mustard"],                                       title: "Mustard" },
  { category: /condiment/i, keywords: ["mayo", "mayonnaise"],                            title: "Mayonnaise" },
  { category: /condiment/i, keywords: ["hot sauce", "sriracha", "tabasco"],              title: "Hot Sauce" },
  { category: /condiment/i, keywords: ["soy sauce"],                                     title: "Soy Sauce" },
  { category: /condiment/i, keywords: ["olive oil", "vegetable oil", "cooking oil"],     title: "Cooking Oil" },
  { category: /condiment/i, keywords: ["vinegar"],                                       title: "Vinegar" },

  // ── Bread / Bakery ──
  { category: /bread/i, keywords: ["bread"],                                             title: "Bread" },
  { category: /bread/i, keywords: ["bagel"],                                             title: "Bagels" },
  { category: /bread/i, keywords: ["tortilla", "wrap"],                                  title: "Tortillas" },

  // ── Meat / Protein ──
  { category: /meat/i, keywords: ["chicken"],                                            title: "Chicken" },
  { category: /meat/i, keywords: ["beef", "ground beef"],                                title: "Beef" },
  { category: /meat/i, keywords: ["pork", "bacon"],                                      title: "Pork" },
  { category: /meat/i, keywords: ["turkey"],                                             title: "Turkey" },
  { category: /meat/i, keywords: ["salmon", "tuna", "fish"],                             title: "Fish" },

  // ── Pet ──
  { category: /pet/i, keywords: ["dog food", "dog treat"],                               title: "Dog Food" },
  { category: /pet/i, keywords: ["cat food", "cat treat"],                               title: "Cat Food" },
];

/**
 * _matchProductType(name, category) — Checks the PRODUCT_TYPE_MAP for a matching
 * product type based on the product's category and name keywords.
 * Returns the mapped title string if found, or null if no mapping matches.
 *
 * @param {string} name - Full product name (checked for keyword substrings)
 * @param {string} category - Product category from the database
 * @returns {string|null} Mapped product type title, or null if no match
 */
function _matchProductType(name, category) {
  const lowerName = (name || "").toLowerCase();
  const lowerCat = (category || "").toLowerCase();

  for (const entry of PRODUCT_TYPE_MAP) {
    // Check category constraint: null = any category, regex = must match
    if (entry.category !== null && !entry.category.test(lowerCat)) continue;

    // Check if any keyword appears in the product name
    if (entry.keywords.some(kw => lowerName.includes(kw))) {
      return entry.title;
    }
  }

  return null; // No mapping matched — fall back to existing logic
}

// Categories too generic to serve as meaningful product type titles
const _GENERIC_CATEGORIES = new Set([
  "general", "food", "grocery", "personal care", "pet food",
  "household", "other", "generic foods", "beverages", ""
]);

// Regex to match and strip size/quantity info from product names (e.g. "16 Fl Oz", "500ml")
const _SIZE_PATTERN = /\b\d+[\d.,]*\s*(fl\.?\s*oz|oz|ml|l|liter|litre|g|kg|lb|lbs|ct|count|pack|pk|piece|pc|qt|gal|gallon|pt|pint)\b/gi;

// Common filler words to skip when extracting product type from name
const _FILLER_WORDS = new Set(["for", "with", "and", "the", "a", "an", "in", "of", "by", "from"]);

// Important product variant keywords that must always be preserved in titles.
// These distinguish meaningfully different products (e.g. "Zero Sugar" vs regular).
const _VARIANT_KEYWORDS = [
  "zero sugar", "diet", "zero", "light", "lite", "decaf", "caffeine free",
  "organic", "original", "classic", "extra", "plus", "pro", "max", "mini"
];

/**
 * formatScanResult(product) — Extracts smart display fields from a barcode scan product.
 * Uses existing database fields (category, description/generic_name) when available;
 * falls back to extracting the product type from the full name.
 *
 * @param {Object} product - Product object from barcode API (name, brand, category, description)
 * @returns {{ title: string, subtitle: string, brand: string }}
 *   - title: Short product type (e.g. "Body Lotion") for prominent display
 *   - subtitle: Full product name for smaller display below
 *   - brand: Brand name as-is
 */
export function formatScanResult(product) {
  if (!product) return { title: "", subtitle: "", brand: "" };

  const name = (product.name || "").trim();
  const brand = (product.brand || "").trim();
  const description = (product.description || "").trim();
  const category = (product.category || "").trim();

  // Determine the short title (product type) from available fields
  const title = _extractProductTitle(name, brand, description, category);

  // Subtitle: full product name, cleaned of redundant brand/abbreviation duplicates.
  // E.g. "Mountain Dew Mtn Dew Zero Sugar Baja Blast" → "Zero Sugar Baja Blast"
  const cleanedSubtitle = deduplicateSubtitle(name, brand);

  return { title: title || name, subtitle: cleanedSubtitle, brand };
}

/**
 * deduplicateSubtitle(name, brand) — Removes redundant repeated words/phrases
 * from a product name to produce a cleaner subtitle.
 * Handles:
 *   - Full brand name appearing in the product name (e.g. "Mountain Dew" in title)
 *   - Common abbreviations of the brand (e.g. "Mtn Dew" when brand is "Mountain Dew")
 *   - Duplicate words within the name itself
 * @param {string} name - Full product name from the database
 * @param {string} brand - Brand name to strip from the subtitle
 * @returns {string} Cleaned subtitle with redundant parts removed
 */
export function deduplicateSubtitle(name, brand) {
  if (!name) return "";
  let result = name;

  if (brand) {
    // Strip the full brand name from the beginning of the product name (case-insensitive)
    const escapedBrand = brand.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    result = result.replace(new RegExp("^" + escapedBrand + "\\s*", "i"), "").trim();

    // Build common abbreviation patterns from the brand name.
    // E.g. "Mountain Dew" → check for "Mtn Dew", "Mt Dew", etc.
    const ABBREVS = {
      "mountain": "mtn", "mount": "mt", "doctor": "dr", "mister": "mr",
      "saint": "st", "international": "intl", "company": "co"
    };
    const brandWords = brand.toLowerCase().split(/\s+/);
    const abbrWords = brandWords.map(w => ABBREVS[w] || w);
    const abbrBrand = abbrWords.join(" ");

    // If the abbreviated form differs from the original brand, strip it too
    if (abbrBrand !== brand.toLowerCase()) {
      const escapedAbbr = abbrBrand.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      result = result.replace(new RegExp(escapedAbbr + "\\s*", "i"), "").trim();
    }
  }

  // Remove consecutive duplicate words (case-insensitive).
  // E.g. "Sugar Sugar Free" → "Sugar Free"
  result = result.replace(/\b(\w+)\s+\1\b/gi, "$1");

  // Clean up any leftover leading/trailing whitespace or double spaces
  result = result.replace(/\s{2,}/g, " ").trim();

  // If we stripped everything, fall back to the original name
  return result || name;
}

/**
 * _extractProductTitle — Determines the best short product type label.
 * Priority: PRODUCT_TYPE_MAP > description/generic_name > specific category > extracted from name.
 * The local mapping table is checked first because database categories are often
 * too generic (e.g. "Snacks" for gum, "Emulsion" for eye drops).
 */
function _extractProductTitle(name, brand, description, category) {
  // 0. Check local PRODUCT_TYPE_MAP first — combines category + name keywords
  //    for more specific results than database fields alone
  const mapped = _matchProductType(name, category);
  if (mapped) return mapped;

  // 1. Use description (generic_name from Open Food Facts) if meaningful and concise
  if (description && description.length >= 3 && description.length <= 40
      && !_GENERIC_CATEGORIES.has(description.toLowerCase())) {
    return toTitleCase(description);
  }

  // 2. Use category if specific enough (not a generic catch-all)
  if (category && !_GENERIC_CATEGORIES.has(category.toLowerCase())) {
    // Clean up Open Food Facts category format (e.g. "dairy-products" → "Dairy Products")
    const cleanCat = category.replace(/-/g, " ");
    if (cleanCat.length <= 30) return toTitleCase(cleanCat);
  }

  // 3. Extract product type from the full name by stripping brand, size, and fluff
  return _extractTypeFromName(name, brand);
}

/**
 * _extractTypeFromName — Strips brand, size info, and filler words from a product name
 * to extract the core product type (e.g. "Body Lotion" from "Eos Shea Better Body Lotion...").
 * Takes the last 2-3 meaningful words, which tend to be the actual product type.
 * Preserves important variant keywords (Zero Sugar, Diet, Organic, etc.) that distinguish
 * meaningfully different products — e.g. "Baja Blast Zero Sugar" not just "Baja Blast".
 */
function _extractTypeFromName(name, brand) {
  if (!name) return "";

  let cleaned = name;

  // Strip brand name from the beginning (case-insensitive)
  if (brand) {
    const escaped = brand.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    cleaned = cleaned.replace(new RegExp("^" + escaped + "\\s*", "i"), "");
  }

  // Split on dash/em-dash separators — take only the first segment (before flavor/variant info)
  cleaned = cleaned.split(/\s*[—–-]\s*/)[0].trim();

  // Remove size/quantity info (e.g. "16 Fl Oz", "500ml")
  cleaned = cleaned.replace(_SIZE_PATTERN, "").trim();

  // Remove parenthesized info and trailing punctuation
  cleaned = cleaned.replace(/\s*\([^)]*\)\s*/g, " ").replace(/[,|]+\s*$/, "").trim();

  // Detect variant keywords present in the cleaned name BEFORE word filtering.
  // These get appended to the final title if they'd otherwise be lost.
  const lowerCleaned = cleaned.toLowerCase();
  const foundVariants = _VARIANT_KEYWORDS.filter(v => lowerCleaned.includes(v));

  // Split into words, filtering out filler words and bare numbers
  const words = cleaned.split(/\s+/).filter(w =>
    w.length >= 2 && !_FILLER_WORDS.has(w.toLowerCase()) && !/^\d+$/.test(w)
  );

  if (words.length === 0) return toTitleCase(name.split(/\s+/).slice(0, 2).join(" "));
  if (words.length <= 3) return toTitleCase(words.join(" "));

  // Take the last 2-3 words — product type tends to be at the end of the name.
  // Use 3 words if the last 2 are very short (< 8 chars combined).
  const last2 = words.slice(-2);
  const last3 = words.slice(-3);
  const use3 = last2.join("").length < 8;
  let result = (use3 ? last3 : last2).join(" ");

  // Append any variant keywords that aren't already in the extracted result.
  // This ensures "Mountain Dew Baja Blast Zero Sugar" → "Baja Blast Zero Sugar"
  // instead of just "Baja Blast".
  for (const variant of foundVariants) {
    if (!result.toLowerCase().includes(variant)) {
      result += " " + variant;
    }
  }

  return toTitleCase(result);
}

export function guessAisle(name) {
  const n = name.toLowerCase();
  // Check each aisle's keyword list; first match wins
  for (const [aisle, kws] of Object.entries(AISLES)) {
    if (kws.some(k => n.includes(k))) return aisle;
  }
  return "Other";
}

// ── STORE AISLE ORDERING ────────────────────────────────────────────────────
// When the user selects a favourite store in Settings, the Shopping list "By category"
// sort follows that store's typical aisle layout instead of alphabetical order.
// This ordering represents the general walk-through path for each store chain.
// "Other" is always last. Categories not listed use alphabetical fallback position.
const _STORE_AISLE_ORDER = {
  "ShopRite":      ["Produce", "Bakery", "Deli", "Dairy & Eggs", "Meat & Fish", "Frozen", "Canned Goods", "Condiments & Sauces", "Baking", "Pantry", "Snacks & Drinks", "Paper & Cleaning", "Baby", "Pet", "Health & Beauty", "Other"],
  "Whole Foods":   ["Produce", "Bakery", "Deli", "Dairy & Eggs", "Meat & Fish", "Pantry", "Canned Goods", "Condiments & Sauces", "Baking", "Frozen", "Snacks & Drinks", "Health & Beauty", "Paper & Cleaning", "Other"],
  "Trader Joe's":  ["Produce", "Bakery", "Deli", "Dairy & Eggs", "Meat & Fish", "Frozen", "Pantry", "Canned Goods", "Condiments & Sauces", "Baking", "Snacks & Drinks", "Other"],
  "Walmart":       ["Produce", "Bakery", "Deli", "Dairy & Eggs", "Meat & Fish", "Pantry", "Canned Goods", "Condiments & Sauces", "Baking", "Frozen", "Snacks & Drinks", "Paper & Cleaning", "Baby", "Pet", "Health & Beauty", "Other"],
  "Target":        ["Produce", "Bakery", "Deli", "Dairy & Eggs", "Meat & Fish", "Frozen", "Pantry", "Canned Goods", "Condiments & Sauces", "Baking", "Snacks & Drinks", "Paper & Cleaning", "Baby", "Pet", "Health & Beauty", "Other"],
  "Costco":        ["Produce", "Bakery", "Deli", "Dairy & Eggs", "Meat & Fish", "Pantry", "Canned Goods", "Baking", "Frozen", "Snacks & Drinks", "Paper & Cleaning", "Health & Beauty", "Other"],
  "Kroger":        ["Produce", "Bakery", "Deli", "Dairy & Eggs", "Meat & Fish", "Frozen", "Canned Goods", "Condiments & Sauces", "Baking", "Pantry", "Snacks & Drinks", "Paper & Cleaning", "Baby", "Pet", "Health & Beauty", "Other"],
  "Safeway":       ["Produce", "Bakery", "Deli", "Dairy & Eggs", "Meat & Fish", "Frozen", "Canned Goods", "Condiments & Sauces", "Baking", "Pantry", "Snacks & Drinks", "Paper & Cleaning", "Health & Beauty", "Other"],
  "Publix":        ["Produce", "Bakery", "Deli", "Dairy & Eggs", "Meat & Fish", "Frozen", "Canned Goods", "Condiments & Sauces", "Baking", "Pantry", "Snacks & Drinks", "Paper & Cleaning", "Baby", "Pet", "Health & Beauty", "Other"],
  "Aldi":          ["Produce", "Bakery", "Dairy & Eggs", "Meat & Fish", "Frozen", "Canned Goods", "Pantry", "Baking", "Snacks & Drinks", "Paper & Cleaning", "Health & Beauty", "Other"],
  "Stop & Shop":   ["Produce", "Bakery", "Deli", "Dairy & Eggs", "Meat & Fish", "Frozen", "Canned Goods", "Condiments & Sauces", "Baking", "Pantry", "Snacks & Drinks", "Paper & Cleaning", "Baby", "Pet", "Health & Beauty", "Other"],
  "Wegmans":       ["Produce", "Bakery", "Deli", "Dairy & Eggs", "Meat & Fish", "Frozen", "Canned Goods", "Condiments & Sauces", "Baking", "Pantry", "Snacks & Drinks", "Paper & Cleaning", "Health & Beauty", "Other"],
  "Amazon Fresh":  ["Produce", "Bakery", "Deli", "Dairy & Eggs", "Meat & Fish", "Frozen", "Canned Goods", "Condiments & Sauces", "Baking", "Pantry", "Snacks & Drinks", "Paper & Cleaning", "Baby", "Health & Beauty", "Other"],
};

/**
 * getStoreAisleOrder(storeName) — Returns an ordered array of aisle/category names
 * for the given store. If no store is selected or unrecognized, returns null
 * (caller falls back to alphabetical sort).
 */
export function getStoreAisleOrder(storeName) {
  if (!storeName) return null;
  return _STORE_AISLE_ORDER[storeName] || null;
}

// ── RESTOCK THRESHOLD DEFAULTS ──────────────────────────────────────────────
// Smart default restock thresholds based on unit type. Container-type units
// (bottles, jars, etc.) default to 1; quantity-type units (pieces, bags, etc.)
// default to 2. Used by "Running Low" on Home and "Already have" check in Shopping.

const _THRESH_ONE_SET = new Set(["Bottle","Jar","Can","Carton","Bucket","Bunch","Container","Head","Loaf","Dozen","Tube","Roll","Gallon","Half Gallon","Liter"]);
const _THRESH_TWO_SET = new Set(["Piece","Unit","Pack","Box","Bag","Bar","Pound","Oz","Clove"]);

/**
 * defaultThreshold(unit) — Returns the smart default restock threshold
 * based on the unit of measure. Container-type units default to 1,
 * quantity-type units default to 2.
 */
export function defaultThreshold(unit) {
  if (!unit) return 2;
  if (_THRESH_ONE_SET.has(unit)) return 1;
  if (_THRESH_TWO_SET.has(unit)) return 2;
  return 2;
}

// ── VOICE MULTI-ITEM PARSING ────────────────────────────────────────────────
// Shared parser used by both Shopping and Supplies voice input to split a
// spoken transcript into multiple items (e.g. "milk, bread, and eggs").

/**
 * parseVoiceMultiItems(text) — Splits a voice transcript into individual items.
 * Handles patterns like "milk, bread, and eggs" or "add milk also bread plus eggs".
 * Strips common filler words ("add", "get", "buy", etc.) from the beginning.
 * Each item gets optional quantity parsing (e.g. "5 apples" → qty 5, name "apples").
 * @returns {Array<{name: string, qty: number}>}
 */
export function parseVoiceMultiItems(text) {
  // Strip common leading filler words
  let cleaned = text.replace(/^(add|get|buy|grab|pick up|i need|we need)\s+/i, "").trim();

  // Split on commas, " and ", " also ", " plus "
  const parts = cleaned
    .split(/\s*,\s*|\s+and\s+|\s+also\s+|\s+plus\s+/i)
    .map(s => s.trim())
    .filter(s => s.length > 0);

  // Parse each segment for optional leading/trailing quantity
  return parts.map(segment => {
    let name = segment, qty = 1;
    const leadMatch = segment.match(/^(\d+)\s+(.+)/);
    const trailMatch = segment.match(/^(.+?)\s*[x×]\s*(\d+)$/i);
    if (trailMatch) { name = trailMatch[1].trim(); qty = parseInt(trailMatch[2], 10) || 1; }
    else if (leadMatch) { name = leadMatch[2].trim(); qty = parseInt(leadMatch[1], 10) || 1; }
    return { name, qty };
  });
}
