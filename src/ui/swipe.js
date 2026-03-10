// ── SWIPE-TO-DELETE + MULTI-SELECT ENGINE ────────────────────────────────────
// This module provides two UI interaction patterns for list items:
//   1. iOS-style swipe-to-reveal: user swipes a row left to expose a red delete button.
//   2. Multi-select mode: user can toggle select on multiple items, then bulk-delete.
//
// Both patterns work on the same DOM structure:
//   <div class="swipe-wrap">        — outer wrapper, carries state classes (open, selecting, selected)
//     <div class="swipe-inner">     — the visible row content; slides left on swipe
//     <button class="swipe-del">    — the red delete button hidden behind the row
//   </div>
//
// The module is used by both the inventory list ("inv") and the shopping list ("shop").

import { state } from '../state.js';                // Shared app state (selectMode, selectedIds, etc.)
import { dli, dlShopItem } from '../db.js';          // Database delete functions: dli = delete inventory item, dlShopItem = delete shopping item
import { g, showNotif } from '../helpers.js';        // g = getElementById shorthand, showNotif = toast notification

// Module-level tracking variables for swipe gesture state:
// _swipeEl:  the .swipe-inner element currently being dragged (null when idle)
// _swipeX0:  the starting X coordinate of the current swipe gesture
// _openWrap: the .swipe-wrap that currently has its delete button revealed (only one at a time)
let _swipeEl = null, _swipeX0 = 0, _openWrap = null;

// Registers all touch event listeners for swipe-to-delete behavior.
// Called once at app startup. Uses document-level delegation so it automatically
// works for dynamically added list items without re-binding.
export function initSwipe() {

  // ── TOUCH START: begin tracking a potential swipe gesture ──
  document.addEventListener("touchstart", e => {
    // Only activate if the touch landed on a swipeable row's inner content
    const inner = e.target.closest(".swipe-inner");
    if (!inner) return;
    const wrap = inner.closest(".swipe-wrap");
    if (!wrap) return;
    // Swipe is disabled during multi-select mode (taps toggle selection instead)
    if (state.selectMode) return;
    // Store the element being swiped and the initial finger position
    _swipeEl = inner;
    _swipeX0 = e.touches[0].clientX;
    // "swiping" class disables CSS transitions so the row tracks the finger smoothly
    inner.classList.add("swiping");
  }, { passive: true });

  // ── TOUCH MOVE: drag the row left to follow the user's finger ──
  document.addEventListener("touchmove", e => {
    if (!_swipeEl) return; // No active swipe in progress
    // Calculate horizontal distance moved since touch start
    const dx = e.touches[0].clientX - _swipeX0;
    // Clamp translation: allow sliding left up to 80px (delete button width), but not right past 0
    const tx = Math.max(-80, Math.min(0, dx));
    _swipeEl.style.transform = `translateX(${tx}px)`;
    // If the user has moved more than 8px horizontally, prevent vertical scrolling
    // so the swipe gesture doesn't conflict with page scroll
    if (Math.abs(dx) > 8) e.preventDefault();
  }, { passive: false }); // passive: false is required to allow preventDefault()

  // ── TOUCH END: decide whether to snap open (reveal delete) or snap closed ──
  document.addEventListener("touchend", () => {
    if (!_swipeEl) return;
    const inner = _swipeEl;
    const wrap = inner.closest(".swipe-wrap");
    // Remove "swiping" class to re-enable CSS transitions for the snap animation
    inner.classList.remove("swiping");
    // Read the current horizontal offset to decide open vs close
    const tx = parseFloat(inner.style.transform.replace("translateX(", "")) || 0;
    if (tx < -50) {
      // User swiped far enough left (>50px): lock the row open at 80px to reveal delete button
      inner.style.transform = "translateX(-80px)";
      wrap?.classList.add("open");
      // Only one row can be open at a time — close the previously open one
      if (_openWrap && _openWrap !== wrap) _snapClose(_openWrap);
      _openWrap = wrap;
    } else {
      // User didn't swipe far enough: snap back to closed position
      inner.style.transform = "translateX(0)";
      wrap?.classList.remove("open");
      if (_openWrap === wrap) _openWrap = null;
    }
    // Clear the active swipe reference
    _swipeEl = null;
  });

  // ── DISMISS: close any open swipe row when the user taps elsewhere ──
  document.addEventListener("touchstart", e => {
    if (!_openWrap) return;                                     // Nothing is open
    if (e.target.closest(".swipe-del")) return;                 // Tap was on the delete button itself — let it fire
    const inner = e.target.closest(".swipe-inner");
    if (inner && inner.closest(".swipe-wrap") === _openWrap) return; // Tap was on the same open row — ignore
    // Tap was somewhere else: close the open row
    _snapClose(_openWrap);
    _openWrap = null;
  }, { passive: true });
}

// Animates a swipe row back to the closed position (translateX 0)
// and removes the "open" class. Used when another row opens or
// the user taps outside the open row.
function _snapClose(wrap) {
  const inner = wrap?.querySelector(".swipe-inner");
  if (inner) inner.style.transform = "translateX(0)"; // CSS transition handles the animation
  wrap?.classList.remove("open");
}

// Handles the delete action when the user taps the revealed red delete button.
// Immediately dims the row for visual feedback, then removes the item from the database.
// "list" is either "shop" (shopping list) or "inv" (inventory).
export async function swipeDelItem(id, list) {
  const wrap = g("sw-" + id); // Each swipe row has id="sw-{itemId}"
  if (wrap) wrap.style.opacity = "0.5"; // Dim the row instantly so user sees feedback before async delete completes
  if (list === "shop") {
    await dlShopItem(id); // Shopping list items have their own delete path
  } else {
    await dli(id);              // Delete inventory item from Firestore
    showNotif("Item removed");  // Only inventory shows a toast; shopping list updates are silent
  }
}

// Handles a tap on a list row. The behavior depends on the current mode:
//   - If the row is swiped open: close it (treat tap as dismissal)
//   - If multi-select mode is active: toggle this item's selected state
//   - Normal mode, shopping list: toggle the item's checked/unchecked state
//   - Normal mode, inventory: open the quantity adjustment overlay
export function swipeRowTap(id, list) {
  const wrap = g("sw-" + id);
  if (wrap) {
    const inner = wrap.querySelector(".swipe-inner");
    // Check if this row is currently swiped open (shifted left by more than 10px)
    const tx = parseFloat((inner.style.transform || "").replace("translateX(", "")) || 0;
    if (tx < -10) {
      // Row is open — close it and absorb the tap (don't trigger any action)
      _snapClose(wrap);
      _openWrap = null;
      return;
    }
  }

  // ── Multi-select mode: toggle item selection ──
  if (state.selectMode) {
    if (state.selectedIds.has(id)) {
      // Deselect: remove from set and remove visual highlight
      state.selectedIds.delete(id);
      wrap?.classList.remove("selected");
    } else {
      // Select: add to set and apply visual highlight
      state.selectedIds.add(id);
      wrap?.classList.add("selected");
    }
    updateMultiBar(); // Refresh the "N selected" count in the action bar
    return;
  }

  // ── Normal mode: perform the default tap action for this list type ──
  if (list === "shop") window.togShop(id);  // Toggle checked state on shopping list item
  else window.openAdj(id);                  // Open quantity adjustment overlay for inventory item
}

// ── MULTI-SELECT MODE ────────────────────────────────────────────────────────
// Multi-select lets users tap multiple rows to select them, then bulk-delete.
// When active, swipe gestures are disabled and taps toggle selection instead.
// Only one list (shop or inv) can be in select mode at a time.

// Toggles multi-select mode for the shopping list.
// If already in shop select mode, exits it. Otherwise enters shop select mode.
export function togShopSelect() {
  if (state.selectMode === "shop") { cancelSelect(); return; } // Already active — toggle off
  if (state.selectMode) cancelSelect(); // Exit the other list's select mode first
  state.selectMode = "shop";
  state.selectedIds.clear(); // Start with nothing selected
  // Add "selecting" class to all shopping list rows — shows selection checkboxes via CSS
  document.querySelectorAll("#shlist .swipe-wrap").forEach(w => w.classList.add("selecting"));
  // Update the select button to show "Cancel" while in select mode
  const btn = g("sh-selbtn");
  if (btn) { btn.classList.add("active"); btn.textContent = "Cancel"; }
  updateMultiBar(); // Show the bottom action bar (even with 0 selected, for context)
}

// Toggles multi-select mode for the inventory list.
// Mirror of togShopSelect() but targets the inventory DOM container.
export function togInvSelect() {
  if (state.selectMode === "inv") { cancelSelect(); return; }
  if (state.selectMode) cancelSelect();
  state.selectMode = "inv";
  state.selectedIds.clear();
  // Add "selecting" class to all inventory rows
  document.querySelectorAll("#ibody .swipe-wrap").forEach(w => w.classList.add("selecting"));
  const btn = g("inv-selbtn");
  if (btn) { btn.classList.add("active"); btn.textContent = "Cancel"; }
  updateMultiBar();
}

// Exits multi-select mode completely, regardless of which list was active.
// Clears all selection state and resets the UI back to normal mode.
export function cancelSelect() {
  state.selectMode = null;
  state.selectedIds.clear();
  // Remove both "selecting" (shows checkboxes) and "selected" (highlight) from all rows
  document.querySelectorAll(".swipe-wrap.selecting").forEach(w => w.classList.remove("selecting", "selected"));
  // Reset both select buttons back to their default "Select" label
  const sb = g("sh-selbtn"); if (sb) { sb.classList.remove("active"); sb.textContent = "Select"; }
  const ib = g("inv-selbtn"); if (ib) { ib.classList.remove("active"); ib.textContent = "Select"; }
  updateMultiBar(); // Hides the bottom action bar since selectMode is now null
}

// Deletes all currently selected items in a single batch operation.
// Copies the selection state before cancelling select mode, so the UI
// returns to normal immediately while deletes happen in the background.
export async function deleteSelected() {
  if (!state.selectedIds.size) return; // Nothing selected — no-op
  // Snapshot the selected IDs and which list we're on before cancelSelect clears them
  const ids = [...state.selectedIds];
  const list = state.selectMode;
  cancelSelect(); // Exit select mode immediately for responsive UI
  // Delete all selected items in parallel for speed
  if (list === "shop") {
    await Promise.all(ids.map(id => dlShopItem(id)));
  } else {
    await Promise.all(ids.map(id => dli(id)));
  }
  // Show a confirmation toast with the count (pluralized)
  showNotif(`Removed ${ids.length} item${ids.length !== 1 ? "s" : ""} 🗑`);
}

// Updates the floating action bar at the bottom of the screen that shows
// "N selected — Delete" during multi-select mode.
// Called whenever the selection changes (items toggled, mode entered/exited).
function updateMultiBar() {
  const bar = g("multi-bar"); // The fixed-position action bar element
  if (!bar) return;
  const n = state.selectedIds.size;
  const count = g("multi-count"); // The <span> that displays the selected count
  if (count) count.textContent = n;
  // Show the bar when in select mode, hide it otherwise
  if (state.selectMode) bar.classList.add("visible");
  else bar.classList.remove("visible");
}
