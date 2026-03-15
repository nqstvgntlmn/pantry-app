// ── INSIGHTS SCREEN ──────────────────────────────────────────────────────────
// This module renders the "Insights" tab — a dashboard showing cooking stats,
// meal-plan overview, cuisine variety nudges, most-cooked leaderboard,
// cuisine breakdown chart, and a food-waste log.

import { state } from '../state.js';
// g  = getElementById shorthand
// tk = today's date key as "YYYY-MM-DD"
// wDates = array of 7 Date objects for the current week (Sun–Sat)
import { g, tk, wDates } from '../helpers.js';

/**
 * renderInsights()
 * Full re-render of the Insights/Stats screen.
 * Reads from global `state` (cookLog, wasteLog, mp) and writes
 * directly into the DOM elements on the Insights tab.
 * Called whenever the user navigates to the Insights screen or
 * when underlying data changes.
 */
export function renderInsights() {
  // Pull the two main data sources from app state:
  // - cookLog: array of { name, date } entries for every meal cooked
  // - wasteLog: array of { name, date } entries for food that was wasted
  const log = state.cookLog;
  const waste = state.wasteLog;

  // ── HERO NUMBERS (streak, total cooked, waste count) ───────────────────────

  // Calculate the user's current cooking streak: how many consecutive days
  // (going backwards from today) have at least one cook-log entry.
  let streak = 0;
  for (let i = 0; i < 60; i++) {
    // Build the date for "i days ago"
    const d = new Date(); d.setDate(d.getDate() - i);
    // Convert to "YYYY-MM-DD" string to match cookLog date format
    const k = d.toISOString().split("T")[0];
    // If there's a log entry for this day, increment the streak.
    // If not (and we're past day 0), the streak is broken — stop counting.
    if (log.find(e => e.date === k)) streak++; else if (i > 0) break;
  }

  // Update the three hero stat numbers in the DOM (guard against missing elements)
  const sn = g("ins-streak-num"); if (sn) sn.textContent = streak;
  const tc = g("ins-total-cooked"); if (tc) tc.textContent = log.length;
  const wc = g("ins-waste-count"); if (wc) wc.textContent = waste.length;

  // Subtitle line under the hero section — shows meal count or a generic tagline
  const sub = g("ins-sub");
  if (sub) sub.textContent = log.length ? " " + log.length + " meals cooked" : "Your kitchen at a glance";

  // ── THIS WEEK'S MEAL PLAN ─────────────────────────────────────────────────

  // Short day-of-week labels for the weekly plan rows
  const ns = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const weekEl = g("ins-week");
  if (weekEl) {
    // wDates() returns the 7 Date objects for the current week.
    // For each day, look up any planned meal from state.mp (meal plan map,
    // keyed by "YYYY-MM-DD") and build a styled row.
    const rows = wDates().map((d) => {
      const k = d.toISOString().split("T")[0]; // date key for lookup
      const meal = state.mp[k];                // planned meal name (or undefined)
      const isTd = k === tk();                 // true if this day is today

      // Each row: day name | date number | meal name (or dash) | "TODAY" badge
      // Today's row gets a highlighted background via inline styles.
      return `<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--b1)${isTd ? ";background:var(--acd);margin:0 -4px;padding:7px 4px;border-radius:6px" : ""}">
        <div style="font-size:.72rem;color:var(--mt);min-width:30px;font-weight:${isTd ? "600" : "400"}">${ns[d.getDay()]}</div>
        <div style="font-size:.72rem;color:var(--mt);min-width:20px">${d.getDate()}</div>
        <div style="font-size:.84rem;color:${meal ? "var(--tx)" : "var(--mt)"};font-style:${meal ? "normal" : "italic"};flex:1">${meal || "—"}</div>
        ${isTd ? "<div style='font-size:.66rem;color:var(--ac);font-weight:600'>TODAY</div>" : ""}
      </div>`;
    }).join("");
    weekEl.innerHTML = rows;
  }

  // ── CUISINE VARIETY NUDGE ─────────────────────────────────────────────────
  // Checks the user's recent cooking history and shows a warning only if
  // the same dish is repeated 3+ times. Cuisine-specific nudges removed.

  // Grab the names of the last 7 meals cooked
  const recent = log.slice(0, 7).map(e => e.name);
  const nudgeEl = g("ins-variety-nudge"), nudgeMsg = g("ins-variety-msg");

  if (nudgeEl && recent.length >= 3) {
    // Count how many times each meal appears in the last 7 entries
    const counts = {}; recent.forEach(n => { const w = n.toLowerCase(); counts[w] = (counts[w] || 0) + 1; });

    // Flag any meal that was cooked 3+ times in the last 7 — that's repetitive
    const repeat = Object.entries(counts).filter(([, c]) => c >= 3);

    // Only show nudge for excessive repetition — hide otherwise
    if (repeat.length) { nudgeEl.style.display = "block"; nudgeMsg.textContent = `You've cooked "${repeat[0][0]}" ${repeat[0][1]} times this week. Time to mix it up?`; }
    else nudgeEl.style.display = "none";
  } else if (nudgeEl) nudgeEl.style.display = "none"; // Not enough data — hide the nudge card

  // ── MOST COOKED LEADERBOARD ───────────────────────────────────────────────
  // Shows the top 6 most-frequently-cooked meals as horizontal bar charts
  // with medal/rank indicators.

  // Tally every meal name across the entire cook log
  const counts2 = {}; log.forEach(e => { counts2[e.name] = (counts2[e.name] || 0) + 1; });

  // Sort descending by count and keep only the top 6
  const sorted = Object.entries(counts2).sort((a, b) => b[1] - a[1]).slice(0, 6);

  // The highest count is used as 100% width for the bar chart scaling
  const max = (sorted[0] ? sorted[0][1] : 1);

  const cookedEl = g("ins-cooked");
  if (cookedEl) {
    if (!sorted.length) {
      // No cook history yet — show an empty-state prompt
      cookedEl.innerHTML = '<div class="es" style="padding:16px"><p>Cook some meals to see stats!</p></div>';
    } else {
      // Medal emojis for ranks 1–6
      const medals = ["🥇", "🥈", "🥉", "4️⃣", "5️⃣", "6️⃣"];
      // Render each meal as: medal | name | proportional bar | "Nx" count
      cookedEl.innerHTML = sorted.map(([n, c], i) => `<div class="ibar-row"><div style="font-size:.9rem;margin-right:4px">${medals[i] || ""}</div><div class="ibar-lbl">${n}</div><div class="ibar-track"><div class="ibar-fill" style="width:${Math.round(c / max * 100)}%"></div></div><div class="ibar-val">${c}×</div></div>`).join("");
    }
  }

  // ── CUISINE BREAKDOWN CHART ───────────────────────────────────────────────
  // Analyzes the most recent 20 cook-log entries, classifies each into a
  // cuisine category using keyword matching, then renders percentage bars.

  // Color palette for each cuisine category
  const cuisineColors = { "Bangladeshi": "#e8a44a", "Turkish": "#c0392b", "Mediterranean": "#27ae60", "American": "#3498db", "Italian": "#e74c3c", "Asian": "#9b59b6", "Other": "#95a5a6" };

  const cuisEl = g("ins-cuisine");
  if (cuisEl && log.length) {
    /**
     * detect(name) — classify a meal name into a cuisine category.
     * Uses simple regex keyword matching against known dish names.
     * Falls back to "Other" if no pattern matches.
     */
    const detect = name => {
      const n = name.toLowerCase();
      if (/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(n)) return "Bangladeshi";
      if (/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner|iskender/i.test(n)) return "Turkish";
      if (/pasta|pizza|risotto|gnocchi|italian/i.test(n)) return "Italian";
      if (/tacos|burrito|enchilada|mexican/i.test(n)) return "Mexican";
      if (/sushi|ramen|stir.?fry|fried rice|asian|chinese|thai|japanese/i.test(n)) return "Asian";
      if (/burger|sandwich|mac|bbq|american/i.test(n)) return "American";
      return "Other";
    };

    // Count cuisine occurrences across the last 20 meals
    const cCounts = {}; log.slice(0, 20).forEach(e => { const c = detect(e.name); cCounts[c] = (cCounts[c] || 0) + 1; });
    const total = Object.values(cCounts).reduce((a, b) => a + b, 0);

    // Sort cuisines by frequency (most common first)
    const csorted = Object.entries(cCounts).sort((a, b) => b[1] - a[1]);

    // Render a labeled progress bar for each cuisine, showing meal count and percentage
    cuisEl.innerHTML = csorted.map(([c, n]) => {
      const pct = Math.round(n / total * 100);
      const col = cuisineColors[c] || "#95a5a6"; // fallback grey for unlisted cuisines
      return `<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span style="font-size:.82rem;font-weight:500">${c}</span><span style="font-size:.74rem;color:var(--mt)">${n} meals · ${pct}%</span></div><div style="height:8px;background:var(--b1);border-radius:4px;overflow:hidden"><div style="height:100%;width:${pct}%;background:${col};border-radius:4px;transition:width .6s ease"></div></div></div>`;
    }).join("") || '<div class="es" style="padding:16px"><p>Cook more meals to see your cuisine breakdown.</p></div>';
  }

  // ── WASTE LOG ─────────────────────────────────────────────────────────────
  // Shows the 10 most recent food-waste entries (name + date), or a
  // congratulatory empty state if nothing has been wasted.

  const wasteEl = g("ins-waste");
  if (wasteEl) {
    wasteEl.innerHTML = waste.length
      ? waste.slice(0, 10).map(w => `<div class="waste-item"><span style="font-size:.86rem">${w.name}</span><span style="font-size:.74rem;color:var(--rd)">${w.date}</span></div>`).join("")
      : '<div class="es" style="padding:16px"><p>Nothing wasted yet — great job! 🎉</p></div>';
  }
}
