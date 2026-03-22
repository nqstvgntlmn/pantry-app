// ── REAL-TIME SYNC MODULE ────────────────────────────────────────────────────
// Replaces the 30-second polling loop with Firestore onSnapshot listeners for
// instant sync across household members. Uses the Firebase Firestore client SDK
// for real-time updates on inventory, shopping list, and recipes.
//
// The REST proxy (/api/db) is still used for WRITES (since it handles auth and
// Firestore security rules server-side). This module only handles READ listeners.
//
// Lifecycle:
//   1. startRealtimeSync(hid) — called after auth, sets up onSnapshot listeners
//   2. stopRealtimeSync()     — called on sign-out, unsubscribes all listeners

import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { app } from './auth.js';
import { state, CFG_DEFAULT } from './state.js';
import { renderCallbacks, ss } from './db.js';

// Initialize the Firestore client from the shared Firebase app instance
const db = getFirestore(app);

// Active listener unsubscribe functions — stored so we can clean up on sign-out
let _unsubs = [];

// _debouncedRenderAll — coalesces rapid-fire onSnapshot callbacks into a single
// renderAll call. Multiple Firestore listeners (inventory, shopping, activity)
// often fire within milliseconds of each other after a write; without debouncing
// this causes 3-4 full re-renders in quick succession, leading to visible flicker
// and occasional crashes on lower-end devices.
let _renderAllTimer = null;
function _debouncedRenderAll() {
  if (_renderAllTimer) clearTimeout(_renderAllTimer);
  _renderAllTimer = setTimeout(() => {
    _renderAllTimer = null;
    renderCallbacks.renderAll?.();
  }, 80); // 80ms window — fast enough to feel instant, wide enough to coalesce
}

/**
 * startRealtimeSync(hid) — sets up onSnapshot listeners for the three main
 * collections that need instant cross-device updates: inventory, shopping, and recipes.
 * Also listens to settings, mealplan, cooklog, and wastelog for completeness.
 *
 * Each listener updates the corresponding state array/object and triggers a
 * UI re-render via renderCallbacks. The sync status dot is updated to reflect
 * the connection state.
 *
 * @param {string} hid — the active household ID
 */
export function startRealtimeSync(hid) {
  // Clean up any existing listeners before starting new ones
  stopRealtimeSync();

  if (!hid) return;

  // Helper: converts a Firestore QuerySnapshot into a plain array of objects
  // with the document ID included as the `id` field.
  const toDocs = (snap) => snap.docs.map(d => ({ id: d.id, ...d.data() }));

  // ── Inventory listener — updates state.inv in real time ──
  // renderAll already calls renderHome() which includes renderSum(),
  // so we don't call renderSum separately to avoid double-render loops.
  _unsubs.push(onSnapshot(
    collection(db, `households/${hid}/inventory`),
    (snap) => {
      state.inv = toDocs(snap);
      ss("synced");
      _debouncedRenderAll();
    },
    (err) => { console.warn("realtime inv error:", err); ss("error"); }
  ));

  // ── Shopping list listener — updates state.shop in real time ──
  // Render shop + home (for stat cards/quick chips) but debounced to prevent storms
  _unsubs.push(onSnapshot(
    collection(db, `households/${hid}/shopping`),
    (snap) => {
      state.shop = toDocs(snap);
      ss("synced");
      renderCallbacks.renderShop?.();
      _debouncedRenderAll();
    },
    (err) => { console.warn("realtime shop error:", err); ss("error"); }
  ));

  // ── Recipes listener — updates state.recs in real time ──
  // renderAll includes renderSum, so skip separate renderSum call
  _unsubs.push(onSnapshot(
    collection(db, `households/${hid}/recipes`),
    (snap) => {
      state.recs = toDocs(snap);
      ss("synced");
      renderCallbacks.renderRecs?.();
      _debouncedRenderAll();
    },
    (err) => { console.warn("realtime recs error:", err); ss("error"); }
  ));

  // ── Meal plan listener — updates state.mp in real time ──
  _unsubs.push(onSnapshot(
    collection(db, `households/${hid}/mealplan`),
    (snap) => {
      const newMp = {};
      toDocs(snap).forEach(d => { if (d.date && d.meal) newMp[d.date] = d.meal; });
      state.mp = newMp;
      ss("synced");
    },
    (err) => { console.warn("realtime mp error:", err); }
  ));

  // ── Settings listener — updates state.cfg in real time ──
  _unsubs.push(onSnapshot(
    collection(db, `households/${hid}/settings`),
    (snap) => {
      const cfgDoc = toDocs(snap).find(d => d.id === "config");
      if (cfgDoc) state.cfg = { ...CFG_DEFAULT, ...cfgDoc };
    },
    (err) => { console.warn("realtime settings error:", err); }
  ));

  // ── Cook log listener — updates state.cookLog in real time ──
  _unsubs.push(onSnapshot(
    collection(db, `households/${hid}/cooklog`),
    (snap) => {
      state.cookLog = toDocs(snap).sort(
        (a, b) => new Date(b.loggedAt || b.date || 0) - new Date(a.loggedAt || a.date || 0)
      );
    },
    (err) => { console.warn("realtime cooklog error:", err); }
  ));

  // ── Waste log listener — updates state.wasteLog in real time ──
  _unsubs.push(onSnapshot(
    collection(db, `households/${hid}/wastelog`),
    (snap) => {
      state.wasteLog = toDocs(snap).sort(
        (a, b) => new Date(b.loggedAt || b.date || 0) - new Date(a.loggedAt || a.date || 0)
      );
    },
    (err) => { console.warn("realtime wastelog error:", err); }
  ));

  // ── Activity feed listener — updates state.activity in real time ──
  // Ensures all household members see Recent Activity instantly, including
  // non-owner members (fixes issue where activity was missing for members).
  // Uses debounced render to prevent cascade when multiple listeners fire at once.
  _unsubs.push(onSnapshot(
    collection(db, `households/${hid}/activity`),
    (snap) => {
      // Store latest activity entries in state, sorted newest first
      state.activity = toDocs(snap)
        .sort((a, b) => new Date(b.timestamp || 0) - new Date(a.timestamp || 0))
        .slice(0, 10);
      // Debounced render — prevents re-render storm when inventory + activity
      // listeners fire back-to-back after a write
      _debouncedRenderAll();
    },
    (err) => { console.warn("realtime activity error:", err); }
  ));

  ss("synced");
  console.log("[realtime] Listeners started for household:", hid);
}

/**
 * stopRealtimeSync() — unsubscribes all active Firestore listeners.
 * Called on sign-out to prevent memory leaks and stale data.
 */
export function stopRealtimeSync() {
  // Clear any pending debounced render to prevent stale callbacks firing after cleanup
  if (_renderAllTimer) {
    clearTimeout(_renderAllTimer);
    _renderAllTimer = null;
  }
  // Unsubscribe every active Firestore onSnapshot listener
  _unsubs.forEach(unsub => {
    try { unsub(); } catch { /* ignore cleanup errors */ }
  });
  _unsubs = [];
  console.log("[realtime] All listeners stopped");
}
