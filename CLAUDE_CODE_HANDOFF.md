# Kitchen App — Claude Code Handoff Document
> Give this entire document to Claude Code at the start of every session.

---

## Project Overview

**App name:** Kitchen (PWA)
**Repo:** https://github.com/nqstvgntlmn/pantry-app
**Live URL:** https://pantry-app-zeta-six.vercel.app
**Firebase project:** `family-pantry-c65d6`
**Household ID:** `x5Gz5ydc1UTAkXu0zYuRK5Xmjhm1`
**Developer:** Bora Isguder (byisguder@gmail.com)
**Household members:** Bora Isguder (owner), Bushra Isguder (member)
**Stack:** Vanilla JS PWA, Vercel serverless functions, Firebase Firestore + Storage + Auth
**CLI alias:** Start Claude Code with `kc`

---

## Absolute Rules — NEVER Violate

1. **NEVER modify `api/sync-reminders.js` or `api/completed-items.js`** under any circumstances, unless a change being made directly impacts these files and Bora has explicitly approved it.
2. **ALWAYS add clear, utilitarian comments** to every function and every major code block — this is non-negotiable.
3. **Always double-check with Bora** before making changes that affect both Shopping and Supplies tabs — ask "Should this apply to both tabs?"
4. **Always send `.html` files** when relevant.
5. **Bora pushes to GitHub himself.** Deliver files, never push.
6. **Never break existing features** when adding new ones.
7. **Mobile-first (iPhone).** 44px tap targets, safe area insets, smooth animations.
8. **Design quality matters.** DM Sans font, CSS custom properties, card-based UI, `border-radius: 14px`.
9. **Firestore is the source of truth.** localStorage is only for device-specific settings.
10. **When in doubt, ask before building.** One clarifying question is better than building the wrong thing.

---

## Firestore Data Model

```
households/{hid}                              — household document
  activity/                                   — activity feed entries
  completed_items/                            — DO NOT TOUCH
  customProducts/{normalizedName}             — custom product photos
    fields: imageUrl, imageDismissed, name, updatedAt, updatedBy
  settings/                                   — household settings
  shopping/{itemId}                           — shopping list items
  inventory/{itemId}                          — supplies/pantry items
  recipes/{recipeId}                          — household recipes
  productPreferences/{normalizedName}         — preferred location per product

household_codes/{code}                        — invite code index

public_recipes/{recipeId}                     — community recipes
  ratings/{uid}                               — user ratings
  comments/{commentId}                        — comments with optional photos
  likes/{uid}                                 — likes

users/{uid}                                   — user profiles
  notifications/{notificationId}              — author notifications

reports/{reportId}                            — content reports
```

---

## Firebase Storage Structure

```
households/{hid}/customProducts/{name}.jpg    — custom product photos
recipes/{recipeId}/cover.jpg                  — recipe cover photos
recipes/{recipeId}/steps/{stepNumber}.jpg     — step photos
recipes/{recipeId}/comments/{commentId}/{photoIndex}.jpg — comment photos
```

---

## API Endpoints (Vercel Serverless)

| Route | Purpose |
|---|---|
| `api/text-search.js` | Product text search — 4-database parallel pipeline (see Search Pipeline below) |
| `api/barcode.js` | Barcode/UPC lookup |
| `api/db.js` | Firestore proxy for client operations |
| `api/import-recipe.js` | Claude AI-powered recipe importer (uses `claude-sonnet-4-20250514`) |
| `api/sync-reminders.js` | **DO NOT TOUCH** |
| `api/completed-items.js` | **DO NOT TOUCH** |

### api/text-search.js Details

- **Tier 1 (parallel, 1.5s timeout):** Spoonacular + Kroger + USDA + Open Food Facts
- **Tier 2:** UPC Item DB + Open Beauty Facts + Open Pet Food Facts
- **Short-circuit:** If 3+ results with images found after Tier 1, skip Tier 2
- Custom products checked FIRST via Firebase Admin SDK
- `imageDismissed` flag respected — returns results but with `image: null`

### api/import-recipe.js Details

- Uses `claude-sonnet-4-20250514` to parse any recipe website
- Downloads and stores cover image to Firebase Storage
- Can publish to `public_recipes` if user opts in

---

## Environment Variables (Set in Vercel)

| Variable | Notes |
|---|---|
| `ANTHROPIC_API_KEY` | Claude API |
| `SPOONACULAR_API_KEY` | 150 req/day free tier |
| `KROGER_CLIENT_ID` | Kroger product search |
| `KROGER_CLIENT_SECRET` | Kroger product search |
| `USDA_API_KEY` | USDA FoodData Central |
| `FIREBASE_API_KEY` | Firebase Web API |
| `FIREBASE_CLIENT_EMAIL` | Firebase Admin SDK |
| `FIREBASE_PRIVATE_KEY` | Firebase Admin SDK |
| `FIREBASE_PROJECT_ID` | `family-pantry-c65d6` |

---

## Search Pipeline Details

- **350ms debounce** on frontend
- **In-memory cache:** 5min TTL, 30 query max
- **`scoreSearchResult()`:** exact match 100pts, starts-with 50pts, first-word 40pts, position bonus, short-name bonus, cutoff at 20pts
- **Recipe name filter:** rejects recipe/dish names for ingredient searches unless the query itself contains recipe words
- **Non-food results** (beauty, pet) deprioritized when food results exist but never excluded entirely — app covers all grocery store products
- **`imageDismissed: true`** → search results returned normally, `image: null`

---

## Product Images — DISABLED

Product images in Shopping and Supplies tabs have been **commented out (NOT deleted)** for the following reasons:

1. External database images produced too many false positives
2. Inconsistent images (some with photos, some without) looks worse than no images
3. Unnecessary API costs and Firebase Storage usage

The entire image pipeline code is preserved as comments tagged with:
```
// [IMAGES DISABLED] — see session notes for context
```

**To re-enable:** Uncomment all `[IMAGES DISABLED]` blocks across the codebase.

**NOT affected:** Recipe images, barcode scan images, community recipe photos.

---

## Tabs & Navigation

Bottom navigation (left to right):

| Icon | Tab | Key screens |
|---|---|---|
| 🏠 | HOME | Greeting, Tonight's Dinner, This Week, What to Cook Tonight, Running Low, Recent Activity, Your Supplies |
| 🧺 | SUPPLIES | Sub-tabs: All / Fridge / Freezer / Pantry / Household |
| 📖 | RECIPES | My Recipes + Community tab |
| 🛒 | SHOP | Shopping list with search, voice, barcode |
| 📊 | STATS | Insights and logs |
| ✨ | CLAUDE | AI chat assistant |

---

## Home Tab Features

- Greeting with user name and date
- **Scan + Add + Refresh** buttons in header
- **Tonight's Dinner** card: `[Find recipes]` `[Ask Claude →]` buttons
- **This Week:** 7-day calendar for meal planning
- **What to Cook Tonight?** — collapsible section
  - Finds community recipes matching Supplies inventory
  - 60%+ match threshold
  - Color coded: 🟢 100% = ready to cook, 🟡 80-99% = almost there, 🟠 60-79% = need a few things
- **Running Low** — collapsible, respects `doNotRestock` flag and thresholds
- **Recent Activity** — collapsible, shows last 3 actions
- **Your Supplies** — summary view
- All collapsible sections remember state in localStorage

---

## Supplies Tab Features

- **Sub-tabs:** All | Fridge | Freezer | Pantry | Household
- **Swipe left** to delete (10% threshold to reveal, 70-75% to auto-delete)
- **Swipe right** to add to shopping list
- **Slim circle** on each item: tap to mark done, tap row to open detail
- **Detail sheet:** quantity, unit, location, restock threshold, doNotRestock toggle, Add to Shopping List button
- **Product preferences:** remembers preferred location per product via `productPreferences` collection
- **Units:** Piece, Unit, Pack, Box, Bag, Bottle, Jar, Can, Bunch, Head, Loaf, Dozen, Carton, Tube, Roll, Gallon, Half Gallon, Liter, Pound, Oz, Clove
- **Default restock thresholds by unit:**
  - Threshold 1: Bottle, Jar, Can, Carton, Bunch, Head, Loaf, Dozen, Tube, Roll, Gallon, Half Gallon, Liter
  - Threshold 2: Piece, Unit, Pack, Box, Bag, Pound, Oz, Clove
- **doNotRestock toggle:** item never appears in Running Low
- **Font:** Title Case, uniform size and weight throughout
- **Mouse drag support** for swipe gestures on desktop

---

## Shopping Tab Features

- **Swipe left** to delete (same thresholds as Supplies)
- **Slim circle:** tap to mark bought, tap row for detail sheet
- **Add item sheet:** text search with 350ms debounce, inline dropdown, location picker, Scan barcode, Voice input
- **Add button behavior:**
  - 1 result → Add grabs it automatically
  - Multiple results → Add adds plain text, tap result for enriched
  - No results → Add adds plain text
  - Tap specific result → always adds that enriched result
- **Brand name:** only shown if user searched by brand name or barcode scan
- **By category sort**
- **Build from meal plan:** checks Supplies first
  - Sufficient quantity → skip
  - Partial quantity → add with note "Have X, need Y more"
  - Not found → add normally
- **Mouse drag support** for swipe gestures on desktop

---

## Recipe Tab Features

- **Import from any website** via Claude AI (`api/import-recipe.js`)
- **Read-only view** by default, Edit button to enter edit mode
- **Cover photo:** full width header, tap to upload/change
- **Step photos:** optional per step, tap to expand full screen
- **Scale serving size:** ½x, 1x, 2x, 3x
- **Schedule recipe:** tap day in week view
- **Shop ingredients:** adds recipe ingredients to shopping list
- **Tags:** curated fixed set, grouped by category, no free-form entry
  - If no tags selected, tags section hidden entirely
  - Tag categories: Meal Type, Diet & Lifestyle, Cook Style, Occasion
- **Community tab:** browse/search `public_recipes`
  - Filters: cuisine, tags, cook time, rating, sort order
  - Recipe cards: cover photo, name, author username, avg rating, cook time
- **Ratings:** 1-5 stars, one per user, authors cannot rate own recipes
- **Comments:** 500 char limit, optional photos in 3-column grid, tap to expand full screen, swipe to navigate
- **Report button:** recipe and comment level
- **Author notifications:** comment alerts with unread badge

---

## Barcode Scan

- Works in both Shop and Supplies tabs
- **Shop context:** shows "Add to Shopping List" only
- **Supplies context:** shows "Add to Pantry" primary, "Add to Shopping" secondary
- **Searches:** Open Food Facts, Open Beauty Facts, UPC Item DB
- Brand name always shown for barcode-scanned items

---

## Voice Input

- Stop button commits interim transcript (does not discard)
- `_manualStop` flag prevents discarding speech on stop

---

## Swipe to Delete

- Touch events AND mouse events (desktop drag support)
- **10% left swipe** → red zone with animated trashcan reveals
- **10-70% release** → snaps open, tap trashcan to confirm
- **70-75%+** → auto-deletes with slide-out animation
- Springs back if released before 10%
- Only one row open at a time
- Haptic feedback at snap point (`navigator.vibrate(10)`)
- Applied to: Shopping list items, Supplies items

---

## What to Cook Tonight Engine

- Fetches `public_recipes` from Firestore
- Normalizes ingredient names (lowercase, trim)
- Calculates: `(matching ingredients / total recipe ingredients) * 100`
- Minimum 60% match threshold
- Shows top 5, "Show 5 more" button for more
- Color coded by match percentage

---

## Community Recipe Database

- `public_recipes` collection (Firestore rules already configured)
- User profiles: `displayName` (private) + `username` (public)
- Username chosen on first launch, must be unique
- "Recipe by [username]" attribution on all public recipes
- Report system: stores to `reports/{reportId}` with `status: "pending"`
- Pagination: 20 recipes per page, infinite scroll

---

## Build from Meal Plan

- Checks `households/{hid}/inventory` before adding to shopping
- Shows summary: "X added, Y skipped, Z partial"

---

## Global UI Rules

- All product/item names: **Title Case**, uniform font size and weight
- All bottom sheets/modals: **tap outside to close** (backdrop captures taps)
- Edit box dismisses on tap outside (document-level listener)
- **Dark theme** throughout, gold (`#C9A84C`) accent color
- **DM Sans** font consistent across ALL tabs including Home, Recipes, Claude, Stats
- Card-based UI with `border-radius: 14px`
- Mobile-first (iPhone), 44px tap targets, safe area insets

---

## Decisions Made — DO NOT Reverse Without Asking Bora

1. **Product images disabled** (commented out, not deleted) — external database images caused too many false positives
2. **Edamam removed** from search pipeline — consistently slow (3s+)
3. **Google Custom Search and Bing Image Search removed** — APIs closed/retired
4. **Nutrition data removed** from product detail sheets — unreliable
5. **All category/source tags removed** from product detail sheets
6. **Import/Export buttons removed** — app has surpassed Excel phase
7. **"+ Plan Dinner" button removed** — accessible via This Week calendar
8. **"Expiring Soon" and "Shopping List" widgets removed** from home screen

---

## Known Pending Issues

- Manwich still showing no image — check Vercel logs for `text-search` response when searching "Manwich"
- Recipe import tested on recipetineats.com/beef-stroganoff — worked successfully with Claude AI parser
- Community recipe features (Phase 2 + 3) recently added — needs thorough testing
- "What to Cook Tonight" requires community recipes to exist in `public_recipes` to show results

---

## Session History Summary

This app was built over multiple coding sessions. Major milestones:

- **Session 1:** Core PWA, Firebase setup, Shopping + Pantry basics
- **Session 2:** Search infrastructure (9-database waterfall → 4-database parallel), barcode scanner, voice input
- **Session 3:** UI polish, swipe-to-delete, product enrichment pipeline, image infrastructure (now disabled)
- **Session 4:** Supplies tab rename, sub-tabs, recipe import engine, community recipe database, What to Cook Tonight, tag overhaul, home screen cleanup

---

## How to Start Each Session

```
Hey Claude Code — I'm working on a kitchen management PWA called Kitchen.
Please read CLAUDE_CODE_HANDOFF.md first for full context, then let's [task].

Do NOT modify api/sync-reminders.js or api/completed-items.js unless directly
and unavoidably impacted by this change, and only after confirming with Bora first.
Apply our standing comments rule to all changes: add clear, utilitarian comments
to every function and every major code block — this is non-negotiable.
```
