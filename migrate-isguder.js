/**
 * One-time migration script: copies data from households/isguder-family
 * to households/x5Gz5ydc1UTAkXu0zYuRK5Xmjhm1
 *
 * Uses the Firestore REST API directly with the signed-in user's ID token.
 *
 * PREREQUISITES:
 * 1. Be signed in to the app in your browser
 * 2. Open browser console and paste this entire script
 */

(async function migrateIsguderFamily() {
  const SRC = "households/isguder-family";
  const DST = "households/x5Gz5ydc1UTAkXu0zYuRK5Xmjhm1";
  const PROJECT = "family-pantry-c65d6";
  const BASE = `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents`;

  // Get ID token from the exposed auth instance
  if (!window._firebaseAuth || !window._firebaseAuth.currentUser) {
    console.error("Not signed in. Sign in first, then re-run this script.");
    return;
  }
  const token = await window._firebaseAuth.currentUser.getIdToken();
  console.log("Got ID token, starting migration...\n");

  const headers = {
    "Authorization": "Bearer " + token,
    "Content-Type": "application/json",
  };

  // --- Helpers ---

  // List all documents in a collection
  async function listDocs(collectionPath) {
    const docs = [];
    let pageToken = null;
    do {
      const url = `${BASE}/${collectionPath}?pageSize=300` +
        (pageToken ? `&pageToken=${pageToken}` : "");
      const res = await fetch(url, { headers });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`LIST ${collectionPath} failed (${res.status}): ${text}`);
      }
      const body = await res.json();
      if (body.documents) docs.push(...body.documents);
      pageToken = body.nextPageToken || null;
    } while (pageToken);
    return docs;
  }

  // Get a single document
  async function getDoc(docPath) {
    const res = await fetch(`${BASE}/${docPath}`, { headers });
    if (res.status === 404) return null;
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`GET ${docPath} failed (${res.status}): ${text}`);
    }
    return res.json();
  }

  // Write a document (PATCH = create or overwrite)
  async function setDoc(docPath, firestoreFields) {
    const res = await fetch(`${BASE}/${docPath}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({ fields: firestoreFields }),
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`SET ${docPath} failed (${res.status}): ${text}`);
    }
    return res.json();
  }

  // Extract the document ID from a full Firestore resource name
  function docId(doc) {
    // name looks like: projects/.../documents/households/foo/inventory/abc
    return doc.name.split("/").pop();
  }

  // --- Copy a collection ---
  async function copyCollection(name) {
    console.log(`Reading ${name}...`);
    const docs = await listDocs(`${SRC}/${name}`);
    console.log(`  Found ${docs.length} ${name} items`);

    for (const doc of docs) {
      const id = docId(doc);
      await setDoc(`${DST}/${name}/${id}`, doc.fields || {});
      // Try to extract a friendly name from the fields
      const friendlyName = doc.fields?.name?.stringValue || id;
      console.log(`  ✓ ${name}/${id} (${friendlyName})`);
    }
  }

  console.log("=== Migration: isguder-family → " + DST.split("/")[1] + " ===\n");

  // --- Copy all collections ---
  for (const col of ["inventory", "shopping", "settings", "recipes", "mealplan", "cooklog", "wastelog"]) {
    await copyCollection(col);
    console.log("");
  }

  // --- Also copy settings/config as a single doc if settings collection was empty ---
  console.log("Checking settings/config directly...");
  const cfgDoc = await getDoc(`${SRC}/settings/config`);
  if (cfgDoc && cfgDoc.fields) {
    await setDoc(`${DST}/settings/config`, cfgDoc.fields);
    console.log("  ✓ settings/config copied");
  } else {
    console.log("  (no settings/config found or already copied via collection)");
  }

  console.log("\n=== Migration complete! ===");
  console.log("Reload the app to verify data.");
})();
