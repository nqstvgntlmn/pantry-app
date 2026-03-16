// ── GLOBAL APPLICATION STATE ─────────────────────────────────────────────────
// This module is the single source of in-memory state for the entire app.
// Every module that needs to read or mutate shared data imports from here.
//
// Data flow: Firestore → poll() syncs into `state` → UI renders from `state`.
// Local writes update `state` first, then push to Firestore, so the UI feels
// instant while the network catches up.

// Default household configuration — seeded into Firestore when a brand-new
// household is created and no config document exists yet. After that, the
// persisted config always takes precedence over these defaults.
export const CFG_DEFAULT = {
  name: "The Bora Family",        // household display name
  adults: "Bora",                 // free-text list of adult members
  kids: "1 toddler (age 3)",     // free-text description of children
  nopork: true,                   // dietary flag: exclude pork
  noshellfish: false,             // dietary flag: exclude shellfish
  vegetarian: false,              // dietary flag: vegetarian household
  glutenfree: false,              // dietary flag: gluten-free household
  other: "",                      // catch-all for additional dietary notes
  cuisines: "Bangladeshi, Turkish, Mediterranean, American", // preferred cuisine styles (fed to AI recipe generation)
  cookTime: "40-60 min",          // target cook time per meal (fed to AI recipe generation)
  zipcode: "",                    // user's zipcode for local grocery deal searches (Flipp API)
  favouriteStore: ""              // preferred grocery store — used to sort Shopping list by that store's aisle layout
};

// ── Shared mutable state object ──────────────────────────────────────────────
// Every module imports this single object and reads/writes its fields directly.
// There is no framework reactivity system — after mutating `state`, callers
// must explicitly call render() (from render.js) to update the DOM.
export const state = {

  // ── Firestore-synced data ────────────────────────────────────────────────
  // These arrays/objects mirror Firestore subcollections under
  // households/{hid}/... and are refreshed by poll() on a timer.

  hid: null,              // currently active household ID (string); null before auth
  inv: [],                // pantry/fridge inventory items — each has {id, name, loc, qty, exp, ...}
  recs: [],               // saved recipes — each has {id, title, ingredients, steps, ...}
  shop: [],               // shopping list entries — each has {id, name, checked, aisle, ...}
  mp: {},                 // meal plan mapping: { "YYYY-MM-DD": "Recipe or meal name" }
  mpCooked: {},           // tracks which meal plan days are marked as cooked: { "YYYY-MM-DD": true }
  cfg: { ...CFG_DEFAULT },// household settings/preferences (merged with CFG_DEFAULT)
  cookLog: [],            // history of cooked meals — used for analytics and "cook again" suggestions
  wasteLog: [],           // history of wasted/expired items — used for waste-reduction insights
  activity: [],           // recent household activity entries — populated by real-time listener

  // ── Ephemeral / UI-only state ────────────────────────────────────────────
  // These are never persisted to Firestore. They control transient UI state
  // like which overlay is open, which tab is selected, etc.

  chat: [],               // Claude AI chat message history — lives only in memory for this session
  cp: null,               // "current product" — the item returned by the last barcode/receipt scan
  selR: "fridge",         // location dropdown selection inside the scan-result overlay ("fridge", "pantry", etc.)
  maL: "fridge",          // location dropdown selection inside the manual-add overlay
  adjId: null,            // Firestore doc ID of the inventory item currently open in the adjust-quantity overlay; null = overlay closed
  it: "all",              // active tab filter on the Supplies screen ("all", "fridge", "freezer", "pantry", "household")
  rt: "all",              // active tab filter on the Recipes screen ("all", "quick", "saved", etc.)
  recSearch: "",           // search text for My Recipes tab
  recSort: "az",           // sort order for My Recipes: "az", "newest", "rating"
  recFilters: {            // My Recipes filter state (persisted in localStorage ks-recFilters)
    tags: [],              // selected tag names
    difficulty: "",        // "Easy", "Medium", "Hard", or "" (any)
    cookTime: "any",       // "any", "under30", "under60", "over60"
    serves: "any",         // "any", "1-2", "3-4", "5+"
    protein: [],           // selected protein tag names
  },
  md: null,               // date key (e.g. "2025-03-09") of the day whose meal-plan modal is open; null = closed
  cn: "",                 // meal/recipe name typed into the "log as cooked" input
  nr: 0,                  // star rating (0-5) the user has selected in the cook-log modal
  eid: null,              // recipe doc ID currently open in the recipe-edit overlay; null = closed
  scanDestList: false,    // when true, scanned items are added to the shopping list instead of inventory
  aisleMode: false,       // when true, the shopping list view groups items by grocery-store aisle
  selectMode: null,       // multi-select mode: "shop" (shopping list), "inv" (inventory), or null (off)
  selectedIds: new Set(), // set of Firestore doc IDs currently checked in multi-select mode

  // ── User profile ──────────────────────────────────────────────────────
  username: null,        // current user's public username (e.g. "BoraK"); null until loaded

  // ── Community / public recipes ─────────────────────────────────────────
  comRecs: [],           // community (public) recipes loaded from public_recipes collection
  comTab: "browse",      // community sub-tab: "browse" or "mine"
  comSearch: "",         // current search/filter text for community recipes
  comCuisine: "all",     // cuisine filter for community browsing
  comSort: "newest",     // sort order: "newest", "popular", or "rated"
  comTags: [],           // selected tag filters (e.g. ["Quick", "Healthy"])
  comTime: "any",        // cook time filter: "any", "under30", "30to60", "over60"
  comMinRating: 0,       // minimum avg rating filter: 0 (any), 3, or 4
  comPage: 0,            // current page index for infinite scroll pagination
  myLikes: new Set(),    // set of public recipe IDs the current user has liked
};

// ── localStorage helpers (device-only keys) ──────────────────────────────────
// These two functions wrap localStorage with JSON serialization so callers
// can store and retrieve objects/arrays, not just raw strings.
//
// Key naming convention used throughout the app:
//   ks-h       → current household ID (persisted across sessions)
//   ks-who     → current user display name
//   ks-theme   → "light" | "dark" theme preference
//   ks-mode    → last active screen/tab mode
//   ks-hhs     → array of household IDs this device has joined
//   ks-lastnotif → timestamp of last notification check

// Read a JSON value from localStorage by key.
// Returns null if the key is missing or the stored value is not valid JSON,
// so callers can safely treat null as "no stored value."
export function J(k) {
  try { return JSON.parse(localStorage.getItem(k)); } catch { return null; }
}

// Write a value to localStorage as JSON. Overwrites any existing value at key `k`.
export function Js(k, v) {
  localStorage.setItem(k, JSON.stringify(v));
}
