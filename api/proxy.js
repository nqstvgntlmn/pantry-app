// ──────────────────────────────────────────────────────────────────────
// proxy.js — Vercel serverless function that proxies requests to the
// Anthropic (Claude) Messages API. This exists so the Anthropic API key
// stays on the server and is never exposed to the browser.
//
// The frontend sends the exact same JSON body that the Anthropic API
// expects; this handler just attaches the auth headers and forwards it.
// ──────────────────────────────────────────────────────────────────────

/**
 * Vercel serverless handler — accepts a POST with an Anthropic Messages
 * API payload, forwards it to Anthropic, and returns the response.
 */
export default async function handler(req, res) {
  // --- CORS headers so the browser frontend can call this endpoint ---
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Browsers send a preflight OPTIONS request before the real POST
  if (req.method === "OPTIONS") return res.status(200).end();
  // Only POST is valid — the Anthropic Messages API is POST-only anyway
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    // Forward the request body as-is to Anthropic's Messages API
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // API key is stored as a Vercel env var — never sent to the client
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        // Required by the Anthropic API to specify the protocol version
        "anthropic-version": "2023-06-01",
        // This header acknowledges that the request originates from a browser context
        "anthropic-dangerous-direct-browser-access": "true",
      },
      // Pass through the frontend's request body without modification
      body: JSON.stringify(req.body),
    });

    // Mirror whatever status code Anthropic returns (200, 400, 429, etc.)
    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (err) {
    // Catch network failures, DNS errors, timeouts, etc.
    return res.status(500).json({ error: { message: err.message } });
  }
}
