// ── INSIGHTS SCREEN ──────────────────────────────────────────────────────────
// renderInsights — cooking stats, variety nudge, waste log

import { state } from '../state.js';
import { g, tk, wDates } from '../helpers.js';

// renderInsights() — full re-render of the Insights/Stats screen
export function renderInsights() {
  const log = state.cookLog;
  const waste = state.wasteLog;

  // Hero numbers
  let streak = 0;
  for (let i = 0; i < 60; i++) {
    const d = new Date(); d.setDate(d.getDate() - i);
    const k = d.toISOString().split("T")[0];
    if (log.find(e => e.date === k)) streak++; else if (i > 0) break;
  }
  const sn = g("ins-streak-num"); if (sn) sn.textContent = streak;
  const tc = g("ins-total-cooked"); if (tc) tc.textContent = log.length;
  const wc = g("ins-waste-count"); if (wc) wc.textContent = waste.length;
  const sub = g("ins-sub");
  if (sub) sub.textContent = log.length ? " " + log.length + " meals cooked" : "Your kitchen at a glance";

  // This week plan
  const ns = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const weekEl = g("ins-week");
  if (weekEl) {
    const rows = wDates().map((d) => {
      const k = d.toISOString().split("T")[0], meal = state.mp[k], isTd = k === tk();
      return `<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--b1)${isTd ? ";background:var(--acd);margin:0 -4px;padding:7px 4px;border-radius:6px" : ""}">
        <div style="font-size:.72rem;color:var(--mt);min-width:30px;font-weight:${isTd ? "600" : "400"}">${ns[d.getDay()]}</div>
        <div style="font-size:.72rem;color:var(--mt);min-width:20px">${d.getDate()}</div>
        <div style="font-size:.84rem;color:${meal ? "var(--tx)" : "var(--mt)"};font-style:${meal ? "normal" : "italic"};flex:1">${meal || "—"}</div>
        ${isTd ? "<div style='font-size:.66rem;color:var(--ac);font-weight:600'>TODAY</div>" : ""}
      </div>`;
    }).join("");
    weekEl.innerHTML = rows;
  }

  // Cuisine variety nudge
  const recent = log.slice(0, 7).map(e => e.name);
  const nudgeEl = g("ins-variety-nudge"), nudgeMsg = g("ins-variety-msg");
  if (nudgeEl && recent.length >= 3) {
    const counts = {}; recent.forEach(n => { const w = n.toLowerCase(); counts[w] = (counts[w] || 0) + 1; });
    const repeat = Object.entries(counts).filter(([, c]) => c >= 3);
    const weekMeals = Object.values(state.mp).filter(Boolean);
    const hasBD = weekMeals.some(m => /curry|dal|rice|bengali|biryani|hilsa|mustard|lentil/i.test(m));
    const hasTR = weekMeals.some(m => /kebab|köfte|pide|börek|meze|turkish|pilav|lahmacun/i.test(m));
    if (repeat.length) { nudgeEl.style.display = "block"; nudgeMsg.textContent = `You've cooked "${repeat[0][0]}" ${repeat[0][1]} times this week. Time to mix it up?`; }
    else if (!hasBD && weekMeals.length >= 3) { nudgeEl.style.display = "block"; nudgeMsg.textContent = "No Bangladeshi dishes this week — how about a dal, biryani, or fish curry?"; }
    else if (!hasTR && weekMeals.length >= 3) { nudgeEl.style.display = "block"; nudgeMsg.textContent = "No Turkish dishes planned — köfte, mercimek çorbası, or a pilav would be great this week!"; }
    else nudgeEl.style.display = "none";
  } else if (nudgeEl) nudgeEl.style.display = "none";

  // Most cooked
  const counts2 = {}; log.forEach(e => { counts2[e.name] = (counts2[e.name] || 0) + 1; });
  const sorted = Object.entries(counts2).sort((a, b) => b[1] - a[1]).slice(0, 6);
  const max = (sorted[0] ? sorted[0][1] : 1);
  const cookedEl = g("ins-cooked");
  if (cookedEl) {
    if (!sorted.length) { cookedEl.innerHTML = '<div class="es" style="padding:16px"><p>Cook some meals to see stats!</p></div>'; }
    else {
      const medals = ["🥇", "🥈", "🥉", "4️⃣", "5️⃣", "6️⃣"];
      cookedEl.innerHTML = sorted.map(([n, c], i) => `<div class="ibar-row"><div style="font-size:.9rem;margin-right:4px">${medals[i] || ""}</div><div class="ibar-lbl">${n}</div><div class="ibar-track"><div class="ibar-fill" style="width:${Math.round(c / max * 100)}%"></div></div><div class="ibar-val">${c}×</div></div>`).join("");
    }
  }

  // Cuisine breakdown
  const cuisineColors = { "Bangladeshi": "#e8a44a", "Turkish": "#c0392b", "Mediterranean": "#27ae60", "American": "#3498db", "Italian": "#e74c3c", "Asian": "#9b59b6", "Other": "#95a5a6" };
  const cuisEl = g("ins-cuisine");
  if (cuisEl && log.length) {
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
    const cCounts = {}; log.slice(0, 20).forEach(e => { const c = detect(e.name); cCounts[c] = (cCounts[c] || 0) + 1; });
    const total = Object.values(cCounts).reduce((a, b) => a + b, 0);
    const csorted = Object.entries(cCounts).sort((a, b) => b[1] - a[1]);
    cuisEl.innerHTML = csorted.map(([c, n]) => {
      const pct = Math.round(n / total * 100);
      const col = cuisineColors[c] || "#95a5a6";
      return `<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span style="font-size:.82rem;font-weight:500">${c}</span><span style="font-size:.74rem;color:var(--mt)">${n} meals · ${pct}%</span></div><div style="height:8px;background:var(--b1);border-radius:4px;overflow:hidden"><div style="height:100%;width:${pct}%;background:${col};border-radius:4px;transition:width .6s ease"></div></div></div>`;
    }).join("") || '<div class="es" style="padding:16px"><p>Cook more meals to see your cuisine breakdown.</p></div>';
  }

  // Waste log
  const wasteEl = g("ins-waste");
  if (wasteEl) {
    wasteEl.innerHTML = waste.length
      ? waste.slice(0, 10).map(w => `<div class="waste-item"><span style="font-size:.86rem">${w.name}</span><span style="font-size:.74rem;color:var(--rd)">${w.date}</span></div>`).join("")
      : '<div class="es" style="padding:16px"><p>Nothing wasted yet — great job! 🎉</p></div>';
  }
}
