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
  productPreferences/{normalizedName}         — preferred unit + location per product (shared across Shopping & Supplies)

household_codes/{code}                        — invite code index (code → householdId)

public_recipes/{recipeId}                     — community recipes
  ratings/{uid}                               — user ratings
  comments/{commentId}                        — comments with optional photos
  likes/{uid}                                 — likes

users/{uid}                                   — user profiles
  notifications/{notificationId}              — author notifications

usernames/{username}                          — username uniqueness index (freed on account deletion)

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
| `api/import-recipe.js` | Claude AI-powered recipe importer (uses `claude-sonnet-4-20250514`) — supports bulk import with exponential backoff |
| `api/deals.js` | Flipp API integration for grocery deal searches by zipcode |
| `api/proxy.js` | HTTP proxy for external APIs (origin policy handling) |
| `api/recipe/[id].js` | Dynamic route for public recipe sharing links |
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
- Downloads and stores cover image to Firebase Storage (max 800×600px, ~300KB)
- Structured JSON extraction with 150+ line system prompt constraining output
- Extracts: title, summary, ingredients, steps, tags, prepTime, cookTime, servings, difficulty, yield, storage instructions
- Can publish to `public_recipes` if user opts in
- **Bulk import mode:** accepts multiple URLs, processes sequentially with exponential backoff
- **Error classification:** `rate_limit`, `page_blocked`, `page_not_found`, `fetch_error`, `api_error`, `timeout`
- **Duplicate detection:** checks if recipe URL or title already exists before importing
- **URL validation:** validates URL format before attempting fetch

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

## Text Search in Shopping — DISABLED

Text search enrichment in the Shopping tab has been **commented out (NOT deleted)**.

The frontend integration is disabled in `src/ui/shopping.js` at 3 locations, tagged with:
```
// [SEARCH DISABLED]
```

- The API (`api/text-search.js`) still works — only the frontend calls are commented out
- **Barcode scan is preserved** and fully functional
- Voice input enrichment also commented out at same locations

**To re-enable:** Uncomment all `[SEARCH DISABLED]` blocks in `src/ui/shopping.js`.

---

## Tabs & Navigation

Bottom navigation (left to right):

| Icon | Tab | Key screens |
|---|---|---|
| 🏠 | HOME | Greeting, Tonight's Dinner, This Week, What to Cook Tonight, Running Low, Recent Activity, Your Supplies |
| 🧺 | SUPPLIES | Sub-tabs: All / Fridge / Freezer / Pantry / Household |
| 📖 | RECIPES | My Recipes + Community tab |
| 🛒 | SHOP | Shopping list with barcode scan, voice input |
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
- **Running Low** — collapsible, **defaults to collapsed**, respects `doNotRestock` flag and thresholds
- **Recent Activity** — collapsible, **defaults to collapsed**, shows last 3 actions, Title Case formatting, uses "Supplies" (not "inventory")
- **Your Supplies** — summary view
- All collapsible sections remember state in localStorage (`ks-home-lowstock-collapsed`, `ks-home-activity-collapsed`)

---

## Supplies Tab Features

- **Sub-tabs:** All | Fridge | Freezer | Pantry | Household
- **Swipe left** to delete (10% threshold to reveal, 70-75% to auto-delete)
- **Swipe right** to add to shopping list
- **Slim circle** on each item: tap to mark done, tap row to open detail
- **Detail sheet (merged with former Adjust screen):**
  - Item name (Title Case)
  - Quantity stepper: whole number ±1 buttons + fraction picker dropdown (None, ¼, ⅓, ½, ⅔, ¾)
  - Unit dropdown (shared with Shopping via productPreferences)
  - Storage location selector
  - Expiry date input (truly optional — no default, no auto-fill)
  - Restock threshold ("Restock when below [X]" with whole + fraction picker)
  - Category dropdown
  - Notes textarea
  - `doNotRestock` toggle ("Don't add to Running Low")
  - Delete button, Add to Shopping List button
- **Product preferences:** remembers preferred unit + location per product via `productPreferences` collection
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
- **Detail sheet:** quantity stepper (whole ±1 + fraction picker), unit dropdown, location, notes — **inline quantity edit removed**
- **Add item sheet:** voice input, Scan barcode — **text search disabled** (see Text Search section)
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

## Fraction Picker

Shared component used in both Shopping and Supplies quantity fields.

- **Supported fractions:** None (0), ¼ (0.25), ⅓ (0.333), ½ (0.5), ⅔ (0.666), ¾ (0.75)
- **Storage:** Decimal values in Firestore (e.g., 5.5, 0.25)
- **Display:** Mixed fractions with Unicode glyphs (e.g., "5 ½", "¼")
- **Helper functions** in `src/helpers.js`:
  - `splitQty(decimal)` — splits into {whole, frac}, snaps to nearest supported fraction
  - `combineQty(whole, frac)` — combines back to decimal, enforces 0.25 minimum
  - `formatQty(qty)` — formats decimal to display string with Unicode glyphs
  - `renderFracSelect(idPrefix, selectedFrac)` — returns HTML `<select>` for fraction picking
  - `FRAC_OPTIONS` — exported array of {value, label} for all fraction options

---

## Unit Preference Memory (productPreferences)

Shared system that remembers preferred unit and location per product across both Shopping and Supplies tabs.

- **Storage:** `households/{hid}/productPreferences/{normalizedName}`
- **Fields:** `preferredLocation`, `preferredUnit`, `productName`, `updatedAt`
- **Normalization:** lowercase, trim, spaces → hyphens, max 60 chars
- **Functions** in `src/ui/shopping.js`:
  - `_getPreferredLocation(name)` / `_getPreferredUnit(name)` — read
  - `_savePreferredLocation(name, loc)` / `_savePreferredUnit(name, unit)` — write (merge, don't overwrite other field)
- **Behavior:** Auto-populates unit/location on next interaction with same product

---

## Recipe Tab Features

- **Import from any website** via Claude AI (`api/import-recipe.js`)
- **Bulk import:** paste multiple URLs, processes sequentially with exponential backoff, shows per-URL success/error status, duplicate detection, URL validation
- **Read-only view** by default, Edit button to enter edit mode
- **Cover photo:** full width header, tap to upload/change
- **Step photos:** optional per step, tap to expand full screen
- **Scale serving size:** ½x, 1x, 2x, 3x
- **Schedule recipe:** tap day in week view
- **Shop ingredients:** adds recipe ingredients to shopping list
- **Recipe fields:**
  - Title, summary (2 sentences), ingredients, steps, notes
  - Prep time, cook time, total time (auto-calculated from prep + cook unless manually overridden)
  - Servings, difficulty (Easy / Medium / Hard), yield (e.g., "24 cookies", "2 loaves")
  - Storage instructions (refrigeration, freezing tips, max 200 chars)
  - Cover image URL
- **Tags:** curated fixed set, grouped by category, no free-form entry
  - If no tags selected, tags section hidden entirely
  - **Meal Type (10):** Breakfast, Lunch, Dinner, Snack, Dessert, Drinks, Brunch, Bread & Baking, Sauce & Condiment, Preserve & Pickle
  - **Diet & Lifestyle (20):** Vegetarian, Vegan, Pescatarian, Meat, Gluten-Free, Dairy-Free, Nut-Free, Sugar-Free, Healthy, High Protein, Low Carb, Keto, Heart Healthy, Pregnancy-Safe, Baby & Toddler, Halal, Kosher, Paleo, Egg-Free, Mediterranean
  - **Cook Style (23):** Quick, Kid-Friendly, Date Night, Batch Cook, Freezer Friendly, One Pot, Special Occasion, Budget Friendly, Spicy, Pasta, Salad, Soup & Stew, Grill & BBQ, Slow Cooker, Air Fryer, Meal Prep, World Cuisine, Fermented & Preserved, Stovetop, Wrap & Sandwich, Street Food, Raw & No-Cook, Camping & Outdoors
  - **Occasion (13):** Holiday, Party, Summer, Winter Comfort, Halloween, Thanksgiving, Easter, Valentine's Day, Game Day, Graduation, Brunch Party, Ramadan, Hanukkah
  - **Cuisine (17):** Italian, Mexican, Japanese, Chinese, Indian, Thai, Greek, French, Middle Eastern, Korean, Spanish, Vietnamese, American, African, Latin American, Turkish, Mediterranean Cuisine
  - **Protein (9):** Chicken, Beef, Pork, Fish, Seafood, Eggs, Beans & Legumes, Nuts & Seeds, Cheese
- **"Recipes" naming:** plural form used consistently throughout the app (tab label, page titles, activity entries)

---

## Community Recipe Features

- **Grid layout:** responsive CSS grid (1 col mobile, 2 col at 768px+, 3 col at 1200px+)
- **Card layout:** cover image (160px), title, like/comment badges, cuisine tag, star rating, cook time, up to 3 tag pills, author @username
- **Sorting (5 options):** Newest first, A→Z, Highest rated, Most popular, Cook time
- **Filters:** text search (title/tags/cuisine/author), cuisine dropdown, cook time (any / under 30 / 30-60 / over 60), minimum rating (0-4★+), multi-select tag filter (all tags must match)
- **Pagination:** 20 recipes per page, infinite scroll with IntersectionObserver
- **Publishing:** standalone publish to `public_recipes` — stores `sourceRecipeId`, `authorUid`, `authorName`, `authorUsername`, `householdId`
- **Publish check:** `checkRecipeAlreadyPublished()` matches by title (lowercase), sourceRecipeId, or publicId
- **Unpublishing:** `unpublishRecipe(recipeId)` removes from public_recipes
- **Forking:** `saveRecipeToKitchen(pubRecipe)` copies public recipe to user's household recipes
- **Author editing:** `editComRecipe(id)` opens edit overlay for recipe author only
- **Details view:** full recipe with comments, ratings, like button, share link
- **Ratings:** 1-5 stars, one per user, authors cannot rate own recipes
- **Comments:** 500 char limit, optional photos in 3-column grid, tap to expand full screen, swipe to navigate
- **Report button:** recipe and comment level
- **Author notifications:** comment alerts with unread badge

---

## Community Recipe Management (Settings)

Three management utilities in Settings, each with confirmation dialog:

1. **"Remove duplicate community recipes"** (owner only) — scans for duplicates by title + householdId (falls back to authorUid), keeps oldest, deletes rest
2. **"Remove my community recipes"** (any member) — removes all recipes published under current user's username
3. **"Remove household community recipes"** (owner only) — removes ALL community recipes published by entire household

**Duplicate detection strategy** (3 approaches, tried in order):
1. Match by `publicId` (UUID field on private recipe)
2. Match by `sourceRecipeId` (private recipe's Firestore ID)
3. Fallback: Match by title (lowercase) owned by same household

---

## Account Deletion & Anonymization

- **Guards:** blocks if owner has other members (must transfer ownership first), requires two confirmations, handles `auth/requires-recent-login`
- **Steps:**
  1. Anonymize community recipes: set `authorName: "Deleted User"`, `authorUsername: "deleted_user"` — published recipes remain visible
  2. Remove user from all households (delete entire household if sole owner)
  3. Delete username from `usernames/{username}` index (frees for reuse by others)
  4. Delete notifications subcollection
  5. Delete user profile document
  6. Delete Firebase Auth account
  7. Clear localStorage and reload to sign-in screen

---

## Household System & Member Management

- **Multi-household:** users can belong to multiple households (`users/{uid}.householdIds` array)
- **Household doc fields:** `name`, `ownerUid`, `members` (array of {uid, name, role, joinedAt}), `memberUids` (flat array for Firestore rules), `inviteCode` (6-char uppercase alphanumeric), `createdAt`
- **Active household:** shown in main "Household" section in Settings; other households in "Other Households" section (filtered to exclude active)
- **Switching households:** reloads the page to re-fetch all data
- **Invite code lookup:** `household_codes/{code}` index document maps code → householdId
- **Member management:**
  - View all members in household
  - Remove member (owner only)
  - Transfer ownership to another member
  - Leave household (member)
  - Delete household (owner, sole member only)
- **Ghost household cleanup:** removes user's self-created household when joining a real shared one
- **Household sync fix:** non-owner members now sync correctly; ghost household bug resolved

---

## Swipe Back Navigation

Reusable iOS-style edge swipe-back utility (`src/ui/swipeback.js`) applied to all nested pages.

- **API:** `enableSwipeBack(callback)` / `disableSwipeBack()`
- **Edge zone:** 20px from left edge to start swipe
- **Threshold:** 40% of screen width triggers navigation
- **Animations:** 300ms spring snap-back, 250ms accelerating slide-out
- **Direction lock:** after 8px of movement, locks to horizontal (prevents conflict with vertical scroll)
- **Applied to:** Recipe detail view, Community recipe detail view

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
- Username chosen on first launch, must be unique, freed on account deletion
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
2. **Text search disabled in Shopping** (commented out, not deleted) — barcode scan preserved
3. **Edamam removed** from search pipeline — consistently slow (3s+)
4. **Google Custom Search and Bing Image Search removed** — APIs closed/retired
5. **Nutrition data removed** from product detail sheets — unreliable
6. **All category/source tags removed** from product detail sheets
7. **Import/Export buttons removed** — app has surpassed Excel phase
8. **"+ Plan Dinner" button removed** — accessible via This Week calendar
9. **"Expiring Soon" and "Shopping List" widgets removed** from home screen
10. **Running Low and Recent Activity default to collapsed** on Home tab
11. **Inline quantity edit removed** from Shopping detail sheet — use stepper only
12. **Supplies detail sheet merged with Adjust screen** — single unified sheet

---

## Known Pending Issues

- Recipe import tested on recipetineats.com/beef-stroganoff — worked successfully with Claude AI parser
- Community recipe features recently expanded — needs continued testing with multiple users
- "What to Cook Tonight" requires community recipes to exist in `public_recipes` to show results
- Realtime listeners not fully enabled — using 30-second polling (paused during writes)

---

## Source File Reference

| File | Purpose |
|---|---|
| `index.html` | App shell, all HTML structure |
| `src/main.js` | Entry point, imports all modules, registers `window.*` handlers for inline `onclick` |
| `src/state.js` | Global mutable state object |
| `src/auth.js` | Firebase Auth (Google, Apple, Email) |
| `src/db.js` | Firestore proxy client, all CRUD, household management, account deletion |
| `src/helpers.js` | DOM utilities, date math, fraction picker, Title Case, category/aisle guessing |
| `src/storage.js` | Firebase Storage for recipe images (product images disabled) |
| `src/realtime.js` | Firestore listeners, 30s polling |
| `src/styles.css` | Global stylesheet, CSS custom properties, responsive grid |
| `src/ui/home.js` | Home screen: greeting, meal plan, Running Low, Recent Activity |
| `src/ui/inventory.js` | Supplies tab: CRUD, detail sheet, location/unit preferences |
| `src/ui/recipes.js` | Recipes tab: My Recipes, Community tab, import, publishing, forking, ratings, comments |
| `src/ui/shopping.js` | Shopping list: CRUD, voice input, deals, productPreferences |
| `src/ui/scan.js` | Barcode scanner (Quagga.js), product enrichment |
| `src/ui/mealplan.js` | Meal planning: 7-day grid, schedule, cook log |
| `src/ui/chat.js` | Claude AI chat assistant |
| `src/ui/insights.js` | Analytics: waste tracking, cook trends |
| `src/ui/onboarding.js` | First-time setup: household create/join |
| `src/ui/settings.js` | Settings: household management, member management, account deletion, community recipe utilities |
| `src/ui/swipeback.js` | iOS-style edge swipe-back navigation utility |

---

## Session History Summary

This app was built over multiple coding sessions. Major milestones:

- **Session 1:** Core PWA, Firebase setup, Shopping + Pantry basics
- **Session 2:** Search infrastructure (9-database waterfall → 4-database parallel), barcode scanner, voice input
- **Session 3:** UI polish, swipe-to-delete, product enrichment pipeline, image infrastructure (now disabled)
- **Session 4:** Supplies tab rename, sub-tabs, recipe import engine, community recipe database, What to Cook Tonight, tag overhaul, home screen cleanup
- **Session 5:** Recipe tag system expanded (Cuisine, Protein categories + many new tags), recipe metadata fields (prep/cook/total time, servings, difficulty, yield, storage instructions), bulk recipe importer with exponential backoff + duplicate detection + URL validation, Supplies detail sheet merged with Adjust screen, expiry date made truly optional, Shopping detail sheet quantity stepper added + inline edit removed, text search disabled in Shopping tab, unit preference memory shared across tabs via productPreferences, fraction picker for quantity fields, household sync fixed for non-owner members + ghost household bug resolved, full household member management (view/remove/transfer ownership/leave), community recipes overhauled (grid layout, 5 sort options, multi-filter, standalone publishing, forking, author editing), community recipe duplicate detection and cleanup utility, account deletion with anonymization + username reclamation, "Remove my recipes" and "Remove all our recipes" buttons, Running Low and Recent Activity default to collapsed, Recent Activity Title Case + "Supplies" naming, reusable swipe-back navigation utility, "Recipe" → "Recipes" naming fixed throughout

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
