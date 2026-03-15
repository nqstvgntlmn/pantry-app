// ── RECIPE PARSE/RESTRUCTURE API (Claude AI-Powered) ────────────────────────
// Serverless endpoint that takes raw recipe text (ingredients + instructions)
// and restructures it using Claude AI into clean, properly separated content.
//
// Used by:
//   1. "Parse with AI" button in recipe edit screen — restructure messy recipes
//   2. "Scan all recipes for issues" → "Fix all flagged" — batch auto-fix
//
// Request:  POST /api/parse-recipe
//   { ingredients: "raw text...", instructions: "raw text...", title: "recipe name" }
//
// Response: { success: true, result: { ingredients: [...], steps: [...] } }
//      or:  { success: false, error: "..." }

/**
 * handler — main API entry point for recipe parsing/restructuring.
 * Sends raw recipe text to Claude Sonnet for intelligent restructuring.
 * Returns clean ingredients array and numbered steps array.
 * Wrapped in full try/catch with step-by-step logging for Vercel diagnostics.
 */
export default async function handler(req, res) {
  // --- CORS headers ---
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    // Step 1: Validate request body
    console.log("[parse-recipe] Step 1: Validating request body");
    const { ingredients, instructions, title } = req.body || {};

    // Need at least some text to parse
    if (!ingredients && !instructions) {
      console.log("[parse-recipe] No recipe content provided — returning 400");
      return res.status(400).json({ success: false, error: "No recipe content provided" });
    }

    console.log("[parse-recipe] Request received — title:", title || "(no title)", "ingredients length:", (ingredients || "").length, "instructions length:", (instructions || "").length);

    // Step 2: Verify API key is configured
    console.log("[parse-recipe] Step 2: Checking API key");
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      console.error("[parse-recipe] ANTHROPIC_API_KEY is not set");
      return res.status(500).json({ success: false, error: "Server misconfigured — missing API key" });
    }

    // Step 3: Build prompts for Claude
    console.log("[parse-recipe] Step 3: Building prompts");

    // System prompt instructs Claude how to restructure recipe content
    const systemPrompt = `You are a recipe restructuring engine. Given raw recipe text (possibly messy, mixed up, or poorly formatted), restructure it into clean, properly separated ingredients and instructions. Return ONLY a valid JSON object — no markdown fences, no extra text.

Return this exact JSON shape:
{
  "ingredients": [
    { "name": "garlic, minced", "amount": "2", "unit": "cloves" }
  ],
  "steps": [
    "Step 1 text...",
    "Step 2 text..."
  ]
}

CRITICAL RULES:
- Every ingredient entry MUST contain a real food item (e.g. "flour", "garlic", "olive oil").
- NEVER create an ingredient entry that is ONLY a preparation method or modifier. These must NEVER appear as standalone ingredients: "Finely Chopped", "Drained", "For Serving", "Sliced", "To Taste", "Optional", "As Needed", "For Garnish", "Divided", "Softened", "Melted", "Fresh", "Dried", "Room Temperature", etc.
- If a line has a food item WITH a preparation note (e.g. "2 cloves garlic, minced"), keep the prep as part of the name: { "name": "garlic, minced", "amount": "2", "unit": "cloves" }.
- If a line is ONLY a prep method with no food item, DISCARD it entirely.
- If instruction/direction text appears in the ingredients section, move it to steps.
- If ingredient text appears in the instructions section, move it to ingredients.
- For ingredients: split into name, amount, and unit. If no amount/unit, leave as empty strings.
- For steps: return as an array of clear, concise strings in order. Each step should be one logical action.
- Combine duplicate ingredients where sensible (e.g. "1 cup flour" + "2 tbsp flour" = "1 cup + 2 tbsp flour" or keep separate if used at different steps).
- Remove any section headers like "INGREDIENTS:", "DIRECTIONS:", "DETAILS:", etc.
- Clean up formatting: remove bullet points, asterisks, extra whitespace.`;

    // Combine the raw text into a single prompt for Claude
    const userContent = `Restructure this recipe into clean ingredients and steps.

Recipe title: ${title || "Unknown"}

Raw ingredients text:
${ingredients || "(none provided)"}

Raw instructions/directions text:
${instructions || "(none provided)"}`;

    // Step 4: Call Claude Sonnet API for intelligent restructuring
    console.log("[parse-recipe] Step 4: Calling Anthropic API");
    let resp;
    try {
      resp = await fetch("https://api.anthropic.com/v1/messages", {
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
          messages: [{ role: "user", content: userContent }],
        }),
      });
    } catch (fetchErr) {
      // Network-level failure (DNS, timeout, connection refused, etc.)
      console.error("[parse-recipe] Fetch to Anthropic API failed:", fetchErr.message);
      return res.status(502).json({
        success: false,
        error: `Failed to reach AI service — ${fetchErr.message}`,
        reason: "fetch_error",
      });
    }

    console.log("[parse-recipe] Anthropic API responded — status:", resp.status);

    // Step 5: Parse the API response body
    console.log("[parse-recipe] Step 5: Parsing API response body");
    let data;
    try {
      data = await resp.json();
    } catch (jsonErr) {
      // Response body was not valid JSON (rare, but possible on 5xx errors)
      console.error("[parse-recipe] Failed to parse Anthropic response as JSON:", jsonErr.message);
      return res.status(502).json({
        success: false,
        error: "AI service returned an invalid response",
        reason: "api_error",
      });
    }

    // Step 6: Check for API-level errors in the response
    console.log("[parse-recipe] Step 6: Checking for API errors");
    if (data.error) {
      const msg = data.error.message || JSON.stringify(data.error);
      console.error("[parse-recipe] Anthropic API error:", msg, "type:", data.error.type, "status:", resp.status);

      // Classify rate limits separately so the client can auto-retry with backoff
      if (data.error.type === "rate_limit_error" || resp.status === 429) {
        return res.status(429).json({ success: false, error: "Rate limit — please wait and retry", reason: "rate_limit" });
      }
      return res.status(500).json({ success: false, error: `AI error: ${msg}`, reason: "api_error" });
    }

    // Step 7: Extract text content from Claude's response blocks
    console.log("[parse-recipe] Step 7: Extracting text from response content blocks");
    const text = (data.content || [])
      .filter(b => b.type === "text")
      .map(b => b.text)
      .join("");

    if (!text) {
      console.error("[parse-recipe] No text content in API response. Full response:", JSON.stringify(data).slice(0, 500));
      return res.status(500).json({ success: false, error: "AI returned an empty response", reason: "empty_response" });
    }

    console.log("[parse-recipe] Got text response, length:", text.length);

    // Step 8: Parse the JSON from Claude's text output
    // Try direct parse first, fall back to regex extraction for wrapped JSON
    console.log("[parse-recipe] Step 8: Parsing JSON from AI response");
    let parsed;
    try {
      parsed = JSON.parse(text.replace(/```json|```/g, "").trim());
    } catch (directParseErr) {
      console.log("[parse-recipe] Direct JSON parse failed, trying regex extraction:", directParseErr.message);
      const m = text.match(/\{[\s\S]*\}/);
      if (m) {
        try {
          parsed = JSON.parse(m[0]);
        } catch (regexParseErr) {
          console.error("[parse-recipe] Regex-extracted JSON also failed to parse:", regexParseErr.message, "Extracted:", m[0].slice(0, 200));
          return res.status(500).json({ success: false, error: "AI returned malformed JSON", reason: "parse_error" });
        }
      } else {
        console.error("[parse-recipe] No JSON object found in AI response. Text:", text.slice(0, 300));
        return res.status(500).json({ success: false, error: "AI returned non-JSON response", reason: "parse_error" });
      }
    }

    // Step 9: Return the restructured recipe data
    console.log("[parse-recipe] Step 9: Success — returning", (parsed.ingredients || []).length, "ingredients and", (parsed.steps || []).length, "steps");
    return res.status(200).json({
      success: true,
      result: {
        ingredients: parsed.ingredients || [],
        steps: parsed.steps || [],
      },
    });
  } catch (e) {
    // Outer catch — handles any unexpected errors not caught by inner try/catches
    console.error("[parse-recipe] Unhandled error:", e.message, "stack:", e.stack);
    return res.status(500).json({
      success: false,
      error: `Server error — ${e.message || "please try again"}`,
      reason: "unknown",
    });
  }
}
