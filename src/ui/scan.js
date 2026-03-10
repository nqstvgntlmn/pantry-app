// ── BARCODE SCANNER ──────────────────────────────────────────────────────────
// Scan barcodes via Quagga.js, look up products via Edamam/OpenFoodFacts/UPCItemDB

import { state } from '../state.js';
import { svi, svShopItem } from '../db.js';
import { g, showNotif, showOv, hideOv } from '../helpers.js';

// Edamam API credentials (barcode -> nutrition lookup)
const EID = "2b6ecac2", EK = "8db76605e873aaf2fbdf41256cb24cb4";

// startScan() — opens file picker for barcode photo
export function startScan() {
  g("scerr").style.display = "none";
  g("ffile").click();
}

// openScanForList() — opens scan in "add to shopping list" mode
export function openScanForList() {
  state.scanDestList = true;
  showOv("scan");
  const ttl = g("scanovttl"); if (ttl) ttl.textContent = "Scan → Shopping List";
  const hint = g("scan-dest-hint"); if (hint) hint.textContent = "Running low? Scan to add to your shopping list.";
}

// openScanForInventory() — opens scan in "add to inventory" mode (default)
export function openScanForInventory() {
  state.scanDestList = false;
  showOv("scan");
  const ttl = g("scanovttl"); if (ttl) ttl.textContent = "Scan Barcode";
  const hint = g("scan-dest-hint"); if (hint) hint.textContent = "Scan a barcode to add to your pantry or shopping list.";
}

// addScannedToList() — adds the scanned product to shopping list instead of inventory
export function addScannedToList() {
  if (!state.cp) return;
  const name = state.cp.notFound ? ("Barcode " + state.cp.barcode) : state.cp.name;
  const qty = parseInt(g("aqty").value) || 1;
  const unit = g("aunit").value.trim();
  const display = name + (qty > 1 || unit ? " (" + qty + (unit ? " " + unit : "") + ")" : "");
  svShopItem({ id: Date.now().toString(), name: display, checked: false, src: "scan" });
  showNotif("Added to list: " + name);
  hideOv("result"); hideOv("scan");
  state.scanDestList = false;
  window.showScreen("shopping");
}

// togManual() — toggles the manual barcode entry field
export function togManual() {
  const el = g("mentry");
  el.style.display = el.style.display === "none" ? "block" : "none";
}

// handlePhoto(event) — triggered when user selects a barcode photo
export async function handlePhoto(e) {
  const file = e.target.files[0]; if (!file) return;
  e.target.value = "";
  g("scanbody").style.display = "none";
  g("scspin").style.display = "block";
  g("scst").textContent = "Reading image…";
  const url = await new Promise((r, j) => { const x = new FileReader(); x.onload = e => r(e.target.result); x.onerror = j; x.readAsDataURL(file); });
  try {
    g("scst").textContent = "Detecting barcode…";
    const code = await new Promise((res, rej) => Quagga.decodeSingle({ src: url, numOfWorkers: 0, inputStream: { size: 1600 }, decoder: { readers: ["ean_reader", "ean_8_reader", "upc_reader", "upc_e_reader", "code_128_reader", "code_39_reader"], multiple: false }, locate: true }, r => { if (r && r.codeResult && r.codeResult.code) res(r.codeResult.code); else rej("no"); }));
    g("scst").textContent = "Found " + code + " — looking up…";
    const prod = await lkup(code);
    state.cp = prod;
    g("aqty").value = 1; g("aexp").value = "";
    selRL("fridge", g("rl-fridge"));
    showRes(prod);
    g("scanbody").style.display = "block";
    g("scspin").style.display = "none";
  } catch {
    g("scanbody").style.display = "block";
    g("scspin").style.display = "none";
    const err = g("scerr");
    err.textContent = "⚠️ No barcode detected. Try better lighting or enter manually.";
    err.style.display = "block";
  }
}

// manLookup() — looks up a manually entered barcode
export async function manLookup() {
  const v = g("meinp").value.trim(); if (!v) return;
  g("scanbody").style.display = "none";
  g("scspin").style.display = "block";
  g("scst").textContent = "Looking up…";
  const prod = await lkup(v);
  state.cp = prod;
  g("aqty").value = 1; g("aexp").value = "";
  selRL("fridge", g("rl-fridge"));
  g("meinp").value = "";
  showRes(prod);
  g("scanbody").style.display = "block";
  g("scspin").style.display = "none";
}

// lkup(barcode) — tries three product databases in sequence
async function lkup(bc) {
  return (await tryE(bc)) || (await tryO(bc)) || (await tryU(bc)) || { barcode: bc, name: "", brand: "", quantity: "", category: "General", image: null, source: null, notFound: true };
}

// tryE — Edamam food database lookup
async function tryE(bc) {
  try {
    const r = await fetch(`https://api.edamam.com/api/food-database/v2/parser?upc=${bc}&app_id=${EID}&app_key=${EK}`);
    if (!r.ok) return null;
    const d = await r.json();
    const f = (d.hints && d.hints[0] && d.hints[0].food) || (d.parsed && d.parsed[0] && d.parsed[0].food);
    if (!f) return null;
    const n = f.nutrients || {};
    return { barcode: bc, name: f.label || "", brand: f.brand || "", quantity: f.servingSize ? `${f.servingSize}${f.servingSizeUnit || "g"}` : "", category: f.category || "General", image: f.image || null, source: "Edamam", notFound: false, nutrition: { calories: n.ENERC_KCAL ? Math.round(n.ENERC_KCAL) : null, protein: n.PROCNT ? `${n.PROCNT.toFixed(1)}g` : null, fat: n.FAT ? `${n.FAT.toFixed(1)}g` : null, carbs: n.CHOCDF ? `${n.CHOCDF.toFixed(1)}g` : null } };
  } catch {} return null;
}

// tryO — Open Food Facts lookup
async function tryO(bc) {
  try {
    const r = await fetch("https://world.openfoodfacts.org/api/v0/product/" + bc + ".json");
    const d = await r.json();
    if (d.status === 1 && d.product) {
      const p = d.product, nm = p.product_name || p.product_name_en || "";
      if (!nm) return null;
      return { barcode: bc, name: nm, brand: p.brands || "", quantity: p.quantity || "", category: ((p.categories_tags || [])[0] || '').replace('en:', '') || 'General', image: p.image_small_url || null, source: "Open Food Facts", notFound: false, nutrition: null };
    }
  } catch {} return null;
}

// tryU — UPC Item DB lookup
async function tryU(bc) {
  try {
    const r = await fetch("https://api.upcitemdb.com/prod/trial/lookup?upc=" + bc);
    const d = await r.json();
    if (d.code === "OK" && d.items && d.items.length > 0) {
      const i = d.items[0];
      return { barcode: bc, name: i.title || "", brand: i.brand || "", quantity: i.size || "", category: i.category || "General", image: (i.images || [])[0] || null, source: "UPC Item DB", notFound: false, nutrition: null };
    }
  } catch {} return null;
}

// showRes(prod) — displays the scan result overlay
function showRes(prod) {
  hideOv("scan");
  g("resttl").textContent = prod.notFound ? "Not Found" : "Product Found ✓";
  g("aunit").value = prod.quantity || "unit";
  let html = "";
  if (prod.notFound) {
    html = `<div class="nfb">⚠️ Barcode <code>${prod.barcode}</code> not found. Enter name:<input class="fi" id="mnm" placeholder="Product name (required)" oninput="valAdd()" style="margin-top:10px"/></div>`;
    setTimeout(() => g("addbtn").disabled = true, 0);
  } else {
    const img = prod.image ? `<img src="${prod.image}" class="pimg" onerror="this.style.display='none'"/>` : `<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">🛒</div>`;
    let nut = "";
    if (prod.nutrition && (prod.nutrition.calories || prod.nutrition.protein)) {
      nut = `<div class="ngrd">${[["Cal", prod.nutrition.calories], ["Protein", prod.nutrition.protein], ["Fat", prod.nutrition.fat], ["Carbs", prod.nutrition.carbs]].map(([l, v]) => `<div class="nb"><div class="nv">${v || "—"}</div><div class="nl">${l}</div></div>`).join("")}</div>`;
    }
    html = `<div class="pcard"><div class="phdr">${img}<div style="flex:1"><div class="pnm">${prod.name}</div>${prod.brand ? `<div class="pbr">${prod.brand}</div>` : ""}<div class="pbc">${prod.barcode}</div><span class="bdg">${prod.category}</span>${prod.source ? `<span class="srcb">${prod.source}</span>` : ""}</div></div>${nut}</div>`;
    setTimeout(() => g("addbtn").disabled = false, 0);
  }
  g("resbody").innerHTML = html;
  showOv("result");
}

// selRL(loc, btn) — selects location in scan result overlay
export function selRL(loc, btn) {
  state.selR = loc;
  document.querySelectorAll("#ov-result .lbtn").forEach(b => b.classList.remove("sel"));
  if (btn) btn.classList.add("sel");
}

// valAdd() — validates the manual name input on not-found products
export function valAdd() {
  const el = g("mnm");
  g("addbtn").disabled = !(el && el.value.trim());
}

// addToInv() — adds the scanned product to inventory
export async function addToInv() {
  if (!state.cp) return;
  const ne = g("mnm");
  const nm = state.cp.notFound ? (ne ? ne.value.trim() || "" : "") : state.cp.name;
  if (!nm) return;
  const unit = g("aunit").value.trim() || "unit", qty = Math.max(1, parseInt(g("aqty").value) || 1), exp = g("aexp").value || null;
  const id = "item-" + state.cp.barcode.replace(/\W/g, "-"), ex = state.inv.find(i => i.id === id);
  await svi({ id, barcode: state.cp.barcode, name: nm, brand: state.cp.brand || "", unit, qty: ex ? ex.qty + qty : qty, location: state.selR, category: state.cp.category || "General", image: state.cp.image || null, source: state.cp.source || null, nutrition: state.cp.nutrition || null, expiry: exp, addedAt: ex ? ex.addedAt : new Date().toLocaleDateString() });
  showNotif(ex ? `+${qty} added to ${nm}` : `${nm} added!`);
  state.cp = null;
  hideOv("result");
}

// chgAQ(d) — changes the scan result quantity
export function chgAQ(d) {
  const i = g("aqty");
  i.value = Math.max(1, (parseInt(i.value) || 1) + d);
}
