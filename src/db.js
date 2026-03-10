// ── FIRESTORE PROXY CLIENT ───────────────────────────────────────────────────
// All database operations go through /api/db (Vercel serverless function).
// This keeps Firebase API keys out of the browser entirely — the serverless
// function holds the credentials and forwards requests to Firestore REST API.
//
// Architecture overview:
//   Browser  ──POST /api/db──>  Vercel serverless  ──REST──>  Firestore
//
// Every public function in this file either reads/writes Firestore, or
// manipulates in-memory `state` and then persists the change to Firestore.

// `state`       — global mutable app state (inventory, recipes, shopping, etc.)
// `CFG_DEFAULT` — default household config values (name, dietary prefs, etc.)
// `J`           — shorthand helper: JSON.parse(localStorage.getItem(key)), returns null on failure
import { state, CFG_DEFAULT, J } from './state.js';

// `getCurrentUser` — returns the currently signed-in Firebase Auth user object (or null)
// `getIdToken` — returns the user's Firebase JWT for authenticated API calls
import { getCurrentUser, getIdToken } from './auth.js';

// ── LOW-LEVEL DB TRANSPORT ───────────────────────────────────────────────────

/**
 * _db(op, path, data) — the single low-level function all DB calls go through.
 *
 * Sends a POST to /api/db with a JSON body like:
 *   { op: "set", path: "households/abc123/inventory/xyz", data: { ... } }
 *
 * The serverless function translates `op` into the corresponding Firestore
 * operation (get, list, set, delete).
 *
 * Why we check content-type before parsing: if Vercel is down or misconfigured,
 * it returns an HTML error page. Parsing that as JSON gives a confusing error,
 * so we detect it early and throw a descriptive message instead.
 */
async function _db(op, path, data) {
  // Build request headers — always include Content-Type for JSON body
  const headers = { "Content-Type": "application/json" };

  // Attach the Firebase ID token so the server-side proxy can forward it
  // to Firestore REST API as a Bearer token. This is what makes Firestore
  // security rules see `request.auth` with the user's UID.
  const token = await getIdToken();
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const r = await fetch("/api/db", {
    method: "POST",
    headers,
    body: JSON.stringify({ op, path, data })
  });
  const ct = r.headers.get("content-type") || "";
  if (!ct.includes("application/json")) {
    throw new Error(`/api/db non-JSON response (status ${r.status}) for ${op} ${path}`);
  }
  return r.json();
}

/**
 * dbList — list all documents in a Firestore collection.
 * Returns an array of document objects, or [] if the collection is empty or missing.
 * Swallows errors and returns [] so callers don't need try/catch for missing data.
 */
export async function dbList(path) {
  try { const j = await _db("list", path); return j.docs || []; }
  catch (e) { console.warn("dbList:", path, e.message); return []; }
}

/**
 * dbSet — create or overwrite (upsert) a single Firestore document.
 * `path` is the full document path, e.g. "households/abc/inventory/item1".
 * `data` is the plain object to store.
 */
export async function dbSet(path, data) { return _db("set", path, data); }

/**
 * dbDelete — permanently remove a single Firestore document by path.
 */
export async function dbDelete(path) { return _db("delete", path); }

/**
 * dbGet — read a single Firestore document by its full path.
 * Returns the document object, or null if it doesn't exist.
 * Swallows errors and returns null so callers can treat "missing" and "error" the same.
 */
export async function dbGet(path) {
  try {
    const j = await _db("get", path);
    return j.doc || null;
  } catch { return null; }
}

// ── USER & HOUSEHOLD MANAGEMENT ─────────────────────────────────────────────
// A "household" is the top-level grouping for all data — inventory, recipes,
// shopping list, meal plan, etc. Each user belongs to one or more households.
// Firestore structure: households/{hid}/inventory/*, households/{hid}/recipes/*, etc.

/**
 * Generate a short random invite code (6 uppercase alphanumeric characters).
 * Used to let other users join a household by entering this code.
 */
function _genInviteCode() {
  return Math.random().toString(36).slice(2, 8).toUpperCase();
}

/**
 * createUserProfile — writes a users/{uid} document on first-ever login.
 * The profile stores the user's display name, email, creation timestamp,
 * and a list of household IDs they belong to (initially empty; filled by resolveHousehold).
 */
export async function createUserProfile(user) {
  const doc = {
    name: user.displayName || user.email?.split("@")[0] || "User",
    email: user.email || "",
    createdAt: new Date().toISOString(),
    householdIds: []   // populated later by resolveHousehold after the household is created
  };
  await dbSet(`users/${user.uid}`, doc);
  return doc;
}

/**
 * createHousehold — creates a new household document owned by the given user.
 *
 * By convention, the household ID (`hid`) equals the user's UID for their
 * default/first household. This simplifies lookups and avoids generating
 * a separate random ID.
 *
 * The household doc stores:
 *   - name:       display name (e.g. "My Kitchen")
 *   - ownerUid:   UID of the user who created it
 *   - members[]:  array of { uid, name, role } objects for multi-user support
 *   - inviteCode: 6-char code other users can enter to join this household
 *   - createdAt:  ISO timestamp
 */
export async function createHousehold(uid, name) {
  const user = getCurrentUser();
  const hid = uid; // use uid as household ID for the user's default household
  const doc = {
    name: name || "My Kitchen",
    ownerUid: uid,
    members: [{
      uid,
      name: user?.displayName || user?.email?.split("@")[0] || "Owner",
      role: "owner"
    }],
    // Flat array of just UIDs — used by Firestore security rules for fast
    // membership checks (`request.auth.uid in resource.data.memberUids`).
    // Maintained in sync with the `members` array above.
    memberUids: [uid],
    inviteCode: _genInviteCode(),
    createdAt: new Date().toISOString()
  };
  await dbSet(`households/${hid}`, doc);
  return { hid, ...doc };
}

/**
 * migrateHousehold — copies ALL subcollections from one household to another.
 *
 * This handles the transition from anonymous/pre-auth usage to authenticated usage.
 * Before auth existed, data was stored under a localStorage key "ks-h" as the
 * household ID. On first real login, we need to move that data to the user's
 * new UID-based household so nothing is lost.
 *
 * Iterates over every known subcollection, reads all docs, and writes them
 * to the new household path. The old household data is left in place (not deleted).
 */
async function migrateHousehold(oldHid, newHid) {
  // Every subcollection that a household can have
  const collections = ["inventory", "recipes", "shopping", "mealplan", "settings", "cooklog", "wastelog"];
  for (const col of collections) {
    const docs = await dbList(`households/${oldHid}/${col}`);
    for (const doc of docs) {
      const id = doc.id;
      const data = { ...doc };
      delete data.id; // `id` is derived from the Firestore document path, not stored as a field
      await dbSet(`households/${newHid}/${col}/${id}`, data);
    }
  }
}

/**
 * resolveHousehold — the main entry point called on every sign-in.
 * Determines which household ID the user should use and returns it.
 *
 * Two paths:
 *   1. Returning user (profile exists): return their first household ID.
 *   2. First-ever login (no profile): create profile + household, migrate
 *      any pre-auth localStorage data, and return the new household ID.
 *
 * After this function, `state.hid` will be set by the caller and all
 * subsequent DB operations will target that household.
 */
export async function resolveHousehold(user) {
  const uid = user.uid;

  // Check if this user has logged in before by looking for their profile doc
  const userDoc = await dbGet(`users/${uid}`);

  if (userDoc) {
    // Returning user — use their first household (or uid as fallback).
    // householdIds[0] is the "active" household for now (multi-household
    // switching could use a different index in the future).
    const hid = userDoc.householdIds?.length ? userDoc.householdIds[0] : uid;
    return hid;
  }

  // ── First-time login flow ──

  // Check if there's pre-auth data stored under an old anonymous household ID
  const oldHid = localStorage.getItem("ks-h");
  const hasOldData = oldHid && oldHid !== uid;

  // Create the household doc. If migrating, preserve the old kitchen name.
  const cfgName = state.cfg?.name || "My Kitchen";
  await createHousehold(uid, hasOldData ? cfgName : "My Kitchen");

  // Copy old anonymous data into the new UID-based household
  if (hasOldData) {
    console.log(`Migrating household data: ${oldHid} → ${uid}`);
    await migrateHousehold(oldHid, uid);
  }

  // Create the user profile and link it to the new household
  const profile = await createUserProfile(user);
  profile.householdIds = [uid];
  await dbSet(`users/${uid}`, profile);

  // Clean up localStorage: the old anonymous household ID is no longer needed
  localStorage.removeItem("ks-h");

  // Also update the "ks-hhs" key (list of known household IDs in localStorage).
  // Remove the old anonymous ID and ensure the new UID-based ID is present.
  const hhs = J("ks-hhs");
  if (hhs) {
    const updated = hhs.filter(h => h !== oldHid);
    if (!updated.includes(uid)) updated.push(uid);
    localStorage.setItem("ks-hhs", JSON.stringify(updated));
  }

  return uid;
}

// ── FIRESTORE HELPERS FOR SHARED DATA ────────────────────────────────────────
// These functions persist specific pieces of household data (meal plan, config,
// cook log, waste log) to Firestore. They also update the in-memory `state`
// so the UI stays consistent without needing a re-fetch.

/**
 * saveMp — save or delete a single meal plan entry.
 *
 * `dateKey` is a "YYYY-MM-DD" string. `mealName` is the recipe/meal name.
 * If mealName is truthy, upsert the entry; if falsy, delete it.
 * Updates state.mp (the in-memory meal plan map) immediately.
 */
export async function saveMp(dateKey, mealName) {
  if (mealName) {
    state.mp[dateKey] = mealName;
    await dbSet(`households/${state.hid}/mealplan/${dateKey}`, { date: dateKey, meal: mealName });
  } else {
    delete state.mp[dateKey];
    await dbDelete(`households/${state.hid}/mealplan/${dateKey}`);
  }
}

/**
 * saveCfg — persist the current household configuration to Firestore.
 * The config includes kitchen name, household members, dietary restrictions, etc.
 * Always writes to the fixed document path "settings/config" under the household.
 */
export async function saveCfg() {
  await dbSet(`households/${state.hid}/settings/config`, state.cfg);
}

/**
 * addCookLogEntry — record that a meal was cooked today (or on a given date).
 *
 * Generates a unique ID from timestamp + random suffix, prepends to state.cookLog
 * (most recent first), and caps the log at 200 entries to prevent unbounded growth.
 */
export async function addCookLogEntry(name, date) {
  const entry = {
    // Unique ID: base-36 timestamp + random suffix ensures no collisions
    id: Date.now().toString(36) + Math.random().toString(36).slice(2),
    name,
    date: date || tk(),             // defaults to today if no date provided
    loggedAt: new Date().toISOString()
  };
  state.cookLog.unshift(entry);     // prepend so newest entries are first
  // Cap at 200 entries to keep the dataset manageable
  if (state.cookLog.length > 200) state.cookLog = state.cookLog.slice(0, 200);
  await dbSet(`households/${state.hid}/cooklog/${entry.id}`, entry);
}

/**
 * addWasteEntry — record that a food item was wasted/thrown out today.
 *
 * Deduplicates: if the same item name was already logged today, skip silently.
 * Otherwise, generates a unique ID, prepends to state.wasteLog, and caps at 100 entries.
 */
export async function addWasteEntry(name) {
  // Prevent duplicate entries for the same item on the same day
  if (state.wasteLog.find(x => x.name === name && x.date === tk())) return;
  const entry = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2),
    name,
    date: tk(),
    loggedAt: new Date().toISOString()
  };
  state.wasteLog.unshift(entry);
  if (state.wasteLog.length > 100) state.wasteLog = state.wasteLog.slice(0, 100);
  await dbSet(`households/${state.hid}/wastelog/${entry.id}`, entry);
}

/**
 * loadFirestoreData — one-time data loader called during app startup.
 *
 * Loads all household data from Firestore into in-memory `state`:
 *   - settings/config  → state.cfg
 *   - mealplan/*       → state.mp
 *   - cooklog/*        → state.cookLog
 *   - wastelog/*       → state.wasteLog
 *
 * For each data type, it also handles a one-time migration from localStorage.
 * Before Firestore existed, data was stored in localStorage under keys like
 * "ks-c" (config), "ks-m" (meal plan), "ks-cooklog", "ks-waste". If Firestore
 * is empty but localStorage has data, we upload it and then delete the local copy.
 * This migration path only runs once per user.
 */
export async function loadFirestoreData() {
  try {
    // ── SETTINGS ──
    // Look for the config doc in Firestore; merge with defaults to fill any missing fields
    const cfgDocs = await dbList(`households/${state.hid}/settings`);
    const cfgDoc = cfgDocs.find(d => d.id === "config");
    if (cfgDoc) {
      // Merge: CFG_DEFAULT provides fallback values for any keys not in the saved doc
      state.cfg = { ...CFG_DEFAULT, ...cfgDoc };
    } else {
      // No config in Firestore — check localStorage for pre-migration data ("ks-c")
      const lsCfg = J("ks-c");
      state.cfg = { ...CFG_DEFAULT, ...(lsCfg || {}) };
      await saveCfg();                          // upload to Firestore
      if (lsCfg) localStorage.removeItem("ks-c"); // clean up localStorage
    }

    // ── MEAL PLAN ──
    // Each meal plan doc has { date: "YYYY-MM-DD", meal: "Recipe Name" }
    // We flatten them into state.mp as a simple { date: mealName } map
    const mpDocs = await dbList(`households/${state.hid}/mealplan`);
    state.mp = {};
    mpDocs.forEach(d => { if (d.date && d.meal) state.mp[d.date] = d.meal; });
    if (!mpDocs.length) {
      // Firestore empty — try migrating from localStorage key "ks-m"
      const lsMp = J("ks-m");
      if (lsMp && Object.keys(lsMp).length) {
        state.mp = lsMp;
        for (const [k, v] of Object.entries(lsMp)) await saveMp(k, v);
        localStorage.removeItem("ks-m");
      }
    }

    // ── COOK LOG ──
    // Array of { id, name, date, loggedAt } entries, sorted newest-first
    const clDocs = await dbList(`households/${state.hid}/cooklog`);
    if (clDocs.length) {
      // Sort by loggedAt (or date as fallback) so newest entries come first
      state.cookLog = clDocs.sort((a, b) => new Date(b.loggedAt || b.date || 0) - new Date(a.loggedAt || a.date || 0));
    } else {
      // Firestore empty — try migrating from localStorage key "ks-cooklog"
      const lsCl = J("ks-cooklog");
      if (lsCl && lsCl.length) {
        // Normalize old entries: ensure every entry has an `id` and `loggedAt`
        state.cookLog = lsCl.map((e, i) => ({
          id: e.id || (Date.now() - i).toString(36), // generate IDs for old entries that lack them
          name: e.name, date: e.date,
          loggedAt: e.loggedAt || new Date().toISOString()
        }));
        for (const e of state.cookLog) await dbSet(`households/${state.hid}/cooklog/${e.id}`, e);
        localStorage.removeItem("ks-cooklog");
      }
    }

    // ── WASTE LOG ──
    // Same structure and migration pattern as cook log
    const wlDocs = await dbList(`households/${state.hid}/wastelog`);
    if (wlDocs.length) {
      state.wasteLog = wlDocs.sort((a, b) => new Date(b.loggedAt || b.date || 0) - new Date(a.loggedAt || a.date || 0));
    } else {
      // Firestore empty — try migrating from localStorage key "ks-waste"
      const lsWl = J("ks-waste");
      if (lsWl && lsWl.length) {
        state.wasteLog = lsWl.map((e, i) => ({
          id: e.id || (Date.now() - i).toString(36),
          name: e.name, date: e.date,
          loggedAt: e.loggedAt || new Date().toISOString()
        }));
        for (const e of state.wasteLog) await dbSet(`households/${state.hid}/wastelog/${e.id}`, e);
        localStorage.removeItem("ks-waste");
      }
    }
  } catch (e) {
    console.error("loadFirestoreData error:", e);
  }
}

// ── DATA OPERATIONS ──────────────────────────────────────────────────────────
// These are the primary CRUD functions used by UI code to modify inventory,
// recipes, and shopping list items. They follow an optimistic-update pattern:
//   1. Update in-memory `state` immediately (so the UI feels instant)
//   2. Re-render the affected UI sections
//   3. Persist to Firestore in the background
//
// Render functions are called via `renderCallbacks` (a registry pattern) to
// avoid circular imports — UI modules register their render functions here
// at startup, and db.js calls them without importing the UI modules directly.

/**
 * renderCallbacks — registry where UI modules deposit their render functions.
 * This decouples db.js from the UI layer and prevents circular import chains.
 *
 * Populated during app init by modules like inventory.js, recipes.js, etc.
 * Each callback is either a function or null (if not yet registered).
 */
export const renderCallbacks = {
  renderAll: null,    // re-render the entire inventory list
  renderSum: null,    // re-render the summary/dashboard section
  renderRecs: null,   // re-render the recipes list
  renderShop: null,   // re-render the shopping list
};

/**
 * ss (sync status) — updates the sync indicator in the header bar.
 *
 * The UI shows a colored dot and label:
 *   "synced"  → green dot + household name
 *   "syncing" → yellow dot + "Syncing..."
 *   "error"   → red dot + "Sync error"
 *
 * @param {string} s - one of "synced", "syncing", or "error"
 */
export function ss(s) {
  const dot = document.getElementById("sdot");  // the colored status dot element
  const lbl = document.getElementById("slb");   // the text label next to the dot
  if (dot) dot.className = "sdot " + s;
  if (lbl) lbl.textContent = s === "synced" ? "🏠 " + (state.cfg?.name || state.hid) : s === "syncing" ? "Syncing…" : "Sync error";
}

/**
 * svi (save inventory item) — upsert an inventory item.
 *
 * Replaces any existing item with the same ID in state.inv, then persists.
 * Shows sync status indicator during the operation.
 */
export async function svi(item) {
  ss("syncing");
  try {
    // Replace existing item (by id) or append if new — spread creates a new array
    state.inv = [...state.inv.filter(i => i.id !== item.id), item];
    renderCallbacks.renderAll?.();
    renderCallbacks.renderSum?.();
    await dbSet(`households/${state.hid}/inventory/${item.id}`, item);
    ss("synced");
  } catch (e) { console.error(e); ss("error"); }
}

/**
 * dli (delete inventory item) — remove an inventory item by ID.
 *
 * Filters it out of state.inv immediately, re-renders, then deletes from Firestore.
 */
export async function dli(id) {
  ss("syncing");
  try {
    state.inv = state.inv.filter(i => i.id !== id);
    renderCallbacks.renderAll?.();
    renderCallbacks.renderSum?.();
    await dbDelete(`households/${state.hid}/inventory/${id}`);
    ss("synced");
  } catch (e) { console.error(e); ss("error"); }
}

/**
 * svr (save recipe) — upsert a recipe.
 *
 * Replaces any existing recipe with the same ID, re-renders, and persists.
 */
export async function svr(r) {
  try {
    state.recs = [...state.recs.filter(x => x.id !== r.id), r];
    renderCallbacks.renderRecs?.();
    renderCallbacks.renderSum?.();
    await dbSet(`households/${state.hid}/recipes/${r.id}`, r);
  } catch (e) { console.error(e); }
}

/**
 * dlr (delete recipe) — remove a recipe by ID.
 */
export async function dlr(id) {
  try {
    state.recs = state.recs.filter(r => r.id !== id);
    renderCallbacks.renderRecs?.();
    renderCallbacks.renderSum?.();
    await dbDelete(`households/${state.hid}/recipes/${id}`);
  } catch (e) { console.error(e); }
}

/**
 * svShopItem (save shopping item) — upsert a shopping list item.
 *
 * Replaces any existing item with the same ID, re-renders, and persists.
 */
export async function svShopItem(item) {
  try {
    state.shop = [...state.shop.filter(s => s.id !== item.id), item];
    renderCallbacks.renderShop?.();
    renderCallbacks.renderSum?.();
    await dbSet(`households/${state.hid}/shopping/${item.id}`, item);
  } catch (e) { console.error(e); }
}

/**
 * dlShopItem (delete shopping item) — remove a shopping list item by ID.
 */
export async function dlShopItem(id) {
  try {
    state.shop = state.shop.filter(s => s.id !== id);
    renderCallbacks.renderShop?.();
    renderCallbacks.renderSum?.();
    await dbDelete(`households/${state.hid}/shopping/${id}`);
  } catch (e) { console.error(e); }
}

// ── HELPER ───────────────────────────────────────────────────────────────────

/**
 * tk (today key) — returns today's date as a "YYYY-MM-DD" string.
 * Used as a date key for meal plan entries, cook log, and waste log.
 */
function tk() { return new Date().toISOString().split("T")[0]; }
