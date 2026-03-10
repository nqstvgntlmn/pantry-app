// ── SETTINGS + THEMES + HOUSEHOLDS ────────────────────────────────────────────
// This module handles three major features:
//   1. User settings (dietary preferences, household size, notification prefs)
//   2. Theme management (color themes with dark/light/auto mode support)
//   3. Household management (joining, switching, leaving shared households)

// state: global app state (cfg = user config, inv = inventory, hid = current household ID)
// J / Js: JSON parse from / JSON stringify to localStorage (shorthand helpers)
import { state, J, Js } from '../state.js';
// saveCfg: persists state.cfg to Firestore; dbGet/dbSet: read/write Firestore docs
import { saveCfg, dbGet, dbSet, createHousehold } from '../db.js';
// g: getElementById shorthand; xSt: compute expiry status from a date string;
// showNotif: toast notification; showOv/hideOv: show/hide overlay panels
import { g, xSt, showNotif, showOv, hideOv } from '../helpers.js';
// initHome: re-renders the home screen (called after settings change to reflect updates)
import { initHome } from './home.js';
// getCurrentUser: returns the currently signed-in Firebase Auth user (or null)
import { getCurrentUser } from '../auth.js';

// ── SETTINGS ─────────────────────────────────────────────────────────────────

/**
 * loadCfgUI() — Populates the settings form fields from the in-memory config (state.cfg).
 * Called when the settings overlay is opened so the form reflects current values.
 */
export function loadCfgUI() {
  // Shorthand: get a DOM element by ID
  const el = (id) => g(id);
  // Shorthand: set an input element's value, defaulting to empty string if value is falsy
  const v = (id, val) => { const e = el(id); if (e) e.value = val || ""; };

  // Populate text/number inputs with saved config values
  v("setName", state.cfg.name);
  v("setAdults", state.cfg.adults);
  v("setKids", state.cfg.kids);
  v("setOther", state.cfg.other);       // free-text dietary notes (e.g. "nut allergy")
  v("setCuisines", state.cfg.cuisines); // preferred cuisine types
  v("setCookTime", state.cfg.cookTime); // max cooking time preference

  // Toggle buttons use a CSS class "on" to indicate active state (not a checkbox)
  const tog = (id, on) => { const e = el(id); if (e) e.classList.toggle("on", !!on); };
  tog("tg-nopork", state.cfg.nopork);
  tog("tg-noshellfish", state.cfg.noshellfish);
  tog("tg-vegetarian", state.cfg.vegetarian);
  tog("tg-glutenfree", state.cfg.glutenfree);
  tog("tg-notif", state.cfg.notif);

  // Show/hide the notification time row based on whether notifications are enabled
  const ntr = g("notifTimeRow");
  if (ntr) ntr.style.display = state.cfg.notif ? "block" : "none";

  // Default notification time is 8 AM, default lookahead is 3 days
  v("setNotifTime", state.cfg.notifTime || "8");
  v("setNotifDays", String(state.cfg.notifDays || 3));

  // Render the list of households the user belongs to
  renderHHList();
}

/**
 * saveSettings() — Reads all form values from the settings UI, merges them into
 * state.cfg, persists to Firestore, and closes the settings overlay.
 */
export async function saveSettings() {
  // Spread existing config so we preserve any fields not shown in the form,
  // then overwrite with current form values
  state.cfg = { ...state.cfg,
    name: g("setName").value.trim(),
    adults: g("setAdults").value.trim(),
    kids: g("setKids").value.trim(),
    // Toggle buttons: check for "on" class to determine boolean state
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

  // Persist config to Firestore
  await saveCfg();

  // If notifications are enabled, schedule the daily expiry check
  if (state.cfg.notif) scheduleNotifCheck();

  // Show confirmation toast, close settings overlay, refresh the home screen
  showNotif("Settings saved!"); hideOv("settings"); initHome();
}

// ── NOTIFICATIONS ────────────────────────────────────────────────────────────

/**
 * toggleNotif() — Handles the notification toggle button tap.
 * If turning ON, first checks browser support and requests permission.
 * If turning OFF, simply removes the "on" class.
 * @param {HTMLElement} el - The toggle button element
 */
export async function toggleNotif(el) {
  const wasOn = el.classList.contains("on");

  // When enabling notifications, validate browser support and get permission
  if (!wasOn) {
    if (!("Notification" in window)) { showNotif("Notifications not supported on this browser"); return; }
    if (Notification.permission === "denied") { showNotif("Notifications blocked — enable in browser settings"); return; }
    // If permission hasn't been decided yet, prompt the user
    if (Notification.permission !== "granted") {
      const p = await Notification.requestPermission();
      if (p !== "granted") { showNotif("Notifications permission denied"); return; }
    }
  }

  // Toggle the visual state of the button
  el.classList.toggle("on");

  // Show or hide the notification time/days configuration row
  const ntr = g("notifTimeRow");
  if (ntr) ntr.style.display = el.classList.contains("on") ? "block" : "none";
}

/**
 * testNotif() — Fires a test browser notification so the user can verify
 * their notification setup is working. Shows expiring items if any exist.
 */
export function testNotif() {
  if (Notification.permission !== "granted") { showNotif("Enable notifications first"); return; }

  // Find inventory items that are expiring soon or already expired
  // xSt() returns an object with a `.c` (class) property like "expiring", "expired", "fresh"
  const expiring = state.inv.filter(i => { const s = xSt(i.expiry); return s && (s.c === "expiring" || s.c === "expired"); });

  // If nothing is expiring, send a reassuring notification
  if (!expiring.length) { new Notification("Kitchen 🧺", { body: "No items expiring soon — you're all good!" }); return; }

  // Show up to 3 item names, with a "+N more" suffix if there are additional items
  const names = expiring.slice(0, 3).map(i => i.name).join(", ");
  new Notification("Kitchen 🧺 — Expiring Soon", { body: `${names}${expiring.length > 3 ? " + " + (expiring.length - 3) + " more" : ""} need attention` });
}

/**
 * scheduleNotifCheck() — Sends a daily browser notification about items
 * expiring within the user's configured lookahead window (default 3 days).
 * Uses localStorage to ensure only one notification fires per 24-hour period.
 */
export function scheduleNotifCheck() {
  // Bail out if notifications are disabled or permission not granted
  if (!state.cfg.notif || Notification.permission !== "granted") return;

  // Rate-limit: only send one notification per 24 hours (86400000 ms)
  const last = parseInt(localStorage.getItem("ks-lastnotif") || "0"), now = Date.now();
  if (now - last < 86400000) return;
  localStorage.setItem("ks-lastnotif", now.toString());

  // How many days ahead to look for expiring items (user-configurable)
  const days = state.cfg.notifDays || 3;

  // Filter inventory for items expiring within the lookahead window
  const expiring = state.inv.filter(i => {
    const s = xSt(i.expiry); if (!s) return false;
    // Parse the expiry date and compute days remaining from today
    const exp = new Date(i.expiry + "T00:00:00"), t = new Date(); t.setHours(0, 0, 0, 0);
    return Math.round((exp - t) / 86400000) <= days;
  });

  if (!expiring.length) return;

  // Build notification body: first 3 item names + overflow count
  const names = expiring.slice(0, 3).map(i => i.name).join(", ");
  new Notification("Kitchen 🧺 — Expiring Soon", { body: `${names}${expiring.length > 3 ? " + " + (expiring.length - 3) + " more" : ""} expiring in ${days} days or less` });
}

// ── HOUSEHOLDS ────────────────────────────────────────────────────────────────
// Households allow multiple users to share a single pantry inventory.
// Each user can belong to multiple households and switch between them.

/**
 * getHouseholdIds() — Returns the list of household IDs this user belongs to.
 * Reads from localStorage cache ("ks-hhs"), which is synced from the
 * Firestore user document. Falls back to just the current active household.
 */
function getHouseholdIds() { return J("ks-hhs") || [state.hid]; }

/**
 * addHousehold() — Joins an existing household by its ID.
 * Reads the ID from the "newHHCode" input, validates it exists in Firestore,
 * adds the current user as a member, and updates both sides of the relationship
 * (user doc and household doc).
 */
export async function addHousehold() {
  const input = g("newHHCode")?.value?.trim();
  if (!input) return;

  const user = getCurrentUser();
  if (!user) { showNotif("Sign in first"); return; }

  // Disable input while processing to prevent double-submission
  const el = g("newHHCode");
  el.disabled = true;

  try {
    // Verify the household exists in Firestore by fetching its document
    // (Currently treats input as a direct household ID, not an invite code)
    const hhDoc = await dbGet(`households/${input}`);
    if (!hhDoc) {
      showNotif("Household not found. Check the code and try again.");
      el.disabled = false;
      return;
    }

    // Add current user to the household's members array (if not already present)
    const members = hhDoc.members || [];
    // Also maintain the flat memberUids array used by Firestore security rules
    const memberUids = hhDoc.memberUids || members.map(m => m.uid);
    if (!members.find(m => m.uid === user.uid)) {
      members.push({
        uid: user.uid,
        name: user.displayName || user.email?.split("@")[0] || "Member",
        role: "member"
      });
      if (!memberUids.includes(user.uid)) memberUids.push(user.uid);
      // Save updated household doc; `id: undefined` strips the doc ID from the payload
      // since Firestore doc IDs are part of the path, not the document body
      await dbSet(`households/${input}`, { ...hhDoc, members, memberUids, id: undefined });
    }

    // Also add this household to the user's own profile so they can find it on login
    const userDoc = await dbGet(`users/${user.uid}`);
    if (userDoc) {
      const hids = userDoc.householdIds || [];
      if (!hids.includes(input)) {
        hids.push(input);
        await dbSet(`users/${user.uid}`, { ...userDoc, householdIds: hids, id: undefined });
      }
    }

    // Update the localStorage cache of household IDs
    const arr = getHouseholdIds();
    if (!arr.includes(input)) arr.push(input);
    Js("ks-hhs", arr);

    // Clear input and refresh the household list UI
    g("newHHCode").value = "";
    renderHHList();
    showNotif("Household joined!");
  } catch (err) {
    console.error("addHousehold error:", err);
    showNotif("Failed to join household");
  }

  // Re-enable the input regardless of success/failure
  el.disabled = false;
}

/**
 * switchHousehold() — Switches the active household to a different one.
 * Saves the new household ID to localStorage and reloads the page so all
 * data (inventory, recipes, etc.) is fetched for the new household.
 * @param {string} code - The household ID to switch to
 */
export function switchHousehold(code) {
  if (code === state.hid) return; // Already active, nothing to do
  localStorage.setItem("ks-h", code); // "ks-h" stores the active household ID
  location.reload(); // Full reload to re-fetch all household-specific data
}

/**
 * removeHousehold() — Leaves a household. Removes the user from the household's
 * members list and removes the household from the user's profile.
 * Cannot remove the currently active household (must switch away first).
 * @param {string} code - The household ID to leave
 */
export async function removeHousehold(code) {
  // Prevent removing the active household — user must switch to another one first
  if (code === state.hid) { showNotif("Can't remove active household"); return; }

  const user = getCurrentUser();
  if (user) {
    try {
      // Remove this household from the user's householdIds list in Firestore
      const userDoc = await dbGet(`users/${user.uid}`);
      if (userDoc) {
        const hids = (userDoc.householdIds || []).filter(h => h !== code);
        await dbSet(`users/${user.uid}`, { ...userDoc, householdIds: hids, id: undefined });
      }

      // Remove this user from the household's members and memberUids lists
      const hhDoc = await dbGet(`households/${code}`);
      if (hhDoc) {
        const members = (hhDoc.members || []).filter(m => m.uid !== user.uid);
        const memberUids = (hhDoc.memberUids || []).filter(u => u !== user.uid);
        await dbSet(`households/${code}`, { ...hhDoc, members, memberUids, id: undefined });
      }
    } catch (err) {
      console.error("removeHousehold error:", err);
    }
  }

  // Update localStorage cache and re-render the list
  const arr = getHouseholdIds().filter(h => h !== code);
  Js("ks-hhs", arr);
  renderHHList();
}

/**
 * renderHHList() — Renders the list of households in the settings overlay.
 * Fetches each household's display name from Firestore (falls back to ID).
 * The active household is visually highlighted; inactive ones show a remove button.
 */
async function renderHHList() {
  const arr = getHouseholdIds();
  const el = g("hhList"); if (!el) return;

  // Fetch display names for each household (falls back to raw ID if fetch fails)
  const items = [];
  for (const h of arr) {
    let name = h;
    try {
      const doc = await dbGet(`households/${h}`);
      if (doc?.name) name = doc.name;
    } catch { /* use ID as fallback */ }
    items.push({ id: h, name });
  }

  // Build the HTML: each household is a clickable card that switches to it
  el.innerHTML = items.map(({ id, name }) => {
    const active = id === state.hid;
    // Active household gets an accent border; inactive ones get a subtle border
    return `<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid ${active ? "var(--ac)" : "var(--b2)"};border-radius:10px;margin-bottom:6px;cursor:pointer" onclick="switchHousehold('${id}')">
      <div>
        <div style="font-size:.88rem;font-weight:500;color:${active ? "var(--ac)" : "var(--tx)"}">${name}</div>
        <div style="font-size:.7rem;color:var(--mt);margin-top:2px">${active ? "● Active" : "Tap to switch"}</div>
      </div>
      <button onclick="event.stopPropagation();removeHousehold('${id}')" style="background:none;border:none;color:var(--mt);cursor:pointer;font-size:.82rem;padding:4px 8px">${active ? "" : "✕"}</button>
    </div>`;
    // stopPropagation prevents the remove button click from also triggering switchHousehold
    // Active household has no remove button (empty string) since it can't be removed
  }).join("");
}

// ── THEMES ────────────────────────────────────────────────────────────────────
// Each theme defines a name, a swatch color (for the picker circle), and full
// dark + light palettes. Palette keys map directly to CSS custom properties:
//   bg=background, sf=surface, card/card2=card backgrounds, b1/b2=borders,
//   ac/ac2=accent colors, acr=accent RGB (for rgba() usage), tx/tx2=text, mt=muted text

const THEMES = {
  gold: { name: "Gold", swatch: "#d4a853", dark: { bg: "#0f0f0d", sf: "#1a1a17", card: "#222220", card2: "#2a2a27", b1: "#333330", b2: "#3d3d39", ac: "#d4a853", ac2: "#e8c27a", acr: "212,168,83", tx: "#ede8d8", tx2: "#b8b09a", mt: "#7a7468" }, light: { bg: "#faf8f2", sf: "#ffffff", card: "#f3ede0", card2: "#efe8d8", b1: "#ddd5c0", b2: "#cec4ac", ac: "#a8732a", ac2: "#c48f3e", acr: "168,115,42", tx: "#2a2418", tx2: "#5c5040", mt: "#9a8870" } },
  forest: { name: "Forest", swatch: "#4a9e5c", dark: { bg: "#0a1410", sf: "#111f17", card: "#182a1e", card2: "#1e3326", b1: "#2a4032", b2: "#355040", ac: "#6db56d", ac2: "#8fd08f", acr: "109,181,109", tx: "#e4f0e4", tx2: "#9dbf9d", mt: "#5a7a5a" }, light: { bg: "#f2f9f2", sf: "#ffffff", card: "#e8f5e8", card2: "#dff0df", b1: "#c0ddc0", b2: "#a8cca8", ac: "#2e7d32", ac2: "#43a047", acr: "46,125,50", tx: "#0d2010", tx2: "#2e4f2e", mt: "#5a7a5a" } },
  ocean: { name: "Ocean", swatch: "#38bdf8", dark: { bg: "#060e1a", sf: "#0d1829", card: "#112035", card2: "#162840", b1: "#1e3554", b2: "#264468", ac: "#38bdf8", ac2: "#7dd3fc", acr: "56,189,248", tx: "#e0f2fe", tx2: "#7ab8d4", mt: "#486880" }, light: { bg: "#f0f8ff", sf: "#ffffff", card: "#e0f2fe", card2: "#d4ecf9", b1: "#b0d8f0", b2: "#90c4e4", ac: "#0369a1", ac2: "#0284c7", acr: "3,105,161", tx: "#082040", tx2: "#1e4060", mt: "#4a7090" } },
  bordeaux: { name: "Bordeaux", swatch: "#e8829a", dark: { bg: "#120810", sf: "#1c0e18", card: "#261420", card2: "#301828", b1: "#4a2238", b2: "#5c2a46", ac: "#e8829a", ac2: "#f4aabb", acr: "232,130,154", tx: "#fce8ee", tx2: "#d4909e", mt: "#8a5060" }, light: { bg: "#fff5f7", sf: "#ffffff", card: "#ffe8ed", card2: "#ffd8e0", b1: "#f4b8c4", b2: "#eca0b0", ac: "#be3455", ac2: "#d94070", acr: "190,52,85", tx: "#2a080e", tx2: "#6a2030", mt: "#9a5060" } },
  sand: { name: "Sand", swatch: "#e07a5f", dark: { bg: "#170e08", sf: "#221508", card: "#2e1c0e", card2: "#382414", b1: "#4a3020", b2: "#5c3c28", ac: "#e07a5f", ac2: "#eca080", acr: "224,122,95", tx: "#fdf0e8", tx2: "#c8a090", mt: "#887060" }, light: { bg: "#fdf6ec", sf: "#fffbf5", card: "#f5e8d8", card2: "#eedcc8", b1: "#ddc8ac", b2: "#ccb494", ac: "#c1440e", ac2: "#d4602a", acr: "193,68,14", tx: "#2a1808", tx2: "#5c3820", mt: "#9a7060" } },
  midnight: { name: "Midnight", swatch: "#818cf8", dark: { bg: "#050814", sf: "#0a0d1f", card: "#0f1228", card2: "#141830", b1: "#1e2448", b2: "#272e58", ac: "#818cf8", ac2: "#a5b0ff", acr: "129,140,248", tx: "#e8eaff", tx2: "#9099cc", mt: "#505880" }, light: { bg: "#f0f1ff", sf: "#ffffff", card: "#e4e6ff", card2: "#d8dbff", b1: "#b8bdff", b2: "#a0a6f4", ac: "#4f46e5", ac2: "#6366f1", acr: "79,70,229", tx: "#0a0820", tx2: "#202060", mt: "#5050a0" } },
  lavender: { name: "Lavender", swatch: "#c084fc", dark: { bg: "#0e0814", sf: "#160e20", card: "#1e1430", card2: "#261a3c", b1: "#382454", b2: "#442c66", ac: "#c084fc", ac2: "#d8a8ff", acr: "192,132,252", tx: "#f5ecff", tx2: "#c0a0e0", mt: "#7a5898" }, light: { bg: "#faf5ff", sf: "#ffffff", card: "#f3e8ff", card2: "#ecdcff", b1: "#d8b8f8", b2: "#c8a0f0", ac: "#9333ea", ac2: "#a855f7", acr: "147,51,234", tx: "#1a0830", tx2: "#481080", mt: "#805098" } }
};

// Track current theme and mode in module scope so they persist across function calls
// These are initialized from localStorage, falling back to "gold" theme and "auto" mode
let curTheme = J("ks-theme") || "gold";
let curMode = J("ks-mode") || "auto";

/**
 * applyTheme() — Applies a color theme and light/dark mode to the page.
 * Sets CSS custom properties on <html> so all themed elements update instantly.
 * Also persists the selection to localStorage.
 * @param {string} themeKey - Key from THEMES object (e.g. "gold", "ocean")
 * @param {string} mode - "light", "dark", or "auto" (follows OS preference)
 */
export function applyTheme(themeKey, mode) {
  // Update module-level state and persist to localStorage
  curTheme = themeKey; curMode = mode;
  Js("ks-theme", themeKey); Js("ks-mode", mode);

  // Look up the theme; fall back to gold if an invalid key was passed
  const t = THEMES[themeKey] || THEMES.gold;

  // Determine if we should use the dark palette:
  // "auto" defers to the OS-level prefers-color-scheme media query
  const isDark = mode === "dark" || (mode === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  const v = isDark ? t.dark : t.light;

  // Apply all palette values as CSS custom properties on the document root
  const r = document.documentElement.style;
  r.setProperty("--bg", v.bg); r.setProperty("--sf", v.sf); r.setProperty("--card", v.card); r.setProperty("--card2", v.card2);
  r.setProperty("--b1", v.b1); r.setProperty("--b2", v.b2); r.setProperty("--ac", v.ac); r.setProperty("--ac2", v.ac2);
  // --acd: accent color with 12% opacity, used for subtle accent backgrounds
  r.setProperty("--acd", "rgba(" + v.acr + ",.12)"); r.setProperty("--tx", v.tx); r.setProperty("--tx2", v.tx2); r.setProperty("--mt", v.mt);

  // Semantic status colors (green/red/amber) are theme-independent
  r.setProperty("--gn", "#6db56d"); r.setProperty("--gnd", "rgba(109,181,109,.12)");   // green = fresh/good
  r.setProperty("--rd", "#d96b6b"); r.setProperty("--rdd", "rgba(217,107,107,.12)");   // red = expired/bad
  r.setProperty("--am", "#c8960a"); r.setProperty("--amd", "rgba(200,150,10,.12)");     // amber = expiring soon

  // Update the UI to reflect the new active mode and theme
  _updateModeButtons(mode);
  _updateThemePicker(themeKey);
}

/**
 * setMode() — Convenience wrapper to change only the light/dark/auto mode
 * while keeping the current theme color.
 * @param {string} mode - "light", "dark", or "auto"
 */
export function setMode(mode) { applyTheme(curTheme, mode); }

/**
 * _updateModeButtons() — Highlights the active mode button (auto/light/dark)
 * and resets the others to default styling.
 * @param {string} mode - The currently active mode
 */
function _updateModeButtons(mode) {
  ["auto", "light", "dark"].forEach(m => {
    const b = g("mode-" + m); if (!b) return;
    // Active button gets accent background + inverted text; others are transparent
    b.style.background = m === mode ? "var(--ac)" : "";
    b.style.color = m === mode ? "var(--bg)" : "";
    b.style.borderColor = m === mode ? "var(--ac)" : "";
  });
}

/**
 * _updateThemePicker() — Rebuilds the theme picker (row of colored circles).
 * The active theme gets a border and checkmark; others are plain swatches.
 * Each circle calls applyTheme() on click.
 * @param {string} active - The currently active theme key
 */
function _updateThemePicker(active) {
  const el = g("themePicker"); if (!el) return;
  el.innerHTML = ""; // Clear existing swatches before rebuilding

  Object.keys(THEMES).forEach(k => {
    const t = THEMES[k], sel = k === active;

    // Create a circular swatch for this theme
    const div = document.createElement("div");
    div.title = t.name;
    // Inline styles: circle shape, theme's swatch color as background,
    // selected theme gets a visible border + box-shadow ring
    div.style.cssText = "width:36px;height:36px;border-radius:50%;background:" + t.swatch + ";cursor:pointer;border:3px solid " + (sel ? "var(--tx)" : "transparent") + ";box-shadow:" + (sel ? "0 0 0 2px var(--ac)" : "none") + ";transition:all .2s;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.85rem";
    div.textContent = sel ? "✓" : ""; // Checkmark only on the active theme
    div.onclick = () => applyTheme(k, curMode); // Apply this theme, keep current mode
    // Hover effect: slight scale-up for visual feedback
    div.onmouseover = function() { this.style.transform = "scale(1.15)"; };
    div.onmouseout = function() { this.style.transform = "scale(1)"; };
    el.appendChild(div);
  });
}

/**
 * initTheme() — Called once at app startup. Applies the saved theme from localStorage
 * and sets up a listener for OS dark/light mode changes so "auto" mode reacts in real time.
 */
export function initTheme() {
  applyTheme(curTheme, curMode);
  // When the OS switches between light/dark, re-apply the theme if in "auto" mode
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (curMode === "auto") applyTheme(curTheme, "auto");
  });
}

/**
 * refreshSettingsUI() — Called when the settings overlay is opened.
 * Ensures the theme picker and mode buttons reflect the current selections
 * (they may have been destroyed/recreated if the overlay was re-rendered).
 */
export function refreshSettingsUI() {
  _updateThemePicker(curTheme);
  _updateModeButtons(curMode);
}
