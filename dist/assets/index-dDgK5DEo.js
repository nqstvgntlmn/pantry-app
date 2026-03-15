(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const eo={name:"The Bora Family",adults:"Bora",kids:"1 toddler (age 3)",nopork:!0,noshellfish:!1,vegetarian:!1,glutenfree:!1,other:"",cuisines:"Bangladeshi, Turkish, Mediterranean, American",cookTime:"40-60 min",zipcode:""},u={hid:null,inv:[],recs:[],shop:[],mp:{},cfg:{...eo},cookLog:[],wasteLog:[],activity:[],chat:[],cp:null,selR:"fridge",maL:"fridge",adjId:null,it:"all",rt:"all",recSearch:"",recSort:"az",recFilters:{tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[]},md:null,cn:"",nr:0,eid:null,scanDestList:!1,aisleMode:!1,selectMode:null,selectedIds:new Set,username:null,comRecs:[],comTab:"browse",comSearch:"",comCuisine:"all",comSort:"newest",comTags:[],comTime:"any",comMinRating:0,comPage:0,myLikes:new Set};function le(n){try{return JSON.parse(localStorage.getItem(n))}catch{return null}}function Ne(n,e){localStorage.setItem(n,JSON.stringify(e))}const Mc=[{value:0,label:"None"},{value:.25,label:"¼"},{value:1/3,label:"⅓"},{value:.5,label:"½"},{value:2/3,label:"⅔"},{value:.75,label:"¾"}];function to(n){const e=Number(n)||0,t=Math.floor(e),i=e-t,s=Mc.reduce((r,o)=>Math.abs(o.value-i)<Math.abs(r-i)?o.value:r,0);return{whole:t,frac:s}}function In(n,e){const t=Math.max(0,Math.min(99,Math.floor(Number(n)||0))),i=Number(e)||0,s=t+i;return s<=0?.25:s}function ki(n){const{whole:e,frac:t}=to(n),i=t>0?(Mc.find(s=>Math.abs(s.value-t)<.01)||{}).label:"";return e===0&&i?i:e>0&&i?`${e} ${i}`:`${e||1}`}function Si(n,e){return`${ki(n)} ${e||"Unit"}`}function Ka(n,e){const t=Mc.map(i=>{const s=Math.abs(i.value-e)<.01?" selected":"";return`<option value="${i.value}"${s}>${i.label}</option>`}).join("");return`<select class="frac-select" id="${n}">${t}</select>`}function Re(n){return n?n.replace(/\w\S*/g,e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()):""}function f(n){return document.getElementById(n)}function pn(){return new Date().toISOString().split("T")[0]}function ko(){const n=new Date;n.setHours(0,0,0,0);const e=new Date(n);return e.setDate(n.getDate()-n.getDay()),Array.from({length:7},(t,i)=>{const s=new Date(e);return s.setDate(e.getDate()+i),s})}function _y(){const n=new Date;return n.setDate(n.getDate()+1),n.toISOString().split("T")[0]}function $t(n){if(!n)return null;const e=new Date;e.setHours(0,0,0,0);const t=new Date(n+"T00:00:00"),i=Math.round((t-e)/864e5);return i<0?{c:"expired",l:"Expired"}:i===0?{c:"expiring",l:"Expires today"}:i<=7?{c:"expiring",l:`Expires in ${i}d`}:{c:"ok",l:t.toLocaleDateString("en-US",{month:"short",day:"numeric"})}}function rf(n){return{fridge:"🌡 Fridge",freezer:"🧊 Freezer",pantry:"🥫 Pantry",household:"🏠 Household"}[n]||n}const of={Produce:"🥦",Proteins:"🍗",Dairy:"🧀",Grains:"🌾",Condiments:"🧴",Snacks:"🍿",Beverages:"🥤",Frozen:"❄️",General:"📦",Imported:"📥"};function Oi(n){const e=(n.name||"").toLowerCase(),t=(n.category||"").toLowerCase();return t.includes("produce")||t.includes("vegetable")||t.includes("fruit")||e.match(/apple|banana|broccoli|carrot|celery|cabbage|tomato|onion|garlic|jalap|spinach|mushroom|squash|lettuce|cucumber|pepper/)?"Produce":t.includes("protein")||t.includes("meat")||t.includes("seafood")||t.includes("poultry")||e.match(/chicken|beef|lamb|turkey|salmon|cod|tuna|fish|steak|pork|shrimp/)?"Proteins":t.includes("dairy")||t.includes("egg")||e.match(/egg|butter|cheese|milk|cream|yogurt|ghee/)?"Dairy":t.includes("grain")||t.includes("bread")||t.includes("pasta")||e.match(/rice|pasta|bread|flour|oat|cereal|grain|noodle|tortilla/)?"Grains":t.includes("condiment")||t.includes("sauce")||e.match(/sauce|ketchup|mustard|oil|vinegar|salt|pepper|spice|herb|seasoning|mayo/)?"Condiments":n.location==="freezer"?"Frozen":"General"}function by(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/^[-•]\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/\n/g,"<br>")}let Ia=null;function S(n,e=2500){const t=f("notif");t&&(t.textContent=n,t.style.display="block",t.style.animation="none",t.offsetWidth,t.style.animation=`fn ${e/1e3}s ease forwards`,Ia&&clearTimeout(Ia),Ia=setTimeout(()=>t.style.display="none",e))}function ct(n){var e;(e=f("ov-"+n))==null||e.classList.add("active")}function ge(n){var e;(e=f("ov-"+n))==null||e.classList.remove("active")}function Ps(n,e){const t=f(n);t&&t.querySelectorAll(".star").forEach((i,s)=>{i.textContent=s<e?"★":"☆",i.classList.toggle("on",s<e)})}function Oc(n){const e=n.toLowerCase();return/frozen|ice cream|pizza|nugget|waffle|tater|edamame|popsicle/.test(e)?"freezer":/milk|cheese|yogurt|butter|cream|egg|meat|chicken|beef|pork|fish|salmon|shrimp|tofu|deli|bacon|sausage|produce|lettuce|spinach|berry|berries|fruit|vegetable|carrot|broccoli|juice/.test(e)?"fridge":"pantry"}const Ty={Produce:["apple","banana","carrot","celery","onion","garlic","tomato","lettuce","cucumber","pepper","broccoli","spinach","mushroom","lemon","lime","herb","cabbage","squash","jalap","avocado","potato","ginger"],"Meat & Fish":["chicken","beef","lamb","turkey","salmon","cod","tuna","fish","steak","shrimp","pork","bacon","sausage","ground"],"Dairy & Eggs":["egg","butter","cheese","milk","cream","yogurt","ghee","kefir"],Frozen:["frozen","ice cream","pizza","nugget","waffle","edamame","okra","lima","broccoli floret"],Pantry:["rice","pasta","flour","oil","vinegar","sauce","spice","salt","pepper","sugar","honey","oat","bread","can","bean","lentil","chickpea","stock","broth"],"Snacks & Drinks":["chip","cracker","cookie","juice","soda","water","tea","coffee","snack","nut","seed"]};function Iy(n){const e=n.toLowerCase();for(const[t,i]of Object.entries(Ty))if(i.some(s=>e.includes(s)))return t;return"Other"}const Ey=()=>{};var sd={};/**
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
 */const af=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ky=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|c&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},cf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,d=l?n[s+2]:0,m=r>>2,g=(r&3)<<4|c>>4;let w=(c&15)<<2|d>>6,E=d&63;l||(E=64,o||(w=64)),i.push(t[m],t[g],t[w],t[E])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(af(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ky(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||c==null||d==null||g==null)throw new Sy;const w=r<<2|c>>4;if(i.push(w),d!==64){const E=c<<4&240|d>>2;if(i.push(E),g!==64){const A=d<<6&192|g;i.push(A)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Sy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cy=function(n){const e=af(n);return cf.encodeByteArray(e,!0)},no=function(n){return Cy(n).replace(/\./g,"")},lf=function(n){try{return cf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ry(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ay=()=>Ry().__FIREBASE_DEFAULTS__,xy=()=>{if(typeof process>"u"||typeof sd>"u")return;const n=sd.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Py=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&lf(n[1]);return e&&JSON.parse(e)},So=()=>{try{return Ey()||Ay()||xy()||Py()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},uf=n=>{var e,t;return(t=(e=So())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},df=n=>{const e=uf(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},hf=()=>{var n;return(n=So())==null?void 0:n.config},ff=n=>{var e;return(e=So())==null?void 0:e[`_${n}`]};/**
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
 */class $y{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Pn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Vc(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function pf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[no(JSON.stringify(t)),no(JSON.stringify(o)),""].join(".")}const _s={};function Ly(){const n={prod:[],emulator:[]};for(const e of Object.keys(_s))_s[e]?n.emulator.push(e):n.prod.push(e);return n}function Dy(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let rd=!1;function Uc(n,e){if(typeof window>"u"||typeof document>"u"||!Pn(window.location.host)||_s[n]===e||_s[n]||rd)return;_s[n]=e;function t(w){return`__firebase__banner__${w}`}const i="__firebase__banner",r=Ly().prod.length>0;function o(){const w=document.getElementById(i);w&&w.remove()}function c(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function l(w,E){w.setAttribute("width","24"),w.setAttribute("id",E),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function d(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{rd=!0,o()},w}function m(w,E){w.setAttribute("id",E),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function g(){const w=Dy(i),E=t("text"),A=document.getElementById(E)||document.createElement("span"),P=t("learnmore"),$=document.getElementById(P)||document.createElement("a"),U=t("preprendIcon"),N=document.getElementById(U)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const M=w.element;c(M),m($,P);const D=d();l(N,U),M.append(N,A,$,D),document.body.appendChild(M)}r?(A.innerText="Preview backend disconnected.",N.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,A.innerText="Preview backend running in this workspace."),A.setAttribute("id",E)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
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
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ny(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function My(){var e;const n=(e=So())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Oy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Vy(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Uy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fy(){const n=je();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Hy(){return!My()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function By(){try{return typeof indexedDB=="object"}catch{return!1}}function jy(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const zy="FirebaseError";class Mt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=zy,Object.setPrototypeOf(this,Mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hs.prototype.create)}}class Hs{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?qy(r,i):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Mt(s,c,i)}}function qy(n,e){return n.replace(Wy,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Wy=/\{\$([^}]+)}/g;function Gy(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Qn(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(od(r)&&od(o)){if(!Qn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function od(n){return n!==null&&typeof n=="object"}/**
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
 */function Bs(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function ps(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function ms(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Ky(n,e){const t=new Qy(n,e);return t.subscribe.bind(t)}class Qy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Yy(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Ea),s.error===void 0&&(s.error=Ea),s.complete===void 0&&(s.complete=Ea);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yy(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ea(){}/**
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
 */function Le(n){return n&&n._delegate?n._delegate:n}class En{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Un="[DEFAULT]";/**
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
 */class Jy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new $y;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zy(e))try{this.getOrInitializeService({instanceIdentifier:Un})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Un){return this.instances.has(e)}getOptions(e=Un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(r);i===c&&o.resolve(s)}return s}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Xy(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Un){return this.component?this.component.multipleInstances?e:Un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xy(n){return n===Un?void 0:n}function Zy(n){return n.instantiationMode==="EAGER"}/**
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
 */class ev{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Jy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ee||(ee={}));const tv={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},nv=ee.INFO,iv={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},sv=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=iv[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fc{constructor(e){this.name=e,this._logLevel=nv,this._logHandler=sv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const rv=(n,e)=>e.some(t=>n instanceof t);let ad,cd;function ov(){return ad||(ad=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function av(){return cd||(cd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mf=new WeakMap,Qa=new WeakMap,gf=new WeakMap,ka=new WeakMap,Hc=new WeakMap;function cv(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(yn(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&mf.set(t,n)}).catch(()=>{}),Hc.set(e,n),e}function lv(n){if(Qa.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Qa.set(n,e)}let Ya={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Qa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||gf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return yn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function uv(n){Ya=n(Ya)}function dv(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Sa(this),e,...t);return gf.set(i,e.sort?e.sort():[e]),yn(i)}:av().includes(n)?function(...e){return n.apply(Sa(this),e),yn(mf.get(this))}:function(...e){return yn(n.apply(Sa(this),e))}}function hv(n){return typeof n=="function"?dv(n):(n instanceof IDBTransaction&&lv(n),rv(n,ov())?new Proxy(n,Ya):n)}function yn(n){if(n instanceof IDBRequest)return cv(n);if(ka.has(n))return ka.get(n);const e=hv(n);return e!==n&&(ka.set(n,e),Hc.set(e,n)),e}const Sa=n=>Hc.get(n);function fv(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),c=yn(o);return i&&o.addEventListener("upgradeneeded",l=>{i(yn(o.result),l.oldVersion,l.newVersion,yn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const pv=["get","getKey","getAll","getAllKeys","count"],mv=["put","add","delete","clear"],Ca=new Map;function ld(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ca.get(e))return Ca.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=mv.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||pv.includes(t)))return;const r=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let d=l.store;return i&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&l.done]))[0]};return Ca.set(e,r),r}uv(n=>({...n,get:(e,t,i)=>ld(e,t)||n.get(e,t,i),has:(e,t)=>!!ld(e,t)||n.has(e,t)}));/**
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
 */class gv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(yv(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function yv(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ja="@firebase/app",ud="0.14.9";/**
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
 */const zt=new Fc("@firebase/app"),vv="@firebase/app-compat",wv="@firebase/analytics-compat",_v="@firebase/analytics",bv="@firebase/app-check-compat",Tv="@firebase/app-check",Iv="@firebase/auth",Ev="@firebase/auth-compat",kv="@firebase/database",Sv="@firebase/data-connect",Cv="@firebase/database-compat",Rv="@firebase/functions",Av="@firebase/functions-compat",xv="@firebase/installations",Pv="@firebase/installations-compat",$v="@firebase/messaging",Lv="@firebase/messaging-compat",Dv="@firebase/performance",Nv="@firebase/performance-compat",Mv="@firebase/remote-config",Ov="@firebase/remote-config-compat",Vv="@firebase/storage",Uv="@firebase/storage-compat",Fv="@firebase/firestore",Hv="@firebase/ai",Bv="@firebase/firestore-compat",jv="firebase",zv="12.10.0";/**
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
 */const Xa="[DEFAULT]",qv={[Ja]:"fire-core",[vv]:"fire-core-compat",[_v]:"fire-analytics",[wv]:"fire-analytics-compat",[Tv]:"fire-app-check",[bv]:"fire-app-check-compat",[Iv]:"fire-auth",[Ev]:"fire-auth-compat",[kv]:"fire-rtdb",[Sv]:"fire-data-connect",[Cv]:"fire-rtdb-compat",[Rv]:"fire-fn",[Av]:"fire-fn-compat",[xv]:"fire-iid",[Pv]:"fire-iid-compat",[$v]:"fire-fcm",[Lv]:"fire-fcm-compat",[Dv]:"fire-perf",[Nv]:"fire-perf-compat",[Mv]:"fire-rc",[Ov]:"fire-rc-compat",[Vv]:"fire-gcs",[Uv]:"fire-gcs-compat",[Fv]:"fire-fst",[Bv]:"fire-fst-compat",[Hv]:"fire-vertex","fire-js":"fire-js",[jv]:"fire-js-all"};/**
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
 */const io=new Map,Wv=new Map,Za=new Map;function dd(n,e){try{n.container.addComponent(e)}catch(t){zt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Yn(n){const e=n.name;if(Za.has(e))return zt.debug(`There were multiple attempts to register component ${e}.`),!1;Za.set(e,n);for(const t of io.values())dd(t,n);for(const t of Wv.values())dd(t,n);return!0}function Co(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ge(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Gv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vn=new Hs("app","Firebase",Gv);/**
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
 */class Kv{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new En("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vn.create("app-deleted",{appName:this._name})}}/**
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
 */const ni=zv;function yf(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:Xa,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw vn.create("bad-app-name",{appName:String(s)});if(t||(t=hf()),!t)throw vn.create("no-options");const r=io.get(s);if(r){if(Qn(t,r.options)&&Qn(i,r.config))return r;throw vn.create("duplicate-app",{appName:s})}const o=new ev(s);for(const l of Za.values())o.addComponent(l);const c=new Kv(t,i,o);return io.set(s,c),c}function Bc(n=Xa){const e=io.get(n);if(!e&&n===Xa&&hf())return yf();if(!e)throw vn.create("no-app",{appName:n});return e}function Ct(n,e,t){let i=qv[n]??n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),r=e.match(/\s|\//);if(s||r){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zt.warn(o.join(" "));return}Yn(new En(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Qv="firebase-heartbeat-database",Yv=1,$s="firebase-heartbeat-store";let Ra=null;function vf(){return Ra||(Ra=fv(Qv,Yv,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore($s)}catch(t){console.warn(t)}}}}).catch(n=>{throw vn.create("idb-open",{originalErrorMessage:n.message})})),Ra}async function Jv(n){try{const t=(await vf()).transaction($s),i=await t.objectStore($s).get(wf(n));return await t.done,i}catch(e){if(e instanceof Mt)zt.warn(e.message);else{const t=vn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zt.warn(t.message)}}}async function hd(n,e){try{const i=(await vf()).transaction($s,"readwrite");await i.objectStore($s).put(e,wf(n)),await i.done}catch(t){if(t instanceof Mt)zt.warn(t.message);else{const i=vn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});zt.warn(i.message)}}}function wf(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Xv=1024,Zv=30;class ew{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new nw(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=fd();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>Zv){const o=iw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){zt.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=fd(),{heartbeatsToSend:i,unsentEntries:s}=tw(this._heartbeatsCache.heartbeats),r=no(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return zt.warn(t),""}}}function fd(){return new Date().toISOString().substring(0,10)}function tw(n,e=Xv){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),pd(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),pd(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class nw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return By()?jy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Jv(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return hd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return hd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function pd(n){return no(JSON.stringify({version:2,heartbeats:n})).length}function iw(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function sw(n){Yn(new En("platform-logger",e=>new gv(e),"PRIVATE")),Yn(new En("heartbeat",e=>new ew(e),"PRIVATE")),Ct(Ja,ud,n),Ct(Ja,ud,"esm2020"),Ct("fire-js","")}sw("");var rw="firebase",ow="12.10.0";/**
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
 */Ct(rw,ow,"app");function _f(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aw=_f,bf=new Hs("auth","Firebase",_f());/**
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
 */const so=new Fc("@firebase/auth");function cw(n,...e){so.logLevel<=ee.WARN&&so.warn(`Auth (${ni}): ${n}`,...e)}function Mr(n,...e){so.logLevel<=ee.ERROR&&so.error(`Auth (${ni}): ${n}`,...e)}/**
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
 */function ot(n,...e){throw zc(n,...e)}function pt(n,...e){return zc(n,...e)}function jc(n,e,t){const i={...aw(),[e]:t};return new Hs("auth","Firebase",i).create(e,{appName:n.name})}function Rt(n){return jc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Tf(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&ot(n,"argument-error"),jc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zc(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return bf.create(n,...e)}function W(n,e,...t){if(!n)throw zc(e,...t)}function Ht(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Mr(e),new Error(e)}function qt(n,e){n||Ht(e)}/**
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
 */function ec(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function lw(){return md()==="http:"||md()==="https:"}function md(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function uw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lw()||Vy()||"connection"in navigator)?navigator.onLine:!0}function dw(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class js{constructor(e,t){this.shortDelay=e,this.longDelay=t,qt(t>e,"Short delay should be less than long delay!"),this.isMobile=Ny()||Uy()}get(){return uw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function qc(n,e){qt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class If{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const hw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const fw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],pw=new js(3e4,6e4);function $n(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Kt(n,e,t,i,s={}){return Ef(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const c=Bs({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:l,...r};return Oy()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Pn(n.emulatorConfig.host)&&(d.credentials="include"),If.fetch()(await kf(n,n.config.apiHost,t,c),d)})}async function Ef(n,e,t){n._canInitEmulator=!1;const i={...hw,...e};try{const s=new gw(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Tr(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const c=r.ok?o.errorMessage:o.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tr(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Tr(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Tr(n,"user-disabled",o);const m=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw jc(n,m,d);ot(n,m)}}catch(s){if(s instanceof Mt)throw s;ot(n,"network-request-failed",{message:String(s)})}}async function zs(n,e,t,i,s={}){const r=await Kt(n,e,t,i,s);return"mfaPendingCredential"in r&&ot(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function kf(n,e,t,i){const s=`${e}${t}?${i}`,r=n,o=r.config.emulator?qc(n.config,s):`${n.config.apiScheme}://${s}`;return fw.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function mw(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(pt(this.auth,"network-request-failed")),pw.get())})}}function Tr(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=pt(n,e,i);return s.customData._tokenResponse=t,s}function gd(n){return n!==void 0&&n.enterprise!==void 0}class yw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return mw(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function vw(n,e){return Kt(n,"GET","/v2/recaptchaConfig",$n(n,e))}/**
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
 */async function ww(n,e){return Kt(n,"POST","/v1/accounts:delete",e)}async function ro(n,e){return Kt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function bs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _w(n,e=!1){const t=Le(n),i=await t.getIdToken(e),s=Wc(i);W(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:bs(Aa(s.auth_time)),issuedAtTime:bs(Aa(s.iat)),expirationTime:bs(Aa(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Aa(n){return Number(n)*1e3}function Wc(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Mr("JWT malformed, contained fewer than 3 sections"),null;try{const s=lf(t);return s?JSON.parse(s):(Mr("Failed to decode base64 JWT payload"),null)}catch(s){return Mr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function yd(n){const e=Wc(n);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ci(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Mt&&bw(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function bw({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Tw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */async function oo(n){var g;const e=n.auth,t=await n.getIdToken(),i=await Ci(n,ro(e,{idToken:t}));W(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const r=(g=s.providerUserInfo)!=null&&g.length?Sf(s.providerUserInfo):[],o=Ew(n.providerData,r),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),d=c?l:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new tc(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,m)}async function Iw(n){const e=Le(n);await oo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ew(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Sf(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function kw(n,e){const t=await Ef(n,{},async()=>{const i=Bs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=await kf(n,s,"/v1/token",`key=${r}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:i};return n.emulatorConfig&&Pn(n.emulatorConfig.host)&&(l.credentials="include"),If.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Sw(n,e){return Kt(n,"POST","/v2/accounts:revokeToken",$n(n,e))}/**
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
 */class fi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){W(e.length!==0,"internal-error");const t=yd(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await kw(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new fi;return i&&(W(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(W(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(W(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fi,this.toJSON())}_performRefresh(){return Ht("not implemented")}}/**
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
 */function tn(n,e){W(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ht{constructor({uid:e,auth:t,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new Tw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new tc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Ci(this,this.stsTokenManager.getToken(this.auth,e));return W(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return _w(this,e)}reload(){return Iw(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ht({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await oo(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ge(this.auth.app))return Promise.reject(Rt(this.auth));const e=await this.getIdToken();return await Ci(this,ww(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,s=t.email??void 0,r=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,d=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:g,emailVerified:w,isAnonymous:E,providerData:A,stsTokenManager:P}=t;W(g&&P,e,"internal-error");const $=fi.fromJSON(this.name,P);W(typeof g=="string",e,"internal-error"),tn(i,e.name),tn(s,e.name),W(typeof w=="boolean",e,"internal-error"),W(typeof E=="boolean",e,"internal-error"),tn(r,e.name),tn(o,e.name),tn(c,e.name),tn(l,e.name),tn(d,e.name),tn(m,e.name);const U=new ht({uid:g,auth:e,email:s,emailVerified:w,displayName:i,isAnonymous:E,photoURL:o,phoneNumber:r,tenantId:c,stsTokenManager:$,createdAt:d,lastLoginAt:m});return A&&Array.isArray(A)&&(U.providerData=A.map(N=>({...N}))),l&&(U._redirectEventId=l),U}static async _fromIdTokenResponse(e,t,i=!1){const s=new fi;s.updateFromServerResponse(t);const r=new ht({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await oo(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];W(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Sf(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),c=new fi;c.updateFromIdToken(i);const l=new ht({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new tc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,d),l}}/**
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
 */const vd=new Map;function Bt(n){qt(n instanceof Function,"Expected a class definition");let e=vd.get(n);return e?(qt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,vd.set(n,e),e)}/**
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
 */class Cf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Cf.type="NONE";const wd=Cf;/**
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
 */function Or(n,e,t){return`firebase:${n}:${e}:${t}`}class pi{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Or(this.userKey,s.apiKey,r),this.fullPersistenceKey=Or("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ro(this.auth,{idToken:e}).catch(()=>{});return t?ht._fromGetAccountInfoResponse(this.auth,t,e):null}return ht._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new pi(Bt(wd),e,i);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let r=s[0]||Bt(wd);const o=Or(i,e.config.apiKey,e.name);let c=null;for(const d of t)try{const m=await d._get(o);if(m){let g;if(typeof m=="string"){const w=await ro(e,{idToken:m}).catch(()=>{});if(!w)break;g=await ht._fromGetAccountInfoResponse(e,w,m)}else g=ht._fromJSON(e,m);d!==r&&(c=g),r=d;break}}catch{}const l=s.filter(d=>d._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new pi(r,e,i):(r=l[0],c&&await r._set(o,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==r)try{await d._remove(o)}catch{}})),new pi(r,e,i))}}/**
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
 */function _d(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Pf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lf(e))return"Blackberry";if(Df(e))return"Webos";if(Af(e))return"Safari";if((e.includes("chrome/")||xf(e))&&!e.includes("edge/"))return"Chrome";if($f(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Rf(n=je()){return/firefox\//i.test(n)}function Af(n=je()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xf(n=je()){return/crios\//i.test(n)}function Pf(n=je()){return/iemobile/i.test(n)}function $f(n=je()){return/android/i.test(n)}function Lf(n=je()){return/blackberry/i.test(n)}function Df(n=je()){return/webos/i.test(n)}function Gc(n=je()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Cw(n=je()){var e;return Gc(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Rw(){return Fy()&&document.documentMode===10}function Nf(n=je()){return Gc(n)||$f(n)||Df(n)||Lf(n)||/windows phone/i.test(n)||Pf(n)}/**
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
 */function Mf(n,e=[]){let t;switch(n){case"Browser":t=_d(je());break;case"Worker":t=`${_d(je())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ni}/${i}`}/**
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
 */class Aw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,c)=>{try{const l=e(r);o(l)}catch(l){c(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function xw(n,e={}){return Kt(n,"GET","/v2/passwordPolicy",$n(n,e))}/**
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
 */const Pw=6;class $w{constructor(e){var i;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Pw,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class Lw{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bd(this),this.idTokenSubscription=new bd(this),this.beforeStateQueue=new Aw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Bt(t)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await pi.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ro(this,{idToken:e}),i=await ht._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(Ge(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await oo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ge(this.app))return Promise.reject(Rt(this));const t=e?Le(e):null;return t&&W(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ge(this.app)?Promise.reject(Rt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ge(this.app)?Promise.reject(Rt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Bt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xw(this),t=new $w(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Hs("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Sw(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Bt(e)||this._popupRedirectResolver;W(t,this,"argument-error"),this.redirectPersistenceManager=await pi.create(this,[Bt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(c,this,"internal-error"),c.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;if(Ge(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&cw(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ot(n){return Le(n)}class bd{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ky(t=>this.observer=t)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ro={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Dw(n){Ro=n}function Of(n){return Ro.loadJS(n)}function Nw(){return Ro.recaptchaEnterpriseScript}function Mw(){return Ro.gapiScript}function Ow(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Vw{constructor(){this.enterprise=new Uw}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Uw{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Fw="recaptcha-enterprise",Vf="NO_RECAPTCHA";class Hw{constructor(e){this.type=Fw,this.auth=Ot(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,c)=>{vw(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new yw(l);return r.tenantId==null?r._agentRecaptchaConfig=d:r._tenantRecaptchaConfigs[r.tenantId]=d,o(d.siteKey)}}).catch(l=>{c(l)})})}function s(r,o,c){const l=window.grecaptcha;gd(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(d=>{o(d)}).catch(()=>{o(Vf)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Vw().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(c=>{if(!t&&gd(window.grecaptcha))s(c,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Nw();l.length!==0&&(l+=c),Of(l).then(()=>{s(c,r,o)}).catch(d=>{o(d)})}}).catch(c=>{o(c)})})}}async function Td(n,e,t,i=!1,s=!1){const r=new Hw(n);let o;if(s)o=Vf;else try{o=await r.verify(t)}catch{o=await r.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return i?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function nc(n,e,t,i,s){var r;if((r=n._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Td(n,e,t,t==="getOobCode");return i(n,o)}else return i(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Td(n,e,t,t==="getOobCode");return i(n,c)}else return Promise.reject(o)})}/**
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
 */function Bw(n,e){const t=Co(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(Qn(r,e??{}))return s;ot(s,"already-initialized")}return t.initialize({options:e})}function jw(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Bt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function zw(n,e,t){const i=Ot(n);W(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=Uf(e),{host:o,port:c}=qw(e),l=c===null?"":`:${c}`,d={url:`${r}//${o}${l}/`},m=Object.freeze({host:o,port:c,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){W(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),W(Qn(d,i.config.emulator)&&Qn(m,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=d,i.emulatorConfig=m,i.settings.appVerificationDisabledForTesting=!0,Pn(o)?(Vc(`${r}//${o}${l}`),Uc("Auth",!0)):Ww()}function Uf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function qw(n){const e=Uf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Id(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Id(o)}}}function Id(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Ww(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Kc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ht("not implemented")}_getIdTokenResponse(e){return Ht("not implemented")}_linkToIdToken(e,t){return Ht("not implemented")}_getReauthenticationResolver(e){return Ht("not implemented")}}async function Gw(n,e){return Kt(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Kw(n,e){return zs(n,"POST","/v1/accounts:signInWithPassword",$n(n,e))}/**
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
 */async function Qw(n,e){return zs(n,"POST","/v1/accounts:signInWithEmailLink",$n(n,e))}async function Yw(n,e){return zs(n,"POST","/v1/accounts:signInWithEmailLink",$n(n,e))}/**
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
 */class Ls extends Kc{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Ls(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Ls(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nc(e,t,"signInWithPassword",Kw);case"emailLink":return Qw(e,{email:this._email,oobCode:this._password});default:ot(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nc(e,i,"signUpPassword",Gw);case"emailLink":return Yw(e,{idToken:t,email:this._email,oobCode:this._password});default:ot(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function mi(n,e){return zs(n,"POST","/v1/accounts:signInWithIdp",$n(n,e))}/**
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
 */const Jw="http://localhost";class Wt extends Kc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Wt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ot("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...r}=t;if(!i||!s)return null;const o=new Wt(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return mi(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,mi(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,mi(e,t)}buildRequest(){const e={requestUri:Jw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Bs(t)}return e}}/**
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
 */function Xw(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Zw(n){const e=ps(ms(n)).link,t=e?ps(ms(e)).deep_link_id:null,i=ps(ms(n)).deep_link_id;return(i?ps(ms(i)).link:null)||i||t||e||n}class Qc{constructor(e){const t=ps(ms(e)),i=t.apiKey??null,s=t.oobCode??null,r=Xw(t.mode??null);W(i&&s&&r,"argument-error"),this.apiKey=i,this.operation=r,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Zw(e);try{return new Qc(t)}catch{return null}}}/**
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
 */class Vi{constructor(){this.providerId=Vi.PROVIDER_ID}static credential(e,t){return Ls._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Qc.parseLink(t);return W(i,"argument-error"),Ls._fromEmailAndCode(e,i.code,i.tenantId)}}Vi.PROVIDER_ID="password";Vi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ao{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ui extends Ao{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ts extends Ui{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return W("providerId"in t&&"signInMethod"in t,"argument-error"),Wt._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return W(e.idToken||e.accessToken,"argument-error"),Wt._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Ts.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ts.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:r,nonce:o,providerId:c}=e;if(!i&&!s&&!t&&!r||!c)return null;try{return new Ts(c)._credential({idToken:t,accessToken:i,nonce:o,pendingToken:r})}catch{return null}}}/**
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
 */class ln extends Ui{constructor(){super("facebook.com")}static credential(e){return Wt._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ln.credential(e.oauthAccessToken)}catch{return null}}}ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";ln.PROVIDER_ID="facebook.com";/**
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
 */class Ft extends Ui{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Wt._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ft.credential(t,i)}catch{return null}}}Ft.GOOGLE_SIGN_IN_METHOD="google.com";Ft.PROVIDER_ID="google.com";/**
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
 */class un extends Ui{constructor(){super("github.com")}static credential(e){return Wt._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.GITHUB_SIGN_IN_METHOD="github.com";un.PROVIDER_ID="github.com";/**
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
 */class dn extends Ui{constructor(){super("twitter.com")}static credential(e,t){return Wt._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return dn.credential(t,i)}catch{return null}}}dn.TWITTER_SIGN_IN_METHOD="twitter.com";dn.PROVIDER_ID="twitter.com";/**
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
 */async function e_(n,e){return zs(n,"POST","/v1/accounts:signUp",$n(n,e))}/**
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
 */class Jn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await ht._fromIdTokenResponse(e,i,s),o=Ed(i);return new Jn({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Ed(i);return new Jn({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Ed(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class ao extends Mt{constructor(e,t,i,s){super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,ao.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new ao(e,t,i,s)}}function Ff(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ao._fromErrorAndOperation(n,r,e,i):r})}async function t_(n,e,t=!1){const i=await Ci(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Jn._forOperation(n,"link",i)}/**
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
 */async function n_(n,e,t=!1){const{auth:i}=n;if(Ge(i.app))return Promise.reject(Rt(i));const s="reauthenticate";try{const r=await Ci(n,Ff(i,s,e,n),t);W(r.idToken,i,"internal-error");const o=Wc(r.idToken);W(o,i,"internal-error");const{sub:c}=o;return W(n.uid===c,i,"user-mismatch"),Jn._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ot(i,"user-mismatch"),r}}/**
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
 */async function Hf(n,e,t=!1){if(Ge(n.app))return Promise.reject(Rt(n));const i="signIn",s=await Ff(n,i,e),r=await Jn._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function i_(n,e){return Hf(Ot(n),e)}/**
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
 */async function Bf(n){const e=Ot(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function s_(n,e,t){if(Ge(n.app))return Promise.reject(Rt(n));const i=Ot(n),o=await nc(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",e_).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Bf(n),l}),c=await Jn._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(c.user),c}function r_(n,e,t){return Ge(n.app)?Promise.reject(Rt(n)):i_(Le(n),Vi.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Bf(n),i})}/**
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
 */async function o_(n,e){return Kt(n,"POST","/v1/accounts:update",e)}/**
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
 */async function a_(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=Le(n),r={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Ci(i,o_(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const c=i.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function c_(n,e,t,i){return Le(n).onIdTokenChanged(e,t,i)}function l_(n,e,t){return Le(n).beforeAuthStateChanged(e,t)}function u_(n,e,t,i){return Le(n).onAuthStateChanged(e,t,i)}function d_(n){return Le(n).signOut()}const co="__sak";/**
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
 */class jf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(co,"1"),this.storage.removeItem(co),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const h_=1e3,f_=10;class zf extends jf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Nf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Rw()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,f_):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},h_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}zf.type="LOCAL";const p_=zf;/**
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
 */class qf extends jf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}qf.type="SESSION";const Wf=qf;/**
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
 */function m_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class xo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new xo(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const c=Array.from(o).map(async d=>d(t.origin,r)),l=await m_(c);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xo.receivers=[];/**
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
 */function Yc(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class g_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((c,l)=>{const d=Yc("",20);s.port1.start();const m=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(g){const w=g;if(w.data.eventId===d)switch(w.data.status){case"ack":clearTimeout(m),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),c(w.data.response);break;default:clearTimeout(m),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function At(){return window}function y_(n){At().location.href=n}/**
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
 */function Gf(){return typeof At().WorkerGlobalScope<"u"&&typeof At().importScripts=="function"}async function v_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function w_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function __(){return Gf()?self:null}/**
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
 */const Kf="firebaseLocalStorageDb",b_=1,lo="firebaseLocalStorage",Qf="fbase_key";class qs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Po(n,e){return n.transaction([lo],e?"readwrite":"readonly").objectStore(lo)}function T_(){const n=indexedDB.deleteDatabase(Kf);return new qs(n).toPromise()}function ic(){const n=indexedDB.open(Kf,b_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(lo,{keyPath:Qf})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(lo)?e(i):(i.close(),await T_(),e(await ic()))})})}async function kd(n,e,t){const i=Po(n,!0).put({[Qf]:e,value:t});return new qs(i).toPromise()}async function I_(n,e){const t=Po(n,!1).get(e),i=await new qs(t).toPromise();return i===void 0?null:i.value}function Sd(n,e){const t=Po(n,!0).delete(e);return new qs(t).toPromise()}const E_=800,k_=3;class Yf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ic(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>k_)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xo._getInstance(__()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await v_(),!this.activeServiceWorker)return;this.sender=new g_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||w_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ic();return await kd(e,co,"1"),await Sd(e,co),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>kd(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>I_(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Sd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Po(s,!1).getAll();return new qs(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),E_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yf.type="LOCAL";const S_=Yf;new js(3e4,6e4);/**
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
 */function Jc(n,e){return e?Bt(e):(W(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Xc extends Kc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return mi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return mi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function C_(n){return Hf(n.auth,new Xc(n),n.bypassAuthState)}function R_(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),n_(t,new Xc(n),n.bypassAuthState)}async function A_(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),t_(t,new Xc(n),n.bypassAuthState)}/**
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
 */class Jf{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return C_;case"linkViaPopup":case"linkViaRedirect":return A_;case"reauthViaPopup":case"reauthViaRedirect":return R_;default:ot(this.auth,"internal-error")}}resolve(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const x_=new js(2e3,1e4);async function Xf(n,e,t){if(Ge(n.app))return Promise.reject(pt(n,"operation-not-supported-in-this-environment"));const i=Ot(n);Tf(n,e,Ao);const s=Jc(i,t);return new Hn(i,"signInViaPopup",e,s).executeNotNull()}class Hn extends Jf{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Hn.currentPopupAction&&Hn.currentPopupAction.cancel(),Hn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){qt(this.filter.length===1,"Popup operations only handle one event");const e=Yc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)==null?void 0:t.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,x_.get())};e()}}Hn.currentPopupAction=null;/**
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
 */const P_="pendingRedirect",Vr=new Map;class $_ extends Jf{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Vr.get(this.auth._key());if(!e){try{const i=await L_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Vr.set(this.auth._key(),e)}return this.bypassAuthState||Vr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function L_(n,e){const t=ep(e),i=Zf(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}async function D_(n,e){return Zf(n)._set(ep(e),"true")}function N_(n,e){Vr.set(n._key(),e)}function Zf(n){return Bt(n._redirectPersistence)}function ep(n){return Or(P_,n.config.apiKey,n.name)}/**
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
 */function tp(n,e,t){return M_(n,e,t)}async function M_(n,e,t){if(Ge(n.app))return Promise.reject(Rt(n));const i=Ot(n);Tf(n,e,Ao),await i._initializationPromise;const s=Jc(i,t);return await D_(s,i),s._openRedirect(i,e,"signInViaRedirect")}async function O_(n,e){return await Ot(n)._initializationPromise,np(n,e,!1)}async function np(n,e,t=!1){if(Ge(n.app))return Promise.reject(Rt(n));const i=Ot(n),s=Jc(i,e),o=await new $_(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const V_=600*1e3;class U_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!F_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!ip(e)){const s=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";t.onError(pt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=V_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cd(e))}saveEventToCache(e){this.cachedEventUids.add(Cd(e)),this.lastProcessedEventTime=Date.now()}}function Cd(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ip({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function F_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ip(n);default:return!1}}/**
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
 */async function H_(n,e={}){return Kt(n,"GET","/v1/projects",e)}/**
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
 */const B_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,j_=/^https?/;async function z_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await H_(n);for(const t of e)try{if(q_(t))return}catch{}ot(n,"unauthorized-domain")}function q_(n){const e=ec(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!j_.test(t))return!1;if(B_.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const W_=new js(3e4,6e4);function Rd(){const n=At().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function G_(n){return new Promise((e,t)=>{var s,r,o;function i(){Rd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rd(),t(pt(n,"network-request-failed"))},timeout:W_.get()})}if((r=(s=At().gapi)==null?void 0:s.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=At().gapi)!=null&&o.load)i();else{const c=Ow("iframefcb");return At()[c]=()=>{gapi.load?i():t(pt(n,"network-request-failed"))},Of(`${Mw()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Ur=null,e})}let Ur=null;function K_(n){return Ur=Ur||G_(n),Ur}/**
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
 */const Q_=new js(5e3,15e3),Y_="__/auth/iframe",J_="emulator/auth/iframe",X_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Z_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eb(n){const e=n.config;W(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?qc(e,J_):`https://${n.config.authDomain}/${Y_}`,i={apiKey:e.apiKey,appName:n.name,v:ni},s=Z_.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Bs(i).slice(1)}`}async function tb(n){const e=await K_(n),t=At().gapi;return W(t,n,"internal-error"),e.open({where:document.body,url:eb(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:X_,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=pt(n,"network-request-failed"),c=At().setTimeout(()=>{r(o)},Q_.get());function l(){At().clearTimeout(c),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const nb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ib=500,sb=600,rb="_blank",ob="http://localhost";class Ad{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ab(n,e,t,i=ib,s=sb){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l={...nb,width:i.toString(),height:s.toString(),top:r,left:o},d=je().toLowerCase();t&&(c=xf(d)?rb:t),Rf(d)&&(e=e||ob,l.scrollbars="yes");const m=Object.entries(l).reduce((w,[E,A])=>`${w}${E}=${A},`,"");if(Cw(d)&&c!=="_self")return cb(e||"",c),new Ad(null);const g=window.open(e||"",c,m);W(g,n,"popup-blocked");try{g.focus()}catch{}return new Ad(g)}function cb(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const lb="__/auth/handler",ub="emulator/auth/handler",db=encodeURIComponent("fac");async function xd(n,e,t,i,s,r){W(n.config.authDomain,n,"auth-domain-config-required"),W(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:ni,eventId:s};if(e instanceof Ao){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Gy(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,g]of Object.entries({}))o[m]=g}if(e instanceof Ui){const m=e.getScopes().filter(g=>g!=="");m.length>0&&(o.scopes=m.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const l=await n._getAppCheckToken(),d=l?`#${db}=${encodeURIComponent(l)}`:"";return`${hb(n)}?${Bs(c).slice(1)}${d}`}function hb({config:n}){return n.emulator?qc(n,ub):`https://${n.authDomain}/${lb}`}/**
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
 */const xa="webStorageSupport";class fb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wf,this._completeRedirectFn=np,this._overrideRedirectResult=N_}async _openPopup(e,t,i,s){var o;qt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await xd(e,t,i,ec(),s);return ab(e,r,Yc())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await xd(e,t,i,ec(),s);return y_(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(qt(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await tb(e),i=new U_(e);return t.register("authEvent",s=>(W(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(xa,{type:xa},s=>{var o;const r=(o=s==null?void 0:s[0])==null?void 0:o[xa];r!==void 0&&t(!!r),ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=z_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Nf()||Af()||Gc()}}const pb=fb;var Pd="@firebase/auth",$d="1.12.1";/**
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
 */class mb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function gb(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yb(n){Yn(new En("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=i.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mf(n)},d=new Lw(i,s,r,l);return jw(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Yn(new En("auth-internal",e=>{const t=Ot(e.getProvider("auth").getImmediate());return(i=>new mb(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ct(Pd,$d,gb(n)),Ct(Pd,$d,"esm2020")}/**
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
 */const vb=300,wb=ff("authIdTokenMaxAge")||vb;let Ld=null;const _b=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>wb)return;const s=t==null?void 0:t.token;Ld!==s&&(Ld=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function bb(n=Bc()){const e=Co(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Bw(n,{popupRedirectResolver:pb,persistence:[S_,p_,Wf]}),i=ff("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=_b(r.toString());l_(t,o,()=>o(t.currentUser)),c_(t,c=>o(c))}}const s=uf("auth");return s&&zw(t,`http://${s}`),t}function Tb(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Dw({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=pt("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",Tb().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yb("Browser");const Ib={apiKey:"AIzaSyAFURz8fEGSTameAW5YvBKWpr2LXv9Ang0",authDomain:"family-pantry-c65d6.firebaseapp.com",projectId:"family-pantry-c65d6",storageBucket:"family-pantry-c65d6.firebasestorage.app",messagingSenderId:"710701847077",appId:"1:710701847077:web:407a8937330ad2ebcfe5cc"},Zc=yf(Ib),at=bb(Zc);window._firebaseAuth=at;const Dd=new Ft,uo=new Ts("apple.com");uo.addScope("email");uo.addScope("name");let el=null;const Fr=[];function Eb(n){return Fr.push(n),n(el),()=>{const e=Fr.indexOf(n);e!==-1&&Fr.splice(e,1)}}function kb(n){el=n,Fr.forEach(e=>e(n))}u_(at,n=>{kb(n||null)});O_(at).catch(n=>{n.code!=="auth/redirect-cancelled-by-user"&&console.error("Redirect sign-in error:",n)});async function Sb(){try{return(await Xf(at,Dd)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await tp(at,Dd),null;throw n}}async function Cb(){try{return(await Xf(at,uo)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await tp(at,uo),null;throw n}}async function Rb(n,e){return(await r_(at,n,e)).user}async function Ab(n,e,t){const i=await s_(at,n,e);return t&&await a_(i.user,{displayName:t}),i.user}async function xb(){await d_(at)}async function sp(){return at.currentUser?at.currentUser.getIdToken():null}function X(){return el}async function Ws(n,e,t){const i={"Content-Type":"application/json"},s=await sp();s&&(i.Authorization=`Bearer ${s}`);const r=await fetch("/api/db",{method:"POST",headers:i,body:JSON.stringify({op:n,path:e,data:t})});if(!(r.headers.get("content-type")||"").includes("application/json"))throw new Error(`/api/db non-JSON response (status ${r.status}) for ${n} ${e}`);return r.json()}async function re(n){try{return(await Ws("list",n)).docs||[]}catch(e){return console.warn("dbList:",n,e.message),[]}}async function z(n,e){return Ws("set",n,e)}async function ye(n){return Ws("delete",n)}async function Pb(n){return Ws("admin-delete",n)}async function G(n){try{return(await Ws("get",n)).doc||null}catch{return null}}function rp(){return Math.random().toString(36).slice(2,8).toUpperCase()}async function sc(n){var t;const e={name:n.displayName||((t=n.email)==null?void 0:t.split("@")[0])||"User",email:n.email||"",createdAt:new Date().toISOString(),householdIds:[]};return await z(`users/${n.uid}`,e),e}async function op(n,e){var o;const t=X(),i=n,s=rp(),r={name:e||"My Kitchen",ownerUid:n,members:[{uid:n,name:(t==null?void 0:t.displayName)||((o=t==null?void 0:t.email)==null?void 0:o.split("@")[0])||"Owner",role:"owner",joinedAt:new Date().toISOString()}],memberUids:[n],inviteCode:s,createdAt:new Date().toISOString()};try{await z(`households/${i}`,r),await z(`household_codes/${s}`,{householdId:i})}catch(c){console.error(`[createHousehold] FAILED to write households/${i}:`,c)}return{hid:i,...r}}async function $b(n){const e=await G(`household_codes/${n.toUpperCase()}`);return(e==null?void 0:e.householdId)||null}async function Lb(n,e){if(!Gs(e||{}).includes(n))return;const i=await G(`households/${n}`);if(!i){console.log(`[_cleanupGhostHousehold] Ghost doc ${n} already gone, removing from householdIds`);return}const s=(i.members||[]).length;if(s>1){console.log(`[_cleanupGhostHousehold] Household ${n} has ${s} members, skipping cleanup`);return}console.log(`[_cleanupGhostHousehold] Deleting ghost household ${n}`);try{await ye(`households/${n}`),i.inviteCode&&await ye(`household_codes/${i.inviteCode}`)}catch(r){console.warn("[_cleanupGhostHousehold] Failed to delete ghost:",r)}}async function ap(n,e){var c;const t=await $b(n);if(!t)return null;const i=await G(`households/${t}`);if(!i)return null;const s=i.members||[],r=i.memberUids||s.map(l=>l.uid);s.find(l=>l.uid===e.uid)||(s.push({uid:e.uid,name:e.displayName||((c=e.email)==null?void 0:c.split("@")[0])||"Member",role:"member",joinedAt:new Date().toISOString()}),r.includes(e.uid)||r.push(e.uid),await z(`households/${t}`,{...i,members:s,memberUids:r,id:void 0}));const o=await G(`users/${e.uid}`);if(o){await Lb(e.uid,o);const l={...o,householdIds:[t],needsHousehold:!1,onboardingDone:!0,id:void 0};o.householdId&&delete l.householdId,await z(`users/${e.uid}`,l)}return t}async function Db(n){const e=await G(`households/${n}`);if(!e)return null;if(e.inviteCode)try{await ye(`household_codes/${e.inviteCode}`)}catch{}const t=rp();return await z(`household_codes/${t}`,{householdId:n}),await z(`households/${n}`,{...e,inviteCode:t,id:void 0}),t}async function cp(n,e){const t=await G(`households/${n}`);if(!t)return;const i=(t.members||[]).filter(r=>r.uid!==e),s=(t.memberUids||[]).filter(r=>r!==e);await z(`households/${n}`,{...t,members:i,memberUids:s,id:void 0});try{const r=await G(`users/${e}`);if(r){const o={...r,householdIds:[],needsHousehold:!0,onboardingDone:!1,id:void 0};r.householdId&&delete o.householdId,await z(`users/${e}`,o)}}catch{}}async function Nb(n,e){const t=await G(`households/${n}`);if(!t)throw new Error("Household not found");const i=(t.members||[]).map(s=>({...s,role:s.uid===e?"owner":s.uid===t.ownerUid?"member":s.role}));await z(`households/${n}`,{...t,ownerUid:e,members:i,id:void 0})}async function lp(n,e){const t=await G(`households/${n}`);if(!t)return;const i=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog","activity"];for(const s of i)try{const r=await re(`households/${n}/${s}`);for(const o of r)await ye(`households/${n}/${s}/${o.id}`)}catch{}if(t.inviteCode)try{await ye(`household_codes/${t.inviteCode}`)}catch{}await ye(`households/${n}`);try{const s=await G(`users/${e}`);if(s){const o=Gs(s).filter(l=>l!==n),c={...s,householdIds:o,id:void 0};s.householdId&&delete c.householdId,await z(`users/${e}`,c)}}catch{}}async function up(n,e){try{const t=await G(`households/${n}`);return t?(t.memberUids||[]).includes(e):!1}catch{return!1}}async function Nd(n,e){const t=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog"];for(const i of t){const s=await re(`households/${n}/${i}`);for(const r of s){const o=r.id,c={...r};delete c.id,await z(`households/${e}/${i}/${o}`,c)}}}function Gs(n){return n.householdId&&typeof n.householdId=="string"?[n.householdId]:n.householdIds||[]}async function Mb(n,e){const t=Gs(e);if(!t.length)return null;console.log(`[_validateHouseholdIds] Checking ${t.length} household IDs:`,t);const i=await Promise.all(t.map(async c=>{const l=await G(`households/${c}`);if(!l)return console.log(`[_validateHouseholdIds] household ${c} does NOT exist — will remove`),{hid:c,exists:!1,isMember:!1};const d=(l.memberUids||[]).includes(n)||(l.members||[]).some(m=>m.uid===n);return console.log(`[_validateHouseholdIds] household ${c} exists, isMember=${d}`),{hid:c,exists:!0,isMember:d}})),s=i.filter(c=>c.exists).map(c=>c.hid),r=i.filter(c=>c.exists&&c.isMember).map(c=>c.hid),o=i.filter(c=>!c.exists).map(c=>c.hid);if(o.length>0){console.log(`[_validateHouseholdIds] Removing ${o.length} stale IDs:`,o);const c=t.filter(l=>!o.includes(l));await z(`users/${n}`,{...e,householdIds:c,id:void 0})}if(r.length>0){const l=r.find(d=>d!==n)||r[0];return console.log(`[_validateHouseholdIds] Resolved to member household: ${l}`),l}return s.length>0?(console.log(`[_validateHouseholdIds] Fallback to first valid household: ${s[0]}`),s[0]):(console.log("[_validateHouseholdIds] No valid households found"),null)}async function Ob(n){var d;const e=n.uid;console.log(`[resolveHousehold] ENTER — uid=${e}`);const t=localStorage.getItem("ks-h");t&&(console.log(`[resolveHousehold] Clearing stale cached ks-h="${t}"`),localStorage.removeItem("ks-h"));const i=await G(`users/${e}`);if(console.log("[resolveHousehold] userDoc=",i),i){if(i.needsHousehold===!0)return console.log("[resolveHousehold] User has needsHousehold=true — returning null to show join screen"),null;const m=await Mb(e,i),g=Gs(i);return console.log(`[resolveHousehold] RETURNING USER — resolved hid=${m}, ids=`,g),m?(t&&t!==m&&t!==e&&(console.log(`[resolveHousehold] LATE MIGRATION TRIGGERED: ${t} → ${m}`),await Nd(t,m)),m):g.length>0?(console.error(`[resolveHousehold] User has ${g.length} household IDs but NONE are valid. NOT creating a ghost. Returning null.`),null):(console.log("[resolveHousehold] Returning user with no household IDs — needs onboarding"),null)}console.log("[resolveHousehold] FIRST-TIME LOGIN — no userDoc found");const s=localStorage.getItem("ks-h"),r=s&&s!==e;console.log(`[resolveHousehold] FIRST-TIME — ks-h="${s}", hasOldData=${r}`);const o=((d=u.cfg)==null?void 0:d.name)||"My Kitchen";console.log(`[resolveHousehold] FIRST-TIME — creating household, cfgName="${o}"`),await op(e,r?o:"My Kitchen"),r&&(console.log(`[resolveHousehold] FIRST-TIME MIGRATION: ${s} → ${e}`),await Nd(s,e),console.log("[resolveHousehold] FIRST-TIME MIGRATION DONE"));const c=await sc(n);c.householdIds=[e],await z(`users/${e}`,c),console.log("[resolveHousehold] User profile created & saved"),localStorage.removeItem("ks-h");const l=le("ks-hhs");if(l){const m=l.filter(g=>g!==s);m.includes(e)||m.push(e),localStorage.setItem("ks-hhs",JSON.stringify(m))}return console.log(`[resolveHousehold] EXIT — returning uid=${e}`),e}async function Xn(n,e){e?(u.mp[n]=e,await z(`households/${u.hid}/mealplan/${n}`,{date:n,meal:e})):(delete u.mp[n],await ye(`households/${u.hid}/mealplan/${n}`))}async function $o(){await z(`households/${u.hid}/settings/config`,u.cfg)}async function dp(n,e){const t={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:e||rc(),loggedAt:new Date().toISOString()};u.cookLog.unshift(t),u.cookLog.length>200&&(u.cookLog=u.cookLog.slice(0,200)),await z(`households/${u.hid}/cooklog/${t.id}`,t)}async function Vb(n){if(u.wasteLog.find(t=>t.name===n&&t.date===rc()))return;const e={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:rc(),loggedAt:new Date().toISOString()};u.wasteLog.unshift(e),u.wasteLog.length>100&&(u.wasteLog=u.wasteLog.slice(0,100)),await z(`households/${u.hid}/wastelog/${e.id}`,e)}async function Ub(){try{try{const r=await G(`households/${u.hid}`);r&&r.inviteCode&&(await G(`household_codes/${r.inviteCode}`)||(await z(`household_codes/${r.inviteCode}`,{householdId:u.hid}),console.log(`[backfill] Created household_codes/${r.inviteCode} for household ${u.hid}`)))}catch(r){console.warn("[backfill] household_codes backfill skipped:",r.message)}const e=(await re(`households/${u.hid}/settings`)).find(r=>r.id==="config");if(e)u.cfg={...eo,...e};else{const r=le("ks-c");u.cfg={...eo,...r||{}},await $o(),r&&localStorage.removeItem("ks-c")}const t=await re(`households/${u.hid}/mealplan`);if(u.mp={},t.forEach(r=>{r.date&&r.meal&&(u.mp[r.date]=r.meal)}),!t.length){const r=le("ks-m");if(r&&Object.keys(r).length){u.mp=r;for(const[o,c]of Object.entries(r))await Xn(o,c);localStorage.removeItem("ks-m")}}const i=await re(`households/${u.hid}/cooklog`);if(i.length)u.cookLog=i.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=le("ks-cooklog");if(r&&r.length){u.cookLog=r.map((o,c)=>({id:o.id||(Date.now()-c).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of u.cookLog)await z(`households/${u.hid}/cooklog/${o.id}`,o);localStorage.removeItem("ks-cooklog")}}const s=await re(`households/${u.hid}/wastelog`);if(s.length)u.wasteLog=s.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=le("ks-waste");if(r&&r.length){u.wasteLog=r.map((o,c)=>({id:o.id||(Date.now()-c).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of u.wasteLog)await z(`households/${u.hid}/wastelog/${o.id}`,o);localStorage.removeItem("ks-waste")}}}catch(n){console.error("loadFirestoreData error:",n)}}let Is=0;function Fi(){Is++,Is===1&&window._pollIntervalId&&(clearInterval(window._pollIntervalId),window._pollIntervalId=null)}function Hi(){Is--,Is<=0&&(Is=0,window._pollFn&&!window._pollIntervalId&&(window._pollFn(),window._pollIntervalId=setInterval(window._pollFn,3e4)))}const j={renderAll:null,renderSum:null,renderRecs:null,renderShop:null};function ce(n){var i;const e=document.getElementById("sdot"),t=document.getElementById("slb");e&&(e.className="sdot "+n),t&&(t.textContent=n==="synced"?"🏠 "+(((i=u.cfg)==null?void 0:i.name)||u.hid):n==="syncing"?"Syncing…":"Sync error")}async function oe(n){var e,t;ce("syncing"),Fi();try{const i=!u.inv.find(s=>s.id===n.id);u.inv=[...u.inv.filter(s=>s.id!==n.id),n],(e=j.renderAll)==null||e.call(j),(t=j.renderSum)==null||t.call(j),await z(`households/${u.hid}/inventory/${n.id}`,n),i&&it("added",Re(n.name)+" to Supplies"),ce("synced")}catch(i){console.error(i),ce("error")}finally{Hi()}}async function Lo(n){var e,t;ce("syncing"),Fi();try{const i=u.inv.find(s=>s.id===n);u.inv=u.inv.filter(s=>s.id!==n),(e=j.renderAll)==null||e.call(j),(t=j.renderSum)==null||t.call(j),await ye(`households/${u.hid}/inventory/${n}`),i&&it("removed",Re(i.name)+" from Supplies"),ce("synced")}catch(i){console.error(i),ce("error")}finally{Hi()}}async function nt(n){var e,t;Fi();try{const i=!u.recs.find(r=>r.id===n.id);u.recs=[...u.recs.filter(r=>r.id!==n.id),n],(e=j.renderRecs)==null||e.call(j),(t=j.renderSum)==null||t.call(j),await z(`households/${u.hid}/recipes/${n.id}`,n);const s=Re(n.name||n.title||"a recipe");i?it("added",s+" to Recipes"):it("updated",s)}catch(i){console.error(i)}finally{Hi()}}async function Pa(n){var e,t;Fi();try{const i=u.recs.find(s=>s.id===n);u.recs=u.recs.filter(s=>s.id!==n),(e=j.renderRecs)==null||e.call(j),(t=j.renderSum)==null||t.call(j),await ye(`households/${u.hid}/recipes/${n}`),i&&it("deleted",Re(i.name||i.title||"a recipe")+" from Recipes")}catch(i){console.error(i)}finally{Hi()}}async function Ye(n){var e,t;Fi();try{const i=!u.shop.find(s=>s.id===n.id);u.shop=[...u.shop.filter(s=>s.id!==n.id),n],(e=j.renderShop)==null||e.call(j),(t=j.renderSum)==null||t.call(j),await z(`households/${u.hid}/shopping/${n.id}`,n),i&&it("added",Re(n.name)+" to Shopping List")}catch(i){console.error(i)}finally{Hi()}}async function Ks(n){var e,t;Fi();try{const i=u.shop.find(s=>s.id===n);u.shop=u.shop.filter(s=>s.id!==n),(e=j.renderShop)==null||e.call(j),(t=j.renderSum)==null||t.call(j),await ye(`households/${u.hid}/shopping/${n}`),i&&it("removed",Re(i.name)+" from Shopping List")}catch(i){console.error(i)}finally{Hi()}}async function tl(n,e){var s;const t="pub-"+Date.now()+"-"+Math.random().toString(36).slice(2,8),i={title:n.name,ingredients:n.description||"",steps:n.steps||"",tags:n.tags||[],cuisine:n.cuisine||"",sourceRecipeId:n.id||null,imageUrl:n.imageUrl||null,prepTime:n.prepTime||"",cookTime:n.cookTime||"",totalTime:n.totalTime||"",servings:n.servings||"",difficulty:n.difficulty||"",summary:n.summary||"",ingredientsRaw:n.ingredientsRaw||[],stepsRaw:n.stepsRaw||[],authorName:e||"Anonymous",authorUsername:u.username||"",authorUid:((s=X())==null?void 0:s.uid)||"",householdId:u.hid||"",createdAt:new Date().toISOString(),likes:0,commentCount:0,ratingSum:0,ratingCount:0,avgRating:0};return await z(`public_recipes/${t}`,i),{id:t,...i}}async function hp(n){var i;if(!((i=X())==null?void 0:i.uid))return null;const t=u.hid||"";if(n.publicId)try{const s=await fp(n.publicId);if(s)return s}catch{}try{u.comRecs=await Lt()}catch{}if(u.comRecs&&u.comRecs.length>0){const s=await il(),r=l=>l.householdId?l.householdId===t:l.authorUid&&s.includes(l.authorUid);if(n.id){const l=u.comRecs.find(d=>r(d)&&d.sourceRecipeId===n.id);if(l)return l}const o=(n.name||"").trim().toLowerCase(),c=u.comRecs.find(l=>r(l)&&(l.title||"").trim().toLowerCase()===o);if(c)return c}return null}async function nl(n){await ye(`public_recipes/${n}`)}async function Lt(){return re("public_recipes")}async function fp(n){return G(`public_recipes/${n}`)}async function Fb(n,e){var o;const t=(o=X())==null?void 0:o.uid;if(!t)return;const i=`public_recipes/${n}/likes/${t}`;e?await ye(i):await z(i,{likedAt:new Date().toISOString()});const s=await re(`public_recipes/${n}/likes`),r=await G(`public_recipes/${n}`);r&&await z(`public_recipes/${n}`,{...r,likes:s.length,id:void 0})}async function Hb(n,e,t){var c;const i=(c=X())==null?void 0:c.uid;if(!i||!e.trim())return;const s=e.trim().slice(0,500),r="cmt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),o={text:s,authorName:t,authorUsername:u.username||"",authorUid:i,createdAt:new Date().toISOString()};await z(`public_recipes/${n}/comments/${r}`,o);try{const l=await G(`public_recipes/${n}`);if(l){const d=await re(`public_recipes/${n}/comments`);await z(`public_recipes/${n}`,{...l,commentCount:d.length,id:void 0}),l.authorUid&&l.authorUid!==i&&await eT(l.authorUid,{type:"comment",recipeId:n,recipeName:l.title||"a recipe",commenterUsername:u.username||t||"Someone"})}}catch{}return{id:r,...o}}async function Bb(n){return re(`public_recipes/${n}/comments`)}async function jb(n){var i;const e=(i=X())==null?void 0:i.uid;return e?!!await G(`public_recipes/${n}/likes/${e}`):!1}async function zb(n){const t={id:"rec-"+Date.now(),name:n.title,description:n.ingredients||"",notes:n.steps||"",tags:n.tags||[],cuisine:n.cuisine||"",imageUrl:n.imageUrl||null,prepTime:n.prepTime||"",cookTime:n.cookTime||"",totalTime:n.totalTime||"",servings:n.servings||"",ingredientsRaw:n.ingredientsRaw||[],stepsRaw:n.stepsRaw||[],difficulty:n.difficulty||"",summary:n.summary||"",rating:0,favorited:!1,source:"Community",sourceUrl:null,cookCount:0,savedAt:new Date().toLocaleDateString()};return await nt(t),t}async function pp(n){return n?!await G(`usernames/${n.toLowerCase()}`):!1}async function mp(n,e){const t=await G(`users/${n}`),i=t==null?void 0:t.username;if(i&&i.toLowerCase()!==e.toLowerCase())try{await ye(`usernames/${i.toLowerCase()}`)}catch{}await z(`usernames/${e.toLowerCase()}`,{uid:n}),t&&await z(`users/${n}`,{...t,username:e,id:void 0}),u.username=e}async function qb(n){try{const e=await G(`users/${n}`);return(e==null?void 0:e.username)||null}catch{return null}}async function Wb(n){const e=await G(`users/${n}`);if(!e)return;try{const s=(await Lt()||[]).filter(r=>r.authorUid===n);for(const r of s)await z(`public_recipes/${r.id}`,{...r,authorName:"Deleted User",authorUsername:"deleted_user",id:void 0})}catch(i){console.warn(`[deleteAccountData] Failed to anonymize community recipes for ${n}:`,i)}const t=Gs(e);for(const i of t)try{const s=await G(`households/${i}`);if(!s)continue;const r=s.ownerUid===n,o=(s.members||[]).length;if(r&&o<=1)await lp(i,n);else if(!r){const c=(s.members||[]).filter(d=>d.uid!==n),l=(s.memberUids||[]).filter(d=>d!==n);await z(`households/${i}`,{...s,members:c,memberUids:l,id:void 0})}}catch(s){console.warn(`[deleteAccountData] Failed to clean up household ${i}:`,s)}if(e.username)try{await ye(`usernames/${e.username.toLowerCase()}`)}catch{}try{const i=await re(`users/${n}/notifications`);for(const s of i)await ye(`users/${n}/notifications/${s.id}`)}catch{}try{await ye(`users/${n}`)}catch{}}async function Gb(n){var t;const e=(t=X())==null?void 0:t.uid;return e?G(`public_recipes/${n}/reviews/${e}`):null}async function il(){if(!u.hid)return[];try{const n=await G(`households/${u.hid}`);return(n==null?void 0:n.memberUids)||[]}catch{return[]}}async function it(n,e){if(!u.hid||!e)return;const t=localStorage.getItem("ks-who")||"Someone",i="act-"+Date.now().toString(36)+Math.random().toString(36).slice(2),s={memberName:t,action:n,itemName:e,timestamp:new Date().toISOString()};try{await z(`households/${u.hid}/activity/${i}`,s),Kb()}catch{}}async function Kb(){try{const n=await re(`households/${u.hid}/activity`),e=Date.now()-10080*60*1e3;for(const t of n)t.timestamp&&new Date(t.timestamp).getTime()<e&&await ye(`households/${u.hid}/activity/${t.id}`)}catch{}}function rc(){return new Date().toISOString().split("T")[0]}async function Qb(n,e){var g;const t=(g=X())==null?void 0:g.uid;if(!t||!e||e<1||e>5)return null;const i=await G(`public_recipes/${n}`);if(i&&i.authorUid===t)return null;const s=new Date().toISOString(),r=await G(`public_recipes/${n}/ratings/${t}`),o={rating:e,createdAt:(r==null?void 0:r.createdAt)||s,updatedAt:s};await z(`public_recipes/${n}/ratings/${t}`,o);const c=await re(`public_recipes/${n}/ratings`),l=c.reduce((w,E)=>w+(E.rating||0),0),d=c.length,m=d>0?Math.round(l/d*10)/10:0;return i&&await z(`public_recipes/${n}`,{...i,ratingSum:l,ratingCount:d,avgRating:m,id:void 0}),{...o,ratingSum:l,ratingCount:d,avgRating:m}}async function Yb(n){var t;const e=(t=X())==null?void 0:t.uid;return e?G(`public_recipes/${n}/ratings/${e}`):null}async function Jb(n){var c;const e=(c=X())==null?void 0:c.uid;if(!e)return null;await ye(`public_recipes/${n}/ratings/${e}`);const t=await re(`public_recipes/${n}/ratings`),i=t.reduce((l,d)=>l+(d.rating||0),0),s=t.length,r=s>0?Math.round(i/s*10)/10:0,o=await G(`public_recipes/${n}`);return o&&await z(`public_recipes/${n}`,{...o,ratingSum:i,ratingCount:s,avgRating:r,id:void 0}),{ratingSum:i,ratingCount:s,avgRating:r}}async function Xb(n,e){await ye(`public_recipes/${n}/comments/${e}`);try{const t=await G(`public_recipes/${n}`);if(t){const i=await re(`public_recipes/${n}/comments`);await z(`public_recipes/${n}`,{...t,commentCount:i.length,id:void 0})}}catch{}}async function Zb(n,e,t,i){var d;const s=(d=X())==null?void 0:d.uid;if(!s)return null;if((await re("reports")).find(m=>m.reportedBy===s&&m.targetId===e&&m.type===n))return"duplicate";const c="rpt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),l={type:n,targetId:e,recipeId:i||e,reportedBy:s,reason:t,createdAt:new Date().toISOString(),status:"pending"};return await z(`reports/${c}`,l),{id:c,...l}}async function eT(n,e){if(!n)return;const t="ntf-"+Date.now().toString(36)+Math.random().toString(36).slice(2),i={...e,createdAt:new Date().toISOString(),read:!1};await z(`users/${n}/notifications/${t}`,i)}async function tT(){var t;const n=(t=X())==null?void 0:t.uid;return n?(await re(`users/${n}/notifications`)).sort((i,s)=>new Date(s.createdAt||0)-new Date(i.createdAt||0)):[]}async function nT(){var t;const n=(t=X())==null?void 0:t.uid;if(!n)return;const e=await re(`users/${n}/notifications`);for(const i of e)i.read||await z(`users/${n}/notifications/${i.id}`,{...i,read:!0,id:void 0})}async function iT(){var t;const n=(t=X())==null?void 0:t.uid;return n?(await re(`users/${n}/notifications`)).filter(i=>!i.read).length:0}var Md=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wn,gp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function _(){}_.prototype=v.prototype,b.F=v.prototype,b.prototype=new _,b.prototype.constructor=b,b.D=function(k,I,C){for(var T=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)T[Oe-2]=arguments[Oe];return v.prototype[I].apply(k,T)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,v,_){_||(_=0);const k=Array(16);if(typeof v=="string")for(var I=0;I<16;++I)k[I]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(I=0;I<16;++I)k[I]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=b.g[0],_=b.g[1],I=b.g[2];let C=b.g[3],T;T=v+(C^_&(I^C))+k[0]+3614090360&4294967295,v=_+(T<<7&4294967295|T>>>25),T=C+(I^v&(_^I))+k[1]+3905402710&4294967295,C=v+(T<<12&4294967295|T>>>20),T=I+(_^C&(v^_))+k[2]+606105819&4294967295,I=C+(T<<17&4294967295|T>>>15),T=_+(v^I&(C^v))+k[3]+3250441966&4294967295,_=I+(T<<22&4294967295|T>>>10),T=v+(C^_&(I^C))+k[4]+4118548399&4294967295,v=_+(T<<7&4294967295|T>>>25),T=C+(I^v&(_^I))+k[5]+1200080426&4294967295,C=v+(T<<12&4294967295|T>>>20),T=I+(_^C&(v^_))+k[6]+2821735955&4294967295,I=C+(T<<17&4294967295|T>>>15),T=_+(v^I&(C^v))+k[7]+4249261313&4294967295,_=I+(T<<22&4294967295|T>>>10),T=v+(C^_&(I^C))+k[8]+1770035416&4294967295,v=_+(T<<7&4294967295|T>>>25),T=C+(I^v&(_^I))+k[9]+2336552879&4294967295,C=v+(T<<12&4294967295|T>>>20),T=I+(_^C&(v^_))+k[10]+4294925233&4294967295,I=C+(T<<17&4294967295|T>>>15),T=_+(v^I&(C^v))+k[11]+2304563134&4294967295,_=I+(T<<22&4294967295|T>>>10),T=v+(C^_&(I^C))+k[12]+1804603682&4294967295,v=_+(T<<7&4294967295|T>>>25),T=C+(I^v&(_^I))+k[13]+4254626195&4294967295,C=v+(T<<12&4294967295|T>>>20),T=I+(_^C&(v^_))+k[14]+2792965006&4294967295,I=C+(T<<17&4294967295|T>>>15),T=_+(v^I&(C^v))+k[15]+1236535329&4294967295,_=I+(T<<22&4294967295|T>>>10),T=v+(I^C&(_^I))+k[1]+4129170786&4294967295,v=_+(T<<5&4294967295|T>>>27),T=C+(_^I&(v^_))+k[6]+3225465664&4294967295,C=v+(T<<9&4294967295|T>>>23),T=I+(v^_&(C^v))+k[11]+643717713&4294967295,I=C+(T<<14&4294967295|T>>>18),T=_+(C^v&(I^C))+k[0]+3921069994&4294967295,_=I+(T<<20&4294967295|T>>>12),T=v+(I^C&(_^I))+k[5]+3593408605&4294967295,v=_+(T<<5&4294967295|T>>>27),T=C+(_^I&(v^_))+k[10]+38016083&4294967295,C=v+(T<<9&4294967295|T>>>23),T=I+(v^_&(C^v))+k[15]+3634488961&4294967295,I=C+(T<<14&4294967295|T>>>18),T=_+(C^v&(I^C))+k[4]+3889429448&4294967295,_=I+(T<<20&4294967295|T>>>12),T=v+(I^C&(_^I))+k[9]+568446438&4294967295,v=_+(T<<5&4294967295|T>>>27),T=C+(_^I&(v^_))+k[14]+3275163606&4294967295,C=v+(T<<9&4294967295|T>>>23),T=I+(v^_&(C^v))+k[3]+4107603335&4294967295,I=C+(T<<14&4294967295|T>>>18),T=_+(C^v&(I^C))+k[8]+1163531501&4294967295,_=I+(T<<20&4294967295|T>>>12),T=v+(I^C&(_^I))+k[13]+2850285829&4294967295,v=_+(T<<5&4294967295|T>>>27),T=C+(_^I&(v^_))+k[2]+4243563512&4294967295,C=v+(T<<9&4294967295|T>>>23),T=I+(v^_&(C^v))+k[7]+1735328473&4294967295,I=C+(T<<14&4294967295|T>>>18),T=_+(C^v&(I^C))+k[12]+2368359562&4294967295,_=I+(T<<20&4294967295|T>>>12),T=v+(_^I^C)+k[5]+4294588738&4294967295,v=_+(T<<4&4294967295|T>>>28),T=C+(v^_^I)+k[8]+2272392833&4294967295,C=v+(T<<11&4294967295|T>>>21),T=I+(C^v^_)+k[11]+1839030562&4294967295,I=C+(T<<16&4294967295|T>>>16),T=_+(I^C^v)+k[14]+4259657740&4294967295,_=I+(T<<23&4294967295|T>>>9),T=v+(_^I^C)+k[1]+2763975236&4294967295,v=_+(T<<4&4294967295|T>>>28),T=C+(v^_^I)+k[4]+1272893353&4294967295,C=v+(T<<11&4294967295|T>>>21),T=I+(C^v^_)+k[7]+4139469664&4294967295,I=C+(T<<16&4294967295|T>>>16),T=_+(I^C^v)+k[10]+3200236656&4294967295,_=I+(T<<23&4294967295|T>>>9),T=v+(_^I^C)+k[13]+681279174&4294967295,v=_+(T<<4&4294967295|T>>>28),T=C+(v^_^I)+k[0]+3936430074&4294967295,C=v+(T<<11&4294967295|T>>>21),T=I+(C^v^_)+k[3]+3572445317&4294967295,I=C+(T<<16&4294967295|T>>>16),T=_+(I^C^v)+k[6]+76029189&4294967295,_=I+(T<<23&4294967295|T>>>9),T=v+(_^I^C)+k[9]+3654602809&4294967295,v=_+(T<<4&4294967295|T>>>28),T=C+(v^_^I)+k[12]+3873151461&4294967295,C=v+(T<<11&4294967295|T>>>21),T=I+(C^v^_)+k[15]+530742520&4294967295,I=C+(T<<16&4294967295|T>>>16),T=_+(I^C^v)+k[2]+3299628645&4294967295,_=I+(T<<23&4294967295|T>>>9),T=v+(I^(_|~C))+k[0]+4096336452&4294967295,v=_+(T<<6&4294967295|T>>>26),T=C+(_^(v|~I))+k[7]+1126891415&4294967295,C=v+(T<<10&4294967295|T>>>22),T=I+(v^(C|~_))+k[14]+2878612391&4294967295,I=C+(T<<15&4294967295|T>>>17),T=_+(C^(I|~v))+k[5]+4237533241&4294967295,_=I+(T<<21&4294967295|T>>>11),T=v+(I^(_|~C))+k[12]+1700485571&4294967295,v=_+(T<<6&4294967295|T>>>26),T=C+(_^(v|~I))+k[3]+2399980690&4294967295,C=v+(T<<10&4294967295|T>>>22),T=I+(v^(C|~_))+k[10]+4293915773&4294967295,I=C+(T<<15&4294967295|T>>>17),T=_+(C^(I|~v))+k[1]+2240044497&4294967295,_=I+(T<<21&4294967295|T>>>11),T=v+(I^(_|~C))+k[8]+1873313359&4294967295,v=_+(T<<6&4294967295|T>>>26),T=C+(_^(v|~I))+k[15]+4264355552&4294967295,C=v+(T<<10&4294967295|T>>>22),T=I+(v^(C|~_))+k[6]+2734768916&4294967295,I=C+(T<<15&4294967295|T>>>17),T=_+(C^(I|~v))+k[13]+1309151649&4294967295,_=I+(T<<21&4294967295|T>>>11),T=v+(I^(_|~C))+k[4]+4149444226&4294967295,v=_+(T<<6&4294967295|T>>>26),T=C+(_^(v|~I))+k[11]+3174756917&4294967295,C=v+(T<<10&4294967295|T>>>22),T=I+(v^(C|~_))+k[2]+718787259&4294967295,I=C+(T<<15&4294967295|T>>>17),T=_+(C^(I|~v))+k[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(I+(T<<21&4294967295|T>>>11))&4294967295,b.g[2]=b.g[2]+I&4294967295,b.g[3]=b.g[3]+C&4294967295}i.prototype.v=function(b,v){v===void 0&&(v=b.length);const _=v-this.blockSize,k=this.C;let I=this.h,C=0;for(;C<v;){if(I==0)for(;C<=_;)s(this,b,C),C+=this.blockSize;if(typeof b=="string"){for(;C<v;)if(k[I++]=b.charCodeAt(C++),I==this.blockSize){s(this,k),I=0;break}}else for(;C<v;)if(k[I++]=b[C++],I==this.blockSize){s(this,k),I=0;break}}this.h=I,this.o+=v},i.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;v=this.o*8;for(var _=b.length-8;_<b.length;++_)b[_]=v&255,v/=256;for(this.v(b),b=Array(16),v=0,_=0;_<4;++_)for(let k=0;k<32;k+=8)b[v++]=this.g[_]>>>k&255;return b};function r(b,v){var _=c;return Object.prototype.hasOwnProperty.call(_,b)?_[b]:_[b]=v(b)}function o(b,v){this.h=v;const _=[];let k=!0;for(let I=b.length-1;I>=0;I--){const C=b[I]|0;k&&C==v||(_[I]=C,k=!1)}this.g=_}var c={};function l(b){return-128<=b&&b<128?r(b,function(v){return new o([v|0],v<0?-1:0)}):new o([b|0],b<0?-1:0)}function d(b){if(isNaN(b)||!isFinite(b))return g;if(b<0)return $(d(-b));const v=[];let _=1;for(let k=0;b>=_;k++)v[k]=b/_|0,_*=4294967296;return new o(v,0)}function m(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return $(m(b.substring(1),v));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=d(Math.pow(v,8));let k=g;for(let C=0;C<b.length;C+=8){var I=Math.min(8,b.length-C);const T=parseInt(b.substring(C,C+I),v);I<8?(I=d(Math.pow(v,I)),k=k.j(I).add(d(T))):(k=k.j(_),k=k.add(d(T)))}return k}var g=l(0),w=l(1),E=l(16777216);n=o.prototype,n.m=function(){if(P(this))return-$(this).m();let b=0,v=1;for(let _=0;_<this.g.length;_++){const k=this.i(_);b+=(k>=0?k:4294967296+k)*v,v*=4294967296}return b},n.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(A(this))return"0";if(P(this))return"-"+$(this).toString(b);const v=d(Math.pow(b,6));var _=this;let k="";for(;;){const I=D(_,v).g;_=U(_,I.j(v));let C=((_.g.length>0?_.g[0]:_.h)>>>0).toString(b);if(_=I,A(_))return C+k;for(;C.length<6;)C="0"+C;k=C+k}},n.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function A(b){if(b.h!=0)return!1;for(let v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function P(b){return b.h==-1}n.l=function(b){return b=U(this,b),P(b)?-1:A(b)?0:1};function $(b){const v=b.g.length,_=[];for(let k=0;k<v;k++)_[k]=~b.g[k];return new o(_,~b.h).add(w)}n.abs=function(){return P(this)?$(this):this},n.add=function(b){const v=Math.max(this.g.length,b.g.length),_=[];let k=0;for(let I=0;I<=v;I++){let C=k+(this.i(I)&65535)+(b.i(I)&65535),T=(C>>>16)+(this.i(I)>>>16)+(b.i(I)>>>16);k=T>>>16,C&=65535,T&=65535,_[I]=T<<16|C}return new o(_,_[_.length-1]&-2147483648?-1:0)};function U(b,v){return b.add($(v))}n.j=function(b){if(A(this)||A(b))return g;if(P(this))return P(b)?$(this).j($(b)):$($(this).j(b));if(P(b))return $(this.j($(b)));if(this.l(E)<0&&b.l(E)<0)return d(this.m()*b.m());const v=this.g.length+b.g.length,_=[];for(var k=0;k<2*v;k++)_[k]=0;for(k=0;k<this.g.length;k++)for(let I=0;I<b.g.length;I++){const C=this.i(k)>>>16,T=this.i(k)&65535,Oe=b.i(I)>>>16,dt=b.i(I)&65535;_[2*k+2*I]+=T*dt,N(_,2*k+2*I),_[2*k+2*I+1]+=C*dt,N(_,2*k+2*I+1),_[2*k+2*I+1]+=T*Oe,N(_,2*k+2*I+1),_[2*k+2*I+2]+=C*Oe,N(_,2*k+2*I+2)}for(b=0;b<v;b++)_[b]=_[2*b+1]<<16|_[2*b];for(b=v;b<2*v;b++)_[b]=0;return new o(_,0)};function N(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function M(b,v){this.g=b,this.h=v}function D(b,v){if(A(v))throw Error("division by zero");if(A(b))return new M(g,g);if(P(b))return v=D($(b),v),new M($(v.g),$(v.h));if(P(v))return v=D(b,$(v)),new M($(v.g),v.h);if(b.g.length>30){if(P(b)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var _=w,k=v;k.l(b)<=0;)_=F(_),k=F(k);var I=B(_,1),C=B(k,1);for(k=B(k,2),_=B(_,2);!A(k);){var T=C.add(k);T.l(b)<=0&&(I=I.add(_),C=T),k=B(k,1),_=B(_,1)}return v=U(b,I.j(v)),new M(I,v)}for(I=g;b.l(v)>=0;){for(_=Math.max(1,Math.floor(b.m()/v.m())),k=Math.ceil(Math.log(_)/Math.LN2),k=k<=48?1:Math.pow(2,k-48),C=d(_),T=C.j(v);P(T)||T.l(b)>0;)_-=k,C=d(_),T=C.j(v);A(C)&&(C=w),I=I.add(C),b=U(b,T)}return new M(I,b)}n.B=function(b){return D(this,b).h},n.and=function(b){const v=Math.max(this.g.length,b.g.length),_=[];for(let k=0;k<v;k++)_[k]=this.i(k)&b.i(k);return new o(_,this.h&b.h)},n.or=function(b){const v=Math.max(this.g.length,b.g.length),_=[];for(let k=0;k<v;k++)_[k]=this.i(k)|b.i(k);return new o(_,this.h|b.h)},n.xor=function(b){const v=Math.max(this.g.length,b.g.length),_=[];for(let k=0;k<v;k++)_[k]=this.i(k)^b.i(k);return new o(_,this.h^b.h)};function F(b){const v=b.g.length+1,_=[];for(let k=0;k<v;k++)_[k]=b.i(k)<<1|b.i(k-1)>>>31;return new o(_,b.h)}function B(b,v){const _=v>>5;v%=32;const k=b.g.length-_,I=[];for(let C=0;C<k;C++)I[C]=v>0?b.i(C+_)>>>v|b.i(C+_+1)<<32-v:b.i(C+_);return new o(I,b.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,gp=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=m,wn=o}).apply(typeof Md<"u"?Md:typeof self<"u"?self:typeof window<"u"?window:{});var Ir=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yp,gs,vp,Hr,oc,wp,_p,bp;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ir=="object"&&Ir];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var i=t(this);function s(a,h){if(h)e:{var p=i;a=a.split(".");for(var y=0;y<a.length-1;y++){var R=a[y];if(!(R in p))break e;p=p[R]}a=a[a.length-1],y=p[a],h=h(y),h!=y&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var p=[],y;for(y in h)Object.prototype.hasOwnProperty.call(h,y)&&p.push([y,h[y]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function l(a,h,p){return a.call.apply(a.bind,arguments)}function d(a,h,p){return d=l,d.apply(null,arguments)}function m(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function g(a,h){function p(){}p.prototype=h.prototype,a.Z=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(y,R,x){for(var O=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)O[Z-2]=arguments[Z];return h.prototype[R].apply(y,O)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function E(a){const h=a.length;if(h>0){const p=Array(h);for(let y=0;y<h;y++)p[y]=a[y];return p}return[]}function A(a,h){for(let y=1;y<arguments.length;y++){const R=arguments[y];var p=typeof R;if(p=p!="object"?p:R?Array.isArray(R)?"array":p:"null",p=="array"||p=="object"&&typeof R.length=="number"){p=a.length||0;const x=R.length||0;a.length=p+x;for(let O=0;O<x;O++)a[p+O]=R[O]}else a.push(R)}}class P{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function $(a){o.setTimeout(()=>{throw a},0)}function U(){var a=b;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class N{constructor(){this.h=this.g=null}add(h,p){const y=M.get();y.set(h,p),this.h?this.h.next=y:this.g=y,this.h=y}}var M=new P(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let F,B=!1,b=new N,v=()=>{const a=Promise.resolve(void 0);F=()=>{a.then(_)}};function _(){for(var a;a=U();){try{a.h.call(a.g)}catch(p){$(p)}var h=M;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}B=!1}function k(){this.u=this.u,this.C=this.C}k.prototype.u=!1,k.prototype.dispose=function(){this.u||(this.u=!0,this.N())},k.prototype[Symbol.dispose]=function(){this.dispose()},k.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var C=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return a})();function T(a){return/^[\s\xa0]*$/.test(a)}function Oe(a,h){I.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}g(Oe,I),Oe.prototype.init=function(a,h){const p=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Oe.Z.h.call(this)},Oe.prototype.h=function(){Oe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var dt="closure_listenable_"+(Math.random()*1e6|0),ar=0;function he(a,h,p,y,R){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!y,this.ha=R,this.key=++ar,this.da=this.fa=!1}function mt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function cr(a,h,p){for(const y in a)h.call(p,a[y],y,a)}function zg(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function iu(a){const h={};for(const p in a)h[p]=a[p];return h}const su="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ru(a,h){let p,y;for(let R=1;R<arguments.length;R++){y=arguments[R];for(p in y)a[p]=y[p];for(let x=0;x<su.length;x++)p=su[x],Object.prototype.hasOwnProperty.call(y,p)&&(a[p]=y[p])}}function lr(a){this.src=a,this.g={},this.h=0}lr.prototype.add=function(a,h,p,y,R){const x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);const O=ea(a,h,y,R);return O>-1?(h=a[O],p||(h.fa=!1)):(h=new he(h,this.src,x,!!y,R),h.fa=p,a.push(h)),h};function Zo(a,h){const p=h.type;if(p in a.g){var y=a.g[p],R=Array.prototype.indexOf.call(y,h,void 0),x;(x=R>=0)&&Array.prototype.splice.call(y,R,1),x&&(mt(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function ea(a,h,p,y){for(let R=0;R<a.length;++R){const x=a[R];if(!x.da&&x.listener==h&&x.capture==!!p&&x.ha==y)return R}return-1}var ta="closure_lm_"+(Math.random()*1e6|0),na={};function ou(a,h,p,y,R){if(Array.isArray(h)){for(let x=0;x<h.length;x++)ou(a,h[x],p,y,R);return null}return p=lu(p),a&&a[dt]?a.J(h,p,c(y)?!!y.capture:!1,R):qg(a,h,p,!1,y,R)}function qg(a,h,p,y,R,x){if(!h)throw Error("Invalid event type");const O=c(R)?!!R.capture:!!R;let Z=sa(a);if(Z||(a[ta]=Z=new lr(a)),p=Z.add(h,p,y,O,x),p.proxy)return p;if(y=Wg(),p.proxy=y,y.src=a,y.listener=p,a.addEventListener)C||(R=O),R===void 0&&(R=!1),a.addEventListener(h.toString(),y,R);else if(a.attachEvent)a.attachEvent(cu(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Wg(){function a(p){return h.call(a.src,a.listener,p)}const h=Gg;return a}function au(a,h,p,y,R){if(Array.isArray(h))for(var x=0;x<h.length;x++)au(a,h[x],p,y,R);else y=c(y)?!!y.capture:!!y,p=lu(p),a&&a[dt]?(a=a.i,x=String(h).toString(),x in a.g&&(h=a.g[x],p=ea(h,p,y,R),p>-1&&(mt(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete a.g[x],a.h--)))):a&&(a=sa(a))&&(h=a.g[h.toString()],a=-1,h&&(a=ea(h,p,y,R)),(p=a>-1?h[a]:null)&&ia(p))}function ia(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[dt])Zo(h.i,a);else{var p=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(p,y,a.capture):h.detachEvent?h.detachEvent(cu(p),y):h.addListener&&h.removeListener&&h.removeListener(y),(p=sa(h))?(Zo(p,a),p.h==0&&(p.src=null,h[ta]=null)):mt(a)}}}function cu(a){return a in na?na[a]:na[a]="on"+a}function Gg(a,h){if(a.da)a=!0;else{h=new Oe(h,this);const p=a.listener,y=a.ha||a.src;a.fa&&ia(a),a=p.call(y,h)}return a}function sa(a){return a=a[ta],a instanceof lr?a:null}var ra="__closure_events_fn_"+(Math.random()*1e9>>>0);function lu(a){return typeof a=="function"?a:(a[ra]||(a[ra]=function(h){return a.handleEvent(h)}),a[ra])}function Ve(){k.call(this),this.i=new lr(this),this.M=this,this.G=null}g(Ve,k),Ve.prototype[dt]=!0,Ve.prototype.removeEventListener=function(a,h,p,y){au(this,a,h,p,y)};function ze(a,h){var p,y=a.G;if(y)for(p=[];y;y=y.G)p.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new I(h,a);else if(h instanceof I)h.target=h.target||a;else{var R=h;h=new I(y,a),ru(h,R)}R=!0;let x,O;if(p)for(O=p.length-1;O>=0;O--)x=h.g=p[O],R=ur(x,y,!0,h)&&R;if(x=h.g=a,R=ur(x,y,!0,h)&&R,R=ur(x,y,!1,h)&&R,p)for(O=0;O<p.length;O++)x=h.g=p[O],R=ur(x,y,!1,h)&&R}Ve.prototype.N=function(){if(Ve.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const p=a.g[h];for(let y=0;y<p.length;y++)mt(p[y]);delete a.g[h],a.h--}}this.G=null},Ve.prototype.J=function(a,h,p,y){return this.i.add(String(a),h,!1,p,y)},Ve.prototype.K=function(a,h,p,y){return this.i.add(String(a),h,!0,p,y)};function ur(a,h,p,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let R=!0;for(let x=0;x<h.length;++x){const O=h[x];if(O&&!O.da&&O.capture==p){const Z=O.listener,ke=O.ha||O.src;O.fa&&Zo(a.i,O),R=Z.call(ke,y)!==!1&&R}}return R&&!y.defaultPrevented}function Kg(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=d(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function uu(a){a.g=Kg(()=>{a.g=null,a.i&&(a.i=!1,uu(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Qg extends k{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:uu(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ki(a){k.call(this),this.h=a,this.g={}}g(Ki,k);var du=[];function hu(a){cr(a.g,function(h,p){this.g.hasOwnProperty(p)&&ia(h)},a),a.g={}}Ki.prototype.N=function(){Ki.Z.N.call(this),hu(this)},Ki.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var oa=o.JSON.stringify,Yg=o.JSON.parse,Jg=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function fu(){}function pu(){}var Qi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function aa(){I.call(this,"d")}g(aa,I);function ca(){I.call(this,"c")}g(ca,I);var Dn={},mu=null;function dr(){return mu=mu||new Ve}Dn.Ia="serverreachability";function gu(a){I.call(this,Dn.Ia,a)}g(gu,I);function Yi(a){const h=dr();ze(h,new gu(h))}Dn.STAT_EVENT="statevent";function yu(a,h){I.call(this,Dn.STAT_EVENT,a),this.stat=h}g(yu,I);function qe(a){const h=dr();ze(h,new yu(h,a))}Dn.Ja="timingevent";function vu(a,h){I.call(this,Dn.Ja,a),this.size=h}g(vu,I);function Ji(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Xi(){this.g=!0}Xi.prototype.ua=function(){this.g=!1};function Xg(a,h,p,y,R,x){a.info(function(){if(a.g)if(x){var O="",Z=x.split("&");for(let ae=0;ae<Z.length;ae++){var ke=Z[ae].split("=");if(ke.length>1){const Ae=ke[0];ke=ke[1];const yt=Ae.split("_");O=yt.length>=2&&yt[1]=="type"?O+(Ae+"="+ke+"&"):O+(Ae+"=redacted&")}}}else O=null;else O=x;return"XMLHTTP REQ ("+y+") [attempt "+R+"]: "+h+`
`+p+`
`+O})}function Zg(a,h,p,y,R,x,O){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+R+"]: "+h+`
`+p+`
`+x+" "+O})}function si(a,h,p,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+ty(a,p)+(y?" "+y:"")})}function ey(a,h){a.info(function(){return"TIMEOUT: "+h})}Xi.prototype.info=function(){};function ty(a,h){if(!a.g)return h;if(!h)return null;try{const x=JSON.parse(h);if(x){for(a=0;a<x.length;a++)if(Array.isArray(x[a])){var p=x[a];if(!(p.length<2)){var y=p[1];if(Array.isArray(y)&&!(y.length<1)){var R=y[0];if(R!="noop"&&R!="stop"&&R!="close")for(let O=1;O<y.length;O++)y[O]=""}}}}return oa(x)}catch{return h}}var hr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},wu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},_u;function la(){}g(la,fu),la.prototype.g=function(){return new XMLHttpRequest},_u=new la;function Zi(a){return encodeURIComponent(String(a))}function ny(a){var h=1;a=a.split(":");const p=[];for(;h>0&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function Qt(a,h,p,y){this.j=a,this.i=h,this.l=p,this.S=y||1,this.V=new Ki(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new bu}function bu(){this.i=null,this.g="",this.h=!1}var Tu={},ua={};function da(a,h,p){a.M=1,a.A=pr(gt(h)),a.u=p,a.R=!0,Iu(a,null)}function Iu(a,h){a.F=Date.now(),fr(a),a.B=gt(a.A);var p=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),Mu(p.i,"t",y),a.C=0,p=a.j.L,a.h=new bu,a.g=ed(a.j,p?h:null,!a.u),a.P>0&&(a.O=new Qg(d(a.Y,a,a.g),a.P)),h=a.V,p=a.g,y=a.ba;var R="readystatechange";Array.isArray(R)||(R&&(du[0]=R.toString()),R=du);for(let x=0;x<R.length;x++){const O=ou(p,R[x],y||h.handleEvent,!1,h.h||h);if(!O)break;h.g[O.key]=O}h=a.J?iu(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Yi(),Xg(a.i,a.v,a.B,a.l,a.S,a.u)}Qt.prototype.ba=function(a){a=a.target;const h=this.O;h&&Xt(a)==3?h.j():this.Y(a)},Qt.prototype.Y=function(a){try{if(a==this.g)e:{const Z=Xt(this.g),ke=this.g.ya(),ae=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||ju(this.g)))){this.K||Z!=4||ke==7||(ke==8||ae<=0?Yi(3):Yi(2)),ha(this);var h=this.g.ca();this.X=h;var p=iy(this);if(this.o=h==200,Zg(this.i,this.v,this.B,this.l,this.S,Z,h),this.o){if(this.U&&!this.L){t:{if(this.g){var y,R=this.g;if((y=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(y)){var x=y;break t}}x=null}if(a=x)si(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,fa(this,a);else{this.o=!1,this.m=3,qe(12),Nn(this),es(this);break e}}if(this.R){a=!0;let Ae;for(;!this.K&&this.C<p.length;)if(Ae=sy(this,p),Ae==ua){Z==4&&(this.m=4,qe(14),a=!1),si(this.i,this.l,null,"[Incomplete Response]");break}else if(Ae==Tu){this.m=4,qe(15),si(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else si(this.i,this.l,Ae,null),fa(this,Ae);if(Eu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||p.length!=0||this.h.h||(this.m=1,qe(16),a=!1),this.o=this.o&&a,!a)si(this.i,this.l,p,"[Invalid Chunked Response]"),Nn(this),es(this);else if(p.length>0&&!this.W){this.W=!0;var O=this.j;O.g==this&&O.aa&&!O.P&&(O.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),ba(O),O.P=!0,qe(11))}}else si(this.i,this.l,p,null),fa(this,p);Z==4&&Nn(this),this.o&&!this.K&&(Z==4?Yu(this.j,this):(this.o=!1,fr(this)))}else vy(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,qe(12)):(this.m=0,qe(13)),Nn(this),es(this)}}}catch{}finally{}};function iy(a){if(!Eu(a))return a.g.la();const h=ju(a.g);if(h==="")return"";let p="";const y=h.length,R=Xt(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Nn(a),es(a),"";a.h.i=new o.TextDecoder}for(let x=0;x<y;x++)a.h.h=!0,p+=a.h.i.decode(h[x],{stream:!(R&&x==y-1)});return h.length=0,a.h.g+=p,a.C=0,a.h.g}function Eu(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function sy(a,h){var p=a.C,y=h.indexOf(`
`,p);return y==-1?ua:(p=Number(h.substring(p,y)),isNaN(p)?Tu:(y+=1,y+p>h.length?ua:(h=h.slice(y,y+p),a.C=y+p,h)))}Qt.prototype.cancel=function(){this.K=!0,Nn(this)};function fr(a){a.T=Date.now()+a.H,ku(a,a.H)}function ku(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ji(d(a.aa,a),h)}function ha(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Qt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(ey(this.i,this.B),this.M!=2&&(Yi(),qe(17)),Nn(this),this.m=2,es(this)):ku(this,this.T-a)};function es(a){a.j.I==0||a.K||Yu(a.j,a)}function Nn(a){ha(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,hu(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function fa(a,h){try{var p=a.j;if(p.I!=0&&(p.g==a||pa(p.h,a))){if(!a.L&&pa(p.h,a)&&p.I==3){try{var y=p.Ba.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var R=y;if(R[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)wr(p),yr(p);else break e;_a(p),qe(18)}}else p.xa=R[1],0<p.xa-p.K&&R[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=Ji(d(p.Va,p),6e3));Ru(p.h)<=1&&p.ta&&(p.ta=void 0)}else On(p,11)}else if((a.L||p.g==a)&&wr(p),!T(h))for(R=p.Ba.g.parse(h),h=0;h<R.length;h++){let ae=R[h];const Ae=ae[0];if(!(Ae<=p.K))if(p.K=Ae,ae=ae[1],p.I==2)if(ae[0]=="c"){p.M=ae[1],p.ba=ae[2];const yt=ae[3];yt!=null&&(p.ka=yt,p.j.info("VER="+p.ka));const Vn=ae[4];Vn!=null&&(p.za=Vn,p.j.info("SVER="+p.za));const Zt=ae[5];Zt!=null&&typeof Zt=="number"&&Zt>0&&(y=1.5*Zt,p.O=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const en=a.g;if(en){const br=en.g?en.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(br){var x=y.h;x.g||br.indexOf("spdy")==-1&&br.indexOf("quic")==-1&&br.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(ma(x,x.h),x.h=null))}if(y.G){const Ta=en.g?en.g.getResponseHeader("X-HTTP-Session-Id"):null;Ta&&(y.wa=Ta,de(y.J,y.G,Ta))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),y=p;var O=a;if(y.na=Zu(y,y.L?y.ba:null,y.W),O.L){Au(y.h,O);var Z=O,ke=y.O;ke&&(Z.H=ke),Z.D&&(ha(Z),fr(Z)),y.g=O}else Ku(y);p.i.length>0&&vr(p)}else ae[0]!="stop"&&ae[0]!="close"||On(p,7);else p.I==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?On(p,7):wa(p):ae[0]!="noop"&&p.l&&p.l.qa(ae),p.A=0)}}Yi(4)}catch{}}var ry=class{constructor(a,h){this.g=a,this.map=h}};function Su(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Cu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ru(a){return a.h?1:a.g?a.g.size:0}function pa(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ma(a,h){a.g?a.g.add(h):a.h=h}function Au(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Su.prototype.cancel=function(){if(this.i=xu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function xu(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.G);return h}return E(a.i)}var Pu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function oy(a,h){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const y=a[p].indexOf("=");let R,x=null;y>=0?(R=a[p].substring(0,y),x=a[p].substring(y+1)):R=a[p],h(R,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Yt(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Yt?(this.l=a.l,ts(this,a.j),this.o=a.o,this.g=a.g,ns(this,a.u),this.h=a.h,ga(this,Ou(a.i)),this.m=a.m):a&&(h=String(a).match(Pu))?(this.l=!1,ts(this,h[1]||"",!0),this.o=is(h[2]||""),this.g=is(h[3]||"",!0),ns(this,h[4]),this.h=is(h[5]||"",!0),ga(this,h[6]||"",!0),this.m=is(h[7]||"")):(this.l=!1,this.i=new rs(null,this.l))}Yt.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(ss(h,$u,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ss(h,$u,!0),"@"),a.push(Zi(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(ss(p,p.charAt(0)=="/"?ly:cy,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",ss(p,dy)),a.join("")},Yt.prototype.resolve=function(a){const h=gt(this);let p=!!a.j;p?ts(h,a.j):p=!!a.o,p?h.o=a.o:p=!!a.g,p?h.g=a.g:p=a.u!=null;var y=a.h;if(p)ns(h,a.u);else if(p=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var R=h.h.lastIndexOf("/");R!=-1&&(y=h.h.slice(0,R+1)+y)}if(R=y,R==".."||R==".")y="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){y=R.lastIndexOf("/",0)==0,R=R.split("/");const x=[];for(let O=0;O<R.length;){const Z=R[O++];Z=="."?y&&O==R.length&&x.push(""):Z==".."?((x.length>1||x.length==1&&x[0]!="")&&x.pop(),y&&O==R.length&&x.push("")):(x.push(Z),y=!0)}y=x.join("/")}else y=R}return p?h.h=y:p=a.i.toString()!=="",p?ga(h,Ou(a.i)):p=!!a.m,p&&(h.m=a.m),h};function gt(a){return new Yt(a)}function ts(a,h,p){a.j=p?is(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ns(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function ga(a,h,p){h instanceof rs?(a.i=h,hy(a.i,a.l)):(p||(h=ss(h,uy)),a.i=new rs(h,a.l))}function de(a,h,p){a.i.set(h,p)}function pr(a){return de(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function is(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ss(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,ay),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ay(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var $u=/[#\/\?@]/g,cy=/[#\?:]/g,ly=/[#\?]/g,uy=/[#\?@]/g,dy=/#/g;function rs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Mn(a){a.g||(a.g=new Map,a.h=0,a.i&&oy(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}n=rs.prototype,n.add=function(a,h){Mn(this),this.i=null,a=ri(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function Lu(a,h){Mn(a),h=ri(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Du(a,h){return Mn(a),h=ri(a,h),a.g.has(h)}n.forEach=function(a,h){Mn(this),this.g.forEach(function(p,y){p.forEach(function(R){a.call(h,R,y,this)},this)},this)};function Nu(a,h){Mn(a);let p=[];if(typeof h=="string")Du(a,h)&&(p=p.concat(a.g.get(ri(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)p=p.concat(a[h]);return p}n.set=function(a,h){return Mn(this),this.i=null,a=ri(this,a),Du(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=Nu(this,a),a.length>0?String(a[0]):h):h};function Mu(a,h,p){Lu(a,h),p.length>0&&(a.i=null,a.g.set(ri(a,h),E(p)),a.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let y=0;y<h.length;y++){var p=h[y];const R=Zi(p);p=Nu(this,p);for(let x=0;x<p.length;x++){let O=R;p[x]!==""&&(O+="="+Zi(p[x])),a.push(O)}}return this.i=a.join("&")};function Ou(a){const h=new rs;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function ri(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function hy(a,h){h&&!a.j&&(Mn(a),a.i=null,a.g.forEach(function(p,y){const R=y.toLowerCase();y!=R&&(Lu(this,y),Mu(this,R,p))},a)),a.j=h}function fy(a,h){const p=new Xi;if(o.Image){const y=new Image;y.onload=m(Jt,p,"TestLoadImage: loaded",!0,h,y),y.onerror=m(Jt,p,"TestLoadImage: error",!1,h,y),y.onabort=m(Jt,p,"TestLoadImage: abort",!1,h,y),y.ontimeout=m(Jt,p,"TestLoadImage: timeout",!1,h,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function py(a,h){const p=new Xi,y=new AbortController,R=setTimeout(()=>{y.abort(),Jt(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(x=>{clearTimeout(R),x.ok?Jt(p,"TestPingServer: ok",!0,h):Jt(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(R),Jt(p,"TestPingServer: error",!1,h)})}function Jt(a,h,p,y,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),y(p)}catch{}}function my(){this.g=new Jg}function ya(a){this.i=a.Sb||null,this.h=a.ab||!1}g(ya,fu),ya.prototype.g=function(){return new mr(this.i,this.h)};function mr(a,h){Ve.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(mr,Ve),n=mr.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,as(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,os(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,as(this)),this.g&&(this.readyState=3,as(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Vu(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Vu(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?os(this):as(this),this.readyState==3&&Vu(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,os(this))},n.Na=function(a){this.g&&(this.response=a,os(this))},n.ga=function(){this.g&&os(this)};function os(a){a.readyState=4,a.l=null,a.j=null,a.B=null,as(a)}n.setRequestHeader=function(a,h){this.A.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function as(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(mr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Uu(a){let h="";return cr(a,function(p,y){h+=y,h+=":",h+=p,h+=`\r
`}),h}function va(a,h,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=Uu(p),typeof a=="string"?p!=null&&Zi(p):de(a,h,p))}function me(a){Ve.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(me,Ve);var gy=/^https?$/i,yy=["POST","PUT"];n=me.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,h,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():_u.g(),this.g.onreadystatechange=w(d(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(x){Fu(this,x);return}if(a=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var R in y)p.set(R,y[R]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const x of y.keys())p.set(x,y.get(x));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(x=>x.toLowerCase()=="content-type"),R=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(yy,h,void 0)>=0)||y||R||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,O]of p)this.g.setRequestHeader(x,O);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(x){Fu(this,x)}};function Fu(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Hu(a),gr(a)}function Hu(a){a.A||(a.A=!0,ze(a,"complete"),ze(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,ze(this,"complete"),ze(this,"abort"),gr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),gr(this,!0)),me.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Bu(this):this.Xa())},n.Xa=function(){Bu(this)};function Bu(a){if(a.h&&typeof r<"u"){if(a.v&&Xt(a)==4)setTimeout(a.Ca.bind(a),0);else if(ze(a,"readystatechange"),Xt(a)==4){a.h=!1;try{const x=a.ca();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var y;if(y=x===0){let O=String(a.D).match(Pu)[1]||null;!O&&o.self&&o.self.location&&(O=o.self.location.protocol.slice(0,-1)),y=!gy.test(O?O.toLowerCase():"")}p=y}if(p)ze(a,"complete"),ze(a,"success");else{a.o=6;try{var R=Xt(a)>2?a.g.statusText:""}catch{R=""}a.l=R+" ["+a.ca()+"]",Hu(a)}}finally{gr(a)}}}}function gr(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,h||ze(a,"ready");try{p.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Xt(a){return a.g?a.g.readyState:0}n.ca=function(){try{return Xt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Yg(h)}};function ju(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function vy(a){const h={};a=(a.g&&Xt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(T(a[y]))continue;var p=ny(a[y]);const R=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const x=h[R]||[];h[R]=x,x.push(p)}zg(h,function(y){return y.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function cs(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function zu(a){this.za=0,this.i=[],this.j=new Xi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=cs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=cs("baseRetryDelayMs",5e3,a),this.Za=cs("retryDelaySeedMs",1e4,a),this.Ta=cs("forwardChannelMaxRetries",2,a),this.va=cs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Su(a&&a.concurrentRequestLimit),this.Ba=new my,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=zu.prototype,n.ka=8,n.I=1,n.connect=function(a,h,p,y){qe(0),this.W=a,this.H=h||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.J=Zu(this,null,this.W),vr(this)};function wa(a){if(qu(a),a.I==3){var h=a.V++,p=gt(a.J);if(de(p,"SID",a.M),de(p,"RID",h),de(p,"TYPE","terminate"),ls(a,p),h=new Qt(a,a.j,h),h.M=2,h.A=pr(gt(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=ed(h.j,null),h.g.ea(h.A)),h.F=Date.now(),fr(h)}Xu(a)}function yr(a){a.g&&(ba(a),a.g.cancel(),a.g=null)}function qu(a){yr(a),a.v&&(o.clearTimeout(a.v),a.v=null),wr(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function vr(a){if(!Cu(a.h)&&!a.m){a.m=!0;var h=a.Ea;F||v(),B||(F(),B=!0),b.add(h,a),a.D=0}}function wy(a,h){return Ru(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ji(d(a.Ea,a,h),Ju(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const R=new Qt(this,this.j,a);let x=this.o;if(this.U&&(x?(x=iu(x),ru(x,this.U)):x=this.U),this.u!==null||this.R||(R.J=x,x=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Gu(this,R,h),p=gt(this.J),de(p,"RID",a),de(p,"CVER",22),this.G&&de(p,"X-HTTP-Session-Id",this.G),ls(this,p),x&&(this.R?h="headers="+Zi(Uu(x))+"&"+h:this.u&&va(p,this.u,x)),ma(this.h,R),this.Ra&&de(p,"TYPE","init"),this.S?(de(p,"$req",h),de(p,"SID","null"),R.U=!0,da(R,p,null)):da(R,p,h),this.I=2}}else this.I==3&&(a?Wu(this,a):this.i.length==0||Cu(this.h)||Wu(this))};function Wu(a,h){var p;h?p=h.l:p=a.V++;const y=gt(a.J);de(y,"SID",a.M),de(y,"RID",p),de(y,"AID",a.K),ls(a,y),a.u&&a.o&&va(y,a.u,a.o),p=new Qt(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Gu(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),ma(a.h,p),da(p,y,h)}function ls(a,h){a.H&&cr(a.H,function(p,y){de(h,y,p)}),a.l&&cr({},function(p,y){de(h,y,p)})}function Gu(a,h,p){p=Math.min(a.i.length,p);const y=a.l?d(a.l.Ka,a.l,a):null;e:{var R=a.i;let Z=-1;for(;;){const ke=["count="+p];Z==-1?p>0?(Z=R[0].g,ke.push("ofs="+Z)):Z=0:ke.push("ofs="+Z);let ae=!0;for(let Ae=0;Ae<p;Ae++){var x=R[Ae].g;const yt=R[Ae].map;if(x-=Z,x<0)Z=Math.max(0,R[Ae].g-100),ae=!1;else try{x="req"+x+"_"||"";try{var O=yt instanceof Map?yt:Object.entries(yt);for(const[Vn,Zt]of O){let en=Zt;c(Zt)&&(en=oa(Zt)),ke.push(x+Vn+"="+encodeURIComponent(en))}}catch(Vn){throw ke.push(x+"type="+encodeURIComponent("_badmap")),Vn}}catch{y&&y(yt)}}if(ae){O=ke.join("&");break e}}O=void 0}return a=a.i.splice(0,p),h.G=a,O}function Ku(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;F||v(),B||(F(),B=!0),b.add(h,a),a.A=0}}function _a(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ji(d(a.Da,a),Ju(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,Qu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ji(d(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,qe(10),yr(this),Qu(this))};function ba(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Qu(a){a.g=new Qt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=gt(a.na);de(h,"RID","rpc"),de(h,"SID",a.M),de(h,"AID",a.K),de(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&de(h,"TO",a.ia),de(h,"TYPE","xmlhttp"),ls(a,h),a.u&&a.o&&va(h,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=pr(gt(h)),p.u=null,p.R=!0,Iu(p,a)}n.Va=function(){this.C!=null&&(this.C=null,yr(this),_a(this),qe(19))};function wr(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Yu(a,h){var p=null;if(a.g==h){wr(a),ba(a),a.g=null;var y=2}else if(pa(a.h,h))p=h.G,Au(a.h,h),y=1;else return;if(a.I!=0){if(h.o)if(y==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var R=a.D;y=dr(),ze(y,new vu(y,p)),vr(a)}else Ku(a);else if(R=h.m,R==3||R==0&&h.X>0||!(y==1&&wy(a,h)||y==2&&_a(a)))switch(p&&p.length>0&&(h=a.h,h.i=h.i.concat(p)),R){case 1:On(a,5);break;case 4:On(a,10);break;case 3:On(a,6);break;default:On(a,2)}}}function Ju(a,h){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*h}function On(a,h){if(a.j.info("Error code "+h),h==2){var p=d(a.bb,a),y=a.Ua;const R=!y;y=new Yt(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ts(y,"https"),pr(y),R?fy(y.toString(),p):py(y.toString(),p)}else qe(2);a.I=0,a.l&&a.l.pa(h),Xu(a),qu(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),qe(2)):(this.j.info("Failed to ping google.com"),qe(1))};function Xu(a){if(a.I=0,a.ja=[],a.l){const h=xu(a.h);(h.length!=0||a.i.length!=0)&&(A(a.ja,h),A(a.ja,a.i),a.h.i.length=0,E(a.i),a.i.length=0),a.l.oa()}}function Zu(a,h,p){var y=p instanceof Yt?gt(p):new Yt(p);if(y.g!="")h&&(y.g=h+"."+y.g),ns(y,y.u);else{var R=o.location;y=R.protocol,h=h?h+"."+R.hostname:R.hostname,R=+R.port;const x=new Yt(null);y&&ts(x,y),h&&(x.g=h),R&&ns(x,R),p&&(x.h=p),y=x}return p=a.G,h=a.wa,p&&h&&de(y,p,h),de(y,"VER",a.ka),ls(a,y),y}function ed(a,h,p){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new me(new ya({ab:p})):new me(a.ma),h.Fa(a.L),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function td(){}n=td.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function _r(){}_r.prototype.g=function(a,h){return new Xe(a,h)};function Xe(a,h){Ve.call(this),this.g=new zu(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!T(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!T(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new oi(this)}g(Xe,Ve),Xe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Xe.prototype.close=function(){wa(this.g)},Xe.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=oa(a),a=p);h.i.push(new ry(h.Ya++,a)),h.I==3&&vr(h)},Xe.prototype.N=function(){this.g.l=null,delete this.j,wa(this.g),delete this.g,Xe.Z.N.call(this)};function nd(a){aa.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}g(nd,aa);function id(){ca.call(this),this.status=1}g(id,ca);function oi(a){this.g=a}g(oi,td),oi.prototype.ra=function(){ze(this.g,"a")},oi.prototype.qa=function(a){ze(this.g,new nd(a))},oi.prototype.pa=function(a){ze(this.g,new id)},oi.prototype.oa=function(){ze(this.g,"b")},_r.prototype.createWebChannel=_r.prototype.g,Xe.prototype.send=Xe.prototype.o,Xe.prototype.open=Xe.prototype.m,Xe.prototype.close=Xe.prototype.close,bp=function(){return new _r},_p=function(){return dr()},wp=Dn,oc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},hr.NO_ERROR=0,hr.TIMEOUT=8,hr.HTTP_ERROR=6,Hr=hr,wu.COMPLETE="complete",vp=wu,pu.EventType=Qi,Qi.OPEN="a",Qi.CLOSE="b",Qi.ERROR="c",Qi.MESSAGE="d",Ve.prototype.listen=Ve.prototype.J,gs=pu,me.prototype.listenOnce=me.prototype.K,me.prototype.getLastError=me.prototype.Ha,me.prototype.getLastErrorCode=me.prototype.ya,me.prototype.getStatus=me.prototype.ca,me.prototype.getResponseJson=me.prototype.La,me.prototype.getResponseText=me.prototype.la,me.prototype.send=me.prototype.ea,me.prototype.setWithCredentials=me.prototype.Fa,yp=me}).apply(typeof Ir<"u"?Ir:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let Bi="12.10.0";function sT(n){Bi=n}/**
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
 */const Zn=new Fc("@firebase/firestore");function ci(){return Zn.logLevel}function H(n,...e){if(Zn.logLevel<=ee.DEBUG){const t=e.map(sl);Zn.debug(`Firestore (${Bi}): ${n}`,...t)}}function Gt(n,...e){if(Zn.logLevel<=ee.ERROR){const t=e.map(sl);Zn.error(`Firestore (${Bi}): ${n}`,...t)}}function ei(n,...e){if(Zn.logLevel<=ee.WARN){const t=e.map(sl);Zn.warn(`Firestore (${Bi}): ${n}`,...t)}}function sl(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function J(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Tp(n,i,t)}function Tp(n,e,t){let i=`FIRESTORE (${Bi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Gt(i),new Error(i)}function pe(n,e,t,i){let s="Unexpected state";typeof t=="string"?s=t:i=t,n||Tp(e,s,i)}function ie(n,e){return n}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Mt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ip{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Fe.UNAUTHENTICATED)))}shutdown(){}}class oT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class aT{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){pe(this.o===void 0,42304);let i=this.i;const s=l=>this.i!==i?(i=this.i,t(l)):Promise.resolve();let r=new gi;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new gi,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=r;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new gi)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(pe(typeof i.accessToken=="string",31837,{l:i}),new Ip(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string",2055,{h:e}),new Fe(e)}}class cT{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class lT{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new cT(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Fe.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Od{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uT{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ge(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){pe(this.o===void 0,3512);const i=r=>{r.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable((()=>i(r)))};const s=r=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>s(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?s(r):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Od(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(pe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Od(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function dT(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class Ep{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=dT(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%62))}return i}}function te(n,e){return n<e?-1:n>e?1:0}function ac(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const s=n.charAt(i),r=e.charAt(i);if(s!==r)return $a(s)===$a(r)?te(s,r):$a(s)?1:-1}return te(n.length,e.length)}const hT=55296,fT=57343;function $a(n){const e=n.charCodeAt(0);return e>=hT&&e<=fT}function Ri(n,e,t){return n.length===e.length&&n.every(((i,s)=>t(i,e[s])))}/**
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
 */const Vd="__name__";class _t{constructor(e,t,i){t===void 0?t=0:t>e.length&&J(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&J(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return _t.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof _t?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=_t.compareSegments(e.get(s),t.get(s));if(r!==0)return r}return te(e.length,t.length)}static compareSegments(e,t){const i=_t.isNumericId(e),s=_t.isNumericId(t);return i&&!s?-1:!i&&s?1:i&&s?_t.extractNumericId(e).compare(_t.extractNumericId(t)):ac(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return wn.fromString(e.substring(4,e.length-2))}}class fe extends _t{construct(e,t,i){return new fe(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new q(V.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((s=>s.length>0)))}return new fe(t)}static emptyPath(){return new fe([])}}const pT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends _t{construct(e,t,i){return new Ke(e,t,i)}static isValidIdentifier(e){return pT.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Vd}static keyField(){return new Ke([Vd])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new q(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new q(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new q(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(i+=c,s++):(r(),s++)}if(r(),o)throw new q(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(t)}static emptyPath(){return new Ke([])}}/**
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
 */function mT(n,e,t){if(!t)throw new q(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function gT(n,e,t,i){if(e===!0&&i===!0)throw new q(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ud(n){if(K.isDocumentKey(n))throw new q(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function yT(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function vT(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":J(12329,{type:typeof n})}function Br(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new q(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=vT(n);throw new q(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Ee(n,e){const t={typeString:n};return e&&(t.value=e),t}function Qs(n,e){if(!yT(n))throw new q(V.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const s=e[i].typeString,r="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const o=n[i];if(s&&typeof o!==s){t=`JSON field '${i}' must be a ${s}.`;break}if(r!==void 0&&o!==r.value){t=`Expected '${i}' field to equal '${r.value}'`;break}}if(t)throw new q(V.INVALID_ARGUMENT,t);return!0}/**
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
 */const Fd=-62135596800,Hd=1e6;class Ie{static now(){return Ie.fromMillis(Date.now())}static fromDate(e){return Ie.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Hd);return new Ie(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Fd)throw new q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Hd}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ie._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Qs(e,Ie._jsonSchema))return new Ie(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Fd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ie._jsonSchemaVersion="firestore/timestamp/1.0",Ie._jsonSchema={type:Ee("string",Ie._jsonSchemaVersion),seconds:Ee("number"),nanoseconds:Ee("number")};/**
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
 */const Ds=-1;function wT(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(i===1e9?new Ie(t+1,0):new Ie(t,i));return new kn(s,K.empty(),e)}function _T(n){return new kn(n.readTime,n.key,Ds)}class kn{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new kn(Y.min(),K.empty(),Ds)}static max(){return new kn(Y.max(),K.empty(),Ds)}}function bT(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=K.comparator(n.documentKey,e.documentKey),t!==0?t:te(n.largestBatchId,e.largestBatchId))}/**
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
 */const TT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class IT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Do(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==TT)throw n;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&J(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new L(((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof L?t:L.resolve(t)}catch(t){return L.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):L.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):L.reject(t)}static resolve(e){return new L(((t,i)=>{t(e)}))}static reject(e){return new L(((t,i)=>{i(e)}))}static waitFor(e){return new L(((t,i)=>{let s=0,r=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++r,o&&r===s&&t()}),(l=>i(l)))})),o=!0,r===s&&t()}))}static or(e){let t=L.resolve(!1);for(const i of e)t=t.next((s=>s?L.resolve(s):i()));return t}static forEach(e,t){const i=[];return e.forEach(((s,r)=>{i.push(t.call(this,s,r))})),this.waitFor(i)}static mapArray(e,t){return new L(((i,s)=>{const r=e.length,o=new Array(r);let c=0;for(let l=0;l<r;l++){const d=l;t(e[d]).next((m=>{o[d]=m,++c,c===r&&i(o)}),(m=>s(m)))}}))}static doWhile(e,t){return new L(((i,s)=>{const r=()=>{e()===!0?t().next((()=>{r()}),s):i()};r()}))}}function ET(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ji(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class No{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}No.ce=-1;/**
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
 */const kT=-1;function Mo(n){return n==null}function cc(n){return n===0&&1/n==-1/0}/**
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
 */const kp="";function ST(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Bd(e)),e=CT(n.get(t),e);return Bd(e)}function CT(n,e){let t=e;const i=n.length;for(let s=0;s<i;s++){const r=n.charAt(s);switch(r){case"\0":t+="";break;case kp:t+="";break;default:t+=r}}return t}function Bd(n){return n+kp+""}/**
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
 */function jd(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ys(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function RT(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class be{constructor(e,t){this.comparator=e,this.root=t||De.EMPTY}insert(e,t){return new be(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,De.BLACK,null,null))}remove(e){return new be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,De.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Er(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Er(this.root,e,this.comparator,!1)}getReverseIterator(){return new Er(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Er(this.root,e,this.comparator,!0)}}class Er{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class De{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??De.RED,this.left=s??De.EMPTY,this.right=r??De.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new De(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return De.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return De.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw J(43730,{key:this.key,value:this.value});if(this.right.isRed())throw J(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw J(27949);return e+(this.isRed()?0:1)}}De.EMPTY=null,De.RED=!0,De.BLACK=!1;De.EMPTY=new class{constructor(){this.size=0}get key(){throw J(57766)}get value(){throw J(16141)}get color(){throw J(16727)}get left(){throw J(29726)}get right(){throw J(36894)}copy(e,t,i,s,r){return this}insert(e,t,i){return new De(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ce{constructor(e){this.comparator=e,this.data=new be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new zd(this.data.getIterator())}getIteratorFrom(e){return new zd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof Ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ce(this.comparator);return t.data=e,t}}class zd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class mn{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new mn([])}unionWith(e){let t=new Ce(Ke.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new mn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ri(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class Sp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Me{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Sp("Invalid base64 string: "+r):r}})(e);return new Me(t)}static fromUint8Array(e){const t=(function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r})(e);return new Me(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Me.EMPTY_BYTE_STRING=new Me("");const AT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Sn(n){if(pe(!!n,39018),typeof n=="string"){let e=0;const t=AT.exec(n);if(pe(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:_e(n.seconds),nanos:_e(n.nanos)}}function _e(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Cn(n){return typeof n=="string"?Me.fromBase64String(n):Me.fromUint8Array(n)}/**
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
 */const Cp="server_timestamp",Rp="__type__",Ap="__previous_value__",xp="__local_write_time__";function rl(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Rp])==null?void 0:i.stringValue)===Cp}function Oo(n){const e=n.mapValue.fields[Ap];return rl(e)?Oo(e):e}function Ns(n){const e=Sn(n.mapValue.fields[xp].timestampValue);return new Ie(e.seconds,e.nanos)}/**
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
 */class xT{constructor(e,t,i,s,r,o,c,l,d,m,g){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=m,this.apiKey=g}}const ho="(default)";class Ms{constructor(e,t){this.projectId=e,this.database=t||ho}static empty(){return new Ms("","")}get isDefaultDatabase(){return this.database===ho}isEqual(e){return e instanceof Ms&&e.projectId===this.projectId&&e.database===this.database}}function PT(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new q(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ms(n.options.projectId,e)}/**
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
 */const $T="__type__",LT="__max__",kr={mapValue:{}},DT="__vector__",lc="value";function Rn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?rl(n)?4:MT(n)?9007199254740991:NT(n)?10:11:J(28295,{value:n})}function Dt(n,e){if(n===e)return!0;const t=Rn(n);if(t!==Rn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ns(n).isEqual(Ns(e));case 3:return(function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=Sn(s.timestampValue),c=Sn(r.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,r){return Cn(s.bytesValue).isEqual(Cn(r.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,r){return _e(s.geoPointValue.latitude)===_e(r.geoPointValue.latitude)&&_e(s.geoPointValue.longitude)===_e(r.geoPointValue.longitude)})(n,e);case 2:return(function(s,r){if("integerValue"in s&&"integerValue"in r)return _e(s.integerValue)===_e(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=_e(s.doubleValue),c=_e(r.doubleValue);return o===c?cc(o)===cc(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return Ri(n.arrayValue.values||[],e.arrayValue.values||[],Dt);case 10:case 11:return(function(s,r){const o=s.mapValue.fields||{},c=r.mapValue.fields||{};if(jd(o)!==jd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Dt(o[l],c[l])))return!1;return!0})(n,e);default:return J(52216,{left:n})}}function Os(n,e){return(n.values||[]).find((t=>Dt(t,e)))!==void 0}function Ai(n,e){if(n===e)return 0;const t=Rn(n),i=Rn(e);if(t!==i)return te(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return te(n.booleanValue,e.booleanValue);case 2:return(function(r,o){const c=_e(r.integerValue||r.doubleValue),l=_e(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return qd(n.timestampValue,e.timestampValue);case 4:return qd(Ns(n),Ns(e));case 5:return ac(n.stringValue,e.stringValue);case 6:return(function(r,o){const c=Cn(r),l=Cn(o);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(r,o){const c=r.split("/"),l=o.split("/");for(let d=0;d<c.length&&d<l.length;d++){const m=te(c[d],l[d]);if(m!==0)return m}return te(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(r,o){const c=te(_e(r.latitude),_e(o.latitude));return c!==0?c:te(_e(r.longitude),_e(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Wd(n.arrayValue,e.arrayValue);case 10:return(function(r,o){var w,E,A,P;const c=r.fields||{},l=o.fields||{},d=(w=c[lc])==null?void 0:w.arrayValue,m=(E=l[lc])==null?void 0:E.arrayValue,g=te(((A=d==null?void 0:d.values)==null?void 0:A.length)||0,((P=m==null?void 0:m.values)==null?void 0:P.length)||0);return g!==0?g:Wd(d,m)})(n.mapValue,e.mapValue);case 11:return(function(r,o){if(r===kr.mapValue&&o===kr.mapValue)return 0;if(r===kr.mapValue)return 1;if(o===kr.mapValue)return-1;const c=r.fields||{},l=Object.keys(c),d=o.fields||{},m=Object.keys(d);l.sort(),m.sort();for(let g=0;g<l.length&&g<m.length;++g){const w=ac(l[g],m[g]);if(w!==0)return w;const E=Ai(c[l[g]],d[m[g]]);if(E!==0)return E}return te(l.length,m.length)})(n.mapValue,e.mapValue);default:throw J(23264,{he:t})}}function qd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return te(n,e);const t=Sn(n),i=Sn(e),s=te(t.seconds,i.seconds);return s!==0?s:te(t.nanos,i.nanos)}function Wd(n,e){const t=n.values||[],i=e.values||[];for(let s=0;s<t.length&&s<i.length;++s){const r=Ai(t[s],i[s]);if(r)return r}return te(t.length,i.length)}function xi(n){return uc(n)}function uc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=Sn(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Cn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return K.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",s=!0;for(const r of t.values||[])s?s=!1:i+=",",i+=uc(r);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${uc(t.fields[o])}`;return s+"}"})(n.mapValue):J(61005,{value:n})}function jr(n){switch(Rn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Oo(n);return e?16+jr(e):16;case 5:return 2*n.stringValue.length;case 6:return Cn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((s,r)=>s+jr(r)),0)})(n.arrayValue);case 10:case 11:return(function(i){let s=0;return Ys(i.fields,((r,o)=>{s+=r.length+jr(o)})),s})(n.mapValue);default:throw J(13486,{value:n})}}function dc(n){return!!n&&"integerValue"in n}function ol(n){return!!n&&"arrayValue"in n}function Gd(n){return!!n&&"nullValue"in n}function Kd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function La(n){return!!n&&"mapValue"in n}function NT(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[$T])==null?void 0:i.stringValue)===DT}function Es(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Ys(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=Es(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Es(n.arrayValue.values[t]);return e}return{...n}}function MT(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===LT}/**
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
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!La(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Es(t)}setAll(e){let t=Ke.emptyPath(),i={},s=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,i,s),i={},s=[],t=c.popLast()}o?i[c.lastSegment()]=Es(o):s.push(c.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());La(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Dt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];La(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){Ys(t,((s,r)=>e[s]=r));for(const s of i)delete e[s]}clone(){return new Tt(Es(this.value))}}/**
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
 */class Be{constructor(e,t,i,s,r,o,c){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Be(e,0,Y.min(),Y.min(),Y.min(),Tt.empty(),0)}static newFoundDocument(e,t,i,s){return new Be(e,1,t,Y.min(),i,s,0)}static newNoDocument(e,t){return new Be(e,2,t,Y.min(),Y.min(),Tt.empty(),0)}static newUnknownDocument(e,t){return new Be(e,3,t,Y.min(),Y.min(),Tt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fo{constructor(e,t){this.position=e,this.inclusive=t}}function Qd(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],o=n.position[s];if(r.field.isKeyField()?i=K.comparator(K.fromName(o.referenceValue),t.key):i=Ai(o,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Yd(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Dt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class po{constructor(e,t="asc"){this.field=e,this.dir=t}}function OT(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Pp{}class Se extends Pp{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new UT(e,t,i):t==="array-contains"?new BT(e,i):t==="in"?new jT(e,i):t==="not-in"?new zT(e,i):t==="array-contains-any"?new qT(e,i):new Se(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new FT(e,i):new HT(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ai(t,this.value)):t!==null&&Rn(this.value)===Rn(t)&&this.matchesComparison(Ai(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nt extends Pp{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Nt(e,t)}matches(e){return $p(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function $p(n){return n.op==="and"}function Lp(n){return VT(n)&&$p(n)}function VT(n){for(const e of n.filters)if(e instanceof Nt)return!1;return!0}function hc(n){if(n instanceof Se)return n.field.canonicalString()+n.op.toString()+xi(n.value);if(Lp(n))return n.filters.map((e=>hc(e))).join(",");{const e=n.filters.map((t=>hc(t))).join(",");return`${n.op}(${e})`}}function Dp(n,e){return n instanceof Se?(function(i,s){return s instanceof Se&&i.op===s.op&&i.field.isEqual(s.field)&&Dt(i.value,s.value)})(n,e):n instanceof Nt?(function(i,s){return s instanceof Nt&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce(((r,o,c)=>r&&Dp(o,s.filters[c])),!0):!1})(n,e):void J(19439)}function Np(n){return n instanceof Se?(function(t){return`${t.field.canonicalString()} ${t.op} ${xi(t.value)}`})(n):n instanceof Nt?(function(t){return t.op.toString()+" {"+t.getFilters().map(Np).join(" ,")+"}"})(n):"Filter"}class UT extends Se{constructor(e,t,i){super(e,t,i),this.key=K.fromName(i.referenceValue)}matches(e){const t=K.comparator(e.key,this.key);return this.matchesComparison(t)}}class FT extends Se{constructor(e,t){super(e,"in",t),this.keys=Mp("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class HT extends Se{constructor(e,t){super(e,"not-in",t),this.keys=Mp("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Mp(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((i=>K.fromName(i.referenceValue)))}class BT extends Se{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ol(t)&&Os(t.arrayValue,this.value)}}class jT extends Se{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Os(this.value.arrayValue,t)}}class zT extends Se{constructor(e,t){super(e,"not-in",t)}matches(e){if(Os(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Os(this.value.arrayValue,t)}}class qT extends Se{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ol(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>Os(this.value.arrayValue,i)))}}/**
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
 */class WT{constructor(e,t=null,i=[],s=[],r=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=c,this.Te=null}}function Jd(n,e=null,t=[],i=[],s=null,r=null,o=null){return new WT(n,e,t,i,s,r,o)}function al(n){const e=ie(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>hc(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(r){return r.field.canonicalString()+r.dir})(i))).join(","),Mo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>xi(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>xi(i))).join(",")),e.Te=t}return e.Te}function cl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!OT(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Dp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Yd(n.startAt,e.startAt)&&Yd(n.endAt,e.endAt)}function fc(n){return K.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Vo{constructor(e,t=null,i=[],s=[],r=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function GT(n,e,t,i,s,r,o,c){return new Vo(n,e,t,i,s,r,o,c)}function ll(n){return new Vo(n)}function Xd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function KT(n){return K.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function QT(n){return n.collectionGroup!==null}function ks(n){const e=ie(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const r of e.explicitOrderBy)e.Ie.push(r),t.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ce(Ke.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(e).forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new po(r,i))})),t.has(Ke.keyField().canonicalString())||e.Ie.push(new po(Ke.keyField(),i))}return e.Ie}function xt(n){const e=ie(n);return e.Ee||(e.Ee=YT(e,ks(n))),e.Ee}function YT(n,e){if(n.limitType==="F")return Jd(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const r=s.dir==="desc"?"asc":"desc";return new po(s.field,r)}));const t=n.endAt?new fo(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new fo(n.startAt.position,n.startAt.inclusive):null;return Jd(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function pc(n,e,t){return new Vo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Uo(n,e){return cl(xt(n),xt(e))&&n.limitType===e.limitType}function Op(n){return`${al(xt(n))}|lt:${n.limitType}`}function li(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((s=>Np(s))).join(", ")}]`),Mo(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((s=>xi(s))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((s=>xi(s))).join(",")),`Target(${i})`})(xt(n))}; limitType=${n.limitType})`}function Fo(n,e){return e.isFoundDocument()&&(function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):K.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)})(n,e)&&(function(i,s){for(const r of ks(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0})(n,e)&&(function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0})(n,e)&&(function(i,s){return!(i.startAt&&!(function(o,c,l){const d=Qd(o,c,l);return o.inclusive?d<=0:d<0})(i.startAt,ks(i),s)||i.endAt&&!(function(o,c,l){const d=Qd(o,c,l);return o.inclusive?d>=0:d>0})(i.endAt,ks(i),s))})(n,e)}function JT(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Vp(n){return(e,t)=>{let i=!1;for(const s of ks(n)){const r=XT(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function XT(n,e,t){const i=n.field.isKeyField()?K.comparator(e.key,t.key):(function(r,o,c){const l=o.data.field(r),d=c.data.field(r);return l!==null&&d!==null?Ai(l,d):J(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return J(19790,{direction:n.dir})}}/**
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
 */class ii{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ys(this.inner,((t,i)=>{for(const[s,r]of i)e(s,r)}))}isEmpty(){return RT(this.inner)}size(){return this.innerSize}}/**
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
 */const ZT=new be(K.comparator);function An(){return ZT}const Up=new be(K.comparator);function ys(...n){let e=Up;for(const t of n)e=e.insert(t.key,t);return e}function e0(n){let e=Up;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function Bn(){return Ss()}function Fp(){return Ss()}function Ss(){return new ii((n=>n.toString()),((n,e)=>n.isEqual(e)))}const t0=new Ce(K.comparator);function se(...n){let e=t0;for(const t of n)e=e.add(t);return e}const n0=new Ce(te);function i0(){return n0}/**
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
 */function s0(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cc(e)?"-0":e}}function r0(n){return{integerValue:""+n}}/**
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
 */class Ho{constructor(){this._=void 0}}function o0(n,e,t){return n instanceof mc?(function(s,r){const o={fields:{[Rp]:{stringValue:Cp},[xp]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&rl(r)&&(r=Oo(r)),r&&(o.fields[Ap]=r),{mapValue:o}})(t,e):n instanceof mo?Hp(n,e):n instanceof go?Bp(n,e):(function(s,r){const o=c0(s,r),c=Zd(o)+Zd(s.Ae);return dc(o)&&dc(s.Ae)?r0(c):s0(s.serializer,c)})(n,e)}function a0(n,e,t){return n instanceof mo?Hp(n,e):n instanceof go?Bp(n,e):t}function c0(n,e){return n instanceof gc?(function(i){return dc(i)||(function(r){return!!r&&"doubleValue"in r})(i)})(e)?e:{integerValue:0}:null}class mc extends Ho{}class mo extends Ho{constructor(e){super(),this.elements=e}}function Hp(n,e){const t=jp(e);for(const i of n.elements)t.some((s=>Dt(s,i)))||t.push(i);return{arrayValue:{values:t}}}class go extends Ho{constructor(e){super(),this.elements=e}}function Bp(n,e){let t=jp(e);for(const i of n.elements)t=t.filter((s=>!Dt(s,i)));return{arrayValue:{values:t}}}class gc extends Ho{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Zd(n){return _e(n.integerValue||n.doubleValue)}function jp(n){return ol(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function l0(n,e){return n.field.isEqual(e.field)&&(function(i,s){return i instanceof mo&&s instanceof mo||i instanceof go&&s instanceof go?Ri(i.elements,s.elements,Dt):i instanceof gc&&s instanceof gc?Dt(i.Ae,s.Ae):i instanceof mc&&s instanceof mc})(n.transform,e.transform)}class qn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new qn}static exists(e){return new qn(void 0,e)}static updateTime(e){return new qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ul{}function zp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new d0(n.key,qn.none()):new dl(n.key,n.data,qn.none());{const t=n.data,i=Tt.empty();let s=new Ce(Ke.comparator);for(let r of e.fields)if(!s.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new Bo(n.key,i,new mn(s.toArray()),qn.none())}}function u0(n,e,t){n instanceof dl?(function(s,r,o){const c=s.value.clone(),l=th(s.fieldTransforms,r,o.transformResults);c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof Bo?(function(s,r,o){if(!zr(s.precondition,r))return void r.convertToUnknownDocument(o.version);const c=th(s.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(qp(s)),l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):(function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function Cs(n,e,t,i){return n instanceof dl?(function(r,o,c,l){if(!zr(r.precondition,o))return c;const d=r.value.clone(),m=nh(r.fieldTransforms,l,o);return d.setAll(m),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null})(n,e,t,i):n instanceof Bo?(function(r,o,c,l){if(!zr(r.precondition,o))return c;const d=nh(r.fieldTransforms,l,o),m=o.data;return m.setAll(qp(r)),m.setAll(d),o.convertToFoundDocument(o.version,m).setHasLocalMutations(),c===null?null:c.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((g=>g.field)))})(n,e,t,i):(function(r,o,c){return zr(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function eh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Ri(i,s,((r,o)=>l0(r,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class dl extends ul{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Bo extends ul{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function qp(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function th(n,e,t){const i=new Map;pe(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const r=n[s],o=r.transform,c=e.data.field(r.field);i.set(r.field,a0(o,c,t[s]))}return i}function nh(n,e,t){const i=new Map;for(const s of n){const r=s.transform,o=t.data.field(s.field);i.set(s.field,o0(r,o,e))}return i}class d0 extends ul{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class h0{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&u0(r,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Cs(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Cs(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Fp();return this.mutations.forEach((s=>{const r=e.get(s.key),o=r.overlayedDocument;let c=this.applyToLocalView(o,r.mutatedFields);c=t.has(s.key)?null:c;const l=zp(o,c);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(Y.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),se())}isEqual(e){return this.batchId===e.batchId&&Ri(this.mutations,e.mutations,((t,i)=>eh(t,i)))&&Ri(this.baseMutations,e.baseMutations,((t,i)=>eh(t,i)))}}/**
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
 */class f0{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class p0{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Te,ne;function Wp(n){if(n===void 0)return Gt("GRPC error has no .code"),V.UNKNOWN;switch(n){case Te.OK:return V.OK;case Te.CANCELLED:return V.CANCELLED;case Te.UNKNOWN:return V.UNKNOWN;case Te.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Te.INTERNAL:return V.INTERNAL;case Te.UNAVAILABLE:return V.UNAVAILABLE;case Te.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Te.NOT_FOUND:return V.NOT_FOUND;case Te.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Te.ABORTED:return V.ABORTED;case Te.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Te.DATA_LOSS:return V.DATA_LOSS;default:return J(39323,{code:n})}}(ne=Te||(Te={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function m0(){return new TextEncoder}/**
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
 */const g0=new wn([4294967295,4294967295],0);function ih(n){const e=m0().encode(n),t=new gp;return t.update(e),new Uint8Array(t.digest())}function sh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new wn([t,i],0),new wn([s,r],0)]}class hl{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new vs(`Invalid padding: ${t}`);if(i<0)throw new vs(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new vs(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new vs(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=wn.fromNumber(this.ge)}ye(e,t,i){let s=e.add(t.multiply(wn.fromNumber(i)));return s.compare(g0)===1&&(s=new wn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=ih(e),[i,s]=sh(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(i,s,r);if(!this.we(o))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new hl(r,s,t);return i.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=ih(e),[i,s]=sh(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(i,s,r);this.be(o)}}be(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class vs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class jo{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,Js.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new jo(Y.min(),s,new be(te),An(),se())}}class Js{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Js(i,t,se(),se(),se())}}/**
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
 */class qr{constructor(e,t,i,s){this.Se=e,this.removedTargetIds=t,this.key=i,this.De=s}}class Gp{constructor(e,t){this.targetId=e,this.Ce=t}}class Kp{constructor(e,t,i=Me.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class rh{constructor(){this.ve=0,this.Fe=oh(),this.Me=Me.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=se(),t=se(),i=se();return this.Fe.forEach(((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:J(38017,{changeType:r})}})),new Js(this.Me,this.xe,e,t,i)}Ke(){this.Oe=!1,this.Fe=oh()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,pe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class y0{constructor(e){this.Ge=e,this.ze=new Map,this.je=An(),this.He=Sr(),this.Je=Sr(),this.Ze=new be(te)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.We(),i.Ne||i.Ke(),i.Le(e.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.Qe(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:J(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,i=e.Ce.count,s=this.ot(t);if(s){const r=s.target;if(fc(r))if(i===0){const o=new K(r.path);this.et(t,o,Be.newNoDocument(o,Y.min()))}else pe(i===1,20013,{expectedCount:i});else{const o=this._t(t);if(o!==i){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=t;let o,c;try{o=Cn(i).toUint8Array()}catch(l){if(l instanceof Sp)return ei("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new hl(o,s,r)}catch(l){return ei(l instanceof vs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let s=0;return i.forEach((r=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(c)||(this.et(t,r,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((r,o)=>{const c=this.ot(o);if(c){if(r.current&&fc(c.target)){const l=new K(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,Be.newNoDocument(l,e))}r.Be&&(t.set(o,r.ke()),r.Ke())}}));let i=se();this.Je.forEach(((r,o)=>{let c=!0;o.forEachWhile((l=>{const d=this.ot(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(i=i.add(r))})),this.je.forEach(((r,o)=>o.setReadTime(e)));const s=new jo(e,t,this.Ze,this.je,i);return this.je=An(),this.He=Sr(),this.Je=Sr(),this.Ze=new be(te),s}Ye(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,i),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new rh,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new Ce(te),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new Ce(te),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||H("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new rh),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Sr(){return new be(K.comparator)}function oh(){return new be(K.comparator)}const v0={asc:"ASCENDING",desc:"DESCENDING"},w0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_0={and:"AND",or:"OR"};class b0{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function yc(n,e){return n.useProto3Json||Mo(e)?e:{value:e}}function T0(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function I0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function yi(n){return pe(!!n,49232),Y.fromTimestamp((function(t){const i=Sn(t);return new Ie(i.seconds,i.nanos)})(n))}function E0(n,e){return vc(n,e).canonicalString()}function vc(n,e){const t=(function(s){return new fe(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Qp(n){const e=fe.fromString(n);return pe(em(e),10190,{key:e.toString()}),e}function Da(n,e){const t=Qp(e);if(t.get(1)!==n.databaseId.projectId)throw new q(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new q(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new K(Jp(t))}function Yp(n,e){return E0(n.databaseId,e)}function k0(n){const e=Qp(n);return e.length===4?fe.emptyPath():Jp(e)}function ah(n){return new fe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Jp(n){return pe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function S0(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:J(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=(function(d,m){return d.useProto3Json?(pe(m===void 0||typeof m=="string",58123),Me.fromBase64String(m||"")):(pe(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),Me.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(d){const m=d.code===void 0?V.UNKNOWN:Wp(d.code);return new q(m,d.message||"")})(o);t=new Kp(i,s,r,c||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Da(n,i.document.name),r=yi(i.document.updateTime),o=i.document.createTime?yi(i.document.createTime):Y.min(),c=new Tt({mapValue:{fields:i.document.fields}}),l=Be.newFoundDocument(s,r,o,c),d=i.targetIds||[],m=i.removedTargetIds||[];t=new qr(d,m,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Da(n,i.document),r=i.readTime?yi(i.readTime):Y.min(),o=Be.newNoDocument(s,r),c=i.removedTargetIds||[];t=new qr([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Da(n,i.document),r=i.removedTargetIds||[];t=new qr([],r,s,null)}else{if(!("filter"in e))return J(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new p0(s,r),c=i.targetId;t=new Gp(c,o)}}return t}function C0(n,e){return{documents:[Yp(n,e.path)]}}function R0(n,e){const t={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Yp(n,s);const r=(function(d){if(d.length!==0)return Zp(Nt.create(d,"and"))})(e.filters);r&&(t.structuredQuery.where=r);const o=(function(d){if(d.length!==0)return d.map((m=>(function(w){return{field:ui(w.field),direction:P0(w.dir)}})(m)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=yc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{ft:t,parent:s}}function A0(n){let e=k0(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){pe(i===1,65062);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let r=[];t.where&&(r=(function(g){const w=Xp(g);return w instanceof Nt&&Lp(w)?w.getFilters():[w]})(t.where));let o=[];t.orderBy&&(o=(function(g){return g.map((w=>(function(A){return new po(di(A.field),(function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(A.direction))})(w)))})(t.orderBy));let c=null;t.limit&&(c=(function(g){let w;return w=typeof g=="object"?g.value:g,Mo(w)?null:w})(t.limit));let l=null;t.startAt&&(l=(function(g){const w=!!g.before,E=g.values||[];return new fo(E,w)})(t.startAt));let d=null;return t.endAt&&(d=(function(g){const w=!g.before,E=g.values||[];return new fo(E,w)})(t.endAt)),GT(e,s,o,r,c,"F",l,d)}function x0(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Xp(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=di(t.unaryFilter.field);return Se.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=di(t.unaryFilter.field);return Se.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=di(t.unaryFilter.field);return Se.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=di(t.unaryFilter.field);return Se.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return J(61313);default:return J(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Se.create(di(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return J(58110);default:return J(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Nt.create(t.compositeFilter.filters.map((i=>Xp(i))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return J(1026)}})(t.compositeFilter.op))})(n):J(30097,{filter:n})}function P0(n){return v0[n]}function $0(n){return w0[n]}function L0(n){return _0[n]}function ui(n){return{fieldPath:n.canonicalString()}}function di(n){return Ke.fromServerFormat(n.fieldPath)}function Zp(n){return n instanceof Se?(function(t){if(t.op==="=="){if(Kd(t.value))return{unaryFilter:{field:ui(t.field),op:"IS_NAN"}};if(Gd(t.value))return{unaryFilter:{field:ui(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Kd(t.value))return{unaryFilter:{field:ui(t.field),op:"IS_NOT_NAN"}};if(Gd(t.value))return{unaryFilter:{field:ui(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ui(t.field),op:$0(t.op),value:t.value}}})(n):n instanceof Nt?(function(t){const i=t.getFilters().map((s=>Zp(s)));return i.length===1?i[0]:{compositeFilter:{op:L0(t.op),filters:i}}})(n):J(54877,{filter:n})}function em(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class gn{constructor(e,t,i,s,r=Y.min(),o=Y.min(),c=Me.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new gn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new gn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class D0{constructor(e){this.yt=e}}function N0(n){const e=A0({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?pc(e,e.limit,"L"):e}/**
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
 */class M0{constructor(){this.Sn=new O0}addToCollectionParentIndex(e,t){return this.Sn.add(t),L.resolve()}getCollectionParents(e,t){return L.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return L.resolve()}deleteFieldIndex(e,t){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,t){return L.resolve()}getDocumentsMatchingTarget(e,t){return L.resolve(null)}getIndexType(e,t){return L.resolve(0)}getFieldIndexes(e,t){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,t){return L.resolve(kn.min())}getMinOffsetFromCollectionGroup(e,t){return L.resolve(kn.min())}updateCollectionGroup(e,t,i){return L.resolve()}updateIndexEntries(e,t){return L.resolve()}}class O0{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new Ce(fe.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Ce(fe.comparator)).toArray()}}/**
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
 */const ch={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},tm=41943040;class Qe{static withCacheSize(e){return new Qe(e,Qe.DEFAULT_COLLECTION_PERCENTILE,Qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */Qe.DEFAULT_COLLECTION_PERCENTILE=10,Qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Qe.DEFAULT=new Qe(tm,Qe.DEFAULT_COLLECTION_PERCENTILE,Qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Qe.DISABLED=new Qe(-1,0,0);/**
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
 */class Pi{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Pi(0)}static ar(){return new Pi(-1)}}/**
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
 */const lh="LruGarbageCollector",V0=1048576;function uh([n,e],[t,i]){const s=te(n,t);return s===0?te(e,i):s}class U0{constructor(e){this.Pr=e,this.buffer=new Ce(uh),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();uh(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class F0{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){H(lh,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ji(t)?H(lh,"Ignoring IndexedDB error during garbage collection: ",t):await Do(t)}await this.Ar(3e5)}))}}class H0{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return L.resolve(No.ce);const i=new U0(t);return this.Vr.forEachTarget(e,(s=>i.Er(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>i.Er(s))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(ch)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ch):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let i,s,r,o,c,l,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,o=Date.now(),this.nthSequenceNumber(e,s)))).next((g=>(i=g,c=Date.now(),this.removeTargets(e,i,t)))).next((g=>(r=g,l=Date.now(),this.removeOrphanedDocuments(e,i)))).next((g=>(d=Date.now(),ci()<=ee.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-m}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${r} targets in `+(l-c)+`ms
	Removed ${g} documents in `+(d-l)+`ms
Total Duration: ${d-m}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:g}))))}}function B0(n,e){return new H0(n,e)}/**
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
 */class j0{constructor(){this.changes=new ii((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Be.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?L.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class z0{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class q0{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(i=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(i!==null&&Cs(i.mutation,s,mn.empty(),Ie.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,se()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=se()){const s=Bn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,i).next((r=>{let o=ys();return r.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const i=Bn();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,se())))}populateOverlays(e,t,i){const s=[];return i.forEach((r=>{t.has(r)||s.push(r)})),this.documentOverlayCache.getOverlays(e,s).next((r=>{r.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,i,s){let r=An();const o=Ss(),c=(function(){return Ss()})();return t.forEach(((l,d)=>{const m=i.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof Bo)?r=r.insert(d.key,d):m!==void 0?(o.set(d.key,m.mutation.getFieldMask()),Cs(m.mutation,d,m.mutation.getFieldMask(),Ie.now())):o.set(d.key,mn.empty())})),this.recalculateAndSaveOverlays(e,r).next((l=>(l.forEach(((d,m)=>o.set(d,m))),t.forEach(((d,m)=>c.set(d,new z0(m,o.get(d)??null)))),c)))}recalculateAndSaveOverlays(e,t){const i=Ss();let s=new be(((o,c)=>o-c)),r=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((l=>{const d=t.get(l);if(d===null)return;let m=i.get(l)||mn.empty();m=c.applyToLocalView(d,m),i.set(l,m);const g=(s.get(c.batchId)||se()).add(l);s=s.insert(c.batchId,g)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),d=l.key,m=l.value,g=Fp();m.forEach((w=>{if(!r.has(w)){const E=zp(t.get(w),i.get(w));E!==null&&g.set(w,E),r=r.add(w)}})),o.push(this.documentOverlayCache.saveOverlays(e,d,g))}return L.waitFor(o)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,s){return KT(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):QT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,s):this.getDocumentsMatchingCollectionQuery(e,t,i,s)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next((r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-r.size):L.resolve(Bn());let c=Ds,l=r;return o.next((d=>L.forEach(d,((m,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),r.get(m)?L.resolve():this.remoteDocumentCache.getEntry(e,m).next((w=>{l=l.insert(m,w)}))))).next((()=>this.populateOverlays(e,d,r))).next((()=>this.computeViews(e,l,d,se()))).next((m=>({batchId:c,changes:e0(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new K(t)).next((i=>{let s=ys();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,s){const r=t.collectionGroup;let o=ys();return this.indexManager.getCollectionParents(e,r).next((c=>L.forEach(c,(l=>{const d=(function(g,w){return new Vo(w,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(t,l.child(r));return this.getDocumentsMatchingCollectionQuery(e,d,i,s).next((m=>{m.forEach(((g,w)=>{o=o.insert(g,w)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,r,s)))).next((o=>{r.forEach(((l,d)=>{const m=d.getKey();o.get(m)===null&&(o=o.insert(m,Be.newInvalidDocument(m)))}));let c=ys();return o.forEach(((l,d)=>{const m=r.get(l);m!==void 0&&Cs(m.mutation,d,mn.empty(),Ie.now()),Fo(t,d)&&(c=c.insert(l,d))})),c}))}}/**
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
 */class W0{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return L.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:yi(s.createTime)}})(t)),L.resolve()}getNamedQuery(e,t){return L.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(s){return{name:s.name,query:N0(s.bundledQuery),readTime:yi(s.readTime)}})(t)),L.resolve()}}/**
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
 */class G0{constructor(){this.overlays=new be(K.comparator),this.Lr=new Map}getOverlay(e,t){return L.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Bn();return L.forEach(t,(s=>this.getOverlay(e,s).next((r=>{r!==null&&i.set(s,r)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((s,r)=>{this.bt(e,t,r)})),L.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.Lr.get(i);return s!==void 0&&(s.forEach((r=>this.overlays=this.overlays.remove(r))),this.Lr.delete(i)),L.resolve()}getOverlaysForCollection(e,t,i){const s=Bn(),r=t.length+1,o=new K(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let r=new be(((d,m)=>d-m));const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>i){let m=r.get(d.largestBatchId);m===null&&(m=Bn(),r=r.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=Bn(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((d,m)=>c.set(d,m))),!(c.size()>=s)););return L.resolve(c)}bt(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(i.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new f0(t,i));let r=this.Lr.get(t);r===void 0&&(r=se(),this.Lr.set(t,r)),this.Lr.set(t,r.add(i.key))}}/**
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
 */class K0{constructor(){this.sessionToken=Me.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,L.resolve()}}/**
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
 */class fl{constructor(){this.kr=new Ce(Pe.Kr),this.qr=new Ce(Pe.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const i=new Pe(e,t);this.kr=this.kr.add(i),this.qr=this.qr.add(i)}$r(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new Pe(e,t))}Qr(e,t){e.forEach((i=>this.removeReference(i,t)))}Gr(e){const t=new K(new fe([])),i=new Pe(t,e),s=new Pe(t,e+1),r=[];return this.qr.forEachInRange([i,s],(o=>{this.Wr(o),r.push(o.key)})),r}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new K(new fe([])),i=new Pe(t,e),s=new Pe(t,e+1);let r=se();return this.qr.forEachInRange([i,s],(o=>{r=r.add(o.key)})),r}containsKey(e){const t=new Pe(e,0),i=this.kr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Pe{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return K.comparator(e.key,t.key)||te(e.Hr,t.Hr)}static Ur(e,t){return te(e.Hr,t.Hr)||K.comparator(e.key,t.key)}}/**
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
 */class Q0{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new Ce(Pe.Kr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const r=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new h0(r,t,i,s);this.mutationQueue.push(o);for(const c of s)this.Jr=this.Jr.add(new Pe(c.key,r)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,t){return L.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.Xr(i),r=s<0?0:s;return L.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?kT:this.Yn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Pe(t,0),s=new Pe(t,Number.POSITIVE_INFINITY),r=[];return this.Jr.forEachInRange([i,s],(o=>{const c=this.Zr(o.Hr);r.push(c)})),L.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Ce(te);return t.forEach((s=>{const r=new Pe(s,0),o=new Pe(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([r,o],(c=>{i=i.add(c.Hr)}))})),L.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;K.isDocumentKey(r)||(r=r.child(""));const o=new Pe(new K(r),0);let c=new Ce(te);return this.Jr.forEachWhile((l=>{const d=l.key.path;return!!i.isPrefixOf(d)&&(d.length===s&&(c=c.add(l.Hr)),!0)}),o),L.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((i=>{const s=this.Zr(i);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){pe(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Jr;return L.forEach(t.mutations,(s=>{const r=new Pe(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Jr=i}))}nr(e){}containsKey(e,t){const i=new Pe(t,0),s=this.Jr.firstAfterOrEqual(i);return L.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Y0{constructor(e){this.ti=e,this.docs=(function(){return new be(K.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),r=s?s.size:0,o=this.ti(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return L.resolve(i?i.document.mutableCopy():Be.newInvalidDocument(t))}getEntries(e,t){let i=An();return t.forEach((s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Be.newInvalidDocument(s))})),L.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let r=An();const o=t.path,c=new K(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:d,value:{document:m}}=l.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||bT(_T(m),i)<=0||(s.has(m.key)||Fo(t,m))&&(r=r.insert(m.key,m.mutableCopy()))}return L.resolve(r)}getAllFromCollectionGroup(e,t,i,s){J(9500)}ni(e,t){return L.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new J0(this)}getSize(e){return L.resolve(this.size)}}class J0 extends j0{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(i)})),L.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class X0{constructor(e){this.persistence=e,this.ri=new ii((t=>al(t)),cl),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.ii=0,this.si=new fl,this.targetCount=0,this.oi=Pi._r()}forEachTarget(e,t){return this.ri.forEach(((i,s)=>t(s))),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.ii&&(this.ii=t),L.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Pi(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,L.resolve()}updateTargetData(e,t){return this.lr(t),L.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.ri.forEach(((o,c)=>{c.sequenceNumber<=t&&i.get(c.targetId)===null&&(this.ri.delete(o),r.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),L.waitFor(r).next((()=>s))}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,t){const i=this.ri.get(t)||null;return L.resolve(i)}addMatchingKeys(e,t,i){return this.si.$r(t,i),L.resolve()}removeMatchingKeys(e,t,i){this.si.Qr(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach((o=>{r.push(s.markPotentiallyOrphaned(e,o))})),L.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),L.resolve()}getMatchingKeysForTargetId(e,t){const i=this.si.jr(t);return L.resolve(i)}containsKey(e,t){return L.resolve(this.si.containsKey(t))}}/**
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
 */class nm{constructor(e,t){this._i={},this.overlays={},this.ai=new No(0),this.ui=!1,this.ui=!0,this.ci=new K0,this.referenceDelegate=e(this),this.li=new X0(this),this.indexManager=new M0,this.remoteDocumentCache=(function(s){return new Y0(s)})((i=>this.referenceDelegate.hi(i))),this.serializer=new D0(t),this.Pi=new W0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new G0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this._i[e.toKey()];return i||(i=new Q0(t,this.referenceDelegate),this._i[e.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,i){H("MemoryPersistence","Starting transaction:",e);const s=new Z0(this.ai.next());return this.referenceDelegate.Ti(),i(s).next((r=>this.referenceDelegate.Ii(s).next((()=>r)))).toPromise().then((r=>(s.raiseOnCommittedEvent(),r)))}Ei(e,t){return L.or(Object.values(this._i).map((i=>()=>i.containsKey(e,t))))}}class Z0 extends IT{constructor(e){super(),this.currentSequenceNumber=e}}class pl{constructor(e){this.persistence=e,this.Ri=new fl,this.Ai=null}static Vi(e){return new pl(e)}get di(){if(this.Ai)return this.Ai;throw J(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.di.delete(i.toString()),L.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.di.add(i.toString()),L.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),L.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((s=>this.di.add(s.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((r=>this.di.add(r.toString())))})).next((()=>i.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.di,(i=>{const s=K.fromPath(i);return this.mi(e,s).next((r=>{r||t.removeEntry(s,Y.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((i=>{i?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return L.or([()=>L.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class yo{constructor(e,t){this.persistence=e,this.fi=new ii((i=>ST(i.path)),((i,s)=>i.isEqual(s))),this.garbageCollector=B0(this,t)}static Vi(e,t){return new yo(e,t)}Ti(){}Ii(e){return L.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((s=>i+s))))}pr(e){let t=0;return this.mr(e,(i=>{t++})).next((()=>t))}mr(e,t){return L.forEach(this.fi,((i,s)=>this.wr(e,i,s).next((r=>r?L.resolve():t(s)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.ni(e,(o=>this.wr(e,o,t).next((c=>{c||(i++,r.removeEntry(o,Y.min()))})))).next((()=>r.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),L.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),L.resolve()}removeReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),L.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=jr(e.data.value)),t}wr(e,t,i){return L.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return L.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ml{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.Ts=i,this.Is=s}static Es(e,t){let i=se(),s=se();for(const r of t.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new ml(e,t.fromCache,i,s)}}/**
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
 */class eI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class tI{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Hy()?8:ET(je())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,s){const r={result:null};return this.gs(e,t).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ps(e,t,s,i).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new eI;return this.ys(e,t,o).next((c=>{if(r.result=c,this.As)return this.ws(e,t,o,c.size)}))})).next((()=>r.result))}ws(e,t,i,s){return i.documentReadCount<this.Vs?(ci()<=ee.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",li(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(ci()<=ee.DEBUG&&H("QueryEngine","Query:",li(t),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.ds*s?(ci()<=ee.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",li(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xt(t))):L.resolve())}gs(e,t){if(Xd(t))return L.resolve(null);let i=xt(t);return this.indexManager.getIndexType(e,i).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=pc(t,null,"F"),i=xt(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((r=>{const o=se(...r);return this.fs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,i).next((l=>{const d=this.bs(t,c);return this.Ss(t,d,o,l.readTime)?this.gs(e,pc(t,null,"F")):this.Ds(e,d,t,l)}))))})))))}ps(e,t,i,s){return Xd(t)||s.isEqual(Y.min())?L.resolve(null):this.fs.getDocuments(e,i).next((r=>{const o=this.bs(t,r);return this.Ss(t,o,i,s)?L.resolve(null):(ci()<=ee.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),li(t)),this.Ds(e,o,t,wT(s,Ds)).next((c=>c)))}))}bs(e,t){let i=new Ce(Vp(e));return t.forEach(((s,r)=>{Fo(e,r)&&(i=i.add(r))})),i}Ss(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ys(e,t,i){return ci()<=ee.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",li(t)),this.fs.getDocumentsMatchingQuery(e,t,kn.min(),i)}Ds(e,t,i,s){return this.fs.getDocumentsMatchingQuery(e,i,s).next((r=>(t.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
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
 */const gl="LocalStore",nI=3e8;class iI{constructor(e,t,i,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new be(te),this.Fs=new ii((r=>al(r)),cl),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(i)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new q0(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function sI(n,e,t,i){return new iI(n,e,t,i)}async function im(n,e){const t=ie(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next((r=>(s=r,t.Os(e),t.mutationQueue.getAllMutationBatches(i)))).next((r=>{const o=[],c=[];let l=se();for(const d of s){o.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}for(const d of r){c.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}return t.localDocuments.getDocuments(i,l).next((d=>({Ns:d,removedBatchIds:o,addedBatchIds:c})))}))}))}function sm(n){const e=ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function rI(n,e){const t=ie(n),i=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const c=[];e.targetChanges.forEach(((m,g)=>{const w=s.get(g);if(!w)return;c.push(t.li.removeMatchingKeys(r,m.removedDocuments,g).next((()=>t.li.addMatchingKeys(r,m.addedDocuments,g))));let E=w.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(g)!==null?E=E.withResumeToken(Me.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):m.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(m.resumeToken,i)),s=s.insert(g,E),(function(P,$,U){return P.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=nI?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0})(w,E,m)&&c.push(t.li.updateTargetData(r,E))}));let l=An(),d=se();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(r,m))})),c.push(oI(r,o,e.documentUpdates).next((m=>{l=m.Bs,d=m.Ls}))),!i.isEqual(Y.min())){const m=t.li.getLastRemoteSnapshotVersion(r).next((g=>t.li.setTargetsMetadata(r,r.currentSequenceNumber,i)));c.push(m)}return L.waitFor(c).next((()=>o.apply(r))).next((()=>t.localDocuments.getLocalViewOfDocuments(r,l,d))).next((()=>l))})).then((r=>(t.vs=s,r)))}function oI(n,e,t){let i=se(),s=se();return t.forEach((r=>i=i.add(r))),e.getEntries(n,i).next((r=>{let o=An();return t.forEach(((c,l)=>{const d=r.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(Y.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):H(gl,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)})),{Bs:o,Ls:s}}))}function aI(n,e){const t=ie(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let s;return t.li.getTargetData(i,e).next((r=>r?(s=r,L.resolve(s)):t.li.allocateTargetId(i).next((o=>(s=new gn(e,o,"TargetPurposeListen",i.currentSequenceNumber),t.li.addTargetData(i,s).next((()=>s)))))))})).then((i=>{const s=t.vs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(i.targetId,i),t.Fs.set(e,i.targetId)),i}))}async function wc(n,e,t){const i=ie(n),s=i.vs.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,(o=>i.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!ji(o))throw o;H(gl,`Failed to update sequence numbers for target ${e}: ${o}`)}i.vs=i.vs.remove(e),i.Fs.delete(s.target)}function dh(n,e,t){const i=ie(n);let s=Y.min(),r=se();return i.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,d,m){const g=ie(l),w=g.Fs.get(m);return w!==void 0?L.resolve(g.vs.get(w)):g.li.getTargetData(d,m)})(i,o,xt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(o,c.targetId).next((l=>{r=l}))})).next((()=>i.Cs.getDocumentsMatchingQuery(o,e,t?s:Y.min(),t?r:se()))).next((c=>(cI(i,JT(e),c),{documents:c,ks:r})))))}function cI(n,e,t){let i=n.Ms.get(e)||Y.min();t.forEach(((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)})),n.Ms.set(e,i)}class hh{constructor(){this.activeTargetIds=i0()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lI{constructor(){this.vo=new hh,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,i){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new hh,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class uI{Mo(e){}shutdown(){}}/**
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
 */const fh="ConnectivityMonitor";class ph{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){H(fh,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){H(fh,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Cr=null;function _c(){return Cr===null?Cr=(function(){return 268435456+Math.round(2147483648*Math.random())})():Cr++,"0x"+Cr.toString(16)}/**
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
 */const Na="RestConnection",dI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class hI{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${i}/databases/${s}`,this.$o=this.databaseId.database===ho?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(e,t,i,s,r){const o=_c(),c=this.Qo(e,t.toUriEncodedString());H(Na,`Sending RPC '${e}' ${o}:`,c,i);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,r);const{host:d}=new URL(c),m=Pn(d);return this.zo(e,c,l,i,m).then((g=>(H(Na,`Received RPC '${e}' ${o}: `,g),g)),(g=>{throw ei(Na,`RPC '${e}' ${o} failed with error: `,g,"url: ",c,"request:",i),g}))}jo(e,t,i,s,r,o){return this.Wo(e,t,i,s,r)}Go(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Bi})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,r)=>e[r]=s)),i&&i.headers.forEach(((s,r)=>e[r]=s))}Qo(e,t){const i=dI[e];let s=`${this.qo}/v1/${t}:${i}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class fI{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Ue="WebChannelConnection",us=(n,e,t)=>{n.listen(e,(i=>{try{t(i)}catch(s){setTimeout((()=>{throw s}),0)}}))};class vi extends hI{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!vi.c_){const e=_p();us(e,wp.STAT_EVENT,(t=>{t.stat===oc.PROXY?H(Ue,"STAT_EVENT: detected buffering proxy"):t.stat===oc.NOPROXY&&H(Ue,"STAT_EVENT: detected no buffering proxy")})),vi.c_=!0}}zo(e,t,i,s,r){const o=_c();return new Promise(((c,l)=>{const d=new yp;d.setWithCredentials(!0),d.listenOnce(vp.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Hr.NO_ERROR:const g=d.getResponseJson();H(Ue,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(g)),c(g);break;case Hr.TIMEOUT:H(Ue,`RPC '${e}' ${o} timed out`),l(new q(V.DEADLINE_EXCEEDED,"Request time out"));break;case Hr.HTTP_ERROR:const w=d.getStatus();if(H(Ue,`RPC '${e}' ${o} failed with status:`,w,"response text:",d.getResponseText()),w>0){let E=d.getResponseJson();Array.isArray(E)&&(E=E[0]);const A=E==null?void 0:E.error;if(A&&A.status&&A.message){const P=(function(U){const N=U.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(N)>=0?N:V.UNKNOWN})(A.status);l(new q(P,A.message))}else l(new q(V.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new q(V.UNAVAILABLE,"Connection failed."));break;default:J(9055,{l_:e,streamId:o,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{H(Ue,`RPC '${e}' ${o} completed.`)}}));const m=JSON.stringify(s);H(Ue,`RPC '${e}' ${o} sending request:`,s),d.send(t,"POST",m,i,15)}))}T_(e,t,i){const s=_c(),r=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,i),c.encodeInitMessageHeaders=!0;const d=r.join("");H(Ue,`Creating RPC '${e}' stream ${s}: ${d}`,c);const m=o.createWebChannel(d,c);this.I_(m);let g=!1,w=!1;const E=new fI({Ho:A=>{w?H(Ue,`Not sending because RPC '${e}' stream ${s} is closed:`,A):(g||(H(Ue,`Opening RPC '${e}' stream ${s} transport.`),m.open(),g=!0),H(Ue,`RPC '${e}' stream ${s} sending:`,A),m.send(A))},Jo:()=>m.close()});return us(m,gs.EventType.OPEN,(()=>{w||(H(Ue,`RPC '${e}' stream ${s} transport opened.`),E.i_())})),us(m,gs.EventType.CLOSE,(()=>{w||(w=!0,H(Ue,`RPC '${e}' stream ${s} transport closed`),E.o_(),this.E_(m))})),us(m,gs.EventType.ERROR,(A=>{w||(w=!0,ei(Ue,`RPC '${e}' stream ${s} transport errored. Name:`,A.name,"Message:",A.message),E.o_(new q(V.UNAVAILABLE,"The operation could not be completed")))})),us(m,gs.EventType.MESSAGE,(A=>{var P;if(!w){const $=A.data[0];pe(!!$,16349);const U=$,N=(U==null?void 0:U.error)||((P=U[0])==null?void 0:P.error);if(N){H(Ue,`RPC '${e}' stream ${s} received error:`,N);const M=N.status;let D=(function(b){const v=Te[b];if(v!==void 0)return Wp(v)})(M),F=N.message;M==="NOT_FOUND"&&F.includes("database")&&F.includes("does not exist")&&F.includes(this.databaseId.database)&&ei(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),D===void 0&&(D=V.INTERNAL,F="Unknown error status: "+M+" with message "+N.message),w=!0,E.o_(new q(D,F)),m.close()}else H(Ue,`RPC '${e}' stream ${s} received:`,$),E.__($)}})),vi.u_(),setTimeout((()=>{E.s_()}),0),E}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,i){super.Go(e,t,i),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return bp()}}/**
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
 */function pI(n){return new vi(n)}function Ma(){return typeof document<"u"?document:null}/**
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
 */function rm(n){return new b0(n,!0)}/**
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
 */vi.c_=!1;class om{constructor(e,t,i=1e3,s=1.5,r=6e4){this.Ci=e,this.timerId=t,this.R_=i,this.A_=s,this.V_=r,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-i);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const mh="PersistentStream";class mI{constructor(e,t,i,s,r,o,c,l){this.Ci=e,this.b_=i,this.S_=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new om(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(Gt(t.toString()),Gt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,s])=>{this.D_===t&&this.G_(i,s)}),(i=>{e((()=>{const s=new q(V.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(s)}))}))}G_(e,t){const i=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.Yo((()=>{i((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{i((()=>this.z_(s)))})),this.stream.onMessage((s=>{i((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return H(mh,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(H(mh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class gI extends mI{constructor(e,t,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=S0(this.serializer,e),i=(function(r){if(!("targetChange"in r))return Y.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?yi(o.readTime):Y.min()})(e);return this.listener.J_(t,i)}Z_(e){const t={};t.database=ah(this.serializer),t.addTarget=(function(r,o){let c;const l=o.target;if(c=fc(l)?{documents:C0(r,l)}:{query:R0(r,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=I0(r,o.resumeToken);const d=yc(r,o.expectedCount);d!==null&&(c.expectedCount=d)}else if(o.snapshotVersion.compareTo(Y.min())>0){c.readTime=T0(r,o.snapshotVersion.toTimestamp());const d=yc(r,o.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,e);const i=x0(this.serializer,e);i&&(t.labels=i),this.K_(t)}X_(e){const t={};t.database=ah(this.serializer),t.removeTarget=e,this.K_(t)}}/**
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
 */class yI{}class vI extends yI{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new q(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Wo(e,vc(t,i),s,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new q(V.UNKNOWN,r.toString())}))}jo(e,t,i,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.jo(e,vc(t,i),s,o,c,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(V.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function wI(n,e,t,i){return new vI(n,e,t,i)}class _I{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Gt(t),this.aa=!1):H("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const $i="RemoteStore";class bI{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=r,this.Aa.Mo((o=>{i.enqueueAndForget((async()=>{Zs(this)&&(H($i,"Restarting streams for network reachability change."),await(async function(l){const d=ie(l);d.Ea.add(4),await Xs(d),d.Va.set("Unknown"),d.Ea.delete(4),await zo(d)})(this))}))})),this.Va=new _I(i,s)}}async function zo(n){if(Zs(n))for(const e of n.Ra)await e(!0)}async function Xs(n){for(const e of n.Ra)await e(!1)}function am(n,e){const t=ie(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),_l(t)?wl(t):zi(t).O_()&&vl(t,e))}function yl(n,e){const t=ie(n),i=zi(t);t.Ia.delete(e),i.O_()&&cm(t,e),t.Ia.size===0&&(i.O_()?i.L_():Zs(t)&&t.Va.set("Unknown"))}function vl(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}zi(n).Z_(e)}function cm(n,e){n.da.$e(e),zi(n).X_(e)}function wl(n){n.da=new y0({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),zi(n).start(),n.Va.ua()}function _l(n){return Zs(n)&&!zi(n).x_()&&n.Ia.size>0}function Zs(n){return ie(n).Ea.size===0}function lm(n){n.da=void 0}async function TI(n){n.Va.set("Online")}async function II(n){n.Ia.forEach(((e,t)=>{vl(n,e)}))}async function EI(n,e){lm(n),_l(n)?(n.Va.ha(e),wl(n)):n.Va.set("Unknown")}async function kI(n,e,t){if(n.Va.set("Online"),e instanceof Kp&&e.state===2&&e.cause)try{await(async function(s,r){const o=r.cause;for(const c of r.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.da.removeTarget(c))})(n,e)}catch(i){H($i,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await gh(n,i)}else if(e instanceof qr?n.da.Xe(e):e instanceof Gp?n.da.st(e):n.da.tt(e),!t.isEqual(Y.min()))try{const i=await sm(n.localStore);t.compareTo(i)>=0&&await(function(r,o){const c=r.da.Tt(o);return c.targetChanges.forEach(((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const m=r.Ia.get(d);m&&r.Ia.set(d,m.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,d)=>{const m=r.Ia.get(l);if(!m)return;r.Ia.set(l,m.withResumeToken(Me.EMPTY_BYTE_STRING,m.snapshotVersion)),cm(r,l);const g=new gn(m.target,l,d,m.sequenceNumber);vl(r,g)})),r.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(i){H($i,"Failed to raise snapshot:",i),await gh(n,i)}}async function gh(n,e,t){if(!ji(e))throw e;n.Ea.add(1),await Xs(n),n.Va.set("Offline"),t||(t=()=>sm(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{H($i,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await zo(n)}))}async function yh(n,e){const t=ie(n);t.asyncQueue.verifyOperationInProgress(),H($i,"RemoteStore received new credentials");const i=Zs(t);t.Ea.add(3),await Xs(t),i&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await zo(t)}async function SI(n,e){const t=ie(n);e?(t.Ea.delete(2),await zo(t)):e||(t.Ea.add(2),await Xs(t),t.Va.set("Unknown"))}function zi(n){return n.ma||(n.ma=(function(t,i,s){const r=ie(t);return r.sa(),new gI(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Zo:TI.bind(null,n),Yo:II.bind(null,n),t_:EI.bind(null,n),J_:kI.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),_l(n)?wl(n):n.Va.set("Unknown")):(await n.ma.stop(),lm(n))}))),n.ma}/**
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
 */class bl{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new gi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,r){const o=Date.now()+i,c=new bl(e,t,o,s,r);return c.start(i),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function um(n,e){if(Gt("AsyncQueue",`${e}: ${n}`),ji(n))return new q(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class wi{static emptySet(e){return new wi(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||K.comparator(t.key,i.key):(t,i)=>K.comparator(t.key,i.key),this.keyedMap=ys(),this.sortedSet=new be(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof wi)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class vh{constructor(){this.ga=new be(K.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):J(63341,{Vt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Li{constructor(e,t,i,s,r,o,c,l,d){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,i,s,r){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new Li(e,t,wi.emptySet(t),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Uo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
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
 */class CI{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class RI{constructor(){this.queries=wh(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const s=ie(t),r=s.queries;s.queries=wh(),r.forEach(((o,c)=>{for(const l of c.ba)l.onError(i)}))})(this,new q(V.ABORTED,"Firestore shutting down"))}}function wh(){return new ii((n=>Op(n)),Uo)}async function AI(n,e){const t=ie(n);let i=3;const s=e.query;let r=t.queries.get(s);r?!r.Sa()&&e.Da()&&(i=2):(r=new CI,i=e.Da()?0:1);try{switch(i){case 0:r.wa=await t.onListen(s,!0);break;case 1:r.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=um(o,`Initialization of query '${li(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,r),r.ba.push(e),e.va(t.onlineState),r.wa&&e.Fa(r.wa)&&Tl(t)}async function xI(n,e){const t=ie(n),i=e.query;let s=3;const r=t.queries.get(i);if(r){const o=r.ba.indexOf(e);o>=0&&(r.ba.splice(o,1),r.ba.length===0?s=e.Da()?0:1:!r.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function PI(n,e){const t=ie(n);let i=!1;for(const s of e){const r=s.query,o=t.queries.get(r);if(o){for(const c of o.ba)c.Fa(s)&&(i=!0);o.wa=s}}i&&Tl(t)}function $I(n,e,t){const i=ie(n),s=i.queries.get(e);if(s)for(const r of s.ba)r.onError(t);i.queries.delete(e)}function Tl(n){n.Ca.forEach((e=>{e.next()}))}var bc,_h;(_h=bc||(bc={})).Ma="default",_h.Cache="cache";class LI{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Li(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.Ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Li.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==bc.Cache}}/**
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
 */class dm{constructor(e){this.key=e}}class hm{constructor(e){this.key=e}}class DI{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=se(),this.mutatedKeys=se(),this.eu=Vp(e),this.tu=new wi(this.eu)}get nu(){return this.Za}ru(e,t){const i=t?t.iu:new vh,s=t?t.tu:this.tu;let r=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((m,g)=>{const w=s.get(m),E=Fo(this.query,g)?g:null,A=!!w&&this.mutatedKeys.has(w.key),P=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let $=!1;w&&E?w.data.isEqual(E.data)?A!==P&&(i.track({type:3,doc:E}),$=!0):this.su(w,E)||(i.track({type:2,doc:E}),$=!0,(l&&this.eu(E,l)>0||d&&this.eu(E,d)<0)&&(c=!0)):!w&&E?(i.track({type:0,doc:E}),$=!0):w&&!E&&(i.track({type:1,doc:w}),$=!0,(l||d)&&(c=!0)),$&&(E?(o=o.add(E),r=P?r.add(m):r.delete(m)):(o=o.delete(m),r=r.delete(m)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const m=this.query.limitType==="F"?o.last():o.first();o=o.delete(m.key),r=r.delete(m.key),i.track({type:1,doc:m})}return{tu:o,iu:i,Ss:c,mutatedKeys:r}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,s){const r=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((m,g)=>(function(E,A){const P=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J(20277,{Vt:$})}};return P(E)-P(A)})(m.type,g.type)||this.eu(m.doc,g.doc))),this.ou(i),s=s??!1;const c=t&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,d=l!==this.Xa;return this.Xa=l,o.length!==0||d?{snapshot:new Li(this.query,e.tu,r,o,e.mutatedKeys,l===0,d,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new vh,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=se(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Ya=this.Ya.add(i.key))}));const t=[];return e.forEach((i=>{this.Ya.has(i)||t.push(new hm(i))})),this.Ya.forEach((i=>{e.has(i)||t.push(new dm(i))})),t}cu(e){this.Za=e.ks,this.Ya=se();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Li.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Il="SyncEngine";class NI{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class MI{constructor(e){this.key=e,this.hu=!1}}class OI{constructor(e,t,i,s,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ii((c=>Op(c)),Uo),this.Iu=new Map,this.Eu=new Set,this.Ru=new be(K.comparator),this.Au=new Map,this.Vu=new fl,this.du={},this.mu=new Map,this.fu=Pi.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function VI(n,e,t=!0){const i=ym(n);let s;const r=i.Tu.get(e);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.lu()):s=await fm(i,e,t,!0),s}async function UI(n,e){const t=ym(n);await fm(t,e,!0,!1)}async function fm(n,e,t,i){const s=await aI(n.localStore,xt(e)),r=s.targetId,o=n.sharedClientState.addLocalQueryTarget(r,t);let c;return i&&(c=await FI(n,e,r,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&am(n.remoteStore,s),c}async function FI(n,e,t,i,s){n.pu=(g,w,E)=>(async function(P,$,U,N){let M=$.view.ru(U);M.Ss&&(M=await dh(P.localStore,$.query,!1).then((({documents:b})=>$.view.ru(b,M))));const D=N&&N.targetChanges.get($.targetId),F=N&&N.targetMismatches.get($.targetId)!=null,B=$.view.applyChanges(M,P.isPrimaryClient,D,F);return Th(P,$.targetId,B.au),B.snapshot})(n,g,w,E);const r=await dh(n.localStore,e,!0),o=new DI(e,r.ks),c=o.ru(r.documents),l=Js.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),d=o.applyChanges(c,n.isPrimaryClient,l);Th(n,t,d.au);const m=new NI(e,t,o);return n.Tu.set(e,m),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function HI(n,e,t){const i=ie(n),s=i.Tu.get(e),r=i.Iu.get(s.targetId);if(r.length>1)return i.Iu.set(s.targetId,r.filter((o=>!Uo(o,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await wc(i.localStore,s.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(s.targetId),t&&yl(i.remoteStore,s.targetId),Tc(i,s.targetId)})).catch(Do)):(Tc(i,s.targetId),await wc(i.localStore,s.targetId,!0))}async function BI(n,e){const t=ie(n),i=t.Tu.get(e),s=t.Iu.get(i.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),yl(t.remoteStore,i.targetId))}async function pm(n,e){const t=ie(n);try{const i=await rI(t.localStore,e);e.targetChanges.forEach(((s,r)=>{const o=t.Au.get(r);o&&(pe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?pe(o.hu,14607):s.removedDocuments.size>0&&(pe(o.hu,42227),o.hu=!1))})),await gm(t,i,e)}catch(i){await Do(i)}}function bh(n,e,t){const i=ie(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.Tu.forEach(((r,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=ie(o);l.onlineState=c;let d=!1;l.queries.forEach(((m,g)=>{for(const w of g.ba)w.va(c)&&(d=!0)})),d&&Tl(l)})(i.eventManager,e),s.length&&i.Pu.J_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function jI(n,e,t){const i=ie(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.Au.get(e),r=s&&s.key;if(r){let o=new be(K.comparator);o=o.insert(r,Be.newNoDocument(r,Y.min()));const c=se().add(r),l=new jo(Y.min(),new Map,new be(te),o,c);await pm(i,l),i.Ru=i.Ru.remove(r),i.Au.delete(e),El(i)}else await wc(i.localStore,e,!1).then((()=>Tc(i,e,t))).catch(Do)}function Tc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Iu.get(e))n.Tu.delete(i),t&&n.Pu.yu(i,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((i=>{n.Vu.containsKey(i)||mm(n,i)}))}function mm(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(yl(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),El(n))}function Th(n,e,t){for(const i of t)i instanceof dm?(n.Vu.addReference(i.key,e),zI(n,i)):i instanceof hm?(H(Il,"Document no longer in limbo: "+i.key),n.Vu.removeReference(i.key,e),n.Vu.containsKey(i.key)||mm(n,i.key)):J(19791,{wu:i})}function zI(n,e){const t=e.key,i=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(i)||(H(Il,"New document in limbo: "+t),n.Eu.add(i),El(n))}function El(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new K(fe.fromString(e)),i=n.fu.next();n.Au.set(i,new MI(t)),n.Ru=n.Ru.insert(t,i),am(n.remoteStore,new gn(xt(ll(t.path)),i,"TargetPurposeLimboResolution",No.ce))}}async function gm(n,e,t){const i=ie(n),s=[],r=[],o=[];i.Tu.isEmpty()||(i.Tu.forEach(((c,l)=>{o.push(i.pu(l,e,t).then((d=>{var m;if((d||t)&&i.isPrimaryClient){const g=d?!d.fromCache:(m=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:m.current;i.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(d){s.push(d);const g=ml.Es(l.targetId,d);r.push(g)}})))})),await Promise.all(o),i.Pu.J_(s),await(async function(l,d){const m=ie(l);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>L.forEach(d,(w=>L.forEach(w.Ts,(E=>m.persistence.referenceDelegate.addReference(g,w.targetId,E))).next((()=>L.forEach(w.Is,(E=>m.persistence.referenceDelegate.removeReference(g,w.targetId,E)))))))))}catch(g){if(!ji(g))throw g;H(gl,"Failed to update sequence numbers: "+g)}for(const g of d){const w=g.targetId;if(!g.fromCache){const E=m.vs.get(w),A=E.snapshotVersion,P=E.withLastLimboFreeSnapshotVersion(A);m.vs=m.vs.insert(w,P)}}})(i.localStore,r))}async function qI(n,e){const t=ie(n);if(!t.currentUser.isEqual(e)){H(Il,"User change. New user:",e.toKey());const i=await im(t.localStore,e);t.currentUser=e,(function(r,o){r.mu.forEach((c=>{c.forEach((l=>{l.reject(new q(V.CANCELLED,o))}))})),r.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await gm(t,i.Ns)}}function WI(n,e){const t=ie(n),i=t.Au.get(e);if(i&&i.hu)return se().add(i.key);{let s=se();const r=t.Iu.get(e);if(!r)return s;for(const o of r){const c=t.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function ym(n){const e=ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=pm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=WI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jI.bind(null,e),e.Pu.J_=PI.bind(null,e.eventManager),e.Pu.yu=$I.bind(null,e.eventManager),e}class vo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=rm(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return sI(this.persistence,new tI,e.initialUser,this.serializer)}Cu(e){return new nm(pl.Vi,this.serializer)}Du(e){return new lI}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vo.provider={build:()=>new vo};class GI extends vo{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){pe(this.persistence.referenceDelegate instanceof yo,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new F0(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Qe.withCacheSize(this.cacheSizeBytes):Qe.DEFAULT;return new nm((i=>yo.Vi(i,t)),this.serializer)}}class Ic{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>bh(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=qI.bind(null,this.syncEngine),await SI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new RI})()}createDatastore(e){const t=rm(e.databaseInfo.databaseId),i=pI(e.databaseInfo);return wI(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,s,r,o,c){return new bI(i,s,r,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>bh(this.syncEngine,t,0)),(function(){return ph.v()?new ph:new uI})())}createSyncEngine(e,t){return(function(s,r,o,c,l,d,m){const g=new OI(s,r,o,c,l,d);return m&&(g.gu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const r=ie(s);H($i,"RemoteStore shutting down."),r.Ea.add(5),await Xs(r),r.Aa.shutdown(),r.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Ic.provider={build:()=>new Ic};/**
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
 */class KI{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Gt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const xn="FirestoreClient";class QI{constructor(e,t,i,s,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this._databaseInfo=s,this.user=Fe.UNAUTHENTICATED,this.clientId=Ep.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,(async o=>{H(xn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(i,(o=>(H(xn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=um(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function Oa(n,e){n.asyncQueue.verifyOperationInProgress(),H(xn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async s=>{i.isEqual(s)||(await im(e.localStore,s),i=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Ih(n,e){n.asyncQueue.verifyOperationInProgress();const t=await YI(n);H(xn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>yh(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,s)=>yh(e.remoteStore,s))),n._onlineComponents=e}async function YI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){H(xn,"Using user provided OfflineComponentProvider");try{await Oa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;ei("Error using user provided cache. Falling back to memory cache: "+t),await Oa(n,new vo)}}else H(xn,"Using default OfflineComponentProvider"),await Oa(n,new GI(void 0));return n._offlineComponents}async function JI(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(H(xn,"Using user provided OnlineComponentProvider"),await Ih(n,n._uninitializedComponentsProvider._online)):(H(xn,"Using default OnlineComponentProvider"),await Ih(n,new Ic))),n._onlineComponents}async function Eh(n){const e=await JI(n),t=e.eventManager;return t.onListen=VI.bind(null,e.syncEngine),t.onUnlisten=HI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=UI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=BI.bind(null,e.syncEngine),t}function XI(n,e,t,i){const s=new KI(i),r=new LI(e,s,t);return n.asyncQueue.enqueueAndForget((async()=>AI(await Eh(n),r))),()=>{s.Nu(),n.asyncQueue.enqueueAndForget((async()=>xI(await Eh(n),r)))}}/**
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
 */function vm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const ZI="ComponentProvider",kh=new Map;function eE(n,e,t,i,s){return new xT(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,vm(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,i)}/**
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
 */const wm="firestore.googleapis.com",Sh=!0;class Ch{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new q(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=wm,this.ssl=Sh}else this.host=e.host,this.ssl=e.ssl??Sh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=tm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<V0)throw new q(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}gT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vm(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class kl{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ch({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ch(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new rT;switch(i.type){case"firstParty":return new lT(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new q(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=kh.get(t);i&&(H(ZI,"Removing Datastore"),kh.delete(t),i.terminate())})(this),Promise.resolve()}}function tE(n,e,t,i={}){var d;n=Br(n,kl);const s=Pn(e),r=n._getSettings(),o={...r,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(Vc(`https://${c}`),Uc("Firestore",!0)),r.host!==wm&&r.host!==c&&ei("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...r,host:c,ssl:s,emulatorOptions:i};if(!Qn(l,o)&&(n._setSettings(l),i.mockUserToken)){let m,g;if(typeof i.mockUserToken=="string")m=i.mockUserToken,g=Fe.MOCK_USER;else{m=pf(i.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const w=i.mockUserToken.sub||i.mockUserToken.user_id;if(!w)throw new q(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Fe(w)}n._authCredentials=new oT(new Ip(m,g))}}/**
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
 */class qo{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new qo(this.firestore,e,this._query)}}class et{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _i(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new et(this.firestore,e,this._key)}toJSON(){return{type:et._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(Qs(t,et._jsonSchema))return new et(e,i||null,new K(fe.fromString(t.referencePath)))}}et._jsonSchemaVersion="firestore/documentReference/1.0",et._jsonSchema={type:Ee("string",et._jsonSchemaVersion),referencePath:Ee("string")};class _i extends qo{constructor(e,t,i){super(e,t,ll(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new et(this.firestore,null,new K(e))}withConverter(e){return new _i(this.firestore,e,this._path)}}function nn(n,e,...t){if(n=Le(n),mT("collection","path",e),n instanceof kl){const i=fe.fromString(e,...t);return Ud(i),new _i(n,null,i)}{if(!(n instanceof et||n instanceof _i))throw new q(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(fe.fromString(e,...t));return Ud(i),new _i(n.firestore,null,i)}}/**
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
 */const Rh="AsyncQueue";class Ah{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new om(this,"async_queue_retry"),this._c=()=>{const i=Ma();i&&H(Rh,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=Ma();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Ma();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new gi;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!ji(e))throw e;H(Rh,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,Gt("INTERNAL UNHANDLED ERROR: ",xh(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=bl.createAndSchedule(this,e,t,i,(r=>this.hc(r)));return this.tc.push(s),s}uc(){this.nc&&J(47125,{Pc:xh(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function xh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Ec extends kl{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new Ah,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ah(e),this._firestoreClient=void 0,await e}}}function nE(n,e){const t=typeof n=="object"?n:Bc(),i=typeof n=="string"?n:ho,s=Co(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=df("firestore");r&&tE(s,...r)}return s}function iE(n){if(n._terminated)throw new q(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||sE(n),n._firestoreClient}function sE(n){var i,s,r,o;const e=n._freezeSettings(),t=eE(n._databaseId,((i=n._app)==null?void 0:i.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(r=e.localCache)!=null&&r._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new QI(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(l){const d=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(d),_online:d}})(n._componentsProvider))}/**
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
 */class It{constructor(e){this._byteString=e}static fromBase64String(e){try{return new It(Me.fromBase64String(e))}catch(t){throw new q(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new It(Me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:It._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Qs(e,It._jsonSchema))return It.fromBase64String(e.bytes)}}It._jsonSchemaVersion="firestore/bytes/1.0",It._jsonSchema={type:Ee("string",It._jsonSchemaVersion),bytes:Ee("string")};/**
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
 */class _m{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new q(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class _n{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new q(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new q(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:_n._jsonSchemaVersion}}static fromJSON(e){if(Qs(e,_n._jsonSchema))return new _n(e.latitude,e.longitude)}}_n._jsonSchemaVersion="firestore/geoPoint/1.0",_n._jsonSchema={type:Ee("string",_n._jsonSchemaVersion),latitude:Ee("number"),longitude:Ee("number")};/**
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
 */class bn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0})(this._values,e._values)}toJSON(){return{type:bn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Qs(e,bn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new bn(e.vectorValues);throw new q(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}bn._jsonSchemaVersion="firestore/vectorValue/1.0",bn._jsonSchema={type:Ee("string",bn._jsonSchemaVersion),vectorValues:Ee("object")};function bm(n,e,t){if((e=Le(e))instanceof _m)return e._internalPath;if(typeof e=="string")return oE(n,e);throw kc("Field path arguments must be of type string or ",n)}const rE=new RegExp("[~\\*/\\[\\]]");function oE(n,e,t){if(e.search(rE)>=0)throw kc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new _m(...e.split("."))._internalPath}catch{throw kc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function kc(n,e,t,i,s){let r=`Function ${e}() called with invalid data`;r+=". ";let o="";return new q(V.INVALID_ARGUMENT,r+n+o)}/**
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
 */class aE{convertValue(e,t="none"){switch(Rn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Cn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw J(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Ys(e,((s,r)=>{i[s]=this.convertValue(r,t)})),i}convertVectorValue(e){var i,s,r;const t=(r=(s=(i=e.fields)==null?void 0:i[lc].arrayValue)==null?void 0:s.values)==null?void 0:r.map((o=>_e(o.doubleValue)));return new bn(t)}convertGeoPoint(e){return new _n(_e(e.latitude),_e(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Oo(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Ns(e));default:return null}}convertTimestamp(e){const t=Sn(e);return new Ie(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=fe.fromString(e);pe(em(i),9688,{name:e});const s=new Ms(i.get(1),i.get(3)),r=new K(i.popFirst(5));return s.isEqual(t)||Gt(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */class Tm extends aE{constructor(e){super(),this.firestore=e}convertBytes(e){return new It(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new et(this.firestore,null,t)}}const Ph="@firebase/firestore",$h="4.12.0";/**
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
 */function Lh(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1})(n,["next","error","complete"])}/**
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
 */class Im{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(bm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class cE extends Im{data(){return super.data()}}/**
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
 */function lE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new q(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ws{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Wn extends Im{constructor(e,t,i,s,r,o){super(e,t,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Wr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(bm("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Wn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Wn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Wn._jsonSchema={type:Ee("string",Wn._jsonSchemaVersion),bundleSource:Ee("string","DocumentSnapshot"),bundleName:Ee("string"),bundle:Ee("string")};class Wr extends Wn{data(e={}){return super.data(e)}}class bi{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ws(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new Wr(this._firestore,this._userDataWriter,i.key,i,new ws(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new q(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new Wr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ws(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>r||c.type!==3)).map((c=>{const l=new Wr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ws(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return c.type!==0&&(d=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),m=o.indexOf(c.doc.key)),{type:uE(c.type),doc:l,oldIndex:d,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=bi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ep.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],s=[];return this.docs.forEach((r=>{r._document!==null&&(t.push(r._document),i.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),s.push(r.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function uE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J(61501,{type:n})}}/**
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
 */bi._jsonSchemaVersion="firestore/querySnapshot/1.0",bi._jsonSchema={type:Ee("string",bi._jsonSchemaVersion),bundleSource:Ee("string","QuerySnapshot"),bundleName:Ee("string"),bundle:Ee("string")};function sn(n,...e){var d,m,g;n=Le(n);let t={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||Lh(e[i])||(t=e[i++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Lh(e[i])){const w=e[i];e[i]=(d=w.next)==null?void 0:d.bind(w),e[i+1]=(m=w.error)==null?void 0:m.bind(w),e[i+2]=(g=w.complete)==null?void 0:g.bind(w)}let r,o,c;if(n instanceof et)o=Br(n.firestore,Ec),c=ll(n._key.path),r={next:w=>{e[i]&&e[i](dE(o,n,w))},error:e[i+1],complete:e[i+2]};else{const w=Br(n,qo);o=Br(w.firestore,Ec),c=w._query;const E=new Tm(o);r={next:A=>{e[i]&&e[i](new bi(o,E,w,A))},error:e[i+1],complete:e[i+2]},lE(n._query)}const l=iE(o);return XI(l,c,s,r)}function dE(n,e,t){const i=t.docs.get(e._key),s=new Tm(n);return new Wn(n,s,e._key,i,new ws(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){sT(ni),Yn(new En("firestore",((i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),c=new Ec(new aT(i.getProvider("auth-internal")),new uT(o,i.getProvider("app-check-internal")),PT(o,s),o);return r={useFetchStreams:t,...r},c._setSettings(r),c}),"PUBLIC").setMultipleInstances(!0)),Ct(Ph,$h,e),Ct(Ph,$h,"esm2020")})();const rn=nE(Zc);let wt=[];function hE(n){if(Em(),!n)return;const e=t=>t.docs.map(i=>({id:i.id,...i.data()}));wt.push(sn(nn(rn,`households/${n}/inventory`),t=>{var i,s;u.inv=e(t),ce("synced"),(i=j.renderAll)==null||i.call(j),(s=j.renderSum)==null||s.call(j)},t=>{console.warn("realtime inv error:",t),ce("error")})),wt.push(sn(nn(rn,`households/${n}/shopping`),t=>{var i,s;u.shop=e(t),ce("synced"),(i=j.renderShop)==null||i.call(j),(s=j.renderSum)==null||s.call(j)},t=>{console.warn("realtime shop error:",t),ce("error")})),wt.push(sn(nn(rn,`households/${n}/recipes`),t=>{var i,s;u.recs=e(t),ce("synced"),(i=j.renderRecs)==null||i.call(j),(s=j.renderSum)==null||s.call(j)},t=>{console.warn("realtime recs error:",t),ce("error")})),wt.push(sn(nn(rn,`households/${n}/mealplan`),t=>{const i={};e(t).forEach(s=>{s.date&&s.meal&&(i[s.date]=s.meal)}),u.mp=i,ce("synced")},t=>{console.warn("realtime mp error:",t)})),wt.push(sn(nn(rn,`households/${n}/settings`),t=>{const i=e(t).find(s=>s.id==="config");i&&(u.cfg={...eo,...i})},t=>{console.warn("realtime settings error:",t)})),wt.push(sn(nn(rn,`households/${n}/cooklog`),t=>{u.cookLog=e(t).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},t=>{console.warn("realtime cooklog error:",t)})),wt.push(sn(nn(rn,`households/${n}/wastelog`),t=>{u.wasteLog=e(t).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},t=>{console.warn("realtime wastelog error:",t)})),wt.push(sn(nn(rn,`households/${n}/activity`),t=>{var i;u.activity=e(t).sort((s,r)=>new Date(r.timestamp||0)-new Date(s.timestamp||0)).slice(0,10),(i=j.renderAll)==null||i.call(j)},t=>{console.warn("realtime activity error:",t)})),ce("synced"),console.log("[realtime] Listeners started for household:",n)}function Em(){wt.forEach(n=>{try{n()}catch{}}),wt=[],console.log("[realtime] All listeners stopped")}const km=["Piece","Unit","Pack","Box","Bag","Bottle","Jar","Can","Bunch","Head","Loaf","Dozen","Carton","Tube","Roll","Gallon","Half Gallon","Liter","Pound","Oz","Clove"];function Sm(n){if(!n.brand)return!1;if(n.source==="scan"||n.source==="Barcode")return!0;if(n.source==="search"&&n.searchQuery){const e=n.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),t=n.brand.toLowerCase();return e.some(i=>t.includes(i))}return!1}function fE(n){of[Oi(n)];const e=$t(n.expiry),t=e?e.c==="expired"?" expired":e.c==="expiring"?" expiring":"":"",i=e?`<div class="etag ${e.c}">${e.l}</div>`:"",s=Sm(n)?`<div class="sh-brand">${n.brand}</div>`:"";return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="inv">
    <div class="swipe-inner">
      <div class="iit${t}" onclick="swipeRowTap('${n.id}','inv')">
        <div class="sel-cb">✓</div>
        <!-- Slim outlined circle: tapping opens detail sheet -->
        <div class="shck" onclick="event.stopPropagation();openInvItemDetail('${n.id}')"></div>
        <div style="flex:1;min-width:0;cursor:pointer" onclick="event.stopPropagation();openInvItemDetail('${n.id}')">
          <div class="inm">${Re(n.name)}</div>
          ${s}
          ${n.note?`<div class="shnote" style="margin-top:2px">📝 ${n.note}</div>`:""}
          ${i}
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div class="iqt">${ki(n.qty)}</div>
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
  </div>`}function er(){const n=(r,o)=>r.name.localeCompare(o.name,void 0,{sensitivity:"base"}),e=u.it==="all"?u.inv.slice().sort(n):u.inv.filter(r=>r.location===u.it).slice().sort(n),t=f("isub"),i={all:"items",fridge:"fridge items",freezer:"frozen items",pantry:"pantry items",household:"household items"};t&&(t.textContent=e.length+" "+(i[u.it]||"items")),zm();const s=f("ibody");if(s){if(!e.length){s.innerHTML='<div class="es"><div class="ei">🧺</div><p>No items here yet.<br/>Tap + Add item to get started.</p></div>';return}s.innerHTML=`<div class="ilst">${e.map(fE).join("")}</div>`,u.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(r=>{r.classList.add("selecting"),u.selectedIds.has(r.dataset.id)&&r.classList.add("selected")})}}function pE(n){tr(n)}async function tr(n){if(u.selectMode)return;const e=u.inv.find(N=>N.id===n);if(!e)return;const t=f("invItemDetailContent");if(!t)return;const s=`<div class="item-detail-img-ph" style="display:flex;align-items:center;justify-content:center">
    <div style="font-size:1.6rem">${of[Oi(e)]||"🛒"}</div>
  </div>`,r="",o=Sm(e),c=e.unit||"Unit",l=km.map(N=>`<option value="${N}"${N===c?" selected":""}>${N}</option>`).join(""),d=e.restockThreshold!=null?e.restockThreshold:Nl(c),m=$t(e.expiry);let g=`<div class="item-detail-header">
    <div>${s}${r}</div>
    <div style="flex:1;min-width:0">
      <div class="item-detail-name">${Re(e.name)}</div>
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
  </div>`;const{whole:w,frac:E}=to(e.qty);g+=`<div class="item-detail-section">
    <div class="item-detail-label">Quantity</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeInvQty('${e.id}',-1)">−</button>
        <input class="qinp" id="inv-qty-${e.id}" type="number" min="0" max="99" value="${w}" style="width:48px;text-align:center" onblur="changeInvQtyDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeInvQty('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${Ka(`inv-frac-${e.id}`,E).replace("<select",`<select onchange="changeInvFrac('`+e.id+`')"`)}
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
      ${m?`<div class="etag ${m.c}" style="margin-top:6px">${m.l}</div>`:""}
    </div>`:g+=`<div class="item-detail-section">
      <div class="item-detail-label">Expiry Date <span class="otag">optional</span></div>
      <div style="display:flex;align-items:center;gap:10px">
        <span class="inv-no-expiry-badge">No expiry set</span>
        <button class="inv-set-expiry-btn" onclick="setInvExpiry('${e.id}')">Set expiry</button>
      </div>
    </div>`,g+=`<div class="item-detail-section">
    <div class="item-detail-label">Notes <span class="otag">optional</span></div>
    <textarea class="sh-note-inp" id="inv-note-${e.id}" rows="2" placeholder="Brand, store, reminders…" onblur="changeInvNote('${e.id}')">${e.note||""}</textarea>
  </div>`;const{whole:A,frac:P}=to(d);g+=`<div class="item-detail-section">
    <div class="item-detail-label">Restock when below</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeInvThreshold('${e.id}',-1)">−</button>
        <input class="qinp" id="inv-thresh-${e.id}" type="number" min="0" max="99" value="${A}" style="width:48px;text-align:center" onblur="changeInvThresholdDirect('${e.id}')"/>
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
  <button class="btn bd bf" onclick="closeInvItemDetail();remItem('${e.id}')" style="margin-top:8px">Remove</button>`,t.innerHTML=g;const $=f("invItemDetailBackdrop"),U=f("invItemDetailSheet");$&&$.classList.add("active"),U&&U.classList.add("active")}function Cm(){const n=f("invItemDetailBackdrop"),e=f("invItemDetailSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}async function mE(n){}function gE(n){}async function yE(n){}async function vE(n){const e=u.inv.find(t=>t.id===n);if(e){const t=$t(e.expiry);t&&(t.c==="expired"||t.c==="expiring")&&await Vb(e.name)}await Lo(n),S("Item removed"),ge("adj")}async function wE(n,e){const t=u.inv.find(i=>i.id===u.adjId);t&&(document.querySelectorAll("#adjbody .lbtn").forEach(i=>i.classList.remove("sel")),e.classList.add("sel"),await oe({...t,location:n}),Cl(t.name,n))}async function _E(n){const e=u.inv.find(i=>i.id===u.adjId);if(!e)return;const t=Math.max(0,(e.qty||1)+n);t<=0||(f("adjqty").value=t,await oe({...e,qty:t}))}async function bE(){const n=u.inv.find(t=>t.id===u.adjId);if(!n)return;const e=parseInt(f("adjqty").value);!isNaN(e)&&e>=0&&await oe({...n,qty:e})}async function TE(){const n=u.inv.find(e=>e.id===u.adjId);n&&await oe({...n,expiry:f("adjexp").value||null})}async function IE(){const n=u.inv.find(t=>t.id===u.adjId);if(!n)return;const e=(f("adjnote").value||"").trim();await oe({...n,note:e||null})}async function EE(){const n=u.inv.find(i=>i.id===u.adjId);if(!n)return;const e=f("adjunit").value;await oe({...n,unit:e}),Rl(n.name,e);const t=u.shop.find(i=>i.name.toLowerCase().trim()===n.name.toLowerCase().trim());t&&await Ye({...t,unit:e}),S("Unit updated everywhere",2e3)}async function kE(n){const e=u.inv.find(s=>s.id===u.adjId);if(!e)return;const t=e.restockThreshold!=null?e.restockThreshold:Nl(e.unit),i=Math.max(0,t+n);f("adjlowthresh").value=i,await oe({...e,restockThreshold:i})}async function SE(){const n=u.inv.find(t=>t.id===u.adjId);if(!n)return;const e=parseInt(f("adjlowthresh").value);!isNaN(e)&&e>=0&&await oe({...n,restockThreshold:e})}async function CE(){var t;const n=u.inv.find(i=>i.id===u.adjId);if(!n)return;const e=((t=f("adjdonotrestock"))==null?void 0:t.checked)||!1;await oe({...n,doNotRestock:e})}async function RE(n,e){const t=u.inv.find(r=>r.id===n);if(!t)return;const i={...t,unit:e};t.restockThreshold==null,await oe(i),Rl(t.name,e);const s=u.shop.find(r=>r.name.toLowerCase().trim()===t.name.toLowerCase().trim());s&&await Ye({...s,unit:e}),S("Unit updated everywhere",2e3),tr(n)}async function AE(n,e){const t=u.inv.find(d=>d.id===n);if(!t)return;const i=f(`inv-thresh-${n}`),s=f(`inv-threshfrac-${n}`),r=parseInt(i==null?void 0:i.value,10)||0,o=parseFloat(s==null?void 0:s.value)||0,c=Math.max(0,r+e),l=c+o;i&&(i.value=c),await oe({...t,restockThreshold:Math.max(0,l)})}async function xE(n){const e=u.inv.find(o=>o.id===n);if(!e)return;const t=f(`inv-thresh-${n}`),i=f(`inv-threshfrac-${n}`),s=parseInt(t==null?void 0:t.value,10),r=parseFloat(i==null?void 0:i.value)||0;isNaN(s)||s<0||await oe({...e,restockThreshold:Math.max(0,s+r)})}async function PE(n){const e=u.inv.find(o=>o.id===n);if(!e)return;const t=f(`inv-thresh-${n}`),i=f(`inv-threshfrac-${n}`),s=parseInt(t==null?void 0:t.value,10)||0,r=parseFloat(i==null?void 0:i.value)||0;await oe({...e,restockThreshold:Math.max(0,s+r)})}async function $E(n,e){const t=u.inv.find(i=>i.id===n);t&&await oe({...t,doNotRestock:e})}async function LE(n,e,t){const i=u.inv.find(r=>r.id===n);if(!i)return;const s=f("invItemDetailContent");s&&s.querySelectorAll(".lbtn").forEach(r=>r.classList.remove("sel")),t&&t.classList.add("sel"),await oe({...i,location:e}),Cl(i.name,e)}async function DE(n,e){const t=u.inv.find(d=>d.id===n);if(!t)return;const i=f(`inv-qty-${n}`),s=f(`inv-frac-${n}`),r=parseInt(i==null?void 0:i.value,10)||0,o=parseFloat(s==null?void 0:s.value)||0,c=Math.max(0,Math.min(99,r+e)),l=In(c,o);e<0&&In(r,o)<=.25||(i&&(i.value=Math.floor(l)),c===0&&o===0&&s&&(s.value="0.25"),await oe({...t,qty:l}))}async function NE(n){const e=u.inv.find(c=>c.id===n);if(!e)return;const t=f(`inv-qty-${n}`),i=f(`inv-frac-${n}`),s=parseInt(t==null?void 0:t.value,10),r=parseFloat(i==null?void 0:i.value)||0;if(isNaN(s)||s<0)return;const o=In(s,r);await oe({...e,qty:o})}async function ME(n){const e=u.inv.find(c=>c.id===n);if(!e)return;const t=f(`inv-qty-${n}`),i=f(`inv-frac-${n}`),s=parseInt(t==null?void 0:t.value,10)||0,r=parseFloat(i==null?void 0:i.value)||0,o=In(s,r);r===0&&s===0&&t&&(t.value=1),await oe({...e,qty:o})}async function OE(n){const e=u.inv.find(i=>i.id===n);if(!e)return;const t=f(`inv-expiry-${n}`);await oe({...e,expiry:(t==null?void 0:t.value)||null})}async function VE(n){const e=u.inv.find(t=>t.id===n);e&&(await oe({...e,expiry:null}),tr(n))}async function UE(n){const e=u.inv.find(i=>i.id===n);if(!e)return;const t=new Date().toISOString().split("T")[0];await oe({...e,expiry:t}),tr(n)}async function FE(n){const e=u.inv.find(s=>s.id===n);if(!e)return;const t=f(`inv-note-${n}`),i=((t==null?void 0:t.value)||"").trim();await oe({...e,note:i||null})}function HE(n){u.it=n,document.querySelectorAll(".itab").forEach(t=>t.classList.remove("active"));const e=f("itab-"+n);e&&e.classList.add("active"),er()}async function BE(){const n=f("man").value.trim();if(!n)return;const e=f("mac").value,t=f("mau").value.trim()||"unit",i=Math.max(1,parseInt(f("maq").value)||1),s=f("mae").value||null,r="itm-"+n.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now();await oe({id:r,barcode:r,name:n,brand:"",unit:t,qty:i,location:u.maL,category:e,image:null,source:"Manual",expiry:s,addedAt:new Date().toLocaleDateString()}),f("man").value="",f("maq").value=1,f("mae").value="",f("mabtn").disabled=!0,S(`${n} added!`),ge("madd"),xl()}function jE(){f("mabtn").disabled=!f("man").value.trim()}function zE(n){const e=f("maq");e.value=Math.max(1,(parseInt(e.value)||1)+n)}function qE(n,e){u.maL=n,document.querySelectorAll("#ov-madd .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}async function WE(){const n=f("imptxt").value.trim();if(!n)return;let e=0,t=0,i="pantry";for(const s of n.split(`
`)){const r=s.toLowerCase();r.includes("fridge")?i="fridge":r.includes("freezer")?i="freezer":r.includes("pantry")&&(i="pantry");const o=s.match(/^\|\s*([^|]+?)\s*\|\s*(\d+(?:\.\d+)?)\s*\|\s*([^|]+?)\s*\|/),c=s.match(/^[-*]\s+(.+?):\s*(\d+(?:\.\d+)?)\s*([a-zA-Z%\/]+.*)?$/);let l,d,m;if(o?(l=o[1].trim(),d=parseFloat(o[2]),m=o[3].trim()):c&&(l=c[1].trim(),d=parseFloat(c[2]),m=(c[3]||"unit").trim()),l&&d&&l!=="Item"&&l!=="---"&&!l.startsWith("-")){const g="item-imp-"+l.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),w=u.inv.find(E=>E.id===g);await oe({id:g,barcode:g,name:l,brand:"",unit:m||"unit",qty:d,location:i,category:"Imported",image:null,source:"Imported",expiry:null,addedAt:w?w.addedAt:new Date().toLocaleDateString()}),w?t++:e++}}f("imptxt").value="",S(`Imported ${e} new, updated ${t}`),ge("import")}let Rs=null,Tn=null,Wo="fridge",st=null,Va=!1,Rr="",Ua=!1;const ds=new Map,GE=300*1e3,KE=30;function QE(){const n=f("invAddBackdrop"),e=f("invAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),Wo="fridge",document.querySelectorAll("#invAddSheet .lbtn").forEach(i=>i.classList.remove("sel"));const t=f("invAddLoc-fridge");t&&t.classList.add("sel"),setTimeout(()=>{const i=f("invi");i&&(i.value="",i.focus())},150)}function nr(){const n=f("invAddBackdrop"),e=f("invAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),Sl()}function YE(){nr(),window.openScanForInventory&&window.openScanForInventory()}function JE(){nr(),Rm()}function XE(n,e){Wo=n,document.querySelectorAll("#invAddSheet .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function ZE(){const n=f("invAddNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=f("invAddNoteInp");t&&t.focus()}}async function ek(){const n=f("invi"),e=n?n.value.trim():"";if(!e)return;let t=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||1):s&&(t=s[2].trim(),i=parseInt(s[1],10)||1);const o=f("invAddNoteInp"),c=o?o.value.trim():"",l=await Go(t),d=(l==null?void 0:l.preferredLocation)||Wo,m=(l==null?void 0:l.preferredUnit)||null,g="itm-"+t.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),w={id:g,barcode:g,name:t,brand:"",unit:m||"unit",qty:i,location:d,category:Oi({name:t}),image:null,source:"Manual",expiry:null,addedAt:new Date().toLocaleDateString()};c&&(w.note=c),oe(w),S(`${t} added!`),n&&(n.value=""),o&&(o.value="");const E=f("invAddNoteWrap");E&&(E.style.display="none"),Sl(),nr(),xl()}function tk(){Rs&&clearTimeout(Rs);const n=f("invi"),e=n?n.value.trim():"",t=f("invSearchDropdown");if(!e||e.length<2){t&&(t.classList.remove("active"),t.innerHTML=""),Tn=null;return}Rs=setTimeout(()=>rk(e),350)}function nk(n){if(!n)return"NONE";const e=n.toLowerCase();return e.includes("kroger.com")?"Kroger (real product)":e.includes("img.spoonacular.com/products")?"Spoonacular product (real photo)":e.includes("img.spoonacular.com/ingredients")?"Spoonacular ingredient (illustration)":e.includes("openfoodfacts.org")?"Open Food Facts (real photo)":e.includes("edamam")?"Edamam":"Other: "+new URL(n).hostname}function Dh(n){const e=f("invSearchDropdown");!e||!n.length||(Tn=n,n.forEach((t,i)=>{const s=nk(t.image);console.log(`[InvDropdown] #${i} "${t.name}" → image: ${s} | url: ${t.image||"(none)"} | score: ${t._score}`)}),e.innerHTML=n.map((t,i)=>{const s='<div class="enrich-img-ph">🛒</div>',r=t.category&&t.category!=="General"?`<div class="enrich-cat">${t.category}</div>`:"";return`<div class="enrich-row" onclick="pickInvInlineResult(${i})">
      ${s}
      <div class="enrich-text">
        <div class="enrich-name">${t.name}</div>
        ${r}
      </div>
    </div>`}).join(""),e.classList.add("active"))}async function ik(n){return null}async function sk(n){const e=n.toLowerCase(),t=ds.get(e);if(t&&Date.now()-t.ts<GE)return t.scored;const i=u.hid?`&hid=${encodeURIComponent(u.hid)}`:"";let o=(await(await fetch(`/api/text-search?q=${encodeURIComponent(n)}${i}`)).json()).results||[];const c=n.toLowerCase().split(/\s+/).filter(d=>d.length>=2);o=o.filter(d=>{const m=(d.name||"").toLowerCase();return c.some(g=>m.includes(g))});const l=o.map(d=>({...d,_score:wk(d.name||"",n)})).filter(d=>d._score>=15).sort((d,m)=>m._score-d._score).slice(0,5);return ds.set(e,{scored:l,ts:Date.now()}),ds.size>KE&&ds.delete(ds.keys().next().value),l}async function rk(n){const e=f("invSearchDropdown");if(e){e.innerHTML='<div class="search-hint">Searching…</div>',e.classList.add("active");try{const t=ik(n),i=sk(n),s=await t;s&&(f("invi")?f("invi").value.trim():"").toLowerCase()===n.toLowerCase()&&(console.log(`[InvSearch] Instant custom product match for "${n}"`),Dh([s]));const r=await i;if((f("invi")?f("invi").value.trim():"").toLowerCase()!==n.toLowerCase())return;let c=r;if(s){const l=normalizeProductName(s.name),d=r.filter(m=>normalizeProductName(m.name)!==l);c=[s,...d].slice(0,5)}if(!c.length){e.classList.remove("active"),e.innerHTML="",Tn=null;return}Dh(c)}catch(t){console.warn("Inventory inline search failed:",t),e.classList.remove("active"),e.innerHTML="",Tn=null}}}async function ok(n){if(!Tn||!Tn[n])return;const e=Tn[n],t=f("invAddNoteInp"),i=t?t.value.trim():"",s=await Go(e.name),r="itm-"+(e.name||"item").toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),o={id:r,barcode:r,name:e.name,brand:e.brand||"",unit:(s==null?void 0:s.preferredUnit)||"unit",qty:1,location:(s==null?void 0:s.preferredLocation)||Wo,category:e.category||Oi({name:e.name}),source:e.source||"search",expiry:null,addedAt:new Date().toLocaleDateString()};i&&(o.note=i),oe(o),S(`Added "${e.name}" ✓`);const c=f("invi");c&&(c.value=""),t&&(t.value="");const l=f("invAddNoteWrap");l&&(l.style.display="none"),Sl(),nr()}function Sl(){Rs&&clearTimeout(Rs),Tn=null;const n=f("invSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}function ak(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=f("invAddMicOpt");e&&(e.style.display="")}function Nh(n){const e=f("inv-micstatus");e&&e.classList.toggle("visible",n)}function Rm(){if(Va&&st){Ua=!0,st.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){S("Voice input not supported");return}st=new n,st.lang="en-US",st.interimResults=!0,st.maxAlternatives=1,st.continuous=!1,Rr="",Va=!0,Nh(!0),st.onresult=e=>{let t="";for(let s=e.resultIndex;s<e.results.length;s++){const r=e.results[s][0].transcript;e.results[s].isFinal?Rr+=r:t+=r}const i=f("invi");i&&(i.value=(Rr+t).trim())},st.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&S("Couldn't hear that — try again")},st.onend=async()=>{Va=!1,Nh(!1),st=null;let e=Rr.trim();if(!e&&Ua){const o=f("invi");e=o?o.value.trim():""}if(Ua=!1,!e)return;const t=await Go(e),i="itm-"+e.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),s=(t==null?void 0:t.preferredLocation)||Oc(e);oe({id:i,barcode:i,name:e,brand:"",unit:(t==null?void 0:t.preferredUnit)||"unit",qty:1,location:s,category:Oi({name:e}),image:null,source:"Voice",expiry:null,addedAt:new Date().toLocaleDateString()}),S(`Added "${e}" to ${s}`);const r=f("invi");r&&(r.value=""),xl()},st.start()}async function ck(n){const e=u.inv.find(i=>i.id===n);if(!e)return;(await lt({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,brand:e.brand||"",image:e.image||null,src:"supplies"})).action==="new"?S(`${e.name} added to shopping list 🛒`):S(`${e.name} quantity updated on shopping list 🛒`),Cm()}function Am(n){return n?n.trim().toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").slice(0,60):null}async function Go(n){if(!u.hid||!n)return null;const e=Am(n);if(!e)return null;try{return await G(`households/${u.hid}/productPreferences/${e}`)||null}catch{return null}}async function xm(n,e){if(!u.hid||!n)return;const t=Am(n);if(t)try{const i=await G(`households/${u.hid}/productPreferences/${t}`)||{};z(`households/${u.hid}/productPreferences/${t}`,{...i,...e,productName:n.trim(),updatedAt:new Date().toISOString()}).catch(s=>console.warn("Failed to save product preference:",s))}catch(i){console.warn("Failed to read product preference for merge:",i)}}function Cl(n,e){e&&xm(n,{preferredLocation:e})}function Rl(n,e){e&&xm(n,{preferredUnit:e})}function Mh(n){return n?n.trim().toLowerCase().replace(/[^\w\s]/g,"").replace(/\s+/g," ").trim():""}async function lt(n){const e=Mh(n.name),t=u.shop.find(r=>!r.checked&&Mh(r.name)===e);if(!t)return await Ye(n),{action:"new",item:n};const i=(t.unit||"").trim().toLowerCase(),s=(n.unit||"").trim().toLowerCase();if(i===s){const r=(t.qty||1)+(n.qty||1),o=t.note||n.note||"",c={...t,qty:r};return o&&(c.note=o),await Ye(c),{action:"consolidated",item:c,addedQty:n.qty||1}}else{const r=`${ki(t.qty||1)} ${t.unit||"unit"}`,o=`${ki(n.qty||1)} ${n.unit||"unit"}`,c=t.consolidatedAmounts?`${t.consolidatedAmounts} + ${o}`:`${r} + ${o}`;return await Ye({...t,consolidatedAmounts:c}),{action:"consolidated-mixed",item:t}}}let rt=null,Fa=!1,hs="",Ha=!1;function lk(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=f("shopAddMicOpt");e&&(e.style.display="")}function Oh(n){const e=f("micstatus");e&&e.classList.toggle("visible",n)}function Pm(){if(Fa&&rt){Ha=!0,rt.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){S("Voice input not supported");return}rt=new n,rt.lang="en-US",rt.interimResults=!0,rt.maxAlternatives=1,rt.continuous=!1,hs="",Fa=!0,Oh(!0),rt.onresult=e=>{let t="";for(let s=e.resultIndex;s<e.results.length;s++){const r=e.results[s][0].transcript;e.results[s].isFinal?hs+=r:t+=r}const i=f("shi");i&&(i.value=(hs+t).trim())},rt.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&S("Couldn't hear that — try again")},rt.onend=()=>{let e=(hs||"").trim();if(!e&&Ha){const t=f("shi");e=t?t.value.trim():""}if(Fa=!1,rt=null,hs="",Ha=!1,Oh(!1),e){let t=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||1):s&&(t=s[2].trim(),i=parseInt(s[1],10)||1);const o={id:Date.now().toString(),name:t,qty:i,checked:!1,src:"manual"};lt(o),S(`Added "${e}" 🎤`);const c=f("shi");c&&(c.value="")}},rt.start()}function $m(n){if(!n.brand)return!1;if(n.src==="scan")return!0;if(n.src==="search"&&n.searchQuery){const e=n.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),t=n.brand.toLowerCase();return e.some(i=>t.includes(i))}return!1}function Ar(n){const e=n.qty||1,t=n.unit||"Unit";let i;if(n.consolidatedAmounts)i=`<span class="sh-qty sh-qty-mixed"> — ${n.consolidatedAmounts}</span>`;else{const s=ki(e);i=`<span class="sh-qty${e===1?" sh-qty-one":""}"> × ${s} ${t}</span>`}return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="shop">
    <div class="swipe-inner">
      <!-- Main row: swipeRowTap handles multi-select; checkbox toggles checked; content area opens detail -->
      <div class="shit${n.checked?" chk":""}" onclick="swipeRowTap('${n.id}','shop')">
        <div class="sel-cb">✓</div>           <!-- Multi-select checkbox (hidden unless selectMode is active) -->
        <div class="shck" onclick="event.stopPropagation();togShop('${n.id}')">${n.checked?"✓":""}</div>  <!-- Slim ring: tap to mark as bought; hidden in select mode (replaced by sel-cb) -->
        <div style="flex:1;min-width:0;cursor:pointer" onclick="openItemDetail('${n.id}')">
          <div class="shnm">${Re(n.name)}${i}</div>
          ${$m(n)?`<div class="sh-brand">${n.brand}</div>`:""}  <!-- Brand shown for barcode scans always; for text search only if the user's query matches the brand name -->
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
  </div>`}function qi(){const n=(o,c)=>o.name.localeCompare(c.name,void 0,{sensitivity:"base"}),e=f("shlist"),t=u.shop.filter(o=>!o.checked).sort(n),i=u.shop.filter(o=>o.checked).sort(n),s=f("clrchk");s&&(s.style.display=i.length?"block":"none");const r=f("shsub");if(r&&(r.textContent=t.length+" items to buy"),!!e){if(!u.shop.length){e.innerHTML='<div class="es"><div class="ei">🛒</div><p>Your list is empty!<br/>Add items or use "Build from meal plan".</p></div>';return}if(u.aisleMode&&t.length){const o={};t.forEach(c=>{const l=Iy(c.name);o[l]||(o[l]=[]),o[l].push(c)}),e.innerHTML=Object.entries(o).sort().map(([c,l])=>`<div class="shsec">${c}</div>${l.map(Ar).join("")}`).join("")+(i.length?`<div class="shsec">Done</div>${i.map(Ar).join("")}`:"")}else e.innerHTML=(t.length?`<div class="shsec">To buy (${t.length})</div>${t.map(Ar).join("")}`:"")+(i.length?`<div class="shsec">Done</div>${i.map(Ar).join("")}`:"");if(u.selectMode==="shop"){document.querySelectorAll("#shlist .swipe-wrap").forEach(c=>{c.classList.add("selecting"),u.selectedIds.has(c.dataset.id)&&c.classList.add("selected")});const o=document.querySelector(".shbody");o&&(o.style.paddingLeft="52px")}}}function uk(){const n=f("shi"),e=n.value.trim();if(!e)return;if(Ti&&Ti.length===1){Dm(0);return}let t=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||1):s&&(t=s[2].trim(),i=parseInt(s[1],10)||1);const o=f("addNoteInp"),c=o?o.value.trim():"",l={id:Date.now().toString(),name:t,qty:i,checked:!1,src:"manual"};c&&(l.note=c),lt(l),n.value="",o&&(o.value="");const d=f("addNoteWrap");d&&(d.style.display="none"),Al(),ir()}function dk(){const n=f("addNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=f("addNoteInp");t&&t.focus()}}function hk(){const n=f("shopAddBackdrop"),e=f("shopAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),setTimeout(()=>{const t=f("shi");t&&(t.value="",t.focus())},150)}function ir(){const n=f("shopAddBackdrop"),e=f("shopAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),Al()}function fk(){ir(),window.openScanForList&&window.openScanForList()}function pk(){ir(),Pm()}let Ti=null;function mk(){}const gk=new Set(["salad","soup","stew","casserole","dish","recipe","curry","pie","sandwich","wrap","risotto","gratin","puree","smoothie","juice","namasu","pickled","marinated","braised","sauteed","sautéed","coleslaw","gazpacho","chutney","relish","compote","ragout","ratatouille","succotash","bruschetta","ceviche","tartare"]),yk=["made with","and vegetable","and rice","and noodle","and cheese","cooked in","served with","topped with","stuffed with","mixed with","tossed with","dressed with"];function vk(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(t===i)return!1;for(const o of yk)if(t.includes(o)&&!i.includes(o))return!0;const s=new Set(i.split(/\s+/)),r=t.split(/[\s,&+\-–—/()[\]]+/).filter(o=>o.length>=2);for(const o of r)if(gk.has(o)&&!s.has(o))return!0;return!1}const Lm=new Set(["a","an","the","and","or","with","for","of","in","to","by","is","it","at","on","no","not","all","each","per","from","free","style","natural","original","premium","organic","fresh","whole","pure","real","lite","light","low","high","extra","reduced","fat","nonfat","skim","raw","roasted","unsweetened","sweetened","flavored","smoked","dried","frozen","canned","pack","ct","oz","lb","ml","kg","fl","count","size","gallon","quart","pint","liter","bag","box","can","jar","bottle","container","pouch","tub","carton","plain","creamy","chunky","crispy","crunchy","spicy","mild","hot","cold","classic","homestyle","traditional","artisan","greek","italian","mexican","asian","indian","mini","small","medium","large","jumbo","giant","big","handheld","electric","portable","automatic","manual","new","best","top","value","brand"]);function Vh(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(t===i||t.startsWith(i+" "))return!0;const s=i.split(/\s+/).filter(c=>c.length>=2),r=t.split(/[\s,&+\-–—/()[\]]+/).filter(c=>c.length>=2&&!Lm.has(c)&&!/^\d+$/.test(c));if(r.length<=2)return!0;let o=0;for(const c of r)s.some(d=>{if(c.startsWith(d)||d.startsWith(c))return!0;const m=Math.min(c.length,d.length,3);return m>=3&&c.slice(0,m)===d.slice(0,m)})&&o++;return o/r.length>=.5}function wk(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(vk(n,e))return 0;if(t===i)return 100;if(t.startsWith(i+" ")||t.startsWith(i))return 95;const r=t.split(/[\s,&+\-–—/]+/).filter(o=>o.length>=2).filter(o=>!Lm.has(o)&&!/^\d+$/.test(o));if(r.length&&(r[0].startsWith(i)||i.startsWith(r[0]))){const o=r.filter(l=>!l.startsWith(i)&&!i.startsWith(l)).length,c=85-Math.min(o*8,30);return Vh(n,e)?c:0}for(let o=1;o<Math.min(3,r.length);o++)if(r[o].startsWith(i)||i.startsWith(r[o])){const c=r.filter(d=>!d.startsWith(i)&&!i.startsWith(d)).length,l=60-o*10-Math.min(c*8,20);return Vh(n,e)?Math.max(l,5):0}return 0}function Dm(n){if(!Ti||!Ti[n])return;const e=Ti[n],t=f("addNoteInp"),i=t?t.value.trim():"",s=f("shi")?f("shi").value.trim():"",r={id:Date.now().toString(),name:e.name,qty:1,checked:!1,src:"search",brand:e.brand||"",category:e.category||"",source:e.source||"search",searchQuery:s};i&&(r.note=i),lt(r),S(`Added "${e.name}" ✓`);const o=f("shi");o&&(o.value=""),t&&(t.value="");const c=f("addNoteWrap");c&&(c.style.display="none"),Al(),ir()}function Al(){Ti=null;const n=f("shopSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}async function xl(n,e,t){}function Nm(){const n=f("enrichBackdrop"),e=f("enrichSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),window._enrichCtx=null}async function Mm(n){if(u.selectMode)return;event&&event.stopPropagation();const e=u.shop.find(g=>g.id===n);if(!e)return;const t=f("itemDetailContent");if(!t)return;const i=$m(e);let s=`<div class="item-detail-header">
    <div style="flex:1;min-width:0">
      <div class="item-detail-name">${Re(e.name)}</div>
      ${i?`<div class="item-detail-brand">${e.brand}</div>`:""}
      ${e.checked?'<div style="margin-top:4px"><span class="item-detail-badge" style="background:var(--gnd);color:var(--gn)">✓ Purchased</span></div>':""}
    </div>
  </div>`;const r=e.qty||1,o=e.unit||"Unit",{whole:c,frac:l}=to(r);s+=`<div class="item-detail-section">
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
      ${km.map(g=>`<option value="${g}"${g===o?" selected":""}>${g}</option>`).join("")}
    </select>
  </div>`,e.note&&(s+=`<div class="item-detail-section">
      <div class="item-detail-label">Note</div>
      <div class="item-detail-value">${e.note}</div>
    </div>`),s+='<button class="btn bs bf" onclick="closeItemDetail()" style="margin-top:8px">Close</button>',t.innerHTML=s;const d=f("itemDetailBackdrop"),m=f("itemDetailSheet");d&&d.classList.add("active"),m&&m.classList.add("active")}function _k(){const n=f("itemDetailBackdrop"),e=f("itemDetailSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}async function bk(n,e){const t=u.shop.find(s=>s.id===n);if(!t)return;await Ye({...t,unit:e}),Rl(t.name,e);const i=u.inv.find(s=>s.name.toLowerCase().trim()===t.name.toLowerCase().trim());i&&await oe({...i,unit:e}),S("Unit updated everywhere",2e3),Mm(n)}async function Tk(n,e){const t=u.shop.find(d=>d.id===n);if(!t)return;const i=f(`shop-qty-${n}`),s=f(`shop-frac-${n}`),r=parseInt(i==null?void 0:i.value,10)||0,o=parseFloat(s==null?void 0:s.value)||0;if(e<0&&In(r,o)<=.25)return;const c=Math.max(0,Math.min(99,r+e)),l=In(c,o);i&&(i.value=Math.floor(l)),c===0&&o===0&&s&&(s.value="0.25"),await Ye({...t,qty:l})}async function Ik(n){const e=u.shop.find(c=>c.id===n);if(!e)return;const t=f(`shop-qty-${n}`),i=f(`shop-frac-${n}`),s=parseInt(t==null?void 0:t.value,10),r=parseFloat(i==null?void 0:i.value)||0;if(isNaN(s)||s<0)return;const o=In(s,r);o!==(e.qty||1)&&await Ye({...e,qty:o})}async function Ek(n){const e=u.shop.find(c=>c.id===n);if(!e)return;const t=f(`shop-qty-${n}`),i=f(`shop-frac-${n}`),s=parseInt(t==null?void 0:t.value,10)||0,r=parseFloat(i==null?void 0:i.value)||0,o=In(s,r);r===0&&s===0&&t&&(t.value=1),await Ye({...e,qty:o})}async function kk(n){}function Sk(n){}async function Ck(n){}function Rk(n){const e=window._enrichCtx;if(!e)return;const t=e.results[n];if(t){if(e.list==="shop"){const i=u.shop.find(s=>s.id===e.itemId);i&&Ye({...i,name:t.name,brand:t.brand||"",category:t.category||"",source:t.source||"search"})}else if(e.list==="inv"){const i=u.inv.find(s=>s.id===e.itemId);i&&oe({...i,name:t.name,brand:t.brand||"",category:t.category||i.category,source:t.source||"search"})}Nm(),S(`Updated with "${t.name}" ✓`)}}function Om(n){if(!u.hid||!n)return;const e=Date.now().toString(36)+Math.random().toString(36).slice(2,6);z(`households/${u.hid}/completed_items/${e}`,{name:n,completedAt:new Date().toISOString()}).catch(t=>console.warn("recordCompleted error:",t))}function Ak(n){const e=u.shop.find(i=>i.id===n);if(!e)return;const t=!e.checked;Ye({...e,checked:t}),t&&Om(e.name),it(t?"checked off":"unchecked",Re(e.name)+" on Shopping List")}function xk(n,e){n.stopPropagation();const t=f("sne-"+e),i=f("sni-"+e);if(!t)return;t.classList.toggle("open")&&i&&(i.focus(),i.setSelectionRange(i.value.length,i.value.length))}function Pk(n){const e=f("sni-"+n);if(!e)return;const t=u.shop.find(s=>s.id===n);if(!t)return;const i=e.value.trim();i!==(t.note||"")&&Ye({...t,note:i})}function $k(n){const e=f("sqe-"+n),t=f("sqi-"+n);if(!e)return;e.classList.toggle("open")&&t&&(t.focus(),t.select())}function Lk(n,e){const t=f("sqi-"+n);if(!t)return;const i=Math.max(1,(parseInt(t.value,10)||1)+e);t.value=i,Vm(n)}function Vm(n){const e=f("sqi-"+n);if(!e)return;const t=u.shop.find(s=>s.id===n);if(!t)return;const i=Math.max(1,parseInt(e.value,10)||1);i!==(t.qty||1)&&Ye({...t,qty:i})}function Dk(){u.aisleMode=!u.aisleMode;const n=f("aislebtn");n&&(n.style.background=u.aisleMode?"var(--ac)":"",n.style.color=u.aisleMode?"var(--bg)":""),qi()}function Nk(n){["list","deals"].forEach(i=>{const s=f("shtab-"+i);s&&s.classList.remove("active");const r=f("sh-"+i+"-body");r&&(r.style.display="none")});const e=f("shtab-"+n);e&&e.classList.add("active");const t=f("sh-"+n+"-body");t&&(t.style.display="block"),n==="deals"&&Um()}function Mk(){const n=u.shop.filter(i=>!i.checked);if(!n.length){S("List is empty!");return}const t=`🛒 Shopping List

`+n.map(i=>{let s="• "+i.name;return(i.qty||1)>1&&(s+=" × "+ki(i.qty)),i.price&&(s+=" (~$"+i.price+")"),s}).join(`
`);navigator.share?navigator.share({title:"Shopping List",text:t}).catch(()=>{}):navigator.clipboard&&navigator.clipboard.writeText(t).then(()=>S("List copied!"))}let Ba={},Sc={};async function Ok(){const n=u.shop.filter(t=>t.checked);if(!n.length){S("No completed items!");return}Ba={},Sc={};for(const t of n){const i=await Go(t.name),s=t.name.toLowerCase();i!=null&&i.preferredLocation&&(Ba[s]=i.preferredLocation),i!=null&&i.preferredUnit&&(Sc[s]=i.preferredUnit)}const e=f("atk-body");e.innerHTML=`<div style="padding:16px">
    <p style="font-size:.82rem;color:var(--mt);margin-bottom:16px">Choose where each item goes in your kitchen, then tap Add All.</p>
    ${n.map(t=>{const i=Ba[t.name.toLowerCase()]||Oc(t.name);return`<div class="atk-item" id="atk-${t.id}" data-loc="${i}">
        <div class="atk-name">${t.name}</div>
        <div class="atk-loc">
          <button onclick="setAtkLoc('${t.id}','fridge',this)" class="${i==="fridge"?"sel":""}">🌡 Fridge</button>
          <button onclick="setAtkLoc('${t.id}','freezer',this)" class="${i==="freezer"?"sel":""}">🧊 Freeze</button>
          <button onclick="setAtkLoc('${t.id}','pantry',this)" class="${i==="pantry"?"sel":""}">🥫 Pantry</button>
          <button onclick="setAtkLoc('${t.id}','household',this)" class="${i==="household"?"sel":""}">🏠 House</button>
        </div>
      </div>`}).join("")}
  </div>`,ct("atk")}function Vk(n,e,t){const i=f("atk-"+n);i.dataset.loc=e,i.querySelectorAll(".atk-loc button").forEach(s=>s.classList.remove("sel")),t.classList.add("sel")}async function Uk(){const n=u.shop.filter(i=>i.checked),e=new Date().toLocaleDateString();let t=0;for(const i of n){const s=f("atk-"+i.id);if(!s)continue;const r=s.dataset.loc||Oc(i.name),o=u.inv.find(l=>l.name.toLowerCase()===i.name.toLowerCase()),c=i.qty||1;await oe({id:o?o.id:"inv-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:o?o.name:i.name,qty:o?o.qty+c:c,unit:o?o.unit:i.unit&&i.unit!=="unit"?i.unit:Sc[i.name.toLowerCase()]||"unit",location:r,category:o?o.category:Oi({name:i.name}),addedAt:o?o.addedAt:e,brand:o?o.brand:i.brand||"",expiry:o?o.expiry:null,image:o?o.image:i.image||null,source:"shopping"}),Cl(i.name,r),await Ks(i.id),t++}ge("atk"),S(`${t} item${t!==1?"s":""} added to your supplies! 🧺`)}async function Fk(){const n=ko().map(s=>{const r=s.toISOString().split("T")[0];return u.mp[r]?`${s.toLocaleDateString("en-US",{weekday:"short"})}: ${u.mp[r]}`:""}).filter(Boolean).join(", ");if(!n){S("No meals planned yet!");return}const e=u.inv.map(s=>`${s.name} (${Si(s.qty,s.unit)})`).join(", "),t=document.querySelector('[onclick="buildList()"]'),i=t?t.textContent:"";t&&(t.disabled=!0,t.textContent="⏳ Thinking…");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:500,messages:[{role:"user",content:`Week meals: ${n}
Already have: ${e}
List ONLY ingredients still needed. Return ONLY a bullet list, each line starting "- ". No categories, no headers, no explanation.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",c=[],l=[];o.split(`
`).forEach(P=>{const $=P.match(/^[-•*]\s+(.+)/);if($){const U=$[1].replace(/\*\*/g,"").trim();U&&!u.shop.find(N=>N.name.toLowerCase()===U.toLowerCase())&&c.push({name:U,sel:!0})}});const d=o.split(`
`).filter(P=>P.match(/^[-•*]\s+/)).length,m=u.inv.map(P=>P.name.toLowerCase());if(c.forEach(P=>{const $=u.inv.find(U=>U.name.toLowerCase()===P.name.toLowerCase());$&&$.qty>0&&(P.note=`Have ${Si($.qty,$.unit)} — need more`)}),!c.length){S("Nothing new needed — you're all stocked! ✓");return}window._bpItems=c;const g=u.inv.length>0?Math.max(0,d-c.length):0,w=c.filter(P=>P.note).length,E=[];g>0&&E.push(`✅ ${g} already in stock`),w>0&&E.push(`⚠️ ${w} partially stocked`),E.push(`🛒 ${c.length} to add`);const A=`<div style="padding:10px 16px;background:var(--acd);border-radius:12px;margin-bottom:12px;font-size:.82rem;color:var(--tx2);line-height:1.6">${E.join("<br>")}</div>`;f("bpList").innerHTML=A+c.map((P,$)=>`<div id="bpitem-${$}" onclick="bpTog(${$})" style="display:flex;align-items:center;gap:12px;padding:13px 16px;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;cursor:pointer;transition:all .15s"><div id="bpck-${$}" style="width:24px;height:24px;border-radius:50%;background:var(--gn);border:2px solid var(--gn);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.8rem;color:#0c0c0a;transition:all .2s">✓</div><div style="flex:1;min-width:0"><div style="font-size:.9rem;font-weight:500">${P.name}</div>${P.note?`<div style="font-size:.72rem;color:var(--am);margin-top:2px">${P.note}</div>`:""}</div></div>`).join(""),Pl(),f("buildPreviewM").classList.add("active")}catch{S("Couldn't reach Claude — check connection")}finally{t&&(t.disabled=!1,t.textContent=i)}}function Hk(n){window._bpItems[n].sel=!window._bpItems[n].sel;const e=f("bpck-"+n),t=f("bpitem-"+n);window._bpItems[n].sel?(e.textContent="✓",e.style.background="var(--gn)",e.style.borderColor="var(--gn)",e.style.color="#0c0c0a",t.style.borderColor="var(--b1)"):(e.textContent="",e.style.background="transparent",e.style.borderColor="var(--b2)",t.style.borderColor="var(--b2)"),Pl()}function Bk(n){window._bpItems.forEach((e,t)=>{window._bpItems[t].sel=n;const i=f("bpck-"+t),s=f("bpitem-"+t);n?(i.textContent="✓",i.style.background="var(--gn)",i.style.borderColor="var(--gn)",i.style.color="#0c0c0a",s.style.borderColor="var(--b1)"):(i.textContent="",i.style.background="transparent",i.style.borderColor="var(--b2)",s.style.borderColor="var(--b2)")}),Pl()}function Pl(){const n=window._bpItems.filter(t=>t.sel).length,e=f("bpAddBtn");e&&(e.textContent=n?`Add ${n} item${n!==1?"s":""}  ✓`:"Nothing selected"),e&&(e.disabled=!n)}async function jk(){const n=window._bpItems.filter(e=>e.sel);if(!n.length){f("buildPreviewM").classList.remove("active");return}for(const e of n)await lt({id:Date.now().toString()+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"meal-plan"});f("buildPreviewM").classList.remove("active"),S(`Added ${n.length} item${n.length!==1?"s":""}! 🛒`)}function Um(){const n=f("deals-zip-banner");if(!n)return;const e=u.cfg.zipcode;e?(n.innerHTML=`📍 Searching deals near <strong>${e}</strong> <span style="font-size:.72rem;color:var(--mt)">(change in Settings)</span>`,n.style.borderColor="var(--b2)"):(n.innerHTML=`⚠️ Set your zipcode in <strong style="cursor:pointer;color:var(--ac)" onclick="hideOv('');showOv('settings')">Settings</strong> to find local deals near you.`,n.style.borderColor="var(--am)")}function Cc(n,e){const t=f("dealslist");if(!n||!n.length){t.innerHTML=`<div class="es"><div class="ei">🏷</div><p>No deals found for <strong>${e}</strong>.<br>Try a different search term or check back later for new circulars.</p></div>`;return}t.innerHTML="",n.forEach(i=>{const s=document.createElement("div");s.className="deal-card"+(i.onSale?" deal-match":"");const r=document.createElement("div");r.style.flex="1";const o=document.createElement("div");o.className="deal-store",o.textContent=i.store||"Store";const c=document.createElement("div");if(c.className="deal-name",c.textContent=i.name||"",i.brand||i.size){const m=document.createElement("div");m.style.cssText="font-size:.72rem;color:var(--mt);margin-top:1px",m.textContent=[i.brand,i.size].filter(Boolean).join(" · "),r.appendChild(o),r.appendChild(c),r.appendChild(m)}else r.appendChild(o),r.appendChild(c);const l=document.createElement("div");if(l.style.cssText="display:flex;align-items:baseline;gap:6px;margin-top:4px;flex-wrap:wrap",i.sale_price){const m=document.createElement("span");m.className="deal-price",m.textContent=i.sale_price,l.appendChild(m)}if(i.onSale&&i.regular){const m=document.createElement("span");m.className="deal-orig",m.textContent=i.regular,l.appendChild(m)}if(i.savings){const m=document.createElement("span");m.className="deal-badge",m.textContent="Save "+i.savings,l.appendChild(m)}r.appendChild(l);const d=document.createElement("button");d.className="btn bs bsm",d.style.cssText="align-self:center;flex-shrink:0;margin-left:8px",d.textContent="+ List",(m=>{d.onclick=()=>Fm(m)})(i.name||""),s.appendChild(r),s.appendChild(d),t.appendChild(s)})}function Rc(n){const e=f("deals-stores");!e||!n||!n.length||(e.style.display="block",e.innerHTML='<div style="font-size:.72rem;color:var(--mt);font-weight:600;margin-bottom:4px">Stores with deals</div>'+n.map(t=>`<div style="font-size:.74rem;color:var(--tx2);padding:2px 0">${t.name}</div>`).join(""))}async function Fm(n){const e=(n||"").replace(/&#39;/g,"'");(await lt({id:Date.now().toString(),name:e,qty:1,checked:!1,src:"deal"})).action==="new"?S(e+" added!"):S(e+" quantity updated!")}async function Ac(n){const e=u.cfg.zipcode;if(!e)throw new Error("Set your zipcode in Settings to search for local deals.");const t="ks-deals-"+e+"-"+n.toLowerCase().replace(/\s+/g,"_").substring(0,40),i=le(t);if(i&&i.ts&&Date.now()-i.ts<72e5)return i;const s=await fetch("/api/deals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({zipcode:e,query:n})}),r=await s.json();if(!s.ok||r.error)throw new Error(r.message||r.error||"Deals API request failed");return Ne(t,{...r,ts:Date.now()}),r}async function zk(){const n=f("dealsearch").value.trim();if(!n){S("Enter something to search");return}const e=f("dealsstatus");e.style.display="block",e.style.color="var(--mt)",e.textContent="🔍 Searching deals for "+n+" near "+(u.cfg.zipcode||"your area")+"…",f("dealslist").innerHTML="";try{const t=await Ac(n);if(e.style.display="none",t.message){f("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${t.message}</p></div>`;return}t.stores&&Rc(t.stores),Cc(t.deals,n)}catch(t){e.style.color="var(--rd)",e.textContent=t.message||"Unknown error"}}async function qk(){const n=u.shop.filter(i=>!i.checked);if(!n.length){const i=Object.values(u.mp).filter(Boolean);if(!i.length){S("Add items to your list first!");return}if(!confirm(`Your list is empty. Search deals for this week's meals?

`+i.join(", ")))return;const r=f("dealsstatus");r.style.display="block",r.textContent="Searching deals for your meal plan...",f("dealslist").innerHTML="";try{const o=await Ac(i.join(", "));if(r.style.display="none",o.message){f("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${o.message}</p></div>`;return}o.stores&&Rc(o.stores),Cc(o.deals,i.join(", "))}catch(o){r.style.color="var(--rd)",r.textContent=o.message}return}const e=f("dealsstatus"),t=n.slice(0,8).map(i=>i.name).join(", ");e.style.display="block",e.style.color="var(--mt)",e.textContent="Searching deals for: "+t+"...",f("dealslist").innerHTML="";try{const i=await Ac(t);if(e.style.display="none",i.message){f("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${i.message}</p></div>`;return}i.stores&&Rc(i.stores),i.deals.length?Cc(i.deals,t):f("dealslist").innerHTML='<div class="es"><div class="ei">🏷</div><p>No deals found for your list items.<br/>Try searching for individual items.</p></div>'}catch(i){e.style.color="var(--rd)",e.textContent=i.message}}function $l(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(u.cfg.adults||"Bora").split(",")[0].trim(),i=f("grt");i&&(i.innerHTML=`${e}, <span>${t}</span>`);const s=f("hdt");s&&(s.textContent=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})),Ln()}function Ll(){Dl(),Gr==null||Gr()}let Gr=null;function Wk(n){Gr=n}function Dl(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(u.cfg.adults||"Bora").split(",")[0].trim(),i=f("grt");i&&!i.innerHTML&&(i.innerHTML=`${e}, <span>${t}</span>`),Ln(),sr(),Jk(),eS(),Wi(),nS(),zm(),Kk()}function Gk(n){const e=`ks-home-${n}-collapsed`,t=le(e)!==!1;Ne(e,!t),xc(n)}function xc(n){const e=`ks-home-${n}-collapsed`,t=le(e)!==!1,i=f(`${n}-arrow`),r=f({lowstock:"lowstocklist",activity:"activityfeed",cooktonight:"cooktonightbody"}[n]||n);i&&(t?i.classList.add("collapsed"):i.classList.remove("collapsed")),r&&(t?r.classList.add("collapsed"):r.classList.remove("collapsed"))}function Kk(){xc("lowstock"),xc("activity")}function Wi(){const n=pn(),e=u.mp[n],t=f("tnd"),i=f("tna"),s=f("tonight-main");s&&(s.onclick=function(){window.openMealM(n,"Today")}),e?(t&&(t.innerHTML=e),i&&(i.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openCooked('${n}')">🍳 I cooked this</button><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${n}','Today')">Edit</button>`)):(t&&(t.innerHTML='<span style="font-size:.9rem;color:var(--mt);font-style:italic">No meal planned yet</span>'),i&&(i.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openRecipeMatch()">🔍 Find recipes</button><button class="btn bsm bs" onclick="event.stopPropagation();showScreen('chat')">Ask Claude →</button>`))}let wo=0;function Hm(n){const e=new Date;e.setHours(0,0,0,0);const t=new Date(e);return t.setDate(e.getDate()-e.getDay()),t.setDate(t.getDate()+n*7),Array.from({length:7},(i,s)=>{const r=new Date(t);return r.setDate(t.getDate()+s),r})}function Qk(n){wo+=n,Ln()}function Ln(){const n=["S","M","T","W","T","F","S"],e=new Date;e.setHours(0,0,0,0);const t=f("wgrd");if(!t)return;const i=Hm(wo),s=f("weekLbl");if(s){const r=i[0],o=i[6],c=r.toLocaleDateString("en-US",{month:"short"}),l=o.toLocaleDateString("en-US",{month:"short"}),d=c===l?`${c} ${r.getDate()} – ${o.getDate()}`:`${c} ${r.getDate()} – ${l} ${o.getDate()}`;s.textContent=wo===0?"This Week":d}t.innerHTML=i.map((r,o)=>{const c=r.toISOString().split("T")[0],l=r.getTime()===e.getTime(),d=u.mp[c];return`<div class="wd${l?" today":""}${d?" hm":""}" onclick="openMealM('${c}','${n[o]} ${r.getDate()}')"><div class="wdn">${n[o]}</div><div class="wdd">${r.getDate()}</div>${d?`<div class="wdm">${d}</div>`:""}</div>`}).join(""),Yk()}function Yk(){const n=f("variety-nudge");if(!n)return;const e=Hm(wo).map(s=>u.mp[s.toISOString().split("T")[0]]).filter(Boolean);if(e.length<3){n.style.display="none";return}const t={};e.forEach(s=>{const r=s.toLowerCase();t[r]=(t[r]||0)+1});const i=Object.entries(t).find(([,s])=>s>=3);i?(n.style.display="block",n.innerHTML="🔄 <strong>"+i[0]+"</strong> is planned "+i[1]+"× this week — maybe try something different?"):n.style.display="none"}function sr(){const n=u.inv.filter(c=>{const l=$t(c.expiry);return l&&(l.c==="expiring"||l.c==="expired")}).length,e=u.shop.filter(c=>!c.checked).length,t=f("home-exp-val"),i=f("home-exp-sub");t&&(n>0?(t.textContent=n+" item"+(n>1?"s":""),t.className="tc-val",t.style.color="var(--am)"):(t.textContent="All fresh!",t.className="tc-val tc-green")),i&&(i.textContent=n>0?"expiring soon":"Nothing in next 3 days");const s=f("home-shop-val"),r=f("home-shop-sub");s&&(s.textContent=e),r&&(r.textContent=e===1?"item to buy":e===0?"all stocked up":"items to buy");const o=f("sgrd");o&&(o.innerHTML=`<div class="sc" onclick="showScreen('inventory')"><div class="sci">🧺</div><div class="scv">${u.inv.length}</div><div class="scl">Items in stock</div></div><div class="sc${n>0?" warn":""}" onclick="showScreen('inventory')"><div class="sci">⏱</div><div class="scv">${n}</div><div class="scl">Expiring soon</div></div><div class="sc" onclick="showScreen('shopping')"><div class="sci">🛒</div><div class="scv">${e}</div><div class="scl">To buy</div></div><div class="sc" onclick="showScreen('recipes')"><div class="sci">📖</div><div class="scv">${u.recs.length}</div><div class="scl">Saved recipes</div></div>`)}function Jk(){const n=u.inv.filter(i=>{const s=$t(i.expiry);return s&&(s.c==="expiring"||s.c==="expired")}).sort((i,s)=>new Date(i.expiry)-new Date(s.expiry)),e=f("exslbl"),t=f("expl");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(i=>{const s=$t(i.expiry);return`<div class="exi${s.c==="expired"?" exp":""}" onclick="openAdj('${i.id}')"><div class="exn">${Re(i.name)}</div><div class="exd">${s.l}</div></div>`}).join("")}}const Xk=new Set(["Bottle","Jar","Can","Carton","Bunch","Head","Loaf","Dozen","Tube","Roll","Gallon","Half Gallon","Liter"]),Zk=new Set(["Piece","Unit","Pack","Box","Bag","Pound","Oz","Clove"]);function Nl(n){return n?Xk.has(n)?1:(Zk.has(n),2):2}function eS(){const n=u.inv.filter(i=>{if(i.doNotRestock)return!1;const s=i.restockThreshold!=null?i.restockThreshold:Nl(i.unit);return i.qty<=s}).sort((i,s)=>i.name.localeCompare(s.name,void 0,{sensitivity:"base"})),e=f("lowstocklbl"),t=f("lowstocklist");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(i=>`<div class="exi" style="border-color:var(--am)" onclick="openAdj('${i.id}')">
    <div style="flex:1;min-width:0">
      <div class="exn">${Re(i.name)}</div>
      <div style="font-size:.7rem;color:var(--am);font-weight:600;margin-top:1px">${Si(i.qty,i.unit)}</div>
    </div>
    <button class="low-add-btn" onclick="event.stopPropagation();addLowToShop('${i.id}')">🛒 Add</button>
  </div>`).join("")}}async function tS(n){const e=u.inv.find(i=>i.id===n);if(!e)return;(await lt({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"low-stock"})).action==="new"?S(`${e.name} added to shopping list 🛒`):S(`${e.name} quantity updated on shopping list 🛒`)}function nS(){const n=f("activityfeed"),e=f("activitylbl");if(!n)return;const t=u.activity||[];if(!t.length){e&&(e.style.display="none"),n.innerHTML="";return}e&&(e.style.display="flex");const i=s=>{const r=Date.now()-new Date(s).getTime(),o=Math.floor(r/6e4);if(o<1)return"just now";if(o<60)return o+"m ago";const c=Math.floor(o/60);if(c<24)return c+"h ago";const l=Math.floor(c/24);return l===1?"yesterday":l+"d ago"};n.innerHTML=t.slice(0,3).map(s=>`<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--b1)">
      <div style="width:28px;height:28px;border-radius:50%;background:var(--acd);display:flex;align-items:center;justify-content:center;font-size:.7rem;flex-shrink:0;color:var(--ac);font-weight:700">${(s.memberName||"?")[0].toUpperCase()}</div>
      <div style="flex:1;font-size:.82rem;color:var(--tx2);line-height:1.4;font-family:'DM Sans',sans-serif"><strong style="color:var(--tx);font-weight:600">${Re(s.memberName||"Someone").replace(/</g,"&lt;")}</strong> ${(s.action||"").replace(/</g,"&lt;")} <strong style="color:var(--tx);font-weight:600">${(s.itemName||"").replace(/</g,"&lt;")}</strong></div>
      <div style="font-size:.68rem;color:var(--mt);flex-shrink:0">${i(s.timestamp)}</div>
    </div>`).join("")}const Uh=5;let hi=[],Vt=0;function Bm(n){return typeof n!="string"||!n.trim()?"":n.toLowerCase().trim().replace(/^[\d\s\/\.½¼¾⅓⅔]+/,"").replace(/\b(cups?|tbsp?|tsp?|tablespoons?|teaspoons?|ounces?|oz|lbs?|pounds?|grams?|g|kg|ml|liters?|cloves?|cans?|large|small|medium|fresh|dried|chopped|minced|sliced|diced|to taste|optional|about)\b/gi,"").replace(/\s+/g," ").trim().replace(/s$/,"")}function iS(n,e){let t=[];n.ingredientsRaw&&Array.isArray(n.ingredientsRaw)?t=n.ingredientsRaw:n.ingredients&&typeof n.ingredients=="string"?t=n.ingredients.split(/[;\n]+/).map(l=>l.trim()).filter(Boolean):Array.isArray(n.ingredients)&&(t=n.ingredients);const i=t.filter(l=>typeof l=="string"&&l.trim());if(!i.length)return{matchPct:0,matchCount:0,totalCount:0,missing:[]};const s=[];let r=0;const o=i.length;for(const l of i){const d=Bm(l);if(!d){r++;continue}e.some(g=>g.includes(d)||d.includes(g))?r++:s.push(l)}return{matchPct:Math.round(r/o*100),matchCount:r,totalCount:o,missing:s}}async function sS(){const n=f("recipeMatchResults");if(n){ct("recipematch"),n.innerHTML='<div style="text-align:center;padding:40px 0"><div class="spin" style="width:32px;height:32px;margin:0 auto 12px"></div><div style="font-size:.85rem;color:var(--mt)">Matching recipes to your supplies…</div></div>';try{const e=u.inv.map(i=>Bm(i.name)).filter(Boolean);if(console.log("[RecipeMatch] Inventory items:",u.inv.length,"| Normalized names:",e.length),!e.length){console.log("[RecipeMatch] No supplies in inventory — aborting match"),n.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--mt)">Add some items to your Supplies so we can find recipes you can cook tonight!</div>';return}console.log("[RecipeMatch] Fetching public_recipes from Firestore…");const t=await re("public_recipes");if(console.log("[RecipeMatch] Fetched",t.length,"community recipes"),!t.length){console.log("[RecipeMatch] No community recipes found"),n.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--mt)">No community recipes available yet.</div>';return}console.log("[RecipeMatch] Scoring recipes against inventory…"),hi=t.map(i=>{const s=iS(i,e);return console.log(`[RecipeMatch]  "${i.title||i.name}": ${s.matchPct}% (${s.matchCount}/${s.totalCount})`),{...i,...s}}).filter(i=>i.matchPct>=40).sort((i,s)=>s.matchPct-i.matchPct),console.log("[RecipeMatch] Recipes above 40% threshold:",hi.length),Vt=0,jm(n)}catch(e){console.error("[RecipeMatch] Error during recipe matching:",e),console.error("[RecipeMatch] Error name:",e.name,"| message:",e.message),n.innerHTML=`<div style="text-align:center;padding:40px 0;color:var(--rd)">Couldn't load recipes — please check your connection and try again.</div>`}}}function jm(n){if(!hi.length){n.innerHTML=`<div style="text-align:center;padding:40px 0;color:var(--mt)">No matches yet — your pantry doesn't have enough ingredients for any community recipes right now. Try adding more items to Supplies!</div>`;return}const e=hi.slice(Vt,Vt+Uh);Vt+=e.length;const t=e.map(i=>{let s,r,o;i.matchPct>=80?(s="var(--gn)",r="Ready to cook",o="🟢"):i.matchPct>=60?(s="var(--am)",r="Almost there",o="🟡"):(s="#e67e22",r="Just a few things needed",o="🟠");const c=i.imageUrl?`<img src="${i.imageUrl}" style="width:100%;height:140px;object-fit:cover;border-radius:12px 12px 0 0" alt="" onerror="this.style.display='none'"/>`:'<div style="width:100%;height:80px;background:var(--sf);border-radius:12px 12px 0 0;display:flex;align-items:center;justify-content:center;font-size:2rem">🍽</div>',d=i.matchPct<80&&i.missing.length>0?`<div style="margin-top:8px"><div style="font-size:.7rem;color:var(--mt);font-weight:600;margin-bottom:4px">Missing (${i.missing.length}):</div>${i.missing.map(g=>{const w=g.replace(/'/g,"\\'").replace(/"/g,"&quot;");return`<div style="display:flex;align-items:center;gap:6px;margin:3px 0"><span style="flex:1;font-size:.72rem;padding:3px 8px;border-radius:8px;background:var(--rdd);color:var(--rd)">${g}</span><button onclick="event.stopPropagation();addMissingToShop('${w}')" style="flex-shrink:0;font-size:.62rem;padding:3px 8px;border-radius:8px;border:1px solid var(--ac);background:var(--acd);color:var(--ac);font-weight:600;cursor:pointer;white-space:nowrap">🛒 Add</button></div>`}).join("")}</div>`:"",m=[i.cookTime,i.cuisine].filter(Boolean).join(" · ");return`<div style="background:var(--card);border:1.5px solid var(--b1);border-radius:14px;margin-bottom:12px;overflow:hidden;cursor:pointer" onclick="openComRecipe('${i.id}')">
      ${c}
      <div style="padding:12px 14px">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
          <div style="font-family:'Fraunces',serif;font-size:1rem;font-weight:400;flex:1;line-height:1.3">${i.title||i.name||"Untitled"}</div>
          <div style="flex-shrink:0;font-size:.72rem;font-weight:700;padding:3px 10px;border-radius:20px;background:${s}22;color:${s}">${o} ${i.matchPct}%</div>
        </div>
        <div style="font-size:.7rem;color:${s};font-weight:600;margin-top:3px">${r}</div>
        ${m?`<div style="font-size:.7rem;color:var(--mt);margin-top:4px">${m}</div>`:""}
        ${d}
      </div>
    </div>`}).join("");if(Vt<=Uh)n.innerHTML=t;else{const i=n.querySelector(".match-more-btn");i&&i.remove(),n.insertAdjacentHTML("beforeend",t)}Vt<hi.length?n.insertAdjacentHTML("beforeend",`<div style="text-align:center;padding:12px 0"><button class="btn bs match-more-btn" onclick="showMoreMatches()">Show 5 more (${hi.length-Vt} remaining)</button></div>`):Vt>0&&n.insertAdjacentHTML("beforeend",`<div style="text-align:center;padding:12px 0;font-size:.75rem;color:var(--mt)">Showing all ${Vt} matching recipes</div>`)}function rS(){const n=f("recipeMatchResults");n&&jm(n)}async function oS(n){if(!n)return;(await lt({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:n.trim(),qty:1,checked:!1,src:"recipe-match"})).action==="new"?S(`${n} added to shopping list 🛒`):S(`${n} already on shopping list`)}function zm(){const n=["fridge","freezer","pantry","household"].map(t=>{const i=u.inv.filter(s=>s.location===t);return i.length?rf(t).toUpperCase()+`
`+i.map(s=>`- ${s.name}${s.brand?` (${s.brand})`:""}: ${Si(s.qty,s.unit)}`).join(`
`):""}).filter(Boolean).join(`

`),e=f("expbox");e&&(e.textContent=n||"No items yet.")}/**
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
 */const qm="firebasestorage.googleapis.com",Wm="storageBucket",aS=120*1e3,cS=600*1e3;/**
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
 */class we extends Mt{constructor(e,t,i=0){super(ja(e),`Firebase Storage: ${t} (${ja(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,we.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ja(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ve;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ve||(ve={}));function ja(n){return"storage/"+n}function Ml(){const n="An unknown error occurred, please check the error payload for server response.";return new we(ve.UNKNOWN,n)}function lS(n){return new we(ve.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function uS(n){return new we(ve.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function dS(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new we(ve.UNAUTHENTICATED,n)}function hS(){return new we(ve.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function fS(n){return new we(ve.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function pS(){return new we(ve.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function mS(){return new we(ve.CANCELED,"User canceled the upload/download.")}function gS(n){return new we(ve.INVALID_URL,"Invalid URL '"+n+"'.")}function yS(n){return new we(ve.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function vS(){return new we(ve.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Wm+"' property when initializing the app?")}function wS(){return new we(ve.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function _S(){return new we(ve.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function bS(n){return new we(ve.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Pc(n){return new we(ve.INVALID_ARGUMENT,n)}function Gm(){return new we(ve.APP_DELETED,"The Firebase app was deleted.")}function TS(n){return new we(ve.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function As(n,e){return new we(ve.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function fs(n){throw new we(ve.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class tt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=tt.makeFromUrl(e,t)}catch{return new tt(e,"")}if(i.path==="")return i;throw yS(e)}static makeFromUrl(e,t){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function d(D){D.path_=decodeURIComponent(D.path)}const m="v[A-Za-z0-9_]+",g=t.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",E=new RegExp(`^https?://${g}/${m}/b/${s}/o${w}`,"i"),A={bucket:1,path:3},P=t===qm?"(?:storage.googleapis.com|storage.cloud.google.com)":t,$="([^?#]*)",U=new RegExp(`^https?://${P}/${s}/${$}`,"i"),M=[{regex:c,indices:l,postModify:r},{regex:E,indices:A,postModify:d},{regex:U,indices:{bucket:1,path:2},postModify:d}];for(let D=0;D<M.length;D++){const F=M[D],B=F.regex.exec(e);if(B){const b=B[F.indices.bucket];let v=B[F.indices.path];v||(v=""),i=new tt(b,v),F.postModify(i);break}}if(i==null)throw gS(e);return i}}class IS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function ES(n,e,t){let i=1,s=null,r=null,o=!1,c=0;function l(){return c===2}let d=!1;function m(...$){d||(d=!0,e.apply(null,$))}function g($){s=setTimeout(()=>{s=null,n(E,l())},$)}function w(){r&&clearTimeout(r)}function E($,...U){if(d){w();return}if($){w(),m.call(null,$,...U);return}if(l()||o){w(),m.call(null,$,...U);return}i<64&&(i*=2);let M;c===1?(c=2,M=0):M=(i+Math.random())*1e3,g(M)}let A=!1;function P($){A||(A=!0,w(),!d&&(s!==null?($||(c=2),clearTimeout(s),g(0)):$||(c=1)))}return g(0),r=setTimeout(()=>{o=!0,P(!0)},t),P}function kS(n){n(!1)}/**
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
 */function SS(n){return n!==void 0}function CS(n){return typeof n=="object"&&!Array.isArray(n)}function Ol(n){return typeof n=="string"||n instanceof String}function Fh(n){return Vl()&&n instanceof Blob}function Vl(){return typeof Blob<"u"}function Hh(n,e,t,i){if(i<e)throw Pc(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw Pc(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function Ko(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function Km(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const s=e(i)+"="+e(n[i]);t=t+s+"&"}return t=t.slice(0,-1),t}var Gn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Gn||(Gn={}));/**
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
 */function RS(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||s||r}/**
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
 */class AS{constructor(e,t,i,s,r,o,c,l,d,m,g,w=!0,E=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=m,this.connectionFactory_=g,this.retry=w,this.isUsingEmulator=E,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((A,P)=>{this.resolve_=A,this.reject_=P,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new xr(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=c=>{const l=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const c=r.getErrorCode()===Gn.NO_ERROR,l=r.getStatus();if(!c||RS(l,this.additionalRetryCodes_)&&this.retry){const m=r.getErrorCode()===Gn.ABORT;i(!1,new xr(!1,null,m));return}const d=this.successCodes_.indexOf(l)!==-1;i(!0,new xr(d,r))})},t=(i,s)=>{const r=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());SS(l)?r(l):r()}catch(l){o(l)}else if(c!==null){const l=Ml();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Gm():mS();o(l)}else{const l=pS();o(l)}};this.canceled_?t(!1,new xr(!1,null,!0)):this.backoffId_=ES(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&kS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class xr{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function xS(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function PS(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function $S(n,e){e&&(n["X-Firebase-GMPID"]=e)}function LS(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function DS(n,e,t,i,s,r,o=!0,c=!1){const l=Km(n.urlParams),d=n.url+l,m=Object.assign({},n.headers);return $S(m,e),xS(m,t),PS(m,r),LS(m,i),new AS(d,n.method,m,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o,c)}/**
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
 */function NS(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function MS(...n){const e=NS();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(Vl())return new Blob(n);throw new we(ve.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function OS(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function VS(n){if(typeof atob>"u")throw bS("base-64");return atob(n)}/**
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
 */const St={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class za{constructor(e,t){this.data=e,this.contentType=t||null}}function US(n,e){switch(n){case St.RAW:return new za(Qm(e));case St.BASE64:case St.BASE64URL:return new za(Ym(n,e));case St.DATA_URL:return new za(HS(e),BS(e))}throw Ml()}function Qm(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const r=i,o=n.charCodeAt(++t);i=65536|(r&1023)<<10|o&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function FS(n){let e;try{e=decodeURIComponent(n)}catch{throw As(St.DATA_URL,"Malformed data URL.")}return Qm(e)}function Ym(n,e){switch(n){case St.BASE64:{const s=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(s||r)throw As(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case St.BASE64URL:{const s=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(s||r)throw As(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=VS(e)}catch(s){throw s.message.includes("polyfill")?s:As(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}class Jm{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw As(St.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=jS(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function HS(n){const e=new Jm(n);return e.base64?Ym(St.BASE64,e.rest):FS(e.rest)}function BS(n){return new Jm(n).contentType}function jS(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class hn{constructor(e,t){let i=0,s="";Fh(e)?(this.data_=e,i=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Fh(this.data_)){const i=this.data_,s=OS(i,e,t);return s===null?null:new hn(s)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new hn(i,!0)}}static getBlob(...e){if(Vl()){const t=e.map(i=>i instanceof hn?i.data_:i);return new hn(MS.apply(null,t))}else{const t=e.map(o=>Ol(o)?US(St.RAW,o).data:o.data_);let i=0;t.forEach(o=>{i+=o.byteLength});const s=new Uint8Array(i);let r=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)s[r++]=o[c]}),new hn(s,!0)}}uploadData(){return this.data_}}/**
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
 */function Xm(n){let e;try{e=JSON.parse(n)}catch{return null}return CS(e)?e:null}/**
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
 */function zS(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function qS(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function Zm(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function WS(n,e){return e}class We{constructor(e,t,i,s){this.server=e,this.local=t||e,this.writable=!!i,this.xform=s||WS}}let Pr=null;function GS(n){return!Ol(n)||n.length<2?n:Zm(n)}function eg(){if(Pr)return Pr;const n=[];n.push(new We("bucket")),n.push(new We("generation")),n.push(new We("metageneration")),n.push(new We("name","fullPath",!0));function e(r,o){return GS(o)}const t=new We("name");t.xform=e,n.push(t);function i(r,o){return o!==void 0?Number(o):o}const s=new We("size");return s.xform=i,n.push(s),n.push(new We("timeCreated")),n.push(new We("updated")),n.push(new We("md5Hash",null,!0)),n.push(new We("cacheControl",null,!0)),n.push(new We("contentDisposition",null,!0)),n.push(new We("contentEncoding",null,!0)),n.push(new We("contentLanguage",null,!0)),n.push(new We("contentType",null,!0)),n.push(new We("metadata","customMetadata",!0)),Pr=n,Pr}function KS(n,e){function t(){const i=n.bucket,s=n.fullPath,r=new tt(i,s);return e._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:t})}function QS(n,e,t){const i={};i.type="file";const s=t.length;for(let r=0;r<s;r++){const o=t[r];i[o.local]=o.xform(i,e[o.server])}return KS(i,n),i}function tg(n,e,t){const i=Xm(e);return i===null?null:QS(n,i,t)}function YS(n,e,t,i){const s=Xm(e);if(s===null||!Ol(s.downloadTokens))return null;const r=s.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(d=>{const m=n.bucket,g=n.fullPath,w="/b/"+o(m)+"/o/"+o(g),E=Ko(w,t,i),A=Km({alt:"media",token:d});return E+A})[0]}function JS(n,e){const t={},i=e.length;for(let s=0;s<i;s++){const r=e[s];r.writable&&(t[r.server]=n[r.local])}return JSON.stringify(t)}class Ul{constructor(e,t,i,s){this.url=e,this.method=t,this.handler=i,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ng(n){if(!n)throw Ml()}function XS(n,e){function t(i,s){const r=tg(n,s,e);return ng(r!==null),r}return t}function ZS(n,e){function t(i,s){const r=tg(n,s,e);return ng(r!==null),YS(r,s,n.host,n._protocol)}return t}function ig(n){function e(t,i){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=hS():s=dS():t.getStatus()===402?s=uS(n.bucket):t.getStatus()===403?s=fS(n.path):s=i,s.status=t.getStatus(),s.serverResponse=i.serverResponse,s}return e}function sg(n){const e=ig(n);function t(i,s){let r=e(i,s);return i.getStatus()===404&&(r=lS(n.path)),r.serverResponse=s.serverResponse,r}return t}function eC(n,e,t){const i=e.fullServerUrl(),s=Ko(i,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,c=new Ul(s,r,ZS(n,t),o);return c.errorHandler=sg(e),c}function tC(n,e){const t=e.fullServerUrl(),i=Ko(t,n.host,n._protocol),s="DELETE",r=n.maxOperationRetryTime;function o(l,d){}const c=new Ul(i,s,o,r);return c.successCodes=[200,204],c.errorHandler=sg(e),c}function nC(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function iC(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=nC(null,e)),i}function sC(n,e,t,i,s){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let M="";for(let D=0;D<2;D++)M=M+Math.random().toString().slice(2);return M}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const d=iC(e,i,s),m=JS(d,t),g="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+l+`\r
Content-Type: `+d.contentType+`\r
\r
`,w=`\r
--`+l+"--",E=hn.getBlob(g,i,w);if(E===null)throw wS();const A={name:d.fullPath},P=Ko(r,n.host,n._protocol),$="POST",U=n.maxUploadRetryTime,N=new Ul(P,$,XS(n,t),U);return N.urlParams=A,N.headers=o,N.body=E.uploadData(),N.errorHandler=ig(e),N}class rC{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Gn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Gn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Gn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,s,r){if(this.sent_)throw fs("cannot .send() more than once");if(Pn(e)&&i&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw fs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw fs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw fs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw fs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class oC extends rC{initXhr(){this.xhr_.responseType="text"}}function Fl(){return new oC}/**
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
 */class ti{constructor(e,t){this._service=e,t instanceof tt?this._location=t:this._location=tt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ti(e,t)}get root(){const e=new tt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Zm(this._location.path)}get storage(){return this._service}get parent(){const e=zS(this._location.path);if(e===null)return null;const t=new tt(this._location.bucket,e);return new ti(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw TS(e)}}function aC(n,e,t){n._throwIfRoot("uploadBytes");const i=sC(n.storage,n._location,eg(),new hn(e,!0),t);return n.storage.makeRequestWithTokens(i,Fl).then(s=>({metadata:s,ref:n}))}function cC(n){n._throwIfRoot("getDownloadURL");const e=eC(n.storage,n._location,eg());return n.storage.makeRequestWithTokens(e,Fl).then(t=>{if(t===null)throw _S();return t})}function lC(n){n._throwIfRoot("deleteObject");const e=tC(n.storage,n._location);return n.storage.makeRequestWithTokens(e,Fl)}function uC(n,e){const t=qS(n._location.path,e),i=new tt(n._location.bucket,t);return new ti(n.storage,i)}/**
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
 */function dC(n){return/^[A-Za-z]+:\/\//.test(n)}function hC(n,e){return new ti(n,e)}function rg(n,e){if(n instanceof Hl){const t=n;if(t._bucket==null)throw vS();const i=new ti(t,t._bucket);return e!=null?rg(i,e):i}else return e!==void 0?uC(n,e):n}function fC(n,e){if(e&&dC(e)){if(n instanceof Hl)return hC(n,e);throw Pc("To use ref(service, url), the first argument must be a Storage instance.")}else return rg(n,e)}function Bh(n,e){const t=e==null?void 0:e[Wm];return t==null?null:tt.makeFromBucketSpec(t,n)}function pC(n,e,t,i={}){n.host=`${e}:${t}`;const s=Pn(e);s&&(Vc(`https://${n.host}/b`),Uc("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:r}=i;r&&(n._overrideAuthToken=typeof r=="string"?r:pf(r,n.app.options.projectId))}class Hl{constructor(e,t,i,s,r,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._isUsingEmulator=o,this._bucket=null,this._host=qm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=aS,this._maxUploadRetryTime=cS,this._requests=new Set,s!=null?this._bucket=tt.makeFromBucketSpec(s,this._host):this._bucket=Bh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=tt.makeFromBucketSpec(this._url,e):this._bucket=Bh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Hh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Hh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Ge(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ti(this,e)}_makeRequest(e,t,i,s,r=!0){if(this._deleted)return new IS(Gm());{const o=DS(e,this._appId,i,s,t,this._firebaseVersion,r,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,s).getPromise()}}const jh="@firebase/storage",zh="0.14.1";/**
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
 */const og="storage";function mC(n,e,t){return n=Le(n),aC(n,e,t)}function gC(n){return n=Le(n),cC(n)}function yC(n){return n=Le(n),lC(n)}function ag(n,e){return n=Le(n),fC(n,e)}function vC(n=Bc(),e){n=Le(n);const i=Co(n,og).getImmediate({identifier:e}),s=df("storage");return s&&wC(i,...s),i}function wC(n,e,t,i={}){pC(n,e,t,i)}function _C(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Hl(t,i,s,e,ni)}function bC(){Yn(new En(og,_C,"PUBLIC").setMultipleInstances(!0)),Ct(jh,zh,""),Ct(jh,zh,"esm2020")}bC();const cg=vC(Zc);function TC(n,e,t,i){return new Promise((s,r)=>{const o=new Image,c=new FileReader;c.onload=l=>{o.onload=()=>{let d=o.width,m=o.height;if(d>e||m>t){const P=Math.min(e/d,t/m);d=Math.round(d*P),m=Math.round(m*P)}const g=document.createElement("canvas");g.width=d,g.height=m,g.getContext("2d").drawImage(o,0,0,d,m);let E=.82;const A=()=>{g.toBlob(P=>{if(!P)return r(new Error("Canvas compression failed"));P.size<=i||E<=.3?s(P):(E-=.1,A())},"image/jpeg",E)};A()},o.onerror=()=>r(new Error("Failed to load image")),o.src=l.target.result},c.onerror=()=>r(new Error("Failed to read file")),c.readAsDataURL(n)})}async function Bl(n,e,t,i,s){if(!n)throw new Error("No file provided");const r=await TC(n,t,i,s);console.log(`[uploadRecipeImage] Compressed to ${(r.size/1024).toFixed(1)}KB → ${e}`);const o=ag(cg,e);await mC(o,r,{contentType:"image/jpeg"});const c=await gC(o);return console.log("[uploadRecipeImage] Upload complete:",e),c}async function lg(n,e){return Bl(n,`recipes/${e}/cover.jpg`,800,600,300*1024)}async function IC(n,e,t){return Bl(n,`recipes/${e}/steps/${t}.jpg`,800,600,300*1024)}async function EC(n,e,t,i){return Bl(n,`recipes/${e}/comments/${t}/${i}.jpg`,600,600,200*1024)}async function ug(n){try{const e=ag(cg,n);await yC(e),console.log("[deleteRecipeStorageFile] Deleted:",n)}catch(e){e.code!=="storage/object-not-found"&&console.error("[deleteRecipeStorageFile] Error:",e)}}const kC=20,SC=.4,CC="cubic-bezier(0.25, 1.0, 0.5, 1)",RC="cubic-bezier(0.2, 0, 0, 1)";let jl=null,zl=!1,Kn=!1,dg=0,hg=0,$c=!1,Lc=!1,He=null,xs=null,_o=null,Ii=null;function Qo(n){ql(),jl=n,zl=!0,xs=AC,_o=xC,Ii=PC,document.addEventListener("touchstart",xs,{passive:!0}),document.addEventListener("touchmove",_o,{passive:!1}),document.addEventListener("touchend",Ii,{passive:!0}),document.addEventListener("touchcancel",Ii,{passive:!0})}function ql(){xs&&(document.removeEventListener("touchstart",xs),document.removeEventListener("touchmove",_o),document.removeEventListener("touchend",Ii),document.removeEventListener("touchcancel",Ii)),zl=!1,Kn=!1,jl=null,He=null,xs=null,_o=null,Ii=null}function AC(n){if(!zl)return;const e=n.touches[0];e.clientX>kC||(He=document.querySelector(".ov.active"),He&&(Kn=!0,dg=e.clientX,hg=e.clientY,$c=!1,Lc=!1,He.style.transition="none"))}function xC(n){if(!Kn||!He)return;const e=n.touches[0],t=e.clientX-dg,i=e.clientY-hg;if(!$c){if(Math.abs(t)<8&&Math.abs(i)<8)return;$c=!0,Lc=Math.abs(t)>Math.abs(i)}if(!Lc){Kn=!1,He.style.transform="",He.style.transition="";return}n.preventDefault();const s=Math.max(0,t);He.style.transform=`translateX(${s}px)`}function PC(n){if(!Kn||!He){Kn=!1;return}Kn=!1;const e=He.style.transform,t=parseFloat(e.replace("translateX(",""))||0,i=window.innerWidth;if(t/i>=SC){He.style.transition=`transform 0.25s ${RC}`,He.style.transform=`translateX(${i}px)`;const r=He,o=jl;setTimeout(()=>{r.style.transform="",r.style.transition="",o&&o()},260)}else{He.style.transition=`transform 0.3s ${CC}`,He.style.transform="translateX(0)";const r=He;setTimeout(()=>{r.style.transition=""},310)}}let Di="view",Pt=null,Ei={},Et=[],jn=[],zn=0,rr={add:!1,edit:!1};function $C(n){if(n<=0)return"";if(n<60)return String(n);const e=Math.floor(n/60),t=n%60;return t===0?`${e} hour${e>1?"s":""}`:`${e} hour${e>1?"s":""} ${t} min`}function Ni(n,e){const t=f(n),i=f(e);if(!t)return"";const s=t.value.trim();if(!s)return"";if(isNaN(s))return s;const r=i?i.value:"min",o=parseFloat(s);return r==="hr"?o===1?"1 hour":`${o} hours`:`${o} min`}function qh(n,e){const t=f(n),i=f(e);if(!t)return NaN;const s=parseFloat(t.value.trim());return isNaN(s)?NaN:(i?i.value:"min")==="hr"?s*60:s}function LC(n){if(rr[n])return;const e=n==="add"?"rpreptime":"epreptime",t=n==="add"?"rpreptimeunit":"epreptimeunit",i=n==="add"?"rcooktime":"ecooktime",s=n==="add"?"rcooktimeunit":"ecooktimeunit",r=n==="add"?"rtotaltime":"etotaltime",o=n==="add"?"rtotaltimeunit":"etotaltimeunit",c=qh(e,t),l=qh(i,s),d=f(r),m=f(o);if(!d)return;if(isNaN(c)&&isNaN(l)){d.value="";return}const g=(isNaN(c)?0:c)+(isNaN(l)?0:l);if(g<=0){d.value="";return}if(g>=60){const w=$C(g);d.value=w,m&&(m.value="min")}else d.value=String(g),m&&(m.value="min")}function DC(n){rr[n]=!0}function fg(n,e){const t=f(n);if(!t)return"";const i=t.value.trim();if(!i)return"";if(isNaN(i))return i;const s=f(e),r=s?s.value:"min",o=parseFloat(i);return r==="hr"?o===1?"1 hour":`${o} hours`:`${o} min`}function jt(n){if(!n)return{value:"",unit:"min"};const e=n.match(/^(\d+\.?\d*)\s*hours?$/i);if(e)return{value:e[1],unit:"hr"};const t=n.match(/^(\d+\.?\d*)\s*min(utes?)?$/i);return t?{value:t[1],unit:"min"}:/\d+\s*hour/i.test(n)&&/\d+\s*min/i.test(n)?{value:n,unit:"min"}:isNaN(n)?{value:n,unit:"min"}:{value:n,unit:"min"}}function pg(n,e){const t=f(n);if(!t)return;const i=t.querySelectorAll(".diff-pill"),s=t.querySelector(`.diff-pill.sel[data-val="${e}"]`);if(i.forEach(r=>r.classList.remove("sel")),!s){const r=t.querySelector(`.diff-pill[data-val="${e}"]`);r&&r.classList.add("sel")}}function mg(n){const e=document.querySelector(`#${n} .diff-pill.sel`);return e?e.dataset.val:""}function Wl(n){return[...document.querySelectorAll("#"+n+" .tag.sel")].map(e=>e.dataset.tag)}function gg(n,e){document.querySelectorAll("#"+n+" .tag").forEach(t=>{t.classList.toggle("sel",(e||[]).includes(t.dataset.tag))})}function NC(n){n.classList.toggle("sel")}const Kr=[{cat:"Meal Type",tags:["Breakfast","Lunch","Dinner","Snack","Dessert","Drinks","Brunch","Bread & Baking","Sauce & Condiment","Preserve & Pickle"]},{cat:"Diet & Lifestyle",tags:["Vegetarian","Vegan","Pescatarian","Meat","Gluten-Free","Dairy-Free","Nut-Free","Sugar-Free","Healthy","High Protein","Low Carb","Keto","Heart Healthy","Pregnancy-Safe","Baby & Toddler","Halal","Kosher","Paleo","Egg-Free","Mediterranean"]},{cat:"Cook Style",tags:["Quick","Kid-Friendly","Date Night","Batch Cook","Freezer Friendly","One Pot","Special Occasion","Budget Friendly","Spicy","Pasta","Salad","Soup & Stew","Grill & BBQ","Slow Cooker","Air Fryer","Meal Prep","World Cuisine","Fermented & Preserved","Stovetop","Wrap & Sandwich","Street Food","Raw & No-Cook","Camping & Outdoors"]},{cat:"Occasion",tags:["Holiday","Party","Summer","Winter Comfort","Halloween","Thanksgiving","Easter","Valentine's Day","Game Day","Graduation","Brunch Party","Ramadan","Hanukkah"]},{cat:"Cuisine",tags:["Italian","Mexican","Japanese","Chinese","Indian","Thai","Greek","French","Middle Eastern","Korean","Spanish","Vietnamese","American","African","Latin American","Turkish","Mediterranean Cuisine"]},{cat:"Protein",tags:["Chicken","Beef","Pork","Fish","Seafood","Eggs","Beans & Legumes","Nuts & Seeds","Cheese"]}];function Dc(n){if(n==="my"){const e=u.recFilters;let t=e.tags.length+e.protein.length;return e.difficulty&&t++,e.cookTime!=="any"&&t++,e.serves!=="any"&&t++,t}else{let e=u.comTags.length;return u.comCuisine!=="all"&&e++,u.comTime!=="any"&&e++,u.comMinRating>0&&e++,e}}function yg(n){const t=le(n==="my"?"ks-recFiltersOpen":"ks-comFiltersOpen"),i=Dc(n),s=i>0?` (${i})`:"";let r=`<button class="filter-toggle" id="${n}-filter-toggle" onclick="toggleFilterPanel('${n}')">
    <span>Filters${s}</span><span>${t?"▲":"▼"}</span>
  </button>`;if(r+=`<div class="filter-panel" id="${n}-filter-panel" style="display:${t?"block":"none"}">`,n==="my"){const o=u.recFilters;r+='<div class="filter-section"><div class="filter-section-title">Difficulty</div><div class="filter-row">',["Easy","Medium","Hard"].forEach(c=>{r+=`<button class="filter-pill${o.difficulty===c?" sel":""}" onclick="setRecDifficulty('${c}')">${c}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Cook Time</div><div class="filter-row">',[["any","Any"],["under30","Under 30 min"],["under60","Under 1 hour"],["over60","Over 1 hour"]].forEach(([c,l])=>{r+=`<button class="filter-pill${o.cookTime===c?" sel":""}" onclick="setRecCookTime('${c}')">${l}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Serves</div><div class="filter-row">',[["any","Any"],["1-2","1–2"],["3-4","3–4"],["5+","5+"]].forEach(([c,l])=>{r+=`<button class="filter-pill${o.serves===c?" sel":""}" onclick="setRecServes('${c}')">${l}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Protein</div><div class="filter-row">',Kr.find(c=>c.cat==="Protein").tags.forEach(c=>{r+=`<button class="filter-pill${o.protein.includes(c)?" sel":""}" onclick="toggleRecProtein('${c}')">${c}</button>`}),r+="</div></div>",r+=`<div class="filter-section"><div class="filter-section-title">Tags</div><div class="filter-row" style="max-height:${le("ks-recTagsExpanded")?"none":"0"};overflow:hidden;transition:max-height .2s" id="my-tags-wrap">`,Kr.forEach(c=>{c.tags.forEach(l=>{r+=`<button class="filter-pill${o.tags.includes(l)?" sel":""}" onclick="toggleRecTag('${l.replace(/'/g,"\\'")}')">${l}</button>`})}),r+="</div>",r+=`<button class="filter-pill" style="margin-top:4px;font-size:.7rem;color:var(--ac);border-color:var(--ac)" onclick="toggleRecTagsExpand()">${le("ks-recTagsExpanded")?"Hide tags ▲":"Show all tags ▼"}${o.tags.length?` (${o.tags.length} selected)`:""}</button>`,r+="</div>",i>0&&(r+='<button class="filter-pill" style="color:var(--rd);border-color:var(--rd);width:100%;text-align:center;margin-top:4px" onclick="clearRecFilters()">Clear all filters</button>')}else r+='<div class="filter-section"><div class="filter-section-title">Min Rating</div><div class="filter-row">',[[0,"Any"],[1,"1★+"],[2,"2★+"],[3,"3★+"],[4,"4★+"]].forEach(([c,l])=>{r+=`<button class="filter-pill${u.comMinRating===c?" sel":""}" onclick="setComMinRating(${c})">${l}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Cook Time</div><div class="filter-row">',[["any","Any"],["under30","Under 30 min"],["30to60","30–60 min"],["over60","Over 1 hour"]].forEach(([c,l])=>{r+=`<button class="filter-pill${u.comTime===c?" sel":""}" onclick="setComTime('${c}')">${l}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Cuisine</div><div class="filter-row">',["all","Italian","Mexican","Japanese","Chinese","Indian","Thai","Greek","French","Middle Eastern","Korean","Spanish","Vietnamese","American","African","Latin American","Turkish","Mediterranean","Bangladeshi"].forEach(c=>{r+=`<button class="filter-pill${u.comCuisine===c.toLowerCase()?" sel":""}" onclick="setComCuisine('${c.toLowerCase()}')">${c==="all"?"All":c}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Sort</div><div class="filter-row">',[["newest","Newest"],["popular","Most Popular"],["rated","Highest Rated"],["az","A → Z"],["cooktime","Cook Time"]].forEach(([c,l])=>{r+=`<button class="filter-pill${u.comSort===c?" sel":""}" onclick="setComSort('${c}')">${l}</button>`}),r+="</div></div>",r+=`<div class="filter-section"><div class="filter-section-title">Tags</div><div class="filter-row" style="max-height:${le("ks-comTagsOpen")?"none":"0"};overflow:hidden;transition:max-height .2s" id="com-tags-wrap">`,Kr.forEach(c=>{c.tags.forEach(l=>{r+=`<button class="filter-pill${u.comTags.includes(l)?" sel":""}" onclick="toggleComTag('${l.replace(/'/g,"\\'")}')">${l}</button>`})}),r+="</div>",r+=`<button class="filter-pill" style="margin-top:4px;font-size:.7rem;color:var(--ac);border-color:var(--ac)" onclick="toggleComTagsPanel()">${le("ks-comTagsOpen")?"Hide tags ▲":"Show all tags ▼"}${u.comTags.length?` (${u.comTags.length} selected)`:""}</button>`,r+="</div>",Dc("com")>0&&(r+='<button class="filter-pill" style="color:var(--rd);border-color:var(--rd);width:100%;text-align:center;margin-top:4px" onclick="clearComFilters()">Clear all filters</button>');return r+="</div>",r}function MC(n){u.recSearch=n,Je()}function OC(n){u.recSort=n,Ne("ks-recSort",n),Je()}function VC(n){const e=n==="my"?"ks-recFiltersOpen":"ks-comFiltersOpen",t=f(`${n}-filter-panel`),i=f(`${n}-filter-toggle`);if(!t)return;const s=t.style.display!=="none";t.style.display=s?"none":"block",Ne(e,!s);const r=Dc(n),o=r>0?` (${r})`:"";i&&(i.innerHTML=`<span>Filters${o}</span><span>${s?"▼":"▲"}</span>`)}function UC(n){u.recFilters.difficulty=u.recFilters.difficulty===n?"":n,Gi(),Je()}function FC(n){u.recFilters.cookTime=n,Gi(),Je()}function HC(n){u.recFilters.serves=n,Gi(),Je()}function BC(n){const e=u.recFilters.protein.indexOf(n);e>=0?u.recFilters.protein.splice(e,1):u.recFilters.protein.push(n),Gi(),Je()}function jC(n){const e=u.recFilters.tags.indexOf(n);e>=0?u.recFilters.tags.splice(e,1):u.recFilters.tags.push(n),Gi(),Je()}function zC(){const n=le("ks-recTagsExpanded");Ne("ks-recTagsExpanded",!n),Je()}function qC(){u.recFilters={tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[]},u.recSearch="",Gi(),Je()}function Gi(){Ne("ks-recFilters",u.recFilters)}function WC(){const n=le("ks-recFilters");n&&(u.recFilters={tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[],...n}),u.recSort=le("ks-recSort")||"az"}WC();function GC(){const n=le("ks-comTagsOpen");Ne("ks-comTagsOpen",!n),ut()}function KC(){u.comTags=[],u.comCuisine="all",u.comTime="any",u.comMinRating=0,u.comSort="newest",u.comSearch="",u.comPage=0,ut()}function QC(n){if(!n)return 0;const e=n.match(/(\d+)/);return e?parseInt(e[1]):0}function YC(n){const e=Array.from({length:5},(c,l)=>`<span class="star${l<n.rating?" on":""}">${l<n.rating?"★":"☆"}</span>`).join(""),t=n.sourceUrl?`<a href="${n.sourceUrl}" target="_blank" onclick="event.stopPropagation()" style="font-size:.68rem;color:var(--ac);text-decoration:none;border:1px solid rgba(212,168,83,.3);border-radius:20px;padding:2px 8px;background:transparent">🔗 View original</a>`:n.source?`<span class="sbdg">${n.source}</span>`:"",i=n.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;max-height:140px"><img src="${n.imageUrl}" alt="" style="width:100%;height:140px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",s=[n.totalTime||n.cookTime?`⏱ ${n.totalTime||n.cookTime}`:"",n.servings?`🍽 ${n.servings} servings`:""].filter(Boolean),r=s.length?`<div style="display:flex;gap:6px;margin-top:6px;flex-wrap:wrap">${s.map(c=>`<span style="font-size:.68rem;color:var(--mt);background:var(--b1);border-radius:8px;padding:2px 8px">${c}</span>`).join("")}</div>`:"",o=n.summary?`<div class="rnot" style="color:var(--tx2);margin-top:6px;font-style:italic">${n.summary}</div>`:n.description?`<div class="rnot" style="color:var(--tx2);margin-top:6px">${n.description.substring(0,100)}${n.description.length>100?"…":""}</div>`:"";return`<div class="rcd${n.favorited?" fav":""}" onclick="openRecipeView('${n.id}')">${i}<div class="rrow"><div class="rnm">${n.name}</div><div class="rfav" onclick="event.stopPropagation();togFav('${n.id}')">${n.favorited?"❤️":"🤍"}</div></div><div class="stars">${e}</div>${r}${o}${n.notes?`<div class="rnot">${n.notes}</div>`:""}<div class="rmeta"><span>${n.savedAt}</span>${t}</div></div>`}function JC(n){u.rt=n,document.querySelectorAll(".rtab").forEach(t=>t.classList.remove("active"));const e=f("rtab-"+n);e&&e.classList.add("active"),n==="community"?Kl():Je()}function Je(){if(u.rt==="community")return;let n=[...u.recs];if(u.rt==="fav"?n=n.filter(o=>o.favorited):u.rt==="top"?n=n.filter(o=>o.rating>=4):u.rt==="quick"?n=n.filter(o=>(o.tags||[]).includes("Quick")):u.rt==="kid"&&(n=n.filter(o=>(o.tags||[]).includes("Kid-Friendly"))),u.recSearch){const o=u.recSearch.toLowerCase();n=n.filter(c=>(c.name||"").toLowerCase().includes(o))}const e=u.recFilters;e.tags.length&&(n=n.filter(o=>e.tags.every(c=>(o.tags||[]).includes(c)))),e.difficulty&&(n=n.filter(o=>o.difficulty===e.difficulty)),e.cookTime&&e.cookTime!=="any"&&(n=n.filter(o=>{const c=Yr(o.cookTime||o.totalTime);return c?e.cookTime==="under30"?c<=30:e.cookTime==="under60"?c<=60:e.cookTime==="over60"?c>60:!0:!1})),e.serves&&e.serves!=="any"&&(n=n.filter(o=>{const c=QC(o.servings);return c?e.serves==="1-2"?c<=2:e.serves==="3-4"?c>=3&&c<=4:e.serves==="5+"?c>=5:!0:!1})),e.protein.length&&(n=n.filter(o=>e.protein.some(c=>(o.tags||[]).includes(c))));const t=u.recSort||"az";t==="az"?n.sort((o,c)=>(o.name||"").localeCompare(c.name||"")):t==="newest"?n.sort((o,c)=>new Date(c.savedAt||0)-new Date(o.savedAt||0)):t==="rating"&&n.sort((o,c)=>(c.rating||0)-(o.rating||0));const i=f("rsub");i&&(i.textContent=n.length+" recipe"+(n.length!==1?"s":""));const s=f("rbody");if(!s)return;const r=`<div style="margin-bottom:12px">
    <input class="fi" id="rec-search" placeholder="Search recipes…" value="${(u.recSearch||"").replace(/"/g,"&quot;")}" oninput="setRecSearch(this.value)" style="margin-bottom:8px"/>
    <div style="display:flex;gap:6px;margin-bottom:8px">
      <select class="fsel" onchange="setRecSort(this.value)" style="font-size:.78rem;padding:7px 10px;flex:1">
        <option value="az"${t==="az"?" selected":""}>A → Z</option>
        <option value="newest"${t==="newest"?" selected":""}>Newest first</option>
        <option value="rating"${t==="rating"?" selected":""}>Highest rated</option>
      </select>
    </div>
    ${yg("my")}
  </div>`;if(!n.length){const o=u.recSearch||e.tags.length||e.difficulty||e.cookTime!=="any"||e.serves!=="any"||e.protein.length;s.innerHTML=r+`<div class="es"><div class="ei">📖</div><p>${o?"No recipes match your filters.":u.rt==="fav"?"No favorites yet!":u.rt==="top"?"No 4–5 star recipes yet.":u.rt==="quick"?"No quick recipes saved yet.":u.rt==="kid"?"No kid-friendly recipes yet.":"No recipes saved yet.<br/>Mark meals as cooked or tap + Add."}</p></div>`;return}s.innerHTML=r+`<div class="recipe-grid">${n.map(YC).join("")}</div>`}async function XC(n){const e=u.recs.find(t=>t.id===n);e&&(await nt({...e,favorited:!e.favorited}),S(e.favorited?"Removed from favorites":"Added to favorites! ❤️"))}function ZC(){f("savrecbtn").disabled=!f("rn").value.trim()}async function eR(){const n=f("rurl").value.trim();if(!n)return;const e=f("rurlstatus"),t=f("rimportbtn");e.style.display="block",e.style.color="var(--mt)",e.textContent="🤖 Importing recipe with AI…",t.disabled=!0;try{const s=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})})).json();if(!s.success){e.style.color="var(--rd)",e.textContent="⚠️ "+(s.error||"Couldn't import this recipe"),t.disabled=!1;return}const r=s.recipe,o=Gl(r);if(f("rn").value=r.title||"",f("rd").value=o,f("rnotes").value=r.notes||"",f("rsourceurl").value=n,f("rcuisine")&&(f("rcuisine").value=r.cuisine||""),r.tags&&r.tags.length&&gg("rtags",r.tags),f("savrecbtn").disabled=!r.title,uR(r.imageUrl),u._importedRecipe={ingredientsRaw:r.ingredients||[],stepsRaw:r.steps||[],imageUrl:r.imageUrl||null,prepTime:r.prepTime||"",cookTime:r.cookTime||"",totalTime:r.totalTime||"",servings:r.servings||"",difficulty:r.difficulty||"",recipeYield:r.recipeYield||"",storageInstructions:r.storageInstructions||"",summary:r.summary||""},r.prepTime){const l=jt(r.prepTime);f("rpreptime")&&(f("rpreptime").value=l.value),f("rpreptimeunit")&&(f("rpreptimeunit").value=l.unit)}if(r.cookTime){const l=jt(r.cookTime);f("rcooktime")&&(f("rcooktime").value=l.value),f("rcooktimeunit")&&(f("rcooktimeunit").value=l.unit)}if(r.totalTime){const l=jt(r.totalTime);f("rtotaltime")&&(f("rtotaltime").value=l.value),f("rtotaltimeunit")&&(f("rtotaltimeunit").value=l.unit),rr.add=!0}r.servings&&f("rserves")&&(f("rserves").value=r.servings),r.difficulty&&["Easy","Medium","Hard"].includes(r.difficulty)&&pg("rdiff",r.difficulty),r.recipeYield&&f("ryield")&&(f("ryield").value=r.recipeYield),r.storageInstructions&&f("rstorage")&&(f("rstorage").value=r.storageInstructions);const c=[r.prepTime?`Prep: ${r.prepTime}`:"",r.cookTime?`Cook: ${r.cookTime}`:"",r.servings?`Serves: ${r.servings}`:""].filter(Boolean);e.style.color="var(--gn)",e.textContent="✓ Recipe imported! "+(c.length?c.join(" · "):"Review and save.")}catch(i){console.error("importFromUrl:",i),e.style.color="var(--rd)",e.textContent="⚠️ Couldn't import — try copying the recipe text manually."}t.disabled=!1}function tR(n){const e=f("importOnePane"),t=f("importManyPane"),i=f("importOneTab"),s=f("importManyTab");e&&(e.style.display=n==="one"?"block":"none"),t&&(t.style.display=n==="many"?"block":"none"),i&&(i.style.background=n==="one"?"var(--ac)":"",i.style.color=n==="one"?"var(--bg)":""),s&&(s.style.background=n==="many"?"var(--ac)":"",s.style.color=n==="many"?"var(--bg)":"")}function nR(n){const e=/https?:\/\/[^\s<>"'`,;)}\]]+/gi,i=(n.match(e)||[]).map(s=>s.replace(/[.,;:!?)}\]]+$/,""));return[...new Set(i)]}function iR(n){const e=n.toLowerCase(),t=[{pattern:/youtube\.com|youtu\.be/,name:"YouTube"},{pattern:/tiktok\.com/,name:"TikTok"},{pattern:/instagram\.com\/reel/,name:"Instagram Reel"},{pattern:/vimeo\.com/,name:"Vimeo"},{pattern:/twitter\.com|x\.com/,name:"X/Twitter"}];for(const r of t)if(r.pattern.test(e))return{status:"video",reason:`${r.name} video — can't extract recipe text`};const i=[{pattern:/evernote\.com/,name:"Evernote"},{pattern:/docs\.google\.com/,name:"Google Docs"},{pattern:/drive\.google\.com/,name:"Google Drive"},{pattern:/dropbox\.com/,name:"Dropbox"},{pattern:/notion\.so/,name:"Notion"},{pattern:/onenote\.com|onedrive\.live\.com/,name:"OneDrive/OneNote"},{pattern:/icloud\.com/,name:"iCloud"},{pattern:/keep\.google\.com/,name:"Google Keep"}];for(const r of i)if(r.pattern.test(e))return{status:"private",reason:`${r.name} — private or inaccessible link`};const s=[{pattern:/cooking\.nytimes\.com/,name:"NYT Cooking"},{pattern:/food52\.com/,name:"Food52"}];for(const r of s)if(r.pattern.test(e))return{status:"paywall",reason:`${r.name} — may be paywalled`};return{status:"ok",reason:""}}async function sR(){const n=f("bulkUrls"),e=n?n.value.trim():"";if(!e)return;const t=nR(e);if(!t.length){S("No URLs found in the text");return}const i=t.map(A=>({url:A,...iR(A)})),s=i.filter(A=>A.status==="ok"),r=i.filter(A=>A.status==="paywall"),o=i.filter(A=>A.status==="video"),c=i.filter(A=>A.status==="private"),l=f("bulkImportProgress");if(!l)return;l.style.display="block";const d=f("bulkImportBtn");d&&(d.disabled=!0);const m=[...s,...r],g=[],w=m.filter(A=>{const P=u.recs.find($=>$.sourceUrl&&$.sourceUrl===A.url);return P?(g.push({url:A.url,name:P.name||P.url}),!1):!0}),E={success:[],duplicates:g,failed:[],skipped:[...o,...c]};for(let A=0;A<w.length;A++){const P=w[A],$=P.status==="paywall"?" — may be paywalled":"";A>0&&(l.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Waiting before next import… (${A+1} of ${w.length})</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`,await new Promise(U=>setTimeout(U,2e3))),l.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Importing ${A+1} of ${w.length}…${$}</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;try{const U=await rR(P.url,l,A,w.length);if(U.success&&U.recipe){const N=U.recipe,M=Gl(N),D="rec-"+Date.now()+"-"+Math.random().toString(36).slice(2,6);await nt({id:D,name:N.title||"Untitled Recipe",description:M,notes:N.notes||"",rating:0,favorited:!1,sourceUrl:P.url,source:"AI Import",imageUrl:N.imageUrl||null,ingredientsRaw:N.ingredients||[],stepsRaw:N.steps||[],prepTime:N.prepTime||"",cookTime:N.cookTime||"",totalTime:N.totalTime||"",servings:N.servings||"",difficulty:N.difficulty||"",recipeYield:N.recipeYield||"",storageInstructions:N.storageInstructions||"",tags:N.tags||[],savedAt:new Date().toLocaleDateString()}),E.success.push({url:P.url,name:N.title})}else{const N=aR(U.reason,U.error);E.failed.push({url:P.url,error:N})}}catch(U){E.failed.push({url:P.url,error:U.message})}}cR(l,E),d&&(d.disabled=!1)}async function rR(n,e,t,i){const s=[1e4,2e4,4e4],r=3,o=oR(n),c=await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});let l=await c.json();if(c.status!==429&&l.reason!=="rate_limit")return l;for(let d=0;d<r;d++){const m=s[d]/1e3;e.innerHTML=`<div style="font-size:.78rem;color:var(--yw,orange)">Rate limit hit — waiting ${m}s before retrying ${o}… (${t+1} of ${i})</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`,await new Promise(w=>setTimeout(w,s[d])),e.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Retrying ${t+1} of ${i} (attempt ${d+2})…</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;const g=await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(l=await g.json(),g.status!==429&&l.reason!=="rate_limit")return l}return{success:!1,error:"Rate limit — could not recover after 3 retries",reason:"rate_limit"}}function oR(n){try{const e=new URL(n),t=e.hostname.replace(/^www\./,""),i=e.pathname.replace(/\/$/,"").split("/").filter(Boolean).slice(0,1).join("/");return i?`${t}/${i}`:t}catch{return n.length>40?"…"+n.slice(-40):n}}function aR(n,e){return{rate_limit:"Rate limit hit — too many requests",timeout:"Timed out — page took too long to load",page_blocked:"Page blocked access (login required or bot detection)",page_not_found:"Page not found (404)",page_inaccessible:"Page not accessible",no_recipe:"No recipe content found on page",api_error:"AI parsing error",fetch_error:"Could not fetch page"}[n]||e||"Unknown error"}function cR(n,e){let t="";e.success.length&&(t+=`<div style="color:var(--gn);font-size:.78rem;margin-bottom:6px">✓ ${e.success.length} imported successfully</div>`,t+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.success.forEach(i=>{t+=`<div>• ${i.name||i.url}</div>`}),t+="</div>"),e.duplicates.length&&(t+=`<div style="color:var(--ac);font-size:.78rem;margin-bottom:6px">● ${e.duplicates.length} already in your collection — skipped</div>`,t+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.duplicates.forEach(i=>{t+=`<div>• ${i.name||i.url}</div>`}),t+="</div>"),e.skipped.length&&(t+=`<div style="color:var(--yw,orange);font-size:.78rem;margin-bottom:6px">⚠ ${e.skipped.length} skipped — video or inaccessible links</div>`,t+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.skipped.forEach(i=>{t+=`<div>• ${i.url} <span style="color:var(--mt);font-size:.68rem">(${i.reason})</span></div>`}),t+="</div>"),e.failed.length&&(t+=`<div style="color:var(--rd);font-size:.78rem;margin-bottom:6px">✗ ${e.failed.length} failed</div>`,t+='<div style="font-size:.72rem;margin-bottom:10px;line-height:1.8">',e.failed.forEach(i=>{t+='<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">',t+=`<span style="color:var(--mt);flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i.url}</span>`,t+=`<span style="color:var(--rd);font-size:.66rem;white-space:nowrap">${i.error}</span>`,t+=`<button class="btn bsm" onclick="retryBulkImport('${i.url.replace(/'/g,"\\'")}')">Retry</button>`,t+="</div>"}),t+="</div>"),!e.success.length&&!e.failed.length&&!e.skipped.length&&!e.duplicates.length&&(t='<div style="font-size:.78rem;color:var(--mt)">No URLs were processed.</div>'),n.innerHTML=t}async function lR(n){const e=f("bulkImportProgress");if(!e)return;const t=u.recs.find(s=>s.sourceUrl&&s.sourceUrl===n);if(t){S(`Already imported: ${t.name||n}`);return}const i=e.innerHTML;e.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Retrying ${n}…</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;try{const r=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})})).json();if(r.success&&r.recipe){const o=r.recipe,c=Gl(o),l="rec-"+Date.now()+"-"+Math.random().toString(36).slice(2,6);await nt({id:l,name:o.title||"Untitled Recipe",description:c,notes:o.notes||"",rating:0,favorited:!1,sourceUrl:n,source:"AI Import",imageUrl:o.imageUrl||null,ingredientsRaw:o.ingredients||[],stepsRaw:o.steps||[],prepTime:o.prepTime||"",cookTime:o.cookTime||"",totalTime:o.totalTime||"",servings:o.servings||"",difficulty:o.difficulty||"",recipeYield:o.recipeYield||"",storageInstructions:o.storageInstructions||"",tags:o.tags||[],savedAt:new Date().toLocaleDateString()}),S(`Imported: ${o.title||"Recipe"}`),e.innerHTML=i.replace(new RegExp(`<div style="display:flex[^]*?${n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}[^]*?</div>\\s*</div>`),`<div style="color:var(--gn);font-size:.72rem">✓ ${o.title||n} — imported</div>`)}else S("Import failed: "+(r.error||"Unknown error")),e.innerHTML=i}catch(s){S("Import failed: "+s.message),e.innerHTML=i}}function Gl(n){const e=[];return n.description&&(e.push(n.description),e.push("")),n.ingredients&&n.ingredients.length&&(e.push("Ingredients:"),n.ingredients.forEach(t=>{if(typeof t=="string")e.push(`- ${t}`);else{const i=[t.amount,t.unit].filter(Boolean).join(" ");e.push(`- ${i?i+" ":""}${t.name}`)}}),e.push("")),n.steps&&n.steps.length&&(e.push("Steps:"),n.steps.forEach((t,i)=>{e.push(`${i+1}. ${t}`)})),e.join(`
`)}function uR(n){const e=document.getElementById("rimgpreview");if(e&&e.remove(),!n)return;const t=f("addRecCoverZone");t&&(t.classList.add("has-preview"),t.innerHTML=`<img src="${n}" alt="Cover preview" onerror="this.parentElement.classList.remove('has-preview')"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('add')">✕</button>`)}async function dR(){var P,$,U,N;const n=f("rn").value.trim();if(!n)return;const e=f("rd").value.trim(),t=f("rsourceurl")?f("rsourceurl").value.trim():"",i=f("rcuisine")?f("rcuisine").value.trim():"",s=Wl("rtags"),r=document.getElementById("rpubtoggle"),o=r?r.classList.contains("on"):!1,c=u._importedRecipe||{},l="rec-"+Date.now();let d=c.imageUrl||null;if(Pt)try{S("Uploading cover photo…"),d=await lg(Pt,l),Pt=null}catch(M){console.error("Cover upload failed:",M),S("Cover photo upload failed — saving recipe without it")}const m={id:l,name:n,rating:u.nr,favorited:!1,notes:f("rnotes").value.trim(),description:e,source:t?"AI Import":"Manual",sourceUrl:t||null,imageUrl:d,tags:s,cuisine:i,prepTime:Ni("rpreptime","rpreptimeunit")||c.prepTime||"",cookTime:Ni("rcooktime","rcooktimeunit")||c.cookTime||"",totalTime:fg("rtotaltime","rtotaltimeunit")||c.totalTime||"",servings:(f("rserves")?f("rserves").value.trim():"")||c.servings||"",difficulty:mg("rdiff")||c.difficulty||"",recipeYield:(f("ryield")?f("ryield").value.trim():"")||c.recipeYield||"",storageInstructions:(f("rstorage")?f("rstorage").value.trim():"")||c.storageInstructions||"",summary:(f("rsummary")?f("rsummary").value.trim():"")||c.summary||"",ingredientsRaw:c.ingredientsRaw||[],stepsRaw:c.stepsRaw||[],stepPhotos:{},cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:o};if(!m.summary&&(m.name||m.description))try{S("Generating summary…");const M=((P=m.ingredientsRaw)==null?void 0:P.join(", "))||m.description||"",B=((N=(U=($=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:200,messages:[{role:"user",content:`Write a 2-sentence summary for this recipe. First sentence: what the dish is. Second sentence: what makes it special or notable. Max 200 characters total. Be concise.

Title: ${m.name}
Cuisine: ${m.cuisine||""}
Ingredients: ${M.substring(0,500)}`}]})})).json()).content)==null?void 0:$[0])==null?void 0:U.text)==null?void 0:N.trim())||"";B&&(m.summary=B)}catch(M){console.error("Auto-summary generation failed:",M)}if(o){const M=X(),D=(M==null?void 0:M.displayName)||localStorage.getItem("ks-who")||"Anonymous",F=await tl(m,D);m.publicId=F.id,it("published",Re(m.name||"a recipe")+" to community")}await nt(m),f("rn").value="",f("rnotes").value="",f("rd").value="",f("rsourceurl").value="",f("rurl").value="",f("rcuisine")&&(f("rcuisine").value=""),f("rpreptime")&&(f("rpreptime").value=""),f("rcooktime")&&(f("rcooktime").value=""),f("rtotaltime")&&(f("rtotaltime").value=""),f("rserves")&&(f("rserves").value=""),f("rpreptimeunit")&&(f("rpreptimeunit").value="min"),f("rcooktimeunit")&&(f("rcooktimeunit").value="min"),f("rtotaltimeunit")&&(f("rtotaltimeunit").value="min"),f("ryield")&&(f("ryield").value=""),f("rstorage")&&(f("rstorage").value=""),f("rsummary")&&(f("rsummary").value=""),document.querySelectorAll("#rdiff .diff-pill").forEach(M=>M.classList.remove("sel")),rr.add=!1,gg("rtags",[]),u.nr=0,u._importedRecipe=null,f("savrecbtn").disabled=!0,Ps("rstars",0);const w=document.getElementById("rimgpreview");w&&w.remove();const E=f("addRecCoverZone");E&&(E.classList.remove("has-preview"),E.innerHTML='<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop</div>'),r&&r.classList.remove("on");const A=f("rurlstatus");A&&(A.style.display="none",A.textContent=""),S("Recipe saved! 📖"),ge("arec")}function vg(n){const e=u.recs.find(D=>D.id===n);if(!e)return;u.eid=n,Di="view";const t=f("erecTitle");t&&(t.textContent="Recipes"),Qo(()=>or());let i;e.imageUrl?i=`<div class="rv-cover">
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
  </div>`,d=[e.prepTime?`🔪 Prep: ${e.prepTime}`:"",e.cookTime?`🔥 Cook: ${e.cookTime}`:"",e.totalTime?`⏱ Total: ${e.totalTime}`:"",e.servings?`🍽 Serves: ${e.servings}`:"",e.recipeYield?`🍪 Yield: ${e.recipeYield}`:"",e.difficulty==="Easy"?"⭐ Easy":e.difficulty==="Medium"?"⭐⭐ Medium":e.difficulty==="Hard"?"⭐⭐⭐ Hard":""].filter(Boolean),m=d.length?`<div class="rv-meta">${d.map(D=>`<div class="rv-meta-pill">${D}</div>`).join("")}</div>`:"",g=e.cuisine?`<div class="rv-cuisine">${e.cuisine}</div>`:"",w=(e.tags||[]).length?`<div class="rv-tags">${e.tags.map(D=>`<span class="com-tag">${D}</span>`).join("")}</div>`:"";let E="";if(e.ingredientsRaw&&e.ingredientsRaw.length)E=`<div class="rv-section">Ingredients</div><ul class="rv-ingredients">${e.ingredientsRaw.map(F=>{if(typeof F=="string")return`<li>${ue(F)}</li>`;const B=[F.amount,F.unit].filter(Boolean).join(" ");return`<li>${B?`<strong>${ue(B)}</strong> `:""}${ue(F.name||"")}</li>`}).join("")}</ul>`;else if(e.description){const D=e.description.split(`
`),F=D.findIndex(b=>/^ingredients/i.test(b.trim())),B=D.findIndex(b=>/^steps/i.test(b.trim()));if(F>=0){const b=B>F?B:D.length,v=D.slice(F+1,b).filter(_=>_.trim());v.length&&(E=`<div class="rv-section">Ingredients</div><ul class="rv-ingredients">${v.map(_=>`<li>${ue(_.replace(/^[-•*]\s*/,""))}</li>`).join("")}</ul>`)}}let A="";if(e.stepsRaw&&e.stepsRaw.length)A=`<div class="rv-section">Instructions</div><ol class="rv-steps">${e.stepsRaw.map((F,B)=>{var k;const b=typeof F=="string"?F:F.text||"",v=(k=e.stepPhotos)==null?void 0:k[B],_=v?`<div class="rv-step-photo" onclick="openPhotoViewer(['${v}'],0)"><img src="${v}" alt="Step ${B+1}" onerror="this.parentElement.style.display='none'"/></div>`:"";return`<li>${ue(b)}${_}</li>`}).join("")}</ol>`;else if(e.description){const D=e.description.split(`
`),F=D.findIndex(B=>/^steps/i.test(B.trim()));if(F>=0){const B=D.slice(F+1).filter(b=>b.trim());B.length&&(A=`<div class="rv-section">Instructions</div><ol class="rv-steps">${B.map(b=>`<li>${ue(b.replace(/^\d+\.\s*/,""))}</li>`).join("")}</ol>`)}}let P="";!E&&!A&&e.description&&(P=`<div class="rv-section">Details</div><div style="font-size:.88rem;color:var(--tx2);line-height:1.8;white-space:pre-wrap">${ue(e.description)}</div>`);const $=e.storageInstructions?`<div class="rv-section">🗄️ Storage</div><div class="rv-storage">${ue(e.storageInstructions)}</div>`:"",U=e.notes?`<div class="rv-section">Notes</div><div style="font-size:.86rem;color:var(--tx2);line-height:1.6;font-style:italic;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">${ue(e.notes)}</div>`:"",N=e.sourceUrl?`<div style="margin-top:16px"><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);text-decoration:none">🔗 View original recipe ↗</a></div>`:"",M=`<div class="rv-actions">
    <button class="btn bp bsm" style="flex:1" onclick="scheduleRecipe('${e.name.replace(/'/g,"\\'")}')">📅 Schedule</button>
    <button class="btn bs bsm" style="flex:1" onclick="addRecIngToShop('${e.id}')">🛒 Shop ingredients</button>
    <button class="btn bs bsm" onclick="openER('${e.id}')">✏️ Edit</button>
  </div>`;f("erecbody").innerHTML=`
    ${i}
    ${l}
    ${m}
    ${g}
    ${w}
    ${M}
    ${E}
    ${A}
    ${P}
    ${$}
    ${U}
    ${N}
  `,ct("erec")}function or(){if(ql(),Di==="edit"&&u._editingComId){const n=u._editingComId;u._editingComId=null,To(n);return}if(Di==="edit"&&u.eid)vg(u.eid);else{const n=f("erecTitle");n&&(n.textContent="Recipes"),ge("erec")}}function ue(n){return(n||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function wg(n){const e=u.recs.find(A=>A.id===n);if(!e)return;u.eid=n,Di="edit",Pt=null,Ei={};const t=f("erecTitle");t&&(t.textContent="Edit Recipe"),Qo(()=>or());const i=e.sourceUrl?`<div class="frow"><label class="flbl">Original</label><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);word-break:break-all">${e.sourceUrl}</a></div>`:"",s=e.tags||[],r=A=>s.includes(A)?" sel":"",o=`<div class="frow"><label class="flbl">Tags</label><div class="tags-grid" id="etags">
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
  <input type="file" id="editCoverInput" accept="image/*" style="display:none" onchange="handleCoverSelected(event,'edit')"/>`,d=jt(e.prepTime),m=jt(e.cookTime),g=jt(e.totalTime);rr.edit=!!e.totalTime;const w=`<div style="margin-bottom:14px">
    <div class="frow" style="margin-bottom:8px"><label class="flbl">Prep time</label>
      <div style="display:flex;gap:8px;align-items:center">
        <input class="fi" id="epreptime" type="text" inputmode="numeric" placeholder="e.g. 15" value="${ue(d.value)}" style="flex:1" oninput="recipeTimeChanged('edit')"/>
        <select class="fi" id="epreptimeunit" style="width:auto;min-width:90px" onchange="recipeTimeChanged('edit')">
          <option value="min"${d.unit==="min"?" selected":""}>minutes</option>
          <option value="hr"${d.unit==="hr"?" selected":""}>hours</option>
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
    <button class="btn bp" style="width:100%;margin-bottom:12px" onclick="updR()">Save</button>
    <button class="btn" style="width:100%;background:transparent;border:1.5px solid var(--rd);color:var(--rd);font-weight:600" onclick="delER()">🗑 Delete Recipe</button>`,ct("erec")}async function hR(){var F,B,b;const n=u.recs.find(v=>v.id===u.eid);if(!n)return;const e=n.rating||0,t=Wl("etags"),i=f("ecuis")?f("ecuis").value.trim():n.cuisine||"";let s=n.imageUrl;if(Pt)try{S("Uploading cover photo…"),s=await lg(Pt,n.id),Pt=null}catch(v){console.error("Cover upload failed:",v),S("Cover photo upload failed — saving recipe without it")}else n._removeCover&&(s=null,delete n._removeCover,ug(`recipes/${n.id}/cover.jpg`).catch(()=>{}));const r={...n.stepPhotos||{}},o=Object.keys(Ei);if(o.length){S("Uploading step photos…");for(const v of o)try{const _=await IC(Ei[v],n.id,parseInt(v));r[v]=_}catch(_){console.error(`Step ${v} photo upload failed:`,_)}Ei={}}const c=Ni("epreptime","epreptimeunit")||"",l=Ni("ecooktime","ecooktimeunit")||"",d=fg("etotaltime","etotaltimeunit")||"",m=f("eserves")?f("eserves").value.trim():n.servings||"",g=mg("ediff")||"",w=f("eyield")?f("eyield").value.trim():n.recipeYield||"",E=f("estorage")?f("estorage").value.trim():n.storageInstructions||"";let A=f("esummary")?f("esummary").value.trim():n.summary||"";const P=f("ern").value.trim(),$=f("erd").value.trim(),U=P!==n.name,N=$!==(n.description||"")&&Math.abs($.length-(n.description||"").length)>20,M=i!==(n.cuisine||"");if(A===(n.summary||"")&&(U||N||M))try{const I=(((b=(B=(F=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:250,messages:[{role:"user",content:`A recipe was edited. Decide if the summary needs updating. If yes, write a new 2-sentence summary (first sentence: what the dish is, second: what makes it special). Max 200 chars. Return JSON only: {"shouldUpdate":true/false,"newSummary":"..."}

Old title: ${n.name}
New title: ${P}
Old cuisine: ${n.cuisine||""}
New cuisine: ${i}
New description (first 300 chars): ${$.substring(0,300)}
Old summary: ${A||"(none)"}`}]})})).json()).content)==null?void 0:F[0])==null?void 0:B.text)==null?void 0:b.trim())||"").match(/\{[\s\S]*\}/);if(I){const C=JSON.parse(I[0]);C.shouldUpdate&&C.newSummary&&(A=C.newSummary,S("Summary updated"))}}catch(v){console.error("Summary update check failed:",v)}const D={...n,name:P,rating:e,description:$,notes:f("erno").value.trim(),favorited:f("etog").classList.contains("on"),tags:t,cuisine:i,imageUrl:s,stepPhotos:r,prepTime:c,cookTime:l,totalTime:d,servings:m,difficulty:g,recipeYield:w,storageInstructions:E,summary:A};await nt(D),S("Recipe updated!"),ge("erec"),n.publicId&&setTimeout(async()=>{var v;if(confirm("You edited a recipe that's also published to the community. Push these changes to the community version?"))try{const _={title:D.name,summary:D.summary,cuisine:D.cuisine,tags:D.tags,description:D.description,ingredients:D.description,ingredientsRaw:D.ingredientsRaw||[],stepsRaw:D.stepsRaw||[],prepTime:D.prepTime,cookTime:D.cookTime,totalTime:D.totalTime,servings:D.servings,difficulty:D.difficulty,imageUrl:D.imageUrl},k=(v=u.comRecs)==null?void 0:v.find(I=>I.id===n.publicId);k?await z(`public_recipes/${n.publicId}`,{...k,..._,id:void 0}):await z(`public_recipes/${n.publicId}`,_),S("Community version updated!")}catch(_){console.error("Community sync failed:",_),S("Couldn't update community version")}},300)}async function fR(){const n=u.recs.find(i=>i.id===u.eid);if(!n)return;const e=n.name||n.title||"this recipe";if(!n.publicId){if(!confirm(`Delete ${e}? This cannot be undone.`))return;await Pa(u.eid),S("Recipe deleted"),ge("erec");return}const t=prompt(`"${e}" is also published to the community.

Type 1 to delete local copy only (keeps community version)
Type 2 to delete everywhere (removes local AND community)
Press Cancel to keep the recipe`);if(t)if(t.trim()==="1")await Pa(u.eid),S("Local copy deleted — community version kept"),ge("erec");else if(t.trim()==="2"){try{await nl(n.publicId)}catch(i){console.error("Failed to remove community version:",i)}await Pa(u.eid),S("Recipe deleted from everywhere"),ge("erec")}else S("Cancelled — type 1 or 2 to delete")}async function pR(n){const e=f("erd");if(!e)return;const t=e.value.trim();if(!t){S("No ingredients to scale");return}const i=f("scaleStatus");i.style.display="block",i.style.color="var(--mt)",i.textContent=`⏳ Scaling to ${n}× with Claude…`;try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Scale ALL ingredient quantities in this recipe by ${n}x. Return ONLY the updated recipe text with scaled quantities. Keep the same format. Do not add any explanation.

${t}`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"";o?(e.value=o.trim(),i.style.color="var(--gn)",i.textContent=`✓ Scaled to ${n}×`):(i.style.color="var(--rd)",i.textContent="Couldn't scale — try again")}catch{i.style.color="var(--rd)",i.textContent="Couldn't reach Claude — check connection"}}async function mR(){const n=f("rsub");n&&(n.textContent="Thinking…");const e=u.inv.map(s=>`${s.name} (${Si(s.qty,s.unit)})`).join(", "),t=u.recs.map(s=>s.name).join(", "),i=[u.cfg.nopork?"no pork":null,u.cfg.noshellfish?"no shellfish":null,u.cfg.vegetarian?"vegetarian":null,u.cfg.glutenfree?"gluten-free":null,u.cfg.other||null].filter(Boolean).join(", ");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Based on this exact inventory: ${e}
Restrictions: ${i||"none"}
Saved recipes: ${t||"none"}
Suggest 5 complete meals I can make RIGHT NOW with no extra shopping. Be specific with names. Format as a numbered list.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",c=f("rbody");c&&(c.innerHTML=`<div style="background:var(--card);border:1px solid var(--ac);border-radius:14px;padding:16px;margin-bottom:12px"><div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ac);margin-bottom:10px">🔍 Make right now — no shopping needed</div><div style="font-size:.88rem;line-height:1.8;color:var(--tx2)">${by(o)}</div><button class="btn bs bsm" style="margin-top:12px;width:100%" onclick="setRT('all')">← Back to recipes</button></div>`),n&&(n.textContent="Based on your inventory")}catch{n&&(n.textContent="Couldn't reach Claude")}}async function gR(n){const e=u.recs.find(t=>t.id===n);if(!e||!e.description){S("No ingredients listed");return}S("Parsing ingredients…");try{const t=u.inv.map(l=>l.name.toLowerCase()),s=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:400,messages:[{role:"user",content:`Extract a list of ingredient names from this recipe description. Return ONLY a JSON array of strings, no markdown, no quantities, just clean ingredient names. Example: ["chicken","garlic","olive oil"]

Recipe: ${e.description}`}]})})).json(),r=(s.content&&s.content[0]&&s.content[0].text||"").replace(/```json|```/g,"").trim(),c=JSON.parse(r).filter(l=>!t.some(d=>d.includes(l.toLowerCase())||l.toLowerCase().includes(d)));if(!c.length){S("All ingredients already in pantry ✓");return}for(const l of c)await lt({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:l,qty:1,checked:!1,src:"recipe"});S(`Added ${c.length} ingredient${c.length!==1?"s":""} to shopping list 🛒`),ge("erec"),window.showScreen("shopping")}catch{S("Couldn't parse ingredients")}}function yR(n,e){u.nr=n,e==="r"?(Ps("rstars",n),Wh("rstars",e)):e==="c"&&(Ps("cstars",n),Wh("cstars",e))}function Wh(n,e){const t=f(n);if(!t)return;const i=t.querySelector(".star-clear");if(i&&i.remove(),u.nr>0){const s=document.createElement("span");s.className="star-clear",s.textContent="✕",s.onclick=r=>{if(r.stopPropagation(),u.nr=0,Ps(n,0),s.remove(),e==="rv"&&u.eid){const o=u.recs.find(c=>c.id===u.eid);o&&(o.rating=0,nt({...o,rating:0}))}},t.appendChild(s)}}async function vR(n){const e=u.recs.find(i=>i.id===u.eid);if(!e)return;e.rating=n,u.nr=n;const t=f("rvstars");t&&(t.innerHTML=Array.from({length:5},(i,s)=>`<span class="star${s<n?" on":""}" onclick="setViewStar(${s+1})" style="cursor:pointer">${s<n?"★":"☆"}</span>`).join("")+(n>0?'<span class="star-clear" onclick="event.stopPropagation();setViewStar(0)">✕</span>':"")),await nt({...e,rating:n})}async function wR(n){const e=u.recs.find(r=>r.id===n);if(!e)return;const t=!e.isPublic,i=X(),s=(i==null?void 0:i.displayName)||localStorage.getItem("ks-who")||"Anonymous";if(t){const r=await hp(e);if(r){S("This recipe has already been published to the community.");const c=f("epub");c&&!c.classList.contains("on")&&c.classList.add("on"),(!e.isPublic||!e.publicId)&&(e.isPublic=!0,e.publicId=r.id,await nt({...e}));return}const o=await tl(e,s);e.publicId=o.id,it("published",Re(e.name||"a recipe")+" to community"),S("Recipe shared with the community!")}else{const r=e.publicId||e.id;await nl(r),e.publicId=null,it("unpublished",Re(e.name||"a recipe")+" from community"),S("Recipe removed from community")}await nt({...e,isPublic:t,publicId:e.publicId||null})}function _R(n){const t=f(n==="add"?"addRecCoverInput":"editCoverInput");t&&t.click()}function bR(n,e){var i,s;const t=(s=(i=n.target)==null?void 0:i.files)==null?void 0:s[0];t&&(Pt=t,_g(t,e))}function TR(n,e){var i,s;const t=(s=(i=n.dataTransfer)==null?void 0:i.files)==null?void 0:s[0];!t||!t.type.startsWith("image/")||(Pt=t,_g(t,e))}function _g(n,e){const i=f(e==="add"?"addRecCoverZone":"editCoverZone");if(!i)return;const s=new FileReader;s.onload=r=>{i.classList.add("has-preview"),i.innerHTML=`<img src="${r.target.result}" alt="Cover preview"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('${e}')">✕</button>`},s.readAsDataURL(n)}function IR(n){Pt=null;const t=f(n==="add"?"addRecCoverZone":"editCoverZone");if(t&&(t.classList.remove("has-preview"),t.innerHTML='<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop · Max 800×600, 300KB</div>',n==="edit"&&u.eid)){const i=u.recs.find(s=>s.id===u.eid);i&&(i._removeCover=!0)}}let Qr=null;function ER(n){Qr=n;const e=f("stepPhotoInput");e&&(e.value="",e.click())}function kR(n){var i,s;const e=(s=(i=n.target)==null?void 0:i.files)==null?void 0:s[0];if(!e||Qr===null)return;Ei[Qr]=e;const t=new FileReader;t.onload=r=>{S(`Step ${Qr+1} photo added`)},t.readAsDataURL(e)}function SR(n){const e=u.recs.find(t=>t.id===u.eid);if(e){if(delete Ei[n],e.stepPhotos&&e.stepPhotos[n]){const t=`recipes/${e.id}/steps/${n}.jpg`;ug(t).catch(()=>{}),delete e.stepPhotos[n]}wg(e.id),S(`Step ${n+1} photo removed`)}}function CR(n,e){jn=n||[],zn=e||0,Tg();const t=f("photoViewer");t&&t.classList.add("active"),AR()}function RR(){const n=f("photoViewer");n&&n.classList.remove("active"),jn=[]}function bg(n){const e=zn+n;e<0||e>=jn.length||(zn=e,Tg())}function Tg(){const n=f("pvImg"),e=f("pvCounter"),t=f("pvPrev"),i=f("pvNext");n&&(n.src=jn[zn]||""),e&&(e.textContent=jn.length>1?`${zn+1} / ${jn.length}`:""),t&&(t.style.display=zn>0?"flex":"none"),i&&(i.style.display=zn<jn.length-1?"flex":"none")}function AR(){const n=f("pvWrap");if(!n)return;let e=0,t=0;const i=n.cloneNode(!0);n.parentNode.replaceChild(i,n),i.addEventListener("touchstart",s=>{e=s.touches[0].clientX,t=s.touches[0].clientY},{passive:!0}),i.addEventListener("touchend",s=>{const r=s.changedTouches[0].clientX-e,o=s.changedTouches[0].clientY-t;Math.abs(r)>50&&Math.abs(r)>Math.abs(o)&&bg(r<0?1:-1)},{passive:!0})}function xR(){const n=f("cmtPhotoInput");n&&(n.value="",n.click())}function PR(n){var t;const e=(t=n.target)==null?void 0:t.files;if(!(!e||!e.length)){for(let i=0;i<e.length;i++)e[i].type.startsWith("image/")&&Et.push(e[i]);Ig()}}function $R(n){Et.splice(n,1),Ig()}function Ig(){const n=f("cmtPhotoPreview");if(!n)return;if(!Et.length){n.innerHTML="";return}let e="";Et.forEach((t,i)=>{const s=URL.createObjectURL(t);e+=`<div style="position:relative;display:inline-block"><img src="${s}" class="cmt-preview-thumb" alt=""/><button onclick="event.stopPropagation();removeCommentPhoto(${i})" style="position:absolute;top:-4px;right:-4px;width:18px;height:18px;border-radius:50%;background:var(--rd);color:#fff;border:none;font-size:.6rem;cursor:pointer;display:flex;align-items:center;justify-content:center">✕</button></div>`}),e+='<div class="cmt-preview-add" onclick="triggerCommentPhotoUpload()">+</div>',n.innerHTML=e}let kt=null;function Yr(n){if(!n)return 0;const e=n.toLowerCase();let t=0;const i=e.match(/(\d+)\s*(?:hr|hour)/),s=e.match(/(\d+)\s*min/);return i&&(t+=parseInt(i[1])*60),s&&(t+=parseInt(s[1])),t}function bo(n,e){const t=Math.round(n||0),i=Array.from({length:5},(r,o)=>o<t?"★":"☆").join(""),s=e?`(${e})`:"";return`<span style="color:var(--ac);font-size:.74rem;letter-spacing:1px">${i}</span><span style="font-size:.68rem;color:var(--mt);margin-left:3px">${s}</span>`}async function Kl(){const n=f("rbody");if(n){n.innerHTML='<div class="es"><div class="ei">🌍</div><p>Loading community recipes…</p></div>',u.comPage=0;try{u.comRecs=await Lt(),ut()}catch(e){console.error("loadCommunity:",e),n.innerHTML=`<div class="es"><div class="ei">⚠️</div><p>Couldn't load community recipes.</p></div>`}}}function LR(n){u.comCuisine=n,u.comPage=0,ut()}function DR(n){u.comSearch=n,u.comPage=0,ut()}function NR(n){u.comSort=n,u.comPage=0,ut()}function MR(n){const e=u.comTags.indexOf(n);e>=0?u.comTags.splice(e,1):u.comTags.push(n),u.comPage=0,ut()}function OR(n){u.comTime=n,u.comPage=0,ut()}function VR(n){u.comMinRating=parseInt(n)||0,u.comPage=0,ut()}function ut(){const n=f("rbody");if(!n)return;kt&&(kt.disconnect(),kt=null);let e=[...u.comRecs];if(u.comCuisine&&u.comCuisine!=="all"&&(e=e.filter(l=>(l.cuisine||"").toLowerCase().includes(u.comCuisine.toLowerCase())||(l.tags||[]).some(d=>d.toLowerCase().includes(u.comCuisine.toLowerCase())))),u.comSearch){const l=u.comSearch.toLowerCase();e=e.filter(d=>(d.title||"").toLowerCase().includes(l)||(d.tags||[]).join(" ").toLowerCase().includes(l)||(d.cuisine||"").toLowerCase().includes(l)||(d.authorUsername||"").toLowerCase().includes(l)||(d.authorName||"").toLowerCase().includes(l))}u.comTags.length&&(e=e.filter(l=>u.comTags.every(d=>(l.tags||[]).includes(d)))),u.comTime&&u.comTime!=="any"&&(e=e.filter(l=>{const d=Yr(l.cookTime||l.totalTime);return d?u.comTime==="under30"?d<=30:u.comTime==="30to60"?d>30&&d<=60:u.comTime==="over60"?d>60:!0:!1})),u.comMinRating>0&&(e=e.filter(l=>(l.avgRating||0)>=u.comMinRating)),u.comSort==="popular"?e.sort((l,d)=>(d.likes||0)-(l.likes||0)):u.comSort==="rated"?e.sort((l,d)=>(d.avgRating||0)-(l.avgRating||0)):u.comSort==="az"?e.sort((l,d)=>(l.title||"").localeCompare(d.title||"")):u.comSort==="cooktime"?e.sort((l,d)=>Yr(l.cookTime||l.totalTime)-Yr(d.cookTime||d.totalTime)):e.sort((l,d)=>new Date(d.createdAt||0)-new Date(l.createdAt||0));const i=e.slice(0,(u.comPage+1)*20),s=i.length<e.length,r=f("rsub");r&&(r.textContent=e.length+" community recipe"+(e.length!==1?"s":""));const o=u.comSort||"newest";let c=`<div style="margin-bottom:14px">
    <input class="fi" id="com-search" placeholder="Search recipes, tags, authors…" value="${u.comSearch.replace(/"/g,"&quot;")}" oninput="setComSearch(this.value)" style="margin-bottom:8px"/>
    <div style="display:flex;gap:6px;margin-bottom:8px">
      <select class="fsel" onchange="setComSort(this.value)" style="font-size:.78rem;padding:7px 10px;flex:1">
        <option value="newest"${o==="newest"?" selected":""}>Newest first</option>
        <option value="az"${o==="az"?" selected":""}>A → Z</option>
        <option value="rated"${o==="rated"?" selected":""}>Highest rated</option>
        <option value="popular"${o==="popular"?" selected":""}>Most popular</option>
        <option value="cooktime"${o==="cooktime"?" selected":""}>Cook time</option>
      </select>
    </div>
    ${yg("com")}
  </div>`;if(!e.length){const l=u.comSearch||u.comCuisine!=="all"||u.comTags.length||u.comTime!=="any"||u.comMinRating>0;c+=`<div class="es"><div class="ei">🌍</div><p>${l?"No recipes match your filters.":"No community recipes yet. Be the first to share!"}</p></div>`,n.innerHTML=c;return}if(c+='<div class="recipe-grid" id="com-recipe-grid">',i.forEach(l=>{const d=(l.tags||[]).slice(0,3).map(A=>`<span class="com-tag">${A}</span>`).join(""),m=l.authorUsername?`@${l.authorUsername}`:l.authorName||"Anonymous",g=l.cookTime||l.totalTime||"",w=l.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${l.imageUrl}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",E=l.commentCount||0;c+=`<div class="rcd com-rcd" onclick="openComRecipe('${l.id}')">
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
        ${l.avgRating||l.ratingCount?`<span>${bo(l.avgRating,l.ratingCount)}</span>`:""}
        ${g?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${g}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${d}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${m}</div>
      </div>
    </div>`}),c+="</div>",s&&(c+='<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>'),n.innerHTML=c,s){const l=f("com-scroll-sentinel");l&&(kt=new IntersectionObserver(d=>{d[0].isIntersecting&&(u.comPage++,Eg(e,n))},{rootMargin:"200px"}),kt.observe(l))}}function Eg(n,e){const i=u.comPage*20,s=i+20,r=n.slice(i,s),o=s<n.length;let c="";r.forEach(m=>{const g=(m.tags||[]).slice(0,3).map($=>`<span class="com-tag">${$}</span>`).join(""),w=m.authorUsername?`@${m.authorUsername}`:m.authorName||"Anonymous",E=m.cookTime||m.totalTime||"",A=m.commentCount||0,P=m.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${m.imageUrl}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"";c+=`<div class="rcd com-rcd" onclick="openComRecipe('${m.id}')">
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
        ${m.avgRating||m.ratingCount?`<span>${bo(m.avgRating,m.ratingCount)}</span>`:""}
        ${E?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${E}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${g}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${w}</div>
      </div>
    </div>`});const l=f("com-scroll-sentinel");l&&l.remove(),kt&&(kt.disconnect(),kt=null);const d=f("com-recipe-grid");if(d?d.insertAdjacentHTML("beforeend",c):e.insertAdjacentHTML("beforeend",c),o){e.insertAdjacentHTML("beforeend",'<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>');const m=f("com-scroll-sentinel");m&&(kt=new IntersectionObserver(g=>{g[0].isIntersecting&&(u.comPage++,Eg(n,e))},{rootMargin:"200px"}),kt.observe(m))}}async function To(n){var ar;const e=u.comRecs.find(he=>he.id===n);if(!e)return;u._openComId=n,Di="view",Et=[];const t=f("erecTitle");t&&(t.textContent="Recipes"),Qo(()=>or());const i=(ar=X())==null?void 0:ar.uid,[s,r,o,c]=await Promise.all([jb(n),Bb(n).catch(()=>[]),Yb(n).catch(()=>null),Gb(n)]);s?u.myLikes.add(n):u.myLikes.delete(n),r.sort((he,mt)=>new Date(he.createdAt||0)-new Date(mt.createdAt||0)),u._comComments=r;const l=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`,d=e.imageUrl?`<div style="margin:-16px -16px 16px;overflow:hidden;max-height:240px"><img src="${e.imageUrl}" alt="" style="width:100%;height:240px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",m=[e.prepTime?`🔪 Prep: ${e.prepTime}`:"",e.cookTime?`🔥 Cook: ${e.cookTime}`:"",e.totalTime?`⏱ Total: ${e.totalTime}`:"",e.servings?`🍽 Serves: ${e.servings}`:""].filter(Boolean),g=m.length?`<div class="rv-meta">${m.map(he=>`<div class="rv-meta-pill">${he}</div>`).join("")}</div>`:"",w=(e.ratingCount||0)>0?`<div style="margin-bottom:6px">${bo(e.avgRating,e.ratingCount)}</div>`:"",E=(e.tags||[]).map(he=>`<span class="com-tag">${he}</span>`).join(""),A=e.authorUsername?`@${e.authorUsername}`:e.authorName||"Anonymous",P=u.myLikes.has(n),$=i&&i===e.authorUid;let U=!1;!$&&i&&e.householdId&&e.householdId===u.hid&&(U=!0);const N=$||U,M=$||e.householdId&&e.householdId===u.hid;let D="";e.ingredientsRaw&&e.ingredientsRaw.length?D=`<ul style="margin:0;padding-left:18px;font-size:.88rem;color:var(--tx2);line-height:2">${e.ingredientsRaw.map(he=>`<li>${(typeof he=="string"?he:(he.amount||"")+" "+(he.unit||"")+" "+(he.name||"")).replace(/</g,"&lt;").replace(/>/g,"&gt;").trim()}</li>`).join("")}</ul>`:e.ingredients&&(D=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.ingredients||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);let F="";e.stepsRaw&&e.stepsRaw.length?F=`<ol style="margin:0;padding-left:22px;font-size:.88rem;color:var(--tx2);line-height:1.8">${e.stepsRaw.map(he=>`<li style="margin-bottom:8px">${(typeof he=="string"?he:he.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</li>`).join("")}</ol>`:e.steps&&(F=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.steps||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);const B=WR(r.slice(0,20),n,i,$),b=r.length>20,v=(o==null?void 0:o.rating)||0,_=v>0?`<span onclick="clearComRating('${n}')" style="cursor:pointer;font-size:.8rem;color:var(--mt);margin-left:6px;vertical-align:middle" title="Clear rating">✕</span>`:"",k=$?"":Array.from({length:5},(he,mt)=>`<span class="star${mt<v?" on":""}" onclick="rateComRecipe('${n}',${mt+1})" style="cursor:pointer;font-size:1.3rem">${mt<v?"★":"☆"}</span>`).join("")+_,I=N?`<button class="btn bs bsm" onclick="editComRecipe('${n}')" style="margin-top:8px;width:100%">✏️ Edit community version</button>`:"",C=$?`<button class="btn bd bsm" onclick="unpublishComRecipe('${n}')" style="margin-top:8px;width:100%">🚫 Unpublish this recipe</button>`:"",T=I+C,Oe=!N&&i?`<button class="btn-report" onclick="openReportSheet('recipe','${n}','${n}')" title="Report recipe">🚩 Report</button>`:"";f("erecbody").innerHTML=`
    ${d}
    <div style="margin-bottom:14px">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px">
        <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;line-height:1.3;margin-bottom:6px;flex:1">${e.title||"Untitled"}</div>
        ${Oe}
      </div>
      ${e.cuisine?`<div style="font-size:.78rem;color:var(--ac);font-weight:600;margin-bottom:6px">${e.cuisine}</div>`:""}
      ${w}
      <div style="font-size:.76rem;color:var(--mt)">by ${A} · ${e.createdAt?new Date(e.createdAt).toLocaleDateString():""}</div>
      ${E?`<div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:8px">${E}</div>`:""}
    </div>

    ${g}

    <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap">
      <button class="btn ${P?"bp":"bs"} bsm" onclick="likeComRecipe('${n}')" id="com-like-btn">
        ${P?"❤️":"🤍"} ${e.likes||0} Like${(e.likes||0)!==1?"s":""}
      </button>
      ${M?"":`<button class="btn bs bsm" style="flex:1" onclick="saveComToKitchen('${n}')">📖 Save to my recipes</button>`}
      <button class="btn bs bsm" onclick="shareComRecipe('${n}')">📤 Share</button>
    </div>

    ${D?`<div class="frow"><label class="flbl">Ingredients</label>${D}</div>`:""}
    ${F?`<div class="frow"><label class="flbl">Instructions</label>${F}</div>`:""}

    ${$?"":`<div style="background:var(--card);border:1px solid var(--b2);border-radius:12px;padding:14px;margin-top:16px">
      <div class="flbl" style="margin-bottom:8px">Rate this recipe</div>
      <div id="com-rating-stars" style="display:flex;align-items:center;gap:2px">${k}</div>
      ${v?`<div id="com-rating-label" style="font-size:.72rem;color:var(--mt);margin-top:4px">You rated this ${v}★</div>`:'<div id="com-rating-label"></div>'}
      ${(e.ratingCount||0)>0?`<div style="font-size:.72rem;color:var(--mt);margin-top:6px">${bo(e.avgRating,e.ratingCount)} avg</div>`:""}
    </div>`}

    <div style="margin-top:16px">
      <div class="flbl" style="margin-bottom:10px">Comments (${r.length})</div>
      <div id="com-comments">${B||'<div style="font-size:.82rem;color:var(--mt);padding:8px 0">No comments yet.</div>'}</div>
      ${b?`<button class="btn bs bsm" id="com-load-more" onclick="loadMoreComments()" style="width:100%;margin-top:8px">Load more comments (${r.length-20} remaining)</button>`:""}
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

    ${T}`;const dt=f("com-cmt-input");dt&&dt.addEventListener("input",()=>{const he=f("com-cmt-counter");he&&(he.textContent=`${dt.value.length} / 500`)}),ct("erec")}async function UR(n,e){return kg(n,e)}async function kg(n,e){if(!X()){S("Sign in to rate recipes");return}try{const i=await Qb(n,e);if(!i){S("You can't rate your own recipe");return}const s=u.comRecs.find(c=>c.id===n);s&&(s.ratingSum=i.ratingSum,s.ratingCount=i.ratingCount,s.avgRating=i.avgRating);const r=f("com-rating-stars");r&&(r.innerHTML=Array.from({length:5},(c,l)=>`<span class="star${l<e?" on":""}" onclick="rateComRecipe('${n}',${l+1})" style="cursor:pointer;font-size:1.3rem">${l<e?"★":"☆"}</span>`).join("")+`<span onclick="clearComRating('${n}')" style="cursor:pointer;font-size:.8rem;color:var(--mt);margin-left:6px;vertical-align:middle" title="Clear rating">✕</span>`);const o=f("com-rating-label");o&&(o.textContent=`You rated this ${e}★`),S(`Rated ${e}★`)}catch(i){console.error("rateComRecipe:",i),S("Couldn't submit rating")}}async function FR(n){if(X())try{const t=await Jb(n);if(!t)return;const i=u.comRecs.find(o=>o.id===n);i&&(i.ratingSum=t.ratingSum,i.ratingCount=t.ratingCount,i.avgRating=t.avgRating);const s=f("com-rating-stars");s&&(s.innerHTML=Array.from({length:5},(o,c)=>`<span class="star" onclick="rateComRecipe('${n}',${c+1})" style="cursor:pointer;font-size:1.3rem">☆</span>`).join(""));const r=f("com-rating-label");r&&(r.textContent=""),S("Rating cleared")}catch(t){console.error("clearComRating:",t),S("Couldn't clear rating")}}async function HR(n){if(confirm("Remove this recipe from the community?"))try{await nl(n),u.comRecs=u.comRecs.filter(e=>e.id!==n),S("Recipe unpublished"),ge("erec"),ut()}catch(e){console.error("unpublishComRecipe:",e),S("Couldn't unpublish recipe")}}async function BR(n){if(!X()){S("Sign in to like recipes");return}const t=u.myLikes.has(n);try{await Fb(n,t),t?u.myLikes.delete(n):u.myLikes.add(n);const i=u.comRecs.find(r=>r.id===n);i&&(i.likes=(i.likes||0)+(t?-1:1));const s=f("com-like-btn");if(s){const r=u.myLikes.has(n);s.className=`btn ${r?"bp":"bs"} bsm`,s.innerHTML=`${r?"❤️":"🤍"} ${(i==null?void 0:i.likes)||0} Like${((i==null?void 0:i.likes)||0)!==1?"s":""}`}S(t?"Like removed":"Liked!")}catch(i){console.error("likeComRecipe:",i),S("Couldn't update like")}}async function jR(n){if(!X()){S("Sign in to save recipes");return}const t=u.comRecs.find(i=>i.id===n);if(t)try{await zb(t),it("saved",Re(t.title||"a recipe")+" from community"),S("Recipe saved to your kitchen! 📖"),ge("erec")}catch(i){console.error("saveComToKitchen:",i),S("Couldn't save recipe")}}async function zR(n){var r;const e=X();if(!e){S("Sign in to comment");return}const t=f("com-cmt-input"),i=(r=t==null?void 0:t.value)==null?void 0:r.trim();if(!i&&!Et.length)return;if(i&&i.length>500){S("Comment must be 500 characters or less");return}const s=e.displayName||localStorage.getItem("ks-who")||"Anonymous";try{const o=await Hb(n,i||"",s);if(!o)return;let c=[];if(Et.length){S("Uploading photos…");for(let E=0;E<Et.length;E++)try{const A=await EC(Et[E],n,o.id,E);c.push(A)}catch(A){console.error(`Comment photo ${E} upload failed:`,A)}c.length&&(o.photoUrls=c,await z(`public_recipes/${n}/comments/${o.id}`,{...o,id:void 0}))}t&&(t.value=""),Et=[];const l=f("cmtPhotoPreview");l&&(l.innerHTML="");const d=f("com-cmt-counter");d&&(d.textContent="0 / 500");const m=f("com-comments"),g=u.comRecs.find(E=>E.id===n),w=e.uid===(g==null?void 0:g.authorUid);m&&o&&(m.querySelector("div[style*='color:var(--mt)']")&&!m.querySelector("div[style*='border-bottom']")&&(m.innerHTML=""),m.innerHTML+=Ql(o,n,e.uid,w)),u._comComments&&u._comComments.push(o),S(c.length?`Comment posted with ${c.length} photo${c.length!==1?"s":""}!`:"Comment posted!")}catch(o){console.error("addComComment:",o),S("Couldn't post comment")}}async function qR(n){const e=u.comRecs.find(s=>s.id===n),t=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`,i=(e==null?void 0:e.title)||"Recipe";if(navigator.share)try{await navigator.share({title:i,text:`Check out this recipe: ${i}`,url:t});return}catch{}try{await navigator.clipboard.writeText(t),S("Link copied!")}catch{S("Couldn't copy link")}}function Ql(n,e,t,i){const s=(n.authorUsername?"@"+n.authorUsername:n.authorName)||"Anonymous",r=n.createdAt?new Date(n.createdAt).toLocaleDateString():"",o=(n.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;"),c=t&&(n.authorUid===t||i),l=t&&n.authorUid!==t;let d="";c&&(d+=`<button class="btn-report" onclick="deleteComComment('${e}','${n.id}')" title="Delete comment" style="font-size:.7rem">🗑</button>`),l&&(d+=`<button class="btn-report" onclick="openReportSheet('comment','${n.id}','${e}')" title="Report comment" style="font-size:.7rem">🚩</button>`);let m="";const g=n.photoUrls||[];if(g.length){const w=JSON.stringify(g).replace(/'/g,"\\'");m=`<div class="cmt-photos-grid">${g.map((A,P)=>`<img src="${A}" alt="Photo ${P+1}" onclick="event.stopPropagation();openPhotoViewer(${w.replace(/"/g,"&quot;")},${P})" onerror="this.style.display='none'"/>`).join("")}</div>
      <div class="cmt-photo-count">📷 ${g.length} photo${g.length!==1?"s":""}</div>`}return`<div class="com-comment-row" id="cmt-${n.id}" style="padding:10px 0;border-bottom:1px solid var(--b1)">
    <div style="display:flex;justify-content:space-between;align-items:center">
      <span style="font-size:.78rem;font-weight:600">${s}</span>
      <div style="display:flex;align-items:center;gap:6px">
        ${d}
        <span style="font-size:.68rem;color:var(--mt)">${r}</span>
      </div>
    </div>
    <div style="font-size:.84rem;color:var(--tx2);margin-top:4px;line-height:1.5">${o}</div>
    ${m}
  </div>`}function WR(n,e,t,i){return n.length?n.map(s=>Ql(s,e,t,i)).join(""):""}function GR(){var d;const n=u._openComId,e=(d=X())==null?void 0:d.uid,t=u.comRecs.find(m=>m.id===n),i=e&&e===(t==null?void 0:t.authorUid),s=f("com-comments");if(!s||!u._comComments)return;const r=s.querySelectorAll(".com-comment-row").length,o=u._comComments.slice(r,r+20);if(o.length){const m=o.map(g=>Ql(g,n,e,i)).join("");s.insertAdjacentHTML("beforeend",m)}const c=u._comComments.length-r-o.length,l=f("com-load-more");l&&(c>0?l.textContent=`Load more comments (${c} remaining)`:l.remove())}async function KR(n,e){if(confirm("Delete this comment?"))try{await Xb(n,e);const t=document.getElementById("cmt-"+e);t&&t.remove(),u._comComments&&(u._comComments=u._comComments.filter(i=>i.id!==e)),S("Comment deleted")}catch(t){console.error("deleteComComment:",t),S("Couldn't delete comment")}}async function QR(n){var w;const e=u.comRecs.find(E=>E.id===n);if(!e)return;const i=((w=X())==null?void 0:w.uid)===e.authorUid,s=e.householdId&&e.householdId===u.hid;if(!i&&!s){S("Only household members can edit");return}u._editingComId=n,Di="edit";const r=f("erecTitle");r&&(r.textContent="Edit Community Recipe"),Qo(()=>or());const o=`<div style="background:rgba(201,168,76,0.15);border:1px solid var(--ac);border-radius:10px;padding:12px;margin-bottom:14px;font-size:.82rem;color:var(--ac);line-height:1.5">
    ⚠️ You are editing the <strong>community version</strong>. Changes will be visible to everyone immediately.
  </div>`,c=e.tags||[],l=E=>c.includes(E)?" sel":"";let d='<div class="frow"><label class="flbl">Tags</label><div class="tags-grid" id="comEditTags">';Kr.forEach(E=>{d+=`<div class="tag-cat">${E.cat}</div>`,E.tags.forEach(A=>{d+=`<div class="tag${l(A)}" data-tag="${A}" onclick="togTag(this)">${A}</div>`})}),d+="</div></div>";const m=jt(e.prepTime),g=jt(e.cookTime);jt(e.totalTime),f("erecbody").innerHTML=`
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
    ${d}
    <div class="frow"><label class="flbl">Ingredients</label><textarea class="fta" id="comEditIngredients" style="min-height:100px">${ue(e.ingredients||"")}</textarea></div>
    <div class="frow"><label class="flbl">Steps</label><textarea class="fta" id="comEditSteps" style="min-height:100px">${ue(e.steps||"")}</textarea></div>
    <div class="brow" style="margin-top:14px">
      <button class="btn bs" style="flex:1" onclick="hideOv('erec')">Cancel</button>
      <button class="btn bp" style="flex:2" onclick="saveComRecipeEdit()">Save Changes</button>
    </div>`,ct("erec")}async function YR(){var w,E,A,P,$,U,N,M,D,F,B,b;const n=u._editingComId,e=u.comRecs.find(v=>v.id===n);if(!e)return;const t=((E=(w=f("comEditTitle"))==null?void 0:w.value)==null?void 0:E.trim())||e.title,i=((P=(A=f("comEditSummary"))==null?void 0:A.value)==null?void 0:P.trim())||"",s=((U=($=f("comEditCuisine"))==null?void 0:$.value)==null?void 0:U.trim())||"",r=((M=(N=f("comEditServes"))==null?void 0:N.value)==null?void 0:M.trim())||"",o=Wl("comEditTags"),c=((F=(D=f("comEditIngredients"))==null?void 0:D.value)==null?void 0:F.trim())||"",l=((b=(B=f("comEditSteps"))==null?void 0:B.value)==null?void 0:b.trim())||"",d=Ni("comEditPrepTime","comEditPrepUnit")||"",m=Ni("comEditCookTime","comEditCookUnit")||"",g={...e,title:t,summary:i,cuisine:s,servings:r,tags:o,ingredients:c,steps:l,prepTime:d,cookTime:m};delete g.id;try{await z(`public_recipes/${n}`,g),Object.assign(e,{title:t,summary:i,cuisine:s,servings:r,tags:o,ingredients:c,steps:l,prepTime:d,cookTime:m}),u._editingComId=null;const v=f("erecTitle");v&&(v.textContent="Recipes"),it("updated",Re(t)+" (community)"),S("Community recipe updated!"),ql(),ge("erec"),ut()}catch(v){console.error("saveComRecipeEdit:",v),S("Couldn't save changes")}}function JR(n,e,t){if(!X()){S("Sign in to report content");return}u._reportTarget={type:n,targetId:e,recipeId:t};const s=f("report-sheet"),r=f("reportBackdrop");s&&s.classList.add("active"),r&&r.classList.add("active")}function Sg(){const n=f("report-sheet"),e=f("reportBackdrop");n&&n.classList.remove("active"),e&&e.classList.remove("active"),u._reportTarget=null}async function XR(n){const e=u._reportTarget;if(e){try{const t=await Zb(e.type,e.targetId,n,e.recipeId);S(t==="duplicate"?"You've already reported this":"Thanks for your report")}catch(t){console.error("submitComReport:",t),S("Couldn't submit report")}Sg()}}async function Cg(){try{const n=await iT(),e=n>9?"9+":String(n),t=n>0,i=f("recipes-notif-badge");i&&(i.textContent=e,i.style.display=t?"flex":"none");const s=f("recipes-notif-badge-hdr");s&&(s.textContent=e,s.style.display=t?"flex":"none")}catch{}}async function ZR(){if(!X()){S("Sign in to view notifications");return}try{const e=await tT();nT().then(()=>Cg());const t=f("erecbody");if(!t)return;let i=`<div style="margin-bottom:14px">
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;margin-bottom:6px">Notifications</div>
      <div style="font-size:.76rem;color:var(--mt)">${e.length?e.length+" notification"+(e.length!==1?"s":""):"No notifications yet"}</div>
    </div>`;e.length?e.forEach(s=>{const r=!s.read,o=s.createdAt?new Date(s.createdAt).toLocaleDateString():"";s.type==="comment"&&(i+=`<div class="rcd" style="${r?"border-left:3px solid var(--ac);":""}" onclick="openComRecipeFromNotif('${s.recipeId}')">
            <div style="font-size:.84rem;font-weight:${r?"600":"400"};line-height:1.5">
              <span style="color:var(--ac)">${(s.commenterUsername||"Someone").replace(/</g,"&lt;")}</span> commented on your recipe
              <span style="font-weight:600">${(s.recipeName||"").replace(/</g,"&lt;")}</span>
            </div>
            <div style="font-size:.68rem;color:var(--mt);margin-top:4px">${o}</div>
          </div>`)}):i+=`<div class="es"><div class="ei">🔔</div><p>When someone comments on your recipe, you'll see it here.</p></div>`,t.innerHTML=i,ct("erec")}catch(e){console.error("openNotifications:",e),S("Couldn't load notifications")}}async function eA(n){if(ge("erec"),!u.comRecs.length)try{u.comRecs=await Lt()}catch{}if(u.comRecs.find(e=>e.id===n)){u.rt="community",document.querySelectorAll(".rtab").forEach(t=>t.classList.remove("active"));const e=f("rtab-community");e&&e.classList.add("active"),setTimeout(()=>To(n),100)}else try{const e=await fp(n);e?(u.comRecs.push({id:n,...e}),u.rt="community",setTimeout(()=>To(n),100)):S("Recipe no longer available")}catch{S("Couldn't load recipe")}}function tA(){const n=u.cookLog,e=u.wasteLog;let t=0;for(let M=0;M<60;M++){const D=new Date;D.setDate(D.getDate()-M);const F=D.toISOString().split("T")[0];if(n.find(B=>B.date===F))t++;else if(M>0)break}const i=f("ins-streak-num");i&&(i.textContent=t);const s=f("ins-total-cooked");s&&(s.textContent=n.length);const r=f("ins-waste-count");r&&(r.textContent=e.length);const o=f("ins-sub");o&&(o.textContent=n.length?" "+n.length+" meals cooked":"Your kitchen at a glance");const c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],l=f("ins-week");if(l){const M=ko().map(D=>{const F=D.toISOString().split("T")[0],B=u.mp[F],b=F===pn();return`<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--b1)${b?";background:var(--acd);margin:0 -4px;padding:7px 4px;border-radius:6px":""}">
        <div style="font-size:.72rem;color:var(--mt);min-width:30px;font-weight:${b?"600":"400"}">${c[D.getDay()]}</div>
        <div style="font-size:.72rem;color:var(--mt);min-width:20px">${D.getDate()}</div>
        <div style="font-size:.84rem;color:${B?"var(--tx)":"var(--mt)"};font-style:${B?"normal":"italic"};flex:1">${B||"—"}</div>
        ${b?"<div style='font-size:.66rem;color:var(--ac);font-weight:600'>TODAY</div>":""}
      </div>`}).join("");l.innerHTML=M}const d=n.slice(0,7).map(M=>M.name),m=f("ins-variety-nudge"),g=f("ins-variety-msg");if(m&&d.length>=3){const M={};d.forEach(F=>{const B=F.toLowerCase();M[B]=(M[B]||0)+1});const D=Object.entries(M).filter(([,F])=>F>=3);D.length?(m.style.display="block",g.textContent=`You've cooked "${D[0][0]}" ${D[0][1]} times this week. Time to mix it up?`):m.style.display="none"}else m&&(m.style.display="none");const w={};n.forEach(M=>{w[M.name]=(w[M.name]||0)+1});const E=Object.entries(w).sort((M,D)=>D[1]-M[1]).slice(0,6),A=E[0]?E[0][1]:1,P=f("ins-cooked");if(P)if(!E.length)P.innerHTML='<div class="es" style="padding:16px"><p>Cook some meals to see stats!</p></div>';else{const M=["🥇","🥈","🥉","4️⃣","5️⃣","6️⃣"];P.innerHTML=E.map(([D,F],B)=>`<div class="ibar-row"><div style="font-size:.9rem;margin-right:4px">${M[B]||""}</div><div class="ibar-lbl">${D}</div><div class="ibar-track"><div class="ibar-fill" style="width:${Math.round(F/A*100)}%"></div></div><div class="ibar-val">${F}×</div></div>`).join("")}const $={Bangladeshi:"#e8a44a",Turkish:"#c0392b",Mediterranean:"#27ae60",American:"#3498db",Italian:"#e74c3c",Asian:"#9b59b6",Other:"#95a5a6"},U=f("ins-cuisine");if(U&&n.length){const M=b=>{const v=b.toLowerCase();return/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(v)?"Bangladeshi":/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner|iskender/i.test(v)?"Turkish":/pasta|pizza|risotto|gnocchi|italian/i.test(v)?"Italian":/tacos|burrito|enchilada|mexican/i.test(v)?"Mexican":/sushi|ramen|stir.?fry|fried rice|asian|chinese|thai|japanese/i.test(v)?"Asian":/burger|sandwich|mac|bbq|american/i.test(v)?"American":"Other"},D={};n.slice(0,20).forEach(b=>{const v=M(b.name);D[v]=(D[v]||0)+1});const F=Object.values(D).reduce((b,v)=>b+v,0),B=Object.entries(D).sort((b,v)=>v[1]-b[1]);U.innerHTML=B.map(([b,v])=>{const _=Math.round(v/F*100),k=$[b]||"#95a5a6";return`<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span style="font-size:.82rem;font-weight:500">${b}</span><span style="font-size:.74rem;color:var(--mt)">${v} meals · ${_}%</span></div><div style="height:8px;background:var(--b1);border-radius:4px;overflow:hidden"><div style="height:100%;width:${_}%;background:${k};border-radius:4px;transition:width .6s ease"></div></div></div>`}).join("")||'<div class="es" style="padding:16px"><p>Cook more meals to see your cuisine breakdown.</p></div>'}const N=f("ins-waste");N&&(N.innerHTML=e.length?e.slice(0,10).map(M=>`<div class="waste-item"><span style="font-size:.86rem">${M.name}</span><span style="font-size:.74rem;color:var(--rd)">${M.date}</span></div>`).join(""):'<div class="es" style="padding:16px"><p>Nothing wasted yet — great job! 🎉</p></div>')}function nA(){const n=["fridge","freezer","pantry"].map(o=>{const c=u.inv.filter(l=>l.location===o);return c.length?rf(o).toUpperCase()+": "+c.map(l=>`${l.name} (${Si(l.qty,l.unit)})`).join(", "):""}).filter(Boolean).join(`
`),e=u.inv.filter(o=>{const c=$t(o.expiry);return c&&(c.c==="expiring"||c.c==="expired")}).map(o=>{const c=$t(o.expiry);return`${o.name} (${c.l})`}).join(", "),t=ko().map(o=>{const c=o.toISOString().split("T")[0];return u.mp[c]?`${o.toLocaleDateString("en-US",{weekday:"short"})}: ${u.mp[c]}`:""}).filter(Boolean).join(", "),i=u.recs.filter(o=>o.favorited||o.rating>=4).map(o=>`${o.name}${o.rating?` (${o.rating}★)`:""}`).join(", "),s=[u.cfg.nopork?"no pork":null,u.cfg.noshellfish?"no shellfish":null,u.cfg.vegetarian?"vegetarian":null,u.cfg.glutenfree?"gluten-free":null,u.cfg.other].filter(Boolean).join(", "),r=u.cookLog.slice(0,7).map(o=>o.name).join(", ");return`You are a kitchen and household assistant for a family in Edison NJ. You ONLY help with kitchen, food, cooking, grocery, and household topics. This includes:
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
HOUSEHOLD: ${u.cfg.name}, Adults: ${u.cfg.adults}, Kids: ${u.cfg.kids}, Restrictions: ${s||"none"}, Cuisines: ${u.cfg.cuisines}, Cook time: ${u.cfg.cookTime}.
CULTURAL BACKGROUND: Bushra is Bangladeshi, Bora is Turkish — authentically lean toward these cuisines (Bengali spices, mustard oil, dal, hilsa-style fish; Turkish kebabs, meze, börek, yogurt sauces, lentil soups). Suggest these when inventory allows.
Be concise. Use what they have. Suggest variety — lean toward Bangladeshi and Turkish — avoid repeating recent meals. Format grocery lists as bullet points starting "- ".

RECIPE FORMAT RULE: When suggesting recipes (any time you provide a recipe with ingredients/steps), wrap EACH recipe in :::RECIPE::: and :::END::: markers with a JSON object containing: title, ingredients (newline-separated list), steps (numbered newline-separated list), cuisine, cookTime, servings.
Example:
:::RECIPE:::
{"title":"Dal Tadka","ingredients":"1 cup red lentils\\n2 tomatoes, chopped\\n1 tsp cumin seeds\\n1 tsp turmeric","steps":"1. Wash and boil lentils until soft\\n2. Heat oil, add cumin seeds\\n3. Add tomatoes, cook until soft\\n4. Combine with lentils and simmer","cuisine":"Bangladeshi","cookTime":"30 min","servings":4}
:::END:::
Always use this format so the app can offer a one-tap save button. You can include normal text before/after recipe blocks.`}function iA(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<li>$1</li>").replace(/^[-•]\s+(.+)$/gm,"<li>$1</li>").replace(/\n/g,"<br>")}async function Rg(){const n=f("chi"),e=n.value.trim();if(!e)return;n.value="",Ag(n),u.chat.push({role:"user",content:e}),qa("user",e);const t=f("csb");t&&(t.disabled=!0);const i="thinking-"+Date.now(),s=f("chmsgs");s.innerHTML+=`<div class="cb asst thinking" id="${i}">Thinking…</div>`,s.scrollTop=s.scrollHeight;try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:800,system:nA(),messages:u.chat.map(d=>({role:d.role,content:d.content}))})})).json(),c=o.content&&o.content[0]&&o.content[0].text||"Sorry, I couldn't process that.",l=f(i);l&&l.remove(),u.chat.push({role:"assistant",content:c}),qa("assistant",c)}catch{const o=f(i);o&&o.remove(),qa("assistant","Sorry, I couldn't reach Claude. Check your connection and try again.")}t&&(t.disabled=!1)}function sA(n){const e=[];return{cleanText:n.replace(/:::RECIPE:::\s*([\s\S]*?)\s*:::END:::/g,(i,s)=>{try{const r=JSON.parse(s.trim());r.title&&e.push(r)}catch{}return""}).trim(),recipes:e}}function rA(n){const e=JSON.stringify(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;"),t=(n.ingredients||"").split(`
`).slice(0,3).join(", ");return`<div style="background:var(--card);border:1.5px solid var(--ac);border-radius:14px;padding:16px;margin:10px 0">
    <div style="font-family:'Fraunces',serif;font-size:1.1rem;font-weight:300;color:var(--ac);margin-bottom:6px">${(n.title||"").replace(/</g,"&lt;")}</div>
    ${n.cuisine?`<div style="font-size:.72rem;color:var(--mt);margin-bottom:6px">${n.cuisine}${n.cookTime?" · "+n.cookTime:""}${n.servings?" · "+n.servings+" servings":""}</div>`:""}
    ${t?`<div style="font-size:.8rem;color:var(--tx2);line-height:1.5;margin-bottom:10px">${t.replace(/</g,"&lt;")}…</div>`:""}
    <button class="btn bp bsm" onclick="importChatRecipe(this)" data-recipe="${e}">📖 Add to My Recipes</button>
  </div>`}async function oA(n){try{const e=JSON.parse(n.dataset.recipe),t="rec-"+Date.now(),i=[e.ingredients||"",e.steps?`

Steps:
`+e.steps:""].join("").trim();await nt({id:t,name:e.title||"Untitled Recipe",rating:0,favorited:!1,notes:"",description:i,source:"Claude Chat",sourceUrl:null,tags:[],cuisine:e.cuisine||"",cookTime:e.cookTime||"",servings:e.servings||"",cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:!1}),n.textContent="✓ Saved!",n.disabled=!0,n.style.background="var(--gn)",S("Recipe saved! 📖")}catch{S("Couldn't save recipe")}}function qa(n,e){const t=f("chmsgs");if(t){if(n==="assistant"){const{cleanText:i,recipes:s}=sA(e);if(i){const r=document.createElement("div");r.className="cb asst",r.innerHTML=iA(i),t.appendChild(r)}s.forEach(r=>{const o=document.createElement("div");o.style.maxWidth="88%",o.style.alignSelf="flex-start",o.innerHTML=rA(r),t.appendChild(o)})}else{const i=document.createElement("div");i.className="cb user",i.innerHTML=e,t.appendChild(i)}t.scrollTop=t.scrollHeight}}function aA(n){const e=f("chi");e&&(e.value=n.textContent),Rg()}function cA(){u.chat=[];const n=f("chmsgs");n&&(n.innerHTML=`<div class="cb asst">Hey! 👋 I'm your kitchen assistant — I can help with recipes, meal planning, grocery tips, and cooking questions. What's on your mind?</div>`)}function Ag(n){n.style.height="auto",n.style.height=Math.min(n.scrollHeight,120)+"px"}let Vs=!1,Jr=!1,Xr=null;function Yl(){if(Vs)return;const n=f("scanner-video");if(!n)return;const e=f("scan-status");e&&(e.textContent="Starting camera…",e.style.display="block"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{lA(n,e)})})}function lA(n,e){Quagga.init({inputStream:{name:"Live",type:"LiveStream",target:n,constraints:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}},locator:{patchSize:"medium",halfSample:!0},decoder:{readers:["ean_reader","ean_8_reader","upc_reader","upc_e_reader","code_128_reader","code_39_reader"]},locate:!0,frequency:10},function(t){if(t){console.error("Scanner init error:",t);const i=f("scerr");i&&(i.textContent="⚠️ Could not access camera. Try entering the barcode manually.",i.style.display="block"),e&&(e.style.display="none");return}uA(n),Quagga.start(),Vs=!0,e&&(e.textContent="Scanning…"),setTimeout(()=>dA(n),2e3)}),Quagga.onDetected(xg)}function uA(n){n.querySelectorAll("video").forEach(e=>{e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,e.play().catch(()=>{})})}async function dA(n){if(!Vs)return;const e=n.querySelector("video");if(!(!e||e.videoWidth>0)){console.warn("Camera feed appears black — retrying with manual getUserMedia");try{const t=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}});Xr=t,e.srcObject&&e.srcObject.getTracks().forEach(i=>i.stop()),e.srcObject=t,e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,await e.play()}catch(t){console.error("Manual camera retry failed:",t)}}}function Jl(){if(Vs){try{Quagga.stop()}catch{}Quagga.offDetected(xg),Xr&&(Xr.getTracks().forEach(n=>n.stop()),Xr=null),Vs=!1,Jr=!1}}async function xg(n){var s,r;if(Jr)return;const e=n&&n.codeResult&&n.codeResult.code;if(!e)return;const t=((r=(s=n.codeResult.decodedCodes)==null?void 0:s.filter(o=>o.error!==void 0))==null?void 0:r.map(o=>o.error))||[];if(!((t.length?t.reduce((o,c)=>o+c,0)/t.length:1)>.25)){Jr=!0,hA(),Jl(),f("scanbody").style.display="none",f("scspin").style.display="block",f("scst").textContent="Found "+e+" — looking up…";try{const o=await Pg(e);u.cp=o,f("aqty").value=1,f("aexp").value="",Xl("fridge",f("rl-fridge")),$g(o)}catch{const o=f("scerr");o.textContent="⚠️ Lookup failed. Check your connection or enter the barcode manually.",o.style.display="block"}f("scanbody").style.display="block",f("scspin").style.display="none",Jr=!1}}function hA(){const n=f("scan-success");n&&(n.style.display="flex",n.style.animation="none",n.offsetHeight,n.style.animation="",setTimeout(()=>{n.style.display="none"},500))}function fA(){ge("result"),ct("scan"),f("scerr").style.display="none",Yl()}function pA(){u.scanDestList=!0,ct("scan");const n=f("scanovttl");n&&(n.textContent="Scan → Shopping List");const e=f("scan-dest-hint");e&&(e.textContent="Running low? Scan to add to your shopping list."),f("scerr").style.display="none",Yl()}function mA(){u.scanDestList=!1,ct("scan");const n=f("scanovttl");n&&(n.textContent="Scan Barcode");const e=f("scan-dest-hint");e&&(e.textContent="Scan a barcode to add to your pantry or shopping list."),f("scerr").style.display="none",Yl()}function gA(){const n=f("scanNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=f("scanNoteInp");t&&t.focus()}}function yA(){if(!u.cp)return;const n=u.cp.notFound?"Barcode "+u.cp.barcode:u.cp.name,e=f("scanNoteInp"),t=e?e.value.trim():"",i=parseInt(f("aqty").value)||1,s={id:Date.now().toString(),name:n,qty:i,checked:!1,src:"scan"};u.cp.brand&&(s.brand=u.cp.brand),u.cp.image&&(s.image=u.cp.image),t&&(s.note=t),lt(s),S("Added to list: "+n),ge("result"),ge("scan"),u.scanDestList=!1,e&&(e.value="");const r=f("scanNoteWrap");r&&(r.style.display="none"),window.showScreen("shopping")}function vA(){const n=f("mentry");n.style.display=n.style.display==="none"?"block":"none"}async function wA(){const n=f("meinp").value.trim();if(!n)return;Jl(),f("scanbody").style.display="none",f("scspin").style.display="block",f("scst").textContent="Looking up…";const e=await Pg(n);u.cp=e,f("aqty").value=1,f("aexp").value="",Xl("fridge",f("rl-fridge")),f("meinp").value="",$g(e),f("scanbody").style.display="block",f("scspin").style.display="none"}async function Pg(n){try{const e=await fetch("/api/barcode?code="+encodeURIComponent(n));if(e.ok){const t=await e.json();if(t.found&&t.product)return{...t.product,notFound:!1}}}catch{}return{barcode:n,name:"",brand:"",quantity:"",category:"General",image:null,source:null,description:"",notFound:!0}}function _A(n,e){switch(n){case"Open Food Facts":return`https://world.openfoodfacts.org/product/${e}`;case"Open Beauty Facts":return`https://world.openbeautyfacts.org/product/${e}`;case"Open Pet Food Facts":return`https://world.openpetfoodfacts.org/product/${e}`;case"UPC Item DB":return`https://www.upcitemdb.com/upc/${e}`;case"Edamam":return"https://www.edamam.com/food-database/en/";default:return"#"}}function $g(n){var s;ge("scan"),f("resttl").textContent=n.notFound?"Not Found":"Product Found ✓",f("aunit").value=n.quantity||"unit";let e="";if(n.notFound)e=`<div class="nfb">⚠️ Barcode <code>${n.barcode}</code> not found in any database. Enter name:<input class="fi" id="mnm" placeholder="Product name (required)" oninput="valAdd()" style="margin-top:10px"/></div>`;else{const r=n.image?`<img src="${n.image}" class="pimg" onerror="this.style.display='none'"/>`:'<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">🛒</div>',o=n.description?`<div class="pdsc">${n.description}</div>`:"",c=n.source?`<a href="${_A(n.source,n.barcode)}" target="_blank" rel="noopener" class="srcb" style="text-decoration:none">${n.source} ↗</a>`:"";e=`<div class="pcard"><div class="phdr">${r}<div style="flex:1"><div class="pnm">${n.name}</div>${n.brand?`<div class="pbr">${n.brand}</div>`:""}<div class="pbc">${n.barcode}</div><span class="bdg">${n.category}</span>${c}</div></div>${o}</div>`}f("resbody").innerHTML=e;const t=(s=f("ov-result"))==null?void 0:s.querySelector(".ovbody");if(t){const r=t.querySelector(".frow"),o=t.querySelectorAll(".frow")[1],c=t.querySelectorAll(".qrow")[1];r&&(r.style.display=u.scanDestList?"none":""),o&&(o.style.display=u.scanDestList?"none":""),c&&(c.style.display=u.scanDestList?"none":"")}const i=f("scan-dest-btns");i&&(u.scanDestList?i.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2;background:var(--gn);border-color:var(--gn)" id="addbtn" onclick="addScannedToList()">🛒 Add to Shopping List</button>
      </div>`:i.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2" id="addbtn" onclick="addToInv()">📦 Add to Pantry</button>
      </div>
      <button class="btn bs bf" style="margin-top:8px;border-color:var(--gn);color:var(--gn)" onclick="addScannedToList()">🛒 Add to Shopping List instead</button>`),n.notFound&&setTimeout(()=>{const r=f("addbtn");r&&(r.disabled=!0)},0),ct("result")}function Xl(n,e){u.selR=n,document.querySelectorAll("#ov-result .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function bA(){const n=f("mnm");f("addbtn").disabled=!(n&&n.value.trim())}async function TA(){if(!u.cp)return;const n=f("mnm"),e=u.cp.notFound?n&&n.value.trim()||"":u.cp.name;if(!e)return;const t=f("aunit").value.trim()||"unit",i=Math.max(1,parseInt(f("aqty").value)||1),s=f("aexp").value||null,r="item-"+u.cp.barcode.replace(/\W/g,"-"),o=u.inv.find(c=>c.id===r);await oe({id:r,barcode:u.cp.barcode,name:e,brand:u.cp.brand||"",unit:t,qty:o?o.qty+i:i,location:u.selR,category:u.cp.category||"General",image:u.cp.image||null,source:u.cp.source||null,expiry:s,addedAt:o?o.addedAt:new Date().toLocaleDateString()}),S(o?`+${i} added to ${e}`:`${e} added!`),u.cp=null,ge("result")}function IA(n){const e=f("aqty");e.value=Math.max(1,(parseInt(e.value)||1)+n)}let xe=null,$r=0,Lr=0,Q=null,on=null,bt=0,vt=!1,ai=!1;const an=80,Dr=.1,cn=.7,Nr=8,Fn="cubic-bezier(0.25, 1.5, 0.5, 1)",$e="cubic-bezier(0.4, 0, 0.2, 1)";function EA(){document.addEventListener("touchstart",e=>{const t=e.target.closest(".swipe-inner");if(!t)return;const i=t.closest(".swipe-wrap");i&&(u.selectMode||(Q&&Q!==i&&(Ut(Q),Q=null),xe=t,$r=e.touches[0].clientX,Lr=e.touches[0].clientY,on=null,vt=!1,bt=i.offsetWidth,t.classList.add("swiping")))},{passive:!0}),document.addEventListener("touchmove",e=>{if(!xe)return;const t=e.touches[0].clientX,i=e.touches[0].clientY,s=t-$r,r=i-Lr;if(!on){if(Math.abs(s)<Nr&&Math.abs(r)<Nr)return;on=Math.abs(s)>Math.abs(r)?"horizontal":"vertical"}if(on==="vertical"){xe.classList.remove("swiping"),xe=null;return}e.preventDefault();const o=xe.closest(".swipe-wrap"),c=o==null?void 0:o.dataset.list,l=s>0&&c==="inv",d=l?s:s>=0?0:s;if(xe.style.transform=`translateX(${d}px)`,d<0){const g=o==null?void 0:o.querySelector(".swipe-del");if(g){const E=Math.min(100,Math.abs(d)/an*100);g.style.clipPath=`inset(0 0 0 ${100-E}%)`}const w=o==null?void 0:o.querySelector(".swipe-add");w&&(w.style.clipPath="inset(0 100% 0 0)")}else if(d>0&&l){const g=o==null?void 0:o.querySelector(".swipe-add");if(g){const E=Math.min(100,d/an*100);g.style.clipPath=`inset(0 ${100-E}% 0 0)`}const w=o==null?void 0:o.querySelector(".swipe-del");w&&(w.style.clipPath="inset(0 0 0 100%)")}const m=Math.abs(d)/bt;m>=cn&&!vt?(vt=!0,navigator.vibrate&&navigator.vibrate(10),o==null||o.classList.add("swipe-threshold")):m<cn&&vt&&(vt=!1,o==null||o.classList.remove("swipe-threshold"))},{passive:!1}),document.addEventListener("touchend",()=>{if(!xe)return;const e=xe,t=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/bt,r=t==null?void 0:t.dataset.list,o=i>0&&r==="inv";if(o&&s>=cn)Kh(t,e);else if(o&&s>=Dr){e.style.transition=`transform 0.4s ${Fn}`,e.style.transform=`translateX(${an}px)`;const c=t==null?void 0:t.querySelector(".swipe-add");c&&(c.style.transition=`clip-path 0.3s ${$e}`,c.style.clipPath="inset(0 0 0 0)"),t==null||t.classList.add("open"),Q&&Q!==t&&Ut(Q),Q=t,setTimeout(()=>{e.style.transition=""},400)}else if(!o&&s>=cn)Gh(t,e);else if(!o&&i<0&&s>=Dr){e.style.transition=`transform 0.4s ${Fn}`,e.style.transform=`translateX(-${an}px)`;const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${$e}`,c.style.clipPath="inset(0 0 0 0%)"),t==null||t.classList.add("open"),t==null||t.classList.add("swipe-threshold"),Q&&Q!==t&&Ut(Q),Q=t,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${Fn}`,e.style.transform="translateX(0)";const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${$e}`,c.style.clipPath="inset(0 0 0 100%)");const l=t==null?void 0:t.querySelector(".swipe-add");l&&(l.style.transition=`clip-path 0.3s ${$e}`,l.style.clipPath="inset(0 100% 0 0)"),t==null||t.classList.remove("open","swipe-threshold"),Q===t&&(Q=null),setTimeout(()=>{e.style.transition="",c&&(c.style.transition=""),l&&(l.style.transition="")},350)}xe=null}),document.addEventListener("mousedown",e=>{if(e.button!==0)return;const t=e.target.closest(".swipe-inner");if(!t)return;const i=t.closest(".swipe-wrap");i&&(u.selectMode||(Q&&Q!==i&&(Ut(Q),Q=null),ai=!0,xe=t,$r=e.clientX,Lr=e.clientY,on=null,vt=!1,bt=i.offsetWidth,t.classList.add("swiping")))}),document.addEventListener("mousemove",e=>{if(!ai||!xe)return;const t=e.clientX-$r,i=e.clientY-Lr;if(!on){if(Math.abs(t)<Nr&&Math.abs(i)<Nr)return;on=Math.abs(t)>Math.abs(i)?"horizontal":"vertical"}if(on==="vertical"){xe.classList.remove("swiping"),xe=null,ai=!1;return}e.preventDefault();const s=xe.closest(".swipe-wrap"),r=s==null?void 0:s.dataset.list,o=t>0&&r==="inv",c=o?t:t>=0?0:t;if(xe.style.transform=`translateX(${c}px)`,c<0){const d=s==null?void 0:s.querySelector(".swipe-del");if(d){const g=Math.min(100,Math.abs(c)/an*100);d.style.clipPath=`inset(0 0 0 ${100-g}%)`}const m=s==null?void 0:s.querySelector(".swipe-add");m&&(m.style.clipPath="inset(0 100% 0 0)")}else if(c>0&&o){const d=s==null?void 0:s.querySelector(".swipe-add");if(d){const g=Math.min(100,c/an*100);d.style.clipPath=`inset(0 ${100-g}% 0 0)`}const m=s==null?void 0:s.querySelector(".swipe-del");m&&(m.style.clipPath="inset(0 0 0 100%)")}const l=Math.abs(c)/bt;l>=cn&&!vt?(vt=!0,navigator.vibrate&&navigator.vibrate(10),s==null||s.classList.add("swipe-threshold")):l<cn&&vt&&(vt=!1,s==null||s.classList.remove("swipe-threshold"))});function n(){if(!ai||!xe){ai=!1;return}ai=!1;const e=xe,t=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/bt,r=t==null?void 0:t.dataset.list,o=i>0&&r==="inv";if(o&&s>=cn)Kh(t,e);else if(o&&s>=Dr){e.style.transition=`transform 0.4s ${Fn}`,e.style.transform=`translateX(${an}px)`;const c=t==null?void 0:t.querySelector(".swipe-add");c&&(c.style.transition=`clip-path 0.3s ${$e}`,c.style.clipPath="inset(0 0 0 0)"),t==null||t.classList.add("open"),Q&&Q!==t&&Ut(Q),Q=t,setTimeout(()=>{e.style.transition=""},400)}else if(!o&&s>=cn)Gh(t,e);else if(!o&&i<0&&s>=Dr){e.style.transition=`transform 0.4s ${Fn}`,e.style.transform=`translateX(-${an}px)`;const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${$e}`,c.style.clipPath="inset(0 0 0 0%)"),t==null||t.classList.add("open"),t==null||t.classList.add("swipe-threshold"),Q&&Q!==t&&Ut(Q),Q=t,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${Fn}`,e.style.transform="translateX(0)";const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${$e}`,c.style.clipPath="inset(0 0 0 100%)");const l=t==null?void 0:t.querySelector(".swipe-add");l&&(l.style.transition=`clip-path 0.3s ${$e}`,l.style.clipPath="inset(0 100% 0 0)"),t==null||t.classList.remove("open","swipe-threshold"),Q===t&&(Q=null),setTimeout(()=>{e.style.transition="",c&&(c.style.transition=""),l&&(l.style.transition="")},350)}xe=null}document.addEventListener("mouseup",n),document.addEventListener("mouseleave",n),document.addEventListener("mousedown",e=>{if(!Q||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const t=e.target.closest(".swipe-inner");t&&t.closest(".swipe-wrap")===Q||(Ut(Q),Q=null)}),document.addEventListener("click",e=>{document.querySelectorAll(".sh-note-edit.open").forEach(t=>{if(t.contains(e.target))return;const i=t.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-note-btn");if(s&&s.contains(e.target))return;const r=t.querySelector("textarea");r&&r.blur(),t.classList.remove("open")}),document.querySelectorAll(".sh-qty-edit.open").forEach(t=>{if(t.contains(e.target))return;const i=t.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-qty");if(s&&s.contains(e.target))return;const r=t.querySelector("input");r&&r.blur(),t.classList.remove("open")})},!0),document.addEventListener("touchstart",e=>{if(!Q||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const t=e.target.closest(".swipe-inner");t&&t.closest(".swipe-wrap")===Q||(Ut(Q),Q=null)},{passive:!0})}function Ut(n){const e=n==null?void 0:n.querySelector(".swipe-inner"),t=n==null?void 0:n.querySelector(".swipe-del"),i=n==null?void 0:n.querySelector(".swipe-add");e&&(e.style.transition=`transform 0.35s ${Fn}`,e.style.transform="translateX(0)",setTimeout(()=>{e.style.transition=""},350)),t&&(t.style.transition=`clip-path 0.3s ${$e}`,t.style.clipPath="inset(0 0 0 100%)",setTimeout(()=>{t.style.transition=""},300)),i&&(i.style.transition=`clip-path 0.3s ${$e}`,i.style.clipPath="inset(0 100% 0 0)",setTimeout(()=>{i.style.transition=""},300)),n==null||n.classList.remove("open","swipe-threshold")}async function Gh(n,e){const t=n==null?void 0:n.dataset.id,i=n==null?void 0:n.dataset.list;if(!t||!i)return;e.style.transition=`transform 0.3s ${$e}`,e.style.transform=`translateX(-${bt+100}px)`;const s=n==null?void 0:n.querySelector(".swipe-del");s&&(s.style.transition=`transform 0.3s ${$e}`,s.style.transform=`translateX(-${bt+100}px)`),await new Promise(r=>setTimeout(r,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",Q===n&&(Q=null),await new Promise(r=>setTimeout(r,250)),i==="shop"?await Ks(t):(await Lo(t),S("Item removed"))}async function Kh(n,e){const t=n==null?void 0:n.dataset.id;if(!t)return;e.style.transition=`transform 0.3s ${$e}`,e.style.transform=`translateX(${bt+100}px)`;const i=n==null?void 0:n.querySelector(".swipe-add");i&&(i.style.transition=`transform 0.3s ${$e}`,i.style.transform=`translateX(${bt+100}px)`),await new Promise(s=>setTimeout(s,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",Q===n&&(Q=null),await new Promise(s=>setTimeout(s,250)),await Lg(t)}async function kA(n,e){if(e!=="inv")return;const t=f("sw-"+n);if(!t)return;const i=t.querySelector(".swipe-inner"),s=t.offsetWidth;i&&(i.style.transition=`transform 0.3s ${$e}`,i.style.transform=`translateX(${s+100}px)`);const r=t.querySelector(".swipe-add");r&&(r.style.transition=`transform 0.3s ${$e}`,r.style.transform=`translateX(${s+100}px)`),await new Promise(o=>setTimeout(o,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",Q===t&&(Q=null),await new Promise(o=>setTimeout(o,250)),await Lg(n)}async function Lg(n){const e=u.inv.find(i=>i.id===n);if(!e)return;(await lt({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,brand:e.brand||"",image:e.image||null,src:"supplies"})).action==="new"?S(`${e.name} added to shopping list 🛒`):S(`${e.name} quantity updated on shopping list 🛒`)}async function SA(n,e){const t=f("sw-"+n);if(!t)return;const i=t.querySelector(".swipe-inner"),s=t.offsetWidth;i&&(i.style.transition=`transform 0.3s ${$e}`,i.style.transform=`translateX(-${s+100}px)`);const r=t.querySelector(".swipe-del");r&&(r.style.transition=`transform 0.3s ${$e}`,r.style.transform=`translateX(-${s+100}px)`),await new Promise(o=>setTimeout(o,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",Q===t&&(Q=null),await new Promise(o=>setTimeout(o,250)),e==="shop"?await Ks(n):(await Lo(n),S("Item removed"))}function CA(n,e){const t=f("sw-"+n);if(t){const i=t.querySelector(".swipe-inner"),s=parseFloat(((i==null?void 0:i.style.transform)||"").replace("translateX(",""))||0;if(Math.abs(s)>10){Ut(t),Q=null;return}}if(u.selectMode){u.selectedIds.has(n)?(u.selectedIds.delete(n),t==null||t.classList.remove("selected")):(u.selectedIds.add(n),t==null||t.classList.add("selected")),Yo();return}e==="shop"?window.openItemDetail(n):window.openInvItemDetail(n)}function RA(){if(u.selectMode==="shop"){Mi();return}u.selectMode&&Mi(),u.selectMode="shop",u.selectedIds.clear(),document.querySelectorAll("#shlist .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=f("sh-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),Yo()}function AA(){if(u.selectMode==="inv"){Mi();return}u.selectMode&&Mi(),u.selectMode="inv",u.selectedIds.clear(),document.querySelectorAll("#ibody .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=f("inv-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),Yo()}function Mi(){u.selectMode=null,u.selectedIds.clear(),document.querySelectorAll(".swipe-wrap.selecting").forEach(t=>t.classList.remove("selecting","selected"));const n=f("sh-selbtn");n&&(n.classList.remove("active"),n.textContent="Select");const e=f("inv-selbtn");e&&(e.classList.remove("active"),e.textContent="Select"),Yo()}async function xA(){if(!u.selectedIds.size)return;const n=[...u.selectedIds],e=u.selectMode;Mi(),e==="shop"?await Promise.all(n.map(t=>Ks(t))):await Promise.all(n.map(t=>Lo(t))),S(`Removed ${n.length} item${n.length!==1?"s":""} 🗑`)}function Yo(){const n=f("multi-bar");if(!n)return;const e=u.selectedIds.size,t=f("multi-count");t&&(t.textContent=e),u.selectMode?n.classList.add("visible"):n.classList.remove("visible")}const PA=["Chicken","Beef","Fish","Vegetarian","Vegan","Quick","Kids","Healthy","Batch Cook","Date Night"];function Dg(n){return"chip-"+n.split(" ").join("-")}function Ng(){const n=f("recChips");n&&(n.innerHTML=PA.map(e=>`<button onclick="toggleChip('${e}')" id="${Dg(e)}" style="padding:5px 10px;border-radius:20px;border:1px solid var(--bd);background:var(--s2);color:var(--tx2);font-size:.78rem;cursor:pointer;transition:all .15s">${e}</button>`).join(""))}function $A(n){const e=f(Dg(n));window._activeChips.has(n)?(window._activeChips.delete(n),e&&(e.style.background="var(--s2)",e.style.color="var(--tx2)",e.style.borderColor="var(--bd)")):(window._activeChips.add(n),e&&(e.style.background="var(--ac)",e.style.color="#000",e.style.borderColor="var(--ac)")),Mg()}function Mg(){const n=f("recPicker"),e=f("recFilter")?f("recFilter").value.trim().toLowerCase():"",t=[...window._activeChips].map(r=>r.toLowerCase()),s=[...u.recs].sort((r,o)=>(o.cookCount||0)-(r.cookCount||0)).filter(r=>{const o=(r.name+" "+(r.description||"")+" "+(r.tags||[]).join(" ")).toLowerCase(),c=e?e.split(/\s+/).every(d=>o.includes(d)):!0,l=t.every(d=>o.includes(d));return c&&l});n.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(r=>`<option value="${r.id}">${r.name}</option>`).join(""),window._pickedRec=null,f("mealMinp").value=""}function LA(n,e){u.md=n,f("mealMttl").textContent="Meal for "+e,f("mealMinp").value=u.mp[n]||"",window._pickedRec=null,window._activeChips=new Set;const t=f("recFilter");t&&(t.value=""),Ng();const i=f("recPicker");if(u.recs&&u.recs.length){const s=[...u.recs].sort((c,l)=>(l.cookCount||0)-(c.cookCount||0));i.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(c=>`<option value="${c.id}">${c.name}</option>`).join("");const r=u.mp[n]||"",o=s.find(c=>c.name===r);i.value=o?o.id:"",f("recPickerWrap").style.display="block"}else f("recPickerWrap").style.display="none";f("mealM").classList.add("active"),setTimeout(()=>f("mealMinp").focus(),100)}function DA(n){if(!n){window._pickedRec=null,f("mealMinp").value="";return}const e=u.recs.find(t=>t.id===n);e&&(window._pickedRec=e,f("mealMinp").value=e.name)}function Zl(){f("mealM").classList.remove("active")}function NA(){f("schedM").classList.remove("active")}async function MA(){const n=f("mealMinp").value.trim();if(await Xn(u.md,n||null),window._pickedRec&&window._pickedRec.description){const e=window._pickedRec.description,t=u.inv.map(o=>o.name.toLowerCase()),i=u.shop.map(o=>o.name.toLowerCase()),s=e.split(/[\n,]/).map(o=>o.replace(/^[\d\/\s]*(cup|tbsp|tsp|oz|lb|g|kg|ml|l|clove|slice|piece|bunch|head|can|package|pkg)s?\.?\s*/gi,"").replace(/^[\d]+\s*/,"").trim()).filter(o=>o.length>1&&o.length<60);let r=0;for(const o of s){if(/\b(add|mix|heat|cook|bake|stir|boil|fry|slice|chop|dice|combine|place|pour|season|serve|preheat|bring|remove|let|set|transfer)\b/i.test(o))continue;const c=o.replace(/^[-•*]\s*/,"").trim();if(!c||c.length<2)continue;const l=c.toLowerCase();t.some(d=>d.includes(l)||l.includes(d))||i.some(d=>d===l)||(await lt({id:Date.now().toString()+Math.random().toString(36).slice(2),name:c,qty:1,checked:!1,src:"recipe"}),r++)}r>0&&S(`Added ${r} ingredient${r!==1?"s":""} to shopping list 🛒`)}window._pickedRec=null,Zl(),Ln(),sr(),Wi()}async function OA(){await Xn(u.md,null),Zl(),Ln(),sr(),Wi()}function VA(n){const e=u.mp[n];e&&(u.cn=e,u.nr=0,f("cookedNm").textContent=e,f("cnotes").value="",Ps("cstars",0),f("cookedM").classList.add("active"))}async function UA(){await dp(u.cn,pn()),await Xn(pn(),null),f("cookedM").classList.remove("active"),Ln(),Wi(),S("Meal logged!")}async function FA(){var i;const n=f("cnotes").value.trim(),e=(i=f("tog-leftover"))==null?void 0:i.classList.contains("on");await dp(u.cn,pn());const t=u.recs.find(s=>s.name.toLowerCase()===u.cn.toLowerCase());t?await nt({...t,cookCount:(t.cookCount||0)+1,lastCooked:pn()}):await nt({id:"rec-"+Date.now(),name:u.cn,rating:u.nr,favorited:!1,notes:n,description:"",source:"Meal Plan",tags:[],cookCount:1,savedAt:new Date().toLocaleDateString(),lastCooked:pn()}),e&&await Xn(_y(),u.cn+" (leftovers)"),await Xn(pn(),null),f("cookedM").classList.remove("active"),Ln(),Wi(),S(e?"Saved! Leftovers planned for tomorrow 🥡":"Saved to recipes! ⭐")}function HA(n){f("schedNm").textContent=n;const e=["S","M","T","W","T","F","S"],t=new Date;t.setHours(0,0,0,0),f("schedWk").innerHTML=ko().map((i,s)=>{const r=i.toISOString().split("T")[0],o=i.getTime()===t.getTime(),c=u.mp[r];return`<div class="wd${o?" today":""}${c?" hm":""}" onclick="schedSet('${r}','${n}')"><div class="wdn">${e[s]}</div><div class="wdd">${i.getDate()}</div>${c?`<div class="wdm">${c}</div>`:""}</div>`}).join(""),f("schedM").classList.add("active")}async function BA(n,e){await Xn(n,e),f("schedM").classList.remove("active"),Ln(),Wi(),S("Scheduled! 📅")}function jA(){const n=s=>f(s),e=(s,r)=>{const o=n(s);o&&(o.value=r||"")};e("setName",u.cfg.name),e("setAdults",u.cfg.adults),e("setKids",u.cfg.kids),e("setOther",u.cfg.other),e("setCuisines",u.cfg.cuisines),e("setCookTime",u.cfg.cookTime),e("setZipcode",u.cfg.zipcode);const t=(s,r)=>{const o=n(s);o&&o.classList.toggle("on",!!r)};t("tg-nopork",u.cfg.nopork),t("tg-noshellfish",u.cfg.noshellfish),t("tg-vegetarian",u.cfg.vegetarian),t("tg-glutenfree",u.cfg.glutenfree),t("tg-notif",u.cfg.notif);const i=f("notifTimeRow");i&&(i.style.display=u.cfg.notif?"block":"none"),e("setNotifTime",u.cfg.notifTime||"8"),e("setNotifDays",String(u.cfg.notifDays||3)),e("setUsername",u.username),nu(),tu(),lx()}async function zA(){u.cfg={...u.cfg,name:f("setName").value.trim(),adults:f("setAdults").value.trim(),kids:f("setKids").value.trim(),nopork:f("tg-nopork").classList.contains("on"),noshellfish:f("tg-noshellfish").classList.contains("on"),vegetarian:f("tg-vegetarian").classList.contains("on"),glutenfree:f("tg-glutenfree").classList.contains("on"),other:f("setOther").value.trim(),cuisines:f("setCuisines").value.trim(),cookTime:f("setCookTime").value,zipcode:f("setZipcode")?f("setZipcode").value.trim():"",notif:f("tg-notif").classList.contains("on"),notifTime:f("setNotifTime")?f("setNotifTime").value:"8",notifDays:parseInt(f("setNotifDays")?f("setNotifDays").value:"3")},await $o(),u.cfg.notif&&Og(),S("Settings saved!"),ge("settings"),$l()}async function qA(){var e,t;const n=((t=(e=f("setZipcode"))==null?void 0:e.value)==null?void 0:t.trim())||"";u.cfg={...u.cfg,zipcode:n},await $o(),S("Saved!")}async function WA(n){if(!n.classList.contains("on")){if(!("Notification"in window)){S("Notifications not supported on this browser");return}if(Notification.permission==="denied"){S("Notifications blocked — enable in browser settings");return}if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){S("Notifications permission denied");return}}n.classList.toggle("on");const t=f("notifTimeRow");t&&(t.style.display=n.classList.contains("on")?"block":"none")}function GA(){if(Notification.permission!=="granted"){S("Enable notifications first");return}const n=u.inv.filter(t=>{const i=$t(t.expiry);return i&&(i.c==="expiring"||i.c==="expired")});if(!n.length){new Notification("Kitchen 🧺",{body:"No items expiring soon — you're all good!"});return}const e=n.slice(0,3).map(t=>t.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${e}${n.length>3?" + "+(n.length-3)+" more":""} need attention`})}function Og(){if(!u.cfg.notif||Notification.permission!=="granted")return;const n=parseInt(localStorage.getItem("ks-lastnotif")||"0"),e=Date.now();if(e-n<864e5)return;localStorage.setItem("ks-lastnotif",e.toString());const t=u.cfg.notifDays||3,i=u.inv.filter(r=>{if(!$t(r.expiry))return!1;const c=new Date(r.expiry+"T00:00:00"),l=new Date;return l.setHours(0,0,0,0),Math.round((c-l)/864e5)<=t});if(!i.length)return;const s=i.slice(0,3).map(r=>r.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${s}${i.length>3?" + "+(i.length-3)+" more":""} expiring in ${t} days or less`})}function eu(){return le("ks-hhs")||[u.hid]}async function tu(){const n=X();if(n)try{const e=await G(`households/${u.hid}`);if(!e)return;const t=e.ownerUid===n.uid,i=f("hhInviteCode");if(i&&(i.textContent=e.inviteCode||"—"),e.inviteCode&&t)try{await z(`household_codes/${e.inviteCode}`,{householdId:u.hid})}catch{}const s=f("regenCodeBtn");s&&(s.style.display=t?"":"none");const r=f("hhMembers");if(r&&e.members){const l=await Promise.all(e.members.map(async d=>{try{const m=await G(`users/${d.uid}`);return{...d,username:(m==null?void 0:m.username)||null}}catch{return{...d,username:null}}}));r.innerHTML=l.map(d=>{const m=d.uid===n.uid,g=d.role==="owner",w=g?" 👑":"",E=d.username?`@${d.username}`:"",A=d.joinedAt?new Date(d.joinedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"",P=[];E&&P.push(E),P.push(g?"Owner":"Member"),A&&P.push(`Joined ${A}`);let $="";return t&&!m&&($=`<div style="display:flex;gap:4px;flex-shrink:0">
            <button onclick="event.stopPropagation();transferOwnershipUI('${d.uid}','${d.name.replace(/'/g,"\\'")}')" style="background:none;border:1px solid var(--b2);color:var(--ac);cursor:pointer;font-size:.72rem;padding:4px 8px;border-radius:8px" title="Transfer ownership">👑 Transfer</button>
            <button onclick="event.stopPropagation();removeMemberFromHH('${d.uid}','${d.name.replace(/'/g,"\\'")}')" style="background:none;border:1px solid var(--b2);color:var(--rd);cursor:pointer;font-size:.72rem;padding:4px 8px;border-radius:8px">Remove</button>
          </div>`),`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px">
          <div style="min-width:0;flex:1">
            <div style="font-size:.86rem;font-weight:500;color:var(--tx)">${d.name}${m?" (you)":""}${w}</div>
            <div style="font-size:.7rem;color:var(--mt);margin-top:2px">${P.join(" · ")}</div>
          </div>
          ${$}
        </div>`}).join("")}const o=f("utilitiesSection");o&&(o.style.display="",o.querySelectorAll(".ownerUtil").forEach(l=>{l.style.display=t?"":"none"}));const c=f("leaveHouseholdBtn");c&&(c.style.display="block",c.textContent=t?"🗑 Delete or Leave Household":"🚪 Leave Household")}catch(e){console.error("renderHouseholdInfo error:",e)}}async function KA(){var e;const n=(e=f("hhInviteCode"))==null?void 0:e.textContent;if(!(!n||n==="—"))try{await navigator.clipboard.writeText(n),S("Invite code copied!")}catch{S("Couldn't copy — try manually")}}async function QA(){var t;const n=(t=f("hhInviteCode"))==null?void 0:t.textContent;if(!n||n==="—")return;const e=`Join my kitchen on Kitchen app! Use invite code: ${n} at https://pantry-app-zeta-six.vercel.app`;if(navigator.share)try{await navigator.share({text:e})}catch{}else try{await navigator.clipboard.writeText(e),S("Share text copied to clipboard!")}catch{S("Couldn't share — try manually")}}async function YA(){if(confirm("Regenerate invite code? The old code will stop working."))try{const n=await Db(u.hid);if(n){const e=f("hhInviteCode");e&&(e.textContent=n),S("New invite code generated!")}}catch(n){console.error("regenInviteCode error:",n),S("Failed to regenerate code")}}async function JA(n,e){const t=e||"this member";if(confirm(`Remove ${t} from the household? They will lose access immediately.`))try{await cp(u.hid,n),S(`${t} has been removed`),tu()}catch(i){console.error("removeMemberFromHH error:",i),S("Failed to remove member")}}async function XA(n,e){const t=e||"this member";if(confirm(`Transfer ownership to ${t}? You will become a regular member.`))try{await Nb(u.hid,n),S(`Ownership transferred to ${t}`),tu()}catch(i){console.error("transferOwnershipUI error:",i),S("Failed to transfer ownership")}}async function Vg(){const n=X();if(n)try{const e=await G(`households/${u.hid}`);if(!e)return;const t=e.ownerUid===n.uid,i=(e.members||[]).length,s=e.name||"this household";if(t){if(i>1){alert("You're the owner. Please transfer ownership to another member before leaving.");return}if(!confirm("You're the only member. Leaving will permanently delete this household and all its data. Are you sure?"))return;await lp(u.hid,n.uid);try{const r=await G(`users/${n.uid}`);r&&await z(`users/${n.uid}`,{...r,householdIds:[],needsHousehold:!0,onboardingDone:!1,id:void 0})}catch{}S("Household deleted"),Nc()}else{if(!confirm(`Leave the ${s} household? You will lose access immediately.`))return;await cp(u.hid,n.uid),S("You have left the household"),Nc()}}catch(e){console.error("leaveHousehold error:",e),S("Something went wrong. Please try again.")}}function Nc(){localStorage.removeItem("ks-h");const n=(le("ks-hhs")||[]).filter(e=>e!==u.hid);n.length>0?(Ne("ks-hhs",n),localStorage.setItem("ks-h",n[0])):localStorage.removeItem("ks-hhs"),location.reload()}async function ZA(){const n=X();if(!n||!u.hid)return;await up(u.hid,n.uid)||(S("You no longer have access to this household"),Nc())}async function ex(){const n=X();if(n)try{if(u.hid){const e=await G(`households/${u.hid}`);if(e&&e.ownerUid===n.uid&&(e.members||[]).length>1){alert("You're the owner of a household with other members. Please transfer ownership before deleting your account.");return}}if(!confirm("Delete your account permanently? All your data will be erased and cannot be recovered.")||!confirm("Are you absolutely sure? This action cannot be undone."))return;await Wb(n.uid);try{await n.delete()}catch(e){if(e.code==="auth/requires-recent-login"){alert("For security, please sign out and sign back in, then try deleting your account again.");return}throw e}localStorage.clear(),S("Account deleted"),location.reload()}catch(e){console.error("deleteAccount error:",e),S("Failed to delete account. Please try again.")}}async function tx(){var i,s,r;const n=(r=(s=(i=f("newHHCode"))==null?void 0:i.value)==null?void 0:s.trim())==null?void 0:r.toUpperCase();if(!n)return;const e=X();if(!e){S("Sign in first");return}const t=f("newHHCode");t.disabled=!0;try{const o=await ap(n,e);if(!o){S("Invalid invite code. Check and try again."),t.disabled=!1;return}const c=eu();c.includes(o)||c.push(o),Ne("ks-hhs",c),f("newHHCode").value="",nu(),S("Household joined!")}catch(o){console.error("addHousehold error:",o),S("Failed to join household")}t.disabled=!1}function nx(n){n!==u.hid&&(localStorage.setItem("ks-h",n),location.reload())}async function ix(n){if(n===u.hid){Vg();return}const e=X();if(e)try{const i=await G(`users/${e.uid}`);if(i){const o=(i.householdId?[i.householdId]:i.householdIds||[]).filter(l=>l!==n),c={...i,householdIds:o,id:void 0};i.householdId&&delete c.householdId,await z(`users/${e.uid}`,c)}const s=await G(`households/${n}`);if(s){const r=(s.members||[]).filter(c=>c.uid!==e.uid),o=(s.memberUids||[]).filter(c=>c!==e.uid);await z(`households/${n}`,{...s,members:r,memberUids:o,id:void 0})}}catch(i){console.error("removeHousehold error:",i)}const t=eu().filter(i=>i!==n);Ne("ks-hhs",t),nu()}async function nu(){const n=eu().filter(i=>i!==u.hid),e=f("hhList");if(!e)return;if(!n.length){e.innerHTML='<div style="font-size:.82rem;color:var(--mt);padding:10px 0">No other households yet.</div>';return}const t=[];for(const i of n){let s=i;try{const r=await G(`households/${i}`);r!=null&&r.name&&(s=r.name)}catch{}t.push({id:i,name:s})}e.innerHTML=t.map(({id:i,name:s})=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px;cursor:pointer" onclick="switchHousehold('${i}')">
      <div>
        <div style="font-size:.88rem;font-weight:500;color:var(--tx)">${s}</div>
        <div style="font-size:.7rem;color:var(--mt);margin-top:2px">Tap to switch</div>
      </div>
      <button onclick="event.stopPropagation();removeHousehold('${i}')" style="background:none;border:none;color:var(--mt);cursor:pointer;font-size:.82rem;padding:4px 8px">✕</button>
    </div>`).join("")}const Io={gold:{name:"Gold",swatch:"#d4a853",dark:{bg:"#0f0f0d",sf:"#1a1a17",card:"#222220",card2:"#2a2a27",b1:"#333330",b2:"#3d3d39",ac:"#d4a853",ac2:"#e8c27a",acr:"212,168,83",tx:"#ede8d8",tx2:"#b8b09a",mt:"#7a7468"},light:{bg:"#faf8f2",sf:"#ffffff",card:"#f3ede0",card2:"#efe8d8",b1:"#ddd5c0",b2:"#cec4ac",ac:"#a8732a",ac2:"#c48f3e",acr:"168,115,42",tx:"#2a2418",tx2:"#5c5040",mt:"#9a8870"}},forest:{name:"Forest",swatch:"#4a9e5c",dark:{bg:"#0a1410",sf:"#111f17",card:"#182a1e",card2:"#1e3326",b1:"#2a4032",b2:"#355040",ac:"#6db56d",ac2:"#8fd08f",acr:"109,181,109",tx:"#e4f0e4",tx2:"#9dbf9d",mt:"#5a7a5a"},light:{bg:"#f2f9f2",sf:"#ffffff",card:"#e8f5e8",card2:"#dff0df",b1:"#c0ddc0",b2:"#a8cca8",ac:"#2e7d32",ac2:"#43a047",acr:"46,125,50",tx:"#0d2010",tx2:"#2e4f2e",mt:"#5a7a5a"}},ocean:{name:"Ocean",swatch:"#38bdf8",dark:{bg:"#060e1a",sf:"#0d1829",card:"#112035",card2:"#162840",b1:"#1e3554",b2:"#264468",ac:"#38bdf8",ac2:"#7dd3fc",acr:"56,189,248",tx:"#e0f2fe",tx2:"#7ab8d4",mt:"#486880"},light:{bg:"#f0f8ff",sf:"#ffffff",card:"#e0f2fe",card2:"#d4ecf9",b1:"#b0d8f0",b2:"#90c4e4",ac:"#0369a1",ac2:"#0284c7",acr:"3,105,161",tx:"#082040",tx2:"#1e4060",mt:"#4a7090"}},bordeaux:{name:"Bordeaux",swatch:"#e8829a",dark:{bg:"#120810",sf:"#1c0e18",card:"#261420",card2:"#301828",b1:"#4a2238",b2:"#5c2a46",ac:"#e8829a",ac2:"#f4aabb",acr:"232,130,154",tx:"#fce8ee",tx2:"#d4909e",mt:"#8a5060"},light:{bg:"#fff5f7",sf:"#ffffff",card:"#ffe8ed",card2:"#ffd8e0",b1:"#f4b8c4",b2:"#eca0b0",ac:"#be3455",ac2:"#d94070",acr:"190,52,85",tx:"#2a080e",tx2:"#6a2030",mt:"#9a5060"}},sand:{name:"Sand",swatch:"#e07a5f",dark:{bg:"#170e08",sf:"#221508",card:"#2e1c0e",card2:"#382414",b1:"#4a3020",b2:"#5c3c28",ac:"#e07a5f",ac2:"#eca080",acr:"224,122,95",tx:"#fdf0e8",tx2:"#c8a090",mt:"#887060"},light:{bg:"#fdf6ec",sf:"#fffbf5",card:"#f5e8d8",card2:"#eedcc8",b1:"#ddc8ac",b2:"#ccb494",ac:"#c1440e",ac2:"#d4602a",acr:"193,68,14",tx:"#2a1808",tx2:"#5c3820",mt:"#9a7060"}},midnight:{name:"Midnight",swatch:"#818cf8",dark:{bg:"#050814",sf:"#0a0d1f",card:"#0f1228",card2:"#141830",b1:"#1e2448",b2:"#272e58",ac:"#818cf8",ac2:"#a5b0ff",acr:"129,140,248",tx:"#e8eaff",tx2:"#9099cc",mt:"#505880"},light:{bg:"#f0f1ff",sf:"#ffffff",card:"#e4e6ff",card2:"#d8dbff",b1:"#b8bdff",b2:"#a0a6f4",ac:"#4f46e5",ac2:"#6366f1",acr:"79,70,229",tx:"#0a0820",tx2:"#202060",mt:"#5050a0"}},lavender:{name:"Lavender",swatch:"#c084fc",dark:{bg:"#0e0814",sf:"#160e20",card:"#1e1430",card2:"#261a3c",b1:"#382454",b2:"#442c66",ac:"#c084fc",ac2:"#d8a8ff",acr:"192,132,252",tx:"#f5ecff",tx2:"#c0a0e0",mt:"#7a5898"},light:{bg:"#faf5ff",sf:"#ffffff",card:"#f3e8ff",card2:"#ecdcff",b1:"#d8b8f8",b2:"#c8a0f0",ac:"#9333ea",ac2:"#a855f7",acr:"147,51,234",tx:"#1a0830",tx2:"#481080",mt:"#805098"}}};let Us=le("ks-theme")||"gold",Fs=le("ks-mode")||"auto";function Eo(n,e){Us=n,Fs=e,Ne("ks-theme",n),Ne("ks-mode",e);const t=Io[n]||Io.gold,s=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?t.dark:t.light,r=document.documentElement.style;r.setProperty("--bg",s.bg),r.setProperty("--sf",s.sf),r.setProperty("--card",s.card),r.setProperty("--card2",s.card2),r.setProperty("--b1",s.b1),r.setProperty("--b2",s.b2),r.setProperty("--ac",s.ac),r.setProperty("--ac2",s.ac2),r.setProperty("--acd","rgba("+s.acr+",.12)"),r.setProperty("--tx",s.tx),r.setProperty("--tx2",s.tx2),r.setProperty("--mt",s.mt),r.setProperty("--gn","#6db56d"),r.setProperty("--gnd","rgba(109,181,109,.12)"),r.setProperty("--rd","#d96b6b"),r.setProperty("--rdd","rgba(217,107,107,.12)"),r.setProperty("--am","#c8960a"),r.setProperty("--amd","rgba(200,150,10,.12)"),Ug(e),Fg(n)}function sx(n){Eo(Us,n)}function Ug(n){["auto","light","dark"].forEach(e=>{const t=f("mode-"+e);t&&(t.style.background=e===n?"var(--ac)":"",t.style.color=e===n?"var(--bg)":"",t.style.borderColor=e===n?"var(--ac)":"")})}function Fg(n){const e=f("themePicker");e&&(e.innerHTML="",Object.keys(Io).forEach(t=>{const i=Io[t],s=t===n,r=document.createElement("div");r.title=i.name,r.style.cssText="width:36px;height:36px;border-radius:50%;background:"+i.swatch+";cursor:pointer;border:3px solid "+(s?"var(--tx)":"transparent")+";box-shadow:"+(s?"0 0 0 2px var(--ac)":"none")+";transition:all .2s;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.85rem",r.textContent=s?"✓":"",r.onclick=()=>Eo(t,Fs),r.onmouseover=function(){this.style.transform="scale(1.15)"},r.onmouseout=function(){this.style.transform="scale(1)"},e.appendChild(r)}))}function rx(){Eo(Us,Fs),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{Fs==="auto"&&Eo(Us,"auto")})}function ox(){Fg(Us),Ug(Fs)}async function ax(){const n=f("enrichBtn"),e=f("enrichProgress"),t=f("enrichStatus"),i=f("enrichBar");n&&(n.disabled=!0),e&&(e.style.display="block");const s=u.shop.filter(d=>Qh(d)),r=u.inv.filter(d=>Qh(d)),o=[...s.map(d=>({item:d,list:"shop"})),...r.map(d=>({item:d,list:"inv"}))];if(!o.length){t&&(t.textContent="All items already enriched!"),i&&(i.style.width="100%"),n&&(n.disabled=!1),S("Nothing to enrich — all items already have data.");return}let c=0,l=0;for(let d=0;d<o.length;d++){const{item:m,list:g}=o[d],w=Math.round((d+1)/o.length*100);t&&(t.textContent=`Processing "${m.name}" (${d+1}/${o.length})…`),i&&(i.style.width=w+"%");try{const P=(await(await fetch(`/api/text-search?q=${encodeURIComponent(m.name)}`)).json()).results||[];if(P.length){const $=P[0],U={...m,image:$.image||m.image||null,brand:$.brand||m.brand||"",category:$.category||m.category||"",source:$.source||m.source||"search"};g==="shop"?await Ye(U):await oe(U),c++}else l++}catch(E){console.warn(`Enrich failed for "${m.name}":`,E),l++}d<o.length-1&&await Hg(300)}t&&(t.textContent=`Done! ${c} enriched, ${l} skipped.`),i&&(i.style.width="100%"),n&&(n.disabled=!1),S(`Enrichment complete: ${c} updated, ${l} unchanged.`)}function Qh(n){return!n.name||n.name.length<2||n.imageDismissed?!1:!n.image&&!n.brand}function Hg(n){return new Promise(e=>setTimeout(e,n))}async function cx(){if(!u.recs||u.recs.length===0){S("No recipes to publish");return}if(!confirm(`Publish all ${u.recs.length} recipes to the community? This creates independent copies visible to everyone. Already-published recipes will be skipped.`))return;const n=X(),e=(n==null?void 0:n.displayName)||localStorage.getItem("ks-who")||"Anonymous",t=u.recs.length;let i=0;const s=f("bulkPubProgress");s&&(s.style.display="block",s.textContent=`Publishing 0/${t}…`);const r=f("bulkPubBtn");r&&(r.disabled=!0);let o=0;for(const c of u.recs)try{if(await hp(c)){o++,s&&(s.textContent=`Published ${i}/${t} (${o} skipped)…`);continue}await tl(c,e),i++,s&&(s.textContent=`Published ${i}/${t}…`)}catch(l){console.error("Failed to publish:",c.name,l)}S(`Published ${i} of ${t} recipes to community!`+(o?` (${o} already published)`:"")),r&&(r.disabled=!1),s&&(s.textContent=`Done — ${i} published, ${o} skipped.`)}function lx(){const n=f("bulkPubBtn");n&&(n.style.display="block")}async function ux(){if(!confirm("Scan community recipes and remove duplicates? (Keeps the oldest/original version of each duplicate.)"))return;const n=f("removeDupBtn");n&&(n.disabled=!0,n.textContent="Scanning…");try{const e=await Lt();if(!e||e.length===0){S("No community recipes found."),n&&(n.disabled=!1,n.textContent="🧹 Remove duplicate community recipes");return}const t=u.hid||"",i=await il(),s=l=>l.householdId?l.householdId===t:l.authorUid&&i.includes(l.authorUid),r={};for(const l of e){if(!s(l))continue;const d=(l.title||"").trim().toLowerCase();r[d]||(r[d]=[]),r[d].push(l)}const o=[];for(const l of Object.keys(r)){const d=r[l];if(!(d.length<=1)){d.sort((m,g)=>(m.createdAt||"").localeCompare(g.createdAt||""));for(let m=1;m<d.length;m++)o.push(d[m])}}if(o.length===0){S("No duplicate community recipes found."),n&&(n.disabled=!1,n.textContent="🧹 Remove duplicate community recipes");return}let c=0;for(const l of o)try{await ye(`public_recipes/${l.id}`),c++,n&&(n.textContent=`Removing ${c}/${o.length}…`)}catch(d){console.error("Failed to delete duplicate:",l.id,l.title,d)}u.comRecs=await Lt(),S(`${c} duplicate recipe${c!==1?"s":""} removed.`)}catch(e){console.error("removeDuplicateCommunityRecipes error:",e),S("Error scanning for duplicates. Check console.")}n&&(n.disabled=!1,n.textContent="🧹 Remove duplicate community recipes")}async function dx(){var t;const n=(t=X())==null?void 0:t.uid;if(!n)return;const e=f("removeMyCommBtn");try{e&&(e.disabled=!0,e.textContent="Counting…");const s=(await Lt()||[]).filter(o=>o.authorUid===n);if(s.length===0){S("You have no community recipes to remove."),e&&(e.disabled=!1,e.textContent="🗑️ Remove all my community recipes");return}if(e&&(e.disabled=!1,e.textContent="🗑️ Remove all my community recipes"),!confirm(`This will permanently remove ${s.length} community recipe${s.length!==1?"s":""} published under your username. This cannot be undone. Are you sure?`))return;e&&(e.disabled=!0,e.textContent="Removing…");let r=0;for(const o of s)try{await ye(`public_recipes/${o.id}`),r++,e&&(e.textContent=`Removing ${r}/${s.length}…`)}catch(c){console.error("Failed to delete community recipe:",o.id,o.title,c)}u.comRecs=await Lt(),S(`${r} community recipe${r!==1?"s":""} removed.`)}catch(i){console.error("removeMyCommRecipes error:",i),S("Error removing community recipes. Check console.")}e&&(e.disabled=!1,e.textContent="🗑️ Remove all my community recipes")}async function hx(){var t;const n=(t=X())==null?void 0:t.uid;if(!n)return;const e=f("removeHHCommBtn");try{e&&(e.disabled=!0,e.textContent="Counting…");const i=await Lt(),s=u.hid||"",r=await il();console.log("[removeHHComm] Household ID:",s,"| Member UIDs:",r),console.log("[removeHHComm] Total public recipes fetched:",(i||[]).length);const o=m=>m.householdId?m.householdId===s:m.authorUid&&r.includes(m.authorUid),c=(i||[]).filter(o);if(console.log("[removeHHComm] Matched household recipes:",c.length,c.map(m=>({id:m.id,title:m.title,authorUid:m.authorUid,householdId:m.householdId}))),c.length===0){S("Your household has no community recipes to remove."),e&&(e.disabled=!1,e.textContent="🗑️ Remove all our community recipes");return}if(e&&(e.disabled=!1,e.textContent="🗑️ Remove all our community recipes"),!confirm(`This will permanently remove ${c.length} community recipe${c.length!==1?"s":""} published by your household. This cannot be undone. Are you sure?`))return;e&&(e.disabled=!0,e.textContent="Removing…");let l=0,d=0;for(const m of c)try{const g=`public_recipes/${m.id}`;m.authorUid===n?await ye(g):await Pb(g),l++,console.log("[removeHHComm] Deleted:",m.id,m.title,"author:",m.authorUid),e&&(e.textContent=`Removing ${l}/${c.length}…`)}catch(g){d++,console.error("[removeHHComm] Failed to delete:",m.id,m.title,"author:",m.authorUid,g)}u.comRecs=await Lt(),d>0?S(`${l} removed, ${d} failed. Check console.`):S(`${l} community recipe${l!==1?"s":""} removed.`)}catch(i){console.error("removeHouseholdCommRecipes error:",i),S("Error removing community recipes. Check console.")}e&&(e.disabled=!1,e.textContent="🗑️ Remove all our community recipes")}async function fx(){var l,d,m,g,w;const n=X();if(!n){S("Sign in first");return}const e=[...u.recs];let t=[];try{t=(await re("public_recipes")).filter(A=>A.authorUid===n.uid)}catch(E){console.error("Failed to load public recipes:",E)}const i=[...e,...t],s=i.length;if(!s){S("No recipes to process");return}if(!confirm(`Regenerate summaries for ${s} recipes using Claude AI? This will overwrite existing summaries.`))return;const r=f("regenSumProgress"),o=f("regenSumBtn");r&&(r.style.display="block",r.textContent=`Regenerating 0 of ${s}…`),o&&(o.disabled=!0);let c=0;for(let E=0;E<i.length;E++){const A=i[E],P=A.title||A.name||"Untitled",$=((l=A.ingredientsRaw)==null?void 0:l.join(", "))||A.ingredients||A.description||"",U=((d=A.stepsRaw)==null?void 0:d.join(". "))||A.steps||"";try{const D=((w=(g=(m=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:200,messages:[{role:"user",content:`Write a 2-sentence summary for this recipe. First sentence: what the dish is. Second sentence: what makes it special or notable. Max 200 characters total. Be concise.

Title: ${P}
Ingredients: ${$.substring(0,500)}
Instructions: ${U.substring(0,500)}`}]})})).json()).content)==null?void 0:m[0])==null?void 0:g.text)==null?void 0:w.trim())||"";if(D){if(t.some(B=>B.id===A.id))await z(`public_recipes/${A.id}`,{...A,summary:D,id:void 0});else{const B=`households/${u.hid}/recipes/${A.id}`;await z(B,{...A,summary:D,id:void 0});const b=u.recs.find(v=>v.id===A.id);b&&(b.summary=D)}c++}}catch(N){console.error("Summary regen failed for:",P,N)}r&&(r.textContent=`Regenerating ${E+1} of ${s}…`),await Hg(300)}r&&(r.textContent=`Done — ${c} summaries updated.`),o&&(o.disabled=!1),S(`${c} summaries regenerated!`)}let fn=0;async function px(){const n=X();if(n)try{const e=await G(`users/${n.uid}`);if(e!=null&&e.onboardingDone)return;mx()}catch{}}function mx(){const n=f("ov-onboarding");n&&(fn=0,n.classList.add("active"),Bg())}function Bg(){const n=f("onboarding-body");if(!n)return;const t=`<div style="display:flex;gap:6px;justify-content:center;margin-bottom:24px">${Array.from({length:4},(i,s)=>`<div style="width:8px;height:8px;border-radius:50%;background:${s===fn?"var(--ac)":"var(--b2)"};transition:background .2s"></div>`).join("")}</div>`;fn===0?n.innerHTML=`${t}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:4rem;margin-bottom:16px">🧺</div>
        <div style="font-family:'Fraunces',serif;font-size:2rem;font-weight:300;color:var(--ac);margin-bottom:12px">Welcome to Kitchen!</div>
        <p style="font-size:.92rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 28px">Your smart kitchen assistant that tracks inventory, plans meals, finds deals, and suggests recipes — all powered by AI.</p>
        <button class="btn bp bf" onclick="onboardNext()">Let's get started →</button>
      </div>`:fn===1?n.innerHTML=`${t}
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;margin-bottom:6px">Set up your kitchen</div>
      <p style="font-size:.82rem;color:var(--mt);margin-bottom:18px;line-height:1.5">These help Claude give you better recipe suggestions.</p>
      <div class="frow"><label class="flbl">Household name</label><input class="fi" id="ob-name" placeholder="e.g. The Smith Family" value="${u.cfg.name||""}"/></div>
      <div class="frow"><label class="flbl">Adults</label><input class="fi" id="ob-adults" placeholder="e.g. Bora, Sarah" value="${u.cfg.adults||""}"/></div>
      <div class="frow"><label class="flbl">Kids</label><input class="fi" id="ob-kids" placeholder="e.g. 1 toddler (age 3)" value="${u.cfg.kids||""}"/></div>
      <div class="frow"><label class="flbl">Favourite cuisines</label><input class="fi" id="ob-cuisines" placeholder="e.g. Italian, Turkish, Mexican" value="${u.cfg.cuisines||""}"/></div>
      <div class="frow"><label class="flbl">Weeknight cook time</label>
        <select class="fsel" id="ob-cooktime">
          <option value="20-30 min"${u.cfg.cookTime==="20-30 min"?" selected":""}>20–30 min</option>
          <option value="30-45 min"${u.cfg.cookTime==="30-45 min"?" selected":""}>30–45 min</option>
          <option value="40-60 min"${u.cfg.cookTime==="40-60 min"?" selected":""}>40–60 min</option>
          <option value="60+ min"${u.cfg.cookTime==="60+ min"?" selected":""}>60+ min</option>
        </select>
      </div>
      <div class="frow"><label class="flbl">Dietary restrictions</label>
        <div style="display:flex;flex-direction:column;gap:10px;margin-top:4px">
          <label style="display:flex;align-items:center;gap:10px;font-size:.88rem;cursor:pointer"><input type="checkbox" id="ob-nopork" ${u.cfg.nopork?"checked":""}/> No pork</label>
          <label style="display:flex;align-items:center;gap:10px;font-size:.88rem;cursor:pointer"><input type="checkbox" id="ob-noshellfish" ${u.cfg.noshellfish?"checked":""}/> No shellfish</label>
          <label style="display:flex;align-items:center;gap:10px;font-size:.88rem;cursor:pointer"><input type="checkbox" id="ob-vegetarian" ${u.cfg.vegetarian?"checked":""}/> Vegetarian</label>
          <label style="display:flex;align-items:center;gap:10px;font-size:.88rem;cursor:pointer"><input type="checkbox" id="ob-glutenfree" ${u.cfg.glutenfree?"checked":""}/> Gluten-free</label>
        </div>
      </div>
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:16px">Continue →</button>`:fn===2?n.innerHTML=`${t}
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
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:20px">Almost done →</button>`:fn===3&&(n.innerHTML=`${t}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:3rem;margin-bottom:16px">🎉</div>
        <div style="font-family:'Fraunces',serif;font-size:1.6rem;font-weight:300;color:var(--ac);margin-bottom:12px">You're all set!</div>
        <p style="font-size:.88rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 24px">Start by adding your first item to the pantry, or ask Claude for dinner ideas.</p>
        <div style="display:flex;flex-direction:column;gap:10px">
          <button class="btn bp bf" onclick="finishOnboarding();showOv('scan')">📷 Scan your first item</button>
          <button class="btn bs bf" onclick="finishOnboarding();showScreen('chat')">✨ Ask Claude for ideas</button>
          <button class="btn bs bf" onclick="finishOnboarding()">🏠 Go to Home</button>
        </div>
      </div>`)}async function gx(){var n,e,t,i,s,r,o,c,l,d,m,g,w;if(fn===1){const E=(e=(n=f("ob-name"))==null?void 0:n.value)==null?void 0:e.trim(),A=(i=(t=f("ob-adults"))==null?void 0:t.value)==null?void 0:i.trim(),P=(r=(s=f("ob-kids"))==null?void 0:s.value)==null?void 0:r.trim(),$=(c=(o=f("ob-cuisines"))==null?void 0:o.value)==null?void 0:c.trim(),U=(l=f("ob-cooktime"))==null?void 0:l.value;E&&(u.cfg.name=E),A&&(u.cfg.adults=A),P&&(u.cfg.kids=P),$&&(u.cfg.cuisines=$),U&&(u.cfg.cookTime=U),u.cfg.nopork=((d=f("ob-nopork"))==null?void 0:d.checked)||!1,u.cfg.noshellfish=((m=f("ob-noshellfish"))==null?void 0:m.checked)||!1,u.cfg.vegetarian=((g=f("ob-vegetarian"))==null?void 0:g.checked)||!1,u.cfg.glutenfree=((w=f("ob-glutenfree"))==null?void 0:w.checked)||!1,await $o()}fn++,Bg()}async function jg(){const n=f("ov-onboarding");n&&n.classList.remove("active");const e=X();if(e)try{const t=await G(`users/${e.uid}`);t&&await z(`users/${e.uid}`,{...t,onboardingDone:!0,id:void 0})}catch{}}async function yx(){await jg(),S("You can always adjust settings later ⚙️")}window.getIdToken=sp;j.renderAll=Ll;j.renderSum=sr;j.renderRecs=Je;j.renderShop=qi;Wk(er);window.showScreen=function(n){var e,t;document.querySelectorAll(".ov.active").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".screen").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".ni").forEach(i=>i.classList.remove("active")),(e=f("screen-"+n))==null||e.classList.add("active"),(t=f("nav-"+n))==null||t.classList.add("active"),n==="home"&&Dl(),n==="inventory"&&er(),n==="recipes"&&(u.rt==="community"?Kl():Je()),n==="shopping"&&qi(),n==="insights"&&tA()};const vx=ct;window.showOv=function(n){vx(n),n==="settings"&&setTimeout(ox,80)};window.hideOv=ge;window.initHome=$l;window.addLowToShop=tS;window.toggleHomeSection=Gk;window.openRecipeMatch=sS;window.showMoreMatches=rS;window.addMissingToShop=oS;window.changeWeek=Qk;window.toggleExp=function(){const n=f("exppanel");n.style.display=n.style.display==="none"?"block":"none"};window.openAdj=pE;window.updL=wE;window.adjQ=_E;window.adjQD=bE;window.adjE=TE;window.adjNote=IE;window.setIT=HE;window.addManual=BE;window.valMA=jE;window.chgMQ=zE;window.selML=qE;window.remItem=vE;window.importDoc=WE;window.adjUnit=EE;window.adjLowThresh=kE;window.adjLowThreshD=SE;window.adjDoNotRestock=CE;window.changeInvUnit=RE;window.changeInvThreshold=AE;window.changeInvThresholdDirect=xE;window.toggleDoNotRestock=$E;window.changeInvLocation=LE;window.changeInvQty=DE;window.changeInvQtyDirect=NE;window.changeInvFrac=ME;window.changeInvThreshFrac=PE;window.changeInvExpiry=OE;window.clearInvExpiry=VE;window.setInvExpiry=UE;window.changeInvNote=FE;window.openInvAddSheet=QE;window.closeInvAddSheet=nr;window.invAddScan=YE;window.invAddVoice=JE;window.setInvAddLoc=XE;window.toggleInvAddNote=ZE;window.qaddInv=ek;window.onInvInput=tk;window.pickInvInlineResult=ok;window.toggleInvVoice=Rm;window.openInvItemDetail=tr;window.closeInvItemDetail=Cm;window.deleteInvItemImage=mE;window.triggerInvPhotoUpload=gE;window.handleInvPhotoSelected=yE;window.addInvToShopping=ck;window.qadd=uk;window.togShop=Ak;window.toggleShNote=xk;window.saveShNote=Pk;window.openShQty=$k;window.adjShQty=Lk;window.saveShQty=Vm;window.togAisle=Dk;window.setSHT=Nk;window.shareList=Mk;window.openAddToKitchen=Ok;window.setAtkLoc=Vk;window.confirmAddToKitchen=Uk;window.buildList=Fk;window.toggleVoice=Pm;window.toggleAddNote=dk;window.openShopAddSheet=hk;window.closeShopAddSheet=ir;window.shopAddScan=fk;window.shopAddVoice=pk;window.closeEnrichSheet=Nm;window.pickEnrichResult=Rk;window.onShopInput=mk;window.pickInlineResult=Dm;window.openItemDetail=Mm;window.closeItemDetail=_k;window.changeShopUnit=bk;window.changeShopQty=Tk;window.changeShopQtyDirect=Ik;window.changeShopFrac=Ek;window.deleteItemImage=kk;window.triggerProductPhotoUpload=Sk;window.handleProductPhotoSelected=Ck;window.bpTog=Hk;window.bpSelAll=Bk;window.bpUpdBtn=function(){};window.bpConfirm=jk;window._bpItems=[];window.searchDeals=zk;window.dealsFromList=qk;window.addDealToList=Fm;window.renderDealsZipBanner=Um;window.clrChk=function(){u.shop.filter(n=>n.checked).forEach(n=>{Om(n.name),Ks(n.id)})};window.setRT=JC;window.togFav=XC;window.valR=ZC;window.importFromUrl=eR;window.setImportMode=tR;window.startBulkImport=sR;window.retryBulkImport=lR;window.saveRec=dR;window.openER=wg;window.updR=hR;window.delER=fR;window.scaleRec=pR;window.whatCanIMake=mR;window.addRecIngToShop=gR;window.setStar=yR;window.togTag=NC;window.recipeTimeChanged=LC;window.markTotalTimeManual=DC;window.selectDifficulty=pg;window.togglePublic=wR;window.loadCommunity=Kl;window.setComCuisine=LR;window.setComSearch=DR;window.setComSort=NR;window.toggleComTag=MR;window.setComTime=OR;window.setComMinRating=VR;window.openComRecipe=To;window.likeComRecipe=BR;window.saveComToKitchen=jR;window.addComComment=zR;window.shareComRecipe=qR;window.submitComReview=UR;window.unpublishComRecipe=HR;window.rateComRecipe=kg;window.clearComRating=FR;window.deleteComComment=KR;window.openReportSheet=JR;window.closeReportSheet=Sg;window.submitComReport=XR;window.loadMoreComments=GR;window.openNotifications=ZR;window.openComRecipeFromNotif=eA;window.openRecipeView=vg;window.handleRecipeBack=or;window.triggerCoverUpload=_R;window.handleCoverSelected=bR;window.handleCoverDrop=TR;window.removeCoverPhoto=IR;window.triggerStepPhotoUpload=ER;window.handleStepPhotoSelected=kR;window.removeStepPhoto=SR;window.openPhotoViewer=CR;window.closePhotoViewer=RR;window.photoViewerNav=bg;window.triggerCommentPhotoUpload=xR;window.handleCommentPhotosSelected=PR;window.removeCommentPhoto=$R;window.setRecSearch=MC;window.setRecSort=OC;window.toggleFilterPanel=VC;window.setRecDifficulty=UC;window.setRecCookTime=FC;window.setRecServes=HC;window.toggleRecProtein=BC;window.toggleRecTag=jC;window.toggleRecTagsExpand=zC;window.clearRecFilters=qC;window.toggleComTagsPanel=GC;window.clearComFilters=KC;window.setViewStar=vR;window.editComRecipe=QR;window.saveComRecipeEdit=YR;window.sendChat=Rg;window.sendPill=aA;window.clrChat=cA;window.ar=Ag;window.importChatRecipe=oA;window.stopLiveScanner=Jl;window.resumeScanner=fA;window.openScanForList=pA;window.openScanForInventory=mA;window.addScannedToList=yA;window.toggleScanNote=gA;window.togManual=vA;window.manLookup=wA;window.selRL=Xl;window.valAdd=bA;window.addToInv=TA;window.chgAQ=IA;window.swipeDelItem=SA;window.swipeAddItem=kA;window.swipeRowTap=CA;window.togShopSelect=RA;window.togInvSelect=AA;window.cancelSelect=Mi;window.deleteSelected=xA;window.openMealM=LA;window.pickRec=DA;window.closeMealM=Zl;window.saveMeal=MA;window.clrMeal=OA;window.openCooked=VA;window.skipCooked=UA;window.saveCooked=FA;window.scheduleRecipe=HA;window.schedSet=BA;window.closeSchedM=NA;window.initRecChips=Ng;window.toggleChip=$A;window.filterRecs=Mg;window._pickedRec=null;window._activeChips=new Set;window.saveSettings=zA;window.saveZipcode=qA;window.toggleNotif=WA;window.testNotif=GA;window.addHousehold=tx;window.switchHousehold=nx;window.removeHousehold=ix;window.setMode=sx;window.showNotif=S;window.copyInviteCode=KA;window.shareInviteCode=QA;window.regenInviteCode=YA;window.removeMemberFromHH=JA;window.transferOwnershipUI=XA;window.leaveHousehold=Vg;window.enrichExistingItems=ax;window.bulkPublishAll=cx;window.regenAllSummaries=fx;window.removeDuplicateCommunityRecipes=ux;window.removeMyCommRecipes=dx;window.removeHouseholdCommRecipes=hx;window.deleteAccount=ex;window.manualRefresh=async function(n){const e=event==null?void 0:event.target;e&&(e.classList.add("spinning"),setTimeout(()=>e.classList.remove("spinning"),600)),ce("syncing");try{(n==="shop"||n==="both")&&(u.shop=await re(`households/${u.hid}/shopping`),qi()),(n==="inv"||n==="both")&&(u.inv=await re(`households/${u.hid}/inventory`),er(),Ll()),ce("synced"),S("Refreshed ✓")}catch(t){console.error("manualRefresh error:",t),ce("error"),S("Refresh failed")}};window.refreshHomeData=async function(){const n=event==null?void 0:event.target;n&&(n.classList.add("spinning"),setTimeout(()=>n.classList.remove("spinning"),600)),ce("syncing");try{const[e,t,i,s]=await Promise.allSettled([re(`households/${u.hid}/inventory`),re(`households/${u.hid}/shopping`),re(`households/${u.hid}/mealplan`),re(`households/${u.hid}/settings`)]);e.status==="fulfilled"&&(u.inv=e.value),t.status==="fulfilled"&&(u.shop=t.value),i.status==="fulfilled"&&(u.mp={},i.value.forEach(r=>{r.meal&&(u.mp[r.id]=r.meal)})),Dl(),er(),ce("synced"),S("Refreshed ✓")}catch(e){console.error("refreshHomeData error:",e),ce("error"),S("Refresh failed")}};window.refreshRecipes=async function(){const n=event==null?void 0:event.target;n&&(n.classList.add("spinning"),setTimeout(()=>n.classList.remove("spinning"),600)),ce("syncing");try{u.rt==="community"?(u.comRecs=await re("public_recipes"),u.comPage=0,ut()):(u.recs=await re(`households/${u.hid}/recipes`),Je()),ce("synced"),S("Refreshed ✓")}catch(e){console.error("refreshRecipes error:",e),ce("error"),S("Refresh failed")}};window.onboardNext=gx;window.finishOnboarding=jg;window.skipOnboarding=yx;window.saveUsername=async function(){var o;const n=f("usernameInput"),e=f("usernameStatus"),t=f("saveUsernameBtn"),i=((n==null?void 0:n.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(i)){e&&(e.textContent="3-20 characters, letters, numbers, and underscores only.",e.style.color="var(--rd)",e.style.display="block");return}if(t&&(t.disabled=!0,t.textContent="Checking…"),!await pp(i)){e&&(e.textContent=`"${i}" is already taken. Try another.`,e.style.color="var(--rd)",e.style.display="block"),t&&(t.disabled=!1,t.textContent="Save");return}const r=X();r&&(await mp(r.uid,i),S("Username set to @"+i)),(o=f("usernameM"))==null||o.classList.remove("active"),t&&(t.disabled=!1,t.textContent="Save")};window.changeUsername=async function(){const n=f("setUsername"),e=((n==null?void 0:n.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(e)){S("3-20 chars, letters/numbers/underscores only");return}if(e===u.username){S("Username unchanged");return}if(!await pp(e)){S(`"${e}" is already taken`);return}const i=X();i&&(await mp(i.uid,e),S("Username changed to @"+e))};window._appStart=async function(n){u.hid=n;const e=X();if(e)try{const i=await G(`users/${e.uid}`);if((i==null?void 0:i.needsHousehold)===!0){S("You need to join or create a household"),localStorage.removeItem("ks-h"),localStorage.removeItem("ks-hhs"),location.reload();return}if(u.hid&&!await G(`households/${u.hid}`)){console.warn(`[_appStart] Household ${u.hid} no longer exists`),await z(`users/${e.uid}`,{...i,householdIds:[],needsHousehold:!0,onboardingDone:!1,id:void 0}),localStorage.removeItem("ks-h"),localStorage.removeItem("ks-hhs"),location.reload();return}}catch(i){console.warn("[_appStart] needsHousehold check failed:",i)}if(e&&!await up(u.hid,e.uid)){ZA();return}f("LS").style.display="none",f("APP").style.display="flex",window.showScreen("home"),ce("syncing");const t=X();if(t)try{const i=await G(`users/${t.uid}`),s=i!=null&&i.householdId?[i.householdId]:(i==null?void 0:i.householdIds)||[];if(s.length){const r=[...s];r.includes(n)||r.push(n),Ne("ks-hhs",r)}else{const r=le("ks-hhs")||[n];r.includes(n)||(r.push(n),Ne("ks-hhs",r))}}catch{const i=le("ks-hhs")||[n];i.includes(n)||(i.push(n),Ne("ks-hhs",i))}else{const i=le("ks-hhs")||[n];i.includes(n)||(i.push(n),Ne("ks-hhs",i))}await Ub(),jA(),$l(),lk(),ak(),hE(u.hid);try{ce("syncing");const i=await Promise.allSettled([re(`households/${u.hid}/inventory`),re(`households/${u.hid}/recipes`),re(`households/${u.hid}/shopping`)]),s=(r,o)=>r.status==="fulfilled"?r.value:o;u.inv=s(i[0],u.inv),u.recs=s(i[1],u.recs),u.shop=s(i[2],u.shop),ce("synced"),Ll(),Je(),qi(),sr()}catch(i){console.error("initial load error",i),ce("error")}if(t){const i=await qb(t.uid);u.username=i;const s=f("setUsername");s&&(s.value=i||""),i||setTimeout(()=>{var r;return(r=f("usernameM"))==null?void 0:r.classList.add("active")},600)}setTimeout(Cg,800),setTimeout(px,500)};rx();EA();u.cfg.notif&&setTimeout(Og,3e3);qi();function Jo(n){f("auth-loading").style.display="none",f("auth-signin").style.display=n==="signin"?"flex":"none",f("auth-signup").style.display=n==="signup"?"flex":"none",f("auth-join").style.display=n==="join"?"flex":"none",f("authError").style.display="none",f("signupError").style.display="none"}function ft(n,e){const t=f(n);t&&(t.textContent=e,t.style.display="block")}function Xo(n){return{"auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password.","auth/invalid-credential":"Incorrect email or password.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password must be at least 6 characters.","auth/too-many-requests":"Too many attempts. Please try again later.","auth/popup-closed-by-user":"Sign-in popup was closed.","auth/cancelled-popup-request":"Sign-in was cancelled.","auth/account-exists-with-different-credential":"An account already exists with this email using a different sign-in method."}[n.code]||n.message||"Something went wrong. Please try again."}function Ze(n,e){n&&(e?(n._origText=n.textContent,n.textContent="Please wait…",n.disabled=!0):(n.textContent=n._origText||n.textContent,n.disabled=!1))}var Yh;(Yh=f("btnGoogle"))==null||Yh.addEventListener("click",async()=>{const n=f("btnGoogle");Ze(n,!0),f("authError").style.display="none";try{await Sb()}catch(e){ft("authError",Xo(e))}Ze(n,!1)});var Jh;(Jh=f("btnApple"))==null||Jh.addEventListener("click",async()=>{const n=f("btnApple");Ze(n,!0),f("authError").style.display="none";try{await Cb()}catch(e){ft("authError",Xo(e))}Ze(n,!1)});var Xh;(Xh=f("btnEmailSign"))==null||Xh.addEventListener("click",async()=>{var i,s,r;const n=(s=(i=f("authEmail"))==null?void 0:i.value)==null?void 0:s.trim(),e=(r=f("authPass"))==null?void 0:r.value;if(!n||!e){ft("authError","Please enter your email and password.");return}const t=f("btnEmailSign");Ze(t,!0),f("authError").style.display="none";try{await Rb(n,e)}catch(o){ft("authError",Xo(o))}Ze(t,!1)});var Zh;(Zh=f("btnEmailSignup"))==null||Zh.addEventListener("click",async()=>{var s,r,o,c,l;const n=(r=(s=f("signupName"))==null?void 0:s.value)==null?void 0:r.trim(),e=(c=(o=f("signupEmail"))==null?void 0:o.value)==null?void 0:c.trim(),t=(l=f("signupPass"))==null?void 0:l.value;if(!n){ft("signupError","Please enter your name.");return}if(!e||!t){ft("signupError","Please enter your email and password.");return}const i=f("btnEmailSignup");Ze(i,!0),f("signupError").style.display="none";try{await Ab(e,t,n)}catch(d){ft("signupError",Xo(d))}Ze(i,!1)});var ef;(ef=f("btnToggleSignup"))==null||ef.addEventListener("click",()=>Jo("signup"));var tf;(tf=f("btnToggleSignin"))==null||tf.addEventListener("click",()=>Jo("signin"));var nf;(nf=f("authPass"))==null||nf.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=f("btnEmailSign"))==null||e.click())});var sf;(sf=f("signupPass"))==null||sf.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=f("btnEmailSignup"))==null||e.click())});window.doSignOut=async function(){confirm("Sign out of Kitchen?")&&await xb()};let Wa=!1;function Zr(n){localStorage.setItem("ks-h",n),f("LS").style.display="none",f("APP").style.display="flex",window._appStart(n)}function Ga(n){Jo("join"),f("btnCreateKitchen").onclick=async()=>{var e;Ze(f("btnCreateKitchen"),!0);try{const t=await G(`users/${n.uid}`),i=t!=null&&t.householdId?[t.householdId]:(t==null?void 0:t.householdIds)||[];if(i.length)for(const o of i){const c=await G(`households/${o}`);if(c&&(c.memberUids||[]).includes(n.uid)){console.log(`[_showJoinScreen] User already belongs to household ${o}, using that`),Zr(o);return}}const s=((e=u.cfg)==null?void 0:e.name)||"My Kitchen";if(await op(n.uid,s),t)await z(`users/${n.uid}`,{...t,householdIds:[n.uid],needsHousehold:!1,id:void 0});else{const o=await sc(n);o.householdIds=[n.uid],o.needsHousehold=!1,await z(`users/${n.uid}`,o)}localStorage.removeItem("ks-h");const r=le("ks-hhs");if(r){const o=r.filter(c=>c!==n.uid);o.push(n.uid),localStorage.setItem("ks-hhs",JSON.stringify(o))}Zr(n.uid)}catch(t){console.error("Create kitchen error:",t),ft("joinError","Something went wrong. Please try again."),Ze(f("btnCreateKitchen"),!1)}},f("btnJoinKitchen").onclick=async()=>{var t,i,s;const e=(s=(i=(t=f("joinCode"))==null?void 0:t.value)==null?void 0:i.trim())==null?void 0:s.toUpperCase();if(!e){ft("joinError","Please enter an invite code.");return}Ze(f("btnJoinKitchen"),!0),f("joinError").style.display="none";try{let r=await G(`users/${n.uid}`);r||(r=await sc(n));const o=await ap(e,n);if(!o){ft("joinError","Invalid invite code. Check and try again."),Ze(f("btnJoinKitchen"),!1);return}const c=le("ks-hhs")||[];c.includes(o)||c.push(o),Ne("ks-hhs",c),Zr(o)}catch(r){console.error("Join kitchen error:",r),ft("joinError","Something went wrong. Please try again."),Ze(f("btnJoinKitchen"),!1)}}}Eb(async n=>{var e;if(n){if(localStorage.setItem("ks-who",n.displayName||((e=n.email)==null?void 0:e.split("@")[0])||"You"),!Wa){Wa=!0;try{const t=await G(`users/${n.uid}`),i=localStorage.getItem("ks-h"),s=le("ks-hhs");if(!!t||!!i||s&&s.length>0){const o=await Ob(n);o?(f("LS").style.display="none",f("APP").style.display="flex",Zr(o)):(console.warn("[onAuth] resolveHousehold returned null — showing join screen"),Ga(n))}else Ga(n)}catch(t){console.error("Failed to resolve household:",t),console.warn("[onAuth] Error during household resolution — showing join screen"),Ga(n)}}}else Em(),Wa=!1,f("APP").style.display="none",f("LS").style.display="flex",Jo("signin")});
