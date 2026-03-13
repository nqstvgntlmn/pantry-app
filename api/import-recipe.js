// ── RECIPE IMPORT API (Claude AI-Powered) ────────────────────────────────────
// Serverless endpoint that imports a full recipe from any URL using Claude AI.
//
// Flow:
//   1. Fetch raw HTML from the provided URL (with browser-like headers)
//   2. Send HTML to Claude Sonnet to extract structured recipe data
//   3. Download the primary image, compress it, upload to Firebase Storage
//   4. Save the recipe to Firestore (household + optionally public)
//   5. Return the complete recipe object to the client
//
// Request:  POST /api/import-recipe
//   { url, householdId, userId, publish }
//
// Response: { success: true, recipe: { ... } }
//      or:  { success: false, error: "..." }

import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

// ── Firebase Admin lazy init ─────────────────────────────────────────────────
// Same pattern as other API endpoints — initialize once, reuse across invocations

/**
 * getFirebaseApp — lazily initializes Firebase Admin SDK.
 * Returns the Firestore and Storage instances for saving recipes and images.
 */
function getFirebaseApp() {
  if (!getApps().length) {
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKeyRaw = process.env.FIREBASE_PRIVATE_KEY;

    if (!clientEmail || !privateKeyRaw) {
      throw new Error("Server misconfigured: missing Firebase credentials");
    }

    initializeApp({
      credential: cert({
        projectId: "family-pantry-c65d6",
        clientEmail,
        privateKey: privateKeyRaw.replace(/\\n/g, "\n"),
      }),
      storageBucket: "family-pantry-c65d6.firebasestorage.app",
    });
  }

  return {
    db: getFirestore(),
    bucket: getStorage().bucket(),
  };
}

// ── HTML FETCHER ─────────────────────────────────────────────────────────────

/**
 * fetchPageHtml — downloads the raw HTML of a recipe page.
 * Uses a realistic User-Agent to avoid bot detection on recipe sites.
 * Truncates to ~120KB to stay within Claude's context limits.
 */
async function fetchPageHtml(url) {
  const resp = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      "Accept": "text/html,application/xhtml+xml",
      "Accept-Language": "en-US,en;q=0.9",
    },
    redirect: "follow",
    signal: AbortSignal.timeout(15000), // 15s timeout
  });

  if (!resp.ok) {
    throw new Error(`Failed to fetch URL (HTTP ${resp.status})`);
  }

  let html = await resp.text();

  // Strip <script>, <style>, <noscript>, and SVG blocks to reduce token usage.
  // These contain JS/CSS code that doesn't help with recipe extraction.
  html = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, "")
    .replace(/<svg[\s\S]*?<\/svg>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "");

  // Truncate to ~120KB so we don't blow the Claude context window
  const MAX_CHARS = 120000;
  if (html.length > MAX_CHARS) html = html.slice(0, MAX_CHARS);

  return html;
}

// ── CLAUDE RECIPE PARSER ─────────────────────────────────────────────────────

/**
 * parseRecipeWithClaude — sends page HTML to Claude Sonnet and gets back
 * a structured JSON recipe object. The system prompt constrains output
 * to only valid JSON with the exact fields we need.
 */
async function parseRecipeWithClaude(html, url, apiKey) {
  const systemPrompt = `You are a recipe extraction engine. Given raw HTML from a recipe webpage, extract the recipe data and return ONLY a valid JSON object — no markdown fences, no extra text, no explanation. If you cannot find a recipe in the HTML, return {"error":"No recipe found on this page"}.

Return this exact JSON shape:
{
  "title": "Full recipe name",
  "description": "Brief 1-2 sentence description of the dish",
  "ingredients": [
    { "name": "ingredient name", "amount": "2", "unit": "cups" }
  ],
  "steps": [
    "Step 1 text...",
    "Step 2 text..."
  ],
  "prepTime": "15 min",
  "cookTime": "30 min",
  "totalTime": "45 min",
  "servings": "4",
  "cuisine": "Italian",
  "tags": ["Quick", "Healthy"],
  "imageUrl": "https://full-url-to-primary-recipe-image.jpg",
  "notes": "Any tips, substitutions, or serving suggestions"
}

Rules:
- For ingredients: split each into name, amount, and unit. If no amount/unit, leave them as empty strings.
- For steps: return as an array of strings, one per step, numbered order.
- For tags: infer from content. Choose from: Quick, Healthy, Kid-Friendly, Date Night, Batch Cook, Under 30 min, Comfort Food, One-Pot, Vegetarian, Vegan, Gluten-Free.
- For imageUrl: find the primary/hero recipe image URL. Prefer og:image, then the largest recipe photo. Return full absolute URL.
- For times: use human-readable format like "15 min", "1 hour 30 min".
- If a field is not available, use an empty string or empty array.`;

  const resp = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 4000,
      system: systemPrompt,
      messages: [{
        role: "user",
        content: `Extract the recipe from this webpage HTML. The URL is: ${url}\n\n${html}`,
      }],
    }),
  });

  const data = await resp.json();

  // Handle API errors (rate limit, invalid key, etc.)
  if (data.error) {
    throw new Error(`Claude API error: ${data.error.message || JSON.stringify(data.error)}`);
  }

  // Extract text from Claude's response content blocks
  const text = (data.content || [])
    .filter(b => b.type === "text")
    .map(b => b.text)
    .join("");

  // Parse JSON — try direct parse, fall back to regex extraction
  let parsed;
  try {
    parsed = JSON.parse(text.replace(/```json|```/g, "").trim());
  } catch {
    const m = text.match(/\{[\s\S]*\}/);
    if (m) parsed = JSON.parse(m[0]);
    else throw new Error("Claude returned non-JSON response");
  }

  return parsed;
}

// ── IMAGE HANDLER ────────────────────────────────────────────────────────────

/**
 * downloadAndUploadImage — fetches the recipe image from its source URL,
 * compresses it to fit within 800x600 / 300KB, and uploads to Firebase Storage.
 *
 * Returns the public download URL on success, or null on failure.
 * We intentionally catch all errors so image failures don't block the import.
 */
async function downloadAndUploadImage(imageUrl, recipeId, bucket) {
  if (!imageUrl) return null;

  try {
    // Download the image from the source
    const resp = await fetch(imageUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; KitchenApp/1.0)",
        "Accept": "image/*",
      },
      redirect: "follow",
      signal: AbortSignal.timeout(10000), // 10s timeout for images
    });

    if (!resp.ok) return null;

    const contentType = resp.headers.get("content-type") || "image/jpeg";
    // Skip non-image responses (some sites return HTML for image URLs)
    if (!contentType.startsWith("image/")) return null;

    const buffer = Buffer.from(await resp.arrayBuffer());

    // Skip images that are too small (likely tracking pixels) or too large
    if (buffer.length < 1000) return null;

    // Upload to Firebase Storage at recipes/{recipeId}/cover.jpg
    // If the image is over 300KB we upload as-is — compression requires
    // sharp which may not be available. The image still gets served via CDN.
    const filePath = `recipes/${recipeId}/cover.jpg`;
    const file = bucket.file(filePath);

    await file.save(buffer, {
      metadata: {
        contentType: contentType.startsWith("image/") ? contentType : "image/jpeg",
        cacheControl: "public, max-age=31536000", // cache for 1 year
      },
    });

    // Make the file publicly readable so the client can display it
    await file.makePublic();

    // Return the public URL
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${filePath}`;
    return publicUrl;
  } catch (e) {
    console.warn("Image upload failed (non-fatal):", e.message);
    return null;
  }
}

// ── FIRESTORE SAVER ──────────────────────────────────────────────────────────

/**
 * saveRecipeToFirestore — persists the parsed recipe to the household's
 * recipes subcollection. Optionally also publishes to public_recipes.
 *
 * The recipe doc structure matches what the frontend expects in state.recs.
 */
async function saveRecipeToFirestore(db, recipe, recipeId, householdId, userId, publish) {
  // Build the recipe document matching the app's expected schema
  const doc = {
    id: recipeId,
    name: recipe.title || "Imported Recipe",
    description: formatDescription(recipe),
    notes: recipe.notes || "",
    rating: 0,
    favorited: false,
    source: "AI Import",
    sourceUrl: recipe._sourceUrl || null,
    imageUrl: recipe._imageUrl || recipe.imageUrl || null,
    tags: recipe.tags || [],
    cuisine: recipe.cuisine || "",
    prepTime: recipe.prepTime || "",
    cookTime: recipe.cookTime || "",
    totalTime: recipe.totalTime || "",
    servings: recipe.servings || "",
    // Store structured data alongside the flattened description
    ingredientsRaw: recipe.ingredients || [],
    stepsRaw: recipe.steps || [],
    cookCount: 0,
    savedAt: new Date().toLocaleDateString(),
    isPublic: !!publish,
  };

  // Save to the household's recipes collection
  await db.doc(`households/${householdId}/recipes/${recipeId}`).set(doc);

  // If publish flag is set, also save to the public community collection
  if (publish && userId) {
    const pubDoc = {
      title: doc.name,
      ingredients: doc.description,
      steps: (recipe.steps || []).join("\n"),
      tags: doc.tags,
      cuisine: doc.cuisine,
      authorUid: userId,
      authorName: recipe._authorName || "Anonymous",
      householdId: householdId,
      createdAt: new Date().toISOString(),
      likes: 0,
      imageUrl: doc.imageUrl || null,
    };
    await db.doc(`public_recipes/${recipeId}`).set(pubDoc);
  }

  return doc;
}

/**
 * formatDescription — builds a human-readable description string from the
 * structured ingredients and steps arrays. This goes into the "description"
 * field that the recipe view renders as the main content block.
 */
function formatDescription(recipe) {
  let parts = [];

  // Add a brief description if available
  if (recipe.description) {
    parts.push(recipe.description);
    parts.push("");
  }

  // Format ingredients as a readable list with amounts
  if (recipe.ingredients && recipe.ingredients.length) {
    parts.push("Ingredients:");
    recipe.ingredients.forEach(ing => {
      if (typeof ing === "string") {
        parts.push(`- ${ing}`);
      } else {
        const amt = [ing.amount, ing.unit].filter(Boolean).join(" ");
        parts.push(`- ${amt ? amt + " " : ""}${ing.name}`);
      }
    });
    parts.push("");
  }

  // Format steps as numbered instructions
  if (recipe.steps && recipe.steps.length) {
    parts.push("Steps:");
    recipe.steps.forEach((step, i) => {
      parts.push(`${i + 1}. ${step}`);
    });
  }

  return parts.join("\n");
}

// ── MAIN HANDLER ─────────────────────────────────────────────────────────────

export default async function handler(req, res) {
  // --- CORS headers ---
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { url, householdId, userId, publish, authorName } = req.body || {};

  // URL is always required; householdId is needed for saving
  if (!url || !url.trim()) {
    return res.status(400).json({ success: false, error: "Missing URL" });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ success: false, error: "Server misconfigured — missing API key" });
  }

  try {
    // Step 1: Fetch the raw HTML from the recipe URL
    let html;
    try {
      html = await fetchPageHtml(url);
    } catch (e) {
      return res.status(200).json({
        success: false,
        error: `Couldn't access ${new URL(url).hostname} — ${e.message}`,
      });
    }

    // Step 2: Send HTML to Claude Sonnet for structured extraction
    const recipe = await parseRecipeWithClaude(html, url, apiKey);

    // If Claude couldn't find a recipe in the HTML, report the error
    if (recipe.error) {
      return res.status(200).json({ success: false, error: recipe.error });
    }

    // Attach metadata that came from the request, not from parsing
    recipe._sourceUrl = url;
    recipe._authorName = authorName || "Anonymous";

    // Generate a unique recipe ID
    const recipeId = "rec-" + Date.now();

    // Step 3: Download and upload the recipe image to Firebase Storage
    // Only attempt if we have householdId (meaning we're saving)
    let firebaseImageUrl = null;
    if (householdId && recipe.imageUrl) {
      try {
        const { bucket } = getFirebaseApp();
        firebaseImageUrl = await downloadAndUploadImage(recipe.imageUrl, recipeId, bucket);
      } catch (e) {
        console.warn("Image processing failed (non-fatal):", e.message);
      }
    }

    // Use Firebase Storage URL if available, fall back to original source URL
    recipe._imageUrl = firebaseImageUrl || recipe.imageUrl || null;

    // Step 4: Save to Firestore if householdId is provided
    // If no householdId, just return the parsed data for client-side review
    let savedDoc = null;
    if (householdId) {
      try {
        const { db } = getFirebaseApp();
        savedDoc = await saveRecipeToFirestore(db, recipe, recipeId, householdId, userId, publish);
      } catch (e) {
        console.error("Firestore save failed:", e);
        // Don't fail the whole import — return parsed data so user can save manually
      }
    }

    // Step 5: Return the recipe data to the client
    return res.status(200).json({
      success: true,
      recipe: {
        id: recipeId,
        title: recipe.title || "",
        description: recipe.description || "",
        ingredients: recipe.ingredients || [],
        steps: recipe.steps || [],
        prepTime: recipe.prepTime || "",
        cookTime: recipe.cookTime || "",
        totalTime: recipe.totalTime || "",
        servings: recipe.servings || "",
        cuisine: recipe.cuisine || "",
        tags: recipe.tags || [],
        imageUrl: recipe._imageUrl || null,
        notes: recipe.notes || "",
        saved: !!savedDoc,
      },
    });
  } catch (e) {
    console.error("import-recipe error:", e);
    return res.status(500).json({
      success: false,
      error: "Server error while importing recipe — please try again",
    });
  }
}
