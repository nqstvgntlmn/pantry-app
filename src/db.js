// ── FIRESTORE PROXY CLIENT ───────────────────────────────────────────────────
// All database operations go through /api/db (Vercel serverless function).
// This keeps Firebase API keys out of the browser entirely — the serverless
// function holds the credentials and forwards requests to Firestore REST API.
//
// Architecture overview:
//   Browser  ──POST /api/db──>  Vercel serverless  ──REST──>  Firestore
//
// Every public function in this file either reads/writes Firestore, or
// manipulates in-memory `state` and then persists the change to Firestore.

// `state`       — global mutable app state (inventory, recipes, shopping, etc.)
// `CFG_DEFAULT` — default household config values (name, dietary prefs, etc.)
// `J`           — shorthand helper: JSON.parse(localStorage.getItem(key)), returns null on failure
import { state, CFG_DEFAULT, J } from './state.js';

// toTitleCase — used to ensure item names in activity feed are properly capitalized
import { toTitleCase } from './helpers.js';

// `getCurrentUser` — returns the currently signed-in Firebase Auth user object (or null)
// `getIdToken` — returns the user's Firebase JWT for authenticated API calls
import { getCurrentUser, getIdToken } from './auth.js';

// ── LOW-LEVEL DB TRANSPORT ───────────────────────────────────────────────────

/**
 * _db(op, path, data) — the single low-level function all DB calls go through.
 *
 * Sends a POST to /api/db with a JSON body like:
 *   { op: "set", path: "households/abc123/inventory/xyz", data: { ... } }
 *
 * The serverless function translates `op` into the corresponding Firestore
 * operation (get, list, set, delete).
 *
 * Why we check content-type before parsing: if Vercel is down or misconfigured,
 * it returns an HTML error page. Parsing that as JSON gives a confusing error,
 * so we detect it early and throw a descriptive message instead.
 */
async function _db(op, path, data) {
  // Build request headers — always include Content-Type for JSON body
  const headers = { "Content-Type": "application/json" };

  // Attach the Firebase ID token so the server-side proxy can forward it
  // to Firestore REST API as a Bearer token. This is what makes Firestore
  // security rules see `request.auth` with the user's UID.
  const token = await getIdToken();
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const r = await fetch("/api/db", {
    method: "POST",
    headers,
    body: JSON.stringify({ op, path, data })
  });
  const ct = r.headers.get("content-type") || "";
  if (!ct.includes("application/json")) {
    throw new Error(`/api/db non-JSON response (status ${r.status}) for ${op} ${path}`);
  }
  return r.json();
}

/**
 * dbList — list all documents in a Firestore collection.
 * Returns an array of document objects, or [] if the collection is empty or missing.
 * Swallows errors and returns [] so callers don't need try/catch for missing data.
 */
export async function dbList(path) {
  try { const j = await _db("list", path); return j.docs || []; }
  catch (e) { console.warn("dbList:", path, e.message); return []; }
}

/**
 * dbSet — create or overwrite (upsert) a single Firestore document.
 * `path` is the full document path, e.g. "households/abc/inventory/item1".
 * `data` is the plain object to store.
 */
export async function dbSet(path, data) { return _db("set", path, data); }

/**
 * dbDelete — permanently remove a single Firestore document by path.
 */
export async function dbDelete(path) { return _db("delete", path); }

/**
 * dbGet — read a single Firestore document by its full path.
 * Returns the document object, or null if it doesn't exist.
 * Swallows errors and returns null so callers can treat "missing" and "error" the same.
 */
export async function dbGet(path) {
  try {
    const j = await _db("get", path);
    return j.doc || null;
  } catch { return null; }
}

// ── USER & HOUSEHOLD MANAGEMENT ─────────────────────────────────────────────
// A "household" is the top-level grouping for all data — inventory, recipes,
// shopping list, meal plan, etc. Each user belongs to one or more households.
// Firestore structure: households/{hid}/inventory/*, households/{hid}/recipes/*, etc.

/**
 * Generate a short random invite code (6 uppercase alphanumeric characters).
 * Used to let other users join a household by entering this code.
 */
function _genInviteCode() {
  return Math.random().toString(36).slice(2, 8).toUpperCase();
}

/**
 * createUserProfile — writes a users/{uid} document on first-ever login.
 * The profile stores the user's display name, email, creation timestamp,
 * and a list of household IDs they belong to (initially empty; filled by resolveHousehold).
 */
export async function createUserProfile(user) {
  const doc = {
    name: user.displayName || user.email?.split("@")[0] || "User",
    email: user.email || "",
    createdAt: new Date().toISOString(),
    householdIds: []   // populated later by resolveHousehold after the household is created
  };
  await dbSet(`users/${user.uid}`, doc);
  return doc;
}

/**
 * createHousehold — creates a new household document owned by the given user.
 *
 * By convention, the household ID (`hid`) equals the user's UID for their
 * default/first household. This simplifies lookups and avoids generating
 * a separate random ID.
 *
 * The household doc stores:
 *   - name:       display name (e.g. "My Kitchen")
 *   - ownerUid:   UID of the user who created it
 *   - members[]:  array of { uid, name, role } objects for multi-user support
 *   - inviteCode: 6-char code other users can enter to join this household
 *   - createdAt:  ISO timestamp
 */
export async function createHousehold(uid, name) {
  const user = getCurrentUser();
  const hid = uid; // use uid as household ID for the user's default household
  const inviteCode = _genInviteCode();
  const doc = {
    name: name || "My Kitchen",
    ownerUid: uid,
    members: [{
      uid,
      name: user?.displayName || user?.email?.split("@")[0] || "Owner",
      role: "owner",
      joinedAt: new Date().toISOString() // Track when the owner created the household
    }],
    // Flat array of just UIDs — used by Firestore security rules for fast
    // membership checks (`request.auth.uid in resource.data.memberUids`).
    // Maintained in sync with the `members` array above.
    memberUids: [uid],
    inviteCode,
    createdAt: new Date().toISOString()
  };
  try {
    await dbSet(`households/${hid}`, doc);
    // Write the invite code to the top-level index so new users can look it up
    await dbSet(`household_codes/${inviteCode}`, { householdId: hid });
  } catch (e) {
    console.error(`[createHousehold] FAILED to write households/${hid}:`, e);
  }
  return { hid, ...doc };
}

/**
 * lookupHouseholdByCode — looks up a household ID from a 6-char invite code.
 * Reads from the top-level household_codes/{code} index document.
 * Returns the householdId string, or null if the code doesn't exist.
 */
export async function lookupHouseholdByCode(code) {
  const doc = await dbGet(`household_codes/${code.toUpperCase()}`);
  return doc?.householdId || null;
}

/**
 * _cleanupGhostHousehold — removes a user's self-created "ghost" household
 * when they join a real shared household via invite code.
 *
 * A ghost household happens when a user clicks "Start my own kitchen" first,
 * creating a household with hid === uid, and then later joins someone else's
 * household. The ghost has no other members and no real data, so it's safe
 * to delete it and remove it from the user's householdIds array.
 *
 * This prevents the bug where householdIds[0] points to the ghost instead
 * of the real shared household.
 */
async function _cleanupGhostHousehold(uid, userDoc) {
  const hids = userDoc?.householdIds || [];
  // Ghost household has the same ID as the user's UID
  if (!hids.includes(uid)) return;

  const ghostDoc = await dbGet(`households/${uid}`);
  if (!ghostDoc) {
    // Ghost doc already deleted — just remove the stale reference from the user's array
    console.log(`[_cleanupGhostHousehold] Ghost doc ${uid} already gone, removing from householdIds`);
    return;
  }

  // Only delete if the user is the sole member (no other users affected)
  const memberCount = (ghostDoc.members || []).length;
  if (memberCount > 1) {
    console.log(`[_cleanupGhostHousehold] Household ${uid} has ${memberCount} members, skipping cleanup`);
    return;
  }

  // Delete the ghost household document from Firestore
  console.log(`[_cleanupGhostHousehold] Deleting ghost household ${uid}`);
  try {
    await dbDelete(`households/${uid}`);
    // Also delete the invite code index entry if one exists
    if (ghostDoc.inviteCode) {
      await dbDelete(`household_codes/${ghostDoc.inviteCode}`);
    }
  } catch (e) {
    console.warn(`[_cleanupGhostHousehold] Failed to delete ghost:`, e);
  }
}

/**
 * joinHouseholdByCode — joins a household using a 6-char invite code.
 * Looks up the household via the household_codes index, adds the user as a
 * member to the household doc, and adds the household to the user's profile.
 *
 * Also cleans up any ghost/self-created household the user may have:
 *   - If the user's householdIds contains their own UID as a household (ghost),
 *     and that ghost has no other members, it gets deleted from Firestore.
 *   - The user's householdIds array is replaced with just the joined household ID,
 *     ensuring a member user only ever has one household.
 *
 * Returns the household ID on success, or null if the code is invalid.
 */
export async function joinHouseholdByCode(code, user) {
  // Look up the household ID from the invite code index
  const hid = await lookupHouseholdByCode(code);
  if (!hid) return null;

  // Fetch the household doc to add the user as a member
  const hhDoc = await dbGet(`households/${hid}`);
  if (!hhDoc) return null;

  // Add user to the household's members array (skip if already present)
  const members = hhDoc.members || [];
  const memberUids = hhDoc.memberUids || members.map(m => m.uid);
  if (!members.find(m => m.uid === user.uid)) {
    members.push({
      uid: user.uid,
      name: user.displayName || user.email?.split("@")[0] || "Member",
      role: "member",
      joinedAt: new Date().toISOString() // Track when the member joined for display in settings
    });
    if (!memberUids.includes(user.uid)) memberUids.push(user.uid);
    await dbSet(`households/${hid}`, { ...hhDoc, members, memberUids, id: undefined });
  }

  // Clean up ghost household: if the user previously created their own household
  // (hid === uid), delete it so it doesn't pollute the householdIds array
  const userDoc = await dbGet(`users/${user.uid}`);
  if (userDoc) {
    await _cleanupGhostHousehold(user.uid, userDoc);

    // Replace the entire householdIds array with just the joined household.
    // A member user should only have one household ID — the shared one they joined.
    // This prevents ghost entries from accumulating and ensures resolveHousehold
    // always picks the correct household.
    await dbSet(`users/${user.uid}`, { ...userDoc, householdIds: [hid], id: undefined });
  }

  return hid;
}

/**
 * regenerateInviteCode — generates a new 6-char invite code for a household.
 * Deletes the old code from household_codes, writes the new one, and updates
 * the household doc. Only callable by the household owner (enforced by rules).
 * Returns the new invite code string.
 */
export async function regenerateInviteCode(hid) {
  const hhDoc = await dbGet(`households/${hid}`);
  if (!hhDoc) return null;

  // Delete old code from the index (if it exists)
  if (hhDoc.inviteCode) {
    try { await dbDelete(`household_codes/${hhDoc.inviteCode}`); } catch { /* ignore */ }
  }

  // Generate and write the new code
  const newCode = _genInviteCode();
  await dbSet(`household_codes/${newCode}`, { householdId: hid });
  await dbSet(`households/${hid}`, { ...hhDoc, inviteCode: newCode, id: undefined });

  return newCode;
}

/**
 * removeMember — removes a member from a household (owner-only action).
 * Removes the user from the household's members and memberUids arrays,
 * and removes the household from the member's user profile.
 */
export async function removeMember(hid, memberUid) {
  const hhDoc = await dbGet(`households/${hid}`);
  if (!hhDoc) return;

  // Remove from household doc
  const members = (hhDoc.members || []).filter(m => m.uid !== memberUid);
  const memberUids = (hhDoc.memberUids || []).filter(u => u !== memberUid);
  await dbSet(`households/${hid}`, { ...hhDoc, members, memberUids, id: undefined });

  // Remove household from the member's user profile
  try {
    const userDoc = await dbGet(`users/${memberUid}`);
    if (userDoc) {
      const hids = (userDoc.householdIds || []).filter(h => h !== hid);
      await dbSet(`users/${memberUid}`, { ...userDoc, householdIds: hids, id: undefined });
    }
  } catch { /* member profile may not be accessible */ }
}

/**
 * transferOwnership — transfers household ownership to another member.
 * Updates the household doc: sets the new ownerUid and swaps roles in the
 * members array (old owner becomes "member", new owner becomes "owner").
 * Both users must already be members of the household.
 */
export async function transferOwnership(hid, newOwnerUid) {
  const hhDoc = await dbGet(`households/${hid}`);
  if (!hhDoc) throw new Error("Household not found");

  // Update roles in the members array
  const members = (hhDoc.members || []).map(m => ({
    ...m,
    role: m.uid === newOwnerUid ? "owner" : (m.uid === hhDoc.ownerUid ? "member" : m.role)
  }));

  // Set the new ownerUid and updated members array
  await dbSet(`households/${hid}`, {
    ...hhDoc,
    ownerUid: newOwnerUid,
    members,
    id: undefined
  });
}

/**
 * deleteHousehold — permanently deletes a household and all its subcollections.
 * Only the owner can do this, and only when they are the sole remaining member.
 * Removes the household from the owner's user profile and deletes the invite code index.
 * Subcollections (inventory, recipes, shopping, etc.) are deleted doc-by-doc.
 */
export async function deleteHousehold(hid, ownerUid) {
  const hhDoc = await dbGet(`households/${hid}`);
  if (!hhDoc) return;

  // Delete all docs in each subcollection
  const collections = ["inventory", "recipes", "shopping", "mealplan", "settings", "cooklog", "wastelog", "activity"];
  for (const col of collections) {
    try {
      const docs = await dbList(`households/${hid}/${col}`);
      for (const doc of docs) {
        await dbDelete(`households/${hid}/${col}/${doc.id}`);
      }
    } catch { /* best-effort: some subcollections may not exist */ }
  }

  // Delete the invite code index entry so the code can't be used to join
  if (hhDoc.inviteCode) {
    try { await dbDelete(`household_codes/${hhDoc.inviteCode}`); } catch { /* ignore */ }
  }

  // Delete the household document itself
  await dbDelete(`households/${hid}`);

  // Remove the household from the owner's user profile
  try {
    const userDoc = await dbGet(`users/${ownerUid}`);
    if (userDoc) {
      const hids = (userDoc.householdIds || []).filter(h => h !== hid);
      await dbSet(`users/${ownerUid}`, { ...userDoc, householdIds: hids, id: undefined });
    }
  } catch { /* best-effort */ }
}

/**
 * checkMembershipValid — checks if the current user is still a member of the
 * given household. Returns true if valid, false if the user has been removed.
 * Used to detect when a member has been kicked and should be redirected.
 */
export async function checkMembershipValid(hid, uid) {
  try {
    const hhDoc = await dbGet(`households/${hid}`);
    if (!hhDoc) return false;
    // Check the flat memberUids array for fast lookup
    return (hhDoc.memberUids || []).includes(uid);
  } catch {
    // If we can't fetch the doc, assume membership is invalid
    return false;
  }
}

/**
 * migrateHousehold — copies ALL subcollections from one household to another.
 *
 * This handles the transition from anonymous/pre-auth usage to authenticated usage.
 * Before auth existed, data was stored under a localStorage key "ks-h" as the
 * household ID. On first real login, we need to move that data to the user's
 * new UID-based household so nothing is lost.
 *
 * Iterates over every known subcollection, reads all docs, and writes them
 * to the new household path. The old household data is left in place (not deleted).
 */
async function migrateHousehold(oldHid, newHid) {
  // Every subcollection that a household can have
  const collections = ["inventory", "recipes", "shopping", "mealplan", "settings", "cooklog", "wastelog"];
  for (const col of collections) {
    const docs = await dbList(`households/${oldHid}/${col}`);
    for (const doc of docs) {
      const id = doc.id;
      const data = { ...doc };
      delete data.id; // `id` is derived from the Firestore document path, not stored as a field
      await dbSet(`households/${newHid}/${col}/${id}`, data);
    }
  }
}

/**
 * _validateHouseholdIds — checks each household ID in the user's array,
 * verifying that the household document actually exists in Firestore and
 * that the user is listed in its members array.
 *
 * Returns the best valid household ID:
 *   1. If multiple valid households exist, prefer the one where the user
 *      appears in the members array (shared household over self-created).
 *   2. If only one valid household exists, use that one.
 *   3. If none are valid, return null so the caller can fall back to uid.
 *
 * Also cleans up the user's householdIds array in Firestore by removing
 * any entries that point to deleted/non-existent households.
 */
async function _validateHouseholdIds(uid, userDoc) {
  const rawIds = userDoc.householdIds || [];
  if (!rawIds.length) return null;

  console.log(`[_validateHouseholdIds] Checking ${rawIds.length} household IDs:`, rawIds);

  // Fetch all household docs in parallel to check existence and membership
  const results = await Promise.all(
    rawIds.map(async (hid) => {
      const hhDoc = await dbGet(`households/${hid}`);
      if (!hhDoc) {
        console.log(`[_validateHouseholdIds] household ${hid} does NOT exist — will remove`);
        return { hid, exists: false, isMember: false };
      }
      // Check if the user is in the household's members array
      const isMember = (hhDoc.memberUids || []).includes(uid) ||
                       (hhDoc.members || []).some(m => m.uid === uid);
      console.log(`[_validateHouseholdIds] household ${hid} exists, isMember=${isMember}`);
      return { hid, exists: true, isMember };
    })
  );

  // Separate valid (existing) household IDs from stale/ghost ones
  const validIds = results.filter(r => r.exists).map(r => r.hid);
  const memberIds = results.filter(r => r.exists && r.isMember).map(r => r.hid);
  const staleIds = results.filter(r => !r.exists).map(r => r.hid);

  // Clean up: remove stale/non-existent household IDs from the user's profile
  if (staleIds.length > 0) {
    console.log(`[_validateHouseholdIds] Removing ${staleIds.length} stale IDs:`, staleIds);
    const cleanedIds = rawIds.filter(h => !staleIds.includes(h));
    await dbSet(`users/${uid}`, { ...userDoc, householdIds: cleanedIds, id: undefined });
  }

  // Pick the best household: prefer one where user is a confirmed member
  if (memberIds.length > 0) {
    // If user is a member of multiple households, prefer the one that is NOT
    // the user's own UID (i.e. prefer the shared/joined household)
    const sharedHid = memberIds.find(h => h !== uid);
    const chosen = sharedHid || memberIds[0];
    console.log(`[_validateHouseholdIds] Resolved to member household: ${chosen}`);
    return chosen;
  }

  // Fallback: user exists in a household doc but isn't in members (edge case)
  if (validIds.length > 0) {
    console.log(`[_validateHouseholdIds] Fallback to first valid household: ${validIds[0]}`);
    return validIds[0];
  }

  console.log(`[_validateHouseholdIds] No valid households found`);
  return null;
}

/**
 * _cleanupBushraGhost — ONE-TIME cleanup for Bushra's account.
 * Her UID was incorrectly used as a household ID, creating a ghost document.
 * This deletes the ghost household and fixes her householdIds array to point
 * only to the correct shared household (x5Gz5ydc1UTAkXu0zYuRK5Xmjhm1).
 *
 * Safe to remove once confirmed working in production.
 */
async function _cleanupBushraGhost(uid) {
  const BUSHRA_UID = "xBZZZCTX5Sa7llEPSl9QXG5zscX2";
  const CORRECT_HID = "x5Gz5ydc1UTAkXu0zYuRK5Xmjhm1";
  if (uid !== BUSHRA_UID) return null;

  console.log(`[_cleanupBushraGhost] Running one-time cleanup for Bushra`);

  // Delete the ghost household document at her UID path if it exists
  try {
    const ghostDoc = await dbGet(`households/${BUSHRA_UID}`);
    if (ghostDoc) {
      console.log(`[_cleanupBushraGhost] Deleting ghost household at ${BUSHRA_UID}`);
      await dbDelete(`households/${BUSHRA_UID}`);
      // Also clean up ghost's invite code if it has one
      if (ghostDoc.inviteCode) {
        await dbDelete(`household_codes/${ghostDoc.inviteCode}`);
      }
    }
  } catch (e) {
    console.warn(`[_cleanupBushraGhost] Failed to delete ghost:`, e);
  }

  // Fix her user profile to only reference the correct shared household
  try {
    const userDoc = await dbGet(`users/${BUSHRA_UID}`);
    if (userDoc) {
      console.log(`[_cleanupBushraGhost] Fixing householdIds to [${CORRECT_HID}]`);
      await dbSet(`users/${BUSHRA_UID}`, { ...userDoc, householdIds: [CORRECT_HID], id: undefined });
    }
  } catch (e) {
    console.warn(`[_cleanupBushraGhost] Failed to update user profile:`, e);
  }

  console.log(`[_cleanupBushraGhost] Cleanup complete — returning ${CORRECT_HID}`);
  return CORRECT_HID;
}

/**
 * resolveHousehold — the main entry point called on every sign-in.
 * Determines which household ID the user should use and returns it.
 *
 * Resolution strategy (in order):
 *   1. Run any one-time user-specific cleanup (e.g. Bushra ghost fix)
 *   2. Returning user (profile exists): validate all household IDs,
 *      find the one where user is in memberUids, and use that.
 *      NEVER fall back to uid if householdIds exist but none are valid —
 *      that would recreate ghost households.
 *   3. First-ever login (no profile AND no existing household membership):
 *      create profile + household and return the new household ID.
 *
 * CRITICAL: This function must NEVER auto-create a household for a user
 * who already has entries in householdIds. Ghost households are created
 * when uid is used as a fallback household ID for users who belong to
 * a shared household — this function prevents that.
 */
export async function resolveHousehold(user) {
  const uid = user.uid;
  console.log(`[resolveHousehold] ENTER — uid=${uid}`);

  // ── One-time cleanup for specific users ──
  // Run before normal resolution so the corrected data is used downstream.
  // Safe to remove once confirmed working.
  const cleanupHid = await _cleanupBushraGhost(uid);
  if (cleanupHid) {
    console.log(`[resolveHousehold] One-time cleanup resolved hid=${cleanupHid}`);
    return cleanupHid;
  }

  // Check if this user has logged in before by looking for their profile doc
  const userDoc = await dbGet(`users/${uid}`);
  console.log(`[resolveHousehold] userDoc=`, userDoc);

  if (userDoc) {
    // Returning user — validate all household IDs and pick the correct one.
    // _validateHouseholdIds checks each household doc and finds the one
    // where this user appears in memberUids (the shared household).
    const hid = await _validateHouseholdIds(uid, userDoc);
    console.log(`[resolveHousehold] RETURNING USER — resolved hid=${hid}, householdIds=`, userDoc.householdIds);

    if (hid) {
      // Successfully resolved to a valid household where user is a member.
      // Check for a pending migration from pre-auth anonymous data.
      const oldHid = localStorage.getItem("ks-h");
      if (oldHid && oldHid !== hid && oldHid !== uid) {
        console.log(`[resolveHousehold] LATE MIGRATION TRIGGERED: ${oldHid} → ${hid}`);
        await migrateHousehold(oldHid, hid);
        localStorage.removeItem("ks-h");
      }
      return hid;
    }

    // GUARD: If user has householdIds but none resolved, do NOT create a new
    // household. This prevents ghost recreation. Instead, return null so the
    // caller can show onboarding/error UI.
    const existingIds = userDoc.householdIds || [];
    if (existingIds.length > 0) {
      console.error(`[resolveHousehold] User has ${existingIds.length} householdIds but NONE are valid. NOT creating a ghost. Returning null.`);
      return null;
    }

    // User has a profile but no householdIds at all — they need onboarding
    console.log(`[resolveHousehold] Returning user with empty householdIds — needs onboarding`);
    return null;
  }

  // ── First-time login flow ──
  // GUARD: Before creating a new household, check if this user already appears
  // as a member in an existing household (e.g. they were added by invite but
  // their user profile wasn't created yet). We skip this expensive scan for now
  // and only create if no profile exists AND no cached data suggests they're returning.
  console.log(`[resolveHousehold] FIRST-TIME LOGIN — no userDoc found`);

  // Check if there's pre-auth data stored under an old anonymous household ID
  const oldHid = localStorage.getItem("ks-h");
  const hasOldData = oldHid && oldHid !== uid;
  console.log(`[resolveHousehold] FIRST-TIME — ks-h="${oldHid}", hasOldData=${hasOldData}`);

  // Create the household doc. If migrating, preserve the old kitchen name.
  const cfgName = state.cfg?.name || "My Kitchen";
  console.log(`[resolveHousehold] FIRST-TIME — creating household, cfgName="${cfgName}"`);
  await createHousehold(uid, hasOldData ? cfgName : "My Kitchen");

  // Copy old anonymous data into the new UID-based household
  if (hasOldData) {
    console.log(`[resolveHousehold] FIRST-TIME MIGRATION: ${oldHid} → ${uid}`);
    await migrateHousehold(oldHid, uid);
    console.log(`[resolveHousehold] FIRST-TIME MIGRATION DONE`);
  }

  // Create the user profile and link it to the new household
  const profile = await createUserProfile(user);
  profile.householdIds = [uid];
  await dbSet(`users/${uid}`, profile);
  console.log(`[resolveHousehold] User profile created & saved`);

  // Clean up localStorage: the old anonymous household ID is no longer needed
  localStorage.removeItem("ks-h");

  // Also update the "ks-hhs" key (list of known household IDs in localStorage).
  // Remove the old anonymous ID and ensure the new UID-based ID is present.
  const hhs = J("ks-hhs");
  if (hhs) {
    const updated = hhs.filter(h => h !== oldHid);
    if (!updated.includes(uid)) updated.push(uid);
    localStorage.setItem("ks-hhs", JSON.stringify(updated));
  }

  console.log(`[resolveHousehold] EXIT — returning uid=${uid}`);
  return uid;
}

// ── FIRESTORE HELPERS FOR SHARED DATA ────────────────────────────────────────
// These functions persist specific pieces of household data (meal plan, config,
// cook log, waste log) to Firestore. They also update the in-memory `state`
// so the UI stays consistent without needing a re-fetch.

/**
 * saveMp — save or delete a single meal plan entry.
 *
 * `dateKey` is a "YYYY-MM-DD" string. `mealName` is the recipe/meal name.
 * If mealName is truthy, upsert the entry; if falsy, delete it.
 * Updates state.mp (the in-memory meal plan map) immediately.
 */
export async function saveMp(dateKey, mealName) {
  if (mealName) {
    state.mp[dateKey] = mealName;
    await dbSet(`households/${state.hid}/mealplan/${dateKey}`, { date: dateKey, meal: mealName });
  } else {
    delete state.mp[dateKey];
    await dbDelete(`households/${state.hid}/mealplan/${dateKey}`);
  }
}

/**
 * saveCfg — persist the current household configuration to Firestore.
 * The config includes kitchen name, household members, dietary restrictions, etc.
 * Always writes to the fixed document path "settings/config" under the household.
 */
export async function saveCfg() {
  await dbSet(`households/${state.hid}/settings/config`, state.cfg);
}

/**
 * addCookLogEntry — record that a meal was cooked today (or on a given date).
 *
 * Generates a unique ID from timestamp + random suffix, prepends to state.cookLog
 * (most recent first), and caps the log at 200 entries to prevent unbounded growth.
 */
export async function addCookLogEntry(name, date) {
  const entry = {
    // Unique ID: base-36 timestamp + random suffix ensures no collisions
    id: Date.now().toString(36) + Math.random().toString(36).slice(2),
    name,
    date: date || tk(),             // defaults to today if no date provided
    loggedAt: new Date().toISOString()
  };
  state.cookLog.unshift(entry);     // prepend so newest entries are first
  // Cap at 200 entries to keep the dataset manageable
  if (state.cookLog.length > 200) state.cookLog = state.cookLog.slice(0, 200);
  await dbSet(`households/${state.hid}/cooklog/${entry.id}`, entry);
}

/**
 * addWasteEntry — record that a food item was wasted/thrown out today.
 *
 * Deduplicates: if the same item name was already logged today, skip silently.
 * Otherwise, generates a unique ID, prepends to state.wasteLog, and caps at 100 entries.
 */
export async function addWasteEntry(name) {
  // Prevent duplicate entries for the same item on the same day
  if (state.wasteLog.find(x => x.name === name && x.date === tk())) return;
  const entry = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2),
    name,
    date: tk(),
    loggedAt: new Date().toISOString()
  };
  state.wasteLog.unshift(entry);
  if (state.wasteLog.length > 100) state.wasteLog = state.wasteLog.slice(0, 100);
  await dbSet(`households/${state.hid}/wastelog/${entry.id}`, entry);
}

/**
 * loadFirestoreData — one-time data loader called during app startup.
 *
 * Loads all household data from Firestore into in-memory `state`:
 *   - settings/config  → state.cfg
 *   - mealplan/*       → state.mp
 *   - cooklog/*        → state.cookLog
 *   - wastelog/*       → state.wasteLog
 *
 * For each data type, it also handles a one-time migration from localStorage.
 * Before Firestore existed, data was stored in localStorage under keys like
 * "ks-c" (config), "ks-m" (meal plan), "ks-cooklog", "ks-waste". If Firestore
 * is empty but localStorage has data, we upload it and then delete the local copy.
 * This migration path only runs once per user.
 */
export async function loadFirestoreData() {
  try {
    // ── BACKFILL: HOUSEHOLD INVITE CODE INDEX ──
    // Older households may have an inviteCode in their doc but no matching entry
    // in the top-level household_codes collection (needed for invite code lookups).
    // Ensure the index entry exists so other users can join via the code.
    try {
      const hhDoc = await dbGet(`households/${state.hid}`);
      if (hhDoc && hhDoc.inviteCode) {
        const codeDoc = await dbGet(`household_codes/${hhDoc.inviteCode}`);
        if (!codeDoc) {
          await dbSet(`household_codes/${hhDoc.inviteCode}`, { householdId: state.hid });
          console.log(`[backfill] Created household_codes/${hhDoc.inviteCode} for household ${state.hid}`);
        }
      }
    } catch (e) { console.warn("[backfill] household_codes backfill skipped:", e.message); }

    // ── SETTINGS ──
    // Look for the config doc in Firestore; merge with defaults to fill any missing fields
    const cfgDocs = await dbList(`households/${state.hid}/settings`);
    const cfgDoc = cfgDocs.find(d => d.id === "config");
    if (cfgDoc) {
      // Merge: CFG_DEFAULT provides fallback values for any keys not in the saved doc
      state.cfg = { ...CFG_DEFAULT, ...cfgDoc };
    } else {
      // No config in Firestore — check localStorage for pre-migration data ("ks-c")
      const lsCfg = J("ks-c");
      state.cfg = { ...CFG_DEFAULT, ...(lsCfg || {}) };
      await saveCfg();                          // upload to Firestore
      if (lsCfg) localStorage.removeItem("ks-c"); // clean up localStorage
    }

    // ── MEAL PLAN ──
    // Each meal plan doc has { date: "YYYY-MM-DD", meal: "Recipe Name" }
    // We flatten them into state.mp as a simple { date: mealName } map
    const mpDocs = await dbList(`households/${state.hid}/mealplan`);
    state.mp = {};
    mpDocs.forEach(d => { if (d.date && d.meal) state.mp[d.date] = d.meal; });
    if (!mpDocs.length) {
      // Firestore empty — try migrating from localStorage key "ks-m"
      const lsMp = J("ks-m");
      if (lsMp && Object.keys(lsMp).length) {
        state.mp = lsMp;
        for (const [k, v] of Object.entries(lsMp)) await saveMp(k, v);
        localStorage.removeItem("ks-m");
      }
    }

    // ── COOK LOG ──
    // Array of { id, name, date, loggedAt } entries, sorted newest-first
    const clDocs = await dbList(`households/${state.hid}/cooklog`);
    if (clDocs.length) {
      // Sort by loggedAt (or date as fallback) so newest entries come first
      state.cookLog = clDocs.sort((a, b) => new Date(b.loggedAt || b.date || 0) - new Date(a.loggedAt || a.date || 0));
    } else {
      // Firestore empty — try migrating from localStorage key "ks-cooklog"
      const lsCl = J("ks-cooklog");
      if (lsCl && lsCl.length) {
        // Normalize old entries: ensure every entry has an `id` and `loggedAt`
        state.cookLog = lsCl.map((e, i) => ({
          id: e.id || (Date.now() - i).toString(36), // generate IDs for old entries that lack them
          name: e.name, date: e.date,
          loggedAt: e.loggedAt || new Date().toISOString()
        }));
        for (const e of state.cookLog) await dbSet(`households/${state.hid}/cooklog/${e.id}`, e);
        localStorage.removeItem("ks-cooklog");
      }
    }

    // ── WASTE LOG ──
    // Same structure and migration pattern as cook log
    const wlDocs = await dbList(`households/${state.hid}/wastelog`);
    if (wlDocs.length) {
      state.wasteLog = wlDocs.sort((a, b) => new Date(b.loggedAt || b.date || 0) - new Date(a.loggedAt || a.date || 0));
    } else {
      // Firestore empty — try migrating from localStorage key "ks-waste"
      const lsWl = J("ks-waste");
      if (lsWl && lsWl.length) {
        state.wasteLog = lsWl.map((e, i) => ({
          id: e.id || (Date.now() - i).toString(36),
          name: e.name, date: e.date,
          loggedAt: e.loggedAt || new Date().toISOString()
        }));
        for (const e of state.wasteLog) await dbSet(`households/${state.hid}/wastelog/${e.id}`, e);
        localStorage.removeItem("ks-waste");
      }
    }
  } catch (e) {
    console.error("loadFirestoreData error:", e);
  }
}

// ── POLL PAUSE/RESUME ────────────────────────────────────────────────────────
// Instead of per-collection pending-write counters, we stop the entire poll
// interval while any write is in-flight. This prevents stale Firestore reads
// from overwriting optimistic state. A simple counter tracks how many writes
// are active — the interval is cleared when the first write starts and
// re-created when the last write finishes.
let _activeWrites = 0;

/**
 * pausePoll — called before every write operation begins.
 * Increments the active-write counter and clears the poll interval on the
 * first concurrent write so no polls can land while writes are in-flight.
 */
export function pausePoll() {
  _activeWrites++;
  if (_activeWrites === 1 && window._pollIntervalId) {
    clearInterval(window._pollIntervalId);
    window._pollIntervalId = null;
  }
}

/**
 * resumePoll — called in the `finally` block of every write operation.
 * Decrements the active-write counter. When the last write completes,
 * restarts the poll interval (30 seconds) so background sync resumes.
 */
export function resumePoll() {
  _activeWrites--;
  if (_activeWrites <= 0) {
    _activeWrites = 0;
    if (window._pollFn && !window._pollIntervalId) {
      // Run one immediate poll to pick up the writes we just finished,
      // then restart the 30-second interval
      window._pollFn();
      window._pollIntervalId = setInterval(window._pollFn, 30000);
    }
  }
}

// ── DATA OPERATIONS ──────────────────────────────────────────────────────────
// These are the primary CRUD functions used by UI code to modify inventory,
// recipes, and shopping list items. They follow an optimistic-update pattern:
//   1. Update in-memory `state` immediately (so the UI feels instant)
//   2. Re-render the affected UI sections
//   3. Persist to Firestore in the background
//
// Render functions are called via `renderCallbacks` (a registry pattern) to
// avoid circular imports — UI modules register their render functions here
// at startup, and db.js calls them without importing the UI modules directly.

/**
 * renderCallbacks — registry where UI modules deposit their render functions.
 * This decouples db.js from the UI layer and prevents circular import chains.
 *
 * Populated during app init by modules like inventory.js, recipes.js, etc.
 * Each callback is either a function or null (if not yet registered).
 */
export const renderCallbacks = {
  renderAll: null,    // re-render the entire inventory list
  renderSum: null,    // re-render the summary/dashboard section
  renderRecs: null,   // re-render the recipes list
  renderShop: null,   // re-render the shopping list
};

/**
 * ss (sync status) — updates the sync indicator in the header bar.
 *
 * The UI shows a colored dot and label:
 *   "synced"  → green dot + household name
 *   "syncing" → yellow dot + "Syncing..."
 *   "error"   → red dot + "Sync error"
 *
 * @param {string} s - one of "synced", "syncing", or "error"
 */
export function ss(s) {
  const dot = document.getElementById("sdot");  // the colored status dot element
  const lbl = document.getElementById("slb");   // the text label next to the dot
  if (dot) dot.className = "sdot " + s;
  if (lbl) lbl.textContent = s === "synced" ? "🏠 " + (state.cfg?.name || state.hid) : s === "syncing" ? "Syncing…" : "Sync error";
}

/**
 * svi (save inventory item) — upsert an inventory item.
 *
 * Replaces any existing item with the same ID in state.inv, then persists.
 * Shows sync status indicator during the operation.
 */
export async function svi(item) {
  ss("syncing");
  pausePoll();
  try {
    // Replace existing item (by id) or append if new — spread creates a new array
    const isNew = !state.inv.find(i => i.id === item.id);
    state.inv = [...state.inv.filter(i => i.id !== item.id), item];
    renderCallbacks.renderAll?.();
    renderCallbacks.renderSum?.();
    await dbSet(`households/${state.hid}/inventory/${item.id}`, item);
    // Log activity for new items (not quantity adjustments) — uses "Supplies" label
    if (isNew) logActivity("added", toTitleCase(item.name) + " to Supplies");
    ss("synced");
  } catch (e) { console.error(e); ss("error"); }
  finally { resumePoll(); }
}

/**
 * dli (delete inventory item) — remove an inventory item by ID.
 *
 * Filters it out of state.inv immediately, re-renders, then deletes from Firestore.
 */
export async function dli(id) {
  ss("syncing");
  pausePoll();
  try {
    const removed = state.inv.find(i => i.id === id);
    state.inv = state.inv.filter(i => i.id !== id);
    renderCallbacks.renderAll?.();
    renderCallbacks.renderSum?.();
    await dbDelete(`households/${state.hid}/inventory/${id}`);
    // Log removal with "Supplies" label and Title Case item name
    if (removed) logActivity("removed", toTitleCase(removed.name) + " from Supplies");
    ss("synced");
  } catch (e) { console.error(e); ss("error"); }
  finally { resumePoll(); }
}

/**
 * svr (save recipe) — upsert a recipe.
 *
 * Replaces any existing recipe with the same ID, re-renders, and persists.
 */
export async function svr(r) {
  pausePoll();
  try {
    // Track whether this is a new recipe or an update to an existing one
    const isNew = !state.recs.find(x => x.id === r.id);
    state.recs = [...state.recs.filter(x => x.id !== r.id), r];
    renderCallbacks.renderRecs?.();
    renderCallbacks.renderSum?.();
    await dbSet(`households/${state.hid}/recipes/${r.id}`, r);
    // Log activity for recipe add/update with Title Case name
    const recipeName = toTitleCase(r.name || r.title || "a recipe");
    if (isNew) logActivity("added", recipeName + " to Recipes");
    else logActivity("updated", recipeName);
  } catch (e) { console.error(e); }
  finally { resumePoll(); }
}

/**
 * dlr (delete recipe) — remove a recipe by ID.
 */
export async function dlr(id) {
  pausePoll();
  try {
    // Find the recipe before removing so we can log its name
    const removed = state.recs.find(r => r.id === id);
    state.recs = state.recs.filter(r => r.id !== id);
    renderCallbacks.renderRecs?.();
    renderCallbacks.renderSum?.();
    await dbDelete(`households/${state.hid}/recipes/${id}`);
    // Log recipe deletion with Title Case name
    if (removed) logActivity("deleted", toTitleCase(removed.name || removed.title || "a recipe") + " from Recipes");
  } catch (e) { console.error(e); }
  finally { resumePoll(); }
}

/**
 * svShopItem (save shopping item) — upsert a shopping list item.
 *
 * Replaces any existing item with the same ID, re-renders, and persists.
 */
export async function svShopItem(item) {
  pausePoll();
  try {
    const isNew = !state.shop.find(s => s.id === item.id);
    state.shop = [...state.shop.filter(s => s.id !== item.id), item];
    renderCallbacks.renderShop?.();
    renderCallbacks.renderSum?.();
    await dbSet(`households/${state.hid}/shopping/${item.id}`, item);
    // Log new shopping list additions with Title Case item name
    if (isNew) logActivity("added", toTitleCase(item.name) + " to Shopping List");
  } catch (e) { console.error(e); }
  finally { resumePoll(); }
}

/**
 * dlShopItem (delete shopping item) — remove a shopping list item by ID.
 */
export async function dlShopItem(id) {
  pausePoll();
  try {
    // Find the item before removing so we can log its name
    const removed = state.shop.find(s => s.id === id);
    state.shop = state.shop.filter(s => s.id !== id);
    renderCallbacks.renderShop?.();
    renderCallbacks.renderSum?.();
    await dbDelete(`households/${state.hid}/shopping/${id}`);
    // Log removal from shopping list with Title Case
    if (removed) logActivity("removed", toTitleCase(removed.name) + " from Shopping List");
  } catch (e) { console.error(e); }
  finally { resumePoll(); }
}

// ── PUBLIC RECIPES (COMMUNITY) ───────────────────────────────────────────────
// Public recipes live in a top-level `public_recipes` collection, readable
// by anyone (even unauthenticated users for the share-link page).
// Likes and comments use subcollections for proper security rule scoping.

/**
 * publishRecipe — copy a household recipe to the public_recipes collection.
 * Builds the public document from the private recipe plus author metadata.
 * Includes full structured data (imageUrl, times, ingredients/steps arrays)
 * so the community detail view can render rich recipe cards.
 * Returns the public recipe doc that was written.
 */
export async function publishRecipe(recipe, authorName) {
  // Generate a unique public ID — fully independent from the private recipe ID.
  // This ensures community and private versions have no shared identity.
  const pubId = "pub-" + Date.now() + "-" + Math.random().toString(36).slice(2, 8);
  const doc = {
    title: recipe.name,
    ingredients: recipe.description || "",
    steps: recipe.steps || "",
    tags: recipe.tags || [],
    cuisine: recipe.cuisine || "",
    // Structured data from AI recipe imports
    imageUrl: recipe.imageUrl || null,
    prepTime: recipe.prepTime || "",
    cookTime: recipe.cookTime || "",
    totalTime: recipe.totalTime || "",
    servings: recipe.servings || "",
    difficulty: recipe.difficulty || "",
    summary: recipe.summary || "",
    ingredientsRaw: recipe.ingredientsRaw || [],
    stepsRaw: recipe.stepsRaw || [],
    // Author metadata — both display name and public username
    authorName: authorName || "Anonymous",
    authorUsername: state.username || "",
    authorUid: getCurrentUser()?.uid || "",
    // householdId allows any household member to edit the community version
    householdId: state.hid || "",
    createdAt: new Date().toISOString(),
    likes: 0,
    commentCount: 0,
    // Rating aggregates — updated when users submit ratings
    ratingSum: 0,
    ratingCount: 0,
    avgRating: 0,
  };
  await dbSet(`public_recipes/${pubId}`, doc);
  return { id: pubId, ...doc };
}

/**
 * checkRecipeAlreadyPublished — checks if a community version of a recipe
 * already exists before allowing a publish. Uses two strategies:
 *   1. If the recipe has a stored publicId, verifies that doc still exists.
 *   2. Falls back to scanning the local community cache (state.comRecs)
 *      for a match by authorUid + recipe title.
 * Returns the existing public recipe object if found, or null if safe to publish.
 */
export async function checkRecipeAlreadyPublished(recipe) {
  const uid = getCurrentUser()?.uid;
  if (!uid) return null;

  // Strategy 1: check stored publicId — the most reliable link between
  // the private recipe and its community counterpart.
  if (recipe.publicId) {
    try {
      const existing = await getPublicRecipe(recipe.publicId);
      if (existing) return existing;
    } catch (_) {
      // Doc may have been deleted externally — fall through to strategy 2
    }
  }

  // Strategy 2: scan the local community cache for a matching author + title.
  // Handles edge cases where publicId was lost or never stored (legacy recipes).
  if (state.comRecs && state.comRecs.length > 0) {
    const title = (recipe.name || "").trim().toLowerCase();
    const match = state.comRecs.find(
      cr => cr.authorUid === uid && (cr.title || "").trim().toLowerCase() === title
    );
    if (match) return match;
  }

  return null;
}

/**
 * unpublishRecipe — remove a recipe from the public_recipes collection.
 * Only the author should call this (enforced by Firestore rules).
 */
export async function unpublishRecipe(recipeId) {
  await dbDelete(`public_recipes/${recipeId}`);
}

/**
 * listPublicRecipes — fetch all public recipes for the community feed.
 * Returns an array of plain objects with an `id` field.
 */
export async function listPublicRecipes() {
  return dbList("public_recipes");
}

/**
 * getPublicRecipe — fetch a single public recipe by ID.
 * Used for the public share-link page and detail view.
 */
export async function getPublicRecipe(id) {
  return dbGet(`public_recipes/${id}`);
}

/**
 * toggleLike — add or remove the current user's like on a public recipe.
 * Uses a subcollection doc (public_recipes/{id}/likes/{uid}) so each user
 * can only have one like, and rules enforce ownership.
 * Also increments/decrements the likes count on the parent doc.
 */
export async function toggleLike(recipeId, currentlyLiked) {
  const uid = getCurrentUser()?.uid;
  if (!uid) return;
  const likePath = `public_recipes/${recipeId}/likes/${uid}`;

  if (currentlyLiked) {
    // Remove the like doc
    await dbDelete(likePath);
  } else {
    // Create a like doc
    await dbSet(likePath, { likedAt: new Date().toISOString() });
  }

  // Re-count likes from the subcollection for accuracy
  const likes = await dbList(`public_recipes/${recipeId}/likes`);
  const pubDoc = await dbGet(`public_recipes/${recipeId}`);
  if (pubDoc) {
    await dbSet(`public_recipes/${recipeId}`, { ...pubDoc, likes: likes.length, id: undefined });
  }
}

/**
 * addComment — add a comment to a public recipe.
 * Stored in a subcollection: public_recipes/{id}/comments/{commentId}.
 */
export async function addComment(recipeId, text, authorName) {
  const uid = getCurrentUser()?.uid;
  if (!uid || !text.trim()) return;
  // Enforce 500-character limit on comment text
  const trimmed = text.trim().slice(0, 500);
  const commentId = "cmt-" + Date.now().toString(36) + Math.random().toString(36).slice(2);
  const doc = {
    text: trimmed,
    authorName: authorName || "Anonymous",
    authorUsername: state.username || "",
    authorUid: uid,
    createdAt: new Date().toISOString(),
  };
  await dbSet(`public_recipes/${recipeId}/comments/${commentId}`, doc);

  // Update comment count on parent recipe doc and notify the author
  try {
    const pubDoc = await dbGet(`public_recipes/${recipeId}`);
    if (pubDoc) {
      // Re-count comments for accuracy
      const allComments = await dbList(`public_recipes/${recipeId}/comments`);
      await dbSet(`public_recipes/${recipeId}`, {
        ...pubDoc, commentCount: allComments.length, id: undefined
      });

      // Notify the recipe author (if commenter is not the author)
      if (pubDoc.authorUid && pubDoc.authorUid !== uid) {
        await addNotification(pubDoc.authorUid, {
          type: "comment",
          recipeId,
          recipeName: pubDoc.title || "a recipe",
          commenterUsername: state.username || authorName || "Someone",
        });
      }
    }
  } catch { /* notifications and count updates are best-effort */ }

  return { id: commentId, ...doc };
}

/**
 * listComments — fetch all comments for a public recipe.
 */
export async function listComments(recipeId) {
  return dbList(`public_recipes/${recipeId}/comments`);
}

/**
 * listMyLikes — fetch all like docs the current user has across public recipes.
 * Since likes are nested under each recipe, we can't query across all recipes
 * in one call via REST. Instead, we check per-recipe when rendering.
 * This function checks a single recipe.
 */
export async function checkMyLike(recipeId) {
  const uid = getCurrentUser()?.uid;
  if (!uid) return false;
  const doc = await dbGet(`public_recipes/${recipeId}/likes/${uid}`);
  return !!doc;
}

/**
 * saveRecipeToKitchen — copy a public recipe into the user's household recipes.
 * Generates a new ID so it doesn't conflict with the original.
 * Preserves structured fields (imageUrl, times, ingredientsRaw, stepsRaw)
 * so the saved recipe has full detail, not just flat text.
 */
export async function saveRecipeToKitchen(pubRecipe) {
  const newId = "rec-" + Date.now();
  const recipe = {
    id: newId,
    name: pubRecipe.title,
    description: pubRecipe.ingredients || "",
    notes: pubRecipe.steps || "",
    tags: pubRecipe.tags || [],
    cuisine: pubRecipe.cuisine || "",
    imageUrl: pubRecipe.imageUrl || null,
    prepTime: pubRecipe.prepTime || "",
    cookTime: pubRecipe.cookTime || "",
    totalTime: pubRecipe.totalTime || "",
    servings: pubRecipe.servings || "",
    ingredientsRaw: pubRecipe.ingredientsRaw || [],
    stepsRaw: pubRecipe.stepsRaw || [],
    difficulty: pubRecipe.difficulty || "",
    summary: pubRecipe.summary || "",
    // Fully independent fork — no link back to community version
    rating: 0,
    favorited: false,
    source: "Community",
    sourceUrl: null,
    cookCount: 0,
    savedAt: new Date().toLocaleDateString(),
  };
  await svr(recipe);
  return recipe;
}

// ── USERNAME SYSTEM ──────────────────────────────────────────────────────────
// Usernames are public identifiers shown on community recipes ("Recipe by @BoraK").
// Stored on the user profile (users/{uid}.username) with a top-level index
// collection (usernames/{lowercased}) for uniqueness checks.

/**
 * checkUsernameAvailable — checks if a username is available.
 * Reads the usernames/{lowercased} index doc. Returns true if not taken.
 */
export async function checkUsernameAvailable(username) {
  if (!username) return false;
  const doc = await dbGet(`usernames/${username.toLowerCase()}`);
  return !doc;
}

/**
 * setUsername — sets or changes the current user's public username.
 * Writes to both the user profile and the usernames index collection.
 * If the user already had a username, deletes the old index entry first.
 */
export async function setUsername(uid, newUsername) {
  // Read existing user profile to check for old username
  const userDoc = await dbGet(`users/${uid}`);
  const oldUsername = userDoc?.username;

  // Delete old username index entry if changing
  if (oldUsername && oldUsername.toLowerCase() !== newUsername.toLowerCase()) {
    try { await dbDelete(`usernames/${oldUsername.toLowerCase()}`); } catch { /* ignore */ }
  }

  // Write the new username index doc (maps lowercase username -> uid)
  await dbSet(`usernames/${newUsername.toLowerCase()}`, { uid });

  // Update user profile with the new username
  if (userDoc) {
    await dbSet(`users/${uid}`, { ...userDoc, username: newUsername, id: undefined });
  }

  // Update in-memory state
  state.username = newUsername;
}

/**
 * loadUsername — reads the current user's username from their Firestore profile.
 * Called during app boot. Returns the username string or null.
 */
export async function loadUsername(uid) {
  try {
    const userDoc = await dbGet(`users/${uid}`);
    return userDoc?.username || null;
  } catch { return null; }
}

// ── REVIEWS (COMMUNITY RECIPE RATINGS) ──────────────────────────────────────
// Reviews are stored as subcollection docs: public_recipes/{id}/reviews/{uid}.
// Each user can leave one review per recipe. Rating aggregates (ratingSum,
// ratingCount, avgRating) are maintained on the parent public_recipes doc.

/**
 * addReview — submit or update a star rating + optional text review.
 * After writing the review doc, re-counts all reviews to update the
 * aggregate rating fields on the parent recipe document.
 */
export async function addReview(recipeId, rating, text) {
  const uid = getCurrentUser()?.uid;
  if (!uid || !rating) return;
  const reviewDoc = {
    rating,
    text: (text || "").trim(),
    authorName: localStorage.getItem("ks-who") || "Anonymous",
    authorUsername: state.username || "",
    authorUid: uid,
    createdAt: new Date().toISOString(),
  };
  await dbSet(`public_recipes/${recipeId}/reviews/${uid}`, reviewDoc);

  // Re-count all reviews and update parent doc aggregates
  const allReviews = await dbList(`public_recipes/${recipeId}/reviews`);
  const ratingSum = allReviews.reduce((sum, r) => sum + (r.rating || 0), 0);
  const ratingCount = allReviews.length;
  const avgRating = ratingCount > 0 ? Math.round((ratingSum / ratingCount) * 10) / 10 : 0;

  const pubDoc = await dbGet(`public_recipes/${recipeId}`);
  if (pubDoc) {
    await dbSet(`public_recipes/${recipeId}`, {
      ...pubDoc, ratingSum, ratingCount, avgRating, id: undefined
    });
  }

  return { id: uid, ...reviewDoc };
}

/**
 * listReviews — fetch all reviews for a public recipe.
 */
export async function listReviews(recipeId) {
  return dbList(`public_recipes/${recipeId}/reviews`);
}

/**
 * checkMyReview — check if the current user has already reviewed a recipe.
 * Returns the review doc if it exists, or null.
 */
export async function checkMyReview(recipeId) {
  const uid = getCurrentUser()?.uid;
  if (!uid) return null;
  return dbGet(`public_recipes/${recipeId}/reviews/${uid}`);
}

/**
 * getHouseholdMemberUids — returns the flat array of UIDs for all members
 * of the current household. Used to check if a user belongs to the same
 * household as a community recipe's author (for edit permissions).
 */
export async function getHouseholdMemberUids() {
  if (!state.hid) return [];
  try {
    const hhDoc = await dbGet(`households/${state.hid}`);
    return hhDoc?.memberUids || [];
  } catch { return []; }
}

// ── ACTIVITY FEED ────────────────────────────────────────────────────────────
// Logs household actions so members can see what others have done recently.
// Stored in households/{hid}/activity/{id} with auto-cleanup of old entries.

/**
 * logActivity — records a household action to the activity feed.
 * Called automatically by save/delete operations (inventory, shopping, recipes).
 * @param {string} action — verb describing the action (e.g. "added", "removed")
 * @param {string} itemName — the name of the item acted upon
 */
export async function logActivity(action, itemName) {
  if (!state.hid || !itemName) return;
  const memberName = localStorage.getItem("ks-who") || "Someone";
  const id = "act-" + Date.now().toString(36) + Math.random().toString(36).slice(2);
  const entry = {
    memberName,
    action,
    itemName,
    timestamp: new Date().toISOString()
  };
  try {
    await dbSet(`households/${state.hid}/activity/${id}`, entry);
    // Auto-cleanup: delete entries older than 7 days
    _cleanOldActivity();
  } catch { /* activity logging is best-effort, don't block the main operation */ }
}

/**
 * _cleanOldActivity — removes activity entries older than 7 days.
 * Runs asynchronously in the background after each new log entry.
 */
async function _cleanOldActivity() {
  try {
    const entries = await dbList(`households/${state.hid}/activity`);
    const cutoff = Date.now() - 7 * 24 * 60 * 60 * 1000;
    for (const e of entries) {
      if (e.timestamp && new Date(e.timestamp).getTime() < cutoff) {
        await dbDelete(`households/${state.hid}/activity/${e.id}`);
      }
    }
  } catch { /* best-effort cleanup */ }
}

/**
 * loadActivity — fetches the most recent activity entries for the household.
 * Returns the last 10 entries sorted newest first.
 */
export async function loadActivity() {
  try {
    const entries = await dbList(`households/${state.hid}/activity`);
    return entries
      .sort((a, b) => new Date(b.timestamp || 0) - new Date(a.timestamp || 0))
      .slice(0, 10);
  } catch { return []; }
}

// ── HELPER ───────────────────────────────────────────────────────────────────

/**
 * tk (today key) — returns today's date as a "YYYY-MM-DD" string.
 * Used as a date key for meal plan entries, cook log, and waste log.
 */
function tk() { return new Date().toISOString().split("T")[0]; }

// ── RATINGS (1-5 star system) ────────────────────────────────────────────
// Ratings are stored per-user: public_recipes/{id}/ratings/{uid}.
// Each user gets one rating per recipe. Aggregate fields (ratingSum,
// ratingCount, avgRating) live on the parent public_recipes doc and are
// re-calculated from the subcollection after every write.

/**
 * submitRating — save or update the current user's star rating on a recipe.
 * Prevents recipe authors from rating their own recipes.
 * Re-counts all ratings to keep the aggregate accurate.
 */
export async function submitRating(recipeId, rating) {
  const uid = getCurrentUser()?.uid;
  if (!uid || !rating || rating < 1 || rating > 5) return null;

  // Block self-rating — the recipe's authorUid is on the parent doc
  const pubDoc = await dbGet(`public_recipes/${recipeId}`);
  if (pubDoc && pubDoc.authorUid === uid) return null;

  const now = new Date().toISOString();
  // Check if the user already rated (for updatedAt vs createdAt)
  const existing = await dbGet(`public_recipes/${recipeId}/ratings/${uid}`);
  const ratingDoc = {
    rating,
    createdAt: existing?.createdAt || now,
    updatedAt: now,
  };
  await dbSet(`public_recipes/${recipeId}/ratings/${uid}`, ratingDoc);

  // Re-count all ratings and update parent doc aggregate fields
  const allRatings = await dbList(`public_recipes/${recipeId}/ratings`);
  const ratingSum = allRatings.reduce((sum, r) => sum + (r.rating || 0), 0);
  const ratingCount = allRatings.length;
  const avgRating = ratingCount > 0 ? Math.round((ratingSum / ratingCount) * 10) / 10 : 0;

  if (pubDoc) {
    await dbSet(`public_recipes/${recipeId}`, {
      ...pubDoc, ratingSum, ratingCount, avgRating, id: undefined
    });
  }

  return { ...ratingDoc, ratingSum, ratingCount, avgRating };
}

/**
 * getMyRating — check if the current user has rated a recipe.
 * Returns the rating doc (with .rating field) or null.
 */
export async function getMyRating(recipeId) {
  const uid = getCurrentUser()?.uid;
  if (!uid) return null;
  return dbGet(`public_recipes/${recipeId}/ratings/${uid}`);
}

/**
 * deleteRating — removes the current user's rating from a community recipe.
 * Deletes the rating doc and recalculates the parent doc's aggregate fields.
 * Returns the updated aggregate { ratingSum, ratingCount, avgRating }.
 */
export async function deleteRating(recipeId) {
  const uid = getCurrentUser()?.uid;
  if (!uid) return null;

  // Delete the user's rating doc
  await dbDelete(`public_recipes/${recipeId}/ratings/${uid}`);

  // Recalculate aggregates from remaining ratings
  const allRatings = await dbList(`public_recipes/${recipeId}/ratings`);
  const ratingSum = allRatings.reduce((sum, r) => sum + (r.rating || 0), 0);
  const ratingCount = allRatings.length;
  const avgRating = ratingCount > 0 ? Math.round((ratingSum / ratingCount) * 10) / 10 : 0;

  // Update parent doc with new aggregates
  const pubDoc = await dbGet(`public_recipes/${recipeId}`);
  if (pubDoc) {
    await dbSet(`public_recipes/${recipeId}`, {
      ...pubDoc, ratingSum, ratingCount, avgRating, id: undefined
    });
  }

  return { ratingSum, ratingCount, avgRating };
}

// ── COMMENTS (enhanced with delete support) ──────────────────────────────
// Comments include authorUsername for display. Authors of the recipe can
// delete any comment; users can delete their own comments.

/**
 * deleteComment — remove a comment from a public recipe.
 * Only the comment author or the recipe author should call this.
 */
export async function deleteComment(recipeId, commentId) {
  await dbDelete(`public_recipes/${recipeId}/comments/${commentId}`);

  // Update comment count on parent recipe doc
  try {
    const pubDoc = await dbGet(`public_recipes/${recipeId}`);
    if (pubDoc) {
      const allComments = await dbList(`public_recipes/${recipeId}/comments`);
      await dbSet(`public_recipes/${recipeId}`, {
        ...pubDoc, commentCount: allComments.length, id: undefined
      });
    }
  } catch { /* count update is best-effort */ }
}

// ── REPORTS ──────────────────────────────────────────────────────────────
// Reports are stored in a top-level `reports` collection. Each report has
// a type (recipe or comment), the target ID, the reporter's UID, a reason
// category, and a status ("pending" by default). The reported user is NOT
// notified — reports are reviewed by a moderator.

/**
 * submitReport — file a report against a recipe or comment.
 * Checks if the user already reported this target to prevent duplicates.
 * @param {"recipe"|"comment"} type — what kind of content is being reported
 * @param {string} targetId — the Firestore ID of the recipe or comment
 * @param {string} reason — one of the predefined reason categories
 * @param {string} recipeId — the parent recipe ID (same as targetId for recipe reports)
 */
export async function submitReport(type, targetId, reason, recipeId) {
  const uid = getCurrentUser()?.uid;
  if (!uid) return null;

  // Check for existing report from this user on this target
  const existing = await dbList("reports");
  const dupe = existing.find(r => r.reportedBy === uid && r.targetId === targetId && r.type === type);
  if (dupe) return "duplicate";

  const reportId = "rpt-" + Date.now().toString(36) + Math.random().toString(36).slice(2);
  const doc = {
    type,
    targetId,
    recipeId: recipeId || targetId,
    reportedBy: uid,
    reason,
    createdAt: new Date().toISOString(),
    status: "pending",
  };
  await dbSet(`reports/${reportId}`, doc);
  return { id: reportId, ...doc };
}

// ── NOTIFICATIONS ────────────────────────────────────────────────────────
// Notifications are stored per-user: users/{uid}/notifications/{id}.
// Currently used for comment notifications — when someone comments on a
// user's recipe, the recipe author gets a notification with a link back
// to the recipe detail view.

/**
 * addNotification — create a notification for a user.
 * Called internally when someone comments on another user's recipe.
 * @param {string} targetUid — the user to notify (recipe author)
 * @param {object} data — notification payload (type, recipeId, recipeName, etc.)
 */
export async function addNotification(targetUid, data) {
  if (!targetUid) return;
  const notifId = "ntf-" + Date.now().toString(36) + Math.random().toString(36).slice(2);
  const doc = {
    ...data,
    createdAt: new Date().toISOString(),
    read: false,
  };
  await dbSet(`users/${targetUid}/notifications/${notifId}`, doc);
}

/**
 * listNotifications — fetch all notifications for the current user.
 * Returns an array sorted newest-first.
 */
export async function listNotifications() {
  const uid = getCurrentUser()?.uid;
  if (!uid) return [];
  const notifs = await dbList(`users/${uid}/notifications`);
  return notifs.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
}

/**
 * markNotificationRead — mark a single notification as read.
 */
export async function markNotificationRead(notifId) {
  const uid = getCurrentUser()?.uid;
  if (!uid) return;
  const doc = await dbGet(`users/${uid}/notifications/${notifId}`);
  if (doc) {
    await dbSet(`users/${uid}/notifications/${notifId}`, { ...doc, read: true, id: undefined });
  }
}

/**
 * markAllNotificationsRead — mark all notifications as read for the current user.
 */
export async function markAllNotificationsRead() {
  const uid = getCurrentUser()?.uid;
  if (!uid) return;
  const notifs = await dbList(`users/${uid}/notifications`);
  for (const n of notifs) {
    if (!n.read) {
      await dbSet(`users/${uid}/notifications/${n.id}`, { ...n, read: true, id: undefined });
    }
  }
}

/**
 * getUnreadNotifCount — returns the count of unread notifications.
 * Used for the badge on the Recipes tab.
 */
export async function getUnreadNotifCount() {
  const uid = getCurrentUser()?.uid;
  if (!uid) return 0;
  const notifs = await dbList(`users/${uid}/notifications`);
  return notifs.filter(n => !n.read).length;
}
