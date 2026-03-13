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
import { dbList, dbGet, dbSet, loadFirestoreData, renderCallbacks, ss, svi, dli, svr, dlr, svShopItem, dlShopItem, resolveHousehold, joinHouseholdByCode, createHousehold, createUserProfile, pausePoll, resumePoll, checkUsernameAvailable, setUsername, loadUsername } from './db.js';

// DOM/UI helpers: g = getElementById shorthand, showNotif = toast notifications,
// showOv/hideOv = overlay open/close, renderStars = star rating HTML, tk = tracking util
import { g, showNotif, showOv, hideOv, renderStars, tk } from './helpers.js';

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
import { initHome, renderHome, renderAll, renderSum, renderWeek, renderTonight, updExport, setRenderInv, addLowToShop, toggleHomeSection, openRecipeMatch, showMoreMatches } from './ui/home.js';

// Inventory screen: render list, adjust quantities/expiry/notes, add items manually, import,
// bottom sheet add flow (mirrors shopping), voice input for inventory
import { renderInv, openAdj, remItem, updL, adjQ, adjQD, adjE, adjNote, adjUnit, adjDoNotRestock, setIT, addManual, valMA, chgMQ, selML, importDoc, adjLowThresh, adjLowThreshD, openInvAddSheet, closeInvAddSheet, invAddScan, invAddVoice, setInvAddLoc, toggleInvAddNote, qaddInv, onInvInput, pickInvInlineResult, initInvVoice, toggleInvVoice, openInvItemDetail, closeInvItemDetail, deleteInvItemImage, triggerInvPhotoUpload, handleInvPhotoSelected, addInvToShopping, changeInvUnit, changeInvThreshold, changeInvThresholdDirect, toggleDoNotRestock, changeInvLocation, changeInvQty, changeInvQtyDirect, changeInvExpiry, clearInvExpiry, setInvExpiry, changeInvNote } from './ui/inventory.js';

// Shopping screen: quick-add, toggle items, aisle grouping, share list,
// "add to kitchen" flow, bulk purchase, deal search
import { renderShop, qadd, togShop, toggleShNote, saveShNote, openShQty, adjShQty, saveShQty, togAisle, setSHT, shareList, openAddToKitchen, setAtkLoc, confirmAddToKitchen, buildList, bpTog, bpSelAll, bpConfirm, searchDeals, dealsFromList, addDealToList, renderDealsZipBanner, initVoice, toggleVoice, recordCompleted, toggleAddNote, openShopAddSheet, closeShopAddSheet, shopAddScan, shopAddVoice, closeEnrichSheet, pickEnrichResult, searchAndEnrich, onShopInput, pickInlineResult, openItemDetail, closeItemDetail, deleteItemImage, triggerProductPhotoUpload, handleProductPhotoSelected, changeShopUnit, changeShopQty, changeShopQtyDirect } from './ui/shopping.js';

// Recipes screen: CRUD, favorites, import from URL, scale servings, "what can I make",
// add recipe ingredients to shopping list, star rating, tag filtering
import { renderRecs, togFav, valR, importFromUrl, setImportMode, startBulkImport, retryBulkImport, saveRec, openER, openRecipeView, handleRecipeBack, updR, delER, scaleRec, whatCanIMake, addRecIngToShop, setStar, setRT, togTag, togglePublic, loadCommunity, setComCuisine, setComSearch, setComSort, toggleComTag, setComTime, setComMinRating, renderCommunity, openComRecipe, likeComRecipe, saveComToKitchen, addComComment, shareComRecipe, submitComReview, unpublishComRecipe, rateComRecipe, deleteComComment, openReportSheet, closeReportSheet, submitComReport, loadMoreComments, updateNotifBadge, openNotifications, openComRecipeFromNotif, triggerCoverUpload, handleCoverSelected, handleCoverDrop, removeCoverPhoto, triggerStepPhotoUpload, handleStepPhotoSelected, removeStepPhoto, openPhotoViewer, closePhotoViewer, photoViewerNav, triggerCommentPhotoUpload, handleCommentPhotosSelected, removeCommentPhoto, recipeTimeChanged, markTotalTimeManual } from './ui/recipes.js';

// Insights screen: usage analytics and charts
import { renderInsights } from './ui/insights.js';

// Chat screen: AI chat, pill suggestions, clear history, auto-reply, kitchen context builder
import { sendChat, sendPill, clrChat, ar, kitCtx, importChatRecipe } from './ui/chat.js';

// Scanner: barcode/photo scanning, manual lookup, add scanned items to inventory or list
import { stopLiveScanner, resumeScanner, openScanForList, openScanForInventory, addScannedToList, toggleScanNote, togManual, manLookup, selRL, valAdd, addToInv, chgAQ } from './ui/scan.js';

// Swipe gestures: swipe-to-delete, row tap, multi-select mode for shopping/inventory
import { initSwipe, swipeDelItem, swipeAddItem, swipeRowTap, togShopSelect, togInvSelect, cancelSelect, deleteSelected } from './ui/swipe.js';

// Meal planning: pick recipes for days, mark as cooked, schedule, chip-based filtering
import { openMealM, pickRec, closeMealM, saveMeal, clrMeal, openCooked, skipCooked, saveCooked, scheduleRecipe, schedSet, closeSchedM, initRecChips, toggleChip, filterRecs } from './ui/mealplan.js';

// Settings: config UI, push notifications, household management, theme/dark mode
// copyInviteCode/shareInviteCode/regenInviteCode: invite code actions
// removeMemberFromHH: owner removes a member
import { loadCfgUI, saveSettings, saveZipcode, toggleNotif, testNotif, scheduleNotifCheck, addHousehold, switchHousehold, removeHousehold, applyTheme, setMode, initTheme, refreshSettingsUI, copyInviteCode, shareInviteCode, regenInviteCode, removeMemberFromHH, enrichExistingItems } from './ui/settings.js';

// Onboarding: first-time user experience (4-step walkthrough)
import { checkOnboarding, onboardNext, finishOnboarding, skipOnboarding } from './ui/onboarding.js';

// ── REGISTER RENDER CALLBACKS ────────────────────────────────────────────────
// db.js needs to re-render the UI after save/delete operations, but it can't
// import UI modules directly (that would create circular imports). Instead,
// db.js exposes a `renderCallbacks` object that we populate here.
// When db.js finishes a write, it calls these functions to refresh the UI.
renderCallbacks.renderAll = renderAll;
renderCallbacks.renderSum = renderSum;
renderCallbacks.renderRecs = renderRecs;
renderCallbacks.renderShop = renderShop;

// Same circular-dependency workaround: home.js needs renderInv but can't import
// inventory.js directly, so we inject it via a setter function.
setRenderInv(renderInv);

// ── SCREEN NAVIGATION ────────────────────────────────────────────────────────
// The app is a single-page app with 5 main screens (home, inventory, recipes,
// shopping, insights). Only one screen is visible at a time. Navigation is
// driven by bottom nav bar taps which call showScreen().

// showScreen(n) — switch to the named screen (e.g. "home", "inventory")
window.showScreen = function(n) {
  // Close any open overlays (modals) before switching screens
  document.querySelectorAll(".ov.active").forEach(o => o.classList.remove("active"));
  // Deactivate all screens, then activate the target one
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  // Deactivate all nav items (.ni), then highlight the target nav button
  document.querySelectorAll(".ni").forEach(v => v.classList.remove("active"));
  g("screen-" + n)?.classList.add("active");
  g("nav-" + n)?.classList.add("active");
  // Re-render the target screen's content so data is fresh on each visit
  if (n === "home") renderHome();
  if (n === "inventory") renderInv();
  if (n === "recipes") { if (state.rt === "community") loadCommunity(); else renderRecs(); }
  if (n === "shopping") renderShop();
  if (n === "insights") renderInsights();
};

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
// toggleExp — toggle the export panel's visibility (show/hide)
window.toggleExp = function() { const p = g("exppanel"); p.style.display = p.style.display === "none" ? "block" : "none"; };

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
window.changeInvQty = changeInvQty;                   // Adjust quantity +/- from detail sheet stepper
window.changeInvQtyDirect = changeInvQtyDirect;       // Direct input of quantity from detail sheet
window.changeInvExpiry = changeInvExpiry;              // Save expiry date from detail sheet date picker
window.clearInvExpiry = clearInvExpiry;                // Clear expiry date (set to "no expiry")
window.setInvExpiry = setInvExpiry;                    // Switch from "No expiry" badge to date picker (sets today as default)
window.changeInvNote = changeInvNote;                  // Save notes from detail sheet textarea
// Inventory add-to-pantry bottom sheet (mirrors shopping add-item sheet)
window.openInvAddSheet = openInvAddSheet;     // Open the add-to-pantry bottom sheet
window.closeInvAddSheet = closeInvAddSheet;   // Close the add-to-pantry bottom sheet
window.invAddScan = invAddScan;               // Scan barcode from inventory bottom sheet
window.invAddVoice = invAddVoice;             // Start voice input from inventory bottom sheet
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

// ── Shopping screen handlers ──
window.qadd = qadd;             // Quick-add an item to the shopping list
window.togShop = togShop;       // Toggle a shopping item's checked state
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
window.closeEnrichSheet = closeEnrichSheet;   // Close the product enrichment bottom sheet
window.pickEnrichResult = pickEnrichResult;   // Pick a product match from enrichment results
window.onShopInput = onShopInput;             // Debounced live search as user types in add-item input
window.pickInlineResult = pickInlineResult;   // Pick a product from the inline search dropdown
window.openItemDetail = openItemDetail;       // Open product detail bottom sheet for a shopping item
window.closeItemDetail = closeItemDetail;     // Close product detail bottom sheet
window.changeShopUnit = changeShopUnit;       // Change unit of measure for a shopping item
window.changeShopQty = changeShopQty;         // Adjust shopping item quantity from detail sheet stepper
window.changeShopQtyDirect = changeShopQtyDirect; // Direct input of quantity from detail sheet stepper
window.deleteItemImage = deleteItemImage;     // Remove product image from a shopping item (keeps other fields)
window.triggerProductPhotoUpload = triggerProductPhotoUpload; // Open file picker to upload a custom product photo
window.handleProductPhotoSelected = handleProductPhotoSelected; // Process the selected product photo file
window.bpTog = bpTog;           // Toggle a bulk-purchase item selection
window.bpSelAll = bpSelAll;     // Select all items in the bulk-purchase overlay
window.bpUpdBtn = function() { /* no-op: button state is handled internally by the shopping module */ };
window.bpConfirm = bpConfirm;   // Confirm bulk purchase selections
window._bpItems = [];           // Shared state: items selected for bulk purchase
window.searchDeals = searchDeals;     // Search for grocery deals via Kroger API
window.dealsFromList = dealsFromList; // Find deals matching current shopping list items
window.addDealToList = addDealToList; // Add a found deal item to the shopping list
window.renderDealsZipBanner = renderDealsZipBanner; // Update zipcode banner in Deals tab
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
window.setStar = setStar;       // Set star rating on a recipe
window.togTag = togTag;         // Toggle a tag filter on the recipes screen
window.recipeTimeChanged = recipeTimeChanged;   // Auto-calc total time when prep/cook changes
window.markTotalTimeManual = markTotalTimeManual; // Mark total time as manually overridden
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
window.togManual = togManual;                   // Toggle manual barcode entry mode
window.manLookup = manLookup;                   // Look up a manually entered barcode
window.selRL = selRL;                           // Select a result from the barcode lookup list
window.valAdd = valAdd;                         // Validate the scanned-item add form
window.addToInv = addToInv;                     // Add a scanned/looked-up item to inventory
window.chgAQ = chgAQ;                           // Change quantity in the add-to-inventory form

// ── Swipe / Multi-select handlers ──
window.swipeDelItem = swipeDelItem;   // Delete an item revealed by swipe gesture
window.swipeAddItem = swipeAddItem;   // Add an inventory item to shopping via swipe gesture
window.swipeRowTap = swipeRowTap;     // Handle tap on a swipeable row
window.togShopSelect = togShopSelect; // Toggle multi-select mode on shopping list
window.togInvSelect = togInvSelect;   // Toggle multi-select mode on inventory list
window.cancelSelect = cancelSelect;   // Cancel multi-select mode
window.deleteSelected = deleteSelected; // Delete all selected items in multi-select mode

// ── Meal plan handlers ──
window.openMealM = openMealM;     // Open the meal plan modal for a specific day
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
window.copyInviteCode = copyInviteCode;     // Copy household invite code to clipboard
window.shareInviteCode = shareInviteCode;   // Share invite code via Web Share API
window.regenInviteCode = regenInviteCode;   // Regenerate a new invite code (owner only)
window.removeMemberFromHH = removeMemberFromHH; // Remove a member from the household (owner only)
window.enrichExistingItems = enrichExistingItems; // Retroactive product enrichment for all items

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

  // Hide the login screen ("LS") and show the main app container ("APP")
  g("LS").style.display = "none";
  g("APP").style.display = "flex";

  // Navigate to the home screen as the default landing page
  window.showScreen("home");

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
      // Try to read the user's Firestore profile to get their household list
      const userDoc = await dbGet(`users/${user.uid}`);
      if (userDoc?.householdIds?.length) {
        // User has households in Firestore — cache them locally
        const arr = [...userDoc.householdIds];
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
    renderAll(); renderRecs(); renderShop(); renderSum();
  } catch (e) {
    console.error("initial load error", e);
    ss("error");
  }

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

  // "Start my own kitchen" — creates a new household (same as original flow)
  g("btnCreateKitchen").onclick = async () => {
    disableBtn(g("btnCreateKitchen"), true);
    try {
      const cfgName = state.cfg?.name || "My Kitchen";
      await createHousehold(user.uid, cfgName);
      const profile = await createUserProfile(user);
      profile.householdIds = [user.uid];
      await dbSet(`users/${user.uid}`, profile);
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
          // Returning user — resolve household and boot normally
          g("LS").style.display = "none";
          g("APP").style.display = "flex";
          const hid = await resolveHousehold(user);
          _bootWithHousehold(hid);
        } else {
          // First-time user — show join/create household screen
          _showJoinScreen(user);
        }
      } catch (err) {
        console.error("Failed to resolve household:", err);
        // Fallback: use UID as household ID so the app still loads
        const hid = user.uid;
        _bootWithHousehold(hid);
      }
    }
  } else {
    // ── User is signed out ──
    // Stop all real-time Firestore listeners to prevent memory leaks
    stopRealtimeSync();
    // Reset the boot flag so a fresh sign-in will re-initialize the app
    appBooted = false;
    // Hide the app and show the login/auth screen
    g("APP").style.display = "none";
    g("LS").style.display = "flex";
    showAuthScreen("signin");
  }
});
