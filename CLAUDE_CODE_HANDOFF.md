# Kitchen App — Claude Code Handoff Document (Session 6)
> Give this entire document to Claude Code at the start of every session.
> Last updated: March 2026

---

## Project Overview

**App name:** Kitchen (PWA)
**Repo:** https://github.com/nqstvgntlmn/pantry-app
**Live URL:** https://pantry-app-zeta-six.vercel.app
**Firebase project:** `family-pantry-c65d6`
**Household ID:** `x5Gz5ydc1UTAkXu0zYuRK5Xmjhm1`
**Household name:** Isguder Family
**Developer:** Bora Isguder (byisguder@gmail.com)
**Household members:** Bora Isguder (owner, @nqstvgntlmn), Bushra Isguder (member, @queenb)
**Stack:** Vanilla JS PWA, Vercel serverless functions, Firebase Firestore + Storage + Auth
**CLI alias:** Start Claude Code with `kc` (`claude --dangerously-skip-permissions`)
**Local repo path:** `~/pantry-app`
**Test zipcode:** Edison, NJ (08817)

---

## Absolute Rules — NEVER Violate

1. **NEVER modify `api/sync-reminders.js` or `api/completed-items.js`** under any circumstances, unless a change being made directly impacts these files and Bora has explicitly approved it.
2. **ALWAYS add clear, utilitarian comments** to every function and every major code block — this is non-negotiable.
3. **Always double-check with Bora** before making changes that affect both Shopping and Supplies tabs.
4. **Bora pushes to GitHub himself.** Deliver files and make commits, but NEVER include push commands (git push) at the end of responses. Push commands are provided to Bora externally in chat.
5. **Never break existing features** when adding new ones.
6. **Mobile-first (iPhone).** 44px tap targets, safe area insets, smooth animations.
7. **Design quality matters.** DM Sans font, CSS custom properties, card-based UI, `border-radius: 14px`.
8. **Firestore is the source of truth.** localStorage is only for device-specific settings.
9. **When in doubt, ask before building.** One clarifying question is better than building the wrong thing.
10. **Any user correction or manual selection** (title, subtitle, category, unit, location, or any future field) must be saved permanently to `customProducts/{barcode}` or `productPreferences/{normalizedName}` in Firestore. User corrections always take priority over auto-mapping.
11. **NEVER include push commands at the end of responses.** Push commands are always provided to Bora externally in chat — Claude Code must not output them. Only deliver code changes and commits.
12. **Every terminal prompt given to Bora must be in a copyable code block, on separate lines** — no `&&` chaining. Each command goes on its own line so Bora can copy and run them one at a time.
13. **Every Claude Code prompt must end with the standing protection footer:**
```
Do NOT modify api/sync-reminders.js or api/completed-items.js unless directly
and unavoidably impacted by this change, and only after confirming with Bora first.
Apply our standing comments rule to all changes: add clear, utilitarian comments
to every function and every major code block — this is non-negotiable.
```
14. **Git push commands must be on separate lines, not chained with `&&`.** Each git command (add, commit, push) gets its own line in code blocks.
15. **After every change made in a Claude Code session, update this document (`CLAUDE_CODE_HANDOFF.md`) with a detailed explanation of what was changed, why, and how it works.** There is no length limit — be as extensive as needed. Add entries to the relevant sections (e.g., new features go under the appropriate tab section, new API endpoints go under API Endpoints, new rules go under Absolute Rules, etc.). This ensures the handoff document always reflects the current state of the app and serves as a living record of all changes across sessions.
16. **Always commit before starting any task.** If interrupted mid-task, use these commands to recover:
```
git status
```
(See what changed)
```
git diff
```
(See exact line changes)
```
git checkout .
```
(Discard all uncommitted changes and revert to last clean commit)

---

## Firestore Data Model

```
households/{hid}
  activity/                         — activity feed entries
  completed_items/                  — DO NOT TOUCH
  customProducts/{barcode}          — household product overrides
    fields: correctedName, scanTitle, prepCategory, unit, imageUrl,
            imageDismissed, name, updatedAt, updatedBy, isCached,
            cachedAt (for barcode cache)
  settings/                         — household settings
    favouriteStore                  — preferred grocery store
    customPrepCategories[]          — custom Shopping Prep categories
  shopping/{itemId}                 — shopping list items
    fields: name, scanTitle, subtitle, brand, quantity, fraction, unit,
            prepCategory, barcode, note, checked, createdAt
  inventory/{itemId}                — supplies items
    fields: name, scanTitle, subtitle, brand, quantity, fraction, unit,
            location, prepCategory, barcode, restockThreshold,
            doNotRestock, expiryDate, note, customEmoji, createdAt, updatedAt
  recipes/{recipeId}                — household recipes
  productPreferences/{normalizedName} — unit + location + category preference per product
    fields: unit, location, prepCategory, updatedAt
  cache/shopriteCoupons             — cached ShopRite digital coupons (4hr TTL)
    fields: coupons[], clippedIds[], cachedAt

household_codes/{code}              — invite code index
  fields: householdId

public_recipes/{recipeId}           — community recipes
  ratings/{uid}                     — user ratings
  comments/{commentId}              — comments with optional photos
  likes/{uid}                       — likes

users/{uid}                         — user profiles
  fields: name, email, username, householdId, householdIds (legacy),
          onboardingDone, needsHousehold, createdAt
  notifications/{notificationId}    — author notifications

usernames/{username}                — username uniqueness index

reports/{reportId}                  — content reports
```

---

## Firebase Storage Structure

```
households/{hid}/customProducts/{name}.jpg
recipes/{recipeId}/cover.jpg
recipes/{recipeId}/steps/{stepNumber}.jpg
recipes/{recipeId}/comments/{commentId}/{photoIndex}.jpg
```

---

## API Endpoints (Vercel Serverless)

| Route | Purpose |
|---|---|
| `api/barcode.js` | Barcode/UPC lookup — sequential waterfall |
| `api/db.js` | Firestore proxy + Admin SDK for privileged operations |
| `api/import-recipe.js` | Claude AI recipe importer |
| `api/parse-recipe.js` | Claude AI recipe parser (Parse with AI button) |
| `api/shoprite-coupons.js` | ShopRite digital coupons — list, clip (dual PPC), clipped actions |
| `api/check-jwt-expiry.js` | Daily cron — monitors ShopRite service JWT expiry, emails alert via Resend |
| `api/text-search.js` | Product text search — DISABLED in Shopping and Supplies |
| `api/sync-reminders.js` | **DO NOT TOUCH** |
| `api/completed-items.js` | **DO NOT TOUCH** |

### api/barcode.js — Waterfall Order
1. Check `customProducts/{barcode}` in Firestore FIRST (household overrides + cache)
2. Open Food Facts
3. UPC Item DB
4. Open Beauty Facts
5. Open Pet Food Facts
6. Edamam (last resort)

**Important:** Uses sequential waterfall (NOT parallel) — returns immediately on first success. Fixed `url.parse()` deprecation. Firebase Admin SDK removed from this file (not needed).

### Product Search — DISABLED
Text search API calls are commented out in Shopping and Supplies add sheets with `// [SEARCH DISABLED]` tag. Plain text add still works. Barcode scan still works. To re-enable: uncomment `[SEARCH DISABLED]` blocks.

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
| `SHOPRITE_PPC` | Bora's Price Plus Card number (primary) for ShopRite coupon clipping |
| `SHOPRITE_PPC_BUSHRA` | Bushra's Price Plus Card number (secondary) for dual PPC clipping |
| `RESEND_API_KEY` | Resend email API key for JWT expiry monitoring cron |

---

## Local Development Setup

**Problem solved:** Running `npm run dev` (Vite only on port 5173) doesn't serve the `/api/*` serverless functions. All Firestore calls fail silently, `resolveHousehold` gets null for the user doc, and the app shows the onboarding/join screen instead of the user's actual household.

**Solution:** A lightweight local API server (`dev-server.mjs`) serves the Vercel-style serverless functions on port 3000. Vite's dev server proxy (`vite.config.js`) already forwards `/api/*` requests to `http://localhost:3000`.

### How to run locally

1. Start the API dev server (port 3000):
```
npm run dev:api
```

2. In a second terminal, start Vite (port 5173):
```
npm run dev
```

Or use the combined command (starts both in one terminal):
```
npm run dev:full
```

### What works locally vs. Vercel

| Feature | Local | Vercel |
|---|---|---|
| Google/Apple/Email Auth | ✅ | ✅ |
| Household resolution & CRUD | ✅ | ✅ |
| Recipe import, barcode scan | ✅ (if env vars set) | ✅ |
| Admin-delete (owner deletes member's community recipe) | ❌ (needs `FIREBASE_CLIENT_EMAIL` + `FIREBASE_PRIVATE_KEY`) | ✅ |
| ShopRite coupons | ❌ (needs `SHOPRITE_PPC` env vars) | ✅ |

### Changes made (Session 7 — March 2026)

- **`api/db.js`**: Firebase Admin SDK initialization changed from eager (module-level) to lazy (`_ensureAdminInit()`). Previously, missing `FIREBASE_CLIENT_EMAIL` / `FIREBASE_PRIVATE_KEY` would crash the entire module on import, making ALL API calls fail — even basic CRUD that doesn't need admin access. Now admin SDK is only initialized when an `admin-delete` op is requested. Also added fallback for `FIREBASE_API_KEY` to the public Firebase Web API key so local dev works without env vars.
- **`dev-server.mjs`**: New file — lightweight Node.js HTTP server that dynamically imports and serves Vercel-style serverless functions from `api/*.js`. Handles JSON body parsing and creates Express-compatible `req`/`res` objects.
- **`package.json`**: Added `dev:api` (starts API server) and `dev:full` (starts both Vite + API server) scripts.

---

## Tabs & Navigation

Bottom navigation (left to right):

| Icon | Tab | Key screens |
|---|---|---|
| 🏠 | HOME | Greeting, Universal Add, Tonight's Dinner, This Week calendar, What to Cook Tonight, Running Low, Recent Activity, Your Supplies summary |
| 🧺 | SUPPLIES | Sub-tabs: All / Fridge / Freezer / Pantry / Household + Shopping Prep |
| 📖 | RECIPES | My Recipes + Community tab |
| 🛒 | SHOP | Shopping list + Deals tab |
| 📊 | STATS | Insights and logs |
| ✨ | CLAUDE | AI chat assistant |

---

## Home Tab

- **Three-line hero greeting** — stacked over the hero food background image with scrim overlay:
  - **Line 1 (Greeting):** Curated, timeless greeting from a pool based on 4 time slots (morning 5–11, afternoon 11–17, evening 17–21, late night 21–5) plus day-of-week bonuses (e.g. "Good Sunday morning", "Happy weekend", "Almost the weekend"). Name appended in gold accent (`<span>` with `var(--ac)`). Never repeats back-to-back (tracked via `_lastGreeting`). Never sounds like a farewell, wellness app, or philosophical quote.
  - **Line 2 (Weather):** Format: "☁️ 62° — Overcast". Emoji + temp °F + em dash + condition name. If traveling >20 mi from home zip, appends city: "☀️ 78° — Sunny in Miami". Medium weight, slightly smaller than Line 1. **Hidden entirely if weather fetch fails** — never shows an error. Uses browser Geolocation API + Open-Meteo (free, no key). Falls back to zip code from Settings if geolocation denied. Travel detection via Haversine distance. Reverse geocoding via BigDataCloud. Cached in sessionStorage for 30 minutes.
  - **Line 3 (Date):** "Sunday, March 22" — current date. Lightest weight, smallest size, muted color with 70% opacity.
- **Universal Add button** (replaced separate Scan + Add) — opens sheet with text input, barcode scan, voice input, quantity/fraction/unit toolbar, location picker, "Add to Supplies" / "Add to Shopping List" toggle
- **Tonight's Dinner** card with Find recipes + Ask Claude buttons
- **This Week** — 7-day calendar, week navigation with < > arrows, tap day to plan/view meal
- **What to Cook Tonight** — collapsible, 40%+ match threshold (lowered from 60%), three tiers:
  - 🟢 Ready to cook: 80-100%
  - 🟡 Almost there: 60-79%
  - 🟠 Just a few things needed: 40-59%
  - Missing ingredients shown with "Add to Shopping" button
- **Running Low** — collapsible, **defaults to collapsed**, saves state in localStorage
- **Recent Activity** — collapsible, **defaults to collapsed**, saves state in localStorage, shows who did what (Bora/Bushra), uses "Supplies" not "inventory", Title Case names
  - **Persistent Undo buttons:** Every "removed [item] from Shopping List" or "removed [item] from Supplies" entry has a permanent Undo button on the right side. Unlike the 5-second swipe toast, this Undo stays available until the entry is pushed off the 10-entry list by newer actions. Tapping Undo restores the item with all original data (name, quantity, unit, location, notes, category, barcode) — not just generic defaults.
  - **Activity item snapshots:** When items are removed (via swipe-delete, multi-delete, or direct delete), the full item data is stored as `itemData` on the Firestore activity entry. This enables full-fidelity undo. Legacy entries without `itemData` fall back to `qty: 1, location: "pantry"` defaults.
- **Your Supplies** — summary cards (items in stock, expiring soon, to buy, saved recipes)
- **Last cooked** — shows most recently cooked recipe with "X days ago"

### Meal Plan Flow
- Tap a day → shows meal detail sheet
- If no meal planned: shows "No meal planned" + schedule options
- If meal planned and NOT cooked: shows recipe name + "✓ Mark as Cooked" + "🗑️ Remove from plan" + "📖 View Recipe"
- If meal marked as cooked: shows recipe name + "✓ Cooked" (confirmed state)
- **Mark as Cooked flow:** logs to activity → asks "Did you use all ingredients?" → if yes, deducts from Supplies
- **NEVER auto-mark as cooked** based on date/time — only on explicit user tap
- Morning meal reminders at 9am via browser Notifications API

---

## Supplies Tab

- **Sub-tabs:** All | Fridge | Freezer | Pantry | Household
- **Always flat list view** — shelf/grid view toggle removed (Session 8)
- **Search bar** at the top — searches across ALL items regardless of location filter, matches on name, brand, note, location, and unit
- **Sorted alphabetically** by scanTitle first, then name
- **Swipe left** to delete (5-second undo toast with draining gold line at bottom)
- **Swipe right** to add to Shopping List
- **Tap row** to open detail sheet
- **Select mode:** tap anywhere on row to check (not just bubble), Delete All button with confirmation
- **Detail sheet fields:** Location picker, Quantity (− / number / + with fraction picker and unit dropdown), Expiry Date (truly optional, "No expiry set" / "Set expiry"), Notes, Restock When Below, Don't Add to Running Low toggle, Add to Shopping List button, Remove button
- **Inline title/subtitle editing:** tap ✏️ on title → shows two editable fields (Title + Subtitle) with Save button, auto Title Case, saves to Firestore + customProducts if barcoded
- **Category badge:** shows prepCategory, tappable to change, saves to Firestore
- **Custom emoji override:** tap the emoji icon on a detail sheet → opens the emoji picker popup (same component used for custom category creation) → selected emoji saved as `customEmoji` field on the inventory item in Firestore, persists across sessions and overrides auto-assignment
- **Shopping Prep button** and **Category Review badge** side by side below search bar
- **Auto-categorization review system:** When new items are added without an explicit category, a badge shows "X to review" next to the Shopping Prep button. Tapping opens a review overlay where users can confirm or change the auto-suggested category. Once confirmed, the category is saved permanently as a product preference in Firestore (`productPreferences/{normalizedName}.prepCategory`), so future additions of the same product auto-categorize without asking again.

### Shopping Prep Feature
- Full-screen audit mode for pre-shop preparation
- **Search bar** at the top — searches across ALL categories simultaneously and shows matching results grouped under their category headers
- Category overview grid with item counts and amber indicator for low items
- **"+ Add Category" button** at the bottom of the category grid — opens an inline form with emoji picker and name input
- **Long-press on custom category cards** — shows action menu with Rename, Add Sub-category, Move Up, Move Down, and Delete options
- Category detail view shows all items in that category with:
  - **Read-only stock badge** next to item name showing current Supplies quantity (e.g. "2 lbs") — informational only, not editable from Shopping Prep
  - Amber badge variant for low-stock items
  - **Cart popover** — tapping the 🛒 button opens a floating popover with a qty stepper (defaults to 1) and "Add" button. Tapping outside dismisses without adding.
  - "✓ Added" state after confirming (with quantity shown if > 1)
  - Audit checkbox (physical verification, session-only)
- "Add all low (X)" button at top of each category
- "+ Add new item to Shopping List" — closes Shopping Prep, opens Shopping add sheet
- Summary toast on close: "X items added to Shopping List" (no toast shown when no items added — removed "No changes made" notification)
- **Header styling:** Shopping Prep header and search bar match the Supplies tab exactly — same padding (24px 20px 0), font size (2.4rem), weight (900), and search bar wrapper spacing (8px 16px 0). Uses `.prep-hdr` and `.prep-ttl` CSS classes to override default overlay header styles.
- Categories use stored prepCategory field first, then keyword/OFF mapping fallback
- Custom categories supported with emoji picker and one level of sub-categories

### Shopping Prep Categories
Default: 🥦 Produce, 🥛 Dairy Eggs & Milk, 🥩 Meat & Seafood, 🧁 Bakery & Bread, 🧊 Frozen, 🥫 Canned & Dry Goods, 🍿 Snacks & Beverages, 🧴 Personal Care, 🧹 Cleaning & Household, 🌾 Grains Pasta & Rice, 🏺 Pantry Staples, 🫙 Condiments & Sauces, 🍳 Other

Custom categories stored in `households/{hid}/settings/customPrepCategories[]` with name, emoji, and optional children[] for sub-categories.

---

## Shopping Tab

- **Sorted alphabetically** by scanTitle first, then name
- **List row style:** item name left, quantity + unit stacked vertically on right (faded), no edit pencil on rows
- **Swipe left** to delete (5-second undo toast)
- **Tap row** to open detail sheet
- **Select mode:** tap anywhere on row to check, Delete All button
- **Deals sub-tab:** Email-gated (beta), has two sections: ShopRite Digital Coupons + Weekly Circular Deals (Flipp)
  - **Sticky coupon/deal filter chips:** Both the ShopRite category chips (`#coupon-cats`) and the Flipp store chips (`#deals-store-chips`) use `position: sticky; top: 0` with frosted-glass backdrop blur so they stay accessible while scrolling through deals. The `.sticky-chips` class handles the visual treatment (blur + shadow + semi-transparent background).
- **Build from meal plan** button
- **By category** sort option (uses favourite store aisle order if set)

### Add Item Sheet
- Text input with Title Case auto-correction
- Quantity/fraction/unit toolbar always visible above keyboard
- Barcode scan button → tap to scan, camera activates, stops on detection
- Voice input — multi-item parsing ("milk, bread, and eggs" → confirmation sheet)
- "Already have this?" warning if item exists in Supplies above restock threshold

### Barcode Scanner
- Tap "📷 Scan barcode" → camera activates with gold laser animation
- Scan result shows: scanTitle (large), subtitle (smaller, tap to expand), brand (smallest)
- Stays on add sheet after scan — "✓ Added: [name]" toast, scanner ready for next item
- Unit dropdown (proper dropdown, not text input) + fraction picker on scan result
- "Try again" and "Enter barcode manually" on failed scan
- Tap to focus: tapping camera view triggers autofocus
- **Client-side localStorage cache** (30 days TTL, 200 item max) for instant repeat scans
- `customProducts/{barcode}` checked FIRST — household overrides always win

### ShopRite Digital Coupons (Deals Tab)
- **Backend:** Azure proxy (`shop-rite-web-prod.azurewebsites.net`) — bypasses Cloudflare, proxies Wakefern coupon API
- **Auth:** Service JWT (hardcoded in ShopRite's Angular app) → POST `/getToken/auth/login` → access token (~24hr)
- **Service JWT expiry:** 2026-04-23 (exp: 1776863263). Must be replaced before then. Frontend shows warning banner 7 days before.
- **JWT expiry cron:** `api/check-jwt-expiry.js` — daily Vercel cron that emails Bora via Resend when JWT is within 30 days of expiry
- **Email gate:** Only `byisguder@gmail.com` and `bushra.hoss1989@gmail.com` can access Deals tab
- **Dual PPC clipping:** Env vars `SHOPRITE_PPC` (Bora) and `SHOPRITE_PPC_BUSHRA` (Bushra) — one tap clips to both cards simultaneously. Secondary clip failure is non-fatal.
- **API:** `api/shoprite-coupons.js` — actions: `list`, `clip`, `clipped`
- **Firestore cache:** `households/{hid}/cache/shopriteCoupons` with 4-hour TTL
- **UI:** Coupon cards with image, brand, name, description, value, expiry, and Clip button
- **Category chips:** Horizontal scrollable filter chips built from coupon categories
- **Pagination:** 20 coupons per page, "Show more" button for next page
- **Clip flow:** Tap "Clip" → loading → clips to both PPCs → "✓ Clipped" + toast + cache update
- **Search:** Client-side filtering on loaded coupons (instant) or API search
- **Sections:** JWT expiry banner (if near expiry) → Coupons → "On My List" matching section → Flipp circular deals
- **On My List:** Fuzzy-matches coupons against unchecked shopping list items, shown in a prioritized section above "All Coupons"

### Product Display
- `formatScanResult(product)` in `src/helpers.js` returns `{ title, subtitle, brand }`
- `PRODUCT_TYPE_MAP` maps database category + name keywords to clean titles
- Variant keywords preserved in title: Zero Sugar, Diet, Zero, Light, Lite, Decaf, Organic, etc.
- Subtitle deduplication: removes brand abbreviations, redundant words
- Hide subtitle on list rows — only show in detail sheet
- Hide subtitle entirely if identical to title
- Brand removed from list rows — only on scan preview and detail sheet
- Emoji mapping via `getProductEmoji()` in `src/helpers.js`
- Unit pluralization via `pluralizeUnit(unit, quantity)` — e.g. Pound → Pounds when qty > 1

### Units (alphabetical)
Bag, Bar, Bottle, Box, Bucket, Bunch, Can, Carton, Clove, Container, Dozen, Gallon, Half Gallon, Head, Jar, Liter, Loaf, Oz, Pack, Piece, Pound, Roll, Tube, Unit

---

## Recipe Tab

### My Recipes
- **Floating search FAB:** A compact magnifying glass button at fixed pixel coordinates (`top:103px; right:16px`) — positioned to clear the filter chips row comfortably. **Hidden when within 100px** of the top (inline search/sort/filters are visible there). Appears after scrolling past 100px in the recipe list. Inline search fades out (opacity transition) when FAB appears, fades back in when scrolling to top. Tapping the FAB expands a search panel that slides down from `top:113px` (just below the FAB) with search bar, sort dropdown (A→Z / Newest / Highest rated), and all filter options (difficulty, cook time, serves, protein, tags). Tapping outside the panel or the backdrop collapses it. The FAB is a fixed-position body element (not inline in `.rtabs`) so it doesn't squish filter chips. Hidden on non-recipe tabs via `hideRecSearchFab()`. **Hidden inside individual recipe pages** (view, edit, community detail, community edit, notifications) — `hideRecSearchFab()` is called after every `showOv("erec")`, and `_restoreRecSearchFab()` restores visibility when the overlay closes and the user returns to the list. The scroll listener also defensively checks for the `erec` overlay and refuses to show the FAB while it's active. Highlights in accent color when filters are active.
- Search bar with real-time filter
- Alphabetical sort (A-Z default)
- Filters: Tags, Cuisine, Difficulty, Cook time, Serves, Protein type
- Import single URL or bulk import (Import one / Import many)
- Responsive grid: single column mobile, 2 col tablet, 3 col desktop
- **Delete recipe:** red Delete button in edit mode → if community version exists, offers "Delete local only" or "Delete everywhere"

### Recipe Fields
- Title, description/summary (2 sentences: what it is + what makes it special)
- Ingredients, Instructions
- Prep time, Cook time, Total time (auto-calculates, overridable), Serves
- Difficulty: Easy / Medium / Hard (pill selector)
- Yield (free text: "24 cookies")
- Storage instructions
- Cuisine, Tags
- Household Notes (📝, inline editable, separate from recipe notes)
- "Made this before" history (dates from activity feed)
- **✨ Parse with AI** button in edit mode — restructures ingredients/instructions via Claude

### Recipe Tags (92 tags, 6 categories)
**Meal Type:** 🌅 Breakfast, 🥪 Lunch, 🍽️ Dinner, 🍿 Snack, 🎂 Dessert, 🥤 Drinks, 🥣 Brunch, 🍞 Bread & Baking, 🫙 Sauce & Condiment, 🥫 Preserve & Pickle

**Diet & Lifestyle:** 🌱 Vegetarian, 🌿 Vegan, 🐟 Pescatarian, 🥩 Meat, 🫘 Gluten-Free, 🥛 Dairy-Free, 🥜 Nut-Free, 🍬 Sugar-Free, 🥗 Healthy, 💪 High Protein, 🫀 Low Carb, 🔥 Keto, 🫀 Heart Healthy, 🤰 Pregnancy-Safe, 👶 Baby & Toddler, 🍽️ Halal, ✡️ Kosher, 🌾 Paleo, 🥚 Egg-Free, 🌊 Mediterranean

**Cook Style:** ⚡ Quick, 👨‍👩‍👧 Kid-Friendly, 🌙 Date Night, 📦 Batch Cook, ❄️ Freezer Friendly, 🥘 One Pot, 🎉 Special Occasion, 💰 Budget Friendly, 🌶️ Spicy, 🍝 Pasta, 🥗 Salad, 🍲 Soup & Stew, 🔥 Grill & BBQ, 🫕 Slow Cooker, ⚡ Air Fryer, 🍱 Meal Prep, 🌍 World Cuisine, 🫙 Fermented & Preserved, 🍳 Stovetop, 🫔 Wrap & Sandwich, 🥙 Street Food, 🍣 Raw & No-Cook, 🏕️ Camping & Outdoors

**Occasion:** 🎄 Holiday, 🎊 Party, 🏖️ Summer, ❄️ Winter Comfort, 🎃 Halloween, 🦃 Thanksgiving, 🐣 Easter, 💝 Valentine's Day, 🏈 Game Day, 🎓 Graduation, 🍳 Brunch Party, 🌿 Ramadan, 🕎 Hanukkah

**Cuisine:** 🇮🇹 Italian, 🇲🇽 Mexican, 🇯🇵 Japanese, 🇨🇳 Chinese, 🇮🇳 Indian, 🇹🇭 Thai, 🇬🇷 Greek, 🇫🇷 French, 🇱🇧 Middle Eastern, 🇰🇷 Korean, 🇪🇸 Spanish, 🇻🇳 Vietnamese, 🇺🇸 American, 🌍 African, 🌎 Latin American, 🇹🇷 Turkish, 🫔 Mediterranean

**Protein:** 🐔 Chicken, 🥩 Beef, 🐷 Pork, 🐟 Fish, 🦐 Seafood, 🥚 Eggs, 🫘 Beans & Legumes, 🌰 Nuts & Seeds, 🧀 Cheese

### Community Recipes
- Responsive grid layout (1/2/3 columns)
- Sort: Newest, A-Z, Highest Rated (on ALL platforms)
- Filters: Tags, Cuisine, Difficulty, Cook time, Serves, Protein, Rating
- Collapsible filter panel with active count badge
- Recipe cards: full-bleed cover photo with gradient overlay, name, tags, cook time, rating
- Stars on main recipe view (not edit mode), authors cannot rate own recipes
- ✕ button to clear rating
- "Save to my recipes" hidden for own household recipes
- Publishing creates fully independent copy (no link back to household version)
- Author can edit community version directly (warning banner shown)
- Non-authors fork only ("Save to my recipes")
- Community sync reminder: if local recipe also has community version, prompt to push changes
- Duplicate detection: by title + householdId (uses memberUids fallback for legacy docs)
- Duplicate prevention on publish

### Bulk Recipe Importer
- "Import one" / "Import many" options
- Paste any text — extracts URLs automatically
- Pre-validates: filters video platforms (YouTube, TikTok, etc.), flags paywalled sites
- Sequential import with progress: "Importing 3 of 12… [Recipe Name]"
- Exponential backoff on rate limits (10s → 20s → 40s)
- Duplicate detection before importing
- Summary: imported / skipped (video) / failed with retry buttons
- All bulk imports default to private

### AI Summary Standardization
- Format: 2 sentences max. First: what the dish is. Second: what makes it special.
- AI generates summary for new manually entered recipes automatically
- AI scans edits for significant changes and updates summary if warranted
- "🔄 Regenerate all summaries" utility in Settings

---

## Swipe to Delete (Both Tabs)

- Touch + mouse events (desktop drag support)
- **10% left** → red zone + animated trashcan
- **10-70% release** → snaps open, tap trashcan to confirm
- **70-75%+** → auto-deletes
- Springs back if released before 10%
- Haptic feedback at snap point
- **5-second undo toast** with draining gold line at bottom (JavaScript-driven animation)
- Consecutive deletes: second delete immediately removes item, forfeits first undo, starts fresh countdown
- **Select mode:** tap anywhere on row to toggle selection (CSS pointer-events solution)
- **Delete All:** confirmation dialog with count, deletes regardless of individual selection state

---

## Barcode Scan Pipeline (Full Flow)

1. User taps "📷 Scan barcode"
2. Quagga activates camera with gold laser sweep animation
3. Barcode detected → camera stops, green flash
4. Check localStorage cache (`scan_cache_{barcode}`, 30 days TTL)
5. If cache hit → instant result
6. If cache miss → call `api/barcode.js`
7. `api/barcode.js` checks `customProducts/{barcode}` in Firestore first
8. Then sequential waterfall: Open Food Facts → UPC Item DB → Open Beauty Facts → Open Pet Food Facts → Edamam
9. Result returned → `formatScanResult()` applied
10. Scan result screen: scanTitle (editable with ✏️), subtitle, brand, category badge, quantity/fraction/unit, location picker (Supplies), Add button
11. On add: save to Firestore, save to localStorage cache, save offCategory if available
12. Toast: "✓ Added: [scanTitle]"
13. Sheet stays open, scanner ready for next item

---

## Household System

### Member Management (in Settings)
- View all members with name, username, join date, crown 👑 for owner
- **Owner can:** Remove members, Transfer ownership
- **Members can:** Leave household
- Remove → member loses access immediately, gets needsHousehold: true, lands on onboarding
- Transfer → owner becomes member, selected member becomes owner
- Owner cannot leave without transferring (or deleting household if sole member)
- Leave → clears householdId, sets needsHousehold: true, lands on onboarding

### Household ID Resolution
- On login: reads `householdId` (singular string) OR `householdIds` (legacy array)
- `_normalizeHouseholdIds()` handles both formats
- If `needsHousehold: true` → redirect to onboarding regardless of cached state
- Ghost household prevention: never auto-create household for existing member
- Clears stale `ks-h` localStorage on every login

### Real-time Sync
- Shopping, Supplies, Recipes all sync in real-time via Firestore listeners
- All household members read/write to same `households/{hid}/` path
- Activity feed logs all actions with member attribution

### Account Deletion
- Anonymizes community recipe authorship (authorName → "Deleted User", authorUsername → "deleted_user")
- Frees username in index (allows reclaim if account recreated)
- Removes from all households, deletes user document

---

## Settings

### Preferences
- Vegetarian toggle
- Gluten-free toggle
- Other restrictions (free text)
- Favourite cuisines
- Weeknight cook time
- **Favourite Store** dropdown: ShopRite, Whole Foods, Trader Joe's, Walmart, Target, Costco, Kroger, Safeway, Publix, Aldi, Stop & Shop, Wegmans, Amazon Fresh, Other
  - Organizes Shopping list "By category" by store aisle layout

### Utilities (Owner only, in dedicated Utilities page)
- 📤 Publish all recipes to community
- 🧹 Remove duplicate community recipes
- 🔄 Regenerate all summaries
- 🔍 Scan all recipes for issues
- 🗑️ Remove all my community recipes (all members)
- 🗑️ Remove all our community recipes (owner only)
- 🗑️ Clear scan cache

---

## Navigation & UX

### Swipe Back Navigation
- Reusable `enableSwipeBack(onBack)` utility
- Swipe right from left edge (within ~20px) → navigates back
- Applied to: Community recipe → detail, My Recipes → detail, Recipe detail → Edit, Shopping Prep → Category detail
- To apply to new pages: call `enableSwipeBack(() => goBack())`
- **Back button guard:** `_handleTouchStart` ignores touches on `.bkbtn` elements so the edge zone doesn't steal taps from the back button
- **Inline style cleanup:** `disableSwipeBack()` clears stale `transform`/`transition` inline styles from the overlay to prevent visual glitches on the next open

### Status Bar Tap-to-Scroll-Top
- **Global behavior** — works on every tab in the app
- Invisible touch target covering `env(safe-area-inset-top) + 15px` at the absolute top of the screen (`z-index: 9999`). This ensures the tap zone reaches the very topmost edge including the clock/Dynamic Island area on all iPhone models.
- Single tap smoothly scrolls the active tab's scrollable content to the top
- Mimics native iOS status-bar-tap behavior that doesn't work automatically in PWAs
- Disabled when overlays/modals/bottom sheets are open (so tap doesn't scroll behind them)
- Implementation: IIFE in `main.js` creates a `.status-bar-tap` div, uses `_currentTab()` to find the active screen, then queries for the scrollable child (`.hbody`, `.ibody`, `.rbody`, `.shbody`, `.chmsgs`, or any `overflow-y:auto` child)

### Page Transitions
- Forward: slide in from right, 300ms ease-out
- Back: slide out to right
- Interactive with swipe gesture

### Animations (Premium Visual Upgrade)
- Warm dark palette: background #0D0B08, cards #1C1814, gold #D4A853
- Staggered list entrance (items slide in on load, max 8 animated)
- Checkoff: gold checkmark spring animation → strikethrough → fade → collapse to Done section
- Spring physics on swipe (cubic-bezier for natural feel)
- Micro-animations on buttons (scale 0.97 on press, smooth release)
- Frosted glass bottom sheets
- Skeleton loading states with warm shimmer
- Grain texture overlay (3% opacity)
- Typography: page titles 32px/700, section headers 11px/600 gold uppercase, items 16px/500

---

## Product Helpers (src/helpers.js)

### Key Functions
- `formatScanResult(product)` → `{ title, subtitle, brand }` — smart product name extraction
- `PRODUCT_TYPE_MAP` — keyword → product type mapping (gum → Gum, lotion → Body Lotion, etc.)
- `getProductEmoji(name, category)` — maps product to emoji
- `pluralizeUnit(unit, quantity)` → plural form when quantity > 1
- `isValidIngredient(name)` → filters out preparation methods from ingredient lists
- `parseVoiceMultiItems(transcript)` → splits "milk, bread, and eggs" into array
- `mapOffCategory(offCategory)` → Open Food Facts category → Shopping Prep category
- `defaultThreshold(unit)` → default restock threshold by unit
- `getStoreAisleOrder(store)` → aisle ordering for favourite store

### Title Case
Auto-applied on all text inputs in add item sheets (both Shopping and Supplies).

---

## Decisions Made — DO NOT Reverse Without Asking Bora

1. **Product images disabled** in Shopping and Supplies list rows (commented out, tagged `[IMAGES DISABLED]`) — false positives, inconsistent results
2. **Scan preview images disabled** (commented out, tagged `[SCAN IMAGES DISABLED]`)
3. **Edamam** moved to LAST in barcode waterfall — consistently slow
4. **Text search disabled** in Shopping and Supplies add sheets (tagged `[SEARCH DISABLED]`) — plain text add + barcode scan sufficient
5. **Google Custom Search and Bing** removed — APIs closed/retired
6. **Nutrition data** removed from product detail sheets — unreliable
7. **Database source links** removed from scan preview (Open Food Facts ↗ etc.)
8. **"Add to Shopping List instead"** removed from Supplies scan result — use detail sheet instead
9. **"Enrich existing items"** button removed from Settings
10. **Import/Export buttons** removed — app has surpassed Excel phase
11. **"+ Plan Dinner" button** removed — accessible via This Week calendar
12. **"Expiring Soon" and "Shopping List" widgets** removed from home screen
13. **"No Bangladeshi/Turkish dishes" nudge** removed from Home tab
14. **Share button** removed from Shopping tab header
15. **Running Low and Recent Activity** default to collapsed on Home tab
16. **"No restock" indicator** moved from list row to detail sheet only
17. **Subtitle** hidden on list rows — only shown in detail sheet
18. **Brand** removed from list rows — only on scan preview and detail sheet
19. Product images: **barcode scan preview images also disabled** — keeping consistent

---

## Known Issues / Pending

- **What to Cook Tonight** — was erroring (TypeError on ingredient .toLowerCase()) — fix was applied but needs retesting with supplies in inventory
- **Parse with AI** — was returning 500 error due to Anthropic API credit issue — needs testing after credits are added
- **Undo toast draining line** — JavaScript animation approach applied, needs verification
- **Deals tab** — ShopRite digital coupons fully working via Azure proxy. Flipp API powers the Weekly Circular Deals section (ShopRite, Stop & Shop, Walmart, Aldi, Wegmans etc.). Service JWT expires 2026-04-23 — cron + frontend banner monitor this.
- **Stats tab** — largely untested/unbuilt
- **Meal reminders** — implemented via browser Notifications API, needs testing
- **Ingredient deduction on Mark as Cooked** — implemented, needs testing

---

## Session History

- **Session 1:** Core PWA, Firebase setup, Shopping + Pantry basics
- **Session 2:** Search infrastructure, barcode scanner, voice input
- **Session 3:** UI polish, swipe-to-delete, product enrichment pipeline, image infrastructure (now disabled)
- **Session 4:** Supplies tab rename, sub-tabs, recipe import engine, community recipe database, What to Cook Tonight, tag overhaul, home screen cleanup
- **Session 5:** Major feature additions — household sync fix (ghost household bug), bulk recipe import, Shopping Prep, unit preference memory, fraction picker, community recipe improvements, visual premium upgrade, barcode scanner overhaul, category system, Shopping Prep with custom categories and emoji picker
- **Session 6:** Deals tab investigation (Flipp API planned), ongoing bug fixes
- **Session 7:** ShopRite digital coupons via Azure proxy, email gate for beta users, Firestore cache (4hr TTL), On My List coupon matching, JWT expiry warning banner + daily cron job via Resend, dual PPC clipping (Bora + Bushra)
- **Session 8:** Full UI modernization pass — see detailed changes below
- **Session 9:** Major UX enhancements — sliding tab transitions, floating pill nav, home dashboard (quick chips, notifications, animated counters), shelf view + expiry timeline for Supplies, expanded aisle grouping (16 categories) + deal badges for Shopping
- **Session 10:** Premium visual polish — deep gradient background (blue-neutral undertone), floating pill nav with more breathing room, card depth separation, bold white section headers, clean minimal headers
- **Session 11:** Added `start-dev.command` Finder-clickable dev launcher + `.gitignore`
- **Session 12:** Supply item emoji improvements — overhauled `_EMOJI_MAP` keyword table (100+ keywords across 20+ categories, multi-word specifics first to prevent false matches), added manual emoji override via tappable emoji on detail sheet (reuses category emoji picker component, saves `customEmoji` to Firestore)
- **Session 13:** Major Supplies + Shopping Prep overhaul — 9-item task:
  1. Removed shelf/grid view toggle from Supplies (always flat list now)
  2. Added search bar to Supplies tab (searches across ALL items regardless of location filter)
  3. Auto-categorization review system — new items get auto-suggested categories, badge shows "X to review", review overlay lets Bora confirm/change. Confirmed categories saved permanently to `productPreferences/{normalizedName}.prepCategory` in Firestore
  4. Added "Pantry Staples" (🏺) to default Shopping Prep categories
  5. Added search bar to Shopping Prep (searches across all categories simultaneously)
  6. Quantity picker on Shopping Prep cart button — replaced with floating popover in Session 14
  7. "+ Add Category" button + long-press management menu (Rename, Add Sub-category, Move Up/Down, Delete). One level of sub-categories supported
  8. Fixed bottom padding across ALL tabs — increased to 80px clearance above nav bar + FAB so last items are always fully visible
  9. Added git recovery instructions (Rule #16) to CLAUDE_CODE_HANDOFF.md
- **Session 14:** Shopping Prep item row overhaul:
  1. Removed the −/+ inventory quantity stepper from item rows (was incorrectly modifying Supplies inventory from within Shopping Prep)
  2. Added read-only stock badge next to item name showing current Supplies quantity (informational only). Amber variant for low-stock items.
  3. Replaced inline cart picker with floating popover — tapping 🛒 shows a popover with qty stepper (default 1) and "Add" button. Tapping outside dismisses without adding.
  4. Removed `prepQtyStep` function, `svi` import, `splitQty`/`combineQty` imports, and all qty-save-related session state (`_saveTimers`, `_qtyUpdated`, `_qtyCounted`)
  5. Summary toast now only reports items added (no longer mentions "quantities updated")
- **Session 15:** Two UX features:
  1. **Floating Recipe Search FAB:** A compact magnifying glass button (`.rec-search-fab`) at fixed pixel coordinates `top:53px; right:21px` — moved up 50px and 5px to the left from the previous position (103px/16px). **Hidden by default** — only appears after the user scrolls past 100px in the recipe list (scroll listener on `#rbody`). When the FAB appears, the inline search/sort/filters fade out via opacity transition; when scrolling back within 100px, the inline controls fade back in and the FAB hides. Tapping opens a frosted-glass search panel (`rec-search-panel`) at `top:113px` (just below the FAB) with search bar, sort dropdown, and full filter options. Tapping outside (backdrop) collapses it. FAB highlights in accent color when filters are active. Panel auto-focuses search input. FAB is a body-level fixed element (not inline in `.rtabs`) — prevents squishing filter chips. Hidden on non-recipe tabs via `hideRecSearchFab()`. **Hidden inside individual recipe pages** — `hideRecSearchFab()` called after every `showOv("erec")`, `_restoreRecSearchFab()` restores on overlay close. Scroll listener defensively refuses to show FAB while erec overlay is active. Auto-closes when user scrolls back to top. Exports: `toggleRecSearchPanel`, `openRecSearchPanel`, `closeRecSearchPanel`, `hideRecSearchFab`. **History:** Originally a floating bottom-right FAB (Session 15), moved to inline chip row (Session 17), moved back to floating top-right FAB with scroll-based visibility (Session 18) to fix Community chip squishing. Moved further down to +120px (Session 19) to clear all filter chips. Changed to fixed pixel coordinates (Session 20) to eliminate safe-area-inset dependency. Moved to 128px with 100px scroll threshold (Session 21) for cleaner clearance. Moved up 25px to 103px and hidden inside recipe pages (Session 22) to avoid interfering with back button. Moved up 50px to 53px and 5px left to right:21px (Session 23).
  2. **Tap-to-Scroll-Top:** A transparent fixed `.scroll-top-tap` div spans the full screen width starting at `top:env(safe-area-inset-top)` with `height:44px` and `z-index:9999`. This positions the tap zone at the highest point a PWA can reliably receive taps on iOS (just below the status bar / Dynamic Island). Tapping it smooth-scrolls the active tab's content to the top. Uses a `scrollSelectors` map to find each tab's scrollable container by known CSS selector (`.hbody`, `.ibody`, `.rbody`, `#sh-list-body`, `.chmsgs`). Skips scroll when overlays/modals are open. **History:** Originally used `env(safe-area-inset-top)` + 44px (Session 15), reduced to 20px (Session 17), expanded to `env(safe-area-inset-top) + 15px` (Session 18), fully rewritten to simple 60px fixed div at top:0 (Session 19), repositioned to start at env(safe-area-inset-top) with 44px height (Session 20) for precise iOS tap targeting.

---

## Session 10 — Premium Visual Polish (March 2026)

### Overview
Five visual enhancements inspired by a reference app to make the UI feel more premium and three-dimensional. CSS-only changes in `src/styles.css` — no JS or HTML modified. No business logic affected.

### Changes Made

#### 1. Deep Dark Gradient Background
- **What:** Replaced the flat `#0D0B08` background with a page-level gradient (`--page-grad`) that transitions from near-black at top (`#0C0C12`) to slightly deeper dark (`#060609`) at bottom.
- **Why:** Flat black feels lifeless. The gradient with subtle blue-neutral undertone creates depth and a premium feel without being noticeable.
- **How:** New CSS custom property `--page-grad` applied to `html,body`, `.screen`, `#LS`, and `.ov`. All surface colors (`--bg`, `--sf`, `--card`, `--card2`) shifted from warm brown undertone to neutral-blue undertone for consistency.

#### 2. Floating Pill Nav — More Breathing Room
- **What:** Increased bottom margin from 12px to 20px, side margins from 16px to 20px, height from 56px to 58px, border-radius from 28px to 30px.
- **Why:** The pill was glued too close to the bottom edge. More breathing room underneath makes it feel like a true floating capsule.
- **How:** Updated `#NAV` positioning and the glassmorphism override. Updated `padding-bottom` on all scrollable bodies (`.hbody`, `.shbody`) and FAB position to account for the larger nav offset.

#### 3. Card Depth Separation
- **What:** Card backgrounds (`--card-grad`) are now noticeably lighter than the page background, creating a visible layered depth effect.
- **Why:** Previously, cards blended too much into the background. The subtle darkness difference makes the UI feel three-dimensional.
- **How:** Updated `--card-grad` from warm brown (`#1E1A15→#1A1610`) to neutral-blue (`#1C1C24→#18181F`). Updated `--card-border` and `--card-border-top` for slightly more visible ambient light borders.

#### 4. Header Simplicity
- **What:** Simplified header backgrounds — lighter gradient fades, softer border on Home header (from solid `--b1` to subtle `rgba(255,255,255,0.04)`).
- **Why:** Cleaner headers reduce visual noise, letting the tab title and action buttons speak for themselves.
- **How:** Updated `.hhdr` and `.shdr` gradient backgrounds to use blue-neutral tones.

#### 5. Typography Hierarchy — Bold White Section Headers
- **What:** All section headers (`.hsec-lbl`, `.slbl`, `.shsec`, `.lgt`, `.istat-ttl`, `.ssetttl`) changed from gold (`rgba(212,168,83,.7)`) to white (`var(--tx)`).
- **Why:** White section headers create clear visual hierarchy against the lighter grey body content. Gold is retained only as the left border accent.
- **How:** Updated `color` property on all section header classes. Supporting content inside sections remains `--mt` (lighter grey) for contrast.

### Palette Shift Summary
| Token | Before (warm brown) | After (neutral-blue) |
|-------|--------------------|--------------------|
| `--bg` | `#0D0B08` | `#0A0A0E` |
| `--sf` | `#14110E` | `#111115` |
| `--card` | `#1C1814` | `#1A1A20` |
| `--card2` | `#221E19` | `#212128` |
| `--b1` | `#2A2520` | `#28282F` |
| `--b2` | `#353028` | `#333340` |
| `--tx2` | `#B5A892` | `#A8A0B0` |
| `--mt` | `#8A7F6E` | `#7A7585` |

### Files Changed
- `src/styles.css` — All changes confined to this file

---

## Session 8 — UI Modernization (March 2026)

### Overview
A comprehensive visual polish pass across all tabs. The dark gold identity is fully preserved — this is a refinement, not a redesign. All changes are purely visual/UX — no backend or API changes.

### Changes Made

#### 1. Home Tab Greeting — First Name Only
- **File:** `src/ui/home.js` (`initHome()`, `renderHome()`)
- **What:** "Good evening, Bora Isguder" → "Good evening, Bora". Parses first name by splitting display name on first space via `_firstName()`.
- **Context-Aware Greetings:** `_contextGreeting()` picks a random greeting from `GREETING_POOLS` — 4 curated time slots (morning, afternoon, evening, lateNight) with day-of-week bonuses assembled by `_buildGreetingPool(hour, dayOfWeek)`. Bonuses include "Good [Day] morning/afternoon/evening", "Happy [Day]", "Happy weekend" (Sat/Sun), "Almost the weekend" (Thu/Fri), "Hope your week is off to a great start" (Mon), "Happy Friday evening" (Fri). Never repeats back-to-back (`_lastGreeting` tracker). Never sounds like a farewell, wellness app, or philosophical quote.
- **Weather-Aware Greetings (Enhanced):** `_applyWeatherGreeting()` uses the browser Geolocation API + Open-Meteo (free, no API key) to fetch current weather and blend it naturally into the greeting with actual temperature in °F and weather emoji. Examples: "Gorgeous 68° Sunday afternoon ☀️, Bora", "Cozy rainy 52° morning 🌧️, Bora", "Snowy 28° evening ❄️ — time for something warm, Bora". **Zip code fallback:** If geolocation is denied, converts the zip code from Settings to coordinates via Open-Meteo geocoding API. **Travel detection:** If GPS position is >20 miles from home zip (Haversine formula), includes city name via BigDataCloud reverse geocoding: "Sunny 78° afternoon in Miami ☀️, Bora". Weather result cached in sessionStorage for 30 minutes (`ks-weather-cache`). Falls back gracefully to plain time-based greeting on any failure. Key helpers: `_fetchWeather()`, `_geocodeZip(zip)`, `_haversineDistance()`, `_weatherLabel(code)`, `_weatherEmoji(label)`, `_tempDescriptor(tempF)`, `_getDayOfWeek()`, `_buildWeatherGreeting(hour, weather)`. WMO weather codes mapped to: clear, cloudy, foggy, drizzly, rainy, snowy, stormy.

#### 2. Bento-Style Home Stat Grid
- **File:** `src/ui/home.js` (`renderSum()`)
- **What:** 4-tile stat grid now uses gradient-accented bento tiles with unique colors per stat (gold=inventory, amber=expiring, green=shopping, purple=recipes). Each tile has a `card-enter` animation for fade+slide-up on load.
- **Savings Tracker:** Optional hero tile spans full width showing "You've saved $X this week" from clipped coupons. Savings tracked via `ks-clipped-savings` in localStorage, accumulated by `clipCoupon()` in `shopping.js`.
- **Suggested Recipes:** Optional tile shows up to 3 recipes that use ingredients expiring soon. Scored by match count. Tapping opens the recipe view.
- **CSS classes:** `.bento-inventory`, `.bento-expiring`, `.bento-shopping`, `.bento-recipes`, `.bento-hero`, `.bento-suggest`

#### 3. Glassmorphism Effect
- **File:** `src/styles.css`
- **Where:** Coupon cards, deal cards, bottom sheets, modals, bottom nav, undo toast
- **How:** `backdrop-filter:blur(16-24px)` with translucent backgrounds (`rgba`) and subtle border glow. Creates a frosted glass layered look on the dark background.

#### 4. Card Hover/Focus Glow
- **File:** `src/styles.css`
- **What:** All interactive cards (`.sc`, `.today-card`, `.iit`, `.shit`, `.rcd`, `.istat`) get a subtle gold border glow on hover/focus. Focus-visible gets a 2px gold outline for accessibility.

#### 5. More Rounded Corners
- **File:** `src/styles.css`
- **What:** Cards bumped from 14-18px to 18-22px radius. Bottom sheets 24px, modals 28px. Softer, more modern feel.

#### 6. Category Chip Accent Colors
- **File:** `src/styles.css`
- **What:** Coupon category chips (`.coupon-chip`) get unique accent colors via `data-cat` attribute: dairy=blue, produce=green, meat=red, frozen=light blue, snacks=orange, bakery=brown, beverages=purple, etc.
- **Note:** Requires coupon rendering to add `data-cat="categoryName"` attribute to chips.

#### 7. Inventory Tab Chip Colors
- **File:** `src/styles.css`
- **What:** Fridge=blue, Freezer=light blue, Pantry=warm brown, Household=grey accent colors on active inventory tab chips.

#### 8. Recipe Tab Chip Colors
- **File:** `src/styles.css`
- **What:** Favorites=red, Top Rated=gold, Quick=green, Kids=pink, Community=blue accent colors on active recipe tab chips.

#### 9. Section Header Typography
- **File:** `src/styles.css`
- **What:** Section headers (`.hsec-lbl`, `.slbl`, `.shsec`) are bolder (700 weight), slightly larger, with thicker 3px gold left border. Screen titles (`.sttl`) bumped to 2.2rem/800 weight.

#### 10. Whitespace / Breathing Room
- **File:** `src/styles.css`
- **What:** More generous padding on `.hbody`, `.ibody`, `.shbody`, `.rbody` (20px). Cards get more padding (18-24px). Item spacing increased.

#### 11. Micro-Animations
- **File:** `src/styles.css`
- **`card-enter`** animation: cards fade+slide up (16px) on load, 350ms duration.
- **`screenFadeIn`**: tabs cross-fade on switch (250ms).
- **Button press effects:** Primary buttons get gold shadow pulse on press. Secondary buttons get subtle shadow.
- **Nav press:** Nav items scale down on tap for tactile feel.

#### 12. Loading Skeleton Enhancements
- **File:** `src/styles.css`
- **What:** Added `.skeleton-card`, `.skeleton-text`, `.skeleton-circle` classes for richer loading states.

#### 13. Coupon Clip Animation
- **File:** `src/ui/shopping.js` (`clipCoupon()`), `src/styles.css`
- **What:** When clipping a coupon, the button plays a satisfying bounce animation (`clipSuccess` keyframes) with spring physics. `.clip-animating` class added/removed. Button shows "✓ Clipped" after animation.

#### 14. Coupon Savings Tracking
- **File:** `src/ui/shopping.js` (`clipCoupon()`)
- **What:** On successful clip, parses the coupon's dollar value and adds it to `ks-clipped-savings` in localStorage. Used by the home screen savings hero tile.

#### 15. Recipe Badges (Difficulty & Time)
- **File:** `src/ui/recipes.js` (`rH()`)
- **What:** Recipe cards now show color-coded difficulty badges (green=easy, gold=medium, red=hard) and blue time badges. These appear in the metadata row below the star rating.
- **CSS classes:** `.recipe-badge`, `.recipe-badge-easy`, `.recipe-badge-medium`, `.recipe-badge-hard`, `.recipe-badge-time`

#### 16. Low Stock Indicator
- **File:** `src/ui/inventory.js` (`iH()`)
- **What:** Inventory items at or below their restock threshold show a pulsing amber dot next to the quantity and get a gold left-border highlight (`.low-stock` class on `.iit`). Respects `doNotRestock` flag.
- **CSS:** `.low-stock-dot` (pulsing amber dot), `.iit.low-stock` (amber left border)

#### 17. Empty State Illustrations
- **Files:** `src/ui/inventory.js`, `src/ui/shopping.js`, `src/ui/recipes.js`
- **What:** All empty states now use contextual food emojis (🍳, 🥑, 🍝, etc.) with action hints in gold that tell the user what to do next. Recipe empty states are per-tab-filter (❤️ for favorites, ⭐ for top rated, etc.).

#### 18. Context-Aware Floating Action Button (FAB)
- **File:** `index.html`, `src/main.js`, `src/styles.css`
- **What:** Gold circular FAB positioned above bottom nav. Shows "＋" and triggers the relevant add action per tab: Home→universal add, Supplies→add supply, Recipes→add recipe, Shop→add to list. Hidden on Stats and Chat tabs.
- **Config:** `FAB_CONFIG` object in `main.js` maps tab→{icon, action, label}.
- **CSS:** `.fab` class with shadow, scale animation on press, `.fab.hidden` for smooth hide.

#### 19. Swipe-Between-Tabs Gesture
- **File:** `src/main.js` (`_initTabSwipe()`)
- **What:** Horizontal swipe on the main app area navigates between adjacent tabs. Uses 50px threshold and 30° max angle to prevent false triggers during vertical scrolling. Doesn't intercept swipes inside bottom sheets, overlays, or chat.
- **Tab order:** home → inventory → recipes → shopping → insights → chat

#### 20. Bottom Nav Refinements
- **File:** `src/styles.css`
- **What:** Active indicator line is thicker (2.5px). Active label is bold (700). Frosted glass background via glassmorphism.

#### 21. Deal Card Enhancements
- **File:** `src/styles.css`
- **What:** "On My List" deal matches get green glassmorphism glow. All deal cards use glassmorphism background.

---

## Session 9 — Major UX Enhancements: Navigation, Dashboard, Shelf View, Aisle Grouping (March 2026)

### Overview
Transforms the app from a utility-first tool into an iOS-native-feeling experience with sliding tab transitions, a floating pill nav bar, a smart home dashboard, visual shelf layouts for inventory, and intelligent deal highlighting in shopping.

### Phase 1: Navigation — Sliding Tab Transitions + Floating Nav

#### Screen Transition System
- **Files:** `src/styles.css`, `src/main.js`
- **What:** Replaced `display:none/flex` screen toggling with CSS `transform:translateX()` positioning. All screens are always rendered but positioned off-screen. Transitioning uses `transform 300ms cubic-bezier(0.4, 0, 0.2, 1)`.
- **Direction detection:** `showScreen()` compares `TAB_ORDER` indices — higher index = slide left (incoming from right), lower = slide right (incoming from left). Outgoing screen gets `.slide-left` class (`translateX(-33%)` for parallax effect) or loses `.active`.
- **Mid-transition safety:** `_transitioning` flag + `_snapAllScreens()` force-resets all screens to resting positions if user taps another tab mid-animation.
- **CSS classes:** `.screen` (default off-screen right), `.screen.active` (visible center), `.screen.slide-left` (off-screen left), `.screen.no-transition` (used to skip transition during position reset)
- **Old animations removed:** `@keyframes screenEnter` and `@keyframes screenFadeIn` replaced with transform-based transitions.

#### Floating Bottom Nav Pill
- **File:** `src/styles.css`
- **What:** `#NAV` changed from full-width bottom bar to a floating pill: `border-radius:28px`, positioned `bottom:calc(var(--safe) + 12px)` with `left:16px; right:16px`. Semi-transparent dark glass (`rgba(20,17,14,0.72)` + `backdrop-filter:blur(24px)`).
- **Active indicator:** Small gold dot below label (`.ni::after`) instead of top gradient line.
- **FAB repositioned:** Now sits above the floating pill (`bottom:calc(var(--safe) + 56px + 12px + 16px)`).
- **Content padding:** All screen bodies (`.hbody`, `.ibody`, etc.) have `padding-bottom:calc(56px + var(--safe) + 40px)` so content scrolls under the nav.

### Phase 2: Home — Live Dashboard

#### Quick-Access Chips
- **Files:** `src/ui/home.js` (`renderQuickChips()`), `index.html`
- **What:** Horizontal scrollable row of shortcut buttons below the greeting. Chips: "📷 Scan barcode", "＋ Quick add", "🛒 Shopping list", "📦 What's expiring". Each calls an existing window function.
- **Container:** `<div id="quick-chips" class="chip-row">` in `.hbody`
- **Renders once:** Uses `el.dataset.rendered` flag since chips are static.

#### Smart Notifications Strip
- **Files:** `src/ui/home.js` (`renderNotifications()`), `index.html`
- **What:** Horizontal scrollable strip of contextual alert pills. Sources: expired items (red), expiring soon (amber), low stock (amber), shopping list count (blue), coupon matches (gold).
- **Container:** `<div id="notif-strip" class="notif-strip">` in `.hbody`
- **Coupon count:** Imports `getShoppingListCouponMatchCount()` from `shopping.js` — naturally returns 0 for non-whitelisted users.
- **CSS classes:** `.notif-pill`, `.notif-danger`, `.notif-warn`, `.notif-deal`, `.notif-info`

#### Animated Stat Counters
- **File:** `src/ui/home.js` (`renderSum()`, `_animateCounter()`)
- **What:** On tab navigation to Home, stat counters animate from 0 to target over 600ms with ease-out cubic easing.
- **Flag:** `window._shouldAnimateCounters` set by `showScreen("home")` in `main.js`, consumed once by `renderSum()`. Background re-renders don't trigger animation.

### Phase 3: Supplies — Shelf View + Expiry Timeline

#### Grid View (REMOVED in Session 13)
- **Status:** Removed. Supplies always shows flat list view now.
- **What was removed:** `_renderInvShelf()`, `toggleInvViewMode()` (now no-op), `_invViewMode` state, `#inv-view-toggle` button from HTML.
- **Note:** `gcat()` and `CATS` still exist in `helpers.js` — used for setting item categories on save and by Shopping Prep.

#### Expiry Timeline
- **File:** `src/ui/inventory.js` (`_renderExpiryTimeline()`)
- **What:** Horizontal scrollable strip between inventory tabs and item list. Shows items with expiry dates sorted soonest-first. Color-coded dots: red (expired), amber (expiring), green (OK) via `xSt()`.
- **Container:** `<div id="expiryTimeline" class="expiry-timeline">` in `index.html`
- **Hidden when:** No items have expiry dates.
- **CSS classes:** `.expiry-timeline`, `.exp-tl-item`, `.exp-tl-dot`, `.exp-tl-red`, `.exp-tl-amber`, `.exp-tl-green`

### Phase 4: Shopping — Enhanced Aisle Grouping + Deal Highlighting

#### Expanded Aisle Categories
- **File:** `src/helpers.js` (`AISLES`, `AISLE_ICONS`)
- **What:** Expanded from 6 categories to 16: Produce, Meat & Fish, Bakery, Deli, Dairy & Eggs, Frozen, Canned Goods, Condiments & Sauces, Baking, Pantry, Snacks & Drinks, Paper & Cleaning, Baby, Pet, Health & Beauty, Other.
- **Moved items:** Bread → Bakery, flour/sugar → Baking, beans/lentils/stock → Canned Goods, bacon → Meat & Fish (removed from Pantry).
- **New export:** `AISLE_ICONS` — emoji per category for rich dividers.
- **Store aisle orders updated:** All 13 stores in `_STORE_AISLE_ORDER` now include the new categories in store-specific walk-through order.

#### Rich Aisle Dividers
- **File:** `src/ui/shopping.js` (`renderShop()`)
- **What:** Plain `<div class="shsec">` section headers replaced with rich `.aisle-divider` components showing icon + name + item count badge.
- **CSS classes:** `.aisle-divider`, `.aisle-icon`, `.aisle-name`, `.aisle-count`

#### Deal Highlighting Badges
- **File:** `src/ui/shopping.js` (`_computeDealMatchIds()`, `sH()`)
- **What:** Shopping list items with matching coupons or deals show a gold "💰 Deal" badge. Pre-computed at start of `renderShop()` into `_dealMatchIds` Set for O(1) per-item lookup.
- **Performance:** Single pass through all coupons + deals per render, not per-item.
- **Email gate:** Naturally respected — `_allCoupons` and `_allDeals` are empty for non-whitelisted users so badge never appears.
- **Interaction:** Tapping badge jumps to Deals tab (`setSHT('deals')`).
- **CSS class:** `.deal-badge`

#### Coupon Match Count Export
- **File:** `src/ui/shopping.js` (`getShoppingListCouponMatchCount()`)
- **What:** New export that returns the count of coupons matching active shopping list items. Used by home screen notification strip.

### Architecture Notes
- **Window registrations added in `main.js`:** `toggleInvViewMode`
- **Import additions:** `AISLE_ICONS` in shopping.js, `getShoppingListCouponMatchCount` in home.js
- **No API changes.** All enhancements are client-side UI/UX.
- **No changes to `api/sync-reminders.js` or `api/completed-items.js`.**

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

---

## Apple Reminders Integration

- Shortcut posts to `/api/sync-reminders` with `x-api-key: kitchen-sync-2026`
- **DO NOT TOUCH** `api/sync-reminders.js` or `api/completed-items.js`

---

## Design Enhancements — Session 7 (March 2026)

### Three Visual Upgrades Applied

#### 1. Risoprint Accents (Recipes Tab Only)
- **Scope:** Only `#screen-recipes` — no other tab is affected
- **What:** Subtle grainy noise texture overlay (CSS SVG filter at 4.5% opacity), earthy warm gradients on recipe cards, muted terracotta star ratings, warm color bleeds via `mix-blend-mode:screen` radial gradients, and paper-like card backgrounds
- **Aesthetic:** Indie food magazine / artisanal zine — handmade, not digital-clean
- **Files changed:** `src/styles.css` (new "RISOPRINT ACCENTS" block at bottom)

#### 2. Refined Brutalism Typography (App-Wide)
- **Scope:** Global — affects all section headers, stat numbers, screen titles, and grid lines
- **What:**
  - Oversized display numbers on stat cards (`.scv` bumped to `2.8rem`, `font-weight:400`)
  - Bolder section headers (`.hsec-lbl`, `.slbl`, `.shsec` at `font-weight:800` with 4px gold left border)
  - Screen titles at `2.4rem` / `font-weight:900`
  - Strong 2px horizontal grid lines (`border-top`) above section headers
  - Generous deliberate spacing throughout (more `margin`, `padding`, `gap`)
- **Aesthetic:** Bold food magazine editorial — confident typography, not ugliness
- **Files changed:** `src/styles.css` (new "REFINED BRUTALISM TYPOGRAPHY" block at bottom)

#### 3. Immersive Background Imagery with Scrim Overlays
- **Scope:** Recipe cards (with images), home tab hero, ShopRite coupon cards (with images)
- **What:**
  - **Recipe cards:** When a recipe has `imageUrl`, the image fills edge-to-edge with a dark gradient scrim. Card gets `rcd-has-image` class; content wrapped in `rcd-content` div. Cards without images render normally.
  - **Home hero:** `.hhdr` gets `hero-bg` class with time-of-day Unsplash food images (morning/afternoon/evening/night). Dark scrim overlay keeps greeting text readable.
  - **ShopRite coupons:** When coupon has `image`, card gets `coupon-has-image` class. Image fills background with scrim. Broken images gracefully fall back via `onerror`.
  - **NOT applied to:** Supplies, Flipp deals, or empty states
- **Revert instructions:** All image/scrim CSS is in a single clearly-marked block at the TOP of `styles.css` with the comment "IMAGERY FEATURE — remove this entire block to disable all background imagery"
- **Files changed:** `src/styles.css` (imagery block at top), `src/ui/recipes.js` (rH function), `src/ui/shopping.js` (buildCouponCard function), `src/ui/home.js` (hero background logic)

### Unsplash Hero Images (Baked In)
| Period | Hours | Image |
|--------|-------|-------|
| Morning | 5–11 | Breakfast spread (photo-1533089860892) |
| Afternoon | 12–16 | Lunch salad bowls (photo-1547592180) |
| Evening | 17–20 | Dinner cooking (photo-1551218808) |
| Night | 21–4 | Cozy kitchen (photo-1495195134817) |

### How to Revert Each Feature
- **Risoprint:** Delete the "RISOPRINT ACCENTS" CSS block (search for the header comment)
- **Brutalism typography:** Delete the "REFINED BRUTALISM TYPOGRAPHY" CSS block
- **Imagery:** Delete the "IMAGERY FEATURE" CSS block at top of styles.css + revert the JS changes in recipes.js, shopping.js, and home.js

---

### Home Tab Loading Skeleton (Race Condition Fix)

**Problem:** On initial app load, the Home tab rendered blank because `showScreen("home")` was called at line 949 of `_appStart()` — before any Firestore data (inventory, recipes, shopping list) was loaded. All sections (stat cards, expiring items, low stock, activity feed) rendered with empty arrays and conditionally hid themselves, producing a blank screen. The user only saw content after switching tabs and back, since by then the data had arrived.

**Root cause:** In `_appStart()`, the initialization order was:
1. `showScreen("home")` → calls `renderHome()` with empty `state.inv/recs/shop` → blank
2. `loadFirestoreData()` → loads config, meal plan (but not inv/recs/shop)
3. `Promise.allSettled(...)` → loads inv/recs/shop → calls `renderAll()` with real data

**Fix:**
1. Added `state.homeDataReady` flag (default `false`) in `src/state.js` — gates whether `renderHome()` does real rendering or shows the skeleton
2. Added a shimmer loading skeleton in `index.html` inside `#screen-home > .hbody` — visible by default, shows placeholder cards matching the layout of stat grid + tonight's dinner + week grid
3. Modified `renderHome()` in `src/ui/home.js` — if `!state.homeDataReady`, keeps the skeleton visible and returns early (no empty renders). Once data is ready, fades out the skeleton with a 300ms opacity transition, then `display:none` after 320ms
4. In `_appStart()` (`src/main.js`), set `state.homeDataReady = true` after `Promise.allSettled` resolves (or in the catch block for error resilience), then `renderAll()` triggers the first real render
5. Added `.home-skeleton` CSS in `src/styles.css` with fade-out transition

**Animated stat counters are safe:** `showScreen("home")` sets `window._shouldAnimateCounters = true` at line 208, but since `renderHome()` returns early (data not ready), the flag isn't consumed. When data arrives and `renderAll()` → `renderHome()` → `renderSum()` runs, the flag is still `true` and counters animate from 0 with real values.

**Files changed:**
- `src/state.js` — added `homeDataReady: false` to ephemeral state
- `index.html` — added `#home-skeleton` div with shimmer placeholder cards inside `.hbody`
- `src/ui/home.js` — `renderHome()` guards on `state.homeDataReady`, shows/hides skeleton
- `src/main.js` — sets `state.homeDataReady = true` after data loads in `_appStart()`
- `src/styles.css` — `.home-skeleton` and `.home-skeleton.hidden` transition styles

### Home Tab Blank Screen — Tab Transition System Bug (Second Fix)

**Problem:** Despite the loading skeleton fix above, the Home tab still rendered blank on initial load. The skeleton and all home content were invisible because the `#screen-home` element never received the `.active` CSS class, leaving it at `transform:translateX(100%); visibility:hidden`.

**Root cause:** The slide transition system introduced with the floating nav had a race condition in `showScreen()`:
1. At app boot, `_appStart()` calls `showScreen("home")` (line ~969)
2. At that point, NO `.screen` element has the `.active` class yet
3. `_currentTab()` found no active screen and returned the fallback `"home"`
4. The guard `if (cur === n) return` saw `cur === "home"` and `n === "home"` → **early exit**
5. The home screen never got `.active` → CSS kept it off-screen and hidden
6. Switching to another tab and back worked because then `_currentTab()` returned the other tab, so the guard didn't trigger

**Fix (in `src/main.js`):**
1. Changed `_currentTab()` to return `null` (not `"home"`) when no screen has `.active` — this correctly represents the "no tab is active yet" state
2. Added a **first-load fast path** in `showScreen()`: when `cur === null`, skip the slide transition entirely and snap the target screen visible instantly using `no-transition` + `active` classes. Also triggers the initial render for the target screen (e.g. `renderHome()`)
3. The existing guard `if (cur === n) return` still works for subsequent calls since `_currentTab()` now returns the actual active tab name (never null after first activation)
4. The swipe-to-switch handler (`_initTabSwipe`) already handled null safely via `TAB_ORDER.indexOf(null) === -1 → return`
5. Added `console.log` debug statements in `_appStart()` to trace the initialization sequence

**Files changed:**
- `src/main.js` — `_currentTab()` returns null instead of "home" fallback; `showScreen()` has first-load fast path; debug logging in `_appStart()`

---

## Session 7 Changes — FAB Enhancement, Home Scroll Fix, Gesture Conflict, Activity Feed (March 2026)

### 1. Floating "+" Button Enhancement (FAB-only add)

**What:** Removed all static "+ Add item" / "+ Add" buttons from Supplies, Shopping, Recipes, and Home tab headers. The floating action button (FAB) in the bottom-right is now the sole entry point for adding items, and it's already context-aware per tab (Supplies → add supply, Shopping → add to list, Recipes → add recipe, Home → universal add).

**New feature — animated contextual label:** When switching to a tab, a brief label (e.g. "Add supply", "Add to list") appears next to the FAB and auto-fades after 2 seconds, leaving just the "+" icon. This gives users context about what the FAB does on each tab without permanently taking up screen space.

**Why:** Reduces visual clutter and duplicate tap targets. The FAB was already doing the same thing as the static buttons — now there's one clear affordance.

**Files changed:**
- `index.html` — Removed static add buttons from Home header (`.arow`), Supplies header (`shop-add-btn`), Shopping body (`shop-add-btn`), and Recipes header (`+ Add` button)
- `src/main.js` — Updated `_updateFAB()` to inject an animated `.fab-label` span alongside the icon, with a 2-second auto-fade timer. Added `_updateFAB(n)` call to the first-load fast path so the label shows on initial boot.
- `src/styles.css` — Added `.fab-label` styles (positioned to the left of the FAB, with `fabLabelIn`/`fabLabelOut` keyframe animations)

### 2. Home Tab Bottom Content Scroll Fix

**What:** The "Running Low" and "Recent Activity" sections at the bottom of the Home tab were being clipped and not fully visible/scrollable.

**Root cause:** A CSS rule at line 1302 (`.hbody{padding:4px 20px 20px}`) in the "Whitespace / Breathing Room" section was overriding the original `.hbody` rule which had `padding-bottom:calc(56px + var(--safe) + 40px)`. The override stripped the bottom clearance needed for the floating pill nav and FAB.

**Fix:** Changed the overriding rule to preserve the nav/FAB clearance: `.hbody{padding:4px 20px calc(56px + var(--safe) + 40px)}`.

**Files changed:**
- `src/styles.css` — Fixed `.hbody` bottom padding override

### 3. Swipe Gesture Conflict Fix (Tab Swipe vs. Row Swipe-to-Delete)

**What:** Swiping on a list item row in Shopping or Supplies was sometimes triggering a tab switch instead of the item's swipe-to-delete action.

**Fix:** Added target checks to `_initTabSwipe()` touchstart handler. If the touch originates on a `.swipe-wrap`, `.shit` (shopping item), `.iit` (inventory item), or `.exi` (expiring item) — i.e., any interactive list row — the tab swipe gesture is not initiated, allowing the row's own swipe handler to process the gesture. Tab swipe only activates from safe non-interactive areas (headers, empty space, section dividers).

**Files changed:**
- `src/main.js` — Added `.swipe-wrap, .shit, .iit, .exi` exclusion check in `_initTabSwipe()` touchstart

### 4. Recent Activity Feed Enhancements

**What:** Expanded from 3 to 10 most recent actions, and added contextual action buttons per activity type.

**Action buttons by type:**
- Deleted from Shopping → **Undo** (re-adds item via `consolidateShopItem`)
- Checked off shopping item → **Uncheck** (sets `done: false`)
- Added to Shopping → **Remove** (deletes item)
- Added supply → **Remove** (deletes from inventory)
- Deleted supply → **Undo** (re-adds with qty 1)
- Adjusted supply quantity → **Revert** (prompts user to adjust manually)
- Saved recipe → **Remove** (deletes from recipes)
- Marked as cooked → **Undo** (prompts user to open meal plan)
- Planned dinner → **Clear** (prompts user to open meal plan)
- Clipped coupon → **Unclip** (informs user coupons can't be unclipped)
- Deducted ingredients → **Undo** (prompts user to adjust supplies)

**Key design decisions:**
- Undo actions are **persistent** — they stay available until the entry is pushed off the 10-item list by newer actions. NOT time-limited like the 5-second swipe-to-delete toast.
- Some actions (Revert qty, Undo cook, Clear meal, Unclip, Undo deduct) show informational messages directing the user to the relevant screen, because those operations require more context than an activity entry stores.
- The **Running Low section was NOT modified** per requirements.

**New functions in `src/ui/home.js`:**
- `_actAgo(ts)` — relative time formatter (extracted from inline)
- `_actBtnFor(entry)` — maps activity action verbs to contextual button HTML
- `_getActivityEntry(actId)` — look up activity entry by Firestore doc ID
- `_extractItemName(entry)` — strips suffixes like "to Shopping List" from item names
- `activityUndo()`, `activityUncheck()`, `activityRemoveShop()`, `activityRemoveInv()`, `activityRemoveRec()`, `activityRevert()`, `activityUndoCook()`, `activityClearMeal()`, `activityUnclip()`, `activityUndoDeduct()` — all exported and registered on `window`

**Files changed:**
- `src/ui/home.js` — Rewrote `renderActivityFeed()` (3→10 items, added action buttons), added 10+ new exported functions for activity actions, added imports for `dli`, `svShopItem`, `dlShopItem`, `dbSet`, `dbDelete`, `logActivity` from db.js
- `src/main.js` — Imported and registered all 10 new activity action functions on `window`
- `src/styles.css` — Added `.act-btn` styles for the activity action buttons

---

### Session 7 Changes — FAB Cleanup, Collapsed Defaults, Activity Button Simplification

**Date:** 2026-03-22

#### 1. FAB Button: Shrink/Fade Animation Reworked with transform:scale()

**What changed:** The FAB shrink animation was reworked for a visually convincing physical shrink. Previously it animated `width`/`height`/`font-size` which looked like fading rather than shrinking. Now uses `transform: scale(0.75)` for a uniform scale-down that looks like the button physically reduces in size, paired with `opacity: 0.25` (75% transparent) fade. The settle delay is 0.5 seconds. Tab switches instantly reset to full size with zero grow-back animation.

**Why:** The old width/height animation wasn't visually convincing — layout-based size changes don't produce the same "pinch-to-zoom" effect as transform scaling. The grow-back animation on tab switch was also undesirable; the FAB should always appear at full size immediately.

**How it works:**
- CSS: The 2s transition is defined on `.fab.settled` (not on base `.fab`). This means adding the class triggers a smooth 2s shrink, but removing it causes an instant snap-back (no transition on base). Base `.fab` only has a quick `.2s` transform transition for the `:active` press bounce. `.fab.settled:active` provides a press effect at the shrunk scale.
- JS: `_updateFAB(tab)` uses `fab.style.transition = 'none'` + `offsetHeight` reflow trick to force an instant reset when switching tabs. After 0.5s idle, adds "settled" class which brings its own 2s transition and triggers the shrink.
- Hidden state: `.fab.hidden` now has `transition: none` to prevent any animation artifact when toggling visibility.

**Files changed:**
- `src/styles.css` — `.fab.settled` uses `transform:scale(.75)` instead of `width:48px;height:48px;font-size:1.3rem`. Transition moved from base to settled class. Added `.fab.settled:active` rule. Added `transition:none` to `.fab.hidden`.
- `src/main.js` — `_updateFAB()` uses inline transition disable + reflow for instant reset. Also clears "settled" class when hiding FAB.

#### 2. Running Low & Recent Activity: Always Start Collapsed

**What changed:** Both sections now always start collapsed when the Home tab loads. Previously, collapse state was persisted in localStorage so it remembered across sessions. Now it uses in-memory state that resets on every `renderHome()` call.

**Why:** The user expects these sections to be tucked away by default, requiring an intentional tap to expand. Persisting expand state was confusing because the sections appeared open on return.

**How it works:**
- Replaced localStorage-based persistence (`J(lsKey)`, `Js(lsKey, ...)`) with an in-memory `_homeSectionCollapsed` object.
- New `_resetHomeSectionStates()` function sets both keys to `true` (collapsed).
- Called at the start of `renderHome()` before any section renders.
- `toggleHomeSection(key)` flips the in-memory boolean (works within a session, resets on next render).
- Removed `J` and `Js` imports from state.js (no longer needed in home.js).

**Files changed:**
- `src/ui/home.js` — Replaced localStorage collapse persistence with in-memory state, added `_resetHomeSectionStates()`

#### 3. Recent Activity: Undo Button Only for Deleted Items

**What changed:** `_actBtnFor(entry)` now only returns an Undo button for items that were "removed" from the Shopping List or Supplies. All other action buttons (Remove, Uncheck, Revert, Clear, Unclip, Undo Cook, Undo Deduct) have been removed from the activity feed.

**Why:** The full set of action buttons was too noisy and some were just placeholder messages anyway. The persistent Undo for deleted items is the high-value feature — it lets users recover accidentally deleted items even after the 5-second swipe toast expires.

**How it works:**
- `_actBtnFor(e)` checks for "removed" + "shopping" or "removed" + "supplies" in the action string. Returns Undo button for those. Returns empty string for everything else.
- The existing `activityUndo()` function handles the re-add logic (unchanged).
- All other activity action functions (`activityUncheck`, `activityRemoveShop`, etc.) and their `window` registrations remain in the code but are no longer triggered by any UI button.

**Files changed:**
- `src/ui/home.js` — Simplified `_actBtnFor()` to only emit Undo for deleted shopping/supplies items

---

### Session 7 — Six UI/UX Fixes (March 2026)

#### 1. Home Tab Quick Action Chips — Reduced to 3 Distinct Actions

**What changed:** Replaced the 4 quick action chips (Scan Barcode, + Quick Add, Shopping List, What's Expiring) with 3 meaningful navigation chips: "🛒 Shopping List" → Shopping tab, "📦 Supplies" → Supplies tab, "⚠️ Expiring Soon" → Supplies tab scrolled to the expiry timeline.

**Why:** The original chips had redundant functionality — Scan Barcode was already in the FAB "+" flow, Quick Add duplicated the FAB, and the remaining chips didn't go to distinct enough destinations. Three chips with clear, distinct targets reduce clutter.

**Files changed:**
- `src/ui/home.js` — `renderQuickChips()` now outputs 3 chips instead of 4

#### 2. Home Tab FAB "+" Button — Two-Option Action Sheet

**What changed:** Tapping the "+" FAB on the Home tab now shows a compact bottom sheet with two options: "Add to Supplies" and "Add to Shopping List". Each option opens the respective full add sheet.

**Why:** Previously, the FAB opened the universal add sheet which was essentially a Supplies add form with a secondary shopping button at the bottom. The new 2-option picker makes the choice explicit upfront and routes to the purpose-built add sheets for each tab.

**How it works:**
- `FAB_CONFIG.home` now calls `openHomeFabSheet()` instead of `openUniversalAdd()`
- New functions: `openHomeFabSheet()`, `closeHomeFabSheet()`, `fabToSupplies()`, `fabToShopping()`
- New bottom sheet HTML: `#homeFabSheet` with `bsheet-compact` class (max-height 40vh)
- Each option dismisses the picker then opens `openInvAddSheet()` or `openShopAddSheet()`

**Files changed:**
- `src/main.js` — FAB_CONFIG updated, 4 new functions + window registrations
- `index.html` — New `#homeFabSheet` and `#homeFabBackdrop` elements

#### 3. Supplies Shelf View — Improved Auto-Categorization (Fewer "General" Items)

**What changed:** Massively expanded the `gcat()` keyword mapping in `helpers.js` to classify items into specific categories instead of the "General" catch-all. Added new categories: "Dry Goods & Pasta", "Sauces & Vinegars", "Canned Goods", "Baking & Spices", "Oils & Cooking", "Condiments & Pickled".

**Why:** Items like Black Olives, Capers, Chocolate, Macaroni & Cheese, and Rice Vinegar were all falling into "General" because the keyword matching was too narrow. The broader mapping now catches these and many more items.

**Key mappings added:**
- Olives, capers, pickles, relish → Condiments & Pickled
- Chocolate, chips, crackers, nuts → Snacks
- Macaroni, pasta, rice, quinoa, lentils → Dry Goods & Pasta
- Vinegar, soy sauce, hot sauce, tahini → Sauces & Vinegars
- Canned tomatoes, broth, coconut milk → Canned Goods
- Baking soda, vanilla, sugar, spices → Baking & Spices
- Olive oil, cooking spray → Oils & Cooking

**Files changed:**
- `src/helpers.js` — `CATS` map expanded with 5 new categories; `gcat()` rewritten with ~15 keyword pattern groups

#### 4. Shelf View Grid — Wrapping Multi-Row Layout

**What changed:** Shelf view items now flow into multiple rows within each category section instead of being constrained to a single horizontal scroll row.

**Why:** Categories with many items (e.g., Produce with 20+ items) forced the user to scroll a long horizontal strip. The wrapping grid shows all items at once in a natural reading flow.

**CSS changes:**
- `.shelf-items` — Changed from `display:flex;overflow-x:auto` to `display:flex;flex-wrap:wrap`
- `.shelf-item` — Added `width:calc(25% - 8px)` for a 4-column grid (min 80px, max 110px)
- `.shelf-name` — Changed from single-line truncation to 2-line clamp (`-webkit-line-clamp:2`)

**Files changed:**
- `src/styles.css` — `.shelf-items`, `.shelf-item`, `.shelf-name` rules updated

#### 5. Shopping Tab Text Truncation Fix

**What changed:** Added proper bottom padding to `.shbody` so the last shopping list items aren't clipped by the FAB or bottom nav bar.

**Why:** The `.shbody` padding was overridden in the "breathing room" section from `padding-bottom:calc(56px + var(--safe) + 40px)` to `padding:18px 20px`, which clobbered the bottom clearance. Items at the end of the list (like "Yogurt Pouch") were getting cut off.

**Files changed:**
- `src/styles.css` — `.shbody` override now includes `calc(56px + var(--safe) + 60px)` bottom padding

#### 6. Scan Barcode Chip Removed

**What changed:** The "📷 Scan barcode" quick action chip was removed from the Home tab header. Barcode scanning remains accessible through the FAB "+" → "Add to Supplies" → "Scan barcode" flow.

**Why:** Deduplicated functionality. The scan option exists in both the Supplies and Shopping add sheets, so having it as a standalone chip was redundant clutter.

**Files changed:**
- `src/ui/home.js` — `renderQuickChips()` no longer includes the scan chip

---

### Session 7 Changes — Home Tab Dedup, Stability Fixes, Deals Default (March 2026)

#### 1. Home Tab Quick Action Chips — Deduplicated & Centered

**What changed:** Reduced quick-action chips from 3 overlapping chips to 3 non-overlapping, centered chips:
- "🛒 X to buy" → Shopping tab (dynamic count, updates on every render)
- "⚠️ Expiring Soon" → Inventory filtered by expiry
- "✨ Deals" → Deals tab

Removed "Shopping List" (duplicated "X to buy" notification pill) and "📦 Supplies" (overlapped with stat cards). Also removed "running low" and "shopping list count" notification pills from the smart notification strip since quick chips now handle those navigation paths.

**Why:** Users reported the Home tab felt duplicative — "Shopping List" and "9 to buy" both went to the same place. The notification strip also repeated info already in the quick chips.

**Files changed:**
- `src/ui/home.js` — `renderQuickChips()` now renders 3 centered dynamic chips; `renderNotifications()` no longer includes low-stock or shopping-count pills
- `src/styles.css` — `.chip-row` now includes `justify-content:center`

#### 2. App Stability — Debounced Realtime Renders + Global Error Boundary

**What changed:** Three stability improvements to prevent random refreshes/crashes:

1. **Debounced realtime renders:** All Firestore `onSnapshot` listeners in `realtime.js` now use `_debouncedRenderAll()` (80ms coalesce window) instead of calling `renderCallbacks.renderAll()` directly. When a user writes data, inventory + shopping + activity listeners fire within milliseconds — without debouncing, this caused 3-4 full re-renders in quick succession.

2. **Eliminated double renderSum:** Removed redundant `renderCallbacks.renderSum?.()` calls from realtime listeners since `renderAll → renderHome → renderSum` already covers it. Also removed the trailing `renderSum()` from the initial load sequence in `main.js`.

3. **Global error boundary:** Added `window.addEventListener("unhandledrejection")` and `window.addEventListener("error")` handlers in `main.js` that log errors and show the sync-error dot instead of letting the app crash silently. Also wrapped `renderHome()` internals in try/catch so a single section failure doesn't blank the entire Home screen.

**Why:** Users reported random app refreshes and crashes. The root causes were: (a) re-render storms from multiple Firestore listeners firing simultaneously, (b) unhandled promise rejections from network errors crashing the app silently.

**Files changed:**
- `src/realtime.js` — Added `_debouncedRenderAll()` helper; all 8 listeners now use it; removed redundant `renderSum` calls
- `src/main.js` — Added global `unhandledrejection` and `error` handlers; removed duplicate `renderSum()` from initial load
- `src/ui/home.js` — `renderHome()` body wrapped in try/catch error boundary

#### 3. Deals Tab — Default Filter to "On My List"

**What changed:** The coupon category filter on the Deals tab now defaults to "On My List" instead of "All" when the tab first loads. This shows coupons matching the user's shopping list items first.

**Why:** "On My List" is the most useful default — users open Deals to find savings on items they're already buying. Defaulting to "All" forced an extra tap every time.

**Files changed:**
- `src/ui/shopping.js` — `_activeCouponCat` initial value changed from `"all"` to `"onlist"`; `loadCoupons()` reset changed from `"all"` to `"onlist"`

#### 4. Quick Chips Centered Horizontally

**What changed:** The `.chip-row` CSS class now includes `justify-content:center` so the three quick-action chips are centered on the Home tab instead of left-justified.

**Why:** With only 3 chips, left-justification left awkward empty space on the right. Centering looks balanced and intentional.

**Files changed:**
- `src/styles.css` — `.chip-row` flex container now centered

#### 5. Home Header Duplicate Navigation Audit

**What changed:** Confirmed and cleaned up all duplicate navigation from the Home tab. The "+ Add" button was already removed (replaced by FAB). The notification strip no longer duplicates quick-chip navigation. The stat card grid still provides distinct value (showing counts/data, not just navigation).

**Why:** Previous prompt partially addressed duplication but left "running low" and "to buy" pills that overlapped with quick chips.

---

### Session 7 — Safari Crash Stability Audit (March 2026)

> **Problem:** App was hard-crashing in Safari with "A problem repeatedly occurred" — affecting multiple tabs. Root cause: accumulated GPU compositing layers from backdrop-filter blur, orphaned timers/listeners, and missing error boundaries.

#### 1. Memory Leak Fixes

**realtime.js — Debounce timer leak on sign-out**
- `stopRealtimeSync()` now clears `_renderAllTimer` before unsubscribing listeners. Previously, a pending 80ms debounce timer could fire after all listeners were cleaned up, calling `renderCallbacks.renderAll()` on stale/null state.

**db.js — Polling interval not stopped on sign-out**
- Added `stopPoll()` export that clears the 30-second `setInterval`, nulls `_pollFn`, and resets `_activeWrites`. The sign-out path was only calling `stopRealtimeSync()` but leaving the legacy polling loop alive, causing it to fire `window._pollFn()` on unmounted DOM.

**main.js — Sign-out now calls `stopPoll()`**
- Added `stopPoll()` call in the `onAuth` sign-out handler, right after `stopRealtimeSync()`.

#### 2. Speech Recognition Cleanup

**shopping.js + inventory.js — Added `stopVoice()` / `stopInvVoice()` exports**
- Forcibly aborts any active `SpeechRecognition` instance and resets all mic state. Called on:
  - Tab switch (in `showScreen()`) — prevents orphaned mic sessions when navigating away
  - App backgrounding (`visibilitychange` → `document.hidden`) — prevents mic staying open in background

**main.js — visibilitychange listener**
- New global listener stops all speech recognition when the app goes to background. Orphaned SpeechRecognition instances are a known Safari crash vector (mic stays open, listeners accumulate).

#### 3. Error Boundaries

**Render callbacks wrapped in try/catch**
- `renderCallbacks.renderAll/renderSum/renderRecs/renderShop` are now wrapped so a crash in one module's render doesn't propagate through the realtime listener chain.

**Tab render calls wrapped in try/catch**
- Both the first-load and standard `showScreen()` paths now catch render errors and display a friendly error state via `_showTabError()` instead of crashing the entire app.

**`_showTabError(tabName)` helper**
- Replaces the tab's body content with a centered error message and "Reload App" button. Keeps the nav functional so the user can still switch tabs.

#### 4. CSS Performance — Backdrop Filter Reduction

**Problem:** Safari mobile allocates a separate GPU compositing layer for every element with `backdrop-filter`. With nav + bottom sheets + modals + 100+ coupon/deal cards all using blur(16-28px), the GPU runs out of memory and crashes.

**Changes:**
- **Coupon cards + Deal cards:** Removed `backdrop-filter` entirely (replaced with opaque background). These render 50-100+ cards at once — each was a separate GPU layer.
- **Nav pill (#NAV):** Blur reduced 28px → 14px, saturate 1.8 → 1.4, opacity increased to compensate.
- **Bottom sheets (.bsheet):** Blur reduced 20px → 10px (original def), 24px → 12px (glassmorphism override).
- **Modals (.minner):** Blur reduced 24px → 12px.
- **Modal backdrop (.modal):** Blur reduced 8px → 4px.
- **Sheet backdrop (.bsheet-backdrop):** Blur reduced 8px → 4px.
- **Undo toast:** Blur reduced 8px → 4px.

#### 5. CSS Animation Fixes — Layout Property Avoidance

**`@keyframes scanLine`:** Was animating `top` property (forces layout recalc every frame). Changed to `transform: translateY(78px)` — stays on compositor, no layout thrash.

**`@keyframes strikeAcross`:** Was animating `width: 0 → 100%` (layout property). Changed to `transform: scaleX(0) → scaleX(1)` with `transform-origin: left`.

**`@keyframes mic-pulse`:** Was animating `box-shadow` (forces full repaint). Changed to `transform: scale() + opacity` — compositable properties only.

**FAB (.fab):** Removed `box-shadow` from transition list. Box-shadow animation forces full repaint each frame.

**Global `*` transition removed:** The `*{transition:background-color .25s,border-color .25s,color .15s}` rule was applying transitions to every single DOM element including text nodes. Replaced with targeted selectors for interactive elements only.

**Comment row:** Removed `max-height` from transition (`.com-comment-row`). Only opacity animates now.

**will-change added:** `.reticle-line`, `.notif` toast, `.mic-btn.mic-active`, `.shit.chk .shnm::after` — promotes these to compositor layers for smoother animation.

**`@media (prefers-reduced-motion: reduce)`:** Kills all animations and transitions for users who prefer reduced motion. Also serves as a safety valve for low-powered devices.

#### 6. Image Lazy Loading

Added `loading="lazy"` to all dynamically-generated `<img>` tags across:
- `home.js` — recipe match cover images
- `recipes.js` — recipe card covers, read-only view covers, community recipe covers (both list and detail views)

This prevents offscreen images from loading until the user scrolls to them, reducing initial memory footprint.

#### Files Changed
- `src/realtime.js` — `stopRealtimeSync()` now clears debounce timer
- `src/db.js` — Added `stopPoll()` export
- `src/main.js` — Error boundaries, voice cleanup, visibility handler, stopPoll import
- `src/ui/shopping.js` — Added `stopVoice()` export
- `src/ui/inventory.js` — Added `stopInvVoice()` export
- `src/ui/home.js` — Lazy loading on recipe match images
- `src/ui/recipes.js` — Lazy loading on all recipe cover images
- `src/styles.css` — All CSS performance fixes (backdrop-filter reduction, animation fixes, reduced motion)

---

## Session 11 — Dev Launcher Script (March 2026)

### Overview
Added a macOS Finder-clickable shell script (`start-dev.command`) so Bora can double-click to start the full dev environment without opening a terminal manually. Also created `.gitignore` to keep local-only files out of the repo.

### Changes Made

#### 1. `start-dev.command` — Finder Dev Launcher
- **What:** A bash script that `cd`s to `~/pantry-app` and runs `npm run dev:full`.
- **Why:** Eliminates the need to open Terminal, navigate to the project, and type the dev command. Double-clicking from Finder launches everything.
- **How:** Uses `.command` extension which macOS Terminal.app recognizes as executable. Marked `chmod +x`.

#### 2. `.gitignore` — Keep Local Files Out of Repo
- **What:** New `.gitignore` file that excludes `start-dev.command`.
- **Why:** The launcher script is a local convenience tool with a hardcoded home directory path — it shouldn't be committed to the shared repo.

### Files Added
- `start-dev.command` — Finder-clickable dev launcher (gitignored)
- `.gitignore` — Excludes local-only convenience files

---

## Session 12 — macOS Launch Agent for Auto-Start Dev Server (March 2026)

### Overview
Added a macOS Launch Agent plist that automatically starts `npm run dev:full` (Vite + dev API server) whenever Bora logs into macOS. This replaces the need to manually double-click `start-dev.command` or open a terminal — the dev environment is always ready after login.

### Changes Made

#### 1. `~/Library/LaunchAgents/com.kitchen.devserver.plist` — Launch Agent
- **What:** A standard macOS Launch Agent plist file that runs `npm run dev:full` from `~/pantry-app` on user login.
- **Why:** Eliminates the manual step of starting the dev server entirely. The dev environment is always available after logging in.
- **How:** Uses `launchd` (macOS's init system). `KeepAlive` restarts the process if it crashes. `ThrottleInterval` of 5 seconds prevents rapid restart loops. Logs stdout/stderr to `~/Library/Logs/kitchen-dev.log`. Sets `PATH` explicitly since Launch Agents don't inherit shell profile paths.
- **Location:** `~/Library/LaunchAgents/com.kitchen.devserver.plist` (outside repo — user-level system config).

### Management Commands
- **Load (start immediately):** `launchctl load ~/Library/LaunchAgents/com.kitchen.devserver.plist`
- **Unload (stop):** `launchctl unload ~/Library/LaunchAgents/com.kitchen.devserver.plist`
- **Check status:** `launchctl list | grep kitchen`
- **View logs:** `tail -f ~/Library/Logs/kitchen-dev.log`

---

## Session 13 — VS Code Workspace Settings (March 2026)

### Overview
Added `.vscode/settings.json` and `.vscode/tasks.json` to standardize the VS Code workspace layout for this project. These files configure auto-save, Prettier formatting on save, zsh as default terminal, and auto-open the Simple Browser to the local dev server (`http://localhost:5173`) on workspace load.

### Changes Made

#### 1. `.vscode/settings.json` — Workspace Preferences
- **What:** VS Code settings file that configures editor behavior for this project.
- **Why:** Ensures consistent development experience — files auto-save, code gets formatted by Prettier on save, and the terminal defaults to zsh.
- **Settings included:**
  - `files.autoSave: "afterDelay"` (1s delay) — auto-saves files on change
  - `editor.formatOnSave: true` with Prettier as default formatter
  - `terminal.integrated.defaultProfile.osx: "zsh"` — default terminal to zsh
  - `workbench.editor.restoreViewState: true` — restores editor layout including Simple Browser
  - `editor.tabSize: 2` — matches existing codebase indentation

#### 2. `.vscode/tasks.json` — Auto-Open Simple Browser
- **What:** A VS Code task configured to run on folder open that launches Simple Browser to `http://localhost:5173`.
- **Why:** Automatically shows the dev server preview whenever the workspace is opened, so Bora always has a live view of the app alongside the code.
- **How:** Uses `runOptions.runOn: "folderOpen"` to trigger on workspace open, then calls `code --open-url` with the Simple Browser URI handler. VS Code may prompt to allow automatic tasks on first load — select "Allow".

### Files Added
- `.vscode/settings.json` — Workspace editor preferences (auto-save, Prettier, zsh terminal)
- `.vscode/tasks.json` — Auto-open Simple Browser to dev server on startup

### Note
The first time you open the workspace after adding these files, VS Code may show a prompt asking "This workspace has tasks that run automatically. Allow?" — click **Allow** to enable the Simple Browser auto-open behavior.

---

## Session — Supply Item Emoji Fixes (March 2026)

### Overview
Three interrelated emoji bugs on the Supplies item detail sheet: wrong emojis showing (e.g. 🗑️ for Capers), emojis not updating after mapping fixes, and tapping the emoji not opening the picker. All three traced back to a CSS issue (emoji placeholder styled inside a comment block) and stale `customEmoji` values stored in Firestore overriding the correct auto-assignment.

### Changes

#### 1. CSS Fix — Emoji Placeholder Restored
- **File:** `src/styles.css`
- **What:** The `.item-detail-img-ph` CSS rule was trapped inside the `/* [IMAGES DISABLED] */` comment block (lines 762-771) that commented out product image styles. Without this rule, the 72×72 emoji placeholder in the item detail header had no sizing, background, border, or tap highlight — making it visually broken and unreliable as a tap target.
- **Fix:** Moved `.item-detail-img-ph` outside and below the comment block with its own explanatory comment. Added `cursor:pointer` and `-webkit-tap-highlight-color:transparent` for mobile tap UX.

#### 2. Emoji Mapping — Condiments → 🧴
- **File:** `src/helpers.js` (`_EMOJI_MAP`)
- **What:** The keyword "condiment" was grouped with sauces/ketchup/mustard mapping to 🫙. Bora specified Condiments should map to 🧴 (bottle emoji).
- **Fix:** Extracted "condiment" into its own entry `{ keywords: ["condiment"], emoji: "🧴" }` placed before the sauces entry, so items categorized as "Condiments" get 🧴 while sauces/ketchup/etc. still get 🫙.

#### 3. One-Time Emoji Migration (v1)
- **File:** `src/main.js` (`_appStart`)
- **What:** Existing inventory items had stale `customEmoji` values stored in Firestore (e.g. 🗑️ on Capers) that overrode the correct auto-assignment from `_EMOJI_MAP`. Since `getItemEmoji()` checks `item.customEmoji` first (user override) before keyword matching, these bad stored values were permanent.
- **Fix:** Added a one-time migration gated by `localStorage["ks-emoji-migration-v1"]`. On first run, it iterates all inventory items with a `customEmoji` field, deletes that field, and saves each item back to Firestore. This lets the improved auto-assignment mapping take over. Users can re-pick custom emojis by tapping the emoji in the detail sheet.
- **Migration runs after:** Initial Firestore data load in `_appStart`, before `renderAll()`.

#### 4. Inline Style Cleanup
- **File:** `src/ui/inventory.js` (detail sheet header)
- **What:** The emoji placeholder `<div>` had redundant inline styles (`display:flex;align-items:center;justify-content:center;cursor:pointer`) that duplicated what the CSS class now provides.
- **Fix:** Removed redundant inline styles. The `.item-detail-img-ph` CSS class handles all visual properties.

### Emoji Auto-Assignment Source of Truth
The canonical mapping (per Bora) is:
- Capers → 🫙 (jarred items keyword "caper")
- Black Olives → 🫒 (keyword "olive", "black olive")
- Chocolate → 🍫 (keyword "chocolate", "cocoa")
- Rice Vinegar → 🍶 (keyword "rice vinegar", "vinegar")
- Mac & Cheese → 🧀 (keyword "mac & cheese" variants)
- Energy Drink → 🥤 (keyword "energy drink", brand names)
- Condiments → 🧴 (keyword "condiment")
- Default fallback: 🛒 (shopping cart) — NEVER use 🗑️ or 🍿 as defaults

### Files Modified
- `src/styles.css` — Moved `.item-detail-img-ph` outside image comment block
- `src/helpers.js` — Separated "condiment" → 🧴 from sauces → 🫙
- `src/main.js` — Added one-time emoji migration (v1) in `_appStart`
- `src/ui/inventory.js` — Cleaned up redundant inline styles on emoji placeholder

---

## Session 11 — Remove Auto-Categorization Shelf View Grouping (March 2026)

### What changed
Removed the auto-categorization category grouping from the Supplies tab grid (shelf) view. The grid view now shows a flat list of item cards with no category section headers ("General", "Condiments & Pickled", "Dry Goods & Pasta", etc.).

### Why
The auto-categorization mapping (`gcat()`) was causing persistent bugs — items were being placed in wrong categories, "General" was a catch-all dumping ground, and the category headers added visual noise without clear user value. Bora requested a return to a simple flat layout.

### What was removed
- **Category grouping in `_renderInvShelf()`** — no longer calls `gcat()` to group items into sections. Items render as a flat wrapping grid.
- **Category section headers** — the `.shelf-row`, `.shelf-label`, `.shelf-line` DOM elements and CSS classes are gone.
- **`CATS` import in inventory.js** — no longer needed since shelf view doesn't display category headers.

### What was kept (intentionally NOT removed)
- **`gcat()` function in `helpers.js`** — still used when saving new items (sets their `category` field) and by Shopping Prep.
- **`CATS` constant in `helpers.js`** — still exported, used by other code paths.
- **Location filter tabs** (All, Fridge, Freezer, Pantry, Household) — unchanged.
- **Grid/list view toggle button** — still works, just shows flat grid vs flat list.
- **Item emoji on each card** — unchanged.
- **Category field on detail sheets** — users can still manually set categories.
- **Shopping Prep** — completely untouched.

### Files changed
- `src/ui/inventory.js` — `_renderInvShelf()` rewritten to flat grid (no grouping); `CATS` removed from import; section comments updated
- `src/styles.css` — Removed `.shelf-row`, `.shelf-label`, `.shelf-label-emoji`, `.shelf-label-count`, `.shelf-line` CSS rules; kept all `.shelf-item` card styles

## Session — FAB Settle Timing & Opacity Tuning (March 2026)

### Overview
Two quick tweaks to the floating "+" button to make it less intrusive at rest.

### Changes Made

#### 1. Faster Settle Delay (2s → 0.5s)
**What changed:** The delay before the FAB begins its shrink+fade animation was reduced from 2 seconds to 0.5 seconds after landing on a tab.

**Why:** 2 seconds felt too long — the full-size button blocked content unnecessarily. Half a second gives enough time to register the FAB's presence before it settles out of the way.

**How:** Changed the `setTimeout` delay in `_updateFAB()` from `2000` to `500`. Updated all related comments in `main.js`.

#### 2. More Transparent Resting State (opacity 0.75 → 0.25)
**What changed:** The FAB's resting (settled) opacity was set to 0.25 (75% transparent). Previously was 0.15 (85% transparent) which was too subtle; reverted to 0.25 for better visibility while still being unobtrusive.

**Why:** At 15% opacity the FAB was too hard to see. At 25% opacity it strikes a better balance — visible enough to find quickly but still fades into the background so it doesn't compete with content.

**How:** Changed `opacity:.15` to `opacity:.25` on `.fab.settled` in CSS. Updated all related comments in `styles.css`, `main.js`, and `index.html`.

### Files Changed
- `src/main.js` — `_updateFAB()`: settle timeout 2000→500, updated all comments referencing opacity values (now 0.25)
- `src/styles.css` — `.fab.settled`: opacity now .25 (75% transparent), updated block comment to reflect new values
- `index.html` — Updated FAB HTML comment to reflect current settle behavior (0.5s idle, 25% opacity)
- `CLAUDE_CODE_HANDOFF.md` — Updated existing FAB section + added this session entry

---

## Sticky Filter Bars & Persistent Undo — Session 8 (March 2026)

### 1. Sticky Filter Bars Across All Tabs

**What:** All tab filter bars now have a frosted-glass visual treatment (backdrop blur + semi-transparent background + subtle shadow) for a polished, modern look. The Deals tab filter chips are now truly sticky — they stay visible at the top while scrolling through deals.

**Details by tab:**
- **Supplies tab** (`.itabs`): Location filter tabs (All, Fridge, Freezer, Pantry, Household) already lived in the non-scrolling header. Added frosted-glass backdrop (`backdrop-filter: blur(12px)`, `background: rgba(--bg-rgb, .85)`, `box-shadow`) for visual polish.
- **Recipes tab** (`.rtabs`): Filter chips (All, Favorites, Top Rated, Quick, Kids, Community) — same frosted-glass treatment as Supplies.
- **Shopping tab** (`.itabs`): My List / Deals tab switcher — same frosted-glass treatment (shares `.itabs` class with Supplies).
- **Deals tab** (`#coupon-cats`, `#deals-store-chips`): ShopRite category chips and Flipp store chips were previously inside the scrollable `#sh-deals-body` and would scroll away. Now use `.sticky-chips` class with `position: sticky; top: 0` so they stay accessible while scrolling through deals. Frosted-glass backdrop prevents content from bleeding through.
- **Shopping Prep** (`.prep-hdr`): Overlay header already outside scrollable area. Added frosted-glass backdrop for consistency.

**CSS custom property added:** `--bg-rgb: 10,10,14` on `:root` — the RGB components of `--bg` for use in `rgba()` with backdrop blur backgrounds.

**New CSS class:** `.sticky-chips` — sticky positioning with frosted-glass treatment, negative margin trick to span full container width despite parent padding.

### 2. Persistent Undo Buttons in Recent Activity

**What:** "Removed [item] from Shopping List" and "removed [item] from Supplies" activity entries have persistent Undo buttons that restore the deleted item with all original data (name, quantity, unit, location, notes, category, barcode).

**How it works:**
1. When an item is deleted (via `dli()`, `dlShopItem()`, or swipe-delete in `swipe.js`), the full item data is captured as a snapshot object and passed as the third argument to `logActivity()`.
2. `logActivity()` stores this snapshot as `entry.itemData` in the Firestore activity document.
3. When the user taps Undo in the activity feed, `activityUndo()` reads `entry.itemData` and restores the item with all original fields instead of generic defaults.
4. Legacy activity entries without `itemData` gracefully fall back to `qty: 1, location: "pantry"`.

**Item snapshot fields stored:** `name`, `qty`, `unit`, `location`, `note`, `prepCategory`, `barcode`, `list` ("shopping" or "supplies").

### Files Changed
- `src/styles.css` — Added `--bg-rgb` custom property, frosted-glass backdrop to `.itabs`, `.rtabs`, `.prep-hdr`; new `.sticky-chips` class for Deals chip bars
- `index.html` — Added `.sticky-chips` class to `#coupon-cats` and `#deals-store-chips`
- `src/db.js` — `logActivity()` now accepts optional `itemData` param; `dli()` and `dlShopItem()` pass full item snapshot on removal
- `src/ui/swipe.js` — `commitDelete()` passes item snapshot to `logActivity()`
- `src/ui/home.js` — `activityUndo()` reads `entry.itemData` to restore all original fields; generates fresh ID for re-added items
- `CLAUDE_CODE_HANDOFF.md` — Updated Recent Activity docs, added Deals sticky chips note, added this session entry

---

## Session 23 — Recipe Back Button Fix & Magnifying Glass Repositioning (March 2026)

### Overview
Two targeted fixes: (1) glitchy back button on recipe detail pages, and (2) magnifying glass FAB repositioned on the main Recipes list.

### Changes Made

#### 1. Recipe Back Button Fix
**Problem:** The back button (← arrow) on individual recipe pages was unreliable — taps sometimes didn't register, and after partial swipe-back gestures, the overlay could have stale inline styles that caused visual glitches on the next open.

**Root causes identified:**
- **Swipe-back edge zone conflict:** The swipe-back gesture's 20px edge zone directly abutted the back button (`.bkbtn`), which starts at x=20px due to `.ovhdr` padding. Slightly off-center taps could land in the edge zone and be captured by the swipe tracker instead of triggering the button's onclick.
- **Stale inline styles:** `disableSwipeBack()` removed event listeners and nulled internal state, but did NOT clear inline `transform` and `transition` styles left on the overlay element from in-progress or aborted swipe gestures. These stale styles could override CSS animations when the overlay reopened.
- **Sub-minimum tap target:** The back button was 38×38px, below the 44px iPhone minimum tap target guideline.

**Fixes applied:**
1. **`src/ui/swipeback.js` — `_handleTouchStart`:** Added a guard that checks if the touch target is a `.bkbtn` element (or descendant). If so, returns early without starting swipe tracking, letting the onclick fire cleanly.
2. **`src/ui/swipeback.js` — `disableSwipeBack`:** Now clears `_overlayEl.style.transform` and `_overlayEl.style.transition` before nulling the reference, preventing stale inline styles from persisting.
3. **`src/ui/recipes.js` — `handleRecipeBack`:** Added a safety clear of inline `transform`/`transition` on `#ov-erec` directly, in case `_overlayEl` was already null when `disableSwipeBack` ran.
4. **`src/styles.css` — `.bkbtn`:** Increased from 38×38px to 44×44px to meet the mobile-first 44px tap target rule.

#### 2. Magnifying Glass Repositioned
**What:** On the main Recipes list page only, the floating magnifying glass search FAB moved up 50px and 5px to the left.
- `top: 103px` → `top: 53px`
- `right: 16px` → `right: 21px`

**Why:** User requested this exact repositioning for better placement on the Recipes list screen.

**How:** Updated `.rec-search-fab` in `src/styles.css` and updated the position reference comment in `src/ui/recipes.js`.

### Files Changed
- `src/ui/swipeback.js` — Added `.bkbtn` touch guard in `_handleTouchStart`; added inline style cleanup in `disableSwipeBack`
- `src/ui/recipes.js` — `handleRecipeBack` now clears stale inline styles on overlay; updated FAB position comment
- `src/styles.css` — `.bkbtn` enlarged to 44×44px; `.rec-search-fab` repositioned to top:53px right:21px
- `CLAUDE_CODE_HANDOFF.md` — Updated Swipe Back section, FAB position/history, added this session entry

---

## Session — March 23, 2026: Magnifying Glass FAB Repositioned Again

### What Changed

#### Magnifying Glass Moved Down 20px and Left 10px
**What:** On the main Recipes list page only, the floating magnifying glass search FAB moved down 20px and 10px further to the left from its previous position.
- `top: 53px` → `top: 73px`
- `right: 21px` → `right: 31px`

**Why:** User requested this exact repositioning for better visual placement on the Recipes list screen.

**How:** Updated `.rec-search-fab` in `src/styles.css` (coordinates and comment) and updated the position reference comment in `src/ui/recipes.js`.

### Files Changed
- `src/styles.css` — `.rec-search-fab` repositioned to top:73px right:31px
- `src/ui/recipes.js` — Updated FAB position comment to reflect new coordinates
- `CLAUDE_CODE_HANDOFF.md` — Added this session entry
