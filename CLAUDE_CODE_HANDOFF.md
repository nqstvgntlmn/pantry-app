# Kitchen App — Claude Code Handoff Document
> Give this entire document to Claude Code at the start of every session.

---

## Who You Are Working With

**User:** Bora (born January 23, 1990)
**Household:** Bora + Bushra (wife), 1 toddler (age 3)
**Dietary:** No pork, no shellfish, Bangladeshi / Turkish / Mediterranean / American cuisine
**Communication style:** Direct, trusting, wants things done properly. Treats Claude as a senior software engineer / co-founder. Does not want to be walked through every detail — just build it right and explain key decisions.

---

## Project Overview

**Kitchen** is a PWA (Progressive Web App) for household kitchen management. It started as a personal app for Bora's family and is now being scaled into a multi-household product that other families can sign up for and use.

### Core Features (all built and working)
- **Inventory** — fridge, freezer, pantry tracking with expiry alerts, barcode scanning, photos
- **Recipes** — save, tag, filter, scale, schedule to meal plan, "what can I make now?" (AI)
- **Shopping List** — swipe-to-delete, multi-select, aisle grouping, deal search (AI), share list
- **Meal Planner** — weekly calendar, drag recipes in, "build shopping list from meal plan"
- **Insights** — cook log, waste log, variety tracking
- **AI Chat** — Claude-powered kitchen assistant with full household context
- **Add to Kitchen** — check off shopping items → moves to inventory with location picker (fridge/freezer/pantry)
- **Notes** — inline notes on shopping items (✏️ icon) and inventory items (in adjust overlay)
- **Deals** — Claude searches for grocery deals based on shopping list
- **Barcode Scanner** — photo-based, uses Quagga + Edamam + Open Food Facts + UPC Item DB
- **Themes** — light/dark mode + color themes
- **Apple Reminders Sync** — personal automation via iOS Shortcut + `/api/sync-reminders` (stays as a power-user hidden feature, not scaled)

---

## Current Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Single `index.html` (~3,200 lines), vanilla JS ES modules, CSS custom properties |
| Backend | Vercel serverless functions (`/api/`) |
| Database | Firestore (via `/api/db.js` proxy) |
| AI | Anthropic Claude API (via `/api/proxy.js`) |
| Auth | **None yet** — household code in localStorage (`ks-h`) |
| Hosting | Vercel |
| Repo | https://github.com/nqstvgntlmn/pantry-app |
| Deployed | https://pantry-app-zeta-six.vercel.app |
| Firebase project | `family-pantry-c65d6` |

---

## Firestore Collections (current structure)

```
households/{hid}/inventory/{id}
households/{hid}/recipes/{id}
households/{hid}/shopping/{id}
households/{hid}/mealplan/{YYYY-MM-DD}
households/{hid}/settings/config
households/{hid}/cooklog/{id}
households/{hid}/wastelog/{id}
```

**Note:** `hid` is currently just the household code string (e.g. "bora-family"). After auth is added, it becomes a proper Firestore document ID under a `households` collection with membership control.

---

## localStorage Keys (device-only, not synced)

| Key | Value |
|---|---|
| `ks-h` | household code |
| `ks-who` | user's first name |
| `ks-hhs` | array of household codes this device has used |
| `ks-theme` | active theme key |
| `ks-mode` | `"light"` or `"dark"` |
| `ks-lastnotif` | last notification timestamp |

---

## API Routes (Vercel `/api/`)

| Route | Purpose |
|---|---|
| `/api/db.js` | Firestore CRUD proxy (list, set, delete ops) |
| `/api/proxy.js` | Anthropic Claude API proxy |
| `/api/sync-reminders.js` | Apple Reminders → shopping list sync (personal, not scaled) |

---

## Firestore Client Helpers

```js
_db(op, path, data)   // base POST to /api/db — checks content-type before .json()
dbList(path)          // returns [] on empty/error (never throws)
dbSet(path, data)     // upsert
dbDelete(path)        // delete
```

**Important:** `poll()` uses `Promise.allSettled` so one failing collection never crashes the sync. `loadFirestoreData()` uses sequential `dbList()` calls with a top-level try/catch.

---

## Key Global State Variables

```js
let hid        // household ID / code
let inv = []   // inventory items
let shop = []  // shopping list items
let recs = []  // recipes
let mp = {}    // meal plan { "YYYY-MM-DD": "Meal Name" }
let cfg = {}   // household config (merged with CFG_DEFAULT)
let cookLog = []
let wasteLog = []
```

---

## Config Defaults

```js
CFG_DEFAULT = {
  name: "The Bora Family",
  adults: "Bora",
  kids: "1 toddler (age 3)",
  nopork: true,
  noshellfish: false,
  vegetarian: false,
  glutenfree: false,
  cuisines: "Bangladeshi, Turkish, Mediterranean, American",
  cookTime: "40-60 min"
}
```

---

## App Entry Point Flow

1. User enters household code + name on login screen
2. `_appStart(code)` is called
3. `loadFirestoreData()` — loads mp, cfg, cookLog, wasteLog
4. `loadCfgUI()` — populates settings screen
5. `initHome()` — renders home screen
6. `poll()` starts — fetches ALL 7 collections every 6 seconds

---

## Screens

| Screen ID | Name | Key functions |
|---|---|---|
| `home` | Home | `renderHome()`, `renderWeek()`, `renderSum()`, `renderExp()`, `renderTonight()` |
| `inv` | Inventory | `renderInv()`, `iH(item)`, `openAdj(id)` |
| `recipes` | Recipes | `renderRecs()`, `openER(id)`, `saveRec()` |
| `shop` | Shopping | `renderShop()`, `sH(item)`, `svShopItem()`, `dlShopItem()` |
| `insights` | Insights | `renderInsights()` |
| `chat` | AI Chat | `kitCtx()` builds context, sends to `/api/proxy` |

---

## Overlays

| Overlay ID | Purpose |
|---|---|
| `ov-atk` | Add to Kitchen (checked shopping items → inventory) |
| `ov-scan` | Barcode scanner |
| `ov-result` | Scan result / add to inventory |
| `ov-madd` | Manual add to inventory |
| `ov-adj` | Adjust inventory item (qty, location, expiry, notes) |
| `ov-rec` | Recipe editor |
| `ov-er` | View/cook a recipe |
| `mealM` | Meal planner day modal |
| `cookedM` | "I cooked this" modal |

---

## Swipe-to-Delete Implementation

- `.swipe-wrap` — outer container, `overflow:hidden`, `border-radius:14px`
- `.swipe-inner` — visible row, slides left via `translateX`
- `.swipe-del` — red delete panel behind row, revealed via `clip-path`
- `_openWrap` — tracks currently open row
- `_snapClose(wrap)` — snaps row back closed
- `swipeDelItem(id, list)` — called from red panel, calls `dlShopItem` or `dli`
- `swipeRowTap(id, list)` — handles both normal tap and multi-select tap

---

## Multi-Select Mode

- `selectMode` — `"shop"` | `"inv"` | `null`
- `selectedIds` — `Set` of selected IDs
- `togShopSelect()` / `togInvSelect()` — enter select mode
- `cancelSelect()` — exit
- `deleteSelected()` — `Promise.all` delete
- `#multi-bar` — fixed bottom bar, slides up when items selected
- `.swipe-wrap.selecting` — class added in select mode, disables swipe

---

## Notes Feature

**Shopping items:** ✏️ icon on each row opens inline textarea (`.sh-note-edit`). Saves on `onblur` via `saveShNote(id)`. Note displays as `📝 note text` under item name.

**Inventory items:** Notes textarea in the `ov-adj` overlay. Saves on `onblur` via `adjNote()`. Note displays under item name in inventory row.

Both store `note` field on the item object in Firestore.

---

## Barcode Lookup Chain

1. **Edamam** (`tryE`) — food database, includes nutrition
2. **Open Food Facts** (`tryO`) — open source product DB
3. **UPC Item DB** (`tryU`) — general products
4. Falls back to manual entry if all fail

---

## AI Integration

`kitCtx()` builds a rich context string including:
- Household config (name, dietary restrictions, cuisines)
- Current inventory (by location)
- Recent cook log
- Current shopping list
- Tonight's meal plan

This context is prepended to every Claude chat message and used for: chat, recipe suggestions, deal search, "what can I make now?", barcode product enrichment.

---

## What Has Been Decided for the Rebuild

### Phase 1 — Refactor (first task)

The single `index.html` must be broken into a proper project structure:

```
pantry-app/
├── index.html              (shell only, ~50 lines)
├── src/
│   ├── main.js             (entry point, _appStart, poll)
│   ├── auth.js             (all Firebase Auth logic — NEW)
│   ├── db.js               (Firestore helpers: _db, dbList, dbSet, dbDelete)
│   ├── state.js            (global state: inv, shop, recs, mp, cfg, etc.)
│   ├── ui/
│   │   ├── home.js         (renderHome, renderWeek, renderSum, renderExp, renderTonight)
│   │   ├── inventory.js    (renderInv, iH, openAdj, svi, dli)
│   │   ├── shopping.js     (renderShop, sH, svShopItem, dlShopItem, openAddToKitchen)
│   │   ├── recipes.js      (renderRecs, openER, saveRec, scaleRec, whatCanIMake)
│   │   ├── insights.js     (renderInsights, cookLog, wasteLog)
│   │   ├── chat.js         (kitCtx, chat UI)
│   │   ├── scan.js         (barcode scanner, lkup, tryE/O/U)
│   │   └── swipe.js        (swipe-to-delete, multi-select)
│   └── styles.css          (all CSS extracted from index.html)
├── api/
│   ├── db.js               (existing Firestore proxy)
│   ├── auth.js             (NEW — Firebase Admin SDK for auth verification)
│   ├── proxy.js            (existing Claude proxy)
│   └── sync-reminders.js   (existing, stays as-is)
├── vercel.json
└── package.json
```

**Build tool: Vite** — proper bundling, ES module imports, hot reload in dev. No framework (stays vanilla JS).

### Phase 2 — Authentication

**Firebase Auth with three providers:**
1. Sign in with Apple (requires Apple Developer account — Bora has one)
2. Sign in with Google
3. Email / Password

**New data model:**

```
users/{uid}
  → name, email, createdAt, householdIds[]

households/{hid}
  → name, ownerUid, members[{uid, name, role}], inviteCode, createdAt
  → /inventory/{id}
  → /recipes/{id}
  → /shopping/{id}
  → /mealplan/{date}
  → /settings/config
  → /cooklog/{id}
  → /wastelog/{id}
```

**User flow:**
1. Open app → sign in / sign up screen
2. First time: "Create your kitchen" → household auto-created → invite code generated
3. Returning user → straight to their kitchen
4. Joining another household → enter invite code (must be logged in first)
5. Multiple households per user supported

**Firestore security rules:** Only authenticated members of a household can read/write its data.

**Migration:** Bora's existing household data (`bora-family` or whatever the current code is) gets migrated to the new structure automatically on first login.

### Phase 3 — Voice Input
Web Speech API mic button on shopping list. "Add milk, eggs, and bread" → items added. No setup required for users.

### Phase 4 — Shareability
Public recipe library. Share recipe between households. Shareable shopping list link.

### Phase 5 — Monetization
Stripe integration. Free tier (basic features) vs Premium tier (AI features: chat, deals, "what can I make", recipe scaling). Usage limits on free tier.

---

## Standing Rules — Read These Every Session

1. **Bora pushes to GitHub himself.** Always deliver the final file(s) for download. Never try to push to GitHub directly.
2. **Every function must have clear comments** explaining what it does and why.
3. **Never break existing features** when adding new ones. Test mentally before delivering.
4. **Mobile-first.** This is primarily used on iPhone. All interactions must feel native iOS — tap targets minimum 44px, safe area insets respected, smooth animations.
5. **Design quality matters.** The app uses `DM Sans` font, CSS custom properties for theming, card-based UI with `border-radius: 14px`. Don't introduce inconsistent UI patterns.
6. **Firestore is the source of truth.** localStorage is only for device-specific settings (theme, household code, user name).
7. **The Reminders Shortcut feature stays as-is** — it's a personal automation that hits `/api/sync-reminders`. Don't modify or remove it.
8. **When in doubt, ask before building.** One clarifying question is better than building the wrong thing.

---

## Environment Variables (Vercel)

These are set in Vercel dashboard — do NOT hardcode:
- `ANTHROPIC_API_KEY`
- `FIREBASE_PROJECT_ID` → `family-pantry-c65d6`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`
- `EDAMAM_APP_ID`
- `EDAMAM_APP_KEY`

For Phase 2, add:
- `FIREBASE_WEB_API_KEY` (for client-side Firebase Auth)

---

## Firebase Console Setup Needed Before Phase 2

Bora needs to do this (takes ~15 min):

**In Firebase Console (console.firebase.google.com → family-pantry-c65d6):**
1. Authentication → Sign-in method → Enable **Email/Password**
2. Authentication → Sign-in method → Enable **Google** (set project support email)
3. Authentication → Sign-in method → Enable **Apple**
   - Get Team ID from developer.apple.com → Account → Membership
   - Create Service ID (e.g. `com.borafamily.kitchen`) at developer.apple.com → Identifiers
   - Enable "Sign in with Apple" on the Service ID
   - Set return URL: `https://family-pantry-c65d6.firebaseapp.com/__/auth/handler`
   - Create a Key with Sign in with Apple enabled → download it (one chance only)
   - Enter Key ID + Team ID + uploaded key in Firebase console

**In Firebase Console → Project Settings → General:**
- Copy the Web App Firebase config object (needed for client-side auth SDK)

---

## Session History Summary

This app was built entirely in Claude.ai Chat over multiple sessions. Key milestones:

- **Session 1-N:** Core app built — inventory, recipes, shopping, meal plan, insights, AI chat
- **Recent sessions:**
  - Added swipe-to-delete (iOS style) on shopping + inventory
  - Added multi-select mode with floating delete bar
  - Added alphabetical sorting on both lists
  - Added "Add to Kitchen" feature (checked shopping items → inventory with location picker)
  - Added notes on shopping items (inline ✏️) and inventory items (adjust overlay)
  - Fixed Firestore sync errors (`_db` content-type check, `dbList` silent fallback, `poll` uses `allSettled`)
  - Fixed CFG_DEFAULT duplicate declaration bug

**Current file:** `index.html` at ~3,200 lines, 73 functions. All features working on production at https://pantry-app-zeta-six.vercel.app

---

## How to Start Each Session

```
Hey Claude Code — I'm working on a kitchen management PWA called Kitchen.
Please read CLAUDE_CODE_HANDOFF.md first for full context, then let's [task].
```

The handoff doc is in the repo root. Always read it before starting work.
