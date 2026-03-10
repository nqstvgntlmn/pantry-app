// ── SETTINGS + THEMES + HOUSEHOLDS ────────────────────────────────────────────

import { state, J, Js } from '../state.js';
import { saveCfg } from '../db.js';
import { g, xSt, showNotif, showOv, hideOv } from '../helpers.js';
import { initHome } from './home.js';

// ── SETTINGS ─────────────────────────────────────────────────────────────────

// loadCfgUI() — populates settings form fields from the current cfg object
export function loadCfgUI() {
  const el = (id) => g(id);
  const v = (id, val) => { const e = el(id); if (e) e.value = val || ""; };
  v("setName", state.cfg.name);
  v("setAdults", state.cfg.adults);
  v("setKids", state.cfg.kids);
  v("setOther", state.cfg.other);
  v("setCuisines", state.cfg.cuisines);
  v("setCookTime", state.cfg.cookTime);
  // Toggles
  const tog = (id, on) => { const e = el(id); if (e) e.classList.toggle("on", !!on); };
  tog("tg-nopork", state.cfg.nopork);
  tog("tg-noshellfish", state.cfg.noshellfish);
  tog("tg-vegetarian", state.cfg.vegetarian);
  tog("tg-glutenfree", state.cfg.glutenfree);
  tog("tg-notif", state.cfg.notif);
  const ntr = g("notifTimeRow");
  if (ntr) ntr.style.display = state.cfg.notif ? "block" : "none";
  v("setNotifTime", state.cfg.notifTime || "8");
  v("setNotifDays", String(state.cfg.notifDays || 3));
  renderHHList();
}

// saveSettings() — collects form values, writes to cfg, saves to Firestore
export async function saveSettings() {
  state.cfg = { ...state.cfg,
    name: g("setName").value.trim(),
    adults: g("setAdults").value.trim(),
    kids: g("setKids").value.trim(),
    nopork: g("tg-nopork").classList.contains("on"),
    noshellfish: g("tg-noshellfish").classList.contains("on"),
    vegetarian: g("tg-vegetarian").classList.contains("on"),
    glutenfree: g("tg-glutenfree").classList.contains("on"),
    other: g("setOther").value.trim(),
    cuisines: g("setCuisines").value.trim(),
    cookTime: g("setCookTime").value,
    notif: g("tg-notif").classList.contains("on"),
    notifTime: (g("setNotifTime") ? g("setNotifTime").value : "8"),
    notifDays: parseInt((g("setNotifDays") ? g("setNotifDays").value : "3"))
  };
  await saveCfg();
  if (state.cfg.notif) scheduleNotifCheck();
  showNotif("Settings saved!"); hideOv("settings"); initHome();
}

// ── NOTIFICATIONS ────────────────────────────────────────────────────────────

export async function toggleNotif(el) {
  const wasOn = el.classList.contains("on");
  if (!wasOn) {
    if (!("Notification" in window)) { showNotif("Notifications not supported on this browser"); return; }
    if (Notification.permission === "denied") { showNotif("Notifications blocked — enable in browser settings"); return; }
    if (Notification.permission !== "granted") {
      const p = await Notification.requestPermission();
      if (p !== "granted") { showNotif("Notifications permission denied"); return; }
    }
  }
  el.classList.toggle("on");
  const ntr = g("notifTimeRow");
  if (ntr) ntr.style.display = el.classList.contains("on") ? "block" : "none";
}

export function testNotif() {
  if (Notification.permission !== "granted") { showNotif("Enable notifications first"); return; }
  const expiring = state.inv.filter(i => { const s = xSt(i.expiry); return s && (s.c === "expiring" || s.c === "expired"); });
  if (!expiring.length) { new Notification("Kitchen 🧺", { body: "No items expiring soon — you're all good!" }); return; }
  const names = expiring.slice(0, 3).map(i => i.name).join(", ");
  new Notification("Kitchen 🧺 — Expiring Soon", { body: `${names}${expiring.length > 3 ? " + " + (expiring.length - 3) + " more" : ""} need attention` });
}

export function scheduleNotifCheck() {
  if (!state.cfg.notif || Notification.permission !== "granted") return;
  const last = parseInt(localStorage.getItem("ks-lastnotif") || "0"), now = Date.now();
  if (now - last < 86400000) return;
  localStorage.setItem("ks-lastnotif", now.toString());
  const days = state.cfg.notifDays || 3;
  const expiring = state.inv.filter(i => {
    const s = xSt(i.expiry); if (!s) return false;
    const exp = new Date(i.expiry + "T00:00:00"), t = new Date(); t.setHours(0, 0, 0, 0);
    return Math.round((exp - t) / 86400000) <= days;
  });
  if (!expiring.length) return;
  const names = expiring.slice(0, 3).map(i => i.name).join(", ");
  new Notification("Kitchen 🧺 — Expiring Soon", { body: `${names}${expiring.length > 3 ? " + " + (expiring.length - 3) + " more" : ""} expiring in ${days} days or less` });
}

// ── HOUSEHOLDS ────────────────────────────────────────────────────────────────

function getHouseholds() { return J("ks-hhs") || [state.hid || "bora-family"]; }
function saveHouseholds(arr) { Js("ks-hhs", arr); }

export function addHousehold() {
  const v = g("newHHCode").value.trim().toLowerCase().replace(/\s+/g, "-");
  if (!v) return;
  const arr = getHouseholds();
  if (!arr.includes(v)) arr.push(v);
  saveHouseholds(arr);
  g("newHHCode").value = "";
  renderHHList();
  showNotif("Household added!");
}

export function switchHousehold(code) {
  if (code === state.hid) return;
  localStorage.setItem("ks-h", code);
  location.reload();
}

export function removeHousehold(code) {
  if (code === state.hid) { showNotif("Can't remove active household"); return; }
  const arr = getHouseholds().filter(h => h !== code);
  saveHouseholds(arr);
  renderHHList();
}

function renderHHList() {
  const arr = getHouseholds(); const el = g("hhList"); if (!el) return;
  el.innerHTML = arr.map(h => `<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid ${h === state.hid ? "var(--ac)" : "var(--b2)"};border-radius:10px;margin-bottom:6px;cursor:pointer" onclick="switchHousehold('${h}')"><div><div style="font-size:.88rem;font-weight:500;color:${h === state.hid ? "var(--ac)" : "var(--tx)"}">${h}</div><div style="font-size:.7rem;color:var(--mt);margin-top:2px">${h === state.hid ? "● Active — tap to stay" : "Tap to switch"}</div></div><button onclick="event.stopPropagation();removeHousehold('${h}')" style="background:none;border:none;color:var(--mt);cursor:pointer;font-size:.82rem;padding:4px 8px">${h === state.hid ? "" : "✕"}</button></div>`).join("");
}

// ── THEMES ────────────────────────────────────────────────────────────────────

const THEMES = {
  gold: { name: "Gold", swatch: "#d4a853", dark: { bg: "#0f0f0d", sf: "#1a1a17", card: "#222220", card2: "#2a2a27", b1: "#333330", b2: "#3d3d39", ac: "#d4a853", ac2: "#e8c27a", acr: "212,168,83", tx: "#ede8d8", tx2: "#b8b09a", mt: "#7a7468" }, light: { bg: "#faf8f2", sf: "#ffffff", card: "#f3ede0", card2: "#efe8d8", b1: "#ddd5c0", b2: "#cec4ac", ac: "#a8732a", ac2: "#c48f3e", acr: "168,115,42", tx: "#2a2418", tx2: "#5c5040", mt: "#9a8870" } },
  forest: { name: "Forest", swatch: "#4a9e5c", dark: { bg: "#0a1410", sf: "#111f17", card: "#182a1e", card2: "#1e3326", b1: "#2a4032", b2: "#355040", ac: "#6db56d", ac2: "#8fd08f", acr: "109,181,109", tx: "#e4f0e4", tx2: "#9dbf9d", mt: "#5a7a5a" }, light: { bg: "#f2f9f2", sf: "#ffffff", card: "#e8f5e8", card2: "#dff0df", b1: "#c0ddc0", b2: "#a8cca8", ac: "#2e7d32", ac2: "#43a047", acr: "46,125,50", tx: "#0d2010", tx2: "#2e4f2e", mt: "#5a7a5a" } },
  ocean: { name: "Ocean", swatch: "#38bdf8", dark: { bg: "#060e1a", sf: "#0d1829", card: "#112035", card2: "#162840", b1: "#1e3554", b2: "#264468", ac: "#38bdf8", ac2: "#7dd3fc", acr: "56,189,248", tx: "#e0f2fe", tx2: "#7ab8d4", mt: "#486880" }, light: { bg: "#f0f8ff", sf: "#ffffff", card: "#e0f2fe", card2: "#d4ecf9", b1: "#b0d8f0", b2: "#90c4e4", ac: "#0369a1", ac2: "#0284c7", acr: "3,105,161", tx: "#082040", tx2: "#1e4060", mt: "#4a7090" } },
  bordeaux: { name: "Bordeaux", swatch: "#e8829a", dark: { bg: "#120810", sf: "#1c0e18", card: "#261420", card2: "#301828", b1: "#4a2238", b2: "#5c2a46", ac: "#e8829a", ac2: "#f4aabb", acr: "232,130,154", tx: "#fce8ee", tx2: "#d4909e", mt: "#8a5060" }, light: { bg: "#fff5f7", sf: "#ffffff", card: "#ffe8ed", card2: "#ffd8e0", b1: "#f4b8c4", b2: "#eca0b0", ac: "#be3455", ac2: "#d94070", acr: "190,52,85", tx: "#2a080e", tx2: "#6a2030", mt: "#9a5060" } },
  sand: { name: "Sand", swatch: "#e07a5f", dark: { bg: "#170e08", sf: "#221508", card: "#2e1c0e", card2: "#382414", b1: "#4a3020", b2: "#5c3c28", ac: "#e07a5f", ac2: "#eca080", acr: "224,122,95", tx: "#fdf0e8", tx2: "#c8a090", mt: "#887060" }, light: { bg: "#fdf6ec", sf: "#fffbf5", card: "#f5e8d8", card2: "#eedcc8", b1: "#ddc8ac", b2: "#ccb494", ac: "#c1440e", ac2: "#d4602a", acr: "193,68,14", tx: "#2a1808", tx2: "#5c3820", mt: "#9a7060" } },
  midnight: { name: "Midnight", swatch: "#818cf8", dark: { bg: "#050814", sf: "#0a0d1f", card: "#0f1228", card2: "#141830", b1: "#1e2448", b2: "#272e58", ac: "#818cf8", ac2: "#a5b0ff", acr: "129,140,248", tx: "#e8eaff", tx2: "#9099cc", mt: "#505880" }, light: { bg: "#f0f1ff", sf: "#ffffff", card: "#e4e6ff", card2: "#d8dbff", b1: "#b8bdff", b2: "#a0a6f4", ac: "#4f46e5", ac2: "#6366f1", acr: "79,70,229", tx: "#0a0820", tx2: "#202060", mt: "#5050a0" } },
  lavender: { name: "Lavender", swatch: "#c084fc", dark: { bg: "#0e0814", sf: "#160e20", card: "#1e1430", card2: "#261a3c", b1: "#382454", b2: "#442c66", ac: "#c084fc", ac2: "#d8a8ff", acr: "192,132,252", tx: "#f5ecff", tx2: "#c0a0e0", mt: "#7a5898" }, light: { bg: "#faf5ff", sf: "#ffffff", card: "#f3e8ff", card2: "#ecdcff", b1: "#d8b8f8", b2: "#c8a0f0", ac: "#9333ea", ac2: "#a855f7", acr: "147,51,234", tx: "#1a0830", tx2: "#481080", mt: "#805098" } }
};

let curTheme = J("ks-theme") || "gold";
let curMode = J("ks-mode") || "auto";

export function applyTheme(themeKey, mode) {
  curTheme = themeKey; curMode = mode;
  Js("ks-theme", themeKey); Js("ks-mode", mode);
  const t = THEMES[themeKey] || THEMES.gold;
  const isDark = mode === "dark" || (mode === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  const v = isDark ? t.dark : t.light;
  const r = document.documentElement.style;
  r.setProperty("--bg", v.bg); r.setProperty("--sf", v.sf); r.setProperty("--card", v.card); r.setProperty("--card2", v.card2);
  r.setProperty("--b1", v.b1); r.setProperty("--b2", v.b2); r.setProperty("--ac", v.ac); r.setProperty("--ac2", v.ac2);
  r.setProperty("--acd", "rgba(" + v.acr + ",.12)"); r.setProperty("--tx", v.tx); r.setProperty("--tx2", v.tx2); r.setProperty("--mt", v.mt);
  r.setProperty("--gn", "#6db56d"); r.setProperty("--gnd", "rgba(109,181,109,.12)");
  r.setProperty("--rd", "#d96b6b"); r.setProperty("--rdd", "rgba(217,107,107,.12)");
  r.setProperty("--am", "#c8960a"); r.setProperty("--amd", "rgba(200,150,10,.12)");
  _updateModeButtons(mode);
  _updateThemePicker(themeKey);
}

export function setMode(mode) { applyTheme(curTheme, mode); }

function _updateModeButtons(mode) {
  ["auto", "light", "dark"].forEach(m => {
    const b = g("mode-" + m); if (!b) return;
    b.style.background = m === mode ? "var(--ac)" : "";
    b.style.color = m === mode ? "var(--bg)" : "";
    b.style.borderColor = m === mode ? "var(--ac)" : "";
  });
}

function _updateThemePicker(active) {
  const el = g("themePicker"); if (!el) return;
  el.innerHTML = "";
  Object.keys(THEMES).forEach(k => {
    const t = THEMES[k], sel = k === active;
    const div = document.createElement("div");
    div.title = t.name;
    div.style.cssText = "width:36px;height:36px;border-radius:50%;background:" + t.swatch + ";cursor:pointer;border:3px solid " + (sel ? "var(--tx)" : "transparent") + ";box-shadow:" + (sel ? "0 0 0 2px var(--ac)" : "none") + ";transition:all .2s;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.85rem";
    div.textContent = sel ? "✓" : "";
    div.onclick = () => applyTheme(k, curMode);
    div.onmouseover = function() { this.style.transform = "scale(1.15)"; };
    div.onmouseout = function() { this.style.transform = "scale(1)"; };
    el.appendChild(div);
  });
}

// initTheme() — applies the saved theme and sets up auto-mode listener
export function initTheme() {
  applyTheme(curTheme, curMode);
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (curMode === "auto") applyTheme(curTheme, "auto");
  });
}

// refreshSettingsUI() — called when settings overlay opens
export function refreshSettingsUI() {
  _updateThemePicker(curTheme);
  _updateModeButtons(curMode);
}
