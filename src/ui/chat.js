// ── CHAT SCREEN ──────────────────────────────────────────────────────────────
// AI kitchen assistant — Claude-powered chat that has full context about the
// household's inventory, meal plan, dietary restrictions, and cooking history.
// This module builds the system prompt, handles sending/receiving messages,
// and renders the chat UI bubbles.

import { state } from '../state.js';
import { g, tk, wDates, xSt, ll, showNotif } from '../helpers.js';
import { svr } from '../db.js';
// g      = getElementById shorthand
// tk     = token/key helper
// wDates = returns array of Date objects for the current week
// xSt    = returns expiry status object { c: class, l: label } for a date
// ll     = label lookup — converts internal keys like "fridge" to display names

// ─── kitCtx ──────────────────────────────────────────────────────────────────
// Builds the full system prompt string that gives Claude all the context it
// needs to act as a kitchen assistant. This is called fresh on every message
// so the AI always sees the latest inventory, meal plan, and preferences.
export function kitCtx() {
  // Build an inventory summary grouped by storage location (fridge/freezer/pantry).
  // Each section lists items with their quantity and unit, e.g. "FRIDGE: Milk (1 gal), Eggs (12 ct)"
  // Empty sections are filtered out so we don't waste prompt tokens.
  const sec = ["fridge", "freezer", "pantry"].map(loc => {
    const its = state.inv.filter(i => i.location === loc);
    return its.length ? ll(loc).toUpperCase() + ": " + its.map(i => `${i.name} (${i.qty} ${i.unit})`).join(", ") : "";
  }).filter(Boolean).join("\n");

  // Collect items that are expiring soon or already expired so Claude can
  // prioritize using them in suggestions (reduce food waste).
  const ex = state.inv.filter(i => { const s = xSt(i.expiry); return s && (s.c === "expiring" || s.c === "expired"); }).map(i => { const s = xSt(i.expiry); return `${i.name} (${s.l})`; }).join(", ");

  // Gather this week's meal plan entries. wDates() returns the 7 days of the
  // current week; we look up each date in state.mp (meal plan map keyed by
  // ISO date string) and format as "Mon: Pasta, Wed: Stir fry", etc.
  const ms = wDates().map(d => { const k = d.toISOString().split("T")[0]; return state.mp[k] ? `${d.toLocaleDateString("en-US", { weekday: "short" })}: ${state.mp[k]}` : ""; }).filter(Boolean).join(", ");

  // Pull out favourite or highly-rated recipes so Claude can reference them
  // and suggest variations the family already enjoys.
  const favs = state.recs.filter(r => r.favorited || r.rating >= 4).map(r => `${r.name}${r.rating ? ` (${r.rating}★)` : ""}`).join(", ");

  // Compile dietary restrictions from user config flags into a comma-separated
  // string, e.g. "no pork, gluten-free". state.cfg.other is a free-text field.
  const restr = [state.cfg.nopork ? "no pork" : null, state.cfg.noshellfish ? "no shellfish" : null, state.cfg.vegetarian ? "vegetarian" : null, state.cfg.glutenfree ? "gluten-free" : null, state.cfg.other].filter(Boolean).join(", ");

  // Last 7 cooked meals — passed to Claude so it avoids suggesting repeats.
  const recent = state.cookLog.slice(0, 7).map(e => e.name).join(", ");

  // Assemble the final system prompt. Template literals build a structured
  // prompt with labeled sections. Empty sections are conditionally omitted.
  return `You are a helpful kitchen assistant for a family in Edison NJ.
INVENTORY:\n${sec || "Empty."}
${ex ? "EXPIRING SOON: " + ex : ""}
${ms ? "MEAL PLAN: " + ms : ""}
${favs ? "FAVOURITE RECIPES: " + favs : ""}
${recent ? "RECENTLY COOKED (avoid repeating): " + recent : ""}
HOUSEHOLD: ${state.cfg.name}, Adults: ${state.cfg.adults}, Kids: ${state.cfg.kids}, Restrictions: ${restr || "none"}, Cuisines: ${state.cfg.cuisines}, Cook time: ${state.cfg.cookTime}.
CULTURAL BACKGROUND: Bushra is Bangladeshi, Bora is Turkish — authentically lean toward these cuisines (Bengali spices, mustard oil, dal, hilsa-style fish; Turkish kebabs, meze, börek, yogurt sauces, lentil soups). Suggest these when inventory allows.
Be concise. Use what they have. Suggest variety — lean toward Bangladeshi and Turkish — avoid repeating recent meals. Format grocery lists as bullet points starting "- ".

RECIPE FORMAT RULE: When suggesting recipes (any time you provide a recipe with ingredients/steps), wrap EACH recipe in :::RECIPE::: and :::END::: markers with a JSON object containing: title, ingredients (newline-separated list), steps (numbered newline-separated list), cuisine, cookTime, servings.
Example:
:::RECIPE:::
{"title":"Dal Tadka","ingredients":"1 cup red lentils\\n2 tomatoes, chopped\\n1 tsp cumin seeds\\n1 tsp turmeric","steps":"1. Wash and boil lentils until soft\\n2. Heat oil, add cumin seeds\\n3. Add tomatoes, cook until soft\\n4. Combine with lentils and simmer","cuisine":"Bangladeshi","cookTime":"30 min","servings":4}
:::END:::
Always use this format so the app can offer a one-tap save button. You can include normal text before/after recipe blocks.`;
}

// ─── formatResponse ──────────────────────────────────────────────────────────
// Converts Claude's plain-text markdown response into safe HTML for display.
// Handles: HTML escaping, bold (**text**), numbered lists, bulleted lists,
// and line breaks. This is intentionally simple — not a full markdown parser.
function formatResponse(text) {
  return text
    // First, escape HTML entities to prevent XSS / rendering issues
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    // Convert markdown bold (**text**) to <strong> tags
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    // Convert numbered list lines (e.g. "1. Item") to <li> elements
    .replace(/^\d+\.\s+(.+)$/gm, "<li>$1</li>")
    // Convert bulleted list lines (- or • prefix) to <li> elements
    .replace(/^[-•]\s+(.+)$/gm, "<li>$1</li>")
    // Convert remaining newlines to <br> for proper spacing
    .replace(/\n/g, "<br>");
}

// ─── sendChat ────────────────────────────────────────────────────────────────
// Main chat send handler. Reads the user's typed message, sends it to the
// Claude API proxy along with the full conversation history and system prompt,
// then displays Claude's response as a chat bubble.
export async function sendChat() {
  // Grab the chat input textarea by its DOM id ("chi" = chat input)
  const input = g("chi");
  const msg = input.value.trim();
  if (!msg) return; // Don't send empty messages

  // Clear the input field and auto-resize it back to default height
  input.value = "";
  ar(input);

  // Push the user's message into the conversation history (state.chat persists
  // across the session) and render it as a bubble in the UI
  state.chat.push({ role: "user", content: msg });
  appendBubble("user", msg);

  // Disable the send button while waiting for a response to prevent double-sends
  const csb = g("csb"); // "csb" = chat send button
  if (csb) csb.disabled = true;

  // Show a "Thinking…" indicator bubble so the user knows the request is in flight.
  // Uses a unique ID so we can remove this specific element once the response arrives.
  const thinkingId = "thinking-" + Date.now();
  const msgs = g("chmsgs"); // "chmsgs" = chat messages container
  msgs.innerHTML += `<div class="cb asst thinking" id="${thinkingId}">Thinking…</div>`;
  msgs.scrollTop = msgs.scrollHeight; // Auto-scroll to bottom

  try {
    // POST to the server-side proxy which forwards the request to the Claude API.
    // The proxy exists to keep the API key server-side (not exposed in the browser).
    const r = await fetch("/api/proxy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",   // Using Haiku for fast, cheap responses
        max_tokens: 800,                       // Cap response length to keep answers concise
        system: kitCtx(),                      // Fresh system prompt with latest inventory context
        messages: state.chat.map(m => ({ role: m.role, content: m.content })) // Full conversation history
      })
    });

    const data = await r.json();

    // Extract the text from Claude's response. The API returns an array of
    // content blocks; we grab the first one's text, or fall back to an error message.
    const text = (data.content && data.content[0] && data.content[0].text) || "Sorry, I couldn't process that.";

    // Remove the "Thinking…" indicator now that we have a real response
    const thinkEl = g(thinkingId);
    if (thinkEl) thinkEl.remove();

    // Store the assistant's reply in conversation history and display it
    state.chat.push({ role: "assistant", content: text });
    appendBubble("assistant", text);
  } catch (e) {
    // Network error or proxy failure — remove thinking indicator and show error
    const thinkEl = g(thinkingId);
    if (thinkEl) thinkEl.remove();
    appendBubble("assistant", "Sorry, I couldn't reach Claude. Check your connection and try again.");
  }

  // Re-enable the send button now that the request cycle is complete
  if (csb) csb.disabled = false;
}

// ─── parseRecipeBlocks ───────────────────────────────────────────────────────
// Extracts structured recipe JSON blocks from Claude's response text.
// Returns { cleanText, recipes } where cleanText has the recipe blocks removed
// and recipes is an array of parsed recipe objects.
function parseRecipeBlocks(text) {
  const recipes = [];
  // Match :::RECIPE::: ... :::END::: blocks and extract the JSON inside
  const cleaned = text.replace(/:::RECIPE:::\s*([\s\S]*?)\s*:::END:::/g, (_, json) => {
    try {
      const r = JSON.parse(json.trim());
      if (r.title) recipes.push(r);
    } catch { /* skip malformed JSON */ }
    return ""; // remove the block from display text
  });
  return { cleanText: cleaned.trim(), recipes };
}

// ─── renderRecipeCard ────────────────────────────────────────────────────────
// Builds HTML for a recipe suggestion card with title, preview info, and
// a one-tap "Add to My Recipes" button. The recipe data is encoded in the
// button's data attribute so importChatRecipe() can read it on click.
function renderRecipeCard(recipe) {
  const dataStr = JSON.stringify(recipe).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
  const ingPreview = (recipe.ingredients || "").split("\n").slice(0, 3).join(", ");
  return `<div style="background:var(--card);border:1.5px solid var(--ac);border-radius:14px;padding:16px;margin:10px 0">
    <div style="font-family:'Fraunces',serif;font-size:1.1rem;font-weight:300;color:var(--ac);margin-bottom:6px">${(recipe.title || "").replace(/</g, "&lt;")}</div>
    ${recipe.cuisine ? `<div style="font-size:.72rem;color:var(--mt);margin-bottom:6px">${recipe.cuisine}${recipe.cookTime ? " · " + recipe.cookTime : ""}${recipe.servings ? " · " + recipe.servings + " servings" : ""}</div>` : ""}
    ${ingPreview ? `<div style="font-size:.8rem;color:var(--tx2);line-height:1.5;margin-bottom:10px">${ingPreview.replace(/</g, "&lt;")}…</div>` : ""}
    <button class="btn bp bsm" onclick="importChatRecipe(this)" data-recipe="${dataStr}">📖 Add to My Recipes</button>
  </div>`;
}

// ─── importChatRecipe ────────────────────────────────────────────────────────
// Called when the user taps "Add to My Recipes" on a chat recipe card.
// Parses the recipe JSON from the button's data attribute and saves it
// to the household's Firestore recipes collection.
export async function importChatRecipe(btn) {
  try {
    const recipe = JSON.parse(btn.dataset.recipe);
    const id = "rec-" + Date.now();
    // Build the description from ingredients + steps combined
    const desc = [recipe.ingredients || "", recipe.steps ? "\n\nSteps:\n" + recipe.steps : ""].join("").trim();
    await svr({
      id,
      name: recipe.title || "Untitled Recipe",
      rating: 0,
      favorited: false,
      notes: "",
      description: desc,
      source: "Claude Chat",
      sourceUrl: null,
      tags: [],
      cuisine: recipe.cuisine || "",
      cookTime: recipe.cookTime || "",
      servings: recipe.servings || "",
      cookCount: 0,
      savedAt: new Date().toLocaleDateString(),
      isPublic: false
    });
    btn.textContent = "✓ Saved!";
    btn.disabled = true;
    btn.style.background = "var(--gn)";
    showNotif("Recipe saved! 📖");
  } catch {
    showNotif("Couldn't save recipe");
  }
}

// ─── appendBubble ────────────────────────────────────────────────────────────
// Creates a chat bubble DOM element and appends it to the messages container.
// User messages are displayed as plain text; assistant messages are run through
// formatResponse() to render markdown-like formatting as HTML.
// If the assistant response contains :::RECIPE::: blocks, they're parsed out
// and rendered as interactive recipe cards with import buttons.
function appendBubble(role, text) {
  const msgs = g("chmsgs");
  if (!msgs) return;

  if (role === "assistant") {
    // Check for structured recipe blocks in Claude's response
    const { cleanText, recipes } = parseRecipeBlocks(text);

    // Render the text portion (if any) as a normal chat bubble
    if (cleanText) {
      const div = document.createElement("div");
      div.className = "cb asst";
      div.innerHTML = formatResponse(cleanText);
      msgs.appendChild(div);
    }

    // Render each recipe as an interactive card below the text
    recipes.forEach((r) => {
      const wrapper = document.createElement("div");
      wrapper.style.maxWidth = "88%";
      wrapper.style.alignSelf = "flex-start";
      wrapper.innerHTML = renderRecipeCard(r);
      msgs.appendChild(wrapper);
    });
  } else {
    // User messages: render as plain text
    const div = document.createElement("div");
    div.className = "cb user";
    div.innerHTML = text;
    msgs.appendChild(div);
  }

  msgs.scrollTop = msgs.scrollHeight;
}

// ─── sendPill ────────────────────────────────────────────────────────────────
// Handles clicks on suggestion "pill" buttons (pre-written prompts like
// "What can I cook tonight?"). Copies the pill's text into the input field
// and immediately sends it as a chat message.
export function sendPill(el) {
  const input = g("chi");
  if (input) input.value = el.textContent;
  sendChat();
}

// ─── clrChat ─────────────────────────────────────────────────────────────────
// Resets the chat to its initial state: clears conversation history from memory
// and replaces all chat bubbles with the default greeting message.
export function clrChat() {
  state.chat = [];
  const msgs = g("chmsgs");
  if (msgs) msgs.innerHTML = '<div class="cb asst">Hey! 👋 I know your full inventory, meal plan, and saved recipes. What do you need?</div>';
}

// ─── ar (auto-resize) ───────────────────────────────────────────────────────
// Auto-resizes a textarea element to fit its content, up to a max height of
// 120px. Called after typing and after clearing the input. Works by resetting
// height to "auto" (collapses to content size) then capping at 120px.
export function ar(el) {
  el.style.height = "auto";                              // Reset so scrollHeight reflects actual content
  el.style.height = Math.min(el.scrollHeight, 120) + "px"; // Grow to fit, but cap at 120px to avoid huge input
}
