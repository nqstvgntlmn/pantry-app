// ── SWIPE-TO-DELETE + MULTI-SELECT ENGINE ────────────────────────────────────
// iOS-style swipe to reveal delete button, plus multi-select mode

import { state } from '../state.js';
import { dli, dlShopItem } from '../db.js';
import { g, showNotif } from '../helpers.js';

let _swipeEl = null, _swipeX0 = 0, _openWrap = null;

// initSwipe() — sets up touch event listeners (called once on app start)
export function initSwipe() {
  document.addEventListener("touchstart", e => {
    const inner = e.target.closest(".swipe-inner");
    if (!inner) return;
    const wrap = inner.closest(".swipe-wrap");
    if (!wrap) return;
    if (state.selectMode) return;
    _swipeEl = inner;
    _swipeX0 = e.touches[0].clientX;
    inner.classList.add("swiping");
  }, { passive: true });

  document.addEventListener("touchmove", e => {
    if (!_swipeEl) return;
    const dx = e.touches[0].clientX - _swipeX0;
    const tx = Math.max(-80, Math.min(0, dx));
    _swipeEl.style.transform = `translateX(${tx}px)`;
    if (Math.abs(dx) > 8) e.preventDefault();
  }, { passive: false });

  document.addEventListener("touchend", () => {
    if (!_swipeEl) return;
    const inner = _swipeEl;
    const wrap = inner.closest(".swipe-wrap");
    inner.classList.remove("swiping");
    const tx = parseFloat(inner.style.transform.replace("translateX(", "")) || 0;
    if (tx < -50) {
      inner.style.transform = "translateX(-80px)";
      wrap?.classList.add("open");
      if (_openWrap && _openWrap !== wrap) _snapClose(_openWrap);
      _openWrap = wrap;
    } else {
      inner.style.transform = "translateX(0)";
      wrap?.classList.remove("open");
      if (_openWrap === wrap) _openWrap = null;
    }
    _swipeEl = null;
  });

  // Close open swipe row if user taps anywhere else
  document.addEventListener("touchstart", e => {
    if (!_openWrap) return;
    if (e.target.closest(".swipe-del")) return;
    const inner = e.target.closest(".swipe-inner");
    if (inner && inner.closest(".swipe-wrap") === _openWrap) return;
    _snapClose(_openWrap);
    _openWrap = null;
  }, { passive: true });
}

// _snapClose(wrap) — snaps a swipe-wrap's inner back to 0
function _snapClose(wrap) {
  const inner = wrap?.querySelector(".swipe-inner");
  if (inner) inner.style.transform = "translateX(0)";
  wrap?.classList.remove("open");
}

// swipeDelItem(id, list) — called when user taps the red delete panel
export async function swipeDelItem(id, list) {
  const wrap = g("sw-" + id);
  if (wrap) wrap.style.opacity = "0.5";
  if (list === "shop") {
    await dlShopItem(id);
  } else {
    await dli(id);
    showNotif("Item removed");
  }
}

// swipeRowTap(id, list) — called when user taps a row
// Normal mode: opens adjust (inv) or toggles check (shop)
// Select mode: toggles the item's selection state
export function swipeRowTap(id, list) {
  const wrap = g("sw-" + id);
  if (wrap) {
    const inner = wrap.querySelector(".swipe-inner");
    const tx = parseFloat((inner.style.transform || "").replace("translateX(", "")) || 0;
    if (tx < -10) { _snapClose(wrap); _openWrap = null; return; }
  }
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
  if (list === "shop") window.togShop(id);
  else window.openAdj(id);
}

// ── MULTI-SELECT MODE ────────────────────────────────────────────────────────

// togShopSelect() — enters/exits multi-select mode for shopping list
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

// togInvSelect() — enters/exits multi-select mode for inventory
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

// cancelSelect() — exits multi-select mode
export function cancelSelect() {
  state.selectMode = null;
  state.selectedIds.clear();
  document.querySelectorAll(".swipe-wrap.selecting").forEach(w => w.classList.remove("selecting", "selected"));
  const sb = g("sh-selbtn"); if (sb) { sb.classList.remove("active"); sb.textContent = "Select"; }
  const ib = g("inv-selbtn"); if (ib) { ib.classList.remove("active"); ib.textContent = "Select"; }
  updateMultiBar();
}

// deleteSelected() — deletes all selected items
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

// updateMultiBar() — updates the multi-delete action bar
function updateMultiBar() {
  const bar = g("multi-bar");
  if (!bar) return;
  const n = state.selectedIds.size;
  const count = g("multi-count");
  if (count) count.textContent = n;
  if (state.selectMode) bar.classList.add("visible");
  else bar.classList.remove("visible");
}
