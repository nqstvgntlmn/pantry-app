// ── DEALS API PROXY ──────────────────────────────────────────────────────────
// Serverless function that fetches REAL local grocery deals from the Flipp API.
// Flipp aggregates weekly flyer/circular data from hundreds of US grocery chains
// including ShopRite, Stop & Shop, Walmart, Target, Aldi, and many more.
//
// No API key is required — Flipp's search endpoint is publicly accessible.
// Results are actual store circular data, not AI-generated estimates.
//
// Request body: { zipcode: "08817", query: "milk" }
// Response:     { deals: [...], sources: ["Flipp"] }

const FLIPP_BASE = "https://backflipp.wishabi.com/flipp/items/search";

/**
 * fetchFlippDeals(zipcode, query) — Searches Flipp's aggregated flyer/circular
 * database for products matching the query near the given zipcode.
 * Returns an array of normalized deal objects ready for the frontend.
 *
 * Flipp covers most major US retailers: ShopRite, Stop & Shop, Walmart, Target,
 * Aldi, Costco, CVS, Walgreens, and hundreds more.
 */
async function fetchFlippDeals(zipcode, query) {
  const url = `${FLIPP_BASE}?locale=en-us&postal_code=${encodeURIComponent(zipcode)}&q=${encodeURIComponent(query)}`;

  const res = await fetch(url, {
    headers: {
      "Accept": "application/json",
      "User-Agent": "KitchenApp/1.0"
    }
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error("Flipp API error (HTTP " + res.status + "): " + err.substring(0, 200));
  }

  const data = await res.json();
  const deals = [];

  // Process ecom_items — these are real product listings from store catalogs
  if (data.ecom_items && Array.isArray(data.ecom_items)) {
    for (const item of data.ecom_items) {
      // Skip items without pricing or marked as hidden
      if (!item.current_price || item.display === "hide") continue;

      const hasDiscount = item.original_price && item.original_price > item.current_price;

      deals.push({
        name: item.name || "",
        brand: "",
        store: item.merchant || "Store",
        storeAddress: "",
        regular: item.original_price ? "$" + Number(item.original_price).toFixed(2) : null,
        sale_price: "$" + Number(item.current_price).toFixed(2),
        onSale: !!hasDiscount,
        savings: hasDiscount
          ? "$" + (item.original_price - item.current_price).toFixed(2) + " off"
          : null,
        image: item.image_url || null,
        size: item.description || "",
        source: "Flipp",
        merchantLogo: item.merchant_logo || null
      });
    }
  }

  // Process flyer ads — these are weekly circular/flyer items from local stores
  if (data.ads && Array.isArray(data.ads)) {
    for (const ad of data.ads) {
      if (!ad.price && !ad.sale_price && !ad.pre_price_text) continue;

      // Parse price from various Flipp ad formats
      const salePrice = ad.sale_price || ad.price || null;
      const regPrice = ad.pre_price_text || ad.original_price || null;
      const hasAdDiscount = regPrice && salePrice && parseFloat(regPrice) > parseFloat(salePrice);

      deals.push({
        name: ad.name || ad.description || "",
        brand: ad.brand || "",
        store: ad.merchant || "Store",
        storeAddress: "",
        regular: regPrice ? "$" + parseFloat(regPrice).toFixed(2) : null,
        sale_price: salePrice ? "$" + parseFloat(salePrice).toFixed(2) : null,
        onSale: !!hasAdDiscount,
        savings: hasAdDiscount
          ? "$" + (parseFloat(regPrice) - parseFloat(salePrice)).toFixed(2) + " off"
          : (ad.discount_text || null),
        image: ad.image_url || null,
        size: "",
        source: "Flipp"
      });
    }
  }

  return deals;
}

export default async function handler(req, res) {
  // Standard CORS headers for the frontend to call this endpoint
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });

  const { zipcode, query } = req.body || {};

  // Validate required parameters
  if (!zipcode) return res.status(400).json({ error: "zipcode is required — set it in Settings" });
  if (!query) return res.status(400).json({ error: "search query is required" });

  try {
    // Fetch deals from Flipp (covers ShopRite, Stop & Shop, Walmart, Target, etc.)
    const deals = await fetchFlippDeals(zipcode, query);

    // Sort so on-sale items appear first (most relevant to users looking for deals)
    deals.sort((a, b) => (b.onSale ? 1 : 0) - (a.onSale ? 1 : 0));

    // Collect unique store names for the "nearby stores" display
    const storeSet = new Set();
    deals.forEach(d => { if (d.store) storeSet.add(d.store); });
    const stores = [...storeSet].map(name => ({ name }));

    return res.json({
      deals,
      stores,
      sources: ["Flipp"]
    });
  } catch (err) {
    console.error("Deals API error:", err);
    return res.status(500).json({ error: "Failed to fetch deals: " + err.message });
  }
}
