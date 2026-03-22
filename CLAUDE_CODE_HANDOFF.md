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
            doNotRestock, expiryDate, note, createdAt, updatedAt
  recipes/{recipeId}                — household recipes
  productPreferences/{normalizedName} — unit + location preference per product
    fields: unit, location, updatedAt
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

- Greeting with user name and date
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
- **Sorted alphabetically** by scanTitle first, then name
- **Swipe left** to delete (5-second undo toast with draining gold line at bottom)
- **Swipe right** to add to Shopping List
- **Tap row** to open detail sheet
- **Select mode:** tap anywhere on row to check (not just bubble), Delete All button with confirmation
- **Detail sheet fields:** Location picker, Quantity (− / number / + with fraction picker and unit dropdown), Expiry Date (truly optional, "No expiry set" / "Set expiry"), Notes, Restock When Below, Don't Add to Running Low toggle, Add to Shopping List button, Remove button
- **Inline title/subtitle editing:** tap ✏️ on title → shows two editable fields (Title + Subtitle) with Save button, auto Title Case, saves to Firestore + customProducts if barcoded
- **Category badge:** shows prepCategory, tappable to change, saves to Firestore
- **Shopping Prep button** below "+ Add item" — gold text/icon on dark background with subtle gold border

### Shopping Prep Feature
- Full-screen audit mode for pre-shop preparation
- Category overview grid with item counts and amber indicator for low items
- Category detail view shows all items in that category with:
  - Inline − / + quantity correction (auto-saves with 500ms debounce)
  - "Last updated X days ago" timestamp
  - Amber highlight if at/below restock threshold
  - Green shopping cart button to add to Shopping List
  - "✓ Added" state after adding
  - Audit checkbox (physical verification, session-only)
- "Add all low (X)" button at top of each category
- "+ Add new item to Shopping List" — closes Shopping Prep, opens Shopping add sheet
- Summary toast on close: "X items added, Y quantities updated"
- Categories use stored prepCategory field first, then keyword/OFF mapping fallback
- Custom categories supported with emoji picker

### Shopping Prep Categories
Default: 🥦 Produce, 🥛 Dairy Eggs & Milk, 🥩 Meat & Seafood, 🧁 Bakery & Bread, 🧊 Frozen, 🥫 Canned & Dry Goods, 🍿 Snacks & Beverages, 🧴 Personal Care, 🧹 Cleaning & Household, 🌾 Grains Pasta & Rice, 🫙 Condiments & Sauces, 🍳 Other

Custom categories stored in `households/{hid}/settings/customPrepCategories[]` with name and emoji.

---

## Shopping Tab

- **Sorted alphabetically** by scanTitle first, then name
- **List row style:** item name left, quantity + unit stacked vertically on right (faded), no edit pencil on rows
- **Swipe left** to delete (5-second undo toast)
- **Tap row** to open detail sheet
- **Select mode:** tap anywhere on row to check, Delete All button
- **Deals sub-tab:** Email-gated (beta), has two sections: ShopRite Digital Coupons + Weekly Circular Deals (Flipp)
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

---

## Session 8 — UI Modernization (March 2026)

### Overview
A comprehensive visual polish pass across all tabs. The dark gold identity is fully preserved — this is a refinement, not a redesign. All changes are purely visual/UX — no backend or API changes.

### Changes Made

#### 1. Home Tab Greeting — First Name Only
- **File:** `src/ui/home.js` (`initHome()`, `renderHome()`)
- **What:** "Good evening, Bora Isguder" → "Good evening, Bora". Parses first name by splitting display name on first space via `_firstName()`.
- **Context-Aware Greetings:** New `_contextGreeting()` function adds day/time context: "Lazy morning" on weekends, "Late night vibes" after 9pm, "Burning the midnight oil" before 5am, etc.

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

#### Shelf View
- **File:** `src/ui/inventory.js` (`_renderInvShelf()`, `toggleInvViewMode()`)
- **What:** New visual grid layout grouped by category (via `gcat()`). Each category = horizontal scrollable shelf row of item cards. Cards show emoji + name + qty. Low-stock items get `.shelf-item-low` class (amber border, slight scale down).
- **Toggle:** `_invViewMode` persisted in localStorage `ks-inv-view`. Toggle button `#inv-view-toggle` (🗄) in inventory header.
- **CSS classes:** `.shelf-row`, `.shelf-label`, `.shelf-items`, `.shelf-item`, `.shelf-item-low`, `.shelf-emoji`, `.shelf-name`, `.shelf-qty`, `.shelf-line`

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
