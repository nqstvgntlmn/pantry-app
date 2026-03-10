/**
 * One-time migration script: copies data from households/isguder-family
 * to households/x5Gz5ydc1UTAkXu0zYuRK5Xmjhm1
 *
 * PREREQUISITES:
 * 1. Deploy the temporary firestore rules (see step below)
 * 2. Be signed in to the app in your browser
 * 3. Open browser console and paste this entire script
 *
 * Collections copied: inventory, shopping, settings
 */

(async function migrateIsguderFamily() {
  const SRC = "households/isguder-family";
  const DST = "households/x5Gz5ydc1UTAkXu0zYuRK5Xmjhm1";

  // Use the app's already-initialized auth exposed on window
  async function _db(op, path, data) {
    const headers = { "Content-Type": "application/json" };
    const token = await window.getIdToken();
    if (token) headers["Authorization"] = "Bearer " + token;
    const r = await fetch("/api/db", {
      method: "POST",
      headers,
      body: JSON.stringify({ op, path, data }),
    });
    return r.json();
  }

  console.log("=== Migration: isguder-family → " + DST.split("/")[1] + " ===\n");

  // --- Copy inventory ---
  console.log("Reading inventory...");
  const invResult = await _db("list", SRC + "/inventory");
  const invDocs = invResult.docs || [];
  console.log("  Found " + invDocs.length + " inventory items");

  for (const doc of invDocs) {
    const { id, ...data } = doc;
    await _db("set", DST + "/inventory/" + id, data);
    console.log("  ✓ inventory/" + id + " (" + (data.name || id) + ")");
  }

  // --- Copy shopping ---
  console.log("\nReading shopping...");
  const shopResult = await _db("list", SRC + "/shopping");
  const shopDocs = shopResult.docs || [];
  console.log("  Found " + shopDocs.length + " shopping items");

  for (const doc of shopDocs) {
    const { id, ...data } = doc;
    await _db("set", DST + "/shopping/" + id, data);
    console.log("  ✓ shopping/" + id + " (" + (data.name || id) + ")");
  }

  // --- Copy settings/config ---
  console.log("\nReading settings/config...");
  const cfgResult = await _db("get", SRC + "/settings/config");
  if (cfgResult.doc) {
    const { id, ...data } = cfgResult.doc;
    await _db("set", DST + "/settings/config", data);
    console.log("  ✓ settings/config copied");
  } else {
    console.log("  (no settings/config found)");
  }

  // --- Also copy recipes, mealplan, cooklog, wastelog if they exist ---
  for (const col of ["recipes", "mealplan", "cooklog", "wastelog"]) {
    console.log("\nReading " + col + "...");
    const result = await _db("list", SRC + "/" + col);
    const docs = result.docs || [];
    console.log("  Found " + docs.length + " " + col + " items");

    for (const doc of docs) {
      const { id, ...data } = doc;
      await _db("set", DST + "/" + col + "/" + id, data);
      console.log("  ✓ " + col + "/" + id);
    }
  }

  console.log("\n=== Migration complete! ===");
  console.log("You can now revert the firestore rules and reload the app.");
})();
