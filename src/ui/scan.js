// ── BARCODE SCANNER ──────────────────────────────────────────────────────────
// This module handles everything related to barcode scanning:
//   1. Capturing a barcode image (camera photo or file picker)
//   2. Decoding the barcode using Quagga.js (client-side barcode reader)
//   3. Looking up the decoded barcode against three product databases (Edamam, OpenFoodFacts, UPCItemDB)
//   4. Displaying the product info and letting the user add it to inventory or shopping list
//
// The scan flow supports two destinations:
//   - Inventory mode (default): scanned product goes into the pantry
//   - Shopping list mode: scanned product is added as a shopping list item

import { state } from '../state.js';            // Global app state (holds current product, inventory, scan destination, etc.)
import { svi, svShopItem } from '../db.js';      // svi = save inventory item, svShopItem = save shopping list item (both persist to Firebase)
import { g, showNotif, showOv, hideOv } from '../helpers.js'; // g = getElementById shorthand, showNotif = toast notification, showOv/hideOv = show/hide overlay panels

// Edamam API credentials for barcode-to-nutrition lookup (free tier)
const EID = "2b6ecac2", EK = "8db76605e873aaf2fbdf41256cb24cb4";

// Initiates a barcode scan by opening the device's file picker (or camera on mobile).
// Hides any previous error message before prompting the user to select a photo.
export function startScan() {
  g("scerr").style.display = "none";   // Clear any lingering "no barcode detected" error
  g("ffile").click();                   // Programmatically trigger the hidden <input type="file"> element
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
}

// Opens the scan overlay in "inventory" mode (the default).
// Scanned products will be added to the pantry inventory.
// Resets the title/hint to the generic scan wording.
export function openScanForInventory() {
  state.scanDestList = false;             // Flag: route scanned items to inventory (default behavior)
  showOv("scan");                         // Show the scan overlay panel
  const ttl = g("scanovttl"); if (ttl) ttl.textContent = "Scan Barcode";
  const hint = g("scan-dest-hint"); if (hint) hint.textContent = "Scan a barcode to add to your pantry or shopping list.";
}

// Adds the currently scanned product to the shopping list (not inventory).
// Called when the user taps "Add to List" from the scan result overlay.
// Builds a display string with quantity/unit info, saves the product image URL
// for thumbnail display in the list, persists it, and navigates to the shopping screen.
export function addScannedToList() {
  if (!state.cp) return;                  // Guard: no scanned product available

  // Use the product name, or fall back to "Barcode XXXX" if the lookup failed
  const name = state.cp.notFound ? ("Barcode " + state.cp.barcode) : state.cp.name;

  // Read quantity and unit from the result overlay's input fields
  const qty = parseInt(g("aqty").value) || 1;
  const unit = g("aunit").value.trim();

  // Build a human-readable display string, e.g. "Milk (2 gallons)"
  const display = name + (qty > 1 || unit ? " (" + qty + (unit ? " " + unit : "") + ")" : "");

  // Build the shopping list item, including the product image URL from the scan
  // so it can be displayed as a thumbnail in the shopping list
  const item = { id: Date.now().toString(), name: display, qty: 1, checked: false, src: "scan" };
  if (state.cp.image) item.image = state.cp.image; // Persist the product image for list thumbnail

  // Persist the new shopping list item to the database
  svShopItem(item);

  showNotif("Added to list: " + name);    // Toast confirmation
  hideOv("result"); hideOv("scan");       // Close both overlays (result and scan)
  state.scanDestList = false;             // Reset destination flag back to default
  window.showScreen("shopping");          // Navigate to the shopping list screen
}

// Toggles visibility of the manual barcode entry section.
// Used when the user wants to type a barcode number instead of scanning a photo.
export function togManual() {
  const el = g("mentry");
  el.style.display = el.style.display === "none" ? "block" : "none";
}

// Handles the file input change event when the user selects/takes a barcode photo.
// Flow: read image -> decode barcode with Quagga -> look up product -> show result.
// Shows a spinner with status text during each async step.
export async function handlePhoto(e) {
  const file = e.target.files[0]; if (!file) return;  // No file selected (user cancelled)
  e.target.value = "";                                 // Reset the input so the same file can be re-selected

  // Show spinner, hide the scan body while processing
  g("scanbody").style.display = "none";
  g("scspin").style.display = "block";
  g("scst").textContent = "Reading image…";

  // Convert the selected file to a data URL (base64) so Quagga can process it in-browser
  const url = await new Promise((r, j) => { const x = new FileReader(); x.onload = e => r(e.target.result); x.onerror = j; x.readAsDataURL(file); });

  try {
    g("scst").textContent = "Detecting barcode…";

    // Use Quagga.decodeSingle to detect a barcode from the static image.
    // Supports EAN-13, EAN-8, UPC-A, UPC-E, Code 128, and Code 39 formats.
    // numOfWorkers: 0 means decoding runs on the main thread (simpler for single-image decode).
    // inputStream.size: 1600 scales the image to max 1600px for processing.
    const code = await new Promise((res, rej) => Quagga.decodeSingle({ src: url, numOfWorkers: 0, inputStream: { size: 1600 }, decoder: { readers: ["ean_reader", "ean_8_reader", "upc_reader", "upc_e_reader", "code_128_reader", "code_39_reader"], multiple: false }, locate: true }, r => { if (r && r.codeResult && r.codeResult.code) res(r.codeResult.code); else rej("no"); }));

    g("scst").textContent = "Found " + code + " — looking up…";

    // Look up the barcode across product databases
    const prod = await lkup(code);
    state.cp = prod;                       // Store the current product in global state for later use

    // Reset the quantity and expiry fields in the result overlay to defaults
    g("aqty").value = 1; g("aexp").value = "";
    selRL("fridge", g("rl-fridge"));       // Pre-select "fridge" as the default storage location

    showRes(prod);                         // Render the product result overlay

    // Hide spinner, restore scan body
    g("scanbody").style.display = "block";
    g("scspin").style.display = "none";
  } catch {
    // Barcode detection failed — restore UI and show an error message
    g("scanbody").style.display = "block";
    g("scspin").style.display = "none";
    const err = g("scerr");
    err.textContent = "⚠️ No barcode detected. Try better lighting or enter manually.";
    err.style.display = "block";
  }
}

// Looks up a barcode that the user typed manually into the text input.
// Follows the same flow as handlePhoto but skips the image decode step
// since we already have the barcode string.
export async function manLookup() {
  const v = g("meinp").value.trim(); if (!v) return;  // Ignore empty input

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

// Master product lookup — tries three databases in priority order:
//   1. Edamam (best: includes nutrition data like calories, protein, fat, carbs)
//   2. Open Food Facts (good: community-maintained, wide international coverage)
//   3. UPC Item DB (fallback: US-centric, basic product info)
// Returns the first successful match, or a "not found" placeholder if all fail.
// Each tryX function returns null on failure, so the || chain moves to the next.
async function lkup(bc) {
  return (await tryE(bc)) || (await tryO(bc)) || (await tryU(bc)) || { barcode: bc, name: "", brand: "", quantity: "", category: "General", image: null, source: null, notFound: true };
}

// Attempt 1: Edamam Food Database API.
// This is the preferred source because it returns detailed nutrition info (calories, protein, fat, carbs).
// Uses the UPC/barcode parser endpoint with app_id and app_key for authentication.
// Returns a normalized product object on success, or null on failure.
async function tryE(bc) {
  try {
    const r = await fetch(`https://api.edamam.com/api/food-database/v2/parser?upc=${bc}&app_id=${EID}&app_key=${EK}`);
    if (!r.ok) return null;                // API error (rate limit, invalid key, etc.)
    const d = await r.json();

    // Edamam returns matches in either "hints" or "parsed" arrays depending on confidence
    const f = (d.hints && d.hints[0] && d.hints[0].food) || (d.parsed && d.parsed[0] && d.parsed[0].food);
    if (!f) return null;                   // No matching food found for this barcode

    // Extract nutrient values (Edamam uses standardized nutrient codes like ENERC_KCAL, PROCNT, etc.)
    const n = f.nutrients || {};
    return { barcode: bc, name: f.label || "", brand: f.brand || "", quantity: f.servingSize ? `${f.servingSize}${f.servingSizeUnit || "g"}` : "", category: f.category || "General", image: f.image || null, source: "Edamam", notFound: false, nutrition: { calories: n.ENERC_KCAL ? Math.round(n.ENERC_KCAL) : null, protein: n.PROCNT ? `${n.PROCNT.toFixed(1)}g` : null, fat: n.FAT ? `${n.FAT.toFixed(1)}g` : null, carbs: n.CHOCDF ? `${n.CHOCDF.toFixed(1)}g` : null } };
  } catch {} return null;                  // Silently fail — the next database will be tried
}

// Attempt 2: Open Food Facts — a free, community-driven product database.
// No API key required. Has wide international coverage but no structured nutrition
// data is extracted here (could be added in the future from the nutriments field).
// Returns null if the product isn't found or has no name.
async function tryO(bc) {
  try {
    const r = await fetch("https://world.openfoodfacts.org/api/v0/product/" + bc + ".json");
    const d = await r.json();
    if (d.status === 1 && d.product) {     // status === 1 means the product exists in their database
      const p = d.product, nm = p.product_name || p.product_name_en || "";
      if (!nm) return null;                // Product exists but has no name — treat as not found

      // Category tags are prefixed with language code (e.g. "en:dairy"), so strip it
      return { barcode: bc, name: nm, brand: p.brands || "", quantity: p.quantity || "", category: ((p.categories_tags || [])[0] || '').replace('en:', '') || 'General', image: p.image_small_url || null, source: "Open Food Facts", notFound: false, nutrition: null };
    }
  } catch {} return null;                  // Silently fail — the next database will be tried
}

// Attempt 3: UPC Item DB — last-resort lookup using their free trial endpoint.
// Primarily covers US products. No nutrition data available.
// Rate-limited on the trial tier, so this is our lowest-priority source.
async function tryU(bc) {
  try {
    const r = await fetch("https://api.upcitemdb.com/prod/trial/lookup?upc=" + bc);
    const d = await r.json();
    if (d.code === "OK" && d.items && d.items.length > 0) {
      const i = d.items[0];               // Take the first matching item
      return { barcode: bc, name: i.title || "", brand: i.brand || "", quantity: i.size || "", category: i.category || "General", image: (i.images || [])[0] || null, source: "UPC Item DB", notFound: false, nutrition: null };
    }
  } catch {} return null;                  // Silently fail — lkup() will return the "not found" fallback
}

// Renders the scan result overlay with product details (or a "not found" form).
// Two distinct UI states:
//   - Product found: shows a product card with image, name, brand, barcode, category, and nutrition grid
//   - Product not found: shows the barcode and a text input so the user can manually name the item
function showRes(prod) {
  hideOv("scan");                          // Close the scan overlay before showing the result
  g("resttl").textContent = prod.notFound ? "Not Found" : "Product Found ✓";
  g("aunit").value = prod.quantity || "unit";  // Pre-fill the unit field with the product's quantity info

  let html = "";
  if (prod.notFound) {
    // Product not in any database — show a manual name input so the user can still add it
    html = `<div class="nfb">⚠️ Barcode <code>${prod.barcode}</code> not found. Enter name:<input class="fi" id="mnm" placeholder="Product name (required)" oninput="valAdd()" style="margin-top:10px"/></div>`;
    // Disable the add button until the user types a name (valAdd() re-enables it)
    setTimeout(() => g("addbtn").disabled = true, 0);
  } else {
    // Product found — build a product card with image (or placeholder icon), name, brand, etc.
    const img = prod.image ? `<img src="${prod.image}" class="pimg" onerror="this.style.display='none'"/>` : `<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">🛒</div>`;

    // Build the nutrition grid (only shown if Edamam returned nutrition data)
    let nut = "";
    if (prod.nutrition && (prod.nutrition.calories || prod.nutrition.protein)) {
      nut = `<div class="ngrd">${[["Cal", prod.nutrition.calories], ["Protein", prod.nutrition.protein], ["Fat", prod.nutrition.fat], ["Carbs", prod.nutrition.carbs]].map(([l, v]) => `<div class="nb"><div class="nv">${v || "—"}</div><div class="nl">${l}</div></div>`).join("")}</div>`;
    }

    // Assemble the full product card HTML
    html = `<div class="pcard"><div class="phdr">${img}<div style="flex:1"><div class="pnm">${prod.name}</div>${prod.brand ? `<div class="pbr">${prod.brand}</div>` : ""}<div class="pbc">${prod.barcode}</div><span class="bdg">${prod.category}</span>${prod.source ? `<span class="srcb">${prod.source}</span>` : ""}</div></div>${nut}</div>`;

    // Enable the add button immediately since we have a valid product name
    setTimeout(() => g("addbtn").disabled = false, 0);
  }

  g("resbody").innerHTML = html;           // Inject the built HTML into the result overlay body
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

  // Save to database — if the item already exists, add to its quantity and keep its original addedAt date
  await svi({ id, barcode: state.cp.barcode, name: nm, brand: state.cp.brand || "", unit, qty: ex ? ex.qty + qty : qty, location: state.selR, category: state.cp.category || "General", image: state.cp.image || null, source: state.cp.source || null, nutrition: state.cp.nutrition || null, expiry: exp, addedAt: ex ? ex.addedAt : new Date().toLocaleDateString() });

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
