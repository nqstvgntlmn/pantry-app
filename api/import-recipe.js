// ── RECIPE IMPORT API ────────────────────────────────────────────────────────
// Serverless function that extracts structured recipe data from any URL.
// Uses Claude with web_search tool to visit the page, then returns a
// complete recipe object with title, ingredients, steps, cuisine, cook time,
// and servings. Supports AllRecipes, NYT Cooking, Food Network, BBC Good Food,
// and any other recipe site.
//
// Request:  POST /api/import-recipe  { url: "https://..." }
// Response: { success: true, recipe: { title, ingredients, steps, cuisine, cookTime, servings, description, notes } }
//      or:  { success: false, error: "..." }

export default async function handler(req, res) {
  // --- CORS headers ---
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { url } = req.body || {};
  if (!url || !url.trim()) return res.status(400).json({ error: "Missing 'url' in request body" });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "Server misconfigured — missing API key" });

  try {
    // Build a detailed prompt that instructs Claude to extract full recipe structure
    const prompt = `Please fetch and read this recipe URL: ${url}

Extract the complete recipe and return ONLY a JSON object (no markdown fences, no extra text) with these fields:
{
  "title": "Full recipe name",
  "ingredients": "Each ingredient on its own line, with quantities",
  "steps": "Numbered steps, each on its own line",
  "cuisine": "Cuisine type (e.g. Italian, Turkish, American)",
  "cookTime": "Total cook time (e.g. 45 min, 1 hour)",
  "servings": "Number of servings (e.g. 4, 6-8)",
  "description": "Brief 1-2 sentence description of the dish",
  "notes": "Any useful tips, substitutions, or serving suggestions from the recipe"
}

If you cannot access the page, return: {"error":"Could not access this page"}`;

    // Call the Anthropic API with web_search tool enabled so Claude can visit the URL
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 1500,
        tools: [{ type: "web_search_20250305", name: "web_search" }],
        messages: [{ role: "user", content: prompt }]
      })
    });

    const data = await r.json();

    // Extract text blocks from Claude's response (skip tool_use blocks)
    const text = (data.content || [])
      .filter(b => b.type === "text")
      .map(b => b.text)
      .join("");

    // Parse the JSON from the response — try direct parse first, then
    // fall back to regex extraction in case Claude wrapped it
    let parsed;
    try {
      parsed = JSON.parse(text.replace(/```json|```/g, "").trim());
    } catch {
      const m = text.match(/\{[\s\S]*\}/);
      if (m) parsed = JSON.parse(m[0]);
      else return res.status(200).json({ success: false, error: "Couldn't parse recipe data from the page" });
    }

    // If Claude returned an error (e.g. couldn't access the page)
    if (parsed.error) {
      return res.status(200).json({ success: false, error: parsed.error });
    }

    return res.status(200).json({ success: true, recipe: parsed });
  } catch (e) {
    console.error("import-recipe error:", e);
    return res.status(500).json({ success: false, error: "Server error while importing recipe" });
  }
}
