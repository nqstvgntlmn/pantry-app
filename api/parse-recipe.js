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
 */
export default async function handler(req, res) {
  // --- CORS headers ---
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { ingredients, instructions, title } = req.body || {};

  // Need at least some text to parse
  if (!ingredients && !instructions) {
    return res.status(400).json({ success: false, error: "No recipe content provided" });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ success: false, error: "Server misconfigured — missing API key" });
  }

  try {
    // Build the system prompt that instructs Claude how to restructure recipe content
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

    // Call Claude Sonnet for intelligent restructuring
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
        messages: [{ role: "user", content: userContent }],
      }),
    });

    const data = await resp.json();

    // Handle API errors — classify rate limits separately for client retry logic
    if (data.error) {
      const msg = data.error.message || JSON.stringify(data.error);
      if (data.error.type === "rate_limit_error" || resp.status === 429) {
        return res.status(429).json({ success: false, error: "Rate limit — please wait and retry", reason: "rate_limit" });
      }
      return res.status(500).json({ success: false, error: `AI error: ${msg}`, reason: "api_error" });
    }

    // Extract text from Claude's response
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
      else return res.status(500).json({ success: false, error: "AI returned non-JSON response" });
    }

    // Return the restructured recipe data
    return res.status(200).json({
      success: true,
      result: {
        ingredients: parsed.ingredients || [],
        steps: parsed.steps || [],
      },
    });
  } catch (e) {
    console.error("parse-recipe error:", e);
    return res.status(500).json({
      success: false,
      error: `Server error — ${e.message || "please try again"}`,
    });
  }
}
