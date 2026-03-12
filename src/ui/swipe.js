// ── SWIPE-TO-DELETE + MULTI-SELECT ENGINE ────────────────────────────────────
// Apple-style swipe-to-delete with immediate delete zone reveal:
//   - Any left swipe immediately reveals the red delete zone + trashcan icon
//   - 1:1 finger tracking with rubber band resistance past the delete zone
//   - Tapping the trashcan deletes the item with slide-out animation
//   - ~80% swipe = auto-complete delete with slide-out animation
//   - Release before snap threshold = spring back, delete zone hides
//   - Only one row open at a time — swiping a new row closes any open row
//   - Works on both shopping list and inventory items
//
// DOM structure expected for each swipeable row:
//   <div class="swipe-wrap">
//     <div class="swipe-inner">  — the visible card content (slides left)
//     <div class="swipe-del">    — the red delete zone revealed behind the card
//   </div>

import { state } from '../state.js';
import { dli, dlShopItem } from '../db.js';
import { g, showNotif } from '../helpers.js';

// ── Swipe gesture state ──
// Tracks the currently-swiped element, start position, and which row is "locked open"
let _swipeEl = null;     // The .swipe-inner element currently being dragged
let _swipeX0 = 0;        // Starting X coordinate of the current touch
let _swipeY0 = 0;        // Starting Y coordinate (for direction locking)
let _openWrap = null;    // The one .swipe-wrap that has its delete zone revealed
let _direction = null;   // Locked direction: "horizontal" or "vertical" (null = undecided)
let _rowWidth = 0;       // Cached width of the current row for threshold calculations
let _hapticFired = false; // Whether haptic feedback was already triggered this gesture

// ── Constants for swipe behavior ──
const DELETE_ZONE_WIDTH = 80;    // Width of the red delete zone in pixels (Apple-standard)
const SNAP_THRESHOLD = 0.10;     // 10% of row width = snap/lock open (show delete zone on release)
const AUTO_DELETE_THRESHOLD = 0.70; // 70% of row width = auto-complete delete (no confirmation needed)
const DIRECTION_LOCK_PX = 8;     // Pixels of movement before locking to horizontal/vertical

// Spring easing for snap animations — mimics Apple's bounce
const SPRING_EASE = 'cubic-bezier(0.25, 1.5, 0.5, 1)';
const SMOOTH_EASE = 'cubic-bezier(0.4, 0, 0.2, 1)';

// Registers all touch event listeners for swipe-to-delete behavior.
// Called once at app startup. Uses document-level delegation so dynamically
// added rows work automatically without re-binding.
export function initSwipe() {

  // ── TOUCH START: begin tracking a potential swipe gesture ──
  document.addEventListener("touchstart", e => {
    const inner = e.target.closest(".swipe-inner");
    if (!inner) return;
    const wrap = inner.closest(".swipe-wrap");
    if (!wrap) return;
    // Swipe is disabled during multi-select mode (taps toggle selection instead)
    if (state.selectMode) return;

    // Only one row open at a time — close any previously open row when
    // the user starts swiping a different row
    if (_openWrap && _openWrap !== wrap) {
      _snapClose(_openWrap);
      _openWrap = null;
    }

    // Store the element and initial finger position
    _swipeEl = inner;
    _swipeX0 = e.touches[0].clientX;
    _swipeY0 = e.touches[0].clientY;
    _direction = null;  // Reset direction lock for new gesture
    _hapticFired = false;
    _rowWidth = wrap.offsetWidth; // Cache row width for threshold calculations

    // Disable CSS transitions during drag so row tracks finger at 1:1
    inner.classList.add("swiping");
  }, { passive: true });

  // ── TOUCH MOVE: drag the row left with 1:1 tracking + rubber band resistance ──
  document.addEventListener("touchmove", e => {
    if (!_swipeEl) return;

    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const dx = currentX - _swipeX0;
    const dy = currentY - _swipeY0;

    // Direction locking: decide whether this is a horizontal swipe or vertical scroll
    // once the user has moved beyond the dead zone threshold
    if (!_direction) {
      if (Math.abs(dx) < DIRECTION_LOCK_PX && Math.abs(dy) < DIRECTION_LOCK_PX) return;
      _direction = Math.abs(dx) > Math.abs(dy) ? "horizontal" : "vertical";
    }
    // If scrolling vertically, cancel the swipe and let the page scroll normally
    if (_direction === "vertical") {
      _swipeEl.classList.remove("swiping");
      _swipeEl = null;
      return;
    }

    // Prevent vertical scrolling when we're committed to a horizontal swipe
    e.preventDefault();

    // 1:1 finger tracking — row follows the finger exactly with no rubber band.
    // Clamped at 0 on the right (can't swipe the row rightward past its resting position).
    const tx = dx >= 0 ? 0 : dx;

    _swipeEl.style.transform = `translateX(${tx}px)`;

    // Progressive delete zone reveal — the red zone grows as the user swipes.
    // clip-path inset reveals from right-to-left proportional to the swipe distance.
    // Fully revealed once the swipe reaches DELETE_ZONE_WIDTH (80px).
    const wrap = _swipeEl.closest(".swipe-wrap");
    const del = wrap?.querySelector(".swipe-del");
    if (del && tx < 0) {
      const revealPct = Math.min(100, (Math.abs(tx) / DELETE_ZONE_WIDTH) * 100);
      del.style.clipPath = `inset(0 0 0 ${100 - revealPct}%)`;
    }

    // Trigger haptic feedback and trash lid animation at the auto-delete threshold.
    // The haptic signals "if you release now, the item will be deleted automatically."
    const swipePct = Math.abs(tx) / _rowWidth;
    if (swipePct >= AUTO_DELETE_THRESHOLD && !_hapticFired) {
      _hapticFired = true;
      // Haptic feedback (10ms vibration) — available on Android, silently fails on iOS
      if (navigator.vibrate) navigator.vibrate(10);
      // Open the trash can lid to signal "ready to auto-delete"
      wrap?.classList.add("swipe-threshold");
    } else if (swipePct < AUTO_DELETE_THRESHOLD && _hapticFired) {
      // User pulled back below auto-delete threshold — close the lid and allow re-fire
      _hapticFired = false;
      wrap?.classList.remove("swipe-threshold");
    }
  }, { passive: false }); // passive: false required for preventDefault()

  // ── TOUCH END: snap open, spring back, or auto-delete based on swipe distance ──
  document.addEventListener("touchend", () => {
    if (!_swipeEl) return;

    const inner = _swipeEl;
    const wrap = inner.closest(".swipe-wrap");
    // Re-enable CSS transitions for the snap animation
    inner.classList.remove("swiping");

    // Read the current horizontal offset to decide behavior
    const tx = parseFloat(inner.style.transform.replace("translateX(", "")) || 0;
    const swipePct = Math.abs(tx) / _rowWidth;

    if (swipePct >= AUTO_DELETE_THRESHOLD) {
      // ── AUTO-DELETE: swiped past 80% — slide out and delete ──
      _performAutoDelete(wrap, inner);
    } else if (swipePct >= SNAP_THRESHOLD) {
      // ── SNAP OPEN: swiped past 40% — lock at delete zone width with spring ──
      inner.style.transition = `transform 0.4s ${SPRING_EASE}`;
      inner.style.transform = `translateX(-${DELETE_ZONE_WIDTH}px)`;
      // Fully reveal the delete zone
      const del = wrap?.querySelector(".swipe-del");
      if (del) {
        del.style.transition = `clip-path 0.3s ${SMOOTH_EASE}`;
        del.style.clipPath = "inset(0 0 0 0%)";
      }
      wrap?.classList.add("open");
      wrap?.classList.add("swipe-threshold"); // Keep lid open
      // Only one row open at a time — close any previously open row
      if (_openWrap && _openWrap !== wrap) _snapClose(_openWrap);
      _openWrap = wrap;
      // Clean up inline transition after animation completes
      setTimeout(() => { inner.style.transition = ""; }, 400);
    } else {
      // ── SPRING BACK: didn't reach threshold — return to closed position ──
      inner.style.transition = `transform 0.35s ${SPRING_EASE}`;
      inner.style.transform = "translateX(0)";
      // Hide the delete zone
      const del = wrap?.querySelector(".swipe-del");
      if (del) {
        del.style.transition = `clip-path 0.3s ${SMOOTH_EASE}`;
        del.style.clipPath = "inset(0 0 0 100%)";
      }
      wrap?.classList.remove("open", "swipe-threshold");
      if (_openWrap === wrap) _openWrap = null;
      // Clean up inline transition
      setTimeout(() => {
        inner.style.transition = "";
        if (del) del.style.transition = "";
      }, 350);
    }

    _swipeEl = null;
  });

  // ── DISMISS INLINE EDITORS: close open note/qty editors on outside tap ──
  // When the user taps anywhere outside an open inline editor (note textarea or
  // qty stepper), close it. This mimics iOS behavior where tapping outside any
  // input field dismisses it. Uses "click" so it fires after focus/blur.
  document.addEventListener("click", e => {
    // Check for open note editors (.sh-note-edit.open)
    document.querySelectorAll(".sh-note-edit.open").forEach(edit => {
      // Don't close if the tap was inside the editor itself or on the pencil toggle button
      if (edit.contains(e.target)) return;
      const itemRow = edit.closest(".swipe-inner");
      const pencilBtn = itemRow?.querySelector(".sh-note-btn");
      if (pencilBtn && pencilBtn.contains(e.target)) return;
      // Tap was outside — close the editor (blur will trigger save via onblur handler)
      const textarea = edit.querySelector("textarea");
      if (textarea) textarea.blur();
      edit.classList.remove("open");
    });

    // Check for open qty editors (.sh-qty-edit.open)
    document.querySelectorAll(".sh-qty-edit.open").forEach(edit => {
      // Don't close if the tap was inside the editor itself or on the qty badge toggle
      if (edit.contains(e.target)) return;
      const itemRow = edit.closest(".swipe-inner");
      const qtyBadge = itemRow?.querySelector(".sh-qty");
      if (qtyBadge && qtyBadge.contains(e.target)) return;
      // Tap was outside — close the editor (blur will trigger save via onblur handler)
      const input = edit.querySelector("input");
      if (input) input.blur();
      edit.classList.remove("open");
    });
  }, true); // useCapture = true so this fires before other click handlers

  // ── DISMISS: close any open swipe row when the user taps elsewhere ──
  document.addEventListener("touchstart", e => {
    if (!_openWrap) return;
    // Don't close if the tap was on the delete button — let the click handler fire
    if (e.target.closest(".swipe-del")) return;
    // Don't close if the tap was on the same open row (swipe handler will manage it)
    const inner = e.target.closest(".swipe-inner");
    if (inner && inner.closest(".swipe-wrap") === _openWrap) return;
    // Tap was somewhere else: close the open row with spring animation
    _snapClose(_openWrap);
    _openWrap = null;
  }, { passive: true });
}

// Animates a swipe row back to the closed position with a spring bounce.
// Resets transform, hides delete zone, and clears all state classes.
function _snapClose(wrap) {
  const inner = wrap?.querySelector(".swipe-inner");
  const del = wrap?.querySelector(".swipe-del");
  if (inner) {
    inner.style.transition = `transform 0.35s ${SPRING_EASE}`;
    inner.style.transform = "translateX(0)";
    setTimeout(() => { inner.style.transition = ""; }, 350);
  }
  if (del) {
    del.style.transition = `clip-path 0.3s ${SMOOTH_EASE}`;
    del.style.clipPath = "inset(0 0 0 100%)";
    setTimeout(() => { del.style.transition = ""; }, 300);
  }
  wrap?.classList.remove("open", "swipe-threshold");
}

// Performs the auto-delete animation when the user swipes past 80% of the row.
// Slides the row fully off-screen, collapses height, then removes from database.
async function _performAutoDelete(wrap, inner) {
  const id = wrap?.dataset.id;
  const list = wrap?.dataset.list;
  if (!id || !list) return;

  // Slide the entire row off-screen to the left
  inner.style.transition = `transform 0.3s ${SMOOTH_EASE}`;
  inner.style.transform = `translateX(-${_rowWidth + 100}px)`;

  // Also slide the delete zone with it for a clean exit
  const del = wrap?.querySelector(".swipe-del");
  if (del) {
    del.style.transition = `transform 0.3s ${SMOOTH_EASE}`;
    del.style.transform = `translateX(-${_rowWidth + 100}px)`;
  }

  // After the slide-out, collapse the row height for a smooth list reflow
  await new Promise(r => setTimeout(r, 280));
  wrap.style.transition = "height 0.25s ease, opacity 0.2s ease, margin 0.25s ease";
  wrap.style.height = wrap.offsetHeight + "px"; // Set explicit height before collapsing
  // Force reflow so the browser registers the explicit height
  wrap.offsetHeight; // eslint-disable-line no-unused-expressions
  wrap.style.height = "0px";
  wrap.style.opacity = "0";
  wrap.style.marginBottom = "0px";

  // Clean up the open row reference
  if (_openWrap === wrap) _openWrap = null;

  // Wait for collapse animation, then delete from database
  await new Promise(r => setTimeout(r, 250));
  if (list === "shop") {
    await dlShopItem(id);
  } else {
    await dli(id);
    showNotif("Item removed");
  }
}

// Handles the delete action when the user taps the revealed red delete button.
// Plays the same slide-out + collapse animation as auto-delete for consistency.
export async function swipeDelItem(id, list) {
  const wrap = g("sw-" + id);
  if (!wrap) return;
  const inner = wrap.querySelector(".swipe-inner");

  // Slide off-screen to the left
  const width = wrap.offsetWidth;
  if (inner) {
    inner.style.transition = `transform 0.3s ${SMOOTH_EASE}`;
    inner.style.transform = `translateX(-${width + 100}px)`;
  }
  const del = wrap.querySelector(".swipe-del");
  if (del) {
    del.style.transition = `transform 0.3s ${SMOOTH_EASE}`;
    del.style.transform = `translateX(-${width + 100}px)`;
  }

  // Collapse height after slide-out for smooth list reflow
  await new Promise(r => setTimeout(r, 280));
  wrap.style.transition = "height 0.25s ease, opacity 0.2s ease, margin 0.25s ease";
  wrap.style.height = wrap.offsetHeight + "px";
  wrap.offsetHeight; // eslint-disable-line no-unused-expressions
  wrap.style.height = "0px";
  wrap.style.opacity = "0";
  wrap.style.marginBottom = "0px";

  if (_openWrap === wrap) _openWrap = null;

  // Wait for collapse, then delete from database
  await new Promise(r => setTimeout(r, 250));
  if (list === "shop") {
    await dlShopItem(id);
  } else {
    await dli(id);
    showNotif("Item removed");
  }
}

// Handles a tap on a list row. Behavior depends on the current context:
//   - Row is swiped open → close it (absorb the tap)
//   - Multi-select mode → toggle this item's selected state
//   - Normal shopping tap → open item detail sheet
//   - Normal inventory tap → open quantity adjustment overlay
export function swipeRowTap(id, list) {
  const wrap = g("sw-" + id);
  if (wrap) {
    const inner = wrap.querySelector(".swipe-inner");
    // Check if row is currently swiped open (shifted left by more than 10px)
    const tx = parseFloat((inner?.style.transform || "").replace("translateX(", "")) || 0;
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
      state.selectedIds.delete(id);
      wrap?.classList.remove("selected");
    } else {
      state.selectedIds.add(id);
      wrap?.classList.add("selected");
    }
    updateMultiBar();
    return;
  }

  // ── Normal mode: perform the default tap action for this list type ──
  // Shopping taps open the shopping detail sheet; inventory taps open the inventory detail sheet
  if (list === "shop") window.openItemDetail(id);
  else window.openInvItemDetail(id);
}

// ── MULTI-SELECT MODE ────────────────────────────────────────────────────────
// Lets users tap multiple rows to select them, then bulk-delete.
// When active, swipe gestures are disabled and taps toggle selection instead.

// Toggles multi-select mode for the shopping list.
export function togShopSelect() {
  if (state.selectMode === "shop") { cancelSelect(); return; }
  if (state.selectMode) cancelSelect();
  state.selectMode = "shop";
  state.selectedIds.clear();
  document.querySelectorAll("#shlist .swipe-wrap").forEach(w => w.classList.add("selecting"));
  const btn = g("sh-selbtn");
  if (btn) { btn.classList.add("active"); btn.textContent = "Cancel"; }
  updateMultiBar();
}

// Toggles multi-select mode for the inventory list.
export function togInvSelect() {
  if (state.selectMode === "inv") { cancelSelect(); return; }
  if (state.selectMode) cancelSelect();
  state.selectMode = "inv";
  state.selectedIds.clear();
  document.querySelectorAll("#ibody .swipe-wrap").forEach(w => w.classList.add("selecting"));
  const btn = g("inv-selbtn");
  if (btn) { btn.classList.add("active"); btn.textContent = "Cancel"; }
  updateMultiBar();
}

// Exits multi-select mode completely, clears all selection state.
export function cancelSelect() {
  state.selectMode = null;
  state.selectedIds.clear();
  document.querySelectorAll(".swipe-wrap.selecting").forEach(w => w.classList.remove("selecting", "selected"));
  const sb = g("sh-selbtn"); if (sb) { sb.classList.remove("active"); sb.textContent = "Select"; }
  const ib = g("inv-selbtn"); if (ib) { ib.classList.remove("active"); ib.textContent = "Select"; }
  updateMultiBar();
}

// Deletes all currently selected items in a single batch operation.
export async function deleteSelected() {
  if (!state.selectedIds.size) return;
  const ids = [...state.selectedIds];
  const list = state.selectMode;
  cancelSelect();
  if (list === "shop") {
    await Promise.all(ids.map(id => dlShopItem(id)));
  } else {
    await Promise.all(ids.map(id => dli(id)));
  }
  showNotif(`Removed ${ids.length} item${ids.length !== 1 ? "s" : ""} 🗑`);
}

// Updates the floating action bar showing "N selected — Delete" during multi-select.
function updateMultiBar() {
  const bar = g("multi-bar");
  if (!bar) return;
  const n = state.selectedIds.size;
  const count = g("multi-count");
  if (count) count.textContent = n;
  if (state.selectMode) bar.classList.add("visible");
  else bar.classList.remove("visible");
}
