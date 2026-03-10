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

import { state } from '../state.js';
import { g, tk, wDates, xSt, ll, showNotif } from '../helpers.js';
import { saveMp } from '../db.js';

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
  renderTonight();  // "Tonight's Dinner" card
  updExport();      // plain-text inventory export panel
}

// renderTonight() — updates the "Tonight's Dinner" card on the home screen.
// If a meal is planned for today, it shows the meal name plus "Cooked" and "Edit"
// action buttons. If no meal is planned, it shows a prompt to plan one or ask
// Claude for a suggestion.
export function renderTonight() {
  const td = tk();              // today's date key, e.g. "2026-03-09"
  const m = state.mp[td];      // meal plan entry for today (string or undefined)
  const d = g("tnd");          // dinner name display element
  const a = g("tna");          // dinner action buttons container
  const card = g("tonight-main"); // the entire clickable card wrapper

  // Clicking anywhere on the card opens the meal-plan modal for today
  if (card) card.onclick = function() { window.openMealM(td, "Today"); };

  if (m) {
    // A meal is planned: show its name and action buttons
    if (d) d.innerHTML = m;
    // "Cooked" marks the meal as cooked (deducts ingredients); "Edit" reopens the planner
    // stopPropagation prevents the card's onclick from also firing
    if (a) a.innerHTML = `<button class="btn bsm bp" onclick="event.stopPropagation();openCooked('${td}')">✓ Cooked</button><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${td}','Today')">Edit</button>`;
  } else {
    // No meal planned: show placeholder text and shortcuts to plan or ask AI
    if (d) d.innerHTML = `<span style="font-size:.9rem;color:var(--mt);font-style:italic">No meal planned yet</span>`;
    if (a) a.innerHTML = `<button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${td}','Today')">+ Plan dinner</button><button class="btn bsm bs" onclick="event.stopPropagation();showScreen('chat')">Ask Claude →</button>`;
  }
}

// renderWeek() — builds the 7-day (Sun–Sat) meal-plan grid.
// Each day cell shows the day letter, date number, and (if a meal is planned)
// a truncated meal name. Clicking a cell opens the meal-plan modal for that date.
// After rendering, it checks whether the week's meals lack cuisine variety.
export function renderWeek() {
  const ns = ["S", "M", "T", "W", "T", "F", "S"]; // day-of-week abbreviations
  const t = new Date(); t.setHours(0, 0, 0, 0);    // midnight today, for "is today?" comparison

  const wgrd = g("wgrd"); // the week-grid container element
  if (!wgrd) return;

  // Build one cell per day of the current week
  wgrd.innerHTML = wDates().map((d, i) => {
    const k = d.toISOString().split("T")[0]; // date key, e.g. "2026-03-09"
    const iss = d.getTime() === t.getTime(); // true if this cell is today
    const m = state.mp[k];                   // meal plan text for this date (if any)

    // "today" class highlights the current day; "hm" (has-meal) adds a filled style.
    // Meal name is truncated to 10 chars with ellipsis to fit the compact grid cell.
    return `<div class="wd${iss ? " today" : ""}${m ? " hm" : ""}" onclick="openMealM('${k}','${ns[i]} ${d.getDate()}')"><div class="wdn">${ns[i]}</div><div class="wdd">${d.getDate()}</div>${m ? `<div class="wdm">${m.substring(0, 10)}${m.length > 10 ? "…" : ""}</div>` : ""}</div>`;
  }).join("");

  // After rendering the grid, evaluate whether the week needs more variety
  checkVarietyNudge();
}

// checkVarietyNudge() — analyzes the current week's meal plan and shows a
// gentle suggestion banner if the meals lack cuisine diversity. This is tailored
// to the household's preferred cuisines (Bangladeshi and Turkish).
//
// Logic priority:
//   1. If any single meal appears 3+ times, warn about repetition.
//   2. If neither Bangladeshi nor Turkish dishes are present, suggest both.
//   3. If only one cuisine is missing, suggest that specific one.
//   4. If everything looks varied, hide the banner.
//
// The banner is hidden entirely when fewer than 3 meals are planned (not enough
// data to judge variety).
function checkVarietyNudge() {
  const el = g("variety-nudge"); // the nudge banner element
  if (!el) return;

  // Gather all planned meal names for this week, ignoring empty days
  const meals = wDates().map(d => state.mp[d.toISOString().split("T")[0]]).filter(Boolean);

  // Not enough meals planned to make a meaningful variety judgment
  if (meals.length < 3) { el.style.display = "none"; return; }

  // Check for Bangladeshi dishes by matching common keywords
  const hasBD = meals.some(m => /dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(m));
  // Check for Turkish dishes by matching common keywords
  const hasTR = meals.some(m => /kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner/i.test(m));

  // Count how many times each exact meal name appears (case-insensitive)
  const counts = {}; meals.forEach(m => { const w = m.toLowerCase(); counts[w] = (counts[w] || 0) + 1; });
  // Flag if any meal is repeated 3 or more times in one week
  const repeat = Object.entries(counts).find(([, c]) => c >= 3);

  // Display the appropriate nudge message, or hide the banner
  if (repeat) { el.style.display = "block"; el.innerHTML = "🔄 <strong>" + repeat[0] + "</strong> is planned " + repeat[1] + "× this week — maybe try something different?"; }
  else if (!hasBD && !hasTR) { el.style.display = "block"; el.innerHTML = "🌍 No Bangladeshi or Turkish dishes this week yet — ask Claude for ideas!"; }
  else if (!hasBD) { el.style.display = "block"; el.innerHTML = "🇧🇩 No Bangladeshi dishes this week — how about a dal or fish curry?"; }
  else if (!hasTR) { el.style.display = "block"; el.innerHTML = "🇹🇷 No Turkish dishes this week — köfte or mercimek çorbası would be great!"; }
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
  e.innerHTML = ex.map(item => { const s = xSt(item.expiry); return `<div class="exi${s.c === "expired" ? " exp" : ""}" onclick="openAdj('${item.id}')"><div class="exn">${item.name}</div><div class="exd">${s.l}</div></div>`; }).join("");
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
  const t = ["fridge", "freezer", "pantry"].map(loc => {
    const its = state.inv.filter(i => i.location === loc);
    // Format: location header + one "- name (brand): qty unit" line per item
    return its.length ? ll(loc).toUpperCase() + "\n" + its.map(i => `- ${i.name}${i.brand ? ` (${i.brand})` : ""}: ${i.qty} ${i.unit}`).join("\n") : "";
  }).filter(Boolean).join("\n\n"); // separate location blocks with a blank line

  const el = g("expbox"); // the <textarea> or <pre> that displays the export
  if (el) el.textContent = t || "No items yet.";
}
