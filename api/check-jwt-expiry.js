// ── SHOPRITE JWT EXPIRY MONITOR ──────────────────────────────────────────────
// Vercel cron job that runs daily to check whether the ShopRite service JWT
// is approaching its expiration date. When the JWT is within 7 days of expiry,
// it sends an email alert via the Resend API so we can refresh it in time.
//
// The ShopRite service JWT is a pre-shared credential embedded in ShopRite's
// Angular coupon center app. It authenticates our server as a valid coupon
// client. When it expires, all coupon features (list, clip, clipped) break.
//
// ── CRON SCHEDULE ───────────────────────────────────────────────────────────
// Configured in vercel.json to run once daily at 9:00 AM UTC.
// Vercel invokes this endpoint via GET with an Authorization header containing
// the CRON_SECRET env var to prevent unauthorized triggers.
//
// ── EMAIL DELIVERY ──────────────────────────────────────────────────────────
// Uses Resend (resend.com) — a simple email API with a generous free tier.
// Requires RESEND_API_KEY set as a Vercel environment variable.
// Sends from Resend's default onboarding address (onboarding@resend.dev)
// until a custom domain is configured.
//
// Env vars (set in Vercel):
//   CRON_SECRET     — Vercel cron secret for auth (auto-set by Vercel)
//   RESEND_API_KEY  — API key from resend.com for sending alert emails

// ── ShopRite Service JWT Expiration Date ────────────────────────────────────
// Decoded from the JWT payload: exp: 1776863263 → 2026-04-23T00:07:43Z
// IMPORTANT: Update this constant whenever the service JWT is refreshed.
const JWT_EXPIRY_DATE = new Date("2026-04-23T00:07:43Z");

// ── Alert Configuration ─────────────────────────────────────────────────────
// Number of days before expiry to start sending alerts
const ALERT_THRESHOLD_DAYS = 7;

// Email recipient — Bora's email for JWT renewal alerts
const ALERT_EMAIL = "byisguder@gmail.com";

/**
 * calculateDaysUntilExpiry() — Compute how many full days remain until
 * the ShopRite service JWT expires. Returns a negative number if already expired.
 */
function calculateDaysUntilExpiry() {
  const now = new Date();
  const diffMs = JWT_EXPIRY_DATE.getTime() - now.getTime();
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

/**
 * sendAlertEmail(daysRemaining) — Send an expiry warning email via Resend API.
 * Uses a simple POST to Resend's /emails endpoint with the alert message.
 * Returns the Resend API response for logging.
 */
async function sendAlertEmail(daysRemaining) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY not configured — cannot send alert email");
  }

  // Build a clear, actionable subject line and body
  const isExpired = daysRemaining <= 0;
  const subject = isExpired
    ? "🚨 Kitchen App: ShopRite JWT has EXPIRED!"
    : `⚠️ Kitchen App: ShopRite JWT expires in ${daysRemaining} day${daysRemaining === 1 ? "" : "s"} — time to refresh`;

  const body = isExpired
    ? `The ShopRite service JWT expired ${Math.abs(daysRemaining)} day(s) ago.\n\n`
      + `Expiry date: ${JWT_EXPIRY_DATE.toISOString()}\n\n`
      + `All ShopRite coupon features (list, clip, clipped) are currently broken.\n`
      + `Please extract a fresh JWT from the ShopRite coupon center Angular app and update the SERVICE_JWT constant in api/shoprite-coupons.js.`
    : `The ShopRite service JWT expires in ${daysRemaining} day${daysRemaining === 1 ? "" : "s"}.\n\n`
      + `Expiry date: ${JWT_EXPIRY_DATE.toISOString()}\n\n`
      + `To refresh it:\n`
      + `1. Open ShopRite's coupon center in a browser\n`
      + `2. Open DevTools → Network tab\n`
      + `3. Look for the Authorization: Bearer header on /getToken/auth/login requests\n`
      + `4. Update the SERVICE_JWT constant in api/shoprite-coupons.js\n`
      + `5. Update JWT_EXPIRY_DATE in api/check-jwt-expiry.js with the new exp date`;

  // Send via Resend's REST API — single POST, no SDK needed
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Kitchen App <onboarding@resend.dev>",
      to: [ALERT_EMAIL],
      subject,
      text: body,
    }),
  });

  const result = await res.text();
  console.log("[JWT Monitor] Resend response:", res.status, result);

  if (!res.ok) {
    throw new Error(`Resend API error (HTTP ${res.status}): ${result}`);
  }

  return result;
}

// ── Main Handler ────────────────────────────────────────────────────────────

export default async function handler(req, res) {
  // Vercel cron jobs are invoked via GET with an Authorization header
  // containing the CRON_SECRET. This prevents unauthorized triggers.
  if (req.method !== "GET") {
    return res.status(405).json({ error: "GET only" });
  }

  // Verify the cron secret to prevent unauthorized invocations.
  // Vercel automatically sends Authorization: Bearer <CRON_SECRET> for cron jobs.
  const authHeader = req.headers["authorization"];
  const expectedSecret = process.env.CRON_SECRET;
  if (expectedSecret && authHeader !== `Bearer ${expectedSecret}`) {
    console.warn("[JWT Monitor] Unauthorized request — invalid or missing CRON_SECRET");
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const daysRemaining = calculateDaysUntilExpiry();
    console.log(`[JWT Monitor] ShopRite JWT expires on ${JWT_EXPIRY_DATE.toISOString()} — ${daysRemaining} days remaining`);

    // Only send an alert if within the threshold window or already expired
    if (daysRemaining <= ALERT_THRESHOLD_DAYS) {
      console.log(`[JWT Monitor] Within ${ALERT_THRESHOLD_DAYS}-day threshold — sending alert email`);
      await sendAlertEmail(daysRemaining);

      return res.json({
        status: "alert_sent",
        daysRemaining,
        expiryDate: JWT_EXPIRY_DATE.toISOString(),
        message: `Alert email sent to ${ALERT_EMAIL}`,
      });
    }

    // JWT still has plenty of time — no action needed
    return res.json({
      status: "ok",
      daysRemaining,
      expiryDate: JWT_EXPIRY_DATE.toISOString(),
      message: `JWT is valid for ${daysRemaining} more days — no alert needed`,
    });
  } catch (err) {
    console.error("[JWT Monitor] Error:", err);
    return res.status(500).json({
      error: "JWT expiry check failed: " + err.message,
    });
  }
}
