// ── FIREBASE AUTH MODULE ─────────────────────────────────────────────────────
// Initializes Firebase app + Auth with Google, Apple, and Email/Password.
// Exports auth state, sign-in/out helpers, and a token getter for API calls.

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut as firebaseSignOut,
  GoogleAuthProvider,
  OAuthProvider,
} from 'firebase/auth';

// ── Firebase config ─────────────────────────────────────────────────────────
const firebaseConfig = {
  apiKey: "AIzaSyAFURz8fEGSTameAW5YvBKWpr2LXv9Ang0",
  authDomain: "family-pantry-c65d6.firebaseapp.com",
  projectId: "family-pantry-c65d6",
  storageBucket: "family-pantry-c65d6.firebasestorage.app",
  messagingSenderId: "710701847077",
  appId: "1:710701847077:web:407a8937330ad2ebcfe5cc",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ── Providers ───────────────────────────────────────────────────────────────
const googleProvider = new GoogleAuthProvider();
const appleProvider = new OAuthProvider('apple.com');
appleProvider.addScope('email');
appleProvider.addScope('name');

// ── Reactive auth state ─────────────────────────────────────────────────────
// Other modules subscribe via onAuth(callback).
// currentUser is always the latest Firebase User or null.

let currentUser = null;
const listeners = [];

// onAuth(fn) — register a callback fired whenever auth state changes.
// Returns an unsubscribe function. The callback receives (user | null).
export function onAuth(fn) {
  listeners.push(fn);
  // Immediately fire with current state so callers don't miss it
  fn(currentUser);
  return () => {
    const idx = listeners.indexOf(fn);
    if (idx !== -1) listeners.splice(idx, 1);
  };
}

// Internal: notify all listeners
function _notify(user) {
  currentUser = user;
  listeners.forEach(fn => fn(user));
}

// Firebase listener — fires on login, logout, page load with cached session
onAuthStateChanged(auth, (user) => {
  _notify(user || null);
});

// Handle redirect result (for mobile sign-in flows that use redirect)
getRedirectResult(auth).catch((err) => {
  // Silently ignore "no redirect result" — only log real errors
  if (err.code !== 'auth/redirect-cancelled-by-user') {
    console.error('Redirect sign-in error:', err);
  }
});

// ── Sign-in methods ─────────────────────────────────────────────────────────

// signInGoogle() — Google popup (falls back to redirect on mobile if blocked)
export async function signInGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (err) {
    // Popup blocked on some mobile browsers → fall back to redirect
    if (err.code === 'auth/popup-blocked' || err.code === 'auth/popup-closed-by-user') {
      await signInWithRedirect(auth, googleProvider);
      return null; // page will reload after redirect
    }
    throw err;
  }
}

// signInApple() — Apple popup (falls back to redirect on mobile if blocked)
export async function signInApple() {
  try {
    const result = await signInWithPopup(auth, appleProvider);
    return result.user;
  } catch (err) {
    if (err.code === 'auth/popup-blocked' || err.code === 'auth/popup-closed-by-user') {
      await signInWithRedirect(auth, appleProvider);
      return null;
    }
    throw err;
  }
}

// signInEmail(email, password) — sign in with existing email/password account
export async function signInEmail(email, password) {
  const result = await signInWithEmailAndPassword(auth, email, password);
  return result.user;
}

// signUpEmail(email, password, displayName) — create a new email/password account
export async function signUpEmail(email, password, displayName) {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  if (displayName) {
    await updateProfile(result.user, { displayName });
  }
  return result.user;
}

// signOut() — sign out and clear local auth state
export async function signOut() {
  await firebaseSignOut(auth);
}

// ── Token helper ────────────────────────────────────────────────────────────

// getIdToken() — returns the current user's Firebase ID token (JWT).
// Pass this in Authorization header to API routes for server-side verification.
// Returns null if not signed in.
export async function getIdToken() {
  if (!auth.currentUser) return null;
  return auth.currentUser.getIdToken();
}

// ── Getters ─────────────────────────────────────────────────────────────────

// getCurrentUser() — returns the current Firebase User object or null
export function getCurrentUser() {
  return currentUser;
}

// isSignedIn() — quick boolean check
export function isSignedIn() {
  return currentUser !== null;
}
