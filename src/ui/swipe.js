// ── SWIPE-TO-DELETE + MULTI-SELECT ENGINE ────────────────────────────────────
// Apple-style swipe-to-delete with immediate delete zone reveal:
//   - Any left swipe immediately reveals the red delete zone + trashcan icon
//   - 1:1 finger tracking with rubber band resistance past the delete zone
//   - Tapping the trashcan deletes the item with slide-out animation
//   - ~80% swipe = auto-complete delete with slide-out animation
//   - Release before snap threshold = spring back, delete zone hides
//   - Only one row open at a time — swiping a new row closes any open row
//   - Works on both shopping list and inventory items
//   - Supports both touch (mobile) and mouse drag (desktop) input methods
//
// DOM structure expected for each swipeable row:
//   <div class="swipe-wrap">
//     <div class="swipe-inner">  — the visible card content (slides left)
//     <div class="swipe-del">    — the red delete zone revealed behind the card
//   </div>

import { state } from '../state.js';
import { dli, dlShopItem, dbDelete, logActivity, renderCallbacks } from '../db.js';
import { consolidateShopItem } from './shopping.js'; // Consolidation-aware add to shopping list
import { g, showNotif, toTitleCase } from '../helpers.js';

// ── Swipe gesture state ──
// Tracks the currently-swiped element, start position, and which row is "locked open"
let _swipeEl = null;     // The .swipe-inner element currently being dragged
let _swipeX0 = 0;        // Starting X coordinate of the current touch/mouse
let _swipeY0 = 0;        // Starting Y coordinate (for direction locking)
let _openWrap = null;    // The one .swipe-wrap that has its delete zone revealed
let _direction = null;   // Locked direction: "horizontal" or "vertical" (null = undecided)
let _rowWidth = 0;       // Cached width of the current row for threshold calculations
let _hapticFired = false; // Whether haptic feedback was already triggered this gesture
let _mouseDown = false;  // Whether the left mouse button is currently held (for mouse drag tracking)

// ── Constants for swipe behavior ──
const DELETE_ZONE_WIDTH = 80;    // Width of the red delete zone in pixels (Apple-standard)
const SNAP_THRESHOLD = 0.10;     // 10% of row width = snap/lock open (show delete zone on release)
const AUTO_DELETE_THRESHOLD = 0.70; // 70% of row width = auto-complete delete (no confirmation needed)
const DIRECTION_LOCK_PX = 8;     // Pixels of movement before locking to horizontal/vertical

// Spring easing for snap animations — mimics Apple's bounce
const SPRING_EASE = 'cubic-bezier(0.25, 1.5, 0.5, 1)';
const SMOOTH_EASE = 'cubic-bezier(0.4, 0, 0.2, 1)';

// Registers all touch and mouse event listeners for swipe-to-delete behavior.
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

    // Determine swipe direction. Left swipe = delete, right swipe = add to shopping (inv only).
    const wrap = _swipeEl.closest(".swipe-wrap");
    const list = wrap?.dataset.list;
    const isRightSwipe = dx > 0 && list === "inv";

    // 1:1 finger tracking. Left swipe for delete, right swipe for add-to-shopping (inv only).
    // Shopping items can only swipe left (delete).
    const tx = isRightSwipe ? dx : (dx >= 0 ? 0 : dx);

    _swipeEl.style.transform = `translateX(${tx}px)`;

    // Progressive zone reveal — left = red delete zone, right = green add-to-shopping zone
    if (tx < 0) {
      // Left swipe: reveal red delete zone from right
      const del = wrap?.querySelector(".swipe-del");
      if (del) {
        const revealPct = Math.min(100, (Math.abs(tx) / DELETE_ZONE_WIDTH) * 100);
        del.style.clipPath = `inset(0 0 0 ${100 - revealPct}%)`;
      }
      // Hide the add zone if visible
      const add = wrap?.querySelector(".swipe-add");
      if (add) add.style.clipPath = "inset(0 100% 0 0)";
    } else if (tx > 0 && isRightSwipe) {
      // Right swipe: reveal green add-to-shopping zone from left
      const add = wrap?.querySelector(".swipe-add");
      if (add) {
        const revealPct = Math.min(100, (tx / DELETE_ZONE_WIDTH) * 100);
        add.style.clipPath = `inset(0 ${100 - revealPct}% 0 0)`;
      }
      // Hide the delete zone if visible
      const del = wrap?.querySelector(".swipe-del");
      if (del) del.style.clipPath = "inset(0 0 0 100%)";
    }

    // Trigger haptic feedback at the auto-complete threshold
    const swipePct = Math.abs(tx) / _rowWidth;
    if (swipePct >= AUTO_DELETE_THRESHOLD && !_hapticFired) {
      _hapticFired = true;
      if (navigator.vibrate) navigator.vibrate(10);
      wrap?.classList.add("swipe-threshold");
    } else if (swipePct < AUTO_DELETE_THRESHOLD && _hapticFired) {
      _hapticFired = false;
      wrap?.classList.remove("swipe-threshold");
    }
  }, { passive: false }); // passive: false required for preventDefault()

  // ── TOUCH END: snap open, spring back, or auto-delete/auto-add based on swipe distance ──
  document.addEventListener("touchend", () => {
    if (!_swipeEl) return;

    const inner = _swipeEl;
    const wrap = inner.closest(".swipe-wrap");
    inner.classList.remove("swiping");

    const tx = parseFloat(inner.style.transform.replace("translateX(", "")) || 0;
    const swipePct = Math.abs(tx) / _rowWidth;
    const list = wrap?.dataset.list;
    const isRightSwipe = tx > 0 && list === "inv";

    if (isRightSwipe && swipePct >= AUTO_DELETE_THRESHOLD) {
      // ── AUTO-ADD TO SHOPPING: swiped right past threshold on inventory item ──
      _performAutoAddToShopping(wrap, inner);
    } else if (isRightSwipe && swipePct >= SNAP_THRESHOLD) {
      // ── SNAP OPEN RIGHT: show green add zone ──
      inner.style.transition = `transform 0.4s ${SPRING_EASE}`;
      inner.style.transform = `translateX(${DELETE_ZONE_WIDTH}px)`;
      const add = wrap?.querySelector(".swipe-add");
      if (add) { add.style.transition = `clip-path 0.3s ${SMOOTH_EASE}`; add.style.clipPath = "inset(0 0 0 0)"; }
      wrap?.classList.add("open");
      if (_openWrap && _openWrap !== wrap) _snapClose(_openWrap);
      _openWrap = wrap;
      setTimeout(() => { inner.style.transition = ""; }, 400);
    } else if (!isRightSwipe && swipePct >= AUTO_DELETE_THRESHOLD) {
      // ── AUTO-DELETE: swiped left past threshold ──
      _performAutoDelete(wrap, inner);
    } else if (!isRightSwipe && tx < 0 && swipePct >= SNAP_THRESHOLD) {
      // ── SNAP OPEN LEFT: lock at delete zone width ──
      inner.style.transition = `transform 0.4s ${SPRING_EASE}`;
      inner.style.transform = `translateX(-${DELETE_ZONE_WIDTH}px)`;
      const del = wrap?.querySelector(".swipe-del");
      if (del) { del.style.transition = `clip-path 0.3s ${SMOOTH_EASE}`; del.style.clipPath = "inset(0 0 0 0%)"; }
      wrap?.classList.add("open");
      wrap?.classList.add("swipe-threshold");
      if (_openWrap && _openWrap !== wrap) _snapClose(_openWrap);
      _openWrap = wrap;
      setTimeout(() => { inner.style.transition = ""; }, 400);
    } else {
      // ── SPRING BACK: didn't reach threshold ──
      inner.style.transition = `transform 0.35s ${SPRING_EASE}`;
      inner.style.transform = "translateX(0)";
      const del = wrap?.querySelector(".swipe-del");
      if (del) { del.style.transition = `clip-path 0.3s ${SMOOTH_EASE}`; del.style.clipPath = "inset(0 0 0 100%)"; }
      const add = wrap?.querySelector(".swipe-add");
      if (add) { add.style.transition = `clip-path 0.3s ${SMOOTH_EASE}`; add.style.clipPath = "inset(0 100% 0 0)"; }
      wrap?.classList.remove("open", "swipe-threshold");
      if (_openWrap === wrap) _openWrap = null;
      setTimeout(() => { inner.style.transition = ""; if (del) del.style.transition = ""; if (add) add.style.transition = ""; }, 350);
    }

    _swipeEl = null;
  });

  // ── MOUSE SUPPORT ──────────────────────────────────────────────────────────
  // Mirror of the touch handlers above so swipe-to-delete also works with a
  // mouse on desktop. Uses mousedown/mousemove/mouseup+mouseleave and a
  // _mouseDown flag to track whether the button is held.

  // ── MOUSE DOWN: begin tracking a potential mouse-drag swipe ──
  // Equivalent to touchstart — records start position and prepares the row for dragging.
  // Only responds to the primary (left) mouse button.
  document.addEventListener("mousedown", e => {
    // Only respond to left mouse button
    if (e.button !== 0) return;
    const inner = e.target.closest(".swipe-inner");
    if (!inner) return;
    const wrap = inner.closest(".swipe-wrap");
    if (!wrap) return;
    // Swipe is disabled during multi-select mode
    if (state.selectMode) return;

    // Close any previously open row when starting a drag on a different row
    if (_openWrap && _openWrap !== wrap) {
      _snapClose(_openWrap);
      _openWrap = null;
    }

    _mouseDown = true;
    _swipeEl = inner;
    _swipeX0 = e.clientX;
    _swipeY0 = e.clientY;
    _direction = null;
    _hapticFired = false;
    _rowWidth = wrap.offsetWidth;

    // Disable CSS transitions during drag so row tracks mouse at 1:1
    inner.classList.add("swiping");
  });

  // ── MOUSE MOVE: drag the row left following the cursor ──
  // Equivalent to touchmove — 1:1 tracking with direction locking.
  // Only fires while the mouse button is held (_mouseDown flag).
  document.addEventListener("mousemove", e => {
    if (!_mouseDown || !_swipeEl) return;

    const dx = e.clientX - _swipeX0;
    const dy = e.clientY - _swipeY0;

    // Direction locking: decide horizontal swipe vs vertical scroll
    if (!_direction) {
      if (Math.abs(dx) < DIRECTION_LOCK_PX && Math.abs(dy) < DIRECTION_LOCK_PX) return;
      _direction = Math.abs(dx) > Math.abs(dy) ? "horizontal" : "vertical";
    }
    // If vertical, cancel the drag and let normal behavior proceed
    if (_direction === "vertical") {
      _swipeEl.classList.remove("swiping");
      _swipeEl = null;
      _mouseDown = false;
      return;
    }

    // Prevent text selection while dragging horizontally
    e.preventDefault();

    // Determine swipe direction — right swipe only allowed on inventory items
    const wrap = _swipeEl.closest(".swipe-wrap");
    const list = wrap?.dataset.list;
    const isRightSwipe = dx > 0 && list === "inv";

    // 1:1 cursor tracking. Left = delete, right = add-to-shopping (inv only).
    const tx = isRightSwipe ? dx : (dx >= 0 ? 0 : dx);
    _swipeEl.style.transform = `translateX(${tx}px)`;

    // Progressive zone reveal — left = red delete, right = green add-to-shopping
    if (tx < 0) {
      const del = wrap?.querySelector(".swipe-del");
      if (del) {
        const revealPct = Math.min(100, (Math.abs(tx) / DELETE_ZONE_WIDTH) * 100);
        del.style.clipPath = `inset(0 0 0 ${100 - revealPct}%)`;
      }
      const add = wrap?.querySelector(".swipe-add");
      if (add) add.style.clipPath = "inset(0 100% 0 0)";
    } else if (tx > 0 && isRightSwipe) {
      const add = wrap?.querySelector(".swipe-add");
      if (add) {
        const revealPct = Math.min(100, (tx / DELETE_ZONE_WIDTH) * 100);
        add.style.clipPath = `inset(0 ${100 - revealPct}% 0 0)`;
      }
      const del = wrap?.querySelector(".swipe-del");
      if (del) del.style.clipPath = "inset(0 0 0 100%)";
    }

    // Haptic/threshold feedback — same as touch
    const swipePct = Math.abs(tx) / _rowWidth;
    if (swipePct >= AUTO_DELETE_THRESHOLD && !_hapticFired) {
      _hapticFired = true;
      if (navigator.vibrate) navigator.vibrate(10);
      wrap?.classList.add("swipe-threshold");
    } else if (swipePct < AUTO_DELETE_THRESHOLD && _hapticFired) {
      _hapticFired = false;
      wrap?.classList.remove("swipe-threshold");
    }
  });

  // ── _finishMouseSwipe: shared end-of-drag logic for mouseup and mouseleave ──
  // Equivalent to touchend — snaps open, springs back, or auto-deletes based on distance.
  function _finishMouseSwipe() {
    if (!_mouseDown || !_swipeEl) {
      _mouseDown = false;
      return;
    }
    _mouseDown = false;

    const inner = _swipeEl;
    const wrap = inner.closest(".swipe-wrap");
    inner.classList.remove("swiping");

    const tx = parseFloat(inner.style.transform.replace("translateX(", "")) || 0;
    const swipePct = Math.abs(tx) / _rowWidth;
    const list = wrap?.dataset.list;
    const isRightSwipe = tx > 0 && list === "inv";

    if (isRightSwipe && swipePct >= AUTO_DELETE_THRESHOLD) {
      // Auto-add to shopping: right-swiped past threshold on inventory item
      _performAutoAddToShopping(wrap, inner);
    } else if (isRightSwipe && swipePct >= SNAP_THRESHOLD) {
      // Snap open right: show green add zone
      inner.style.transition = `transform 0.4s ${SPRING_EASE}`;
      inner.style.transform = `translateX(${DELETE_ZONE_WIDTH}px)`;
      const add = wrap?.querySelector(".swipe-add");
      if (add) { add.style.transition = `clip-path 0.3s ${SMOOTH_EASE}`; add.style.clipPath = "inset(0 0 0 0)"; }
      wrap?.classList.add("open");
      if (_openWrap && _openWrap !== wrap) _snapClose(_openWrap);
      _openWrap = wrap;
      setTimeout(() => { inner.style.transition = ""; }, 400);
    } else if (!isRightSwipe && swipePct >= AUTO_DELETE_THRESHOLD) {
      // Auto-delete: swiped left past threshold — slide out and delete
      _performAutoDelete(wrap, inner);
    } else if (!isRightSwipe && tx < 0 && swipePct >= SNAP_THRESHOLD) {
      // Snap open left: lock at delete zone width with spring bounce
      inner.style.transition = `transform 0.4s ${SPRING_EASE}`;
      inner.style.transform = `translateX(-${DELETE_ZONE_WIDTH}px)`;
      const del = wrap?.querySelector(".swipe-del");
      if (del) { del.style.transition = `clip-path 0.3s ${SMOOTH_EASE}`; del.style.clipPath = "inset(0 0 0 0%)"; }
      wrap?.classList.add("open");
      wrap?.classList.add("swipe-threshold");
      if (_openWrap && _openWrap !== wrap) _snapClose(_openWrap);
      _openWrap = wrap;
      setTimeout(() => { inner.style.transition = ""; }, 400);
    } else {
      // Spring back: didn't reach threshold — return to closed position
      inner.style.transition = `transform 0.35s ${SPRING_EASE}`;
      inner.style.transform = "translateX(0)";
      const del = wrap?.querySelector(".swipe-del");
      if (del) { del.style.transition = `clip-path 0.3s ${SMOOTH_EASE}`; del.style.clipPath = "inset(0 0 0 100%)"; }
      const add = wrap?.querySelector(".swipe-add");
      if (add) { add.style.transition = `clip-path 0.3s ${SMOOTH_EASE}`; add.style.clipPath = "inset(0 100% 0 0)"; }
      wrap?.classList.remove("open", "swipe-threshold");
      if (_openWrap === wrap) _openWrap = null;
      setTimeout(() => { inner.style.transition = ""; if (del) del.style.transition = ""; if (add) add.style.transition = ""; }, 350);
    }

    _swipeEl = null;
  }

  // ── MOUSE UP: end drag on button release ──
  document.addEventListener("mouseup", _finishMouseSwipe);

  // ── MOUSE LEAVE: end drag if cursor exits the document while button is held ──
  // Prevents stuck drag state when user drags outside the browser window.
  document.addEventListener("mouseleave", _finishMouseSwipe);

  // ── DISMISS OPEN ROW ON MOUSE CLICK ELSEWHERE ──
  // Same as the touchstart dismiss handler but for mouse — close any open
  // swipe row when the user clicks elsewhere on the page.
  document.addEventListener("mousedown", e => {
    if (!_openWrap) return;
    // Don't close if the click was on the delete or add button
    if (e.target.closest(".swipe-del") || e.target.closest(".swipe-add")) return;
    // Don't close if the click was on the same open row
    const inner = e.target.closest(".swipe-inner");
    if (inner && inner.closest(".swipe-wrap") === _openWrap) return;
    // Click was somewhere else: close the open row
    _snapClose(_openWrap);
    _openWrap = null;
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
    // Don't close if the tap was on the delete or add button — let the click handler fire
    if (e.target.closest(".swipe-del") || e.target.closest(".swipe-add")) return;
    // Don't close if the tap was on the same open row (swipe handler will manage it)
    const inner = e.target.closest(".swipe-inner");
    if (inner && inner.closest(".swipe-wrap") === _openWrap) return;
    // Tap was somewhere else: close the open row with spring animation
    _snapClose(_openWrap);
    _openWrap = null;
  }, { passive: true });
}

// Animates a swipe row back to the closed position with a spring bounce.
// Resets transform, hides both delete and add zones, and clears all state classes.
function _snapClose(wrap) {
  const inner = wrap?.querySelector(".swipe-inner");
  const del = wrap?.querySelector(".swipe-del");
  const add = wrap?.querySelector(".swipe-add");
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
  if (add) {
    add.style.transition = `clip-path 0.3s ${SMOOTH_EASE}`;
    add.style.clipPath = "inset(0 100% 0 0)";
    setTimeout(() => { add.style.transition = ""; }, 300);
  }
  wrap?.classList.remove("open", "swipe-threshold");
}

// Performs the auto-delete animation when the user swipes past 80% of the row.
// Slides the row fully off-screen, collapses height, then defers delete with undo.
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

  // Wait for collapse animation, then defer delete with undo window
  await new Promise(r => setTimeout(r, 250));
  const listKey = list === "shop" ? "shop" : "inv";
  deleteWithUndo(id, listKey);
}

// Performs the auto-add-to-shopping animation when the user right-swipes past 70%
// on an inventory item. Slides the row off-screen to the right, collapses height,
// then adds the item to the shopping list.
async function _performAutoAddToShopping(wrap, inner) {
  const id = wrap?.dataset.id;
  if (!id) return;

  // Slide row off-screen to the right (opposite of delete)
  inner.style.transition = `transform 0.3s ${SMOOTH_EASE}`;
  inner.style.transform = `translateX(${_rowWidth + 100}px)`;

  // Slide the add zone with it for a clean exit
  const add = wrap?.querySelector(".swipe-add");
  if (add) {
    add.style.transition = `transform 0.3s ${SMOOTH_EASE}`;
    add.style.transform = `translateX(${_rowWidth + 100}px)`;
  }

  // Collapse row height for smooth list reflow
  await new Promise(r => setTimeout(r, 280));
  wrap.style.transition = "height 0.25s ease, opacity 0.2s ease, margin 0.25s ease";
  wrap.style.height = wrap.offsetHeight + "px";
  wrap.offsetHeight; // eslint-disable-line no-unused-expressions
  wrap.style.height = "0px";
  wrap.style.opacity = "0";
  wrap.style.marginBottom = "0px";

  if (_openWrap === wrap) _openWrap = null;

  // Wait for collapse, then add to shopping list
  await new Promise(r => setTimeout(r, 250));
  await _addInvItemToShopping(id);
}

// Handles a tap on the green "Add to List" zone when it's snapped open.
// Adds the inventory item to the shopping list with the same slide-out animation.
export async function swipeAddItem(id, list) {
  if (list !== "inv") return;
  const wrap = g("sw-" + id);
  if (!wrap) return;
  const inner = wrap.querySelector(".swipe-inner");
  const width = wrap.offsetWidth;

  // Slide off-screen to the right
  if (inner) {
    inner.style.transition = `transform 0.3s ${SMOOTH_EASE}`;
    inner.style.transform = `translateX(${width + 100}px)`;
  }
  const add = wrap.querySelector(".swipe-add");
  if (add) {
    add.style.transition = `transform 0.3s ${SMOOTH_EASE}`;
    add.style.transform = `translateX(${width + 100}px)`;
  }

  // Collapse height after slide-out
  await new Promise(r => setTimeout(r, 280));
  wrap.style.transition = "height 0.25s ease, opacity 0.2s ease, margin 0.25s ease";
  wrap.style.height = wrap.offsetHeight + "px";
  wrap.offsetHeight; // eslint-disable-line no-unused-expressions
  wrap.style.height = "0px";
  wrap.style.opacity = "0";
  wrap.style.marginBottom = "0px";

  if (_openWrap === wrap) _openWrap = null;

  await new Promise(r => setTimeout(r, 250));
  await _addInvItemToShopping(id);
}

// Shared logic for adding an inventory item to the shopping list.
// Uses consolidation to increment qty if already on the list instead of duplicating.
async function _addInvItemToShopping(id) {
  const item = state.inv.find(i => i.id === id);
  if (!item) return;

  // Consolidate with existing items — increments qty if already on the list
  const result = await consolidateShopItem({
    id: "shop-" + Date.now() + "-" + Math.random().toString(36).slice(2),
    name: item.name, qty: 1, checked: false,
    brand: item.brand || "", image: item.image || null, src: "supplies"
  });

  if (result.action === "new") {
    showNotif(`${item.name} added to shopping list 🛒`);
  } else {
    showNotif(`${item.name} quantity updated on shopping list 🛒`);
  }
}

// Handles the delete action when the user taps the revealed red delete button.
// Plays the same slide-out + collapse animation as auto-delete, then defers with undo.
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

  // Wait for collapse, then defer delete with undo window
  await new Promise(r => setTimeout(r, 250));
  const listKey = list === "shop" ? "shop" : "inv";
  deleteWithUndo(id, listKey);
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
    // Check if row is currently swiped open (shifted left or right by more than 10px)
    const tx = parseFloat((inner?.style.transform || "").replace("translateX(", "")) || 0;
    if (Math.abs(tx) > 10) {
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

// ── UNDO DELETION SYSTEM ───────────────────────────────────────────────────
// When an item is deleted (swipe or Remove button), the Firestore delete is
// deferred for 5 seconds. A bottom toast with a shrinking progress bar gives
// the user an "Undo" button. After 5 seconds the delete commits permanently.
// If another item is deleted while the undo is active, the previous delete
// commits immediately and the new one starts its own 5-second window.

/** Holds the pending undo state: { id, list, item, index, timer, onCommit } */
let _undoState = null;

/**
 * deleteWithUndo(id, list, opts) — Defers a delete with a 5-second undo window.
 * Removes the item from in-memory state immediately for instant UI feedback,
 * then shows the undo toast. After 5 seconds, commits the Firestore delete.
 *
 * @param {string} id - Item ID to delete
 * @param {string} list - "shop" or "inv"
 * @param {Object} opts - Optional: { onCommit: fn(item) } — extra logic when delete commits
 */
export function deleteWithUndo(id, list, opts = {}) {
  // If there's already a pending undo, commit it immediately (forfeit)
  if (_undoState) {
    _commitPendingDelete();
  }

  // Capture the item data before removing from state
  const items = list === "shop" ? state.shop : state.inv;
  const item = items.find(i => i.id === id);
  if (!item) return;

  // Record the item's position in the list for accurate restoration on undo
  const index = items.indexOf(item);

  // Remove from in-memory state immediately (optimistic UI update)
  if (list === "shop") {
    state.shop = state.shop.filter(s => s.id !== id);
    renderCallbacks.renderShop?.();
    renderCallbacks.renderSum?.();
  } else {
    state.inv = state.inv.filter(i => i.id !== id);
    renderCallbacks.renderAll?.();
    renderCallbacks.renderSum?.();
  }

  // Show the undo toast with the item name
  _showUndoToast(toTitleCase(item.name));

  // Start 5-second timer — after which the delete becomes permanent
  const timer = setTimeout(() => _commitPendingDelete(), 5000);

  _undoState = { id, list, item: { ...item }, index, timer, onCommit: opts.onCommit || null };
}

/**
 * _commitPendingDelete() — Executes the actual Firestore delete for the pending undo.
 * Called when the 5-second timer expires or when another delete supersedes this one.
 * Deletes directly from Firestore and logs activity WITHOUT re-adding the item to
 * state — this prevents the deleted item from briefly reappearing when a second
 * delete supersedes the first (fixes the undo toast stacking visual bug).
 */
function _commitPendingDelete() {
  if (!_undoState) return;
  const { id, list, item, timer, onCommit } = _undoState;
  clearTimeout(timer);
  _undoState = null;
  _hideUndoToast();

  // Run any extra commit logic (e.g. waste tracking for expired inventory items)
  if (onCommit) onCommit(item);

  // Delete directly from Firestore and log activity — item is already removed
  // from in-memory state so we skip the re-add → re-render cycle that caused
  // the stacking bug where deleted items briefly reappeared on consecutive deletes
  const collection = list === "shop" ? "shopping" : "inventory";
  const label = list === "shop" ? "Shopping List" : "Supplies";
  dbDelete(`households/${state.hid}/${collection}/${id}`);
  logActivity("removed", toTitleCase(item.name) + ` from ${label}`);
}

/**
 * undoDelete() — Restores the last deleted item to its original position.
 * Called when the user taps "Undo" within the 5-second window.
 * Re-inserts the item into state, re-renders the list, and cancels the timer.
 */
export function undoDelete() {
  if (!_undoState) return;
  const { id, list, item, index, timer } = _undoState;
  clearTimeout(timer);
  _undoState = null;
  _hideUndoToast();

  // Restore item to its original position in the state array
  if (list === "shop") {
    state.shop.splice(Math.min(index, state.shop.length), 0, item);
    renderCallbacks.renderShop?.();
    renderCallbacks.renderSum?.();
  } else {
    state.inv.splice(Math.min(index, state.inv.length), 0, item);
    renderCallbacks.renderAll?.();
    renderCallbacks.renderSum?.();
  }

  showNotif("Restored ✓");
}

/**
 * _showUndoToast(itemName) — Displays the undo toast with a shrinking progress bar.
 * The progress bar animates from 100% to 0% width over exactly 5 seconds via CSS.
 */
function _showUndoToast(itemName) {
  const toast = g("undo-toast");
  const text = g("undo-toast-text");
  const bar = g("undo-bar");
  if (!toast || !bar) return;

  // Update the toast text with the deleted item's name
  if (text) text.textContent = `${itemName} deleted`;

  // Reset the progress bar to full width before starting the animation
  bar.classList.remove("shrinking");
  bar.style.width = "100%";
  // Force reflow so the browser registers the reset before we start shrinking
  void bar.offsetWidth;

  // Show the toast and start the progress bar countdown
  toast.classList.add("visible");
  // Start the shrinking animation in the next frame
  requestAnimationFrame(() => {
    bar.classList.add("shrinking");
  });
}

/**
 * _hideUndoToast() — Hides the undo toast and resets the progress bar.
 */
function _hideUndoToast() {
  const toast = g("undo-toast");
  const bar = g("undo-bar");
  if (toast) toast.classList.remove("visible");
  if (bar) { bar.classList.remove("shrinking"); bar.style.width = "100%"; }
}

// ── DELETE ALL ──────────────────────────────────────────────────────────────
// Deletes ALL items in the current tab during select mode, regardless of
// individual selection. Requires confirmation to prevent accidental data loss.

/**
 * deleteAll() — Deletes every item in the current list after user confirms.
 * Shows a confirmation dialog with the item count. On confirm, deletes all
 * items from the active tab (shopping or supplies) and exits select mode.
 */
export async function deleteAll() {
  const list = state.selectMode;
  if (!list) return;

  // Determine items and label based on which tab is in select mode
  const items = list === "shop" ? state.shop : state.inv;
  const count = items.length;
  if (!count) return;

  const label = list === "shop" ? "shopping list" : "supplies";

  // Show native confirmation dialog — this action cannot be undone
  if (!confirm(`Delete all ${count} items from your ${label}? This cannot be undone.`)) return;

  // Exit select mode first to reset the UI
  cancelSelect();

  // Delete all items in parallel
  if (list === "shop") {
    const ids = items.map(i => i.id);
    await Promise.all(ids.map(id => dlShopItem(id)));
  } else {
    const ids = items.map(i => i.id);
    await Promise.all(ids.map(id => dli(id)));
  }

  showNotif(`All ${count} items deleted 🗑`);
}
