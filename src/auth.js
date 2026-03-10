// ── FIREBASE AUTH MODULE ─────────────────────────────────────────────────────
// Central authentication module for the pantry app.
// Initializes a Firebase app instance and sets up Firebase Auth with three
// sign-in strategies: Google (OAuth popup/redirect), Apple (OAuth popup/redirect),
// and Email/Password (classic credentials).
//
// This module provides:
//   - A reactive auth state system (onAuth) so other modules can react to login/logout
//   - Sign-in / sign-up / sign-out helper functions
//   - A token getter (getIdToken) for attaching JWTs to API requests
//   - Simple getters (getCurrentUser, isSignedIn) for synchronous checks
//
// Other modules should NEVER import from 'firebase/auth' directly — they should
// use the helpers exported here to keep auth logic in one place.

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,       // Fires a callback whenever the user signs in, signs out, or the page loads with a cached session
  signInWithPopup,           // Opens a popup window for OAuth sign-in (Google, Apple)
  signInWithRedirect,        // Redirects the entire page for OAuth sign-in (fallback when popups are blocked)
  getRedirectResult,         // Retrieves the sign-in result after a redirect-based sign-in completes
  signInWithEmailAndPassword,// Signs in with an existing email/password account
  createUserWithEmailAndPassword, // Creates a brand-new email/password account
  updateProfile,             // Updates user profile fields (e.g., displayName) after account creation
  signOut as firebaseSignOut,// Renamed to avoid collision with our own exported signOut wrapper
  GoogleAuthProvider,        // Provider class for Google OAuth
  OAuthProvider,             // Generic OAuth provider class (used here for Apple)
} from 'firebase/auth';

// ── Firebase config ─────────────────────────────────────────────────────────
// These values come from the Firebase console and identify our specific project.
// They are safe to expose client-side — Firebase security rules (not these keys)
// control who can read/write data. The keys simply tell the SDK which project to connect to.
const firebaseConfig = {
  apiKey: "AIzaSyAFURz8fEGSTameAW5YvBKWpr2LXv9Ang0",
  authDomain: "family-pantry-c65d6.firebaseapp.com",
  projectId: "family-pantry-c65d6",
  storageBucket: "family-pantry-c65d6.firebasestorage.app",
  messagingSenderId: "710701847077",
  appId: "1:710701847077:web:407a8937330ad2ebcfe5cc",
};

// Initialize the Firebase app singleton — must happen before any other Firebase service is used.
const app = initializeApp(firebaseConfig);

// Get the Auth service instance tied to our app. All sign-in/sign-out calls go through this.
const auth = getAuth(app);

// Expose auth instance on window for console-based migration scripts
window._firebaseAuth = auth;

// ── Providers ───────────────────────────────────────────────────────────────
// Each OAuth provider is instantiated once and reused for every sign-in attempt.

// Google provider — no extra scopes needed; email and profile are included by default.
const googleProvider = new GoogleAuthProvider();

// Apple provider — we must explicitly request the 'email' and 'name' scopes
// because Apple does not include them by default. Without these, Apple Sign-In
// would not return the user's email or display name on first login.
const appleProvider = new OAuthProvider('apple.com');
appleProvider.addScope('email');
appleProvider.addScope('name');

// ── Reactive auth state ─────────────────────────────────────────────────────
// We maintain our own lightweight pub/sub system instead of having every module
// call onAuthStateChanged independently. This keeps Firebase as an implementation
// detail — if we ever switch auth providers, only this file changes.
//
// How it works:
//   1. Other modules call onAuth(callback) to register a listener.
//   2. Whenever the user signs in or out, _notify() pushes the new user to all listeners.
//   3. onAuth returns an unsubscribe function so callers can clean up.

// Holds the most recent Firebase User object, or null if signed out.
let currentUser = null;

// Array of subscriber callbacks — each receives (user | null) on every auth change.
const listeners = [];

// Register a callback that fires whenever auth state changes.
// The callback is also fired immediately with the current state so that late
// subscribers (e.g., a component that mounts after login) get the current user
// without waiting for the next state change.
// Returns an unsubscribe function that removes this listener.
export function onAuth(fn) {
  listeners.push(fn);
  // Immediately fire with current state so callers don't miss it
  fn(currentUser);
  return () => {
    // Find and remove the listener from the array
    const idx = listeners.indexOf(fn);
    if (idx !== -1) listeners.splice(idx, 1);
  };
}

// Internal helper: update the cached user and broadcast to all subscribers.
// Called by the Firebase onAuthStateChanged listener below.
function _notify(user) {
  currentUser = user;
  listeners.forEach(fn => fn(user));
}

// Register the Firebase auth state listener. This fires in three situations:
//   1. On page load, if there is a cached session (user will be non-null).
//   2. On page load with no session (user will be null).
//   3. Whenever the user explicitly signs in or out.
// We normalize the value to null (instead of undefined) for consistency.
onAuthStateChanged(auth, (user) => {
  _notify(user || null);
});

// After a redirect-based sign-in (used as fallback on mobile), Firebase stores
// the result. We call getRedirectResult() on page load to process it.
// If no redirect happened, this resolves with null — that's fine.
// We only catch actual errors (not the user manually cancelling the redirect).
getRedirectResult(auth).catch((err) => {
  if (err.code !== 'auth/redirect-cancelled-by-user') {
    console.error('Redirect sign-in error:', err);
  }
});

// ── Sign-in methods ─────────────────────────────────────────────────────────
// All sign-in functions are async — they resolve with the Firebase User on
// success, or throw on failure. The popup-based methods (Google, Apple) have
// built-in fallback to redirect-based sign-in for environments where popups
// are blocked (common on mobile browsers and some in-app webviews).

// Sign in with Google via a popup window.
// If the browser blocks the popup (mobile Safari, in-app browsers, etc.),
// we fall back to a full-page redirect. After the redirect completes, the
// page reloads and getRedirectResult() (above) picks up the result.
export async function signInGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (err) {
    if (err.code === 'auth/popup-blocked' || err.code === 'auth/popup-closed-by-user') {
      // Redirect-based flow: the browser navigates away, then returns.
      // After the redirect, getRedirectResult() handles the login.
      await signInWithRedirect(auth, googleProvider);
      return null; // Page will reload — this return value is never consumed
    }
    throw err; // Unexpected error (network failure, misconfiguration, etc.)
  }
}

// Sign in with Apple via a popup window.
// Same popup-to-redirect fallback strategy as Google above.
export async function signInApple() {
  try {
    const result = await signInWithPopup(auth, appleProvider);
    return result.user;
  } catch (err) {
    if (err.code === 'auth/popup-blocked' || err.code === 'auth/popup-closed-by-user') {
      await signInWithRedirect(auth, appleProvider);
      return null; // Page will reload after redirect
    }
    throw err;
  }
}

// Sign in with an existing email/password account.
// Throws a Firebase AuthError if the email doesn't exist or the password is wrong.
// Common error codes: 'auth/user-not-found', 'auth/wrong-password'.
export async function signInEmail(email, password) {
  const result = await signInWithEmailAndPassword(auth, email, password);
  return result.user;
}

// Create a brand-new email/password account and optionally set a display name.
// The displayName is stored on the Firebase User profile so it can be shown in
// the UI without a separate database lookup.
// Throws if the email is already in use ('auth/email-already-in-use') or the
// password is too weak ('auth/weak-password').
export async function signUpEmail(email, password, displayName) {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  // updateProfile is a separate call — Firebase does not accept displayName
  // during account creation, so we set it immediately after.
  if (displayName) {
    await updateProfile(result.user, { displayName });
  }
  return result.user;
}

// Sign the current user out. Firebase clears the cached session, and the
// onAuthStateChanged listener (above) will fire with null, which propagates
// through _notify() to all subscribers.
export async function signOut() {
  await firebaseSignOut(auth);
}

// ── Token helper ────────────────────────────────────────────────────────────

// Returns the current user's Firebase ID token (a JWT string).
// This token should be sent in the `Authorization: Bearer <token>` header
// when making requests to backend API routes. The server can then verify it
// using the Firebase Admin SDK to confirm the user's identity.
//
// The token is automatically refreshed by Firebase if it has expired, so
// callers don't need to worry about token expiry.
// Returns null if no user is currently signed in.
export async function getIdToken() {
  if (!auth.currentUser) return null;
  return auth.currentUser.getIdToken();
}

// ── Getters ─────────────────────────────────────────────────────────────────
// Synchronous accessors for the current auth state. Useful for quick checks
// in UI code that doesn't need to subscribe to ongoing changes.

// Returns the current Firebase User object, or null if signed out.
// This is the cached value from our reactive state — not a live Firebase call.
export function getCurrentUser() {
  return currentUser;
}

// Convenience boolean: true if a user is currently signed in, false otherwise.
export function isSignedIn() {
  return currentUser !== null;
}
