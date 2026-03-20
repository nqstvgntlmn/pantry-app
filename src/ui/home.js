// ── HOME SCREEN ──────────────────────────────────────────────────────────────
// This module owns the entire Home screen: the greeting banner, the 7-day meal
// week grid, stat summary cards, expiring-items list, "Tonight's Dinner" card,
// and the plain-text inventory export panel.
//
// Key helpers imported from helpers.js:
//   g(id)       — document.getElementById shorthand
//   tk()        — today's date as "YYYY-MM-DD"
//   wDates()    — array of 7 Dates for the current Sun–Sat week
//   xSt(expiry) — returns { c: "expired"|"expiring"|"ok", l: label }
//   ll(loc)     — human-readable storage-location label ("fridge" → "🌡 Fridge")

import { state, J, Js } from '../state.js';
import { g, tk, wDates, xSt, ll, showNotif, showOv, hideOv, toTitleCase, formatQtyWithUnit, combineQty, applyTitleCaseWhileTyping, gcat, FRAC_OPTIONS } from '../helpers.js';
import { saveMp, dbList, svi } from '../db.js';
import { consolidateShopItem, _getProductPreference } from './shopping.js'; // Consolidation-aware add to shopping list + product preferences
import { UNITS } from './inventory.js'; // Shared unit list for the qty toolbar

// initHome() — called once on app boot.
// Sets the time-aware greeting ("Good morning/afternoon/evening"), displays
// today's full date, and kicks off the first render of the week grid.
export function initHome() {
  // Determine greeting based on current hour
  const h = new Date().getHours();
  const gr = h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening";

  // Resolve the user's display name: prefer localStorage override ("ks-who"),
  // fall back to the first adult listed in household config
  const u = localStorage.getItem("ks-who") || (state.cfg.adults || "Bora").split(",")[0].trim();

  // Render "Good morning, <Name>" into the greeting element
  const grtEl = g("grt");
  if (grtEl) grtEl.innerHTML = `${gr}, <span>${u}</span>`;

  // Show today's date in a human-friendly format, e.g. "Monday, March 9"
  const hdtEl = g("hdt");
  if (hdtEl) hdtEl.textContent = new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });

  renderWeek();
}

// renderAll() — convenience function that refreshes both the Home screen and
// the Inventory screen in one call. Used after data changes that affect both
// views (e.g., marking an item as used, syncing from Firestore).
export function renderAll() { renderHome(); renderInvFn?.(); }

// Inventory render function, registered at runtime by inventory.js via
// setRenderInv(). This indirection avoids a circular import: home.js needs to
// trigger an inventory re-render, but inventory.js already imports from home.js.
let renderInvFn = null;
// Called by inventory.js during init to hand us its render function
export function setRenderInv(fn) { renderInvFn = fn; }

// renderHome() — full re-render of every section on the Home screen.
// Called whenever underlying data changes (inventory, meal plan, shopping list).
// Unlike initHome(), this skips overwriting the greeting if it was already set
// (the `!grtEl.innerHTML` guard), so we don't flicker on every data refresh.
export function renderHome() {
  const h = new Date().getHours();
  const gr = h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening";
  const u = localStorage.getItem("ks-who") || (state.cfg.adults || "Bora").split(",")[0].trim();

  // Only populate greeting once — avoids overwriting on repeated renders
  const grtEl = g("grt");
  if (grtEl && !grtEl.innerHTML) grtEl.innerHTML = `${gr}, <span>${u}</span>`;

  // Refresh every home-screen section
  renderWeek();     // 7-day meal plan grid
  renderSum();      // numeric stat cards (inventory count, expiring, shopping, recipes)
  renderExp();      // expiring-soon item list
  renderLowStock(); // "Running Low" item list
  renderTonight();  // "Tonight's Dinner" card
  renderLastCooked(); // "Last cooked" line below Tonight's Dinner
  renderActivityFeed(); // Recent household activity
  updExport();      // plain-text inventory export panel
  // Apply collapsed/expanded state to collapsible sections
  _applyAllHomeSectionStates();
}

// ── COLLAPSIBLE HOME SECTIONS ─────────────────────────────────────────────────
// "Running Low" and "Recent Activity" can be collapsed/expanded by tapping
// their headers. State is persisted in localStorage so it survives sessions.

/**
 * toggleHomeSection(key) — Toggles the collapsed/expanded state of a home
 * screen section. Updates the arrow indicator and saves state to localStorage.
 * @param {string} key — Section key: "lowstock" or "activity"
 */
export function toggleHomeSection(key) {
  const lsKey = `ks-home-${key}-collapsed`;
  // Default to collapsed (true) if never toggled before
  const isCollapsed = J(lsKey) !== false;
  Js(lsKey, !isCollapsed);

  // Update the body visibility and arrow direction
  _applyHomeSectionState(key);
}

/**
 * _applyHomeSectionState(key) — Reads the collapsed state from localStorage
 * and applies it to the DOM: hides/shows the body, rotates the arrow.
 */
function _applyHomeSectionState(key) {
  const lsKey = `ks-home-${key}-collapsed`;
  // Default to collapsed if localStorage has no value (first visit)
  const isCollapsed = J(lsKey) !== false;
  const arrow = g(`${key}-arrow`);
  // Map section keys to their body element IDs
  const bodyMap = { lowstock: "lowstocklist", activity: "activityfeed", cooktonight: "cooktonightbody" };
  const body = g(bodyMap[key] || key);

  // Toggle CSS classes for arrow rotation and body collapse animation
  if (arrow) {
    if (isCollapsed) arrow.classList.add("collapsed");
    else arrow.classList.remove("collapsed");
  }
  if (body) {
    if (isCollapsed) body.classList.add("collapsed");
    else body.classList.remove("collapsed");
  }
}

/**
 * _applyAllHomeSectionStates() — Applies collapsed/expanded state to all
 * collapsible sections on the home screen. Called after each render.
 */
function _applyAllHomeSectionStates() {
  _applyHomeSectionState("lowstock");
  _applyHomeSectionState("activity");
}

// renderTonight() — updates the "Tonight's Dinner" card on the home screen.
// If a meal is planned for today, it shows the meal name with action buttons
// that reflect the cooked state. If no meal is planned, it shows a prompt.
export function renderTonight() {
  const td = tk();              // today's date key, e.g. "2026-03-09"
  const m = state.mp[td];      // meal plan entry for today (string or undefined)
  const d = g("tnd");          // dinner name display element
  const a = g("tna");          // dinner action buttons container
  const card = g("tonight-main"); // the entire clickable card wrapper
  const isCooked = !!state.mpCooked[td]; // whether today's meal is already marked cooked

  // Clicking anywhere on the card opens the meal detail sheet (if meal exists) or planner
  if (card) card.onclick = function() {
    if (m) window.openMealDetail(td, "Today");
    else window.openMealM(td, "Today");
  };

  if (m) {
    // A meal is planned: show its name and contextual action buttons
    if (d) d.innerHTML = m;
    if (isCooked) {
      // Already cooked — show confirmed label and edit option
      if (a) a.innerHTML = `<span style="color:var(--ac);font-size:.84rem;font-weight:600;display:inline-flex;align-items:center;gap:4px">✓ Cooked</span><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${td}','Today')">Edit</button>`;
    } else {
      // Not yet cooked — "Mark as Cooked" opens the meal detail sheet; "Edit" opens planner
      if (a) a.innerHTML = `<button class="btn bsm bs" onclick="event.stopPropagation();openMealDetail('${td}','Today')">🍳 Mark as Cooked</button><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${td}','Today')">Edit</button>`;
    }
  } else {
    // No meal planned: show placeholder text with "Find recipes" and "Ask Claude" buttons
    // Enhanced empty state — warm, inviting prompt
    if (d) d.innerHTML = `<span style="font-size:.9rem;color:var(--mt);font-style:italic">Nothing planned yet — what are you craving? 🍽️</span>`;
    if (a) a.innerHTML = `<button class="btn bsm bs" onclick="event.stopPropagation();openRecipeMatch()">🔍 Find recipes</button><button class="btn bsm bs" onclick="event.stopPropagation();showScreen('chat')">Ask Claude →</button>`;
  }
}

// renderLastCooked() — shows the most recently cooked meal below Tonight's Dinner.
// Scans the activity feed for entries with action="cooked", picks the most recent,
// and displays "Last cooked: [Name] — [X days ago]". Hidden if nothing has been cooked.
function renderLastCooked() {
  const el = g("lastcooked");
  if (!el) return;

  // Find the most recent "cooked" entry in the activity feed
  const entries = state.activity || [];
  const cooked = entries.find(e => e.action === "cooked");

  if (!cooked) {
    el.style.display = "none";
    return;
  }

  // Extract the recipe name from the itemName field (strip trailing " tonight 🍳" suffix)
  const recipeName = (cooked.itemName || "").replace(/\s*tonight\s*🍳?\s*$/i, "").trim();
  if (!recipeName) { el.style.display = "none"; return; }

  // Calculate days ago from the timestamp
  const diff = Date.now() - new Date(cooked.timestamp).getTime();
  const days = Math.floor(diff / 86400000);
  let agoText;
  if (days === 0) agoText = "today";
  else if (days === 1) agoText = "yesterday";
  else agoText = days + " days ago";

  el.style.display = "block";
  el.innerHTML = `🍳 Last cooked: <strong style="color:var(--tx)">${recipeName}</strong> — ${agoText}`;
}

// ── WEEK NAVIGATION STATE ─────────────────────────────────────────────────────
// _weekOffset tracks how many weeks forward (+) or backward (-) from the
// current week. Resets to 0 on app load — does not persist across sessions.
let _weekOffset = 0;

/**
 * _getWeekDates(offset) — Returns an array of 7 Date objects (Sun–Sat) for
 * the week that is `offset` weeks away from the current week.
 * offset=0 is this week, offset=-1 is last week, offset=1 is next week.
 */
function _getWeekDates(offset) {
  const t = new Date(); t.setHours(0, 0, 0, 0);
  // Rewind to Sunday of the current week
  const s = new Date(t); s.setDate(t.getDate() - t.getDay());
  // Shift by offset weeks (7 days per week)
  s.setDate(s.getDate() + (offset * 7));
  return Array.from({ length: 7 }, (_, i) => { const d = new Date(s); d.setDate(s.getDate() + i); return d; });
}

/**
 * changeWeek(dir) — Navigates the "This Week" calendar forward or backward.
 * dir = -1 for previous week, +1 for next week.
 */
export function changeWeek(dir) {
  _weekOffset += dir;
  renderWeek();
}

// renderWeek() — builds the 7-day (Sun–Sat) meal-plan grid.
// Each day cell shows the day letter, date number, and (if a meal is planned)
// a truncated meal name. Clicking a cell opens the meal-plan modal for that date.
// Supports week navigation via _weekOffset — today is always highlighted in gold.
// After rendering, it checks whether the week's meals lack cuisine variety.
export function renderWeek() {
  const ns = ["S", "M", "T", "W", "T", "F", "S"]; // day-of-week abbreviations
  const t = new Date(); t.setHours(0, 0, 0, 0);    // midnight today, for "is today?" comparison

  const wgrd = g("wgrd"); // the week-grid container element
  if (!wgrd) return;

  // Get dates for the displayed week (may differ from current week)
  const weekDates = _getWeekDates(_weekOffset);

  // Update the week header label to show the date range and nav arrows
  const weekLbl = g("weekLbl");
  if (weekLbl) {
    const startDate = weekDates[0];
    const endDate = weekDates[6];
    // Format as "Mar 9 – 15" or "Mar 30 – Apr 5" if months differ
    const startMonth = startDate.toLocaleDateString("en-US", { month: "short" });
    const endMonth = endDate.toLocaleDateString("en-US", { month: "short" });
    const rangeStr = startMonth === endMonth
      ? `${startMonth} ${startDate.getDate()} – ${endDate.getDate()}`
      : `${startMonth} ${startDate.getDate()} – ${endMonth} ${endDate.getDate()}`;
    // Show "This Week" when on current week, otherwise the date range
    weekLbl.textContent = _weekOffset === 0 ? "This Week" : rangeStr;
  }

  // Build one cell per day of the displayed week
  wgrd.innerHTML = weekDates.map((d, i) => {
    const k = d.toISOString().split("T")[0]; // date key, e.g. "2026-03-09"
    const iss = d.getTime() === t.getTime(); // true if this cell is today (regardless of week)
    const m = state.mp[k];                   // meal plan text for this date (if any)

    // "today" class highlights the current day in gold; "hm" (has-meal) adds a filled style;
    // "hm-cooked" adds a checkmark style for cooked meals.
    // If a meal is planned, tapping opens the meal detail sheet; otherwise opens the meal planner.
    const cooked = state.mpCooked[k];
    const clickHandler = m
      ? `openMealDetail('${k}','${ns[i]} ${d.getDate()}')`
      : `openMealM('${k}','${ns[i]} ${d.getDate()}')`;
    return `<div class="wd${iss ? " today" : ""}${m ? " hm" : ""}${cooked ? " hm-cooked" : ""}" onclick="${clickHandler}"><div class="wdn">${ns[i]}</div><div class="wdd">${d.getDate()}</div>${m ? `<div class="wdm">${m}</div>` : ""}</div>`;
  }).join("");

  // After rendering the grid, evaluate whether the week needs more variety
  checkVarietyNudge();
}

// checkVarietyNudge() — analyzes the current week's meal plan and shows a
// gentle warning banner if the same meal is repeated 3+ times in one week.
// The cuisine-specific nudges have been removed per user request.
// The banner is hidden entirely when fewer than 3 meals are planned.
function checkVarietyNudge() {
  const el = g("variety-nudge"); // the nudge banner element
  if (!el) return;

  // Gather all planned meal names for the displayed week, ignoring empty days
  const meals = _getWeekDates(_weekOffset).map(d => state.mp[d.toISOString().split("T")[0]]).filter(Boolean);

  // Not enough meals planned to make a meaningful variety judgment
  if (meals.length < 3) { el.style.display = "none"; return; }

  // Count how many times each exact meal name appears (case-insensitive)
  const counts = {}; meals.forEach(m => { const w = m.toLowerCase(); counts[w] = (counts[w] || 0) + 1; });
  // Flag if any meal is repeated 3 or more times in one week
  const repeat = Object.entries(counts).find(([, c]) => c >= 3);

  // Only show a nudge for excessive repetition — hide otherwise
  if (repeat) { el.style.display = "block"; el.innerHTML = "🔄 <strong>" + repeat[0] + "</strong> is planned " + repeat[1] + "× this week — maybe try something different?"; }
  else { el.style.display = "none"; }
}

// renderSum() — updates the numeric summary cards at the top of the home screen.
// There are two display areas:
//   1. The "expiring" and "shopping" text cards (home-exp-val/sub, home-shop-val/sub)
//   2. The 4-tile stat grid (sgrd) showing inventory count, expiring, to-buy, and recipes
export function renderSum() {
  // Count inventory items that are expired or expiring within 7 days
  const ex = state.inv.filter(i => { const s = xSt(i.expiry); return s && (s.c === "expiring" || s.c === "expired"); }).length;
  // Count unchecked (still-needed) shopping list items
  const tb = state.shop.filter(i => !i.checked).length;

  // -- Expiring-items text card --
  const expV = g("home-exp-val"), expS = g("home-exp-sub");
  if (expV) {
    if (ex > 0) {
      // Show count in amber/warning color when items are expiring
      expV.textContent = ex + " item" + (ex > 1 ? "s" : "");
      expV.className = "tc-val";
      expV.style.color = "var(--am)"; // amber warning color from CSS variables
    } else {
      // Green "all clear" state when nothing is expiring
      expV.textContent = "All fresh!";
      expV.className = "tc-val tc-green";
    }
  }
  if (expS) { expS.textContent = ex > 0 ? "expiring soon" : "Nothing in next 3 days"; }

  // -- Shopping-list text card --
  const shopV = g("home-shop-val"), shopS = g("home-shop-sub");
  if (shopV) shopV.textContent = tb;
  // Pluralize correctly: "1 item to buy", "0 → all stocked up", "3 items to buy"
  if (shopS) shopS.textContent = tb === 1 ? "item to buy" : tb === 0 ? "all stocked up" : "items to buy";

  // -- 4-tile stat grid: inventory count, expiring count, to-buy count, saved recipes --
  // Each tile is clickable and navigates to the relevant screen.
  // The "expiring" tile gets a "warn" class when items need attention.
  const sgrd = g("sgrd");
  if (sgrd) sgrd.innerHTML = `<div class="sc" onclick="showScreen('inventory')"><div class="sci">🧺</div><div class="scv">${state.inv.length}</div><div class="scl">Items in stock</div></div><div class="sc${ex > 0 ? " warn" : ""}" onclick="showScreen('inventory')"><div class="sci">⏱</div><div class="scv">${ex}</div><div class="scl">Expiring soon</div></div><div class="sc" onclick="showScreen('shopping')"><div class="sci">🛒</div><div class="scv">${tb}</div><div class="scl">To buy</div></div><div class="sc" onclick="showScreen('recipes')"><div class="sci">📖</div><div class="scv">${state.recs.length}</div><div class="scl">Saved recipes</div></div>`;
}

// renderExp() — renders the "Expiring Soon" item list on the home screen.
// Filters inventory to items that are expired or expiring within 7 days,
// sorts them by expiry date (soonest first), and builds a clickable list.
// Clicking an item opens the adjust/edit modal for that inventory item.
// If nothing is expiring, the section header and list are hidden entirely.
export function renderExp() {
  // Get all expiring/expired items, sorted earliest-expiry-first
  const ex = state.inv.filter(i => { const s = xSt(i.expiry); return s && (s.c === "expiring" || s.c === "expired"); }).sort((a, b) => new Date(a.expiry) - new Date(b.expiry));

  const l = g("exslbl"); // section label/header ("Expiring Soon")
  const e = g("expl");   // list container for expiring items
  if (!l || !e) return;

  // Hide the entire section when there's nothing expiring
  if (!ex.length) { l.style.display = "none"; e.innerHTML = ""; return; }

  // Show the section and render each item as a row.
  // Items that are already expired get an extra "exp" class for red styling.
  // Each row shows the item name and its expiry label (e.g. "Expires in 2d").
  l.style.display = "flex";
  e.innerHTML = ex.map(item => { const s = xSt(item.expiry); return `<div class="exi${s.c === "expired" ? " exp" : ""}" onclick="openAdj('${item.id}')"><div class="exn">${toTitleCase(item.name)}</div><div class="exd">${s.l}</div></div>`; }).join("");
}

// ─── LOW STOCK ALERTS ────────────────────────────────────────────────────────
// Shows items that are at or below their low-stock threshold on the home screen.
// Each item can be added to the shopping list with one tap.

// Units that typically come in single-count containers — threshold 1
const _THRESH_ONE = new Set(["Bottle","Jar","Can","Carton","Bucket","Bunch","Container","Head","Loaf","Dozen","Tube","Roll","Gallon","Half Gallon","Liter"]);
// Units that typically come in multi-count — threshold 2
const _THRESH_TWO = new Set(["Piece","Unit","Pack","Box","Bag","Pound","Oz","Clove"]);

/**
 * _defaultThreshold(unit) — Returns the smart default restock threshold
 * based on the unit of measure. Container-type units default to 1,
 * quantity-type units default to 2.
 */
export function _defaultThreshold(unit) {
  if (!unit) return 2; // default "Unit" → threshold 2
  if (_THRESH_ONE.has(unit)) return 1;
  if (_THRESH_TWO.has(unit)) return 2;
  return 2; // fallback
}

// renderLowStock() — renders the "Running Low" section on the home screen.
// Items are considered low when qty <= their restock threshold (smart defaults by unit).
// Items with doNotRestock:true are excluded. Sorted alphabetically (A-Z, case-insensitive).
function renderLowStock() {
  const low = state.inv
    .filter(i => {
      // Skip items marked as "don't restock"
      if (i.doNotRestock) return false;
      // Use item's custom threshold, or smart default based on unit type
      const thresh = i.restockThreshold != null ? i.restockThreshold : _defaultThreshold(i.unit);
      return i.qty <= thresh;
    })
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));

  const lbl = g("lowstocklbl");
  const lst = g("lowstocklist");
  if (!lbl || !lst) return;

  // Hide the section if nothing is running low
  if (!low.length) { lbl.style.display = "none"; lst.innerHTML = ""; return; }

  lbl.style.display = "flex";
  // Layout: item name + qty/unit on left, compact add button on right
  lst.innerHTML = low.map(item => `<div class="exi" style="border-color:var(--am)" onclick="openAdj('${item.id}')">
    <div style="flex:1;min-width:0">
      <div class="exn">${toTitleCase(item.name)}</div>
      <div style="font-size:.7rem;color:var(--am);font-weight:600;margin-top:1px">${formatQtyWithUnit(item.qty, item.unit)}</div>
    </div>
    <button class="low-add-btn" onclick="event.stopPropagation();addLowToShop('${item.id}')">🛒 Add</button>
  </div>`).join("");
}

// addLowToShop(id) — adds a low-stock inventory item to the shopping list
// with one tap. Prevents duplicates by checking if the item is already listed.
export async function addLowToShop(id) {
  const item = state.inv.find(i => i.id === id);
  if (!item) return;

  // Consolidate with existing items — increments qty if already on the list
  const result = await consolidateShopItem({
    id: "shop-" + Date.now() + "-" + Math.random().toString(36).slice(2),
    name: item.name,
    qty: 1,
    checked: false,
    src: "low-stock"
  });

  if (result.action === "new") {
    showNotif(`${item.name} added to shopping list 🛒`);
  } else {
    showNotif(`${item.name} quantity updated on shopping list 🛒`);
  }
}

// Badge on Supplies tab removed — per design requirement, no notification dot.

// ─── ACTIVITY FEED ───────────────────────────────────────────────────────────
// Shows recent household actions (e.g. "Bushra added Milk to shopping list")
// on the home screen so members can see what's changed.

// renderActivityFeed() — displays the last 3 activity entries from state.activity.
// state.activity is populated by the real-time Firestore listener in realtime.js,
// so all household members (including non-owners) see updates instantly.
function renderActivityFeed() {
  const el = g("activityfeed");
  const lbl = g("activitylbl");
  if (!el) return;

  // Use real-time activity data from state (populated by onSnapshot listener)
  const entries = state.activity || [];
  if (!entries.length) {
    if (lbl) lbl.style.display = "none";
    el.innerHTML = "";
    return;
  }

  // Always show the section label — no owner/role checks, all members see activity
  if (lbl) lbl.style.display = "flex";

  // Format relative time (e.g. "2 min ago", "3h ago", "yesterday")
  const ago = (ts) => {
    const diff = Date.now() - new Date(ts).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return "just now";
    if (mins < 60) return mins + "m ago";
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return hrs + "h ago";
    const days = Math.floor(hrs / 24);
    if (days === 1) return "yesterday";
    return days + "d ago";
  };

  // Show only the 3 most recent entries — keeps the feed compact for small households.
  // Item names are displayed in Title Case for consistency (handles legacy entries).
  el.innerHTML = entries.slice(0, 3).map(e =>
    `<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--b1)">
      <div style="width:28px;height:28px;border-radius:50%;background:var(--acd);display:flex;align-items:center;justify-content:center;font-size:.7rem;flex-shrink:0;color:var(--ac);font-weight:700">${(e.memberName || "?")[0].toUpperCase()}</div>
      <div style="flex:1;font-size:.82rem;color:var(--tx2);line-height:1.4;font-family:'DM Sans',sans-serif"><strong style="color:var(--tx);font-weight:600">${toTitleCase(e.memberName || "Someone").replace(/</g, "&lt;")}</strong> ${(e.action || "").replace(/</g, "&lt;")} <strong style="color:var(--tx);font-weight:600">${(e.itemName || "").replace(/</g, "&lt;")}</strong></div>
      <div style="font-size:.68rem;color:var(--mt);flex-shrink:0">${ago(e.timestamp)}</div>
    </div>`
  ).join("");
}

// ─── RECIPE MATCHING ("WHAT TO COOK TONIGHT?") ─────────────────────────────
// Matches community recipes against current Supplies inventory.
// Opens a full-screen overlay showing recipes sorted by ingredient match %.

/** How many recipes to show per page */
const _MATCH_PAGE_SIZE = 5;
/** All matched recipes (cached after first fetch per session) */
let _matchedRecipes = [];
/** How many are currently displayed */
let _matchShown = 0;

/**
 * _normalizeIngredient(name) — Normalizes an ingredient name for fuzzy matching.
 * Lowercases, trims, removes common quantity words and plurals so
 * "2 large eggs" matches inventory item "Egg".
 * Returns empty string for null, undefined, non-string, or empty values —
 * callers should filter these out before using the result.
 */
function _normalizeIngredient(name) {
  // Guard: only process non-empty strings — skip numbers, objects, null, etc.
  if (typeof name !== "string" || !name.trim()) return "";
  return name
    .toLowerCase()
    .trim()
    // Strip leading numbers, fractions, and common measurement words
    .replace(/^[\d\s\/\.½¼¾⅓⅔]+/, "")
    .replace(/\b(cups?|tbsp?|tsp?|tablespoons?|teaspoons?|ounces?|oz|lbs?|pounds?|grams?|g|kg|ml|liters?|cloves?|cans?|large|small|medium|fresh|dried|chopped|minced|sliced|diced|to taste|optional|about)\b/gi, "")
    .replace(/\s+/g, " ")
    .trim()
    // Remove trailing 's' for basic plural handling
    .replace(/s$/, "");
}

/**
 * _matchRecipeToInventory(recipe, invNames) — Calculates what percentage
 * of a recipe's ingredients are available in the current inventory.
 * Returns { matchPct, matchCount, totalCount, missing[] }.
 * Safely skips any ingredient that isn't a valid string (null, number, object, etc.)
 * and returns 0% match if a recipe has zero valid ingredients after filtering.
 */
function _matchRecipeToInventory(recipe, invNames) {
  // Get recipe ingredients — supports both array and raw string formats
  let ingredients = [];
  if (recipe.ingredientsRaw && Array.isArray(recipe.ingredientsRaw)) {
    ingredients = recipe.ingredientsRaw;
  } else if (recipe.ingredients && typeof recipe.ingredients === "string") {
    // Handle string format: split by newlines or semicolons
    ingredients = recipe.ingredients.split(/[;\n]+/).map(s => s.trim()).filter(Boolean);
  } else if (Array.isArray(recipe.ingredients)) {
    // Handle case where ingredients is already an array
    ingredients = recipe.ingredients;
  }

  // Filter to only valid, non-empty strings — skip nulls, numbers, objects, etc.
  const validIngredients = ingredients.filter(ing => typeof ing === "string" && ing.trim());

  // If no valid ingredients remain, skip this recipe entirely (avoids division by zero)
  if (!validIngredients.length) return { matchPct: 0, matchCount: 0, totalCount: 0, missing: [] };

  const missing = [];
  let matchCount = 0;
  const totalCount = validIngredients.length;

  for (const ing of validIngredients) {
    const norm = _normalizeIngredient(ing);
    if (!norm) { matchCount++; continue; } // skip measurement-only ingredients (e.g. "2 cups")

    // Check if any inventory item name matches (substring or vice versa)
    const found = invNames.some(invName => {
      return invName.includes(norm) || norm.includes(invName);
    });
    if (found) matchCount++;
    else missing.push(ing);
  }

  const matchPct = Math.round((matchCount / totalCount) * 100);
  return { matchPct, matchCount, totalCount, missing };
}

/**
 * openRecipeMatch() — Fetches community recipes and matches them against
 * the user's current Supplies inventory. Opens a full-screen overlay
 * showing the best matches sorted by match percentage.
 *
 * Distinguishes between four failure states:
 *   1. No supplies in inventory — prompt user to add items first
 *   2. No community recipes exist — tell user to publish some
 *   3. No matches above 40% threshold — encourage adding more supplies
 *   4. Actual Firestore/network error — show connection error + log details
 */
export async function openRecipeMatch() {
  const el = g("recipeMatchResults");
  if (!el) return;

  showOv("recipematch");
  el.innerHTML = '<div style="text-align:center;padding:40px 0"><div class="spin" style="width:32px;height:32px;margin:0 auto 12px"></div><div style="font-size:.85rem;color:var(--mt)">Matching recipes to your supplies…</div></div>';

  try {
    // Build a normalized set of inventory item names for matching
    const invNames = state.inv.map(i => _normalizeIngredient(i.name)).filter(Boolean);
    console.log("[RecipeMatch] Inventory items:", state.inv.length, "| Normalized names:", invNames.length);

    // If the user has no supplies, show a helpful prompt instead of running the match
    if (!invNames.length) {
      console.log("[RecipeMatch] No supplies in inventory — aborting match");
      el.innerHTML = '<div style="text-align:center;padding:40px 0;color:var(--mt)">Add some items to your Supplies so we can find recipes you can cook tonight!</div>';
      return;
    }

    // Fetch community recipes from public_recipes collection
    console.log("[RecipeMatch] Fetching public_recipes from Firestore…");
    const publicRecs = await dbList("public_recipes");
    console.log("[RecipeMatch] Fetched", publicRecs.length, "community recipes");

    // No community recipes published yet
    if (!publicRecs.length) {
      console.log("[RecipeMatch] No community recipes found");
      el.innerHTML = '<div style="text-align:center;padding:40px 0;color:var(--mt)">No community recipes available yet.</div>';
      return;
    }

    // Score each recipe by how well it matches current inventory
    console.log("[RecipeMatch] Scoring recipes against inventory…");
    _matchedRecipes = publicRecs
      .map(recipe => {
        const match = _matchRecipeToInventory(recipe, invNames);
        console.log(`[RecipeMatch]  "${recipe.title || recipe.name}": ${match.matchPct}% (${match.matchCount}/${match.totalCount})`);
        return { ...recipe, ...match };
      })
      .filter(r => r.matchPct >= 40) // Show recipes with >= 40% ingredient match (3 tiers)
      .sort((a, b) => b.matchPct - a.matchPct); // Best matches first

    console.log("[RecipeMatch] Recipes above 40% threshold:", _matchedRecipes.length);
    _matchShown = 0;
    _renderMatchPage(el);

  } catch (e) {
    // Actual error (Firestore failure, timeout, permissions, network)
    console.error("[RecipeMatch] Error during recipe matching:", e);
    console.error("[RecipeMatch] Error name:", e.name, "| message:", e.message);
    el.innerHTML = '<div style="text-align:center;padding:40px 0;color:var(--rd)">Couldn\'t load recipes — please check your connection and try again.</div>';
  }
}

/**
 * _renderMatchPage(el) — Renders the next page of matched recipe cards.
 * Shows 5 recipes at a time with a "Show 5 more" button for pagination.
 * Three tiers: 🟢 Ready (80-100%), 🟡 Almost there (60-79%), 🟠 Just a few things (40-59%).
 * Missing ingredients shown for 🟡 and 🟠 tiers with quick "Add to Shopping List" buttons.
 */
function _renderMatchPage(el) {
  // No recipes met the 40% threshold — distinct from "no community recipes" or errors
  if (!_matchedRecipes.length) {
    el.innerHTML = '<div style="text-align:center;padding:40px 0;color:var(--mt)">No matches yet — your pantry doesn\'t have enough ingredients for any community recipes right now. Try adding more items to Supplies!</div>';
    return;
  }

  const batch = _matchedRecipes.slice(_matchShown, _matchShown + _MATCH_PAGE_SIZE);
  _matchShown += batch.length;

  // Build HTML for this batch of recipe cards
  const cards = batch.map(recipe => {
    // Color-coded match percentage badge — three tiers
    let color, label, tierEmoji;
    if (recipe.matchPct >= 80) { color = "var(--gn)"; label = "Ready to cook"; tierEmoji = "🟢"; }
    else if (recipe.matchPct >= 60) { color = "var(--am)"; label = "Almost there"; tierEmoji = "🟡"; }
    else { color = "#e67e22"; label = "Just a few things needed"; tierEmoji = "🟠"; }

    // Cover photo or placeholder
    const coverImg = recipe.imageUrl
      ? `<img src="${recipe.imageUrl}" style="width:100%;height:140px;object-fit:cover;border-radius:12px 12px 0 0" alt="" onerror="this.style.display='none'"/>`
      : `<div style="width:100%;height:80px;background:var(--sf);border-radius:12px 12px 0 0;display:flex;align-items:center;justify-content:center;font-size:2rem">🍽</div>`;

    // Missing ingredients list with "Add to Shopping List" buttons — shown for 🟡 and 🟠 tiers
    // 🟢 tier (80-100%) doesn't show missing ingredients since user is ready to cook
    const showMissing = recipe.matchPct < 80 && recipe.missing.length > 0;
    const missingHtml = showMissing
      ? `<div style="margin-top:8px"><div style="font-size:.7rem;color:var(--mt);font-weight:600;margin-bottom:4px">Missing (${recipe.missing.length}):</div>${recipe.missing.map(m => {
          // Escape ingredient name for use in onclick attribute
          const escaped = m.replace(/'/g, "\\'").replace(/"/g, "&quot;");
          return `<div style="display:flex;align-items:center;gap:6px;margin:3px 0"><span style="flex:1;font-size:.72rem;padding:3px 8px;border-radius:8px;background:var(--rdd);color:var(--rd)">${m}</span><button onclick="event.stopPropagation();addMissingToShop('${escaped}')" style="flex-shrink:0;font-size:.62rem;padding:3px 8px;border-radius:8px;border:1px solid var(--ac);background:var(--acd);color:var(--ac);font-weight:600;cursor:pointer;white-space:nowrap">🛒 Add</button></div>`;
        }).join("")}</div>`
      : "";

    // Recipe metadata (cook time, cuisine)
    const meta = [recipe.cookTime, recipe.cuisine].filter(Boolean).join(" · ");

    return `<div style="background:var(--card);border:1.5px solid var(--b1);border-radius:14px;margin-bottom:12px;overflow:hidden;cursor:pointer" onclick="openComRecipe('${recipe.id}')">
      ${coverImg}
      <div style="padding:12px 14px">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
          <div style="font-family:'Fraunces',serif;font-size:1rem;font-weight:400;flex:1;line-height:1.3">${recipe.title || recipe.name || "Untitled"}</div>
          <div style="flex-shrink:0;font-size:.72rem;font-weight:700;padding:3px 10px;border-radius:20px;background:${color}22;color:${color}">${tierEmoji} ${recipe.matchPct}%</div>
        </div>
        <div style="font-size:.7rem;color:${color};font-weight:600;margin-top:3px">${label}</div>
        ${meta ? `<div style="font-size:.7rem;color:var(--mt);margin-top:4px">${meta}</div>` : ""}
        ${missingHtml}
      </div>
    </div>`;
  }).join("");

  // Append or replace content
  if (_matchShown <= _MATCH_PAGE_SIZE) {
    el.innerHTML = cards;
  } else {
    // Remove old "Show more" button before appending
    const oldBtn = el.querySelector(".match-more-btn");
    if (oldBtn) oldBtn.remove();
    el.insertAdjacentHTML("beforeend", cards);
  }

  // Add "Show 5 more" button if there are more results
  if (_matchShown < _matchedRecipes.length) {
    el.insertAdjacentHTML("beforeend", `<div style="text-align:center;padding:12px 0"><button class="btn bs match-more-btn" onclick="showMoreMatches()">Show 5 more (${_matchedRecipes.length - _matchShown} remaining)</button></div>`);
  } else if (_matchShown > 0) {
    el.insertAdjacentHTML("beforeend", `<div style="text-align:center;padding:12px 0;font-size:.75rem;color:var(--mt)">Showing all ${_matchShown} matching recipes</div>`);
  }
}

/**
 * showMoreMatches() — Loads the next page of matched recipes.
 * Called when user taps "Show 5 more" button.
 */
export function showMoreMatches() {
  const el = g("recipeMatchResults");
  if (el) _renderMatchPage(el);
}

/**
 * addMissingToShop(ingredientName) — Adds a missing recipe ingredient to the
 * shopping list from the "What to Cook Tonight" results. Uses consolidation
 * to prevent duplicates if the ingredient is already on the list.
 */
export async function addMissingToShop(ingredientName) {
  if (!ingredientName) return;
  const result = await consolidateShopItem({
    id: "shop-" + Date.now() + "-" + Math.random().toString(36).slice(2),
    name: ingredientName.trim(),
    qty: 1,
    checked: false,
    src: "recipe-match"
  });
  if (result.action === "new") {
    showNotif(`${ingredientName} added to shopping list 🛒`);
  } else {
    showNotif(`${ingredientName} already on shopping list`);
  }
}

// updExport() — builds a plain-text summary of the entire inventory, grouped by
// storage location (Fridge / Freezer / Pantry). This "living document" is shown
// in a read-only text box on the home screen so users can quickly copy-paste
// their inventory into a message, grocery app, or AI prompt.
//
// Output format example:
//   🌡 FRIDGE
//   - Milk (Organic Valley): 1 gallon
//   - Eggs: 12 count
//
//   🧊 FREEZER
//   - Chicken breast: 2 lb
export function updExport() {
  // Build one text block per storage location, skip locations with no items
  const t = ["fridge", "freezer", "pantry", "household"].map(loc => {
    const its = state.inv.filter(i => i.location === loc);
    // Format: location header + one "- name (brand): qty unit" line per item
    return its.length ? ll(loc).toUpperCase() + "\n" + its.map(i => `- ${i.name}${i.brand ? ` (${i.brand})` : ""}: ${formatQtyWithUnit(i.qty, i.unit)}`).join("\n") : "";
  }).filter(Boolean).join("\n\n"); // separate location blocks with a blank line

  const el = g("expbox"); // the <textarea> or <pre> that displays the export
  if (el) el.textContent = t || "No items yet.";
}

// ── UNIVERSAL ADD SHEET (HOME TAB) ──────────────────────────────────────────
// A single "＋ Add" button on the Home tab opens this bottom sheet, which lets
// users add items to either Supplies or Shopping from one place. Includes the
// same text input, qty/fraction/unit toolbar, location picker, barcode scan,
// and voice input as the dedicated Shopping and Supplies add sheets.

/** Current selected storage location in the universal add sheet (default "fridge") */
let _uniAddLocation = "fridge";
/** Current whole-number quantity in the universal add toolbar (default 1) */
let _uniToolbarQty = 1;
/** Current fraction value in the universal add toolbar (default 0 = none) */
let _uniToolbarFrac = 0;

/**
 * initUniQtyToolbar() — Populates the fraction and unit dropdowns in the
 * universal add-item toolbar. Called once on app init.
 */
export function initUniQtyToolbar() {
  // Build fraction dropdown options from FRAC_OPTIONS
  const fracSel = g("uniQtyFrac");
  if (fracSel) {
    fracSel.innerHTML = FRAC_OPTIONS.map(o =>
      `<option value="${o.value}">${o.value === 0 ? "·/· ▼" : o.label + " ▼"}</option>`
    ).join("");
  }
  // Build unit dropdown — "Unit" selected by default, then all units alphabetically
  const unitSel = g("uniQtyUnit");
  if (unitSel) {
    unitSel.innerHTML = UNITS.map(u =>
      `<option value="${u}"${u === "Unit" ? " selected" : ""}>${u}</option>`
    ).join("");
  }
}

/**
 * _resetUniQtyToolbar() — Resets the toolbar to defaults (qty 1, no fraction, Unit).
 * Called each time the universal add sheet opens.
 */
function _resetUniQtyToolbar() {
  _uniToolbarQty = 1;
  _uniToolbarFrac = 0;
  const valEl = g("uniQtyVal");
  if (valEl) valEl.textContent = "1";
  const fracSel = g("uniQtyFrac");
  if (fracSel) fracSel.value = "0";
  const unitSel = g("uniQtyUnit");
  if (unitSel) unitSel.value = "Unit";
}

/**
 * openUniversalAdd() — Opens the universal add bottom sheet from the Home tab.
 * Resets all fields (input, qty, location, note) and focuses the text input.
 */
export function openUniversalAdd() {
  const backdrop = g("uniAddBackdrop");
  const sheet = g("uniAddSheet");
  if (backdrop) backdrop.classList.add("active");
  if (sheet) sheet.classList.add("active");

  // Reset location picker to default (fridge)
  _uniAddLocation = "fridge";
  document.querySelectorAll("#uniAddSheet .lbtn").forEach(b => b.classList.remove("sel"));
  const fBtn = g("uniAddLoc-fridge");
  if (fBtn) fBtn.classList.add("sel");

  // Reset qty/unit toolbar to defaults
  _resetUniQtyToolbar();

  // Clear note field
  const noteWrap = g("uniAddNoteWrap");
  if (noteWrap) noteWrap.style.display = "none";
  const noteInp = g("uniAddNoteInp");
  if (noteInp) noteInp.value = "";

  // Clear search dropdown
  const dropdown = g("uniSearchDropdown");
  if (dropdown) { dropdown.innerHTML = ""; dropdown.classList.remove("active"); }

  // Auto-focus the input so the keyboard pops up immediately
  setTimeout(() => { const inp = g("uniAddInput"); if (inp) { inp.value = ""; inp.focus(); } }, 150);
}

/**
 * closeUniversalAdd() — Dismisses the universal add bottom sheet.
 * Called when tapping the backdrop or after an item is added to both lists.
 */
export function closeUniversalAdd() {
  const backdrop = g("uniAddBackdrop");
  const sheet = g("uniAddSheet");
  if (backdrop) backdrop.classList.remove("active");
  if (sheet) sheet.classList.remove("active");
  // Clear search dropdown
  const dropdown = g("uniSearchDropdown");
  if (dropdown) { dropdown.innerHTML = ""; dropdown.classList.remove("active"); }
}

/**
 * uniQtyStep(delta) — Increments or decrements the universal toolbar whole qty.
 * Clamps to 1–99 range.
 */
export function uniQtyStep(delta) {
  _uniToolbarQty = Math.max(1, Math.min(99, _uniToolbarQty + delta));
  const valEl = g("uniQtyVal");
  if (valEl) valEl.textContent = _uniToolbarQty;
}

/**
 * uniFracChange() — Updates the stored fraction value when the user picks
 * a fraction from the universal toolbar dropdown.
 */
export function uniFracChange() {
  const fracSel = g("uniQtyFrac");
  _uniToolbarFrac = fracSel ? parseFloat(fracSel.value) || 0 : 0;
}

/**
 * _getUniToolbarValues() — Returns the current toolbar qty, fraction, and unit
 * as a combined quantity decimal + unit string.
 */
function _getUniToolbarValues() {
  const fracSel = g("uniQtyFrac");
  const unitSel = g("uniQtyUnit");
  const frac = fracSel ? parseFloat(fracSel.value) || 0 : 0;
  const unit = unitSel ? unitSel.value : "Unit";
  const qty = combineQty(_uniToolbarQty, frac);
  return { qty, unit };
}

/**
 * setUniAddLoc(loc, btn) — Sets the storage location in the universal add sheet.
 * Updates the module state and highlights the selected location button.
 */
export function setUniAddLoc(loc, btn) {
  _uniAddLocation = loc;
  document.querySelectorAll("#uniAddSheet .lbtn").forEach(b => b.classList.remove("sel"));
  if (btn) btn.classList.add("sel");
}

/**
 * toggleUniAddNote() — Toggles the optional note field in the universal add sheet.
 * When shown, focuses the textarea so the user can start typing immediately.
 */
export function toggleUniAddNote() {
  const wrap = g("uniAddNoteWrap");
  if (!wrap) return;
  const showing = wrap.style.display === "none";
  wrap.style.display = showing ? "block" : "none";
  if (showing) {
    const inp = g("uniAddNoteInp");
    if (inp) inp.focus();
  }
}

/**
 * onUniAddInput() — Called on every keystroke in the universal add input.
 * Applies Title Case as the user types (search is disabled per project settings).
 */
export function onUniAddInput() {
  const inp = g("uniAddInput");
  if (inp) applyTitleCaseWhileTyping(inp);
}

/**
 * _parseUniInput() — Parses the universal add input, extracting optional quantity
 * from common patterns (e.g. "5 Apples", "Eggs x3"). Returns { name, qty, unit, note }.
 */
function _parseUniInput() {
  const inp = g("uniAddInput");
  const v = inp ? inp.value.trim() : "";
  if (!v) return null;

  // Try to parse a quantity from common text patterns
  let name = v, textQty = null;
  const leadMatch = v.match(/^(\d+)\s+(.+)/);
  const trailMatch = v.match(/^(.+?)\s*[x×]\s*(\d+)$/i);
  if (trailMatch) { name = trailMatch[1].trim(); textQty = parseInt(trailMatch[2], 10) || null; }
  else if (leadMatch) { name = leadMatch[2].trim(); textQty = parseInt(leadMatch[1], 10) || null; }

  // Use toolbar qty/unit — text-parsed qty overrides only the whole number
  const tb = _getUniToolbarValues();
  const qty = textQty || tb.qty;
  const unit = tb.unit;

  // Capture optional note
  const noteInp = g("uniAddNoteInp");
  const note = noteInp ? noteInp.value.trim() : "";

  return { name, qty, unit, note };
}

/**
 * _resetUniAfterAdd() — Clears the input and note fields after adding an item.
 * Keeps the sheet open so the user can immediately add the next item.
 */
function _resetUniAfterAdd() {
  const inp = g("uniAddInput");
  if (inp) { inp.value = ""; inp.focus(); }
  const noteInp = g("uniAddNoteInp");
  if (noteInp) noteInp.value = "";
  const noteWrap = g("uniAddNoteWrap");
  if (noteWrap) noteWrap.style.display = "none";
  // Clear search dropdown
  const dropdown = g("uniSearchDropdown");
  if (dropdown) { dropdown.innerHTML = ""; dropdown.classList.remove("active"); }
  // Reset toolbar for next item
  _resetUniQtyToolbar();
}

/**
 * uniAddToSupplies() — Adds the current input as an inventory/supplies item.
 * Checks for saved product preferences (location + unit), saves to Firestore,
 * and keeps the sheet open for the next item.
 */
export async function uniAddToSupplies() {
  const parsed = _parseUniInput();
  if (!parsed) return;

  const { name, qty, note } = parsed;

  // Check for saved product preferences (location + unit)
  const pref = await _getProductPreference(name);
  const loc = pref?.preferredLocation || _uniAddLocation;
  // Toolbar unit takes priority, then saved preference, then default "unit"
  const unit = parsed.unit !== "Unit" ? parsed.unit : (pref?.preferredUnit || "unit");

  // Generate a unique ID for the new inventory item
  const id = "itm-" + name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") + "-" + Date.now();

  // Build and save the inventory item
  const item = {
    id, barcode: id, name, brand: "", unit, qty,
    location: loc, category: gcat({ name }),
    image: null, source: "Manual",
    expiry: null, addedAt: new Date().toLocaleDateString()
  };
  if (note) item.note = note;
  svi(item);

  showNotif(`${name} added to Supplies 🧺`);
  _resetUniAfterAdd();
}

/**
 * uniAddToShopping() — Adds the current input as a shopping list item.
 * Uses consolidation to prevent duplicates if the item is already on the list.
 * Keeps the sheet open for the next item.
 */
export async function uniAddToShopping() {
  const parsed = _parseUniInput();
  if (!parsed) return;

  const { name, qty, unit, note } = parsed;

  const item = { id: Date.now().toString(), name, qty, unit, checked: false, src: "manual" };
  if (note) item.note = note;

  // Consolidate with existing shopping list items to prevent duplicates
  const result = await consolidateShopItem(item);

  if (result.action === "new") {
    showNotif(`${name} added to Shopping 🛒`);
  } else if (result.action === "consolidated") {
    showNotif(`${name} quantity updated on Shopping 🛒`);
  } else if (result.action === "skipped") {
    return; // User cancelled from the "already have" prompt
  }

  _resetUniAfterAdd();
}

/**
 * uniAddScan() — Opens the barcode scanner from the universal add sheet.
 * Closes the sheet and opens the scanner in inventory mode (default).
 */
export function uniAddScan() {
  closeUniversalAdd();
  if (window.openScanForInventory) window.openScanForInventory();
}

/**
 * uniAddVoice() — Opens voice input from the universal add sheet.
 * Closes the sheet and starts voice recognition for inventory.
 */
export function uniAddVoice() {
  closeUniversalAdd();
  if (window.toggleInvVoice) window.toggleInvVoice();
}
