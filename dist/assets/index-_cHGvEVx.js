(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const qr={name:"The Bora Family",adults:"Bora",kids:"1 toddler (age 3)",nopork:!0,noshellfish:!1,vegetarian:!1,glutenfree:!1,other:"",cuisines:"Bangladeshi, Turkish, Mediterranean, American",cookTime:"40-60 min",zipcode:""},d={hid:null,inv:[],recs:[],shop:[],mp:{},cfg:{...qr},cookLog:[],wasteLog:[],activity:[],chat:[],cp:null,selR:"fridge",maL:"fridge",adjId:null,it:"all",rt:"all",recSearch:"",recSort:"az",recFilters:{tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[]},md:null,cn:"",nr:0,eid:null,scanDestList:!1,aisleMode:!1,selectMode:null,selectedIds:new Set,username:null,comRecs:[],comTab:"browse",comSearch:"",comCuisine:"all",comSort:"newest",comTags:[],comTime:"any",comMinRating:0,comPage:0,myLikes:new Set};function ce(n){try{return JSON.parse(localStorage.getItem(n))}catch{return null}}function Me(n,e){localStorage.setItem(n,JSON.stringify(e))}const _c=[{value:0,label:"None"},{value:.25,label:"¼"},{value:1/3,label:"⅓"},{value:.5,label:"½"},{value:2/3,label:"⅔"},{value:.75,label:"¾"}];function Wr(n){const e=Number(n)||0,t=Math.floor(e),i=e-t,s=_c.reduce((r,o)=>Math.abs(o.value-i)<Math.abs(r-i)?o.value:r,0);return{whole:t,frac:s}}function vn(n,e){const t=Math.max(0,Math.min(99,Math.floor(Number(n)||0))),i=Number(e)||0,s=t+i;return s<=0?.25:s}function go(n){const{whole:e,frac:t}=Wr(n),i=t>0?(_c.find(s=>Math.abs(s.value-t)<.01)||{}).label:"";return e===0&&i?i:e>0&&i?`${e} ${i}`:`${e||1}`}function _i(n,e){return`${go(n)} ${e||"Unit"}`}function Ma(n,e){const t=_c.map(i=>{const s=Math.abs(i.value-e)<.01?" selected":"";return`<option value="${i.value}"${s}>${i.label}</option>`}).join("");return`<select class="frac-select" id="${n}">${t}</select>`}function Ae(n){return n?n.replace(/\w\S*/g,e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()):""}function f(n){return document.getElementById(n)}function ln(){return new Date().toISOString().split("T")[0]}function Pi(){const n=new Date;n.setHours(0,0,0,0);const e=new Date(n);return e.setDate(n.getDate()-n.getDay()),Array.from({length:7},(t,i)=>{const s=new Date(e);return s.setDate(e.getDate()+i),s})}function yy(){const n=new Date;return n.setDate(n.getDate()+1),n.toISOString().split("T")[0]}function At(n){if(!n)return null;const e=new Date;e.setHours(0,0,0,0);const t=new Date(n+"T00:00:00"),i=Math.round((t-e)/864e5);return i<0?{c:"expired",l:"Expired"}:i===0?{c:"expiring",l:"Expires today"}:i<=7?{c:"expiring",l:`Expires in ${i}d`}:{c:"ok",l:t.toLocaleDateString("en-US",{month:"short",day:"numeric"})}}function zh(n){return{fridge:"🌡 Fridge",freezer:"🧊 Freezer",pantry:"🥫 Pantry",household:"🏠 Household"}[n]||n}const qh={Produce:"🥦",Proteins:"🍗",Dairy:"🧀",Grains:"🌾",Condiments:"🧴",Snacks:"🍿",Beverages:"🥤",Frozen:"❄️",General:"📦",Imported:"📥"};function $i(n){const e=(n.name||"").toLowerCase(),t=(n.category||"").toLowerCase();return t.includes("produce")||t.includes("vegetable")||t.includes("fruit")||e.match(/apple|banana|broccoli|carrot|celery|cabbage|tomato|onion|garlic|jalap|spinach|mushroom|squash|lettuce|cucumber|pepper/)?"Produce":t.includes("protein")||t.includes("meat")||t.includes("seafood")||t.includes("poultry")||e.match(/chicken|beef|lamb|turkey|salmon|cod|tuna|fish|steak|pork|shrimp/)?"Proteins":t.includes("dairy")||t.includes("egg")||e.match(/egg|butter|cheese|milk|cream|yogurt|ghee/)?"Dairy":t.includes("grain")||t.includes("bread")||t.includes("pasta")||e.match(/rice|pasta|bread|flour|oat|cereal|grain|noodle|tortilla/)?"Grains":t.includes("condiment")||t.includes("sauce")||e.match(/sauce|ketchup|mustard|oil|vinegar|salt|pepper|spice|herb|seasoning|mayo/)?"Condiments":n.location==="freezer"?"Frozen":"General"}function vy(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/^[-•]\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/\n/g,"<br>")}let fa=null;function R(n){const e=f("notif");e&&(e.textContent=n,e.style.display="block",e.style.animation="none",e.offsetWidth,e.style.animation="fn 2.5s ease forwards",fa&&clearTimeout(fa),fa=setTimeout(()=>e.style.display="none",2500))}function ot(n){var e;(e=f("ov-"+n))==null||e.classList.add("active")}function Ee(n){var e;(e=f("ov-"+n))==null||e.classList.remove("active")}function ks(n,e){const t=f(n);t&&t.querySelectorAll(".star").forEach((i,s)=>{i.textContent=s<e?"★":"☆",i.classList.toggle("on",s<e)})}function bc(n){const e=n.toLowerCase();return/frozen|ice cream|pizza|nugget|waffle|tater|edamame|popsicle/.test(e)?"freezer":/milk|cheese|yogurt|butter|cream|egg|meat|chicken|beef|pork|fish|salmon|shrimp|tofu|deli|bacon|sausage|produce|lettuce|spinach|berry|berries|fruit|vegetable|carrot|broccoli|juice/.test(e)?"fridge":"pantry"}const wy={Produce:["apple","banana","carrot","celery","onion","garlic","tomato","lettuce","cucumber","pepper","broccoli","spinach","mushroom","lemon","lime","herb","cabbage","squash","jalap","avocado","potato","ginger"],"Meat & Fish":["chicken","beef","lamb","turkey","salmon","cod","tuna","fish","steak","shrimp","pork","bacon","sausage","ground"],"Dairy & Eggs":["egg","butter","cheese","milk","cream","yogurt","ghee","kefir"],Frozen:["frozen","ice cream","pizza","nugget","waffle","edamame","okra","lima","broccoli floret"],Pantry:["rice","pasta","flour","oil","vinegar","sauce","spice","salt","pepper","sugar","honey","oat","bread","can","bean","lentil","chickpea","stock","broth"],"Snacks & Drinks":["chip","cracker","cookie","juice","soda","water","tea","coffee","snack","nut","seed"]};function _y(n){const e=n.toLowerCase();for(const[t,i]of Object.entries(wy))if(i.some(s=>e.includes(s)))return t;return"Other"}const by=()=>{};var zu={};/**
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
 */const Wh=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ty=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|c&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Gh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,m=r>>2,y=(r&3)<<4|c>>4;let w=(c&15)<<2|h>>6,E=h&63;l||(E=64,o||(w=64)),i.push(t[m],t[y],t[w],t[E])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Wh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ty(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const y=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||c==null||h==null||y==null)throw new Iy;const w=r<<2|c>>4;if(i.push(w),h!==64){const E=c<<4&240|h>>2;if(i.push(E),y!==64){const A=h<<6&192|y;i.push(A)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Iy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ey=function(n){const e=Wh(n);return Gh.encodeByteArray(e,!0)},Gr=function(n){return Ey(n).replace(/\./g,"")},Kh=function(n){try{return Gh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ky(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Sy=()=>ky().__FIREBASE_DEFAULTS__,Cy=()=>{if(typeof process>"u"||typeof zu>"u")return;const n=zu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ay=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Kh(n[1]);return e&&JSON.parse(e)},yo=()=>{try{return by()||Sy()||Cy()||Ay()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Qh=n=>{var e,t;return(t=(e=yo())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Jh=n=>{const e=Qh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Yh=()=>{var n;return(n=yo())==null?void 0:n.config},Xh=n=>{var e;return(e=yo())==null?void 0:e[`_${n}`]};/**
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
 */class Ry{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Cn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Tc(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Zh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Gr(JSON.stringify(t)),Gr(JSON.stringify(o)),""].join(".")}const ms={};function xy(){const n={prod:[],emulator:[]};for(const e of Object.keys(ms))ms[e]?n.emulator.push(e):n.prod.push(e);return n}function Py(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let qu=!1;function Ic(n,e){if(typeof window>"u"||typeof document>"u"||!Cn(window.location.host)||ms[n]===e||ms[n]||qu)return;ms[n]=e;function t(w){return`__firebase__banner__${w}`}const i="__firebase__banner",r=xy().prod.length>0;function o(){const w=document.getElementById(i);w&&w.remove()}function c(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function l(w,E){w.setAttribute("width","24"),w.setAttribute("id",E),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function h(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{qu=!0,o()},w}function m(w,E){w.setAttribute("id",E),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function y(){const w=Py(i),E=t("text"),A=document.getElementById(E)||document.createElement("span"),P=t("learnmore"),$=document.getElementById(P)||document.createElement("a"),U=t("preprendIcon"),N=document.getElementById(U)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const M=w.element;c(M),m($,P);const D=h();l(N,U),M.append(N,A,$,D),document.body.appendChild(M)}r?(A.innerText="Preview backend disconnected.",N.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(N.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,A.innerText="Preview backend running in this workspace."),A.setAttribute("id",E)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
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
 */function He(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $y(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function Ly(){var e;const n=(e=yo())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Dy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ny(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function My(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Oy(){const n=He();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Vy(){return!Ly()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Uy(){try{return typeof indexedDB=="object"}catch{return!1}}function Fy(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const By="FirebaseError";class Pt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=By,Object.setPrototypeOf(this,Pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ns.prototype.create)}}class Ns{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Hy(r,i):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Pt(s,c,i)}}function Hy(n,e){return n.replace(jy,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const jy=/\{\$([^}]+)}/g;function zy(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function zn(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Wu(r)&&Wu(o)){if(!zn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Wu(n){return n!==null&&typeof n=="object"}/**
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
 */function Ms(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function cs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function ls(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function qy(n,e){const t=new Wy(n,e);return t.subscribe.bind(t)}class Wy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Gy(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=pa),s.error===void 0&&(s.error=pa),s.complete===void 0&&(s.complete=pa);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gy(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function pa(){}/**
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
 */function Le(n){return n&&n._delegate?n._delegate:n}class wn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Nn="[DEFAULT]";/**
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
 */class Ky{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Ry;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Jy(e))try{this.getOrInitializeService({instanceIdentifier:Nn})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Nn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nn){return this.instances.has(e)}getOptions(e=Nn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(r);i===c&&o.resolve(s)}return s}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Qy(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Nn){return this.component?this.component.multipleInstances?e:Nn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qy(n){return n===Nn?void 0:n}function Jy(n){return n.instantiationMode==="EAGER"}/**
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
 */class Yy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ky(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var X;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(X||(X={}));const Xy={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},Zy=X.INFO,ev={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},tv=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=ev[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ec{constructor(e){this.name=e,this._logLevel=Zy,this._logHandler=tv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const nv=(n,e)=>e.some(t=>n instanceof t);let Gu,Ku;function iv(){return Gu||(Gu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sv(){return Ku||(Ku=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ef=new WeakMap,Oa=new WeakMap,tf=new WeakMap,ma=new WeakMap,kc=new WeakMap;function rv(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(hn(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ef.set(t,n)}).catch(()=>{}),kc.set(e,n),e}function ov(n){if(Oa.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Oa.set(n,e)}let Va={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Oa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||tf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return hn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function av(n){Va=n(Va)}function cv(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(ga(this),e,...t);return tf.set(i,e.sort?e.sort():[e]),hn(i)}:sv().includes(n)?function(...e){return n.apply(ga(this),e),hn(ef.get(this))}:function(...e){return hn(n.apply(ga(this),e))}}function lv(n){return typeof n=="function"?cv(n):(n instanceof IDBTransaction&&ov(n),nv(n,iv())?new Proxy(n,Va):n)}function hn(n){if(n instanceof IDBRequest)return rv(n);if(ma.has(n))return ma.get(n);const e=lv(n);return e!==n&&(ma.set(n,e),kc.set(e,n)),e}const ga=n=>kc.get(n);function uv(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),c=hn(o);return i&&o.addEventListener("upgradeneeded",l=>{i(hn(o.result),l.oldVersion,l.newVersion,hn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const dv=["get","getKey","getAll","getAllKeys","count"],hv=["put","add","delete","clear"],ya=new Map;function Qu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ya.get(e))return ya.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=hv.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||dv.includes(t)))return;const r=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return i&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return ya.set(e,r),r}av(n=>({...n,get:(e,t,i)=>Qu(e,t)||n.get(e,t,i),has:(e,t)=>!!Qu(e,t)||n.has(e,t)}));/**
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
 */class fv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(pv(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function pv(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ua="@firebase/app",Ju="0.14.9";/**
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
 */const Ut=new Ec("@firebase/app"),mv="@firebase/app-compat",gv="@firebase/analytics-compat",yv="@firebase/analytics",vv="@firebase/app-check-compat",wv="@firebase/app-check",_v="@firebase/auth",bv="@firebase/auth-compat",Tv="@firebase/database",Iv="@firebase/data-connect",Ev="@firebase/database-compat",kv="@firebase/functions",Sv="@firebase/functions-compat",Cv="@firebase/installations",Av="@firebase/installations-compat",Rv="@firebase/messaging",xv="@firebase/messaging-compat",Pv="@firebase/performance",$v="@firebase/performance-compat",Lv="@firebase/remote-config",Dv="@firebase/remote-config-compat",Nv="@firebase/storage",Mv="@firebase/storage-compat",Ov="@firebase/firestore",Vv="@firebase/ai",Uv="@firebase/firestore-compat",Fv="firebase",Bv="12.10.0";/**
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
 */const Fa="[DEFAULT]",Hv={[Ua]:"fire-core",[mv]:"fire-core-compat",[yv]:"fire-analytics",[gv]:"fire-analytics-compat",[wv]:"fire-app-check",[vv]:"fire-app-check-compat",[_v]:"fire-auth",[bv]:"fire-auth-compat",[Tv]:"fire-rtdb",[Iv]:"fire-data-connect",[Ev]:"fire-rtdb-compat",[kv]:"fire-fn",[Sv]:"fire-fn-compat",[Cv]:"fire-iid",[Av]:"fire-iid-compat",[Rv]:"fire-fcm",[xv]:"fire-fcm-compat",[Pv]:"fire-perf",[$v]:"fire-perf-compat",[Lv]:"fire-rc",[Dv]:"fire-rc-compat",[Nv]:"fire-gcs",[Mv]:"fire-gcs-compat",[Ov]:"fire-fst",[Uv]:"fire-fst-compat",[Vv]:"fire-vertex","fire-js":"fire-js",[Fv]:"fire-js-all"};/**
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
 */const Kr=new Map,jv=new Map,Ba=new Map;function Yu(n,e){try{n.container.addComponent(e)}catch(t){Ut.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function qn(n){const e=n.name;if(Ba.has(e))return Ut.debug(`There were multiple attempts to register component ${e}.`),!1;Ba.set(e,n);for(const t of Kr.values())Yu(t,n);for(const t of jv.values())Yu(t,n);return!0}function vo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function We(n){return n==null?!1:n.settings!==void 0}/**
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
 */const zv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fn=new Ns("app","Firebase",zv);/**
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
 */class qv{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fn.create("app-deleted",{appName:this._name})}}/**
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
 */const Jn=Bv;function nf(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:Fa,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw fn.create("bad-app-name",{appName:String(s)});if(t||(t=Yh()),!t)throw fn.create("no-options");const r=Kr.get(s);if(r){if(zn(t,r.options)&&zn(i,r.config))return r;throw fn.create("duplicate-app",{appName:s})}const o=new Yy(s);for(const l of Ba.values())o.addComponent(l);const c=new qv(t,i,o);return Kr.set(s,c),c}function Sc(n=Fa){const e=Kr.get(n);if(!e&&n===Fa&&Yh())return nf();if(!e)throw fn.create("no-app",{appName:n});return e}function It(n,e,t){let i=Hv[n]??n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),r=e.match(/\s|\//);if(s||r){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ut.warn(o.join(" "));return}qn(new wn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Wv="firebase-heartbeat-database",Gv=1,Ss="firebase-heartbeat-store";let va=null;function sf(){return va||(va=uv(Wv,Gv,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ss)}catch(t){console.warn(t)}}}}).catch(n=>{throw fn.create("idb-open",{originalErrorMessage:n.message})})),va}async function Kv(n){try{const t=(await sf()).transaction(Ss),i=await t.objectStore(Ss).get(rf(n));return await t.done,i}catch(e){if(e instanceof Pt)Ut.warn(e.message);else{const t=fn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(t.message)}}}async function Xu(n,e){try{const i=(await sf()).transaction(Ss,"readwrite");await i.objectStore(Ss).put(e,rf(n)),await i.done}catch(t){if(t instanceof Pt)Ut.warn(t.message);else{const i=fn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ut.warn(i.message)}}}function rf(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Qv=1024,Jv=30;class Yv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Zv(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Zu();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>Jv){const o=ew(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Ut.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Zu(),{heartbeatsToSend:i,unsentEntries:s}=Xv(this._heartbeatsCache.heartbeats),r=Gr(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Ut.warn(t),""}}}function Zu(){return new Date().toISOString().substring(0,10)}function Xv(n,e=Qv){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),ed(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),ed(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Zv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Uy()?Fy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Kv(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Xu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Xu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ed(n){return Gr(JSON.stringify({version:2,heartbeats:n})).length}function ew(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function tw(n){qn(new wn("platform-logger",e=>new fv(e),"PRIVATE")),qn(new wn("heartbeat",e=>new Yv(e),"PRIVATE")),It(Ua,Ju,n),It(Ua,Ju,"esm2020"),It("fire-js","")}tw("");var nw="firebase",iw="12.10.0";/**
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
 */It(nw,iw,"app");function of(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sw=of,af=new Ns("auth","Firebase",of());/**
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
 */const Qr=new Ec("@firebase/auth");function rw(n,...e){Qr.logLevel<=X.WARN&&Qr.warn(`Auth (${Jn}): ${n}`,...e)}function Ar(n,...e){Qr.logLevel<=X.ERROR&&Qr.error(`Auth (${Jn}): ${n}`,...e)}/**
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
 */function st(n,...e){throw Ac(n,...e)}function ut(n,...e){return Ac(n,...e)}function Cc(n,e,t){const i={...sw(),[e]:t};return new Ns("auth","Firebase",i).create(e,{appName:n.name})}function Et(n){return Cc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function cf(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&st(n,"argument-error"),Cc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ac(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return af.create(n,...e)}function q(n,e,...t){if(!n)throw Ac(e,...t)}function Mt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ar(e),new Error(e)}function Ft(n,e){n||Mt(e)}/**
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
 */function Ha(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function ow(){return td()==="http:"||td()==="https:"}function td(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function aw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ow()||Ny()||"connection"in navigator)?navigator.onLine:!0}function cw(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Os{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ft(t>e,"Short delay should be less than long delay!"),this.isMobile=$y()||My()}get(){return aw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Rc(n,e){Ft(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class lf{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const lw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const uw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],dw=new Os(3e4,6e4);function An(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function jt(n,e,t,i,s={}){return uf(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const c=Ms({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:l,...r};return Dy()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Cn(n.emulatorConfig.host)&&(h.credentials="include"),lf.fetch()(await df(n,n.config.apiHost,t,c),h)})}async function uf(n,e,t){n._canInitEmulator=!1;const i={...lw,...e};try{const s=new fw(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw pr(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const c=r.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw pr(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw pr(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw pr(n,"user-disabled",o);const m=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Cc(n,m,h);st(n,m)}}catch(s){if(s instanceof Pt)throw s;st(n,"network-request-failed",{message:String(s)})}}async function Vs(n,e,t,i,s={}){const r=await jt(n,e,t,i,s);return"mfaPendingCredential"in r&&st(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function df(n,e,t,i){const s=`${e}${t}?${i}`,r=n,o=r.config.emulator?Rc(n.config,s):`${n.config.apiScheme}://${s}`;return uw.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function hw(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class fw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(ut(this.auth,"network-request-failed")),dw.get())})}}function pr(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=ut(n,e,i);return s.customData._tokenResponse=t,s}function nd(n){return n!==void 0&&n.enterprise!==void 0}class pw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return hw(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function mw(n,e){return jt(n,"GET","/v2/recaptchaConfig",An(n,e))}/**
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
 */async function gw(n,e){return jt(n,"POST","/v1/accounts:delete",e)}async function Jr(n,e){return jt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function gs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yw(n,e=!1){const t=Le(n),i=await t.getIdToken(e),s=xc(i);q(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:gs(wa(s.auth_time)),issuedAtTime:gs(wa(s.iat)),expirationTime:gs(wa(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function wa(n){return Number(n)*1e3}function xc(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Ar("JWT malformed, contained fewer than 3 sections"),null;try{const s=Kh(t);return s?JSON.parse(s):(Ar("Failed to decode base64 JWT payload"),null)}catch(s){return Ar("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function id(n){const e=xc(n);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function bi(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Pt&&vw(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function vw({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class ww{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ja{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=gs(this.lastLoginAt),this.creationTime=gs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yr(n){var y;const e=n.auth,t=await n.getIdToken(),i=await bi(n,Jr(e,{idToken:t}));q(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const r=(y=s.providerUserInfo)!=null&&y.length?hf(s.providerUserInfo):[],o=bw(n.providerData,r),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),h=c?l:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ja(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,m)}async function _w(n){const e=Le(n);await Yr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bw(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function hf(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Tw(n,e){const t=await uf(n,{},async()=>{const i=Ms({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=await df(n,s,"/v1/token",`key=${r}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:i};return n.emulatorConfig&&Cn(n.emulatorConfig.host)&&(l.credentials="include"),lf.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Iw(n,e){return jt(n,"POST","/v2/accounts:revokeToken",An(n,e))}/**
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
 */class li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):id(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){q(e.length!==0,"internal-error");const t=id(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Tw(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new li;return i&&(q(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(q(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new li,this.toJSON())}_performRefresh(){return Mt("not implemented")}}/**
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
 */function Jt(n,e){q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ct{constructor({uid:e,auth:t,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new ww(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ja(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await bi(this,this.stsTokenManager.getToken(this.auth,e));return q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return yw(this,e)}reload(){return _w(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ct({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Yr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(We(this.auth.app))return Promise.reject(Et(this.auth));const e=await this.getIdToken();return await bi(this,gw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,s=t.email??void 0,r=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,h=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:y,emailVerified:w,isAnonymous:E,providerData:A,stsTokenManager:P}=t;q(y&&P,e,"internal-error");const $=li.fromJSON(this.name,P);q(typeof y=="string",e,"internal-error"),Jt(i,e.name),Jt(s,e.name),q(typeof w=="boolean",e,"internal-error"),q(typeof E=="boolean",e,"internal-error"),Jt(r,e.name),Jt(o,e.name),Jt(c,e.name),Jt(l,e.name),Jt(h,e.name),Jt(m,e.name);const U=new ct({uid:y,auth:e,email:s,emailVerified:w,displayName:i,isAnonymous:E,photoURL:o,phoneNumber:r,tenantId:c,stsTokenManager:$,createdAt:h,lastLoginAt:m});return A&&Array.isArray(A)&&(U.providerData=A.map(N=>({...N}))),l&&(U._redirectEventId=l),U}static async _fromIdTokenResponse(e,t,i=!1){const s=new li;s.updateFromServerResponse(t);const r=new ct({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Yr(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];q(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?hf(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),c=new li;c.updateFromIdToken(i);const l=new ct({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new ja(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,h),l}}/**
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
 */const sd=new Map;function Ot(n){Ft(n instanceof Function,"Expected a class definition");let e=sd.get(n);return e?(Ft(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,sd.set(n,e),e)}/**
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
 */class ff{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ff.type="NONE";const rd=ff;/**
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
 */function Rr(n,e,t){return`firebase:${n}:${e}:${t}`}class ui{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Rr(this.userKey,s.apiKey,r),this.fullPersistenceKey=Rr("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Jr(this.auth,{idToken:e}).catch(()=>{});return t?ct._fromGetAccountInfoResponse(this.auth,t,e):null}return ct._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new ui(Ot(rd),e,i);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let r=s[0]||Ot(rd);const o=Rr(i,e.config.apiKey,e.name);let c=null;for(const h of t)try{const m=await h._get(o);if(m){let y;if(typeof m=="string"){const w=await Jr(e,{idToken:m}).catch(()=>{});if(!w)break;y=await ct._fromGetAccountInfoResponse(e,w,m)}else y=ct._fromJSON(e,m);h!==r&&(c=y),r=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ui(r,e,i):(r=l[0],c&&await r._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==r)try{await h._remove(o)}catch{}})),new ui(r,e,i))}}/**
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
 */function od(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wf(e))return"Blackberry";if(_f(e))return"Webos";if(mf(e))return"Safari";if((e.includes("chrome/")||gf(e))&&!e.includes("edge/"))return"Chrome";if(vf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function pf(n=He()){return/firefox\//i.test(n)}function mf(n=He()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gf(n=He()){return/crios\//i.test(n)}function yf(n=He()){return/iemobile/i.test(n)}function vf(n=He()){return/android/i.test(n)}function wf(n=He()){return/blackberry/i.test(n)}function _f(n=He()){return/webos/i.test(n)}function Pc(n=He()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Ew(n=He()){var e;return Pc(n)&&!!((e=window.navigator)!=null&&e.standalone)}function kw(){return Oy()&&document.documentMode===10}function bf(n=He()){return Pc(n)||vf(n)||_f(n)||wf(n)||/windows phone/i.test(n)||yf(n)}/**
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
 */function Tf(n,e=[]){let t;switch(n){case"Browser":t=od(He());break;case"Worker":t=`${od(He())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Jn}/${i}`}/**
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
 */class Sw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,c)=>{try{const l=e(r);o(l)}catch(l){c(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function Cw(n,e={}){return jt(n,"GET","/v2/passwordPolicy",An(n,e))}/**
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
 */const Aw=6;class Rw{constructor(e){var i;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Aw,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class xw{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ad(this),this.idTokenSubscription=new ad(this),this.beforeStateQueue=new Sw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=af,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ot(t)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await ui.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Jr(this,{idToken:e}),i=await ct._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(We(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Yr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(We(this.app))return Promise.reject(Et(this));const t=e?Le(e):null;return t&&q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return We(this.app)?Promise.reject(Et(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return We(this.app)?Promise.reject(Et(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ot(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Cw(this),t=new Rw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ns("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Iw(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ot(e)||this._popupRedirectResolver;q(t,this,"argument-error"),this.redirectPersistenceManager=await ui.create(this,[Ot(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(c,this,"internal-error"),c.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;if(We(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&rw(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function $t(n){return Le(n)}class ad{constructor(e){this.auth=e,this.observer=null,this.addObserver=qy(t=>this.observer=t)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let wo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Pw(n){wo=n}function If(n){return wo.loadJS(n)}function $w(){return wo.recaptchaEnterpriseScript}function Lw(){return wo.gapiScript}function Dw(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Nw{constructor(){this.enterprise=new Mw}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Mw{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Ow="recaptcha-enterprise",Ef="NO_RECAPTCHA";class Vw{constructor(e){this.type=Ow,this.auth=$t(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,c)=>{mw(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new pw(l);return r.tenantId==null?r._agentRecaptchaConfig=h:r._tenantRecaptchaConfigs[r.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(r,o,c){const l=window.grecaptcha;nd(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(h=>{o(h)}).catch(()=>{o(Ef)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Nw().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(c=>{if(!t&&nd(window.grecaptcha))s(c,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=$w();l.length!==0&&(l+=c),If(l).then(()=>{s(c,r,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function cd(n,e,t,i=!1,s=!1){const r=new Vw(n);let o;if(s)o=Ef;else try{o=await r.verify(t)}catch{o=await r.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return i?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function za(n,e,t,i,s){var r;if((r=n._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await cd(n,e,t,t==="getOobCode");return i(n,o)}else return i(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await cd(n,e,t,t==="getOobCode");return i(n,c)}else return Promise.reject(o)})}/**
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
 */function Uw(n,e){const t=vo(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(zn(r,e??{}))return s;st(s,"already-initialized")}return t.initialize({options:e})}function Fw(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Ot);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Bw(n,e,t){const i=$t(n);q(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=kf(e),{host:o,port:c}=Hw(e),l=c===null?"":`:${c}`,h={url:`${r}//${o}${l}/`},m=Object.freeze({host:o,port:c,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){q(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),q(zn(h,i.config.emulator)&&zn(m,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=h,i.emulatorConfig=m,i.settings.appVerificationDisabledForTesting=!0,Cn(o)?(Tc(`${r}//${o}${l}`),Ic("Auth",!0)):jw()}function kf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Hw(n){const e=kf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:ld(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:ld(o)}}}function ld(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function jw(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class $c{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Mt("not implemented")}_getIdTokenResponse(e){return Mt("not implemented")}_linkToIdToken(e,t){return Mt("not implemented")}_getReauthenticationResolver(e){return Mt("not implemented")}}async function zw(n,e){return jt(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function qw(n,e){return Vs(n,"POST","/v1/accounts:signInWithPassword",An(n,e))}/**
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
 */async function Ww(n,e){return Vs(n,"POST","/v1/accounts:signInWithEmailLink",An(n,e))}async function Gw(n,e){return Vs(n,"POST","/v1/accounts:signInWithEmailLink",An(n,e))}/**
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
 */class Cs extends $c{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Cs(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Cs(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return za(e,t,"signInWithPassword",qw);case"emailLink":return Ww(e,{email:this._email,oobCode:this._password});default:st(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return za(e,i,"signUpPassword",zw);case"emailLink":return Gw(e,{idToken:t,email:this._email,oobCode:this._password});default:st(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function di(n,e){return Vs(n,"POST","/v1/accounts:signInWithIdp",An(n,e))}/**
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
 */const Kw="http://localhost";class Bt extends $c{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Bt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):st("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...r}=t;if(!i||!s)return null;const o=new Bt(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return di(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,di(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,di(e,t)}buildRequest(){const e={requestUri:Kw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ms(t)}return e}}/**
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
 */function Qw(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Jw(n){const e=cs(ls(n)).link,t=e?cs(ls(e)).deep_link_id:null,i=cs(ls(n)).deep_link_id;return(i?cs(ls(i)).link:null)||i||t||e||n}class Lc{constructor(e){const t=cs(ls(e)),i=t.apiKey??null,s=t.oobCode??null,r=Qw(t.mode??null);q(i&&s&&r,"argument-error"),this.apiKey=i,this.operation=r,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Jw(e);try{return new Lc(t)}catch{return null}}}/**
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
 */class Li{constructor(){this.providerId=Li.PROVIDER_ID}static credential(e,t){return Cs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Lc.parseLink(t);return q(i,"argument-error"),Cs._fromEmailAndCode(e,i.code,i.tenantId)}}Li.PROVIDER_ID="password";Li.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Li.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class _o{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Di extends _o{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ys extends Di{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return q("providerId"in t&&"signInMethod"in t,"argument-error"),Bt._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return q(e.idToken||e.accessToken,"argument-error"),Bt._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return ys.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ys.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:r,nonce:o,providerId:c}=e;if(!i&&!s&&!t&&!r||!c)return null;try{return new ys(c)._credential({idToken:t,accessToken:i,nonce:o,pendingToken:r})}catch{return null}}}/**
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
 */class sn extends Di{constructor(){super("facebook.com")}static credential(e){return Bt._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";sn.PROVIDER_ID="facebook.com";/**
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
 */class Nt extends Di{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Bt._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Nt.credential(t,i)}catch{return null}}}Nt.GOOGLE_SIGN_IN_METHOD="google.com";Nt.PROVIDER_ID="google.com";/**
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
 */class rn extends Di{constructor(){super("github.com")}static credential(e){return Bt._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rn.credential(e.oauthAccessToken)}catch{return null}}}rn.GITHUB_SIGN_IN_METHOD="github.com";rn.PROVIDER_ID="github.com";/**
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
 */class on extends Di{constructor(){super("twitter.com")}static credential(e,t){return Bt._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return on.credential(t,i)}catch{return null}}}on.TWITTER_SIGN_IN_METHOD="twitter.com";on.PROVIDER_ID="twitter.com";/**
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
 */async function Yw(n,e){return Vs(n,"POST","/v1/accounts:signUp",An(n,e))}/**
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
 */class Wn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await ct._fromIdTokenResponse(e,i,s),o=ud(i);return new Wn({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=ud(i);return new Wn({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function ud(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Xr extends Pt{constructor(e,t,i,s){super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Xr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Xr(e,t,i,s)}}function Sf(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Xr._fromErrorAndOperation(n,r,e,i):r})}async function Xw(n,e,t=!1){const i=await bi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Wn._forOperation(n,"link",i)}/**
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
 */async function Zw(n,e,t=!1){const{auth:i}=n;if(We(i.app))return Promise.reject(Et(i));const s="reauthenticate";try{const r=await bi(n,Sf(i,s,e,n),t);q(r.idToken,i,"internal-error");const o=xc(r.idToken);q(o,i,"internal-error");const{sub:c}=o;return q(n.uid===c,i,"user-mismatch"),Wn._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&st(i,"user-mismatch"),r}}/**
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
 */async function Cf(n,e,t=!1){if(We(n.app))return Promise.reject(Et(n));const i="signIn",s=await Sf(n,i,e),r=await Wn._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function e_(n,e){return Cf($t(n),e)}/**
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
 */async function Af(n){const e=$t(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function t_(n,e,t){if(We(n.app))return Promise.reject(Et(n));const i=$t(n),o=await za(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Yw).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Af(n),l}),c=await Wn._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(c.user),c}function n_(n,e,t){return We(n.app)?Promise.reject(Et(n)):e_(Le(n),Li.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Af(n),i})}/**
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
 */async function i_(n,e){return jt(n,"POST","/v1/accounts:update",e)}/**
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
 */async function s_(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=Le(n),r={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await bi(i,i_(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const c=i.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function r_(n,e,t,i){return Le(n).onIdTokenChanged(e,t,i)}function o_(n,e,t){return Le(n).beforeAuthStateChanged(e,t)}function a_(n,e,t,i){return Le(n).onAuthStateChanged(e,t,i)}function c_(n){return Le(n).signOut()}const Zr="__sak";/**
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
 */class Rf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Zr,"1"),this.storage.removeItem(Zr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const l_=1e3,u_=10;class xf extends Rf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);kw()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,u_):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},l_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}xf.type="LOCAL";const d_=xf;/**
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
 */class Pf extends Rf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Pf.type="SESSION";const $f=Pf;/**
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
 */function h_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class bo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new bo(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const c=Array.from(o).map(async h=>h(t.origin,r)),l=await h_(c);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bo.receivers=[];/**
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
 */function Dc(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class f_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((c,l)=>{const h=Dc("",20);s.port1.start();const m=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(y){const w=y;if(w.data.eventId===h)switch(w.data.status){case"ack":clearTimeout(m),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),c(w.data.response);break;default:clearTimeout(m),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function kt(){return window}function p_(n){kt().location.href=n}/**
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
 */function Lf(){return typeof kt().WorkerGlobalScope<"u"&&typeof kt().importScripts=="function"}async function m_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function g_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function y_(){return Lf()?self:null}/**
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
 */const Df="firebaseLocalStorageDb",v_=1,eo="firebaseLocalStorage",Nf="fbase_key";class Us{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function To(n,e){return n.transaction([eo],e?"readwrite":"readonly").objectStore(eo)}function w_(){const n=indexedDB.deleteDatabase(Df);return new Us(n).toPromise()}function qa(){const n=indexedDB.open(Df,v_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(eo,{keyPath:Nf})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(eo)?e(i):(i.close(),await w_(),e(await qa()))})})}async function dd(n,e,t){const i=To(n,!0).put({[Nf]:e,value:t});return new Us(i).toPromise()}async function __(n,e){const t=To(n,!1).get(e),i=await new Us(t).toPromise();return i===void 0?null:i.value}function hd(n,e){const t=To(n,!0).delete(e);return new Us(t).toPromise()}const b_=800,T_=3;class Mf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>T_)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Lf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bo._getInstance(y_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await m_(),!this.activeServiceWorker)return;this.sender=new f_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||g_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qa();return await dd(e,Zr,"1"),await hd(e,Zr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>dd(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>__(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>hd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=To(s,!1).getAll();return new Us(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),b_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mf.type="LOCAL";const I_=Mf;new Os(3e4,6e4);/**
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
 */function Nc(n,e){return e?Ot(e):(q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Mc extends $c{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return di(e,this._buildIdpRequest())}_linkToIdToken(e,t){return di(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return di(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function E_(n){return Cf(n.auth,new Mc(n),n.bypassAuthState)}function k_(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),Zw(t,new Mc(n),n.bypassAuthState)}async function S_(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),Xw(t,new Mc(n),n.bypassAuthState)}/**
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
 */class Of{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return E_;case"linkViaPopup":case"linkViaRedirect":return S_;case"reauthViaPopup":case"reauthViaRedirect":return k_;default:st(this.auth,"internal-error")}}resolve(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const C_=new Os(2e3,1e4);async function Vf(n,e,t){if(We(n.app))return Promise.reject(ut(n,"operation-not-supported-in-this-environment"));const i=$t(n);cf(n,e,_o);const s=Nc(i,t);return new On(i,"signInViaPopup",e,s).executeNotNull()}class On extends Of{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,On.currentPopupAction&&On.currentPopupAction.cancel(),On.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Ft(this.filter.length===1,"Popup operations only handle one event");const e=Dc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,On.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)==null?void 0:t.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ut(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,C_.get())};e()}}On.currentPopupAction=null;/**
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
 */const A_="pendingRedirect",xr=new Map;class R_ extends Of{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=xr.get(this.auth._key());if(!e){try{const i=await x_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}xr.set(this.auth._key(),e)}return this.bypassAuthState||xr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function x_(n,e){const t=Ff(e),i=Uf(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}async function P_(n,e){return Uf(n)._set(Ff(e),"true")}function $_(n,e){xr.set(n._key(),e)}function Uf(n){return Ot(n._redirectPersistence)}function Ff(n){return Rr(A_,n.config.apiKey,n.name)}/**
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
 */function Bf(n,e,t){return L_(n,e,t)}async function L_(n,e,t){if(We(n.app))return Promise.reject(Et(n));const i=$t(n);cf(n,e,_o),await i._initializationPromise;const s=Nc(i,t);return await P_(s,i),s._openRedirect(i,e,"signInViaRedirect")}async function D_(n,e){return await $t(n)._initializationPromise,Hf(n,e,!1)}async function Hf(n,e,t=!1){if(We(n.app))return Promise.reject(Et(n));const i=$t(n),s=Nc(i,e),o=await new R_(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const N_=600*1e3;class M_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!O_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!jf(e)){const s=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";t.onError(ut(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=N_&&this.cachedEventUids.clear(),this.cachedEventUids.has(fd(e))}saveEventToCache(e){this.cachedEventUids.add(fd(e)),this.lastProcessedEventTime=Date.now()}}function fd(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function jf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function O_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jf(n);default:return!1}}/**
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
 */async function V_(n,e={}){return jt(n,"GET","/v1/projects",e)}/**
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
 */const U_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,F_=/^https?/;async function B_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await V_(n);for(const t of e)try{if(H_(t))return}catch{}st(n,"unauthorized-domain")}function H_(n){const e=Ha(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!F_.test(t))return!1;if(U_.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const j_=new Os(3e4,6e4);function pd(){const n=kt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function z_(n){return new Promise((e,t)=>{var s,r,o;function i(){pd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pd(),t(ut(n,"network-request-failed"))},timeout:j_.get()})}if((r=(s=kt().gapi)==null?void 0:s.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=kt().gapi)!=null&&o.load)i();else{const c=Dw("iframefcb");return kt()[c]=()=>{gapi.load?i():t(ut(n,"network-request-failed"))},If(`${Lw()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Pr=null,e})}let Pr=null;function q_(n){return Pr=Pr||z_(n),Pr}/**
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
 */const W_=new Os(5e3,15e3),G_="__/auth/iframe",K_="emulator/auth/iframe",Q_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},J_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Y_(n){const e=n.config;q(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Rc(e,K_):`https://${n.config.authDomain}/${G_}`,i={apiKey:e.apiKey,appName:n.name,v:Jn},s=J_.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Ms(i).slice(1)}`}async function X_(n){const e=await q_(n),t=kt().gapi;return q(t,n,"internal-error"),e.open({where:document.body,url:Y_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Q_,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=ut(n,"network-request-failed"),c=kt().setTimeout(()=>{r(o)},W_.get());function l(){kt().clearTimeout(c),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Z_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eb=500,tb=600,nb="_blank",ib="http://localhost";class md{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sb(n,e,t,i=eb,s=tb){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l={...Z_,width:i.toString(),height:s.toString(),top:r,left:o},h=He().toLowerCase();t&&(c=gf(h)?nb:t),pf(h)&&(e=e||ib,l.scrollbars="yes");const m=Object.entries(l).reduce((w,[E,A])=>`${w}${E}=${A},`,"");if(Ew(h)&&c!=="_self")return rb(e||"",c),new md(null);const y=window.open(e||"",c,m);q(y,n,"popup-blocked");try{y.focus()}catch{}return new md(y)}function rb(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const ob="__/auth/handler",ab="emulator/auth/handler",cb=encodeURIComponent("fac");async function gd(n,e,t,i,s,r){q(n.config.authDomain,n,"auth-domain-config-required"),q(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Jn,eventId:s};if(e instanceof _o){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",zy(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,y]of Object.entries({}))o[m]=y}if(e instanceof Di){const m=e.getScopes().filter(y=>y!=="");m.length>0&&(o.scopes=m.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const l=await n._getAppCheckToken(),h=l?`#${cb}=${encodeURIComponent(l)}`:"";return`${lb(n)}?${Ms(c).slice(1)}${h}`}function lb({config:n}){return n.emulator?Rc(n,ab):`https://${n.authDomain}/${ob}`}/**
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
 */const _a="webStorageSupport";class ub{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$f,this._completeRedirectFn=Hf,this._overrideRedirectResult=$_}async _openPopup(e,t,i,s){var o;Ft((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await gd(e,t,i,Ha(),s);return sb(e,r,Dc())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await gd(e,t,i,Ha(),s);return p_(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Ft(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await X_(e),i=new M_(e);return t.register("authEvent",s=>(q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(_a,{type:_a},s=>{var o;const r=(o=s==null?void 0:s[0])==null?void 0:o[_a];r!==void 0&&t(!!r),st(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=B_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return bf()||mf()||Pc()}}const db=ub;var yd="@firebase/auth",vd="1.12.1";/**
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
 */class hb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function fb(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pb(n){qn(new wn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=i.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tf(n)},h=new xw(i,s,r,l);return Fw(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),qn(new wn("auth-internal",e=>{const t=$t(e.getProvider("auth").getImmediate());return(i=>new hb(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),It(yd,vd,fb(n)),It(yd,vd,"esm2020")}/**
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
 */const mb=300,gb=Xh("authIdTokenMaxAge")||mb;let wd=null;const yb=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>gb)return;const s=t==null?void 0:t.token;wd!==s&&(wd=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function vb(n=Sc()){const e=vo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Uw(n,{popupRedirectResolver:db,persistence:[I_,d_,$f]}),i=Xh("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=yb(r.toString());o_(t,o,()=>o(t.currentUser)),r_(t,c=>o(c))}}const s=Qh("auth");return s&&Bw(t,`http://${s}`),t}function wb(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Pw({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=ut("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",wb().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pb("Browser");const _b={apiKey:"AIzaSyAFURz8fEGSTameAW5YvBKWpr2LXv9Ang0",authDomain:"family-pantry-c65d6.firebaseapp.com",projectId:"family-pantry-c65d6",storageBucket:"family-pantry-c65d6.firebasestorage.app",messagingSenderId:"710701847077",appId:"1:710701847077:web:407a8937330ad2ebcfe5cc"},Oc=nf(_b),rt=vb(Oc);window._firebaseAuth=rt;const _d=new Nt,to=new ys("apple.com");to.addScope("email");to.addScope("name");let Vc=null;const $r=[];function bb(n){return $r.push(n),n(Vc),()=>{const e=$r.indexOf(n);e!==-1&&$r.splice(e,1)}}function Tb(n){Vc=n,$r.forEach(e=>e(n))}a_(rt,n=>{Tb(n||null)});D_(rt).catch(n=>{n.code!=="auth/redirect-cancelled-by-user"&&console.error("Redirect sign-in error:",n)});async function Ib(){try{return(await Vf(rt,_d)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await Bf(rt,_d),null;throw n}}async function Eb(){try{return(await Vf(rt,to)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await Bf(rt,to),null;throw n}}async function kb(n,e){return(await n_(rt,n,e)).user}async function Sb(n,e,t){const i=await t_(rt,n,e);return t&&await s_(i.user,{displayName:t}),i.user}async function Cb(){await c_(rt)}async function zf(){return rt.currentUser?rt.currentUser.getIdToken():null}function Z(){return Vc}async function Io(n,e,t){const i={"Content-Type":"application/json"},s=await zf();s&&(i.Authorization=`Bearer ${s}`);const r=await fetch("/api/db",{method:"POST",headers:i,body:JSON.stringify({op:n,path:e,data:t})});if(!(r.headers.get("content-type")||"").includes("application/json"))throw new Error(`/api/db non-JSON response (status ${r.status}) for ${n} ${e}`);return r.json()}async function ae(n){try{return(await Io("list",n)).docs||[]}catch(e){return console.warn("dbList:",n,e.message),[]}}async function W(n,e){return Io("set",n,e)}async function at(n){return Io("delete",n)}async function ne(n){try{return(await Io("get",n)).doc||null}catch{return null}}function qf(){return Math.random().toString(36).slice(2,8).toUpperCase()}async function no(n){var t;const e={name:n.displayName||((t=n.email)==null?void 0:t.split("@")[0])||"User",email:n.email||"",createdAt:new Date().toISOString(),householdIds:[]};return await W(`users/${n.uid}`,e),e}async function Uc(n,e){var o;const t=Z(),i=n,s=qf(),r={name:e||"My Kitchen",ownerUid:n,members:[{uid:n,name:(t==null?void 0:t.displayName)||((o=t==null?void 0:t.email)==null?void 0:o.split("@")[0])||"Owner",role:"owner"}],memberUids:[n],inviteCode:s,createdAt:new Date().toISOString()};try{await W(`households/${i}`,r),await W(`household_codes/${s}`,{householdId:i})}catch(c){console.error(`[createHousehold] FAILED to write households/${i}:`,c)}return{hid:i,...r}}async function Wf(n){const e=await ne(`household_codes/${n.toUpperCase()}`);return(e==null?void 0:e.householdId)||null}async function Fc(n,e){var c;const t=await Wf(n);if(!t)return null;const i=await ne(`households/${t}`);if(!i)return null;const s=i.members||[],r=i.memberUids||s.map(l=>l.uid);s.find(l=>l.uid===e.uid)||(s.push({uid:e.uid,name:e.displayName||((c=e.email)==null?void 0:c.split("@")[0])||"Member",role:"member"}),r.includes(e.uid)||r.push(e.uid),await W(`households/${t}`,{...i,members:s,memberUids:r,id:void 0}));const o=await ne(`users/${e.uid}`);if(o){const l=o.householdIds||[];l.includes(t)||(l.push(t),await W(`users/${e.uid}`,{...o,householdIds:l,id:void 0}))}return t}async function Gf(n){const e=await ne(`households/${n}`);if(!e)return null;if(e.inviteCode)try{await at(`household_codes/${e.inviteCode}`)}catch{}const t=qf();return await W(`household_codes/${t}`,{householdId:n}),await W(`households/${n}`,{...e,inviteCode:t,id:void 0}),t}async function Kf(n,e){const t=await ne(`households/${n}`);if(!t)return;const i=(t.members||[]).filter(r=>r.uid!==e),s=(t.memberUids||[]).filter(r=>r!==e);await W(`households/${n}`,{...t,members:i,memberUids:s,id:void 0});try{const r=await ne(`users/${e}`);if(r){const o=(r.householdIds||[]).filter(c=>c!==n);await W(`users/${e}`,{...r,householdIds:o,id:void 0})}}catch{}}async function bd(n,e){const t=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog"];for(const i of t){const s=await ae(`households/${n}/${i}`);for(const r of s){const o=r.id,c={...r};delete c.id,await W(`households/${e}/${i}/${o}`,c)}}}async function Qf(n){var l,h;const e=n.uid;console.log(`[resolveHousehold] ENTER — uid=${e}`);const t=await ne(`users/${e}`);if(console.log("[resolveHousehold] userDoc=",t),t){const m=(l=t.householdIds)!=null&&l.length?t.householdIds[0]:e;console.log(`[resolveHousehold] RETURNING USER — hid=${m}, householdIds=`,t.householdIds);const y=localStorage.getItem("ks-h");return console.log(`[resolveHousehold] RETURNING USER — ks-h="${y}", hid="${m}", uid="${e}"`),console.log(`[resolveHousehold] RETURNING USER — migration condition: oldHid=${!!y}, oldHid!==hid=${y!==m}, oldHid!==uid=${y!==e}`),y&&y!==m&&y!==e?(console.log(`[resolveHousehold] LATE MIGRATION TRIGGERED: ${y} → ${m}`),await bd(y,m),localStorage.removeItem("ks-h"),console.log("[resolveHousehold] Late migration DONE, ks-h removed")):console.log("[resolveHousehold] RETURNING USER — NO migration needed"),m}console.log("[resolveHousehold] FIRST-TIME LOGIN — no userDoc found");const i=localStorage.getItem("ks-h"),s=i&&i!==e;console.log(`[resolveHousehold] FIRST-TIME — ks-h="${i}", hasOldData=${s}`);const r=((h=d.cfg)==null?void 0:h.name)||"My Kitchen";console.log(`[resolveHousehold] FIRST-TIME — creating household, cfgName="${r}"`),await Uc(e,s?r:"My Kitchen"),s&&(console.log(`[resolveHousehold] FIRST-TIME MIGRATION: ${i} → ${e}`),await bd(i,e),console.log("[resolveHousehold] FIRST-TIME MIGRATION DONE"));const o=await no(n);o.householdIds=[e],await W(`users/${e}`,o),console.log("[resolveHousehold] User profile created & saved"),localStorage.removeItem("ks-h");const c=ce("ks-hhs");if(c){const m=c.filter(y=>y!==i);m.includes(e)||m.push(e),localStorage.setItem("ks-hhs",JSON.stringify(m))}return console.log(`[resolveHousehold] EXIT — returning uid=${e}`),e}async function _n(n,e){e?(d.mp[n]=e,await W(`households/${d.hid}/mealplan/${n}`,{date:n,meal:e})):(delete d.mp[n],await at(`households/${d.hid}/mealplan/${n}`))}async function Fs(){await W(`households/${d.hid}/settings/config`,d.cfg)}async function Bc(n,e){const t={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:e||Wa(),loggedAt:new Date().toISOString()};d.cookLog.unshift(t),d.cookLog.length>200&&(d.cookLog=d.cookLog.slice(0,200)),await W(`households/${d.hid}/cooklog/${t.id}`,t)}async function Jf(n){if(d.wasteLog.find(t=>t.name===n&&t.date===Wa()))return;const e={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:Wa(),loggedAt:new Date().toISOString()};d.wasteLog.unshift(e),d.wasteLog.length>100&&(d.wasteLog=d.wasteLog.slice(0,100)),await W(`households/${d.hid}/wastelog/${e.id}`,e)}async function Yf(){try{try{const r=await ne(`households/${d.hid}`);r&&r.inviteCode&&(await ne(`household_codes/${r.inviteCode}`)||(await W(`household_codes/${r.inviteCode}`,{householdId:d.hid}),console.log(`[backfill] Created household_codes/${r.inviteCode} for household ${d.hid}`)))}catch(r){console.warn("[backfill] household_codes backfill skipped:",r.message)}const e=(await ae(`households/${d.hid}/settings`)).find(r=>r.id==="config");if(e)d.cfg={...qr,...e};else{const r=ce("ks-c");d.cfg={...qr,...r||{}},await Fs(),r&&localStorage.removeItem("ks-c")}const t=await ae(`households/${d.hid}/mealplan`);if(d.mp={},t.forEach(r=>{r.date&&r.meal&&(d.mp[r.date]=r.meal)}),!t.length){const r=ce("ks-m");if(r&&Object.keys(r).length){d.mp=r;for(const[o,c]of Object.entries(r))await _n(o,c);localStorage.removeItem("ks-m")}}const i=await ae(`households/${d.hid}/cooklog`);if(i.length)d.cookLog=i.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=ce("ks-cooklog");if(r&&r.length){d.cookLog=r.map((o,c)=>({id:o.id||(Date.now()-c).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of d.cookLog)await W(`households/${d.hid}/cooklog/${o.id}`,o);localStorage.removeItem("ks-cooklog")}}const s=await ae(`households/${d.hid}/wastelog`);if(s.length)d.wasteLog=s.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=ce("ks-waste");if(r&&r.length){d.wasteLog=r.map((o,c)=>({id:o.id||(Date.now()-c).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of d.wasteLog)await W(`households/${d.hid}/wastelog/${o.id}`,o);localStorage.removeItem("ks-waste")}}}catch(n){console.error("loadFirestoreData error:",n)}}let vs=0;function Yn(){vs++,vs===1&&window._pollIntervalId&&(clearInterval(window._pollIntervalId),window._pollIntervalId=null)}function Xn(){vs--,vs<=0&&(vs=0,window._pollFn&&!window._pollIntervalId&&(window._pollFn(),window._pollIntervalId=setInterval(window._pollFn,3e4)))}const j={renderAll:null,renderSum:null,renderRecs:null,renderShop:null};function he(n){var i;const e=document.getElementById("sdot"),t=document.getElementById("slb");e&&(e.className="sdot "+n),t&&(t.textContent=n==="synced"?"🏠 "+(((i=d.cfg)==null?void 0:i.name)||d.hid):n==="syncing"?"Syncing…":"Sync error")}async function re(n){var e,t;he("syncing"),Yn();try{const i=!d.inv.find(s=>s.id===n.id);d.inv=[...d.inv.filter(s=>s.id!==n.id),n],(e=j.renderAll)==null||e.call(j),(t=j.renderSum)==null||t.call(j),await W(`households/${d.hid}/inventory/${n.id}`,n),i&&Je("added",Ae(n.name)+" to Supplies"),he("synced")}catch(i){console.error(i),he("error")}finally{Xn()}}async function Bs(n){var e,t;he("syncing"),Yn();try{const i=d.inv.find(s=>s.id===n);d.inv=d.inv.filter(s=>s.id!==n),(e=j.renderAll)==null||e.call(j),(t=j.renderSum)==null||t.call(j),await at(`households/${d.hid}/inventory/${n}`),i&&Je("removed",Ae(i.name)+" from Supplies"),he("synced")}catch(i){console.error(i),he("error")}finally{Xn()}}async function Qe(n){var e,t;Yn();try{const i=!d.recs.find(r=>r.id===n.id);d.recs=[...d.recs.filter(r=>r.id!==n.id),n],(e=j.renderRecs)==null||e.call(j),(t=j.renderSum)==null||t.call(j),await W(`households/${d.hid}/recipes/${n.id}`,n);const s=Ae(n.name||n.title||"a recipe");i?Je("added",s+" to Recipes"):Je("updated",s)}catch(i){console.error(i)}finally{Xn()}}async function Xf(n){var e,t;Yn();try{const i=d.recs.find(s=>s.id===n);d.recs=d.recs.filter(s=>s.id!==n),(e=j.renderRecs)==null||e.call(j),(t=j.renderSum)==null||t.call(j),await at(`households/${d.hid}/recipes/${n}`),i&&Je("deleted",Ae(i.name||i.title||"a recipe")+" from Recipes")}catch(i){console.error(i)}finally{Xn()}}async function ye(n){var e,t;Yn();try{const i=!d.shop.find(s=>s.id===n.id);d.shop=[...d.shop.filter(s=>s.id!==n.id),n],(e=j.renderShop)==null||e.call(j),(t=j.renderSum)==null||t.call(j),await W(`households/${d.hid}/shopping/${n.id}`,n),i&&Je("added",Ae(n.name)+" to Shopping List")}catch(i){console.error(i)}finally{Xn()}}async function Ni(n){var e,t;Yn();try{const i=d.shop.find(s=>s.id===n);d.shop=d.shop.filter(s=>s.id!==n),(e=j.renderShop)==null||e.call(j),(t=j.renderSum)==null||t.call(j),await at(`households/${d.hid}/shopping/${n}`),i&&Je("removed",Ae(i.name)+" from Shopping List")}catch(i){console.error(i)}finally{Xn()}}async function Eo(n,e){var s;const t="pub-"+Date.now()+"-"+Math.random().toString(36).slice(2,8),i={title:n.name,ingredients:n.description||"",steps:n.steps||"",tags:n.tags||[],cuisine:n.cuisine||"",imageUrl:n.imageUrl||null,prepTime:n.prepTime||"",cookTime:n.cookTime||"",totalTime:n.totalTime||"",servings:n.servings||"",difficulty:n.difficulty||"",summary:n.summary||"",ingredientsRaw:n.ingredientsRaw||[],stepsRaw:n.stepsRaw||[],authorName:e||"Anonymous",authorUsername:d.username||"",authorUid:((s=Z())==null?void 0:s.uid)||"",householdId:d.hid||"",createdAt:new Date().toISOString(),likes:0,commentCount:0,ratingSum:0,ratingCount:0,avgRating:0};return await W(`public_recipes/${t}`,i),{id:t,...i}}async function Hc(n){var t;const e=(t=Z())==null?void 0:t.uid;if(!e)return null;if(n.publicId)try{const i=await qc(n.publicId);if(i)return i}catch{}if(d.comRecs&&d.comRecs.length>0){const i=(n.name||"").trim().toLowerCase(),s=d.comRecs.find(r=>r.authorUid===e&&(r.title||"").trim().toLowerCase()===i);if(s)return s}return null}async function jc(n){await at(`public_recipes/${n}`)}async function zc(){return ae("public_recipes")}async function qc(n){return ne(`public_recipes/${n}`)}async function Zf(n,e){var o;const t=(o=Z())==null?void 0:o.uid;if(!t)return;const i=`public_recipes/${n}/likes/${t}`;e?await at(i):await W(i,{likedAt:new Date().toISOString()});const s=await ae(`public_recipes/${n}/likes`),r=await ne(`public_recipes/${n}`);r&&await W(`public_recipes/${n}`,{...r,likes:s.length,id:void 0})}async function ep(n,e,t){var c;const i=(c=Z())==null?void 0:c.uid;if(!i||!e.trim())return;const s=e.trim().slice(0,500),r="cmt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),o={text:s,authorName:t,authorUsername:d.username||"",authorUid:i,createdAt:new Date().toISOString()};await W(`public_recipes/${n}/comments/${r}`,o);try{const l=await ne(`public_recipes/${n}`);if(l){const h=await ae(`public_recipes/${n}/comments`);await W(`public_recipes/${n}`,{...l,commentCount:h.length,id:void 0}),l.authorUid&&l.authorUid!==i&&await dp(l.authorUid,{type:"comment",recipeId:n,recipeName:l.title||"a recipe",commenterUsername:d.username||t||"Someone"})}}catch{}return{id:r,...o}}async function tp(n){return ae(`public_recipes/${n}/comments`)}async function np(n){var i;const e=(i=Z())==null?void 0:i.uid;return e?!!await ne(`public_recipes/${n}/likes/${e}`):!1}async function ip(n){const t={id:"rec-"+Date.now(),name:n.title,description:n.ingredients||"",notes:n.steps||"",tags:n.tags||[],cuisine:n.cuisine||"",imageUrl:n.imageUrl||null,prepTime:n.prepTime||"",cookTime:n.cookTime||"",totalTime:n.totalTime||"",servings:n.servings||"",ingredientsRaw:n.ingredientsRaw||[],stepsRaw:n.stepsRaw||[],difficulty:n.difficulty||"",summary:n.summary||"",rating:0,favorited:!1,source:"Community",sourceUrl:null,cookCount:0,savedAt:new Date().toLocaleDateString()};return await Qe(t),t}async function Wc(n){return n?!await ne(`usernames/${n.toLowerCase()}`):!1}async function Gc(n,e){const t=await ne(`users/${n}`),i=t==null?void 0:t.username;if(i&&i.toLowerCase()!==e.toLowerCase())try{await at(`usernames/${i.toLowerCase()}`)}catch{}await W(`usernames/${e.toLowerCase()}`,{uid:n}),t&&await W(`users/${n}`,{...t,username:e,id:void 0}),d.username=e}async function sp(n){try{const e=await ne(`users/${n}`);return(e==null?void 0:e.username)||null}catch{return null}}async function rp(n){var t;const e=(t=Z())==null?void 0:t.uid;return e?ne(`public_recipes/${n}/reviews/${e}`):null}async function Je(n,e){if(!d.hid||!e)return;const t=localStorage.getItem("ks-who")||"Someone",i="act-"+Date.now().toString(36)+Math.random().toString(36).slice(2),s={memberName:t,action:n,itemName:e,timestamp:new Date().toISOString()};try{await W(`households/${d.hid}/activity/${i}`,s),Ab()}catch{}}async function Ab(){try{const n=await ae(`households/${d.hid}/activity`),e=Date.now()-10080*60*1e3;for(const t of n)t.timestamp&&new Date(t.timestamp).getTime()<e&&await at(`households/${d.hid}/activity/${t.id}`)}catch{}}function Wa(){return new Date().toISOString().split("T")[0]}async function op(n,e){var y;const t=(y=Z())==null?void 0:y.uid;if(!t||!e||e<1||e>5)return null;const i=await ne(`public_recipes/${n}`);if(i&&i.authorUid===t)return null;const s=new Date().toISOString(),r=await ne(`public_recipes/${n}/ratings/${t}`),o={rating:e,createdAt:(r==null?void 0:r.createdAt)||s,updatedAt:s};await W(`public_recipes/${n}/ratings/${t}`,o);const c=await ae(`public_recipes/${n}/ratings`),l=c.reduce((w,E)=>w+(E.rating||0),0),h=c.length,m=h>0?Math.round(l/h*10)/10:0;return i&&await W(`public_recipes/${n}`,{...i,ratingSum:l,ratingCount:h,avgRating:m,id:void 0}),{...o,ratingSum:l,ratingCount:h,avgRating:m}}async function ap(n){var t;const e=(t=Z())==null?void 0:t.uid;return e?ne(`public_recipes/${n}/ratings/${e}`):null}async function cp(n){var c;const e=(c=Z())==null?void 0:c.uid;if(!e)return null;await at(`public_recipes/${n}/ratings/${e}`);const t=await ae(`public_recipes/${n}/ratings`),i=t.reduce((l,h)=>l+(h.rating||0),0),s=t.length,r=s>0?Math.round(i/s*10)/10:0,o=await ne(`public_recipes/${n}`);return o&&await W(`public_recipes/${n}`,{...o,ratingSum:i,ratingCount:s,avgRating:r,id:void 0}),{ratingSum:i,ratingCount:s,avgRating:r}}async function lp(n,e){await at(`public_recipes/${n}/comments/${e}`);try{const t=await ne(`public_recipes/${n}`);if(t){const i=await ae(`public_recipes/${n}/comments`);await W(`public_recipes/${n}`,{...t,commentCount:i.length,id:void 0})}}catch{}}async function up(n,e,t,i){var h;const s=(h=Z())==null?void 0:h.uid;if(!s)return null;if((await ae("reports")).find(m=>m.reportedBy===s&&m.targetId===e&&m.type===n))return"duplicate";const c="rpt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),l={type:n,targetId:e,recipeId:i||e,reportedBy:s,reason:t,createdAt:new Date().toISOString(),status:"pending"};return await W(`reports/${c}`,l),{id:c,...l}}async function dp(n,e){if(!n)return;const t="ntf-"+Date.now().toString(36)+Math.random().toString(36).slice(2),i={...e,createdAt:new Date().toISOString(),read:!1};await W(`users/${n}/notifications/${t}`,i)}async function hp(){var t;const n=(t=Z())==null?void 0:t.uid;return n?(await ae(`users/${n}/notifications`)).sort((i,s)=>new Date(s.createdAt||0)-new Date(i.createdAt||0)):[]}async function fp(){var t;const n=(t=Z())==null?void 0:t.uid;if(!n)return;const e=await ae(`users/${n}/notifications`);for(const i of e)i.read||await W(`users/${n}/notifications/${i.id}`,{...i,read:!0,id:void 0})}async function pp(){var t;const n=(t=Z())==null?void 0:t.uid;return n?(await ae(`users/${n}/notifications`)).filter(i=>!i.read).length:0}const Rb=Object.freeze(Object.defineProperty({__proto__:null,addComment:ep,addCookLogEntry:Bc,addNotification:dp,addWasteEntry:Jf,checkMyLike:np,checkMyReview:rp,checkRecipeAlreadyPublished:Hc,checkUsernameAvailable:Wc,createHousehold:Uc,createUserProfile:no,dbDelete:at,dbGet:ne,dbList:ae,dbSet:W,deleteComment:lp,deleteRating:cp,dlShopItem:Ni,dli:Bs,dlr:Xf,getMyRating:ap,getPublicRecipe:qc,getUnreadNotifCount:pp,joinHouseholdByCode:Fc,listComments:tp,listNotifications:hp,listPublicRecipes:zc,loadFirestoreData:Yf,loadUsername:sp,logActivity:Je,lookupHouseholdByCode:Wf,markAllNotificationsRead:fp,pausePoll:Yn,publishRecipe:Eo,regenerateInviteCode:Gf,removeMember:Kf,renderCallbacks:j,resolveHousehold:Qf,resumePoll:Xn,saveCfg:Fs,saveMp:_n,saveRecipeToKitchen:ip,setUsername:Gc,ss:he,submitRating:op,submitReport:up,svShopItem:ye,svi:re,svr:Qe,toggleLike:Zf,unpublishRecipe:jc},Symbol.toStringTag,{value:"Module"}));var Td=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pn,mp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function _(){}_.prototype=v.prototype,b.F=v.prototype,b.prototype=new _,b.prototype.constructor=b,b.D=function(k,I,S){for(var T=Array(arguments.length-2),De=2;De<arguments.length;De++)T[De-2]=arguments[De];return v.prototype[I].apply(k,T)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,v,_){_||(_=0);const k=Array(16);if(typeof v=="string")for(var I=0;I<16;++I)k[I]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(I=0;I<16;++I)k[I]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=b.g[0],_=b.g[1],I=b.g[2];let S=b.g[3],T;T=v+(S^_&(I^S))+k[0]+3614090360&4294967295,v=_+(T<<7&4294967295|T>>>25),T=S+(I^v&(_^I))+k[1]+3905402710&4294967295,S=v+(T<<12&4294967295|T>>>20),T=I+(_^S&(v^_))+k[2]+606105819&4294967295,I=S+(T<<17&4294967295|T>>>15),T=_+(v^I&(S^v))+k[3]+3250441966&4294967295,_=I+(T<<22&4294967295|T>>>10),T=v+(S^_&(I^S))+k[4]+4118548399&4294967295,v=_+(T<<7&4294967295|T>>>25),T=S+(I^v&(_^I))+k[5]+1200080426&4294967295,S=v+(T<<12&4294967295|T>>>20),T=I+(_^S&(v^_))+k[6]+2821735955&4294967295,I=S+(T<<17&4294967295|T>>>15),T=_+(v^I&(S^v))+k[7]+4249261313&4294967295,_=I+(T<<22&4294967295|T>>>10),T=v+(S^_&(I^S))+k[8]+1770035416&4294967295,v=_+(T<<7&4294967295|T>>>25),T=S+(I^v&(_^I))+k[9]+2336552879&4294967295,S=v+(T<<12&4294967295|T>>>20),T=I+(_^S&(v^_))+k[10]+4294925233&4294967295,I=S+(T<<17&4294967295|T>>>15),T=_+(v^I&(S^v))+k[11]+2304563134&4294967295,_=I+(T<<22&4294967295|T>>>10),T=v+(S^_&(I^S))+k[12]+1804603682&4294967295,v=_+(T<<7&4294967295|T>>>25),T=S+(I^v&(_^I))+k[13]+4254626195&4294967295,S=v+(T<<12&4294967295|T>>>20),T=I+(_^S&(v^_))+k[14]+2792965006&4294967295,I=S+(T<<17&4294967295|T>>>15),T=_+(v^I&(S^v))+k[15]+1236535329&4294967295,_=I+(T<<22&4294967295|T>>>10),T=v+(I^S&(_^I))+k[1]+4129170786&4294967295,v=_+(T<<5&4294967295|T>>>27),T=S+(_^I&(v^_))+k[6]+3225465664&4294967295,S=v+(T<<9&4294967295|T>>>23),T=I+(v^_&(S^v))+k[11]+643717713&4294967295,I=S+(T<<14&4294967295|T>>>18),T=_+(S^v&(I^S))+k[0]+3921069994&4294967295,_=I+(T<<20&4294967295|T>>>12),T=v+(I^S&(_^I))+k[5]+3593408605&4294967295,v=_+(T<<5&4294967295|T>>>27),T=S+(_^I&(v^_))+k[10]+38016083&4294967295,S=v+(T<<9&4294967295|T>>>23),T=I+(v^_&(S^v))+k[15]+3634488961&4294967295,I=S+(T<<14&4294967295|T>>>18),T=_+(S^v&(I^S))+k[4]+3889429448&4294967295,_=I+(T<<20&4294967295|T>>>12),T=v+(I^S&(_^I))+k[9]+568446438&4294967295,v=_+(T<<5&4294967295|T>>>27),T=S+(_^I&(v^_))+k[14]+3275163606&4294967295,S=v+(T<<9&4294967295|T>>>23),T=I+(v^_&(S^v))+k[3]+4107603335&4294967295,I=S+(T<<14&4294967295|T>>>18),T=_+(S^v&(I^S))+k[8]+1163531501&4294967295,_=I+(T<<20&4294967295|T>>>12),T=v+(I^S&(_^I))+k[13]+2850285829&4294967295,v=_+(T<<5&4294967295|T>>>27),T=S+(_^I&(v^_))+k[2]+4243563512&4294967295,S=v+(T<<9&4294967295|T>>>23),T=I+(v^_&(S^v))+k[7]+1735328473&4294967295,I=S+(T<<14&4294967295|T>>>18),T=_+(S^v&(I^S))+k[12]+2368359562&4294967295,_=I+(T<<20&4294967295|T>>>12),T=v+(_^I^S)+k[5]+4294588738&4294967295,v=_+(T<<4&4294967295|T>>>28),T=S+(v^_^I)+k[8]+2272392833&4294967295,S=v+(T<<11&4294967295|T>>>21),T=I+(S^v^_)+k[11]+1839030562&4294967295,I=S+(T<<16&4294967295|T>>>16),T=_+(I^S^v)+k[14]+4259657740&4294967295,_=I+(T<<23&4294967295|T>>>9),T=v+(_^I^S)+k[1]+2763975236&4294967295,v=_+(T<<4&4294967295|T>>>28),T=S+(v^_^I)+k[4]+1272893353&4294967295,S=v+(T<<11&4294967295|T>>>21),T=I+(S^v^_)+k[7]+4139469664&4294967295,I=S+(T<<16&4294967295|T>>>16),T=_+(I^S^v)+k[10]+3200236656&4294967295,_=I+(T<<23&4294967295|T>>>9),T=v+(_^I^S)+k[13]+681279174&4294967295,v=_+(T<<4&4294967295|T>>>28),T=S+(v^_^I)+k[0]+3936430074&4294967295,S=v+(T<<11&4294967295|T>>>21),T=I+(S^v^_)+k[3]+3572445317&4294967295,I=S+(T<<16&4294967295|T>>>16),T=_+(I^S^v)+k[6]+76029189&4294967295,_=I+(T<<23&4294967295|T>>>9),T=v+(_^I^S)+k[9]+3654602809&4294967295,v=_+(T<<4&4294967295|T>>>28),T=S+(v^_^I)+k[12]+3873151461&4294967295,S=v+(T<<11&4294967295|T>>>21),T=I+(S^v^_)+k[15]+530742520&4294967295,I=S+(T<<16&4294967295|T>>>16),T=_+(I^S^v)+k[2]+3299628645&4294967295,_=I+(T<<23&4294967295|T>>>9),T=v+(I^(_|~S))+k[0]+4096336452&4294967295,v=_+(T<<6&4294967295|T>>>26),T=S+(_^(v|~I))+k[7]+1126891415&4294967295,S=v+(T<<10&4294967295|T>>>22),T=I+(v^(S|~_))+k[14]+2878612391&4294967295,I=S+(T<<15&4294967295|T>>>17),T=_+(S^(I|~v))+k[5]+4237533241&4294967295,_=I+(T<<21&4294967295|T>>>11),T=v+(I^(_|~S))+k[12]+1700485571&4294967295,v=_+(T<<6&4294967295|T>>>26),T=S+(_^(v|~I))+k[3]+2399980690&4294967295,S=v+(T<<10&4294967295|T>>>22),T=I+(v^(S|~_))+k[10]+4293915773&4294967295,I=S+(T<<15&4294967295|T>>>17),T=_+(S^(I|~v))+k[1]+2240044497&4294967295,_=I+(T<<21&4294967295|T>>>11),T=v+(I^(_|~S))+k[8]+1873313359&4294967295,v=_+(T<<6&4294967295|T>>>26),T=S+(_^(v|~I))+k[15]+4264355552&4294967295,S=v+(T<<10&4294967295|T>>>22),T=I+(v^(S|~_))+k[6]+2734768916&4294967295,I=S+(T<<15&4294967295|T>>>17),T=_+(S^(I|~v))+k[13]+1309151649&4294967295,_=I+(T<<21&4294967295|T>>>11),T=v+(I^(_|~S))+k[4]+4149444226&4294967295,v=_+(T<<6&4294967295|T>>>26),T=S+(_^(v|~I))+k[11]+3174756917&4294967295,S=v+(T<<10&4294967295|T>>>22),T=I+(v^(S|~_))+k[2]+718787259&4294967295,I=S+(T<<15&4294967295|T>>>17),T=_+(S^(I|~v))+k[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(I+(T<<21&4294967295|T>>>11))&4294967295,b.g[2]=b.g[2]+I&4294967295,b.g[3]=b.g[3]+S&4294967295}i.prototype.v=function(b,v){v===void 0&&(v=b.length);const _=v-this.blockSize,k=this.C;let I=this.h,S=0;for(;S<v;){if(I==0)for(;S<=_;)s(this,b,S),S+=this.blockSize;if(typeof b=="string"){for(;S<v;)if(k[I++]=b.charCodeAt(S++),I==this.blockSize){s(this,k),I=0;break}}else for(;S<v;)if(k[I++]=b[S++],I==this.blockSize){s(this,k),I=0;break}}this.h=I,this.o+=v},i.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;v=this.o*8;for(var _=b.length-8;_<b.length;++_)b[_]=v&255,v/=256;for(this.v(b),b=Array(16),v=0,_=0;_<4;++_)for(let k=0;k<32;k+=8)b[v++]=this.g[_]>>>k&255;return b};function r(b,v){var _=c;return Object.prototype.hasOwnProperty.call(_,b)?_[b]:_[b]=v(b)}function o(b,v){this.h=v;const _=[];let k=!0;for(let I=b.length-1;I>=0;I--){const S=b[I]|0;k&&S==v||(_[I]=S,k=!1)}this.g=_}var c={};function l(b){return-128<=b&&b<128?r(b,function(v){return new o([v|0],v<0?-1:0)}):new o([b|0],b<0?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return y;if(b<0)return $(h(-b));const v=[];let _=1;for(let k=0;b>=_;k++)v[k]=b/_|0,_*=4294967296;return new o(v,0)}function m(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return $(m(b.substring(1),v));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=h(Math.pow(v,8));let k=y;for(let S=0;S<b.length;S+=8){var I=Math.min(8,b.length-S);const T=parseInt(b.substring(S,S+I),v);I<8?(I=h(Math.pow(v,I)),k=k.j(I).add(h(T))):(k=k.j(_),k=k.add(h(T)))}return k}var y=l(0),w=l(1),E=l(16777216);n=o.prototype,n.m=function(){if(P(this))return-$(this).m();let b=0,v=1;for(let _=0;_<this.g.length;_++){const k=this.i(_);b+=(k>=0?k:4294967296+k)*v,v*=4294967296}return b},n.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(A(this))return"0";if(P(this))return"-"+$(this).toString(b);const v=h(Math.pow(b,6));var _=this;let k="";for(;;){const I=D(_,v).g;_=U(_,I.j(v));let S=((_.g.length>0?_.g[0]:_.h)>>>0).toString(b);if(_=I,A(_))return S+k;for(;S.length<6;)S="0"+S;k=S+k}},n.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function A(b){if(b.h!=0)return!1;for(let v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function P(b){return b.h==-1}n.l=function(b){return b=U(this,b),P(b)?-1:A(b)?0:1};function $(b){const v=b.g.length,_=[];for(let k=0;k<v;k++)_[k]=~b.g[k];return new o(_,~b.h).add(w)}n.abs=function(){return P(this)?$(this):this},n.add=function(b){const v=Math.max(this.g.length,b.g.length),_=[];let k=0;for(let I=0;I<=v;I++){let S=k+(this.i(I)&65535)+(b.i(I)&65535),T=(S>>>16)+(this.i(I)>>>16)+(b.i(I)>>>16);k=T>>>16,S&=65535,T&=65535,_[I]=T<<16|S}return new o(_,_[_.length-1]&-2147483648?-1:0)};function U(b,v){return b.add($(v))}n.j=function(b){if(A(this)||A(b))return y;if(P(this))return P(b)?$(this).j($(b)):$($(this).j(b));if(P(b))return $(this.j($(b)));if(this.l(E)<0&&b.l(E)<0)return h(this.m()*b.m());const v=this.g.length+b.g.length,_=[];for(var k=0;k<2*v;k++)_[k]=0;for(k=0;k<this.g.length;k++)for(let I=0;I<b.g.length;I++){const S=this.i(k)>>>16,T=this.i(k)&65535,De=b.i(I)>>>16,oe=b.i(I)&65535;_[2*k+2*I]+=T*oe,N(_,2*k+2*I),_[2*k+2*I+1]+=S*oe,N(_,2*k+2*I+1),_[2*k+2*I+1]+=T*De,N(_,2*k+2*I+1),_[2*k+2*I+2]+=S*De,N(_,2*k+2*I+2)}for(b=0;b<v;b++)_[b]=_[2*b+1]<<16|_[2*b];for(b=v;b<2*v;b++)_[b]=0;return new o(_,0)};function N(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function M(b,v){this.g=b,this.h=v}function D(b,v){if(A(v))throw Error("division by zero");if(A(b))return new M(y,y);if(P(b))return v=D($(b),v),new M($(v.g),$(v.h));if(P(v))return v=D(b,$(v)),new M($(v.g),v.h);if(b.g.length>30){if(P(b)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var _=w,k=v;k.l(b)<=0;)_=F(_),k=F(k);var I=H(_,1),S=H(k,1);for(k=H(k,2),_=H(_,2);!A(k);){var T=S.add(k);T.l(b)<=0&&(I=I.add(_),S=T),k=H(k,1),_=H(_,1)}return v=U(b,I.j(v)),new M(I,v)}for(I=y;b.l(v)>=0;){for(_=Math.max(1,Math.floor(b.m()/v.m())),k=Math.ceil(Math.log(_)/Math.LN2),k=k<=48?1:Math.pow(2,k-48),S=h(_),T=S.j(v);P(T)||T.l(b)>0;)_-=k,S=h(_),T=S.j(v);A(S)&&(S=w),I=I.add(S),b=U(b,T)}return new M(I,b)}n.B=function(b){return D(this,b).h},n.and=function(b){const v=Math.max(this.g.length,b.g.length),_=[];for(let k=0;k<v;k++)_[k]=this.i(k)&b.i(k);return new o(_,this.h&b.h)},n.or=function(b){const v=Math.max(this.g.length,b.g.length),_=[];for(let k=0;k<v;k++)_[k]=this.i(k)|b.i(k);return new o(_,this.h|b.h)},n.xor=function(b){const v=Math.max(this.g.length,b.g.length),_=[];for(let k=0;k<v;k++)_[k]=this.i(k)^b.i(k);return new o(_,this.h^b.h)};function F(b){const v=b.g.length+1,_=[];for(let k=0;k<v;k++)_[k]=b.i(k)<<1|b.i(k-1)>>>31;return new o(_,b.h)}function H(b,v){const _=v>>5;v%=32;const k=b.g.length-_,I=[];for(let S=0;S<k;S++)I[S]=v>0?b.i(S+_)>>>v|b.i(S+_+1)<<32-v:b.i(S+_);return new o(I,b.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,mp=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=m,pn=o}).apply(typeof Td<"u"?Td:typeof self<"u"?self:typeof window<"u"?window:{});var mr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gp,us,yp,Lr,Ga,vp,wp,_p;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof mr=="object"&&mr];for(var u=0;u<a.length;++u){var p=a[u];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var i=t(this);function s(a,u){if(u)e:{var p=i;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in p))break e;p=p[C]}a=a[a.length-1],g=p[a],u=u(g),u!=g&&u!=null&&e(p,a,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(u){var p=[],g;for(g in u)Object.prototype.hasOwnProperty.call(u,g)&&p.push([g,u[g]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},o=this||self;function c(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function l(a,u,p){return a.call.apply(a.bind,arguments)}function h(a,u,p){return h=l,h.apply(null,arguments)}function m(a,u){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function y(a,u){function p(){}p.prototype=u.prototype,a.Z=u.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(g,C,x){for(var O=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)O[Y-2]=arguments[Y];return u.prototype[C].apply(g,O)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function E(a){const u=a.length;if(u>0){const p=Array(u);for(let g=0;g<u;g++)p[g]=a[g];return p}return[]}function A(a,u){for(let g=1;g<arguments.length;g++){const C=arguments[g];var p=typeof C;if(p=p!="object"?p:C?Array.isArray(C)?"array":p:"null",p=="array"||p=="object"&&typeof C.length=="number"){p=a.length||0;const x=C.length||0;a.length=p+x;for(let O=0;O<x;O++)a[p+O]=C[O]}else a.push(C)}}class P{constructor(u,p){this.i=u,this.j=p,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function $(a){o.setTimeout(()=>{throw a},0)}function U(){var a=b;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class N{constructor(){this.h=this.g=null}add(u,p){const g=M.get();g.set(u,p),this.h?this.h.next=g:this.g=g,this.h=g}}var M=new P(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(u,p){this.h=u,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let F,H=!1,b=new N,v=()=>{const a=Promise.resolve(void 0);F=()=>{a.then(_)}};function _(){for(var a;a=U();){try{a.h.call(a.g)}catch(p){$(p)}var u=M;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}H=!1}function k(){this.u=this.u,this.C=this.C}k.prototype.u=!1,k.prototype.dispose=function(){this.u||(this.u=!0,this.N())},k.prototype[Symbol.dispose]=function(){this.dispose()},k.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var S=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,u),o.removeEventListener("test",p,u)}catch{}return a})();function T(a){return/^[\s\xa0]*$/.test(a)}function De(a,u){I.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}y(De,I),De.prototype.init=function(a,u){const p=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(p=="mouseover"?u=a.fromElement:p=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&De.Z.h.call(this)},De.prototype.h=function(){De.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var oe="closure_listenable_"+(Math.random()*1e6|0),Rn=0;function Fg(a,u,p,g,C){this.listener=a,this.proxy=null,this.src=u,this.type=p,this.capture=!!g,this.ha=C,this.key=++Rn,this.da=this.fa=!1}function Zs(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function er(a,u,p){for(const g in a)u.call(p,a[g],g,a)}function Bg(a,u){for(const p in a)u.call(void 0,a[p],p,a)}function jl(a){const u={};for(const p in a)u[p]=a[p];return u}const zl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ql(a,u){let p,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(p in g)a[p]=g[p];for(let x=0;x<zl.length;x++)p=zl[x],Object.prototype.hasOwnProperty.call(g,p)&&(a[p]=g[p])}}function tr(a){this.src=a,this.g={},this.h=0}tr.prototype.add=function(a,u,p,g,C){const x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);const O=zo(a,u,g,C);return O>-1?(u=a[O],p||(u.fa=!1)):(u=new Fg(u,this.src,x,!!g,C),u.fa=p,a.push(u)),u};function jo(a,u){const p=u.type;if(p in a.g){var g=a.g[p],C=Array.prototype.indexOf.call(g,u,void 0),x;(x=C>=0)&&Array.prototype.splice.call(g,C,1),x&&(Zs(u),a.g[p].length==0&&(delete a.g[p],a.h--))}}function zo(a,u,p,g){for(let C=0;C<a.length;++C){const x=a[C];if(!x.da&&x.listener==u&&x.capture==!!p&&x.ha==g)return C}return-1}var qo="closure_lm_"+(Math.random()*1e6|0),Wo={};function Wl(a,u,p,g,C){if(Array.isArray(u)){for(let x=0;x<u.length;x++)Wl(a,u[x],p,g,C);return null}return p=Ql(p),a&&a[oe]?a.J(u,p,c(g)?!!g.capture:!1,C):Hg(a,u,p,!1,g,C)}function Hg(a,u,p,g,C,x){if(!u)throw Error("Invalid event type");const O=c(C)?!!C.capture:!!C;let Y=Ko(a);if(Y||(a[qo]=Y=new tr(a)),p=Y.add(u,p,g,O,x),p.proxy)return p;if(g=jg(),p.proxy=g,g.src=a,g.listener=p,a.addEventListener)S||(C=O),C===void 0&&(C=!1),a.addEventListener(u.toString(),g,C);else if(a.attachEvent)a.attachEvent(Kl(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function jg(){function a(p){return u.call(a.src,a.listener,p)}const u=zg;return a}function Gl(a,u,p,g,C){if(Array.isArray(u))for(var x=0;x<u.length;x++)Gl(a,u[x],p,g,C);else g=c(g)?!!g.capture:!!g,p=Ql(p),a&&a[oe]?(a=a.i,x=String(u).toString(),x in a.g&&(u=a.g[x],p=zo(u,p,g,C),p>-1&&(Zs(u[p]),Array.prototype.splice.call(u,p,1),u.length==0&&(delete a.g[x],a.h--)))):a&&(a=Ko(a))&&(u=a.g[u.toString()],a=-1,u&&(a=zo(u,p,g,C)),(p=a>-1?u[a]:null)&&Go(p))}function Go(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[oe])jo(u.i,a);else{var p=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(p,g,a.capture):u.detachEvent?u.detachEvent(Kl(p),g):u.addListener&&u.removeListener&&u.removeListener(g),(p=Ko(u))?(jo(p,a),p.h==0&&(p.src=null,u[qo]=null)):Zs(a)}}}function Kl(a){return a in Wo?Wo[a]:Wo[a]="on"+a}function zg(a,u){if(a.da)a=!0;else{u=new De(u,this);const p=a.listener,g=a.ha||a.src;a.fa&&Go(a),a=p.call(g,u)}return a}function Ko(a){return a=a[qo],a instanceof tr?a:null}var Qo="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ql(a){return typeof a=="function"?a:(a[Qo]||(a[Qo]=function(u){return a.handleEvent(u)}),a[Qo])}function Ve(){k.call(this),this.i=new tr(this),this.M=this,this.G=null}y(Ve,k),Ve.prototype[oe]=!0,Ve.prototype.removeEventListener=function(a,u,p,g){Gl(this,a,u,p,g)};function je(a,u){var p,g=a.G;if(g)for(p=[];g;g=g.G)p.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new I(u,a);else if(u instanceof I)u.target=u.target||a;else{var C=u;u=new I(g,a),ql(u,C)}C=!0;let x,O;if(p)for(O=p.length-1;O>=0;O--)x=u.g=p[O],C=nr(x,g,!0,u)&&C;if(x=u.g=a,C=nr(x,g,!0,u)&&C,C=nr(x,g,!1,u)&&C,p)for(O=0;O<p.length;O++)x=u.g=p[O],C=nr(x,g,!1,u)&&C}Ve.prototype.N=function(){if(Ve.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const p=a.g[u];for(let g=0;g<p.length;g++)Zs(p[g]);delete a.g[u],a.h--}}this.G=null},Ve.prototype.J=function(a,u,p,g){return this.i.add(String(a),u,!1,p,g)},Ve.prototype.K=function(a,u,p,g){return this.i.add(String(a),u,!0,p,g)};function nr(a,u,p,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let C=!0;for(let x=0;x<u.length;++x){const O=u[x];if(O&&!O.da&&O.capture==p){const Y=O.listener,ke=O.ha||O.src;O.fa&&jo(a.i,O),C=Y.call(ke,g)!==!1&&C}}return C&&!g.defaultPrevented}function qg(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function Jl(a){a.g=qg(()=>{a.g=null,a.i&&(a.i=!1,Jl(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Wg extends k{constructor(u,p){super(),this.m=u,this.l=p,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Jl(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hi(a){k.call(this),this.h=a,this.g={}}y(Hi,k);var Yl=[];function Xl(a){er(a.g,function(u,p){this.g.hasOwnProperty(p)&&Go(u)},a),a.g={}}Hi.prototype.N=function(){Hi.Z.N.call(this),Xl(this)},Hi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Jo=o.JSON.stringify,Gg=o.JSON.parse,Kg=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Zl(){}function eu(){}var ji={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Yo(){I.call(this,"d")}y(Yo,I);function Xo(){I.call(this,"c")}y(Xo,I);var xn={},tu=null;function ir(){return tu=tu||new Ve}xn.Ia="serverreachability";function nu(a){I.call(this,xn.Ia,a)}y(nu,I);function zi(a){const u=ir();je(u,new nu(u))}xn.STAT_EVENT="statevent";function iu(a,u){I.call(this,xn.STAT_EVENT,a),this.stat=u}y(iu,I);function ze(a){const u=ir();je(u,new iu(u,a))}xn.Ja="timingevent";function su(a,u){I.call(this,xn.Ja,a),this.size=u}y(su,I);function qi(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function Wi(){this.g=!0}Wi.prototype.ua=function(){this.g=!1};function Qg(a,u,p,g,C,x){a.info(function(){if(a.g)if(x){var O="",Y=x.split("&");for(let le=0;le<Y.length;le++){var ke=Y[le].split("=");if(ke.length>1){const Re=ke[0];ke=ke[1];const ft=Re.split("_");O=ft.length>=2&&ft[1]=="type"?O+(Re+"="+ke+"&"):O+(Re+"=redacted&")}}}else O=null;else O=x;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+u+`
`+p+`
`+O})}function Jg(a,u,p,g,C,x,O){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+u+`
`+p+`
`+x+" "+O})}function ti(a,u,p,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Xg(a,p)+(g?" "+g:"")})}function Yg(a,u){a.info(function(){return"TIMEOUT: "+u})}Wi.prototype.info=function(){};function Xg(a,u){if(!a.g)return u;if(!u)return null;try{const x=JSON.parse(u);if(x){for(a=0;a<x.length;a++)if(Array.isArray(x[a])){var p=x[a];if(!(p.length<2)){var g=p[1];if(Array.isArray(g)&&!(g.length<1)){var C=g[0];if(C!="noop"&&C!="stop"&&C!="close")for(let O=1;O<g.length;O++)g[O]=""}}}}return Jo(x)}catch{return u}}var sr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ru={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ou;function Zo(){}y(Zo,Zl),Zo.prototype.g=function(){return new XMLHttpRequest},ou=new Zo;function Gi(a){return encodeURIComponent(String(a))}function Zg(a){var u=1;a=a.split(":");const p=[];for(;u>0&&a.length;)p.push(a.shift()),u--;return a.length&&p.push(a.join(":")),p}function zt(a,u,p,g){this.j=a,this.i=u,this.l=p,this.S=g||1,this.V=new Hi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new au}function au(){this.i=null,this.g="",this.h=!1}var cu={},ea={};function ta(a,u,p){a.M=1,a.A=or(ht(u)),a.u=p,a.R=!0,lu(a,null)}function lu(a,u){a.F=Date.now(),rr(a),a.B=ht(a.A);var p=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Tu(p.i,"t",g),a.C=0,p=a.j.L,a.h=new au,a.g=Fu(a.j,p?u:null,!a.u),a.P>0&&(a.O=new Wg(h(a.Y,a,a.g),a.P)),u=a.V,p=a.g,g=a.ba;var C="readystatechange";Array.isArray(C)||(C&&(Yl[0]=C.toString()),C=Yl);for(let x=0;x<C.length;x++){const O=Wl(p,C[x],g||u.handleEvent,!1,u.h||u);if(!O)break;u.g[O.key]=O}u=a.J?jl(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),zi(),Qg(a.i,a.v,a.B,a.l,a.S,a.u)}zt.prototype.ba=function(a){a=a.target;const u=this.O;u&&Gt(a)==3?u.j():this.Y(a)},zt.prototype.Y=function(a){try{if(a==this.g)e:{const Y=Gt(this.g),ke=this.g.ya(),le=this.g.ca();if(!(Y<3)&&(Y!=3||this.g&&(this.h.h||this.g.la()||Ru(this.g)))){this.K||Y!=4||ke==7||(ke==8||le<=0?zi(3):zi(2)),na(this);var u=this.g.ca();this.X=u;var p=ey(this);if(this.o=u==200,Jg(this.i,this.v,this.B,this.l,this.S,Y,u),this.o){if(this.U&&!this.L){t:{if(this.g){var g,C=this.g;if((g=C.g?C.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(g)){var x=g;break t}}x=null}if(a=x)ti(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ia(this,a);else{this.o=!1,this.m=3,ze(12),Pn(this),Ki(this);break e}}if(this.R){a=!0;let Re;for(;!this.K&&this.C<p.length;)if(Re=ty(this,p),Re==ea){Y==4&&(this.m=4,ze(14),a=!1),ti(this.i,this.l,null,"[Incomplete Response]");break}else if(Re==cu){this.m=4,ze(15),ti(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else ti(this.i,this.l,Re,null),ia(this,Re);if(uu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Y!=4||p.length!=0||this.h.h||(this.m=1,ze(16),a=!1),this.o=this.o&&a,!a)ti(this.i,this.l,p,"[Invalid Chunked Response]"),Pn(this),Ki(this);else if(p.length>0&&!this.W){this.W=!0;var O=this.j;O.g==this&&O.aa&&!O.P&&(O.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),da(O),O.P=!0,ze(11))}}else ti(this.i,this.l,p,null),ia(this,p);Y==4&&Pn(this),this.o&&!this.K&&(Y==4?Mu(this.j,this):(this.o=!1,rr(this)))}else my(this.g),u==400&&p.indexOf("Unknown SID")>0?(this.m=3,ze(12)):(this.m=0,ze(13)),Pn(this),Ki(this)}}}catch{}finally{}};function ey(a){if(!uu(a))return a.g.la();const u=Ru(a.g);if(u==="")return"";let p="";const g=u.length,C=Gt(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Pn(a),Ki(a),"";a.h.i=new o.TextDecoder}for(let x=0;x<g;x++)a.h.h=!0,p+=a.h.i.decode(u[x],{stream:!(C&&x==g-1)});return u.length=0,a.h.g+=p,a.C=0,a.h.g}function uu(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function ty(a,u){var p=a.C,g=u.indexOf(`
`,p);return g==-1?ea:(p=Number(u.substring(p,g)),isNaN(p)?cu:(g+=1,g+p>u.length?ea:(u=u.slice(g,g+p),a.C=g+p,u)))}zt.prototype.cancel=function(){this.K=!0,Pn(this)};function rr(a){a.T=Date.now()+a.H,du(a,a.H)}function du(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=qi(h(a.aa,a),u)}function na(a){a.D&&(o.clearTimeout(a.D),a.D=null)}zt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Yg(this.i,this.B),this.M!=2&&(zi(),ze(17)),Pn(this),this.m=2,Ki(this)):du(this,this.T-a)};function Ki(a){a.j.I==0||a.K||Mu(a.j,a)}function Pn(a){na(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,Xl(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function ia(a,u){try{var p=a.j;if(p.I!=0&&(p.g==a||sa(p.h,a))){if(!a.L&&sa(p.h,a)&&p.I==3){try{var g=p.Ba.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)dr(p),lr(p);else break e;ua(p),ze(18)}}else p.xa=C[1],0<p.xa-p.K&&C[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=qi(h(p.Va,p),6e3));pu(p.h)<=1&&p.ta&&(p.ta=void 0)}else Ln(p,11)}else if((a.L||p.g==a)&&dr(p),!T(u))for(C=p.Ba.g.parse(u),u=0;u<C.length;u++){let le=C[u];const Re=le[0];if(!(Re<=p.K))if(p.K=Re,le=le[1],p.I==2)if(le[0]=="c"){p.M=le[1],p.ba=le[2];const ft=le[3];ft!=null&&(p.ka=ft,p.j.info("VER="+p.ka));const Dn=le[4];Dn!=null&&(p.za=Dn,p.j.info("SVER="+p.za));const Kt=le[5];Kt!=null&&typeof Kt=="number"&&Kt>0&&(g=1.5*Kt,p.O=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const Qt=a.g;if(Qt){const fr=Qt.g?Qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fr){var x=g.h;x.g||fr.indexOf("spdy")==-1&&fr.indexOf("quic")==-1&&fr.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(ra(x,x.h),x.h=null))}if(g.G){const ha=Qt.g?Qt.g.getResponseHeader("X-HTTP-Session-Id"):null;ha&&(g.wa=ha,de(g.J,g.G,ha))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),g=p;var O=a;if(g.na=Uu(g,g.L?g.ba:null,g.W),O.L){mu(g.h,O);var Y=O,ke=g.O;ke&&(Y.H=ke),Y.D&&(na(Y),rr(Y)),g.g=O}else Du(g);p.i.length>0&&ur(p)}else le[0]!="stop"&&le[0]!="close"||Ln(p,7);else p.I==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?Ln(p,7):la(p):le[0]!="noop"&&p.l&&p.l.qa(le),p.A=0)}}zi(4)}catch{}}var ny=class{constructor(a,u){this.g=a,this.map=u}};function hu(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function fu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function pu(a){return a.h?1:a.g?a.g.size:0}function sa(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function ra(a,u){a.g?a.g.add(u):a.h=u}function mu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}hu.prototype.cancel=function(){if(this.i=gu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function gu(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const p of a.g.values())u=u.concat(p.G);return u}return E(a.i)}var yu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function iy(a,u){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const g=a[p].indexOf("=");let C,x=null;g>=0?(C=a[p].substring(0,g),x=a[p].substring(g+1)):C=a[p],u(C,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function qt(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof qt?(this.l=a.l,Qi(this,a.j),this.o=a.o,this.g=a.g,Ji(this,a.u),this.h=a.h,oa(this,Iu(a.i)),this.m=a.m):a&&(u=String(a).match(yu))?(this.l=!1,Qi(this,u[1]||"",!0),this.o=Yi(u[2]||""),this.g=Yi(u[3]||"",!0),Ji(this,u[4]),this.h=Yi(u[5]||"",!0),oa(this,u[6]||"",!0),this.m=Yi(u[7]||"")):(this.l=!1,this.i=new Zi(null,this.l))}qt.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(Xi(u,vu,!0),":");var p=this.g;return(p||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Xi(u,vu,!0),"@"),a.push(Gi(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Xi(p,p.charAt(0)=="/"?oy:ry,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Xi(p,cy)),a.join("")},qt.prototype.resolve=function(a){const u=ht(this);let p=!!a.j;p?Qi(u,a.j):p=!!a.o,p?u.o=a.o:p=!!a.g,p?u.g=a.g:p=a.u!=null;var g=a.h;if(p)Ji(u,a.u);else if(p=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var C=u.h.lastIndexOf("/");C!=-1&&(g=u.h.slice(0,C+1)+g)}if(C=g,C==".."||C==".")g="";else if(C.indexOf("./")!=-1||C.indexOf("/.")!=-1){g=C.lastIndexOf("/",0)==0,C=C.split("/");const x=[];for(let O=0;O<C.length;){const Y=C[O++];Y=="."?g&&O==C.length&&x.push(""):Y==".."?((x.length>1||x.length==1&&x[0]!="")&&x.pop(),g&&O==C.length&&x.push("")):(x.push(Y),g=!0)}g=x.join("/")}else g=C}return p?u.h=g:p=a.i.toString()!=="",p?oa(u,Iu(a.i)):p=!!a.m,p&&(u.m=a.m),u};function ht(a){return new qt(a)}function Qi(a,u,p){a.j=p?Yi(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Ji(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function oa(a,u,p){u instanceof Zi?(a.i=u,ly(a.i,a.l)):(p||(u=Xi(u,ay)),a.i=new Zi(u,a.l))}function de(a,u,p){a.i.set(u,p)}function or(a){return de(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Yi(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Xi(a,u,p){return typeof a=="string"?(a=encodeURI(a).replace(u,sy),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function sy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var vu=/[#\/\?@]/g,ry=/[#\?:]/g,oy=/[#\?]/g,ay=/[#\?@]/g,cy=/#/g;function Zi(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function $n(a){a.g||(a.g=new Map,a.h=0,a.i&&iy(a.i,function(u,p){a.add(decodeURIComponent(u.replace(/\+/g," ")),p)}))}n=Zi.prototype,n.add=function(a,u){$n(this),this.i=null,a=ni(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(u),this.h+=1,this};function wu(a,u){$n(a),u=ni(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function _u(a,u){return $n(a),u=ni(a,u),a.g.has(u)}n.forEach=function(a,u){$n(this),this.g.forEach(function(p,g){p.forEach(function(C){a.call(u,C,g,this)},this)},this)};function bu(a,u){$n(a);let p=[];if(typeof u=="string")_u(a,u)&&(p=p.concat(a.g.get(ni(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)p=p.concat(a[u]);return p}n.set=function(a,u){return $n(this),this.i=null,a=ni(this,a),_u(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=bu(this,a),a.length>0?String(a[0]):u):u};function Tu(a,u,p){wu(a,u),p.length>0&&(a.i=null,a.g.set(ni(a,u),E(p)),a.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let g=0;g<u.length;g++){var p=u[g];const C=Gi(p);p=bu(this,p);for(let x=0;x<p.length;x++){let O=C;p[x]!==""&&(O+="="+Gi(p[x])),a.push(O)}}return this.i=a.join("&")};function Iu(a){const u=new Zi;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function ni(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function ly(a,u){u&&!a.j&&($n(a),a.i=null,a.g.forEach(function(p,g){const C=g.toLowerCase();g!=C&&(wu(this,g),Tu(this,C,p))},a)),a.j=u}function uy(a,u){const p=new Wi;if(o.Image){const g=new Image;g.onload=m(Wt,p,"TestLoadImage: loaded",!0,u,g),g.onerror=m(Wt,p,"TestLoadImage: error",!1,u,g),g.onabort=m(Wt,p,"TestLoadImage: abort",!1,u,g),g.ontimeout=m(Wt,p,"TestLoadImage: timeout",!1,u,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function dy(a,u){const p=new Wi,g=new AbortController,C=setTimeout(()=>{g.abort(),Wt(p,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(x=>{clearTimeout(C),x.ok?Wt(p,"TestPingServer: ok",!0,u):Wt(p,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),Wt(p,"TestPingServer: error",!1,u)})}function Wt(a,u,p,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(p)}catch{}}function hy(){this.g=new Kg}function aa(a){this.i=a.Sb||null,this.h=a.ab||!1}y(aa,Zl),aa.prototype.g=function(){return new ar(this.i,this.h)};function ar(a,u){Ve.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}y(ar,Ve),n=ar.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,ts(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,es(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ts(this)),this.g&&(this.readyState=3,ts(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Eu(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Eu(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?es(this):ts(this),this.readyState==3&&Eu(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,es(this))},n.Na=function(a){this.g&&(this.response=a,es(this))},n.ga=function(){this.g&&es(this)};function es(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ts(a)}n.setRequestHeader=function(a,u){this.A.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var p=u.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=u.next();return a.join(`\r
`)};function ts(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ar.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ku(a){let u="";return er(a,function(p,g){u+=g,u+=":",u+=p,u+=`\r
`}),u}function ca(a,u,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=ku(p),typeof a=="string"?p!=null&&Gi(p):de(a,u,p))}function me(a){Ve.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}y(me,Ve);var fy=/^https?$/i,py=["POST","PUT"];n=me.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,u,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ou.g(),this.g.onreadystatechange=w(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(x){Su(this,x);return}if(a=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)p.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const x of g.keys())p.set(x,g.get(x));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(x=>x.toLowerCase()=="content-type"),C=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(py,u,void 0)>=0)||g||C||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,O]of p)this.g.setRequestHeader(x,O);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(x){Su(this,x)}};function Su(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,Cu(a),cr(a)}function Cu(a){a.A||(a.A=!0,je(a,"complete"),je(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,je(this,"complete"),je(this,"abort"),cr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cr(this,!0)),me.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Au(this):this.Xa())},n.Xa=function(){Au(this)};function Au(a){if(a.h&&typeof r<"u"){if(a.v&&Gt(a)==4)setTimeout(a.Ca.bind(a),0);else if(je(a,"readystatechange"),Gt(a)==4){a.h=!1;try{const x=a.ca();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var p;if(!(p=u)){var g;if(g=x===0){let O=String(a.D).match(yu)[1]||null;!O&&o.self&&o.self.location&&(O=o.self.location.protocol.slice(0,-1)),g=!fy.test(O?O.toLowerCase():"")}p=g}if(p)je(a,"complete"),je(a,"success");else{a.o=6;try{var C=Gt(a)>2?a.g.statusText:""}catch{C=""}a.l=C+" ["+a.ca()+"]",Cu(a)}}finally{cr(a)}}}}function cr(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,u||je(a,"ready");try{p.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Gt(a){return a.g?a.g.readyState:0}n.ca=function(){try{return Gt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Gg(u)}};function Ru(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function my(a){const u={};a=(a.g&&Gt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(T(a[g]))continue;var p=Zg(a[g]);const C=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const x=u[C]||[];u[C]=x,x.push(p)}Bg(u,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ns(a,u,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||u}function xu(a){this.za=0,this.i=[],this.j=new Wi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ns("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ns("baseRetryDelayMs",5e3,a),this.Za=ns("retryDelaySeedMs",1e4,a),this.Ta=ns("forwardChannelMaxRetries",2,a),this.va=ns("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new hu(a&&a.concurrentRequestLimit),this.Ba=new hy,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=xu.prototype,n.ka=8,n.I=1,n.connect=function(a,u,p,g){ze(0),this.W=a,this.H=u||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.J=Uu(this,null,this.W),ur(this)};function la(a){if(Pu(a),a.I==3){var u=a.V++,p=ht(a.J);if(de(p,"SID",a.M),de(p,"RID",u),de(p,"TYPE","terminate"),is(a,p),u=new zt(a,a.j,u),u.M=2,u.A=or(ht(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=u.A,p=!0),p||(u.g=Fu(u.j,null),u.g.ea(u.A)),u.F=Date.now(),rr(u)}Vu(a)}function lr(a){a.g&&(da(a),a.g.cancel(),a.g=null)}function Pu(a){lr(a),a.v&&(o.clearTimeout(a.v),a.v=null),dr(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function ur(a){if(!fu(a.h)&&!a.m){a.m=!0;var u=a.Ea;F||v(),H||(F(),H=!0),b.add(u,a),a.D=0}}function gy(a,u){return pu(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=qi(h(a.Ea,a,u),Ou(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const C=new zt(this,this.j,a);let x=this.o;if(this.U&&(x?(x=jl(x),ql(x,this.U)):x=this.U),this.u!==null||this.R||(C.J=x,x=null),this.S)e:{for(var u=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,u>4096){u=p;break e}if(u===4096||p===this.i.length-1){u=p+1;break e}}u=1e3}else u=1e3;u=Lu(this,C,u),p=ht(this.J),de(p,"RID",a),de(p,"CVER",22),this.G&&de(p,"X-HTTP-Session-Id",this.G),is(this,p),x&&(this.R?u="headers="+Gi(ku(x))+"&"+u:this.u&&ca(p,this.u,x)),ra(this.h,C),this.Ra&&de(p,"TYPE","init"),this.S?(de(p,"$req",u),de(p,"SID","null"),C.U=!0,ta(C,p,null)):ta(C,p,u),this.I=2}}else this.I==3&&(a?$u(this,a):this.i.length==0||fu(this.h)||$u(this))};function $u(a,u){var p;u?p=u.l:p=a.V++;const g=ht(a.J);de(g,"SID",a.M),de(g,"RID",p),de(g,"AID",a.K),is(a,g),a.u&&a.o&&ca(g,a.u,a.o),p=new zt(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),u&&(a.i=u.G.concat(a.i)),u=Lu(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),ra(a.h,p),ta(p,g,u)}function is(a,u){a.H&&er(a.H,function(p,g){de(u,g,p)}),a.l&&er({},function(p,g){de(u,g,p)})}function Lu(a,u,p){p=Math.min(a.i.length,p);const g=a.l?h(a.l.Ka,a.l,a):null;e:{var C=a.i;let Y=-1;for(;;){const ke=["count="+p];Y==-1?p>0?(Y=C[0].g,ke.push("ofs="+Y)):Y=0:ke.push("ofs="+Y);let le=!0;for(let Re=0;Re<p;Re++){var x=C[Re].g;const ft=C[Re].map;if(x-=Y,x<0)Y=Math.max(0,C[Re].g-100),le=!1;else try{x="req"+x+"_"||"";try{var O=ft instanceof Map?ft:Object.entries(ft);for(const[Dn,Kt]of O){let Qt=Kt;c(Kt)&&(Qt=Jo(Kt)),ke.push(x+Dn+"="+encodeURIComponent(Qt))}}catch(Dn){throw ke.push(x+"type="+encodeURIComponent("_badmap")),Dn}}catch{g&&g(ft)}}if(le){O=ke.join("&");break e}}O=void 0}return a=a.i.splice(0,p),u.G=a,O}function Du(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;F||v(),H||(F(),H=!0),b.add(u,a),a.A=0}}function ua(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=qi(h(a.Da,a),Ou(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,Nu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=qi(h(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ze(10),lr(this),Nu(this))};function da(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Nu(a){a.g=new zt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=ht(a.na);de(u,"RID","rpc"),de(u,"SID",a.M),de(u,"AID",a.K),de(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&de(u,"TO",a.ia),de(u,"TYPE","xmlhttp"),is(a,u),a.u&&a.o&&ca(u,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=or(ht(u)),p.u=null,p.R=!0,lu(p,a)}n.Va=function(){this.C!=null&&(this.C=null,lr(this),ua(this),ze(19))};function dr(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Mu(a,u){var p=null;if(a.g==u){dr(a),da(a),a.g=null;var g=2}else if(sa(a.h,u))p=u.G,mu(a.h,u),g=1;else return;if(a.I!=0){if(u.o)if(g==1){p=u.u?u.u.length:0,u=Date.now()-u.F;var C=a.D;g=ir(),je(g,new su(g,p)),ur(a)}else Du(a);else if(C=u.m,C==3||C==0&&u.X>0||!(g==1&&gy(a,u)||g==2&&ua(a)))switch(p&&p.length>0&&(u=a.h,u.i=u.i.concat(p)),C){case 1:Ln(a,5);break;case 4:Ln(a,10);break;case 3:Ln(a,6);break;default:Ln(a,2)}}}function Ou(a,u){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*u}function Ln(a,u){if(a.j.info("Error code "+u),u==2){var p=h(a.bb,a),g=a.Ua;const C=!g;g=new qt(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Qi(g,"https"),or(g),C?uy(g.toString(),p):dy(g.toString(),p)}else ze(2);a.I=0,a.l&&a.l.pa(u),Vu(a),Pu(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ze(2)):(this.j.info("Failed to ping google.com"),ze(1))};function Vu(a){if(a.I=0,a.ja=[],a.l){const u=gu(a.h);(u.length!=0||a.i.length!=0)&&(A(a.ja,u),A(a.ja,a.i),a.h.i.length=0,E(a.i),a.i.length=0),a.l.oa()}}function Uu(a,u,p){var g=p instanceof qt?ht(p):new qt(p);if(g.g!="")u&&(g.g=u+"."+g.g),Ji(g,g.u);else{var C=o.location;g=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;const x=new qt(null);g&&Qi(x,g),u&&(x.g=u),C&&Ji(x,C),p&&(x.h=p),g=x}return p=a.G,u=a.wa,p&&u&&de(g,p,u),de(g,"VER",a.ka),is(a,g),g}function Fu(a,u,p){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new me(new aa({ab:p})):new me(a.ma),u.Fa(a.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Bu(){}n=Bu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function hr(){}hr.prototype.g=function(a,u){return new Ye(a,u)};function Ye(a,u){Ve.call(this),this.g=new xu(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!T(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!T(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new ii(this)}y(Ye,Ve),Ye.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ye.prototype.close=function(){la(this.g)},Ye.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=Jo(a),a=p);u.i.push(new ny(u.Ya++,a)),u.I==3&&ur(u)},Ye.prototype.N=function(){this.g.l=null,delete this.j,la(this.g),delete this.g,Ye.Z.N.call(this)};function Hu(a){Yo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const p in u){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}y(Hu,Yo);function ju(){Xo.call(this),this.status=1}y(ju,Xo);function ii(a){this.g=a}y(ii,Bu),ii.prototype.ra=function(){je(this.g,"a")},ii.prototype.qa=function(a){je(this.g,new Hu(a))},ii.prototype.pa=function(a){je(this.g,new ju)},ii.prototype.oa=function(){je(this.g,"b")},hr.prototype.createWebChannel=hr.prototype.g,Ye.prototype.send=Ye.prototype.o,Ye.prototype.open=Ye.prototype.m,Ye.prototype.close=Ye.prototype.close,_p=function(){return new hr},wp=function(){return ir()},vp=xn,Ga={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},sr.NO_ERROR=0,sr.TIMEOUT=8,sr.HTTP_ERROR=6,Lr=sr,ru.COMPLETE="complete",yp=ru,eu.EventType=ji,ji.OPEN="a",ji.CLOSE="b",ji.ERROR="c",ji.MESSAGE="d",Ve.prototype.listen=Ve.prototype.J,us=eu,me.prototype.listenOnce=me.prototype.K,me.prototype.getLastError=me.prototype.Ha,me.prototype.getLastErrorCode=me.prototype.ya,me.prototype.getStatus=me.prototype.ca,me.prototype.getResponseJson=me.prototype.La,me.prototype.getResponseText=me.prototype.la,me.prototype.send=me.prototype.ea,me.prototype.setWithCredentials=me.prototype.Fa,gp=me}).apply(typeof mr<"u"?mr:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class Fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Fe.UNAUTHENTICATED=new Fe(null),Fe.GOOGLE_CREDENTIALS=new Fe("google-credentials-uid"),Fe.FIRST_PARTY=new Fe("first-party-uid"),Fe.MOCK_USER=new Fe("mock-user");/**
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
 */let Mi="12.10.0";function xb(n){Mi=n}/**
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
 *//**
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
 */const Gn=new Ec("@firebase/firestore");function ri(){return Gn.logLevel}function B(n,...e){if(Gn.logLevel<=X.DEBUG){const t=e.map(Kc);Gn.debug(`Firestore (${Mi}): ${n}`,...t)}}function Ht(n,...e){if(Gn.logLevel<=X.ERROR){const t=e.map(Kc);Gn.error(`Firestore (${Mi}): ${n}`,...t)}}function Kn(n,...e){if(Gn.logLevel<=X.WARN){const t=e.map(Kc);Gn.warn(`Firestore (${Mi}): ${n}`,...t)}}function Kc(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function J(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,bp(n,i,t)}function bp(n,e,t){let i=`FIRESTORE (${Mi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Ht(i),new Error(i)}function pe(n,e,t,i){let s="Unexpected state";typeof t=="string"?s=t:i=t,n||bp(e,s,i)}function ie(n,e){return n}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Pt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class hi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Tp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Pb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Fe.UNAUTHENTICATED)))}shutdown(){}}class $b{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Lb{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){pe(this.o===void 0,42304);let i=this.i;const s=l=>this.i!==i?(i=this.i,t(l)):Promise.resolve();let r=new hi;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new hi,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=r;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new hi)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(pe(typeof i.accessToken=="string",31837,{l:i}),new Tp(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string",2055,{h:e}),new Fe(e)}}class Db{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Nb{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new Db(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Fe.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Id{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Mb{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,We(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){pe(this.o===void 0,3512);const i=r=>{r.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable((()=>i(r)))};const s=r=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>s(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?s(r):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Id(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(pe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Id(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Ob(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class Ip{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=Ob(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%62))}return i}}function ee(n,e){return n<e?-1:n>e?1:0}function Ka(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const s=n.charAt(i),r=e.charAt(i);if(s!==r)return ba(s)===ba(r)?ee(s,r):ba(s)?1:-1}return ee(n.length,e.length)}const Vb=55296,Ub=57343;function ba(n){const e=n.charCodeAt(0);return e>=Vb&&e<=Ub}function Ti(n,e,t){return n.length===e.length&&n.every(((i,s)=>t(i,e[s])))}/**
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
 */const Ed="__name__";class gt{constructor(e,t,i){t===void 0?t=0:t>e.length&&J(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&J(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return gt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof gt?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=gt.compareSegments(e.get(s),t.get(s));if(r!==0)return r}return ee(e.length,t.length)}static compareSegments(e,t){const i=gt.isNumericId(e),s=gt.isNumericId(t);return i&&!s?-1:!i&&s?1:i&&s?gt.extractNumericId(e).compare(gt.extractNumericId(t)):Ka(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return pn.fromString(e.substring(4,e.length-2))}}class fe extends gt{construct(e,t,i){return new fe(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new z(V.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((s=>s.length>0)))}return new fe(t)}static emptyPath(){return new fe([])}}const Fb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends gt{construct(e,t,i){return new Ge(e,t,i)}static isValidIdentifier(e){return Fb.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ed}static keyField(){return new Ge([Ed])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new z(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new z(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(i+=c,s++):(r(),s++)}if(r(),o)throw new z(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(t)}static emptyPath(){return new Ge([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(fe.fromString(e))}static fromName(e){return new G(fe.fromString(e).popFirst(5))}static empty(){return new G(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return fe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new fe(e.slice()))}}/**
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
 */function Bb(n,e,t){if(!t)throw new z(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Hb(n,e,t,i){if(e===!0&&i===!0)throw new z(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function kd(n){if(G.isDocumentKey(n))throw new z(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function jb(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function zb(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":J(12329,{type:typeof n})}function Dr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new z(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=zb(n);throw new z(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Ie(n,e){const t={typeString:n};return e&&(t.value=e),t}function Hs(n,e){if(!jb(n))throw new z(V.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const s=e[i].typeString,r="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const o=n[i];if(s&&typeof o!==s){t=`JSON field '${i}' must be a ${s}.`;break}if(r!==void 0&&o!==r.value){t=`Expected '${i}' field to equal '${r.value}'`;break}}if(t)throw new z(V.INVALID_ARGUMENT,t);return!0}/**
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
 */const Sd=-62135596800,Cd=1e6;class Te{static now(){return Te.fromMillis(Date.now())}static fromDate(e){return Te.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Cd);return new Te(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Sd)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Cd}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Te._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Hs(e,Te._jsonSchema))return new Te(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Sd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Te._jsonSchemaVersion="firestore/timestamp/1.0",Te._jsonSchema={type:Ie("string",Te._jsonSchemaVersion),seconds:Ie("number"),nanoseconds:Ie("number")};/**
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
 */class Q{static fromTimestamp(e){return new Q(e)}static min(){return new Q(new Te(0,0))}static max(){return new Q(new Te(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const As=-1;function qb(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=Q.fromTimestamp(i===1e9?new Te(t+1,0):new Te(t,i));return new bn(s,G.empty(),e)}function Wb(n){return new bn(n.readTime,n.key,As)}class bn{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new bn(Q.min(),G.empty(),As)}static max(){return new bn(Q.max(),G.empty(),As)}}function Gb(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=G.comparator(n.documentKey,e.documentKey),t!==0?t:ee(n.largestBatchId,e.largestBatchId))}/**
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
 */const Kb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function ko(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==Kb)throw n;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&J(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new L(((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof L?t:L.resolve(t)}catch(t){return L.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):L.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):L.reject(t)}static resolve(e){return new L(((t,i)=>{t(e)}))}static reject(e){return new L(((t,i)=>{i(e)}))}static waitFor(e){return new L(((t,i)=>{let s=0,r=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++r,o&&r===s&&t()}),(l=>i(l)))})),o=!0,r===s&&t()}))}static or(e){let t=L.resolve(!1);for(const i of e)t=t.next((s=>s?L.resolve(s):i()));return t}static forEach(e,t){const i=[];return e.forEach(((s,r)=>{i.push(t.call(this,s,r))})),this.waitFor(i)}static mapArray(e,t){return new L(((i,s)=>{const r=e.length,o=new Array(r);let c=0;for(let l=0;l<r;l++){const h=l;t(e[h]).next((m=>{o[h]=m,++c,c===r&&i(o)}),(m=>s(m)))}}))}static doWhile(e,t){return new L(((i,s)=>{const r=()=>{e()===!0?t().next((()=>{r()}),s):i()};r()}))}}function Jb(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Oi(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class So{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}So.ce=-1;/**
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
 */const Yb=-1;function Co(n){return n==null}function Qa(n){return n===0&&1/n==-1/0}/**
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
 */const Ep="";function Xb(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Ad(e)),e=Zb(n.get(t),e);return Ad(e)}function Zb(n,e){let t=e;const i=n.length;for(let s=0;s<i;s++){const r=n.charAt(s);switch(r){case"\0":t+="";break;case Ep:t+="";break;default:t+=r}}return t}function Ad(n){return n+Ep+""}/**
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
 */function Rd(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function js(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function eT(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class _e{constructor(e,t){this.comparator=e,this.root=t||Ne.EMPTY}insert(e,t){return new _e(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ne.BLACK,null,null))}remove(e){return new _e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ne.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gr(this.root,e,this.comparator,!1)}getReverseIterator(){return new gr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gr(this.root,e,this.comparator,!0)}}class gr{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ne{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??Ne.RED,this.left=s??Ne.EMPTY,this.right=r??Ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new Ne(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ne.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw J(43730,{key:this.key,value:this.value});if(this.right.isRed())throw J(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw J(27949);return e+(this.isRed()?0:1)}}Ne.EMPTY=null,Ne.RED=!0,Ne.BLACK=!1;Ne.EMPTY=new class{constructor(){this.size=0}get key(){throw J(57766)}get value(){throw J(16141)}get color(){throw J(16727)}get left(){throw J(29726)}get right(){throw J(36894)}copy(e,t,i,s,r){return this}insert(e,t,i){return new Ne(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ce{constructor(e){this.comparator=e,this.data=new _e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new xd(this.data.getIterator())}getIteratorFrom(e){return new xd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof Ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ce(this.comparator);return t.data=e,t}}class xd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class un{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new un([])}unionWith(e){let t=new Ce(Ge.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new un(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ti(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class kp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Oe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new kp("Invalid base64 string: "+r):r}})(e);return new Oe(t)}static fromUint8Array(e){const t=(function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r})(e);return new Oe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Oe.EMPTY_BYTE_STRING=new Oe("");const tT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tn(n){if(pe(!!n,39018),typeof n=="string"){let e=0;const t=tT.exec(n);if(pe(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:we(n.seconds),nanos:we(n.nanos)}}function we(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function In(n){return typeof n=="string"?Oe.fromBase64String(n):Oe.fromUint8Array(n)}/**
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
 */const Sp="server_timestamp",Cp="__type__",Ap="__previous_value__",Rp="__local_write_time__";function Qc(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Cp])==null?void 0:i.stringValue)===Sp}function Ao(n){const e=n.mapValue.fields[Ap];return Qc(e)?Ao(e):e}function Rs(n){const e=Tn(n.mapValue.fields[Rp].timestampValue);return new Te(e.seconds,e.nanos)}/**
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
 */class nT{constructor(e,t,i,s,r,o,c,l,h,m,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=m,this.apiKey=y}}const io="(default)";class xs{constructor(e,t){this.projectId=e,this.database=t||io}static empty(){return new xs("","")}get isDefaultDatabase(){return this.database===io}isEqual(e){return e instanceof xs&&e.projectId===this.projectId&&e.database===this.database}}function iT(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new z(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xs(n.options.projectId,e)}/**
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
 */const sT="__type__",rT="__max__",yr={mapValue:{}},oT="__vector__",Ja="value";function En(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Qc(n)?4:cT(n)?9007199254740991:aT(n)?10:11:J(28295,{value:n})}function Rt(n,e){if(n===e)return!0;const t=En(n);if(t!==En(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Rs(n).isEqual(Rs(e));case 3:return(function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=Tn(s.timestampValue),c=Tn(r.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,r){return In(s.bytesValue).isEqual(In(r.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,r){return we(s.geoPointValue.latitude)===we(r.geoPointValue.latitude)&&we(s.geoPointValue.longitude)===we(r.geoPointValue.longitude)})(n,e);case 2:return(function(s,r){if("integerValue"in s&&"integerValue"in r)return we(s.integerValue)===we(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=we(s.doubleValue),c=we(r.doubleValue);return o===c?Qa(o)===Qa(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return Ti(n.arrayValue.values||[],e.arrayValue.values||[],Rt);case 10:case 11:return(function(s,r){const o=s.mapValue.fields||{},c=r.mapValue.fields||{};if(Rd(o)!==Rd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Rt(o[l],c[l])))return!1;return!0})(n,e);default:return J(52216,{left:n})}}function Ps(n,e){return(n.values||[]).find((t=>Rt(t,e)))!==void 0}function Ii(n,e){if(n===e)return 0;const t=En(n),i=En(e);if(t!==i)return ee(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return ee(n.booleanValue,e.booleanValue);case 2:return(function(r,o){const c=we(r.integerValue||r.doubleValue),l=we(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return Pd(n.timestampValue,e.timestampValue);case 4:return Pd(Rs(n),Rs(e));case 5:return Ka(n.stringValue,e.stringValue);case 6:return(function(r,o){const c=In(r),l=In(o);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(r,o){const c=r.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const m=ee(c[h],l[h]);if(m!==0)return m}return ee(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(r,o){const c=ee(we(r.latitude),we(o.latitude));return c!==0?c:ee(we(r.longitude),we(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return $d(n.arrayValue,e.arrayValue);case 10:return(function(r,o){var w,E,A,P;const c=r.fields||{},l=o.fields||{},h=(w=c[Ja])==null?void 0:w.arrayValue,m=(E=l[Ja])==null?void 0:E.arrayValue,y=ee(((A=h==null?void 0:h.values)==null?void 0:A.length)||0,((P=m==null?void 0:m.values)==null?void 0:P.length)||0);return y!==0?y:$d(h,m)})(n.mapValue,e.mapValue);case 11:return(function(r,o){if(r===yr.mapValue&&o===yr.mapValue)return 0;if(r===yr.mapValue)return 1;if(o===yr.mapValue)return-1;const c=r.fields||{},l=Object.keys(c),h=o.fields||{},m=Object.keys(h);l.sort(),m.sort();for(let y=0;y<l.length&&y<m.length;++y){const w=Ka(l[y],m[y]);if(w!==0)return w;const E=Ii(c[l[y]],h[m[y]]);if(E!==0)return E}return ee(l.length,m.length)})(n.mapValue,e.mapValue);default:throw J(23264,{he:t})}}function Pd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ee(n,e);const t=Tn(n),i=Tn(e),s=ee(t.seconds,i.seconds);return s!==0?s:ee(t.nanos,i.nanos)}function $d(n,e){const t=n.values||[],i=e.values||[];for(let s=0;s<t.length&&s<i.length;++s){const r=Ii(t[s],i[s]);if(r)return r}return ee(t.length,i.length)}function Ei(n){return Ya(n)}function Ya(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=Tn(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return In(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return G.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",s=!0;for(const r of t.values||[])s?s=!1:i+=",",i+=Ya(r);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${Ya(t.fields[o])}`;return s+"}"})(n.mapValue):J(61005,{value:n})}function Nr(n){switch(En(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ao(n);return e?16+Nr(e):16;case 5:return 2*n.stringValue.length;case 6:return In(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((s,r)=>s+Nr(r)),0)})(n.arrayValue);case 10:case 11:return(function(i){let s=0;return js(i.fields,((r,o)=>{s+=r.length+Nr(o)})),s})(n.mapValue);default:throw J(13486,{value:n})}}function Xa(n){return!!n&&"integerValue"in n}function Jc(n){return!!n&&"arrayValue"in n}function Ld(n){return!!n&&"nullValue"in n}function Dd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ta(n){return!!n&&"mapValue"in n}function aT(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[sT])==null?void 0:i.stringValue)===oT}function ws(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return js(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=ws(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ws(n.arrayValue.values[t]);return e}return{...n}}function cT(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===rT}/**
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
 */class vt{constructor(e){this.value=e}static empty(){return new vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Ta(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ws(t)}setAll(e){let t=Ge.emptyPath(),i={},s=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,i,s),i={},s=[],t=c.popLast()}o?i[c.lastSegment()]=ws(o):s.push(c.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());Ta(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Rt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];Ta(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){js(t,((s,r)=>e[s]=r));for(const s of i)delete e[s]}clone(){return new vt(ws(this.value))}}/**
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
 */class Be{constructor(e,t,i,s,r,o,c){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Be(e,0,Q.min(),Q.min(),Q.min(),vt.empty(),0)}static newFoundDocument(e,t,i,s){return new Be(e,1,t,Q.min(),i,s,0)}static newNoDocument(e,t){return new Be(e,2,t,Q.min(),Q.min(),vt.empty(),0)}static newUnknownDocument(e,t){return new Be(e,3,t,Q.min(),Q.min(),vt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class so{constructor(e,t){this.position=e,this.inclusive=t}}function Nd(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],o=n.position[s];if(r.field.isKeyField()?i=G.comparator(G.fromName(o.referenceValue),t.key):i=Ii(o,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Md(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Rt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ro{constructor(e,t="asc"){this.field=e,this.dir=t}}function lT(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class xp{}class Se extends xp{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new dT(e,t,i):t==="array-contains"?new pT(e,i):t==="in"?new mT(e,i):t==="not-in"?new gT(e,i):t==="array-contains-any"?new yT(e,i):new Se(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new hT(e,i):new fT(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ii(t,this.value)):t!==null&&En(this.value)===En(t)&&this.matchesComparison(Ii(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xt extends xp{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new xt(e,t)}matches(e){return Pp(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Pp(n){return n.op==="and"}function $p(n){return uT(n)&&Pp(n)}function uT(n){for(const e of n.filters)if(e instanceof xt)return!1;return!0}function Za(n){if(n instanceof Se)return n.field.canonicalString()+n.op.toString()+Ei(n.value);if($p(n))return n.filters.map((e=>Za(e))).join(",");{const e=n.filters.map((t=>Za(t))).join(",");return`${n.op}(${e})`}}function Lp(n,e){return n instanceof Se?(function(i,s){return s instanceof Se&&i.op===s.op&&i.field.isEqual(s.field)&&Rt(i.value,s.value)})(n,e):n instanceof xt?(function(i,s){return s instanceof xt&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce(((r,o,c)=>r&&Lp(o,s.filters[c])),!0):!1})(n,e):void J(19439)}function Dp(n){return n instanceof Se?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ei(t.value)}`})(n):n instanceof xt?(function(t){return t.op.toString()+" {"+t.getFilters().map(Dp).join(" ,")+"}"})(n):"Filter"}class dT extends Se{constructor(e,t,i){super(e,t,i),this.key=G.fromName(i.referenceValue)}matches(e){const t=G.comparator(e.key,this.key);return this.matchesComparison(t)}}class hT extends Se{constructor(e,t){super(e,"in",t),this.keys=Np("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class fT extends Se{constructor(e,t){super(e,"not-in",t),this.keys=Np("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Np(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((i=>G.fromName(i.referenceValue)))}class pT extends Se{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Jc(t)&&Ps(t.arrayValue,this.value)}}class mT extends Se{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ps(this.value.arrayValue,t)}}class gT extends Se{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ps(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ps(this.value.arrayValue,t)}}class yT extends Se{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Jc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>Ps(this.value.arrayValue,i)))}}/**
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
 */class vT{constructor(e,t=null,i=[],s=[],r=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=c,this.Te=null}}function Od(n,e=null,t=[],i=[],s=null,r=null,o=null){return new vT(n,e,t,i,s,r,o)}function Yc(n){const e=ie(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Za(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(r){return r.field.canonicalString()+r.dir})(i))).join(","),Co(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Ei(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Ei(i))).join(",")),e.Te=t}return e.Te}function Xc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!lT(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Lp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Md(n.startAt,e.startAt)&&Md(n.endAt,e.endAt)}function ec(n){return G.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ro{constructor(e,t=null,i=[],s=[],r=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function wT(n,e,t,i,s,r,o,c){return new Ro(n,e,t,i,s,r,o,c)}function Zc(n){return new Ro(n)}function Vd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function _T(n){return G.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function bT(n){return n.collectionGroup!==null}function _s(n){const e=ie(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const r of e.explicitOrderBy)e.Ie.push(r),t.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ce(Ge.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new ro(r,i))})),t.has(Ge.keyField().canonicalString())||e.Ie.push(new ro(Ge.keyField(),i))}return e.Ie}function St(n){const e=ie(n);return e.Ee||(e.Ee=TT(e,_s(n))),e.Ee}function TT(n,e){if(n.limitType==="F")return Od(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const r=s.dir==="desc"?"asc":"desc";return new ro(s.field,r)}));const t=n.endAt?new so(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new so(n.startAt.position,n.startAt.inclusive):null;return Od(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function tc(n,e,t){return new Ro(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function xo(n,e){return Xc(St(n),St(e))&&n.limitType===e.limitType}function Mp(n){return`${Yc(St(n))}|lt:${n.limitType}`}function oi(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((s=>Dp(s))).join(", ")}]`),Co(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((s=>Ei(s))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((s=>Ei(s))).join(",")),`Target(${i})`})(St(n))}; limitType=${n.limitType})`}function Po(n,e){return e.isFoundDocument()&&(function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):G.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)})(n,e)&&(function(i,s){for(const r of _s(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0})(n,e)&&(function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0})(n,e)&&(function(i,s){return!(i.startAt&&!(function(o,c,l){const h=Nd(o,c,l);return o.inclusive?h<=0:h<0})(i.startAt,_s(i),s)||i.endAt&&!(function(o,c,l){const h=Nd(o,c,l);return o.inclusive?h>=0:h>0})(i.endAt,_s(i),s))})(n,e)}function IT(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Op(n){return(e,t)=>{let i=!1;for(const s of _s(n)){const r=ET(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function ET(n,e,t){const i=n.field.isKeyField()?G.comparator(e.key,t.key):(function(r,o,c){const l=o.data.field(r),h=c.data.field(r);return l!==null&&h!==null?Ii(l,h):J(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return J(19790,{direction:n.dir})}}/**
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
 */class Zn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){js(this.inner,((t,i)=>{for(const[s,r]of i)e(s,r)}))}isEmpty(){return eT(this.inner)}size(){return this.innerSize}}/**
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
 */const kT=new _e(G.comparator);function kn(){return kT}const Vp=new _e(G.comparator);function ds(...n){let e=Vp;for(const t of n)e=e.insert(t.key,t);return e}function ST(n){let e=Vp;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function Vn(){return bs()}function Up(){return bs()}function bs(){return new Zn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const CT=new Ce(G.comparator);function se(...n){let e=CT;for(const t of n)e=e.add(t);return e}const AT=new Ce(ee);function RT(){return AT}/**
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
 */function xT(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qa(e)?"-0":e}}function PT(n){return{integerValue:""+n}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class $o{constructor(){this._=void 0}}function $T(n,e,t){return n instanceof nc?(function(s,r){const o={fields:{[Cp]:{stringValue:Sp},[Rp]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Qc(r)&&(r=Ao(r)),r&&(o.fields[Ap]=r),{mapValue:o}})(t,e):n instanceof oo?Fp(n,e):n instanceof ao?Bp(n,e):(function(s,r){const o=DT(s,r),c=Ud(o)+Ud(s.Ae);return Xa(o)&&Xa(s.Ae)?PT(c):xT(s.serializer,c)})(n,e)}function LT(n,e,t){return n instanceof oo?Fp(n,e):n instanceof ao?Bp(n,e):t}function DT(n,e){return n instanceof ic?(function(i){return Xa(i)||(function(r){return!!r&&"doubleValue"in r})(i)})(e)?e:{integerValue:0}:null}class nc extends $o{}class oo extends $o{constructor(e){super(),this.elements=e}}function Fp(n,e){const t=Hp(e);for(const i of n.elements)t.some((s=>Rt(s,i)))||t.push(i);return{arrayValue:{values:t}}}class ao extends $o{constructor(e){super(),this.elements=e}}function Bp(n,e){let t=Hp(e);for(const i of n.elements)t=t.filter((s=>!Rt(s,i)));return{arrayValue:{values:t}}}class ic extends $o{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Ud(n){return we(n.integerValue||n.doubleValue)}function Hp(n){return Jc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function NT(n,e){return n.field.isEqual(e.field)&&(function(i,s){return i instanceof oo&&s instanceof oo||i instanceof ao&&s instanceof ao?Ti(i.elements,s.elements,Rt):i instanceof ic&&s instanceof ic?Rt(i.Ae,s.Ae):i instanceof nc&&s instanceof nc})(n.transform,e.transform)}class Bn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Bn}static exists(e){return new Bn(void 0,e)}static updateTime(e){return new Bn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Mr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class el{}function jp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new OT(n.key,Bn.none()):new tl(n.key,n.data,Bn.none());{const t=n.data,i=vt.empty();let s=new Ce(Ge.comparator);for(let r of e.fields)if(!s.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new Lo(n.key,i,new un(s.toArray()),Bn.none())}}function MT(n,e,t){n instanceof tl?(function(s,r,o){const c=s.value.clone(),l=Bd(s.fieldTransforms,r,o.transformResults);c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof Lo?(function(s,r,o){if(!Mr(s.precondition,r))return void r.convertToUnknownDocument(o.version);const c=Bd(s.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(zp(s)),l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):(function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function Ts(n,e,t,i){return n instanceof tl?(function(r,o,c,l){if(!Mr(r.precondition,o))return c;const h=r.value.clone(),m=Hd(r.fieldTransforms,l,o);return h.setAll(m),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null})(n,e,t,i):n instanceof Lo?(function(r,o,c,l){if(!Mr(r.precondition,o))return c;const h=Hd(r.fieldTransforms,l,o),m=o.data;return m.setAll(zp(r)),m.setAll(h),o.convertToFoundDocument(o.version,m).setHasLocalMutations(),c===null?null:c.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((y=>y.field)))})(n,e,t,i):(function(r,o,c){return Mr(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function Fd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Ti(i,s,((r,o)=>NT(r,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class tl extends el{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Lo extends el{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function zp(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function Bd(n,e,t){const i=new Map;pe(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const r=n[s],o=r.transform,c=e.data.field(r.field);i.set(r.field,LT(o,c,t[s]))}return i}function Hd(n,e,t){const i=new Map;for(const s of n){const r=s.transform,o=t.data.field(s.field);i.set(s.field,$T(r,o,e))}return i}class OT extends el{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class VT{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&MT(r,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Ts(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Ts(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Up();return this.mutations.forEach((s=>{const r=e.get(s.key),o=r.overlayedDocument;let c=this.applyToLocalView(o,r.mutatedFields);c=t.has(s.key)?null:c;const l=jp(o,c);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(Q.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),se())}isEqual(e){return this.batchId===e.batchId&&Ti(this.mutations,e.mutations,((t,i)=>Fd(t,i)))&&Ti(this.baseMutations,e.baseMutations,((t,i)=>Fd(t,i)))}}/**
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
 */class UT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class FT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var be,te;function qp(n){if(n===void 0)return Ht("GRPC error has no .code"),V.UNKNOWN;switch(n){case be.OK:return V.OK;case be.CANCELLED:return V.CANCELLED;case be.UNKNOWN:return V.UNKNOWN;case be.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case be.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case be.INTERNAL:return V.INTERNAL;case be.UNAVAILABLE:return V.UNAVAILABLE;case be.UNAUTHENTICATED:return V.UNAUTHENTICATED;case be.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case be.NOT_FOUND:return V.NOT_FOUND;case be.ALREADY_EXISTS:return V.ALREADY_EXISTS;case be.PERMISSION_DENIED:return V.PERMISSION_DENIED;case be.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case be.ABORTED:return V.ABORTED;case be.OUT_OF_RANGE:return V.OUT_OF_RANGE;case be.UNIMPLEMENTED:return V.UNIMPLEMENTED;case be.DATA_LOSS:return V.DATA_LOSS;default:return J(39323,{code:n})}}(te=be||(be={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function BT(){return new TextEncoder}/**
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
 */const HT=new pn([4294967295,4294967295],0);function jd(n){const e=BT().encode(n),t=new mp;return t.update(e),new Uint8Array(t.digest())}function zd(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new pn([t,i],0),new pn([s,r],0)]}class nl{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new hs(`Invalid padding: ${t}`);if(i<0)throw new hs(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new hs(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new hs(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=pn.fromNumber(this.ge)}ye(e,t,i){let s=e.add(t.multiply(pn.fromNumber(i)));return s.compare(HT)===1&&(s=new pn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=jd(e),[i,s]=zd(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(i,s,r);if(!this.we(o))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new nl(r,s,t);return i.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=jd(e),[i,s]=zd(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(i,s,r);this.be(o)}}be(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class hs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Do{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,zs.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Do(Q.min(),s,new _e(ee),kn(),se())}}class zs{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new zs(i,t,se(),se(),se())}}/**
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
 */class Or{constructor(e,t,i,s){this.Se=e,this.removedTargetIds=t,this.key=i,this.De=s}}class Wp{constructor(e,t){this.targetId=e,this.Ce=t}}class Gp{constructor(e,t,i=Oe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class qd{constructor(){this.ve=0,this.Fe=Wd(),this.Me=Oe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=se(),t=se(),i=se();return this.Fe.forEach(((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:J(38017,{changeType:r})}})),new zs(this.Me,this.xe,e,t,i)}Ke(){this.Oe=!1,this.Fe=Wd()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,pe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class jT{constructor(e){this.Ge=e,this.ze=new Map,this.je=kn(),this.He=vr(),this.Je=vr(),this.Ze=new _e(ee)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.We(),i.Ne||i.Ke(),i.Le(e.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.Qe(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:J(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,i=e.Ce.count,s=this.ot(t);if(s){const r=s.target;if(ec(r))if(i===0){const o=new G(r.path);this.et(t,o,Be.newNoDocument(o,Q.min()))}else pe(i===1,20013,{expectedCount:i});else{const o=this._t(t);if(o!==i){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=t;let o,c;try{o=In(i).toUint8Array()}catch(l){if(l instanceof kp)return Kn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new nl(o,s,r)}catch(l){return Kn(l instanceof hs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let s=0;return i.forEach((r=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(c)||(this.et(t,r,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((r,o)=>{const c=this.ot(o);if(c){if(r.current&&ec(c.target)){const l=new G(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,Be.newNoDocument(l,e))}r.Be&&(t.set(o,r.ke()),r.Ke())}}));let i=se();this.Je.forEach(((r,o)=>{let c=!0;o.forEachWhile((l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(i=i.add(r))})),this.je.forEach(((r,o)=>o.setReadTime(e)));const s=new Do(e,t,this.Ze,this.je,i);return this.je=kn(),this.He=vr(),this.Je=vr(),this.Ze=new _e(ee),s}Ye(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,i),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new qd,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new Ce(ee),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new Ce(ee),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||B("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new qd),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function vr(){return new _e(G.comparator)}function Wd(){return new _e(G.comparator)}const zT={asc:"ASCENDING",desc:"DESCENDING"},qT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},WT={and:"AND",or:"OR"};class GT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function sc(n,e){return n.useProto3Json||Co(e)?e:{value:e}}function KT(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function QT(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function fi(n){return pe(!!n,49232),Q.fromTimestamp((function(t){const i=Tn(t);return new Te(i.seconds,i.nanos)})(n))}function JT(n,e){return rc(n,e).canonicalString()}function rc(n,e){const t=(function(s){return new fe(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Kp(n){const e=fe.fromString(n);return pe(Zp(e),10190,{key:e.toString()}),e}function Ia(n,e){const t=Kp(e);if(t.get(1)!==n.databaseId.projectId)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new G(Jp(t))}function Qp(n,e){return JT(n.databaseId,e)}function YT(n){const e=Kp(n);return e.length===4?fe.emptyPath():Jp(e)}function Gd(n){return new fe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Jp(n){return pe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function XT(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:J(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=(function(h,m){return h.useProto3Json?(pe(m===void 0||typeof m=="string",58123),Oe.fromBase64String(m||"")):(pe(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),Oe.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(h){const m=h.code===void 0?V.UNKNOWN:qp(h.code);return new z(m,h.message||"")})(o);t=new Gp(i,s,r,c||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Ia(n,i.document.name),r=fi(i.document.updateTime),o=i.document.createTime?fi(i.document.createTime):Q.min(),c=new vt({mapValue:{fields:i.document.fields}}),l=Be.newFoundDocument(s,r,o,c),h=i.targetIds||[],m=i.removedTargetIds||[];t=new Or(h,m,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Ia(n,i.document),r=i.readTime?fi(i.readTime):Q.min(),o=Be.newNoDocument(s,r),c=i.removedTargetIds||[];t=new Or([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Ia(n,i.document),r=i.removedTargetIds||[];t=new Or([],r,s,null)}else{if(!("filter"in e))return J(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new FT(s,r),c=i.targetId;t=new Wp(c,o)}}return t}function ZT(n,e){return{documents:[Qp(n,e.path)]}}function e0(n,e){const t={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Qp(n,s);const r=(function(h){if(h.length!==0)return Xp(xt.create(h,"and"))})(e.filters);r&&(t.structuredQuery.where=r);const o=(function(h){if(h.length!==0)return h.map((m=>(function(w){return{field:ai(w.field),direction:i0(w.dir)}})(m)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=sc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:t,parent:s}}function t0(n){let e=YT(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){pe(i===1,65062);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let r=[];t.where&&(r=(function(y){const w=Yp(y);return w instanceof xt&&$p(w)?w.getFilters():[w]})(t.where));let o=[];t.orderBy&&(o=(function(y){return y.map((w=>(function(A){return new ro(ci(A.field),(function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(A.direction))})(w)))})(t.orderBy));let c=null;t.limit&&(c=(function(y){let w;return w=typeof y=="object"?y.value:y,Co(w)?null:w})(t.limit));let l=null;t.startAt&&(l=(function(y){const w=!!y.before,E=y.values||[];return new so(E,w)})(t.startAt));let h=null;return t.endAt&&(h=(function(y){const w=!y.before,E=y.values||[];return new so(E,w)})(t.endAt)),wT(e,s,o,r,c,"F",l,h)}function n0(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Yp(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=ci(t.unaryFilter.field);return Se.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=ci(t.unaryFilter.field);return Se.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ci(t.unaryFilter.field);return Se.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ci(t.unaryFilter.field);return Se.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return J(61313);default:return J(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Se.create(ci(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return J(58110);default:return J(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return xt.create(t.compositeFilter.filters.map((i=>Yp(i))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return J(1026)}})(t.compositeFilter.op))})(n):J(30097,{filter:n})}function i0(n){return zT[n]}function s0(n){return qT[n]}function r0(n){return WT[n]}function ai(n){return{fieldPath:n.canonicalString()}}function ci(n){return Ge.fromServerFormat(n.fieldPath)}function Xp(n){return n instanceof Se?(function(t){if(t.op==="=="){if(Dd(t.value))return{unaryFilter:{field:ai(t.field),op:"IS_NAN"}};if(Ld(t.value))return{unaryFilter:{field:ai(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Dd(t.value))return{unaryFilter:{field:ai(t.field),op:"IS_NOT_NAN"}};if(Ld(t.value))return{unaryFilter:{field:ai(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ai(t.field),op:s0(t.op),value:t.value}}})(n):n instanceof xt?(function(t){const i=t.getFilters().map((s=>Xp(s)));return i.length===1?i[0]:{compositeFilter:{op:r0(t.op),filters:i}}})(n):J(54877,{filter:n})}function Zp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class dn{constructor(e,t,i,s,r=Q.min(),o=Q.min(),c=Oe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new dn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new dn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class o0{constructor(e){this.yt=e}}function a0(n){const e=t0({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?tc(e,e.limit,"L"):e}/**
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
 */class c0{constructor(){this.Sn=new l0}addToCollectionParentIndex(e,t){return this.Sn.add(t),L.resolve()}getCollectionParents(e,t){return L.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return L.resolve()}deleteFieldIndex(e,t){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,t){return L.resolve()}getDocumentsMatchingTarget(e,t){return L.resolve(null)}getIndexType(e,t){return L.resolve(0)}getFieldIndexes(e,t){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,t){return L.resolve(bn.min())}getMinOffsetFromCollectionGroup(e,t){return L.resolve(bn.min())}updateCollectionGroup(e,t,i){return L.resolve()}updateIndexEntries(e,t){return L.resolve()}}class l0{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new Ce(fe.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Ce(fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Kd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},em=41943040;class Ke{static withCacheSize(e){return new Ke(e,Ke.DEFAULT_COLLECTION_PERCENTILE,Ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */Ke.DEFAULT_COLLECTION_PERCENTILE=10,Ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ke.DEFAULT=new Ke(em,Ke.DEFAULT_COLLECTION_PERCENTILE,Ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ke.DISABLED=new Ke(-1,0,0);/**
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
 */class ki{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new ki(0)}static ar(){return new ki(-1)}}/**
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
 */const Qd="LruGarbageCollector",u0=1048576;function Jd([n,e],[t,i]){const s=ee(n,t);return s===0?ee(e,i):s}class d0{constructor(e){this.Pr=e,this.buffer=new Ce(Jd),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Jd(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class h0{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){B(Qd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Oi(t)?B(Qd,"Ignoring IndexedDB error during garbage collection: ",t):await ko(t)}await this.Ar(3e5)}))}}class f0{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return L.resolve(So.ce);const i=new d0(t);return this.Vr.forEachTarget(e,(s=>i.Er(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>i.Er(s))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Kd)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Kd):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let i,s,r,o,c,l,h;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((y=>(y>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),s=this.params.maximumSequenceNumbersToCollect):s=y,o=Date.now(),this.nthSequenceNumber(e,s)))).next((y=>(i=y,c=Date.now(),this.removeTargets(e,i,t)))).next((y=>(r=y,l=Date.now(),this.removeOrphanedDocuments(e,i)))).next((y=>(h=Date.now(),ri()<=X.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-m}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${r} targets in `+(l-c)+`ms
	Removed ${y} documents in `+(h-l)+`ms
Total Duration: ${h-m}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:y}))))}}function p0(n,e){return new f0(n,e)}/**
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
 */class m0{constructor(){this.changes=new Zn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Be.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?L.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class g0{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class y0{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(i=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(i!==null&&Ts(i.mutation,s,un.empty(),Te.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,se()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=se()){const s=Vn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,i).next((r=>{let o=ds();return r.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const i=Vn();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,se())))}populateOverlays(e,t,i){const s=[];return i.forEach((r=>{t.has(r)||s.push(r)})),this.documentOverlayCache.getOverlays(e,s).next((r=>{r.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,i,s){let r=kn();const o=bs(),c=(function(){return bs()})();return t.forEach(((l,h)=>{const m=i.get(h.key);s.has(h.key)&&(m===void 0||m.mutation instanceof Lo)?r=r.insert(h.key,h):m!==void 0?(o.set(h.key,m.mutation.getFieldMask()),Ts(m.mutation,h,m.mutation.getFieldMask(),Te.now())):o.set(h.key,un.empty())})),this.recalculateAndSaveOverlays(e,r).next((l=>(l.forEach(((h,m)=>o.set(h,m))),t.forEach(((h,m)=>c.set(h,new g0(m,o.get(h)??null)))),c)))}recalculateAndSaveOverlays(e,t){const i=bs();let s=new _e(((o,c)=>o-c)),r=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((l=>{const h=t.get(l);if(h===null)return;let m=i.get(l)||un.empty();m=c.applyToLocalView(h,m),i.set(l,m);const y=(s.get(c.batchId)||se()).add(l);s=s.insert(c.batchId,y)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,m=l.value,y=Up();m.forEach((w=>{if(!r.has(w)){const E=jp(t.get(w),i.get(w));E!==null&&y.set(w,E),r=r.add(w)}})),o.push(this.documentOverlayCache.saveOverlays(e,h,y))}return L.waitFor(o)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,s){return _T(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):bT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,s):this.getDocumentsMatchingCollectionQuery(e,t,i,s)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next((r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-r.size):L.resolve(Vn());let c=As,l=r;return o.next((h=>L.forEach(h,((m,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),r.get(m)?L.resolve():this.remoteDocumentCache.getEntry(e,m).next((w=>{l=l.insert(m,w)}))))).next((()=>this.populateOverlays(e,h,r))).next((()=>this.computeViews(e,l,h,se()))).next((m=>({batchId:c,changes:ST(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new G(t)).next((i=>{let s=ds();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,s){const r=t.collectionGroup;let o=ds();return this.indexManager.getCollectionParents(e,r).next((c=>L.forEach(c,(l=>{const h=(function(y,w){return new Ro(w,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)})(t,l.child(r));return this.getDocumentsMatchingCollectionQuery(e,h,i,s).next((m=>{m.forEach(((y,w)=>{o=o.insert(y,w)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,r,s)))).next((o=>{r.forEach(((l,h)=>{const m=h.getKey();o.get(m)===null&&(o=o.insert(m,Be.newInvalidDocument(m)))}));let c=ds();return o.forEach(((l,h)=>{const m=r.get(l);m!==void 0&&Ts(m.mutation,h,un.empty(),Te.now()),Po(t,h)&&(c=c.insert(l,h))})),c}))}}/**
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
 */class v0{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return L.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:fi(s.createTime)}})(t)),L.resolve()}getNamedQuery(e,t){return L.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(s){return{name:s.name,query:a0(s.bundledQuery),readTime:fi(s.readTime)}})(t)),L.resolve()}}/**
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
 */class w0{constructor(){this.overlays=new _e(G.comparator),this.Lr=new Map}getOverlay(e,t){return L.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Vn();return L.forEach(t,(s=>this.getOverlay(e,s).next((r=>{r!==null&&i.set(s,r)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((s,r)=>{this.bt(e,t,r)})),L.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.Lr.get(i);return s!==void 0&&(s.forEach((r=>this.overlays=this.overlays.remove(r))),this.Lr.delete(i)),L.resolve()}getOverlaysForCollection(e,t,i){const s=Vn(),r=t.length+1,o=new G(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let r=new _e(((h,m)=>h-m));const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>i){let m=r.get(h.largestBatchId);m===null&&(m=Vn(),r=r.insert(h.largestBatchId,m)),m.set(h.getKey(),h)}}const c=Vn(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,m)=>c.set(h,m))),!(c.size()>=s)););return L.resolve(c)}bt(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(i.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new UT(t,i));let r=this.Lr.get(t);r===void 0&&(r=se(),this.Lr.set(t,r)),this.Lr.set(t,r.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class _0{constructor(){this.sessionToken=Oe.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,L.resolve()}}/**
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
 */class il{constructor(){this.kr=new Ce(Pe.Kr),this.qr=new Ce(Pe.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const i=new Pe(e,t);this.kr=this.kr.add(i),this.qr=this.qr.add(i)}$r(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new Pe(e,t))}Qr(e,t){e.forEach((i=>this.removeReference(i,t)))}Gr(e){const t=new G(new fe([])),i=new Pe(t,e),s=new Pe(t,e+1),r=[];return this.qr.forEachInRange([i,s],(o=>{this.Wr(o),r.push(o.key)})),r}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new G(new fe([])),i=new Pe(t,e),s=new Pe(t,e+1);let r=se();return this.qr.forEachInRange([i,s],(o=>{r=r.add(o.key)})),r}containsKey(e){const t=new Pe(e,0),i=this.kr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Pe{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return G.comparator(e.key,t.key)||ee(e.Hr,t.Hr)}static Ur(e,t){return ee(e.Hr,t.Hr)||G.comparator(e.key,t.key)}}/**
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
 */class b0{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new Ce(Pe.Kr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const r=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new VT(r,t,i,s);this.mutationQueue.push(o);for(const c of s)this.Jr=this.Jr.add(new Pe(c.key,r)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,t){return L.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.Xr(i),r=s<0?0:s;return L.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?Yb:this.Yn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Pe(t,0),s=new Pe(t,Number.POSITIVE_INFINITY),r=[];return this.Jr.forEachInRange([i,s],(o=>{const c=this.Zr(o.Hr);r.push(c)})),L.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Ce(ee);return t.forEach((s=>{const r=new Pe(s,0),o=new Pe(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([r,o],(c=>{i=i.add(c.Hr)}))})),L.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;G.isDocumentKey(r)||(r=r.child(""));const o=new Pe(new G(r),0);let c=new Ce(ee);return this.Jr.forEachWhile((l=>{const h=l.key.path;return!!i.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Hr)),!0)}),o),L.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((i=>{const s=this.Zr(i);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){pe(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Jr;return L.forEach(t.mutations,(s=>{const r=new Pe(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Jr=i}))}nr(e){}containsKey(e,t){const i=new Pe(t,0),s=this.Jr.firstAfterOrEqual(i);return L.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class T0{constructor(e){this.ti=e,this.docs=(function(){return new _e(G.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),r=s?s.size:0,o=this.ti(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return L.resolve(i?i.document.mutableCopy():Be.newInvalidDocument(t))}getEntries(e,t){let i=kn();return t.forEach((s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Be.newInvalidDocument(s))})),L.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let r=kn();const o=t.path,c=new G(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:m}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Gb(Wb(m),i)<=0||(s.has(m.key)||Po(t,m))&&(r=r.insert(m.key,m.mutableCopy()))}return L.resolve(r)}getAllFromCollectionGroup(e,t,i,s){J(9500)}ni(e,t){return L.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new I0(this)}getSize(e){return L.resolve(this.size)}}class I0 extends m0{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(i)})),L.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class E0{constructor(e){this.persistence=e,this.ri=new Zn((t=>Yc(t)),Xc),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.ii=0,this.si=new il,this.targetCount=0,this.oi=ki._r()}forEachTarget(e,t){return this.ri.forEach(((i,s)=>t(s))),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.ii&&(this.ii=t),L.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new ki(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,L.resolve()}updateTargetData(e,t){return this.lr(t),L.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.ri.forEach(((o,c)=>{c.sequenceNumber<=t&&i.get(c.targetId)===null&&(this.ri.delete(o),r.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),L.waitFor(r).next((()=>s))}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,t){const i=this.ri.get(t)||null;return L.resolve(i)}addMatchingKeys(e,t,i){return this.si.$r(t,i),L.resolve()}removeMatchingKeys(e,t,i){this.si.Qr(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach((o=>{r.push(s.markPotentiallyOrphaned(e,o))})),L.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),L.resolve()}getMatchingKeysForTargetId(e,t){const i=this.si.jr(t);return L.resolve(i)}containsKey(e,t){return L.resolve(this.si.containsKey(t))}}/**
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
 */class tm{constructor(e,t){this._i={},this.overlays={},this.ai=new So(0),this.ui=!1,this.ui=!0,this.ci=new _0,this.referenceDelegate=e(this),this.li=new E0(this),this.indexManager=new c0,this.remoteDocumentCache=(function(s){return new T0(s)})((i=>this.referenceDelegate.hi(i))),this.serializer=new o0(t),this.Pi=new v0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new w0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this._i[e.toKey()];return i||(i=new b0(t,this.referenceDelegate),this._i[e.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,i){B("MemoryPersistence","Starting transaction:",e);const s=new k0(this.ai.next());return this.referenceDelegate.Ti(),i(s).next((r=>this.referenceDelegate.Ii(s).next((()=>r)))).toPromise().then((r=>(s.raiseOnCommittedEvent(),r)))}Ei(e,t){return L.or(Object.values(this._i).map((i=>()=>i.containsKey(e,t))))}}class k0 extends Qb{constructor(e){super(),this.currentSequenceNumber=e}}class sl{constructor(e){this.persistence=e,this.Ri=new il,this.Ai=null}static Vi(e){return new sl(e)}get di(){if(this.Ai)return this.Ai;throw J(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.di.delete(i.toString()),L.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.di.add(i.toString()),L.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),L.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((s=>this.di.add(s.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((r=>this.di.add(r.toString())))})).next((()=>i.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.di,(i=>{const s=G.fromPath(i);return this.mi(e,s).next((r=>{r||t.removeEntry(s,Q.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((i=>{i?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return L.or([()=>L.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class co{constructor(e,t){this.persistence=e,this.fi=new Zn((i=>Xb(i.path)),((i,s)=>i.isEqual(s))),this.garbageCollector=p0(this,t)}static Vi(e,t){return new co(e,t)}Ti(){}Ii(e){return L.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((s=>i+s))))}pr(e){let t=0;return this.mr(e,(i=>{t++})).next((()=>t))}mr(e,t){return L.forEach(this.fi,((i,s)=>this.wr(e,i,s).next((r=>r?L.resolve():t(s)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.ni(e,(o=>this.wr(e,o,t).next((c=>{c||(i++,r.removeEntry(o,Q.min()))})))).next((()=>r.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),L.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),L.resolve()}removeReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),L.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Nr(e.data.value)),t}wr(e,t,i){return L.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return L.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class rl{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.Ts=i,this.Is=s}static Es(e,t){let i=se(),s=se();for(const r of t.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new rl(e,t.fromCache,i,s)}}/**
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
 */class S0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class C0{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Vy()?8:Jb(He())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,s){const r={result:null};return this.gs(e,t).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ps(e,t,s,i).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new S0;return this.ys(e,t,o).next((c=>{if(r.result=c,this.As)return this.ws(e,t,o,c.size)}))})).next((()=>r.result))}ws(e,t,i,s){return i.documentReadCount<this.Vs?(ri()<=X.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",oi(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(ri()<=X.DEBUG&&B("QueryEngine","Query:",oi(t),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.ds*s?(ri()<=X.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",oi(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,St(t))):L.resolve())}gs(e,t){if(Vd(t))return L.resolve(null);let i=St(t);return this.indexManager.getIndexType(e,i).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=tc(t,null,"F"),i=St(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((r=>{const o=se(...r);return this.fs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,i).next((l=>{const h=this.bs(t,c);return this.Ss(t,h,o,l.readTime)?this.gs(e,tc(t,null,"F")):this.Ds(e,h,t,l)}))))})))))}ps(e,t,i,s){return Vd(t)||s.isEqual(Q.min())?L.resolve(null):this.fs.getDocuments(e,i).next((r=>{const o=this.bs(t,r);return this.Ss(t,o,i,s)?L.resolve(null):(ri()<=X.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),oi(t)),this.Ds(e,o,t,qb(s,As)).next((c=>c)))}))}bs(e,t){let i=new Ce(Op(e));return t.forEach(((s,r)=>{Po(e,r)&&(i=i.add(r))})),i}Ss(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ys(e,t,i){return ri()<=X.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",oi(t)),this.fs.getDocumentsMatchingQuery(e,t,bn.min(),i)}Ds(e,t,i,s){return this.fs.getDocumentsMatchingQuery(e,i,s).next((r=>(t.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
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
 */const ol="LocalStore",A0=3e8;class R0{constructor(e,t,i,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new _e(ee),this.Fs=new Zn((r=>Yc(r)),Xc),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(i)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new y0(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function x0(n,e,t,i){return new R0(n,e,t,i)}async function nm(n,e){const t=ie(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next((r=>(s=r,t.Os(e),t.mutationQueue.getAllMutationBatches(i)))).next((r=>{const o=[],c=[];let l=se();for(const h of s){o.push(h.batchId);for(const m of h.mutations)l=l.add(m.key)}for(const h of r){c.push(h.batchId);for(const m of h.mutations)l=l.add(m.key)}return t.localDocuments.getDocuments(i,l).next((h=>({Ns:h,removedBatchIds:o,addedBatchIds:c})))}))}))}function im(n){const e=ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function P0(n,e){const t=ie(n),i=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const c=[];e.targetChanges.forEach(((m,y)=>{const w=s.get(y);if(!w)return;c.push(t.li.removeMatchingKeys(r,m.removedDocuments,y).next((()=>t.li.addMatchingKeys(r,m.addedDocuments,y))));let E=w.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(y)!==null?E=E.withResumeToken(Oe.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):m.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(m.resumeToken,i)),s=s.insert(y,E),(function(P,$,U){return P.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=A0?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0})(w,E,m)&&c.push(t.li.updateTargetData(r,E))}));let l=kn(),h=se();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(r,m))})),c.push($0(r,o,e.documentUpdates).next((m=>{l=m.Bs,h=m.Ls}))),!i.isEqual(Q.min())){const m=t.li.getLastRemoteSnapshotVersion(r).next((y=>t.li.setTargetsMetadata(r,r.currentSequenceNumber,i)));c.push(m)}return L.waitFor(c).next((()=>o.apply(r))).next((()=>t.localDocuments.getLocalViewOfDocuments(r,l,h))).next((()=>l))})).then((r=>(t.vs=s,r)))}function $0(n,e,t){let i=se(),s=se();return t.forEach((r=>i=i.add(r))),e.getEntries(n,i).next((r=>{let o=kn();return t.forEach(((c,l)=>{const h=r.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(Q.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):B(ol,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)})),{Bs:o,Ls:s}}))}function L0(n,e){const t=ie(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let s;return t.li.getTargetData(i,e).next((r=>r?(s=r,L.resolve(s)):t.li.allocateTargetId(i).next((o=>(s=new dn(e,o,"TargetPurposeListen",i.currentSequenceNumber),t.li.addTargetData(i,s).next((()=>s)))))))})).then((i=>{const s=t.vs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(i.targetId,i),t.Fs.set(e,i.targetId)),i}))}async function oc(n,e,t){const i=ie(n),s=i.vs.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,(o=>i.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Oi(o))throw o;B(ol,`Failed to update sequence numbers for target ${e}: ${o}`)}i.vs=i.vs.remove(e),i.Fs.delete(s.target)}function Yd(n,e,t){const i=ie(n);let s=Q.min(),r=se();return i.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,h,m){const y=ie(l),w=y.Fs.get(m);return w!==void 0?L.resolve(y.vs.get(w)):y.li.getTargetData(h,m)})(i,o,St(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(o,c.targetId).next((l=>{r=l}))})).next((()=>i.Cs.getDocumentsMatchingQuery(o,e,t?s:Q.min(),t?r:se()))).next((c=>(D0(i,IT(e),c),{documents:c,ks:r})))))}function D0(n,e,t){let i=n.Ms.get(e)||Q.min();t.forEach(((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)})),n.Ms.set(e,i)}class Xd{constructor(){this.activeTargetIds=RT()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class N0{constructor(){this.vo=new Xd,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,i){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Xd,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class M0{Mo(e){}shutdown(){}}/**
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
 */const Zd="ConnectivityMonitor";class eh{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){B(Zd,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){B(Zd,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let wr=null;function ac(){return wr===null?wr=(function(){return 268435456+Math.round(2147483648*Math.random())})():wr++,"0x"+wr.toString(16)}/**
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
 */const Ea="RestConnection",O0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class V0{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${i}/databases/${s}`,this.$o=this.databaseId.database===io?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(e,t,i,s,r){const o=ac(),c=this.Qo(e,t.toUriEncodedString());B(Ea,`Sending RPC '${e}' ${o}:`,c,i);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,r);const{host:h}=new URL(c),m=Cn(h);return this.zo(e,c,l,i,m).then((y=>(B(Ea,`Received RPC '${e}' ${o}: `,y),y)),(y=>{throw Kn(Ea,`RPC '${e}' ${o} failed with error: `,y,"url: ",c,"request:",i),y}))}jo(e,t,i,s,r,o){return this.Wo(e,t,i,s,r)}Go(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Mi})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,r)=>e[r]=s)),i&&i.headers.forEach(((s,r)=>e[r]=s))}Qo(e,t){const i=O0[e];let s=`${this.qo}/v1/${t}:${i}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class U0{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Ue="WebChannelConnection",ss=(n,e,t)=>{n.listen(e,(i=>{try{t(i)}catch(s){setTimeout((()=>{throw s}),0)}}))};class pi extends V0{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!pi.c_){const e=wp();ss(e,vp.STAT_EVENT,(t=>{t.stat===Ga.PROXY?B(Ue,"STAT_EVENT: detected buffering proxy"):t.stat===Ga.NOPROXY&&B(Ue,"STAT_EVENT: detected no buffering proxy")})),pi.c_=!0}}zo(e,t,i,s,r){const o=ac();return new Promise(((c,l)=>{const h=new gp;h.setWithCredentials(!0),h.listenOnce(yp.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Lr.NO_ERROR:const y=h.getResponseJson();B(Ue,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(y)),c(y);break;case Lr.TIMEOUT:B(Ue,`RPC '${e}' ${o} timed out`),l(new z(V.DEADLINE_EXCEEDED,"Request time out"));break;case Lr.HTTP_ERROR:const w=h.getStatus();if(B(Ue,`RPC '${e}' ${o} failed with status:`,w,"response text:",h.getResponseText()),w>0){let E=h.getResponseJson();Array.isArray(E)&&(E=E[0]);const A=E==null?void 0:E.error;if(A&&A.status&&A.message){const P=(function(U){const N=U.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(N)>=0?N:V.UNKNOWN})(A.status);l(new z(P,A.message))}else l(new z(V.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new z(V.UNAVAILABLE,"Connection failed."));break;default:J(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{B(Ue,`RPC '${e}' ${o} completed.`)}}));const m=JSON.stringify(s);B(Ue,`RPC '${e}' ${o} sending request:`,s),h.send(t,"POST",m,i,15)}))}T_(e,t,i){const s=ac(),r=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,i),c.encodeInitMessageHeaders=!0;const h=r.join("");B(Ue,`Creating RPC '${e}' stream ${s}: ${h}`,c);const m=o.createWebChannel(h,c);this.I_(m);let y=!1,w=!1;const E=new U0({Ho:A=>{w?B(Ue,`Not sending because RPC '${e}' stream ${s} is closed:`,A):(y||(B(Ue,`Opening RPC '${e}' stream ${s} transport.`),m.open(),y=!0),B(Ue,`RPC '${e}' stream ${s} sending:`,A),m.send(A))},Jo:()=>m.close()});return ss(m,us.EventType.OPEN,(()=>{w||(B(Ue,`RPC '${e}' stream ${s} transport opened.`),E.i_())})),ss(m,us.EventType.CLOSE,(()=>{w||(w=!0,B(Ue,`RPC '${e}' stream ${s} transport closed`),E.o_(),this.E_(m))})),ss(m,us.EventType.ERROR,(A=>{w||(w=!0,Kn(Ue,`RPC '${e}' stream ${s} transport errored. Name:`,A.name,"Message:",A.message),E.o_(new z(V.UNAVAILABLE,"The operation could not be completed")))})),ss(m,us.EventType.MESSAGE,(A=>{var P;if(!w){const $=A.data[0];pe(!!$,16349);const U=$,N=(U==null?void 0:U.error)||((P=U[0])==null?void 0:P.error);if(N){B(Ue,`RPC '${e}' stream ${s} received error:`,N);const M=N.status;let D=(function(b){const v=be[b];if(v!==void 0)return qp(v)})(M),F=N.message;M==="NOT_FOUND"&&F.includes("database")&&F.includes("does not exist")&&F.includes(this.databaseId.database)&&Kn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),D===void 0&&(D=V.INTERNAL,F="Unknown error status: "+M+" with message "+N.message),w=!0,E.o_(new z(D,F)),m.close()}else B(Ue,`RPC '${e}' stream ${s} received:`,$),E.__($)}})),pi.u_(),setTimeout((()=>{E.s_()}),0),E}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,i){super.Go(e,t,i),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return _p()}}/**
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
 */function F0(n){return new pi(n)}function ka(){return typeof document<"u"?document:null}/**
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
 */function sm(n){return new GT(n,!0)}/**
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
 */pi.c_=!1;class rm{constructor(e,t,i=1e3,s=1.5,r=6e4){this.Ci=e,this.timerId=t,this.R_=i,this.A_=s,this.V_=r,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-i);s>0&&B("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const th="PersistentStream";class B0{constructor(e,t,i,s,r,o,c,l){this.Ci=e,this.b_=i,this.S_=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new rm(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(Ht(t.toString()),Ht("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,s])=>{this.D_===t&&this.G_(i,s)}),(i=>{e((()=>{const s=new z(V.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(s)}))}))}G_(e,t){const i=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.Yo((()=>{i((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{i((()=>this.z_(s)))})),this.stream.onMessage((s=>{i((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return B(th,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(B(th,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class H0 extends B0{constructor(e,t,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=XT(this.serializer,e),i=(function(r){if(!("targetChange"in r))return Q.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?fi(o.readTime):Q.min()})(e);return this.listener.J_(t,i)}Z_(e){const t={};t.database=Gd(this.serializer),t.addTarget=(function(r,o){let c;const l=o.target;if(c=ec(l)?{documents:ZT(r,l)}:{query:e0(r,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=QT(r,o.resumeToken);const h=sc(r,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(Q.min())>0){c.readTime=KT(r,o.snapshotVersion.toTimestamp());const h=sc(r,o.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const i=n0(this.serializer,e);i&&(t.labels=i),this.K_(t)}X_(e){const t={};t.database=Gd(this.serializer),t.removeTarget=e,this.K_(t)}}/**
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
 */class j0{}class z0 extends j0{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Wo(e,rc(t,i),s,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new z(V.UNKNOWN,r.toString())}))}jo(e,t,i,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.jo(e,rc(t,i),s,o,c,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(V.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function q0(n,e,t,i){return new z0(n,e,t,i)}class W0{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ht(t),this.aa=!1):B("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Si="RemoteStore";class G0{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=r,this.Aa.Mo((o=>{i.enqueueAndForget((async()=>{Ws(this)&&(B(Si,"Restarting streams for network reachability change."),await(async function(l){const h=ie(l);h.Ea.add(4),await qs(h),h.Va.set("Unknown"),h.Ea.delete(4),await No(h)})(this))}))})),this.Va=new W0(i,s)}}async function No(n){if(Ws(n))for(const e of n.Ra)await e(!0)}async function qs(n){for(const e of n.Ra)await e(!1)}function om(n,e){const t=ie(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),ul(t)?ll(t):Vi(t).O_()&&cl(t,e))}function al(n,e){const t=ie(n),i=Vi(t);t.Ia.delete(e),i.O_()&&am(t,e),t.Ia.size===0&&(i.O_()?i.L_():Ws(t)&&t.Va.set("Unknown"))}function cl(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Vi(n).Z_(e)}function am(n,e){n.da.$e(e),Vi(n).X_(e)}function ll(n){n.da=new jT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Vi(n).start(),n.Va.ua()}function ul(n){return Ws(n)&&!Vi(n).x_()&&n.Ia.size>0}function Ws(n){return ie(n).Ea.size===0}function cm(n){n.da=void 0}async function K0(n){n.Va.set("Online")}async function Q0(n){n.Ia.forEach(((e,t)=>{cl(n,e)}))}async function J0(n,e){cm(n),ul(n)?(n.Va.ha(e),ll(n)):n.Va.set("Unknown")}async function Y0(n,e,t){if(n.Va.set("Online"),e instanceof Gp&&e.state===2&&e.cause)try{await(async function(s,r){const o=r.cause;for(const c of r.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.da.removeTarget(c))})(n,e)}catch(i){B(Si,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await nh(n,i)}else if(e instanceof Or?n.da.Xe(e):e instanceof Wp?n.da.st(e):n.da.tt(e),!t.isEqual(Q.min()))try{const i=await im(n.localStore);t.compareTo(i)>=0&&await(function(r,o){const c=r.da.Tt(o);return c.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const m=r.Ia.get(h);m&&r.Ia.set(h,m.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,h)=>{const m=r.Ia.get(l);if(!m)return;r.Ia.set(l,m.withResumeToken(Oe.EMPTY_BYTE_STRING,m.snapshotVersion)),am(r,l);const y=new dn(m.target,l,h,m.sequenceNumber);cl(r,y)})),r.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(i){B(Si,"Failed to raise snapshot:",i),await nh(n,i)}}async function nh(n,e,t){if(!Oi(e))throw e;n.Ea.add(1),await qs(n),n.Va.set("Offline"),t||(t=()=>im(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{B(Si,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await No(n)}))}async function ih(n,e){const t=ie(n);t.asyncQueue.verifyOperationInProgress(),B(Si,"RemoteStore received new credentials");const i=Ws(t);t.Ea.add(3),await qs(t),i&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await No(t)}async function X0(n,e){const t=ie(n);e?(t.Ea.delete(2),await No(t)):e||(t.Ea.add(2),await qs(t),t.Va.set("Unknown"))}function Vi(n){return n.ma||(n.ma=(function(t,i,s){const r=ie(t);return r.sa(),new H0(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Zo:K0.bind(null,n),Yo:Q0.bind(null,n),t_:J0.bind(null,n),J_:Y0.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),ul(n)?ll(n):n.Va.set("Unknown")):(await n.ma.stop(),cm(n))}))),n.ma}/**
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
 */class dl{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new hi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,r){const o=Date.now()+i,c=new dl(e,t,o,s,r);return c.start(i),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lm(n,e){if(Ht("AsyncQueue",`${e}: ${n}`),Oi(n))return new z(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class mi{static emptySet(e){return new mi(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||G.comparator(t.key,i.key):(t,i)=>G.comparator(t.key,i.key),this.keyedMap=ds(),this.sortedSet=new _e(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof mi)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new mi;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class sh{constructor(){this.ga=new _e(G.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):J(63341,{Vt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Ci{constructor(e,t,i,s,r,o,c,l,h){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,i,s,r){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new Ci(e,t,mi.emptySet(t),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
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
 */class Z0{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class eI{constructor(){this.queries=rh(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const s=ie(t),r=s.queries;s.queries=rh(),r.forEach(((o,c)=>{for(const l of c.ba)l.onError(i)}))})(this,new z(V.ABORTED,"Firestore shutting down"))}}function rh(){return new Zn((n=>Mp(n)),xo)}async function tI(n,e){const t=ie(n);let i=3;const s=e.query;let r=t.queries.get(s);r?!r.Sa()&&e.Da()&&(i=2):(r=new Z0,i=e.Da()?0:1);try{switch(i){case 0:r.wa=await t.onListen(s,!0);break;case 1:r.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=lm(o,`Initialization of query '${oi(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,r),r.ba.push(e),e.va(t.onlineState),r.wa&&e.Fa(r.wa)&&hl(t)}async function nI(n,e){const t=ie(n),i=e.query;let s=3;const r=t.queries.get(i);if(r){const o=r.ba.indexOf(e);o>=0&&(r.ba.splice(o,1),r.ba.length===0?s=e.Da()?0:1:!r.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function iI(n,e){const t=ie(n);let i=!1;for(const s of e){const r=s.query,o=t.queries.get(r);if(o){for(const c of o.ba)c.Fa(s)&&(i=!0);o.wa=s}}i&&hl(t)}function sI(n,e,t){const i=ie(n),s=i.queries.get(e);if(s)for(const r of s.ba)r.onError(t);i.queries.delete(e)}function hl(n){n.Ca.forEach((e=>{e.next()}))}var cc,oh;(oh=cc||(cc={})).Ma="default",oh.Cache="cache";class rI{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Ci(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.Ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Ci.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==cc.Cache}}/**
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
 */class um{constructor(e){this.key=e}}class dm{constructor(e){this.key=e}}class oI{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=se(),this.mutatedKeys=se(),this.eu=Op(e),this.tu=new mi(this.eu)}get nu(){return this.Za}ru(e,t){const i=t?t.iu:new sh,s=t?t.tu:this.tu;let r=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((m,y)=>{const w=s.get(m),E=Po(this.query,y)?y:null,A=!!w&&this.mutatedKeys.has(w.key),P=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let $=!1;w&&E?w.data.isEqual(E.data)?A!==P&&(i.track({type:3,doc:E}),$=!0):this.su(w,E)||(i.track({type:2,doc:E}),$=!0,(l&&this.eu(E,l)>0||h&&this.eu(E,h)<0)&&(c=!0)):!w&&E?(i.track({type:0,doc:E}),$=!0):w&&!E&&(i.track({type:1,doc:w}),$=!0,(l||h)&&(c=!0)),$&&(E?(o=o.add(E),r=P?r.add(m):r.delete(m)):(o=o.delete(m),r=r.delete(m)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const m=this.query.limitType==="F"?o.last():o.first();o=o.delete(m.key),r=r.delete(m.key),i.track({type:1,doc:m})}return{tu:o,iu:i,Ss:c,mutatedKeys:r}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,s){const r=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((m,y)=>(function(E,A){const P=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J(20277,{Vt:$})}};return P(E)-P(A)})(m.type,y.type)||this.eu(m.doc,y.doc))),this.ou(i),s=s??!1;const c=t&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,h=l!==this.Xa;return this.Xa=l,o.length!==0||h?{snapshot:new Ci(this.query,e.tu,r,o,e.mutatedKeys,l===0,h,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new sh,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=se(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Ya=this.Ya.add(i.key))}));const t=[];return e.forEach((i=>{this.Ya.has(i)||t.push(new dm(i))})),this.Ya.forEach((i=>{e.has(i)||t.push(new um(i))})),t}cu(e){this.Za=e.ks,this.Ya=se();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Ci.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const fl="SyncEngine";class aI{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class cI{constructor(e){this.key=e,this.hu=!1}}class lI{constructor(e,t,i,s,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Zn((c=>Mp(c)),xo),this.Iu=new Map,this.Eu=new Set,this.Ru=new _e(G.comparator),this.Au=new Map,this.Vu=new il,this.du={},this.mu=new Map,this.fu=ki.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function uI(n,e,t=!0){const i=gm(n);let s;const r=i.Tu.get(e);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.lu()):s=await hm(i,e,t,!0),s}async function dI(n,e){const t=gm(n);await hm(t,e,!0,!1)}async function hm(n,e,t,i){const s=await L0(n.localStore,St(e)),r=s.targetId,o=n.sharedClientState.addLocalQueryTarget(r,t);let c;return i&&(c=await hI(n,e,r,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&om(n.remoteStore,s),c}async function hI(n,e,t,i,s){n.pu=(y,w,E)=>(async function(P,$,U,N){let M=$.view.ru(U);M.Ss&&(M=await Yd(P.localStore,$.query,!1).then((({documents:b})=>$.view.ru(b,M))));const D=N&&N.targetChanges.get($.targetId),F=N&&N.targetMismatches.get($.targetId)!=null,H=$.view.applyChanges(M,P.isPrimaryClient,D,F);return ch(P,$.targetId,H.au),H.snapshot})(n,y,w,E);const r=await Yd(n.localStore,e,!0),o=new oI(e,r.ks),c=o.ru(r.documents),l=zs.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),h=o.applyChanges(c,n.isPrimaryClient,l);ch(n,t,h.au);const m=new aI(e,t,o);return n.Tu.set(e,m),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function fI(n,e,t){const i=ie(n),s=i.Tu.get(e),r=i.Iu.get(s.targetId);if(r.length>1)return i.Iu.set(s.targetId,r.filter((o=>!xo(o,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await oc(i.localStore,s.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(s.targetId),t&&al(i.remoteStore,s.targetId),lc(i,s.targetId)})).catch(ko)):(lc(i,s.targetId),await oc(i.localStore,s.targetId,!0))}async function pI(n,e){const t=ie(n),i=t.Tu.get(e),s=t.Iu.get(i.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),al(t.remoteStore,i.targetId))}async function fm(n,e){const t=ie(n);try{const i=await P0(t.localStore,e);e.targetChanges.forEach(((s,r)=>{const o=t.Au.get(r);o&&(pe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?pe(o.hu,14607):s.removedDocuments.size>0&&(pe(o.hu,42227),o.hu=!1))})),await mm(t,i,e)}catch(i){await ko(i)}}function ah(n,e,t){const i=ie(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.Tu.forEach(((r,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=ie(o);l.onlineState=c;let h=!1;l.queries.forEach(((m,y)=>{for(const w of y.ba)w.va(c)&&(h=!0)})),h&&hl(l)})(i.eventManager,e),s.length&&i.Pu.J_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function mI(n,e,t){const i=ie(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.Au.get(e),r=s&&s.key;if(r){let o=new _e(G.comparator);o=o.insert(r,Be.newNoDocument(r,Q.min()));const c=se().add(r),l=new Do(Q.min(),new Map,new _e(ee),o,c);await fm(i,l),i.Ru=i.Ru.remove(r),i.Au.delete(e),pl(i)}else await oc(i.localStore,e,!1).then((()=>lc(i,e,t))).catch(ko)}function lc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Iu.get(e))n.Tu.delete(i),t&&n.Pu.yu(i,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((i=>{n.Vu.containsKey(i)||pm(n,i)}))}function pm(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(al(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),pl(n))}function ch(n,e,t){for(const i of t)i instanceof um?(n.Vu.addReference(i.key,e),gI(n,i)):i instanceof dm?(B(fl,"Document no longer in limbo: "+i.key),n.Vu.removeReference(i.key,e),n.Vu.containsKey(i.key)||pm(n,i.key)):J(19791,{wu:i})}function gI(n,e){const t=e.key,i=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(i)||(B(fl,"New document in limbo: "+t),n.Eu.add(i),pl(n))}function pl(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new G(fe.fromString(e)),i=n.fu.next();n.Au.set(i,new cI(t)),n.Ru=n.Ru.insert(t,i),om(n.remoteStore,new dn(St(Zc(t.path)),i,"TargetPurposeLimboResolution",So.ce))}}async function mm(n,e,t){const i=ie(n),s=[],r=[],o=[];i.Tu.isEmpty()||(i.Tu.forEach(((c,l)=>{o.push(i.pu(l,e,t).then((h=>{var m;if((h||t)&&i.isPrimaryClient){const y=h?!h.fromCache:(m=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:m.current;i.sharedClientState.updateQueryState(l.targetId,y?"current":"not-current")}if(h){s.push(h);const y=rl.Es(l.targetId,h);r.push(y)}})))})),await Promise.all(o),i.Pu.J_(s),await(async function(l,h){const m=ie(l);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(y=>L.forEach(h,(w=>L.forEach(w.Ts,(E=>m.persistence.referenceDelegate.addReference(y,w.targetId,E))).next((()=>L.forEach(w.Is,(E=>m.persistence.referenceDelegate.removeReference(y,w.targetId,E)))))))))}catch(y){if(!Oi(y))throw y;B(ol,"Failed to update sequence numbers: "+y)}for(const y of h){const w=y.targetId;if(!y.fromCache){const E=m.vs.get(w),A=E.snapshotVersion,P=E.withLastLimboFreeSnapshotVersion(A);m.vs=m.vs.insert(w,P)}}})(i.localStore,r))}async function yI(n,e){const t=ie(n);if(!t.currentUser.isEqual(e)){B(fl,"User change. New user:",e.toKey());const i=await nm(t.localStore,e);t.currentUser=e,(function(r,o){r.mu.forEach((c=>{c.forEach((l=>{l.reject(new z(V.CANCELLED,o))}))})),r.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await mm(t,i.Ns)}}function vI(n,e){const t=ie(n),i=t.Au.get(e);if(i&&i.hu)return se().add(i.key);{let s=se();const r=t.Iu.get(e);if(!r)return s;for(const o of r){const c=t.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function gm(n){const e=ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=fm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mI.bind(null,e),e.Pu.J_=iI.bind(null,e.eventManager),e.Pu.yu=sI.bind(null,e.eventManager),e}class lo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=sm(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return x0(this.persistence,new C0,e.initialUser,this.serializer)}Cu(e){return new tm(sl.Vi,this.serializer)}Du(e){return new N0}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}lo.provider={build:()=>new lo};class wI extends lo{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){pe(this.persistence.referenceDelegate instanceof co,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new h0(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ke.withCacheSize(this.cacheSizeBytes):Ke.DEFAULT;return new tm((i=>co.Vi(i,t)),this.serializer)}}class uc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>ah(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=yI.bind(null,this.syncEngine),await X0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new eI})()}createDatastore(e){const t=sm(e.databaseInfo.databaseId),i=F0(e.databaseInfo);return q0(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,s,r,o,c){return new G0(i,s,r,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>ah(this.syncEngine,t,0)),(function(){return eh.v()?new eh:new M0})())}createSyncEngine(e,t){return(function(s,r,o,c,l,h,m){const y=new lI(s,r,o,c,l,h);return m&&(y.gu=!0),y})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const r=ie(s);B(Si,"RemoteStore shutting down."),r.Ea.add(5),await qs(r),r.Aa.shutdown(),r.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}uc.provider={build:()=>new uc};/**
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
 *//**
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
 */class _I{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ht("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Sn="FirestoreClient";class bI{constructor(e,t,i,s,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this._databaseInfo=s,this.user=Fe.UNAUTHENTICATED,this.clientId=Ip.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,(async o=>{B(Sn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(i,(o=>(B(Sn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=lm(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function Sa(n,e){n.asyncQueue.verifyOperationInProgress(),B(Sn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async s=>{i.isEqual(s)||(await nm(e.localStore,s),i=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function lh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await TI(n);B(Sn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>ih(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,s)=>ih(e.remoteStore,s))),n._onlineComponents=e}async function TI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){B(Sn,"Using user provided OfflineComponentProvider");try{await Sa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Kn("Error using user provided cache. Falling back to memory cache: "+t),await Sa(n,new lo)}}else B(Sn,"Using default OfflineComponentProvider"),await Sa(n,new wI(void 0));return n._offlineComponents}async function II(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(B(Sn,"Using user provided OnlineComponentProvider"),await lh(n,n._uninitializedComponentsProvider._online)):(B(Sn,"Using default OnlineComponentProvider"),await lh(n,new uc))),n._onlineComponents}async function uh(n){const e=await II(n),t=e.eventManager;return t.onListen=uI.bind(null,e.syncEngine),t.onUnlisten=fI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=dI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=pI.bind(null,e.syncEngine),t}function EI(n,e,t,i){const s=new _I(i),r=new rI(e,s,t);return n.asyncQueue.enqueueAndForget((async()=>tI(await uh(n),r))),()=>{s.Nu(),n.asyncQueue.enqueueAndForget((async()=>nI(await uh(n),r)))}}/**
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
 */function ym(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const kI="ComponentProvider",dh=new Map;function SI(n,e,t,i,s){return new nT(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,ym(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,i)}/**
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
 */const vm="firestore.googleapis.com",hh=!0;class fh{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new z(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=vm,this.ssl=hh}else this.host=e.host,this.ssl=e.ssl??hh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=em;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<u0)throw new z(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Hb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ym(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ml{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new Pb;switch(i.type){case"firstParty":return new Nb(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new z(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=dh.get(t);i&&(B(kI,"Removing Datastore"),dh.delete(t),i.terminate())})(this),Promise.resolve()}}function CI(n,e,t,i={}){var h;n=Dr(n,ml);const s=Cn(e),r=n._getSettings(),o={...r,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(Tc(`https://${c}`),Ic("Firestore",!0)),r.host!==vm&&r.host!==c&&Kn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...r,host:c,ssl:s,emulatorOptions:i};if(!zn(l,o)&&(n._setSettings(l),i.mockUserToken)){let m,y;if(typeof i.mockUserToken=="string")m=i.mockUserToken,y=Fe.MOCK_USER;else{m=Zh(i.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const w=i.mockUserToken.sub||i.mockUserToken.user_id;if(!w)throw new z(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new Fe(w)}n._authCredentials=new $b(new Tp(m,y))}}/**
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
 */class Mo{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Mo(this.firestore,e,this._query)}}class Ze{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ze(this.firestore,e,this._key)}toJSON(){return{type:Ze._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(Hs(t,Ze._jsonSchema))return new Ze(e,i||null,new G(fe.fromString(t.referencePath)))}}Ze._jsonSchemaVersion="firestore/documentReference/1.0",Ze._jsonSchema={type:Ie("string",Ze._jsonSchemaVersion),referencePath:Ie("string")};class gi extends Mo{constructor(e,t,i){super(e,t,Zc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ze(this.firestore,null,new G(e))}withConverter(e){return new gi(this.firestore,e,this._path)}}function Yt(n,e,...t){if(n=Le(n),Bb("collection","path",e),n instanceof ml){const i=fe.fromString(e,...t);return kd(i),new gi(n,null,i)}{if(!(n instanceof Ze||n instanceof gi))throw new z(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(fe.fromString(e,...t));return kd(i),new gi(n.firestore,null,i)}}/**
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
 */const ph="AsyncQueue";class mh{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new rm(this,"async_queue_retry"),this._c=()=>{const i=ka();i&&B(ph,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=ka();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ka();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new hi;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Oi(e))throw e;B(ph,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,Ht("INTERNAL UNHANDLED ERROR: ",gh(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=dl.createAndSchedule(this,e,t,i,(r=>this.hc(r)));return this.tc.push(s),s}uc(){this.nc&&J(47125,{Pc:gh(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function gh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class dc extends ml{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new mh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new mh(e),this._firestoreClient=void 0,await e}}}function AI(n,e){const t=typeof n=="object"?n:Sc(),i=typeof n=="string"?n:io,s=vo(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=Jh("firestore");r&&CI(s,...r)}return s}function RI(n){if(n._terminated)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||xI(n),n._firestoreClient}function xI(n){var i,s,r,o;const e=n._freezeSettings(),t=SI(n._databaseId,((i=n._app)==null?void 0:i.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(r=e.localCache)!=null&&r._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new bI(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}})(n._componentsProvider))}/**
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
 */class wt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wt(Oe.fromBase64String(e))}catch(t){throw new z(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new wt(Oe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:wt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Hs(e,wt._jsonSchema))return wt.fromBase64String(e.bytes)}}wt._jsonSchemaVersion="firestore/bytes/1.0",wt._jsonSchema={type:Ie("string",wt._jsonSchemaVersion),bytes:Ie("string")};/**
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
 */class wm{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new z(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class mn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new z(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new z(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:mn._jsonSchemaVersion}}static fromJSON(e){if(Hs(e,mn._jsonSchema))return new mn(e.latitude,e.longitude)}}mn._jsonSchemaVersion="firestore/geoPoint/1.0",mn._jsonSchema={type:Ie("string",mn._jsonSchemaVersion),latitude:Ie("number"),longitude:Ie("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class gn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0})(this._values,e._values)}toJSON(){return{type:gn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Hs(e,gn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new gn(e.vectorValues);throw new z(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}gn._jsonSchemaVersion="firestore/vectorValue/1.0",gn._jsonSchema={type:Ie("string",gn._jsonSchemaVersion),vectorValues:Ie("object")};function _m(n,e,t){if((e=Le(e))instanceof wm)return e._internalPath;if(typeof e=="string")return $I(n,e);throw hc("Field path arguments must be of type string or ",n)}const PI=new RegExp("[~\\*/\\[\\]]");function $I(n,e,t){if(e.search(PI)>=0)throw hc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new wm(...e.split("."))._internalPath}catch{throw hc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function hc(n,e,t,i,s){let r=`Function ${e}() called with invalid data`;r+=". ";let o="";return new z(V.INVALID_ARGUMENT,r+n+o)}/**
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
 */class LI{convertValue(e,t="none"){switch(En(e)){case 0:return null;case 1:return e.booleanValue;case 2:return we(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(In(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw J(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return js(e,((s,r)=>{i[s]=this.convertValue(r,t)})),i}convertVectorValue(e){var i,s,r;const t=(r=(s=(i=e.fields)==null?void 0:i[Ja].arrayValue)==null?void 0:s.values)==null?void 0:r.map((o=>we(o.doubleValue)));return new gn(t)}convertGeoPoint(e){return new mn(we(e.latitude),we(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Ao(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Rs(e));default:return null}}convertTimestamp(e){const t=Tn(e);return new Te(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=fe.fromString(e);pe(Zp(i),9688,{name:e});const s=new xs(i.get(1),i.get(3)),r=new G(i.popFirst(5));return s.isEqual(t)||Ht(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class bm extends LI{constructor(e){super(),this.firestore=e}convertBytes(e){return new wt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ze(this.firestore,null,t)}}const yh="@firebase/firestore",vh="4.12.0";/**
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
 */function wh(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1})(n,["next","error","complete"])}/**
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
 */class Tm{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new DI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(_m("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class DI extends Tm{data(){return super.data()}}/**
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
 */function NI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new z(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Hn extends Tm{constructor(e,t,i,s,r,o){super(e,t,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Vr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(_m("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Hn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Hn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Hn._jsonSchema={type:Ie("string",Hn._jsonSchemaVersion),bundleSource:Ie("string","DocumentSnapshot"),bundleName:Ie("string"),bundle:Ie("string")};class Vr extends Hn{data(e={}){return super.data(e)}}class yi{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new fs(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new Vr(this._firestore,this._userDataWriter,i.key,i,new fs(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new z(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new Vr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new fs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>r||c.type!==3)).map((c=>{const l=new Vr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new fs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,m=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),m=o.indexOf(c.doc.key)),{type:MI(c.type),doc:l,oldIndex:h,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=yi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ip.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],s=[];return this.docs.forEach((r=>{r._document!==null&&(t.push(r._document),i.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),s.push(r.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function MI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J(61501,{type:n})}}/**
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
 */yi._jsonSchemaVersion="firestore/querySnapshot/1.0",yi._jsonSchema={type:Ie("string",yi._jsonSchemaVersion),bundleSource:Ie("string","QuerySnapshot"),bundleName:Ie("string"),bundle:Ie("string")};function Xt(n,...e){var h,m,y;n=Le(n);let t={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||wh(e[i])||(t=e[i++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(wh(e[i])){const w=e[i];e[i]=(h=w.next)==null?void 0:h.bind(w),e[i+1]=(m=w.error)==null?void 0:m.bind(w),e[i+2]=(y=w.complete)==null?void 0:y.bind(w)}let r,o,c;if(n instanceof Ze)o=Dr(n.firestore,dc),c=Zc(n._key.path),r={next:w=>{e[i]&&e[i](OI(o,n,w))},error:e[i+1],complete:e[i+2]};else{const w=Dr(n,Mo);o=Dr(w.firestore,dc),c=w._query;const E=new bm(o);r={next:A=>{e[i]&&e[i](new yi(o,E,w,A))},error:e[i+1],complete:e[i+2]},NI(n._query)}const l=RI(o);return EI(l,c,s,r)}function OI(n,e,t){const i=t.docs.get(e._key),s=new bm(n);return new Hn(n,s,e._key,i,new fs(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){xb(Jn),qn(new wn("firestore",((i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),c=new dc(new Lb(i.getProvider("auth-internal")),new Mb(o,i.getProvider("app-check-internal")),iT(o,s),o);return r={useFetchStreams:t,...r},c._setSettings(r),c}),"PUBLIC").setMultipleInstances(!0)),It(yh,vh,e),It(yh,vh,"esm2020")})();const Zt=AI(Oc);let mt=[];function VI(n){if(Im(),!n)return;const e=t=>t.docs.map(i=>({id:i.id,...i.data()}));mt.push(Xt(Yt(Zt,`households/${n}/inventory`),t=>{var i,s;d.inv=e(t),he("synced"),(i=j.renderAll)==null||i.call(j),(s=j.renderSum)==null||s.call(j)},t=>{console.warn("realtime inv error:",t),he("error")})),mt.push(Xt(Yt(Zt,`households/${n}/shopping`),t=>{var i,s;d.shop=e(t),he("synced"),(i=j.renderShop)==null||i.call(j),(s=j.renderSum)==null||s.call(j)},t=>{console.warn("realtime shop error:",t),he("error")})),mt.push(Xt(Yt(Zt,`households/${n}/recipes`),t=>{var i,s;d.recs=e(t),he("synced"),(i=j.renderRecs)==null||i.call(j),(s=j.renderSum)==null||s.call(j)},t=>{console.warn("realtime recs error:",t),he("error")})),mt.push(Xt(Yt(Zt,`households/${n}/mealplan`),t=>{const i={};e(t).forEach(s=>{s.date&&s.meal&&(i[s.date]=s.meal)}),d.mp=i,he("synced")},t=>{console.warn("realtime mp error:",t)})),mt.push(Xt(Yt(Zt,`households/${n}/settings`),t=>{const i=e(t).find(s=>s.id==="config");i&&(d.cfg={...qr,...i})},t=>{console.warn("realtime settings error:",t)})),mt.push(Xt(Yt(Zt,`households/${n}/cooklog`),t=>{d.cookLog=e(t).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},t=>{console.warn("realtime cooklog error:",t)})),mt.push(Xt(Yt(Zt,`households/${n}/wastelog`),t=>{d.wasteLog=e(t).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},t=>{console.warn("realtime wastelog error:",t)})),mt.push(Xt(Yt(Zt,`households/${n}/activity`),t=>{var i;d.activity=e(t).sort((s,r)=>new Date(r.timestamp||0)-new Date(s.timestamp||0)).slice(0,10),(i=j.renderAll)==null||i.call(j)},t=>{console.warn("realtime activity error:",t)})),he("synced"),console.log("[realtime] Listeners started for household:",n)}function Im(){mt.forEach(n=>{try{n()}catch{}}),mt=[],console.log("[realtime] All listeners stopped")}function gl(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(d.cfg.adults||"Bora").split(",")[0].trim(),i=f("grt");i&&(i.innerHTML=`${e}, <span>${t}</span>`);const s=f("hdt");s&&(s.textContent=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})),ei()}function yl(){vl(),Ur==null||Ur()}let Ur=null;function UI(n){Ur=n}function vl(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(d.cfg.adults||"Bora").split(",")[0].trim(),i=f("grt");i&&!i.innerHTML&&(i.innerHTML=`${e}, <span>${t}</span>`),ei(),Gs(),jI(),WI(),Ui(),KI(),Sm(),BI()}function FI(n){const e=`ks-home-${n}-collapsed`,t=ce(e)!==!1;Me(e,!t),fc(n)}function fc(n){const e=`ks-home-${n}-collapsed`,t=ce(e)!==!1,i=f(`${n}-arrow`),r=f({lowstock:"lowstocklist",activity:"activityfeed",cooktonight:"cooktonightbody"}[n]||n);i&&(t?i.classList.add("collapsed"):i.classList.remove("collapsed")),r&&(t?r.classList.add("collapsed"):r.classList.remove("collapsed"))}function BI(){fc("lowstock"),fc("activity")}function Ui(){const n=ln(),e=d.mp[n],t=f("tnd"),i=f("tna"),s=f("tonight-main");s&&(s.onclick=function(){window.openMealM(n,"Today")}),e?(t&&(t.innerHTML=e),i&&(i.innerHTML=`<button class="btn bsm bp" onclick="event.stopPropagation();openCooked('${n}')">✓ Cooked</button><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${n}','Today')">Edit</button>`)):(t&&(t.innerHTML='<span style="font-size:.9rem;color:var(--mt);font-style:italic">No meal planned yet</span>'),i&&(i.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openRecipeMatch()">🔍 Find recipes</button><button class="btn bsm bs" onclick="event.stopPropagation();showScreen('chat')">Ask Claude →</button>`))}function ei(){const n=["S","M","T","W","T","F","S"],e=new Date;e.setHours(0,0,0,0);const t=f("wgrd");t&&(t.innerHTML=Pi().map((i,s)=>{const r=i.toISOString().split("T")[0],o=i.getTime()===e.getTime(),c=d.mp[r];return`<div class="wd${o?" today":""}${c?" hm":""}" onclick="openMealM('${r}','${n[s]} ${i.getDate()}')"><div class="wdn">${n[s]}</div><div class="wdd">${i.getDate()}</div>${c?`<div class="wdm">${c.substring(0,10)}${c.length>10?"…":""}</div>`:""}</div>`}).join(""),HI())}function HI(){const n=f("variety-nudge");if(!n)return;const e=Pi().map(o=>d.mp[o.toISOString().split("T")[0]]).filter(Boolean);if(e.length<3){n.style.display="none";return}const t=e.some(o=>/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(o)),i=e.some(o=>/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner/i.test(o)),s={};e.forEach(o=>{const c=o.toLowerCase();s[c]=(s[c]||0)+1});const r=Object.entries(s).find(([,o])=>o>=3);r?(n.style.display="block",n.innerHTML="🔄 <strong>"+r[0]+"</strong> is planned "+r[1]+"× this week — maybe try something different?"):!t&&!i?(n.style.display="block",n.innerHTML="🌍 No Bangladeshi or Turkish dishes this week yet — ask Claude for ideas!"):t?i?n.style.display="none":(n.style.display="block",n.innerHTML="🇹🇷 No Turkish dishes this week — köfte or mercimek çorbası would be great!"):(n.style.display="block",n.innerHTML="🇧🇩 No Bangladeshi dishes this week — how about a dal or fish curry?")}function Gs(){const n=d.inv.filter(c=>{const l=At(c.expiry);return l&&(l.c==="expiring"||l.c==="expired")}).length,e=d.shop.filter(c=>!c.checked).length,t=f("home-exp-val"),i=f("home-exp-sub");t&&(n>0?(t.textContent=n+" item"+(n>1?"s":""),t.className="tc-val",t.style.color="var(--am)"):(t.textContent="All fresh!",t.className="tc-val tc-green")),i&&(i.textContent=n>0?"expiring soon":"Nothing in next 3 days");const s=f("home-shop-val"),r=f("home-shop-sub");s&&(s.textContent=e),r&&(r.textContent=e===1?"item to buy":e===0?"all stocked up":"items to buy");const o=f("sgrd");o&&(o.innerHTML=`<div class="sc" onclick="showScreen('inventory')"><div class="sci">🧺</div><div class="scv">${d.inv.length}</div><div class="scl">Items in stock</div></div><div class="sc${n>0?" warn":""}" onclick="showScreen('inventory')"><div class="sci">⏱</div><div class="scv">${n}</div><div class="scl">Expiring soon</div></div><div class="sc" onclick="showScreen('shopping')"><div class="sci">🛒</div><div class="scv">${e}</div><div class="scl">To buy</div></div><div class="sc" onclick="showScreen('recipes')"><div class="sci">📖</div><div class="scv">${d.recs.length}</div><div class="scl">Saved recipes</div></div>`)}function jI(){const n=d.inv.filter(i=>{const s=At(i.expiry);return s&&(s.c==="expiring"||s.c==="expired")}).sort((i,s)=>new Date(i.expiry)-new Date(s.expiry)),e=f("exslbl"),t=f("expl");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(i=>{const s=At(i.expiry);return`<div class="exi${s.c==="expired"?" exp":""}" onclick="openAdj('${i.id}')"><div class="exn">${Ae(i.name)}</div><div class="exd">${s.l}</div></div>`}).join("")}}const zI=new Set(["Bottle","Jar","Can","Carton","Bunch","Head","Loaf","Dozen","Tube","Roll","Gallon","Half Gallon","Liter"]),qI=new Set(["Piece","Unit","Pack","Box","Bag","Pound","Oz","Clove"]);function wl(n){return n?zI.has(n)?1:(qI.has(n),2):2}function WI(){const n=d.inv.filter(i=>{if(i.doNotRestock)return!1;const s=i.restockThreshold!=null?i.restockThreshold:wl(i.unit);return i.qty<=s}).sort((i,s)=>i.qty-s.qty),e=f("lowstocklbl"),t=f("lowstocklist");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(i=>`<div class="exi" style="border-color:var(--am)" onclick="openAdj('${i.id}')">
    <div style="flex:1;min-width:0">
      <div class="exn">${Ae(i.name)}</div>
      <div style="font-size:.7rem;color:var(--am);font-weight:600;margin-top:1px">${_i(i.qty,i.unit)}</div>
    </div>
    <button class="low-add-btn" onclick="event.stopPropagation();addLowToShop('${i.id}')">🛒 Add</button>
  </div>`).join("")}}async function GI(n){const e=d.inv.find(i=>i.id===n);if(!e)return;if(d.shop.find(i=>i.name.toLowerCase()===e.name.toLowerCase()&&!i.checked)){R(`${e.name} is already on your list`);return}await ye({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"low-stock"}),R(`${e.name} added to shopping list 🛒`)}function KI(){const n=f("activityfeed"),e=f("activitylbl");if(!n)return;const t=d.activity||[];if(!t.length){e&&(e.style.display="none"),n.innerHTML="";return}e&&(e.style.display="flex");const i=s=>{const r=Date.now()-new Date(s).getTime(),o=Math.floor(r/6e4);if(o<1)return"just now";if(o<60)return o+"m ago";const c=Math.floor(o/60);if(c<24)return c+"h ago";const l=Math.floor(c/24);return l===1?"yesterday":l+"d ago"};n.innerHTML=t.slice(0,3).map(s=>`<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--b1)">
      <div style="width:28px;height:28px;border-radius:50%;background:var(--acd);display:flex;align-items:center;justify-content:center;font-size:.7rem;flex-shrink:0;color:var(--ac);font-weight:700">${(s.memberName||"?")[0].toUpperCase()}</div>
      <div style="flex:1;font-size:.82rem;color:var(--tx2);line-height:1.4;font-family:'DM Sans',sans-serif"><strong style="color:var(--tx);font-weight:600">${Ae(s.memberName||"Someone").replace(/</g,"&lt;")}</strong> ${(s.action||"").replace(/</g,"&lt;")} <strong style="color:var(--tx);font-weight:600">${(s.itemName||"").replace(/</g,"&lt;")}</strong></div>
      <div style="font-size:.68rem;color:var(--mt);flex-shrink:0">${i(s.timestamp)}</div>
    </div>`).join("")}const _h=5;let ps=[],Lt=0;function Em(n){return(n||"").toLowerCase().trim().replace(/^[\d\s\/\.½¼¾⅓⅔]+/,"").replace(/\b(cups?|tbsp?|tsp?|tablespoons?|teaspoons?|ounces?|oz|lbs?|pounds?|grams?|g|kg|ml|liters?|cloves?|cans?|large|small|medium|fresh|dried|chopped|minced|sliced|diced|to taste|optional|about)\b/gi,"").replace(/\s+/g," ").trim().replace(/s$/,"")}function QI(n,e){let t=[];if(n.ingredientsRaw&&Array.isArray(n.ingredientsRaw)?t=n.ingredientsRaw:n.ingredients&&(t=n.ingredients.split(/[;\n]+/).map(c=>c.trim()).filter(Boolean)),!t.length)return{matchPct:0,matchCount:0,totalCount:0,missing:[]};const i=[];let s=0;const r=t.length;for(const c of t){const l=Em(c);if(!l){s++;continue}e.some(m=>m.includes(l)||l.includes(m))?s++:i.push(c)}return{matchPct:r>0?Math.round(s/r*100):0,matchCount:s,totalCount:r,missing:i}}async function JI(){const n=f("recipeMatchResults");if(n){ot("recipematch"),n.innerHTML='<div style="text-align:center;padding:40px 0"><div class="spin" style="width:32px;height:32px;margin:0 auto 12px"></div><div style="font-size:.85rem;color:var(--mt)">Matching recipes to your supplies…</div></div>';try{const e=d.inv.map(i=>Em(i.name)).filter(Boolean),t=await ae("public_recipes");if(!t.length){n.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--mt)">No community recipes available yet.<br/>Publish some recipes first!</div>';return}ps=t.map(i=>{const s=QI(i,e);return{...i,...s}}).filter(i=>i.matchPct>=60).sort((i,s)=>s.matchPct-i.matchPct),Lt=0,km(n)}catch(e){console.error("Recipe match error:",e),n.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--rd)">Something went wrong. Try again.</div>'}}}function km(n){if(!ps.length){n.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--mt)">No recipes match 60% or more of your supplies.<br/>Try adding more items to your pantry!</div>';return}const e=ps.slice(Lt,Lt+_h);Lt+=e.length;const t=e.map(i=>{let s,r;i.matchPct===100?(s="var(--gn)",r="Ready to cook!"):i.matchPct>=80?(s="var(--am)",r="Almost there"):(s="#e67e22",r="Need a few things");const o=i.imageUrl?`<img src="${i.imageUrl}" style="width:100%;height:140px;object-fit:cover;border-radius:12px 12px 0 0" alt="" onerror="this.style.display='none'"/>`:'<div style="width:100%;height:80px;background:var(--sf);border-radius:12px 12px 0 0;display:flex;align-items:center;justify-content:center;font-size:2rem">🍽</div>',c=i.missing.length?`<div style="margin-top:8px"><div style="font-size:.7rem;color:var(--mt);font-weight:600;margin-bottom:4px">Missing (${i.missing.length}):</div>${i.missing.map(h=>`<span style="display:inline-block;font-size:.68rem;padding:2px 8px;border-radius:8px;background:var(--rdd);color:var(--rd);margin:2px 3px 2px 0">${h}</span>`).join("")}</div>`:"",l=[i.cookTime,i.cuisine].filter(Boolean).join(" · ");return`<div style="background:var(--card);border:1.5px solid var(--b1);border-radius:14px;margin-bottom:12px;overflow:hidden;cursor:pointer" onclick="openComRecipe('${i.id}')">
      ${o}
      <div style="padding:12px 14px">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
          <div style="font-family:'Fraunces',serif;font-size:1rem;font-weight:400;flex:1;line-height:1.3">${i.title||i.name||"Untitled"}</div>
          <div style="flex-shrink:0;font-size:.72rem;font-weight:700;padding:3px 10px;border-radius:20px;background:${s}22;color:${s}">${i.matchPct}%</div>
        </div>
        <div style="font-size:.7rem;color:${s};font-weight:600;margin-top:3px">${r}</div>
        ${l?`<div style="font-size:.7rem;color:var(--mt);margin-top:4px">${l}</div>`:""}
        ${c}
      </div>
    </div>`}).join("");if(Lt<=_h)n.innerHTML=t;else{const i=n.querySelector(".match-more-btn");i&&i.remove(),n.insertAdjacentHTML("beforeend",t)}Lt<ps.length?n.insertAdjacentHTML("beforeend",`<div style="text-align:center;padding:12px 0"><button class="btn bs match-more-btn" onclick="showMoreMatches()">Show 5 more (${ps.length-Lt} remaining)</button></div>`):Lt>0&&n.insertAdjacentHTML("beforeend",`<div style="text-align:center;padding:12px 0;font-size:.75rem;color:var(--mt)">Showing all ${Lt} matching recipes</div>`)}function YI(){const n=f("recipeMatchResults");n&&km(n)}function Sm(){const n=["fridge","freezer","pantry","household"].map(t=>{const i=d.inv.filter(s=>s.location===t);return i.length?zh(t).toUpperCase()+`
`+i.map(s=>`- ${s.name}${s.brand?` (${s.brand})`:""}: ${_i(s.qty,s.unit)}`).join(`
`):""}).filter(Boolean).join(`

`),e=f("expbox");e&&(e.textContent=n||"No items yet.")}const XI="modulepreload",ZI=function(n){return"/"+n},bh={},eE=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let o=function(h){return Promise.all(h.map(m=>Promise.resolve(m).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(t.map(h=>{if(h=ZI(h),h in bh)return;bh[h]=!0;const m=h.endsWith(".css"),y=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${y}`))return;const w=document.createElement("link");if(w.rel=m?"stylesheet":XI,m||(w.as="script"),w.crossOrigin="",w.href=h,l&&w.setAttribute("nonce",l),document.head.appendChild(w),m)return new Promise((E,A)=>{w.addEventListener("load",E),w.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&r(c.reason);return e().catch(r)})};function Cm(n){return n?n.trim().toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").slice(0,60):null}async function Oo(n){if(!d.hid||!n)return null;const e=Cm(n);if(!e)return null;try{return await ne(`households/${d.hid}/productPreferences/${e}`)||null}catch{return null}}async function Am(n,e){if(!d.hid||!n)return;const t=Cm(n);if(t)try{const i=await ne(`households/${d.hid}/productPreferences/${t}`)||{};W(`households/${d.hid}/productPreferences/${t}`,{...i,...e,productName:n.trim(),updatedAt:new Date().toISOString()}).catch(s=>console.warn("Failed to save product preference:",s))}catch(i){console.warn("Failed to read product preference for merge:",i)}}function _l(n,e){e&&Am(n,{preferredLocation:e})}function bl(n,e){e&&Am(n,{preferredUnit:e})}let nt=null,Ca=!1,rs="",Aa=!1;function tE(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=f("shopAddMicOpt");e&&(e.style.display="")}function Th(n){const e=f("micstatus");e&&e.classList.toggle("visible",n)}function Rm(){if(Ca&&nt){Aa=!0,nt.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){R("Voice input not supported");return}nt=new n,nt.lang="en-US",nt.interimResults=!0,nt.maxAlternatives=1,nt.continuous=!1,rs="",Ca=!0,Th(!0),nt.onresult=e=>{let t="";for(let s=e.resultIndex;s<e.results.length;s++){const r=e.results[s][0].transcript;e.results[s].isFinal?rs+=r:t+=r}const i=f("shi");i&&(i.value=(rs+t).trim())},nt.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&R("Couldn't hear that — try again")},nt.onend=()=>{let e=(rs||"").trim();if(!e&&Aa){const t=f("shi");e=t?t.value.trim():""}if(Ca=!1,nt=null,rs="",Aa=!1,Th(!1),e){let t=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||1):s&&(t=s[2].trim(),i=parseInt(s[1],10)||1);const o={id:Date.now().toString(),name:t,qty:i,checked:!1,src:"manual"};ye(o),R(`Added "${e}" 🎤`);const c=f("shi");c&&(c.value="")}},nt.start()}function xm(n){if(!n.brand)return!1;if(n.src==="scan")return!0;if(n.src==="search"&&n.searchQuery){const e=n.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),t=n.brand.toLowerCase();return e.some(i=>t.includes(i))}return!1}function _r(n){const e=n.qty||1,t=n.unit||"Unit",i=go(e),s=`<span class="sh-qty${e===1?" sh-qty-one":""}"> × ${i} ${t}</span>`;return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="shop">
    <div class="swipe-inner">
      <!-- Main row: swipeRowTap handles multi-select; checkbox toggles checked; content area opens detail -->
      <div class="shit${n.checked?" chk":""}" onclick="swipeRowTap('${n.id}','shop')">
        <div class="sel-cb">✓</div>           <!-- Multi-select checkbox (hidden unless selectMode is active) -->
        <div class="shck" onclick="event.stopPropagation();togShop('${n.id}')">${n.checked?"✓":""}</div>  <!-- Slim ring: tap to mark as bought; hidden in select mode (replaced by sel-cb) -->
        <div style="flex:1;min-width:0;cursor:pointer" onclick="openItemDetail('${n.id}')">
          <div class="shnm">${Ae(n.name)}${s}</div>
          ${xm(n)?`<div class="sh-brand">${n.brand}</div>`:""}  <!-- Brand shown for barcode scans always; for text search only if the user's query matches the brand name -->
          ${n.note?`<div class="shnote">📝 ${n.note}</div>`:""}  <!-- Optional user note shown below name -->
        </div>
        ${n.price?`<div class="price-tag">~$${n.price}</div>`:""}  <!-- Estimated price if available -->
        <button class="sh-note-btn" onclick="toggleShNote(event,'${n.id}')" title="Add note">✏️</button>
      </div>
      <!-- Inline qty editor removed — quantity is now edited via the detail sheet stepper -->
      <!-- Expandable note editor (hidden by default, toggled by toggleShNote) -->
      <div class="sh-note-edit" id="sne-${n.id}">
        <textarea class="sh-note-inp" id="sni-${n.id}" rows="2" placeholder="Add a note… (e.g. brand, size, store)" onblur="saveShNote('${n.id}')">${n.note||""}</textarea>
      </div>
    </div>
    <!-- Delete zone: slides in from right on swipe. Trash can lid animates open past threshold. -->
    <div class="swipe-del" onclick="swipeDelItem('${n.id}','shop')">
      <div class="swipe-del-icon">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path class="trash-lid" d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0H5"/>
          <path class="trash-body" d="M6 6v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6M10 11v6M14 11v6"/>
        </svg>
      </div>
      <span class="swipe-del-label">Delete</span>
    </div>
  </div>`}function Fi(){const n=(o,c)=>o.name.localeCompare(c.name),e=f("shlist"),t=d.shop.filter(o=>!o.checked).sort(n),i=d.shop.filter(o=>o.checked).sort(n),s=f("clrchk");s&&(s.style.display=i.length?"block":"none");const r=f("shsub");if(r&&(r.textContent=t.length+" items to buy"),!!e){if(!d.shop.length){e.innerHTML='<div class="es"><div class="ei">🛒</div><p>Your list is empty!<br/>Add items or use "Build from meal plan".</p></div>';return}if(d.aisleMode&&t.length){const o={};t.forEach(c=>{const l=_y(c.name);o[l]||(o[l]=[]),o[l].push(c)}),e.innerHTML=Object.entries(o).sort().map(([c,l])=>`<div class="shsec">${c}</div>${l.map(_r).join("")}`).join("")+(i.length?`<div class="shsec">Done</div>${i.map(_r).join("")}`:"")}else e.innerHTML=(t.length?`<div class="shsec">To buy (${t.length})</div>${t.map(_r).join("")}`:"")+(i.length?`<div class="shsec">Done</div>${i.map(_r).join("")}`:"");if(d.selectMode==="shop"){document.querySelectorAll("#shlist .swipe-wrap").forEach(c=>{c.classList.add("selecting"),d.selectedIds.has(c.dataset.id)&&c.classList.add("selected")});const o=document.querySelector(".shbody");o&&(o.style.paddingLeft="52px")}}}function nE(){const n=f("shi"),e=n.value.trim();if(!e)return;if(vi&&vi.length===1){$m(0);return}let t=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||1):s&&(t=s[2].trim(),i=parseInt(s[1],10)||1);const o=f("addNoteInp"),c=o?o.value.trim():"",l={id:Date.now().toString(),name:t,qty:i,checked:!1,src:"manual"};c&&(l.note=c),ye(l),n.value="",o&&(o.value="");const h=f("addNoteWrap");h&&(h.style.display="none"),Tl(),Ks()}function iE(){const n=f("addNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=f("addNoteInp");t&&t.focus()}}function sE(){const n=f("shopAddBackdrop"),e=f("shopAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),setTimeout(()=>{const t=f("shi");t&&(t.value="",t.focus())},150)}function Ks(){const n=f("shopAddBackdrop"),e=f("shopAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),Tl()}function rE(){Ks(),window.openScanForList&&window.openScanForList()}function oE(){Ks(),Rm()}let vi=null;function aE(){}const cE=new Set(["salad","soup","stew","casserole","dish","recipe","curry","pie","sandwich","wrap","risotto","gratin","puree","smoothie","juice","namasu","pickled","marinated","braised","sauteed","sautéed","coleslaw","gazpacho","chutney","relish","compote","ragout","ratatouille","succotash","bruschetta","ceviche","tartare"]),lE=["made with","and vegetable","and rice","and noodle","and cheese","cooked in","served with","topped with","stuffed with","mixed with","tossed with","dressed with"];function uE(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(t===i)return!1;for(const o of lE)if(t.includes(o)&&!i.includes(o))return!0;const s=new Set(i.split(/\s+/)),r=t.split(/[\s,&+\-–—/()[\]]+/).filter(o=>o.length>=2);for(const o of r)if(cE.has(o)&&!s.has(o))return!0;return!1}const Pm=new Set(["a","an","the","and","or","with","for","of","in","to","by","is","it","at","on","no","not","all","each","per","from","free","style","natural","original","premium","organic","fresh","whole","pure","real","lite","light","low","high","extra","reduced","fat","nonfat","skim","raw","roasted","unsweetened","sweetened","flavored","smoked","dried","frozen","canned","pack","ct","oz","lb","ml","kg","fl","count","size","gallon","quart","pint","liter","bag","box","can","jar","bottle","container","pouch","tub","carton","plain","creamy","chunky","crispy","crunchy","spicy","mild","hot","cold","classic","homestyle","traditional","artisan","greek","italian","mexican","asian","indian","mini","small","medium","large","jumbo","giant","big","handheld","electric","portable","automatic","manual","new","best","top","value","brand"]);function Ih(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(t===i||t.startsWith(i+" "))return!0;const s=i.split(/\s+/).filter(c=>c.length>=2),r=t.split(/[\s,&+\-–—/()[\]]+/).filter(c=>c.length>=2&&!Pm.has(c)&&!/^\d+$/.test(c));if(r.length<=2)return!0;let o=0;for(const c of r)s.some(h=>{if(c.startsWith(h)||h.startsWith(c))return!0;const m=Math.min(c.length,h.length,3);return m>=3&&c.slice(0,m)===h.slice(0,m)})&&o++;return o/r.length>=.5}function dE(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(uE(n,e))return 0;if(t===i)return 100;if(t.startsWith(i+" ")||t.startsWith(i))return 95;const r=t.split(/[\s,&+\-–—/]+/).filter(o=>o.length>=2).filter(o=>!Pm.has(o)&&!/^\d+$/.test(o));if(r.length&&(r[0].startsWith(i)||i.startsWith(r[0]))){const o=r.filter(l=>!l.startsWith(i)&&!i.startsWith(l)).length,c=85-Math.min(o*8,30);return Ih(n,e)?c:0}for(let o=1;o<Math.min(3,r.length);o++)if(r[o].startsWith(i)||i.startsWith(r[o])){const c=r.filter(h=>!h.startsWith(i)&&!i.startsWith(h)).length,l=60-o*10-Math.min(c*8,20);return Ih(n,e)?Math.max(l,5):0}return 0}function $m(n){if(!vi||!vi[n])return;const e=vi[n],t=f("addNoteInp"),i=t?t.value.trim():"",s=f("shi")?f("shi").value.trim():"",r={id:Date.now().toString(),name:e.name,qty:1,checked:!1,src:"search",brand:e.brand||"",category:e.category||"",source:e.source||"search",searchQuery:s};i&&(r.note=i),ye(r),R(`Added "${e.name}" ✓`);const o=f("shi");o&&(o.value=""),t&&(t.value="");const c=f("addNoteWrap");c&&(c.style.display="none"),Tl(),Ks()}function Tl(){vi=null;const n=f("shopSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}async function Il(n,e,t){}function Lm(){const n=f("enrichBackdrop"),e=f("enrichSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),window._enrichCtx=null}async function Dm(n){if(d.selectMode)return;event&&event.stopPropagation();const e=d.shop.find(y=>y.id===n);if(!e)return;const t=f("itemDetailContent");if(!t)return;const i=xm(e);let s=`<div class="item-detail-header">
    <div style="flex:1;min-width:0">
      <div class="item-detail-name">${Ae(e.name)}</div>
      ${i?`<div class="item-detail-brand">${e.brand}</div>`:""}
      ${e.checked?'<div style="margin-top:4px"><span class="item-detail-badge" style="background:var(--gnd);color:var(--gn)">✓ Purchased</span></div>':""}
    </div>
  </div>`;const r=e.qty||1,o=e.unit||"Unit",{whole:c,frac:l}=Wr(r);s+=`<div class="item-detail-section">
    <div class="item-detail-label">Quantity</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeShopQty('${e.id}',-1)">−</button>
        <input class="qinp" id="shop-qty-${e.id}" type="number" min="0" max="99" value="${c}" style="width:48px;text-align:center" onblur="changeShopQtyDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeShopQty('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${Ma(`shop-frac-${e.id}`,l).replace("<select",`<select onchange="changeShopFrac('`+e.id+`')"`)}
      </div>
      <span style="font-size:.8rem;color:var(--mt)">${o}</span>
    </div>
  </div>`,s+=`<div class="item-detail-section">
    <div class="item-detail-label">Unit of Measure</div>
    <select class="detail-select" onchange="changeShopUnit('${e.id}',this.value)">
      ${Um.map(y=>`<option value="${y}"${y===o?" selected":""}>${y}</option>`).join("")}
    </select>
  </div>`,e.note&&(s+=`<div class="item-detail-section">
      <div class="item-detail-label">Note</div>
      <div class="item-detail-value">${e.note}</div>
    </div>`),s+='<button class="btn bs bf" onclick="closeItemDetail()" style="margin-top:8px">Close</button>',t.innerHTML=s;const h=f("itemDetailBackdrop"),m=f("itemDetailSheet");h&&h.classList.add("active"),m&&m.classList.add("active")}function hE(){const n=f("itemDetailBackdrop"),e=f("itemDetailSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}async function fE(n,e){const t=d.shop.find(s=>s.id===n);if(!t)return;await ye({...t,unit:e}),bl(t.name,e);const i=d.inv.find(s=>s.name.toLowerCase().trim()===t.name.toLowerCase().trim());i&&await re({...i,unit:e}),R("Unit updated everywhere"),Dm(n)}async function pE(n,e){const t=d.shop.find(h=>h.id===n);if(!t)return;const i=f(`shop-qty-${n}`),s=f(`shop-frac-${n}`),r=parseInt(i==null?void 0:i.value,10)||0,o=parseFloat(s==null?void 0:s.value)||0;if(e<0&&vn(r,o)<=.25)return;const c=Math.max(0,Math.min(99,r+e)),l=vn(c,o);i&&(i.value=Math.floor(l)),c===0&&o===0&&s&&(s.value="0.25"),await ye({...t,qty:l})}async function mE(n){const e=d.shop.find(c=>c.id===n);if(!e)return;const t=f(`shop-qty-${n}`),i=f(`shop-frac-${n}`),s=parseInt(t==null?void 0:t.value,10),r=parseFloat(i==null?void 0:i.value)||0;if(isNaN(s)||s<0)return;const o=vn(s,r);o!==(e.qty||1)&&await ye({...e,qty:o})}async function gE(n){const e=d.shop.find(c=>c.id===n);if(!e)return;const t=f(`shop-qty-${n}`),i=f(`shop-frac-${n}`),s=parseInt(t==null?void 0:t.value,10)||0,r=parseFloat(i==null?void 0:i.value)||0,o=vn(s,r);r===0&&s===0&&t&&(t.value=1),await ye({...e,qty:o})}async function yE(n){}function vE(n){}async function wE(n){}function _E(n){const e=window._enrichCtx;if(!e)return;const t=e.results[n];if(t){if(e.list==="shop"){const i=d.shop.find(s=>s.id===e.itemId);i&&ye({...i,name:t.name,brand:t.brand||"",category:t.category||"",source:t.source||"search"})}else if(e.list==="inv"){const i=d.inv.find(s=>s.id===e.itemId);i&&re({...i,name:t.name,brand:t.brand||"",category:t.category||i.category,source:t.source||"search"})}Lm(),R(`Updated with "${t.name}" ✓`)}}function Nm(n){if(!d.hid||!n)return;const e=Date.now().toString(36)+Math.random().toString(36).slice(2,6);W(`households/${d.hid}/completed_items/${e}`,{name:n,completedAt:new Date().toISOString()}).catch(t=>console.warn("recordCompleted error:",t))}function bE(n){const e=d.shop.find(i=>i.id===n);if(!e)return;const t=!e.checked;ye({...e,checked:t}),t&&Nm(e.name),Je(t?"checked off":"unchecked",Ae(e.name)+" on Shopping List")}function TE(n,e){n.stopPropagation();const t=f("sne-"+e),i=f("sni-"+e);if(!t)return;t.classList.toggle("open")&&i&&(i.focus(),i.setSelectionRange(i.value.length,i.value.length))}function IE(n){const e=f("sni-"+n);if(!e)return;const t=d.shop.find(s=>s.id===n);if(!t)return;const i=e.value.trim();i!==(t.note||"")&&ye({...t,note:i})}function EE(n){const e=f("sqe-"+n),t=f("sqi-"+n);if(!e)return;e.classList.toggle("open")&&t&&(t.focus(),t.select())}function kE(n,e){const t=f("sqi-"+n);if(!t)return;const i=Math.max(1,(parseInt(t.value,10)||1)+e);t.value=i,Mm(n)}function Mm(n){const e=f("sqi-"+n);if(!e)return;const t=d.shop.find(s=>s.id===n);if(!t)return;const i=Math.max(1,parseInt(e.value,10)||1);i!==(t.qty||1)&&ye({...t,qty:i})}function SE(){d.aisleMode=!d.aisleMode;const n=f("aislebtn");n&&(n.style.background=d.aisleMode?"var(--ac)":"",n.style.color=d.aisleMode?"var(--bg)":""),Fi()}function CE(n){["list","deals"].forEach(i=>{const s=f("shtab-"+i);s&&s.classList.remove("active");const r=f("sh-"+i+"-body");r&&(r.style.display="none")});const e=f("shtab-"+n);e&&e.classList.add("active");const t=f("sh-"+n+"-body");t&&(t.style.display="block"),n==="deals"&&Om()}function AE(){const n=d.shop.filter(i=>!i.checked);if(!n.length){R("List is empty!");return}const t=`🛒 Shopping List

`+n.map(i=>{let s="• "+i.name;return(i.qty||1)>1&&(s+=" × "+go(i.qty)),i.price&&(s+=" (~$"+i.price+")"),s}).join(`
`);navigator.share?navigator.share({title:"Shopping List",text:t}).catch(()=>{}):navigator.clipboard&&navigator.clipboard.writeText(t).then(()=>R("List copied!"))}let Ra={},pc={};async function RE(){const n=d.shop.filter(t=>t.checked);if(!n.length){R("No completed items!");return}Ra={},pc={};for(const t of n){const i=await Oo(t.name),s=t.name.toLowerCase();i!=null&&i.preferredLocation&&(Ra[s]=i.preferredLocation),i!=null&&i.preferredUnit&&(pc[s]=i.preferredUnit)}const e=f("atk-body");e.innerHTML=`<div style="padding:16px">
    <p style="font-size:.82rem;color:var(--mt);margin-bottom:16px">Choose where each item goes in your kitchen, then tap Add All.</p>
    ${n.map(t=>{const i=Ra[t.name.toLowerCase()]||bc(t.name);return`<div class="atk-item" id="atk-${t.id}" data-loc="${i}">
        <div class="atk-name">${t.name}</div>
        <div class="atk-loc">
          <button onclick="setAtkLoc('${t.id}','fridge',this)" class="${i==="fridge"?"sel":""}">🌡 Fridge</button>
          <button onclick="setAtkLoc('${t.id}','freezer',this)" class="${i==="freezer"?"sel":""}">🧊 Freeze</button>
          <button onclick="setAtkLoc('${t.id}','pantry',this)" class="${i==="pantry"?"sel":""}">🥫 Pantry</button>
          <button onclick="setAtkLoc('${t.id}','household',this)" class="${i==="household"?"sel":""}">🏠 House</button>
        </div>
      </div>`}).join("")}
  </div>`,ot("atk")}function xE(n,e,t){const i=f("atk-"+n);i.dataset.loc=e,i.querySelectorAll(".atk-loc button").forEach(s=>s.classList.remove("sel")),t.classList.add("sel")}async function PE(){const n=d.shop.filter(i=>i.checked),e=new Date().toLocaleDateString();let t=0;for(const i of n){const s=f("atk-"+i.id);if(!s)continue;const r=s.dataset.loc||bc(i.name),o=d.inv.find(l=>l.name.toLowerCase()===i.name.toLowerCase()),c=i.qty||1;await re({id:o?o.id:"inv-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:o?o.name:i.name,qty:o?o.qty+c:c,unit:o?o.unit:i.unit&&i.unit!=="unit"?i.unit:pc[i.name.toLowerCase()]||"unit",location:r,category:o?o.category:$i({name:i.name}),addedAt:o?o.addedAt:e,brand:o?o.brand:i.brand||"",expiry:o?o.expiry:null,image:o?o.image:i.image||null,source:"shopping"}),_l(i.name,r),await Ni(i.id),t++}Ee("atk"),R(`${t} item${t!==1?"s":""} added to your supplies! 🧺`)}async function $E(){const n=Pi().map(s=>{const r=s.toISOString().split("T")[0];return d.mp[r]?`${s.toLocaleDateString("en-US",{weekday:"short"})}: ${d.mp[r]}`:""}).filter(Boolean).join(", ");if(!n){R("No meals planned yet!");return}const e=d.inv.map(s=>`${s.name} (${_i(s.qty,s.unit)})`).join(", "),t=document.querySelector('[onclick="buildList()"]'),i=t?t.textContent:"";t&&(t.disabled=!0,t.textContent="⏳ Thinking…");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:500,messages:[{role:"user",content:`Week meals: ${n}
Already have: ${e}
List ONLY ingredients still needed. Return ONLY a bullet list, each line starting "- ". No categories, no headers, no explanation.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",c=[],l=[];o.split(`
`).forEach(P=>{const $=P.match(/^[-•*]\s+(.+)/);if($){const U=$[1].replace(/\*\*/g,"").trim();U&&!d.shop.find(N=>N.name.toLowerCase()===U.toLowerCase())&&c.push({name:U,sel:!0})}});const h=o.split(`
`).filter(P=>P.match(/^[-•*]\s+/)).length,m=d.inv.map(P=>P.name.toLowerCase());if(c.forEach(P=>{const $=d.inv.find(U=>U.name.toLowerCase()===P.name.toLowerCase());$&&$.qty>0&&(P.note=`Have ${_i($.qty,$.unit)} — need more`)}),!c.length){R("Nothing new needed — you're all stocked! ✓");return}window._bpItems=c;const y=d.inv.length>0?Math.max(0,h-c.length):0,w=c.filter(P=>P.note).length,E=[];y>0&&E.push(`✅ ${y} already in stock`),w>0&&E.push(`⚠️ ${w} partially stocked`),E.push(`🛒 ${c.length} to add`);const A=`<div style="padding:10px 16px;background:var(--acd);border-radius:12px;margin-bottom:12px;font-size:.82rem;color:var(--tx2);line-height:1.6">${E.join("<br>")}</div>`;f("bpList").innerHTML=A+c.map((P,$)=>`<div id="bpitem-${$}" onclick="bpTog(${$})" style="display:flex;align-items:center;gap:12px;padding:13px 16px;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;cursor:pointer;transition:all .15s"><div id="bpck-${$}" style="width:24px;height:24px;border-radius:50%;background:var(--gn);border:2px solid var(--gn);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.8rem;color:#0c0c0a;transition:all .2s">✓</div><div style="flex:1;min-width:0"><div style="font-size:.9rem;font-weight:500">${P.name}</div>${P.note?`<div style="font-size:.72rem;color:var(--am);margin-top:2px">${P.note}</div>`:""}</div></div>`).join(""),El(),f("buildPreviewM").classList.add("active")}catch{R("Couldn't reach Claude — check connection")}finally{t&&(t.disabled=!1,t.textContent=i)}}function LE(n){window._bpItems[n].sel=!window._bpItems[n].sel;const e=f("bpck-"+n),t=f("bpitem-"+n);window._bpItems[n].sel?(e.textContent="✓",e.style.background="var(--gn)",e.style.borderColor="var(--gn)",e.style.color="#0c0c0a",t.style.borderColor="var(--b1)"):(e.textContent="",e.style.background="transparent",e.style.borderColor="var(--b2)",t.style.borderColor="var(--b2)"),El()}function DE(n){window._bpItems.forEach((e,t)=>{window._bpItems[t].sel=n;const i=f("bpck-"+t),s=f("bpitem-"+t);n?(i.textContent="✓",i.style.background="var(--gn)",i.style.borderColor="var(--gn)",i.style.color="#0c0c0a",s.style.borderColor="var(--b1)"):(i.textContent="",i.style.background="transparent",i.style.borderColor="var(--b2)",s.style.borderColor="var(--b2)")}),El()}function El(){const n=window._bpItems.filter(t=>t.sel).length,e=f("bpAddBtn");e&&(e.textContent=n?`Add ${n} item${n!==1?"s":""}  ✓`:"Nothing selected"),e&&(e.disabled=!n)}async function NE(){const n=window._bpItems.filter(e=>e.sel);if(!n.length){f("buildPreviewM").classList.remove("active");return}for(const e of n)await ye({id:Date.now().toString()+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"meal-plan"});f("buildPreviewM").classList.remove("active"),R(`Added ${n.length} item${n.length!==1?"s":""}! 🛒`)}function Om(){const n=f("deals-zip-banner");if(!n)return;const e=d.cfg.zipcode;e?(n.innerHTML=`📍 Searching deals near <strong>${e}</strong> <span style="font-size:.72rem;color:var(--mt)">(change in Settings)</span>`,n.style.borderColor="var(--b2)"):(n.innerHTML=`⚠️ Set your zipcode in <strong style="cursor:pointer;color:var(--ac)" onclick="hideOv('');showOv('settings')">Settings</strong> to find local deals near you.`,n.style.borderColor="var(--am)")}function mc(n,e){const t=f("dealslist");if(!n||!n.length){t.innerHTML=`<div class="es"><div class="ei">🏷</div><p>No deals found for <strong>${e}</strong>.<br>Try a different search term or check back later for new circulars.</p></div>`;return}t.innerHTML="",n.forEach(i=>{const s=document.createElement("div");s.className="deal-card"+(i.onSale?" deal-match":"");const r=document.createElement("div");r.style.flex="1";const o=document.createElement("div");o.className="deal-store",o.textContent=i.store||"Store";const c=document.createElement("div");if(c.className="deal-name",c.textContent=i.name||"",i.brand||i.size){const m=document.createElement("div");m.style.cssText="font-size:.72rem;color:var(--mt);margin-top:1px",m.textContent=[i.brand,i.size].filter(Boolean).join(" · "),r.appendChild(o),r.appendChild(c),r.appendChild(m)}else r.appendChild(o),r.appendChild(c);const l=document.createElement("div");if(l.style.cssText="display:flex;align-items:baseline;gap:6px;margin-top:4px;flex-wrap:wrap",i.sale_price){const m=document.createElement("span");m.className="deal-price",m.textContent=i.sale_price,l.appendChild(m)}if(i.onSale&&i.regular){const m=document.createElement("span");m.className="deal-orig",m.textContent=i.regular,l.appendChild(m)}if(i.savings){const m=document.createElement("span");m.className="deal-badge",m.textContent="Save "+i.savings,l.appendChild(m)}r.appendChild(l);const h=document.createElement("button");h.className="btn bs bsm",h.style.cssText="align-self:center;flex-shrink:0;margin-left:8px",h.textContent="+ List",(m=>{h.onclick=()=>Vm(m)})(i.name||""),s.appendChild(r),s.appendChild(h),t.appendChild(s)})}function gc(n){const e=f("deals-stores");!e||!n||!n.length||(e.style.display="block",e.innerHTML='<div style="font-size:.72rem;color:var(--mt);font-weight:600;margin-bottom:4px">Stores with deals</div>'+n.map(t=>`<div style="font-size:.74rem;color:var(--tx2);padding:2px 0">${t.name}</div>`).join(""))}function Vm(n){const e=(n||"").replace(/&#39;/g,"'");d.shop.find(t=>t.name.toLowerCase()===e.toLowerCase())?R("Already on your list!"):(ye({id:Date.now().toString(),name:e,qty:1,checked:!1,src:"deal"}),R(e+" added!"))}async function yc(n){const e=d.cfg.zipcode;if(!e)throw new Error("Set your zipcode in Settings to search for local deals.");const t="ks-deals-"+e+"-"+n.toLowerCase().replace(/\s+/g,"_").substring(0,40),i=ce(t);if(i&&i.ts&&Date.now()-i.ts<72e5)return i;const s=await fetch("/api/deals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({zipcode:e,query:n})}),r=await s.json();if(!s.ok||r.error)throw new Error(r.message||r.error||"Deals API request failed");return Me(t,{...r,ts:Date.now()}),r}async function ME(){const n=f("dealsearch").value.trim();if(!n){R("Enter something to search");return}const e=f("dealsstatus");e.style.display="block",e.style.color="var(--mt)",e.textContent="🔍 Searching deals for "+n+" near "+(d.cfg.zipcode||"your area")+"…",f("dealslist").innerHTML="";try{const t=await yc(n);if(e.style.display="none",t.message){f("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${t.message}</p></div>`;return}t.stores&&gc(t.stores),mc(t.deals,n)}catch(t){e.style.color="var(--rd)",e.textContent=t.message||"Unknown error"}}async function OE(){const n=d.shop.filter(i=>!i.checked);if(!n.length){const i=Object.values(d.mp).filter(Boolean);if(!i.length){R("Add items to your list first!");return}if(!confirm(`Your list is empty. Search deals for this week's meals?

`+i.join(", ")))return;const r=f("dealsstatus");r.style.display="block",r.textContent="Searching deals for your meal plan...",f("dealslist").innerHTML="";try{const o=await yc(i.join(", "));if(r.style.display="none",o.message){f("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${o.message}</p></div>`;return}o.stores&&gc(o.stores),mc(o.deals,i.join(", "))}catch(o){r.style.color="var(--rd)",r.textContent=o.message}return}const e=f("dealsstatus"),t=n.slice(0,8).map(i=>i.name).join(", ");e.style.display="block",e.style.color="var(--mt)",e.textContent="Searching deals for: "+t+"...",f("dealslist").innerHTML="";try{const i=await yc(t);if(e.style.display="none",i.message){f("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${i.message}</p></div>`;return}i.stores&&gc(i.stores),i.deals.length?mc(i.deals,t):f("dealslist").innerHTML='<div class="es"><div class="ei">🏷</div><p>No deals found for your list items.<br/>Try searching for individual items.</p></div>'}catch(i){e.style.color="var(--rd)",e.textContent=i.message}}const Um=["Piece","Unit","Pack","Box","Bag","Bottle","Jar","Can","Bunch","Head","Loaf","Dozen","Carton","Tube","Roll","Gallon","Half Gallon","Liter","Pound","Oz","Clove"];function Fm(n){if(!n.brand)return!1;if(n.source==="scan"||n.source==="Barcode")return!0;if(n.source==="search"&&n.searchQuery){const e=n.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),t=n.brand.toLowerCase();return e.some(i=>t.includes(i))}return!1}function VE(n){qh[$i(n)];const e=At(n.expiry),t=e?e.c==="expired"?" expired":e.c==="expiring"?" expiring":"":"",i=e?`<div class="etag ${e.c}">${e.l}</div>`:"",s=Fm(n)?`<div class="sh-brand">${n.brand}</div>`:"";return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="inv">
    <div class="swipe-inner">
      <div class="iit${t}" onclick="swipeRowTap('${n.id}','inv')">
        <div class="sel-cb">✓</div>
        <!-- Slim outlined circle: tapping opens detail sheet -->
        <div class="shck" onclick="event.stopPropagation();openInvItemDetail('${n.id}')"></div>
        <div style="flex:1;min-width:0;cursor:pointer" onclick="event.stopPropagation();openInvItemDetail('${n.id}')">
          <div class="inm">${Ae(n.name)}</div>
          ${s}
          ${n.note?`<div class="shnote" style="margin-top:2px">📝 ${n.note}</div>`:""}
          ${i}
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div class="iqt">${go(n.qty)}</div>
          <div class="iun">${n.unit||"Unit"}</div>
          ${n.doNotRestock?'<div style="font-size:.55rem;color:var(--mt);margin-top:1px;opacity:.7">No restock</div>':""}
        </div>
      </div>
    </div>
    <!-- Add-to-shopping zone: slides in from left on right-swipe (green, mirrors delete zone) -->
    <div class="swipe-add" onclick="swipeAddItem('${n.id}','inv')">
      <div class="swipe-add-icon">🛒</div>
      <span class="swipe-add-label">Add to List</span>
    </div>
    <!-- Delete zone: slides in from right on swipe. Trash can lid animates open past threshold. -->
    <div class="swipe-del" onclick="swipeDelItem('${n.id}','inv')">
      <div class="swipe-del-icon">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path class="trash-lid" d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0H5"/>
          <path class="trash-body" d="M6 6v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6M10 11v6M14 11v6"/>
        </svg>
      </div>
      <span class="swipe-del-label">Delete</span>
    </div>
  </div>`}function Qs(){const n=(r,o)=>r.name.localeCompare(o.name),e=d.it==="all"?d.inv.slice().sort(n):d.inv.filter(r=>r.location===d.it).slice().sort(n),t=f("isub"),i={all:"items",fridge:"fridge items",freezer:"frozen items",pantry:"pantry items",household:"household items"};t&&(t.textContent=e.length+" "+(i[d.it]||"items")),Sm();const s=f("ibody");if(s){if(!e.length){s.innerHTML='<div class="es"><div class="ei">🧺</div><p>No items here yet.<br/>Tap + Add item to get started.</p></div>';return}s.innerHTML=`<div class="ilst">${e.map(VE).join("")}</div>`,d.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(r=>{r.classList.add("selecting"),d.selectedIds.has(r.dataset.id)&&r.classList.add("selected")})}}function UE(n){Js(n)}async function Js(n){if(d.selectMode)return;const e=d.inv.find(N=>N.id===n);if(!e)return;const t=f("invItemDetailContent");if(!t)return;const s=`<div class="item-detail-img-ph" style="display:flex;align-items:center;justify-content:center">
    <div style="font-size:1.6rem">${qh[$i(e)]||"🛒"}</div>
  </div>`,r="",o=Fm(e),c=e.unit||"Unit",l=Um.map(N=>`<option value="${N}"${N===c?" selected":""}>${N}</option>`).join(""),h=e.restockThreshold!=null?e.restockThreshold:wl(c),m=At(e.expiry);let y=`<div class="item-detail-header">
    <div>${s}${r}</div>
    <div style="flex:1;min-width:0">
      <div class="item-detail-name">${Ae(e.name)}</div>
      ${o?`<div class="item-detail-brand">${e.brand}</div>`:""}
      <div style="font-size:.7rem;color:var(--mt);margin-top:4px">Added ${e.addedAt||"—"}</div>
    </div>
  </div>`;y+=`<div class="item-detail-section">
    <div class="item-detail-label">Location</div>
    <div class="lpick">
      <button class="lbtn ${e.location==="fridge"?"sel":""}" onclick="changeInvLocation('${e.id}','fridge',this)">🌡 Fridge</button>
      <button class="lbtn ${e.location==="freezer"?"sel":""}" onclick="changeInvLocation('${e.id}','freezer',this)">🧊 Freezer</button>
      <button class="lbtn ${e.location==="pantry"?"sel":""}" onclick="changeInvLocation('${e.id}','pantry',this)">🥫 Pantry</button>
      <button class="lbtn ${e.location==="household"?"sel":""}" onclick="changeInvLocation('${e.id}','household',this)">🏠 Household</button>
    </div>
  </div>`;const{whole:w,frac:E}=Wr(e.qty);y+=`<div class="item-detail-section">
    <div class="item-detail-label">Quantity</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeInvQty('${e.id}',-1)">−</button>
        <input class="qinp" id="inv-qty-${e.id}" type="number" min="0" max="99" value="${w}" style="width:48px;text-align:center" onblur="changeInvQtyDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeInvQty('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${Ma(`inv-frac-${e.id}`,E).replace("<select",`<select onchange="changeInvFrac('`+e.id+`')"`)}
      </div>
    </div>
  </div>`,y+=`<div class="item-detail-section">
    <div class="item-detail-label">Unit of Measure</div>
    <select class="detail-select" onchange="changeInvUnit('${e.id}',this.value)">
      ${l}
    </select>
  </div>`,e.expiry?y+=`<div class="item-detail-section">
      <div class="item-detail-label">Expiry Date <span class="otag">optional</span></div>
      <div style="display:flex;align-items:center;gap:8px">
        <input class="fd" id="inv-expiry-${e.id}" type="date" value="${e.expiry}" onchange="changeInvExpiry('${e.id}')" style="flex:1"/>
        <button class="inv-expiry-clear-btn" onclick="clearInvExpiry('${e.id}')" title="Clear expiry date">✕ Clear</button>
      </div>
      ${m?`<div class="etag ${m.c}" style="margin-top:6px">${m.l}</div>`:""}
    </div>`:y+=`<div class="item-detail-section">
      <div class="item-detail-label">Expiry Date <span class="otag">optional</span></div>
      <div style="display:flex;align-items:center;gap:10px">
        <span class="inv-no-expiry-badge">No expiry set</span>
        <button class="inv-set-expiry-btn" onclick="setInvExpiry('${e.id}')">Set expiry</button>
      </div>
    </div>`,y+=`<div class="item-detail-section">
    <div class="item-detail-label">Notes <span class="otag">optional</span></div>
    <textarea class="sh-note-inp" id="inv-note-${e.id}" rows="2" placeholder="Brand, store, reminders…" onblur="changeInvNote('${e.id}')">${e.note||""}</textarea>
  </div>`;const{whole:A,frac:P}=Wr(h);y+=`<div class="item-detail-section">
    <div class="item-detail-label">Restock when below</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeInvThreshold('${e.id}',-1)">−</button>
        <input class="qinp" id="inv-thresh-${e.id}" type="number" min="0" max="99" value="${A}" style="width:48px;text-align:center" onblur="changeInvThresholdDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeInvThreshold('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${Ma(`inv-threshfrac-${e.id}`,P).replace("<select",`<select onchange="changeInvThreshFrac('`+e.id+`')"`)}
      </div>
    </div>
  </div>`,y+=`<div class="item-detail-section" style="display:flex;align-items:center;justify-content:space-between">
    <div class="item-detail-label" style="margin-bottom:0">Don't add to Running Low</div>
    <label class="toggle-switch">
      <input type="checkbox" ${e.doNotRestock?"checked":""} onchange="toggleDoNotRestock('${e.id}',this.checked)"/>
      <span class="toggle-slider"></span>
    </label>
  </div>`,y+=`<button class="btn bf" style="margin-top:12px;background:var(--gnd);color:var(--gn);border:1.5px solid var(--gn)" onclick="addInvToShopping('${e.id}')">🛒 Add to Shopping List</button>
  <button class="btn bd bf" onclick="closeInvItemDetail();remItem('${e.id}')" style="margin-top:8px">Remove</button>`,t.innerHTML=y;const $=f("invItemDetailBackdrop"),U=f("invItemDetailSheet");$&&$.classList.add("active"),U&&U.classList.add("active")}function Bm(){const n=f("invItemDetailBackdrop"),e=f("invItemDetailSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}async function FE(n){}function BE(n){}async function HE(n){}async function jE(n){const e=d.inv.find(t=>t.id===n);if(e){const t=At(e.expiry);t&&(t.c==="expired"||t.c==="expiring")&&await Jf(e.name)}await Bs(n),R("Item removed"),Ee("adj")}async function zE(n,e){const t=d.inv.find(i=>i.id===d.adjId);t&&(document.querySelectorAll("#adjbody .lbtn").forEach(i=>i.classList.remove("sel")),e.classList.add("sel"),await re({...t,location:n}),_l(t.name,n))}async function qE(n){const e=d.inv.find(i=>i.id===d.adjId);if(!e)return;const t=Math.max(0,(e.qty||1)+n);t<=0||(f("adjqty").value=t,await re({...e,qty:t}))}async function WE(){const n=d.inv.find(t=>t.id===d.adjId);if(!n)return;const e=parseInt(f("adjqty").value);!isNaN(e)&&e>=0&&await re({...n,qty:e})}async function GE(){const n=d.inv.find(e=>e.id===d.adjId);n&&await re({...n,expiry:f("adjexp").value||null})}async function KE(){const n=d.inv.find(t=>t.id===d.adjId);if(!n)return;const e=(f("adjnote").value||"").trim();await re({...n,note:e||null})}async function QE(){const n=d.inv.find(i=>i.id===d.adjId);if(!n)return;const e=f("adjunit").value;await re({...n,unit:e}),bl(n.name,e);const t=d.shop.find(i=>i.name.toLowerCase().trim()===n.name.toLowerCase().trim());t&&await ye({...t,unit:e}),R("Unit updated everywhere")}async function JE(n){const e=d.inv.find(s=>s.id===d.adjId);if(!e)return;const t=e.restockThreshold!=null?e.restockThreshold:wl(e.unit),i=Math.max(0,t+n);f("adjlowthresh").value=i,await re({...e,restockThreshold:i})}async function YE(){const n=d.inv.find(t=>t.id===d.adjId);if(!n)return;const e=parseInt(f("adjlowthresh").value);!isNaN(e)&&e>=0&&await re({...n,restockThreshold:e})}async function XE(){var t;const n=d.inv.find(i=>i.id===d.adjId);if(!n)return;const e=((t=f("adjdonotrestock"))==null?void 0:t.checked)||!1;await re({...n,doNotRestock:e})}async function ZE(n,e){const t=d.inv.find(r=>r.id===n);if(!t)return;const i={...t,unit:e};t.restockThreshold==null,await re(i),bl(t.name,e);const s=d.shop.find(r=>r.name.toLowerCase().trim()===t.name.toLowerCase().trim());s&&await ye({...s,unit:e}),R("Unit updated everywhere"),Js(n)}async function ek(n,e){const t=d.inv.find(h=>h.id===n);if(!t)return;const i=f(`inv-thresh-${n}`),s=f(`inv-threshfrac-${n}`),r=parseInt(i==null?void 0:i.value,10)||0,o=parseFloat(s==null?void 0:s.value)||0,c=Math.max(0,r+e),l=c+o;i&&(i.value=c),await re({...t,restockThreshold:Math.max(0,l)})}async function tk(n){const e=d.inv.find(o=>o.id===n);if(!e)return;const t=f(`inv-thresh-${n}`),i=f(`inv-threshfrac-${n}`),s=parseInt(t==null?void 0:t.value,10),r=parseFloat(i==null?void 0:i.value)||0;isNaN(s)||s<0||await re({...e,restockThreshold:Math.max(0,s+r)})}async function nk(n){const e=d.inv.find(o=>o.id===n);if(!e)return;const t=f(`inv-thresh-${n}`),i=f(`inv-threshfrac-${n}`),s=parseInt(t==null?void 0:t.value,10)||0,r=parseFloat(i==null?void 0:i.value)||0;await re({...e,restockThreshold:Math.max(0,s+r)})}async function ik(n,e){const t=d.inv.find(i=>i.id===n);t&&await re({...t,doNotRestock:e})}async function sk(n,e,t){const i=d.inv.find(r=>r.id===n);if(!i)return;const s=f("invItemDetailContent");s&&s.querySelectorAll(".lbtn").forEach(r=>r.classList.remove("sel")),t&&t.classList.add("sel"),await re({...i,location:e}),_l(i.name,e)}async function rk(n,e){const t=d.inv.find(h=>h.id===n);if(!t)return;const i=f(`inv-qty-${n}`),s=f(`inv-frac-${n}`),r=parseInt(i==null?void 0:i.value,10)||0,o=parseFloat(s==null?void 0:s.value)||0,c=Math.max(0,Math.min(99,r+e)),l=vn(c,o);e<0&&vn(r,o)<=.25||(i&&(i.value=Math.floor(l)),c===0&&o===0&&s&&(s.value="0.25"),await re({...t,qty:l}))}async function ok(n){const e=d.inv.find(c=>c.id===n);if(!e)return;const t=f(`inv-qty-${n}`),i=f(`inv-frac-${n}`),s=parseInt(t==null?void 0:t.value,10),r=parseFloat(i==null?void 0:i.value)||0;if(isNaN(s)||s<0)return;const o=vn(s,r);await re({...e,qty:o})}async function ak(n){const e=d.inv.find(c=>c.id===n);if(!e)return;const t=f(`inv-qty-${n}`),i=f(`inv-frac-${n}`),s=parseInt(t==null?void 0:t.value,10)||0,r=parseFloat(i==null?void 0:i.value)||0,o=vn(s,r);r===0&&s===0&&t&&(t.value=1),await re({...e,qty:o})}async function ck(n){const e=d.inv.find(i=>i.id===n);if(!e)return;const t=f(`inv-expiry-${n}`);await re({...e,expiry:(t==null?void 0:t.value)||null})}async function lk(n){const e=d.inv.find(t=>t.id===n);e&&(await re({...e,expiry:null}),Js(n))}async function uk(n){const e=d.inv.find(i=>i.id===n);if(!e)return;const t=new Date().toISOString().split("T")[0];await re({...e,expiry:t}),Js(n)}async function dk(n){const e=d.inv.find(s=>s.id===n);if(!e)return;const t=f(`inv-note-${n}`),i=((t==null?void 0:t.value)||"").trim();await re({...e,note:i||null})}function hk(n){d.it=n,document.querySelectorAll(".itab").forEach(t=>t.classList.remove("active"));const e=f("itab-"+n);e&&e.classList.add("active"),Qs()}async function fk(){const n=f("man").value.trim();if(!n)return;const e=f("mac").value,t=f("mau").value.trim()||"unit",i=Math.max(1,parseInt(f("maq").value)||1),s=f("mae").value||null,r="itm-"+n.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now();await re({id:r,barcode:r,name:n,brand:"",unit:t,qty:i,location:d.maL,category:e,image:null,source:"Manual",expiry:s,addedAt:new Date().toLocaleDateString()}),f("man").value="",f("maq").value=1,f("mae").value="",f("mabtn").disabled=!0,R(`${n} added!`),Ee("madd"),Il()}function pk(){f("mabtn").disabled=!f("man").value.trim()}function mk(n){const e=f("maq");e.value=Math.max(1,(parseInt(e.value)||1)+n)}function gk(n,e){d.maL=n,document.querySelectorAll("#ov-madd .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}async function yk(){const n=f("imptxt").value.trim();if(!n)return;let e=0,t=0,i="pantry";for(const s of n.split(`
`)){const r=s.toLowerCase();r.includes("fridge")?i="fridge":r.includes("freezer")?i="freezer":r.includes("pantry")&&(i="pantry");const o=s.match(/^\|\s*([^|]+?)\s*\|\s*(\d+(?:\.\d+)?)\s*\|\s*([^|]+?)\s*\|/),c=s.match(/^[-*]\s+(.+?):\s*(\d+(?:\.\d+)?)\s*([a-zA-Z%\/]+.*)?$/);let l,h,m;if(o?(l=o[1].trim(),h=parseFloat(o[2]),m=o[3].trim()):c&&(l=c[1].trim(),h=parseFloat(c[2]),m=(c[3]||"unit").trim()),l&&h&&l!=="Item"&&l!=="---"&&!l.startsWith("-")){const y="item-imp-"+l.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),w=d.inv.find(E=>E.id===y);await re({id:y,barcode:y,name:l,brand:"",unit:m||"unit",qty:h,location:i,category:"Imported",image:null,source:"Imported",expiry:null,addedAt:w?w.addedAt:new Date().toLocaleDateString()}),w?t++:e++}}f("imptxt").value="",R(`Imported ${e} new, updated ${t}`),Ee("import")}let Is=null,yn=null,Vo="fridge",it=null,xa=!1,br="",Pa=!1;const os=new Map,vk=300*1e3,wk=30;function _k(){const n=f("invAddBackdrop"),e=f("invAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),Vo="fridge",document.querySelectorAll("#invAddSheet .lbtn").forEach(i=>i.classList.remove("sel"));const t=f("invAddLoc-fridge");t&&t.classList.add("sel"),setTimeout(()=>{const i=f("invi");i&&(i.value="",i.focus())},150)}function Ys(){const n=f("invAddBackdrop"),e=f("invAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),kl()}function bk(){Ys(),window.openScanForInventory&&window.openScanForInventory()}function Tk(){Ys(),Hm()}function Ik(n,e){Vo=n,document.querySelectorAll("#invAddSheet .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function Ek(){const n=f("invAddNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=f("invAddNoteInp");t&&t.focus()}}async function kk(){const n=f("invi"),e=n?n.value.trim():"";if(!e)return;let t=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||1):s&&(t=s[2].trim(),i=parseInt(s[1],10)||1);const o=f("invAddNoteInp"),c=o?o.value.trim():"",l=await Oo(t),h=(l==null?void 0:l.preferredLocation)||Vo,m=(l==null?void 0:l.preferredUnit)||null,y="itm-"+t.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),w={id:y,barcode:y,name:t,brand:"",unit:m||"unit",qty:i,location:h,category:$i({name:t}),image:null,source:"Manual",expiry:null,addedAt:new Date().toLocaleDateString()};c&&(w.note=c),re(w),R(`${t} added!`),n&&(n.value=""),o&&(o.value="");const E=f("invAddNoteWrap");E&&(E.style.display="none"),kl(),Ys(),Il()}function Sk(){Is&&clearTimeout(Is);const n=f("invi"),e=n?n.value.trim():"",t=f("invSearchDropdown");if(!e||e.length<2){t&&(t.classList.remove("active"),t.innerHTML=""),yn=null;return}Is=setTimeout(()=>xk(e),350)}function Ck(n){if(!n)return"NONE";const e=n.toLowerCase();return e.includes("kroger.com")?"Kroger (real product)":e.includes("img.spoonacular.com/products")?"Spoonacular product (real photo)":e.includes("img.spoonacular.com/ingredients")?"Spoonacular ingredient (illustration)":e.includes("openfoodfacts.org")?"Open Food Facts (real photo)":e.includes("edamam")?"Edamam":"Other: "+new URL(n).hostname}function Eh(n){const e=f("invSearchDropdown");!e||!n.length||(yn=n,n.forEach((t,i)=>{const s=Ck(t.image);console.log(`[InvDropdown] #${i} "${t.name}" → image: ${s} | url: ${t.image||"(none)"} | score: ${t._score}`)}),e.innerHTML=n.map((t,i)=>{const s='<div class="enrich-img-ph">🛒</div>',r=t.category&&t.category!=="General"?`<div class="enrich-cat">${t.category}</div>`:"";return`<div class="enrich-row" onclick="pickInvInlineResult(${i})">
      ${s}
      <div class="enrich-text">
        <div class="enrich-name">${t.name}</div>
        ${r}
      </div>
    </div>`}).join(""),e.classList.add("active"))}async function Ak(n){return null}async function Rk(n){const e=n.toLowerCase(),t=os.get(e);if(t&&Date.now()-t.ts<vk)return t.scored;const i=d.hid?`&hid=${encodeURIComponent(d.hid)}`:"";let o=(await(await fetch(`/api/text-search?q=${encodeURIComponent(n)}${i}`)).json()).results||[];const c=n.toLowerCase().split(/\s+/).filter(h=>h.length>=2);o=o.filter(h=>{const m=(h.name||"").toLowerCase();return c.some(y=>m.includes(y))});const l=o.map(h=>({...h,_score:dE(h.name||"",n)})).filter(h=>h._score>=15).sort((h,m)=>m._score-h._score).slice(0,5);return os.set(e,{scored:l,ts:Date.now()}),os.size>wk&&os.delete(os.keys().next().value),l}async function xk(n){const e=f("invSearchDropdown");if(e){e.innerHTML='<div class="search-hint">Searching…</div>',e.classList.add("active");try{const t=Ak(n),i=Rk(n),s=await t;s&&(f("invi")?f("invi").value.trim():"").toLowerCase()===n.toLowerCase()&&(console.log(`[InvSearch] Instant custom product match for "${n}"`),Eh([s]));const r=await i;if((f("invi")?f("invi").value.trim():"").toLowerCase()!==n.toLowerCase())return;let c=r;if(s){const l=normalizeProductName(s.name),h=r.filter(m=>normalizeProductName(m.name)!==l);c=[s,...h].slice(0,5)}if(!c.length){e.classList.remove("active"),e.innerHTML="",yn=null;return}Eh(c)}catch(t){console.warn("Inventory inline search failed:",t),e.classList.remove("active"),e.innerHTML="",yn=null}}}async function Pk(n){if(!yn||!yn[n])return;const e=yn[n],t=f("invAddNoteInp"),i=t?t.value.trim():"",s=await Oo(e.name),r="itm-"+(e.name||"item").toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),o={id:r,barcode:r,name:e.name,brand:e.brand||"",unit:(s==null?void 0:s.preferredUnit)||"unit",qty:1,location:(s==null?void 0:s.preferredLocation)||Vo,category:e.category||$i({name:e.name}),source:e.source||"search",expiry:null,addedAt:new Date().toLocaleDateString()};i&&(o.note=i),re(o),R(`Added "${e.name}" ✓`);const c=f("invi");c&&(c.value=""),t&&(t.value="");const l=f("invAddNoteWrap");l&&(l.style.display="none"),kl(),Ys()}function kl(){Is&&clearTimeout(Is),yn=null;const n=f("invSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}function $k(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=f("invAddMicOpt");e&&(e.style.display="")}function kh(n){const e=f("inv-micstatus");e&&e.classList.toggle("visible",n)}function Hm(){if(xa&&it){Pa=!0,it.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){R("Voice input not supported");return}it=new n,it.lang="en-US",it.interimResults=!0,it.maxAlternatives=1,it.continuous=!1,br="",xa=!0,kh(!0),it.onresult=e=>{let t="";for(let s=e.resultIndex;s<e.results.length;s++){const r=e.results[s][0].transcript;e.results[s].isFinal?br+=r:t+=r}const i=f("invi");i&&(i.value=(br+t).trim())},it.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&R("Couldn't hear that — try again")},it.onend=async()=>{xa=!1,kh(!1),it=null;let e=br.trim();if(!e&&Pa){const o=f("invi");e=o?o.value.trim():""}if(Pa=!1,!e)return;const t=await Oo(e),i="itm-"+e.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),s=(t==null?void 0:t.preferredLocation)||bc(e);re({id:i,barcode:i,name:e,brand:"",unit:(t==null?void 0:t.preferredUnit)||"unit",qty:1,location:s,category:$i({name:e}),image:null,source:"Voice",expiry:null,addedAt:new Date().toLocaleDateString()}),R(`Added "${e}" to ${s}`);const r=f("invi");r&&(r.value=""),Il()},it.start()}async function Lk(n){const{svShopItem:e}=await eE(async()=>{const{svShopItem:s}=await Promise.resolve().then(()=>Rb);return{svShopItem:s}},void 0),t=d.inv.find(s=>s.id===n);if(!t)return;if(d.shop.find(s=>s.name.toLowerCase()===t.name.toLowerCase()&&!s.checked)){R(`${t.name} is already on your list`);return}await e({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:t.name,qty:1,checked:!1,brand:t.brand||"",image:t.image||null,src:"supplies"}),R(`${t.name} added to shopping list 🛒`),Bm()}/**
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
 */const jm="firebasestorage.googleapis.com",zm="storageBucket",Dk=120*1e3,Nk=600*1e3;/**
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
 */class ve extends Pt{constructor(e,t,i=0){super($a(e),`Firebase Storage: ${t} (${$a(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ve.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return $a(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ge;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ge||(ge={}));function $a(n){return"storage/"+n}function Sl(){const n="An unknown error occurred, please check the error payload for server response.";return new ve(ge.UNKNOWN,n)}function Mk(n){return new ve(ge.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Ok(n){return new ve(ge.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Vk(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ve(ge.UNAUTHENTICATED,n)}function Uk(){return new ve(ge.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Fk(n){return new ve(ge.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Bk(){return new ve(ge.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Hk(){return new ve(ge.CANCELED,"User canceled the upload/download.")}function jk(n){return new ve(ge.INVALID_URL,"Invalid URL '"+n+"'.")}function zk(n){return new ve(ge.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function qk(){return new ve(ge.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+zm+"' property when initializing the app?")}function Wk(){return new ve(ge.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Gk(){return new ve(ge.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Kk(n){return new ve(ge.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function vc(n){return new ve(ge.INVALID_ARGUMENT,n)}function qm(){return new ve(ge.APP_DELETED,"The Firebase app was deleted.")}function Qk(n){return new ve(ge.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Es(n,e){return new ve(ge.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function as(n){throw new ve(ge.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class et{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=et.makeFromUrl(e,t)}catch{return new et(e,"")}if(i.path==="")return i;throw zk(e)}static makeFromUrl(e,t){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function h(D){D.path_=decodeURIComponent(D.path)}const m="v[A-Za-z0-9_]+",y=t.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",E=new RegExp(`^https?://${y}/${m}/b/${s}/o${w}`,"i"),A={bucket:1,path:3},P=t===jm?"(?:storage.googleapis.com|storage.cloud.google.com)":t,$="([^?#]*)",U=new RegExp(`^https?://${P}/${s}/${$}`,"i"),M=[{regex:c,indices:l,postModify:r},{regex:E,indices:A,postModify:h},{regex:U,indices:{bucket:1,path:2},postModify:h}];for(let D=0;D<M.length;D++){const F=M[D],H=F.regex.exec(e);if(H){const b=H[F.indices.bucket];let v=H[F.indices.path];v||(v=""),i=new et(b,v),F.postModify(i);break}}if(i==null)throw jk(e);return i}}class Jk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Yk(n,e,t){let i=1,s=null,r=null,o=!1,c=0;function l(){return c===2}let h=!1;function m(...$){h||(h=!0,e.apply(null,$))}function y($){s=setTimeout(()=>{s=null,n(E,l())},$)}function w(){r&&clearTimeout(r)}function E($,...U){if(h){w();return}if($){w(),m.call(null,$,...U);return}if(l()||o){w(),m.call(null,$,...U);return}i<64&&(i*=2);let M;c===1?(c=2,M=0):M=(i+Math.random())*1e3,y(M)}let A=!1;function P($){A||(A=!0,w(),!h&&(s!==null?($||(c=2),clearTimeout(s),y(0)):$||(c=1)))}return y(0),r=setTimeout(()=>{o=!0,P(!0)},t),P}function Xk(n){n(!1)}/**
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
 */function Zk(n){return n!==void 0}function eS(n){return typeof n=="object"&&!Array.isArray(n)}function Cl(n){return typeof n=="string"||n instanceof String}function Sh(n){return Al()&&n instanceof Blob}function Al(){return typeof Blob<"u"}function Ch(n,e,t,i){if(i<e)throw vc(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw vc(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function Uo(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function Wm(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const s=e(i)+"="+e(n[i]);t=t+s+"&"}return t=t.slice(0,-1),t}var jn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(jn||(jn={}));/**
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
 */function tS(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||s||r}/**
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
 */class nS{constructor(e,t,i,s,r,o,c,l,h,m,y,w=!0,E=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=m,this.connectionFactory_=y,this.retry=w,this.isUsingEmulator=E,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((A,P)=>{this.resolve_=A,this.reject_=P,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Tr(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=c=>{const l=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const c=r.getErrorCode()===jn.NO_ERROR,l=r.getStatus();if(!c||tS(l,this.additionalRetryCodes_)&&this.retry){const m=r.getErrorCode()===jn.ABORT;i(!1,new Tr(!1,null,m));return}const h=this.successCodes_.indexOf(l)!==-1;i(!0,new Tr(h,r))})},t=(i,s)=>{const r=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());Zk(l)?r(l):r()}catch(l){o(l)}else if(c!==null){const l=Sl();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?qm():Hk();o(l)}else{const l=Bk();o(l)}};this.canceled_?t(!1,new Tr(!1,null,!0)):this.backoffId_=Yk(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Xk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Tr{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function iS(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function sS(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function rS(n,e){e&&(n["X-Firebase-GMPID"]=e)}function oS(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function aS(n,e,t,i,s,r,o=!0,c=!1){const l=Wm(n.urlParams),h=n.url+l,m=Object.assign({},n.headers);return rS(m,e),iS(m,t),sS(m,r),oS(m,i),new nS(h,n.method,m,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o,c)}/**
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
 */function cS(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function lS(...n){const e=cS();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(Al())return new Blob(n);throw new ve(ge.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function uS(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function dS(n){if(typeof atob>"u")throw Kk("base-64");return atob(n)}/**
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
 */const Tt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class La{constructor(e,t){this.data=e,this.contentType=t||null}}function hS(n,e){switch(n){case Tt.RAW:return new La(Gm(e));case Tt.BASE64:case Tt.BASE64URL:return new La(Km(n,e));case Tt.DATA_URL:return new La(pS(e),mS(e))}throw Sl()}function Gm(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const r=i,o=n.charCodeAt(++t);i=65536|(r&1023)<<10|o&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function fS(n){let e;try{e=decodeURIComponent(n)}catch{throw Es(Tt.DATA_URL,"Malformed data URL.")}return Gm(e)}function Km(n,e){switch(n){case Tt.BASE64:{const s=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(s||r)throw Es(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Tt.BASE64URL:{const s=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(s||r)throw Es(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=dS(e)}catch(s){throw s.message.includes("polyfill")?s:Es(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}class Qm{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Es(Tt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=gS(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function pS(n){const e=new Qm(n);return e.base64?Km(Tt.BASE64,e.rest):fS(e.rest)}function mS(n){return new Qm(n).contentType}function gS(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class an{constructor(e,t){let i=0,s="";Sh(e)?(this.data_=e,i=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Sh(this.data_)){const i=this.data_,s=uS(i,e,t);return s===null?null:new an(s)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new an(i,!0)}}static getBlob(...e){if(Al()){const t=e.map(i=>i instanceof an?i.data_:i);return new an(lS.apply(null,t))}else{const t=e.map(o=>Cl(o)?hS(Tt.RAW,o).data:o.data_);let i=0;t.forEach(o=>{i+=o.byteLength});const s=new Uint8Array(i);let r=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)s[r++]=o[c]}),new an(s,!0)}}uploadData(){return this.data_}}/**
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
 */function Jm(n){let e;try{e=JSON.parse(n)}catch{return null}return eS(e)?e:null}/**
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
 */function yS(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function vS(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function Ym(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function wS(n,e){return e}class qe{constructor(e,t,i,s){this.server=e,this.local=t||e,this.writable=!!i,this.xform=s||wS}}let Ir=null;function _S(n){return!Cl(n)||n.length<2?n:Ym(n)}function Xm(){if(Ir)return Ir;const n=[];n.push(new qe("bucket")),n.push(new qe("generation")),n.push(new qe("metageneration")),n.push(new qe("name","fullPath",!0));function e(r,o){return _S(o)}const t=new qe("name");t.xform=e,n.push(t);function i(r,o){return o!==void 0?Number(o):o}const s=new qe("size");return s.xform=i,n.push(s),n.push(new qe("timeCreated")),n.push(new qe("updated")),n.push(new qe("md5Hash",null,!0)),n.push(new qe("cacheControl",null,!0)),n.push(new qe("contentDisposition",null,!0)),n.push(new qe("contentEncoding",null,!0)),n.push(new qe("contentLanguage",null,!0)),n.push(new qe("contentType",null,!0)),n.push(new qe("metadata","customMetadata",!0)),Ir=n,Ir}function bS(n,e){function t(){const i=n.bucket,s=n.fullPath,r=new et(i,s);return e._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:t})}function TS(n,e,t){const i={};i.type="file";const s=t.length;for(let r=0;r<s;r++){const o=t[r];i[o.local]=o.xform(i,e[o.server])}return bS(i,n),i}function Zm(n,e,t){const i=Jm(e);return i===null?null:TS(n,i,t)}function IS(n,e,t,i){const s=Jm(e);if(s===null||!Cl(s.downloadTokens))return null;const r=s.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(h=>{const m=n.bucket,y=n.fullPath,w="/b/"+o(m)+"/o/"+o(y),E=Uo(w,t,i),A=Wm({alt:"media",token:h});return E+A})[0]}function ES(n,e){const t={},i=e.length;for(let s=0;s<i;s++){const r=e[s];r.writable&&(t[r.server]=n[r.local])}return JSON.stringify(t)}class Rl{constructor(e,t,i,s){this.url=e,this.method=t,this.handler=i,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function eg(n){if(!n)throw Sl()}function kS(n,e){function t(i,s){const r=Zm(n,s,e);return eg(r!==null),r}return t}function SS(n,e){function t(i,s){const r=Zm(n,s,e);return eg(r!==null),IS(r,s,n.host,n._protocol)}return t}function tg(n){function e(t,i){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=Uk():s=Vk():t.getStatus()===402?s=Ok(n.bucket):t.getStatus()===403?s=Fk(n.path):s=i,s.status=t.getStatus(),s.serverResponse=i.serverResponse,s}return e}function ng(n){const e=tg(n);function t(i,s){let r=e(i,s);return i.getStatus()===404&&(r=Mk(n.path)),r.serverResponse=s.serverResponse,r}return t}function CS(n,e,t){const i=e.fullServerUrl(),s=Uo(i,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,c=new Rl(s,r,SS(n,t),o);return c.errorHandler=ng(e),c}function AS(n,e){const t=e.fullServerUrl(),i=Uo(t,n.host,n._protocol),s="DELETE",r=n.maxOperationRetryTime;function o(l,h){}const c=new Rl(i,s,o,r);return c.successCodes=[200,204],c.errorHandler=ng(e),c}function RS(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function xS(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=RS(null,e)),i}function PS(n,e,t,i,s){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let M="";for(let D=0;D<2;D++)M=M+Math.random().toString().slice(2);return M}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const h=xS(e,i,s),m=ES(h,t),y="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+l+`\r
Content-Type: `+h.contentType+`\r
\r
`,w=`\r
--`+l+"--",E=an.getBlob(y,i,w);if(E===null)throw Wk();const A={name:h.fullPath},P=Uo(r,n.host,n._protocol),$="POST",U=n.maxUploadRetryTime,N=new Rl(P,$,kS(n,t),U);return N.urlParams=A,N.headers=o,N.body=E.uploadData(),N.errorHandler=tg(e),N}class $S{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=jn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=jn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=jn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,s,r){if(this.sent_)throw as("cannot .send() more than once");if(Cn(e)&&i&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw as("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw as("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw as("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw as("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class LS extends $S{initXhr(){this.xhr_.responseType="text"}}function xl(){return new LS}/**
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
 */class Qn{constructor(e,t){this._service=e,t instanceof et?this._location=t:this._location=et.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Qn(e,t)}get root(){const e=new et(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ym(this._location.path)}get storage(){return this._service}get parent(){const e=yS(this._location.path);if(e===null)return null;const t=new et(this._location.bucket,e);return new Qn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Qk(e)}}function DS(n,e,t){n._throwIfRoot("uploadBytes");const i=PS(n.storage,n._location,Xm(),new an(e,!0),t);return n.storage.makeRequestWithTokens(i,xl).then(s=>({metadata:s,ref:n}))}function NS(n){n._throwIfRoot("getDownloadURL");const e=CS(n.storage,n._location,Xm());return n.storage.makeRequestWithTokens(e,xl).then(t=>{if(t===null)throw Gk();return t})}function MS(n){n._throwIfRoot("deleteObject");const e=AS(n.storage,n._location);return n.storage.makeRequestWithTokens(e,xl)}function OS(n,e){const t=vS(n._location.path,e),i=new et(n._location.bucket,t);return new Qn(n.storage,i)}/**
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
 */function VS(n){return/^[A-Za-z]+:\/\//.test(n)}function US(n,e){return new Qn(n,e)}function ig(n,e){if(n instanceof Pl){const t=n;if(t._bucket==null)throw qk();const i=new Qn(t,t._bucket);return e!=null?ig(i,e):i}else return e!==void 0?OS(n,e):n}function FS(n,e){if(e&&VS(e)){if(n instanceof Pl)return US(n,e);throw vc("To use ref(service, url), the first argument must be a Storage instance.")}else return ig(n,e)}function Ah(n,e){const t=e==null?void 0:e[zm];return t==null?null:et.makeFromBucketSpec(t,n)}function BS(n,e,t,i={}){n.host=`${e}:${t}`;const s=Cn(e);s&&(Tc(`https://${n.host}/b`),Ic("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:r}=i;r&&(n._overrideAuthToken=typeof r=="string"?r:Zh(r,n.app.options.projectId))}class Pl{constructor(e,t,i,s,r,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._isUsingEmulator=o,this._bucket=null,this._host=jm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Dk,this._maxUploadRetryTime=Nk,this._requests=new Set,s!=null?this._bucket=et.makeFromBucketSpec(s,this._host):this._bucket=Ah(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=et.makeFromBucketSpec(this._url,e):this._bucket=Ah(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ch("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ch("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(We(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Qn(this,e)}_makeRequest(e,t,i,s,r=!0){if(this._deleted)return new Jk(qm());{const o=aS(e,this._appId,i,s,t,this._firebaseVersion,r,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,s).getPromise()}}const Rh="@firebase/storage",xh="0.14.1";/**
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
 */const sg="storage";function HS(n,e,t){return n=Le(n),DS(n,e,t)}function jS(n){return n=Le(n),NS(n)}function zS(n){return n=Le(n),MS(n)}function rg(n,e){return n=Le(n),FS(n,e)}function qS(n=Sc(),e){n=Le(n);const i=vo(n,sg).getImmediate({identifier:e}),s=Jh("storage");return s&&WS(i,...s),i}function WS(n,e,t,i={}){BS(n,e,t,i)}function GS(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Pl(t,i,s,e,Jn)}function KS(){qn(new wn(sg,GS,"PUBLIC").setMultipleInstances(!0)),It(Rh,xh,""),It(Rh,xh,"esm2020")}KS();const og=qS(Oc);function QS(n,e,t,i){return new Promise((s,r)=>{const o=new Image,c=new FileReader;c.onload=l=>{o.onload=()=>{let h=o.width,m=o.height;if(h>e||m>t){const P=Math.min(e/h,t/m);h=Math.round(h*P),m=Math.round(m*P)}const y=document.createElement("canvas");y.width=h,y.height=m,y.getContext("2d").drawImage(o,0,0,h,m);let E=.82;const A=()=>{y.toBlob(P=>{if(!P)return r(new Error("Canvas compression failed"));P.size<=i||E<=.3?s(P):(E-=.1,A())},"image/jpeg",E)};A()},o.onerror=()=>r(new Error("Failed to load image")),o.src=l.target.result},c.onerror=()=>r(new Error("Failed to read file")),c.readAsDataURL(n)})}async function $l(n,e,t,i,s){if(!n)throw new Error("No file provided");const r=await QS(n,t,i,s);console.log(`[uploadRecipeImage] Compressed to ${(r.size/1024).toFixed(1)}KB → ${e}`);const o=rg(og,e);await HS(o,r,{contentType:"image/jpeg"});const c=await jS(o);return console.log("[uploadRecipeImage] Upload complete:",e),c}async function ag(n,e){return $l(n,`recipes/${e}/cover.jpg`,800,600,300*1024)}async function JS(n,e,t){return $l(n,`recipes/${e}/steps/${t}.jpg`,800,600,300*1024)}async function YS(n,e,t,i){return $l(n,`recipes/${e}/comments/${t}/${i}.jpg`,600,600,200*1024)}async function cg(n){try{const e=rg(og,n);await zS(e),console.log("[deleteRecipeStorageFile] Deleted:",n)}catch(e){e.code!=="storage/object-not-found"&&console.error("[deleteRecipeStorageFile] Error:",e)}}let Ai="view",Ct=null,wi={},_t=[],Un=[],Fn=0,Xs={add:!1,edit:!1};function XS(n){if(n<=0)return"";if(n<60)return String(n);const e=Math.floor(n/60),t=n%60;return t===0?`${e} hour${e>1?"s":""}`:`${e} hour${e>1?"s":""} ${t} min`}function Ri(n,e){const t=f(n),i=f(e);if(!t)return"";const s=t.value.trim();if(!s)return"";if(isNaN(s))return s;const r=i?i.value:"min",o=parseFloat(s);return r==="hr"?o===1?"1 hour":`${o} hours`:`${o} min`}function Ph(n,e){const t=f(n),i=f(e);if(!t)return NaN;const s=parseFloat(t.value.trim());return isNaN(s)?NaN:(i?i.value:"min")==="hr"?s*60:s}function ZS(n){if(Xs[n])return;const e=n==="add"?"rpreptime":"epreptime",t=n==="add"?"rpreptimeunit":"epreptimeunit",i=n==="add"?"rcooktime":"ecooktime",s=n==="add"?"rcooktimeunit":"ecooktimeunit",r=n==="add"?"rtotaltime":"etotaltime",o=n==="add"?"rtotaltimeunit":"etotaltimeunit",c=Ph(e,t),l=Ph(i,s),h=f(r),m=f(o);if(!h)return;if(isNaN(c)&&isNaN(l)){h.value="";return}const y=(isNaN(c)?0:c)+(isNaN(l)?0:l);if(y<=0){h.value="";return}if(y>=60){const w=XS(y);h.value=w,m&&(m.value="min")}else h.value=String(y),m&&(m.value="min")}function eC(n){Xs[n]=!0}function lg(n,e){const t=f(n);if(!t)return"";const i=t.value.trim();if(!i)return"";if(isNaN(i))return i;const s=f(e),r=s?s.value:"min",o=parseFloat(i);return r==="hr"?o===1?"1 hour":`${o} hours`:`${o} min`}function Vt(n){if(!n)return{value:"",unit:"min"};const e=n.match(/^(\d+\.?\d*)\s*hours?$/i);if(e)return{value:e[1],unit:"hr"};const t=n.match(/^(\d+\.?\d*)\s*min(utes?)?$/i);return t?{value:t[1],unit:"min"}:/\d+\s*hour/i.test(n)&&/\d+\s*min/i.test(n)?{value:n,unit:"min"}:isNaN(n)?{value:n,unit:"min"}:{value:n,unit:"min"}}function ug(n,e){const t=f(n);if(!t)return;const i=t.querySelectorAll(".diff-pill"),s=t.querySelector(`.diff-pill.sel[data-val="${e}"]`);if(i.forEach(r=>r.classList.remove("sel")),!s){const r=t.querySelector(`.diff-pill[data-val="${e}"]`);r&&r.classList.add("sel")}}function dg(n){const e=document.querySelector(`#${n} .diff-pill.sel`);return e?e.dataset.val:""}function Ll(n){return[...document.querySelectorAll("#"+n+" .tag.sel")].map(e=>e.dataset.tag)}function hg(n,e){document.querySelectorAll("#"+n+" .tag").forEach(t=>{t.classList.toggle("sel",(e||[]).includes(t.dataset.tag))})}function tC(n){n.classList.toggle("sel")}const Fr=[{cat:"Meal Type",tags:["Breakfast","Lunch","Dinner","Snack","Dessert","Drinks","Brunch","Bread & Baking","Sauce & Condiment","Preserve & Pickle"]},{cat:"Diet & Lifestyle",tags:["Vegetarian","Vegan","Pescatarian","Meat","Gluten-Free","Dairy-Free","Nut-Free","Sugar-Free","Healthy","High Protein","Low Carb","Keto","Heart Healthy","Pregnancy-Safe","Baby & Toddler","Halal","Kosher","Paleo","Egg-Free","Mediterranean"]},{cat:"Cook Style",tags:["Quick","Kid-Friendly","Date Night","Batch Cook","Freezer Friendly","One Pot","Special Occasion","Budget Friendly","Spicy","Pasta","Salad","Soup & Stew","Grill & BBQ","Slow Cooker","Air Fryer","Meal Prep","World Cuisine","Fermented & Preserved","Stovetop","Wrap & Sandwich","Street Food","Raw & No-Cook","Camping & Outdoors"]},{cat:"Occasion",tags:["Holiday","Party","Summer","Winter Comfort","Halloween","Thanksgiving","Easter","Valentine's Day","Game Day","Graduation","Brunch Party","Ramadan","Hanukkah"]},{cat:"Cuisine",tags:["Italian","Mexican","Japanese","Chinese","Indian","Thai","Greek","French","Middle Eastern","Korean","Spanish","Vietnamese","American","African","Latin American","Turkish","Mediterranean Cuisine"]},{cat:"Protein",tags:["Chicken","Beef","Pork","Fish","Seafood","Eggs","Beans & Legumes","Nuts & Seeds","Cheese"]}];function wc(n){if(n==="my"){const e=d.recFilters;let t=e.tags.length+e.protein.length;return e.difficulty&&t++,e.cookTime!=="any"&&t++,e.serves!=="any"&&t++,t}else{let e=d.comTags.length;return d.comCuisine!=="all"&&e++,d.comTime!=="any"&&e++,d.comMinRating>0&&e++,e}}function fg(n){const t=ce(n==="my"?"ks-recFiltersOpen":"ks-comFiltersOpen"),i=wc(n),s=i>0?` (${i})`:"";let r=`<button class="filter-toggle" id="${n}-filter-toggle" onclick="toggleFilterPanel('${n}')">
    <span>Filters${s}</span><span>${t?"▲":"▼"}</span>
  </button>`;if(r+=`<div class="filter-panel" id="${n}-filter-panel" style="display:${t?"block":"none"}">`,n==="my"){const o=d.recFilters;r+='<div class="filter-section"><div class="filter-section-title">Difficulty</div><div class="filter-row">',["Easy","Medium","Hard"].forEach(c=>{r+=`<button class="filter-pill${o.difficulty===c?" sel":""}" onclick="setRecDifficulty('${c}')">${c}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Cook Time</div><div class="filter-row">',[["any","Any"],["under30","Under 30 min"],["under60","Under 1 hour"],["over60","Over 1 hour"]].forEach(([c,l])=>{r+=`<button class="filter-pill${o.cookTime===c?" sel":""}" onclick="setRecCookTime('${c}')">${l}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Serves</div><div class="filter-row">',[["any","Any"],["1-2","1–2"],["3-4","3–4"],["5+","5+"]].forEach(([c,l])=>{r+=`<button class="filter-pill${o.serves===c?" sel":""}" onclick="setRecServes('${c}')">${l}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Protein</div><div class="filter-row">',Fr.find(c=>c.cat==="Protein").tags.forEach(c=>{r+=`<button class="filter-pill${o.protein.includes(c)?" sel":""}" onclick="toggleRecProtein('${c}')">${c}</button>`}),r+="</div></div>",r+=`<div class="filter-section"><div class="filter-section-title">Tags</div><div class="filter-row" style="max-height:${ce("ks-recTagsExpanded")?"none":"0"};overflow:hidden;transition:max-height .2s" id="my-tags-wrap">`,Fr.forEach(c=>{c.tags.forEach(l=>{r+=`<button class="filter-pill${o.tags.includes(l)?" sel":""}" onclick="toggleRecTag('${l.replace(/'/g,"\\'")}')">${l}</button>`})}),r+="</div>",r+=`<button class="filter-pill" style="margin-top:4px;font-size:.7rem;color:var(--ac);border-color:var(--ac)" onclick="toggleRecTagsExpand()">${ce("ks-recTagsExpanded")?"Hide tags ▲":"Show all tags ▼"}${o.tags.length?` (${o.tags.length} selected)`:""}</button>`,r+="</div>",i>0&&(r+='<button class="filter-pill" style="color:var(--rd);border-color:var(--rd);width:100%;text-align:center;margin-top:4px" onclick="clearRecFilters()">Clear all filters</button>')}else r+='<div class="filter-section"><div class="filter-section-title">Min Rating</div><div class="filter-row">',[[0,"Any"],[1,"1★+"],[2,"2★+"],[3,"3★+"],[4,"4★+"]].forEach(([c,l])=>{r+=`<button class="filter-pill${d.comMinRating===c?" sel":""}" onclick="setComMinRating(${c})">${l}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Cook Time</div><div class="filter-row">',[["any","Any"],["under30","Under 30 min"],["30to60","30–60 min"],["over60","Over 1 hour"]].forEach(([c,l])=>{r+=`<button class="filter-pill${d.comTime===c?" sel":""}" onclick="setComTime('${c}')">${l}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Cuisine</div><div class="filter-row">',["all","Italian","Mexican","Japanese","Chinese","Indian","Thai","Greek","French","Middle Eastern","Korean","Spanish","Vietnamese","American","African","Latin American","Turkish","Mediterranean","Bangladeshi"].forEach(c=>{r+=`<button class="filter-pill${d.comCuisine===c.toLowerCase()?" sel":""}" onclick="setComCuisine('${c.toLowerCase()}')">${c==="all"?"All":c}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Sort</div><div class="filter-row">',[["newest","Newest"],["popular","Most Popular"],["rated","Highest Rated"],["az","A → Z"],["cooktime","Cook Time"]].forEach(([c,l])=>{r+=`<button class="filter-pill${d.comSort===c?" sel":""}" onclick="setComSort('${c}')">${l}</button>`}),r+="</div></div>",r+=`<div class="filter-section"><div class="filter-section-title">Tags</div><div class="filter-row" style="max-height:${ce("ks-comTagsOpen")?"none":"0"};overflow:hidden;transition:max-height .2s" id="com-tags-wrap">`,Fr.forEach(c=>{c.tags.forEach(l=>{r+=`<button class="filter-pill${d.comTags.includes(l)?" sel":""}" onclick="toggleComTag('${l.replace(/'/g,"\\'")}')">${l}</button>`})}),r+="</div>",r+=`<button class="filter-pill" style="margin-top:4px;font-size:.7rem;color:var(--ac);border-color:var(--ac)" onclick="toggleComTagsPanel()">${ce("ks-comTagsOpen")?"Hide tags ▲":"Show all tags ▼"}${d.comTags.length?` (${d.comTags.length} selected)`:""}</button>`,r+="</div>",wc("com")>0&&(r+='<button class="filter-pill" style="color:var(--rd);border-color:var(--rd);width:100%;text-align:center;margin-top:4px" onclick="clearComFilters()">Clear all filters</button>');return r+="</div>",r}function nC(n){d.recSearch=n,tt()}function iC(n){d.recSort=n,Me("ks-recSort",n),tt()}function sC(n){const e=n==="my"?"ks-recFiltersOpen":"ks-comFiltersOpen",t=f(`${n}-filter-panel`),i=f(`${n}-filter-toggle`);if(!t)return;const s=t.style.display!=="none";t.style.display=s?"none":"block",Me(e,!s);const r=wc(n),o=r>0?` (${r})`:"";i&&(i.innerHTML=`<span>Filters${o}</span><span>${s?"▼":"▲"}</span>`)}function rC(n){d.recFilters.difficulty=d.recFilters.difficulty===n?"":n,Bi(),tt()}function oC(n){d.recFilters.cookTime=n,Bi(),tt()}function aC(n){d.recFilters.serves=n,Bi(),tt()}function cC(n){const e=d.recFilters.protein.indexOf(n);e>=0?d.recFilters.protein.splice(e,1):d.recFilters.protein.push(n),Bi(),tt()}function lC(n){const e=d.recFilters.tags.indexOf(n);e>=0?d.recFilters.tags.splice(e,1):d.recFilters.tags.push(n),Bi(),tt()}function uC(){const n=ce("ks-recTagsExpanded");Me("ks-recTagsExpanded",!n),tt()}function dC(){d.recFilters={tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[]},d.recSearch="",Bi(),tt()}function Bi(){Me("ks-recFilters",d.recFilters)}function hC(){const n=ce("ks-recFilters");n&&(d.recFilters={tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[],...n}),d.recSort=ce("ks-recSort")||"az"}hC();function fC(){const n=ce("ks-comTagsOpen");Me("ks-comTagsOpen",!n),dt()}function pC(){d.comTags=[],d.comCuisine="all",d.comTime="any",d.comMinRating=0,d.comSort="newest",d.comSearch="",d.comPage=0,dt()}function mC(n){if(!n)return 0;const e=n.match(/(\d+)/);return e?parseInt(e[1]):0}function gC(n){const e=Array.from({length:5},(c,l)=>`<span class="star${l<n.rating?" on":""}">${l<n.rating?"★":"☆"}</span>`).join(""),t=n.sourceUrl?`<a href="${n.sourceUrl}" target="_blank" onclick="event.stopPropagation()" style="font-size:.68rem;color:var(--ac);text-decoration:none;border:1px solid rgba(212,168,83,.3);border-radius:20px;padding:2px 8px;background:transparent">🔗 View original</a>`:n.source?`<span class="sbdg">${n.source}</span>`:"",i=n.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;max-height:140px"><img src="${n.imageUrl}" alt="" style="width:100%;height:140px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",s=[n.totalTime||n.cookTime?`⏱ ${n.totalTime||n.cookTime}`:"",n.servings?`🍽 ${n.servings} servings`:""].filter(Boolean),r=s.length?`<div style="display:flex;gap:6px;margin-top:6px;flex-wrap:wrap">${s.map(c=>`<span style="font-size:.68rem;color:var(--mt);background:var(--b1);border-radius:8px;padding:2px 8px">${c}</span>`).join("")}</div>`:"",o=n.summary?`<div class="rnot" style="color:var(--tx2);margin-top:6px;font-style:italic">${n.summary}</div>`:n.description?`<div class="rnot" style="color:var(--tx2);margin-top:6px">${n.description.substring(0,100)}${n.description.length>100?"…":""}</div>`:"";return`<div class="rcd${n.favorited?" fav":""}" onclick="openRecipeView('${n.id}')">${i}<div class="rrow"><div class="rnm">${n.name}</div><div class="rfav" onclick="event.stopPropagation();togFav('${n.id}')">${n.favorited?"❤️":"🤍"}</div></div><div class="stars">${e}</div>${r}${o}${n.notes?`<div class="rnot">${n.notes}</div>`:""}<div class="rmeta"><span>${n.savedAt}</span>${t}</div></div>`}function yC(n){d.rt=n,document.querySelectorAll(".rtab").forEach(t=>t.classList.remove("active"));const e=f("rtab-"+n);e&&e.classList.add("active"),n==="community"?Nl():tt()}function tt(){if(d.rt==="community")return;let n=[...d.recs];if(d.rt==="fav"?n=n.filter(o=>o.favorited):d.rt==="top"?n=n.filter(o=>o.rating>=4):d.rt==="quick"?n=n.filter(o=>(o.tags||[]).includes("Quick")):d.rt==="kid"&&(n=n.filter(o=>(o.tags||[]).includes("Kid-Friendly"))),d.recSearch){const o=d.recSearch.toLowerCase();n=n.filter(c=>(c.name||"").toLowerCase().includes(o))}const e=d.recFilters;e.tags.length&&(n=n.filter(o=>e.tags.every(c=>(o.tags||[]).includes(c)))),e.difficulty&&(n=n.filter(o=>o.difficulty===e.difficulty)),e.cookTime&&e.cookTime!=="any"&&(n=n.filter(o=>{const c=Hr(o.cookTime||o.totalTime);return c?e.cookTime==="under30"?c<=30:e.cookTime==="under60"?c<=60:e.cookTime==="over60"?c>60:!0:!1})),e.serves&&e.serves!=="any"&&(n=n.filter(o=>{const c=mC(o.servings);return c?e.serves==="1-2"?c<=2:e.serves==="3-4"?c>=3&&c<=4:e.serves==="5+"?c>=5:!0:!1})),e.protein.length&&(n=n.filter(o=>e.protein.some(c=>(o.tags||[]).includes(c))));const t=d.recSort||"az";t==="az"?n.sort((o,c)=>(o.name||"").localeCompare(c.name||"")):t==="newest"?n.sort((o,c)=>new Date(c.savedAt||0)-new Date(o.savedAt||0)):t==="rating"&&n.sort((o,c)=>(c.rating||0)-(o.rating||0));const i=f("rsub");i&&(i.textContent=n.length+" recipe"+(n.length!==1?"s":""));const s=f("rbody");if(!s)return;const r=`<div style="margin-bottom:12px">
    <input class="fi" id="rec-search" placeholder="Search recipes…" value="${(d.recSearch||"").replace(/"/g,"&quot;")}" oninput="setRecSearch(this.value)" style="margin-bottom:8px"/>
    <div style="display:flex;gap:6px;margin-bottom:8px">
      <select class="fsel" onchange="setRecSort(this.value)" style="font-size:.78rem;padding:7px 10px;flex:1">
        <option value="az"${t==="az"?" selected":""}>A → Z</option>
        <option value="newest"${t==="newest"?" selected":""}>Newest first</option>
        <option value="rating"${t==="rating"?" selected":""}>Highest rated</option>
      </select>
    </div>
    ${fg("my")}
  </div>`;if(!n.length){const o=d.recSearch||e.tags.length||e.difficulty||e.cookTime!=="any"||e.serves!=="any"||e.protein.length;s.innerHTML=r+`<div class="es"><div class="ei">📖</div><p>${o?"No recipes match your filters.":d.rt==="fav"?"No favorites yet!":d.rt==="top"?"No 4–5 star recipes yet.":d.rt==="quick"?"No quick recipes saved yet.":d.rt==="kid"?"No kid-friendly recipes yet.":"No recipes saved yet.<br/>Mark meals as cooked or tap + Add."}</p></div>`;return}s.innerHTML=r+`<div class="recipe-grid">${n.map(gC).join("")}</div>`}async function vC(n){const e=d.recs.find(t=>t.id===n);e&&(await Qe({...e,favorited:!e.favorited}),R(e.favorited?"Removed from favorites":"Added to favorites! ❤️"))}function wC(){f("savrecbtn").disabled=!f("rn").value.trim()}async function _C(){const n=f("rurl").value.trim();if(!n)return;const e=f("rurlstatus"),t=f("rimportbtn");e.style.display="block",e.style.color="var(--mt)",e.textContent="🤖 Importing recipe with AI…",t.disabled=!0;try{const s=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})})).json();if(!s.success){e.style.color="var(--rd)",e.textContent="⚠️ "+(s.error||"Couldn't import this recipe"),t.disabled=!1;return}const r=s.recipe,o=Dl(r);if(f("rn").value=r.title||"",f("rd").value=o,f("rnotes").value=r.notes||"",f("rsourceurl").value=n,f("rcuisine")&&(f("rcuisine").value=r.cuisine||""),r.tags&&r.tags.length&&hg("rtags",r.tags),f("savrecbtn").disabled=!r.title,xC(r.imageUrl),d._importedRecipe={ingredientsRaw:r.ingredients||[],stepsRaw:r.steps||[],imageUrl:r.imageUrl||null,prepTime:r.prepTime||"",cookTime:r.cookTime||"",totalTime:r.totalTime||"",servings:r.servings||"",difficulty:r.difficulty||"",recipeYield:r.recipeYield||"",storageInstructions:r.storageInstructions||"",summary:r.summary||""},r.prepTime){const l=Vt(r.prepTime);f("rpreptime")&&(f("rpreptime").value=l.value),f("rpreptimeunit")&&(f("rpreptimeunit").value=l.unit)}if(r.cookTime){const l=Vt(r.cookTime);f("rcooktime")&&(f("rcooktime").value=l.value),f("rcooktimeunit")&&(f("rcooktimeunit").value=l.unit)}if(r.totalTime){const l=Vt(r.totalTime);f("rtotaltime")&&(f("rtotaltime").value=l.value),f("rtotaltimeunit")&&(f("rtotaltimeunit").value=l.unit),Xs.add=!0}r.servings&&f("rserves")&&(f("rserves").value=r.servings),r.difficulty&&["Easy","Medium","Hard"].includes(r.difficulty)&&ug("rdiff",r.difficulty),r.recipeYield&&f("ryield")&&(f("ryield").value=r.recipeYield),r.storageInstructions&&f("rstorage")&&(f("rstorage").value=r.storageInstructions);const c=[r.prepTime?`Prep: ${r.prepTime}`:"",r.cookTime?`Cook: ${r.cookTime}`:"",r.servings?`Serves: ${r.servings}`:""].filter(Boolean);e.style.color="var(--gn)",e.textContent="✓ Recipe imported! "+(c.length?c.join(" · "):"Review and save.")}catch(i){console.error("importFromUrl:",i),e.style.color="var(--rd)",e.textContent="⚠️ Couldn't import — try copying the recipe text manually."}t.disabled=!1}function bC(n){const e=f("importOnePane"),t=f("importManyPane"),i=f("importOneTab"),s=f("importManyTab");e&&(e.style.display=n==="one"?"block":"none"),t&&(t.style.display=n==="many"?"block":"none"),i&&(i.style.background=n==="one"?"var(--ac)":"",i.style.color=n==="one"?"var(--bg)":""),s&&(s.style.background=n==="many"?"var(--ac)":"",s.style.color=n==="many"?"var(--bg)":"")}function TC(n){const e=/https?:\/\/[^\s<>"'`,;)}\]]+/gi,i=(n.match(e)||[]).map(s=>s.replace(/[.,;:!?)}\]]+$/,""));return[...new Set(i)]}function IC(n){const e=n.toLowerCase(),t=[{pattern:/youtube\.com|youtu\.be/,name:"YouTube"},{pattern:/tiktok\.com/,name:"TikTok"},{pattern:/instagram\.com\/reel/,name:"Instagram Reel"},{pattern:/vimeo\.com/,name:"Vimeo"},{pattern:/twitter\.com|x\.com/,name:"X/Twitter"}];for(const r of t)if(r.pattern.test(e))return{status:"video",reason:`${r.name} video — can't extract recipe text`};const i=[{pattern:/evernote\.com/,name:"Evernote"},{pattern:/docs\.google\.com/,name:"Google Docs"},{pattern:/drive\.google\.com/,name:"Google Drive"},{pattern:/dropbox\.com/,name:"Dropbox"},{pattern:/notion\.so/,name:"Notion"},{pattern:/onenote\.com|onedrive\.live\.com/,name:"OneDrive/OneNote"},{pattern:/icloud\.com/,name:"iCloud"},{pattern:/keep\.google\.com/,name:"Google Keep"}];for(const r of i)if(r.pattern.test(e))return{status:"private",reason:`${r.name} — private or inaccessible link`};const s=[{pattern:/cooking\.nytimes\.com/,name:"NYT Cooking"},{pattern:/food52\.com/,name:"Food52"}];for(const r of s)if(r.pattern.test(e))return{status:"paywall",reason:`${r.name} — may be paywalled`};return{status:"ok",reason:""}}async function EC(){const n=f("bulkUrls"),e=n?n.value.trim():"";if(!e)return;const t=TC(e);if(!t.length){R("No URLs found in the text");return}const i=t.map(A=>({url:A,...IC(A)})),s=i.filter(A=>A.status==="ok"),r=i.filter(A=>A.status==="paywall"),o=i.filter(A=>A.status==="video"),c=i.filter(A=>A.status==="private"),l=f("bulkImportProgress");if(!l)return;l.style.display="block";const h=f("bulkImportBtn");h&&(h.disabled=!0);const m=[...s,...r],y=[],w=m.filter(A=>{const P=d.recs.find($=>$.sourceUrl&&$.sourceUrl===A.url);return P?(y.push({url:A.url,name:P.name||P.url}),!1):!0}),E={success:[],duplicates:y,failed:[],skipped:[...o,...c]};for(let A=0;A<w.length;A++){const P=w[A],$=P.status==="paywall"?" — may be paywalled":"";A>0&&(l.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Waiting before next import… (${A+1} of ${w.length})</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`,await new Promise(U=>setTimeout(U,2e3))),l.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Importing ${A+1} of ${w.length}…${$}</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;try{const U=await kC(P.url,l,A,w.length);if(U.success&&U.recipe){const N=U.recipe,M=Dl(N),D="rec-"+Date.now()+"-"+Math.random().toString(36).slice(2,6);await Qe({id:D,name:N.title||"Untitled Recipe",description:M,notes:N.notes||"",rating:0,favorited:!1,sourceUrl:P.url,source:"AI Import",imageUrl:N.imageUrl||null,ingredientsRaw:N.ingredients||[],stepsRaw:N.steps||[],prepTime:N.prepTime||"",cookTime:N.cookTime||"",totalTime:N.totalTime||"",servings:N.servings||"",difficulty:N.difficulty||"",recipeYield:N.recipeYield||"",storageInstructions:N.storageInstructions||"",tags:N.tags||[],savedAt:new Date().toLocaleDateString()}),E.success.push({url:P.url,name:N.title})}else{const N=CC(U.reason,U.error);E.failed.push({url:P.url,error:N})}}catch(U){E.failed.push({url:P.url,error:U.message})}}AC(l,E),h&&(h.disabled=!1)}async function kC(n,e,t,i){const s=[1e4,2e4,4e4],r=3,o=SC(n),c=await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});let l=await c.json();if(c.status!==429&&l.reason!=="rate_limit")return l;for(let h=0;h<r;h++){const m=s[h]/1e3;e.innerHTML=`<div style="font-size:.78rem;color:var(--yw,orange)">Rate limit hit — waiting ${m}s before retrying ${o}… (${t+1} of ${i})</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`,await new Promise(w=>setTimeout(w,s[h])),e.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Retrying ${t+1} of ${i} (attempt ${h+2})…</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;const y=await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(l=await y.json(),y.status!==429&&l.reason!=="rate_limit")return l}return{success:!1,error:"Rate limit — could not recover after 3 retries",reason:"rate_limit"}}function SC(n){try{const e=new URL(n),t=e.hostname.replace(/^www\./,""),i=e.pathname.replace(/\/$/,"").split("/").filter(Boolean).slice(0,1).join("/");return i?`${t}/${i}`:t}catch{return n.length>40?"…"+n.slice(-40):n}}function CC(n,e){return{rate_limit:"Rate limit hit — too many requests",timeout:"Timed out — page took too long to load",page_blocked:"Page blocked access (login required or bot detection)",page_not_found:"Page not found (404)",page_inaccessible:"Page not accessible",no_recipe:"No recipe content found on page",api_error:"AI parsing error",fetch_error:"Could not fetch page"}[n]||e||"Unknown error"}function AC(n,e){let t="";e.success.length&&(t+=`<div style="color:var(--gn);font-size:.78rem;margin-bottom:6px">✓ ${e.success.length} imported successfully</div>`,t+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.success.forEach(i=>{t+=`<div>• ${i.name||i.url}</div>`}),t+="</div>"),e.duplicates.length&&(t+=`<div style="color:var(--ac);font-size:.78rem;margin-bottom:6px">● ${e.duplicates.length} already in your collection — skipped</div>`,t+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.duplicates.forEach(i=>{t+=`<div>• ${i.name||i.url}</div>`}),t+="</div>"),e.skipped.length&&(t+=`<div style="color:var(--yw,orange);font-size:.78rem;margin-bottom:6px">⚠ ${e.skipped.length} skipped — video or inaccessible links</div>`,t+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.skipped.forEach(i=>{t+=`<div>• ${i.url} <span style="color:var(--mt);font-size:.68rem">(${i.reason})</span></div>`}),t+="</div>"),e.failed.length&&(t+=`<div style="color:var(--rd);font-size:.78rem;margin-bottom:6px">✗ ${e.failed.length} failed</div>`,t+='<div style="font-size:.72rem;margin-bottom:10px;line-height:1.8">',e.failed.forEach(i=>{t+='<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">',t+=`<span style="color:var(--mt);flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i.url}</span>`,t+=`<span style="color:var(--rd);font-size:.66rem;white-space:nowrap">${i.error}</span>`,t+=`<button class="btn bsm" onclick="retryBulkImport('${i.url.replace(/'/g,"\\'")}')">Retry</button>`,t+="</div>"}),t+="</div>"),!e.success.length&&!e.failed.length&&!e.skipped.length&&!e.duplicates.length&&(t='<div style="font-size:.78rem;color:var(--mt)">No URLs were processed.</div>'),n.innerHTML=t}async function RC(n){const e=f("bulkImportProgress");if(!e)return;const t=d.recs.find(s=>s.sourceUrl&&s.sourceUrl===n);if(t){R(`Already imported: ${t.name||n}`);return}const i=e.innerHTML;e.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Retrying ${n}…</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;try{const r=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})})).json();if(r.success&&r.recipe){const o=r.recipe,c=Dl(o),l="rec-"+Date.now()+"-"+Math.random().toString(36).slice(2,6);await Qe({id:l,name:o.title||"Untitled Recipe",description:c,notes:o.notes||"",rating:0,favorited:!1,sourceUrl:n,source:"AI Import",imageUrl:o.imageUrl||null,ingredientsRaw:o.ingredients||[],stepsRaw:o.steps||[],prepTime:o.prepTime||"",cookTime:o.cookTime||"",totalTime:o.totalTime||"",servings:o.servings||"",difficulty:o.difficulty||"",recipeYield:o.recipeYield||"",storageInstructions:o.storageInstructions||"",tags:o.tags||[],savedAt:new Date().toLocaleDateString()}),R(`Imported: ${o.title||"Recipe"}`),e.innerHTML=i.replace(new RegExp(`<div style="display:flex[^]*?${n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}[^]*?</div>\\s*</div>`),`<div style="color:var(--gn);font-size:.72rem">✓ ${o.title||n} — imported</div>`)}else R("Import failed: "+(r.error||"Unknown error")),e.innerHTML=i}catch(s){R("Import failed: "+s.message),e.innerHTML=i}}function Dl(n){const e=[];return n.description&&(e.push(n.description),e.push("")),n.ingredients&&n.ingredients.length&&(e.push("Ingredients:"),n.ingredients.forEach(t=>{if(typeof t=="string")e.push(`- ${t}`);else{const i=[t.amount,t.unit].filter(Boolean).join(" ");e.push(`- ${i?i+" ":""}${t.name}`)}}),e.push("")),n.steps&&n.steps.length&&(e.push("Steps:"),n.steps.forEach((t,i)=>{e.push(`${i+1}. ${t}`)})),e.join(`
`)}function xC(n){const e=document.getElementById("rimgpreview");if(e&&e.remove(),!n)return;const t=f("addRecCoverZone");t&&(t.classList.add("has-preview"),t.innerHTML=`<img src="${n}" alt="Cover preview" onerror="this.parentElement.classList.remove('has-preview')"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('add')">✕</button>`)}async function PC(){var P,$,U,N;const n=f("rn").value.trim();if(!n)return;const e=f("rd").value.trim(),t=f("rsourceurl")?f("rsourceurl").value.trim():"",i=f("rcuisine")?f("rcuisine").value.trim():"",s=Ll("rtags"),r=document.getElementById("rpubtoggle"),o=r?r.classList.contains("on"):!1,c=d._importedRecipe||{},l="rec-"+Date.now();let h=c.imageUrl||null;if(Ct)try{R("Uploading cover photo…"),h=await ag(Ct,l),Ct=null}catch(M){console.error("Cover upload failed:",M),R("Cover photo upload failed — saving recipe without it")}const m={id:l,name:n,rating:d.nr,favorited:!1,notes:f("rnotes").value.trim(),description:e,source:t?"AI Import":"Manual",sourceUrl:t||null,imageUrl:h,tags:s,cuisine:i,prepTime:Ri("rpreptime","rpreptimeunit")||c.prepTime||"",cookTime:Ri("rcooktime","rcooktimeunit")||c.cookTime||"",totalTime:lg("rtotaltime","rtotaltimeunit")||c.totalTime||"",servings:(f("rserves")?f("rserves").value.trim():"")||c.servings||"",difficulty:dg("rdiff")||c.difficulty||"",recipeYield:(f("ryield")?f("ryield").value.trim():"")||c.recipeYield||"",storageInstructions:(f("rstorage")?f("rstorage").value.trim():"")||c.storageInstructions||"",summary:(f("rsummary")?f("rsummary").value.trim():"")||c.summary||"",ingredientsRaw:c.ingredientsRaw||[],stepsRaw:c.stepsRaw||[],stepPhotos:{},cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:o};if(!m.summary&&(m.name||m.description))try{R("Generating summary…");const M=((P=m.ingredientsRaw)==null?void 0:P.join(", "))||m.description||"",H=((N=(U=($=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:200,messages:[{role:"user",content:`Write a 2-sentence summary for this recipe. First sentence: what the dish is. Second sentence: what makes it special or notable. Max 200 characters total. Be concise.

Title: ${m.name}
Cuisine: ${m.cuisine||""}
Ingredients: ${M.substring(0,500)}`}]})})).json()).content)==null?void 0:$[0])==null?void 0:U.text)==null?void 0:N.trim())||"";H&&(m.summary=H)}catch(M){console.error("Auto-summary generation failed:",M)}if(o){const M=Z(),D=(M==null?void 0:M.displayName)||localStorage.getItem("ks-who")||"Anonymous",F=await Eo(m,D);m.publicId=F.id,Je("published",Ae(m.name||"a recipe")+" to community")}await Qe(m),f("rn").value="",f("rnotes").value="",f("rd").value="",f("rsourceurl").value="",f("rurl").value="",f("rcuisine")&&(f("rcuisine").value=""),f("rpreptime")&&(f("rpreptime").value=""),f("rcooktime")&&(f("rcooktime").value=""),f("rtotaltime")&&(f("rtotaltime").value=""),f("rserves")&&(f("rserves").value=""),f("rpreptimeunit")&&(f("rpreptimeunit").value="min"),f("rcooktimeunit")&&(f("rcooktimeunit").value="min"),f("rtotaltimeunit")&&(f("rtotaltimeunit").value="min"),f("ryield")&&(f("ryield").value=""),f("rstorage")&&(f("rstorage").value=""),f("rsummary")&&(f("rsummary").value=""),document.querySelectorAll("#rdiff .diff-pill").forEach(M=>M.classList.remove("sel")),Xs.add=!1,hg("rtags",[]),d.nr=0,d._importedRecipe=null,f("savrecbtn").disabled=!0,ks("rstars",0);const w=document.getElementById("rimgpreview");w&&w.remove();const E=f("addRecCoverZone");E&&(E.classList.remove("has-preview"),E.innerHTML='<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop</div>'),r&&r.classList.remove("on");const A=f("rurlstatus");A&&(A.style.display="none",A.textContent=""),R("Recipe saved! 📖"),Ee("arec")}function pg(n){const e=d.recs.find(D=>D.id===n);if(!e)return;d.eid=n,Ai="view";const t=f("erecTitle");t&&(t.textContent="Recipe");let i;e.imageUrl?i=`<div class="rv-cover">
      <img src="${e.imageUrl}" alt="${(e.name||"").replace(/"/g,"&quot;")}" onerror="this.parentElement.style.display='none'"/>
      <div class="rv-edit-btn" onclick="openER('${e.id}')" title="Edit recipe">✏️</div>
    </div>`:i=`<div class="rv-cover-placeholder">
      <div class="rv-cover-title">${(e.name||"Untitled").replace(/</g,"&lt;")}</div>
      <div class="rv-edit-btn" onclick="openER('${e.id}')" title="Edit recipe">✏️</div>
    </div>`;const s=e.imageUrl,r=e.rating||0,o=`<div class="sinp" id="rvstars" style="margin-bottom:6px">${Array.from({length:5},(D,F)=>`<span class="star${F<r?" on":""}" onclick="setViewStar(${F+1})" style="cursor:pointer">${F<r?"★":"☆"}</span>`).join("")}${r>0?'<span class="star-clear" onclick="event.stopPropagation();setViewStar(0)">✕</span>':""}</div>`,c=e.summary?`<div style="font-size:.86rem;color:var(--tx2);line-height:1.5;margin-bottom:8px;font-style:italic">${ue(e.summary)}</div>`:"",l=`<div class="rv-header">
    ${s?`<div class="rv-title">${(e.name||"").replace(/</g,"&lt;")}</div>`:""}
    ${o}
    ${c}
    ${e.savedAt?`<div class="rv-author">Saved ${e.savedAt}${e.source&&e.source!=="Manual"?` · ${e.source}`:""}${e.cookCount?` · Cooked ${e.cookCount}×`:""}</div>`:""}
  </div>`,h=[e.prepTime?`🔪 Prep: ${e.prepTime}`:"",e.cookTime?`🔥 Cook: ${e.cookTime}`:"",e.totalTime?`⏱ Total: ${e.totalTime}`:"",e.servings?`🍽 Serves: ${e.servings}`:"",e.recipeYield?`🍪 Yield: ${e.recipeYield}`:"",e.difficulty==="Easy"?"⭐ Easy":e.difficulty==="Medium"?"⭐⭐ Medium":e.difficulty==="Hard"?"⭐⭐⭐ Hard":""].filter(Boolean),m=h.length?`<div class="rv-meta">${h.map(D=>`<div class="rv-meta-pill">${D}</div>`).join("")}</div>`:"",y=e.cuisine?`<div class="rv-cuisine">${e.cuisine}</div>`:"",w=(e.tags||[]).length?`<div class="rv-tags">${e.tags.map(D=>`<span class="com-tag">${D}</span>`).join("")}</div>`:"";let E="";if(e.ingredientsRaw&&e.ingredientsRaw.length)E=`<div class="rv-section">Ingredients</div><ul class="rv-ingredients">${e.ingredientsRaw.map(F=>{if(typeof F=="string")return`<li>${ue(F)}</li>`;const H=[F.amount,F.unit].filter(Boolean).join(" ");return`<li>${H?`<strong>${ue(H)}</strong> `:""}${ue(F.name||"")}</li>`}).join("")}</ul>`;else if(e.description){const D=e.description.split(`
`),F=D.findIndex(b=>/^ingredients/i.test(b.trim())),H=D.findIndex(b=>/^steps/i.test(b.trim()));if(F>=0){const b=H>F?H:D.length,v=D.slice(F+1,b).filter(_=>_.trim());v.length&&(E=`<div class="rv-section">Ingredients</div><ul class="rv-ingredients">${v.map(_=>`<li>${ue(_.replace(/^[-•*]\s*/,""))}</li>`).join("")}</ul>`)}}let A="";if(e.stepsRaw&&e.stepsRaw.length)A=`<div class="rv-section">Instructions</div><ol class="rv-steps">${e.stepsRaw.map((F,H)=>{var k;const b=typeof F=="string"?F:F.text||"",v=(k=e.stepPhotos)==null?void 0:k[H],_=v?`<div class="rv-step-photo" onclick="openPhotoViewer(['${v}'],0)"><img src="${v}" alt="Step ${H+1}" onerror="this.parentElement.style.display='none'"/></div>`:"";return`<li>${ue(b)}${_}</li>`}).join("")}</ol>`;else if(e.description){const D=e.description.split(`
`),F=D.findIndex(H=>/^steps/i.test(H.trim()));if(F>=0){const H=D.slice(F+1).filter(b=>b.trim());H.length&&(A=`<div class="rv-section">Instructions</div><ol class="rv-steps">${H.map(b=>`<li>${ue(b.replace(/^\d+\.\s*/,""))}</li>`).join("")}</ol>`)}}let P="";!E&&!A&&e.description&&(P=`<div class="rv-section">Details</div><div style="font-size:.88rem;color:var(--tx2);line-height:1.8;white-space:pre-wrap">${ue(e.description)}</div>`);const $=e.storageInstructions?`<div class="rv-section">🗄️ Storage</div><div class="rv-storage">${ue(e.storageInstructions)}</div>`:"",U=e.notes?`<div class="rv-section">Notes</div><div style="font-size:.86rem;color:var(--tx2);line-height:1.6;font-style:italic;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">${ue(e.notes)}</div>`:"",N=e.sourceUrl?`<div style="margin-top:16px"><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);text-decoration:none">🔗 View original recipe ↗</a></div>`:"",M=`<div class="rv-actions">
    <button class="btn bp bsm" style="flex:1" onclick="scheduleRecipe('${e.name.replace(/'/g,"\\'")}')">📅 Schedule</button>
    <button class="btn bs bsm" style="flex:1" onclick="addRecIngToShop('${e.id}')">🛒 Shop ingredients</button>
    <button class="btn bs bsm" onclick="openER('${e.id}')">✏️ Edit</button>
  </div>`;f("erecbody").innerHTML=`
    ${i}
    ${l}
    ${m}
    ${y}
    ${w}
    ${M}
    ${E}
    ${A}
    ${P}
    ${$}
    ${U}
    ${N}
  `,ot("erec")}function $C(){if(Ai==="edit"&&d._editingComId){const n=d._editingComId;d._editingComId=null,ho(n);return}if(Ai==="edit"&&d.eid)pg(d.eid);else{const n=f("erecTitle");n&&(n.textContent="Recipe"),Ee("erec")}}function ue(n){return(n||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function mg(n){const e=d.recs.find(A=>A.id===n);if(!e)return;d.eid=n,Ai="edit",Ct=null,wi={};const t=f("erecTitle");t&&(t.textContent="Edit Recipe");const i=e.sourceUrl?`<div class="frow"><label class="flbl">Original</label><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);word-break:break-all">${e.sourceUrl}</a></div>`:"",s=e.tags||[],r=A=>s.includes(A)?" sel":"",o=`<div class="frow"><label class="flbl">Tags</label><div class="tags-grid" id="etags">
    <div class="tag-cat">Meal Type</div>
    <div class="tag${r("Breakfast")}" data-tag="Breakfast" onclick="togTag(this)">🌅 Breakfast</div>
    <div class="tag${r("Lunch")}" data-tag="Lunch" onclick="togTag(this)">🥪 Lunch</div>
    <div class="tag${r("Dinner")}" data-tag="Dinner" onclick="togTag(this)">🍽️ Dinner</div>
    <div class="tag${r("Snack")}" data-tag="Snack" onclick="togTag(this)">🍿 Snack</div>
    <div class="tag${r("Dessert")}" data-tag="Dessert" onclick="togTag(this)">🎂 Dessert</div>
    <div class="tag${r("Drinks")}" data-tag="Drinks" onclick="togTag(this)">🥤 Drinks</div>
    <div class="tag${r("Brunch")}" data-tag="Brunch" onclick="togTag(this)">🥣 Brunch</div>
    <div class="tag${r("Bread & Baking")}" data-tag="Bread & Baking" onclick="togTag(this)">🍞 Bread & Baking</div>
    <div class="tag${r("Sauce & Condiment")}" data-tag="Sauce & Condiment" onclick="togTag(this)">🫙 Sauce & Condiment</div>
    <div class="tag${r("Preserve & Pickle")}" data-tag="Preserve & Pickle" onclick="togTag(this)">🥫 Preserve & Pickle</div>
    <div class="tag-cat">Diet & Lifestyle</div>
    <div class="tag${r("Vegetarian")}" data-tag="Vegetarian" onclick="togTag(this)">🌱 Vegetarian</div>
    <div class="tag${r("Vegan")}" data-tag="Vegan" onclick="togTag(this)">🌿 Vegan</div>
    <div class="tag${r("Pescatarian")}" data-tag="Pescatarian" onclick="togTag(this)">🐟 Pescatarian</div>
    <div class="tag${r("Meat")}" data-tag="Meat" onclick="togTag(this)">🥩 Meat</div>
    <div class="tag${r("Gluten-Free")}" data-tag="Gluten-Free" onclick="togTag(this)">🫘 Gluten-Free</div>
    <div class="tag${r("Dairy-Free")}" data-tag="Dairy-Free" onclick="togTag(this)">🥛 Dairy-Free</div>
    <div class="tag${r("Nut-Free")}" data-tag="Nut-Free" onclick="togTag(this)">🥜 Nut-Free</div>
    <div class="tag${r("Sugar-Free")}" data-tag="Sugar-Free" onclick="togTag(this)">🍬 Sugar-Free</div>
    <div class="tag${r("Healthy")}" data-tag="Healthy" onclick="togTag(this)">🥗 Healthy</div>
    <div class="tag${r("High Protein")}" data-tag="High Protein" onclick="togTag(this)">💪 High Protein</div>
    <div class="tag${r("Low Carb")}" data-tag="Low Carb" onclick="togTag(this)">🫀 Low Carb</div>
    <div class="tag${r("Keto")}" data-tag="Keto" onclick="togTag(this)">🔥 Keto</div>
    <div class="tag${r("Heart Healthy")}" data-tag="Heart Healthy" onclick="togTag(this)">🫀 Heart Healthy</div>
    <div class="tag${r("Pregnancy-Safe")}" data-tag="Pregnancy-Safe" onclick="togTag(this)">🤰 Pregnancy-Safe</div>
    <div class="tag${r("Baby & Toddler")}" data-tag="Baby & Toddler" onclick="togTag(this)">👶 Baby & Toddler</div>
    <div class="tag${r("Halal")}" data-tag="Halal" onclick="togTag(this)">🍽️ Halal</div>
    <div class="tag${r("Kosher")}" data-tag="Kosher" onclick="togTag(this)">✡️ Kosher</div>
    <div class="tag${r("Paleo")}" data-tag="Paleo" onclick="togTag(this)">🌾 Paleo</div>
    <div class="tag${r("Egg-Free")}" data-tag="Egg-Free" onclick="togTag(this)">🥚 Egg-Free</div>
    <div class="tag${r("Mediterranean")}" data-tag="Mediterranean" onclick="togTag(this)">🌊 Mediterranean</div>
    <div class="tag-cat">Cook Style</div>
    <div class="tag${r("Quick")}" data-tag="Quick" onclick="togTag(this)">⚡ Quick</div>
    <div class="tag${r("Kid-Friendly")}" data-tag="Kid-Friendly" onclick="togTag(this)">👨‍👩‍👧 Kid-Friendly</div>
    <div class="tag${r("Date Night")}" data-tag="Date Night" onclick="togTag(this)">🌙 Date Night</div>
    <div class="tag${r("Batch Cook")}" data-tag="Batch Cook" onclick="togTag(this)">📦 Batch Cook</div>
    <div class="tag${r("Freezer Friendly")}" data-tag="Freezer Friendly" onclick="togTag(this)">❄️ Freezer Friendly</div>
    <div class="tag${r("One Pot")}" data-tag="One Pot" onclick="togTag(this)">🥘 One Pot</div>
    <div class="tag${r("Special Occasion")}" data-tag="Special Occasion" onclick="togTag(this)">🎉 Special Occasion</div>
    <div class="tag${r("Budget Friendly")}" data-tag="Budget Friendly" onclick="togTag(this)">💰 Budget Friendly</div>
    <div class="tag${r("Spicy")}" data-tag="Spicy" onclick="togTag(this)">🌶️ Spicy</div>
    <div class="tag${r("Pasta")}" data-tag="Pasta" onclick="togTag(this)">🍝 Pasta</div>
    <div class="tag${r("Salad")}" data-tag="Salad" onclick="togTag(this)">🥗 Salad</div>
    <div class="tag${r("Soup & Stew")}" data-tag="Soup & Stew" onclick="togTag(this)">🍲 Soup & Stew</div>
    <div class="tag${r("Grill & BBQ")}" data-tag="Grill & BBQ" onclick="togTag(this)">🔥 Grill & BBQ</div>
    <div class="tag${r("Slow Cooker")}" data-tag="Slow Cooker" onclick="togTag(this)">🫕 Slow Cooker</div>
    <div class="tag${r("Air Fryer")}" data-tag="Air Fryer" onclick="togTag(this)">⚡ Air Fryer</div>
    <div class="tag${r("Meal Prep")}" data-tag="Meal Prep" onclick="togTag(this)">🍱 Meal Prep</div>
    <div class="tag${r("World Cuisine")}" data-tag="World Cuisine" onclick="togTag(this)">🌍 World Cuisine</div>
    <div class="tag${r("Fermented & Preserved")}" data-tag="Fermented & Preserved" onclick="togTag(this)">🫙 Fermented & Preserved</div>
    <div class="tag${r("Stovetop")}" data-tag="Stovetop" onclick="togTag(this)">🍳 Stovetop</div>
    <div class="tag${r("Wrap & Sandwich")}" data-tag="Wrap & Sandwich" onclick="togTag(this)">🫔 Wrap & Sandwich</div>
    <div class="tag${r("Street Food")}" data-tag="Street Food" onclick="togTag(this)">🥙 Street Food</div>
    <div class="tag${r("Raw & No-Cook")}" data-tag="Raw & No-Cook" onclick="togTag(this)">🍣 Raw & No-Cook</div>
    <div class="tag${r("Camping & Outdoors")}" data-tag="Camping & Outdoors" onclick="togTag(this)">🏕️ Camping & Outdoors</div>
    <div class="tag-cat">Occasion</div>
    <div class="tag${r("Holiday")}" data-tag="Holiday" onclick="togTag(this)">🎄 Holiday</div>
    <div class="tag${r("Party")}" data-tag="Party" onclick="togTag(this)">🎊 Party</div>
    <div class="tag${r("Summer")}" data-tag="Summer" onclick="togTag(this)">🏖️ Summer</div>
    <div class="tag${r("Winter Comfort")}" data-tag="Winter Comfort" onclick="togTag(this)">❄️ Winter Comfort</div>
    <div class="tag${r("Halloween")}" data-tag="Halloween" onclick="togTag(this)">🎃 Halloween</div>
    <div class="tag${r("Thanksgiving")}" data-tag="Thanksgiving" onclick="togTag(this)">🦃 Thanksgiving</div>
    <div class="tag${r("Easter")}" data-tag="Easter" onclick="togTag(this)">🐣 Easter</div>
    <div class="tag${r("Valentine's Day")}" data-tag="Valentine's Day" onclick="togTag(this)">💝 Valentine's Day</div>
    <div class="tag${r("Game Day")}" data-tag="Game Day" onclick="togTag(this)">🏈 Game Day</div>
    <div class="tag${r("Graduation")}" data-tag="Graduation" onclick="togTag(this)">🎓 Graduation</div>
    <div class="tag${r("Brunch Party")}" data-tag="Brunch Party" onclick="togTag(this)">🍳 Brunch Party</div>
    <div class="tag${r("Ramadan")}" data-tag="Ramadan" onclick="togTag(this)">🌿 Ramadan</div>
    <div class="tag${r("Hanukkah")}" data-tag="Hanukkah" onclick="togTag(this)">🕎 Hanukkah</div>
    <!-- Cuisine — regional/cultural food origin tags -->
    <div class="tag-cat">Cuisine</div>
    <div class="tag${r("Italian")}" data-tag="Italian" onclick="togTag(this)">🇮🇹 Italian</div>
    <div class="tag${r("Mexican")}" data-tag="Mexican" onclick="togTag(this)">🇲🇽 Mexican</div>
    <div class="tag${r("Japanese")}" data-tag="Japanese" onclick="togTag(this)">🇯🇵 Japanese</div>
    <div class="tag${r("Chinese")}" data-tag="Chinese" onclick="togTag(this)">🇨🇳 Chinese</div>
    <div class="tag${r("Indian")}" data-tag="Indian" onclick="togTag(this)">🇮🇳 Indian</div>
    <div class="tag${r("Thai")}" data-tag="Thai" onclick="togTag(this)">🇹🇭 Thai</div>
    <div class="tag${r("Greek")}" data-tag="Greek" onclick="togTag(this)">🇬🇷 Greek</div>
    <div class="tag${r("French")}" data-tag="French" onclick="togTag(this)">🇫🇷 French</div>
    <div class="tag${r("Middle Eastern")}" data-tag="Middle Eastern" onclick="togTag(this)">🇱🇧 Middle Eastern</div>
    <div class="tag${r("Korean")}" data-tag="Korean" onclick="togTag(this)">🇰🇷 Korean</div>
    <div class="tag${r("Spanish")}" data-tag="Spanish" onclick="togTag(this)">🇪🇸 Spanish</div>
    <div class="tag${r("Vietnamese")}" data-tag="Vietnamese" onclick="togTag(this)">🇻🇳 Vietnamese</div>
    <div class="tag${r("American")}" data-tag="American" onclick="togTag(this)">🇺🇸 American</div>
    <div class="tag${r("African")}" data-tag="African" onclick="togTag(this)">🌍 African</div>
    <div class="tag${r("Latin American")}" data-tag="Latin American" onclick="togTag(this)">🌎 Latin American</div>
    <div class="tag${r("Turkish")}" data-tag="Turkish" onclick="togTag(this)">🇹🇷 Turkish</div>
    <div class="tag${r("Mediterranean Cuisine")}" data-tag="Mediterranean Cuisine" onclick="togTag(this)">🫔 Mediterranean</div>
    <!-- Protein — main protein source tags -->
    <div class="tag-cat">Protein</div>
    <div class="tag${r("Chicken")}" data-tag="Chicken" onclick="togTag(this)">🐔 Chicken</div>
    <div class="tag${r("Beef")}" data-tag="Beef" onclick="togTag(this)">🥩 Beef</div>
    <div class="tag${r("Pork")}" data-tag="Pork" onclick="togTag(this)">🐷 Pork</div>
    <div class="tag${r("Fish")}" data-tag="Fish" onclick="togTag(this)">🐟 Fish</div>
    <div class="tag${r("Seafood")}" data-tag="Seafood" onclick="togTag(this)">🦐 Seafood</div>
    <div class="tag${r("Eggs")}" data-tag="Eggs" onclick="togTag(this)">🥚 Eggs</div>
    <div class="tag${r("Beans & Legumes")}" data-tag="Beans & Legumes" onclick="togTag(this)">🫘 Beans & Legumes</div>
    <div class="tag${r("Nuts & Seeds")}" data-tag="Nuts & Seeds" onclick="togTag(this)">🌰 Nuts & Seeds</div>
    <div class="tag${r("Cheese")}" data-tag="Cheese" onclick="togTag(this)">🧀 Cheese</div>
  </div></div>`,c=!!e.imageUrl,l=`<div class="cover-upload-zone${c?" has-preview":""}" id="editCoverZone" onclick="triggerCoverUpload('edit')" ondragover="event.preventDefault();this.classList.add('drag-over')" ondragleave="this.classList.remove('drag-over')" ondrop="event.preventDefault();this.classList.remove('drag-over');handleCoverDrop(event,'edit')">
    ${c?`<img src="${e.imageUrl}" alt="Cover" onerror="this.parentElement.classList.remove('has-preview');this.remove()"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('edit')">✕</button>`:'<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop · Max 800×600, 300KB</div>'}
  </div>
  <input type="file" id="editCoverInput" accept="image/*" style="display:none" onchange="handleCoverSelected(event,'edit')"/>`,h=Vt(e.prepTime),m=Vt(e.cookTime),y=Vt(e.totalTime);Xs.edit=!!e.totalTime;const w=`<div style="margin-bottom:14px">
    <div class="frow" style="margin-bottom:8px"><label class="flbl">Prep time</label>
      <div style="display:flex;gap:8px;align-items:center">
        <input class="fi" id="epreptime" type="text" inputmode="numeric" placeholder="e.g. 15" value="${ue(h.value)}" style="flex:1" oninput="recipeTimeChanged('edit')"/>
        <select class="fi" id="epreptimeunit" style="width:auto;min-width:90px" onchange="recipeTimeChanged('edit')">
          <option value="min"${h.unit==="min"?" selected":""}>minutes</option>
          <option value="hr"${h.unit==="hr"?" selected":""}>hours</option>
        </select>
      </div>
    </div>
    <div class="frow" style="margin-bottom:8px"><label class="flbl">Cook time</label>
      <div style="display:flex;gap:8px;align-items:center">
        <input class="fi" id="ecooktime" type="text" inputmode="numeric" placeholder="e.g. 30" value="${ue(m.value)}" style="flex:1" oninput="recipeTimeChanged('edit')"/>
        <select class="fi" id="ecooktimeunit" style="width:auto;min-width:90px" onchange="recipeTimeChanged('edit')">
          <option value="min"${m.unit==="min"?" selected":""}>minutes</option>
          <option value="hr"${m.unit==="hr"?" selected":""}>hours</option>
        </select>
      </div>
    </div>
    <div class="frow" style="margin-bottom:8px"><label class="flbl">Total time</label>
      <div style="display:flex;gap:8px;align-items:center">
        <input class="fi" id="etotaltime" type="text" inputmode="numeric" placeholder="Auto from prep + cook" value="${ue(y.value)}" style="flex:1" oninput="markTotalTimeManual('edit')"/>
        <select class="fi" id="etotaltimeunit" style="width:auto;min-width:90px">
          <option value="min"${y.unit==="min"?" selected":""}>minutes</option>
          <option value="hr"${y.unit==="hr"?" selected":""}>hours</option>
        </select>
      </div>
    </div>
    <div class="frow"><label class="flbl">Serves</label>
      <input class="fi" id="eserves" type="text" inputmode="numeric" placeholder="e.g. 4" value="${ue(e.servings||"")}"/>
    </div>
    <div class="frow"><label class="flbl">Yield <span class="otag">optional</span></label>
      <input class="fi" id="eyield" type="text" placeholder="e.g. 24 cookies, 1 loaf" value="${ue(e.recipeYield||"")}"/>
      <div style="font-size:.68rem;color:var(--mt);margin-top:4px">e.g. 24 cookies, 1 loaf (use Serves for people)</div>
    </div>
    <div class="frow"><label class="flbl">Difficulty <span class="otag">optional</span></label>
      <div class="diff-pills" id="ediff">
        <button type="button" class="diff-pill${e.difficulty==="Easy"?" sel":""}" data-val="Easy" onclick="selectDifficulty('ediff','Easy')">Easy</button>
        <button type="button" class="diff-pill${e.difficulty==="Medium"?" sel":""}" data-val="Medium" onclick="selectDifficulty('ediff','Medium')">Medium</button>
        <button type="button" class="diff-pill${e.difficulty==="Hard"?" sel":""}" data-val="Hard" onclick="selectDifficulty('ediff','Hard')">Hard</button>
      </div>
    </div>
    <div class="frow"><label class="flbl">Storage instructions <span class="otag">optional</span></label>
      <textarea class="fta" id="estorage" maxlength="200" placeholder="e.g. Keeps in fridge for 3 days, freeze for up to 3 months" style="min-height:60px">${ue(e.storageInstructions||"")}</textarea>
    </div>
  </div>`;let E="";e.stepsRaw&&e.stepsRaw.length&&(E=`<div class="frow"><label class="flbl">Step Photos <span class="otag">optional</span></label>${e.stepsRaw.map((P,$)=>{var M;const U=typeof P=="string"?P:P.text||"",N=(M=e.stepPhotos)==null?void 0:M[$];return`<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:12px;padding:10px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">
        <div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:var(--acd);color:var(--ac);font-size:.72rem;font-weight:700;display:flex;align-items:center;justify-content:center">${$+1}</div>
        <div style="flex:1;font-size:.84rem;color:var(--tx2);line-height:1.5">${ue(U)}</div>
        ${N?`<img src="${N}" class="step-photo-preview" onclick="event.stopPropagation();openPhotoViewer(['${N}'],0)" alt="Step ${$+1}"/>`:""}
        <button class="step-photo-btn${N?" has-photo":""}" onclick="event.stopPropagation();triggerStepPhotoUpload(${$})" title="${N?"Change":"Add"} step photo">📷</button>
        ${N?`<button class="step-photo-btn" onclick="event.stopPropagation();removeStepPhoto(${$})" title="Remove step photo" style="color:var(--rd)">✕</button>`:""}
      </div>`}).join("")}</div>`,E+='<input type="file" id="stepPhotoInput" accept="image/*" style="display:none" onchange="handleStepPhotoSelected(event)"/>'),f("erecbody").innerHTML=`
    ${l}
    ${w}
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
    <div class="frow"><label class="flbl">Summary <span class="otag">optional</span></label><input class="fi" id="esummary" value="${ue(e.summary||"")}" placeholder="e.g. A classic Italian pasta dish. Made with just 4 ingredients and ready in under 20 minutes." maxlength="200"/></div>
    ${o}
    <div class="frow"><label class="flbl">Description / Ingredients</label><textarea class="fta" id="erd" style="min-height:140px">${e.description||""}</textarea></div>
    <div class="frow"><label class="flbl">Notes</label><input class="fi" id="erno" value="${e.notes||""}"/></div>
    ${i}
    <div class="frow"><label class="flbl">Cuisine <span class="otag">optional</span></label><input class="fi" id="ecuis" value="${e.cuisine||""}" placeholder="e.g. Mediterranean, Turkish, Asian…"/></div>
    ${E}
    <div style="display:flex;align-items:center;gap:10px;margin:12px 0"><span style="font-size:.88rem">Favorite</span><div class="tog${e.favorited?" on":""}" id="etog" onclick="this.classList.toggle('on')"></div></div>
    <div style="display:flex;align-items:center;gap:10px;margin:6px 0 14px"><span style="font-size:.88rem">Share publicly</span><div class="tog${e.isPublic?" on":""}" id="epub" onclick="togglePublic('${e.id}');this.classList.toggle('on')"></div><span style="font-size:.72rem;color:var(--mt)">Visible to the community</span></div>
    <div class="brow"><button class="btn bd" style="flex:1" onclick="delER()">Delete</button><button class="btn bp" style="flex:2" onclick="updR()">Save</button></div>`,ot("erec")}async function LC(){var F,H,b;const n=d.recs.find(v=>v.id===d.eid);if(!n)return;const e=n.rating||0,t=Ll("etags"),i=f("ecuis")?f("ecuis").value.trim():n.cuisine||"";let s=n.imageUrl;if(Ct)try{R("Uploading cover photo…"),s=await ag(Ct,n.id),Ct=null}catch(v){console.error("Cover upload failed:",v),R("Cover photo upload failed — saving recipe without it")}else n._removeCover&&(s=null,delete n._removeCover,cg(`recipes/${n.id}/cover.jpg`).catch(()=>{}));const r={...n.stepPhotos||{}},o=Object.keys(wi);if(o.length){R("Uploading step photos…");for(const v of o)try{const _=await JS(wi[v],n.id,parseInt(v));r[v]=_}catch(_){console.error(`Step ${v} photo upload failed:`,_)}wi={}}const c=Ri("epreptime","epreptimeunit")||"",l=Ri("ecooktime","ecooktimeunit")||"",h=lg("etotaltime","etotaltimeunit")||"",m=f("eserves")?f("eserves").value.trim():n.servings||"",y=dg("ediff")||"",w=f("eyield")?f("eyield").value.trim():n.recipeYield||"",E=f("estorage")?f("estorage").value.trim():n.storageInstructions||"";let A=f("esummary")?f("esummary").value.trim():n.summary||"";const P=f("ern").value.trim(),$=f("erd").value.trim(),U=P!==n.name,N=$!==(n.description||"")&&Math.abs($.length-(n.description||"").length)>20,M=i!==(n.cuisine||"");if(A===(n.summary||"")&&(U||N||M))try{const I=(((b=(H=(F=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:250,messages:[{role:"user",content:`A recipe was edited. Decide if the summary needs updating. If yes, write a new 2-sentence summary (first sentence: what the dish is, second: what makes it special). Max 200 chars. Return JSON only: {"shouldUpdate":true/false,"newSummary":"..."}

Old title: ${n.name}
New title: ${P}
Old cuisine: ${n.cuisine||""}
New cuisine: ${i}
New description (first 300 chars): ${$.substring(0,300)}
Old summary: ${A||"(none)"}`}]})})).json()).content)==null?void 0:F[0])==null?void 0:H.text)==null?void 0:b.trim())||"").match(/\{[\s\S]*\}/);if(I){const S=JSON.parse(I[0]);S.shouldUpdate&&S.newSummary&&(A=S.newSummary,R("Summary updated"))}}catch(v){console.error("Summary update check failed:",v)}const D={...n,name:P,rating:e,description:$,notes:f("erno").value.trim(),favorited:f("etog").classList.contains("on"),tags:t,cuisine:i,imageUrl:s,stepPhotos:r,prepTime:c,cookTime:l,totalTime:h,servings:m,difficulty:y,recipeYield:w,storageInstructions:E,summary:A};await Qe(D),R("Recipe updated!"),Ee("erec"),n.publicId&&setTimeout(async()=>{var v;if(confirm("You edited a recipe that's also published to the community. Push these changes to the community version?"))try{const _={title:D.name,summary:D.summary,cuisine:D.cuisine,tags:D.tags,description:D.description,ingredients:D.description,ingredientsRaw:D.ingredientsRaw||[],stepsRaw:D.stepsRaw||[],prepTime:D.prepTime,cookTime:D.cookTime,totalTime:D.totalTime,servings:D.servings,difficulty:D.difficulty,imageUrl:D.imageUrl},k=(v=d.comRecs)==null?void 0:v.find(I=>I.id===n.publicId);k?await W(`public_recipes/${n.publicId}`,{...k,..._,id:void 0}):await W(`public_recipes/${n.publicId}`,_),R("Community version updated!")}catch(_){console.error("Community sync failed:",_),R("Couldn't update community version")}},300)}async function DC(){confirm("Delete this recipe?")&&(await Xf(d.eid),R("Deleted"),Ee("erec"))}async function NC(n){const e=f("erd");if(!e)return;const t=e.value.trim();if(!t){R("No ingredients to scale");return}const i=f("scaleStatus");i.style.display="block",i.style.color="var(--mt)",i.textContent=`⏳ Scaling to ${n}× with Claude…`;try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Scale ALL ingredient quantities in this recipe by ${n}x. Return ONLY the updated recipe text with scaled quantities. Keep the same format. Do not add any explanation.

${t}`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"";o?(e.value=o.trim(),i.style.color="var(--gn)",i.textContent=`✓ Scaled to ${n}×`):(i.style.color="var(--rd)",i.textContent="Couldn't scale — try again")}catch{i.style.color="var(--rd)",i.textContent="Couldn't reach Claude — check connection"}}async function MC(){const n=f("rsub");n&&(n.textContent="Thinking…");const e=d.inv.map(s=>`${s.name} (${_i(s.qty,s.unit)})`).join(", "),t=d.recs.map(s=>s.name).join(", "),i=[d.cfg.nopork?"no pork":null,d.cfg.noshellfish?"no shellfish":null,d.cfg.vegetarian?"vegetarian":null,d.cfg.glutenfree?"gluten-free":null,d.cfg.other||null].filter(Boolean).join(", ");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Based on this exact inventory: ${e}
Restrictions: ${i||"none"}
Saved recipes: ${t||"none"}
Suggest 5 complete meals I can make RIGHT NOW with no extra shopping. Be specific with names. Format as a numbered list.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",c=f("rbody");c&&(c.innerHTML=`<div style="background:var(--card);border:1px solid var(--ac);border-radius:14px;padding:16px;margin-bottom:12px"><div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ac);margin-bottom:10px">🔍 Make right now — no shopping needed</div><div style="font-size:.88rem;line-height:1.8;color:var(--tx2)">${vy(o)}</div><button class="btn bs bsm" style="margin-top:12px;width:100%" onclick="setRT('all')">← Back to recipes</button></div>`),n&&(n.textContent="Based on your inventory")}catch{n&&(n.textContent="Couldn't reach Claude")}}async function OC(n){const e=d.recs.find(t=>t.id===n);if(!e||!e.description){R("No ingredients listed");return}R("Parsing ingredients…");try{const t=d.inv.map(l=>l.name.toLowerCase()),s=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:400,messages:[{role:"user",content:`Extract a list of ingredient names from this recipe description. Return ONLY a JSON array of strings, no markdown, no quantities, just clean ingredient names. Example: ["chicken","garlic","olive oil"]

Recipe: ${e.description}`}]})})).json(),r=(s.content&&s.content[0]&&s.content[0].text||"").replace(/```json|```/g,"").trim(),c=JSON.parse(r).filter(l=>!t.some(h=>h.includes(l.toLowerCase())||l.toLowerCase().includes(h)));if(!c.length){R("All ingredients already in pantry ✓");return}for(const l of c)await ye({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:l,qty:1,checked:!1,src:"recipe"});R(`Added ${c.length} ingredient${c.length!==1?"s":""} to shopping list 🛒`),Ee("erec"),window.showScreen("shopping")}catch{R("Couldn't parse ingredients")}}function VC(n,e){d.nr=n,e==="r"?(ks("rstars",n),$h("rstars",e)):e==="c"&&(ks("cstars",n),$h("cstars",e))}function $h(n,e){const t=f(n);if(!t)return;const i=t.querySelector(".star-clear");if(i&&i.remove(),d.nr>0){const s=document.createElement("span");s.className="star-clear",s.textContent="✕",s.onclick=r=>{if(r.stopPropagation(),d.nr=0,ks(n,0),s.remove(),e==="rv"&&d.eid){const o=d.recs.find(c=>c.id===d.eid);o&&(o.rating=0,Qe({...o,rating:0}))}},t.appendChild(s)}}async function UC(n){const e=d.recs.find(i=>i.id===d.eid);if(!e)return;e.rating=n,d.nr=n;const t=f("rvstars");t&&(t.innerHTML=Array.from({length:5},(i,s)=>`<span class="star${s<n?" on":""}" onclick="setViewStar(${s+1})" style="cursor:pointer">${s<n?"★":"☆"}</span>`).join("")+(n>0?'<span class="star-clear" onclick="event.stopPropagation();setViewStar(0)">✕</span>':"")),await Qe({...e,rating:n})}async function FC(n){const e=d.recs.find(r=>r.id===n);if(!e)return;const t=!e.isPublic,i=Z(),s=(i==null?void 0:i.displayName)||localStorage.getItem("ks-who")||"Anonymous";if(t){const r=await Hc(e);if(r){R("This recipe has already been published to the community. To update the community version, edit the recipe and use the “Push to community” option."),(!e.isPublic||!e.publicId)&&(e.isPublic=!0,e.publicId=r.id,await Qe({...e}));return}const o=await Eo(e,s);e.publicId=o.id,Je("published",Ae(e.name||"a recipe")+" to community"),R("Recipe shared with the community!")}else{const r=e.publicId||e.id;await jc(r),e.publicId=null,Je("unpublished",Ae(e.name||"a recipe")+" from community"),R("Recipe removed from community")}await Qe({...e,isPublic:t,publicId:e.publicId||null})}function BC(n){const t=f(n==="add"?"addRecCoverInput":"editCoverInput");t&&t.click()}function HC(n,e){var i,s;const t=(s=(i=n.target)==null?void 0:i.files)==null?void 0:s[0];t&&(Ct=t,gg(t,e))}function jC(n,e){var i,s;const t=(s=(i=n.dataTransfer)==null?void 0:i.files)==null?void 0:s[0];!t||!t.type.startsWith("image/")||(Ct=t,gg(t,e))}function gg(n,e){const i=f(e==="add"?"addRecCoverZone":"editCoverZone");if(!i)return;const s=new FileReader;s.onload=r=>{i.classList.add("has-preview"),i.innerHTML=`<img src="${r.target.result}" alt="Cover preview"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('${e}')">✕</button>`},s.readAsDataURL(n)}function zC(n){Ct=null;const t=f(n==="add"?"addRecCoverZone":"editCoverZone");if(t&&(t.classList.remove("has-preview"),t.innerHTML='<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop · Max 800×600, 300KB</div>',n==="edit"&&d.eid)){const i=d.recs.find(s=>s.id===d.eid);i&&(i._removeCover=!0)}}let Br=null;function qC(n){Br=n;const e=f("stepPhotoInput");e&&(e.value="",e.click())}function WC(n){var i,s;const e=(s=(i=n.target)==null?void 0:i.files)==null?void 0:s[0];if(!e||Br===null)return;wi[Br]=e;const t=new FileReader;t.onload=r=>{R(`Step ${Br+1} photo added`)},t.readAsDataURL(e)}function GC(n){const e=d.recs.find(t=>t.id===d.eid);if(e){if(delete wi[n],e.stepPhotos&&e.stepPhotos[n]){const t=`recipes/${e.id}/steps/${n}.jpg`;cg(t).catch(()=>{}),delete e.stepPhotos[n]}mg(e.id),R(`Step ${n+1} photo removed`)}}function KC(n,e){Un=n||[],Fn=e||0,vg();const t=f("photoViewer");t&&t.classList.add("active"),JC()}function QC(){const n=f("photoViewer");n&&n.classList.remove("active"),Un=[]}function yg(n){const e=Fn+n;e<0||e>=Un.length||(Fn=e,vg())}function vg(){const n=f("pvImg"),e=f("pvCounter"),t=f("pvPrev"),i=f("pvNext");n&&(n.src=Un[Fn]||""),e&&(e.textContent=Un.length>1?`${Fn+1} / ${Un.length}`:""),t&&(t.style.display=Fn>0?"flex":"none"),i&&(i.style.display=Fn<Un.length-1?"flex":"none")}function JC(){const n=f("pvWrap");if(!n)return;let e=0,t=0;const i=n.cloneNode(!0);n.parentNode.replaceChild(i,n),i.addEventListener("touchstart",s=>{e=s.touches[0].clientX,t=s.touches[0].clientY},{passive:!0}),i.addEventListener("touchend",s=>{const r=s.changedTouches[0].clientX-e,o=s.changedTouches[0].clientY-t;Math.abs(r)>50&&Math.abs(r)>Math.abs(o)&&yg(r<0?1:-1)},{passive:!0})}function YC(){const n=f("cmtPhotoInput");n&&(n.value="",n.click())}function XC(n){var t;const e=(t=n.target)==null?void 0:t.files;if(!(!e||!e.length)){for(let i=0;i<e.length;i++)e[i].type.startsWith("image/")&&_t.push(e[i]);wg()}}function ZC(n){_t.splice(n,1),wg()}function wg(){const n=f("cmtPhotoPreview");if(!n)return;if(!_t.length){n.innerHTML="";return}let e="";_t.forEach((t,i)=>{const s=URL.createObjectURL(t);e+=`<div style="position:relative;display:inline-block"><img src="${s}" class="cmt-preview-thumb" alt=""/><button onclick="event.stopPropagation();removeCommentPhoto(${i})" style="position:absolute;top:-4px;right:-4px;width:18px;height:18px;border-radius:50%;background:var(--rd);color:#fff;border:none;font-size:.6rem;cursor:pointer;display:flex;align-items:center;justify-content:center">✕</button></div>`}),e+='<div class="cmt-preview-add" onclick="triggerCommentPhotoUpload()">+</div>',n.innerHTML=e}let bt=null;function Hr(n){if(!n)return 0;const e=n.toLowerCase();let t=0;const i=e.match(/(\d+)\s*(?:hr|hour)/),s=e.match(/(\d+)\s*min/);return i&&(t+=parseInt(i[1])*60),s&&(t+=parseInt(s[1])),t}function uo(n,e){const t=Math.round(n||0),i=Array.from({length:5},(r,o)=>o<t?"★":"☆").join(""),s=e?`(${e})`:"";return`<span style="color:var(--ac);font-size:.74rem;letter-spacing:1px">${i}</span><span style="font-size:.68rem;color:var(--mt);margin-left:3px">${s}</span>`}async function Nl(){const n=f("rbody");if(n){n.innerHTML='<div class="es"><div class="ei">🌍</div><p>Loading community recipes…</p></div>',d.comPage=0;try{d.comRecs=await zc(),dt()}catch(e){console.error("loadCommunity:",e),n.innerHTML=`<div class="es"><div class="ei">⚠️</div><p>Couldn't load community recipes.</p></div>`}}}function eA(n){d.comCuisine=n,d.comPage=0,dt()}function tA(n){d.comSearch=n,d.comPage=0,dt()}function nA(n){d.comSort=n,d.comPage=0,dt()}function iA(n){const e=d.comTags.indexOf(n);e>=0?d.comTags.splice(e,1):d.comTags.push(n),d.comPage=0,dt()}function sA(n){d.comTime=n,d.comPage=0,dt()}function rA(n){d.comMinRating=parseInt(n)||0,d.comPage=0,dt()}function dt(){const n=f("rbody");if(!n)return;bt&&(bt.disconnect(),bt=null);let e=[...d.comRecs];if(d.comCuisine&&d.comCuisine!=="all"&&(e=e.filter(l=>(l.cuisine||"").toLowerCase().includes(d.comCuisine.toLowerCase())||(l.tags||[]).some(h=>h.toLowerCase().includes(d.comCuisine.toLowerCase())))),d.comSearch){const l=d.comSearch.toLowerCase();e=e.filter(h=>(h.title||"").toLowerCase().includes(l)||(h.tags||[]).join(" ").toLowerCase().includes(l)||(h.cuisine||"").toLowerCase().includes(l)||(h.authorUsername||"").toLowerCase().includes(l)||(h.authorName||"").toLowerCase().includes(l))}d.comTags.length&&(e=e.filter(l=>d.comTags.every(h=>(l.tags||[]).includes(h)))),d.comTime&&d.comTime!=="any"&&(e=e.filter(l=>{const h=Hr(l.cookTime||l.totalTime);return h?d.comTime==="under30"?h<=30:d.comTime==="30to60"?h>30&&h<=60:d.comTime==="over60"?h>60:!0:!1})),d.comMinRating>0&&(e=e.filter(l=>(l.avgRating||0)>=d.comMinRating)),d.comSort==="popular"?e.sort((l,h)=>(h.likes||0)-(l.likes||0)):d.comSort==="rated"?e.sort((l,h)=>(h.avgRating||0)-(l.avgRating||0)):d.comSort==="az"?e.sort((l,h)=>(l.title||"").localeCompare(h.title||"")):d.comSort==="cooktime"?e.sort((l,h)=>Hr(l.cookTime||l.totalTime)-Hr(h.cookTime||h.totalTime)):e.sort((l,h)=>new Date(h.createdAt||0)-new Date(l.createdAt||0));const i=e.slice(0,(d.comPage+1)*20),s=i.length<e.length,r=f("rsub");r&&(r.textContent=e.length+" community recipe"+(e.length!==1?"s":""));const o=d.comSort||"newest";let c=`<div style="margin-bottom:14px">
    <input class="fi" id="com-search" placeholder="Search recipes, tags, authors…" value="${d.comSearch.replace(/"/g,"&quot;")}" oninput="setComSearch(this.value)" style="margin-bottom:8px"/>
    <div style="display:flex;gap:6px;margin-bottom:8px">
      <select class="fsel" onchange="setComSort(this.value)" style="font-size:.78rem;padding:7px 10px;flex:1">
        <option value="newest"${o==="newest"?" selected":""}>Newest first</option>
        <option value="az"${o==="az"?" selected":""}>A → Z</option>
        <option value="rated"${o==="rated"?" selected":""}>Highest rated</option>
        <option value="popular"${o==="popular"?" selected":""}>Most popular</option>
        <option value="cooktime"${o==="cooktime"?" selected":""}>Cook time</option>
      </select>
    </div>
    ${fg("com")}
  </div>`;if(!e.length){const l=d.comSearch||d.comCuisine!=="all"||d.comTags.length||d.comTime!=="any"||d.comMinRating>0;c+=`<div class="es"><div class="ei">🌍</div><p>${l?"No recipes match your filters.":"No community recipes yet. Be the first to share!"}</p></div>`,n.innerHTML=c;return}if(c+='<div class="recipe-grid" id="com-recipe-grid">',i.forEach(l=>{const h=(l.tags||[]).slice(0,3).map(A=>`<span class="com-tag">${A}</span>`).join(""),m=l.authorUsername?`@${l.authorUsername}`:l.authorName||"Anonymous",y=l.cookTime||l.totalTime||"",w=l.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${l.imageUrl}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",E=l.commentCount||0;c+=`<div class="rcd com-rcd" onclick="openComRecipe('${l.id}')">
      ${w}
      <div class="rrow">
        <div class="rnm" style="flex:1">${l.title||"Untitled"}</div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <span style="font-size:.78rem;color:var(--rd)">❤️ ${l.likes||0}</span>
          ${E?`<span style="font-size:.78rem;color:var(--mt)">💬 ${E}</span>`:""}
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-top:4px;flex-wrap:wrap">
        ${l.cuisine?`<span style="font-size:.72rem;color:var(--ac);font-weight:600">${l.cuisine}</span>`:""}
        ${l.avgRating||l.ratingCount?`<span>${uo(l.avgRating,l.ratingCount)}</span>`:""}
        ${y?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${y}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${h}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${m}</div>
      </div>
    </div>`}),c+="</div>",s&&(c+='<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>'),n.innerHTML=c,s){const l=f("com-scroll-sentinel");l&&(bt=new IntersectionObserver(h=>{h[0].isIntersecting&&(d.comPage++,_g(e,n))},{rootMargin:"200px"}),bt.observe(l))}}function _g(n,e){const i=d.comPage*20,s=i+20,r=n.slice(i,s),o=s<n.length;let c="";r.forEach(m=>{const y=(m.tags||[]).slice(0,3).map($=>`<span class="com-tag">${$}</span>`).join(""),w=m.authorUsername?`@${m.authorUsername}`:m.authorName||"Anonymous",E=m.cookTime||m.totalTime||"",A=m.commentCount||0,P=m.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${m.imageUrl}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"";c+=`<div class="rcd com-rcd" onclick="openComRecipe('${m.id}')">
      ${P}
      <div class="rrow">
        <div class="rnm" style="flex:1">${m.title||"Untitled"}</div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <span style="font-size:.78rem;color:var(--rd)">❤️ ${m.likes||0}</span>
          ${A?`<span style="font-size:.78rem;color:var(--mt)">💬 ${A}</span>`:""}
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-top:4px;flex-wrap:wrap">
        ${m.cuisine?`<span style="font-size:.72rem;color:var(--ac);font-weight:600">${m.cuisine}</span>`:""}
        ${m.avgRating||m.ratingCount?`<span>${uo(m.avgRating,m.ratingCount)}</span>`:""}
        ${E?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${E}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${y}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${w}</div>
      </div>
    </div>`});const l=f("com-scroll-sentinel");l&&l.remove(),bt&&(bt.disconnect(),bt=null);const h=f("com-recipe-grid");if(h?h.insertAdjacentHTML("beforeend",c):e.insertAdjacentHTML("beforeend",c),o){e.insertAdjacentHTML("beforeend",'<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>');const m=f("com-scroll-sentinel");m&&(bt=new IntersectionObserver(y=>{y[0].isIntersecting&&(d.comPage++,_g(n,e))},{rootMargin:"200px"}),bt.observe(m))}}async function ho(n){var De;const e=d.comRecs.find(oe=>oe.id===n);if(!e)return;d._openComId=n,Ai="view",_t=[];const t=(De=Z())==null?void 0:De.uid,[i,s,r,o]=await Promise.all([np(n),tp(n).catch(()=>[]),ap(n).catch(()=>null),rp(n)]);i?d.myLikes.add(n):d.myLikes.delete(n),s.sort((oe,Rn)=>new Date(oe.createdAt||0)-new Date(Rn.createdAt||0)),d._comComments=s;const c=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`,l=e.imageUrl?`<div style="margin:-16px -16px 16px;overflow:hidden;max-height:240px"><img src="${e.imageUrl}" alt="" style="width:100%;height:240px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",h=[e.prepTime?`🔪 Prep: ${e.prepTime}`:"",e.cookTime?`🔥 Cook: ${e.cookTime}`:"",e.totalTime?`⏱ Total: ${e.totalTime}`:"",e.servings?`🍽 Serves: ${e.servings}`:""].filter(Boolean),m=h.length?`<div class="rv-meta">${h.map(oe=>`<div class="rv-meta-pill">${oe}</div>`).join("")}</div>`:"",y=(e.ratingCount||0)>0?`<div style="margin-bottom:6px">${uo(e.avgRating,e.ratingCount)}</div>`:"",w=(e.tags||[]).map(oe=>`<span class="com-tag">${oe}</span>`).join(""),E=e.authorUsername?`@${e.authorUsername}`:e.authorName||"Anonymous",A=d.myLikes.has(n),P=t&&t===e.authorUid;let $=!1;!P&&t&&e.householdId&&e.householdId===d.hid&&($=!0);const U=P||$;let N="";e.ingredientsRaw&&e.ingredientsRaw.length?N=`<ul style="margin:0;padding-left:18px;font-size:.88rem;color:var(--tx2);line-height:2">${e.ingredientsRaw.map(oe=>`<li>${(typeof oe=="string"?oe:(oe.amount||"")+" "+(oe.unit||"")+" "+(oe.name||"")).replace(/</g,"&lt;").replace(/>/g,"&gt;").trim()}</li>`).join("")}</ul>`:e.ingredients&&(N=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.ingredients||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);let M="";e.stepsRaw&&e.stepsRaw.length?M=`<ol style="margin:0;padding-left:22px;font-size:.88rem;color:var(--tx2);line-height:1.8">${e.stepsRaw.map(oe=>`<li style="margin-bottom:8px">${(typeof oe=="string"?oe:oe.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</li>`).join("")}</ol>`:e.steps&&(M=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.steps||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);const D=fA(s.slice(0,20),n,t,P),F=s.length>20,H=(r==null?void 0:r.rating)||0,b=H>0?`<span onclick="clearComRating('${n}')" style="cursor:pointer;font-size:.8rem;color:var(--mt);margin-left:6px;vertical-align:middle" title="Clear rating">✕</span>`:"",v=P?"":Array.from({length:5},(oe,Rn)=>`<span class="star${Rn<H?" on":""}" onclick="rateComRecipe('${n}',${Rn+1})" style="cursor:pointer;font-size:1.3rem">${Rn<H?"★":"☆"}</span>`).join("")+b,_=U?`<button class="btn bs bsm" onclick="editComRecipe('${n}')" style="margin-top:8px;width:100%">✏️ Edit community version</button>`:"",k=P?`<button class="btn bd bsm" onclick="unpublishComRecipe('${n}')" style="margin-top:8px;width:100%">🚫 Unpublish this recipe</button>`:"",I=_+k,S=!U&&t?`<button class="btn-report" onclick="openReportSheet('recipe','${n}','${n}')" title="Report recipe">🚩 Report</button>`:"";f("erecbody").innerHTML=`
    ${l}
    <div style="margin-bottom:14px">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px">
        <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;line-height:1.3;margin-bottom:6px;flex:1">${e.title||"Untitled"}</div>
        ${S}
      </div>
      ${e.cuisine?`<div style="font-size:.78rem;color:var(--ac);font-weight:600;margin-bottom:6px">${e.cuisine}</div>`:""}
      ${y}
      <div style="font-size:.76rem;color:var(--mt)">by ${E} · ${e.createdAt?new Date(e.createdAt).toLocaleDateString():""}</div>
      ${w?`<div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:8px">${w}</div>`:""}
    </div>

    ${m}

    <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap">
      <button class="btn ${A?"bp":"bs"} bsm" onclick="likeComRecipe('${n}')" id="com-like-btn">
        ${A?"❤️":"🤍"} ${e.likes||0} Like${(e.likes||0)!==1?"s":""}
      </button>
      <button class="btn bs bsm" style="flex:1" onclick="saveComToKitchen('${n}')">📖 Save to my recipes</button>
      <button class="btn bs bsm" onclick="shareComRecipe('${n}')">📤 Share</button>
    </div>

    ${N?`<div class="frow"><label class="flbl">Ingredients</label>${N}</div>`:""}
    ${M?`<div class="frow"><label class="flbl">Instructions</label>${M}</div>`:""}

    ${P?"":`<div style="background:var(--card);border:1px solid var(--b2);border-radius:12px;padding:14px;margin-top:16px">
      <div class="flbl" style="margin-bottom:8px">Rate this recipe</div>
      <div id="com-rating-stars" style="display:flex;align-items:center;gap:2px">${v}</div>
      ${H?`<div id="com-rating-label" style="font-size:.72rem;color:var(--mt);margin-top:4px">You rated this ${H}★</div>`:'<div id="com-rating-label"></div>'}
      ${(e.ratingCount||0)>0?`<div style="font-size:.72rem;color:var(--mt);margin-top:6px">${uo(e.avgRating,e.ratingCount)} avg</div>`:""}
    </div>`}

    <div style="margin-top:16px">
      <div class="flbl" style="margin-bottom:10px">Comments (${s.length})</div>
      <div id="com-comments">${D||'<div style="font-size:.82rem;color:var(--mt);padding:8px 0">No comments yet.</div>'}</div>
      ${F?`<button class="btn bs bsm" id="com-load-more" onclick="loadMoreComments()" style="width:100%;margin-top:8px">Load more comments (${s.length-20} remaining)</button>`:""}
      <div style="display:flex;gap:8px;margin-top:12px">
        <input class="fi" id="com-cmt-input" placeholder="Add a comment…" maxlength="500" style="flex:1" onkeydown="if(event.key==='Enter')addComComment('${n}')"/>
        <button class="btn bs bsm" onclick="triggerCommentPhotoUpload()" title="Attach photos">📷</button>
        <button class="btn bp bsm" onclick="addComComment('${n}')">Post</button>
      </div>
      <input type="file" id="cmtPhotoInput" accept="image/*" multiple style="display:none" onchange="handleCommentPhotosSelected(event)"/>
      <div id="cmtPhotoPreview" class="cmt-photo-previews"></div>
      <div style="font-size:.68rem;color:var(--mt);margin-top:4px;text-align:right" id="com-cmt-counter">0 / 500</div>
    </div>

    <div style="margin-top:16px;padding:12px;background:var(--card);border:1px solid var(--b1);border-radius:12px">
      <div style="font-size:.72rem;color:var(--mt);margin-bottom:6px">Share link (viewable without sign-in)</div>
      <div style="font-size:.8rem;color:var(--ac);word-break:break-all;cursor:pointer" onclick="navigator.clipboard.writeText('${c}');showNotif('Link copied!')">${c}</div>
    </div>

    ${I}`;const T=f("com-cmt-input");T&&T.addEventListener("input",()=>{const oe=f("com-cmt-counter");oe&&(oe.textContent=`${T.value.length} / 500`)}),ot("erec")}async function oA(n,e){return bg(n,e)}async function bg(n,e){if(!Z()){R("Sign in to rate recipes");return}try{const i=await op(n,e);if(!i){R("You can't rate your own recipe");return}const s=d.comRecs.find(c=>c.id===n);s&&(s.ratingSum=i.ratingSum,s.ratingCount=i.ratingCount,s.avgRating=i.avgRating);const r=f("com-rating-stars");r&&(r.innerHTML=Array.from({length:5},(c,l)=>`<span class="star${l<e?" on":""}" onclick="rateComRecipe('${n}',${l+1})" style="cursor:pointer;font-size:1.3rem">${l<e?"★":"☆"}</span>`).join("")+`<span onclick="clearComRating('${n}')" style="cursor:pointer;font-size:.8rem;color:var(--mt);margin-left:6px;vertical-align:middle" title="Clear rating">✕</span>`);const o=f("com-rating-label");o&&(o.textContent=`You rated this ${e}★`),R(`Rated ${e}★`)}catch(i){console.error("rateComRecipe:",i),R("Couldn't submit rating")}}async function aA(n){if(Z())try{const t=await cp(n);if(!t)return;const i=d.comRecs.find(o=>o.id===n);i&&(i.ratingSum=t.ratingSum,i.ratingCount=t.ratingCount,i.avgRating=t.avgRating);const s=f("com-rating-stars");s&&(s.innerHTML=Array.from({length:5},(o,c)=>`<span class="star" onclick="rateComRecipe('${n}',${c+1})" style="cursor:pointer;font-size:1.3rem">☆</span>`).join(""));const r=f("com-rating-label");r&&(r.textContent=""),R("Rating cleared")}catch(t){console.error("clearComRating:",t),R("Couldn't clear rating")}}async function cA(n){if(confirm("Remove this recipe from the community?"))try{await jc(n),d.comRecs=d.comRecs.filter(e=>e.id!==n),R("Recipe unpublished"),Ee("erec"),dt()}catch(e){console.error("unpublishComRecipe:",e),R("Couldn't unpublish recipe")}}async function lA(n){if(!Z()){R("Sign in to like recipes");return}const t=d.myLikes.has(n);try{await Zf(n,t),t?d.myLikes.delete(n):d.myLikes.add(n);const i=d.comRecs.find(r=>r.id===n);i&&(i.likes=(i.likes||0)+(t?-1:1));const s=f("com-like-btn");if(s){const r=d.myLikes.has(n);s.className=`btn ${r?"bp":"bs"} bsm`,s.innerHTML=`${r?"❤️":"🤍"} ${(i==null?void 0:i.likes)||0} Like${((i==null?void 0:i.likes)||0)!==1?"s":""}`}R(t?"Like removed":"Liked!")}catch(i){console.error("likeComRecipe:",i),R("Couldn't update like")}}async function uA(n){if(!Z()){R("Sign in to save recipes");return}const t=d.comRecs.find(i=>i.id===n);if(t)try{await ip(t),Je("saved",Ae(t.title||"a recipe")+" from community"),R("Recipe saved to your kitchen! 📖"),Ee("erec")}catch(i){console.error("saveComToKitchen:",i),R("Couldn't save recipe")}}async function dA(n){var r;const e=Z();if(!e){R("Sign in to comment");return}const t=f("com-cmt-input"),i=(r=t==null?void 0:t.value)==null?void 0:r.trim();if(!i&&!_t.length)return;if(i&&i.length>500){R("Comment must be 500 characters or less");return}const s=e.displayName||localStorage.getItem("ks-who")||"Anonymous";try{const o=await ep(n,i||"",s);if(!o)return;let c=[];if(_t.length){R("Uploading photos…");for(let E=0;E<_t.length;E++)try{const A=await YS(_t[E],n,o.id,E);c.push(A)}catch(A){console.error(`Comment photo ${E} upload failed:`,A)}c.length&&(o.photoUrls=c,await W(`public_recipes/${n}/comments/${o.id}`,{...o,id:void 0}))}t&&(t.value=""),_t=[];const l=f("cmtPhotoPreview");l&&(l.innerHTML="");const h=f("com-cmt-counter");h&&(h.textContent="0 / 500");const m=f("com-comments"),y=d.comRecs.find(E=>E.id===n),w=e.uid===(y==null?void 0:y.authorUid);m&&o&&(m.querySelector("div[style*='color:var(--mt)']")&&!m.querySelector("div[style*='border-bottom']")&&(m.innerHTML=""),m.innerHTML+=Ml(o,n,e.uid,w)),d._comComments&&d._comComments.push(o),R(c.length?`Comment posted with ${c.length} photo${c.length!==1?"s":""}!`:"Comment posted!")}catch(o){console.error("addComComment:",o),R("Couldn't post comment")}}async function hA(n){const e=d.comRecs.find(s=>s.id===n),t=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`,i=(e==null?void 0:e.title)||"Recipe";if(navigator.share)try{await navigator.share({title:i,text:`Check out this recipe: ${i}`,url:t});return}catch{}try{await navigator.clipboard.writeText(t),R("Link copied!")}catch{R("Couldn't copy link")}}function Ml(n,e,t,i){const s=(n.authorUsername?"@"+n.authorUsername:n.authorName)||"Anonymous",r=n.createdAt?new Date(n.createdAt).toLocaleDateString():"",o=(n.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;"),c=t&&(n.authorUid===t||i),l=t&&n.authorUid!==t;let h="";c&&(h+=`<button class="btn-report" onclick="deleteComComment('${e}','${n.id}')" title="Delete comment" style="font-size:.7rem">🗑</button>`),l&&(h+=`<button class="btn-report" onclick="openReportSheet('comment','${n.id}','${e}')" title="Report comment" style="font-size:.7rem">🚩</button>`);let m="";const y=n.photoUrls||[];if(y.length){const w=JSON.stringify(y).replace(/'/g,"\\'");m=`<div class="cmt-photos-grid">${y.map((A,P)=>`<img src="${A}" alt="Photo ${P+1}" onclick="event.stopPropagation();openPhotoViewer(${w.replace(/"/g,"&quot;")},${P})" onerror="this.style.display='none'"/>`).join("")}</div>
      <div class="cmt-photo-count">📷 ${y.length} photo${y.length!==1?"s":""}</div>`}return`<div class="com-comment-row" id="cmt-${n.id}" style="padding:10px 0;border-bottom:1px solid var(--b1)">
    <div style="display:flex;justify-content:space-between;align-items:center">
      <span style="font-size:.78rem;font-weight:600">${s}</span>
      <div style="display:flex;align-items:center;gap:6px">
        ${h}
        <span style="font-size:.68rem;color:var(--mt)">${r}</span>
      </div>
    </div>
    <div style="font-size:.84rem;color:var(--tx2);margin-top:4px;line-height:1.5">${o}</div>
    ${m}
  </div>`}function fA(n,e,t,i){return n.length?n.map(s=>Ml(s,e,t,i)).join(""):""}function pA(){var h;const n=d._openComId,e=(h=Z())==null?void 0:h.uid,t=d.comRecs.find(m=>m.id===n),i=e&&e===(t==null?void 0:t.authorUid),s=f("com-comments");if(!s||!d._comComments)return;const r=s.querySelectorAll(".com-comment-row").length,o=d._comComments.slice(r,r+20);if(o.length){const m=o.map(y=>Ml(y,n,e,i)).join("");s.insertAdjacentHTML("beforeend",m)}const c=d._comComments.length-r-o.length,l=f("com-load-more");l&&(c>0?l.textContent=`Load more comments (${c} remaining)`:l.remove())}async function mA(n,e){if(confirm("Delete this comment?"))try{await lp(n,e);const t=document.getElementById("cmt-"+e);t&&t.remove(),d._comComments&&(d._comComments=d._comComments.filter(i=>i.id!==e)),R("Comment deleted")}catch(t){console.error("deleteComComment:",t),R("Couldn't delete comment")}}async function gA(n){var w;const e=d.comRecs.find(E=>E.id===n);if(!e)return;const i=((w=Z())==null?void 0:w.uid)===e.authorUid,s=e.householdId&&e.householdId===d.hid;if(!i&&!s){R("Only household members can edit");return}d._editingComId=n,Ai="edit";const r=f("erecTitle");r&&(r.textContent="Edit Community Recipe");const o=`<div style="background:rgba(201,168,76,0.15);border:1px solid var(--ac);border-radius:10px;padding:12px;margin-bottom:14px;font-size:.82rem;color:var(--ac);line-height:1.5">
    ⚠️ You are editing the <strong>community version</strong>. Changes will be visible to everyone immediately.
  </div>`,c=e.tags||[],l=E=>c.includes(E)?" sel":"";let h='<div class="frow"><label class="flbl">Tags</label><div class="tags-grid" id="comEditTags">';Fr.forEach(E=>{h+=`<div class="tag-cat">${E.cat}</div>`,E.tags.forEach(A=>{h+=`<div class="tag${l(A)}" data-tag="${A}" onclick="togTag(this)">${A}</div>`})}),h+="</div></div>";const m=Vt(e.prepTime),y=Vt(e.cookTime);Vt(e.totalTime),f("erecbody").innerHTML=`
    ${o}
    <div class="frow"><label class="flbl">Title</label><input class="fi" id="comEditTitle" value="${ue(e.title||"")}"/></div>
    <div class="frow"><label class="flbl">Summary <span class="otag">optional</span></label><input class="fi" id="comEditSummary" value="${ue(e.summary||"")}" placeholder="1-2 sentence description" maxlength="200"/></div>
    <div class="frow"><label class="flbl">Cuisine <span class="otag">optional</span></label><input class="fi" id="comEditCuisine" value="${ue(e.cuisine||"")}" placeholder="e.g. Mediterranean, Turkish…"/></div>
    <div style="margin-bottom:14px">
      <div class="frow" style="margin-bottom:8px"><label class="flbl">Prep time</label>
        <div style="display:flex;gap:8px;align-items:center">
          <input class="fi" id="comEditPrepTime" type="text" inputmode="numeric" placeholder="e.g. 15" value="${ue(m.value)}" style="flex:1"/>
          <select class="fi" id="comEditPrepUnit" style="width:auto;min-width:90px">
            <option value="min"${m.unit==="min"?" selected":""}>minutes</option>
            <option value="hr"${m.unit==="hr"?" selected":""}>hours</option>
          </select>
        </div>
      </div>
      <div class="frow" style="margin-bottom:8px"><label class="flbl">Cook time</label>
        <div style="display:flex;gap:8px;align-items:center">
          <input class="fi" id="comEditCookTime" type="text" inputmode="numeric" placeholder="e.g. 30" value="${ue(y.value)}" style="flex:1"/>
          <select class="fi" id="comEditCookUnit" style="width:auto;min-width:90px">
            <option value="min"${y.unit==="min"?" selected":""}>minutes</option>
            <option value="hr"${y.unit==="hr"?" selected":""}>hours</option>
          </select>
        </div>
      </div>
      <div class="frow"><label class="flbl">Serves</label>
        <input class="fi" id="comEditServes" type="text" inputmode="numeric" placeholder="e.g. 4" value="${ue(e.servings||"")}"/>
      </div>
    </div>
    ${h}
    <div class="frow"><label class="flbl">Ingredients</label><textarea class="fta" id="comEditIngredients" style="min-height:100px">${ue(e.ingredients||"")}</textarea></div>
    <div class="frow"><label class="flbl">Steps</label><textarea class="fta" id="comEditSteps" style="min-height:100px">${ue(e.steps||"")}</textarea></div>
    <div class="brow" style="margin-top:14px">
      <button class="btn bs" style="flex:1" onclick="hideOv('erec')">Cancel</button>
      <button class="btn bp" style="flex:2" onclick="saveComRecipeEdit()">Save Changes</button>
    </div>`,ot("erec")}async function yA(){var w,E,A,P,$,U,N,M,D,F,H,b;const n=d._editingComId,e=d.comRecs.find(v=>v.id===n);if(!e)return;const t=((E=(w=f("comEditTitle"))==null?void 0:w.value)==null?void 0:E.trim())||e.title,i=((P=(A=f("comEditSummary"))==null?void 0:A.value)==null?void 0:P.trim())||"",s=((U=($=f("comEditCuisine"))==null?void 0:$.value)==null?void 0:U.trim())||"",r=((M=(N=f("comEditServes"))==null?void 0:N.value)==null?void 0:M.trim())||"",o=Ll("comEditTags"),c=((F=(D=f("comEditIngredients"))==null?void 0:D.value)==null?void 0:F.trim())||"",l=((b=(H=f("comEditSteps"))==null?void 0:H.value)==null?void 0:b.trim())||"",h=Ri("comEditPrepTime","comEditPrepUnit")||"",m=Ri("comEditCookTime","comEditCookUnit")||"",y={...e,title:t,summary:i,cuisine:s,servings:r,tags:o,ingredients:c,steps:l,prepTime:h,cookTime:m};delete y.id;try{await W(`public_recipes/${n}`,y),Object.assign(e,{title:t,summary:i,cuisine:s,servings:r,tags:o,ingredients:c,steps:l,prepTime:h,cookTime:m}),d._editingComId=null;const v=f("erecTitle");v&&(v.textContent="Recipe"),Je("updated",Ae(t)+" (community)"),R("Community recipe updated!"),Ee("erec"),dt()}catch(v){console.error("saveComRecipeEdit:",v),R("Couldn't save changes")}}function vA(n,e,t){if(!Z()){R("Sign in to report content");return}d._reportTarget={type:n,targetId:e,recipeId:t};const s=f("report-sheet"),r=f("reportBackdrop");s&&s.classList.add("active"),r&&r.classList.add("active")}function Tg(){const n=f("report-sheet"),e=f("reportBackdrop");n&&n.classList.remove("active"),e&&e.classList.remove("active"),d._reportTarget=null}async function wA(n){const e=d._reportTarget;if(e){try{const t=await up(e.type,e.targetId,n,e.recipeId);R(t==="duplicate"?"You've already reported this":"Thanks for your report")}catch(t){console.error("submitComReport:",t),R("Couldn't submit report")}Tg()}}async function Ig(){try{const n=await pp(),e=n>9?"9+":String(n),t=n>0,i=f("recipes-notif-badge");i&&(i.textContent=e,i.style.display=t?"flex":"none");const s=f("recipes-notif-badge-hdr");s&&(s.textContent=e,s.style.display=t?"flex":"none")}catch{}}async function _A(){if(!Z()){R("Sign in to view notifications");return}try{const e=await hp();fp().then(()=>Ig());const t=f("erecbody");if(!t)return;let i=`<div style="margin-bottom:14px">
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;margin-bottom:6px">Notifications</div>
      <div style="font-size:.76rem;color:var(--mt)">${e.length?e.length+" notification"+(e.length!==1?"s":""):"No notifications yet"}</div>
    </div>`;e.length?e.forEach(s=>{const r=!s.read,o=s.createdAt?new Date(s.createdAt).toLocaleDateString():"";s.type==="comment"&&(i+=`<div class="rcd" style="${r?"border-left:3px solid var(--ac);":""}" onclick="openComRecipeFromNotif('${s.recipeId}')">
            <div style="font-size:.84rem;font-weight:${r?"600":"400"};line-height:1.5">
              <span style="color:var(--ac)">${(s.commenterUsername||"Someone").replace(/</g,"&lt;")}</span> commented on your recipe
              <span style="font-weight:600">${(s.recipeName||"").replace(/</g,"&lt;")}</span>
            </div>
            <div style="font-size:.68rem;color:var(--mt);margin-top:4px">${o}</div>
          </div>`)}):i+=`<div class="es"><div class="ei">🔔</div><p>When someone comments on your recipe, you'll see it here.</p></div>`,t.innerHTML=i,ot("erec")}catch(e){console.error("openNotifications:",e),R("Couldn't load notifications")}}async function bA(n){if(Ee("erec"),!d.comRecs.length)try{d.comRecs=await zc()}catch{}if(d.comRecs.find(e=>e.id===n)){d.rt="community",document.querySelectorAll(".rtab").forEach(t=>t.classList.remove("active"));const e=f("rtab-community");e&&e.classList.add("active"),setTimeout(()=>ho(n),100)}else try{const e=await qc(n);e?(d.comRecs.push({id:n,...e}),d.rt="community",setTimeout(()=>ho(n),100)):R("Recipe no longer available")}catch{R("Couldn't load recipe")}}function TA(){const n=d.cookLog,e=d.wasteLog;let t=0;for(let M=0;M<60;M++){const D=new Date;D.setDate(D.getDate()-M);const F=D.toISOString().split("T")[0];if(n.find(H=>H.date===F))t++;else if(M>0)break}const i=f("ins-streak-num");i&&(i.textContent=t);const s=f("ins-total-cooked");s&&(s.textContent=n.length);const r=f("ins-waste-count");r&&(r.textContent=e.length);const o=f("ins-sub");o&&(o.textContent=n.length?" "+n.length+" meals cooked":"Your kitchen at a glance");const c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],l=f("ins-week");if(l){const M=Pi().map(D=>{const F=D.toISOString().split("T")[0],H=d.mp[F],b=F===ln();return`<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--b1)${b?";background:var(--acd);margin:0 -4px;padding:7px 4px;border-radius:6px":""}">
        <div style="font-size:.72rem;color:var(--mt);min-width:30px;font-weight:${b?"600":"400"}">${c[D.getDay()]}</div>
        <div style="font-size:.72rem;color:var(--mt);min-width:20px">${D.getDate()}</div>
        <div style="font-size:.84rem;color:${H?"var(--tx)":"var(--mt)"};font-style:${H?"normal":"italic"};flex:1">${H||"—"}</div>
        ${b?"<div style='font-size:.66rem;color:var(--ac);font-weight:600'>TODAY</div>":""}
      </div>`}).join("");l.innerHTML=M}const h=n.slice(0,7).map(M=>M.name),m=f("ins-variety-nudge"),y=f("ins-variety-msg");if(m&&h.length>=3){const M={};h.forEach(v=>{const _=v.toLowerCase();M[_]=(M[_]||0)+1});const D=Object.entries(M).filter(([,v])=>v>=3),F=Object.values(d.mp).filter(Boolean),H=F.some(v=>/curry|dal|rice|bengali|biryani|hilsa|mustard|lentil/i.test(v)),b=F.some(v=>/kebab|köfte|pide|börek|meze|turkish|pilav|lahmacun/i.test(v));D.length?(m.style.display="block",y.textContent=`You've cooked "${D[0][0]}" ${D[0][1]} times this week. Time to mix it up?`):!H&&F.length>=3?(m.style.display="block",y.textContent="No Bangladeshi dishes this week — how about a dal, biryani, or fish curry?"):!b&&F.length>=3?(m.style.display="block",y.textContent="No Turkish dishes planned — köfte, mercimek çorbası, or a pilav would be great this week!"):m.style.display="none"}else m&&(m.style.display="none");const w={};n.forEach(M=>{w[M.name]=(w[M.name]||0)+1});const E=Object.entries(w).sort((M,D)=>D[1]-M[1]).slice(0,6),A=E[0]?E[0][1]:1,P=f("ins-cooked");if(P)if(!E.length)P.innerHTML='<div class="es" style="padding:16px"><p>Cook some meals to see stats!</p></div>';else{const M=["🥇","🥈","🥉","4️⃣","5️⃣","6️⃣"];P.innerHTML=E.map(([D,F],H)=>`<div class="ibar-row"><div style="font-size:.9rem;margin-right:4px">${M[H]||""}</div><div class="ibar-lbl">${D}</div><div class="ibar-track"><div class="ibar-fill" style="width:${Math.round(F/A*100)}%"></div></div><div class="ibar-val">${F}×</div></div>`).join("")}const $={Bangladeshi:"#e8a44a",Turkish:"#c0392b",Mediterranean:"#27ae60",American:"#3498db",Italian:"#e74c3c",Asian:"#9b59b6",Other:"#95a5a6"},U=f("ins-cuisine");if(U&&n.length){const M=b=>{const v=b.toLowerCase();return/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(v)?"Bangladeshi":/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner|iskender/i.test(v)?"Turkish":/pasta|pizza|risotto|gnocchi|italian/i.test(v)?"Italian":/tacos|burrito|enchilada|mexican/i.test(v)?"Mexican":/sushi|ramen|stir.?fry|fried rice|asian|chinese|thai|japanese/i.test(v)?"Asian":/burger|sandwich|mac|bbq|american/i.test(v)?"American":"Other"},D={};n.slice(0,20).forEach(b=>{const v=M(b.name);D[v]=(D[v]||0)+1});const F=Object.values(D).reduce((b,v)=>b+v,0),H=Object.entries(D).sort((b,v)=>v[1]-b[1]);U.innerHTML=H.map(([b,v])=>{const _=Math.round(v/F*100),k=$[b]||"#95a5a6";return`<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span style="font-size:.82rem;font-weight:500">${b}</span><span style="font-size:.74rem;color:var(--mt)">${v} meals · ${_}%</span></div><div style="height:8px;background:var(--b1);border-radius:4px;overflow:hidden"><div style="height:100%;width:${_}%;background:${k};border-radius:4px;transition:width .6s ease"></div></div></div>`}).join("")||'<div class="es" style="padding:16px"><p>Cook more meals to see your cuisine breakdown.</p></div>'}const N=f("ins-waste");N&&(N.innerHTML=e.length?e.slice(0,10).map(M=>`<div class="waste-item"><span style="font-size:.86rem">${M.name}</span><span style="font-size:.74rem;color:var(--rd)">${M.date}</span></div>`).join(""):'<div class="es" style="padding:16px"><p>Nothing wasted yet — great job! 🎉</p></div>')}function IA(){const n=["fridge","freezer","pantry"].map(o=>{const c=d.inv.filter(l=>l.location===o);return c.length?zh(o).toUpperCase()+": "+c.map(l=>`${l.name} (${_i(l.qty,l.unit)})`).join(", "):""}).filter(Boolean).join(`
`),e=d.inv.filter(o=>{const c=At(o.expiry);return c&&(c.c==="expiring"||c.c==="expired")}).map(o=>{const c=At(o.expiry);return`${o.name} (${c.l})`}).join(", "),t=Pi().map(o=>{const c=o.toISOString().split("T")[0];return d.mp[c]?`${o.toLocaleDateString("en-US",{weekday:"short"})}: ${d.mp[c]}`:""}).filter(Boolean).join(", "),i=d.recs.filter(o=>o.favorited||o.rating>=4).map(o=>`${o.name}${o.rating?` (${o.rating}★)`:""}`).join(", "),s=[d.cfg.nopork?"no pork":null,d.cfg.noshellfish?"no shellfish":null,d.cfg.vegetarian?"vegetarian":null,d.cfg.glutenfree?"gluten-free":null,d.cfg.other].filter(Boolean).join(", "),r=d.cookLog.slice(0,7).map(o=>o.name).join(", ");return`You are a kitchen and household assistant for a family in Edison NJ. You ONLY help with kitchen, food, cooking, grocery, and household topics. This includes:
- Recipe suggestions and "what can I make?" based on inventory
- Meal planning advice and weekly menu ideas
- Grocery shopping tips and list building
- Food storage, shelf life, and expiry guidance
- Cooking techniques, substitutions, and conversions
- Food waste reduction tips
If the user asks about something unrelated to kitchen, food, or household topics, politely let them know you're focused on kitchen help and redirect them back to what you can assist with.

INVENTORY:
${n||"Empty."}
${e?"EXPIRING SOON: "+e:""}
${t?"MEAL PLAN: "+t:""}
${i?"FAVOURITE RECIPES: "+i:""}
${r?"RECENTLY COOKED (avoid repeating): "+r:""}
HOUSEHOLD: ${d.cfg.name}, Adults: ${d.cfg.adults}, Kids: ${d.cfg.kids}, Restrictions: ${s||"none"}, Cuisines: ${d.cfg.cuisines}, Cook time: ${d.cfg.cookTime}.
CULTURAL BACKGROUND: Bushra is Bangladeshi, Bora is Turkish — authentically lean toward these cuisines (Bengali spices, mustard oil, dal, hilsa-style fish; Turkish kebabs, meze, börek, yogurt sauces, lentil soups). Suggest these when inventory allows.
Be concise. Use what they have. Suggest variety — lean toward Bangladeshi and Turkish — avoid repeating recent meals. Format grocery lists as bullet points starting "- ".

RECIPE FORMAT RULE: When suggesting recipes (any time you provide a recipe with ingredients/steps), wrap EACH recipe in :::RECIPE::: and :::END::: markers with a JSON object containing: title, ingredients (newline-separated list), steps (numbered newline-separated list), cuisine, cookTime, servings.
Example:
:::RECIPE:::
{"title":"Dal Tadka","ingredients":"1 cup red lentils\\n2 tomatoes, chopped\\n1 tsp cumin seeds\\n1 tsp turmeric","steps":"1. Wash and boil lentils until soft\\n2. Heat oil, add cumin seeds\\n3. Add tomatoes, cook until soft\\n4. Combine with lentils and simmer","cuisine":"Bangladeshi","cookTime":"30 min","servings":4}
:::END:::
Always use this format so the app can offer a one-tap save button. You can include normal text before/after recipe blocks.`}function EA(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<li>$1</li>").replace(/^[-•]\s+(.+)$/gm,"<li>$1</li>").replace(/\n/g,"<br>")}async function Eg(){const n=f("chi"),e=n.value.trim();if(!e)return;n.value="",kg(n),d.chat.push({role:"user",content:e}),Da("user",e);const t=f("csb");t&&(t.disabled=!0);const i="thinking-"+Date.now(),s=f("chmsgs");s.innerHTML+=`<div class="cb asst thinking" id="${i}">Thinking…</div>`,s.scrollTop=s.scrollHeight;try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:800,system:IA(),messages:d.chat.map(h=>({role:h.role,content:h.content}))})})).json(),c=o.content&&o.content[0]&&o.content[0].text||"Sorry, I couldn't process that.",l=f(i);l&&l.remove(),d.chat.push({role:"assistant",content:c}),Da("assistant",c)}catch{const o=f(i);o&&o.remove(),Da("assistant","Sorry, I couldn't reach Claude. Check your connection and try again.")}t&&(t.disabled=!1)}function kA(n){const e=[];return{cleanText:n.replace(/:::RECIPE:::\s*([\s\S]*?)\s*:::END:::/g,(i,s)=>{try{const r=JSON.parse(s.trim());r.title&&e.push(r)}catch{}return""}).trim(),recipes:e}}function SA(n){const e=JSON.stringify(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;"),t=(n.ingredients||"").split(`
`).slice(0,3).join(", ");return`<div style="background:var(--card);border:1.5px solid var(--ac);border-radius:14px;padding:16px;margin:10px 0">
    <div style="font-family:'Fraunces',serif;font-size:1.1rem;font-weight:300;color:var(--ac);margin-bottom:6px">${(n.title||"").replace(/</g,"&lt;")}</div>
    ${n.cuisine?`<div style="font-size:.72rem;color:var(--mt);margin-bottom:6px">${n.cuisine}${n.cookTime?" · "+n.cookTime:""}${n.servings?" · "+n.servings+" servings":""}</div>`:""}
    ${t?`<div style="font-size:.8rem;color:var(--tx2);line-height:1.5;margin-bottom:10px">${t.replace(/</g,"&lt;")}…</div>`:""}
    <button class="btn bp bsm" onclick="importChatRecipe(this)" data-recipe="${e}">📖 Add to My Recipes</button>
  </div>`}async function CA(n){try{const e=JSON.parse(n.dataset.recipe),t="rec-"+Date.now(),i=[e.ingredients||"",e.steps?`

Steps:
`+e.steps:""].join("").trim();await Qe({id:t,name:e.title||"Untitled Recipe",rating:0,favorited:!1,notes:"",description:i,source:"Claude Chat",sourceUrl:null,tags:[],cuisine:e.cuisine||"",cookTime:e.cookTime||"",servings:e.servings||"",cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:!1}),n.textContent="✓ Saved!",n.disabled=!0,n.style.background="var(--gn)",R("Recipe saved! 📖")}catch{R("Couldn't save recipe")}}function Da(n,e){const t=f("chmsgs");if(t){if(n==="assistant"){const{cleanText:i,recipes:s}=kA(e);if(i){const r=document.createElement("div");r.className="cb asst",r.innerHTML=EA(i),t.appendChild(r)}s.forEach(r=>{const o=document.createElement("div");o.style.maxWidth="88%",o.style.alignSelf="flex-start",o.innerHTML=SA(r),t.appendChild(o)})}else{const i=document.createElement("div");i.className="cb user",i.innerHTML=e,t.appendChild(i)}t.scrollTop=t.scrollHeight}}function AA(n){const e=f("chi");e&&(e.value=n.textContent),Eg()}function RA(){d.chat=[];const n=f("chmsgs");n&&(n.innerHTML=`<div class="cb asst">Hey! 👋 I'm your kitchen assistant — I can help with recipes, meal planning, grocery tips, and cooking questions. What's on your mind?</div>`)}function kg(n){n.style.height="auto",n.style.height=Math.min(n.scrollHeight,120)+"px"}let $s=!1,jr=!1,zr=null;function Ol(){if($s)return;const n=f("scanner-video");if(!n)return;const e=f("scan-status");e&&(e.textContent="Starting camera…",e.style.display="block"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{xA(n,e)})})}function xA(n,e){Quagga.init({inputStream:{name:"Live",type:"LiveStream",target:n,constraints:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}},locator:{patchSize:"medium",halfSample:!0},decoder:{readers:["ean_reader","ean_8_reader","upc_reader","upc_e_reader","code_128_reader","code_39_reader"]},locate:!0,frequency:10},function(t){if(t){console.error("Scanner init error:",t);const i=f("scerr");i&&(i.textContent="⚠️ Could not access camera. Try entering the barcode manually.",i.style.display="block"),e&&(e.style.display="none");return}PA(n),Quagga.start(),$s=!0,e&&(e.textContent="Scanning…"),setTimeout(()=>$A(n),2e3)}),Quagga.onDetected(Sg)}function PA(n){n.querySelectorAll("video").forEach(e=>{e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,e.play().catch(()=>{})})}async function $A(n){if(!$s)return;const e=n.querySelector("video");if(!(!e||e.videoWidth>0)){console.warn("Camera feed appears black — retrying with manual getUserMedia");try{const t=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}});zr=t,e.srcObject&&e.srcObject.getTracks().forEach(i=>i.stop()),e.srcObject=t,e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,await e.play()}catch(t){console.error("Manual camera retry failed:",t)}}}function Vl(){if($s){try{Quagga.stop()}catch{}Quagga.offDetected(Sg),zr&&(zr.getTracks().forEach(n=>n.stop()),zr=null),$s=!1,jr=!1}}async function Sg(n){var s,r;if(jr)return;const e=n&&n.codeResult&&n.codeResult.code;if(!e)return;const t=((r=(s=n.codeResult.decodedCodes)==null?void 0:s.filter(o=>o.error!==void 0))==null?void 0:r.map(o=>o.error))||[];if(!((t.length?t.reduce((o,c)=>o+c,0)/t.length:1)>.25)){jr=!0,LA(),Vl(),f("scanbody").style.display="none",f("scspin").style.display="block",f("scst").textContent="Found "+e+" — looking up…";try{const o=await Cg(e);d.cp=o,f("aqty").value=1,f("aexp").value="",Ul("fridge",f("rl-fridge")),Ag(o)}catch{const o=f("scerr");o.textContent="⚠️ Lookup failed. Check your connection or enter the barcode manually.",o.style.display="block"}f("scanbody").style.display="block",f("scspin").style.display="none",jr=!1}}function LA(){const n=f("scan-success");n&&(n.style.display="flex",n.style.animation="none",n.offsetHeight,n.style.animation="",setTimeout(()=>{n.style.display="none"},500))}function DA(){Ee("result"),ot("scan"),f("scerr").style.display="none",Ol()}function NA(){d.scanDestList=!0,ot("scan");const n=f("scanovttl");n&&(n.textContent="Scan → Shopping List");const e=f("scan-dest-hint");e&&(e.textContent="Running low? Scan to add to your shopping list."),f("scerr").style.display="none",Ol()}function MA(){d.scanDestList=!1,ot("scan");const n=f("scanovttl");n&&(n.textContent="Scan Barcode");const e=f("scan-dest-hint");e&&(e.textContent="Scan a barcode to add to your pantry or shopping list."),f("scerr").style.display="none",Ol()}function OA(){const n=f("scanNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=f("scanNoteInp");t&&t.focus()}}function VA(){if(!d.cp)return;const n=d.cp.notFound?"Barcode "+d.cp.barcode:d.cp.name,e=f("scanNoteInp"),t=e?e.value.trim():"",i=parseInt(f("aqty").value)||1,s={id:Date.now().toString(),name:n,qty:i,checked:!1,src:"scan"};d.cp.brand&&(s.brand=d.cp.brand),d.cp.image&&(s.image=d.cp.image),t&&(s.note=t),ye(s),R("Added to list: "+n),Ee("result"),Ee("scan"),d.scanDestList=!1,e&&(e.value="");const r=f("scanNoteWrap");r&&(r.style.display="none"),window.showScreen("shopping")}function UA(){const n=f("mentry");n.style.display=n.style.display==="none"?"block":"none"}async function FA(){const n=f("meinp").value.trim();if(!n)return;Vl(),f("scanbody").style.display="none",f("scspin").style.display="block",f("scst").textContent="Looking up…";const e=await Cg(n);d.cp=e,f("aqty").value=1,f("aexp").value="",Ul("fridge",f("rl-fridge")),f("meinp").value="",Ag(e),f("scanbody").style.display="block",f("scspin").style.display="none"}async function Cg(n){try{const e=await fetch("/api/barcode?code="+encodeURIComponent(n));if(e.ok){const t=await e.json();if(t.found&&t.product)return{...t.product,notFound:!1}}}catch{}return{barcode:n,name:"",brand:"",quantity:"",category:"General",image:null,source:null,description:"",notFound:!0}}function BA(n,e){switch(n){case"Open Food Facts":return`https://world.openfoodfacts.org/product/${e}`;case"Open Beauty Facts":return`https://world.openbeautyfacts.org/product/${e}`;case"Open Pet Food Facts":return`https://world.openpetfoodfacts.org/product/${e}`;case"UPC Item DB":return`https://www.upcitemdb.com/upc/${e}`;case"Edamam":return"https://www.edamam.com/food-database/en/";default:return"#"}}function Ag(n){var s;Ee("scan"),f("resttl").textContent=n.notFound?"Not Found":"Product Found ✓",f("aunit").value=n.quantity||"unit";let e="";if(n.notFound)e=`<div class="nfb">⚠️ Barcode <code>${n.barcode}</code> not found in any database. Enter name:<input class="fi" id="mnm" placeholder="Product name (required)" oninput="valAdd()" style="margin-top:10px"/></div>`;else{const r=n.image?`<img src="${n.image}" class="pimg" onerror="this.style.display='none'"/>`:'<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">🛒</div>',o=n.description?`<div class="pdsc">${n.description}</div>`:"",c=n.source?`<a href="${BA(n.source,n.barcode)}" target="_blank" rel="noopener" class="srcb" style="text-decoration:none">${n.source} ↗</a>`:"";e=`<div class="pcard"><div class="phdr">${r}<div style="flex:1"><div class="pnm">${n.name}</div>${n.brand?`<div class="pbr">${n.brand}</div>`:""}<div class="pbc">${n.barcode}</div><span class="bdg">${n.category}</span>${c}</div></div>${o}</div>`}f("resbody").innerHTML=e;const t=(s=f("ov-result"))==null?void 0:s.querySelector(".ovbody");if(t){const r=t.querySelector(".frow"),o=t.querySelectorAll(".frow")[1],c=t.querySelectorAll(".qrow")[1];r&&(r.style.display=d.scanDestList?"none":""),o&&(o.style.display=d.scanDestList?"none":""),c&&(c.style.display=d.scanDestList?"none":"")}const i=f("scan-dest-btns");i&&(d.scanDestList?i.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2;background:var(--gn);border-color:var(--gn)" id="addbtn" onclick="addScannedToList()">🛒 Add to Shopping List</button>
      </div>`:i.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2" id="addbtn" onclick="addToInv()">📦 Add to Pantry</button>
      </div>
      <button class="btn bs bf" style="margin-top:8px;border-color:var(--gn);color:var(--gn)" onclick="addScannedToList()">🛒 Add to Shopping List instead</button>`),n.notFound&&setTimeout(()=>{const r=f("addbtn");r&&(r.disabled=!0)},0),ot("result")}function Ul(n,e){d.selR=n,document.querySelectorAll("#ov-result .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function HA(){const n=f("mnm");f("addbtn").disabled=!(n&&n.value.trim())}async function jA(){if(!d.cp)return;const n=f("mnm"),e=d.cp.notFound?n&&n.value.trim()||"":d.cp.name;if(!e)return;const t=f("aunit").value.trim()||"unit",i=Math.max(1,parseInt(f("aqty").value)||1),s=f("aexp").value||null,r="item-"+d.cp.barcode.replace(/\W/g,"-"),o=d.inv.find(c=>c.id===r);await re({id:r,barcode:d.cp.barcode,name:e,brand:d.cp.brand||"",unit:t,qty:o?o.qty+i:i,location:d.selR,category:d.cp.category||"General",image:d.cp.image||null,source:d.cp.source||null,expiry:s,addedAt:o?o.addedAt:new Date().toLocaleDateString()}),R(o?`+${i} added to ${e}`:`${e} added!`),d.cp=null,Ee("result")}function zA(n){const e=f("aqty");e.value=Math.max(1,(parseInt(e.value)||1)+n)}let xe=null,Er=0,kr=0,K=null,en=null,yt=0,pt=!1,si=!1;const tn=80,Sr=.1,nn=.7,Cr=8,Mn="cubic-bezier(0.25, 1.5, 0.5, 1)",$e="cubic-bezier(0.4, 0, 0.2, 1)";function qA(){document.addEventListener("touchstart",e=>{const t=e.target.closest(".swipe-inner");if(!t)return;const i=t.closest(".swipe-wrap");i&&(d.selectMode||(K&&K!==i&&(Dt(K),K=null),xe=t,Er=e.touches[0].clientX,kr=e.touches[0].clientY,en=null,pt=!1,yt=i.offsetWidth,t.classList.add("swiping")))},{passive:!0}),document.addEventListener("touchmove",e=>{if(!xe)return;const t=e.touches[0].clientX,i=e.touches[0].clientY,s=t-Er,r=i-kr;if(!en){if(Math.abs(s)<Cr&&Math.abs(r)<Cr)return;en=Math.abs(s)>Math.abs(r)?"horizontal":"vertical"}if(en==="vertical"){xe.classList.remove("swiping"),xe=null;return}e.preventDefault();const o=xe.closest(".swipe-wrap"),c=o==null?void 0:o.dataset.list,l=s>0&&c==="inv",h=l?s:s>=0?0:s;if(xe.style.transform=`translateX(${h}px)`,h<0){const y=o==null?void 0:o.querySelector(".swipe-del");if(y){const E=Math.min(100,Math.abs(h)/tn*100);y.style.clipPath=`inset(0 0 0 ${100-E}%)`}const w=o==null?void 0:o.querySelector(".swipe-add");w&&(w.style.clipPath="inset(0 100% 0 0)")}else if(h>0&&l){const y=o==null?void 0:o.querySelector(".swipe-add");if(y){const E=Math.min(100,h/tn*100);y.style.clipPath=`inset(0 ${100-E}% 0 0)`}const w=o==null?void 0:o.querySelector(".swipe-del");w&&(w.style.clipPath="inset(0 0 0 100%)")}const m=Math.abs(h)/yt;m>=nn&&!pt?(pt=!0,navigator.vibrate&&navigator.vibrate(10),o==null||o.classList.add("swipe-threshold")):m<nn&&pt&&(pt=!1,o==null||o.classList.remove("swipe-threshold"))},{passive:!1}),document.addEventListener("touchend",()=>{if(!xe)return;const e=xe,t=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/yt,r=t==null?void 0:t.dataset.list,o=i>0&&r==="inv";if(o&&s>=nn)Dh(t,e);else if(o&&s>=Sr){e.style.transition=`transform 0.4s ${Mn}`,e.style.transform=`translateX(${tn}px)`;const c=t==null?void 0:t.querySelector(".swipe-add");c&&(c.style.transition=`clip-path 0.3s ${$e}`,c.style.clipPath="inset(0 0 0 0)"),t==null||t.classList.add("open"),K&&K!==t&&Dt(K),K=t,setTimeout(()=>{e.style.transition=""},400)}else if(!o&&s>=nn)Lh(t,e);else if(!o&&i<0&&s>=Sr){e.style.transition=`transform 0.4s ${Mn}`,e.style.transform=`translateX(-${tn}px)`;const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${$e}`,c.style.clipPath="inset(0 0 0 0%)"),t==null||t.classList.add("open"),t==null||t.classList.add("swipe-threshold"),K&&K!==t&&Dt(K),K=t,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${Mn}`,e.style.transform="translateX(0)";const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${$e}`,c.style.clipPath="inset(0 0 0 100%)");const l=t==null?void 0:t.querySelector(".swipe-add");l&&(l.style.transition=`clip-path 0.3s ${$e}`,l.style.clipPath="inset(0 100% 0 0)"),t==null||t.classList.remove("open","swipe-threshold"),K===t&&(K=null),setTimeout(()=>{e.style.transition="",c&&(c.style.transition=""),l&&(l.style.transition="")},350)}xe=null}),document.addEventListener("mousedown",e=>{if(e.button!==0)return;const t=e.target.closest(".swipe-inner");if(!t)return;const i=t.closest(".swipe-wrap");i&&(d.selectMode||(K&&K!==i&&(Dt(K),K=null),si=!0,xe=t,Er=e.clientX,kr=e.clientY,en=null,pt=!1,yt=i.offsetWidth,t.classList.add("swiping")))}),document.addEventListener("mousemove",e=>{if(!si||!xe)return;const t=e.clientX-Er,i=e.clientY-kr;if(!en){if(Math.abs(t)<Cr&&Math.abs(i)<Cr)return;en=Math.abs(t)>Math.abs(i)?"horizontal":"vertical"}if(en==="vertical"){xe.classList.remove("swiping"),xe=null,si=!1;return}e.preventDefault();const s=xe.closest(".swipe-wrap"),r=s==null?void 0:s.dataset.list,o=t>0&&r==="inv",c=o?t:t>=0?0:t;if(xe.style.transform=`translateX(${c}px)`,c<0){const h=s==null?void 0:s.querySelector(".swipe-del");if(h){const y=Math.min(100,Math.abs(c)/tn*100);h.style.clipPath=`inset(0 0 0 ${100-y}%)`}const m=s==null?void 0:s.querySelector(".swipe-add");m&&(m.style.clipPath="inset(0 100% 0 0)")}else if(c>0&&o){const h=s==null?void 0:s.querySelector(".swipe-add");if(h){const y=Math.min(100,c/tn*100);h.style.clipPath=`inset(0 ${100-y}% 0 0)`}const m=s==null?void 0:s.querySelector(".swipe-del");m&&(m.style.clipPath="inset(0 0 0 100%)")}const l=Math.abs(c)/yt;l>=nn&&!pt?(pt=!0,navigator.vibrate&&navigator.vibrate(10),s==null||s.classList.add("swipe-threshold")):l<nn&&pt&&(pt=!1,s==null||s.classList.remove("swipe-threshold"))});function n(){if(!si||!xe){si=!1;return}si=!1;const e=xe,t=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/yt,r=t==null?void 0:t.dataset.list,o=i>0&&r==="inv";if(o&&s>=nn)Dh(t,e);else if(o&&s>=Sr){e.style.transition=`transform 0.4s ${Mn}`,e.style.transform=`translateX(${tn}px)`;const c=t==null?void 0:t.querySelector(".swipe-add");c&&(c.style.transition=`clip-path 0.3s ${$e}`,c.style.clipPath="inset(0 0 0 0)"),t==null||t.classList.add("open"),K&&K!==t&&Dt(K),K=t,setTimeout(()=>{e.style.transition=""},400)}else if(!o&&s>=nn)Lh(t,e);else if(!o&&i<0&&s>=Sr){e.style.transition=`transform 0.4s ${Mn}`,e.style.transform=`translateX(-${tn}px)`;const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${$e}`,c.style.clipPath="inset(0 0 0 0%)"),t==null||t.classList.add("open"),t==null||t.classList.add("swipe-threshold"),K&&K!==t&&Dt(K),K=t,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${Mn}`,e.style.transform="translateX(0)";const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${$e}`,c.style.clipPath="inset(0 0 0 100%)");const l=t==null?void 0:t.querySelector(".swipe-add");l&&(l.style.transition=`clip-path 0.3s ${$e}`,l.style.clipPath="inset(0 100% 0 0)"),t==null||t.classList.remove("open","swipe-threshold"),K===t&&(K=null),setTimeout(()=>{e.style.transition="",c&&(c.style.transition=""),l&&(l.style.transition="")},350)}xe=null}document.addEventListener("mouseup",n),document.addEventListener("mouseleave",n),document.addEventListener("mousedown",e=>{if(!K||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const t=e.target.closest(".swipe-inner");t&&t.closest(".swipe-wrap")===K||(Dt(K),K=null)}),document.addEventListener("click",e=>{document.querySelectorAll(".sh-note-edit.open").forEach(t=>{if(t.contains(e.target))return;const i=t.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-note-btn");if(s&&s.contains(e.target))return;const r=t.querySelector("textarea");r&&r.blur(),t.classList.remove("open")}),document.querySelectorAll(".sh-qty-edit.open").forEach(t=>{if(t.contains(e.target))return;const i=t.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-qty");if(s&&s.contains(e.target))return;const r=t.querySelector("input");r&&r.blur(),t.classList.remove("open")})},!0),document.addEventListener("touchstart",e=>{if(!K||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const t=e.target.closest(".swipe-inner");t&&t.closest(".swipe-wrap")===K||(Dt(K),K=null)},{passive:!0})}function Dt(n){const e=n==null?void 0:n.querySelector(".swipe-inner"),t=n==null?void 0:n.querySelector(".swipe-del"),i=n==null?void 0:n.querySelector(".swipe-add");e&&(e.style.transition=`transform 0.35s ${Mn}`,e.style.transform="translateX(0)",setTimeout(()=>{e.style.transition=""},350)),t&&(t.style.transition=`clip-path 0.3s ${$e}`,t.style.clipPath="inset(0 0 0 100%)",setTimeout(()=>{t.style.transition=""},300)),i&&(i.style.transition=`clip-path 0.3s ${$e}`,i.style.clipPath="inset(0 100% 0 0)",setTimeout(()=>{i.style.transition=""},300)),n==null||n.classList.remove("open","swipe-threshold")}async function Lh(n,e){const t=n==null?void 0:n.dataset.id,i=n==null?void 0:n.dataset.list;if(!t||!i)return;e.style.transition=`transform 0.3s ${$e}`,e.style.transform=`translateX(-${yt+100}px)`;const s=n==null?void 0:n.querySelector(".swipe-del");s&&(s.style.transition=`transform 0.3s ${$e}`,s.style.transform=`translateX(-${yt+100}px)`),await new Promise(r=>setTimeout(r,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",K===n&&(K=null),await new Promise(r=>setTimeout(r,250)),i==="shop"?await Ni(t):(await Bs(t),R("Item removed"))}async function Dh(n,e){const t=n==null?void 0:n.dataset.id;if(!t)return;e.style.transition=`transform 0.3s ${$e}`,e.style.transform=`translateX(${yt+100}px)`;const i=n==null?void 0:n.querySelector(".swipe-add");i&&(i.style.transition=`transform 0.3s ${$e}`,i.style.transform=`translateX(${yt+100}px)`),await new Promise(s=>setTimeout(s,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",K===n&&(K=null),await new Promise(s=>setTimeout(s,250)),await Rg(t)}async function WA(n,e){if(e!=="inv")return;const t=f("sw-"+n);if(!t)return;const i=t.querySelector(".swipe-inner"),s=t.offsetWidth;i&&(i.style.transition=`transform 0.3s ${$e}`,i.style.transform=`translateX(${s+100}px)`);const r=t.querySelector(".swipe-add");r&&(r.style.transition=`transform 0.3s ${$e}`,r.style.transform=`translateX(${s+100}px)`),await new Promise(o=>setTimeout(o,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",K===t&&(K=null),await new Promise(o=>setTimeout(o,250)),await Rg(n)}async function Rg(n){const e=d.inv.find(i=>i.id===n);if(!e)return;if(d.shop.find(i=>i.name.toLowerCase()===e.name.toLowerCase()&&!i.checked)){R(`${e.name} is already on your list`);return}await ye({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,brand:e.brand||"",image:e.image||null,src:"supplies"}),R(`${e.name} added to shopping list 🛒`)}async function GA(n,e){const t=f("sw-"+n);if(!t)return;const i=t.querySelector(".swipe-inner"),s=t.offsetWidth;i&&(i.style.transition=`transform 0.3s ${$e}`,i.style.transform=`translateX(-${s+100}px)`);const r=t.querySelector(".swipe-del");r&&(r.style.transition=`transform 0.3s ${$e}`,r.style.transform=`translateX(-${s+100}px)`),await new Promise(o=>setTimeout(o,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",K===t&&(K=null),await new Promise(o=>setTimeout(o,250)),e==="shop"?await Ni(n):(await Bs(n),R("Item removed"))}function KA(n,e){const t=f("sw-"+n);if(t){const i=t.querySelector(".swipe-inner"),s=parseFloat(((i==null?void 0:i.style.transform)||"").replace("translateX(",""))||0;if(Math.abs(s)>10){Dt(t),K=null;return}}if(d.selectMode){d.selectedIds.has(n)?(d.selectedIds.delete(n),t==null||t.classList.remove("selected")):(d.selectedIds.add(n),t==null||t.classList.add("selected")),Fo();return}e==="shop"?window.openItemDetail(n):window.openInvItemDetail(n)}function QA(){if(d.selectMode==="shop"){xi();return}d.selectMode&&xi(),d.selectMode="shop",d.selectedIds.clear(),document.querySelectorAll("#shlist .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=f("sh-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),Fo()}function JA(){if(d.selectMode==="inv"){xi();return}d.selectMode&&xi(),d.selectMode="inv",d.selectedIds.clear(),document.querySelectorAll("#ibody .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=f("inv-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),Fo()}function xi(){d.selectMode=null,d.selectedIds.clear(),document.querySelectorAll(".swipe-wrap.selecting").forEach(t=>t.classList.remove("selecting","selected"));const n=f("sh-selbtn");n&&(n.classList.remove("active"),n.textContent="Select");const e=f("inv-selbtn");e&&(e.classList.remove("active"),e.textContent="Select"),Fo()}async function YA(){if(!d.selectedIds.size)return;const n=[...d.selectedIds],e=d.selectMode;xi(),e==="shop"?await Promise.all(n.map(t=>Ni(t))):await Promise.all(n.map(t=>Bs(t))),R(`Removed ${n.length} item${n.length!==1?"s":""} 🗑`)}function Fo(){const n=f("multi-bar");if(!n)return;const e=d.selectedIds.size,t=f("multi-count");t&&(t.textContent=e),d.selectMode?n.classList.add("visible"):n.classList.remove("visible")}const XA=["Chicken","Beef","Fish","Vegetarian","Vegan","Quick","Kids","Healthy","Batch Cook","Date Night"];function xg(n){return"chip-"+n.split(" ").join("-")}function Pg(){const n=f("recChips");n&&(n.innerHTML=XA.map(e=>`<button onclick="toggleChip('${e}')" id="${xg(e)}" style="padding:5px 10px;border-radius:20px;border:1px solid var(--bd);background:var(--s2);color:var(--tx2);font-size:.78rem;cursor:pointer;transition:all .15s">${e}</button>`).join(""))}function ZA(n){const e=f(xg(n));window._activeChips.has(n)?(window._activeChips.delete(n),e&&(e.style.background="var(--s2)",e.style.color="var(--tx2)",e.style.borderColor="var(--bd)")):(window._activeChips.add(n),e&&(e.style.background="var(--ac)",e.style.color="#000",e.style.borderColor="var(--ac)")),$g()}function $g(){const n=f("recPicker"),e=f("recFilter")?f("recFilter").value.trim().toLowerCase():"",t=[...window._activeChips].map(r=>r.toLowerCase()),s=[...d.recs].sort((r,o)=>(o.cookCount||0)-(r.cookCount||0)).filter(r=>{const o=(r.name+" "+(r.description||"")+" "+(r.tags||[]).join(" ")).toLowerCase(),c=e?e.split(/\s+/).every(h=>o.includes(h)):!0,l=t.every(h=>o.includes(h));return c&&l});n.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(r=>`<option value="${r.id}">${r.name}</option>`).join(""),window._pickedRec=null,f("mealMinp").value=""}function eR(n,e){d.md=n,f("mealMttl").textContent="Meal for "+e,f("mealMinp").value=d.mp[n]||"",window._pickedRec=null,window._activeChips=new Set;const t=f("recFilter");t&&(t.value=""),Pg();const i=f("recPicker");if(d.recs&&d.recs.length){const s=[...d.recs].sort((c,l)=>(l.cookCount||0)-(c.cookCount||0));i.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(c=>`<option value="${c.id}">${c.name}</option>`).join("");const r=d.mp[n]||"",o=s.find(c=>c.name===r);i.value=o?o.id:"",f("recPickerWrap").style.display="block"}else f("recPickerWrap").style.display="none";f("mealM").classList.add("active"),setTimeout(()=>f("mealMinp").focus(),100)}function tR(n){if(!n){window._pickedRec=null,f("mealMinp").value="";return}const e=d.recs.find(t=>t.id===n);e&&(window._pickedRec=e,f("mealMinp").value=e.name)}function Fl(){f("mealM").classList.remove("active")}function nR(){f("schedM").classList.remove("active")}async function iR(){const n=f("mealMinp").value.trim();if(await _n(d.md,n||null),window._pickedRec&&window._pickedRec.description){const e=window._pickedRec.description,t=d.inv.map(o=>o.name.toLowerCase()),i=d.shop.map(o=>o.name.toLowerCase()),s=e.split(/[\n,]/).map(o=>o.replace(/^[\d\/\s]*(cup|tbsp|tsp|oz|lb|g|kg|ml|l|clove|slice|piece|bunch|head|can|package|pkg)s?\.?\s*/gi,"").replace(/^[\d]+\s*/,"").trim()).filter(o=>o.length>1&&o.length<60);let r=0;for(const o of s){if(/\b(add|mix|heat|cook|bake|stir|boil|fry|slice|chop|dice|combine|place|pour|season|serve|preheat|bring|remove|let|set|transfer)\b/i.test(o))continue;const c=o.replace(/^[-•*]\s*/,"").trim();if(!c||c.length<2)continue;const l=c.toLowerCase();t.some(h=>h.includes(l)||l.includes(h))||i.some(h=>h===l)||(await ye({id:Date.now().toString()+Math.random().toString(36).slice(2),name:c,qty:1,checked:!1,src:"recipe"}),r++)}r>0&&R(`Added ${r} ingredient${r!==1?"s":""} to shopping list 🛒`)}window._pickedRec=null,Fl(),ei(),Gs(),Ui()}async function sR(){await _n(d.md,null),Fl(),ei(),Gs(),Ui()}function rR(n){const e=d.mp[n];e&&(d.cn=e,d.nr=0,f("cookedNm").textContent=e,f("cnotes").value="",ks("cstars",0),f("cookedM").classList.add("active"))}async function oR(){await Bc(d.cn,ln()),await _n(ln(),null),f("cookedM").classList.remove("active"),ei(),Ui(),R("Meal logged!")}async function aR(){var i;const n=f("cnotes").value.trim(),e=(i=f("tog-leftover"))==null?void 0:i.classList.contains("on");await Bc(d.cn,ln());const t=d.recs.find(s=>s.name.toLowerCase()===d.cn.toLowerCase());t?await Qe({...t,cookCount:(t.cookCount||0)+1,lastCooked:ln()}):await Qe({id:"rec-"+Date.now(),name:d.cn,rating:d.nr,favorited:!1,notes:n,description:"",source:"Meal Plan",tags:[],cookCount:1,savedAt:new Date().toLocaleDateString(),lastCooked:ln()}),e&&await _n(yy(),d.cn+" (leftovers)"),await _n(ln(),null),f("cookedM").classList.remove("active"),ei(),Ui(),R(e?"Saved! Leftovers planned for tomorrow 🥡":"Saved to recipes! ⭐")}function cR(n){f("schedNm").textContent=n;const e=["S","M","T","W","T","F","S"],t=new Date;t.setHours(0,0,0,0),f("schedWk").innerHTML=Pi().map((i,s)=>{const r=i.toISOString().split("T")[0],o=i.getTime()===t.getTime(),c=d.mp[r];return`<div class="wd${o?" today":""}${c?" hm":""}" onclick="schedSet('${r}','${n}')"><div class="wdn">${e[s]}</div><div class="wdd">${i.getDate()}</div>${c?`<div class="wdm">${c.substring(0,8)}…</div>`:""}</div>`}).join(""),f("schedM").classList.add("active")}async function lR(n,e){await _n(n,e),f("schedM").classList.remove("active"),ei(),Ui(),R("Scheduled! 📅")}function uR(){const n=s=>f(s),e=(s,r)=>{const o=n(s);o&&(o.value=r||"")};e("setName",d.cfg.name),e("setAdults",d.cfg.adults),e("setKids",d.cfg.kids),e("setOther",d.cfg.other),e("setCuisines",d.cfg.cuisines),e("setCookTime",d.cfg.cookTime),e("setZipcode",d.cfg.zipcode);const t=(s,r)=>{const o=n(s);o&&o.classList.toggle("on",!!r)};t("tg-nopork",d.cfg.nopork),t("tg-noshellfish",d.cfg.noshellfish),t("tg-vegetarian",d.cfg.vegetarian),t("tg-glutenfree",d.cfg.glutenfree),t("tg-notif",d.cfg.notif);const i=f("notifTimeRow");i&&(i.style.display=d.cfg.notif?"block":"none"),e("setNotifTime",d.cfg.notifTime||"8"),e("setNotifDays",String(d.cfg.notifDays||3)),e("setUsername",d.username),Hl(),Dg(),CR()}async function dR(){d.cfg={...d.cfg,name:f("setName").value.trim(),adults:f("setAdults").value.trim(),kids:f("setKids").value.trim(),nopork:f("tg-nopork").classList.contains("on"),noshellfish:f("tg-noshellfish").classList.contains("on"),vegetarian:f("tg-vegetarian").classList.contains("on"),glutenfree:f("tg-glutenfree").classList.contains("on"),other:f("setOther").value.trim(),cuisines:f("setCuisines").value.trim(),cookTime:f("setCookTime").value,zipcode:f("setZipcode")?f("setZipcode").value.trim():"",notif:f("tg-notif").classList.contains("on"),notifTime:f("setNotifTime")?f("setNotifTime").value:"8",notifDays:parseInt(f("setNotifDays")?f("setNotifDays").value:"3")},await Fs(),d.cfg.notif&&Lg(),R("Settings saved!"),Ee("settings"),gl()}async function hR(){var e,t;const n=((t=(e=f("setZipcode"))==null?void 0:e.value)==null?void 0:t.trim())||"";d.cfg={...d.cfg,zipcode:n},await Fs(),R("Saved!")}async function fR(n){if(!n.classList.contains("on")){if(!("Notification"in window)){R("Notifications not supported on this browser");return}if(Notification.permission==="denied"){R("Notifications blocked — enable in browser settings");return}if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){R("Notifications permission denied");return}}n.classList.toggle("on");const t=f("notifTimeRow");t&&(t.style.display=n.classList.contains("on")?"block":"none")}function pR(){if(Notification.permission!=="granted"){R("Enable notifications first");return}const n=d.inv.filter(t=>{const i=At(t.expiry);return i&&(i.c==="expiring"||i.c==="expired")});if(!n.length){new Notification("Kitchen 🧺",{body:"No items expiring soon — you're all good!"});return}const e=n.slice(0,3).map(t=>t.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${e}${n.length>3?" + "+(n.length-3)+" more":""} need attention`})}function Lg(){if(!d.cfg.notif||Notification.permission!=="granted")return;const n=parseInt(localStorage.getItem("ks-lastnotif")||"0"),e=Date.now();if(e-n<864e5)return;localStorage.setItem("ks-lastnotif",e.toString());const t=d.cfg.notifDays||3,i=d.inv.filter(r=>{if(!At(r.expiry))return!1;const c=new Date(r.expiry+"T00:00:00"),l=new Date;return l.setHours(0,0,0,0),Math.round((c-l)/864e5)<=t});if(!i.length)return;const s=i.slice(0,3).map(r=>r.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${s}${i.length>3?" + "+(i.length-3)+" more":""} expiring in ${t} days or less`})}function Bl(){return ce("ks-hhs")||[d.hid]}async function Dg(){const n=Z();if(n)try{const e=await ne(`households/${d.hid}`);if(!e)return;const t=e.ownerUid===n.uid,i=f("hhInviteCode");if(i&&(i.textContent=e.inviteCode||"—"),e.inviteCode&&t)try{await W(`household_codes/${e.inviteCode}`,{householdId:d.hid})}catch{}const s=f("regenCodeBtn");s&&(s.style.display=t?"":"none");const r=f("hhMembers");r&&e.members&&(r.innerHTML=e.members.map(o=>{const c=o.uid===n.uid,l=o.role==="owner"?"Owner":"Member",h=t&&!c?`<button onclick="event.stopPropagation();removeMemberFromHH('${o.uid}')" style="background:none;border:none;color:var(--rd);cursor:pointer;font-size:.78rem;padding:4px 8px">Remove</button>`:"";return`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px">
          <div>
            <div style="font-size:.86rem;font-weight:500;color:var(--tx)">${o.name}${c?" (you)":""}</div>
            <div style="font-size:.7rem;color:var(--mt);margin-top:2px">${l}</div>
          </div>
          ${h}
        </div>`}).join(""))}catch(e){console.error("renderHouseholdInfo error:",e)}}async function mR(){var e;const n=(e=f("hhInviteCode"))==null?void 0:e.textContent;if(!(!n||n==="—"))try{await navigator.clipboard.writeText(n),R("Invite code copied!")}catch{R("Couldn't copy — try manually")}}async function gR(){var t;const n=(t=f("hhInviteCode"))==null?void 0:t.textContent;if(!n||n==="—")return;const e=`Join my kitchen on Kitchen app! Use invite code: ${n} at https://pantry-app-zeta-six.vercel.app`;if(navigator.share)try{await navigator.share({text:e})}catch{}else try{await navigator.clipboard.writeText(e),R("Share text copied to clipboard!")}catch{R("Couldn't share — try manually")}}async function yR(){if(confirm("Regenerate invite code? The old code will stop working."))try{const n=await Gf(d.hid);if(n){const e=f("hhInviteCode");e&&(e.textContent=n),R("New invite code generated!")}}catch(n){console.error("regenInviteCode error:",n),R("Failed to regenerate code")}}async function vR(n){if(confirm("Remove this member from the household?"))try{await Kf(d.hid,n),R("Member removed"),Dg()}catch(e){console.error("removeMemberFromHH error:",e),R("Failed to remove member")}}async function wR(){var i,s,r;const n=(r=(s=(i=f("newHHCode"))==null?void 0:i.value)==null?void 0:s.trim())==null?void 0:r.toUpperCase();if(!n)return;const e=Z();if(!e){R("Sign in first");return}const t=f("newHHCode");t.disabled=!0;try{const o=await Fc(n,e);if(!o){R("Invalid invite code. Check and try again."),t.disabled=!1;return}const c=Bl();c.includes(o)||c.push(o),Me("ks-hhs",c),f("newHHCode").value="",Hl(),R("Household joined!")}catch(o){console.error("addHousehold error:",o),R("Failed to join household")}t.disabled=!1}function _R(n){n!==d.hid&&(localStorage.setItem("ks-h",n),location.reload())}async function bR(n){if(n===d.hid){R("Can't remove active household");return}const e=Z();if(e)try{const i=await ne(`users/${e.uid}`);if(i){const r=(i.householdIds||[]).filter(o=>o!==n);await W(`users/${e.uid}`,{...i,householdIds:r,id:void 0})}const s=await ne(`households/${n}`);if(s){const r=(s.members||[]).filter(c=>c.uid!==e.uid),o=(s.memberUids||[]).filter(c=>c!==e.uid);await W(`households/${n}`,{...s,members:r,memberUids:o,id:void 0})}}catch(i){console.error("removeHousehold error:",i)}const t=Bl().filter(i=>i!==n);Me("ks-hhs",t),Hl()}async function Hl(){const n=Bl().filter(i=>i!==d.hid),e=f("hhList");if(!e)return;if(!n.length){e.innerHTML='<div style="font-size:.82rem;color:var(--mt);padding:10px 0">No other households yet.</div>';return}const t=[];for(const i of n){let s=i;try{const r=await ne(`households/${i}`);r!=null&&r.name&&(s=r.name)}catch{}t.push({id:i,name:s})}e.innerHTML=t.map(({id:i,name:s})=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px;cursor:pointer" onclick="switchHousehold('${i}')">
      <div>
        <div style="font-size:.88rem;font-weight:500;color:var(--tx)">${s}</div>
        <div style="font-size:.7rem;color:var(--mt);margin-top:2px">Tap to switch</div>
      </div>
      <button onclick="event.stopPropagation();removeHousehold('${i}')" style="background:none;border:none;color:var(--mt);cursor:pointer;font-size:.82rem;padding:4px 8px">✕</button>
    </div>`).join("")}const fo={gold:{name:"Gold",swatch:"#d4a853",dark:{bg:"#0f0f0d",sf:"#1a1a17",card:"#222220",card2:"#2a2a27",b1:"#333330",b2:"#3d3d39",ac:"#d4a853",ac2:"#e8c27a",acr:"212,168,83",tx:"#ede8d8",tx2:"#b8b09a",mt:"#7a7468"},light:{bg:"#faf8f2",sf:"#ffffff",card:"#f3ede0",card2:"#efe8d8",b1:"#ddd5c0",b2:"#cec4ac",ac:"#a8732a",ac2:"#c48f3e",acr:"168,115,42",tx:"#2a2418",tx2:"#5c5040",mt:"#9a8870"}},forest:{name:"Forest",swatch:"#4a9e5c",dark:{bg:"#0a1410",sf:"#111f17",card:"#182a1e",card2:"#1e3326",b1:"#2a4032",b2:"#355040",ac:"#6db56d",ac2:"#8fd08f",acr:"109,181,109",tx:"#e4f0e4",tx2:"#9dbf9d",mt:"#5a7a5a"},light:{bg:"#f2f9f2",sf:"#ffffff",card:"#e8f5e8",card2:"#dff0df",b1:"#c0ddc0",b2:"#a8cca8",ac:"#2e7d32",ac2:"#43a047",acr:"46,125,50",tx:"#0d2010",tx2:"#2e4f2e",mt:"#5a7a5a"}},ocean:{name:"Ocean",swatch:"#38bdf8",dark:{bg:"#060e1a",sf:"#0d1829",card:"#112035",card2:"#162840",b1:"#1e3554",b2:"#264468",ac:"#38bdf8",ac2:"#7dd3fc",acr:"56,189,248",tx:"#e0f2fe",tx2:"#7ab8d4",mt:"#486880"},light:{bg:"#f0f8ff",sf:"#ffffff",card:"#e0f2fe",card2:"#d4ecf9",b1:"#b0d8f0",b2:"#90c4e4",ac:"#0369a1",ac2:"#0284c7",acr:"3,105,161",tx:"#082040",tx2:"#1e4060",mt:"#4a7090"}},bordeaux:{name:"Bordeaux",swatch:"#e8829a",dark:{bg:"#120810",sf:"#1c0e18",card:"#261420",card2:"#301828",b1:"#4a2238",b2:"#5c2a46",ac:"#e8829a",ac2:"#f4aabb",acr:"232,130,154",tx:"#fce8ee",tx2:"#d4909e",mt:"#8a5060"},light:{bg:"#fff5f7",sf:"#ffffff",card:"#ffe8ed",card2:"#ffd8e0",b1:"#f4b8c4",b2:"#eca0b0",ac:"#be3455",ac2:"#d94070",acr:"190,52,85",tx:"#2a080e",tx2:"#6a2030",mt:"#9a5060"}},sand:{name:"Sand",swatch:"#e07a5f",dark:{bg:"#170e08",sf:"#221508",card:"#2e1c0e",card2:"#382414",b1:"#4a3020",b2:"#5c3c28",ac:"#e07a5f",ac2:"#eca080",acr:"224,122,95",tx:"#fdf0e8",tx2:"#c8a090",mt:"#887060"},light:{bg:"#fdf6ec",sf:"#fffbf5",card:"#f5e8d8",card2:"#eedcc8",b1:"#ddc8ac",b2:"#ccb494",ac:"#c1440e",ac2:"#d4602a",acr:"193,68,14",tx:"#2a1808",tx2:"#5c3820",mt:"#9a7060"}},midnight:{name:"Midnight",swatch:"#818cf8",dark:{bg:"#050814",sf:"#0a0d1f",card:"#0f1228",card2:"#141830",b1:"#1e2448",b2:"#272e58",ac:"#818cf8",ac2:"#a5b0ff",acr:"129,140,248",tx:"#e8eaff",tx2:"#9099cc",mt:"#505880"},light:{bg:"#f0f1ff",sf:"#ffffff",card:"#e4e6ff",card2:"#d8dbff",b1:"#b8bdff",b2:"#a0a6f4",ac:"#4f46e5",ac2:"#6366f1",acr:"79,70,229",tx:"#0a0820",tx2:"#202060",mt:"#5050a0"}},lavender:{name:"Lavender",swatch:"#c084fc",dark:{bg:"#0e0814",sf:"#160e20",card:"#1e1430",card2:"#261a3c",b1:"#382454",b2:"#442c66",ac:"#c084fc",ac2:"#d8a8ff",acr:"192,132,252",tx:"#f5ecff",tx2:"#c0a0e0",mt:"#7a5898"},light:{bg:"#faf5ff",sf:"#ffffff",card:"#f3e8ff",card2:"#ecdcff",b1:"#d8b8f8",b2:"#c8a0f0",ac:"#9333ea",ac2:"#a855f7",acr:"147,51,234",tx:"#1a0830",tx2:"#481080",mt:"#805098"}}};let Ls=ce("ks-theme")||"gold",Ds=ce("ks-mode")||"auto";function po(n,e){Ls=n,Ds=e,Me("ks-theme",n),Me("ks-mode",e);const t=fo[n]||fo.gold,s=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?t.dark:t.light,r=document.documentElement.style;r.setProperty("--bg",s.bg),r.setProperty("--sf",s.sf),r.setProperty("--card",s.card),r.setProperty("--card2",s.card2),r.setProperty("--b1",s.b1),r.setProperty("--b2",s.b2),r.setProperty("--ac",s.ac),r.setProperty("--ac2",s.ac2),r.setProperty("--acd","rgba("+s.acr+",.12)"),r.setProperty("--tx",s.tx),r.setProperty("--tx2",s.tx2),r.setProperty("--mt",s.mt),r.setProperty("--gn","#6db56d"),r.setProperty("--gnd","rgba(109,181,109,.12)"),r.setProperty("--rd","#d96b6b"),r.setProperty("--rdd","rgba(217,107,107,.12)"),r.setProperty("--am","#c8960a"),r.setProperty("--amd","rgba(200,150,10,.12)"),Ng(e),Mg(n)}function TR(n){po(Ls,n)}function Ng(n){["auto","light","dark"].forEach(e=>{const t=f("mode-"+e);t&&(t.style.background=e===n?"var(--ac)":"",t.style.color=e===n?"var(--bg)":"",t.style.borderColor=e===n?"var(--ac)":"")})}function Mg(n){const e=f("themePicker");e&&(e.innerHTML="",Object.keys(fo).forEach(t=>{const i=fo[t],s=t===n,r=document.createElement("div");r.title=i.name,r.style.cssText="width:36px;height:36px;border-radius:50%;background:"+i.swatch+";cursor:pointer;border:3px solid "+(s?"var(--tx)":"transparent")+";box-shadow:"+(s?"0 0 0 2px var(--ac)":"none")+";transition:all .2s;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.85rem",r.textContent=s?"✓":"",r.onclick=()=>po(t,Ds),r.onmouseover=function(){this.style.transform="scale(1.15)"},r.onmouseout=function(){this.style.transform="scale(1)"},e.appendChild(r)}))}function IR(){po(Ls,Ds),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{Ds==="auto"&&po(Ls,"auto")})}function ER(){Mg(Ls),Ng(Ds)}async function kR(){const n=f("enrichBtn"),e=f("enrichProgress"),t=f("enrichStatus"),i=f("enrichBar");n&&(n.disabled=!0),e&&(e.style.display="block");const s=d.shop.filter(h=>Nh(h)),r=d.inv.filter(h=>Nh(h)),o=[...s.map(h=>({item:h,list:"shop"})),...r.map(h=>({item:h,list:"inv"}))];if(!o.length){t&&(t.textContent="All items already enriched!"),i&&(i.style.width="100%"),n&&(n.disabled=!1),R("Nothing to enrich — all items already have data.");return}let c=0,l=0;for(let h=0;h<o.length;h++){const{item:m,list:y}=o[h],w=Math.round((h+1)/o.length*100);t&&(t.textContent=`Processing "${m.name}" (${h+1}/${o.length})…`),i&&(i.style.width=w+"%");try{const P=(await(await fetch(`/api/text-search?q=${encodeURIComponent(m.name)}`)).json()).results||[];if(P.length){const $=P[0],U={...m,image:$.image||m.image||null,brand:$.brand||m.brand||"",category:$.category||m.category||"",source:$.source||m.source||"search"};y==="shop"?await ye(U):await re(U),c++}else l++}catch(E){console.warn(`Enrich failed for "${m.name}":`,E),l++}h<o.length-1&&await Og(300)}t&&(t.textContent=`Done! ${c} enriched, ${l} skipped.`),i&&(i.style.width="100%"),n&&(n.disabled=!1),R(`Enrichment complete: ${c} updated, ${l} unchanged.`)}function Nh(n){return!n.name||n.name.length<2||n.imageDismissed?!1:!n.image&&!n.brand}function Og(n){return new Promise(e=>setTimeout(e,n))}async function SR(){if(ce("ks-bulk-published")){R("Already published all recipes");return}if(!confirm(`Publish all ${d.recs.length} recipes to the community? This creates independent copies visible to everyone.`))return;const n=Z(),e=(n==null?void 0:n.displayName)||localStorage.getItem("ks-who")||"Anonymous",t=d.recs.length;let i=0;const s=f("bulkPubProgress");s&&(s.style.display="block",s.textContent=`Publishing 0/${t}…`);const r=f("bulkPubBtn");r&&(r.disabled=!0);let o=0;for(const c of d.recs)try{if(await Hc(c)){o++,s&&(s.textContent=`Published ${i}/${t} (${o} skipped)…`);continue}await Eo(c,e),i++,s&&(s.textContent=`Published ${i}/${t}…`)}catch(l){console.error("Failed to publish:",c.name,l)}Me("ks-bulk-published",!0),R(`Published ${i} of ${t} recipes to community!`),r&&(r.disabled=!0,r.textContent="All recipes published ✓"),s&&(s.textContent=`Done — ${i} recipes published.`)}function CR(){const n=f("bulkPubBtn"),e=f("bulkPubProgress");n&&(ce("ks-bulk-published")?(n.style.display="none",e&&(e.style.display="none")):n.style.display="block")}async function AR(){var l,h,m,y,w;const n=Z();if(!n){R("Sign in first");return}const e=[...d.recs];let t=[];try{t=(await ae("public_recipes")).filter(A=>A.authorUid===n.uid)}catch(E){console.error("Failed to load public recipes:",E)}const i=[...e,...t],s=i.length;if(!s){R("No recipes to process");return}if(!confirm(`Regenerate summaries for ${s} recipes using Claude AI? This will overwrite existing summaries.`))return;const r=f("regenSumProgress"),o=f("regenSumBtn");r&&(r.style.display="block",r.textContent=`Regenerating 0 of ${s}…`),o&&(o.disabled=!0);let c=0;for(let E=0;E<i.length;E++){const A=i[E],P=A.title||A.name||"Untitled",$=((l=A.ingredientsRaw)==null?void 0:l.join(", "))||A.ingredients||A.description||"",U=((h=A.stepsRaw)==null?void 0:h.join(". "))||A.steps||"";try{const D=((w=(y=(m=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:200,messages:[{role:"user",content:`Write a 2-sentence summary for this recipe. First sentence: what the dish is. Second sentence: what makes it special or notable. Max 200 characters total. Be concise.

Title: ${P}
Ingredients: ${$.substring(0,500)}
Instructions: ${U.substring(0,500)}`}]})})).json()).content)==null?void 0:m[0])==null?void 0:y.text)==null?void 0:w.trim())||"";if(D){if(t.some(H=>H.id===A.id))await W(`public_recipes/${A.id}`,{...A,summary:D,id:void 0});else{const H=`households/${d.hid}/recipes/${A.id}`;await W(H,{...A,summary:D,id:void 0});const b=d.recs.find(v=>v.id===A.id);b&&(b.summary=D)}c++}}catch(N){console.error("Summary regen failed for:",P,N)}r&&(r.textContent=`Regenerating ${E+1} of ${s}…`),await Og(300)}r&&(r.textContent=`Done — ${c} summaries updated.`),o&&(o.disabled=!1),R(`${c} summaries regenerated!`)}let cn=0;async function RR(){const n=Z();if(n)try{const e=await ne(`users/${n.uid}`);if(e!=null&&e.onboardingDone)return;xR()}catch{}}function xR(){const n=f("ov-onboarding");n&&(cn=0,n.classList.add("active"),Vg())}function Vg(){const n=f("onboarding-body");if(!n)return;const t=`<div style="display:flex;gap:6px;justify-content:center;margin-bottom:24px">${Array.from({length:4},(i,s)=>`<div style="width:8px;height:8px;border-radius:50%;background:${s===cn?"var(--ac)":"var(--b2)"};transition:background .2s"></div>`).join("")}</div>`;cn===0?n.innerHTML=`${t}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:4rem;margin-bottom:16px">🧺</div>
        <div style="font-family:'Fraunces',serif;font-size:2rem;font-weight:300;color:var(--ac);margin-bottom:12px">Welcome to Kitchen!</div>
        <p style="font-size:.92rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 28px">Your smart kitchen assistant that tracks inventory, plans meals, finds deals, and suggests recipes — all powered by AI.</p>
        <button class="btn bp bf" onclick="onboardNext()">Let's get started →</button>
      </div>`:cn===1?n.innerHTML=`${t}
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;margin-bottom:6px">Set up your kitchen</div>
      <p style="font-size:.82rem;color:var(--mt);margin-bottom:18px;line-height:1.5">These help Claude give you better recipe suggestions.</p>
      <div class="frow"><label class="flbl">Household name</label><input class="fi" id="ob-name" placeholder="e.g. The Smith Family" value="${d.cfg.name||""}"/></div>
      <div class="frow"><label class="flbl">Adults</label><input class="fi" id="ob-adults" placeholder="e.g. Bora, Sarah" value="${d.cfg.adults||""}"/></div>
      <div class="frow"><label class="flbl">Kids</label><input class="fi" id="ob-kids" placeholder="e.g. 1 toddler (age 3)" value="${d.cfg.kids||""}"/></div>
      <div class="frow"><label class="flbl">Favourite cuisines</label><input class="fi" id="ob-cuisines" placeholder="e.g. Italian, Turkish, Mexican" value="${d.cfg.cuisines||""}"/></div>
      <div class="frow"><label class="flbl">Weeknight cook time</label>
        <select class="fsel" id="ob-cooktime">
          <option value="20-30 min"${d.cfg.cookTime==="20-30 min"?" selected":""}>20–30 min</option>
          <option value="30-45 min"${d.cfg.cookTime==="30-45 min"?" selected":""}>30–45 min</option>
          <option value="40-60 min"${d.cfg.cookTime==="40-60 min"?" selected":""}>40–60 min</option>
          <option value="60+ min"${d.cfg.cookTime==="60+ min"?" selected":""}>60+ min</option>
        </select>
      </div>
      <div class="frow"><label class="flbl">Dietary restrictions</label>
        <div style="display:flex;flex-direction:column;gap:10px;margin-top:4px">
          <label style="display:flex;align-items:center;gap:10px;font-size:.88rem;cursor:pointer"><input type="checkbox" id="ob-nopork" ${d.cfg.nopork?"checked":""}/> No pork</label>
          <label style="display:flex;align-items:center;gap:10px;font-size:.88rem;cursor:pointer"><input type="checkbox" id="ob-noshellfish" ${d.cfg.noshellfish?"checked":""}/> No shellfish</label>
          <label style="display:flex;align-items:center;gap:10px;font-size:.88rem;cursor:pointer"><input type="checkbox" id="ob-vegetarian" ${d.cfg.vegetarian?"checked":""}/> Vegetarian</label>
          <label style="display:flex;align-items:center;gap:10px;font-size:.88rem;cursor:pointer"><input type="checkbox" id="ob-glutenfree" ${d.cfg.glutenfree?"checked":""}/> Gluten-free</label>
        </div>
      </div>
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:16px">Continue →</button>`:cn===2?n.innerHTML=`${t}
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;margin-bottom:18px">Quick tour</div>
      <div style="display:flex;flex-direction:column;gap:14px">
        <div style="display:flex;gap:14px;align-items:flex-start;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;padding:16px">
          <div style="font-size:1.6rem;flex-shrink:0">📷</div>
          <div><div style="font-weight:600;margin-bottom:4px">Scan & Track</div><div style="font-size:.82rem;color:var(--tx2);line-height:1.5">Scan barcodes to instantly add items to your pantry. Track quantities and expiry dates.</div></div>
        </div>
        <div style="display:flex;gap:14px;align-items:flex-start;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;padding:16px">
          <div style="font-size:1.6rem;flex-shrink:0">🤖</div>
          <div><div style="font-weight:600;margin-bottom:4px">AI Assistant</div><div style="font-size:.82rem;color:var(--tx2);line-height:1.5">Claude knows your full inventory and suggests recipes based on what you have. It can plan your entire week!</div></div>
        </div>
        <div style="display:flex;gap:14px;align-items:flex-start;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;padding:16px">
          <div style="font-size:1.6rem;flex-shrink:0">🛒</div>
          <div><div style="font-weight:600;margin-bottom:4px">Smart Shopping</div><div style="font-size:.82rem;color:var(--tx2);line-height:1.5">Build shopping lists from meal plans, find local deals, and move purchased items straight into your pantry.</div></div>
        </div>
        <div style="display:flex;gap:14px;align-items:flex-start;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;padding:16px">
          <div style="font-size:1.6rem;flex-shrink:0">👨‍👩‍👧</div>
          <div><div style="font-weight:600;margin-bottom:4px">Household Sync</div><div style="font-size:.82rem;color:var(--tx2);line-height:1.5">Share your kitchen with family members. Changes sync instantly across all devices.</div></div>
        </div>
      </div>
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:20px">Almost done →</button>`:cn===3&&(n.innerHTML=`${t}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:3rem;margin-bottom:16px">🎉</div>
        <div style="font-family:'Fraunces',serif;font-size:1.6rem;font-weight:300;color:var(--ac);margin-bottom:12px">You're all set!</div>
        <p style="font-size:.88rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 24px">Start by adding your first item to the pantry, or ask Claude for dinner ideas.</p>
        <div style="display:flex;flex-direction:column;gap:10px">
          <button class="btn bp bf" onclick="finishOnboarding();showOv('scan')">📷 Scan your first item</button>
          <button class="btn bs bf" onclick="finishOnboarding();showScreen('chat')">✨ Ask Claude for ideas</button>
          <button class="btn bs bf" onclick="finishOnboarding()">🏠 Go to Home</button>
        </div>
      </div>`)}async function PR(){var n,e,t,i,s,r,o,c,l,h,m,y,w;if(cn===1){const E=(e=(n=f("ob-name"))==null?void 0:n.value)==null?void 0:e.trim(),A=(i=(t=f("ob-adults"))==null?void 0:t.value)==null?void 0:i.trim(),P=(r=(s=f("ob-kids"))==null?void 0:s.value)==null?void 0:r.trim(),$=(c=(o=f("ob-cuisines"))==null?void 0:o.value)==null?void 0:c.trim(),U=(l=f("ob-cooktime"))==null?void 0:l.value;E&&(d.cfg.name=E),A&&(d.cfg.adults=A),P&&(d.cfg.kids=P),$&&(d.cfg.cuisines=$),U&&(d.cfg.cookTime=U),d.cfg.nopork=((h=f("ob-nopork"))==null?void 0:h.checked)||!1,d.cfg.noshellfish=((m=f("ob-noshellfish"))==null?void 0:m.checked)||!1,d.cfg.vegetarian=((y=f("ob-vegetarian"))==null?void 0:y.checked)||!1,d.cfg.glutenfree=((w=f("ob-glutenfree"))==null?void 0:w.checked)||!1,await Fs()}cn++,Vg()}async function Ug(){const n=f("ov-onboarding");n&&n.classList.remove("active");const e=Z();if(e)try{const t=await ne(`users/${e.uid}`);t&&await W(`users/${e.uid}`,{...t,onboardingDone:!0,id:void 0})}catch{}}async function $R(){await Ug(),R("You can always adjust settings later ⚙️")}window.getIdToken=zf;j.renderAll=yl;j.renderSum=Gs;j.renderRecs=tt;j.renderShop=Fi;UI(Qs);window.showScreen=function(n){var e,t;document.querySelectorAll(".ov.active").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".screen").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".ni").forEach(i=>i.classList.remove("active")),(e=f("screen-"+n))==null||e.classList.add("active"),(t=f("nav-"+n))==null||t.classList.add("active"),n==="home"&&vl(),n==="inventory"&&Qs(),n==="recipes"&&(d.rt==="community"?Nl():tt()),n==="shopping"&&Fi(),n==="insights"&&TA()};const LR=ot;window.showOv=function(n){LR(n),n==="settings"&&setTimeout(ER,80)};window.hideOv=Ee;window.initHome=gl;window.addLowToShop=GI;window.toggleHomeSection=FI;window.openRecipeMatch=JI;window.showMoreMatches=YI;window.toggleExp=function(){const n=f("exppanel");n.style.display=n.style.display==="none"?"block":"none"};window.openAdj=UE;window.updL=zE;window.adjQ=qE;window.adjQD=WE;window.adjE=GE;window.adjNote=KE;window.setIT=hk;window.addManual=fk;window.valMA=pk;window.chgMQ=mk;window.selML=gk;window.remItem=jE;window.importDoc=yk;window.adjUnit=QE;window.adjLowThresh=JE;window.adjLowThreshD=YE;window.adjDoNotRestock=XE;window.changeInvUnit=ZE;window.changeInvThreshold=ek;window.changeInvThresholdDirect=tk;window.toggleDoNotRestock=ik;window.changeInvLocation=sk;window.changeInvQty=rk;window.changeInvQtyDirect=ok;window.changeInvFrac=ak;window.changeInvThreshFrac=nk;window.changeInvExpiry=ck;window.clearInvExpiry=lk;window.setInvExpiry=uk;window.changeInvNote=dk;window.openInvAddSheet=_k;window.closeInvAddSheet=Ys;window.invAddScan=bk;window.invAddVoice=Tk;window.setInvAddLoc=Ik;window.toggleInvAddNote=Ek;window.qaddInv=kk;window.onInvInput=Sk;window.pickInvInlineResult=Pk;window.toggleInvVoice=Hm;window.openInvItemDetail=Js;window.closeInvItemDetail=Bm;window.deleteInvItemImage=FE;window.triggerInvPhotoUpload=BE;window.handleInvPhotoSelected=HE;window.addInvToShopping=Lk;window.qadd=nE;window.togShop=bE;window.toggleShNote=TE;window.saveShNote=IE;window.openShQty=EE;window.adjShQty=kE;window.saveShQty=Mm;window.togAisle=SE;window.setSHT=CE;window.shareList=AE;window.openAddToKitchen=RE;window.setAtkLoc=xE;window.confirmAddToKitchen=PE;window.buildList=$E;window.toggleVoice=Rm;window.toggleAddNote=iE;window.openShopAddSheet=sE;window.closeShopAddSheet=Ks;window.shopAddScan=rE;window.shopAddVoice=oE;window.closeEnrichSheet=Lm;window.pickEnrichResult=_E;window.onShopInput=aE;window.pickInlineResult=$m;window.openItemDetail=Dm;window.closeItemDetail=hE;window.changeShopUnit=fE;window.changeShopQty=pE;window.changeShopQtyDirect=mE;window.changeShopFrac=gE;window.deleteItemImage=yE;window.triggerProductPhotoUpload=vE;window.handleProductPhotoSelected=wE;window.bpTog=LE;window.bpSelAll=DE;window.bpUpdBtn=function(){};window.bpConfirm=NE;window._bpItems=[];window.searchDeals=ME;window.dealsFromList=OE;window.addDealToList=Vm;window.renderDealsZipBanner=Om;window.clrChk=function(){d.shop.filter(n=>n.checked).forEach(n=>{Nm(n.name),Ni(n.id)})};window.setRT=yC;window.togFav=vC;window.valR=wC;window.importFromUrl=_C;window.setImportMode=bC;window.startBulkImport=EC;window.retryBulkImport=RC;window.saveRec=PC;window.openER=mg;window.updR=LC;window.delER=DC;window.scaleRec=NC;window.whatCanIMake=MC;window.addRecIngToShop=OC;window.setStar=VC;window.togTag=tC;window.recipeTimeChanged=ZS;window.markTotalTimeManual=eC;window.selectDifficulty=ug;window.togglePublic=FC;window.loadCommunity=Nl;window.setComCuisine=eA;window.setComSearch=tA;window.setComSort=nA;window.toggleComTag=iA;window.setComTime=sA;window.setComMinRating=rA;window.openComRecipe=ho;window.likeComRecipe=lA;window.saveComToKitchen=uA;window.addComComment=dA;window.shareComRecipe=hA;window.submitComReview=oA;window.unpublishComRecipe=cA;window.rateComRecipe=bg;window.clearComRating=aA;window.deleteComComment=mA;window.openReportSheet=vA;window.closeReportSheet=Tg;window.submitComReport=wA;window.loadMoreComments=pA;window.openNotifications=_A;window.openComRecipeFromNotif=bA;window.openRecipeView=pg;window.handleRecipeBack=$C;window.triggerCoverUpload=BC;window.handleCoverSelected=HC;window.handleCoverDrop=jC;window.removeCoverPhoto=zC;window.triggerStepPhotoUpload=qC;window.handleStepPhotoSelected=WC;window.removeStepPhoto=GC;window.openPhotoViewer=KC;window.closePhotoViewer=QC;window.photoViewerNav=yg;window.triggerCommentPhotoUpload=YC;window.handleCommentPhotosSelected=XC;window.removeCommentPhoto=ZC;window.setRecSearch=nC;window.setRecSort=iC;window.toggleFilterPanel=sC;window.setRecDifficulty=rC;window.setRecCookTime=oC;window.setRecServes=aC;window.toggleRecProtein=cC;window.toggleRecTag=lC;window.toggleRecTagsExpand=uC;window.clearRecFilters=dC;window.toggleComTagsPanel=fC;window.clearComFilters=pC;window.setViewStar=UC;window.editComRecipe=gA;window.saveComRecipeEdit=yA;window.sendChat=Eg;window.sendPill=AA;window.clrChat=RA;window.ar=kg;window.importChatRecipe=CA;window.stopLiveScanner=Vl;window.resumeScanner=DA;window.openScanForList=NA;window.openScanForInventory=MA;window.addScannedToList=VA;window.toggleScanNote=OA;window.togManual=UA;window.manLookup=FA;window.selRL=Ul;window.valAdd=HA;window.addToInv=jA;window.chgAQ=zA;window.swipeDelItem=GA;window.swipeAddItem=WA;window.swipeRowTap=KA;window.togShopSelect=QA;window.togInvSelect=JA;window.cancelSelect=xi;window.deleteSelected=YA;window.openMealM=eR;window.pickRec=tR;window.closeMealM=Fl;window.saveMeal=iR;window.clrMeal=sR;window.openCooked=rR;window.skipCooked=oR;window.saveCooked=aR;window.scheduleRecipe=cR;window.schedSet=lR;window.closeSchedM=nR;window.initRecChips=Pg;window.toggleChip=ZA;window.filterRecs=$g;window._pickedRec=null;window._activeChips=new Set;window.saveSettings=dR;window.saveZipcode=hR;window.toggleNotif=fR;window.testNotif=pR;window.addHousehold=wR;window.switchHousehold=_R;window.removeHousehold=bR;window.setMode=TR;window.showNotif=R;window.copyInviteCode=mR;window.shareInviteCode=gR;window.regenInviteCode=yR;window.removeMemberFromHH=vR;window.enrichExistingItems=kR;window.bulkPublishAll=SR;window.regenAllSummaries=AR;window.manualRefresh=async function(n){const e=event==null?void 0:event.target;e&&(e.classList.add("spinning"),setTimeout(()=>e.classList.remove("spinning"),600)),he("syncing");try{(n==="shop"||n==="both")&&(d.shop=await ae(`households/${d.hid}/shopping`),Fi()),(n==="inv"||n==="both")&&(d.inv=await ae(`households/${d.hid}/inventory`),Qs(),yl()),he("synced"),R("Refreshed ✓")}catch(t){console.error("manualRefresh error:",t),he("error"),R("Refresh failed")}};window.refreshHomeData=async function(){const n=event==null?void 0:event.target;n&&(n.classList.add("spinning"),setTimeout(()=>n.classList.remove("spinning"),600)),he("syncing");try{const[e,t,i,s]=await Promise.allSettled([ae(`households/${d.hid}/inventory`),ae(`households/${d.hid}/shopping`),ae(`households/${d.hid}/mealplan`),ae(`households/${d.hid}/settings`)]);e.status==="fulfilled"&&(d.inv=e.value),t.status==="fulfilled"&&(d.shop=t.value),i.status==="fulfilled"&&(d.mp={},i.value.forEach(r=>{r.meal&&(d.mp[r.id]=r.meal)})),vl(),Qs(),he("synced"),R("Refreshed ✓")}catch(e){console.error("refreshHomeData error:",e),he("error"),R("Refresh failed")}};window.onboardNext=PR;window.finishOnboarding=Ug;window.skipOnboarding=$R;window.saveUsername=async function(){var o;const n=f("usernameInput"),e=f("usernameStatus"),t=f("saveUsernameBtn"),i=((n==null?void 0:n.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(i)){e&&(e.textContent="3-20 characters, letters, numbers, and underscores only.",e.style.color="var(--rd)",e.style.display="block");return}if(t&&(t.disabled=!0,t.textContent="Checking…"),!await Wc(i)){e&&(e.textContent=`"${i}" is already taken. Try another.`,e.style.color="var(--rd)",e.style.display="block"),t&&(t.disabled=!1,t.textContent="Save");return}const r=Z();r&&(await Gc(r.uid,i),R("Username set to @"+i)),(o=f("usernameM"))==null||o.classList.remove("active"),t&&(t.disabled=!1,t.textContent="Save")};window.changeUsername=async function(){const n=f("setUsername"),e=((n==null?void 0:n.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(e)){R("3-20 chars, letters/numbers/underscores only");return}if(e===d.username){R("Username unchanged");return}if(!await Wc(e)){R(`"${e}" is already taken`);return}const i=Z();i&&(await Gc(i.uid,e),R("Username changed to @"+e))};window._appStart=async function(n){var t;d.hid=n,f("LS").style.display="none",f("APP").style.display="flex",window.showScreen("home"),he("syncing");const e=Z();if(e)try{const i=await ne(`users/${e.uid}`);if((t=i==null?void 0:i.householdIds)!=null&&t.length){const s=[...i.householdIds];s.includes(n)||s.push(n),Me("ks-hhs",s)}else{const s=ce("ks-hhs")||[n];s.includes(n)||(s.push(n),Me("ks-hhs",s))}}catch{const i=ce("ks-hhs")||[n];i.includes(n)||(i.push(n),Me("ks-hhs",i))}else{const i=ce("ks-hhs")||[n];i.includes(n)||(i.push(n),Me("ks-hhs",i))}await Yf(),uR(),gl(),tE(),$k(),VI(d.hid);try{he("syncing");const i=await Promise.allSettled([ae(`households/${d.hid}/inventory`),ae(`households/${d.hid}/recipes`),ae(`households/${d.hid}/shopping`)]),s=(r,o)=>r.status==="fulfilled"?r.value:o;d.inv=s(i[0],d.inv),d.recs=s(i[1],d.recs),d.shop=s(i[2],d.shop),he("synced"),yl(),tt(),Fi(),Gs()}catch(i){console.error("initial load error",i),he("error")}if(e){const i=await sp(e.uid);d.username=i;const s=f("setUsername");s&&(s.value=i||""),i||setTimeout(()=>{var r;return(r=f("usernameM"))==null?void 0:r.classList.add("active")},600)}setTimeout(Ig,800),setTimeout(RR,500)};IR();qA();d.cfg.notif&&setTimeout(Lg,3e3);Fi();function Bo(n){f("auth-loading").style.display="none",f("auth-signin").style.display=n==="signin"?"flex":"none",f("auth-signup").style.display=n==="signup"?"flex":"none",f("auth-join").style.display=n==="join"?"flex":"none",f("authError").style.display="none",f("signupError").style.display="none"}function lt(n,e){const t=f(n);t&&(t.textContent=e,t.style.display="block")}function Ho(n){return{"auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password.","auth/invalid-credential":"Incorrect email or password.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password must be at least 6 characters.","auth/too-many-requests":"Too many attempts. Please try again later.","auth/popup-closed-by-user":"Sign-in popup was closed.","auth/cancelled-popup-request":"Sign-in was cancelled.","auth/account-exists-with-different-credential":"An account already exists with this email using a different sign-in method."}[n.code]||n.message||"Something went wrong. Please try again."}function Xe(n,e){n&&(e?(n._origText=n.textContent,n.textContent="Please wait…",n.disabled=!0):(n.textContent=n._origText||n.textContent,n.disabled=!1))}var Mh;(Mh=f("btnGoogle"))==null||Mh.addEventListener("click",async()=>{const n=f("btnGoogle");Xe(n,!0),f("authError").style.display="none";try{await Ib()}catch(e){lt("authError",Ho(e))}Xe(n,!1)});var Oh;(Oh=f("btnApple"))==null||Oh.addEventListener("click",async()=>{const n=f("btnApple");Xe(n,!0),f("authError").style.display="none";try{await Eb()}catch(e){lt("authError",Ho(e))}Xe(n,!1)});var Vh;(Vh=f("btnEmailSign"))==null||Vh.addEventListener("click",async()=>{var i,s,r;const n=(s=(i=f("authEmail"))==null?void 0:i.value)==null?void 0:s.trim(),e=(r=f("authPass"))==null?void 0:r.value;if(!n||!e){lt("authError","Please enter your email and password.");return}const t=f("btnEmailSign");Xe(t,!0),f("authError").style.display="none";try{await kb(n,e)}catch(o){lt("authError",Ho(o))}Xe(t,!1)});var Uh;(Uh=f("btnEmailSignup"))==null||Uh.addEventListener("click",async()=>{var s,r,o,c,l;const n=(r=(s=f("signupName"))==null?void 0:s.value)==null?void 0:r.trim(),e=(c=(o=f("signupEmail"))==null?void 0:o.value)==null?void 0:c.trim(),t=(l=f("signupPass"))==null?void 0:l.value;if(!n){lt("signupError","Please enter your name.");return}if(!e||!t){lt("signupError","Please enter your email and password.");return}const i=f("btnEmailSignup");Xe(i,!0),f("signupError").style.display="none";try{await Sb(e,t,n)}catch(h){lt("signupError",Ho(h))}Xe(i,!1)});var Fh;(Fh=f("btnToggleSignup"))==null||Fh.addEventListener("click",()=>Bo("signup"));var Bh;(Bh=f("btnToggleSignin"))==null||Bh.addEventListener("click",()=>Bo("signin"));var Hh;(Hh=f("authPass"))==null||Hh.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=f("btnEmailSign"))==null||e.click())});var jh;(jh=f("signupPass"))==null||jh.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=f("btnEmailSignup"))==null||e.click())});window.doSignOut=async function(){confirm("Sign out of Kitchen?")&&await Cb()};let Na=!1;function mo(n){localStorage.setItem("ks-h",n),f("LS").style.display="none",f("APP").style.display="flex",window._appStart(n)}function DR(n){Bo("join"),f("btnCreateKitchen").onclick=async()=>{var e;Xe(f("btnCreateKitchen"),!0);try{const t=((e=d.cfg)==null?void 0:e.name)||"My Kitchen";await Uc(n.uid,t);const i=await no(n);i.householdIds=[n.uid],await W(`users/${n.uid}`,i),localStorage.removeItem("ks-h");const s=ce("ks-hhs");if(s){const r=s.filter(o=>o!==n.uid);r.push(n.uid),localStorage.setItem("ks-hhs",JSON.stringify(r))}mo(n.uid)}catch(t){console.error("Create kitchen error:",t),lt("joinError","Something went wrong. Please try again."),Xe(f("btnCreateKitchen"),!1)}},f("btnJoinKitchen").onclick=async()=>{var t,i,s;const e=(s=(i=(t=f("joinCode"))==null?void 0:t.value)==null?void 0:i.trim())==null?void 0:s.toUpperCase();if(!e){lt("joinError","Please enter an invite code.");return}Xe(f("btnJoinKitchen"),!0),f("joinError").style.display="none";try{let r=await ne(`users/${n.uid}`);r||(r=await no(n));const o=await Fc(e,n);if(!o){lt("joinError","Invalid invite code. Check and try again."),Xe(f("btnJoinKitchen"),!1);return}const c=ce("ks-hhs")||[];c.includes(o)||c.push(o),Me("ks-hhs",c),mo(o)}catch(r){console.error("Join kitchen error:",r),lt("joinError","Something went wrong. Please try again."),Xe(f("btnJoinKitchen"),!1)}}}bb(async n=>{var e;if(n){if(localStorage.setItem("ks-who",n.displayName||((e=n.email)==null?void 0:e.split("@")[0])||"You"),!Na){Na=!0;try{const t=await ne(`users/${n.uid}`),i=localStorage.getItem("ks-h"),s=ce("ks-hhs");if(!!t||!!i||s&&s.length>0){f("LS").style.display="none",f("APP").style.display="flex";const o=await Qf(n);mo(o)}else DR(n)}catch(t){console.error("Failed to resolve household:",t);const i=n.uid;mo(i)}}}else Im(),Na=!1,f("APP").style.display="none",f("LS").style.display="flex",Bo("signin")});
