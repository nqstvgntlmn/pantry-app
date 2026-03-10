// ── MEAL PLAN MODALS ─────────────────────────────────────────────────────────
// Meal planning, cooked logging, recipe scheduling

import { state } from '../state.js';
import { saveMp, addCookLogEntry, svr, svShopItem } from '../db.js';
import { g, tk, wDates, showNotif, renderStars, nextDay } from '../helpers.js';
import { renderWeek, renderTonight, renderSum } from './home.js';

// Recipe chip constants for the meal modal filter
const REC_CHIPS = ["Chicken", "Beef", "Fish", "Vegetarian", "Vegan", "Quick", "Kids", "Healthy", "Batch Cook", "Date Night"];
function chipId(c) { return "chip-" + c.split(" ").join("-"); }

// initRecChips() — renders recipe filter chips in the meal modal
export function initRecChips() {
  const el = g("recChips");
  if (!el) return;
  el.innerHTML = REC_CHIPS.map(c => `<button onclick="toggleChip('${c}')" id="${chipId(c)}" style="padding:5px 10px;border-radius:20px;border:1px solid var(--bd);background:var(--s2);color:var(--tx2);font-size:.78rem;cursor:pointer;transition:all .15s">${c}</button>`).join("");
}

// toggleChip(c) — toggles a recipe filter chip
export function toggleChip(c) {
  const btn = g(chipId(c));
  if (window._activeChips.has(c)) {
    window._activeChips.delete(c);
    if (btn) { btn.style.background = "var(--s2)"; btn.style.color = "var(--tx2)"; btn.style.borderColor = "var(--bd)"; }
  } else {
    window._activeChips.add(c);
    if (btn) { btn.style.background = "var(--ac)"; btn.style.color = "#000"; btn.style.borderColor = "var(--ac)"; }
  }
  filterRecs();
}

// filterRecs() — filters the recipe picker dropdown based on chips and text input
export function filterRecs() {
  const rp = g("recPicker");
  const text = (g("recFilter") ? g("recFilter").value.trim().toLowerCase() : "");
  const chips = [...window._activeChips].map(c => c.toLowerCase());
  const sorted = [...state.recs].sort((a, b) => (b.cookCount || 0) - (a.cookCount || 0));
  const filtered = sorted.filter(r => {
    const hay = (r.name + " " + (r.description || "") + " " + (r.tags || []).join(" ")).toLowerCase();
    const textOk = text ? text.split(/\s+/).every(w => hay.includes(w)) : true;
    const chipsOk = chips.every(c => hay.includes(c));
    return textOk && chipsOk;
  });
  rp.innerHTML = '<option value="">— pick a saved recipe —</option>' + filtered.map(r => `<option value="${r.id}">${r.name}</option>`).join("");
  window._pickedRec = null; g("mealMinp").value = "";
}

// openMealM(dateKey, label) — opens the meal planning modal
export function openMealM(k, lbl) {
  state.md = k;
  g("mealMttl").textContent = "Meal for " + lbl;
  g("mealMinp").value = state.mp[k] || "";
  window._pickedRec = null;
  window._activeChips = new Set();
  const filterEl = g("recFilter"); if (filterEl) filterEl.value = "";
  initRecChips();
  const rp = g("recPicker");
  if (state.recs && state.recs.length) {
    const sorted = [...state.recs].sort((a, b) => (b.cookCount || 0) - (a.cookCount || 0));
    rp.innerHTML = '<option value="">— pick a saved recipe —</option>' + sorted.map(r => `<option value="${r.id}">${r.name}</option>`).join("");
    const cur = state.mp[k] || "";
    const match = sorted.find(r => r.name === cur);
    rp.value = match ? match.id : "";
    g("recPickerWrap").style.display = "block";
  } else {
    g("recPickerWrap").style.display = "none";
  }
  g("mealM").classList.add("active");
  setTimeout(() => g("mealMinp").focus(), 100);
}

// pickRec(recId) — selects a recipe from the picker
export function pickRec(recId) {
  if (!recId) { window._pickedRec = null; g("mealMinp").value = ""; return; }
  const r = state.recs.find(x => x.id === recId);
  if (r) { window._pickedRec = r; g("mealMinp").value = r.name; }
}

// closeMealM() — closes the meal planning modal
export function closeMealM() { g("mealM").classList.remove("active"); }

// saveMeal() — saves the meal for the selected day
export async function saveMeal() {
  const v = g("mealMinp").value.trim();
  await saveMp(state.md, v || null);
  // Add recipe ingredients to shopping list if a saved recipe was picked
  if (window._pickedRec && window._pickedRec.description) {
    const desc = window._pickedRec.description;
    const invNames = state.inv.map(i => i.name.toLowerCase());
    const shopNames = state.shop.map(i => i.name.toLowerCase());
    const lines = desc.split(/[\n,]/).map(l => l.replace(/^[\d\/\s]*(cup|tbsp|tsp|oz|lb|g|kg|ml|l|clove|slice|piece|bunch|head|can|package|pkg)s?\.?\s*/gi, "").replace(/^[\d]+\s*/, "").trim()).filter(l => l.length > 1 && l.length < 60);
    let added = 0;
    for (const line of lines) {
      if (/\b(add|mix|heat|cook|bake|stir|boil|fry|slice|chop|dice|combine|place|pour|season|serve|preheat|bring|remove|let|set|transfer)\b/i.test(line)) continue;
      const clean = line.replace(/^[-•*]\s*/, "").trim();
      if (!clean || clean.length < 2) continue;
      const cl = clean.toLowerCase();
      if (invNames.some(n => n.includes(cl) || cl.includes(n))) continue;
      if (shopNames.some(n => n === cl)) continue;
      await svShopItem({ id: Date.now().toString() + Math.random().toString(36).slice(2), name: clean, checked: false, src: "recipe" });
      added++;
    }
    if (added > 0) showNotif(`Added ${added} ingredient${added !== 1 ? "s" : ""} to shopping list 🛒`);
  }
  window._pickedRec = null;
  closeMealM(); renderWeek(); renderSum(); renderTonight();
}

// clrMeal() — clears the meal for the currently-open day
export async function clrMeal() {
  await saveMp(state.md, null);
  closeMealM(); renderWeek(); renderSum(); renderTonight();
}

// openCooked(k) — opens the "I cooked this" modal
export function openCooked(k) {
  const m = state.mp[k]; if (!m) return;
  state.cn = m; state.nr = 0;
  g("cookedNm").textContent = m;
  g("cnotes").value = "";
  renderStars("cstars", 0);
  g("cookedM").classList.add("active");
}

// skipCooked() — logs the meal as cooked without saving to recipes
export async function skipCooked() {
  await addCookLogEntry(state.cn, tk());
  await saveMp(tk(), null);
  g("cookedM").classList.remove("active");
  renderWeek(); renderTonight(); showNotif("Meal logged!");
}

// saveCooked() — logs the meal as cooked AND saves/updates the recipe
export async function saveCooked() {
  const notes = g("cnotes").value.trim();
  const hasLeftover = g("tog-leftover")?.classList.contains("on");
  await addCookLogEntry(state.cn, tk());
  const existing = state.recs.find(r => r.name.toLowerCase() === state.cn.toLowerCase());
  if (existing) await svr({ ...existing, cookCount: (existing.cookCount || 0) + 1, lastCooked: tk() });
  else await svr({ id: "rec-" + Date.now(), name: state.cn, rating: state.nr, favorited: false, notes, description: "", source: "Meal Plan", tags: [], cookCount: 1, savedAt: new Date().toLocaleDateString(), lastCooked: tk() });
  if (hasLeftover) await saveMp(nextDay(), state.cn + " (leftovers)");
  await saveMp(tk(), null);
  g("cookedM").classList.remove("active");
  renderWeek(); renderTonight();
  showNotif(hasLeftover ? "Saved! Leftovers planned for tomorrow 🥡" : "Saved to recipes! ⭐");
}

// scheduleRecipe(name) — opens the Schedule Recipe modal
export function scheduleRecipe(name) {
  g("schedNm").textContent = name;
  const ns = ["S", "M", "T", "W", "T", "F", "S"], t = new Date(); t.setHours(0, 0, 0, 0);
  g("schedWk").innerHTML = wDates().map((d, i) => {
    const k = d.toISOString().split("T")[0], iss = d.getTime() === t.getTime(), has = state.mp[k];
    return `<div class="wd${iss ? " today" : ""}${has ? " hm" : ""}" onclick="schedSet('${k}','${name}')"><div class="wdn">${ns[i]}</div><div class="wdd">${d.getDate()}</div>${has ? `<div class="wdm">${has.substring(0, 8)}…</div>` : ""}</div>`;
  }).join("");
  g("schedM").classList.add("active");
}

// schedSet(dateKey, name) — schedules a recipe on a specific day
export async function schedSet(k, name) {
  await saveMp(k, name);
  g("schedM").classList.remove("active");
  renderWeek(); renderTonight(); showNotif("Scheduled! 📅");
}
