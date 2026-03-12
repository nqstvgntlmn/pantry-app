// ── FIREBASE STORAGE MODULE ──────────────────────────────────────────────────
// Handles image uploads for the personal product image database. Uses Firebase
// Storage to store compressed product photos uploaded by household members.
//
// Images are stored at: households/{householdId}/customProducts/{normalizedName}.jpg
// After upload, the download URL is saved back to both the shopping/inventory item
// and to a shared customProducts Firestore collection for household-wide reuse.
//
// This module also provides a lookup function so the text search enrichment
// pipeline can check for household-uploaded images before hitting external APIs.

import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { app } from './auth.js';     // Reuse the initialized Firebase app from auth module
import { state } from './state.js';  // Access state.hid for household-scoped storage paths
import { dbSet, dbGet } from './db.js'; // Firestore read/write for the customProducts collection
import { getCurrentUser } from './auth.js'; // Get current user for updatedBy field

// Initialize Firebase Storage — uses the same Firebase app instance as Auth/Firestore
const storage = getStorage(app);

// ── NAME NORMALIZATION ──────────────────────────────────────────────────────

/**
 * normalizeProductName(name) — Converts a product name into a filesystem-safe key.
 * Used as the document ID in the customProducts collection and the filename in Storage.
 * Rules: lowercase, trimmed, spaces → underscores, strip non-alphanumeric/underscore chars.
 * e.g. "Yogurt Pouch" → "yogurt_pouch", "Ben & Jerry's" → "ben__jerrys"
 */
export function normalizeProductName(name) {
  return (name || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^a-z0-9_]/g, "");
}

// ── IMAGE COMPRESSION ───────────────────────────────────────────────────────

/**
 * compressImage(file) — Compresses a user-selected image to max 400×400px and ~150KB.
 * Uses an offscreen Canvas to resize and re-encode as JPEG. No external libraries needed.
 * Returns a Blob suitable for uploading to Firebase Storage.
 *
 * Strategy: start at quality 0.8 and step down if the result exceeds 150KB.
 * Most phone photos compress well below the limit on the first pass.
 */
export function compressImage(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
      img.onload = () => {
        // Calculate scaled dimensions — fit within 400×400 preserving aspect ratio
        const MAX = 400;
        let w = img.width;
        let h = img.height;
        if (w > MAX || h > MAX) {
          const ratio = Math.min(MAX / w, MAX / h);
          w = Math.round(w * ratio);
          h = Math.round(h * ratio);
        }

        // Draw the image onto an offscreen canvas at the target size
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, w, h);

        // Encode as JPEG, stepping down quality until under 150KB
        const TARGET_BYTES = 150 * 1024; // 150KB limit
        let quality = 0.8;
        const tryCompress = () => {
          canvas.toBlob(
            (blob) => {
              if (!blob) return reject(new Error("Canvas compression failed"));
              if (blob.size <= TARGET_BYTES || quality <= 0.3) {
                // Under limit or minimum quality reached — use this result
                resolve(blob);
              } else {
                // Still too large — reduce quality and try again
                quality -= 0.1;
                tryCompress();
              }
            },
            "image/jpeg",
            quality
          );
        };
        tryCompress();
      };
      img.onerror = () => reject(new Error("Failed to load image"));
      img.src = e.target.result;
    };
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
}

// ── UPLOAD TO FIREBASE STORAGE + SAVE TO CUSTOM PRODUCTS DB ─────────────────

/**
 * uploadProductImage(file, productName) — Full upload pipeline for a custom product photo.
 *
 * Steps:
 *   1. Compress the image client-side (Canvas API, max 400×400px / 150KB)
 *   2. Upload the compressed JPEG to Firebase Storage at a household-scoped path
 *   3. Get the public download URL from Storage
 *   4. Save the mapping to the customProducts Firestore collection so other
 *      household members (and the text search pipeline) can reuse it
 *
 * Returns the Firebase Storage download URL string, or throws on failure.
 */
export async function uploadProductImage(file, productName) {
  if (!state.hid) throw new Error("No household ID — cannot upload");
  if (!file) throw new Error("No file provided");

  const normalized = normalizeProductName(productName);
  if (!normalized) throw new Error("Invalid product name for upload");

  // Step 1: Compress the image to a small JPEG via Canvas API.
  // Logs the resulting blob size so we can verify compression is working.
  let compressed;
  try {
    compressed = await compressImage(file);
    console.log(`[uploadProductImage] Compressed: ${(compressed.size / 1024).toFixed(1)}KB, type=${compressed.type}`);
  } catch (compressErr) {
    console.error("[uploadProductImage] Compression failed:", compressErr);
    throw new Error("Image compression failed — " + compressErr.message);
  }

  // Step 2: Upload the compressed JPEG to Firebase Storage at the household-scoped path.
  // Requires Firebase Storage security rules to allow writes to this path.
  const storagePath = `households/${state.hid}/customProducts/${normalized}.jpg`;
  const storageRef = ref(storage, storagePath);
  try {
    console.log(`[uploadProductImage] Uploading to: ${storagePath}`);
    await uploadBytes(storageRef, compressed, { contentType: "image/jpeg" });
    console.log("[uploadProductImage] Upload succeeded");
  } catch (uploadErr) {
    console.error("[uploadProductImage] Storage upload failed:", uploadErr.code, uploadErr.message);
    throw new Error("Storage upload failed — " + (uploadErr.code || uploadErr.message));
  }

  // Step 3: Get the public download URL (includes a Firebase access token).
  // This URL is what gets displayed as the product image in the UI.
  let downloadUrl;
  try {
    downloadUrl = await getDownloadURL(storageRef);
    console.log("[uploadProductImage] Download URL obtained");
  } catch (urlErr) {
    console.error("[uploadProductImage] getDownloadURL failed:", urlErr.code, urlErr.message);
    throw new Error("Could not get download URL — " + (urlErr.code || urlErr.message));
  }

  // Step 4: Save to the customProducts Firestore collection for household-wide lookup.
  // This collection is queried by the text search API to provide custom images
  // before falling back to external product databases.
  try {
    const user = getCurrentUser();
    await dbSet(`customProducts/${state.hid}/items/${normalized}`, {
      name: productName.trim(),
      imageUrl: downloadUrl,
      updatedAt: new Date().toISOString(),
      updatedBy: user?.displayName || user?.email?.split("@")[0] || "Unknown"
    });
    console.log(`[uploadProductImage] Saved to customProducts collection: ${normalized}`);
  } catch (dbErr) {
    console.error("[uploadProductImage] Firestore save failed:", dbErr);
    // Don't throw here — the image IS uploaded to Storage, so return the URL
    // even if the Firestore index entry failed. The user still gets their photo.
  }

  return downloadUrl;
}

// ── LOOKUP CUSTOM PRODUCT IMAGE ─────────────────────────────────────────────

/**
 * lookupCustomProductImage(productName) — Checks if the household has a custom
 * image uploaded for this product name. Returns the imageUrl string if found,
 * or null if no custom image exists.
 *
 * Used by the text search enrichment pipeline to prioritize household-uploaded
 * images over external database results.
 */
export async function lookupCustomProductImage(productName) {
  if (!state.hid) return null;
  const normalized = normalizeProductName(productName);
  if (!normalized) return null;

  const doc = await dbGet(`customProducts/${state.hid}/items/${normalized}`);
  return doc?.imageUrl || null;
}
