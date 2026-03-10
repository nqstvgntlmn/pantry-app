(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const ut={name:"The Bora Family",adults:"Bora",kids:"1 toddler (age 3)",nopork:!0,noshellfish:!1,vegetarian:!1,glutenfree:!1,other:"",cuisines:"Bangladeshi, Turkish, Mediterranean, American",cookTime:"40-60 min"},a={hid:null,inv:[],recs:[],shop:[],mp:{},cfg:{...ut},cookLog:[],wasteLog:[],chat:[],cp:null,selR:"fridge",maL:"fridge",adjId:null,it:"all",rt:"all",md:null,cn:"",nr:0,eid:null,scanDestList:!1,aisleMode:!1,selectMode:null,selectedIds:new Set};function W(t){try{return JSON.parse(localStorage.getItem(t))}catch{return null}}function He(t,e){localStorage.setItem(t,JSON.stringify(e))}async function tn(t,e,n){const s=await fetch("/api/db",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({op:t,path:e,data:n})});if(!(s.headers.get("content-type")||"").includes("application/json"))throw new Error(`/api/db non-JSON response (status ${s.status}) for ${t} ${e}`);return s.json()}async function R(t){try{return(await tn("list",t)).docs||[]}catch(e){return console.warn("dbList:",t,e.message),[]}}async function K(t,e){return tn("set",t,e)}async function It(t){return tn("delete",t)}async function ge(t,e){e?(a.mp[t]=e,await K(`households/${a.hid}/mealplan/${t}`,{date:t,meal:e})):(delete a.mp[t],await It(`households/${a.hid}/mealplan/${t}`))}async function fs(){await K(`households/${a.hid}/settings/config`,a.cfg)}async function ps(t,e){const n={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:t,date:e||Bt(),loggedAt:new Date().toISOString()};a.cookLog.unshift(n),a.cookLog.length>200&&(a.cookLog=a.cookLog.slice(0,200)),await K(`households/${a.hid}/cooklog/${n.id}`,n)}async function Pi(t){if(a.wasteLog.find(n=>n.name===t&&n.date===Bt()))return;const e={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:t,date:Bt(),loggedAt:new Date().toISOString()};a.wasteLog.unshift(e),a.wasteLog.length>100&&(a.wasteLog=a.wasteLog.slice(0,100)),await K(`households/${a.hid}/wastelog/${e.id}`,e)}async function Ri(){try{const e=(await R(`households/${a.hid}/settings`)).find(r=>r.id==="config");if(e)a.cfg={...ut,...e};else{const r=W("ks-c");a.cfg={...ut,...r||{}},await fs(),r&&localStorage.removeItem("ks-c")}const n=await R(`households/${a.hid}/mealplan`);if(a.mp={},n.forEach(r=>{r.date&&r.meal&&(a.mp[r.date]=r.meal)}),!n.length){const r=W("ks-m");if(r&&Object.keys(r).length){a.mp=r;for(const[o,l]of Object.entries(r))await ge(o,l);localStorage.removeItem("ks-m")}}const s=await R(`households/${a.hid}/cooklog`);if(s.length)a.cookLog=s.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=W("ks-cooklog");if(r&&r.length){a.cookLog=r.map((o,l)=>({id:o.id||(Date.now()-l).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of a.cookLog)await K(`households/${a.hid}/cooklog/${o.id}`,o);localStorage.removeItem("ks-cooklog")}}const i=await R(`households/${a.hid}/wastelog`);if(i.length)a.wasteLog=i.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=W("ks-waste");if(r&&r.length){a.wasteLog=r.map((o,l)=>({id:o.id||(Date.now()-l).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of a.wasteLog)await K(`households/${a.hid}/wastelog/${o.id}`,o);localStorage.removeItem("ks-waste")}}}catch(t){console.error("loadFirestoreData error:",t)}}const y={renderAll:null,renderSum:null,renderRecs:null,renderShop:null};function O(t){const e=document.getElementById("sdot"),n=document.getElementById("slb");e&&(e.className="sdot "+t),n&&(n.textContent=t==="synced"?"🏠 "+a.hid:t==="syncing"?"Syncing…":"Sync error")}async function Z(t){var e,n;O("syncing");try{a.inv=[...a.inv.filter(s=>s.id!==t.id),t],(e=y.renderAll)==null||e.call(y),(n=y.renderSum)==null||n.call(y),await K(`households/${a.hid}/inventory/${t.id}`,t),O("synced")}catch(s){console.error(s),O("error")}}async function nn(t){var e,n;O("syncing");try{a.inv=a.inv.filter(s=>s.id!==t),(e=y.renderAll)==null||e.call(y),(n=y.renderSum)==null||n.call(y),await It(`households/${a.hid}/inventory/${t}`),O("synced")}catch(s){console.error(s),O("error")}}async function je(t){var e,n;try{a.recs=[...a.recs.filter(s=>s.id!==t.id),t],(e=y.renderRecs)==null||e.call(y),(n=y.renderSum)==null||n.call(y),await K(`households/${a.hid}/recipes/${t.id}`,t)}catch(s){console.error(s)}}async function Di(t){var e,n;try{a.recs=a.recs.filter(s=>s.id!==t),(e=y.renderRecs)==null||e.call(y),(n=y.renderSum)==null||n.call(y),await It(`households/${a.hid}/recipes/${t}`)}catch(s){console.error(s)}}async function le(t){var e,n;try{a.shop=[...a.shop.filter(s=>s.id!==t.id),t],(e=y.renderShop)==null||e.call(y),(n=y.renderSum)==null||n.call(y),await K(`households/${a.hid}/shopping/${t.id}`,t)}catch(s){console.error(s)}}async function kt(t){var e,n;try{a.shop=a.shop.filter(s=>s.id!==t),(e=y.renderShop)==null||e.call(y),(n=y.renderSum)==null||n.call(y),await It(`households/${a.hid}/shopping/${t}`)}catch(s){console.error(s)}}function Bt(){return new Date().toISOString().split("T")[0]}function c(t){return document.getElementById(t)}function re(){return new Date().toISOString().split("T")[0]}function xe(){const t=new Date;t.setHours(0,0,0,0);const e=new Date(t);return e.setDate(t.getDate()-t.getDay()),Array.from({length:7},(n,s)=>{const i=new Date(e);return i.setDate(e.getDate()+s),i})}function Ni(){const t=new Date;return t.setDate(t.getDate()+1),t.toISOString().split("T")[0]}function U(t){if(!t)return null;const e=new Date;e.setHours(0,0,0,0);const n=new Date(t+"T00:00:00"),s=Math.round((n-e)/864e5);return s<0?{c:"expired",l:"Expired"}:s===0?{c:"expiring",l:"Expires today"}:s<=7?{c:"expiring",l:`Expires in ${s}d`}:{c:"ok",l:n.toLocaleDateString("en-US",{month:"short",day:"numeric"})}}function sn(t){return{fridge:"🌡 Fridge",freezer:"🧊 Freezer",pantry:"🥫 Pantry"}[t]||t}const rn={Produce:"🥦",Proteins:"🍗",Dairy:"🧀",Grains:"🌾",Condiments:"🧴",Snacks:"🍿",Beverages:"🥤",Frozen:"❄️",General:"📦",Imported:"📥"};function Be(t){const e=(t.name||"").toLowerCase(),n=(t.category||"").toLowerCase();return n.includes("produce")||n.includes("vegetable")||n.includes("fruit")||e.match(/apple|banana|broccoli|carrot|celery|cabbage|tomato|onion|garlic|jalap|spinach|mushroom|squash|lettuce|cucumber|pepper/)?"Produce":n.includes("protein")||n.includes("meat")||n.includes("seafood")||n.includes("poultry")||e.match(/chicken|beef|lamb|turkey|salmon|cod|tuna|fish|steak|pork|shrimp/)?"Proteins":n.includes("dairy")||n.includes("egg")||e.match(/egg|butter|cheese|milk|cream|yogurt|ghee/)?"Dairy":n.includes("grain")||n.includes("bread")||n.includes("pasta")||e.match(/rice|pasta|bread|flour|oat|cereal|grain|noodle|tortilla/)?"Grains":n.includes("condiment")||n.includes("sauce")||e.match(/sauce|ketchup|mustard|oil|vinegar|salt|pepper|spice|herb|seasoning|mayo/)?"Condiments":t.location==="freezer"?"Frozen":"General"}function Oi(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/^[-•]\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/\n/g,"<br>")}let Rt=null;function m(t){const e=c("notif");e&&(e.textContent=t,e.style.display="block",e.style.animation="none",e.offsetWidth,e.style.animation="fn 2.5s ease forwards",Rt&&clearTimeout(Rt),Rt=setTimeout(()=>e.style.display="none",2500))}function ye(t){var e;(e=c("ov-"+t))==null||e.classList.add("active")}function C(t){var e;(e=c("ov-"+t))==null||e.classList.remove("active")}function $e(t,e){const n=c(t);n&&n.querySelectorAll(".star").forEach((s,i)=>{s.textContent=i<e?"★":"☆",s.classList.toggle("on",i<e)})}function gs(t){const e=t.toLowerCase();return/frozen|ice cream|pizza|nugget|waffle|tater|edamame|popsicle/.test(e)?"freezer":/milk|cheese|yogurt|butter|cream|egg|meat|chicken|beef|pork|fish|salmon|shrimp|tofu|deli|bacon|sausage|produce|lettuce|spinach|berry|berries|fruit|vegetable|carrot|broccoli|juice/.test(e)?"fridge":"pantry"}const $i={Produce:["apple","banana","carrot","celery","onion","garlic","tomato","lettuce","cucumber","pepper","broccoli","spinach","mushroom","lemon","lime","herb","cabbage","squash","jalap","avocado","potato","ginger"],"Meat & Fish":["chicken","beef","lamb","turkey","salmon","cod","tuna","fish","steak","shrimp","pork","bacon","sausage","ground"],"Dairy & Eggs":["egg","butter","cheese","milk","cream","yogurt","ghee","kefir"],Frozen:["frozen","ice cream","pizza","nugget","waffle","edamame","okra","lima","broccoli floret"],Pantry:["rice","pasta","flour","oil","vinegar","sauce","spice","salt","pepper","sugar","honey","oat","bread","can","bean","lentil","chickpea","stock","broth"],"Snacks & Drinks":["chip","cracker","cookie","juice","soda","water","tea","coffee","snack","nut","seed"]};function Mi(t){const e=t.toLowerCase();for(const[n,s]of Object.entries($i))if(s.some(i=>e.includes(i)))return n;return"Other"}const Ui=()=>{};var Cn={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Fi=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],d=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(d>>10)),e[s++]=String.fromCharCode(56320+(d&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ys={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,d=i+2<t.length,u=d?t[i+2]:0,h=r>>2,p=(r&3)<<4|l>>4;let f=(l&15)<<2|u>>6,v=u&63;d||(v=64,o||(f=64)),s.push(n[h],n[p],n[f],n[v])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ms(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Fi(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||u==null||p==null)throw new Hi;const f=r<<2|l>>4;if(s.push(f),u!==64){const v=l<<4&240|u>>2;if(s.push(v),p!==64){const S=u<<6&192|p;s.push(S)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Hi extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ji=function(t){const e=ms(t);return ys.encodeByteArray(e,!0)},vs=function(t){return ji(t).replace(/\./g,"")},ws=function(t){try{return ys.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=()=>Bi().__FIREBASE_DEFAULTS__,Vi=()=>{if(typeof process>"u"||typeof Cn>"u")return;const t=Cn.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Wi=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ws(t[1]);return e&&JSON.parse(e)},on=()=>{try{return Ui()||zi()||Vi()||Wi()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qi=t=>{var e,n;return(n=(e=on())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},bs=()=>{var t;return(t=on())==null?void 0:t.config},_s=t=>{var e;return(e=on())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ki(t){return(await fetch(t,{credentials:"include"})).ok}const Me={};function Ji(){const t={prod:[],emulator:[]};for(const e of Object.keys(Me))Me[e]?t.emulator.push(e):t.prod.push(e);return t}function Yi(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let An=!1;function Xi(t,e){if(typeof window>"u"||typeof document>"u"||!Et(window.location.host)||Me[t]===e||Me[t]||An)return;Me[t]=e;function n(f){return`__firebase__banner__${f}`}const s="__firebase__banner",r=Ji().prod.length>0;function o(){const f=document.getElementById(s);f&&f.remove()}function l(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function d(f,v){f.setAttribute("width","24"),f.setAttribute("id",v),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function u(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{An=!0,o()},f}function h(f,v){f.setAttribute("id",v),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function p(){const f=Yi(s),v=n("text"),S=document.getElementById(v)||document.createElement("span"),j=n("learnmore"),we=document.getElementById(j)||document.createElement("a"),B=n("preprendIcon"),z=document.getElementById(B)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const w=f.element;l(w),h(we,j);const I=u();d(z,B),w.append(z,S,we,I),document.body.appendChild(w)}r?(S.innerText="Preview backend disconnected.",z.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(z.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qi(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(E())}function Zi(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function er(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tr(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nr(){const t=E();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sr(){try{return typeof indexedDB=="object"}catch{return!1}}function ir(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr="FirebaseError";class de extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=rr,Object.setPrototypeOf(this,de.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ke.prototype.create)}}class Ke{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?or(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new de(i,l,s)}}function or(t,e){return t.replace(ar,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ar=/\{\$([^}]+)}/g;function cr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Se(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(xn(r)&&xn(o)){if(!Se(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function xn(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ne(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Oe(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function lr(t,e){const n=new dr(t,e);return n.subscribe.bind(n)}class dr{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");ur(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Dt),i.error===void 0&&(i.error=Dt),i.complete===void 0&&(i.complete=Dt);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ur(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Dt(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t){return t&&t._delegate?t._delegate:t}class Te{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Gi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pr(e))try{this.getOrInitializeService({instanceIdentifier:he})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=he){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=he){return this.instances.has(e)}getOptions(e=he){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:fr(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=he){return this.component?this.component.multipleInstances?e:he:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fr(t){return t===he?void 0:t}function pr(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hr(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(b||(b={}));const mr={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},yr=b.INFO,vr={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},wr=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=vr[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Is{constructor(e){this.name=e,this._logLevel=yr,this._logHandler=wr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in b))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...e),this._logHandler(this,b.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...e),this._logHandler(this,b.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,b.INFO,...e),this._logHandler(this,b.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,b.WARN,...e),this._logHandler(this,b.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...e),this._logHandler(this,b.ERROR,...e)}}const br=(t,e)=>e.some(n=>t instanceof n);let Ln,Pn;function _r(){return Ln||(Ln=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ir(){return Pn||(Pn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ks=new WeakMap,zt=new WeakMap,Es=new WeakMap,Nt=new WeakMap,an=new WeakMap;function kr(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(oe(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ks.set(n,t)}).catch(()=>{}),an.set(e,t),e}function Er(t){if(zt.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});zt.set(t,e)}let Vt={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Es.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return oe(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Sr(t){Vt=t(Vt)}function Tr(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ot(this),e,...n);return Es.set(s,e.sort?e.sort():[e]),oe(s)}:Ir().includes(t)?function(...e){return t.apply(Ot(this),e),oe(ks.get(this))}:function(...e){return oe(t.apply(Ot(this),e))}}function Cr(t){return typeof t=="function"?Tr(t):(t instanceof IDBTransaction&&Er(t),br(t,_r())?new Proxy(t,Vt):t)}function oe(t){if(t instanceof IDBRequest)return kr(t);if(Nt.has(t))return Nt.get(t);const e=Cr(t);return e!==t&&(Nt.set(t,e),an.set(e,t)),e}const Ot=t=>an.get(t);function Ar(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=oe(o);return s&&o.addEventListener("upgradeneeded",d=>{s(oe(o.result),d.oldVersion,d.newVersion,oe(o.transaction),d)}),n&&o.addEventListener("blocked",d=>n(d.oldVersion,d.newVersion,d)),l.then(d=>{r&&d.addEventListener("close",()=>r()),i&&d.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const xr=["get","getKey","getAll","getAllKeys","count"],Lr=["put","add","delete","clear"],$t=new Map;function Rn(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($t.get(e))return $t.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Lr.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||xr.includes(n)))return;const r=async function(o,...l){const d=this.transaction(o,i?"readwrite":"readonly");let u=d.store;return s&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&d.done]))[0]};return $t.set(e,r),r}Sr(t=>({...t,get:(e,n,s)=>Rn(e,n)||t.get(e,n,s),has:(e,n)=>!!Rn(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Rr(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Rr(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wt="@firebase/app",Dn="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J=new Is("@firebase/app"),Dr="@firebase/app-compat",Nr="@firebase/analytics-compat",Or="@firebase/analytics",$r="@firebase/app-check-compat",Mr="@firebase/app-check",Ur="@firebase/auth",Fr="@firebase/auth-compat",Hr="@firebase/database",jr="@firebase/data-connect",Br="@firebase/database-compat",zr="@firebase/functions",Vr="@firebase/functions-compat",Wr="@firebase/installations",qr="@firebase/installations-compat",Gr="@firebase/messaging",Kr="@firebase/messaging-compat",Jr="@firebase/performance",Yr="@firebase/performance-compat",Xr="@firebase/remote-config",Qr="@firebase/remote-config-compat",Zr="@firebase/storage",eo="@firebase/storage-compat",to="@firebase/firestore",no="@firebase/ai",so="@firebase/firestore-compat",io="firebase",ro="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="[DEFAULT]",oo={[Wt]:"fire-core",[Dr]:"fire-core-compat",[Or]:"fire-analytics",[Nr]:"fire-analytics-compat",[Mr]:"fire-app-check",[$r]:"fire-app-check-compat",[Ur]:"fire-auth",[Fr]:"fire-auth-compat",[Hr]:"fire-rtdb",[jr]:"fire-data-connect",[Br]:"fire-rtdb-compat",[zr]:"fire-fn",[Vr]:"fire-fn-compat",[Wr]:"fire-iid",[qr]:"fire-iid-compat",[Gr]:"fire-fcm",[Kr]:"fire-fcm-compat",[Jr]:"fire-perf",[Yr]:"fire-perf-compat",[Xr]:"fire-rc",[Qr]:"fire-rc-compat",[Zr]:"fire-gcs",[eo]:"fire-gcs-compat",[to]:"fire-fst",[so]:"fire-fst-compat",[no]:"fire-vertex","fire-js":"fire-js",[io]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht=new Map,ao=new Map,Gt=new Map;function Nn(t,e){try{t.container.addComponent(e)}catch(n){J.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ze(t){const e=t.name;if(Gt.has(e))return J.debug(`There were multiple attempts to register component ${e}.`),!1;Gt.set(e,t);for(const n of ht.values())Nn(n,t);for(const n of ao.values())Nn(n,t);return!0}function Ss(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function A(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ae=new Ke("app","Firebase",co);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Te("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ae.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye=ro;function Ts(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:qt,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw ae.create("bad-app-name",{appName:String(i)});if(n||(n=bs()),!n)throw ae.create("no-options");const r=ht.get(i);if(r){if(Se(n,r.options)&&Se(s,r.config))return r;throw ae.create("duplicate-app",{appName:i})}const o=new gr(i);for(const d of Gt.values())o.addComponent(d);const l=new lo(n,s,o);return ht.set(i,l),l}function uo(t=qt){const e=ht.get(t);if(!e&&t===qt&&bs())return Ts();if(!e)throw ae.create("no-app",{appName:t});return e}function _e(t,e,n){let s=oo[t]??t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),J.warn(o.join(" "));return}ze(new Te(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho="firebase-heartbeat-database",fo=1,Ve="firebase-heartbeat-store";let Mt=null;function Cs(){return Mt||(Mt=Ar(ho,fo,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ve)}catch(n){console.warn(n)}}}}).catch(t=>{throw ae.create("idb-open",{originalErrorMessage:t.message})})),Mt}async function po(t){try{const n=(await Cs()).transaction(Ve),s=await n.objectStore(Ve).get(As(t));return await n.done,s}catch(e){if(e instanceof de)J.warn(e.message);else{const n=ae.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});J.warn(n.message)}}}async function On(t,e){try{const s=(await Cs()).transaction(Ve,"readwrite");await s.objectStore(Ve).put(e,As(t)),await s.done}catch(n){if(n instanceof de)J.warn(n.message);else{const s=ae.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});J.warn(s.message)}}}function As(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=1024,mo=30;class yo{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wo(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=$n();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>mo){const o=bo(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){J.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$n(),{heartbeatsToSend:s,unsentEntries:i}=vo(this._heartbeatsCache.heartbeats),r=vs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return J.warn(n),""}}}function $n(){return new Date().toISOString().substring(0,10)}function vo(t,e=go){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Mn(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Mn(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class wo{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sr()?ir().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await po(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return On(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return On(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Mn(t){return vs(JSON.stringify({version:2,heartbeats:t})).length}function bo(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(t){ze(new Te("platform-logger",e=>new Pr(e),"PRIVATE")),ze(new Te("heartbeat",e=>new yo(e),"PRIVATE")),_e(Wt,Dn,t),_e(Wt,Dn,"esm2020"),_e("fire-js","")}_o("");var Io="firebase",ko="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_e(Io,ko,"app");function xs(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Eo=xs,Ls=new Ke("auth","Firebase",xs());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft=new Is("@firebase/auth");function So(t,...e){ft.logLevel<=b.WARN&&ft.warn(`Auth (${Ye}): ${t}`,...e)}function rt(t,...e){ft.logLevel<=b.ERROR&&ft.error(`Auth (${Ye}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t,...e){throw ln(t,...e)}function N(t,...e){return ln(t,...e)}function cn(t,e,n){const s={...Eo(),[e]:n};return new Ke("auth","Firebase",s).create(e,{appName:t.name})}function $(t){return cn(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ps(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&x(t,"argument-error"),cn(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ln(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Ls.create(t,...e)}function g(t,e,...n){if(!t)throw ln(e,...n)}function q(t){const e="INTERNAL ASSERTION FAILED: "+t;throw rt(e),new Error(e)}function Y(t,e){t||q(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function To(){return Un()==="http:"||Un()==="https:"}function Un(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(To()||er()||"connection"in navigator)?navigator.onLine:!0}function Ao(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n){this.shortDelay=e,this.longDelay=n,Y(n>e,"Short delay should be less than long delay!"),this.isMobile=Qi()||tr()}get(){return Co()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t,e){Y(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;q("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;q("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;q("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Po=new Xe(3e4,6e4);function ue(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ee(t,e,n,s,i={}){return Ds(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const l=Je({key:t.config.apiKey,...o}).slice(1),d=await t._getAdditionalHeaders();d["Content-Type"]="application/json",t.languageCode&&(d["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:d,...r};return Zi()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Et(t.emulatorConfig.host)&&(u.credentials="include"),Rs.fetch()(await Ns(t,t.config.apiHost,n,l),u)})}async function Ds(t,e,n){t._canInitEmulator=!1;const s={...xo,...e};try{const i=new Do(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw nt(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[d,u]=l.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw nt(t,"credential-already-in-use",o);if(d==="EMAIL_EXISTS")throw nt(t,"email-already-in-use",o);if(d==="USER_DISABLED")throw nt(t,"user-disabled",o);const h=s[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw cn(t,h,u);x(t,h)}}catch(i){if(i instanceof de)throw i;x(t,"network-request-failed",{message:String(i)})}}async function Qe(t,e,n,s,i={}){const r=await ee(t,e,n,s,i);return"mfaPendingCredential"in r&&x(t,"multi-factor-auth-required",{_serverResponse:r}),r}async function Ns(t,e,n,s){const i=`${e}${n}?${s}`,r=t,o=r.config.emulator?dn(t.config,i):`${t.config.apiScheme}://${i}`;return Lo.includes(n)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function Ro(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Do{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(N(this.auth,"network-request-failed")),Po.get())})}}function nt(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=N(t,e,s);return i.customData._tokenResponse=n,i}function Fn(t){return t!==void 0&&t.enterprise!==void 0}class No{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Ro(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Oo(t,e){return ee(t,"GET","/v2/recaptchaConfig",ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $o(t,e){return ee(t,"POST","/v1/accounts:delete",e)}async function pt(t,e){return ee(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Mo(t,e=!1){const n=F(t),s=await n.getIdToken(e),i=un(s);g(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ue(Ut(i.auth_time)),issuedAtTime:Ue(Ut(i.iat)),expirationTime:Ue(Ut(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ut(t){return Number(t)*1e3}function un(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return rt("JWT malformed, contained fewer than 3 sections"),null;try{const i=ws(n);return i?JSON.parse(i):(rt("Failed to decode base64 JWT payload"),null)}catch(i){return rt("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Hn(t){const e=un(t);return g(e,"internal-error"),g(typeof e.exp<"u","internal-error"),g(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ce(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof de&&Uo(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Uo({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ue(this.lastLoginAt),this.creationTime=Ue(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gt(t){var p;const e=t.auth,n=await t.getIdToken(),s=await Ce(t,pt(e,{idToken:n}));g(s==null?void 0:s.users.length,e,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const r=(p=i.providerUserInfo)!=null&&p.length?Os(i.providerUserInfo):[],o=jo(t.providerData,r),l=t.isAnonymous,d=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),u=l?d:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Jt(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Ho(t){const e=F(t);await gt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jo(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Os(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bo(t,e){const n=await Ds(t,{},async()=>{const s=Je({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=await Ns(t,i,"/v1/token",`key=${r}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const d={method:"POST",headers:l,body:s};return t.emulatorConfig&&Et(t.emulatorConfig.host)&&(d.credentials="include"),Rs.fetch()(o,d)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function zo(t,e){return ee(t,"POST","/v2/accounts:revokeToken",ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g(typeof e.idToken<"u","internal-error"),g(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hn(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){g(e.length!==0,"internal-error");const n=Hn(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(g(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Bo(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Ie;return s&&(g(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(g(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(g(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ie,this.toJSON())}_performRefresh(){return q("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(t,e){g(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class D{constructor({uid:e,auth:n,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new Fo(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Jt(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ce(this,this.stsTokenManager.getToken(this.auth,e));return g(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Mo(this,e)}reload(){return Ho(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new D({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await gt(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(A(this.auth.app))return Promise.reject($(this.auth));const e=await this.getIdToken();return await Ce(this,$o(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,i=n.email??void 0,r=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,d=n._redirectEventId??void 0,u=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:p,emailVerified:f,isAnonymous:v,providerData:S,stsTokenManager:j}=n;g(p&&j,e,"internal-error");const we=Ie.fromJSON(this.name,j);g(typeof p=="string",e,"internal-error"),te(s,e.name),te(i,e.name),g(typeof f=="boolean",e,"internal-error"),g(typeof v=="boolean",e,"internal-error"),te(r,e.name),te(o,e.name),te(l,e.name),te(d,e.name),te(u,e.name),te(h,e.name);const B=new D({uid:p,auth:e,email:i,emailVerified:f,displayName:s,isAnonymous:v,photoURL:o,phoneNumber:r,tenantId:l,stsTokenManager:we,createdAt:u,lastLoginAt:h});return S&&Array.isArray(S)&&(B.providerData=S.map(z=>({...z}))),d&&(B._redirectEventId=d),B}static async _fromIdTokenResponse(e,n,s=!1){const i=new Ie;i.updateFromServerResponse(n);const r=new D({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await gt(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];g(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Os(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),l=new Ie;l.updateFromIdToken(s);const d=new D({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Jt(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(d,u),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new Map;function G(t){Y(t instanceof Function,"Expected a class definition");let e=jn.get(t);return e?(Y(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jn.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$s.type="NONE";const Bn=$s;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t,e,n){return`firebase:${t}:${e}:${n}`}class ke{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ot(this.userKey,i.apiKey,r),this.fullPersistenceKey=ot("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await pt(this.auth,{idToken:e}).catch(()=>{});return n?D._fromGetAccountInfoResponse(this.auth,n,e):null}return D._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ke(G(Bn),e,s);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||G(Bn);const o=ot(s,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){let p;if(typeof h=="string"){const f=await pt(e,{idToken:h}).catch(()=>{});if(!f)break;p=await D._fromGetAccountInfoResponse(e,f,h)}else p=D._fromJSON(e,h);u!==r&&(l=p),r=u;break}}catch{}const d=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!d.length?new ke(r,e,s):(r=d[0],l&&await r._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new ke(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hs(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ms(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bs(e))return"Blackberry";if(zs(e))return"Webos";if(Us(e))return"Safari";if((e.includes("chrome/")||Fs(e))&&!e.includes("edge/"))return"Chrome";if(js(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ms(t=E()){return/firefox\//i.test(t)}function Us(t=E()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fs(t=E()){return/crios\//i.test(t)}function Hs(t=E()){return/iemobile/i.test(t)}function js(t=E()){return/android/i.test(t)}function Bs(t=E()){return/blackberry/i.test(t)}function zs(t=E()){return/webos/i.test(t)}function hn(t=E()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Vo(t=E()){var e;return hn(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Wo(){return nr()&&document.documentMode===10}function Vs(t=E()){return hn(t)||js(t)||zs(t)||Bs(t)||/windows phone/i.test(t)||Hs(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(t,e=[]){let n;switch(t){case"Browser":n=zn(E());break;case"Worker":n=`${zn(E())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ye}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,l)=>{try{const d=e(r);o(d)}catch(d){l(d)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Go(t,e={}){return ee(t,"GET","/v2/passwordPolicy",ue(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko=6;class Jo{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Ko,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vn(this),this.idTokenSubscription=new Vn(this),this.beforeStateQueue=new qo(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ls,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=G(n)),this._initializationPromise=this.queue(async()=>{var s,i,r;if(!this._deleted&&(this.persistenceManager=await ke.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await pt(this,{idToken:e}),s=await D._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(A(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,l=s==null?void 0:s._redirectEventId,d=await this.tryRedirectSignIn(e);(!o||o===l)&&(d!=null&&d.user)&&(s=d.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await gt(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ao()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(A(this.app))return Promise.reject($(this));const n=e?F(e):null;return n&&g(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return A(this.app)?Promise.reject($(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return A(this.app)?Promise.reject($(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(G(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Go(this),n=new Jo(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ke("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await zo(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&G(e)||this._popupRedirectResolver;g(n,this,"argument-error"),this.redirectPersistenceManager=await ke.create(this,[G(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(g(l,this,"internal-error"),l.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const d=e.addObserver(n,s,i);return()=>{o=!0,d()}}else{const d=e.addObserver(n);return()=>{o=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ws(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(A(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&So(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function H(t){return F(t)}class Vn{constructor(e){this.auth=e,this.observer=null,this.addObserver=lr(n=>this.observer=n)}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let St={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Xo(t){St=t}function qs(t){return St.loadJS(t)}function Qo(){return St.recaptchaEnterpriseScript}function Zo(){return St.gapiScript}function ea(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class ta{constructor(){this.enterprise=new na}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class na{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const sa="recaptcha-enterprise",Gs="NO_RECAPTCHA";class ia{constructor(e){this.type=sa,this.auth=H(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,l)=>{Oo(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new No(d);return r.tenantId==null?r._agentRecaptchaConfig=u:r._tenantRecaptchaConfigs[r.tenantId]=u,o(u.siteKey)}}).catch(d=>{l(d)})})}function i(r,o,l){const d=window.grecaptcha;Fn(d)?d.enterprise.ready(()=>{d.enterprise.execute(r,{action:e}).then(u=>{o(u)}).catch(()=>{o(Gs)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ta().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{s(this.auth).then(l=>{if(!n&&Fn(window.grecaptcha))i(l,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let d=Qo();d.length!==0&&(d+=l),qs(d).then(()=>{i(l,r,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Wn(t,e,n,s=!1,i=!1){const r=new ia(t);let o;if(i)o=Gs;else try{o=await r.verify(n)}catch{o=await r.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const d=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:d,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const d=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return s?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Yt(t,e,n,s,i){var r;if((r=t._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Wn(t,e,n,n==="getOobCode");return s(t,o)}else return s(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Wn(t,e,n,n==="getOobCode");return s(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(t,e){const n=Ss(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Se(r,e??{}))return i;x(i,"already-initialized")}return n.initialize({options:e})}function oa(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(G);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function aa(t,e,n){const s=H(t);g(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Ks(e),{host:o,port:l}=ca(e),d=l===null?"":`:${l}`,u={url:`${r}//${o}${d}/`},h=Object.freeze({host:o,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){g(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),g(Se(u,s.config.emulator)&&Se(h,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=h,s.settings.appVerificationDisabledForTesting=!0,Et(o)?(Ki(`${r}//${o}${d}`),Xi("Auth",!0)):la()}function Ks(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ca(t){const e=Ks(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:qn(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:qn(o)}}}function qn(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function la(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return q("not implemented")}_getIdTokenResponse(e){return q("not implemented")}_linkToIdToken(e,n){return q("not implemented")}_getReauthenticationResolver(e){return q("not implemented")}}async function da(t,e){return ee(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ua(t,e){return Qe(t,"POST","/v1/accounts:signInWithPassword",ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ha(t,e){return Qe(t,"POST","/v1/accounts:signInWithEmailLink",ue(t,e))}async function fa(t,e){return Qe(t,"POST","/v1/accounts:signInWithEmailLink",ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends fn{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new We(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new We(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yt(e,n,"signInWithPassword",ua);case"emailLink":return ha(e,{email:this._email,oobCode:this._password});default:x(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yt(e,s,"signUpPassword",da);case"emailLink":return fa(e,{idToken:n,email:this._email,oobCode:this._password});default:x(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ee(t,e){return Qe(t,"POST","/v1/accounts:signInWithIdp",ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa="http://localhost";class X extends fn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new X(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):x("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,...r}=n;if(!s||!i)return null;const o=new X(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ee(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ee(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ee(e,n)}buildRequest(){const e={requestUri:pa,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Je(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ma(t){const e=Ne(Oe(t)).link,n=e?Ne(Oe(e)).deep_link_id:null,s=Ne(Oe(t)).deep_link_id;return(s?Ne(Oe(s)).link:null)||s||n||e||t}class pn{constructor(e){const n=Ne(Oe(e)),s=n.apiKey??null,i=n.oobCode??null,r=ga(n.mode??null);g(s&&i&&r,"argument-error"),this.apiKey=s,this.operation=r,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=ma(e);try{return new pn(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(){this.providerId=Le.PROVIDER_ID}static credential(e,n){return We._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=pn.parseLink(n);return g(s,"argument-error"),We._fromEmailAndCode(e,s.code,s.tenantId)}}Le.PROVIDER_ID="password";Le.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Le.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends Tt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Fe extends Pe{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return g("providerId"in n&&"signInMethod"in n,"argument-error"),X._fromParams(n)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return g(e.idToken||e.accessToken,"argument-error"),X._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Fe.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Fe.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s,oauthTokenSecret:i,pendingToken:r,nonce:o,providerId:l}=e;if(!s&&!i&&!n&&!r||!l)return null;try{return new Fe(l)._credential({idToken:n,accessToken:s,nonce:o,pendingToken:r})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne extends Pe{constructor(){super("facebook.com")}static credential(e){return X._fromParams({providerId:ne.PROVIDER_ID,signInMethod:ne.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ne.credentialFromTaggedObject(e)}static credentialFromError(e){return ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ne.credential(e.oauthAccessToken)}catch{return null}}}ne.FACEBOOK_SIGN_IN_METHOD="facebook.com";ne.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V extends Pe{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return X._fromParams({providerId:V.PROVIDER_ID,signInMethod:V.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return V.credentialFromTaggedObject(e)}static credentialFromError(e){return V.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return V.credential(n,s)}catch{return null}}}V.GOOGLE_SIGN_IN_METHOD="google.com";V.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se extends Pe{constructor(){super("github.com")}static credential(e){return X._fromParams({providerId:se.PROVIDER_ID,signInMethod:se.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return se.credentialFromTaggedObject(e)}static credentialFromError(e){return se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return se.credential(e.oauthAccessToken)}catch{return null}}}se.GITHUB_SIGN_IN_METHOD="github.com";se.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie extends Pe{constructor(){super("twitter.com")}static credential(e,n){return X._fromParams({providerId:ie.PROVIDER_ID,signInMethod:ie.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ie.credentialFromTaggedObject(e)}static credentialFromError(e){return ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ie.credential(n,s)}catch{return null}}}ie.TWITTER_SIGN_IN_METHOD="twitter.com";ie.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ya(t,e){return Qe(t,"POST","/v1/accounts:signUp",ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await D._fromIdTokenResponse(e,s,i),o=Gn(s);return new me({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Gn(s);return new me({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Gn(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends de{constructor(e,n,s,i){super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,mt.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new mt(e,n,s,i)}}function Js(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?mt._fromErrorAndOperation(t,r,e,s):r})}async function va(t,e,n=!1){const s=await Ce(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return me._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wa(t,e,n=!1){const{auth:s}=t;if(A(s.app))return Promise.reject($(s));const i="reauthenticate";try{const r=await Ce(t,Js(s,i,e,t),n);g(r.idToken,s,"internal-error");const o=un(r.idToken);g(o,s,"internal-error");const{sub:l}=o;return g(t.uid===l,s,"user-mismatch"),me._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&x(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ys(t,e,n=!1){if(A(t.app))return Promise.reject($(t));const s="signIn",i=await Js(t,s,e),r=await me._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function ba(t,e){return Ys(H(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xs(t){const e=H(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function _a(t,e,n){if(A(t.app))return Promise.reject($(t));const s=H(t),o=await Yt(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ya).catch(d=>{throw d.code==="auth/password-does-not-meet-requirements"&&Xs(t),d}),l=await me._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(l.user),l}function Ia(t,e,n){return A(t.app)?Promise.reject($(t)):ba(F(t),Le.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Xs(t),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ka(t,e){return ee(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ea(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=F(t),r={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ce(s,ka(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const l=s.providerData.find(({providerId:d})=>d==="password");l&&(l.displayName=s.displayName,l.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function Sa(t,e,n,s){return F(t).onIdTokenChanged(e,n,s)}function Ta(t,e,n){return F(t).beforeAuthStateChanged(e,n)}function Ca(t,e,n,s){return F(t).onAuthStateChanged(e,n,s)}function Aa(t){return F(t).signOut()}const yt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yt,"1"),this.storage.removeItem(yt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa=1e3,La=10;class Zs extends Qs{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Vs(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,d)=>{this.notifyListeners(o,d)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Wo()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,La):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},xa)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zs.type="LOCAL";const Pa=Zs;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends Qs{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ei.type="SESSION";const ti=ei;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Ct(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,r)),d=await Ra(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:d})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ct.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((l,d)=>{const u=gn("",20);i.port1.start();const h=setTimeout(()=>{d(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(p){const f=p;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(f.data.response);break;default:clearTimeout(h),clearTimeout(r),d(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(){return window}function Na(t){M().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(){return typeof M().WorkerGlobalScope<"u"&&typeof M().importScripts=="function"}async function Oa(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $a(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Ma(){return ni()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si="firebaseLocalStorageDb",Ua=1,vt="firebaseLocalStorage",ii="fbase_key";class Ze{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function At(t,e){return t.transaction([vt],e?"readwrite":"readonly").objectStore(vt)}function Fa(){const t=indexedDB.deleteDatabase(si);return new Ze(t).toPromise()}function Xt(){const t=indexedDB.open(si,Ua);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(vt,{keyPath:ii})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(vt)?e(s):(s.close(),await Fa(),e(await Xt()))})})}async function Kn(t,e,n){const s=At(t,!0).put({[ii]:e,value:n});return new Ze(s).toPromise()}async function Ha(t,e){const n=At(t,!1).get(e),s=await new Ze(n).toPromise();return s===void 0?null:s.value}function Jn(t,e){const n=At(t,!0).delete(e);return new Ze(n).toPromise()}const ja=800,Ba=3;class ri{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xt(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Ba)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ni()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ct._getInstance(Ma()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await Oa(),!this.activeServiceWorker)return;this.sender=new Da(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$a()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xt();return await Kn(e,yt,"1"),await Jn(e,yt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Kn(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Ha(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jn(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=At(i,!1).getAll();return new Ze(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ja)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ri.type="LOCAL";const za=ri;new Xe(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t,e){return e?G(e):(g(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends fn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ee(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ee(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ee(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Va(t){return Ys(t.auth,new yn(t),t.bypassAuthState)}function Wa(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),wa(n,new yn(t),t.bypassAuthState)}async function qa(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),va(n,new yn(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:l}=e;if(o){this.reject(o);return}const d={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(d))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Va;case"linkViaPopup":case"linkViaRedirect":return qa;case"reauthViaPopup":case"reauthViaRedirect":return Wa;default:x(this.auth,"internal-error")}}resolve(e){Y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=new Xe(2e3,1e4);async function ai(t,e,n){if(A(t.app))return Promise.reject(N(t,"operation-not-supported-in-this-environment"));const s=H(t);Ps(t,e,Tt);const i=mn(s,n);return new fe(s,"signInViaPopup",e,i).executeNotNull()}class fe extends oi{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,fe.currentPopupAction&&fe.currentPopupAction.cancel(),fe.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){Y(this.filter.length===1,"Popup operations only handle one event");const e=gn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(N(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(N(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fe.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(N(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ga.get())};e()}}fe.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka="pendingRedirect",at=new Map;class Ja extends oi{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=at.get(this.auth._key());if(!e){try{const s=await Ya(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}at.set(this.auth._key(),e)}return this.bypassAuthState||at.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ya(t,e){const n=li(e),s=ci(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}async function Xa(t,e){return ci(t)._set(li(e),"true")}function Qa(t,e){at.set(t._key(),e)}function ci(t){return G(t._redirectPersistence)}function li(t){return ot(Ka,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(t,e,n){return Za(t,e,n)}async function Za(t,e,n){if(A(t.app))return Promise.reject($(t));const s=H(t);Ps(t,e,Tt),await s._initializationPromise;const i=mn(s,n);return await Xa(i,s),i._openRedirect(s,e,"signInViaRedirect")}async function ec(t,e){return await H(t)._initializationPromise,ui(t,e,!1)}async function ui(t,e,n=!1){if(A(t.app))return Promise.reject($(t));const s=H(t),i=mn(s,e),o=await new Ja(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc=600*1e3;class nc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sc(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!hi(e)){const i=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(N(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tc&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yn(e))}saveEventToCache(e){this.cachedEventUids.add(Yn(e)),this.lastProcessedEventTime=Date.now()}}function Yn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hi({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sc(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hi(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ic(t,e={}){return ee(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oc=/^https?/;async function ac(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ic(t);for(const n of e)try{if(cc(n))return}catch{}x(t,"unauthorized-domain")}function cc(t){const e=Kt(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!oc.test(n))return!1;if(rc.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=new Xe(3e4,6e4);function Xn(){const t=M().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function dc(t){return new Promise((e,n)=>{var i,r,o;function s(){Xn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xn(),n(N(t,"network-request-failed"))},timeout:lc.get()})}if((r=(i=M().gapi)==null?void 0:i.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=M().gapi)!=null&&o.load)s();else{const l=ea("iframefcb");return M()[l]=()=>{gapi.load?s():n(N(t,"network-request-failed"))},qs(`${Zo()}?onload=${l}`).catch(d=>n(d))}}).catch(e=>{throw ct=null,e})}let ct=null;function uc(t){return ct=ct||dc(t),ct}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=new Xe(5e3,15e3),fc="__/auth/iframe",pc="emulator/auth/iframe",gc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yc(t){const e=t.config;g(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?dn(e,pc):`https://${t.config.authDomain}/${fc}`,s={apiKey:e.apiKey,appName:t.name,v:Ye},i=mc.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Je(s).slice(1)}`}async function vc(t){const e=await uc(t),n=M().gapi;return g(n,t,"internal-error"),e.open({where:document.body,url:yc(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gc,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=N(t,"network-request-failed"),l=M().setTimeout(()=>{r(o)},hc.get());function d(){M().clearTimeout(l),i(s)}s.ping(d).then(d,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bc=500,_c=600,Ic="_blank",kc="http://localhost";class Qn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ec(t,e,n,s=bc,i=_c){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const d={...wc,width:s.toString(),height:i.toString(),top:r,left:o},u=E().toLowerCase();n&&(l=Fs(u)?Ic:n),Ms(u)&&(e=e||kc,d.scrollbars="yes");const h=Object.entries(d).reduce((f,[v,S])=>`${f}${v}=${S},`,"");if(Vo(u)&&l!=="_self")return Sc(e||"",l),new Qn(null);const p=window.open(e||"",l,h);g(p,t,"popup-blocked");try{p.focus()}catch{}return new Qn(p)}function Sc(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc="__/auth/handler",Cc="emulator/auth/handler",Ac=encodeURIComponent("fac");async function Zn(t,e,n,s,i,r){g(t.config.authDomain,t,"auth-domain-config-required"),g(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ye,eventId:i};if(e instanceof Tt){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",cr(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof Pe){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const d=await t._getAppCheckToken(),u=d?`#${Ac}=${encodeURIComponent(d)}`:"";return`${xc(t)}?${Je(l).slice(1)}${u}`}function xc({config:t}){return t.emulator?dn(t,Cc):`https://${t.authDomain}/${Tc}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="webStorageSupport";class Lc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ti,this._completeRedirectFn=ui,this._overrideRedirectResult=Qa}async _openPopup(e,n,s,i){var o;Y((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await Zn(e,n,s,Kt(),i);return Ec(e,r,gn())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Zn(e,n,s,Kt(),i);return Na(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Y(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await vc(e),s=new nc(e);return n.register("authEvent",i=>(g(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ft,{type:Ft},i=>{var o;const r=(o=i==null?void 0:i[0])==null?void 0:o[Ft];r!==void 0&&n(!!r),x(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ac(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vs()||Us()||hn()}}const Pc=Lc;var es="@firebase/auth",ts="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Nc(t){ze(new Te("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;g(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const d={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ws(t)},u=new Yo(s,i,r,d);return oa(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ze(new Te("auth-internal",e=>{const n=H(e.getProvider("auth").getImmediate());return(s=>new Rc(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_e(es,ts,Dc(t)),_e(es,ts,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=300,$c=_s("authIdTokenMaxAge")||Oc;let ns=null;const Mc=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>$c)return;const i=n==null?void 0:n.token;ns!==i&&(ns=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Uc(t=uo()){const e=Ss(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ra(t,{popupRedirectResolver:Pc,persistence:[za,Pa,ti]}),s=_s("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=Mc(r.toString());Ta(n,o,()=>o(n.currentUser)),Sa(n,l=>o(l))}}const i=qi("auth");return i&&aa(n,`http://${i}`),n}function Fc(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Xo({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=N("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",Fc().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Nc("Browser");const Hc={apiKey:"AIzaSyAFURz8fEGSTameAW5YvBKWpr2LXv9Ang0",authDomain:"family-pantry-c65d6.firebaseapp.com",projectId:"family-pantry-c65d6",storageBucket:"family-pantry-c65d6.firebasestorage.app",messagingSenderId:"710701847077",appId:"1:710701847077:web:407a8937330ad2ebcfe5cc"},jc=Ts(Hc),Q=Uc(jc),ss=new V,wt=new Fe("apple.com");wt.addScope("email");wt.addScope("name");let fi=null;const lt=[];function Bc(t){return lt.push(t),t(fi),()=>{const e=lt.indexOf(t);e!==-1&&lt.splice(e,1)}}function zc(t){fi=t,lt.forEach(e=>e(t))}Ca(Q,t=>{zc(t||null)});ec(Q).catch(t=>{t.code!=="auth/redirect-cancelled-by-user"&&console.error("Redirect sign-in error:",t)});async function Vc(){try{return(await ai(Q,ss)).user}catch(t){if(t.code==="auth/popup-blocked"||t.code==="auth/popup-closed-by-user")return await di(Q,ss),null;throw t}}async function Wc(){try{return(await ai(Q,wt)).user}catch(t){if(t.code==="auth/popup-blocked"||t.code==="auth/popup-closed-by-user")return await di(Q,wt),null;throw t}}async function qc(t,e){return(await Ia(Q,t,e)).user}async function Gc(t,e,n){const s=await _a(Q,t,e);return n&&await Ea(s.user,{displayName:n}),s.user}async function Kc(){await Aa(Q)}function vn(){const t=new Date().getHours(),e=t<12?"Good morning":t<17?"Good afternoon":"Good evening",n=localStorage.getItem("ks-who")||(a.cfg.adults||"Bora").split(",")[0].trim(),s=c("grt");s&&(s.innerHTML=`${e}, <span>${n}</span>`);const i=c("hdt");i&&(i.textContent=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})),ve()}function pi(){gi(),dt==null||dt()}let dt=null;function Jc(t){dt=t}function gi(){const t=new Date().getHours(),e=t<12?"Good morning":t<17?"Good afternoon":"Good evening",n=localStorage.getItem("ks-who")||(a.cfg.adults||"Bora").split(",")[0].trim(),s=c("grt");s&&!s.innerHTML&&(s.innerHTML=`${e}, <span>${n}</span>`),ve(),et(),Xc(),Re(),mi()}function Re(){const t=re(),e=a.mp[t],n=c("tnd"),s=c("tna"),i=c("tonight-main");i&&(i.onclick=function(){window.openMealM(t,"Today")}),e?(n&&(n.innerHTML=e),s&&(s.innerHTML=`<button class="btn bsm bp" onclick="event.stopPropagation();openCooked('${t}')">✓ Cooked</button><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${t}','Today')">Edit</button>`)):(n&&(n.innerHTML='<span style="font-size:.9rem;color:var(--mt);font-style:italic">No meal planned yet</span>'),s&&(s.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${t}','Today')">+ Plan dinner</button><button class="btn bsm bs" onclick="event.stopPropagation();showScreen('chat')">Ask Claude →</button>`))}function ve(){const t=["S","M","T","W","T","F","S"],e=new Date;e.setHours(0,0,0,0);const n=c("wgrd");n&&(n.innerHTML=xe().map((s,i)=>{const r=s.toISOString().split("T")[0],o=s.getTime()===e.getTime(),l=a.mp[r];return`<div class="wd${o?" today":""}${l?" hm":""}" onclick="openMealM('${r}','${t[i]} ${s.getDate()}')"><div class="wdn">${t[i]}</div><div class="wdd">${s.getDate()}</div>${l?`<div class="wdm">${l.substring(0,10)}${l.length>10?"…":""}</div>`:""}</div>`}).join(""),Yc())}function Yc(){const t=c("variety-nudge");if(!t)return;const e=xe().map(o=>a.mp[o.toISOString().split("T")[0]]).filter(Boolean);if(e.length<3){t.style.display="none";return}const n=e.some(o=>/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(o)),s=e.some(o=>/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner/i.test(o)),i={};e.forEach(o=>{const l=o.toLowerCase();i[l]=(i[l]||0)+1});const r=Object.entries(i).find(([,o])=>o>=3);r?(t.style.display="block",t.innerHTML="🔄 <strong>"+r[0]+"</strong> is planned "+r[1]+"× this week — maybe try something different?"):!n&&!s?(t.style.display="block",t.innerHTML="🌍 No Bangladeshi or Turkish dishes this week yet — ask Claude for ideas!"):n?s?t.style.display="none":(t.style.display="block",t.innerHTML="🇹🇷 No Turkish dishes this week — köfte or mercimek çorbası would be great!"):(t.style.display="block",t.innerHTML="🇧🇩 No Bangladeshi dishes this week — how about a dal or fish curry?")}function et(){const t=a.inv.filter(l=>{const d=U(l.expiry);return d&&(d.c==="expiring"||d.c==="expired")}).length,e=a.shop.filter(l=>!l.checked).length,n=c("home-exp-val"),s=c("home-exp-sub");n&&(t>0?(n.textContent=t+" item"+(t>1?"s":""),n.className="tc-val",n.style.color="var(--am)"):(n.textContent="All fresh!",n.className="tc-val tc-green")),s&&(s.textContent=t>0?"expiring soon":"Nothing in next 3 days");const i=c("home-shop-val"),r=c("home-shop-sub");i&&(i.textContent=e),r&&(r.textContent=e===1?"item to buy":e===0?"all stocked up":"items to buy");const o=c("sgrd");o&&(o.innerHTML=`<div class="sc" onclick="showScreen('inventory')"><div class="sci">🧺</div><div class="scv">${a.inv.length}</div><div class="scl">Items in stock</div></div><div class="sc${t>0?" warn":""}" onclick="showScreen('inventory')"><div class="sci">⏱</div><div class="scv">${t}</div><div class="scl">Expiring soon</div></div><div class="sc" onclick="showScreen('shopping')"><div class="sci">🛒</div><div class="scv">${e}</div><div class="scl">To buy</div></div><div class="sc" onclick="showScreen('recipes')"><div class="sci">📖</div><div class="scv">${a.recs.length}</div><div class="scl">Saved recipes</div></div>`)}function Xc(){const t=a.inv.filter(s=>{const i=U(s.expiry);return i&&(i.c==="expiring"||i.c==="expired")}).sort((s,i)=>new Date(s.expiry)-new Date(i.expiry)),e=c("exslbl"),n=c("expl");if(!(!e||!n)){if(!t.length){e.style.display="none",n.innerHTML="";return}e.style.display="flex",n.innerHTML=t.map(s=>{const i=U(s.expiry);return`<div class="exi${i.c==="expired"?" exp":""}" onclick="openAdj('${s.id}')"><div class="exn">${s.name}</div><div class="exd">${i.l}</div></div>`}).join("")}}function mi(){const t=["fridge","freezer","pantry"].map(n=>{const s=a.inv.filter(i=>i.location===n);return s.length?sn(n).toUpperCase()+`
`+s.map(i=>`- ${i.name}${i.brand?` (${i.brand})`:""}: ${i.qty} ${i.unit}`).join(`
`):""}).filter(Boolean).join(`

`),e=c("expbox");e&&(e.textContent=t||"No items yet.")}function st(t){const e=rn[Be(t)]||"🛒",n=t.image?`<img src="${t.image}" class="iimg" onerror="this.style.display='none'"/>`:`<div class="iph">${e}</div>`,s=U(t.expiry),i=s?s.c==="expired"?" expired":s.c==="expiring"?" expiring":"":"",r=s?`<div class="etag ${s.c}">${s.l}</div>`:"";return`<div class="swipe-wrap" id="sw-${t.id}" data-id="${t.id}" data-list="inv">
    <div class="swipe-inner">
      <div class="iit${i}" onclick="swipeRowTap('${t.id}','inv')">
        <div class="sel-cb">✓</div>
        <div class="iileft">${n}<div>
          <div class="inm">${t.name}</div>
          <div class="isb">${t.brand||Be(t)}</div>
          ${t.note?`<div class="shnote" style="margin-top:2px">📝 ${t.note}</div>`:""}
          ${r}
        </div></div>
        <div style="text-align:right">
          <div class="iqt">${t.qty}</div>
          <div class="iun">${t.unit}</div>
        </div>
      </div>
    </div>
    <div class="swipe-del" onclick="swipeDelItem('${t.id}','inv')"><span>🗑</span>Delete</div>
  </div>`}function wn(){const t=(i,r)=>i.name.localeCompare(r.name),e=(a.it==="all"||a.it==="cat"?a.inv:a.inv.filter(i=>i.location===a.it)).slice().sort(t),n=c("isub");n&&(n.textContent=e.length+" "+({all:"items",fridge:"fridge items",freezer:"frozen items",pantry:"pantry items",cat:"items by type"}[a.it]||"items")),mi();const s=c("ibody");if(s){if(!e.length){s.innerHTML='<div class="es"><div class="ei">🧺</div><p>No items here yet.<br/>Tap Scan or Add to get started.</p></div>';return}if(a.it==="cat"){const i={};e.forEach(r=>{const o=Be(r);i[o]||(i[o]=[]),i[o].push(r)}),s.innerHTML=Object.entries(i).sort((r,o)=>r[0].localeCompare(o[0])).map(([r,o])=>`<div class="lgrp"><div class="lgt">${rn[r]||"📦"} ${r}</div><div class="ilst">${o.map(st).join("")}</div></div>`).join(""),a.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(r=>{r.classList.add("selecting"),a.selectedIds.has(r.dataset.id)&&r.classList.add("selected")});return}if(a.it==="all"){const i=a.inv.filter(o=>{const l=U(o.expiry);return l&&(l.c==="expiring"||l.c==="expired")}).sort((o,l)=>new Date(o.expiry)-new Date(l.expiry)),r=i.length?`<div class="lgrp"><div class="lgt" style="color:var(--am)">⚠️ Expiring Soon</div><div class="ilst">${i.map(st).join("")}</div></div>`:"";s.innerHTML=r+["fridge","freezer","pantry"].map(o=>{const l=e.filter(d=>d.location===o);return l.length?`<div class="lgrp"><div class="lgt">${sn(o)}</div><div class="ilst">${l.map(st).join("")}</div></div>`:""}).join(""),a.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(o=>{o.classList.add("selecting"),a.selectedIds.has(o.dataset.id)&&o.classList.add("selected")});return}s.innerHTML=`<div class="ilst">${e.map(st).join("")}</div>`,a.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(i=>{i.classList.add("selecting"),a.selectedIds.has(i.dataset.id)&&i.classList.add("selected")})}}function Qc(t){const e=a.inv.find(r=>r.id===t);if(!e)return;a.adjId=t;const n=rn[Be(e)]||"🛒",s=e.image?`<img src="${e.image}" class="pimg" onerror="this.style.display='none'"/>`:`<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">${n}</div>`;let i="";e.nutrition&&(e.nutrition.calories||e.nutrition.protein)&&(i=`<div class="ngrd">${[["Cal",e.nutrition.calories],["Protein",e.nutrition.protein],["Fat",e.nutrition.fat],["Carbs",e.nutrition.carbs]].map(([r,o])=>`<div class="nb"><div class="nv">${o||"—"}</div><div class="nl">${r}</div></div>`).join("")}</div>`),c("adjbody").innerHTML=`<div class="pcard"><div class="phdr">${s}<div style="flex:1"><div class="pnm">${e.name}</div>${e.brand?`<div class="pbr">${e.brand}</div>`:""}<div style="font-size:.7rem;color:var(--mt);margin-top:2px">Added ${e.addedAt}</div>${e.source?`<span class="srcb" style="display:inline-block;margin-top:4px">${e.source}</span>`:""}</div></div>${i}<div class="frow" style="margin-top:14px"><label class="flbl">Location</label><div class="lpick"><button class="lbtn ${e.location==="fridge"?"sel":""}" onclick="updL('fridge',this)">🌡 Fridge</button><button class="lbtn ${e.location==="freezer"?"sel":""}" onclick="updL('freezer',this)">🧊 Freezer</button><button class="lbtn ${e.location==="pantry"?"sel":""}" onclick="updL('pantry',this)">🥫 Pantry</button></div></div><div class="qrow"><span class="qlbl">Quantity</span><div class="qctl"><button class="qbtn" onclick="adjQ(-1)">−</button><input class="qinp" id="adjqty" type="number" min="0" value="${e.qty}" oninput="adjQD()"/><button class="qbtn" onclick="adjQ(1)">+</button></div></div><div class="frow"><label class="flbl">Expiry Date <span class="otag">optional</span></label><input class="fd" id="adjexp" type="date" value="${e.expiry||""}" onchange="adjE()"/></div><div class="frow"><label class="flbl">Notes <span class="otag">optional</span></label><textarea class="sh-note-inp" id="adjnote" rows="2" placeholder="Brand, store, reminders…" onblur="adjNote()">${e.note||""}</textarea></div></div>`,c("rembtn").onclick=()=>bn(t),ye("adj")}async function bn(t){const e=a.inv.find(n=>n.id===t);if(e){const n=U(e.expiry);n&&(n.c==="expired"||n.c==="expiring")&&await Pi(e.name)}await nn(t),m("Item removed"),C("adj")}async function Zc(t,e){const n=a.inv.find(s=>s.id===a.adjId);n&&(document.querySelectorAll("#adjbody .lbtn").forEach(s=>s.classList.remove("sel")),e.classList.add("sel"),await Z({...n,location:t}))}async function el(t){const e=a.inv.find(s=>s.id===a.adjId);if(!e)return;const n=Math.max(0,e.qty+t);if(c("adjqty").value=n,n===0){await bn(a.adjId);return}await Z({...e,qty:n})}async function tl(){const t=a.inv.find(n=>n.id===a.adjId);if(!t)return;const e=parseInt(c("adjqty").value);!isNaN(e)&&e>=0&&await Z({...t,qty:e})}async function nl(){const t=a.inv.find(e=>e.id===a.adjId);t&&await Z({...t,expiry:c("adjexp").value||null})}async function sl(){const t=a.inv.find(n=>n.id===a.adjId);if(!t)return;const e=(c("adjnote").value||"").trim();await Z({...t,note:e||null})}function il(t){a.it=t,document.querySelectorAll(".itab").forEach(n=>n.classList.remove("active"));const e=c("itab-"+t);e&&e.classList.add("active"),wn()}async function rl(){const t=c("man").value.trim();if(!t)return;const e=c("mac").value,n=c("mau").value.trim()||"unit",s=Math.max(1,parseInt(c("maq").value)||1),i=c("mae").value||null,r="itm-"+t.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now();await Z({id:r,barcode:r,name:t,brand:"",unit:n,qty:s,location:a.maL,category:e,image:null,source:"Manual",nutrition:null,expiry:i,addedAt:new Date().toLocaleDateString()}),c("man").value="",c("maq").value=1,c("mae").value="",c("mabtn").disabled=!0,m(`${t} added!`),C("madd")}function ol(){c("mabtn").disabled=!c("man").value.trim()}function al(t){const e=c("maq");e.value=Math.max(1,(parseInt(e.value)||1)+t)}function cl(t,e){a.maL=t,document.querySelectorAll("#ov-madd .lbtn").forEach(n=>n.classList.remove("sel")),e&&e.classList.add("sel")}async function ll(){const t=c("imptxt").value.trim();if(!t)return;let e=0,n=0,s="pantry";for(const i of t.split(`
`)){const r=i.toLowerCase();r.includes("fridge")?s="fridge":r.includes("freezer")?s="freezer":r.includes("pantry")&&(s="pantry");const o=i.match(/^\|\s*([^|]+?)\s*\|\s*(\d+(?:\.\d+)?)\s*\|\s*([^|]+?)\s*\|/),l=i.match(/^[-*]\s+(.+?):\s*(\d+(?:\.\d+)?)\s*([a-zA-Z%\/]+.*)?$/);let d,u,h;if(o?(d=o[1].trim(),u=parseFloat(o[2]),h=o[3].trim()):l&&(d=l[1].trim(),u=parseFloat(l[2]),h=(l[3]||"unit").trim()),d&&u&&d!=="Item"&&d!=="---"&&!d.startsWith("-")){const p="item-imp-"+d.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),f=a.inv.find(v=>v.id===p);await Z({id:p,barcode:p,name:d,brand:"",unit:h||"unit",qty:u,location:s,category:"Imported",image:null,source:"Imported",nutrition:null,expiry:null,addedAt:f?f.addedAt:new Date().toLocaleDateString()}),f?n++:e++}}c("imptxt").value="",m(`Imported ${e} new, updated ${n}`),C("import")}function it(t){return`<div class="swipe-wrap" id="sw-${t.id}" data-id="${t.id}" data-list="shop">
    <div class="swipe-inner">
      <div class="shit${t.checked?" chk":""}" onclick="swipeRowTap('${t.id}','shop')">
        <div class="sel-cb">✓</div>
        <div class="shck">${t.checked?"✓":""}</div>
        <div style="flex:1;min-width:0">
          <div class="shnm">${t.name}</div>
          ${t.note?`<div class="shnote">📝 ${t.note}</div>`:""}
        </div>
        ${t.price?`<div class="price-tag">~$${t.price}</div>`:""}
        <button class="sh-note-btn" onclick="toggleShNote(event,'${t.id}')" title="Add note">✏️</button>
      </div>
      <div class="sh-note-edit" id="sne-${t.id}">
        <textarea class="sh-note-inp" id="sni-${t.id}" rows="2" placeholder="Add a note… (e.g. brand, size, store)" onblur="saveShNote('${t.id}')">${t.note||""}</textarea>
      </div>
    </div>
    <div class="swipe-del" onclick="swipeDelItem('${t.id}','shop')"><span>🗑</span>Delete</div>
  </div>`}function tt(){const t=(o,l)=>o.name.localeCompare(l.name),e=c("shlist"),n=a.shop.filter(o=>!o.checked).sort(t),s=a.shop.filter(o=>o.checked).sort(t),i=c("clrchk");i&&(i.style.display=s.length?"block":"none");const r=c("shsub");if(r&&(r.textContent=n.length+" items to buy"),!!e){if(!a.shop.length){e.innerHTML='<div class="es"><div class="ei">🛒</div><p>Your list is empty!<br/>Add items or use "Build from meal plan".</p></div>';return}if(a.aisleMode&&n.length){const o={};n.forEach(l=>{const d=Mi(l.name);o[d]||(o[d]=[]),o[d].push(l)}),e.innerHTML=Object.entries(o).sort().map(([l,d])=>`<div class="shsec">${l}</div>${d.map(it).join("")}`).join("")+(s.length?`<div class="shsec">Done</div>${s.map(it).join("")}`:"")}else e.innerHTML=(n.length?`<div class="shsec">To buy (${n.length})</div>${n.map(it).join("")}`:"")+(s.length?`<div class="shsec">Done</div>${s.map(it).join("")}`:"");if(a.selectMode==="shop"){document.querySelectorAll("#shlist .swipe-wrap").forEach(l=>{l.classList.add("selecting"),a.selectedIds.has(l.dataset.id)&&l.classList.add("selected")});const o=document.querySelector(".shbody");o&&(o.style.paddingLeft="52px")}}}function dl(){const t=c("shi"),e=t.value.trim();e&&(le({id:Date.now().toString(),name:e,checked:!1,src:"manual"}),t.value="")}function ul(t){const e=a.shop.find(n=>n.id===t);e&&le({...e,checked:!e.checked})}function hl(t,e){t.stopPropagation();const n=c("sne-"+e),s=c("sni-"+e);if(!n)return;n.classList.toggle("open")&&s&&(s.focus(),s.setSelectionRange(s.value.length,s.value.length))}function fl(t){const e=c("sni-"+t);if(!e)return;const n=a.shop.find(i=>i.id===t);if(!n)return;const s=e.value.trim();s!==(n.note||"")&&le({...n,note:s})}function pl(){a.aisleMode=!a.aisleMode;const t=c("aislebtn");t&&(t.style.background=a.aisleMode?"var(--ac)":"",t.style.color=a.aisleMode?"var(--bg)":""),tt()}function gl(t){["list","deals"].forEach(s=>{const i=c("shtab-"+s);i&&i.classList.remove("active");const r=c("sh-"+s+"-body");r&&(r.style.display="none")});const e=c("shtab-"+t);e&&e.classList.add("active");const n=c("sh-"+t+"-body");n&&(n.style.display="block")}function ml(){const t=a.shop.filter(s=>!s.checked);if(!t.length){m("List is empty!");return}const n=`🛒 Shopping List

`+t.map(s=>s.price?"• "+s.name+" (~$"+s.price+")":"• "+s.name).join(`
`);navigator.share?navigator.share({title:"Shopping List",text:n}).catch(()=>{}):navigator.clipboard&&navigator.clipboard.writeText(n).then(()=>m("List copied!"))}function yl(){const t=a.shop.filter(n=>n.checked);if(!t.length){m("No completed items!");return}const e=c("atk-body");e.innerHTML=`<div style="padding:16px">
    <p style="font-size:.82rem;color:var(--mt);margin-bottom:16px">Choose where each item goes in your kitchen, then tap Add All.</p>
    ${t.map(n=>{const s=gs(n.name);return`<div class="atk-item" id="atk-${n.id}" data-loc="${s}">
        <div class="atk-name">${n.name}</div>
        <div class="atk-loc">
          <button onclick="setAtkLoc('${n.id}','fridge',this)" class="${s==="fridge"?"sel":""}">🌡 Fridge</button>
          <button onclick="setAtkLoc('${n.id}','freezer',this)" class="${s==="freezer"?"sel":""}">🧊 Freeze</button>
          <button onclick="setAtkLoc('${n.id}','pantry',this)" class="${s==="pantry"?"sel":""}">🥫 Pantry</button>
        </div>
      </div>`}).join("")}
  </div>`,ye("atk")}function vl(t,e,n){const s=c("atk-"+t);s.dataset.loc=e,s.querySelectorAll(".atk-loc button").forEach(i=>i.classList.remove("sel")),n.classList.add("sel")}async function wl(){const t=a.shop.filter(s=>s.checked),e=new Date().toLocaleDateString();let n=0;for(const s of t){const i=c("atk-"+s.id);if(!i)continue;const r=i.dataset.loc||gs(s.name),o=a.inv.find(l=>l.name.toLowerCase()===s.name.toLowerCase());await Z({id:o?o.id:"inv-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:o?o.name:s.name,qty:o?o.qty+1:1,unit:o?o.unit:"unit",location:r,category:o?o.category:Be({name:s.name}),addedAt:o?o.addedAt:e,brand:o?o.brand:"",expiry:o?o.expiry:null,image:o?o.image:null,source:"shopping"}),await kt(s.id),n++}C("atk"),m(`${n} item${n!==1?"s":""} added to your kitchen! 🧺`)}async function bl(){const t=xe().map(i=>{const r=i.toISOString().split("T")[0];return a.mp[r]?`${i.toLocaleDateString("en-US",{weekday:"short"})}: ${a.mp[r]}`:""}).filter(Boolean).join(", ");if(!t){m("No meals planned yet!");return}const e=a.inv.map(i=>`${i.name} (${i.qty} ${i.unit})`).join(", "),n=document.querySelector('[onclick="buildList()"]'),s=n?n.textContent:"";n&&(n.disabled=!0,n.textContent="⏳ Thinking…");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:500,messages:[{role:"user",content:`Week meals: ${t}
Already have: ${e}
List ONLY ingredients still needed. Return ONLY a bullet list, each line starting "- ". No categories, no headers, no explanation.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",l=[];if(o.split(`
`).forEach(d=>{const u=d.match(/^[-•*]\s+(.+)/);if(u){const h=u[1].replace(/\*\*/g,"").trim();h&&!a.shop.find(p=>p.name.toLowerCase()===h.toLowerCase())&&l.push({name:h,sel:!0})}}),!l.length){m("Nothing new needed — you're all stocked! ✓");return}window._bpItems=l,c("bpList").innerHTML=l.map((d,u)=>`<div id="bpitem-${u}" onclick="bpTog(${u})" style="display:flex;align-items:center;gap:12px;padding:13px 16px;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;cursor:pointer;transition:all .15s"><div id="bpck-${u}" style="width:24px;height:24px;border-radius:50%;background:var(--gn);border:2px solid var(--gn);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.8rem;color:#0c0c0a;transition:all .2s">✓</div><div style="font-size:.9rem;font-weight:500">${d.name}</div></div>`).join(""),_n(),c("buildPreviewM").classList.add("active")}catch{m("Couldn't reach Claude — check connection")}finally{n&&(n.disabled=!1,n.textContent=s)}}function _l(t){window._bpItems[t].sel=!window._bpItems[t].sel;const e=c("bpck-"+t),n=c("bpitem-"+t);window._bpItems[t].sel?(e.textContent="✓",e.style.background="var(--gn)",e.style.borderColor="var(--gn)",e.style.color="#0c0c0a",n.style.borderColor="var(--b1)"):(e.textContent="",e.style.background="transparent",e.style.borderColor="var(--b2)",n.style.borderColor="var(--b2)"),_n()}function Il(t){window._bpItems.forEach((e,n)=>{window._bpItems[n].sel=t;const s=c("bpck-"+n),i=c("bpitem-"+n);t?(s.textContent="✓",s.style.background="var(--gn)",s.style.borderColor="var(--gn)",s.style.color="#0c0c0a",i.style.borderColor="var(--b1)"):(s.textContent="",s.style.background="transparent",s.style.borderColor="var(--b2)",i.style.borderColor="var(--b2)")}),_n()}function _n(){const t=window._bpItems.filter(n=>n.sel).length,e=c("bpAddBtn");e&&(e.textContent=t?`Add ${t} item${t!==1?"s":""}  ✓`:"Nothing selected"),e&&(e.disabled=!t)}async function kl(){const t=window._bpItems.filter(e=>e.sel);if(!t.length){c("buildPreviewM").classList.remove("active");return}for(const e of t)await le({id:Date.now().toString()+Math.random().toString(36).slice(2),name:e.name,checked:!1,src:"meal-plan"});c("buildPreviewM").classList.remove("active"),m(`Added ${t.length} item${t.length!==1?"s":""}! 🛒`)}function Qt(t,e){const n=c("dealslist");if(!t||!t.length){n.innerHTML=`<div class="es"><div class="ei">🏷</div><p>No deals found for <strong>${e}</strong>.<br>Try a broader term or pick a different store.</p></div>`;return}n.innerHTML="",t.forEach(s=>{const i=document.createElement("div");i.className="deal-card deal-match";const r=document.createElement("div");r.style.flex="1";const o=document.createElement("div");o.className="deal-store",o.textContent=s.store||"Local Store";const l=document.createElement("div");l.className="deal-name",l.textContent=s.name||"";const d=document.createElement("div");if(d.style.cssText="display:flex;align-items:baseline;gap:6px;margin-top:4px;flex-wrap:wrap",s.sale_price){const h=document.createElement("span");h.className="deal-price",h.textContent=s.sale_price,d.appendChild(h)}if(s.orig_price){const h=document.createElement("span");h.className="deal-orig",h.textContent=s.orig_price,d.appendChild(h)}if(s.unit){const h=document.createElement("span");h.style.cssText="font-size:.7rem;color:var(--mt)",h.textContent=s.unit,d.appendChild(h)}if(s.savings){const h=document.createElement("span");h.className="deal-badge",h.textContent="Save "+s.savings,d.appendChild(h)}if(r.appendChild(o),r.appendChild(l),r.appendChild(d),s.details){const h=document.createElement("div");h.style.cssText="font-size:.74rem;color:var(--tx2);margin-top:5px;line-height:1.5",h.textContent=s.details,r.appendChild(h)}if(s.valid){const h=document.createElement("div");h.style.cssText="font-size:.68rem;color:var(--mt);margin-top:4px",h.textContent="📅 "+s.valid,r.appendChild(h)}const u=document.createElement("button");u.className="btn bs bsm",u.style.cssText="align-self:center;flex-shrink:0;margin-left:8px",u.textContent="+ List",(h=>{u.onclick=()=>yi(h)})(s.name||""),i.appendChild(r),i.appendChild(u),n.appendChild(i)})}function yi(t){const e=(t||"").replace(/&#39;/g,"'");a.shop.find(n=>n.name.toLowerCase()===e.toLowerCase())?m("Already on your list!"):(le({id:Date.now().toString(),name:e,checked:!1}),m(e+" added!"))}async function Zt(t,e){const n="ks-deals-"+e+"-"+t.toLowerCase().replace(/\s+/g,"_").substring(0,40),s=W(n);if(s&&s.ts&&Date.now()-s.ts<864e5)return s.deals;const i=e&&e!=="any"?e:"ShopRite, Stop & Shop, Wegmans, Whole Foods, or Trader Joe's",r="Search for current this-week grocery deals on: "+t+" at "+i+' near Edison NJ 08817. Do ONE web search only. Return ONLY a JSON array, no markdown fences: [{"name":"product","store":"store","sale_price":"$X.XX","orig_price":"$X.XX","unit":"per lb","savings":"$X off","details":"promo details","valid":"dates"}]. Return [] if nothing found. Up to 8 deals.',o=c("dealsstatus");o&&(o.textContent="Searching this week's flyers (1 search)...");const l=await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:1e3,tools:[{type:"web_search_20250305",name:"web_search"}],system:"You are a grocery deals finder. Use exactly ONE web search. Return only a JSON array.",messages:[{role:"user",content:r}]})});if(!l.ok){const v=await l.text();throw new Error("HTTP "+l.status+": "+v.substring(0,200))}const d=await l.json();if(d.error)throw new Error("API error: "+d.error.message);const u=(d.content||[]).filter(v=>v.type==="text").map(v=>v.text).join("");if(!u)throw new Error("No response. Stop: "+d.stop_reason);const h=u.replace(/```json|```/g,"").trim();let p=[],f=h.match(/\[[\s\S]*\]/);if(f)try{p=JSON.parse(f[0])}catch{p=[]}return He(n,{deals:p,ts:Date.now(),query:t,store:i}),p}async function El(){var s;const t=c("dealsearch").value.trim();if(!t){m("Enter something to search");return}const e=((s=c("dealstore"))==null?void 0:s.value)||"any",n=c("dealsstatus");n.style.display="block",n.style.color="var(--mt)",n.textContent="🔍 Searching "+(e!=="any"?e:"nearby stores")+" for "+t+"…",c("dealslist").innerHTML="";try{const i=await Zt(t,e);n.style.display="none",Qt(i,t)}catch(i){n.style.color="var(--rd)",n.textContent="Error: "+(i.message||"Unknown error")}}async function Sl(){var i,r;const t=a.shop.filter(o=>!o.checked);if(!t.length){const o=Object.values(a.mp).filter(Boolean);if(!o.length){m("Add items to your list first!");return}if(!confirm(`Your list is empty. Search deals for this week's meals?

`+o.join(", ")))return;const d=((i=c("dealstore"))==null?void 0:i.value)||"any",u=c("dealsstatus");u.style.display="block",u.textContent="Searching deals for your meal plan...",c("dealslist").innerHTML="";try{const h=await Zt(o.join(", "),d);u.style.display="none",Qt(h,o.join(", "))}catch(h){u.style.display="none",u.style.color="var(--rd)",u.textContent="Error: "+h.message}return}const e=((r=c("dealstore"))==null?void 0:r.value)||"any",n=c("dealsstatus"),s=t.slice(0,8).map(o=>o.name).join(", ");n.style.display="block",n.style.color="var(--mt)",n.textContent="Searching deals for: "+s+"...",c("dealslist").innerHTML="";try{const o=await Zt(s,e);n.style.display="none",o.length?Qt(o,s):c("dealslist").innerHTML='<div class="es"><div class="ei">🏷</div><p>No deals found this week.<br/>Try searching individually or a different store.</p></div>'}catch(o){n.style.display="none",n.style.color="var(--rd)",n.textContent="Error: "+o.message}}async function Tl(){var e,n;const t=c("dealsstatus");t.style.display="block",t.style.color="var(--mt)",t.textContent="Testing proxy...";try{const i=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:20,messages:[{role:"user",content:"Say 'connected' in one word."}]})})).json();i.error?(t.style.color="var(--rd)",t.textContent="Error: "+(i.error.message||JSON.stringify(i.error))):(t.style.color="var(--gn)",t.textContent="✓ Proxy connected! Response: "+(((n=(e=i.content)==null?void 0:e[0])==null?void 0:n.text)||"OK"))}catch(s){t.style.color="var(--rd)",t.textContent="Connection failed: "+s.message}}function vi(t){return[...document.querySelectorAll("#"+t+" .tag.sel")].map(e=>e.dataset.tag)}function Cl(t,e){document.querySelectorAll("#"+t+" .tag").forEach(n=>{n.classList.toggle("sel",(e||[]).includes(n.dataset.tag))})}function Al(t){t.classList.toggle("sel")}function xl(t){const e=Array.from({length:5},(s,i)=>`<span class="star${i<t.rating?" on":""}">${i<t.rating?"★":"☆"}</span>`).join(""),n=t.sourceUrl?`<a href="${t.sourceUrl}" target="_blank" onclick="event.stopPropagation()" style="font-size:.68rem;color:var(--ac);text-decoration:none;border:1px solid rgba(212,168,83,.3);border-radius:20px;padding:2px 8px;background:transparent">🔗 View original</a>`:t.source?`<span class="sbdg">${t.source}</span>`:"";return`<div class="rcd${t.favorited?" fav":""}" onclick="openER('${t.id}')"><div class="rrow"><div class="rnm">${t.name}</div><div class="rfav" onclick="event.stopPropagation();togFav('${t.id}')">${t.favorited?"❤️":"🤍"}</div></div><div class="stars">${e}</div>${t.description?`<div class="rnot" style="color:var(--tx2);margin-top:6px">${t.description.substring(0,100)}${t.description.length>100?"…":""}</div>`:""}${t.notes?`<div class="rnot">${t.notes}</div>`:""}<div class="rmeta"><span>${t.savedAt}</span>${n}</div></div>`}function Ll(t){a.rt=t,document.querySelectorAll(".rtab").forEach(n=>n.classList.remove("active"));const e=c("rtab-"+t);e&&e.classList.add("active"),xt()}function xt(){let t=[...a.recs];a.rt==="fav"?t=t.filter(s=>s.favorited):a.rt==="top"?t=t.filter(s=>s.rating>=4).sort((s,i)=>i.rating-s.rating):a.rt==="quick"?t=t.filter(s=>(s.tags||[]).includes("Quick")||(s.tags||[]).includes("Under 30 min")):a.rt==="kid"?t=t.filter(s=>(s.tags||[]).includes("Kid-Friendly")):t=t.sort((s,i)=>new Date(i.savedAt||0)-new Date(s.savedAt||0));const e=c("rsub");e&&(e.textContent=t.length+" recipe"+(t.length!==1?"s":""));const n=c("rbody");if(n){if(!t.length){n.innerHTML=`<div class="es"><div class="ei">📖</div><p>${a.rt==="fav"?"No favorites yet!":a.rt==="top"?"No 4–5 star recipes yet.":a.rt==="quick"?"No quick recipes saved yet.":a.rt==="kid"?"No kid-friendly recipes yet.":"No recipes saved yet.<br/>Mark meals as cooked or tap + Add."}</p></div>`;return}n.innerHTML=t.map(xl).join("")}}async function Pl(t){const e=a.recs.find(n=>n.id===t);e&&(await je({...e,favorited:!e.favorited}),m(e.favorited?"Removed from favorites":"Added to favorites! ❤️"))}function Rl(){c("savrecbtn").disabled=!c("rn").value.trim()}async function Dl(){const t=c("rurl").value.trim();if(!t)return;const e=c("rurlstatus"),n=c("rimportbtn");e.style.display="block",e.style.color="var(--mt)",e.textContent="⏳ Fetching recipe…",n.disabled=!0;try{const s=`Please fetch and read this recipe URL: ${t}

Extract the recipe and return ONLY a JSON object with exactly these fields (no extra text, no markdown fences):
{"name":"recipe name","description":"ingredient list and brief method (2-3 sentences max)","notes":"any useful tips or serving suggestions"}

If you cannot access the page, return: {"error":"Could not access this page"}`,o=((await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:800,tools:[{type:"web_search_20250305",name:"web_search"}],messages:[{role:"user",content:s}]})})).json()).content||[]).filter(d=>d.type==="text").map(d=>d.text).join("");let l;try{l=JSON.parse(o.replace(/```json|```/g,"").trim())}catch{const d=o.match(/\{[\s\S]*\}/);if(d)l=JSON.parse(d[0]);else throw new Error("No JSON found")}if(l.error){e.style.color="var(--rd)",e.textContent="⚠️ "+l.error,n.disabled=!1;return}c("rn").value=l.name||"",c("rd").value=l.description||"",c("rnotes").value=l.notes||"",c("rsourceurl").value=t,c("savrecbtn").disabled=!l.name,e.style.color="var(--gn)",e.textContent="✓ Recipe imported! Review and save."}catch{e.style.color="var(--rd)",e.textContent="⚠️ Couldn't import — try copying the recipe text manually."}n.disabled=!1}async function Nl(){const t=c("rn").value.trim();if(!t)return;const e=c("rd").value.trim(),n=c("rsourceurl")?c("rsourceurl").value.trim():"",s=vi("rtags");await je({id:"rec-"+Date.now(),name:t,rating:a.nr,favorited:!1,notes:c("rnotes").value.trim(),description:e,source:n?"Web Import":"Manual",sourceUrl:n||null,tags:s,cookCount:0,savedAt:new Date().toLocaleDateString()}),c("rn").value="",c("rnotes").value="",c("rd").value="",c("rsourceurl").value="",c("rurl").value="",Cl("rtags",[]),a.nr=0,c("savrecbtn").disabled=!0,$e("rstars",0),m("Recipe saved! 📖"),C("arec")}function Ol(t){const e=a.recs.find(o=>o.id===t);if(!e)return;a.eid=t;const n=e.rating||0,s=Array.from({length:5},(o,l)=>`<span class="star${l<n?" on":""}" onclick="setStar(${l+1},'e')">${l<n?"★":"☆"}</span>`).join(""),i=e.sourceUrl?`<div class="frow"><label class="flbl">Original</label><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);word-break:break-all">${e.sourceUrl}</a></div>`:"",r=`<div class="frow"><label class="flbl">Tags</label><div class="tags" id="etags">
    <div class="tag${(e.tags||[]).includes("Quick")?" sel":""}" data-tag="Quick" onclick="togTag(this)">⚡ Quick</div>
    <div class="tag kid${(e.tags||[]).includes("Kid-Friendly")?" sel":""}" data-tag="Kid-Friendly" onclick="togTag(this)">👶 Kid-Friendly</div>
    <div class="tag date${(e.tags||[]).includes("Date Night")?" sel":""}" data-tag="Date Night" onclick="togTag(this)">🕯 Date Night</div>
    <div class="tag batch${(e.tags||[]).includes("Batch Cook")?" sel":""}" data-tag="Batch Cook" onclick="togTag(this)">📦 Batch Cook</div>
    <div class="tag${(e.tags||[]).includes("Healthy")?" sel":""}" data-tag="Healthy" onclick="togTag(this)">🥗 Healthy</div>
    <div class="tag${(e.tags||[]).includes("Under 30 min")?" sel":""}" data-tag="Under 30 min" onclick="togTag(this)">⏱ Under 30 min</div>
  </div></div>`;c("erecbody").innerHTML=`
    <div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap">
      <button class="btn bp bsm" style="flex:1" onclick="scheduleRecipe('${e.name.replace(/'/g,"\\'")}')">📅 Schedule</button>
      <button class="btn bs bsm" style="flex:1" onclick="addRecIngToShop('${e.id}')">🛒 Shop ingredients</button>
      ${e.cookCount?`<div style="background:var(--acd);border:1px solid var(--ac);border-radius:9px;padding:7px 14px;font-size:.78rem;color:var(--ac);font-weight:600">🍳 Cooked ${e.cookCount}×</div>`:""}
    </div>
    <div style="background:var(--card);border:1px solid var(--b2);border-radius:12px;padding:14px;margin-bottom:16px">
      <div style="font-size:.78rem;color:var(--mt);margin-bottom:10px;font-weight:500">⚖️ Scale serving size</div>
      <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
        <button class="btn bs bsm" onclick="scaleRec(0.5)">½×</button><button class="btn bs bsm" onclick="scaleRec(1)">1×</button>
        <button class="btn bs bsm" onclick="scaleRec(2)">2×</button><button class="btn bs bsm" onclick="scaleRec(3)">3×</button>
        <input id="scaleCustom" class="qinp" type="number" min="0.25" max="10" step="0.25" placeholder="×" style="width:58px" oninput="if(this.value)scaleRec(parseFloat(this.value))"/>
      </div>
      <div id="scaleStatus" style="font-size:.74rem;color:var(--mt);margin-top:8px;display:none"></div>
    </div>
    <div class="frow"><label class="flbl">Name</label><input class="fi" id="ern" value="${e.name}"/></div>
    <div class="frow"><label class="flbl">Rating</label><div class="sinp" id="estars">${s}</div></div>
    ${r}
    <div class="frow"><label class="flbl">Description / Ingredients</label><textarea class="fta" id="erd" style="min-height:140px">${e.description||""}</textarea></div>
    <div class="frow"><label class="flbl">Notes</label><input class="fi" id="erno" value="${e.notes||""}"/></div>
    ${i}
    <div style="display:flex;align-items:center;gap:10px;margin:12px 0"><span style="font-size:.88rem">Favorite</span><div class="tog${e.favorited?" on":""}" id="etog" onclick="this.classList.toggle('on')"></div></div>
    <div class="brow"><button class="btn bd" style="flex:1" onclick="delER()">Delete</button><button class="btn bp" style="flex:2" onclick="updR()">Save</button></div>`,ye("erec")}async function $l(){const t=a.recs.find(s=>s.id===a.eid);if(!t)return;const e=[...document.querySelectorAll("#estars .star")].filter(s=>s.classList.contains("on")).length,n=vi("etags");await je({...t,name:c("ern").value.trim(),rating:e,description:c("erd").value.trim(),notes:c("erno").value.trim(),favorited:c("etog").classList.contains("on"),tags:n}),m("Recipe updated!"),C("erec")}async function Ml(){confirm("Delete this recipe?")&&(await Di(a.eid),m("Deleted"),C("erec"))}async function Ul(t){const e=c("erd");if(!e)return;const n=e.value.trim();if(!n){m("No ingredients to scale");return}const s=c("scaleStatus");s.style.display="block",s.style.color="var(--mt)",s.textContent=`⏳ Scaling to ${t}× with Claude…`;try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Scale ALL ingredient quantities in this recipe by ${t}x. Return ONLY the updated recipe text with scaled quantities. Keep the same format. Do not add any explanation.

${n}`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"";o?(e.value=o.trim(),s.style.color="var(--gn)",s.textContent=`✓ Scaled to ${t}×`):(s.style.color="var(--rd)",s.textContent="Couldn't scale — try again")}catch{s.style.color="var(--rd)",s.textContent="Couldn't reach Claude — check connection"}}async function Fl(){const t=c("rsub");t&&(t.textContent="Thinking…");const e=a.inv.map(i=>`${i.name} (${i.qty} ${i.unit})`).join(", "),n=a.recs.map(i=>i.name).join(", "),s=[a.cfg.nopork?"no pork":null,a.cfg.noshellfish?"no shellfish":null,a.cfg.vegetarian?"vegetarian":null,a.cfg.glutenfree?"gluten-free":null,a.cfg.other||null].filter(Boolean).join(", ");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Based on this exact inventory: ${e}
Restrictions: ${s||"none"}
Saved recipes: ${n||"none"}
Suggest 5 complete meals I can make RIGHT NOW with no extra shopping. Be specific with names. Format as a numbered list.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",l=c("rbody");l&&(l.innerHTML=`<div style="background:var(--card);border:1px solid var(--ac);border-radius:14px;padding:16px;margin-bottom:12px"><div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ac);margin-bottom:10px">🔍 Make right now — no shopping needed</div><div style="font-size:.88rem;line-height:1.8;color:var(--tx2)">${Oi(o)}</div><button class="btn bs bsm" style="margin-top:12px;width:100%" onclick="setRT('all')">← Back to recipes</button></div>`),t&&(t.textContent="Based on your inventory")}catch{t&&(t.textContent="Couldn't reach Claude")}}async function Hl(t){const e=a.recs.find(n=>n.id===t);if(!e||!e.description){m("No ingredients listed");return}m("Parsing ingredients…");try{const n=a.inv.map(d=>d.name.toLowerCase()),i=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:400,messages:[{role:"user",content:`Extract a list of ingredient names from this recipe description. Return ONLY a JSON array of strings, no markdown, no quantities, just clean ingredient names. Example: ["chicken","garlic","olive oil"]

Recipe: ${e.description}`}]})})).json(),r=(i.content&&i.content[0]&&i.content[0].text||"").replace(/```json|```/g,"").trim(),l=JSON.parse(r).filter(d=>!n.some(u=>u.includes(d.toLowerCase())||d.toLowerCase().includes(u)));if(!l.length){m("All ingredients already in pantry ✓");return}for(const d of l)await le({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:d,checked:!1,src:"recipe"});m(`Added ${l.length} ingredient${l.length!==1?"s":""} to shopping list 🛒`),C("erec"),window.showScreen("shopping")}catch{m("Couldn't parse ingredients")}}function jl(t,e){a.nr=t,e==="r"?$e("rstars",t):e==="c"?$e("cstars",t):e==="e"&&$e("estars",t)}function Bl(){const t=a.cookLog,e=a.wasteLog;let n=0;for(let w=0;w<60;w++){const I=new Date;I.setDate(I.getDate()-w);const T=I.toISOString().split("T")[0];if(t.find(L=>L.date===T))n++;else if(w>0)break}const s=c("ins-streak-num");s&&(s.textContent=n);const i=c("ins-total-cooked");i&&(i.textContent=t.length);const r=c("ins-waste-count");r&&(r.textContent=e.length);const o=c("ins-sub");o&&(o.textContent=t.length?" "+t.length+" meals cooked":"Your kitchen at a glance");const l=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],d=c("ins-week");if(d){const w=xe().map(I=>{const T=I.toISOString().split("T")[0],L=a.mp[T],k=T===re();return`<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--b1)${k?";background:var(--acd);margin:0 -4px;padding:7px 4px;border-radius:6px":""}">
        <div style="font-size:.72rem;color:var(--mt);min-width:30px;font-weight:${k?"600":"400"}">${l[I.getDay()]}</div>
        <div style="font-size:.72rem;color:var(--mt);min-width:20px">${I.getDate()}</div>
        <div style="font-size:.84rem;color:${L?"var(--tx)":"var(--mt)"};font-style:${L?"normal":"italic"};flex:1">${L||"—"}</div>
        ${k?"<div style='font-size:.66rem;color:var(--ac);font-weight:600'>TODAY</div>":""}
      </div>`}).join("");d.innerHTML=w}const u=t.slice(0,7).map(w=>w.name),h=c("ins-variety-nudge"),p=c("ins-variety-msg");if(h&&u.length>=3){const w={};u.forEach(_=>{const De=_.toLowerCase();w[De]=(w[De]||0)+1});const I=Object.entries(w).filter(([,_])=>_>=3),T=Object.values(a.mp).filter(Boolean),L=T.some(_=>/curry|dal|rice|bengali|biryani|hilsa|mustard|lentil/i.test(_)),k=T.some(_=>/kebab|köfte|pide|börek|meze|turkish|pilav|lahmacun/i.test(_));I.length?(h.style.display="block",p.textContent=`You've cooked "${I[0][0]}" ${I[0][1]} times this week. Time to mix it up?`):!L&&T.length>=3?(h.style.display="block",p.textContent="No Bangladeshi dishes this week — how about a dal, biryani, or fish curry?"):!k&&T.length>=3?(h.style.display="block",p.textContent="No Turkish dishes planned — köfte, mercimek çorbası, or a pilav would be great this week!"):h.style.display="none"}else h&&(h.style.display="none");const f={};t.forEach(w=>{f[w.name]=(f[w.name]||0)+1});const v=Object.entries(f).sort((w,I)=>I[1]-w[1]).slice(0,6),S=v[0]?v[0][1]:1,j=c("ins-cooked");if(j)if(!v.length)j.innerHTML='<div class="es" style="padding:16px"><p>Cook some meals to see stats!</p></div>';else{const w=["🥇","🥈","🥉","4️⃣","5️⃣","6️⃣"];j.innerHTML=v.map(([I,T],L)=>`<div class="ibar-row"><div style="font-size:.9rem;margin-right:4px">${w[L]||""}</div><div class="ibar-lbl">${I}</div><div class="ibar-track"><div class="ibar-fill" style="width:${Math.round(T/S*100)}%"></div></div><div class="ibar-val">${T}×</div></div>`).join("")}const we={Bangladeshi:"#e8a44a",Turkish:"#c0392b",Mediterranean:"#27ae60",American:"#3498db",Italian:"#e74c3c",Asian:"#9b59b6",Other:"#95a5a6"},B=c("ins-cuisine");if(B&&t.length){const w=k=>{const _=k.toLowerCase();return/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(_)?"Bangladeshi":/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner|iskender/i.test(_)?"Turkish":/pasta|pizza|risotto|gnocchi|italian/i.test(_)?"Italian":/tacos|burrito|enchilada|mexican/i.test(_)?"Mexican":/sushi|ramen|stir.?fry|fried rice|asian|chinese|thai|japanese/i.test(_)?"Asian":/burger|sandwich|mac|bbq|american/i.test(_)?"American":"Other"},I={};t.slice(0,20).forEach(k=>{const _=w(k.name);I[_]=(I[_]||0)+1});const T=Object.values(I).reduce((k,_)=>k+_,0),L=Object.entries(I).sort((k,_)=>_[1]-k[1]);B.innerHTML=L.map(([k,_])=>{const De=Math.round(_/T*100),Li=we[k]||"#95a5a6";return`<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span style="font-size:.82rem;font-weight:500">${k}</span><span style="font-size:.74rem;color:var(--mt)">${_} meals · ${De}%</span></div><div style="height:8px;background:var(--b1);border-radius:4px;overflow:hidden"><div style="height:100%;width:${De}%;background:${Li};border-radius:4px;transition:width .6s ease"></div></div></div>`}).join("")||'<div class="es" style="padding:16px"><p>Cook more meals to see your cuisine breakdown.</p></div>'}const z=c("ins-waste");z&&(z.innerHTML=e.length?e.slice(0,10).map(w=>`<div class="waste-item"><span style="font-size:.86rem">${w.name}</span><span style="font-size:.74rem;color:var(--rd)">${w.date}</span></div>`).join(""):'<div class="es" style="padding:16px"><p>Nothing wasted yet — great job! 🎉</p></div>')}function zl(){const t=["fridge","freezer","pantry"].map(o=>{const l=a.inv.filter(d=>d.location===o);return l.length?sn(o).toUpperCase()+": "+l.map(d=>`${d.name} (${d.qty} ${d.unit})`).join(", "):""}).filter(Boolean).join(`
`),e=a.inv.filter(o=>{const l=U(o.expiry);return l&&(l.c==="expiring"||l.c==="expired")}).map(o=>{const l=U(o.expiry);return`${o.name} (${l.l})`}).join(", "),n=xe().map(o=>{const l=o.toISOString().split("T")[0];return a.mp[l]?`${o.toLocaleDateString("en-US",{weekday:"short"})}: ${a.mp[l]}`:""}).filter(Boolean).join(", "),s=a.recs.filter(o=>o.favorited||o.rating>=4).map(o=>`${o.name}${o.rating?` (${o.rating}★)`:""}`).join(", "),i=[a.cfg.nopork?"no pork":null,a.cfg.noshellfish?"no shellfish":null,a.cfg.vegetarian?"vegetarian":null,a.cfg.glutenfree?"gluten-free":null,a.cfg.other].filter(Boolean).join(", "),r=a.cookLog.slice(0,7).map(o=>o.name).join(", ");return`You are a helpful kitchen assistant for a family in Edison NJ.
INVENTORY:
${t||"Empty."}
${e?"EXPIRING SOON: "+e:""}
${n?"MEAL PLAN: "+n:""}
${s?"FAVOURITE RECIPES: "+s:""}
${r?"RECENTLY COOKED (avoid repeating): "+r:""}
HOUSEHOLD: ${a.cfg.name}, Adults: ${a.cfg.adults}, Kids: ${a.cfg.kids}, Restrictions: ${i||"none"}, Cuisines: ${a.cfg.cuisines}, Cook time: ${a.cfg.cookTime}.
CULTURAL BACKGROUND: Bushra is Bangladeshi, Bora is Turkish — authentically lean toward these cuisines (Bengali spices, mustard oil, dal, hilsa-style fish; Turkish kebabs, meze, börek, yogurt sauces, lentil soups). Suggest these when inventory allows.
Be concise. Use what they have. Suggest variety — lean toward Bangladeshi and Turkish — avoid repeating recent meals. Format grocery lists as bullet points starting "- ".`}function Vl(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<li>$1</li>").replace(/^[-•]\s+(.+)$/gm,"<li>$1</li>").replace(/\n/g,"<br>")}async function wi(){const t=c("chi"),e=t.value.trim();if(!e)return;t.value="",bi(t),a.chat.push({role:"user",content:e}),Ht("user",e);const n=c("csb");n&&(n.disabled=!0);const s="thinking-"+Date.now(),i=c("chmsgs");i.innerHTML+=`<div class="cb asst thinking" id="${s}">Thinking…</div>`,i.scrollTop=i.scrollHeight;try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:800,system:zl(),messages:a.chat.map(u=>({role:u.role,content:u.content}))})})).json(),l=o.content&&o.content[0]&&o.content[0].text||"Sorry, I couldn't process that.",d=c(s);d&&d.remove(),a.chat.push({role:"assistant",content:l}),Ht("assistant",l)}catch{const o=c(s);o&&o.remove(),Ht("assistant","Sorry, I couldn't reach Claude. Check your connection and try again.")}n&&(n.disabled=!1)}function Ht(t,e){const n=c("chmsgs");if(!n)return;const s=document.createElement("div");s.className="cb "+(t==="user"?"user":"asst"),s.innerHTML=t==="user"?e:Vl(e),n.appendChild(s),n.scrollTop=n.scrollHeight}function Wl(t){const e=c("chi");e&&(e.value=t.textContent),wi()}function ql(){a.chat=[];const t=c("chmsgs");t&&(t.innerHTML='<div class="cb asst">Hey! 👋 I know your full inventory, meal plan, and saved recipes. What do you need?</div>')}function bi(t){t.style.height="auto",t.style.height=Math.min(t.scrollHeight,120)+"px"}const Gl="2b6ecac2",Kl="8db76605e873aaf2fbdf41256cb24cb4";function Jl(){c("scerr").style.display="none",c("ffile").click()}function Yl(){a.scanDestList=!0,ye("scan");const t=c("scanovttl");t&&(t.textContent="Scan → Shopping List");const e=c("scan-dest-hint");e&&(e.textContent="Running low? Scan to add to your shopping list.")}function Xl(){a.scanDestList=!1,ye("scan");const t=c("scanovttl");t&&(t.textContent="Scan Barcode");const e=c("scan-dest-hint");e&&(e.textContent="Scan a barcode to add to your pantry or shopping list.")}function Ql(){if(!a.cp)return;const t=a.cp.notFound?"Barcode "+a.cp.barcode:a.cp.name,e=parseInt(c("aqty").value)||1,n=c("aunit").value.trim(),s=t+(e>1||n?" ("+e+(n?" "+n:"")+")":"");le({id:Date.now().toString(),name:s,checked:!1,src:"scan"}),m("Added to list: "+t),C("result"),C("scan"),a.scanDestList=!1,window.showScreen("shopping")}function Zl(){const t=c("mentry");t.style.display=t.style.display==="none"?"block":"none"}async function ed(t){const e=t.target.files[0];if(!e)return;t.target.value="",c("scanbody").style.display="none",c("scspin").style.display="block",c("scst").textContent="Reading image…";const n=await new Promise((s,i)=>{const r=new FileReader;r.onload=o=>s(o.target.result),r.onerror=i,r.readAsDataURL(e)});try{c("scst").textContent="Detecting barcode…";const s=await new Promise((r,o)=>Quagga.decodeSingle({src:n,numOfWorkers:0,inputStream:{size:1600},decoder:{readers:["ean_reader","ean_8_reader","upc_reader","upc_e_reader","code_128_reader","code_39_reader"],multiple:!1},locate:!0},l=>{l&&l.codeResult&&l.codeResult.code?r(l.codeResult.code):o("no")}));c("scst").textContent="Found "+s+" — looking up…";const i=await _i(s);a.cp=i,c("aqty").value=1,c("aexp").value="",In("fridge",c("rl-fridge")),Ii(i),c("scanbody").style.display="block",c("scspin").style.display="none"}catch{c("scanbody").style.display="block",c("scspin").style.display="none";const s=c("scerr");s.textContent="⚠️ No barcode detected. Try better lighting or enter manually.",s.style.display="block"}}async function td(){const t=c("meinp").value.trim();if(!t)return;c("scanbody").style.display="none",c("scspin").style.display="block",c("scst").textContent="Looking up…";const e=await _i(t);a.cp=e,c("aqty").value=1,c("aexp").value="",In("fridge",c("rl-fridge")),c("meinp").value="",Ii(e),c("scanbody").style.display="block",c("scspin").style.display="none"}async function _i(t){return await nd(t)||await sd(t)||await id(t)||{barcode:t,name:"",brand:"",quantity:"",category:"General",image:null,source:null,notFound:!0}}async function nd(t){try{const e=await fetch(`https://api.edamam.com/api/food-database/v2/parser?upc=${t}&app_id=${Gl}&app_key=${Kl}`);if(!e.ok)return null;const n=await e.json(),s=n.hints&&n.hints[0]&&n.hints[0].food||n.parsed&&n.parsed[0]&&n.parsed[0].food;if(!s)return null;const i=s.nutrients||{};return{barcode:t,name:s.label||"",brand:s.brand||"",quantity:s.servingSize?`${s.servingSize}${s.servingSizeUnit||"g"}`:"",category:s.category||"General",image:s.image||null,source:"Edamam",notFound:!1,nutrition:{calories:i.ENERC_KCAL?Math.round(i.ENERC_KCAL):null,protein:i.PROCNT?`${i.PROCNT.toFixed(1)}g`:null,fat:i.FAT?`${i.FAT.toFixed(1)}g`:null,carbs:i.CHOCDF?`${i.CHOCDF.toFixed(1)}g`:null}}}catch{}return null}async function sd(t){try{const n=await(await fetch("https://world.openfoodfacts.org/api/v0/product/"+t+".json")).json();if(n.status===1&&n.product){const s=n.product,i=s.product_name||s.product_name_en||"";return i?{barcode:t,name:i,brand:s.brands||"",quantity:s.quantity||"",category:((s.categories_tags||[])[0]||"").replace("en:","")||"General",image:s.image_small_url||null,source:"Open Food Facts",notFound:!1,nutrition:null}:null}}catch{}return null}async function id(t){try{const n=await(await fetch("https://api.upcitemdb.com/prod/trial/lookup?upc="+t)).json();if(n.code==="OK"&&n.items&&n.items.length>0){const s=n.items[0];return{barcode:t,name:s.title||"",brand:s.brand||"",quantity:s.size||"",category:s.category||"General",image:(s.images||[])[0]||null,source:"UPC Item DB",notFound:!1,nutrition:null}}}catch{}return null}function Ii(t){C("scan"),c("resttl").textContent=t.notFound?"Not Found":"Product Found ✓",c("aunit").value=t.quantity||"unit";let e="";if(t.notFound)e=`<div class="nfb">⚠️ Barcode <code>${t.barcode}</code> not found. Enter name:<input class="fi" id="mnm" placeholder="Product name (required)" oninput="valAdd()" style="margin-top:10px"/></div>`,setTimeout(()=>c("addbtn").disabled=!0,0);else{const n=t.image?`<img src="${t.image}" class="pimg" onerror="this.style.display='none'"/>`:'<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">🛒</div>';let s="";t.nutrition&&(t.nutrition.calories||t.nutrition.protein)&&(s=`<div class="ngrd">${[["Cal",t.nutrition.calories],["Protein",t.nutrition.protein],["Fat",t.nutrition.fat],["Carbs",t.nutrition.carbs]].map(([i,r])=>`<div class="nb"><div class="nv">${r||"—"}</div><div class="nl">${i}</div></div>`).join("")}</div>`),e=`<div class="pcard"><div class="phdr">${n}<div style="flex:1"><div class="pnm">${t.name}</div>${t.brand?`<div class="pbr">${t.brand}</div>`:""}<div class="pbc">${t.barcode}</div><span class="bdg">${t.category}</span>${t.source?`<span class="srcb">${t.source}</span>`:""}</div></div>${s}</div>`,setTimeout(()=>c("addbtn").disabled=!1,0)}c("resbody").innerHTML=e,ye("result")}function In(t,e){a.selR=t,document.querySelectorAll("#ov-result .lbtn").forEach(n=>n.classList.remove("sel")),e&&e.classList.add("sel")}function rd(){const t=c("mnm");c("addbtn").disabled=!(t&&t.value.trim())}async function od(){if(!a.cp)return;const t=c("mnm"),e=a.cp.notFound?t&&t.value.trim()||"":a.cp.name;if(!e)return;const n=c("aunit").value.trim()||"unit",s=Math.max(1,parseInt(c("aqty").value)||1),i=c("aexp").value||null,r="item-"+a.cp.barcode.replace(/\W/g,"-"),o=a.inv.find(l=>l.id===r);await Z({id:r,barcode:a.cp.barcode,name:e,brand:a.cp.brand||"",unit:n,qty:o?o.qty+s:s,location:a.selR,category:a.cp.category||"General",image:a.cp.image||null,source:a.cp.source||null,nutrition:a.cp.nutrition||null,expiry:i,addedAt:o?o.addedAt:new Date().toLocaleDateString()}),m(o?`+${s} added to ${e}`:`${e} added!`),a.cp=null,C("result")}function ad(t){const e=c("aqty");e.value=Math.max(1,(parseInt(e.value)||1)+t)}let be=null,is=0,P=null;function cd(){document.addEventListener("touchstart",t=>{const e=t.target.closest(".swipe-inner");!e||!e.closest(".swipe-wrap")||a.selectMode||(be=e,is=t.touches[0].clientX,e.classList.add("swiping"))},{passive:!0}),document.addEventListener("touchmove",t=>{if(!be)return;const e=t.touches[0].clientX-is,n=Math.max(-80,Math.min(0,e));be.style.transform=`translateX(${n}px)`,Math.abs(e)>8&&t.preventDefault()},{passive:!1}),document.addEventListener("touchend",()=>{if(!be)return;const t=be,e=t.closest(".swipe-wrap");t.classList.remove("swiping"),(parseFloat(t.style.transform.replace("translateX(",""))||0)<-50?(t.style.transform="translateX(-80px)",e==null||e.classList.add("open"),P&&P!==e&&en(P),P=e):(t.style.transform="translateX(0)",e==null||e.classList.remove("open"),P===e&&(P=null)),be=null}),document.addEventListener("touchstart",t=>{if(!P||t.target.closest(".swipe-del"))return;const e=t.target.closest(".swipe-inner");e&&e.closest(".swipe-wrap")===P||(en(P),P=null)},{passive:!0})}function en(t){const e=t==null?void 0:t.querySelector(".swipe-inner");e&&(e.style.transform="translateX(0)"),t==null||t.classList.remove("open")}async function ld(t,e){const n=c("sw-"+t);n&&(n.style.opacity="0.5"),e==="shop"?await kt(t):(await nn(t),m("Item removed"))}function dd(t,e){const n=c("sw-"+t);if(n){const s=n.querySelector(".swipe-inner");if((parseFloat((s.style.transform||"").replace("translateX(",""))||0)<-10){en(n),P=null;return}}if(a.selectMode){a.selectedIds.has(t)?(a.selectedIds.delete(t),n==null||n.classList.remove("selected")):(a.selectedIds.add(t),n==null||n.classList.add("selected")),Lt();return}e==="shop"?window.togShop(t):window.openAdj(t)}function ud(){if(a.selectMode==="shop"){Ae();return}a.selectMode&&Ae(),a.selectMode="shop",a.selectedIds.clear(),document.querySelectorAll("#shlist .swipe-wrap").forEach(e=>e.classList.add("selecting"));const t=c("sh-selbtn");t&&(t.classList.add("active"),t.textContent="Cancel"),Lt()}function hd(){if(a.selectMode==="inv"){Ae();return}a.selectMode&&Ae(),a.selectMode="inv",a.selectedIds.clear(),document.querySelectorAll("#ibody .swipe-wrap").forEach(e=>e.classList.add("selecting"));const t=c("inv-selbtn");t&&(t.classList.add("active"),t.textContent="Cancel"),Lt()}function Ae(){a.selectMode=null,a.selectedIds.clear(),document.querySelectorAll(".swipe-wrap.selecting").forEach(n=>n.classList.remove("selecting","selected"));const t=c("sh-selbtn");t&&(t.classList.remove("active"),t.textContent="Select");const e=c("inv-selbtn");e&&(e.classList.remove("active"),e.textContent="Select"),Lt()}async function fd(){if(!a.selectedIds.size)return;const t=[...a.selectedIds],e=a.selectMode;Ae(),e==="shop"?await Promise.all(t.map(n=>kt(n))):await Promise.all(t.map(n=>nn(n))),m(`Removed ${t.length} item${t.length!==1?"s":""} 🗑`)}function Lt(){const t=c("multi-bar");if(!t)return;const e=a.selectedIds.size,n=c("multi-count");n&&(n.textContent=e),a.selectMode?t.classList.add("visible"):t.classList.remove("visible")}const pd=["Chicken","Beef","Fish","Vegetarian","Vegan","Quick","Kids","Healthy","Batch Cook","Date Night"];function ki(t){return"chip-"+t.split(" ").join("-")}function Ei(){const t=c("recChips");t&&(t.innerHTML=pd.map(e=>`<button onclick="toggleChip('${e}')" id="${ki(e)}" style="padding:5px 10px;border-radius:20px;border:1px solid var(--bd);background:var(--s2);color:var(--tx2);font-size:.78rem;cursor:pointer;transition:all .15s">${e}</button>`).join(""))}function gd(t){const e=c(ki(t));window._activeChips.has(t)?(window._activeChips.delete(t),e&&(e.style.background="var(--s2)",e.style.color="var(--tx2)",e.style.borderColor="var(--bd)")):(window._activeChips.add(t),e&&(e.style.background="var(--ac)",e.style.color="#000",e.style.borderColor="var(--ac)")),Si()}function Si(){const t=c("recPicker"),e=c("recFilter")?c("recFilter").value.trim().toLowerCase():"",n=[...window._activeChips].map(r=>r.toLowerCase()),i=[...a.recs].sort((r,o)=>(o.cookCount||0)-(r.cookCount||0)).filter(r=>{const o=(r.name+" "+(r.description||"")+" "+(r.tags||[]).join(" ")).toLowerCase(),l=e?e.split(/\s+/).every(u=>o.includes(u)):!0,d=n.every(u=>o.includes(u));return l&&d});t.innerHTML='<option value="">— pick a saved recipe —</option>'+i.map(r=>`<option value="${r.id}">${r.name}</option>`).join(""),window._pickedRec=null,c("mealMinp").value=""}function md(t,e){a.md=t,c("mealMttl").textContent="Meal for "+e,c("mealMinp").value=a.mp[t]||"",window._pickedRec=null,window._activeChips=new Set;const n=c("recFilter");n&&(n.value=""),Ei();const s=c("recPicker");if(a.recs&&a.recs.length){const i=[...a.recs].sort((l,d)=>(d.cookCount||0)-(l.cookCount||0));s.innerHTML='<option value="">— pick a saved recipe —</option>'+i.map(l=>`<option value="${l.id}">${l.name}</option>`).join("");const r=a.mp[t]||"",o=i.find(l=>l.name===r);s.value=o?o.id:"",c("recPickerWrap").style.display="block"}else c("recPickerWrap").style.display="none";c("mealM").classList.add("active"),setTimeout(()=>c("mealMinp").focus(),100)}function yd(t){if(!t){window._pickedRec=null,c("mealMinp").value="";return}const e=a.recs.find(n=>n.id===t);e&&(window._pickedRec=e,c("mealMinp").value=e.name)}function kn(){c("mealM").classList.remove("active")}async function vd(){const t=c("mealMinp").value.trim();if(await ge(a.md,t||null),window._pickedRec&&window._pickedRec.description){const e=window._pickedRec.description,n=a.inv.map(o=>o.name.toLowerCase()),s=a.shop.map(o=>o.name.toLowerCase()),i=e.split(/[\n,]/).map(o=>o.replace(/^[\d\/\s]*(cup|tbsp|tsp|oz|lb|g|kg|ml|l|clove|slice|piece|bunch|head|can|package|pkg)s?\.?\s*/gi,"").replace(/^[\d]+\s*/,"").trim()).filter(o=>o.length>1&&o.length<60);let r=0;for(const o of i){if(/\b(add|mix|heat|cook|bake|stir|boil|fry|slice|chop|dice|combine|place|pour|season|serve|preheat|bring|remove|let|set|transfer)\b/i.test(o))continue;const l=o.replace(/^[-•*]\s*/,"").trim();if(!l||l.length<2)continue;const d=l.toLowerCase();n.some(u=>u.includes(d)||d.includes(u))||s.some(u=>u===d)||(await le({id:Date.now().toString()+Math.random().toString(36).slice(2),name:l,checked:!1,src:"recipe"}),r++)}r>0&&m(`Added ${r} ingredient${r!==1?"s":""} to shopping list 🛒`)}window._pickedRec=null,kn(),ve(),et(),Re()}async function wd(){await ge(a.md,null),kn(),ve(),et(),Re()}function bd(t){const e=a.mp[t];e&&(a.cn=e,a.nr=0,c("cookedNm").textContent=e,c("cnotes").value="",$e("cstars",0),c("cookedM").classList.add("active"))}async function _d(){await ps(a.cn,re()),await ge(re(),null),c("cookedM").classList.remove("active"),ve(),Re(),m("Meal logged!")}async function Id(){var s;const t=c("cnotes").value.trim(),e=(s=c("tog-leftover"))==null?void 0:s.classList.contains("on");await ps(a.cn,re());const n=a.recs.find(i=>i.name.toLowerCase()===a.cn.toLowerCase());n?await je({...n,cookCount:(n.cookCount||0)+1,lastCooked:re()}):await je({id:"rec-"+Date.now(),name:a.cn,rating:a.nr,favorited:!1,notes:t,description:"",source:"Meal Plan",tags:[],cookCount:1,savedAt:new Date().toLocaleDateString(),lastCooked:re()}),e&&await ge(Ni(),a.cn+" (leftovers)"),await ge(re(),null),c("cookedM").classList.remove("active"),ve(),Re(),m(e?"Saved! Leftovers planned for tomorrow 🥡":"Saved to recipes! ⭐")}function kd(t){c("schedNm").textContent=t;const e=["S","M","T","W","T","F","S"],n=new Date;n.setHours(0,0,0,0),c("schedWk").innerHTML=xe().map((s,i)=>{const r=s.toISOString().split("T")[0],o=s.getTime()===n.getTime(),l=a.mp[r];return`<div class="wd${o?" today":""}${l?" hm":""}" onclick="schedSet('${r}','${t}')"><div class="wdn">${e[i]}</div><div class="wdd">${s.getDate()}</div>${l?`<div class="wdm">${l.substring(0,8)}…</div>`:""}</div>`}).join(""),c("schedM").classList.add("active")}async function Ed(t,e){await ge(t,e),c("schedM").classList.remove("active"),ve(),Re(),m("Scheduled! 📅")}function Sd(){const t=i=>c(i),e=(i,r)=>{const o=t(i);o&&(o.value=r||"")};e("setName",a.cfg.name),e("setAdults",a.cfg.adults),e("setKids",a.cfg.kids),e("setOther",a.cfg.other),e("setCuisines",a.cfg.cuisines),e("setCookTime",a.cfg.cookTime);const n=(i,r)=>{const o=t(i);o&&o.classList.toggle("on",!!r)};n("tg-nopork",a.cfg.nopork),n("tg-noshellfish",a.cfg.noshellfish),n("tg-vegetarian",a.cfg.vegetarian),n("tg-glutenfree",a.cfg.glutenfree),n("tg-notif",a.cfg.notif);const s=c("notifTimeRow");s&&(s.style.display=a.cfg.notif?"block":"none"),e("setNotifTime",a.cfg.notifTime||"8"),e("setNotifDays",String(a.cfg.notifDays||3)),Sn()}async function Td(){a.cfg={...a.cfg,name:c("setName").value.trim(),adults:c("setAdults").value.trim(),kids:c("setKids").value.trim(),nopork:c("tg-nopork").classList.contains("on"),noshellfish:c("tg-noshellfish").classList.contains("on"),vegetarian:c("tg-vegetarian").classList.contains("on"),glutenfree:c("tg-glutenfree").classList.contains("on"),other:c("setOther").value.trim(),cuisines:c("setCuisines").value.trim(),cookTime:c("setCookTime").value,notif:c("tg-notif").classList.contains("on"),notifTime:c("setNotifTime")?c("setNotifTime").value:"8",notifDays:parseInt(c("setNotifDays")?c("setNotifDays").value:"3")},await fs(),a.cfg.notif&&Ti(),m("Settings saved!"),C("settings"),vn()}async function Cd(t){if(!t.classList.contains("on")){if(!("Notification"in window)){m("Notifications not supported on this browser");return}if(Notification.permission==="denied"){m("Notifications blocked — enable in browser settings");return}if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){m("Notifications permission denied");return}}t.classList.toggle("on");const n=c("notifTimeRow");n&&(n.style.display=t.classList.contains("on")?"block":"none")}function Ad(){if(Notification.permission!=="granted"){m("Enable notifications first");return}const t=a.inv.filter(n=>{const s=U(n.expiry);return s&&(s.c==="expiring"||s.c==="expired")});if(!t.length){new Notification("Kitchen 🧺",{body:"No items expiring soon — you're all good!"});return}const e=t.slice(0,3).map(n=>n.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${e}${t.length>3?" + "+(t.length-3)+" more":""} need attention`})}function Ti(){if(!a.cfg.notif||Notification.permission!=="granted")return;const t=parseInt(localStorage.getItem("ks-lastnotif")||"0"),e=Date.now();if(e-t<864e5)return;localStorage.setItem("ks-lastnotif",e.toString());const n=a.cfg.notifDays||3,s=a.inv.filter(r=>{if(!U(r.expiry))return!1;const l=new Date(r.expiry+"T00:00:00"),d=new Date;return d.setHours(0,0,0,0),Math.round((l-d)/864e5)<=n});if(!s.length)return;const i=s.slice(0,3).map(r=>r.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${i}${s.length>3?" + "+(s.length-3)+" more":""} expiring in ${n} days or less`})}function En(){return W("ks-hhs")||[a.hid||"bora-family"]}function Ci(t){He("ks-hhs",t)}function xd(){const t=c("newHHCode").value.trim().toLowerCase().replace(/\s+/g,"-");if(!t)return;const e=En();e.includes(t)||e.push(t),Ci(e),c("newHHCode").value="",Sn(),m("Household added!")}function Ld(t){t!==a.hid&&(localStorage.setItem("ks-h",t),location.reload())}function Pd(t){if(t===a.hid){m("Can't remove active household");return}const e=En().filter(n=>n!==t);Ci(e),Sn()}function Sn(){const t=En(),e=c("hhList");e&&(e.innerHTML=t.map(n=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid ${n===a.hid?"var(--ac)":"var(--b2)"};border-radius:10px;margin-bottom:6px;cursor:pointer" onclick="switchHousehold('${n}')"><div><div style="font-size:.88rem;font-weight:500;color:${n===a.hid?"var(--ac)":"var(--tx)"}">${n}</div><div style="font-size:.7rem;color:var(--mt);margin-top:2px">${n===a.hid?"● Active — tap to stay":"Tap to switch"}</div></div><button onclick="event.stopPropagation();removeHousehold('${n}')" style="background:none;border:none;color:var(--mt);cursor:pointer;font-size:.82rem;padding:4px 8px">${n===a.hid?"":"✕"}</button></div>`).join(""))}const bt={gold:{name:"Gold",swatch:"#d4a853",dark:{bg:"#0f0f0d",sf:"#1a1a17",card:"#222220",card2:"#2a2a27",b1:"#333330",b2:"#3d3d39",ac:"#d4a853",ac2:"#e8c27a",acr:"212,168,83",tx:"#ede8d8",tx2:"#b8b09a",mt:"#7a7468"},light:{bg:"#faf8f2",sf:"#ffffff",card:"#f3ede0",card2:"#efe8d8",b1:"#ddd5c0",b2:"#cec4ac",ac:"#a8732a",ac2:"#c48f3e",acr:"168,115,42",tx:"#2a2418",tx2:"#5c5040",mt:"#9a8870"}},forest:{name:"Forest",swatch:"#4a9e5c",dark:{bg:"#0a1410",sf:"#111f17",card:"#182a1e",card2:"#1e3326",b1:"#2a4032",b2:"#355040",ac:"#6db56d",ac2:"#8fd08f",acr:"109,181,109",tx:"#e4f0e4",tx2:"#9dbf9d",mt:"#5a7a5a"},light:{bg:"#f2f9f2",sf:"#ffffff",card:"#e8f5e8",card2:"#dff0df",b1:"#c0ddc0",b2:"#a8cca8",ac:"#2e7d32",ac2:"#43a047",acr:"46,125,50",tx:"#0d2010",tx2:"#2e4f2e",mt:"#5a7a5a"}},ocean:{name:"Ocean",swatch:"#38bdf8",dark:{bg:"#060e1a",sf:"#0d1829",card:"#112035",card2:"#162840",b1:"#1e3554",b2:"#264468",ac:"#38bdf8",ac2:"#7dd3fc",acr:"56,189,248",tx:"#e0f2fe",tx2:"#7ab8d4",mt:"#486880"},light:{bg:"#f0f8ff",sf:"#ffffff",card:"#e0f2fe",card2:"#d4ecf9",b1:"#b0d8f0",b2:"#90c4e4",ac:"#0369a1",ac2:"#0284c7",acr:"3,105,161",tx:"#082040",tx2:"#1e4060",mt:"#4a7090"}},bordeaux:{name:"Bordeaux",swatch:"#e8829a",dark:{bg:"#120810",sf:"#1c0e18",card:"#261420",card2:"#301828",b1:"#4a2238",b2:"#5c2a46",ac:"#e8829a",ac2:"#f4aabb",acr:"232,130,154",tx:"#fce8ee",tx2:"#d4909e",mt:"#8a5060"},light:{bg:"#fff5f7",sf:"#ffffff",card:"#ffe8ed",card2:"#ffd8e0",b1:"#f4b8c4",b2:"#eca0b0",ac:"#be3455",ac2:"#d94070",acr:"190,52,85",tx:"#2a080e",tx2:"#6a2030",mt:"#9a5060"}},sand:{name:"Sand",swatch:"#e07a5f",dark:{bg:"#170e08",sf:"#221508",card:"#2e1c0e",card2:"#382414",b1:"#4a3020",b2:"#5c3c28",ac:"#e07a5f",ac2:"#eca080",acr:"224,122,95",tx:"#fdf0e8",tx2:"#c8a090",mt:"#887060"},light:{bg:"#fdf6ec",sf:"#fffbf5",card:"#f5e8d8",card2:"#eedcc8",b1:"#ddc8ac",b2:"#ccb494",ac:"#c1440e",ac2:"#d4602a",acr:"193,68,14",tx:"#2a1808",tx2:"#5c3820",mt:"#9a7060"}},midnight:{name:"Midnight",swatch:"#818cf8",dark:{bg:"#050814",sf:"#0a0d1f",card:"#0f1228",card2:"#141830",b1:"#1e2448",b2:"#272e58",ac:"#818cf8",ac2:"#a5b0ff",acr:"129,140,248",tx:"#e8eaff",tx2:"#9099cc",mt:"#505880"},light:{bg:"#f0f1ff",sf:"#ffffff",card:"#e4e6ff",card2:"#d8dbff",b1:"#b8bdff",b2:"#a0a6f4",ac:"#4f46e5",ac2:"#6366f1",acr:"79,70,229",tx:"#0a0820",tx2:"#202060",mt:"#5050a0"}},lavender:{name:"Lavender",swatch:"#c084fc",dark:{bg:"#0e0814",sf:"#160e20",card:"#1e1430",card2:"#261a3c",b1:"#382454",b2:"#442c66",ac:"#c084fc",ac2:"#d8a8ff",acr:"192,132,252",tx:"#f5ecff",tx2:"#c0a0e0",mt:"#7a5898"},light:{bg:"#faf5ff",sf:"#ffffff",card:"#f3e8ff",card2:"#ecdcff",b1:"#d8b8f8",b2:"#c8a0f0",ac:"#9333ea",ac2:"#a855f7",acr:"147,51,234",tx:"#1a0830",tx2:"#481080",mt:"#805098"}}};let qe=W("ks-theme")||"gold",Ge=W("ks-mode")||"auto";function _t(t,e){qe=t,Ge=e,He("ks-theme",t),He("ks-mode",e);const n=bt[t]||bt.gold,i=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?n.dark:n.light,r=document.documentElement.style;r.setProperty("--bg",i.bg),r.setProperty("--sf",i.sf),r.setProperty("--card",i.card),r.setProperty("--card2",i.card2),r.setProperty("--b1",i.b1),r.setProperty("--b2",i.b2),r.setProperty("--ac",i.ac),r.setProperty("--ac2",i.ac2),r.setProperty("--acd","rgba("+i.acr+",.12)"),r.setProperty("--tx",i.tx),r.setProperty("--tx2",i.tx2),r.setProperty("--mt",i.mt),r.setProperty("--gn","#6db56d"),r.setProperty("--gnd","rgba(109,181,109,.12)"),r.setProperty("--rd","#d96b6b"),r.setProperty("--rdd","rgba(217,107,107,.12)"),r.setProperty("--am","#c8960a"),r.setProperty("--amd","rgba(200,150,10,.12)"),Ai(e),xi(t)}function Rd(t){_t(qe,t)}function Ai(t){["auto","light","dark"].forEach(e=>{const n=c("mode-"+e);n&&(n.style.background=e===t?"var(--ac)":"",n.style.color=e===t?"var(--bg)":"",n.style.borderColor=e===t?"var(--ac)":"")})}function xi(t){const e=c("themePicker");e&&(e.innerHTML="",Object.keys(bt).forEach(n=>{const s=bt[n],i=n===t,r=document.createElement("div");r.title=s.name,r.style.cssText="width:36px;height:36px;border-radius:50%;background:"+s.swatch+";cursor:pointer;border:3px solid "+(i?"var(--tx)":"transparent")+";box-shadow:"+(i?"0 0 0 2px var(--ac)":"none")+";transition:all .2s;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.85rem",r.textContent=i?"✓":"",r.onclick=()=>_t(n,Ge),r.onmouseover=function(){this.style.transform="scale(1.15)"},r.onmouseout=function(){this.style.transform="scale(1)"},e.appendChild(r)}))}function Dd(){_t(qe,Ge),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{Ge==="auto"&&_t(qe,"auto")})}function Nd(){xi(qe),Ai(Ge)}y.renderAll=pi;y.renderSum=et;y.renderRecs=xt;y.renderShop=tt;Jc(wn);window.showScreen=function(t){var e,n;document.querySelectorAll(".ov.active").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".ni").forEach(s=>s.classList.remove("active")),(e=c("screen-"+t))==null||e.classList.add("active"),(n=c("nav-"+t))==null||n.classList.add("active"),t==="home"&&gi(),t==="inventory"&&wn(),t==="recipes"&&xt(),t==="shopping"&&tt(),t==="insights"&&Bl()};const Od=ye;window.showOv=function(t){Od(t),t==="settings"&&setTimeout(Nd,80)};window.hideOv=C;window.initHome=vn;window.toggleExp=function(){const t=c("exppanel");t.style.display=t.style.display==="none"?"block":"none"};window.openAdj=Qc;window.updL=Zc;window.adjQ=el;window.adjQD=tl;window.adjE=nl;window.adjNote=sl;window.setIT=il;window.addManual=rl;window.valMA=ol;window.chgMQ=al;window.selML=cl;window.remItem=bn;window.importDoc=ll;window.qadd=dl;window.togShop=ul;window.toggleShNote=hl;window.saveShNote=fl;window.togAisle=pl;window.setSHT=gl;window.shareList=ml;window.openAddToKitchen=yl;window.setAtkLoc=vl;window.confirmAddToKitchen=wl;window.buildList=bl;window.bpTog=_l;window.bpSelAll=Il;window.bpUpdBtn=function(){};window.bpConfirm=kl;window._bpItems=[];window.searchDeals=El;window.dealsFromList=Sl;window.testProxy=Tl;window.addDealToList=yi;window.clrChk=function(){a.shop.filter(t=>t.checked).forEach(t=>kt(t.id))};window.setRT=Ll;window.togFav=Pl;window.valR=Rl;window.importFromUrl=Dl;window.saveRec=Nl;window.openER=Ol;window.updR=$l;window.delER=Ml;window.scaleRec=Ul;window.whatCanIMake=Fl;window.addRecIngToShop=Hl;window.setStar=jl;window.togTag=Al;window.sendChat=wi;window.sendPill=Wl;window.clrChat=ql;window.ar=bi;window.startScan=Jl;window.openScanForList=Yl;window.openScanForInventory=Xl;window.addScannedToList=Ql;window.togManual=Zl;window.handlePhoto=ed;window.manLookup=td;window.selRL=In;window.valAdd=rd;window.addToInv=od;window.chgAQ=ad;window.swipeDelItem=ld;window.swipeRowTap=dd;window.togShopSelect=ud;window.togInvSelect=hd;window.cancelSelect=Ae;window.deleteSelected=fd;window.openMealM=md;window.pickRec=yd;window.closeMealM=kn;window.saveMeal=vd;window.clrMeal=wd;window.openCooked=bd;window.skipCooked=_d;window.saveCooked=Id;window.scheduleRecipe=kd;window.schedSet=Ed;window.initRecChips=Ei;window.toggleChip=gd;window.filterRecs=Si;window._pickedRec=null;window._activeChips=new Set;window.saveSettings=Td;window.toggleNotif=Cd;window.testNotif=Ad;window.addHousehold=xd;window.switchHousehold=Ld;window.removeHousehold=Pd;window.setMode=Rd;window.showNotif=m;window._appStart=async function(t){a.hid=t,c("LS").style.display="none",c("APP").style.display="flex",window.showScreen("home"),O("syncing");const e=W("ks-hhs")||[t];e.includes(t)||(e.push(t),He("ks-hhs",e)),await Ri(),Sd(),vn();async function n(){try{O("syncing");const s=await Promise.allSettled([R(`households/${a.hid}/inventory`),R(`households/${a.hid}/recipes`),R(`households/${a.hid}/shopping`),R(`households/${a.hid}/mealplan`),R(`households/${a.hid}/settings`),R(`households/${a.hid}/cooklog`),R(`households/${a.hid}/wastelog`)]),i=(p,f)=>p.status==="fulfilled"?p.value:f;a.inv=i(s[0],a.inv),a.recs=i(s[1],a.recs),a.shop=i(s[2],a.shop);const r=i(s[3],[]),o=i(s[4],[]),l=i(s[5],[]),d=i(s[6],[]),u={};r.forEach(p=>{p.date&&p.meal&&(u[p.date]=p.meal)}),a.mp=u;const h=o.find(p=>p.id==="config");h&&(a.cfg={...ut,...h}),a.cookLog=l.sort((p,f)=>new Date(f.loggedAt||f.date||0)-new Date(p.loggedAt||p.date||0)),a.wasteLog=d.sort((p,f)=>new Date(f.loggedAt||f.date||0)-new Date(p.loggedAt||p.date||0)),O("synced"),pi(),xt(),tt(),et()}catch(s){console.error("poll error",s),O("error")}}window._poll=n,n(),setInterval(n,6e3)};Dd();cd();a.cfg.notif&&setTimeout(Ti,3e3);tt();function Tn(t){c("auth-loading").style.display="none",c("auth-signin").style.display=t==="signin"?"flex":"none",c("auth-signup").style.display=t==="signup"?"flex":"none",c("authError").style.display="none",c("signupError").style.display="none"}function pe(t,e){const n=c(t);n&&(n.textContent=e,n.style.display="block")}function Pt(t){return{"auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password.","auth/invalid-credential":"Incorrect email or password.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password must be at least 6 characters.","auth/too-many-requests":"Too many attempts. Please try again later.","auth/popup-closed-by-user":"Sign-in popup was closed.","auth/cancelled-popup-request":"Sign-in was cancelled.","auth/account-exists-with-different-credential":"An account already exists with this email using a different sign-in method."}[t.code]||t.message||"Something went wrong. Please try again."}function ce(t,e){t&&(e?(t._origText=t.textContent,t.textContent="Please wait…",t.disabled=!0):(t.textContent=t._origText||t.textContent,t.disabled=!1))}var rs;(rs=c("btnGoogle"))==null||rs.addEventListener("click",async()=>{const t=c("btnGoogle");ce(t,!0),c("authError").style.display="none";try{await Vc()}catch(e){pe("authError",Pt(e))}ce(t,!1)});var os;(os=c("btnApple"))==null||os.addEventListener("click",async()=>{const t=c("btnApple");ce(t,!0),c("authError").style.display="none";try{await Wc()}catch(e){pe("authError",Pt(e))}ce(t,!1)});var as;(as=c("btnEmailSign"))==null||as.addEventListener("click",async()=>{var s,i,r;const t=(i=(s=c("authEmail"))==null?void 0:s.value)==null?void 0:i.trim(),e=(r=c("authPass"))==null?void 0:r.value;if(!t||!e){pe("authError","Please enter your email and password.");return}const n=c("btnEmailSign");ce(n,!0),c("authError").style.display="none";try{await qc(t,e)}catch(o){pe("authError",Pt(o))}ce(n,!1)});var cs;(cs=c("btnEmailSignup"))==null||cs.addEventListener("click",async()=>{var i,r,o,l,d;const t=(r=(i=c("signupName"))==null?void 0:i.value)==null?void 0:r.trim(),e=(l=(o=c("signupEmail"))==null?void 0:o.value)==null?void 0:l.trim(),n=(d=c("signupPass"))==null?void 0:d.value;if(!t){pe("signupError","Please enter your name.");return}if(!e||!n){pe("signupError","Please enter your email and password.");return}const s=c("btnEmailSignup");ce(s,!0),c("signupError").style.display="none";try{await Gc(e,n,t)}catch(u){pe("signupError",Pt(u))}ce(s,!1)});var ls;(ls=c("btnToggleSignup"))==null||ls.addEventListener("click",()=>Tn("signup"));var ds;(ds=c("btnToggleSignin"))==null||ds.addEventListener("click",()=>Tn("signin"));var us;(us=c("authPass"))==null||us.addEventListener("keydown",t=>{var e;t.key==="Enter"&&((e=c("btnEmailSign"))==null||e.click())});var hs;(hs=c("signupPass"))==null||hs.addEventListener("keydown",t=>{var e;t.key==="Enter"&&((e=c("btnEmailSignup"))==null||e.click())});window.doSignOut=async function(){confirm("Sign out of Kitchen?")&&await Kc()};let jt=!1;Bc(t=>{var e;if(t){const n=localStorage.getItem("ks-h")||t.uid;localStorage.setItem("ks-h",n),localStorage.setItem("ks-who",t.displayName||((e=t.email)==null?void 0:e.split("@")[0])||"You"),c("LS").style.display="none",c("APP").style.display="flex",jt||(jt=!0,window._appStart(n))}else jt=!1,c("APP").style.display="none",c("LS").style.display="flex",Tn("signin")});
