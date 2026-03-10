// ── GLOBAL APPLICATION STATE ─────────────────────────────────────────────────
// All shared mutable state lives here. Imported by any module that needs it.
// Firestore is the source of truth; these are in-memory mirrors synced by poll().

// Default household config — used only if Firestore has no config yet
export const CFG_DEFAULT = {
  name: "The Bora Family",
  adults: "Bora",
  kids: "1 toddler (age 3)",
  nopork: true,
  noshellfish: false,
  vegetarian: false,
  glutenfree: false,
  other: "",
  cuisines: "Bangladeshi, Turkish, Mediterranean, American",
  cookTime: "40-60 min"
};

// Shared mutable state object — all modules read/write through this
export const state = {
  hid: null,           // active household ID string
  inv: [],             // inventory items (Firestore: households/{hid}/inventory)
  recs: [],            // saved recipes (Firestore: households/{hid}/recipes)
  shop: [],            // shopping list items (Firestore: households/{hid}/shopping)
  mp: {},              // meal plan {YYYY-MM-DD: mealName}
  cfg: { ...CFG_DEFAULT }, // settings/preferences
  cookLog: [],         // cook history
  wasteLog: [],        // waste history
  chat: [],            // Claude chat history (in-memory only)
  cp: null,            // last scanned product
  selR: "fridge",      // selected location in scan result overlay
  maL: "fridge",       // selected location in manual add overlay
  adjId: null,         // ID of item open in adjust overlay
  it: "all",           // active inventory tab
  rt: "all",           // active recipe tab
  md: null,            // date key open in meal modal
  cn: "",              // meal name being logged as cooked
  nr: 0,               // current star rating selection
  eid: null,           // recipe ID open in edit overlay
  scanDestList: false, // whether scanned item goes to shopping list
  aisleMode: false,    // whether shopping list is grouped by aisle
  selectMode: null,    // "shop" | "inv" | null — which list is in multi-select
  selectedIds: new Set(), // IDs currently selected in multi-select
};

// ── localStorage helpers (device-only keys) ──────────────────────────────────
// Used for: ks-h, ks-who, ks-theme, ks-mode, ks-hhs, ks-lastnotif
export function J(k) {
  try { return JSON.parse(localStorage.getItem(k)); } catch { return null; }
}
export function Js(k, v) {
  localStorage.setItem(k, JSON.stringify(v));
}
