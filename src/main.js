// ── MAIN ENTRY POINT ─────────────────────────────────────────────────────────
// Imports all modules, registers window handlers, and starts the app.

import './styles.css';
import { state, CFG_DEFAULT, J, Js } from './state.js';
import { dbList, loadFirestoreData, renderCallbacks, ss, svi, dli, svr, dlr, svShopItem, dlShopItem } from './db.js';
import { g, showNotif, showOv, hideOv, renderStars, tk } from './helpers.js';
import { onAuth, signInGoogle, signInApple, signInEmail, signUpEmail, signOut, getCurrentUser } from './auth.js';

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

// ── AUTH FLOW ────────────────────────────────────────────────────────────────
// Firebase Auth drives the entire login/app lifecycle.
// On sign-in: resolve household → _appStart.
// On sign-out: show auth screen.

// showAuthScreen(view) — toggles between "signin" and "signup" views
function showAuthScreen(view) {
  g("auth-loading").style.display = "none";
  g("auth-signin").style.display = view === "signin" ? "flex" : "none";
  g("auth-signup").style.display = view === "signup" ? "flex" : "none";
  g("authError").style.display = "none";
  g("signupError").style.display = "none";
}

// showAuthError(id, msg) — display an error in the given container
function showAuthError(id, msg) {
  const el = g(id);
  if (!el) return;
  el.textContent = msg;
  el.style.display = "block";
}

// friendlyAuthError(err) — convert Firebase error codes to readable messages
function friendlyAuthError(err) {
  const map = {
    'auth/invalid-email': 'Please enter a valid email address.',
    'auth/user-disabled': 'This account has been disabled.',
    'auth/user-not-found': 'No account found with this email.',
    'auth/wrong-password': 'Incorrect password.',
    'auth/invalid-credential': 'Incorrect email or password.',
    'auth/email-already-in-use': 'An account with this email already exists.',
    'auth/weak-password': 'Password must be at least 6 characters.',
    'auth/too-many-requests': 'Too many attempts. Please try again later.',
    'auth/popup-closed-by-user': 'Sign-in popup was closed.',
    'auth/cancelled-popup-request': 'Sign-in was cancelled.',
    'auth/account-exists-with-different-credential': 'An account already exists with this email using a different sign-in method.',
  };
  return map[err.code] || err.message || 'Something went wrong. Please try again.';
}

// disableBtn(btn, loading) — toggle button disabled state with spinner text
function disableBtn(btn, loading) {
  if (!btn) return;
  if (loading) {
    btn._origText = btn.textContent;
    btn.textContent = "Please wait…";
    btn.disabled = true;
  } else {
    btn.textContent = btn._origText || btn.textContent;
    btn.disabled = false;
  }
}

// ── Auth button handlers ────────────────────────────────────────────────────

// Google sign-in
g("btnGoogle")?.addEventListener("click", async () => {
  const btn = g("btnGoogle");
  disableBtn(btn, true);
  g("authError").style.display = "none";
  try {
    await signInGoogle();
  } catch (err) {
    showAuthError("authError", friendlyAuthError(err));
  }
  disableBtn(btn, false);
});

// Apple sign-in
g("btnApple")?.addEventListener("click", async () => {
  const btn = g("btnApple");
  disableBtn(btn, true);
  g("authError").style.display = "none";
  try {
    await signInApple();
  } catch (err) {
    showAuthError("authError", friendlyAuthError(err));
  }
  disableBtn(btn, false);
});

// Email sign-in
g("btnEmailSign")?.addEventListener("click", async () => {
  const email = g("authEmail")?.value?.trim();
  const pass = g("authPass")?.value;
  if (!email || !pass) {
    showAuthError("authError", "Please enter your email and password.");
    return;
  }
  const btn = g("btnEmailSign");
  disableBtn(btn, true);
  g("authError").style.display = "none";
  try {
    await signInEmail(email, pass);
  } catch (err) {
    showAuthError("authError", friendlyAuthError(err));
  }
  disableBtn(btn, false);
});

// Email sign-up
g("btnEmailSignup")?.addEventListener("click", async () => {
  const name = g("signupName")?.value?.trim();
  const email = g("signupEmail")?.value?.trim();
  const pass = g("signupPass")?.value;
  if (!name) {
    showAuthError("signupError", "Please enter your name.");
    return;
  }
  if (!email || !pass) {
    showAuthError("signupError", "Please enter your email and password.");
    return;
  }
  const btn = g("btnEmailSignup");
  disableBtn(btn, true);
  g("signupError").style.display = "none";
  try {
    await signUpEmail(email, pass, name);
  } catch (err) {
    showAuthError("signupError", friendlyAuthError(err));
  }
  disableBtn(btn, false);
});

// Toggle between sign-in and sign-up views
g("btnToggleSignup")?.addEventListener("click", () => showAuthScreen("signup"));
g("btnToggleSignin")?.addEventListener("click", () => showAuthScreen("signin"));

// Allow Enter key to submit email forms
g("authPass")?.addEventListener("keydown", e => { if (e.key === "Enter") g("btnEmailSign")?.click(); });
g("signupPass")?.addEventListener("keydown", e => { if (e.key === "Enter") g("btnEmailSignup")?.click(); });

// ── Sign out (called from settings) ─────────────────────────────────────────
window.doSignOut = async function() {
  if (!confirm("Sign out of Kitchen?")) return;
  await signOut();
};

// ── Auth state listener — drives the entire app lifecycle ───────────────────
let appBooted = false;

onAuth((user) => {
  if (user) {
    // User is signed in → resolve household and boot app
    // Use uid-based household for now; Phase 2 steps 4-5 will add proper household resolution
    const hid = localStorage.getItem("ks-h") || user.uid;
    localStorage.setItem("ks-h", hid);
    localStorage.setItem("ks-who", user.displayName || user.email?.split("@")[0] || "You");

    g("LS").style.display = "none";
    g("APP").style.display = "flex";

    if (!appBooted) {
      appBooted = true;
      window._appStart(hid);
    }
  } else {
    // User is signed out → show auth screen, hide app
    appBooted = false;
    g("APP").style.display = "none";
    g("LS").style.display = "flex";
    showAuthScreen("signin");
  }
});
