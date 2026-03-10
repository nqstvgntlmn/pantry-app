// ── HOME SCREEN ──────────────────────────────────────────────────────────────
// renderHome, renderWeek, renderSum, renderExp, renderTonight, updExport

import { state } from '../state.js';
import { g, tk, wDates, xSt, ll, showNotif } from '../helpers.js';
import { saveMp } from '../db.js';

// initHome() — sets greeting text and date label, then renders the week grid
export function initHome() {
  const h = new Date().getHours();
  const gr = h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening";
  const u = localStorage.getItem("ks-who") || (state.cfg.adults || "Bora").split(",")[0].trim();
  const grtEl = g("grt");
  if (grtEl) grtEl.innerHTML = `${gr}, <span>${u}</span>`;
  const hdtEl = g("hdt");
  if (hdtEl) hdtEl.textContent = new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
  renderWeek();
}

// renderAll() — re-renders both Home and Inventory screens
export function renderAll() { renderHome(); renderInvFn?.(); }

// Inventory render function registered from inventory.js to avoid circular import
let renderInvFn = null;
export function setRenderInv(fn) { renderInvFn = fn; }

// renderHome() — full re-render of the Home screen
export function renderHome() {
  const h = new Date().getHours();
  const gr = h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening";
  const u = localStorage.getItem("ks-who") || (state.cfg.adults || "Bora").split(",")[0].trim();
  const grtEl = g("grt");
  if (grtEl && !grtEl.innerHTML) grtEl.innerHTML = `${gr}, <span>${u}</span>`;
  renderWeek(); renderSum(); renderExp(); renderTonight(); updExport();
}

// renderTonight() — updates the "Tonight's Dinner" card
export function renderTonight() {
  const td = tk(), m = state.mp[td], d = g("tnd"), a = g("tna"), card = g("tonight-main");
  if (card) card.onclick = function() { window.openMealM(td, "Today"); };
  if (m) {
    if (d) d.innerHTML = m;
    if (a) a.innerHTML = `<button class="btn bsm bp" onclick="event.stopPropagation();openCooked('${td}')">✓ Cooked</button><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${td}','Today')">Edit</button>`;
  } else {
    if (d) d.innerHTML = `<span style="font-size:.9rem;color:var(--mt);font-style:italic">No meal planned yet</span>`;
    if (a) a.innerHTML = `<button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${td}','Today')">+ Plan dinner</button><button class="btn bsm bs" onclick="event.stopPropagation();showScreen('chat')">Ask Claude →</button>`;
  }
}

// renderWeek() — renders the 7-day week grid with meal names
export function renderWeek() {
  const ns = ["S", "M", "T", "W", "T", "F", "S"];
  const t = new Date(); t.setHours(0, 0, 0, 0);
  const wgrd = g("wgrd");
  if (!wgrd) return;
  wgrd.innerHTML = wDates().map((d, i) => {
    const k = d.toISOString().split("T")[0], iss = d.getTime() === t.getTime(), m = state.mp[k];
    return `<div class="wd${iss ? " today" : ""}${m ? " hm" : ""}" onclick="openMealM('${k}','${ns[i]} ${d.getDate()}')"><div class="wdn">${ns[i]}</div><div class="wdd">${d.getDate()}</div>${m ? `<div class="wdm">${m.substring(0, 10)}${m.length > 10 ? "…" : ""}</div>` : ""}</div>`;
  }).join("");
  checkVarietyNudge();
}

// checkVarietyNudge() — shows a suggestion banner if the week lacks cuisine variety
function checkVarietyNudge() {
  const el = g("variety-nudge"); if (!el) return;
  const meals = wDates().map(d => state.mp[d.toISOString().split("T")[0]]).filter(Boolean);
  if (meals.length < 3) { el.style.display = "none"; return; }
  const hasBD = meals.some(m => /dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(m));
  const hasTR = meals.some(m => /kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner/i.test(m));
  const counts = {}; meals.forEach(m => { const w = m.toLowerCase(); counts[w] = (counts[w] || 0) + 1; });
  const repeat = Object.entries(counts).find(([, c]) => c >= 3);
  if (repeat) { el.style.display = "block"; el.innerHTML = "🔄 <strong>" + repeat[0] + "</strong> is planned " + repeat[1] + "× this week — maybe try something different?"; }
  else if (!hasBD && !hasTR) { el.style.display = "block"; el.innerHTML = "🌍 No Bangladeshi or Turkish dishes this week yet — ask Claude for ideas!"; }
  else if (!hasBD) { el.style.display = "block"; el.innerHTML = "🇧🇩 No Bangladeshi dishes this week — how about a dal or fish curry?"; }
  else if (!hasTR) { el.style.display = "block"; el.innerHTML = "🇹🇷 No Turkish dishes this week — köfte or mercimek çorbası would be great!"; }
  else { el.style.display = "none"; }
}

// renderSum() — updates all numeric stat cards on the home screen
export function renderSum() {
  const ex = state.inv.filter(i => { const s = xSt(i.expiry); return s && (s.c === "expiring" || s.c === "expired"); }).length;
  const tb = state.shop.filter(i => !i.checked).length;
  const expV = g("home-exp-val"), expS = g("home-exp-sub");
  if (expV) { if (ex > 0) { expV.textContent = ex + " item" + (ex > 1 ? "s" : ""); expV.className = "tc-val"; expV.style.color = "var(--am)"; } else { expV.textContent = "All fresh!"; expV.className = "tc-val tc-green"; } }
  if (expS) { expS.textContent = ex > 0 ? "expiring soon" : "Nothing in next 3 days"; }
  const shopV = g("home-shop-val"), shopS = g("home-shop-sub");
  if (shopV) shopV.textContent = tb;
  if (shopS) shopS.textContent = tb === 1 ? "item to buy" : tb === 0 ? "all stocked up" : "items to buy";
  const sgrd = g("sgrd");
  if (sgrd) sgrd.innerHTML = `<div class="sc" onclick="showScreen('inventory')"><div class="sci">🧺</div><div class="scv">${state.inv.length}</div><div class="scl">Items in stock</div></div><div class="sc${ex > 0 ? " warn" : ""}" onclick="showScreen('inventory')"><div class="sci">⏱</div><div class="scv">${ex}</div><div class="scl">Expiring soon</div></div><div class="sc" onclick="showScreen('shopping')"><div class="sci">🛒</div><div class="scv">${tb}</div><div class="scl">To buy</div></div><div class="sc" onclick="showScreen('recipes')"><div class="sci">📖</div><div class="scv">${state.recs.length}</div><div class="scl">Saved recipes</div></div>`;
}

// renderExp() — renders the expiring-soon item list below the week grid
export function renderExp() {
  const ex = state.inv.filter(i => { const s = xSt(i.expiry); return s && (s.c === "expiring" || s.c === "expired"); }).sort((a, b) => new Date(a.expiry) - new Date(b.expiry));
  const l = g("exslbl"), e = g("expl");
  if (!l || !e) return;
  if (!ex.length) { l.style.display = "none"; e.innerHTML = ""; return; }
  l.style.display = "flex";
  e.innerHTML = ex.map(item => { const s = xSt(item.expiry); return `<div class="exi${s.c === "expired" ? " exp" : ""}" onclick="openAdj('${item.id}')"><div class="exn">${item.name}</div><div class="exd">${s.l}</div></div>`; }).join("");
}

// updExport() — refreshes the "living document" export text panel
export function updExport() {
  const t = ["fridge", "freezer", "pantry"].map(loc => {
    const its = state.inv.filter(i => i.location === loc);
    return its.length ? ll(loc).toUpperCase() + "\n" + its.map(i => `- ${i.name}${i.brand ? ` (${i.brand})` : ""}: ${i.qty} ${i.unit}`).join("\n") : "";
  }).filter(Boolean).join("\n\n");
  const el = g("expbox");
  if (el) el.textContent = t || "No items yet.";
}
