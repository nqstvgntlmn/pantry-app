// ── MAIN ENTRY POINT ─────────────────────────────────────────────────────────
// Imports all modules, registers window handlers, and starts the app.

import './styles.css';
import { state, CFG_DEFAULT, J, Js } from './state.js';
import { dbList, loadFirestoreData, renderCallbacks, ss, svi, dli, svr, dlr, svShopItem, dlShopItem } from './db.js';
import { g, showNotif, showOv, hideOv, renderStars, tk } from './helpers.js';

// UI modules
import { initHome, renderHome, renderAll, renderSum, renderWeek, renderTonight, updExport, setRenderInv } from './ui/home.js';
import { renderInv, openAdj, remItem, updL, adjQ, adjQD, adjE, adjNote, setIT, addManual, valMA, chgMQ, selML, importDoc } from './ui/inventory.js';
import { renderShop, qadd, togShop, toggleShNote, saveShNote, togAisle, setSHT, shareList, openAddToKitchen, setAtkLoc, confirmAddToKitchen, buildList, bpTog, bpSelAll, bpConfirm, searchDeals, dealsFromList, testProxy, addDealToList } from './ui/shopping.js';
import { renderRecs, togFav, valR, importFromUrl, saveRec, openER, updR, delER, scaleRec, whatCanIMake, addRecIngToShop, setStar, setRT, togTag } from './ui/recipes.js';
import { renderInsights } from './ui/insights.js';
import { sendChat, sendPill, clrChat, ar, kitCtx } from './ui/chat.js';
import { startScan, openScanForList, openScanForInventory, addScannedToList, togManual, handlePhoto, manLookup, selRL, valAdd, addToInv, chgAQ } from './ui/scan.js';
import { initSwipe, swipeDelItem, swipeRowTap, togShopSelect, togInvSelect, cancelSelect, deleteSelected } from './ui/swipe.js';
import { openMealM, pickRec, closeMealM, saveMeal, clrMeal, openCooked, skipCooked, saveCooked, scheduleRecipe, schedSet, initRecChips, toggleChip, filterRecs } from './ui/mealplan.js';
import { loadCfgUI, saveSettings, toggleNotif, testNotif, scheduleNotifCheck, addHousehold, switchHousehold, removeHousehold, applyTheme, setMode, initTheme, refreshSettingsUI } from './ui/settings.js';

// ── REGISTER RENDER CALLBACKS ────────────────────────────────────────────────
// These are called by db.js data operations to update the UI after data changes.
renderCallbacks.renderAll = renderAll;
renderCallbacks.renderSum = renderSum;
renderCallbacks.renderRecs = renderRecs;
renderCallbacks.renderShop = renderShop;

// Register inventory render function in home.js to break circular dependency
setRenderInv(renderInv);

// ── SCREEN NAVIGATION ────────────────────────────────────────────────────────

window.showScreen = function(n) {
  document.querySelectorAll(".ov.active").forEach(o => o.classList.remove("active"));
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.querySelectorAll(".ni").forEach(v => v.classList.remove("active"));
  g("screen-" + n)?.classList.add("active");
  g("nav-" + n)?.classList.add("active");
  if (n === "home") renderHome();
  if (n === "inventory") renderInv();
  if (n === "recipes") renderRecs();
  if (n === "shopping") renderShop();
  if (n === "insights") renderInsights();
};

// Overlay show/hide with settings refresh hook
const _baseShowOv = showOv;
window.showOv = function(n) {
  _baseShowOv(n);
  if (n === "settings") setTimeout(refreshSettingsUI, 80);
};
window.hideOv = hideOv;

// ── WINDOW HANDLERS ──────────────────────────────────────────────────────────
// All functions referenced by HTML onclick attributes must be on window.*

// Home
window.initHome = initHome;
window.toggleExp = function() { const p = g("exppanel"); p.style.display = p.style.display === "none" ? "block" : "none"; };

// Inventory
window.openAdj = openAdj;
window.updL = updL;
window.adjQ = adjQ;
window.adjQD = adjQD;
window.adjE = adjE;
window.adjNote = adjNote;
window.setIT = setIT;
window.addManual = addManual;
window.valMA = valMA;
window.chgMQ = chgMQ;
window.selML = selML;
window.remItem = remItem;
window.importDoc = importDoc;

// Shopping
window.qadd = qadd;
window.togShop = togShop;
window.toggleShNote = toggleShNote;
window.saveShNote = saveShNote;
window.togAisle = togAisle;
window.setSHT = setSHT;
window.shareList = shareList;
window.openAddToKitchen = openAddToKitchen;
window.setAtkLoc = setAtkLoc;
window.confirmAddToKitchen = confirmAddToKitchen;
window.buildList = buildList;
window.bpTog = bpTog;
window.bpSelAll = bpSelAll;
window.bpUpdBtn = function() { /* handled internally */ };
window.bpConfirm = bpConfirm;
window._bpItems = [];
window.searchDeals = searchDeals;
window.dealsFromList = dealsFromList;
window.testProxy = testProxy;
window.addDealToList = addDealToList;
window.clrChk = function() { state.shop.filter(i => i.checked).forEach(i => dlShopItem(i.id)); };

// Recipes
window.setRT = setRT;
window.togFav = togFav;
window.valR = valR;
window.importFromUrl = importFromUrl;
window.saveRec = saveRec;
window.openER = openER;
window.updR = updR;
window.delER = delER;
window.scaleRec = scaleRec;
window.whatCanIMake = whatCanIMake;
window.addRecIngToShop = addRecIngToShop;
window.setStar = setStar;
window.togTag = togTag;

// Chat
window.sendChat = sendChat;
window.sendPill = sendPill;
window.clrChat = clrChat;
window.ar = ar;

// Scanner
window.startScan = startScan;
window.openScanForList = openScanForList;
window.openScanForInventory = openScanForInventory;
window.addScannedToList = addScannedToList;
window.togManual = togManual;
window.handlePhoto = handlePhoto;
window.manLookup = manLookup;
window.selRL = selRL;
window.valAdd = valAdd;
window.addToInv = addToInv;
window.chgAQ = chgAQ;

// Swipe / Multi-select
window.swipeDelItem = swipeDelItem;
window.swipeRowTap = swipeRowTap;
window.togShopSelect = togShopSelect;
window.togInvSelect = togInvSelect;
window.cancelSelect = cancelSelect;
window.deleteSelected = deleteSelected;

// Meal plan
window.openMealM = openMealM;
window.pickRec = pickRec;
window.closeMealM = closeMealM;
window.saveMeal = saveMeal;
window.clrMeal = clrMeal;
window.openCooked = openCooked;
window.skipCooked = skipCooked;
window.saveCooked = saveCooked;
window.scheduleRecipe = scheduleRecipe;
window.schedSet = schedSet;
window.initRecChips = initRecChips;
window.toggleChip = toggleChip;
window.filterRecs = filterRecs;
window._pickedRec = null;
window._activeChips = new Set();

// Settings / Themes / Households
window.saveSettings = saveSettings;
window.toggleNotif = toggleNotif;
window.testNotif = testNotif;
window.addHousehold = addHousehold;
window.switchHousehold = switchHousehold;
window.removeHousehold = removeHousehold;
window.setMode = setMode;
window.showNotif = showNotif;

// ── APP START ────────────────────────────────────────────────────────────────

window._appStart = async function(code) {
  state.hid = code;
  g("LS").style.display = "none";
  g("APP").style.display = "flex";
  window.showScreen("home");
  ss("syncing");

  // Ensure current household is in the saved list
  const arr = J("ks-hhs") || [code];
  if (!arr.includes(code)) { arr.push(code); Js("ks-hhs", arr); }

  // Load Firestore data (mp, cfg, cookLog, wasteLog) + one-time migration
  await loadFirestoreData();
  loadCfgUI();
  initHome();

  // poll() — fetches ALL Firestore collections every 6 seconds
  async function poll() {
    try {
      ss("syncing");
      const res = await Promise.allSettled([
        dbList(`households/${state.hid}/inventory`),
        dbList(`households/${state.hid}/recipes`),
        dbList(`households/${state.hid}/shopping`),
        dbList(`households/${state.hid}/mealplan`),
        dbList(`households/${state.hid}/settings`),
        dbList(`households/${state.hid}/cooklog`),
        dbList(`households/${state.hid}/wastelog`)
      ]);
      const v = (r, fb) => r.status === "fulfilled" ? r.value : fb;
      state.inv = v(res[0], state.inv);
      state.recs = v(res[1], state.recs);
      state.shop = v(res[2], state.shop);
      const mpDocs = v(res[3], []);
      const cfgDocs = v(res[4], []);
      const clDocs = v(res[5], []);
      const wlDocs = v(res[6], []);
      const newMp = {}; mpDocs.forEach(d => { if (d.date && d.meal) newMp[d.date] = d.meal; }); state.mp = newMp;
      const cfgDoc = cfgDocs.find(d => d.id === "config");
      if (cfgDoc) state.cfg = { ...CFG_DEFAULT, ...cfgDoc };
      state.cookLog = clDocs.sort((a, b) => new Date(b.loggedAt || b.date || 0) - new Date(a.loggedAt || a.date || 0));
      state.wasteLog = wlDocs.sort((a, b) => new Date(b.loggedAt || b.date || 0) - new Date(a.loggedAt || a.date || 0));
      ss("synced");
      renderAll(); renderRecs(); renderShop(); renderSum();
    } catch (e) {
      console.error("poll error", e);
      ss("error");
    }
  }
  window._poll = poll;
  poll();
  setInterval(poll, 6000);
};

// ── INITIALIZATION ───────────────────────────────────────────────────────────

// Init theme engine
initTheme();

// Init swipe-to-delete touch handlers
initSwipe();

// Init notification check
if (state.cfg.notif) setTimeout(scheduleNotifCheck, 3000);

// Render initial state
renderShop();

// ── LOGIN FLOW ───────────────────────────────────────────────────────────────

function doEnter() {
  const raw = g("hci")?.value || "";
  const c = raw.trim().toLowerCase().replace(/\s+/g, "-") || "my-kitchen";
  localStorage.setItem("ks-h", c);
  if (localStorage.getItem("ks-who")) {
    g("LS").style.display = "none";
    g("APP").style.display = "flex";
    window._appStart(c);
    return;
  }
  g("ls-code").style.display = "none";
  g("ls-who").style.display = "flex";
}

function doPick(name) {
  localStorage.setItem("ks-who", name);
  const c = localStorage.getItem("ks-h") || "my-kitchen";
  g("LS").style.display = "none";
  g("APP").style.display = "flex";
  window._appStart(c);
}

window.doEnter = doEnter;

// Set up login event listeners
const eb = g("enterBtn");
const hci = g("hci");
const pb = g("pickBora");
const pbu = g("pickBushra");
if (eb) eb.addEventListener("click", doEnter);
if (hci) hci.addEventListener("keydown", e => { if (e.key === "Enter") doEnter(); });
if (pb) pb.addEventListener("click", () => doPick("Bora"));
if (pbu) pbu.addEventListener("click", () => doPick("Bushra"));

// Auto-login if household code exists in localStorage
const savedHid = localStorage.getItem("ks-h");
if (savedHid) {
  g("LS").style.display = "none";
  g("APP").style.display = "flex";
  window._appStart(savedHid);
}
