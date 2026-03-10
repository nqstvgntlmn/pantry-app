// ── INVENTORY SCREEN ─────────────────────────────────────────────────────────
// renderInv, iH, openAdj, svi, dli

import { state } from '../state.js';
import { svi, dli, addWasteEntry } from '../db.js';
import { g, xSt, ll, gcat, CATS, showNotif, showOv, hideOv } from '../helpers.js';
import { updExport } from './home.js';

// iH(item) — renders a single inventory item row wrapped in a swipe container
export function iH(item) {
  const ic = CATS[gcat(item)] || "🛒",
    img = item.image ? `<img src="${item.image}" class="iimg" onerror="this.style.display='none'"/>` : `<div class="iph">${ic}</div>`;
  const ex = xSt(item.expiry),
    bc = ex ? (ex.c === "expired" ? " expired" : ex.c === "expiring" ? " expiring" : "") : "",
    et = ex ? `<div class="etag ${ex.c}">${ex.l}</div>` : "";
  return `<div class="swipe-wrap" id="sw-${item.id}" data-id="${item.id}" data-list="inv">
    <div class="swipe-inner">
      <div class="iit${bc}" onclick="swipeRowTap('${item.id}','inv')">
        <div class="sel-cb">✓</div>
        <div class="iileft">${img}<div>
          <div class="inm">${item.name}</div>
          <div class="isb">${item.brand || gcat(item)}</div>
          ${item.note ? `<div class="shnote" style="margin-top:2px">📝 ${item.note}</div>` : ""}
          ${et}
        </div></div>
        <div style="text-align:right">
          <div class="iqt">${item.qty}</div>
          <div class="iun">${item.unit}</div>
        </div>
      </div>
    </div>
    <div class="swipe-del" onclick="swipeDelItem('${item.id}','inv')"><span>🗑</span>Delete</div>
  </div>`;
}

// renderInv() — full re-render of the inventory list
export function renderInv() {
  const az = (a, b) => a.name.localeCompare(b.name);
  const f = (state.it === "all" || state.it === "cat" ? state.inv : state.inv.filter(i => i.location === state.it)).slice().sort(az);
  const isub = g("isub");
  if (isub) isub.textContent = f.length + " " + ({ all: "items", fridge: "fridge items", freezer: "frozen items", pantry: "pantry items", cat: "items by type" }[state.it] || "items");
  updExport();
  const c = g("ibody");
  if (!c) return;
  if (!f.length) { c.innerHTML = `<div class="es"><div class="ei">🧺</div><p>No items here yet.<br/>Tap Scan or Add to get started.</p></div>`; return; }
  if (state.it === "cat") {
    const gr = {}; f.forEach(item => { const cat = gcat(item); if (!gr[cat]) gr[cat] = []; gr[cat].push(item); });
    c.innerHTML = Object.entries(gr).sort((a, b) => a[0].localeCompare(b[0])).map(([cat, its]) => `<div class="lgrp"><div class="lgt">${CATS[cat] || "📦"} ${cat}</div><div class="ilst">${its.map(iH).join("")}</div></div>`).join("");
    if (state.selectMode === "inv") document.querySelectorAll("#ibody .swipe-wrap").forEach(w => { w.classList.add("selecting"); if (state.selectedIds.has(w.dataset.id)) w.classList.add("selected"); });
    return;
  }
  if (state.it === "all") {
    const ex = state.inv.filter(i => { const s = xSt(i.expiry); return s && (s.c === "expiring" || s.c === "expired"); }).sort((a, b) => new Date(a.expiry) - new Date(b.expiry));
    const exH = ex.length ? `<div class="lgrp"><div class="lgt" style="color:var(--am)">⚠️ Expiring Soon</div><div class="ilst">${ex.map(iH).join("")}</div></div>` : "";
    c.innerHTML = exH + ["fridge", "freezer", "pantry"].map(loc => { const its = f.filter(i => i.location === loc); return its.length ? `<div class="lgrp"><div class="lgt">${ll(loc)}</div><div class="ilst">${its.map(iH).join("")}</div></div>` : ""; }).join("");
    if (state.selectMode === "inv") document.querySelectorAll("#ibody .swipe-wrap").forEach(w => { w.classList.add("selecting"); if (state.selectedIds.has(w.dataset.id)) w.classList.add("selected"); });
    return;
  }
  c.innerHTML = `<div class="ilst">${f.map(iH).join("")}</div>`;
  if (state.selectMode === "inv") {
    document.querySelectorAll("#ibody .swipe-wrap").forEach(w => { w.classList.add("selecting"); if (state.selectedIds.has(w.dataset.id)) w.classList.add("selected"); });
  }
}

// openAdj(id) — opens the Adjust Item overlay for an inventory item
export function openAdj(id) {
  const item = state.inv.find(i => i.id === id);
  if (!item) return;
  state.adjId = id;
  const ic = CATS[gcat(item)] || "🛒",
    img = item.image ? `<img src="${item.image}" class="pimg" onerror="this.style.display='none'"/>` : `<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">${ic}</div>`;
  let nut = "";
  if (item.nutrition && (item.nutrition.calories || item.nutrition.protein)) {
    nut = `<div class="ngrd">${[["Cal", item.nutrition.calories], ["Protein", item.nutrition.protein], ["Fat", item.nutrition.fat], ["Carbs", item.nutrition.carbs]].map(([l, v]) => `<div class="nb"><div class="nv">${v || "—"}</div><div class="nl">${l}</div></div>`).join("")}</div>`;
  }
  g("adjbody").innerHTML = `<div class="pcard"><div class="phdr">${img}<div style="flex:1"><div class="pnm">${item.name}</div>${item.brand ? `<div class="pbr">${item.brand}</div>` : ""}<div style="font-size:.7rem;color:var(--mt);margin-top:2px">Added ${item.addedAt}</div>${item.source ? `<span class="srcb" style="display:inline-block;margin-top:4px">${item.source}</span>` : ""}</div></div>${nut}<div class="frow" style="margin-top:14px"><label class="flbl">Location</label><div class="lpick"><button class="lbtn ${item.location === "fridge" ? "sel" : ""}" onclick="updL('fridge',this)">🌡 Fridge</button><button class="lbtn ${item.location === "freezer" ? "sel" : ""}" onclick="updL('freezer',this)">🧊 Freezer</button><button class="lbtn ${item.location === "pantry" ? "sel" : ""}" onclick="updL('pantry',this)">🥫 Pantry</button></div></div><div class="qrow"><span class="qlbl">Quantity</span><div class="qctl"><button class="qbtn" onclick="adjQ(-1)">−</button><input class="qinp" id="adjqty" type="number" min="0" value="${item.qty}" oninput="adjQD()"/><button class="qbtn" onclick="adjQ(1)">+</button></div></div><div class="frow"><label class="flbl">Expiry Date <span class="otag">optional</span></label><input class="fd" id="adjexp" type="date" value="${item.expiry || ""}" onchange="adjE()"/></div><div class="frow"><label class="flbl">Notes <span class="otag">optional</span></label><textarea class="sh-note-inp" id="adjnote" rows="2" placeholder="Brand, store, reminders…" onblur="adjNote()">${item.note || ""}</textarea></div></div>`;
  g("rembtn").onclick = () => remItem(id);
  showOv("adj");
}

// remItem(id) — removes inventory item, logs to waste if expiring/expired
export async function remItem(id) {
  const item = state.inv.find(i => i.id === id);
  if (item) {
    const s = xSt(item.expiry);
    if (s && (s.c === "expired" || s.c === "expiring")) await addWasteEntry(item.name);
  }
  await dli(id);
  showNotif("Item removed");
  hideOv("adj");
}

// Adjust overlay handlers
export async function updL(loc, btn) {
  const item = state.inv.find(i => i.id === state.adjId);
  if (!item) return;
  document.querySelectorAll("#adjbody .lbtn").forEach(b => b.classList.remove("sel"));
  btn.classList.add("sel");
  await svi({ ...item, location: loc });
}

export async function adjQ(d) {
  const item = state.inv.find(i => i.id === state.adjId);
  if (!item) return;
  const q = Math.max(0, item.qty + d);
  g("adjqty").value = q;
  if (q === 0) { await remItem(state.adjId); return; }
  await svi({ ...item, qty: q });
}

export async function adjQD() {
  const item = state.inv.find(i => i.id === state.adjId);
  if (!item) return;
  const v = parseInt(g("adjqty").value);
  if (!isNaN(v) && v >= 0) await svi({ ...item, qty: v });
}

export async function adjE() {
  const item = state.inv.find(i => i.id === state.adjId);
  if (!item) return;
  await svi({ ...item, expiry: g("adjexp").value || null });
}

export async function adjNote() {
  const item = state.inv.find(i => i.id === state.adjId);
  if (!item) return;
  const v = (g("adjnote").value || "").trim();
  await svi({ ...item, note: v || null });
}

// setIT(tab) — changes inventory tab filter
export function setIT(t) {
  state.it = t;
  document.querySelectorAll(".itab").forEach(x => x.classList.remove("active"));
  const el = g("itab-" + t);
  if (el) el.classList.add("active");
  renderInv();
}

// addManual() — adds a manually-entered item to inventory
export async function addManual() {
  const nm = g("man").value.trim();
  if (!nm) return;
  const cat = g("mac").value, unit = g("mau").value.trim() || "unit",
    qty = Math.max(1, parseInt(g("maq").value) || 1),
    exp = g("mae").value || null,
    id = "itm-" + nm.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") + "-" + Date.now();
  await svi({ id, barcode: id, name: nm, brand: "", unit, qty, location: state.maL, category: cat, image: null, source: "Manual", nutrition: null, expiry: exp, addedAt: new Date().toLocaleDateString() });
  g("man").value = ""; g("maq").value = 1; g("mae").value = "";
  g("mabtn").disabled = true;
  showNotif(`${nm} added!`); hideOv("madd");
}

// valMA() — validates manual add form
export function valMA() { g("mabtn").disabled = !g("man").value.trim(); }

// chgMQ(d) — changes manual add quantity
export function chgMQ(d) { const i = g("maq"); i.value = Math.max(1, (parseInt(i.value) || 1) + d); }

// selML(loc, btn) — selects location in manual add
export function selML(loc, btn) {
  state.maL = loc;
  document.querySelectorAll("#ov-madd .lbtn").forEach(b => b.classList.remove("sel"));
  if (btn) btn.classList.add("sel");
}

// importDoc() — imports a living document to bulk-update inventory
export async function importDoc() {
  const text = g("imptxt").value.trim();
  if (!text) return;
  let imported = 0, updated = 0, curL = "pantry";
  for (const line of text.split("\n")) {
    const lw = line.toLowerCase();
    if (lw.includes("fridge")) curL = "fridge";
    else if (lw.includes("freezer")) curL = "freezer";
    else if (lw.includes("pantry")) curL = "pantry";
    const tm = line.match(/^\|\s*([^|]+?)\s*\|\s*(\d+(?:\.\d+)?)\s*\|\s*([^|]+?)\s*\|/);
    const lm = line.match(/^[-*]\s+(.+?):\s*(\d+(?:\.\d+)?)\s*([a-zA-Z%\/]+.*)?$/);
    let name, qty, unit;
    if (tm) { name = tm[1].trim(); qty = parseFloat(tm[2]); unit = tm[3].trim(); }
    else if (lm) { name = lm[1].trim(); qty = parseFloat(lm[2]); unit = (lm[3] || "unit").trim(); }
    if (name && qty && name !== "Item" && name !== "---" && !name.startsWith("-")) {
      const id = "item-imp-" + name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
      const ex = state.inv.find(i => i.id === id);
      await svi({ id, barcode: id, name, brand: "", unit: unit || "unit", qty, location: curL, category: "Imported", image: null, source: "Imported", nutrition: null, expiry: null, addedAt: ex ? ex.addedAt : new Date().toLocaleDateString() });
      ex ? updated++ : imported++;
    }
  }
  g("imptxt").value = "";
  showNotif(`Imported ${imported} new, updated ${updated}`);
  hideOv("import");
}
