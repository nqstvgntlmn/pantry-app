// ── FIRESTORE PROXY CLIENT ───────────────────────────────────────────────────
// All database operations go through /api/db (Vercel serverless function).
// Firebase API keys never need to be in the browser.

import { state, CFG_DEFAULT, J } from './state.js';

// _db(op, path, data) — POST to /api/db proxy -> Firestore REST
// Checks content-type before parsing: Vercel error pages return HTML.
async function _db(op, path, data) {
  const r = await fetch("/api/db", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ op, path, data })
  });
  const ct = r.headers.get("content-type") || "";
  if (!ct.includes("application/json")) {
    throw new Error(`/api/db non-JSON response (status ${r.status}) for ${op} ${path}`);
  }
  return r.json();
}

// dbList — returns docs array, or [] if collection is empty/doesn't exist
export async function dbList(path) {
  try { const j = await _db("list", path); return j.docs || []; }
  catch (e) { console.warn("dbList:", path, e.message); return []; }
}

// dbSet — upsert a single document
export async function dbSet(path, data) { return _db("set", path, data); }

// dbDelete — remove a single document
export async function dbDelete(path) { return _db("delete", path); }

// ── FIRESTORE HELPERS FOR SHARED DATA ────────────────────────────────────────

// saveMp(dateKey, mealName | null) — writes one meal plan entry to Firestore
export async function saveMp(dateKey, mealName) {
  if (mealName) {
    state.mp[dateKey] = mealName;
    await dbSet(`households/${state.hid}/mealplan/${dateKey}`, { date: dateKey, meal: mealName });
  } else {
    delete state.mp[dateKey];
    await dbDelete(`households/${state.hid}/mealplan/${dateKey}`);
  }
}

// saveCfg() — writes the current cfg object to Firestore
export async function saveCfg() {
  await dbSet(`households/${state.hid}/settings/config`, state.cfg);
}

// addCookLogEntry(name, date) — appends a cook log entry to Firestore
export async function addCookLogEntry(name, date) {
  const entry = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2),
    name,
    date: date || tk(),
    loggedAt: new Date().toISOString()
  };
  state.cookLog.unshift(entry);
  if (state.cookLog.length > 200) state.cookLog = state.cookLog.slice(0, 200);
  await dbSet(`households/${state.hid}/cooklog/${entry.id}`, entry);
}

// addWasteEntry(name) — appends a waste log entry to Firestore
export async function addWasteEntry(name) {
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

// loadFirestoreData() — called once in _appStart before poll() begins.
// Loads mp, cfg, cookLog, wasteLog from Firestore.
// Handles one-time migration from localStorage if needed.
export async function loadFirestoreData() {
  // J is imported statically at the top
  try {
    // SETTINGS
    const cfgDocs = await dbList(`households/${state.hid}/settings`);
    const cfgDoc = cfgDocs.find(d => d.id === "config");
    if (cfgDoc) {
      state.cfg = { ...CFG_DEFAULT, ...cfgDoc };
    } else {
      const lsCfg = J("ks-c");
      state.cfg = { ...CFG_DEFAULT, ...(lsCfg || {}) };
      await saveCfg();
      if (lsCfg) localStorage.removeItem("ks-c");
    }

    // MEAL PLAN
    const mpDocs = await dbList(`households/${state.hid}/mealplan`);
    state.mp = {};
    mpDocs.forEach(d => { if (d.date && d.meal) state.mp[d.date] = d.meal; });
    if (!mpDocs.length) {
      const lsMp = J("ks-m");
      if (lsMp && Object.keys(lsMp).length) {
        state.mp = lsMp;
        for (const [k, v] of Object.entries(lsMp)) await saveMp(k, v);
        localStorage.removeItem("ks-m");
      }
    }

    // COOK LOG
    const clDocs = await dbList(`households/${state.hid}/cooklog`);
    if (clDocs.length) {
      state.cookLog = clDocs.sort((a, b) => new Date(b.loggedAt || b.date || 0) - new Date(a.loggedAt || a.date || 0));
    } else {
      const lsCl = J("ks-cooklog");
      if (lsCl && lsCl.length) {
        state.cookLog = lsCl.map((e, i) => ({
          id: e.id || (Date.now() - i).toString(36),
          name: e.name, date: e.date,
          loggedAt: e.loggedAt || new Date().toISOString()
        }));
        for (const e of state.cookLog) await dbSet(`households/${state.hid}/cooklog/${e.id}`, e);
        localStorage.removeItem("ks-cooklog");
      }
    }

    // WASTE LOG
    const wlDocs = await dbList(`households/${state.hid}/wastelog`);
    if (wlDocs.length) {
      state.wasteLog = wlDocs.sort((a, b) => new Date(b.loggedAt || b.date || 0) - new Date(a.loggedAt || a.date || 0));
    } else {
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
// These update local state immediately then persist to Firestore.
// They call render functions via the renderCallbacks registry to avoid circular imports.

// Render callback registry — modules register their render functions here
export const renderCallbacks = {
  renderAll: null,
  renderSum: null,
  renderRecs: null,
  renderShop: null,
};

// ss(state) — updates sync status dot and label
export function ss(s) {
  const dot = document.getElementById("sdot");
  const lbl = document.getElementById("slb");
  if (dot) dot.className = "sdot " + s;
  if (lbl) lbl.textContent = s === "synced" ? "🏠 " + state.hid : s === "syncing" ? "Syncing…" : "Sync error";
}

// svi(item) — save/upsert an inventory item locally + to Firestore
export async function svi(item) {
  ss("syncing");
  try {
    state.inv = [...state.inv.filter(i => i.id !== item.id), item];
    renderCallbacks.renderAll?.();
    renderCallbacks.renderSum?.();
    await dbSet(`households/${state.hid}/inventory/${item.id}`, item);
    ss("synced");
  } catch (e) { console.error(e); ss("error"); }
}

// dli(id) — delete an inventory item locally + from Firestore
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

// svr(r) — save/upsert a recipe locally + to Firestore
export async function svr(r) {
  try {
    state.recs = [...state.recs.filter(x => x.id !== r.id), r];
    renderCallbacks.renderRecs?.();
    renderCallbacks.renderSum?.();
    await dbSet(`households/${state.hid}/recipes/${r.id}`, r);
  } catch (e) { console.error(e); }
}

// dlr(id) — delete a recipe locally + from Firestore
export async function dlr(id) {
  try {
    state.recs = state.recs.filter(r => r.id !== id);
    renderCallbacks.renderRecs?.();
    renderCallbacks.renderSum?.();
    await dbDelete(`households/${state.hid}/recipes/${id}`);
  } catch (e) { console.error(e); }
}

// svShopItem(item) — upsert a shopping item locally + to Firestore
export async function svShopItem(item) {
  try {
    state.shop = [...state.shop.filter(s => s.id !== item.id), item];
    renderCallbacks.renderShop?.();
    renderCallbacks.renderSum?.();
    await dbSet(`households/${state.hid}/shopping/${item.id}`, item);
  } catch (e) { console.error(e); }
}

// dlShopItem(id) — remove a shopping item locally + from Firestore
export async function dlShopItem(id) {
  try {
    state.shop = state.shop.filter(s => s.id !== id);
    renderCallbacks.renderShop?.();
    renderCallbacks.renderSum?.();
    await dbDelete(`households/${state.hid}/shopping/${id}`);
  } catch (e) { console.error(e); }
}

// ── HELPER ───────────────────────────────────────────────────────────────────
// tk() — returns today's date as "YYYY-MM-DD"
function tk() { return new Date().toISOString().split("T")[0]; }
