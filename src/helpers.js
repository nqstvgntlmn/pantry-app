// ── SHARED UI HELPERS ────────────────────────────────────────────────────────
// Small utility functions used across multiple UI modules.

import { state } from './state.js';

// g(id) — getElementById shorthand
export function g(id) { return document.getElementById(id); }

// tk() — returns today's date as "YYYY-MM-DD"
export function tk() { return new Date().toISOString().split("T")[0]; }

// wDates() — returns array of 7 Date objects for the current Sun–Sat week
export function wDates() {
  const t = new Date(); t.setHours(0, 0, 0, 0);
  const s = new Date(t); s.setDate(t.getDate() - t.getDay());
  return Array.from({ length: 7 }, (_, i) => { const d = new Date(s); d.setDate(s.getDate() + i); return d; });
}

// nextDay() — returns tomorrow's date as "YYYY-MM-DD"
export function nextDay() {
  const d = new Date(); d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
}

// xSt(expiryDateString) — returns expiry status {c, l}
//   c: "expired" | "expiring" | "ok"
//   l: human-readable label
export function xSt(exp) {
  if (!exp) return null;
  const t = new Date(); t.setHours(0, 0, 0, 0);
  const e = new Date(exp + "T00:00:00");
  const d = Math.round((e - t) / 86400000);
  if (d < 0) return { c: "expired", l: "Expired" };
  if (d === 0) return { c: "expiring", l: "Expires today" };
  if (d <= 7) return { c: "expiring", l: `Expires in ${d}d` };
  return { c: "ok", l: e.toLocaleDateString("en-US", { month: "short", day: "numeric" }) };
}

// ll(location) — display label for a storage location key
export function ll(l) {
  return { fridge: "🌡 Fridge", freezer: "🧊 Freezer", pantry: "🥫 Pantry" }[l] || l;
}

// Category icon map
export const CATS = {
  Produce: "🥦", Proteins: "🍗", Dairy: "🧀", Grains: "🌾",
  Condiments: "🧴", Snacks: "🍿", Beverages: "🥤", Frozen: "❄️",
  General: "📦", Imported: "📥"
};

// gcat(item) — infers the best category string for an item
export function gcat(item) {
  const n = (item.name || "").toLowerCase();
  const c = (item.category || "").toLowerCase();
  if (c.includes("produce") || c.includes("vegetable") || c.includes("fruit") || n.match(/apple|banana|broccoli|carrot|celery|cabbage|tomato|onion|garlic|jalap|spinach|mushroom|squash|lettuce|cucumber|pepper/)) return "Produce";
  if (c.includes("protein") || c.includes("meat") || c.includes("seafood") || c.includes("poultry") || n.match(/chicken|beef|lamb|turkey|salmon|cod|tuna|fish|steak|pork|shrimp/)) return "Proteins";
  if (c.includes("dairy") || c.includes("egg") || n.match(/egg|butter|cheese|milk|cream|yogurt|ghee/)) return "Dairy";
  if (c.includes("grain") || c.includes("bread") || c.includes("pasta") || n.match(/rice|pasta|bread|flour|oat|cereal|grain|noodle|tortilla/)) return "Grains";
  if (c.includes("condiment") || c.includes("sauce") || n.match(/sauce|ketchup|mustard|oil|vinegar|salt|pepper|spice|herb|seasoning|mayo/)) return "Condiments";
  if (item.location === "freezer") return "Frozen";
  return "General";
}

// fmtR(text) — format Claude response text as HTML
// Converts markdown-ish response into displayable HTML
export function fmtR(text) {
  return text
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/^\d+\.\s+(.+)$/gm, "<div style='margin:4px 0'>• $1</div>")
    .replace(/^[-•]\s+(.+)$/gm, "<div style='margin:4px 0'>• $1</div>")
    .replace(/\n/g, "<br>");
}

// showNotif(msg) — displays a toast notification
let _notifTimer = null;
export function showNotif(msg) {
  const el = g("notif");
  if (!el) return;
  el.textContent = msg;
  el.style.display = "block";
  el.style.animation = "none";
  void el.offsetWidth;
  el.style.animation = "fn 2.5s ease forwards";
  if (_notifTimer) clearTimeout(_notifTimer);
  _notifTimer = setTimeout(() => el.style.display = "none", 2500);
}

// showOv(name) — show an overlay
export function showOv(n) { g("ov-" + n)?.classList.add("active"); }

// hideOv(name) — hide an overlay
export function hideOv(n) { g("ov-" + n)?.classList.remove("active"); }

// renderStars(containerId, rating) — renders star rating UI
export function renderStars(id, n) {
  const el = g(id);
  if (!el) return;
  el.querySelectorAll(".star").forEach((s, i) => {
    s.textContent = i < n ? "★" : "☆";
    s.classList.toggle("on", i < n);
  });
}

// guessLocation(name) — infers the best storage location for a grocery item
export function guessLocation(name) {
  const n = name.toLowerCase();
  if (/frozen|ice cream|pizza|nugget|waffle|tater|edamame|popsicle/.test(n)) return "freezer";
  if (/milk|cheese|yogurt|butter|cream|egg|meat|chicken|beef|pork|fish|salmon|shrimp|tofu|deli|bacon|sausage|produce|lettuce|spinach|berry|berries|fruit|vegetable|carrot|broccoli|juice/.test(n)) return "fridge";
  return "pantry";
}

// Aisle grouping map for shopping list
export const AISLES = {
  "Produce": ["apple", "banana", "carrot", "celery", "onion", "garlic", "tomato", "lettuce", "cucumber", "pepper", "broccoli", "spinach", "mushroom", "lemon", "lime", "herb", "cabbage", "squash", "jalap", "avocado", "potato", "ginger"],
  "Meat & Fish": ["chicken", "beef", "lamb", "turkey", "salmon", "cod", "tuna", "fish", "steak", "shrimp", "pork", "bacon", "sausage", "ground"],
  "Dairy & Eggs": ["egg", "butter", "cheese", "milk", "cream", "yogurt", "ghee", "kefir"],
  "Frozen": ["frozen", "ice cream", "pizza", "nugget", "waffle", "edamame", "okra", "lima", "broccoli floret"],
  "Pantry": ["rice", "pasta", "flour", "oil", "vinegar", "sauce", "spice", "salt", "pepper", "sugar", "honey", "oat", "bread", "can", "bean", "lentil", "chickpea", "stock", "broth"],
  "Snacks & Drinks": ["chip", "cracker", "cookie", "juice", "soda", "water", "tea", "coffee", "snack", "nut", "seed"]
};

// guessAisle(name) — returns the most likely store aisle for an item
export function guessAisle(name) {
  const n = name.toLowerCase();
  for (const [aisle, kws] of Object.entries(AISLES)) {
    if (kws.some(k => n.includes(k))) return aisle;
  }
  return "Other";
}
