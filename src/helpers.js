// ── SHARED UI HELPERS ────────────────────────────────────────────────────────
// Small utility functions used across multiple UI modules in the pantry app.
// These cover DOM access, date math, item categorization, display formatting,
// overlay management, and store-aisle guessing.

import { state } from './state.js';

/**
 * Converts a string to Title Case (first letter of each word capitalized).
 * Used across all product name displays for consistent formatting.
 */
export function toTitleCase(str) {
  if (!str) return "";
  return str.replace(/\w\S*/g, t => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase());
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
 * The notification auto-hides after 2.5 seconds using a CSS animation
 * named "fn" (fade-notification).
 *
 * @param {string} msg - The message to display.
 */
export function showNotif(msg) {
  const el = g("notif");
  if (!el) return;
  el.textContent = msg;
  el.style.display = "block";
  // Reset animation: set to "none", force a reflow via offsetWidth read,
  // then re-apply. This restarts the CSS animation even if the element
  // was already animating from a previous notification.
  el.style.animation = "none";
  void el.offsetWidth; // Force reflow — without this the browser won't restart the animation
  el.style.animation = "fn 2.5s ease forwards";
  // Cancel any existing hide-timer so rapid-fire notifications don't
  // disappear too early
  if (_notifTimer) clearTimeout(_notifTimer);
  _notifTimer = setTimeout(() => el.style.display = "none", 2500);
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
  "Produce": ["apple", "banana", "carrot", "celery", "onion", "garlic", "tomato", "lettuce", "cucumber", "pepper", "broccoli", "spinach", "mushroom", "lemon", "lime", "herb", "cabbage", "squash", "jalap", "avocado", "potato", "ginger"],
  "Meat & Fish": ["chicken", "beef", "lamb", "turkey", "salmon", "cod", "tuna", "fish", "steak", "shrimp", "pork", "bacon", "sausage", "ground"],
  "Dairy & Eggs": ["egg", "butter", "cheese", "milk", "cream", "yogurt", "ghee", "kefir"],
  "Frozen": ["frozen", "ice cream", "pizza", "nugget", "waffle", "edamame", "okra", "lima", "broccoli floret"],
  "Pantry": ["rice", "pasta", "flour", "oil", "vinegar", "sauce", "spice", "salt", "pepper", "sugar", "honey", "oat", "bread", "can", "bean", "lentil", "chickpea", "stock", "broth"],
  "Snacks & Drinks": ["chip", "cracker", "cookie", "juice", "soda", "water", "tea", "coffee", "snack", "nut", "seed"]
};

/**
 * Guesses which store aisle a shopping-list item belongs to, based on keyword
 * matching against the AISLES map above. Returns "Other" if no keywords match.
 *
 * @param {string} name - The item name (e.g., "cheddar cheese").
 * @returns {string} An aisle name like "Dairy & Eggs", or "Other" as fallback.
 */
export function guessAisle(name) {
  const n = name.toLowerCase();
  // Check each aisle's keyword list; first match wins
  for (const [aisle, kws] of Object.entries(AISLES)) {
    if (kws.some(k => n.includes(k))) return aisle;
  }
  return "Other";
}
