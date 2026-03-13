// ── FIREBASE STORAGE MODULE ──────────────────────────────────────────────────
// Handles image uploads for the personal product image database and recipe photos.
// Uses Firebase Storage to store compressed images uploaded by household members.
//
// Product images are DISABLED (see [IMAGES DISABLED] blocks below).
// Recipe images (cover photos, step photos, comment photos) are ACTIVE and use
// the compressRecipeImage / uploadRecipeImage functions at the bottom of this file.

// [IMAGES DISABLED] — Product images commented out pending decision.
// See session notes: images caused false positives from external databases,
// inconsistent UX, and unnecessary costs. Custom photo pipeline preserved.
// To re-enable: uncomment these blocks and restore image display logic.
// import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { app } from './auth.js';     // Reuse the initialized Firebase app from auth module
import { state } from './state.js';  // Access state.hid for household-scoped storage paths
// import { dbSet, dbGet } from './db.js'; // Firestore read/write for the customProducts collection
// import { getCurrentUser } from './auth.js'; // Get current user for updatedBy field

// ── RECIPE IMAGE IMPORTS ────────────────────────────────────────────────────
// These are separate from the disabled product image imports. Recipe images
// (cover photos, step photos, comment photos) are an active feature.
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { app } from './auth.js';

// Firebase Storage instance for recipe image uploads
const storage = getStorage(app);

// [IMAGES DISABLED] — Product images commented out pending decision.
// See session notes: images caused false positives from external databases,
// inconsistent UX, and unnecessary costs. Custom photo pipeline preserved.
// To re-enable: uncomment these blocks and restore image display logic.
// const productStorage = getStorage(app);

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
// [IMAGES DISABLED] — Product images commented out pending decision.
// See session notes: images caused false positives from external databases,
// inconsistent UX, and unnecessary costs. Custom photo pipeline preserved.
// To re-enable: uncomment these blocks and restore image display logic.
export function compressImage(file) {
  throw new Error("Product images are currently disabled. See storage.js for details.");
  // return new Promise((resolve, reject) => {
  //   const img = new Image();
  //   const reader = new FileReader();
  //
  //   reader.onload = (e) => {
  //     img.onload = () => {
  //       // Calculate scaled dimensions — fit within 400×400 preserving aspect ratio
  //       const MAX = 400;
  //       let w = img.width;
  //       let h = img.height;
  //       if (w > MAX || h > MAX) {
  //         const ratio = Math.min(MAX / w, MAX / h);
  //         w = Math.round(w * ratio);
  //         h = Math.round(h * ratio);
  //       }
  //
  //       // Draw the image onto an offscreen canvas at the target size
  //       const canvas = document.createElement("canvas");
  //       canvas.width = w;
  //       canvas.height = h;
  //       const ctx = canvas.getContext("2d");
  //       ctx.drawImage(img, 0, 0, w, h);
  //
  //       // Encode as JPEG, stepping down quality until under 150KB
  //       const TARGET_BYTES = 150 * 1024; // 150KB limit
  //       let quality = 0.8;
  //       const tryCompress = () => {
  //         canvas.toBlob(
  //           (blob) => {
  //             if (!blob) return reject(new Error("Canvas compression failed"));
  //             if (blob.size <= TARGET_BYTES || quality <= 0.3) {
  //               // Under limit or minimum quality reached — use this result
  //               resolve(blob);
  //             } else {
  //               // Still too large — reduce quality and try again
  //               quality -= 0.1;
  //               tryCompress();
  //             }
  //           },
  //           "image/jpeg",
  //           quality
  //         );
  //       };
  //       tryCompress();
  //     };
  //     img.onerror = () => reject(new Error("Failed to load image"));
  //     img.src = e.target.result;
  //   };
  //   reader.onerror = () => reject(new Error("Failed to read file"));
  //   reader.readAsDataURL(file);
  // });
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
// [IMAGES DISABLED] — Product images commented out pending decision.
// See session notes: images caused false positives from external databases,
// inconsistent UX, and unnecessary costs. Custom photo pipeline preserved.
// To re-enable: uncomment these blocks and restore image display logic.
export async function uploadProductImage(file, productName) {
  throw new Error("Product images are currently disabled. See storage.js for details.");
  // if (!state.hid) throw new Error("No household ID — cannot upload");
  // if (!file) throw new Error("No file provided");
  //
  // const normalized = normalizeProductName(productName);
  // if (!normalized) throw new Error("Invalid product name for upload");
  //
  // // Step 1: Compress the image to a small JPEG via Canvas API.
  // // Logs the resulting blob size so we can verify compression is working.
  // let compressed;
  // try {
  //   compressed = await compressImage(file);
  //   console.log(`[uploadProductImage] Compressed: ${(compressed.size / 1024).toFixed(1)}KB, type=${compressed.type}`);
  // } catch (compressErr) {
  //   console.error("[uploadProductImage] Compression failed:", compressErr);
  //   throw new Error("Image compression failed — " + compressErr.message);
  // }
  //
  // // Step 2: Upload the compressed JPEG to Firebase Storage at the household-scoped path.
  // // Requires Firebase Storage security rules to allow writes to this path.
  // const storagePath = `households/${state.hid}/customProducts/${normalized}.jpg`;
  // const storageRef = ref(storage, storagePath);
  // try {
  //   console.log(`[uploadProductImage] Uploading to: ${storagePath}`);
  //   await uploadBytes(storageRef, compressed, { contentType: "image/jpeg" });
  //   console.log("[uploadProductImage] Upload succeeded");
  // } catch (uploadErr) {
  //   console.error("[uploadProductImage] Storage upload failed:", uploadErr.code, uploadErr.message);
  //   throw new Error("Storage upload failed — " + (uploadErr.code || uploadErr.message));
  // }
  //
  // // Step 3: Get the public download URL (includes a Firebase access token).
  // // This URL is what gets displayed as the product image in the UI.
  // let downloadUrl;
  // try {
  //   downloadUrl = await getDownloadURL(storageRef);
  //   console.log("[uploadProductImage] Download URL obtained");
  // } catch (urlErr) {
  //   console.error("[uploadProductImage] getDownloadURL failed:", urlErr.code, urlErr.message);
  //   throw new Error("Could not get download URL — " + (urlErr.code || urlErr.message));
  // }
  //
  // // Step 4: Save to the customProducts Firestore collection for household-wide lookup.
  // // This collection is queried by the text search API to provide custom images
  // // before falling back to external product databases.
  // try {
  //   const user = getCurrentUser();
  //   await dbSet(`households/${state.hid}/customProducts/${normalized}`, {
  //     name: productName.trim(),
  //     imageUrl: downloadUrl,
  //     imageDismissed: false,  // Clear any prior dismissal — user is uploading a new photo
  //     updatedAt: new Date().toISOString(),
  //     updatedBy: user?.displayName || user?.email?.split("@")[0] || "Unknown"
  //   });
  //   console.log(`[uploadProductImage] Saved to customProducts collection: ${normalized}`);
  // } catch (dbErr) {
  //   console.error("[uploadProductImage] Firestore save failed:", dbErr);
  //   // Don't throw here — the image IS uploaded to Storage, so return the URL
  //   // even if the Firestore index entry failed. The user still gets their photo.
  // }
  //
  // return downloadUrl;
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
// [IMAGES DISABLED] — Product images commented out pending decision.
// See session notes: images caused false positives from external databases,
// inconsistent UX, and unnecessary costs. Custom photo pipeline preserved.
// To re-enable: uncomment these blocks and restore image display logic.
export async function lookupCustomProductImage(productName) {
  return null;
  // if (!state.hid) return null;
  // const normalized = normalizeProductName(productName);
  // if (!normalized) return null;
  //
  // const doc = await dbGet(`households/${state.hid}/customProducts/${normalized}`);
  // return doc?.imageUrl || null;
}

// ═══════════════════════════════════════════════════════════════════════════════
// RECIPE IMAGE PIPELINE — cover photos, step photos, comment photos
// These are ACTIVE (not disabled like product images above).
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * compressRecipeImage — generic image compressor for recipe photos.
 * Resizes to fit within maxW×maxH and compresses to JPEG under maxBytes.
 * Uses Canvas API — no external libraries. Returns a Blob.
 *
 * @param {File|Blob} file - The source image file
 * @param {number} maxW - Maximum width in pixels
 * @param {number} maxH - Maximum height in pixels
 * @param {number} maxBytes - Target file size limit in bytes
 * @returns {Promise<Blob>} Compressed JPEG blob
 */
export function compressRecipeImage(file, maxW, maxH, maxBytes) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
      img.onload = () => {
        // Scale down to fit within maxW×maxH while preserving aspect ratio
        let w = img.width;
        let h = img.height;
        if (w > maxW || h > maxH) {
          const ratio = Math.min(maxW / w, maxH / h);
          w = Math.round(w * ratio);
          h = Math.round(h * ratio);
        }

        // Draw onto an offscreen canvas at the target dimensions
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, w, h);

        // Encode as JPEG, stepping down quality until under the size limit
        let quality = 0.82;
        const tryCompress = () => {
          canvas.toBlob(
            (blob) => {
              if (!blob) return reject(new Error("Canvas compression failed"));
              if (blob.size <= maxBytes || quality <= 0.3) {
                resolve(blob);
              } else {
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

/**
 * uploadRecipeImage — compresses and uploads an image to Firebase Storage.
 * Returns the public download URL. Used for cover, step, and comment photos.
 *
 * @param {File|Blob} file - Source image file
 * @param {string} storagePath - Full Firebase Storage path (e.g. "recipes/rec-123/cover.jpg")
 * @param {number} maxW - Max width for compression
 * @param {number} maxH - Max height for compression
 * @param {number} maxBytes - Max file size after compression
 * @returns {Promise<string>} Firebase Storage download URL
 */
export async function uploadRecipeImage(file, storagePath, maxW, maxH, maxBytes) {
  if (!file) throw new Error("No file provided");

  // Step 1: Compress the image client-side
  const compressed = await compressRecipeImage(file, maxW, maxH, maxBytes);
  console.log(`[uploadRecipeImage] Compressed to ${(compressed.size / 1024).toFixed(1)}KB → ${storagePath}`);

  // Step 2: Upload to Firebase Storage
  const storageRef = ref(storage, storagePath);
  await uploadBytes(storageRef, compressed, { contentType: "image/jpeg" });

  // Step 3: Get the public download URL
  const url = await getDownloadURL(storageRef);
  console.log("[uploadRecipeImage] Upload complete:", storagePath);
  return url;
}

/**
 * uploadRecipeCover — uploads a recipe cover photo.
 * Compresses to 800×600px / 300KB. Stored at recipes/{recipeId}/cover.jpg.
 */
export async function uploadRecipeCover(file, recipeId) {
  return uploadRecipeImage(file, `recipes/${recipeId}/cover.jpg`, 800, 600, 300 * 1024);
}

/**
 * uploadStepPhoto — uploads an optional step instruction photo.
 * Compresses to 800×600px / 300KB. Stored at recipes/{recipeId}/steps/{stepNumber}.jpg.
 */
export async function uploadStepPhoto(file, recipeId, stepNumber) {
  return uploadRecipeImage(file, `recipes/${recipeId}/steps/${stepNumber}.jpg`, 800, 600, 300 * 1024);
}

/**
 * uploadCommentPhoto — uploads a photo attached to a community recipe comment.
 * Compresses to 600×600px / 200KB. Stored at recipes/{recipeId}/comments/{commentId}/{index}.jpg.
 */
export async function uploadCommentPhoto(file, recipeId, commentId, photoIndex) {
  return uploadRecipeImage(file, `recipes/${recipeId}/comments/${commentId}/${photoIndex}.jpg`, 600, 600, 200 * 1024);
}

/**
 * deleteRecipeStorageFile — deletes a file from Firebase Storage by path.
 * Used when removing cover photos, step photos, etc. Silently ignores
 * "not found" errors since the file may have been deleted externally.
 */
export async function deleteRecipeStorageFile(storagePath) {
  try {
    const storageRef = ref(storage, storagePath);
    await deleteObject(storageRef);
    console.log("[deleteRecipeStorageFile] Deleted:", storagePath);
  } catch (e) {
    // Ignore 'object-not-found' — the file is already gone
    if (e.code !== "storage/object-not-found") {
      console.error("[deleteRecipeStorageFile] Error:", e);
    }
  }
}
