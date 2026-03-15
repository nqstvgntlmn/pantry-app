// ── MEAL PLAN MODALS ─────────────────────────────────────────────────────────
// This module handles all meal-planning UI: assigning meals to days of the week,
// logging meals as "cooked," optionally saving them as recipes, and scheduling
// recipes onto the weekly calendar. It also auto-adds recipe ingredients to the
// shopping list when a saved recipe is picked.

import { state } from '../state.js';
import { saveMp, addCookLogEntry, svr } from '../db.js';
import { consolidateShopItem } from './shopping.js'; // Consolidation-aware add to shopping list
// g = getElementById helper, tk = today's date key (YYYY-MM-DD),
// wDates = array of 7 Date objects for the current week,
// showNotif = toast notification, renderStars = star-rating UI,
// nextDay = tomorrow's date key
import { g, tk, wDates, showNotif, renderStars, nextDay } from '../helpers.js';
import { renderWeek, renderTonight, renderSum } from './home.js';

// ── RECIPE FILTER CHIPS ────────────────────────────────────────────────────────
// These category labels appear as togglable filter buttons inside the meal modal,
// letting the user narrow down the recipe picker by cuisine type or trait.
const REC_CHIPS = ["Chicken", "Beef", "Fish", "Vegetarian", "Vegan", "Quick", "Kids", "Healthy", "Batch Cook", "Date Night"];

// Converts a chip label like "Batch Cook" into a DOM id like "chip-Batch-Cook"
function chipId(c) { return "chip-" + c.split(" ").join("-"); }

// Renders all recipe filter chip buttons into the #recChips container.
// Each chip calls toggleChip() on click to activate/deactivate filtering.
export function initRecChips() {
  const el = g("recChips");
  if (!el) return;
  el.innerHTML = REC_CHIPS.map(c => `<button onclick="toggleChip('${c}')" id="${chipId(c)}" style="padding:5px 10px;border-radius:20px;border:1px solid var(--bd);background:var(--s2);color:var(--tx2);font-size:.78rem;cursor:pointer;transition:all .15s">${c}</button>`).join("");
}

// Toggles a single recipe filter chip on or off.
// Active chips are tracked in window._activeChips (a Set).
// When toggled, the chip's visual style updates (highlighted vs. default)
// and the recipe list is re-filtered immediately.
export function toggleChip(c) {
  const btn = g(chipId(c));
  if (window._activeChips.has(c)) {
    // Chip was active -- deactivate it and revert to default styling
    window._activeChips.delete(c);
    if (btn) { btn.style.background = "var(--s2)"; btn.style.color = "var(--tx2)"; btn.style.borderColor = "var(--bd)"; }
  } else {
    // Chip was inactive -- activate it and apply accent styling
    window._activeChips.add(c);
    if (btn) { btn.style.background = "var(--ac)"; btn.style.color = "#000"; btn.style.borderColor = "var(--ac)"; }
  }
  // Re-run the filter so the recipe dropdown reflects the new chip state
  filterRecs();
}

// ── RECIPE FILTERING ───────────────────────────────────────────────────────────
// Filters the recipe picker <select> based on:
//   1. Free-text typed into #recFilter (every word must appear somewhere)
//   2. Active chip categories (every active chip must match)
// Recipes are sorted most-cooked-first so favourites float to the top.
export function filterRecs() {
  const rp = g("recPicker");
  // Grab the current text filter value (lowercased for case-insensitive matching)
  const text = (g("recFilter") ? g("recFilter").value.trim().toLowerCase() : "");
  // Convert active chip labels to lowercase for matching against recipe text
  const chips = [...window._activeChips].map(c => c.toLowerCase());

  // Sort recipes by cook count descending -- most-used recipes appear first
  const sorted = [...state.recs].sort((a, b) => (b.cookCount || 0) - (a.cookCount || 0));

  const filtered = sorted.filter(r => {
    // Build a single searchable string from the recipe's name, description, and tags
    const hay = (r.name + " " + (r.description || "") + " " + (r.tags || []).join(" ")).toLowerCase();
    // Every whitespace-delimited word in the text input must appear in the haystack
    const textOk = text ? text.split(/\s+/).every(w => hay.includes(w)) : true;
    // Every active chip label must also appear in the haystack
    const chipsOk = chips.every(c => hay.includes(c));
    return textOk && chipsOk;
  });

  // Rebuild the <select> options with the filtered results
  rp.innerHTML = '<option value="">— pick a saved recipe —</option>' + filtered.map(r => `<option value="${r.id}">${r.name}</option>`).join("");
  // Reset selection state since the dropdown was rebuilt
  window._pickedRec = null; g("mealMinp").value = "";
}

// ── MEAL MODAL (assign a meal to a day) ────────────────────────────────────────

// Opens the meal-planning modal for a specific day.
// k = date key (YYYY-MM-DD), lbl = human-readable label shown in the modal title.
// Pre-fills the input if a meal is already assigned to that day, resets chip
// filters, populates the recipe picker dropdown, and focuses the text input.
export function openMealM(k, lbl) {
  // Store the target date key in state so saveMeal() knows which day to write to
  state.md = k;
  g("mealMttl").textContent = "Meal for " + lbl;
  // Pre-fill the text input with any existing meal for this day
  g("mealMinp").value = state.mp[k] || "";

  // Reset recipe selection and chip filter state for a fresh modal
  window._pickedRec = null;
  window._activeChips = new Set();
  const filterEl = g("recFilter"); if (filterEl) filterEl.value = "";
  initRecChips();

  // Populate the recipe picker dropdown if the user has saved recipes
  const rp = g("recPicker");
  if (state.recs && state.recs.length) {
    // Sort by cook count so frequently-used recipes appear first
    const sorted = [...state.recs].sort((a, b) => (b.cookCount || 0) - (a.cookCount || 0));
    rp.innerHTML = '<option value="">— pick a saved recipe —</option>' + sorted.map(r => `<option value="${r.id}">${r.name}</option>`).join("");

    // If the day already has a meal assigned, try to auto-select the matching recipe
    const cur = state.mp[k] || "";
    const match = sorted.find(r => r.name === cur);
    rp.value = match ? match.id : "";

    g("recPickerWrap").style.display = "block";
  } else {
    // No saved recipes -- hide the picker section entirely
    g("recPickerWrap").style.display = "none";
  }

  // Show the modal and focus the text input after a brief delay (allows CSS transition)
  g("mealM").classList.add("active");
  setTimeout(() => g("mealMinp").focus(), 100);
}

// Called when the user selects a recipe from the dropdown picker.
// Sets the global _pickedRec reference (used later to auto-add ingredients)
// and fills the meal name input with the recipe's name.
export function pickRec(recId) {
  if (!recId) { window._pickedRec = null; g("mealMinp").value = ""; return; }
  const r = state.recs.find(x => x.id === recId);
  if (r) { window._pickedRec = r; g("mealMinp").value = r.name; }
}

// Closes the meal-planning modal without saving.
export function closeMealM() { g("mealM").classList.remove("active"); }

// Closes the "Schedule Recipe" modal (cancel or backdrop tap).
export function closeSchedM() { g("schedM").classList.remove("active"); }

// Saves the meal assignment for the selected day. If the user picked a saved
// recipe (not just typed a name), this also parses the recipe's description
// for ingredient lines and adds any missing ones to the shopping list.
export async function saveMeal() {
  const v = g("mealMinp").value.trim();
  // Persist the meal name (or null to clear) for the target date
  await saveMp(state.md, v || null);

  // ── Auto-add recipe ingredients to shopping list ──
  // Only runs when a saved recipe was selected AND it has a description field
  // (the description is expected to contain ingredient lines).
  if (window._pickedRec && window._pickedRec.description) {
    const desc = window._pickedRec.description;
    // Build lowercase lists of existing inventory and shopping items to avoid duplicates
    const invNames = state.inv.map(i => i.name.toLowerCase());
    const shopNames = state.shop.map(i => i.name.toLowerCase());

    // Parse description into candidate ingredient lines:
    //   1. Split on newlines and commas
    //   2. Strip leading quantities and unit words (e.g. "2 cups", "1 tbsp")
    //   3. Discard lines that are too short (<2 chars) or too long (>60 chars)
    const lines = desc.split(/[\n,]/).map(l => l.replace(/^[\d\/\s]*(cup|tbsp|tsp|oz|lb|g|kg|ml|l|clove|slice|piece|bunch|head|can|package|pkg)s?\.?\s*/gi, "").replace(/^[\d]+\s*/, "").trim()).filter(l => l.length > 1 && l.length < 60);

    let added = 0;
    for (const line of lines) {
      // Skip lines that look like cooking instructions rather than ingredients
      // (they contain action verbs like "mix", "heat", "bake", etc.)
      if (/\b(add|mix|heat|cook|bake|stir|boil|fry|slice|chop|dice|combine|place|pour|season|serve|preheat|bring|remove|let|set|transfer)\b/i.test(line)) continue;

      // Strip leading bullet characters (-, bullet, asterisk)
      const clean = line.replace(/^[-•*]\s*/, "").trim();
      if (!clean || clean.length < 2) continue;
      const cl = clean.toLowerCase();

      // Skip if the ingredient is already in the user's inventory
      if (invNames.some(n => n.includes(cl) || cl.includes(n))) continue;
      // Skip if the exact ingredient is already on the shopping list
      if (shopNames.some(n => n === cl)) continue;

      // Consolidate with existing items instead of creating duplicates, tagged with src:"recipe"
      await consolidateShopItem({ id: Date.now().toString() + Math.random().toString(36).slice(2), name: clean, qty: 1, checked: false, src: "recipe" });
      added++;
    }

    if (added > 0) showNotif(`Added ${added} ingredient${added !== 1 ? "s" : ""} to shopping list 🛒`);
  }

  // Clean up and refresh the home screen views
  window._pickedRec = null;
  closeMealM(); renderWeek(); renderSum(); renderTonight();
}

// Clears the meal assignment for the currently-open day (sets it to null)
// then closes the modal and refreshes the home screen.
export async function clrMeal() {
  await saveMp(state.md, null);
  closeMealM(); renderWeek(); renderSum(); renderTonight();
}

// ── COOKED MODAL (log a meal as cooked) ────────────────────────────────────────

// Opens the "I cooked this" modal for a given day's meal.
// k = date key. Reads the meal name from state.mp, resets the rating to 0,
// clears the notes field, and shows the modal.
export function openCooked(k) {
  const m = state.mp[k]; if (!m) return; // No meal assigned to this day -- bail
  state.cn = m;   // Store the meal name being logged (cn = "cooked name")
  state.nr = 0;   // Reset the star rating (nr = "new rating")
  g("cookedNm").textContent = m;
  g("cnotes").value = "";
  renderStars("cstars", 0);
  g("cookedM").classList.add("active");
}

// Logs the meal as cooked (adds to cook log) but does NOT save it as a recipe.
// Clears today's meal slot afterward since it has been consumed.
export async function skipCooked() {
  await addCookLogEntry(state.cn, tk());  // Log the cook event with today's date
  await saveMp(tk(), null);               // Clear today's meal slot
  g("cookedM").classList.remove("active");
  renderWeek(); renderTonight(); showNotif("Meal logged!");
}

// Logs the meal as cooked AND saves or updates it in the recipe collection.
// If the recipe already exists, increments its cook count. If not, creates a new
// recipe record. Also handles the "leftovers" toggle -- if enabled, schedules
// the same meal (with " (leftovers)" suffix) for the next day.
export async function saveCooked() {
  const notes = g("cnotes").value.trim();
  // Check the leftovers toggle (a custom toggle button with class "on" when active)
  const hasLeftover = g("tog-leftover")?.classList.contains("on");

  // Log the cook event
  await addCookLogEntry(state.cn, tk());

  // Update or create the recipe record
  const existing = state.recs.find(r => r.name.toLowerCase() === state.cn.toLowerCase());
  if (existing) {
    // Recipe exists -- bump its cook count and update the last-cooked date
    await svr({ ...existing, cookCount: (existing.cookCount || 0) + 1, lastCooked: tk() });
  } else {
    // New recipe -- create a full record with the user's rating and notes
    await svr({ id: "rec-" + Date.now(), name: state.cn, rating: state.nr, favorited: false, notes, description: "", source: "Meal Plan", tags: [], cookCount: 1, savedAt: new Date().toLocaleDateString(), lastCooked: tk() });
  }

  // If the leftovers toggle is on, schedule the meal for tomorrow with a suffix
  if (hasLeftover) await saveMp(nextDay(), state.cn + " (leftovers)");

  // Clear today's meal slot since it has been cooked
  await saveMp(tk(), null);

  g("cookedM").classList.remove("active");
  renderWeek(); renderTonight();
  showNotif(hasLeftover ? "Saved! Leftovers planned for tomorrow 🥡" : "Saved to recipes! ⭐");
}

// ── SCHEDULE RECIPE MODAL ──────────────────────────────────────────────────────

// Opens a modal that shows the current week as clickable day cells, letting the
// user pick which day to schedule a recipe on. Each cell shows the day initial,
// date number, and any existing meal (truncated). Highlights today's cell.
// name = the recipe name being scheduled.
export function scheduleRecipe(name) {
  g("schedNm").textContent = name;
  // Day-of-week initials (Sun-Sat) and a midnight-normalized "today" for comparison
  const ns = ["S", "M", "T", "W", "T", "F", "S"], t = new Date(); t.setHours(0, 0, 0, 0);

  // wDates() returns 7 Date objects for the current week; render each as a day cell
  g("schedWk").innerHTML = wDates().map((d, i) => {
    const k = d.toISOString().split("T")[0];        // Date key (YYYY-MM-DD)
    const iss = d.getTime() === t.getTime();         // Is this cell today?
    const has = state.mp[k];                          // Existing meal for this day (if any)
    // Meal name uses CSS text-overflow for graceful truncation instead of hard char cutoff
    return `<div class="wd${iss ? " today" : ""}${has ? " hm" : ""}" onclick="schedSet('${k}','${name}')"><div class="wdn">${ns[i]}</div><div class="wdd">${d.getDate()}</div>${has ? `<div class="wdm">${has}</div>` : ""}</div>`;
  }).join("");

  g("schedM").classList.add("active");
}

// Assigns a recipe to a specific day from the schedule modal.
// k = date key (YYYY-MM-DD), name = recipe name. Saves to DB, closes modal,
// and refreshes the home screen.
export async function schedSet(k, name) {
  await saveMp(k, name);
  g("schedM").classList.remove("active");
  renderWeek(); renderTonight(); showNotif("Scheduled! 📅");
}
