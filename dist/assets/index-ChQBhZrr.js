(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Yr={name:"The Bora Family",adults:"Bora",kids:"1 toddler (age 3)",nopork:!0,noshellfish:!1,vegetarian:!1,glutenfree:!1,other:"",cuisines:"Bangladeshi, Turkish, Mediterranean, American",cookTime:"40-60 min",zipcode:""},d={hid:null,inv:[],recs:[],shop:[],mp:{},cfg:{...Yr},cookLog:[],wasteLog:[],activity:[],chat:[],cp:null,selR:"fridge",maL:"fridge",adjId:null,it:"all",rt:"all",recSearch:"",recSort:"az",recFilters:{tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[]},md:null,cn:"",nr:0,eid:null,scanDestList:!1,aisleMode:!1,selectMode:null,selectedIds:new Set,username:null,comRecs:[],comTab:"browse",comSearch:"",comCuisine:"all",comSort:"newest",comTags:[],comTime:"any",comMinRating:0,comPage:0,myLikes:new Set};function ae(n){try{return JSON.parse(localStorage.getItem(n))}catch{return null}}function Me(n,e){localStorage.setItem(n,JSON.stringify(e))}const xc=[{value:0,label:"None"},{value:.25,label:"¼"},{value:1/3,label:"⅓"},{value:.5,label:"½"},{value:2/3,label:"⅔"},{value:.75,label:"¾"}];function Xr(n){const e=Number(n)||0,t=Math.floor(e),i=e-t,s=xc.reduce((r,o)=>Math.abs(o.value-i)<Math.abs(r-i)?o.value:r,0);return{whole:t,frac:s}}function _n(n,e){const t=Math.max(0,Math.min(99,Math.floor(Number(n)||0))),i=Number(e)||0,s=t+i;return s<=0?.25:s}function Io(n){const{whole:e,frac:t}=Xr(n),i=t>0?(xc.find(s=>Math.abs(s.value-t)<.01)||{}).label:"";return e===0&&i?i:e>0&&i?`${e} ${i}`:`${e||1}`}function Ei(n,e){return`${Io(n)} ${e||"Unit"}`}function za(n,e){const t=xc.map(i=>{const s=Math.abs(i.value-e)<.01?" selected":"";return`<option value="${i.value}"${s}>${i.label}</option>`}).join("");return`<select class="frac-select" id="${n}">${t}</select>`}function Ae(n){return n?n.replace(/\w\S*/g,e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()):""}function h(n){return document.getElementById(n)}function dn(){return new Date().toISOString().split("T")[0]}function Ni(){const n=new Date;n.setHours(0,0,0,0);const e=new Date(n);return e.setDate(n.getDate()-n.getDay()),Array.from({length:7},(t,i)=>{const s=new Date(e);return s.setDate(e.getDate()+i),s})}function Py(){const n=new Date;return n.setDate(n.getDate()+1),n.toISOString().split("T")[0]}function xt(n){if(!n)return null;const e=new Date;e.setHours(0,0,0,0);const t=new Date(n+"T00:00:00"),i=Math.round((t-e)/864e5);return i<0?{c:"expired",l:"Expired"}:i===0?{c:"expiring",l:"Expires today"}:i<=7?{c:"expiring",l:`Expires in ${i}d`}:{c:"ok",l:t.toLocaleDateString("en-US",{month:"short",day:"numeric"})}}function sf(n){return{fridge:"🌡 Fridge",freezer:"🧊 Freezer",pantry:"🥫 Pantry",household:"🏠 Household"}[n]||n}const rf={Produce:"🥦",Proteins:"🍗",Dairy:"🧀",Grains:"🌾",Condiments:"🧴",Snacks:"🍿",Beverages:"🥤",Frozen:"❄️",General:"📦",Imported:"📥"};function Mi(n){const e=(n.name||"").toLowerCase(),t=(n.category||"").toLowerCase();return t.includes("produce")||t.includes("vegetable")||t.includes("fruit")||e.match(/apple|banana|broccoli|carrot|celery|cabbage|tomato|onion|garlic|jalap|spinach|mushroom|squash|lettuce|cucumber|pepper/)?"Produce":t.includes("protein")||t.includes("meat")||t.includes("seafood")||t.includes("poultry")||e.match(/chicken|beef|lamb|turkey|salmon|cod|tuna|fish|steak|pork|shrimp/)?"Proteins":t.includes("dairy")||t.includes("egg")||e.match(/egg|butter|cheese|milk|cream|yogurt|ghee/)?"Dairy":t.includes("grain")||t.includes("bread")||t.includes("pasta")||e.match(/rice|pasta|bread|flour|oat|cereal|grain|noodle|tortilla/)?"Grains":t.includes("condiment")||t.includes("sauce")||e.match(/sauce|ketchup|mustard|oil|vinegar|salt|pepper|spice|herb|seasoning|mayo/)?"Condiments":n.location==="freezer"?"Frozen":"General"}function $y(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/^[-•]\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/\n/g,"<br>")}let ba=null;function R(n){const e=h("notif");e&&(e.textContent=n,e.style.display="block",e.style.animation="none",e.offsetWidth,e.style.animation="fn 2.5s ease forwards",ba&&clearTimeout(ba),ba=setTimeout(()=>e.style.display="none",2500))}function at(n){var e;(e=h("ov-"+n))==null||e.classList.add("active")}function Ee(n){var e;(e=h("ov-"+n))==null||e.classList.remove("active")}function xs(n,e){const t=h(n);t&&t.querySelectorAll(".star").forEach((i,s)=>{i.textContent=s<e?"★":"☆",i.classList.toggle("on",s<e)})}function Pc(n){const e=n.toLowerCase();return/frozen|ice cream|pizza|nugget|waffle|tater|edamame|popsicle/.test(e)?"freezer":/milk|cheese|yogurt|butter|cream|egg|meat|chicken|beef|pork|fish|salmon|shrimp|tofu|deli|bacon|sausage|produce|lettuce|spinach|berry|berries|fruit|vegetable|carrot|broccoli|juice/.test(e)?"fridge":"pantry"}const Ly={Produce:["apple","banana","carrot","celery","onion","garlic","tomato","lettuce","cucumber","pepper","broccoli","spinach","mushroom","lemon","lime","herb","cabbage","squash","jalap","avocado","potato","ginger"],"Meat & Fish":["chicken","beef","lamb","turkey","salmon","cod","tuna","fish","steak","shrimp","pork","bacon","sausage","ground"],"Dairy & Eggs":["egg","butter","cheese","milk","cream","yogurt","ghee","kefir"],Frozen:["frozen","ice cream","pizza","nugget","waffle","edamame","okra","lima","broccoli floret"],Pantry:["rice","pasta","flour","oil","vinegar","sauce","spice","salt","pepper","sugar","honey","oat","bread","can","bean","lentil","chickpea","stock","broth"],"Snacks & Drinks":["chip","cracker","cookie","juice","soda","water","tea","coffee","snack","nut","seed"]};function Dy(n){const e=n.toLowerCase();for(const[t,i]of Object.entries(Ly))if(i.some(s=>e.includes(s)))return t;return"Other"}const Ny=()=>{};var id={};/**
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
 */const of=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},My=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|c&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},af={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,f=l?n[s+2]:0,m=r>>2,y=(r&3)<<4|c>>4;let w=(c&15)<<2|f>>6,E=f&63;l||(E=64,o||(w=64)),i.push(t[m],t[y],t[w],t[E])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(of(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):My(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const f=s<n.length?t[n.charAt(s)]:64;++s;const y=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||c==null||f==null||y==null)throw new Oy;const w=r<<2|c>>4;if(i.push(w),f!==64){const E=c<<4&240|f>>2;if(i.push(E),y!==64){const A=f<<6&192|y;i.push(A)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Oy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vy=function(n){const e=of(n);return af.encodeByteArray(e,!0)},Zr=function(n){return Vy(n).replace(/\./g,"")},cf=function(n){try{return af.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Uy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Fy=()=>Uy().__FIREBASE_DEFAULTS__,By=()=>{if(typeof process>"u"||typeof id>"u")return;const n=id.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Hy=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&cf(n[1]);return e&&JSON.parse(e)},Eo=()=>{try{return Ny()||Fy()||By()||Hy()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},lf=n=>{var e,t;return(t=(e=Eo())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},uf=n=>{const e=lf(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},df=()=>{var n;return(n=Eo())==null?void 0:n.config},hf=n=>{var e;return(e=Eo())==null?void 0:e[`_${n}`]};/**
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
 */class jy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Rn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function $c(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function ff(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Zr(JSON.stringify(t)),Zr(JSON.stringify(o)),""].join(".")}const ws={};function zy(){const n={prod:[],emulator:[]};for(const e of Object.keys(ws))ws[e]?n.emulator.push(e):n.prod.push(e);return n}function qy(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let sd=!1;function Lc(n,e){if(typeof window>"u"||typeof document>"u"||!Rn(window.location.host)||ws[n]===e||ws[n]||sd)return;ws[n]=e;function t(w){return`__firebase__banner__${w}`}const i="__firebase__banner",r=zy().prod.length>0;function o(){const w=document.getElementById(i);w&&w.remove()}function c(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function l(w,E){w.setAttribute("width","24"),w.setAttribute("id",E),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function f(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{sd=!0,o()},w}function m(w,E){w.setAttribute("id",E),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function y(){const w=qy(i),E=t("text"),A=document.getElementById(E)||document.createElement("span"),P=t("learnmore"),$=document.getElementById(P)||document.createElement("a"),U=t("preprendIcon"),N=document.getElementById(U)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const M=w.element;c(M),m($,P);const D=f();l(N,U),M.append(N,A,$,D),document.body.appendChild(M)}r?(A.innerText="Preview backend disconnected.",N.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function Gy(){var e;const n=(e=Eo())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ky(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Qy(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Jy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yy(){const n=je();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Xy(){return!Gy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Zy(){try{return typeof indexedDB=="object"}catch{return!1}}function ev(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const tv="FirebaseError";class Lt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=tv,Object.setPrototypeOf(this,Lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fs.prototype.create)}}class Fs{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?nv(r,i):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Lt(s,c,i)}}function nv(n,e){return n.replace(iv,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const iv=/\{\$([^}]+)}/g;function sv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Gn(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(rd(r)&&rd(o)){if(!Gn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function rd(n){return n!==null&&typeof n=="object"}/**
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
 */function Bs(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function hs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function fs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function rv(n,e){const t=new ov(n,e);return t.subscribe.bind(t)}class ov{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");av(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Ta),s.error===void 0&&(s.error=Ta),s.complete===void 0&&(s.complete=Ta);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function av(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ta(){}/**
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
 */function De(n){return n&&n._delegate?n._delegate:n}class bn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const On="[DEFAULT]";/**
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
 */class cv{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new jy;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uv(e))try{this.getOrInitializeService({instanceIdentifier:On})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=On){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=On){return this.instances.has(e)}getOptions(e=On){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(r);i===c&&o.resolve(s)}return s}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:lv(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=On){return this.component?this.component.multipleInstances?e:On:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lv(n){return n===On?void 0:n}function uv(n){return n.instantiationMode==="EAGER"}/**
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
 */class dv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new cv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var X;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(X||(X={}));const hv={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},fv=X.INFO,pv={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},mv=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=pv[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dc{constructor(e){this.name=e,this._logLevel=fv,this._logHandler=mv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const gv=(n,e)=>e.some(t=>n instanceof t);let od,ad;function yv(){return od||(od=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vv(){return ad||(ad=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pf=new WeakMap,qa=new WeakMap,mf=new WeakMap,Ia=new WeakMap,Nc=new WeakMap;function wv(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(pn(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&pf.set(t,n)}).catch(()=>{}),Nc.set(e,n),e}function _v(n){if(qa.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});qa.set(n,e)}let Wa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return qa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||mf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return pn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function bv(n){Wa=n(Wa)}function Tv(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Ea(this),e,...t);return mf.set(i,e.sort?e.sort():[e]),pn(i)}:vv().includes(n)?function(...e){return n.apply(Ea(this),e),pn(pf.get(this))}:function(...e){return pn(n.apply(Ea(this),e))}}function Iv(n){return typeof n=="function"?Tv(n):(n instanceof IDBTransaction&&_v(n),gv(n,yv())?new Proxy(n,Wa):n)}function pn(n){if(n instanceof IDBRequest)return wv(n);if(Ia.has(n))return Ia.get(n);const e=Iv(n);return e!==n&&(Ia.set(n,e),Nc.set(e,n)),e}const Ea=n=>Nc.get(n);function Ev(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),c=pn(o);return i&&o.addEventListener("upgradeneeded",l=>{i(pn(o.result),l.oldVersion,l.newVersion,pn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const kv=["get","getKey","getAll","getAllKeys","count"],Sv=["put","add","delete","clear"],ka=new Map;function cd(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ka.get(e))return ka.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Sv.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||kv.includes(t)))return;const r=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let f=l.store;return i&&(f=f.index(c.shift())),(await Promise.all([f[t](...c),s&&l.done]))[0]};return ka.set(e,r),r}bv(n=>({...n,get:(e,t,i)=>cd(e,t)||n.get(e,t,i),has:(e,t)=>!!cd(e,t)||n.has(e,t)}));/**
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
 */class Cv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Av(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Av(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ga="@firebase/app",ld="0.14.9";/**
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
 */const Bt=new Dc("@firebase/app"),Rv="@firebase/app-compat",xv="@firebase/analytics-compat",Pv="@firebase/analytics",$v="@firebase/app-check-compat",Lv="@firebase/app-check",Dv="@firebase/auth",Nv="@firebase/auth-compat",Mv="@firebase/database",Ov="@firebase/data-connect",Vv="@firebase/database-compat",Uv="@firebase/functions",Fv="@firebase/functions-compat",Bv="@firebase/installations",Hv="@firebase/installations-compat",jv="@firebase/messaging",zv="@firebase/messaging-compat",qv="@firebase/performance",Wv="@firebase/performance-compat",Gv="@firebase/remote-config",Kv="@firebase/remote-config-compat",Qv="@firebase/storage",Jv="@firebase/storage-compat",Yv="@firebase/firestore",Xv="@firebase/ai",Zv="@firebase/firestore-compat",ew="firebase",tw="12.10.0";/**
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
 */const Ka="[DEFAULT]",nw={[Ga]:"fire-core",[Rv]:"fire-core-compat",[Pv]:"fire-analytics",[xv]:"fire-analytics-compat",[Lv]:"fire-app-check",[$v]:"fire-app-check-compat",[Dv]:"fire-auth",[Nv]:"fire-auth-compat",[Mv]:"fire-rtdb",[Ov]:"fire-data-connect",[Vv]:"fire-rtdb-compat",[Uv]:"fire-fn",[Fv]:"fire-fn-compat",[Bv]:"fire-iid",[Hv]:"fire-iid-compat",[jv]:"fire-fcm",[zv]:"fire-fcm-compat",[qv]:"fire-perf",[Wv]:"fire-perf-compat",[Gv]:"fire-rc",[Kv]:"fire-rc-compat",[Qv]:"fire-gcs",[Jv]:"fire-gcs-compat",[Yv]:"fire-fst",[Zv]:"fire-fst-compat",[Xv]:"fire-vertex","fire-js":"fire-js",[ew]:"fire-js-all"};/**
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
 */const eo=new Map,iw=new Map,Qa=new Map;function ud(n,e){try{n.container.addComponent(e)}catch(t){Bt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Kn(n){const e=n.name;if(Qa.has(e))return Bt.debug(`There were multiple attempts to register component ${e}.`),!1;Qa.set(e,n);for(const t of eo.values())ud(t,n);for(const t of iw.values())ud(t,n);return!0}function ko(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ge(n){return n==null?!1:n.settings!==void 0}/**
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
 */const sw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mn=new Fs("app","Firebase",sw);/**
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
 */class rw{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mn.create("app-deleted",{appName:this._name})}}/**
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
 */const Zn=tw;function gf(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:Ka,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw mn.create("bad-app-name",{appName:String(s)});if(t||(t=df()),!t)throw mn.create("no-options");const r=eo.get(s);if(r){if(Gn(t,r.options)&&Gn(i,r.config))return r;throw mn.create("duplicate-app",{appName:s})}const o=new dv(s);for(const l of Qa.values())o.addComponent(l);const c=new rw(t,i,o);return eo.set(s,c),c}function Mc(n=Ka){const e=eo.get(n);if(!e&&n===Ka&&df())return gf();if(!e)throw mn.create("no-app",{appName:n});return e}function kt(n,e,t){let i=nw[n]??n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),r=e.match(/\s|\//);if(s||r){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bt.warn(o.join(" "));return}Kn(new bn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ow="firebase-heartbeat-database",aw=1,Ps="firebase-heartbeat-store";let Sa=null;function yf(){return Sa||(Sa=Ev(ow,aw,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ps)}catch(t){console.warn(t)}}}}).catch(n=>{throw mn.create("idb-open",{originalErrorMessage:n.message})})),Sa}async function cw(n){try{const t=(await yf()).transaction(Ps),i=await t.objectStore(Ps).get(vf(n));return await t.done,i}catch(e){if(e instanceof Lt)Bt.warn(e.message);else{const t=mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Bt.warn(t.message)}}}async function dd(n,e){try{const i=(await yf()).transaction(Ps,"readwrite");await i.objectStore(Ps).put(e,vf(n)),await i.done}catch(t){if(t instanceof Lt)Bt.warn(t.message);else{const i=mn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Bt.warn(i.message)}}}function vf(n){return`${n.name}!${n.options.appId}`}/**
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
 */const lw=1024,uw=30;class dw{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new fw(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=hd();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>uw){const o=pw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Bt.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=hd(),{heartbeatsToSend:i,unsentEntries:s}=hw(this._heartbeatsCache.heartbeats),r=Zr(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Bt.warn(t),""}}}function hd(){return new Date().toISOString().substring(0,10)}function hw(n,e=lw){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),fd(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),fd(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class fw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zy()?ev().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await cw(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return dd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return dd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function fd(n){return Zr(JSON.stringify({version:2,heartbeats:n})).length}function pw(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function mw(n){Kn(new bn("platform-logger",e=>new Cv(e),"PRIVATE")),Kn(new bn("heartbeat",e=>new dw(e),"PRIVATE")),kt(Ga,ld,n),kt(Ga,ld,"esm2020"),kt("fire-js","")}mw("");var gw="firebase",yw="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kt(gw,yw,"app");function wf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vw=wf,_f=new Fs("auth","Firebase",wf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to=new Dc("@firebase/auth");function ww(n,...e){to.logLevel<=X.WARN&&to.warn(`Auth (${Zn}): ${n}`,...e)}function Dr(n,...e){to.logLevel<=X.ERROR&&to.error(`Auth (${Zn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(n,...e){throw Vc(n,...e)}function dt(n,...e){return Vc(n,...e)}function Oc(n,e,t){const i={...vw(),[e]:t};return new Fs("auth","Firebase",i).create(e,{appName:n.name})}function St(n){return Oc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function bf(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&rt(n,"argument-error"),Oc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Vc(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return _f.create(n,...e)}function q(n,e,...t){if(!n)throw Vc(e,...t)}function Vt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Dr(e),new Error(e)}function Ht(n,e){n||Vt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function _w(){return pd()==="http:"||pd()==="https:"}function pd(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_w()||Qy()||"connection"in navigator)?navigator.onLine:!0}function Tw(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ht(t>e,"Short delay should be less than long delay!"),this.isMobile=Wy()||Jy()}get(){return bw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(n,e){Ht(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],kw=new Hs(3e4,6e4);function xn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function qt(n,e,t,i,s={}){return If(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const c=Bs({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const f={method:e,headers:l,...r};return Ky()||(f.referrerPolicy="no-referrer"),n.emulatorConfig&&Rn(n.emulatorConfig.host)&&(f.credentials="include"),Tf.fetch()(await Ef(n,n.config.apiHost,t,c),f)})}async function If(n,e,t){n._canInitEmulator=!1;const i={...Iw,...e};try{const s=new Cw(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw _r(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const c=r.ok?o.errorMessage:o.error.message,[l,f]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw _r(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw _r(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw _r(n,"user-disabled",o);const m=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Oc(n,m,f);rt(n,m)}}catch(s){if(s instanceof Lt)throw s;rt(n,"network-request-failed",{message:String(s)})}}async function js(n,e,t,i,s={}){const r=await qt(n,e,t,i,s);return"mfaPendingCredential"in r&&rt(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function Ef(n,e,t,i){const s=`${e}${t}?${i}`,r=n,o=r.config.emulator?Uc(n.config,s):`${n.config.apiScheme}://${s}`;return Ew.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function Sw(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Cw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(dt(this.auth,"network-request-failed")),kw.get())})}}function _r(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=dt(n,e,i);return s.customData._tokenResponse=t,s}function md(n){return n!==void 0&&n.enterprise!==void 0}class Aw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Sw(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Rw(n,e){return qt(n,"GET","/v2/recaptchaConfig",xn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xw(n,e){return qt(n,"POST","/v1/accounts:delete",e)}async function no(n,e){return qt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Pw(n,e=!1){const t=De(n),i=await t.getIdToken(e),s=Fc(i);q(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:_s(Ca(s.auth_time)),issuedAtTime:_s(Ca(s.iat)),expirationTime:_s(Ca(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ca(n){return Number(n)*1e3}function Fc(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Dr("JWT malformed, contained fewer than 3 sections"),null;try{const s=cf(t);return s?JSON.parse(s):(Dr("Failed to decode base64 JWT payload"),null)}catch(s){return Dr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function gd(n){const e=Fc(n);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ki(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Lt&&$w(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function $w({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=_s(this.lastLoginAt),this.creationTime=_s(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function io(n){var y;const e=n.auth,t=await n.getIdToken(),i=await ki(n,no(e,{idToken:t}));q(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const r=(y=s.providerUserInfo)!=null&&y.length?kf(s.providerUserInfo):[],o=Nw(n.providerData,r),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),f=c?l:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ya(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function Dw(n){const e=De(n);await io(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Nw(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function kf(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mw(n,e){const t=await If(n,{},async()=>{const i=Bs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=await Ef(n,s,"/v1/token",`key=${r}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:i};return n.emulatorConfig&&Rn(n.emulatorConfig.host)&&(l.credentials="include"),Tf.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Ow(n,e){return qt(n,"POST","/v2/accounts:revokeToken",xn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){q(e.length!==0,"internal-error");const t=gd(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Mw(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new hi;return i&&(q(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(q(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hi,this.toJSON())}_performRefresh(){return Vt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(n,e){q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class lt{constructor({uid:e,auth:t,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new Lw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ya(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ki(this,this.stsTokenManager.getToken(this.auth,e));return q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Pw(this,e)}reload(){return Dw(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new lt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await io(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ge(this.auth.app))return Promise.reject(St(this.auth));const e=await this.getIdToken();return await ki(this,xw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,s=t.email??void 0,r=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,f=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:y,emailVerified:w,isAnonymous:E,providerData:A,stsTokenManager:P}=t;q(y&&P,e,"internal-error");const $=hi.fromJSON(this.name,P);q(typeof y=="string",e,"internal-error"),Xt(i,e.name),Xt(s,e.name),q(typeof w=="boolean",e,"internal-error"),q(typeof E=="boolean",e,"internal-error"),Xt(r,e.name),Xt(o,e.name),Xt(c,e.name),Xt(l,e.name),Xt(f,e.name),Xt(m,e.name);const U=new lt({uid:y,auth:e,email:s,emailVerified:w,displayName:i,isAnonymous:E,photoURL:o,phoneNumber:r,tenantId:c,stsTokenManager:$,createdAt:f,lastLoginAt:m});return A&&Array.isArray(A)&&(U.providerData=A.map(N=>({...N}))),l&&(U._redirectEventId=l),U}static async _fromIdTokenResponse(e,t,i=!1){const s=new hi;s.updateFromServerResponse(t);const r=new lt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await io(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];q(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?kf(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),c=new hi;c.updateFromIdToken(i);const l=new lt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Ya(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,f),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd=new Map;function Ut(n){Ht(n instanceof Function,"Expected a class definition");let e=yd.get(n);return e?(Ht(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,yd.set(n,e),e)}/**
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
 */class Sf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Sf.type="NONE";const vd=Sf;/**
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
 */function Nr(n,e,t){return`firebase:${n}:${e}:${t}`}class fi{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Nr(this.userKey,s.apiKey,r),this.fullPersistenceKey=Nr("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await no(this.auth,{idToken:e}).catch(()=>{});return t?lt._fromGetAccountInfoResponse(this.auth,t,e):null}return lt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new fi(Ut(vd),e,i);const s=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let r=s[0]||Ut(vd);const o=Nr(i,e.config.apiKey,e.name);let c=null;for(const f of t)try{const m=await f._get(o);if(m){let y;if(typeof m=="string"){const w=await no(e,{idToken:m}).catch(()=>{});if(!w)break;y=await lt._fromGetAccountInfoResponse(e,w,m)}else y=lt._fromJSON(e,m);f!==r&&(c=y),r=f;break}}catch{}const l=s.filter(f=>f._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new fi(r,e,i):(r=l[0],c&&await r._set(o,c.toJSON()),await Promise.all(t.map(async f=>{if(f!==r)try{await f._remove(o)}catch{}})),new fi(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($f(e))return"Blackberry";if(Lf(e))return"Webos";if(Af(e))return"Safari";if((e.includes("chrome/")||Rf(e))&&!e.includes("edge/"))return"Chrome";if(Pf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Cf(n=je()){return/firefox\//i.test(n)}function Af(n=je()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Rf(n=je()){return/crios\//i.test(n)}function xf(n=je()){return/iemobile/i.test(n)}function Pf(n=je()){return/android/i.test(n)}function $f(n=je()){return/blackberry/i.test(n)}function Lf(n=je()){return/webos/i.test(n)}function Bc(n=je()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Vw(n=je()){var e;return Bc(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Uw(){return Yy()&&document.documentMode===10}function Df(n=je()){return Bc(n)||Pf(n)||Lf(n)||$f(n)||/windows phone/i.test(n)||xf(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(n,e=[]){let t;switch(n){case"Browser":t=wd(je());break;case"Worker":t=`${wd(je())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Zn}/${i}`}/**
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
 */class Fw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,c)=>{try{const l=e(r);o(l)}catch(l){c(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function Bw(n,e={}){return qt(n,"GET","/v2/passwordPolicy",xn(n,e))}/**
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
 */const Hw=6;class jw{constructor(e){var i;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Hw,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _d(this),this.idTokenSubscription=new _d(this),this.beforeStateQueue=new Fw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_f,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ut(t)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await fi.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await no(this,{idToken:e}),i=await lt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(Ge(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await io(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Tw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ge(this.app))return Promise.reject(St(this));const t=e?De(e):null;return t&&q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ge(this.app)?Promise.reject(St(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ge(this.app)?Promise.reject(St(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ut(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Bw(this),t=new jw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Fs("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Ow(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ut(e)||this._popupRedirectResolver;q(t,this,"argument-error"),this.redirectPersistenceManager=await fi.create(this,[Ut(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(c,this,"internal-error"),c.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;if(Ge(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&ww(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Dt(n){return De(n)}class _d{constructor(e){this.auth=e,this.observer=null,this.addObserver=rv(t=>this.observer=t)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let So={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qw(n){So=n}function Mf(n){return So.loadJS(n)}function Ww(){return So.recaptchaEnterpriseScript}function Gw(){return So.gapiScript}function Kw(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Qw{constructor(){this.enterprise=new Jw}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Jw{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Yw="recaptcha-enterprise",Of="NO_RECAPTCHA";class Xw{constructor(e){this.type=Yw,this.auth=Dt(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,c)=>{Rw(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const f=new Aw(l);return r.tenantId==null?r._agentRecaptchaConfig=f:r._tenantRecaptchaConfigs[r.tenantId]=f,o(f.siteKey)}}).catch(l=>{c(l)})})}function s(r,o,c){const l=window.grecaptcha;md(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(f=>{o(f)}).catch(()=>{o(Of)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Qw().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(c=>{if(!t&&md(window.grecaptcha))s(c,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Ww();l.length!==0&&(l+=c),Mf(l).then(()=>{s(c,r,o)}).catch(f=>{o(f)})}}).catch(c=>{o(c)})})}}async function bd(n,e,t,i=!1,s=!1){const r=new Xw(n);let o;if(s)o=Of;else try{o=await r.verify(t)}catch{o=await r.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,f=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:f,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return i?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Xa(n,e,t,i,s){var r;if((r=n._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await bd(n,e,t,t==="getOobCode");return i(n,o)}else return i(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await bd(n,e,t,t==="getOobCode");return i(n,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(n,e){const t=ko(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(Gn(r,e??{}))return s;rt(s,"already-initialized")}return t.initialize({options:e})}function e_(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Ut);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function t_(n,e,t){const i=Dt(n);q(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=Vf(e),{host:o,port:c}=n_(e),l=c===null?"":`:${c}`,f={url:`${r}//${o}${l}/`},m=Object.freeze({host:o,port:c,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){q(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),q(Gn(f,i.config.emulator)&&Gn(m,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=f,i.emulatorConfig=m,i.settings.appVerificationDisabledForTesting=!0,Rn(o)?($c(`${r}//${o}${l}`),Lc("Auth",!0)):i_()}function Vf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function n_(n){const e=Vf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Td(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Td(o)}}}function Td(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function i_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Vt("not implemented")}_getIdTokenResponse(e){return Vt("not implemented")}_linkToIdToken(e,t){return Vt("not implemented")}_getReauthenticationResolver(e){return Vt("not implemented")}}async function s_(n,e){return qt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r_(n,e){return js(n,"POST","/v1/accounts:signInWithPassword",xn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o_(n,e){return js(n,"POST","/v1/accounts:signInWithEmailLink",xn(n,e))}async function a_(n,e){return js(n,"POST","/v1/accounts:signInWithEmailLink",xn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s extends Hc{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new $s(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new $s(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xa(e,t,"signInWithPassword",r_);case"emailLink":return o_(e,{email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xa(e,i,"signUpPassword",s_);case"emailLink":return a_(e,{idToken:t,email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(n,e){return js(n,"POST","/v1/accounts:signInWithIdp",xn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_="http://localhost";class jt extends Hc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new jt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):rt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...r}=t;if(!i||!s)return null;const o=new jt(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return pi(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,pi(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,pi(e,t)}buildRequest(){const e={requestUri:c_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Bs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function u_(n){const e=hs(fs(n)).link,t=e?hs(fs(e)).deep_link_id:null,i=hs(fs(n)).deep_link_id;return(i?hs(fs(i)).link:null)||i||t||e||n}class jc{constructor(e){const t=hs(fs(e)),i=t.apiKey??null,s=t.oobCode??null,r=l_(t.mode??null);q(i&&s&&r,"argument-error"),this.apiKey=i,this.operation=r,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=u_(e);try{return new jc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(){this.providerId=Oi.PROVIDER_ID}static credential(e,t){return $s._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=jc.parseLink(t);return q(i,"argument-error"),$s._fromEmailAndCode(e,i.code,i.tenantId)}}Oi.PROVIDER_ID="password";Oi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Oi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Vi extends Co{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class bs extends Vi{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return q("providerId"in t&&"signInMethod"in t,"argument-error"),jt._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return q(e.idToken||e.accessToken,"argument-error"),jt._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return bs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return bs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:r,nonce:o,providerId:c}=e;if(!i&&!s&&!t&&!r||!c)return null;try{return new bs(c)._credential({idToken:t,accessToken:i,nonce:o,pendingToken:r})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends Vi{constructor(){super("facebook.com")}static credential(e){return jt._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.FACEBOOK_SIGN_IN_METHOD="facebook.com";on.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends Vi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return jt._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ot.credential(t,i)}catch{return null}}}Ot.GOOGLE_SIGN_IN_METHOD="google.com";Ot.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends Vi{constructor(){super("github.com")}static credential(e){return jt._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return an.credential(e.oauthAccessToken)}catch{return null}}}an.GITHUB_SIGN_IN_METHOD="github.com";an.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends Vi{constructor(){super("twitter.com")}static credential(e,t){return jt._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return cn.credential(t,i)}catch{return null}}}cn.TWITTER_SIGN_IN_METHOD="twitter.com";cn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d_(n,e){return js(n,"POST","/v1/accounts:signUp",xn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await lt._fromIdTokenResponse(e,i,s),o=Id(i);return new Qn({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Id(i);return new Qn({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Id(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so extends Lt{constructor(e,t,i,s){super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,so.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new so(e,t,i,s)}}function Uf(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?so._fromErrorAndOperation(n,r,e,i):r})}async function h_(n,e,t=!1){const i=await ki(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Qn._forOperation(n,"link",i)}/**
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
 */async function f_(n,e,t=!1){const{auth:i}=n;if(Ge(i.app))return Promise.reject(St(i));const s="reauthenticate";try{const r=await ki(n,Uf(i,s,e,n),t);q(r.idToken,i,"internal-error");const o=Fc(r.idToken);q(o,i,"internal-error");const{sub:c}=o;return q(n.uid===c,i,"user-mismatch"),Qn._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&rt(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ff(n,e,t=!1){if(Ge(n.app))return Promise.reject(St(n));const i="signIn",s=await Uf(n,i,e),r=await Qn._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function p_(n,e){return Ff(Dt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bf(n){const e=Dt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function m_(n,e,t){if(Ge(n.app))return Promise.reject(St(n));const i=Dt(n),o=await Xa(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",d_).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Bf(n),l}),c=await Qn._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(c.user),c}function g_(n,e,t){return Ge(n.app)?Promise.reject(St(n)):p_(De(n),Oi.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Bf(n),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y_(n,e){return qt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v_(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=De(n),r={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await ki(i,y_(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const c=i.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function w_(n,e,t,i){return De(n).onIdTokenChanged(e,t,i)}function __(n,e,t){return De(n).beforeAuthStateChanged(e,t)}function b_(n,e,t,i){return De(n).onAuthStateChanged(e,t,i)}function T_(n){return De(n).signOut()}const ro="__sak";/**
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
 */class Hf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ro,"1"),this.storage.removeItem(ro),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_=1e3,E_=10;class jf extends Hf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Df(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Uw()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,E_):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},I_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}jf.type="LOCAL";const k_=jf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf extends Hf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}zf.type="SESSION";const qf=zf;/**
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
 */function S_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ao{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Ao(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const c=Array.from(o).map(async f=>f(t.origin,r)),l=await S_(c);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ao.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class C_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((c,l)=>{const f=zc("",20);s.port1.start();const m=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(y){const w=y;if(w.data.eventId===f)switch(w.data.status){case"ack":clearTimeout(m),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),c(w.data.response);break;default:clearTimeout(m),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){return window}function A_(n){Ct().location.href=n}/**
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
 */function Wf(){return typeof Ct().WorkerGlobalScope<"u"&&typeof Ct().importScripts=="function"}async function R_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function x_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function P_(){return Wf()?self:null}/**
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
 */const Gf="firebaseLocalStorageDb",$_=1,oo="firebaseLocalStorage",Kf="fbase_key";class zs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ro(n,e){return n.transaction([oo],e?"readwrite":"readonly").objectStore(oo)}function L_(){const n=indexedDB.deleteDatabase(Gf);return new zs(n).toPromise()}function Za(){const n=indexedDB.open(Gf,$_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(oo,{keyPath:Kf})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(oo)?e(i):(i.close(),await L_(),e(await Za()))})})}async function Ed(n,e,t){const i=Ro(n,!0).put({[Kf]:e,value:t});return new zs(i).toPromise()}async function D_(n,e){const t=Ro(n,!1).get(e),i=await new zs(t).toPromise();return i===void 0?null:i.value}function kd(n,e){const t=Ro(n,!0).delete(e);return new zs(t).toPromise()}const N_=800,M_=3;class Qf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Za(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>M_)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ao._getInstance(P_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await R_(),!this.activeServiceWorker)return;this.sender=new C_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||x_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Za();return await Ed(e,ro,"1"),await kd(e,ro),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Ed(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>D_(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>kd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Ro(s,!1).getAll();return new zs(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),N_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qf.type="LOCAL";const O_=Qf;new Hs(3e4,6e4);/**
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
 */function qc(n,e){return e?Ut(e):(q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Wc extends Hc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return pi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return pi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function V_(n){return Ff(n.auth,new Wc(n),n.bypassAuthState)}function U_(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),f_(t,new Wc(n),n.bypassAuthState)}async function F_(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),h_(t,new Wc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return V_;case"linkViaPopup":case"linkViaRedirect":return F_;case"reauthViaPopup":case"reauthViaRedirect":return U_;default:rt(this.auth,"internal-error")}}resolve(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=new Hs(2e3,1e4);async function Yf(n,e,t){if(Ge(n.app))return Promise.reject(dt(n,"operation-not-supported-in-this-environment"));const i=Dt(n);bf(n,e,Co);const s=qc(i,t);return new Un(i,"signInViaPopup",e,s).executeNotNull()}class Un extends Jf{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Un.currentPopupAction&&Un.currentPopupAction.cancel(),Un.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Ht(this.filter.length===1,"Popup operations only handle one event");const e=zc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Un.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)==null?void 0:t.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,B_.get())};e()}}Un.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_="pendingRedirect",Mr=new Map;class j_ extends Jf{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Mr.get(this.auth._key());if(!e){try{const i=await z_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Mr.set(this.auth._key(),e)}return this.bypassAuthState||Mr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function z_(n,e){const t=Zf(e),i=Xf(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}async function q_(n,e){return Xf(n)._set(Zf(e),"true")}function W_(n,e){Mr.set(n._key(),e)}function Xf(n){return Ut(n._redirectPersistence)}function Zf(n){return Nr(H_,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(n,e,t){return G_(n,e,t)}async function G_(n,e,t){if(Ge(n.app))return Promise.reject(St(n));const i=Dt(n);bf(n,e,Co),await i._initializationPromise;const s=qc(i,t);return await q_(s,i),s._openRedirect(i,e,"signInViaRedirect")}async function K_(n,e){return await Dt(n)._initializationPromise,tp(n,e,!1)}async function tp(n,e,t=!1){if(Ge(n.app))return Promise.reject(St(n));const i=Dt(n),s=qc(i,e),o=await new j_(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=600*1e3;class J_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Y_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!np(e)){const s=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";t.onError(dt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Q_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sd(e))}saveEventToCache(e){this.cachedEventUids.add(Sd(e)),this.lastProcessedEventTime=Date.now()}}function Sd(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function np({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Y_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return np(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X_(n,e={}){return qt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eb=/^https?/;async function tb(n){if(n.config.emulator)return;const{authorizedDomains:e}=await X_(n);for(const t of e)try{if(nb(t))return}catch{}rt(n,"unauthorized-domain")}function nb(n){const e=Ja(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!eb.test(t))return!1;if(Z_.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const ib=new Hs(3e4,6e4);function Cd(){const n=Ct().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function sb(n){return new Promise((e,t)=>{var s,r,o;function i(){Cd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cd(),t(dt(n,"network-request-failed"))},timeout:ib.get()})}if((r=(s=Ct().gapi)==null?void 0:s.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=Ct().gapi)!=null&&o.load)i();else{const c=Kw("iframefcb");return Ct()[c]=()=>{gapi.load?i():t(dt(n,"network-request-failed"))},Mf(`${Gw()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Or=null,e})}let Or=null;function rb(n){return Or=Or||sb(n),Or}/**
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
 */const ob=new Hs(5e3,15e3),ab="__/auth/iframe",cb="emulator/auth/iframe",lb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ub=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function db(n){const e=n.config;q(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Uc(e,cb):`https://${n.config.authDomain}/${ab}`,i={apiKey:e.apiKey,appName:n.name,v:Zn},s=ub.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Bs(i).slice(1)}`}async function hb(n){const e=await rb(n),t=Ct().gapi;return q(t,n,"internal-error"),e.open({where:document.body,url:db(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lb,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=dt(n,"network-request-failed"),c=Ct().setTimeout(()=>{r(o)},ob.get());function l(){Ct().clearTimeout(c),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const fb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pb=500,mb=600,gb="_blank",yb="http://localhost";class Ad{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vb(n,e,t,i=pb,s=mb){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l={...fb,width:i.toString(),height:s.toString(),top:r,left:o},f=je().toLowerCase();t&&(c=Rf(f)?gb:t),Cf(f)&&(e=e||yb,l.scrollbars="yes");const m=Object.entries(l).reduce((w,[E,A])=>`${w}${E}=${A},`,"");if(Vw(f)&&c!=="_self")return wb(e||"",c),new Ad(null);const y=window.open(e||"",c,m);q(y,n,"popup-blocked");try{y.focus()}catch{}return new Ad(y)}function wb(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const _b="__/auth/handler",bb="emulator/auth/handler",Tb=encodeURIComponent("fac");async function Rd(n,e,t,i,s,r){q(n.config.authDomain,n,"auth-domain-config-required"),q(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Zn,eventId:s};if(e instanceof Co){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",sv(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,y]of Object.entries({}))o[m]=y}if(e instanceof Vi){const m=e.getScopes().filter(y=>y!=="");m.length>0&&(o.scopes=m.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const l=await n._getAppCheckToken(),f=l?`#${Tb}=${encodeURIComponent(l)}`:"";return`${Ib(n)}?${Bs(c).slice(1)}${f}`}function Ib({config:n}){return n.emulator?Uc(n,bb):`https://${n.authDomain}/${_b}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa="webStorageSupport";class Eb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qf,this._completeRedirectFn=tp,this._overrideRedirectResult=W_}async _openPopup(e,t,i,s){var o;Ht((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await Rd(e,t,i,Ja(),s);return vb(e,r,zc())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Rd(e,t,i,Ja(),s);return A_(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Ht(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await hb(e),i=new J_(e);return t.register("authEvent",s=>(q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Aa,{type:Aa},s=>{var o;const r=(o=s==null?void 0:s[0])==null?void 0:o[Aa];r!==void 0&&t(!!r),rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Df()||Af()||Bc()}}const kb=Eb;var xd="@firebase/auth",Pd="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cb(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ab(n){Kn(new bn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=i.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nf(n)},f=new zw(i,s,r,l);return e_(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Kn(new bn("auth-internal",e=>{const t=Dt(e.getProvider("auth").getImmediate());return(i=>new Sb(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),kt(xd,Pd,Cb(n)),kt(xd,Pd,"esm2020")}/**
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
 */const Rb=300,xb=hf("authIdTokenMaxAge")||Rb;let $d=null;const Pb=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>xb)return;const s=t==null?void 0:t.token;$d!==s&&($d=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function $b(n=Mc()){const e=ko(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Zw(n,{popupRedirectResolver:kb,persistence:[O_,k_,qf]}),i=hf("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=Pb(r.toString());__(t,o,()=>o(t.currentUser)),w_(t,c=>o(c))}}const s=lf("auth");return s&&t_(t,`http://${s}`),t}function Lb(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}qw({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=dt("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",Lb().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ab("Browser");const Db={apiKey:"AIzaSyAFURz8fEGSTameAW5YvBKWpr2LXv9Ang0",authDomain:"family-pantry-c65d6.firebaseapp.com",projectId:"family-pantry-c65d6",storageBucket:"family-pantry-c65d6.firebasestorage.app",messagingSenderId:"710701847077",appId:"1:710701847077:web:407a8937330ad2ebcfe5cc"},Gc=gf(Db),ot=$b(Gc);window._firebaseAuth=ot;const Ld=new Ot,ao=new bs("apple.com");ao.addScope("email");ao.addScope("name");let Kc=null;const Vr=[];function Nb(n){return Vr.push(n),n(Kc),()=>{const e=Vr.indexOf(n);e!==-1&&Vr.splice(e,1)}}function Mb(n){Kc=n,Vr.forEach(e=>e(n))}b_(ot,n=>{Mb(n||null)});K_(ot).catch(n=>{n.code!=="auth/redirect-cancelled-by-user"&&console.error("Redirect sign-in error:",n)});async function Ob(){try{return(await Yf(ot,Ld)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await ep(ot,Ld),null;throw n}}async function Vb(){try{return(await Yf(ot,ao)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await ep(ot,ao),null;throw n}}async function Ub(n,e){return(await g_(ot,n,e)).user}async function Fb(n,e,t){const i=await m_(ot,n,e);return t&&await v_(i.user,{displayName:t}),i.user}async function Bb(){await T_(ot)}async function ip(){return ot.currentUser?ot.currentUser.getIdToken():null}function Z(){return Kc}async function xo(n,e,t){const i={"Content-Type":"application/json"},s=await ip();s&&(i.Authorization=`Bearer ${s}`);const r=await fetch("/api/db",{method:"POST",headers:i,body:JSON.stringify({op:n,path:e,data:t})});if(!(r.headers.get("content-type")||"").includes("application/json"))throw new Error(`/api/db non-JSON response (status ${r.status}) for ${n} ${e}`);return r.json()}async function oe(n){try{return(await xo("list",n)).docs||[]}catch(e){return console.warn("dbList:",n,e.message),[]}}async function W(n,e){return xo("set",n,e)}async function ct(n){return xo("delete",n)}async function ne(n){try{return(await xo("get",n)).doc||null}catch{return null}}function sp(){return Math.random().toString(36).slice(2,8).toUpperCase()}async function co(n){var t;const e={name:n.displayName||((t=n.email)==null?void 0:t.split("@")[0])||"User",email:n.email||"",createdAt:new Date().toISOString(),householdIds:[]};return await W(`users/${n.uid}`,e),e}async function Qc(n,e){var o;const t=Z(),i=n,s=sp(),r={name:e||"My Kitchen",ownerUid:n,members:[{uid:n,name:(t==null?void 0:t.displayName)||((o=t==null?void 0:t.email)==null?void 0:o.split("@")[0])||"Owner",role:"owner"}],memberUids:[n],inviteCode:s,createdAt:new Date().toISOString()};try{await W(`households/${i}`,r),await W(`household_codes/${s}`,{householdId:i})}catch(c){console.error(`[createHousehold] FAILED to write households/${i}:`,c)}return{hid:i,...r}}async function rp(n){const e=await ne(`household_codes/${n.toUpperCase()}`);return(e==null?void 0:e.householdId)||null}async function Jc(n,e){var c;const t=await rp(n);if(!t)return null;const i=await ne(`households/${t}`);if(!i)return null;const s=i.members||[],r=i.memberUids||s.map(l=>l.uid);s.find(l=>l.uid===e.uid)||(s.push({uid:e.uid,name:e.displayName||((c=e.email)==null?void 0:c.split("@")[0])||"Member",role:"member"}),r.includes(e.uid)||r.push(e.uid),await W(`households/${t}`,{...i,members:s,memberUids:r,id:void 0}));const o=await ne(`users/${e.uid}`);if(o){const l=o.householdIds||[];l.includes(t)||(l.push(t),await W(`users/${e.uid}`,{...o,householdIds:l,id:void 0}))}return t}async function op(n){const e=await ne(`households/${n}`);if(!e)return null;if(e.inviteCode)try{await ct(`household_codes/${e.inviteCode}`)}catch{}const t=sp();return await W(`household_codes/${t}`,{householdId:n}),await W(`households/${n}`,{...e,inviteCode:t,id:void 0}),t}async function ap(n,e){const t=await ne(`households/${n}`);if(!t)return;const i=(t.members||[]).filter(r=>r.uid!==e),s=(t.memberUids||[]).filter(r=>r!==e);await W(`households/${n}`,{...t,members:i,memberUids:s,id:void 0});try{const r=await ne(`users/${e}`);if(r){const o=(r.householdIds||[]).filter(c=>c!==n);await W(`users/${e}`,{...r,householdIds:o,id:void 0})}}catch{}}async function Dd(n,e){const t=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog"];for(const i of t){const s=await oe(`households/${n}/${i}`);for(const r of s){const o=r.id,c={...r};delete c.id,await W(`households/${e}/${i}/${o}`,c)}}}async function cp(n){var l,f;const e=n.uid;console.log(`[resolveHousehold] ENTER — uid=${e}`);const t=await ne(`users/${e}`);if(console.log("[resolveHousehold] userDoc=",t),t){const m=(l=t.householdIds)!=null&&l.length?t.householdIds[0]:e;console.log(`[resolveHousehold] RETURNING USER — hid=${m}, householdIds=`,t.householdIds);const y=localStorage.getItem("ks-h");return console.log(`[resolveHousehold] RETURNING USER — ks-h="${y}", hid="${m}", uid="${e}"`),console.log(`[resolveHousehold] RETURNING USER — migration condition: oldHid=${!!y}, oldHid!==hid=${y!==m}, oldHid!==uid=${y!==e}`),y&&y!==m&&y!==e?(console.log(`[resolveHousehold] LATE MIGRATION TRIGGERED: ${y} → ${m}`),await Dd(y,m),localStorage.removeItem("ks-h"),console.log("[resolveHousehold] Late migration DONE, ks-h removed")):console.log("[resolveHousehold] RETURNING USER — NO migration needed"),m}console.log("[resolveHousehold] FIRST-TIME LOGIN — no userDoc found");const i=localStorage.getItem("ks-h"),s=i&&i!==e;console.log(`[resolveHousehold] FIRST-TIME — ks-h="${i}", hasOldData=${s}`);const r=((f=d.cfg)==null?void 0:f.name)||"My Kitchen";console.log(`[resolveHousehold] FIRST-TIME — creating household, cfgName="${r}"`),await Qc(e,s?r:"My Kitchen"),s&&(console.log(`[resolveHousehold] FIRST-TIME MIGRATION: ${i} → ${e}`),await Dd(i,e),console.log("[resolveHousehold] FIRST-TIME MIGRATION DONE"));const o=await co(n);o.householdIds=[e],await W(`users/${e}`,o),console.log("[resolveHousehold] User profile created & saved"),localStorage.removeItem("ks-h");const c=ae("ks-hhs");if(c){const m=c.filter(y=>y!==i);m.includes(e)||m.push(e),localStorage.setItem("ks-hhs",JSON.stringify(m))}return console.log(`[resolveHousehold] EXIT — returning uid=${e}`),e}async function Tn(n,e){e?(d.mp[n]=e,await W(`households/${d.hid}/mealplan/${n}`,{date:n,meal:e})):(delete d.mp[n],await ct(`households/${d.hid}/mealplan/${n}`))}async function qs(){await W(`households/${d.hid}/settings/config`,d.cfg)}async function Yc(n,e){const t={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:e||ec(),loggedAt:new Date().toISOString()};d.cookLog.unshift(t),d.cookLog.length>200&&(d.cookLog=d.cookLog.slice(0,200)),await W(`households/${d.hid}/cooklog/${t.id}`,t)}async function lp(n){if(d.wasteLog.find(t=>t.name===n&&t.date===ec()))return;const e={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:ec(),loggedAt:new Date().toISOString()};d.wasteLog.unshift(e),d.wasteLog.length>100&&(d.wasteLog=d.wasteLog.slice(0,100)),await W(`households/${d.hid}/wastelog/${e.id}`,e)}async function up(){try{try{const r=await ne(`households/${d.hid}`);r&&r.inviteCode&&(await ne(`household_codes/${r.inviteCode}`)||(await W(`household_codes/${r.inviteCode}`,{householdId:d.hid}),console.log(`[backfill] Created household_codes/${r.inviteCode} for household ${d.hid}`)))}catch(r){console.warn("[backfill] household_codes backfill skipped:",r.message)}const e=(await oe(`households/${d.hid}/settings`)).find(r=>r.id==="config");if(e)d.cfg={...Yr,...e};else{const r=ae("ks-c");d.cfg={...Yr,...r||{}},await qs(),r&&localStorage.removeItem("ks-c")}const t=await oe(`households/${d.hid}/mealplan`);if(d.mp={},t.forEach(r=>{r.date&&r.meal&&(d.mp[r.date]=r.meal)}),!t.length){const r=ae("ks-m");if(r&&Object.keys(r).length){d.mp=r;for(const[o,c]of Object.entries(r))await Tn(o,c);localStorage.removeItem("ks-m")}}const i=await oe(`households/${d.hid}/cooklog`);if(i.length)d.cookLog=i.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=ae("ks-cooklog");if(r&&r.length){d.cookLog=r.map((o,c)=>({id:o.id||(Date.now()-c).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of d.cookLog)await W(`households/${d.hid}/cooklog/${o.id}`,o);localStorage.removeItem("ks-cooklog")}}const s=await oe(`households/${d.hid}/wastelog`);if(s.length)d.wasteLog=s.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=ae("ks-waste");if(r&&r.length){d.wasteLog=r.map((o,c)=>({id:o.id||(Date.now()-c).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of d.wasteLog)await W(`households/${d.hid}/wastelog/${o.id}`,o);localStorage.removeItem("ks-waste")}}}catch(n){console.error("loadFirestoreData error:",n)}}let Ts=0;function ei(){Ts++,Ts===1&&window._pollIntervalId&&(clearInterval(window._pollIntervalId),window._pollIntervalId=null)}function ti(){Ts--,Ts<=0&&(Ts=0,window._pollFn&&!window._pollIntervalId&&(window._pollFn(),window._pollIntervalId=setInterval(window._pollFn,3e4)))}const H={renderAll:null,renderSum:null,renderRecs:null,renderShop:null};function de(n){var i;const e=document.getElementById("sdot"),t=document.getElementById("slb");e&&(e.className="sdot "+n),t&&(t.textContent=n==="synced"?"🏠 "+(((i=d.cfg)==null?void 0:i.name)||d.hid):n==="syncing"?"Syncing…":"Sync error")}async function re(n){var e,t;de("syncing"),ei();try{const i=!d.inv.find(s=>s.id===n.id);d.inv=[...d.inv.filter(s=>s.id!==n.id),n],(e=H.renderAll)==null||e.call(H),(t=H.renderSum)==null||t.call(H),await W(`households/${d.hid}/inventory/${n.id}`,n),i&&Ye("added",Ae(n.name)+" to Supplies"),de("synced")}catch(i){console.error(i),de("error")}finally{ti()}}async function Ws(n){var e,t;de("syncing"),ei();try{const i=d.inv.find(s=>s.id===n);d.inv=d.inv.filter(s=>s.id!==n),(e=H.renderAll)==null||e.call(H),(t=H.renderSum)==null||t.call(H),await ct(`households/${d.hid}/inventory/${n}`),i&&Ye("removed",Ae(i.name)+" from Supplies"),de("synced")}catch(i){console.error(i),de("error")}finally{ti()}}async function Je(n){var e,t;ei();try{const i=!d.recs.find(r=>r.id===n.id);d.recs=[...d.recs.filter(r=>r.id!==n.id),n],(e=H.renderRecs)==null||e.call(H),(t=H.renderSum)==null||t.call(H),await W(`households/${d.hid}/recipes/${n.id}`,n);const s=Ae(n.name||n.title||"a recipe");i?Ye("added",s+" to Recipes"):Ye("updated",s)}catch(i){console.error(i)}finally{ti()}}async function dp(n){var e,t;ei();try{const i=d.recs.find(s=>s.id===n);d.recs=d.recs.filter(s=>s.id!==n),(e=H.renderRecs)==null||e.call(H),(t=H.renderSum)==null||t.call(H),await ct(`households/${d.hid}/recipes/${n}`),i&&Ye("deleted",Ae(i.name||i.title||"a recipe")+" from Recipes")}catch(i){console.error(i)}finally{ti()}}async function ye(n){var e,t;ei();try{const i=!d.shop.find(s=>s.id===n.id);d.shop=[...d.shop.filter(s=>s.id!==n.id),n],(e=H.renderShop)==null||e.call(H),(t=H.renderSum)==null||t.call(H),await W(`households/${d.hid}/shopping/${n.id}`,n),i&&Ye("added",Ae(n.name)+" to Shopping List")}catch(i){console.error(i)}finally{ti()}}async function Ui(n){var e,t;ei();try{const i=d.shop.find(s=>s.id===n);d.shop=d.shop.filter(s=>s.id!==n),(e=H.renderShop)==null||e.call(H),(t=H.renderSum)==null||t.call(H),await ct(`households/${d.hid}/shopping/${n}`),i&&Ye("removed",Ae(i.name)+" from Shopping List")}catch(i){console.error(i)}finally{ti()}}async function Po(n,e){var s;const t="pub-"+Date.now()+"-"+Math.random().toString(36).slice(2,8),i={title:n.name,ingredients:n.description||"",steps:n.steps||"",tags:n.tags||[],cuisine:n.cuisine||"",imageUrl:n.imageUrl||null,prepTime:n.prepTime||"",cookTime:n.cookTime||"",totalTime:n.totalTime||"",servings:n.servings||"",difficulty:n.difficulty||"",summary:n.summary||"",ingredientsRaw:n.ingredientsRaw||[],stepsRaw:n.stepsRaw||[],authorName:e||"Anonymous",authorUsername:d.username||"",authorUid:((s=Z())==null?void 0:s.uid)||"",householdId:d.hid||"",createdAt:new Date().toISOString(),likes:0,commentCount:0,ratingSum:0,ratingCount:0,avgRating:0};return await W(`public_recipes/${t}`,i),{id:t,...i}}async function Xc(n){var t;const e=(t=Z())==null?void 0:t.uid;if(!e)return null;if(n.publicId)try{const i=await tl(n.publicId);if(i)return i}catch{}if(d.comRecs&&d.comRecs.length>0){const i=(n.name||"").trim().toLowerCase(),s=d.comRecs.find(r=>r.authorUid===e&&(r.title||"").trim().toLowerCase()===i);if(s)return s}return null}async function Zc(n){await ct(`public_recipes/${n}`)}async function el(){return oe("public_recipes")}async function tl(n){return ne(`public_recipes/${n}`)}async function hp(n,e){var o;const t=(o=Z())==null?void 0:o.uid;if(!t)return;const i=`public_recipes/${n}/likes/${t}`;e?await ct(i):await W(i,{likedAt:new Date().toISOString()});const s=await oe(`public_recipes/${n}/likes`),r=await ne(`public_recipes/${n}`);r&&await W(`public_recipes/${n}`,{...r,likes:s.length,id:void 0})}async function fp(n,e,t){var c;const i=(c=Z())==null?void 0:c.uid;if(!i||!e.trim())return;const s=e.trim().slice(0,500),r="cmt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),o={text:s,authorName:t,authorUsername:d.username||"",authorUid:i,createdAt:new Date().toISOString()};await W(`public_recipes/${n}/comments/${r}`,o);try{const l=await ne(`public_recipes/${n}`);if(l){const f=await oe(`public_recipes/${n}/comments`);await W(`public_recipes/${n}`,{...l,commentCount:f.length,id:void 0}),l.authorUid&&l.authorUid!==i&&await Ep(l.authorUid,{type:"comment",recipeId:n,recipeName:l.title||"a recipe",commenterUsername:d.username||t||"Someone"})}}catch{}return{id:r,...o}}async function pp(n){return oe(`public_recipes/${n}/comments`)}async function mp(n){var i;const e=(i=Z())==null?void 0:i.uid;return e?!!await ne(`public_recipes/${n}/likes/${e}`):!1}async function gp(n){const t={id:"rec-"+Date.now(),name:n.title,description:n.ingredients||"",notes:n.steps||"",tags:n.tags||[],cuisine:n.cuisine||"",imageUrl:n.imageUrl||null,prepTime:n.prepTime||"",cookTime:n.cookTime||"",totalTime:n.totalTime||"",servings:n.servings||"",ingredientsRaw:n.ingredientsRaw||[],stepsRaw:n.stepsRaw||[],difficulty:n.difficulty||"",summary:n.summary||"",rating:0,favorited:!1,source:"Community",sourceUrl:null,cookCount:0,savedAt:new Date().toLocaleDateString()};return await Je(t),t}async function nl(n){return n?!await ne(`usernames/${n.toLowerCase()}`):!1}async function il(n,e){const t=await ne(`users/${n}`),i=t==null?void 0:t.username;if(i&&i.toLowerCase()!==e.toLowerCase())try{await ct(`usernames/${i.toLowerCase()}`)}catch{}await W(`usernames/${e.toLowerCase()}`,{uid:n}),t&&await W(`users/${n}`,{...t,username:e,id:void 0}),d.username=e}async function yp(n){try{const e=await ne(`users/${n}`);return(e==null?void 0:e.username)||null}catch{return null}}async function vp(n){var t;const e=(t=Z())==null?void 0:t.uid;return e?ne(`public_recipes/${n}/reviews/${e}`):null}async function Ye(n,e){if(!d.hid||!e)return;const t=localStorage.getItem("ks-who")||"Someone",i="act-"+Date.now().toString(36)+Math.random().toString(36).slice(2),s={memberName:t,action:n,itemName:e,timestamp:new Date().toISOString()};try{await W(`households/${d.hid}/activity/${i}`,s),Hb()}catch{}}async function Hb(){try{const n=await oe(`households/${d.hid}/activity`),e=Date.now()-10080*60*1e3;for(const t of n)t.timestamp&&new Date(t.timestamp).getTime()<e&&await ct(`households/${d.hid}/activity/${t.id}`)}catch{}}function ec(){return new Date().toISOString().split("T")[0]}async function wp(n,e){var y;const t=(y=Z())==null?void 0:y.uid;if(!t||!e||e<1||e>5)return null;const i=await ne(`public_recipes/${n}`);if(i&&i.authorUid===t)return null;const s=new Date().toISOString(),r=await ne(`public_recipes/${n}/ratings/${t}`),o={rating:e,createdAt:(r==null?void 0:r.createdAt)||s,updatedAt:s};await W(`public_recipes/${n}/ratings/${t}`,o);const c=await oe(`public_recipes/${n}/ratings`),l=c.reduce((w,E)=>w+(E.rating||0),0),f=c.length,m=f>0?Math.round(l/f*10)/10:0;return i&&await W(`public_recipes/${n}`,{...i,ratingSum:l,ratingCount:f,avgRating:m,id:void 0}),{...o,ratingSum:l,ratingCount:f,avgRating:m}}async function _p(n){var t;const e=(t=Z())==null?void 0:t.uid;return e?ne(`public_recipes/${n}/ratings/${e}`):null}async function bp(n){var c;const e=(c=Z())==null?void 0:c.uid;if(!e)return null;await ct(`public_recipes/${n}/ratings/${e}`);const t=await oe(`public_recipes/${n}/ratings`),i=t.reduce((l,f)=>l+(f.rating||0),0),s=t.length,r=s>0?Math.round(i/s*10)/10:0,o=await ne(`public_recipes/${n}`);return o&&await W(`public_recipes/${n}`,{...o,ratingSum:i,ratingCount:s,avgRating:r,id:void 0}),{ratingSum:i,ratingCount:s,avgRating:r}}async function Tp(n,e){await ct(`public_recipes/${n}/comments/${e}`);try{const t=await ne(`public_recipes/${n}`);if(t){const i=await oe(`public_recipes/${n}/comments`);await W(`public_recipes/${n}`,{...t,commentCount:i.length,id:void 0})}}catch{}}async function Ip(n,e,t,i){var f;const s=(f=Z())==null?void 0:f.uid;if(!s)return null;if((await oe("reports")).find(m=>m.reportedBy===s&&m.targetId===e&&m.type===n))return"duplicate";const c="rpt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),l={type:n,targetId:e,recipeId:i||e,reportedBy:s,reason:t,createdAt:new Date().toISOString(),status:"pending"};return await W(`reports/${c}`,l),{id:c,...l}}async function Ep(n,e){if(!n)return;const t="ntf-"+Date.now().toString(36)+Math.random().toString(36).slice(2),i={...e,createdAt:new Date().toISOString(),read:!1};await W(`users/${n}/notifications/${t}`,i)}async function kp(){var t;const n=(t=Z())==null?void 0:t.uid;return n?(await oe(`users/${n}/notifications`)).sort((i,s)=>new Date(s.createdAt||0)-new Date(i.createdAt||0)):[]}async function Sp(){var t;const n=(t=Z())==null?void 0:t.uid;if(!n)return;const e=await oe(`users/${n}/notifications`);for(const i of e)i.read||await W(`users/${n}/notifications/${i.id}`,{...i,read:!0,id:void 0})}async function Cp(){var t;const n=(t=Z())==null?void 0:t.uid;return n?(await oe(`users/${n}/notifications`)).filter(i=>!i.read).length:0}const jb=Object.freeze(Object.defineProperty({__proto__:null,addComment:fp,addCookLogEntry:Yc,addNotification:Ep,addWasteEntry:lp,checkMyLike:mp,checkMyReview:vp,checkRecipeAlreadyPublished:Xc,checkUsernameAvailable:nl,createHousehold:Qc,createUserProfile:co,dbDelete:ct,dbGet:ne,dbList:oe,dbSet:W,deleteComment:Tp,deleteRating:bp,dlShopItem:Ui,dli:Ws,dlr:dp,getMyRating:_p,getPublicRecipe:tl,getUnreadNotifCount:Cp,joinHouseholdByCode:Jc,listComments:pp,listNotifications:kp,listPublicRecipes:el,loadFirestoreData:up,loadUsername:yp,logActivity:Ye,lookupHouseholdByCode:rp,markAllNotificationsRead:Sp,pausePoll:ei,publishRecipe:Po,regenerateInviteCode:op,removeMember:ap,renderCallbacks:H,resolveHousehold:cp,resumePoll:ti,saveCfg:qs,saveMp:Tn,saveRecipeToKitchen:gp,setUsername:il,ss:de,submitRating:wp,submitReport:Ip,svShopItem:ye,svi:re,svr:Je,toggleLike:hp,unpublishRecipe:Zc},Symbol.toStringTag,{value:"Module"}));var Nd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gn,Ap;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function _(){}_.prototype=v.prototype,b.F=v.prototype,b.prototype=new _,b.prototype.constructor=b,b.D=function(k,I,S){for(var T=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)T[Re-2]=arguments[Re];return v.prototype[I].apply(k,T)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,v,_){_||(_=0);const k=Array(16);if(typeof v=="string")for(var I=0;I<16;++I)k[I]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(I=0;I<16;++I)k[I]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=b.g[0],_=b.g[1],I=b.g[2];let S=b.g[3],T;T=v+(S^_&(I^S))+k[0]+3614090360&4294967295,v=_+(T<<7&4294967295|T>>>25),T=S+(I^v&(_^I))+k[1]+3905402710&4294967295,S=v+(T<<12&4294967295|T>>>20),T=I+(_^S&(v^_))+k[2]+606105819&4294967295,I=S+(T<<17&4294967295|T>>>15),T=_+(v^I&(S^v))+k[3]+3250441966&4294967295,_=I+(T<<22&4294967295|T>>>10),T=v+(S^_&(I^S))+k[4]+4118548399&4294967295,v=_+(T<<7&4294967295|T>>>25),T=S+(I^v&(_^I))+k[5]+1200080426&4294967295,S=v+(T<<12&4294967295|T>>>20),T=I+(_^S&(v^_))+k[6]+2821735955&4294967295,I=S+(T<<17&4294967295|T>>>15),T=_+(v^I&(S^v))+k[7]+4249261313&4294967295,_=I+(T<<22&4294967295|T>>>10),T=v+(S^_&(I^S))+k[8]+1770035416&4294967295,v=_+(T<<7&4294967295|T>>>25),T=S+(I^v&(_^I))+k[9]+2336552879&4294967295,S=v+(T<<12&4294967295|T>>>20),T=I+(_^S&(v^_))+k[10]+4294925233&4294967295,I=S+(T<<17&4294967295|T>>>15),T=_+(v^I&(S^v))+k[11]+2304563134&4294967295,_=I+(T<<22&4294967295|T>>>10),T=v+(S^_&(I^S))+k[12]+1804603682&4294967295,v=_+(T<<7&4294967295|T>>>25),T=S+(I^v&(_^I))+k[13]+4254626195&4294967295,S=v+(T<<12&4294967295|T>>>20),T=I+(_^S&(v^_))+k[14]+2792965006&4294967295,I=S+(T<<17&4294967295|T>>>15),T=_+(v^I&(S^v))+k[15]+1236535329&4294967295,_=I+(T<<22&4294967295|T>>>10),T=v+(I^S&(_^I))+k[1]+4129170786&4294967295,v=_+(T<<5&4294967295|T>>>27),T=S+(_^I&(v^_))+k[6]+3225465664&4294967295,S=v+(T<<9&4294967295|T>>>23),T=I+(v^_&(S^v))+k[11]+643717713&4294967295,I=S+(T<<14&4294967295|T>>>18),T=_+(S^v&(I^S))+k[0]+3921069994&4294967295,_=I+(T<<20&4294967295|T>>>12),T=v+(I^S&(_^I))+k[5]+3593408605&4294967295,v=_+(T<<5&4294967295|T>>>27),T=S+(_^I&(v^_))+k[10]+38016083&4294967295,S=v+(T<<9&4294967295|T>>>23),T=I+(v^_&(S^v))+k[15]+3634488961&4294967295,I=S+(T<<14&4294967295|T>>>18),T=_+(S^v&(I^S))+k[4]+3889429448&4294967295,_=I+(T<<20&4294967295|T>>>12),T=v+(I^S&(_^I))+k[9]+568446438&4294967295,v=_+(T<<5&4294967295|T>>>27),T=S+(_^I&(v^_))+k[14]+3275163606&4294967295,S=v+(T<<9&4294967295|T>>>23),T=I+(v^_&(S^v))+k[3]+4107603335&4294967295,I=S+(T<<14&4294967295|T>>>18),T=_+(S^v&(I^S))+k[8]+1163531501&4294967295,_=I+(T<<20&4294967295|T>>>12),T=v+(I^S&(_^I))+k[13]+2850285829&4294967295,v=_+(T<<5&4294967295|T>>>27),T=S+(_^I&(v^_))+k[2]+4243563512&4294967295,S=v+(T<<9&4294967295|T>>>23),T=I+(v^_&(S^v))+k[7]+1735328473&4294967295,I=S+(T<<14&4294967295|T>>>18),T=_+(S^v&(I^S))+k[12]+2368359562&4294967295,_=I+(T<<20&4294967295|T>>>12),T=v+(_^I^S)+k[5]+4294588738&4294967295,v=_+(T<<4&4294967295|T>>>28),T=S+(v^_^I)+k[8]+2272392833&4294967295,S=v+(T<<11&4294967295|T>>>21),T=I+(S^v^_)+k[11]+1839030562&4294967295,I=S+(T<<16&4294967295|T>>>16),T=_+(I^S^v)+k[14]+4259657740&4294967295,_=I+(T<<23&4294967295|T>>>9),T=v+(_^I^S)+k[1]+2763975236&4294967295,v=_+(T<<4&4294967295|T>>>28),T=S+(v^_^I)+k[4]+1272893353&4294967295,S=v+(T<<11&4294967295|T>>>21),T=I+(S^v^_)+k[7]+4139469664&4294967295,I=S+(T<<16&4294967295|T>>>16),T=_+(I^S^v)+k[10]+3200236656&4294967295,_=I+(T<<23&4294967295|T>>>9),T=v+(_^I^S)+k[13]+681279174&4294967295,v=_+(T<<4&4294967295|T>>>28),T=S+(v^_^I)+k[0]+3936430074&4294967295,S=v+(T<<11&4294967295|T>>>21),T=I+(S^v^_)+k[3]+3572445317&4294967295,I=S+(T<<16&4294967295|T>>>16),T=_+(I^S^v)+k[6]+76029189&4294967295,_=I+(T<<23&4294967295|T>>>9),T=v+(_^I^S)+k[9]+3654602809&4294967295,v=_+(T<<4&4294967295|T>>>28),T=S+(v^_^I)+k[12]+3873151461&4294967295,S=v+(T<<11&4294967295|T>>>21),T=I+(S^v^_)+k[15]+530742520&4294967295,I=S+(T<<16&4294967295|T>>>16),T=_+(I^S^v)+k[2]+3299628645&4294967295,_=I+(T<<23&4294967295|T>>>9),T=v+(I^(_|~S))+k[0]+4096336452&4294967295,v=_+(T<<6&4294967295|T>>>26),T=S+(_^(v|~I))+k[7]+1126891415&4294967295,S=v+(T<<10&4294967295|T>>>22),T=I+(v^(S|~_))+k[14]+2878612391&4294967295,I=S+(T<<15&4294967295|T>>>17),T=_+(S^(I|~v))+k[5]+4237533241&4294967295,_=I+(T<<21&4294967295|T>>>11),T=v+(I^(_|~S))+k[12]+1700485571&4294967295,v=_+(T<<6&4294967295|T>>>26),T=S+(_^(v|~I))+k[3]+2399980690&4294967295,S=v+(T<<10&4294967295|T>>>22),T=I+(v^(S|~_))+k[10]+4293915773&4294967295,I=S+(T<<15&4294967295|T>>>17),T=_+(S^(I|~v))+k[1]+2240044497&4294967295,_=I+(T<<21&4294967295|T>>>11),T=v+(I^(_|~S))+k[8]+1873313359&4294967295,v=_+(T<<6&4294967295|T>>>26),T=S+(_^(v|~I))+k[15]+4264355552&4294967295,S=v+(T<<10&4294967295|T>>>22),T=I+(v^(S|~_))+k[6]+2734768916&4294967295,I=S+(T<<15&4294967295|T>>>17),T=_+(S^(I|~v))+k[13]+1309151649&4294967295,_=I+(T<<21&4294967295|T>>>11),T=v+(I^(_|~S))+k[4]+4149444226&4294967295,v=_+(T<<6&4294967295|T>>>26),T=S+(_^(v|~I))+k[11]+3174756917&4294967295,S=v+(T<<10&4294967295|T>>>22),T=I+(v^(S|~_))+k[2]+718787259&4294967295,I=S+(T<<15&4294967295|T>>>17),T=_+(S^(I|~v))+k[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(I+(T<<21&4294967295|T>>>11))&4294967295,b.g[2]=b.g[2]+I&4294967295,b.g[3]=b.g[3]+S&4294967295}i.prototype.v=function(b,v){v===void 0&&(v=b.length);const _=v-this.blockSize,k=this.C;let I=this.h,S=0;for(;S<v;){if(I==0)for(;S<=_;)s(this,b,S),S+=this.blockSize;if(typeof b=="string"){for(;S<v;)if(k[I++]=b.charCodeAt(S++),I==this.blockSize){s(this,k),I=0;break}}else for(;S<v;)if(k[I++]=b[S++],I==this.blockSize){s(this,k),I=0;break}}this.h=I,this.o+=v},i.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;v=this.o*8;for(var _=b.length-8;_<b.length;++_)b[_]=v&255,v/=256;for(this.v(b),b=Array(16),v=0,_=0;_<4;++_)for(let k=0;k<32;k+=8)b[v++]=this.g[_]>>>k&255;return b};function r(b,v){var _=c;return Object.prototype.hasOwnProperty.call(_,b)?_[b]:_[b]=v(b)}function o(b,v){this.h=v;const _=[];let k=!0;for(let I=b.length-1;I>=0;I--){const S=b[I]|0;k&&S==v||(_[I]=S,k=!1)}this.g=_}var c={};function l(b){return-128<=b&&b<128?r(b,function(v){return new o([v|0],v<0?-1:0)}):new o([b|0],b<0?-1:0)}function f(b){if(isNaN(b)||!isFinite(b))return y;if(b<0)return $(f(-b));const v=[];let _=1;for(let k=0;b>=_;k++)v[k]=b/_|0,_*=4294967296;return new o(v,0)}function m(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return $(m(b.substring(1),v));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=f(Math.pow(v,8));let k=y;for(let S=0;S<b.length;S+=8){var I=Math.min(8,b.length-S);const T=parseInt(b.substring(S,S+I),v);I<8?(I=f(Math.pow(v,I)),k=k.j(I).add(f(T))):(k=k.j(_),k=k.add(f(T)))}return k}var y=l(0),w=l(1),E=l(16777216);n=o.prototype,n.m=function(){if(P(this))return-$(this).m();let b=0,v=1;for(let _=0;_<this.g.length;_++){const k=this.i(_);b+=(k>=0?k:4294967296+k)*v,v*=4294967296}return b},n.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(A(this))return"0";if(P(this))return"-"+$(this).toString(b);const v=f(Math.pow(b,6));var _=this;let k="";for(;;){const I=D(_,v).g;_=U(_,I.j(v));let S=((_.g.length>0?_.g[0]:_.h)>>>0).toString(b);if(_=I,A(_))return S+k;for(;S.length<6;)S="0"+S;k=S+k}},n.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function A(b){if(b.h!=0)return!1;for(let v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function P(b){return b.h==-1}n.l=function(b){return b=U(this,b),P(b)?-1:A(b)?0:1};function $(b){const v=b.g.length,_=[];for(let k=0;k<v;k++)_[k]=~b.g[k];return new o(_,~b.h).add(w)}n.abs=function(){return P(this)?$(this):this},n.add=function(b){const v=Math.max(this.g.length,b.g.length),_=[];let k=0;for(let I=0;I<=v;I++){let S=k+(this.i(I)&65535)+(b.i(I)&65535),T=(S>>>16)+(this.i(I)>>>16)+(b.i(I)>>>16);k=T>>>16,S&=65535,T&=65535,_[I]=T<<16|S}return new o(_,_[_.length-1]&-2147483648?-1:0)};function U(b,v){return b.add($(v))}n.j=function(b){if(A(this)||A(b))return y;if(P(this))return P(b)?$(this).j($(b)):$($(this).j(b));if(P(b))return $(this.j($(b)));if(this.l(E)<0&&b.l(E)<0)return f(this.m()*b.m());const v=this.g.length+b.g.length,_=[];for(var k=0;k<2*v;k++)_[k]=0;for(k=0;k<this.g.length;k++)for(let I=0;I<b.g.length;I++){const S=this.i(k)>>>16,T=this.i(k)&65535,Re=b.i(I)>>>16,ft=b.i(I)&65535;_[2*k+2*I]+=T*ft,N(_,2*k+2*I),_[2*k+2*I+1]+=S*ft,N(_,2*k+2*I+1),_[2*k+2*I+1]+=T*Re,N(_,2*k+2*I+1),_[2*k+2*I+2]+=S*Re,N(_,2*k+2*I+2)}for(b=0;b<v;b++)_[b]=_[2*b+1]<<16|_[2*b];for(b=v;b<2*v;b++)_[b]=0;return new o(_,0)};function N(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function M(b,v){this.g=b,this.h=v}function D(b,v){if(A(v))throw Error("division by zero");if(A(b))return new M(y,y);if(P(b))return v=D($(b),v),new M($(v.g),$(v.h));if(P(v))return v=D(b,$(v)),new M($(v.g),v.h);if(b.g.length>30){if(P(b)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var _=w,k=v;k.l(b)<=0;)_=F(_),k=F(k);var I=j(_,1),S=j(k,1);for(k=j(k,2),_=j(_,2);!A(k);){var T=S.add(k);T.l(b)<=0&&(I=I.add(_),S=T),k=j(k,1),_=j(_,1)}return v=U(b,I.j(v)),new M(I,v)}for(I=y;b.l(v)>=0;){for(_=Math.max(1,Math.floor(b.m()/v.m())),k=Math.ceil(Math.log(_)/Math.LN2),k=k<=48?1:Math.pow(2,k-48),S=f(_),T=S.j(v);P(T)||T.l(b)>0;)_-=k,S=f(_),T=S.j(v);A(S)&&(S=w),I=I.add(S),b=U(b,T)}return new M(I,b)}n.B=function(b){return D(this,b).h},n.and=function(b){const v=Math.max(this.g.length,b.g.length),_=[];for(let k=0;k<v;k++)_[k]=this.i(k)&b.i(k);return new o(_,this.h&b.h)},n.or=function(b){const v=Math.max(this.g.length,b.g.length),_=[];for(let k=0;k<v;k++)_[k]=this.i(k)|b.i(k);return new o(_,this.h|b.h)},n.xor=function(b){const v=Math.max(this.g.length,b.g.length),_=[];for(let k=0;k<v;k++)_[k]=this.i(k)^b.i(k);return new o(_,this.h^b.h)};function F(b){const v=b.g.length+1,_=[];for(let k=0;k<v;k++)_[k]=b.i(k)<<1|b.i(k-1)>>>31;return new o(_,b.h)}function j(b,v){const _=v>>5;v%=32;const k=b.g.length-_,I=[];for(let S=0;S<k;S++)I[S]=v>0?b.i(S+_)>>>v|b.i(S+_+1)<<32-v:b.i(S+_);return new o(I,b.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,Ap=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=f,o.fromString=m,gn=o}).apply(typeof Nd<"u"?Nd:typeof self<"u"?self:typeof window<"u"?window:{});var br=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rp,ps,xp,Ur,tc,Pp,$p,Lp;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof br=="object"&&br];for(var u=0;u<a.length;++u){var p=a[u];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var i=t(this);function s(a,u){if(u)e:{var p=i;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in p))break e;p=p[C]}a=a[a.length-1],g=p[a],u=u(g),u!=g&&u!=null&&e(p,a,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(u){var p=[],g;for(g in u)Object.prototype.hasOwnProperty.call(u,g)&&p.push([g,u[g]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},o=this||self;function c(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function l(a,u,p){return a.call.apply(a.bind,arguments)}function f(a,u,p){return f=l,f.apply(null,arguments)}function m(a,u){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function y(a,u){function p(){}p.prototype=u.prototype,a.Z=u.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(g,C,x){for(var O=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)O[Y-2]=arguments[Y];return u.prototype[C].apply(g,O)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function E(a){const u=a.length;if(u>0){const p=Array(u);for(let g=0;g<u;g++)p[g]=a[g];return p}return[]}function A(a,u){for(let g=1;g<arguments.length;g++){const C=arguments[g];var p=typeof C;if(p=p!="object"?p:C?Array.isArray(C)?"array":p:"null",p=="array"||p=="object"&&typeof C.length=="number"){p=a.length||0;const x=C.length||0;a.length=p+x;for(let O=0;O<x;O++)a[p+O]=C[O]}else a.push(C)}}class P{constructor(u,p){this.i=u,this.j=p,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function $(a){o.setTimeout(()=>{throw a},0)}function U(){var a=b;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class N{constructor(){this.h=this.g=null}add(u,p){const g=M.get();g.set(u,p),this.h?this.h.next=g:this.g=g,this.h=g}}var M=new P(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(u,p){this.h=u,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let F,j=!1,b=new N,v=()=>{const a=Promise.resolve(void 0);F=()=>{a.then(_)}};function _(){for(var a;a=U();){try{a.h.call(a.g)}catch(p){$(p)}var u=M;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}j=!1}function k(){this.u=this.u,this.C=this.C}k.prototype.u=!1,k.prototype.dispose=function(){this.u||(this.u=!0,this.N())},k.prototype[Symbol.dispose]=function(){this.dispose()},k.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var S=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,u),o.removeEventListener("test",p,u)}catch{}return a})();function T(a){return/^[\s\xa0]*$/.test(a)}function Re(a,u){I.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}y(Re,I),Re.prototype.init=function(a,u){const p=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(p=="mouseover"?u=a.fromElement:p=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Re.Z.h.call(this)},Re.prototype.h=function(){Re.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ft="closure_listenable_"+(Math.random()*1e6|0),he=0;function Pn(a,u,p,g,C){this.listener=a,this.proxy=null,this.src=u,this.type=p,this.capture=!!g,this.ha=C,this.key=++he,this.da=this.fa=!1}function rr(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function or(a,u,p){for(const g in a)u.call(p,a[g],g,a)}function ty(a,u){for(const p in a)u.call(void 0,a[p],p,a)}function nu(a){const u={};for(const p in a)u[p]=a[p];return u}const iu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function su(a,u){let p,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(p in g)a[p]=g[p];for(let x=0;x<iu.length;x++)p=iu[x],Object.prototype.hasOwnProperty.call(g,p)&&(a[p]=g[p])}}function ar(a){this.src=a,this.g={},this.h=0}ar.prototype.add=function(a,u,p,g,C){const x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);const O=Xo(a,u,g,C);return O>-1?(u=a[O],p||(u.fa=!1)):(u=new Pn(u,this.src,x,!!g,C),u.fa=p,a.push(u)),u};function Yo(a,u){const p=u.type;if(p in a.g){var g=a.g[p],C=Array.prototype.indexOf.call(g,u,void 0),x;(x=C>=0)&&Array.prototype.splice.call(g,C,1),x&&(rr(u),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Xo(a,u,p,g){for(let C=0;C<a.length;++C){const x=a[C];if(!x.da&&x.listener==u&&x.capture==!!p&&x.ha==g)return C}return-1}var Zo="closure_lm_"+(Math.random()*1e6|0),ea={};function ru(a,u,p,g,C){if(Array.isArray(u)){for(let x=0;x<u.length;x++)ru(a,u[x],p,g,C);return null}return p=cu(p),a&&a[ft]?a.J(u,p,c(g)?!!g.capture:!1,C):ny(a,u,p,!1,g,C)}function ny(a,u,p,g,C,x){if(!u)throw Error("Invalid event type");const O=c(C)?!!C.capture:!!C;let Y=na(a);if(Y||(a[Zo]=Y=new ar(a)),p=Y.add(u,p,g,O,x),p.proxy)return p;if(g=iy(),p.proxy=g,g.src=a,g.listener=p,a.addEventListener)S||(C=O),C===void 0&&(C=!1),a.addEventListener(u.toString(),g,C);else if(a.attachEvent)a.attachEvent(au(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function iy(){function a(p){return u.call(a.src,a.listener,p)}const u=sy;return a}function ou(a,u,p,g,C){if(Array.isArray(u))for(var x=0;x<u.length;x++)ou(a,u[x],p,g,C);else g=c(g)?!!g.capture:!!g,p=cu(p),a&&a[ft]?(a=a.i,x=String(u).toString(),x in a.g&&(u=a.g[x],p=Xo(u,p,g,C),p>-1&&(rr(u[p]),Array.prototype.splice.call(u,p,1),u.length==0&&(delete a.g[x],a.h--)))):a&&(a=na(a))&&(u=a.g[u.toString()],a=-1,u&&(a=Xo(u,p,g,C)),(p=a>-1?u[a]:null)&&ta(p))}function ta(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[ft])Yo(u.i,a);else{var p=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(p,g,a.capture):u.detachEvent?u.detachEvent(au(p),g):u.addListener&&u.removeListener&&u.removeListener(g),(p=na(u))?(Yo(p,a),p.h==0&&(p.src=null,u[Zo]=null)):rr(a)}}}function au(a){return a in ea?ea[a]:ea[a]="on"+a}function sy(a,u){if(a.da)a=!0;else{u=new Re(u,this);const p=a.listener,g=a.ha||a.src;a.fa&&ta(a),a=p.call(g,u)}return a}function na(a){return a=a[Zo],a instanceof ar?a:null}var ia="__closure_events_fn_"+(Math.random()*1e9>>>0);function cu(a){return typeof a=="function"?a:(a[ia]||(a[ia]=function(u){return a.handleEvent(u)}),a[ia])}function Ve(){k.call(this),this.i=new ar(this),this.M=this,this.G=null}y(Ve,k),Ve.prototype[ft]=!0,Ve.prototype.removeEventListener=function(a,u,p,g){ou(this,a,u,p,g)};function ze(a,u){var p,g=a.G;if(g)for(p=[];g;g=g.G)p.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new I(u,a);else if(u instanceof I)u.target=u.target||a;else{var C=u;u=new I(g,a),su(u,C)}C=!0;let x,O;if(p)for(O=p.length-1;O>=0;O--)x=u.g=p[O],C=cr(x,g,!0,u)&&C;if(x=u.g=a,C=cr(x,g,!0,u)&&C,C=cr(x,g,!1,u)&&C,p)for(O=0;O<p.length;O++)x=u.g=p[O],C=cr(x,g,!1,u)&&C}Ve.prototype.N=function(){if(Ve.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const p=a.g[u];for(let g=0;g<p.length;g++)rr(p[g]);delete a.g[u],a.h--}}this.G=null},Ve.prototype.J=function(a,u,p,g){return this.i.add(String(a),u,!1,p,g)},Ve.prototype.K=function(a,u,p,g){return this.i.add(String(a),u,!0,p,g)};function cr(a,u,p,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let C=!0;for(let x=0;x<u.length;++x){const O=u[x];if(O&&!O.da&&O.capture==p){const Y=O.listener,ke=O.ha||O.src;O.fa&&Yo(a.i,O),C=Y.call(ke,g)!==!1&&C}}return C&&!g.defaultPrevented}function ry(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=f(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function lu(a){a.g=ry(()=>{a.g=null,a.i&&(a.i=!1,lu(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class oy extends k{constructor(u,p){super(),this.m=u,this.l=p,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:lu(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wi(a){k.call(this),this.h=a,this.g={}}y(Wi,k);var uu=[];function du(a){or(a.g,function(u,p){this.g.hasOwnProperty(p)&&ta(u)},a),a.g={}}Wi.prototype.N=function(){Wi.Z.N.call(this),du(this)},Wi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var sa=o.JSON.stringify,ay=o.JSON.parse,cy=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function hu(){}function fu(){}var Gi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ra(){I.call(this,"d")}y(ra,I);function oa(){I.call(this,"c")}y(oa,I);var $n={},pu=null;function lr(){return pu=pu||new Ve}$n.Ia="serverreachability";function mu(a){I.call(this,$n.Ia,a)}y(mu,I);function Ki(a){const u=lr();ze(u,new mu(u))}$n.STAT_EVENT="statevent";function gu(a,u){I.call(this,$n.STAT_EVENT,a),this.stat=u}y(gu,I);function qe(a){const u=lr();ze(u,new gu(u,a))}$n.Ja="timingevent";function yu(a,u){I.call(this,$n.Ja,a),this.size=u}y(yu,I);function Qi(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function Ji(){this.g=!0}Ji.prototype.ua=function(){this.g=!1};function ly(a,u,p,g,C,x){a.info(function(){if(a.g)if(x){var O="",Y=x.split("&");for(let ce=0;ce<Y.length;ce++){var ke=Y[ce].split("=");if(ke.length>1){const xe=ke[0];ke=ke[1];const mt=xe.split("_");O=mt.length>=2&&mt[1]=="type"?O+(xe+"="+ke+"&"):O+(xe+"=redacted&")}}}else O=null;else O=x;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+u+`
`+p+`
`+O})}function uy(a,u,p,g,C,x,O){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+u+`
`+p+`
`+x+" "+O})}function si(a,u,p,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+hy(a,p)+(g?" "+g:"")})}function dy(a,u){a.info(function(){return"TIMEOUT: "+u})}Ji.prototype.info=function(){};function hy(a,u){if(!a.g)return u;if(!u)return null;try{const x=JSON.parse(u);if(x){for(a=0;a<x.length;a++)if(Array.isArray(x[a])){var p=x[a];if(!(p.length<2)){var g=p[1];if(Array.isArray(g)&&!(g.length<1)){var C=g[0];if(C!="noop"&&C!="stop"&&C!="close")for(let O=1;O<g.length;O++)g[O]=""}}}}return sa(x)}catch{return u}}var ur={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},vu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},wu;function aa(){}y(aa,hu),aa.prototype.g=function(){return new XMLHttpRequest},wu=new aa;function Yi(a){return encodeURIComponent(String(a))}function fy(a){var u=1;a=a.split(":");const p=[];for(;u>0&&a.length;)p.push(a.shift()),u--;return a.length&&p.push(a.join(":")),p}function Wt(a,u,p,g){this.j=a,this.i=u,this.l=p,this.S=g||1,this.V=new Wi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new _u}function _u(){this.i=null,this.g="",this.h=!1}var bu={},ca={};function la(a,u,p){a.M=1,a.A=hr(pt(u)),a.u=p,a.R=!0,Tu(a,null)}function Tu(a,u){a.F=Date.now(),dr(a),a.B=pt(a.A);var p=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Nu(p.i,"t",g),a.C=0,p=a.j.L,a.h=new _u,a.g=Zu(a.j,p?u:null,!a.u),a.P>0&&(a.O=new oy(f(a.Y,a,a.g),a.P)),u=a.V,p=a.g,g=a.ba;var C="readystatechange";Array.isArray(C)||(C&&(uu[0]=C.toString()),C=uu);for(let x=0;x<C.length;x++){const O=ru(p,C[x],g||u.handleEvent,!1,u.h||u);if(!O)break;u.g[O.key]=O}u=a.J?nu(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),Ki(),ly(a.i,a.v,a.B,a.l,a.S,a.u)}Wt.prototype.ba=function(a){a=a.target;const u=this.O;u&&Qt(a)==3?u.j():this.Y(a)},Wt.prototype.Y=function(a){try{if(a==this.g)e:{const Y=Qt(this.g),ke=this.g.ya(),ce=this.g.ca();if(!(Y<3)&&(Y!=3||this.g&&(this.h.h||this.g.la()||Hu(this.g)))){this.K||Y!=4||ke==7||(ke==8||ce<=0?Ki(3):Ki(2)),ua(this);var u=this.g.ca();this.X=u;var p=py(this);if(this.o=u==200,uy(this.i,this.v,this.B,this.l,this.S,Y,u),this.o){if(this.U&&!this.L){t:{if(this.g){var g,C=this.g;if((g=C.g?C.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(g)){var x=g;break t}}x=null}if(a=x)si(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,da(this,a);else{this.o=!1,this.m=3,qe(12),Ln(this),Xi(this);break e}}if(this.R){a=!0;let xe;for(;!this.K&&this.C<p.length;)if(xe=my(this,p),xe==ca){Y==4&&(this.m=4,qe(14),a=!1),si(this.i,this.l,null,"[Incomplete Response]");break}else if(xe==bu){this.m=4,qe(15),si(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else si(this.i,this.l,xe,null),da(this,xe);if(Iu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Y!=4||p.length!=0||this.h.h||(this.m=1,qe(16),a=!1),this.o=this.o&&a,!a)si(this.i,this.l,p,"[Invalid Chunked Response]"),Ln(this),Xi(this);else if(p.length>0&&!this.W){this.W=!0;var O=this.j;O.g==this&&O.aa&&!O.P&&(O.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),wa(O),O.P=!0,qe(11))}}else si(this.i,this.l,p,null),da(this,p);Y==4&&Ln(this),this.o&&!this.K&&(Y==4?Qu(this.j,this):(this.o=!1,dr(this)))}else Ry(this.g),u==400&&p.indexOf("Unknown SID")>0?(this.m=3,qe(12)):(this.m=0,qe(13)),Ln(this),Xi(this)}}}catch{}finally{}};function py(a){if(!Iu(a))return a.g.la();const u=Hu(a.g);if(u==="")return"";let p="";const g=u.length,C=Qt(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Ln(a),Xi(a),"";a.h.i=new o.TextDecoder}for(let x=0;x<g;x++)a.h.h=!0,p+=a.h.i.decode(u[x],{stream:!(C&&x==g-1)});return u.length=0,a.h.g+=p,a.C=0,a.h.g}function Iu(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function my(a,u){var p=a.C,g=u.indexOf(`
`,p);return g==-1?ca:(p=Number(u.substring(p,g)),isNaN(p)?bu:(g+=1,g+p>u.length?ca:(u=u.slice(g,g+p),a.C=g+p,u)))}Wt.prototype.cancel=function(){this.K=!0,Ln(this)};function dr(a){a.T=Date.now()+a.H,Eu(a,a.H)}function Eu(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Qi(f(a.aa,a),u)}function ua(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Wt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(dy(this.i,this.B),this.M!=2&&(Ki(),qe(17)),Ln(this),this.m=2,Xi(this)):Eu(this,this.T-a)};function Xi(a){a.j.I==0||a.K||Qu(a.j,a)}function Ln(a){ua(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,du(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function da(a,u){try{var p=a.j;if(p.I!=0&&(p.g==a||ha(p.h,a))){if(!a.L&&ha(p.h,a)&&p.I==3){try{var g=p.Ba.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)yr(p),mr(p);else break e;va(p),qe(18)}}else p.xa=C[1],0<p.xa-p.K&&C[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=Qi(f(p.Va,p),6e3));Cu(p.h)<=1&&p.ta&&(p.ta=void 0)}else Nn(p,11)}else if((a.L||p.g==a)&&yr(p),!T(u))for(C=p.Ba.g.parse(u),u=0;u<C.length;u++){let ce=C[u];const xe=ce[0];if(!(xe<=p.K))if(p.K=xe,ce=ce[1],p.I==2)if(ce[0]=="c"){p.M=ce[1],p.ba=ce[2];const mt=ce[3];mt!=null&&(p.ka=mt,p.j.info("VER="+p.ka));const Mn=ce[4];Mn!=null&&(p.za=Mn,p.j.info("SVER="+p.za));const Jt=ce[5];Jt!=null&&typeof Jt=="number"&&Jt>0&&(g=1.5*Jt,p.O=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const Yt=a.g;if(Yt){const wr=Yt.g?Yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(wr){var x=g.h;x.g||wr.indexOf("spdy")==-1&&wr.indexOf("quic")==-1&&wr.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(fa(x,x.h),x.h=null))}if(g.G){const _a=Yt.g?Yt.g.getResponseHeader("X-HTTP-Session-Id"):null;_a&&(g.wa=_a,ue(g.J,g.G,_a))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),g=p;var O=a;if(g.na=Xu(g,g.L?g.ba:null,g.W),O.L){Au(g.h,O);var Y=O,ke=g.O;ke&&(Y.H=ke),Y.D&&(ua(Y),dr(Y)),g.g=O}else Gu(g);p.i.length>0&&gr(p)}else ce[0]!="stop"&&ce[0]!="close"||Nn(p,7);else p.I==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Nn(p,7):ya(p):ce[0]!="noop"&&p.l&&p.l.qa(ce),p.A=0)}}Ki(4)}catch{}}var gy=class{constructor(a,u){this.g=a,this.map=u}};function ku(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Su(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Cu(a){return a.h?1:a.g?a.g.size:0}function ha(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function fa(a,u){a.g?a.g.add(u):a.h=u}function Au(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}ku.prototype.cancel=function(){if(this.i=Ru(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ru(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const p of a.g.values())u=u.concat(p.G);return u}return E(a.i)}var xu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yy(a,u){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const g=a[p].indexOf("=");let C,x=null;g>=0?(C=a[p].substring(0,g),x=a[p].substring(g+1)):C=a[p],u(C,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Gt(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof Gt?(this.l=a.l,Zi(this,a.j),this.o=a.o,this.g=a.g,es(this,a.u),this.h=a.h,pa(this,Mu(a.i)),this.m=a.m):a&&(u=String(a).match(xu))?(this.l=!1,Zi(this,u[1]||"",!0),this.o=ts(u[2]||""),this.g=ts(u[3]||"",!0),es(this,u[4]),this.h=ts(u[5]||"",!0),pa(this,u[6]||"",!0),this.m=ts(u[7]||"")):(this.l=!1,this.i=new is(null,this.l))}Gt.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(ns(u,Pu,!0),":");var p=this.g;return(p||u=="file")&&(a.push("//"),(u=this.o)&&a.push(ns(u,Pu,!0),"@"),a.push(Yi(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(ns(p,p.charAt(0)=="/"?_y:wy,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",ns(p,Ty)),a.join("")},Gt.prototype.resolve=function(a){const u=pt(this);let p=!!a.j;p?Zi(u,a.j):p=!!a.o,p?u.o=a.o:p=!!a.g,p?u.g=a.g:p=a.u!=null;var g=a.h;if(p)es(u,a.u);else if(p=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var C=u.h.lastIndexOf("/");C!=-1&&(g=u.h.slice(0,C+1)+g)}if(C=g,C==".."||C==".")g="";else if(C.indexOf("./")!=-1||C.indexOf("/.")!=-1){g=C.lastIndexOf("/",0)==0,C=C.split("/");const x=[];for(let O=0;O<C.length;){const Y=C[O++];Y=="."?g&&O==C.length&&x.push(""):Y==".."?((x.length>1||x.length==1&&x[0]!="")&&x.pop(),g&&O==C.length&&x.push("")):(x.push(Y),g=!0)}g=x.join("/")}else g=C}return p?u.h=g:p=a.i.toString()!=="",p?pa(u,Mu(a.i)):p=!!a.m,p&&(u.m=a.m),u};function pt(a){return new Gt(a)}function Zi(a,u,p){a.j=p?ts(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function es(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function pa(a,u,p){u instanceof is?(a.i=u,Iy(a.i,a.l)):(p||(u=ns(u,by)),a.i=new is(u,a.l))}function ue(a,u,p){a.i.set(u,p)}function hr(a){return ue(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function ts(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ns(a,u,p){return typeof a=="string"?(a=encodeURI(a).replace(u,vy),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function vy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Pu=/[#\/\?@]/g,wy=/[#\?:]/g,_y=/[#\?]/g,by=/[#\?@]/g,Ty=/#/g;function is(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Dn(a){a.g||(a.g=new Map,a.h=0,a.i&&yy(a.i,function(u,p){a.add(decodeURIComponent(u.replace(/\+/g," ")),p)}))}n=is.prototype,n.add=function(a,u){Dn(this),this.i=null,a=ri(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(u),this.h+=1,this};function $u(a,u){Dn(a),u=ri(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Lu(a,u){return Dn(a),u=ri(a,u),a.g.has(u)}n.forEach=function(a,u){Dn(this),this.g.forEach(function(p,g){p.forEach(function(C){a.call(u,C,g,this)},this)},this)};function Du(a,u){Dn(a);let p=[];if(typeof u=="string")Lu(a,u)&&(p=p.concat(a.g.get(ri(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)p=p.concat(a[u]);return p}n.set=function(a,u){return Dn(this),this.i=null,a=ri(this,a),Lu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=Du(this,a),a.length>0?String(a[0]):u):u};function Nu(a,u,p){$u(a,u),p.length>0&&(a.i=null,a.g.set(ri(a,u),E(p)),a.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let g=0;g<u.length;g++){var p=u[g];const C=Yi(p);p=Du(this,p);for(let x=0;x<p.length;x++){let O=C;p[x]!==""&&(O+="="+Yi(p[x])),a.push(O)}}return this.i=a.join("&")};function Mu(a){const u=new is;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function ri(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function Iy(a,u){u&&!a.j&&(Dn(a),a.i=null,a.g.forEach(function(p,g){const C=g.toLowerCase();g!=C&&($u(this,g),Nu(this,C,p))},a)),a.j=u}function Ey(a,u){const p=new Ji;if(o.Image){const g=new Image;g.onload=m(Kt,p,"TestLoadImage: loaded",!0,u,g),g.onerror=m(Kt,p,"TestLoadImage: error",!1,u,g),g.onabort=m(Kt,p,"TestLoadImage: abort",!1,u,g),g.ontimeout=m(Kt,p,"TestLoadImage: timeout",!1,u,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function ky(a,u){const p=new Ji,g=new AbortController,C=setTimeout(()=>{g.abort(),Kt(p,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(x=>{clearTimeout(C),x.ok?Kt(p,"TestPingServer: ok",!0,u):Kt(p,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),Kt(p,"TestPingServer: error",!1,u)})}function Kt(a,u,p,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(p)}catch{}}function Sy(){this.g=new cy}function ma(a){this.i=a.Sb||null,this.h=a.ab||!1}y(ma,hu),ma.prototype.g=function(){return new fr(this.i,this.h)};function fr(a,u){Ve.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}y(fr,Ve),n=fr.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,rs(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ss(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,rs(this)),this.g&&(this.readyState=3,rs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ou(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ou(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?ss(this):rs(this),this.readyState==3&&Ou(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,ss(this))},n.Na=function(a){this.g&&(this.response=a,ss(this))},n.ga=function(){this.g&&ss(this)};function ss(a){a.readyState=4,a.l=null,a.j=null,a.B=null,rs(a)}n.setRequestHeader=function(a,u){this.A.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var p=u.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=u.next();return a.join(`\r
`)};function rs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(fr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Vu(a){let u="";return or(a,function(p,g){u+=g,u+=":",u+=p,u+=`\r
`}),u}function ga(a,u,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=Vu(p),typeof a=="string"?p!=null&&Yi(p):ue(a,u,p))}function me(a){Ve.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}y(me,Ve);var Cy=/^https?$/i,Ay=["POST","PUT"];n=me.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,u,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():wu.g(),this.g.onreadystatechange=w(f(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(x){Uu(this,x);return}if(a=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)p.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const x of g.keys())p.set(x,g.get(x));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(x=>x.toLowerCase()=="content-type"),C=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Ay,u,void 0)>=0)||g||C||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,O]of p)this.g.setRequestHeader(x,O);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(x){Uu(this,x)}};function Uu(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,Fu(a),pr(a)}function Fu(a){a.A||(a.A=!0,ze(a,"complete"),ze(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,ze(this,"complete"),ze(this,"abort"),pr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pr(this,!0)),me.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Bu(this):this.Xa())},n.Xa=function(){Bu(this)};function Bu(a){if(a.h&&typeof r<"u"){if(a.v&&Qt(a)==4)setTimeout(a.Ca.bind(a),0);else if(ze(a,"readystatechange"),Qt(a)==4){a.h=!1;try{const x=a.ca();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var p;if(!(p=u)){var g;if(g=x===0){let O=String(a.D).match(xu)[1]||null;!O&&o.self&&o.self.location&&(O=o.self.location.protocol.slice(0,-1)),g=!Cy.test(O?O.toLowerCase():"")}p=g}if(p)ze(a,"complete"),ze(a,"success");else{a.o=6;try{var C=Qt(a)>2?a.g.statusText:""}catch{C=""}a.l=C+" ["+a.ca()+"]",Fu(a)}}finally{pr(a)}}}}function pr(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,u||ze(a,"ready");try{p.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Qt(a){return a.g?a.g.readyState:0}n.ca=function(){try{return Qt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),ay(u)}};function Hu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Ry(a){const u={};a=(a.g&&Qt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(T(a[g]))continue;var p=fy(a[g]);const C=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const x=u[C]||[];u[C]=x,x.push(p)}ty(u,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function os(a,u,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||u}function ju(a){this.za=0,this.i=[],this.j=new Ji,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=os("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=os("baseRetryDelayMs",5e3,a),this.Za=os("retryDelaySeedMs",1e4,a),this.Ta=os("forwardChannelMaxRetries",2,a),this.va=os("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new ku(a&&a.concurrentRequestLimit),this.Ba=new Sy,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=ju.prototype,n.ka=8,n.I=1,n.connect=function(a,u,p,g){qe(0),this.W=a,this.H=u||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.J=Xu(this,null,this.W),gr(this)};function ya(a){if(zu(a),a.I==3){var u=a.V++,p=pt(a.J);if(ue(p,"SID",a.M),ue(p,"RID",u),ue(p,"TYPE","terminate"),as(a,p),u=new Wt(a,a.j,u),u.M=2,u.A=hr(pt(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=u.A,p=!0),p||(u.g=Zu(u.j,null),u.g.ea(u.A)),u.F=Date.now(),dr(u)}Yu(a)}function mr(a){a.g&&(wa(a),a.g.cancel(),a.g=null)}function zu(a){mr(a),a.v&&(o.clearTimeout(a.v),a.v=null),yr(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function gr(a){if(!Su(a.h)&&!a.m){a.m=!0;var u=a.Ea;F||v(),j||(F(),j=!0),b.add(u,a),a.D=0}}function xy(a,u){return Cu(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Qi(f(a.Ea,a,u),Ju(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const C=new Wt(this,this.j,a);let x=this.o;if(this.U&&(x?(x=nu(x),su(x,this.U)):x=this.U),this.u!==null||this.R||(C.J=x,x=null),this.S)e:{for(var u=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,u>4096){u=p;break e}if(u===4096||p===this.i.length-1){u=p+1;break e}}u=1e3}else u=1e3;u=Wu(this,C,u),p=pt(this.J),ue(p,"RID",a),ue(p,"CVER",22),this.G&&ue(p,"X-HTTP-Session-Id",this.G),as(this,p),x&&(this.R?u="headers="+Yi(Vu(x))+"&"+u:this.u&&ga(p,this.u,x)),fa(this.h,C),this.Ra&&ue(p,"TYPE","init"),this.S?(ue(p,"$req",u),ue(p,"SID","null"),C.U=!0,la(C,p,null)):la(C,p,u),this.I=2}}else this.I==3&&(a?qu(this,a):this.i.length==0||Su(this.h)||qu(this))};function qu(a,u){var p;u?p=u.l:p=a.V++;const g=pt(a.J);ue(g,"SID",a.M),ue(g,"RID",p),ue(g,"AID",a.K),as(a,g),a.u&&a.o&&ga(g,a.u,a.o),p=new Wt(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),u&&(a.i=u.G.concat(a.i)),u=Wu(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),fa(a.h,p),la(p,g,u)}function as(a,u){a.H&&or(a.H,function(p,g){ue(u,g,p)}),a.l&&or({},function(p,g){ue(u,g,p)})}function Wu(a,u,p){p=Math.min(a.i.length,p);const g=a.l?f(a.l.Ka,a.l,a):null;e:{var C=a.i;let Y=-1;for(;;){const ke=["count="+p];Y==-1?p>0?(Y=C[0].g,ke.push("ofs="+Y)):Y=0:ke.push("ofs="+Y);let ce=!0;for(let xe=0;xe<p;xe++){var x=C[xe].g;const mt=C[xe].map;if(x-=Y,x<0)Y=Math.max(0,C[xe].g-100),ce=!1;else try{x="req"+x+"_"||"";try{var O=mt instanceof Map?mt:Object.entries(mt);for(const[Mn,Jt]of O){let Yt=Jt;c(Jt)&&(Yt=sa(Jt)),ke.push(x+Mn+"="+encodeURIComponent(Yt))}}catch(Mn){throw ke.push(x+"type="+encodeURIComponent("_badmap")),Mn}}catch{g&&g(mt)}}if(ce){O=ke.join("&");break e}}O=void 0}return a=a.i.splice(0,p),u.G=a,O}function Gu(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;F||v(),j||(F(),j=!0),b.add(u,a),a.A=0}}function va(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Qi(f(a.Da,a),Ju(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,Ku(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Qi(f(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,qe(10),mr(this),Ku(this))};function wa(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Ku(a){a.g=new Wt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=pt(a.na);ue(u,"RID","rpc"),ue(u,"SID",a.M),ue(u,"AID",a.K),ue(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&ue(u,"TO",a.ia),ue(u,"TYPE","xmlhttp"),as(a,u),a.u&&a.o&&ga(u,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=hr(pt(u)),p.u=null,p.R=!0,Tu(p,a)}n.Va=function(){this.C!=null&&(this.C=null,mr(this),va(this),qe(19))};function yr(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Qu(a,u){var p=null;if(a.g==u){yr(a),wa(a),a.g=null;var g=2}else if(ha(a.h,u))p=u.G,Au(a.h,u),g=1;else return;if(a.I!=0){if(u.o)if(g==1){p=u.u?u.u.length:0,u=Date.now()-u.F;var C=a.D;g=lr(),ze(g,new yu(g,p)),gr(a)}else Gu(a);else if(C=u.m,C==3||C==0&&u.X>0||!(g==1&&xy(a,u)||g==2&&va(a)))switch(p&&p.length>0&&(u=a.h,u.i=u.i.concat(p)),C){case 1:Nn(a,5);break;case 4:Nn(a,10);break;case 3:Nn(a,6);break;default:Nn(a,2)}}}function Ju(a,u){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*u}function Nn(a,u){if(a.j.info("Error code "+u),u==2){var p=f(a.bb,a),g=a.Ua;const C=!g;g=new Gt(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Zi(g,"https"),hr(g),C?Ey(g.toString(),p):ky(g.toString(),p)}else qe(2);a.I=0,a.l&&a.l.pa(u),Yu(a),zu(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),qe(2)):(this.j.info("Failed to ping google.com"),qe(1))};function Yu(a){if(a.I=0,a.ja=[],a.l){const u=Ru(a.h);(u.length!=0||a.i.length!=0)&&(A(a.ja,u),A(a.ja,a.i),a.h.i.length=0,E(a.i),a.i.length=0),a.l.oa()}}function Xu(a,u,p){var g=p instanceof Gt?pt(p):new Gt(p);if(g.g!="")u&&(g.g=u+"."+g.g),es(g,g.u);else{var C=o.location;g=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;const x=new Gt(null);g&&Zi(x,g),u&&(x.g=u),C&&es(x,C),p&&(x.h=p),g=x}return p=a.G,u=a.wa,p&&u&&ue(g,p,u),ue(g,"VER",a.ka),as(a,g),g}function Zu(a,u,p){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new me(new ma({ab:p})):new me(a.ma),u.Fa(a.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ed(){}n=ed.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function vr(){}vr.prototype.g=function(a,u){return new Xe(a,u)};function Xe(a,u){Ve.call(this),this.g=new ju(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!T(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!T(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new oi(this)}y(Xe,Ve),Xe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Xe.prototype.close=function(){ya(this.g)},Xe.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=sa(a),a=p);u.i.push(new gy(u.Ya++,a)),u.I==3&&gr(u)},Xe.prototype.N=function(){this.g.l=null,delete this.j,ya(this.g),delete this.g,Xe.Z.N.call(this)};function td(a){ra.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const p in u){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}y(td,ra);function nd(){oa.call(this),this.status=1}y(nd,oa);function oi(a){this.g=a}y(oi,ed),oi.prototype.ra=function(){ze(this.g,"a")},oi.prototype.qa=function(a){ze(this.g,new td(a))},oi.prototype.pa=function(a){ze(this.g,new nd)},oi.prototype.oa=function(){ze(this.g,"b")},vr.prototype.createWebChannel=vr.prototype.g,Xe.prototype.send=Xe.prototype.o,Xe.prototype.open=Xe.prototype.m,Xe.prototype.close=Xe.prototype.close,Lp=function(){return new vr},$p=function(){return lr()},Pp=$n,tc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ur.NO_ERROR=0,ur.TIMEOUT=8,ur.HTTP_ERROR=6,Ur=ur,vu.COMPLETE="complete",xp=vu,fu.EventType=Gi,Gi.OPEN="a",Gi.CLOSE="b",Gi.ERROR="c",Gi.MESSAGE="d",Ve.prototype.listen=Ve.prototype.J,ps=fu,me.prototype.listenOnce=me.prototype.K,me.prototype.getLastError=me.prototype.Ha,me.prototype.getLastErrorCode=me.prototype.ya,me.prototype.getStatus=me.prototype.ca,me.prototype.getResponseJson=me.prototype.La,me.prototype.getResponseText=me.prototype.la,me.prototype.send=me.prototype.ea,me.prototype.setWithCredentials=me.prototype.Fa,Rp=me}).apply(typeof br<"u"?br:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let Fi="12.10.0";function zb(n){Fi=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Jn=new Dc("@firebase/firestore");function ci(){return Jn.logLevel}function B(n,...e){if(Jn.logLevel<=X.DEBUG){const t=e.map(sl);Jn.debug(`Firestore (${Fi}): ${n}`,...t)}}function zt(n,...e){if(Jn.logLevel<=X.ERROR){const t=e.map(sl);Jn.error(`Firestore (${Fi}): ${n}`,...t)}}function Yn(n,...e){if(Jn.logLevel<=X.WARN){const t=e.map(sl);Jn.warn(`Firestore (${Fi}): ${n}`,...t)}}function sl(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function J(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Dp(n,i,t)}function Dp(n,e,t){let i=`FIRESTORE (${Fi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw zt(i),new Error(i)}function pe(n,e,t,i){let s="Unexpected state";typeof t=="string"?s=t:i=t,n||Dp(e,s,i)}function ie(n,e){return n}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Lt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class mi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Np{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Fe.UNAUTHENTICATED)))}shutdown(){}}class Wb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Gb{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){pe(this.o===void 0,42304);let i=this.i;const s=l=>this.i!==i?(i=this.i,t(l)):Promise.resolve();let r=new mi;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new mi,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=r;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new mi)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(pe(typeof i.accessToken=="string",31837,{l:i}),new Np(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string",2055,{h:e}),new Fe(e)}}class Kb{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Qb{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new Kb(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Fe.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Md{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Jb{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ge(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){pe(this.o===void 0,3512);const i=r=>{r.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable((()=>i(r)))};const s=r=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>s(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?s(r):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Md(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(pe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Md(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yb(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class Mp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=Yb(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%62))}return i}}function ee(n,e){return n<e?-1:n>e?1:0}function nc(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const s=n.charAt(i),r=e.charAt(i);if(s!==r)return Ra(s)===Ra(r)?ee(s,r):Ra(s)?1:-1}return ee(n.length,e.length)}const Xb=55296,Zb=57343;function Ra(n){const e=n.charCodeAt(0);return e>=Xb&&e<=Zb}function Si(n,e,t){return n.length===e.length&&n.every(((i,s)=>t(i,e[s])))}/**
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
 */const Od="__name__";class vt{constructor(e,t,i){t===void 0?t=0:t>e.length&&J(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&J(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return vt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof vt?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=vt.compareSegments(e.get(s),t.get(s));if(r!==0)return r}return ee(e.length,t.length)}static compareSegments(e,t){const i=vt.isNumericId(e),s=vt.isNumericId(t);return i&&!s?-1:!i&&s?1:i&&s?vt.extractNumericId(e).compare(vt.extractNumericId(t)):nc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return gn.fromString(e.substring(4,e.length-2))}}class fe extends vt{construct(e,t,i){return new fe(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new z(V.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((s=>s.length>0)))}return new fe(t)}static emptyPath(){return new fe([])}}const eT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends vt{construct(e,t,i){return new Ke(e,t,i)}static isValidIdentifier(e){return eT.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Od}static keyField(){return new Ke([Od])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new z(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new z(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(i+=c,s++):(r(),s++)}if(r(),o)throw new z(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(t)}static emptyPath(){return new Ke([])}}/**
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
 */function tT(n,e,t){if(!t)throw new z(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function nT(n,e,t,i){if(e===!0&&i===!0)throw new z(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Vd(n){if(G.isDocumentKey(n))throw new z(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function iT(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function sT(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":J(12329,{type:typeof n})}function Fr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new z(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=sT(n);throw new z(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Ie(n,e){const t={typeString:n};return e&&(t.value=e),t}function Gs(n,e){if(!iT(n))throw new z(V.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const s=e[i].typeString,r="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const o=n[i];if(s&&typeof o!==s){t=`JSON field '${i}' must be a ${s}.`;break}if(r!==void 0&&o!==r.value){t=`Expected '${i}' field to equal '${r.value}'`;break}}if(t)throw new z(V.INVALID_ARGUMENT,t);return!0}/**
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
 */const Ud=-62135596800,Fd=1e6;class Te{static now(){return Te.fromMillis(Date.now())}static fromDate(e){return Te.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Fd);return new Te(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ud)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Fd}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Te._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Gs(e,Te._jsonSchema))return new Te(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ud;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Te._jsonSchemaVersion="firestore/timestamp/1.0",Te._jsonSchema={type:Ie("string",Te._jsonSchemaVersion),seconds:Ie("number"),nanoseconds:Ie("number")};/**
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
 */const Ls=-1;function rT(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=Q.fromTimestamp(i===1e9?new Te(t+1,0):new Te(t,i));return new In(s,G.empty(),e)}function oT(n){return new In(n.readTime,n.key,Ls)}class In{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new In(Q.min(),G.empty(),Ls)}static max(){return new In(Q.max(),G.empty(),Ls)}}function aT(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=G.comparator(n.documentKey,e.documentKey),t!==0?t:ee(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function $o(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==cT)throw n;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&J(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new L(((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof L?t:L.resolve(t)}catch(t){return L.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):L.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):L.reject(t)}static resolve(e){return new L(((t,i)=>{t(e)}))}static reject(e){return new L(((t,i)=>{i(e)}))}static waitFor(e){return new L(((t,i)=>{let s=0,r=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++r,o&&r===s&&t()}),(l=>i(l)))})),o=!0,r===s&&t()}))}static or(e){let t=L.resolve(!1);for(const i of e)t=t.next((s=>s?L.resolve(s):i()));return t}static forEach(e,t){const i=[];return e.forEach(((s,r)=>{i.push(t.call(this,s,r))})),this.waitFor(i)}static mapArray(e,t){return new L(((i,s)=>{const r=e.length,o=new Array(r);let c=0;for(let l=0;l<r;l++){const f=l;t(e[f]).next((m=>{o[f]=m,++c,c===r&&i(o)}),(m=>s(m)))}}))}static doWhile(e,t){return new L(((i,s)=>{const r=()=>{e()===!0?t().next((()=>{r()}),s):i()};r()}))}}function uT(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Bi(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Lo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Lo.ce=-1;/**
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
 */const dT=-1;function Do(n){return n==null}function ic(n){return n===0&&1/n==-1/0}/**
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
 */const Op="";function hT(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Bd(e)),e=fT(n.get(t),e);return Bd(e)}function fT(n,e){let t=e;const i=n.length;for(let s=0;s<i;s++){const r=n.charAt(s);switch(r){case"\0":t+="";break;case Op:t+="";break;default:t+=r}}return t}function Bd(n){return n+Op+""}/**
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
 */function Hd(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ks(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function pT(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class _e{constructor(e,t){this.comparator=e,this.root=t||Ne.EMPTY}insert(e,t){return new _e(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ne.BLACK,null,null))}remove(e){return new _e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ne.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Tr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Tr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Tr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Tr(this.root,e,this.comparator,!0)}}class Tr{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ne{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??Ne.RED,this.left=s??Ne.EMPTY,this.right=r??Ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new Ne(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ne.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw J(43730,{key:this.key,value:this.value});if(this.right.isRed())throw J(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw J(27949);return e+(this.isRed()?0:1)}}Ne.EMPTY=null,Ne.RED=!0,Ne.BLACK=!1;Ne.EMPTY=new class{constructor(){this.size=0}get key(){throw J(57766)}get value(){throw J(16141)}get color(){throw J(16727)}get left(){throw J(29726)}get right(){throw J(36894)}copy(e,t,i,s,r){return this}insert(e,t,i){return new Ne(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ce{constructor(e){this.comparator=e,this.data=new _e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new jd(this.data.getIterator())}getIteratorFrom(e){return new jd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof Ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ce(this.comparator);return t.data=e,t}}class jd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new hn([])}unionWith(e){let t=new Ce(Ke.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new hn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Si(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class Vp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Vp("Invalid base64 string: "+r):r}})(e);return new Oe(t)}static fromUint8Array(e){const t=(function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r})(e);return new Oe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Oe.EMPTY_BYTE_STRING=new Oe("");const mT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function En(n){if(pe(!!n,39018),typeof n=="string"){let e=0;const t=mT.exec(n);if(pe(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:we(n.seconds),nanos:we(n.nanos)}}function we(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function kn(n){return typeof n=="string"?Oe.fromBase64String(n):Oe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up="server_timestamp",Fp="__type__",Bp="__previous_value__",Hp="__local_write_time__";function rl(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Fp])==null?void 0:i.stringValue)===Up}function No(n){const e=n.mapValue.fields[Bp];return rl(e)?No(e):e}function Ds(n){const e=En(n.mapValue.fields[Hp].timestampValue);return new Te(e.seconds,e.nanos)}/**
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
 */class gT{constructor(e,t,i,s,r,o,c,l,f,m,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=f,this.isUsingEmulator=m,this.apiKey=y}}const lo="(default)";class Ns{constructor(e,t){this.projectId=e,this.database=t||lo}static empty(){return new Ns("","")}get isDefaultDatabase(){return this.database===lo}isEqual(e){return e instanceof Ns&&e.projectId===this.projectId&&e.database===this.database}}function yT(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new z(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ns(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT="__type__",wT="__max__",Ir={mapValue:{}},_T="__vector__",sc="value";function Sn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?rl(n)?4:TT(n)?9007199254740991:bT(n)?10:11:J(28295,{value:n})}function Pt(n,e){if(n===e)return!0;const t=Sn(n);if(t!==Sn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ds(n).isEqual(Ds(e));case 3:return(function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=En(s.timestampValue),c=En(r.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,r){return kn(s.bytesValue).isEqual(kn(r.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,r){return we(s.geoPointValue.latitude)===we(r.geoPointValue.latitude)&&we(s.geoPointValue.longitude)===we(r.geoPointValue.longitude)})(n,e);case 2:return(function(s,r){if("integerValue"in s&&"integerValue"in r)return we(s.integerValue)===we(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=we(s.doubleValue),c=we(r.doubleValue);return o===c?ic(o)===ic(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return Si(n.arrayValue.values||[],e.arrayValue.values||[],Pt);case 10:case 11:return(function(s,r){const o=s.mapValue.fields||{},c=r.mapValue.fields||{};if(Hd(o)!==Hd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Pt(o[l],c[l])))return!1;return!0})(n,e);default:return J(52216,{left:n})}}function Ms(n,e){return(n.values||[]).find((t=>Pt(t,e)))!==void 0}function Ci(n,e){if(n===e)return 0;const t=Sn(n),i=Sn(e);if(t!==i)return ee(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return ee(n.booleanValue,e.booleanValue);case 2:return(function(r,o){const c=we(r.integerValue||r.doubleValue),l=we(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return zd(n.timestampValue,e.timestampValue);case 4:return zd(Ds(n),Ds(e));case 5:return nc(n.stringValue,e.stringValue);case 6:return(function(r,o){const c=kn(r),l=kn(o);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(r,o){const c=r.split("/"),l=o.split("/");for(let f=0;f<c.length&&f<l.length;f++){const m=ee(c[f],l[f]);if(m!==0)return m}return ee(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(r,o){const c=ee(we(r.latitude),we(o.latitude));return c!==0?c:ee(we(r.longitude),we(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return qd(n.arrayValue,e.arrayValue);case 10:return(function(r,o){var w,E,A,P;const c=r.fields||{},l=o.fields||{},f=(w=c[sc])==null?void 0:w.arrayValue,m=(E=l[sc])==null?void 0:E.arrayValue,y=ee(((A=f==null?void 0:f.values)==null?void 0:A.length)||0,((P=m==null?void 0:m.values)==null?void 0:P.length)||0);return y!==0?y:qd(f,m)})(n.mapValue,e.mapValue);case 11:return(function(r,o){if(r===Ir.mapValue&&o===Ir.mapValue)return 0;if(r===Ir.mapValue)return 1;if(o===Ir.mapValue)return-1;const c=r.fields||{},l=Object.keys(c),f=o.fields||{},m=Object.keys(f);l.sort(),m.sort();for(let y=0;y<l.length&&y<m.length;++y){const w=nc(l[y],m[y]);if(w!==0)return w;const E=Ci(c[l[y]],f[m[y]]);if(E!==0)return E}return ee(l.length,m.length)})(n.mapValue,e.mapValue);default:throw J(23264,{he:t})}}function zd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ee(n,e);const t=En(n),i=En(e),s=ee(t.seconds,i.seconds);return s!==0?s:ee(t.nanos,i.nanos)}function qd(n,e){const t=n.values||[],i=e.values||[];for(let s=0;s<t.length&&s<i.length;++s){const r=Ci(t[s],i[s]);if(r)return r}return ee(t.length,i.length)}function Ai(n){return rc(n)}function rc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=En(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return kn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return G.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",s=!0;for(const r of t.values||[])s?s=!1:i+=",",i+=rc(r);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${rc(t.fields[o])}`;return s+"}"})(n.mapValue):J(61005,{value:n})}function Br(n){switch(Sn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=No(n);return e?16+Br(e):16;case 5:return 2*n.stringValue.length;case 6:return kn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((s,r)=>s+Br(r)),0)})(n.arrayValue);case 10:case 11:return(function(i){let s=0;return Ks(i.fields,((r,o)=>{s+=r.length+Br(o)})),s})(n.mapValue);default:throw J(13486,{value:n})}}function oc(n){return!!n&&"integerValue"in n}function ol(n){return!!n&&"arrayValue"in n}function Wd(n){return!!n&&"nullValue"in n}function Gd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function xa(n){return!!n&&"mapValue"in n}function bT(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[vT])==null?void 0:i.stringValue)===_T}function Is(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Ks(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=Is(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Is(n.arrayValue.values[t]);return e}return{...n}}function TT(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===wT}/**
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
 */class _t{constructor(e){this.value=e}static empty(){return new _t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!xa(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Is(t)}setAll(e){let t=Ke.emptyPath(),i={},s=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,i,s),i={},s=[],t=c.popLast()}o?i[c.lastSegment()]=Is(o):s.push(c.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());xa(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Pt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];xa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){Ks(t,((s,r)=>e[s]=r));for(const s of i)delete e[s]}clone(){return new _t(Is(this.value))}}/**
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
 */class He{constructor(e,t,i,s,r,o,c){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=c}static newInvalidDocument(e){return new He(e,0,Q.min(),Q.min(),Q.min(),_t.empty(),0)}static newFoundDocument(e,t,i,s){return new He(e,1,t,Q.min(),i,s,0)}static newNoDocument(e,t){return new He(e,2,t,Q.min(),Q.min(),_t.empty(),0)}static newUnknownDocument(e,t){return new He(e,3,t,Q.min(),Q.min(),_t.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof He&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new He(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class uo{constructor(e,t){this.position=e,this.inclusive=t}}function Kd(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],o=n.position[s];if(r.field.isKeyField()?i=G.comparator(G.fromName(o.referenceValue),t.key):i=Ci(o,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Qd(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Pt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ho{constructor(e,t="asc"){this.field=e,this.dir=t}}function IT(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class jp{}class Se extends jp{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new kT(e,t,i):t==="array-contains"?new AT(e,i):t==="in"?new RT(e,i):t==="not-in"?new xT(e,i):t==="array-contains-any"?new PT(e,i):new Se(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new ST(e,i):new CT(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ci(t,this.value)):t!==null&&Sn(this.value)===Sn(t)&&this.matchesComparison(Ci(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $t extends jp{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new $t(e,t)}matches(e){return zp(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function zp(n){return n.op==="and"}function qp(n){return ET(n)&&zp(n)}function ET(n){for(const e of n.filters)if(e instanceof $t)return!1;return!0}function ac(n){if(n instanceof Se)return n.field.canonicalString()+n.op.toString()+Ai(n.value);if(qp(n))return n.filters.map((e=>ac(e))).join(",");{const e=n.filters.map((t=>ac(t))).join(",");return`${n.op}(${e})`}}function Wp(n,e){return n instanceof Se?(function(i,s){return s instanceof Se&&i.op===s.op&&i.field.isEqual(s.field)&&Pt(i.value,s.value)})(n,e):n instanceof $t?(function(i,s){return s instanceof $t&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce(((r,o,c)=>r&&Wp(o,s.filters[c])),!0):!1})(n,e):void J(19439)}function Gp(n){return n instanceof Se?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ai(t.value)}`})(n):n instanceof $t?(function(t){return t.op.toString()+" {"+t.getFilters().map(Gp).join(" ,")+"}"})(n):"Filter"}class kT extends Se{constructor(e,t,i){super(e,t,i),this.key=G.fromName(i.referenceValue)}matches(e){const t=G.comparator(e.key,this.key);return this.matchesComparison(t)}}class ST extends Se{constructor(e,t){super(e,"in",t),this.keys=Kp("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class CT extends Se{constructor(e,t){super(e,"not-in",t),this.keys=Kp("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Kp(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((i=>G.fromName(i.referenceValue)))}class AT extends Se{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ol(t)&&Ms(t.arrayValue,this.value)}}class RT extends Se{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ms(this.value.arrayValue,t)}}class xT extends Se{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ms(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ms(this.value.arrayValue,t)}}class PT extends Se{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ol(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>Ms(this.value.arrayValue,i)))}}/**
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
 */class $T{constructor(e,t=null,i=[],s=[],r=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=c,this.Te=null}}function Jd(n,e=null,t=[],i=[],s=null,r=null,o=null){return new $T(n,e,t,i,s,r,o)}function al(n){const e=ie(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>ac(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(r){return r.field.canonicalString()+r.dir})(i))).join(","),Do(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Ai(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Ai(i))).join(",")),e.Te=t}return e.Te}function cl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!IT(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Wp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Qd(n.startAt,e.startAt)&&Qd(n.endAt,e.endAt)}function cc(n){return G.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Mo{constructor(e,t=null,i=[],s=[],r=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function LT(n,e,t,i,s,r,o,c){return new Mo(n,e,t,i,s,r,o,c)}function ll(n){return new Mo(n)}function Yd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function DT(n){return G.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function NT(n){return n.collectionGroup!==null}function Es(n){const e=ie(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const r of e.explicitOrderBy)e.Ie.push(r),t.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ce(Ke.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((f=>{f.isInequality()&&(c=c.add(f.field))}))})),c})(e).forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new ho(r,i))})),t.has(Ke.keyField().canonicalString())||e.Ie.push(new ho(Ke.keyField(),i))}return e.Ie}function At(n){const e=ie(n);return e.Ee||(e.Ee=MT(e,Es(n))),e.Ee}function MT(n,e){if(n.limitType==="F")return Jd(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const r=s.dir==="desc"?"asc":"desc";return new ho(s.field,r)}));const t=n.endAt?new uo(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new uo(n.startAt.position,n.startAt.inclusive):null;return Jd(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function lc(n,e,t){return new Mo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Oo(n,e){return cl(At(n),At(e))&&n.limitType===e.limitType}function Qp(n){return`${al(At(n))}|lt:${n.limitType}`}function li(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((s=>Gp(s))).join(", ")}]`),Do(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((s=>Ai(s))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((s=>Ai(s))).join(",")),`Target(${i})`})(At(n))}; limitType=${n.limitType})`}function Vo(n,e){return e.isFoundDocument()&&(function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):G.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)})(n,e)&&(function(i,s){for(const r of Es(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0})(n,e)&&(function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0})(n,e)&&(function(i,s){return!(i.startAt&&!(function(o,c,l){const f=Kd(o,c,l);return o.inclusive?f<=0:f<0})(i.startAt,Es(i),s)||i.endAt&&!(function(o,c,l){const f=Kd(o,c,l);return o.inclusive?f>=0:f>0})(i.endAt,Es(i),s))})(n,e)}function OT(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Jp(n){return(e,t)=>{let i=!1;for(const s of Es(n)){const r=VT(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function VT(n,e,t){const i=n.field.isKeyField()?G.comparator(e.key,t.key):(function(r,o,c){const l=o.data.field(r),f=c.data.field(r);return l!==null&&f!==null?Ci(l,f):J(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return J(19790,{direction:n.dir})}}/**
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
 */class ni{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ks(this.inner,((t,i)=>{for(const[s,r]of i)e(s,r)}))}isEmpty(){return pT(this.inner)}size(){return this.innerSize}}/**
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
 */const UT=new _e(G.comparator);function Cn(){return UT}const Yp=new _e(G.comparator);function ms(...n){let e=Yp;for(const t of n)e=e.insert(t.key,t);return e}function FT(n){let e=Yp;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function Fn(){return ks()}function Xp(){return ks()}function ks(){return new ni((n=>n.toString()),((n,e)=>n.isEqual(e)))}const BT=new Ce(G.comparator);function se(...n){let e=BT;for(const t of n)e=e.add(t);return e}const HT=new Ce(ee);function jT(){return HT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ic(e)?"-0":e}}function qT(n){return{integerValue:""+n}}/**
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
 */class Uo{constructor(){this._=void 0}}function WT(n,e,t){return n instanceof uc?(function(s,r){const o={fields:{[Fp]:{stringValue:Up},[Hp]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&rl(r)&&(r=No(r)),r&&(o.fields[Bp]=r),{mapValue:o}})(t,e):n instanceof fo?Zp(n,e):n instanceof po?em(n,e):(function(s,r){const o=KT(s,r),c=Xd(o)+Xd(s.Ae);return oc(o)&&oc(s.Ae)?qT(c):zT(s.serializer,c)})(n,e)}function GT(n,e,t){return n instanceof fo?Zp(n,e):n instanceof po?em(n,e):t}function KT(n,e){return n instanceof dc?(function(i){return oc(i)||(function(r){return!!r&&"doubleValue"in r})(i)})(e)?e:{integerValue:0}:null}class uc extends Uo{}class fo extends Uo{constructor(e){super(),this.elements=e}}function Zp(n,e){const t=tm(e);for(const i of n.elements)t.some((s=>Pt(s,i)))||t.push(i);return{arrayValue:{values:t}}}class po extends Uo{constructor(e){super(),this.elements=e}}function em(n,e){let t=tm(e);for(const i of n.elements)t=t.filter((s=>!Pt(s,i)));return{arrayValue:{values:t}}}class dc extends Uo{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Xd(n){return we(n.integerValue||n.doubleValue)}function tm(n){return ol(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function QT(n,e){return n.field.isEqual(e.field)&&(function(i,s){return i instanceof fo&&s instanceof fo||i instanceof po&&s instanceof po?Si(i.elements,s.elements,Pt):i instanceof dc&&s instanceof dc?Pt(i.Ae,s.Ae):i instanceof uc&&s instanceof uc})(n.transform,e.transform)}class jn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new jn}static exists(e){return new jn(void 0,e)}static updateTime(e){return new jn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ul{}function nm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new YT(n.key,jn.none()):new dl(n.key,n.data,jn.none());{const t=n.data,i=_t.empty();let s=new Ce(Ke.comparator);for(let r of e.fields)if(!s.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new Fo(n.key,i,new hn(s.toArray()),jn.none())}}function JT(n,e,t){n instanceof dl?(function(s,r,o){const c=s.value.clone(),l=eh(s.fieldTransforms,r,o.transformResults);c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof Fo?(function(s,r,o){if(!Hr(s.precondition,r))return void r.convertToUnknownDocument(o.version);const c=eh(s.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(im(s)),l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):(function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function Ss(n,e,t,i){return n instanceof dl?(function(r,o,c,l){if(!Hr(r.precondition,o))return c;const f=r.value.clone(),m=th(r.fieldTransforms,l,o);return f.setAll(m),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),null})(n,e,t,i):n instanceof Fo?(function(r,o,c,l){if(!Hr(r.precondition,o))return c;const f=th(r.fieldTransforms,l,o),m=o.data;return m.setAll(im(r)),m.setAll(f),o.convertToFoundDocument(o.version,m).setHasLocalMutations(),c===null?null:c.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((y=>y.field)))})(n,e,t,i):(function(r,o,c){return Hr(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function Zd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Si(i,s,((r,o)=>QT(r,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class dl extends ul{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Fo extends ul{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function im(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function eh(n,e,t){const i=new Map;pe(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const r=n[s],o=r.transform,c=e.data.field(r.field);i.set(r.field,GT(o,c,t[s]))}return i}function th(n,e,t){const i=new Map;for(const s of n){const r=s.transform,o=t.data.field(s.field);i.set(s.field,WT(r,o,e))}return i}class YT extends ul{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class XT{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&JT(r,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Ss(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Ss(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Xp();return this.mutations.forEach((s=>{const r=e.get(s.key),o=r.overlayedDocument;let c=this.applyToLocalView(o,r.mutatedFields);c=t.has(s.key)?null:c;const l=nm(o,c);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(Q.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),se())}isEqual(e){return this.batchId===e.batchId&&Si(this.mutations,e.mutations,((t,i)=>Zd(t,i)))&&Si(this.baseMutations,e.baseMutations,((t,i)=>Zd(t,i)))}}/**
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
 */class ZT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class e0{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var be,te;function sm(n){if(n===void 0)return zt("GRPC error has no .code"),V.UNKNOWN;switch(n){case be.OK:return V.OK;case be.CANCELLED:return V.CANCELLED;case be.UNKNOWN:return V.UNKNOWN;case be.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case be.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case be.INTERNAL:return V.INTERNAL;case be.UNAVAILABLE:return V.UNAVAILABLE;case be.UNAUTHENTICATED:return V.UNAUTHENTICATED;case be.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case be.NOT_FOUND:return V.NOT_FOUND;case be.ALREADY_EXISTS:return V.ALREADY_EXISTS;case be.PERMISSION_DENIED:return V.PERMISSION_DENIED;case be.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case be.ABORTED:return V.ABORTED;case be.OUT_OF_RANGE:return V.OUT_OF_RANGE;case be.UNIMPLEMENTED:return V.UNIMPLEMENTED;case be.DATA_LOSS:return V.DATA_LOSS;default:return J(39323,{code:n})}}(te=be||(be={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function t0(){return new TextEncoder}/**
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
 */const n0=new gn([4294967295,4294967295],0);function nh(n){const e=t0().encode(n),t=new Ap;return t.update(e),new Uint8Array(t.digest())}function ih(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new gn([t,i],0),new gn([s,r],0)]}class hl{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new gs(`Invalid padding: ${t}`);if(i<0)throw new gs(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new gs(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new gs(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=gn.fromNumber(this.ge)}ye(e,t,i){let s=e.add(t.multiply(gn.fromNumber(i)));return s.compare(n0)===1&&(s=new gn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=nh(e),[i,s]=ih(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(i,s,r);if(!this.we(o))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new hl(r,s,t);return i.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=nh(e),[i,s]=ih(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(i,s,r);this.be(o)}}be(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class gs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Bo{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,Qs.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Bo(Q.min(),s,new _e(ee),Cn(),se())}}class Qs{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Qs(i,t,se(),se(),se())}}/**
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
 */class jr{constructor(e,t,i,s){this.Se=e,this.removedTargetIds=t,this.key=i,this.De=s}}class rm{constructor(e,t){this.targetId=e,this.Ce=t}}class om{constructor(e,t,i=Oe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class sh{constructor(){this.ve=0,this.Fe=rh(),this.Me=Oe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=se(),t=se(),i=se();return this.Fe.forEach(((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:J(38017,{changeType:r})}})),new Qs(this.Me,this.xe,e,t,i)}Ke(){this.Oe=!1,this.Fe=rh()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,pe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class i0{constructor(e){this.Ge=e,this.ze=new Map,this.je=Cn(),this.He=Er(),this.Je=Er(),this.Ze=new _e(ee)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.We(),i.Ne||i.Ke(),i.Le(e.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.Qe(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:J(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,i=e.Ce.count,s=this.ot(t);if(s){const r=s.target;if(cc(r))if(i===0){const o=new G(r.path);this.et(t,o,He.newNoDocument(o,Q.min()))}else pe(i===1,20013,{expectedCount:i});else{const o=this._t(t);if(o!==i){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(t);const f=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,f)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=t;let o,c;try{o=kn(i).toUint8Array()}catch(l){if(l instanceof Vp)return Yn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new hl(o,s,r)}catch(l){return Yn(l instanceof gs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let s=0;return i.forEach((r=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(c)||(this.et(t,r,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((r,o)=>{const c=this.ot(o);if(c){if(r.current&&cc(c.target)){const l=new G(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,He.newNoDocument(l,e))}r.Be&&(t.set(o,r.ke()),r.Ke())}}));let i=se();this.Je.forEach(((r,o)=>{let c=!0;o.forEachWhile((l=>{const f=this.ot(l);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(i=i.add(r))})),this.je.forEach(((r,o)=>o.setReadTime(e)));const s=new Bo(e,t,this.Ze,this.je,i);return this.je=Cn(),this.He=Er(),this.Je=Er(),this.Ze=new _e(ee),s}Ye(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,i),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new sh,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new Ce(ee),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new Ce(ee),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||B("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new sh),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Er(){return new _e(G.comparator)}function rh(){return new _e(G.comparator)}const s0={asc:"ASCENDING",desc:"DESCENDING"},r0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},o0={and:"AND",or:"OR"};class a0{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function hc(n,e){return n.useProto3Json||Do(e)?e:{value:e}}function c0(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function l0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function gi(n){return pe(!!n,49232),Q.fromTimestamp((function(t){const i=En(t);return new Te(i.seconds,i.nanos)})(n))}function u0(n,e){return fc(n,e).canonicalString()}function fc(n,e){const t=(function(s){return new fe(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function am(n){const e=fe.fromString(n);return pe(hm(e),10190,{key:e.toString()}),e}function Pa(n,e){const t=am(e);if(t.get(1)!==n.databaseId.projectId)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new G(lm(t))}function cm(n,e){return u0(n.databaseId,e)}function d0(n){const e=am(n);return e.length===4?fe.emptyPath():lm(e)}function oh(n){return new fe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function lm(n){return pe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function h0(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:J(39313,{state:f})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=(function(f,m){return f.useProto3Json?(pe(m===void 0||typeof m=="string",58123),Oe.fromBase64String(m||"")):(pe(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),Oe.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(f){const m=f.code===void 0?V.UNKNOWN:sm(f.code);return new z(m,f.message||"")})(o);t=new om(i,s,r,c||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Pa(n,i.document.name),r=gi(i.document.updateTime),o=i.document.createTime?gi(i.document.createTime):Q.min(),c=new _t({mapValue:{fields:i.document.fields}}),l=He.newFoundDocument(s,r,o,c),f=i.targetIds||[],m=i.removedTargetIds||[];t=new jr(f,m,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Pa(n,i.document),r=i.readTime?gi(i.readTime):Q.min(),o=He.newNoDocument(s,r),c=i.removedTargetIds||[];t=new jr([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Pa(n,i.document),r=i.removedTargetIds||[];t=new jr([],r,s,null)}else{if(!("filter"in e))return J(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new e0(s,r),c=i.targetId;t=new rm(c,o)}}return t}function f0(n,e){return{documents:[cm(n,e.path)]}}function p0(n,e){const t={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=cm(n,s);const r=(function(f){if(f.length!==0)return dm($t.create(f,"and"))})(e.filters);r&&(t.structuredQuery.where=r);const o=(function(f){if(f.length!==0)return f.map((m=>(function(w){return{field:ui(w.field),direction:y0(w.dir)}})(m)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=hc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(f){return{before:f.inclusive,values:f.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(f){return{before:!f.inclusive,values:f.position}})(e.endAt)),{ft:t,parent:s}}function m0(n){let e=d0(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){pe(i===1,65062);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let r=[];t.where&&(r=(function(y){const w=um(y);return w instanceof $t&&qp(w)?w.getFilters():[w]})(t.where));let o=[];t.orderBy&&(o=(function(y){return y.map((w=>(function(A){return new ho(di(A.field),(function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(A.direction))})(w)))})(t.orderBy));let c=null;t.limit&&(c=(function(y){let w;return w=typeof y=="object"?y.value:y,Do(w)?null:w})(t.limit));let l=null;t.startAt&&(l=(function(y){const w=!!y.before,E=y.values||[];return new uo(E,w)})(t.startAt));let f=null;return t.endAt&&(f=(function(y){const w=!y.before,E=y.values||[];return new uo(E,w)})(t.endAt)),LT(e,s,o,r,c,"F",l,f)}function g0(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function um(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=di(t.unaryFilter.field);return Se.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=di(t.unaryFilter.field);return Se.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=di(t.unaryFilter.field);return Se.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=di(t.unaryFilter.field);return Se.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return J(61313);default:return J(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Se.create(di(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return J(58110);default:return J(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return $t.create(t.compositeFilter.filters.map((i=>um(i))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return J(1026)}})(t.compositeFilter.op))})(n):J(30097,{filter:n})}function y0(n){return s0[n]}function v0(n){return r0[n]}function w0(n){return o0[n]}function ui(n){return{fieldPath:n.canonicalString()}}function di(n){return Ke.fromServerFormat(n.fieldPath)}function dm(n){return n instanceof Se?(function(t){if(t.op==="=="){if(Gd(t.value))return{unaryFilter:{field:ui(t.field),op:"IS_NAN"}};if(Wd(t.value))return{unaryFilter:{field:ui(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Gd(t.value))return{unaryFilter:{field:ui(t.field),op:"IS_NOT_NAN"}};if(Wd(t.value))return{unaryFilter:{field:ui(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ui(t.field),op:v0(t.op),value:t.value}}})(n):n instanceof $t?(function(t){const i=t.getFilters().map((s=>dm(s)));return i.length===1?i[0]:{compositeFilter:{op:w0(t.op),filters:i}}})(n):J(54877,{filter:n})}function hm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class fn{constructor(e,t,i,s,r=Q.min(),o=Q.min(),c=Oe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new fn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new fn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class _0{constructor(e){this.yt=e}}function b0(n){const e=m0({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?lc(e,e.limit,"L"):e}/**
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
 */class T0{constructor(){this.Sn=new I0}addToCollectionParentIndex(e,t){return this.Sn.add(t),L.resolve()}getCollectionParents(e,t){return L.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return L.resolve()}deleteFieldIndex(e,t){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,t){return L.resolve()}getDocumentsMatchingTarget(e,t){return L.resolve(null)}getIndexType(e,t){return L.resolve(0)}getFieldIndexes(e,t){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,t){return L.resolve(In.min())}getMinOffsetFromCollectionGroup(e,t){return L.resolve(In.min())}updateCollectionGroup(e,t,i){return L.resolve()}updateIndexEntries(e,t){return L.resolve()}}class I0{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new Ce(fe.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Ce(fe.comparator)).toArray()}}/**
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
 */const ah={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},fm=41943040;class Qe{static withCacheSize(e){return new Qe(e,Qe.DEFAULT_COLLECTION_PERCENTILE,Qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */Qe.DEFAULT_COLLECTION_PERCENTILE=10,Qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Qe.DEFAULT=new Qe(fm,Qe.DEFAULT_COLLECTION_PERCENTILE,Qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Qe.DISABLED=new Qe(-1,0,0);/**
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
 */class Ri{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Ri(0)}static ar(){return new Ri(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch="LruGarbageCollector",E0=1048576;function lh([n,e],[t,i]){const s=ee(n,t);return s===0?ee(e,i):s}class k0{constructor(e){this.Pr=e,this.buffer=new Ce(lh),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();lh(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class S0{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){B(ch,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Bi(t)?B(ch,"Ignoring IndexedDB error during garbage collection: ",t):await $o(t)}await this.Ar(3e5)}))}}class C0{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return L.resolve(Lo.ce);const i=new k0(t);return this.Vr.forEachTarget(e,(s=>i.Er(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>i.Er(s))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(ah)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ah):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let i,s,r,o,c,l,f;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((y=>(y>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),s=this.params.maximumSequenceNumbersToCollect):s=y,o=Date.now(),this.nthSequenceNumber(e,s)))).next((y=>(i=y,c=Date.now(),this.removeTargets(e,i,t)))).next((y=>(r=y,l=Date.now(),this.removeOrphanedDocuments(e,i)))).next((y=>(f=Date.now(),ci()<=X.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-m}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${r} targets in `+(l-c)+`ms
	Removed ${y} documents in `+(f-l)+`ms
Total Duration: ${f-m}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:y}))))}}function A0(n,e){return new C0(n,e)}/**
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
 */class R0{constructor(){this.changes=new ni((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,He.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?L.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class x0{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class P0{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(i=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(i!==null&&Ss(i.mutation,s,hn.empty(),Te.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,se()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=se()){const s=Fn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,i).next((r=>{let o=ms();return r.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const i=Fn();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,se())))}populateOverlays(e,t,i){const s=[];return i.forEach((r=>{t.has(r)||s.push(r)})),this.documentOverlayCache.getOverlays(e,s).next((r=>{r.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,i,s){let r=Cn();const o=ks(),c=(function(){return ks()})();return t.forEach(((l,f)=>{const m=i.get(f.key);s.has(f.key)&&(m===void 0||m.mutation instanceof Fo)?r=r.insert(f.key,f):m!==void 0?(o.set(f.key,m.mutation.getFieldMask()),Ss(m.mutation,f,m.mutation.getFieldMask(),Te.now())):o.set(f.key,hn.empty())})),this.recalculateAndSaveOverlays(e,r).next((l=>(l.forEach(((f,m)=>o.set(f,m))),t.forEach(((f,m)=>c.set(f,new x0(m,o.get(f)??null)))),c)))}recalculateAndSaveOverlays(e,t){const i=ks();let s=new _e(((o,c)=>o-c)),r=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((l=>{const f=t.get(l);if(f===null)return;let m=i.get(l)||hn.empty();m=c.applyToLocalView(f,m),i.set(l,m);const y=(s.get(c.batchId)||se()).add(l);s=s.insert(c.batchId,y)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),f=l.key,m=l.value,y=Xp();m.forEach((w=>{if(!r.has(w)){const E=nm(t.get(w),i.get(w));E!==null&&y.set(w,E),r=r.add(w)}})),o.push(this.documentOverlayCache.saveOverlays(e,f,y))}return L.waitFor(o)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,s){return DT(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):NT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,s):this.getDocumentsMatchingCollectionQuery(e,t,i,s)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next((r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-r.size):L.resolve(Fn());let c=Ls,l=r;return o.next((f=>L.forEach(f,((m,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),r.get(m)?L.resolve():this.remoteDocumentCache.getEntry(e,m).next((w=>{l=l.insert(m,w)}))))).next((()=>this.populateOverlays(e,f,r))).next((()=>this.computeViews(e,l,f,se()))).next((m=>({batchId:c,changes:FT(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new G(t)).next((i=>{let s=ms();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,s){const r=t.collectionGroup;let o=ms();return this.indexManager.getCollectionParents(e,r).next((c=>L.forEach(c,(l=>{const f=(function(y,w){return new Mo(w,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)})(t,l.child(r));return this.getDocumentsMatchingCollectionQuery(e,f,i,s).next((m=>{m.forEach(((y,w)=>{o=o.insert(y,w)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,r,s)))).next((o=>{r.forEach(((l,f)=>{const m=f.getKey();o.get(m)===null&&(o=o.insert(m,He.newInvalidDocument(m)))}));let c=ms();return o.forEach(((l,f)=>{const m=r.get(l);m!==void 0&&Ss(m.mutation,f,hn.empty(),Te.now()),Vo(t,f)&&(c=c.insert(l,f))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return L.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:gi(s.createTime)}})(t)),L.resolve()}getNamedQuery(e,t){return L.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(s){return{name:s.name,query:b0(s.bundledQuery),readTime:gi(s.readTime)}})(t)),L.resolve()}}/**
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
 */class L0{constructor(){this.overlays=new _e(G.comparator),this.Lr=new Map}getOverlay(e,t){return L.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Fn();return L.forEach(t,(s=>this.getOverlay(e,s).next((r=>{r!==null&&i.set(s,r)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((s,r)=>{this.bt(e,t,r)})),L.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.Lr.get(i);return s!==void 0&&(s.forEach((r=>this.overlays=this.overlays.remove(r))),this.Lr.delete(i)),L.resolve()}getOverlaysForCollection(e,t,i){const s=Fn(),r=t.length+1,o=new G(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,f=l.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let r=new _e(((f,m)=>f-m));const o=this.overlays.getIterator();for(;o.hasNext();){const f=o.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>i){let m=r.get(f.largestBatchId);m===null&&(m=Fn(),r=r.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const c=Fn(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((f,m)=>c.set(f,m))),!(c.size()>=s)););return L.resolve(c)}bt(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(i.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new ZT(t,i));let r=this.Lr.get(t);r===void 0&&(r=se(),this.Lr.set(t,r)),this.Lr.set(t,r.add(i.key))}}/**
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
 */class D0{constructor(){this.sessionToken=Oe.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,L.resolve()}}/**
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
 */class fl{constructor(){this.kr=new Ce($e.Kr),this.qr=new Ce($e.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const i=new $e(e,t);this.kr=this.kr.add(i),this.qr=this.qr.add(i)}$r(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new $e(e,t))}Qr(e,t){e.forEach((i=>this.removeReference(i,t)))}Gr(e){const t=new G(new fe([])),i=new $e(t,e),s=new $e(t,e+1),r=[];return this.qr.forEachInRange([i,s],(o=>{this.Wr(o),r.push(o.key)})),r}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new G(new fe([])),i=new $e(t,e),s=new $e(t,e+1);let r=se();return this.qr.forEachInRange([i,s],(o=>{r=r.add(o.key)})),r}containsKey(e){const t=new $e(e,0),i=this.kr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class $e{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return G.comparator(e.key,t.key)||ee(e.Hr,t.Hr)}static Ur(e,t){return ee(e.Hr,t.Hr)||G.comparator(e.key,t.key)}}/**
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
 */class N0{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new Ce($e.Kr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const r=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new XT(r,t,i,s);this.mutationQueue.push(o);for(const c of s)this.Jr=this.Jr.add(new $e(c.key,r)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,t){return L.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.Xr(i),r=s<0?0:s;return L.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?dT:this.Yn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new $e(t,0),s=new $e(t,Number.POSITIVE_INFINITY),r=[];return this.Jr.forEachInRange([i,s],(o=>{const c=this.Zr(o.Hr);r.push(c)})),L.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Ce(ee);return t.forEach((s=>{const r=new $e(s,0),o=new $e(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([r,o],(c=>{i=i.add(c.Hr)}))})),L.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;G.isDocumentKey(r)||(r=r.child(""));const o=new $e(new G(r),0);let c=new Ce(ee);return this.Jr.forEachWhile((l=>{const f=l.key.path;return!!i.isPrefixOf(f)&&(f.length===s&&(c=c.add(l.Hr)),!0)}),o),L.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((i=>{const s=this.Zr(i);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){pe(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Jr;return L.forEach(t.mutations,(s=>{const r=new $e(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Jr=i}))}nr(e){}containsKey(e,t){const i=new $e(t,0),s=this.Jr.firstAfterOrEqual(i);return L.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class M0{constructor(e){this.ti=e,this.docs=(function(){return new _e(G.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),r=s?s.size:0,o=this.ti(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return L.resolve(i?i.document.mutableCopy():He.newInvalidDocument(t))}getEntries(e,t){let i=Cn();return t.forEach((s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():He.newInvalidDocument(s))})),L.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let r=Cn();const o=t.path,c=new G(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:f,value:{document:m}}=l.getNext();if(!o.isPrefixOf(f.path))break;f.path.length>o.length+1||aT(oT(m),i)<=0||(s.has(m.key)||Vo(t,m))&&(r=r.insert(m.key,m.mutableCopy()))}return L.resolve(r)}getAllFromCollectionGroup(e,t,i,s){J(9500)}ni(e,t){return L.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new O0(this)}getSize(e){return L.resolve(this.size)}}class O0 extends R0{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(i)})),L.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class V0{constructor(e){this.persistence=e,this.ri=new ni((t=>al(t)),cl),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.ii=0,this.si=new fl,this.targetCount=0,this.oi=Ri._r()}forEachTarget(e,t){return this.ri.forEach(((i,s)=>t(s))),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.ii&&(this.ii=t),L.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Ri(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,L.resolve()}updateTargetData(e,t){return this.lr(t),L.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.ri.forEach(((o,c)=>{c.sequenceNumber<=t&&i.get(c.targetId)===null&&(this.ri.delete(o),r.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),L.waitFor(r).next((()=>s))}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,t){const i=this.ri.get(t)||null;return L.resolve(i)}addMatchingKeys(e,t,i){return this.si.$r(t,i),L.resolve()}removeMatchingKeys(e,t,i){this.si.Qr(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach((o=>{r.push(s.markPotentiallyOrphaned(e,o))})),L.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),L.resolve()}getMatchingKeysForTargetId(e,t){const i=this.si.jr(t);return L.resolve(i)}containsKey(e,t){return L.resolve(this.si.containsKey(t))}}/**
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
 */class pm{constructor(e,t){this._i={},this.overlays={},this.ai=new Lo(0),this.ui=!1,this.ui=!0,this.ci=new D0,this.referenceDelegate=e(this),this.li=new V0(this),this.indexManager=new T0,this.remoteDocumentCache=(function(s){return new M0(s)})((i=>this.referenceDelegate.hi(i))),this.serializer=new _0(t),this.Pi=new $0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new L0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this._i[e.toKey()];return i||(i=new N0(t,this.referenceDelegate),this._i[e.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,i){B("MemoryPersistence","Starting transaction:",e);const s=new U0(this.ai.next());return this.referenceDelegate.Ti(),i(s).next((r=>this.referenceDelegate.Ii(s).next((()=>r)))).toPromise().then((r=>(s.raiseOnCommittedEvent(),r)))}Ei(e,t){return L.or(Object.values(this._i).map((i=>()=>i.containsKey(e,t))))}}class U0 extends lT{constructor(e){super(),this.currentSequenceNumber=e}}class pl{constructor(e){this.persistence=e,this.Ri=new fl,this.Ai=null}static Vi(e){return new pl(e)}get di(){if(this.Ai)return this.Ai;throw J(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.di.delete(i.toString()),L.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.di.add(i.toString()),L.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),L.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((s=>this.di.add(s.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((r=>this.di.add(r.toString())))})).next((()=>i.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.di,(i=>{const s=G.fromPath(i);return this.mi(e,s).next((r=>{r||t.removeEntry(s,Q.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((i=>{i?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return L.or([()=>L.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class mo{constructor(e,t){this.persistence=e,this.fi=new ni((i=>hT(i.path)),((i,s)=>i.isEqual(s))),this.garbageCollector=A0(this,t)}static Vi(e,t){return new mo(e,t)}Ti(){}Ii(e){return L.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((s=>i+s))))}pr(e){let t=0;return this.mr(e,(i=>{t++})).next((()=>t))}mr(e,t){return L.forEach(this.fi,((i,s)=>this.wr(e,i,s).next((r=>r?L.resolve():t(s)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.ni(e,(o=>this.wr(e,o,t).next((c=>{c||(i++,r.removeEntry(o,Q.min()))})))).next((()=>r.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),L.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),L.resolve()}removeReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),L.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Br(e.data.value)),t}wr(e,t,i){return L.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return L.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class F0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class B0{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Xy()?8:uT(je())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,s){const r={result:null};return this.gs(e,t).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ps(e,t,s,i).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new F0;return this.ys(e,t,o).next((c=>{if(r.result=c,this.As)return this.ws(e,t,o,c.size)}))})).next((()=>r.result))}ws(e,t,i,s){return i.documentReadCount<this.Vs?(ci()<=X.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",li(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(ci()<=X.DEBUG&&B("QueryEngine","Query:",li(t),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.ds*s?(ci()<=X.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",li(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,At(t))):L.resolve())}gs(e,t){if(Yd(t))return L.resolve(null);let i=At(t);return this.indexManager.getIndexType(e,i).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=lc(t,null,"F"),i=At(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((r=>{const o=se(...r);return this.fs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,i).next((l=>{const f=this.bs(t,c);return this.Ss(t,f,o,l.readTime)?this.gs(e,lc(t,null,"F")):this.Ds(e,f,t,l)}))))})))))}ps(e,t,i,s){return Yd(t)||s.isEqual(Q.min())?L.resolve(null):this.fs.getDocuments(e,i).next((r=>{const o=this.bs(t,r);return this.Ss(t,o,i,s)?L.resolve(null):(ci()<=X.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),li(t)),this.Ds(e,o,t,rT(s,Ls)).next((c=>c)))}))}bs(e,t){let i=new Ce(Jp(e));return t.forEach(((s,r)=>{Vo(e,r)&&(i=i.add(r))})),i}Ss(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ys(e,t,i){return ci()<=X.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",li(t)),this.fs.getDocumentsMatchingQuery(e,t,In.min(),i)}Ds(e,t,i,s){return this.fs.getDocumentsMatchingQuery(e,i,s).next((r=>(t.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl="LocalStore",H0=3e8;class j0{constructor(e,t,i,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new _e(ee),this.Fs=new ni((r=>al(r)),cl),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(i)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new P0(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function z0(n,e,t,i){return new j0(n,e,t,i)}async function mm(n,e){const t=ie(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next((r=>(s=r,t.Os(e),t.mutationQueue.getAllMutationBatches(i)))).next((r=>{const o=[],c=[];let l=se();for(const f of s){o.push(f.batchId);for(const m of f.mutations)l=l.add(m.key)}for(const f of r){c.push(f.batchId);for(const m of f.mutations)l=l.add(m.key)}return t.localDocuments.getDocuments(i,l).next((f=>({Ns:f,removedBatchIds:o,addedBatchIds:c})))}))}))}function gm(n){const e=ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function q0(n,e){const t=ie(n),i=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const c=[];e.targetChanges.forEach(((m,y)=>{const w=s.get(y);if(!w)return;c.push(t.li.removeMatchingKeys(r,m.removedDocuments,y).next((()=>t.li.addMatchingKeys(r,m.addedDocuments,y))));let E=w.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(y)!==null?E=E.withResumeToken(Oe.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):m.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(m.resumeToken,i)),s=s.insert(y,E),(function(P,$,U){return P.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=H0?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0})(w,E,m)&&c.push(t.li.updateTargetData(r,E))}));let l=Cn(),f=se();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(r,m))})),c.push(W0(r,o,e.documentUpdates).next((m=>{l=m.Bs,f=m.Ls}))),!i.isEqual(Q.min())){const m=t.li.getLastRemoteSnapshotVersion(r).next((y=>t.li.setTargetsMetadata(r,r.currentSequenceNumber,i)));c.push(m)}return L.waitFor(c).next((()=>o.apply(r))).next((()=>t.localDocuments.getLocalViewOfDocuments(r,l,f))).next((()=>l))})).then((r=>(t.vs=s,r)))}function W0(n,e,t){let i=se(),s=se();return t.forEach((r=>i=i.add(r))),e.getEntries(n,i).next((r=>{let o=Cn();return t.forEach(((c,l)=>{const f=r.get(c);l.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(Q.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!f.isValidDocument()||l.version.compareTo(f.version)>0||l.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):B(gl,"Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",l.version)})),{Bs:o,Ls:s}}))}function G0(n,e){const t=ie(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let s;return t.li.getTargetData(i,e).next((r=>r?(s=r,L.resolve(s)):t.li.allocateTargetId(i).next((o=>(s=new fn(e,o,"TargetPurposeListen",i.currentSequenceNumber),t.li.addTargetData(i,s).next((()=>s)))))))})).then((i=>{const s=t.vs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(i.targetId,i),t.Fs.set(e,i.targetId)),i}))}async function pc(n,e,t){const i=ie(n),s=i.vs.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,(o=>i.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Bi(o))throw o;B(gl,`Failed to update sequence numbers for target ${e}: ${o}`)}i.vs=i.vs.remove(e),i.Fs.delete(s.target)}function uh(n,e,t){const i=ie(n);let s=Q.min(),r=se();return i.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,f,m){const y=ie(l),w=y.Fs.get(m);return w!==void 0?L.resolve(y.vs.get(w)):y.li.getTargetData(f,m)})(i,o,At(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(o,c.targetId).next((l=>{r=l}))})).next((()=>i.Cs.getDocumentsMatchingQuery(o,e,t?s:Q.min(),t?r:se()))).next((c=>(K0(i,OT(e),c),{documents:c,ks:r})))))}function K0(n,e,t){let i=n.Ms.get(e)||Q.min();t.forEach(((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)})),n.Ms.set(e,i)}class dh{constructor(){this.activeTargetIds=jT()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Q0{constructor(){this.vo=new dh,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,i){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new dh,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class J0{Mo(e){}shutdown(){}}/**
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
 */const hh="ConnectivityMonitor";class fh{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){B(hh,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){B(hh,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let kr=null;function mc(){return kr===null?kr=(function(){return 268435456+Math.round(2147483648*Math.random())})():kr++,"0x"+kr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a="RestConnection",Y0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class X0{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${i}/databases/${s}`,this.$o=this.databaseId.database===lo?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(e,t,i,s,r){const o=mc(),c=this.Qo(e,t.toUriEncodedString());B($a,`Sending RPC '${e}' ${o}:`,c,i);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,r);const{host:f}=new URL(c),m=Rn(f);return this.zo(e,c,l,i,m).then((y=>(B($a,`Received RPC '${e}' ${o}: `,y),y)),(y=>{throw Yn($a,`RPC '${e}' ${o} failed with error: `,y,"url: ",c,"request:",i),y}))}jo(e,t,i,s,r,o){return this.Wo(e,t,i,s,r)}Go(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Fi})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,r)=>e[r]=s)),i&&i.headers.forEach(((s,r)=>e[r]=s))}Qo(e,t){const i=Y0[e];let s=`${this.qo}/v1/${t}:${i}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class Z0{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Ue="WebChannelConnection",cs=(n,e,t)=>{n.listen(e,(i=>{try{t(i)}catch(s){setTimeout((()=>{throw s}),0)}}))};class yi extends X0{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!yi.c_){const e=$p();cs(e,Pp.STAT_EVENT,(t=>{t.stat===tc.PROXY?B(Ue,"STAT_EVENT: detected buffering proxy"):t.stat===tc.NOPROXY&&B(Ue,"STAT_EVENT: detected no buffering proxy")})),yi.c_=!0}}zo(e,t,i,s,r){const o=mc();return new Promise(((c,l)=>{const f=new Rp;f.setWithCredentials(!0),f.listenOnce(xp.COMPLETE,(()=>{try{switch(f.getLastErrorCode()){case Ur.NO_ERROR:const y=f.getResponseJson();B(Ue,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(y)),c(y);break;case Ur.TIMEOUT:B(Ue,`RPC '${e}' ${o} timed out`),l(new z(V.DEADLINE_EXCEEDED,"Request time out"));break;case Ur.HTTP_ERROR:const w=f.getStatus();if(B(Ue,`RPC '${e}' ${o} failed with status:`,w,"response text:",f.getResponseText()),w>0){let E=f.getResponseJson();Array.isArray(E)&&(E=E[0]);const A=E==null?void 0:E.error;if(A&&A.status&&A.message){const P=(function(U){const N=U.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(N)>=0?N:V.UNKNOWN})(A.status);l(new z(P,A.message))}else l(new z(V.UNKNOWN,"Server responded with status "+f.getStatus()))}else l(new z(V.UNAVAILABLE,"Connection failed."));break;default:J(9055,{l_:e,streamId:o,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{B(Ue,`RPC '${e}' ${o} completed.`)}}));const m=JSON.stringify(s);B(Ue,`RPC '${e}' ${o} sending request:`,s),f.send(t,"POST",m,i,15)}))}T_(e,t,i){const s=mc(),r=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,i),c.encodeInitMessageHeaders=!0;const f=r.join("");B(Ue,`Creating RPC '${e}' stream ${s}: ${f}`,c);const m=o.createWebChannel(f,c);this.I_(m);let y=!1,w=!1;const E=new Z0({Ho:A=>{w?B(Ue,`Not sending because RPC '${e}' stream ${s} is closed:`,A):(y||(B(Ue,`Opening RPC '${e}' stream ${s} transport.`),m.open(),y=!0),B(Ue,`RPC '${e}' stream ${s} sending:`,A),m.send(A))},Jo:()=>m.close()});return cs(m,ps.EventType.OPEN,(()=>{w||(B(Ue,`RPC '${e}' stream ${s} transport opened.`),E.i_())})),cs(m,ps.EventType.CLOSE,(()=>{w||(w=!0,B(Ue,`RPC '${e}' stream ${s} transport closed`),E.o_(),this.E_(m))})),cs(m,ps.EventType.ERROR,(A=>{w||(w=!0,Yn(Ue,`RPC '${e}' stream ${s} transport errored. Name:`,A.name,"Message:",A.message),E.o_(new z(V.UNAVAILABLE,"The operation could not be completed")))})),cs(m,ps.EventType.MESSAGE,(A=>{var P;if(!w){const $=A.data[0];pe(!!$,16349);const U=$,N=(U==null?void 0:U.error)||((P=U[0])==null?void 0:P.error);if(N){B(Ue,`RPC '${e}' stream ${s} received error:`,N);const M=N.status;let D=(function(b){const v=be[b];if(v!==void 0)return sm(v)})(M),F=N.message;M==="NOT_FOUND"&&F.includes("database")&&F.includes("does not exist")&&F.includes(this.databaseId.database)&&Yn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),D===void 0&&(D=V.INTERNAL,F="Unknown error status: "+M+" with message "+N.message),w=!0,E.o_(new z(D,F)),m.close()}else B(Ue,`RPC '${e}' stream ${s} received:`,$),E.__($)}})),yi.u_(),setTimeout((()=>{E.s_()}),0),E}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,i){super.Go(e,t,i),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Lp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(n){return new yi(n)}function La(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(n){return new a0(n,!0)}/**
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
 */yi.c_=!1;class vm{constructor(e,t,i=1e3,s=1.5,r=6e4){this.Ci=e,this.timerId=t,this.R_=i,this.A_=s,this.V_=r,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-i);s>0&&B("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const ph="PersistentStream";class tI{constructor(e,t,i,s,r,o,c,l){this.Ci=e,this.b_=i,this.S_=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new vm(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(zt(t.toString()),zt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,s])=>{this.D_===t&&this.G_(i,s)}),(i=>{e((()=>{const s=new z(V.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(s)}))}))}G_(e,t){const i=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.Yo((()=>{i((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{i((()=>this.z_(s)))})),this.stream.onMessage((s=>{i((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return B(ph,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(B(ph,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class nI extends tI{constructor(e,t,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=h0(this.serializer,e),i=(function(r){if(!("targetChange"in r))return Q.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?gi(o.readTime):Q.min()})(e);return this.listener.J_(t,i)}Z_(e){const t={};t.database=oh(this.serializer),t.addTarget=(function(r,o){let c;const l=o.target;if(c=cc(l)?{documents:f0(r,l)}:{query:p0(r,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=l0(r,o.resumeToken);const f=hc(r,o.expectedCount);f!==null&&(c.expectedCount=f)}else if(o.snapshotVersion.compareTo(Q.min())>0){c.readTime=c0(r,o.snapshotVersion.toTimestamp());const f=hc(r,o.expectedCount);f!==null&&(c.expectedCount=f)}return c})(this.serializer,e);const i=g0(this.serializer,e);i&&(t.labels=i),this.K_(t)}X_(e){const t={};t.database=oh(this.serializer),t.removeTarget=e,this.K_(t)}}/**
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
 */class iI{}class sI extends iI{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Wo(e,fc(t,i),s,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new z(V.UNKNOWN,r.toString())}))}jo(e,t,i,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.jo(e,fc(t,i),s,o,c,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(V.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function rI(n,e,t,i){return new sI(n,e,t,i)}class oI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(zt(t),this.aa=!1):B("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const xi="RemoteStore";class aI{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=r,this.Aa.Mo((o=>{i.enqueueAndForget((async()=>{Ys(this)&&(B(xi,"Restarting streams for network reachability change."),await(async function(l){const f=ie(l);f.Ea.add(4),await Js(f),f.Va.set("Unknown"),f.Ea.delete(4),await Ho(f)})(this))}))})),this.Va=new oI(i,s)}}async function Ho(n){if(Ys(n))for(const e of n.Ra)await e(!0)}async function Js(n){for(const e of n.Ra)await e(!1)}function wm(n,e){const t=ie(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),_l(t)?wl(t):Hi(t).O_()&&vl(t,e))}function yl(n,e){const t=ie(n),i=Hi(t);t.Ia.delete(e),i.O_()&&_m(t,e),t.Ia.size===0&&(i.O_()?i.L_():Ys(t)&&t.Va.set("Unknown"))}function vl(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Hi(n).Z_(e)}function _m(n,e){n.da.$e(e),Hi(n).X_(e)}function wl(n){n.da=new i0({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Hi(n).start(),n.Va.ua()}function _l(n){return Ys(n)&&!Hi(n).x_()&&n.Ia.size>0}function Ys(n){return ie(n).Ea.size===0}function bm(n){n.da=void 0}async function cI(n){n.Va.set("Online")}async function lI(n){n.Ia.forEach(((e,t)=>{vl(n,e)}))}async function uI(n,e){bm(n),_l(n)?(n.Va.ha(e),wl(n)):n.Va.set("Unknown")}async function dI(n,e,t){if(n.Va.set("Online"),e instanceof om&&e.state===2&&e.cause)try{await(async function(s,r){const o=r.cause;for(const c of r.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.da.removeTarget(c))})(n,e)}catch(i){B(xi,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await mh(n,i)}else if(e instanceof jr?n.da.Xe(e):e instanceof rm?n.da.st(e):n.da.tt(e),!t.isEqual(Q.min()))try{const i=await gm(n.localStore);t.compareTo(i)>=0&&await(function(r,o){const c=r.da.Tt(o);return c.targetChanges.forEach(((l,f)=>{if(l.resumeToken.approximateByteSize()>0){const m=r.Ia.get(f);m&&r.Ia.set(f,m.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,f)=>{const m=r.Ia.get(l);if(!m)return;r.Ia.set(l,m.withResumeToken(Oe.EMPTY_BYTE_STRING,m.snapshotVersion)),_m(r,l);const y=new fn(m.target,l,f,m.sequenceNumber);vl(r,y)})),r.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(i){B(xi,"Failed to raise snapshot:",i),await mh(n,i)}}async function mh(n,e,t){if(!Bi(e))throw e;n.Ea.add(1),await Js(n),n.Va.set("Offline"),t||(t=()=>gm(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{B(xi,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Ho(n)}))}async function gh(n,e){const t=ie(n);t.asyncQueue.verifyOperationInProgress(),B(xi,"RemoteStore received new credentials");const i=Ys(t);t.Ea.add(3),await Js(t),i&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Ho(t)}async function hI(n,e){const t=ie(n);e?(t.Ea.delete(2),await Ho(t)):e||(t.Ea.add(2),await Js(t),t.Va.set("Unknown"))}function Hi(n){return n.ma||(n.ma=(function(t,i,s){const r=ie(t);return r.sa(),new nI(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Zo:cI.bind(null,n),Yo:lI.bind(null,n),t_:uI.bind(null,n),J_:dI.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),_l(n)?wl(n):n.Va.set("Unknown")):(await n.ma.stop(),bm(n))}))),n.ma}/**
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
 */class bl{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new mi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,r){const o=Date.now()+i,c=new bl(e,t,o,s,r);return c.start(i),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tm(n,e){if(zt("AsyncQueue",`${e}: ${n}`),Bi(n))return new z(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class vi{static emptySet(e){return new vi(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||G.comparator(t.key,i.key):(t,i)=>G.comparator(t.key,i.key),this.keyedMap=ms(),this.sortedSet=new _e(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof vi)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new vi;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class yh{constructor(){this.ga=new _e(G.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):J(63341,{Vt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Pi{constructor(e,t,i,s,r,o,c,l,f){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=f}static fromInitialDocuments(e,t,i,s,r){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new Pi(e,t,vi.emptySet(t),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Oo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
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
 */class fI{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class pI{constructor(){this.queries=vh(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const s=ie(t),r=s.queries;s.queries=vh(),r.forEach(((o,c)=>{for(const l of c.ba)l.onError(i)}))})(this,new z(V.ABORTED,"Firestore shutting down"))}}function vh(){return new ni((n=>Qp(n)),Oo)}async function mI(n,e){const t=ie(n);let i=3;const s=e.query;let r=t.queries.get(s);r?!r.Sa()&&e.Da()&&(i=2):(r=new fI,i=e.Da()?0:1);try{switch(i){case 0:r.wa=await t.onListen(s,!0);break;case 1:r.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=Tm(o,`Initialization of query '${li(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,r),r.ba.push(e),e.va(t.onlineState),r.wa&&e.Fa(r.wa)&&Tl(t)}async function gI(n,e){const t=ie(n),i=e.query;let s=3;const r=t.queries.get(i);if(r){const o=r.ba.indexOf(e);o>=0&&(r.ba.splice(o,1),r.ba.length===0?s=e.Da()?0:1:!r.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function yI(n,e){const t=ie(n);let i=!1;for(const s of e){const r=s.query,o=t.queries.get(r);if(o){for(const c of o.ba)c.Fa(s)&&(i=!0);o.wa=s}}i&&Tl(t)}function vI(n,e,t){const i=ie(n),s=i.queries.get(e);if(s)for(const r of s.ba)r.onError(t);i.queries.delete(e)}function Tl(n){n.Ca.forEach((e=>{e.next()}))}var gc,wh;(wh=gc||(gc={})).Ma="default",wh.Cache="cache";class wI{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Pi(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.Ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Pi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==gc.Cache}}/**
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
 */class Im{constructor(e){this.key=e}}class Em{constructor(e){this.key=e}}class _I{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=se(),this.mutatedKeys=se(),this.eu=Jp(e),this.tu=new vi(this.eu)}get nu(){return this.Za}ru(e,t){const i=t?t.iu:new yh,s=t?t.tu:this.tu;let r=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((m,y)=>{const w=s.get(m),E=Vo(this.query,y)?y:null,A=!!w&&this.mutatedKeys.has(w.key),P=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let $=!1;w&&E?w.data.isEqual(E.data)?A!==P&&(i.track({type:3,doc:E}),$=!0):this.su(w,E)||(i.track({type:2,doc:E}),$=!0,(l&&this.eu(E,l)>0||f&&this.eu(E,f)<0)&&(c=!0)):!w&&E?(i.track({type:0,doc:E}),$=!0):w&&!E&&(i.track({type:1,doc:w}),$=!0,(l||f)&&(c=!0)),$&&(E?(o=o.add(E),r=P?r.add(m):r.delete(m)):(o=o.delete(m),r=r.delete(m)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const m=this.query.limitType==="F"?o.last():o.first();o=o.delete(m.key),r=r.delete(m.key),i.track({type:1,doc:m})}return{tu:o,iu:i,Ss:c,mutatedKeys:r}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,s){const r=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((m,y)=>(function(E,A){const P=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J(20277,{Vt:$})}};return P(E)-P(A)})(m.type,y.type)||this.eu(m.doc,y.doc))),this.ou(i),s=s??!1;const c=t&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,f=l!==this.Xa;return this.Xa=l,o.length!==0||f?{snapshot:new Pi(this.query,e.tu,r,o,e.mutatedKeys,l===0,f,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new yh,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=se(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Ya=this.Ya.add(i.key))}));const t=[];return e.forEach((i=>{this.Ya.has(i)||t.push(new Em(i))})),this.Ya.forEach((i=>{e.has(i)||t.push(new Im(i))})),t}cu(e){this.Za=e.ks,this.Ya=se();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Pi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Il="SyncEngine";class bI{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class TI{constructor(e){this.key=e,this.hu=!1}}class II{constructor(e,t,i,s,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ni((c=>Qp(c)),Oo),this.Iu=new Map,this.Eu=new Set,this.Ru=new _e(G.comparator),this.Au=new Map,this.Vu=new fl,this.du={},this.mu=new Map,this.fu=Ri.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function EI(n,e,t=!0){const i=Rm(n);let s;const r=i.Tu.get(e);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.lu()):s=await km(i,e,t,!0),s}async function kI(n,e){const t=Rm(n);await km(t,e,!0,!1)}async function km(n,e,t,i){const s=await G0(n.localStore,At(e)),r=s.targetId,o=n.sharedClientState.addLocalQueryTarget(r,t);let c;return i&&(c=await SI(n,e,r,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&wm(n.remoteStore,s),c}async function SI(n,e,t,i,s){n.pu=(y,w,E)=>(async function(P,$,U,N){let M=$.view.ru(U);M.Ss&&(M=await uh(P.localStore,$.query,!1).then((({documents:b})=>$.view.ru(b,M))));const D=N&&N.targetChanges.get($.targetId),F=N&&N.targetMismatches.get($.targetId)!=null,j=$.view.applyChanges(M,P.isPrimaryClient,D,F);return bh(P,$.targetId,j.au),j.snapshot})(n,y,w,E);const r=await uh(n.localStore,e,!0),o=new _I(e,r.ks),c=o.ru(r.documents),l=Qs.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),f=o.applyChanges(c,n.isPrimaryClient,l);bh(n,t,f.au);const m=new bI(e,t,o);return n.Tu.set(e,m),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),f.snapshot}async function CI(n,e,t){const i=ie(n),s=i.Tu.get(e),r=i.Iu.get(s.targetId);if(r.length>1)return i.Iu.set(s.targetId,r.filter((o=>!Oo(o,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await pc(i.localStore,s.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(s.targetId),t&&yl(i.remoteStore,s.targetId),yc(i,s.targetId)})).catch($o)):(yc(i,s.targetId),await pc(i.localStore,s.targetId,!0))}async function AI(n,e){const t=ie(n),i=t.Tu.get(e),s=t.Iu.get(i.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),yl(t.remoteStore,i.targetId))}async function Sm(n,e){const t=ie(n);try{const i=await q0(t.localStore,e);e.targetChanges.forEach(((s,r)=>{const o=t.Au.get(r);o&&(pe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?pe(o.hu,14607):s.removedDocuments.size>0&&(pe(o.hu,42227),o.hu=!1))})),await Am(t,i,e)}catch(i){await $o(i)}}function _h(n,e,t){const i=ie(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.Tu.forEach(((r,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=ie(o);l.onlineState=c;let f=!1;l.queries.forEach(((m,y)=>{for(const w of y.ba)w.va(c)&&(f=!0)})),f&&Tl(l)})(i.eventManager,e),s.length&&i.Pu.J_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function RI(n,e,t){const i=ie(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.Au.get(e),r=s&&s.key;if(r){let o=new _e(G.comparator);o=o.insert(r,He.newNoDocument(r,Q.min()));const c=se().add(r),l=new Bo(Q.min(),new Map,new _e(ee),o,c);await Sm(i,l),i.Ru=i.Ru.remove(r),i.Au.delete(e),El(i)}else await pc(i.localStore,e,!1).then((()=>yc(i,e,t))).catch($o)}function yc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Iu.get(e))n.Tu.delete(i),t&&n.Pu.yu(i,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((i=>{n.Vu.containsKey(i)||Cm(n,i)}))}function Cm(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(yl(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),El(n))}function bh(n,e,t){for(const i of t)i instanceof Im?(n.Vu.addReference(i.key,e),xI(n,i)):i instanceof Em?(B(Il,"Document no longer in limbo: "+i.key),n.Vu.removeReference(i.key,e),n.Vu.containsKey(i.key)||Cm(n,i.key)):J(19791,{wu:i})}function xI(n,e){const t=e.key,i=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(i)||(B(Il,"New document in limbo: "+t),n.Eu.add(i),El(n))}function El(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new G(fe.fromString(e)),i=n.fu.next();n.Au.set(i,new TI(t)),n.Ru=n.Ru.insert(t,i),wm(n.remoteStore,new fn(At(ll(t.path)),i,"TargetPurposeLimboResolution",Lo.ce))}}async function Am(n,e,t){const i=ie(n),s=[],r=[],o=[];i.Tu.isEmpty()||(i.Tu.forEach(((c,l)=>{o.push(i.pu(l,e,t).then((f=>{var m;if((f||t)&&i.isPrimaryClient){const y=f?!f.fromCache:(m=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:m.current;i.sharedClientState.updateQueryState(l.targetId,y?"current":"not-current")}if(f){s.push(f);const y=ml.Es(l.targetId,f);r.push(y)}})))})),await Promise.all(o),i.Pu.J_(s),await(async function(l,f){const m=ie(l);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(y=>L.forEach(f,(w=>L.forEach(w.Ts,(E=>m.persistence.referenceDelegate.addReference(y,w.targetId,E))).next((()=>L.forEach(w.Is,(E=>m.persistence.referenceDelegate.removeReference(y,w.targetId,E)))))))))}catch(y){if(!Bi(y))throw y;B(gl,"Failed to update sequence numbers: "+y)}for(const y of f){const w=y.targetId;if(!y.fromCache){const E=m.vs.get(w),A=E.snapshotVersion,P=E.withLastLimboFreeSnapshotVersion(A);m.vs=m.vs.insert(w,P)}}})(i.localStore,r))}async function PI(n,e){const t=ie(n);if(!t.currentUser.isEqual(e)){B(Il,"User change. New user:",e.toKey());const i=await mm(t.localStore,e);t.currentUser=e,(function(r,o){r.mu.forEach((c=>{c.forEach((l=>{l.reject(new z(V.CANCELLED,o))}))})),r.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Am(t,i.Ns)}}function $I(n,e){const t=ie(n),i=t.Au.get(e);if(i&&i.hu)return se().add(i.key);{let s=se();const r=t.Iu.get(e);if(!r)return s;for(const o of r){const c=t.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function Rm(n){const e=ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$I.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=RI.bind(null,e),e.Pu.J_=yI.bind(null,e.eventManager),e.Pu.yu=vI.bind(null,e.eventManager),e}class go{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ym(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return z0(this.persistence,new B0,e.initialUser,this.serializer)}Cu(e){return new pm(pl.Vi,this.serializer)}Du(e){return new Q0}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}go.provider={build:()=>new go};class LI extends go{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){pe(this.persistence.referenceDelegate instanceof mo,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new S0(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Qe.withCacheSize(this.cacheSizeBytes):Qe.DEFAULT;return new pm((i=>mo.Vi(i,t)),this.serializer)}}class vc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>_h(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=PI.bind(null,this.syncEngine),await hI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new pI})()}createDatastore(e){const t=ym(e.databaseInfo.databaseId),i=eI(e.databaseInfo);return rI(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,s,r,o,c){return new aI(i,s,r,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>_h(this.syncEngine,t,0)),(function(){return fh.v()?new fh:new J0})())}createSyncEngine(e,t){return(function(s,r,o,c,l,f,m){const y=new II(s,r,o,c,l,f);return m&&(y.gu=!0),y})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const r=ie(s);B(xi,"RemoteStore shutting down."),r.Ea.add(5),await Js(r),r.Aa.shutdown(),r.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}vc.provider={build:()=>new vc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class DI{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):zt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const An="FirestoreClient";class NI{constructor(e,t,i,s,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this._databaseInfo=s,this.user=Fe.UNAUTHENTICATED,this.clientId=Mp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,(async o=>{B(An,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(i,(o=>(B(An,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Tm(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function Da(n,e){n.asyncQueue.verifyOperationInProgress(),B(An,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async s=>{i.isEqual(s)||(await mm(e.localStore,s),i=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Th(n,e){n.asyncQueue.verifyOperationInProgress();const t=await MI(n);B(An,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>gh(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,s)=>gh(e.remoteStore,s))),n._onlineComponents=e}async function MI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){B(An,"Using user provided OfflineComponentProvider");try{await Da(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Yn("Error using user provided cache. Falling back to memory cache: "+t),await Da(n,new go)}}else B(An,"Using default OfflineComponentProvider"),await Da(n,new LI(void 0));return n._offlineComponents}async function OI(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(B(An,"Using user provided OnlineComponentProvider"),await Th(n,n._uninitializedComponentsProvider._online)):(B(An,"Using default OnlineComponentProvider"),await Th(n,new vc))),n._onlineComponents}async function Ih(n){const e=await OI(n),t=e.eventManager;return t.onListen=EI.bind(null,e.syncEngine),t.onUnlisten=CI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=kI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=AI.bind(null,e.syncEngine),t}function VI(n,e,t,i){const s=new DI(i),r=new wI(e,s,t);return n.asyncQueue.enqueueAndForget((async()=>mI(await Ih(n),r))),()=>{s.Nu(),n.asyncQueue.enqueueAndForget((async()=>gI(await Ih(n),r)))}}/**
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
 */function xm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI="ComponentProvider",Eh=new Map;function FI(n,e,t,i,s){return new gT(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,xm(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm="firestore.googleapis.com",kh=!0;class Sh{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new z(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Pm,this.ssl=kh}else this.host=e.host,this.ssl=e.ssl??kh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=fm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<E0)throw new z(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xm(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class kl{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new qb;switch(i.type){case"firstParty":return new Qb(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new z(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=Eh.get(t);i&&(B(UI,"Removing Datastore"),Eh.delete(t),i.terminate())})(this),Promise.resolve()}}function BI(n,e,t,i={}){var f;n=Fr(n,kl);const s=Rn(e),r=n._getSettings(),o={...r,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&($c(`https://${c}`),Lc("Firestore",!0)),r.host!==Pm&&r.host!==c&&Yn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...r,host:c,ssl:s,emulatorOptions:i};if(!Gn(l,o)&&(n._setSettings(l),i.mockUserToken)){let m,y;if(typeof i.mockUserToken=="string")m=i.mockUserToken,y=Fe.MOCK_USER;else{m=ff(i.mockUserToken,(f=n._app)==null?void 0:f.options.projectId);const w=i.mockUserToken.sub||i.mockUserToken.user_id;if(!w)throw new z(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new Fe(w)}n._authCredentials=new Wb(new Np(m,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new jo(this.firestore,e,this._query)}}class et{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new et(this.firestore,e,this._key)}toJSON(){return{type:et._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(Gs(t,et._jsonSchema))return new et(e,i||null,new G(fe.fromString(t.referencePath)))}}et._jsonSchemaVersion="firestore/documentReference/1.0",et._jsonSchema={type:Ie("string",et._jsonSchemaVersion),referencePath:Ie("string")};class wi extends jo{constructor(e,t,i){super(e,t,ll(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new et(this.firestore,null,new G(e))}withConverter(e){return new wi(this.firestore,e,this._path)}}function Zt(n,e,...t){if(n=De(n),tT("collection","path",e),n instanceof kl){const i=fe.fromString(e,...t);return Vd(i),new wi(n,null,i)}{if(!(n instanceof et||n instanceof wi))throw new z(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(fe.fromString(e,...t));return Vd(i),new wi(n.firestore,null,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch="AsyncQueue";class Ah{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new vm(this,"async_queue_retry"),this._c=()=>{const i=La();i&&B(Ch,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=La();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=La();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new mi;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Bi(e))throw e;B(Ch,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,zt("INTERNAL UNHANDLED ERROR: ",Rh(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=bl.createAndSchedule(this,e,t,i,(r=>this.hc(r)));return this.tc.push(s),s}uc(){this.nc&&J(47125,{Pc:Rh(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Rh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class wc extends kl{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new Ah,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ah(e),this._firestoreClient=void 0,await e}}}function HI(n,e){const t=typeof n=="object"?n:Mc(),i=typeof n=="string"?n:lo,s=ko(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=uf("firestore");r&&BI(s,...r)}return s}function jI(n){if(n._terminated)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||zI(n),n._firestoreClient}function zI(n){var i,s,r,o;const e=n._freezeSettings(),t=FI(n._databaseId,((i=n._app)==null?void 0:i.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(r=e.localCache)!=null&&r._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new NI(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(l){const f=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(f),_online:f}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bt(Oe.fromBase64String(e))}catch(t){throw new z(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new bt(Oe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:bt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Gs(e,bt._jsonSchema))return bt.fromBase64String(e.bytes)}}bt._jsonSchemaVersion="firestore/bytes/1.0",bt._jsonSchema={type:Ie("string",bt._jsonSchemaVersion),bytes:Ie("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new z(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class yn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new z(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new z(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:yn._jsonSchemaVersion}}static fromJSON(e){if(Gs(e,yn._jsonSchema))return new yn(e.latitude,e.longitude)}}yn._jsonSchemaVersion="firestore/geoPoint/1.0",yn._jsonSchema={type:Ie("string",yn._jsonSchemaVersion),latitude:Ie("number"),longitude:Ie("number")};/**
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
 */class vn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0})(this._values,e._values)}toJSON(){return{type:vn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Gs(e,vn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new vn(e.vectorValues);throw new z(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}vn._jsonSchemaVersion="firestore/vectorValue/1.0",vn._jsonSchema={type:Ie("string",vn._jsonSchemaVersion),vectorValues:Ie("object")};function Lm(n,e,t){if((e=De(e))instanceof $m)return e._internalPath;if(typeof e=="string")return WI(n,e);throw _c("Field path arguments must be of type string or ",n)}const qI=new RegExp("[~\\*/\\[\\]]");function WI(n,e,t){if(e.search(qI)>=0)throw _c(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new $m(...e.split("."))._internalPath}catch{throw _c(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function _c(n,e,t,i,s){let r=`Function ${e}() called with invalid data`;r+=". ";let o="";return new z(V.INVALID_ARGUMENT,r+n+o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{convertValue(e,t="none"){switch(Sn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return we(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(kn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw J(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Ks(e,((s,r)=>{i[s]=this.convertValue(r,t)})),i}convertVectorValue(e){var i,s,r;const t=(r=(s=(i=e.fields)==null?void 0:i[sc].arrayValue)==null?void 0:s.values)==null?void 0:r.map((o=>we(o.doubleValue)));return new vn(t)}convertGeoPoint(e){return new yn(we(e.latitude),we(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=No(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Ds(e));default:return null}}convertTimestamp(e){const t=En(e);return new Te(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=fe.fromString(e);pe(hm(i),9688,{name:e});const s=new Ns(i.get(1),i.get(3)),r=new G(i.popFirst(5));return s.isEqual(t)||zt(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */class Dm extends GI{constructor(e){super(),this.firestore=e}convertBytes(e){return new bt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new et(this.firestore,null,t)}}const xh="@firebase/firestore",Ph="4.12.0";/**
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
 */function $h(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new KI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Lm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class KI extends Nm{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new z(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ys{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zn extends Nm{constructor(e,t,i,s,r,o){super(e,t,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new zr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Lm("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=zn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}zn._jsonSchemaVersion="firestore/documentSnapshot/1.0",zn._jsonSchema={type:Ie("string",zn._jsonSchemaVersion),bundleSource:Ie("string","DocumentSnapshot"),bundleName:Ie("string"),bundle:Ie("string")};class zr extends zn{data(e={}){return super.data(e)}}class _i{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ys(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new zr(this._firestore,this._userDataWriter,i.key,i,new ys(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new z(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new zr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ys(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>r||c.type!==3)).map((c=>{const l=new zr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ys(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,m=-1;return c.type!==0&&(f=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),m=o.indexOf(c.doc.key)),{type:JI(c.type),doc:l,oldIndex:f,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=_i._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Mp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],s=[];return this.docs.forEach((r=>{r._document!==null&&(t.push(r._document),i.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),s.push(r.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function JI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J(61501,{type:n})}}/**
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
 */_i._jsonSchemaVersion="firestore/querySnapshot/1.0",_i._jsonSchema={type:Ie("string",_i._jsonSchemaVersion),bundleSource:Ie("string","QuerySnapshot"),bundleName:Ie("string"),bundle:Ie("string")};function en(n,...e){var f,m,y;n=De(n);let t={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||$h(e[i])||(t=e[i++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if($h(e[i])){const w=e[i];e[i]=(f=w.next)==null?void 0:f.bind(w),e[i+1]=(m=w.error)==null?void 0:m.bind(w),e[i+2]=(y=w.complete)==null?void 0:y.bind(w)}let r,o,c;if(n instanceof et)o=Fr(n.firestore,wc),c=ll(n._key.path),r={next:w=>{e[i]&&e[i](YI(o,n,w))},error:e[i+1],complete:e[i+2]};else{const w=Fr(n,jo);o=Fr(w.firestore,wc),c=w._query;const E=new Dm(o);r={next:A=>{e[i]&&e[i](new _i(o,E,w,A))},error:e[i+1],complete:e[i+2]},QI(n._query)}const l=jI(o);return VI(l,c,s,r)}function YI(n,e,t){const i=t.docs.get(e._key),s=new Dm(n);return new zn(n,s,e._key,i,new ys(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){zb(Zn),Kn(new bn("firestore",((i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),c=new wc(new Gb(i.getProvider("auth-internal")),new Jb(o,i.getProvider("app-check-internal")),yT(o,s),o);return r={useFetchStreams:t,...r},c._setSettings(r),c}),"PUBLIC").setMultipleInstances(!0)),kt(xh,Ph,e),kt(xh,Ph,"esm2020")})();const tn=HI(Gc);let yt=[];function XI(n){if(Mm(),!n)return;const e=t=>t.docs.map(i=>({id:i.id,...i.data()}));yt.push(en(Zt(tn,`households/${n}/inventory`),t=>{var i,s;d.inv=e(t),de("synced"),(i=H.renderAll)==null||i.call(H),(s=H.renderSum)==null||s.call(H)},t=>{console.warn("realtime inv error:",t),de("error")})),yt.push(en(Zt(tn,`households/${n}/shopping`),t=>{var i,s;d.shop=e(t),de("synced"),(i=H.renderShop)==null||i.call(H),(s=H.renderSum)==null||s.call(H)},t=>{console.warn("realtime shop error:",t),de("error")})),yt.push(en(Zt(tn,`households/${n}/recipes`),t=>{var i,s;d.recs=e(t),de("synced"),(i=H.renderRecs)==null||i.call(H),(s=H.renderSum)==null||s.call(H)},t=>{console.warn("realtime recs error:",t),de("error")})),yt.push(en(Zt(tn,`households/${n}/mealplan`),t=>{const i={};e(t).forEach(s=>{s.date&&s.meal&&(i[s.date]=s.meal)}),d.mp=i,de("synced")},t=>{console.warn("realtime mp error:",t)})),yt.push(en(Zt(tn,`households/${n}/settings`),t=>{const i=e(t).find(s=>s.id==="config");i&&(d.cfg={...Yr,...i})},t=>{console.warn("realtime settings error:",t)})),yt.push(en(Zt(tn,`households/${n}/cooklog`),t=>{d.cookLog=e(t).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},t=>{console.warn("realtime cooklog error:",t)})),yt.push(en(Zt(tn,`households/${n}/wastelog`),t=>{d.wasteLog=e(t).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},t=>{console.warn("realtime wastelog error:",t)})),yt.push(en(Zt(tn,`households/${n}/activity`),t=>{var i;d.activity=e(t).sort((s,r)=>new Date(r.timestamp||0)-new Date(s.timestamp||0)).slice(0,10),(i=H.renderAll)==null||i.call(H)},t=>{console.warn("realtime activity error:",t)})),de("synced"),console.log("[realtime] Listeners started for household:",n)}function Mm(){yt.forEach(n=>{try{n()}catch{}}),yt=[],console.log("[realtime] All listeners stopped")}function Sl(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(d.cfg.adults||"Bora").split(",")[0].trim(),i=h("grt");i&&(i.innerHTML=`${e}, <span>${t}</span>`);const s=h("hdt");s&&(s.textContent=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})),ii()}function Cl(){Al(),qr==null||qr()}let qr=null;function ZI(n){qr=n}function Al(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(d.cfg.adults||"Bora").split(",")[0].trim(),i=h("grt");i&&!i.innerHTML&&(i.innerHTML=`${e}, <span>${t}</span>`),ii(),Xs(),iE(),oE(),ji(),cE(),Um(),tE()}function eE(n){const e=`ks-home-${n}-collapsed`,t=ae(e)!==!1;Me(e,!t),bc(n)}function bc(n){const e=`ks-home-${n}-collapsed`,t=ae(e)!==!1,i=h(`${n}-arrow`),r=h({lowstock:"lowstocklist",activity:"activityfeed",cooktonight:"cooktonightbody"}[n]||n);i&&(t?i.classList.add("collapsed"):i.classList.remove("collapsed")),r&&(t?r.classList.add("collapsed"):r.classList.remove("collapsed"))}function tE(){bc("lowstock"),bc("activity")}function ji(){const n=dn(),e=d.mp[n],t=h("tnd"),i=h("tna"),s=h("tonight-main");s&&(s.onclick=function(){window.openMealM(n,"Today")}),e?(t&&(t.innerHTML=e),i&&(i.innerHTML=`<button class="btn bsm bp" onclick="event.stopPropagation();openCooked('${n}')">✓ Cooked</button><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${n}','Today')">Edit</button>`)):(t&&(t.innerHTML='<span style="font-size:.9rem;color:var(--mt);font-style:italic">No meal planned yet</span>'),i&&(i.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openRecipeMatch()">🔍 Find recipes</button><button class="btn bsm bs" onclick="event.stopPropagation();showScreen('chat')">Ask Claude →</button>`))}function ii(){const n=["S","M","T","W","T","F","S"],e=new Date;e.setHours(0,0,0,0);const t=h("wgrd");t&&(t.innerHTML=Ni().map((i,s)=>{const r=i.toISOString().split("T")[0],o=i.getTime()===e.getTime(),c=d.mp[r];return`<div class="wd${o?" today":""}${c?" hm":""}" onclick="openMealM('${r}','${n[s]} ${i.getDate()}')"><div class="wdn">${n[s]}</div><div class="wdd">${i.getDate()}</div>${c?`<div class="wdm">${c.substring(0,10)}${c.length>10?"…":""}</div>`:""}</div>`}).join(""),nE())}function nE(){const n=h("variety-nudge");if(!n)return;const e=Ni().map(o=>d.mp[o.toISOString().split("T")[0]]).filter(Boolean);if(e.length<3){n.style.display="none";return}const t=e.some(o=>/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(o)),i=e.some(o=>/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner/i.test(o)),s={};e.forEach(o=>{const c=o.toLowerCase();s[c]=(s[c]||0)+1});const r=Object.entries(s).find(([,o])=>o>=3);r?(n.style.display="block",n.innerHTML="🔄 <strong>"+r[0]+"</strong> is planned "+r[1]+"× this week — maybe try something different?"):!t&&!i?(n.style.display="block",n.innerHTML="🌍 No Bangladeshi or Turkish dishes this week yet — ask Claude for ideas!"):t?i?n.style.display="none":(n.style.display="block",n.innerHTML="🇹🇷 No Turkish dishes this week — köfte or mercimek çorbası would be great!"):(n.style.display="block",n.innerHTML="🇧🇩 No Bangladeshi dishes this week — how about a dal or fish curry?")}function Xs(){const n=d.inv.filter(c=>{const l=xt(c.expiry);return l&&(l.c==="expiring"||l.c==="expired")}).length,e=d.shop.filter(c=>!c.checked).length,t=h("home-exp-val"),i=h("home-exp-sub");t&&(n>0?(t.textContent=n+" item"+(n>1?"s":""),t.className="tc-val",t.style.color="var(--am)"):(t.textContent="All fresh!",t.className="tc-val tc-green")),i&&(i.textContent=n>0?"expiring soon":"Nothing in next 3 days");const s=h("home-shop-val"),r=h("home-shop-sub");s&&(s.textContent=e),r&&(r.textContent=e===1?"item to buy":e===0?"all stocked up":"items to buy");const o=h("sgrd");o&&(o.innerHTML=`<div class="sc" onclick="showScreen('inventory')"><div class="sci">🧺</div><div class="scv">${d.inv.length}</div><div class="scl">Items in stock</div></div><div class="sc${n>0?" warn":""}" onclick="showScreen('inventory')"><div class="sci">⏱</div><div class="scv">${n}</div><div class="scl">Expiring soon</div></div><div class="sc" onclick="showScreen('shopping')"><div class="sci">🛒</div><div class="scv">${e}</div><div class="scl">To buy</div></div><div class="sc" onclick="showScreen('recipes')"><div class="sci">📖</div><div class="scv">${d.recs.length}</div><div class="scl">Saved recipes</div></div>`)}function iE(){const n=d.inv.filter(i=>{const s=xt(i.expiry);return s&&(s.c==="expiring"||s.c==="expired")}).sort((i,s)=>new Date(i.expiry)-new Date(s.expiry)),e=h("exslbl"),t=h("expl");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(i=>{const s=xt(i.expiry);return`<div class="exi${s.c==="expired"?" exp":""}" onclick="openAdj('${i.id}')"><div class="exn">${Ae(i.name)}</div><div class="exd">${s.l}</div></div>`}).join("")}}const sE=new Set(["Bottle","Jar","Can","Carton","Bunch","Head","Loaf","Dozen","Tube","Roll","Gallon","Half Gallon","Liter"]),rE=new Set(["Piece","Unit","Pack","Box","Bag","Pound","Oz","Clove"]);function Rl(n){return n?sE.has(n)?1:(rE.has(n),2):2}function oE(){const n=d.inv.filter(i=>{if(i.doNotRestock)return!1;const s=i.restockThreshold!=null?i.restockThreshold:Rl(i.unit);return i.qty<=s}).sort((i,s)=>i.qty-s.qty),e=h("lowstocklbl"),t=h("lowstocklist");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(i=>`<div class="exi" style="border-color:var(--am)" onclick="openAdj('${i.id}')">
    <div style="flex:1;min-width:0">
      <div class="exn">${Ae(i.name)}</div>
      <div style="font-size:.7rem;color:var(--am);font-weight:600;margin-top:1px">${Ei(i.qty,i.unit)}</div>
    </div>
    <button class="low-add-btn" onclick="event.stopPropagation();addLowToShop('${i.id}')">🛒 Add</button>
  </div>`).join("")}}async function aE(n){const e=d.inv.find(i=>i.id===n);if(!e)return;if(d.shop.find(i=>i.name.toLowerCase()===e.name.toLowerCase()&&!i.checked)){R(`${e.name} is already on your list`);return}await ye({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"low-stock"}),R(`${e.name} added to shopping list 🛒`)}function cE(){const n=h("activityfeed"),e=h("activitylbl");if(!n)return;const t=d.activity||[];if(!t.length){e&&(e.style.display="none"),n.innerHTML="";return}e&&(e.style.display="flex");const i=s=>{const r=Date.now()-new Date(s).getTime(),o=Math.floor(r/6e4);if(o<1)return"just now";if(o<60)return o+"m ago";const c=Math.floor(o/60);if(c<24)return c+"h ago";const l=Math.floor(c/24);return l===1?"yesterday":l+"d ago"};n.innerHTML=t.slice(0,3).map(s=>`<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--b1)">
      <div style="width:28px;height:28px;border-radius:50%;background:var(--acd);display:flex;align-items:center;justify-content:center;font-size:.7rem;flex-shrink:0;color:var(--ac);font-weight:700">${(s.memberName||"?")[0].toUpperCase()}</div>
      <div style="flex:1;font-size:.82rem;color:var(--tx2);line-height:1.4;font-family:'DM Sans',sans-serif"><strong style="color:var(--tx);font-weight:600">${Ae(s.memberName||"Someone").replace(/</g,"&lt;")}</strong> ${(s.action||"").replace(/</g,"&lt;")} <strong style="color:var(--tx);font-weight:600">${(s.itemName||"").replace(/</g,"&lt;")}</strong></div>
      <div style="font-size:.68rem;color:var(--mt);flex-shrink:0">${i(s.timestamp)}</div>
    </div>`).join("")}const Lh=5;let vs=[],Nt=0;function Om(n){return(n||"").toLowerCase().trim().replace(/^[\d\s\/\.½¼¾⅓⅔]+/,"").replace(/\b(cups?|tbsp?|tsp?|tablespoons?|teaspoons?|ounces?|oz|lbs?|pounds?|grams?|g|kg|ml|liters?|cloves?|cans?|large|small|medium|fresh|dried|chopped|minced|sliced|diced|to taste|optional|about)\b/gi,"").replace(/\s+/g," ").trim().replace(/s$/,"")}function lE(n,e){let t=[];if(n.ingredientsRaw&&Array.isArray(n.ingredientsRaw)?t=n.ingredientsRaw:n.ingredients&&(t=n.ingredients.split(/[;\n]+/).map(c=>c.trim()).filter(Boolean)),!t.length)return{matchPct:0,matchCount:0,totalCount:0,missing:[]};const i=[];let s=0;const r=t.length;for(const c of t){const l=Om(c);if(!l){s++;continue}e.some(m=>m.includes(l)||l.includes(m))?s++:i.push(c)}return{matchPct:r>0?Math.round(s/r*100):0,matchCount:s,totalCount:r,missing:i}}async function uE(){const n=h("recipeMatchResults");if(n){at("recipematch"),n.innerHTML='<div style="text-align:center;padding:40px 0"><div class="spin" style="width:32px;height:32px;margin:0 auto 12px"></div><div style="font-size:.85rem;color:var(--mt)">Matching recipes to your supplies…</div></div>';try{const e=d.inv.map(i=>Om(i.name)).filter(Boolean),t=await oe("public_recipes");if(!t.length){n.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--mt)">No community recipes available yet.<br/>Publish some recipes first!</div>';return}vs=t.map(i=>{const s=lE(i,e);return{...i,...s}}).filter(i=>i.matchPct>=60).sort((i,s)=>s.matchPct-i.matchPct),Nt=0,Vm(n)}catch(e){console.error("Recipe match error:",e),n.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--rd)">Something went wrong. Try again.</div>'}}}function Vm(n){if(!vs.length){n.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--mt)">No recipes match 60% or more of your supplies.<br/>Try adding more items to your pantry!</div>';return}const e=vs.slice(Nt,Nt+Lh);Nt+=e.length;const t=e.map(i=>{let s,r;i.matchPct===100?(s="var(--gn)",r="Ready to cook!"):i.matchPct>=80?(s="var(--am)",r="Almost there"):(s="#e67e22",r="Need a few things");const o=i.imageUrl?`<img src="${i.imageUrl}" style="width:100%;height:140px;object-fit:cover;border-radius:12px 12px 0 0" alt="" onerror="this.style.display='none'"/>`:'<div style="width:100%;height:80px;background:var(--sf);border-radius:12px 12px 0 0;display:flex;align-items:center;justify-content:center;font-size:2rem">🍽</div>',c=i.missing.length?`<div style="margin-top:8px"><div style="font-size:.7rem;color:var(--mt);font-weight:600;margin-bottom:4px">Missing (${i.missing.length}):</div>${i.missing.map(f=>`<span style="display:inline-block;font-size:.68rem;padding:2px 8px;border-radius:8px;background:var(--rdd);color:var(--rd);margin:2px 3px 2px 0">${f}</span>`).join("")}</div>`:"",l=[i.cookTime,i.cuisine].filter(Boolean).join(" · ");return`<div style="background:var(--card);border:1.5px solid var(--b1);border-radius:14px;margin-bottom:12px;overflow:hidden;cursor:pointer" onclick="openComRecipe('${i.id}')">
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
    </div>`}).join("");if(Nt<=Lh)n.innerHTML=t;else{const i=n.querySelector(".match-more-btn");i&&i.remove(),n.insertAdjacentHTML("beforeend",t)}Nt<vs.length?n.insertAdjacentHTML("beforeend",`<div style="text-align:center;padding:12px 0"><button class="btn bs match-more-btn" onclick="showMoreMatches()">Show 5 more (${vs.length-Nt} remaining)</button></div>`):Nt>0&&n.insertAdjacentHTML("beforeend",`<div style="text-align:center;padding:12px 0;font-size:.75rem;color:var(--mt)">Showing all ${Nt} matching recipes</div>`)}function dE(){const n=h("recipeMatchResults");n&&Vm(n)}function Um(){const n=["fridge","freezer","pantry","household"].map(t=>{const i=d.inv.filter(s=>s.location===t);return i.length?sf(t).toUpperCase()+`
`+i.map(s=>`- ${s.name}${s.brand?` (${s.brand})`:""}: ${Ei(s.qty,s.unit)}`).join(`
`):""}).filter(Boolean).join(`

`),e=h("expbox");e&&(e.textContent=n||"No items yet.")}const hE="modulepreload",fE=function(n){return"/"+n},Dh={},pE=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let o=function(f){return Promise.all(f.map(m=>Promise.resolve(m).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(t.map(f=>{if(f=fE(f),f in Dh)return;Dh[f]=!0;const m=f.endsWith(".css"),y=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${y}`))return;const w=document.createElement("link");if(w.rel=m?"stylesheet":hE,m||(w.as="script"),w.crossOrigin="",w.href=f,l&&w.setAttribute("nonce",l),document.head.appendChild(w),m)return new Promise((E,A)=>{w.addEventListener("load",E),w.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${f}`)))})}))}function r(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&r(c.reason);return e().catch(r)})};function Fm(n){return n?n.trim().toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").slice(0,60):null}async function zo(n){if(!d.hid||!n)return null;const e=Fm(n);if(!e)return null;try{return await ne(`households/${d.hid}/productPreferences/${e}`)||null}catch{return null}}async function Bm(n,e){if(!d.hid||!n)return;const t=Fm(n);if(t)try{const i=await ne(`households/${d.hid}/productPreferences/${t}`)||{};W(`households/${d.hid}/productPreferences/${t}`,{...i,...e,productName:n.trim(),updatedAt:new Date().toISOString()}).catch(s=>console.warn("Failed to save product preference:",s))}catch(i){console.warn("Failed to read product preference for merge:",i)}}function xl(n,e){e&&Bm(n,{preferredLocation:e})}function Pl(n,e){e&&Bm(n,{preferredUnit:e})}let it=null,Na=!1,ls="",Ma=!1;function mE(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=h("shopAddMicOpt");e&&(e.style.display="")}function Nh(n){const e=h("micstatus");e&&e.classList.toggle("visible",n)}function Hm(){if(Na&&it){Ma=!0,it.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){R("Voice input not supported");return}it=new n,it.lang="en-US",it.interimResults=!0,it.maxAlternatives=1,it.continuous=!1,ls="",Na=!0,Nh(!0),it.onresult=e=>{let t="";for(let s=e.resultIndex;s<e.results.length;s++){const r=e.results[s][0].transcript;e.results[s].isFinal?ls+=r:t+=r}const i=h("shi");i&&(i.value=(ls+t).trim())},it.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&R("Couldn't hear that — try again")},it.onend=()=>{let e=(ls||"").trim();if(!e&&Ma){const t=h("shi");e=t?t.value.trim():""}if(Na=!1,it=null,ls="",Ma=!1,Nh(!1),e){let t=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||1):s&&(t=s[2].trim(),i=parseInt(s[1],10)||1);const o={id:Date.now().toString(),name:t,qty:i,checked:!1,src:"manual"};ye(o),R(`Added "${e}" 🎤`);const c=h("shi");c&&(c.value="")}},it.start()}function jm(n){if(!n.brand)return!1;if(n.src==="scan")return!0;if(n.src==="search"&&n.searchQuery){const e=n.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),t=n.brand.toLowerCase();return e.some(i=>t.includes(i))}return!1}function Sr(n){const e=n.qty||1,t=n.unit||"Unit",i=Io(e),s=`<span class="sh-qty${e===1?" sh-qty-one":""}"> × ${i} ${t}</span>`;return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="shop">
    <div class="swipe-inner">
      <!-- Main row: swipeRowTap handles multi-select; checkbox toggles checked; content area opens detail -->
      <div class="shit${n.checked?" chk":""}" onclick="swipeRowTap('${n.id}','shop')">
        <div class="sel-cb">✓</div>           <!-- Multi-select checkbox (hidden unless selectMode is active) -->
        <div class="shck" onclick="event.stopPropagation();togShop('${n.id}')">${n.checked?"✓":""}</div>  <!-- Slim ring: tap to mark as bought; hidden in select mode (replaced by sel-cb) -->
        <div style="flex:1;min-width:0;cursor:pointer" onclick="openItemDetail('${n.id}')">
          <div class="shnm">${Ae(n.name)}${s}</div>
          ${jm(n)?`<div class="sh-brand">${n.brand}</div>`:""}  <!-- Brand shown for barcode scans always; for text search only if the user's query matches the brand name -->
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
  </div>`}function zi(){const n=(o,c)=>o.name.localeCompare(c.name),e=h("shlist"),t=d.shop.filter(o=>!o.checked).sort(n),i=d.shop.filter(o=>o.checked).sort(n),s=h("clrchk");s&&(s.style.display=i.length?"block":"none");const r=h("shsub");if(r&&(r.textContent=t.length+" items to buy"),!!e){if(!d.shop.length){e.innerHTML='<div class="es"><div class="ei">🛒</div><p>Your list is empty!<br/>Add items or use "Build from meal plan".</p></div>';return}if(d.aisleMode&&t.length){const o={};t.forEach(c=>{const l=Dy(c.name);o[l]||(o[l]=[]),o[l].push(c)}),e.innerHTML=Object.entries(o).sort().map(([c,l])=>`<div class="shsec">${c}</div>${l.map(Sr).join("")}`).join("")+(i.length?`<div class="shsec">Done</div>${i.map(Sr).join("")}`:"")}else e.innerHTML=(t.length?`<div class="shsec">To buy (${t.length})</div>${t.map(Sr).join("")}`:"")+(i.length?`<div class="shsec">Done</div>${i.map(Sr).join("")}`:"");if(d.selectMode==="shop"){document.querySelectorAll("#shlist .swipe-wrap").forEach(c=>{c.classList.add("selecting"),d.selectedIds.has(c.dataset.id)&&c.classList.add("selected")});const o=document.querySelector(".shbody");o&&(o.style.paddingLeft="52px")}}}function gE(){const n=h("shi"),e=n.value.trim();if(!e)return;if(bi&&bi.length===1){qm(0);return}let t=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||1):s&&(t=s[2].trim(),i=parseInt(s[1],10)||1);const o=h("addNoteInp"),c=o?o.value.trim():"",l={id:Date.now().toString(),name:t,qty:i,checked:!1,src:"manual"};c&&(l.note=c),ye(l),n.value="",o&&(o.value="");const f=h("addNoteWrap");f&&(f.style.display="none"),$l(),Zs()}function yE(){const n=h("addNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=h("addNoteInp");t&&t.focus()}}function vE(){const n=h("shopAddBackdrop"),e=h("shopAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),setTimeout(()=>{const t=h("shi");t&&(t.value="",t.focus())},150)}function Zs(){const n=h("shopAddBackdrop"),e=h("shopAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),$l()}function wE(){Zs(),window.openScanForList&&window.openScanForList()}function _E(){Zs(),Hm()}let bi=null;function bE(){}const TE=new Set(["salad","soup","stew","casserole","dish","recipe","curry","pie","sandwich","wrap","risotto","gratin","puree","smoothie","juice","namasu","pickled","marinated","braised","sauteed","sautéed","coleslaw","gazpacho","chutney","relish","compote","ragout","ratatouille","succotash","bruschetta","ceviche","tartare"]),IE=["made with","and vegetable","and rice","and noodle","and cheese","cooked in","served with","topped with","stuffed with","mixed with","tossed with","dressed with"];function EE(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(t===i)return!1;for(const o of IE)if(t.includes(o)&&!i.includes(o))return!0;const s=new Set(i.split(/\s+/)),r=t.split(/[\s,&+\-–—/()[\]]+/).filter(o=>o.length>=2);for(const o of r)if(TE.has(o)&&!s.has(o))return!0;return!1}const zm=new Set(["a","an","the","and","or","with","for","of","in","to","by","is","it","at","on","no","not","all","each","per","from","free","style","natural","original","premium","organic","fresh","whole","pure","real","lite","light","low","high","extra","reduced","fat","nonfat","skim","raw","roasted","unsweetened","sweetened","flavored","smoked","dried","frozen","canned","pack","ct","oz","lb","ml","kg","fl","count","size","gallon","quart","pint","liter","bag","box","can","jar","bottle","container","pouch","tub","carton","plain","creamy","chunky","crispy","crunchy","spicy","mild","hot","cold","classic","homestyle","traditional","artisan","greek","italian","mexican","asian","indian","mini","small","medium","large","jumbo","giant","big","handheld","electric","portable","automatic","manual","new","best","top","value","brand"]);function Mh(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(t===i||t.startsWith(i+" "))return!0;const s=i.split(/\s+/).filter(c=>c.length>=2),r=t.split(/[\s,&+\-–—/()[\]]+/).filter(c=>c.length>=2&&!zm.has(c)&&!/^\d+$/.test(c));if(r.length<=2)return!0;let o=0;for(const c of r)s.some(f=>{if(c.startsWith(f)||f.startsWith(c))return!0;const m=Math.min(c.length,f.length,3);return m>=3&&c.slice(0,m)===f.slice(0,m)})&&o++;return o/r.length>=.5}function kE(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(EE(n,e))return 0;if(t===i)return 100;if(t.startsWith(i+" ")||t.startsWith(i))return 95;const r=t.split(/[\s,&+\-–—/]+/).filter(o=>o.length>=2).filter(o=>!zm.has(o)&&!/^\d+$/.test(o));if(r.length&&(r[0].startsWith(i)||i.startsWith(r[0]))){const o=r.filter(l=>!l.startsWith(i)&&!i.startsWith(l)).length,c=85-Math.min(o*8,30);return Mh(n,e)?c:0}for(let o=1;o<Math.min(3,r.length);o++)if(r[o].startsWith(i)||i.startsWith(r[o])){const c=r.filter(f=>!f.startsWith(i)&&!i.startsWith(f)).length,l=60-o*10-Math.min(c*8,20);return Mh(n,e)?Math.max(l,5):0}return 0}function qm(n){if(!bi||!bi[n])return;const e=bi[n],t=h("addNoteInp"),i=t?t.value.trim():"",s=h("shi")?h("shi").value.trim():"",r={id:Date.now().toString(),name:e.name,qty:1,checked:!1,src:"search",brand:e.brand||"",category:e.category||"",source:e.source||"search",searchQuery:s};i&&(r.note=i),ye(r),R(`Added "${e.name}" ✓`);const o=h("shi");o&&(o.value=""),t&&(t.value="");const c=h("addNoteWrap");c&&(c.style.display="none"),$l(),Zs()}function $l(){bi=null;const n=h("shopSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}async function Ll(n,e,t){}function Wm(){const n=h("enrichBackdrop"),e=h("enrichSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),window._enrichCtx=null}async function Gm(n){if(d.selectMode)return;event&&event.stopPropagation();const e=d.shop.find(y=>y.id===n);if(!e)return;const t=h("itemDetailContent");if(!t)return;const i=jm(e);let s=`<div class="item-detail-header">
    <div style="flex:1;min-width:0">
      <div class="item-detail-name">${Ae(e.name)}</div>
      ${i?`<div class="item-detail-brand">${e.brand}</div>`:""}
      ${e.checked?'<div style="margin-top:4px"><span class="item-detail-badge" style="background:var(--gnd);color:var(--gn)">✓ Purchased</span></div>':""}
    </div>
  </div>`;const r=e.qty||1,o=e.unit||"Unit",{whole:c,frac:l}=Xr(r);s+=`<div class="item-detail-section">
    <div class="item-detail-label">Quantity</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeShopQty('${e.id}',-1)">−</button>
        <input class="qinp" id="shop-qty-${e.id}" type="number" min="0" max="99" value="${c}" style="width:48px;text-align:center" onblur="changeShopQtyDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeShopQty('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${za(`shop-frac-${e.id}`,l).replace("<select",`<select onchange="changeShopFrac('`+e.id+`')"`)}
      </div>
      <span style="font-size:.8rem;color:var(--mt)">${o}</span>
    </div>
  </div>`,s+=`<div class="item-detail-section">
    <div class="item-detail-label">Unit of Measure</div>
    <select class="detail-select" onchange="changeShopUnit('${e.id}',this.value)">
      ${Xm.map(y=>`<option value="${y}"${y===o?" selected":""}>${y}</option>`).join("")}
    </select>
  </div>`,e.note&&(s+=`<div class="item-detail-section">
      <div class="item-detail-label">Note</div>
      <div class="item-detail-value">${e.note}</div>
    </div>`),s+='<button class="btn bs bf" onclick="closeItemDetail()" style="margin-top:8px">Close</button>',t.innerHTML=s;const f=h("itemDetailBackdrop"),m=h("itemDetailSheet");f&&f.classList.add("active"),m&&m.classList.add("active")}function SE(){const n=h("itemDetailBackdrop"),e=h("itemDetailSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}async function CE(n,e){const t=d.shop.find(s=>s.id===n);if(!t)return;await ye({...t,unit:e}),Pl(t.name,e);const i=d.inv.find(s=>s.name.toLowerCase().trim()===t.name.toLowerCase().trim());i&&await re({...i,unit:e}),R("Unit updated everywhere"),Gm(n)}async function AE(n,e){const t=d.shop.find(f=>f.id===n);if(!t)return;const i=h(`shop-qty-${n}`),s=h(`shop-frac-${n}`),r=parseInt(i==null?void 0:i.value,10)||0,o=parseFloat(s==null?void 0:s.value)||0;if(e<0&&_n(r,o)<=.25)return;const c=Math.max(0,Math.min(99,r+e)),l=_n(c,o);i&&(i.value=Math.floor(l)),c===0&&o===0&&s&&(s.value="0.25"),await ye({...t,qty:l})}async function RE(n){const e=d.shop.find(c=>c.id===n);if(!e)return;const t=h(`shop-qty-${n}`),i=h(`shop-frac-${n}`),s=parseInt(t==null?void 0:t.value,10),r=parseFloat(i==null?void 0:i.value)||0;if(isNaN(s)||s<0)return;const o=_n(s,r);o!==(e.qty||1)&&await ye({...e,qty:o})}async function xE(n){const e=d.shop.find(c=>c.id===n);if(!e)return;const t=h(`shop-qty-${n}`),i=h(`shop-frac-${n}`),s=parseInt(t==null?void 0:t.value,10)||0,r=parseFloat(i==null?void 0:i.value)||0,o=_n(s,r);r===0&&s===0&&t&&(t.value=1),await ye({...e,qty:o})}async function PE(n){}function $E(n){}async function LE(n){}function DE(n){const e=window._enrichCtx;if(!e)return;const t=e.results[n];if(t){if(e.list==="shop"){const i=d.shop.find(s=>s.id===e.itemId);i&&ye({...i,name:t.name,brand:t.brand||"",category:t.category||"",source:t.source||"search"})}else if(e.list==="inv"){const i=d.inv.find(s=>s.id===e.itemId);i&&re({...i,name:t.name,brand:t.brand||"",category:t.category||i.category,source:t.source||"search"})}Wm(),R(`Updated with "${t.name}" ✓`)}}function Km(n){if(!d.hid||!n)return;const e=Date.now().toString(36)+Math.random().toString(36).slice(2,6);W(`households/${d.hid}/completed_items/${e}`,{name:n,completedAt:new Date().toISOString()}).catch(t=>console.warn("recordCompleted error:",t))}function NE(n){const e=d.shop.find(i=>i.id===n);if(!e)return;const t=!e.checked;ye({...e,checked:t}),t&&Km(e.name),Ye(t?"checked off":"unchecked",Ae(e.name)+" on Shopping List")}function ME(n,e){n.stopPropagation();const t=h("sne-"+e),i=h("sni-"+e);if(!t)return;t.classList.toggle("open")&&i&&(i.focus(),i.setSelectionRange(i.value.length,i.value.length))}function OE(n){const e=h("sni-"+n);if(!e)return;const t=d.shop.find(s=>s.id===n);if(!t)return;const i=e.value.trim();i!==(t.note||"")&&ye({...t,note:i})}function VE(n){const e=h("sqe-"+n),t=h("sqi-"+n);if(!e)return;e.classList.toggle("open")&&t&&(t.focus(),t.select())}function UE(n,e){const t=h("sqi-"+n);if(!t)return;const i=Math.max(1,(parseInt(t.value,10)||1)+e);t.value=i,Qm(n)}function Qm(n){const e=h("sqi-"+n);if(!e)return;const t=d.shop.find(s=>s.id===n);if(!t)return;const i=Math.max(1,parseInt(e.value,10)||1);i!==(t.qty||1)&&ye({...t,qty:i})}function FE(){d.aisleMode=!d.aisleMode;const n=h("aislebtn");n&&(n.style.background=d.aisleMode?"var(--ac)":"",n.style.color=d.aisleMode?"var(--bg)":""),zi()}function BE(n){["list","deals"].forEach(i=>{const s=h("shtab-"+i);s&&s.classList.remove("active");const r=h("sh-"+i+"-body");r&&(r.style.display="none")});const e=h("shtab-"+n);e&&e.classList.add("active");const t=h("sh-"+n+"-body");t&&(t.style.display="block"),n==="deals"&&Jm()}function HE(){const n=d.shop.filter(i=>!i.checked);if(!n.length){R("List is empty!");return}const t=`🛒 Shopping List

`+n.map(i=>{let s="• "+i.name;return(i.qty||1)>1&&(s+=" × "+Io(i.qty)),i.price&&(s+=" (~$"+i.price+")"),s}).join(`
`);navigator.share?navigator.share({title:"Shopping List",text:t}).catch(()=>{}):navigator.clipboard&&navigator.clipboard.writeText(t).then(()=>R("List copied!"))}let Oa={},Tc={};async function jE(){const n=d.shop.filter(t=>t.checked);if(!n.length){R("No completed items!");return}Oa={},Tc={};for(const t of n){const i=await zo(t.name),s=t.name.toLowerCase();i!=null&&i.preferredLocation&&(Oa[s]=i.preferredLocation),i!=null&&i.preferredUnit&&(Tc[s]=i.preferredUnit)}const e=h("atk-body");e.innerHTML=`<div style="padding:16px">
    <p style="font-size:.82rem;color:var(--mt);margin-bottom:16px">Choose where each item goes in your kitchen, then tap Add All.</p>
    ${n.map(t=>{const i=Oa[t.name.toLowerCase()]||Pc(t.name);return`<div class="atk-item" id="atk-${t.id}" data-loc="${i}">
        <div class="atk-name">${t.name}</div>
        <div class="atk-loc">
          <button onclick="setAtkLoc('${t.id}','fridge',this)" class="${i==="fridge"?"sel":""}">🌡 Fridge</button>
          <button onclick="setAtkLoc('${t.id}','freezer',this)" class="${i==="freezer"?"sel":""}">🧊 Freeze</button>
          <button onclick="setAtkLoc('${t.id}','pantry',this)" class="${i==="pantry"?"sel":""}">🥫 Pantry</button>
          <button onclick="setAtkLoc('${t.id}','household',this)" class="${i==="household"?"sel":""}">🏠 House</button>
        </div>
      </div>`}).join("")}
  </div>`,at("atk")}function zE(n,e,t){const i=h("atk-"+n);i.dataset.loc=e,i.querySelectorAll(".atk-loc button").forEach(s=>s.classList.remove("sel")),t.classList.add("sel")}async function qE(){const n=d.shop.filter(i=>i.checked),e=new Date().toLocaleDateString();let t=0;for(const i of n){const s=h("atk-"+i.id);if(!s)continue;const r=s.dataset.loc||Pc(i.name),o=d.inv.find(l=>l.name.toLowerCase()===i.name.toLowerCase()),c=i.qty||1;await re({id:o?o.id:"inv-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:o?o.name:i.name,qty:o?o.qty+c:c,unit:o?o.unit:i.unit&&i.unit!=="unit"?i.unit:Tc[i.name.toLowerCase()]||"unit",location:r,category:o?o.category:Mi({name:i.name}),addedAt:o?o.addedAt:e,brand:o?o.brand:i.brand||"",expiry:o?o.expiry:null,image:o?o.image:i.image||null,source:"shopping"}),xl(i.name,r),await Ui(i.id),t++}Ee("atk"),R(`${t} item${t!==1?"s":""} added to your supplies! 🧺`)}async function WE(){const n=Ni().map(s=>{const r=s.toISOString().split("T")[0];return d.mp[r]?`${s.toLocaleDateString("en-US",{weekday:"short"})}: ${d.mp[r]}`:""}).filter(Boolean).join(", ");if(!n){R("No meals planned yet!");return}const e=d.inv.map(s=>`${s.name} (${Ei(s.qty,s.unit)})`).join(", "),t=document.querySelector('[onclick="buildList()"]'),i=t?t.textContent:"";t&&(t.disabled=!0,t.textContent="⏳ Thinking…");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:500,messages:[{role:"user",content:`Week meals: ${n}
Already have: ${e}
List ONLY ingredients still needed. Return ONLY a bullet list, each line starting "- ". No categories, no headers, no explanation.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",c=[],l=[];o.split(`
`).forEach(P=>{const $=P.match(/^[-•*]\s+(.+)/);if($){const U=$[1].replace(/\*\*/g,"").trim();U&&!d.shop.find(N=>N.name.toLowerCase()===U.toLowerCase())&&c.push({name:U,sel:!0})}});const f=o.split(`
`).filter(P=>P.match(/^[-•*]\s+/)).length,m=d.inv.map(P=>P.name.toLowerCase());if(c.forEach(P=>{const $=d.inv.find(U=>U.name.toLowerCase()===P.name.toLowerCase());$&&$.qty>0&&(P.note=`Have ${Ei($.qty,$.unit)} — need more`)}),!c.length){R("Nothing new needed — you're all stocked! ✓");return}window._bpItems=c;const y=d.inv.length>0?Math.max(0,f-c.length):0,w=c.filter(P=>P.note).length,E=[];y>0&&E.push(`✅ ${y} already in stock`),w>0&&E.push(`⚠️ ${w} partially stocked`),E.push(`🛒 ${c.length} to add`);const A=`<div style="padding:10px 16px;background:var(--acd);border-radius:12px;margin-bottom:12px;font-size:.82rem;color:var(--tx2);line-height:1.6">${E.join("<br>")}</div>`;h("bpList").innerHTML=A+c.map((P,$)=>`<div id="bpitem-${$}" onclick="bpTog(${$})" style="display:flex;align-items:center;gap:12px;padding:13px 16px;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;cursor:pointer;transition:all .15s"><div id="bpck-${$}" style="width:24px;height:24px;border-radius:50%;background:var(--gn);border:2px solid var(--gn);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.8rem;color:#0c0c0a;transition:all .2s">✓</div><div style="flex:1;min-width:0"><div style="font-size:.9rem;font-weight:500">${P.name}</div>${P.note?`<div style="font-size:.72rem;color:var(--am);margin-top:2px">${P.note}</div>`:""}</div></div>`).join(""),Dl(),h("buildPreviewM").classList.add("active")}catch{R("Couldn't reach Claude — check connection")}finally{t&&(t.disabled=!1,t.textContent=i)}}function GE(n){window._bpItems[n].sel=!window._bpItems[n].sel;const e=h("bpck-"+n),t=h("bpitem-"+n);window._bpItems[n].sel?(e.textContent="✓",e.style.background="var(--gn)",e.style.borderColor="var(--gn)",e.style.color="#0c0c0a",t.style.borderColor="var(--b1)"):(e.textContent="",e.style.background="transparent",e.style.borderColor="var(--b2)",t.style.borderColor="var(--b2)"),Dl()}function KE(n){window._bpItems.forEach((e,t)=>{window._bpItems[t].sel=n;const i=h("bpck-"+t),s=h("bpitem-"+t);n?(i.textContent="✓",i.style.background="var(--gn)",i.style.borderColor="var(--gn)",i.style.color="#0c0c0a",s.style.borderColor="var(--b1)"):(i.textContent="",i.style.background="transparent",i.style.borderColor="var(--b2)",s.style.borderColor="var(--b2)")}),Dl()}function Dl(){const n=window._bpItems.filter(t=>t.sel).length,e=h("bpAddBtn");e&&(e.textContent=n?`Add ${n} item${n!==1?"s":""}  ✓`:"Nothing selected"),e&&(e.disabled=!n)}async function QE(){const n=window._bpItems.filter(e=>e.sel);if(!n.length){h("buildPreviewM").classList.remove("active");return}for(const e of n)await ye({id:Date.now().toString()+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"meal-plan"});h("buildPreviewM").classList.remove("active"),R(`Added ${n.length} item${n.length!==1?"s":""}! 🛒`)}function Jm(){const n=h("deals-zip-banner");if(!n)return;const e=d.cfg.zipcode;e?(n.innerHTML=`📍 Searching deals near <strong>${e}</strong> <span style="font-size:.72rem;color:var(--mt)">(change in Settings)</span>`,n.style.borderColor="var(--b2)"):(n.innerHTML=`⚠️ Set your zipcode in <strong style="cursor:pointer;color:var(--ac)" onclick="hideOv('');showOv('settings')">Settings</strong> to find local deals near you.`,n.style.borderColor="var(--am)")}function Ic(n,e){const t=h("dealslist");if(!n||!n.length){t.innerHTML=`<div class="es"><div class="ei">🏷</div><p>No deals found for <strong>${e}</strong>.<br>Try a different search term or check back later for new circulars.</p></div>`;return}t.innerHTML="",n.forEach(i=>{const s=document.createElement("div");s.className="deal-card"+(i.onSale?" deal-match":"");const r=document.createElement("div");r.style.flex="1";const o=document.createElement("div");o.className="deal-store",o.textContent=i.store||"Store";const c=document.createElement("div");if(c.className="deal-name",c.textContent=i.name||"",i.brand||i.size){const m=document.createElement("div");m.style.cssText="font-size:.72rem;color:var(--mt);margin-top:1px",m.textContent=[i.brand,i.size].filter(Boolean).join(" · "),r.appendChild(o),r.appendChild(c),r.appendChild(m)}else r.appendChild(o),r.appendChild(c);const l=document.createElement("div");if(l.style.cssText="display:flex;align-items:baseline;gap:6px;margin-top:4px;flex-wrap:wrap",i.sale_price){const m=document.createElement("span");m.className="deal-price",m.textContent=i.sale_price,l.appendChild(m)}if(i.onSale&&i.regular){const m=document.createElement("span");m.className="deal-orig",m.textContent=i.regular,l.appendChild(m)}if(i.savings){const m=document.createElement("span");m.className="deal-badge",m.textContent="Save "+i.savings,l.appendChild(m)}r.appendChild(l);const f=document.createElement("button");f.className="btn bs bsm",f.style.cssText="align-self:center;flex-shrink:0;margin-left:8px",f.textContent="+ List",(m=>{f.onclick=()=>Ym(m)})(i.name||""),s.appendChild(r),s.appendChild(f),t.appendChild(s)})}function Ec(n){const e=h("deals-stores");!e||!n||!n.length||(e.style.display="block",e.innerHTML='<div style="font-size:.72rem;color:var(--mt);font-weight:600;margin-bottom:4px">Stores with deals</div>'+n.map(t=>`<div style="font-size:.74rem;color:var(--tx2);padding:2px 0">${t.name}</div>`).join(""))}function Ym(n){const e=(n||"").replace(/&#39;/g,"'");d.shop.find(t=>t.name.toLowerCase()===e.toLowerCase())?R("Already on your list!"):(ye({id:Date.now().toString(),name:e,qty:1,checked:!1,src:"deal"}),R(e+" added!"))}async function kc(n){const e=d.cfg.zipcode;if(!e)throw new Error("Set your zipcode in Settings to search for local deals.");const t="ks-deals-"+e+"-"+n.toLowerCase().replace(/\s+/g,"_").substring(0,40),i=ae(t);if(i&&i.ts&&Date.now()-i.ts<72e5)return i;const s=await fetch("/api/deals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({zipcode:e,query:n})}),r=await s.json();if(!s.ok||r.error)throw new Error(r.message||r.error||"Deals API request failed");return Me(t,{...r,ts:Date.now()}),r}async function JE(){const n=h("dealsearch").value.trim();if(!n){R("Enter something to search");return}const e=h("dealsstatus");e.style.display="block",e.style.color="var(--mt)",e.textContent="🔍 Searching deals for "+n+" near "+(d.cfg.zipcode||"your area")+"…",h("dealslist").innerHTML="";try{const t=await kc(n);if(e.style.display="none",t.message){h("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${t.message}</p></div>`;return}t.stores&&Ec(t.stores),Ic(t.deals,n)}catch(t){e.style.color="var(--rd)",e.textContent=t.message||"Unknown error"}}async function YE(){const n=d.shop.filter(i=>!i.checked);if(!n.length){const i=Object.values(d.mp).filter(Boolean);if(!i.length){R("Add items to your list first!");return}if(!confirm(`Your list is empty. Search deals for this week's meals?

`+i.join(", ")))return;const r=h("dealsstatus");r.style.display="block",r.textContent="Searching deals for your meal plan...",h("dealslist").innerHTML="";try{const o=await kc(i.join(", "));if(r.style.display="none",o.message){h("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${o.message}</p></div>`;return}o.stores&&Ec(o.stores),Ic(o.deals,i.join(", "))}catch(o){r.style.color="var(--rd)",r.textContent=o.message}return}const e=h("dealsstatus"),t=n.slice(0,8).map(i=>i.name).join(", ");e.style.display="block",e.style.color="var(--mt)",e.textContent="Searching deals for: "+t+"...",h("dealslist").innerHTML="";try{const i=await kc(t);if(e.style.display="none",i.message){h("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${i.message}</p></div>`;return}i.stores&&Ec(i.stores),i.deals.length?Ic(i.deals,t):h("dealslist").innerHTML='<div class="es"><div class="ei">🏷</div><p>No deals found for your list items.<br/>Try searching for individual items.</p></div>'}catch(i){e.style.color="var(--rd)",e.textContent=i.message}}const Xm=["Piece","Unit","Pack","Box","Bag","Bottle","Jar","Can","Bunch","Head","Loaf","Dozen","Carton","Tube","Roll","Gallon","Half Gallon","Liter","Pound","Oz","Clove"];function Zm(n){if(!n.brand)return!1;if(n.source==="scan"||n.source==="Barcode")return!0;if(n.source==="search"&&n.searchQuery){const e=n.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),t=n.brand.toLowerCase();return e.some(i=>t.includes(i))}return!1}function XE(n){rf[Mi(n)];const e=xt(n.expiry),t=e?e.c==="expired"?" expired":e.c==="expiring"?" expiring":"":"",i=e?`<div class="etag ${e.c}">${e.l}</div>`:"",s=Zm(n)?`<div class="sh-brand">${n.brand}</div>`:"";return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="inv">
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
          <div class="iqt">${Io(n.qty)}</div>
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
  </div>`}function er(){const n=(r,o)=>r.name.localeCompare(o.name),e=d.it==="all"?d.inv.slice().sort(n):d.inv.filter(r=>r.location===d.it).slice().sort(n),t=h("isub"),i={all:"items",fridge:"fridge items",freezer:"frozen items",pantry:"pantry items",household:"household items"};t&&(t.textContent=e.length+" "+(i[d.it]||"items")),Um();const s=h("ibody");if(s){if(!e.length){s.innerHTML='<div class="es"><div class="ei">🧺</div><p>No items here yet.<br/>Tap + Add item to get started.</p></div>';return}s.innerHTML=`<div class="ilst">${e.map(XE).join("")}</div>`,d.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(r=>{r.classList.add("selecting"),d.selectedIds.has(r.dataset.id)&&r.classList.add("selected")})}}function ZE(n){tr(n)}async function tr(n){if(d.selectMode)return;const e=d.inv.find(N=>N.id===n);if(!e)return;const t=h("invItemDetailContent");if(!t)return;const s=`<div class="item-detail-img-ph" style="display:flex;align-items:center;justify-content:center">
    <div style="font-size:1.6rem">${rf[Mi(e)]||"🛒"}</div>
  </div>`,r="",o=Zm(e),c=e.unit||"Unit",l=Xm.map(N=>`<option value="${N}"${N===c?" selected":""}>${N}</option>`).join(""),f=e.restockThreshold!=null?e.restockThreshold:Rl(c),m=xt(e.expiry);let y=`<div class="item-detail-header">
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
  </div>`;const{whole:w,frac:E}=Xr(e.qty);y+=`<div class="item-detail-section">
    <div class="item-detail-label">Quantity</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeInvQty('${e.id}',-1)">−</button>
        <input class="qinp" id="inv-qty-${e.id}" type="number" min="0" max="99" value="${w}" style="width:48px;text-align:center" onblur="changeInvQtyDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeInvQty('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${za(`inv-frac-${e.id}`,E).replace("<select",`<select onchange="changeInvFrac('`+e.id+`')"`)}
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
  </div>`;const{whole:A,frac:P}=Xr(f);y+=`<div class="item-detail-section">
    <div class="item-detail-label">Restock when below</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeInvThreshold('${e.id}',-1)">−</button>
        <input class="qinp" id="inv-thresh-${e.id}" type="number" min="0" max="99" value="${A}" style="width:48px;text-align:center" onblur="changeInvThresholdDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeInvThreshold('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${za(`inv-threshfrac-${e.id}`,P).replace("<select",`<select onchange="changeInvThreshFrac('`+e.id+`')"`)}
      </div>
    </div>
  </div>`,y+=`<div class="item-detail-section" style="display:flex;align-items:center;justify-content:space-between">
    <div class="item-detail-label" style="margin-bottom:0">Don't add to Running Low</div>
    <label class="toggle-switch">
      <input type="checkbox" ${e.doNotRestock?"checked":""} onchange="toggleDoNotRestock('${e.id}',this.checked)"/>
      <span class="toggle-slider"></span>
    </label>
  </div>`,y+=`<button class="btn bf" style="margin-top:12px;background:var(--gnd);color:var(--gn);border:1.5px solid var(--gn)" onclick="addInvToShopping('${e.id}')">🛒 Add to Shopping List</button>
  <button class="btn bd bf" onclick="closeInvItemDetail();remItem('${e.id}')" style="margin-top:8px">Remove</button>`,t.innerHTML=y;const $=h("invItemDetailBackdrop"),U=h("invItemDetailSheet");$&&$.classList.add("active"),U&&U.classList.add("active")}function eg(){const n=h("invItemDetailBackdrop"),e=h("invItemDetailSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}async function ek(n){}function tk(n){}async function nk(n){}async function ik(n){const e=d.inv.find(t=>t.id===n);if(e){const t=xt(e.expiry);t&&(t.c==="expired"||t.c==="expiring")&&await lp(e.name)}await Ws(n),R("Item removed"),Ee("adj")}async function sk(n,e){const t=d.inv.find(i=>i.id===d.adjId);t&&(document.querySelectorAll("#adjbody .lbtn").forEach(i=>i.classList.remove("sel")),e.classList.add("sel"),await re({...t,location:n}),xl(t.name,n))}async function rk(n){const e=d.inv.find(i=>i.id===d.adjId);if(!e)return;const t=Math.max(0,(e.qty||1)+n);t<=0||(h("adjqty").value=t,await re({...e,qty:t}))}async function ok(){const n=d.inv.find(t=>t.id===d.adjId);if(!n)return;const e=parseInt(h("adjqty").value);!isNaN(e)&&e>=0&&await re({...n,qty:e})}async function ak(){const n=d.inv.find(e=>e.id===d.adjId);n&&await re({...n,expiry:h("adjexp").value||null})}async function ck(){const n=d.inv.find(t=>t.id===d.adjId);if(!n)return;const e=(h("adjnote").value||"").trim();await re({...n,note:e||null})}async function lk(){const n=d.inv.find(i=>i.id===d.adjId);if(!n)return;const e=h("adjunit").value;await re({...n,unit:e}),Pl(n.name,e);const t=d.shop.find(i=>i.name.toLowerCase().trim()===n.name.toLowerCase().trim());t&&await ye({...t,unit:e}),R("Unit updated everywhere")}async function uk(n){const e=d.inv.find(s=>s.id===d.adjId);if(!e)return;const t=e.restockThreshold!=null?e.restockThreshold:Rl(e.unit),i=Math.max(0,t+n);h("adjlowthresh").value=i,await re({...e,restockThreshold:i})}async function dk(){const n=d.inv.find(t=>t.id===d.adjId);if(!n)return;const e=parseInt(h("adjlowthresh").value);!isNaN(e)&&e>=0&&await re({...n,restockThreshold:e})}async function hk(){var t;const n=d.inv.find(i=>i.id===d.adjId);if(!n)return;const e=((t=h("adjdonotrestock"))==null?void 0:t.checked)||!1;await re({...n,doNotRestock:e})}async function fk(n,e){const t=d.inv.find(r=>r.id===n);if(!t)return;const i={...t,unit:e};t.restockThreshold==null,await re(i),Pl(t.name,e);const s=d.shop.find(r=>r.name.toLowerCase().trim()===t.name.toLowerCase().trim());s&&await ye({...s,unit:e}),R("Unit updated everywhere"),tr(n)}async function pk(n,e){const t=d.inv.find(f=>f.id===n);if(!t)return;const i=h(`inv-thresh-${n}`),s=h(`inv-threshfrac-${n}`),r=parseInt(i==null?void 0:i.value,10)||0,o=parseFloat(s==null?void 0:s.value)||0,c=Math.max(0,r+e),l=c+o;i&&(i.value=c),await re({...t,restockThreshold:Math.max(0,l)})}async function mk(n){const e=d.inv.find(o=>o.id===n);if(!e)return;const t=h(`inv-thresh-${n}`),i=h(`inv-threshfrac-${n}`),s=parseInt(t==null?void 0:t.value,10),r=parseFloat(i==null?void 0:i.value)||0;isNaN(s)||s<0||await re({...e,restockThreshold:Math.max(0,s+r)})}async function gk(n){const e=d.inv.find(o=>o.id===n);if(!e)return;const t=h(`inv-thresh-${n}`),i=h(`inv-threshfrac-${n}`),s=parseInt(t==null?void 0:t.value,10)||0,r=parseFloat(i==null?void 0:i.value)||0;await re({...e,restockThreshold:Math.max(0,s+r)})}async function yk(n,e){const t=d.inv.find(i=>i.id===n);t&&await re({...t,doNotRestock:e})}async function vk(n,e,t){const i=d.inv.find(r=>r.id===n);if(!i)return;const s=h("invItemDetailContent");s&&s.querySelectorAll(".lbtn").forEach(r=>r.classList.remove("sel")),t&&t.classList.add("sel"),await re({...i,location:e}),xl(i.name,e)}async function wk(n,e){const t=d.inv.find(f=>f.id===n);if(!t)return;const i=h(`inv-qty-${n}`),s=h(`inv-frac-${n}`),r=parseInt(i==null?void 0:i.value,10)||0,o=parseFloat(s==null?void 0:s.value)||0,c=Math.max(0,Math.min(99,r+e)),l=_n(c,o);e<0&&_n(r,o)<=.25||(i&&(i.value=Math.floor(l)),c===0&&o===0&&s&&(s.value="0.25"),await re({...t,qty:l}))}async function _k(n){const e=d.inv.find(c=>c.id===n);if(!e)return;const t=h(`inv-qty-${n}`),i=h(`inv-frac-${n}`),s=parseInt(t==null?void 0:t.value,10),r=parseFloat(i==null?void 0:i.value)||0;if(isNaN(s)||s<0)return;const o=_n(s,r);await re({...e,qty:o})}async function bk(n){const e=d.inv.find(c=>c.id===n);if(!e)return;const t=h(`inv-qty-${n}`),i=h(`inv-frac-${n}`),s=parseInt(t==null?void 0:t.value,10)||0,r=parseFloat(i==null?void 0:i.value)||0,o=_n(s,r);r===0&&s===0&&t&&(t.value=1),await re({...e,qty:o})}async function Tk(n){const e=d.inv.find(i=>i.id===n);if(!e)return;const t=h(`inv-expiry-${n}`);await re({...e,expiry:(t==null?void 0:t.value)||null})}async function Ik(n){const e=d.inv.find(t=>t.id===n);e&&(await re({...e,expiry:null}),tr(n))}async function Ek(n){const e=d.inv.find(i=>i.id===n);if(!e)return;const t=new Date().toISOString().split("T")[0];await re({...e,expiry:t}),tr(n)}async function kk(n){const e=d.inv.find(s=>s.id===n);if(!e)return;const t=h(`inv-note-${n}`),i=((t==null?void 0:t.value)||"").trim();await re({...e,note:i||null})}function Sk(n){d.it=n,document.querySelectorAll(".itab").forEach(t=>t.classList.remove("active"));const e=h("itab-"+n);e&&e.classList.add("active"),er()}async function Ck(){const n=h("man").value.trim();if(!n)return;const e=h("mac").value,t=h("mau").value.trim()||"unit",i=Math.max(1,parseInt(h("maq").value)||1),s=h("mae").value||null,r="itm-"+n.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now();await re({id:r,barcode:r,name:n,brand:"",unit:t,qty:i,location:d.maL,category:e,image:null,source:"Manual",expiry:s,addedAt:new Date().toLocaleDateString()}),h("man").value="",h("maq").value=1,h("mae").value="",h("mabtn").disabled=!0,R(`${n} added!`),Ee("madd"),Ll()}function Ak(){h("mabtn").disabled=!h("man").value.trim()}function Rk(n){const e=h("maq");e.value=Math.max(1,(parseInt(e.value)||1)+n)}function xk(n,e){d.maL=n,document.querySelectorAll("#ov-madd .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}async function Pk(){const n=h("imptxt").value.trim();if(!n)return;let e=0,t=0,i="pantry";for(const s of n.split(`
`)){const r=s.toLowerCase();r.includes("fridge")?i="fridge":r.includes("freezer")?i="freezer":r.includes("pantry")&&(i="pantry");const o=s.match(/^\|\s*([^|]+?)\s*\|\s*(\d+(?:\.\d+)?)\s*\|\s*([^|]+?)\s*\|/),c=s.match(/^[-*]\s+(.+?):\s*(\d+(?:\.\d+)?)\s*([a-zA-Z%\/]+.*)?$/);let l,f,m;if(o?(l=o[1].trim(),f=parseFloat(o[2]),m=o[3].trim()):c&&(l=c[1].trim(),f=parseFloat(c[2]),m=(c[3]||"unit").trim()),l&&f&&l!=="Item"&&l!=="---"&&!l.startsWith("-")){const y="item-imp-"+l.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),w=d.inv.find(E=>E.id===y);await re({id:y,barcode:y,name:l,brand:"",unit:m||"unit",qty:f,location:i,category:"Imported",image:null,source:"Imported",expiry:null,addedAt:w?w.addedAt:new Date().toLocaleDateString()}),w?t++:e++}}h("imptxt").value="",R(`Imported ${e} new, updated ${t}`),Ee("import")}let Cs=null,wn=null,qo="fridge",st=null,Va=!1,Cr="",Ua=!1;const us=new Map,$k=300*1e3,Lk=30;function Dk(){const n=h("invAddBackdrop"),e=h("invAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),qo="fridge",document.querySelectorAll("#invAddSheet .lbtn").forEach(i=>i.classList.remove("sel"));const t=h("invAddLoc-fridge");t&&t.classList.add("sel"),setTimeout(()=>{const i=h("invi");i&&(i.value="",i.focus())},150)}function nr(){const n=h("invAddBackdrop"),e=h("invAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),Nl()}function Nk(){nr(),window.openScanForInventory&&window.openScanForInventory()}function Mk(){nr(),tg()}function Ok(n,e){qo=n,document.querySelectorAll("#invAddSheet .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function Vk(){const n=h("invAddNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=h("invAddNoteInp");t&&t.focus()}}async function Uk(){const n=h("invi"),e=n?n.value.trim():"";if(!e)return;let t=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||1):s&&(t=s[2].trim(),i=parseInt(s[1],10)||1);const o=h("invAddNoteInp"),c=o?o.value.trim():"",l=await zo(t),f=(l==null?void 0:l.preferredLocation)||qo,m=(l==null?void 0:l.preferredUnit)||null,y="itm-"+t.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),w={id:y,barcode:y,name:t,brand:"",unit:m||"unit",qty:i,location:f,category:Mi({name:t}),image:null,source:"Manual",expiry:null,addedAt:new Date().toLocaleDateString()};c&&(w.note=c),re(w),R(`${t} added!`),n&&(n.value=""),o&&(o.value="");const E=h("invAddNoteWrap");E&&(E.style.display="none"),Nl(),nr(),Ll()}function Fk(){Cs&&clearTimeout(Cs);const n=h("invi"),e=n?n.value.trim():"",t=h("invSearchDropdown");if(!e||e.length<2){t&&(t.classList.remove("active"),t.innerHTML=""),wn=null;return}Cs=setTimeout(()=>zk(e),350)}function Bk(n){if(!n)return"NONE";const e=n.toLowerCase();return e.includes("kroger.com")?"Kroger (real product)":e.includes("img.spoonacular.com/products")?"Spoonacular product (real photo)":e.includes("img.spoonacular.com/ingredients")?"Spoonacular ingredient (illustration)":e.includes("openfoodfacts.org")?"Open Food Facts (real photo)":e.includes("edamam")?"Edamam":"Other: "+new URL(n).hostname}function Oh(n){const e=h("invSearchDropdown");!e||!n.length||(wn=n,n.forEach((t,i)=>{const s=Bk(t.image);console.log(`[InvDropdown] #${i} "${t.name}" → image: ${s} | url: ${t.image||"(none)"} | score: ${t._score}`)}),e.innerHTML=n.map((t,i)=>{const s='<div class="enrich-img-ph">🛒</div>',r=t.category&&t.category!=="General"?`<div class="enrich-cat">${t.category}</div>`:"";return`<div class="enrich-row" onclick="pickInvInlineResult(${i})">
      ${s}
      <div class="enrich-text">
        <div class="enrich-name">${t.name}</div>
        ${r}
      </div>
    </div>`}).join(""),e.classList.add("active"))}async function Hk(n){return null}async function jk(n){const e=n.toLowerCase(),t=us.get(e);if(t&&Date.now()-t.ts<$k)return t.scored;const i=d.hid?`&hid=${encodeURIComponent(d.hid)}`:"";let o=(await(await fetch(`/api/text-search?q=${encodeURIComponent(n)}${i}`)).json()).results||[];const c=n.toLowerCase().split(/\s+/).filter(f=>f.length>=2);o=o.filter(f=>{const m=(f.name||"").toLowerCase();return c.some(y=>m.includes(y))});const l=o.map(f=>({...f,_score:kE(f.name||"",n)})).filter(f=>f._score>=15).sort((f,m)=>m._score-f._score).slice(0,5);return us.set(e,{scored:l,ts:Date.now()}),us.size>Lk&&us.delete(us.keys().next().value),l}async function zk(n){const e=h("invSearchDropdown");if(e){e.innerHTML='<div class="search-hint">Searching…</div>',e.classList.add("active");try{const t=Hk(n),i=jk(n),s=await t;s&&(h("invi")?h("invi").value.trim():"").toLowerCase()===n.toLowerCase()&&(console.log(`[InvSearch] Instant custom product match for "${n}"`),Oh([s]));const r=await i;if((h("invi")?h("invi").value.trim():"").toLowerCase()!==n.toLowerCase())return;let c=r;if(s){const l=normalizeProductName(s.name),f=r.filter(m=>normalizeProductName(m.name)!==l);c=[s,...f].slice(0,5)}if(!c.length){e.classList.remove("active"),e.innerHTML="",wn=null;return}Oh(c)}catch(t){console.warn("Inventory inline search failed:",t),e.classList.remove("active"),e.innerHTML="",wn=null}}}async function qk(n){if(!wn||!wn[n])return;const e=wn[n],t=h("invAddNoteInp"),i=t?t.value.trim():"",s=await zo(e.name),r="itm-"+(e.name||"item").toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),o={id:r,barcode:r,name:e.name,brand:e.brand||"",unit:(s==null?void 0:s.preferredUnit)||"unit",qty:1,location:(s==null?void 0:s.preferredLocation)||qo,category:e.category||Mi({name:e.name}),source:e.source||"search",expiry:null,addedAt:new Date().toLocaleDateString()};i&&(o.note=i),re(o),R(`Added "${e.name}" ✓`);const c=h("invi");c&&(c.value=""),t&&(t.value="");const l=h("invAddNoteWrap");l&&(l.style.display="none"),Nl(),nr()}function Nl(){Cs&&clearTimeout(Cs),wn=null;const n=h("invSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}function Wk(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=h("invAddMicOpt");e&&(e.style.display="")}function Vh(n){const e=h("inv-micstatus");e&&e.classList.toggle("visible",n)}function tg(){if(Va&&st){Ua=!0,st.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){R("Voice input not supported");return}st=new n,st.lang="en-US",st.interimResults=!0,st.maxAlternatives=1,st.continuous=!1,Cr="",Va=!0,Vh(!0),st.onresult=e=>{let t="";for(let s=e.resultIndex;s<e.results.length;s++){const r=e.results[s][0].transcript;e.results[s].isFinal?Cr+=r:t+=r}const i=h("invi");i&&(i.value=(Cr+t).trim())},st.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&R("Couldn't hear that — try again")},st.onend=async()=>{Va=!1,Vh(!1),st=null;let e=Cr.trim();if(!e&&Ua){const o=h("invi");e=o?o.value.trim():""}if(Ua=!1,!e)return;const t=await zo(e),i="itm-"+e.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),s=(t==null?void 0:t.preferredLocation)||Pc(e);re({id:i,barcode:i,name:e,brand:"",unit:(t==null?void 0:t.preferredUnit)||"unit",qty:1,location:s,category:Mi({name:e}),image:null,source:"Voice",expiry:null,addedAt:new Date().toLocaleDateString()}),R(`Added "${e}" to ${s}`);const r=h("invi");r&&(r.value=""),Ll()},st.start()}async function Gk(n){const{svShopItem:e}=await pE(async()=>{const{svShopItem:s}=await Promise.resolve().then(()=>jb);return{svShopItem:s}},void 0),t=d.inv.find(s=>s.id===n);if(!t)return;if(d.shop.find(s=>s.name.toLowerCase()===t.name.toLowerCase()&&!s.checked)){R(`${t.name} is already on your list`);return}await e({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:t.name,qty:1,checked:!1,brand:t.brand||"",image:t.image||null,src:"supplies"}),R(`${t.name} added to shopping list 🛒`),eg()}/**
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
 */const ng="firebasestorage.googleapis.com",ig="storageBucket",Kk=120*1e3,Qk=600*1e3;/**
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
 */class ve extends Lt{constructor(e,t,i=0){super(Fa(e),`Firebase Storage: ${t} (${Fa(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ve.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Fa(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ge;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ge||(ge={}));function Fa(n){return"storage/"+n}function Ml(){const n="An unknown error occurred, please check the error payload for server response.";return new ve(ge.UNKNOWN,n)}function Jk(n){return new ve(ge.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Yk(n){return new ve(ge.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Xk(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ve(ge.UNAUTHENTICATED,n)}function Zk(){return new ve(ge.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function eS(n){return new ve(ge.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function tS(){return new ve(ge.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function nS(){return new ve(ge.CANCELED,"User canceled the upload/download.")}function iS(n){return new ve(ge.INVALID_URL,"Invalid URL '"+n+"'.")}function sS(n){return new ve(ge.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function rS(){return new ve(ge.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ig+"' property when initializing the app?")}function oS(){return new ve(ge.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function aS(){return new ve(ge.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function cS(n){return new ve(ge.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Sc(n){return new ve(ge.INVALID_ARGUMENT,n)}function sg(){return new ve(ge.APP_DELETED,"The Firebase app was deleted.")}function lS(n){return new ve(ge.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function As(n,e){return new ve(ge.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function ds(n){throw new ve(ge.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class tt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=tt.makeFromUrl(e,t)}catch{return new tt(e,"")}if(i.path==="")return i;throw sS(e)}static makeFromUrl(e,t){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function f(D){D.path_=decodeURIComponent(D.path)}const m="v[A-Za-z0-9_]+",y=t.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",E=new RegExp(`^https?://${y}/${m}/b/${s}/o${w}`,"i"),A={bucket:1,path:3},P=t===ng?"(?:storage.googleapis.com|storage.cloud.google.com)":t,$="([^?#]*)",U=new RegExp(`^https?://${P}/${s}/${$}`,"i"),M=[{regex:c,indices:l,postModify:r},{regex:E,indices:A,postModify:f},{regex:U,indices:{bucket:1,path:2},postModify:f}];for(let D=0;D<M.length;D++){const F=M[D],j=F.regex.exec(e);if(j){const b=j[F.indices.bucket];let v=j[F.indices.path];v||(v=""),i=new tt(b,v),F.postModify(i);break}}if(i==null)throw iS(e);return i}}class uS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function dS(n,e,t){let i=1,s=null,r=null,o=!1,c=0;function l(){return c===2}let f=!1;function m(...$){f||(f=!0,e.apply(null,$))}function y($){s=setTimeout(()=>{s=null,n(E,l())},$)}function w(){r&&clearTimeout(r)}function E($,...U){if(f){w();return}if($){w(),m.call(null,$,...U);return}if(l()||o){w(),m.call(null,$,...U);return}i<64&&(i*=2);let M;c===1?(c=2,M=0):M=(i+Math.random())*1e3,y(M)}let A=!1;function P($){A||(A=!0,w(),!f&&(s!==null?($||(c=2),clearTimeout(s),y(0)):$||(c=1)))}return y(0),r=setTimeout(()=>{o=!0,P(!0)},t),P}function hS(n){n(!1)}/**
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
 */function fS(n){return n!==void 0}function pS(n){return typeof n=="object"&&!Array.isArray(n)}function Ol(n){return typeof n=="string"||n instanceof String}function Uh(n){return Vl()&&n instanceof Blob}function Vl(){return typeof Blob<"u"}function Fh(n,e,t,i){if(i<e)throw Sc(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw Sc(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function Wo(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function rg(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const s=e(i)+"="+e(n[i]);t=t+s+"&"}return t=t.slice(0,-1),t}var qn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(qn||(qn={}));/**
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
 */function mS(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||s||r}/**
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
 */class gS{constructor(e,t,i,s,r,o,c,l,f,m,y,w=!0,E=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=f,this.progressCallback_=m,this.connectionFactory_=y,this.retry=w,this.isUsingEmulator=E,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((A,P)=>{this.resolve_=A,this.reject_=P,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Ar(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=c=>{const l=c.loaded,f=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,f)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const c=r.getErrorCode()===qn.NO_ERROR,l=r.getStatus();if(!c||mS(l,this.additionalRetryCodes_)&&this.retry){const m=r.getErrorCode()===qn.ABORT;i(!1,new Ar(!1,null,m));return}const f=this.successCodes_.indexOf(l)!==-1;i(!0,new Ar(f,r))})},t=(i,s)=>{const r=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());fS(l)?r(l):r()}catch(l){o(l)}else if(c!==null){const l=Ml();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?sg():nS();o(l)}else{const l=tS();o(l)}};this.canceled_?t(!1,new Ar(!1,null,!0)):this.backoffId_=dS(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&hS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ar{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function yS(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function vS(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function wS(n,e){e&&(n["X-Firebase-GMPID"]=e)}function _S(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function bS(n,e,t,i,s,r,o=!0,c=!1){const l=rg(n.urlParams),f=n.url+l,m=Object.assign({},n.headers);return wS(m,e),yS(m,t),vS(m,r),_S(m,i),new gS(f,n.method,m,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o,c)}/**
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
 */function TS(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function IS(...n){const e=TS();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(Vl())return new Blob(n);throw new ve(ge.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function ES(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function kS(n){if(typeof atob>"u")throw cS("base-64");return atob(n)}/**
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
 */const Et={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ba{constructor(e,t){this.data=e,this.contentType=t||null}}function SS(n,e){switch(n){case Et.RAW:return new Ba(og(e));case Et.BASE64:case Et.BASE64URL:return new Ba(ag(n,e));case Et.DATA_URL:return new Ba(AS(e),RS(e))}throw Ml()}function og(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const r=i,o=n.charCodeAt(++t);i=65536|(r&1023)<<10|o&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function CS(n){let e;try{e=decodeURIComponent(n)}catch{throw As(Et.DATA_URL,"Malformed data URL.")}return og(e)}function ag(n,e){switch(n){case Et.BASE64:{const s=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(s||r)throw As(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Et.BASE64URL:{const s=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(s||r)throw As(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=kS(e)}catch(s){throw s.message.includes("polyfill")?s:As(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}class cg{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw As(Et.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=xS(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function AS(n){const e=new cg(n);return e.base64?ag(Et.BASE64,e.rest):CS(e.rest)}function RS(n){return new cg(n).contentType}function xS(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class ln{constructor(e,t){let i=0,s="";Uh(e)?(this.data_=e,i=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Uh(this.data_)){const i=this.data_,s=ES(i,e,t);return s===null?null:new ln(s)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new ln(i,!0)}}static getBlob(...e){if(Vl()){const t=e.map(i=>i instanceof ln?i.data_:i);return new ln(IS.apply(null,t))}else{const t=e.map(o=>Ol(o)?SS(Et.RAW,o).data:o.data_);let i=0;t.forEach(o=>{i+=o.byteLength});const s=new Uint8Array(i);let r=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)s[r++]=o[c]}),new ln(s,!0)}}uploadData(){return this.data_}}/**
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
 */function lg(n){let e;try{e=JSON.parse(n)}catch{return null}return pS(e)?e:null}/**
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
 */function PS(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function $S(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function ug(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function LS(n,e){return e}class We{constructor(e,t,i,s){this.server=e,this.local=t||e,this.writable=!!i,this.xform=s||LS}}let Rr=null;function DS(n){return!Ol(n)||n.length<2?n:ug(n)}function dg(){if(Rr)return Rr;const n=[];n.push(new We("bucket")),n.push(new We("generation")),n.push(new We("metageneration")),n.push(new We("name","fullPath",!0));function e(r,o){return DS(o)}const t=new We("name");t.xform=e,n.push(t);function i(r,o){return o!==void 0?Number(o):o}const s=new We("size");return s.xform=i,n.push(s),n.push(new We("timeCreated")),n.push(new We("updated")),n.push(new We("md5Hash",null,!0)),n.push(new We("cacheControl",null,!0)),n.push(new We("contentDisposition",null,!0)),n.push(new We("contentEncoding",null,!0)),n.push(new We("contentLanguage",null,!0)),n.push(new We("contentType",null,!0)),n.push(new We("metadata","customMetadata",!0)),Rr=n,Rr}function NS(n,e){function t(){const i=n.bucket,s=n.fullPath,r=new tt(i,s);return e._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:t})}function MS(n,e,t){const i={};i.type="file";const s=t.length;for(let r=0;r<s;r++){const o=t[r];i[o.local]=o.xform(i,e[o.server])}return NS(i,n),i}function hg(n,e,t){const i=lg(e);return i===null?null:MS(n,i,t)}function OS(n,e,t,i){const s=lg(e);if(s===null||!Ol(s.downloadTokens))return null;const r=s.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(f=>{const m=n.bucket,y=n.fullPath,w="/b/"+o(m)+"/o/"+o(y),E=Wo(w,t,i),A=rg({alt:"media",token:f});return E+A})[0]}function VS(n,e){const t={},i=e.length;for(let s=0;s<i;s++){const r=e[s];r.writable&&(t[r.server]=n[r.local])}return JSON.stringify(t)}class Ul{constructor(e,t,i,s){this.url=e,this.method=t,this.handler=i,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function fg(n){if(!n)throw Ml()}function US(n,e){function t(i,s){const r=hg(n,s,e);return fg(r!==null),r}return t}function FS(n,e){function t(i,s){const r=hg(n,s,e);return fg(r!==null),OS(r,s,n.host,n._protocol)}return t}function pg(n){function e(t,i){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=Zk():s=Xk():t.getStatus()===402?s=Yk(n.bucket):t.getStatus()===403?s=eS(n.path):s=i,s.status=t.getStatus(),s.serverResponse=i.serverResponse,s}return e}function mg(n){const e=pg(n);function t(i,s){let r=e(i,s);return i.getStatus()===404&&(r=Jk(n.path)),r.serverResponse=s.serverResponse,r}return t}function BS(n,e,t){const i=e.fullServerUrl(),s=Wo(i,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,c=new Ul(s,r,FS(n,t),o);return c.errorHandler=mg(e),c}function HS(n,e){const t=e.fullServerUrl(),i=Wo(t,n.host,n._protocol),s="DELETE",r=n.maxOperationRetryTime;function o(l,f){}const c=new Ul(i,s,o,r);return c.successCodes=[200,204],c.errorHandler=mg(e),c}function jS(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function zS(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=jS(null,e)),i}function qS(n,e,t,i,s){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let M="";for(let D=0;D<2;D++)M=M+Math.random().toString().slice(2);return M}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const f=zS(e,i,s),m=VS(f,t),y="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+l+`\r
Content-Type: `+f.contentType+`\r
\r
`,w=`\r
--`+l+"--",E=ln.getBlob(y,i,w);if(E===null)throw oS();const A={name:f.fullPath},P=Wo(r,n.host,n._protocol),$="POST",U=n.maxUploadRetryTime,N=new Ul(P,$,US(n,t),U);return N.urlParams=A,N.headers=o,N.body=E.uploadData(),N.errorHandler=pg(e),N}class WS{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=qn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=qn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=qn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,s,r){if(this.sent_)throw ds("cannot .send() more than once");if(Rn(e)&&i&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ds("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ds("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ds("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ds("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class GS extends WS{initXhr(){this.xhr_.responseType="text"}}function Fl(){return new GS}/**
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
 */class Xn{constructor(e,t){this._service=e,t instanceof tt?this._location=t:this._location=tt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Xn(e,t)}get root(){const e=new tt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ug(this._location.path)}get storage(){return this._service}get parent(){const e=PS(this._location.path);if(e===null)return null;const t=new tt(this._location.bucket,e);return new Xn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw lS(e)}}function KS(n,e,t){n._throwIfRoot("uploadBytes");const i=qS(n.storage,n._location,dg(),new ln(e,!0),t);return n.storage.makeRequestWithTokens(i,Fl).then(s=>({metadata:s,ref:n}))}function QS(n){n._throwIfRoot("getDownloadURL");const e=BS(n.storage,n._location,dg());return n.storage.makeRequestWithTokens(e,Fl).then(t=>{if(t===null)throw aS();return t})}function JS(n){n._throwIfRoot("deleteObject");const e=HS(n.storage,n._location);return n.storage.makeRequestWithTokens(e,Fl)}function YS(n,e){const t=$S(n._location.path,e),i=new tt(n._location.bucket,t);return new Xn(n.storage,i)}/**
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
 */function XS(n){return/^[A-Za-z]+:\/\//.test(n)}function ZS(n,e){return new Xn(n,e)}function gg(n,e){if(n instanceof Bl){const t=n;if(t._bucket==null)throw rS();const i=new Xn(t,t._bucket);return e!=null?gg(i,e):i}else return e!==void 0?YS(n,e):n}function eC(n,e){if(e&&XS(e)){if(n instanceof Bl)return ZS(n,e);throw Sc("To use ref(service, url), the first argument must be a Storage instance.")}else return gg(n,e)}function Bh(n,e){const t=e==null?void 0:e[ig];return t==null?null:tt.makeFromBucketSpec(t,n)}function tC(n,e,t,i={}){n.host=`${e}:${t}`;const s=Rn(e);s&&($c(`https://${n.host}/b`),Lc("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:r}=i;r&&(n._overrideAuthToken=typeof r=="string"?r:ff(r,n.app.options.projectId))}class Bl{constructor(e,t,i,s,r,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._isUsingEmulator=o,this._bucket=null,this._host=ng,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Kk,this._maxUploadRetryTime=Qk,this._requests=new Set,s!=null?this._bucket=tt.makeFromBucketSpec(s,this._host):this._bucket=Bh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=tt.makeFromBucketSpec(this._url,e):this._bucket=Bh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Fh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Fh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Ge(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Xn(this,e)}_makeRequest(e,t,i,s,r=!0){if(this._deleted)return new uS(sg());{const o=bS(e,this._appId,i,s,t,this._firebaseVersion,r,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,s).getPromise()}}const Hh="@firebase/storage",jh="0.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg="storage";function nC(n,e,t){return n=De(n),KS(n,e,t)}function iC(n){return n=De(n),QS(n)}function sC(n){return n=De(n),JS(n)}function vg(n,e){return n=De(n),eC(n,e)}function rC(n=Mc(),e){n=De(n);const i=ko(n,yg).getImmediate({identifier:e}),s=uf("storage");return s&&oC(i,...s),i}function oC(n,e,t,i={}){tC(n,e,t,i)}function aC(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Bl(t,i,s,e,Zn)}function cC(){Kn(new bn(yg,aC,"PUBLIC").setMultipleInstances(!0)),kt(Hh,jh,""),kt(Hh,jh,"esm2020")}cC();const wg=rC(Gc);function lC(n,e,t,i){return new Promise((s,r)=>{const o=new Image,c=new FileReader;c.onload=l=>{o.onload=()=>{let f=o.width,m=o.height;if(f>e||m>t){const P=Math.min(e/f,t/m);f=Math.round(f*P),m=Math.round(m*P)}const y=document.createElement("canvas");y.width=f,y.height=m,y.getContext("2d").drawImage(o,0,0,f,m);let E=.82;const A=()=>{y.toBlob(P=>{if(!P)return r(new Error("Canvas compression failed"));P.size<=i||E<=.3?s(P):(E-=.1,A())},"image/jpeg",E)};A()},o.onerror=()=>r(new Error("Failed to load image")),o.src=l.target.result},c.onerror=()=>r(new Error("Failed to read file")),c.readAsDataURL(n)})}async function Hl(n,e,t,i,s){if(!n)throw new Error("No file provided");const r=await lC(n,t,i,s);console.log(`[uploadRecipeImage] Compressed to ${(r.size/1024).toFixed(1)}KB → ${e}`);const o=vg(wg,e);await nC(o,r,{contentType:"image/jpeg"});const c=await iC(o);return console.log("[uploadRecipeImage] Upload complete:",e),c}async function _g(n,e){return Hl(n,`recipes/${e}/cover.jpg`,800,600,300*1024)}async function uC(n,e,t){return Hl(n,`recipes/${e}/steps/${t}.jpg`,800,600,300*1024)}async function dC(n,e,t,i){return Hl(n,`recipes/${e}/comments/${t}/${i}.jpg`,600,600,200*1024)}async function bg(n){try{const e=vg(wg,n);await sC(e),console.log("[deleteRecipeStorageFile] Deleted:",n)}catch(e){e.code!=="storage/object-not-found"&&console.error("[deleteRecipeStorageFile] Error:",e)}}const hC=20,fC=.4,pC="cubic-bezier(0.25, 1.0, 0.5, 1)",mC="cubic-bezier(0.2, 0, 0, 1)";let jl=null,zl=!1,Wn=!1,Tg=0,Ig=0,Cc=!1,Ac=!1,Be=null,Rs=null,yo=null,Ti=null;function Go(n){ql(),jl=n,zl=!0,Rs=gC,yo=yC,Ti=vC,document.addEventListener("touchstart",Rs,{passive:!0}),document.addEventListener("touchmove",yo,{passive:!1}),document.addEventListener("touchend",Ti,{passive:!0}),document.addEventListener("touchcancel",Ti,{passive:!0})}function ql(){Rs&&(document.removeEventListener("touchstart",Rs),document.removeEventListener("touchmove",yo),document.removeEventListener("touchend",Ti),document.removeEventListener("touchcancel",Ti)),zl=!1,Wn=!1,jl=null,Be=null,Rs=null,yo=null,Ti=null}function gC(n){if(!zl)return;const e=n.touches[0];e.clientX>hC||(Be=document.querySelector(".ov.active"),Be&&(Wn=!0,Tg=e.clientX,Ig=e.clientY,Cc=!1,Ac=!1,Be.style.transition="none"))}function yC(n){if(!Wn||!Be)return;const e=n.touches[0],t=e.clientX-Tg,i=e.clientY-Ig;if(!Cc){if(Math.abs(t)<8&&Math.abs(i)<8)return;Cc=!0,Ac=Math.abs(t)>Math.abs(i)}if(!Ac){Wn=!1,Be.style.transform="",Be.style.transition="";return}n.preventDefault();const s=Math.max(0,t);Be.style.transform=`translateX(${s}px)`}function vC(n){if(!Wn||!Be){Wn=!1;return}Wn=!1;const e=Be.style.transform,t=parseFloat(e.replace("translateX(",""))||0,i=window.innerWidth;if(t/i>=fC){Be.style.transition=`transform 0.25s ${mC}`,Be.style.transform=`translateX(${i}px)`;const r=Be,o=jl;setTimeout(()=>{r.style.transform="",r.style.transition="",o&&o()},260)}else{Be.style.transition=`transform 0.3s ${pC}`,Be.style.transform="translateX(0)";const r=Be;setTimeout(()=>{r.style.transition=""},310)}}let $i="view",Rt=null,Ii={},Tt=[],Bn=[],Hn=0,ir={add:!1,edit:!1};function wC(n){if(n<=0)return"";if(n<60)return String(n);const e=Math.floor(n/60),t=n%60;return t===0?`${e} hour${e>1?"s":""}`:`${e} hour${e>1?"s":""} ${t} min`}function Li(n,e){const t=h(n),i=h(e);if(!t)return"";const s=t.value.trim();if(!s)return"";if(isNaN(s))return s;const r=i?i.value:"min",o=parseFloat(s);return r==="hr"?o===1?"1 hour":`${o} hours`:`${o} min`}function zh(n,e){const t=h(n),i=h(e);if(!t)return NaN;const s=parseFloat(t.value.trim());return isNaN(s)?NaN:(i?i.value:"min")==="hr"?s*60:s}function _C(n){if(ir[n])return;const e=n==="add"?"rpreptime":"epreptime",t=n==="add"?"rpreptimeunit":"epreptimeunit",i=n==="add"?"rcooktime":"ecooktime",s=n==="add"?"rcooktimeunit":"ecooktimeunit",r=n==="add"?"rtotaltime":"etotaltime",o=n==="add"?"rtotaltimeunit":"etotaltimeunit",c=zh(e,t),l=zh(i,s),f=h(r),m=h(o);if(!f)return;if(isNaN(c)&&isNaN(l)){f.value="";return}const y=(isNaN(c)?0:c)+(isNaN(l)?0:l);if(y<=0){f.value="";return}if(y>=60){const w=wC(y);f.value=w,m&&(m.value="min")}else f.value=String(y),m&&(m.value="min")}function bC(n){ir[n]=!0}function Eg(n,e){const t=h(n);if(!t)return"";const i=t.value.trim();if(!i)return"";if(isNaN(i))return i;const s=h(e),r=s?s.value:"min",o=parseFloat(i);return r==="hr"?o===1?"1 hour":`${o} hours`:`${o} min`}function Ft(n){if(!n)return{value:"",unit:"min"};const e=n.match(/^(\d+\.?\d*)\s*hours?$/i);if(e)return{value:e[1],unit:"hr"};const t=n.match(/^(\d+\.?\d*)\s*min(utes?)?$/i);return t?{value:t[1],unit:"min"}:/\d+\s*hour/i.test(n)&&/\d+\s*min/i.test(n)?{value:n,unit:"min"}:isNaN(n)?{value:n,unit:"min"}:{value:n,unit:"min"}}function kg(n,e){const t=h(n);if(!t)return;const i=t.querySelectorAll(".diff-pill"),s=t.querySelector(`.diff-pill.sel[data-val="${e}"]`);if(i.forEach(r=>r.classList.remove("sel")),!s){const r=t.querySelector(`.diff-pill[data-val="${e}"]`);r&&r.classList.add("sel")}}function Sg(n){const e=document.querySelector(`#${n} .diff-pill.sel`);return e?e.dataset.val:""}function Wl(n){return[...document.querySelectorAll("#"+n+" .tag.sel")].map(e=>e.dataset.tag)}function Cg(n,e){document.querySelectorAll("#"+n+" .tag").forEach(t=>{t.classList.toggle("sel",(e||[]).includes(t.dataset.tag))})}function TC(n){n.classList.toggle("sel")}const Wr=[{cat:"Meal Type",tags:["Breakfast","Lunch","Dinner","Snack","Dessert","Drinks","Brunch","Bread & Baking","Sauce & Condiment","Preserve & Pickle"]},{cat:"Diet & Lifestyle",tags:["Vegetarian","Vegan","Pescatarian","Meat","Gluten-Free","Dairy-Free","Nut-Free","Sugar-Free","Healthy","High Protein","Low Carb","Keto","Heart Healthy","Pregnancy-Safe","Baby & Toddler","Halal","Kosher","Paleo","Egg-Free","Mediterranean"]},{cat:"Cook Style",tags:["Quick","Kid-Friendly","Date Night","Batch Cook","Freezer Friendly","One Pot","Special Occasion","Budget Friendly","Spicy","Pasta","Salad","Soup & Stew","Grill & BBQ","Slow Cooker","Air Fryer","Meal Prep","World Cuisine","Fermented & Preserved","Stovetop","Wrap & Sandwich","Street Food","Raw & No-Cook","Camping & Outdoors"]},{cat:"Occasion",tags:["Holiday","Party","Summer","Winter Comfort","Halloween","Thanksgiving","Easter","Valentine's Day","Game Day","Graduation","Brunch Party","Ramadan","Hanukkah"]},{cat:"Cuisine",tags:["Italian","Mexican","Japanese","Chinese","Indian","Thai","Greek","French","Middle Eastern","Korean","Spanish","Vietnamese","American","African","Latin American","Turkish","Mediterranean Cuisine"]},{cat:"Protein",tags:["Chicken","Beef","Pork","Fish","Seafood","Eggs","Beans & Legumes","Nuts & Seeds","Cheese"]}];function Rc(n){if(n==="my"){const e=d.recFilters;let t=e.tags.length+e.protein.length;return e.difficulty&&t++,e.cookTime!=="any"&&t++,e.serves!=="any"&&t++,t}else{let e=d.comTags.length;return d.comCuisine!=="all"&&e++,d.comTime!=="any"&&e++,d.comMinRating>0&&e++,e}}function Ag(n){const t=ae(n==="my"?"ks-recFiltersOpen":"ks-comFiltersOpen"),i=Rc(n),s=i>0?` (${i})`:"";let r=`<button class="filter-toggle" id="${n}-filter-toggle" onclick="toggleFilterPanel('${n}')">
    <span>Filters${s}</span><span>${t?"▲":"▼"}</span>
  </button>`;if(r+=`<div class="filter-panel" id="${n}-filter-panel" style="display:${t?"block":"none"}">`,n==="my"){const o=d.recFilters;r+='<div class="filter-section"><div class="filter-section-title">Difficulty</div><div class="filter-row">',["Easy","Medium","Hard"].forEach(c=>{r+=`<button class="filter-pill${o.difficulty===c?" sel":""}" onclick="setRecDifficulty('${c}')">${c}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Cook Time</div><div class="filter-row">',[["any","Any"],["under30","Under 30 min"],["under60","Under 1 hour"],["over60","Over 1 hour"]].forEach(([c,l])=>{r+=`<button class="filter-pill${o.cookTime===c?" sel":""}" onclick="setRecCookTime('${c}')">${l}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Serves</div><div class="filter-row">',[["any","Any"],["1-2","1–2"],["3-4","3–4"],["5+","5+"]].forEach(([c,l])=>{r+=`<button class="filter-pill${o.serves===c?" sel":""}" onclick="setRecServes('${c}')">${l}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Protein</div><div class="filter-row">',Wr.find(c=>c.cat==="Protein").tags.forEach(c=>{r+=`<button class="filter-pill${o.protein.includes(c)?" sel":""}" onclick="toggleRecProtein('${c}')">${c}</button>`}),r+="</div></div>",r+=`<div class="filter-section"><div class="filter-section-title">Tags</div><div class="filter-row" style="max-height:${ae("ks-recTagsExpanded")?"none":"0"};overflow:hidden;transition:max-height .2s" id="my-tags-wrap">`,Wr.forEach(c=>{c.tags.forEach(l=>{r+=`<button class="filter-pill${o.tags.includes(l)?" sel":""}" onclick="toggleRecTag('${l.replace(/'/g,"\\'")}')">${l}</button>`})}),r+="</div>",r+=`<button class="filter-pill" style="margin-top:4px;font-size:.7rem;color:var(--ac);border-color:var(--ac)" onclick="toggleRecTagsExpand()">${ae("ks-recTagsExpanded")?"Hide tags ▲":"Show all tags ▼"}${o.tags.length?` (${o.tags.length} selected)`:""}</button>`,r+="</div>",i>0&&(r+='<button class="filter-pill" style="color:var(--rd);border-color:var(--rd);width:100%;text-align:center;margin-top:4px" onclick="clearRecFilters()">Clear all filters</button>')}else r+='<div class="filter-section"><div class="filter-section-title">Min Rating</div><div class="filter-row">',[[0,"Any"],[1,"1★+"],[2,"2★+"],[3,"3★+"],[4,"4★+"]].forEach(([c,l])=>{r+=`<button class="filter-pill${d.comMinRating===c?" sel":""}" onclick="setComMinRating(${c})">${l}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Cook Time</div><div class="filter-row">',[["any","Any"],["under30","Under 30 min"],["30to60","30–60 min"],["over60","Over 1 hour"]].forEach(([c,l])=>{r+=`<button class="filter-pill${d.comTime===c?" sel":""}" onclick="setComTime('${c}')">${l}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Cuisine</div><div class="filter-row">',["all","Italian","Mexican","Japanese","Chinese","Indian","Thai","Greek","French","Middle Eastern","Korean","Spanish","Vietnamese","American","African","Latin American","Turkish","Mediterranean","Bangladeshi"].forEach(c=>{r+=`<button class="filter-pill${d.comCuisine===c.toLowerCase()?" sel":""}" onclick="setComCuisine('${c.toLowerCase()}')">${c==="all"?"All":c}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Sort</div><div class="filter-row">',[["newest","Newest"],["popular","Most Popular"],["rated","Highest Rated"],["az","A → Z"],["cooktime","Cook Time"]].forEach(([c,l])=>{r+=`<button class="filter-pill${d.comSort===c?" sel":""}" onclick="setComSort('${c}')">${l}</button>`}),r+="</div></div>",r+=`<div class="filter-section"><div class="filter-section-title">Tags</div><div class="filter-row" style="max-height:${ae("ks-comTagsOpen")?"none":"0"};overflow:hidden;transition:max-height .2s" id="com-tags-wrap">`,Wr.forEach(c=>{c.tags.forEach(l=>{r+=`<button class="filter-pill${d.comTags.includes(l)?" sel":""}" onclick="toggleComTag('${l.replace(/'/g,"\\'")}')">${l}</button>`})}),r+="</div>",r+=`<button class="filter-pill" style="margin-top:4px;font-size:.7rem;color:var(--ac);border-color:var(--ac)" onclick="toggleComTagsPanel()">${ae("ks-comTagsOpen")?"Hide tags ▲":"Show all tags ▼"}${d.comTags.length?` (${d.comTags.length} selected)`:""}</button>`,r+="</div>",Rc("com")>0&&(r+='<button class="filter-pill" style="color:var(--rd);border-color:var(--rd);width:100%;text-align:center;margin-top:4px" onclick="clearComFilters()">Clear all filters</button>');return r+="</div>",r}function IC(n){d.recSearch=n,nt()}function EC(n){d.recSort=n,Me("ks-recSort",n),nt()}function kC(n){const e=n==="my"?"ks-recFiltersOpen":"ks-comFiltersOpen",t=h(`${n}-filter-panel`),i=h(`${n}-filter-toggle`);if(!t)return;const s=t.style.display!=="none";t.style.display=s?"none":"block",Me(e,!s);const r=Rc(n),o=r>0?` (${r})`:"";i&&(i.innerHTML=`<span>Filters${o}</span><span>${s?"▼":"▲"}</span>`)}function SC(n){d.recFilters.difficulty=d.recFilters.difficulty===n?"":n,qi(),nt()}function CC(n){d.recFilters.cookTime=n,qi(),nt()}function AC(n){d.recFilters.serves=n,qi(),nt()}function RC(n){const e=d.recFilters.protein.indexOf(n);e>=0?d.recFilters.protein.splice(e,1):d.recFilters.protein.push(n),qi(),nt()}function xC(n){const e=d.recFilters.tags.indexOf(n);e>=0?d.recFilters.tags.splice(e,1):d.recFilters.tags.push(n),qi(),nt()}function PC(){const n=ae("ks-recTagsExpanded");Me("ks-recTagsExpanded",!n),nt()}function $C(){d.recFilters={tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[]},d.recSearch="",qi(),nt()}function qi(){Me("ks-recFilters",d.recFilters)}function LC(){const n=ae("ks-recFilters");n&&(d.recFilters={tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[],...n}),d.recSort=ae("ks-recSort")||"az"}LC();function DC(){const n=ae("ks-comTagsOpen");Me("ks-comTagsOpen",!n),ht()}function NC(){d.comTags=[],d.comCuisine="all",d.comTime="any",d.comMinRating=0,d.comSort="newest",d.comSearch="",d.comPage=0,ht()}function MC(n){if(!n)return 0;const e=n.match(/(\d+)/);return e?parseInt(e[1]):0}function OC(n){const e=Array.from({length:5},(c,l)=>`<span class="star${l<n.rating?" on":""}">${l<n.rating?"★":"☆"}</span>`).join(""),t=n.sourceUrl?`<a href="${n.sourceUrl}" target="_blank" onclick="event.stopPropagation()" style="font-size:.68rem;color:var(--ac);text-decoration:none;border:1px solid rgba(212,168,83,.3);border-radius:20px;padding:2px 8px;background:transparent">🔗 View original</a>`:n.source?`<span class="sbdg">${n.source}</span>`:"",i=n.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;max-height:140px"><img src="${n.imageUrl}" alt="" style="width:100%;height:140px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",s=[n.totalTime||n.cookTime?`⏱ ${n.totalTime||n.cookTime}`:"",n.servings?`🍽 ${n.servings} servings`:""].filter(Boolean),r=s.length?`<div style="display:flex;gap:6px;margin-top:6px;flex-wrap:wrap">${s.map(c=>`<span style="font-size:.68rem;color:var(--mt);background:var(--b1);border-radius:8px;padding:2px 8px">${c}</span>`).join("")}</div>`:"",o=n.summary?`<div class="rnot" style="color:var(--tx2);margin-top:6px;font-style:italic">${n.summary}</div>`:n.description?`<div class="rnot" style="color:var(--tx2);margin-top:6px">${n.description.substring(0,100)}${n.description.length>100?"…":""}</div>`:"";return`<div class="rcd${n.favorited?" fav":""}" onclick="openRecipeView('${n.id}')">${i}<div class="rrow"><div class="rnm">${n.name}</div><div class="rfav" onclick="event.stopPropagation();togFav('${n.id}')">${n.favorited?"❤️":"🤍"}</div></div><div class="stars">${e}</div>${r}${o}${n.notes?`<div class="rnot">${n.notes}</div>`:""}<div class="rmeta"><span>${n.savedAt}</span>${t}</div></div>`}function VC(n){d.rt=n,document.querySelectorAll(".rtab").forEach(t=>t.classList.remove("active"));const e=h("rtab-"+n);e&&e.classList.add("active"),n==="community"?Kl():nt()}function nt(){if(d.rt==="community")return;let n=[...d.recs];if(d.rt==="fav"?n=n.filter(o=>o.favorited):d.rt==="top"?n=n.filter(o=>o.rating>=4):d.rt==="quick"?n=n.filter(o=>(o.tags||[]).includes("Quick")):d.rt==="kid"&&(n=n.filter(o=>(o.tags||[]).includes("Kid-Friendly"))),d.recSearch){const o=d.recSearch.toLowerCase();n=n.filter(c=>(c.name||"").toLowerCase().includes(o))}const e=d.recFilters;e.tags.length&&(n=n.filter(o=>e.tags.every(c=>(o.tags||[]).includes(c)))),e.difficulty&&(n=n.filter(o=>o.difficulty===e.difficulty)),e.cookTime&&e.cookTime!=="any"&&(n=n.filter(o=>{const c=Kr(o.cookTime||o.totalTime);return c?e.cookTime==="under30"?c<=30:e.cookTime==="under60"?c<=60:e.cookTime==="over60"?c>60:!0:!1})),e.serves&&e.serves!=="any"&&(n=n.filter(o=>{const c=MC(o.servings);return c?e.serves==="1-2"?c<=2:e.serves==="3-4"?c>=3&&c<=4:e.serves==="5+"?c>=5:!0:!1})),e.protein.length&&(n=n.filter(o=>e.protein.some(c=>(o.tags||[]).includes(c))));const t=d.recSort||"az";t==="az"?n.sort((o,c)=>(o.name||"").localeCompare(c.name||"")):t==="newest"?n.sort((o,c)=>new Date(c.savedAt||0)-new Date(o.savedAt||0)):t==="rating"&&n.sort((o,c)=>(c.rating||0)-(o.rating||0));const i=h("rsub");i&&(i.textContent=n.length+" recipe"+(n.length!==1?"s":""));const s=h("rbody");if(!s)return;const r=`<div style="margin-bottom:12px">
    <input class="fi" id="rec-search" placeholder="Search recipes…" value="${(d.recSearch||"").replace(/"/g,"&quot;")}" oninput="setRecSearch(this.value)" style="margin-bottom:8px"/>
    <div style="display:flex;gap:6px;margin-bottom:8px">
      <select class="fsel" onchange="setRecSort(this.value)" style="font-size:.78rem;padding:7px 10px;flex:1">
        <option value="az"${t==="az"?" selected":""}>A → Z</option>
        <option value="newest"${t==="newest"?" selected":""}>Newest first</option>
        <option value="rating"${t==="rating"?" selected":""}>Highest rated</option>
      </select>
    </div>
    ${Ag("my")}
  </div>`;if(!n.length){const o=d.recSearch||e.tags.length||e.difficulty||e.cookTime!=="any"||e.serves!=="any"||e.protein.length;s.innerHTML=r+`<div class="es"><div class="ei">📖</div><p>${o?"No recipes match your filters.":d.rt==="fav"?"No favorites yet!":d.rt==="top"?"No 4–5 star recipes yet.":d.rt==="quick"?"No quick recipes saved yet.":d.rt==="kid"?"No kid-friendly recipes yet.":"No recipes saved yet.<br/>Mark meals as cooked or tap + Add."}</p></div>`;return}s.innerHTML=r+`<div class="recipe-grid">${n.map(OC).join("")}</div>`}async function UC(n){const e=d.recs.find(t=>t.id===n);e&&(await Je({...e,favorited:!e.favorited}),R(e.favorited?"Removed from favorites":"Added to favorites! ❤️"))}function FC(){h("savrecbtn").disabled=!h("rn").value.trim()}async function BC(){const n=h("rurl").value.trim();if(!n)return;const e=h("rurlstatus"),t=h("rimportbtn");e.style.display="block",e.style.color="var(--mt)",e.textContent="🤖 Importing recipe with AI…",t.disabled=!0;try{const s=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})})).json();if(!s.success){e.style.color="var(--rd)",e.textContent="⚠️ "+(s.error||"Couldn't import this recipe"),t.disabled=!1;return}const r=s.recipe,o=Gl(r);if(h("rn").value=r.title||"",h("rd").value=o,h("rnotes").value=r.notes||"",h("rsourceurl").value=n,h("rcuisine")&&(h("rcuisine").value=r.cuisine||""),r.tags&&r.tags.length&&Cg("rtags",r.tags),h("savrecbtn").disabled=!r.title,YC(r.imageUrl),d._importedRecipe={ingredientsRaw:r.ingredients||[],stepsRaw:r.steps||[],imageUrl:r.imageUrl||null,prepTime:r.prepTime||"",cookTime:r.cookTime||"",totalTime:r.totalTime||"",servings:r.servings||"",difficulty:r.difficulty||"",recipeYield:r.recipeYield||"",storageInstructions:r.storageInstructions||"",summary:r.summary||""},r.prepTime){const l=Ft(r.prepTime);h("rpreptime")&&(h("rpreptime").value=l.value),h("rpreptimeunit")&&(h("rpreptimeunit").value=l.unit)}if(r.cookTime){const l=Ft(r.cookTime);h("rcooktime")&&(h("rcooktime").value=l.value),h("rcooktimeunit")&&(h("rcooktimeunit").value=l.unit)}if(r.totalTime){const l=Ft(r.totalTime);h("rtotaltime")&&(h("rtotaltime").value=l.value),h("rtotaltimeunit")&&(h("rtotaltimeunit").value=l.unit),ir.add=!0}r.servings&&h("rserves")&&(h("rserves").value=r.servings),r.difficulty&&["Easy","Medium","Hard"].includes(r.difficulty)&&kg("rdiff",r.difficulty),r.recipeYield&&h("ryield")&&(h("ryield").value=r.recipeYield),r.storageInstructions&&h("rstorage")&&(h("rstorage").value=r.storageInstructions);const c=[r.prepTime?`Prep: ${r.prepTime}`:"",r.cookTime?`Cook: ${r.cookTime}`:"",r.servings?`Serves: ${r.servings}`:""].filter(Boolean);e.style.color="var(--gn)",e.textContent="✓ Recipe imported! "+(c.length?c.join(" · "):"Review and save.")}catch(i){console.error("importFromUrl:",i),e.style.color="var(--rd)",e.textContent="⚠️ Couldn't import — try copying the recipe text manually."}t.disabled=!1}function HC(n){const e=h("importOnePane"),t=h("importManyPane"),i=h("importOneTab"),s=h("importManyTab");e&&(e.style.display=n==="one"?"block":"none"),t&&(t.style.display=n==="many"?"block":"none"),i&&(i.style.background=n==="one"?"var(--ac)":"",i.style.color=n==="one"?"var(--bg)":""),s&&(s.style.background=n==="many"?"var(--ac)":"",s.style.color=n==="many"?"var(--bg)":"")}function jC(n){const e=/https?:\/\/[^\s<>"'`,;)}\]]+/gi,i=(n.match(e)||[]).map(s=>s.replace(/[.,;:!?)}\]]+$/,""));return[...new Set(i)]}function zC(n){const e=n.toLowerCase(),t=[{pattern:/youtube\.com|youtu\.be/,name:"YouTube"},{pattern:/tiktok\.com/,name:"TikTok"},{pattern:/instagram\.com\/reel/,name:"Instagram Reel"},{pattern:/vimeo\.com/,name:"Vimeo"},{pattern:/twitter\.com|x\.com/,name:"X/Twitter"}];for(const r of t)if(r.pattern.test(e))return{status:"video",reason:`${r.name} video — can't extract recipe text`};const i=[{pattern:/evernote\.com/,name:"Evernote"},{pattern:/docs\.google\.com/,name:"Google Docs"},{pattern:/drive\.google\.com/,name:"Google Drive"},{pattern:/dropbox\.com/,name:"Dropbox"},{pattern:/notion\.so/,name:"Notion"},{pattern:/onenote\.com|onedrive\.live\.com/,name:"OneDrive/OneNote"},{pattern:/icloud\.com/,name:"iCloud"},{pattern:/keep\.google\.com/,name:"Google Keep"}];for(const r of i)if(r.pattern.test(e))return{status:"private",reason:`${r.name} — private or inaccessible link`};const s=[{pattern:/cooking\.nytimes\.com/,name:"NYT Cooking"},{pattern:/food52\.com/,name:"Food52"}];for(const r of s)if(r.pattern.test(e))return{status:"paywall",reason:`${r.name} — may be paywalled`};return{status:"ok",reason:""}}async function qC(){const n=h("bulkUrls"),e=n?n.value.trim():"";if(!e)return;const t=jC(e);if(!t.length){R("No URLs found in the text");return}const i=t.map(A=>({url:A,...zC(A)})),s=i.filter(A=>A.status==="ok"),r=i.filter(A=>A.status==="paywall"),o=i.filter(A=>A.status==="video"),c=i.filter(A=>A.status==="private"),l=h("bulkImportProgress");if(!l)return;l.style.display="block";const f=h("bulkImportBtn");f&&(f.disabled=!0);const m=[...s,...r],y=[],w=m.filter(A=>{const P=d.recs.find($=>$.sourceUrl&&$.sourceUrl===A.url);return P?(y.push({url:A.url,name:P.name||P.url}),!1):!0}),E={success:[],duplicates:y,failed:[],skipped:[...o,...c]};for(let A=0;A<w.length;A++){const P=w[A],$=P.status==="paywall"?" — may be paywalled":"";A>0&&(l.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Waiting before next import… (${A+1} of ${w.length})</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`,await new Promise(U=>setTimeout(U,2e3))),l.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Importing ${A+1} of ${w.length}…${$}</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;try{const U=await WC(P.url,l,A,w.length);if(U.success&&U.recipe){const N=U.recipe,M=Gl(N),D="rec-"+Date.now()+"-"+Math.random().toString(36).slice(2,6);await Je({id:D,name:N.title||"Untitled Recipe",description:M,notes:N.notes||"",rating:0,favorited:!1,sourceUrl:P.url,source:"AI Import",imageUrl:N.imageUrl||null,ingredientsRaw:N.ingredients||[],stepsRaw:N.steps||[],prepTime:N.prepTime||"",cookTime:N.cookTime||"",totalTime:N.totalTime||"",servings:N.servings||"",difficulty:N.difficulty||"",recipeYield:N.recipeYield||"",storageInstructions:N.storageInstructions||"",tags:N.tags||[],savedAt:new Date().toLocaleDateString()}),E.success.push({url:P.url,name:N.title})}else{const N=KC(U.reason,U.error);E.failed.push({url:P.url,error:N})}}catch(U){E.failed.push({url:P.url,error:U.message})}}QC(l,E),f&&(f.disabled=!1)}async function WC(n,e,t,i){const s=[1e4,2e4,4e4],r=3,o=GC(n),c=await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});let l=await c.json();if(c.status!==429&&l.reason!=="rate_limit")return l;for(let f=0;f<r;f++){const m=s[f]/1e3;e.innerHTML=`<div style="font-size:.78rem;color:var(--yw,orange)">Rate limit hit — waiting ${m}s before retrying ${o}… (${t+1} of ${i})</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`,await new Promise(w=>setTimeout(w,s[f])),e.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Retrying ${t+1} of ${i} (attempt ${f+2})…</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;const y=await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(l=await y.json(),y.status!==429&&l.reason!=="rate_limit")return l}return{success:!1,error:"Rate limit — could not recover after 3 retries",reason:"rate_limit"}}function GC(n){try{const e=new URL(n),t=e.hostname.replace(/^www\./,""),i=e.pathname.replace(/\/$/,"").split("/").filter(Boolean).slice(0,1).join("/");return i?`${t}/${i}`:t}catch{return n.length>40?"…"+n.slice(-40):n}}function KC(n,e){return{rate_limit:"Rate limit hit — too many requests",timeout:"Timed out — page took too long to load",page_blocked:"Page blocked access (login required or bot detection)",page_not_found:"Page not found (404)",page_inaccessible:"Page not accessible",no_recipe:"No recipe content found on page",api_error:"AI parsing error",fetch_error:"Could not fetch page"}[n]||e||"Unknown error"}function QC(n,e){let t="";e.success.length&&(t+=`<div style="color:var(--gn);font-size:.78rem;margin-bottom:6px">✓ ${e.success.length} imported successfully</div>`,t+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.success.forEach(i=>{t+=`<div>• ${i.name||i.url}</div>`}),t+="</div>"),e.duplicates.length&&(t+=`<div style="color:var(--ac);font-size:.78rem;margin-bottom:6px">● ${e.duplicates.length} already in your collection — skipped</div>`,t+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.duplicates.forEach(i=>{t+=`<div>• ${i.name||i.url}</div>`}),t+="</div>"),e.skipped.length&&(t+=`<div style="color:var(--yw,orange);font-size:.78rem;margin-bottom:6px">⚠ ${e.skipped.length} skipped — video or inaccessible links</div>`,t+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.skipped.forEach(i=>{t+=`<div>• ${i.url} <span style="color:var(--mt);font-size:.68rem">(${i.reason})</span></div>`}),t+="</div>"),e.failed.length&&(t+=`<div style="color:var(--rd);font-size:.78rem;margin-bottom:6px">✗ ${e.failed.length} failed</div>`,t+='<div style="font-size:.72rem;margin-bottom:10px;line-height:1.8">',e.failed.forEach(i=>{t+='<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">',t+=`<span style="color:var(--mt);flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i.url}</span>`,t+=`<span style="color:var(--rd);font-size:.66rem;white-space:nowrap">${i.error}</span>`,t+=`<button class="btn bsm" onclick="retryBulkImport('${i.url.replace(/'/g,"\\'")}')">Retry</button>`,t+="</div>"}),t+="</div>"),!e.success.length&&!e.failed.length&&!e.skipped.length&&!e.duplicates.length&&(t='<div style="font-size:.78rem;color:var(--mt)">No URLs were processed.</div>'),n.innerHTML=t}async function JC(n){const e=h("bulkImportProgress");if(!e)return;const t=d.recs.find(s=>s.sourceUrl&&s.sourceUrl===n);if(t){R(`Already imported: ${t.name||n}`);return}const i=e.innerHTML;e.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Retrying ${n}…</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;try{const r=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})})).json();if(r.success&&r.recipe){const o=r.recipe,c=Gl(o),l="rec-"+Date.now()+"-"+Math.random().toString(36).slice(2,6);await Je({id:l,name:o.title||"Untitled Recipe",description:c,notes:o.notes||"",rating:0,favorited:!1,sourceUrl:n,source:"AI Import",imageUrl:o.imageUrl||null,ingredientsRaw:o.ingredients||[],stepsRaw:o.steps||[],prepTime:o.prepTime||"",cookTime:o.cookTime||"",totalTime:o.totalTime||"",servings:o.servings||"",difficulty:o.difficulty||"",recipeYield:o.recipeYield||"",storageInstructions:o.storageInstructions||"",tags:o.tags||[],savedAt:new Date().toLocaleDateString()}),R(`Imported: ${o.title||"Recipe"}`),e.innerHTML=i.replace(new RegExp(`<div style="display:flex[^]*?${n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}[^]*?</div>\\s*</div>`),`<div style="color:var(--gn);font-size:.72rem">✓ ${o.title||n} — imported</div>`)}else R("Import failed: "+(r.error||"Unknown error")),e.innerHTML=i}catch(s){R("Import failed: "+s.message),e.innerHTML=i}}function Gl(n){const e=[];return n.description&&(e.push(n.description),e.push("")),n.ingredients&&n.ingredients.length&&(e.push("Ingredients:"),n.ingredients.forEach(t=>{if(typeof t=="string")e.push(`- ${t}`);else{const i=[t.amount,t.unit].filter(Boolean).join(" ");e.push(`- ${i?i+" ":""}${t.name}`)}}),e.push("")),n.steps&&n.steps.length&&(e.push("Steps:"),n.steps.forEach((t,i)=>{e.push(`${i+1}. ${t}`)})),e.join(`
`)}function YC(n){const e=document.getElementById("rimgpreview");if(e&&e.remove(),!n)return;const t=h("addRecCoverZone");t&&(t.classList.add("has-preview"),t.innerHTML=`<img src="${n}" alt="Cover preview" onerror="this.parentElement.classList.remove('has-preview')"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('add')">✕</button>`)}async function XC(){var P,$,U,N;const n=h("rn").value.trim();if(!n)return;const e=h("rd").value.trim(),t=h("rsourceurl")?h("rsourceurl").value.trim():"",i=h("rcuisine")?h("rcuisine").value.trim():"",s=Wl("rtags"),r=document.getElementById("rpubtoggle"),o=r?r.classList.contains("on"):!1,c=d._importedRecipe||{},l="rec-"+Date.now();let f=c.imageUrl||null;if(Rt)try{R("Uploading cover photo…"),f=await _g(Rt,l),Rt=null}catch(M){console.error("Cover upload failed:",M),R("Cover photo upload failed — saving recipe without it")}const m={id:l,name:n,rating:d.nr,favorited:!1,notes:h("rnotes").value.trim(),description:e,source:t?"AI Import":"Manual",sourceUrl:t||null,imageUrl:f,tags:s,cuisine:i,prepTime:Li("rpreptime","rpreptimeunit")||c.prepTime||"",cookTime:Li("rcooktime","rcooktimeunit")||c.cookTime||"",totalTime:Eg("rtotaltime","rtotaltimeunit")||c.totalTime||"",servings:(h("rserves")?h("rserves").value.trim():"")||c.servings||"",difficulty:Sg("rdiff")||c.difficulty||"",recipeYield:(h("ryield")?h("ryield").value.trim():"")||c.recipeYield||"",storageInstructions:(h("rstorage")?h("rstorage").value.trim():"")||c.storageInstructions||"",summary:(h("rsummary")?h("rsummary").value.trim():"")||c.summary||"",ingredientsRaw:c.ingredientsRaw||[],stepsRaw:c.stepsRaw||[],stepPhotos:{},cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:o};if(!m.summary&&(m.name||m.description))try{R("Generating summary…");const M=((P=m.ingredientsRaw)==null?void 0:P.join(", "))||m.description||"",j=((N=(U=($=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:200,messages:[{role:"user",content:`Write a 2-sentence summary for this recipe. First sentence: what the dish is. Second sentence: what makes it special or notable. Max 200 characters total. Be concise.

Title: ${m.name}
Cuisine: ${m.cuisine||""}
Ingredients: ${M.substring(0,500)}`}]})})).json()).content)==null?void 0:$[0])==null?void 0:U.text)==null?void 0:N.trim())||"";j&&(m.summary=j)}catch(M){console.error("Auto-summary generation failed:",M)}if(o){const M=Z(),D=(M==null?void 0:M.displayName)||localStorage.getItem("ks-who")||"Anonymous",F=await Po(m,D);m.publicId=F.id,Ye("published",Ae(m.name||"a recipe")+" to community")}await Je(m),h("rn").value="",h("rnotes").value="",h("rd").value="",h("rsourceurl").value="",h("rurl").value="",h("rcuisine")&&(h("rcuisine").value=""),h("rpreptime")&&(h("rpreptime").value=""),h("rcooktime")&&(h("rcooktime").value=""),h("rtotaltime")&&(h("rtotaltime").value=""),h("rserves")&&(h("rserves").value=""),h("rpreptimeunit")&&(h("rpreptimeunit").value="min"),h("rcooktimeunit")&&(h("rcooktimeunit").value="min"),h("rtotaltimeunit")&&(h("rtotaltimeunit").value="min"),h("ryield")&&(h("ryield").value=""),h("rstorage")&&(h("rstorage").value=""),h("rsummary")&&(h("rsummary").value=""),document.querySelectorAll("#rdiff .diff-pill").forEach(M=>M.classList.remove("sel")),ir.add=!1,Cg("rtags",[]),d.nr=0,d._importedRecipe=null,h("savrecbtn").disabled=!0,xs("rstars",0);const w=document.getElementById("rimgpreview");w&&w.remove();const E=h("addRecCoverZone");E&&(E.classList.remove("has-preview"),E.innerHTML='<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop</div>'),r&&r.classList.remove("on");const A=h("rurlstatus");A&&(A.style.display="none",A.textContent=""),R("Recipe saved! 📖"),Ee("arec")}function Rg(n){const e=d.recs.find(D=>D.id===n);if(!e)return;d.eid=n,$i="view";const t=h("erecTitle");t&&(t.textContent="Recipes"),Go(()=>sr());let i;e.imageUrl?i=`<div class="rv-cover">
      <img src="${e.imageUrl}" alt="${(e.name||"").replace(/"/g,"&quot;")}" onerror="this.parentElement.style.display='none'"/>
      <div class="rv-edit-btn" onclick="openER('${e.id}')" title="Edit recipe">✏️</div>
    </div>`:i=`<div class="rv-cover-placeholder">
      <div class="rv-cover-title">${(e.name||"Untitled").replace(/</g,"&lt;")}</div>
      <div class="rv-edit-btn" onclick="openER('${e.id}')" title="Edit recipe">✏️</div>
    </div>`;const s=e.imageUrl,r=e.rating||0,o=`<div class="sinp" id="rvstars" style="margin-bottom:6px">${Array.from({length:5},(D,F)=>`<span class="star${F<r?" on":""}" onclick="setViewStar(${F+1})" style="cursor:pointer">${F<r?"★":"☆"}</span>`).join("")}${r>0?'<span class="star-clear" onclick="event.stopPropagation();setViewStar(0)">✕</span>':""}</div>`,c=e.summary?`<div style="font-size:.86rem;color:var(--tx2);line-height:1.5;margin-bottom:8px;font-style:italic">${le(e.summary)}</div>`:"",l=`<div class="rv-header">
    ${s?`<div class="rv-title">${(e.name||"").replace(/</g,"&lt;")}</div>`:""}
    ${o}
    ${c}
    ${e.savedAt?`<div class="rv-author">Saved ${e.savedAt}${e.source&&e.source!=="Manual"?` · ${e.source}`:""}${e.cookCount?` · Cooked ${e.cookCount}×`:""}</div>`:""}
  </div>`,f=[e.prepTime?`🔪 Prep: ${e.prepTime}`:"",e.cookTime?`🔥 Cook: ${e.cookTime}`:"",e.totalTime?`⏱ Total: ${e.totalTime}`:"",e.servings?`🍽 Serves: ${e.servings}`:"",e.recipeYield?`🍪 Yield: ${e.recipeYield}`:"",e.difficulty==="Easy"?"⭐ Easy":e.difficulty==="Medium"?"⭐⭐ Medium":e.difficulty==="Hard"?"⭐⭐⭐ Hard":""].filter(Boolean),m=f.length?`<div class="rv-meta">${f.map(D=>`<div class="rv-meta-pill">${D}</div>`).join("")}</div>`:"",y=e.cuisine?`<div class="rv-cuisine">${e.cuisine}</div>`:"",w=(e.tags||[]).length?`<div class="rv-tags">${e.tags.map(D=>`<span class="com-tag">${D}</span>`).join("")}</div>`:"";let E="";if(e.ingredientsRaw&&e.ingredientsRaw.length)E=`<div class="rv-section">Ingredients</div><ul class="rv-ingredients">${e.ingredientsRaw.map(F=>{if(typeof F=="string")return`<li>${le(F)}</li>`;const j=[F.amount,F.unit].filter(Boolean).join(" ");return`<li>${j?`<strong>${le(j)}</strong> `:""}${le(F.name||"")}</li>`}).join("")}</ul>`;else if(e.description){const D=e.description.split(`
`),F=D.findIndex(b=>/^ingredients/i.test(b.trim())),j=D.findIndex(b=>/^steps/i.test(b.trim()));if(F>=0){const b=j>F?j:D.length,v=D.slice(F+1,b).filter(_=>_.trim());v.length&&(E=`<div class="rv-section">Ingredients</div><ul class="rv-ingredients">${v.map(_=>`<li>${le(_.replace(/^[-•*]\s*/,""))}</li>`).join("")}</ul>`)}}let A="";if(e.stepsRaw&&e.stepsRaw.length)A=`<div class="rv-section">Instructions</div><ol class="rv-steps">${e.stepsRaw.map((F,j)=>{var k;const b=typeof F=="string"?F:F.text||"",v=(k=e.stepPhotos)==null?void 0:k[j],_=v?`<div class="rv-step-photo" onclick="openPhotoViewer(['${v}'],0)"><img src="${v}" alt="Step ${j+1}" onerror="this.parentElement.style.display='none'"/></div>`:"";return`<li>${le(b)}${_}</li>`}).join("")}</ol>`;else if(e.description){const D=e.description.split(`
`),F=D.findIndex(j=>/^steps/i.test(j.trim()));if(F>=0){const j=D.slice(F+1).filter(b=>b.trim());j.length&&(A=`<div class="rv-section">Instructions</div><ol class="rv-steps">${j.map(b=>`<li>${le(b.replace(/^\d+\.\s*/,""))}</li>`).join("")}</ol>`)}}let P="";!E&&!A&&e.description&&(P=`<div class="rv-section">Details</div><div style="font-size:.88rem;color:var(--tx2);line-height:1.8;white-space:pre-wrap">${le(e.description)}</div>`);const $=e.storageInstructions?`<div class="rv-section">🗄️ Storage</div><div class="rv-storage">${le(e.storageInstructions)}</div>`:"",U=e.notes?`<div class="rv-section">Notes</div><div style="font-size:.86rem;color:var(--tx2);line-height:1.6;font-style:italic;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">${le(e.notes)}</div>`:"",N=e.sourceUrl?`<div style="margin-top:16px"><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);text-decoration:none">🔗 View original recipe ↗</a></div>`:"",M=`<div class="rv-actions">
    <button class="btn bp bsm" style="flex:1" onclick="scheduleRecipe('${e.name.replace(/'/g,"\\'")}')">📅 Schedule</button>
    <button class="btn bs bsm" style="flex:1" onclick="addRecIngToShop('${e.id}')">🛒 Shop ingredients</button>
    <button class="btn bs bsm" onclick="openER('${e.id}')">✏️ Edit</button>
  </div>`;h("erecbody").innerHTML=`
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
  `,at("erec")}function sr(){if(ql(),$i==="edit"&&d._editingComId){const n=d._editingComId;d._editingComId=null,wo(n);return}if($i==="edit"&&d.eid)Rg(d.eid);else{const n=h("erecTitle");n&&(n.textContent="Recipes"),Ee("erec")}}function le(n){return(n||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function xg(n){const e=d.recs.find(A=>A.id===n);if(!e)return;d.eid=n,$i="edit",Rt=null,Ii={};const t=h("erecTitle");t&&(t.textContent="Edit Recipe"),Go(()=>sr());const i=e.sourceUrl?`<div class="frow"><label class="flbl">Original</label><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);word-break:break-all">${e.sourceUrl}</a></div>`:"",s=e.tags||[],r=A=>s.includes(A)?" sel":"",o=`<div class="frow"><label class="flbl">Tags</label><div class="tags-grid" id="etags">
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
  <input type="file" id="editCoverInput" accept="image/*" style="display:none" onchange="handleCoverSelected(event,'edit')"/>`,f=Ft(e.prepTime),m=Ft(e.cookTime),y=Ft(e.totalTime);ir.edit=!!e.totalTime;const w=`<div style="margin-bottom:14px">
    <div class="frow" style="margin-bottom:8px"><label class="flbl">Prep time</label>
      <div style="display:flex;gap:8px;align-items:center">
        <input class="fi" id="epreptime" type="text" inputmode="numeric" placeholder="e.g. 15" value="${le(f.value)}" style="flex:1" oninput="recipeTimeChanged('edit')"/>
        <select class="fi" id="epreptimeunit" style="width:auto;min-width:90px" onchange="recipeTimeChanged('edit')">
          <option value="min"${f.unit==="min"?" selected":""}>minutes</option>
          <option value="hr"${f.unit==="hr"?" selected":""}>hours</option>
        </select>
      </div>
    </div>
    <div class="frow" style="margin-bottom:8px"><label class="flbl">Cook time</label>
      <div style="display:flex;gap:8px;align-items:center">
        <input class="fi" id="ecooktime" type="text" inputmode="numeric" placeholder="e.g. 30" value="${le(m.value)}" style="flex:1" oninput="recipeTimeChanged('edit')"/>
        <select class="fi" id="ecooktimeunit" style="width:auto;min-width:90px" onchange="recipeTimeChanged('edit')">
          <option value="min"${m.unit==="min"?" selected":""}>minutes</option>
          <option value="hr"${m.unit==="hr"?" selected":""}>hours</option>
        </select>
      </div>
    </div>
    <div class="frow" style="margin-bottom:8px"><label class="flbl">Total time</label>
      <div style="display:flex;gap:8px;align-items:center">
        <input class="fi" id="etotaltime" type="text" inputmode="numeric" placeholder="Auto from prep + cook" value="${le(y.value)}" style="flex:1" oninput="markTotalTimeManual('edit')"/>
        <select class="fi" id="etotaltimeunit" style="width:auto;min-width:90px">
          <option value="min"${y.unit==="min"?" selected":""}>minutes</option>
          <option value="hr"${y.unit==="hr"?" selected":""}>hours</option>
        </select>
      </div>
    </div>
    <div class="frow"><label class="flbl">Serves</label>
      <input class="fi" id="eserves" type="text" inputmode="numeric" placeholder="e.g. 4" value="${le(e.servings||"")}"/>
    </div>
    <div class="frow"><label class="flbl">Yield <span class="otag">optional</span></label>
      <input class="fi" id="eyield" type="text" placeholder="e.g. 24 cookies, 1 loaf" value="${le(e.recipeYield||"")}"/>
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
      <textarea class="fta" id="estorage" maxlength="200" placeholder="e.g. Keeps in fridge for 3 days, freeze for up to 3 months" style="min-height:60px">${le(e.storageInstructions||"")}</textarea>
    </div>
  </div>`;let E="";e.stepsRaw&&e.stepsRaw.length&&(E=`<div class="frow"><label class="flbl">Step Photos <span class="otag">optional</span></label>${e.stepsRaw.map((P,$)=>{var M;const U=typeof P=="string"?P:P.text||"",N=(M=e.stepPhotos)==null?void 0:M[$];return`<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:12px;padding:10px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">
        <div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:var(--acd);color:var(--ac);font-size:.72rem;font-weight:700;display:flex;align-items:center;justify-content:center">${$+1}</div>
        <div style="flex:1;font-size:.84rem;color:var(--tx2);line-height:1.5">${le(U)}</div>
        ${N?`<img src="${N}" class="step-photo-preview" onclick="event.stopPropagation();openPhotoViewer(['${N}'],0)" alt="Step ${$+1}"/>`:""}
        <button class="step-photo-btn${N?" has-photo":""}" onclick="event.stopPropagation();triggerStepPhotoUpload(${$})" title="${N?"Change":"Add"} step photo">📷</button>
        ${N?`<button class="step-photo-btn" onclick="event.stopPropagation();removeStepPhoto(${$})" title="Remove step photo" style="color:var(--rd)">✕</button>`:""}
      </div>`}).join("")}</div>`,E+='<input type="file" id="stepPhotoInput" accept="image/*" style="display:none" onchange="handleStepPhotoSelected(event)"/>'),h("erecbody").innerHTML=`
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
    <div class="frow"><label class="flbl">Summary <span class="otag">optional</span></label><input class="fi" id="esummary" value="${le(e.summary||"")}" placeholder="e.g. A classic Italian pasta dish. Made with just 4 ingredients and ready in under 20 minutes." maxlength="200"/></div>
    ${o}
    <div class="frow"><label class="flbl">Description / Ingredients</label><textarea class="fta" id="erd" style="min-height:140px">${e.description||""}</textarea></div>
    <div class="frow"><label class="flbl">Notes</label><input class="fi" id="erno" value="${e.notes||""}"/></div>
    ${i}
    <div class="frow"><label class="flbl">Cuisine <span class="otag">optional</span></label><input class="fi" id="ecuis" value="${e.cuisine||""}" placeholder="e.g. Mediterranean, Turkish, Asian…"/></div>
    ${E}
    <div style="display:flex;align-items:center;gap:10px;margin:12px 0"><span style="font-size:.88rem">Favorite</span><div class="tog${e.favorited?" on":""}" id="etog" onclick="this.classList.toggle('on')"></div></div>
    <div style="display:flex;align-items:center;gap:10px;margin:6px 0 14px"><span style="font-size:.88rem">Share publicly</span><div class="tog${e.isPublic?" on":""}" id="epub" onclick="togglePublic('${e.id}');this.classList.toggle('on')"></div><span style="font-size:.72rem;color:var(--mt)">Visible to the community</span></div>
    <div class="brow"><button class="btn bd" style="flex:1" onclick="delER()">Delete</button><button class="btn bp" style="flex:2" onclick="updR()">Save</button></div>`,at("erec")}async function ZC(){var F,j,b;const n=d.recs.find(v=>v.id===d.eid);if(!n)return;const e=n.rating||0,t=Wl("etags"),i=h("ecuis")?h("ecuis").value.trim():n.cuisine||"";let s=n.imageUrl;if(Rt)try{R("Uploading cover photo…"),s=await _g(Rt,n.id),Rt=null}catch(v){console.error("Cover upload failed:",v),R("Cover photo upload failed — saving recipe without it")}else n._removeCover&&(s=null,delete n._removeCover,bg(`recipes/${n.id}/cover.jpg`).catch(()=>{}));const r={...n.stepPhotos||{}},o=Object.keys(Ii);if(o.length){R("Uploading step photos…");for(const v of o)try{const _=await uC(Ii[v],n.id,parseInt(v));r[v]=_}catch(_){console.error(`Step ${v} photo upload failed:`,_)}Ii={}}const c=Li("epreptime","epreptimeunit")||"",l=Li("ecooktime","ecooktimeunit")||"",f=Eg("etotaltime","etotaltimeunit")||"",m=h("eserves")?h("eserves").value.trim():n.servings||"",y=Sg("ediff")||"",w=h("eyield")?h("eyield").value.trim():n.recipeYield||"",E=h("estorage")?h("estorage").value.trim():n.storageInstructions||"";let A=h("esummary")?h("esummary").value.trim():n.summary||"";const P=h("ern").value.trim(),$=h("erd").value.trim(),U=P!==n.name,N=$!==(n.description||"")&&Math.abs($.length-(n.description||"").length)>20,M=i!==(n.cuisine||"");if(A===(n.summary||"")&&(U||N||M))try{const I=(((b=(j=(F=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:250,messages:[{role:"user",content:`A recipe was edited. Decide if the summary needs updating. If yes, write a new 2-sentence summary (first sentence: what the dish is, second: what makes it special). Max 200 chars. Return JSON only: {"shouldUpdate":true/false,"newSummary":"..."}

Old title: ${n.name}
New title: ${P}
Old cuisine: ${n.cuisine||""}
New cuisine: ${i}
New description (first 300 chars): ${$.substring(0,300)}
Old summary: ${A||"(none)"}`}]})})).json()).content)==null?void 0:F[0])==null?void 0:j.text)==null?void 0:b.trim())||"").match(/\{[\s\S]*\}/);if(I){const S=JSON.parse(I[0]);S.shouldUpdate&&S.newSummary&&(A=S.newSummary,R("Summary updated"))}}catch(v){console.error("Summary update check failed:",v)}const D={...n,name:P,rating:e,description:$,notes:h("erno").value.trim(),favorited:h("etog").classList.contains("on"),tags:t,cuisine:i,imageUrl:s,stepPhotos:r,prepTime:c,cookTime:l,totalTime:f,servings:m,difficulty:y,recipeYield:w,storageInstructions:E,summary:A};await Je(D),R("Recipe updated!"),Ee("erec"),n.publicId&&setTimeout(async()=>{var v;if(confirm("You edited a recipe that's also published to the community. Push these changes to the community version?"))try{const _={title:D.name,summary:D.summary,cuisine:D.cuisine,tags:D.tags,description:D.description,ingredients:D.description,ingredientsRaw:D.ingredientsRaw||[],stepsRaw:D.stepsRaw||[],prepTime:D.prepTime,cookTime:D.cookTime,totalTime:D.totalTime,servings:D.servings,difficulty:D.difficulty,imageUrl:D.imageUrl},k=(v=d.comRecs)==null?void 0:v.find(I=>I.id===n.publicId);k?await W(`public_recipes/${n.publicId}`,{...k,..._,id:void 0}):await W(`public_recipes/${n.publicId}`,_),R("Community version updated!")}catch(_){console.error("Community sync failed:",_),R("Couldn't update community version")}},300)}async function eA(){confirm("Delete this recipe?")&&(await dp(d.eid),R("Deleted"),Ee("erec"))}async function tA(n){const e=h("erd");if(!e)return;const t=e.value.trim();if(!t){R("No ingredients to scale");return}const i=h("scaleStatus");i.style.display="block",i.style.color="var(--mt)",i.textContent=`⏳ Scaling to ${n}× with Claude…`;try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Scale ALL ingredient quantities in this recipe by ${n}x. Return ONLY the updated recipe text with scaled quantities. Keep the same format. Do not add any explanation.

${t}`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"";o?(e.value=o.trim(),i.style.color="var(--gn)",i.textContent=`✓ Scaled to ${n}×`):(i.style.color="var(--rd)",i.textContent="Couldn't scale — try again")}catch{i.style.color="var(--rd)",i.textContent="Couldn't reach Claude — check connection"}}async function nA(){const n=h("rsub");n&&(n.textContent="Thinking…");const e=d.inv.map(s=>`${s.name} (${Ei(s.qty,s.unit)})`).join(", "),t=d.recs.map(s=>s.name).join(", "),i=[d.cfg.nopork?"no pork":null,d.cfg.noshellfish?"no shellfish":null,d.cfg.vegetarian?"vegetarian":null,d.cfg.glutenfree?"gluten-free":null,d.cfg.other||null].filter(Boolean).join(", ");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Based on this exact inventory: ${e}
Restrictions: ${i||"none"}
Saved recipes: ${t||"none"}
Suggest 5 complete meals I can make RIGHT NOW with no extra shopping. Be specific with names. Format as a numbered list.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",c=h("rbody");c&&(c.innerHTML=`<div style="background:var(--card);border:1px solid var(--ac);border-radius:14px;padding:16px;margin-bottom:12px"><div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ac);margin-bottom:10px">🔍 Make right now — no shopping needed</div><div style="font-size:.88rem;line-height:1.8;color:var(--tx2)">${$y(o)}</div><button class="btn bs bsm" style="margin-top:12px;width:100%" onclick="setRT('all')">← Back to recipes</button></div>`),n&&(n.textContent="Based on your inventory")}catch{n&&(n.textContent="Couldn't reach Claude")}}async function iA(n){const e=d.recs.find(t=>t.id===n);if(!e||!e.description){R("No ingredients listed");return}R("Parsing ingredients…");try{const t=d.inv.map(l=>l.name.toLowerCase()),s=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:400,messages:[{role:"user",content:`Extract a list of ingredient names from this recipe description. Return ONLY a JSON array of strings, no markdown, no quantities, just clean ingredient names. Example: ["chicken","garlic","olive oil"]

Recipe: ${e.description}`}]})})).json(),r=(s.content&&s.content[0]&&s.content[0].text||"").replace(/```json|```/g,"").trim(),c=JSON.parse(r).filter(l=>!t.some(f=>f.includes(l.toLowerCase())||l.toLowerCase().includes(f)));if(!c.length){R("All ingredients already in pantry ✓");return}for(const l of c)await ye({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:l,qty:1,checked:!1,src:"recipe"});R(`Added ${c.length} ingredient${c.length!==1?"s":""} to shopping list 🛒`),Ee("erec"),window.showScreen("shopping")}catch{R("Couldn't parse ingredients")}}function sA(n,e){d.nr=n,e==="r"?(xs("rstars",n),qh("rstars",e)):e==="c"&&(xs("cstars",n),qh("cstars",e))}function qh(n,e){const t=h(n);if(!t)return;const i=t.querySelector(".star-clear");if(i&&i.remove(),d.nr>0){const s=document.createElement("span");s.className="star-clear",s.textContent="✕",s.onclick=r=>{if(r.stopPropagation(),d.nr=0,xs(n,0),s.remove(),e==="rv"&&d.eid){const o=d.recs.find(c=>c.id===d.eid);o&&(o.rating=0,Je({...o,rating:0}))}},t.appendChild(s)}}async function rA(n){const e=d.recs.find(i=>i.id===d.eid);if(!e)return;e.rating=n,d.nr=n;const t=h("rvstars");t&&(t.innerHTML=Array.from({length:5},(i,s)=>`<span class="star${s<n?" on":""}" onclick="setViewStar(${s+1})" style="cursor:pointer">${s<n?"★":"☆"}</span>`).join("")+(n>0?'<span class="star-clear" onclick="event.stopPropagation();setViewStar(0)">✕</span>':"")),await Je({...e,rating:n})}async function oA(n){const e=d.recs.find(r=>r.id===n);if(!e)return;const t=!e.isPublic,i=Z(),s=(i==null?void 0:i.displayName)||localStorage.getItem("ks-who")||"Anonymous";if(t){const r=await Xc(e);if(r){R("This recipe has already been published to the community. To update the community version, edit the recipe and use the “Push to community” option."),(!e.isPublic||!e.publicId)&&(e.isPublic=!0,e.publicId=r.id,await Je({...e}));return}const o=await Po(e,s);e.publicId=o.id,Ye("published",Ae(e.name||"a recipe")+" to community"),R("Recipe shared with the community!")}else{const r=e.publicId||e.id;await Zc(r),e.publicId=null,Ye("unpublished",Ae(e.name||"a recipe")+" from community"),R("Recipe removed from community")}await Je({...e,isPublic:t,publicId:e.publicId||null})}function aA(n){const t=h(n==="add"?"addRecCoverInput":"editCoverInput");t&&t.click()}function cA(n,e){var i,s;const t=(s=(i=n.target)==null?void 0:i.files)==null?void 0:s[0];t&&(Rt=t,Pg(t,e))}function lA(n,e){var i,s;const t=(s=(i=n.dataTransfer)==null?void 0:i.files)==null?void 0:s[0];!t||!t.type.startsWith("image/")||(Rt=t,Pg(t,e))}function Pg(n,e){const i=h(e==="add"?"addRecCoverZone":"editCoverZone");if(!i)return;const s=new FileReader;s.onload=r=>{i.classList.add("has-preview"),i.innerHTML=`<img src="${r.target.result}" alt="Cover preview"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('${e}')">✕</button>`},s.readAsDataURL(n)}function uA(n){Rt=null;const t=h(n==="add"?"addRecCoverZone":"editCoverZone");if(t&&(t.classList.remove("has-preview"),t.innerHTML='<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop · Max 800×600, 300KB</div>',n==="edit"&&d.eid)){const i=d.recs.find(s=>s.id===d.eid);i&&(i._removeCover=!0)}}let Gr=null;function dA(n){Gr=n;const e=h("stepPhotoInput");e&&(e.value="",e.click())}function hA(n){var i,s;const e=(s=(i=n.target)==null?void 0:i.files)==null?void 0:s[0];if(!e||Gr===null)return;Ii[Gr]=e;const t=new FileReader;t.onload=r=>{R(`Step ${Gr+1} photo added`)},t.readAsDataURL(e)}function fA(n){const e=d.recs.find(t=>t.id===d.eid);if(e){if(delete Ii[n],e.stepPhotos&&e.stepPhotos[n]){const t=`recipes/${e.id}/steps/${n}.jpg`;bg(t).catch(()=>{}),delete e.stepPhotos[n]}xg(e.id),R(`Step ${n+1} photo removed`)}}function pA(n,e){Bn=n||[],Hn=e||0,Lg();const t=h("photoViewer");t&&t.classList.add("active"),gA()}function mA(){const n=h("photoViewer");n&&n.classList.remove("active"),Bn=[]}function $g(n){const e=Hn+n;e<0||e>=Bn.length||(Hn=e,Lg())}function Lg(){const n=h("pvImg"),e=h("pvCounter"),t=h("pvPrev"),i=h("pvNext");n&&(n.src=Bn[Hn]||""),e&&(e.textContent=Bn.length>1?`${Hn+1} / ${Bn.length}`:""),t&&(t.style.display=Hn>0?"flex":"none"),i&&(i.style.display=Hn<Bn.length-1?"flex":"none")}function gA(){const n=h("pvWrap");if(!n)return;let e=0,t=0;const i=n.cloneNode(!0);n.parentNode.replaceChild(i,n),i.addEventListener("touchstart",s=>{e=s.touches[0].clientX,t=s.touches[0].clientY},{passive:!0}),i.addEventListener("touchend",s=>{const r=s.changedTouches[0].clientX-e,o=s.changedTouches[0].clientY-t;Math.abs(r)>50&&Math.abs(r)>Math.abs(o)&&$g(r<0?1:-1)},{passive:!0})}function yA(){const n=h("cmtPhotoInput");n&&(n.value="",n.click())}function vA(n){var t;const e=(t=n.target)==null?void 0:t.files;if(!(!e||!e.length)){for(let i=0;i<e.length;i++)e[i].type.startsWith("image/")&&Tt.push(e[i]);Dg()}}function wA(n){Tt.splice(n,1),Dg()}function Dg(){const n=h("cmtPhotoPreview");if(!n)return;if(!Tt.length){n.innerHTML="";return}let e="";Tt.forEach((t,i)=>{const s=URL.createObjectURL(t);e+=`<div style="position:relative;display:inline-block"><img src="${s}" class="cmt-preview-thumb" alt=""/><button onclick="event.stopPropagation();removeCommentPhoto(${i})" style="position:absolute;top:-4px;right:-4px;width:18px;height:18px;border-radius:50%;background:var(--rd);color:#fff;border:none;font-size:.6rem;cursor:pointer;display:flex;align-items:center;justify-content:center">✕</button></div>`}),e+='<div class="cmt-preview-add" onclick="triggerCommentPhotoUpload()">+</div>',n.innerHTML=e}let It=null;function Kr(n){if(!n)return 0;const e=n.toLowerCase();let t=0;const i=e.match(/(\d+)\s*(?:hr|hour)/),s=e.match(/(\d+)\s*min/);return i&&(t+=parseInt(i[1])*60),s&&(t+=parseInt(s[1])),t}function vo(n,e){const t=Math.round(n||0),i=Array.from({length:5},(r,o)=>o<t?"★":"☆").join(""),s=e?`(${e})`:"";return`<span style="color:var(--ac);font-size:.74rem;letter-spacing:1px">${i}</span><span style="font-size:.68rem;color:var(--mt);margin-left:3px">${s}</span>`}async function Kl(){const n=h("rbody");if(n){n.innerHTML='<div class="es"><div class="ei">🌍</div><p>Loading community recipes…</p></div>',d.comPage=0;try{d.comRecs=await el(),ht()}catch(e){console.error("loadCommunity:",e),n.innerHTML=`<div class="es"><div class="ei">⚠️</div><p>Couldn't load community recipes.</p></div>`}}}function _A(n){d.comCuisine=n,d.comPage=0,ht()}function bA(n){d.comSearch=n,d.comPage=0,ht()}function TA(n){d.comSort=n,d.comPage=0,ht()}function IA(n){const e=d.comTags.indexOf(n);e>=0?d.comTags.splice(e,1):d.comTags.push(n),d.comPage=0,ht()}function EA(n){d.comTime=n,d.comPage=0,ht()}function kA(n){d.comMinRating=parseInt(n)||0,d.comPage=0,ht()}function ht(){const n=h("rbody");if(!n)return;It&&(It.disconnect(),It=null);let e=[...d.comRecs];if(d.comCuisine&&d.comCuisine!=="all"&&(e=e.filter(l=>(l.cuisine||"").toLowerCase().includes(d.comCuisine.toLowerCase())||(l.tags||[]).some(f=>f.toLowerCase().includes(d.comCuisine.toLowerCase())))),d.comSearch){const l=d.comSearch.toLowerCase();e=e.filter(f=>(f.title||"").toLowerCase().includes(l)||(f.tags||[]).join(" ").toLowerCase().includes(l)||(f.cuisine||"").toLowerCase().includes(l)||(f.authorUsername||"").toLowerCase().includes(l)||(f.authorName||"").toLowerCase().includes(l))}d.comTags.length&&(e=e.filter(l=>d.comTags.every(f=>(l.tags||[]).includes(f)))),d.comTime&&d.comTime!=="any"&&(e=e.filter(l=>{const f=Kr(l.cookTime||l.totalTime);return f?d.comTime==="under30"?f<=30:d.comTime==="30to60"?f>30&&f<=60:d.comTime==="over60"?f>60:!0:!1})),d.comMinRating>0&&(e=e.filter(l=>(l.avgRating||0)>=d.comMinRating)),d.comSort==="popular"?e.sort((l,f)=>(f.likes||0)-(l.likes||0)):d.comSort==="rated"?e.sort((l,f)=>(f.avgRating||0)-(l.avgRating||0)):d.comSort==="az"?e.sort((l,f)=>(l.title||"").localeCompare(f.title||"")):d.comSort==="cooktime"?e.sort((l,f)=>Kr(l.cookTime||l.totalTime)-Kr(f.cookTime||f.totalTime)):e.sort((l,f)=>new Date(f.createdAt||0)-new Date(l.createdAt||0));const i=e.slice(0,(d.comPage+1)*20),s=i.length<e.length,r=h("rsub");r&&(r.textContent=e.length+" community recipe"+(e.length!==1?"s":""));const o=d.comSort||"newest";let c=`<div style="margin-bottom:14px">
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
    ${Ag("com")}
  </div>`;if(!e.length){const l=d.comSearch||d.comCuisine!=="all"||d.comTags.length||d.comTime!=="any"||d.comMinRating>0;c+=`<div class="es"><div class="ei">🌍</div><p>${l?"No recipes match your filters.":"No community recipes yet. Be the first to share!"}</p></div>`,n.innerHTML=c;return}if(c+='<div class="recipe-grid" id="com-recipe-grid">',i.forEach(l=>{const f=(l.tags||[]).slice(0,3).map(A=>`<span class="com-tag">${A}</span>`).join(""),m=l.authorUsername?`@${l.authorUsername}`:l.authorName||"Anonymous",y=l.cookTime||l.totalTime||"",w=l.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${l.imageUrl}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",E=l.commentCount||0;c+=`<div class="rcd com-rcd" onclick="openComRecipe('${l.id}')">
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
        ${l.avgRating||l.ratingCount?`<span>${vo(l.avgRating,l.ratingCount)}</span>`:""}
        ${y?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${y}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${f}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${m}</div>
      </div>
    </div>`}),c+="</div>",s&&(c+='<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>'),n.innerHTML=c,s){const l=h("com-scroll-sentinel");l&&(It=new IntersectionObserver(f=>{f[0].isIntersecting&&(d.comPage++,Ng(e,n))},{rootMargin:"200px"}),It.observe(l))}}function Ng(n,e){const i=d.comPage*20,s=i+20,r=n.slice(i,s),o=s<n.length;let c="";r.forEach(m=>{const y=(m.tags||[]).slice(0,3).map($=>`<span class="com-tag">${$}</span>`).join(""),w=m.authorUsername?`@${m.authorUsername}`:m.authorName||"Anonymous",E=m.cookTime||m.totalTime||"",A=m.commentCount||0,P=m.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${m.imageUrl}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"";c+=`<div class="rcd com-rcd" onclick="openComRecipe('${m.id}')">
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
        ${m.avgRating||m.ratingCount?`<span>${vo(m.avgRating,m.ratingCount)}</span>`:""}
        ${E?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${E}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${y}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${w}</div>
      </div>
    </div>`});const l=h("com-scroll-sentinel");l&&l.remove(),It&&(It.disconnect(),It=null);const f=h("com-recipe-grid");if(f?f.insertAdjacentHTML("beforeend",c):e.insertAdjacentHTML("beforeend",c),o){e.insertAdjacentHTML("beforeend",'<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>');const m=h("com-scroll-sentinel");m&&(It=new IntersectionObserver(y=>{y[0].isIntersecting&&(d.comPage++,Ng(n,e))},{rootMargin:"200px"}),It.observe(m))}}async function wo(n){var ft;const e=d.comRecs.find(he=>he.id===n);if(!e)return;d._openComId=n,$i="view",Tt=[];const t=h("erecTitle");t&&(t.textContent="Recipes"),Go(()=>sr());const i=(ft=Z())==null?void 0:ft.uid,[s,r,o,c]=await Promise.all([mp(n),pp(n).catch(()=>[]),_p(n).catch(()=>null),vp(n)]);s?d.myLikes.add(n):d.myLikes.delete(n),r.sort((he,Pn)=>new Date(he.createdAt||0)-new Date(Pn.createdAt||0)),d._comComments=r;const l=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`,f=e.imageUrl?`<div style="margin:-16px -16px 16px;overflow:hidden;max-height:240px"><img src="${e.imageUrl}" alt="" style="width:100%;height:240px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",m=[e.prepTime?`🔪 Prep: ${e.prepTime}`:"",e.cookTime?`🔥 Cook: ${e.cookTime}`:"",e.totalTime?`⏱ Total: ${e.totalTime}`:"",e.servings?`🍽 Serves: ${e.servings}`:""].filter(Boolean),y=m.length?`<div class="rv-meta">${m.map(he=>`<div class="rv-meta-pill">${he}</div>`).join("")}</div>`:"",w=(e.ratingCount||0)>0?`<div style="margin-bottom:6px">${vo(e.avgRating,e.ratingCount)}</div>`:"",E=(e.tags||[]).map(he=>`<span class="com-tag">${he}</span>`).join(""),A=e.authorUsername?`@${e.authorUsername}`:e.authorName||"Anonymous",P=d.myLikes.has(n),$=i&&i===e.authorUid;let U=!1;!$&&i&&e.householdId&&e.householdId===d.hid&&(U=!0);const N=$||U;let M="";e.ingredientsRaw&&e.ingredientsRaw.length?M=`<ul style="margin:0;padding-left:18px;font-size:.88rem;color:var(--tx2);line-height:2">${e.ingredientsRaw.map(he=>`<li>${(typeof he=="string"?he:(he.amount||"")+" "+(he.unit||"")+" "+(he.name||"")).replace(/</g,"&lt;").replace(/>/g,"&gt;").trim()}</li>`).join("")}</ul>`:e.ingredients&&(M=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.ingredients||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);let D="";e.stepsRaw&&e.stepsRaw.length?D=`<ol style="margin:0;padding-left:22px;font-size:.88rem;color:var(--tx2);line-height:1.8">${e.stepsRaw.map(he=>`<li style="margin-bottom:8px">${(typeof he=="string"?he:he.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</li>`).join("")}</ol>`:e.steps&&(D=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.steps||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);const F=LA(r.slice(0,20),n,i,$),j=r.length>20,b=(o==null?void 0:o.rating)||0,v=b>0?`<span onclick="clearComRating('${n}')" style="cursor:pointer;font-size:.8rem;color:var(--mt);margin-left:6px;vertical-align:middle" title="Clear rating">✕</span>`:"",_=$?"":Array.from({length:5},(he,Pn)=>`<span class="star${Pn<b?" on":""}" onclick="rateComRecipe('${n}',${Pn+1})" style="cursor:pointer;font-size:1.3rem">${Pn<b?"★":"☆"}</span>`).join("")+v,k=N?`<button class="btn bs bsm" onclick="editComRecipe('${n}')" style="margin-top:8px;width:100%">✏️ Edit community version</button>`:"",I=$?`<button class="btn bd bsm" onclick="unpublishComRecipe('${n}')" style="margin-top:8px;width:100%">🚫 Unpublish this recipe</button>`:"",S=k+I,T=!N&&i?`<button class="btn-report" onclick="openReportSheet('recipe','${n}','${n}')" title="Report recipe">🚩 Report</button>`:"";h("erecbody").innerHTML=`
    ${f}
    <div style="margin-bottom:14px">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px">
        <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;line-height:1.3;margin-bottom:6px;flex:1">${e.title||"Untitled"}</div>
        ${T}
      </div>
      ${e.cuisine?`<div style="font-size:.78rem;color:var(--ac);font-weight:600;margin-bottom:6px">${e.cuisine}</div>`:""}
      ${w}
      <div style="font-size:.76rem;color:var(--mt)">by ${A} · ${e.createdAt?new Date(e.createdAt).toLocaleDateString():""}</div>
      ${E?`<div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:8px">${E}</div>`:""}
    </div>

    ${y}

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
      ${(e.ratingCount||0)>0?`<div style="font-size:.72rem;color:var(--mt);margin-top:6px">${vo(e.avgRating,e.ratingCount)} avg</div>`:""}
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

    ${S}`;const Re=h("com-cmt-input");Re&&Re.addEventListener("input",()=>{const he=h("com-cmt-counter");he&&(he.textContent=`${Re.value.length} / 500`)}),at("erec")}async function SA(n,e){return Mg(n,e)}async function Mg(n,e){if(!Z()){R("Sign in to rate recipes");return}try{const i=await wp(n,e);if(!i){R("You can't rate your own recipe");return}const s=d.comRecs.find(c=>c.id===n);s&&(s.ratingSum=i.ratingSum,s.ratingCount=i.ratingCount,s.avgRating=i.avgRating);const r=h("com-rating-stars");r&&(r.innerHTML=Array.from({length:5},(c,l)=>`<span class="star${l<e?" on":""}" onclick="rateComRecipe('${n}',${l+1})" style="cursor:pointer;font-size:1.3rem">${l<e?"★":"☆"}</span>`).join("")+`<span onclick="clearComRating('${n}')" style="cursor:pointer;font-size:.8rem;color:var(--mt);margin-left:6px;vertical-align:middle" title="Clear rating">✕</span>`);const o=h("com-rating-label");o&&(o.textContent=`You rated this ${e}★`),R(`Rated ${e}★`)}catch(i){console.error("rateComRecipe:",i),R("Couldn't submit rating")}}async function CA(n){if(Z())try{const t=await bp(n);if(!t)return;const i=d.comRecs.find(o=>o.id===n);i&&(i.ratingSum=t.ratingSum,i.ratingCount=t.ratingCount,i.avgRating=t.avgRating);const s=h("com-rating-stars");s&&(s.innerHTML=Array.from({length:5},(o,c)=>`<span class="star" onclick="rateComRecipe('${n}',${c+1})" style="cursor:pointer;font-size:1.3rem">☆</span>`).join(""));const r=h("com-rating-label");r&&(r.textContent=""),R("Rating cleared")}catch(t){console.error("clearComRating:",t),R("Couldn't clear rating")}}async function AA(n){if(confirm("Remove this recipe from the community?"))try{await Zc(n),d.comRecs=d.comRecs.filter(e=>e.id!==n),R("Recipe unpublished"),Ee("erec"),ht()}catch(e){console.error("unpublishComRecipe:",e),R("Couldn't unpublish recipe")}}async function RA(n){if(!Z()){R("Sign in to like recipes");return}const t=d.myLikes.has(n);try{await hp(n,t),t?d.myLikes.delete(n):d.myLikes.add(n);const i=d.comRecs.find(r=>r.id===n);i&&(i.likes=(i.likes||0)+(t?-1:1));const s=h("com-like-btn");if(s){const r=d.myLikes.has(n);s.className=`btn ${r?"bp":"bs"} bsm`,s.innerHTML=`${r?"❤️":"🤍"} ${(i==null?void 0:i.likes)||0} Like${((i==null?void 0:i.likes)||0)!==1?"s":""}`}R(t?"Like removed":"Liked!")}catch(i){console.error("likeComRecipe:",i),R("Couldn't update like")}}async function xA(n){if(!Z()){R("Sign in to save recipes");return}const t=d.comRecs.find(i=>i.id===n);if(t)try{await gp(t),Ye("saved",Ae(t.title||"a recipe")+" from community"),R("Recipe saved to your kitchen! 📖"),Ee("erec")}catch(i){console.error("saveComToKitchen:",i),R("Couldn't save recipe")}}async function PA(n){var r;const e=Z();if(!e){R("Sign in to comment");return}const t=h("com-cmt-input"),i=(r=t==null?void 0:t.value)==null?void 0:r.trim();if(!i&&!Tt.length)return;if(i&&i.length>500){R("Comment must be 500 characters or less");return}const s=e.displayName||localStorage.getItem("ks-who")||"Anonymous";try{const o=await fp(n,i||"",s);if(!o)return;let c=[];if(Tt.length){R("Uploading photos…");for(let E=0;E<Tt.length;E++)try{const A=await dC(Tt[E],n,o.id,E);c.push(A)}catch(A){console.error(`Comment photo ${E} upload failed:`,A)}c.length&&(o.photoUrls=c,await W(`public_recipes/${n}/comments/${o.id}`,{...o,id:void 0}))}t&&(t.value=""),Tt=[];const l=h("cmtPhotoPreview");l&&(l.innerHTML="");const f=h("com-cmt-counter");f&&(f.textContent="0 / 500");const m=h("com-comments"),y=d.comRecs.find(E=>E.id===n),w=e.uid===(y==null?void 0:y.authorUid);m&&o&&(m.querySelector("div[style*='color:var(--mt)']")&&!m.querySelector("div[style*='border-bottom']")&&(m.innerHTML=""),m.innerHTML+=Ql(o,n,e.uid,w)),d._comComments&&d._comComments.push(o),R(c.length?`Comment posted with ${c.length} photo${c.length!==1?"s":""}!`:"Comment posted!")}catch(o){console.error("addComComment:",o),R("Couldn't post comment")}}async function $A(n){const e=d.comRecs.find(s=>s.id===n),t=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`,i=(e==null?void 0:e.title)||"Recipe";if(navigator.share)try{await navigator.share({title:i,text:`Check out this recipe: ${i}`,url:t});return}catch{}try{await navigator.clipboard.writeText(t),R("Link copied!")}catch{R("Couldn't copy link")}}function Ql(n,e,t,i){const s=(n.authorUsername?"@"+n.authorUsername:n.authorName)||"Anonymous",r=n.createdAt?new Date(n.createdAt).toLocaleDateString():"",o=(n.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;"),c=t&&(n.authorUid===t||i),l=t&&n.authorUid!==t;let f="";c&&(f+=`<button class="btn-report" onclick="deleteComComment('${e}','${n.id}')" title="Delete comment" style="font-size:.7rem">🗑</button>`),l&&(f+=`<button class="btn-report" onclick="openReportSheet('comment','${n.id}','${e}')" title="Report comment" style="font-size:.7rem">🚩</button>`);let m="";const y=n.photoUrls||[];if(y.length){const w=JSON.stringify(y).replace(/'/g,"\\'");m=`<div class="cmt-photos-grid">${y.map((A,P)=>`<img src="${A}" alt="Photo ${P+1}" onclick="event.stopPropagation();openPhotoViewer(${w.replace(/"/g,"&quot;")},${P})" onerror="this.style.display='none'"/>`).join("")}</div>
      <div class="cmt-photo-count">📷 ${y.length} photo${y.length!==1?"s":""}</div>`}return`<div class="com-comment-row" id="cmt-${n.id}" style="padding:10px 0;border-bottom:1px solid var(--b1)">
    <div style="display:flex;justify-content:space-between;align-items:center">
      <span style="font-size:.78rem;font-weight:600">${s}</span>
      <div style="display:flex;align-items:center;gap:6px">
        ${f}
        <span style="font-size:.68rem;color:var(--mt)">${r}</span>
      </div>
    </div>
    <div style="font-size:.84rem;color:var(--tx2);margin-top:4px;line-height:1.5">${o}</div>
    ${m}
  </div>`}function LA(n,e,t,i){return n.length?n.map(s=>Ql(s,e,t,i)).join(""):""}function DA(){var f;const n=d._openComId,e=(f=Z())==null?void 0:f.uid,t=d.comRecs.find(m=>m.id===n),i=e&&e===(t==null?void 0:t.authorUid),s=h("com-comments");if(!s||!d._comComments)return;const r=s.querySelectorAll(".com-comment-row").length,o=d._comComments.slice(r,r+20);if(o.length){const m=o.map(y=>Ql(y,n,e,i)).join("");s.insertAdjacentHTML("beforeend",m)}const c=d._comComments.length-r-o.length,l=h("com-load-more");l&&(c>0?l.textContent=`Load more comments (${c} remaining)`:l.remove())}async function NA(n,e){if(confirm("Delete this comment?"))try{await Tp(n,e);const t=document.getElementById("cmt-"+e);t&&t.remove(),d._comComments&&(d._comComments=d._comComments.filter(i=>i.id!==e)),R("Comment deleted")}catch(t){console.error("deleteComComment:",t),R("Couldn't delete comment")}}async function MA(n){var w;const e=d.comRecs.find(E=>E.id===n);if(!e)return;const i=((w=Z())==null?void 0:w.uid)===e.authorUid,s=e.householdId&&e.householdId===d.hid;if(!i&&!s){R("Only household members can edit");return}d._editingComId=n,$i="edit";const r=h("erecTitle");r&&(r.textContent="Edit Community Recipe"),Go(()=>sr());const o=`<div style="background:rgba(201,168,76,0.15);border:1px solid var(--ac);border-radius:10px;padding:12px;margin-bottom:14px;font-size:.82rem;color:var(--ac);line-height:1.5">
    ⚠️ You are editing the <strong>community version</strong>. Changes will be visible to everyone immediately.
  </div>`,c=e.tags||[],l=E=>c.includes(E)?" sel":"";let f='<div class="frow"><label class="flbl">Tags</label><div class="tags-grid" id="comEditTags">';Wr.forEach(E=>{f+=`<div class="tag-cat">${E.cat}</div>`,E.tags.forEach(A=>{f+=`<div class="tag${l(A)}" data-tag="${A}" onclick="togTag(this)">${A}</div>`})}),f+="</div></div>";const m=Ft(e.prepTime),y=Ft(e.cookTime);Ft(e.totalTime),h("erecbody").innerHTML=`
    ${o}
    <div class="frow"><label class="flbl">Title</label><input class="fi" id="comEditTitle" value="${le(e.title||"")}"/></div>
    <div class="frow"><label class="flbl">Summary <span class="otag">optional</span></label><input class="fi" id="comEditSummary" value="${le(e.summary||"")}" placeholder="1-2 sentence description" maxlength="200"/></div>
    <div class="frow"><label class="flbl">Cuisine <span class="otag">optional</span></label><input class="fi" id="comEditCuisine" value="${le(e.cuisine||"")}" placeholder="e.g. Mediterranean, Turkish…"/></div>
    <div style="margin-bottom:14px">
      <div class="frow" style="margin-bottom:8px"><label class="flbl">Prep time</label>
        <div style="display:flex;gap:8px;align-items:center">
          <input class="fi" id="comEditPrepTime" type="text" inputmode="numeric" placeholder="e.g. 15" value="${le(m.value)}" style="flex:1"/>
          <select class="fi" id="comEditPrepUnit" style="width:auto;min-width:90px">
            <option value="min"${m.unit==="min"?" selected":""}>minutes</option>
            <option value="hr"${m.unit==="hr"?" selected":""}>hours</option>
          </select>
        </div>
      </div>
      <div class="frow" style="margin-bottom:8px"><label class="flbl">Cook time</label>
        <div style="display:flex;gap:8px;align-items:center">
          <input class="fi" id="comEditCookTime" type="text" inputmode="numeric" placeholder="e.g. 30" value="${le(y.value)}" style="flex:1"/>
          <select class="fi" id="comEditCookUnit" style="width:auto;min-width:90px">
            <option value="min"${y.unit==="min"?" selected":""}>minutes</option>
            <option value="hr"${y.unit==="hr"?" selected":""}>hours</option>
          </select>
        </div>
      </div>
      <div class="frow"><label class="flbl">Serves</label>
        <input class="fi" id="comEditServes" type="text" inputmode="numeric" placeholder="e.g. 4" value="${le(e.servings||"")}"/>
      </div>
    </div>
    ${f}
    <div class="frow"><label class="flbl">Ingredients</label><textarea class="fta" id="comEditIngredients" style="min-height:100px">${le(e.ingredients||"")}</textarea></div>
    <div class="frow"><label class="flbl">Steps</label><textarea class="fta" id="comEditSteps" style="min-height:100px">${le(e.steps||"")}</textarea></div>
    <div class="brow" style="margin-top:14px">
      <button class="btn bs" style="flex:1" onclick="hideOv('erec')">Cancel</button>
      <button class="btn bp" style="flex:2" onclick="saveComRecipeEdit()">Save Changes</button>
    </div>`,at("erec")}async function OA(){var w,E,A,P,$,U,N,M,D,F,j,b;const n=d._editingComId,e=d.comRecs.find(v=>v.id===n);if(!e)return;const t=((E=(w=h("comEditTitle"))==null?void 0:w.value)==null?void 0:E.trim())||e.title,i=((P=(A=h("comEditSummary"))==null?void 0:A.value)==null?void 0:P.trim())||"",s=((U=($=h("comEditCuisine"))==null?void 0:$.value)==null?void 0:U.trim())||"",r=((M=(N=h("comEditServes"))==null?void 0:N.value)==null?void 0:M.trim())||"",o=Wl("comEditTags"),c=((F=(D=h("comEditIngredients"))==null?void 0:D.value)==null?void 0:F.trim())||"",l=((b=(j=h("comEditSteps"))==null?void 0:j.value)==null?void 0:b.trim())||"",f=Li("comEditPrepTime","comEditPrepUnit")||"",m=Li("comEditCookTime","comEditCookUnit")||"",y={...e,title:t,summary:i,cuisine:s,servings:r,tags:o,ingredients:c,steps:l,prepTime:f,cookTime:m};delete y.id;try{await W(`public_recipes/${n}`,y),Object.assign(e,{title:t,summary:i,cuisine:s,servings:r,tags:o,ingredients:c,steps:l,prepTime:f,cookTime:m}),d._editingComId=null;const v=h("erecTitle");v&&(v.textContent="Recipes"),Ye("updated",Ae(t)+" (community)"),R("Community recipe updated!"),ql(),Ee("erec"),ht()}catch(v){console.error("saveComRecipeEdit:",v),R("Couldn't save changes")}}function VA(n,e,t){if(!Z()){R("Sign in to report content");return}d._reportTarget={type:n,targetId:e,recipeId:t};const s=h("report-sheet"),r=h("reportBackdrop");s&&s.classList.add("active"),r&&r.classList.add("active")}function Og(){const n=h("report-sheet"),e=h("reportBackdrop");n&&n.classList.remove("active"),e&&e.classList.remove("active"),d._reportTarget=null}async function UA(n){const e=d._reportTarget;if(e){try{const t=await Ip(e.type,e.targetId,n,e.recipeId);R(t==="duplicate"?"You've already reported this":"Thanks for your report")}catch(t){console.error("submitComReport:",t),R("Couldn't submit report")}Og()}}async function Vg(){try{const n=await Cp(),e=n>9?"9+":String(n),t=n>0,i=h("recipes-notif-badge");i&&(i.textContent=e,i.style.display=t?"flex":"none");const s=h("recipes-notif-badge-hdr");s&&(s.textContent=e,s.style.display=t?"flex":"none")}catch{}}async function FA(){if(!Z()){R("Sign in to view notifications");return}try{const e=await kp();Sp().then(()=>Vg());const t=h("erecbody");if(!t)return;let i=`<div style="margin-bottom:14px">
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;margin-bottom:6px">Notifications</div>
      <div style="font-size:.76rem;color:var(--mt)">${e.length?e.length+" notification"+(e.length!==1?"s":""):"No notifications yet"}</div>
    </div>`;e.length?e.forEach(s=>{const r=!s.read,o=s.createdAt?new Date(s.createdAt).toLocaleDateString():"";s.type==="comment"&&(i+=`<div class="rcd" style="${r?"border-left:3px solid var(--ac);":""}" onclick="openComRecipeFromNotif('${s.recipeId}')">
            <div style="font-size:.84rem;font-weight:${r?"600":"400"};line-height:1.5">
              <span style="color:var(--ac)">${(s.commenterUsername||"Someone").replace(/</g,"&lt;")}</span> commented on your recipe
              <span style="font-weight:600">${(s.recipeName||"").replace(/</g,"&lt;")}</span>
            </div>
            <div style="font-size:.68rem;color:var(--mt);margin-top:4px">${o}</div>
          </div>`)}):i+=`<div class="es"><div class="ei">🔔</div><p>When someone comments on your recipe, you'll see it here.</p></div>`,t.innerHTML=i,at("erec")}catch(e){console.error("openNotifications:",e),R("Couldn't load notifications")}}async function BA(n){if(Ee("erec"),!d.comRecs.length)try{d.comRecs=await el()}catch{}if(d.comRecs.find(e=>e.id===n)){d.rt="community",document.querySelectorAll(".rtab").forEach(t=>t.classList.remove("active"));const e=h("rtab-community");e&&e.classList.add("active"),setTimeout(()=>wo(n),100)}else try{const e=await tl(n);e?(d.comRecs.push({id:n,...e}),d.rt="community",setTimeout(()=>wo(n),100)):R("Recipe no longer available")}catch{R("Couldn't load recipe")}}function HA(){const n=d.cookLog,e=d.wasteLog;let t=0;for(let M=0;M<60;M++){const D=new Date;D.setDate(D.getDate()-M);const F=D.toISOString().split("T")[0];if(n.find(j=>j.date===F))t++;else if(M>0)break}const i=h("ins-streak-num");i&&(i.textContent=t);const s=h("ins-total-cooked");s&&(s.textContent=n.length);const r=h("ins-waste-count");r&&(r.textContent=e.length);const o=h("ins-sub");o&&(o.textContent=n.length?" "+n.length+" meals cooked":"Your kitchen at a glance");const c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],l=h("ins-week");if(l){const M=Ni().map(D=>{const F=D.toISOString().split("T")[0],j=d.mp[F],b=F===dn();return`<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--b1)${b?";background:var(--acd);margin:0 -4px;padding:7px 4px;border-radius:6px":""}">
        <div style="font-size:.72rem;color:var(--mt);min-width:30px;font-weight:${b?"600":"400"}">${c[D.getDay()]}</div>
        <div style="font-size:.72rem;color:var(--mt);min-width:20px">${D.getDate()}</div>
        <div style="font-size:.84rem;color:${j?"var(--tx)":"var(--mt)"};font-style:${j?"normal":"italic"};flex:1">${j||"—"}</div>
        ${b?"<div style='font-size:.66rem;color:var(--ac);font-weight:600'>TODAY</div>":""}
      </div>`}).join("");l.innerHTML=M}const f=n.slice(0,7).map(M=>M.name),m=h("ins-variety-nudge"),y=h("ins-variety-msg");if(m&&f.length>=3){const M={};f.forEach(v=>{const _=v.toLowerCase();M[_]=(M[_]||0)+1});const D=Object.entries(M).filter(([,v])=>v>=3),F=Object.values(d.mp).filter(Boolean),j=F.some(v=>/curry|dal|rice|bengali|biryani|hilsa|mustard|lentil/i.test(v)),b=F.some(v=>/kebab|köfte|pide|börek|meze|turkish|pilav|lahmacun/i.test(v));D.length?(m.style.display="block",y.textContent=`You've cooked "${D[0][0]}" ${D[0][1]} times this week. Time to mix it up?`):!j&&F.length>=3?(m.style.display="block",y.textContent="No Bangladeshi dishes this week — how about a dal, biryani, or fish curry?"):!b&&F.length>=3?(m.style.display="block",y.textContent="No Turkish dishes planned — köfte, mercimek çorbası, or a pilav would be great this week!"):m.style.display="none"}else m&&(m.style.display="none");const w={};n.forEach(M=>{w[M.name]=(w[M.name]||0)+1});const E=Object.entries(w).sort((M,D)=>D[1]-M[1]).slice(0,6),A=E[0]?E[0][1]:1,P=h("ins-cooked");if(P)if(!E.length)P.innerHTML='<div class="es" style="padding:16px"><p>Cook some meals to see stats!</p></div>';else{const M=["🥇","🥈","🥉","4️⃣","5️⃣","6️⃣"];P.innerHTML=E.map(([D,F],j)=>`<div class="ibar-row"><div style="font-size:.9rem;margin-right:4px">${M[j]||""}</div><div class="ibar-lbl">${D}</div><div class="ibar-track"><div class="ibar-fill" style="width:${Math.round(F/A*100)}%"></div></div><div class="ibar-val">${F}×</div></div>`).join("")}const $={Bangladeshi:"#e8a44a",Turkish:"#c0392b",Mediterranean:"#27ae60",American:"#3498db",Italian:"#e74c3c",Asian:"#9b59b6",Other:"#95a5a6"},U=h("ins-cuisine");if(U&&n.length){const M=b=>{const v=b.toLowerCase();return/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(v)?"Bangladeshi":/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner|iskender/i.test(v)?"Turkish":/pasta|pizza|risotto|gnocchi|italian/i.test(v)?"Italian":/tacos|burrito|enchilada|mexican/i.test(v)?"Mexican":/sushi|ramen|stir.?fry|fried rice|asian|chinese|thai|japanese/i.test(v)?"Asian":/burger|sandwich|mac|bbq|american/i.test(v)?"American":"Other"},D={};n.slice(0,20).forEach(b=>{const v=M(b.name);D[v]=(D[v]||0)+1});const F=Object.values(D).reduce((b,v)=>b+v,0),j=Object.entries(D).sort((b,v)=>v[1]-b[1]);U.innerHTML=j.map(([b,v])=>{const _=Math.round(v/F*100),k=$[b]||"#95a5a6";return`<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span style="font-size:.82rem;font-weight:500">${b}</span><span style="font-size:.74rem;color:var(--mt)">${v} meals · ${_}%</span></div><div style="height:8px;background:var(--b1);border-radius:4px;overflow:hidden"><div style="height:100%;width:${_}%;background:${k};border-radius:4px;transition:width .6s ease"></div></div></div>`}).join("")||'<div class="es" style="padding:16px"><p>Cook more meals to see your cuisine breakdown.</p></div>'}const N=h("ins-waste");N&&(N.innerHTML=e.length?e.slice(0,10).map(M=>`<div class="waste-item"><span style="font-size:.86rem">${M.name}</span><span style="font-size:.74rem;color:var(--rd)">${M.date}</span></div>`).join(""):'<div class="es" style="padding:16px"><p>Nothing wasted yet — great job! 🎉</p></div>')}function jA(){const n=["fridge","freezer","pantry"].map(o=>{const c=d.inv.filter(l=>l.location===o);return c.length?sf(o).toUpperCase()+": "+c.map(l=>`${l.name} (${Ei(l.qty,l.unit)})`).join(", "):""}).filter(Boolean).join(`
`),e=d.inv.filter(o=>{const c=xt(o.expiry);return c&&(c.c==="expiring"||c.c==="expired")}).map(o=>{const c=xt(o.expiry);return`${o.name} (${c.l})`}).join(", "),t=Ni().map(o=>{const c=o.toISOString().split("T")[0];return d.mp[c]?`${o.toLocaleDateString("en-US",{weekday:"short"})}: ${d.mp[c]}`:""}).filter(Boolean).join(", "),i=d.recs.filter(o=>o.favorited||o.rating>=4).map(o=>`${o.name}${o.rating?` (${o.rating}★)`:""}`).join(", "),s=[d.cfg.nopork?"no pork":null,d.cfg.noshellfish?"no shellfish":null,d.cfg.vegetarian?"vegetarian":null,d.cfg.glutenfree?"gluten-free":null,d.cfg.other].filter(Boolean).join(", "),r=d.cookLog.slice(0,7).map(o=>o.name).join(", ");return`You are a kitchen and household assistant for a family in Edison NJ. You ONLY help with kitchen, food, cooking, grocery, and household topics. This includes:
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
Always use this format so the app can offer a one-tap save button. You can include normal text before/after recipe blocks.`}function zA(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<li>$1</li>").replace(/^[-•]\s+(.+)$/gm,"<li>$1</li>").replace(/\n/g,"<br>")}async function Ug(){const n=h("chi"),e=n.value.trim();if(!e)return;n.value="",Fg(n),d.chat.push({role:"user",content:e}),Ha("user",e);const t=h("csb");t&&(t.disabled=!0);const i="thinking-"+Date.now(),s=h("chmsgs");s.innerHTML+=`<div class="cb asst thinking" id="${i}">Thinking…</div>`,s.scrollTop=s.scrollHeight;try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:800,system:jA(),messages:d.chat.map(f=>({role:f.role,content:f.content}))})})).json(),c=o.content&&o.content[0]&&o.content[0].text||"Sorry, I couldn't process that.",l=h(i);l&&l.remove(),d.chat.push({role:"assistant",content:c}),Ha("assistant",c)}catch{const o=h(i);o&&o.remove(),Ha("assistant","Sorry, I couldn't reach Claude. Check your connection and try again.")}t&&(t.disabled=!1)}function qA(n){const e=[];return{cleanText:n.replace(/:::RECIPE:::\s*([\s\S]*?)\s*:::END:::/g,(i,s)=>{try{const r=JSON.parse(s.trim());r.title&&e.push(r)}catch{}return""}).trim(),recipes:e}}function WA(n){const e=JSON.stringify(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;"),t=(n.ingredients||"").split(`
`).slice(0,3).join(", ");return`<div style="background:var(--card);border:1.5px solid var(--ac);border-radius:14px;padding:16px;margin:10px 0">
    <div style="font-family:'Fraunces',serif;font-size:1.1rem;font-weight:300;color:var(--ac);margin-bottom:6px">${(n.title||"").replace(/</g,"&lt;")}</div>
    ${n.cuisine?`<div style="font-size:.72rem;color:var(--mt);margin-bottom:6px">${n.cuisine}${n.cookTime?" · "+n.cookTime:""}${n.servings?" · "+n.servings+" servings":""}</div>`:""}
    ${t?`<div style="font-size:.8rem;color:var(--tx2);line-height:1.5;margin-bottom:10px">${t.replace(/</g,"&lt;")}…</div>`:""}
    <button class="btn bp bsm" onclick="importChatRecipe(this)" data-recipe="${e}">📖 Add to My Recipes</button>
  </div>`}async function GA(n){try{const e=JSON.parse(n.dataset.recipe),t="rec-"+Date.now(),i=[e.ingredients||"",e.steps?`

Steps:
`+e.steps:""].join("").trim();await Je({id:t,name:e.title||"Untitled Recipe",rating:0,favorited:!1,notes:"",description:i,source:"Claude Chat",sourceUrl:null,tags:[],cuisine:e.cuisine||"",cookTime:e.cookTime||"",servings:e.servings||"",cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:!1}),n.textContent="✓ Saved!",n.disabled=!0,n.style.background="var(--gn)",R("Recipe saved! 📖")}catch{R("Couldn't save recipe")}}function Ha(n,e){const t=h("chmsgs");if(t){if(n==="assistant"){const{cleanText:i,recipes:s}=qA(e);if(i){const r=document.createElement("div");r.className="cb asst",r.innerHTML=zA(i),t.appendChild(r)}s.forEach(r=>{const o=document.createElement("div");o.style.maxWidth="88%",o.style.alignSelf="flex-start",o.innerHTML=WA(r),t.appendChild(o)})}else{const i=document.createElement("div");i.className="cb user",i.innerHTML=e,t.appendChild(i)}t.scrollTop=t.scrollHeight}}function KA(n){const e=h("chi");e&&(e.value=n.textContent),Ug()}function QA(){d.chat=[];const n=h("chmsgs");n&&(n.innerHTML=`<div class="cb asst">Hey! 👋 I'm your kitchen assistant — I can help with recipes, meal planning, grocery tips, and cooking questions. What's on your mind?</div>`)}function Fg(n){n.style.height="auto",n.style.height=Math.min(n.scrollHeight,120)+"px"}let Os=!1,Qr=!1,Jr=null;function Jl(){if(Os)return;const n=h("scanner-video");if(!n)return;const e=h("scan-status");e&&(e.textContent="Starting camera…",e.style.display="block"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{JA(n,e)})})}function JA(n,e){Quagga.init({inputStream:{name:"Live",type:"LiveStream",target:n,constraints:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}},locator:{patchSize:"medium",halfSample:!0},decoder:{readers:["ean_reader","ean_8_reader","upc_reader","upc_e_reader","code_128_reader","code_39_reader"]},locate:!0,frequency:10},function(t){if(t){console.error("Scanner init error:",t);const i=h("scerr");i&&(i.textContent="⚠️ Could not access camera. Try entering the barcode manually.",i.style.display="block"),e&&(e.style.display="none");return}YA(n),Quagga.start(),Os=!0,e&&(e.textContent="Scanning…"),setTimeout(()=>XA(n),2e3)}),Quagga.onDetected(Bg)}function YA(n){n.querySelectorAll("video").forEach(e=>{e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,e.play().catch(()=>{})})}async function XA(n){if(!Os)return;const e=n.querySelector("video");if(!(!e||e.videoWidth>0)){console.warn("Camera feed appears black — retrying with manual getUserMedia");try{const t=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}});Jr=t,e.srcObject&&e.srcObject.getTracks().forEach(i=>i.stop()),e.srcObject=t,e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,await e.play()}catch(t){console.error("Manual camera retry failed:",t)}}}function Yl(){if(Os){try{Quagga.stop()}catch{}Quagga.offDetected(Bg),Jr&&(Jr.getTracks().forEach(n=>n.stop()),Jr=null),Os=!1,Qr=!1}}async function Bg(n){var s,r;if(Qr)return;const e=n&&n.codeResult&&n.codeResult.code;if(!e)return;const t=((r=(s=n.codeResult.decodedCodes)==null?void 0:s.filter(o=>o.error!==void 0))==null?void 0:r.map(o=>o.error))||[];if(!((t.length?t.reduce((o,c)=>o+c,0)/t.length:1)>.25)){Qr=!0,ZA(),Yl(),h("scanbody").style.display="none",h("scspin").style.display="block",h("scst").textContent="Found "+e+" — looking up…";try{const o=await Hg(e);d.cp=o,h("aqty").value=1,h("aexp").value="",Xl("fridge",h("rl-fridge")),jg(o)}catch{const o=h("scerr");o.textContent="⚠️ Lookup failed. Check your connection or enter the barcode manually.",o.style.display="block"}h("scanbody").style.display="block",h("scspin").style.display="none",Qr=!1}}function ZA(){const n=h("scan-success");n&&(n.style.display="flex",n.style.animation="none",n.offsetHeight,n.style.animation="",setTimeout(()=>{n.style.display="none"},500))}function eR(){Ee("result"),at("scan"),h("scerr").style.display="none",Jl()}function tR(){d.scanDestList=!0,at("scan");const n=h("scanovttl");n&&(n.textContent="Scan → Shopping List");const e=h("scan-dest-hint");e&&(e.textContent="Running low? Scan to add to your shopping list."),h("scerr").style.display="none",Jl()}function nR(){d.scanDestList=!1,at("scan");const n=h("scanovttl");n&&(n.textContent="Scan Barcode");const e=h("scan-dest-hint");e&&(e.textContent="Scan a barcode to add to your pantry or shopping list."),h("scerr").style.display="none",Jl()}function iR(){const n=h("scanNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=h("scanNoteInp");t&&t.focus()}}function sR(){if(!d.cp)return;const n=d.cp.notFound?"Barcode "+d.cp.barcode:d.cp.name,e=h("scanNoteInp"),t=e?e.value.trim():"",i=parseInt(h("aqty").value)||1,s={id:Date.now().toString(),name:n,qty:i,checked:!1,src:"scan"};d.cp.brand&&(s.brand=d.cp.brand),d.cp.image&&(s.image=d.cp.image),t&&(s.note=t),ye(s),R("Added to list: "+n),Ee("result"),Ee("scan"),d.scanDestList=!1,e&&(e.value="");const r=h("scanNoteWrap");r&&(r.style.display="none"),window.showScreen("shopping")}function rR(){const n=h("mentry");n.style.display=n.style.display==="none"?"block":"none"}async function oR(){const n=h("meinp").value.trim();if(!n)return;Yl(),h("scanbody").style.display="none",h("scspin").style.display="block",h("scst").textContent="Looking up…";const e=await Hg(n);d.cp=e,h("aqty").value=1,h("aexp").value="",Xl("fridge",h("rl-fridge")),h("meinp").value="",jg(e),h("scanbody").style.display="block",h("scspin").style.display="none"}async function Hg(n){try{const e=await fetch("/api/barcode?code="+encodeURIComponent(n));if(e.ok){const t=await e.json();if(t.found&&t.product)return{...t.product,notFound:!1}}}catch{}return{barcode:n,name:"",brand:"",quantity:"",category:"General",image:null,source:null,description:"",notFound:!0}}function aR(n,e){switch(n){case"Open Food Facts":return`https://world.openfoodfacts.org/product/${e}`;case"Open Beauty Facts":return`https://world.openbeautyfacts.org/product/${e}`;case"Open Pet Food Facts":return`https://world.openpetfoodfacts.org/product/${e}`;case"UPC Item DB":return`https://www.upcitemdb.com/upc/${e}`;case"Edamam":return"https://www.edamam.com/food-database/en/";default:return"#"}}function jg(n){var s;Ee("scan"),h("resttl").textContent=n.notFound?"Not Found":"Product Found ✓",h("aunit").value=n.quantity||"unit";let e="";if(n.notFound)e=`<div class="nfb">⚠️ Barcode <code>${n.barcode}</code> not found in any database. Enter name:<input class="fi" id="mnm" placeholder="Product name (required)" oninput="valAdd()" style="margin-top:10px"/></div>`;else{const r=n.image?`<img src="${n.image}" class="pimg" onerror="this.style.display='none'"/>`:'<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">🛒</div>',o=n.description?`<div class="pdsc">${n.description}</div>`:"",c=n.source?`<a href="${aR(n.source,n.barcode)}" target="_blank" rel="noopener" class="srcb" style="text-decoration:none">${n.source} ↗</a>`:"";e=`<div class="pcard"><div class="phdr">${r}<div style="flex:1"><div class="pnm">${n.name}</div>${n.brand?`<div class="pbr">${n.brand}</div>`:""}<div class="pbc">${n.barcode}</div><span class="bdg">${n.category}</span>${c}</div></div>${o}</div>`}h("resbody").innerHTML=e;const t=(s=h("ov-result"))==null?void 0:s.querySelector(".ovbody");if(t){const r=t.querySelector(".frow"),o=t.querySelectorAll(".frow")[1],c=t.querySelectorAll(".qrow")[1];r&&(r.style.display=d.scanDestList?"none":""),o&&(o.style.display=d.scanDestList?"none":""),c&&(c.style.display=d.scanDestList?"none":"")}const i=h("scan-dest-btns");i&&(d.scanDestList?i.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2;background:var(--gn);border-color:var(--gn)" id="addbtn" onclick="addScannedToList()">🛒 Add to Shopping List</button>
      </div>`:i.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2" id="addbtn" onclick="addToInv()">📦 Add to Pantry</button>
      </div>
      <button class="btn bs bf" style="margin-top:8px;border-color:var(--gn);color:var(--gn)" onclick="addScannedToList()">🛒 Add to Shopping List instead</button>`),n.notFound&&setTimeout(()=>{const r=h("addbtn");r&&(r.disabled=!0)},0),at("result")}function Xl(n,e){d.selR=n,document.querySelectorAll("#ov-result .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function cR(){const n=h("mnm");h("addbtn").disabled=!(n&&n.value.trim())}async function lR(){if(!d.cp)return;const n=h("mnm"),e=d.cp.notFound?n&&n.value.trim()||"":d.cp.name;if(!e)return;const t=h("aunit").value.trim()||"unit",i=Math.max(1,parseInt(h("aqty").value)||1),s=h("aexp").value||null,r="item-"+d.cp.barcode.replace(/\W/g,"-"),o=d.inv.find(c=>c.id===r);await re({id:r,barcode:d.cp.barcode,name:e,brand:d.cp.brand||"",unit:t,qty:o?o.qty+i:i,location:d.selR,category:d.cp.category||"General",image:d.cp.image||null,source:d.cp.source||null,expiry:s,addedAt:o?o.addedAt:new Date().toLocaleDateString()}),R(o?`+${i} added to ${e}`:`${e} added!`),d.cp=null,Ee("result")}function uR(n){const e=h("aqty");e.value=Math.max(1,(parseInt(e.value)||1)+n)}let Pe=null,xr=0,Pr=0,K=null,nn=null,wt=0,gt=!1,ai=!1;const sn=80,$r=.1,rn=.7,Lr=8,Vn="cubic-bezier(0.25, 1.5, 0.5, 1)",Le="cubic-bezier(0.4, 0, 0.2, 1)";function dR(){document.addEventListener("touchstart",e=>{const t=e.target.closest(".swipe-inner");if(!t)return;const i=t.closest(".swipe-wrap");i&&(d.selectMode||(K&&K!==i&&(Mt(K),K=null),Pe=t,xr=e.touches[0].clientX,Pr=e.touches[0].clientY,nn=null,gt=!1,wt=i.offsetWidth,t.classList.add("swiping")))},{passive:!0}),document.addEventListener("touchmove",e=>{if(!Pe)return;const t=e.touches[0].clientX,i=e.touches[0].clientY,s=t-xr,r=i-Pr;if(!nn){if(Math.abs(s)<Lr&&Math.abs(r)<Lr)return;nn=Math.abs(s)>Math.abs(r)?"horizontal":"vertical"}if(nn==="vertical"){Pe.classList.remove("swiping"),Pe=null;return}e.preventDefault();const o=Pe.closest(".swipe-wrap"),c=o==null?void 0:o.dataset.list,l=s>0&&c==="inv",f=l?s:s>=0?0:s;if(Pe.style.transform=`translateX(${f}px)`,f<0){const y=o==null?void 0:o.querySelector(".swipe-del");if(y){const E=Math.min(100,Math.abs(f)/sn*100);y.style.clipPath=`inset(0 0 0 ${100-E}%)`}const w=o==null?void 0:o.querySelector(".swipe-add");w&&(w.style.clipPath="inset(0 100% 0 0)")}else if(f>0&&l){const y=o==null?void 0:o.querySelector(".swipe-add");if(y){const E=Math.min(100,f/sn*100);y.style.clipPath=`inset(0 ${100-E}% 0 0)`}const w=o==null?void 0:o.querySelector(".swipe-del");w&&(w.style.clipPath="inset(0 0 0 100%)")}const m=Math.abs(f)/wt;m>=rn&&!gt?(gt=!0,navigator.vibrate&&navigator.vibrate(10),o==null||o.classList.add("swipe-threshold")):m<rn&&gt&&(gt=!1,o==null||o.classList.remove("swipe-threshold"))},{passive:!1}),document.addEventListener("touchend",()=>{if(!Pe)return;const e=Pe,t=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/wt,r=t==null?void 0:t.dataset.list,o=i>0&&r==="inv";if(o&&s>=rn)Gh(t,e);else if(o&&s>=$r){e.style.transition=`transform 0.4s ${Vn}`,e.style.transform=`translateX(${sn}px)`;const c=t==null?void 0:t.querySelector(".swipe-add");c&&(c.style.transition=`clip-path 0.3s ${Le}`,c.style.clipPath="inset(0 0 0 0)"),t==null||t.classList.add("open"),K&&K!==t&&Mt(K),K=t,setTimeout(()=>{e.style.transition=""},400)}else if(!o&&s>=rn)Wh(t,e);else if(!o&&i<0&&s>=$r){e.style.transition=`transform 0.4s ${Vn}`,e.style.transform=`translateX(-${sn}px)`;const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${Le}`,c.style.clipPath="inset(0 0 0 0%)"),t==null||t.classList.add("open"),t==null||t.classList.add("swipe-threshold"),K&&K!==t&&Mt(K),K=t,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${Vn}`,e.style.transform="translateX(0)";const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${Le}`,c.style.clipPath="inset(0 0 0 100%)");const l=t==null?void 0:t.querySelector(".swipe-add");l&&(l.style.transition=`clip-path 0.3s ${Le}`,l.style.clipPath="inset(0 100% 0 0)"),t==null||t.classList.remove("open","swipe-threshold"),K===t&&(K=null),setTimeout(()=>{e.style.transition="",c&&(c.style.transition=""),l&&(l.style.transition="")},350)}Pe=null}),document.addEventListener("mousedown",e=>{if(e.button!==0)return;const t=e.target.closest(".swipe-inner");if(!t)return;const i=t.closest(".swipe-wrap");i&&(d.selectMode||(K&&K!==i&&(Mt(K),K=null),ai=!0,Pe=t,xr=e.clientX,Pr=e.clientY,nn=null,gt=!1,wt=i.offsetWidth,t.classList.add("swiping")))}),document.addEventListener("mousemove",e=>{if(!ai||!Pe)return;const t=e.clientX-xr,i=e.clientY-Pr;if(!nn){if(Math.abs(t)<Lr&&Math.abs(i)<Lr)return;nn=Math.abs(t)>Math.abs(i)?"horizontal":"vertical"}if(nn==="vertical"){Pe.classList.remove("swiping"),Pe=null,ai=!1;return}e.preventDefault();const s=Pe.closest(".swipe-wrap"),r=s==null?void 0:s.dataset.list,o=t>0&&r==="inv",c=o?t:t>=0?0:t;if(Pe.style.transform=`translateX(${c}px)`,c<0){const f=s==null?void 0:s.querySelector(".swipe-del");if(f){const y=Math.min(100,Math.abs(c)/sn*100);f.style.clipPath=`inset(0 0 0 ${100-y}%)`}const m=s==null?void 0:s.querySelector(".swipe-add");m&&(m.style.clipPath="inset(0 100% 0 0)")}else if(c>0&&o){const f=s==null?void 0:s.querySelector(".swipe-add");if(f){const y=Math.min(100,c/sn*100);f.style.clipPath=`inset(0 ${100-y}% 0 0)`}const m=s==null?void 0:s.querySelector(".swipe-del");m&&(m.style.clipPath="inset(0 0 0 100%)")}const l=Math.abs(c)/wt;l>=rn&&!gt?(gt=!0,navigator.vibrate&&navigator.vibrate(10),s==null||s.classList.add("swipe-threshold")):l<rn&&gt&&(gt=!1,s==null||s.classList.remove("swipe-threshold"))});function n(){if(!ai||!Pe){ai=!1;return}ai=!1;const e=Pe,t=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/wt,r=t==null?void 0:t.dataset.list,o=i>0&&r==="inv";if(o&&s>=rn)Gh(t,e);else if(o&&s>=$r){e.style.transition=`transform 0.4s ${Vn}`,e.style.transform=`translateX(${sn}px)`;const c=t==null?void 0:t.querySelector(".swipe-add");c&&(c.style.transition=`clip-path 0.3s ${Le}`,c.style.clipPath="inset(0 0 0 0)"),t==null||t.classList.add("open"),K&&K!==t&&Mt(K),K=t,setTimeout(()=>{e.style.transition=""},400)}else if(!o&&s>=rn)Wh(t,e);else if(!o&&i<0&&s>=$r){e.style.transition=`transform 0.4s ${Vn}`,e.style.transform=`translateX(-${sn}px)`;const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${Le}`,c.style.clipPath="inset(0 0 0 0%)"),t==null||t.classList.add("open"),t==null||t.classList.add("swipe-threshold"),K&&K!==t&&Mt(K),K=t,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${Vn}`,e.style.transform="translateX(0)";const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${Le}`,c.style.clipPath="inset(0 0 0 100%)");const l=t==null?void 0:t.querySelector(".swipe-add");l&&(l.style.transition=`clip-path 0.3s ${Le}`,l.style.clipPath="inset(0 100% 0 0)"),t==null||t.classList.remove("open","swipe-threshold"),K===t&&(K=null),setTimeout(()=>{e.style.transition="",c&&(c.style.transition=""),l&&(l.style.transition="")},350)}Pe=null}document.addEventListener("mouseup",n),document.addEventListener("mouseleave",n),document.addEventListener("mousedown",e=>{if(!K||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const t=e.target.closest(".swipe-inner");t&&t.closest(".swipe-wrap")===K||(Mt(K),K=null)}),document.addEventListener("click",e=>{document.querySelectorAll(".sh-note-edit.open").forEach(t=>{if(t.contains(e.target))return;const i=t.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-note-btn");if(s&&s.contains(e.target))return;const r=t.querySelector("textarea");r&&r.blur(),t.classList.remove("open")}),document.querySelectorAll(".sh-qty-edit.open").forEach(t=>{if(t.contains(e.target))return;const i=t.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-qty");if(s&&s.contains(e.target))return;const r=t.querySelector("input");r&&r.blur(),t.classList.remove("open")})},!0),document.addEventListener("touchstart",e=>{if(!K||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const t=e.target.closest(".swipe-inner");t&&t.closest(".swipe-wrap")===K||(Mt(K),K=null)},{passive:!0})}function Mt(n){const e=n==null?void 0:n.querySelector(".swipe-inner"),t=n==null?void 0:n.querySelector(".swipe-del"),i=n==null?void 0:n.querySelector(".swipe-add");e&&(e.style.transition=`transform 0.35s ${Vn}`,e.style.transform="translateX(0)",setTimeout(()=>{e.style.transition=""},350)),t&&(t.style.transition=`clip-path 0.3s ${Le}`,t.style.clipPath="inset(0 0 0 100%)",setTimeout(()=>{t.style.transition=""},300)),i&&(i.style.transition=`clip-path 0.3s ${Le}`,i.style.clipPath="inset(0 100% 0 0)",setTimeout(()=>{i.style.transition=""},300)),n==null||n.classList.remove("open","swipe-threshold")}async function Wh(n,e){const t=n==null?void 0:n.dataset.id,i=n==null?void 0:n.dataset.list;if(!t||!i)return;e.style.transition=`transform 0.3s ${Le}`,e.style.transform=`translateX(-${wt+100}px)`;const s=n==null?void 0:n.querySelector(".swipe-del");s&&(s.style.transition=`transform 0.3s ${Le}`,s.style.transform=`translateX(-${wt+100}px)`),await new Promise(r=>setTimeout(r,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",K===n&&(K=null),await new Promise(r=>setTimeout(r,250)),i==="shop"?await Ui(t):(await Ws(t),R("Item removed"))}async function Gh(n,e){const t=n==null?void 0:n.dataset.id;if(!t)return;e.style.transition=`transform 0.3s ${Le}`,e.style.transform=`translateX(${wt+100}px)`;const i=n==null?void 0:n.querySelector(".swipe-add");i&&(i.style.transition=`transform 0.3s ${Le}`,i.style.transform=`translateX(${wt+100}px)`),await new Promise(s=>setTimeout(s,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",K===n&&(K=null),await new Promise(s=>setTimeout(s,250)),await zg(t)}async function hR(n,e){if(e!=="inv")return;const t=h("sw-"+n);if(!t)return;const i=t.querySelector(".swipe-inner"),s=t.offsetWidth;i&&(i.style.transition=`transform 0.3s ${Le}`,i.style.transform=`translateX(${s+100}px)`);const r=t.querySelector(".swipe-add");r&&(r.style.transition=`transform 0.3s ${Le}`,r.style.transform=`translateX(${s+100}px)`),await new Promise(o=>setTimeout(o,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",K===t&&(K=null),await new Promise(o=>setTimeout(o,250)),await zg(n)}async function zg(n){const e=d.inv.find(i=>i.id===n);if(!e)return;if(d.shop.find(i=>i.name.toLowerCase()===e.name.toLowerCase()&&!i.checked)){R(`${e.name} is already on your list`);return}await ye({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,brand:e.brand||"",image:e.image||null,src:"supplies"}),R(`${e.name} added to shopping list 🛒`)}async function fR(n,e){const t=h("sw-"+n);if(!t)return;const i=t.querySelector(".swipe-inner"),s=t.offsetWidth;i&&(i.style.transition=`transform 0.3s ${Le}`,i.style.transform=`translateX(-${s+100}px)`);const r=t.querySelector(".swipe-del");r&&(r.style.transition=`transform 0.3s ${Le}`,r.style.transform=`translateX(-${s+100}px)`),await new Promise(o=>setTimeout(o,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",K===t&&(K=null),await new Promise(o=>setTimeout(o,250)),e==="shop"?await Ui(n):(await Ws(n),R("Item removed"))}function pR(n,e){const t=h("sw-"+n);if(t){const i=t.querySelector(".swipe-inner"),s=parseFloat(((i==null?void 0:i.style.transform)||"").replace("translateX(",""))||0;if(Math.abs(s)>10){Mt(t),K=null;return}}if(d.selectMode){d.selectedIds.has(n)?(d.selectedIds.delete(n),t==null||t.classList.remove("selected")):(d.selectedIds.add(n),t==null||t.classList.add("selected")),Ko();return}e==="shop"?window.openItemDetail(n):window.openInvItemDetail(n)}function mR(){if(d.selectMode==="shop"){Di();return}d.selectMode&&Di(),d.selectMode="shop",d.selectedIds.clear(),document.querySelectorAll("#shlist .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=h("sh-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),Ko()}function gR(){if(d.selectMode==="inv"){Di();return}d.selectMode&&Di(),d.selectMode="inv",d.selectedIds.clear(),document.querySelectorAll("#ibody .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=h("inv-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),Ko()}function Di(){d.selectMode=null,d.selectedIds.clear(),document.querySelectorAll(".swipe-wrap.selecting").forEach(t=>t.classList.remove("selecting","selected"));const n=h("sh-selbtn");n&&(n.classList.remove("active"),n.textContent="Select");const e=h("inv-selbtn");e&&(e.classList.remove("active"),e.textContent="Select"),Ko()}async function yR(){if(!d.selectedIds.size)return;const n=[...d.selectedIds],e=d.selectMode;Di(),e==="shop"?await Promise.all(n.map(t=>Ui(t))):await Promise.all(n.map(t=>Ws(t))),R(`Removed ${n.length} item${n.length!==1?"s":""} 🗑`)}function Ko(){const n=h("multi-bar");if(!n)return;const e=d.selectedIds.size,t=h("multi-count");t&&(t.textContent=e),d.selectMode?n.classList.add("visible"):n.classList.remove("visible")}const vR=["Chicken","Beef","Fish","Vegetarian","Vegan","Quick","Kids","Healthy","Batch Cook","Date Night"];function qg(n){return"chip-"+n.split(" ").join("-")}function Wg(){const n=h("recChips");n&&(n.innerHTML=vR.map(e=>`<button onclick="toggleChip('${e}')" id="${qg(e)}" style="padding:5px 10px;border-radius:20px;border:1px solid var(--bd);background:var(--s2);color:var(--tx2);font-size:.78rem;cursor:pointer;transition:all .15s">${e}</button>`).join(""))}function wR(n){const e=h(qg(n));window._activeChips.has(n)?(window._activeChips.delete(n),e&&(e.style.background="var(--s2)",e.style.color="var(--tx2)",e.style.borderColor="var(--bd)")):(window._activeChips.add(n),e&&(e.style.background="var(--ac)",e.style.color="#000",e.style.borderColor="var(--ac)")),Gg()}function Gg(){const n=h("recPicker"),e=h("recFilter")?h("recFilter").value.trim().toLowerCase():"",t=[...window._activeChips].map(r=>r.toLowerCase()),s=[...d.recs].sort((r,o)=>(o.cookCount||0)-(r.cookCount||0)).filter(r=>{const o=(r.name+" "+(r.description||"")+" "+(r.tags||[]).join(" ")).toLowerCase(),c=e?e.split(/\s+/).every(f=>o.includes(f)):!0,l=t.every(f=>o.includes(f));return c&&l});n.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(r=>`<option value="${r.id}">${r.name}</option>`).join(""),window._pickedRec=null,h("mealMinp").value=""}function _R(n,e){d.md=n,h("mealMttl").textContent="Meal for "+e,h("mealMinp").value=d.mp[n]||"",window._pickedRec=null,window._activeChips=new Set;const t=h("recFilter");t&&(t.value=""),Wg();const i=h("recPicker");if(d.recs&&d.recs.length){const s=[...d.recs].sort((c,l)=>(l.cookCount||0)-(c.cookCount||0));i.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(c=>`<option value="${c.id}">${c.name}</option>`).join("");const r=d.mp[n]||"",o=s.find(c=>c.name===r);i.value=o?o.id:"",h("recPickerWrap").style.display="block"}else h("recPickerWrap").style.display="none";h("mealM").classList.add("active"),setTimeout(()=>h("mealMinp").focus(),100)}function bR(n){if(!n){window._pickedRec=null,h("mealMinp").value="";return}const e=d.recs.find(t=>t.id===n);e&&(window._pickedRec=e,h("mealMinp").value=e.name)}function Zl(){h("mealM").classList.remove("active")}function TR(){h("schedM").classList.remove("active")}async function IR(){const n=h("mealMinp").value.trim();if(await Tn(d.md,n||null),window._pickedRec&&window._pickedRec.description){const e=window._pickedRec.description,t=d.inv.map(o=>o.name.toLowerCase()),i=d.shop.map(o=>o.name.toLowerCase()),s=e.split(/[\n,]/).map(o=>o.replace(/^[\d\/\s]*(cup|tbsp|tsp|oz|lb|g|kg|ml|l|clove|slice|piece|bunch|head|can|package|pkg)s?\.?\s*/gi,"").replace(/^[\d]+\s*/,"").trim()).filter(o=>o.length>1&&o.length<60);let r=0;for(const o of s){if(/\b(add|mix|heat|cook|bake|stir|boil|fry|slice|chop|dice|combine|place|pour|season|serve|preheat|bring|remove|let|set|transfer)\b/i.test(o))continue;const c=o.replace(/^[-•*]\s*/,"").trim();if(!c||c.length<2)continue;const l=c.toLowerCase();t.some(f=>f.includes(l)||l.includes(f))||i.some(f=>f===l)||(await ye({id:Date.now().toString()+Math.random().toString(36).slice(2),name:c,qty:1,checked:!1,src:"recipe"}),r++)}r>0&&R(`Added ${r} ingredient${r!==1?"s":""} to shopping list 🛒`)}window._pickedRec=null,Zl(),ii(),Xs(),ji()}async function ER(){await Tn(d.md,null),Zl(),ii(),Xs(),ji()}function kR(n){const e=d.mp[n];e&&(d.cn=e,d.nr=0,h("cookedNm").textContent=e,h("cnotes").value="",xs("cstars",0),h("cookedM").classList.add("active"))}async function SR(){await Yc(d.cn,dn()),await Tn(dn(),null),h("cookedM").classList.remove("active"),ii(),ji(),R("Meal logged!")}async function CR(){var i;const n=h("cnotes").value.trim(),e=(i=h("tog-leftover"))==null?void 0:i.classList.contains("on");await Yc(d.cn,dn());const t=d.recs.find(s=>s.name.toLowerCase()===d.cn.toLowerCase());t?await Je({...t,cookCount:(t.cookCount||0)+1,lastCooked:dn()}):await Je({id:"rec-"+Date.now(),name:d.cn,rating:d.nr,favorited:!1,notes:n,description:"",source:"Meal Plan",tags:[],cookCount:1,savedAt:new Date().toLocaleDateString(),lastCooked:dn()}),e&&await Tn(Py(),d.cn+" (leftovers)"),await Tn(dn(),null),h("cookedM").classList.remove("active"),ii(),ji(),R(e?"Saved! Leftovers planned for tomorrow 🥡":"Saved to recipes! ⭐")}function AR(n){h("schedNm").textContent=n;const e=["S","M","T","W","T","F","S"],t=new Date;t.setHours(0,0,0,0),h("schedWk").innerHTML=Ni().map((i,s)=>{const r=i.toISOString().split("T")[0],o=i.getTime()===t.getTime(),c=d.mp[r];return`<div class="wd${o?" today":""}${c?" hm":""}" onclick="schedSet('${r}','${n}')"><div class="wdn">${e[s]}</div><div class="wdd">${i.getDate()}</div>${c?`<div class="wdm">${c.substring(0,8)}…</div>`:""}</div>`}).join(""),h("schedM").classList.add("active")}async function RR(n,e){await Tn(n,e),h("schedM").classList.remove("active"),ii(),ji(),R("Scheduled! 📅")}function xR(){const n=s=>h(s),e=(s,r)=>{const o=n(s);o&&(o.value=r||"")};e("setName",d.cfg.name),e("setAdults",d.cfg.adults),e("setKids",d.cfg.kids),e("setOther",d.cfg.other),e("setCuisines",d.cfg.cuisines),e("setCookTime",d.cfg.cookTime),e("setZipcode",d.cfg.zipcode);const t=(s,r)=>{const o=n(s);o&&o.classList.toggle("on",!!r)};t("tg-nopork",d.cfg.nopork),t("tg-noshellfish",d.cfg.noshellfish),t("tg-vegetarian",d.cfg.vegetarian),t("tg-glutenfree",d.cfg.glutenfree),t("tg-notif",d.cfg.notif);const i=h("notifTimeRow");i&&(i.style.display=d.cfg.notif?"block":"none"),e("setNotifTime",d.cfg.notifTime||"8"),e("setNotifDays",String(d.cfg.notifDays||3)),e("setUsername",d.username),tu(),Qg(),GR()}async function PR(){d.cfg={...d.cfg,name:h("setName").value.trim(),adults:h("setAdults").value.trim(),kids:h("setKids").value.trim(),nopork:h("tg-nopork").classList.contains("on"),noshellfish:h("tg-noshellfish").classList.contains("on"),vegetarian:h("tg-vegetarian").classList.contains("on"),glutenfree:h("tg-glutenfree").classList.contains("on"),other:h("setOther").value.trim(),cuisines:h("setCuisines").value.trim(),cookTime:h("setCookTime").value,zipcode:h("setZipcode")?h("setZipcode").value.trim():"",notif:h("tg-notif").classList.contains("on"),notifTime:h("setNotifTime")?h("setNotifTime").value:"8",notifDays:parseInt(h("setNotifDays")?h("setNotifDays").value:"3")},await qs(),d.cfg.notif&&Kg(),R("Settings saved!"),Ee("settings"),Sl()}async function $R(){var e,t;const n=((t=(e=h("setZipcode"))==null?void 0:e.value)==null?void 0:t.trim())||"";d.cfg={...d.cfg,zipcode:n},await qs(),R("Saved!")}async function LR(n){if(!n.classList.contains("on")){if(!("Notification"in window)){R("Notifications not supported on this browser");return}if(Notification.permission==="denied"){R("Notifications blocked — enable in browser settings");return}if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){R("Notifications permission denied");return}}n.classList.toggle("on");const t=h("notifTimeRow");t&&(t.style.display=n.classList.contains("on")?"block":"none")}function DR(){if(Notification.permission!=="granted"){R("Enable notifications first");return}const n=d.inv.filter(t=>{const i=xt(t.expiry);return i&&(i.c==="expiring"||i.c==="expired")});if(!n.length){new Notification("Kitchen 🧺",{body:"No items expiring soon — you're all good!"});return}const e=n.slice(0,3).map(t=>t.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${e}${n.length>3?" + "+(n.length-3)+" more":""} need attention`})}function Kg(){if(!d.cfg.notif||Notification.permission!=="granted")return;const n=parseInt(localStorage.getItem("ks-lastnotif")||"0"),e=Date.now();if(e-n<864e5)return;localStorage.setItem("ks-lastnotif",e.toString());const t=d.cfg.notifDays||3,i=d.inv.filter(r=>{if(!xt(r.expiry))return!1;const c=new Date(r.expiry+"T00:00:00"),l=new Date;return l.setHours(0,0,0,0),Math.round((c-l)/864e5)<=t});if(!i.length)return;const s=i.slice(0,3).map(r=>r.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${s}${i.length>3?" + "+(i.length-3)+" more":""} expiring in ${t} days or less`})}function eu(){return ae("ks-hhs")||[d.hid]}async function Qg(){const n=Z();if(n)try{const e=await ne(`households/${d.hid}`);if(!e)return;const t=e.ownerUid===n.uid,i=h("hhInviteCode");if(i&&(i.textContent=e.inviteCode||"—"),e.inviteCode&&t)try{await W(`household_codes/${e.inviteCode}`,{householdId:d.hid})}catch{}const s=h("regenCodeBtn");s&&(s.style.display=t?"":"none");const r=h("hhMembers");r&&e.members&&(r.innerHTML=e.members.map(o=>{const c=o.uid===n.uid,l=o.role==="owner"?"Owner":"Member",f=t&&!c?`<button onclick="event.stopPropagation();removeMemberFromHH('${o.uid}')" style="background:none;border:none;color:var(--rd);cursor:pointer;font-size:.78rem;padding:4px 8px">Remove</button>`:"";return`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px">
          <div>
            <div style="font-size:.86rem;font-weight:500;color:var(--tx)">${o.name}${c?" (you)":""}</div>
            <div style="font-size:.7rem;color:var(--mt);margin-top:2px">${l}</div>
          </div>
          ${f}
        </div>`}).join(""))}catch(e){console.error("renderHouseholdInfo error:",e)}}async function NR(){var e;const n=(e=h("hhInviteCode"))==null?void 0:e.textContent;if(!(!n||n==="—"))try{await navigator.clipboard.writeText(n),R("Invite code copied!")}catch{R("Couldn't copy — try manually")}}async function MR(){var t;const n=(t=h("hhInviteCode"))==null?void 0:t.textContent;if(!n||n==="—")return;const e=`Join my kitchen on Kitchen app! Use invite code: ${n} at https://pantry-app-zeta-six.vercel.app`;if(navigator.share)try{await navigator.share({text:e})}catch{}else try{await navigator.clipboard.writeText(e),R("Share text copied to clipboard!")}catch{R("Couldn't share — try manually")}}async function OR(){if(confirm("Regenerate invite code? The old code will stop working."))try{const n=await op(d.hid);if(n){const e=h("hhInviteCode");e&&(e.textContent=n),R("New invite code generated!")}}catch(n){console.error("regenInviteCode error:",n),R("Failed to regenerate code")}}async function VR(n){if(confirm("Remove this member from the household?"))try{await ap(d.hid,n),R("Member removed"),Qg()}catch(e){console.error("removeMemberFromHH error:",e),R("Failed to remove member")}}async function UR(){var i,s,r;const n=(r=(s=(i=h("newHHCode"))==null?void 0:i.value)==null?void 0:s.trim())==null?void 0:r.toUpperCase();if(!n)return;const e=Z();if(!e){R("Sign in first");return}const t=h("newHHCode");t.disabled=!0;try{const o=await Jc(n,e);if(!o){R("Invalid invite code. Check and try again."),t.disabled=!1;return}const c=eu();c.includes(o)||c.push(o),Me("ks-hhs",c),h("newHHCode").value="",tu(),R("Household joined!")}catch(o){console.error("addHousehold error:",o),R("Failed to join household")}t.disabled=!1}function FR(n){n!==d.hid&&(localStorage.setItem("ks-h",n),location.reload())}async function BR(n){if(n===d.hid){R("Can't remove active household");return}const e=Z();if(e)try{const i=await ne(`users/${e.uid}`);if(i){const r=(i.householdIds||[]).filter(o=>o!==n);await W(`users/${e.uid}`,{...i,householdIds:r,id:void 0})}const s=await ne(`households/${n}`);if(s){const r=(s.members||[]).filter(c=>c.uid!==e.uid),o=(s.memberUids||[]).filter(c=>c!==e.uid);await W(`households/${n}`,{...s,members:r,memberUids:o,id:void 0})}}catch(i){console.error("removeHousehold error:",i)}const t=eu().filter(i=>i!==n);Me("ks-hhs",t),tu()}async function tu(){const n=eu().filter(i=>i!==d.hid),e=h("hhList");if(!e)return;if(!n.length){e.innerHTML='<div style="font-size:.82rem;color:var(--mt);padding:10px 0">No other households yet.</div>';return}const t=[];for(const i of n){let s=i;try{const r=await ne(`households/${i}`);r!=null&&r.name&&(s=r.name)}catch{}t.push({id:i,name:s})}e.innerHTML=t.map(({id:i,name:s})=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px;cursor:pointer" onclick="switchHousehold('${i}')">
      <div>
        <div style="font-size:.88rem;font-weight:500;color:var(--tx)">${s}</div>
        <div style="font-size:.7rem;color:var(--mt);margin-top:2px">Tap to switch</div>
      </div>
      <button onclick="event.stopPropagation();removeHousehold('${i}')" style="background:none;border:none;color:var(--mt);cursor:pointer;font-size:.82rem;padding:4px 8px">✕</button>
    </div>`).join("")}const _o={gold:{name:"Gold",swatch:"#d4a853",dark:{bg:"#0f0f0d",sf:"#1a1a17",card:"#222220",card2:"#2a2a27",b1:"#333330",b2:"#3d3d39",ac:"#d4a853",ac2:"#e8c27a",acr:"212,168,83",tx:"#ede8d8",tx2:"#b8b09a",mt:"#7a7468"},light:{bg:"#faf8f2",sf:"#ffffff",card:"#f3ede0",card2:"#efe8d8",b1:"#ddd5c0",b2:"#cec4ac",ac:"#a8732a",ac2:"#c48f3e",acr:"168,115,42",tx:"#2a2418",tx2:"#5c5040",mt:"#9a8870"}},forest:{name:"Forest",swatch:"#4a9e5c",dark:{bg:"#0a1410",sf:"#111f17",card:"#182a1e",card2:"#1e3326",b1:"#2a4032",b2:"#355040",ac:"#6db56d",ac2:"#8fd08f",acr:"109,181,109",tx:"#e4f0e4",tx2:"#9dbf9d",mt:"#5a7a5a"},light:{bg:"#f2f9f2",sf:"#ffffff",card:"#e8f5e8",card2:"#dff0df",b1:"#c0ddc0",b2:"#a8cca8",ac:"#2e7d32",ac2:"#43a047",acr:"46,125,50",tx:"#0d2010",tx2:"#2e4f2e",mt:"#5a7a5a"}},ocean:{name:"Ocean",swatch:"#38bdf8",dark:{bg:"#060e1a",sf:"#0d1829",card:"#112035",card2:"#162840",b1:"#1e3554",b2:"#264468",ac:"#38bdf8",ac2:"#7dd3fc",acr:"56,189,248",tx:"#e0f2fe",tx2:"#7ab8d4",mt:"#486880"},light:{bg:"#f0f8ff",sf:"#ffffff",card:"#e0f2fe",card2:"#d4ecf9",b1:"#b0d8f0",b2:"#90c4e4",ac:"#0369a1",ac2:"#0284c7",acr:"3,105,161",tx:"#082040",tx2:"#1e4060",mt:"#4a7090"}},bordeaux:{name:"Bordeaux",swatch:"#e8829a",dark:{bg:"#120810",sf:"#1c0e18",card:"#261420",card2:"#301828",b1:"#4a2238",b2:"#5c2a46",ac:"#e8829a",ac2:"#f4aabb",acr:"232,130,154",tx:"#fce8ee",tx2:"#d4909e",mt:"#8a5060"},light:{bg:"#fff5f7",sf:"#ffffff",card:"#ffe8ed",card2:"#ffd8e0",b1:"#f4b8c4",b2:"#eca0b0",ac:"#be3455",ac2:"#d94070",acr:"190,52,85",tx:"#2a080e",tx2:"#6a2030",mt:"#9a5060"}},sand:{name:"Sand",swatch:"#e07a5f",dark:{bg:"#170e08",sf:"#221508",card:"#2e1c0e",card2:"#382414",b1:"#4a3020",b2:"#5c3c28",ac:"#e07a5f",ac2:"#eca080",acr:"224,122,95",tx:"#fdf0e8",tx2:"#c8a090",mt:"#887060"},light:{bg:"#fdf6ec",sf:"#fffbf5",card:"#f5e8d8",card2:"#eedcc8",b1:"#ddc8ac",b2:"#ccb494",ac:"#c1440e",ac2:"#d4602a",acr:"193,68,14",tx:"#2a1808",tx2:"#5c3820",mt:"#9a7060"}},midnight:{name:"Midnight",swatch:"#818cf8",dark:{bg:"#050814",sf:"#0a0d1f",card:"#0f1228",card2:"#141830",b1:"#1e2448",b2:"#272e58",ac:"#818cf8",ac2:"#a5b0ff",acr:"129,140,248",tx:"#e8eaff",tx2:"#9099cc",mt:"#505880"},light:{bg:"#f0f1ff",sf:"#ffffff",card:"#e4e6ff",card2:"#d8dbff",b1:"#b8bdff",b2:"#a0a6f4",ac:"#4f46e5",ac2:"#6366f1",acr:"79,70,229",tx:"#0a0820",tx2:"#202060",mt:"#5050a0"}},lavender:{name:"Lavender",swatch:"#c084fc",dark:{bg:"#0e0814",sf:"#160e20",card:"#1e1430",card2:"#261a3c",b1:"#382454",b2:"#442c66",ac:"#c084fc",ac2:"#d8a8ff",acr:"192,132,252",tx:"#f5ecff",tx2:"#c0a0e0",mt:"#7a5898"},light:{bg:"#faf5ff",sf:"#ffffff",card:"#f3e8ff",card2:"#ecdcff",b1:"#d8b8f8",b2:"#c8a0f0",ac:"#9333ea",ac2:"#a855f7",acr:"147,51,234",tx:"#1a0830",tx2:"#481080",mt:"#805098"}}};let Vs=ae("ks-theme")||"gold",Us=ae("ks-mode")||"auto";function bo(n,e){Vs=n,Us=e,Me("ks-theme",n),Me("ks-mode",e);const t=_o[n]||_o.gold,s=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?t.dark:t.light,r=document.documentElement.style;r.setProperty("--bg",s.bg),r.setProperty("--sf",s.sf),r.setProperty("--card",s.card),r.setProperty("--card2",s.card2),r.setProperty("--b1",s.b1),r.setProperty("--b2",s.b2),r.setProperty("--ac",s.ac),r.setProperty("--ac2",s.ac2),r.setProperty("--acd","rgba("+s.acr+",.12)"),r.setProperty("--tx",s.tx),r.setProperty("--tx2",s.tx2),r.setProperty("--mt",s.mt),r.setProperty("--gn","#6db56d"),r.setProperty("--gnd","rgba(109,181,109,.12)"),r.setProperty("--rd","#d96b6b"),r.setProperty("--rdd","rgba(217,107,107,.12)"),r.setProperty("--am","#c8960a"),r.setProperty("--amd","rgba(200,150,10,.12)"),Jg(e),Yg(n)}function HR(n){bo(Vs,n)}function Jg(n){["auto","light","dark"].forEach(e=>{const t=h("mode-"+e);t&&(t.style.background=e===n?"var(--ac)":"",t.style.color=e===n?"var(--bg)":"",t.style.borderColor=e===n?"var(--ac)":"")})}function Yg(n){const e=h("themePicker");e&&(e.innerHTML="",Object.keys(_o).forEach(t=>{const i=_o[t],s=t===n,r=document.createElement("div");r.title=i.name,r.style.cssText="width:36px;height:36px;border-radius:50%;background:"+i.swatch+";cursor:pointer;border:3px solid "+(s?"var(--tx)":"transparent")+";box-shadow:"+(s?"0 0 0 2px var(--ac)":"none")+";transition:all .2s;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.85rem",r.textContent=s?"✓":"",r.onclick=()=>bo(t,Us),r.onmouseover=function(){this.style.transform="scale(1.15)"},r.onmouseout=function(){this.style.transform="scale(1)"},e.appendChild(r)}))}function jR(){bo(Vs,Us),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{Us==="auto"&&bo(Vs,"auto")})}function zR(){Yg(Vs),Jg(Us)}async function qR(){const n=h("enrichBtn"),e=h("enrichProgress"),t=h("enrichStatus"),i=h("enrichBar");n&&(n.disabled=!0),e&&(e.style.display="block");const s=d.shop.filter(f=>Kh(f)),r=d.inv.filter(f=>Kh(f)),o=[...s.map(f=>({item:f,list:"shop"})),...r.map(f=>({item:f,list:"inv"}))];if(!o.length){t&&(t.textContent="All items already enriched!"),i&&(i.style.width="100%"),n&&(n.disabled=!1),R("Nothing to enrich — all items already have data.");return}let c=0,l=0;for(let f=0;f<o.length;f++){const{item:m,list:y}=o[f],w=Math.round((f+1)/o.length*100);t&&(t.textContent=`Processing "${m.name}" (${f+1}/${o.length})…`),i&&(i.style.width=w+"%");try{const P=(await(await fetch(`/api/text-search?q=${encodeURIComponent(m.name)}`)).json()).results||[];if(P.length){const $=P[0],U={...m,image:$.image||m.image||null,brand:$.brand||m.brand||"",category:$.category||m.category||"",source:$.source||m.source||"search"};y==="shop"?await ye(U):await re(U),c++}else l++}catch(E){console.warn(`Enrich failed for "${m.name}":`,E),l++}f<o.length-1&&await Xg(300)}t&&(t.textContent=`Done! ${c} enriched, ${l} skipped.`),i&&(i.style.width="100%"),n&&(n.disabled=!1),R(`Enrichment complete: ${c} updated, ${l} unchanged.`)}function Kh(n){return!n.name||n.name.length<2||n.imageDismissed?!1:!n.image&&!n.brand}function Xg(n){return new Promise(e=>setTimeout(e,n))}async function WR(){if(ae("ks-bulk-published")){R("Already published all recipes");return}if(!confirm(`Publish all ${d.recs.length} recipes to the community? This creates independent copies visible to everyone.`))return;const n=Z(),e=(n==null?void 0:n.displayName)||localStorage.getItem("ks-who")||"Anonymous",t=d.recs.length;let i=0;const s=h("bulkPubProgress");s&&(s.style.display="block",s.textContent=`Publishing 0/${t}…`);const r=h("bulkPubBtn");r&&(r.disabled=!0);let o=0;for(const c of d.recs)try{if(await Xc(c)){o++,s&&(s.textContent=`Published ${i}/${t} (${o} skipped)…`);continue}await Po(c,e),i++,s&&(s.textContent=`Published ${i}/${t}…`)}catch(l){console.error("Failed to publish:",c.name,l)}Me("ks-bulk-published",!0),R(`Published ${i} of ${t} recipes to community!`),r&&(r.disabled=!0,r.textContent="All recipes published ✓"),s&&(s.textContent=`Done — ${i} recipes published.`)}function GR(){const n=h("bulkPubBtn"),e=h("bulkPubProgress");n&&(ae("ks-bulk-published")?(n.style.display="none",e&&(e.style.display="none")):n.style.display="block")}async function KR(){var l,f,m,y,w;const n=Z();if(!n){R("Sign in first");return}const e=[...d.recs];let t=[];try{t=(await oe("public_recipes")).filter(A=>A.authorUid===n.uid)}catch(E){console.error("Failed to load public recipes:",E)}const i=[...e,...t],s=i.length;if(!s){R("No recipes to process");return}if(!confirm(`Regenerate summaries for ${s} recipes using Claude AI? This will overwrite existing summaries.`))return;const r=h("regenSumProgress"),o=h("regenSumBtn");r&&(r.style.display="block",r.textContent=`Regenerating 0 of ${s}…`),o&&(o.disabled=!0);let c=0;for(let E=0;E<i.length;E++){const A=i[E],P=A.title||A.name||"Untitled",$=((l=A.ingredientsRaw)==null?void 0:l.join(", "))||A.ingredients||A.description||"",U=((f=A.stepsRaw)==null?void 0:f.join(". "))||A.steps||"";try{const D=((w=(y=(m=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:200,messages:[{role:"user",content:`Write a 2-sentence summary for this recipe. First sentence: what the dish is. Second sentence: what makes it special or notable. Max 200 characters total. Be concise.

Title: ${P}
Ingredients: ${$.substring(0,500)}
Instructions: ${U.substring(0,500)}`}]})})).json()).content)==null?void 0:m[0])==null?void 0:y.text)==null?void 0:w.trim())||"";if(D){if(t.some(j=>j.id===A.id))await W(`public_recipes/${A.id}`,{...A,summary:D,id:void 0});else{const j=`households/${d.hid}/recipes/${A.id}`;await W(j,{...A,summary:D,id:void 0});const b=d.recs.find(v=>v.id===A.id);b&&(b.summary=D)}c++}}catch(N){console.error("Summary regen failed for:",P,N)}r&&(r.textContent=`Regenerating ${E+1} of ${s}…`),await Xg(300)}r&&(r.textContent=`Done — ${c} summaries updated.`),o&&(o.disabled=!1),R(`${c} summaries regenerated!`)}let un=0;async function QR(){const n=Z();if(n)try{const e=await ne(`users/${n.uid}`);if(e!=null&&e.onboardingDone)return;JR()}catch{}}function JR(){const n=h("ov-onboarding");n&&(un=0,n.classList.add("active"),Zg())}function Zg(){const n=h("onboarding-body");if(!n)return;const t=`<div style="display:flex;gap:6px;justify-content:center;margin-bottom:24px">${Array.from({length:4},(i,s)=>`<div style="width:8px;height:8px;border-radius:50%;background:${s===un?"var(--ac)":"var(--b2)"};transition:background .2s"></div>`).join("")}</div>`;un===0?n.innerHTML=`${t}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:4rem;margin-bottom:16px">🧺</div>
        <div style="font-family:'Fraunces',serif;font-size:2rem;font-weight:300;color:var(--ac);margin-bottom:12px">Welcome to Kitchen!</div>
        <p style="font-size:.92rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 28px">Your smart kitchen assistant that tracks inventory, plans meals, finds deals, and suggests recipes — all powered by AI.</p>
        <button class="btn bp bf" onclick="onboardNext()">Let's get started →</button>
      </div>`:un===1?n.innerHTML=`${t}
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
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:16px">Continue →</button>`:un===2?n.innerHTML=`${t}
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
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:20px">Almost done →</button>`:un===3&&(n.innerHTML=`${t}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:3rem;margin-bottom:16px">🎉</div>
        <div style="font-family:'Fraunces',serif;font-size:1.6rem;font-weight:300;color:var(--ac);margin-bottom:12px">You're all set!</div>
        <p style="font-size:.88rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 24px">Start by adding your first item to the pantry, or ask Claude for dinner ideas.</p>
        <div style="display:flex;flex-direction:column;gap:10px">
          <button class="btn bp bf" onclick="finishOnboarding();showOv('scan')">📷 Scan your first item</button>
          <button class="btn bs bf" onclick="finishOnboarding();showScreen('chat')">✨ Ask Claude for ideas</button>
          <button class="btn bs bf" onclick="finishOnboarding()">🏠 Go to Home</button>
        </div>
      </div>`)}async function YR(){var n,e,t,i,s,r,o,c,l,f,m,y,w;if(un===1){const E=(e=(n=h("ob-name"))==null?void 0:n.value)==null?void 0:e.trim(),A=(i=(t=h("ob-adults"))==null?void 0:t.value)==null?void 0:i.trim(),P=(r=(s=h("ob-kids"))==null?void 0:s.value)==null?void 0:r.trim(),$=(c=(o=h("ob-cuisines"))==null?void 0:o.value)==null?void 0:c.trim(),U=(l=h("ob-cooktime"))==null?void 0:l.value;E&&(d.cfg.name=E),A&&(d.cfg.adults=A),P&&(d.cfg.kids=P),$&&(d.cfg.cuisines=$),U&&(d.cfg.cookTime=U),d.cfg.nopork=((f=h("ob-nopork"))==null?void 0:f.checked)||!1,d.cfg.noshellfish=((m=h("ob-noshellfish"))==null?void 0:m.checked)||!1,d.cfg.vegetarian=((y=h("ob-vegetarian"))==null?void 0:y.checked)||!1,d.cfg.glutenfree=((w=h("ob-glutenfree"))==null?void 0:w.checked)||!1,await qs()}un++,Zg()}async function ey(){const n=h("ov-onboarding");n&&n.classList.remove("active");const e=Z();if(e)try{const t=await ne(`users/${e.uid}`);t&&await W(`users/${e.uid}`,{...t,onboardingDone:!0,id:void 0})}catch{}}async function XR(){await ey(),R("You can always adjust settings later ⚙️")}window.getIdToken=ip;H.renderAll=Cl;H.renderSum=Xs;H.renderRecs=nt;H.renderShop=zi;ZI(er);window.showScreen=function(n){var e,t;document.querySelectorAll(".ov.active").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".screen").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".ni").forEach(i=>i.classList.remove("active")),(e=h("screen-"+n))==null||e.classList.add("active"),(t=h("nav-"+n))==null||t.classList.add("active"),n==="home"&&Al(),n==="inventory"&&er(),n==="recipes"&&(d.rt==="community"?Kl():nt()),n==="shopping"&&zi(),n==="insights"&&HA()};const ZR=at;window.showOv=function(n){ZR(n),n==="settings"&&setTimeout(zR,80)};window.hideOv=Ee;window.initHome=Sl;window.addLowToShop=aE;window.toggleHomeSection=eE;window.openRecipeMatch=uE;window.showMoreMatches=dE;window.toggleExp=function(){const n=h("exppanel");n.style.display=n.style.display==="none"?"block":"none"};window.openAdj=ZE;window.updL=sk;window.adjQ=rk;window.adjQD=ok;window.adjE=ak;window.adjNote=ck;window.setIT=Sk;window.addManual=Ck;window.valMA=Ak;window.chgMQ=Rk;window.selML=xk;window.remItem=ik;window.importDoc=Pk;window.adjUnit=lk;window.adjLowThresh=uk;window.adjLowThreshD=dk;window.adjDoNotRestock=hk;window.changeInvUnit=fk;window.changeInvThreshold=pk;window.changeInvThresholdDirect=mk;window.toggleDoNotRestock=yk;window.changeInvLocation=vk;window.changeInvQty=wk;window.changeInvQtyDirect=_k;window.changeInvFrac=bk;window.changeInvThreshFrac=gk;window.changeInvExpiry=Tk;window.clearInvExpiry=Ik;window.setInvExpiry=Ek;window.changeInvNote=kk;window.openInvAddSheet=Dk;window.closeInvAddSheet=nr;window.invAddScan=Nk;window.invAddVoice=Mk;window.setInvAddLoc=Ok;window.toggleInvAddNote=Vk;window.qaddInv=Uk;window.onInvInput=Fk;window.pickInvInlineResult=qk;window.toggleInvVoice=tg;window.openInvItemDetail=tr;window.closeInvItemDetail=eg;window.deleteInvItemImage=ek;window.triggerInvPhotoUpload=tk;window.handleInvPhotoSelected=nk;window.addInvToShopping=Gk;window.qadd=gE;window.togShop=NE;window.toggleShNote=ME;window.saveShNote=OE;window.openShQty=VE;window.adjShQty=UE;window.saveShQty=Qm;window.togAisle=FE;window.setSHT=BE;window.shareList=HE;window.openAddToKitchen=jE;window.setAtkLoc=zE;window.confirmAddToKitchen=qE;window.buildList=WE;window.toggleVoice=Hm;window.toggleAddNote=yE;window.openShopAddSheet=vE;window.closeShopAddSheet=Zs;window.shopAddScan=wE;window.shopAddVoice=_E;window.closeEnrichSheet=Wm;window.pickEnrichResult=DE;window.onShopInput=bE;window.pickInlineResult=qm;window.openItemDetail=Gm;window.closeItemDetail=SE;window.changeShopUnit=CE;window.changeShopQty=AE;window.changeShopQtyDirect=RE;window.changeShopFrac=xE;window.deleteItemImage=PE;window.triggerProductPhotoUpload=$E;window.handleProductPhotoSelected=LE;window.bpTog=GE;window.bpSelAll=KE;window.bpUpdBtn=function(){};window.bpConfirm=QE;window._bpItems=[];window.searchDeals=JE;window.dealsFromList=YE;window.addDealToList=Ym;window.renderDealsZipBanner=Jm;window.clrChk=function(){d.shop.filter(n=>n.checked).forEach(n=>{Km(n.name),Ui(n.id)})};window.setRT=VC;window.togFav=UC;window.valR=FC;window.importFromUrl=BC;window.setImportMode=HC;window.startBulkImport=qC;window.retryBulkImport=JC;window.saveRec=XC;window.openER=xg;window.updR=ZC;window.delER=eA;window.scaleRec=tA;window.whatCanIMake=nA;window.addRecIngToShop=iA;window.setStar=sA;window.togTag=TC;window.recipeTimeChanged=_C;window.markTotalTimeManual=bC;window.selectDifficulty=kg;window.togglePublic=oA;window.loadCommunity=Kl;window.setComCuisine=_A;window.setComSearch=bA;window.setComSort=TA;window.toggleComTag=IA;window.setComTime=EA;window.setComMinRating=kA;window.openComRecipe=wo;window.likeComRecipe=RA;window.saveComToKitchen=xA;window.addComComment=PA;window.shareComRecipe=$A;window.submitComReview=SA;window.unpublishComRecipe=AA;window.rateComRecipe=Mg;window.clearComRating=CA;window.deleteComComment=NA;window.openReportSheet=VA;window.closeReportSheet=Og;window.submitComReport=UA;window.loadMoreComments=DA;window.openNotifications=FA;window.openComRecipeFromNotif=BA;window.openRecipeView=Rg;window.handleRecipeBack=sr;window.triggerCoverUpload=aA;window.handleCoverSelected=cA;window.handleCoverDrop=lA;window.removeCoverPhoto=uA;window.triggerStepPhotoUpload=dA;window.handleStepPhotoSelected=hA;window.removeStepPhoto=fA;window.openPhotoViewer=pA;window.closePhotoViewer=mA;window.photoViewerNav=$g;window.triggerCommentPhotoUpload=yA;window.handleCommentPhotosSelected=vA;window.removeCommentPhoto=wA;window.setRecSearch=IC;window.setRecSort=EC;window.toggleFilterPanel=kC;window.setRecDifficulty=SC;window.setRecCookTime=CC;window.setRecServes=AC;window.toggleRecProtein=RC;window.toggleRecTag=xC;window.toggleRecTagsExpand=PC;window.clearRecFilters=$C;window.toggleComTagsPanel=DC;window.clearComFilters=NC;window.setViewStar=rA;window.editComRecipe=MA;window.saveComRecipeEdit=OA;window.sendChat=Ug;window.sendPill=KA;window.clrChat=QA;window.ar=Fg;window.importChatRecipe=GA;window.stopLiveScanner=Yl;window.resumeScanner=eR;window.openScanForList=tR;window.openScanForInventory=nR;window.addScannedToList=sR;window.toggleScanNote=iR;window.togManual=rR;window.manLookup=oR;window.selRL=Xl;window.valAdd=cR;window.addToInv=lR;window.chgAQ=uR;window.swipeDelItem=fR;window.swipeAddItem=hR;window.swipeRowTap=pR;window.togShopSelect=mR;window.togInvSelect=gR;window.cancelSelect=Di;window.deleteSelected=yR;window.openMealM=_R;window.pickRec=bR;window.closeMealM=Zl;window.saveMeal=IR;window.clrMeal=ER;window.openCooked=kR;window.skipCooked=SR;window.saveCooked=CR;window.scheduleRecipe=AR;window.schedSet=RR;window.closeSchedM=TR;window.initRecChips=Wg;window.toggleChip=wR;window.filterRecs=Gg;window._pickedRec=null;window._activeChips=new Set;window.saveSettings=PR;window.saveZipcode=$R;window.toggleNotif=LR;window.testNotif=DR;window.addHousehold=UR;window.switchHousehold=FR;window.removeHousehold=BR;window.setMode=HR;window.showNotif=R;window.copyInviteCode=NR;window.shareInviteCode=MR;window.regenInviteCode=OR;window.removeMemberFromHH=VR;window.enrichExistingItems=qR;window.bulkPublishAll=WR;window.regenAllSummaries=KR;window.manualRefresh=async function(n){const e=event==null?void 0:event.target;e&&(e.classList.add("spinning"),setTimeout(()=>e.classList.remove("spinning"),600)),de("syncing");try{(n==="shop"||n==="both")&&(d.shop=await oe(`households/${d.hid}/shopping`),zi()),(n==="inv"||n==="both")&&(d.inv=await oe(`households/${d.hid}/inventory`),er(),Cl()),de("synced"),R("Refreshed ✓")}catch(t){console.error("manualRefresh error:",t),de("error"),R("Refresh failed")}};window.refreshHomeData=async function(){const n=event==null?void 0:event.target;n&&(n.classList.add("spinning"),setTimeout(()=>n.classList.remove("spinning"),600)),de("syncing");try{const[e,t,i,s]=await Promise.allSettled([oe(`households/${d.hid}/inventory`),oe(`households/${d.hid}/shopping`),oe(`households/${d.hid}/mealplan`),oe(`households/${d.hid}/settings`)]);e.status==="fulfilled"&&(d.inv=e.value),t.status==="fulfilled"&&(d.shop=t.value),i.status==="fulfilled"&&(d.mp={},i.value.forEach(r=>{r.meal&&(d.mp[r.id]=r.meal)})),Al(),er(),de("synced"),R("Refreshed ✓")}catch(e){console.error("refreshHomeData error:",e),de("error"),R("Refresh failed")}};window.onboardNext=YR;window.finishOnboarding=ey;window.skipOnboarding=XR;window.saveUsername=async function(){var o;const n=h("usernameInput"),e=h("usernameStatus"),t=h("saveUsernameBtn"),i=((n==null?void 0:n.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(i)){e&&(e.textContent="3-20 characters, letters, numbers, and underscores only.",e.style.color="var(--rd)",e.style.display="block");return}if(t&&(t.disabled=!0,t.textContent="Checking…"),!await nl(i)){e&&(e.textContent=`"${i}" is already taken. Try another.`,e.style.color="var(--rd)",e.style.display="block"),t&&(t.disabled=!1,t.textContent="Save");return}const r=Z();r&&(await il(r.uid,i),R("Username set to @"+i)),(o=h("usernameM"))==null||o.classList.remove("active"),t&&(t.disabled=!1,t.textContent="Save")};window.changeUsername=async function(){const n=h("setUsername"),e=((n==null?void 0:n.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(e)){R("3-20 chars, letters/numbers/underscores only");return}if(e===d.username){R("Username unchanged");return}if(!await nl(e)){R(`"${e}" is already taken`);return}const i=Z();i&&(await il(i.uid,e),R("Username changed to @"+e))};window._appStart=async function(n){var t;d.hid=n,h("LS").style.display="none",h("APP").style.display="flex",window.showScreen("home"),de("syncing");const e=Z();if(e)try{const i=await ne(`users/${e.uid}`);if((t=i==null?void 0:i.householdIds)!=null&&t.length){const s=[...i.householdIds];s.includes(n)||s.push(n),Me("ks-hhs",s)}else{const s=ae("ks-hhs")||[n];s.includes(n)||(s.push(n),Me("ks-hhs",s))}}catch{const i=ae("ks-hhs")||[n];i.includes(n)||(i.push(n),Me("ks-hhs",i))}else{const i=ae("ks-hhs")||[n];i.includes(n)||(i.push(n),Me("ks-hhs",i))}await up(),xR(),Sl(),mE(),Wk(),XI(d.hid);try{de("syncing");const i=await Promise.allSettled([oe(`households/${d.hid}/inventory`),oe(`households/${d.hid}/recipes`),oe(`households/${d.hid}/shopping`)]),s=(r,o)=>r.status==="fulfilled"?r.value:o;d.inv=s(i[0],d.inv),d.recs=s(i[1],d.recs),d.shop=s(i[2],d.shop),de("synced"),Cl(),nt(),zi(),Xs()}catch(i){console.error("initial load error",i),de("error")}if(e){const i=await yp(e.uid);d.username=i;const s=h("setUsername");s&&(s.value=i||""),i||setTimeout(()=>{var r;return(r=h("usernameM"))==null?void 0:r.classList.add("active")},600)}setTimeout(Vg,800),setTimeout(QR,500)};jR();dR();d.cfg.notif&&setTimeout(Kg,3e3);zi();function Qo(n){h("auth-loading").style.display="none",h("auth-signin").style.display=n==="signin"?"flex":"none",h("auth-signup").style.display=n==="signup"?"flex":"none",h("auth-join").style.display=n==="join"?"flex":"none",h("authError").style.display="none",h("signupError").style.display="none"}function ut(n,e){const t=h(n);t&&(t.textContent=e,t.style.display="block")}function Jo(n){return{"auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password.","auth/invalid-credential":"Incorrect email or password.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password must be at least 6 characters.","auth/too-many-requests":"Too many attempts. Please try again later.","auth/popup-closed-by-user":"Sign-in popup was closed.","auth/cancelled-popup-request":"Sign-in was cancelled.","auth/account-exists-with-different-credential":"An account already exists with this email using a different sign-in method."}[n.code]||n.message||"Something went wrong. Please try again."}function Ze(n,e){n&&(e?(n._origText=n.textContent,n.textContent="Please wait…",n.disabled=!0):(n.textContent=n._origText||n.textContent,n.disabled=!1))}var Qh;(Qh=h("btnGoogle"))==null||Qh.addEventListener("click",async()=>{const n=h("btnGoogle");Ze(n,!0),h("authError").style.display="none";try{await Ob()}catch(e){ut("authError",Jo(e))}Ze(n,!1)});var Jh;(Jh=h("btnApple"))==null||Jh.addEventListener("click",async()=>{const n=h("btnApple");Ze(n,!0),h("authError").style.display="none";try{await Vb()}catch(e){ut("authError",Jo(e))}Ze(n,!1)});var Yh;(Yh=h("btnEmailSign"))==null||Yh.addEventListener("click",async()=>{var i,s,r;const n=(s=(i=h("authEmail"))==null?void 0:i.value)==null?void 0:s.trim(),e=(r=h("authPass"))==null?void 0:r.value;if(!n||!e){ut("authError","Please enter your email and password.");return}const t=h("btnEmailSign");Ze(t,!0),h("authError").style.display="none";try{await Ub(n,e)}catch(o){ut("authError",Jo(o))}Ze(t,!1)});var Xh;(Xh=h("btnEmailSignup"))==null||Xh.addEventListener("click",async()=>{var s,r,o,c,l;const n=(r=(s=h("signupName"))==null?void 0:s.value)==null?void 0:r.trim(),e=(c=(o=h("signupEmail"))==null?void 0:o.value)==null?void 0:c.trim(),t=(l=h("signupPass"))==null?void 0:l.value;if(!n){ut("signupError","Please enter your name.");return}if(!e||!t){ut("signupError","Please enter your email and password.");return}const i=h("btnEmailSignup");Ze(i,!0),h("signupError").style.display="none";try{await Fb(e,t,n)}catch(f){ut("signupError",Jo(f))}Ze(i,!1)});var Zh;(Zh=h("btnToggleSignup"))==null||Zh.addEventListener("click",()=>Qo("signup"));var ef;(ef=h("btnToggleSignin"))==null||ef.addEventListener("click",()=>Qo("signin"));var tf;(tf=h("authPass"))==null||tf.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=h("btnEmailSign"))==null||e.click())});var nf;(nf=h("signupPass"))==null||nf.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=h("btnEmailSignup"))==null||e.click())});window.doSignOut=async function(){confirm("Sign out of Kitchen?")&&await Bb()};let ja=!1;function To(n){localStorage.setItem("ks-h",n),h("LS").style.display="none",h("APP").style.display="flex",window._appStart(n)}function ex(n){Qo("join"),h("btnCreateKitchen").onclick=async()=>{var e;Ze(h("btnCreateKitchen"),!0);try{const t=((e=d.cfg)==null?void 0:e.name)||"My Kitchen";await Qc(n.uid,t);const i=await co(n);i.householdIds=[n.uid],await W(`users/${n.uid}`,i),localStorage.removeItem("ks-h");const s=ae("ks-hhs");if(s){const r=s.filter(o=>o!==n.uid);r.push(n.uid),localStorage.setItem("ks-hhs",JSON.stringify(r))}To(n.uid)}catch(t){console.error("Create kitchen error:",t),ut("joinError","Something went wrong. Please try again."),Ze(h("btnCreateKitchen"),!1)}},h("btnJoinKitchen").onclick=async()=>{var t,i,s;const e=(s=(i=(t=h("joinCode"))==null?void 0:t.value)==null?void 0:i.trim())==null?void 0:s.toUpperCase();if(!e){ut("joinError","Please enter an invite code.");return}Ze(h("btnJoinKitchen"),!0),h("joinError").style.display="none";try{let r=await ne(`users/${n.uid}`);r||(r=await co(n));const o=await Jc(e,n);if(!o){ut("joinError","Invalid invite code. Check and try again."),Ze(h("btnJoinKitchen"),!1);return}const c=ae("ks-hhs")||[];c.includes(o)||c.push(o),Me("ks-hhs",c),To(o)}catch(r){console.error("Join kitchen error:",r),ut("joinError","Something went wrong. Please try again."),Ze(h("btnJoinKitchen"),!1)}}}Nb(async n=>{var e;if(n){if(localStorage.setItem("ks-who",n.displayName||((e=n.email)==null?void 0:e.split("@")[0])||"You"),!ja){ja=!0;try{const t=await ne(`users/${n.uid}`),i=localStorage.getItem("ks-h"),s=ae("ks-hhs");if(!!t||!!i||s&&s.length>0){h("LS").style.display="none",h("APP").style.display="flex";const o=await cp(n);To(o)}else ex(n)}catch(t){console.error("Failed to resolve household:",t);const i=n.uid;To(i)}}}else Mm(),ja=!1,h("APP").style.display="none",h("LS").style.display="flex",Qo("signin")});
