// ── SETTINGS + THEMES + HOUSEHOLDS ────────────────────────────────────────────
// This module handles three major features:
//   1. User settings (dietary preferences, household size, notification prefs)
//   2. Theme management (color themes with dark/light/auto mode support)
//   3. Household management (joining, switching, leaving shared households)

// state: global app state (cfg = user config, inv = inventory, hid = current household ID)
// J / Js: JSON parse from / JSON stringify to localStorage (shorthand helpers)
import { state, J, Js } from '../state.js';
// saveCfg: persists state.cfg to Firestore; dbGet/dbSet: read/write Firestore docs
// joinHouseholdByCode: join a household via invite code lookup
// regenerateInviteCode: generate a new 6-char invite code (owner only)
// removeMember: remove a member from a household (owner only)
import { saveCfg, dbGet, dbSet, dbList, dbDelete, createHousehold, joinHouseholdByCode, regenerateInviteCode, removeMember, transferOwnership, deleteHousehold, checkMembershipValid, svShopItem, svi, publishRecipe, checkRecipeAlreadyPublished, listPublicRecipes, deleteAccountData, getHouseholdMemberUids } from '../db.js';
// g: getElementById shorthand; xSt: compute expiry status from a date string;
// showNotif: toast notification; showOv/hideOv: show/hide overlay panels
import { g, xSt, showNotif, showOv, hideOv } from '../helpers.js';
// initHome: re-renders the home screen (called after settings change to reflect updates)
import { initHome } from './home.js';
// getCurrentUser: returns the currently signed-in Firebase Auth user (or null)
import { getCurrentUser } from '../auth.js';

// ── SETTINGS ─────────────────────────────────────────────────────────────────

/**
 * loadCfgUI() — Populates the settings form fields from the in-memory config (state.cfg).
 * Called when the settings overlay is opened so the form reflects current values.
 */
export function loadCfgUI() {
  // Shorthand: get a DOM element by ID
  const el = (id) => g(id);
  // Shorthand: set an input element's value, defaulting to empty string if value is falsy
  const v = (id, val) => { const e = el(id); if (e) e.value = val || ""; };

  // Populate text/number inputs with saved config values
  v("setName", state.cfg.name);
  v("setAdults", state.cfg.adults);
  v("setKids", state.cfg.kids);
  v("setOther", state.cfg.other);       // free-text dietary notes (e.g. "nut allergy")
  v("setCuisines", state.cfg.cuisines); // preferred cuisine types
  v("setCookTime", state.cfg.cookTime); // max cooking time preference
  v("setZipcode", state.cfg.zipcode);   // zipcode for Flipp deal searches

  // Toggle buttons use a CSS class "on" to indicate active state (not a checkbox)
  const tog = (id, on) => { const e = el(id); if (e) e.classList.toggle("on", !!on); };
  tog("tg-nopork", state.cfg.nopork);
  tog("tg-noshellfish", state.cfg.noshellfish);
  tog("tg-vegetarian", state.cfg.vegetarian);
  tog("tg-glutenfree", state.cfg.glutenfree);
  tog("tg-notif", state.cfg.notif);

  // Show/hide the notification time row based on whether notifications are enabled
  const ntr = g("notifTimeRow");
  if (ntr) ntr.style.display = state.cfg.notif ? "block" : "none";

  // Default notification time is 8 AM, default lookahead is 3 days
  v("setNotifTime", state.cfg.notifTime || "8");
  v("setNotifDays", String(state.cfg.notifDays || 3));

  // Populate the username field from state (loaded during app boot)
  v("setUsername", state.username);

  // Render the list of households the user belongs to
  renderHHList();

  // Populate the invite code and members list for the current household
  renderHouseholdInfo();

  // Show/hide the one-time bulk publish button
  showBulkPublishBtn();
}

/**
 * saveSettings() — Reads all form values from the settings UI, merges them into
 * state.cfg, persists to Firestore, and closes the settings overlay.
 */
export async function saveSettings() {
  // Spread existing config so we preserve any fields not shown in the form,
  // then overwrite with current form values
  state.cfg = { ...state.cfg,
    name: g("setName").value.trim(),
    adults: g("setAdults").value.trim(),
    kids: g("setKids").value.trim(),
    // Toggle buttons: check for "on" class to determine boolean state
    nopork: g("tg-nopork").classList.contains("on"),
    noshellfish: g("tg-noshellfish").classList.contains("on"),
    vegetarian: g("tg-vegetarian").classList.contains("on"),
    glutenfree: g("tg-glutenfree").classList.contains("on"),
    other: g("setOther").value.trim(),
    cuisines: g("setCuisines").value.trim(),
    cookTime: g("setCookTime").value,
    zipcode: (g("setZipcode") ? g("setZipcode").value.trim() : ""),
    notif: g("tg-notif").classList.contains("on"),
    notifTime: (g("setNotifTime") ? g("setNotifTime").value : "8"),
    notifDays: parseInt((g("setNotifDays") ? g("setNotifDays").value : "3"))
  };

  // Persist config to Firestore
  await saveCfg();

  // If notifications are enabled, schedule the daily expiry check
  if (state.cfg.notif) scheduleNotifCheck();

  // Show confirmation toast, close settings overlay, refresh the home screen
  showNotif("Settings saved!"); hideOv("settings"); initHome();
}

/**
 * saveZipcode() — Saves just the zipcode field to the household config in Firestore.
 * Called from the dedicated "Save" button next to the zipcode input, so the user
 * doesn't have to scroll down and hit the main "Save Settings" button.
 */
export async function saveZipcode() {
  const zip = g("setZipcode")?.value?.trim() || "";
  state.cfg = { ...state.cfg, zipcode: zip };
  await saveCfg();
  showNotif("Saved!");
}

// ── NOTIFICATIONS ────────────────────────────────────────────────────────────

/**
 * toggleNotif() — Handles the notification toggle button tap.
 * If turning ON, first checks browser support and requests permission.
 * If turning OFF, simply removes the "on" class.
 * @param {HTMLElement} el - The toggle button element
 */
export async function toggleNotif(el) {
  const wasOn = el.classList.contains("on");

  // When enabling notifications, validate browser support and get permission
  if (!wasOn) {
    if (!("Notification" in window)) { showNotif("Notifications not supported on this browser"); return; }
    if (Notification.permission === "denied") { showNotif("Notifications blocked — enable in browser settings"); return; }
    // If permission hasn't been decided yet, prompt the user
    if (Notification.permission !== "granted") {
      const p = await Notification.requestPermission();
      if (p !== "granted") { showNotif("Notifications permission denied"); return; }
    }
  }

  // Toggle the visual state of the button
  el.classList.toggle("on");

  // Show or hide the notification time/days configuration row
  const ntr = g("notifTimeRow");
  if (ntr) ntr.style.display = el.classList.contains("on") ? "block" : "none";
}

/**
 * testNotif() — Fires a test browser notification so the user can verify
 * their notification setup is working. Shows expiring items if any exist.
 */
export function testNotif() {
  if (Notification.permission !== "granted") { showNotif("Enable notifications first"); return; }

  // Find inventory items that are expiring soon or already expired
  // xSt() returns an object with a `.c` (class) property like "expiring", "expired", "fresh"
  const expiring = state.inv.filter(i => { const s = xSt(i.expiry); return s && (s.c === "expiring" || s.c === "expired"); });

  // If nothing is expiring, send a reassuring notification
  if (!expiring.length) { new Notification("Kitchen 🧺", { body: "No items expiring soon — you're all good!" }); return; }

  // Show up to 3 item names, with a "+N more" suffix if there are additional items
  const names = expiring.slice(0, 3).map(i => i.name).join(", ");
  new Notification("Kitchen 🧺 — Expiring Soon", { body: `${names}${expiring.length > 3 ? " + " + (expiring.length - 3) + " more" : ""} need attention` });
}

/**
 * scheduleNotifCheck() — Sends a daily browser notification about items
 * expiring within the user's configured lookahead window (default 3 days).
 * Uses localStorage to ensure only one notification fires per 24-hour period.
 */
export function scheduleNotifCheck() {
  // Bail out if notifications are disabled or permission not granted
  if (!state.cfg.notif || Notification.permission !== "granted") return;

  // Rate-limit: only send one notification per 24 hours (86400000 ms)
  const last = parseInt(localStorage.getItem("ks-lastnotif") || "0"), now = Date.now();
  if (now - last < 86400000) return;
  localStorage.setItem("ks-lastnotif", now.toString());

  // How many days ahead to look for expiring items (user-configurable)
  const days = state.cfg.notifDays || 3;

  // Filter inventory for items expiring within the lookahead window
  const expiring = state.inv.filter(i => {
    const s = xSt(i.expiry); if (!s) return false;
    // Parse the expiry date and compute days remaining from today
    const exp = new Date(i.expiry + "T00:00:00"), t = new Date(); t.setHours(0, 0, 0, 0);
    return Math.round((exp - t) / 86400000) <= days;
  });

  if (!expiring.length) return;

  // Build notification body: first 3 item names + overflow count
  const names = expiring.slice(0, 3).map(i => i.name).join(", ");
  new Notification("Kitchen 🧺 — Expiring Soon", { body: `${names}${expiring.length > 3 ? " + " + (expiring.length - 3) + " more" : ""} expiring in ${days} days or less` });
}

// ── HOUSEHOLDS ────────────────────────────────────────────────────────────────
// Households allow multiple users to share a single pantry inventory.
// Each user can belong to multiple households and switch between them.

/**
 * getHouseholdIds() — Returns the list of household IDs this user belongs to.
 * Reads from localStorage cache ("ks-hhs"), which is synced from the
 * Firestore user document. Falls back to just the current active household.
 */
function getHouseholdIds() { return J("ks-hhs") || [state.hid]; }

/**
 * renderHouseholdInfo() — Populates the invite code display and members list
 * for the current active household in the settings overlay.
 * Fetches the household doc from Firestore to get up-to-date invite code and members.
 * All members can see the member list; only the owner sees Remove and Transfer buttons.
 * Non-owners see a "Leave Household" button instead.
 */
async function renderHouseholdInfo() {
  const user = getCurrentUser();
  if (!user) return;

  try {
    const hhDoc = await dbGet(`households/${state.hid}`);
    if (!hhDoc) return;

    const isOwner = hhDoc.ownerUid === user.uid;

    // Display the invite code
    const codeEl = g("hhInviteCode");
    if (codeEl) codeEl.textContent = hhDoc.inviteCode || "—";

    // Backfill: ensure the household_codes index entry exists for this code.
    // Older households created before Phase 2.5 won't have one yet.
    if (hhDoc.inviteCode && isOwner) {
      try { await dbSet(`household_codes/${hhDoc.inviteCode}`, { householdId: state.hid }); } catch { /* ignore */ }
    }

    // Only owners can regenerate the invite code
    const regenBtn = g("regenCodeBtn");
    if (regenBtn) regenBtn.style.display = isOwner ? "" : "none";

    // Render the members list — visible to all household members
    // Enrich member objects with usernames from user profiles (best-effort)
    const membersEl = g("hhMembers");
    if (membersEl && hhDoc.members) {
      // Fetch usernames for all members in parallel
      const enrichedMembers = await Promise.all(hhDoc.members.map(async m => {
        try {
          const userDoc = await dbGet(`users/${m.uid}`);
          return { ...m, username: userDoc?.username || null };
        } catch { return { ...m, username: null }; }
      }));

      membersEl.innerHTML = enrichedMembers.map(m => {
        const isMe = m.uid === user.uid;
        const isMemberOwner = m.role === "owner";

        // Crown icon for the household owner
        const crownIcon = isMemberOwner ? ' 👑' : '';

        // Fetch username from the member object if available
        const usernameLabel = m.username ? `@${m.username}` : '';

        // Format join date if available (from joinedAt field)
        const joinDate = m.joinedAt
          ? new Date(m.joinedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
          : '';

        // Build the subtitle line: username, role, join date
        const subtitleParts = [];
        if (usernameLabel) subtitleParts.push(usernameLabel);
        subtitleParts.push(isMemberOwner ? "Owner" : "Member");
        if (joinDate) subtitleParts.push(`Joined ${joinDate}`);

        // Owner sees action buttons for non-owner members
        let actionBtns = '';
        if (isOwner && !isMe) {
          actionBtns = `<div style="display:flex;gap:4px;flex-shrink:0">
            <button onclick="event.stopPropagation();transferOwnershipUI('${m.uid}','${m.name.replace(/'/g, "\\'")}')" style="background:none;border:1px solid var(--b2);color:var(--ac);cursor:pointer;font-size:.72rem;padding:4px 8px;border-radius:8px" title="Transfer ownership">👑 Transfer</button>
            <button onclick="event.stopPropagation();removeMemberFromHH('${m.uid}','${m.name.replace(/'/g, "\\'")}')" style="background:none;border:1px solid var(--b2);color:var(--rd);cursor:pointer;font-size:.72rem;padding:4px 8px;border-radius:8px">Remove</button>
          </div>`;
        }

        return `<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px">
          <div style="min-width:0;flex:1">
            <div style="font-size:.86rem;font-weight:500;color:var(--tx)">${m.name}${isMe ? " (you)" : ""}${crownIcon}</div>
            <div style="font-size:.7rem;color:var(--mt);margin-top:2px">${subtitleParts.join(" · ")}</div>
          </div>
          ${actionBtns}
        </div>`;
      }).join("");
    }

    // Show/hide the Utilities section — only household owners should see
    // publish-all, duplicate cleanup, and other maintenance utilities.
    const utilitiesSection = g("utilitiesSection");
    if (utilitiesSection) utilitiesSection.style.display = isOwner ? "" : "none";

    // Show/hide the "Leave Household" button based on ownership status
    const leaveBtn = g("leaveHouseholdBtn");
    if (leaveBtn) {
      // Non-owners see "Leave Household"; owners see a different message handled in leaveHousehold()
      leaveBtn.style.display = "block";
      leaveBtn.textContent = isOwner ? "🗑 Delete or Leave Household" : "🚪 Leave Household";
    }
  } catch (err) {
    console.error("renderHouseholdInfo error:", err);
  }
}

/**
 * copyInviteCode() — Copies the current household's invite code to the clipboard.
 */
export async function copyInviteCode() {
  const code = g("hhInviteCode")?.textContent;
  if (!code || code === "—") return;
  try {
    await navigator.clipboard.writeText(code);
    showNotif("Invite code copied!");
  } catch {
    showNotif("Couldn't copy — try manually");
  }
}

/**
 * shareInviteCode() — Shares the invite code using the Web Share API.
 * Falls back to clipboard copy if Web Share is unavailable.
 */
export async function shareInviteCode() {
  const code = g("hhInviteCode")?.textContent;
  if (!code || code === "—") return;

  const text = `Join my kitchen on Kitchen app! Use invite code: ${code} at https://pantry-app-zeta-six.vercel.app`;

  if (navigator.share) {
    try {
      await navigator.share({ text });
    } catch { /* user cancelled share */ }
  } else {
    // Fallback: copy the share text to clipboard
    try {
      await navigator.clipboard.writeText(text);
      showNotif("Share text copied to clipboard!");
    } catch {
      showNotif("Couldn't share — try manually");
    }
  }
}

/**
 * regenInviteCode() — Regenerates the invite code for the current household.
 * Only available to the household owner. Confirms before proceeding since
 * the old code will stop working immediately.
 */
export async function regenInviteCode() {
  if (!confirm("Regenerate invite code? The old code will stop working.")) return;

  try {
    const newCode = await regenerateInviteCode(state.hid);
    if (newCode) {
      const codeEl = g("hhInviteCode");
      if (codeEl) codeEl.textContent = newCode;
      showNotif("New invite code generated!");
    }
  } catch (err) {
    console.error("regenInviteCode error:", err);
    showNotif("Failed to regenerate code");
  }
}

/**
 * removeMemberFromHH() — Removes a member from the current household.
 * Only available to the household owner. Shows a confirmation with the member's name.
 * Their historical activity feed entries remain in the household feed.
 * @param {string} memberUid — The UID of the member to remove.
 * @param {string} memberName — The display name for the confirmation message.
 */
export async function removeMemberFromHH(memberUid, memberName) {
  const displayName = memberName || "this member";
  if (!confirm(`Remove ${displayName} from the household? They will lose access immediately.`)) return;

  try {
    await removeMember(state.hid, memberUid);
    showNotif(`${displayName} has been removed`);
    renderHouseholdInfo();
  } catch (err) {
    console.error("removeMemberFromHH error:", err);
    showNotif("Failed to remove member");
  }
}

/**
 * transferOwnershipUI() — Transfers household ownership to another member.
 * Shows a confirmation dialog. On confirm, updates the household doc so the
 * selected member becomes the new owner and the current owner becomes a regular member.
 * @param {string} newOwnerUid — The UID of the member to make owner.
 * @param {string} memberName — The display name for the confirmation message.
 */
export async function transferOwnershipUI(newOwnerUid, memberName) {
  const displayName = memberName || "this member";
  if (!confirm(`Transfer ownership to ${displayName}? You will become a regular member.`)) return;

  try {
    await transferOwnership(state.hid, newOwnerUid);
    showNotif(`Ownership transferred to ${displayName}`);
    // Re-render to update crown icon and button visibility
    renderHouseholdInfo();
  } catch (err) {
    console.error("transferOwnershipUI error:", err);
    showNotif("Failed to transfer ownership");
  }
}

/**
 * leaveHousehold() — Handles the "Leave Household" action for both owners and members.
 *
 * For non-owner members:
 *   Shows a confirmation, then revokes access, clears local state, and redirects
 *   to onboarding to create or join a new household.
 *
 * For owners:
 *   If other members exist: blocks the action and tells them to transfer ownership first.
 *   If owner is the only member: offers "Delete Household" or "Cancel".
 */
export async function leaveHousehold() {
  const user = getCurrentUser();
  if (!user) return;

  try {
    const hhDoc = await dbGet(`households/${state.hid}`);
    if (!hhDoc) return;

    const isOwner = hhDoc.ownerUid === user.uid;
    const memberCount = (hhDoc.members || []).length;
    const hhName = hhDoc.name || "this household";

    if (isOwner) {
      // ── Owner leave protection ──
      if (memberCount > 1) {
        // Owner has other members — must transfer ownership first
        alert("You're the owner. Please transfer ownership to another member before leaving.");
        return;
      }

      // Owner is the sole member — offer to delete the entire household
      if (!confirm(`You're the only member. Leaving will permanently delete this household and all its data. Are you sure?`)) return;

      // Delete the entire household and all subcollections
      await deleteHousehold(state.hid, user.uid);

      // Set needsHousehold flag so user is redirected to onboarding on next boot
      try {
        const userDoc = await dbGet(`users/${user.uid}`);
        if (userDoc) {
          await dbSet(`users/${user.uid}`, {
            ...userDoc,
            householdIds: [],
            needsHousehold: true,
            onboardingDone: false,
            id: undefined
          });
        }
      } catch { /* best-effort */ }

      showNotif("Household deleted");

      // Clear all local state and redirect to onboarding
      _clearLocalStateAndRedirect();
    } else {
      // ── Non-owner member leaving ──
      if (!confirm(`Leave the ${hhName} household? You will lose access immediately.`)) return;

      // Remove this user from the household — removeMember also sets
      // needsHousehold: true and onboardingDone: false on their user doc
      // so they'll be redirected to onboarding on next app interaction
      await removeMember(state.hid, user.uid);
      showNotif("You have left the household");

      // Clear all local state and redirect to onboarding
      _clearLocalStateAndRedirect();
    }
  } catch (err) {
    console.error("leaveHousehold error:", err);
    showNotif("Something went wrong. Please try again.");
  }
}

/**
 * _clearLocalStateAndRedirect() — Clears all local app state (localStorage,
 * in-memory state) and reloads the page so the user is taken back to the
 * join/create household screen. Called after a member leaves or is removed,
 * or after a household is deleted.
 */
function _clearLocalStateAndRedirect() {
  // Remove the active household from localStorage
  localStorage.removeItem("ks-h");

  // Remove the household from the cached list
  const arr = (J("ks-hhs") || []).filter(h => h !== state.hid);
  if (arr.length > 0) {
    // If user belongs to other households, switch to the first one
    Js("ks-hhs", arr);
    localStorage.setItem("ks-h", arr[0]);
  } else {
    // No other households — clear the list entirely so onboarding shows
    localStorage.removeItem("ks-hhs");
  }

  // Full page reload — resolveHousehold will detect no valid household
  // and show the join/create screen
  location.reload();
}

/**
 * checkMembershipOnInteraction() — Called periodically or on user interaction
 * to verify the current user is still a member of the active household.
 * If they've been removed by the owner, clears local state and redirects
 * to the onboarding screen. No notification is sent to the removed member.
 */
export async function checkMembershipOnInteraction() {
  const user = getCurrentUser();
  if (!user || !state.hid) return;

  const isValid = await checkMembershipValid(state.hid, user.uid);
  if (!isValid) {
    // User has been removed from this household — clear state and redirect
    showNotif("You no longer have access to this household");
    _clearLocalStateAndRedirect();
  }
}

/**
 * deleteAccount() — Permanently deletes the current user's account.
 *
 * For owners with other members: blocks the action and tells them to
 * transfer ownership first (same guard as leaveHousehold).
 *
 * On confirm:
 *   1. Deletes all Firestore data (households, username index, user doc)
 *   2. Deletes the Firebase Auth account
 *   3. Clears all local state and reloads to the sign-in screen
 *
 * The username is freed so it can be reclaimed if the user recreates their account.
 */
export async function deleteAccount() {
  const user = getCurrentUser();
  if (!user) return;

  try {
    // Check if user is an owner with other members — must transfer first
    if (state.hid) {
      const hhDoc = await dbGet(`households/${state.hid}`);
      if (hhDoc && hhDoc.ownerUid === user.uid && (hhDoc.members || []).length > 1) {
        alert("You're the owner of a household with other members. Please transfer ownership before deleting your account.");
        return;
      }
    }

    // Two-step confirmation for account deletion
    if (!confirm("Delete your account permanently? All your data will be erased and cannot be recovered.")) return;
    if (!confirm("Are you absolutely sure? This action cannot be undone.")) return;

    // Delete all Firestore data associated with this account
    // (households, username index, notifications, user profile)
    await deleteAccountData(user.uid);

    // Delete the Firebase Auth account itself
    try {
      await user.delete();
    } catch (err) {
      // If re-authentication is required (e.g. session too old),
      // inform the user and bail — Firebase requires recent sign-in for deletion
      if (err.code === "auth/requires-recent-login") {
        alert("For security, please sign out and sign back in, then try deleting your account again.");
        return;
      }
      throw err;
    }

    // Clear all local state
    localStorage.clear();
    showNotif("Account deleted");
    location.reload();
  } catch (err) {
    console.error("deleteAccount error:", err);
    showNotif("Failed to delete account. Please try again.");
  }
}

/**
 * addHousehold() — Joins an existing household by invite code.
 * Reads the code from the "newHHCode" input, looks it up via the
 * household_codes index, adds the current user as a member, and updates
 * both sides of the relationship (user doc and household doc).
 */
export async function addHousehold() {
  const input = g("newHHCode")?.value?.trim()?.toUpperCase();
  if (!input) return;

  const user = getCurrentUser();
  if (!user) { showNotif("Sign in first"); return; }

  // Disable input while processing to prevent double-submission
  const el = g("newHHCode");
  el.disabled = true;

  try {
    // Use the invite code lookup to find and join the household
    const hid = await joinHouseholdByCode(input, user);
    if (!hid) {
      showNotif("Invalid invite code. Check and try again.");
      el.disabled = false;
      return;
    }

    // Update the localStorage cache of household IDs
    const arr = getHouseholdIds();
    if (!arr.includes(hid)) arr.push(hid);
    Js("ks-hhs", arr);

    // Clear input and refresh the household list UI
    g("newHHCode").value = "";
    renderHHList();
    showNotif("Household joined!");
  } catch (err) {
    console.error("addHousehold error:", err);
    showNotif("Failed to join household");
  }

  // Re-enable the input regardless of success/failure
  el.disabled = false;
}

/**
 * switchHousehold() — Switches the active household to a different one.
 * Saves the new household ID to localStorage and reloads the page so all
 * data (inventory, recipes, etc.) is fetched for the new household.
 * @param {string} code - The household ID to switch to
 */
export function switchHousehold(code) {
  if (code === state.hid) return; // Already active, nothing to do
  localStorage.setItem("ks-h", code); // "ks-h" stores the active household ID
  location.reload(); // Full reload to re-fetch all household-specific data
}

/**
 * removeHousehold() — Leaves a non-active household. Removes the user from the
 * household's members list and removes the household from the user's profile.
 * For the active household, use leaveHousehold() instead which handles owner protection.
 * @param {string} code - The household ID to leave
 */
export async function removeHousehold(code) {
  // For the active household, redirect to leaveHousehold() which handles owner logic
  if (code === state.hid) { leaveHousehold(); return; }

  const user = getCurrentUser();
  if (user) {
    try {
      // Remove this household from the user's household list in Firestore.
      // Handles both `householdId` (singular) and `householdIds` (array) fields.
      const userDoc = await dbGet(`users/${user.uid}`);
      if (userDoc) {
        // Build the updated list from whichever field format exists
        const currentIds = userDoc.householdId
          ? [userDoc.householdId]
          : (userDoc.householdIds || []);
        const hids = currentIds.filter(h => h !== code);
        // Write back as array format and clear singular field if it existed
        const updates = { ...userDoc, householdIds: hids, id: undefined };
        if (userDoc.householdId) delete updates.householdId;
        await dbSet(`users/${user.uid}`, updates);
      }

      // Remove this user from the household's members and memberUids lists
      const hhDoc = await dbGet(`households/${code}`);
      if (hhDoc) {
        const members = (hhDoc.members || []).filter(m => m.uid !== user.uid);
        const memberUids = (hhDoc.memberUids || []).filter(u => u !== user.uid);
        await dbSet(`households/${code}`, { ...hhDoc, members, memberUids, id: undefined });
      }
    } catch (err) {
      console.error("removeHousehold error:", err);
    }
  }

  // Update localStorage cache and re-render the list
  const arr = getHouseholdIds().filter(h => h !== code);
  Js("ks-hhs", arr);
  renderHHList();
}

/**
 * renderHHList() — Renders the list of households in the settings overlay.
 * Fetches each household's display name from Firestore (falls back to ID).
 * The active household is visually highlighted; inactive ones show a remove button.
 */
async function renderHHList() {
  // Filter out the active household — it's already shown in the main "Household" section above.
  // This prevents ghost entries (e.g. "My Kitchen") from appearing as both current and "other".
  const arr = getHouseholdIds().filter(h => h !== state.hid);
  const el = g("hhList"); if (!el) return;

  // If no other households, show a helpful empty state
  if (!arr.length) { el.innerHTML = `<div style="font-size:.82rem;color:var(--mt);padding:10px 0">No other households yet.</div>`; return; }

  // Fetch display names for each household (falls back to raw ID if fetch fails)
  const items = [];
  for (const h of arr) {
    let name = h;
    try {
      const doc = await dbGet(`households/${h}`);
      if (doc?.name) name = doc.name;
    } catch { /* use ID as fallback */ }
    items.push({ id: h, name });
  }

  // Build the HTML: each household is a clickable card that switches to it.
  // All items here are non-active (active is filtered out above), so each shows
  // "Tap to switch" and a remove button.
  el.innerHTML = items.map(({ id, name }) => {
    return `<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px;cursor:pointer" onclick="switchHousehold('${id}')">
      <div>
        <div style="font-size:.88rem;font-weight:500;color:var(--tx)">${name}</div>
        <div style="font-size:.7rem;color:var(--mt);margin-top:2px">Tap to switch</div>
      </div>
      <button onclick="event.stopPropagation();removeHousehold('${id}')" style="background:none;border:none;color:var(--mt);cursor:pointer;font-size:.82rem;padding:4px 8px">✕</button>
    </div>`;
    // stopPropagation prevents the remove button click from also triggering switchHousehold
  }).join("");
}

// ── THEMES ────────────────────────────────────────────────────────────────────
// Each theme defines a name, a swatch color (for the picker circle), and full
// dark + light palettes. Palette keys map directly to CSS custom properties:
//   bg=background, sf=surface, card/card2=card backgrounds, b1/b2=borders,
//   ac/ac2=accent colors, acr=accent RGB (for rgba() usage), tx/tx2=text, mt=muted text

const THEMES = {
  gold: { name: "Gold", swatch: "#d4a853", dark: { bg: "#0f0f0d", sf: "#1a1a17", card: "#222220", card2: "#2a2a27", b1: "#333330", b2: "#3d3d39", ac: "#d4a853", ac2: "#e8c27a", acr: "212,168,83", tx: "#ede8d8", tx2: "#b8b09a", mt: "#7a7468" }, light: { bg: "#faf8f2", sf: "#ffffff", card: "#f3ede0", card2: "#efe8d8", b1: "#ddd5c0", b2: "#cec4ac", ac: "#a8732a", ac2: "#c48f3e", acr: "168,115,42", tx: "#2a2418", tx2: "#5c5040", mt: "#9a8870" } },
  forest: { name: "Forest", swatch: "#4a9e5c", dark: { bg: "#0a1410", sf: "#111f17", card: "#182a1e", card2: "#1e3326", b1: "#2a4032", b2: "#355040", ac: "#6db56d", ac2: "#8fd08f", acr: "109,181,109", tx: "#e4f0e4", tx2: "#9dbf9d", mt: "#5a7a5a" }, light: { bg: "#f2f9f2", sf: "#ffffff", card: "#e8f5e8", card2: "#dff0df", b1: "#c0ddc0", b2: "#a8cca8", ac: "#2e7d32", ac2: "#43a047", acr: "46,125,50", tx: "#0d2010", tx2: "#2e4f2e", mt: "#5a7a5a" } },
  ocean: { name: "Ocean", swatch: "#38bdf8", dark: { bg: "#060e1a", sf: "#0d1829", card: "#112035", card2: "#162840", b1: "#1e3554", b2: "#264468", ac: "#38bdf8", ac2: "#7dd3fc", acr: "56,189,248", tx: "#e0f2fe", tx2: "#7ab8d4", mt: "#486880" }, light: { bg: "#f0f8ff", sf: "#ffffff", card: "#e0f2fe", card2: "#d4ecf9", b1: "#b0d8f0", b2: "#90c4e4", ac: "#0369a1", ac2: "#0284c7", acr: "3,105,161", tx: "#082040", tx2: "#1e4060", mt: "#4a7090" } },
  bordeaux: { name: "Bordeaux", swatch: "#e8829a", dark: { bg: "#120810", sf: "#1c0e18", card: "#261420", card2: "#301828", b1: "#4a2238", b2: "#5c2a46", ac: "#e8829a", ac2: "#f4aabb", acr: "232,130,154", tx: "#fce8ee", tx2: "#d4909e", mt: "#8a5060" }, light: { bg: "#fff5f7", sf: "#ffffff", card: "#ffe8ed", card2: "#ffd8e0", b1: "#f4b8c4", b2: "#eca0b0", ac: "#be3455", ac2: "#d94070", acr: "190,52,85", tx: "#2a080e", tx2: "#6a2030", mt: "#9a5060" } },
  sand: { name: "Sand", swatch: "#e07a5f", dark: { bg: "#170e08", sf: "#221508", card: "#2e1c0e", card2: "#382414", b1: "#4a3020", b2: "#5c3c28", ac: "#e07a5f", ac2: "#eca080", acr: "224,122,95", tx: "#fdf0e8", tx2: "#c8a090", mt: "#887060" }, light: { bg: "#fdf6ec", sf: "#fffbf5", card: "#f5e8d8", card2: "#eedcc8", b1: "#ddc8ac", b2: "#ccb494", ac: "#c1440e", ac2: "#d4602a", acr: "193,68,14", tx: "#2a1808", tx2: "#5c3820", mt: "#9a7060" } },
  midnight: { name: "Midnight", swatch: "#818cf8", dark: { bg: "#050814", sf: "#0a0d1f", card: "#0f1228", card2: "#141830", b1: "#1e2448", b2: "#272e58", ac: "#818cf8", ac2: "#a5b0ff", acr: "129,140,248", tx: "#e8eaff", tx2: "#9099cc", mt: "#505880" }, light: { bg: "#f0f1ff", sf: "#ffffff", card: "#e4e6ff", card2: "#d8dbff", b1: "#b8bdff", b2: "#a0a6f4", ac: "#4f46e5", ac2: "#6366f1", acr: "79,70,229", tx: "#0a0820", tx2: "#202060", mt: "#5050a0" } },
  lavender: { name: "Lavender", swatch: "#c084fc", dark: { bg: "#0e0814", sf: "#160e20", card: "#1e1430", card2: "#261a3c", b1: "#382454", b2: "#442c66", ac: "#c084fc", ac2: "#d8a8ff", acr: "192,132,252", tx: "#f5ecff", tx2: "#c0a0e0", mt: "#7a5898" }, light: { bg: "#faf5ff", sf: "#ffffff", card: "#f3e8ff", card2: "#ecdcff", b1: "#d8b8f8", b2: "#c8a0f0", ac: "#9333ea", ac2: "#a855f7", acr: "147,51,234", tx: "#1a0830", tx2: "#481080", mt: "#805098" } }
};

// Track current theme and mode in module scope so they persist across function calls
// These are initialized from localStorage, falling back to "gold" theme and "auto" mode
let curTheme = J("ks-theme") || "gold";
let curMode = J("ks-mode") || "auto";

/**
 * applyTheme() — Applies a color theme and light/dark mode to the page.
 * Sets CSS custom properties on <html> so all themed elements update instantly.
 * Also persists the selection to localStorage.
 * @param {string} themeKey - Key from THEMES object (e.g. "gold", "ocean")
 * @param {string} mode - "light", "dark", or "auto" (follows OS preference)
 */
export function applyTheme(themeKey, mode) {
  // Update module-level state and persist to localStorage
  curTheme = themeKey; curMode = mode;
  Js("ks-theme", themeKey); Js("ks-mode", mode);

  // Look up the theme; fall back to gold if an invalid key was passed
  const t = THEMES[themeKey] || THEMES.gold;

  // Determine if we should use the dark palette:
  // "auto" defers to the OS-level prefers-color-scheme media query
  const isDark = mode === "dark" || (mode === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  const v = isDark ? t.dark : t.light;

  // Apply all palette values as CSS custom properties on the document root
  const r = document.documentElement.style;
  r.setProperty("--bg", v.bg); r.setProperty("--sf", v.sf); r.setProperty("--card", v.card); r.setProperty("--card2", v.card2);
  r.setProperty("--b1", v.b1); r.setProperty("--b2", v.b2); r.setProperty("--ac", v.ac); r.setProperty("--ac2", v.ac2);
  // --acd: accent color with 12% opacity, used for subtle accent backgrounds
  r.setProperty("--acd", "rgba(" + v.acr + ",.12)"); r.setProperty("--tx", v.tx); r.setProperty("--tx2", v.tx2); r.setProperty("--mt", v.mt);

  // Semantic status colors (green/red/amber) are theme-independent
  r.setProperty("--gn", "#6db56d"); r.setProperty("--gnd", "rgba(109,181,109,.12)");   // green = fresh/good
  r.setProperty("--rd", "#d96b6b"); r.setProperty("--rdd", "rgba(217,107,107,.12)");   // red = expired/bad
  r.setProperty("--am", "#c8960a"); r.setProperty("--amd", "rgba(200,150,10,.12)");     // amber = expiring soon

  // Update the UI to reflect the new active mode and theme
  _updateModeButtons(mode);
  _updateThemePicker(themeKey);
}

/**
 * setMode() — Convenience wrapper to change only the light/dark/auto mode
 * while keeping the current theme color.
 * @param {string} mode - "light", "dark", or "auto"
 */
export function setMode(mode) { applyTheme(curTheme, mode); }

/**
 * _updateModeButtons() — Highlights the active mode button (auto/light/dark)
 * and resets the others to default styling.
 * @param {string} mode - The currently active mode
 */
function _updateModeButtons(mode) {
  ["auto", "light", "dark"].forEach(m => {
    const b = g("mode-" + m); if (!b) return;
    // Active button gets accent background + inverted text; others are transparent
    b.style.background = m === mode ? "var(--ac)" : "";
    b.style.color = m === mode ? "var(--bg)" : "";
    b.style.borderColor = m === mode ? "var(--ac)" : "";
  });
}

/**
 * _updateThemePicker() — Rebuilds the theme picker (row of colored circles).
 * The active theme gets a border and checkmark; others are plain swatches.
 * Each circle calls applyTheme() on click.
 * @param {string} active - The currently active theme key
 */
function _updateThemePicker(active) {
  const el = g("themePicker"); if (!el) return;
  el.innerHTML = ""; // Clear existing swatches before rebuilding

  Object.keys(THEMES).forEach(k => {
    const t = THEMES[k], sel = k === active;

    // Create a circular swatch for this theme
    const div = document.createElement("div");
    div.title = t.name;
    // Inline styles: circle shape, theme's swatch color as background,
    // selected theme gets a visible border + box-shadow ring
    div.style.cssText = "width:36px;height:36px;border-radius:50%;background:" + t.swatch + ";cursor:pointer;border:3px solid " + (sel ? "var(--tx)" : "transparent") + ";box-shadow:" + (sel ? "0 0 0 2px var(--ac)" : "none") + ";transition:all .2s;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.85rem";
    div.textContent = sel ? "✓" : ""; // Checkmark only on the active theme
    div.onclick = () => applyTheme(k, curMode); // Apply this theme, keep current mode
    // Hover effect: slight scale-up for visual feedback
    div.onmouseover = function() { this.style.transform = "scale(1.15)"; };
    div.onmouseout = function() { this.style.transform = "scale(1)"; };
    el.appendChild(div);
  });
}

/**
 * initTheme() — Called once at app startup. Applies the saved theme from localStorage
 * and sets up a listener for OS dark/light mode changes so "auto" mode reacts in real time.
 */
export function initTheme() {
  applyTheme(curTheme, curMode);
  // When the OS switches between light/dark, re-apply the theme if in "auto" mode
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (curMode === "auto") applyTheme(curTheme, "auto");
  });
}

/**
 * refreshSettingsUI() — Called when the settings overlay is opened.
 * Ensures the theme picker and mode buttons reflect the current selections
 * (they may have been destroyed/recreated if the overlay was re-rendered).
 */
export function refreshSettingsUI() {
  _updateThemePicker(curTheme);
  _updateModeButtons(curMode);
}

// ── RETROACTIVE ENRICHMENT ───────────────────────────────────────────────────
// One-time utility to scan all existing shopping list and inventory items that
// lack an image or brand, and attempt to enrich them by searching the product
// database waterfall (Edamam + Open Food Facts via /api/text-search).
// Items where no match is found are left unchanged.

/**
 * enrichExistingItems() — Runs retroactive enrichment across both shopping
 * and inventory items. Shows a progress bar in the Utilities settings section.
 * Each item's name is searched via /api/text-search, and the best match
 * (first result) is applied automatically. Throttled to avoid API rate limits.
 */
export async function enrichExistingItems() {
  const btn = g("enrichBtn");
  const progressEl = g("enrichProgress");
  const statusEl = g("enrichStatus");
  const barEl = g("enrichBar");

  // Prevent double-tap while already running
  if (btn) btn.disabled = true;

  // Show the progress UI
  if (progressEl) progressEl.style.display = "block";

  // Collect items needing enrichment from both shopping list and inventory.
  // An item "needs enrichment" if it has no image URL and no brand field.
  const shopItems = state.shop.filter(i => _needsEnrich(i));
  const invItems = state.inv.filter(i => _needsEnrich(i));
  const allItems = [
    ...shopItems.map(i => ({ item: i, list: "shop" })),
    ...invItems.map(i => ({ item: i, list: "inv" }))
  ];

  if (!allItems.length) {
    if (statusEl) statusEl.textContent = "All items already enriched!";
    if (barEl) barEl.style.width = "100%";
    if (btn) { btn.disabled = false; }
    showNotif("Nothing to enrich — all items already have data.");
    return;
  }

  let enriched = 0;
  let skipped = 0;

  for (let idx = 0; idx < allItems.length; idx++) {
    const { item, list } = allItems[idx];
    const pct = Math.round(((idx + 1) / allItems.length) * 100);

    // Update progress UI
    if (statusEl) statusEl.textContent = `Processing "${item.name}" (${idx + 1}/${allItems.length})…`;
    if (barEl) barEl.style.width = pct + "%";

    try {
      // Search the text-search API for the item's name
      const r = await fetch(`/api/text-search?q=${encodeURIComponent(item.name)}`);
      const data = await r.json();
      const results = data.results || [];

      if (results.length) {
        // Pick the best (first) result and merge enrichment data into the item
        const best = results[0];
        const enrichedItem = {
          ...item,
          image: best.image || item.image || null,
          brand: best.brand || item.brand || "",
          category: best.category || item.category || "",
          source: best.source || item.source || "search",
        };

        // Save enriched item back to Firestore via the appropriate save function
        if (list === "shop") {
          await svShopItem(enrichedItem);
        } else {
          await svi(enrichedItem);
        }
        enriched++;
      } else {
        // No match found — leave item unchanged
        skipped++;
      }
    } catch (e) {
      // API error for this item — skip and continue with the rest
      console.warn(`Enrich failed for "${item.name}":`, e);
      skipped++;
    }

    // Brief throttle between API calls to avoid hitting rate limits
    if (idx < allItems.length - 1) {
      await _sleep(300);
    }
  }

  // Show completion status
  if (statusEl) statusEl.textContent = `Done! ${enriched} enriched, ${skipped} skipped.`;
  if (barEl) barEl.style.width = "100%";
  if (btn) btn.disabled = false;
  showNotif(`Enrichment complete: ${enriched} updated, ${skipped} unchanged.`);
}

/**
 * _needsEnrich(item) — Returns true if an item is missing enrichment data.
 * An item needs enrichment if it has no image URL AND no brand field.
 * Also requires a non-empty name to search for.
 * Items with imageDismissed=true are skipped — the user explicitly deleted
 * the image and enrichment must not override that decision.
 */
function _needsEnrich(item) {
  if (!item.name || item.name.length < 2) return false;
  if (item.imageDismissed) return false;
  return !item.image && !item.brand;
}

/**
 * _sleep(ms) — Simple delay helper for throttling API calls.
 * Returns a promise that resolves after the given milliseconds.
 */
function _sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ── BULK PUBLISH ALL RECIPES ─────────────────────────────────────────────────
// Utility to publish all existing private recipes to the community as
// fully independent copies. Skips any recipes already published (detected
// by checkRecipeAlreadyPublished). Can be run repeatedly — always available
// in Settings > Utilities for the household owner.

/**
 * bulkPublishAll — publishes all household recipes to the community as
 * fully independent copies with new IDs. Skips recipes already published
 * (using householdId-based duplicate detection). Re-enables the button
 * after completion so it can be run again when new recipes are added.
 */
export async function bulkPublishAll() {
  if (!state.recs || state.recs.length === 0) {
    showNotif("No recipes to publish");
    return;
  }
  if (!confirm(`Publish all ${state.recs.length} recipes to the community? This creates independent copies visible to everyone. Already-published recipes will be skipped.`)) return;

  const user = getCurrentUser();
  const authorName = user?.displayName || localStorage.getItem("ks-who") || "Anonymous";
  const total = state.recs.length;
  let success = 0;

  // Show progress indicator
  const progressEl = g("bulkPubProgress");
  if (progressEl) { progressEl.style.display = "block"; progressEl.textContent = `Publishing 0/${total}…`; }

  const btn = g("bulkPubBtn");
  if (btn) btn.disabled = true;

  let skipped = 0;
  for (const r of state.recs) {
    try {
      // ── DUPLICATE GUARD: skip recipes already in the community ──
      // Uses householdId-based matching so recipes published by any
      // household member are correctly detected and skipped.
      const existing = await checkRecipeAlreadyPublished(r);
      if (existing) {
        skipped++;
        if (progressEl) progressEl.textContent = `Published ${success}/${total} (${skipped} skipped)…`;
        continue;
      }
      // Publish as a fully independent copy — householdId set for household editing
      await publishRecipe(r, authorName);
      success++;
      if (progressEl) progressEl.textContent = `Published ${success}/${total}…`;
    } catch (e) {
      console.error("Failed to publish:", r.name, e);
    }
  }

  showNotif(`Published ${success} of ${total} recipes to community!` + (skipped ? ` (${skipped} already published)` : ""));

  // Re-enable the button so it can be used again when new recipes are added
  if (btn) { btn.disabled = false; }
  if (progressEl) progressEl.textContent = `Done — ${success} published, ${skipped} skipped.`;
}

/**
 * showBulkPublishBtn — shows the bulk publish button in settings.
 * Called from loadCfgUI(). Always visible for household owners (the
 * Utilities section itself is owner-gated). The button can be used
 * repeatedly — already-published recipes are skipped via duplicate detection.
 */
export function showBulkPublishBtn() {
  const btn = g("bulkPubBtn");
  if (btn) {
    btn.style.display = "block";
  }
}

// ── REMOVE DUPLICATE COMMUNITY RECIPES (MAINTENANCE UTILITY) ────────────────
// Reusable maintenance utility that scans public_recipes belonging to the
// current household, identifies duplicates by title, keeps the oldest
// (original publish), and deletes all newer copies.
// Ownership is determined by householdId field when present, or by checking
// the authorUid against the household member list for legacy documents
// published before householdId was added to public_recipes.
// Can be run as many times as needed — always available in Settings > Utilities.

/**
 * removeDuplicateCommunityRecipes — maintenance utility that finds and removes
 * duplicate community recipes belonging to the current household. For each
 * recipe, household ownership is determined by:
 *   1. The householdId field (present on newly published recipes), OR
 *   2. The authorUid matching any current household member (legacy fallback).
 * Groups owned recipes by lowercase title, keeps the oldest, deletes the rest.
 * Shows a summary notification when complete.
 */
export async function removeDuplicateCommunityRecipes() {
  if (!confirm("Scan community recipes and remove duplicates? (Keeps the oldest/original version of each duplicate.)")) return;

  const btn = g("removeDupBtn");
  if (btn) { btn.disabled = true; btn.textContent = "Scanning…"; }

  try {
    // Fetch all community recipes fresh from Firestore
    const allPublic = await listPublicRecipes();
    if (!allPublic || allPublic.length === 0) {
      showNotif("No community recipes found.");
      if (btn) { btn.disabled = false; btn.textContent = "🧹 Remove duplicate community recipes"; }
      return;
    }

    // Load current household member UIDs — needed to identify legacy recipes
    // (published before householdId was added) that belong to this household.
    const hid = state.hid || "";
    const memberUids = await getHouseholdMemberUids();

    /**
     * belongsToHousehold — checks whether a public recipe belongs to the
     * current household. Tries householdId first (reliable for new docs),
     * then falls back to checking authorUid against the household member list
     * (handles legacy docs that were published without a householdId field).
     */
    const belongsToHousehold = (r) => {
      // New-style: recipe has a householdId field — exact match
      if (r.householdId) return r.householdId === hid;
      // Legacy fallback: no householdId, check if author is a household member
      return r.authorUid && memberUids.includes(r.authorUid);
    };

    // Filter to only recipes belonging to the current household, then group
    // by lowercase title. Only household-owned recipes are candidates for
    // duplicate detection — we never touch other households' recipes.
    const groups = {};
    for (const r of allPublic) {
      if (!belongsToHousehold(r)) continue;
      const key = (r.title || "").trim().toLowerCase();
      if (!groups[key]) groups[key] = [];
      groups[key].push(r);
    }

    // For each group with more than one recipe, sort by createdAt ascending
    // and keep the oldest (original publish), deleting all newer duplicates.
    const toDelete = [];
    for (const key of Object.keys(groups)) {
      const dupes = groups[key];
      if (dupes.length <= 1) continue;

      // Sort oldest first — keep index 0 (original), delete the rest
      dupes.sort((a, b) => (a.createdAt || "").localeCompare(b.createdAt || ""));
      for (let i = 1; i < dupes.length; i++) {
        toDelete.push(dupes[i]);
      }
    }

    if (toDelete.length === 0) {
      showNotif("No duplicate community recipes found.");
      if (btn) { btn.disabled = false; btn.textContent = "🧹 Remove duplicate community recipes"; }
      return;
    }

    // Delete each duplicate document from public_recipes
    let deleted = 0;
    for (const r of toDelete) {
      try {
        await dbDelete(`public_recipes/${r.id}`);
        deleted++;
        if (btn) btn.textContent = `Removing ${deleted}/${toDelete.length}…`;
      } catch (e) {
        console.error("Failed to delete duplicate:", r.id, r.title, e);
      }
    }

    // Refresh the local community cache so the UI reflects the cleanup
    state.comRecs = await listPublicRecipes();

    showNotif(`${deleted} duplicate recipe${deleted !== 1 ? "s" : ""} removed.`);
  } catch (e) {
    console.error("removeDuplicateCommunityRecipes error:", e);
    showNotif("Error scanning for duplicates. Check console.");
  }

  // Always re-enable the button — this is a reusable maintenance utility
  if (btn) { btn.disabled = false; btn.textContent = "🧹 Remove duplicate community recipes"; }
}

// ── REGENERATE ALL SUMMARIES ─────────────────────────────────────────────────
// Utility that loops through all household and authored public recipes,
// sends each to Claude to rewrite the summary in the standard 2-sentence format.

/**
 * regenAllSummaries — sends every recipe to Claude to regenerate its summary.
 * Covers both household recipes (state.recs) and public_recipes authored by the
 * current user. Can be run multiple times — does NOT disable after use.
 */
export async function regenAllSummaries() {
  const user = getCurrentUser();
  if (!user) { showNotif("Sign in first"); return; }

  // Gather household recipes
  const privateRecs = [...state.recs];

  // Gather public recipes authored by this user
  let publicRecs = [];
  try {
    const allPublic = await dbList("public_recipes");
    publicRecs = allPublic.filter(r => r.authorUid === user.uid);
  } catch (e) {
    console.error("Failed to load public recipes:", e);
  }

  const allRecs = [...privateRecs, ...publicRecs];
  const total = allRecs.length;

  if (!total) { showNotif("No recipes to process"); return; }
  if (!confirm(`Regenerate summaries for ${total} recipes using Claude AI? This will overwrite existing summaries.`)) return;

  const progressEl = g("regenSumProgress");
  const btn = g("regenSumBtn");
  if (progressEl) { progressEl.style.display = "block"; progressEl.textContent = `Regenerating 0 of ${total}…`; }
  if (btn) btn.disabled = true;

  let updated = 0;

  for (let i = 0; i < allRecs.length; i++) {
    const rec = allRecs[i];
    const title = rec.title || rec.name || "Untitled";
    const ingredients = rec.ingredientsRaw?.join(", ") || rec.ingredients || rec.description || "";
    const steps = rec.stepsRaw?.join(". ") || rec.steps || "";

    try {
      // Call Claude to generate a standard 2-sentence summary
      const resp = await fetch("/api/proxy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-haiku-4-5-20251001",
          max_tokens: 200,
          messages: [{ role: "user", content: `Write a 2-sentence summary for this recipe. First sentence: what the dish is. Second sentence: what makes it special or notable. Max 200 characters total. Be concise.\n\nTitle: ${title}\nIngredients: ${ingredients.substring(0, 500)}\nInstructions: ${steps.substring(0, 500)}` }]
        })
      });
      const data = await resp.json();
      const newSummary = data.content?.[0]?.text?.trim() || "";

      if (newSummary) {
        // Determine if this is a private or public recipe and save accordingly
        const isPublic = publicRecs.some(r => r.id === rec.id);
        if (isPublic) {
          // Update public recipe via dbSet
          await dbSet(`public_recipes/${rec.id}`, { ...rec, summary: newSummary, id: undefined });
        } else {
          // Update private recipe via dbSet (household recipes path)
          const privPath = `households/${state.hid}/recipes/${rec.id}`;
          await dbSet(privPath, { ...rec, summary: newSummary, id: undefined });
          // Also update local state
          const local = state.recs.find(r => r.id === rec.id);
          if (local) local.summary = newSummary;
        }
        updated++;
      }
    } catch (e) {
      console.error("Summary regen failed for:", title, e);
    }

    // Update progress
    if (progressEl) progressEl.textContent = `Regenerating ${i + 1} of ${total}…`;

    // Small delay to avoid rate-limiting
    await _sleep(300);
  }

  if (progressEl) progressEl.textContent = `Done — ${updated} summaries updated.`;
  if (btn) btn.disabled = false;
  showNotif(`${updated} summaries regenerated!`);
}
