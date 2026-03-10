// ── SHOPPING SCREEN ──────────────────────────────────────────────────────────
// renderShop, sH, svShopItem, dlShopItem, deals

import { state, J, Js } from '../state.js';
import { svShopItem, dlShopItem } from '../db.js';
import { g, guessAisle, guessLocation, gcat, showNotif, showOv, hideOv, fmtR } from '../helpers.js';
import { svi } from '../db.js';
import { wDates } from '../helpers.js';

// sH(item) — renders a single shopping list item row wrapped in a swipe container
export function sH(item) {
  return `<div class="swipe-wrap" id="sw-${item.id}" data-id="${item.id}" data-list="shop">
    <div class="swipe-inner">
      <div class="shit${item.checked ? " chk" : ""}" onclick="swipeRowTap('${item.id}','shop')">
        <div class="sel-cb">✓</div>
        <div class="shck">${item.checked ? "✓" : ""}</div>
        <div style="flex:1;min-width:0">
          <div class="shnm">${item.name}</div>
          ${item.note ? `<div class="shnote">📝 ${item.note}</div>` : ""}
        </div>
        ${item.price ? `<div class="price-tag">~$${item.price}</div>` : ""}
        <button class="sh-note-btn" onclick="toggleShNote(event,'${item.id}')" title="Add note">✏️</button>
      </div>
      <div class="sh-note-edit" id="sne-${item.id}">
        <textarea class="sh-note-inp" id="sni-${item.id}" rows="2" placeholder="Add a note… (e.g. brand, size, store)" onblur="saveShNote('${item.id}')">${item.note || ""}</textarea>
      </div>
    </div>
    <div class="swipe-del" onclick="swipeDelItem('${item.id}','shop')"><span>🗑</span>Delete</div>
  </div>`;
}

// renderShop() — re-renders the shopping list
export function renderShop() {
  const az = (a, b) => a.name.localeCompare(b.name);
  const c = g("shlist"), un = state.shop.filter(i => !i.checked).sort(az), ch = state.shop.filter(i => i.checked).sort(az);
  const clrchk = g("clrchk");
  if (clrchk) clrchk.style.display = ch.length ? "block" : "none";
  const shsub = g("shsub");
  if (shsub) shsub.textContent = un.length + " items to buy";
  if (!c) return;
  if (!state.shop.length) { c.innerHTML = `<div class="es"><div class="ei">🛒</div><p>Your list is empty!<br/>Add items or use "Build from meal plan".</p></div>`; return; }
  if (state.aisleMode && un.length) {
    const grps = {}; un.forEach(i => { const a = guessAisle(i.name); if (!grps[a]) grps[a] = []; grps[a].push(i); });
    c.innerHTML = Object.entries(grps).sort().map(([aisle, its]) => `<div class="shsec">${aisle}</div>${its.map(sH).join("")}`).join("") + (ch.length ? `<div class="shsec">Done</div>${ch.map(sH).join("")}` : "");
  } else {
    c.innerHTML = (un.length ? `<div class="shsec">To buy (${un.length})</div>${un.map(sH).join("")}` : "") + (ch.length ? `<div class="shsec">Done</div>${ch.map(sH).join("")}` : "");
  }
  if (state.selectMode === "shop") {
    document.querySelectorAll("#shlist .swipe-wrap").forEach(w => { w.classList.add("selecting"); if (state.selectedIds.has(w.dataset.id)) w.classList.add("selected"); });
    const body = document.querySelector(".shbody");
    if (body) body.style.paddingLeft = "52px";
  }
}

// qadd() — quick-add item to shopping list
export function qadd() {
  const i = g("shi"), v = i.value.trim();
  if (!v) return;
  svShopItem({ id: Date.now().toString(), name: v, checked: false, src: "manual" });
  i.value = "";
}

// togShop(id) — toggles the checked state of a shopping list item
export function togShop(id) {
  const item = state.shop.find(i => i.id === id);
  if (!item) return;
  svShopItem({ ...item, checked: !item.checked });
}

// toggleShNote(e, id) — shows/hides the inline note editor for a shopping item
export function toggleShNote(e, id) {
  e.stopPropagation();
  const edit = g("sne-" + id);
  const inp = g("sni-" + id);
  if (!edit) return;
  const open = edit.classList.toggle("open");
  if (open && inp) { inp.focus(); inp.setSelectionRange(inp.value.length, inp.value.length); }
}

// saveShNote(id) — saves note text to the item on blur
export function saveShNote(id) {
  const inp = g("sni-" + id);
  if (!inp) return;
  const item = state.shop.find(i => i.id === id);
  if (!item) return;
  const note = inp.value.trim();
  if (note === (item.note || "")) return;
  svShopItem({ ...item, note });
}

// togAisle() — toggles aisle grouping mode
export function togAisle() {
  state.aisleMode = !state.aisleMode;
  const btn = g("aislebtn");
  if (btn) { btn.style.background = state.aisleMode ? "var(--ac)" : ""; btn.style.color = state.aisleMode ? "var(--bg)" : ""; }
  renderShop();
}

// setSHT(tab) — switches between My List and Deals tabs
export function setSHT(t) {
  ["list", "deals"].forEach(x => {
    const _xt = g("shtab-" + x); if (_xt) _xt.classList.remove("active");
    const body = g("sh-" + x + "-body"); if (body) body.style.display = "none";
  });
  const _tt = g("shtab-" + t); if (_tt) _tt.classList.add("active");
  const body = g("sh-" + t + "-body"); if (body) body.style.display = "block";
}

// shareList() — shares/copies the shopping list
export function shareList() {
  const items = state.shop.filter(i => !i.checked);
  if (!items.length) { showNotif("List is empty!"); return; }
  const lines = items.map(i => i.price ? "• " + i.name + " (~$" + i.price + ")" : "• " + i.name);
  const txt = "🛒 Shopping List\n\n" + lines.join("\n");
  if (navigator.share) { navigator.share({ title: "Shopping List", text: txt }).catch(() => {}); }
  else if (navigator.clipboard) { navigator.clipboard.writeText(txt).then(() => showNotif("List copied!")); }
}

// openAddToKitchen() — opens the "Add to Kitchen" overlay for checked items
export function openAddToKitchen() {
  const checked = state.shop.filter(i => i.checked);
  if (!checked.length) { showNotif("No completed items!"); return; }
  const body = g("atk-body");
  body.innerHTML = `<div style="padding:16px">
    <p style="font-size:.82rem;color:var(--mt);margin-bottom:16px">Choose where each item goes in your kitchen, then tap Add All.</p>
    ${checked.map(item => {
      const def = guessLocation(item.name);
      return `<div class="atk-item" id="atk-${item.id}" data-loc="${def}">
        <div class="atk-name">${item.name}</div>
        <div class="atk-loc">
          <button onclick="setAtkLoc('${item.id}','fridge',this)" class="${def === 'fridge' ? 'sel' : ''}">🌡 Fridge</button>
          <button onclick="setAtkLoc('${item.id}','freezer',this)" class="${def === 'freezer' ? 'sel' : ''}">🧊 Freeze</button>
          <button onclick="setAtkLoc('${item.id}','pantry',this)" class="${def === 'pantry' ? 'sel' : ''}">🥫 Pantry</button>
        </div>
      </div>`;
    }).join("")}
  </div>`;
  showOv("atk");
}

// setAtkLoc(id, loc, btn) — toggles location button selection
export function setAtkLoc(id, loc, btn) {
  const row = g("atk-" + id);
  row.dataset.loc = loc;
  row.querySelectorAll(".atk-loc button").forEach(b => b.classList.remove("sel"));
  btn.classList.add("sel");
}

// confirmAddToKitchen() — adds checked items to inventory, removes from shopping
export async function confirmAddToKitchen() {
  const checked = state.shop.filter(i => i.checked);
  const today = new Date().toLocaleDateString();
  let added = 0;
  for (const item of checked) {
    const row = g("atk-" + item.id);
    if (!row) continue;
    const loc = row.dataset.loc || guessLocation(item.name);
    const existing = state.inv.find(i => i.name.toLowerCase() === item.name.toLowerCase());
    await svi({
      id: existing ? existing.id : "inv-" + Date.now() + "-" + Math.random().toString(36).slice(2),
      name: existing ? existing.name : item.name,
      qty: existing ? (existing.qty + 1) : 1,
      unit: existing ? existing.unit : "unit",
      location: loc,
      category: existing ? existing.category : gcat({ name: item.name }),
      addedAt: existing ? existing.addedAt : today,
      brand: existing ? existing.brand : "",
      expiry: existing ? existing.expiry : null,
      image: existing ? existing.image : null,
      source: "shopping",
    });
    await dlShopItem(item.id);
    added++;
  }
  hideOv("atk");
  showNotif(`${added} item${added !== 1 ? "s" : ""} added to your kitchen! 🧺`);
}

// buildList() — calls Claude to suggest missing ingredients from meal plan
export async function buildList() {
  const ms = wDates().map(d => { const k = d.toISOString().split("T")[0]; return state.mp[k] ? `${d.toLocaleDateString("en-US", { weekday: "short" })}: ${state.mp[k]}` : ""; }).filter(Boolean).join(", ");
  if (!ms) { showNotif("No meals planned yet!"); return; }
  const is = state.inv.map(i => `${i.name} (${i.qty} ${i.unit})`).join(", ");
  const btn = document.querySelector('[onclick="buildList()"]');
  const origTxt = btn ? btn.textContent : "";
  if (btn) { btn.disabled = true; btn.textContent = "⏳ Thinking…"; }
  try {
    const r = await fetch("/api/proxy", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ model: "claude-haiku-4-5-20251001", max_tokens: 500, messages: [{ role: "user", content: `Week meals: ${ms}\nAlready have: ${is}\nList ONLY ingredients still needed. Return ONLY a bullet list, each line starting "- ". No categories, no headers, no explanation.` }] }) });
    const data = await r.json(), text = (data.content && data.content[0] && data.content[0].text || "");
    const suggested = [];
    text.split("\n").forEach(line => { const m = line.match(/^[-•*]\s+(.+)/); if (m) { const nm = m[1].replace(/\*\*/g, "").trim(); if (nm && !state.shop.find(i => i.name.toLowerCase() === nm.toLowerCase())) suggested.push({ name: nm, sel: true }); } });
    if (!suggested.length) { showNotif("Nothing new needed — you're all stocked! ✓"); return; }
    window._bpItems = suggested;
    g("bpList").innerHTML = suggested.map((it, i) => `<div id="bpitem-${i}" onclick="bpTog(${i})" style="display:flex;align-items:center;gap:12px;padding:13px 16px;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;cursor:pointer;transition:all .15s"><div id="bpck-${i}" style="width:24px;height:24px;border-radius:50%;background:var(--gn);border:2px solid var(--gn);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.8rem;color:#0c0c0a;transition:all .2s">✓</div><div style="font-size:.9rem;font-weight:500">${it.name}</div></div>`).join("");
    bpUpdBtn();
    g("buildPreviewM").classList.add("active");
  } catch { showNotif("Couldn't reach Claude — check connection"); }
  finally { if (btn) { btn.disabled = false; btn.textContent = origTxt; } }
}

// Build preview modal helpers
export function bpTog(i) {
  window._bpItems[i].sel = !window._bpItems[i].sel;
  const ck = g("bpck-" + i), row = g("bpitem-" + i);
  if (window._bpItems[i].sel) { ck.textContent = "✓"; ck.style.background = "var(--gn)"; ck.style.borderColor = "var(--gn)"; ck.style.color = "#0c0c0a"; row.style.borderColor = "var(--b1)"; }
  else { ck.textContent = ""; ck.style.background = "transparent"; ck.style.borderColor = "var(--b2)"; row.style.borderColor = "var(--b2)"; }
  bpUpdBtn();
}

export function bpSelAll(on) {
  window._bpItems.forEach((_, i) => { window._bpItems[i].sel = on; const ck = g("bpck-" + i), row = g("bpitem-" + i); if (on) { ck.textContent = "✓"; ck.style.background = "var(--gn)"; ck.style.borderColor = "var(--gn)"; ck.style.color = "#0c0c0a"; row.style.borderColor = "var(--b1)"; } else { ck.textContent = ""; ck.style.background = "transparent"; ck.style.borderColor = "var(--b2)"; row.style.borderColor = "var(--b2)"; } }); bpUpdBtn();
}

function bpUpdBtn() {
  const n = window._bpItems.filter(i => i.sel).length;
  const btn = g("bpAddBtn");
  if (btn) btn.textContent = n ? `Add ${n} item${n !== 1 ? "s" : ""}  ✓` : "Nothing selected";
  if (btn) btn.disabled = !n;
}

export async function bpConfirm() {
  const toAdd = window._bpItems.filter(i => i.sel);
  if (!toAdd.length) { g("buildPreviewM").classList.remove("active"); return; }
  for (const it of toAdd) await svShopItem({ id: Date.now().toString() + Math.random().toString(36).slice(2), name: it.name, checked: false, src: "meal-plan" });
  g("buildPreviewM").classList.remove("active");
  showNotif(`Added ${toAdd.length} item${toAdd.length !== 1 ? "s" : ""}! 🛒`);
}

// ── DEALS ────────────────────────────────────────────────────────────────────

function renderDeals(deals, query) {
  const el = g("dealslist");
  if (!deals || !deals.length) {
    el.innerHTML = `<div class="es"><div class="ei">🏷</div><p>No deals found for <strong>${query}</strong>.<br>Try a broader term or pick a different store.</p></div>`;
    return;
  }
  el.innerHTML = "";
  deals.forEach(d => {
    const card = document.createElement("div"); card.className = "deal-card deal-match";
    const left = document.createElement("div"); left.style.flex = "1";
    const store = document.createElement("div"); store.className = "deal-store"; store.textContent = d.store || "Local Store";
    const name = document.createElement("div"); name.className = "deal-name"; name.textContent = d.name || "";
    const priceRow = document.createElement("div"); priceRow.style.cssText = "display:flex;align-items:baseline;gap:6px;margin-top:4px;flex-wrap:wrap";
    if (d.sale_price) { const sp = document.createElement("span"); sp.className = "deal-price"; sp.textContent = d.sale_price; priceRow.appendChild(sp); }
    if (d.orig_price) { const op = document.createElement("span"); op.className = "deal-orig"; op.textContent = d.orig_price; priceRow.appendChild(op); }
    if (d.unit) { const un = document.createElement("span"); un.style.cssText = "font-size:.7rem;color:var(--mt)"; un.textContent = d.unit; priceRow.appendChild(un); }
    if (d.savings) { const sv = document.createElement("span"); sv.className = "deal-badge"; sv.textContent = "Save " + d.savings; priceRow.appendChild(sv); }
    left.appendChild(store); left.appendChild(name); left.appendChild(priceRow);
    if (d.details) { const det = document.createElement("div"); det.style.cssText = "font-size:.74rem;color:var(--tx2);margin-top:5px;line-height:1.5"; det.textContent = d.details; left.appendChild(det); }
    if (d.valid) { const vl = document.createElement("div"); vl.style.cssText = "font-size:.68rem;color:var(--mt);margin-top:4px"; vl.textContent = "📅 " + d.valid; left.appendChild(vl); }
    const btn = document.createElement("button"); btn.className = "btn bs bsm"; btn.style.cssText = "align-self:center;flex-shrink:0;margin-left:8px"; btn.textContent = "+ List";
    ((n) => { btn.onclick = () => addDealToList(n); })(d.name || "");
    card.appendChild(left); card.appendChild(btn); el.appendChild(card);
  });
}

// addDealToList(name) — adds a deal item to shopping list
export function addDealToList(name) {
  const decoded = (name || "").replace(/&#39;/g, "'");
  if (!state.shop.find(i => i.name.toLowerCase() === decoded.toLowerCase())) {
    svShopItem({ id: Date.now().toString(), name: decoded, checked: false });
    showNotif(decoded + " added!");
  } else { showNotif("Already on your list!"); }
}

// claudeSearchDeals(query, store) — uses Claude's web_search to find grocery deals
async function claudeSearchDeals(query, store) {
  const cacheKey = "ks-deals-" + store + "-" + query.toLowerCase().replace(/\s+/g, "_").substring(0, 40);
  const cached = J(cacheKey);
  if (cached && cached.ts && (Date.now() - cached.ts) < 86400000) return cached.deals;
  const storeStr = (store && store !== "any") ? store : "ShopRite, Stop & Shop, Wegmans, Whole Foods, or Trader Joe's";
  const prompt = 'Search for current this-week grocery deals on: ' + query + ' at ' + storeStr + ' near Edison NJ 08817. Do ONE web search only. Return ONLY a JSON array, no markdown fences: [{"name":"product","store":"store","sale_price":"$X.XX","orig_price":"$X.XX","unit":"per lb","savings":"$X off","details":"promo details","valid":"dates"}]. Return [] if nothing found. Up to 8 deals.';
  const st = g("dealsstatus");
  if (st) st.textContent = "Searching this week's flyers (1 search)...";
  const r = await fetch("/api/proxy", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ model: "claude-haiku-4-5-20251001", max_tokens: 1000, tools: [{ type: "web_search_20250305", name: "web_search" }], system: "You are a grocery deals finder. Use exactly ONE web search. Return only a JSON array.", messages: [{ role: "user", content: prompt }] }) });
  if (!r.ok) { const err = await r.text(); throw new Error("HTTP " + r.status + ": " + err.substring(0, 200)); }
  const data = await r.json();
  if (data.error) throw new Error("API error: " + data.error.message);
  const text = (data.content || []).filter(b => b.type === "text").map(b => b.text).join("");
  if (!text) throw new Error("No response. Stop: " + data.stop_reason);
  const clean = text.replace(/```json|```/g, "").trim();
  let arr = [], m = clean.match(/\[[\s\S]*\]/);
  if (m) { try { arr = JSON.parse(m[0]); } catch { arr = []; } }
  Js(cacheKey, { deals: arr, ts: Date.now(), query, store: storeStr });
  return arr;
}

// searchDeals() — triggered by the Search button in the Deals tab
export async function searchDeals() {
  const q = g("dealsearch").value.trim(); if (!q) { showNotif("Enter something to search"); return; }
  const store = g("dealstore")?.value || "any";
  const st = g("dealsstatus");
  st.style.display = "block"; st.style.color = "var(--mt)";
  st.textContent = "🔍 Searching " + (store !== "any" ? store : "nearby stores") + " for " + q + "…";
  g("dealslist").innerHTML = "";
  try {
    const deals = await claudeSearchDeals(q, store);
    st.style.display = "none";
    renderDeals(deals, q);
  } catch (e) {
    st.style.color = "var(--rd)";
    st.textContent = "Error: " + (e.message || "Unknown error");
  }
}

// dealsFromList() — searches deals for all unchecked items on the shopping list
export async function dealsFromList() {
  const items = state.shop.filter(i => !i.checked);
  if (!items.length) {
    const meals = Object.values(state.mp).filter(Boolean);
    if (!meals.length) { showNotif("Add items to your list first!"); return; }
    const confirmed = confirm("Your list is empty. Search deals for this week's meals?\n\n" + meals.join(", "));
    if (!confirmed) return;
    const store = g("dealstore")?.value || "any";
    const st = g("dealsstatus");
    st.style.display = "block"; st.textContent = "Searching deals for your meal plan...";
    g("dealslist").innerHTML = "";
    try { const deals = await claudeSearchDeals(meals.join(", "), store); st.style.display = "none"; renderDeals(deals, meals.join(", ")); }
    catch (e) { st.style.display = "none"; st.style.color = "var(--rd)"; st.textContent = "Error: " + e.message; }
    return;
  }
  const store = g("dealstore")?.value || "any";
  const st = g("dealsstatus");
  const names = items.slice(0, 8).map(i => i.name).join(", ");
  st.style.display = "block"; st.style.color = "var(--mt)"; st.textContent = "Searching deals for: " + names + "...";
  g("dealslist").innerHTML = "";
  try {
    const deals = await claudeSearchDeals(names, store); st.style.display = "none";
    if (!deals.length) g("dealslist").innerHTML = '<div class="es"><div class="ei">🏷</div><p>No deals found this week.<br/>Try searching individually or a different store.</p></div>';
    else renderDeals(deals, names);
  } catch (e) { st.style.display = "none"; st.style.color = "var(--rd)"; st.textContent = "Error: " + e.message; }
}

// testProxy() — tests the /api/proxy connection
export async function testProxy() {
  const st = g("dealsstatus");
  st.style.display = "block"; st.style.color = "var(--mt)"; st.textContent = "Testing proxy...";
  try {
    const r = await fetch("/api/proxy", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ model: "claude-haiku-4-5-20251001", max_tokens: 20, messages: [{ role: "user", content: "Say 'connected' in one word." }] }) });
    const data = await r.json();
    if (data.error) { st.style.color = "var(--rd)"; st.textContent = "Error: " + (data.error.message || JSON.stringify(data.error)); }
    else { st.style.color = "var(--gn)"; st.textContent = "✓ Proxy connected! Response: " + (data.content?.[0]?.text || "OK"); }
  } catch (e) { st.style.color = "var(--rd)"; st.textContent = "Connection failed: " + e.message; }
}
