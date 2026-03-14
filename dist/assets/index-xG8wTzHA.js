(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const to={name:"The Bora Family",adults:"Bora",kids:"1 toddler (age 3)",nopork:!0,noshellfish:!1,vegetarian:!1,glutenfree:!1,other:"",cuisines:"Bangladeshi, Turkish, Mediterranean, American",cookTime:"40-60 min",zipcode:""},d={hid:null,inv:[],recs:[],shop:[],mp:{},cfg:{...to},cookLog:[],wasteLog:[],activity:[],chat:[],cp:null,selR:"fridge",maL:"fridge",adjId:null,it:"all",rt:"all",recSearch:"",recSort:"az",recFilters:{tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[]},md:null,cn:"",nr:0,eid:null,scanDestList:!1,aisleMode:!1,selectMode:null,selectedIds:new Set,username:null,comRecs:[],comTab:"browse",comSearch:"",comCuisine:"all",comSort:"newest",comTags:[],comTime:"any",comMinRating:0,comPage:0,myLikes:new Set};function le(n){try{return JSON.parse(localStorage.getItem(n))}catch{return null}}function Oe(n,e){localStorage.setItem(n,JSON.stringify(e))}const Nc=[{value:0,label:"None"},{value:.25,label:"¼"},{value:1/3,label:"⅓"},{value:.5,label:"½"},{value:2/3,label:"⅔"},{value:.75,label:"¾"}];function no(n){const e=Number(n)||0,t=Math.floor(e),i=e-t,s=Nc.reduce((r,o)=>Math.abs(o.value-i)<Math.abs(r-i)?o.value:r,0);return{whole:t,frac:s}}function bn(n,e){const t=Math.max(0,Math.min(99,Math.floor(Number(n)||0))),i=Number(e)||0,s=t+i;return s<=0?.25:s}function So(n){const{whole:e,frac:t}=no(n),i=t>0?(Nc.find(s=>Math.abs(s.value-t)<.01)||{}).label:"";return e===0&&i?i:e>0&&i?`${e} ${i}`:`${e||1}`}function ki(n,e){return`${So(n)} ${e||"Unit"}`}function Ka(n,e){const t=Nc.map(i=>{const s=Math.abs(i.value-e)<.01?" selected":"";return`<option value="${i.value}"${s}>${i.label}</option>`}).join("");return`<select class="frac-select" id="${n}">${t}</select>`}function Ae(n){return n?n.replace(/\w\S*/g,e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()):""}function f(n){return document.getElementById(n)}function hn(){return new Date().toISOString().split("T")[0]}function Mi(){const n=new Date;n.setHours(0,0,0,0);const e=new Date(n);return e.setDate(n.getDate()-n.getDay()),Array.from({length:7},(t,i)=>{const s=new Date(e);return s.setDate(e.getDate()+i),s})}function Hy(){const n=new Date;return n.setDate(n.getDate()+1),n.toISOString().split("T")[0]}function Pt(n){if(!n)return null;const e=new Date;e.setHours(0,0,0,0);const t=new Date(n+"T00:00:00"),i=Math.round((t-e)/864e5);return i<0?{c:"expired",l:"Expired"}:i===0?{c:"expiring",l:"Expires today"}:i<=7?{c:"expiring",l:`Expires in ${i}d`}:{c:"ok",l:t.toLocaleDateString("en-US",{month:"short",day:"numeric"})}}function hf(n){return{fridge:"🌡 Fridge",freezer:"🧊 Freezer",pantry:"🥫 Pantry",household:"🏠 Household"}[n]||n}const ff={Produce:"🥦",Proteins:"🍗",Dairy:"🧀",Grains:"🌾",Condiments:"🧴",Snacks:"🍿",Beverages:"🥤",Frozen:"❄️",General:"📦",Imported:"📥"};function Oi(n){const e=(n.name||"").toLowerCase(),t=(n.category||"").toLowerCase();return t.includes("produce")||t.includes("vegetable")||t.includes("fruit")||e.match(/apple|banana|broccoli|carrot|celery|cabbage|tomato|onion|garlic|jalap|spinach|mushroom|squash|lettuce|cucumber|pepper/)?"Produce":t.includes("protein")||t.includes("meat")||t.includes("seafood")||t.includes("poultry")||e.match(/chicken|beef|lamb|turkey|salmon|cod|tuna|fish|steak|pork|shrimp/)?"Proteins":t.includes("dairy")||t.includes("egg")||e.match(/egg|butter|cheese|milk|cream|yogurt|ghee/)?"Dairy":t.includes("grain")||t.includes("bread")||t.includes("pasta")||e.match(/rice|pasta|bread|flour|oat|cereal|grain|noodle|tortilla/)?"Grains":t.includes("condiment")||t.includes("sauce")||e.match(/sauce|ketchup|mustard|oil|vinegar|salt|pepper|spice|herb|seasoning|mayo/)?"Condiments":n.location==="freezer"?"Frozen":"General"}function By(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/^[-•]\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/\n/g,"<br>")}let Ea=null;function S(n){const e=f("notif");e&&(e.textContent=n,e.style.display="block",e.style.animation="none",e.offsetWidth,e.style.animation="fn 2.5s ease forwards",Ea&&clearTimeout(Ea),Ea=setTimeout(()=>e.style.display="none",2500))}function ct(n){var e;(e=f("ov-"+n))==null||e.classList.add("active")}function ke(n){var e;(e=f("ov-"+n))==null||e.classList.remove("active")}function Ps(n,e){const t=f(n);t&&t.querySelectorAll(".star").forEach((i,s)=>{i.textContent=s<e?"★":"☆",i.classList.toggle("on",s<e)})}function Mc(n){const e=n.toLowerCase();return/frozen|ice cream|pizza|nugget|waffle|tater|edamame|popsicle/.test(e)?"freezer":/milk|cheese|yogurt|butter|cream|egg|meat|chicken|beef|pork|fish|salmon|shrimp|tofu|deli|bacon|sausage|produce|lettuce|spinach|berry|berries|fruit|vegetable|carrot|broccoli|juice/.test(e)?"fridge":"pantry"}const jy={Produce:["apple","banana","carrot","celery","onion","garlic","tomato","lettuce","cucumber","pepper","broccoli","spinach","mushroom","lemon","lime","herb","cabbage","squash","jalap","avocado","potato","ginger"],"Meat & Fish":["chicken","beef","lamb","turkey","salmon","cod","tuna","fish","steak","shrimp","pork","bacon","sausage","ground"],"Dairy & Eggs":["egg","butter","cheese","milk","cream","yogurt","ghee","kefir"],Frozen:["frozen","ice cream","pizza","nugget","waffle","edamame","okra","lima","broccoli floret"],Pantry:["rice","pasta","flour","oil","vinegar","sauce","spice","salt","pepper","sugar","honey","oat","bread","can","bean","lentil","chickpea","stock","broth"],"Snacks & Drinks":["chip","cracker","cookie","juice","soda","water","tea","coffee","snack","nut","seed"]};function zy(n){const e=n.toLowerCase();for(const[t,i]of Object.entries(jy))if(i.some(s=>e.includes(s)))return t;return"Other"}const qy=()=>{};var dd={};/**
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
 */const pf=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Wy=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|c&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},mf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,u=l?n[s+2]:0,p=r>>2,g=(r&3)<<4|c>>4;let w=(c&15)<<2|u>>6,I=u&63;l||(I=64,o||(w=64)),i.push(t[p],t[g],t[w],t[I])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(pf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Wy(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||c==null||u==null||g==null)throw new Gy;const w=r<<2|c>>4;if(i.push(w),u!==64){const I=c<<4&240|u>>2;if(i.push(I),g!==64){const C=u<<6&192|g;i.push(C)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Gy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ky=function(n){const e=pf(n);return mf.encodeByteArray(e,!0)},io=function(n){return Ky(n).replace(/\./g,"")},gf=function(n){try{return mf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Qy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Yy=()=>Qy().__FIREBASE_DEFAULTS__,Jy=()=>{if(typeof process>"u"||typeof dd>"u")return;const n=dd.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Xy=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&gf(n[1]);return e&&JSON.parse(e)},Co=()=>{try{return qy()||Yy()||Jy()||Xy()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},yf=n=>{var e,t;return(t=(e=Co())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},vf=n=>{const e=yf(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},wf=()=>{var n;return(n=Co())==null?void 0:n.config},_f=n=>{var e;return(e=Co())==null?void 0:e[`_${n}`]};/**
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
 */class Zy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function xn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Oc(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function bf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[io(JSON.stringify(t)),io(JSON.stringify(o)),""].join(".")}const _s={};function ev(){const n={prod:[],emulator:[]};for(const e of Object.keys(_s))_s[e]?n.emulator.push(e):n.prod.push(e);return n}function tv(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let hd=!1;function Vc(n,e){if(typeof window>"u"||typeof document>"u"||!xn(window.location.host)||_s[n]===e||_s[n]||hd)return;_s[n]=e;function t(w){return`__firebase__banner__${w}`}const i="__firebase__banner",r=ev().prod.length>0;function o(){const w=document.getElementById(i);w&&w.remove()}function c(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function l(w,I){w.setAttribute("width","24"),w.setAttribute("id",I),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function u(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{hd=!0,o()},w}function p(w,I){w.setAttribute("id",I),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function g(){const w=tv(i),I=t("text"),C=document.getElementById(I)||document.createElement("span"),P=t("learnmore"),$=document.getElementById(P)||document.createElement("a"),U=t("preprendIcon"),N=document.getElementById(U)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const M=w.element;c(M),p($,P);const D=u();l(N,U),M.append(N,C,$,D),document.body.appendChild(M)}r?(C.innerText="Preview backend disconnected.",N.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
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
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function iv(){var e;const n=(e=Co())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function sv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ov(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function av(){const n=ze();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function cv(){return!iv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lv(){try{return typeof indexedDB=="object"}catch{return!1}}function uv(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const dv="FirebaseError";class Dt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=dv,Object.setPrototypeOf(this,Dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hs.prototype.create)}}class Hs{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?hv(r,i):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Dt(s,c,i)}}function hv(n,e){return n.replace(fv,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const fv=/\{\$([^}]+)}/g;function pv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Kn(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(fd(r)&&fd(o)){if(!Kn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function fd(n){return n!==null&&typeof n=="object"}/**
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
 */function Bs(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function fs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function ps(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function mv(n,e){const t=new gv(n,e);return t.subscribe.bind(t)}class gv{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");yv(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=ka),s.error===void 0&&(s.error=ka),s.complete===void 0&&(s.complete=ka);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yv(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ka(){}/**
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
 */function Ne(n){return n&&n._delegate?n._delegate:n}class Tn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vn="[DEFAULT]";/**
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
 */class vv{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Zy;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_v(e))try{this.getOrInitializeService({instanceIdentifier:Vn})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Vn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vn){return this.instances.has(e)}getOptions(e=Vn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(r);i===c&&o.resolve(s)}return s}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:wv(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Vn){return this.component?this.component.multipleInstances?e:Vn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wv(n){return n===Vn?void 0:n}function _v(n){return n.instantiationMode==="EAGER"}/**
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
 */class bv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new vv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ee||(ee={}));const Tv={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Iv=ee.INFO,Ev={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},kv=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Ev[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Uc{constructor(e){this.name=e,this._logLevel=Iv,this._logHandler=kv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Tv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Sv=(n,e)=>e.some(t=>n instanceof t);let pd,md;function Cv(){return pd||(pd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Rv(){return md||(md=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tf=new WeakMap,Qa=new WeakMap,If=new WeakMap,Sa=new WeakMap,Fc=new WeakMap;function Av(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(mn(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Tf.set(t,n)}).catch(()=>{}),Fc.set(e,n),e}function xv(n){if(Qa.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Qa.set(n,e)}let Ya={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Qa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||If.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Pv(n){Ya=n(Ya)}function $v(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Ca(this),e,...t);return If.set(i,e.sort?e.sort():[e]),mn(i)}:Rv().includes(n)?function(...e){return n.apply(Ca(this),e),mn(Tf.get(this))}:function(...e){return mn(n.apply(Ca(this),e))}}function Lv(n){return typeof n=="function"?$v(n):(n instanceof IDBTransaction&&xv(n),Sv(n,Cv())?new Proxy(n,Ya):n)}function mn(n){if(n instanceof IDBRequest)return Av(n);if(Sa.has(n))return Sa.get(n);const e=Lv(n);return e!==n&&(Sa.set(n,e),Fc.set(e,n)),e}const Ca=n=>Fc.get(n);function Dv(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),c=mn(o);return i&&o.addEventListener("upgradeneeded",l=>{i(mn(o.result),l.oldVersion,l.newVersion,mn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const Nv=["get","getKey","getAll","getAllKeys","count"],Mv=["put","add","delete","clear"],Ra=new Map;function gd(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ra.get(e))return Ra.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Mv.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Nv.includes(t)))return;const r=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return i&&(u=u.index(c.shift())),(await Promise.all([u[t](...c),s&&l.done]))[0]};return Ra.set(e,r),r}Pv(n=>({...n,get:(e,t,i)=>gd(e,t)||n.get(e,t,i),has:(e,t)=>!!gd(e,t)||n.has(e,t)}));/**
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
 */class Ov{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Vv(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Vv(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ja="@firebase/app",yd="0.14.9";/**
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
 */const Bt=new Uc("@firebase/app"),Uv="@firebase/app-compat",Fv="@firebase/analytics-compat",Hv="@firebase/analytics",Bv="@firebase/app-check-compat",jv="@firebase/app-check",zv="@firebase/auth",qv="@firebase/auth-compat",Wv="@firebase/database",Gv="@firebase/data-connect",Kv="@firebase/database-compat",Qv="@firebase/functions",Yv="@firebase/functions-compat",Jv="@firebase/installations",Xv="@firebase/installations-compat",Zv="@firebase/messaging",ew="@firebase/messaging-compat",tw="@firebase/performance",nw="@firebase/performance-compat",iw="@firebase/remote-config",sw="@firebase/remote-config-compat",rw="@firebase/storage",ow="@firebase/storage-compat",aw="@firebase/firestore",cw="@firebase/ai",lw="@firebase/firestore-compat",uw="firebase",dw="12.10.0";/**
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
 */const Xa="[DEFAULT]",hw={[Ja]:"fire-core",[Uv]:"fire-core-compat",[Hv]:"fire-analytics",[Fv]:"fire-analytics-compat",[jv]:"fire-app-check",[Bv]:"fire-app-check-compat",[zv]:"fire-auth",[qv]:"fire-auth-compat",[Wv]:"fire-rtdb",[Gv]:"fire-data-connect",[Kv]:"fire-rtdb-compat",[Qv]:"fire-fn",[Yv]:"fire-fn-compat",[Jv]:"fire-iid",[Xv]:"fire-iid-compat",[Zv]:"fire-fcm",[ew]:"fire-fcm-compat",[tw]:"fire-perf",[nw]:"fire-perf-compat",[iw]:"fire-rc",[sw]:"fire-rc-compat",[rw]:"fire-gcs",[ow]:"fire-gcs-compat",[aw]:"fire-fst",[lw]:"fire-fst-compat",[cw]:"fire-vertex","fire-js":"fire-js",[uw]:"fire-js-all"};/**
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
 */const so=new Map,fw=new Map,Za=new Map;function vd(n,e){try{n.container.addComponent(e)}catch(t){Bt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Qn(n){const e=n.name;if(Za.has(e))return Bt.debug(`There were multiple attempts to register component ${e}.`),!1;Za.set(e,n);for(const t of so.values())vd(t,n);for(const t of fw.values())vd(t,n);return!0}function Ro(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ke(n){return n==null?!1:n.settings!==void 0}/**
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
 */const pw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gn=new Hs("app","Firebase",pw);/**
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
 */class mw{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gn.create("app-deleted",{appName:this._name})}}/**
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
 */const ei=dw;function Ef(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:Xa,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw gn.create("bad-app-name",{appName:String(s)});if(t||(t=wf()),!t)throw gn.create("no-options");const r=so.get(s);if(r){if(Kn(t,r.options)&&Kn(i,r.config))return r;throw gn.create("duplicate-app",{appName:s})}const o=new bv(s);for(const l of Za.values())o.addComponent(l);const c=new mw(t,i,o);return so.set(s,c),c}function Hc(n=Xa){const e=so.get(n);if(!e&&n===Xa&&wf())return Ef();if(!e)throw gn.create("no-app",{appName:n});return e}function St(n,e,t){let i=hw[n]??n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),r=e.match(/\s|\//);if(s||r){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bt.warn(o.join(" "));return}Qn(new Tn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const gw="firebase-heartbeat-database",yw=1,$s="firebase-heartbeat-store";let Aa=null;function kf(){return Aa||(Aa=Dv(gw,yw,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore($s)}catch(t){console.warn(t)}}}}).catch(n=>{throw gn.create("idb-open",{originalErrorMessage:n.message})})),Aa}async function vw(n){try{const t=(await kf()).transaction($s),i=await t.objectStore($s).get(Sf(n));return await t.done,i}catch(e){if(e instanceof Dt)Bt.warn(e.message);else{const t=gn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Bt.warn(t.message)}}}async function wd(n,e){try{const i=(await kf()).transaction($s,"readwrite");await i.objectStore($s).put(e,Sf(n)),await i.done}catch(t){if(t instanceof Dt)Bt.warn(t.message);else{const i=gn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Bt.warn(i.message)}}}function Sf(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ww=1024,_w=30;class bw{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Iw(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=_d();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>_w){const o=Ew(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Bt.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=_d(),{heartbeatsToSend:i,unsentEntries:s}=Tw(this._heartbeatsCache.heartbeats),r=io(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Bt.warn(t),""}}}function _d(){return new Date().toISOString().substring(0,10)}function Tw(n,e=ww){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),bd(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),bd(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Iw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lv()?uv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await vw(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return wd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return wd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function bd(n){return io(JSON.stringify({version:2,heartbeats:n})).length}function Ew(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function kw(n){Qn(new Tn("platform-logger",e=>new Ov(e),"PRIVATE")),Qn(new Tn("heartbeat",e=>new bw(e),"PRIVATE")),St(Ja,yd,n),St(Ja,yd,"esm2020"),St("fire-js","")}kw("");var Sw="firebase",Cw="12.10.0";/**
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
 */St(Sw,Cw,"app");function Cf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rw=Cf,Rf=new Hs("auth","Firebase",Cf());/**
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
 */const ro=new Uc("@firebase/auth");function Aw(n,...e){ro.logLevel<=ee.WARN&&ro.warn(`Auth (${ei}): ${n}`,...e)}function Or(n,...e){ro.logLevel<=ee.ERROR&&ro.error(`Auth (${ei}): ${n}`,...e)}/**
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
 */function ot(n,...e){throw jc(n,...e)}function ht(n,...e){return jc(n,...e)}function Bc(n,e,t){const i={...Rw(),[e]:t};return new Hs("auth","Firebase",i).create(e,{appName:n.name})}function Ct(n){return Bc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Af(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&ot(n,"argument-error"),Bc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jc(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Rf.create(n,...e)}function W(n,e,...t){if(!n)throw jc(e,...t)}function Ut(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Or(e),new Error(e)}function jt(n,e){n||Ut(e)}/**
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
 */function ec(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function xw(){return Td()==="http:"||Td()==="https:"}function Td(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function Pw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xw()||rv()||"connection"in navigator)?navigator.onLine:!0}function $w(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class js{constructor(e,t){this.shortDelay=e,this.longDelay=t,jt(t>e,"Short delay should be less than long delay!"),this.isMobile=nv()||ov()}get(){return Pw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zc(n,e){jt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class xf{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Lw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Dw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Nw=new js(3e4,6e4);function Pn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Wt(n,e,t,i,s={}){return Pf(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const c=Bs({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u={method:e,headers:l,...r};return sv()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&xn(n.emulatorConfig.host)&&(u.credentials="include"),xf.fetch()(await $f(n,n.config.apiHost,t,c),u)})}async function Pf(n,e,t){n._canInitEmulator=!1;const i={...Lw,...e};try{const s=new Ow(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ir(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const c=r.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ir(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ir(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ir(n,"user-disabled",o);const p=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Bc(n,p,u);ot(n,p)}}catch(s){if(s instanceof Dt)throw s;ot(n,"network-request-failed",{message:String(s)})}}async function zs(n,e,t,i,s={}){const r=await Wt(n,e,t,i,s);return"mfaPendingCredential"in r&&ot(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function $f(n,e,t,i){const s=`${e}${t}?${i}`,r=n,o=r.config.emulator?zc(n.config,s):`${n.config.apiScheme}://${s}`;return Dw.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function Mw(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ow{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(ht(this.auth,"network-request-failed")),Nw.get())})}}function Ir(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=ht(n,e,i);return s.customData._tokenResponse=t,s}function Id(n){return n!==void 0&&n.enterprise!==void 0}class Vw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Mw(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Uw(n,e){return Wt(n,"GET","/v2/recaptchaConfig",Pn(n,e))}/**
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
 */async function Fw(n,e){return Wt(n,"POST","/v1/accounts:delete",e)}async function oo(n,e){return Wt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function bs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Hw(n,e=!1){const t=Ne(n),i=await t.getIdToken(e),s=qc(i);W(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:bs(xa(s.auth_time)),issuedAtTime:bs(xa(s.iat)),expirationTime:bs(xa(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function xa(n){return Number(n)*1e3}function qc(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Or("JWT malformed, contained fewer than 3 sections"),null;try{const s=gf(t);return s?JSON.parse(s):(Or("Failed to decode base64 JWT payload"),null)}catch(s){return Or("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ed(n){const e=qc(n);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Si(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Dt&&Bw(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Bw({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class jw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class tc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=bs(this.lastLoginAt),this.creationTime=bs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ao(n){var g;const e=n.auth,t=await n.getIdToken(),i=await Si(n,oo(e,{idToken:t}));W(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const r=(g=s.providerUserInfo)!=null&&g.length?Lf(s.providerUserInfo):[],o=qw(n.providerData,r),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),u=c?l:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new tc(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,p)}async function zw(n){const e=Ne(n);await ao(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qw(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Lf(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Ww(n,e){const t=await Pf(n,{},async()=>{const i=Bs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=await $f(n,s,"/v1/token",`key=${r}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:i};return n.emulatorConfig&&xn(n.emulatorConfig.host)&&(l.credentials="include"),xf.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Gw(n,e){return Wt(n,"POST","/v2/accounts:revokeToken",Pn(n,e))}/**
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
 */class fi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ed(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){W(e.length!==0,"internal-error");const t=Ed(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Ww(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new fi;return i&&(W(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(W(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(W(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fi,this.toJSON())}_performRefresh(){return Ut("not implemented")}}/**
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
 */function Zt(n,e){W(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ut{constructor({uid:e,auth:t,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new jw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new tc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Si(this,this.stsTokenManager.getToken(this.auth,e));return W(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Hw(this,e)}reload(){return zw(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ut({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await ao(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ke(this.auth.app))return Promise.reject(Ct(this.auth));const e=await this.getIdToken();return await Si(this,Fw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,s=t.email??void 0,r=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,u=t.createdAt??void 0,p=t.lastLoginAt??void 0,{uid:g,emailVerified:w,isAnonymous:I,providerData:C,stsTokenManager:P}=t;W(g&&P,e,"internal-error");const $=fi.fromJSON(this.name,P);W(typeof g=="string",e,"internal-error"),Zt(i,e.name),Zt(s,e.name),W(typeof w=="boolean",e,"internal-error"),W(typeof I=="boolean",e,"internal-error"),Zt(r,e.name),Zt(o,e.name),Zt(c,e.name),Zt(l,e.name),Zt(u,e.name),Zt(p,e.name);const U=new ut({uid:g,auth:e,email:s,emailVerified:w,displayName:i,isAnonymous:I,photoURL:o,phoneNumber:r,tenantId:c,stsTokenManager:$,createdAt:u,lastLoginAt:p});return C&&Array.isArray(C)&&(U.providerData=C.map(N=>({...N}))),l&&(U._redirectEventId=l),U}static async _fromIdTokenResponse(e,t,i=!1){const s=new fi;s.updateFromServerResponse(t);const r=new ut({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await ao(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];W(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Lf(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),c=new fi;c.updateFromIdToken(i);const l=new ut({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new tc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,u),l}}/**
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
 */const kd=new Map;function Ft(n){jt(n instanceof Function,"Expected a class definition");let e=kd.get(n);return e?(jt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,kd.set(n,e),e)}/**
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
 */class Df{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Df.type="NONE";const Sd=Df;/**
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
 */function Vr(n,e,t){return`firebase:${n}:${e}:${t}`}class pi{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Vr(this.userKey,s.apiKey,r),this.fullPersistenceKey=Vr("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await oo(this.auth,{idToken:e}).catch(()=>{});return t?ut._fromGetAccountInfoResponse(this.auth,t,e):null}return ut._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new pi(Ft(Sd),e,i);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=s[0]||Ft(Sd);const o=Vr(i,e.config.apiKey,e.name);let c=null;for(const u of t)try{const p=await u._get(o);if(p){let g;if(typeof p=="string"){const w=await oo(e,{idToken:p}).catch(()=>{});if(!w)break;g=await ut._fromGetAccountInfoResponse(e,w,p)}else g=ut._fromJSON(e,p);u!==r&&(c=g),r=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new pi(r,e,i):(r=l[0],c&&await r._set(o,c.toJSON()),await Promise.all(t.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new pi(r,e,i))}}/**
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
 */function Cd(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ff(e))return"Blackberry";if(Hf(e))return"Webos";if(Mf(e))return"Safari";if((e.includes("chrome/")||Of(e))&&!e.includes("edge/"))return"Chrome";if(Uf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Nf(n=ze()){return/firefox\//i.test(n)}function Mf(n=ze()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Of(n=ze()){return/crios\//i.test(n)}function Vf(n=ze()){return/iemobile/i.test(n)}function Uf(n=ze()){return/android/i.test(n)}function Ff(n=ze()){return/blackberry/i.test(n)}function Hf(n=ze()){return/webos/i.test(n)}function Wc(n=ze()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Kw(n=ze()){var e;return Wc(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Qw(){return av()&&document.documentMode===10}function Bf(n=ze()){return Wc(n)||Uf(n)||Hf(n)||Ff(n)||/windows phone/i.test(n)||Vf(n)}/**
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
 */function jf(n,e=[]){let t;switch(n){case"Browser":t=Cd(ze());break;case"Worker":t=`${Cd(ze())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ei}/${i}`}/**
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
 */class Yw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,c)=>{try{const l=e(r);o(l)}catch(l){c(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function Jw(n,e={}){return Wt(n,"GET","/v2/passwordPolicy",Pn(n,e))}/**
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
 */const Xw=6;class Zw{constructor(e){var i;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Xw,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class e_{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rd(this),this.idTokenSubscription=new Rd(this),this.beforeStateQueue=new Yw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ft(t)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await pi.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await oo(this,{idToken:e}),i=await ut._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(Ke(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ao(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$w()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ke(this.app))return Promise.reject(Ct(this));const t=e?Ne(e):null;return t&&W(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ke(this.app)?Promise.reject(Ct(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ke(this.app)?Promise.reject(Ct(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ft(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Jw(this),t=new Zw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Hs("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Gw(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ft(e)||this._popupRedirectResolver;W(t,this,"argument-error"),this.redirectPersistenceManager=await pi.create(this,[Ft(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(c,this,"internal-error"),c.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;if(Ke(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Aw(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Nt(n){return Ne(n)}class Rd{constructor(e){this.auth=e,this.observer=null,this.addObserver=mv(t=>this.observer=t)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ao={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function t_(n){Ao=n}function zf(n){return Ao.loadJS(n)}function n_(){return Ao.recaptchaEnterpriseScript}function i_(){return Ao.gapiScript}function s_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class r_{constructor(){this.enterprise=new o_}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class o_{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const a_="recaptcha-enterprise",qf="NO_RECAPTCHA";class c_{constructor(e){this.type=a_,this.auth=Nt(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,c)=>{Uw(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new Vw(l);return r.tenantId==null?r._agentRecaptchaConfig=u:r._tenantRecaptchaConfigs[r.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(r,o,c){const l=window.grecaptcha;Id(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(u=>{o(u)}).catch(()=>{o(qf)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new r_().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(c=>{if(!t&&Id(window.grecaptcha))s(c,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=n_();l.length!==0&&(l+=c),zf(l).then(()=>{s(c,r,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Ad(n,e,t,i=!1,s=!1){const r=new c_(n);let o;if(s)o=qf;else try{o=await r.verify(t)}catch{o=await r.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return i?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function nc(n,e,t,i,s){var r;if((r=n._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Ad(n,e,t,t==="getOobCode");return i(n,o)}else return i(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Ad(n,e,t,t==="getOobCode");return i(n,c)}else return Promise.reject(o)})}/**
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
 */function l_(n,e){const t=Ro(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(Kn(r,e??{}))return s;ot(s,"already-initialized")}return t.initialize({options:e})}function u_(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Ft);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function d_(n,e,t){const i=Nt(n);W(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=Wf(e),{host:o,port:c}=h_(e),l=c===null?"":`:${c}`,u={url:`${r}//${o}${l}/`},p=Object.freeze({host:o,port:c,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){W(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),W(Kn(u,i.config.emulator)&&Kn(p,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=u,i.emulatorConfig=p,i.settings.appVerificationDisabledForTesting=!0,xn(o)?(Oc(`${r}//${o}${l}`),Vc("Auth",!0)):f_()}function Wf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function h_(n){const e=Wf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:xd(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:xd(o)}}}function xd(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function f_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Gc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ut("not implemented")}_getIdTokenResponse(e){return Ut("not implemented")}_linkToIdToken(e,t){return Ut("not implemented")}_getReauthenticationResolver(e){return Ut("not implemented")}}async function p_(n,e){return Wt(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function m_(n,e){return zs(n,"POST","/v1/accounts:signInWithPassword",Pn(n,e))}/**
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
 */async function g_(n,e){return zs(n,"POST","/v1/accounts:signInWithEmailLink",Pn(n,e))}async function y_(n,e){return zs(n,"POST","/v1/accounts:signInWithEmailLink",Pn(n,e))}/**
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
 */class Ls extends Gc{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Ls(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Ls(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nc(e,t,"signInWithPassword",m_);case"emailLink":return g_(e,{email:this._email,oobCode:this._password});default:ot(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nc(e,i,"signUpPassword",p_);case"emailLink":return y_(e,{idToken:t,email:this._email,oobCode:this._password});default:ot(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function mi(n,e){return zs(n,"POST","/v1/accounts:signInWithIdp",Pn(n,e))}/**
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
 */const v_="http://localhost";class zt extends Gc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new zt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ot("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...r}=t;if(!i||!s)return null;const o=new zt(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return mi(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,mi(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,mi(e,t)}buildRequest(){const e={requestUri:v_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Bs(t)}return e}}/**
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
 */function w_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function __(n){const e=fs(ps(n)).link,t=e?fs(ps(e)).deep_link_id:null,i=fs(ps(n)).deep_link_id;return(i?fs(ps(i)).link:null)||i||t||e||n}class Kc{constructor(e){const t=fs(ps(e)),i=t.apiKey??null,s=t.oobCode??null,r=w_(t.mode??null);W(i&&s&&r,"argument-error"),this.apiKey=i,this.operation=r,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=__(e);try{return new Kc(t)}catch{return null}}}/**
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
 */class Vi{constructor(){this.providerId=Vi.PROVIDER_ID}static credential(e,t){return Ls._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Kc.parseLink(t);return W(i,"argument-error"),Ls._fromEmailAndCode(e,i.code,i.tenantId)}}Vi.PROVIDER_ID="password";Vi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class xo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ui extends xo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ts extends Ui{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return W("providerId"in t&&"signInMethod"in t,"argument-error"),zt._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return W(e.idToken||e.accessToken,"argument-error"),zt._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Ts.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ts.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:r,nonce:o,providerId:c}=e;if(!i&&!s&&!t&&!r||!c)return null;try{return new Ts(c)._credential({idToken:t,accessToken:i,nonce:o,pendingToken:r})}catch{return null}}}/**
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
 */class an extends Ui{constructor(){super("facebook.com")}static credential(e){return zt._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return an.credential(e.oauthAccessToken)}catch{return null}}}an.FACEBOOK_SIGN_IN_METHOD="facebook.com";an.PROVIDER_ID="facebook.com";/**
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
 */class Vt extends Ui{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return zt._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Vt.credential(t,i)}catch{return null}}}Vt.GOOGLE_SIGN_IN_METHOD="google.com";Vt.PROVIDER_ID="google.com";/**
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
 */class cn extends Ui{constructor(){super("github.com")}static credential(e){return zt._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cn.credential(e.oauthAccessToken)}catch{return null}}}cn.GITHUB_SIGN_IN_METHOD="github.com";cn.PROVIDER_ID="github.com";/**
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
 */class ln extends Ui{constructor(){super("twitter.com")}static credential(e,t){return zt._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return ln.credential(t,i)}catch{return null}}}ln.TWITTER_SIGN_IN_METHOD="twitter.com";ln.PROVIDER_ID="twitter.com";/**
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
 */async function b_(n,e){return zs(n,"POST","/v1/accounts:signUp",Pn(n,e))}/**
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
 */class Yn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await ut._fromIdTokenResponse(e,i,s),o=Pd(i);return new Yn({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Pd(i);return new Yn({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Pd(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class co extends Dt{constructor(e,t,i,s){super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,co.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new co(e,t,i,s)}}function Gf(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?co._fromErrorAndOperation(n,r,e,i):r})}async function T_(n,e,t=!1){const i=await Si(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Yn._forOperation(n,"link",i)}/**
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
 */async function I_(n,e,t=!1){const{auth:i}=n;if(Ke(i.app))return Promise.reject(Ct(i));const s="reauthenticate";try{const r=await Si(n,Gf(i,s,e,n),t);W(r.idToken,i,"internal-error");const o=qc(r.idToken);W(o,i,"internal-error");const{sub:c}=o;return W(n.uid===c,i,"user-mismatch"),Yn._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ot(i,"user-mismatch"),r}}/**
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
 */async function Kf(n,e,t=!1){if(Ke(n.app))return Promise.reject(Ct(n));const i="signIn",s=await Gf(n,i,e),r=await Yn._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function E_(n,e){return Kf(Nt(n),e)}/**
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
 */async function Qf(n){const e=Nt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function k_(n,e,t){if(Ke(n.app))return Promise.reject(Ct(n));const i=Nt(n),o=await nc(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",b_).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Qf(n),l}),c=await Yn._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(c.user),c}function S_(n,e,t){return Ke(n.app)?Promise.reject(Ct(n)):E_(Ne(n),Vi.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Qf(n),i})}/**
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
 */async function C_(n,e){return Wt(n,"POST","/v1/accounts:update",e)}/**
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
 */async function R_(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=Ne(n),r={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Si(i,C_(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const c=i.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function A_(n,e,t,i){return Ne(n).onIdTokenChanged(e,t,i)}function x_(n,e,t){return Ne(n).beforeAuthStateChanged(e,t)}function P_(n,e,t,i){return Ne(n).onAuthStateChanged(e,t,i)}function $_(n){return Ne(n).signOut()}const lo="__sak";/**
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
 */class Yf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(lo,"1"),this.storage.removeItem(lo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const L_=1e3,D_=10;class Jf extends Yf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Bf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Qw()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,D_):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},L_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jf.type="LOCAL";const N_=Jf;/**
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
 */class Xf extends Yf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Xf.type="SESSION";const Zf=Xf;/**
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
 */function M_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Po{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Po(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const c=Array.from(o).map(async u=>u(t.origin,r)),l=await M_(c);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Po.receivers=[];/**
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
 */function Qc(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class O_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((c,l)=>{const u=Qc("",20);s.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(g){const w=g;if(w.data.eventId===u)switch(w.data.status){case"ack":clearTimeout(p),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),c(w.data.response);break;default:clearTimeout(p),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Rt(){return window}function V_(n){Rt().location.href=n}/**
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
 */function ep(){return typeof Rt().WorkerGlobalScope<"u"&&typeof Rt().importScripts=="function"}async function U_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function F_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function H_(){return ep()?self:null}/**
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
 */const tp="firebaseLocalStorageDb",B_=1,uo="firebaseLocalStorage",np="fbase_key";class qs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function $o(n,e){return n.transaction([uo],e?"readwrite":"readonly").objectStore(uo)}function j_(){const n=indexedDB.deleteDatabase(tp);return new qs(n).toPromise()}function ic(){const n=indexedDB.open(tp,B_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(uo,{keyPath:np})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(uo)?e(i):(i.close(),await j_(),e(await ic()))})})}async function $d(n,e,t){const i=$o(n,!0).put({[np]:e,value:t});return new qs(i).toPromise()}async function z_(n,e){const t=$o(n,!1).get(e),i=await new qs(t).toPromise();return i===void 0?null:i.value}function Ld(n,e){const t=$o(n,!0).delete(e);return new qs(t).toPromise()}const q_=800,W_=3;class ip{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ic(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>W_)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ep()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Po._getInstance(H_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await U_(),!this.activeServiceWorker)return;this.sender=new O_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||F_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ic();return await $d(e,lo,"1"),await Ld(e,lo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>$d(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>z_(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ld(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=$o(s,!1).getAll();return new qs(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),q_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ip.type="LOCAL";const G_=ip;new js(3e4,6e4);/**
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
 */function Yc(n,e){return e?Ft(e):(W(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Jc extends Gc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return mi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return mi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function K_(n){return Kf(n.auth,new Jc(n),n.bypassAuthState)}function Q_(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),I_(t,new Jc(n),n.bypassAuthState)}async function Y_(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),T_(t,new Jc(n),n.bypassAuthState)}/**
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
 */class sp{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return K_;case"linkViaPopup":case"linkViaRedirect":return Y_;case"reauthViaPopup":case"reauthViaRedirect":return Q_;default:ot(this.auth,"internal-error")}}resolve(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const J_=new js(2e3,1e4);async function rp(n,e,t){if(Ke(n.app))return Promise.reject(ht(n,"operation-not-supported-in-this-environment"));const i=Nt(n);Af(n,e,xo);const s=Yc(i,t);return new Fn(i,"signInViaPopup",e,s).executeNotNull()}class Fn extends sp{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Fn.currentPopupAction&&Fn.currentPopupAction.cancel(),Fn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){jt(this.filter.length===1,"Popup operations only handle one event");const e=Qc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)==null?void 0:t.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,J_.get())};e()}}Fn.currentPopupAction=null;/**
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
 */const X_="pendingRedirect",Ur=new Map;class Z_ extends sp{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Ur.get(this.auth._key());if(!e){try{const i=await eb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Ur.set(this.auth._key(),e)}return this.bypassAuthState||Ur.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eb(n,e){const t=ap(e),i=op(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}async function tb(n,e){return op(n)._set(ap(e),"true")}function nb(n,e){Ur.set(n._key(),e)}function op(n){return Ft(n._redirectPersistence)}function ap(n){return Vr(X_,n.config.apiKey,n.name)}/**
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
 */function cp(n,e,t){return ib(n,e,t)}async function ib(n,e,t){if(Ke(n.app))return Promise.reject(Ct(n));const i=Nt(n);Af(n,e,xo),await i._initializationPromise;const s=Yc(i,t);return await tb(s,i),s._openRedirect(i,e,"signInViaRedirect")}async function sb(n,e){return await Nt(n)._initializationPromise,lp(n,e,!1)}async function lp(n,e,t=!1){if(Ke(n.app))return Promise.reject(Ct(n));const i=Nt(n),s=Yc(i,e),o=await new Z_(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const rb=600*1e3;class ob{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ab(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!up(e)){const s=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";t.onError(ht(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dd(e))}saveEventToCache(e){this.cachedEventUids.add(Dd(e)),this.lastProcessedEventTime=Date.now()}}function Dd(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function up({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ab(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return up(n);default:return!1}}/**
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
 */async function cb(n,e={}){return Wt(n,"GET","/v1/projects",e)}/**
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
 */const lb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ub=/^https?/;async function db(n){if(n.config.emulator)return;const{authorizedDomains:e}=await cb(n);for(const t of e)try{if(hb(t))return}catch{}ot(n,"unauthorized-domain")}function hb(n){const e=ec(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!ub.test(t))return!1;if(lb.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const fb=new js(3e4,6e4);function Nd(){const n=Rt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function pb(n){return new Promise((e,t)=>{var s,r,o;function i(){Nd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nd(),t(ht(n,"network-request-failed"))},timeout:fb.get()})}if((r=(s=Rt().gapi)==null?void 0:s.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=Rt().gapi)!=null&&o.load)i();else{const c=s_("iframefcb");return Rt()[c]=()=>{gapi.load?i():t(ht(n,"network-request-failed"))},zf(`${i_()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Fr=null,e})}let Fr=null;function mb(n){return Fr=Fr||pb(n),Fr}/**
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
 */const gb=new js(5e3,15e3),yb="__/auth/iframe",vb="emulator/auth/iframe",wb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_b=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bb(n){const e=n.config;W(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?zc(e,vb):`https://${n.config.authDomain}/${yb}`,i={apiKey:e.apiKey,appName:n.name,v:ei},s=_b.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Bs(i).slice(1)}`}async function Tb(n){const e=await mb(n),t=Rt().gapi;return W(t,n,"internal-error"),e.open({where:document.body,url:bb(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wb,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=ht(n,"network-request-failed"),c=Rt().setTimeout(()=>{r(o)},gb.get());function l(){Rt().clearTimeout(c),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Ib={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Eb=500,kb=600,Sb="_blank",Cb="http://localhost";class Md{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Rb(n,e,t,i=Eb,s=kb){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l={...Ib,width:i.toString(),height:s.toString(),top:r,left:o},u=ze().toLowerCase();t&&(c=Of(u)?Sb:t),Nf(u)&&(e=e||Cb,l.scrollbars="yes");const p=Object.entries(l).reduce((w,[I,C])=>`${w}${I}=${C},`,"");if(Kw(u)&&c!=="_self")return Ab(e||"",c),new Md(null);const g=window.open(e||"",c,p);W(g,n,"popup-blocked");try{g.focus()}catch{}return new Md(g)}function Ab(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const xb="__/auth/handler",Pb="emulator/auth/handler",$b=encodeURIComponent("fac");async function Od(n,e,t,i,s,r){W(n.config.authDomain,n,"auth-domain-config-required"),W(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:ei,eventId:s};if(e instanceof xo){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",pv(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))o[p]=g}if(e instanceof Ui){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(o.scopes=p.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const l=await n._getAppCheckToken(),u=l?`#${$b}=${encodeURIComponent(l)}`:"";return`${Lb(n)}?${Bs(c).slice(1)}${u}`}function Lb({config:n}){return n.emulator?zc(n,Pb):`https://${n.authDomain}/${xb}`}/**
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
 */const Pa="webStorageSupport";class Db{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zf,this._completeRedirectFn=lp,this._overrideRedirectResult=nb}async _openPopup(e,t,i,s){var o;jt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await Od(e,t,i,ec(),s);return Rb(e,r,Qc())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Od(e,t,i,ec(),s);return V_(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(jt(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Tb(e),i=new ob(e);return t.register("authEvent",s=>(W(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Pa,{type:Pa},s=>{var o;const r=(o=s==null?void 0:s[0])==null?void 0:o[Pa];r!==void 0&&t(!!r),ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=db(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Bf()||Mf()||Wc()}}const Nb=Db;var Vd="@firebase/auth",Ud="1.12.1";/**
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
 */class Mb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ob(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Vb(n){Qn(new Tn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=i.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jf(n)},u=new e_(i,s,r,l);return u_(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Qn(new Tn("auth-internal",e=>{const t=Nt(e.getProvider("auth").getImmediate());return(i=>new Mb(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),St(Vd,Ud,Ob(n)),St(Vd,Ud,"esm2020")}/**
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
 */const Ub=300,Fb=_f("authIdTokenMaxAge")||Ub;let Fd=null;const Hb=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Fb)return;const s=t==null?void 0:t.token;Fd!==s&&(Fd=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Bb(n=Hc()){const e=Ro(n,"auth");if(e.isInitialized())return e.getImmediate();const t=l_(n,{popupRedirectResolver:Nb,persistence:[G_,N_,Zf]}),i=_f("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=Hb(r.toString());x_(t,o,()=>o(t.currentUser)),A_(t,c=>o(c))}}const s=yf("auth");return s&&d_(t,`http://${s}`),t}function jb(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}t_({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=ht("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",jb().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Vb("Browser");const zb={apiKey:"AIzaSyAFURz8fEGSTameAW5YvBKWpr2LXv9Ang0",authDomain:"family-pantry-c65d6.firebaseapp.com",projectId:"family-pantry-c65d6",storageBucket:"family-pantry-c65d6.firebasestorage.app",messagingSenderId:"710701847077",appId:"1:710701847077:web:407a8937330ad2ebcfe5cc"},Xc=Ef(zb),at=Bb(Xc);window._firebaseAuth=at;const Hd=new Vt,ho=new Ts("apple.com");ho.addScope("email");ho.addScope("name");let Zc=null;const Hr=[];function qb(n){return Hr.push(n),n(Zc),()=>{const e=Hr.indexOf(n);e!==-1&&Hr.splice(e,1)}}function Wb(n){Zc=n,Hr.forEach(e=>e(n))}P_(at,n=>{Wb(n||null)});sb(at).catch(n=>{n.code!=="auth/redirect-cancelled-by-user"&&console.error("Redirect sign-in error:",n)});async function Gb(){try{return(await rp(at,Hd)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await cp(at,Hd),null;throw n}}async function Kb(){try{return(await rp(at,ho)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await cp(at,ho),null;throw n}}async function Qb(n,e){return(await S_(at,n,e)).user}async function Yb(n,e,t){const i=await k_(at,n,e);return t&&await R_(i.user,{displayName:t}),i.user}async function Jb(){await $_(at)}async function dp(){return at.currentUser?at.currentUser.getIdToken():null}function X(){return Zc}async function Ws(n,e,t){const i={"Content-Type":"application/json"},s=await dp();s&&(i.Authorization=`Bearer ${s}`);const r=await fetch("/api/db",{method:"POST",headers:i,body:JSON.stringify({op:n,path:e,data:t})});if(!(r.headers.get("content-type")||"").includes("application/json"))throw new Error(`/api/db non-JSON response (status ${r.status}) for ${n} ${e}`);return r.json()}async function re(n){try{return(await Ws("list",n)).docs||[]}catch(e){return console.warn("dbList:",n,e.message),[]}}async function z(n,e){return Ws("set",n,e)}async function pe(n){return Ws("delete",n)}async function hp(n){return Ws("admin-delete",n)}async function G(n){try{return(await Ws("get",n)).doc||null}catch{return null}}function fp(){return Math.random().toString(36).slice(2,8).toUpperCase()}async function fo(n){var t;const e={name:n.displayName||((t=n.email)==null?void 0:t.split("@")[0])||"User",email:n.email||"",createdAt:new Date().toISOString(),householdIds:[]};return await z(`users/${n.uid}`,e),e}async function el(n,e){var o;const t=X(),i=n,s=fp(),r={name:e||"My Kitchen",ownerUid:n,members:[{uid:n,name:(t==null?void 0:t.displayName)||((o=t==null?void 0:t.email)==null?void 0:o.split("@")[0])||"Owner",role:"owner",joinedAt:new Date().toISOString()}],memberUids:[n],inviteCode:s,createdAt:new Date().toISOString()};try{await z(`households/${i}`,r),await z(`household_codes/${s}`,{householdId:i})}catch(c){console.error(`[createHousehold] FAILED to write households/${i}:`,c)}return{hid:i,...r}}async function pp(n){const e=await G(`household_codes/${n.toUpperCase()}`);return(e==null?void 0:e.householdId)||null}async function Xb(n,e){if(!Gs(e||{}).includes(n))return;const i=await G(`households/${n}`);if(!i){console.log(`[_cleanupGhostHousehold] Ghost doc ${n} already gone, removing from householdIds`);return}const s=(i.members||[]).length;if(s>1){console.log(`[_cleanupGhostHousehold] Household ${n} has ${s} members, skipping cleanup`);return}console.log(`[_cleanupGhostHousehold] Deleting ghost household ${n}`);try{await pe(`households/${n}`),i.inviteCode&&await pe(`household_codes/${i.inviteCode}`)}catch(r){console.warn("[_cleanupGhostHousehold] Failed to delete ghost:",r)}}async function tl(n,e){var c;const t=await pp(n);if(!t)return null;const i=await G(`households/${t}`);if(!i)return null;const s=i.members||[],r=i.memberUids||s.map(l=>l.uid);s.find(l=>l.uid===e.uid)||(s.push({uid:e.uid,name:e.displayName||((c=e.email)==null?void 0:c.split("@")[0])||"Member",role:"member",joinedAt:new Date().toISOString()}),r.includes(e.uid)||r.push(e.uid),await z(`households/${t}`,{...i,members:s,memberUids:r,id:void 0}));const o=await G(`users/${e.uid}`);if(o){await Xb(e.uid,o);const l={...o,householdIds:[t],needsHousehold:!1,onboardingDone:!0,id:void 0};o.householdId&&delete l.householdId,await z(`users/${e.uid}`,l)}return t}async function mp(n){const e=await G(`households/${n}`);if(!e)return null;if(e.inviteCode)try{await pe(`household_codes/${e.inviteCode}`)}catch{}const t=fp();return await z(`household_codes/${t}`,{householdId:n}),await z(`households/${n}`,{...e,inviteCode:t,id:void 0}),t}async function nl(n,e){const t=await G(`households/${n}`);if(!t)return;const i=(t.members||[]).filter(r=>r.uid!==e),s=(t.memberUids||[]).filter(r=>r!==e);await z(`households/${n}`,{...t,members:i,memberUids:s,id:void 0});try{const r=await G(`users/${e}`);if(r){const o={...r,householdIds:[],needsHousehold:!0,onboardingDone:!1,id:void 0};r.householdId&&delete o.householdId,await z(`users/${e}`,o)}}catch{}}async function gp(n,e){const t=await G(`households/${n}`);if(!t)throw new Error("Household not found");const i=(t.members||[]).map(s=>({...s,role:s.uid===e?"owner":s.uid===t.ownerUid?"member":s.role}));await z(`households/${n}`,{...t,ownerUid:e,members:i,id:void 0})}async function il(n,e){const t=await G(`households/${n}`);if(!t)return;const i=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog","activity"];for(const s of i)try{const r=await re(`households/${n}/${s}`);for(const o of r)await pe(`households/${n}/${s}/${o.id}`)}catch{}if(t.inviteCode)try{await pe(`household_codes/${t.inviteCode}`)}catch{}await pe(`households/${n}`);try{const s=await G(`users/${e}`);if(s){const o=Gs(s).filter(l=>l!==n),c={...s,householdIds:o,id:void 0};s.householdId&&delete c.householdId,await z(`users/${e}`,c)}}catch{}}async function sl(n,e){try{const t=await G(`households/${n}`);return t?(t.memberUids||[]).includes(e):!1}catch{return!1}}async function Bd(n,e){const t=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog"];for(const i of t){const s=await re(`households/${n}/${i}`);for(const r of s){const o=r.id,c={...r};delete c.id,await z(`households/${e}/${i}/${o}`,c)}}}function Gs(n){return n.householdId&&typeof n.householdId=="string"?[n.householdId]:n.householdIds||[]}async function Zb(n,e){const t=Gs(e);if(!t.length)return null;console.log(`[_validateHouseholdIds] Checking ${t.length} household IDs:`,t);const i=await Promise.all(t.map(async c=>{const l=await G(`households/${c}`);if(!l)return console.log(`[_validateHouseholdIds] household ${c} does NOT exist — will remove`),{hid:c,exists:!1,isMember:!1};const u=(l.memberUids||[]).includes(n)||(l.members||[]).some(p=>p.uid===n);return console.log(`[_validateHouseholdIds] household ${c} exists, isMember=${u}`),{hid:c,exists:!0,isMember:u}})),s=i.filter(c=>c.exists).map(c=>c.hid),r=i.filter(c=>c.exists&&c.isMember).map(c=>c.hid),o=i.filter(c=>!c.exists).map(c=>c.hid);if(o.length>0){console.log(`[_validateHouseholdIds] Removing ${o.length} stale IDs:`,o);const c=t.filter(l=>!o.includes(l));await z(`users/${n}`,{...e,householdIds:c,id:void 0})}if(r.length>0){const l=r.find(u=>u!==n)||r[0];return console.log(`[_validateHouseholdIds] Resolved to member household: ${l}`),l}return s.length>0?(console.log(`[_validateHouseholdIds] Fallback to first valid household: ${s[0]}`),s[0]):(console.log("[_validateHouseholdIds] No valid households found"),null)}async function yp(n){var u;const e=n.uid;console.log(`[resolveHousehold] ENTER — uid=${e}`);const t=localStorage.getItem("ks-h");t&&(console.log(`[resolveHousehold] Clearing stale cached ks-h="${t}"`),localStorage.removeItem("ks-h"));const i=await G(`users/${e}`);if(console.log("[resolveHousehold] userDoc=",i),i){if(i.needsHousehold===!0)return console.log("[resolveHousehold] User has needsHousehold=true — returning null to show join screen"),null;const p=await Zb(e,i),g=Gs(i);return console.log(`[resolveHousehold] RETURNING USER — resolved hid=${p}, ids=`,g),p?(t&&t!==p&&t!==e&&(console.log(`[resolveHousehold] LATE MIGRATION TRIGGERED: ${t} → ${p}`),await Bd(t,p)),p):g.length>0?(console.error(`[resolveHousehold] User has ${g.length} household IDs but NONE are valid. NOT creating a ghost. Returning null.`),null):(console.log("[resolveHousehold] Returning user with no household IDs — needs onboarding"),null)}console.log("[resolveHousehold] FIRST-TIME LOGIN — no userDoc found");const s=localStorage.getItem("ks-h"),r=s&&s!==e;console.log(`[resolveHousehold] FIRST-TIME — ks-h="${s}", hasOldData=${r}`);const o=((u=d.cfg)==null?void 0:u.name)||"My Kitchen";console.log(`[resolveHousehold] FIRST-TIME — creating household, cfgName="${o}"`),await el(e,r?o:"My Kitchen"),r&&(console.log(`[resolveHousehold] FIRST-TIME MIGRATION: ${s} → ${e}`),await Bd(s,e),console.log("[resolveHousehold] FIRST-TIME MIGRATION DONE"));const c=await fo(n);c.householdIds=[e],await z(`users/${e}`,c),console.log("[resolveHousehold] User profile created & saved"),localStorage.removeItem("ks-h");const l=le("ks-hhs");if(l){const p=l.filter(g=>g!==s);p.includes(e)||p.push(e),localStorage.setItem("ks-hhs",JSON.stringify(p))}return console.log(`[resolveHousehold] EXIT — returning uid=${e}`),e}async function In(n,e){e?(d.mp[n]=e,await z(`households/${d.hid}/mealplan/${n}`,{date:n,meal:e})):(delete d.mp[n],await pe(`households/${d.hid}/mealplan/${n}`))}async function Ks(){await z(`households/${d.hid}/settings/config`,d.cfg)}async function rl(n,e){const t={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:e||sc(),loggedAt:new Date().toISOString()};d.cookLog.unshift(t),d.cookLog.length>200&&(d.cookLog=d.cookLog.slice(0,200)),await z(`households/${d.hid}/cooklog/${t.id}`,t)}async function vp(n){if(d.wasteLog.find(t=>t.name===n&&t.date===sc()))return;const e={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:sc(),loggedAt:new Date().toISOString()};d.wasteLog.unshift(e),d.wasteLog.length>100&&(d.wasteLog=d.wasteLog.slice(0,100)),await z(`households/${d.hid}/wastelog/${e.id}`,e)}async function wp(){try{try{const r=await G(`households/${d.hid}`);r&&r.inviteCode&&(await G(`household_codes/${r.inviteCode}`)||(await z(`household_codes/${r.inviteCode}`,{householdId:d.hid}),console.log(`[backfill] Created household_codes/${r.inviteCode} for household ${d.hid}`)))}catch(r){console.warn("[backfill] household_codes backfill skipped:",r.message)}const e=(await re(`households/${d.hid}/settings`)).find(r=>r.id==="config");if(e)d.cfg={...to,...e};else{const r=le("ks-c");d.cfg={...to,...r||{}},await Ks(),r&&localStorage.removeItem("ks-c")}const t=await re(`households/${d.hid}/mealplan`);if(d.mp={},t.forEach(r=>{r.date&&r.meal&&(d.mp[r.date]=r.meal)}),!t.length){const r=le("ks-m");if(r&&Object.keys(r).length){d.mp=r;for(const[o,c]of Object.entries(r))await In(o,c);localStorage.removeItem("ks-m")}}const i=await re(`households/${d.hid}/cooklog`);if(i.length)d.cookLog=i.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=le("ks-cooklog");if(r&&r.length){d.cookLog=r.map((o,c)=>({id:o.id||(Date.now()-c).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of d.cookLog)await z(`households/${d.hid}/cooklog/${o.id}`,o);localStorage.removeItem("ks-cooklog")}}const s=await re(`households/${d.hid}/wastelog`);if(s.length)d.wasteLog=s.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=le("ks-waste");if(r&&r.length){d.wasteLog=r.map((o,c)=>({id:o.id||(Date.now()-c).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of d.wasteLog)await z(`households/${d.hid}/wastelog/${o.id}`,o);localStorage.removeItem("ks-waste")}}}catch(n){console.error("loadFirestoreData error:",n)}}let Is=0;function ti(){Is++,Is===1&&window._pollIntervalId&&(clearInterval(window._pollIntervalId),window._pollIntervalId=null)}function ni(){Is--,Is<=0&&(Is=0,window._pollFn&&!window._pollIntervalId&&(window._pollFn(),window._pollIntervalId=setInterval(window._pollFn,3e4)))}const B={renderAll:null,renderSum:null,renderRecs:null,renderShop:null};function ae(n){var i;const e=document.getElementById("sdot"),t=document.getElementById("slb");e&&(e.className="sdot "+n),t&&(t.textContent=n==="synced"?"🏠 "+(((i=d.cfg)==null?void 0:i.name)||d.hid):n==="syncing"?"Syncing…":"Sync error")}async function oe(n){var e,t;ae("syncing"),ti();try{const i=!d.inv.find(s=>s.id===n.id);d.inv=[...d.inv.filter(s=>s.id!==n.id),n],(e=B.renderAll)==null||e.call(B),(t=B.renderSum)==null||t.call(B),await z(`households/${d.hid}/inventory/${n.id}`,n),i&&Xe("added",Ae(n.name)+" to Supplies"),ae("synced")}catch(i){console.error(i),ae("error")}finally{ni()}}async function Qs(n){var e,t;ae("syncing"),ti();try{const i=d.inv.find(s=>s.id===n);d.inv=d.inv.filter(s=>s.id!==n),(e=B.renderAll)==null||e.call(B),(t=B.renderSum)==null||t.call(B),await pe(`households/${d.hid}/inventory/${n}`),i&&Xe("removed",Ae(i.name)+" from Supplies"),ae("synced")}catch(i){console.error(i),ae("error")}finally{ni()}}async function Je(n){var e,t;ti();try{const i=!d.recs.find(r=>r.id===n.id);d.recs=[...d.recs.filter(r=>r.id!==n.id),n],(e=B.renderRecs)==null||e.call(B),(t=B.renderSum)==null||t.call(B),await z(`households/${d.hid}/recipes/${n.id}`,n);const s=Ae(n.name||n.title||"a recipe");i?Xe("added",s+" to Recipes"):Xe("updated",s)}catch(i){console.error(i)}finally{ni()}}async function _p(n){var e,t;ti();try{const i=d.recs.find(s=>s.id===n);d.recs=d.recs.filter(s=>s.id!==n),(e=B.renderRecs)==null||e.call(B),(t=B.renderSum)==null||t.call(B),await pe(`households/${d.hid}/recipes/${n}`),i&&Xe("deleted",Ae(i.name||i.title||"a recipe")+" from Recipes")}catch(i){console.error(i)}finally{ni()}}async function ve(n){var e,t;ti();try{const i=!d.shop.find(s=>s.id===n.id);d.shop=[...d.shop.filter(s=>s.id!==n.id),n],(e=B.renderShop)==null||e.call(B),(t=B.renderSum)==null||t.call(B),await z(`households/${d.hid}/shopping/${n.id}`,n),i&&Xe("added",Ae(n.name)+" to Shopping List")}catch(i){console.error(i)}finally{ni()}}async function Fi(n){var e,t;ti();try{const i=d.shop.find(s=>s.id===n);d.shop=d.shop.filter(s=>s.id!==n),(e=B.renderShop)==null||e.call(B),(t=B.renderSum)==null||t.call(B),await pe(`households/${d.hid}/shopping/${n}`),i&&Xe("removed",Ae(i.name)+" from Shopping List")}catch(i){console.error(i)}finally{ni()}}async function Lo(n,e){var s;const t="pub-"+Date.now()+"-"+Math.random().toString(36).slice(2,8),i={title:n.name,ingredients:n.description||"",steps:n.steps||"",tags:n.tags||[],cuisine:n.cuisine||"",sourceRecipeId:n.id||null,imageUrl:n.imageUrl||null,prepTime:n.prepTime||"",cookTime:n.cookTime||"",totalTime:n.totalTime||"",servings:n.servings||"",difficulty:n.difficulty||"",summary:n.summary||"",ingredientsRaw:n.ingredientsRaw||[],stepsRaw:n.stepsRaw||[],authorName:e||"Anonymous",authorUsername:d.username||"",authorUid:((s=X())==null?void 0:s.uid)||"",householdId:d.hid||"",createdAt:new Date().toISOString(),likes:0,commentCount:0,ratingSum:0,ratingCount:0,avgRating:0};return await z(`public_recipes/${t}`,i),{id:t,...i}}async function ol(n){var i;if(!((i=X())==null?void 0:i.uid))return null;const t=d.hid||"";if(n.publicId)try{const s=await cl(n.publicId);if(s)return s}catch{}try{d.comRecs=await ft()}catch{}if(d.comRecs&&d.comRecs.length>0){const s=await Do(),r=l=>l.householdId?l.householdId===t:l.authorUid&&s.includes(l.authorUid);if(n.id){const l=d.comRecs.find(u=>r(u)&&u.sourceRecipeId===n.id);if(l)return l}const o=(n.name||"").trim().toLowerCase(),c=d.comRecs.find(l=>r(l)&&(l.title||"").trim().toLowerCase()===o);if(c)return c}return null}async function al(n){await pe(`public_recipes/${n}`)}async function ft(){return re("public_recipes")}async function cl(n){return G(`public_recipes/${n}`)}async function bp(n,e){var o;const t=(o=X())==null?void 0:o.uid;if(!t)return;const i=`public_recipes/${n}/likes/${t}`;e?await pe(i):await z(i,{likedAt:new Date().toISOString()});const s=await re(`public_recipes/${n}/likes`),r=await G(`public_recipes/${n}`);r&&await z(`public_recipes/${n}`,{...r,likes:s.length,id:void 0})}async function Tp(n,e,t){var c;const i=(c=X())==null?void 0:c.uid;if(!i||!e.trim())return;const s=e.trim().slice(0,500),r="cmt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),o={text:s,authorName:t,authorUsername:d.username||"",authorUid:i,createdAt:new Date().toISOString()};await z(`public_recipes/${n}/comments/${r}`,o);try{const l=await G(`public_recipes/${n}`);if(l){const u=await re(`public_recipes/${n}/comments`);await z(`public_recipes/${n}`,{...l,commentCount:u.length,id:void 0}),l.authorUid&&l.authorUid!==i&&await Dp(l.authorUid,{type:"comment",recipeId:n,recipeName:l.title||"a recipe",commenterUsername:d.username||t||"Someone"})}}catch{}return{id:r,...o}}async function Ip(n){return re(`public_recipes/${n}/comments`)}async function Ep(n){var i;const e=(i=X())==null?void 0:i.uid;return e?!!await G(`public_recipes/${n}/likes/${e}`):!1}async function kp(n){const t={id:"rec-"+Date.now(),name:n.title,description:n.ingredients||"",notes:n.steps||"",tags:n.tags||[],cuisine:n.cuisine||"",imageUrl:n.imageUrl||null,prepTime:n.prepTime||"",cookTime:n.cookTime||"",totalTime:n.totalTime||"",servings:n.servings||"",ingredientsRaw:n.ingredientsRaw||[],stepsRaw:n.stepsRaw||[],difficulty:n.difficulty||"",summary:n.summary||"",rating:0,favorited:!1,source:"Community",sourceUrl:null,cookCount:0,savedAt:new Date().toLocaleDateString()};return await Je(t),t}async function ll(n){return n?!await G(`usernames/${n.toLowerCase()}`):!1}async function ul(n,e){const t=await G(`users/${n}`),i=t==null?void 0:t.username;if(i&&i.toLowerCase()!==e.toLowerCase())try{await pe(`usernames/${i.toLowerCase()}`)}catch{}await z(`usernames/${e.toLowerCase()}`,{uid:n}),t&&await z(`users/${n}`,{...t,username:e,id:void 0}),d.username=e}async function Sp(n){try{const e=await G(`users/${n}`);return(e==null?void 0:e.username)||null}catch{return null}}async function Cp(n){const e=await G(`users/${n}`);if(!e)return;try{const s=(await ft()||[]).filter(r=>r.authorUid===n);for(const r of s)await z(`public_recipes/${r.id}`,{...r,authorName:"Deleted User",authorUsername:"deleted_user",id:void 0})}catch(i){console.warn(`[deleteAccountData] Failed to anonymize community recipes for ${n}:`,i)}const t=Gs(e);for(const i of t)try{const s=await G(`households/${i}`);if(!s)continue;const r=s.ownerUid===n,o=(s.members||[]).length;if(r&&o<=1)await il(i,n);else if(!r){const c=(s.members||[]).filter(u=>u.uid!==n),l=(s.memberUids||[]).filter(u=>u!==n);await z(`households/${i}`,{...s,members:c,memberUids:l,id:void 0})}}catch(s){console.warn(`[deleteAccountData] Failed to clean up household ${i}:`,s)}if(e.username)try{await pe(`usernames/${e.username.toLowerCase()}`)}catch{}try{const i=await re(`users/${n}/notifications`);for(const s of i)await pe(`users/${n}/notifications/${s.id}`)}catch{}try{await pe(`users/${n}`)}catch{}}async function Rp(n){var t;const e=(t=X())==null?void 0:t.uid;return e?G(`public_recipes/${n}/reviews/${e}`):null}async function Do(){if(!d.hid)return[];try{const n=await G(`households/${d.hid}`);return(n==null?void 0:n.memberUids)||[]}catch{return[]}}async function Xe(n,e){if(!d.hid||!e)return;const t=localStorage.getItem("ks-who")||"Someone",i="act-"+Date.now().toString(36)+Math.random().toString(36).slice(2),s={memberName:t,action:n,itemName:e,timestamp:new Date().toISOString()};try{await z(`households/${d.hid}/activity/${i}`,s),eT()}catch{}}async function eT(){try{const n=await re(`households/${d.hid}/activity`),e=Date.now()-10080*60*1e3;for(const t of n)t.timestamp&&new Date(t.timestamp).getTime()<e&&await pe(`households/${d.hid}/activity/${t.id}`)}catch{}}function sc(){return new Date().toISOString().split("T")[0]}async function Ap(n,e){var g;const t=(g=X())==null?void 0:g.uid;if(!t||!e||e<1||e>5)return null;const i=await G(`public_recipes/${n}`);if(i&&i.authorUid===t)return null;const s=new Date().toISOString(),r=await G(`public_recipes/${n}/ratings/${t}`),o={rating:e,createdAt:(r==null?void 0:r.createdAt)||s,updatedAt:s};await z(`public_recipes/${n}/ratings/${t}`,o);const c=await re(`public_recipes/${n}/ratings`),l=c.reduce((w,I)=>w+(I.rating||0),0),u=c.length,p=u>0?Math.round(l/u*10)/10:0;return i&&await z(`public_recipes/${n}`,{...i,ratingSum:l,ratingCount:u,avgRating:p,id:void 0}),{...o,ratingSum:l,ratingCount:u,avgRating:p}}async function xp(n){var t;const e=(t=X())==null?void 0:t.uid;return e?G(`public_recipes/${n}/ratings/${e}`):null}async function Pp(n){var c;const e=(c=X())==null?void 0:c.uid;if(!e)return null;await pe(`public_recipes/${n}/ratings/${e}`);const t=await re(`public_recipes/${n}/ratings`),i=t.reduce((l,u)=>l+(u.rating||0),0),s=t.length,r=s>0?Math.round(i/s*10)/10:0,o=await G(`public_recipes/${n}`);return o&&await z(`public_recipes/${n}`,{...o,ratingSum:i,ratingCount:s,avgRating:r,id:void 0}),{ratingSum:i,ratingCount:s,avgRating:r}}async function $p(n,e){await pe(`public_recipes/${n}/comments/${e}`);try{const t=await G(`public_recipes/${n}`);if(t){const i=await re(`public_recipes/${n}/comments`);await z(`public_recipes/${n}`,{...t,commentCount:i.length,id:void 0})}}catch{}}async function Lp(n,e,t,i){var u;const s=(u=X())==null?void 0:u.uid;if(!s)return null;if((await re("reports")).find(p=>p.reportedBy===s&&p.targetId===e&&p.type===n))return"duplicate";const c="rpt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),l={type:n,targetId:e,recipeId:i||e,reportedBy:s,reason:t,createdAt:new Date().toISOString(),status:"pending"};return await z(`reports/${c}`,l),{id:c,...l}}async function Dp(n,e){if(!n)return;const t="ntf-"+Date.now().toString(36)+Math.random().toString(36).slice(2),i={...e,createdAt:new Date().toISOString(),read:!1};await z(`users/${n}/notifications/${t}`,i)}async function Np(){var t;const n=(t=X())==null?void 0:t.uid;return n?(await re(`users/${n}/notifications`)).sort((i,s)=>new Date(s.createdAt||0)-new Date(i.createdAt||0)):[]}async function Mp(){var t;const n=(t=X())==null?void 0:t.uid;if(!n)return;const e=await re(`users/${n}/notifications`);for(const i of e)i.read||await z(`users/${n}/notifications/${i.id}`,{...i,read:!0,id:void 0})}async function Op(){var t;const n=(t=X())==null?void 0:t.uid;return n?(await re(`users/${n}/notifications`)).filter(i=>!i.read).length:0}const tT=Object.freeze(Object.defineProperty({__proto__:null,addComment:Tp,addCookLogEntry:rl,addNotification:Dp,addWasteEntry:vp,checkMembershipValid:sl,checkMyLike:Ep,checkMyReview:Rp,checkRecipeAlreadyPublished:ol,checkUsernameAvailable:ll,createHousehold:el,createUserProfile:fo,dbAdminDelete:hp,dbDelete:pe,dbGet:G,dbList:re,dbSet:z,deleteAccountData:Cp,deleteComment:$p,deleteHousehold:il,deleteRating:Pp,dlShopItem:Fi,dli:Qs,dlr:_p,getHouseholdMemberUids:Do,getMyRating:xp,getPublicRecipe:cl,getUnreadNotifCount:Op,joinHouseholdByCode:tl,listComments:Ip,listNotifications:Np,listPublicRecipes:ft,loadFirestoreData:wp,loadUsername:Sp,logActivity:Xe,lookupHouseholdByCode:pp,markAllNotificationsRead:Mp,pausePoll:ti,publishRecipe:Lo,regenerateInviteCode:mp,removeMember:nl,renderCallbacks:B,resolveHousehold:yp,resumePoll:ni,saveCfg:Ks,saveMp:In,saveRecipeToKitchen:kp,setUsername:ul,ss:ae,submitRating:Ap,submitReport:Lp,svShopItem:ve,svi:oe,svr:Je,toggleLike:bp,transferOwnership:gp,unpublishRecipe:al},Symbol.toStringTag,{value:"Module"}));var jd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yn,Vp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function _(){}_.prototype=v.prototype,b.F=v.prototype,b.prototype=new _,b.prototype.constructor=b,b.D=function(k,E,R){for(var T=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)T[xe-2]=arguments[xe];return v.prototype[E].apply(k,T)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,v,_){_||(_=0);const k=Array(16);if(typeof v=="string")for(var E=0;E<16;++E)k[E]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(E=0;E<16;++E)k[E]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=b.g[0],_=b.g[1],E=b.g[2];let R=b.g[3],T;T=v+(R^_&(E^R))+k[0]+3614090360&4294967295,v=_+(T<<7&4294967295|T>>>25),T=R+(E^v&(_^E))+k[1]+3905402710&4294967295,R=v+(T<<12&4294967295|T>>>20),T=E+(_^R&(v^_))+k[2]+606105819&4294967295,E=R+(T<<17&4294967295|T>>>15),T=_+(v^E&(R^v))+k[3]+3250441966&4294967295,_=E+(T<<22&4294967295|T>>>10),T=v+(R^_&(E^R))+k[4]+4118548399&4294967295,v=_+(T<<7&4294967295|T>>>25),T=R+(E^v&(_^E))+k[5]+1200080426&4294967295,R=v+(T<<12&4294967295|T>>>20),T=E+(_^R&(v^_))+k[6]+2821735955&4294967295,E=R+(T<<17&4294967295|T>>>15),T=_+(v^E&(R^v))+k[7]+4249261313&4294967295,_=E+(T<<22&4294967295|T>>>10),T=v+(R^_&(E^R))+k[8]+1770035416&4294967295,v=_+(T<<7&4294967295|T>>>25),T=R+(E^v&(_^E))+k[9]+2336552879&4294967295,R=v+(T<<12&4294967295|T>>>20),T=E+(_^R&(v^_))+k[10]+4294925233&4294967295,E=R+(T<<17&4294967295|T>>>15),T=_+(v^E&(R^v))+k[11]+2304563134&4294967295,_=E+(T<<22&4294967295|T>>>10),T=v+(R^_&(E^R))+k[12]+1804603682&4294967295,v=_+(T<<7&4294967295|T>>>25),T=R+(E^v&(_^E))+k[13]+4254626195&4294967295,R=v+(T<<12&4294967295|T>>>20),T=E+(_^R&(v^_))+k[14]+2792965006&4294967295,E=R+(T<<17&4294967295|T>>>15),T=_+(v^E&(R^v))+k[15]+1236535329&4294967295,_=E+(T<<22&4294967295|T>>>10),T=v+(E^R&(_^E))+k[1]+4129170786&4294967295,v=_+(T<<5&4294967295|T>>>27),T=R+(_^E&(v^_))+k[6]+3225465664&4294967295,R=v+(T<<9&4294967295|T>>>23),T=E+(v^_&(R^v))+k[11]+643717713&4294967295,E=R+(T<<14&4294967295|T>>>18),T=_+(R^v&(E^R))+k[0]+3921069994&4294967295,_=E+(T<<20&4294967295|T>>>12),T=v+(E^R&(_^E))+k[5]+3593408605&4294967295,v=_+(T<<5&4294967295|T>>>27),T=R+(_^E&(v^_))+k[10]+38016083&4294967295,R=v+(T<<9&4294967295|T>>>23),T=E+(v^_&(R^v))+k[15]+3634488961&4294967295,E=R+(T<<14&4294967295|T>>>18),T=_+(R^v&(E^R))+k[4]+3889429448&4294967295,_=E+(T<<20&4294967295|T>>>12),T=v+(E^R&(_^E))+k[9]+568446438&4294967295,v=_+(T<<5&4294967295|T>>>27),T=R+(_^E&(v^_))+k[14]+3275163606&4294967295,R=v+(T<<9&4294967295|T>>>23),T=E+(v^_&(R^v))+k[3]+4107603335&4294967295,E=R+(T<<14&4294967295|T>>>18),T=_+(R^v&(E^R))+k[8]+1163531501&4294967295,_=E+(T<<20&4294967295|T>>>12),T=v+(E^R&(_^E))+k[13]+2850285829&4294967295,v=_+(T<<5&4294967295|T>>>27),T=R+(_^E&(v^_))+k[2]+4243563512&4294967295,R=v+(T<<9&4294967295|T>>>23),T=E+(v^_&(R^v))+k[7]+1735328473&4294967295,E=R+(T<<14&4294967295|T>>>18),T=_+(R^v&(E^R))+k[12]+2368359562&4294967295,_=E+(T<<20&4294967295|T>>>12),T=v+(_^E^R)+k[5]+4294588738&4294967295,v=_+(T<<4&4294967295|T>>>28),T=R+(v^_^E)+k[8]+2272392833&4294967295,R=v+(T<<11&4294967295|T>>>21),T=E+(R^v^_)+k[11]+1839030562&4294967295,E=R+(T<<16&4294967295|T>>>16),T=_+(E^R^v)+k[14]+4259657740&4294967295,_=E+(T<<23&4294967295|T>>>9),T=v+(_^E^R)+k[1]+2763975236&4294967295,v=_+(T<<4&4294967295|T>>>28),T=R+(v^_^E)+k[4]+1272893353&4294967295,R=v+(T<<11&4294967295|T>>>21),T=E+(R^v^_)+k[7]+4139469664&4294967295,E=R+(T<<16&4294967295|T>>>16),T=_+(E^R^v)+k[10]+3200236656&4294967295,_=E+(T<<23&4294967295|T>>>9),T=v+(_^E^R)+k[13]+681279174&4294967295,v=_+(T<<4&4294967295|T>>>28),T=R+(v^_^E)+k[0]+3936430074&4294967295,R=v+(T<<11&4294967295|T>>>21),T=E+(R^v^_)+k[3]+3572445317&4294967295,E=R+(T<<16&4294967295|T>>>16),T=_+(E^R^v)+k[6]+76029189&4294967295,_=E+(T<<23&4294967295|T>>>9),T=v+(_^E^R)+k[9]+3654602809&4294967295,v=_+(T<<4&4294967295|T>>>28),T=R+(v^_^E)+k[12]+3873151461&4294967295,R=v+(T<<11&4294967295|T>>>21),T=E+(R^v^_)+k[15]+530742520&4294967295,E=R+(T<<16&4294967295|T>>>16),T=_+(E^R^v)+k[2]+3299628645&4294967295,_=E+(T<<23&4294967295|T>>>9),T=v+(E^(_|~R))+k[0]+4096336452&4294967295,v=_+(T<<6&4294967295|T>>>26),T=R+(_^(v|~E))+k[7]+1126891415&4294967295,R=v+(T<<10&4294967295|T>>>22),T=E+(v^(R|~_))+k[14]+2878612391&4294967295,E=R+(T<<15&4294967295|T>>>17),T=_+(R^(E|~v))+k[5]+4237533241&4294967295,_=E+(T<<21&4294967295|T>>>11),T=v+(E^(_|~R))+k[12]+1700485571&4294967295,v=_+(T<<6&4294967295|T>>>26),T=R+(_^(v|~E))+k[3]+2399980690&4294967295,R=v+(T<<10&4294967295|T>>>22),T=E+(v^(R|~_))+k[10]+4293915773&4294967295,E=R+(T<<15&4294967295|T>>>17),T=_+(R^(E|~v))+k[1]+2240044497&4294967295,_=E+(T<<21&4294967295|T>>>11),T=v+(E^(_|~R))+k[8]+1873313359&4294967295,v=_+(T<<6&4294967295|T>>>26),T=R+(_^(v|~E))+k[15]+4264355552&4294967295,R=v+(T<<10&4294967295|T>>>22),T=E+(v^(R|~_))+k[6]+2734768916&4294967295,E=R+(T<<15&4294967295|T>>>17),T=_+(R^(E|~v))+k[13]+1309151649&4294967295,_=E+(T<<21&4294967295|T>>>11),T=v+(E^(_|~R))+k[4]+4149444226&4294967295,v=_+(T<<6&4294967295|T>>>26),T=R+(_^(v|~E))+k[11]+3174756917&4294967295,R=v+(T<<10&4294967295|T>>>22),T=E+(v^(R|~_))+k[2]+718787259&4294967295,E=R+(T<<15&4294967295|T>>>17),T=_+(R^(E|~v))+k[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(E+(T<<21&4294967295|T>>>11))&4294967295,b.g[2]=b.g[2]+E&4294967295,b.g[3]=b.g[3]+R&4294967295}i.prototype.v=function(b,v){v===void 0&&(v=b.length);const _=v-this.blockSize,k=this.C;let E=this.h,R=0;for(;R<v;){if(E==0)for(;R<=_;)s(this,b,R),R+=this.blockSize;if(typeof b=="string"){for(;R<v;)if(k[E++]=b.charCodeAt(R++),E==this.blockSize){s(this,k),E=0;break}}else for(;R<v;)if(k[E++]=b[R++],E==this.blockSize){s(this,k),E=0;break}}this.h=E,this.o+=v},i.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;v=this.o*8;for(var _=b.length-8;_<b.length;++_)b[_]=v&255,v/=256;for(this.v(b),b=Array(16),v=0,_=0;_<4;++_)for(let k=0;k<32;k+=8)b[v++]=this.g[_]>>>k&255;return b};function r(b,v){var _=c;return Object.prototype.hasOwnProperty.call(_,b)?_[b]:_[b]=v(b)}function o(b,v){this.h=v;const _=[];let k=!0;for(let E=b.length-1;E>=0;E--){const R=b[E]|0;k&&R==v||(_[E]=R,k=!1)}this.g=_}var c={};function l(b){return-128<=b&&b<128?r(b,function(v){return new o([v|0],v<0?-1:0)}):new o([b|0],b<0?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return g;if(b<0)return $(u(-b));const v=[];let _=1;for(let k=0;b>=_;k++)v[k]=b/_|0,_*=4294967296;return new o(v,0)}function p(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return $(p(b.substring(1),v));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=u(Math.pow(v,8));let k=g;for(let R=0;R<b.length;R+=8){var E=Math.min(8,b.length-R);const T=parseInt(b.substring(R,R+E),v);E<8?(E=u(Math.pow(v,E)),k=k.j(E).add(u(T))):(k=k.j(_),k=k.add(u(T)))}return k}var g=l(0),w=l(1),I=l(16777216);n=o.prototype,n.m=function(){if(P(this))return-$(this).m();let b=0,v=1;for(let _=0;_<this.g.length;_++){const k=this.i(_);b+=(k>=0?k:4294967296+k)*v,v*=4294967296}return b},n.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(C(this))return"0";if(P(this))return"-"+$(this).toString(b);const v=u(Math.pow(b,6));var _=this;let k="";for(;;){const E=D(_,v).g;_=U(_,E.j(v));let R=((_.g.length>0?_.g[0]:_.h)>>>0).toString(b);if(_=E,C(_))return R+k;for(;R.length<6;)R="0"+R;k=R+k}},n.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function C(b){if(b.h!=0)return!1;for(let v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function P(b){return b.h==-1}n.l=function(b){return b=U(this,b),P(b)?-1:C(b)?0:1};function $(b){const v=b.g.length,_=[];for(let k=0;k<v;k++)_[k]=~b.g[k];return new o(_,~b.h).add(w)}n.abs=function(){return P(this)?$(this):this},n.add=function(b){const v=Math.max(this.g.length,b.g.length),_=[];let k=0;for(let E=0;E<=v;E++){let R=k+(this.i(E)&65535)+(b.i(E)&65535),T=(R>>>16)+(this.i(E)>>>16)+(b.i(E)>>>16);k=T>>>16,R&=65535,T&=65535,_[E]=T<<16|R}return new o(_,_[_.length-1]&-2147483648?-1:0)};function U(b,v){return b.add($(v))}n.j=function(b){if(C(this)||C(b))return g;if(P(this))return P(b)?$(this).j($(b)):$($(this).j(b));if(P(b))return $(this.j($(b)));if(this.l(I)<0&&b.l(I)<0)return u(this.m()*b.m());const v=this.g.length+b.g.length,_=[];for(var k=0;k<2*v;k++)_[k]=0;for(k=0;k<this.g.length;k++)for(let E=0;E<b.g.length;E++){const R=this.i(k)>>>16,T=this.i(k)&65535,xe=b.i(E)>>>16,pt=b.i(E)&65535;_[2*k+2*E]+=T*pt,N(_,2*k+2*E),_[2*k+2*E+1]+=R*pt,N(_,2*k+2*E+1),_[2*k+2*E+1]+=T*xe,N(_,2*k+2*E+1),_[2*k+2*E+2]+=R*xe,N(_,2*k+2*E+2)}for(b=0;b<v;b++)_[b]=_[2*b+1]<<16|_[2*b];for(b=v;b<2*v;b++)_[b]=0;return new o(_,0)};function N(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function M(b,v){this.g=b,this.h=v}function D(b,v){if(C(v))throw Error("division by zero");if(C(b))return new M(g,g);if(P(b))return v=D($(b),v),new M($(v.g),$(v.h));if(P(v))return v=D(b,$(v)),new M($(v.g),v.h);if(b.g.length>30){if(P(b)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var _=w,k=v;k.l(b)<=0;)_=F(_),k=F(k);var E=j(_,1),R=j(k,1);for(k=j(k,2),_=j(_,2);!C(k);){var T=R.add(k);T.l(b)<=0&&(E=E.add(_),R=T),k=j(k,1),_=j(_,1)}return v=U(b,E.j(v)),new M(E,v)}for(E=g;b.l(v)>=0;){for(_=Math.max(1,Math.floor(b.m()/v.m())),k=Math.ceil(Math.log(_)/Math.LN2),k=k<=48?1:Math.pow(2,k-48),R=u(_),T=R.j(v);P(T)||T.l(b)>0;)_-=k,R=u(_),T=R.j(v);C(R)&&(R=w),E=E.add(R),b=U(b,T)}return new M(E,b)}n.B=function(b){return D(this,b).h},n.and=function(b){const v=Math.max(this.g.length,b.g.length),_=[];for(let k=0;k<v;k++)_[k]=this.i(k)&b.i(k);return new o(_,this.h&b.h)},n.or=function(b){const v=Math.max(this.g.length,b.g.length),_=[];for(let k=0;k<v;k++)_[k]=this.i(k)|b.i(k);return new o(_,this.h|b.h)},n.xor=function(b){const v=Math.max(this.g.length,b.g.length),_=[];for(let k=0;k<v;k++)_[k]=this.i(k)^b.i(k);return new o(_,this.h^b.h)};function F(b){const v=b.g.length+1,_=[];for(let k=0;k<v;k++)_[k]=b.i(k)<<1|b.i(k-1)>>>31;return new o(_,b.h)}function j(b,v){const _=v>>5;v%=32;const k=b.g.length-_,E=[];for(let R=0;R<k;R++)E[R]=v>0?b.i(R+_)>>>v|b.i(R+_+1)<<32-v:b.i(R+_);return new o(E,b.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,Vp=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=p,yn=o}).apply(typeof jd<"u"?jd:typeof self<"u"?self:typeof window<"u"?window:{});var Er=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Up,ms,Fp,Br,rc,Hp,Bp,jp;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Er=="object"&&Er];for(var h=0;h<a.length;++h){var m=a[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var i=t(this);function s(a,h){if(h)e:{var m=i;a=a.split(".");for(var y=0;y<a.length-1;y++){var A=a[y];if(!(A in m))break e;m=m[A]}a=a[a.length-1],y=m[a],h=h(y),h!=y&&h!=null&&e(m,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var m=[],y;for(y in h)Object.prototype.hasOwnProperty.call(h,y)&&m.push([y,h[y]]);return m}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function l(a,h,m){return a.call.apply(a.bind,arguments)}function u(a,h,m){return u=l,u.apply(null,arguments)}function p(a,h){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function g(a,h){function m(){}m.prototype=h.prototype,a.Z=h.prototype,a.prototype=new m,a.prototype.constructor=a,a.Ob=function(y,A,x){for(var O=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)O[Z-2]=arguments[Z];return h.prototype[A].apply(y,O)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function I(a){const h=a.length;if(h>0){const m=Array(h);for(let y=0;y<h;y++)m[y]=a[y];return m}return[]}function C(a,h){for(let y=1;y<arguments.length;y++){const A=arguments[y];var m=typeof A;if(m=m!="object"?m:A?Array.isArray(A)?"array":m:"null",m=="array"||m=="object"&&typeof A.length=="number"){m=a.length||0;const x=A.length||0;a.length=m+x;for(let O=0;O<x;O++)a[m+O]=A[O]}else a.push(A)}}class P{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function $(a){o.setTimeout(()=>{throw a},0)}function U(){var a=b;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class N{constructor(){this.h=this.g=null}add(h,m){const y=M.get();y.set(h,m),this.h?this.h.next=y:this.g=y,this.h=y}}var M=new P(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let F,j=!1,b=new N,v=()=>{const a=Promise.resolve(void 0);F=()=>{a.then(_)}};function _(){for(var a;a=U();){try{a.h.call(a.g)}catch(m){$(m)}var h=M;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}j=!1}function k(){this.u=this.u,this.C=this.C}k.prototype.u=!1,k.prototype.dispose=function(){this.u||(this.u=!0,this.N())},k.prototype[Symbol.dispose]=function(){this.dispose()},k.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var R=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const m=()=>{};o.addEventListener("test",m,h),o.removeEventListener("test",m,h)}catch{}return a})();function T(a){return/^[\s\xa0]*$/.test(a)}function xe(a,h){E.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}g(xe,E),xe.prototype.init=function(a,h){const m=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(m=="mouseover"?h=a.fromElement:m=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&xe.Z.h.call(this)},xe.prototype.h=function(){xe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var pt="closure_listenable_"+(Math.random()*1e6|0),he=0;function $n(a,h,m,y,A){this.listener=a,this.proxy=null,this.src=h,this.type=m,this.capture=!!y,this.ha=A,this.key=++he,this.da=this.fa=!1}function cr(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function lr(a,h,m){for(const y in a)h.call(m,a[y],y,a)}function dy(a,h){for(const m in a)h.call(void 0,a[m],m,a)}function uu(a){const h={};for(const m in a)h[m]=a[m];return h}const du="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function hu(a,h){let m,y;for(let A=1;A<arguments.length;A++){y=arguments[A];for(m in y)a[m]=y[m];for(let x=0;x<du.length;x++)m=du[x],Object.prototype.hasOwnProperty.call(y,m)&&(a[m]=y[m])}}function ur(a){this.src=a,this.g={},this.h=0}ur.prototype.add=function(a,h,m,y,A){const x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);const O=ta(a,h,y,A);return O>-1?(h=a[O],m||(h.fa=!1)):(h=new $n(h,this.src,x,!!y,A),h.fa=m,a.push(h)),h};function ea(a,h){const m=h.type;if(m in a.g){var y=a.g[m],A=Array.prototype.indexOf.call(y,h,void 0),x;(x=A>=0)&&Array.prototype.splice.call(y,A,1),x&&(cr(h),a.g[m].length==0&&(delete a.g[m],a.h--))}}function ta(a,h,m,y){for(let A=0;A<a.length;++A){const x=a[A];if(!x.da&&x.listener==h&&x.capture==!!m&&x.ha==y)return A}return-1}var na="closure_lm_"+(Math.random()*1e6|0),ia={};function fu(a,h,m,y,A){if(Array.isArray(h)){for(let x=0;x<h.length;x++)fu(a,h[x],m,y,A);return null}return m=gu(m),a&&a[pt]?a.J(h,m,c(y)?!!y.capture:!1,A):hy(a,h,m,!1,y,A)}function hy(a,h,m,y,A,x){if(!h)throw Error("Invalid event type");const O=c(A)?!!A.capture:!!A;let Z=ra(a);if(Z||(a[na]=Z=new ur(a)),m=Z.add(h,m,y,O,x),m.proxy)return m;if(y=fy(),m.proxy=y,y.src=a,y.listener=m,a.addEventListener)R||(A=O),A===void 0&&(A=!1),a.addEventListener(h.toString(),y,A);else if(a.attachEvent)a.attachEvent(mu(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function fy(){function a(m){return h.call(a.src,a.listener,m)}const h=py;return a}function pu(a,h,m,y,A){if(Array.isArray(h))for(var x=0;x<h.length;x++)pu(a,h[x],m,y,A);else y=c(y)?!!y.capture:!!y,m=gu(m),a&&a[pt]?(a=a.i,x=String(h).toString(),x in a.g&&(h=a.g[x],m=ta(h,m,y,A),m>-1&&(cr(h[m]),Array.prototype.splice.call(h,m,1),h.length==0&&(delete a.g[x],a.h--)))):a&&(a=ra(a))&&(h=a.g[h.toString()],a=-1,h&&(a=ta(h,m,y,A)),(m=a>-1?h[a]:null)&&sa(m))}function sa(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[pt])ea(h.i,a);else{var m=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(m,y,a.capture):h.detachEvent?h.detachEvent(mu(m),y):h.addListener&&h.removeListener&&h.removeListener(y),(m=ra(h))?(ea(m,a),m.h==0&&(m.src=null,h[na]=null)):cr(a)}}}function mu(a){return a in ia?ia[a]:ia[a]="on"+a}function py(a,h){if(a.da)a=!0;else{h=new xe(h,this);const m=a.listener,y=a.ha||a.src;a.fa&&sa(a),a=m.call(y,h)}return a}function ra(a){return a=a[na],a instanceof ur?a:null}var oa="__closure_events_fn_"+(Math.random()*1e9>>>0);function gu(a){return typeof a=="function"?a:(a[oa]||(a[oa]=function(h){return a.handleEvent(h)}),a[oa])}function Ue(){k.call(this),this.i=new ur(this),this.M=this,this.G=null}g(Ue,k),Ue.prototype[pt]=!0,Ue.prototype.removeEventListener=function(a,h,m,y){pu(this,a,h,m,y)};function qe(a,h){var m,y=a.G;if(y)for(m=[];y;y=y.G)m.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new E(h,a);else if(h instanceof E)h.target=h.target||a;else{var A=h;h=new E(y,a),hu(h,A)}A=!0;let x,O;if(m)for(O=m.length-1;O>=0;O--)x=h.g=m[O],A=dr(x,y,!0,h)&&A;if(x=h.g=a,A=dr(x,y,!0,h)&&A,A=dr(x,y,!1,h)&&A,m)for(O=0;O<m.length;O++)x=h.g=m[O],A=dr(x,y,!1,h)&&A}Ue.prototype.N=function(){if(Ue.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const m=a.g[h];for(let y=0;y<m.length;y++)cr(m[y]);delete a.g[h],a.h--}}this.G=null},Ue.prototype.J=function(a,h,m,y){return this.i.add(String(a),h,!1,m,y)},Ue.prototype.K=function(a,h,m,y){return this.i.add(String(a),h,!0,m,y)};function dr(a,h,m,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let A=!0;for(let x=0;x<h.length;++x){const O=h[x];if(O&&!O.da&&O.capture==m){const Z=O.listener,Se=O.ha||O.src;O.fa&&ea(a.i,O),A=Z.call(Se,y)!==!1&&A}}return A&&!y.defaultPrevented}function my(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function yu(a){a.g=my(()=>{a.g=null,a.i&&(a.i=!1,yu(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class gy extends k{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:yu(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gi(a){k.call(this),this.h=a,this.g={}}g(Gi,k);var vu=[];function wu(a){lr(a.g,function(h,m){this.g.hasOwnProperty(m)&&sa(h)},a),a.g={}}Gi.prototype.N=function(){Gi.Z.N.call(this),wu(this)},Gi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var aa=o.JSON.stringify,yy=o.JSON.parse,vy=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function _u(){}function bu(){}var Ki={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ca(){E.call(this,"d")}g(ca,E);function la(){E.call(this,"c")}g(la,E);var Ln={},Tu=null;function hr(){return Tu=Tu||new Ue}Ln.Ia="serverreachability";function Iu(a){E.call(this,Ln.Ia,a)}g(Iu,E);function Qi(a){const h=hr();qe(h,new Iu(h))}Ln.STAT_EVENT="statevent";function Eu(a,h){E.call(this,Ln.STAT_EVENT,a),this.stat=h}g(Eu,E);function We(a){const h=hr();qe(h,new Eu(h,a))}Ln.Ja="timingevent";function ku(a,h){E.call(this,Ln.Ja,a),this.size=h}g(ku,E);function Yi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Ji(){this.g=!0}Ji.prototype.ua=function(){this.g=!1};function wy(a,h,m,y,A,x){a.info(function(){if(a.g)if(x){var O="",Z=x.split("&");for(let ce=0;ce<Z.length;ce++){var Se=Z[ce].split("=");if(Se.length>1){const Pe=Se[0];Se=Se[1];const gt=Pe.split("_");O=gt.length>=2&&gt[1]=="type"?O+(Pe+"="+Se+"&"):O+(Pe+"=redacted&")}}}else O=null;else O=x;return"XMLHTTP REQ ("+y+") [attempt "+A+"]: "+h+`
`+m+`
`+O})}function _y(a,h,m,y,A,x,O){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+A+"]: "+h+`
`+m+`
`+x+" "+O})}function ri(a,h,m,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Ty(a,m)+(y?" "+y:"")})}function by(a,h){a.info(function(){return"TIMEOUT: "+h})}Ji.prototype.info=function(){};function Ty(a,h){if(!a.g)return h;if(!h)return null;try{const x=JSON.parse(h);if(x){for(a=0;a<x.length;a++)if(Array.isArray(x[a])){var m=x[a];if(!(m.length<2)){var y=m[1];if(Array.isArray(y)&&!(y.length<1)){var A=y[0];if(A!="noop"&&A!="stop"&&A!="close")for(let O=1;O<y.length;O++)y[O]=""}}}}return aa(x)}catch{return h}}var fr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Su={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Cu;function ua(){}g(ua,_u),ua.prototype.g=function(){return new XMLHttpRequest},Cu=new ua;function Xi(a){return encodeURIComponent(String(a))}function Iy(a){var h=1;a=a.split(":");const m=[];for(;h>0&&a.length;)m.push(a.shift()),h--;return a.length&&m.push(a.join(":")),m}function Gt(a,h,m,y){this.j=a,this.i=h,this.l=m,this.S=y||1,this.V=new Gi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ru}function Ru(){this.i=null,this.g="",this.h=!1}var Au={},da={};function ha(a,h,m){a.M=1,a.A=mr(mt(h)),a.u=m,a.R=!0,xu(a,null)}function xu(a,h){a.F=Date.now(),pr(a),a.B=mt(a.A);var m=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),ju(m.i,"t",y),a.C=0,m=a.j.L,a.h=new Ru,a.g=ad(a.j,m?h:null,!a.u),a.P>0&&(a.O=new gy(u(a.Y,a,a.g),a.P)),h=a.V,m=a.g,y=a.ba;var A="readystatechange";Array.isArray(A)||(A&&(vu[0]=A.toString()),A=vu);for(let x=0;x<A.length;x++){const O=fu(m,A[x],y||h.handleEvent,!1,h.h||h);if(!O)break;h.g[O.key]=O}h=a.J?uu(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Qi(),wy(a.i,a.v,a.B,a.l,a.S,a.u)}Gt.prototype.ba=function(a){a=a.target;const h=this.O;h&&Yt(a)==3?h.j():this.Y(a)},Gt.prototype.Y=function(a){try{if(a==this.g)e:{const Z=Yt(this.g),Se=this.g.ya(),ce=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||Yu(this.g)))){this.K||Z!=4||Se==7||(Se==8||ce<=0?Qi(3):Qi(2)),fa(this);var h=this.g.ca();this.X=h;var m=Ey(this);if(this.o=h==200,_y(this.i,this.v,this.B,this.l,this.S,Z,h),this.o){if(this.U&&!this.L){t:{if(this.g){var y,A=this.g;if((y=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(y)){var x=y;break t}}x=null}if(a=x)ri(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,pa(this,a);else{this.o=!1,this.m=3,We(12),Dn(this),Zi(this);break e}}if(this.R){a=!0;let Pe;for(;!this.K&&this.C<m.length;)if(Pe=ky(this,m),Pe==da){Z==4&&(this.m=4,We(14),a=!1),ri(this.i,this.l,null,"[Incomplete Response]");break}else if(Pe==Au){this.m=4,We(15),ri(this.i,this.l,m,"[Invalid Chunk]"),a=!1;break}else ri(this.i,this.l,Pe,null),pa(this,Pe);if(Pu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||m.length!=0||this.h.h||(this.m=1,We(16),a=!1),this.o=this.o&&a,!a)ri(this.i,this.l,m,"[Invalid Chunked Response]"),Dn(this),Zi(this);else if(m.length>0&&!this.W){this.W=!0;var O=this.j;O.g==this&&O.aa&&!O.P&&(O.j.info("Great, no buffering proxy detected. Bytes received: "+m.length),Ta(O),O.P=!0,We(11))}}else ri(this.i,this.l,m,null),pa(this,m);Z==4&&Dn(this),this.o&&!this.K&&(Z==4?id(this.j,this):(this.o=!1,pr(this)))}else Uy(this.g),h==400&&m.indexOf("Unknown SID")>0?(this.m=3,We(12)):(this.m=0,We(13)),Dn(this),Zi(this)}}}catch{}finally{}};function Ey(a){if(!Pu(a))return a.g.la();const h=Yu(a.g);if(h==="")return"";let m="";const y=h.length,A=Yt(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Dn(a),Zi(a),"";a.h.i=new o.TextDecoder}for(let x=0;x<y;x++)a.h.h=!0,m+=a.h.i.decode(h[x],{stream:!(A&&x==y-1)});return h.length=0,a.h.g+=m,a.C=0,a.h.g}function Pu(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function ky(a,h){var m=a.C,y=h.indexOf(`
`,m);return y==-1?da:(m=Number(h.substring(m,y)),isNaN(m)?Au:(y+=1,y+m>h.length?da:(h=h.slice(y,y+m),a.C=y+m,h)))}Gt.prototype.cancel=function(){this.K=!0,Dn(this)};function pr(a){a.T=Date.now()+a.H,$u(a,a.H)}function $u(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Yi(u(a.aa,a),h)}function fa(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Gt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(by(this.i,this.B),this.M!=2&&(Qi(),We(17)),Dn(this),this.m=2,Zi(this)):$u(this,this.T-a)};function Zi(a){a.j.I==0||a.K||id(a.j,a)}function Dn(a){fa(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,wu(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function pa(a,h){try{var m=a.j;if(m.I!=0&&(m.g==a||ma(m.h,a))){if(!a.L&&ma(m.h,a)&&m.I==3){try{var y=m.Ba.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var A=y;if(A[0]==0){e:if(!m.v){if(m.g)if(m.g.F+3e3<a.F)_r(m),vr(m);else break e;ba(m),We(18)}}else m.xa=A[1],0<m.xa-m.K&&A[2]<37500&&m.F&&m.A==0&&!m.C&&(m.C=Yi(u(m.Va,m),6e3));Nu(m.h)<=1&&m.ta&&(m.ta=void 0)}else Mn(m,11)}else if((a.L||m.g==a)&&_r(m),!T(h))for(A=m.Ba.g.parse(h),h=0;h<A.length;h++){let ce=A[h];const Pe=ce[0];if(!(Pe<=m.K))if(m.K=Pe,ce=ce[1],m.I==2)if(ce[0]=="c"){m.M=ce[1],m.ba=ce[2];const gt=ce[3];gt!=null&&(m.ka=gt,m.j.info("VER="+m.ka));const On=ce[4];On!=null&&(m.za=On,m.j.info("SVER="+m.za));const Jt=ce[5];Jt!=null&&typeof Jt=="number"&&Jt>0&&(y=1.5*Jt,m.O=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const Xt=a.g;if(Xt){const Tr=Xt.g?Xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Tr){var x=y.h;x.g||Tr.indexOf("spdy")==-1&&Tr.indexOf("quic")==-1&&Tr.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(ga(x,x.h),x.h=null))}if(y.G){const Ia=Xt.g?Xt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ia&&(y.wa=Ia,de(y.J,y.G,Ia))}}m.I=3,m.l&&m.l.ra(),m.aa&&(m.T=Date.now()-a.F,m.j.info("Handshake RTT: "+m.T+"ms")),y=m;var O=a;if(y.na=od(y,y.L?y.ba:null,y.W),O.L){Mu(y.h,O);var Z=O,Se=y.O;Se&&(Z.H=Se),Z.D&&(fa(Z),pr(Z)),y.g=O}else td(y);m.i.length>0&&wr(m)}else ce[0]!="stop"&&ce[0]!="close"||Mn(m,7);else m.I==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Mn(m,7):_a(m):ce[0]!="noop"&&m.l&&m.l.qa(ce),m.A=0)}}Qi(4)}catch{}}var Sy=class{constructor(a,h){this.g=a,this.map=h}};function Lu(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Du(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Nu(a){return a.h?1:a.g?a.g.size:0}function ma(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ga(a,h){a.g?a.g.add(h):a.h=h}function Mu(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Lu.prototype.cancel=function(){if(this.i=Ou(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ou(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const m of a.g.values())h=h.concat(m.G);return h}return I(a.i)}var Vu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cy(a,h){if(a){a=a.split("&");for(let m=0;m<a.length;m++){const y=a[m].indexOf("=");let A,x=null;y>=0?(A=a[m].substring(0,y),x=a[m].substring(y+1)):A=a[m],h(A,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Kt(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Kt?(this.l=a.l,es(this,a.j),this.o=a.o,this.g=a.g,ts(this,a.u),this.h=a.h,ya(this,zu(a.i)),this.m=a.m):a&&(h=String(a).match(Vu))?(this.l=!1,es(this,h[1]||"",!0),this.o=ns(h[2]||""),this.g=ns(h[3]||"",!0),ts(this,h[4]),this.h=ns(h[5]||"",!0),ya(this,h[6]||"",!0),this.m=ns(h[7]||"")):(this.l=!1,this.i=new ss(null,this.l))}Kt.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(is(h,Uu,!0),":");var m=this.g;return(m||h=="file")&&(a.push("//"),(h=this.o)&&a.push(is(h,Uu,!0),"@"),a.push(Xi(m).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.u,m!=null&&a.push(":",String(m))),(m=this.h)&&(this.g&&m.charAt(0)!="/"&&a.push("/"),a.push(is(m,m.charAt(0)=="/"?xy:Ay,!0))),(m=this.i.toString())&&a.push("?",m),(m=this.m)&&a.push("#",is(m,$y)),a.join("")},Kt.prototype.resolve=function(a){const h=mt(this);let m=!!a.j;m?es(h,a.j):m=!!a.o,m?h.o=a.o:m=!!a.g,m?h.g=a.g:m=a.u!=null;var y=a.h;if(m)ts(h,a.u);else if(m=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var A=h.h.lastIndexOf("/");A!=-1&&(y=h.h.slice(0,A+1)+y)}if(A=y,A==".."||A==".")y="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){y=A.lastIndexOf("/",0)==0,A=A.split("/");const x=[];for(let O=0;O<A.length;){const Z=A[O++];Z=="."?y&&O==A.length&&x.push(""):Z==".."?((x.length>1||x.length==1&&x[0]!="")&&x.pop(),y&&O==A.length&&x.push("")):(x.push(Z),y=!0)}y=x.join("/")}else y=A}return m?h.h=y:m=a.i.toString()!=="",m?ya(h,zu(a.i)):m=!!a.m,m&&(h.m=a.m),h};function mt(a){return new Kt(a)}function es(a,h,m){a.j=m?ns(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ts(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function ya(a,h,m){h instanceof ss?(a.i=h,Ly(a.i,a.l)):(m||(h=is(h,Py)),a.i=new ss(h,a.l))}function de(a,h,m){a.i.set(h,m)}function mr(a){return de(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function ns(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function is(a,h,m){return typeof a=="string"?(a=encodeURI(a).replace(h,Ry),m&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Ry(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Uu=/[#\/\?@]/g,Ay=/[#\?:]/g,xy=/[#\?]/g,Py=/[#\?@]/g,$y=/#/g;function ss(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Nn(a){a.g||(a.g=new Map,a.h=0,a.i&&Cy(a.i,function(h,m){a.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}n=ss.prototype,n.add=function(a,h){Nn(this),this.i=null,a=oi(this,a);let m=this.g.get(a);return m||this.g.set(a,m=[]),m.push(h),this.h+=1,this};function Fu(a,h){Nn(a),h=oi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Hu(a,h){return Nn(a),h=oi(a,h),a.g.has(h)}n.forEach=function(a,h){Nn(this),this.g.forEach(function(m,y){m.forEach(function(A){a.call(h,A,y,this)},this)},this)};function Bu(a,h){Nn(a);let m=[];if(typeof h=="string")Hu(a,h)&&(m=m.concat(a.g.get(oi(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)m=m.concat(a[h]);return m}n.set=function(a,h){return Nn(this),this.i=null,a=oi(this,a),Hu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=Bu(this,a),a.length>0?String(a[0]):h):h};function ju(a,h,m){Fu(a,h),m.length>0&&(a.i=null,a.g.set(oi(a,h),I(m)),a.h+=m.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let y=0;y<h.length;y++){var m=h[y];const A=Xi(m);m=Bu(this,m);for(let x=0;x<m.length;x++){let O=A;m[x]!==""&&(O+="="+Xi(m[x])),a.push(O)}}return this.i=a.join("&")};function zu(a){const h=new ss;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function oi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Ly(a,h){h&&!a.j&&(Nn(a),a.i=null,a.g.forEach(function(m,y){const A=y.toLowerCase();y!=A&&(Fu(this,y),ju(this,A,m))},a)),a.j=h}function Dy(a,h){const m=new Ji;if(o.Image){const y=new Image;y.onload=p(Qt,m,"TestLoadImage: loaded",!0,h,y),y.onerror=p(Qt,m,"TestLoadImage: error",!1,h,y),y.onabort=p(Qt,m,"TestLoadImage: abort",!1,h,y),y.ontimeout=p(Qt,m,"TestLoadImage: timeout",!1,h,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function Ny(a,h){const m=new Ji,y=new AbortController,A=setTimeout(()=>{y.abort(),Qt(m,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(x=>{clearTimeout(A),x.ok?Qt(m,"TestPingServer: ok",!0,h):Qt(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(A),Qt(m,"TestPingServer: error",!1,h)})}function Qt(a,h,m,y,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),y(m)}catch{}}function My(){this.g=new vy}function va(a){this.i=a.Sb||null,this.h=a.ab||!1}g(va,_u),va.prototype.g=function(){return new gr(this.i,this.h)};function gr(a,h){Ue.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(gr,Ue),n=gr.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,os(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,rs(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,os(this)),this.g&&(this.readyState=3,os(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;qu(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function qu(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?rs(this):os(this),this.readyState==3&&qu(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,rs(this))},n.Na=function(a){this.g&&(this.response=a,rs(this))},n.ga=function(){this.g&&rs(this)};function rs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,os(a)}n.setRequestHeader=function(a,h){this.A.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,a.push(m[0]+": "+m[1]),m=h.next();return a.join(`\r
`)};function os(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(gr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Wu(a){let h="";return lr(a,function(m,y){h+=y,h+=":",h+=m,h+=`\r
`}),h}function wa(a,h,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=Wu(m),typeof a=="string"?m!=null&&Xi(m):de(a,h,m))}function ge(a){Ue.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(ge,Ue);var Oy=/^https?$/i,Vy=["POST","PUT"];n=ge.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,h,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Cu.g(),this.g.onreadystatechange=w(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(x){Gu(this,x);return}if(a=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var A in y)m.set(A,y[A]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const x of y.keys())m.set(x,y.get(x));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(x=>x.toLowerCase()=="content-type"),A=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Vy,h,void 0)>=0)||y||A||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,O]of m)this.g.setRequestHeader(x,O);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(x){Gu(this,x)}};function Gu(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Ku(a),yr(a)}function Ku(a){a.A||(a.A=!0,qe(a,"complete"),qe(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,qe(this,"complete"),qe(this,"abort"),yr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yr(this,!0)),ge.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Qu(this):this.Xa())},n.Xa=function(){Qu(this)};function Qu(a){if(a.h&&typeof r<"u"){if(a.v&&Yt(a)==4)setTimeout(a.Ca.bind(a),0);else if(qe(a,"readystatechange"),Yt(a)==4){a.h=!1;try{const x=a.ca();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var y;if(y=x===0){let O=String(a.D).match(Vu)[1]||null;!O&&o.self&&o.self.location&&(O=o.self.location.protocol.slice(0,-1)),y=!Oy.test(O?O.toLowerCase():"")}m=y}if(m)qe(a,"complete"),qe(a,"success");else{a.o=6;try{var A=Yt(a)>2?a.g.statusText:""}catch{A=""}a.l=A+" ["+a.ca()+"]",Ku(a)}}finally{yr(a)}}}}function yr(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const m=a.g;a.g=null,h||qe(a,"ready");try{m.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Yt(a){return a.g?a.g.readyState:0}n.ca=function(){try{return Yt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),yy(h)}};function Yu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Uy(a){const h={};a=(a.g&&Yt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(T(a[y]))continue;var m=Iy(a[y]);const A=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const x=h[A]||[];h[A]=x,x.push(m)}dy(h,function(y){return y.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function as(a,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[a]||h}function Ju(a){this.za=0,this.i=[],this.j=new Ji,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=as("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=as("baseRetryDelayMs",5e3,a),this.Za=as("retryDelaySeedMs",1e4,a),this.Ta=as("forwardChannelMaxRetries",2,a),this.va=as("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Lu(a&&a.concurrentRequestLimit),this.Ba=new My,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Ju.prototype,n.ka=8,n.I=1,n.connect=function(a,h,m,y){We(0),this.W=a,this.H=h||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.J=od(this,null,this.W),wr(this)};function _a(a){if(Xu(a),a.I==3){var h=a.V++,m=mt(a.J);if(de(m,"SID",a.M),de(m,"RID",h),de(m,"TYPE","terminate"),cs(a,m),h=new Gt(a,a.j,h),h.M=2,h.A=mr(mt(m)),m=!1,o.navigator&&o.navigator.sendBeacon)try{m=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!m&&o.Image&&(new Image().src=h.A,m=!0),m||(h.g=ad(h.j,null),h.g.ea(h.A)),h.F=Date.now(),pr(h)}rd(a)}function vr(a){a.g&&(Ta(a),a.g.cancel(),a.g=null)}function Xu(a){vr(a),a.v&&(o.clearTimeout(a.v),a.v=null),_r(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function wr(a){if(!Du(a.h)&&!a.m){a.m=!0;var h=a.Ea;F||v(),j||(F(),j=!0),b.add(h,a),a.D=0}}function Fy(a,h){return Nu(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Yi(u(a.Ea,a,h),sd(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const A=new Gt(this,this.j,a);let x=this.o;if(this.U&&(x?(x=uu(x),hu(x,this.U)):x=this.U),this.u!==null||this.R||(A.J=x,x=null),this.S)e:{for(var h=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,h>4096){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=ed(this,A,h),m=mt(this.J),de(m,"RID",a),de(m,"CVER",22),this.G&&de(m,"X-HTTP-Session-Id",this.G),cs(this,m),x&&(this.R?h="headers="+Xi(Wu(x))+"&"+h:this.u&&wa(m,this.u,x)),ga(this.h,A),this.Ra&&de(m,"TYPE","init"),this.S?(de(m,"$req",h),de(m,"SID","null"),A.U=!0,ha(A,m,null)):ha(A,m,h),this.I=2}}else this.I==3&&(a?Zu(this,a):this.i.length==0||Du(this.h)||Zu(this))};function Zu(a,h){var m;h?m=h.l:m=a.V++;const y=mt(a.J);de(y,"SID",a.M),de(y,"RID",m),de(y,"AID",a.K),cs(a,y),a.u&&a.o&&wa(y,a.u,a.o),m=new Gt(a,a.j,m,a.D+1),a.u===null&&(m.J=a.o),h&&(a.i=h.G.concat(a.i)),h=ed(a,m,1e3),m.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),ga(a.h,m),ha(m,y,h)}function cs(a,h){a.H&&lr(a.H,function(m,y){de(h,y,m)}),a.l&&lr({},function(m,y){de(h,y,m)})}function ed(a,h,m){m=Math.min(a.i.length,m);const y=a.l?u(a.l.Ka,a.l,a):null;e:{var A=a.i;let Z=-1;for(;;){const Se=["count="+m];Z==-1?m>0?(Z=A[0].g,Se.push("ofs="+Z)):Z=0:Se.push("ofs="+Z);let ce=!0;for(let Pe=0;Pe<m;Pe++){var x=A[Pe].g;const gt=A[Pe].map;if(x-=Z,x<0)Z=Math.max(0,A[Pe].g-100),ce=!1;else try{x="req"+x+"_"||"";try{var O=gt instanceof Map?gt:Object.entries(gt);for(const[On,Jt]of O){let Xt=Jt;c(Jt)&&(Xt=aa(Jt)),Se.push(x+On+"="+encodeURIComponent(Xt))}}catch(On){throw Se.push(x+"type="+encodeURIComponent("_badmap")),On}}catch{y&&y(gt)}}if(ce){O=Se.join("&");break e}}O=void 0}return a=a.i.splice(0,m),h.G=a,O}function td(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;F||v(),j||(F(),j=!0),b.add(h,a),a.A=0}}function ba(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Yi(u(a.Da,a),sd(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,nd(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Yi(u(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,We(10),vr(this),nd(this))};function Ta(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function nd(a){a.g=new Gt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=mt(a.na);de(h,"RID","rpc"),de(h,"SID",a.M),de(h,"AID",a.K),de(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&de(h,"TO",a.ia),de(h,"TYPE","xmlhttp"),cs(a,h),a.u&&a.o&&wa(h,a.u,a.o),a.O&&(a.g.H=a.O);var m=a.g;a=a.ba,m.M=1,m.A=mr(mt(h)),m.u=null,m.R=!0,xu(m,a)}n.Va=function(){this.C!=null&&(this.C=null,vr(this),ba(this),We(19))};function _r(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function id(a,h){var m=null;if(a.g==h){_r(a),Ta(a),a.g=null;var y=2}else if(ma(a.h,h))m=h.G,Mu(a.h,h),y=1;else return;if(a.I!=0){if(h.o)if(y==1){m=h.u?h.u.length:0,h=Date.now()-h.F;var A=a.D;y=hr(),qe(y,new ku(y,m)),wr(a)}else td(a);else if(A=h.m,A==3||A==0&&h.X>0||!(y==1&&Fy(a,h)||y==2&&ba(a)))switch(m&&m.length>0&&(h=a.h,h.i=h.i.concat(m)),A){case 1:Mn(a,5);break;case 4:Mn(a,10);break;case 3:Mn(a,6);break;default:Mn(a,2)}}}function sd(a,h){let m=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(m*=2),m*h}function Mn(a,h){if(a.j.info("Error code "+h),h==2){var m=u(a.bb,a),y=a.Ua;const A=!y;y=new Kt(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||es(y,"https"),mr(y),A?Dy(y.toString(),m):Ny(y.toString(),m)}else We(2);a.I=0,a.l&&a.l.pa(h),rd(a),Xu(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),We(2)):(this.j.info("Failed to ping google.com"),We(1))};function rd(a){if(a.I=0,a.ja=[],a.l){const h=Ou(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ja,h),C(a.ja,a.i),a.h.i.length=0,I(a.i),a.i.length=0),a.l.oa()}}function od(a,h,m){var y=m instanceof Kt?mt(m):new Kt(m);if(y.g!="")h&&(y.g=h+"."+y.g),ts(y,y.u);else{var A=o.location;y=A.protocol,h=h?h+"."+A.hostname:A.hostname,A=+A.port;const x=new Kt(null);y&&es(x,y),h&&(x.g=h),A&&ts(x,A),m&&(x.h=m),y=x}return m=a.G,h=a.wa,m&&h&&de(y,m,h),de(y,"VER",a.ka),cs(a,y),y}function ad(a,h,m){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new ge(new va({ab:m})):new ge(a.ma),h.Fa(a.L),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function cd(){}n=cd.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function br(){}br.prototype.g=function(a,h){return new et(a,h)};function et(a,h){Ue.call(this),this.g=new Ju(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!T(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!T(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ai(this)}g(et,Ue),et.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},et.prototype.close=function(){_a(this.g)},et.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var m={};m.__data__=a,a=m}else this.v&&(m={},m.__data__=aa(a),a=m);h.i.push(new Sy(h.Ya++,a)),h.I==3&&wr(h)},et.prototype.N=function(){this.g.l=null,delete this.j,_a(this.g),delete this.g,et.Z.N.call(this)};function ld(a){ca.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const m in h){a=m;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}g(ld,ca);function ud(){la.call(this),this.status=1}g(ud,la);function ai(a){this.g=a}g(ai,cd),ai.prototype.ra=function(){qe(this.g,"a")},ai.prototype.qa=function(a){qe(this.g,new ld(a))},ai.prototype.pa=function(a){qe(this.g,new ud)},ai.prototype.oa=function(){qe(this.g,"b")},br.prototype.createWebChannel=br.prototype.g,et.prototype.send=et.prototype.o,et.prototype.open=et.prototype.m,et.prototype.close=et.prototype.close,jp=function(){return new br},Bp=function(){return hr()},Hp=Ln,rc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},fr.NO_ERROR=0,fr.TIMEOUT=8,fr.HTTP_ERROR=6,Br=fr,Su.COMPLETE="complete",Fp=Su,bu.EventType=Ki,Ki.OPEN="a",Ki.CLOSE="b",Ki.ERROR="c",Ki.MESSAGE="d",Ue.prototype.listen=Ue.prototype.J,ms=bu,ge.prototype.listenOnce=ge.prototype.K,ge.prototype.getLastError=ge.prototype.Ha,ge.prototype.getLastErrorCode=ge.prototype.ya,ge.prototype.getStatus=ge.prototype.ca,ge.prototype.getResponseJson=ge.prototype.La,ge.prototype.getResponseText=ge.prototype.la,ge.prototype.send=ge.prototype.ea,ge.prototype.setWithCredentials=ge.prototype.Fa,Up=ge}).apply(typeof Er<"u"?Er:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class He{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}He.UNAUTHENTICATED=new He(null),He.GOOGLE_CREDENTIALS=new He("google-credentials-uid"),He.FIRST_PARTY=new He("first-party-uid"),He.MOCK_USER=new He("mock-user");/**
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
 */let Hi="12.10.0";function nT(n){Hi=n}/**
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
 */const Jn=new Uc("@firebase/firestore");function li(){return Jn.logLevel}function H(n,...e){if(Jn.logLevel<=ee.DEBUG){const t=e.map(dl);Jn.debug(`Firestore (${Hi}): ${n}`,...t)}}function qt(n,...e){if(Jn.logLevel<=ee.ERROR){const t=e.map(dl);Jn.error(`Firestore (${Hi}): ${n}`,...t)}}function Xn(n,...e){if(Jn.logLevel<=ee.WARN){const t=e.map(dl);Jn.warn(`Firestore (${Hi}): ${n}`,...t)}}function dl(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function J(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,zp(n,i,t)}function zp(n,e,t){let i=`FIRESTORE (${Hi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw qt(i),new Error(i)}function me(n,e,t,i){let s="Unexpected state";typeof t=="string"?s=t:i=t,n||zp(e,s,i)}function ie(n,e){return n}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Dt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class gi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class qp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(He.UNAUTHENTICATED)))}shutdown(){}}class sT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class rT{constructor(e){this.t=e,this.currentUser=He.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){me(this.o===void 0,42304);let i=this.i;const s=l=>this.i!==i?(i=this.i,t(l)):Promise.resolve();let r=new gi;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new gi,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=r;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new gi)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(me(typeof i.accessToken=="string",31837,{l:i}),new qp(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string",2055,{h:e}),new He(e)}}class oT{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=He.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class aT{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new oT(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(He.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class zd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cT{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ke(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){me(this.o===void 0,3512);const i=r=>{r.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable((()=>i(r)))};const s=r=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>s(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?s(r):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new zd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(me(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new zd(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function lT(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class Wp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=lT(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%62))}return i}}function te(n,e){return n<e?-1:n>e?1:0}function oc(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const s=n.charAt(i),r=e.charAt(i);if(s!==r)return $a(s)===$a(r)?te(s,r):$a(s)?1:-1}return te(n.length,e.length)}const uT=55296,dT=57343;function $a(n){const e=n.charCodeAt(0);return e>=uT&&e<=dT}function Ci(n,e,t){return n.length===e.length&&n.every(((i,s)=>t(i,e[s])))}/**
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
 */const qd="__name__";class wt{constructor(e,t,i){t===void 0?t=0:t>e.length&&J(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&J(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return wt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof wt?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=wt.compareSegments(e.get(s),t.get(s));if(r!==0)return r}return te(e.length,t.length)}static compareSegments(e,t){const i=wt.isNumericId(e),s=wt.isNumericId(t);return i&&!s?-1:!i&&s?1:i&&s?wt.extractNumericId(e).compare(wt.extractNumericId(t)):oc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return yn.fromString(e.substring(4,e.length-2))}}class fe extends wt{construct(e,t,i){return new fe(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new q(V.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((s=>s.length>0)))}return new fe(t)}static emptyPath(){return new fe([])}}const hT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends wt{construct(e,t,i){return new Qe(e,t,i)}static isValidIdentifier(e){return hT.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===qd}static keyField(){return new Qe([qd])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new q(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new q(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new q(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(i+=c,s++):(r(),s++)}if(r(),o)throw new q(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qe(t)}static emptyPath(){return new Qe([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(fe.fromString(e))}static fromName(e){return new K(fe.fromString(e).popFirst(5))}static empty(){return new K(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return fe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new fe(e.slice()))}}/**
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
 */function fT(n,e,t){if(!t)throw new q(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function pT(n,e,t,i){if(e===!0&&i===!0)throw new q(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Wd(n){if(K.isDocumentKey(n))throw new q(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function mT(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function gT(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":J(12329,{type:typeof n})}function jr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new q(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=gT(n);throw new q(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Ee(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ys(n,e){if(!mT(n))throw new q(V.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const s=e[i].typeString,r="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const o=n[i];if(s&&typeof o!==s){t=`JSON field '${i}' must be a ${s}.`;break}if(r!==void 0&&o!==r.value){t=`Expected '${i}' field to equal '${r.value}'`;break}}if(t)throw new q(V.INVALID_ARGUMENT,t);return!0}/**
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
 */const Gd=-62135596800,Kd=1e6;class Ie{static now(){return Ie.fromMillis(Date.now())}static fromDate(e){return Ie.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Kd);return new Ie(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Gd)throw new q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Kd}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ie._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ys(e,Ie._jsonSchema))return new Ie(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Gd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ie._jsonSchemaVersion="firestore/timestamp/1.0",Ie._jsonSchema={type:Ee("string",Ie._jsonSchemaVersion),seconds:Ee("number"),nanoseconds:Ee("number")};/**
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
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Ie(0,0))}static max(){return new Y(new Ie(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ds=-1;function yT(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(i===1e9?new Ie(t+1,0):new Ie(t,i));return new En(s,K.empty(),e)}function vT(n){return new En(n.readTime,n.key,Ds)}class En{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new En(Y.min(),K.empty(),Ds)}static max(){return new En(Y.max(),K.empty(),Ds)}}function wT(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=K.comparator(n.documentKey,e.documentKey),t!==0?t:te(n.largestBatchId,e.largestBatchId))}/**
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
 */const _T="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function No(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==_T)throw n;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&J(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new L(((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof L?t:L.resolve(t)}catch(t){return L.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):L.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):L.reject(t)}static resolve(e){return new L(((t,i)=>{t(e)}))}static reject(e){return new L(((t,i)=>{i(e)}))}static waitFor(e){return new L(((t,i)=>{let s=0,r=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++r,o&&r===s&&t()}),(l=>i(l)))})),o=!0,r===s&&t()}))}static or(e){let t=L.resolve(!1);for(const i of e)t=t.next((s=>s?L.resolve(s):i()));return t}static forEach(e,t){const i=[];return e.forEach(((s,r)=>{i.push(t.call(this,s,r))})),this.waitFor(i)}static mapArray(e,t){return new L(((i,s)=>{const r=e.length,o=new Array(r);let c=0;for(let l=0;l<r;l++){const u=l;t(e[u]).next((p=>{o[u]=p,++c,c===r&&i(o)}),(p=>s(p)))}}))}static doWhile(e,t){return new L(((i,s)=>{const r=()=>{e()===!0?t().next((()=>{r()}),s):i()};r()}))}}function TT(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Bi(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Mo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Mo.ce=-1;/**
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
 */const IT=-1;function Oo(n){return n==null}function ac(n){return n===0&&1/n==-1/0}/**
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
 */const Gp="";function ET(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Qd(e)),e=kT(n.get(t),e);return Qd(e)}function kT(n,e){let t=e;const i=n.length;for(let s=0;s<i;s++){const r=n.charAt(s);switch(r){case"\0":t+="";break;case Gp:t+="";break;default:t+=r}}return t}function Qd(n){return n+Gp+""}/**
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
 */function Yd(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Js(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ST(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class be{constructor(e,t){this.comparator=e,this.root=t||Me.EMPTY}insert(e,t){return new be(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Me.BLACK,null,null))}remove(e){return new be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Me.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new kr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new kr(this.root,e,this.comparator,!1)}getReverseIterator(){return new kr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new kr(this.root,e,this.comparator,!0)}}class kr{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Me{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??Me.RED,this.left=s??Me.EMPTY,this.right=r??Me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new Me(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Me.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw J(43730,{key:this.key,value:this.value});if(this.right.isRed())throw J(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw J(27949);return e+(this.isRed()?0:1)}}Me.EMPTY=null,Me.RED=!0,Me.BLACK=!1;Me.EMPTY=new class{constructor(){this.size=0}get key(){throw J(57766)}get value(){throw J(16141)}get color(){throw J(16727)}get left(){throw J(29726)}get right(){throw J(36894)}copy(e,t,i,s,r){return this}insert(e,t,i){return new Me(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Re{constructor(e){this.comparator=e,this.data=new be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Jd(this.data.getIterator())}getIteratorFrom(e){return new Jd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof Re)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Re(this.comparator);return t.data=e,t}}class Jd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class fn{constructor(e){this.fields=e,e.sort(Qe.comparator)}static empty(){return new fn([])}unionWith(e){let t=new Re(Qe.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new fn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ci(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class Kp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ve{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Kp("Invalid base64 string: "+r):r}})(e);return new Ve(t)}static fromUint8Array(e){const t=(function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r})(e);return new Ve(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ve.EMPTY_BYTE_STRING=new Ve("");const CT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kn(n){if(me(!!n,39018),typeof n=="string"){let e=0;const t=CT.exec(n);if(me(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:_e(n.seconds),nanos:_e(n.nanos)}}function _e(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Sn(n){return typeof n=="string"?Ve.fromBase64String(n):Ve.fromUint8Array(n)}/**
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
 */const Qp="server_timestamp",Yp="__type__",Jp="__previous_value__",Xp="__local_write_time__";function hl(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Yp])==null?void 0:i.stringValue)===Qp}function Vo(n){const e=n.mapValue.fields[Jp];return hl(e)?Vo(e):e}function Ns(n){const e=kn(n.mapValue.fields[Xp].timestampValue);return new Ie(e.seconds,e.nanos)}/**
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
 */class RT{constructor(e,t,i,s,r,o,c,l,u,p,g){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=p,this.apiKey=g}}const po="(default)";class Ms{constructor(e,t){this.projectId=e,this.database=t||po}static empty(){return new Ms("","")}get isDefaultDatabase(){return this.database===po}isEqual(e){return e instanceof Ms&&e.projectId===this.projectId&&e.database===this.database}}function AT(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new q(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ms(n.options.projectId,e)}/**
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
 */const xT="__type__",PT="__max__",Sr={mapValue:{}},$T="__vector__",cc="value";function Cn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?hl(n)?4:DT(n)?9007199254740991:LT(n)?10:11:J(28295,{value:n})}function $t(n,e){if(n===e)return!0;const t=Cn(n);if(t!==Cn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ns(n).isEqual(Ns(e));case 3:return(function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=kn(s.timestampValue),c=kn(r.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,r){return Sn(s.bytesValue).isEqual(Sn(r.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,r){return _e(s.geoPointValue.latitude)===_e(r.geoPointValue.latitude)&&_e(s.geoPointValue.longitude)===_e(r.geoPointValue.longitude)})(n,e);case 2:return(function(s,r){if("integerValue"in s&&"integerValue"in r)return _e(s.integerValue)===_e(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=_e(s.doubleValue),c=_e(r.doubleValue);return o===c?ac(o)===ac(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return Ci(n.arrayValue.values||[],e.arrayValue.values||[],$t);case 10:case 11:return(function(s,r){const o=s.mapValue.fields||{},c=r.mapValue.fields||{};if(Yd(o)!==Yd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!$t(o[l],c[l])))return!1;return!0})(n,e);default:return J(52216,{left:n})}}function Os(n,e){return(n.values||[]).find((t=>$t(t,e)))!==void 0}function Ri(n,e){if(n===e)return 0;const t=Cn(n),i=Cn(e);if(t!==i)return te(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return te(n.booleanValue,e.booleanValue);case 2:return(function(r,o){const c=_e(r.integerValue||r.doubleValue),l=_e(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return Xd(n.timestampValue,e.timestampValue);case 4:return Xd(Ns(n),Ns(e));case 5:return oc(n.stringValue,e.stringValue);case 6:return(function(r,o){const c=Sn(r),l=Sn(o);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(r,o){const c=r.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const p=te(c[u],l[u]);if(p!==0)return p}return te(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(r,o){const c=te(_e(r.latitude),_e(o.latitude));return c!==0?c:te(_e(r.longitude),_e(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Zd(n.arrayValue,e.arrayValue);case 10:return(function(r,o){var w,I,C,P;const c=r.fields||{},l=o.fields||{},u=(w=c[cc])==null?void 0:w.arrayValue,p=(I=l[cc])==null?void 0:I.arrayValue,g=te(((C=u==null?void 0:u.values)==null?void 0:C.length)||0,((P=p==null?void 0:p.values)==null?void 0:P.length)||0);return g!==0?g:Zd(u,p)})(n.mapValue,e.mapValue);case 11:return(function(r,o){if(r===Sr.mapValue&&o===Sr.mapValue)return 0;if(r===Sr.mapValue)return 1;if(o===Sr.mapValue)return-1;const c=r.fields||{},l=Object.keys(c),u=o.fields||{},p=Object.keys(u);l.sort(),p.sort();for(let g=0;g<l.length&&g<p.length;++g){const w=oc(l[g],p[g]);if(w!==0)return w;const I=Ri(c[l[g]],u[p[g]]);if(I!==0)return I}return te(l.length,p.length)})(n.mapValue,e.mapValue);default:throw J(23264,{he:t})}}function Xd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return te(n,e);const t=kn(n),i=kn(e),s=te(t.seconds,i.seconds);return s!==0?s:te(t.nanos,i.nanos)}function Zd(n,e){const t=n.values||[],i=e.values||[];for(let s=0;s<t.length&&s<i.length;++s){const r=Ri(t[s],i[s]);if(r)return r}return te(t.length,i.length)}function Ai(n){return lc(n)}function lc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=kn(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Sn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return K.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",s=!0;for(const r of t.values||[])s?s=!1:i+=",",i+=lc(r);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${lc(t.fields[o])}`;return s+"}"})(n.mapValue):J(61005,{value:n})}function zr(n){switch(Cn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Vo(n);return e?16+zr(e):16;case 5:return 2*n.stringValue.length;case 6:return Sn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((s,r)=>s+zr(r)),0)})(n.arrayValue);case 10:case 11:return(function(i){let s=0;return Js(i.fields,((r,o)=>{s+=r.length+zr(o)})),s})(n.mapValue);default:throw J(13486,{value:n})}}function uc(n){return!!n&&"integerValue"in n}function fl(n){return!!n&&"arrayValue"in n}function eh(n){return!!n&&"nullValue"in n}function th(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function La(n){return!!n&&"mapValue"in n}function LT(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[xT])==null?void 0:i.stringValue)===$T}function Es(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Js(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=Es(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Es(n.arrayValue.values[t]);return e}return{...n}}function DT(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===PT}/**
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
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!La(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Es(t)}setAll(e){let t=Qe.emptyPath(),i={},s=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,i,s),i={},s=[],t=c.popLast()}o?i[c.lastSegment()]=Es(o):s.push(c.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());La(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return $t(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];La(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){Js(t,((s,r)=>e[s]=r));for(const s of i)delete e[s]}clone(){return new bt(Es(this.value))}}/**
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
 */class je{constructor(e,t,i,s,r,o,c){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=c}static newInvalidDocument(e){return new je(e,0,Y.min(),Y.min(),Y.min(),bt.empty(),0)}static newFoundDocument(e,t,i,s){return new je(e,1,t,Y.min(),i,s,0)}static newNoDocument(e,t){return new je(e,2,t,Y.min(),Y.min(),bt.empty(),0)}static newUnknownDocument(e,t){return new je(e,3,t,Y.min(),Y.min(),bt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class mo{constructor(e,t){this.position=e,this.inclusive=t}}function nh(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],o=n.position[s];if(r.field.isKeyField()?i=K.comparator(K.fromName(o.referenceValue),t.key):i=Ri(o,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function ih(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!$t(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class go{constructor(e,t="asc"){this.field=e,this.dir=t}}function NT(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Zp{}class Ce extends Zp{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new OT(e,t,i):t==="array-contains"?new FT(e,i):t==="in"?new HT(e,i):t==="not-in"?new BT(e,i):t==="array-contains-any"?new jT(e,i):new Ce(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new VT(e,i):new UT(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ri(t,this.value)):t!==null&&Cn(this.value)===Cn(t)&&this.matchesComparison(Ri(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Lt extends Zp{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Lt(e,t)}matches(e){return em(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function em(n){return n.op==="and"}function tm(n){return MT(n)&&em(n)}function MT(n){for(const e of n.filters)if(e instanceof Lt)return!1;return!0}function dc(n){if(n instanceof Ce)return n.field.canonicalString()+n.op.toString()+Ai(n.value);if(tm(n))return n.filters.map((e=>dc(e))).join(",");{const e=n.filters.map((t=>dc(t))).join(",");return`${n.op}(${e})`}}function nm(n,e){return n instanceof Ce?(function(i,s){return s instanceof Ce&&i.op===s.op&&i.field.isEqual(s.field)&&$t(i.value,s.value)})(n,e):n instanceof Lt?(function(i,s){return s instanceof Lt&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce(((r,o,c)=>r&&nm(o,s.filters[c])),!0):!1})(n,e):void J(19439)}function im(n){return n instanceof Ce?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ai(t.value)}`})(n):n instanceof Lt?(function(t){return t.op.toString()+" {"+t.getFilters().map(im).join(" ,")+"}"})(n):"Filter"}class OT extends Ce{constructor(e,t,i){super(e,t,i),this.key=K.fromName(i.referenceValue)}matches(e){const t=K.comparator(e.key,this.key);return this.matchesComparison(t)}}class VT extends Ce{constructor(e,t){super(e,"in",t),this.keys=sm("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class UT extends Ce{constructor(e,t){super(e,"not-in",t),this.keys=sm("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function sm(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((i=>K.fromName(i.referenceValue)))}class FT extends Ce{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return fl(t)&&Os(t.arrayValue,this.value)}}class HT extends Ce{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Os(this.value.arrayValue,t)}}class BT extends Ce{constructor(e,t){super(e,"not-in",t)}matches(e){if(Os(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Os(this.value.arrayValue,t)}}class jT extends Ce{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!fl(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>Os(this.value.arrayValue,i)))}}/**
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
 */class zT{constructor(e,t=null,i=[],s=[],r=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=c,this.Te=null}}function sh(n,e=null,t=[],i=[],s=null,r=null,o=null){return new zT(n,e,t,i,s,r,o)}function pl(n){const e=ie(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>dc(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(r){return r.field.canonicalString()+r.dir})(i))).join(","),Oo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Ai(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Ai(i))).join(",")),e.Te=t}return e.Te}function ml(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!NT(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!nm(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ih(n.startAt,e.startAt)&&ih(n.endAt,e.endAt)}function hc(n){return K.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Uo{constructor(e,t=null,i=[],s=[],r=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function qT(n,e,t,i,s,r,o,c){return new Uo(n,e,t,i,s,r,o,c)}function gl(n){return new Uo(n)}function rh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function WT(n){return K.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function GT(n){return n.collectionGroup!==null}function ks(n){const e=ie(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const r of e.explicitOrderBy)e.Ie.push(r),t.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Re(Qe.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new go(r,i))})),t.has(Qe.keyField().canonicalString())||e.Ie.push(new go(Qe.keyField(),i))}return e.Ie}function At(n){const e=ie(n);return e.Ee||(e.Ee=KT(e,ks(n))),e.Ee}function KT(n,e){if(n.limitType==="F")return sh(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const r=s.dir==="desc"?"asc":"desc";return new go(s.field,r)}));const t=n.endAt?new mo(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new mo(n.startAt.position,n.startAt.inclusive):null;return sh(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function fc(n,e,t){return new Uo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Fo(n,e){return ml(At(n),At(e))&&n.limitType===e.limitType}function rm(n){return`${pl(At(n))}|lt:${n.limitType}`}function ui(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((s=>im(s))).join(", ")}]`),Oo(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((s=>Ai(s))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((s=>Ai(s))).join(",")),`Target(${i})`})(At(n))}; limitType=${n.limitType})`}function Ho(n,e){return e.isFoundDocument()&&(function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):K.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)})(n,e)&&(function(i,s){for(const r of ks(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0})(n,e)&&(function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0})(n,e)&&(function(i,s){return!(i.startAt&&!(function(o,c,l){const u=nh(o,c,l);return o.inclusive?u<=0:u<0})(i.startAt,ks(i),s)||i.endAt&&!(function(o,c,l){const u=nh(o,c,l);return o.inclusive?u>=0:u>0})(i.endAt,ks(i),s))})(n,e)}function QT(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function om(n){return(e,t)=>{let i=!1;for(const s of ks(n)){const r=YT(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function YT(n,e,t){const i=n.field.isKeyField()?K.comparator(e.key,t.key):(function(r,o,c){const l=o.data.field(r),u=c.data.field(r);return l!==null&&u!==null?Ri(l,u):J(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return J(19790,{direction:n.dir})}}/**
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
 */class ii{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Js(this.inner,((t,i)=>{for(const[s,r]of i)e(s,r)}))}isEmpty(){return ST(this.inner)}size(){return this.innerSize}}/**
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
 */const JT=new be(K.comparator);function Rn(){return JT}const am=new be(K.comparator);function gs(...n){let e=am;for(const t of n)e=e.insert(t.key,t);return e}function XT(n){let e=am;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function Hn(){return Ss()}function cm(){return Ss()}function Ss(){return new ii((n=>n.toString()),((n,e)=>n.isEqual(e)))}const ZT=new Re(K.comparator);function se(...n){let e=ZT;for(const t of n)e=e.add(t);return e}const eI=new Re(te);function tI(){return eI}/**
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
 */function nI(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ac(e)?"-0":e}}function iI(n){return{integerValue:""+n}}/**
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
 */class Bo{constructor(){this._=void 0}}function sI(n,e,t){return n instanceof pc?(function(s,r){const o={fields:{[Yp]:{stringValue:Qp},[Xp]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&hl(r)&&(r=Vo(r)),r&&(o.fields[Jp]=r),{mapValue:o}})(t,e):n instanceof yo?lm(n,e):n instanceof vo?um(n,e):(function(s,r){const o=oI(s,r),c=oh(o)+oh(s.Ae);return uc(o)&&uc(s.Ae)?iI(c):nI(s.serializer,c)})(n,e)}function rI(n,e,t){return n instanceof yo?lm(n,e):n instanceof vo?um(n,e):t}function oI(n,e){return n instanceof mc?(function(i){return uc(i)||(function(r){return!!r&&"doubleValue"in r})(i)})(e)?e:{integerValue:0}:null}class pc extends Bo{}class yo extends Bo{constructor(e){super(),this.elements=e}}function lm(n,e){const t=dm(e);for(const i of n.elements)t.some((s=>$t(s,i)))||t.push(i);return{arrayValue:{values:t}}}class vo extends Bo{constructor(e){super(),this.elements=e}}function um(n,e){let t=dm(e);for(const i of n.elements)t=t.filter((s=>!$t(s,i)));return{arrayValue:{values:t}}}class mc extends Bo{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function oh(n){return _e(n.integerValue||n.doubleValue)}function dm(n){return fl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function aI(n,e){return n.field.isEqual(e.field)&&(function(i,s){return i instanceof yo&&s instanceof yo||i instanceof vo&&s instanceof vo?Ci(i.elements,s.elements,$t):i instanceof mc&&s instanceof mc?$t(i.Ae,s.Ae):i instanceof pc&&s instanceof pc})(n.transform,e.transform)}class zn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new zn}static exists(e){return new zn(void 0,e)}static updateTime(e){return new zn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class yl{}function hm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new lI(n.key,zn.none()):new vl(n.key,n.data,zn.none());{const t=n.data,i=bt.empty();let s=new Re(Qe.comparator);for(let r of e.fields)if(!s.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new jo(n.key,i,new fn(s.toArray()),zn.none())}}function cI(n,e,t){n instanceof vl?(function(s,r,o){const c=s.value.clone(),l=ch(s.fieldTransforms,r,o.transformResults);c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof jo?(function(s,r,o){if(!qr(s.precondition,r))return void r.convertToUnknownDocument(o.version);const c=ch(s.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(fm(s)),l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):(function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function Cs(n,e,t,i){return n instanceof vl?(function(r,o,c,l){if(!qr(r.precondition,o))return c;const u=r.value.clone(),p=lh(r.fieldTransforms,l,o);return u.setAll(p),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(n,e,t,i):n instanceof jo?(function(r,o,c,l){if(!qr(r.precondition,o))return c;const u=lh(r.fieldTransforms,l,o),p=o.data;return p.setAll(fm(r)),p.setAll(u),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),c===null?null:c.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((g=>g.field)))})(n,e,t,i):(function(r,o,c){return qr(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function ah(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Ci(i,s,((r,o)=>aI(r,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class vl extends yl{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class jo extends yl{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function fm(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function ch(n,e,t){const i=new Map;me(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const r=n[s],o=r.transform,c=e.data.field(r.field);i.set(r.field,rI(o,c,t[s]))}return i}function lh(n,e,t){const i=new Map;for(const s of n){const r=s.transform,o=t.data.field(s.field);i.set(s.field,sI(r,o,e))}return i}class lI extends yl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class uI{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&cI(r,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Cs(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Cs(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=cm();return this.mutations.forEach((s=>{const r=e.get(s.key),o=r.overlayedDocument;let c=this.applyToLocalView(o,r.mutatedFields);c=t.has(s.key)?null:c;const l=hm(o,c);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(Y.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),se())}isEqual(e){return this.batchId===e.batchId&&Ci(this.mutations,e.mutations,((t,i)=>ah(t,i)))&&Ci(this.baseMutations,e.baseMutations,((t,i)=>ah(t,i)))}}/**
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
 */class dI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class hI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Te,ne;function pm(n){if(n===void 0)return qt("GRPC error has no .code"),V.UNKNOWN;switch(n){case Te.OK:return V.OK;case Te.CANCELLED:return V.CANCELLED;case Te.UNKNOWN:return V.UNKNOWN;case Te.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Te.INTERNAL:return V.INTERNAL;case Te.UNAVAILABLE:return V.UNAVAILABLE;case Te.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Te.NOT_FOUND:return V.NOT_FOUND;case Te.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Te.ABORTED:return V.ABORTED;case Te.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Te.DATA_LOSS:return V.DATA_LOSS;default:return J(39323,{code:n})}}(ne=Te||(Te={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function fI(){return new TextEncoder}/**
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
 */const pI=new yn([4294967295,4294967295],0);function uh(n){const e=fI().encode(n),t=new Vp;return t.update(e),new Uint8Array(t.digest())}function dh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new yn([t,i],0),new yn([s,r],0)]}class wl{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new ys(`Invalid padding: ${t}`);if(i<0)throw new ys(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new ys(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new ys(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=yn.fromNumber(this.ge)}ye(e,t,i){let s=e.add(t.multiply(yn.fromNumber(i)));return s.compare(pI)===1&&(s=new yn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=uh(e),[i,s]=dh(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(i,s,r);if(!this.we(o))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new wl(r,s,t);return i.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=uh(e),[i,s]=dh(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(i,s,r);this.be(o)}}be(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class ys extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class zo{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,Xs.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new zo(Y.min(),s,new be(te),Rn(),se())}}class Xs{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Xs(i,t,se(),se(),se())}}/**
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
 */class Wr{constructor(e,t,i,s){this.Se=e,this.removedTargetIds=t,this.key=i,this.De=s}}class mm{constructor(e,t){this.targetId=e,this.Ce=t}}class gm{constructor(e,t,i=Ve.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class hh{constructor(){this.ve=0,this.Fe=fh(),this.Me=Ve.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=se(),t=se(),i=se();return this.Fe.forEach(((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:J(38017,{changeType:r})}})),new Xs(this.Me,this.xe,e,t,i)}Ke(){this.Oe=!1,this.Fe=fh()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,me(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class mI{constructor(e){this.Ge=e,this.ze=new Map,this.je=Rn(),this.He=Cr(),this.Je=Cr(),this.Ze=new be(te)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.We(),i.Ne||i.Ke(),i.Le(e.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.Qe(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:J(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,i=e.Ce.count,s=this.ot(t);if(s){const r=s.target;if(hc(r))if(i===0){const o=new K(r.path);this.et(t,o,je.newNoDocument(o,Y.min()))}else me(i===1,20013,{expectedCount:i});else{const o=this._t(t);if(o!==i){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,u)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=t;let o,c;try{o=Sn(i).toUint8Array()}catch(l){if(l instanceof Kp)return Xn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new wl(o,s,r)}catch(l){return Xn(l instanceof ys?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let s=0;return i.forEach((r=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(c)||(this.et(t,r,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((r,o)=>{const c=this.ot(o);if(c){if(r.current&&hc(c.target)){const l=new K(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,je.newNoDocument(l,e))}r.Be&&(t.set(o,r.ke()),r.Ke())}}));let i=se();this.Je.forEach(((r,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(i=i.add(r))})),this.je.forEach(((r,o)=>o.setReadTime(e)));const s=new zo(e,t,this.Ze,this.je,i);return this.je=Rn(),this.He=Cr(),this.Je=Cr(),this.Ze=new be(te),s}Ye(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,i),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new hh,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new Re(te),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new Re(te),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||H("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new hh),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Cr(){return new be(K.comparator)}function fh(){return new be(K.comparator)}const gI={asc:"ASCENDING",desc:"DESCENDING"},yI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vI={and:"AND",or:"OR"};class wI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function gc(n,e){return n.useProto3Json||Oo(e)?e:{value:e}}function _I(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bI(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function yi(n){return me(!!n,49232),Y.fromTimestamp((function(t){const i=kn(t);return new Ie(i.seconds,i.nanos)})(n))}function TI(n,e){return yc(n,e).canonicalString()}function yc(n,e){const t=(function(s){return new fe(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function ym(n){const e=fe.fromString(n);return me(Tm(e),10190,{key:e.toString()}),e}function Da(n,e){const t=ym(e);if(t.get(1)!==n.databaseId.projectId)throw new q(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new q(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new K(wm(t))}function vm(n,e){return TI(n.databaseId,e)}function II(n){const e=ym(n);return e.length===4?fe.emptyPath():wm(e)}function ph(n){return new fe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function wm(n){return me(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function EI(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:J(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=(function(u,p){return u.useProto3Json?(me(p===void 0||typeof p=="string",58123),Ve.fromBase64String(p||"")):(me(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),Ve.fromUint8Array(p||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const p=u.code===void 0?V.UNKNOWN:pm(u.code);return new q(p,u.message||"")})(o);t=new gm(i,s,r,c||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Da(n,i.document.name),r=yi(i.document.updateTime),o=i.document.createTime?yi(i.document.createTime):Y.min(),c=new bt({mapValue:{fields:i.document.fields}}),l=je.newFoundDocument(s,r,o,c),u=i.targetIds||[],p=i.removedTargetIds||[];t=new Wr(u,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Da(n,i.document),r=i.readTime?yi(i.readTime):Y.min(),o=je.newNoDocument(s,r),c=i.removedTargetIds||[];t=new Wr([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Da(n,i.document),r=i.removedTargetIds||[];t=new Wr([],r,s,null)}else{if(!("filter"in e))return J(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new hI(s,r),c=i.targetId;t=new mm(c,o)}}return t}function kI(n,e){return{documents:[vm(n,e.path)]}}function SI(n,e){const t={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=vm(n,s);const r=(function(u){if(u.length!==0)return bm(Lt.create(u,"and"))})(e.filters);r&&(t.structuredQuery.where=r);const o=(function(u){if(u.length!==0)return u.map((p=>(function(w){return{field:di(w.field),direction:AI(w.dir)}})(p)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=gc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:t,parent:s}}function CI(n){let e=II(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){me(i===1,65062);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let r=[];t.where&&(r=(function(g){const w=_m(g);return w instanceof Lt&&tm(w)?w.getFilters():[w]})(t.where));let o=[];t.orderBy&&(o=(function(g){return g.map((w=>(function(C){return new go(hi(C.field),(function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(w)))})(t.orderBy));let c=null;t.limit&&(c=(function(g){let w;return w=typeof g=="object"?g.value:g,Oo(w)?null:w})(t.limit));let l=null;t.startAt&&(l=(function(g){const w=!!g.before,I=g.values||[];return new mo(I,w)})(t.startAt));let u=null;return t.endAt&&(u=(function(g){const w=!g.before,I=g.values||[];return new mo(I,w)})(t.endAt)),qT(e,s,o,r,c,"F",l,u)}function RI(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function _m(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=hi(t.unaryFilter.field);return Ce.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=hi(t.unaryFilter.field);return Ce.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=hi(t.unaryFilter.field);return Ce.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=hi(t.unaryFilter.field);return Ce.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return J(61313);default:return J(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Ce.create(hi(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return J(58110);default:return J(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Lt.create(t.compositeFilter.filters.map((i=>_m(i))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return J(1026)}})(t.compositeFilter.op))})(n):J(30097,{filter:n})}function AI(n){return gI[n]}function xI(n){return yI[n]}function PI(n){return vI[n]}function di(n){return{fieldPath:n.canonicalString()}}function hi(n){return Qe.fromServerFormat(n.fieldPath)}function bm(n){return n instanceof Ce?(function(t){if(t.op==="=="){if(th(t.value))return{unaryFilter:{field:di(t.field),op:"IS_NAN"}};if(eh(t.value))return{unaryFilter:{field:di(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(th(t.value))return{unaryFilter:{field:di(t.field),op:"IS_NOT_NAN"}};if(eh(t.value))return{unaryFilter:{field:di(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:di(t.field),op:xI(t.op),value:t.value}}})(n):n instanceof Lt?(function(t){const i=t.getFilters().map((s=>bm(s)));return i.length===1?i[0]:{compositeFilter:{op:PI(t.op),filters:i}}})(n):J(54877,{filter:n})}function Tm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class pn{constructor(e,t,i,s,r=Y.min(),o=Y.min(),c=Ve.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new pn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new pn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class $I{constructor(e){this.yt=e}}function LI(n){const e=CI({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?fc(e,e.limit,"L"):e}/**
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
 */class DI{constructor(){this.Sn=new NI}addToCollectionParentIndex(e,t){return this.Sn.add(t),L.resolve()}getCollectionParents(e,t){return L.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return L.resolve()}deleteFieldIndex(e,t){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,t){return L.resolve()}getDocumentsMatchingTarget(e,t){return L.resolve(null)}getIndexType(e,t){return L.resolve(0)}getFieldIndexes(e,t){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,t){return L.resolve(En.min())}getMinOffsetFromCollectionGroup(e,t){return L.resolve(En.min())}updateCollectionGroup(e,t,i){return L.resolve()}updateIndexEntries(e,t){return L.resolve()}}class NI{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new Re(fe.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Re(fe.comparator)).toArray()}}/**
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
 */const mh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Im=41943040;class Ye{static withCacheSize(e){return new Ye(e,Ye.DEFAULT_COLLECTION_PERCENTILE,Ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */Ye.DEFAULT_COLLECTION_PERCENTILE=10,Ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ye.DEFAULT=new Ye(Im,Ye.DEFAULT_COLLECTION_PERCENTILE,Ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ye.DISABLED=new Ye(-1,0,0);/**
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
 */class xi{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new xi(0)}static ar(){return new xi(-1)}}/**
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
 */const gh="LruGarbageCollector",MI=1048576;function yh([n,e],[t,i]){const s=te(n,t);return s===0?te(e,i):s}class OI{constructor(e){this.Pr=e,this.buffer=new Re(yh),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();yh(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class VI{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){H(gh,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Bi(t)?H(gh,"Ignoring IndexedDB error during garbage collection: ",t):await No(t)}await this.Ar(3e5)}))}}class UI{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return L.resolve(Mo.ce);const i=new OI(t);return this.Vr.forEachTarget(e,(s=>i.Er(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>i.Er(s))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(mh)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),mh):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let i,s,r,o,c,l,u;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,o=Date.now(),this.nthSequenceNumber(e,s)))).next((g=>(i=g,c=Date.now(),this.removeTargets(e,i,t)))).next((g=>(r=g,l=Date.now(),this.removeOrphanedDocuments(e,i)))).next((g=>(u=Date.now(),li()<=ee.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-p}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${r} targets in `+(l-c)+`ms
	Removed ${g} documents in `+(u-l)+`ms
Total Duration: ${u-p}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:g}))))}}function FI(n,e){return new UI(n,e)}/**
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
 */class HI{constructor(){this.changes=new ii((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,je.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?L.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class BI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class jI{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(i=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(i!==null&&Cs(i.mutation,s,fn.empty(),Ie.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,se()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=se()){const s=Hn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,i).next((r=>{let o=gs();return r.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const i=Hn();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,se())))}populateOverlays(e,t,i){const s=[];return i.forEach((r=>{t.has(r)||s.push(r)})),this.documentOverlayCache.getOverlays(e,s).next((r=>{r.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,i,s){let r=Rn();const o=Ss(),c=(function(){return Ss()})();return t.forEach(((l,u)=>{const p=i.get(u.key);s.has(u.key)&&(p===void 0||p.mutation instanceof jo)?r=r.insert(u.key,u):p!==void 0?(o.set(u.key,p.mutation.getFieldMask()),Cs(p.mutation,u,p.mutation.getFieldMask(),Ie.now())):o.set(u.key,fn.empty())})),this.recalculateAndSaveOverlays(e,r).next((l=>(l.forEach(((u,p)=>o.set(u,p))),t.forEach(((u,p)=>c.set(u,new BI(p,o.get(u)??null)))),c)))}recalculateAndSaveOverlays(e,t){const i=Ss();let s=new be(((o,c)=>o-c)),r=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=t.get(l);if(u===null)return;let p=i.get(l)||fn.empty();p=c.applyToLocalView(u,p),i.set(l,p);const g=(s.get(c.batchId)||se()).add(l);s=s.insert(c.batchId,g)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,p=l.value,g=cm();p.forEach((w=>{if(!r.has(w)){const I=hm(t.get(w),i.get(w));I!==null&&g.set(w,I),r=r.add(w)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,g))}return L.waitFor(o)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,s){return WT(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):GT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,s):this.getDocumentsMatchingCollectionQuery(e,t,i,s)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next((r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-r.size):L.resolve(Hn());let c=Ds,l=r;return o.next((u=>L.forEach(u,((p,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),r.get(p)?L.resolve():this.remoteDocumentCache.getEntry(e,p).next((w=>{l=l.insert(p,w)}))))).next((()=>this.populateOverlays(e,u,r))).next((()=>this.computeViews(e,l,u,se()))).next((p=>({batchId:c,changes:XT(p)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new K(t)).next((i=>{let s=gs();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,s){const r=t.collectionGroup;let o=gs();return this.indexManager.getCollectionParents(e,r).next((c=>L.forEach(c,(l=>{const u=(function(g,w){return new Uo(w,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(t,l.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,i,s).next((p=>{p.forEach(((g,w)=>{o=o.insert(g,w)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,r,s)))).next((o=>{r.forEach(((l,u)=>{const p=u.getKey();o.get(p)===null&&(o=o.insert(p,je.newInvalidDocument(p)))}));let c=gs();return o.forEach(((l,u)=>{const p=r.get(l);p!==void 0&&Cs(p.mutation,u,fn.empty(),Ie.now()),Ho(t,u)&&(c=c.insert(l,u))})),c}))}}/**
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
 */class zI{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return L.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:yi(s.createTime)}})(t)),L.resolve()}getNamedQuery(e,t){return L.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(s){return{name:s.name,query:LI(s.bundledQuery),readTime:yi(s.readTime)}})(t)),L.resolve()}}/**
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
 */class qI{constructor(){this.overlays=new be(K.comparator),this.Lr=new Map}getOverlay(e,t){return L.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Hn();return L.forEach(t,(s=>this.getOverlay(e,s).next((r=>{r!==null&&i.set(s,r)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((s,r)=>{this.bt(e,t,r)})),L.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.Lr.get(i);return s!==void 0&&(s.forEach((r=>this.overlays=this.overlays.remove(r))),this.Lr.delete(i)),L.resolve()}getOverlaysForCollection(e,t,i){const s=Hn(),r=t.length+1,o=new K(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let r=new be(((u,p)=>u-p));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>i){let p=r.get(u.largestBatchId);p===null&&(p=Hn(),r=r.insert(u.largestBatchId,p)),p.set(u.getKey(),u)}}const c=Hn(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,p)=>c.set(u,p))),!(c.size()>=s)););return L.resolve(c)}bt(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(i.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new dI(t,i));let r=this.Lr.get(t);r===void 0&&(r=se(),this.Lr.set(t,r)),this.Lr.set(t,r.add(i.key))}}/**
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
 */class WI{constructor(){this.sessionToken=Ve.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,L.resolve()}}/**
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
 */class _l{constructor(){this.kr=new Re(Le.Kr),this.qr=new Re(Le.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const i=new Le(e,t);this.kr=this.kr.add(i),this.qr=this.qr.add(i)}$r(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new Le(e,t))}Qr(e,t){e.forEach((i=>this.removeReference(i,t)))}Gr(e){const t=new K(new fe([])),i=new Le(t,e),s=new Le(t,e+1),r=[];return this.qr.forEachInRange([i,s],(o=>{this.Wr(o),r.push(o.key)})),r}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new K(new fe([])),i=new Le(t,e),s=new Le(t,e+1);let r=se();return this.qr.forEachInRange([i,s],(o=>{r=r.add(o.key)})),r}containsKey(e){const t=new Le(e,0),i=this.kr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Le{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return K.comparator(e.key,t.key)||te(e.Hr,t.Hr)}static Ur(e,t){return te(e.Hr,t.Hr)||K.comparator(e.key,t.key)}}/**
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
 */class GI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new Re(Le.Kr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const r=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uI(r,t,i,s);this.mutationQueue.push(o);for(const c of s)this.Jr=this.Jr.add(new Le(c.key,r)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,t){return L.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.Xr(i),r=s<0?0:s;return L.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?IT:this.Yn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Le(t,0),s=new Le(t,Number.POSITIVE_INFINITY),r=[];return this.Jr.forEachInRange([i,s],(o=>{const c=this.Zr(o.Hr);r.push(c)})),L.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Re(te);return t.forEach((s=>{const r=new Le(s,0),o=new Le(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([r,o],(c=>{i=i.add(c.Hr)}))})),L.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;K.isDocumentKey(r)||(r=r.child(""));const o=new Le(new K(r),0);let c=new Re(te);return this.Jr.forEachWhile((l=>{const u=l.key.path;return!!i.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Hr)),!0)}),o),L.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((i=>{const s=this.Zr(i);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){me(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Jr;return L.forEach(t.mutations,(s=>{const r=new Le(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Jr=i}))}nr(e){}containsKey(e,t){const i=new Le(t,0),s=this.Jr.firstAfterOrEqual(i);return L.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class KI{constructor(e){this.ti=e,this.docs=(function(){return new be(K.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),r=s?s.size:0,o=this.ti(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return L.resolve(i?i.document.mutableCopy():je.newInvalidDocument(t))}getEntries(e,t){let i=Rn();return t.forEach((s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():je.newInvalidDocument(s))})),L.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let r=Rn();const o=t.path,c=new K(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:p}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||wT(vT(p),i)<=0||(s.has(p.key)||Ho(t,p))&&(r=r.insert(p.key,p.mutableCopy()))}return L.resolve(r)}getAllFromCollectionGroup(e,t,i,s){J(9500)}ni(e,t){return L.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new QI(this)}getSize(e){return L.resolve(this.size)}}class QI extends HI{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(i)})),L.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class YI{constructor(e){this.persistence=e,this.ri=new ii((t=>pl(t)),ml),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.ii=0,this.si=new _l,this.targetCount=0,this.oi=xi._r()}forEachTarget(e,t){return this.ri.forEach(((i,s)=>t(s))),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.ii&&(this.ii=t),L.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new xi(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,L.resolve()}updateTargetData(e,t){return this.lr(t),L.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.ri.forEach(((o,c)=>{c.sequenceNumber<=t&&i.get(c.targetId)===null&&(this.ri.delete(o),r.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),L.waitFor(r).next((()=>s))}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,t){const i=this.ri.get(t)||null;return L.resolve(i)}addMatchingKeys(e,t,i){return this.si.$r(t,i),L.resolve()}removeMatchingKeys(e,t,i){this.si.Qr(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach((o=>{r.push(s.markPotentiallyOrphaned(e,o))})),L.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),L.resolve()}getMatchingKeysForTargetId(e,t){const i=this.si.jr(t);return L.resolve(i)}containsKey(e,t){return L.resolve(this.si.containsKey(t))}}/**
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
 */class Em{constructor(e,t){this._i={},this.overlays={},this.ai=new Mo(0),this.ui=!1,this.ui=!0,this.ci=new WI,this.referenceDelegate=e(this),this.li=new YI(this),this.indexManager=new DI,this.remoteDocumentCache=(function(s){return new KI(s)})((i=>this.referenceDelegate.hi(i))),this.serializer=new $I(t),this.Pi=new zI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new qI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this._i[e.toKey()];return i||(i=new GI(t,this.referenceDelegate),this._i[e.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,i){H("MemoryPersistence","Starting transaction:",e);const s=new JI(this.ai.next());return this.referenceDelegate.Ti(),i(s).next((r=>this.referenceDelegate.Ii(s).next((()=>r)))).toPromise().then((r=>(s.raiseOnCommittedEvent(),r)))}Ei(e,t){return L.or(Object.values(this._i).map((i=>()=>i.containsKey(e,t))))}}class JI extends bT{constructor(e){super(),this.currentSequenceNumber=e}}class bl{constructor(e){this.persistence=e,this.Ri=new _l,this.Ai=null}static Vi(e){return new bl(e)}get di(){if(this.Ai)return this.Ai;throw J(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.di.delete(i.toString()),L.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.di.add(i.toString()),L.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),L.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((s=>this.di.add(s.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((r=>this.di.add(r.toString())))})).next((()=>i.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.di,(i=>{const s=K.fromPath(i);return this.mi(e,s).next((r=>{r||t.removeEntry(s,Y.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((i=>{i?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return L.or([()=>L.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class wo{constructor(e,t){this.persistence=e,this.fi=new ii((i=>ET(i.path)),((i,s)=>i.isEqual(s))),this.garbageCollector=FI(this,t)}static Vi(e,t){return new wo(e,t)}Ti(){}Ii(e){return L.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((s=>i+s))))}pr(e){let t=0;return this.mr(e,(i=>{t++})).next((()=>t))}mr(e,t){return L.forEach(this.fi,((i,s)=>this.wr(e,i,s).next((r=>r?L.resolve():t(s)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.ni(e,(o=>this.wr(e,o,t).next((c=>{c||(i++,r.removeEntry(o,Y.min()))})))).next((()=>r.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),L.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),L.resolve()}removeReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),L.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=zr(e.data.value)),t}wr(e,t,i){return L.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return L.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Tl{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.Ts=i,this.Is=s}static Es(e,t){let i=se(),s=se();for(const r of t.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Tl(e,t.fromCache,i,s)}}/**
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
 */class XI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ZI{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return cv()?8:TT(ze())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,s){const r={result:null};return this.gs(e,t).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ps(e,t,s,i).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new XI;return this.ys(e,t,o).next((c=>{if(r.result=c,this.As)return this.ws(e,t,o,c.size)}))})).next((()=>r.result))}ws(e,t,i,s){return i.documentReadCount<this.Vs?(li()<=ee.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",ui(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(li()<=ee.DEBUG&&H("QueryEngine","Query:",ui(t),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.ds*s?(li()<=ee.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",ui(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,At(t))):L.resolve())}gs(e,t){if(rh(t))return L.resolve(null);let i=At(t);return this.indexManager.getIndexType(e,i).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=fc(t,null,"F"),i=At(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((r=>{const o=se(...r);return this.fs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,i).next((l=>{const u=this.bs(t,c);return this.Ss(t,u,o,l.readTime)?this.gs(e,fc(t,null,"F")):this.Ds(e,u,t,l)}))))})))))}ps(e,t,i,s){return rh(t)||s.isEqual(Y.min())?L.resolve(null):this.fs.getDocuments(e,i).next((r=>{const o=this.bs(t,r);return this.Ss(t,o,i,s)?L.resolve(null):(li()<=ee.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ui(t)),this.Ds(e,o,t,yT(s,Ds)).next((c=>c)))}))}bs(e,t){let i=new Re(om(e));return t.forEach(((s,r)=>{Ho(e,r)&&(i=i.add(r))})),i}Ss(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ys(e,t,i){return li()<=ee.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",ui(t)),this.fs.getDocumentsMatchingQuery(e,t,En.min(),i)}Ds(e,t,i,s){return this.fs.getDocumentsMatchingQuery(e,i,s).next((r=>(t.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
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
 */const Il="LocalStore",e0=3e8;class t0{constructor(e,t,i,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new be(te),this.Fs=new ii((r=>pl(r)),ml),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(i)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jI(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function n0(n,e,t,i){return new t0(n,e,t,i)}async function km(n,e){const t=ie(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next((r=>(s=r,t.Os(e),t.mutationQueue.getAllMutationBatches(i)))).next((r=>{const o=[],c=[];let l=se();for(const u of s){o.push(u.batchId);for(const p of u.mutations)l=l.add(p.key)}for(const u of r){c.push(u.batchId);for(const p of u.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(i,l).next((u=>({Ns:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function Sm(n){const e=ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function i0(n,e){const t=ie(n),i=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const c=[];e.targetChanges.forEach(((p,g)=>{const w=s.get(g);if(!w)return;c.push(t.li.removeMatchingKeys(r,p.removedDocuments,g).next((()=>t.li.addMatchingKeys(r,p.addedDocuments,g))));let I=w.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(g)!==null?I=I.withResumeToken(Ve.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):p.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(p.resumeToken,i)),s=s.insert(g,I),(function(P,$,U){return P.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=e0?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0})(w,I,p)&&c.push(t.li.updateTargetData(r,I))}));let l=Rn(),u=se();if(e.documentUpdates.forEach((p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(r,p))})),c.push(s0(r,o,e.documentUpdates).next((p=>{l=p.Bs,u=p.Ls}))),!i.isEqual(Y.min())){const p=t.li.getLastRemoteSnapshotVersion(r).next((g=>t.li.setTargetsMetadata(r,r.currentSequenceNumber,i)));c.push(p)}return L.waitFor(c).next((()=>o.apply(r))).next((()=>t.localDocuments.getLocalViewOfDocuments(r,l,u))).next((()=>l))})).then((r=>(t.vs=s,r)))}function s0(n,e,t){let i=se(),s=se();return t.forEach((r=>i=i.add(r))),e.getEntries(n,i).next((r=>{let o=Rn();return t.forEach(((c,l)=>{const u=r.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(Y.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):H(Il,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{Bs:o,Ls:s}}))}function r0(n,e){const t=ie(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let s;return t.li.getTargetData(i,e).next((r=>r?(s=r,L.resolve(s)):t.li.allocateTargetId(i).next((o=>(s=new pn(e,o,"TargetPurposeListen",i.currentSequenceNumber),t.li.addTargetData(i,s).next((()=>s)))))))})).then((i=>{const s=t.vs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(i.targetId,i),t.Fs.set(e,i.targetId)),i}))}async function vc(n,e,t){const i=ie(n),s=i.vs.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,(o=>i.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Bi(o))throw o;H(Il,`Failed to update sequence numbers for target ${e}: ${o}`)}i.vs=i.vs.remove(e),i.Fs.delete(s.target)}function vh(n,e,t){const i=ie(n);let s=Y.min(),r=se();return i.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,p){const g=ie(l),w=g.Fs.get(p);return w!==void 0?L.resolve(g.vs.get(w)):g.li.getTargetData(u,p)})(i,o,At(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(o,c.targetId).next((l=>{r=l}))})).next((()=>i.Cs.getDocumentsMatchingQuery(o,e,t?s:Y.min(),t?r:se()))).next((c=>(o0(i,QT(e),c),{documents:c,ks:r})))))}function o0(n,e,t){let i=n.Ms.get(e)||Y.min();t.forEach(((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)})),n.Ms.set(e,i)}class wh{constructor(){this.activeTargetIds=tI()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class a0{constructor(){this.vo=new wh,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,i){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new wh,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class c0{Mo(e){}shutdown(){}}/**
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
 */const _h="ConnectivityMonitor";class bh{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){H(_h,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){H(_h,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Rr=null;function wc(){return Rr===null?Rr=(function(){return 268435456+Math.round(2147483648*Math.random())})():Rr++,"0x"+Rr.toString(16)}/**
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
 */const Na="RestConnection",l0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class u0{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${i}/databases/${s}`,this.$o=this.databaseId.database===po?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(e,t,i,s,r){const o=wc(),c=this.Qo(e,t.toUriEncodedString());H(Na,`Sending RPC '${e}' ${o}:`,c,i);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,r);const{host:u}=new URL(c),p=xn(u);return this.zo(e,c,l,i,p).then((g=>(H(Na,`Received RPC '${e}' ${o}: `,g),g)),(g=>{throw Xn(Na,`RPC '${e}' ${o} failed with error: `,g,"url: ",c,"request:",i),g}))}jo(e,t,i,s,r,o){return this.Wo(e,t,i,s,r)}Go(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Hi})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,r)=>e[r]=s)),i&&i.headers.forEach(((s,r)=>e[r]=s))}Qo(e,t){const i=l0[e];let s=`${this.qo}/v1/${t}:${i}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class d0{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Fe="WebChannelConnection",ls=(n,e,t)=>{n.listen(e,(i=>{try{t(i)}catch(s){setTimeout((()=>{throw s}),0)}}))};class vi extends u0{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!vi.c_){const e=Bp();ls(e,Hp.STAT_EVENT,(t=>{t.stat===rc.PROXY?H(Fe,"STAT_EVENT: detected buffering proxy"):t.stat===rc.NOPROXY&&H(Fe,"STAT_EVENT: detected no buffering proxy")})),vi.c_=!0}}zo(e,t,i,s,r){const o=wc();return new Promise(((c,l)=>{const u=new Up;u.setWithCredentials(!0),u.listenOnce(Fp.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Br.NO_ERROR:const g=u.getResponseJson();H(Fe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(g)),c(g);break;case Br.TIMEOUT:H(Fe,`RPC '${e}' ${o} timed out`),l(new q(V.DEADLINE_EXCEEDED,"Request time out"));break;case Br.HTTP_ERROR:const w=u.getStatus();if(H(Fe,`RPC '${e}' ${o} failed with status:`,w,"response text:",u.getResponseText()),w>0){let I=u.getResponseJson();Array.isArray(I)&&(I=I[0]);const C=I==null?void 0:I.error;if(C&&C.status&&C.message){const P=(function(U){const N=U.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(N)>=0?N:V.UNKNOWN})(C.status);l(new q(P,C.message))}else l(new q(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new q(V.UNAVAILABLE,"Connection failed."));break;default:J(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{H(Fe,`RPC '${e}' ${o} completed.`)}}));const p=JSON.stringify(s);H(Fe,`RPC '${e}' ${o} sending request:`,s),u.send(t,"POST",p,i,15)}))}T_(e,t,i){const s=wc(),r=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,i),c.encodeInitMessageHeaders=!0;const u=r.join("");H(Fe,`Creating RPC '${e}' stream ${s}: ${u}`,c);const p=o.createWebChannel(u,c);this.I_(p);let g=!1,w=!1;const I=new d0({Ho:C=>{w?H(Fe,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(g||(H(Fe,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),H(Fe,`RPC '${e}' stream ${s} sending:`,C),p.send(C))},Jo:()=>p.close()});return ls(p,ms.EventType.OPEN,(()=>{w||(H(Fe,`RPC '${e}' stream ${s} transport opened.`),I.i_())})),ls(p,ms.EventType.CLOSE,(()=>{w||(w=!0,H(Fe,`RPC '${e}' stream ${s} transport closed`),I.o_(),this.E_(p))})),ls(p,ms.EventType.ERROR,(C=>{w||(w=!0,Xn(Fe,`RPC '${e}' stream ${s} transport errored. Name:`,C.name,"Message:",C.message),I.o_(new q(V.UNAVAILABLE,"The operation could not be completed")))})),ls(p,ms.EventType.MESSAGE,(C=>{var P;if(!w){const $=C.data[0];me(!!$,16349);const U=$,N=(U==null?void 0:U.error)||((P=U[0])==null?void 0:P.error);if(N){H(Fe,`RPC '${e}' stream ${s} received error:`,N);const M=N.status;let D=(function(b){const v=Te[b];if(v!==void 0)return pm(v)})(M),F=N.message;M==="NOT_FOUND"&&F.includes("database")&&F.includes("does not exist")&&F.includes(this.databaseId.database)&&Xn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),D===void 0&&(D=V.INTERNAL,F="Unknown error status: "+M+" with message "+N.message),w=!0,I.o_(new q(D,F)),p.close()}else H(Fe,`RPC '${e}' stream ${s} received:`,$),I.__($)}})),vi.u_(),setTimeout((()=>{I.s_()}),0),I}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,i){super.Go(e,t,i),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return jp()}}/**
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
 */function h0(n){return new vi(n)}function Ma(){return typeof document<"u"?document:null}/**
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
 */function Cm(n){return new wI(n,!0)}/**
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
 */vi.c_=!1;class Rm{constructor(e,t,i=1e3,s=1.5,r=6e4){this.Ci=e,this.timerId=t,this.R_=i,this.A_=s,this.V_=r,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-i);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Th="PersistentStream";class f0{constructor(e,t,i,s,r,o,c,l){this.Ci=e,this.b_=i,this.S_=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Rm(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(qt(t.toString()),qt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,s])=>{this.D_===t&&this.G_(i,s)}),(i=>{e((()=>{const s=new q(V.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(s)}))}))}G_(e,t){const i=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.Yo((()=>{i((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{i((()=>this.z_(s)))})),this.stream.onMessage((s=>{i((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return H(Th,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(H(Th,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class p0 extends f0{constructor(e,t,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=EI(this.serializer,e),i=(function(r){if(!("targetChange"in r))return Y.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?yi(o.readTime):Y.min()})(e);return this.listener.J_(t,i)}Z_(e){const t={};t.database=ph(this.serializer),t.addTarget=(function(r,o){let c;const l=o.target;if(c=hc(l)?{documents:kI(r,l)}:{query:SI(r,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=bI(r,o.resumeToken);const u=gc(r,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(Y.min())>0){c.readTime=_I(r,o.snapshotVersion.toTimestamp());const u=gc(r,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const i=RI(this.serializer,e);i&&(t.labels=i),this.K_(t)}X_(e){const t={};t.database=ph(this.serializer),t.removeTarget=e,this.K_(t)}}/**
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
 */class m0{}class g0 extends m0{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new q(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Wo(e,yc(t,i),s,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new q(V.UNKNOWN,r.toString())}))}jo(e,t,i,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.jo(e,yc(t,i),s,o,c,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(V.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function y0(n,e,t,i){return new g0(n,e,t,i)}class v0{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(qt(t),this.aa=!1):H("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Pi="RemoteStore";class w0{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=r,this.Aa.Mo((o=>{i.enqueueAndForget((async()=>{er(this)&&(H(Pi,"Restarting streams for network reachability change."),await(async function(l){const u=ie(l);u.Ea.add(4),await Zs(u),u.Va.set("Unknown"),u.Ea.delete(4),await qo(u)})(this))}))})),this.Va=new v0(i,s)}}async function qo(n){if(er(n))for(const e of n.Ra)await e(!0)}async function Zs(n){for(const e of n.Ra)await e(!1)}function Am(n,e){const t=ie(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Cl(t)?Sl(t):ji(t).O_()&&kl(t,e))}function El(n,e){const t=ie(n),i=ji(t);t.Ia.delete(e),i.O_()&&xm(t,e),t.Ia.size===0&&(i.O_()?i.L_():er(t)&&t.Va.set("Unknown"))}function kl(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ji(n).Z_(e)}function xm(n,e){n.da.$e(e),ji(n).X_(e)}function Sl(n){n.da=new mI({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),ji(n).start(),n.Va.ua()}function Cl(n){return er(n)&&!ji(n).x_()&&n.Ia.size>0}function er(n){return ie(n).Ea.size===0}function Pm(n){n.da=void 0}async function _0(n){n.Va.set("Online")}async function b0(n){n.Ia.forEach(((e,t)=>{kl(n,e)}))}async function T0(n,e){Pm(n),Cl(n)?(n.Va.ha(e),Sl(n)):n.Va.set("Unknown")}async function I0(n,e,t){if(n.Va.set("Online"),e instanceof gm&&e.state===2&&e.cause)try{await(async function(s,r){const o=r.cause;for(const c of r.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.da.removeTarget(c))})(n,e)}catch(i){H(Pi,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Ih(n,i)}else if(e instanceof Wr?n.da.Xe(e):e instanceof mm?n.da.st(e):n.da.tt(e),!t.isEqual(Y.min()))try{const i=await Sm(n.localStore);t.compareTo(i)>=0&&await(function(r,o){const c=r.da.Tt(o);return c.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const p=r.Ia.get(u);p&&r.Ia.set(u,p.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,u)=>{const p=r.Ia.get(l);if(!p)return;r.Ia.set(l,p.withResumeToken(Ve.EMPTY_BYTE_STRING,p.snapshotVersion)),xm(r,l);const g=new pn(p.target,l,u,p.sequenceNumber);kl(r,g)})),r.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(i){H(Pi,"Failed to raise snapshot:",i),await Ih(n,i)}}async function Ih(n,e,t){if(!Bi(e))throw e;n.Ea.add(1),await Zs(n),n.Va.set("Offline"),t||(t=()=>Sm(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{H(Pi,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await qo(n)}))}async function Eh(n,e){const t=ie(n);t.asyncQueue.verifyOperationInProgress(),H(Pi,"RemoteStore received new credentials");const i=er(t);t.Ea.add(3),await Zs(t),i&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await qo(t)}async function E0(n,e){const t=ie(n);e?(t.Ea.delete(2),await qo(t)):e||(t.Ea.add(2),await Zs(t),t.Va.set("Unknown"))}function ji(n){return n.ma||(n.ma=(function(t,i,s){const r=ie(t);return r.sa(),new p0(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Zo:_0.bind(null,n),Yo:b0.bind(null,n),t_:T0.bind(null,n),J_:I0.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),Cl(n)?Sl(n):n.Va.set("Unknown")):(await n.ma.stop(),Pm(n))}))),n.ma}/**
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
 */class Rl{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new gi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,r){const o=Date.now()+i,c=new Rl(e,t,o,s,r);return c.start(i),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $m(n,e){if(qt("AsyncQueue",`${e}: ${n}`),Bi(n))return new q(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class wi{static emptySet(e){return new wi(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||K.comparator(t.key,i.key):(t,i)=>K.comparator(t.key,i.key),this.keyedMap=gs(),this.sortedSet=new be(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof wi)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new wi;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class kh{constructor(){this.ga=new be(K.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):J(63341,{Vt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class $i{constructor(e,t,i,s,r,o,c,l,u){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,i,s,r){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new $i(e,t,wi.emptySet(t),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
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
 */class k0{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class S0{constructor(){this.queries=Sh(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const s=ie(t),r=s.queries;s.queries=Sh(),r.forEach(((o,c)=>{for(const l of c.ba)l.onError(i)}))})(this,new q(V.ABORTED,"Firestore shutting down"))}}function Sh(){return new ii((n=>rm(n)),Fo)}async function C0(n,e){const t=ie(n);let i=3;const s=e.query;let r=t.queries.get(s);r?!r.Sa()&&e.Da()&&(i=2):(r=new k0,i=e.Da()?0:1);try{switch(i){case 0:r.wa=await t.onListen(s,!0);break;case 1:r.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=$m(o,`Initialization of query '${ui(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,r),r.ba.push(e),e.va(t.onlineState),r.wa&&e.Fa(r.wa)&&Al(t)}async function R0(n,e){const t=ie(n),i=e.query;let s=3;const r=t.queries.get(i);if(r){const o=r.ba.indexOf(e);o>=0&&(r.ba.splice(o,1),r.ba.length===0?s=e.Da()?0:1:!r.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function A0(n,e){const t=ie(n);let i=!1;for(const s of e){const r=s.query,o=t.queries.get(r);if(o){for(const c of o.ba)c.Fa(s)&&(i=!0);o.wa=s}}i&&Al(t)}function x0(n,e,t){const i=ie(n),s=i.queries.get(e);if(s)for(const r of s.ba)r.onError(t);i.queries.delete(e)}function Al(n){n.Ca.forEach((e=>{e.next()}))}var _c,Ch;(Ch=_c||(_c={})).Ma="default",Ch.Cache="cache";class P0{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new $i(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.Ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=$i.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==_c.Cache}}/**
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
 */class Lm{constructor(e){this.key=e}}class Dm{constructor(e){this.key=e}}class $0{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=se(),this.mutatedKeys=se(),this.eu=om(e),this.tu=new wi(this.eu)}get nu(){return this.Za}ru(e,t){const i=t?t.iu:new kh,s=t?t.tu:this.tu;let r=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((p,g)=>{const w=s.get(p),I=Ho(this.query,g)?g:null,C=!!w&&this.mutatedKeys.has(w.key),P=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let $=!1;w&&I?w.data.isEqual(I.data)?C!==P&&(i.track({type:3,doc:I}),$=!0):this.su(w,I)||(i.track({type:2,doc:I}),$=!0,(l&&this.eu(I,l)>0||u&&this.eu(I,u)<0)&&(c=!0)):!w&&I?(i.track({type:0,doc:I}),$=!0):w&&!I&&(i.track({type:1,doc:w}),$=!0,(l||u)&&(c=!0)),$&&(I?(o=o.add(I),r=P?r.add(p):r.delete(p)):(o=o.delete(p),r=r.delete(p)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),r=r.delete(p.key),i.track({type:1,doc:p})}return{tu:o,iu:i,Ss:c,mutatedKeys:r}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,s){const r=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((p,g)=>(function(I,C){const P=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J(20277,{Vt:$})}};return P(I)-P(C)})(p.type,g.type)||this.eu(p.doc,g.doc))),this.ou(i),s=s??!1;const c=t&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,u=l!==this.Xa;return this.Xa=l,o.length!==0||u?{snapshot:new $i(this.query,e.tu,r,o,e.mutatedKeys,l===0,u,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new kh,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=se(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Ya=this.Ya.add(i.key))}));const t=[];return e.forEach((i=>{this.Ya.has(i)||t.push(new Dm(i))})),this.Ya.forEach((i=>{e.has(i)||t.push(new Lm(i))})),t}cu(e){this.Za=e.ks,this.Ya=se();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return $i.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const xl="SyncEngine";class L0{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class D0{constructor(e){this.key=e,this.hu=!1}}class N0{constructor(e,t,i,s,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ii((c=>rm(c)),Fo),this.Iu=new Map,this.Eu=new Set,this.Ru=new be(K.comparator),this.Au=new Map,this.Vu=new _l,this.du={},this.mu=new Map,this.fu=xi.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function M0(n,e,t=!0){const i=Um(n);let s;const r=i.Tu.get(e);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.lu()):s=await Nm(i,e,t,!0),s}async function O0(n,e){const t=Um(n);await Nm(t,e,!0,!1)}async function Nm(n,e,t,i){const s=await r0(n.localStore,At(e)),r=s.targetId,o=n.sharedClientState.addLocalQueryTarget(r,t);let c;return i&&(c=await V0(n,e,r,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&Am(n.remoteStore,s),c}async function V0(n,e,t,i,s){n.pu=(g,w,I)=>(async function(P,$,U,N){let M=$.view.ru(U);M.Ss&&(M=await vh(P.localStore,$.query,!1).then((({documents:b})=>$.view.ru(b,M))));const D=N&&N.targetChanges.get($.targetId),F=N&&N.targetMismatches.get($.targetId)!=null,j=$.view.applyChanges(M,P.isPrimaryClient,D,F);return Ah(P,$.targetId,j.au),j.snapshot})(n,g,w,I);const r=await vh(n.localStore,e,!0),o=new $0(e,r.ks),c=o.ru(r.documents),l=Xs.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),u=o.applyChanges(c,n.isPrimaryClient,l);Ah(n,t,u.au);const p=new L0(e,t,o);return n.Tu.set(e,p),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),u.snapshot}async function U0(n,e,t){const i=ie(n),s=i.Tu.get(e),r=i.Iu.get(s.targetId);if(r.length>1)return i.Iu.set(s.targetId,r.filter((o=>!Fo(o,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await vc(i.localStore,s.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(s.targetId),t&&El(i.remoteStore,s.targetId),bc(i,s.targetId)})).catch(No)):(bc(i,s.targetId),await vc(i.localStore,s.targetId,!0))}async function F0(n,e){const t=ie(n),i=t.Tu.get(e),s=t.Iu.get(i.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),El(t.remoteStore,i.targetId))}async function Mm(n,e){const t=ie(n);try{const i=await i0(t.localStore,e);e.targetChanges.forEach(((s,r)=>{const o=t.Au.get(r);o&&(me(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?me(o.hu,14607):s.removedDocuments.size>0&&(me(o.hu,42227),o.hu=!1))})),await Vm(t,i,e)}catch(i){await No(i)}}function Rh(n,e,t){const i=ie(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.Tu.forEach(((r,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=ie(o);l.onlineState=c;let u=!1;l.queries.forEach(((p,g)=>{for(const w of g.ba)w.va(c)&&(u=!0)})),u&&Al(l)})(i.eventManager,e),s.length&&i.Pu.J_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function H0(n,e,t){const i=ie(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.Au.get(e),r=s&&s.key;if(r){let o=new be(K.comparator);o=o.insert(r,je.newNoDocument(r,Y.min()));const c=se().add(r),l=new zo(Y.min(),new Map,new be(te),o,c);await Mm(i,l),i.Ru=i.Ru.remove(r),i.Au.delete(e),Pl(i)}else await vc(i.localStore,e,!1).then((()=>bc(i,e,t))).catch(No)}function bc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Iu.get(e))n.Tu.delete(i),t&&n.Pu.yu(i,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((i=>{n.Vu.containsKey(i)||Om(n,i)}))}function Om(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(El(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Pl(n))}function Ah(n,e,t){for(const i of t)i instanceof Lm?(n.Vu.addReference(i.key,e),B0(n,i)):i instanceof Dm?(H(xl,"Document no longer in limbo: "+i.key),n.Vu.removeReference(i.key,e),n.Vu.containsKey(i.key)||Om(n,i.key)):J(19791,{wu:i})}function B0(n,e){const t=e.key,i=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(i)||(H(xl,"New document in limbo: "+t),n.Eu.add(i),Pl(n))}function Pl(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new K(fe.fromString(e)),i=n.fu.next();n.Au.set(i,new D0(t)),n.Ru=n.Ru.insert(t,i),Am(n.remoteStore,new pn(At(gl(t.path)),i,"TargetPurposeLimboResolution",Mo.ce))}}async function Vm(n,e,t){const i=ie(n),s=[],r=[],o=[];i.Tu.isEmpty()||(i.Tu.forEach(((c,l)=>{o.push(i.pu(l,e,t).then((u=>{var p;if((u||t)&&i.isPrimaryClient){const g=u?!u.fromCache:(p=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:p.current;i.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(u){s.push(u);const g=Tl.Es(l.targetId,u);r.push(g)}})))})),await Promise.all(o),i.Pu.J_(s),await(async function(l,u){const p=ie(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>L.forEach(u,(w=>L.forEach(w.Ts,(I=>p.persistence.referenceDelegate.addReference(g,w.targetId,I))).next((()=>L.forEach(w.Is,(I=>p.persistence.referenceDelegate.removeReference(g,w.targetId,I)))))))))}catch(g){if(!Bi(g))throw g;H(Il,"Failed to update sequence numbers: "+g)}for(const g of u){const w=g.targetId;if(!g.fromCache){const I=p.vs.get(w),C=I.snapshotVersion,P=I.withLastLimboFreeSnapshotVersion(C);p.vs=p.vs.insert(w,P)}}})(i.localStore,r))}async function j0(n,e){const t=ie(n);if(!t.currentUser.isEqual(e)){H(xl,"User change. New user:",e.toKey());const i=await km(t.localStore,e);t.currentUser=e,(function(r,o){r.mu.forEach((c=>{c.forEach((l=>{l.reject(new q(V.CANCELLED,o))}))})),r.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Vm(t,i.Ns)}}function z0(n,e){const t=ie(n),i=t.Au.get(e);if(i&&i.hu)return se().add(i.key);{let s=se();const r=t.Iu.get(e);if(!r)return s;for(const o of r){const c=t.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function Um(n){const e=ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Mm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=z0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=H0.bind(null,e),e.Pu.J_=A0.bind(null,e.eventManager),e.Pu.yu=x0.bind(null,e.eventManager),e}class _o{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Cm(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return n0(this.persistence,new ZI,e.initialUser,this.serializer)}Cu(e){return new Em(bl.Vi,this.serializer)}Du(e){return new a0}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_o.provider={build:()=>new _o};class q0 extends _o{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){me(this.persistence.referenceDelegate instanceof wo,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new VI(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ye.withCacheSize(this.cacheSizeBytes):Ye.DEFAULT;return new Em((i=>wo.Vi(i,t)),this.serializer)}}class Tc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Rh(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=j0.bind(null,this.syncEngine),await E0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new S0})()}createDatastore(e){const t=Cm(e.databaseInfo.databaseId),i=h0(e.databaseInfo);return y0(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,s,r,o,c){return new w0(i,s,r,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>Rh(this.syncEngine,t,0)),(function(){return bh.v()?new bh:new c0})())}createSyncEngine(e,t){return(function(s,r,o,c,l,u,p){const g=new N0(s,r,o,c,l,u);return p&&(g.gu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const r=ie(s);H(Pi,"RemoteStore shutting down."),r.Ea.add(5),await Zs(r),r.Aa.shutdown(),r.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Tc.provider={build:()=>new Tc};/**
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
 */class W0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):qt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const An="FirestoreClient";class G0{constructor(e,t,i,s,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this._databaseInfo=s,this.user=He.UNAUTHENTICATED,this.clientId=Wp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,(async o=>{H(An,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(i,(o=>(H(An,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=$m(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function Oa(n,e){n.asyncQueue.verifyOperationInProgress(),H(An,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async s=>{i.isEqual(s)||(await km(e.localStore,s),i=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function xh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await K0(n);H(An,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>Eh(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,s)=>Eh(e.remoteStore,s))),n._onlineComponents=e}async function K0(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){H(An,"Using user provided OfflineComponentProvider");try{await Oa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Xn("Error using user provided cache. Falling back to memory cache: "+t),await Oa(n,new _o)}}else H(An,"Using default OfflineComponentProvider"),await Oa(n,new q0(void 0));return n._offlineComponents}async function Q0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(H(An,"Using user provided OnlineComponentProvider"),await xh(n,n._uninitializedComponentsProvider._online)):(H(An,"Using default OnlineComponentProvider"),await xh(n,new Tc))),n._onlineComponents}async function Ph(n){const e=await Q0(n),t=e.eventManager;return t.onListen=M0.bind(null,e.syncEngine),t.onUnlisten=U0.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=O0.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=F0.bind(null,e.syncEngine),t}function Y0(n,e,t,i){const s=new W0(i),r=new P0(e,s,t);return n.asyncQueue.enqueueAndForget((async()=>C0(await Ph(n),r))),()=>{s.Nu(),n.asyncQueue.enqueueAndForget((async()=>R0(await Ph(n),r)))}}/**
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
 */function Fm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const J0="ComponentProvider",$h=new Map;function X0(n,e,t,i,s){return new RT(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Fm(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,i)}/**
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
 */const Hm="firestore.googleapis.com",Lh=!0;class Dh{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new q(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Hm,this.ssl=Lh}else this.host=e.host,this.ssl=e.ssl??Lh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Im;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<MI)throw new q(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Fm(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class $l{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new iT;switch(i.type){case"firstParty":return new aT(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new q(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=$h.get(t);i&&(H(J0,"Removing Datastore"),$h.delete(t),i.terminate())})(this),Promise.resolve()}}function Z0(n,e,t,i={}){var u;n=jr(n,$l);const s=xn(e),r=n._getSettings(),o={...r,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(Oc(`https://${c}`),Vc("Firestore",!0)),r.host!==Hm&&r.host!==c&&Xn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...r,host:c,ssl:s,emulatorOptions:i};if(!Kn(l,o)&&(n._setSettings(l),i.mockUserToken)){let p,g;if(typeof i.mockUserToken=="string")p=i.mockUserToken,g=He.MOCK_USER;else{p=bf(i.mockUserToken,(u=n._app)==null?void 0:u.options.projectId);const w=i.mockUserToken.sub||i.mockUserToken.user_id;if(!w)throw new q(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new He(w)}n._authCredentials=new sT(new qp(p,g))}}/**
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
 */class Wo{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Wo(this.firestore,e,this._query)}}class nt{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _i(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nt(this.firestore,e,this._key)}toJSON(){return{type:nt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(Ys(t,nt._jsonSchema))return new nt(e,i||null,new K(fe.fromString(t.referencePath)))}}nt._jsonSchemaVersion="firestore/documentReference/1.0",nt._jsonSchema={type:Ee("string",nt._jsonSchemaVersion),referencePath:Ee("string")};class _i extends Wo{constructor(e,t,i){super(e,t,gl(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nt(this.firestore,null,new K(e))}withConverter(e){return new _i(this.firestore,e,this._path)}}function en(n,e,...t){if(n=Ne(n),fT("collection","path",e),n instanceof $l){const i=fe.fromString(e,...t);return Wd(i),new _i(n,null,i)}{if(!(n instanceof nt||n instanceof _i))throw new q(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(fe.fromString(e,...t));return Wd(i),new _i(n.firestore,null,i)}}/**
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
 */const Nh="AsyncQueue";class Mh{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Rm(this,"async_queue_retry"),this._c=()=>{const i=Ma();i&&H(Nh,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=Ma();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Ma();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new gi;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Bi(e))throw e;H(Nh,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,qt("INTERNAL UNHANDLED ERROR: ",Oh(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Rl.createAndSchedule(this,e,t,i,(r=>this.hc(r)));return this.tc.push(s),s}uc(){this.nc&&J(47125,{Pc:Oh(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Oh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Ic extends $l{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new Mh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Mh(e),this._firestoreClient=void 0,await e}}}function eE(n,e){const t=typeof n=="object"?n:Hc(),i=typeof n=="string"?n:po,s=Ro(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=vf("firestore");r&&Z0(s,...r)}return s}function tE(n){if(n._terminated)throw new q(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||nE(n),n._firestoreClient}function nE(n){var i,s,r,o;const e=n._freezeSettings(),t=X0(n._databaseId,((i=n._app)==null?void 0:i.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(r=e.localCache)!=null&&r._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new G0(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}})(n._componentsProvider))}/**
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
 */class Tt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Tt(Ve.fromBase64String(e))}catch(t){throw new q(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Tt(Ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Tt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ys(e,Tt._jsonSchema))return Tt.fromBase64String(e.bytes)}}Tt._jsonSchemaVersion="firestore/bytes/1.0",Tt._jsonSchema={type:Ee("string",Tt._jsonSchemaVersion),bytes:Ee("string")};/**
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
 */class Bm{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new q(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class vn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new q(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new q(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:vn._jsonSchemaVersion}}static fromJSON(e){if(Ys(e,vn._jsonSchema))return new vn(e.latitude,e.longitude)}}vn._jsonSchemaVersion="firestore/geoPoint/1.0",vn._jsonSchema={type:Ee("string",vn._jsonSchemaVersion),latitude:Ee("number"),longitude:Ee("number")};/**
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
 */class wn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0})(this._values,e._values)}toJSON(){return{type:wn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ys(e,wn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new wn(e.vectorValues);throw new q(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}wn._jsonSchemaVersion="firestore/vectorValue/1.0",wn._jsonSchema={type:Ee("string",wn._jsonSchemaVersion),vectorValues:Ee("object")};function jm(n,e,t){if((e=Ne(e))instanceof Bm)return e._internalPath;if(typeof e=="string")return sE(n,e);throw Ec("Field path arguments must be of type string or ",n)}const iE=new RegExp("[~\\*/\\[\\]]");function sE(n,e,t){if(e.search(iE)>=0)throw Ec(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new Bm(...e.split("."))._internalPath}catch{throw Ec(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function Ec(n,e,t,i,s){let r=`Function ${e}() called with invalid data`;r+=". ";let o="";return new q(V.INVALID_ARGUMENT,r+n+o)}/**
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
 */class rE{convertValue(e,t="none"){switch(Cn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Sn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw J(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Js(e,((s,r)=>{i[s]=this.convertValue(r,t)})),i}convertVectorValue(e){var i,s,r;const t=(r=(s=(i=e.fields)==null?void 0:i[cc].arrayValue)==null?void 0:s.values)==null?void 0:r.map((o=>_e(o.doubleValue)));return new wn(t)}convertGeoPoint(e){return new vn(_e(e.latitude),_e(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Vo(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Ns(e));default:return null}}convertTimestamp(e){const t=kn(e);return new Ie(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=fe.fromString(e);me(Tm(i),9688,{name:e});const s=new Ms(i.get(1),i.get(3)),r=new K(i.popFirst(5));return s.isEqual(t)||qt(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */class zm extends rE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Tt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new nt(this.firestore,null,t)}}const Vh="@firebase/firestore",Uh="4.12.0";/**
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
 */function Fh(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1})(n,["next","error","complete"])}/**
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
 */class qm{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new oE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(jm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class oE extends qm{data(){return super.data()}}/**
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
 */function aE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new q(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class qn extends qm{constructor(e,t,i,s,r,o){super(e,t,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Gr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(jm("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=qn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}qn._jsonSchemaVersion="firestore/documentSnapshot/1.0",qn._jsonSchema={type:Ee("string",qn._jsonSchemaVersion),bundleSource:Ee("string","DocumentSnapshot"),bundleName:Ee("string"),bundle:Ee("string")};class Gr extends qn{data(e={}){return super.data(e)}}class bi{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new vs(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new Gr(this._firestore,this._userDataWriter,i.key,i,new vs(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new q(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new Gr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new vs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>r||c.type!==3)).map((c=>{const l=new Gr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new vs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,p=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),p=o.indexOf(c.doc.key)),{type:cE(c.type),doc:l,oldIndex:u,newIndex:p}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=bi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Wp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],s=[];return this.docs.forEach((r=>{r._document!==null&&(t.push(r._document),i.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),s.push(r.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function cE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J(61501,{type:n})}}/**
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
 */bi._jsonSchemaVersion="firestore/querySnapshot/1.0",bi._jsonSchema={type:Ee("string",bi._jsonSchemaVersion),bundleSource:Ee("string","QuerySnapshot"),bundleName:Ee("string"),bundle:Ee("string")};function tn(n,...e){var u,p,g;n=Ne(n);let t={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||Fh(e[i])||(t=e[i++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Fh(e[i])){const w=e[i];e[i]=(u=w.next)==null?void 0:u.bind(w),e[i+1]=(p=w.error)==null?void 0:p.bind(w),e[i+2]=(g=w.complete)==null?void 0:g.bind(w)}let r,o,c;if(n instanceof nt)o=jr(n.firestore,Ic),c=gl(n._key.path),r={next:w=>{e[i]&&e[i](lE(o,n,w))},error:e[i+1],complete:e[i+2]};else{const w=jr(n,Wo);o=jr(w.firestore,Ic),c=w._query;const I=new zm(o);r={next:C=>{e[i]&&e[i](new bi(o,I,w,C))},error:e[i+1],complete:e[i+2]},aE(n._query)}const l=tE(o);return Y0(l,c,s,r)}function lE(n,e,t){const i=t.docs.get(e._key),s=new zm(n);return new qn(n,s,e._key,i,new vs(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){nT(ei),Qn(new Tn("firestore",((i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),c=new Ic(new rT(i.getProvider("auth-internal")),new cT(o,i.getProvider("app-check-internal")),AT(o,s),o);return r={useFetchStreams:t,...r},c._setSettings(r),c}),"PUBLIC").setMultipleInstances(!0)),St(Vh,Uh,e),St(Vh,Uh,"esm2020")})();const nn=eE(Xc);let vt=[];function uE(n){if(Wm(),!n)return;const e=t=>t.docs.map(i=>({id:i.id,...i.data()}));vt.push(tn(en(nn,`households/${n}/inventory`),t=>{var i,s;d.inv=e(t),ae("synced"),(i=B.renderAll)==null||i.call(B),(s=B.renderSum)==null||s.call(B)},t=>{console.warn("realtime inv error:",t),ae("error")})),vt.push(tn(en(nn,`households/${n}/shopping`),t=>{var i,s;d.shop=e(t),ae("synced"),(i=B.renderShop)==null||i.call(B),(s=B.renderSum)==null||s.call(B)},t=>{console.warn("realtime shop error:",t),ae("error")})),vt.push(tn(en(nn,`households/${n}/recipes`),t=>{var i,s;d.recs=e(t),ae("synced"),(i=B.renderRecs)==null||i.call(B),(s=B.renderSum)==null||s.call(B)},t=>{console.warn("realtime recs error:",t),ae("error")})),vt.push(tn(en(nn,`households/${n}/mealplan`),t=>{const i={};e(t).forEach(s=>{s.date&&s.meal&&(i[s.date]=s.meal)}),d.mp=i,ae("synced")},t=>{console.warn("realtime mp error:",t)})),vt.push(tn(en(nn,`households/${n}/settings`),t=>{const i=e(t).find(s=>s.id==="config");i&&(d.cfg={...to,...i})},t=>{console.warn("realtime settings error:",t)})),vt.push(tn(en(nn,`households/${n}/cooklog`),t=>{d.cookLog=e(t).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},t=>{console.warn("realtime cooklog error:",t)})),vt.push(tn(en(nn,`households/${n}/wastelog`),t=>{d.wasteLog=e(t).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},t=>{console.warn("realtime wastelog error:",t)})),vt.push(tn(en(nn,`households/${n}/activity`),t=>{var i;d.activity=e(t).sort((s,r)=>new Date(r.timestamp||0)-new Date(s.timestamp||0)).slice(0,10),(i=B.renderAll)==null||i.call(B)},t=>{console.warn("realtime activity error:",t)})),ae("synced"),console.log("[realtime] Listeners started for household:",n)}function Wm(){vt.forEach(n=>{try{n()}catch{}}),vt=[],console.log("[realtime] All listeners stopped")}function Ll(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(d.cfg.adults||"Bora").split(",")[0].trim(),i=f("grt");i&&(i.innerHTML=`${e}, <span>${t}</span>`);const s=f("hdt");s&&(s.textContent=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})),si()}function Dl(){Nl(),Kr==null||Kr()}let Kr=null;function dE(n){Kr=n}function Nl(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(d.cfg.adults||"Bora").split(",")[0].trim(),i=f("grt");i&&!i.innerHTML&&(i.innerHTML=`${e}, <span>${t}</span>`),si(),tr(),mE(),vE(),zi(),_E(),Qm(),fE()}function hE(n){const e=`ks-home-${n}-collapsed`,t=le(e)!==!1;Oe(e,!t),kc(n)}function kc(n){const e=`ks-home-${n}-collapsed`,t=le(e)!==!1,i=f(`${n}-arrow`),r=f({lowstock:"lowstocklist",activity:"activityfeed",cooktonight:"cooktonightbody"}[n]||n);i&&(t?i.classList.add("collapsed"):i.classList.remove("collapsed")),r&&(t?r.classList.add("collapsed"):r.classList.remove("collapsed"))}function fE(){kc("lowstock"),kc("activity")}function zi(){const n=hn(),e=d.mp[n],t=f("tnd"),i=f("tna"),s=f("tonight-main");s&&(s.onclick=function(){window.openMealM(n,"Today")}),e?(t&&(t.innerHTML=e),i&&(i.innerHTML=`<button class="btn bsm bp" onclick="event.stopPropagation();openCooked('${n}')">✓ Cooked</button><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${n}','Today')">Edit</button>`)):(t&&(t.innerHTML='<span style="font-size:.9rem;color:var(--mt);font-style:italic">No meal planned yet</span>'),i&&(i.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openRecipeMatch()">🔍 Find recipes</button><button class="btn bsm bs" onclick="event.stopPropagation();showScreen('chat')">Ask Claude →</button>`))}function si(){const n=["S","M","T","W","T","F","S"],e=new Date;e.setHours(0,0,0,0);const t=f("wgrd");t&&(t.innerHTML=Mi().map((i,s)=>{const r=i.toISOString().split("T")[0],o=i.getTime()===e.getTime(),c=d.mp[r];return`<div class="wd${o?" today":""}${c?" hm":""}" onclick="openMealM('${r}','${n[s]} ${i.getDate()}')"><div class="wdn">${n[s]}</div><div class="wdd">${i.getDate()}</div>${c?`<div class="wdm">${c.substring(0,10)}${c.length>10?"…":""}</div>`:""}</div>`}).join(""),pE())}function pE(){const n=f("variety-nudge");if(!n)return;const e=Mi().map(o=>d.mp[o.toISOString().split("T")[0]]).filter(Boolean);if(e.length<3){n.style.display="none";return}const t=e.some(o=>/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(o)),i=e.some(o=>/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner/i.test(o)),s={};e.forEach(o=>{const c=o.toLowerCase();s[c]=(s[c]||0)+1});const r=Object.entries(s).find(([,o])=>o>=3);r?(n.style.display="block",n.innerHTML="🔄 <strong>"+r[0]+"</strong> is planned "+r[1]+"× this week — maybe try something different?"):!t&&!i?(n.style.display="block",n.innerHTML="🌍 No Bangladeshi or Turkish dishes this week yet — ask Claude for ideas!"):t?i?n.style.display="none":(n.style.display="block",n.innerHTML="🇹🇷 No Turkish dishes this week — köfte or mercimek çorbası would be great!"):(n.style.display="block",n.innerHTML="🇧🇩 No Bangladeshi dishes this week — how about a dal or fish curry?")}function tr(){const n=d.inv.filter(c=>{const l=Pt(c.expiry);return l&&(l.c==="expiring"||l.c==="expired")}).length,e=d.shop.filter(c=>!c.checked).length,t=f("home-exp-val"),i=f("home-exp-sub");t&&(n>0?(t.textContent=n+" item"+(n>1?"s":""),t.className="tc-val",t.style.color="var(--am)"):(t.textContent="All fresh!",t.className="tc-val tc-green")),i&&(i.textContent=n>0?"expiring soon":"Nothing in next 3 days");const s=f("home-shop-val"),r=f("home-shop-sub");s&&(s.textContent=e),r&&(r.textContent=e===1?"item to buy":e===0?"all stocked up":"items to buy");const o=f("sgrd");o&&(o.innerHTML=`<div class="sc" onclick="showScreen('inventory')"><div class="sci">🧺</div><div class="scv">${d.inv.length}</div><div class="scl">Items in stock</div></div><div class="sc${n>0?" warn":""}" onclick="showScreen('inventory')"><div class="sci">⏱</div><div class="scv">${n}</div><div class="scl">Expiring soon</div></div><div class="sc" onclick="showScreen('shopping')"><div class="sci">🛒</div><div class="scv">${e}</div><div class="scl">To buy</div></div><div class="sc" onclick="showScreen('recipes')"><div class="sci">📖</div><div class="scv">${d.recs.length}</div><div class="scl">Saved recipes</div></div>`)}function mE(){const n=d.inv.filter(i=>{const s=Pt(i.expiry);return s&&(s.c==="expiring"||s.c==="expired")}).sort((i,s)=>new Date(i.expiry)-new Date(s.expiry)),e=f("exslbl"),t=f("expl");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(i=>{const s=Pt(i.expiry);return`<div class="exi${s.c==="expired"?" exp":""}" onclick="openAdj('${i.id}')"><div class="exn">${Ae(i.name)}</div><div class="exd">${s.l}</div></div>`}).join("")}}const gE=new Set(["Bottle","Jar","Can","Carton","Bunch","Head","Loaf","Dozen","Tube","Roll","Gallon","Half Gallon","Liter"]),yE=new Set(["Piece","Unit","Pack","Box","Bag","Pound","Oz","Clove"]);function Ml(n){return n?gE.has(n)?1:(yE.has(n),2):2}function vE(){const n=d.inv.filter(i=>{if(i.doNotRestock)return!1;const s=i.restockThreshold!=null?i.restockThreshold:Ml(i.unit);return i.qty<=s}).sort((i,s)=>i.qty-s.qty),e=f("lowstocklbl"),t=f("lowstocklist");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(i=>`<div class="exi" style="border-color:var(--am)" onclick="openAdj('${i.id}')">
    <div style="flex:1;min-width:0">
      <div class="exn">${Ae(i.name)}</div>
      <div style="font-size:.7rem;color:var(--am);font-weight:600;margin-top:1px">${ki(i.qty,i.unit)}</div>
    </div>
    <button class="low-add-btn" onclick="event.stopPropagation();addLowToShop('${i.id}')">🛒 Add</button>
  </div>`).join("")}}async function wE(n){const e=d.inv.find(i=>i.id===n);if(!e)return;if(d.shop.find(i=>i.name.toLowerCase()===e.name.toLowerCase()&&!i.checked)){S(`${e.name} is already on your list`);return}await ve({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"low-stock"}),S(`${e.name} added to shopping list 🛒`)}function _E(){const n=f("activityfeed"),e=f("activitylbl");if(!n)return;const t=d.activity||[];if(!t.length){e&&(e.style.display="none"),n.innerHTML="";return}e&&(e.style.display="flex");const i=s=>{const r=Date.now()-new Date(s).getTime(),o=Math.floor(r/6e4);if(o<1)return"just now";if(o<60)return o+"m ago";const c=Math.floor(o/60);if(c<24)return c+"h ago";const l=Math.floor(c/24);return l===1?"yesterday":l+"d ago"};n.innerHTML=t.slice(0,3).map(s=>`<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--b1)">
      <div style="width:28px;height:28px;border-radius:50%;background:var(--acd);display:flex;align-items:center;justify-content:center;font-size:.7rem;flex-shrink:0;color:var(--ac);font-weight:700">${(s.memberName||"?")[0].toUpperCase()}</div>
      <div style="flex:1;font-size:.82rem;color:var(--tx2);line-height:1.4;font-family:'DM Sans',sans-serif"><strong style="color:var(--tx);font-weight:600">${Ae(s.memberName||"Someone").replace(/</g,"&lt;")}</strong> ${(s.action||"").replace(/</g,"&lt;")} <strong style="color:var(--tx);font-weight:600">${(s.itemName||"").replace(/</g,"&lt;")}</strong></div>
      <div style="font-size:.68rem;color:var(--mt);flex-shrink:0">${i(s.timestamp)}</div>
    </div>`).join("")}const Hh=5;let ws=[],Mt=0;function Gm(n){return(n||"").toLowerCase().trim().replace(/^[\d\s\/\.½¼¾⅓⅔]+/,"").replace(/\b(cups?|tbsp?|tsp?|tablespoons?|teaspoons?|ounces?|oz|lbs?|pounds?|grams?|g|kg|ml|liters?|cloves?|cans?|large|small|medium|fresh|dried|chopped|minced|sliced|diced|to taste|optional|about)\b/gi,"").replace(/\s+/g," ").trim().replace(/s$/,"")}function bE(n,e){let t=[];if(n.ingredientsRaw&&Array.isArray(n.ingredientsRaw)?t=n.ingredientsRaw:n.ingredients&&(t=n.ingredients.split(/[;\n]+/).map(c=>c.trim()).filter(Boolean)),!t.length)return{matchPct:0,matchCount:0,totalCount:0,missing:[]};const i=[];let s=0;const r=t.length;for(const c of t){const l=Gm(c);if(!l){s++;continue}e.some(p=>p.includes(l)||l.includes(p))?s++:i.push(c)}return{matchPct:r>0?Math.round(s/r*100):0,matchCount:s,totalCount:r,missing:i}}async function TE(){const n=f("recipeMatchResults");if(n){ct("recipematch"),n.innerHTML='<div style="text-align:center;padding:40px 0"><div class="spin" style="width:32px;height:32px;margin:0 auto 12px"></div><div style="font-size:.85rem;color:var(--mt)">Matching recipes to your supplies…</div></div>';try{const e=d.inv.map(i=>Gm(i.name)).filter(Boolean),t=await re("public_recipes");if(!t.length){n.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--mt)">No community recipes available yet.<br/>Publish some recipes first!</div>';return}ws=t.map(i=>{const s=bE(i,e);return{...i,...s}}).filter(i=>i.matchPct>=60).sort((i,s)=>s.matchPct-i.matchPct),Mt=0,Km(n)}catch(e){console.error("Recipe match error:",e),n.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--rd)">Something went wrong. Try again.</div>'}}}function Km(n){if(!ws.length){n.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--mt)">No recipes match 60% or more of your supplies.<br/>Try adding more items to your pantry!</div>';return}const e=ws.slice(Mt,Mt+Hh);Mt+=e.length;const t=e.map(i=>{let s,r;i.matchPct===100?(s="var(--gn)",r="Ready to cook!"):i.matchPct>=80?(s="var(--am)",r="Almost there"):(s="#e67e22",r="Need a few things");const o=i.imageUrl?`<img src="${i.imageUrl}" style="width:100%;height:140px;object-fit:cover;border-radius:12px 12px 0 0" alt="" onerror="this.style.display='none'"/>`:'<div style="width:100%;height:80px;background:var(--sf);border-radius:12px 12px 0 0;display:flex;align-items:center;justify-content:center;font-size:2rem">🍽</div>',c=i.missing.length?`<div style="margin-top:8px"><div style="font-size:.7rem;color:var(--mt);font-weight:600;margin-bottom:4px">Missing (${i.missing.length}):</div>${i.missing.map(u=>`<span style="display:inline-block;font-size:.68rem;padding:2px 8px;border-radius:8px;background:var(--rdd);color:var(--rd);margin:2px 3px 2px 0">${u}</span>`).join("")}</div>`:"",l=[i.cookTime,i.cuisine].filter(Boolean).join(" · ");return`<div style="background:var(--card);border:1.5px solid var(--b1);border-radius:14px;margin-bottom:12px;overflow:hidden;cursor:pointer" onclick="openComRecipe('${i.id}')">
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
    </div>`}).join("");if(Mt<=Hh)n.innerHTML=t;else{const i=n.querySelector(".match-more-btn");i&&i.remove(),n.insertAdjacentHTML("beforeend",t)}Mt<ws.length?n.insertAdjacentHTML("beforeend",`<div style="text-align:center;padding:12px 0"><button class="btn bs match-more-btn" onclick="showMoreMatches()">Show 5 more (${ws.length-Mt} remaining)</button></div>`):Mt>0&&n.insertAdjacentHTML("beforeend",`<div style="text-align:center;padding:12px 0;font-size:.75rem;color:var(--mt)">Showing all ${Mt} matching recipes</div>`)}function IE(){const n=f("recipeMatchResults");n&&Km(n)}function Qm(){const n=["fridge","freezer","pantry","household"].map(t=>{const i=d.inv.filter(s=>s.location===t);return i.length?hf(t).toUpperCase()+`
`+i.map(s=>`- ${s.name}${s.brand?` (${s.brand})`:""}: ${ki(s.qty,s.unit)}`).join(`
`):""}).filter(Boolean).join(`

`),e=f("expbox");e&&(e.textContent=n||"No items yet.")}const EE="modulepreload",kE=function(n){return"/"+n},Bh={},SE=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let o=function(u){return Promise.all(u.map(p=>Promise.resolve(p).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(t.map(u=>{if(u=kE(u),u in Bh)return;Bh[u]=!0;const p=u.endsWith(".css"),g=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${g}`))return;const w=document.createElement("link");if(w.rel=p?"stylesheet":EE,p||(w.as="script"),w.crossOrigin="",w.href=u,l&&w.setAttribute("nonce",l),document.head.appendChild(w),p)return new Promise((I,C)=>{w.addEventListener("load",I),w.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&r(c.reason);return e().catch(r)})};function Ym(n){return n?n.trim().toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").slice(0,60):null}async function Go(n){if(!d.hid||!n)return null;const e=Ym(n);if(!e)return null;try{return await G(`households/${d.hid}/productPreferences/${e}`)||null}catch{return null}}async function Jm(n,e){if(!d.hid||!n)return;const t=Ym(n);if(t)try{const i=await G(`households/${d.hid}/productPreferences/${t}`)||{};z(`households/${d.hid}/productPreferences/${t}`,{...i,...e,productName:n.trim(),updatedAt:new Date().toISOString()}).catch(s=>console.warn("Failed to save product preference:",s))}catch(i){console.warn("Failed to read product preference for merge:",i)}}function Ol(n,e){e&&Jm(n,{preferredLocation:e})}function Vl(n,e){e&&Jm(n,{preferredUnit:e})}let st=null,Va=!1,us="",Ua=!1;function CE(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=f("shopAddMicOpt");e&&(e.style.display="")}function jh(n){const e=f("micstatus");e&&e.classList.toggle("visible",n)}function Xm(){if(Va&&st){Ua=!0,st.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){S("Voice input not supported");return}st=new n,st.lang="en-US",st.interimResults=!0,st.maxAlternatives=1,st.continuous=!1,us="",Va=!0,jh(!0),st.onresult=e=>{let t="";for(let s=e.resultIndex;s<e.results.length;s++){const r=e.results[s][0].transcript;e.results[s].isFinal?us+=r:t+=r}const i=f("shi");i&&(i.value=(us+t).trim())},st.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&S("Couldn't hear that — try again")},st.onend=()=>{let e=(us||"").trim();if(!e&&Ua){const t=f("shi");e=t?t.value.trim():""}if(Va=!1,st=null,us="",Ua=!1,jh(!1),e){let t=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||1):s&&(t=s[2].trim(),i=parseInt(s[1],10)||1);const o={id:Date.now().toString(),name:t,qty:i,checked:!1,src:"manual"};ve(o),S(`Added "${e}" 🎤`);const c=f("shi");c&&(c.value="")}},st.start()}function Zm(n){if(!n.brand)return!1;if(n.src==="scan")return!0;if(n.src==="search"&&n.searchQuery){const e=n.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),t=n.brand.toLowerCase();return e.some(i=>t.includes(i))}return!1}function Ar(n){const e=n.qty||1,t=n.unit||"Unit",i=So(e),s=`<span class="sh-qty${e===1?" sh-qty-one":""}"> × ${i} ${t}</span>`;return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="shop">
    <div class="swipe-inner">
      <!-- Main row: swipeRowTap handles multi-select; checkbox toggles checked; content area opens detail -->
      <div class="shit${n.checked?" chk":""}" onclick="swipeRowTap('${n.id}','shop')">
        <div class="sel-cb">✓</div>           <!-- Multi-select checkbox (hidden unless selectMode is active) -->
        <div class="shck" onclick="event.stopPropagation();togShop('${n.id}')">${n.checked?"✓":""}</div>  <!-- Slim ring: tap to mark as bought; hidden in select mode (replaced by sel-cb) -->
        <div style="flex:1;min-width:0;cursor:pointer" onclick="openItemDetail('${n.id}')">
          <div class="shnm">${Ae(n.name)}${s}</div>
          ${Zm(n)?`<div class="sh-brand">${n.brand}</div>`:""}  <!-- Brand shown for barcode scans always; for text search only if the user's query matches the brand name -->
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
  </div>`}function qi(){const n=(o,c)=>o.name.localeCompare(c.name),e=f("shlist"),t=d.shop.filter(o=>!o.checked).sort(n),i=d.shop.filter(o=>o.checked).sort(n),s=f("clrchk");s&&(s.style.display=i.length?"block":"none");const r=f("shsub");if(r&&(r.textContent=t.length+" items to buy"),!!e){if(!d.shop.length){e.innerHTML='<div class="es"><div class="ei">🛒</div><p>Your list is empty!<br/>Add items or use "Build from meal plan".</p></div>';return}if(d.aisleMode&&t.length){const o={};t.forEach(c=>{const l=zy(c.name);o[l]||(o[l]=[]),o[l].push(c)}),e.innerHTML=Object.entries(o).sort().map(([c,l])=>`<div class="shsec">${c}</div>${l.map(Ar).join("")}`).join("")+(i.length?`<div class="shsec">Done</div>${i.map(Ar).join("")}`:"")}else e.innerHTML=(t.length?`<div class="shsec">To buy (${t.length})</div>${t.map(Ar).join("")}`:"")+(i.length?`<div class="shsec">Done</div>${i.map(Ar).join("")}`:"");if(d.selectMode==="shop"){document.querySelectorAll("#shlist .swipe-wrap").forEach(c=>{c.classList.add("selecting"),d.selectedIds.has(c.dataset.id)&&c.classList.add("selected")});const o=document.querySelector(".shbody");o&&(o.style.paddingLeft="52px")}}}function RE(){const n=f("shi"),e=n.value.trim();if(!e)return;if(Ti&&Ti.length===1){tg(0);return}let t=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||1):s&&(t=s[2].trim(),i=parseInt(s[1],10)||1);const o=f("addNoteInp"),c=o?o.value.trim():"",l={id:Date.now().toString(),name:t,qty:i,checked:!1,src:"manual"};c&&(l.note=c),ve(l),n.value="",o&&(o.value="");const u=f("addNoteWrap");u&&(u.style.display="none"),Ul(),nr()}function AE(){const n=f("addNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=f("addNoteInp");t&&t.focus()}}function xE(){const n=f("shopAddBackdrop"),e=f("shopAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),setTimeout(()=>{const t=f("shi");t&&(t.value="",t.focus())},150)}function nr(){const n=f("shopAddBackdrop"),e=f("shopAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),Ul()}function PE(){nr(),window.openScanForList&&window.openScanForList()}function $E(){nr(),Xm()}let Ti=null;function LE(){}const DE=new Set(["salad","soup","stew","casserole","dish","recipe","curry","pie","sandwich","wrap","risotto","gratin","puree","smoothie","juice","namasu","pickled","marinated","braised","sauteed","sautéed","coleslaw","gazpacho","chutney","relish","compote","ragout","ratatouille","succotash","bruschetta","ceviche","tartare"]),NE=["made with","and vegetable","and rice","and noodle","and cheese","cooked in","served with","topped with","stuffed with","mixed with","tossed with","dressed with"];function ME(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(t===i)return!1;for(const o of NE)if(t.includes(o)&&!i.includes(o))return!0;const s=new Set(i.split(/\s+/)),r=t.split(/[\s,&+\-–—/()[\]]+/).filter(o=>o.length>=2);for(const o of r)if(DE.has(o)&&!s.has(o))return!0;return!1}const eg=new Set(["a","an","the","and","or","with","for","of","in","to","by","is","it","at","on","no","not","all","each","per","from","free","style","natural","original","premium","organic","fresh","whole","pure","real","lite","light","low","high","extra","reduced","fat","nonfat","skim","raw","roasted","unsweetened","sweetened","flavored","smoked","dried","frozen","canned","pack","ct","oz","lb","ml","kg","fl","count","size","gallon","quart","pint","liter","bag","box","can","jar","bottle","container","pouch","tub","carton","plain","creamy","chunky","crispy","crunchy","spicy","mild","hot","cold","classic","homestyle","traditional","artisan","greek","italian","mexican","asian","indian","mini","small","medium","large","jumbo","giant","big","handheld","electric","portable","automatic","manual","new","best","top","value","brand"]);function zh(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(t===i||t.startsWith(i+" "))return!0;const s=i.split(/\s+/).filter(c=>c.length>=2),r=t.split(/[\s,&+\-–—/()[\]]+/).filter(c=>c.length>=2&&!eg.has(c)&&!/^\d+$/.test(c));if(r.length<=2)return!0;let o=0;for(const c of r)s.some(u=>{if(c.startsWith(u)||u.startsWith(c))return!0;const p=Math.min(c.length,u.length,3);return p>=3&&c.slice(0,p)===u.slice(0,p)})&&o++;return o/r.length>=.5}function OE(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(ME(n,e))return 0;if(t===i)return 100;if(t.startsWith(i+" ")||t.startsWith(i))return 95;const r=t.split(/[\s,&+\-–—/]+/).filter(o=>o.length>=2).filter(o=>!eg.has(o)&&!/^\d+$/.test(o));if(r.length&&(r[0].startsWith(i)||i.startsWith(r[0]))){const o=r.filter(l=>!l.startsWith(i)&&!i.startsWith(l)).length,c=85-Math.min(o*8,30);return zh(n,e)?c:0}for(let o=1;o<Math.min(3,r.length);o++)if(r[o].startsWith(i)||i.startsWith(r[o])){const c=r.filter(u=>!u.startsWith(i)&&!i.startsWith(u)).length,l=60-o*10-Math.min(c*8,20);return zh(n,e)?Math.max(l,5):0}return 0}function tg(n){if(!Ti||!Ti[n])return;const e=Ti[n],t=f("addNoteInp"),i=t?t.value.trim():"",s=f("shi")?f("shi").value.trim():"",r={id:Date.now().toString(),name:e.name,qty:1,checked:!1,src:"search",brand:e.brand||"",category:e.category||"",source:e.source||"search",searchQuery:s};i&&(r.note=i),ve(r),S(`Added "${e.name}" ✓`);const o=f("shi");o&&(o.value=""),t&&(t.value="");const c=f("addNoteWrap");c&&(c.style.display="none"),Ul(),nr()}function Ul(){Ti=null;const n=f("shopSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}async function Fl(n,e,t){}function ng(){const n=f("enrichBackdrop"),e=f("enrichSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),window._enrichCtx=null}async function ig(n){if(d.selectMode)return;event&&event.stopPropagation();const e=d.shop.find(g=>g.id===n);if(!e)return;const t=f("itemDetailContent");if(!t)return;const i=Zm(e);let s=`<div class="item-detail-header">
    <div style="flex:1;min-width:0">
      <div class="item-detail-name">${Ae(e.name)}</div>
      ${i?`<div class="item-detail-brand">${e.brand}</div>`:""}
      ${e.checked?'<div style="margin-top:4px"><span class="item-detail-badge" style="background:var(--gnd);color:var(--gn)">✓ Purchased</span></div>':""}
    </div>
  </div>`;const r=e.qty||1,o=e.unit||"Unit",{whole:c,frac:l}=no(r);s+=`<div class="item-detail-section">
    <div class="item-detail-label">Quantity</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeShopQty('${e.id}',-1)">−</button>
        <input class="qinp" id="shop-qty-${e.id}" type="number" min="0" max="99" value="${c}" style="width:48px;text-align:center" onblur="changeShopQtyDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeShopQty('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${Ka(`shop-frac-${e.id}`,l).replace("<select",`<select onchange="changeShopFrac('`+e.id+`')"`)}
      </div>
      <span style="font-size:.8rem;color:var(--mt)">${o}</span>
    </div>
  </div>`,s+=`<div class="item-detail-section">
    <div class="item-detail-label">Unit of Measure</div>
    <select class="detail-select" onchange="changeShopUnit('${e.id}',this.value)">
      ${cg.map(g=>`<option value="${g}"${g===o?" selected":""}>${g}</option>`).join("")}
    </select>
  </div>`,e.note&&(s+=`<div class="item-detail-section">
      <div class="item-detail-label">Note</div>
      <div class="item-detail-value">${e.note}</div>
    </div>`),s+='<button class="btn bs bf" onclick="closeItemDetail()" style="margin-top:8px">Close</button>',t.innerHTML=s;const u=f("itemDetailBackdrop"),p=f("itemDetailSheet");u&&u.classList.add("active"),p&&p.classList.add("active")}function VE(){const n=f("itemDetailBackdrop"),e=f("itemDetailSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}async function UE(n,e){const t=d.shop.find(s=>s.id===n);if(!t)return;await ve({...t,unit:e}),Vl(t.name,e);const i=d.inv.find(s=>s.name.toLowerCase().trim()===t.name.toLowerCase().trim());i&&await oe({...i,unit:e}),S("Unit updated everywhere"),ig(n)}async function FE(n,e){const t=d.shop.find(u=>u.id===n);if(!t)return;const i=f(`shop-qty-${n}`),s=f(`shop-frac-${n}`),r=parseInt(i==null?void 0:i.value,10)||0,o=parseFloat(s==null?void 0:s.value)||0;if(e<0&&bn(r,o)<=.25)return;const c=Math.max(0,Math.min(99,r+e)),l=bn(c,o);i&&(i.value=Math.floor(l)),c===0&&o===0&&s&&(s.value="0.25"),await ve({...t,qty:l})}async function HE(n){const e=d.shop.find(c=>c.id===n);if(!e)return;const t=f(`shop-qty-${n}`),i=f(`shop-frac-${n}`),s=parseInt(t==null?void 0:t.value,10),r=parseFloat(i==null?void 0:i.value)||0;if(isNaN(s)||s<0)return;const o=bn(s,r);o!==(e.qty||1)&&await ve({...e,qty:o})}async function BE(n){const e=d.shop.find(c=>c.id===n);if(!e)return;const t=f(`shop-qty-${n}`),i=f(`shop-frac-${n}`),s=parseInt(t==null?void 0:t.value,10)||0,r=parseFloat(i==null?void 0:i.value)||0,o=bn(s,r);r===0&&s===0&&t&&(t.value=1),await ve({...e,qty:o})}async function jE(n){}function zE(n){}async function qE(n){}function WE(n){const e=window._enrichCtx;if(!e)return;const t=e.results[n];if(t){if(e.list==="shop"){const i=d.shop.find(s=>s.id===e.itemId);i&&ve({...i,name:t.name,brand:t.brand||"",category:t.category||"",source:t.source||"search"})}else if(e.list==="inv"){const i=d.inv.find(s=>s.id===e.itemId);i&&oe({...i,name:t.name,brand:t.brand||"",category:t.category||i.category,source:t.source||"search"})}ng(),S(`Updated with "${t.name}" ✓`)}}function sg(n){if(!d.hid||!n)return;const e=Date.now().toString(36)+Math.random().toString(36).slice(2,6);z(`households/${d.hid}/completed_items/${e}`,{name:n,completedAt:new Date().toISOString()}).catch(t=>console.warn("recordCompleted error:",t))}function GE(n){const e=d.shop.find(i=>i.id===n);if(!e)return;const t=!e.checked;ve({...e,checked:t}),t&&sg(e.name),Xe(t?"checked off":"unchecked",Ae(e.name)+" on Shopping List")}function KE(n,e){n.stopPropagation();const t=f("sne-"+e),i=f("sni-"+e);if(!t)return;t.classList.toggle("open")&&i&&(i.focus(),i.setSelectionRange(i.value.length,i.value.length))}function QE(n){const e=f("sni-"+n);if(!e)return;const t=d.shop.find(s=>s.id===n);if(!t)return;const i=e.value.trim();i!==(t.note||"")&&ve({...t,note:i})}function YE(n){const e=f("sqe-"+n),t=f("sqi-"+n);if(!e)return;e.classList.toggle("open")&&t&&(t.focus(),t.select())}function JE(n,e){const t=f("sqi-"+n);if(!t)return;const i=Math.max(1,(parseInt(t.value,10)||1)+e);t.value=i,rg(n)}function rg(n){const e=f("sqi-"+n);if(!e)return;const t=d.shop.find(s=>s.id===n);if(!t)return;const i=Math.max(1,parseInt(e.value,10)||1);i!==(t.qty||1)&&ve({...t,qty:i})}function XE(){d.aisleMode=!d.aisleMode;const n=f("aislebtn");n&&(n.style.background=d.aisleMode?"var(--ac)":"",n.style.color=d.aisleMode?"var(--bg)":""),qi()}function ZE(n){["list","deals"].forEach(i=>{const s=f("shtab-"+i);s&&s.classList.remove("active");const r=f("sh-"+i+"-body");r&&(r.style.display="none")});const e=f("shtab-"+n);e&&e.classList.add("active");const t=f("sh-"+n+"-body");t&&(t.style.display="block"),n==="deals"&&og()}function ek(){const n=d.shop.filter(i=>!i.checked);if(!n.length){S("List is empty!");return}const t=`🛒 Shopping List

`+n.map(i=>{let s="• "+i.name;return(i.qty||1)>1&&(s+=" × "+So(i.qty)),i.price&&(s+=" (~$"+i.price+")"),s}).join(`
`);navigator.share?navigator.share({title:"Shopping List",text:t}).catch(()=>{}):navigator.clipboard&&navigator.clipboard.writeText(t).then(()=>S("List copied!"))}let Fa={},Sc={};async function tk(){const n=d.shop.filter(t=>t.checked);if(!n.length){S("No completed items!");return}Fa={},Sc={};for(const t of n){const i=await Go(t.name),s=t.name.toLowerCase();i!=null&&i.preferredLocation&&(Fa[s]=i.preferredLocation),i!=null&&i.preferredUnit&&(Sc[s]=i.preferredUnit)}const e=f("atk-body");e.innerHTML=`<div style="padding:16px">
    <p style="font-size:.82rem;color:var(--mt);margin-bottom:16px">Choose where each item goes in your kitchen, then tap Add All.</p>
    ${n.map(t=>{const i=Fa[t.name.toLowerCase()]||Mc(t.name);return`<div class="atk-item" id="atk-${t.id}" data-loc="${i}">
        <div class="atk-name">${t.name}</div>
        <div class="atk-loc">
          <button onclick="setAtkLoc('${t.id}','fridge',this)" class="${i==="fridge"?"sel":""}">🌡 Fridge</button>
          <button onclick="setAtkLoc('${t.id}','freezer',this)" class="${i==="freezer"?"sel":""}">🧊 Freeze</button>
          <button onclick="setAtkLoc('${t.id}','pantry',this)" class="${i==="pantry"?"sel":""}">🥫 Pantry</button>
          <button onclick="setAtkLoc('${t.id}','household',this)" class="${i==="household"?"sel":""}">🏠 House</button>
        </div>
      </div>`}).join("")}
  </div>`,ct("atk")}function nk(n,e,t){const i=f("atk-"+n);i.dataset.loc=e,i.querySelectorAll(".atk-loc button").forEach(s=>s.classList.remove("sel")),t.classList.add("sel")}async function ik(){const n=d.shop.filter(i=>i.checked),e=new Date().toLocaleDateString();let t=0;for(const i of n){const s=f("atk-"+i.id);if(!s)continue;const r=s.dataset.loc||Mc(i.name),o=d.inv.find(l=>l.name.toLowerCase()===i.name.toLowerCase()),c=i.qty||1;await oe({id:o?o.id:"inv-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:o?o.name:i.name,qty:o?o.qty+c:c,unit:o?o.unit:i.unit&&i.unit!=="unit"?i.unit:Sc[i.name.toLowerCase()]||"unit",location:r,category:o?o.category:Oi({name:i.name}),addedAt:o?o.addedAt:e,brand:o?o.brand:i.brand||"",expiry:o?o.expiry:null,image:o?o.image:i.image||null,source:"shopping"}),Ol(i.name,r),await Fi(i.id),t++}ke("atk"),S(`${t} item${t!==1?"s":""} added to your supplies! 🧺`)}async function sk(){const n=Mi().map(s=>{const r=s.toISOString().split("T")[0];return d.mp[r]?`${s.toLocaleDateString("en-US",{weekday:"short"})}: ${d.mp[r]}`:""}).filter(Boolean).join(", ");if(!n){S("No meals planned yet!");return}const e=d.inv.map(s=>`${s.name} (${ki(s.qty,s.unit)})`).join(", "),t=document.querySelector('[onclick="buildList()"]'),i=t?t.textContent:"";t&&(t.disabled=!0,t.textContent="⏳ Thinking…");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:500,messages:[{role:"user",content:`Week meals: ${n}
Already have: ${e}
List ONLY ingredients still needed. Return ONLY a bullet list, each line starting "- ". No categories, no headers, no explanation.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",c=[],l=[];o.split(`
`).forEach(P=>{const $=P.match(/^[-•*]\s+(.+)/);if($){const U=$[1].replace(/\*\*/g,"").trim();U&&!d.shop.find(N=>N.name.toLowerCase()===U.toLowerCase())&&c.push({name:U,sel:!0})}});const u=o.split(`
`).filter(P=>P.match(/^[-•*]\s+/)).length,p=d.inv.map(P=>P.name.toLowerCase());if(c.forEach(P=>{const $=d.inv.find(U=>U.name.toLowerCase()===P.name.toLowerCase());$&&$.qty>0&&(P.note=`Have ${ki($.qty,$.unit)} — need more`)}),!c.length){S("Nothing new needed — you're all stocked! ✓");return}window._bpItems=c;const g=d.inv.length>0?Math.max(0,u-c.length):0,w=c.filter(P=>P.note).length,I=[];g>0&&I.push(`✅ ${g} already in stock`),w>0&&I.push(`⚠️ ${w} partially stocked`),I.push(`🛒 ${c.length} to add`);const C=`<div style="padding:10px 16px;background:var(--acd);border-radius:12px;margin-bottom:12px;font-size:.82rem;color:var(--tx2);line-height:1.6">${I.join("<br>")}</div>`;f("bpList").innerHTML=C+c.map((P,$)=>`<div id="bpitem-${$}" onclick="bpTog(${$})" style="display:flex;align-items:center;gap:12px;padding:13px 16px;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;cursor:pointer;transition:all .15s"><div id="bpck-${$}" style="width:24px;height:24px;border-radius:50%;background:var(--gn);border:2px solid var(--gn);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.8rem;color:#0c0c0a;transition:all .2s">✓</div><div style="flex:1;min-width:0"><div style="font-size:.9rem;font-weight:500">${P.name}</div>${P.note?`<div style="font-size:.72rem;color:var(--am);margin-top:2px">${P.note}</div>`:""}</div></div>`).join(""),Hl(),f("buildPreviewM").classList.add("active")}catch{S("Couldn't reach Claude — check connection")}finally{t&&(t.disabled=!1,t.textContent=i)}}function rk(n){window._bpItems[n].sel=!window._bpItems[n].sel;const e=f("bpck-"+n),t=f("bpitem-"+n);window._bpItems[n].sel?(e.textContent="✓",e.style.background="var(--gn)",e.style.borderColor="var(--gn)",e.style.color="#0c0c0a",t.style.borderColor="var(--b1)"):(e.textContent="",e.style.background="transparent",e.style.borderColor="var(--b2)",t.style.borderColor="var(--b2)"),Hl()}function ok(n){window._bpItems.forEach((e,t)=>{window._bpItems[t].sel=n;const i=f("bpck-"+t),s=f("bpitem-"+t);n?(i.textContent="✓",i.style.background="var(--gn)",i.style.borderColor="var(--gn)",i.style.color="#0c0c0a",s.style.borderColor="var(--b1)"):(i.textContent="",i.style.background="transparent",i.style.borderColor="var(--b2)",s.style.borderColor="var(--b2)")}),Hl()}function Hl(){const n=window._bpItems.filter(t=>t.sel).length,e=f("bpAddBtn");e&&(e.textContent=n?`Add ${n} item${n!==1?"s":""}  ✓`:"Nothing selected"),e&&(e.disabled=!n)}async function ak(){const n=window._bpItems.filter(e=>e.sel);if(!n.length){f("buildPreviewM").classList.remove("active");return}for(const e of n)await ve({id:Date.now().toString()+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"meal-plan"});f("buildPreviewM").classList.remove("active"),S(`Added ${n.length} item${n.length!==1?"s":""}! 🛒`)}function og(){const n=f("deals-zip-banner");if(!n)return;const e=d.cfg.zipcode;e?(n.innerHTML=`📍 Searching deals near <strong>${e}</strong> <span style="font-size:.72rem;color:var(--mt)">(change in Settings)</span>`,n.style.borderColor="var(--b2)"):(n.innerHTML=`⚠️ Set your zipcode in <strong style="cursor:pointer;color:var(--ac)" onclick="hideOv('');showOv('settings')">Settings</strong> to find local deals near you.`,n.style.borderColor="var(--am)")}function Cc(n,e){const t=f("dealslist");if(!n||!n.length){t.innerHTML=`<div class="es"><div class="ei">🏷</div><p>No deals found for <strong>${e}</strong>.<br>Try a different search term or check back later for new circulars.</p></div>`;return}t.innerHTML="",n.forEach(i=>{const s=document.createElement("div");s.className="deal-card"+(i.onSale?" deal-match":"");const r=document.createElement("div");r.style.flex="1";const o=document.createElement("div");o.className="deal-store",o.textContent=i.store||"Store";const c=document.createElement("div");if(c.className="deal-name",c.textContent=i.name||"",i.brand||i.size){const p=document.createElement("div");p.style.cssText="font-size:.72rem;color:var(--mt);margin-top:1px",p.textContent=[i.brand,i.size].filter(Boolean).join(" · "),r.appendChild(o),r.appendChild(c),r.appendChild(p)}else r.appendChild(o),r.appendChild(c);const l=document.createElement("div");if(l.style.cssText="display:flex;align-items:baseline;gap:6px;margin-top:4px;flex-wrap:wrap",i.sale_price){const p=document.createElement("span");p.className="deal-price",p.textContent=i.sale_price,l.appendChild(p)}if(i.onSale&&i.regular){const p=document.createElement("span");p.className="deal-orig",p.textContent=i.regular,l.appendChild(p)}if(i.savings){const p=document.createElement("span");p.className="deal-badge",p.textContent="Save "+i.savings,l.appendChild(p)}r.appendChild(l);const u=document.createElement("button");u.className="btn bs bsm",u.style.cssText="align-self:center;flex-shrink:0;margin-left:8px",u.textContent="+ List",(p=>{u.onclick=()=>ag(p)})(i.name||""),s.appendChild(r),s.appendChild(u),t.appendChild(s)})}function Rc(n){const e=f("deals-stores");!e||!n||!n.length||(e.style.display="block",e.innerHTML='<div style="font-size:.72rem;color:var(--mt);font-weight:600;margin-bottom:4px">Stores with deals</div>'+n.map(t=>`<div style="font-size:.74rem;color:var(--tx2);padding:2px 0">${t.name}</div>`).join(""))}function ag(n){const e=(n||"").replace(/&#39;/g,"'");d.shop.find(t=>t.name.toLowerCase()===e.toLowerCase())?S("Already on your list!"):(ve({id:Date.now().toString(),name:e,qty:1,checked:!1,src:"deal"}),S(e+" added!"))}async function Ac(n){const e=d.cfg.zipcode;if(!e)throw new Error("Set your zipcode in Settings to search for local deals.");const t="ks-deals-"+e+"-"+n.toLowerCase().replace(/\s+/g,"_").substring(0,40),i=le(t);if(i&&i.ts&&Date.now()-i.ts<72e5)return i;const s=await fetch("/api/deals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({zipcode:e,query:n})}),r=await s.json();if(!s.ok||r.error)throw new Error(r.message||r.error||"Deals API request failed");return Oe(t,{...r,ts:Date.now()}),r}async function ck(){const n=f("dealsearch").value.trim();if(!n){S("Enter something to search");return}const e=f("dealsstatus");e.style.display="block",e.style.color="var(--mt)",e.textContent="🔍 Searching deals for "+n+" near "+(d.cfg.zipcode||"your area")+"…",f("dealslist").innerHTML="";try{const t=await Ac(n);if(e.style.display="none",t.message){f("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${t.message}</p></div>`;return}t.stores&&Rc(t.stores),Cc(t.deals,n)}catch(t){e.style.color="var(--rd)",e.textContent=t.message||"Unknown error"}}async function lk(){const n=d.shop.filter(i=>!i.checked);if(!n.length){const i=Object.values(d.mp).filter(Boolean);if(!i.length){S("Add items to your list first!");return}if(!confirm(`Your list is empty. Search deals for this week's meals?

`+i.join(", ")))return;const r=f("dealsstatus");r.style.display="block",r.textContent="Searching deals for your meal plan...",f("dealslist").innerHTML="";try{const o=await Ac(i.join(", "));if(r.style.display="none",o.message){f("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${o.message}</p></div>`;return}o.stores&&Rc(o.stores),Cc(o.deals,i.join(", "))}catch(o){r.style.color="var(--rd)",r.textContent=o.message}return}const e=f("dealsstatus"),t=n.slice(0,8).map(i=>i.name).join(", ");e.style.display="block",e.style.color="var(--mt)",e.textContent="Searching deals for: "+t+"...",f("dealslist").innerHTML="";try{const i=await Ac(t);if(e.style.display="none",i.message){f("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${i.message}</p></div>`;return}i.stores&&Rc(i.stores),i.deals.length?Cc(i.deals,t):f("dealslist").innerHTML='<div class="es"><div class="ei">🏷</div><p>No deals found for your list items.<br/>Try searching for individual items.</p></div>'}catch(i){e.style.color="var(--rd)",e.textContent=i.message}}const cg=["Piece","Unit","Pack","Box","Bag","Bottle","Jar","Can","Bunch","Head","Loaf","Dozen","Carton","Tube","Roll","Gallon","Half Gallon","Liter","Pound","Oz","Clove"];function lg(n){if(!n.brand)return!1;if(n.source==="scan"||n.source==="Barcode")return!0;if(n.source==="search"&&n.searchQuery){const e=n.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),t=n.brand.toLowerCase();return e.some(i=>t.includes(i))}return!1}function uk(n){ff[Oi(n)];const e=Pt(n.expiry),t=e?e.c==="expired"?" expired":e.c==="expiring"?" expiring":"":"",i=e?`<div class="etag ${e.c}">${e.l}</div>`:"",s=lg(n)?`<div class="sh-brand">${n.brand}</div>`:"";return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="inv">
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
          <div class="iqt">${So(n.qty)}</div>
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
  </div>`}function ir(){const n=(r,o)=>r.name.localeCompare(o.name),e=d.it==="all"?d.inv.slice().sort(n):d.inv.filter(r=>r.location===d.it).slice().sort(n),t=f("isub"),i={all:"items",fridge:"fridge items",freezer:"frozen items",pantry:"pantry items",household:"household items"};t&&(t.textContent=e.length+" "+(i[d.it]||"items")),Qm();const s=f("ibody");if(s){if(!e.length){s.innerHTML='<div class="es"><div class="ei">🧺</div><p>No items here yet.<br/>Tap + Add item to get started.</p></div>';return}s.innerHTML=`<div class="ilst">${e.map(uk).join("")}</div>`,d.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(r=>{r.classList.add("selecting"),d.selectedIds.has(r.dataset.id)&&r.classList.add("selected")})}}function dk(n){sr(n)}async function sr(n){if(d.selectMode)return;const e=d.inv.find(N=>N.id===n);if(!e)return;const t=f("invItemDetailContent");if(!t)return;const s=`<div class="item-detail-img-ph" style="display:flex;align-items:center;justify-content:center">
    <div style="font-size:1.6rem">${ff[Oi(e)]||"🛒"}</div>
  </div>`,r="",o=lg(e),c=e.unit||"Unit",l=cg.map(N=>`<option value="${N}"${N===c?" selected":""}>${N}</option>`).join(""),u=e.restockThreshold!=null?e.restockThreshold:Ml(c),p=Pt(e.expiry);let g=`<div class="item-detail-header">
    <div>${s}${r}</div>
    <div style="flex:1;min-width:0">
      <div class="item-detail-name">${Ae(e.name)}</div>
      ${o?`<div class="item-detail-brand">${e.brand}</div>`:""}
      <div style="font-size:.7rem;color:var(--mt);margin-top:4px">Added ${e.addedAt||"—"}</div>
    </div>
  </div>`;g+=`<div class="item-detail-section">
    <div class="item-detail-label">Location</div>
    <div class="lpick">
      <button class="lbtn ${e.location==="fridge"?"sel":""}" onclick="changeInvLocation('${e.id}','fridge',this)">🌡 Fridge</button>
      <button class="lbtn ${e.location==="freezer"?"sel":""}" onclick="changeInvLocation('${e.id}','freezer',this)">🧊 Freezer</button>
      <button class="lbtn ${e.location==="pantry"?"sel":""}" onclick="changeInvLocation('${e.id}','pantry',this)">🥫 Pantry</button>
      <button class="lbtn ${e.location==="household"?"sel":""}" onclick="changeInvLocation('${e.id}','household',this)">🏠 Household</button>
    </div>
  </div>`;const{whole:w,frac:I}=no(e.qty);g+=`<div class="item-detail-section">
    <div class="item-detail-label">Quantity</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeInvQty('${e.id}',-1)">−</button>
        <input class="qinp" id="inv-qty-${e.id}" type="number" min="0" max="99" value="${w}" style="width:48px;text-align:center" onblur="changeInvQtyDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeInvQty('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${Ka(`inv-frac-${e.id}`,I).replace("<select",`<select onchange="changeInvFrac('`+e.id+`')"`)}
      </div>
    </div>
  </div>`,g+=`<div class="item-detail-section">
    <div class="item-detail-label">Unit of Measure</div>
    <select class="detail-select" onchange="changeInvUnit('${e.id}',this.value)">
      ${l}
    </select>
  </div>`,e.expiry?g+=`<div class="item-detail-section">
      <div class="item-detail-label">Expiry Date <span class="otag">optional</span></div>
      <div style="display:flex;align-items:center;gap:8px">
        <input class="fd" id="inv-expiry-${e.id}" type="date" value="${e.expiry}" onchange="changeInvExpiry('${e.id}')" style="flex:1"/>
        <button class="inv-expiry-clear-btn" onclick="clearInvExpiry('${e.id}')" title="Clear expiry date">✕ Clear</button>
      </div>
      ${p?`<div class="etag ${p.c}" style="margin-top:6px">${p.l}</div>`:""}
    </div>`:g+=`<div class="item-detail-section">
      <div class="item-detail-label">Expiry Date <span class="otag">optional</span></div>
      <div style="display:flex;align-items:center;gap:10px">
        <span class="inv-no-expiry-badge">No expiry set</span>
        <button class="inv-set-expiry-btn" onclick="setInvExpiry('${e.id}')">Set expiry</button>
      </div>
    </div>`,g+=`<div class="item-detail-section">
    <div class="item-detail-label">Notes <span class="otag">optional</span></div>
    <textarea class="sh-note-inp" id="inv-note-${e.id}" rows="2" placeholder="Brand, store, reminders…" onblur="changeInvNote('${e.id}')">${e.note||""}</textarea>
  </div>`;const{whole:C,frac:P}=no(u);g+=`<div class="item-detail-section">
    <div class="item-detail-label">Restock when below</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeInvThreshold('${e.id}',-1)">−</button>
        <input class="qinp" id="inv-thresh-${e.id}" type="number" min="0" max="99" value="${C}" style="width:48px;text-align:center" onblur="changeInvThresholdDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeInvThreshold('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${Ka(`inv-threshfrac-${e.id}`,P).replace("<select",`<select onchange="changeInvThreshFrac('`+e.id+`')"`)}
      </div>
    </div>
  </div>`,g+=`<div class="item-detail-section" style="display:flex;align-items:center;justify-content:space-between">
    <div class="item-detail-label" style="margin-bottom:0">Don't add to Running Low</div>
    <label class="toggle-switch">
      <input type="checkbox" ${e.doNotRestock?"checked":""} onchange="toggleDoNotRestock('${e.id}',this.checked)"/>
      <span class="toggle-slider"></span>
    </label>
  </div>`,g+=`<button class="btn bf" style="margin-top:12px;background:var(--gnd);color:var(--gn);border:1.5px solid var(--gn)" onclick="addInvToShopping('${e.id}')">🛒 Add to Shopping List</button>
  <button class="btn bd bf" onclick="closeInvItemDetail();remItem('${e.id}')" style="margin-top:8px">Remove</button>`,t.innerHTML=g;const $=f("invItemDetailBackdrop"),U=f("invItemDetailSheet");$&&$.classList.add("active"),U&&U.classList.add("active")}function ug(){const n=f("invItemDetailBackdrop"),e=f("invItemDetailSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}async function hk(n){}function fk(n){}async function pk(n){}async function mk(n){const e=d.inv.find(t=>t.id===n);if(e){const t=Pt(e.expiry);t&&(t.c==="expired"||t.c==="expiring")&&await vp(e.name)}await Qs(n),S("Item removed"),ke("adj")}async function gk(n,e){const t=d.inv.find(i=>i.id===d.adjId);t&&(document.querySelectorAll("#adjbody .lbtn").forEach(i=>i.classList.remove("sel")),e.classList.add("sel"),await oe({...t,location:n}),Ol(t.name,n))}async function yk(n){const e=d.inv.find(i=>i.id===d.adjId);if(!e)return;const t=Math.max(0,(e.qty||1)+n);t<=0||(f("adjqty").value=t,await oe({...e,qty:t}))}async function vk(){const n=d.inv.find(t=>t.id===d.adjId);if(!n)return;const e=parseInt(f("adjqty").value);!isNaN(e)&&e>=0&&await oe({...n,qty:e})}async function wk(){const n=d.inv.find(e=>e.id===d.adjId);n&&await oe({...n,expiry:f("adjexp").value||null})}async function _k(){const n=d.inv.find(t=>t.id===d.adjId);if(!n)return;const e=(f("adjnote").value||"").trim();await oe({...n,note:e||null})}async function bk(){const n=d.inv.find(i=>i.id===d.adjId);if(!n)return;const e=f("adjunit").value;await oe({...n,unit:e}),Vl(n.name,e);const t=d.shop.find(i=>i.name.toLowerCase().trim()===n.name.toLowerCase().trim());t&&await ve({...t,unit:e}),S("Unit updated everywhere")}async function Tk(n){const e=d.inv.find(s=>s.id===d.adjId);if(!e)return;const t=e.restockThreshold!=null?e.restockThreshold:Ml(e.unit),i=Math.max(0,t+n);f("adjlowthresh").value=i,await oe({...e,restockThreshold:i})}async function Ik(){const n=d.inv.find(t=>t.id===d.adjId);if(!n)return;const e=parseInt(f("adjlowthresh").value);!isNaN(e)&&e>=0&&await oe({...n,restockThreshold:e})}async function Ek(){var t;const n=d.inv.find(i=>i.id===d.adjId);if(!n)return;const e=((t=f("adjdonotrestock"))==null?void 0:t.checked)||!1;await oe({...n,doNotRestock:e})}async function kk(n,e){const t=d.inv.find(r=>r.id===n);if(!t)return;const i={...t,unit:e};t.restockThreshold==null,await oe(i),Vl(t.name,e);const s=d.shop.find(r=>r.name.toLowerCase().trim()===t.name.toLowerCase().trim());s&&await ve({...s,unit:e}),S("Unit updated everywhere"),sr(n)}async function Sk(n,e){const t=d.inv.find(u=>u.id===n);if(!t)return;const i=f(`inv-thresh-${n}`),s=f(`inv-threshfrac-${n}`),r=parseInt(i==null?void 0:i.value,10)||0,o=parseFloat(s==null?void 0:s.value)||0,c=Math.max(0,r+e),l=c+o;i&&(i.value=c),await oe({...t,restockThreshold:Math.max(0,l)})}async function Ck(n){const e=d.inv.find(o=>o.id===n);if(!e)return;const t=f(`inv-thresh-${n}`),i=f(`inv-threshfrac-${n}`),s=parseInt(t==null?void 0:t.value,10),r=parseFloat(i==null?void 0:i.value)||0;isNaN(s)||s<0||await oe({...e,restockThreshold:Math.max(0,s+r)})}async function Rk(n){const e=d.inv.find(o=>o.id===n);if(!e)return;const t=f(`inv-thresh-${n}`),i=f(`inv-threshfrac-${n}`),s=parseInt(t==null?void 0:t.value,10)||0,r=parseFloat(i==null?void 0:i.value)||0;await oe({...e,restockThreshold:Math.max(0,s+r)})}async function Ak(n,e){const t=d.inv.find(i=>i.id===n);t&&await oe({...t,doNotRestock:e})}async function xk(n,e,t){const i=d.inv.find(r=>r.id===n);if(!i)return;const s=f("invItemDetailContent");s&&s.querySelectorAll(".lbtn").forEach(r=>r.classList.remove("sel")),t&&t.classList.add("sel"),await oe({...i,location:e}),Ol(i.name,e)}async function Pk(n,e){const t=d.inv.find(u=>u.id===n);if(!t)return;const i=f(`inv-qty-${n}`),s=f(`inv-frac-${n}`),r=parseInt(i==null?void 0:i.value,10)||0,o=parseFloat(s==null?void 0:s.value)||0,c=Math.max(0,Math.min(99,r+e)),l=bn(c,o);e<0&&bn(r,o)<=.25||(i&&(i.value=Math.floor(l)),c===0&&o===0&&s&&(s.value="0.25"),await oe({...t,qty:l}))}async function $k(n){const e=d.inv.find(c=>c.id===n);if(!e)return;const t=f(`inv-qty-${n}`),i=f(`inv-frac-${n}`),s=parseInt(t==null?void 0:t.value,10),r=parseFloat(i==null?void 0:i.value)||0;if(isNaN(s)||s<0)return;const o=bn(s,r);await oe({...e,qty:o})}async function Lk(n){const e=d.inv.find(c=>c.id===n);if(!e)return;const t=f(`inv-qty-${n}`),i=f(`inv-frac-${n}`),s=parseInt(t==null?void 0:t.value,10)||0,r=parseFloat(i==null?void 0:i.value)||0,o=bn(s,r);r===0&&s===0&&t&&(t.value=1),await oe({...e,qty:o})}async function Dk(n){const e=d.inv.find(i=>i.id===n);if(!e)return;const t=f(`inv-expiry-${n}`);await oe({...e,expiry:(t==null?void 0:t.value)||null})}async function Nk(n){const e=d.inv.find(t=>t.id===n);e&&(await oe({...e,expiry:null}),sr(n))}async function Mk(n){const e=d.inv.find(i=>i.id===n);if(!e)return;const t=new Date().toISOString().split("T")[0];await oe({...e,expiry:t}),sr(n)}async function Ok(n){const e=d.inv.find(s=>s.id===n);if(!e)return;const t=f(`inv-note-${n}`),i=((t==null?void 0:t.value)||"").trim();await oe({...e,note:i||null})}function Vk(n){d.it=n,document.querySelectorAll(".itab").forEach(t=>t.classList.remove("active"));const e=f("itab-"+n);e&&e.classList.add("active"),ir()}async function Uk(){const n=f("man").value.trim();if(!n)return;const e=f("mac").value,t=f("mau").value.trim()||"unit",i=Math.max(1,parseInt(f("maq").value)||1),s=f("mae").value||null,r="itm-"+n.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now();await oe({id:r,barcode:r,name:n,brand:"",unit:t,qty:i,location:d.maL,category:e,image:null,source:"Manual",expiry:s,addedAt:new Date().toLocaleDateString()}),f("man").value="",f("maq").value=1,f("mae").value="",f("mabtn").disabled=!0,S(`${n} added!`),ke("madd"),Fl()}function Fk(){f("mabtn").disabled=!f("man").value.trim()}function Hk(n){const e=f("maq");e.value=Math.max(1,(parseInt(e.value)||1)+n)}function Bk(n,e){d.maL=n,document.querySelectorAll("#ov-madd .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}async function jk(){const n=f("imptxt").value.trim();if(!n)return;let e=0,t=0,i="pantry";for(const s of n.split(`
`)){const r=s.toLowerCase();r.includes("fridge")?i="fridge":r.includes("freezer")?i="freezer":r.includes("pantry")&&(i="pantry");const o=s.match(/^\|\s*([^|]+?)\s*\|\s*(\d+(?:\.\d+)?)\s*\|\s*([^|]+?)\s*\|/),c=s.match(/^[-*]\s+(.+?):\s*(\d+(?:\.\d+)?)\s*([a-zA-Z%\/]+.*)?$/);let l,u,p;if(o?(l=o[1].trim(),u=parseFloat(o[2]),p=o[3].trim()):c&&(l=c[1].trim(),u=parseFloat(c[2]),p=(c[3]||"unit").trim()),l&&u&&l!=="Item"&&l!=="---"&&!l.startsWith("-")){const g="item-imp-"+l.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),w=d.inv.find(I=>I.id===g);await oe({id:g,barcode:g,name:l,brand:"",unit:p||"unit",qty:u,location:i,category:"Imported",image:null,source:"Imported",expiry:null,addedAt:w?w.addedAt:new Date().toLocaleDateString()}),w?t++:e++}}f("imptxt").value="",S(`Imported ${e} new, updated ${t}`),ke("import")}let Rs=null,_n=null,Ko="fridge",rt=null,Ha=!1,xr="",Ba=!1;const ds=new Map,zk=300*1e3,qk=30;function Wk(){const n=f("invAddBackdrop"),e=f("invAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),Ko="fridge",document.querySelectorAll("#invAddSheet .lbtn").forEach(i=>i.classList.remove("sel"));const t=f("invAddLoc-fridge");t&&t.classList.add("sel"),setTimeout(()=>{const i=f("invi");i&&(i.value="",i.focus())},150)}function rr(){const n=f("invAddBackdrop"),e=f("invAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),Bl()}function Gk(){rr(),window.openScanForInventory&&window.openScanForInventory()}function Kk(){rr(),dg()}function Qk(n,e){Ko=n,document.querySelectorAll("#invAddSheet .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function Yk(){const n=f("invAddNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=f("invAddNoteInp");t&&t.focus()}}async function Jk(){const n=f("invi"),e=n?n.value.trim():"";if(!e)return;let t=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||1):s&&(t=s[2].trim(),i=parseInt(s[1],10)||1);const o=f("invAddNoteInp"),c=o?o.value.trim():"",l=await Go(t),u=(l==null?void 0:l.preferredLocation)||Ko,p=(l==null?void 0:l.preferredUnit)||null,g="itm-"+t.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),w={id:g,barcode:g,name:t,brand:"",unit:p||"unit",qty:i,location:u,category:Oi({name:t}),image:null,source:"Manual",expiry:null,addedAt:new Date().toLocaleDateString()};c&&(w.note=c),oe(w),S(`${t} added!`),n&&(n.value=""),o&&(o.value="");const I=f("invAddNoteWrap");I&&(I.style.display="none"),Bl(),rr(),Fl()}function Xk(){Rs&&clearTimeout(Rs);const n=f("invi"),e=n?n.value.trim():"",t=f("invSearchDropdown");if(!e||e.length<2){t&&(t.classList.remove("active"),t.innerHTML=""),_n=null;return}Rs=setTimeout(()=>nS(e),350)}function Zk(n){if(!n)return"NONE";const e=n.toLowerCase();return e.includes("kroger.com")?"Kroger (real product)":e.includes("img.spoonacular.com/products")?"Spoonacular product (real photo)":e.includes("img.spoonacular.com/ingredients")?"Spoonacular ingredient (illustration)":e.includes("openfoodfacts.org")?"Open Food Facts (real photo)":e.includes("edamam")?"Edamam":"Other: "+new URL(n).hostname}function qh(n){const e=f("invSearchDropdown");!e||!n.length||(_n=n,n.forEach((t,i)=>{const s=Zk(t.image);console.log(`[InvDropdown] #${i} "${t.name}" → image: ${s} | url: ${t.image||"(none)"} | score: ${t._score}`)}),e.innerHTML=n.map((t,i)=>{const s='<div class="enrich-img-ph">🛒</div>',r=t.category&&t.category!=="General"?`<div class="enrich-cat">${t.category}</div>`:"";return`<div class="enrich-row" onclick="pickInvInlineResult(${i})">
      ${s}
      <div class="enrich-text">
        <div class="enrich-name">${t.name}</div>
        ${r}
      </div>
    </div>`}).join(""),e.classList.add("active"))}async function eS(n){return null}async function tS(n){const e=n.toLowerCase(),t=ds.get(e);if(t&&Date.now()-t.ts<zk)return t.scored;const i=d.hid?`&hid=${encodeURIComponent(d.hid)}`:"";let o=(await(await fetch(`/api/text-search?q=${encodeURIComponent(n)}${i}`)).json()).results||[];const c=n.toLowerCase().split(/\s+/).filter(u=>u.length>=2);o=o.filter(u=>{const p=(u.name||"").toLowerCase();return c.some(g=>p.includes(g))});const l=o.map(u=>({...u,_score:OE(u.name||"",n)})).filter(u=>u._score>=15).sort((u,p)=>p._score-u._score).slice(0,5);return ds.set(e,{scored:l,ts:Date.now()}),ds.size>qk&&ds.delete(ds.keys().next().value),l}async function nS(n){const e=f("invSearchDropdown");if(e){e.innerHTML='<div class="search-hint">Searching…</div>',e.classList.add("active");try{const t=eS(n),i=tS(n),s=await t;s&&(f("invi")?f("invi").value.trim():"").toLowerCase()===n.toLowerCase()&&(console.log(`[InvSearch] Instant custom product match for "${n}"`),qh([s]));const r=await i;if((f("invi")?f("invi").value.trim():"").toLowerCase()!==n.toLowerCase())return;let c=r;if(s){const l=normalizeProductName(s.name),u=r.filter(p=>normalizeProductName(p.name)!==l);c=[s,...u].slice(0,5)}if(!c.length){e.classList.remove("active"),e.innerHTML="",_n=null;return}qh(c)}catch(t){console.warn("Inventory inline search failed:",t),e.classList.remove("active"),e.innerHTML="",_n=null}}}async function iS(n){if(!_n||!_n[n])return;const e=_n[n],t=f("invAddNoteInp"),i=t?t.value.trim():"",s=await Go(e.name),r="itm-"+(e.name||"item").toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),o={id:r,barcode:r,name:e.name,brand:e.brand||"",unit:(s==null?void 0:s.preferredUnit)||"unit",qty:1,location:(s==null?void 0:s.preferredLocation)||Ko,category:e.category||Oi({name:e.name}),source:e.source||"search",expiry:null,addedAt:new Date().toLocaleDateString()};i&&(o.note=i),oe(o),S(`Added "${e.name}" ✓`);const c=f("invi");c&&(c.value=""),t&&(t.value="");const l=f("invAddNoteWrap");l&&(l.style.display="none"),Bl(),rr()}function Bl(){Rs&&clearTimeout(Rs),_n=null;const n=f("invSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}function sS(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=f("invAddMicOpt");e&&(e.style.display="")}function Wh(n){const e=f("inv-micstatus");e&&e.classList.toggle("visible",n)}function dg(){if(Ha&&rt){Ba=!0,rt.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){S("Voice input not supported");return}rt=new n,rt.lang="en-US",rt.interimResults=!0,rt.maxAlternatives=1,rt.continuous=!1,xr="",Ha=!0,Wh(!0),rt.onresult=e=>{let t="";for(let s=e.resultIndex;s<e.results.length;s++){const r=e.results[s][0].transcript;e.results[s].isFinal?xr+=r:t+=r}const i=f("invi");i&&(i.value=(xr+t).trim())},rt.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&S("Couldn't hear that — try again")},rt.onend=async()=>{Ha=!1,Wh(!1),rt=null;let e=xr.trim();if(!e&&Ba){const o=f("invi");e=o?o.value.trim():""}if(Ba=!1,!e)return;const t=await Go(e),i="itm-"+e.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),s=(t==null?void 0:t.preferredLocation)||Mc(e);oe({id:i,barcode:i,name:e,brand:"",unit:(t==null?void 0:t.preferredUnit)||"unit",qty:1,location:s,category:Oi({name:e}),image:null,source:"Voice",expiry:null,addedAt:new Date().toLocaleDateString()}),S(`Added "${e}" to ${s}`);const r=f("invi");r&&(r.value=""),Fl()},rt.start()}async function rS(n){const{svShopItem:e}=await SE(async()=>{const{svShopItem:s}=await Promise.resolve().then(()=>tT);return{svShopItem:s}},void 0),t=d.inv.find(s=>s.id===n);if(!t)return;if(d.shop.find(s=>s.name.toLowerCase()===t.name.toLowerCase()&&!s.checked)){S(`${t.name} is already on your list`);return}await e({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:t.name,qty:1,checked:!1,brand:t.brand||"",image:t.image||null,src:"supplies"}),S(`${t.name} added to shopping list 🛒`),ug()}/**
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
 */const hg="firebasestorage.googleapis.com",fg="storageBucket",oS=120*1e3,aS=600*1e3;/**
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
 */class we extends Dt{constructor(e,t,i=0){super(ja(e),`Firebase Storage: ${t} (${ja(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,we.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ja(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ye;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ye||(ye={}));function ja(n){return"storage/"+n}function jl(){const n="An unknown error occurred, please check the error payload for server response.";return new we(ye.UNKNOWN,n)}function cS(n){return new we(ye.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function lS(n){return new we(ye.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function uS(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new we(ye.UNAUTHENTICATED,n)}function dS(){return new we(ye.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function hS(n){return new we(ye.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function fS(){return new we(ye.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function pS(){return new we(ye.CANCELED,"User canceled the upload/download.")}function mS(n){return new we(ye.INVALID_URL,"Invalid URL '"+n+"'.")}function gS(n){return new we(ye.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function yS(){return new we(ye.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+fg+"' property when initializing the app?")}function vS(){return new we(ye.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function wS(){return new we(ye.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function _S(n){return new we(ye.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function xc(n){return new we(ye.INVALID_ARGUMENT,n)}function pg(){return new we(ye.APP_DELETED,"The Firebase app was deleted.")}function bS(n){return new we(ye.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function As(n,e){return new we(ye.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function hs(n){throw new we(ye.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class it{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=it.makeFromUrl(e,t)}catch{return new it(e,"")}if(i.path==="")return i;throw gS(e)}static makeFromUrl(e,t){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(D){D.path_=decodeURIComponent(D.path)}const p="v[A-Za-z0-9_]+",g=t.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",I=new RegExp(`^https?://${g}/${p}/b/${s}/o${w}`,"i"),C={bucket:1,path:3},P=t===hg?"(?:storage.googleapis.com|storage.cloud.google.com)":t,$="([^?#]*)",U=new RegExp(`^https?://${P}/${s}/${$}`,"i"),M=[{regex:c,indices:l,postModify:r},{regex:I,indices:C,postModify:u},{regex:U,indices:{bucket:1,path:2},postModify:u}];for(let D=0;D<M.length;D++){const F=M[D],j=F.regex.exec(e);if(j){const b=j[F.indices.bucket];let v=j[F.indices.path];v||(v=""),i=new it(b,v),F.postModify(i);break}}if(i==null)throw mS(e);return i}}class TS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function IS(n,e,t){let i=1,s=null,r=null,o=!1,c=0;function l(){return c===2}let u=!1;function p(...$){u||(u=!0,e.apply(null,$))}function g($){s=setTimeout(()=>{s=null,n(I,l())},$)}function w(){r&&clearTimeout(r)}function I($,...U){if(u){w();return}if($){w(),p.call(null,$,...U);return}if(l()||o){w(),p.call(null,$,...U);return}i<64&&(i*=2);let M;c===1?(c=2,M=0):M=(i+Math.random())*1e3,g(M)}let C=!1;function P($){C||(C=!0,w(),!u&&(s!==null?($||(c=2),clearTimeout(s),g(0)):$||(c=1)))}return g(0),r=setTimeout(()=>{o=!0,P(!0)},t),P}function ES(n){n(!1)}/**
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
 */function kS(n){return n!==void 0}function SS(n){return typeof n=="object"&&!Array.isArray(n)}function zl(n){return typeof n=="string"||n instanceof String}function Gh(n){return ql()&&n instanceof Blob}function ql(){return typeof Blob<"u"}function Kh(n,e,t,i){if(i<e)throw xc(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw xc(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function Qo(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function mg(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const s=e(i)+"="+e(n[i]);t=t+s+"&"}return t=t.slice(0,-1),t}var Wn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Wn||(Wn={}));/**
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
 */function CS(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||s||r}/**
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
 */class RS{constructor(e,t,i,s,r,o,c,l,u,p,g,w=!0,I=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=p,this.connectionFactory_=g,this.retry=w,this.isUsingEmulator=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,P)=>{this.resolve_=C,this.reject_=P,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Pr(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=c=>{const l=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const c=r.getErrorCode()===Wn.NO_ERROR,l=r.getStatus();if(!c||CS(l,this.additionalRetryCodes_)&&this.retry){const p=r.getErrorCode()===Wn.ABORT;i(!1,new Pr(!1,null,p));return}const u=this.successCodes_.indexOf(l)!==-1;i(!0,new Pr(u,r))})},t=(i,s)=>{const r=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());kS(l)?r(l):r()}catch(l){o(l)}else if(c!==null){const l=jl();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?pg():pS();o(l)}else{const l=fS();o(l)}};this.canceled_?t(!1,new Pr(!1,null,!0)):this.backoffId_=IS(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ES(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Pr{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function AS(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function xS(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function PS(n,e){e&&(n["X-Firebase-GMPID"]=e)}function $S(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function LS(n,e,t,i,s,r,o=!0,c=!1){const l=mg(n.urlParams),u=n.url+l,p=Object.assign({},n.headers);return PS(p,e),AS(p,t),xS(p,r),$S(p,i),new RS(u,n.method,p,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o,c)}/**
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
 */function DS(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function NS(...n){const e=DS();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(ql())return new Blob(n);throw new we(ye.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function MS(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function OS(n){if(typeof atob>"u")throw _S("base-64");return atob(n)}/**
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
 */const kt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class za{constructor(e,t){this.data=e,this.contentType=t||null}}function VS(n,e){switch(n){case kt.RAW:return new za(gg(e));case kt.BASE64:case kt.BASE64URL:return new za(yg(n,e));case kt.DATA_URL:return new za(FS(e),HS(e))}throw jl()}function gg(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const r=i,o=n.charCodeAt(++t);i=65536|(r&1023)<<10|o&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function US(n){let e;try{e=decodeURIComponent(n)}catch{throw As(kt.DATA_URL,"Malformed data URL.")}return gg(e)}function yg(n,e){switch(n){case kt.BASE64:{const s=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(s||r)throw As(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case kt.BASE64URL:{const s=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(s||r)throw As(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=OS(e)}catch(s){throw s.message.includes("polyfill")?s:As(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}class vg{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw As(kt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=BS(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function FS(n){const e=new vg(n);return e.base64?yg(kt.BASE64,e.rest):US(e.rest)}function HS(n){return new vg(n).contentType}function BS(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class un{constructor(e,t){let i=0,s="";Gh(e)?(this.data_=e,i=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Gh(this.data_)){const i=this.data_,s=MS(i,e,t);return s===null?null:new un(s)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new un(i,!0)}}static getBlob(...e){if(ql()){const t=e.map(i=>i instanceof un?i.data_:i);return new un(NS.apply(null,t))}else{const t=e.map(o=>zl(o)?VS(kt.RAW,o).data:o.data_);let i=0;t.forEach(o=>{i+=o.byteLength});const s=new Uint8Array(i);let r=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)s[r++]=o[c]}),new un(s,!0)}}uploadData(){return this.data_}}/**
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
 */function wg(n){let e;try{e=JSON.parse(n)}catch{return null}return SS(e)?e:null}/**
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
 */function jS(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function zS(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function _g(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function qS(n,e){return e}class Ge{constructor(e,t,i,s){this.server=e,this.local=t||e,this.writable=!!i,this.xform=s||qS}}let $r=null;function WS(n){return!zl(n)||n.length<2?n:_g(n)}function bg(){if($r)return $r;const n=[];n.push(new Ge("bucket")),n.push(new Ge("generation")),n.push(new Ge("metageneration")),n.push(new Ge("name","fullPath",!0));function e(r,o){return WS(o)}const t=new Ge("name");t.xform=e,n.push(t);function i(r,o){return o!==void 0?Number(o):o}const s=new Ge("size");return s.xform=i,n.push(s),n.push(new Ge("timeCreated")),n.push(new Ge("updated")),n.push(new Ge("md5Hash",null,!0)),n.push(new Ge("cacheControl",null,!0)),n.push(new Ge("contentDisposition",null,!0)),n.push(new Ge("contentEncoding",null,!0)),n.push(new Ge("contentLanguage",null,!0)),n.push(new Ge("contentType",null,!0)),n.push(new Ge("metadata","customMetadata",!0)),$r=n,$r}function GS(n,e){function t(){const i=n.bucket,s=n.fullPath,r=new it(i,s);return e._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:t})}function KS(n,e,t){const i={};i.type="file";const s=t.length;for(let r=0;r<s;r++){const o=t[r];i[o.local]=o.xform(i,e[o.server])}return GS(i,n),i}function Tg(n,e,t){const i=wg(e);return i===null?null:KS(n,i,t)}function QS(n,e,t,i){const s=wg(e);if(s===null||!zl(s.downloadTokens))return null;const r=s.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(u=>{const p=n.bucket,g=n.fullPath,w="/b/"+o(p)+"/o/"+o(g),I=Qo(w,t,i),C=mg({alt:"media",token:u});return I+C})[0]}function YS(n,e){const t={},i=e.length;for(let s=0;s<i;s++){const r=e[s];r.writable&&(t[r.server]=n[r.local])}return JSON.stringify(t)}class Wl{constructor(e,t,i,s){this.url=e,this.method=t,this.handler=i,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Ig(n){if(!n)throw jl()}function JS(n,e){function t(i,s){const r=Tg(n,s,e);return Ig(r!==null),r}return t}function XS(n,e){function t(i,s){const r=Tg(n,s,e);return Ig(r!==null),QS(r,s,n.host,n._protocol)}return t}function Eg(n){function e(t,i){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=dS():s=uS():t.getStatus()===402?s=lS(n.bucket):t.getStatus()===403?s=hS(n.path):s=i,s.status=t.getStatus(),s.serverResponse=i.serverResponse,s}return e}function kg(n){const e=Eg(n);function t(i,s){let r=e(i,s);return i.getStatus()===404&&(r=cS(n.path)),r.serverResponse=s.serverResponse,r}return t}function ZS(n,e,t){const i=e.fullServerUrl(),s=Qo(i,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,c=new Wl(s,r,XS(n,t),o);return c.errorHandler=kg(e),c}function eC(n,e){const t=e.fullServerUrl(),i=Qo(t,n.host,n._protocol),s="DELETE",r=n.maxOperationRetryTime;function o(l,u){}const c=new Wl(i,s,o,r);return c.successCodes=[200,204],c.errorHandler=kg(e),c}function tC(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function nC(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=tC(null,e)),i}function iC(n,e,t,i,s){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let M="";for(let D=0;D<2;D++)M=M+Math.random().toString().slice(2);return M}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const u=nC(e,i,s),p=YS(u,t),g="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,w=`\r
--`+l+"--",I=un.getBlob(g,i,w);if(I===null)throw vS();const C={name:u.fullPath},P=Qo(r,n.host,n._protocol),$="POST",U=n.maxUploadRetryTime,N=new Wl(P,$,JS(n,t),U);return N.urlParams=C,N.headers=o,N.body=I.uploadData(),N.errorHandler=Eg(e),N}class sC{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Wn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Wn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Wn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,s,r){if(this.sent_)throw hs("cannot .send() more than once");if(xn(e)&&i&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw hs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw hs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw hs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw hs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class rC extends sC{initXhr(){this.xhr_.responseType="text"}}function Gl(){return new rC}/**
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
 */class Zn{constructor(e,t){this._service=e,t instanceof it?this._location=t:this._location=it.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Zn(e,t)}get root(){const e=new it(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _g(this._location.path)}get storage(){return this._service}get parent(){const e=jS(this._location.path);if(e===null)return null;const t=new it(this._location.bucket,e);return new Zn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw bS(e)}}function oC(n,e,t){n._throwIfRoot("uploadBytes");const i=iC(n.storage,n._location,bg(),new un(e,!0),t);return n.storage.makeRequestWithTokens(i,Gl).then(s=>({metadata:s,ref:n}))}function aC(n){n._throwIfRoot("getDownloadURL");const e=ZS(n.storage,n._location,bg());return n.storage.makeRequestWithTokens(e,Gl).then(t=>{if(t===null)throw wS();return t})}function cC(n){n._throwIfRoot("deleteObject");const e=eC(n.storage,n._location);return n.storage.makeRequestWithTokens(e,Gl)}function lC(n,e){const t=zS(n._location.path,e),i=new it(n._location.bucket,t);return new Zn(n.storage,i)}/**
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
 */function uC(n){return/^[A-Za-z]+:\/\//.test(n)}function dC(n,e){return new Zn(n,e)}function Sg(n,e){if(n instanceof Kl){const t=n;if(t._bucket==null)throw yS();const i=new Zn(t,t._bucket);return e!=null?Sg(i,e):i}else return e!==void 0?lC(n,e):n}function hC(n,e){if(e&&uC(e)){if(n instanceof Kl)return dC(n,e);throw xc("To use ref(service, url), the first argument must be a Storage instance.")}else return Sg(n,e)}function Qh(n,e){const t=e==null?void 0:e[fg];return t==null?null:it.makeFromBucketSpec(t,n)}function fC(n,e,t,i={}){n.host=`${e}:${t}`;const s=xn(e);s&&(Oc(`https://${n.host}/b`),Vc("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:r}=i;r&&(n._overrideAuthToken=typeof r=="string"?r:bf(r,n.app.options.projectId))}class Kl{constructor(e,t,i,s,r,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._isUsingEmulator=o,this._bucket=null,this._host=hg,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=oS,this._maxUploadRetryTime=aS,this._requests=new Set,s!=null?this._bucket=it.makeFromBucketSpec(s,this._host):this._bucket=Qh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=it.makeFromBucketSpec(this._url,e):this._bucket=Qh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Kh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Kh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Ke(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Zn(this,e)}_makeRequest(e,t,i,s,r=!0){if(this._deleted)return new TS(pg());{const o=LS(e,this._appId,i,s,t,this._firebaseVersion,r,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,s).getPromise()}}const Yh="@firebase/storage",Jh="0.14.1";/**
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
 */const Cg="storage";function pC(n,e,t){return n=Ne(n),oC(n,e,t)}function mC(n){return n=Ne(n),aC(n)}function gC(n){return n=Ne(n),cC(n)}function Rg(n,e){return n=Ne(n),hC(n,e)}function yC(n=Hc(),e){n=Ne(n);const i=Ro(n,Cg).getImmediate({identifier:e}),s=vf("storage");return s&&vC(i,...s),i}function vC(n,e,t,i={}){fC(n,e,t,i)}function wC(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Kl(t,i,s,e,ei)}function _C(){Qn(new Tn(Cg,wC,"PUBLIC").setMultipleInstances(!0)),St(Yh,Jh,""),St(Yh,Jh,"esm2020")}_C();const Ag=yC(Xc);function bC(n,e,t,i){return new Promise((s,r)=>{const o=new Image,c=new FileReader;c.onload=l=>{o.onload=()=>{let u=o.width,p=o.height;if(u>e||p>t){const P=Math.min(e/u,t/p);u=Math.round(u*P),p=Math.round(p*P)}const g=document.createElement("canvas");g.width=u,g.height=p,g.getContext("2d").drawImage(o,0,0,u,p);let I=.82;const C=()=>{g.toBlob(P=>{if(!P)return r(new Error("Canvas compression failed"));P.size<=i||I<=.3?s(P):(I-=.1,C())},"image/jpeg",I)};C()},o.onerror=()=>r(new Error("Failed to load image")),o.src=l.target.result},c.onerror=()=>r(new Error("Failed to read file")),c.readAsDataURL(n)})}async function Ql(n,e,t,i,s){if(!n)throw new Error("No file provided");const r=await bC(n,t,i,s);console.log(`[uploadRecipeImage] Compressed to ${(r.size/1024).toFixed(1)}KB → ${e}`);const o=Rg(Ag,e);await pC(o,r,{contentType:"image/jpeg"});const c=await mC(o);return console.log("[uploadRecipeImage] Upload complete:",e),c}async function xg(n,e){return Ql(n,`recipes/${e}/cover.jpg`,800,600,300*1024)}async function TC(n,e,t){return Ql(n,`recipes/${e}/steps/${t}.jpg`,800,600,300*1024)}async function IC(n,e,t,i){return Ql(n,`recipes/${e}/comments/${t}/${i}.jpg`,600,600,200*1024)}async function Pg(n){try{const e=Rg(Ag,n);await gC(e),console.log("[deleteRecipeStorageFile] Deleted:",n)}catch(e){e.code!=="storage/object-not-found"&&console.error("[deleteRecipeStorageFile] Error:",e)}}const EC=20,kC=.4,SC="cubic-bezier(0.25, 1.0, 0.5, 1)",CC="cubic-bezier(0.2, 0, 0, 1)";let Yl=null,Jl=!1,Gn=!1,$g=0,Lg=0,Pc=!1,$c=!1,Be=null,xs=null,bo=null,Ii=null;function Yo(n){Xl(),Yl=n,Jl=!0,xs=RC,bo=AC,Ii=xC,document.addEventListener("touchstart",xs,{passive:!0}),document.addEventListener("touchmove",bo,{passive:!1}),document.addEventListener("touchend",Ii,{passive:!0}),document.addEventListener("touchcancel",Ii,{passive:!0})}function Xl(){xs&&(document.removeEventListener("touchstart",xs),document.removeEventListener("touchmove",bo),document.removeEventListener("touchend",Ii),document.removeEventListener("touchcancel",Ii)),Jl=!1,Gn=!1,Yl=null,Be=null,xs=null,bo=null,Ii=null}function RC(n){if(!Jl)return;const e=n.touches[0];e.clientX>EC||(Be=document.querySelector(".ov.active"),Be&&(Gn=!0,$g=e.clientX,Lg=e.clientY,Pc=!1,$c=!1,Be.style.transition="none"))}function AC(n){if(!Gn||!Be)return;const e=n.touches[0],t=e.clientX-$g,i=e.clientY-Lg;if(!Pc){if(Math.abs(t)<8&&Math.abs(i)<8)return;Pc=!0,$c=Math.abs(t)>Math.abs(i)}if(!$c){Gn=!1,Be.style.transform="",Be.style.transition="";return}n.preventDefault();const s=Math.max(0,t);Be.style.transform=`translateX(${s}px)`}function xC(n){if(!Gn||!Be){Gn=!1;return}Gn=!1;const e=Be.style.transform,t=parseFloat(e.replace("translateX(",""))||0,i=window.innerWidth;if(t/i>=kC){Be.style.transition=`transform 0.25s ${CC}`,Be.style.transform=`translateX(${i}px)`;const r=Be,o=Yl;setTimeout(()=>{r.style.transform="",r.style.transition="",o&&o()},260)}else{Be.style.transition=`transform 0.3s ${SC}`,Be.style.transform="translateX(0)";const r=Be;setTimeout(()=>{r.style.transition=""},310)}}let Li="view",xt=null,Ei={},It=[],Bn=[],jn=0,or={add:!1,edit:!1};function PC(n){if(n<=0)return"";if(n<60)return String(n);const e=Math.floor(n/60),t=n%60;return t===0?`${e} hour${e>1?"s":""}`:`${e} hour${e>1?"s":""} ${t} min`}function Di(n,e){const t=f(n),i=f(e);if(!t)return"";const s=t.value.trim();if(!s)return"";if(isNaN(s))return s;const r=i?i.value:"min",o=parseFloat(s);return r==="hr"?o===1?"1 hour":`${o} hours`:`${o} min`}function Xh(n,e){const t=f(n),i=f(e);if(!t)return NaN;const s=parseFloat(t.value.trim());return isNaN(s)?NaN:(i?i.value:"min")==="hr"?s*60:s}function $C(n){if(or[n])return;const e=n==="add"?"rpreptime":"epreptime",t=n==="add"?"rpreptimeunit":"epreptimeunit",i=n==="add"?"rcooktime":"ecooktime",s=n==="add"?"rcooktimeunit":"ecooktimeunit",r=n==="add"?"rtotaltime":"etotaltime",o=n==="add"?"rtotaltimeunit":"etotaltimeunit",c=Xh(e,t),l=Xh(i,s),u=f(r),p=f(o);if(!u)return;if(isNaN(c)&&isNaN(l)){u.value="";return}const g=(isNaN(c)?0:c)+(isNaN(l)?0:l);if(g<=0){u.value="";return}if(g>=60){const w=PC(g);u.value=w,p&&(p.value="min")}else u.value=String(g),p&&(p.value="min")}function LC(n){or[n]=!0}function Dg(n,e){const t=f(n);if(!t)return"";const i=t.value.trim();if(!i)return"";if(isNaN(i))return i;const s=f(e),r=s?s.value:"min",o=parseFloat(i);return r==="hr"?o===1?"1 hour":`${o} hours`:`${o} min`}function Ht(n){if(!n)return{value:"",unit:"min"};const e=n.match(/^(\d+\.?\d*)\s*hours?$/i);if(e)return{value:e[1],unit:"hr"};const t=n.match(/^(\d+\.?\d*)\s*min(utes?)?$/i);return t?{value:t[1],unit:"min"}:/\d+\s*hour/i.test(n)&&/\d+\s*min/i.test(n)?{value:n,unit:"min"}:isNaN(n)?{value:n,unit:"min"}:{value:n,unit:"min"}}function Ng(n,e){const t=f(n);if(!t)return;const i=t.querySelectorAll(".diff-pill"),s=t.querySelector(`.diff-pill.sel[data-val="${e}"]`);if(i.forEach(r=>r.classList.remove("sel")),!s){const r=t.querySelector(`.diff-pill[data-val="${e}"]`);r&&r.classList.add("sel")}}function Mg(n){const e=document.querySelector(`#${n} .diff-pill.sel`);return e?e.dataset.val:""}function Zl(n){return[...document.querySelectorAll("#"+n+" .tag.sel")].map(e=>e.dataset.tag)}function Og(n,e){document.querySelectorAll("#"+n+" .tag").forEach(t=>{t.classList.toggle("sel",(e||[]).includes(t.dataset.tag))})}function DC(n){n.classList.toggle("sel")}const Qr=[{cat:"Meal Type",tags:["Breakfast","Lunch","Dinner","Snack","Dessert","Drinks","Brunch","Bread & Baking","Sauce & Condiment","Preserve & Pickle"]},{cat:"Diet & Lifestyle",tags:["Vegetarian","Vegan","Pescatarian","Meat","Gluten-Free","Dairy-Free","Nut-Free","Sugar-Free","Healthy","High Protein","Low Carb","Keto","Heart Healthy","Pregnancy-Safe","Baby & Toddler","Halal","Kosher","Paleo","Egg-Free","Mediterranean"]},{cat:"Cook Style",tags:["Quick","Kid-Friendly","Date Night","Batch Cook","Freezer Friendly","One Pot","Special Occasion","Budget Friendly","Spicy","Pasta","Salad","Soup & Stew","Grill & BBQ","Slow Cooker","Air Fryer","Meal Prep","World Cuisine","Fermented & Preserved","Stovetop","Wrap & Sandwich","Street Food","Raw & No-Cook","Camping & Outdoors"]},{cat:"Occasion",tags:["Holiday","Party","Summer","Winter Comfort","Halloween","Thanksgiving","Easter","Valentine's Day","Game Day","Graduation","Brunch Party","Ramadan","Hanukkah"]},{cat:"Cuisine",tags:["Italian","Mexican","Japanese","Chinese","Indian","Thai","Greek","French","Middle Eastern","Korean","Spanish","Vietnamese","American","African","Latin American","Turkish","Mediterranean Cuisine"]},{cat:"Protein",tags:["Chicken","Beef","Pork","Fish","Seafood","Eggs","Beans & Legumes","Nuts & Seeds","Cheese"]}];function Lc(n){if(n==="my"){const e=d.recFilters;let t=e.tags.length+e.protein.length;return e.difficulty&&t++,e.cookTime!=="any"&&t++,e.serves!=="any"&&t++,t}else{let e=d.comTags.length;return d.comCuisine!=="all"&&e++,d.comTime!=="any"&&e++,d.comMinRating>0&&e++,e}}function Vg(n){const t=le(n==="my"?"ks-recFiltersOpen":"ks-comFiltersOpen"),i=Lc(n),s=i>0?` (${i})`:"";let r=`<button class="filter-toggle" id="${n}-filter-toggle" onclick="toggleFilterPanel('${n}')">
    <span>Filters${s}</span><span>${t?"▲":"▼"}</span>
  </button>`;if(r+=`<div class="filter-panel" id="${n}-filter-panel" style="display:${t?"block":"none"}">`,n==="my"){const o=d.recFilters;r+='<div class="filter-section"><div class="filter-section-title">Difficulty</div><div class="filter-row">',["Easy","Medium","Hard"].forEach(c=>{r+=`<button class="filter-pill${o.difficulty===c?" sel":""}" onclick="setRecDifficulty('${c}')">${c}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Cook Time</div><div class="filter-row">',[["any","Any"],["under30","Under 30 min"],["under60","Under 1 hour"],["over60","Over 1 hour"]].forEach(([c,l])=>{r+=`<button class="filter-pill${o.cookTime===c?" sel":""}" onclick="setRecCookTime('${c}')">${l}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Serves</div><div class="filter-row">',[["any","Any"],["1-2","1–2"],["3-4","3–4"],["5+","5+"]].forEach(([c,l])=>{r+=`<button class="filter-pill${o.serves===c?" sel":""}" onclick="setRecServes('${c}')">${l}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Protein</div><div class="filter-row">',Qr.find(c=>c.cat==="Protein").tags.forEach(c=>{r+=`<button class="filter-pill${o.protein.includes(c)?" sel":""}" onclick="toggleRecProtein('${c}')">${c}</button>`}),r+="</div></div>",r+=`<div class="filter-section"><div class="filter-section-title">Tags</div><div class="filter-row" style="max-height:${le("ks-recTagsExpanded")?"none":"0"};overflow:hidden;transition:max-height .2s" id="my-tags-wrap">`,Qr.forEach(c=>{c.tags.forEach(l=>{r+=`<button class="filter-pill${o.tags.includes(l)?" sel":""}" onclick="toggleRecTag('${l.replace(/'/g,"\\'")}')">${l}</button>`})}),r+="</div>",r+=`<button class="filter-pill" style="margin-top:4px;font-size:.7rem;color:var(--ac);border-color:var(--ac)" onclick="toggleRecTagsExpand()">${le("ks-recTagsExpanded")?"Hide tags ▲":"Show all tags ▼"}${o.tags.length?` (${o.tags.length} selected)`:""}</button>`,r+="</div>",i>0&&(r+='<button class="filter-pill" style="color:var(--rd);border-color:var(--rd);width:100%;text-align:center;margin-top:4px" onclick="clearRecFilters()">Clear all filters</button>')}else r+='<div class="filter-section"><div class="filter-section-title">Min Rating</div><div class="filter-row">',[[0,"Any"],[1,"1★+"],[2,"2★+"],[3,"3★+"],[4,"4★+"]].forEach(([c,l])=>{r+=`<button class="filter-pill${d.comMinRating===c?" sel":""}" onclick="setComMinRating(${c})">${l}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Cook Time</div><div class="filter-row">',[["any","Any"],["under30","Under 30 min"],["30to60","30–60 min"],["over60","Over 1 hour"]].forEach(([c,l])=>{r+=`<button class="filter-pill${d.comTime===c?" sel":""}" onclick="setComTime('${c}')">${l}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Cuisine</div><div class="filter-row">',["all","Italian","Mexican","Japanese","Chinese","Indian","Thai","Greek","French","Middle Eastern","Korean","Spanish","Vietnamese","American","African","Latin American","Turkish","Mediterranean","Bangladeshi"].forEach(c=>{r+=`<button class="filter-pill${d.comCuisine===c.toLowerCase()?" sel":""}" onclick="setComCuisine('${c.toLowerCase()}')">${c==="all"?"All":c}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Sort</div><div class="filter-row">',[["newest","Newest"],["popular","Most Popular"],["rated","Highest Rated"],["az","A → Z"],["cooktime","Cook Time"]].forEach(([c,l])=>{r+=`<button class="filter-pill${d.comSort===c?" sel":""}" onclick="setComSort('${c}')">${l}</button>`}),r+="</div></div>",r+=`<div class="filter-section"><div class="filter-section-title">Tags</div><div class="filter-row" style="max-height:${le("ks-comTagsOpen")?"none":"0"};overflow:hidden;transition:max-height .2s" id="com-tags-wrap">`,Qr.forEach(c=>{c.tags.forEach(l=>{r+=`<button class="filter-pill${d.comTags.includes(l)?" sel":""}" onclick="toggleComTag('${l.replace(/'/g,"\\'")}')">${l}</button>`})}),r+="</div>",r+=`<button class="filter-pill" style="margin-top:4px;font-size:.7rem;color:var(--ac);border-color:var(--ac)" onclick="toggleComTagsPanel()">${le("ks-comTagsOpen")?"Hide tags ▲":"Show all tags ▼"}${d.comTags.length?` (${d.comTags.length} selected)`:""}</button>`,r+="</div>",Lc("com")>0&&(r+='<button class="filter-pill" style="color:var(--rd);border-color:var(--rd);width:100%;text-align:center;margin-top:4px" onclick="clearComFilters()">Clear all filters</button>');return r+="</div>",r}function NC(n){d.recSearch=n,Ze()}function MC(n){d.recSort=n,Oe("ks-recSort",n),Ze()}function OC(n){const e=n==="my"?"ks-recFiltersOpen":"ks-comFiltersOpen",t=f(`${n}-filter-panel`),i=f(`${n}-filter-toggle`);if(!t)return;const s=t.style.display!=="none";t.style.display=s?"none":"block",Oe(e,!s);const r=Lc(n),o=r>0?` (${r})`:"";i&&(i.innerHTML=`<span>Filters${o}</span><span>${s?"▼":"▲"}</span>`)}function VC(n){d.recFilters.difficulty=d.recFilters.difficulty===n?"":n,Wi(),Ze()}function UC(n){d.recFilters.cookTime=n,Wi(),Ze()}function FC(n){d.recFilters.serves=n,Wi(),Ze()}function HC(n){const e=d.recFilters.protein.indexOf(n);e>=0?d.recFilters.protein.splice(e,1):d.recFilters.protein.push(n),Wi(),Ze()}function BC(n){const e=d.recFilters.tags.indexOf(n);e>=0?d.recFilters.tags.splice(e,1):d.recFilters.tags.push(n),Wi(),Ze()}function jC(){const n=le("ks-recTagsExpanded");Oe("ks-recTagsExpanded",!n),Ze()}function zC(){d.recFilters={tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[]},d.recSearch="",Wi(),Ze()}function Wi(){Oe("ks-recFilters",d.recFilters)}function qC(){const n=le("ks-recFilters");n&&(d.recFilters={tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[],...n}),d.recSort=le("ks-recSort")||"az"}qC();function WC(){const n=le("ks-comTagsOpen");Oe("ks-comTagsOpen",!n),lt()}function GC(){d.comTags=[],d.comCuisine="all",d.comTime="any",d.comMinRating=0,d.comSort="newest",d.comSearch="",d.comPage=0,lt()}function KC(n){if(!n)return 0;const e=n.match(/(\d+)/);return e?parseInt(e[1]):0}function QC(n){const e=Array.from({length:5},(c,l)=>`<span class="star${l<n.rating?" on":""}">${l<n.rating?"★":"☆"}</span>`).join(""),t=n.sourceUrl?`<a href="${n.sourceUrl}" target="_blank" onclick="event.stopPropagation()" style="font-size:.68rem;color:var(--ac);text-decoration:none;border:1px solid rgba(212,168,83,.3);border-radius:20px;padding:2px 8px;background:transparent">🔗 View original</a>`:n.source?`<span class="sbdg">${n.source}</span>`:"",i=n.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;max-height:140px"><img src="${n.imageUrl}" alt="" style="width:100%;height:140px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",s=[n.totalTime||n.cookTime?`⏱ ${n.totalTime||n.cookTime}`:"",n.servings?`🍽 ${n.servings} servings`:""].filter(Boolean),r=s.length?`<div style="display:flex;gap:6px;margin-top:6px;flex-wrap:wrap">${s.map(c=>`<span style="font-size:.68rem;color:var(--mt);background:var(--b1);border-radius:8px;padding:2px 8px">${c}</span>`).join("")}</div>`:"",o=n.summary?`<div class="rnot" style="color:var(--tx2);margin-top:6px;font-style:italic">${n.summary}</div>`:n.description?`<div class="rnot" style="color:var(--tx2);margin-top:6px">${n.description.substring(0,100)}${n.description.length>100?"…":""}</div>`:"";return`<div class="rcd${n.favorited?" fav":""}" onclick="openRecipeView('${n.id}')">${i}<div class="rrow"><div class="rnm">${n.name}</div><div class="rfav" onclick="event.stopPropagation();togFav('${n.id}')">${n.favorited?"❤️":"🤍"}</div></div><div class="stars">${e}</div>${r}${o}${n.notes?`<div class="rnot">${n.notes}</div>`:""}<div class="rmeta"><span>${n.savedAt}</span>${t}</div></div>`}function YC(n){d.rt=n,document.querySelectorAll(".rtab").forEach(t=>t.classList.remove("active"));const e=f("rtab-"+n);e&&e.classList.add("active"),n==="community"?tu():Ze()}function Ze(){if(d.rt==="community")return;let n=[...d.recs];if(d.rt==="fav"?n=n.filter(o=>o.favorited):d.rt==="top"?n=n.filter(o=>o.rating>=4):d.rt==="quick"?n=n.filter(o=>(o.tags||[]).includes("Quick")):d.rt==="kid"&&(n=n.filter(o=>(o.tags||[]).includes("Kid-Friendly"))),d.recSearch){const o=d.recSearch.toLowerCase();n=n.filter(c=>(c.name||"").toLowerCase().includes(o))}const e=d.recFilters;e.tags.length&&(n=n.filter(o=>e.tags.every(c=>(o.tags||[]).includes(c)))),e.difficulty&&(n=n.filter(o=>o.difficulty===e.difficulty)),e.cookTime&&e.cookTime!=="any"&&(n=n.filter(o=>{const c=Jr(o.cookTime||o.totalTime);return c?e.cookTime==="under30"?c<=30:e.cookTime==="under60"?c<=60:e.cookTime==="over60"?c>60:!0:!1})),e.serves&&e.serves!=="any"&&(n=n.filter(o=>{const c=KC(o.servings);return c?e.serves==="1-2"?c<=2:e.serves==="3-4"?c>=3&&c<=4:e.serves==="5+"?c>=5:!0:!1})),e.protein.length&&(n=n.filter(o=>e.protein.some(c=>(o.tags||[]).includes(c))));const t=d.recSort||"az";t==="az"?n.sort((o,c)=>(o.name||"").localeCompare(c.name||"")):t==="newest"?n.sort((o,c)=>new Date(c.savedAt||0)-new Date(o.savedAt||0)):t==="rating"&&n.sort((o,c)=>(c.rating||0)-(o.rating||0));const i=f("rsub");i&&(i.textContent=n.length+" recipe"+(n.length!==1?"s":""));const s=f("rbody");if(!s)return;const r=`<div style="margin-bottom:12px">
    <input class="fi" id="rec-search" placeholder="Search recipes…" value="${(d.recSearch||"").replace(/"/g,"&quot;")}" oninput="setRecSearch(this.value)" style="margin-bottom:8px"/>
    <div style="display:flex;gap:6px;margin-bottom:8px">
      <select class="fsel" onchange="setRecSort(this.value)" style="font-size:.78rem;padding:7px 10px;flex:1">
        <option value="az"${t==="az"?" selected":""}>A → Z</option>
        <option value="newest"${t==="newest"?" selected":""}>Newest first</option>
        <option value="rating"${t==="rating"?" selected":""}>Highest rated</option>
      </select>
    </div>
    ${Vg("my")}
  </div>`;if(!n.length){const o=d.recSearch||e.tags.length||e.difficulty||e.cookTime!=="any"||e.serves!=="any"||e.protein.length;s.innerHTML=r+`<div class="es"><div class="ei">📖</div><p>${o?"No recipes match your filters.":d.rt==="fav"?"No favorites yet!":d.rt==="top"?"No 4–5 star recipes yet.":d.rt==="quick"?"No quick recipes saved yet.":d.rt==="kid"?"No kid-friendly recipes yet.":"No recipes saved yet.<br/>Mark meals as cooked or tap + Add."}</p></div>`;return}s.innerHTML=r+`<div class="recipe-grid">${n.map(QC).join("")}</div>`}async function JC(n){const e=d.recs.find(t=>t.id===n);e&&(await Je({...e,favorited:!e.favorited}),S(e.favorited?"Removed from favorites":"Added to favorites! ❤️"))}function XC(){f("savrecbtn").disabled=!f("rn").value.trim()}async function ZC(){const n=f("rurl").value.trim();if(!n)return;const e=f("rurlstatus"),t=f("rimportbtn");e.style.display="block",e.style.color="var(--mt)",e.textContent="🤖 Importing recipe with AI…",t.disabled=!0;try{const s=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})})).json();if(!s.success){e.style.color="var(--rd)",e.textContent="⚠️ "+(s.error||"Couldn't import this recipe"),t.disabled=!1;return}const r=s.recipe,o=eu(r);if(f("rn").value=r.title||"",f("rd").value=o,f("rnotes").value=r.notes||"",f("rsourceurl").value=n,f("rcuisine")&&(f("rcuisine").value=r.cuisine||""),r.tags&&r.tags.length&&Og("rtags",r.tags),f("savrecbtn").disabled=!r.title,lR(r.imageUrl),d._importedRecipe={ingredientsRaw:r.ingredients||[],stepsRaw:r.steps||[],imageUrl:r.imageUrl||null,prepTime:r.prepTime||"",cookTime:r.cookTime||"",totalTime:r.totalTime||"",servings:r.servings||"",difficulty:r.difficulty||"",recipeYield:r.recipeYield||"",storageInstructions:r.storageInstructions||"",summary:r.summary||""},r.prepTime){const l=Ht(r.prepTime);f("rpreptime")&&(f("rpreptime").value=l.value),f("rpreptimeunit")&&(f("rpreptimeunit").value=l.unit)}if(r.cookTime){const l=Ht(r.cookTime);f("rcooktime")&&(f("rcooktime").value=l.value),f("rcooktimeunit")&&(f("rcooktimeunit").value=l.unit)}if(r.totalTime){const l=Ht(r.totalTime);f("rtotaltime")&&(f("rtotaltime").value=l.value),f("rtotaltimeunit")&&(f("rtotaltimeunit").value=l.unit),or.add=!0}r.servings&&f("rserves")&&(f("rserves").value=r.servings),r.difficulty&&["Easy","Medium","Hard"].includes(r.difficulty)&&Ng("rdiff",r.difficulty),r.recipeYield&&f("ryield")&&(f("ryield").value=r.recipeYield),r.storageInstructions&&f("rstorage")&&(f("rstorage").value=r.storageInstructions);const c=[r.prepTime?`Prep: ${r.prepTime}`:"",r.cookTime?`Cook: ${r.cookTime}`:"",r.servings?`Serves: ${r.servings}`:""].filter(Boolean);e.style.color="var(--gn)",e.textContent="✓ Recipe imported! "+(c.length?c.join(" · "):"Review and save.")}catch(i){console.error("importFromUrl:",i),e.style.color="var(--rd)",e.textContent="⚠️ Couldn't import — try copying the recipe text manually."}t.disabled=!1}function eR(n){const e=f("importOnePane"),t=f("importManyPane"),i=f("importOneTab"),s=f("importManyTab");e&&(e.style.display=n==="one"?"block":"none"),t&&(t.style.display=n==="many"?"block":"none"),i&&(i.style.background=n==="one"?"var(--ac)":"",i.style.color=n==="one"?"var(--bg)":""),s&&(s.style.background=n==="many"?"var(--ac)":"",s.style.color=n==="many"?"var(--bg)":"")}function tR(n){const e=/https?:\/\/[^\s<>"'`,;)}\]]+/gi,i=(n.match(e)||[]).map(s=>s.replace(/[.,;:!?)}\]]+$/,""));return[...new Set(i)]}function nR(n){const e=n.toLowerCase(),t=[{pattern:/youtube\.com|youtu\.be/,name:"YouTube"},{pattern:/tiktok\.com/,name:"TikTok"},{pattern:/instagram\.com\/reel/,name:"Instagram Reel"},{pattern:/vimeo\.com/,name:"Vimeo"},{pattern:/twitter\.com|x\.com/,name:"X/Twitter"}];for(const r of t)if(r.pattern.test(e))return{status:"video",reason:`${r.name} video — can't extract recipe text`};const i=[{pattern:/evernote\.com/,name:"Evernote"},{pattern:/docs\.google\.com/,name:"Google Docs"},{pattern:/drive\.google\.com/,name:"Google Drive"},{pattern:/dropbox\.com/,name:"Dropbox"},{pattern:/notion\.so/,name:"Notion"},{pattern:/onenote\.com|onedrive\.live\.com/,name:"OneDrive/OneNote"},{pattern:/icloud\.com/,name:"iCloud"},{pattern:/keep\.google\.com/,name:"Google Keep"}];for(const r of i)if(r.pattern.test(e))return{status:"private",reason:`${r.name} — private or inaccessible link`};const s=[{pattern:/cooking\.nytimes\.com/,name:"NYT Cooking"},{pattern:/food52\.com/,name:"Food52"}];for(const r of s)if(r.pattern.test(e))return{status:"paywall",reason:`${r.name} — may be paywalled`};return{status:"ok",reason:""}}async function iR(){const n=f("bulkUrls"),e=n?n.value.trim():"";if(!e)return;const t=tR(e);if(!t.length){S("No URLs found in the text");return}const i=t.map(C=>({url:C,...nR(C)})),s=i.filter(C=>C.status==="ok"),r=i.filter(C=>C.status==="paywall"),o=i.filter(C=>C.status==="video"),c=i.filter(C=>C.status==="private"),l=f("bulkImportProgress");if(!l)return;l.style.display="block";const u=f("bulkImportBtn");u&&(u.disabled=!0);const p=[...s,...r],g=[],w=p.filter(C=>{const P=d.recs.find($=>$.sourceUrl&&$.sourceUrl===C.url);return P?(g.push({url:C.url,name:P.name||P.url}),!1):!0}),I={success:[],duplicates:g,failed:[],skipped:[...o,...c]};for(let C=0;C<w.length;C++){const P=w[C],$=P.status==="paywall"?" — may be paywalled":"";C>0&&(l.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Waiting before next import… (${C+1} of ${w.length})</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`,await new Promise(U=>setTimeout(U,2e3))),l.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Importing ${C+1} of ${w.length}…${$}</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;try{const U=await sR(P.url,l,C,w.length);if(U.success&&U.recipe){const N=U.recipe,M=eu(N),D="rec-"+Date.now()+"-"+Math.random().toString(36).slice(2,6);await Je({id:D,name:N.title||"Untitled Recipe",description:M,notes:N.notes||"",rating:0,favorited:!1,sourceUrl:P.url,source:"AI Import",imageUrl:N.imageUrl||null,ingredientsRaw:N.ingredients||[],stepsRaw:N.steps||[],prepTime:N.prepTime||"",cookTime:N.cookTime||"",totalTime:N.totalTime||"",servings:N.servings||"",difficulty:N.difficulty||"",recipeYield:N.recipeYield||"",storageInstructions:N.storageInstructions||"",tags:N.tags||[],savedAt:new Date().toLocaleDateString()}),I.success.push({url:P.url,name:N.title})}else{const N=oR(U.reason,U.error);I.failed.push({url:P.url,error:N})}}catch(U){I.failed.push({url:P.url,error:U.message})}}aR(l,I),u&&(u.disabled=!1)}async function sR(n,e,t,i){const s=[1e4,2e4,4e4],r=3,o=rR(n),c=await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});let l=await c.json();if(c.status!==429&&l.reason!=="rate_limit")return l;for(let u=0;u<r;u++){const p=s[u]/1e3;e.innerHTML=`<div style="font-size:.78rem;color:var(--yw,orange)">Rate limit hit — waiting ${p}s before retrying ${o}… (${t+1} of ${i})</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`,await new Promise(w=>setTimeout(w,s[u])),e.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Retrying ${t+1} of ${i} (attempt ${u+2})…</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;const g=await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(l=await g.json(),g.status!==429&&l.reason!=="rate_limit")return l}return{success:!1,error:"Rate limit — could not recover after 3 retries",reason:"rate_limit"}}function rR(n){try{const e=new URL(n),t=e.hostname.replace(/^www\./,""),i=e.pathname.replace(/\/$/,"").split("/").filter(Boolean).slice(0,1).join("/");return i?`${t}/${i}`:t}catch{return n.length>40?"…"+n.slice(-40):n}}function oR(n,e){return{rate_limit:"Rate limit hit — too many requests",timeout:"Timed out — page took too long to load",page_blocked:"Page blocked access (login required or bot detection)",page_not_found:"Page not found (404)",page_inaccessible:"Page not accessible",no_recipe:"No recipe content found on page",api_error:"AI parsing error",fetch_error:"Could not fetch page"}[n]||e||"Unknown error"}function aR(n,e){let t="";e.success.length&&(t+=`<div style="color:var(--gn);font-size:.78rem;margin-bottom:6px">✓ ${e.success.length} imported successfully</div>`,t+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.success.forEach(i=>{t+=`<div>• ${i.name||i.url}</div>`}),t+="</div>"),e.duplicates.length&&(t+=`<div style="color:var(--ac);font-size:.78rem;margin-bottom:6px">● ${e.duplicates.length} already in your collection — skipped</div>`,t+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.duplicates.forEach(i=>{t+=`<div>• ${i.name||i.url}</div>`}),t+="</div>"),e.skipped.length&&(t+=`<div style="color:var(--yw,orange);font-size:.78rem;margin-bottom:6px">⚠ ${e.skipped.length} skipped — video or inaccessible links</div>`,t+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.skipped.forEach(i=>{t+=`<div>• ${i.url} <span style="color:var(--mt);font-size:.68rem">(${i.reason})</span></div>`}),t+="</div>"),e.failed.length&&(t+=`<div style="color:var(--rd);font-size:.78rem;margin-bottom:6px">✗ ${e.failed.length} failed</div>`,t+='<div style="font-size:.72rem;margin-bottom:10px;line-height:1.8">',e.failed.forEach(i=>{t+='<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">',t+=`<span style="color:var(--mt);flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i.url}</span>`,t+=`<span style="color:var(--rd);font-size:.66rem;white-space:nowrap">${i.error}</span>`,t+=`<button class="btn bsm" onclick="retryBulkImport('${i.url.replace(/'/g,"\\'")}')">Retry</button>`,t+="</div>"}),t+="</div>"),!e.success.length&&!e.failed.length&&!e.skipped.length&&!e.duplicates.length&&(t='<div style="font-size:.78rem;color:var(--mt)">No URLs were processed.</div>'),n.innerHTML=t}async function cR(n){const e=f("bulkImportProgress");if(!e)return;const t=d.recs.find(s=>s.sourceUrl&&s.sourceUrl===n);if(t){S(`Already imported: ${t.name||n}`);return}const i=e.innerHTML;e.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Retrying ${n}…</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;try{const r=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})})).json();if(r.success&&r.recipe){const o=r.recipe,c=eu(o),l="rec-"+Date.now()+"-"+Math.random().toString(36).slice(2,6);await Je({id:l,name:o.title||"Untitled Recipe",description:c,notes:o.notes||"",rating:0,favorited:!1,sourceUrl:n,source:"AI Import",imageUrl:o.imageUrl||null,ingredientsRaw:o.ingredients||[],stepsRaw:o.steps||[],prepTime:o.prepTime||"",cookTime:o.cookTime||"",totalTime:o.totalTime||"",servings:o.servings||"",difficulty:o.difficulty||"",recipeYield:o.recipeYield||"",storageInstructions:o.storageInstructions||"",tags:o.tags||[],savedAt:new Date().toLocaleDateString()}),S(`Imported: ${o.title||"Recipe"}`),e.innerHTML=i.replace(new RegExp(`<div style="display:flex[^]*?${n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}[^]*?</div>\\s*</div>`),`<div style="color:var(--gn);font-size:.72rem">✓ ${o.title||n} — imported</div>`)}else S("Import failed: "+(r.error||"Unknown error")),e.innerHTML=i}catch(s){S("Import failed: "+s.message),e.innerHTML=i}}function eu(n){const e=[];return n.description&&(e.push(n.description),e.push("")),n.ingredients&&n.ingredients.length&&(e.push("Ingredients:"),n.ingredients.forEach(t=>{if(typeof t=="string")e.push(`- ${t}`);else{const i=[t.amount,t.unit].filter(Boolean).join(" ");e.push(`- ${i?i+" ":""}${t.name}`)}}),e.push("")),n.steps&&n.steps.length&&(e.push("Steps:"),n.steps.forEach((t,i)=>{e.push(`${i+1}. ${t}`)})),e.join(`
`)}function lR(n){const e=document.getElementById("rimgpreview");if(e&&e.remove(),!n)return;const t=f("addRecCoverZone");t&&(t.classList.add("has-preview"),t.innerHTML=`<img src="${n}" alt="Cover preview" onerror="this.parentElement.classList.remove('has-preview')"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('add')">✕</button>`)}async function uR(){var P,$,U,N;const n=f("rn").value.trim();if(!n)return;const e=f("rd").value.trim(),t=f("rsourceurl")?f("rsourceurl").value.trim():"",i=f("rcuisine")?f("rcuisine").value.trim():"",s=Zl("rtags"),r=document.getElementById("rpubtoggle"),o=r?r.classList.contains("on"):!1,c=d._importedRecipe||{},l="rec-"+Date.now();let u=c.imageUrl||null;if(xt)try{S("Uploading cover photo…"),u=await xg(xt,l),xt=null}catch(M){console.error("Cover upload failed:",M),S("Cover photo upload failed — saving recipe without it")}const p={id:l,name:n,rating:d.nr,favorited:!1,notes:f("rnotes").value.trim(),description:e,source:t?"AI Import":"Manual",sourceUrl:t||null,imageUrl:u,tags:s,cuisine:i,prepTime:Di("rpreptime","rpreptimeunit")||c.prepTime||"",cookTime:Di("rcooktime","rcooktimeunit")||c.cookTime||"",totalTime:Dg("rtotaltime","rtotaltimeunit")||c.totalTime||"",servings:(f("rserves")?f("rserves").value.trim():"")||c.servings||"",difficulty:Mg("rdiff")||c.difficulty||"",recipeYield:(f("ryield")?f("ryield").value.trim():"")||c.recipeYield||"",storageInstructions:(f("rstorage")?f("rstorage").value.trim():"")||c.storageInstructions||"",summary:(f("rsummary")?f("rsummary").value.trim():"")||c.summary||"",ingredientsRaw:c.ingredientsRaw||[],stepsRaw:c.stepsRaw||[],stepPhotos:{},cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:o};if(!p.summary&&(p.name||p.description))try{S("Generating summary…");const M=((P=p.ingredientsRaw)==null?void 0:P.join(", "))||p.description||"",j=((N=(U=($=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:200,messages:[{role:"user",content:`Write a 2-sentence summary for this recipe. First sentence: what the dish is. Second sentence: what makes it special or notable. Max 200 characters total. Be concise.

Title: ${p.name}
Cuisine: ${p.cuisine||""}
Ingredients: ${M.substring(0,500)}`}]})})).json()).content)==null?void 0:$[0])==null?void 0:U.text)==null?void 0:N.trim())||"";j&&(p.summary=j)}catch(M){console.error("Auto-summary generation failed:",M)}if(o){const M=X(),D=(M==null?void 0:M.displayName)||localStorage.getItem("ks-who")||"Anonymous",F=await Lo(p,D);p.publicId=F.id,Xe("published",Ae(p.name||"a recipe")+" to community")}await Je(p),f("rn").value="",f("rnotes").value="",f("rd").value="",f("rsourceurl").value="",f("rurl").value="",f("rcuisine")&&(f("rcuisine").value=""),f("rpreptime")&&(f("rpreptime").value=""),f("rcooktime")&&(f("rcooktime").value=""),f("rtotaltime")&&(f("rtotaltime").value=""),f("rserves")&&(f("rserves").value=""),f("rpreptimeunit")&&(f("rpreptimeunit").value="min"),f("rcooktimeunit")&&(f("rcooktimeunit").value="min"),f("rtotaltimeunit")&&(f("rtotaltimeunit").value="min"),f("ryield")&&(f("ryield").value=""),f("rstorage")&&(f("rstorage").value=""),f("rsummary")&&(f("rsummary").value=""),document.querySelectorAll("#rdiff .diff-pill").forEach(M=>M.classList.remove("sel")),or.add=!1,Og("rtags",[]),d.nr=0,d._importedRecipe=null,f("savrecbtn").disabled=!0,Ps("rstars",0);const w=document.getElementById("rimgpreview");w&&w.remove();const I=f("addRecCoverZone");I&&(I.classList.remove("has-preview"),I.innerHTML='<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop</div>'),r&&r.classList.remove("on");const C=f("rurlstatus");C&&(C.style.display="none",C.textContent=""),S("Recipe saved! 📖"),ke("arec")}function Ug(n){const e=d.recs.find(D=>D.id===n);if(!e)return;d.eid=n,Li="view";const t=f("erecTitle");t&&(t.textContent="Recipes"),Yo(()=>ar());let i;e.imageUrl?i=`<div class="rv-cover">
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
  </div>`,u=[e.prepTime?`🔪 Prep: ${e.prepTime}`:"",e.cookTime?`🔥 Cook: ${e.cookTime}`:"",e.totalTime?`⏱ Total: ${e.totalTime}`:"",e.servings?`🍽 Serves: ${e.servings}`:"",e.recipeYield?`🍪 Yield: ${e.recipeYield}`:"",e.difficulty==="Easy"?"⭐ Easy":e.difficulty==="Medium"?"⭐⭐ Medium":e.difficulty==="Hard"?"⭐⭐⭐ Hard":""].filter(Boolean),p=u.length?`<div class="rv-meta">${u.map(D=>`<div class="rv-meta-pill">${D}</div>`).join("")}</div>`:"",g=e.cuisine?`<div class="rv-cuisine">${e.cuisine}</div>`:"",w=(e.tags||[]).length?`<div class="rv-tags">${e.tags.map(D=>`<span class="com-tag">${D}</span>`).join("")}</div>`:"";let I="";if(e.ingredientsRaw&&e.ingredientsRaw.length)I=`<div class="rv-section">Ingredients</div><ul class="rv-ingredients">${e.ingredientsRaw.map(F=>{if(typeof F=="string")return`<li>${ue(F)}</li>`;const j=[F.amount,F.unit].filter(Boolean).join(" ");return`<li>${j?`<strong>${ue(j)}</strong> `:""}${ue(F.name||"")}</li>`}).join("")}</ul>`;else if(e.description){const D=e.description.split(`
`),F=D.findIndex(b=>/^ingredients/i.test(b.trim())),j=D.findIndex(b=>/^steps/i.test(b.trim()));if(F>=0){const b=j>F?j:D.length,v=D.slice(F+1,b).filter(_=>_.trim());v.length&&(I=`<div class="rv-section">Ingredients</div><ul class="rv-ingredients">${v.map(_=>`<li>${ue(_.replace(/^[-•*]\s*/,""))}</li>`).join("")}</ul>`)}}let C="";if(e.stepsRaw&&e.stepsRaw.length)C=`<div class="rv-section">Instructions</div><ol class="rv-steps">${e.stepsRaw.map((F,j)=>{var k;const b=typeof F=="string"?F:F.text||"",v=(k=e.stepPhotos)==null?void 0:k[j],_=v?`<div class="rv-step-photo" onclick="openPhotoViewer(['${v}'],0)"><img src="${v}" alt="Step ${j+1}" onerror="this.parentElement.style.display='none'"/></div>`:"";return`<li>${ue(b)}${_}</li>`}).join("")}</ol>`;else if(e.description){const D=e.description.split(`
`),F=D.findIndex(j=>/^steps/i.test(j.trim()));if(F>=0){const j=D.slice(F+1).filter(b=>b.trim());j.length&&(C=`<div class="rv-section">Instructions</div><ol class="rv-steps">${j.map(b=>`<li>${ue(b.replace(/^\d+\.\s*/,""))}</li>`).join("")}</ol>`)}}let P="";!I&&!C&&e.description&&(P=`<div class="rv-section">Details</div><div style="font-size:.88rem;color:var(--tx2);line-height:1.8;white-space:pre-wrap">${ue(e.description)}</div>`);const $=e.storageInstructions?`<div class="rv-section">🗄️ Storage</div><div class="rv-storage">${ue(e.storageInstructions)}</div>`:"",U=e.notes?`<div class="rv-section">Notes</div><div style="font-size:.86rem;color:var(--tx2);line-height:1.6;font-style:italic;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">${ue(e.notes)}</div>`:"",N=e.sourceUrl?`<div style="margin-top:16px"><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);text-decoration:none">🔗 View original recipe ↗</a></div>`:"",M=`<div class="rv-actions">
    <button class="btn bp bsm" style="flex:1" onclick="scheduleRecipe('${e.name.replace(/'/g,"\\'")}')">📅 Schedule</button>
    <button class="btn bs bsm" style="flex:1" onclick="addRecIngToShop('${e.id}')">🛒 Shop ingredients</button>
    <button class="btn bs bsm" onclick="openER('${e.id}')">✏️ Edit</button>
  </div>`;f("erecbody").innerHTML=`
    ${i}
    ${l}
    ${p}
    ${g}
    ${w}
    ${M}
    ${I}
    ${C}
    ${P}
    ${$}
    ${U}
    ${N}
  `,ct("erec")}function ar(){if(Xl(),Li==="edit"&&d._editingComId){const n=d._editingComId;d._editingComId=null,Io(n);return}if(Li==="edit"&&d.eid)Ug(d.eid);else{const n=f("erecTitle");n&&(n.textContent="Recipes"),ke("erec")}}function ue(n){return(n||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Fg(n){const e=d.recs.find(C=>C.id===n);if(!e)return;d.eid=n,Li="edit",xt=null,Ei={};const t=f("erecTitle");t&&(t.textContent="Edit Recipe"),Yo(()=>ar());const i=e.sourceUrl?`<div class="frow"><label class="flbl">Original</label><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);word-break:break-all">${e.sourceUrl}</a></div>`:"",s=e.tags||[],r=C=>s.includes(C)?" sel":"",o=`<div class="frow"><label class="flbl">Tags</label><div class="tags-grid" id="etags">
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
  <input type="file" id="editCoverInput" accept="image/*" style="display:none" onchange="handleCoverSelected(event,'edit')"/>`,u=Ht(e.prepTime),p=Ht(e.cookTime),g=Ht(e.totalTime);or.edit=!!e.totalTime;const w=`<div style="margin-bottom:14px">
    <div class="frow" style="margin-bottom:8px"><label class="flbl">Prep time</label>
      <div style="display:flex;gap:8px;align-items:center">
        <input class="fi" id="epreptime" type="text" inputmode="numeric" placeholder="e.g. 15" value="${ue(u.value)}" style="flex:1" oninput="recipeTimeChanged('edit')"/>
        <select class="fi" id="epreptimeunit" style="width:auto;min-width:90px" onchange="recipeTimeChanged('edit')">
          <option value="min"${u.unit==="min"?" selected":""}>minutes</option>
          <option value="hr"${u.unit==="hr"?" selected":""}>hours</option>
        </select>
      </div>
    </div>
    <div class="frow" style="margin-bottom:8px"><label class="flbl">Cook time</label>
      <div style="display:flex;gap:8px;align-items:center">
        <input class="fi" id="ecooktime" type="text" inputmode="numeric" placeholder="e.g. 30" value="${ue(p.value)}" style="flex:1" oninput="recipeTimeChanged('edit')"/>
        <select class="fi" id="ecooktimeunit" style="width:auto;min-width:90px" onchange="recipeTimeChanged('edit')">
          <option value="min"${p.unit==="min"?" selected":""}>minutes</option>
          <option value="hr"${p.unit==="hr"?" selected":""}>hours</option>
        </select>
      </div>
    </div>
    <div class="frow" style="margin-bottom:8px"><label class="flbl">Total time</label>
      <div style="display:flex;gap:8px;align-items:center">
        <input class="fi" id="etotaltime" type="text" inputmode="numeric" placeholder="Auto from prep + cook" value="${ue(g.value)}" style="flex:1" oninput="markTotalTimeManual('edit')"/>
        <select class="fi" id="etotaltimeunit" style="width:auto;min-width:90px">
          <option value="min"${g.unit==="min"?" selected":""}>minutes</option>
          <option value="hr"${g.unit==="hr"?" selected":""}>hours</option>
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
  </div>`;let I="";e.stepsRaw&&e.stepsRaw.length&&(I=`<div class="frow"><label class="flbl">Step Photos <span class="otag">optional</span></label>${e.stepsRaw.map((P,$)=>{var M;const U=typeof P=="string"?P:P.text||"",N=(M=e.stepPhotos)==null?void 0:M[$];return`<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:12px;padding:10px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">
        <div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:var(--acd);color:var(--ac);font-size:.72rem;font-weight:700;display:flex;align-items:center;justify-content:center">${$+1}</div>
        <div style="flex:1;font-size:.84rem;color:var(--tx2);line-height:1.5">${ue(U)}</div>
        ${N?`<img src="${N}" class="step-photo-preview" onclick="event.stopPropagation();openPhotoViewer(['${N}'],0)" alt="Step ${$+1}"/>`:""}
        <button class="step-photo-btn${N?" has-photo":""}" onclick="event.stopPropagation();triggerStepPhotoUpload(${$})" title="${N?"Change":"Add"} step photo">📷</button>
        ${N?`<button class="step-photo-btn" onclick="event.stopPropagation();removeStepPhoto(${$})" title="Remove step photo" style="color:var(--rd)">✕</button>`:""}
      </div>`}).join("")}</div>`,I+='<input type="file" id="stepPhotoInput" accept="image/*" style="display:none" onchange="handleStepPhotoSelected(event)"/>'),f("erecbody").innerHTML=`
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
    ${I}
    <div style="display:flex;align-items:center;gap:10px;margin:12px 0"><span style="font-size:.88rem">Favorite</span><div class="tog${e.favorited?" on":""}" id="etog" onclick="this.classList.toggle('on')"></div></div>
    <div style="display:flex;align-items:center;gap:10px;margin:6px 0 14px"><span style="font-size:.88rem">Share publicly</span><div class="tog${e.isPublic?" on":""}" id="epub" onclick="togglePublic('${e.id}');this.classList.toggle('on')"></div><span style="font-size:.72rem;color:var(--mt)">Visible to the community</span></div>
    <div class="brow"><button class="btn bd" style="flex:1" onclick="delER()">Delete</button><button class="btn bp" style="flex:2" onclick="updR()">Save</button></div>`,ct("erec")}async function dR(){var F,j,b;const n=d.recs.find(v=>v.id===d.eid);if(!n)return;const e=n.rating||0,t=Zl("etags"),i=f("ecuis")?f("ecuis").value.trim():n.cuisine||"";let s=n.imageUrl;if(xt)try{S("Uploading cover photo…"),s=await xg(xt,n.id),xt=null}catch(v){console.error("Cover upload failed:",v),S("Cover photo upload failed — saving recipe without it")}else n._removeCover&&(s=null,delete n._removeCover,Pg(`recipes/${n.id}/cover.jpg`).catch(()=>{}));const r={...n.stepPhotos||{}},o=Object.keys(Ei);if(o.length){S("Uploading step photos…");for(const v of o)try{const _=await TC(Ei[v],n.id,parseInt(v));r[v]=_}catch(_){console.error(`Step ${v} photo upload failed:`,_)}Ei={}}const c=Di("epreptime","epreptimeunit")||"",l=Di("ecooktime","ecooktimeunit")||"",u=Dg("etotaltime","etotaltimeunit")||"",p=f("eserves")?f("eserves").value.trim():n.servings||"",g=Mg("ediff")||"",w=f("eyield")?f("eyield").value.trim():n.recipeYield||"",I=f("estorage")?f("estorage").value.trim():n.storageInstructions||"";let C=f("esummary")?f("esummary").value.trim():n.summary||"";const P=f("ern").value.trim(),$=f("erd").value.trim(),U=P!==n.name,N=$!==(n.description||"")&&Math.abs($.length-(n.description||"").length)>20,M=i!==(n.cuisine||"");if(C===(n.summary||"")&&(U||N||M))try{const E=(((b=(j=(F=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:250,messages:[{role:"user",content:`A recipe was edited. Decide if the summary needs updating. If yes, write a new 2-sentence summary (first sentence: what the dish is, second: what makes it special). Max 200 chars. Return JSON only: {"shouldUpdate":true/false,"newSummary":"..."}

Old title: ${n.name}
New title: ${P}
Old cuisine: ${n.cuisine||""}
New cuisine: ${i}
New description (first 300 chars): ${$.substring(0,300)}
Old summary: ${C||"(none)"}`}]})})).json()).content)==null?void 0:F[0])==null?void 0:j.text)==null?void 0:b.trim())||"").match(/\{[\s\S]*\}/);if(E){const R=JSON.parse(E[0]);R.shouldUpdate&&R.newSummary&&(C=R.newSummary,S("Summary updated"))}}catch(v){console.error("Summary update check failed:",v)}const D={...n,name:P,rating:e,description:$,notes:f("erno").value.trim(),favorited:f("etog").classList.contains("on"),tags:t,cuisine:i,imageUrl:s,stepPhotos:r,prepTime:c,cookTime:l,totalTime:u,servings:p,difficulty:g,recipeYield:w,storageInstructions:I,summary:C};await Je(D),S("Recipe updated!"),ke("erec"),n.publicId&&setTimeout(async()=>{var v;if(confirm("You edited a recipe that's also published to the community. Push these changes to the community version?"))try{const _={title:D.name,summary:D.summary,cuisine:D.cuisine,tags:D.tags,description:D.description,ingredients:D.description,ingredientsRaw:D.ingredientsRaw||[],stepsRaw:D.stepsRaw||[],prepTime:D.prepTime,cookTime:D.cookTime,totalTime:D.totalTime,servings:D.servings,difficulty:D.difficulty,imageUrl:D.imageUrl},k=(v=d.comRecs)==null?void 0:v.find(E=>E.id===n.publicId);k?await z(`public_recipes/${n.publicId}`,{...k,..._,id:void 0}):await z(`public_recipes/${n.publicId}`,_),S("Community version updated!")}catch(_){console.error("Community sync failed:",_),S("Couldn't update community version")}},300)}async function hR(){confirm("Delete this recipe?")&&(await _p(d.eid),S("Deleted"),ke("erec"))}async function fR(n){const e=f("erd");if(!e)return;const t=e.value.trim();if(!t){S("No ingredients to scale");return}const i=f("scaleStatus");i.style.display="block",i.style.color="var(--mt)",i.textContent=`⏳ Scaling to ${n}× with Claude…`;try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Scale ALL ingredient quantities in this recipe by ${n}x. Return ONLY the updated recipe text with scaled quantities. Keep the same format. Do not add any explanation.

${t}`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"";o?(e.value=o.trim(),i.style.color="var(--gn)",i.textContent=`✓ Scaled to ${n}×`):(i.style.color="var(--rd)",i.textContent="Couldn't scale — try again")}catch{i.style.color="var(--rd)",i.textContent="Couldn't reach Claude — check connection"}}async function pR(){const n=f("rsub");n&&(n.textContent="Thinking…");const e=d.inv.map(s=>`${s.name} (${ki(s.qty,s.unit)})`).join(", "),t=d.recs.map(s=>s.name).join(", "),i=[d.cfg.nopork?"no pork":null,d.cfg.noshellfish?"no shellfish":null,d.cfg.vegetarian?"vegetarian":null,d.cfg.glutenfree?"gluten-free":null,d.cfg.other||null].filter(Boolean).join(", ");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Based on this exact inventory: ${e}
Restrictions: ${i||"none"}
Saved recipes: ${t||"none"}
Suggest 5 complete meals I can make RIGHT NOW with no extra shopping. Be specific with names. Format as a numbered list.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",c=f("rbody");c&&(c.innerHTML=`<div style="background:var(--card);border:1px solid var(--ac);border-radius:14px;padding:16px;margin-bottom:12px"><div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ac);margin-bottom:10px">🔍 Make right now — no shopping needed</div><div style="font-size:.88rem;line-height:1.8;color:var(--tx2)">${By(o)}</div><button class="btn bs bsm" style="margin-top:12px;width:100%" onclick="setRT('all')">← Back to recipes</button></div>`),n&&(n.textContent="Based on your inventory")}catch{n&&(n.textContent="Couldn't reach Claude")}}async function mR(n){const e=d.recs.find(t=>t.id===n);if(!e||!e.description){S("No ingredients listed");return}S("Parsing ingredients…");try{const t=d.inv.map(l=>l.name.toLowerCase()),s=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:400,messages:[{role:"user",content:`Extract a list of ingredient names from this recipe description. Return ONLY a JSON array of strings, no markdown, no quantities, just clean ingredient names. Example: ["chicken","garlic","olive oil"]

Recipe: ${e.description}`}]})})).json(),r=(s.content&&s.content[0]&&s.content[0].text||"").replace(/```json|```/g,"").trim(),c=JSON.parse(r).filter(l=>!t.some(u=>u.includes(l.toLowerCase())||l.toLowerCase().includes(u)));if(!c.length){S("All ingredients already in pantry ✓");return}for(const l of c)await ve({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:l,qty:1,checked:!1,src:"recipe"});S(`Added ${c.length} ingredient${c.length!==1?"s":""} to shopping list 🛒`),ke("erec"),window.showScreen("shopping")}catch{S("Couldn't parse ingredients")}}function gR(n,e){d.nr=n,e==="r"?(Ps("rstars",n),Zh("rstars",e)):e==="c"&&(Ps("cstars",n),Zh("cstars",e))}function Zh(n,e){const t=f(n);if(!t)return;const i=t.querySelector(".star-clear");if(i&&i.remove(),d.nr>0){const s=document.createElement("span");s.className="star-clear",s.textContent="✕",s.onclick=r=>{if(r.stopPropagation(),d.nr=0,Ps(n,0),s.remove(),e==="rv"&&d.eid){const o=d.recs.find(c=>c.id===d.eid);o&&(o.rating=0,Je({...o,rating:0}))}},t.appendChild(s)}}async function yR(n){const e=d.recs.find(i=>i.id===d.eid);if(!e)return;e.rating=n,d.nr=n;const t=f("rvstars");t&&(t.innerHTML=Array.from({length:5},(i,s)=>`<span class="star${s<n?" on":""}" onclick="setViewStar(${s+1})" style="cursor:pointer">${s<n?"★":"☆"}</span>`).join("")+(n>0?'<span class="star-clear" onclick="event.stopPropagation();setViewStar(0)">✕</span>':"")),await Je({...e,rating:n})}async function vR(n){const e=d.recs.find(r=>r.id===n);if(!e)return;const t=!e.isPublic,i=X(),s=(i==null?void 0:i.displayName)||localStorage.getItem("ks-who")||"Anonymous";if(t){const r=await ol(e);if(r){S("This recipe has already been published to the community.");const c=f("epub");c&&!c.classList.contains("on")&&c.classList.add("on"),(!e.isPublic||!e.publicId)&&(e.isPublic=!0,e.publicId=r.id,await Je({...e}));return}const o=await Lo(e,s);e.publicId=o.id,Xe("published",Ae(e.name||"a recipe")+" to community"),S("Recipe shared with the community!")}else{const r=e.publicId||e.id;await al(r),e.publicId=null,Xe("unpublished",Ae(e.name||"a recipe")+" from community"),S("Recipe removed from community")}await Je({...e,isPublic:t,publicId:e.publicId||null})}function wR(n){const t=f(n==="add"?"addRecCoverInput":"editCoverInput");t&&t.click()}function _R(n,e){var i,s;const t=(s=(i=n.target)==null?void 0:i.files)==null?void 0:s[0];t&&(xt=t,Hg(t,e))}function bR(n,e){var i,s;const t=(s=(i=n.dataTransfer)==null?void 0:i.files)==null?void 0:s[0];!t||!t.type.startsWith("image/")||(xt=t,Hg(t,e))}function Hg(n,e){const i=f(e==="add"?"addRecCoverZone":"editCoverZone");if(!i)return;const s=new FileReader;s.onload=r=>{i.classList.add("has-preview"),i.innerHTML=`<img src="${r.target.result}" alt="Cover preview"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('${e}')">✕</button>`},s.readAsDataURL(n)}function TR(n){xt=null;const t=f(n==="add"?"addRecCoverZone":"editCoverZone");if(t&&(t.classList.remove("has-preview"),t.innerHTML='<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop · Max 800×600, 300KB</div>',n==="edit"&&d.eid)){const i=d.recs.find(s=>s.id===d.eid);i&&(i._removeCover=!0)}}let Yr=null;function IR(n){Yr=n;const e=f("stepPhotoInput");e&&(e.value="",e.click())}function ER(n){var i,s;const e=(s=(i=n.target)==null?void 0:i.files)==null?void 0:s[0];if(!e||Yr===null)return;Ei[Yr]=e;const t=new FileReader;t.onload=r=>{S(`Step ${Yr+1} photo added`)},t.readAsDataURL(e)}function kR(n){const e=d.recs.find(t=>t.id===d.eid);if(e){if(delete Ei[n],e.stepPhotos&&e.stepPhotos[n]){const t=`recipes/${e.id}/steps/${n}.jpg`;Pg(t).catch(()=>{}),delete e.stepPhotos[n]}Fg(e.id),S(`Step ${n+1} photo removed`)}}function SR(n,e){Bn=n||[],jn=e||0,jg();const t=f("photoViewer");t&&t.classList.add("active"),RR()}function CR(){const n=f("photoViewer");n&&n.classList.remove("active"),Bn=[]}function Bg(n){const e=jn+n;e<0||e>=Bn.length||(jn=e,jg())}function jg(){const n=f("pvImg"),e=f("pvCounter"),t=f("pvPrev"),i=f("pvNext");n&&(n.src=Bn[jn]||""),e&&(e.textContent=Bn.length>1?`${jn+1} / ${Bn.length}`:""),t&&(t.style.display=jn>0?"flex":"none"),i&&(i.style.display=jn<Bn.length-1?"flex":"none")}function RR(){const n=f("pvWrap");if(!n)return;let e=0,t=0;const i=n.cloneNode(!0);n.parentNode.replaceChild(i,n),i.addEventListener("touchstart",s=>{e=s.touches[0].clientX,t=s.touches[0].clientY},{passive:!0}),i.addEventListener("touchend",s=>{const r=s.changedTouches[0].clientX-e,o=s.changedTouches[0].clientY-t;Math.abs(r)>50&&Math.abs(r)>Math.abs(o)&&Bg(r<0?1:-1)},{passive:!0})}function AR(){const n=f("cmtPhotoInput");n&&(n.value="",n.click())}function xR(n){var t;const e=(t=n.target)==null?void 0:t.files;if(!(!e||!e.length)){for(let i=0;i<e.length;i++)e[i].type.startsWith("image/")&&It.push(e[i]);zg()}}function PR(n){It.splice(n,1),zg()}function zg(){const n=f("cmtPhotoPreview");if(!n)return;if(!It.length){n.innerHTML="";return}let e="";It.forEach((t,i)=>{const s=URL.createObjectURL(t);e+=`<div style="position:relative;display:inline-block"><img src="${s}" class="cmt-preview-thumb" alt=""/><button onclick="event.stopPropagation();removeCommentPhoto(${i})" style="position:absolute;top:-4px;right:-4px;width:18px;height:18px;border-radius:50%;background:var(--rd);color:#fff;border:none;font-size:.6rem;cursor:pointer;display:flex;align-items:center;justify-content:center">✕</button></div>`}),e+='<div class="cmt-preview-add" onclick="triggerCommentPhotoUpload()">+</div>',n.innerHTML=e}let Et=null;function Jr(n){if(!n)return 0;const e=n.toLowerCase();let t=0;const i=e.match(/(\d+)\s*(?:hr|hour)/),s=e.match(/(\d+)\s*min/);return i&&(t+=parseInt(i[1])*60),s&&(t+=parseInt(s[1])),t}function To(n,e){const t=Math.round(n||0),i=Array.from({length:5},(r,o)=>o<t?"★":"☆").join(""),s=e?`(${e})`:"";return`<span style="color:var(--ac);font-size:.74rem;letter-spacing:1px">${i}</span><span style="font-size:.68rem;color:var(--mt);margin-left:3px">${s}</span>`}async function tu(){const n=f("rbody");if(n){n.innerHTML='<div class="es"><div class="ei">🌍</div><p>Loading community recipes…</p></div>',d.comPage=0;try{d.comRecs=await ft(),lt()}catch(e){console.error("loadCommunity:",e),n.innerHTML=`<div class="es"><div class="ei">⚠️</div><p>Couldn't load community recipes.</p></div>`}}}function $R(n){d.comCuisine=n,d.comPage=0,lt()}function LR(n){d.comSearch=n,d.comPage=0,lt()}function DR(n){d.comSort=n,d.comPage=0,lt()}function NR(n){const e=d.comTags.indexOf(n);e>=0?d.comTags.splice(e,1):d.comTags.push(n),d.comPage=0,lt()}function MR(n){d.comTime=n,d.comPage=0,lt()}function OR(n){d.comMinRating=parseInt(n)||0,d.comPage=0,lt()}function lt(){const n=f("rbody");if(!n)return;Et&&(Et.disconnect(),Et=null);let e=[...d.comRecs];if(d.comCuisine&&d.comCuisine!=="all"&&(e=e.filter(l=>(l.cuisine||"").toLowerCase().includes(d.comCuisine.toLowerCase())||(l.tags||[]).some(u=>u.toLowerCase().includes(d.comCuisine.toLowerCase())))),d.comSearch){const l=d.comSearch.toLowerCase();e=e.filter(u=>(u.title||"").toLowerCase().includes(l)||(u.tags||[]).join(" ").toLowerCase().includes(l)||(u.cuisine||"").toLowerCase().includes(l)||(u.authorUsername||"").toLowerCase().includes(l)||(u.authorName||"").toLowerCase().includes(l))}d.comTags.length&&(e=e.filter(l=>d.comTags.every(u=>(l.tags||[]).includes(u)))),d.comTime&&d.comTime!=="any"&&(e=e.filter(l=>{const u=Jr(l.cookTime||l.totalTime);return u?d.comTime==="under30"?u<=30:d.comTime==="30to60"?u>30&&u<=60:d.comTime==="over60"?u>60:!0:!1})),d.comMinRating>0&&(e=e.filter(l=>(l.avgRating||0)>=d.comMinRating)),d.comSort==="popular"?e.sort((l,u)=>(u.likes||0)-(l.likes||0)):d.comSort==="rated"?e.sort((l,u)=>(u.avgRating||0)-(l.avgRating||0)):d.comSort==="az"?e.sort((l,u)=>(l.title||"").localeCompare(u.title||"")):d.comSort==="cooktime"?e.sort((l,u)=>Jr(l.cookTime||l.totalTime)-Jr(u.cookTime||u.totalTime)):e.sort((l,u)=>new Date(u.createdAt||0)-new Date(l.createdAt||0));const i=e.slice(0,(d.comPage+1)*20),s=i.length<e.length,r=f("rsub");r&&(r.textContent=e.length+" community recipe"+(e.length!==1?"s":""));const o=d.comSort||"newest";let c=`<div style="margin-bottom:14px">
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
    ${Vg("com")}
  </div>`;if(!e.length){const l=d.comSearch||d.comCuisine!=="all"||d.comTags.length||d.comTime!=="any"||d.comMinRating>0;c+=`<div class="es"><div class="ei">🌍</div><p>${l?"No recipes match your filters.":"No community recipes yet. Be the first to share!"}</p></div>`,n.innerHTML=c;return}if(c+='<div class="recipe-grid" id="com-recipe-grid">',i.forEach(l=>{const u=(l.tags||[]).slice(0,3).map(C=>`<span class="com-tag">${C}</span>`).join(""),p=l.authorUsername?`@${l.authorUsername}`:l.authorName||"Anonymous",g=l.cookTime||l.totalTime||"",w=l.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${l.imageUrl}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",I=l.commentCount||0;c+=`<div class="rcd com-rcd" onclick="openComRecipe('${l.id}')">
      ${w}
      <div class="rrow">
        <div class="rnm" style="flex:1">${l.title||"Untitled"}</div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <span style="font-size:.78rem;color:var(--rd)">❤️ ${l.likes||0}</span>
          ${I?`<span style="font-size:.78rem;color:var(--mt)">💬 ${I}</span>`:""}
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-top:4px;flex-wrap:wrap">
        ${l.cuisine?`<span style="font-size:.72rem;color:var(--ac);font-weight:600">${l.cuisine}</span>`:""}
        ${l.avgRating||l.ratingCount?`<span>${To(l.avgRating,l.ratingCount)}</span>`:""}
        ${g?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${g}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${u}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${p}</div>
      </div>
    </div>`}),c+="</div>",s&&(c+='<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>'),n.innerHTML=c,s){const l=f("com-scroll-sentinel");l&&(Et=new IntersectionObserver(u=>{u[0].isIntersecting&&(d.comPage++,qg(e,n))},{rootMargin:"200px"}),Et.observe(l))}}function qg(n,e){const i=d.comPage*20,s=i+20,r=n.slice(i,s),o=s<n.length;let c="";r.forEach(p=>{const g=(p.tags||[]).slice(0,3).map($=>`<span class="com-tag">${$}</span>`).join(""),w=p.authorUsername?`@${p.authorUsername}`:p.authorName||"Anonymous",I=p.cookTime||p.totalTime||"",C=p.commentCount||0,P=p.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${p.imageUrl}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"";c+=`<div class="rcd com-rcd" onclick="openComRecipe('${p.id}')">
      ${P}
      <div class="rrow">
        <div class="rnm" style="flex:1">${p.title||"Untitled"}</div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <span style="font-size:.78rem;color:var(--rd)">❤️ ${p.likes||0}</span>
          ${C?`<span style="font-size:.78rem;color:var(--mt)">💬 ${C}</span>`:""}
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-top:4px;flex-wrap:wrap">
        ${p.cuisine?`<span style="font-size:.72rem;color:var(--ac);font-weight:600">${p.cuisine}</span>`:""}
        ${p.avgRating||p.ratingCount?`<span>${To(p.avgRating,p.ratingCount)}</span>`:""}
        ${I?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${I}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${g}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${w}</div>
      </div>
    </div>`});const l=f("com-scroll-sentinel");l&&l.remove(),Et&&(Et.disconnect(),Et=null);const u=f("com-recipe-grid");if(u?u.insertAdjacentHTML("beforeend",c):e.insertAdjacentHTML("beforeend",c),o){e.insertAdjacentHTML("beforeend",'<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>');const p=f("com-scroll-sentinel");p&&(Et=new IntersectionObserver(g=>{g[0].isIntersecting&&(d.comPage++,qg(n,e))},{rootMargin:"200px"}),Et.observe(p))}}async function Io(n){var pt;const e=d.comRecs.find(he=>he.id===n);if(!e)return;d._openComId=n,Li="view",It=[];const t=f("erecTitle");t&&(t.textContent="Recipes"),Yo(()=>ar());const i=(pt=X())==null?void 0:pt.uid,[s,r,o,c]=await Promise.all([Ep(n),Ip(n).catch(()=>[]),xp(n).catch(()=>null),Rp(n)]);s?d.myLikes.add(n):d.myLikes.delete(n),r.sort((he,$n)=>new Date(he.createdAt||0)-new Date($n.createdAt||0)),d._comComments=r;const l=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`,u=e.imageUrl?`<div style="margin:-16px -16px 16px;overflow:hidden;max-height:240px"><img src="${e.imageUrl}" alt="" style="width:100%;height:240px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",p=[e.prepTime?`🔪 Prep: ${e.prepTime}`:"",e.cookTime?`🔥 Cook: ${e.cookTime}`:"",e.totalTime?`⏱ Total: ${e.totalTime}`:"",e.servings?`🍽 Serves: ${e.servings}`:""].filter(Boolean),g=p.length?`<div class="rv-meta">${p.map(he=>`<div class="rv-meta-pill">${he}</div>`).join("")}</div>`:"",w=(e.ratingCount||0)>0?`<div style="margin-bottom:6px">${To(e.avgRating,e.ratingCount)}</div>`:"",I=(e.tags||[]).map(he=>`<span class="com-tag">${he}</span>`).join(""),C=e.authorUsername?`@${e.authorUsername}`:e.authorName||"Anonymous",P=d.myLikes.has(n),$=i&&i===e.authorUid;let U=!1;!$&&i&&e.householdId&&e.householdId===d.hid&&(U=!0);const N=$||U;let M="";e.ingredientsRaw&&e.ingredientsRaw.length?M=`<ul style="margin:0;padding-left:18px;font-size:.88rem;color:var(--tx2);line-height:2">${e.ingredientsRaw.map(he=>`<li>${(typeof he=="string"?he:(he.amount||"")+" "+(he.unit||"")+" "+(he.name||"")).replace(/</g,"&lt;").replace(/>/g,"&gt;").trim()}</li>`).join("")}</ul>`:e.ingredients&&(M=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.ingredients||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);let D="";e.stepsRaw&&e.stepsRaw.length?D=`<ol style="margin:0;padding-left:22px;font-size:.88rem;color:var(--tx2);line-height:1.8">${e.stepsRaw.map(he=>`<li style="margin-bottom:8px">${(typeof he=="string"?he:he.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</li>`).join("")}</ol>`:e.steps&&(D=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.steps||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);const F=qR(r.slice(0,20),n,i,$),j=r.length>20,b=(o==null?void 0:o.rating)||0,v=b>0?`<span onclick="clearComRating('${n}')" style="cursor:pointer;font-size:.8rem;color:var(--mt);margin-left:6px;vertical-align:middle" title="Clear rating">✕</span>`:"",_=$?"":Array.from({length:5},(he,$n)=>`<span class="star${$n<b?" on":""}" onclick="rateComRecipe('${n}',${$n+1})" style="cursor:pointer;font-size:1.3rem">${$n<b?"★":"☆"}</span>`).join("")+v,k=N?`<button class="btn bs bsm" onclick="editComRecipe('${n}')" style="margin-top:8px;width:100%">✏️ Edit community version</button>`:"",E=$?`<button class="btn bd bsm" onclick="unpublishComRecipe('${n}')" style="margin-top:8px;width:100%">🚫 Unpublish this recipe</button>`:"",R=k+E,T=!N&&i?`<button class="btn-report" onclick="openReportSheet('recipe','${n}','${n}')" title="Report recipe">🚩 Report</button>`:"";f("erecbody").innerHTML=`
    ${u}
    <div style="margin-bottom:14px">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px">
        <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;line-height:1.3;margin-bottom:6px;flex:1">${e.title||"Untitled"}</div>
        ${T}
      </div>
      ${e.cuisine?`<div style="font-size:.78rem;color:var(--ac);font-weight:600;margin-bottom:6px">${e.cuisine}</div>`:""}
      ${w}
      <div style="font-size:.76rem;color:var(--mt)">by ${C} · ${e.createdAt?new Date(e.createdAt).toLocaleDateString():""}</div>
      ${I?`<div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:8px">${I}</div>`:""}
    </div>

    ${g}

    <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap">
      <button class="btn ${P?"bp":"bs"} bsm" onclick="likeComRecipe('${n}')" id="com-like-btn">
        ${P?"❤️":"🤍"} ${e.likes||0} Like${(e.likes||0)!==1?"s":""}
      </button>
      <button class="btn bs bsm" style="flex:1" onclick="saveComToKitchen('${n}')">📖 Save to my recipes</button>
      <button class="btn bs bsm" onclick="shareComRecipe('${n}')">📤 Share</button>
    </div>

    ${M?`<div class="frow"><label class="flbl">Ingredients</label>${M}</div>`:""}
    ${D?`<div class="frow"><label class="flbl">Instructions</label>${D}</div>`:""}

    ${$?"":`<div style="background:var(--card);border:1px solid var(--b2);border-radius:12px;padding:14px;margin-top:16px">
      <div class="flbl" style="margin-bottom:8px">Rate this recipe</div>
      <div id="com-rating-stars" style="display:flex;align-items:center;gap:2px">${_}</div>
      ${b?`<div id="com-rating-label" style="font-size:.72rem;color:var(--mt);margin-top:4px">You rated this ${b}★</div>`:'<div id="com-rating-label"></div>'}
      ${(e.ratingCount||0)>0?`<div style="font-size:.72rem;color:var(--mt);margin-top:6px">${To(e.avgRating,e.ratingCount)} avg</div>`:""}
    </div>`}

    <div style="margin-top:16px">
      <div class="flbl" style="margin-bottom:10px">Comments (${r.length})</div>
      <div id="com-comments">${F||'<div style="font-size:.82rem;color:var(--mt);padding:8px 0">No comments yet.</div>'}</div>
      ${j?`<button class="btn bs bsm" id="com-load-more" onclick="loadMoreComments()" style="width:100%;margin-top:8px">Load more comments (${r.length-20} remaining)</button>`:""}
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
      <div style="font-size:.8rem;color:var(--ac);word-break:break-all;cursor:pointer" onclick="navigator.clipboard.writeText('${l}');showNotif('Link copied!')">${l}</div>
    </div>

    ${R}`;const xe=f("com-cmt-input");xe&&xe.addEventListener("input",()=>{const he=f("com-cmt-counter");he&&(he.textContent=`${xe.value.length} / 500`)}),ct("erec")}async function VR(n,e){return Wg(n,e)}async function Wg(n,e){if(!X()){S("Sign in to rate recipes");return}try{const i=await Ap(n,e);if(!i){S("You can't rate your own recipe");return}const s=d.comRecs.find(c=>c.id===n);s&&(s.ratingSum=i.ratingSum,s.ratingCount=i.ratingCount,s.avgRating=i.avgRating);const r=f("com-rating-stars");r&&(r.innerHTML=Array.from({length:5},(c,l)=>`<span class="star${l<e?" on":""}" onclick="rateComRecipe('${n}',${l+1})" style="cursor:pointer;font-size:1.3rem">${l<e?"★":"☆"}</span>`).join("")+`<span onclick="clearComRating('${n}')" style="cursor:pointer;font-size:.8rem;color:var(--mt);margin-left:6px;vertical-align:middle" title="Clear rating">✕</span>`);const o=f("com-rating-label");o&&(o.textContent=`You rated this ${e}★`),S(`Rated ${e}★`)}catch(i){console.error("rateComRecipe:",i),S("Couldn't submit rating")}}async function UR(n){if(X())try{const t=await Pp(n);if(!t)return;const i=d.comRecs.find(o=>o.id===n);i&&(i.ratingSum=t.ratingSum,i.ratingCount=t.ratingCount,i.avgRating=t.avgRating);const s=f("com-rating-stars");s&&(s.innerHTML=Array.from({length:5},(o,c)=>`<span class="star" onclick="rateComRecipe('${n}',${c+1})" style="cursor:pointer;font-size:1.3rem">☆</span>`).join(""));const r=f("com-rating-label");r&&(r.textContent=""),S("Rating cleared")}catch(t){console.error("clearComRating:",t),S("Couldn't clear rating")}}async function FR(n){if(confirm("Remove this recipe from the community?"))try{await al(n),d.comRecs=d.comRecs.filter(e=>e.id!==n),S("Recipe unpublished"),ke("erec"),lt()}catch(e){console.error("unpublishComRecipe:",e),S("Couldn't unpublish recipe")}}async function HR(n){if(!X()){S("Sign in to like recipes");return}const t=d.myLikes.has(n);try{await bp(n,t),t?d.myLikes.delete(n):d.myLikes.add(n);const i=d.comRecs.find(r=>r.id===n);i&&(i.likes=(i.likes||0)+(t?-1:1));const s=f("com-like-btn");if(s){const r=d.myLikes.has(n);s.className=`btn ${r?"bp":"bs"} bsm`,s.innerHTML=`${r?"❤️":"🤍"} ${(i==null?void 0:i.likes)||0} Like${((i==null?void 0:i.likes)||0)!==1?"s":""}`}S(t?"Like removed":"Liked!")}catch(i){console.error("likeComRecipe:",i),S("Couldn't update like")}}async function BR(n){if(!X()){S("Sign in to save recipes");return}const t=d.comRecs.find(i=>i.id===n);if(t)try{await kp(t),Xe("saved",Ae(t.title||"a recipe")+" from community"),S("Recipe saved to your kitchen! 📖"),ke("erec")}catch(i){console.error("saveComToKitchen:",i),S("Couldn't save recipe")}}async function jR(n){var r;const e=X();if(!e){S("Sign in to comment");return}const t=f("com-cmt-input"),i=(r=t==null?void 0:t.value)==null?void 0:r.trim();if(!i&&!It.length)return;if(i&&i.length>500){S("Comment must be 500 characters or less");return}const s=e.displayName||localStorage.getItem("ks-who")||"Anonymous";try{const o=await Tp(n,i||"",s);if(!o)return;let c=[];if(It.length){S("Uploading photos…");for(let I=0;I<It.length;I++)try{const C=await IC(It[I],n,o.id,I);c.push(C)}catch(C){console.error(`Comment photo ${I} upload failed:`,C)}c.length&&(o.photoUrls=c,await z(`public_recipes/${n}/comments/${o.id}`,{...o,id:void 0}))}t&&(t.value=""),It=[];const l=f("cmtPhotoPreview");l&&(l.innerHTML="");const u=f("com-cmt-counter");u&&(u.textContent="0 / 500");const p=f("com-comments"),g=d.comRecs.find(I=>I.id===n),w=e.uid===(g==null?void 0:g.authorUid);p&&o&&(p.querySelector("div[style*='color:var(--mt)']")&&!p.querySelector("div[style*='border-bottom']")&&(p.innerHTML=""),p.innerHTML+=nu(o,n,e.uid,w)),d._comComments&&d._comComments.push(o),S(c.length?`Comment posted with ${c.length} photo${c.length!==1?"s":""}!`:"Comment posted!")}catch(o){console.error("addComComment:",o),S("Couldn't post comment")}}async function zR(n){const e=d.comRecs.find(s=>s.id===n),t=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`,i=(e==null?void 0:e.title)||"Recipe";if(navigator.share)try{await navigator.share({title:i,text:`Check out this recipe: ${i}`,url:t});return}catch{}try{await navigator.clipboard.writeText(t),S("Link copied!")}catch{S("Couldn't copy link")}}function nu(n,e,t,i){const s=(n.authorUsername?"@"+n.authorUsername:n.authorName)||"Anonymous",r=n.createdAt?new Date(n.createdAt).toLocaleDateString():"",o=(n.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;"),c=t&&(n.authorUid===t||i),l=t&&n.authorUid!==t;let u="";c&&(u+=`<button class="btn-report" onclick="deleteComComment('${e}','${n.id}')" title="Delete comment" style="font-size:.7rem">🗑</button>`),l&&(u+=`<button class="btn-report" onclick="openReportSheet('comment','${n.id}','${e}')" title="Report comment" style="font-size:.7rem">🚩</button>`);let p="";const g=n.photoUrls||[];if(g.length){const w=JSON.stringify(g).replace(/'/g,"\\'");p=`<div class="cmt-photos-grid">${g.map((C,P)=>`<img src="${C}" alt="Photo ${P+1}" onclick="event.stopPropagation();openPhotoViewer(${w.replace(/"/g,"&quot;")},${P})" onerror="this.style.display='none'"/>`).join("")}</div>
      <div class="cmt-photo-count">📷 ${g.length} photo${g.length!==1?"s":""}</div>`}return`<div class="com-comment-row" id="cmt-${n.id}" style="padding:10px 0;border-bottom:1px solid var(--b1)">
    <div style="display:flex;justify-content:space-between;align-items:center">
      <span style="font-size:.78rem;font-weight:600">${s}</span>
      <div style="display:flex;align-items:center;gap:6px">
        ${u}
        <span style="font-size:.68rem;color:var(--mt)">${r}</span>
      </div>
    </div>
    <div style="font-size:.84rem;color:var(--tx2);margin-top:4px;line-height:1.5">${o}</div>
    ${p}
  </div>`}function qR(n,e,t,i){return n.length?n.map(s=>nu(s,e,t,i)).join(""):""}function WR(){var u;const n=d._openComId,e=(u=X())==null?void 0:u.uid,t=d.comRecs.find(p=>p.id===n),i=e&&e===(t==null?void 0:t.authorUid),s=f("com-comments");if(!s||!d._comComments)return;const r=s.querySelectorAll(".com-comment-row").length,o=d._comComments.slice(r,r+20);if(o.length){const p=o.map(g=>nu(g,n,e,i)).join("");s.insertAdjacentHTML("beforeend",p)}const c=d._comComments.length-r-o.length,l=f("com-load-more");l&&(c>0?l.textContent=`Load more comments (${c} remaining)`:l.remove())}async function GR(n,e){if(confirm("Delete this comment?"))try{await $p(n,e);const t=document.getElementById("cmt-"+e);t&&t.remove(),d._comComments&&(d._comComments=d._comComments.filter(i=>i.id!==e)),S("Comment deleted")}catch(t){console.error("deleteComComment:",t),S("Couldn't delete comment")}}async function KR(n){var w;const e=d.comRecs.find(I=>I.id===n);if(!e)return;const i=((w=X())==null?void 0:w.uid)===e.authorUid,s=e.householdId&&e.householdId===d.hid;if(!i&&!s){S("Only household members can edit");return}d._editingComId=n,Li="edit";const r=f("erecTitle");r&&(r.textContent="Edit Community Recipe"),Yo(()=>ar());const o=`<div style="background:rgba(201,168,76,0.15);border:1px solid var(--ac);border-radius:10px;padding:12px;margin-bottom:14px;font-size:.82rem;color:var(--ac);line-height:1.5">
    ⚠️ You are editing the <strong>community version</strong>. Changes will be visible to everyone immediately.
  </div>`,c=e.tags||[],l=I=>c.includes(I)?" sel":"";let u='<div class="frow"><label class="flbl">Tags</label><div class="tags-grid" id="comEditTags">';Qr.forEach(I=>{u+=`<div class="tag-cat">${I.cat}</div>`,I.tags.forEach(C=>{u+=`<div class="tag${l(C)}" data-tag="${C}" onclick="togTag(this)">${C}</div>`})}),u+="</div></div>";const p=Ht(e.prepTime),g=Ht(e.cookTime);Ht(e.totalTime),f("erecbody").innerHTML=`
    ${o}
    <div class="frow"><label class="flbl">Title</label><input class="fi" id="comEditTitle" value="${ue(e.title||"")}"/></div>
    <div class="frow"><label class="flbl">Summary <span class="otag">optional</span></label><input class="fi" id="comEditSummary" value="${ue(e.summary||"")}" placeholder="1-2 sentence description" maxlength="200"/></div>
    <div class="frow"><label class="flbl">Cuisine <span class="otag">optional</span></label><input class="fi" id="comEditCuisine" value="${ue(e.cuisine||"")}" placeholder="e.g. Mediterranean, Turkish…"/></div>
    <div style="margin-bottom:14px">
      <div class="frow" style="margin-bottom:8px"><label class="flbl">Prep time</label>
        <div style="display:flex;gap:8px;align-items:center">
          <input class="fi" id="comEditPrepTime" type="text" inputmode="numeric" placeholder="e.g. 15" value="${ue(p.value)}" style="flex:1"/>
          <select class="fi" id="comEditPrepUnit" style="width:auto;min-width:90px">
            <option value="min"${p.unit==="min"?" selected":""}>minutes</option>
            <option value="hr"${p.unit==="hr"?" selected":""}>hours</option>
          </select>
        </div>
      </div>
      <div class="frow" style="margin-bottom:8px"><label class="flbl">Cook time</label>
        <div style="display:flex;gap:8px;align-items:center">
          <input class="fi" id="comEditCookTime" type="text" inputmode="numeric" placeholder="e.g. 30" value="${ue(g.value)}" style="flex:1"/>
          <select class="fi" id="comEditCookUnit" style="width:auto;min-width:90px">
            <option value="min"${g.unit==="min"?" selected":""}>minutes</option>
            <option value="hr"${g.unit==="hr"?" selected":""}>hours</option>
          </select>
        </div>
      </div>
      <div class="frow"><label class="flbl">Serves</label>
        <input class="fi" id="comEditServes" type="text" inputmode="numeric" placeholder="e.g. 4" value="${ue(e.servings||"")}"/>
      </div>
    </div>
    ${u}
    <div class="frow"><label class="flbl">Ingredients</label><textarea class="fta" id="comEditIngredients" style="min-height:100px">${ue(e.ingredients||"")}</textarea></div>
    <div class="frow"><label class="flbl">Steps</label><textarea class="fta" id="comEditSteps" style="min-height:100px">${ue(e.steps||"")}</textarea></div>
    <div class="brow" style="margin-top:14px">
      <button class="btn bs" style="flex:1" onclick="hideOv('erec')">Cancel</button>
      <button class="btn bp" style="flex:2" onclick="saveComRecipeEdit()">Save Changes</button>
    </div>`,ct("erec")}async function QR(){var w,I,C,P,$,U,N,M,D,F,j,b;const n=d._editingComId,e=d.comRecs.find(v=>v.id===n);if(!e)return;const t=((I=(w=f("comEditTitle"))==null?void 0:w.value)==null?void 0:I.trim())||e.title,i=((P=(C=f("comEditSummary"))==null?void 0:C.value)==null?void 0:P.trim())||"",s=((U=($=f("comEditCuisine"))==null?void 0:$.value)==null?void 0:U.trim())||"",r=((M=(N=f("comEditServes"))==null?void 0:N.value)==null?void 0:M.trim())||"",o=Zl("comEditTags"),c=((F=(D=f("comEditIngredients"))==null?void 0:D.value)==null?void 0:F.trim())||"",l=((b=(j=f("comEditSteps"))==null?void 0:j.value)==null?void 0:b.trim())||"",u=Di("comEditPrepTime","comEditPrepUnit")||"",p=Di("comEditCookTime","comEditCookUnit")||"",g={...e,title:t,summary:i,cuisine:s,servings:r,tags:o,ingredients:c,steps:l,prepTime:u,cookTime:p};delete g.id;try{await z(`public_recipes/${n}`,g),Object.assign(e,{title:t,summary:i,cuisine:s,servings:r,tags:o,ingredients:c,steps:l,prepTime:u,cookTime:p}),d._editingComId=null;const v=f("erecTitle");v&&(v.textContent="Recipes"),Xe("updated",Ae(t)+" (community)"),S("Community recipe updated!"),Xl(),ke("erec"),lt()}catch(v){console.error("saveComRecipeEdit:",v),S("Couldn't save changes")}}function YR(n,e,t){if(!X()){S("Sign in to report content");return}d._reportTarget={type:n,targetId:e,recipeId:t};const s=f("report-sheet"),r=f("reportBackdrop");s&&s.classList.add("active"),r&&r.classList.add("active")}function Gg(){const n=f("report-sheet"),e=f("reportBackdrop");n&&n.classList.remove("active"),e&&e.classList.remove("active"),d._reportTarget=null}async function JR(n){const e=d._reportTarget;if(e){try{const t=await Lp(e.type,e.targetId,n,e.recipeId);S(t==="duplicate"?"You've already reported this":"Thanks for your report")}catch(t){console.error("submitComReport:",t),S("Couldn't submit report")}Gg()}}async function Kg(){try{const n=await Op(),e=n>9?"9+":String(n),t=n>0,i=f("recipes-notif-badge");i&&(i.textContent=e,i.style.display=t?"flex":"none");const s=f("recipes-notif-badge-hdr");s&&(s.textContent=e,s.style.display=t?"flex":"none")}catch{}}async function XR(){if(!X()){S("Sign in to view notifications");return}try{const e=await Np();Mp().then(()=>Kg());const t=f("erecbody");if(!t)return;let i=`<div style="margin-bottom:14px">
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;margin-bottom:6px">Notifications</div>
      <div style="font-size:.76rem;color:var(--mt)">${e.length?e.length+" notification"+(e.length!==1?"s":""):"No notifications yet"}</div>
    </div>`;e.length?e.forEach(s=>{const r=!s.read,o=s.createdAt?new Date(s.createdAt).toLocaleDateString():"";s.type==="comment"&&(i+=`<div class="rcd" style="${r?"border-left:3px solid var(--ac);":""}" onclick="openComRecipeFromNotif('${s.recipeId}')">
            <div style="font-size:.84rem;font-weight:${r?"600":"400"};line-height:1.5">
              <span style="color:var(--ac)">${(s.commenterUsername||"Someone").replace(/</g,"&lt;")}</span> commented on your recipe
              <span style="font-weight:600">${(s.recipeName||"").replace(/</g,"&lt;")}</span>
            </div>
            <div style="font-size:.68rem;color:var(--mt);margin-top:4px">${o}</div>
          </div>`)}):i+=`<div class="es"><div class="ei">🔔</div><p>When someone comments on your recipe, you'll see it here.</p></div>`,t.innerHTML=i,ct("erec")}catch(e){console.error("openNotifications:",e),S("Couldn't load notifications")}}async function ZR(n){if(ke("erec"),!d.comRecs.length)try{d.comRecs=await ft()}catch{}if(d.comRecs.find(e=>e.id===n)){d.rt="community",document.querySelectorAll(".rtab").forEach(t=>t.classList.remove("active"));const e=f("rtab-community");e&&e.classList.add("active"),setTimeout(()=>Io(n),100)}else try{const e=await cl(n);e?(d.comRecs.push({id:n,...e}),d.rt="community",setTimeout(()=>Io(n),100)):S("Recipe no longer available")}catch{S("Couldn't load recipe")}}function eA(){const n=d.cookLog,e=d.wasteLog;let t=0;for(let M=0;M<60;M++){const D=new Date;D.setDate(D.getDate()-M);const F=D.toISOString().split("T")[0];if(n.find(j=>j.date===F))t++;else if(M>0)break}const i=f("ins-streak-num");i&&(i.textContent=t);const s=f("ins-total-cooked");s&&(s.textContent=n.length);const r=f("ins-waste-count");r&&(r.textContent=e.length);const o=f("ins-sub");o&&(o.textContent=n.length?" "+n.length+" meals cooked":"Your kitchen at a glance");const c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],l=f("ins-week");if(l){const M=Mi().map(D=>{const F=D.toISOString().split("T")[0],j=d.mp[F],b=F===hn();return`<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--b1)${b?";background:var(--acd);margin:0 -4px;padding:7px 4px;border-radius:6px":""}">
        <div style="font-size:.72rem;color:var(--mt);min-width:30px;font-weight:${b?"600":"400"}">${c[D.getDay()]}</div>
        <div style="font-size:.72rem;color:var(--mt);min-width:20px">${D.getDate()}</div>
        <div style="font-size:.84rem;color:${j?"var(--tx)":"var(--mt)"};font-style:${j?"normal":"italic"};flex:1">${j||"—"}</div>
        ${b?"<div style='font-size:.66rem;color:var(--ac);font-weight:600'>TODAY</div>":""}
      </div>`}).join("");l.innerHTML=M}const u=n.slice(0,7).map(M=>M.name),p=f("ins-variety-nudge"),g=f("ins-variety-msg");if(p&&u.length>=3){const M={};u.forEach(v=>{const _=v.toLowerCase();M[_]=(M[_]||0)+1});const D=Object.entries(M).filter(([,v])=>v>=3),F=Object.values(d.mp).filter(Boolean),j=F.some(v=>/curry|dal|rice|bengali|biryani|hilsa|mustard|lentil/i.test(v)),b=F.some(v=>/kebab|köfte|pide|börek|meze|turkish|pilav|lahmacun/i.test(v));D.length?(p.style.display="block",g.textContent=`You've cooked "${D[0][0]}" ${D[0][1]} times this week. Time to mix it up?`):!j&&F.length>=3?(p.style.display="block",g.textContent="No Bangladeshi dishes this week — how about a dal, biryani, or fish curry?"):!b&&F.length>=3?(p.style.display="block",g.textContent="No Turkish dishes planned — köfte, mercimek çorbası, or a pilav would be great this week!"):p.style.display="none"}else p&&(p.style.display="none");const w={};n.forEach(M=>{w[M.name]=(w[M.name]||0)+1});const I=Object.entries(w).sort((M,D)=>D[1]-M[1]).slice(0,6),C=I[0]?I[0][1]:1,P=f("ins-cooked");if(P)if(!I.length)P.innerHTML='<div class="es" style="padding:16px"><p>Cook some meals to see stats!</p></div>';else{const M=["🥇","🥈","🥉","4️⃣","5️⃣","6️⃣"];P.innerHTML=I.map(([D,F],j)=>`<div class="ibar-row"><div style="font-size:.9rem;margin-right:4px">${M[j]||""}</div><div class="ibar-lbl">${D}</div><div class="ibar-track"><div class="ibar-fill" style="width:${Math.round(F/C*100)}%"></div></div><div class="ibar-val">${F}×</div></div>`).join("")}const $={Bangladeshi:"#e8a44a",Turkish:"#c0392b",Mediterranean:"#27ae60",American:"#3498db",Italian:"#e74c3c",Asian:"#9b59b6",Other:"#95a5a6"},U=f("ins-cuisine");if(U&&n.length){const M=b=>{const v=b.toLowerCase();return/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(v)?"Bangladeshi":/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner|iskender/i.test(v)?"Turkish":/pasta|pizza|risotto|gnocchi|italian/i.test(v)?"Italian":/tacos|burrito|enchilada|mexican/i.test(v)?"Mexican":/sushi|ramen|stir.?fry|fried rice|asian|chinese|thai|japanese/i.test(v)?"Asian":/burger|sandwich|mac|bbq|american/i.test(v)?"American":"Other"},D={};n.slice(0,20).forEach(b=>{const v=M(b.name);D[v]=(D[v]||0)+1});const F=Object.values(D).reduce((b,v)=>b+v,0),j=Object.entries(D).sort((b,v)=>v[1]-b[1]);U.innerHTML=j.map(([b,v])=>{const _=Math.round(v/F*100),k=$[b]||"#95a5a6";return`<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span style="font-size:.82rem;font-weight:500">${b}</span><span style="font-size:.74rem;color:var(--mt)">${v} meals · ${_}%</span></div><div style="height:8px;background:var(--b1);border-radius:4px;overflow:hidden"><div style="height:100%;width:${_}%;background:${k};border-radius:4px;transition:width .6s ease"></div></div></div>`}).join("")||'<div class="es" style="padding:16px"><p>Cook more meals to see your cuisine breakdown.</p></div>'}const N=f("ins-waste");N&&(N.innerHTML=e.length?e.slice(0,10).map(M=>`<div class="waste-item"><span style="font-size:.86rem">${M.name}</span><span style="font-size:.74rem;color:var(--rd)">${M.date}</span></div>`).join(""):'<div class="es" style="padding:16px"><p>Nothing wasted yet — great job! 🎉</p></div>')}function tA(){const n=["fridge","freezer","pantry"].map(o=>{const c=d.inv.filter(l=>l.location===o);return c.length?hf(o).toUpperCase()+": "+c.map(l=>`${l.name} (${ki(l.qty,l.unit)})`).join(", "):""}).filter(Boolean).join(`
`),e=d.inv.filter(o=>{const c=Pt(o.expiry);return c&&(c.c==="expiring"||c.c==="expired")}).map(o=>{const c=Pt(o.expiry);return`${o.name} (${c.l})`}).join(", "),t=Mi().map(o=>{const c=o.toISOString().split("T")[0];return d.mp[c]?`${o.toLocaleDateString("en-US",{weekday:"short"})}: ${d.mp[c]}`:""}).filter(Boolean).join(", "),i=d.recs.filter(o=>o.favorited||o.rating>=4).map(o=>`${o.name}${o.rating?` (${o.rating}★)`:""}`).join(", "),s=[d.cfg.nopork?"no pork":null,d.cfg.noshellfish?"no shellfish":null,d.cfg.vegetarian?"vegetarian":null,d.cfg.glutenfree?"gluten-free":null,d.cfg.other].filter(Boolean).join(", "),r=d.cookLog.slice(0,7).map(o=>o.name).join(", ");return`You are a kitchen and household assistant for a family in Edison NJ. You ONLY help with kitchen, food, cooking, grocery, and household topics. This includes:
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
Always use this format so the app can offer a one-tap save button. You can include normal text before/after recipe blocks.`}function nA(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<li>$1</li>").replace(/^[-•]\s+(.+)$/gm,"<li>$1</li>").replace(/\n/g,"<br>")}async function Qg(){const n=f("chi"),e=n.value.trim();if(!e)return;n.value="",Yg(n),d.chat.push({role:"user",content:e}),qa("user",e);const t=f("csb");t&&(t.disabled=!0);const i="thinking-"+Date.now(),s=f("chmsgs");s.innerHTML+=`<div class="cb asst thinking" id="${i}">Thinking…</div>`,s.scrollTop=s.scrollHeight;try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:800,system:tA(),messages:d.chat.map(u=>({role:u.role,content:u.content}))})})).json(),c=o.content&&o.content[0]&&o.content[0].text||"Sorry, I couldn't process that.",l=f(i);l&&l.remove(),d.chat.push({role:"assistant",content:c}),qa("assistant",c)}catch{const o=f(i);o&&o.remove(),qa("assistant","Sorry, I couldn't reach Claude. Check your connection and try again.")}t&&(t.disabled=!1)}function iA(n){const e=[];return{cleanText:n.replace(/:::RECIPE:::\s*([\s\S]*?)\s*:::END:::/g,(i,s)=>{try{const r=JSON.parse(s.trim());r.title&&e.push(r)}catch{}return""}).trim(),recipes:e}}function sA(n){const e=JSON.stringify(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;"),t=(n.ingredients||"").split(`
`).slice(0,3).join(", ");return`<div style="background:var(--card);border:1.5px solid var(--ac);border-radius:14px;padding:16px;margin:10px 0">
    <div style="font-family:'Fraunces',serif;font-size:1.1rem;font-weight:300;color:var(--ac);margin-bottom:6px">${(n.title||"").replace(/</g,"&lt;")}</div>
    ${n.cuisine?`<div style="font-size:.72rem;color:var(--mt);margin-bottom:6px">${n.cuisine}${n.cookTime?" · "+n.cookTime:""}${n.servings?" · "+n.servings+" servings":""}</div>`:""}
    ${t?`<div style="font-size:.8rem;color:var(--tx2);line-height:1.5;margin-bottom:10px">${t.replace(/</g,"&lt;")}…</div>`:""}
    <button class="btn bp bsm" onclick="importChatRecipe(this)" data-recipe="${e}">📖 Add to My Recipes</button>
  </div>`}async function rA(n){try{const e=JSON.parse(n.dataset.recipe),t="rec-"+Date.now(),i=[e.ingredients||"",e.steps?`

Steps:
`+e.steps:""].join("").trim();await Je({id:t,name:e.title||"Untitled Recipe",rating:0,favorited:!1,notes:"",description:i,source:"Claude Chat",sourceUrl:null,tags:[],cuisine:e.cuisine||"",cookTime:e.cookTime||"",servings:e.servings||"",cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:!1}),n.textContent="✓ Saved!",n.disabled=!0,n.style.background="var(--gn)",S("Recipe saved! 📖")}catch{S("Couldn't save recipe")}}function qa(n,e){const t=f("chmsgs");if(t){if(n==="assistant"){const{cleanText:i,recipes:s}=iA(e);if(i){const r=document.createElement("div");r.className="cb asst",r.innerHTML=nA(i),t.appendChild(r)}s.forEach(r=>{const o=document.createElement("div");o.style.maxWidth="88%",o.style.alignSelf="flex-start",o.innerHTML=sA(r),t.appendChild(o)})}else{const i=document.createElement("div");i.className="cb user",i.innerHTML=e,t.appendChild(i)}t.scrollTop=t.scrollHeight}}function oA(n){const e=f("chi");e&&(e.value=n.textContent),Qg()}function aA(){d.chat=[];const n=f("chmsgs");n&&(n.innerHTML=`<div class="cb asst">Hey! 👋 I'm your kitchen assistant — I can help with recipes, meal planning, grocery tips, and cooking questions. What's on your mind?</div>`)}function Yg(n){n.style.height="auto",n.style.height=Math.min(n.scrollHeight,120)+"px"}let Vs=!1,Xr=!1,Zr=null;function iu(){if(Vs)return;const n=f("scanner-video");if(!n)return;const e=f("scan-status");e&&(e.textContent="Starting camera…",e.style.display="block"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{cA(n,e)})})}function cA(n,e){Quagga.init({inputStream:{name:"Live",type:"LiveStream",target:n,constraints:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}},locator:{patchSize:"medium",halfSample:!0},decoder:{readers:["ean_reader","ean_8_reader","upc_reader","upc_e_reader","code_128_reader","code_39_reader"]},locate:!0,frequency:10},function(t){if(t){console.error("Scanner init error:",t);const i=f("scerr");i&&(i.textContent="⚠️ Could not access camera. Try entering the barcode manually.",i.style.display="block"),e&&(e.style.display="none");return}lA(n),Quagga.start(),Vs=!0,e&&(e.textContent="Scanning…"),setTimeout(()=>uA(n),2e3)}),Quagga.onDetected(Jg)}function lA(n){n.querySelectorAll("video").forEach(e=>{e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,e.play().catch(()=>{})})}async function uA(n){if(!Vs)return;const e=n.querySelector("video");if(!(!e||e.videoWidth>0)){console.warn("Camera feed appears black — retrying with manual getUserMedia");try{const t=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}});Zr=t,e.srcObject&&e.srcObject.getTracks().forEach(i=>i.stop()),e.srcObject=t,e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,await e.play()}catch(t){console.error("Manual camera retry failed:",t)}}}function su(){if(Vs){try{Quagga.stop()}catch{}Quagga.offDetected(Jg),Zr&&(Zr.getTracks().forEach(n=>n.stop()),Zr=null),Vs=!1,Xr=!1}}async function Jg(n){var s,r;if(Xr)return;const e=n&&n.codeResult&&n.codeResult.code;if(!e)return;const t=((r=(s=n.codeResult.decodedCodes)==null?void 0:s.filter(o=>o.error!==void 0))==null?void 0:r.map(o=>o.error))||[];if(!((t.length?t.reduce((o,c)=>o+c,0)/t.length:1)>.25)){Xr=!0,dA(),su(),f("scanbody").style.display="none",f("scspin").style.display="block",f("scst").textContent="Found "+e+" — looking up…";try{const o=await Xg(e);d.cp=o,f("aqty").value=1,f("aexp").value="",ru("fridge",f("rl-fridge")),Zg(o)}catch{const o=f("scerr");o.textContent="⚠️ Lookup failed. Check your connection or enter the barcode manually.",o.style.display="block"}f("scanbody").style.display="block",f("scspin").style.display="none",Xr=!1}}function dA(){const n=f("scan-success");n&&(n.style.display="flex",n.style.animation="none",n.offsetHeight,n.style.animation="",setTimeout(()=>{n.style.display="none"},500))}function hA(){ke("result"),ct("scan"),f("scerr").style.display="none",iu()}function fA(){d.scanDestList=!0,ct("scan");const n=f("scanovttl");n&&(n.textContent="Scan → Shopping List");const e=f("scan-dest-hint");e&&(e.textContent="Running low? Scan to add to your shopping list."),f("scerr").style.display="none",iu()}function pA(){d.scanDestList=!1,ct("scan");const n=f("scanovttl");n&&(n.textContent="Scan Barcode");const e=f("scan-dest-hint");e&&(e.textContent="Scan a barcode to add to your pantry or shopping list."),f("scerr").style.display="none",iu()}function mA(){const n=f("scanNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=f("scanNoteInp");t&&t.focus()}}function gA(){if(!d.cp)return;const n=d.cp.notFound?"Barcode "+d.cp.barcode:d.cp.name,e=f("scanNoteInp"),t=e?e.value.trim():"",i=parseInt(f("aqty").value)||1,s={id:Date.now().toString(),name:n,qty:i,checked:!1,src:"scan"};d.cp.brand&&(s.brand=d.cp.brand),d.cp.image&&(s.image=d.cp.image),t&&(s.note=t),ve(s),S("Added to list: "+n),ke("result"),ke("scan"),d.scanDestList=!1,e&&(e.value="");const r=f("scanNoteWrap");r&&(r.style.display="none"),window.showScreen("shopping")}function yA(){const n=f("mentry");n.style.display=n.style.display==="none"?"block":"none"}async function vA(){const n=f("meinp").value.trim();if(!n)return;su(),f("scanbody").style.display="none",f("scspin").style.display="block",f("scst").textContent="Looking up…";const e=await Xg(n);d.cp=e,f("aqty").value=1,f("aexp").value="",ru("fridge",f("rl-fridge")),f("meinp").value="",Zg(e),f("scanbody").style.display="block",f("scspin").style.display="none"}async function Xg(n){try{const e=await fetch("/api/barcode?code="+encodeURIComponent(n));if(e.ok){const t=await e.json();if(t.found&&t.product)return{...t.product,notFound:!1}}}catch{}return{barcode:n,name:"",brand:"",quantity:"",category:"General",image:null,source:null,description:"",notFound:!0}}function wA(n,e){switch(n){case"Open Food Facts":return`https://world.openfoodfacts.org/product/${e}`;case"Open Beauty Facts":return`https://world.openbeautyfacts.org/product/${e}`;case"Open Pet Food Facts":return`https://world.openpetfoodfacts.org/product/${e}`;case"UPC Item DB":return`https://www.upcitemdb.com/upc/${e}`;case"Edamam":return"https://www.edamam.com/food-database/en/";default:return"#"}}function Zg(n){var s;ke("scan"),f("resttl").textContent=n.notFound?"Not Found":"Product Found ✓",f("aunit").value=n.quantity||"unit";let e="";if(n.notFound)e=`<div class="nfb">⚠️ Barcode <code>${n.barcode}</code> not found in any database. Enter name:<input class="fi" id="mnm" placeholder="Product name (required)" oninput="valAdd()" style="margin-top:10px"/></div>`;else{const r=n.image?`<img src="${n.image}" class="pimg" onerror="this.style.display='none'"/>`:'<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">🛒</div>',o=n.description?`<div class="pdsc">${n.description}</div>`:"",c=n.source?`<a href="${wA(n.source,n.barcode)}" target="_blank" rel="noopener" class="srcb" style="text-decoration:none">${n.source} ↗</a>`:"";e=`<div class="pcard"><div class="phdr">${r}<div style="flex:1"><div class="pnm">${n.name}</div>${n.brand?`<div class="pbr">${n.brand}</div>`:""}<div class="pbc">${n.barcode}</div><span class="bdg">${n.category}</span>${c}</div></div>${o}</div>`}f("resbody").innerHTML=e;const t=(s=f("ov-result"))==null?void 0:s.querySelector(".ovbody");if(t){const r=t.querySelector(".frow"),o=t.querySelectorAll(".frow")[1],c=t.querySelectorAll(".qrow")[1];r&&(r.style.display=d.scanDestList?"none":""),o&&(o.style.display=d.scanDestList?"none":""),c&&(c.style.display=d.scanDestList?"none":"")}const i=f("scan-dest-btns");i&&(d.scanDestList?i.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2;background:var(--gn);border-color:var(--gn)" id="addbtn" onclick="addScannedToList()">🛒 Add to Shopping List</button>
      </div>`:i.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2" id="addbtn" onclick="addToInv()">📦 Add to Pantry</button>
      </div>
      <button class="btn bs bf" style="margin-top:8px;border-color:var(--gn);color:var(--gn)" onclick="addScannedToList()">🛒 Add to Shopping List instead</button>`),n.notFound&&setTimeout(()=>{const r=f("addbtn");r&&(r.disabled=!0)},0),ct("result")}function ru(n,e){d.selR=n,document.querySelectorAll("#ov-result .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function _A(){const n=f("mnm");f("addbtn").disabled=!(n&&n.value.trim())}async function bA(){if(!d.cp)return;const n=f("mnm"),e=d.cp.notFound?n&&n.value.trim()||"":d.cp.name;if(!e)return;const t=f("aunit").value.trim()||"unit",i=Math.max(1,parseInt(f("aqty").value)||1),s=f("aexp").value||null,r="item-"+d.cp.barcode.replace(/\W/g,"-"),o=d.inv.find(c=>c.id===r);await oe({id:r,barcode:d.cp.barcode,name:e,brand:d.cp.brand||"",unit:t,qty:o?o.qty+i:i,location:d.selR,category:d.cp.category||"General",image:d.cp.image||null,source:d.cp.source||null,expiry:s,addedAt:o?o.addedAt:new Date().toLocaleDateString()}),S(o?`+${i} added to ${e}`:`${e} added!`),d.cp=null,ke("result")}function TA(n){const e=f("aqty");e.value=Math.max(1,(parseInt(e.value)||1)+n)}let $e=null,Lr=0,Dr=0,Q=null,sn=null,_t=0,yt=!1,ci=!1;const rn=80,Nr=.1,on=.7,Mr=8,Un="cubic-bezier(0.25, 1.5, 0.5, 1)",De="cubic-bezier(0.4, 0, 0.2, 1)";function IA(){document.addEventListener("touchstart",e=>{const t=e.target.closest(".swipe-inner");if(!t)return;const i=t.closest(".swipe-wrap");i&&(d.selectMode||(Q&&Q!==i&&(Ot(Q),Q=null),$e=t,Lr=e.touches[0].clientX,Dr=e.touches[0].clientY,sn=null,yt=!1,_t=i.offsetWidth,t.classList.add("swiping")))},{passive:!0}),document.addEventListener("touchmove",e=>{if(!$e)return;const t=e.touches[0].clientX,i=e.touches[0].clientY,s=t-Lr,r=i-Dr;if(!sn){if(Math.abs(s)<Mr&&Math.abs(r)<Mr)return;sn=Math.abs(s)>Math.abs(r)?"horizontal":"vertical"}if(sn==="vertical"){$e.classList.remove("swiping"),$e=null;return}e.preventDefault();const o=$e.closest(".swipe-wrap"),c=o==null?void 0:o.dataset.list,l=s>0&&c==="inv",u=l?s:s>=0?0:s;if($e.style.transform=`translateX(${u}px)`,u<0){const g=o==null?void 0:o.querySelector(".swipe-del");if(g){const I=Math.min(100,Math.abs(u)/rn*100);g.style.clipPath=`inset(0 0 0 ${100-I}%)`}const w=o==null?void 0:o.querySelector(".swipe-add");w&&(w.style.clipPath="inset(0 100% 0 0)")}else if(u>0&&l){const g=o==null?void 0:o.querySelector(".swipe-add");if(g){const I=Math.min(100,u/rn*100);g.style.clipPath=`inset(0 ${100-I}% 0 0)`}const w=o==null?void 0:o.querySelector(".swipe-del");w&&(w.style.clipPath="inset(0 0 0 100%)")}const p=Math.abs(u)/_t;p>=on&&!yt?(yt=!0,navigator.vibrate&&navigator.vibrate(10),o==null||o.classList.add("swipe-threshold")):p<on&&yt&&(yt=!1,o==null||o.classList.remove("swipe-threshold"))},{passive:!1}),document.addEventListener("touchend",()=>{if(!$e)return;const e=$e,t=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/_t,r=t==null?void 0:t.dataset.list,o=i>0&&r==="inv";if(o&&s>=on)tf(t,e);else if(o&&s>=Nr){e.style.transition=`transform 0.4s ${Un}`,e.style.transform=`translateX(${rn}px)`;const c=t==null?void 0:t.querySelector(".swipe-add");c&&(c.style.transition=`clip-path 0.3s ${De}`,c.style.clipPath="inset(0 0 0 0)"),t==null||t.classList.add("open"),Q&&Q!==t&&Ot(Q),Q=t,setTimeout(()=>{e.style.transition=""},400)}else if(!o&&s>=on)ef(t,e);else if(!o&&i<0&&s>=Nr){e.style.transition=`transform 0.4s ${Un}`,e.style.transform=`translateX(-${rn}px)`;const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${De}`,c.style.clipPath="inset(0 0 0 0%)"),t==null||t.classList.add("open"),t==null||t.classList.add("swipe-threshold"),Q&&Q!==t&&Ot(Q),Q=t,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${Un}`,e.style.transform="translateX(0)";const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${De}`,c.style.clipPath="inset(0 0 0 100%)");const l=t==null?void 0:t.querySelector(".swipe-add");l&&(l.style.transition=`clip-path 0.3s ${De}`,l.style.clipPath="inset(0 100% 0 0)"),t==null||t.classList.remove("open","swipe-threshold"),Q===t&&(Q=null),setTimeout(()=>{e.style.transition="",c&&(c.style.transition=""),l&&(l.style.transition="")},350)}$e=null}),document.addEventListener("mousedown",e=>{if(e.button!==0)return;const t=e.target.closest(".swipe-inner");if(!t)return;const i=t.closest(".swipe-wrap");i&&(d.selectMode||(Q&&Q!==i&&(Ot(Q),Q=null),ci=!0,$e=t,Lr=e.clientX,Dr=e.clientY,sn=null,yt=!1,_t=i.offsetWidth,t.classList.add("swiping")))}),document.addEventListener("mousemove",e=>{if(!ci||!$e)return;const t=e.clientX-Lr,i=e.clientY-Dr;if(!sn){if(Math.abs(t)<Mr&&Math.abs(i)<Mr)return;sn=Math.abs(t)>Math.abs(i)?"horizontal":"vertical"}if(sn==="vertical"){$e.classList.remove("swiping"),$e=null,ci=!1;return}e.preventDefault();const s=$e.closest(".swipe-wrap"),r=s==null?void 0:s.dataset.list,o=t>0&&r==="inv",c=o?t:t>=0?0:t;if($e.style.transform=`translateX(${c}px)`,c<0){const u=s==null?void 0:s.querySelector(".swipe-del");if(u){const g=Math.min(100,Math.abs(c)/rn*100);u.style.clipPath=`inset(0 0 0 ${100-g}%)`}const p=s==null?void 0:s.querySelector(".swipe-add");p&&(p.style.clipPath="inset(0 100% 0 0)")}else if(c>0&&o){const u=s==null?void 0:s.querySelector(".swipe-add");if(u){const g=Math.min(100,c/rn*100);u.style.clipPath=`inset(0 ${100-g}% 0 0)`}const p=s==null?void 0:s.querySelector(".swipe-del");p&&(p.style.clipPath="inset(0 0 0 100%)")}const l=Math.abs(c)/_t;l>=on&&!yt?(yt=!0,navigator.vibrate&&navigator.vibrate(10),s==null||s.classList.add("swipe-threshold")):l<on&&yt&&(yt=!1,s==null||s.classList.remove("swipe-threshold"))});function n(){if(!ci||!$e){ci=!1;return}ci=!1;const e=$e,t=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/_t,r=t==null?void 0:t.dataset.list,o=i>0&&r==="inv";if(o&&s>=on)tf(t,e);else if(o&&s>=Nr){e.style.transition=`transform 0.4s ${Un}`,e.style.transform=`translateX(${rn}px)`;const c=t==null?void 0:t.querySelector(".swipe-add");c&&(c.style.transition=`clip-path 0.3s ${De}`,c.style.clipPath="inset(0 0 0 0)"),t==null||t.classList.add("open"),Q&&Q!==t&&Ot(Q),Q=t,setTimeout(()=>{e.style.transition=""},400)}else if(!o&&s>=on)ef(t,e);else if(!o&&i<0&&s>=Nr){e.style.transition=`transform 0.4s ${Un}`,e.style.transform=`translateX(-${rn}px)`;const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${De}`,c.style.clipPath="inset(0 0 0 0%)"),t==null||t.classList.add("open"),t==null||t.classList.add("swipe-threshold"),Q&&Q!==t&&Ot(Q),Q=t,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${Un}`,e.style.transform="translateX(0)";const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${De}`,c.style.clipPath="inset(0 0 0 100%)");const l=t==null?void 0:t.querySelector(".swipe-add");l&&(l.style.transition=`clip-path 0.3s ${De}`,l.style.clipPath="inset(0 100% 0 0)"),t==null||t.classList.remove("open","swipe-threshold"),Q===t&&(Q=null),setTimeout(()=>{e.style.transition="",c&&(c.style.transition=""),l&&(l.style.transition="")},350)}$e=null}document.addEventListener("mouseup",n),document.addEventListener("mouseleave",n),document.addEventListener("mousedown",e=>{if(!Q||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const t=e.target.closest(".swipe-inner");t&&t.closest(".swipe-wrap")===Q||(Ot(Q),Q=null)}),document.addEventListener("click",e=>{document.querySelectorAll(".sh-note-edit.open").forEach(t=>{if(t.contains(e.target))return;const i=t.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-note-btn");if(s&&s.contains(e.target))return;const r=t.querySelector("textarea");r&&r.blur(),t.classList.remove("open")}),document.querySelectorAll(".sh-qty-edit.open").forEach(t=>{if(t.contains(e.target))return;const i=t.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-qty");if(s&&s.contains(e.target))return;const r=t.querySelector("input");r&&r.blur(),t.classList.remove("open")})},!0),document.addEventListener("touchstart",e=>{if(!Q||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const t=e.target.closest(".swipe-inner");t&&t.closest(".swipe-wrap")===Q||(Ot(Q),Q=null)},{passive:!0})}function Ot(n){const e=n==null?void 0:n.querySelector(".swipe-inner"),t=n==null?void 0:n.querySelector(".swipe-del"),i=n==null?void 0:n.querySelector(".swipe-add");e&&(e.style.transition=`transform 0.35s ${Un}`,e.style.transform="translateX(0)",setTimeout(()=>{e.style.transition=""},350)),t&&(t.style.transition=`clip-path 0.3s ${De}`,t.style.clipPath="inset(0 0 0 100%)",setTimeout(()=>{t.style.transition=""},300)),i&&(i.style.transition=`clip-path 0.3s ${De}`,i.style.clipPath="inset(0 100% 0 0)",setTimeout(()=>{i.style.transition=""},300)),n==null||n.classList.remove("open","swipe-threshold")}async function ef(n,e){const t=n==null?void 0:n.dataset.id,i=n==null?void 0:n.dataset.list;if(!t||!i)return;e.style.transition=`transform 0.3s ${De}`,e.style.transform=`translateX(-${_t+100}px)`;const s=n==null?void 0:n.querySelector(".swipe-del");s&&(s.style.transition=`transform 0.3s ${De}`,s.style.transform=`translateX(-${_t+100}px)`),await new Promise(r=>setTimeout(r,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",Q===n&&(Q=null),await new Promise(r=>setTimeout(r,250)),i==="shop"?await Fi(t):(await Qs(t),S("Item removed"))}async function tf(n,e){const t=n==null?void 0:n.dataset.id;if(!t)return;e.style.transition=`transform 0.3s ${De}`,e.style.transform=`translateX(${_t+100}px)`;const i=n==null?void 0:n.querySelector(".swipe-add");i&&(i.style.transition=`transform 0.3s ${De}`,i.style.transform=`translateX(${_t+100}px)`),await new Promise(s=>setTimeout(s,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",Q===n&&(Q=null),await new Promise(s=>setTimeout(s,250)),await ey(t)}async function EA(n,e){if(e!=="inv")return;const t=f("sw-"+n);if(!t)return;const i=t.querySelector(".swipe-inner"),s=t.offsetWidth;i&&(i.style.transition=`transform 0.3s ${De}`,i.style.transform=`translateX(${s+100}px)`);const r=t.querySelector(".swipe-add");r&&(r.style.transition=`transform 0.3s ${De}`,r.style.transform=`translateX(${s+100}px)`),await new Promise(o=>setTimeout(o,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",Q===t&&(Q=null),await new Promise(o=>setTimeout(o,250)),await ey(n)}async function ey(n){const e=d.inv.find(i=>i.id===n);if(!e)return;if(d.shop.find(i=>i.name.toLowerCase()===e.name.toLowerCase()&&!i.checked)){S(`${e.name} is already on your list`);return}await ve({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,brand:e.brand||"",image:e.image||null,src:"supplies"}),S(`${e.name} added to shopping list 🛒`)}async function kA(n,e){const t=f("sw-"+n);if(!t)return;const i=t.querySelector(".swipe-inner"),s=t.offsetWidth;i&&(i.style.transition=`transform 0.3s ${De}`,i.style.transform=`translateX(-${s+100}px)`);const r=t.querySelector(".swipe-del");r&&(r.style.transition=`transform 0.3s ${De}`,r.style.transform=`translateX(-${s+100}px)`),await new Promise(o=>setTimeout(o,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",Q===t&&(Q=null),await new Promise(o=>setTimeout(o,250)),e==="shop"?await Fi(n):(await Qs(n),S("Item removed"))}function SA(n,e){const t=f("sw-"+n);if(t){const i=t.querySelector(".swipe-inner"),s=parseFloat(((i==null?void 0:i.style.transform)||"").replace("translateX(",""))||0;if(Math.abs(s)>10){Ot(t),Q=null;return}}if(d.selectMode){d.selectedIds.has(n)?(d.selectedIds.delete(n),t==null||t.classList.remove("selected")):(d.selectedIds.add(n),t==null||t.classList.add("selected")),Jo();return}e==="shop"?window.openItemDetail(n):window.openInvItemDetail(n)}function CA(){if(d.selectMode==="shop"){Ni();return}d.selectMode&&Ni(),d.selectMode="shop",d.selectedIds.clear(),document.querySelectorAll("#shlist .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=f("sh-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),Jo()}function RA(){if(d.selectMode==="inv"){Ni();return}d.selectMode&&Ni(),d.selectMode="inv",d.selectedIds.clear(),document.querySelectorAll("#ibody .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=f("inv-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),Jo()}function Ni(){d.selectMode=null,d.selectedIds.clear(),document.querySelectorAll(".swipe-wrap.selecting").forEach(t=>t.classList.remove("selecting","selected"));const n=f("sh-selbtn");n&&(n.classList.remove("active"),n.textContent="Select");const e=f("inv-selbtn");e&&(e.classList.remove("active"),e.textContent="Select"),Jo()}async function AA(){if(!d.selectedIds.size)return;const n=[...d.selectedIds],e=d.selectMode;Ni(),e==="shop"?await Promise.all(n.map(t=>Fi(t))):await Promise.all(n.map(t=>Qs(t))),S(`Removed ${n.length} item${n.length!==1?"s":""} 🗑`)}function Jo(){const n=f("multi-bar");if(!n)return;const e=d.selectedIds.size,t=f("multi-count");t&&(t.textContent=e),d.selectMode?n.classList.add("visible"):n.classList.remove("visible")}const xA=["Chicken","Beef","Fish","Vegetarian","Vegan","Quick","Kids","Healthy","Batch Cook","Date Night"];function ty(n){return"chip-"+n.split(" ").join("-")}function ny(){const n=f("recChips");n&&(n.innerHTML=xA.map(e=>`<button onclick="toggleChip('${e}')" id="${ty(e)}" style="padding:5px 10px;border-radius:20px;border:1px solid var(--bd);background:var(--s2);color:var(--tx2);font-size:.78rem;cursor:pointer;transition:all .15s">${e}</button>`).join(""))}function PA(n){const e=f(ty(n));window._activeChips.has(n)?(window._activeChips.delete(n),e&&(e.style.background="var(--s2)",e.style.color="var(--tx2)",e.style.borderColor="var(--bd)")):(window._activeChips.add(n),e&&(e.style.background="var(--ac)",e.style.color="#000",e.style.borderColor="var(--ac)")),iy()}function iy(){const n=f("recPicker"),e=f("recFilter")?f("recFilter").value.trim().toLowerCase():"",t=[...window._activeChips].map(r=>r.toLowerCase()),s=[...d.recs].sort((r,o)=>(o.cookCount||0)-(r.cookCount||0)).filter(r=>{const o=(r.name+" "+(r.description||"")+" "+(r.tags||[]).join(" ")).toLowerCase(),c=e?e.split(/\s+/).every(u=>o.includes(u)):!0,l=t.every(u=>o.includes(u));return c&&l});n.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(r=>`<option value="${r.id}">${r.name}</option>`).join(""),window._pickedRec=null,f("mealMinp").value=""}function $A(n,e){d.md=n,f("mealMttl").textContent="Meal for "+e,f("mealMinp").value=d.mp[n]||"",window._pickedRec=null,window._activeChips=new Set;const t=f("recFilter");t&&(t.value=""),ny();const i=f("recPicker");if(d.recs&&d.recs.length){const s=[...d.recs].sort((c,l)=>(l.cookCount||0)-(c.cookCount||0));i.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(c=>`<option value="${c.id}">${c.name}</option>`).join("");const r=d.mp[n]||"",o=s.find(c=>c.name===r);i.value=o?o.id:"",f("recPickerWrap").style.display="block"}else f("recPickerWrap").style.display="none";f("mealM").classList.add("active"),setTimeout(()=>f("mealMinp").focus(),100)}function LA(n){if(!n){window._pickedRec=null,f("mealMinp").value="";return}const e=d.recs.find(t=>t.id===n);e&&(window._pickedRec=e,f("mealMinp").value=e.name)}function ou(){f("mealM").classList.remove("active")}function DA(){f("schedM").classList.remove("active")}async function NA(){const n=f("mealMinp").value.trim();if(await In(d.md,n||null),window._pickedRec&&window._pickedRec.description){const e=window._pickedRec.description,t=d.inv.map(o=>o.name.toLowerCase()),i=d.shop.map(o=>o.name.toLowerCase()),s=e.split(/[\n,]/).map(o=>o.replace(/^[\d\/\s]*(cup|tbsp|tsp|oz|lb|g|kg|ml|l|clove|slice|piece|bunch|head|can|package|pkg)s?\.?\s*/gi,"").replace(/^[\d]+\s*/,"").trim()).filter(o=>o.length>1&&o.length<60);let r=0;for(const o of s){if(/\b(add|mix|heat|cook|bake|stir|boil|fry|slice|chop|dice|combine|place|pour|season|serve|preheat|bring|remove|let|set|transfer)\b/i.test(o))continue;const c=o.replace(/^[-•*]\s*/,"").trim();if(!c||c.length<2)continue;const l=c.toLowerCase();t.some(u=>u.includes(l)||l.includes(u))||i.some(u=>u===l)||(await ve({id:Date.now().toString()+Math.random().toString(36).slice(2),name:c,qty:1,checked:!1,src:"recipe"}),r++)}r>0&&S(`Added ${r} ingredient${r!==1?"s":""} to shopping list 🛒`)}window._pickedRec=null,ou(),si(),tr(),zi()}async function MA(){await In(d.md,null),ou(),si(),tr(),zi()}function OA(n){const e=d.mp[n];e&&(d.cn=e,d.nr=0,f("cookedNm").textContent=e,f("cnotes").value="",Ps("cstars",0),f("cookedM").classList.add("active"))}async function VA(){await rl(d.cn,hn()),await In(hn(),null),f("cookedM").classList.remove("active"),si(),zi(),S("Meal logged!")}async function UA(){var i;const n=f("cnotes").value.trim(),e=(i=f("tog-leftover"))==null?void 0:i.classList.contains("on");await rl(d.cn,hn());const t=d.recs.find(s=>s.name.toLowerCase()===d.cn.toLowerCase());t?await Je({...t,cookCount:(t.cookCount||0)+1,lastCooked:hn()}):await Je({id:"rec-"+Date.now(),name:d.cn,rating:d.nr,favorited:!1,notes:n,description:"",source:"Meal Plan",tags:[],cookCount:1,savedAt:new Date().toLocaleDateString(),lastCooked:hn()}),e&&await In(Hy(),d.cn+" (leftovers)"),await In(hn(),null),f("cookedM").classList.remove("active"),si(),zi(),S(e?"Saved! Leftovers planned for tomorrow 🥡":"Saved to recipes! ⭐")}function FA(n){f("schedNm").textContent=n;const e=["S","M","T","W","T","F","S"],t=new Date;t.setHours(0,0,0,0),f("schedWk").innerHTML=Mi().map((i,s)=>{const r=i.toISOString().split("T")[0],o=i.getTime()===t.getTime(),c=d.mp[r];return`<div class="wd${o?" today":""}${c?" hm":""}" onclick="schedSet('${r}','${n}')"><div class="wdn">${e[s]}</div><div class="wdd">${i.getDate()}</div>${c?`<div class="wdm">${c.substring(0,8)}…</div>`:""}</div>`}).join(""),f("schedM").classList.add("active")}async function HA(n,e){await In(n,e),f("schedM").classList.remove("active"),si(),zi(),S("Scheduled! 📅")}function BA(){const n=s=>f(s),e=(s,r)=>{const o=n(s);o&&(o.value=r||"")};e("setName",d.cfg.name),e("setAdults",d.cfg.adults),e("setKids",d.cfg.kids),e("setOther",d.cfg.other),e("setCuisines",d.cfg.cuisines),e("setCookTime",d.cfg.cookTime),e("setZipcode",d.cfg.zipcode);const t=(s,r)=>{const o=n(s);o&&o.classList.toggle("on",!!r)};t("tg-nopork",d.cfg.nopork),t("tg-noshellfish",d.cfg.noshellfish),t("tg-vegetarian",d.cfg.vegetarian),t("tg-glutenfree",d.cfg.glutenfree),t("tg-notif",d.cfg.notif);const i=f("notifTimeRow");i&&(i.style.display=d.cfg.notif?"block":"none"),e("setNotifTime",d.cfg.notifTime||"8"),e("setNotifDays",String(d.cfg.notifDays||3)),e("setUsername",d.username),lu(),cu(),cx()}async function jA(){d.cfg={...d.cfg,name:f("setName").value.trim(),adults:f("setAdults").value.trim(),kids:f("setKids").value.trim(),nopork:f("tg-nopork").classList.contains("on"),noshellfish:f("tg-noshellfish").classList.contains("on"),vegetarian:f("tg-vegetarian").classList.contains("on"),glutenfree:f("tg-glutenfree").classList.contains("on"),other:f("setOther").value.trim(),cuisines:f("setCuisines").value.trim(),cookTime:f("setCookTime").value,zipcode:f("setZipcode")?f("setZipcode").value.trim():"",notif:f("tg-notif").classList.contains("on"),notifTime:f("setNotifTime")?f("setNotifTime").value:"8",notifDays:parseInt(f("setNotifDays")?f("setNotifDays").value:"3")},await Ks(),d.cfg.notif&&sy(),S("Settings saved!"),ke("settings"),Ll()}async function zA(){var e,t;const n=((t=(e=f("setZipcode"))==null?void 0:e.value)==null?void 0:t.trim())||"";d.cfg={...d.cfg,zipcode:n},await Ks(),S("Saved!")}async function qA(n){if(!n.classList.contains("on")){if(!("Notification"in window)){S("Notifications not supported on this browser");return}if(Notification.permission==="denied"){S("Notifications blocked — enable in browser settings");return}if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){S("Notifications permission denied");return}}n.classList.toggle("on");const t=f("notifTimeRow");t&&(t.style.display=n.classList.contains("on")?"block":"none")}function WA(){if(Notification.permission!=="granted"){S("Enable notifications first");return}const n=d.inv.filter(t=>{const i=Pt(t.expiry);return i&&(i.c==="expiring"||i.c==="expired")});if(!n.length){new Notification("Kitchen 🧺",{body:"No items expiring soon — you're all good!"});return}const e=n.slice(0,3).map(t=>t.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${e}${n.length>3?" + "+(n.length-3)+" more":""} need attention`})}function sy(){if(!d.cfg.notif||Notification.permission!=="granted")return;const n=parseInt(localStorage.getItem("ks-lastnotif")||"0"),e=Date.now();if(e-n<864e5)return;localStorage.setItem("ks-lastnotif",e.toString());const t=d.cfg.notifDays||3,i=d.inv.filter(r=>{if(!Pt(r.expiry))return!1;const c=new Date(r.expiry+"T00:00:00"),l=new Date;return l.setHours(0,0,0,0),Math.round((c-l)/864e5)<=t});if(!i.length)return;const s=i.slice(0,3).map(r=>r.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${s}${i.length>3?" + "+(i.length-3)+" more":""} expiring in ${t} days or less`})}function au(){return le("ks-hhs")||[d.hid]}async function cu(){const n=X();if(n)try{const e=await G(`households/${d.hid}`);if(!e)return;const t=e.ownerUid===n.uid,i=f("hhInviteCode");if(i&&(i.textContent=e.inviteCode||"—"),e.inviteCode&&t)try{await z(`household_codes/${e.inviteCode}`,{householdId:d.hid})}catch{}const s=f("regenCodeBtn");s&&(s.style.display=t?"":"none");const r=f("hhMembers");if(r&&e.members){const l=await Promise.all(e.members.map(async u=>{try{const p=await G(`users/${u.uid}`);return{...u,username:(p==null?void 0:p.username)||null}}catch{return{...u,username:null}}}));r.innerHTML=l.map(u=>{const p=u.uid===n.uid,g=u.role==="owner",w=g?" 👑":"",I=u.username?`@${u.username}`:"",C=u.joinedAt?new Date(u.joinedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"",P=[];I&&P.push(I),P.push(g?"Owner":"Member"),C&&P.push(`Joined ${C}`);let $="";return t&&!p&&($=`<div style="display:flex;gap:4px;flex-shrink:0">
            <button onclick="event.stopPropagation();transferOwnershipUI('${u.uid}','${u.name.replace(/'/g,"\\'")}')" style="background:none;border:1px solid var(--b2);color:var(--ac);cursor:pointer;font-size:.72rem;padding:4px 8px;border-radius:8px" title="Transfer ownership">👑 Transfer</button>
            <button onclick="event.stopPropagation();removeMemberFromHH('${u.uid}','${u.name.replace(/'/g,"\\'")}')" style="background:none;border:1px solid var(--b2);color:var(--rd);cursor:pointer;font-size:.72rem;padding:4px 8px;border-radius:8px">Remove</button>
          </div>`),`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px">
          <div style="min-width:0;flex:1">
            <div style="font-size:.86rem;font-weight:500;color:var(--tx)">${u.name}${p?" (you)":""}${w}</div>
            <div style="font-size:.7rem;color:var(--mt);margin-top:2px">${P.join(" · ")}</div>
          </div>
          ${$}
        </div>`}).join("")}const o=f("utilitiesSection");o&&(o.style.display="",o.querySelectorAll(".ownerUtil").forEach(l=>{l.style.display=t?"":"none"}));const c=f("leaveHouseholdBtn");c&&(c.style.display="block",c.textContent=t?"🗑 Delete or Leave Household":"🚪 Leave Household")}catch(e){console.error("renderHouseholdInfo error:",e)}}async function GA(){var e;const n=(e=f("hhInviteCode"))==null?void 0:e.textContent;if(!(!n||n==="—"))try{await navigator.clipboard.writeText(n),S("Invite code copied!")}catch{S("Couldn't copy — try manually")}}async function KA(){var t;const n=(t=f("hhInviteCode"))==null?void 0:t.textContent;if(!n||n==="—")return;const e=`Join my kitchen on Kitchen app! Use invite code: ${n} at https://pantry-app-zeta-six.vercel.app`;if(navigator.share)try{await navigator.share({text:e})}catch{}else try{await navigator.clipboard.writeText(e),S("Share text copied to clipboard!")}catch{S("Couldn't share — try manually")}}async function QA(){if(confirm("Regenerate invite code? The old code will stop working."))try{const n=await mp(d.hid);if(n){const e=f("hhInviteCode");e&&(e.textContent=n),S("New invite code generated!")}}catch(n){console.error("regenInviteCode error:",n),S("Failed to regenerate code")}}async function YA(n,e){const t=e||"this member";if(confirm(`Remove ${t} from the household? They will lose access immediately.`))try{await nl(d.hid,n),S(`${t} has been removed`),cu()}catch(i){console.error("removeMemberFromHH error:",i),S("Failed to remove member")}}async function JA(n,e){const t=e||"this member";if(confirm(`Transfer ownership to ${t}? You will become a regular member.`))try{await gp(d.hid,n),S(`Ownership transferred to ${t}`),cu()}catch(i){console.error("transferOwnershipUI error:",i),S("Failed to transfer ownership")}}async function ry(){const n=X();if(n)try{const e=await G(`households/${d.hid}`);if(!e)return;const t=e.ownerUid===n.uid,i=(e.members||[]).length,s=e.name||"this household";if(t){if(i>1){alert("You're the owner. Please transfer ownership to another member before leaving.");return}if(!confirm("You're the only member. Leaving will permanently delete this household and all its data. Are you sure?"))return;await il(d.hid,n.uid);try{const r=await G(`users/${n.uid}`);r&&await z(`users/${n.uid}`,{...r,householdIds:[],needsHousehold:!0,onboardingDone:!1,id:void 0})}catch{}S("Household deleted"),Dc()}else{if(!confirm(`Leave the ${s} household? You will lose access immediately.`))return;await nl(d.hid,n.uid),S("You have left the household"),Dc()}}catch(e){console.error("leaveHousehold error:",e),S("Something went wrong. Please try again.")}}function Dc(){localStorage.removeItem("ks-h");const n=(le("ks-hhs")||[]).filter(e=>e!==d.hid);n.length>0?(Oe("ks-hhs",n),localStorage.setItem("ks-h",n[0])):localStorage.removeItem("ks-hhs"),location.reload()}async function XA(){const n=X();if(!n||!d.hid)return;await sl(d.hid,n.uid)||(S("You no longer have access to this household"),Dc())}async function ZA(){const n=X();if(n)try{if(d.hid){const e=await G(`households/${d.hid}`);if(e&&e.ownerUid===n.uid&&(e.members||[]).length>1){alert("You're the owner of a household with other members. Please transfer ownership before deleting your account.");return}}if(!confirm("Delete your account permanently? All your data will be erased and cannot be recovered.")||!confirm("Are you absolutely sure? This action cannot be undone."))return;await Cp(n.uid);try{await n.delete()}catch(e){if(e.code==="auth/requires-recent-login"){alert("For security, please sign out and sign back in, then try deleting your account again.");return}throw e}localStorage.clear(),S("Account deleted"),location.reload()}catch(e){console.error("deleteAccount error:",e),S("Failed to delete account. Please try again.")}}async function ex(){var i,s,r;const n=(r=(s=(i=f("newHHCode"))==null?void 0:i.value)==null?void 0:s.trim())==null?void 0:r.toUpperCase();if(!n)return;const e=X();if(!e){S("Sign in first");return}const t=f("newHHCode");t.disabled=!0;try{const o=await tl(n,e);if(!o){S("Invalid invite code. Check and try again."),t.disabled=!1;return}const c=au();c.includes(o)||c.push(o),Oe("ks-hhs",c),f("newHHCode").value="",lu(),S("Household joined!")}catch(o){console.error("addHousehold error:",o),S("Failed to join household")}t.disabled=!1}function tx(n){n!==d.hid&&(localStorage.setItem("ks-h",n),location.reload())}async function nx(n){if(n===d.hid){ry();return}const e=X();if(e)try{const i=await G(`users/${e.uid}`);if(i){const o=(i.householdId?[i.householdId]:i.householdIds||[]).filter(l=>l!==n),c={...i,householdIds:o,id:void 0};i.householdId&&delete c.householdId,await z(`users/${e.uid}`,c)}const s=await G(`households/${n}`);if(s){const r=(s.members||[]).filter(c=>c.uid!==e.uid),o=(s.memberUids||[]).filter(c=>c!==e.uid);await z(`households/${n}`,{...s,members:r,memberUids:o,id:void 0})}}catch(i){console.error("removeHousehold error:",i)}const t=au().filter(i=>i!==n);Oe("ks-hhs",t),lu()}async function lu(){const n=au().filter(i=>i!==d.hid),e=f("hhList");if(!e)return;if(!n.length){e.innerHTML='<div style="font-size:.82rem;color:var(--mt);padding:10px 0">No other households yet.</div>';return}const t=[];for(const i of n){let s=i;try{const r=await G(`households/${i}`);r!=null&&r.name&&(s=r.name)}catch{}t.push({id:i,name:s})}e.innerHTML=t.map(({id:i,name:s})=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px;cursor:pointer" onclick="switchHousehold('${i}')">
      <div>
        <div style="font-size:.88rem;font-weight:500;color:var(--tx)">${s}</div>
        <div style="font-size:.7rem;color:var(--mt);margin-top:2px">Tap to switch</div>
      </div>
      <button onclick="event.stopPropagation();removeHousehold('${i}')" style="background:none;border:none;color:var(--mt);cursor:pointer;font-size:.82rem;padding:4px 8px">✕</button>
    </div>`).join("")}const Eo={gold:{name:"Gold",swatch:"#d4a853",dark:{bg:"#0f0f0d",sf:"#1a1a17",card:"#222220",card2:"#2a2a27",b1:"#333330",b2:"#3d3d39",ac:"#d4a853",ac2:"#e8c27a",acr:"212,168,83",tx:"#ede8d8",tx2:"#b8b09a",mt:"#7a7468"},light:{bg:"#faf8f2",sf:"#ffffff",card:"#f3ede0",card2:"#efe8d8",b1:"#ddd5c0",b2:"#cec4ac",ac:"#a8732a",ac2:"#c48f3e",acr:"168,115,42",tx:"#2a2418",tx2:"#5c5040",mt:"#9a8870"}},forest:{name:"Forest",swatch:"#4a9e5c",dark:{bg:"#0a1410",sf:"#111f17",card:"#182a1e",card2:"#1e3326",b1:"#2a4032",b2:"#355040",ac:"#6db56d",ac2:"#8fd08f",acr:"109,181,109",tx:"#e4f0e4",tx2:"#9dbf9d",mt:"#5a7a5a"},light:{bg:"#f2f9f2",sf:"#ffffff",card:"#e8f5e8",card2:"#dff0df",b1:"#c0ddc0",b2:"#a8cca8",ac:"#2e7d32",ac2:"#43a047",acr:"46,125,50",tx:"#0d2010",tx2:"#2e4f2e",mt:"#5a7a5a"}},ocean:{name:"Ocean",swatch:"#38bdf8",dark:{bg:"#060e1a",sf:"#0d1829",card:"#112035",card2:"#162840",b1:"#1e3554",b2:"#264468",ac:"#38bdf8",ac2:"#7dd3fc",acr:"56,189,248",tx:"#e0f2fe",tx2:"#7ab8d4",mt:"#486880"},light:{bg:"#f0f8ff",sf:"#ffffff",card:"#e0f2fe",card2:"#d4ecf9",b1:"#b0d8f0",b2:"#90c4e4",ac:"#0369a1",ac2:"#0284c7",acr:"3,105,161",tx:"#082040",tx2:"#1e4060",mt:"#4a7090"}},bordeaux:{name:"Bordeaux",swatch:"#e8829a",dark:{bg:"#120810",sf:"#1c0e18",card:"#261420",card2:"#301828",b1:"#4a2238",b2:"#5c2a46",ac:"#e8829a",ac2:"#f4aabb",acr:"232,130,154",tx:"#fce8ee",tx2:"#d4909e",mt:"#8a5060"},light:{bg:"#fff5f7",sf:"#ffffff",card:"#ffe8ed",card2:"#ffd8e0",b1:"#f4b8c4",b2:"#eca0b0",ac:"#be3455",ac2:"#d94070",acr:"190,52,85",tx:"#2a080e",tx2:"#6a2030",mt:"#9a5060"}},sand:{name:"Sand",swatch:"#e07a5f",dark:{bg:"#170e08",sf:"#221508",card:"#2e1c0e",card2:"#382414",b1:"#4a3020",b2:"#5c3c28",ac:"#e07a5f",ac2:"#eca080",acr:"224,122,95",tx:"#fdf0e8",tx2:"#c8a090",mt:"#887060"},light:{bg:"#fdf6ec",sf:"#fffbf5",card:"#f5e8d8",card2:"#eedcc8",b1:"#ddc8ac",b2:"#ccb494",ac:"#c1440e",ac2:"#d4602a",acr:"193,68,14",tx:"#2a1808",tx2:"#5c3820",mt:"#9a7060"}},midnight:{name:"Midnight",swatch:"#818cf8",dark:{bg:"#050814",sf:"#0a0d1f",card:"#0f1228",card2:"#141830",b1:"#1e2448",b2:"#272e58",ac:"#818cf8",ac2:"#a5b0ff",acr:"129,140,248",tx:"#e8eaff",tx2:"#9099cc",mt:"#505880"},light:{bg:"#f0f1ff",sf:"#ffffff",card:"#e4e6ff",card2:"#d8dbff",b1:"#b8bdff",b2:"#a0a6f4",ac:"#4f46e5",ac2:"#6366f1",acr:"79,70,229",tx:"#0a0820",tx2:"#202060",mt:"#5050a0"}},lavender:{name:"Lavender",swatch:"#c084fc",dark:{bg:"#0e0814",sf:"#160e20",card:"#1e1430",card2:"#261a3c",b1:"#382454",b2:"#442c66",ac:"#c084fc",ac2:"#d8a8ff",acr:"192,132,252",tx:"#f5ecff",tx2:"#c0a0e0",mt:"#7a5898"},light:{bg:"#faf5ff",sf:"#ffffff",card:"#f3e8ff",card2:"#ecdcff",b1:"#d8b8f8",b2:"#c8a0f0",ac:"#9333ea",ac2:"#a855f7",acr:"147,51,234",tx:"#1a0830",tx2:"#481080",mt:"#805098"}}};let Us=le("ks-theme")||"gold",Fs=le("ks-mode")||"auto";function ko(n,e){Us=n,Fs=e,Oe("ks-theme",n),Oe("ks-mode",e);const t=Eo[n]||Eo.gold,s=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?t.dark:t.light,r=document.documentElement.style;r.setProperty("--bg",s.bg),r.setProperty("--sf",s.sf),r.setProperty("--card",s.card),r.setProperty("--card2",s.card2),r.setProperty("--b1",s.b1),r.setProperty("--b2",s.b2),r.setProperty("--ac",s.ac),r.setProperty("--ac2",s.ac2),r.setProperty("--acd","rgba("+s.acr+",.12)"),r.setProperty("--tx",s.tx),r.setProperty("--tx2",s.tx2),r.setProperty("--mt",s.mt),r.setProperty("--gn","#6db56d"),r.setProperty("--gnd","rgba(109,181,109,.12)"),r.setProperty("--rd","#d96b6b"),r.setProperty("--rdd","rgba(217,107,107,.12)"),r.setProperty("--am","#c8960a"),r.setProperty("--amd","rgba(200,150,10,.12)"),oy(e),ay(n)}function ix(n){ko(Us,n)}function oy(n){["auto","light","dark"].forEach(e=>{const t=f("mode-"+e);t&&(t.style.background=e===n?"var(--ac)":"",t.style.color=e===n?"var(--bg)":"",t.style.borderColor=e===n?"var(--ac)":"")})}function ay(n){const e=f("themePicker");e&&(e.innerHTML="",Object.keys(Eo).forEach(t=>{const i=Eo[t],s=t===n,r=document.createElement("div");r.title=i.name,r.style.cssText="width:36px;height:36px;border-radius:50%;background:"+i.swatch+";cursor:pointer;border:3px solid "+(s?"var(--tx)":"transparent")+";box-shadow:"+(s?"0 0 0 2px var(--ac)":"none")+";transition:all .2s;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.85rem",r.textContent=s?"✓":"",r.onclick=()=>ko(t,Fs),r.onmouseover=function(){this.style.transform="scale(1.15)"},r.onmouseout=function(){this.style.transform="scale(1)"},e.appendChild(r)}))}function sx(){ko(Us,Fs),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{Fs==="auto"&&ko(Us,"auto")})}function rx(){ay(Us),oy(Fs)}async function ox(){const n=f("enrichBtn"),e=f("enrichProgress"),t=f("enrichStatus"),i=f("enrichBar");n&&(n.disabled=!0),e&&(e.style.display="block");const s=d.shop.filter(u=>nf(u)),r=d.inv.filter(u=>nf(u)),o=[...s.map(u=>({item:u,list:"shop"})),...r.map(u=>({item:u,list:"inv"}))];if(!o.length){t&&(t.textContent="All items already enriched!"),i&&(i.style.width="100%"),n&&(n.disabled=!1),S("Nothing to enrich — all items already have data.");return}let c=0,l=0;for(let u=0;u<o.length;u++){const{item:p,list:g}=o[u],w=Math.round((u+1)/o.length*100);t&&(t.textContent=`Processing "${p.name}" (${u+1}/${o.length})…`),i&&(i.style.width=w+"%");try{const P=(await(await fetch(`/api/text-search?q=${encodeURIComponent(p.name)}`)).json()).results||[];if(P.length){const $=P[0],U={...p,image:$.image||p.image||null,brand:$.brand||p.brand||"",category:$.category||p.category||"",source:$.source||p.source||"search"};g==="shop"?await ve(U):await oe(U),c++}else l++}catch(I){console.warn(`Enrich failed for "${p.name}":`,I),l++}u<o.length-1&&await cy(300)}t&&(t.textContent=`Done! ${c} enriched, ${l} skipped.`),i&&(i.style.width="100%"),n&&(n.disabled=!1),S(`Enrichment complete: ${c} updated, ${l} unchanged.`)}function nf(n){return!n.name||n.name.length<2||n.imageDismissed?!1:!n.image&&!n.brand}function cy(n){return new Promise(e=>setTimeout(e,n))}async function ax(){if(!d.recs||d.recs.length===0){S("No recipes to publish");return}if(!confirm(`Publish all ${d.recs.length} recipes to the community? This creates independent copies visible to everyone. Already-published recipes will be skipped.`))return;const n=X(),e=(n==null?void 0:n.displayName)||localStorage.getItem("ks-who")||"Anonymous",t=d.recs.length;let i=0;const s=f("bulkPubProgress");s&&(s.style.display="block",s.textContent=`Publishing 0/${t}…`);const r=f("bulkPubBtn");r&&(r.disabled=!0);let o=0;for(const c of d.recs)try{if(await ol(c)){o++,s&&(s.textContent=`Published ${i}/${t} (${o} skipped)…`);continue}await Lo(c,e),i++,s&&(s.textContent=`Published ${i}/${t}…`)}catch(l){console.error("Failed to publish:",c.name,l)}S(`Published ${i} of ${t} recipes to community!`+(o?` (${o} already published)`:"")),r&&(r.disabled=!1),s&&(s.textContent=`Done — ${i} published, ${o} skipped.`)}function cx(){const n=f("bulkPubBtn");n&&(n.style.display="block")}async function lx(){if(!confirm("Scan community recipes and remove duplicates? (Keeps the oldest/original version of each duplicate.)"))return;const n=f("removeDupBtn");n&&(n.disabled=!0,n.textContent="Scanning…");try{const e=await ft();if(!e||e.length===0){S("No community recipes found."),n&&(n.disabled=!1,n.textContent="🧹 Remove duplicate community recipes");return}const t=d.hid||"",i=await Do(),s=l=>l.householdId?l.householdId===t:l.authorUid&&i.includes(l.authorUid),r={};for(const l of e){if(!s(l))continue;const u=(l.title||"").trim().toLowerCase();r[u]||(r[u]=[]),r[u].push(l)}const o=[];for(const l of Object.keys(r)){const u=r[l];if(!(u.length<=1)){u.sort((p,g)=>(p.createdAt||"").localeCompare(g.createdAt||""));for(let p=1;p<u.length;p++)o.push(u[p])}}if(o.length===0){S("No duplicate community recipes found."),n&&(n.disabled=!1,n.textContent="🧹 Remove duplicate community recipes");return}let c=0;for(const l of o)try{await pe(`public_recipes/${l.id}`),c++,n&&(n.textContent=`Removing ${c}/${o.length}…`)}catch(u){console.error("Failed to delete duplicate:",l.id,l.title,u)}d.comRecs=await ft(),S(`${c} duplicate recipe${c!==1?"s":""} removed.`)}catch(e){console.error("removeDuplicateCommunityRecipes error:",e),S("Error scanning for duplicates. Check console.")}n&&(n.disabled=!1,n.textContent="🧹 Remove duplicate community recipes")}async function ux(){var t;const n=(t=X())==null?void 0:t.uid;if(!n)return;const e=f("removeMyCommBtn");try{e&&(e.disabled=!0,e.textContent="Counting…");const s=(await ft()||[]).filter(o=>o.authorUid===n);if(s.length===0){S("You have no community recipes to remove."),e&&(e.disabled=!1,e.textContent="🗑️ Remove all my community recipes");return}if(e&&(e.disabled=!1,e.textContent="🗑️ Remove all my community recipes"),!confirm(`This will permanently remove ${s.length} community recipe${s.length!==1?"s":""} published under your username. This cannot be undone. Are you sure?`))return;e&&(e.disabled=!0,e.textContent="Removing…");let r=0;for(const o of s)try{await pe(`public_recipes/${o.id}`),r++,e&&(e.textContent=`Removing ${r}/${s.length}…`)}catch(c){console.error("Failed to delete community recipe:",o.id,o.title,c)}d.comRecs=await ft(),S(`${r} community recipe${r!==1?"s":""} removed.`)}catch(i){console.error("removeMyCommRecipes error:",i),S("Error removing community recipes. Check console.")}e&&(e.disabled=!1,e.textContent="🗑️ Remove all my community recipes")}async function dx(){var t;const n=(t=X())==null?void 0:t.uid;if(!n)return;const e=f("removeHHCommBtn");try{e&&(e.disabled=!0,e.textContent="Counting…");const i=await ft(),s=d.hid||"",r=await Do();console.log("[removeHHComm] Household ID:",s,"| Member UIDs:",r),console.log("[removeHHComm] Total public recipes fetched:",(i||[]).length);const o=p=>p.householdId?p.householdId===s:p.authorUid&&r.includes(p.authorUid),c=(i||[]).filter(o);if(console.log("[removeHHComm] Matched household recipes:",c.length,c.map(p=>({id:p.id,title:p.title,authorUid:p.authorUid,householdId:p.householdId}))),c.length===0){S("Your household has no community recipes to remove."),e&&(e.disabled=!1,e.textContent="🗑️ Remove all our community recipes");return}if(e&&(e.disabled=!1,e.textContent="🗑️ Remove all our community recipes"),!confirm(`This will permanently remove ${c.length} community recipe${c.length!==1?"s":""} published by your household. This cannot be undone. Are you sure?`))return;e&&(e.disabled=!0,e.textContent="Removing…");let l=0,u=0;for(const p of c)try{const g=`public_recipes/${p.id}`;p.authorUid===n?await pe(g):await hp(g),l++,console.log("[removeHHComm] Deleted:",p.id,p.title,"author:",p.authorUid),e&&(e.textContent=`Removing ${l}/${c.length}…`)}catch(g){u++,console.error("[removeHHComm] Failed to delete:",p.id,p.title,"author:",p.authorUid,g)}d.comRecs=await ft(),u>0?S(`${l} removed, ${u} failed. Check console.`):S(`${l} community recipe${l!==1?"s":""} removed.`)}catch(i){console.error("removeHouseholdCommRecipes error:",i),S("Error removing community recipes. Check console.")}e&&(e.disabled=!1,e.textContent="🗑️ Remove all our community recipes")}async function hx(){var l,u,p,g,w;const n=X();if(!n){S("Sign in first");return}const e=[...d.recs];let t=[];try{t=(await re("public_recipes")).filter(C=>C.authorUid===n.uid)}catch(I){console.error("Failed to load public recipes:",I)}const i=[...e,...t],s=i.length;if(!s){S("No recipes to process");return}if(!confirm(`Regenerate summaries for ${s} recipes using Claude AI? This will overwrite existing summaries.`))return;const r=f("regenSumProgress"),o=f("regenSumBtn");r&&(r.style.display="block",r.textContent=`Regenerating 0 of ${s}…`),o&&(o.disabled=!0);let c=0;for(let I=0;I<i.length;I++){const C=i[I],P=C.title||C.name||"Untitled",$=((l=C.ingredientsRaw)==null?void 0:l.join(", "))||C.ingredients||C.description||"",U=((u=C.stepsRaw)==null?void 0:u.join(". "))||C.steps||"";try{const D=((w=(g=(p=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:200,messages:[{role:"user",content:`Write a 2-sentence summary for this recipe. First sentence: what the dish is. Second sentence: what makes it special or notable. Max 200 characters total. Be concise.

Title: ${P}
Ingredients: ${$.substring(0,500)}
Instructions: ${U.substring(0,500)}`}]})})).json()).content)==null?void 0:p[0])==null?void 0:g.text)==null?void 0:w.trim())||"";if(D){if(t.some(j=>j.id===C.id))await z(`public_recipes/${C.id}`,{...C,summary:D,id:void 0});else{const j=`households/${d.hid}/recipes/${C.id}`;await z(j,{...C,summary:D,id:void 0});const b=d.recs.find(v=>v.id===C.id);b&&(b.summary=D)}c++}}catch(N){console.error("Summary regen failed for:",P,N)}r&&(r.textContent=`Regenerating ${I+1} of ${s}…`),await cy(300)}r&&(r.textContent=`Done — ${c} summaries updated.`),o&&(o.disabled=!1),S(`${c} summaries regenerated!`)}let dn=0;async function fx(){const n=X();if(n)try{const e=await G(`users/${n.uid}`);if(e!=null&&e.onboardingDone)return;px()}catch{}}function px(){const n=f("ov-onboarding");n&&(dn=0,n.classList.add("active"),ly())}function ly(){const n=f("onboarding-body");if(!n)return;const t=`<div style="display:flex;gap:6px;justify-content:center;margin-bottom:24px">${Array.from({length:4},(i,s)=>`<div style="width:8px;height:8px;border-radius:50%;background:${s===dn?"var(--ac)":"var(--b2)"};transition:background .2s"></div>`).join("")}</div>`;dn===0?n.innerHTML=`${t}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:4rem;margin-bottom:16px">🧺</div>
        <div style="font-family:'Fraunces',serif;font-size:2rem;font-weight:300;color:var(--ac);margin-bottom:12px">Welcome to Kitchen!</div>
        <p style="font-size:.92rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 28px">Your smart kitchen assistant that tracks inventory, plans meals, finds deals, and suggests recipes — all powered by AI.</p>
        <button class="btn bp bf" onclick="onboardNext()">Let's get started →</button>
      </div>`:dn===1?n.innerHTML=`${t}
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
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:16px">Continue →</button>`:dn===2?n.innerHTML=`${t}
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
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:20px">Almost done →</button>`:dn===3&&(n.innerHTML=`${t}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:3rem;margin-bottom:16px">🎉</div>
        <div style="font-family:'Fraunces',serif;font-size:1.6rem;font-weight:300;color:var(--ac);margin-bottom:12px">You're all set!</div>
        <p style="font-size:.88rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 24px">Start by adding your first item to the pantry, or ask Claude for dinner ideas.</p>
        <div style="display:flex;flex-direction:column;gap:10px">
          <button class="btn bp bf" onclick="finishOnboarding();showOv('scan')">📷 Scan your first item</button>
          <button class="btn bs bf" onclick="finishOnboarding();showScreen('chat')">✨ Ask Claude for ideas</button>
          <button class="btn bs bf" onclick="finishOnboarding()">🏠 Go to Home</button>
        </div>
      </div>`)}async function mx(){var n,e,t,i,s,r,o,c,l,u,p,g,w;if(dn===1){const I=(e=(n=f("ob-name"))==null?void 0:n.value)==null?void 0:e.trim(),C=(i=(t=f("ob-adults"))==null?void 0:t.value)==null?void 0:i.trim(),P=(r=(s=f("ob-kids"))==null?void 0:s.value)==null?void 0:r.trim(),$=(c=(o=f("ob-cuisines"))==null?void 0:o.value)==null?void 0:c.trim(),U=(l=f("ob-cooktime"))==null?void 0:l.value;I&&(d.cfg.name=I),C&&(d.cfg.adults=C),P&&(d.cfg.kids=P),$&&(d.cfg.cuisines=$),U&&(d.cfg.cookTime=U),d.cfg.nopork=((u=f("ob-nopork"))==null?void 0:u.checked)||!1,d.cfg.noshellfish=((p=f("ob-noshellfish"))==null?void 0:p.checked)||!1,d.cfg.vegetarian=((g=f("ob-vegetarian"))==null?void 0:g.checked)||!1,d.cfg.glutenfree=((w=f("ob-glutenfree"))==null?void 0:w.checked)||!1,await Ks()}dn++,ly()}async function uy(){const n=f("ov-onboarding");n&&n.classList.remove("active");const e=X();if(e)try{const t=await G(`users/${e.uid}`);t&&await z(`users/${e.uid}`,{...t,onboardingDone:!0,id:void 0})}catch{}}async function gx(){await uy(),S("You can always adjust settings later ⚙️")}window.getIdToken=dp;B.renderAll=Dl;B.renderSum=tr;B.renderRecs=Ze;B.renderShop=qi;dE(ir);window.showScreen=function(n){var e,t;document.querySelectorAll(".ov.active").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".screen").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".ni").forEach(i=>i.classList.remove("active")),(e=f("screen-"+n))==null||e.classList.add("active"),(t=f("nav-"+n))==null||t.classList.add("active"),n==="home"&&Nl(),n==="inventory"&&ir(),n==="recipes"&&(d.rt==="community"?tu():Ze()),n==="shopping"&&qi(),n==="insights"&&eA()};const yx=ct;window.showOv=function(n){yx(n),n==="settings"&&setTimeout(rx,80)};window.hideOv=ke;window.initHome=Ll;window.addLowToShop=wE;window.toggleHomeSection=hE;window.openRecipeMatch=TE;window.showMoreMatches=IE;window.toggleExp=function(){const n=f("exppanel");n.style.display=n.style.display==="none"?"block":"none"};window.openAdj=dk;window.updL=gk;window.adjQ=yk;window.adjQD=vk;window.adjE=wk;window.adjNote=_k;window.setIT=Vk;window.addManual=Uk;window.valMA=Fk;window.chgMQ=Hk;window.selML=Bk;window.remItem=mk;window.importDoc=jk;window.adjUnit=bk;window.adjLowThresh=Tk;window.adjLowThreshD=Ik;window.adjDoNotRestock=Ek;window.changeInvUnit=kk;window.changeInvThreshold=Sk;window.changeInvThresholdDirect=Ck;window.toggleDoNotRestock=Ak;window.changeInvLocation=xk;window.changeInvQty=Pk;window.changeInvQtyDirect=$k;window.changeInvFrac=Lk;window.changeInvThreshFrac=Rk;window.changeInvExpiry=Dk;window.clearInvExpiry=Nk;window.setInvExpiry=Mk;window.changeInvNote=Ok;window.openInvAddSheet=Wk;window.closeInvAddSheet=rr;window.invAddScan=Gk;window.invAddVoice=Kk;window.setInvAddLoc=Qk;window.toggleInvAddNote=Yk;window.qaddInv=Jk;window.onInvInput=Xk;window.pickInvInlineResult=iS;window.toggleInvVoice=dg;window.openInvItemDetail=sr;window.closeInvItemDetail=ug;window.deleteInvItemImage=hk;window.triggerInvPhotoUpload=fk;window.handleInvPhotoSelected=pk;window.addInvToShopping=rS;window.qadd=RE;window.togShop=GE;window.toggleShNote=KE;window.saveShNote=QE;window.openShQty=YE;window.adjShQty=JE;window.saveShQty=rg;window.togAisle=XE;window.setSHT=ZE;window.shareList=ek;window.openAddToKitchen=tk;window.setAtkLoc=nk;window.confirmAddToKitchen=ik;window.buildList=sk;window.toggleVoice=Xm;window.toggleAddNote=AE;window.openShopAddSheet=xE;window.closeShopAddSheet=nr;window.shopAddScan=PE;window.shopAddVoice=$E;window.closeEnrichSheet=ng;window.pickEnrichResult=WE;window.onShopInput=LE;window.pickInlineResult=tg;window.openItemDetail=ig;window.closeItemDetail=VE;window.changeShopUnit=UE;window.changeShopQty=FE;window.changeShopQtyDirect=HE;window.changeShopFrac=BE;window.deleteItemImage=jE;window.triggerProductPhotoUpload=zE;window.handleProductPhotoSelected=qE;window.bpTog=rk;window.bpSelAll=ok;window.bpUpdBtn=function(){};window.bpConfirm=ak;window._bpItems=[];window.searchDeals=ck;window.dealsFromList=lk;window.addDealToList=ag;window.renderDealsZipBanner=og;window.clrChk=function(){d.shop.filter(n=>n.checked).forEach(n=>{sg(n.name),Fi(n.id)})};window.setRT=YC;window.togFav=JC;window.valR=XC;window.importFromUrl=ZC;window.setImportMode=eR;window.startBulkImport=iR;window.retryBulkImport=cR;window.saveRec=uR;window.openER=Fg;window.updR=dR;window.delER=hR;window.scaleRec=fR;window.whatCanIMake=pR;window.addRecIngToShop=mR;window.setStar=gR;window.togTag=DC;window.recipeTimeChanged=$C;window.markTotalTimeManual=LC;window.selectDifficulty=Ng;window.togglePublic=vR;window.loadCommunity=tu;window.setComCuisine=$R;window.setComSearch=LR;window.setComSort=DR;window.toggleComTag=NR;window.setComTime=MR;window.setComMinRating=OR;window.openComRecipe=Io;window.likeComRecipe=HR;window.saveComToKitchen=BR;window.addComComment=jR;window.shareComRecipe=zR;window.submitComReview=VR;window.unpublishComRecipe=FR;window.rateComRecipe=Wg;window.clearComRating=UR;window.deleteComComment=GR;window.openReportSheet=YR;window.closeReportSheet=Gg;window.submitComReport=JR;window.loadMoreComments=WR;window.openNotifications=XR;window.openComRecipeFromNotif=ZR;window.openRecipeView=Ug;window.handleRecipeBack=ar;window.triggerCoverUpload=wR;window.handleCoverSelected=_R;window.handleCoverDrop=bR;window.removeCoverPhoto=TR;window.triggerStepPhotoUpload=IR;window.handleStepPhotoSelected=ER;window.removeStepPhoto=kR;window.openPhotoViewer=SR;window.closePhotoViewer=CR;window.photoViewerNav=Bg;window.triggerCommentPhotoUpload=AR;window.handleCommentPhotosSelected=xR;window.removeCommentPhoto=PR;window.setRecSearch=NC;window.setRecSort=MC;window.toggleFilterPanel=OC;window.setRecDifficulty=VC;window.setRecCookTime=UC;window.setRecServes=FC;window.toggleRecProtein=HC;window.toggleRecTag=BC;window.toggleRecTagsExpand=jC;window.clearRecFilters=zC;window.toggleComTagsPanel=WC;window.clearComFilters=GC;window.setViewStar=yR;window.editComRecipe=KR;window.saveComRecipeEdit=QR;window.sendChat=Qg;window.sendPill=oA;window.clrChat=aA;window.ar=Yg;window.importChatRecipe=rA;window.stopLiveScanner=su;window.resumeScanner=hA;window.openScanForList=fA;window.openScanForInventory=pA;window.addScannedToList=gA;window.toggleScanNote=mA;window.togManual=yA;window.manLookup=vA;window.selRL=ru;window.valAdd=_A;window.addToInv=bA;window.chgAQ=TA;window.swipeDelItem=kA;window.swipeAddItem=EA;window.swipeRowTap=SA;window.togShopSelect=CA;window.togInvSelect=RA;window.cancelSelect=Ni;window.deleteSelected=AA;window.openMealM=$A;window.pickRec=LA;window.closeMealM=ou;window.saveMeal=NA;window.clrMeal=MA;window.openCooked=OA;window.skipCooked=VA;window.saveCooked=UA;window.scheduleRecipe=FA;window.schedSet=HA;window.closeSchedM=DA;window.initRecChips=ny;window.toggleChip=PA;window.filterRecs=iy;window._pickedRec=null;window._activeChips=new Set;window.saveSettings=jA;window.saveZipcode=zA;window.toggleNotif=qA;window.testNotif=WA;window.addHousehold=ex;window.switchHousehold=tx;window.removeHousehold=nx;window.setMode=ix;window.showNotif=S;window.copyInviteCode=GA;window.shareInviteCode=KA;window.regenInviteCode=QA;window.removeMemberFromHH=YA;window.transferOwnershipUI=JA;window.leaveHousehold=ry;window.enrichExistingItems=ox;window.bulkPublishAll=ax;window.regenAllSummaries=hx;window.removeDuplicateCommunityRecipes=lx;window.removeMyCommRecipes=ux;window.removeHouseholdCommRecipes=dx;window.deleteAccount=ZA;window.manualRefresh=async function(n){const e=event==null?void 0:event.target;e&&(e.classList.add("spinning"),setTimeout(()=>e.classList.remove("spinning"),600)),ae("syncing");try{(n==="shop"||n==="both")&&(d.shop=await re(`households/${d.hid}/shopping`),qi()),(n==="inv"||n==="both")&&(d.inv=await re(`households/${d.hid}/inventory`),ir(),Dl()),ae("synced"),S("Refreshed ✓")}catch(t){console.error("manualRefresh error:",t),ae("error"),S("Refresh failed")}};window.refreshHomeData=async function(){const n=event==null?void 0:event.target;n&&(n.classList.add("spinning"),setTimeout(()=>n.classList.remove("spinning"),600)),ae("syncing");try{const[e,t,i,s]=await Promise.allSettled([re(`households/${d.hid}/inventory`),re(`households/${d.hid}/shopping`),re(`households/${d.hid}/mealplan`),re(`households/${d.hid}/settings`)]);e.status==="fulfilled"&&(d.inv=e.value),t.status==="fulfilled"&&(d.shop=t.value),i.status==="fulfilled"&&(d.mp={},i.value.forEach(r=>{r.meal&&(d.mp[r.id]=r.meal)})),Nl(),ir(),ae("synced"),S("Refreshed ✓")}catch(e){console.error("refreshHomeData error:",e),ae("error"),S("Refresh failed")}};window.refreshRecipes=async function(){const n=event==null?void 0:event.target;n&&(n.classList.add("spinning"),setTimeout(()=>n.classList.remove("spinning"),600)),ae("syncing");try{d.rt==="community"?(d.comRecs=await re("public_recipes"),d.comPage=0,lt()):(d.recs=await re(`households/${d.hid}/recipes`),Ze()),ae("synced"),S("Refreshed ✓")}catch(e){console.error("refreshRecipes error:",e),ae("error"),S("Refresh failed")}};window.onboardNext=mx;window.finishOnboarding=uy;window.skipOnboarding=gx;window.saveUsername=async function(){var o;const n=f("usernameInput"),e=f("usernameStatus"),t=f("saveUsernameBtn"),i=((n==null?void 0:n.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(i)){e&&(e.textContent="3-20 characters, letters, numbers, and underscores only.",e.style.color="var(--rd)",e.style.display="block");return}if(t&&(t.disabled=!0,t.textContent="Checking…"),!await ll(i)){e&&(e.textContent=`"${i}" is already taken. Try another.`,e.style.color="var(--rd)",e.style.display="block"),t&&(t.disabled=!1,t.textContent="Save");return}const r=X();r&&(await ul(r.uid,i),S("Username set to @"+i)),(o=f("usernameM"))==null||o.classList.remove("active"),t&&(t.disabled=!1,t.textContent="Save")};window.changeUsername=async function(){const n=f("setUsername"),e=((n==null?void 0:n.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(e)){S("3-20 chars, letters/numbers/underscores only");return}if(e===d.username){S("Username unchanged");return}if(!await ll(e)){S(`"${e}" is already taken`);return}const i=X();i&&(await ul(i.uid,e),S("Username changed to @"+e))};window._appStart=async function(n){d.hid=n;const e=X();if(e)try{const i=await G(`users/${e.uid}`);if((i==null?void 0:i.needsHousehold)===!0){S("You need to join or create a household"),localStorage.removeItem("ks-h"),localStorage.removeItem("ks-hhs"),location.reload();return}if(d.hid&&!await G(`households/${d.hid}`)){console.warn(`[_appStart] Household ${d.hid} no longer exists`),await z(`users/${e.uid}`,{...i,householdIds:[],needsHousehold:!0,onboardingDone:!1,id:void 0}),localStorage.removeItem("ks-h"),localStorage.removeItem("ks-hhs"),location.reload();return}}catch(i){console.warn("[_appStart] needsHousehold check failed:",i)}if(e&&!await sl(d.hid,e.uid)){XA();return}f("LS").style.display="none",f("APP").style.display="flex",window.showScreen("home"),ae("syncing");const t=X();if(t)try{const i=await G(`users/${t.uid}`),s=i!=null&&i.householdId?[i.householdId]:(i==null?void 0:i.householdIds)||[];if(s.length){const r=[...s];r.includes(n)||r.push(n),Oe("ks-hhs",r)}else{const r=le("ks-hhs")||[n];r.includes(n)||(r.push(n),Oe("ks-hhs",r))}}catch{const i=le("ks-hhs")||[n];i.includes(n)||(i.push(n),Oe("ks-hhs",i))}else{const i=le("ks-hhs")||[n];i.includes(n)||(i.push(n),Oe("ks-hhs",i))}await wp(),BA(),Ll(),CE(),sS(),uE(d.hid);try{ae("syncing");const i=await Promise.allSettled([re(`households/${d.hid}/inventory`),re(`households/${d.hid}/recipes`),re(`households/${d.hid}/shopping`)]),s=(r,o)=>r.status==="fulfilled"?r.value:o;d.inv=s(i[0],d.inv),d.recs=s(i[1],d.recs),d.shop=s(i[2],d.shop),ae("synced"),Dl(),Ze(),qi(),tr()}catch(i){console.error("initial load error",i),ae("error")}if(t){const i=await Sp(t.uid);d.username=i;const s=f("setUsername");s&&(s.value=i||""),i||setTimeout(()=>{var r;return(r=f("usernameM"))==null?void 0:r.classList.add("active")},600)}setTimeout(Kg,800),setTimeout(fx,500)};sx();IA();d.cfg.notif&&setTimeout(sy,3e3);qi();function Xo(n){f("auth-loading").style.display="none",f("auth-signin").style.display=n==="signin"?"flex":"none",f("auth-signup").style.display=n==="signup"?"flex":"none",f("auth-join").style.display=n==="join"?"flex":"none",f("authError").style.display="none",f("signupError").style.display="none"}function dt(n,e){const t=f(n);t&&(t.textContent=e,t.style.display="block")}function Zo(n){return{"auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password.","auth/invalid-credential":"Incorrect email or password.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password must be at least 6 characters.","auth/too-many-requests":"Too many attempts. Please try again later.","auth/popup-closed-by-user":"Sign-in popup was closed.","auth/cancelled-popup-request":"Sign-in was cancelled.","auth/account-exists-with-different-credential":"An account already exists with this email using a different sign-in method."}[n.code]||n.message||"Something went wrong. Please try again."}function tt(n,e){n&&(e?(n._origText=n.textContent,n.textContent="Please wait…",n.disabled=!0):(n.textContent=n._origText||n.textContent,n.disabled=!1))}var sf;(sf=f("btnGoogle"))==null||sf.addEventListener("click",async()=>{const n=f("btnGoogle");tt(n,!0),f("authError").style.display="none";try{await Gb()}catch(e){dt("authError",Zo(e))}tt(n,!1)});var rf;(rf=f("btnApple"))==null||rf.addEventListener("click",async()=>{const n=f("btnApple");tt(n,!0),f("authError").style.display="none";try{await Kb()}catch(e){dt("authError",Zo(e))}tt(n,!1)});var of;(of=f("btnEmailSign"))==null||of.addEventListener("click",async()=>{var i,s,r;const n=(s=(i=f("authEmail"))==null?void 0:i.value)==null?void 0:s.trim(),e=(r=f("authPass"))==null?void 0:r.value;if(!n||!e){dt("authError","Please enter your email and password.");return}const t=f("btnEmailSign");tt(t,!0),f("authError").style.display="none";try{await Qb(n,e)}catch(o){dt("authError",Zo(o))}tt(t,!1)});var af;(af=f("btnEmailSignup"))==null||af.addEventListener("click",async()=>{var s,r,o,c,l;const n=(r=(s=f("signupName"))==null?void 0:s.value)==null?void 0:r.trim(),e=(c=(o=f("signupEmail"))==null?void 0:o.value)==null?void 0:c.trim(),t=(l=f("signupPass"))==null?void 0:l.value;if(!n){dt("signupError","Please enter your name.");return}if(!e||!t){dt("signupError","Please enter your email and password.");return}const i=f("btnEmailSignup");tt(i,!0),f("signupError").style.display="none";try{await Yb(e,t,n)}catch(u){dt("signupError",Zo(u))}tt(i,!1)});var cf;(cf=f("btnToggleSignup"))==null||cf.addEventListener("click",()=>Xo("signup"));var lf;(lf=f("btnToggleSignin"))==null||lf.addEventListener("click",()=>Xo("signin"));var uf;(uf=f("authPass"))==null||uf.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=f("btnEmailSign"))==null||e.click())});var df;(df=f("signupPass"))==null||df.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=f("btnEmailSignup"))==null||e.click())});window.doSignOut=async function(){confirm("Sign out of Kitchen?")&&await Jb()};let Wa=!1;function eo(n){localStorage.setItem("ks-h",n),f("LS").style.display="none",f("APP").style.display="flex",window._appStart(n)}function Ga(n){Xo("join"),f("btnCreateKitchen").onclick=async()=>{var e;tt(f("btnCreateKitchen"),!0);try{const t=await G(`users/${n.uid}`),i=t!=null&&t.householdId?[t.householdId]:(t==null?void 0:t.householdIds)||[];if(i.length)for(const o of i){const c=await G(`households/${o}`);if(c&&(c.memberUids||[]).includes(n.uid)){console.log(`[_showJoinScreen] User already belongs to household ${o}, using that`),eo(o);return}}const s=((e=d.cfg)==null?void 0:e.name)||"My Kitchen";if(await el(n.uid,s),t)await z(`users/${n.uid}`,{...t,householdIds:[n.uid],needsHousehold:!1,id:void 0});else{const o=await fo(n);o.householdIds=[n.uid],o.needsHousehold=!1,await z(`users/${n.uid}`,o)}localStorage.removeItem("ks-h");const r=le("ks-hhs");if(r){const o=r.filter(c=>c!==n.uid);o.push(n.uid),localStorage.setItem("ks-hhs",JSON.stringify(o))}eo(n.uid)}catch(t){console.error("Create kitchen error:",t),dt("joinError","Something went wrong. Please try again."),tt(f("btnCreateKitchen"),!1)}},f("btnJoinKitchen").onclick=async()=>{var t,i,s;const e=(s=(i=(t=f("joinCode"))==null?void 0:t.value)==null?void 0:i.trim())==null?void 0:s.toUpperCase();if(!e){dt("joinError","Please enter an invite code.");return}tt(f("btnJoinKitchen"),!0),f("joinError").style.display="none";try{let r=await G(`users/${n.uid}`);r||(r=await fo(n));const o=await tl(e,n);if(!o){dt("joinError","Invalid invite code. Check and try again."),tt(f("btnJoinKitchen"),!1);return}const c=le("ks-hhs")||[];c.includes(o)||c.push(o),Oe("ks-hhs",c),eo(o)}catch(r){console.error("Join kitchen error:",r),dt("joinError","Something went wrong. Please try again."),tt(f("btnJoinKitchen"),!1)}}}qb(async n=>{var e;if(n){if(localStorage.setItem("ks-who",n.displayName||((e=n.email)==null?void 0:e.split("@")[0])||"You"),!Wa){Wa=!0;try{const t=await G(`users/${n.uid}`),i=localStorage.getItem("ks-h"),s=le("ks-hhs");if(!!t||!!i||s&&s.length>0){const o=await yp(n);o?(f("LS").style.display="none",f("APP").style.display="flex",eo(o)):(console.warn("[onAuth] resolveHousehold returned null — showing join screen"),Ga(n))}else Ga(n)}catch(t){console.error("Failed to resolve household:",t),console.warn("[onAuth] Error during household resolution — showing join screen"),Ga(n)}}}else Wm(),Wa=!1,f("APP").style.display="none",f("LS").style.display="flex",Xo("signin")});
