// ── BARCODE SCANNER (LIVE) ──────────────────────────────────────────────────
// This module handles real-time barcode scanning using the device's rear camera.
// Instead of taking a photo and decoding it, the camera streams continuously
// inside a viewfinder and Quagga.js detects barcodes automatically in real time
// (similar to MyFitnessPal's scanner UX).
//
// Flow:
//   1. User opens the scan overlay → camera starts streaming inside the viewfinder
//   2. Quagga continuously analyzes video frames for barcodes
//   3. When a barcode is detected with high confidence, we auto-look it up
//   4. Product result is shown — user can add to inventory or shopping list
//   5. Manual barcode entry remains available as a fallback
//
// The scan flow supports two destinations:
//   - Inventory mode (default): scanned product goes into the pantry
//   - Shopping list mode: scanned product is added as a shopping list item

import { state } from '../state.js';            // Global app state (holds current product, inventory, scan destination, etc.)
import { svi } from '../db.js';                   // svi = save inventory item (persists to Firebase)
import { consolidateShopItem } from './shopping.js'; // Consolidation-aware add to shopping list (deduplicates by name)
import { g, showNotif, showOv, hideOv, formatScanResult } from '../helpers.js'; // g = getElementById shorthand, showNotif = toast notification, showOv/hideOv = show/hide overlay panels, formatScanResult = smart product name formatting

// Track whether the live scanner is currently active to avoid double-init
let scannerRunning = false;

// Debounce flag: prevents multiple rapid detections from triggering concurrent lookups
let processingBarcode = false;

// Holds a manually acquired camera stream (used as a fallback on iOS Safari
// when Quagga's built-in getUserMedia produces a black feed)
let _manualStream = null;

// ── PERSISTENT SHEET SCANNER STATE ──
// When the add-item bottom sheet is open, the scanner runs persistently inside
// the sheet viewfinder. Items are auto-added on detection (self-checkout UX).
let _sheetScanMode = null;   // "shop" or "inv" — which sheet the scanner is embedded in
let _lastSheetCode = null;   // Last scanned barcode (to prevent immediate re-detection of same item)
let _lastSheetScanTime = 0;  // Timestamp of last sheet scan (cooldown period)
const SHEET_SCAN_COOLDOWN = 3000; // 3 seconds before re-scanning the same barcode

// Starts the live camera scanner inside the viewfinder element.
// Uses a double-requestAnimationFrame to ensure the scan overlay is fully
// laid out before Quagga measures container dimensions, then initializes
// Quagga with the rear camera and applies iOS Safari video fixes.
function startLiveScanner() {
  if (scannerRunning) return;  // Already running, skip re-init

  const target = g("scanner-video");
  if (!target) return;

  // Show the scanning status indicator while camera is initializing
  const statusEl = g("scan-status");
  if (statusEl) { statusEl.textContent = "Starting camera…"; statusEl.style.display = "block"; }

  // Double requestAnimationFrame: the first rAF fires after the current frame
  // is committed, the second fires after the browser has actually painted.
  // This ensures the scan overlay has non-zero dimensions when Quagga reads them.
  requestAnimationFrame(() => { requestAnimationFrame(() => {
    _initQuagga(target, statusEl);
  }); });
}

// Initializes Quagga for barcode detection with the rear camera.
// After init, applies iOS Safari fixes (playsinline attribute, forced play)
// and schedules a fallback that re-acquires the camera if the feed is still black.
function _initQuagga(target, statusEl) {
  Quagga.init({
    inputStream: {
      name: "Live",
      type: "LiveStream",
      target: target,             // DOM element where the video + canvas get injected
      constraints: {
        facingMode: "environment", // Use rear camera (front-facing would be "user")
        width: { ideal: 1280 },   // Request HD resolution for better barcode detection
        height: { ideal: 720 }
      }
    },
    locator: {
      patchSize: "medium",        // Balance between speed and accuracy for locating barcodes
      halfSample: true            // Downsample for faster frame processing on mobile
    },
    decoder: {
      // Support all common retail barcode formats
      readers: ["ean_reader", "ean_8_reader", "upc_reader", "upc_e_reader", "code_128_reader", "code_39_reader"]
    },
    locate: true,                 // Auto-detect barcode region within each frame
    frequency: 10                 // Analyze 10 frames per second (good balance of speed vs CPU)
  }, function(err) {
    if (err) {
      // Camera access denied or not available — show error and suggest manual entry
      console.error("Scanner init error:", err);
      const errEl = g("scerr");
      if (errEl) {
        errEl.textContent = "⚠️ Could not access camera. Try entering the barcode manually.";
        errEl.style.display = "block";
      }
      if (statusEl) statusEl.style.display = "none";
      return;
    }

    // iOS Safari fix: ensure Quagga's video element has the playsinline attribute.
    // Without it, iOS tries to play video fullscreen instead of inline, causing
    // the camera feed to appear black inside the viewfinder container.
    // Also set muted (required for autoplay on iOS) and force play().
    _fixVideoForIOS(target);

    // Camera initialized successfully — start processing video frames
    Quagga.start();
    scannerRunning = true;
    if (statusEl) statusEl.textContent = "Scanning…";

    // Fallback: if after 2 seconds the video has no visible frame (videoWidth === 0),
    // manually acquire a new camera stream and attach it. This catches edge cases
    // where Quagga's internal getUserMedia produced a valid stream that doesn't render.
    setTimeout(() => _ensureCameraVisible(target), 2000);
  });

  // Register the detection callback — fires each time Quagga decodes a barcode.
  // We check confidence and debounce to avoid false positives and double-lookups.
  Quagga.onDetected(onBarcodeDetected);
}

// Finds all video elements inside the scanner container and ensures they have
// the playsinline attribute required for inline video on iOS Safari.
// Without playsinline, iOS opens video in fullscreen mode, which renders as
// a black rectangle inside our viewfinder container.
function _fixVideoForIOS(target) {
  target.querySelectorAll('video').forEach(v => {
    v.setAttribute('playsinline', '');
    v.setAttribute('webkit-playsinline', '');
    v.muted = true;
    // Force play in case autoplay was blocked by the browser
    v.play().catch(() => {});
  });
}

// Checks if the camera feed is actually visible after Quagga started.
// If the video element has zero videoWidth (black/no feed), manually acquires
// a new camera stream via getUserMedia and replaces the video's srcObject.
// Quagga's frame analysis reads from the video element, so replacing the
// stream source will also update what Quagga sees for barcode detection.
async function _ensureCameraVisible(target) {
  if (!scannerRunning) return;  // Scanner was stopped before this timeout fired
  const video = target.querySelector('video');
  if (!video || video.videoWidth > 0) return;  // Camera is rendering fine, no action needed

  console.warn("Camera feed appears black — retrying with manual getUserMedia");
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment", width: { ideal: 1280 }, height: { ideal: 720 } }
    });
    _manualStream = stream;

    // Stop Quagga's original (non-rendering) stream tracks
    if (video.srcObject) {
      video.srcObject.getTracks().forEach(t => t.stop());
    }

    // Attach our manually acquired stream with proper iOS attributes
    video.srcObject = stream;
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.muted = true;
    await video.play();
  } catch (e) {
    console.error("Manual camera retry failed:", e);
  }
}

// Stops the live scanner and releases the camera.
// Called when the user navigates away from the scan overlay (back button)
// or after a successful barcode detection to free the camera resource.
export function stopLiveScanner() {
  if (!scannerRunning) return;
  try { Quagga.stop(); } catch { /* ignore if already stopped */ }
  Quagga.offDetected(onBarcodeDetected);  // Remove the detection listener to prevent stale callbacks

  // Stop the manually acquired fallback stream if it was activated,
  // releasing the camera hardware back to the OS
  if (_manualStream) {
    _manualStream.getTracks().forEach(t => t.stop());
    _manualStream = null;
  }

  scannerRunning = false;
  processingBarcode = false;
}

// Handles a barcode detection event from Quagga's live stream.
// Validates the result confidence to filter out false positives,
// shows a success animation, then triggers the product lookup.
// In sheet scanner mode (persistent), auto-adds the item and keeps scanning.
async function onBarcodeDetected(result) {
  if (processingBarcode) return;           // Already processing a detection, ignore this one

  const code = result && result.codeResult && result.codeResult.code;
  if (!code) return;

  // Require minimum confidence to avoid false positives from noisy frames.
  // Quagga reports errors per character; lower decodedCodes error = higher confidence.
  const errors = result.codeResult.decodedCodes
    ?.filter(d => d.error !== undefined)
    ?.map(d => d.error) || [];
  const avgError = errors.length ? errors.reduce((a, b) => a + b, 0) / errors.length : 1;
  if (avgError > 0.25) return;             // Skip low-confidence reads (threshold tuned for live scanning)

  // ── PERSISTENT SHEET SCANNER MODE ──
  // In sheet scanner mode, auto-add the scanned item and keep scanning.
  // Implements a cooldown to prevent re-scanning the same barcode immediately.
  if (_sheetScanMode) {
    // Cooldown: skip if same barcode was just scanned
    const now = Date.now();
    if (code === _lastSheetCode && (now - _lastSheetScanTime) < SHEET_SCAN_COOLDOWN) return;

    processingBarcode = true;
    _lastSheetCode = code;
    _lastSheetScanTime = now;

    // Flash the viewfinder border green to indicate successful scan
    _flashSheetScanner();

    try {
      const prod = await lkup(code);
      if (prod.notFound) {
        showNotif("Barcode not found — try entering manually");
      } else {
        // Auto-add the scanned product to the appropriate list
        _autoAddFromSheet(prod);
      }
    } catch {
      showNotif("Lookup failed — try again");
    }

    processingBarcode = false;
    return;
  }

  // ── STANDARD SCANNER MODE (full-screen overlay) ──
  processingBarcode = true;                // Lock to prevent concurrent lookups

  // Flash the success checkmark animation over the viewfinder
  showSuccessFlash();

  // Stop the camera while we look up the product (saves battery, prevents more detections)
  stopLiveScanner();

  // Transition to the spinner view for the lookup phase
  g("scanbody").style.display = "none";
  g("scspin").style.display = "block";
  g("scst").textContent = "Found " + code + " — looking up…";

  try {
    // Look up the barcode via the serverless endpoint (tries 5 databases in waterfall)
    const prod = await lkup(code);
    state.cp = prod;                       // Store the current product in global state for later use

    // Reset the quantity and expiry fields in the result overlay to defaults
    g("aqty").value = 1; g("aexp").value = "";
    selRL("fridge", g("rl-fridge"));       // Pre-select "fridge" as the default storage location

    showRes(prod);                         // Render the product result overlay
  } catch {
    // Lookup failed — show error and let user retry or enter manually
    const err = g("scerr");
    err.textContent = "⚠️ Lookup failed. Check your connection or enter the barcode manually.";
    err.style.display = "block";
  }

  // Restore the scan body UI (hidden during spinner phase)
  g("scanbody").style.display = "block";
  g("scspin").style.display = "none";
  processingBarcode = false;
}

// Briefly shows a green checkmark flash over the camera viewfinder
// to give the user immediate visual feedback that a barcode was recognized.
function showSuccessFlash() {
  const el = g("scan-success");
  if (!el) return;

  // Reset and re-trigger the CSS animation by cloning and replacing the element
  el.style.display = "flex";
  el.style.animation = "none";
  // Force a reflow so re-applying the animation actually replays it
  void el.offsetHeight;
  el.style.animation = "";

  // Hide after the animation completes (450ms matches the CSS animation duration)
  setTimeout(() => { el.style.display = "none"; }, 500);
}

// Resumes the live scanner after navigating back from the result overlay.
// Preserves the current scan destination (inventory vs shopping list)
// so the user doesn't lose their context.
export function resumeScanner() {
  hideOv("result");
  showOv("scan");
  g("scerr").style.display = "none";
  startLiveScanner();
}

// Opens the scan overlay in "shopping list" mode.
// When a product is scanned in this mode, it gets added to the shopping list
// instead of the pantry inventory. Updates the overlay title and hint text
// so the user knows where the scanned item will go.
export function openScanForList() {
  state.scanDestList = true;              // Flag: route scanned items to shopping list
  showOv("scan");                         // Show the scan overlay panel
  const ttl = g("scanovttl"); if (ttl) ttl.textContent = "Scan → Shopping List";
  const hint = g("scan-dest-hint"); if (hint) hint.textContent = "Running low? Scan to add to your shopping list.";
  g("scerr").style.display = "none";     // Clear any previous errors
  startLiveScanner();                     // Begin live camera scanning immediately
}

// Opens the scan overlay in "inventory" mode (the default).
// Scanned products will be added to the pantry inventory.
// Resets the title/hint to the generic scan wording.
export function openScanForInventory() {
  state.scanDestList = false;             // Flag: route scanned items to inventory (default behavior)
  showOv("scan");                         // Show the scan overlay panel
  const ttl = g("scanovttl"); if (ttl) ttl.textContent = "Scan Barcode";
  const hint = g("scan-dest-hint"); if (hint) hint.textContent = "Scan a barcode to add to your pantry or shopping list.";
  g("scerr").style.display = "none";     // Clear any previous errors
  startLiveScanner();                     // Begin live camera scanning immediately
}

// Toggles the optional note field in the scan result overlay.
// Mirrors the toggleAddNote() behavior from the shopping list quick-add flow.
// When shown, focuses the textarea so the user can start typing immediately.
export function toggleScanNote() {
  const wrap = g("scanNoteWrap");
  if (!wrap) return;
  const showing = wrap.style.display === "none";
  wrap.style.display = showing ? "block" : "none";
  if (showing) {
    const inp = g("scanNoteInp");
    if (inp) inp.focus();
  }
}

// Adds the currently scanned product to the shopping list (not inventory).
// Called when the user taps "Add to List" from the scan result overlay.
// Preserves the full product name and brand as separate fields so they display
// correctly in the shopping list (name as main text, brand as subtitle).
// Also persists the product image URL for thumbnail display.
export function addScannedToList() {
  if (!state.cp) return;                  // Guard: no scanned product available

  // Use the exact product name from the scan result, preserving it as-is.
  // Falls back to "Barcode XXXX" only if the lookup returned no match.
  const name = state.cp.notFound ? ("Barcode " + state.cp.barcode) : state.cp.name;

  // Capture the optional note from the collapsible note field (if expanded and filled)
  const noteInp = g("scanNoteInp");
  const note = noteInp ? noteInp.value.trim() : "";

  // Read quantity from the result overlay (default 1)
  const qty = parseInt(g("aqty").value) || 1;

  // Compute smart display title using formatScanResult so list rows show
  // a clean product type instead of the full long name
  const formatted = formatScanResult(state.cp);

  // Build the shopping list item with brand stored as a separate field
  // so it renders as a subtitle in the list, not concatenated into the name
  const item = { id: Date.now().toString(), name, qty, checked: false, src: "scan" };
  if (formatted.title && formatted.title.toLowerCase() !== name.toLowerCase()) {
    item.scanTitle = formatted.title;                  // Short product type for prominent list display
  }
  if (state.cp.brand) item.brand = state.cp.brand;   // Preserve brand separately for subtitle display
  if (state.cp.image) item.image = state.cp.image;   // Persist the product image for list thumbnail
  if (note) item.note = note;                         // Include note only if the user typed something

  // Consolidate with existing items instead of creating duplicates
  consolidateShopItem(item);

  showNotif("Added to list: " + name);    // Toast confirmation
  hideOv("result"); hideOv("scan");       // Close both overlays (result and scan)
  state.scanDestList = false;             // Reset destination flag back to default

  // Reset and collapse the note field so it's clean for the next scan
  if (noteInp) noteInp.value = "";
  const wrap = g("scanNoteWrap");
  if (wrap) wrap.style.display = "none";

  window.showScreen("shopping");          // Navigate to the shopping list screen
}

// Toggles visibility of the manual barcode entry section.
// Used when the user wants to type a barcode number instead of scanning with the camera.
export function togManual() {
  const el = g("mentry");
  el.style.display = el.style.display === "none" ? "block" : "none";
}

// Looks up a barcode that the user typed manually into the text input.
// Follows the same flow as a live detection but skips the camera step
// since we already have the barcode string.
export async function manLookup() {
  const v = g("meinp").value.trim(); if (!v) return;  // Ignore empty input

  // Stop the live scanner if it's running (user chose manual entry instead)
  stopLiveScanner();

  // Show spinner while looking up the product
  g("scanbody").style.display = "none";
  g("scspin").style.display = "block";
  g("scst").textContent = "Looking up…";

  const prod = await lkup(v);              // Query product databases with the entered barcode
  state.cp = prod;                         // Store result in global state

  // Reset result form fields to defaults
  g("aqty").value = 1; g("aexp").value = "";
  selRL("fridge", g("rl-fridge"));         // Pre-select "fridge" as default location
  g("meinp").value = "";                   // Clear the manual entry input

  showRes(prod);                           // Display the product result overlay

  // Hide spinner, restore scan body
  g("scanbody").style.display = "block";
  g("scspin").style.display = "none";
}

// Master product lookup — calls the /api/barcode serverless endpoint which
// tries five product databases in waterfall order:
//   1. Edamam (food + nutrition data)
//   2. Open Food Facts (community food DB)
//   3. Open Beauty Facts (cosmetics, personal care)
//   4. Open Pet Food Facts (pet food and treats)
//   5. UPC Item DB (general US products)
// Returns the product object on success, or a "not found" placeholder if all fail.
async function lkup(bc) {
  try {
    const r = await fetch("/api/barcode?code=" + encodeURIComponent(bc));
    if (r.ok) {
      const d = await r.json();
      if (d.found && d.product) {
        // Server returned a match — add the notFound flag for the UI
        return { ...d.product, notFound: false };
      }
    }
  } catch {
    // Network error or server failure — fall through to "not found"
  }

  // No database had this barcode — return a placeholder so the user can enter the name manually
  return { barcode: bc, name: "", brand: "", quantity: "", category: "General", image: null, source: null, description: "", notFound: true };
}

/**
 * srcUrl(source, barcode) — Returns the URL to the product's page on the source database website.
 * Used to make the source badge a tappable link so users can view full product details
 * on the original database. Returns "#" as a safe fallback for unknown sources.
 */
function srcUrl(source, barcode) {
  switch (source) {
    case "Open Food Facts":     return `https://world.openfoodfacts.org/product/${barcode}`;
    case "Open Beauty Facts":   return `https://world.openbeautyfacts.org/product/${barcode}`;
    case "Open Pet Food Facts": return `https://world.openpetfoodfacts.org/product/${barcode}`;
    case "UPC Item DB":         return `https://www.upcitemdb.com/upc/${barcode}`;
    case "Edamam":              return `https://www.edamam.com/food-database/en/`;
    default:                    return "#";
  }
}

// Renders the scan result overlay with product details (or a "not found" form).
// Two distinct UI states:
//   - Product found: smart 3-tier display — short product type title (large),
//     full product name as subtitle (smaller, tap to expand), brand (smallest).
//   - Product not found: shows the barcode, a text input for manual entry,
//     and a prominent "Try Again" button to re-trigger the scanner.
function showRes(prod) {
  hideOv("scan");                          // Close the scan overlay before showing the result
  g("resttl").textContent = prod.notFound ? "Not Found" : "Product Found ✓";
  g("aunit").value = prod.quantity || "unit";  // Pre-fill the unit field with the product's quantity info

  let html = "";
  if (prod.notFound) {
    // Product not in any database — show a "Not found" message with retry + manual entry
    html = `<div class="nfb">
      <div style="text-align:center;margin-bottom:12px">
        <div style="font-size:2rem;margin-bottom:6px">🔍</div>
        <div style="font-size:1rem;font-weight:600;color:var(--tx)">Barcode not found</div>
        <div style="font-size:.82rem;color:var(--mt);margin-top:4px">
          <code>${prod.barcode}</code> wasn't found in any database.
        </div>
      </div>
      <button class="scan-retry-btn" onclick="resumeScanner()">📷 Try again</button>
      <div style="margin-top:14px;font-size:.85rem;color:var(--mt);text-align:center">or enter name manually:</div>
      <input class="fi" id="mnm" placeholder="Product name (required)" oninput="valAdd()" style="margin-top:8px"/>
    </div>`;
    // Disabled state is applied after buttons are rendered below
  } else {
    // Product found — smart title/subtitle/brand display using formatScanResult.
    // Title: short product type (from category, description, or extracted from name)
    // Subtitle: full product name with tap-to-expand truncation
    // Brand: shown smallest at bottom
    const formatted = formatScanResult(prod);

    const img = prod.image ? `<img src="${prod.image}" class="pimg" onerror="this.style.display='none'"/>` : `<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">🛒</div>`;

    // Build the source badge — if we can link to the product's page on the source database, make it tappable
    const srcHtml = prod.source ? `<a href="${srcUrl(prod.source, prod.barcode)}" target="_blank" rel="noopener" class="srcb" style="text-decoration:none">${prod.source} ↗</a>` : "";

    // Title: short product type displayed prominently
    const titleHtml = `<div class="scan-result-name">${formatted.title}</div>`;

    // Subtitle: full product name — truncated with tap-to-expand if different from title
    const showSubtitle = formatted.subtitle && formatted.subtitle.toLowerCase() !== formatted.title.toLowerCase();
    const subtitleHtml = showSubtitle
      ? `<div class="scan-result-subtitle scan-text-truncated" onclick="toggleScanExpand(this)">${formatted.subtitle}</div>`
      : "";

    // Brand name — shown smallest below the subtitle
    const brandHtml = formatted.brand ? `<div class="scan-result-brand">${formatted.brand}</div>` : "";

    // Assemble the product card with smart title, subtitle, brand, image, and metadata
    html = `<div class="pcard"><div class="phdr">${img}<div style="flex:1">${titleHtml}${subtitleHtml}${brandHtml}<div class="pbc">${prod.barcode}</div><span class="bdg">${prod.category}</span>${srcHtml}</div></div></div>`;

  }

  g("resbody").innerHTML = html;           // Inject the built HTML into the result overlay body

  // Hide inventory-specific fields (location, expiry, unit) when scanning from the Shopping tab —
  // shopping list items don't have a storage location or expiry date.
  // These fields are direct children of .ovbody in the ov-result overlay.
  const ovBody = g("ov-result")?.querySelector(".ovbody");
  if (ovBody) {
    const locationRow = ovBody.querySelector(".frow");          // First .frow = location picker
    const expiryRow = ovBody.querySelectorAll(".frow")[1];      // Second .frow = expiry date
    const unitRow = ovBody.querySelectorAll(".qrow")[1];        // Second .qrow = unit input
    if (locationRow) locationRow.style.display = state.scanDestList ? "none" : "";
    if (expiryRow) expiryRow.style.display = state.scanDestList ? "none" : "";
    if (unitRow) unitRow.style.display = state.scanDestList ? "none" : "";
  }

  // Dynamically render the action buttons based on which tab triggered the scan.
  // Shopping tab context (scanDestList=true): only show "Add to Shopping List" as primary —
  // the user is clearly in shopping mode, so "Add to Pantry" is irrelevant and confusing.
  // Pantry tab context (scanDestList=false): keep both options (Add to Pantry primary,
  // Add to Shopping List secondary) since users might want either from inventory context.
  const destEl = g("scan-dest-btns");
  if (destEl) {
    if (state.scanDestList) {
      // Shopping tab context — single primary action: add to shopping list
      destEl.innerHTML = `<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2;background:var(--gn);border-color:var(--gn)" id="addbtn" onclick="addScannedToList()">🛒 Add to Shopping List</button>
      </div>`;
    } else {
      // Pantry tab context — primary: add to pantry, secondary: add to shopping list
      destEl.innerHTML = `<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2" id="addbtn" onclick="addToInv()">📦 Add to Pantry</button>
      </div>
      <button class="btn bs bf" style="margin-top:8px;border-color:var(--gn);color:var(--gn)" onclick="addScannedToList()">🛒 Add to Shopping List instead</button>`;
    }
  }

  // Re-apply disabled state for not-found products after re-rendering buttons
  if (prod.notFound) {
    setTimeout(() => { const btn = g("addbtn"); if (btn) btn.disabled = true; }, 0);
  }

  showOv("result");                        // Show the result overlay
}

// Selects a storage location (e.g. "fridge", "pantry", "freezer") in the scan result overlay.
// Updates global state and highlights the selected location button while deselecting others.
// Called when the user taps a location button, or programmatically to set the default.
export function selRL(loc, btn) {
  state.selR = loc;                        // Store the selected location for use when saving the item
  document.querySelectorAll("#ov-result .lbtn").forEach(b => b.classList.remove("sel"));  // Deselect all location buttons
  if (btn) btn.classList.add("sel");       // Highlight the newly selected button
}

// Validates the manual product name input (shown when barcode lookup fails).
// Enables the "Add" button only when the user has entered a non-empty name.
// Called on every keystroke via the oninput handler on the name input field.
export function valAdd() {
  const el = g("mnm");                    // The manual name input element
  g("addbtn").disabled = !(el && el.value.trim());  // Disable if empty, enable if non-empty
}

// Adds the scanned product to the pantry inventory.
// If the item already exists (matched by barcode-derived ID), increments its quantity
// instead of creating a duplicate. Persists the item to Firebase via svi().
export async function addToInv() {
  if (!state.cp) return;                   // Guard: no scanned product to add

  // Determine the product name: use the manual input if lookup failed, otherwise use the API name
  const ne = g("mnm");
  const nm = state.cp.notFound ? (ne ? ne.value.trim() || "" : "") : state.cp.name;
  if (!nm) return;                         // Guard: can't add an item without a name

  // Read user inputs from the result overlay
  const unit = g("aunit").value.trim() || "unit", qty = Math.max(1, parseInt(g("aqty").value) || 1), exp = g("aexp").value || null;

  // Generate a deterministic ID from the barcode (non-word chars replaced with dashes).
  // This lets us detect duplicates: if you scan the same barcode twice, it updates the existing item.
  const id = "item-" + state.cp.barcode.replace(/\W/g, "-"), ex = state.inv.find(i => i.id === id);

  // Compute smart display title for clean list rendering
  const formatted = formatScanResult(state.cp);
  const scanTitle = (formatted.title && formatted.title.toLowerCase() !== nm.toLowerCase()) ? formatted.title : null;

  // Save to database — if the item already exists, add to its quantity and keep its original addedAt date
  // Save to Firestore — nutrition intentionally omitted (unreliable from text/barcode matching)
  const itemData = { id, barcode: state.cp.barcode, name: nm, brand: state.cp.brand || "", unit, qty: ex ? ex.qty + qty : qty, location: state.selR, category: state.cp.category || "General", image: state.cp.image || null, source: state.cp.source || null, expiry: exp, addedAt: ex ? ex.addedAt : new Date().toLocaleDateString() };
  if (scanTitle) itemData.scanTitle = scanTitle;       // Short product type for prominent list display
  await svi(itemData);

  // Show appropriate toast: "+2 added to Milk" for existing items, "Milk added!" for new items
  showNotif(ex ? `+${qty} added to ${nm}` : `${nm} added!`);

  state.cp = null;                         // Clear the current product from state
  hideOv("result");                        // Close the result overlay
}

// Increments or decrements the quantity field in the scan result overlay.
// Called by the +/- buttons. The delta (d) is +1 or -1.
// Clamps the value to a minimum of 1 (can't add zero or negative items).
export function chgAQ(d) {
  const i = g("aqty");
  i.value = Math.max(1, (parseInt(i.value) || 1) + d);
}

// ── SCAN RESULT DISPLAY: TAP TO EXPAND ──────────────────────────────────────
// Toggles truncated text between collapsed (ellipsis) and expanded (full text).
// Applied to product names and descriptions exceeding 40 characters.
export function toggleScanExpand(el) {
  if (!el) return;
  if (el.classList.contains("scan-text-truncated")) {
    // Expand: remove truncation, show full text
    el.classList.remove("scan-text-truncated");
    el.classList.add("scan-text-expanded");
  } else if (el.classList.contains("scan-text-expanded")) {
    // Collapse: re-apply truncation
    el.classList.remove("scan-text-expanded");
    el.classList.add("scan-text-truncated");
  }
}

// ── PERSISTENT SHEET SCANNER ────────────────────────────────────────────────
// Embeds a live barcode scanner inside the add-item bottom sheets. The camera
// runs continuously (self-checkout style) so the user can scan multiple items
// without tapping "Scan" each time. Items are auto-added on detection.

/**
 * startSheetScanner(targetId, list) — Starts the persistent scanner in a bottom sheet.
 * Initializes Quagga inside the given viewfinder element and enters persistent mode
 * where detected barcodes are auto-looked-up and added to the list.
 *
 * @param {string} targetId - ID of the viewfinder container element
 * @param {string} list - "shop" or "inv" — determines where scanned items go
 */
export function startSheetScanner(targetId, list) {
  // Stop any existing scanner instance first (Quagga is singleton)
  if (scannerRunning) stopLiveScanner();

  _sheetScanMode = list;
  _lastSheetCode = null;
  _lastSheetScanTime = 0;

  const container = g(targetId.replace("VF", "")); // The .sheet-scanner wrapper
  const target = g(targetId);
  if (!container || !target) return;

  // Show the scanner container (remove hidden class)
  container.classList.remove("hidden");

  // Double rAF ensures the bottom sheet is fully rendered before Quagga measures
  requestAnimationFrame(() => { requestAnimationFrame(() => {
    _initSheetQuagga(target);
  }); });
}

/**
 * _initSheetQuagga(target) — Initializes Quagga for the sheet scanner viewfinder.
 * Same config as the main scanner but targets the sheet viewfinder element.
 * On error, hides the scanner gracefully.
 */
function _initSheetQuagga(target) {
  Quagga.init({
    inputStream: {
      name: "Live",
      type: "LiveStream",
      target: target,
      constraints: {
        facingMode: "environment",
        width: { ideal: 1280 },
        height: { ideal: 720 }
      }
    },
    locator: { patchSize: "medium", halfSample: true },
    decoder: {
      readers: ["ean_reader", "ean_8_reader", "upc_reader", "upc_e_reader", "code_128_reader", "code_39_reader"]
    },
    locate: true,
    frequency: 10
  }, function(err) {
    if (err) {
      console.warn("Sheet scanner init error:", err);
      // Camera not available — hide the scanner area and let user type manually
      _hideSheetScanner();
      return;
    }

    // Apply iOS Safari video fixes (playsinline, muted, forced play)
    _fixVideoForIOS(target);
    Quagga.start();
    scannerRunning = true;

    // Fallback: re-acquire camera if feed appears black after 2 seconds
    setTimeout(() => _ensureCameraVisible(target), 2000);
  });

  // Register detection callback — shared with the standard scanner
  Quagga.onDetected(onBarcodeDetected);
}

/**
 * stopSheetScanner() — Stops the persistent sheet scanner and hides the viewfinder.
 * Called when user closes the add-item sheet (full stop + hide).
 */
export function stopSheetScanner() {
  _sheetScanMode = null;
  _lastSheetCode = null;
  stopLiveScanner();
  _hideSheetScanner();
}

/**
 * pauseSheetScanner() — Stops the camera without hiding the scanner container.
 * Called when user taps "Stop scanning" to toggle off the camera while keeping
 * the sheet open. The scanner can be restarted via startSheetScanner().
 */
export function pauseSheetScanner() {
  _sheetScanMode = null;
  _lastSheetCode = null;
  stopLiveScanner();
}

/**
 * _hideSheetScanner() — Hides both sheet scanner containers (shopping + inventory).
 * Adds the "hidden" class so the scanner area collapses out of the sheet layout.
 */
function _hideSheetScanner() {
  const shopScanner = g("shopAddScanner");
  const invScanner = g("invAddScanner");
  if (shopScanner) shopScanner.classList.add("hidden");
  if (invScanner) invScanner.classList.add("hidden");
}

/**
 * _flashSheetScanner() — Flashes the sheet scanner viewfinder border green
 * to give visual feedback that a barcode was successfully detected.
 */
function _flashSheetScanner() {
  const vfId = _sheetScanMode === "shop" ? "shopAddScannerVF" : "invAddScannerVF";
  const vf = g(vfId);
  if (!vf) return;
  vf.classList.remove("scan-flash");
  void vf.offsetWidth; // Force reflow to restart animation
  vf.classList.add("scan-flash");
  setTimeout(() => vf.classList.remove("scan-flash"), 450);
}

/**
 * _autoAddFromSheet(prod) — Auto-adds a scanned product from the sheet scanner.
 * In shopping mode, adds to the shopping list. In inventory mode, adds to supplies
 * using the location selected in the add sheet's location picker.
 * Shows a brief toast confirming the addition.
 */
async function _autoAddFromSheet(prod) {
  const name = prod.name || "Unknown product";

  // Compute smart display title so list rows show a clean product type
  const formatted = formatScanResult(prod);
  const scanTitle = (formatted.title && formatted.title.toLowerCase() !== name.toLowerCase()) ? formatted.title : null;

  if (_sheetScanMode === "shop") {
    // Add to shopping list with consolidation (increments qty if already on list)
    const item = {
      id: Date.now().toString(),
      name,
      qty: 1,
      checked: false,
      src: "scan",
      brand: prod.brand || "",
      image: prod.image || null
    };
    if (scanTitle) item.scanTitle = scanTitle;          // Short product type for prominent list display
    await consolidateShopItem(item);
    showNotif(`Added: ${formatted.title || name} 🛒`);
  } else if (_sheetScanMode === "inv") {
    // Add to inventory — use the location from the add sheet's location picker
    const loc = window._invAddLocation || "fridge";
    const id = "item-" + (prod.barcode || Date.now()).toString().replace(/\W/g, "-");

    // Check if item already exists (by barcode-derived ID) — increment qty if so
    const existing = state.inv.find(i => i.id === id);
    const itemData = {
      id,
      barcode: prod.barcode || "",
      name,
      brand: prod.brand || "",
      unit: "Unit",
      qty: existing ? existing.qty + 1 : 1,
      location: loc,
      category: prod.category || "General",
      image: prod.image || null,
      source: "scan",
      expiry: null,
      addedAt: existing ? existing.addedAt : new Date().toLocaleDateString()
    };
    if (scanTitle) itemData.scanTitle = scanTitle;      // Short product type for prominent list display
    await svi(itemData);
    showNotif(`Added: ${formatted.title || name} 📦`);
  }
}
