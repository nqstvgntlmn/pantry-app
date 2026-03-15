// ── MEAL REMINDERS ──────────────────────────────────────────────────────────
// Schedules browser notifications for planned meals using the Notifications API.
// Each day that has a meal planned gets a 9 AM reminder:
//   "Tonight's dinner: [Recipe Name] — tap to view recipe"
//
// Notification state is stored in localStorage to ensure:
//   - Each meal only triggers one notification per day
//   - Cooked meals cancel their pending reminders
//   - Reminders survive page reloads via setTimeout rescheduling on boot

import { state } from '../state.js';

// localStorage key for tracking scheduled/fired notification state
const LS_KEY = "ks-meal-reminders";

// ── NOTIFICATION PERMISSION ─────────────────────────────────────────────────

/**
 * _ensureNotifPermission() — Requests browser notification permission if not
 * already granted. Returns true if permission is "granted", false otherwise.
 * Fails silently if notifications are denied or unsupported (no error shown).
 */
async function _ensureNotifPermission() {
  if (!("Notification" in window)) return false;
  if (Notification.permission === "granted") return true;
  if (Notification.permission === "denied") return false;
  // Ask user for permission — will show browser-native prompt
  const result = await Notification.requestPermission();
  return result === "granted";
}

// ── REMINDER STATE (localStorage) ───────────────────────────────────────────

/**
 * _getReminderState() — Reads the notification state map from localStorage.
 * Returns an object keyed by date (YYYY-MM-DD), each with:
 *   { meal: string, fired: boolean, cancelled: boolean }
 */
function _getReminderState() {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY)) || {};
  } catch { return {}; }
}

/**
 * _setReminderState(state) — Persists the notification state map to localStorage.
 */
function _setReminderState(reminderState) {
  localStorage.setItem(LS_KEY, JSON.stringify(reminderState));
}

// ── TIMER TRACKING ──────────────────────────────────────────────────────────
// Active setTimeout handles, keyed by date string. Used to cancel reminders
// when a meal is marked as cooked before the notification fires.
const _timers = {};

// ── SCHEDULING ──────────────────────────────────────────────────────────────

/**
 * scheduleMealReminders() — Called on app boot and whenever the meal plan changes.
 * Scans state.mp for all planned meals. For each day:
 *   - If the meal hasn't been notified yet and the day is today or in the future,
 *     schedules a setTimeout for 9 AM that day.
 *   - If the notification time has already passed today, skips it.
 *   - Cleans up old reminder state entries from past days.
 */
export async function scheduleMealReminders() {
  // Check notification permission — bail silently if denied
  const permitted = await _ensureNotifPermission();
  if (!permitted) return;

  const reminderState = _getReminderState();
  const now = new Date();
  const todayKey = now.toISOString().split("T")[0];

  // Clean up old entries (more than 1 day old) to prevent localStorage bloat
  for (const dateKey of Object.keys(reminderState)) {
    if (dateKey < todayKey) {
      delete reminderState[dateKey];
      // Clear any orphaned timers
      if (_timers[dateKey]) { clearTimeout(_timers[dateKey]); delete _timers[dateKey]; }
    }
  }

  // Schedule reminders for each planned meal
  for (const [dateKey, mealName] of Object.entries(state.mp)) {
    if (!mealName) continue;
    if (dateKey < todayKey) continue; // Skip past days

    const entry = reminderState[dateKey];

    // Already fired or cancelled for this day — skip
    if (entry && (entry.fired || entry.cancelled)) continue;

    // Calculate ms until 9 AM on the planned day
    const reminderTime = new Date(dateKey + "T09:00:00");
    const msUntil = reminderTime.getTime() - now.getTime();

    // If 9 AM has already passed today, skip this reminder
    if (msUntil <= 0) continue;

    // Record that this reminder is scheduled (not yet fired)
    reminderState[dateKey] = { meal: mealName, fired: false, cancelled: false };

    // Clear any existing timer for this day (in case meal name changed)
    if (_timers[dateKey]) clearTimeout(_timers[dateKey]);

    // Schedule the notification for 9 AM
    _timers[dateKey] = setTimeout(() => {
      _fireReminder(dateKey, mealName);
    }, msUntil);
  }

  _setReminderState(reminderState);
}

/**
 * _fireReminder(dateKey, mealName) — Fires the browser notification for a meal.
 * Checks that the reminder hasn't been cancelled (meal cooked) before showing.
 * Marks the reminder as fired in localStorage so it won't repeat.
 */
function _fireReminder(dateKey, mealName) {
  const reminderState = _getReminderState();
  const entry = reminderState[dateKey];

  // If the meal was cooked (cancelled) before the reminder fired, skip it
  if (entry && entry.cancelled) return;

  // Fire the browser notification
  try {
    new Notification("Tonight's dinner 🍽", {
      body: `${mealName} — tap to view recipe`,
      icon: "/icon-192.png",
      tag: `meal-${dateKey}` // prevents duplicate notifications for the same day
    });
  } catch { /* notification failed silently — e.g. permission revoked */ }

  // Mark as fired so it doesn't repeat on page reload
  reminderState[dateKey] = { meal: mealName, fired: true, cancelled: false };
  _setReminderState(reminderState);

  // Clean up the timer reference
  delete _timers[dateKey];
}

// ── CANCELLATION ────────────────────────────────────────────────────────────

/**
 * cancelMealReminder(dateKey) — Cancels a pending reminder for a specific day.
 * Called when a meal is marked as "Cooked" before the 9 AM reminder fires.
 * Clears the setTimeout and marks the entry as cancelled in localStorage.
 */
export function cancelMealReminder(dateKey) {
  // Clear the pending timer if one exists
  if (_timers[dateKey]) {
    clearTimeout(_timers[dateKey]);
    delete _timers[dateKey];
  }

  // Mark as cancelled in localStorage so it won't reschedule on page reload
  const reminderState = _getReminderState();
  if (reminderState[dateKey]) {
    reminderState[dateKey].cancelled = true;
    _setReminderState(reminderState);
  }
}
