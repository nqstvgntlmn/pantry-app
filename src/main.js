// ── MAIN ENTRY POINT ─────────────────────────────────────────────────────────
// This is the root module of the pantry/kitchen app. It wires everything together:
//   1. Imports all feature modules (inventory, recipes, shopping, etc.)
//   2. Registers every function that HTML onclick attributes reference onto `window`
//   3. Sets up the auth flow (Google, Apple, Email sign-in/sign-up)
//   4. Boots the app once a user is authenticated and a household is resolved
//
// No business logic lives here — this file is purely glue code.

// Global stylesheet import (Vite will bundle this into the build)
import './styles.css';

// Core state: `state` holds all app data (inventory, recipes, etc.)
// CFG_DEFAULT = default config shape, J/Js = localStorage get/set JSON helpers
import { state, CFG_DEFAULT, J, Js } from './state.js';

// Database layer: Firestore CRUD, sync status indicator (ss), and data save/delete helpers
// svi/dli = save/delete inventory item, svr/dlr = save/delete recipe,
// svShopItem/dlShopItem = save/delete shopping item
// joinHouseholdByCode: join via invite code, createHousehold/createUserProfile: first-time setup
import { dbList, dbGet, dbSet, loadFirestoreData, renderCallbacks, ss, svi, dli, svr, dlr, svShopItem, dlShopItem, resolveHousehold, joinHouseholdByCode, createHousehold, createUserProfile, pausePoll, resumePoll, stopPoll, checkUsernameAvailable, setUsername, loadUsername, checkMembershipValid } from './db.js';

// DOM/UI helpers: g = getElementById shorthand, showNotif = toast notifications,
// showOv/hideOv = overlay open/close, renderStars = star rating HTML, tk = tracking util
import { g, showNotif, showOv, hideOv, renderStars, tk, applyTitleCaseWhileTyping } from './helpers.js';

// Firebase Auth wrappers: onAuth listens for auth state changes,
// sign-in/sign-up/sign-out functions, getCurrentUser returns the Firebase user object
import { onAuth, signInGoogle, signInApple, signInEmail, signUpEmail, signOut, getCurrentUser, getIdToken } from './auth.js';

// Real-time Firestore listeners — replaces 30s polling for instant sync
import { startRealtimeSync, stopRealtimeSync } from './realtime.js';

// Expose getIdToken on window immediately so it's available in the browser console
// for migration scripts. Must be at top level, not inside any callback.
window.getIdToken = getIdToken;

// ── UI MODULE IMPORTS ────────────────────────────────────────────────────────
// Each UI module owns one screen or feature area. Functions are imported here
// so they can be attached to `window` for HTML onclick access.

// Home screen: dashboard rendering, weekly/tonight views, export panel
import { initHome, renderHome, renderAll, renderSum, renderWeek, renderTonight, updExport, setRenderInv, addLowToShop, toggleHomeSection, openRecipeMatch, showMoreMatches, addMissingToShop, changeWeek, openUniversalAdd, closeUniversalAdd, uniQtyStep, uniFracChange, setUniAddLoc, toggleUniAddNote, onUniAddInput, uniAddToSupplies, uniAddToShopping, uniAddScan, uniAddVoice, initUniQtyToolbar, openUniAddCatPicker, activityUndo, activityUncheck, activityRemoveShop, activityRemoveInv, activityRemoveRec, activityRevert, activityUndoCook, activityClearMeal, activityUnclip, activityUndoDeduct } from './ui/home.js';

// Inventory screen: render list, adjust quantities/expiry/notes, add items manually, import,
// bottom sheet add flow (mirrors shopping), voice input for inventory
import { renderInv, openAdj, remItem, updL, adjQ, adjQD, adjE, adjNote, adjUnit, adjDoNotRestock, setIT, addManual, valMA, chgMQ, selML, importDoc, adjLowThresh, adjLowThreshD, openInvAddSheet, closeInvAddSheet, invAddScan, invAddVoice, setInvAddLoc, toggleInvAddNote, qaddInv, onInvInput, pickInvInlineResult, initInvVoice, toggleInvVoice, stopInvVoice, openInvItemDetail, closeInvItemDetail, deleteInvItemImage, triggerInvPhotoUpload, handleInvPhotoSelected, addInvToShopping, changeInvUnit, changeInvThreshold, changeInvThresholdDirect, toggleDoNotRestock, changeInvLocation, changeInvQty, changeInvQtyDirect, changeInvFrac, changeInvThreshFrac, changeInvExpiry, clearInvExpiry, setInvExpiry, changeInvNote, editInvDetailName, saveInvDetailName, editInvDetailSubtitle, saveInvDetailSubtitle, editInvDetailCombined, saveInvDetailCombined, initInvQtyToolbar, invQtyStep, invFracChange, resetInvStagger, openInvAddCatPicker, changeInvCategory, toggleInvViewMode } from './ui/inventory.js';

// Shopping screen: quick-add, toggle items, aisle grouping, share list,
// "add to kitchen" flow, bulk purchase, deal search
import { renderShop, qadd, togShop, toggleShNote, saveShNote, openShQty, adjShQty, saveShQty, togAisle, setSHT, shareList, openAddToKitchen, setAtkLoc, confirmAddToKitchen, buildList, bpTog, bpSelAll, bpConfirm, searchDeals, dealsFromList, addDealToList, renderDealsZipBanner, loadFlippDeals, refreshFlippDeals, filterDealStore, filterDealsLocal, loadMoreDeals, setDealsPageSize, initVoice, toggleVoice, stopVoice, recordCompleted, toggleAddNote, openShopAddSheet, closeShopAddSheet, shopAddScan, shopAddVoice, closeEnrichSheet, pickEnrichResult, searchAndEnrich, onShopInput, pickInlineResult, openItemDetail, closeItemDetail, deleteItemImage, triggerProductPhotoUpload, handleProductPhotoSelected, changeShopUnit, changeShopQty, changeShopQtyDirect, changeShopFrac, confirmVoiceMultiAdd, cancelVoiceMulti, editShopDetailName, saveShopDetailName, editShopDetailSubtitle, saveShopDetailSubtitle, editShopDetailCombined, saveShopDetailCombined, initShopQtyToolbar, shopQtyStep, shopFracChange, toggleShopDone, resetShopStagger, openShopAddCatPicker, changeShopCategory, loadCoupons, refreshCoupons, searchCoupons, filterCouponCat, filterCouponsLocal, clipCoupon, loadMoreCoupons, setCouponsPageSize, toggleCouponsSection, toggleDealsSection } from './ui/shopping.js';

// Recipes screen: CRUD, favorites, import from URL, scale servings, "what can I make",
// add recipe ingredients to shopping list, star rating, tag filtering
import { renderRecs, togFav, valR, importFromUrl, setImportMode, startBulkImport, retryBulkImport, saveRec, openER, openRecipeView, handleRecipeBack, updR, delER, scaleRec, whatCanIMake, addRecIngToShop, setStar, setRT, togTag, togglePublic, loadCommunity, setComCuisine, setComSearch, setComSort, toggleComTag, setComTime, setComMinRating, renderCommunity, openComRecipe, likeComRecipe, saveComToKitchen, addComComment, shareComRecipe, submitComReview, unpublishComRecipe, rateComRecipe, clearComRating, deleteComComment, openReportSheet, closeReportSheet, submitComReport, loadMoreComments, updateNotifBadge, openNotifications, openComRecipeFromNotif, triggerCoverUpload, handleCoverSelected, handleCoverDrop, removeCoverPhoto, triggerStepPhotoUpload, handleStepPhotoSelected, removeStepPhoto, openPhotoViewer, closePhotoViewer, photoViewerNav, triggerCommentPhotoUpload, handleCommentPhotosSelected, removeCommentPhoto, recipeTimeChanged, markTotalTimeManual, selectDifficulty, setRecSearch, setRecSort, toggleFilterPanel, setRecDifficulty, setRecCookTime, setRecServes, toggleRecProtein, toggleRecTag, toggleRecTagsExpand, clearRecFilters, toggleComTagsPanel, clearComFilters, setViewStar, editComRecipe, saveComRecipeEdit, parseRecipeWithAI, closeParsePreview, applyParsedRecipe, editHouseholdNotes, saveHouseholdNotes, resetRecipeStagger } from './ui/recipes.js';

// Insights screen: usage analytics and charts
import { renderInsights } from './ui/insights.js';

// Chat screen: AI chat, pill suggestions, clear history, auto-reply, kitchen context builder
import { sendChat, sendPill, clrChat, ar, kitCtx, importChatRecipe } from './ui/chat.js';

// Scanner: barcode/photo scanning, manual lookup, add scanned items to inventory or list
import { stopLiveScanner, resumeScanner, openScanForList, openScanForInventory, addScannedToList, toggleScanNote, showManualNameInput, togManual, manLookup, selRL, valAdd, addToInv, chgAQ, editScanTitle, confirmScanTitle, openScanCatPicker } from './ui/scan.js';

// Swipe gestures: swipe-to-delete, row tap, multi-select mode, undo deletion, delete all
import { initSwipe, swipeDelItem, swipeAddItem, swipeRowTap, togShopSelect, togInvSelect, cancelSelect, deleteSelected, undoDelete, deleteAll, deleteWithUndo } from './ui/swipe.js';

// Meal planning: pick recipes for days, mark as cooked, schedule, chip-based filtering
import { openMealM, openMealDetail, pickRec, closeMealM, saveMeal, clrMeal, openCooked, skipCooked, saveCooked, scheduleRecipe, schedSet, closeSchedM, initRecChips, toggleChip, filterRecs } from './ui/mealplan.js';
import { scheduleMealReminders } from './ui/reminders.js';

// Settings: config UI, push notifications, household management, theme/dark mode
// Household member management: remove, transfer ownership, leave/delete household
// checkMembershipOnInteraction: verifies user still belongs to household (kick detection)
import { loadCfgUI, saveSettings, saveZipcode, toggleNotif, testNotif, scheduleNotifCheck, addHousehold, switchHousehold, removeHousehold, applyTheme, setMode, initTheme, refreshSettingsUI, copyInviteCode, shareInviteCode, regenInviteCode, removeMemberFromHH, transferOwnershipUI, leaveHousehold, checkMembershipOnInteraction, enrichExistingItems, bulkPublishAll, regenAllSummaries, removeDuplicateCommunityRecipes, removeMyCommRecipes, removeHouseholdCommRecipes, deleteAccount, scanRecipesForIssues, closeScanResults, fixAllFlaggedRecipes, openUtilities, closeUtilities, clearScanCacheUI, editCustomCat, pickSettingsCatEmoji, pickEditCatEmoji, saveEditCustomCat, addCustomCatFromSettings, renderCustomCategories, openSettingsAddEmojiPicker, openSettingsEditEmojiPicker } from './ui/settings.js';

// Shopping Prep: pre-shop audit flow — walk through categories, verify quantities, build shopping list
import { openShoppingPrep, closeShoppingPrep, openPrepCategory, backToGrid, prepToggleVerify, prepAddToShop, prepAddAllLow, prepQtyStep, prepAddNewItem, prepRecategorize, prepCatLongPress } from './ui/shoppingprep.js';
import { selectCategory, closeCategoryPicker, showCreateCustomCategory, pickCustomEmoji, confirmCreateCustomCategory, deleteCustomCategory, openCatCreateEmojiPicker, selectEmojiFromPicker, closeEmojiPicker } from './ui/categorypicker.js';

// Onboarding: first-time user experience (4-step walkthrough)
import { checkOnboarding, onboardNext, finishOnboarding, skipOnboarding } from './ui/onboarding.js';

// ── REGISTER RENDER CALLBACKS ────────────────────────────────────────────────
// db.js needs to re-render the UI after save/delete operations, but it can't
// import UI modules directly (that would create circular imports). Instead,
// db.js exposes a `renderCallbacks` object that we populate here.
// When db.js finishes a write, it calls these functions to refresh the UI.
// Each callback is wrapped in a try/catch so a render crash in one module
// doesn't propagate through the realtime listener chain and crash the app.
renderCallbacks.renderAll = () => { try { renderAll(); } catch (e) { console.error("[renderAll] crash:", e); } };
renderCallbacks.renderSum = () => { try { renderSum(); } catch (e) { console.error("[renderSum] crash:", e); } };
renderCallbacks.renderRecs = () => { try { renderRecs(); } catch (e) { console.error("[renderRecs] crash:", e); } };
renderCallbacks.renderShop = () => { try { renderShop(); } catch (e) { console.error("[renderShop] crash:", e); } };

// Same circular-dependency workaround: home.js needs renderInv but can't import
// inventory.js directly, so we inject it via a setter function.
setRenderInv(renderInv);

// ── GLOBAL ERROR BOUNDARY ────────────────────────────────────────────────────
// Catch unhandled promise rejections and JS errors that would otherwise crash
// the app silently. Logs to console and updates the sync status dot so the user
// sees something went wrong instead of a frozen screen.
window.addEventListener("unhandledrejection", (e) => {
  console.error("[unhandledrejection]", e.reason);
  // Prevent the error from crashing the app — show sync error dot instead
  e.preventDefault();
  ss("error");
});
window.addEventListener("error", (e) => {
  console.error("[global error]", e.message, e.filename, e.lineno);
  // Don't crash the whole app for a single render error
  ss("error");
});

// ── VISIBILITY CHANGE CLEANUP ──────────────────────────────────────────────
// When the user switches to another app or locks their phone, stop any active
// speech recognition sessions. Orphaned SpeechRecognition instances are a major
// source of Safari "A problem repeatedly occurred" crashes because the microphone
// stays open and the listeners accumulate in the background.
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopVoice();
    stopInvVoice();
  }
});

// ── SCREEN NAVIGATION ────────────────────────────────────────────────────────
// The app is a single-page app with 6 main screens (home, inventory, recipes,
// shopping, insights, chat). Only one screen is visible at a time. Navigation
// is driven by bottom nav bar taps which call showScreen().
// Screens slide in/out directionally like a native iOS app using CSS transforms.

// Ordered tab names for swipe navigation — matches bottom nav layout left-to-right
const TAB_ORDER = ["home", "inventory", "recipes", "shopping", "insights", "chat"];

// _showTabError(tabName) — displays a friendly error state inside a tab's screen
// element when its render function throws. Prevents "A problem repeatedly occurred"
// Safari crash by containing the failure to just one tab.
function _showTabError(tabName) {
  const screen = g("screen-" + tabName);
  if (!screen) return;
  // Find the scrollable body area inside the screen, or use the screen itself
  const body = screen.querySelector(".hbody, .ibody, .rbody, .shbody") || screen;
  body.innerHTML = `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:80px 32px;text-align:center;gap:16px">
    <div style="font-size:2.5rem;opacity:.5">⚠️</div>
    <div style="font-size:.95rem;font-weight:600;color:var(--tx)">Something went wrong</div>
    <div style="font-size:.82rem;color:var(--mt);max-width:260px;line-height:1.6">This tab hit an error. Try switching tabs or pull down to refresh.</div>
    <button onclick="location.reload()" class="btn bp bsm" style="margin-top:8px">Reload App</button>
  </div>`;
}

// _transitioning guard: prevents overlapping slide animations from colliding.
// Set to true during a transition, cleared after 300ms (matches CSS duration).
let _transitioning = false;
let _transitionTimer = null;

// _currentTab() — returns the currently active tab name by checking which screen
// has the .active class, or null if no screen is active yet (initial boot).
function _currentTab() {
  for (const t of TAB_ORDER) {
    if (g("screen-" + t)?.classList.contains("active")) return t;
  }
  return null;
}

// _snapAllScreens() — immediately snap all screens to their resting positions
// (no transition). Used to cancel in-progress transitions during rapid switching.
function _snapAllScreens() {
  document.querySelectorAll(".screen").forEach(s => {
    s.classList.add("no-transition");
    s.classList.remove("active", "slide-left");
  });
  // Force reflow so the no-transition takes effect before re-enabling
  void document.body.offsetHeight;
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("no-transition"));
}

// showScreen(n) — switch to the named screen with a directional slide transition.
// Determines slide direction from TAB_ORDER index: navigating right = outgoing slides left,
// navigating left = incoming slides in from the left.
// On first call (no screen active yet), skip the transition and snap the target visible.
window.showScreen = function(n) {
  const cur = _currentTab();

  // Avoid re-entering the same tab (only when a tab is actually active)
  if (cur === n) return;

  // ── First-load fast path ──
  // On initial boot, no screen has .active yet (_currentTab() returns null).
  // Snap the target screen visible instantly — no slide transition needed.
  // This fixes the blank Home tab bug where the early-exit guard above would
  // skip activation because _currentTab() used to fall back to "home".
  if (cur === null) {
    console.log("[showScreen] First load — snapping", n, "visible (no transition)");
    const target = g("screen-" + n);
    if (target) {
      target.classList.add("no-transition", "active");
      void target.offsetHeight; // force reflow so no-transition takes effect
      target.classList.remove("no-transition");
    }
    // Highlight the correct nav item
    document.querySelectorAll(".ni").forEach(v => v.classList.remove("active"));
    g("nav-" + n)?.classList.add("active");
    // Trigger initial render for the target screen — wrapped in try/catch so a
    // crash in one tab's render doesn't take down the entire app (error boundary)
    try {
      if (n === "home") { window._shouldAnimateCounters = true; renderHome(); }
      if (n === "inventory") renderInv();
      if (n === "recipes") { if (state.rt === "community") loadCommunity(); else renderRecs(); }
      if (n === "shopping") renderShop();
      if (n === "insights") renderInsights();
    } catch (err) {
      console.error(`[showScreen] Render error on first load of "${n}":`, err);
      _showTabError(n);
    }
    // Update FAB for the initial tab (shows contextual label on first load)
    _updateFAB(n);
    return;
  }

  // If mid-transition, snap all screens to resting positions first
  if (_transitioning) {
    clearTimeout(_transitionTimer);
    _snapAllScreens();
    _transitioning = false;
  }

  // Close any open overlays (modals) before switching screens
  document.querySelectorAll(".ov.active").forEach(o => o.classList.remove("active"));

  // Stop any active speech recognition from the outgoing tab to prevent orphaned
  // listeners that accumulate and crash Safari on low-memory devices
  stopVoice();
  stopInvVoice();

  // Determine slide direction from tab order indices
  const curIdx = TAB_ORDER.indexOf(cur);
  const nextIdx = TAB_ORDER.indexOf(n);
  const goingRight = nextIdx > curIdx; // true = new tab is to the right

  const outgoing = g("screen-" + cur);
  const incoming = g("screen-" + n);

  // Deactivate all nav items, then highlight the target
  document.querySelectorAll(".ni").forEach(v => v.classList.remove("active"));
  g("nav-" + n)?.classList.add("active");

  // Mark transition in progress
  _transitioning = true;

  if (goingRight) {
    // Outgoing slides to the left, incoming slides in from the right (default position)
    if (outgoing) {
      outgoing.classList.remove("active");
      outgoing.classList.add("slide-left");
    }
    if (incoming) {
      // Incoming is already at translateX(100%) by default — just add .active
      incoming.classList.remove("slide-left");
      incoming.classList.add("active");
    }
  } else {
    // Outgoing slides to the right (remove active, returns to translateX(100%))
    // Incoming starts from the left and slides to center
    if (incoming) {
      // Temporarily disable transition, position incoming off-screen left
      incoming.classList.add("no-transition", "slide-left");
      incoming.classList.remove("active");
      void incoming.offsetHeight; // force reflow
      incoming.classList.remove("no-transition");
      // Now animate it to center by adding active and removing slide-left
      incoming.classList.remove("slide-left");
      incoming.classList.add("active");
    }
    if (outgoing) {
      outgoing.classList.remove("active", "slide-left");
    }
  }

  // Clear slide-left from non-active screens after transition completes
  _transitionTimer = setTimeout(() => {
    _transitioning = false;
    document.querySelectorAll(".screen:not(.active)").forEach(s => s.classList.remove("slide-left"));
  }, 320);

  // Reset stagger entrance flags so animations play fresh on tab switch
  resetInvStagger();
  resetShopStagger();
  resetRecipeStagger();

  // Re-render the target screen's content so data is fresh on each visit.
  // Wrapped in try/catch error boundary — a crash in one tab's render must not
  // freeze or crash the entire app. Shows a friendly error state instead.
  try {
    if (n === "home") { window._shouldAnimateCounters = true; renderHome(); }
    if (n === "inventory") renderInv();
    if (n === "recipes") { if (state.rt === "community") loadCommunity(); else renderRecs(); }
    if (n === "shopping") renderShop();
    if (n === "insights") renderInsights();
  } catch (err) {
    console.error(`[showScreen] Render error on "${n}":`, err);
    _showTabError(n);
  }

  // Update context-aware FAB icon/action for the new tab
  _updateFAB(n);
};

// ── CONTEXT-AWARE FLOATING ACTION BUTTON ─────────────────────────────────────
// The FAB shows a "+" icon per tab. No text label — just a circle that starts
// large and fully opaque, then shrinks + fades to 50% after 2 seconds.
// Tapping it at any size/opacity triggers the correct add action for the tab.
const FAB_CONFIG = {
  home:      { action: "openHomeFabSheet()",   ariaLabel: "Add item" },
  inventory: { action: "openInvAddSheet()",    ariaLabel: "Add supply" },
  recipes:   { action: "showOv('arec')",       ariaLabel: "Add recipe" },
  shopping:  { action: "openShopAddSheet()",   ariaLabel: "Add to list" },
  insights:  null, // No FAB on stats tab
  chat:      null  // No FAB on chat tab
};

// _fabSettleTimer — tracks the 2-second timeout before FAB shrinks + fades.
// Cleared on each tab switch so the timer resets when navigating.
let _fabSettleTimer = null;

// _updateFAB(tab) — shows/hides the FAB and sets its onclick for the given tab.
// Resets the FAB to large/opaque, then adds "settled" class after 2 seconds
// to smoothly shrink it and reduce opacity to 55% (0.8s cubic-bezier transition).
function _updateFAB(tab) {
  const fab = g("fab-btn");
  if (!fab) return;
  const cfg = FAB_CONFIG[tab];
  if (!cfg) {
    // Hide FAB for tabs without a primary action
    fab.classList.add("hidden");
  } else {
    fab.classList.remove("hidden");
    // Show only the "+" icon — no label text
    fab.innerHTML = `<span class="fab-icon">＋</span>`;
    fab.setAttribute("onclick", cfg.action);
    fab.setAttribute("aria-label", cfg.ariaLabel);

    // Reset to large, fully opaque state on tab switch
    fab.classList.remove("settled");

    // After 2 seconds, shrink + fade to 55% opacity via smooth 0.8s CSS transition
    clearTimeout(_fabSettleTimer);
    _fabSettleTimer = setTimeout(() => {
      fab.classList.add("settled");
    }, 2000);
  }
}

// ── SWIPE-BETWEEN-TABS GESTURE ───────────────────────────────────────────────
// Horizontal swipe on the main app area navigates between adjacent tabs.
// Uses touch events with a 50px threshold and 30deg max angle to prevent
// false triggers during vertical scrolling or diagonal swipes.
function _initTabSwipe() {
  let startX = 0, startY = 0, tracking = false;
  const THRESHOLD = 50;  // minimum swipe distance in px
  const MAX_ANGLE = 30;  // max vertical deviation in degrees

  const appEl = g("APP");
  if (!appEl) return;

  appEl.addEventListener("touchstart", (e) => {
    // Don't intercept swipes inside scrollable sub-containers (deal search, etc.)
    if (e.target.closest(".bsheet, .ov, .modal, .chmsgs")) return;
    // Don't intercept swipes on list item rows — those need swipe-to-delete.
    // Only allow tab swipe from safe non-interactive areas (headers, empty space, dividers).
    if (e.target.closest(".swipe-wrap, .shit, .iit, .exi")) return;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    tracking = true;
  }, { passive: true });

  appEl.addEventListener("touchend", (e) => {
    if (!tracking) return;
    tracking = false;
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);

    // Require horizontal dominance and minimum distance
    if (absDx < THRESHOLD || absDy > absDx * Math.tan(MAX_ANGLE * Math.PI / 180)) return;

    const cur = _currentTab();
    const idx = TAB_ORDER.indexOf(cur);
    if (idx === -1) return;

    // Swipe left → next tab, swipe right → previous tab
    const nextIdx = dx < 0 ? idx + 1 : idx - 1;
    if (nextIdx >= 0 && nextIdx < TAB_ORDER.length) {
      window.showScreen(TAB_ORDER[nextIdx]);
    }
  }, { passive: true });
}

// Initialize swipe navigation after DOM is ready
setTimeout(_initTabSwipe, 0);

// Wrap showOv so that opening the settings overlay also refreshes its UI.
// The slight delay (80ms) ensures the overlay's DOM is visible before we
// try to populate form fields.
const _baseShowOv = showOv;
window.showOv = function(n) {
  _baseShowOv(n);
  if (n === "settings") setTimeout(refreshSettingsUI, 80);
};
window.hideOv = hideOv;

// ── WINDOW HANDLERS ──────────────────────────────────────────────────────────
// Because the HTML uses inline onclick attributes (e.g. onclick="openAdj(id)"),
// every handler must be a property of `window`. This section maps imported
// module functions onto window.* so the HTML can call them.
//
// This is the bridge between the module system and the legacy onclick pattern.

// ── Home screen handlers ──
window.initHome = initHome;
window.addLowToShop = addLowToShop;   // Add a low-stock item to the shopping list
window.toggleHomeSection = toggleHomeSection; // Collapse/expand home screen sections
window.openRecipeMatch = openRecipeMatch;     // Open "What to Cook Tonight?" recipe matching overlay
window.showMoreMatches = showMoreMatches;     // Load next batch of matched recipes
window.addMissingToShop = addMissingToShop;   // Add a missing ingredient to shopping from recipe match
window.changeWeek = changeWeek;               // Navigate week calendar forward/backward
// toggleExp — toggle the export panel's visibility (show/hide)
window.toggleExp = function() { const p = g("exppanel"); p.style.display = p.style.display === "none" ? "block" : "none"; };
// ── Home FAB action sheet — small picker with "Add to Supplies" / "Add to Shopping List" ──
// openHomeFabSheet() — shows the two-option action sheet when FAB is tapped on Home tab.
// Each option opens the appropriate full add sheet (inventory or shopping).
function openHomeFabSheet() {
  const backdrop = g("homeFabBackdrop");
  const sheet = g("homeFabSheet");
  if (backdrop) backdrop.classList.add("active");
  if (sheet) sheet.classList.add("active");
}
// closeHomeFabSheet() — dismisses the Home FAB action sheet
function closeHomeFabSheet() {
  const backdrop = g("homeFabBackdrop");
  const sheet = g("homeFabSheet");
  if (backdrop) backdrop.classList.remove("active");
  if (sheet) sheet.classList.remove("active");
}
// fabToSupplies() — closes FAB sheet and opens the Supplies add sheet
function fabToSupplies() {
  closeHomeFabSheet();
  openInvAddSheet();
}
// fabToShopping() — closes FAB sheet and opens the Shopping add sheet
function fabToShopping() {
  closeHomeFabSheet();
  openShopAddSheet();
}
window.openHomeFabSheet = openHomeFabSheet;
window.closeHomeFabSheet = closeHomeFabSheet;
window.fabToSupplies = fabToSupplies;
window.fabToShopping = fabToShopping;

// ── Universal add sheet handlers (Home tab "＋ Add" button) ──
window.openUniversalAdd = openUniversalAdd;     // Open the universal add bottom sheet
window.closeUniversalAdd = closeUniversalAdd;   // Close the universal add bottom sheet
window.uniQtyStep = uniQtyStep;                 // Increment/decrement universal toolbar qty
window.uniFracChange = uniFracChange;           // Update universal toolbar fraction
window.setUniAddLoc = setUniAddLoc;             // Set location in universal add sheet
window.toggleUniAddNote = toggleUniAddNote;     // Toggle note field in universal add sheet
window.onUniAddInput = onUniAddInput;           // Title Case as user types in universal add
window.uniAddToSupplies = uniAddToSupplies;     // Add item to Supplies from universal sheet
window.uniAddToShopping = uniAddToShopping;     // Add item to Shopping from universal sheet
window.uniAddScan = uniAddScan;                 // Scan barcode from universal add sheet
window.uniAddVoice = uniAddVoice;               // Voice input from universal add sheet

// ── Activity feed action buttons (Recent Activity on Home tab) ──
window.activityUndo = activityUndo;               // Undo a "removed" action (re-add item)
window.activityUncheck = activityUncheck;         // Uncheck a checked-off shopping item
window.activityRemoveShop = activityRemoveShop;   // Remove a recently-added shopping item
window.activityRemoveInv = activityRemoveInv;     // Remove a recently-added supply item
window.activityRemoveRec = activityRemoveRec;     // Remove a recently-added/saved recipe
window.activityRevert = activityRevert;           // Revert a quantity/field change
window.activityUndoCook = activityUndoCook;       // Undo a "cooked" mark on a meal
window.activityClearMeal = activityClearMeal;     // Clear a planned meal
window.activityUnclip = activityUnclip;           // Unclip a coupon (not supported by API)
window.activityUndoDeduct = activityUndoDeduct;   // Undo ingredient deduction

// ── Inventory screen handlers ──
window.openAdj = openAdj;       // Open the adjust-item overlay for a specific inventory item
window.updL = updL;             // Update the storage location of an item
window.adjQ = adjQ;             // Adjust item quantity (increment/decrement)
window.adjQD = adjQD;           // Adjust item quantity by a custom delta
window.adjE = adjE;             // Adjust item expiry date
window.adjNote = adjNote;       // Save a note on an inventory item
window.setIT = setIT;           // Set the inventory tab filter (e.g. "all", "expiring")
window.addManual = addManual;   // Open the manual-add item form
window.valMA = valMA;           // Validate the manual-add form inputs
window.chgMQ = chgMQ;           // Change quantity in the manual-add form
window.selML = selML;           // Select a location in the manual-add form
window.remItem = remItem;       // Remove (delete) an inventory item
window.importDoc = importDoc;   // Import inventory items from a document/file
window.adjUnit = adjUnit;             // Save unit of measure change from adjust overlay
window.adjLowThresh = adjLowThresh;   // Adjust restock threshold by +/- 1
window.adjLowThreshD = adjLowThreshD; // Handle direct input of restock threshold
window.adjDoNotRestock = adjDoNotRestock; // Toggle "don't add to Running Low" in adjust overlay
// Detail sheet handlers — all fields are now editable directly on the detail sheet
window.changeInvUnit = changeInvUnit;                 // Change unit from inventory detail sheet
window.changeInvThreshold = changeInvThreshold;       // Adjust restock threshold from detail sheet
window.changeInvThresholdDirect = changeInvThresholdDirect; // Direct input of threshold from detail sheet
window.toggleDoNotRestock = toggleDoNotRestock;       // Toggle doNotRestock from detail sheet
window.changeInvLocation = changeInvLocation;         // Change storage location from detail sheet
window.changeInvQty = changeInvQty;                   // Adjust quantity whole part +/- from detail sheet stepper
window.changeInvQtyDirect = changeInvQtyDirect;       // Direct input of quantity whole part from detail sheet
window.changeInvFrac = changeInvFrac;                  // Fraction dropdown change for inventory quantity
window.changeInvThreshFrac = changeInvThreshFrac;      // Fraction dropdown change for restock threshold
window.changeInvExpiry = changeInvExpiry;              // Save expiry date from detail sheet date picker
window.clearInvExpiry = clearInvExpiry;                // Clear expiry date (set to "no expiry")
window.setInvExpiry = setInvExpiry;                    // Switch from "No expiry" badge to date picker (sets today as default)
window.changeInvNote = changeInvNote;                  // Save notes from detail sheet textarea
// Editable name/subtitle in inventory detail sheet
window.editInvDetailName = editInvDetailName;           // Legacy alias → editInvDetailCombined
window.saveInvDetailName = saveInvDetailName;           // Legacy alias → saveInvDetailCombined
window.editInvDetailSubtitle = editInvDetailSubtitle;   // Legacy alias → editInvDetailCombined
window.saveInvDetailSubtitle = saveInvDetailSubtitle;   // Legacy alias → saveInvDetailCombined
window.editInvDetailCombined = editInvDetailCombined;   // Combined title+subtitle edit mode
window.saveInvDetailCombined = saveInvDetailCombined;   // Save both title+subtitle at once
// Inventory add-to-supplies bottom sheet (mirrors shopping add-item sheet)
window.openInvAddSheet = openInvAddSheet;     // Open the add-to-supplies bottom sheet
window.closeInvAddSheet = closeInvAddSheet;   // Close the add-to-supplies bottom sheet
window.invAddScan = invAddScan;               // Scan barcode from inventory bottom sheet
window.invAddVoice = invAddVoice;             // Start voice input from inventory bottom sheet
window.invQtyStep = invQtyStep;               // Increment/decrement inventory toolbar qty
window.invFracChange = invFracChange;         // Update inventory toolbar fraction from dropdown
window.setInvAddLoc = setInvAddLoc;           // Set location in inventory add sheet
window.toggleInvAddNote = toggleInvAddNote;   // Toggle note field in inventory add sheet
window.qaddInv = qaddInv;                     // Quick-add item to inventory from text input
window.onInvInput = onInvInput;               // Debounced live search as user types in inventory add input
window.pickInvInlineResult = pickInvInlineResult; // Pick a product from the inventory search dropdown
window.toggleInvVoice = toggleInvVoice;       // Start/stop voice input for inventory
// Inventory item detail bottom sheet (mirrors shopping item detail sheet)
window.openInvItemDetail = openInvItemDetail;           // Open product detail bottom sheet for an inventory item
window.closeInvItemDetail = closeInvItemDetail;         // Close inventory item detail bottom sheet
window.deleteInvItemImage = deleteInvItemImage;         // Remove product image from an inventory item
window.triggerInvPhotoUpload = triggerInvPhotoUpload;   // Open file picker to upload a custom product photo for inventory
window.handleInvPhotoSelected = handleInvPhotoSelected; // Process the selected product photo file for inventory
window.addInvToShopping = addInvToShopping;             // Add an inventory item to the shopping list

// ── Shopping Prep screen handlers ──
window.openShoppingPrep = openShoppingPrep;   // Open Shopping Prep full-screen audit flow
window.closeShoppingPrep = closeShoppingPrep; // Close Shopping Prep and show summary toast
window.openPrepCategory = openPrepCategory;   // Open category detail view in Shopping Prep
window.backToGrid = backToGrid;               // Return from category detail to category grid
window.prepToggleVerify = prepToggleVerify;   // Toggle audit verify checkbox on an item
window.prepAddToShop = prepAddToShop;         // Add a single item to shopping list from prep
window.prepAddAllLow = prepAddAllLow;         // Add all low-stock items in a category to shopping
window.prepQtyStep = prepQtyStep;             // Adjust item quantity +/- from prep detail view
window.prepAddNewItem = prepAddNewItem;       // Open add-item sheet from prep detail view
window.prepRecategorize = prepRecategorize;   // Open category picker to recategorize an item in prep
window.prepCatLongPress = prepCatLongPress;   // Long-press handler for custom category cards in prep grid

// ── Category picker handlers (shared across all surfaces) ──
window.selectCategory = selectCategory;                       // Select a category in the picker sheet
window.closeCategoryPicker = closeCategoryPicker;             // Close the category picker sheet
window.showCreateCustomCategory = showCreateCustomCategory;   // Show inline create form in picker
window.pickCustomEmoji = pickCustomEmoji;                     // Pick an emoji for custom category (legacy)
window.openCatCreateEmojiPicker = openCatCreateEmojiPicker;   // Open emoji picker popup from category create form
window.selectEmojiFromPicker = selectEmojiFromPicker;         // Select an emoji from the picker popup
window.closeEmojiPicker = closeEmojiPicker;                   // Close the emoji picker popup
window.confirmCreateCustomCategory = confirmCreateCustomCategory; // Save a new custom category
window.deleteCustomCategory = deleteCustomCategory;           // Delete a custom category from settings
window.openShopAddCatPicker = openShopAddCatPicker;           // Open category picker from Shopping add sheet
window.changeShopCategory = changeShopCategory;               // Change category on a shopping item detail
window.openInvAddCatPicker = openInvAddCatPicker;             // Open category picker from Supplies add sheet
window.changeInvCategory = changeInvCategory;                 // Change category on an inventory item detail
window.toggleInvViewMode = toggleInvViewMode;                 // Toggle between list and shelf view in inventory
window.openUniAddCatPicker = openUniAddCatPicker;             // Open category picker from universal add sheet
window.openScanCatPicker = openScanCatPicker;                 // Open category picker from scan result screen

// ── Shopping screen handlers ──
window.qadd = qadd;             // Quick-add an item to the shopping list
window.togShop = togShop;       // Toggle a shopping item's checked state
window.toggleShopDone = toggleShopDone; // Toggle Done section collapsed state
window.toggleShNote = toggleShNote; // Toggle note visibility on a shopping item
window.saveShNote = saveShNote;     // Save a note on a shopping item
window.openShQty = openShQty;   // Open inline quantity editor for a shopping item
window.adjShQty = adjShQty;     // Adjust shopping item quantity by +1 or -1
window.saveShQty = saveShQty;   // Persist edited shopping item quantity
window.togAisle = togAisle;     // Toggle aisle grouping on/off
window.setSHT = setSHT;         // Set the shopping list tab filter
window.shareList = shareList;   // Share the shopping list (native share API or clipboard)
window.openAddToKitchen = openAddToKitchen;   // Open the "add checked items to kitchen" overlay
window.setAtkLoc = setAtkLoc;                 // Set the storage location for the add-to-kitchen flow
window.confirmAddToKitchen = confirmAddToKitchen; // Confirm moving checked items into inventory
window.buildList = buildList;   // Build/generate a shopping list from recipes or meal plan
window.toggleVoice = toggleVoice; // Start/stop voice input for shopping list quick-add
window.toggleAddNote = toggleAddNote; // Toggle optional note field in shopping list quick-add
window.openShopAddSheet = openShopAddSheet;   // Open the add-item bottom sheet
window.closeShopAddSheet = closeShopAddSheet; // Close the add-item bottom sheet
// shopAddType removed — text input is shown directly when sheet opens
window.shopAddScan = shopAddScan;             // Scan barcode from bottom sheet
window.shopAddVoice = shopAddVoice;           // Start voice input from bottom sheet
window.shopQtyStep = shopQtyStep;             // Increment/decrement shopping toolbar qty
window.shopFracChange = shopFracChange;       // Update shopping toolbar fraction from dropdown
window.closeEnrichSheet = closeEnrichSheet;   // Close the product enrichment bottom sheet
window.pickEnrichResult = pickEnrichResult;   // Pick a product match from enrichment results
window.onShopInput = onShopInput;             // Debounced live search as user types in add-item input
window.pickInlineResult = pickInlineResult;   // Pick a product from the inline search dropdown
window.openItemDetail = openItemDetail;       // Open product detail bottom sheet for a shopping item
window.closeItemDetail = closeItemDetail;     // Close product detail bottom sheet
window.changeShopUnit = changeShopUnit;       // Change unit of measure for a shopping item
window.changeShopQty = changeShopQty;         // Adjust shopping item quantity whole part from detail sheet stepper
window.changeShopQtyDirect = changeShopQtyDirect; // Direct input of quantity whole part from detail sheet stepper
window.changeShopFrac = changeShopFrac;       // Fraction dropdown change for shopping quantity
// Editable name/subtitle in shopping detail sheet
window.editShopDetailName = editShopDetailName;           // Legacy alias → editShopDetailCombined
window.saveShopDetailName = saveShopDetailName;           // Legacy alias → saveShopDetailCombined
window.editShopDetailSubtitle = editShopDetailSubtitle;   // Legacy alias → editShopDetailCombined
window.saveShopDetailSubtitle = saveShopDetailSubtitle;   // Legacy alias → saveShopDetailCombined
window.editShopDetailCombined = editShopDetailCombined;   // Combined title+subtitle edit mode
window.saveShopDetailCombined = saveShopDetailCombined;   // Save both title+subtitle at once
window.deleteItemImage = deleteItemImage;     // Remove product image from a shopping item (keeps other fields)
window.triggerProductPhotoUpload = triggerProductPhotoUpload; // Open file picker to upload a custom product photo
window.handleProductPhotoSelected = handleProductPhotoSelected; // Process the selected product photo file
window.bpTog = bpTog;           // Toggle a bulk-purchase item selection
window.bpSelAll = bpSelAll;     // Select all items in the bulk-purchase overlay
window.bpUpdBtn = function() { /* no-op: button state is handled internally by the shopping module */ };
window.bpConfirm = bpConfirm;   // Confirm bulk purchase selections
window._bpItems = [];           // Shared state: items selected for bulk purchase
window.searchDeals = searchDeals;             // Search/filter weekly deals via Flipp API
window.dealsFromList = dealsFromList;         // Find deals matching current shopping list items
window.addDealToList = addDealToList;         // Add a found deal item to the shopping list
window.renderDealsZipBanner = renderDealsZipBanner; // Update zipcode banner in Deals tab
window.loadFlippDeals = loadFlippDeals;       // Fetch and display weekly circular deals
window.refreshFlippDeals = refreshFlippDeals; // Force-refresh weekly deals (bypass cache)
window.filterDealStore = filterDealStore;     // Filter deals by store chip (Walmart, ALDI, etc.)
window.filterDealsLocal = filterDealsLocal;   // Live filter as user types in deals search
window.loadMoreDeals = loadMoreDeals;         // Show next page of deal cards
window.setDealsPageSize = setDealsPageSize;   // Set deals page size (10, 25, 50, All)
// ── ShopRite digital coupon handlers ──
window.loadCoupons = loadCoupons;             // Fetch and display ShopRite digital coupons
window.refreshCoupons = refreshCoupons;       // Force-refresh coupons (bypass cache)
window.searchCoupons = searchCoupons;         // Search coupons via API or local filter
window.filterCouponCat = filterCouponCat;     // Filter coupons by category chip
window.filterCouponsLocal = filterCouponsLocal; // Live filter as user types in coupon search
window.clipCoupon = clipCoupon;               // Clip a coupon to the household's Price Plus Card
window.loadMoreCoupons = loadMoreCoupons;     // Show next page of coupon cards
window.setCouponsPageSize = setCouponsPageSize; // Set coupons page size (10, 25, 50, All)
window.toggleCouponsSection = toggleCouponsSection; // Collapse/expand ShopRite coupons section
window.toggleDealsSection = toggleDealsSection;     // Collapse/expand Weekly Circular Deals section
// clrChk — delete all checked (purchased) items from the shopping list.
// Also records each item as completed for bidirectional Reminders sync,
// so the iOS Shortcut can mark them done in Apple Reminders.
window.clrChk = function() { state.shop.filter(i => i.checked).forEach(i => { recordCompleted(i.name); dlShopItem(i.id); }); };

// ── Recipes screen handlers ──
window.setRT = setRT;           // Set the recipe tab filter (e.g. "all", "favorites")
window.togFav = togFav;         // Toggle a recipe's favorite status
window.valR = valR;             // Validate the add/edit recipe form
window.importFromUrl = importFromUrl; // Import a recipe from a URL (scrape)
window.setImportMode = setImportMode;   // Toggle between single/bulk import tabs
window.startBulkImport = startBulkImport; // Start the bulk recipe import flow
window.retryBulkImport = retryBulkImport; // Retry a single failed bulk import URL
window.saveRec = saveRec;       // Save a new recipe
window.openER = openER;         // Open the edit-recipe overlay for an existing recipe
window.updR = updR;             // Update (save changes to) an existing recipe
window.delER = delER;           // Delete a recipe
window.scaleRec = scaleRec;     // Scale recipe ingredient quantities by a multiplier
window.whatCanIMake = whatCanIMake;       // Find recipes you can make with current inventory
window.addRecIngToShop = addRecIngToShop; // Add a recipe's missing ingredients to shopping list
window.parseRecipeWithAI = parseRecipeWithAI; // Restructure recipe content with Claude AI
window.closeParsePreview = closeParsePreview; // Close the parse preview modal
window.applyParsedRecipe = applyParsedRecipe; // Apply AI-restructured content to recipe
window.setStar = setStar;       // Set star rating on a recipe
window.togTag = togTag;         // Toggle a tag filter on the recipes screen
window.recipeTimeChanged = recipeTimeChanged;   // Auto-calc total time when prep/cook changes
window.markTotalTimeManual = markTotalTimeManual; // Mark total time as manually overridden
window.selectDifficulty = selectDifficulty;      // Difficulty pill selector toggle
window.togglePublic = togglePublic;       // Toggle public sharing of a recipe
window.loadCommunity = loadCommunity;     // Load and show community recipes
window.setComCuisine = setComCuisine;     // Set cuisine filter for community tab
window.setComSearch = setComSearch;       // Set search text for community tab
window.setComSort = setComSort;           // Set sort order for community tab (newest/popular/rated)
window.toggleComTag = toggleComTag;       // Toggle a tag filter on the community tab
window.setComTime = setComTime;           // Set cook time filter for community tab
window.setComMinRating = setComMinRating; // Set minimum rating filter for community tab
window.openComRecipe = openComRecipe;     // Open a community recipe detail view
window.likeComRecipe = likeComRecipe;     // Like/unlike a community recipe
window.saveComToKitchen = saveComToKitchen; // Save a community recipe to user's kitchen
window.addComComment = addComComment;     // Post a comment on a community recipe
window.shareComRecipe = shareComRecipe;   // Share a community recipe link
window.submitComReview = submitComReview; // Submit a star rating review on a community recipe
window.unpublishComRecipe = unpublishComRecipe; // Unpublish own recipe from community
window.rateComRecipe = rateComRecipe;             // Rate a community recipe 1-5 stars (new rating system)
window.clearComRating = clearComRating;           // Clear user's rating on a community recipe
window.deleteComComment = deleteComComment;       // Delete a comment on a community recipe
window.openReportSheet = openReportSheet;         // Open the report reason bottom sheet
window.closeReportSheet = closeReportSheet;       // Close the report bottom sheet
window.submitComReport = submitComReport;         // Submit a report with selected reason
window.loadMoreComments = loadMoreComments;       // Load next 20 comments (pagination)
window.openNotifications = openNotifications;     // Open the notifications list
window.openComRecipeFromNotif = openComRecipeFromNotif; // Open a recipe from a notification tap
// Read-only recipe view and back navigation
window.openRecipeView = openRecipeView;           // Open read-only cookbook view for a saved recipe
window.handleRecipeBack = handleRecipeBack;       // Back button handler (edit→view or view→close)
// Cover photo upload handlers
window.triggerCoverUpload = triggerCoverUpload;           // Open file picker for cover photo
window.handleCoverSelected = handleCoverSelected;         // Process selected cover photo file
window.handleCoverDrop = handleCoverDrop;                 // Process dropped cover photo file
window.removeCoverPhoto = removeCoverPhoto;               // Remove cover photo from recipe
// Step photo upload handlers
window.triggerStepPhotoUpload = triggerStepPhotoUpload;   // Open file picker for a step photo
window.handleStepPhotoSelected = handleStepPhotoSelected; // Process selected step photo file
window.removeStepPhoto = removeStepPhoto;                 // Remove a step photo from recipe
// Fullscreen photo viewer
window.openPhotoViewer = openPhotoViewer;                 // Open fullscreen photo viewer
window.closePhotoViewer = closePhotoViewer;               // Close fullscreen photo viewer
window.photoViewerNav = photoViewerNav;                   // Navigate between photos in viewer
// Comment photo handlers
window.triggerCommentPhotoUpload = triggerCommentPhotoUpload;     // Open file picker for comment photos
window.handleCommentPhotosSelected = handleCommentPhotosSelected; // Process selected comment photos
window.removeCommentPhoto = removeCommentPhoto;                   // Remove a pending comment photo
// ── Recipe search, sort, and filter handlers (Features 1, 2, 5) ──
window.setRecSearch = setRecSearch;             // Update My Recipes search text and re-render
window.setRecSort = setRecSort;                 // Change My Recipes sort order (az, newest, rating)
window.toggleFilterPanel = toggleFilterPanel;   // Collapse/expand filter panel ("my" or "com" context)
window.setRecDifficulty = setRecDifficulty;     // Set difficulty filter (Easy/Medium/Hard or "")
window.setRecCookTime = setRecCookTime;         // Set cook time filter (any, under30, under60, over60)
window.setRecServes = setRecServes;             // Set serves filter (any, 1-2, 3-4, 5+)
window.toggleRecProtein = toggleRecProtein;     // Toggle a protein tag filter on/off
window.toggleRecTag = toggleRecTag;             // Toggle a tag filter on/off in My Recipes
window.toggleRecTagsExpand = toggleRecTagsExpand; // Expand/collapse tag pills in filter panel
window.clearRecFilters = clearRecFilters;       // Reset all My Recipes filters to default
window.toggleComTagsPanel = toggleComTagsPanel; // Collapse/expand community tags panel (Feature 1)
window.clearComFilters = clearComFilters;       // Reset all community filters to default
// ── Read-only view star rating (Feature 8) ──
window.setViewStar = setViewStar;               // Rate a recipe from the read-only view (saves immediately)
// ── Community recipe editing / forking (Feature 10) ──
window.editComRecipe = editComRecipe;           // Open edit overlay for author's own community recipe
window.saveComRecipeEdit = saveComRecipeEdit;   // Save edits to a community recipe (author only)
// ── Household notes on recipe view ──
window.editHouseholdNotes = editHouseholdNotes; // Switch household notes to edit mode (textarea)
window.saveHouseholdNotes = saveHouseholdNotes; // Save household notes on blur and switch back to display

// ── Chat screen handlers ──
window.sendChat = sendChat;     // Send a chat message to the AI assistant
window.sendPill = sendPill;     // Send a pre-built "pill" suggestion as a chat message
window.clrChat = clrChat;       // Clear the chat history
window.ar = ar;                 // Auto-reply / process AI response actions
window.importChatRecipe = importChatRecipe; // Import a recipe card from chat into saved recipes

// ── Scanner screen handlers ──
window.stopLiveScanner = stopLiveScanner;       // Stop the live barcode scanner and release camera
window.resumeScanner = resumeScanner;           // Resume live scanner when returning from result overlay
window.openScanForList = openScanForList;       // Open scanner in "add to shopping list" mode
window.openScanForInventory = openScanForInventory; // Open scanner in "add to inventory" mode
window.addScannedToList = addScannedToList;     // Add a scanned item to the shopping list
window.toggleScanNote = toggleScanNote;         // Toggle the optional note field in scan result overlay
window.showManualNameInput = showManualNameInput; // Show manual name input after barcode not found
window.togManual = togManual;                   // Toggle manual barcode entry mode
window.manLookup = manLookup;                   // Look up a manually entered barcode
window.selRL = selRL;                           // Select a result from the barcode lookup list
window.valAdd = valAdd;                         // Validate the scanned-item add form
window.addToInv = addToInv;                     // Add a scanned/looked-up item to inventory
window.chgAQ = chgAQ;                           // Change quantity in the add-to-inventory form
window.editScanTitle = editScanTitle;             // Switch scan title to inline edit mode
window.confirmScanTitle = confirmScanTitle;       // Confirm edited scan title and save to customProducts

// ── Swipe / Multi-select / Undo handlers ──
window.swipeDelItem = swipeDelItem;   // Delete an item revealed by swipe gesture
window.swipeAddItem = swipeAddItem;   // Add an inventory item to shopping via swipe gesture
window.swipeRowTap = swipeRowTap;     // Handle tap on a swipeable row
window.togShopSelect = togShopSelect; // Toggle multi-select mode on shopping list
window.togInvSelect = togInvSelect;   // Toggle multi-select mode on inventory list
window.cancelSelect = cancelSelect;   // Cancel multi-select mode
window.deleteSelected = deleteSelected; // Delete all selected items in multi-select mode
window.undoDelete = undoDelete;       // Restore last deleted item (5-second undo window)
window.deleteAll = deleteAll;         // Delete ALL items in current list (with confirmation)
window.deleteWithUndo = deleteWithUndo; // Deferred delete with undo — used by inventory remItem
// ── Voice multi-item add ──
window.confirmVoiceMultiAdd = confirmVoiceMultiAdd; // Add checked items from voice confirmation sheet
window.cancelVoiceMulti = cancelVoiceMulti;         // Close voice confirmation sheet without adding

// ── Meal plan handlers ──
window.openMealM = openMealM;     // Open the meal plan modal for a specific day
window.openMealDetail = openMealDetail; // Open meal detail sheet for a planned day
window.pickRec = pickRec;         // Pick a recipe for a meal slot
window.closeMealM = closeMealM;   // Close the meal plan modal
window.saveMeal = saveMeal;       // Save the selected meal to the plan
window.clrMeal = clrMeal;         // Clear a meal from the plan
window.openCooked = openCooked;   // Open the "mark as cooked" overlay
window.skipCooked = skipCooked;   // Skip the cooked confirmation (didn't cook it)
window.saveCooked = saveCooked;   // Confirm a meal was cooked (logs it, deducts inventory)
window.scheduleRecipe = scheduleRecipe; // Schedule a recipe for a future date
window.schedSet = schedSet;       // Set/confirm the scheduled date
window.closeSchedM = closeSchedM; // Close the schedule recipe modal (cancel / backdrop tap)
window.initRecChips = initRecChips; // Initialize the recipe filter chips UI
window.toggleChip = toggleChip;   // Toggle a filter chip on/off
window.filterRecs = filterRecs;   // Apply chip filters to the recipe list
window._pickedRec = null;         // Shared state: the currently picked recipe in meal plan modal
window._activeChips = new Set();  // Shared state: set of active filter chip IDs

// ── Settings / Themes / Households handlers ──
window.saveSettings = saveSettings;         // Save settings form to Firestore
window.saveZipcode = saveZipcode;           // Save just the zipcode to Firestore (inline Save button)
window.toggleNotif = toggleNotif;           // Toggle push notification permission
window.testNotif = testNotif;               // Send a test notification
window.addHousehold = addHousehold;         // Create and join a new household
window.switchHousehold = switchHousehold;   // Switch to a different household
window.removeHousehold = removeHousehold;   // Leave/remove a household
window.setMode = setMode;                   // Set light/dark/auto theme mode
window.showNotif = showNotif;               // Show a toast notification (used from settings HTML)
window.applyTitleCaseWhileTyping = applyTitleCaseWhileTyping; // Auto Title Case on inline edit inputs (used in detail sheet oninput)
window.copyInviteCode = copyInviteCode;     // Copy household invite code to clipboard
window.shareInviteCode = shareInviteCode;   // Share invite code via Web Share API
window.regenInviteCode = regenInviteCode;   // Regenerate a new invite code (owner only)
window.removeMemberFromHH = removeMemberFromHH; // Remove a member from the household (owner only)
window.transferOwnershipUI = transferOwnershipUI; // Transfer ownership to another member (owner only)
window.leaveHousehold = leaveHousehold;           // Leave the household (member) or delete it (owner, sole member)
window.enrichExistingItems = enrichExistingItems; // Retroactive product enrichment for all items
window.bulkPublishAll = bulkPublishAll;           // One-time publish all recipes to community
window.regenAllSummaries = regenAllSummaries;     // Regenerate AI summaries for all recipes
window.removeDuplicateCommunityRecipes = removeDuplicateCommunityRecipes; // Maintenance utility: remove duplicate community recipes
window.removeMyCommRecipes = removeMyCommRecipes;                       // Remove all community recipes published by current user
window.removeHouseholdCommRecipes = removeHouseholdCommRecipes;         // Remove all community recipes published by household (owner only)
window.deleteAccount = deleteAccount;   // Permanently delete user's account and all associated data
window.scanRecipesForIssues = scanRecipesForIssues; // Scan all recipes for ingredient quality issues (owner only)
window.closeScanResults = closeScanResults;         // Close the scan results modal
window.fixAllFlaggedRecipes = fixAllFlaggedRecipes; // Fix all flagged recipes via AI parsing
window.openUtilities = openUtilities;               // Open the dedicated Utilities page from Settings
window.closeUtilities = closeUtilities;             // Close the Utilities page and return to Settings
window.clearScanCacheUI = clearScanCacheUI;         // Clear cached barcode scan results (Settings > Utilities > Data)
window.editCustomCat = editCustomCat;               // Edit a custom Shopping Prep category in Settings
window.pickSettingsCatEmoji = pickSettingsCatEmoji;  // Pick emoji in Settings custom category add form (legacy)
window.pickEditCatEmoji = pickEditCatEmoji;          // Pick emoji in Settings custom category edit form (legacy)
window.openSettingsAddEmojiPicker = openSettingsAddEmojiPicker;   // Open emoji picker popup from Settings add form
window.openSettingsEditEmojiPicker = openSettingsEditEmojiPicker; // Open emoji picker popup from Settings edit form
window.saveEditCustomCat = saveEditCustomCat;        // Save edits to a custom category in Settings
window.addCustomCatFromSettings = addCustomCatFromSettings; // Create a new custom category from Settings
window.renderCustomCategories = renderCustomCategories;     // Re-render custom categories list in Settings (used after delete)

// ── INPUT CLEAR (×) BUTTON HANDLERS ──────────────────────────────────────────
// These two functions power the inline × clear buttons on all search/filter inputs.
// onSearchInput: toggles the .has-text class on the wrapper so CSS can show/hide the × button.
// clearSearch: clears the input value, hides the × button, and calls the field's reset callback.

/**
 * onSearchInput(el) — Called on every keystroke in a clearable input.
 * Adds or removes .has-text on the wrapper so the × button shows only when there's text.
 */
window.onSearchInput = function(el) {
  const wrap = el.closest('.input-clear-wrap');
  if (wrap) wrap.classList.toggle('has-text', el.value.length > 0);
};

/**
 * clearSearch(inputId, callbackName) — Clears the input field, hides the × button,
 * re-focuses the input, and invokes the named window function to reset filters/results.
 */
window.clearSearch = function(inputId, callbackName) {
  const inp = g(inputId);
  if (!inp) return;
  // Clear the field and remove the has-text flag so × disappears
  inp.value = '';
  const wrap = inp.closest('.input-clear-wrap');
  if (wrap) wrap.classList.remove('has-text');
  // Re-focus so the user can keep typing immediately
  inp.focus();
  // Call the associated filter/reset function (e.g. filterDealsLocal, onShopInput)
  if (callbackName && typeof window[callbackName] === 'function') {
    window[callbackName]();
  }
};

// manualRefresh(target) — Safety valve to force re-fetch all items from Firestore.
// Triggered by the subtle ↻ button on Shopping/Inventory screens when real-time
// sync feels stuck. Re-lists the collection from Firestore and re-renders.
window.manualRefresh = async function(target) {
  // Add spinning animation to the clicked button for visual feedback
  const btn = event?.target;
  if (btn) { btn.classList.add("spinning"); setTimeout(() => btn.classList.remove("spinning"), 600); }

  ss("syncing");
  try {
    if (target === "shop" || target === "both") {
      // Re-fetch all shopping list items from Firestore
      state.shop = await dbList(`households/${state.hid}/shopping`);
      renderShop();
    }
    if (target === "inv" || target === "both") {
      // Re-fetch all inventory items from Firestore
      state.inv = await dbList(`households/${state.hid}/inventory`);
      renderInv();
      renderAll();
    }
    ss("synced");
    showNotif("Refreshed ✓");
  } catch (e) {
    console.error("manualRefresh error:", e);
    ss("error");
    showNotif("Refresh failed");
  }
};

// refreshHomeData() — re-fetches all data that feeds the home screen:
// inventory (Running Low, Expiring Soon, Your Supplies), shopping list count,
// meal plan (Tonight's Dinner, This Week), and activity feed.
// Triggered by the ↻ button on the home screen header.
window.refreshHomeData = async function() {
  // Spin the refresh button for visual feedback
  const btn = event?.target;
  if (btn) { btn.classList.add("spinning"); setTimeout(() => btn.classList.remove("spinning"), 600); }

  ss("syncing");
  try {
    // Re-fetch all collections that appear on the home screen
    const [invData, shopData, mpData, cfgData] = await Promise.allSettled([
      dbList(`households/${state.hid}/inventory`),
      dbList(`households/${state.hid}/shopping`),
      dbList(`households/${state.hid}/mealplan`),
      dbList(`households/${state.hid}/settings`),
    ]);
    if (invData.status === "fulfilled") state.inv = invData.value;
    if (shopData.status === "fulfilled") state.shop = shopData.value;
    if (mpData.status === "fulfilled") {
      // Rebuild meal plan map from list of {id: "YYYY-MM-DD", meal: "..."} entries
      state.mp = {};
      mpData.value.forEach(d => { if (d.meal) state.mp[d.id] = d.meal; });
    }
    renderHome();
    renderInv();
    ss("synced");
    showNotif("Refreshed ✓");
  } catch (e) {
    console.error("refreshHomeData error:", e);
    ss("error");
    showNotif("Refresh failed");
  }
};

// refreshRecipes() — re-fetches recipe data depending on active recipe tab.
// Community tab: reloads public recipes from Firestore. My Recipes tabs:
// re-fetches household recipes and re-renders the current filtered view.
// Triggered by the ↻ button on the Recipes screen header.
window.refreshRecipes = async function() {
  // Spin the refresh button for visual feedback (matches Home/Shopping behavior)
  const btn = event?.target;
  if (btn) { btn.classList.add("spinning"); setTimeout(() => btn.classList.remove("spinning"), 600); }

  ss("syncing");
  try {
    if (state.rt === "community") {
      // Community tab — reload all public recipes and re-render the feed
      state.comRecs = await dbList("public_recipes");
      state.comPage = 0;
      renderCommunity();
    } else {
      // My Recipes tabs — re-fetch household recipes and re-render
      state.recs = await dbList(`households/${state.hid}/recipes`);
      renderRecs();
    }
    ss("synced");
    showNotif("Refreshed ✓");
  } catch (e) {
    console.error("refreshRecipes error:", e);
    ss("error");
    showNotif("Refresh failed");
  }
};

// ── Onboarding handlers ──
window.onboardNext = onboardNext;           // Advance to the next onboarding step
window.finishOnboarding = finishOnboarding; // Complete onboarding and close overlay
window.skipOnboarding = skipOnboarding;     // Skip onboarding entirely
// getIdToken is exposed on window at the top of this file (after import)

// ── Username handlers ──
// saveUsername — validates and saves a new username from the username prompt modal.
// Checks that the username is 3-20 chars, alphanumeric + underscores, and unique.
window.saveUsername = async function() {
  const input = g("usernameInput");
  const status = g("usernameStatus");
  const btn = g("saveUsernameBtn");
  const raw = (input?.value || "").trim();

  // Validate format: 3-20 chars, alphanumeric + underscores only
  if (!/^[a-zA-Z0-9_]{3,20}$/.test(raw)) {
    if (status) { status.textContent = "3-20 characters, letters, numbers, and underscores only."; status.style.color = "var(--rd)"; status.style.display = "block"; }
    return;
  }

  if (btn) { btn.disabled = true; btn.textContent = "Checking…"; }

  // Check uniqueness against the usernames index collection
  const available = await checkUsernameAvailable(raw);
  if (!available) {
    if (status) { status.textContent = `"${raw}" is already taken. Try another.`; status.style.color = "var(--rd)"; status.style.display = "block"; }
    if (btn) { btn.disabled = false; btn.textContent = "Save"; }
    return;
  }

  // Save the username to Firestore (user profile + usernames index)
  const user = getCurrentUser();
  if (user) {
    await setUsername(user.uid, raw);
    showNotif("Username set to @" + raw);
  }

  // Close the username modal
  g("usernameM")?.classList.remove("active");
  if (btn) { btn.disabled = false; btn.textContent = "Save"; }
};

// changeUsername — saves a changed username from the settings panel.
// Uses the same validation and uniqueness check as saveUsername.
window.changeUsername = async function() {
  const input = g("setUsername");
  const raw = (input?.value || "").trim();

  if (!/^[a-zA-Z0-9_]{3,20}$/.test(raw)) {
    showNotif("3-20 chars, letters/numbers/underscores only");
    return;
  }

  // Skip check if username hasn't changed
  if (raw === state.username) { showNotif("Username unchanged"); return; }

  const available = await checkUsernameAvailable(raw);
  if (!available) { showNotif(`"${raw}" is already taken`); return; }

  const user = getCurrentUser();
  if (user) {
    await setUsername(user.uid, raw);
    showNotif("Username changed to @" + raw);
  }
};

// ── APP START ────────────────────────────────────────────────────────────────
// _appStart is called once after auth succeeds and a household ID is resolved.
// It initializes the app: hides the login screen, loads data from Firestore,
// and starts a polling loop to keep data in sync.

window._appStart = async function(code) {
  // Store the active household ID in global state so all modules can reference it
  state.hid = code;

  // ── needsHousehold guard ──
  // Check if the user was removed or left a household since last visit.
  // If needsHousehold: true, redirect to onboarding regardless of cached state.
  const currentUser = getCurrentUser();
  if (currentUser) {
    try {
      const userDoc = await dbGet(`users/${currentUser.uid}`);
      if (userDoc?.needsHousehold === true) {
        // User needs a new household — clear state and show join screen
        showNotif("You need to join or create a household");
        localStorage.removeItem("ks-h");
        localStorage.removeItem("ks-hhs");
        location.reload();
        return;
      }

      // Also validate householdId still points to a real household
      if (state.hid) {
        const hhDoc = await dbGet(`households/${state.hid}`);
        if (!hhDoc) {
          // Household document no longer exists — clear and redirect
          console.warn(`[_appStart] Household ${state.hid} no longer exists`);
          await dbSet(`users/${currentUser.uid}`, {
            ...userDoc,
            householdIds: [],
            needsHousehold: true,
            onboardingDone: false,
            id: undefined
          });
          localStorage.removeItem("ks-h");
          localStorage.removeItem("ks-hhs");
          location.reload();
          return;
        }
      }
    } catch (e) {
      console.warn("[_appStart] needsHousehold check failed:", e);
    }
  }

  // ── Membership check ──
  // Before loading any data, verify the user is still a member of this household.
  // This catches the case where a member was removed by the owner since their last visit.
  // If invalid, clears local state and redirects to onboarding (join/create screen).
  if (currentUser) {
    const membershipValid = await checkMembershipValid(state.hid, currentUser.uid);
    if (!membershipValid) {
      // User was removed from this household — clear state and redirect
      checkMembershipOnInteraction();
      return; // Stop app boot — redirect will handle the rest
    }
  }

  // Hide the login screen ("LS") and show the main app container ("APP")
  console.log("[_appStart] Hiding login screen, showing app container");
  g("LS").style.display = "none";
  g("APP").style.display = "flex";

  // Navigate to the home screen as the default landing page
  console.log("[_appStart] Calling showScreen('home'), current active screen:", _currentTab());
  window.showScreen("home");
  console.log("[_appStart] After showScreen('home'), active screen:", _currentTab());

  // Show the "syncing" indicator in the UI (e.g. a spinner or status dot)
  ss("syncing");

  // ── Sync the household list to localStorage ──
  // Users can belong to multiple households. We keep a cached list in
  // localStorage ("ks-hhs") for quick access in the settings UI.
  // The source of truth is the user's Firestore profile, but we fall back
  // to localStorage if Firestore is unavailable.
  const user = getCurrentUser();
  if (user) {
    try {
      // Try to read the user's Firestore profile to get their household list.
      // Handle both `householdId` (singular string) and `householdIds` (array)
      // field formats — the singular field is authoritative when present.
      const userDoc = await dbGet(`users/${user.uid}`);
      const firestoreIds = userDoc?.householdId
        ? [userDoc.householdId]
        : (userDoc?.householdIds || []);
      if (firestoreIds.length) {
        // User has households in Firestore — cache them locally
        const arr = [...firestoreIds];
        // Ensure the current household is in the list (defensive)
        if (!arr.includes(code)) arr.push(code);
        Js("ks-hhs", arr);
      } else {
        // No households in Firestore yet — use localStorage or create a new list
        const arr = J("ks-hhs") || [code];
        if (!arr.includes(code)) { arr.push(code); Js("ks-hhs", arr); }
      }
    } catch {
      // Firestore fetch failed — fall back to localStorage cache
      const arr = J("ks-hhs") || [code];
      if (!arr.includes(code)) { arr.push(code); Js("ks-hhs", arr); }
    }
  } else {
    // No authenticated user (shouldn't happen here, but defensive)
    const arr = J("ks-hhs") || [code];
    if (!arr.includes(code)) { arr.push(code); Js("ks-hhs", arr); }
  }

  // Load Firestore data: meal plan, config, cook log, waste log.
  // Also runs a one-time migration if the data hasn't been migrated yet.
  await loadFirestoreData();

  // Apply saved config values to the settings UI form elements
  loadCfgUI();

  // Initialize the home screen (set up date display, greeting, etc.)
  initHome();

  // Detect Web Speech API support and show mic buttons if available
  initVoice();
  initInvVoice();

  // Populate the qty/fraction/unit toolbar dropdowns in all add-item sheets
  initShopQtyToolbar();
  initInvQtyToolbar();
  initUniQtyToolbar();

  // ── Real-time sync ──
  // Instead of polling every 30 seconds, we use Firestore onSnapshot listeners
  // for instant sync across all household members. The listeners update state
  // and trigger UI re-renders automatically when data changes on any device.
  // Writes still go through the REST proxy (/api/db) for security rules.
  startRealtimeSync(state.hid);

  // Also run one initial REST-based poll for the data that loadFirestoreData
  // doesn't cover (inventory, recipes, shopping list). This ensures we have
  // data immediately before the onSnapshot callbacks fire.
  try {
    ss("syncing");
    const res = await Promise.allSettled([
      dbList(`households/${state.hid}/inventory`),
      dbList(`households/${state.hid}/recipes`),
      dbList(`households/${state.hid}/shopping`)
    ]);
    const v = (r, fb) => r.status === "fulfilled" ? r.value : fb;
    state.inv  = v(res[0], state.inv);
    state.recs = v(res[1], state.recs);
    state.shop = v(res[2], state.shop);
    ss("synced");

    // Mark data as ready so the Home screen can render with real data
    // instead of showing the loading skeleton. This flag gates renderHome()
    // to prevent the blank-screen flash on first boot.
    state.homeDataReady = true;

    // renderAll includes renderHome which calls renderSum, so no separate renderSum needed
    renderAll(); renderRecs(); renderShop();
  } catch (e) {
    console.error("initial load error", e);
    ss("error");
    // Even on error, mark data as ready so the Home screen renders
    // with whatever partial data we have instead of staying on the skeleton
    state.homeDataReady = true;
    renderAll();
  }

  // Schedule meal reminders for planned meals (9 AM browser notifications).
  // Runs after data load so state.mp is populated with the meal plan.
  scheduleMealReminders();

  // Load the user's public username from Firestore.
  // If they don't have one yet, prompt them to choose one via the username modal.
  if (user) {
    const uname = await loadUsername(user.uid);
    state.username = uname;
    // Populate the settings username field if it exists
    const setUnEl = g("setUsername");
    if (setUnEl) setUnEl.value = uname || "";
    // Show username prompt if user hasn't set one yet
    if (!uname) {
      setTimeout(() => g("usernameM")?.classList.add("active"), 600);
    }
  }

  // Check for unread notifications and update the badge on the Recipes tab.
  // Slight delay so it doesn't block initial render.
  setTimeout(updateNotifBadge, 800);

  // Check if this is a first-time user and show onboarding if needed.
  // Slight delay ensures the main UI is visible first.
  setTimeout(checkOnboarding, 500);
};

// ── INITIALIZATION ───────────────────────────────────────────────────────────
// These run immediately on page load, BEFORE the user is authenticated.
// They set up passive UI infrastructure that doesn't depend on user data.

// Apply the saved theme (light/dark/auto) so the page doesn't flash white
initTheme();

// Attach touch event listeners for swipe-to-delete gestures on list rows
initSwipe();

// If notifications were previously enabled, schedule the expiry check
// after a 3-second delay (avoids blocking initial render)
if (state.cfg.notif) setTimeout(scheduleNotifCheck, 3000);

// Render the shopping list with whatever is in local state (may be empty).
// This prevents a blank screen flash while waiting for auth + Firestore.
renderShop();

// ── AUTH FLOW ────────────────────────────────────────────────────────────────
// The auth UI has two views: sign-in and sign-up. Firebase Auth handles
// Google, Apple, and Email authentication. The `onAuth` listener (at the
// bottom of this file) drives the lifecycle:
//   - User signs in  -> resolve their household -> call _appStart()
//   - User signs out -> hide app, show auth screen

// showAuthScreen(view) — switch between the "signin", "signup", and "join" form views.
// "join" is the first-time user screen where they choose to create or join a household.
// Hides the loading spinner and clears any previous error messages.
function showAuthScreen(view) {
  g("auth-loading").style.display = "none";
  g("auth-signin").style.display = view === "signin" ? "flex" : "none";
  g("auth-signup").style.display = view === "signup" ? "flex" : "none";
  g("auth-join").style.display = view === "join" ? "flex" : "none";
  g("authError").style.display = "none";
  g("signupError").style.display = "none";
}

// showAuthError(id, msg) — display an error message in the element with the given ID.
// Used for both the sign-in error container ("authError") and sign-up ("signupError").
function showAuthError(id, msg) {
  const el = g(id);
  if (!el) return;
  el.textContent = msg;
  el.style.display = "block";
}

// friendlyAuthError(err) — translate Firebase's cryptic error codes into
// user-friendly messages. Falls back to the raw error message if unrecognized.
function friendlyAuthError(err) {
  const map = {
    'auth/invalid-email': 'Please enter a valid email address.',
    'auth/user-disabled': 'This account has been disabled.',
    'auth/user-not-found': 'No account found with this email.',
    'auth/wrong-password': 'Incorrect password.',
    'auth/invalid-credential': 'Incorrect email or password.',
    'auth/email-already-in-use': 'An account with this email already exists.',
    'auth/weak-password': 'Password must be at least 6 characters.',
    'auth/too-many-requests': 'Too many attempts. Please try again later.',
    'auth/popup-closed-by-user': 'Sign-in popup was closed.',
    'auth/cancelled-popup-request': 'Sign-in was cancelled.',
    'auth/account-exists-with-different-credential': 'An account already exists with this email using a different sign-in method.',
  };
  return map[err.code] || err.message || 'Something went wrong. Please try again.';
}

// disableBtn(btn, loading) — put a button into a loading state or restore it.
// When loading=true: save original text, show "Please wait...", disable the button.
// When loading=false: restore original text and re-enable the button.
// Prevents double-submits during async auth operations.
function disableBtn(btn, loading) {
  if (!btn) return;
  if (loading) {
    btn._origText = btn.textContent;
    btn.textContent = "Please wait…";
    btn.disabled = true;
  } else {
    btn.textContent = btn._origText || btn.textContent;
    btn.disabled = false;
  }
}

// ── Auth button event listeners ──────────────────────────────────────────────
// Each auth button follows the same pattern:
//   1. Disable the button and show "Please wait..."
//   2. Clear any previous error
//   3. Attempt the sign-in/sign-up
//   4. On failure, show a friendly error message
//   5. Re-enable the button
//
// On success, the onAuth listener (below) fires and boots the app.

// Google sign-in button — opens a Google OAuth popup
g("btnGoogle")?.addEventListener("click", async () => {
  const btn = g("btnGoogle");
  disableBtn(btn, true);
  g("authError").style.display = "none";
  try {
    await signInGoogle();
  } catch (err) {
    showAuthError("authError", friendlyAuthError(err));
  }
  disableBtn(btn, false);
});

// Apple sign-in button — opens an Apple OAuth popup
g("btnApple")?.addEventListener("click", async () => {
  const btn = g("btnApple");
  disableBtn(btn, true);
  g("authError").style.display = "none";
  try {
    await signInApple();
  } catch (err) {
    showAuthError("authError", friendlyAuthError(err));
  }
  disableBtn(btn, false);
});

// Email sign-in button — authenticate with email + password
g("btnEmailSign")?.addEventListener("click", async () => {
  const email = g("authEmail")?.value?.trim();
  const pass = g("authPass")?.value;
  // Client-side validation before making the auth request
  if (!email || !pass) {
    showAuthError("authError", "Please enter your email and password.");
    return;
  }
  const btn = g("btnEmailSign");
  disableBtn(btn, true);
  g("authError").style.display = "none";
  try {
    await signInEmail(email, pass);
  } catch (err) {
    showAuthError("authError", friendlyAuthError(err));
  }
  disableBtn(btn, false);
});

// Email sign-up button — create a new account with name, email, and password
g("btnEmailSignup")?.addEventListener("click", async () => {
  const name = g("signupName")?.value?.trim();
  const email = g("signupEmail")?.value?.trim();
  const pass = g("signupPass")?.value;
  // Validate all three fields before attempting sign-up
  if (!name) {
    showAuthError("signupError", "Please enter your name.");
    return;
  }
  if (!email || !pass) {
    showAuthError("signupError", "Please enter your email and password.");
    return;
  }
  const btn = g("btnEmailSignup");
  disableBtn(btn, true);
  g("signupError").style.display = "none";
  try {
    await signUpEmail(email, pass, name);
  } catch (err) {
    showAuthError("signupError", friendlyAuthError(err));
  }
  disableBtn(btn, false);
});

// "Create account" / "Already have an account?" links to toggle between views
g("btnToggleSignup")?.addEventListener("click", () => showAuthScreen("signup"));
g("btnToggleSignin")?.addEventListener("click", () => showAuthScreen("signin"));

// Allow pressing Enter in the password field to submit the form
// (standard UX — users expect Enter to submit after typing their password)
g("authPass")?.addEventListener("keydown", e => { if (e.key === "Enter") g("btnEmailSign")?.click(); });
g("signupPass")?.addEventListener("keydown", e => { if (e.key === "Enter") g("btnEmailSignup")?.click(); });

// ── Sign out (called from the settings overlay) ─────────────────────────────
// Confirms with the user before signing out. On sign-out, the onAuth listener
// below will fire with user=null and reset the UI to the auth screen.
window.doSignOut = async function() {
  if (!confirm("Sign out of Kitchen?")) return;
  await signOut();
};

// ── Auth state listener — drives the entire app lifecycle ───────────────────
// Firebase calls this callback whenever the auth state changes:
//   - On page load: fires once (user object if session exists, null otherwise)
//   - On sign-in: fires with the user object
//   - On sign-out: fires with null
//
// This is the single entry point that decides whether to show the app or the
// login screen. The `appBooted` flag prevents double-initialization if the
// listener fires multiple times (e.g. token refresh).

let appBooted = false;

/**
 * _bootWithHousehold — starts the app with a given household ID.
 * Shared by all auth paths (returning user, create new, join existing).
 */
function _bootWithHousehold(hid) {
  localStorage.setItem("ks-h", hid);
  g("LS").style.display = "none";
  g("APP").style.display = "flex";
  window._appStart(hid);
}

/**
 * _showJoinScreen — shows the join/create household screen for first-time users.
 * Wires up the two buttons: "Start my own kitchen" and "Join with invite code".
 */
function _showJoinScreen(user) {
  showAuthScreen("join");

  // "Start my own kitchen" — creates a new household for the user.
  // GUARD: If the user already has householdIds with valid membership,
  // do NOT create a new household (prevents ghost recreation).
  g("btnCreateKitchen").onclick = async () => {
    disableBtn(g("btnCreateKitchen"), true);
    try {
      // Check if user already belongs to a household before creating a new one.
      // Handle both `householdId` (singular) and `householdIds` (array) fields.
      const existingProfile = await dbGet(`users/${user.uid}`);
      const existingIds = existingProfile?.householdId
        ? [existingProfile.householdId]
        : (existingProfile?.householdIds || []);
      if (existingIds.length) {
        // User has existing household references — check if any are valid
        for (const hid of existingIds) {
          const hhDoc = await dbGet(`households/${hid}`);
          if (hhDoc && (hhDoc.memberUids || []).includes(user.uid)) {
            // User is already a member of this household — use it instead
            console.log(`[_showJoinScreen] User already belongs to household ${hid}, using that`);
            _bootWithHousehold(hid);
            return;
          }
        }
      }

      // No existing valid membership — safe to create a new household
      const cfgName = state.cfg?.name || "My Kitchen";
      await createHousehold(user.uid, cfgName);

      // Create or update the user profile with the new household.
      // Clear needsHousehold flag and set onboardingDone since user explicitly
      // chose to create a new kitchen (they'll go through onboarding again).
      if (!existingProfile) {
        const profile = await createUserProfile(user);
        profile.householdIds = [user.uid];
        profile.needsHousehold = false;
        await dbSet(`users/${user.uid}`, profile);
      } else {
        await dbSet(`users/${user.uid}`, {
          ...existingProfile,
          householdIds: [user.uid],
          needsHousehold: false,
          id: undefined
        });
      }

      localStorage.removeItem("ks-h");
      const hhs = J("ks-hhs");
      if (hhs) {
        const updated = hhs.filter(h => h !== user.uid);
        updated.push(user.uid);
        localStorage.setItem("ks-hhs", JSON.stringify(updated));
      }
      _bootWithHousehold(user.uid);
    } catch (err) {
      console.error("Create kitchen error:", err);
      showAuthError("joinError", "Something went wrong. Please try again.");
      disableBtn(g("btnCreateKitchen"), false);
    }
  };

  // "Join with invite code" — looks up invite code and joins that household
  g("btnJoinKitchen").onclick = async () => {
    const code = g("joinCode")?.value?.trim()?.toUpperCase();
    if (!code) {
      showAuthError("joinError", "Please enter an invite code.");
      return;
    }
    disableBtn(g("btnJoinKitchen"), true);
    g("joinError").style.display = "none";
    try {
      // First create the user profile if it doesn't exist yet
      let userDoc = await dbGet(`users/${user.uid}`);
      if (!userDoc) {
        userDoc = await createUserProfile(user);
      }

      // Join the household via invite code
      const hid = await joinHouseholdByCode(code, user);
      if (!hid) {
        showAuthError("joinError", "Invalid invite code. Check and try again.");
        disableBtn(g("btnJoinKitchen"), false);
        return;
      }

      // Update localStorage cache
      const arr = J("ks-hhs") || [];
      if (!arr.includes(hid)) arr.push(hid);
      Js("ks-hhs", arr);

      _bootWithHousehold(hid);
    } catch (err) {
      console.error("Join kitchen error:", err);
      showAuthError("joinError", "Something went wrong. Please try again.");
      disableBtn(g("btnJoinKitchen"), false);
    }
  };
}

onAuth(async (user) => {
  if (user) {
    // ── User is signed in ──

    // Cache the user's display name in localStorage for quick access
    // (used in the UI header, chat messages, etc.)
    localStorage.setItem("ks-who", user.displayName || user.email?.split("@")[0] || "You");

    // Only boot the app once per session — ignore subsequent auth state events
    if (!appBooted) {
      appBooted = true;
      try {
        // Determine if this is a returning user or a first-time login.
        // Primary check: look for a user profile doc in Firestore.
        // Fallback check: if Firestore returns null (network issue), also
        // check localStorage "ks-h" — if present, the user has used the app
        // before and should skip the join screen.
        const userDoc = await dbGet(`users/${user.uid}`);
        const cachedHid = localStorage.getItem("ks-h");
        const cachedHhs = J("ks-hhs");
        const isReturningUser = !!userDoc || !!cachedHid || (cachedHhs && cachedHhs.length > 0);

        if (isReturningUser) {
          // Returning user — resolve household and boot normally.
          // resolveHousehold returns null if user has householdIds but none
          // are valid — in that case, show the join screen instead of
          // falling back to uid (which would recreate a ghost household).
          const hid = await resolveHousehold(user);
          if (hid) {
            g("LS").style.display = "none";
            g("APP").style.display = "flex";
            _bootWithHousehold(hid);
          } else {
            // No valid household found — show join/create screen so user
            // can join a household properly instead of auto-creating a ghost
            console.warn("[onAuth] resolveHousehold returned null — showing join screen");
            _showJoinScreen(user);
          }
        } else {
          // First-time user — show join/create household screen
          _showJoinScreen(user);
        }
      } catch (err) {
        console.error("Failed to resolve household:", err);
        // CRITICAL: Do NOT fall back to user.uid as household ID.
        // That creates ghost households for users who belong to shared ones.
        // Instead, show the join screen so the user can recover properly.
        console.warn("[onAuth] Error during household resolution — showing join screen");
        _showJoinScreen(user);
      }
    }
  } else {
    // ── User is signed out ──
    // Stop all real-time Firestore listeners to prevent memory leaks
    stopRealtimeSync();
    // Stop the 30-second polling interval so it doesn't fire after sign-out
    stopPoll();
    // Reset the boot flag so a fresh sign-in will re-initialize the app
    appBooted = false;
    // Hide the app and show the login/auth screen
    g("APP").style.display = "none";
    g("LS").style.display = "flex";
    showAuthScreen("signin");
  }
});
