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
import { dbList, dbGet, dbSet, dbDelete, loadFirestoreData, renderCallbacks, ss, svi, dli, svr, dlr, svShopItem, dlShopItem, resolveHousehold, joinHouseholdByCode, createHousehold, createUserProfile, pausePoll, resumePoll, stopPoll, checkUsernameAvailable, setUsername, loadUsername, checkMembershipValid } from './db.js';

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
import { renderInv, openAdj, remItem, updL, adjQ, adjQD, adjE, adjNote, adjUnit, adjDoNotRestock, setIT, addManual, valMA, chgMQ, selML, importDoc, adjLowThresh, adjLowThreshD, openInvAddSheet, closeInvAddSheet, invAddScan, invAddVoice, setInvAddLoc, toggleInvAddNote, qaddInv, onInvInput, pickInvInlineResult, initInvVoice, toggleInvVoice, stopInvVoice, openInvItemDetail, closeInvItemDetail, deleteInvItemImage, triggerInvPhotoUpload, handleInvPhotoSelected, addInvToShopping, changeInvUnit, changeInvThreshold, changeInvThresholdDirect, toggleDoNotRestock, changeInvLocation, changeInvQty, changeInvQtyDirect, changeInvFrac, changeInvThreshFrac, changeInvExpiry, clearInvExpiry, setInvExpiry, changeInvNote, editInvDetailName, saveInvDetailName, editInvDetailSubtitle, saveInvDetailSubtitle, editInvDetailCombined, saveInvDetailCombined, initInvQtyToolbar, invQtyStep, invFracChange, resetInvStagger, openInvAddCatPicker, changeInvCategory, changeInvEmoji, toggleInvViewMode, filterInvSearch, openCategoryReview, closeCategoryReview, confirmCatReview, changeCatReview } from './ui/inventory.js';

// Shopping screen: quick-add, toggle items, aisle grouping, share list,
// "add to kitchen" flow, bulk purchase, deal search
import { renderShop, qadd, togShop, toggleShNote, saveShNote, openShQty, adjShQty, saveShQty, togAisle, setSHT, shareList, openAddToKitchen, setAtkLoc, confirmAddToKitchen, buildList, bpTog, bpSelAll, bpConfirm, searchDeals, dealsFromList, addDealToList, renderDealsZipBanner, loadFlippDeals, refreshFlippDeals, filterDealStore, filterDealsLocal, loadMoreDeals, setDealsPageSize, initVoice, toggleVoice, stopVoice, recordCompleted, toggleAddNote, openShopAddSheet, closeShopAddSheet, shopAddScan, shopAddVoice, closeEnrichSheet, pickEnrichResult, searchAndEnrich, onShopInput, pickInlineResult, openItemDetail, closeItemDetail, deleteItemImage, triggerProductPhotoUpload, handleProductPhotoSelected, changeShopUnit, changeShopQty, changeShopQtyDirect, changeShopFrac, confirmVoiceMultiAdd, cancelVoiceMulti, editShopDetailName, saveShopDetailName, editShopDetailSubtitle, saveShopDetailSubtitle, editShopDetailCombined, saveShopDetailCombined, initShopQtyToolbar, shopQtyStep, shopFracChange, toggleShopDone, resetShopStagger, openShopAddCatPicker, changeShopCategory, loadCoupons, refreshCoupons, searchCoupons, filterCouponCat, filterCouponsLocal, clipCoupon, loadMoreCoupons, setCouponsPageSize, toggleCouponsSection, toggleDealsSection } from './ui/shopping.js';

// Recipes screen: CRUD, favorites, import from URL, scale servings, "what can I make",
// add recipe ingredients to shopping list, star rating, tag filtering
import { renderRecs, togFav, valR, importFromUrl, setImportMode, startBulkImport, retryBulkImport, saveRec, openER, openRecipeView, handleRecipeBack, updR, delER, scaleRec, whatCanIMake, addRecIngToShop, setStar, setRT, togTag, togglePublic, loadCommunity, setComCuisine, setComSearch, setComSort, toggleComTag, setComTime, setComMinRating, renderCommunity, openComRecipe, likeComRecipe, saveComToKitchen, addComComment, shareComRecipe, submitComReview, unpublishComRecipe, rateComRecipe, clearComRating, deleteComComment, openReportSheet, closeReportSheet, submitComReport, loadMoreComments, updateNotifBadge, openNotifications, openComRecipeFromNotif, triggerCoverUpload, handleCoverSelected, handleCoverDrop, removeCoverPhoto, triggerStepPhotoUpload, handleStepPhotoSelected, removeStepPhoto, openPhotoViewer, closePhotoViewer, photoViewerNav, triggerCommentPhotoUpload, handleCommentPhotosSelected, removeCommentPhoto, recipeTimeChanged, markTotalTimeManual, selectDifficulty, setRecSearch, setRecSort, toggleFilterPanel, setRecDifficulty, setRecCookTime, setRecServes, toggleRecProtein, toggleRecTag, toggleRecTagsExpand, clearRecFilters, toggleComTagsPanel, clearComFilters, setViewStar, editComRecipe, saveComRecipeEdit, parseRecipeWithAI, closeParsePreview, applyParsedRecipe, editHouseholdNotes, saveHouseholdNotes, resetRecipeStagger, toggleRecSearchPanel, closeRecSearchPanel, hideRecSearchFab } from './ui/recipes.js';

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
import { openShoppingPrep, closeShoppingPrep, openPrepCategory, backToGrid, prepToggleVerify, prepAddToShop, prepAddAllLow, prepAddNewItem, prepRecategorize, prepCatLongPress, filterPrepSearch, prepPickerStep, prepConfirmAdd, dismissPrepPopover, openPrepAddCategory, openPrepCatEmojiPicker, confirmPrepAddCategory, prepCatRename, prepCatAddSub, prepCatReorder, prepCatDelete } from './ui/shoppingprep.js';
import { selectCategory, closeCategoryPicker, showCreateCustomCategory, pickCustomEmoji, confirmCreateCustomCategory, deleteCustomCategory, openCatCreateEmojiPicker, selectEmojiFromPicker, closeEmojiPicker, confirmItemCategory, saveProductCategory } from './ui/categorypicker.js';

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

// ── SCREEN NAVIGATION (Phase 1 — Two-World System) ──────────────────────────
// The app now has two "worlds": Kitchen and Home. Each world has its own set of
// 5 tabs and its own bottom navigation bar. A world switcher (segmented pill)
// sits below the status bar and lets the user toggle between worlds.
//
// Kitchen world tabs: k-overview, k-pantry, k-shopping, k-supplies, k-deals
// Home world tabs: h-overview, h-todos, h-cleaning, h-maintain, h-game
//
// In Phase 1, all tabs render placeholder screens. The existing feature screens
// (home, inventory, recipes, shopping, insights, chat) are preserved in the HTML
// but never activated — they'll be re-wired in Phase 2.

// Tab orders for each world — matches bottom nav layout left-to-right
const KITCHEN_TABS = ["k-overview", "k-pantry", "k-shopping", "k-supplies", "k-deals"];
const HOME_TABS    = ["h-overview", "h-todos", "h-cleaning", "h-maintain", "h-game"];

// ── TAB-TO-SCREEN MAPPING ──
// Maps new Phase 1 tab names to the legacy screen element IDs. This lets the
// new bottom nav tabs activate the original, fully-functional screens without
// moving any HTML. Tabs not listed here use their own screen (screen-{tabName}).
// k-pantry and k-supplies both show the full Inventory/Supplies screen.
// k-shopping shows the Shopping list screen (My List sub-tab active).
// k-deals shows the Shopping screen (Deals sub-tab active).
const TAB_SCREEN_MAP = {
  "k-pantry":   "inventory",
  "k-shopping": "shopping",
  "k-supplies": "inventory",
  "k-deals":    "shopping",
};

// _activeWorld tracks which world is currently displayed ("kitchen" or "home")
let _activeWorld = "kitchen";

// _getTabOrder() — returns the tab order array for the currently active world
function _getTabOrder() {
  return _activeWorld === "kitchen" ? KITCHEN_TABS : HOME_TABS;
}

// Legacy TAB_ORDER reference — kept for backward compatibility with any code
// that references it. Points to the Kitchen tabs by default.
// PHASE 2: remove this once all references are updated.
const TAB_ORDER = KITCHEN_TABS;

// Nav item ID prefix for each world — maps tab name to its nav item element ID
// e.g. "k-overview" → "knav-overview", "h-todos" → "hnav-todos"
function _navItemId(tabName) {
  // Strip the world prefix ("k-" or "h-") and prepend the nav prefix
  const prefix = tabName.startsWith("k-") ? "knav-" : "hnav-";
  return prefix + tabName.substring(2);
}

// _showTabError(tabName) — displays a friendly error state inside a tab's screen
// element when its render function throws. Prevents "A problem repeatedly occurred"
// Safari crash by containing the failure to just one tab.
function _showTabError(tabName) {
  const screen = g("screen-" + tabName);
  if (!screen) return;
  const body = screen.querySelector(".hbody, .ibody, .rbody, .shbody, .placeholder-screen") || screen;
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

// _currentTabName — tracks which tab is currently active. Null on initial boot.
// We track this in a variable rather than scanning DOM .active classes because
// mapped tabs (e.g. k-pantry → screen-inventory) don't activate screen-k-pantry.
let _currentTabName = null;

// _currentTab() — returns the currently active tab name, or null before first show.
function _currentTab() {
  return _currentTabName;
}

// _snapAllScreens() — immediately snap all screens to their resting positions
// (no transition). Used to cancel in-progress transitions during rapid switching.
function _snapAllScreens() {
  document.querySelectorAll(".screen").forEach(s => {
    s.classList.add("no-transition");
    s.classList.remove("active", "slide-left");
  });
  void document.body.offsetHeight;
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("no-transition"));
}

// _resolveScreenEl(tabName) — returns the actual DOM screen element for a tab.
// Uses TAB_SCREEN_MAP to redirect mapped tabs (e.g. "k-pantry" → "screen-inventory").
// Unmapped tabs use their own screen element (e.g. "k-overview" → "screen-k-overview").
function _resolveScreenEl(tabName) {
  const mapped = TAB_SCREEN_MAP[tabName];
  return g(mapped ? "screen-" + mapped : "screen-" + tabName);
}

// _onTabEnter(tabName) — called after a tab becomes active. Triggers any
// rendering or sub-tab switching needed for that tab's content.
// This is what restores the old feature screens to life within the new nav.
function _onTabEnter(tabName) {
  try {
    switch (tabName) {
      case "k-pantry":
      case "k-supplies":
        // Both Pantry and Supplies show the full Inventory/Supplies screen.
        // Re-render the list so it reflects latest state data.
        renderInv();
        renderAll();
        break;
      case "k-shopping":
        // Show the Shopping screen with "My List" sub-tab active.
        // setSHT switches the internal tab and re-renders the list.
        setSHT("list");
        renderShop();
        break;
      case "k-deals":
        // Show the Shopping screen with "Deals" sub-tab active.
        // setSHT handles the email gate check and loads deals/coupons.
        setSHT("deals");
        break;
      case "k-overview":
        // Kitchen Overview — render the dashboard with stats, dinner, activity
        renderKitchenOverview();
        break;
      case "h-overview":
      case "h-todos":
      case "h-cleaning":
      case "h-maintain":
      case "h-game":
        // Home world tabs — load home data lazily on first entry, then render
        _loadHomeData().then(() => {
          _checkWeekReset().then(() => {
            switch (tabName) {
              case "h-overview": renderHomeOverview(); break;
              case "h-todos": renderHomeTodos(); break;
              case "h-cleaning": renderHomeCleaning(); break;
              case "h-maintain": renderHomeMaintain(); break;
              case "h-game": renderHomeGame(); break;
            }
          });
        });
        break;
      default:
        break;
    }
  } catch (e) {
    console.error("[_onTabEnter] Error entering tab", tabName, e);
    _showTabError(tabName);
  }
}

// showScreen(n) — switch to the named screen with a directional slide transition.
// Determines slide direction from the active world's tab order index.
// Uses TAB_SCREEN_MAP to resolve mapped tabs to their legacy screen elements.
// On first call (no screen active yet), skip the transition and snap visible.
window.showScreen = function(n) {
  const cur = _currentTab();

  // Avoid re-entering the same tab
  if (cur === n) return;

  // Determine which world this tab belongs to
  const tabOrder = KITCHEN_TABS.includes(n) ? KITCHEN_TABS : HOME_TABS;

  // Resolve the actual screen DOM elements via mapping
  const incoming = _resolveScreenEl(n);
  const outgoing = cur ? _resolveScreenEl(cur) : null;

  // ── Same-screen transition (e.g. k-pantry ↔ k-supplies both → screen-inventory) ──
  // When two tabs map to the same screen element, skip the slide animation
  // and just update nav highlighting + trigger the new tab's enter logic.
  if (cur !== null && incoming && outgoing && incoming === outgoing) {
    _currentTabName = n;
    _highlightNavItem(n);
    _updateFAB(n);
    _onTabEnter(n);
    return;
  }

  // ── First-load fast path ──
  // On initial boot, no screen has .active yet. Snap instantly — no transition.
  if (cur === null) {
    console.log("[showScreen] First load — snapping", n, "visible (no transition)");
    if (incoming) {
      incoming.classList.add("no-transition", "active");
      void incoming.offsetHeight;
      incoming.classList.remove("no-transition");
    }
    _currentTabName = n;
    _highlightNavItem(n);
    _updateFAB(n);
    _onTabEnter(n);
    return;
  }

  // If mid-transition, snap all screens to resting positions first
  if (_transitioning) {
    clearTimeout(_transitionTimer);
    _snapAllScreens();
    _transitioning = false;
  }

  // Close any open overlays before switching
  document.querySelectorAll(".ov.active").forEach(o => o.classList.remove("active"));

  // Stop any active speech recognition from the outgoing tab
  stopVoice();
  stopInvVoice();

  // Determine slide direction from tab order indices
  const curIdx = tabOrder.indexOf(cur);
  const nextIdx = tabOrder.indexOf(n);
  // If switching worlds, default to sliding right
  const goingRight = curIdx === -1 ? true : nextIdx > curIdx;

  // Update current tab name before animation starts
  _currentTabName = n;

  // Highlight the correct nav item
  _highlightNavItem(n);

  // Mark transition in progress
  _transitioning = true;

  if (goingRight) {
    // Outgoing slides left, incoming slides in from right
    if (outgoing) {
      outgoing.classList.remove("active");
      outgoing.classList.add("slide-left");
    }
    if (incoming) {
      incoming.classList.remove("slide-left");
      incoming.classList.add("active");
    }
  } else {
    // Incoming from left, outgoing exits right
    if (incoming) {
      incoming.classList.add("no-transition", "slide-left");
      incoming.classList.remove("active");
      void incoming.offsetHeight;
      incoming.classList.remove("no-transition");
      incoming.classList.remove("slide-left");
      incoming.classList.add("active");
    }
    if (outgoing) {
      outgoing.classList.remove("active", "slide-left");
    }
  }

  // Clear slide-left after transition completes
  _transitionTimer = setTimeout(() => {
    _transitioning = false;
    document.querySelectorAll(".screen:not(.active)").forEach(s => s.classList.remove("slide-left"));
  }, 320);

  // Reset stagger entrance flags so animations play fresh on tab switch
  resetInvStagger();
  resetShopStagger();
  resetRecipeStagger();

  // Trigger tab-specific rendering (loads data into the legacy screen)
  _onTabEnter(n);

  // Update FAB for the new tab
  _updateFAB(n);
};

// _highlightNavItem(tabName) — deactivates all nav items in the active world's
// bottom nav, then highlights the item matching tabName.
function _highlightNavItem(tabName) {
  // Determine which nav bar to update
  const navId = tabName.startsWith("k-") ? "nav-kitchen" : "nav-home-world";
  const navEl = g(navId);
  if (!navEl) return;
  // Deactivate all items in this nav bar
  navEl.querySelectorAll(".wn-item").forEach(item => item.classList.remove("active"));
  // Activate the matching item
  const targetId = _navItemId(tabName);
  g(targetId)?.classList.add("active");
}

// switchWorld(world) — toggles between "kitchen" and "home" worlds.
// Updates the world switcher buttons, swaps bottom nav bars, and navigates
// to the first tab of the target world. Always applies the full state to
// prevent desyncs — no early return if already on the same world, so a
// single tap always produces the correct visual state.
window.switchWorld = function(world) {
  // Skip navigation if already on this world, but still apply visual state
  // below to prevent desyncs (e.g. stale button highlights).
  const alreadyActive = (world === _activeWorld);
  _activeWorld = world;

  // Update world switcher pill button states — active gets green bg + white text,
  // inactive gets transparent bg + muted text
  const kitchenBtn = g("ws-kitchen");
  const homeBtn = g("ws-home");
  if (world === "kitchen") {
    kitchenBtn?.classList.add("ws-active");
    homeBtn?.classList.remove("ws-active");
  } else {
    homeBtn?.classList.add("ws-active");
    kitchenBtn?.classList.remove("ws-active");
  }

  // Swap bottom nav bars — show the active world's nav, hide the other
  const kitchenNav = g("nav-kitchen");
  const homeNav = g("nav-home-world");
  if (world === "kitchen") {
    if (kitchenNav) kitchenNav.style.display = "flex";
    if (homeNav) homeNav.style.display = "none";
  } else {
    if (kitchenNav) kitchenNav.style.display = "none";
    if (homeNav) homeNav.style.display = "flex";
  }

  // Navigate to the first tab of the target world (skip if already there
  // to avoid re-rendering the same screen unnecessarily)
  if (!alreadyActive) {
    const firstTab = world === "kitchen" ? KITCHEN_TABS[0] : HOME_TABS[0];
    window.showScreen(firstTab);
  }
};

// ── CONTEXT-AWARE FLOATING ACTION BUTTON ─────────────────────────────────────
// The FAB shows a "+" icon per tab. No text label — just a circle that starts
// large and fully opaque, then shrinks + fades to 85% transparent after 0.5s.
// Phase 1: FAB is hidden on all placeholder tabs. Phase 2 will re-enable it.
// FAB actions per tab — shows a "+" button with the configured onclick.
// Tabs without an entry hide the FAB. Deals tab has no FAB (browse-only).
const FAB_CONFIG = {
  "k-overview":  { action: "openHomeFabSheet()",  ariaLabel: "Add item" },
  "k-pantry":    { action: "openInvAddSheet()",   ariaLabel: "Add supply" },
  "k-shopping":  { action: "openShopAddSheet()",  ariaLabel: "Add to list" },
  "k-supplies":  { action: "openInvAddSheet()",   ariaLabel: "Add supply" },
  "h-todos":     { action: "openTodoAddSheet()",  ariaLabel: "Add to-do" },
  "h-cleaning":  { action: "openChoreAddSheet()", ariaLabel: "Add chore" },
  "h-maintain":  { action: "openMaintAddSheet()", ariaLabel: "Add task" },
};

// _fabSettleTimer — tracks the 0.5-second timeout before FAB shrinks + fades
let _fabSettleTimer = null;

// _updateFAB(tab) — shows/hides the FAB and sets its onclick for the given tab
function _updateFAB(tab) {
  const fab = g("fab-btn");
  if (!fab) return;
  const cfg = FAB_CONFIG[tab];
  if (!cfg) {
    // Hide FAB for tabs without a configured action (all Phase 1 placeholder tabs)
    fab.classList.add("hidden");
    fab.classList.remove("settled");
    clearTimeout(_fabSettleTimer);
  } else {
    fab.style.transition = "none";
    fab.classList.remove("hidden", "settled");
    fab.offsetHeight;
    fab.style.transition = "";
    fab.innerHTML = `<span class="fab-icon">＋</span>`;
    fab.setAttribute("onclick", cfg.action);
    fab.setAttribute("aria-label", cfg.ariaLabel);
    clearTimeout(_fabSettleTimer);
    _fabSettleTimer = setTimeout(() => {
      fab.classList.add("settled");
    }, 500);
  }
}

// ── SWIPE-BETWEEN-TABS GESTURE ───────────────────────────────────────────────
// Horizontal swipe on the main app area navigates between adjacent tabs
// within the current world. Uses touch events with 50px threshold and
// 30deg max angle to prevent false triggers during vertical scrolling.
function _initTabSwipe() {
  let startX = 0, startY = 0, tracking = false;
  const THRESHOLD = 50;
  const MAX_ANGLE = 30;

  const appEl = g("APP");
  if (!appEl) return;

  appEl.addEventListener("touchstart", (e) => {
    if (e.target.closest(".bsheet, .ov, .modal, .chmsgs")) return;
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

    if (absDx < THRESHOLD || absDy > absDx * Math.tan(MAX_ANGLE * Math.PI / 180)) return;

    // Swipe within the current world's tab order
    const tabs = _getTabOrder();
    const cur = _currentTab();
    const idx = tabs.indexOf(cur);
    if (idx === -1) return;

    const nextIdx = dx < 0 ? idx + 1 : idx - 1;
    if (nextIdx >= 0 && nextIdx < tabs.length) {
      window.showScreen(tabs[nextIdx]);
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
window.prepAddNewItem = prepAddNewItem;       // Open add-item sheet from prep detail view
window.prepRecategorize = prepRecategorize;   // Open category picker to recategorize an item in prep
window.prepCatLongPress = prepCatLongPress;   // Long-press handler for custom category cards in prep grid
window.filterPrepSearch = filterPrepSearch;   // Search bar filter handler for Shopping Prep
window.prepPickerStep = prepPickerStep;       // Qty stepper in cart popover quantity picker
window.prepConfirmAdd = prepConfirmAdd;       // Confirm add from cart popover quantity picker
window.dismissPrepPopover = dismissPrepPopover; // Dismiss cart popover without adding
window.openPrepAddCategory = openPrepAddCategory; // Open inline add-category form in prep grid
window.openPrepCatEmojiPicker = openPrepCatEmojiPicker; // Emoji picker for prep add-category form
window.confirmPrepAddCategory = confirmPrepAddCategory; // Confirm new category from prep form
window.prepCatRename = prepCatRename;         // Rename custom category from long-press menu
window.prepCatAddSub = prepCatAddSub;         // Add sub-category from long-press menu
window.prepCatReorder = prepCatReorder;       // Reorder custom category from long-press menu
window.prepCatDelete = prepCatDelete;         // Delete custom category from long-press menu

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
window.changeInvEmoji = changeInvEmoji;                       // Open emoji picker to customize a supply item's emoji
window.toggleInvViewMode = toggleInvViewMode;                 // No-op (shelf view removed, always flat list)
window.filterInvSearch = filterInvSearch;                     // Search bar filter handler for Supplies tab
window.openCategoryReview = openCategoryReview;               // Open category review overlay
window.closeCategoryReview = closeCategoryReview;             // Close category review overlay
window.confirmCatReview = confirmCatReview;                   // Confirm suggested category in review
window.changeCatReview = changeCatReview;                     // Change category in review via picker
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
// ── Floating recipe search FAB handlers ──
window.toggleRecSearchPanel = toggleRecSearchPanel; // Toggle floating search/filter panel open/closed
window.closeRecSearchPanel = closeRecSearchPanel;   // Close the floating search panel
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

// ══════════════════════════════════════════════════════════════════════════════
// KITCHEN OVERVIEW — Dashboard for the Kitchen world's first tab (k-overview)
// Shows greeting, quick stats, dinner prompt, and recent activity.
// ══════════════════════════════════════════════════════════════════════════════

/**
 * _getTimeGreeting() — returns a time-of-day greeting string.
 * Uses the current hour to determine morning/afternoon/evening.
 */
function _getTimeGreeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
}

/**
 * _getUserFirstName() — returns the current user's first name from localStorage.
 * Falls back to "there" if no name is stored.
 */
function _getUserFirstName() {
  const who = localStorage.getItem("ks-who") || "there";
  return who.split(" ")[0];
}

/**
 * _formatDateLong() — returns today's date in a nice long format like "Friday, June 6, 2026"
 */
function _formatDateLong() {
  return new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
}

/**
 * renderKitchenOverview() — renders the Kitchen Overview tab content.
 * Pulls data from state.inv (low items, expiring), state.shop (list count),
 * and state.activity (recent actions). Builds the HTML into screen-k-overview.
 */
function renderKitchenOverview() {
  const el = g("screen-k-overview");
  if (!el) return;

  const name = _getUserFirstName();
  const greeting = _getTimeGreeting();
  const dateStr = _formatDateLong();

  // Count low-stock items (qty <= lowThreshold, excluding doNotRestock)
  const lowItems = (state.inv || []).filter(i =>
    !i.doNotRestock && i.qty != null && i.lowThreshold != null && i.qty <= i.lowThreshold
  );

  // Count items on shopping list (unchecked only)
  const shopCount = (state.shop || []).filter(i => !i.checked).length;

  // Count items expiring within 3 days
  const now = new Date();
  const threeDays = new Date(now.getTime() + 3 * 86400000);
  const expiringItems = (state.inv || []).filter(i => {
    if (!i.exp) return false;
    const d = new Date(i.exp);
    return d <= threeDays && d >= now;
  });

  // Tonight's dinner from meal plan
  const todayKey = now.toISOString().split("T")[0];
  const tonightMeal = state.mp?.[todayKey] || null;

  // Recent activity — last 3 entries
  const recentActivity = (state.activity || []).slice(0, 3);

  el.innerHTML = `
    <div class="ko-header">
      <div>
        <div class="ko-greeting">${greeting}, <span>${name}</span></div>
        <div class="ko-date">${dateStr}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <div class="srow" style="margin:0"><span class="sdot" id="sdot-ko"></span></div>
        <div class="setbtn" onclick="showOv('settings')">⚙️</div>
      </div>
    </div>
    <div class="ko-body">
      <!-- Quick Stats Row -->
      <div class="ko-stats-row">
        <div class="ko-stat-card" onclick="showScreen('k-pantry')">
          <div class="ko-stat-icon">📦</div>
          <div class="ko-stat-val">${lowItems.length}</div>
          <div class="ko-stat-label">Running Low</div>
        </div>
        <div class="ko-stat-card" onclick="showScreen('k-shopping')">
          <div class="ko-stat-icon">🛒</div>
          <div class="ko-stat-val">${shopCount}</div>
          <div class="ko-stat-label">On My List</div>
        </div>
        <div class="ko-stat-card" onclick="showScreen('k-pantry')">
          <div class="ko-stat-icon">⏰</div>
          <div class="ko-stat-val">${expiringItems.length}</div>
          <div class="ko-stat-label">Expiring Soon</div>
        </div>
      </div>

      <!-- What's for dinner card -->
      <div class="ko-section-label">Tonight's Dinner</div>
      <div class="ko-dinner-card" onclick="${tonightMeal ? '' : "showScreen('k-pantry')"}">
        <div class="ko-dinner-icon">${tonightMeal ? '🍽️' : '🤔'}</div>
        <div class="ko-dinner-content">
          <div class="ko-dinner-title">${tonightMeal || "What's for dinner?"}</div>
          <div class="ko-dinner-sub">${tonightMeal ? 'Planned for tonight' : 'No meal planned yet — check your pantry for inspiration!'}</div>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="ko-section-label">Recent Activity</div>
      ${recentActivity.length ? recentActivity.map(a => `
        <div class="ko-activity-row">
          <div class="ko-activity-icon">${a.icon || '📝'}</div>
          <div class="ko-activity-text">
            <div class="ko-activity-desc">${a.text || a.action || 'Activity'}</div>
            <div class="ko-activity-time">${_relativeTime(a.ts)}</div>
          </div>
        </div>
      `).join("") : `
        <div class="ko-empty-activity">
          <div style="opacity:.5;font-size:1.5rem;margin-bottom:8px">📋</div>
          <div>No recent activity yet</div>
          <div style="font-size:.75rem;color:var(--mt);margin-top:4px">Actions you take will appear here</div>
        </div>
      `}
    </div>
  `;
}

/**
 * _relativeTime(ts) — converts a timestamp (ISO string or ms) to a human-readable
 * relative time string like "2 min ago", "3 hrs ago", "yesterday".
 */
function _relativeTime(ts) {
  if (!ts) return "";
  const d = typeof ts === "string" ? new Date(ts) : new Date(ts);
  const diff = Date.now() - d.getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins} min ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs} hr${hrs > 1 ? "s" : ""} ago`;
  const days = Math.floor(hrs / 24);
  if (days === 1) return "yesterday";
  if (days < 7) return `${days} days ago`;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

// ══════════════════════════════════════════════════════════════════════════════
// HOME WORLD — Full implementation of all 5 tabs
// Data stored in Firestore under households/{hid}/home_*
// ══════════════════════════════════════════════════════════════════════════════

// ── HOME DATA LOADING ────────────────────────────────────────────────────────

/**
 * _loadHomeData() — lazily loads all Home world data from Firestore.
 * Called once when user first switches to the Home world. Sets state.homeDataLoaded
 * to prevent redundant fetches. Loads todos, chores, maintenance, and game state.
 */
async function _loadHomeData() {
  if (state.homeDataLoaded) return;
  ss("syncing");
  try {
    const [todos, chores, maint, game] = await Promise.allSettled([
      dbList(`households/${state.hid}/home_todos`),
      dbList(`households/${state.hid}/home_chores`),
      dbList(`households/${state.hid}/home_maintenance`),
      dbGet(`households/${state.hid}/home_config/gameState`),
    ]);
    state.homeTodos = todos.status === "fulfilled" ? todos.value : [];
    state.homeChores = chores.status === "fulfilled" ? chores.value : [];
    state.homeMaint = maint.status === "fulfilled" ? maint.value : [];
    state.homeGame = game.status === "fulfilled" && game.value ? game.value : _defaultGameState();

    // If chores list is empty, seed default chores
    if (!state.homeChores.length) await _seedDefaultChores();
    // If maintenance list is empty, seed default maintenance tasks
    if (!state.homeMaint.length) await _seedDefaultMaintenance();
    // Ensure game state doc exists in Firestore
    if (!game.value) await _saveGameState();

    state.homeDataLoaded = true;
    ss("synced");
  } catch (e) {
    console.error("[_loadHomeData] Error:", e);
    ss("error");
    // Still mark as loaded to prevent infinite retry loops
    state.homeDataLoaded = true;
  }
}

/**
 * _defaultGameState() — returns a fresh game state object with zeroed scores.
 * Used when no game state document exists in Firestore yet.
 */
function _defaultGameState() {
  return {
    boraWeekPts: 0,
    bushraWeekPts: 0,
    boraAllTimePts: 0,
    bushraAllTimePts: 0,
    boraSeasonPts: 0,
    bushraSeasonPts: 0,
    seasonStart: new Date().toISOString().split("T")[0],
    weekStart: _getWeekStart(),
    lastConsequence: null,
    weeklyHistory: [],
    boraStreak: 0,
    bushraStreak: 0,
    boraPowerCards: ["shield", "swap", "ghost", "double"],
    bushraPowerCards: ["shield", "swap", "ghost", "double"],
  };
}

/**
 * _getWeekStart() — returns the ISO date string for the start (Monday) of the current week.
 */
function _getWeekStart() {
  const d = new Date();
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(d.setDate(diff));
  return monday.toISOString().split("T")[0];
}

/**
 * _checkWeekReset() — checks if the current game week has ended. If the stored
 * weekStart differs from the actual current week start, archives the old week's
 * scores into weeklyHistory and resets weekly points to zero.
 */
async function _checkWeekReset() {
  const gs = state.homeGame;
  if (!gs) return;
  const currentWeekStart = _getWeekStart();
  if (gs.weekStart !== currentWeekStart) {
    // Archive the completed week
    const weekRecord = {
      weekStart: gs.weekStart,
      boraPoints: gs.boraWeekPts,
      bushraPoints: gs.bushraWeekPts,
      winner: gs.boraWeekPts > gs.bushraWeekPts ? "Bora" : gs.bushraWeekPts > gs.boraWeekPts ? "Bushra" : "Tie",
      consequence: gs.lastConsequence || null,
    };
    gs.weeklyHistory = [weekRecord, ...(gs.weeklyHistory || [])].slice(0, 12);
    // Update streaks
    if (gs.boraWeekPts > gs.bushraWeekPts) { gs.boraStreak = (gs.boraStreak || 0) + 1; gs.bushraStreak = 0; }
    else if (gs.bushraWeekPts > gs.boraWeekPts) { gs.bushraStreak = (gs.bushraStreak || 0) + 1; gs.boraStreak = 0; }
    else { gs.boraStreak = 0; gs.bushraStreak = 0; }
    // Reset weekly points
    gs.boraWeekPts = 0;
    gs.bushraWeekPts = 0;
    gs.weekStart = currentWeekStart;
    gs.lastConsequence = null;
    await _saveGameState();
  }
  // Check season reset (30 days)
  if (gs.seasonStart) {
    const seasonDays = Math.floor((Date.now() - new Date(gs.seasonStart).getTime()) / 86400000);
    if (seasonDays >= 30) {
      gs.boraSeasonPts = 0;
      gs.bushraSeasonPts = 0;
      gs.seasonStart = new Date().toISOString().split("T")[0];
      await _saveGameState();
    }
  }
}

/**
 * _awardPoints(who, pts) — awards points to "Bora" or "Bushra" across all
 * point buckets (weekly, all-time, season) and persists to Firestore.
 */
async function _awardPoints(who, pts) {
  const gs = state.homeGame;
  if (!gs) return;
  await _checkWeekReset();
  if (who === "Bora") {
    gs.boraWeekPts = (gs.boraWeekPts || 0) + pts;
    gs.boraAllTimePts = (gs.boraAllTimePts || 0) + pts;
    gs.boraSeasonPts = (gs.boraSeasonPts || 0) + pts;
  } else {
    gs.bushraWeekPts = (gs.bushraWeekPts || 0) + pts;
    gs.bushraAllTimePts = (gs.bushraAllTimePts || 0) + pts;
    gs.bushraSeasonPts = (gs.bushraSeasonPts || 0) + pts;
  }
  await _saveGameState();
}

/**
 * _saveGameState() — persists the current game state to Firestore.
 */
async function _saveGameState() {
  try {
    const data = { ...state.homeGame };
    delete data.id;
    await dbSet(`households/${state.hid}/home_config/gameState`, data);
  } catch (e) {
    console.error("[_saveGameState]", e);
  }
}

// ── DEFAULT DATA SEEDING ─────────────────────────────────────────────────────

/**
 * _seedDefaultChores() — pre-populates the cleaning schedule with sensible
 * default chores. Only called when home_chores collection is empty.
 */
async function _seedDefaultChores() {
  const defaults = [
    { name: "Vacuum living room", frequency: "weekly", assignee: "Rotating", room: "Living Room", nextDue: _nextDueFromFreq("weekly") },
    { name: "Vacuum bedrooms", frequency: "weekly", assignee: "Rotating", room: "Bedrooms", nextDue: _nextDueFromFreq("weekly") },
    { name: "Mop kitchen floor", frequency: "weekly", assignee: "Rotating", room: "Kitchen", nextDue: _nextDueFromFreq("weekly") },
    { name: "Clean bathrooms", frequency: "weekly", assignee: "Rotating", room: "Bathroom", nextDue: _nextDueFromFreq("weekly") },
    { name: "Do laundry", frequency: "weekly", assignee: "Rotating", room: "Laundry", nextDue: _nextDueFromFreq("weekly") },
    { name: "Take out trash", frequency: "weekly", assignee: "Rotating", room: "Kitchen", nextDue: _nextDueFromFreq("weekly") },
    { name: "Take out recycling", frequency: "weekly", assignee: "Rotating", room: "Kitchen", nextDue: _nextDueFromFreq("weekly") },
    { name: "Wipe kitchen counters", frequency: "daily", assignee: "Rotating", room: "Kitchen", nextDue: _nextDueFromFreq("daily") },
    { name: "Do dishes", frequency: "daily", assignee: "Rotating", room: "Kitchen", nextDue: _nextDueFromFreq("daily") },
    { name: "Clean stovetop", frequency: "weekly", assignee: "Rotating", room: "Kitchen", nextDue: _nextDueFromFreq("weekly") },
    { name: "Dust surfaces", frequency: "biweekly", assignee: "Rotating", room: "Living Room", nextDue: _nextDueFromFreq("biweekly") },
    { name: "Change bed sheets", frequency: "biweekly", assignee: "Rotating", room: "Bedrooms", nextDue: _nextDueFromFreq("biweekly") },
    { name: "Clean mirrors", frequency: "biweekly", assignee: "Rotating", room: "Bathroom", nextDue: _nextDueFromFreq("biweekly") },
    { name: "Mop bathroom floor", frequency: "weekly", assignee: "Rotating", room: "Bathroom", nextDue: _nextDueFromFreq("weekly") },
    { name: "Deep clean fridge", frequency: "monthly", assignee: "Rotating", room: "Kitchen", nextDue: _nextDueFromFreq("monthly") },
    { name: "Clean oven", frequency: "monthly", assignee: "Rotating", room: "Kitchen", nextDue: _nextDueFromFreq("monthly") },
  ];
  for (const chore of defaults) {
    const id = "chore_" + Date.now() + "_" + Math.random().toString(36).slice(2, 8);
    chore.id = id;
    chore.lastDone = null;
    chore.createdAt = new Date().toISOString();
    await dbSet(`households/${state.hid}/home_chores/${id}`, chore);
    state.homeChores.push({ ...chore });
  }
}

/**
 * _seedDefaultMaintenance() — pre-populates home maintenance tasks appropriate
 * for a 1950s Cape Cod at 22 Andrew Street. Only called when collection is empty.
 */
async function _seedDefaultMaintenance() {
  const defaults = [
    { name: "Replace HVAC filters", category: "HVAC", frequency: "monthly", notes: "Use MERV-11 or higher. Check monthly, replace when dirty." },
    { name: "Service furnace", category: "HVAC", frequency: "annual", notes: "Schedule before heating season. Inspect heat exchanger, clean burners." },
    { name: "Service AC unit", category: "HVAC", frequency: "annual", notes: "Clean condenser coils, check refrigerant levels. Schedule before summer." },
    { name: "Clean gutters & downspouts", category: "Exterior", frequency: "biannual", notes: "Spring and fall. Check for loose brackets. Flush with hose." },
    { name: "Chimney inspection & sweep", category: "Exterior", frequency: "annual", notes: "Before fireplace season. Check flue liner, cap, and damper." },
    { name: "Inspect roof", category: "Exterior", frequency: "annual", notes: "Check shingles, flashing, vents. Cape Cod roofs collect leaves in valleys." },
    { name: "Test smoke & CO detectors", category: "Electrical", frequency: "monthly", notes: "Replace batteries annually. Replace units every 10 years." },
    { name: "Inspect & clean dryer vent", category: "Appliance", frequency: "annual", notes: "Prevent fire hazard. Clean full run from dryer to outside vent." },
    { name: "Water heater flush", category: "Plumbing", frequency: "annual", notes: "Drain sediment to maintain efficiency. Check anode rod every 3 years." },
    { name: "Check sump pump", category: "Plumbing", frequency: "quarterly", notes: "Pour water to test float switch. Clean pit. Check discharge pipe." },
    { name: "Inspect basement for moisture", category: "General", frequency: "quarterly", notes: "Check walls, floor, windows for leaks. Monitor dehumidifier." },
    { name: "Caulk windows & doors", category: "Exterior", frequency: "annual", notes: "Check all exterior caulking. Cape Cod windows are prone to drafts." },
    { name: "Clean refrigerator coils", category: "Appliance", frequency: "biannual", notes: "Under or behind fridge. Improves efficiency and extends life." },
    { name: "Test GFCI outlets", category: "Electrical", frequency: "monthly", notes: "Press test button, then reset. Check kitchen, bathroom, outdoor outlets." },
    { name: "Inspect attic insulation", category: "General", frequency: "annual", notes: "Cape Cod attics need R-49 minimum. Check for moisture, pests." },
    { name: "Treat lawn / fertilize", category: "Exterior", frequency: "quarterly", notes: "Spring (April), summer (June), fall (Sept), winterize (Nov)." },
    { name: "Power wash siding & walkways", category: "Exterior", frequency: "annual", notes: "Spring cleaning. Careful with older wood siding." },
    { name: "Check weather stripping", category: "Exterior", frequency: "annual", notes: "All exterior doors. Replace worn strips before winter." },
    { name: "Inspect foundation", category: "General", frequency: "annual", notes: "Check for cracks, settling. 1950s Cape Cods may have stone/block foundations." },
    { name: "Service garage door", category: "General", frequency: "annual", notes: "Lubricate tracks, check springs and cables, test auto-reverse." },
    { name: "Flush main sewer line", category: "Plumbing", frequency: "annual", notes: "Older homes prone to root intrusion. Snake or hydro-jet preventively." },
    { name: "Inspect electrical panel", category: "Electrical", frequency: "annual", notes: "Check for corrosion, loose connections. 1950s homes may have older panels." },
  ];
  for (const task of defaults) {
    const id = "maint_" + Date.now() + "_" + Math.random().toString(36).slice(2, 8);
    task.id = id;
    task.lastDone = null;
    task.nextDue = _nextDueFromFreq(task.frequency);
    task.estimatedCost = null;
    task.createdAt = new Date().toISOString();
    await dbSet(`households/${state.hid}/home_maintenance/${id}`, task);
    state.homeMaint.push({ ...task });
  }
}

/**
 * _nextDueFromFreq(freq) — calculates the next due date ISO string from a frequency.
 * Returns a date in the near future so items show up as "due soon" after seeding.
 */
function _nextDueFromFreq(freq) {
  const d = new Date();
  switch (freq) {
    case "daily": d.setDate(d.getDate() + 1); break;
    case "weekly": d.setDate(d.getDate() + 7); break;
    case "biweekly": d.setDate(d.getDate() + 14); break;
    case "monthly": d.setMonth(d.getMonth() + 1); break;
    case "quarterly": d.setMonth(d.getMonth() + 3); break;
    case "biannual": d.setMonth(d.getMonth() + 6); break;
    case "annual": d.setFullYear(d.getFullYear() + 1); break;
    default: d.setDate(d.getDate() + 7);
  }
  return d.toISOString().split("T")[0];
}

/**
 * _calcNextDue(lastDone, freq) — calculates the next due date from a completion date.
 * Used when marking a chore/task as done to compute when it's due next.
 */
function _calcNextDue(lastDone, freq) {
  const d = new Date(lastDone);
  switch (freq) {
    case "daily": d.setDate(d.getDate() + 1); break;
    case "weekly": d.setDate(d.getDate() + 7); break;
    case "biweekly": d.setDate(d.getDate() + 14); break;
    case "monthly": d.setMonth(d.getMonth() + 1); break;
    case "quarterly": d.setMonth(d.getMonth() + 3); break;
    case "biannual": d.setMonth(d.getMonth() + 6); break;
    case "annual": d.setFullYear(d.getFullYear() + 1); break;
    case "one-time": return null;
    default: d.setDate(d.getDate() + 7);
  }
  return d.toISOString().split("T")[0];
}

// ── HOME OVERVIEW TAB (h-overview) ───────────────────────────────────────────

/**
 * renderHomeOverview() — renders the Home Overview dashboard.
 * Shows greeting, leaderboard, today's chores, open todos, and weekly summary.
 */
function renderHomeOverview() {
  const el = g("screen-h-overview");
  if (!el) return;

  const name = _getUserFirstName();
  const greeting = _getTimeGreeting();
  const dateStr = _formatDateLong();
  const gs = state.homeGame || _defaultGameState();

  // Leaderboard
  const boraLead = gs.boraWeekPts > gs.bushraWeekPts;
  const bushraLead = gs.bushraWeekPts > gs.boraWeekPts;
  const tied = gs.boraWeekPts === gs.bushraWeekPts;
  const diff = Math.abs(gs.boraWeekPts - gs.bushraWeekPts);
  // The loser needs points to "dodge the wheel"
  const loserNeeds = tied ? 0 : diff + 1;
  const loserName = boraLead ? "Bushra" : "Bora";

  // Today's chores (due today or overdue, up to 3)
  const today = new Date().toISOString().split("T")[0];
  const todayChores = (state.homeChores || [])
    .filter(c => c.nextDue && c.nextDue <= today)
    .sort((a, b) => (a.nextDue || "").localeCompare(b.nextDue || ""))
    .slice(0, 3);

  // Open todos (not done, up to 3)
  const openTodos = (state.homeTodos || [])
    .filter(t => !t.done)
    .sort((a, b) => {
      const pa = { High: 0, Normal: 1, Low: 2 }; // sort by priority
      return (pa[a.priority] || 1) - (pa[b.priority] || 1);
    })
    .slice(0, 3);

  // This week summary
  const weekChoresDone = (state.homeChores || []).filter(c => {
    if (!c.lastDone) return false;
    return c.lastDone >= gs.weekStart;
  }).length;
  const weekTodosDone = (state.homeTodos || []).filter(t => {
    if (!t.done || !t.doneAt) return false;
    return t.doneAt >= gs.weekStart;
  }).length;
  const weekPts = (gs.boraWeekPts || 0) + (gs.bushraWeekPts || 0);

  el.innerHTML = `
    <div class="ho-header">
      <div>
        <div class="ko-greeting">${greeting}, <span>${name}</span></div>
        <div class="ko-date">${dateStr}</div>
      </div>
      <div class="setbtn" onclick="showOv('settings')">⚙️</div>
    </div>
    <div class="ho-body">
      <!-- Leaderboard Card -->
      <div class="ho-card ho-leaderboard">
        <div class="ho-card-title">This Week's Leaderboard</div>
        <div class="ho-lb-row">
          <div class="ho-lb-player ${boraLead ? 'ho-lb-leading' : ''}">
            <div class="ho-lb-avatar ho-avatar-bora">B</div>
            <div class="ho-lb-name">Bora</div>
            <div class="ho-lb-pts">${gs.boraWeekPts || 0} pts</div>
          </div>
          <div class="ho-lb-vs">vs</div>
          <div class="ho-lb-player ${bushraLead ? 'ho-lb-leading' : ''}">
            <div class="ho-lb-avatar ho-avatar-bushra">B</div>
            <div class="ho-lb-name">Bushra</div>
            <div class="ho-lb-pts">${gs.bushraWeekPts || 0} pts</div>
          </div>
        </div>
        ${tied
          ? '<div class="ho-lb-msg">All tied up! Keep going!</div>'
          : `<div class="ho-lb-msg">${loserName} needs ${loserNeeds} more pts to dodge the wheel</div>`
        }
      </div>

      <!-- Today's Chores -->
      <div class="ho-card">
        <div class="ho-card-title">Today's Chores</div>
        ${todayChores.length ? todayChores.map(c => `
          <div class="ho-task-row">
            <button class="ho-task-check" onclick="markChoreDone('${c.id}')">&#10003;</button>
            <div class="ho-task-info">
              <div class="ho-task-name">${c.name}</div>
              <div class="ho-task-meta">
                <span class="ho-assignee-badge ${c.assignee === 'Bushra' ? 'ho-badge-bushra' : 'ho-badge-bora'}">${c.assignee === 'Rotating' ? 'Rotating' : c.assignee}</span>
                <span>${c.room || ''}</span>
              </div>
            </div>
          </div>
        `).join("") : '<div class="ho-empty-msg">All caught up! No chores due today.</div>'}
        <button class="btn bsm bs" style="width:100%;margin-top:10px" onclick="showScreen('h-cleaning')">View All Chores</button>
      </div>

      <!-- Open To-Dos -->
      <div class="ho-card">
        <div class="ho-card-title">Open To-Dos</div>
        ${openTodos.length ? openTodos.map(t => `
          <div class="ho-task-row">
            <button class="ho-task-check" onclick="markTodoDone('${t.id}')">&#10003;</button>
            <div class="ho-task-info">
              <div class="ho-task-name">${t.title}</div>
              <div class="ho-task-meta">
                <span class="ho-assignee-badge ${t.assignee === 'Bushra' ? 'ho-badge-bushra' : t.assignee === 'Bora' ? 'ho-badge-bora' : ''}">${t.assignee || 'Both'}</span>
                ${t.priority === 'High' ? '<span class="ho-priority-high">High</span>' : ''}
              </div>
            </div>
          </div>
        `).join("") : '<div class="ho-empty-msg">No open to-dos!</div>'}
        <button class="btn bsm bs" style="width:100%;margin-top:10px" onclick="showScreen('h-todos')">View All To-Dos</button>
      </div>

      <!-- This Week Summary -->
      <div class="ho-card">
        <div class="ho-card-title">This Week</div>
        <div class="ko-stats-row">
          <div class="ko-stat-card" style="cursor:default">
            <div class="ko-stat-val">${weekChoresDone}</div>
            <div class="ko-stat-label">Chores Done</div>
          </div>
          <div class="ko-stat-card" style="cursor:default">
            <div class="ko-stat-val">${weekTodosDone}</div>
            <div class="ko-stat-label">To-Dos Done</div>
          </div>
          <div class="ko-stat-card" style="cursor:default">
            <div class="ko-stat-val">${weekPts}</div>
            <div class="ko-stat-label">Points Earned</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ── HOME TO-DOS TAB (h-todos) ────────────────────────────────────────────────

/**
 * renderHomeTodos() — renders the To-Dos tab with items grouped by
 * Overdue, Today, Upcoming, and No Date. Each item has a checkbox,
 * assignee badge, and priority indicator.
 */
function renderHomeTodos() {
  const el = g("screen-h-todos");
  if (!el) return;

  const today = new Date().toISOString().split("T")[0];
  const todos = (state.homeTodos || []).filter(t => !t.done);
  const doneTodos = (state.homeTodos || []).filter(t => t.done);

  // Group by date
  const overdue = todos.filter(t => t.dueDate && t.dueDate < today).sort((a, b) => a.dueDate.localeCompare(b.dueDate));
  const todayItems = todos.filter(t => t.dueDate === today);
  const upcoming = todos.filter(t => t.dueDate && t.dueDate > today).sort((a, b) => a.dueDate.localeCompare(b.dueDate));
  const noDate = todos.filter(t => !t.dueDate);

  const renderGroup = (label, items, cssClass) => {
    if (!items.length) return "";
    return `
      <div class="ho-section-label ${cssClass || ''}">${label} (${items.length})</div>
      ${items.map(t => _renderTodoItem(t)).join("")}
    `;
  };

  el.innerHTML = `
    <div class="ho-header">
      <div>
        <div class="ho-tab-title">To-Dos</div>
        <div class="ko-date">${todos.length} open &middot; ${doneTodos.length} done</div>
      </div>
    </div>
    <div class="ho-body">
      ${renderGroup("Overdue", overdue, "ho-overdue")}
      ${renderGroup("Today", todayItems)}
      ${renderGroup("Upcoming", upcoming)}
      ${renderGroup("No Date", noDate)}
      ${!todos.length ? '<div class="ho-empty-state"><div style="font-size:2.5rem;margin-bottom:12px">&#9989;</div><div>All done! Add a to-do with the + button.</div></div>' : ''}
      ${doneTodos.length ? `
        <div class="ho-section-label" style="margin-top:24px">Done (${doneTodos.length})</div>
        ${doneTodos.slice(0, 10).map(t => _renderTodoItem(t, true)).join("")}
        ${doneTodos.length > 10 ? `<div class="ho-empty-msg">${doneTodos.length - 10} more completed items...</div>` : ''}
      ` : ''}
    </div>
  `;
}

/**
 * _renderTodoItem(t, isDone) — returns HTML for a single to-do item row.
 */
function _renderTodoItem(t, isDone = false) {
  const priorityClass = t.priority === "High" ? "ho-todo-high" : t.priority === "Low" ? "ho-todo-low" : "";
  return `
    <div class="ho-todo-item ${isDone ? 'ho-todo-done' : ''} ${priorityClass}">
      <button class="ho-todo-check ${isDone ? 'ho-todo-checked' : ''}" onclick="${isDone ? `uncheckTodo('${t.id}')` : `markTodoDone('${t.id}')`}">
        ${isDone ? '&#10003;' : ''}
      </button>
      <div class="ho-todo-content" onclick="openTodoDetail('${t.id}')">
        <div class="ho-todo-title ${isDone ? 'ho-todo-title-done' : ''}">${t.title}</div>
        <div class="ho-task-meta">
          <span class="ho-assignee-badge ${t.assignee === 'Bushra' ? 'ho-badge-bushra' : t.assignee === 'Bora' ? 'ho-badge-bora' : ''}">${t.assignee || 'Both'}</span>
          ${t.priority && t.priority !== 'Normal' ? `<span class="ho-priority-${t.priority.toLowerCase()}">${t.priority}</span>` : ''}
          ${t.dueDate ? `<span class="ho-due-date">${_shortDate(t.dueDate)}</span>` : ''}
        </div>
        ${t.note ? `<div class="ho-todo-note">${t.note}</div>` : ''}
      </div>
      <button class="ho-todo-del" onclick="deleteTodo('${t.id}')">&#128465;</button>
    </div>
  `;
}

/**
 * _shortDate(iso) — format an ISO date string into a short display like "Jun 6".
 */
function _shortDate(iso) {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

// ── TO-DO CRUD OPERATIONS ────────────────────────────────────────────────────

/**
 * openTodoAddSheet() — opens a bottom sheet form for adding a new to-do.
 * Creates the bottom sheet HTML dynamically if it doesn't exist yet.
 */
function openTodoAddSheet() {
  // Ensure the sheet exists in DOM
  let backdrop = g("todoAddBackdrop");
  let sheet = g("todoAddSheet");
  if (!backdrop) {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="bsheet-backdrop" id="todoAddBackdrop" onclick="closeTodoAddSheet()"></div>
      <div class="bsheet" id="todoAddSheet">
        <div class="bsheet-handle"></div>
        <div class="bsheet-title">New To-Do</div>
        <div class="frow"><label class="flbl">Title</label><input class="fi" id="todoTitle" placeholder="What needs to be done?"></div>
        <div class="frow"><label class="flbl">Note (optional)</label><textarea class="fta" id="todoNote" rows="2" placeholder="Any extra details..."></textarea></div>
        <div class="frow"><label class="flbl">Assignee</label>
          <div class="lpick">
            <button class="lbtn sel" onclick="setTodoField(this,'todoAssignee','Bora')">Bora</button>
            <button class="lbtn" onclick="setTodoField(this,'todoAssignee','Bushra')">Bushra</button>
            <button class="lbtn" onclick="setTodoField(this,'todoAssignee','Both')">Both</button>
          </div>
          <input type="hidden" id="todoAssignee" value="Bora">
        </div>
        <div class="frow"><label class="flbl">Priority</label>
          <div class="lpick">
            <button class="lbtn" onclick="setTodoField(this,'todoPriority','High')">High</button>
            <button class="lbtn sel" onclick="setTodoField(this,'todoPriority','Normal')">Normal</button>
            <button class="lbtn" onclick="setTodoField(this,'todoPriority','Low')">Low</button>
          </div>
          <input type="hidden" id="todoPriority" value="Normal">
        </div>
        <div class="frow"><label class="flbl">Due Date (optional)</label><input class="fi" type="date" id="todoDueDate"></div>
        <button class="btn bp bf" onclick="saveTodo()" style="margin-top:12px">Add To-Do</button>
      </div>
    `;
    document.body.appendChild(div);
    backdrop = g("todoAddBackdrop");
    sheet = g("todoAddSheet");
  }
  // Reset form
  g("todoTitle").value = "";
  g("todoNote").value = "";
  g("todoAssignee").value = "Bora";
  g("todoPriority").value = "Normal";
  g("todoDueDate").value = "";
  // Reset button states
  sheet.querySelectorAll(".lpick").forEach(pick => {
    pick.querySelectorAll(".lbtn").forEach((btn, i) => {
      if (pick.querySelector("input[type=hidden]")?.id === "todoAssignee") btn.classList.toggle("sel", i === 0);
      else btn.classList.toggle("sel", i === 1);
    });
  });
  backdrop.classList.add("active");
  sheet.classList.add("active");
  setTimeout(() => g("todoTitle")?.focus(), 300);
}

/** closeTodoAddSheet() — closes the to-do add bottom sheet. */
function closeTodoAddSheet() {
  g("todoAddBackdrop")?.classList.remove("active");
  g("todoAddSheet")?.classList.remove("active");
}

/**
 * setTodoField(btn, fieldId, value) — updates a hidden field value and toggles
 * the active button style within a button group. Used by the add-todo form.
 */
function setTodoField(btn, fieldId, value) {
  g(fieldId).value = value;
  btn.closest(".lpick").querySelectorAll(".lbtn").forEach(b => b.classList.remove("sel"));
  btn.classList.add("sel");
}

/**
 * saveTodo() — validates the add-todo form and saves a new to-do to Firestore.
 * Awards no points on creation — points are awarded on completion.
 */
async function saveTodo() {
  const title = g("todoTitle")?.value?.trim();
  if (!title) { showNotif("Please enter a title"); return; }
  const todo = {
    title,
    note: g("todoNote")?.value?.trim() || "",
    assignee: g("todoAssignee")?.value || "Both",
    priority: g("todoPriority")?.value || "Normal",
    dueDate: g("todoDueDate")?.value || null,
    done: false,
    doneAt: null,
    createdAt: new Date().toISOString(),
  };
  const id = "todo_" + Date.now() + "_" + Math.random().toString(36).slice(2, 8);
  todo.id = id;
  closeTodoAddSheet();
  ss("syncing");
  try {
    await dbSet(`households/${state.hid}/home_todos/${id}`, todo);
    state.homeTodos.push(todo);
    renderHomeTodos();
    renderHomeOverview();
    ss("synced");
    showNotif("To-do added");
  } catch (e) {
    console.error("[saveTodo]", e);
    ss("error");
  }
}

/**
 * markTodoDone(id) — marks a to-do as complete. Awards points based on priority:
 * High = 10pts, Normal = 5pts, Low = 2pts.
 */
async function markTodoDone(id) {
  const todo = state.homeTodos.find(t => t.id === id);
  if (!todo || todo.done) return;
  todo.done = true;
  todo.doneAt = new Date().toISOString();
  const pts = todo.priority === "High" ? 10 : todo.priority === "Low" ? 2 : 5;
  const who = todo.assignee === "Bushra" ? "Bushra" : "Bora";
  ss("syncing");
  try {
    await dbSet(`households/${state.hid}/home_todos/${id}`, { ...todo, id: undefined });
    await _awardPoints(who, pts);
    renderHomeTodos();
    renderHomeOverview();
    renderHomeGame();
    ss("synced");
    showNotif(`+${pts} pts for ${who}!`);
  } catch (e) { console.error("[markTodoDone]", e); ss("error"); }
}

/**
 * uncheckTodo(id) — marks a completed to-do as not done (undo).
 */
async function uncheckTodo(id) {
  const todo = state.homeTodos.find(t => t.id === id);
  if (!todo || !todo.done) return;
  todo.done = false;
  todo.doneAt = null;
  ss("syncing");
  try {
    await dbSet(`households/${state.hid}/home_todos/${id}`, { ...todo, id: undefined });
    renderHomeTodos();
    renderHomeOverview();
    ss("synced");
  } catch (e) { console.error("[uncheckTodo]", e); ss("error"); }
}

/**
 * deleteTodo(id) — deletes a to-do after confirmation.
 */
async function deleteTodo(id) {
  if (!confirm("Delete this to-do?")) return;
  ss("syncing");
  try {
    await dbDelete(`households/${state.hid}/home_todos/${id}`);
    state.homeTodos = state.homeTodos.filter(t => t.id !== id);
    renderHomeTodos();
    renderHomeOverview();
    ss("synced");
    showNotif("To-do deleted");
  } catch (e) { console.error("[deleteTodo]", e); ss("error"); }
}

/**
 * openTodoDetail(id) — placeholder for opening a detail/edit view for a to-do.
 * Phase 3 will add an inline edit sheet.
 */
function openTodoDetail(id) {
  // Phase 3: open detail/edit bottom sheet
}

// ── HOME CLEANING TAB (h-cleaning) ──────────────────────────────────────────

/** _cleaningView tracks whether user is viewing "schedule" (by due date) or "room" */
let _cleaningView = "schedule";

/**
 * renderHomeCleaning() — renders the Cleaning tab with chores sorted by next
 * due date or grouped by room. Overdue items are highlighted.
 */
function renderHomeCleaning() {
  const el = g("screen-h-cleaning");
  if (!el) return;

  const today = new Date().toISOString().split("T")[0];
  const chores = [...(state.homeChores || [])];

  // View toggle buttons
  const schedActive = _cleaningView === "schedule" ? "sel" : "";
  const roomActive = _cleaningView === "room" ? "sel" : "";

  let listHTML = "";

  if (_cleaningView === "schedule") {
    // Sort by next due date, overdue first
    chores.sort((a, b) => (a.nextDue || "9999").localeCompare(b.nextDue || "9999"));
    listHTML = chores.map(c => _renderChoreItem(c, today)).join("");
  } else {
    // Group by room
    const rooms = {};
    chores.forEach(c => {
      const room = c.room || "General";
      if (!rooms[room]) rooms[room] = [];
      rooms[room].push(c);
    });
    listHTML = Object.keys(rooms).sort().map(room => `
      <div class="ho-section-label">${room}</div>
      ${rooms[room].map(c => _renderChoreItem(c, today)).join("")}
    `).join("");
  }

  el.innerHTML = `
    <div class="ho-header">
      <div>
        <div class="ho-tab-title">Cleaning Schedule</div>
        <div class="ko-date">${chores.length} chores</div>
      </div>
      <div class="lpick" style="gap:4px">
        <button class="lbtn bsm ${schedActive}" onclick="setCleaningView('schedule')">Schedule</button>
        <button class="lbtn bsm ${roomActive}" onclick="setCleaningView('room')">By Room</button>
      </div>
    </div>
    <div class="ho-body">
      ${listHTML}
      ${!chores.length ? '<div class="ho-empty-state"><div style="font-size:2.5rem;margin-bottom:12px">&#128167;</div><div>No chores yet. Add one with the + button.</div></div>' : ''}
    </div>
  `;
}

/**
 * _renderChoreItem(c, today) — returns HTML for a single chore row with
 * overdue highlighting, assignee badge, frequency tag, and done button.
 */
function _renderChoreItem(c, today) {
  const overdue = c.nextDue && c.nextDue < today;
  const dueToday = c.nextDue === today;
  const statusClass = overdue ? "ho-chore-overdue" : dueToday ? "ho-chore-today" : "";
  return `
    <div class="ho-chore-item ${statusClass}">
      <button class="ho-task-check" onclick="markChoreDone('${c.id}')">&#10003;</button>
      <div class="ho-task-info" style="flex:1">
        <div class="ho-task-name">${c.name}</div>
        <div class="ho-task-meta">
          <span class="ho-assignee-badge ${c.assignee === 'Bushra' ? 'ho-badge-bushra' : c.assignee === 'Bora' ? 'ho-badge-bora' : ''}">${c.assignee}</span>
          <span class="ho-freq-tag">${c.frequency}</span>
          ${c.room ? `<span>${c.room}</span>` : ''}
        </div>
        <div class="ho-chore-due">${overdue ? 'Overdue' : dueToday ? 'Due today' : c.nextDue ? 'Due ' + _shortDate(c.nextDue) : 'No due date'}</div>
      </div>
      <button class="ho-todo-del" onclick="deleteChore('${c.id}')">&#128465;</button>
    </div>
  `;
}

/**
 * setCleaningView(view) — switches the cleaning tab between "schedule" and "room" views.
 */
function setCleaningView(view) {
  _cleaningView = view;
  renderHomeCleaning();
}

/**
 * markChoreDone(id) — marks a chore as completed. Records timestamp, calculates
 * next due date, and awards 8 points to the assignee.
 */
async function markChoreDone(id) {
  const chore = state.homeChores.find(c => c.id === id);
  if (!chore) return;
  const now = new Date().toISOString();
  const today = now.split("T")[0];
  chore.lastDone = today;
  chore.nextDue = _calcNextDue(today, chore.frequency);

  // Determine assignee for points. "Rotating" defaults to current user.
  const currentUser = _getUserFirstName();
  const who = chore.assignee === "Rotating" ? currentUser : chore.assignee;
  const pts = 8;

  ss("syncing");
  try {
    const data = { ...chore }; delete data.id;
    await dbSet(`households/${state.hid}/home_chores/${id}`, data);
    await _awardPoints(who === "Bushra" ? "Bushra" : "Bora", pts);
    renderHomeCleaning();
    renderHomeOverview();
    renderHomeGame();
    ss("synced");
    showNotif(`+${pts} pts! Next due ${chore.nextDue ? _shortDate(chore.nextDue) : 'N/A'}`);
  } catch (e) { console.error("[markChoreDone]", e); ss("error"); }
}

/**
 * openChoreAddSheet() — opens a bottom sheet form for adding a new chore.
 */
function openChoreAddSheet() {
  let backdrop = g("choreAddBackdrop");
  let sheet = g("choreAddSheet");
  if (!backdrop) {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="bsheet-backdrop" id="choreAddBackdrop" onclick="closeChoreAddSheet()"></div>
      <div class="bsheet" id="choreAddSheet">
        <div class="bsheet-handle"></div>
        <div class="bsheet-title">New Chore</div>
        <div class="frow"><label class="flbl">Name</label><input class="fi" id="choreName" placeholder="e.g. Vacuum upstairs"></div>
        <div class="frow"><label class="flbl">Room / Area</label><input class="fi" id="choreRoom" placeholder="e.g. Kitchen, Bedroom"></div>
        <div class="frow"><label class="flbl">Frequency</label>
          <select class="fsel" id="choreFreq">
            <option value="daily">Daily</option>
            <option value="weekly" selected>Weekly</option>
            <option value="biweekly">Biweekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <div class="frow"><label class="flbl">Assignee</label>
          <div class="lpick">
            <button class="lbtn sel" onclick="setTodoField(this,'choreAssignee','Bora')">Bora</button>
            <button class="lbtn" onclick="setTodoField(this,'choreAssignee','Bushra')">Bushra</button>
            <button class="lbtn" onclick="setTodoField(this,'choreAssignee','Rotating')">Rotating</button>
          </div>
          <input type="hidden" id="choreAssignee" value="Bora">
        </div>
        <button class="btn bp bf" onclick="saveChore()" style="margin-top:12px">Add Chore</button>
      </div>
    `;
    document.body.appendChild(div);
  }
  g("choreName").value = "";
  g("choreRoom").value = "";
  g("choreFreq").value = "weekly";
  g("choreAssignee").value = "Bora";
  g("choreAddBackdrop").classList.add("active");
  g("choreAddSheet").classList.add("active");
  setTimeout(() => g("choreName")?.focus(), 300);
}

/** closeChoreAddSheet() — closes the chore add bottom sheet. */
function closeChoreAddSheet() {
  g("choreAddBackdrop")?.classList.remove("active");
  g("choreAddSheet")?.classList.remove("active");
}

/**
 * saveChore() — validates and saves a new chore to Firestore.
 */
async function saveChore() {
  const name = g("choreName")?.value?.trim();
  if (!name) { showNotif("Please enter a chore name"); return; }
  const freq = g("choreFreq")?.value || "weekly";
  const chore = {
    name,
    room: g("choreRoom")?.value?.trim() || "",
    frequency: freq,
    assignee: g("choreAssignee")?.value || "Rotating",
    nextDue: _nextDueFromFreq(freq),
    lastDone: null,
    createdAt: new Date().toISOString(),
  };
  const id = "chore_" + Date.now() + "_" + Math.random().toString(36).slice(2, 8);
  chore.id = id;
  closeChoreAddSheet();
  ss("syncing");
  try {
    await dbSet(`households/${state.hid}/home_chores/${id}`, { ...chore, id: undefined });
    state.homeChores.push(chore);
    renderHomeCleaning();
    ss("synced");
    showNotif("Chore added");
  } catch (e) { console.error("[saveChore]", e); ss("error"); }
}

/**
 * deleteChore(id) — deletes a chore after confirmation.
 */
async function deleteChore(id) {
  if (!confirm("Delete this chore?")) return;
  ss("syncing");
  try {
    await dbDelete(`households/${state.hid}/home_chores/${id}`);
    state.homeChores = state.homeChores.filter(c => c.id !== id);
    renderHomeCleaning();
    renderHomeOverview();
    ss("synced");
    showNotif("Chore deleted");
  } catch (e) { console.error("[deleteChore]", e); ss("error"); }
}

// ── HOME MAINTENANCE TAB (h-maintain) ────────────────────────────────────────

/**
 * renderHomeMaintain() — renders the Maintenance tab with tasks sorted by
 * next due date. Overdue items are highlighted.
 */
function renderHomeMaintain() {
  const el = g("screen-h-maintain");
  if (!el) return;

  const today = new Date().toISOString().split("T")[0];
  const tasks = [...(state.homeMaint || [])];
  tasks.sort((a, b) => (a.nextDue || "9999").localeCompare(b.nextDue || "9999"));

  // Group by overdue vs upcoming
  const overdue = tasks.filter(t => t.nextDue && t.nextDue < today);
  const upcoming = tasks.filter(t => !t.nextDue || t.nextDue >= today);

  el.innerHTML = `
    <div class="ho-header">
      <div>
        <div class="ho-tab-title">Home Maintenance</div>
        <div class="ko-date">22 Andrew Street &middot; ${tasks.length} tasks</div>
      </div>
    </div>
    <div class="ho-body">
      ${overdue.length ? `
        <div class="ho-section-label ho-overdue">Overdue (${overdue.length})</div>
        ${overdue.map(t => _renderMaintItem(t, true)).join("")}
      ` : ''}
      ${upcoming.length ? `
        <div class="ho-section-label">Upcoming</div>
        ${upcoming.map(t => _renderMaintItem(t, false)).join("")}
      ` : ''}
      ${!tasks.length ? '<div class="ho-empty-state"><div style="font-size:2.5rem;margin-bottom:12px">&#128736;</div><div>No maintenance tasks. Add one with the + button.</div></div>' : ''}
    </div>
  `;
}

/**
 * _renderMaintItem(t, isOverdue) — returns HTML for a single maintenance task row.
 */
function _renderMaintItem(t, isOverdue) {
  const catIcons = { HVAC: "&#9928;", Plumbing: "&#128167;", Electrical: "&#9889;", Exterior: "&#127968;", Appliance: "&#127859;", General: "&#128295;" };
  const icon = catIcons[t.category] || "&#128295;";
  return `
    <div class="ho-maint-item ${isOverdue ? 'ho-chore-overdue' : ''}">
      <button class="ho-task-check" onclick="markMaintDone('${t.id}')">&#10003;</button>
      <div class="ho-task-info" style="flex:1">
        <div class="ho-task-name">${icon} ${t.name}</div>
        <div class="ho-task-meta">
          <span class="ho-freq-tag">${t.category}</span>
          <span class="ho-freq-tag">${t.frequency}</span>
          ${t.estimatedCost ? `<span class="price-tag">$${t.estimatedCost}</span>` : ''}
        </div>
        <div class="ho-chore-due">${isOverdue ? 'Overdue' : t.nextDue ? 'Due ' + _shortDate(t.nextDue) : 'One-time'}</div>
        ${t.notes ? `<div class="ho-todo-note">${t.notes}</div>` : ''}
        ${t.lastDone ? `<div class="ho-maint-last">Last done: ${_shortDate(t.lastDone)}</div>` : ''}
      </div>
      <button class="ho-todo-del" onclick="deleteMaint('${t.id}')">&#128465;</button>
    </div>
  `;
}

/**
 * markMaintDone(id) — marks a maintenance task as completed. Records timestamp,
 * calculates next due date, and awards 15 points.
 */
async function markMaintDone(id) {
  const task = state.homeMaint.find(t => t.id === id);
  if (!task) return;
  const today = new Date().toISOString().split("T")[0];
  task.lastDone = today;
  task.nextDue = _calcNextDue(today, task.frequency);
  const currentUser = _getUserFirstName();
  const pts = 15;
  ss("syncing");
  try {
    const data = { ...task }; delete data.id;
    await dbSet(`households/${state.hid}/home_maintenance/${id}`, data);
    await _awardPoints(currentUser === "Bushra" ? "Bushra" : "Bora", pts);
    renderHomeMaintain();
    renderHomeOverview();
    renderHomeGame();
    ss("synced");
    showNotif(`+${pts} pts! Maintenance done.`);
  } catch (e) { console.error("[markMaintDone]", e); ss("error"); }
}

/**
 * openMaintAddSheet() — opens a bottom sheet form for adding a maintenance task.
 */
function openMaintAddSheet() {
  let backdrop = g("maintAddBackdrop");
  let sheet = g("maintAddSheet");
  if (!backdrop) {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="bsheet-backdrop" id="maintAddBackdrop" onclick="closeMaintAddSheet()"></div>
      <div class="bsheet" id="maintAddSheet">
        <div class="bsheet-handle"></div>
        <div class="bsheet-title">New Maintenance Task</div>
        <div class="frow"><label class="flbl">Name</label><input class="fi" id="maintName" placeholder="e.g. Replace HVAC filter"></div>
        <div class="frow"><label class="flbl">Category</label>
          <select class="fsel" id="maintCat">
            <option value="HVAC">HVAC</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Electrical">Electrical</option>
            <option value="Exterior">Exterior</option>
            <option value="Appliance">Appliance</option>
            <option value="General" selected>General</option>
          </select>
        </div>
        <div class="frow"><label class="flbl">Frequency</label>
          <select class="fsel" id="maintFreq">
            <option value="monthly">Monthly</option>
            <option value="quarterly" selected>Quarterly</option>
            <option value="biannual">Biannual</option>
            <option value="annual">Annual</option>
            <option value="one-time">One-time</option>
          </select>
        </div>
        <div class="frow"><label class="flbl">Notes (optional)</label><textarea class="fta" id="maintNotes" rows="2" placeholder="Any details or reminders..."></textarea></div>
        <div class="frow"><label class="flbl">Estimated Cost (optional)</label><input class="fi" id="maintCost" type="number" placeholder="$"></div>
        <button class="btn bp bf" onclick="saveMaint()" style="margin-top:12px">Add Task</button>
      </div>
    `;
    document.body.appendChild(div);
  }
  g("maintName").value = "";
  g("maintCat").value = "General";
  g("maintFreq").value = "quarterly";
  g("maintNotes").value = "";
  g("maintCost").value = "";
  g("maintAddBackdrop").classList.add("active");
  g("maintAddSheet").classList.add("active");
  setTimeout(() => g("maintName")?.focus(), 300);
}

/** closeMaintAddSheet() — closes the maintenance add bottom sheet. */
function closeMaintAddSheet() {
  g("maintAddBackdrop")?.classList.remove("active");
  g("maintAddSheet")?.classList.remove("active");
}

/**
 * saveMaint() — validates and saves a new maintenance task to Firestore.
 */
async function saveMaint() {
  const name = g("maintName")?.value?.trim();
  if (!name) { showNotif("Please enter a task name"); return; }
  const freq = g("maintFreq")?.value || "quarterly";
  const task = {
    name,
    category: g("maintCat")?.value || "General",
    frequency: freq,
    notes: g("maintNotes")?.value?.trim() || "",
    estimatedCost: g("maintCost")?.value ? parseFloat(g("maintCost").value) : null,
    nextDue: _nextDueFromFreq(freq),
    lastDone: null,
    createdAt: new Date().toISOString(),
  };
  const id = "maint_" + Date.now() + "_" + Math.random().toString(36).slice(2, 8);
  task.id = id;
  closeMaintAddSheet();
  ss("syncing");
  try {
    await dbSet(`households/${state.hid}/home_maintenance/${id}`, { ...task, id: undefined });
    state.homeMaint.push(task);
    renderHomeMaintain();
    ss("synced");
    showNotif("Task added");
  } catch (e) { console.error("[saveMaint]", e); ss("error"); }
}

/**
 * deleteMaint(id) — deletes a maintenance task after confirmation.
 */
async function deleteMaint(id) {
  if (!confirm("Delete this maintenance task?")) return;
  ss("syncing");
  try {
    await dbDelete(`households/${state.hid}/home_maintenance/${id}`);
    state.homeMaint = state.homeMaint.filter(t => t.id !== id);
    renderHomeMaintain();
    ss("synced");
    showNotif("Task deleted");
  } catch (e) { console.error("[deleteMaint]", e); ss("error"); }
}

// ── HOME GAME TAB (h-game) ──────────────────────────────────────────────────

/** Consequence wheel segments — 8 fun consequences for the loser */
const CONSEQUENCES = [
  "Cook dinner for a week",
  "Breakfast in bed",
  "Car wash duty",
  "No phone at dinner for 3 days",
  "Compliment the winner every day for a week",
  "Do the grocery run solo",
  "Handle all bedtime routines for a week",
  "Winner picks the next 3 movies",
];

/** Power card definitions — display only for now */
const POWER_CARDS = {
  shield: { icon: "&#128737;", name: "Shield", desc: "Block one chore from counting this week" },
  swap: { icon: "&#128260;", name: "Swap", desc: "Swap your weekly score with your partner's" },
  ghost: { icon: "&#128123;", name: "Ghost Week", desc: "Your opponent's points don't count this week" },
  double: { icon: "&#11014;", name: "Double Down", desc: "All your points count double this week" },
};

/**
 * renderHomeGame() — renders the Game tab with leaderboard, season progress,
 * consequence spin wheel, power cards, and weekly history.
 */
function renderHomeGame() {
  const el = g("screen-h-game");
  if (!el) return;

  const gs = state.homeGame || _defaultGameState();
  const boraLead = gs.boraWeekPts > gs.bushraWeekPts;
  const bushraLead = gs.bushraWeekPts > gs.boraWeekPts;

  // Season progress
  const seasonDays = gs.seasonStart ? Math.floor((Date.now() - new Date(gs.seasonStart).getTime()) / 86400000) : 0;
  const seasonRemaining = Math.max(0, 30 - seasonDays);

  // Week status — is the week over? (current day is Sunday and we're past the week start + 7 days)
  const weekStartDate = new Date(gs.weekStart);
  const weekEndDate = new Date(weekStartDate);
  weekEndDate.setDate(weekEndDate.getDate() + 7);
  const weekOver = Date.now() >= weekEndDate.getTime();
  const hasLoser = weekOver && gs.boraWeekPts !== gs.bushraWeekPts;
  const loserName = gs.boraWeekPts < gs.bushraWeekPts ? "Bora" : "Bushra";

  // Weekly history (last 4)
  const history = (gs.weeklyHistory || []).slice(0, 4);

  el.innerHTML = `
    <div class="ho-header">
      <div>
        <div class="ho-tab-title">The Game</div>
        <div class="ko-date">Household Gamification</div>
      </div>
    </div>
    <div class="ho-body">
      <!-- Leaderboard -->
      <div class="ho-card ho-leaderboard">
        <div class="ho-card-title">Leaderboard</div>
        <div class="ho-game-scores">
          <div class="ho-game-player">
            <div class="ho-lb-avatar ho-avatar-bora" style="width:48px;height:48px;font-size:1.2rem">B</div>
            <div class="ho-game-name">Bora</div>
            <div class="ho-game-week-pts">${gs.boraWeekPts || 0} <small>this week</small></div>
            <div class="ho-game-all-pts">${gs.boraAllTimePts || 0} <small>all-time</small></div>
            ${gs.boraStreak > 1 ? `<div class="ho-streak">&#128293; ${gs.boraStreak} week streak</div>` : ''}
          </div>
          <div class="ho-game-vs">VS</div>
          <div class="ho-game-player">
            <div class="ho-lb-avatar ho-avatar-bushra" style="width:48px;height:48px;font-size:1.2rem">B</div>
            <div class="ho-game-name">Bushra</div>
            <div class="ho-game-week-pts">${gs.bushraWeekPts || 0} <small>this week</small></div>
            <div class="ho-game-all-pts">${gs.bushraAllTimePts || 0} <small>all-time</small></div>
            ${gs.bushraStreak > 1 ? `<div class="ho-streak">&#128293; ${gs.bushraStreak} week streak</div>` : ''}
          </div>
        </div>
      </div>

      <!-- Season Progress -->
      <div class="ho-card">
        <div class="ho-card-title">Season Progress</div>
        <div class="ho-season-info">
          <div class="ho-season-row"><span>Days remaining</span><strong>${seasonRemaining}</strong></div>
          <div class="ho-season-bar"><div class="ho-season-fill" style="width:${Math.min(100, (seasonDays / 30) * 100)}%"></div></div>
          <div class="ho-season-row"><span>Bora season pts</span><strong>${gs.boraSeasonPts || 0}</strong></div>
          <div class="ho-season-row"><span>Bushra season pts</span><strong>${gs.bushraSeasonPts || 0}</strong></div>
        </div>
      </div>

      <!-- Consequence Wheel -->
      <div class="ho-card">
        <div class="ho-card-title">Consequence Wheel</div>
        ${hasLoser ? `
          <div class="ho-wheel-container" id="wheelContainer">
            <div class="ho-wheel" id="spinWheel">
              ${CONSEQUENCES.map((c, i) => `<div class="ho-wheel-seg" style="--seg-i:${i};--seg-total:${CONSEQUENCES.length}">${c}</div>`).join("")}
            </div>
            <div class="ho-wheel-pointer">&#9660;</div>
          </div>
          <button class="btn bp bf" onclick="spinWheel()" id="spinBtn" style="margin-top:12px">Spin the Wheel for ${loserName}!</button>
        ` : gs.lastConsequence ? `
          <div class="ho-consequence-result">
            <div class="ho-consequence-label">Last consequence:</div>
            <div class="ho-consequence-text">${gs.lastConsequence}</div>
          </div>
        ` : `
          <div class="ho-empty-msg">The wheel spins at the end of the week when there's a loser. Keep earning points!</div>
        `}
      </div>

      <!-- Power Cards -->
      <div class="ho-card">
        <div class="ho-card-title">Power Cards</div>
        <div class="ho-power-section">
          <div class="ho-power-label">Bora's Cards</div>
          <div class="ho-power-row">
            ${(gs.boraPowerCards || []).map(c => {
              const card = POWER_CARDS[c];
              return card ? `<div class="ho-power-card ho-power-bora" title="${card.desc}"><div class="ho-power-icon">${card.icon}</div><div class="ho-power-name">${card.name}</div></div>` : '';
            }).join("")}
          </div>
          <div class="ho-power-label" style="margin-top:12px">Bushra's Cards</div>
          <div class="ho-power-row">
            ${(gs.bushraPowerCards || []).map(c => {
              const card = POWER_CARDS[c];
              return card ? `<div class="ho-power-card ho-power-bushra" title="${card.desc}"><div class="ho-power-icon">${card.icon}</div><div class="ho-power-name">${card.name}</div></div>` : '';
            }).join("")}
          </div>
        </div>
      </div>

      <!-- Weekly History -->
      <div class="ho-card">
        <div class="ho-card-title">Weekly History</div>
        ${history.length ? history.map(h => `
          <div class="ho-history-row">
            <div class="ho-history-week">Week of ${_shortDate(h.weekStart)}</div>
            <div class="ho-history-scores">Bora ${h.boraPoints} — ${h.bushraPoints} Bushra</div>
            <div class="ho-history-winner">${h.winner === 'Tie' ? 'Tied!' : h.winner + ' won!'}</div>
            ${h.consequence ? `<div class="ho-history-consequence">${h.consequence}</div>` : ''}
          </div>
        `).join("") : '<div class="ho-empty-msg">No weekly history yet. Complete your first week!</div>'}
      </div>
    </div>
  `;
}

/**
 * spinWheel() — animates the consequence wheel and picks a random segment.
 * Saves the result to Firestore as lastConsequence.
 */
async function spinWheel() {
  const btn = g("spinBtn");
  if (btn) btn.disabled = true;

  const wheel = g("spinWheel");
  if (!wheel) return;

  // Pick a random consequence
  const idx = Math.floor(Math.random() * CONSEQUENCES.length);
  const consequence = CONSEQUENCES[idx];

  // Animate: spin 5 full rotations + land on the segment
  const segAngle = 360 / CONSEQUENCES.length;
  const targetAngle = 360 * 5 + (360 - idx * segAngle - segAngle / 2);
  wheel.style.transition = "transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)";
  wheel.style.transform = `rotate(${targetAngle}deg)`;

  // After animation completes, save result and re-render
  setTimeout(async () => {
    state.homeGame.lastConsequence = consequence;
    await _saveGameState();
    showNotif(`Result: ${consequence}`);
    renderHomeGame();
  }, 4200);
}

// ── REGISTER ALL HOME WORLD HANDLERS ON WINDOW ──────────────────────────────
// These must be on window.* so HTML onclick attributes can call them.

window.renderKitchenOverview = renderKitchenOverview;
window.renderHomeOverview = renderHomeOverview;
window.renderHomeTodos = renderHomeTodos;
window.renderHomeCleaning = renderHomeCleaning;
window.renderHomeMaintain = renderHomeMaintain;
window.renderHomeGame = renderHomeGame;

// To-Do handlers
window.openTodoAddSheet = openTodoAddSheet;
window.closeTodoAddSheet = closeTodoAddSheet;
window.setTodoField = setTodoField;
window.saveTodo = saveTodo;
window.markTodoDone = markTodoDone;
window.uncheckTodo = uncheckTodo;
window.deleteTodo = deleteTodo;
window.openTodoDetail = openTodoDetail;

// Cleaning handlers
window.setCleaningView = setCleaningView;
window.markChoreDone = markChoreDone;
window.openChoreAddSheet = openChoreAddSheet;
window.closeChoreAddSheet = closeChoreAddSheet;
window.saveChore = saveChore;
window.deleteChore = deleteChore;

// Maintenance handlers
window.markMaintDone = markMaintDone;
window.openMaintAddSheet = openMaintAddSheet;
window.closeMaintAddSheet = closeMaintAddSheet;
window.saveMaint = saveMaint;
window.deleteMaint = deleteMaint;

// Game handlers
window.spinWheel = spinWheel;

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

  // Navigate to the Kitchen Overview as the default landing page (Phase 1)
  // PHASE 2: this will trigger renderHome() or equivalent for the Kitchen Overview tab
  console.log("[_appStart] Calling showScreen('k-overview'), current active screen:", _currentTab());
  window.showScreen("k-overview");
  console.log("[_appStart] After showScreen('k-overview'), active screen:", _currentTab());

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

    // ── One-time emoji migration (v1) ──────────────────────────────────────
    // Clear stale `customEmoji` fields from inventory items so the improved
    // auto-assignment mapping takes over. Previously, some items had wrong
    // emojis stored (e.g. 🗑️ for Capers). This runs once per device, gated
    // by a localStorage flag, and batch-saves corrected items to Firestore.
    if (!localStorage.getItem("ks-emoji-migration-v1")) {
      const itemsToFix = state.inv.filter(i => i.customEmoji);
      if (itemsToFix.length) {
        console.log(`[emoji-migration-v1] Clearing customEmoji from ${itemsToFix.length} items`);
        for (const item of itemsToFix) {
          delete item.customEmoji;
          svi(item); // persist each cleared item to Firestore (fire-and-forget)
        }
      }
      localStorage.setItem("ks-emoji-migration-v1", "1");
    }

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

// ── TAP-TO-SCROLL-TOP ───────────────────────────────────────────────────────
// A transparent 44px-tall fixed div positioned at env(safe-area-inset-top) —
// the highest point a PWA can reliably receive taps on iOS (just below the
// status bar / Dynamic Island). Tapping it smooth-scrolls the active tab's
// scrollable body to the top. Full width, z-index 9999.
(function _initScrollTopTap() {
  // Create the transparent tap zone at the very top of the screen
  const tapZone = document.createElement("div");
  tapZone.className = "scroll-top-tap";
  tapZone.setAttribute("aria-hidden", "true");
  document.body.appendChild(tapZone);

  // Map of tab names to their scrollable container selectors.
  // Includes both legacy names and new Phase 1 tab names so scroll-to-top
  // works regardless of which navigation system activates the screen.
  const scrollSelectors = {
    home: ".hbody",
    inventory: ".ibody",
    recipes: ".rbody",
    shopping: "#sh-list-body",
    chat: ".chmsgs",
    // New tab names map to the same selectors via _resolveScreenEl
    "k-pantry": ".ibody",
    "k-supplies": ".ibody",
    "k-shopping": "#sh-list-body",
    "k-deals": "#sh-deals-body",
    "k-overview": ".ko-body",
    "h-overview": ".ho-body",
    "h-todos": ".ho-body",
    "h-cleaning": ".ho-body",
    "h-maintain": ".ho-body",
    "h-game": ".ho-body",
  };

  tapZone.addEventListener("click", () => {
    // Don't scroll when an overlay/modal is open — let the overlay handle taps
    if (document.querySelector(".ov.active, .modal[style*='flex'], .bsheet.open")) return;

    // Find the active tab and its scrollable container
    const tab = _currentTab();
    if (!tab) return;

    // Resolve mapped screen (e.g. k-pantry → screen-inventory) via the same
    // mapping used by showScreen, so scroll-to-top works on legacy screens.
    const screen = _resolveScreenEl(tab);
    if (!screen) return;

    // Use the known selector for this tab, or fall back to the screen itself
    const sel = scrollSelectors[tab];
    const scrollable = (sel && screen.querySelector(sel)) || screen;

    // Smooth scroll to top
    scrollable.scrollTo({ top: 0, behavior: "smooth" });
  });
})();

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

  // Measure the world switcher's rendered height and set --wsh on :root.
  // Overlays (.ov) use top:var(--wsh) so they don't cover the switcher
  // and block tap targets on iOS (where z-index alone isn't enough).
  const wsh = document.getElementById('world-switcher')?.offsetHeight || 64;
  document.documentElement.style.setProperty('--wsh', wsh + 'px');

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
