// ── ONBOARDING FLOW ──────────────────────────────────────────────────────────
// 4-step onboarding experience shown to first-time users after sign-in.
// Steps: Welcome → Setup (household prefs) → Tutorial (spotlight) → First action.
// Saves preferences to Firestore and marks onboarding as complete so it only
// shows once. Skip button is always visible.

import { state, CFG_DEFAULT } from '../state.js';
import { g, showNotif } from '../helpers.js';
import { saveCfg, dbSet, dbGet } from '../db.js';
import { getCurrentUser } from '../auth.js';

// Track the current onboarding step (0-3)
let _step = 0;

/**
 * checkOnboarding — called after app boot to determine if onboarding should show.
 * Reads the user's Firestore profile for `onboardingDone` flag. If false or
 * missing, shows the onboarding overlay.
 */
export async function checkOnboarding() {
  const user = getCurrentUser();
  if (!user) return;

  try {
    const userDoc = await dbGet(`users/${user.uid}`);
    // Skip onboarding if already completed
    if (userDoc?.onboardingDone) return;
    showOnboarding();
  } catch { /* silently skip if we can't check */ }
}

/**
 * showOnboarding — displays the onboarding overlay and renders the first step.
 */
function showOnboarding() {
  const ov = g("ov-onboarding");
  if (!ov) return;
  _step = 0;
  ov.classList.add("active");
  renderStep();
}

/**
 * renderStep — renders the current onboarding step into the overlay body.
 * Each step has its own layout, inputs, and navigation buttons.
 */
function renderStep() {
  const body = g("onboarding-body");
  if (!body) return;

  // Progress dots showing which step the user is on
  const dots = Array.from({ length: 4 }, (_, i) =>
    `<div style="width:8px;height:8px;border-radius:50%;background:${i === _step ? "var(--ac)" : "var(--b2)"};transition:background .2s"></div>`
  ).join("");
  const progress = `<div style="display:flex;gap:6px;justify-content:center;margin-bottom:24px">${dots}</div>`;

  if (_step === 0) {
    // ── Step 1: Welcome ──
    body.innerHTML = `${progress}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:4rem;margin-bottom:16px">🧺</div>
        <div style="font-family:'Fraunces',serif;font-size:2rem;font-weight:300;color:var(--ac);margin-bottom:12px">Welcome to Kitchen!</div>
        <p style="font-size:.92rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 28px">Your smart kitchen assistant that tracks inventory, plans meals, finds deals, and suggests recipes — all powered by AI.</p>
        <button class="btn bp bf" onclick="onboardNext()">Let's get started →</button>
      </div>`;
  } else if (_step === 1) {
    // ── Step 2: Setup preferences ──
    body.innerHTML = `${progress}
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;margin-bottom:6px">Set up your kitchen</div>
      <p style="font-size:.82rem;color:var(--mt);margin-bottom:18px;line-height:1.5">These help Claude give you better recipe suggestions.</p>
      <div class="frow"><label class="flbl">Household name</label><input class="fi" id="ob-name" placeholder="e.g. The Smith Family" value="${state.cfg.name || ""}"/></div>
      <div class="frow"><label class="flbl">Adults</label><input class="fi" id="ob-adults" placeholder="e.g. Bora, Sarah" value="${state.cfg.adults || ""}"/></div>
      <div class="frow"><label class="flbl">Kids</label><input class="fi" id="ob-kids" placeholder="e.g. 1 toddler (age 3)" value="${state.cfg.kids || ""}"/></div>
      <div class="frow"><label class="flbl">Favourite cuisines</label><input class="fi" id="ob-cuisines" placeholder="e.g. Italian, Turkish, Mexican" value="${state.cfg.cuisines || ""}"/></div>
      <div class="frow"><label class="flbl">Weeknight cook time</label>
        <select class="fsel" id="ob-cooktime">
          <option value="20-30 min"${state.cfg.cookTime === "20-30 min" ? " selected" : ""}>20–30 min</option>
          <option value="30-45 min"${state.cfg.cookTime === "30-45 min" ? " selected" : ""}>30–45 min</option>
          <option value="40-60 min"${state.cfg.cookTime === "40-60 min" ? " selected" : ""}>40–60 min</option>
          <option value="60+ min"${state.cfg.cookTime === "60+ min" ? " selected" : ""}>60+ min</option>
        </select>
      </div>
      <div class="frow"><label class="flbl">Dietary restrictions</label>
        <div style="display:flex;flex-direction:column;gap:10px;margin-top:4px">
          <label style="display:flex;align-items:center;gap:10px;font-size:.88rem;cursor:pointer"><input type="checkbox" id="ob-nopork" ${state.cfg.nopork ? "checked" : ""}/> No pork</label>
          <label style="display:flex;align-items:center;gap:10px;font-size:.88rem;cursor:pointer"><input type="checkbox" id="ob-noshellfish" ${state.cfg.noshellfish ? "checked" : ""}/> No shellfish</label>
          <label style="display:flex;align-items:center;gap:10px;font-size:.88rem;cursor:pointer"><input type="checkbox" id="ob-vegetarian" ${state.cfg.vegetarian ? "checked" : ""}/> Vegetarian</label>
          <label style="display:flex;align-items:center;gap:10px;font-size:.88rem;cursor:pointer"><input type="checkbox" id="ob-glutenfree" ${state.cfg.glutenfree ? "checked" : ""}/> Gluten-free</label>
        </div>
      </div>
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:16px">Continue →</button>`;
  } else if (_step === 2) {
    // ── Step 3: Quick tutorial ──
    body.innerHTML = `${progress}
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;margin-bottom:18px">Quick tour</div>
      <div style="display:flex;flex-direction:column;gap:14px">
        <div style="display:flex;gap:14px;align-items:flex-start;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;padding:16px">
          <div style="font-size:1.6rem;flex-shrink:0">📷</div>
          <div><div style="font-weight:600;margin-bottom:4px">Scan & Track</div><div style="font-size:.82rem;color:var(--tx2);line-height:1.5">Scan barcodes to instantly add items to your supplies. Track quantities and expiry dates.</div></div>
        </div>
        <div style="display:flex;gap:14px;align-items:flex-start;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;padding:16px">
          <div style="font-size:1.6rem;flex-shrink:0">🤖</div>
          <div><div style="font-weight:600;margin-bottom:4px">AI Assistant</div><div style="font-size:.82rem;color:var(--tx2);line-height:1.5">Claude knows your full inventory and suggests recipes based on what you have. It can plan your entire week!</div></div>
        </div>
        <div style="display:flex;gap:14px;align-items:flex-start;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;padding:16px">
          <div style="font-size:1.6rem;flex-shrink:0">🛒</div>
          <div><div style="font-weight:600;margin-bottom:4px">Smart Shopping</div><div style="font-size:.82rem;color:var(--tx2);line-height:1.5">Build shopping lists from meal plans, find local deals, and move purchased items straight into your supplies.</div></div>
        </div>
        <div style="display:flex;gap:14px;align-items:flex-start;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;padding:16px">
          <div style="font-size:1.6rem;flex-shrink:0">👨‍👩‍👧</div>
          <div><div style="font-weight:600;margin-bottom:4px">Household Sync</div><div style="font-size:.82rem;color:var(--tx2);line-height:1.5">Share your kitchen with family members. Changes sync instantly across all devices.</div></div>
        </div>
      </div>
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:20px">Almost done →</button>`;
  } else if (_step === 3) {
    // ── Step 4: First action prompt ──
    body.innerHTML = `${progress}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:3rem;margin-bottom:16px">🎉</div>
        <div style="font-family:'Fraunces',serif;font-size:1.6rem;font-weight:300;color:var(--ac);margin-bottom:12px">You're all set!</div>
        <p style="font-size:.88rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 24px">Start by adding your first item to Supplies, or ask Claude for dinner ideas.</p>
        <div style="display:flex;flex-direction:column;gap:10px">
          <button class="btn bp bf" onclick="finishOnboarding();showOv('scan')">📷 Scan your first item</button>
          <button class="btn bs bf" onclick="finishOnboarding();showScreen('chat')">✨ Ask Claude for ideas</button>
          <button class="btn bs bf" onclick="finishOnboarding()">🏠 Go to Home</button>
        </div>
      </div>`;
  }
}

/**
 * onboardNext — advances to the next onboarding step.
 * On step 1→2 transition, saves the preferences the user entered.
 */
export async function onboardNext() {
  // Save preferences when leaving the setup step
  if (_step === 1) {
    const name = g("ob-name")?.value?.trim();
    const adults = g("ob-adults")?.value?.trim();
    const kids = g("ob-kids")?.value?.trim();
    const cuisines = g("ob-cuisines")?.value?.trim();
    const cookTime = g("ob-cooktime")?.value;

    if (name) state.cfg.name = name;
    if (adults) state.cfg.adults = adults;
    if (kids) state.cfg.kids = kids;
    if (cuisines) state.cfg.cuisines = cuisines;
    if (cookTime) state.cfg.cookTime = cookTime;
    state.cfg.nopork = g("ob-nopork")?.checked || false;
    state.cfg.noshellfish = g("ob-noshellfish")?.checked || false;
    state.cfg.vegetarian = g("ob-vegetarian")?.checked || false;
    state.cfg.glutenfree = g("ob-glutenfree")?.checked || false;

    // Persist config to Firestore
    await saveCfg();
  }

  _step++;
  renderStep();
}

/**
 * finishOnboarding — marks onboarding as complete and closes the overlay.
 * Sets `onboardingDone: true` in the user's Firestore profile so it never
 * shows again.
 */
export async function finishOnboarding() {
  const ov = g("ov-onboarding");
  if (ov) ov.classList.remove("active");

  // Mark as complete in user profile
  const user = getCurrentUser();
  if (user) {
    try {
      const userDoc = await dbGet(`users/${user.uid}`);
      if (userDoc) {
        await dbSet(`users/${user.uid}`, { ...userDoc, onboardingDone: true, id: undefined });
      }
    } catch { /* best-effort */ }
  }
}

/**
 * skipOnboarding — skips the onboarding entirely and marks it as done.
 */
export async function skipOnboarding() {
  await finishOnboarding();
  showNotif("You can always adjust settings later ⚙️");
}
