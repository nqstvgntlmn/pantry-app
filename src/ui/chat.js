// ── CHAT SCREEN ──────────────────────────────────────────────────────────────
// AI kitchen assistant — Claude with full inventory context

import { state } from '../state.js';
import { g, tk, wDates, xSt, ll } from '../helpers.js';

// kitCtx() — builds the full system prompt for Claude chat
export function kitCtx() {
  const sec = ["fridge", "freezer", "pantry"].map(loc => {
    const its = state.inv.filter(i => i.location === loc);
    return its.length ? ll(loc).toUpperCase() + ": " + its.map(i => `${i.name} (${i.qty} ${i.unit})`).join(", ") : "";
  }).filter(Boolean).join("\n");
  const ex = state.inv.filter(i => { const s = xSt(i.expiry); return s && (s.c === "expiring" || s.c === "expired"); }).map(i => { const s = xSt(i.expiry); return `${i.name} (${s.l})`; }).join(", ");
  const ms = wDates().map(d => { const k = d.toISOString().split("T")[0]; return state.mp[k] ? `${d.toLocaleDateString("en-US", { weekday: "short" })}: ${state.mp[k]}` : ""; }).filter(Boolean).join(", ");
  const favs = state.recs.filter(r => r.favorited || r.rating >= 4).map(r => `${r.name}${r.rating ? ` (${r.rating}★)` : ""}`).join(", ");
  const restr = [state.cfg.nopork ? "no pork" : null, state.cfg.noshellfish ? "no shellfish" : null, state.cfg.vegetarian ? "vegetarian" : null, state.cfg.glutenfree ? "gluten-free" : null, state.cfg.other].filter(Boolean).join(", ");
  const recent = state.cookLog.slice(0, 7).map(e => e.name).join(", ");
  return `You are a helpful kitchen assistant for a family in Edison NJ.
INVENTORY:\n${sec || "Empty."}
${ex ? "EXPIRING SOON: " + ex : ""}
${ms ? "MEAL PLAN: " + ms : ""}
${favs ? "FAVOURITE RECIPES: " + favs : ""}
${recent ? "RECENTLY COOKED (avoid repeating): " + recent : ""}
HOUSEHOLD: ${state.cfg.name}, Adults: ${state.cfg.adults}, Kids: ${state.cfg.kids}, Restrictions: ${restr || "none"}, Cuisines: ${state.cfg.cuisines}, Cook time: ${state.cfg.cookTime}.
CULTURAL BACKGROUND: Bushra is Bangladeshi, Bora is Turkish — authentically lean toward these cuisines (Bengali spices, mustard oil, dal, hilsa-style fish; Turkish kebabs, meze, börek, yogurt sauces, lentil soups). Suggest these when inventory allows.
Be concise. Use what they have. Suggest variety — lean toward Bangladeshi and Turkish — avoid repeating recent meals. Format grocery lists as bullet points starting "- ".`;
}

// formatResponse(text) — formats Claude's response text as HTML
function formatResponse(text) {
  return text
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/^\d+\.\s+(.+)$/gm, "<li>$1</li>")
    .replace(/^[-•]\s+(.+)$/gm, "<li>$1</li>")
    .replace(/\n/g, "<br>");
}

// sendChat() — sends the current input to Claude and displays the response
export async function sendChat() {
  const input = g("chi");
  const msg = input.value.trim();
  if (!msg) return;
  input.value = "";
  ar(input);

  // Add user message to chat
  state.chat.push({ role: "user", content: msg });
  appendBubble("user", msg);

  // Show thinking indicator
  const csb = g("csb");
  if (csb) csb.disabled = true;
  const thinkingId = "thinking-" + Date.now();
  const msgs = g("chmsgs");
  msgs.innerHTML += `<div class="cb asst thinking" id="${thinkingId}">Thinking…</div>`;
  msgs.scrollTop = msgs.scrollHeight;

  try {
    const r = await fetch("/api/proxy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 800,
        system: kitCtx(),
        messages: state.chat.map(m => ({ role: m.role, content: m.content }))
      })
    });
    const data = await r.json();
    const text = (data.content && data.content[0] && data.content[0].text) || "Sorry, I couldn't process that.";

    // Remove thinking indicator
    const thinkEl = g(thinkingId);
    if (thinkEl) thinkEl.remove();

    // Add assistant response
    state.chat.push({ role: "assistant", content: text });
    appendBubble("assistant", text);
  } catch (e) {
    const thinkEl = g(thinkingId);
    if (thinkEl) thinkEl.remove();
    appendBubble("assistant", "Sorry, I couldn't reach Claude. Check your connection and try again.");
  }
  if (csb) csb.disabled = false;
}

// appendBubble(role, text) — adds a chat bubble to the messages container
function appendBubble(role, text) {
  const msgs = g("chmsgs");
  if (!msgs) return;
  const div = document.createElement("div");
  div.className = "cb " + (role === "user" ? "user" : "asst");
  div.innerHTML = role === "user" ? text : formatResponse(text);
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

// sendPill(el) — sends a suggestion pill's text as a chat message
export function sendPill(el) {
  const input = g("chi");
  if (input) input.value = el.textContent;
  sendChat();
}

// clrChat() — clears chat history
export function clrChat() {
  state.chat = [];
  const msgs = g("chmsgs");
  if (msgs) msgs.innerHTML = '<div class="cb asst">Hey! 👋 I know your full inventory, meal plan, and saved recipes. What do you need?</div>';
}

// ar(el) — auto-resize textarea to fit content
export function ar(el) {
  el.style.height = "auto";
  el.style.height = Math.min(el.scrollHeight, 120) + "px";
}
