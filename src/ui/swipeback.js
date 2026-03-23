// ── SWIPE-BACK NAVIGATION ──────────────────────────────────────────────────
// Reusable iOS-style edge swipe-back gesture for nested pages.
// Mimics the native iOS edge-swipe: swiping right from the left edge of the
// screen slides the current page out to the right, revealing the previous page.
//
// HOW TO USE ON ANY NEW NESTED PAGE:
//   1. Import: import { enableSwipeBack, disableSwipeBack } from './swipeback.js';
//   2. When the nested page opens, call:
//        enableSwipeBack(() => { /* your back-navigation logic here */ });
//   3. When the nested page closes, call:
//        disableSwipeBack();
//   That's it — one line to enable, one to disable. The utility handles all
//   touch tracking, animation, and threshold detection automatically.
//
// CONFIGURATION:
//   - EDGE_ZONE: how close to the left edge the swipe must start (default 20px)
//   - COMPLETE_THRESHOLD: percentage of screen width to trigger navigation (40%)

// ── Constants ──
const EDGE_ZONE = 20;            // Max X from left edge to start swipe (px)
const COMPLETE_THRESHOLD = 0.40; // 40% of screen width = complete navigation
const SPRING_EASE = 'cubic-bezier(0.25, 1.0, 0.5, 1)'; // Smooth spring for snap-back
const SLIDE_EASE = 'cubic-bezier(0.2, 0, 0, 1)';       // Accelerating ease for slide-out

// ── Internal state ──
let _onBack = null;       // Callback to invoke when swipe-back completes
let _active = false;      // Whether swipe-back is currently enabled
let _tracking = false;    // Whether we are actively tracking a swipe gesture
let _startX = 0;          // Touch start X position
let _startY = 0;          // Touch start Y position
let _dirLocked = false;   // Whether swipe direction has been locked
let _isHorizontal = false;// Whether the gesture is a horizontal swipe (not scroll)
let _overlayEl = null;    // Cached reference to the overlay element being swiped

// ── Bound handler references (needed for clean removeEventListener) ──
let _boundStart = null;
let _boundMove = null;
let _boundEnd = null;

/**
 * enableSwipeBack — activates iOS-style edge swipe-back on the current overlay.
 * Call this when a nested page (detail view, edit form) is opened.
 *
 * @param {Function} onBack - Callback to execute when swipe-back completes.
 *   This should perform the actual navigation (e.g., close overlay, go to list).
 */
export function enableSwipeBack(onBack) {
  // Clean up any previous listeners to avoid stacking
  disableSwipeBack();

  _onBack = onBack;
  _active = true;

  // Create bound handlers so we can remove them later
  _boundStart = _handleTouchStart;
  _boundMove = _handleTouchMove;
  _boundEnd = _handleTouchEnd;

  // Use document-level listeners so they work regardless of overlay structure
  document.addEventListener('touchstart', _boundStart, { passive: true });
  document.addEventListener('touchmove', _boundMove, { passive: false });
  document.addEventListener('touchend', _boundEnd, { passive: true });
  document.addEventListener('touchcancel', _boundEnd, { passive: true });
}

/**
 * disableSwipeBack — removes all swipe-back listeners and resets state.
 * Call this when the nested page closes to prevent ghost gestures.
 * Also clears any inline transform/transition styles left on the overlay
 * from an in-progress or aborted swipe — stale inline styles can override
 * CSS animations on the next overlay open, causing visual glitches.
 */
export function disableSwipeBack() {
  if (_boundStart) {
    document.removeEventListener('touchstart', _boundStart);
    document.removeEventListener('touchmove', _boundMove);
    document.removeEventListener('touchend', _boundEnd);
    document.removeEventListener('touchcancel', _boundEnd);
  }
  // Clear any inline styles left on the overlay from a partial/aborted swipe
  // so they don't persist and interfere with the next overlay open animation
  if (_overlayEl) {
    _overlayEl.style.transform = '';
    _overlayEl.style.transition = '';
  }
  _active = false;
  _tracking = false;
  _onBack = null;
  _overlayEl = null;
  _boundStart = null;
  _boundMove = null;
  _boundEnd = null;
}

/**
 * _handleTouchStart — checks if the touch begins within the left edge zone.
 * Only starts tracking if the finger is within EDGE_ZONE pixels of the left edge.
 * Ignores touches on the back button (.bkbtn) — those should fire onclick normally
 * without swipe interference, since the back button sits right at the edge zone boundary.
 */
function _handleTouchStart(e) {
  if (!_active) return;
  const touch = e.touches[0];

  // Only trigger from the left edge of the screen
  if (touch.clientX > EDGE_ZONE) return;

  // Don't intercept touches on the back button — let onclick handle them cleanly.
  // The back button (.bkbtn) sits right at the edge zone boundary (left padding ~20px),
  // so a slightly left-of-center tap could land in the edge zone and steal the event.
  const target = e.target;
  if (target && (target.classList.contains('bkbtn') || target.closest('.bkbtn'))) return;

  // Find the active overlay being displayed — this is what we'll slide
  _overlayEl = document.querySelector('.ov.active');
  if (!_overlayEl) return;

  _tracking = true;
  _startX = touch.clientX;
  _startY = touch.clientY;
  _dirLocked = false;
  _isHorizontal = false;

  // Remove any transition so the overlay tracks the finger at 1:1
  _overlayEl.style.transition = 'none';
}

/**
 * _handleTouchMove — tracks the finger and slides the overlay to follow.
 * Locks direction after initial movement to avoid conflicting with vertical scroll.
 */
function _handleTouchMove(e) {
  if (!_tracking || !_overlayEl) return;

  const touch = e.touches[0];
  const dx = touch.clientX - _startX;
  const dy = touch.clientY - _startY;

  // Lock direction after 8px of movement to distinguish swipe from scroll
  if (!_dirLocked) {
    if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
    _dirLocked = true;
    _isHorizontal = Math.abs(dx) > Math.abs(dy);
  }

  // If vertical scroll, cancel tracking and let the page scroll normally
  if (!_isHorizontal) {
    _tracking = false;
    _overlayEl.style.transform = '';
    _overlayEl.style.transition = '';
    return;
  }

  // Prevent vertical scroll while we're swiping horizontally
  e.preventDefault();

  // Only allow right swipe (positive dx), clamp to 0 minimum
  const offset = Math.max(0, dx);
  _overlayEl.style.transform = `translateX(${offset}px)`;
}

/**
 * _handleTouchEnd — decides whether to complete navigation or snap back.
 * If the user released past 40% of screen width, slide out and call onBack.
 * Otherwise, spring the overlay back to its original position.
 */
function _handleTouchEnd(e) {
  if (!_tracking || !_overlayEl) {
    _tracking = false;
    return;
  }

  _tracking = false;
  const currentTransform = _overlayEl.style.transform;
  const currentX = parseFloat(currentTransform.replace('translateX(', '')) || 0;
  const screenWidth = window.innerWidth;
  const swipeRatio = currentX / screenWidth;

  if (swipeRatio >= COMPLETE_THRESHOLD) {
    // ── COMPLETE: slide the overlay fully off-screen, then navigate back ──
    _overlayEl.style.transition = `transform 0.25s ${SLIDE_EASE}`;
    _overlayEl.style.transform = `translateX(${screenWidth}px)`;

    // Wait for the slide-out animation, then reset and fire callback
    const overlay = _overlayEl;
    const callback = _onBack;
    setTimeout(() => {
      overlay.style.transform = '';
      overlay.style.transition = '';
      if (callback) callback();
    }, 260);
  } else {
    // ── SNAP BACK: spring the overlay back to its resting position ──
    _overlayEl.style.transition = `transform 0.3s ${SPRING_EASE}`;
    _overlayEl.style.transform = 'translateX(0)';

    // Clean up transition after animation completes
    const overlay = _overlayEl;
    setTimeout(() => {
      overlay.style.transition = '';
    }, 310);
  }
}
