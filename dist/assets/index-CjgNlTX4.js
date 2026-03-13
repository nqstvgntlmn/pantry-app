(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Dr={name:"The Bora Family",adults:"Bora",kids:"1 toddler (age 3)",nopork:!0,noshellfish:!1,vegetarian:!1,glutenfree:!1,other:"",cuisines:"Bangladeshi, Turkish, Mediterranean, American",cookTime:"40-60 min",zipcode:""},h={hid:null,inv:[],recs:[],shop:[],mp:{},cfg:{...Dr},cookLog:[],wasteLog:[],chat:[],cp:null,selR:"fridge",maL:"fridge",adjId:null,it:"all",rt:"all",md:null,cn:"",nr:0,eid:null,scanDestList:!1,aisleMode:!1,selectMode:null,selectedIds:new Set,username:null,comRecs:[],comTab:"browse",comSearch:"",comCuisine:"all",comSort:"newest",comTags:[],comTime:"any",comMinRating:0,comPage:0,myLikes:new Set};function xe(n){try{return JSON.parse(localStorage.getItem(n))}catch{return null}}function Ze(n,e){localStorage.setItem(n,JSON.stringify(e))}const Yg=()=>{};var Ru={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Xg=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|c&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ah={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,d=l?n[s+2]:0,m=r>>2,g=(r&3)<<4|c>>4;let v=(c&15)<<2|d>>6,S=d&63;l||(S=64,o||(v=64)),i.push(t[m],t[g],t[v],t[S])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ch(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Xg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||c==null||d==null||g==null)throw new Zg;const v=r<<2|c>>4;if(i.push(v),d!==64){const S=c<<4&240|d>>2;if(i.push(S),g!==64){const x=d<<6&192|g;i.push(x)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Zg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ey=function(n){const e=Ch(n);return Ah.encodeByteArray(e,!0)},$r=function(n){return ey(n).replace(/\./g,"")},Rh=function(n){try{return Ah.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ty(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ny=()=>ty().__FIREBASE_DEFAULTS__,iy=()=>{if(typeof process>"u"||typeof Ru>"u")return;const n=Ru.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},sy=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Rh(n[1]);return e&&JSON.parse(e)},eo=()=>{try{return Yg()||ny()||iy()||sy()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ph=n=>{var e,t;return(t=(e=eo())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},xh=n=>{const e=Ph(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Lh=()=>{var n;return(n=eo())==null?void 0:n.config},Dh=n=>{var e;return(e=eo())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function yn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function oc(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function $h(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[$r(JSON.stringify(t)),$r(JSON.stringify(o)),""].join(".")}const os={};function oy(){const n={prod:[],emulator:[]};for(const e of Object.keys(os))os[e]?n.emulator.push(e):n.prod.push(e);return n}function ay(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Pu=!1;function ac(n,e){if(typeof window>"u"||typeof document>"u"||!yn(window.location.host)||os[n]===e||os[n]||Pu)return;os[n]=e;function t(v){return`__firebase__banner__${v}`}const i="__firebase__banner",r=oy().prod.length>0;function o(){const v=document.getElementById(i);v&&v.remove()}function c(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function l(v,S){v.setAttribute("width","24"),v.setAttribute("id",S),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function d(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{Pu=!0,o()},v}function m(v,S){v.setAttribute("id",S),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function g(){const v=ay(i),S=t("text"),x=document.getElementById(S)||document.createElement("span"),L=t("learnmore"),R=document.getElementById(L)||document.createElement("a"),M=t("preprendIcon"),U=document.getElementById(M)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const O=v.element;c(O),m(R,L);const F=d();l(U,M),O.append(U,x,R,F),document.body.appendChild(O)}r?(x.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oe())}function ly(){var e;const n=(e=eo())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function uy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function dy(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function hy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fy(){const n=Oe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function py(){return!ly()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function my(){try{return typeof indexedDB=="object"}catch{return!1}}function gy(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy="FirebaseError";class Et extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=yy,Object.setPrototypeOf(this,Et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ks.prototype.create)}}class ks{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?vy(r,i):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Et(s,c,i)}}function vy(n,e){return n.replace(wy,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const wy=/\{\$([^}]+)}/g;function _y(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Vn(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(xu(r)&&xu(o)){if(!Vn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function xu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Zi(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function es(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function by(n,e){const t=new Ty(n,e);return t.subscribe.bind(t)}class Ty{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Iy(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=ea),s.error===void 0&&(s.error=ea),s.complete===void 0&&(s.complete=ea);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Iy(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ea(){}/**
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
 */function Re(n){return n&&n._delegate?n._delegate:n}class ln{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Rn="[DEFAULT]";/**
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
 */class Ey{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new ry;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ky(e))try{this.getOrInitializeService({instanceIdentifier:Rn})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Rn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rn){return this.instances.has(e)}getOptions(e=Rn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(r);i===c&&o.resolve(s)}return s}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Sy(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Rn){return this.component?this.component.multipleInstances?e:Rn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sy(n){return n===Rn?void 0:n}function ky(n){return n.instantiationMode==="EAGER"}/**
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
 */class Cy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ey(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(X||(X={}));const Ay={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},Ry=X.INFO,Py={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},xy=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Py[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cc{constructor(e){this.name=e,this._logLevel=Ry,this._logHandler=xy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ay[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const Ly=(n,e)=>e.some(t=>n instanceof t);let Lu,Du;function Dy(){return Lu||(Lu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $y(){return Du||(Du=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nh=new WeakMap,Ia=new WeakMap,Mh=new WeakMap,ta=new WeakMap,lc=new WeakMap;function Ny(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(nn(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Nh.set(t,n)}).catch(()=>{}),lc.set(e,n),e}function My(n){if(Ia.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Ia.set(n,e)}let Ea={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ia.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Mh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return nn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Oy(n){Ea=n(Ea)}function Vy(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(na(this),e,...t);return Mh.set(i,e.sort?e.sort():[e]),nn(i)}:$y().includes(n)?function(...e){return n.apply(na(this),e),nn(Nh.get(this))}:function(...e){return nn(n.apply(na(this),e))}}function Uy(n){return typeof n=="function"?Vy(n):(n instanceof IDBTransaction&&My(n),Ly(n,Dy())?new Proxy(n,Ea):n)}function nn(n){if(n instanceof IDBRequest)return Ny(n);if(ta.has(n))return ta.get(n);const e=Uy(n);return e!==n&&(ta.set(n,e),lc.set(e,n)),e}const na=n=>lc.get(n);function Fy(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),c=nn(o);return i&&o.addEventListener("upgradeneeded",l=>{i(nn(o.result),l.oldVersion,l.newVersion,nn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const By=["get","getKey","getAll","getAllKeys","count"],jy=["put","add","delete","clear"],ia=new Map;function $u(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ia.get(e))return ia.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=jy.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||By.includes(t)))return;const r=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let d=l.store;return i&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&l.done]))[0]};return ia.set(e,r),r}Oy(n=>({...n,get:(e,t,i)=>$u(e,t)||n.get(e,t,i),has:(e,t)=>!!$u(e,t)||n.has(e,t)}));/**
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
 */class Hy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(zy(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function zy(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sa="@firebase/app",Nu="0.14.9";/**
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
 */const Dt=new cc("@firebase/app"),qy="@firebase/app-compat",Wy="@firebase/analytics-compat",Gy="@firebase/analytics",Ky="@firebase/app-check-compat",Qy="@firebase/app-check",Jy="@firebase/auth",Yy="@firebase/auth-compat",Xy="@firebase/database",Zy="@firebase/data-connect",ev="@firebase/database-compat",tv="@firebase/functions",nv="@firebase/functions-compat",iv="@firebase/installations",sv="@firebase/installations-compat",rv="@firebase/messaging",ov="@firebase/messaging-compat",av="@firebase/performance",cv="@firebase/performance-compat",lv="@firebase/remote-config",uv="@firebase/remote-config-compat",dv="@firebase/storage",hv="@firebase/storage-compat",fv="@firebase/firestore",pv="@firebase/ai",mv="@firebase/firestore-compat",gv="firebase",yv="12.10.0";/**
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
 */const ka="[DEFAULT]",vv={[Sa]:"fire-core",[qy]:"fire-core-compat",[Gy]:"fire-analytics",[Wy]:"fire-analytics-compat",[Qy]:"fire-app-check",[Ky]:"fire-app-check-compat",[Jy]:"fire-auth",[Yy]:"fire-auth-compat",[Xy]:"fire-rtdb",[Zy]:"fire-data-connect",[ev]:"fire-rtdb-compat",[tv]:"fire-fn",[nv]:"fire-fn-compat",[iv]:"fire-iid",[sv]:"fire-iid-compat",[rv]:"fire-fcm",[ov]:"fire-fcm-compat",[av]:"fire-perf",[cv]:"fire-perf-compat",[lv]:"fire-rc",[uv]:"fire-rc-compat",[dv]:"fire-gcs",[hv]:"fire-gcs-compat",[fv]:"fire-fst",[mv]:"fire-fst-compat",[pv]:"fire-vertex","fire-js":"fire-js",[gv]:"fire-js-all"};/**
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
 */const Nr=new Map,wv=new Map,Ca=new Map;function Mu(n,e){try{n.container.addComponent(e)}catch(t){Dt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Un(n){const e=n.name;if(Ca.has(e))return Dt.debug(`There were multiple attempts to register component ${e}.`),!1;Ca.set(e,n);for(const t of Nr.values())Mu(t,n);for(const t of wv.values())Mu(t,n);return!0}function to(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Be(n){return n==null?!1:n.settings!==void 0}/**
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
 */const _v={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},sn=new ks("app","Firebase",_v);/**
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
 */class bv{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sn.create("app-deleted",{appName:this._name})}}/**
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
 */const zn=yv;function Oh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:ka,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw sn.create("bad-app-name",{appName:String(s)});if(t||(t=Lh()),!t)throw sn.create("no-options");const r=Nr.get(s);if(r){if(Vn(t,r.options)&&Vn(i,r.config))return r;throw sn.create("duplicate-app",{appName:s})}const o=new Cy(s);for(const l of Ca.values())o.addComponent(l);const c=new bv(t,i,o);return Nr.set(s,c),c}function uc(n=ka){const e=Nr.get(n);if(!e&&n===ka&&Lh())return Oh();if(!e)throw sn.create("no-app",{appName:n});return e}function gt(n,e,t){let i=vv[n]??n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),r=e.match(/\s|\//);if(s||r){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dt.warn(o.join(" "));return}Un(new ln(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Tv="firebase-heartbeat-database",Iv=1,ys="firebase-heartbeat-store";let sa=null;function Vh(){return sa||(sa=Fy(Tv,Iv,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ys)}catch(t){console.warn(t)}}}}).catch(n=>{throw sn.create("idb-open",{originalErrorMessage:n.message})})),sa}async function Ev(n){try{const t=(await Vh()).transaction(ys),i=await t.objectStore(ys).get(Uh(n));return await t.done,i}catch(e){if(e instanceof Et)Dt.warn(e.message);else{const t=sn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dt.warn(t.message)}}}async function Ou(n,e){try{const i=(await Vh()).transaction(ys,"readwrite");await i.objectStore(ys).put(e,Uh(n)),await i.done}catch(t){if(t instanceof Et)Dt.warn(t.message);else{const i=sn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Dt.warn(i.message)}}}function Uh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Sv=1024,kv=30;class Cv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Rv(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Vu();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>kv){const o=Pv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Dt.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Vu(),{heartbeatsToSend:i,unsentEntries:s}=Av(this._heartbeatsCache.heartbeats),r=$r(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Dt.warn(t),""}}}function Vu(){return new Date().toISOString().substring(0,10)}function Av(n,e=Sv){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Uu(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Uu(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Rv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return my()?gy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ev(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Ou(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Ou(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Uu(n){return $r(JSON.stringify({version:2,heartbeats:n})).length}function Pv(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function xv(n){Un(new ln("platform-logger",e=>new Hy(e),"PRIVATE")),Un(new ln("heartbeat",e=>new Cv(e),"PRIVATE")),gt(Sa,Nu,n),gt(Sa,Nu,"esm2020"),gt("fire-js","")}xv("");var Lv="firebase",Dv="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gt(Lv,Dv,"app");function Fh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $v=Fh,Bh=new ks("auth","Firebase",Fh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new cc("@firebase/auth");function Nv(n,...e){Mr.logLevel<=X.WARN&&Mr.warn(`Auth (${zn}): ${n}`,...e)}function vr(n,...e){Mr.logLevel<=X.ERROR&&Mr.error(`Auth (${zn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(n,...e){throw hc(n,...e)}function nt(n,...e){return hc(n,...e)}function dc(n,e,t){const i={...$v(),[e]:t};return new ks("auth","Firebase",i).create(e,{appName:n.name})}function yt(n){return dc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jh(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&Ye(n,"argument-error"),dc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function hc(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Bh.create(n,...e)}function H(n,e,...t){if(!n)throw hc(e,...t)}function xt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw vr(e),new Error(e)}function $t(n,e){n||xt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Mv(){return Fu()==="http:"||Fu()==="https:"}function Fu(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Mv()||dy()||"connection"in navigator)?navigator.onLine:!0}function Vv(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,t){this.shortDelay=e,this.longDelay=t,$t(t>e,"Short delay should be less than long delay!"),this.isMobile=cy()||hy()}get(){return Ov()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(n,e){$t(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Bv=new As(3e4,6e4);function vn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Ot(n,e,t,i,s={}){return zh(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const c=Cs({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:l,...r};return uy()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&yn(n.emulatorConfig.host)&&(d.credentials="include"),Hh.fetch()(await qh(n,n.config.apiHost,t,c),d)})}async function zh(n,e,t){n._canInitEmulator=!1;const i={...Uv,...e};try{const s=new Hv(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw sr(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const c=r.ok?o.errorMessage:o.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw sr(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw sr(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw sr(n,"user-disabled",o);const m=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw dc(n,m,d);Ye(n,m)}}catch(s){if(s instanceof Et)throw s;Ye(n,"network-request-failed",{message:String(s)})}}async function Rs(n,e,t,i,s={}){const r=await Ot(n,e,t,i,s);return"mfaPendingCredential"in r&&Ye(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function qh(n,e,t,i){const s=`${e}${t}?${i}`,r=n,o=r.config.emulator?fc(n.config,s):`${n.config.apiScheme}://${s}`;return Fv.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function jv(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Hv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(nt(this.auth,"network-request-failed")),Bv.get())})}}function sr(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=nt(n,e,i);return s.customData._tokenResponse=t,s}function Bu(n){return n!==void 0&&n.enterprise!==void 0}class zv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return jv(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function qv(n,e){return Ot(n,"GET","/v2/recaptchaConfig",vn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wv(n,e){return Ot(n,"POST","/v1/accounts:delete",e)}async function Or(n,e){return Ot(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Gv(n,e=!1){const t=Re(n),i=await t.getIdToken(e),s=pc(i);H(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:as(ra(s.auth_time)),issuedAtTime:as(ra(s.iat)),expirationTime:as(ra(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ra(n){return Number(n)*1e3}function pc(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return vr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Rh(t);return s?JSON.parse(s):(vr("Failed to decode base64 JWT payload"),null)}catch(s){return vr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ju(n){const e=pc(n);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Et&&Kv(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Kv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=as(this.lastLoginAt),this.creationTime=as(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Vr(n){var g;const e=n.auth,t=await n.getIdToken(),i=await pi(n,Or(e,{idToken:t}));H(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const r=(g=s.providerUserInfo)!=null&&g.length?Wh(s.providerUserInfo):[],o=Yv(n.providerData,r),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),d=c?l:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ra(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,m)}async function Jv(n){const e=Re(n);await Vr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yv(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Wh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xv(n,e){const t=await zh(n,{},async()=>{const i=Cs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=await qh(n,s,"/v1/token",`key=${r}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:i};return n.emulatorConfig&&yn(n.emulatorConfig.host)&&(l.credentials="include"),Hh.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Zv(n,e){return Ot(n,"POST","/v2/accounts:revokeToken",vn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ju(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){H(e.length!==0,"internal-error");const t=ju(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Xv(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new ii;return i&&(H(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(H(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ii,this.toJSON())}_performRefresh(){return xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(n,e){H(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class et{constructor({uid:e,auth:t,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new Qv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ra(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await pi(this,this.stsTokenManager.getToken(this.auth,e));return H(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Gv(this,e)}reload(){return Jv(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new et({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Vr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Be(this.auth.app))return Promise.reject(yt(this.auth));const e=await this.getIdToken();return await pi(this,Wv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,s=t.email??void 0,r=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,d=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:g,emailVerified:v,isAnonymous:S,providerData:x,stsTokenManager:L}=t;H(g&&L,e,"internal-error");const R=ii.fromJSON(this.name,L);H(typeof g=="string",e,"internal-error"),zt(i,e.name),zt(s,e.name),H(typeof v=="boolean",e,"internal-error"),H(typeof S=="boolean",e,"internal-error"),zt(r,e.name),zt(o,e.name),zt(c,e.name),zt(l,e.name),zt(d,e.name),zt(m,e.name);const M=new et({uid:g,auth:e,email:s,emailVerified:v,displayName:i,isAnonymous:S,photoURL:o,phoneNumber:r,tenantId:c,stsTokenManager:R,createdAt:d,lastLoginAt:m});return x&&Array.isArray(x)&&(M.providerData=x.map(U=>({...U}))),l&&(M._redirectEventId=l),M}static async _fromIdTokenResponse(e,t,i=!1){const s=new ii;s.updateFromServerResponse(t);const r=new et({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Vr(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];H(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Wh(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),c=new ii;c.updateFromIdToken(i);const l=new et({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Ra(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu=new Map;function Lt(n){$t(n instanceof Function,"Expected a class definition");let e=Hu.get(n);return e?($t(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Hu.set(n,e),e)}/**
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
 */class Gh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Gh.type="NONE";const zu=Gh;/**
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
 */function wr(n,e,t){return`firebase:${n}:${e}:${t}`}class si{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=wr(this.userKey,s.apiKey,r),this.fullPersistenceKey=wr("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Or(this.auth,{idToken:e}).catch(()=>{});return t?et._fromGetAccountInfoResponse(this.auth,t,e):null}return et._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new si(Lt(zu),e,i);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let r=s[0]||Lt(zu);const o=wr(i,e.config.apiKey,e.name);let c=null;for(const d of t)try{const m=await d._get(o);if(m){let g;if(typeof m=="string"){const v=await Or(e,{idToken:m}).catch(()=>{});if(!v)break;g=await et._fromGetAccountInfoResponse(e,v,m)}else g=et._fromJSON(e,m);d!==r&&(c=g),r=d;break}}catch{}const l=s.filter(d=>d._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new si(r,e,i):(r=l[0],c&&await r._set(o,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==r)try{await d._remove(o)}catch{}})),new si(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Kh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zh(e))return"Blackberry";if(ef(e))return"Webos";if(Qh(e))return"Safari";if((e.includes("chrome/")||Jh(e))&&!e.includes("edge/"))return"Chrome";if(Xh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Kh(n=Oe()){return/firefox\//i.test(n)}function Qh(n=Oe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jh(n=Oe()){return/crios\//i.test(n)}function Yh(n=Oe()){return/iemobile/i.test(n)}function Xh(n=Oe()){return/android/i.test(n)}function Zh(n=Oe()){return/blackberry/i.test(n)}function ef(n=Oe()){return/webos/i.test(n)}function mc(n=Oe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ew(n=Oe()){var e;return mc(n)&&!!((e=window.navigator)!=null&&e.standalone)}function tw(){return fy()&&document.documentMode===10}function tf(n=Oe()){return mc(n)||Xh(n)||ef(n)||Zh(n)||/windows phone/i.test(n)||Yh(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(n,e=[]){let t;switch(n){case"Browser":t=qu(Oe());break;case"Worker":t=`${qu(Oe())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${zn}/${i}`}/**
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
 */class nw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,c)=>{try{const l=e(r);o(l)}catch(l){c(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function iw(n,e={}){return Ot(n,"GET","/v2/passwordPolicy",vn(n,e))}/**
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
 */const sw=6;class rw{constructor(e){var i;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??sw,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wu(this),this.idTokenSubscription=new Wu(this),this.beforeStateQueue=new nw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Lt(t)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await si.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Or(this,{idToken:e}),i=await et._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(Be(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Vr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Vv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Be(this.app))return Promise.reject(yt(this));const t=e?Re(e):null;return t&&H(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Be(this.app)?Promise.reject(yt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Be(this.app)?Promise.reject(yt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Lt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await iw(this),t=new rw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ks("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Zv(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Lt(e)||this._popupRedirectResolver;H(t,this,"argument-error"),this.redirectPersistenceManager=await si.create(this,[Lt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(c,this,"internal-error"),c.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;if(Be(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Nv(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function St(n){return Re(n)}class Wu{constructor(e){this.auth=e,this.observer=null,this.addObserver=by(t=>this.observer=t)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aw(n){no=n}function sf(n){return no.loadJS(n)}function cw(){return no.recaptchaEnterpriseScript}function lw(){return no.gapiScript}function uw(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class dw{constructor(){this.enterprise=new hw}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class hw{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const fw="recaptcha-enterprise",rf="NO_RECAPTCHA";class pw{constructor(e){this.type=fw,this.auth=St(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,c)=>{qv(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new zv(l);return r.tenantId==null?r._agentRecaptchaConfig=d:r._tenantRecaptchaConfigs[r.tenantId]=d,o(d.siteKey)}}).catch(l=>{c(l)})})}function s(r,o,c){const l=window.grecaptcha;Bu(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(d=>{o(d)}).catch(()=>{o(rf)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new dw().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(c=>{if(!t&&Bu(window.grecaptcha))s(c,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=cw();l.length!==0&&(l+=c),sf(l).then(()=>{s(c,r,o)}).catch(d=>{o(d)})}}).catch(c=>{o(c)})})}}async function Gu(n,e,t,i=!1,s=!1){const r=new pw(n);let o;if(s)o=rf;else try{o=await r.verify(t)}catch{o=await r.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return i?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Pa(n,e,t,i,s){var r;if((r=n._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Gu(n,e,t,t==="getOobCode");return i(n,o)}else return i(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Gu(n,e,t,t==="getOobCode");return i(n,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(n,e){const t=to(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(Vn(r,e??{}))return s;Ye(s,"already-initialized")}return t.initialize({options:e})}function gw(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Lt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function yw(n,e,t){const i=St(n);H(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=of(e),{host:o,port:c}=vw(e),l=c===null?"":`:${c}`,d={url:`${r}//${o}${l}/`},m=Object.freeze({host:o,port:c,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){H(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),H(Vn(d,i.config.emulator)&&Vn(m,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=d,i.emulatorConfig=m,i.settings.appVerificationDisabledForTesting=!0,yn(o)?(oc(`${r}//${o}${l}`),ac("Auth",!0)):ww()}function of(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function vw(n){const e=of(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Ku(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Ku(o)}}}function Ku(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ww(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return xt("not implemented")}_getIdTokenResponse(e){return xt("not implemented")}_linkToIdToken(e,t){return xt("not implemented")}_getReauthenticationResolver(e){return xt("not implemented")}}async function _w(n,e){return Ot(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bw(n,e){return Rs(n,"POST","/v1/accounts:signInWithPassword",vn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tw(n,e){return Rs(n,"POST","/v1/accounts:signInWithEmailLink",vn(n,e))}async function Iw(n,e){return Rs(n,"POST","/v1/accounts:signInWithEmailLink",vn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs extends gc{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new vs(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new vs(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pa(e,t,"signInWithPassword",bw);case"emailLink":return Tw(e,{email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pa(e,i,"signUpPassword",_w);case"emailLink":return Iw(e,{idToken:t,email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ri(n,e){return Rs(n,"POST","/v1/accounts:signInWithIdp",vn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew="http://localhost";class Nt extends gc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Nt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ye("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...r}=t;if(!i||!s)return null;const o=new Nt(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ri(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,ri(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ri(e,t)}buildRequest(){const e={requestUri:Ew,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Cs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kw(n){const e=Zi(es(n)).link,t=e?Zi(es(e)).deep_link_id:null,i=Zi(es(n)).deep_link_id;return(i?Zi(es(i)).link:null)||i||t||e||n}class yc{constructor(e){const t=Zi(es(e)),i=t.apiKey??null,s=t.oobCode??null,r=Sw(t.mode??null);H(i&&s&&r,"argument-error"),this.apiKey=i,this.operation=r,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=kw(e);try{return new yc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){this.providerId=Ti.PROVIDER_ID}static credential(e,t){return vs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=yc.parseLink(t);return H(i,"argument-error"),vs._fromEmailAndCode(e,i.code,i.tenantId)}}Ti.PROVIDER_ID="password";Ti.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ti.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ii extends io{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class cs extends Ii{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return H("providerId"in t&&"signInMethod"in t,"argument-error"),Nt._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return H(e.idToken||e.accessToken,"argument-error"),Nt._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return cs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return cs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:r,nonce:o,providerId:c}=e;if(!i&&!s&&!t&&!r||!c)return null;try{return new cs(c)._credential({idToken:t,accessToken:i,nonce:o,pendingToken:r})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends Ii{constructor(){super("facebook.com")}static credential(e){return Nt._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kt.credential(e.oauthAccessToken)}catch{return null}}}Kt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends Ii{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Nt._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Pt.credential(t,i)}catch{return null}}}Pt.GOOGLE_SIGN_IN_METHOD="google.com";Pt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends Ii{constructor(){super("github.com")}static credential(e){return Nt._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.GITHUB_SIGN_IN_METHOD="github.com";Qt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Ii{constructor(){super("twitter.com")}static credential(e,t){return Nt._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Jt.credential(t,i)}catch{return null}}}Jt.TWITTER_SIGN_IN_METHOD="twitter.com";Jt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cw(n,e){return Rs(n,"POST","/v1/accounts:signUp",vn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await et._fromIdTokenResponse(e,i,s),o=Qu(i);return new Fn({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Qu(i);return new Fn({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Qu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends Et{constructor(e,t,i,s){super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Ur.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Ur(e,t,i,s)}}function af(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ur._fromErrorAndOperation(n,r,e,i):r})}async function Aw(n,e,t=!1){const i=await pi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Fn._forOperation(n,"link",i)}/**
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
 */async function Rw(n,e,t=!1){const{auth:i}=n;if(Be(i.app))return Promise.reject(yt(i));const s="reauthenticate";try{const r=await pi(n,af(i,s,e,n),t);H(r.idToken,i,"internal-error");const o=pc(r.idToken);H(o,i,"internal-error");const{sub:c}=o;return H(n.uid===c,i,"user-mismatch"),Fn._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ye(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cf(n,e,t=!1){if(Be(n.app))return Promise.reject(yt(n));const i="signIn",s=await af(n,i,e),r=await Fn._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function Pw(n,e){return cf(St(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lf(n){const e=St(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function xw(n,e,t){if(Be(n.app))return Promise.reject(yt(n));const i=St(n),o=await Pa(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Cw).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&lf(n),l}),c=await Fn._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(c.user),c}function Lw(n,e,t){return Be(n.app)?Promise.reject(yt(n)):Pw(Re(n),Ti.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&lf(n),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dw(n,e){return Ot(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $w(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=Re(n),r={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await pi(i,Dw(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const c=i.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function Nw(n,e,t,i){return Re(n).onIdTokenChanged(e,t,i)}function Mw(n,e,t){return Re(n).beforeAuthStateChanged(e,t)}function Ow(n,e,t,i){return Re(n).onAuthStateChanged(e,t,i)}function Vw(n){return Re(n).signOut()}const Fr="__sak";/**
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
 */class uf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Fr,"1"),this.storage.removeItem(Fr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw=1e3,Fw=10;class df extends uf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=tf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);tw()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Fw):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Uw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}df.type="LOCAL";const Bw=df;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf extends uf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}hf.type="SESSION";const ff=hf;/**
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
 */function jw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class so{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new so(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const c=Array.from(o).map(async d=>d(t.origin,r)),l=await jw(c);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}so.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Hw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((c,l)=>{const d=vc("",20);s.port1.start();const m=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(g){const v=g;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(m),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),c(v.data.response);break;default:clearTimeout(m),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return window}function zw(n){vt().location.href=n}/**
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
 */function pf(){return typeof vt().WorkerGlobalScope<"u"&&typeof vt().importScripts=="function"}async function qw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ww(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Gw(){return pf()?self:null}/**
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
 */const mf="firebaseLocalStorageDb",Kw=1,Br="firebaseLocalStorage",gf="fbase_key";class Ps{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ro(n,e){return n.transaction([Br],e?"readwrite":"readonly").objectStore(Br)}function Qw(){const n=indexedDB.deleteDatabase(mf);return new Ps(n).toPromise()}function xa(){const n=indexedDB.open(mf,Kw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Br,{keyPath:gf})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Br)?e(i):(i.close(),await Qw(),e(await xa()))})})}async function Ju(n,e,t){const i=ro(n,!0).put({[gf]:e,value:t});return new Ps(i).toPromise()}async function Jw(n,e){const t=ro(n,!1).get(e),i=await new Ps(t).toPromise();return i===void 0?null:i.value}function Yu(n,e){const t=ro(n,!0).delete(e);return new Ps(t).toPromise()}const Yw=800,Xw=3;class yf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Xw)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=so._getInstance(Gw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await qw(),!this.activeServiceWorker)return;this.sender=new Hw(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ww()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xa();return await Ju(e,Fr,"1"),await Yu(e,Fr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Ju(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Jw(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Yu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=ro(s,!1).getAll();return new Ps(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Yw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yf.type="LOCAL";const Zw=yf;new As(3e4,6e4);/**
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
 */function wc(n,e){return e?Lt(e):(H(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class _c extends gc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ri(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ri(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ri(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function e_(n){return cf(n.auth,new _c(n),n.bypassAuthState)}function t_(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),Rw(t,new _c(n),n.bypassAuthState)}async function n_(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),Aw(t,new _c(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return e_;case"linkViaPopup":case"linkViaRedirect":return n_;case"reauthViaPopup":case"reauthViaRedirect":return t_;default:Ye(this.auth,"internal-error")}}resolve(e){$t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=new As(2e3,1e4);async function wf(n,e,t){if(Be(n.app))return Promise.reject(nt(n,"operation-not-supported-in-this-environment"));const i=St(n);jh(n,e,io);const s=wc(i,t);return new xn(i,"signInViaPopup",e,s).executeNotNull()}class xn extends vf{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,xn.currentPopupAction&&xn.currentPopupAction.cancel(),xn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){$t(this.filter.length===1,"Popup operations only handle one event");const e=vc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)==null?void 0:t.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,i_.get())};e()}}xn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_="pendingRedirect",_r=new Map;class r_ extends vf{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=_r.get(this.auth._key());if(!e){try{const i=await o_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}_r.set(this.auth._key(),e)}return this.bypassAuthState||_r.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function o_(n,e){const t=bf(e),i=_f(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}async function a_(n,e){return _f(n)._set(bf(e),"true")}function c_(n,e){_r.set(n._key(),e)}function _f(n){return Lt(n._redirectPersistence)}function bf(n){return wr(s_,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(n,e,t){return l_(n,e,t)}async function l_(n,e,t){if(Be(n.app))return Promise.reject(yt(n));const i=St(n);jh(n,e,io),await i._initializationPromise;const s=wc(i,t);return await a_(s,i),s._openRedirect(i,e,"signInViaRedirect")}async function u_(n,e){return await St(n)._initializationPromise,If(n,e,!1)}async function If(n,e,t=!1){if(Be(n.app))return Promise.reject(yt(n));const i=St(n),s=wc(i,e),o=await new r_(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=600*1e3;class h_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!f_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Ef(e)){const s=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";t.onError(nt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=d_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xu(e))}saveEventToCache(e){this.cachedEventUids.add(Xu(e)),this.lastProcessedEventTime=Date.now()}}function Xu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ef({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function f_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ef(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p_(n,e={}){return Ot(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,g_=/^https?/;async function y_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await p_(n);for(const t of e)try{if(v_(t))return}catch{}Ye(n,"unauthorized-domain")}function v_(n){const e=Aa(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!g_.test(t))return!1;if(m_.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const w_=new As(3e4,6e4);function Zu(){const n=vt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function __(n){return new Promise((e,t)=>{var s,r,o;function i(){Zu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zu(),t(nt(n,"network-request-failed"))},timeout:w_.get()})}if((r=(s=vt().gapi)==null?void 0:s.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=vt().gapi)!=null&&o.load)i();else{const c=uw("iframefcb");return vt()[c]=()=>{gapi.load?i():t(nt(n,"network-request-failed"))},sf(`${lw()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw br=null,e})}let br=null;function b_(n){return br=br||__(n),br}/**
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
 */const T_=new As(5e3,15e3),I_="__/auth/iframe",E_="emulator/auth/iframe",S_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},k_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function C_(n){const e=n.config;H(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?fc(e,E_):`https://${n.config.authDomain}/${I_}`,i={apiKey:e.apiKey,appName:n.name,v:zn},s=k_.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Cs(i).slice(1)}`}async function A_(n){const e=await b_(n),t=vt().gapi;return H(t,n,"internal-error"),e.open({where:document.body,url:C_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:S_,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=nt(n,"network-request-failed"),c=vt().setTimeout(()=>{r(o)},T_.get());function l(){vt().clearTimeout(c),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const R_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},P_=500,x_=600,L_="_blank",D_="http://localhost";class ed{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $_(n,e,t,i=P_,s=x_){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l={...R_,width:i.toString(),height:s.toString(),top:r,left:o},d=Oe().toLowerCase();t&&(c=Jh(d)?L_:t),Kh(d)&&(e=e||D_,l.scrollbars="yes");const m=Object.entries(l).reduce((v,[S,x])=>`${v}${S}=${x},`,"");if(ew(d)&&c!=="_self")return N_(e||"",c),new ed(null);const g=window.open(e||"",c,m);H(g,n,"popup-blocked");try{g.focus()}catch{}return new ed(g)}function N_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const M_="__/auth/handler",O_="emulator/auth/handler",V_=encodeURIComponent("fac");async function td(n,e,t,i,s,r){H(n.config.authDomain,n,"auth-domain-config-required"),H(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:zn,eventId:s};if(e instanceof io){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",_y(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,g]of Object.entries({}))o[m]=g}if(e instanceof Ii){const m=e.getScopes().filter(g=>g!=="");m.length>0&&(o.scopes=m.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const l=await n._getAppCheckToken(),d=l?`#${V_}=${encodeURIComponent(l)}`:"";return`${U_(n)}?${Cs(c).slice(1)}${d}`}function U_({config:n}){return n.emulator?fc(n,O_):`https://${n.authDomain}/${M_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa="webStorageSupport";class F_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ff,this._completeRedirectFn=If,this._overrideRedirectResult=c_}async _openPopup(e,t,i,s){var o;$t((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await td(e,t,i,Aa(),s);return $_(e,r,vc())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await td(e,t,i,Aa(),s);return zw(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):($t(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await A_(e),i=new h_(e);return t.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(oa,{type:oa},s=>{var o;const r=(o=s==null?void 0:s[0])==null?void 0:o[oa];r!==void 0&&t(!!r),Ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=y_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return tf()||Qh()||mc()}}const B_=F_;var nd="@firebase/auth",id="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function z_(n){Un(new ln("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=i.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nf(n)},d=new ow(i,s,r,l);return gw(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Un(new ln("auth-internal",e=>{const t=St(e.getProvider("auth").getImmediate());return(i=>new j_(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),gt(nd,id,H_(n)),gt(nd,id,"esm2020")}/**
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
 */const q_=300,W_=Dh("authIdTokenMaxAge")||q_;let sd=null;const G_=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>W_)return;const s=t==null?void 0:t.token;sd!==s&&(sd=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function K_(n=uc()){const e=to(n,"auth");if(e.isInitialized())return e.getImmediate();const t=mw(n,{popupRedirectResolver:B_,persistence:[Zw,Bw,ff]}),i=Dh("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=G_(r.toString());Mw(t,o,()=>o(t.currentUser)),Nw(t,c=>o(c))}}const s=Ph("auth");return s&&yw(t,`http://${s}`),t}function Q_(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}aw({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=nt("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",Q_().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});z_("Browser");const J_={apiKey:"AIzaSyAFURz8fEGSTameAW5YvBKWpr2LXv9Ang0",authDomain:"family-pantry-c65d6.firebaseapp.com",projectId:"family-pantry-c65d6",storageBucket:"family-pantry-c65d6.firebasestorage.app",messagingSenderId:"710701847077",appId:"1:710701847077:web:407a8937330ad2ebcfe5cc"},bc=Oh(J_),Xe=K_(bc);window._firebaseAuth=Xe;const rd=new Pt,jr=new cs("apple.com");jr.addScope("email");jr.addScope("name");let Tc=null;const Tr=[];function Y_(n){return Tr.push(n),n(Tc),()=>{const e=Tr.indexOf(n);e!==-1&&Tr.splice(e,1)}}function X_(n){Tc=n,Tr.forEach(e=>e(n))}Ow(Xe,n=>{X_(n||null)});u_(Xe).catch(n=>{n.code!=="auth/redirect-cancelled-by-user"&&console.error("Redirect sign-in error:",n)});async function Z_(){try{return(await wf(Xe,rd)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await Tf(Xe,rd),null;throw n}}async function eb(){try{return(await wf(Xe,jr)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await Tf(Xe,jr),null;throw n}}async function tb(n,e){return(await Lw(Xe,n,e)).user}async function nb(n,e,t){const i=await xw(Xe,n,e);return t&&await $w(i.user,{displayName:t}),i.user}async function ib(){await Vw(Xe)}async function Sf(){return Xe.currentUser?Xe.currentUser.getIdToken():null}function re(){return Tc}async function oo(n,e,t){const i={"Content-Type":"application/json"},s=await Sf();s&&(i.Authorization=`Bearer ${s}`);const r=await fetch("/api/db",{method:"POST",headers:i,body:JSON.stringify({op:n,path:e,data:t})});if(!(r.headers.get("content-type")||"").includes("application/json"))throw new Error(`/api/db non-JSON response (status ${r.status}) for ${n} ${e}`);return r.json()}async function oe(n){try{return(await oo("list",n)).docs||[]}catch(e){return console.warn("dbList:",n,e.message),[]}}async function K(n,e){return oo("set",n,e)}async function st(n){return oo("delete",n)}async function ie(n){try{return(await oo("get",n)).doc||null}catch{return null}}function kf(){return Math.random().toString(36).slice(2,8).toUpperCase()}async function Hr(n){var t;const e={name:n.displayName||((t=n.email)==null?void 0:t.split("@")[0])||"User",email:n.email||"",createdAt:new Date().toISOString(),householdIds:[]};return await K(`users/${n.uid}`,e),e}async function Ic(n,e){var o;const t=re(),i=n,s=kf(),r={name:e||"My Kitchen",ownerUid:n,members:[{uid:n,name:(t==null?void 0:t.displayName)||((o=t==null?void 0:t.email)==null?void 0:o.split("@")[0])||"Owner",role:"owner"}],memberUids:[n],inviteCode:s,createdAt:new Date().toISOString()};try{await K(`households/${i}`,r),await K(`household_codes/${s}`,{householdId:i})}catch(c){console.error(`[createHousehold] FAILED to write households/${i}:`,c)}return{hid:i,...r}}async function Cf(n){const e=await ie(`household_codes/${n.toUpperCase()}`);return(e==null?void 0:e.householdId)||null}async function Ec(n,e){var c;const t=await Cf(n);if(!t)return null;const i=await ie(`households/${t}`);if(!i)return null;const s=i.members||[],r=i.memberUids||s.map(l=>l.uid);s.find(l=>l.uid===e.uid)||(s.push({uid:e.uid,name:e.displayName||((c=e.email)==null?void 0:c.split("@")[0])||"Member",role:"member"}),r.includes(e.uid)||r.push(e.uid),await K(`households/${t}`,{...i,members:s,memberUids:r,id:void 0}));const o=await ie(`users/${e.uid}`);if(o){const l=o.householdIds||[];l.includes(t)||(l.push(t),await K(`users/${e.uid}`,{...o,householdIds:l,id:void 0}))}return t}async function Af(n){const e=await ie(`households/${n}`);if(!e)return null;if(e.inviteCode)try{await st(`household_codes/${e.inviteCode}`)}catch{}const t=kf();return await K(`household_codes/${t}`,{householdId:n}),await K(`households/${n}`,{...e,inviteCode:t,id:void 0}),t}async function Rf(n,e){const t=await ie(`households/${n}`);if(!t)return;const i=(t.members||[]).filter(r=>r.uid!==e),s=(t.memberUids||[]).filter(r=>r!==e);await K(`households/${n}`,{...t,members:i,memberUids:s,id:void 0});try{const r=await ie(`users/${e}`);if(r){const o=(r.householdIds||[]).filter(c=>c!==n);await K(`users/${e}`,{...r,householdIds:o,id:void 0})}}catch{}}async function od(n,e){const t=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog"];for(const i of t){const s=await oe(`households/${n}/${i}`);for(const r of s){const o=r.id,c={...r};delete c.id,await K(`households/${e}/${i}/${o}`,c)}}}async function Pf(n){var l,d;const e=n.uid;console.log(`[resolveHousehold] ENTER — uid=${e}`);const t=await ie(`users/${e}`);if(console.log("[resolveHousehold] userDoc=",t),t){const m=(l=t.householdIds)!=null&&l.length?t.householdIds[0]:e;console.log(`[resolveHousehold] RETURNING USER — hid=${m}, householdIds=`,t.householdIds);const g=localStorage.getItem("ks-h");return console.log(`[resolveHousehold] RETURNING USER — ks-h="${g}", hid="${m}", uid="${e}"`),console.log(`[resolveHousehold] RETURNING USER — migration condition: oldHid=${!!g}, oldHid!==hid=${g!==m}, oldHid!==uid=${g!==e}`),g&&g!==m&&g!==e?(console.log(`[resolveHousehold] LATE MIGRATION TRIGGERED: ${g} → ${m}`),await od(g,m),localStorage.removeItem("ks-h"),console.log("[resolveHousehold] Late migration DONE, ks-h removed")):console.log("[resolveHousehold] RETURNING USER — NO migration needed"),m}console.log("[resolveHousehold] FIRST-TIME LOGIN — no userDoc found");const i=localStorage.getItem("ks-h"),s=i&&i!==e;console.log(`[resolveHousehold] FIRST-TIME — ks-h="${i}", hasOldData=${s}`);const r=((d=h.cfg)==null?void 0:d.name)||"My Kitchen";console.log(`[resolveHousehold] FIRST-TIME — creating household, cfgName="${r}"`),await Ic(e,s?r:"My Kitchen"),s&&(console.log(`[resolveHousehold] FIRST-TIME MIGRATION: ${i} → ${e}`),await od(i,e),console.log("[resolveHousehold] FIRST-TIME MIGRATION DONE"));const o=await Hr(n);o.householdIds=[e],await K(`users/${e}`,o),console.log("[resolveHousehold] User profile created & saved"),localStorage.removeItem("ks-h");const c=xe("ks-hhs");if(c){const m=c.filter(g=>g!==i);m.includes(e)||m.push(e),localStorage.setItem("ks-hhs",JSON.stringify(m))}return console.log(`[resolveHousehold] EXIT — returning uid=${e}`),e}async function un(n,e){e?(h.mp[n]=e,await K(`households/${h.hid}/mealplan/${n}`,{date:n,meal:e})):(delete h.mp[n],await st(`households/${h.hid}/mealplan/${n}`))}async function xs(){await K(`households/${h.hid}/settings/config`,h.cfg)}async function Sc(n,e){const t={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:e||La(),loggedAt:new Date().toISOString()};h.cookLog.unshift(t),h.cookLog.length>200&&(h.cookLog=h.cookLog.slice(0,200)),await K(`households/${h.hid}/cooklog/${t.id}`,t)}async function xf(n){if(h.wasteLog.find(t=>t.name===n&&t.date===La()))return;const e={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:La(),loggedAt:new Date().toISOString()};h.wasteLog.unshift(e),h.wasteLog.length>100&&(h.wasteLog=h.wasteLog.slice(0,100)),await K(`households/${h.hid}/wastelog/${e.id}`,e)}async function Lf(){try{try{const r=await ie(`households/${h.hid}`);r&&r.inviteCode&&(await ie(`household_codes/${r.inviteCode}`)||(await K(`household_codes/${r.inviteCode}`,{householdId:h.hid}),console.log(`[backfill] Created household_codes/${r.inviteCode} for household ${h.hid}`)))}catch(r){console.warn("[backfill] household_codes backfill skipped:",r.message)}const e=(await oe(`households/${h.hid}/settings`)).find(r=>r.id==="config");if(e)h.cfg={...Dr,...e};else{const r=xe("ks-c");h.cfg={...Dr,...r||{}},await xs(),r&&localStorage.removeItem("ks-c")}const t=await oe(`households/${h.hid}/mealplan`);if(h.mp={},t.forEach(r=>{r.date&&r.meal&&(h.mp[r.date]=r.meal)}),!t.length){const r=xe("ks-m");if(r&&Object.keys(r).length){h.mp=r;for(const[o,c]of Object.entries(r))await un(o,c);localStorage.removeItem("ks-m")}}const i=await oe(`households/${h.hid}/cooklog`);if(i.length)h.cookLog=i.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=xe("ks-cooklog");if(r&&r.length){h.cookLog=r.map((o,c)=>({id:o.id||(Date.now()-c).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of h.cookLog)await K(`households/${h.hid}/cooklog/${o.id}`,o);localStorage.removeItem("ks-cooklog")}}const s=await oe(`households/${h.hid}/wastelog`);if(s.length)h.wasteLog=s.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=xe("ks-waste");if(r&&r.length){h.wasteLog=r.map((o,c)=>({id:o.id||(Date.now()-c).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of h.wasteLog)await K(`households/${h.hid}/wastelog/${o.id}`,o);localStorage.removeItem("ks-waste")}}}catch(n){console.error("loadFirestoreData error:",n)}}let ls=0;function qn(){ls++,ls===1&&window._pollIntervalId&&(clearInterval(window._pollIntervalId),window._pollIntervalId=null)}function Wn(){ls--,ls<=0&&(ls=0,window._pollFn&&!window._pollIntervalId&&(window._pollFn(),window._pollIntervalId=setInterval(window._pollFn,3e4)))}const B={renderAll:null,renderSum:null,renderRecs:null,renderShop:null};function le(n){var i;const e=document.getElementById("sdot"),t=document.getElementById("slb");e&&(e.className="sdot "+n),t&&(t.textContent=n==="synced"?"🏠 "+(((i=h.cfg)==null?void 0:i.name)||h.hid):n==="syncing"?"Syncing…":"Sync error")}async function se(n){var e,t;le("syncing"),qn();try{const i=!h.inv.find(s=>s.id===n.id);h.inv=[...h.inv.filter(s=>s.id!==n.id),n],(e=B.renderAll)==null||e.call(B),(t=B.renderSum)==null||t.call(B),await K(`households/${h.hid}/inventory/${n.id}`,n),i&&ao("added",n.name+" to inventory"),le("synced")}catch(i){console.error(i),le("error")}finally{Wn()}}async function Ls(n){var e,t;le("syncing"),qn();try{const i=h.inv.find(s=>s.id===n);h.inv=h.inv.filter(s=>s.id!==n),(e=B.renderAll)==null||e.call(B),(t=B.renderSum)==null||t.call(B),await st(`households/${h.hid}/inventory/${n}`),i&&ao("removed",i.name+" from inventory"),le("synced")}catch(i){console.error(i),le("error")}finally{Wn()}}async function it(n){var e,t;qn();try{h.recs=[...h.recs.filter(i=>i.id!==n.id),n],(e=B.renderRecs)==null||e.call(B),(t=B.renderSum)==null||t.call(B),await K(`households/${h.hid}/recipes/${n.id}`,n)}catch(i){console.error(i)}finally{Wn()}}async function Df(n){var e,t;qn();try{h.recs=h.recs.filter(i=>i.id!==n),(e=B.renderRecs)==null||e.call(B),(t=B.renderSum)==null||t.call(B),await st(`households/${h.hid}/recipes/${n}`)}catch(i){console.error(i)}finally{Wn()}}async function ye(n){var e,t;qn();try{const i=!h.shop.find(s=>s.id===n.id);h.shop=[...h.shop.filter(s=>s.id!==n.id),n],(e=B.renderShop)==null||e.call(B),(t=B.renderSum)==null||t.call(B),await K(`households/${h.hid}/shopping/${n.id}`,n),i&&ao("added",n.name+" to shopping list")}catch(i){console.error(i)}finally{Wn()}}async function Ei(n){var e,t;qn();try{h.shop=h.shop.filter(i=>i.id!==n),(e=B.renderShop)==null||e.call(B),(t=B.renderSum)==null||t.call(B),await st(`households/${h.hid}/shopping/${n}`)}catch(i){console.error(i)}finally{Wn()}}async function kc(n,e,t){var r;const i=n.id,s={title:n.name,ingredients:n.description||"",steps:n.steps||"",tags:n.tags||[],cuisine:n.cuisine||"",imageUrl:n.imageUrl||null,prepTime:n.prepTime||"",cookTime:n.cookTime||"",totalTime:n.totalTime||"",servings:n.servings||"",ingredientsRaw:n.ingredientsRaw||[],stepsRaw:n.stepsRaw||[],authorName:e||"Anonymous",authorUsername:h.username||"",authorUid:((r=re())==null?void 0:r.uid)||"",householdId:t||h.hid,createdAt:new Date().toISOString(),likes:0,commentCount:0,ratingSum:0,ratingCount:0,avgRating:0};return await K(`public_recipes/${i}`,s),{id:i,...s}}async function Cc(n){await st(`public_recipes/${n}`)}async function Ac(){return oe("public_recipes")}async function $f(n){return ie(`public_recipes/${n}`)}async function Nf(n,e){var o;const t=(o=re())==null?void 0:o.uid;if(!t)return;const i=`public_recipes/${n}/likes/${t}`;e?await st(i):await K(i,{likedAt:new Date().toISOString()});const s=await oe(`public_recipes/${n}/likes`),r=await ie(`public_recipes/${n}`);r&&await K(`public_recipes/${n}`,{...r,likes:s.length,id:void 0})}async function Mf(n,e,t){var c;const i=(c=re())==null?void 0:c.uid;if(!i||!e.trim())return;const s=e.trim().slice(0,500),r="cmt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),o={text:s,authorName:t,authorUsername:h.username||"",authorUid:i,createdAt:new Date().toISOString()};await K(`public_recipes/${n}/comments/${r}`,o);try{const l=await ie(`public_recipes/${n}`);if(l){const d=await oe(`public_recipes/${n}/comments`);await K(`public_recipes/${n}`,{...l,commentCount:d.length,id:void 0}),l.authorUid&&l.authorUid!==i&&await Gf(l.authorUid,{type:"comment",recipeId:n,recipeName:l.title||"a recipe",commenterUsername:h.username||t||"Someone"})}}catch{}return{id:r,...o}}async function Of(n){return oe(`public_recipes/${n}/comments`)}async function Vf(n){var i;const e=(i=re())==null?void 0:i.uid;return e?!!await ie(`public_recipes/${n}/likes/${e}`):!1}async function Uf(n){const t={id:"rec-"+Date.now(),name:n.title,description:n.ingredients||"",notes:n.steps||"",tags:n.tags||[],cuisine:n.cuisine||"",imageUrl:n.imageUrl||null,prepTime:n.prepTime||"",cookTime:n.cookTime||"",totalTime:n.totalTime||"",servings:n.servings||"",ingredientsRaw:n.ingredientsRaw||[],stepsRaw:n.stepsRaw||[],rating:0,favorited:!1,source:"Community",sourceUrl:null,cookCount:0,savedAt:new Date().toLocaleDateString()};return await it(t),t}async function Rc(n){return n?!await ie(`usernames/${n.toLowerCase()}`):!1}async function Pc(n,e){const t=await ie(`users/${n}`),i=t==null?void 0:t.username;if(i&&i.toLowerCase()!==e.toLowerCase())try{await st(`usernames/${i.toLowerCase()}`)}catch{}await K(`usernames/${e.toLowerCase()}`,{uid:n}),t&&await K(`users/${n}`,{...t,username:e,id:void 0}),h.username=e}async function Ff(n){try{const e=await ie(`users/${n}`);return(e==null?void 0:e.username)||null}catch{return null}}async function Bf(n){var t;const e=(t=re())==null?void 0:t.uid;return e?ie(`public_recipes/${n}/reviews/${e}`):null}async function ao(n,e){if(!h.hid||!e)return;const t=localStorage.getItem("ks-who")||"Someone",i="act-"+Date.now().toString(36)+Math.random().toString(36).slice(2),s={memberName:t,action:n,itemName:e,timestamp:new Date().toISOString()};try{await K(`households/${h.hid}/activity/${i}`,s),sb()}catch{}}async function sb(){try{const n=await oe(`households/${h.hid}/activity`),e=Date.now()-10080*60*1e3;for(const t of n)t.timestamp&&new Date(t.timestamp).getTime()<e&&await st(`households/${h.hid}/activity/${t.id}`)}catch{}}async function jf(){try{return(await oe(`households/${h.hid}/activity`)).sort((e,t)=>new Date(t.timestamp||0)-new Date(e.timestamp||0)).slice(0,10)}catch{return[]}}function La(){return new Date().toISOString().split("T")[0]}async function Hf(n,e){var g;const t=(g=re())==null?void 0:g.uid;if(!t||!e||e<1||e>5)return null;const i=await ie(`public_recipes/${n}`);if(i&&i.authorUid===t)return null;const s=new Date().toISOString(),r=await ie(`public_recipes/${n}/ratings/${t}`),o={rating:e,createdAt:(r==null?void 0:r.createdAt)||s,updatedAt:s};await K(`public_recipes/${n}/ratings/${t}`,o);const c=await oe(`public_recipes/${n}/ratings`),l=c.reduce((v,S)=>v+(S.rating||0),0),d=c.length,m=d>0?Math.round(l/d*10)/10:0;return i&&await K(`public_recipes/${n}`,{...i,ratingSum:l,ratingCount:d,avgRating:m,id:void 0}),{...o,ratingSum:l,ratingCount:d,avgRating:m}}async function zf(n){var t;const e=(t=re())==null?void 0:t.uid;return e?ie(`public_recipes/${n}/ratings/${e}`):null}async function qf(n,e){await st(`public_recipes/${n}/comments/${e}`);try{const t=await ie(`public_recipes/${n}`);if(t){const i=await oe(`public_recipes/${n}/comments`);await K(`public_recipes/${n}`,{...t,commentCount:i.length,id:void 0})}}catch{}}async function Wf(n,e,t,i){var d;const s=(d=re())==null?void 0:d.uid;if(!s)return null;if((await oe("reports")).find(m=>m.reportedBy===s&&m.targetId===e&&m.type===n))return"duplicate";const c="rpt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),l={type:n,targetId:e,recipeId:i||e,reportedBy:s,reason:t,createdAt:new Date().toISOString(),status:"pending"};return await K(`reports/${c}`,l),{id:c,...l}}async function Gf(n,e){if(!n)return;const t="ntf-"+Date.now().toString(36)+Math.random().toString(36).slice(2),i={...e,createdAt:new Date().toISOString(),read:!1};await K(`users/${n}/notifications/${t}`,i)}async function Kf(){var t;const n=(t=re())==null?void 0:t.uid;return n?(await oe(`users/${n}/notifications`)).sort((i,s)=>new Date(s.createdAt||0)-new Date(i.createdAt||0)):[]}async function Qf(){var t;const n=(t=re())==null?void 0:t.uid;if(!n)return;const e=await oe(`users/${n}/notifications`);for(const i of e)i.read||await K(`users/${n}/notifications/${i.id}`,{...i,read:!0,id:void 0})}async function Jf(){var t;const n=(t=re())==null?void 0:t.uid;return n?(await oe(`users/${n}/notifications`)).filter(i=>!i.read).length:0}const rb=Object.freeze(Object.defineProperty({__proto__:null,addComment:Mf,addCookLogEntry:Sc,addNotification:Gf,addWasteEntry:xf,checkMyLike:Vf,checkMyReview:Bf,checkUsernameAvailable:Rc,createHousehold:Ic,createUserProfile:Hr,dbDelete:st,dbGet:ie,dbList:oe,dbSet:K,deleteComment:qf,dlShopItem:Ei,dli:Ls,dlr:Df,getMyRating:zf,getPublicRecipe:$f,getUnreadNotifCount:Jf,joinHouseholdByCode:Ec,listComments:Of,listNotifications:Kf,listPublicRecipes:Ac,loadActivity:jf,loadFirestoreData:Lf,loadUsername:Ff,logActivity:ao,lookupHouseholdByCode:Cf,markAllNotificationsRead:Qf,pausePoll:qn,publishRecipe:kc,regenerateInviteCode:Af,removeMember:Rf,renderCallbacks:B,resolveHousehold:Pf,resumePoll:Wn,saveCfg:xs,saveMp:un,saveRecipeToKitchen:Uf,setUsername:Pc,ss:le,submitRating:Hf,submitReport:Wf,svShopItem:ye,svi:se,svr:it,toggleLike:Nf,unpublishRecipe:Cc},Symbol.toStringTag,{value:"Module"}));function Si(n){return n?n.replace(/\w\S*/g,e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()):""}function f(n){return document.getElementById(n)}function Zt(){return new Date().toISOString().split("T")[0]}function ki(){const n=new Date;n.setHours(0,0,0,0);const e=new Date(n);return e.setDate(n.getDate()-n.getDay()),Array.from({length:7},(t,i)=>{const s=new Date(e);return s.setDate(e.getDate()+i),s})}function ob(){const n=new Date;return n.setDate(n.getDate()+1),n.toISOString().split("T")[0]}function bt(n){if(!n)return null;const e=new Date;e.setHours(0,0,0,0);const t=new Date(n+"T00:00:00"),i=Math.round((t-e)/864e5);return i<0?{c:"expired",l:"Expired"}:i===0?{c:"expiring",l:"Expires today"}:i<=7?{c:"expiring",l:`Expires in ${i}d`}:{c:"ok",l:t.toLocaleDateString("en-US",{month:"short",day:"numeric"})}}function Yf(n){return{fridge:"🌡 Fridge",freezer:"🧊 Freezer",pantry:"🥫 Pantry",household:"🏠 Household"}[n]||n}const Xf={Produce:"🥦",Proteins:"🍗",Dairy:"🧀",Grains:"🌾",Condiments:"🧴",Snacks:"🍿",Beverages:"🥤",Frozen:"❄️",General:"📦",Imported:"📥"};function Ci(n){const e=(n.name||"").toLowerCase(),t=(n.category||"").toLowerCase();return t.includes("produce")||t.includes("vegetable")||t.includes("fruit")||e.match(/apple|banana|broccoli|carrot|celery|cabbage|tomato|onion|garlic|jalap|spinach|mushroom|squash|lettuce|cucumber|pepper/)?"Produce":t.includes("protein")||t.includes("meat")||t.includes("seafood")||t.includes("poultry")||e.match(/chicken|beef|lamb|turkey|salmon|cod|tuna|fish|steak|pork|shrimp/)?"Proteins":t.includes("dairy")||t.includes("egg")||e.match(/egg|butter|cheese|milk|cream|yogurt|ghee/)?"Dairy":t.includes("grain")||t.includes("bread")||t.includes("pasta")||e.match(/rice|pasta|bread|flour|oat|cereal|grain|noodle|tortilla/)?"Grains":t.includes("condiment")||t.includes("sauce")||e.match(/sauce|ketchup|mustard|oil|vinegar|salt|pepper|spice|herb|seasoning|mayo/)?"Condiments":n.location==="freezer"?"Frozen":"General"}function ab(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/^[-•]\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/\n/g,"<br>")}let aa=null;function P(n){const e=f("notif");e&&(e.textContent=n,e.style.display="block",e.style.animation="none",e.offsetWidth,e.style.animation="fn 2.5s ease forwards",aa&&clearTimeout(aa),aa=setTimeout(()=>e.style.display="none",2500))}function rt(n){var e;(e=f("ov-"+n))==null||e.classList.add("active")}function Ee(n){var e;(e=f("ov-"+n))==null||e.classList.remove("active")}function us(n,e){const t=f(n);t&&t.querySelectorAll(".star").forEach((i,s)=>{i.textContent=s<e?"★":"☆",i.classList.toggle("on",s<e)})}function xc(n){const e=n.toLowerCase();return/frozen|ice cream|pizza|nugget|waffle|tater|edamame|popsicle/.test(e)?"freezer":/milk|cheese|yogurt|butter|cream|egg|meat|chicken|beef|pork|fish|salmon|shrimp|tofu|deli|bacon|sausage|produce|lettuce|spinach|berry|berries|fruit|vegetable|carrot|broccoli|juice/.test(e)?"fridge":"pantry"}const cb={Produce:["apple","banana","carrot","celery","onion","garlic","tomato","lettuce","cucumber","pepper","broccoli","spinach","mushroom","lemon","lime","herb","cabbage","squash","jalap","avocado","potato","ginger"],"Meat & Fish":["chicken","beef","lamb","turkey","salmon","cod","tuna","fish","steak","shrimp","pork","bacon","sausage","ground"],"Dairy & Eggs":["egg","butter","cheese","milk","cream","yogurt","ghee","kefir"],Frozen:["frozen","ice cream","pizza","nugget","waffle","edamame","okra","lima","broccoli floret"],Pantry:["rice","pasta","flour","oil","vinegar","sauce","spice","salt","pepper","sugar","honey","oat","bread","can","bean","lentil","chickpea","stock","broth"],"Snacks & Drinks":["chip","cracker","cookie","juice","soda","water","tea","coffee","snack","nut","seed"]};function lb(n){const e=n.toLowerCase();for(const[t,i]of Object.entries(cb))if(i.some(s=>e.includes(s)))return t;return"Other"}var ad=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rn,Zf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,w){function b(){}b.prototype=w.prototype,T.F=w.prototype,T.prototype=new b,T.prototype.constructor=T,T.D=function(I,E,C){for(var _=Array(arguments.length-2),He=2;He<arguments.length;He++)_[He-2]=arguments[He];return w.prototype[E].apply(I,_)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,w,b){b||(b=0);const I=Array(16);if(typeof w=="string")for(var E=0;E<16;++E)I[E]=w.charCodeAt(b++)|w.charCodeAt(b++)<<8|w.charCodeAt(b++)<<16|w.charCodeAt(b++)<<24;else for(E=0;E<16;++E)I[E]=w[b++]|w[b++]<<8|w[b++]<<16|w[b++]<<24;w=T.g[0],b=T.g[1],E=T.g[2];let C=T.g[3],_;_=w+(C^b&(E^C))+I[0]+3614090360&4294967295,w=b+(_<<7&4294967295|_>>>25),_=C+(E^w&(b^E))+I[1]+3905402710&4294967295,C=w+(_<<12&4294967295|_>>>20),_=E+(b^C&(w^b))+I[2]+606105819&4294967295,E=C+(_<<17&4294967295|_>>>15),_=b+(w^E&(C^w))+I[3]+3250441966&4294967295,b=E+(_<<22&4294967295|_>>>10),_=w+(C^b&(E^C))+I[4]+4118548399&4294967295,w=b+(_<<7&4294967295|_>>>25),_=C+(E^w&(b^E))+I[5]+1200080426&4294967295,C=w+(_<<12&4294967295|_>>>20),_=E+(b^C&(w^b))+I[6]+2821735955&4294967295,E=C+(_<<17&4294967295|_>>>15),_=b+(w^E&(C^w))+I[7]+4249261313&4294967295,b=E+(_<<22&4294967295|_>>>10),_=w+(C^b&(E^C))+I[8]+1770035416&4294967295,w=b+(_<<7&4294967295|_>>>25),_=C+(E^w&(b^E))+I[9]+2336552879&4294967295,C=w+(_<<12&4294967295|_>>>20),_=E+(b^C&(w^b))+I[10]+4294925233&4294967295,E=C+(_<<17&4294967295|_>>>15),_=b+(w^E&(C^w))+I[11]+2304563134&4294967295,b=E+(_<<22&4294967295|_>>>10),_=w+(C^b&(E^C))+I[12]+1804603682&4294967295,w=b+(_<<7&4294967295|_>>>25),_=C+(E^w&(b^E))+I[13]+4254626195&4294967295,C=w+(_<<12&4294967295|_>>>20),_=E+(b^C&(w^b))+I[14]+2792965006&4294967295,E=C+(_<<17&4294967295|_>>>15),_=b+(w^E&(C^w))+I[15]+1236535329&4294967295,b=E+(_<<22&4294967295|_>>>10),_=w+(E^C&(b^E))+I[1]+4129170786&4294967295,w=b+(_<<5&4294967295|_>>>27),_=C+(b^E&(w^b))+I[6]+3225465664&4294967295,C=w+(_<<9&4294967295|_>>>23),_=E+(w^b&(C^w))+I[11]+643717713&4294967295,E=C+(_<<14&4294967295|_>>>18),_=b+(C^w&(E^C))+I[0]+3921069994&4294967295,b=E+(_<<20&4294967295|_>>>12),_=w+(E^C&(b^E))+I[5]+3593408605&4294967295,w=b+(_<<5&4294967295|_>>>27),_=C+(b^E&(w^b))+I[10]+38016083&4294967295,C=w+(_<<9&4294967295|_>>>23),_=E+(w^b&(C^w))+I[15]+3634488961&4294967295,E=C+(_<<14&4294967295|_>>>18),_=b+(C^w&(E^C))+I[4]+3889429448&4294967295,b=E+(_<<20&4294967295|_>>>12),_=w+(E^C&(b^E))+I[9]+568446438&4294967295,w=b+(_<<5&4294967295|_>>>27),_=C+(b^E&(w^b))+I[14]+3275163606&4294967295,C=w+(_<<9&4294967295|_>>>23),_=E+(w^b&(C^w))+I[3]+4107603335&4294967295,E=C+(_<<14&4294967295|_>>>18),_=b+(C^w&(E^C))+I[8]+1163531501&4294967295,b=E+(_<<20&4294967295|_>>>12),_=w+(E^C&(b^E))+I[13]+2850285829&4294967295,w=b+(_<<5&4294967295|_>>>27),_=C+(b^E&(w^b))+I[2]+4243563512&4294967295,C=w+(_<<9&4294967295|_>>>23),_=E+(w^b&(C^w))+I[7]+1735328473&4294967295,E=C+(_<<14&4294967295|_>>>18),_=b+(C^w&(E^C))+I[12]+2368359562&4294967295,b=E+(_<<20&4294967295|_>>>12),_=w+(b^E^C)+I[5]+4294588738&4294967295,w=b+(_<<4&4294967295|_>>>28),_=C+(w^b^E)+I[8]+2272392833&4294967295,C=w+(_<<11&4294967295|_>>>21),_=E+(C^w^b)+I[11]+1839030562&4294967295,E=C+(_<<16&4294967295|_>>>16),_=b+(E^C^w)+I[14]+4259657740&4294967295,b=E+(_<<23&4294967295|_>>>9),_=w+(b^E^C)+I[1]+2763975236&4294967295,w=b+(_<<4&4294967295|_>>>28),_=C+(w^b^E)+I[4]+1272893353&4294967295,C=w+(_<<11&4294967295|_>>>21),_=E+(C^w^b)+I[7]+4139469664&4294967295,E=C+(_<<16&4294967295|_>>>16),_=b+(E^C^w)+I[10]+3200236656&4294967295,b=E+(_<<23&4294967295|_>>>9),_=w+(b^E^C)+I[13]+681279174&4294967295,w=b+(_<<4&4294967295|_>>>28),_=C+(w^b^E)+I[0]+3936430074&4294967295,C=w+(_<<11&4294967295|_>>>21),_=E+(C^w^b)+I[3]+3572445317&4294967295,E=C+(_<<16&4294967295|_>>>16),_=b+(E^C^w)+I[6]+76029189&4294967295,b=E+(_<<23&4294967295|_>>>9),_=w+(b^E^C)+I[9]+3654602809&4294967295,w=b+(_<<4&4294967295|_>>>28),_=C+(w^b^E)+I[12]+3873151461&4294967295,C=w+(_<<11&4294967295|_>>>21),_=E+(C^w^b)+I[15]+530742520&4294967295,E=C+(_<<16&4294967295|_>>>16),_=b+(E^C^w)+I[2]+3299628645&4294967295,b=E+(_<<23&4294967295|_>>>9),_=w+(E^(b|~C))+I[0]+4096336452&4294967295,w=b+(_<<6&4294967295|_>>>26),_=C+(b^(w|~E))+I[7]+1126891415&4294967295,C=w+(_<<10&4294967295|_>>>22),_=E+(w^(C|~b))+I[14]+2878612391&4294967295,E=C+(_<<15&4294967295|_>>>17),_=b+(C^(E|~w))+I[5]+4237533241&4294967295,b=E+(_<<21&4294967295|_>>>11),_=w+(E^(b|~C))+I[12]+1700485571&4294967295,w=b+(_<<6&4294967295|_>>>26),_=C+(b^(w|~E))+I[3]+2399980690&4294967295,C=w+(_<<10&4294967295|_>>>22),_=E+(w^(C|~b))+I[10]+4293915773&4294967295,E=C+(_<<15&4294967295|_>>>17),_=b+(C^(E|~w))+I[1]+2240044497&4294967295,b=E+(_<<21&4294967295|_>>>11),_=w+(E^(b|~C))+I[8]+1873313359&4294967295,w=b+(_<<6&4294967295|_>>>26),_=C+(b^(w|~E))+I[15]+4264355552&4294967295,C=w+(_<<10&4294967295|_>>>22),_=E+(w^(C|~b))+I[6]+2734768916&4294967295,E=C+(_<<15&4294967295|_>>>17),_=b+(C^(E|~w))+I[13]+1309151649&4294967295,b=E+(_<<21&4294967295|_>>>11),_=w+(E^(b|~C))+I[4]+4149444226&4294967295,w=b+(_<<6&4294967295|_>>>26),_=C+(b^(w|~E))+I[11]+3174756917&4294967295,C=w+(_<<10&4294967295|_>>>22),_=E+(w^(C|~b))+I[2]+718787259&4294967295,E=C+(_<<15&4294967295|_>>>17),_=b+(C^(E|~w))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+w&4294967295,T.g[1]=T.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+C&4294967295}i.prototype.v=function(T,w){w===void 0&&(w=T.length);const b=w-this.blockSize,I=this.C;let E=this.h,C=0;for(;C<w;){if(E==0)for(;C<=b;)s(this,T,C),C+=this.blockSize;if(typeof T=="string"){for(;C<w;)if(I[E++]=T.charCodeAt(C++),E==this.blockSize){s(this,I),E=0;break}}else for(;C<w;)if(I[E++]=T[C++],E==this.blockSize){s(this,I),E=0;break}}this.h=E,this.o+=w},i.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var w=1;w<T.length-8;++w)T[w]=0;w=this.o*8;for(var b=T.length-8;b<T.length;++b)T[b]=w&255,w/=256;for(this.v(T),T=Array(16),w=0,b=0;b<4;++b)for(let I=0;I<32;I+=8)T[w++]=this.g[b]>>>I&255;return T};function r(T,w){var b=c;return Object.prototype.hasOwnProperty.call(b,T)?b[T]:b[T]=w(T)}function o(T,w){this.h=w;const b=[];let I=!0;for(let E=T.length-1;E>=0;E--){const C=T[E]|0;I&&C==w||(b[E]=C,I=!1)}this.g=b}var c={};function l(T){return-128<=T&&T<128?r(T,function(w){return new o([w|0],w<0?-1:0)}):new o([T|0],T<0?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return g;if(T<0)return R(d(-T));const w=[];let b=1;for(let I=0;T>=b;I++)w[I]=T/b|0,b*=4294967296;return new o(w,0)}function m(T,w){if(T.length==0)throw Error("number format error: empty string");if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(T.charAt(0)=="-")return R(m(T.substring(1),w));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const b=d(Math.pow(w,8));let I=g;for(let C=0;C<T.length;C+=8){var E=Math.min(8,T.length-C);const _=parseInt(T.substring(C,C+E),w);E<8?(E=d(Math.pow(w,E)),I=I.j(E).add(d(_))):(I=I.j(b),I=I.add(d(_)))}return I}var g=l(0),v=l(1),S=l(16777216);n=o.prototype,n.m=function(){if(L(this))return-R(this).m();let T=0,w=1;for(let b=0;b<this.g.length;b++){const I=this.i(b);T+=(I>=0?I:4294967296+I)*w,w*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(x(this))return"0";if(L(this))return"-"+R(this).toString(T);const w=d(Math.pow(T,6));var b=this;let I="";for(;;){const E=F(b,w).g;b=M(b,E.j(w));let C=((b.g.length>0?b.g[0]:b.h)>>>0).toString(T);if(b=E,x(b))return C+I;for(;C.length<6;)C="0"+C;I=C+I}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function x(T){if(T.h!=0)return!1;for(let w=0;w<T.g.length;w++)if(T.g[w]!=0)return!1;return!0}function L(T){return T.h==-1}n.l=function(T){return T=M(this,T),L(T)?-1:x(T)?0:1};function R(T){const w=T.g.length,b=[];for(let I=0;I<w;I++)b[I]=~T.g[I];return new o(b,~T.h).add(v)}n.abs=function(){return L(this)?R(this):this},n.add=function(T){const w=Math.max(this.g.length,T.g.length),b=[];let I=0;for(let E=0;E<=w;E++){let C=I+(this.i(E)&65535)+(T.i(E)&65535),_=(C>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);I=_>>>16,C&=65535,_&=65535,b[E]=_<<16|C}return new o(b,b[b.length-1]&-2147483648?-1:0)};function M(T,w){return T.add(R(w))}n.j=function(T){if(x(this)||x(T))return g;if(L(this))return L(T)?R(this).j(R(T)):R(R(this).j(T));if(L(T))return R(this.j(R(T)));if(this.l(S)<0&&T.l(S)<0)return d(this.m()*T.m());const w=this.g.length+T.g.length,b=[];for(var I=0;I<2*w;I++)b[I]=0;for(I=0;I<this.g.length;I++)for(let E=0;E<T.g.length;E++){const C=this.i(I)>>>16,_=this.i(I)&65535,He=T.i(E)>>>16,_n=T.i(E)&65535;b[2*I+2*E]+=_*_n,U(b,2*I+2*E),b[2*I+2*E+1]+=C*_n,U(b,2*I+2*E+1),b[2*I+2*E+1]+=_*He,U(b,2*I+2*E+1),b[2*I+2*E+2]+=C*He,U(b,2*I+2*E+2)}for(T=0;T<w;T++)b[T]=b[2*T+1]<<16|b[2*T];for(T=w;T<2*w;T++)b[T]=0;return new o(b,0)};function U(T,w){for(;(T[w]&65535)!=T[w];)T[w+1]+=T[w]>>>16,T[w]&=65535,w++}function O(T,w){this.g=T,this.h=w}function F(T,w){if(x(w))throw Error("division by zero");if(x(T))return new O(g,g);if(L(T))return w=F(R(T),w),new O(R(w.g),R(w.h));if(L(w))return w=F(T,R(w)),new O(R(w.g),w.h);if(T.g.length>30){if(L(T)||L(w))throw Error("slowDivide_ only works with positive integers.");for(var b=v,I=w;I.l(T)<=0;)b=W(b),I=W(I);var E=Y(b,1),C=Y(I,1);for(I=Y(I,2),b=Y(b,2);!x(I);){var _=C.add(I);_.l(T)<=0&&(E=E.add(b),C=_),I=Y(I,1),b=Y(b,1)}return w=M(T,E.j(w)),new O(E,w)}for(E=g;T.l(w)>=0;){for(b=Math.max(1,Math.floor(T.m()/w.m())),I=Math.ceil(Math.log(b)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),C=d(b),_=C.j(w);L(_)||_.l(T)>0;)b-=I,C=d(b),_=C.j(w);x(C)&&(C=v),E=E.add(C),T=M(T,_)}return new O(E,T)}n.B=function(T){return F(this,T).h},n.and=function(T){const w=Math.max(this.g.length,T.g.length),b=[];for(let I=0;I<w;I++)b[I]=this.i(I)&T.i(I);return new o(b,this.h&T.h)},n.or=function(T){const w=Math.max(this.g.length,T.g.length),b=[];for(let I=0;I<w;I++)b[I]=this.i(I)|T.i(I);return new o(b,this.h|T.h)},n.xor=function(T){const w=Math.max(this.g.length,T.g.length),b=[];for(let I=0;I<w;I++)b[I]=this.i(I)^T.i(I);return new o(b,this.h^T.h)};function W(T){const w=T.g.length+1,b=[];for(let I=0;I<w;I++)b[I]=T.i(I)<<1|T.i(I-1)>>>31;return new o(b,T.h)}function Y(T,w){const b=w>>5;w%=32;const I=T.g.length-b,E=[];for(let C=0;C<I;C++)E[C]=w>0?T.i(C+b)>>>w|T.i(C+b+1)<<32-w:T.i(C+b);return new o(E,T.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,Zf=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=m,rn=o}).apply(typeof ad<"u"?ad:typeof self<"u"?self:typeof window<"u"?window:{});var rr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ep,ts,tp,Ir,Da,np,ip,sp;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof rr=="object"&&rr];for(var u=0;u<a.length;++u){var p=a[u];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var i=t(this);function s(a,u){if(u)e:{var p=i;a=a.split(".");for(var y=0;y<a.length-1;y++){var k=a[y];if(!(k in p))break e;p=p[k]}a=a[a.length-1],y=p[a],u=u(y),u!=y&&u!=null&&e(p,a,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(u){var p=[],y;for(y in u)Object.prototype.hasOwnProperty.call(u,y)&&p.push([y,u[y]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},o=this||self;function c(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function l(a,u,p){return a.call.apply(a.bind,arguments)}function d(a,u,p){return d=l,d.apply(null,arguments)}function m(a,u){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function g(a,u){function p(){}p.prototype=u.prototype,a.Z=u.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(y,k,A){for(var $=Array(arguments.length-2),J=2;J<arguments.length;J++)$[J-2]=arguments[J];return u.prototype[k].apply(y,$)}}var v=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function S(a){const u=a.length;if(u>0){const p=Array(u);for(let y=0;y<u;y++)p[y]=a[y];return p}return[]}function x(a,u){for(let y=1;y<arguments.length;y++){const k=arguments[y];var p=typeof k;if(p=p!="object"?p:k?Array.isArray(k)?"array":p:"null",p=="array"||p=="object"&&typeof k.length=="number"){p=a.length||0;const A=k.length||0;a.length=p+A;for(let $=0;$<A;$++)a[p+$]=k[$]}else a.push(k)}}class L{constructor(u,p){this.i=u,this.j=p,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function R(a){o.setTimeout(()=>{throw a},0)}function M(){var a=T;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class U{constructor(){this.h=this.g=null}add(u,p){const y=O.get();y.set(u,p),this.h?this.h.next=y:this.g=y,this.h=y}}var O=new L(()=>new F,a=>a.reset());class F{constructor(){this.next=this.g=this.h=null}set(u,p){this.h=u,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let W,Y=!1,T=new U,w=()=>{const a=Promise.resolve(void 0);W=()=>{a.then(b)}};function b(){for(var a;a=M();){try{a.h.call(a.g)}catch(p){R(p)}var u=O;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}Y=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var C=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,u),o.removeEventListener("test",p,u)}catch{}return a})();function _(a){return/^[\s\xa0]*$/.test(a)}function He(a,u){E.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}g(He,E),He.prototype.init=function(a,u){const p=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(p=="mouseover"?u=a.fromElement:p=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&He.Z.h.call(this)},He.prototype.h=function(){He.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var _n="closure_listenable_"+(Math.random()*1e6|0),wg=0;function _g(a,u,p,y,k){this.listener=a,this.proxy=null,this.src=u,this.type=p,this.capture=!!y,this.ha=k,this.key=++wg,this.da=this.fa=!1}function Hs(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function zs(a,u,p){for(const y in a)u.call(p,a[y],y,a)}function bg(a,u){for(const p in a)u.call(void 0,a[p],p,a)}function Al(a){const u={};for(const p in a)u[p]=a[p];return u}const Rl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Pl(a,u){let p,y;for(let k=1;k<arguments.length;k++){y=arguments[k];for(p in y)a[p]=y[p];for(let A=0;A<Rl.length;A++)p=Rl[A],Object.prototype.hasOwnProperty.call(y,p)&&(a[p]=y[p])}}function qs(a){this.src=a,this.g={},this.h=0}qs.prototype.add=function(a,u,p,y,k){const A=a.toString();a=this.g[A],a||(a=this.g[A]=[],this.h++);const $=xo(a,u,y,k);return $>-1?(u=a[$],p||(u.fa=!1)):(u=new _g(u,this.src,A,!!y,k),u.fa=p,a.push(u)),u};function Po(a,u){const p=u.type;if(p in a.g){var y=a.g[p],k=Array.prototype.indexOf.call(y,u,void 0),A;(A=k>=0)&&Array.prototype.splice.call(y,k,1),A&&(Hs(u),a.g[p].length==0&&(delete a.g[p],a.h--))}}function xo(a,u,p,y){for(let k=0;k<a.length;++k){const A=a[k];if(!A.da&&A.listener==u&&A.capture==!!p&&A.ha==y)return k}return-1}var Lo="closure_lm_"+(Math.random()*1e6|0),Do={};function xl(a,u,p,y,k){if(Array.isArray(u)){for(let A=0;A<u.length;A++)xl(a,u[A],p,y,k);return null}return p=$l(p),a&&a[_n]?a.J(u,p,c(y)?!!y.capture:!1,k):Tg(a,u,p,!1,y,k)}function Tg(a,u,p,y,k,A){if(!u)throw Error("Invalid event type");const $=c(k)?!!k.capture:!!k;let J=No(a);if(J||(a[Lo]=J=new qs(a)),p=J.add(u,p,y,$,A),p.proxy)return p;if(y=Ig(),p.proxy=y,y.src=a,y.listener=p,a.addEventListener)C||(k=$),k===void 0&&(k=!1),a.addEventListener(u.toString(),y,k);else if(a.attachEvent)a.attachEvent(Dl(u.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Ig(){function a(p){return u.call(a.src,a.listener,p)}const u=Eg;return a}function Ll(a,u,p,y,k){if(Array.isArray(u))for(var A=0;A<u.length;A++)Ll(a,u[A],p,y,k);else y=c(y)?!!y.capture:!!y,p=$l(p),a&&a[_n]?(a=a.i,A=String(u).toString(),A in a.g&&(u=a.g[A],p=xo(u,p,y,k),p>-1&&(Hs(u[p]),Array.prototype.splice.call(u,p,1),u.length==0&&(delete a.g[A],a.h--)))):a&&(a=No(a))&&(u=a.g[u.toString()],a=-1,u&&(a=xo(u,p,y,k)),(p=a>-1?u[a]:null)&&$o(p))}function $o(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[_n])Po(u.i,a);else{var p=a.type,y=a.proxy;u.removeEventListener?u.removeEventListener(p,y,a.capture):u.detachEvent?u.detachEvent(Dl(p),y):u.addListener&&u.removeListener&&u.removeListener(y),(p=No(u))?(Po(p,a),p.h==0&&(p.src=null,u[Lo]=null)):Hs(a)}}}function Dl(a){return a in Do?Do[a]:Do[a]="on"+a}function Eg(a,u){if(a.da)a=!0;else{u=new He(u,this);const p=a.listener,y=a.ha||a.src;a.fa&&$o(a),a=p.call(y,u)}return a}function No(a){return a=a[Lo],a instanceof qs?a:null}var Mo="__closure_events_fn_"+(Math.random()*1e9>>>0);function $l(a){return typeof a=="function"?a:(a[Mo]||(a[Mo]=function(u){return a.handleEvent(u)}),a[Mo])}function De(){I.call(this),this.i=new qs(this),this.M=this,this.G=null}g(De,I),De.prototype[_n]=!0,De.prototype.removeEventListener=function(a,u,p,y){Ll(this,a,u,p,y)};function Ve(a,u){var p,y=a.G;if(y)for(p=[];y;y=y.G)p.push(y);if(a=a.M,y=u.type||u,typeof u=="string")u=new E(u,a);else if(u instanceof E)u.target=u.target||a;else{var k=u;u=new E(y,a),Pl(u,k)}k=!0;let A,$;if(p)for($=p.length-1;$>=0;$--)A=u.g=p[$],k=Ws(A,y,!0,u)&&k;if(A=u.g=a,k=Ws(A,y,!0,u)&&k,k=Ws(A,y,!1,u)&&k,p)for($=0;$<p.length;$++)A=u.g=p[$],k=Ws(A,y,!1,u)&&k}De.prototype.N=function(){if(De.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const p=a.g[u];for(let y=0;y<p.length;y++)Hs(p[y]);delete a.g[u],a.h--}}this.G=null},De.prototype.J=function(a,u,p,y){return this.i.add(String(a),u,!1,p,y)},De.prototype.K=function(a,u,p,y){return this.i.add(String(a),u,!0,p,y)};function Ws(a,u,p,y){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let k=!0;for(let A=0;A<u.length;++A){const $=u[A];if($&&!$.da&&$.capture==p){const J=$.listener,be=$.ha||$.src;$.fa&&Po(a.i,$),k=J.call(be,y)!==!1&&k}}return k&&!y.defaultPrevented}function Sg(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=d(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function Nl(a){a.g=Sg(()=>{a.g=null,a.i&&(a.i=!1,Nl(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class kg extends I{constructor(u,p){super(),this.m=u,this.l=p,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Nl(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Di(a){I.call(this),this.h=a,this.g={}}g(Di,I);var Ml=[];function Ol(a){zs(a.g,function(u,p){this.g.hasOwnProperty(p)&&$o(u)},a),a.g={}}Di.prototype.N=function(){Di.Z.N.call(this),Ol(this)},Di.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Oo=o.JSON.stringify,Cg=o.JSON.parse,Ag=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Vl(){}function Ul(){}var $i={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Vo(){E.call(this,"d")}g(Vo,E);function Uo(){E.call(this,"c")}g(Uo,E);var bn={},Fl=null;function Gs(){return Fl=Fl||new De}bn.Ia="serverreachability";function Bl(a){E.call(this,bn.Ia,a)}g(Bl,E);function Ni(a){const u=Gs();Ve(u,new Bl(u))}bn.STAT_EVENT="statevent";function jl(a,u){E.call(this,bn.STAT_EVENT,a),this.stat=u}g(jl,E);function Ue(a){const u=Gs();Ve(u,new jl(u,a))}bn.Ja="timingevent";function Hl(a,u){E.call(this,bn.Ja,a),this.size=u}g(Hl,E);function Mi(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function Oi(){this.g=!0}Oi.prototype.ua=function(){this.g=!1};function Rg(a,u,p,y,k,A){a.info(function(){if(a.g)if(A){var $="",J=A.split("&");for(let ae=0;ae<J.length;ae++){var be=J[ae].split("=");if(be.length>1){const Se=be[0];be=be[1];const at=Se.split("_");$=at.length>=2&&at[1]=="type"?$+(Se+"="+be+"&"):$+(Se+"=redacted&")}}}else $=null;else $=A;return"XMLHTTP REQ ("+y+") [attempt "+k+"]: "+u+`
`+p+`
`+$})}function Pg(a,u,p,y,k,A,$){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+k+"]: "+u+`
`+p+`
`+A+" "+$})}function Qn(a,u,p,y){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Lg(a,p)+(y?" "+y:"")})}function xg(a,u){a.info(function(){return"TIMEOUT: "+u})}Oi.prototype.info=function(){};function Lg(a,u){if(!a.g)return u;if(!u)return null;try{const A=JSON.parse(u);if(A){for(a=0;a<A.length;a++)if(Array.isArray(A[a])){var p=A[a];if(!(p.length<2)){var y=p[1];if(Array.isArray(y)&&!(y.length<1)){var k=y[0];if(k!="noop"&&k!="stop"&&k!="close")for(let $=1;$<y.length;$++)y[$]=""}}}}return Oo(A)}catch{return u}}var Ks={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},zl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ql;function Fo(){}g(Fo,Vl),Fo.prototype.g=function(){return new XMLHttpRequest},ql=new Fo;function Vi(a){return encodeURIComponent(String(a))}function Dg(a){var u=1;a=a.split(":");const p=[];for(;u>0&&a.length;)p.push(a.shift()),u--;return a.length&&p.push(a.join(":")),p}function Vt(a,u,p,y){this.j=a,this.i=u,this.l=p,this.S=y||1,this.V=new Di(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Wl}function Wl(){this.i=null,this.g="",this.h=!1}var Gl={},Bo={};function jo(a,u,p){a.M=1,a.A=Js(ot(u)),a.u=p,a.R=!0,Kl(a,null)}function Kl(a,u){a.F=Date.now(),Qs(a),a.B=ot(a.A);var p=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),au(p.i,"t",y),a.C=0,p=a.j.L,a.h=new Wl,a.g=Su(a.j,p?u:null,!a.u),a.P>0&&(a.O=new kg(d(a.Y,a,a.g),a.P)),u=a.V,p=a.g,y=a.ba;var k="readystatechange";Array.isArray(k)||(k&&(Ml[0]=k.toString()),k=Ml);for(let A=0;A<k.length;A++){const $=xl(p,k[A],y||u.handleEvent,!1,u.h||u);if(!$)break;u.g[$.key]=$}u=a.J?Al(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),Ni(),Rg(a.i,a.v,a.B,a.l,a.S,a.u)}Vt.prototype.ba=function(a){a=a.target;const u=this.O;u&&Bt(a)==3?u.j():this.Y(a)},Vt.prototype.Y=function(a){try{if(a==this.g)e:{const J=Bt(this.g),be=this.g.ya(),ae=this.g.ca();if(!(J<3)&&(J!=3||this.g&&(this.h.h||this.g.la()||pu(this.g)))){this.K||J!=4||be==7||(be==8||ae<=0?Ni(3):Ni(2)),Ho(this);var u=this.g.ca();this.X=u;var p=$g(this);if(this.o=u==200,Pg(this.i,this.v,this.B,this.l,this.S,J,u),this.o){if(this.U&&!this.L){t:{if(this.g){var y,k=this.g;if((y=k.g?k.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(y)){var A=y;break t}}A=null}if(a=A)Qn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,zo(this,a);else{this.o=!1,this.m=3,Ue(12),Tn(this),Ui(this);break e}}if(this.R){a=!0;let Se;for(;!this.K&&this.C<p.length;)if(Se=Ng(this,p),Se==Bo){J==4&&(this.m=4,Ue(14),a=!1),Qn(this.i,this.l,null,"[Incomplete Response]");break}else if(Se==Gl){this.m=4,Ue(15),Qn(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else Qn(this.i,this.l,Se,null),zo(this,Se);if(Ql(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),J!=4||p.length!=0||this.h.h||(this.m=1,Ue(16),a=!1),this.o=this.o&&a,!a)Qn(this.i,this.l,p,"[Invalid Chunked Response]"),Tn(this),Ui(this);else if(p.length>0&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.aa&&!$.P&&($.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),Xo($),$.P=!0,Ue(11))}}else Qn(this.i,this.l,p,null),zo(this,p);J==4&&Tn(this),this.o&&!this.K&&(J==4?bu(this.j,this):(this.o=!1,Qs(this)))}else Qg(this.g),u==400&&p.indexOf("Unknown SID")>0?(this.m=3,Ue(12)):(this.m=0,Ue(13)),Tn(this),Ui(this)}}}catch{}finally{}};function $g(a){if(!Ql(a))return a.g.la();const u=pu(a.g);if(u==="")return"";let p="";const y=u.length,k=Bt(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Tn(a),Ui(a),"";a.h.i=new o.TextDecoder}for(let A=0;A<y;A++)a.h.h=!0,p+=a.h.i.decode(u[A],{stream:!(k&&A==y-1)});return u.length=0,a.h.g+=p,a.C=0,a.h.g}function Ql(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Ng(a,u){var p=a.C,y=u.indexOf(`
`,p);return y==-1?Bo:(p=Number(u.substring(p,y)),isNaN(p)?Gl:(y+=1,y+p>u.length?Bo:(u=u.slice(y,y+p),a.C=y+p,u)))}Vt.prototype.cancel=function(){this.K=!0,Tn(this)};function Qs(a){a.T=Date.now()+a.H,Jl(a,a.H)}function Jl(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Mi(d(a.aa,a),u)}function Ho(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Vt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(xg(this.i,this.B),this.M!=2&&(Ni(),Ue(17)),Tn(this),this.m=2,Ui(this)):Jl(this,this.T-a)};function Ui(a){a.j.I==0||a.K||bu(a.j,a)}function Tn(a){Ho(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,Ol(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function zo(a,u){try{var p=a.j;if(p.I!=0&&(p.g==a||qo(p.h,a))){if(!a.L&&qo(p.h,a)&&p.I==3){try{var y=p.Ba.g.parse(u)}catch{y=null}if(Array.isArray(y)&&y.length==3){var k=y;if(k[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)tr(p),Zs(p);else break e;Yo(p),Ue(18)}}else p.xa=k[1],0<p.xa-p.K&&k[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=Mi(d(p.Va,p),6e3));Zl(p.h)<=1&&p.ta&&(p.ta=void 0)}else En(p,11)}else if((a.L||p.g==a)&&tr(p),!_(u))for(k=p.Ba.g.parse(u),u=0;u<k.length;u++){let ae=k[u];const Se=ae[0];if(!(Se<=p.K))if(p.K=Se,ae=ae[1],p.I==2)if(ae[0]=="c"){p.M=ae[1],p.ba=ae[2];const at=ae[3];at!=null&&(p.ka=at,p.j.info("VER="+p.ka));const Sn=ae[4];Sn!=null&&(p.za=Sn,p.j.info("SVER="+p.za));const jt=ae[5];jt!=null&&typeof jt=="number"&&jt>0&&(y=1.5*jt,p.O=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const Ht=a.g;if(Ht){const ir=Ht.g?Ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ir){var A=y.h;A.g||ir.indexOf("spdy")==-1&&ir.indexOf("quic")==-1&&ir.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Wo(A,A.h),A.h=null))}if(y.G){const Zo=Ht.g?Ht.g.getResponseHeader("X-HTTP-Session-Id"):null;Zo&&(y.wa=Zo,ce(y.J,y.G,Zo))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),y=p;var $=a;if(y.na=Eu(y,y.L?y.ba:null,y.W),$.L){eu(y.h,$);var J=$,be=y.O;be&&(J.H=be),J.D&&(Ho(J),Qs(J)),y.g=$}else wu(y);p.i.length>0&&er(p)}else ae[0]!="stop"&&ae[0]!="close"||En(p,7);else p.I==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?En(p,7):Jo(p):ae[0]!="noop"&&p.l&&p.l.qa(ae),p.A=0)}}Ni(4)}catch{}}var Mg=class{constructor(a,u){this.g=a,this.map=u}};function Yl(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Xl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Zl(a){return a.h?1:a.g?a.g.size:0}function qo(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Wo(a,u){a.g?a.g.add(u):a.h=u}function eu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Yl.prototype.cancel=function(){if(this.i=tu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function tu(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const p of a.g.values())u=u.concat(p.G);return u}return S(a.i)}var nu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Og(a,u){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const y=a[p].indexOf("=");let k,A=null;y>=0?(k=a[p].substring(0,y),A=a[p].substring(y+1)):k=a[p],u(k,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Ut(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof Ut?(this.l=a.l,Fi(this,a.j),this.o=a.o,this.g=a.g,Bi(this,a.u),this.h=a.h,Go(this,cu(a.i)),this.m=a.m):a&&(u=String(a).match(nu))?(this.l=!1,Fi(this,u[1]||"",!0),this.o=ji(u[2]||""),this.g=ji(u[3]||"",!0),Bi(this,u[4]),this.h=ji(u[5]||"",!0),Go(this,u[6]||"",!0),this.m=ji(u[7]||"")):(this.l=!1,this.i=new zi(null,this.l))}Ut.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(Hi(u,iu,!0),":");var p=this.g;return(p||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Hi(u,iu,!0),"@"),a.push(Vi(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Hi(p,p.charAt(0)=="/"?Fg:Ug,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Hi(p,jg)),a.join("")},Ut.prototype.resolve=function(a){const u=ot(this);let p=!!a.j;p?Fi(u,a.j):p=!!a.o,p?u.o=a.o:p=!!a.g,p?u.g=a.g:p=a.u!=null;var y=a.h;if(p)Bi(u,a.u);else if(p=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var k=u.h.lastIndexOf("/");k!=-1&&(y=u.h.slice(0,k+1)+y)}if(k=y,k==".."||k==".")y="";else if(k.indexOf("./")!=-1||k.indexOf("/.")!=-1){y=k.lastIndexOf("/",0)==0,k=k.split("/");const A=[];for(let $=0;$<k.length;){const J=k[$++];J=="."?y&&$==k.length&&A.push(""):J==".."?((A.length>1||A.length==1&&A[0]!="")&&A.pop(),y&&$==k.length&&A.push("")):(A.push(J),y=!0)}y=A.join("/")}else y=k}return p?u.h=y:p=a.i.toString()!=="",p?Go(u,cu(a.i)):p=!!a.m,p&&(u.m=a.m),u};function ot(a){return new Ut(a)}function Fi(a,u,p){a.j=p?ji(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Bi(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function Go(a,u,p){u instanceof zi?(a.i=u,Hg(a.i,a.l)):(p||(u=Hi(u,Bg)),a.i=new zi(u,a.l))}function ce(a,u,p){a.i.set(u,p)}function Js(a){return ce(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function ji(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Hi(a,u,p){return typeof a=="string"?(a=encodeURI(a).replace(u,Vg),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Vg(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var iu=/[#\/\?@]/g,Ug=/[#\?:]/g,Fg=/[#\?]/g,Bg=/[#\?@]/g,jg=/#/g;function zi(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function In(a){a.g||(a.g=new Map,a.h=0,a.i&&Og(a.i,function(u,p){a.add(decodeURIComponent(u.replace(/\+/g," ")),p)}))}n=zi.prototype,n.add=function(a,u){In(this),this.i=null,a=Jn(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(u),this.h+=1,this};function su(a,u){In(a),u=Jn(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function ru(a,u){return In(a),u=Jn(a,u),a.g.has(u)}n.forEach=function(a,u){In(this),this.g.forEach(function(p,y){p.forEach(function(k){a.call(u,k,y,this)},this)},this)};function ou(a,u){In(a);let p=[];if(typeof u=="string")ru(a,u)&&(p=p.concat(a.g.get(Jn(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)p=p.concat(a[u]);return p}n.set=function(a,u){return In(this),this.i=null,a=Jn(this,a),ru(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=ou(this,a),a.length>0?String(a[0]):u):u};function au(a,u,p){su(a,u),p.length>0&&(a.i=null,a.g.set(Jn(a,u),S(p)),a.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let y=0;y<u.length;y++){var p=u[y];const k=Vi(p);p=ou(this,p);for(let A=0;A<p.length;A++){let $=k;p[A]!==""&&($+="="+Vi(p[A])),a.push($)}}return this.i=a.join("&")};function cu(a){const u=new zi;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function Jn(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function Hg(a,u){u&&!a.j&&(In(a),a.i=null,a.g.forEach(function(p,y){const k=y.toLowerCase();y!=k&&(su(this,y),au(this,k,p))},a)),a.j=u}function zg(a,u){const p=new Oi;if(o.Image){const y=new Image;y.onload=m(Ft,p,"TestLoadImage: loaded",!0,u,y),y.onerror=m(Ft,p,"TestLoadImage: error",!1,u,y),y.onabort=m(Ft,p,"TestLoadImage: abort",!1,u,y),y.ontimeout=m(Ft,p,"TestLoadImage: timeout",!1,u,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else u(!1)}function qg(a,u){const p=new Oi,y=new AbortController,k=setTimeout(()=>{y.abort(),Ft(p,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:y.signal}).then(A=>{clearTimeout(k),A.ok?Ft(p,"TestPingServer: ok",!0,u):Ft(p,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(k),Ft(p,"TestPingServer: error",!1,u)})}function Ft(a,u,p,y,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),y(p)}catch{}}function Wg(){this.g=new Ag}function Ko(a){this.i=a.Sb||null,this.h=a.ab||!1}g(Ko,Vl),Ko.prototype.g=function(){return new Ys(this.i,this.h)};function Ys(a,u){De.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(Ys,De),n=Ys.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,Wi(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,qi(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Wi(this)),this.g&&(this.readyState=3,Wi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;lu(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function lu(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?qi(this):Wi(this),this.readyState==3&&lu(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,qi(this))},n.Na=function(a){this.g&&(this.response=a,qi(this))},n.ga=function(){this.g&&qi(this)};function qi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Wi(a)}n.setRequestHeader=function(a,u){this.A.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var p=u.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=u.next();return a.join(`\r
`)};function Wi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ys.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function uu(a){let u="";return zs(a,function(p,y){u+=y,u+=":",u+=p,u+=`\r
`}),u}function Qo(a,u,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=uu(p),typeof a=="string"?p!=null&&Vi(p):ce(a,u,p))}function he(a){De.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(he,De);var Gg=/^https?$/i,Kg=["POST","PUT"];n=he.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,u,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ql.g(),this.g.onreadystatechange=v(d(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(A){du(this,A);return}if(a=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var k in y)p.set(k,y[k]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const A of y.keys())p.set(A,y.get(A));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(A=>A.toLowerCase()=="content-type"),k=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Kg,u,void 0)>=0)||y||k||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,$]of p)this.g.setRequestHeader(A,$);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(A){du(this,A)}};function du(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,hu(a),Xs(a)}function hu(a){a.A||(a.A=!0,Ve(a,"complete"),Ve(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Ve(this,"complete"),Ve(this,"abort"),Xs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xs(this,!0)),he.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?fu(this):this.Xa())},n.Xa=function(){fu(this)};function fu(a){if(a.h&&typeof r<"u"){if(a.v&&Bt(a)==4)setTimeout(a.Ca.bind(a),0);else if(Ve(a,"readystatechange"),Bt(a)==4){a.h=!1;try{const A=a.ca();e:switch(A){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var p;if(!(p=u)){var y;if(y=A===0){let $=String(a.D).match(nu)[1]||null;!$&&o.self&&o.self.location&&($=o.self.location.protocol.slice(0,-1)),y=!Gg.test($?$.toLowerCase():"")}p=y}if(p)Ve(a,"complete"),Ve(a,"success");else{a.o=6;try{var k=Bt(a)>2?a.g.statusText:""}catch{k=""}a.l=k+" ["+a.ca()+"]",hu(a)}}finally{Xs(a)}}}}function Xs(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,u||Ve(a,"ready");try{p.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Bt(a){return a.g?a.g.readyState:0}n.ca=function(){try{return Bt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Cg(u)}};function pu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Qg(a){const u={};a=(a.g&&Bt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(_(a[y]))continue;var p=Dg(a[y]);const k=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const A=u[k]||[];u[k]=A,A.push(p)}bg(u,function(y){return y.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gi(a,u,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||u}function mu(a){this.za=0,this.i=[],this.j=new Oi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Gi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Gi("baseRetryDelayMs",5e3,a),this.Za=Gi("retryDelaySeedMs",1e4,a),this.Ta=Gi("forwardChannelMaxRetries",2,a),this.va=Gi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Yl(a&&a.concurrentRequestLimit),this.Ba=new Wg,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=mu.prototype,n.ka=8,n.I=1,n.connect=function(a,u,p,y){Ue(0),this.W=a,this.H=u||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.J=Eu(this,null,this.W),er(this)};function Jo(a){if(gu(a),a.I==3){var u=a.V++,p=ot(a.J);if(ce(p,"SID",a.M),ce(p,"RID",u),ce(p,"TYPE","terminate"),Ki(a,p),u=new Vt(a,a.j,u),u.M=2,u.A=Js(ot(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=u.A,p=!0),p||(u.g=Su(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Qs(u)}Iu(a)}function Zs(a){a.g&&(Xo(a),a.g.cancel(),a.g=null)}function gu(a){Zs(a),a.v&&(o.clearTimeout(a.v),a.v=null),tr(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function er(a){if(!Xl(a.h)&&!a.m){a.m=!0;var u=a.Ea;W||w(),Y||(W(),Y=!0),T.add(u,a),a.D=0}}function Jg(a,u){return Zl(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Mi(d(a.Ea,a,u),Tu(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const k=new Vt(this,this.j,a);let A=this.o;if(this.U&&(A?(A=Al(A),Pl(A,this.U)):A=this.U),this.u!==null||this.R||(k.J=A,A=null),this.S)e:{for(var u=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(u+=y,u>4096){u=p;break e}if(u===4096||p===this.i.length-1){u=p+1;break e}}u=1e3}else u=1e3;u=vu(this,k,u),p=ot(this.J),ce(p,"RID",a),ce(p,"CVER",22),this.G&&ce(p,"X-HTTP-Session-Id",this.G),Ki(this,p),A&&(this.R?u="headers="+Vi(uu(A))+"&"+u:this.u&&Qo(p,this.u,A)),Wo(this.h,k),this.Ra&&ce(p,"TYPE","init"),this.S?(ce(p,"$req",u),ce(p,"SID","null"),k.U=!0,jo(k,p,null)):jo(k,p,u),this.I=2}}else this.I==3&&(a?yu(this,a):this.i.length==0||Xl(this.h)||yu(this))};function yu(a,u){var p;u?p=u.l:p=a.V++;const y=ot(a.J);ce(y,"SID",a.M),ce(y,"RID",p),ce(y,"AID",a.K),Ki(a,y),a.u&&a.o&&Qo(y,a.u,a.o),p=new Vt(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),u&&(a.i=u.G.concat(a.i)),u=vu(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Wo(a.h,p),jo(p,y,u)}function Ki(a,u){a.H&&zs(a.H,function(p,y){ce(u,y,p)}),a.l&&zs({},function(p,y){ce(u,y,p)})}function vu(a,u,p){p=Math.min(a.i.length,p);const y=a.l?d(a.l.Ka,a.l,a):null;e:{var k=a.i;let J=-1;for(;;){const be=["count="+p];J==-1?p>0?(J=k[0].g,be.push("ofs="+J)):J=0:be.push("ofs="+J);let ae=!0;for(let Se=0;Se<p;Se++){var A=k[Se].g;const at=k[Se].map;if(A-=J,A<0)J=Math.max(0,k[Se].g-100),ae=!1;else try{A="req"+A+"_"||"";try{var $=at instanceof Map?at:Object.entries(at);for(const[Sn,jt]of $){let Ht=jt;c(jt)&&(Ht=Oo(jt)),be.push(A+Sn+"="+encodeURIComponent(Ht))}}catch(Sn){throw be.push(A+"type="+encodeURIComponent("_badmap")),Sn}}catch{y&&y(at)}}if(ae){$=be.join("&");break e}}$=void 0}return a=a.i.splice(0,p),u.G=a,$}function wu(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;W||w(),Y||(W(),Y=!0),T.add(u,a),a.A=0}}function Yo(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Mi(d(a.Da,a),Tu(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,_u(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Mi(d(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ue(10),Zs(this),_u(this))};function Xo(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function _u(a){a.g=new Vt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=ot(a.na);ce(u,"RID","rpc"),ce(u,"SID",a.M),ce(u,"AID",a.K),ce(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&ce(u,"TO",a.ia),ce(u,"TYPE","xmlhttp"),Ki(a,u),a.u&&a.o&&Qo(u,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=Js(ot(u)),p.u=null,p.R=!0,Kl(p,a)}n.Va=function(){this.C!=null&&(this.C=null,Zs(this),Yo(this),Ue(19))};function tr(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function bu(a,u){var p=null;if(a.g==u){tr(a),Xo(a),a.g=null;var y=2}else if(qo(a.h,u))p=u.G,eu(a.h,u),y=1;else return;if(a.I!=0){if(u.o)if(y==1){p=u.u?u.u.length:0,u=Date.now()-u.F;var k=a.D;y=Gs(),Ve(y,new Hl(y,p)),er(a)}else wu(a);else if(k=u.m,k==3||k==0&&u.X>0||!(y==1&&Jg(a,u)||y==2&&Yo(a)))switch(p&&p.length>0&&(u=a.h,u.i=u.i.concat(p)),k){case 1:En(a,5);break;case 4:En(a,10);break;case 3:En(a,6);break;default:En(a,2)}}}function Tu(a,u){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*u}function En(a,u){if(a.j.info("Error code "+u),u==2){var p=d(a.bb,a),y=a.Ua;const k=!y;y=new Ut(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Fi(y,"https"),Js(y),k?zg(y.toString(),p):qg(y.toString(),p)}else Ue(2);a.I=0,a.l&&a.l.pa(u),Iu(a),gu(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Ue(2)):(this.j.info("Failed to ping google.com"),Ue(1))};function Iu(a){if(a.I=0,a.ja=[],a.l){const u=tu(a.h);(u.length!=0||a.i.length!=0)&&(x(a.ja,u),x(a.ja,a.i),a.h.i.length=0,S(a.i),a.i.length=0),a.l.oa()}}function Eu(a,u,p){var y=p instanceof Ut?ot(p):new Ut(p);if(y.g!="")u&&(y.g=u+"."+y.g),Bi(y,y.u);else{var k=o.location;y=k.protocol,u=u?u+"."+k.hostname:k.hostname,k=+k.port;const A=new Ut(null);y&&Fi(A,y),u&&(A.g=u),k&&Bi(A,k),p&&(A.h=p),y=A}return p=a.G,u=a.wa,p&&u&&ce(y,p,u),ce(y,"VER",a.ka),Ki(a,y),y}function Su(a,u,p){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new he(new Ko({ab:p})):new he(a.ma),u.Fa(a.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ku(){}n=ku.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function nr(){}nr.prototype.g=function(a,u){return new qe(a,u)};function qe(a,u){De.call(this),this.g=new mu(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!_(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!_(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Yn(this)}g(qe,De),qe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},qe.prototype.close=function(){Jo(this.g)},qe.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=Oo(a),a=p);u.i.push(new Mg(u.Ya++,a)),u.I==3&&er(u)},qe.prototype.N=function(){this.g.l=null,delete this.j,Jo(this.g),delete this.g,qe.Z.N.call(this)};function Cu(a){Vo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const p in u){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}g(Cu,Vo);function Au(){Uo.call(this),this.status=1}g(Au,Uo);function Yn(a){this.g=a}g(Yn,ku),Yn.prototype.ra=function(){Ve(this.g,"a")},Yn.prototype.qa=function(a){Ve(this.g,new Cu(a))},Yn.prototype.pa=function(a){Ve(this.g,new Au)},Yn.prototype.oa=function(){Ve(this.g,"b")},nr.prototype.createWebChannel=nr.prototype.g,qe.prototype.send=qe.prototype.o,qe.prototype.open=qe.prototype.m,qe.prototype.close=qe.prototype.close,sp=function(){return new nr},ip=function(){return Gs()},np=bn,Da={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ks.NO_ERROR=0,Ks.TIMEOUT=8,Ks.HTTP_ERROR=6,Ir=Ks,zl.COMPLETE="complete",tp=zl,Ul.EventType=$i,$i.OPEN="a",$i.CLOSE="b",$i.ERROR="c",$i.MESSAGE="d",De.prototype.listen=De.prototype.J,ts=Ul,he.prototype.listenOnce=he.prototype.K,he.prototype.getLastError=he.prototype.Ha,he.prototype.getLastErrorCode=he.prototype.ya,he.prototype.getStatus=he.prototype.ca,he.prototype.getResponseJson=he.prototype.La,he.prototype.getResponseText=he.prototype.la,he.prototype.send=he.prototype.ea,he.prototype.setWithCredentials=he.prototype.Fa,ep=he}).apply(typeof rr<"u"?rr:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ne.UNAUTHENTICATED=new Ne(null),Ne.GOOGLE_CREDENTIALS=new Ne("google-credentials-uid"),Ne.FIRST_PARTY=new Ne("first-party-uid"),Ne.MOCK_USER=new Ne("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ai="12.10.0";function ub(n){Ai=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Bn=new cc("@firebase/firestore");function Zn(){return Bn.logLevel}function V(n,...e){if(Bn.logLevel<=X.DEBUG){const t=e.map(Lc);Bn.debug(`Firestore (${Ai}): ${n}`,...t)}}function Mt(n,...e){if(Bn.logLevel<=X.ERROR){const t=e.map(Lc);Bn.error(`Firestore (${Ai}): ${n}`,...t)}}function jn(n,...e){if(Bn.logLevel<=X.WARN){const t=e.map(Lc);Bn.warn(`Firestore (${Ai}): ${n}`,...t)}}function Lc(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,rp(n,i,t)}function rp(n,e,t){let i=`FIRESTORE (${Ai}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Mt(i),new Error(i)}function de(n,e,t,i){let s="Unexpected state";typeof t=="string"?s=t:i=t,n||rp(e,s,i)}function te(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Et{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class db{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ne.UNAUTHENTICATED)))}shutdown(){}}class hb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class fb{constructor(e){this.t=e,this.currentUser=Ne.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){de(this.o===void 0,42304);let i=this.i;const s=l=>this.i!==i?(i=this.i,t(l)):Promise.resolve();let r=new oi;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new oi,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=r;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new oi)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(de(typeof i.accessToken=="string",31837,{l:i}),new op(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string",2055,{h:e}),new Ne(e)}}class pb{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Ne.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class mb{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new pb(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ne.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class cd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gb{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Be(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){de(this.o===void 0,3512);const i=r=>{r.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable((()=>i(r)))};const s=r=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>s(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?s(r):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new cd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(de(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new cd(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yb(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=yb(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%62))}return i}}function Z(n,e){return n<e?-1:n>e?1:0}function $a(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const s=n.charAt(i),r=e.charAt(i);if(s!==r)return ca(s)===ca(r)?Z(s,r):ca(s)?1:-1}return Z(n.length,e.length)}const vb=55296,wb=57343;function ca(n){const e=n.charCodeAt(0);return e>=vb&&e<=wb}function mi(n,e,t){return n.length===e.length&&n.every(((i,s)=>t(i,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld="__name__";class lt{constructor(e,t,i){t===void 0?t=0:t>e.length&&Q(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&Q(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return lt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof lt?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=lt.compareSegments(e.get(s),t.get(s));if(r!==0)return r}return Z(e.length,t.length)}static compareSegments(e,t){const i=lt.isNumericId(e),s=lt.isNumericId(t);return i&&!s?-1:!i&&s?1:i&&s?lt.extractNumericId(e).compare(lt.extractNumericId(t)):$a(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return rn.fromString(e.substring(4,e.length-2))}}class ue extends lt{construct(e,t,i){return new ue(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new j(N.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((s=>s.length>0)))}return new ue(t)}static emptyPath(){return new ue([])}}const _b=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class je extends lt{construct(e,t,i){return new je(e,t,i)}static isValidIdentifier(e){return _b.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),je.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ld}static keyField(){return new je([ld])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new j(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new j(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new j(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(i+=c,s++):(r(),s++)}if(r(),o)throw new j(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new je(t)}static emptyPath(){return new je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(ue.fromString(e))}static fromName(e){return new z(ue.fromString(e).popFirst(5))}static empty(){return new z(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ue.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new ue(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bb(n,e,t){if(!t)throw new j(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Tb(n,e,t,i){if(e===!0&&i===!0)throw new j(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ud(n){if(z.isDocumentKey(n))throw new j(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ib(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Eb(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Q(12329,{type:typeof n})}function Er(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Eb(n);throw new j(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function _e(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ds(n,e){if(!Ib(n))throw new j(N.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const s=e[i].typeString,r="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const o=n[i];if(s&&typeof o!==s){t=`JSON field '${i}' must be a ${s}.`;break}if(r!==void 0&&o!==r.value){t=`Expected '${i}' field to equal '${r.value}'`;break}}if(t)throw new j(N.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd=-62135596800,hd=1e6;class we{static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*hd);return new we(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<dd)throw new j(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/hd}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:we._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ds(e,we._jsonSchema))return new we(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-dd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}we._jsonSchemaVersion="firestore/timestamp/1.0",we._jsonSchema={type:_e("string",we._jsonSchemaVersion),seconds:_e("number"),nanoseconds:_e("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{static fromTimestamp(e){return new G(e)}static min(){return new G(new we(0,0))}static max(){return new G(new we(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ws=-1;function Sb(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=G.fromTimestamp(i===1e9?new we(t+1,0):new we(t,i));return new dn(s,z.empty(),e)}function kb(n){return new dn(n.readTime,n.key,ws)}class dn{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new dn(G.min(),z.empty(),ws)}static max(){return new dn(G.max(),z.empty(),ws)}}function Cb(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=z.comparator(n.documentKey,e.documentKey),t!==0?t:Z(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Rb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function co(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==Ab)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D(((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):D.reject(t)}static resolve(e){return new D(((t,i)=>{t(e)}))}static reject(e){return new D(((t,i)=>{i(e)}))}static waitFor(e){return new D(((t,i)=>{let s=0,r=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++r,o&&r===s&&t()}),(l=>i(l)))})),o=!0,r===s&&t()}))}static or(e){let t=D.resolve(!1);for(const i of e)t=t.next((s=>s?D.resolve(s):i()));return t}static forEach(e,t){const i=[];return e.forEach(((s,r)=>{i.push(t.call(this,s,r))})),this.waitFor(i)}static mapArray(e,t){return new D(((i,s)=>{const r=e.length,o=new Array(r);let c=0;for(let l=0;l<r;l++){const d=l;t(e[d]).next((m=>{o[d]=m,++c,c===r&&i(o)}),(m=>s(m)))}}))}static doWhile(e,t){return new D(((i,s)=>{const r=()=>{e()===!0?t().next((()=>{r()}),s):i()};r()}))}}function Pb(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ri(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class lo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}lo.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb=-1;function uo(n){return n==null}function Na(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp="";function Lb(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=fd(e)),e=Db(n.get(t),e);return fd(e)}function Db(n,e){let t=e;const i=n.length;for(let s=0;s<i;s++){const r=n.charAt(s);switch(r){case"\0":t+="";break;case cp:t+="";break;default:t+=r}}return t}function fd(n){return n+cp+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function $s(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function $b(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,t){this.comparator=e,this.root=t||Pe.EMPTY}insert(e,t){return new ge(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pe.BLACK,null,null))}remove(e){return new ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new or(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new or(this.root,e,this.comparator,!1)}getReverseIterator(){return new or(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new or(this.root,e,this.comparator,!0)}}class or{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pe{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??Pe.RED,this.left=s??Pe.EMPTY,this.right=r??Pe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new Pe(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Pe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Pe.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}}Pe.EMPTY=null,Pe.RED=!0,Pe.BLACK=!1;Pe.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,t,i,s,r){return this}insert(e,t,i){return new Pe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.comparator=e,this.data=new ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new md(this.data.getIterator())}getIteratorFrom(e){return new md(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof Ie)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ie(this.comparator);return t.data=e,t}}class md{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.fields=e,e.sort(je.comparator)}static empty(){return new en([])}unionWith(e){let t=new Ie(je.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new en(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return mi(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class lp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new lp("Invalid base64 string: "+r):r}})(e);return new Le(t)}static fromUint8Array(e){const t=(function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r})(e);return new Le(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Le.EMPTY_BYTE_STRING=new Le("");const Nb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hn(n){if(de(!!n,39018),typeof n=="string"){let e=0;const t=Nb.exec(n);if(de(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:me(n.seconds),nanos:me(n.nanos)}}function me(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function fn(n){return typeof n=="string"?Le.fromBase64String(n):Le.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up="server_timestamp",dp="__type__",hp="__previous_value__",fp="__local_write_time__";function Dc(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[dp])==null?void 0:i.stringValue)===up}function ho(n){const e=n.mapValue.fields[hp];return Dc(e)?ho(e):e}function _s(n){const e=hn(n.mapValue.fields[fp].timestampValue);return new we(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,t,i,s,r,o,c,l,d,m,g){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=m,this.apiKey=g}}const zr="(default)";class bs{constructor(e,t){this.projectId=e,this.database=t||zr}static empty(){return new bs("","")}get isDefaultDatabase(){return this.database===zr}isEqual(e){return e instanceof bs&&e.projectId===this.projectId&&e.database===this.database}}function Ob(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new j(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bs(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb="__type__",Ub="__max__",ar={mapValue:{}},Fb="__vector__",Ma="value";function pn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Dc(n)?4:jb(n)?9007199254740991:Bb(n)?10:11:Q(28295,{value:n})}function Tt(n,e){if(n===e)return!0;const t=pn(n);if(t!==pn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return _s(n).isEqual(_s(e));case 3:return(function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=hn(s.timestampValue),c=hn(r.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,r){return fn(s.bytesValue).isEqual(fn(r.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,r){return me(s.geoPointValue.latitude)===me(r.geoPointValue.latitude)&&me(s.geoPointValue.longitude)===me(r.geoPointValue.longitude)})(n,e);case 2:return(function(s,r){if("integerValue"in s&&"integerValue"in r)return me(s.integerValue)===me(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=me(s.doubleValue),c=me(r.doubleValue);return o===c?Na(o)===Na(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return mi(n.arrayValue.values||[],e.arrayValue.values||[],Tt);case 10:case 11:return(function(s,r){const o=s.mapValue.fields||{},c=r.mapValue.fields||{};if(pd(o)!==pd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Tt(o[l],c[l])))return!1;return!0})(n,e);default:return Q(52216,{left:n})}}function Ts(n,e){return(n.values||[]).find((t=>Tt(t,e)))!==void 0}function gi(n,e){if(n===e)return 0;const t=pn(n),i=pn(e);if(t!==i)return Z(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Z(n.booleanValue,e.booleanValue);case 2:return(function(r,o){const c=me(r.integerValue||r.doubleValue),l=me(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return gd(n.timestampValue,e.timestampValue);case 4:return gd(_s(n),_s(e));case 5:return $a(n.stringValue,e.stringValue);case 6:return(function(r,o){const c=fn(r),l=fn(o);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(r,o){const c=r.split("/"),l=o.split("/");for(let d=0;d<c.length&&d<l.length;d++){const m=Z(c[d],l[d]);if(m!==0)return m}return Z(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(r,o){const c=Z(me(r.latitude),me(o.latitude));return c!==0?c:Z(me(r.longitude),me(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return yd(n.arrayValue,e.arrayValue);case 10:return(function(r,o){var v,S,x,L;const c=r.fields||{},l=o.fields||{},d=(v=c[Ma])==null?void 0:v.arrayValue,m=(S=l[Ma])==null?void 0:S.arrayValue,g=Z(((x=d==null?void 0:d.values)==null?void 0:x.length)||0,((L=m==null?void 0:m.values)==null?void 0:L.length)||0);return g!==0?g:yd(d,m)})(n.mapValue,e.mapValue);case 11:return(function(r,o){if(r===ar.mapValue&&o===ar.mapValue)return 0;if(r===ar.mapValue)return 1;if(o===ar.mapValue)return-1;const c=r.fields||{},l=Object.keys(c),d=o.fields||{},m=Object.keys(d);l.sort(),m.sort();for(let g=0;g<l.length&&g<m.length;++g){const v=$a(l[g],m[g]);if(v!==0)return v;const S=gi(c[l[g]],d[m[g]]);if(S!==0)return S}return Z(l.length,m.length)})(n.mapValue,e.mapValue);default:throw Q(23264,{he:t})}}function gd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Z(n,e);const t=hn(n),i=hn(e),s=Z(t.seconds,i.seconds);return s!==0?s:Z(t.nanos,i.nanos)}function yd(n,e){const t=n.values||[],i=e.values||[];for(let s=0;s<t.length&&s<i.length;++s){const r=gi(t[s],i[s]);if(r)return r}return Z(t.length,i.length)}function yi(n){return Oa(n)}function Oa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=hn(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return fn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return z.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",s=!0;for(const r of t.values||[])s?s=!1:i+=",",i+=Oa(r);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${Oa(t.fields[o])}`;return s+"}"})(n.mapValue):Q(61005,{value:n})}function Sr(n){switch(pn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ho(n);return e?16+Sr(e):16;case 5:return 2*n.stringValue.length;case 6:return fn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((s,r)=>s+Sr(r)),0)})(n.arrayValue);case 10:case 11:return(function(i){let s=0;return $s(i.fields,((r,o)=>{s+=r.length+Sr(o)})),s})(n.mapValue);default:throw Q(13486,{value:n})}}function Va(n){return!!n&&"integerValue"in n}function $c(n){return!!n&&"arrayValue"in n}function vd(n){return!!n&&"nullValue"in n}function wd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function la(n){return!!n&&"mapValue"in n}function Bb(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Vb])==null?void 0:i.stringValue)===Fb}function ds(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return $s(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=ds(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ds(n.arrayValue.values[t]);return e}return{...n}}function jb(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Ub}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.value=e}static empty(){return new dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!la(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ds(t)}setAll(e){let t=je.emptyPath(),i={},s=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,i,s),i={},s=[],t=c.popLast()}o?i[c.lastSegment()]=ds(o):s.push(c.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());la(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Tt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];la(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){$s(t,((s,r)=>e[s]=r));for(const s of i)delete e[s]}clone(){return new dt(ds(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,t,i,s,r,o,c){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Me(e,0,G.min(),G.min(),G.min(),dt.empty(),0)}static newFoundDocument(e,t,i,s){return new Me(e,1,t,G.min(),i,s,0)}static newNoDocument(e,t){return new Me(e,2,t,G.min(),G.min(),dt.empty(),0)}static newUnknownDocument(e,t){return new Me(e,3,t,G.min(),G.min(),dt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Me&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Me(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class qr{constructor(e,t){this.position=e,this.inclusive=t}}function _d(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],o=n.position[s];if(r.field.isKeyField()?i=z.comparator(z.fromName(o.referenceValue),t.key):i=gi(o,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function bd(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Tt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Wr{constructor(e,t="asc"){this.field=e,this.dir=t}}function Hb(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class pp{}class Te extends pp{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new qb(e,t,i):t==="array-contains"?new Kb(e,i):t==="in"?new Qb(e,i):t==="not-in"?new Jb(e,i):t==="array-contains-any"?new Yb(e,i):new Te(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new Wb(e,i):new Gb(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(gi(t,this.value)):t!==null&&pn(this.value)===pn(t)&&this.matchesComparison(gi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class It extends pp{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new It(e,t)}matches(e){return mp(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function mp(n){return n.op==="and"}function gp(n){return zb(n)&&mp(n)}function zb(n){for(const e of n.filters)if(e instanceof It)return!1;return!0}function Ua(n){if(n instanceof Te)return n.field.canonicalString()+n.op.toString()+yi(n.value);if(gp(n))return n.filters.map((e=>Ua(e))).join(",");{const e=n.filters.map((t=>Ua(t))).join(",");return`${n.op}(${e})`}}function yp(n,e){return n instanceof Te?(function(i,s){return s instanceof Te&&i.op===s.op&&i.field.isEqual(s.field)&&Tt(i.value,s.value)})(n,e):n instanceof It?(function(i,s){return s instanceof It&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce(((r,o,c)=>r&&yp(o,s.filters[c])),!0):!1})(n,e):void Q(19439)}function vp(n){return n instanceof Te?(function(t){return`${t.field.canonicalString()} ${t.op} ${yi(t.value)}`})(n):n instanceof It?(function(t){return t.op.toString()+" {"+t.getFilters().map(vp).join(" ,")+"}"})(n):"Filter"}class qb extends Te{constructor(e,t,i){super(e,t,i),this.key=z.fromName(i.referenceValue)}matches(e){const t=z.comparator(e.key,this.key);return this.matchesComparison(t)}}class Wb extends Te{constructor(e,t){super(e,"in",t),this.keys=wp("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Gb extends Te{constructor(e,t){super(e,"not-in",t),this.keys=wp("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function wp(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((i=>z.fromName(i.referenceValue)))}class Kb extends Te{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return $c(t)&&Ts(t.arrayValue,this.value)}}class Qb extends Te{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ts(this.value.arrayValue,t)}}class Jb extends Te{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ts(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ts(this.value.arrayValue,t)}}class Yb extends Te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!$c(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>Ts(this.value.arrayValue,i)))}}/**
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
 */class Xb{constructor(e,t=null,i=[],s=[],r=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=c,this.Te=null}}function Td(n,e=null,t=[],i=[],s=null,r=null,o=null){return new Xb(n,e,t,i,s,r,o)}function Nc(n){const e=te(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Ua(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(r){return r.field.canonicalString()+r.dir})(i))).join(","),uo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>yi(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>yi(i))).join(",")),e.Te=t}return e.Te}function Mc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Hb(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!yp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!bd(n.startAt,e.startAt)&&bd(n.endAt,e.endAt)}function Fa(n){return z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,t=null,i=[],s=[],r=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Zb(n,e,t,i,s,r,o,c){return new fo(n,e,t,i,s,r,o,c)}function Oc(n){return new fo(n)}function Id(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function eT(n){return z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function tT(n){return n.collectionGroup!==null}function hs(n){const e=te(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const r of e.explicitOrderBy)e.Ie.push(r),t.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ie(je.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(e).forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new Wr(r,i))})),t.has(je.keyField().canonicalString())||e.Ie.push(new Wr(je.keyField(),i))}return e.Ie}function wt(n){const e=te(n);return e.Ee||(e.Ee=nT(e,hs(n))),e.Ee}function nT(n,e){if(n.limitType==="F")return Td(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const r=s.dir==="desc"?"asc":"desc";return new Wr(s.field,r)}));const t=n.endAt?new qr(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new qr(n.startAt.position,n.startAt.inclusive):null;return Td(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Ba(n,e,t){return new fo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function po(n,e){return Mc(wt(n),wt(e))&&n.limitType===e.limitType}function _p(n){return`${Nc(wt(n))}|lt:${n.limitType}`}function ei(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((s=>vp(s))).join(", ")}]`),uo(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((s=>yi(s))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((s=>yi(s))).join(",")),`Target(${i})`})(wt(n))}; limitType=${n.limitType})`}function mo(n,e){return e.isFoundDocument()&&(function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):z.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)})(n,e)&&(function(i,s){for(const r of hs(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0})(n,e)&&(function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0})(n,e)&&(function(i,s){return!(i.startAt&&!(function(o,c,l){const d=_d(o,c,l);return o.inclusive?d<=0:d<0})(i.startAt,hs(i),s)||i.endAt&&!(function(o,c,l){const d=_d(o,c,l);return o.inclusive?d>=0:d>0})(i.endAt,hs(i),s))})(n,e)}function iT(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function bp(n){return(e,t)=>{let i=!1;for(const s of hs(n)){const r=sT(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function sT(n,e,t){const i=n.field.isKeyField()?z.comparator(e.key,t.key):(function(r,o,c){const l=o.data.field(r),d=c.data.field(r);return l!==null&&d!==null?gi(l,d):Q(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Q(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){$s(this.inner,((t,i)=>{for(const[s,r]of i)e(s,r)}))}isEmpty(){return $b(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT=new ge(z.comparator);function mn(){return rT}const Tp=new ge(z.comparator);function ns(...n){let e=Tp;for(const t of n)e=e.insert(t.key,t);return e}function oT(n){let e=Tp;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function Ln(){return fs()}function Ip(){return fs()}function fs(){return new Gn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const aT=new Ie(z.comparator);function ne(...n){let e=aT;for(const t of n)e=e.add(t);return e}const cT=new Ie(Z);function lT(){return cT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Na(e)?"-0":e}}function dT(n){return{integerValue:""+n}}/**
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
 */class go{constructor(){this._=void 0}}function hT(n,e,t){return n instanceof ja?(function(s,r){const o={fields:{[dp]:{stringValue:up},[fp]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Dc(r)&&(r=ho(r)),r&&(o.fields[hp]=r),{mapValue:o}})(t,e):n instanceof Gr?Ep(n,e):n instanceof Kr?Sp(n,e):(function(s,r){const o=pT(s,r),c=Ed(o)+Ed(s.Ae);return Va(o)&&Va(s.Ae)?dT(c):uT(s.serializer,c)})(n,e)}function fT(n,e,t){return n instanceof Gr?Ep(n,e):n instanceof Kr?Sp(n,e):t}function pT(n,e){return n instanceof Ha?(function(i){return Va(i)||(function(r){return!!r&&"doubleValue"in r})(i)})(e)?e:{integerValue:0}:null}class ja extends go{}class Gr extends go{constructor(e){super(),this.elements=e}}function Ep(n,e){const t=kp(e);for(const i of n.elements)t.some((s=>Tt(s,i)))||t.push(i);return{arrayValue:{values:t}}}class Kr extends go{constructor(e){super(),this.elements=e}}function Sp(n,e){let t=kp(e);for(const i of n.elements)t=t.filter((s=>!Tt(s,i)));return{arrayValue:{values:t}}}class Ha extends go{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Ed(n){return me(n.integerValue||n.doubleValue)}function kp(n){return $c(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function mT(n,e){return n.field.isEqual(e.field)&&(function(i,s){return i instanceof Gr&&s instanceof Gr||i instanceof Kr&&s instanceof Kr?mi(i.elements,s.elements,Tt):i instanceof Ha&&s instanceof Ha?Tt(i.Ae,s.Ae):i instanceof ja&&s instanceof ja})(n.transform,e.transform)}class Nn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Nn}static exists(e){return new Nn(void 0,e)}static updateTime(e){return new Nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function kr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Vc{}function Cp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new yT(n.key,Nn.none()):new Uc(n.key,n.data,Nn.none());{const t=n.data,i=dt.empty();let s=new Ie(je.comparator);for(let r of e.fields)if(!s.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new yo(n.key,i,new en(s.toArray()),Nn.none())}}function gT(n,e,t){n instanceof Uc?(function(s,r,o){const c=s.value.clone(),l=kd(s.fieldTransforms,r,o.transformResults);c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof yo?(function(s,r,o){if(!kr(s.precondition,r))return void r.convertToUnknownDocument(o.version);const c=kd(s.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(Ap(s)),l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):(function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function ps(n,e,t,i){return n instanceof Uc?(function(r,o,c,l){if(!kr(r.precondition,o))return c;const d=r.value.clone(),m=Cd(r.fieldTransforms,l,o);return d.setAll(m),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null})(n,e,t,i):n instanceof yo?(function(r,o,c,l){if(!kr(r.precondition,o))return c;const d=Cd(r.fieldTransforms,l,o),m=o.data;return m.setAll(Ap(r)),m.setAll(d),o.convertToFoundDocument(o.version,m).setHasLocalMutations(),c===null?null:c.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((g=>g.field)))})(n,e,t,i):(function(r,o,c){return kr(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function Sd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&mi(i,s,((r,o)=>mT(r,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Uc extends Vc{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class yo extends Vc{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Ap(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function kd(n,e,t){const i=new Map;de(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const r=n[s],o=r.transform,c=e.data.field(r.field);i.set(r.field,fT(o,c,t[s]))}return i}function Cd(n,e,t){const i=new Map;for(const s of n){const r=s.transform,o=t.data.field(s.field);i.set(s.field,hT(r,o,e))}return i}class yT extends Vc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&gT(r,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=ps(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=ps(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Ip();return this.mutations.forEach((s=>{const r=e.get(s.key),o=r.overlayedDocument;let c=this.applyToLocalView(o,r.mutatedFields);c=t.has(s.key)?null:c;const l=Cp(o,c);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(G.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ne())}isEqual(e){return this.batchId===e.batchId&&mi(this.mutations,e.mutations,((t,i)=>Sd(t,i)))&&mi(this.baseMutations,e.baseMutations,((t,i)=>Sd(t,i)))}}/**
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
 */class wT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class _T{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve,ee;function Rp(n){if(n===void 0)return Mt("GRPC error has no .code"),N.UNKNOWN;switch(n){case ve.OK:return N.OK;case ve.CANCELLED:return N.CANCELLED;case ve.UNKNOWN:return N.UNKNOWN;case ve.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case ve.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case ve.INTERNAL:return N.INTERNAL;case ve.UNAVAILABLE:return N.UNAVAILABLE;case ve.UNAUTHENTICATED:return N.UNAUTHENTICATED;case ve.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case ve.NOT_FOUND:return N.NOT_FOUND;case ve.ALREADY_EXISTS:return N.ALREADY_EXISTS;case ve.PERMISSION_DENIED:return N.PERMISSION_DENIED;case ve.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case ve.ABORTED:return N.ABORTED;case ve.OUT_OF_RANGE:return N.OUT_OF_RANGE;case ve.UNIMPLEMENTED:return N.UNIMPLEMENTED;case ve.DATA_LOSS:return N.DATA_LOSS;default:return Q(39323,{code:n})}}(ee=ve||(ve={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function bT(){return new TextEncoder}/**
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
 */const TT=new rn([4294967295,4294967295],0);function Ad(n){const e=bT().encode(n),t=new Zf;return t.update(e),new Uint8Array(t.digest())}function Rd(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new rn([t,i],0),new rn([s,r],0)]}class Fc{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new is(`Invalid padding: ${t}`);if(i<0)throw new is(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new is(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new is(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=rn.fromNumber(this.ge)}ye(e,t,i){let s=e.add(t.multiply(rn.fromNumber(i)));return s.compare(TT)===1&&(s=new rn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Ad(e),[i,s]=Rd(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(i,s,r);if(!this.we(o))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Fc(r,s,t);return i.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=Ad(e),[i,s]=Rd(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(i,s,r);this.be(o)}}be(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class is extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,Ns.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new vo(G.min(),s,new ge(Z),mn(),ne())}}class Ns{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Ns(i,t,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,t,i,s){this.Se=e,this.removedTargetIds=t,this.key=i,this.De=s}}class Pp{constructor(e,t){this.targetId=e,this.Ce=t}}class xp{constructor(e,t,i=Le.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class Pd{constructor(){this.ve=0,this.Fe=xd(),this.Me=Le.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ne(),t=ne(),i=ne();return this.Fe.forEach(((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:Q(38017,{changeType:r})}})),new Ns(this.Me,this.xe,e,t,i)}Ke(){this.Oe=!1,this.Fe=xd()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,de(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class IT{constructor(e){this.Ge=e,this.ze=new Map,this.je=mn(),this.He=cr(),this.Je=cr(),this.Ze=new ge(Z)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.We(),i.Ne||i.Ke(),i.Le(e.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.Qe(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:Q(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,i=e.Ce.count,s=this.ot(t);if(s){const r=s.target;if(Fa(r))if(i===0){const o=new z(r.path);this.et(t,o,Me.newNoDocument(o,G.min()))}else de(i===1,20013,{expectedCount:i});else{const o=this._t(t);if(o!==i){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=t;let o,c;try{o=fn(i).toUint8Array()}catch(l){if(l instanceof lp)return jn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Fc(o,s,r)}catch(l){return jn(l instanceof is?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let s=0;return i.forEach((r=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(c)||(this.et(t,r,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((r,o)=>{const c=this.ot(o);if(c){if(r.current&&Fa(c.target)){const l=new z(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,Me.newNoDocument(l,e))}r.Be&&(t.set(o,r.ke()),r.Ke())}}));let i=ne();this.Je.forEach(((r,o)=>{let c=!0;o.forEachWhile((l=>{const d=this.ot(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(i=i.add(r))})),this.je.forEach(((r,o)=>o.setReadTime(e)));const s=new vo(e,t,this.Ze,this.je,i);return this.je=mn(),this.He=cr(),this.Je=cr(),this.Ze=new ge(Z),s}Ye(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,i),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Pd,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new Ie(Z),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new Ie(Z),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Pd),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function cr(){return new ge(z.comparator)}function xd(){return new ge(z.comparator)}const ET={asc:"ASCENDING",desc:"DESCENDING"},ST={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},kT={and:"AND",or:"OR"};class CT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function za(n,e){return n.useProto3Json||uo(e)?e:{value:e}}function AT(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function RT(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ai(n){return de(!!n,49232),G.fromTimestamp((function(t){const i=hn(t);return new we(i.seconds,i.nanos)})(n))}function PT(n,e){return qa(n,e).canonicalString()}function qa(n,e){const t=(function(s){return new ue(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Lp(n){const e=ue.fromString(n);return de(Op(e),10190,{key:e.toString()}),e}function ua(n,e){const t=Lp(e);if(t.get(1)!==n.databaseId.projectId)throw new j(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new z($p(t))}function Dp(n,e){return PT(n.databaseId,e)}function xT(n){const e=Lp(n);return e.length===4?ue.emptyPath():$p(e)}function Ld(n){return new ue(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function $p(n){return de(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function LT(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:Q(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=(function(d,m){return d.useProto3Json?(de(m===void 0||typeof m=="string",58123),Le.fromBase64String(m||"")):(de(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),Le.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(d){const m=d.code===void 0?N.UNKNOWN:Rp(d.code);return new j(m,d.message||"")})(o);t=new xp(i,s,r,c||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=ua(n,i.document.name),r=ai(i.document.updateTime),o=i.document.createTime?ai(i.document.createTime):G.min(),c=new dt({mapValue:{fields:i.document.fields}}),l=Me.newFoundDocument(s,r,o,c),d=i.targetIds||[],m=i.removedTargetIds||[];t=new Cr(d,m,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=ua(n,i.document),r=i.readTime?ai(i.readTime):G.min(),o=Me.newNoDocument(s,r),c=i.removedTargetIds||[];t=new Cr([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=ua(n,i.document),r=i.removedTargetIds||[];t=new Cr([],r,s,null)}else{if(!("filter"in e))return Q(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new _T(s,r),c=i.targetId;t=new Pp(c,o)}}return t}function DT(n,e){return{documents:[Dp(n,e.path)]}}function $T(n,e){const t={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Dp(n,s);const r=(function(d){if(d.length!==0)return Mp(It.create(d,"and"))})(e.filters);r&&(t.structuredQuery.where=r);const o=(function(d){if(d.length!==0)return d.map((m=>(function(v){return{field:ti(v.field),direction:OT(v.dir)}})(m)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=za(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{ft:t,parent:s}}function NT(n){let e=xT(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){de(i===1,65062);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let r=[];t.where&&(r=(function(g){const v=Np(g);return v instanceof It&&gp(v)?v.getFilters():[v]})(t.where));let o=[];t.orderBy&&(o=(function(g){return g.map((v=>(function(x){return new Wr(ni(x.field),(function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(x.direction))})(v)))})(t.orderBy));let c=null;t.limit&&(c=(function(g){let v;return v=typeof g=="object"?g.value:g,uo(v)?null:v})(t.limit));let l=null;t.startAt&&(l=(function(g){const v=!!g.before,S=g.values||[];return new qr(S,v)})(t.startAt));let d=null;return t.endAt&&(d=(function(g){const v=!g.before,S=g.values||[];return new qr(S,v)})(t.endAt)),Zb(e,s,o,r,c,"F",l,d)}function MT(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Np(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=ni(t.unaryFilter.field);return Te.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=ni(t.unaryFilter.field);return Te.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ni(t.unaryFilter.field);return Te.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ni(t.unaryFilter.field);return Te.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Te.create(ni(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return It.create(t.compositeFilter.filters.map((i=>Np(i))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Q(1026)}})(t.compositeFilter.op))})(n):Q(30097,{filter:n})}function OT(n){return ET[n]}function VT(n){return ST[n]}function UT(n){return kT[n]}function ti(n){return{fieldPath:n.canonicalString()}}function ni(n){return je.fromServerFormat(n.fieldPath)}function Mp(n){return n instanceof Te?(function(t){if(t.op==="=="){if(wd(t.value))return{unaryFilter:{field:ti(t.field),op:"IS_NAN"}};if(vd(t.value))return{unaryFilter:{field:ti(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(wd(t.value))return{unaryFilter:{field:ti(t.field),op:"IS_NOT_NAN"}};if(vd(t.value))return{unaryFilter:{field:ti(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ti(t.field),op:VT(t.op),value:t.value}}})(n):n instanceof It?(function(t){const i=t.getFilters().map((s=>Mp(s)));return i.length===1?i[0]:{compositeFilter:{op:UT(t.op),filters:i}}})(n):Q(54877,{filter:n})}function Op(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,t,i,s,r=G.min(),o=G.min(),c=Le.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new tn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new tn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new tn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new tn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e){this.yt=e}}function BT(n){const e=NT({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ba(e,e.limit,"L"):e}/**
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
 */class jT{constructor(){this.Sn=new HT}addToCollectionParentIndex(e,t){return this.Sn.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(dn.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(dn.min())}updateCollectionGroup(e,t,i){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class HT{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new Ie(ue.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Ie(ue.comparator)).toArray()}}/**
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
 */const Dd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Vp=41943040;class ze{static withCacheSize(e){return new ze(e,ze.DEFAULT_COLLECTION_PERCENTILE,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ze.DEFAULT_COLLECTION_PERCENTILE=10,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ze.DEFAULT=new ze(Vp,ze.DEFAULT_COLLECTION_PERCENTILE,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ze.DISABLED=new ze(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new vi(0)}static ar(){return new vi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="LruGarbageCollector",zT=1048576;function Nd([n,e],[t,i]){const s=Z(n,t);return s===0?Z(e,i):s}class qT{constructor(e){this.Pr=e,this.buffer=new Ie(Nd),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Nd(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class WT{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){V($d,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ri(t)?V($d,"Ignoring IndexedDB error during garbage collection: ",t):await co(t)}await this.Ar(3e5)}))}}class GT{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return D.resolve(lo.ce);const i=new qT(t);return this.Vr.forEachTarget(e,(s=>i.Er(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>i.Er(s))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(Dd)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Dd):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let i,s,r,o,c,l,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,o=Date.now(),this.nthSequenceNumber(e,s)))).next((g=>(i=g,c=Date.now(),this.removeTargets(e,i,t)))).next((g=>(r=g,l=Date.now(),this.removeOrphanedDocuments(e,i)))).next((g=>(d=Date.now(),Zn()<=X.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-m}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${r} targets in `+(l-c)+`ms
	Removed ${g} documents in `+(d-l)+`ms
Total Duration: ${d-m}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:g}))))}}function KT(n,e){return new GT(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(){this.changes=new Gn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Me.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?D.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class JT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(i=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(i!==null&&ps(i.mutation,s,en.empty(),we.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,ne()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=ne()){const s=Ln();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,i).next((r=>{let o=ns();return r.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const i=Ln();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,ne())))}populateOverlays(e,t,i){const s=[];return i.forEach((r=>{t.has(r)||s.push(r)})),this.documentOverlayCache.getOverlays(e,s).next((r=>{r.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,i,s){let r=mn();const o=fs(),c=(function(){return fs()})();return t.forEach(((l,d)=>{const m=i.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof yo)?r=r.insert(d.key,d):m!==void 0?(o.set(d.key,m.mutation.getFieldMask()),ps(m.mutation,d,m.mutation.getFieldMask(),we.now())):o.set(d.key,en.empty())})),this.recalculateAndSaveOverlays(e,r).next((l=>(l.forEach(((d,m)=>o.set(d,m))),t.forEach(((d,m)=>c.set(d,new JT(m,o.get(d)??null)))),c)))}recalculateAndSaveOverlays(e,t){const i=fs();let s=new ge(((o,c)=>o-c)),r=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((l=>{const d=t.get(l);if(d===null)return;let m=i.get(l)||en.empty();m=c.applyToLocalView(d,m),i.set(l,m);const g=(s.get(c.batchId)||ne()).add(l);s=s.insert(c.batchId,g)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),d=l.key,m=l.value,g=Ip();m.forEach((v=>{if(!r.has(v)){const S=Cp(t.get(v),i.get(v));S!==null&&g.set(v,S),r=r.add(v)}})),o.push(this.documentOverlayCache.saveOverlays(e,d,g))}return D.waitFor(o)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,s){return eT(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):tT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,s):this.getDocumentsMatchingCollectionQuery(e,t,i,s)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next((r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-r.size):D.resolve(Ln());let c=ws,l=r;return o.next((d=>D.forEach(d,((m,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),r.get(m)?D.resolve():this.remoteDocumentCache.getEntry(e,m).next((v=>{l=l.insert(m,v)}))))).next((()=>this.populateOverlays(e,d,r))).next((()=>this.computeViews(e,l,d,ne()))).next((m=>({batchId:c,changes:oT(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new z(t)).next((i=>{let s=ns();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,s){const r=t.collectionGroup;let o=ns();return this.indexManager.getCollectionParents(e,r).next((c=>D.forEach(c,(l=>{const d=(function(g,v){return new fo(v,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(t,l.child(r));return this.getDocumentsMatchingCollectionQuery(e,d,i,s).next((m=>{m.forEach(((g,v)=>{o=o.insert(g,v)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,r,s)))).next((o=>{r.forEach(((l,d)=>{const m=d.getKey();o.get(m)===null&&(o=o.insert(m,Me.newInvalidDocument(m)))}));let c=ns();return o.forEach(((l,d)=>{const m=r.get(l);m!==void 0&&ps(m.mutation,d,en.empty(),we.now()),mo(t,d)&&(c=c.insert(l,d))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return D.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:ai(s.createTime)}})(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(s){return{name:s.name,query:BT(s.bundledQuery),readTime:ai(s.readTime)}})(t)),D.resolve()}}/**
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
 */class ZT{constructor(){this.overlays=new ge(z.comparator),this.Lr=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Ln();return D.forEach(t,(s=>this.getOverlay(e,s).next((r=>{r!==null&&i.set(s,r)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((s,r)=>{this.bt(e,t,r)})),D.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.Lr.get(i);return s!==void 0&&(s.forEach((r=>this.overlays=this.overlays.remove(r))),this.Lr.delete(i)),D.resolve()}getOverlaysForCollection(e,t,i){const s=Ln(),r=t.length+1,o=new z(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return D.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let r=new ge(((d,m)=>d-m));const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>i){let m=r.get(d.largestBatchId);m===null&&(m=Ln(),r=r.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=Ln(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((d,m)=>c.set(d,m))),!(c.size()>=s)););return D.resolve(c)}bt(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(i.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new wT(t,i));let r=this.Lr.get(t);r===void 0&&(r=ne(),this.Lr.set(t,r)),this.Lr.set(t,r.add(i.key))}}/**
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
 */class eI{constructor(){this.sessionToken=Le.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(){this.kr=new Ie(Ce.Kr),this.qr=new Ie(Ce.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const i=new Ce(e,t);this.kr=this.kr.add(i),this.qr=this.qr.add(i)}$r(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new Ce(e,t))}Qr(e,t){e.forEach((i=>this.removeReference(i,t)))}Gr(e){const t=new z(new ue([])),i=new Ce(t,e),s=new Ce(t,e+1),r=[];return this.qr.forEachInRange([i,s],(o=>{this.Wr(o),r.push(o.key)})),r}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new z(new ue([])),i=new Ce(t,e),s=new Ce(t,e+1);let r=ne();return this.qr.forEachInRange([i,s],(o=>{r=r.add(o.key)})),r}containsKey(e){const t=new Ce(e,0),i=this.kr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Ce{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return z.comparator(e.key,t.key)||Z(e.Hr,t.Hr)}static Ur(e,t){return Z(e.Hr,t.Hr)||z.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new Ie(Ce.Kr)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const r=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new vT(r,t,i,s);this.mutationQueue.push(o);for(const c of s)this.Jr=this.Jr.add(new Ce(c.key,r)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,t){return D.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.Xr(i),r=s<0?0:s;return D.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?xb:this.Yn-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Ce(t,0),s=new Ce(t,Number.POSITIVE_INFINITY),r=[];return this.Jr.forEachInRange([i,s],(o=>{const c=this.Zr(o.Hr);r.push(c)})),D.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Ie(Z);return t.forEach((s=>{const r=new Ce(s,0),o=new Ce(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([r,o],(c=>{i=i.add(c.Hr)}))})),D.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;z.isDocumentKey(r)||(r=r.child(""));const o=new Ce(new z(r),0);let c=new Ie(Z);return this.Jr.forEachWhile((l=>{const d=l.key.path;return!!i.isPrefixOf(d)&&(d.length===s&&(c=c.add(l.Hr)),!0)}),o),D.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((i=>{const s=this.Zr(i);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){de(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Jr;return D.forEach(t.mutations,(s=>{const r=new Ce(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Jr=i}))}nr(e){}containsKey(e,t){const i=new Ce(t,0),s=this.Jr.firstAfterOrEqual(i);return D.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e){this.ti=e,this.docs=(function(){return new ge(z.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),r=s?s.size:0,o=this.ti(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return D.resolve(i?i.document.mutableCopy():Me.newInvalidDocument(t))}getEntries(e,t){let i=mn();return t.forEach((s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Me.newInvalidDocument(s))})),D.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let r=mn();const o=t.path,c=new z(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:d,value:{document:m}}=l.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||Cb(kb(m),i)<=0||(s.has(m.key)||mo(t,m))&&(r=r.insert(m.key,m.mutableCopy()))}return D.resolve(r)}getAllFromCollectionGroup(e,t,i,s){Q(9500)}ni(e,t){return D.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new iI(this)}getSize(e){return D.resolve(this.size)}}class iI extends QT{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(i)})),D.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e){this.persistence=e,this.ri=new Gn((t=>Nc(t)),Mc),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.ii=0,this.si=new Bc,this.targetCount=0,this.oi=vi._r()}forEachTarget(e,t){return this.ri.forEach(((i,s)=>t(s))),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.ii&&(this.ii=t),D.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new vi(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.lr(t),D.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.ri.forEach(((o,c)=>{c.sequenceNumber<=t&&i.get(c.targetId)===null&&(this.ri.delete(o),r.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),D.waitFor(r).next((()=>s))}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const i=this.ri.get(t)||null;return D.resolve(i)}addMatchingKeys(e,t,i){return this.si.$r(t,i),D.resolve()}removeMatchingKeys(e,t,i){this.si.Qr(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach((o=>{r.push(s.markPotentiallyOrphaned(e,o))})),D.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const i=this.si.jr(t);return D.resolve(i)}containsKey(e,t){return D.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e,t){this._i={},this.overlays={},this.ai=new lo(0),this.ui=!1,this.ui=!0,this.ci=new eI,this.referenceDelegate=e(this),this.li=new sI(this),this.indexManager=new jT,this.remoteDocumentCache=(function(s){return new nI(s)})((i=>this.referenceDelegate.hi(i))),this.serializer=new FT(t),this.Pi=new XT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ZT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this._i[e.toKey()];return i||(i=new tI(t,this.referenceDelegate),this._i[e.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,i){V("MemoryPersistence","Starting transaction:",e);const s=new rI(this.ai.next());return this.referenceDelegate.Ti(),i(s).next((r=>this.referenceDelegate.Ii(s).next((()=>r)))).toPromise().then((r=>(s.raiseOnCommittedEvent(),r)))}Ei(e,t){return D.or(Object.values(this._i).map((i=>()=>i.containsKey(e,t))))}}class rI extends Rb{constructor(e){super(),this.currentSequenceNumber=e}}class jc{constructor(e){this.persistence=e,this.Ri=new Bc,this.Ai=null}static Vi(e){return new jc(e)}get di(){if(this.Ai)return this.Ai;throw Q(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.di.delete(i.toString()),D.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.di.add(i.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),D.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((s=>this.di.add(s.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((r=>this.di.add(r.toString())))})).next((()=>i.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.di,(i=>{const s=z.fromPath(i);return this.mi(e,s).next((r=>{r||t.removeEntry(s,G.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((i=>{i?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return D.or([()=>D.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Qr{constructor(e,t){this.persistence=e,this.fi=new Gn((i=>Lb(i.path)),((i,s)=>i.isEqual(s))),this.garbageCollector=KT(this,t)}static Vi(e,t){return new Qr(e,t)}Ti(){}Ii(e){return D.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((s=>i+s))))}pr(e){let t=0;return this.mr(e,(i=>{t++})).next((()=>t))}mr(e,t){return D.forEach(this.fi,((i,s)=>this.wr(e,i,s).next((r=>r?D.resolve():t(s)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.ni(e,(o=>this.wr(e,o,t).next((c=>{c||(i++,r.removeEntry(o,G.min()))})))).next((()=>r.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),D.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),D.resolve()}removeReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),D.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),D.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Sr(e.data.value)),t}wr(e,t,i){return D.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return D.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.Ts=i,this.Is=s}static Es(e,t){let i=ne(),s=ne();for(const r of t.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Hc(e,t.fromCache,i,s)}}/**
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
 */class oI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class aI{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return py()?8:Pb(Oe())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,s){const r={result:null};return this.gs(e,t).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ps(e,t,s,i).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new oI;return this.ys(e,t,o).next((c=>{if(r.result=c,this.As)return this.ws(e,t,o,c.size)}))})).next((()=>r.result))}ws(e,t,i,s){return i.documentReadCount<this.Vs?(Zn()<=X.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",ei(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),D.resolve()):(Zn()<=X.DEBUG&&V("QueryEngine","Query:",ei(t),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.ds*s?(Zn()<=X.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",ei(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,wt(t))):D.resolve())}gs(e,t){if(Id(t))return D.resolve(null);let i=wt(t);return this.indexManager.getIndexType(e,i).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Ba(t,null,"F"),i=wt(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((r=>{const o=ne(...r);return this.fs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,i).next((l=>{const d=this.bs(t,c);return this.Ss(t,d,o,l.readTime)?this.gs(e,Ba(t,null,"F")):this.Ds(e,d,t,l)}))))})))))}ps(e,t,i,s){return Id(t)||s.isEqual(G.min())?D.resolve(null):this.fs.getDocuments(e,i).next((r=>{const o=this.bs(t,r);return this.Ss(t,o,i,s)?D.resolve(null):(Zn()<=X.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ei(t)),this.Ds(e,o,t,Sb(s,ws)).next((c=>c)))}))}bs(e,t){let i=new Ie(bp(e));return t.forEach(((s,r)=>{mo(e,r)&&(i=i.add(r))})),i}Ss(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ys(e,t,i){return Zn()<=X.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",ei(t)),this.fs.getDocumentsMatchingQuery(e,t,dn.min(),i)}Ds(e,t,i,s){return this.fs.getDocumentsMatchingQuery(e,i,s).next((r=>(t.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc="LocalStore",cI=3e8;class lI{constructor(e,t,i,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new ge(Z),this.Fs=new Gn((r=>Nc(r)),Mc),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(i)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new YT(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function uI(n,e,t,i){return new lI(n,e,t,i)}async function Fp(n,e){const t=te(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next((r=>(s=r,t.Os(e),t.mutationQueue.getAllMutationBatches(i)))).next((r=>{const o=[],c=[];let l=ne();for(const d of s){o.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}for(const d of r){c.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}return t.localDocuments.getDocuments(i,l).next((d=>({Ns:d,removedBatchIds:o,addedBatchIds:c})))}))}))}function Bp(n){const e=te(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function dI(n,e){const t=te(n),i=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const c=[];e.targetChanges.forEach(((m,g)=>{const v=s.get(g);if(!v)return;c.push(t.li.removeMatchingKeys(r,m.removedDocuments,g).next((()=>t.li.addMatchingKeys(r,m.addedDocuments,g))));let S=v.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(g)!==null?S=S.withResumeToken(Le.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,i)),s=s.insert(g,S),(function(L,R,M){return L.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=cI?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0})(v,S,m)&&c.push(t.li.updateTargetData(r,S))}));let l=mn(),d=ne();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(r,m))})),c.push(hI(r,o,e.documentUpdates).next((m=>{l=m.Bs,d=m.Ls}))),!i.isEqual(G.min())){const m=t.li.getLastRemoteSnapshotVersion(r).next((g=>t.li.setTargetsMetadata(r,r.currentSequenceNumber,i)));c.push(m)}return D.waitFor(c).next((()=>o.apply(r))).next((()=>t.localDocuments.getLocalViewOfDocuments(r,l,d))).next((()=>l))})).then((r=>(t.vs=s,r)))}function hI(n,e,t){let i=ne(),s=ne();return t.forEach((r=>i=i.add(r))),e.getEntries(n,i).next((r=>{let o=mn();return t.forEach(((c,l)=>{const d=r.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(G.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):V(zc,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)})),{Bs:o,Ls:s}}))}function fI(n,e){const t=te(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let s;return t.li.getTargetData(i,e).next((r=>r?(s=r,D.resolve(s)):t.li.allocateTargetId(i).next((o=>(s=new tn(e,o,"TargetPurposeListen",i.currentSequenceNumber),t.li.addTargetData(i,s).next((()=>s)))))))})).then((i=>{const s=t.vs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(i.targetId,i),t.Fs.set(e,i.targetId)),i}))}async function Wa(n,e,t){const i=te(n),s=i.vs.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,(o=>i.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Ri(o))throw o;V(zc,`Failed to update sequence numbers for target ${e}: ${o}`)}i.vs=i.vs.remove(e),i.Fs.delete(s.target)}function Md(n,e,t){const i=te(n);let s=G.min(),r=ne();return i.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,d,m){const g=te(l),v=g.Fs.get(m);return v!==void 0?D.resolve(g.vs.get(v)):g.li.getTargetData(d,m)})(i,o,wt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(o,c.targetId).next((l=>{r=l}))})).next((()=>i.Cs.getDocumentsMatchingQuery(o,e,t?s:G.min(),t?r:ne()))).next((c=>(pI(i,iT(e),c),{documents:c,ks:r})))))}function pI(n,e,t){let i=n.Ms.get(e)||G.min();t.forEach(((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)})),n.Ms.set(e,i)}class Od{constructor(){this.activeTargetIds=lT()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mI{constructor(){this.vo=new Od,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,i){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Od,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class gI{Mo(e){}shutdown(){}}/**
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
 */const Vd="ConnectivityMonitor";class Ud{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){V(Vd,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){V(Vd,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let lr=null;function Ga(){return lr===null?lr=(function(){return 268435456+Math.round(2147483648*Math.random())})():lr++,"0x"+lr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da="RestConnection",yI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class vI{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${i}/databases/${s}`,this.$o=this.databaseId.database===zr?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(e,t,i,s,r){const o=Ga(),c=this.Qo(e,t.toUriEncodedString());V(da,`Sending RPC '${e}' ${o}:`,c,i);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,r);const{host:d}=new URL(c),m=yn(d);return this.zo(e,c,l,i,m).then((g=>(V(da,`Received RPC '${e}' ${o}: `,g),g)),(g=>{throw jn(da,`RPC '${e}' ${o} failed with error: `,g,"url: ",c,"request:",i),g}))}jo(e,t,i,s,r,o){return this.Wo(e,t,i,s,r)}Go(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ai})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,r)=>e[r]=s)),i&&i.headers.forEach(((s,r)=>e[r]=s))}Qo(e,t){const i=yI[e];let s=`${this.qo}/v1/${t}:${i}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e="WebChannelConnection",Qi=(n,e,t)=>{n.listen(e,(i=>{try{t(i)}catch(s){setTimeout((()=>{throw s}),0)}}))};class ci extends vI{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!ci.c_){const e=ip();Qi(e,np.STAT_EVENT,(t=>{t.stat===Da.PROXY?V($e,"STAT_EVENT: detected buffering proxy"):t.stat===Da.NOPROXY&&V($e,"STAT_EVENT: detected no buffering proxy")})),ci.c_=!0}}zo(e,t,i,s,r){const o=Ga();return new Promise(((c,l)=>{const d=new ep;d.setWithCredentials(!0),d.listenOnce(tp.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Ir.NO_ERROR:const g=d.getResponseJson();V($e,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(g)),c(g);break;case Ir.TIMEOUT:V($e,`RPC '${e}' ${o} timed out`),l(new j(N.DEADLINE_EXCEEDED,"Request time out"));break;case Ir.HTTP_ERROR:const v=d.getStatus();if(V($e,`RPC '${e}' ${o} failed with status:`,v,"response text:",d.getResponseText()),v>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const x=S==null?void 0:S.error;if(x&&x.status&&x.message){const L=(function(M){const U=M.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(U)>=0?U:N.UNKNOWN})(x.status);l(new j(L,x.message))}else l(new j(N.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new j(N.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{l_:e,streamId:o,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{V($e,`RPC '${e}' ${o} completed.`)}}));const m=JSON.stringify(s);V($e,`RPC '${e}' ${o} sending request:`,s),d.send(t,"POST",m,i,15)}))}T_(e,t,i){const s=Ga(),r=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,i),c.encodeInitMessageHeaders=!0;const d=r.join("");V($e,`Creating RPC '${e}' stream ${s}: ${d}`,c);const m=o.createWebChannel(d,c);this.I_(m);let g=!1,v=!1;const S=new wI({Ho:x=>{v?V($e,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(g||(V($e,`Opening RPC '${e}' stream ${s} transport.`),m.open(),g=!0),V($e,`RPC '${e}' stream ${s} sending:`,x),m.send(x))},Jo:()=>m.close()});return Qi(m,ts.EventType.OPEN,(()=>{v||(V($e,`RPC '${e}' stream ${s} transport opened.`),S.i_())})),Qi(m,ts.EventType.CLOSE,(()=>{v||(v=!0,V($e,`RPC '${e}' stream ${s} transport closed`),S.o_(),this.E_(m))})),Qi(m,ts.EventType.ERROR,(x=>{v||(v=!0,jn($e,`RPC '${e}' stream ${s} transport errored. Name:`,x.name,"Message:",x.message),S.o_(new j(N.UNAVAILABLE,"The operation could not be completed")))})),Qi(m,ts.EventType.MESSAGE,(x=>{var L;if(!v){const R=x.data[0];de(!!R,16349);const M=R,U=(M==null?void 0:M.error)||((L=M[0])==null?void 0:L.error);if(U){V($e,`RPC '${e}' stream ${s} received error:`,U);const O=U.status;let F=(function(T){const w=ve[T];if(w!==void 0)return Rp(w)})(O),W=U.message;O==="NOT_FOUND"&&W.includes("database")&&W.includes("does not exist")&&W.includes(this.databaseId.database)&&jn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),F===void 0&&(F=N.INTERNAL,W="Unknown error status: "+O+" with message "+U.message),v=!0,S.o_(new j(F,W)),m.close()}else V($e,`RPC '${e}' stream ${s} received:`,R),S.__(R)}})),ci.u_(),setTimeout((()=>{S.s_()}),0),S}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,i){super.Go(e,t,i),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return sp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(n){return new ci(n)}function ha(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(n){return new CT(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ci.c_=!1;class Hp{constructor(e,t,i=1e3,s=1.5,r=6e4){this.Ci=e,this.timerId=t,this.R_=i,this.A_=s,this.V_=r,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-i);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="PersistentStream";class bI{constructor(e,t,i,s,r,o,c,l){this.Ci=e,this.b_=i,this.S_=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Hp(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(Mt(t.toString()),Mt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,s])=>{this.D_===t&&this.G_(i,s)}),(i=>{e((()=>{const s=new j(N.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(s)}))}))}G_(e,t){const i=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.Yo((()=>{i((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{i((()=>this.z_(s)))})),this.stream.onMessage((s=>{i((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return V(Fd,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(V(Fd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class TI extends bI{constructor(e,t,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=LT(this.serializer,e),i=(function(r){if(!("targetChange"in r))return G.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?G.min():o.readTime?ai(o.readTime):G.min()})(e);return this.listener.J_(t,i)}Z_(e){const t={};t.database=Ld(this.serializer),t.addTarget=(function(r,o){let c;const l=o.target;if(c=Fa(l)?{documents:DT(r,l)}:{query:$T(r,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=RT(r,o.resumeToken);const d=za(r,o.expectedCount);d!==null&&(c.expectedCount=d)}else if(o.snapshotVersion.compareTo(G.min())>0){c.readTime=AT(r,o.snapshotVersion.toTimestamp());const d=za(r,o.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,e);const i=MT(this.serializer,e);i&&(t.labels=i),this.K_(t)}X_(e){const t={};t.database=Ld(this.serializer),t.removeTarget=e,this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{}class EI extends II{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new j(N.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Wo(e,qa(t,i),s,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new j(N.UNKNOWN,r.toString())}))}jo(e,t,i,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.jo(e,qa(t,i),s,o,c,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(N.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function SI(n,e,t,i){return new EI(n,e,t,i)}class kI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Mt(t),this.aa=!1):V("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="RemoteStore";class CI{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=r,this.Aa.Mo((o=>{i.enqueueAndForget((async()=>{Os(this)&&(V(wi,"Restarting streams for network reachability change."),await(async function(l){const d=te(l);d.Ea.add(4),await Ms(d),d.Va.set("Unknown"),d.Ea.delete(4),await wo(d)})(this))}))})),this.Va=new kI(i,s)}}async function wo(n){if(Os(n))for(const e of n.Ra)await e(!0)}async function Ms(n){for(const e of n.Ra)await e(!1)}function zp(n,e){const t=te(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Kc(t)?Gc(t):Pi(t).O_()&&Wc(t,e))}function qc(n,e){const t=te(n),i=Pi(t);t.Ia.delete(e),i.O_()&&qp(t,e),t.Ia.size===0&&(i.O_()?i.L_():Os(t)&&t.Va.set("Unknown"))}function Wc(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Pi(n).Z_(e)}function qp(n,e){n.da.$e(e),Pi(n).X_(e)}function Gc(n){n.da=new IT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Pi(n).start(),n.Va.ua()}function Kc(n){return Os(n)&&!Pi(n).x_()&&n.Ia.size>0}function Os(n){return te(n).Ea.size===0}function Wp(n){n.da=void 0}async function AI(n){n.Va.set("Online")}async function RI(n){n.Ia.forEach(((e,t)=>{Wc(n,e)}))}async function PI(n,e){Wp(n),Kc(n)?(n.Va.ha(e),Gc(n)):n.Va.set("Unknown")}async function xI(n,e,t){if(n.Va.set("Online"),e instanceof xp&&e.state===2&&e.cause)try{await(async function(s,r){const o=r.cause;for(const c of r.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.da.removeTarget(c))})(n,e)}catch(i){V(wi,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Bd(n,i)}else if(e instanceof Cr?n.da.Xe(e):e instanceof Pp?n.da.st(e):n.da.tt(e),!t.isEqual(G.min()))try{const i=await Bp(n.localStore);t.compareTo(i)>=0&&await(function(r,o){const c=r.da.Tt(o);return c.targetChanges.forEach(((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const m=r.Ia.get(d);m&&r.Ia.set(d,m.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,d)=>{const m=r.Ia.get(l);if(!m)return;r.Ia.set(l,m.withResumeToken(Le.EMPTY_BYTE_STRING,m.snapshotVersion)),qp(r,l);const g=new tn(m.target,l,d,m.sequenceNumber);Wc(r,g)})),r.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(i){V(wi,"Failed to raise snapshot:",i),await Bd(n,i)}}async function Bd(n,e,t){if(!Ri(e))throw e;n.Ea.add(1),await Ms(n),n.Va.set("Offline"),t||(t=()=>Bp(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{V(wi,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await wo(n)}))}async function jd(n,e){const t=te(n);t.asyncQueue.verifyOperationInProgress(),V(wi,"RemoteStore received new credentials");const i=Os(t);t.Ea.add(3),await Ms(t),i&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await wo(t)}async function LI(n,e){const t=te(n);e?(t.Ea.delete(2),await wo(t)):e||(t.Ea.add(2),await Ms(t),t.Va.set("Unknown"))}function Pi(n){return n.ma||(n.ma=(function(t,i,s){const r=te(t);return r.sa(),new TI(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Zo:AI.bind(null,n),Yo:RI.bind(null,n),t_:PI.bind(null,n),J_:xI.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),Kc(n)?Gc(n):n.Va.set("Unknown")):(await n.ma.stop(),Wp(n))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new oi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,r){const o=Date.now()+i,c=new Qc(e,t,o,s,r);return c.start(i),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gp(n,e){if(Mt("AsyncQueue",`${e}: ${n}`),Ri(n))return new j(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{static emptySet(e){return new li(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||z.comparator(t.key,i.key):(t,i)=>z.comparator(t.key,i.key),this.keyedMap=ns(),this.sortedSet=new ge(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof li)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new li;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(){this.ga=new ge(z.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Q(63341,{Vt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class _i{constructor(e,t,i,s,r,o,c,l,d){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,i,s,r){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new _i(e,t,li.emptySet(t),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&po(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class $I{constructor(){this.queries=zd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const s=te(t),r=s.queries;s.queries=zd(),r.forEach(((o,c)=>{for(const l of c.ba)l.onError(i)}))})(this,new j(N.ABORTED,"Firestore shutting down"))}}function zd(){return new Gn((n=>_p(n)),po)}async function NI(n,e){const t=te(n);let i=3;const s=e.query;let r=t.queries.get(s);r?!r.Sa()&&e.Da()&&(i=2):(r=new DI,i=e.Da()?0:1);try{switch(i){case 0:r.wa=await t.onListen(s,!0);break;case 1:r.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=Gp(o,`Initialization of query '${ei(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,r),r.ba.push(e),e.va(t.onlineState),r.wa&&e.Fa(r.wa)&&Jc(t)}async function MI(n,e){const t=te(n),i=e.query;let s=3;const r=t.queries.get(i);if(r){const o=r.ba.indexOf(e);o>=0&&(r.ba.splice(o,1),r.ba.length===0?s=e.Da()?0:1:!r.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function OI(n,e){const t=te(n);let i=!1;for(const s of e){const r=s.query,o=t.queries.get(r);if(o){for(const c of o.ba)c.Fa(s)&&(i=!0);o.wa=s}}i&&Jc(t)}function VI(n,e,t){const i=te(n),s=i.queries.get(e);if(s)for(const r of s.ba)r.onError(t);i.queries.delete(e)}function Jc(n){n.Ca.forEach((e=>{e.next()}))}var Ka,qd;(qd=Ka||(Ka={})).Ma="default",qd.Cache="cache";class UI{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new _i(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.Ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=_i.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ka.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e){this.key=e}}class Qp{constructor(e){this.key=e}}class FI{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ne(),this.mutatedKeys=ne(),this.eu=bp(e),this.tu=new li(this.eu)}get nu(){return this.Za}ru(e,t){const i=t?t.iu:new Hd,s=t?t.tu:this.tu;let r=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((m,g)=>{const v=s.get(m),S=mo(this.query,g)?g:null,x=!!v&&this.mutatedKeys.has(v.key),L=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let R=!1;v&&S?v.data.isEqual(S.data)?x!==L&&(i.track({type:3,doc:S}),R=!0):this.su(v,S)||(i.track({type:2,doc:S}),R=!0,(l&&this.eu(S,l)>0||d&&this.eu(S,d)<0)&&(c=!0)):!v&&S?(i.track({type:0,doc:S}),R=!0):v&&!S&&(i.track({type:1,doc:v}),R=!0,(l||d)&&(c=!0)),R&&(S?(o=o.add(S),r=L?r.add(m):r.delete(m)):(o=o.delete(m),r=r.delete(m)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const m=this.query.limitType==="F"?o.last():o.first();o=o.delete(m.key),r=r.delete(m.key),i.track({type:1,doc:m})}return{tu:o,iu:i,Ss:c,mutatedKeys:r}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,s){const r=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((m,g)=>(function(S,x){const L=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{Vt:R})}};return L(S)-L(x)})(m.type,g.type)||this.eu(m.doc,g.doc))),this.ou(i),s=s??!1;const c=t&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,d=l!==this.Xa;return this.Xa=l,o.length!==0||d?{snapshot:new _i(this.query,e.tu,r,o,e.mutatedKeys,l===0,d,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Hd,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ne(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Ya=this.Ya.add(i.key))}));const t=[];return e.forEach((i=>{this.Ya.has(i)||t.push(new Qp(i))})),this.Ya.forEach((i=>{e.has(i)||t.push(new Kp(i))})),t}cu(e){this.Za=e.ks,this.Ya=ne();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return _i.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Yc="SyncEngine";class BI{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class jI{constructor(e){this.key=e,this.hu=!1}}class HI{constructor(e,t,i,s,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Gn((c=>_p(c)),po),this.Iu=new Map,this.Eu=new Set,this.Ru=new ge(z.comparator),this.Au=new Map,this.Vu=new Bc,this.du={},this.mu=new Map,this.fu=vi.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function zI(n,e,t=!0){const i=em(n);let s;const r=i.Tu.get(e);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.lu()):s=await Jp(i,e,t,!0),s}async function qI(n,e){const t=em(n);await Jp(t,e,!0,!1)}async function Jp(n,e,t,i){const s=await fI(n.localStore,wt(e)),r=s.targetId,o=n.sharedClientState.addLocalQueryTarget(r,t);let c;return i&&(c=await WI(n,e,r,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&zp(n.remoteStore,s),c}async function WI(n,e,t,i,s){n.pu=(g,v,S)=>(async function(L,R,M,U){let O=R.view.ru(M);O.Ss&&(O=await Md(L.localStore,R.query,!1).then((({documents:T})=>R.view.ru(T,O))));const F=U&&U.targetChanges.get(R.targetId),W=U&&U.targetMismatches.get(R.targetId)!=null,Y=R.view.applyChanges(O,L.isPrimaryClient,F,W);return Gd(L,R.targetId,Y.au),Y.snapshot})(n,g,v,S);const r=await Md(n.localStore,e,!0),o=new FI(e,r.ks),c=o.ru(r.documents),l=Ns.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),d=o.applyChanges(c,n.isPrimaryClient,l);Gd(n,t,d.au);const m=new BI(e,t,o);return n.Tu.set(e,m),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function GI(n,e,t){const i=te(n),s=i.Tu.get(e),r=i.Iu.get(s.targetId);if(r.length>1)return i.Iu.set(s.targetId,r.filter((o=>!po(o,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await Wa(i.localStore,s.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(s.targetId),t&&qc(i.remoteStore,s.targetId),Qa(i,s.targetId)})).catch(co)):(Qa(i,s.targetId),await Wa(i.localStore,s.targetId,!0))}async function KI(n,e){const t=te(n),i=t.Tu.get(e),s=t.Iu.get(i.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),qc(t.remoteStore,i.targetId))}async function Yp(n,e){const t=te(n);try{const i=await dI(t.localStore,e);e.targetChanges.forEach(((s,r)=>{const o=t.Au.get(r);o&&(de(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?de(o.hu,14607):s.removedDocuments.size>0&&(de(o.hu,42227),o.hu=!1))})),await Zp(t,i,e)}catch(i){await co(i)}}function Wd(n,e,t){const i=te(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.Tu.forEach(((r,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=te(o);l.onlineState=c;let d=!1;l.queries.forEach(((m,g)=>{for(const v of g.ba)v.va(c)&&(d=!0)})),d&&Jc(l)})(i.eventManager,e),s.length&&i.Pu.J_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function QI(n,e,t){const i=te(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.Au.get(e),r=s&&s.key;if(r){let o=new ge(z.comparator);o=o.insert(r,Me.newNoDocument(r,G.min()));const c=ne().add(r),l=new vo(G.min(),new Map,new ge(Z),o,c);await Yp(i,l),i.Ru=i.Ru.remove(r),i.Au.delete(e),Xc(i)}else await Wa(i.localStore,e,!1).then((()=>Qa(i,e,t))).catch(co)}function Qa(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Iu.get(e))n.Tu.delete(i),t&&n.Pu.yu(i,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((i=>{n.Vu.containsKey(i)||Xp(n,i)}))}function Xp(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(qc(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Xc(n))}function Gd(n,e,t){for(const i of t)i instanceof Kp?(n.Vu.addReference(i.key,e),JI(n,i)):i instanceof Qp?(V(Yc,"Document no longer in limbo: "+i.key),n.Vu.removeReference(i.key,e),n.Vu.containsKey(i.key)||Xp(n,i.key)):Q(19791,{wu:i})}function JI(n,e){const t=e.key,i=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(i)||(V(Yc,"New document in limbo: "+t),n.Eu.add(i),Xc(n))}function Xc(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new z(ue.fromString(e)),i=n.fu.next();n.Au.set(i,new jI(t)),n.Ru=n.Ru.insert(t,i),zp(n.remoteStore,new tn(wt(Oc(t.path)),i,"TargetPurposeLimboResolution",lo.ce))}}async function Zp(n,e,t){const i=te(n),s=[],r=[],o=[];i.Tu.isEmpty()||(i.Tu.forEach(((c,l)=>{o.push(i.pu(l,e,t).then((d=>{var m;if((d||t)&&i.isPrimaryClient){const g=d?!d.fromCache:(m=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:m.current;i.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(d){s.push(d);const g=Hc.Es(l.targetId,d);r.push(g)}})))})),await Promise.all(o),i.Pu.J_(s),await(async function(l,d){const m=te(l);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>D.forEach(d,(v=>D.forEach(v.Ts,(S=>m.persistence.referenceDelegate.addReference(g,v.targetId,S))).next((()=>D.forEach(v.Is,(S=>m.persistence.referenceDelegate.removeReference(g,v.targetId,S)))))))))}catch(g){if(!Ri(g))throw g;V(zc,"Failed to update sequence numbers: "+g)}for(const g of d){const v=g.targetId;if(!g.fromCache){const S=m.vs.get(v),x=S.snapshotVersion,L=S.withLastLimboFreeSnapshotVersion(x);m.vs=m.vs.insert(v,L)}}})(i.localStore,r))}async function YI(n,e){const t=te(n);if(!t.currentUser.isEqual(e)){V(Yc,"User change. New user:",e.toKey());const i=await Fp(t.localStore,e);t.currentUser=e,(function(r,o){r.mu.forEach((c=>{c.forEach((l=>{l.reject(new j(N.CANCELLED,o))}))})),r.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Zp(t,i.Ns)}}function XI(n,e){const t=te(n),i=t.Au.get(e);if(i&&i.hu)return ne().add(i.key);{let s=ne();const r=t.Iu.get(e);if(!r)return s;for(const o of r){const c=t.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function em(n){const e=te(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Yp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=XI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=QI.bind(null,e),e.Pu.J_=OI.bind(null,e.eventManager),e.Pu.yu=VI.bind(null,e.eventManager),e}class Jr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=jp(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return uI(this.persistence,new aI,e.initialUser,this.serializer)}Cu(e){return new Up(jc.Vi,this.serializer)}Du(e){return new mI}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Jr.provider={build:()=>new Jr};class ZI extends Jr{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){de(this.persistence.referenceDelegate instanceof Qr,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new WT(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?ze.withCacheSize(this.cacheSizeBytes):ze.DEFAULT;return new Up((i=>Qr.Vi(i,t)),this.serializer)}}class Ja{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Wd(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=YI.bind(null,this.syncEngine),await LI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new $I})()}createDatastore(e){const t=jp(e.databaseInfo.databaseId),i=_I(e.databaseInfo);return SI(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,s,r,o,c){return new CI(i,s,r,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>Wd(this.syncEngine,t,0)),(function(){return Ud.v()?new Ud:new gI})())}createSyncEngine(e,t){return(function(s,r,o,c,l,d,m){const g=new HI(s,r,o,c,l,d);return m&&(g.gu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const r=te(s);V(wi,"RemoteStore shutting down."),r.Ea.add(5),await Ms(r),r.Aa.shutdown(),r.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Ja.provider={build:()=>new Ja};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class eE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Mt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn="FirestoreClient";class tE{constructor(e,t,i,s,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this._databaseInfo=s,this.user=Ne.UNAUTHENTICATED,this.clientId=ap.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,(async o=>{V(gn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(i,(o=>(V(gn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new oi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Gp(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function fa(n,e){n.asyncQueue.verifyOperationInProgress(),V(gn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async s=>{i.isEqual(s)||(await Fp(e.localStore,s),i=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Kd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await nE(n);V(gn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>jd(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,s)=>jd(e.remoteStore,s))),n._onlineComponents=e}async function nE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(gn,"Using user provided OfflineComponentProvider");try{await fa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;jn("Error using user provided cache. Falling back to memory cache: "+t),await fa(n,new Jr)}}else V(gn,"Using default OfflineComponentProvider"),await fa(n,new ZI(void 0));return n._offlineComponents}async function iE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(gn,"Using user provided OnlineComponentProvider"),await Kd(n,n._uninitializedComponentsProvider._online)):(V(gn,"Using default OnlineComponentProvider"),await Kd(n,new Ja))),n._onlineComponents}async function Qd(n){const e=await iE(n),t=e.eventManager;return t.onListen=zI.bind(null,e.syncEngine),t.onUnlisten=GI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=qI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=KI.bind(null,e.syncEngine),t}function sE(n,e,t,i){const s=new eE(i),r=new UI(e,s,t);return n.asyncQueue.enqueueAndForget((async()=>NI(await Qd(n),r))),()=>{s.Nu(),n.asyncQueue.enqueueAndForget((async()=>MI(await Qd(n),r)))}}/**
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
 */function tm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE="ComponentProvider",Jd=new Map;function oE(n,e,t,i,s){return new Mb(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,tm(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm="firestore.googleapis.com",Yd=!0;class Xd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new j(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=nm,this.ssl=Yd}else this.host=e.host,this.ssl=e.ssl??Yd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Vp;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<zT)throw new j(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Tb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tm(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new j(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new j(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new j(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zc{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new db;switch(i.type){case"firstParty":return new mb(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new j(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=Jd.get(t);i&&(V(rE,"Removing Datastore"),Jd.delete(t),i.terminate())})(this),Promise.resolve()}}function aE(n,e,t,i={}){var d;n=Er(n,Zc);const s=yn(e),r=n._getSettings(),o={...r,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(oc(`https://${c}`),ac("Firestore",!0)),r.host!==nm&&r.host!==c&&jn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...r,host:c,ssl:s,emulatorOptions:i};if(!Vn(l,o)&&(n._setSettings(l),i.mockUserToken)){let m,g;if(typeof i.mockUserToken=="string")m=i.mockUserToken,g=Ne.MOCK_USER;else{m=$h(i.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const v=i.mockUserToken.sub||i.mockUserToken.user_id;if(!v)throw new j(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Ne(v)}n._authCredentials=new hb(new op(m,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new _o(this.firestore,e,this._query)}}class Ge{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ui(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ge(this.firestore,e,this._key)}toJSON(){return{type:Ge._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(Ds(t,Ge._jsonSchema))return new Ge(e,i||null,new z(ue.fromString(t.referencePath)))}}Ge._jsonSchemaVersion="firestore/documentReference/1.0",Ge._jsonSchema={type:_e("string",Ge._jsonSchemaVersion),referencePath:_e("string")};class ui extends _o{constructor(e,t,i){super(e,t,Oc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ge(this.firestore,null,new z(e))}withConverter(e){return new ui(this.firestore,e,this._path)}}function kn(n,e,...t){if(n=Re(n),bb("collection","path",e),n instanceof Zc){const i=ue.fromString(e,...t);return ud(i),new ui(n,null,i)}{if(!(n instanceof Ge||n instanceof ui))throw new j(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ue.fromString(e,...t));return ud(i),new ui(n.firestore,null,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd="AsyncQueue";class eh{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Hp(this,"async_queue_retry"),this._c=()=>{const i=ha();i&&V(Zd,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=ha();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ha();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new oi;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Ri(e))throw e;V(Zd,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,Mt("INTERNAL UNHANDLED ERROR: ",th(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Qc.createAndSchedule(this,e,t,i,(r=>this.hc(r)));return this.tc.push(s),s}uc(){this.nc&&Q(47125,{Pc:th(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function th(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Ya extends Zc{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new eh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new eh(e),this._firestoreClient=void 0,await e}}}function cE(n,e){const t=typeof n=="object"?n:uc(),i=typeof n=="string"?n:zr,s=to(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=xh("firestore");r&&aE(s,...r)}return s}function lE(n){if(n._terminated)throw new j(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||uE(n),n._firestoreClient}function uE(n){var i,s,r,o;const e=n._freezeSettings(),t=oE(n._databaseId,((i=n._app)==null?void 0:i.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(r=e.localCache)!=null&&r._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new tE(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(l){const d=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(d),_online:d}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ht(Le.fromBase64String(e))}catch(t){throw new j(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ht(Le.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ht._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ds(e,ht._jsonSchema))return ht.fromBase64String(e.bytes)}}ht._jsonSchemaVersion="firestore/bytes/1.0",ht._jsonSchema={type:_e("string",ht._jsonSchemaVersion),bytes:_e("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:on._jsonSchemaVersion}}static fromJSON(e){if(Ds(e,on._jsonSchema))return new on(e.latitude,e.longitude)}}on._jsonSchemaVersion="firestore/geoPoint/1.0",on._jsonSchema={type:_e("string",on._jsonSchemaVersion),latitude:_e("number"),longitude:_e("number")};/**
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
 */class an{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0})(this._values,e._values)}toJSON(){return{type:an._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ds(e,an._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new an(e.vectorValues);throw new j(N.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}an._jsonSchemaVersion="firestore/vectorValue/1.0",an._jsonSchema={type:_e("string",an._jsonSchemaVersion),vectorValues:_e("object")};function sm(n,e,t){if((e=Re(e))instanceof im)return e._internalPath;if(typeof e=="string")return hE(n,e);throw Xa("Field path arguments must be of type string or ",n)}const dE=new RegExp("[~\\*/\\[\\]]");function hE(n,e,t){if(e.search(dE)>=0)throw Xa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new im(...e.split("."))._internalPath}catch{throw Xa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function Xa(n,e,t,i,s){let r=`Function ${e}() called with invalid data`;r+=". ";let o="";return new j(N.INVALID_ARGUMENT,r+n+o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{convertValue(e,t="none"){switch(pn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(fn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Q(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return $s(e,((s,r)=>{i[s]=this.convertValue(r,t)})),i}convertVectorValue(e){var i,s,r;const t=(r=(s=(i=e.fields)==null?void 0:i[Ma].arrayValue)==null?void 0:s.values)==null?void 0:r.map((o=>me(o.doubleValue)));return new an(t)}convertGeoPoint(e){return new on(me(e.latitude),me(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=ho(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(_s(e));default:return null}}convertTimestamp(e){const t=hn(e);return new we(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=ue.fromString(e);de(Op(i),9688,{name:e});const s=new bs(i.get(1),i.get(3)),r=new z(i.popFirst(5));return s.isEqual(t)||Mt(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */class rm extends fE{constructor(e){super(),this.firestore=e}convertBytes(e){return new ht(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ge(this.firestore,null,t)}}const nh="@firebase/firestore",ih="4.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(sm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class pE extends om{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ss{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Mn extends om{constructor(e,t,i,s,r,o){super(e,t,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ar(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(sm("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new j(N.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Mn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Mn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Mn._jsonSchema={type:_e("string",Mn._jsonSchemaVersion),bundleSource:_e("string","DocumentSnapshot"),bundleName:_e("string"),bundle:_e("string")};class Ar extends Mn{data(e={}){return super.data(e)}}class di{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ss(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new Ar(this._firestore,this._userDataWriter,i.key,i,new ss(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new Ar(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ss(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>r||c.type!==3)).map((c=>{const l=new Ar(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ss(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return c.type!==0&&(d=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),m=o.indexOf(c.doc.key)),{type:gE(c.type),doc:l,oldIndex:d,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new j(N.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=di._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ap.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],s=[];return this.docs.forEach((r=>{r._document!==null&&(t.push(r._document),i.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),s.push(r.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function gE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:n})}}/**
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
 */di._jsonSchemaVersion="firestore/querySnapshot/1.0",di._jsonSchema={type:_e("string",di._jsonSchemaVersion),bundleSource:_e("string","QuerySnapshot"),bundleName:_e("string"),bundle:_e("string")};function Cn(n,...e){var d,m,g;n=Re(n);let t={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||sh(e[i])||(t=e[i++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(sh(e[i])){const v=e[i];e[i]=(d=v.next)==null?void 0:d.bind(v),e[i+1]=(m=v.error)==null?void 0:m.bind(v),e[i+2]=(g=v.complete)==null?void 0:g.bind(v)}let r,o,c;if(n instanceof Ge)o=Er(n.firestore,Ya),c=Oc(n._key.path),r={next:v=>{e[i]&&e[i](yE(o,n,v))},error:e[i+1],complete:e[i+2]};else{const v=Er(n,_o);o=Er(v.firestore,Ya),c=v._query;const S=new rm(o);r={next:x=>{e[i]&&e[i](new di(o,S,v,x))},error:e[i+1],complete:e[i+2]},mE(n._query)}const l=lE(o);return sE(l,c,s,r)}function yE(n,e,t){const i=t.docs.get(e._key),s=new rm(n);return new Mn(n,s,e._key,i,new ss(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){ub(zn),Un(new ln("firestore",((i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),c=new Ya(new fb(i.getProvider("auth-internal")),new gb(o,i.getProvider("app-check-internal")),Ob(o,s),o);return r={useFetchStreams:t,...r},c._setSettings(r),c}),"PUBLIC").setMultipleInstances(!0)),gt(nh,ih,e),gt(nh,ih,"esm2020")})();const An=cE(bc);let Rt=[];function vE(n){if(am(),!n)return;const e=t=>t.docs.map(i=>({id:i.id,...i.data()}));Rt.push(Cn(kn(An,`households/${n}/inventory`),t=>{var i,s;h.inv=e(t),le("synced"),(i=B.renderAll)==null||i.call(B),(s=B.renderSum)==null||s.call(B)},t=>{console.warn("realtime inv error:",t),le("error")})),Rt.push(Cn(kn(An,`households/${n}/shopping`),t=>{var i,s;h.shop=e(t),le("synced"),(i=B.renderShop)==null||i.call(B),(s=B.renderSum)==null||s.call(B)},t=>{console.warn("realtime shop error:",t),le("error")})),Rt.push(Cn(kn(An,`households/${n}/recipes`),t=>{var i,s;h.recs=e(t),le("synced"),(i=B.renderRecs)==null||i.call(B),(s=B.renderSum)==null||s.call(B)},t=>{console.warn("realtime recs error:",t),le("error")})),Rt.push(Cn(kn(An,`households/${n}/mealplan`),t=>{const i={};e(t).forEach(s=>{s.date&&s.meal&&(i[s.date]=s.meal)}),h.mp=i,le("synced")},t=>{console.warn("realtime mp error:",t)})),Rt.push(Cn(kn(An,`households/${n}/settings`),t=>{const i=e(t).find(s=>s.id==="config");i&&(h.cfg={...Dr,...i})},t=>{console.warn("realtime settings error:",t)})),Rt.push(Cn(kn(An,`households/${n}/cooklog`),t=>{h.cookLog=e(t).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},t=>{console.warn("realtime cooklog error:",t)})),Rt.push(Cn(kn(An,`households/${n}/wastelog`),t=>{h.wasteLog=e(t).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},t=>{console.warn("realtime wastelog error:",t)})),le("synced"),console.log("[realtime] Listeners started for household:",n)}function am(){Rt.forEach(n=>{try{n()}catch{}}),Rt=[],console.log("[realtime] All listeners stopped")}function el(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(h.cfg.adults||"Bora").split(",")[0].trim(),i=f("grt");i&&(i.innerHTML=`${e}, <span>${t}</span>`);const s=f("hdt");s&&(s.textContent=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})),Kn()}function tl(){nl(),Rr==null||Rr()}let Rr=null;function wE(n){Rr=n}function nl(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(h.cfg.adults||"Bora").split(",")[0].trim(),i=f("grt");i&&!i.innerHTML&&(i.innerHTML=`${e}, <span>${t}</span>`),Kn(),Vs(),IE(),kE(),xi(),AE(),um(),bE()}function _E(n){const e=`ks-home-${n}-collapsed`,t=xe(e);Ze(e,!t),Za(n)}function Za(n){const e=`ks-home-${n}-collapsed`,t=xe(e),i=f(`${n}-arrow`),r=f({lowstock:"lowstocklist",activity:"activityfeed",cooktonight:"cooktonightbody"}[n]||n);i&&(t?i.classList.add("collapsed"):i.classList.remove("collapsed")),r&&(t?r.classList.add("collapsed"):r.classList.remove("collapsed"))}function bE(){Za("lowstock"),Za("activity")}function xi(){const n=Zt(),e=h.mp[n],t=f("tnd"),i=f("tna"),s=f("tonight-main");s&&(s.onclick=function(){window.openMealM(n,"Today")}),e?(t&&(t.innerHTML=e),i&&(i.innerHTML=`<button class="btn bsm bp" onclick="event.stopPropagation();openCooked('${n}')">✓ Cooked</button><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${n}','Today')">Edit</button>`)):(t&&(t.innerHTML='<span style="font-size:.9rem;color:var(--mt);font-style:italic">No meal planned yet</span>'),i&&(i.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openRecipeMatch()">🔍 Find recipes</button><button class="btn bsm bs" onclick="event.stopPropagation();showScreen('chat')">Ask Claude →</button>`))}function Kn(){const n=["S","M","T","W","T","F","S"],e=new Date;e.setHours(0,0,0,0);const t=f("wgrd");t&&(t.innerHTML=ki().map((i,s)=>{const r=i.toISOString().split("T")[0],o=i.getTime()===e.getTime(),c=h.mp[r];return`<div class="wd${o?" today":""}${c?" hm":""}" onclick="openMealM('${r}','${n[s]} ${i.getDate()}')"><div class="wdn">${n[s]}</div><div class="wdd">${i.getDate()}</div>${c?`<div class="wdm">${c.substring(0,10)}${c.length>10?"…":""}</div>`:""}</div>`}).join(""),TE())}function TE(){const n=f("variety-nudge");if(!n)return;const e=ki().map(o=>h.mp[o.toISOString().split("T")[0]]).filter(Boolean);if(e.length<3){n.style.display="none";return}const t=e.some(o=>/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(o)),i=e.some(o=>/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner/i.test(o)),s={};e.forEach(o=>{const c=o.toLowerCase();s[c]=(s[c]||0)+1});const r=Object.entries(s).find(([,o])=>o>=3);r?(n.style.display="block",n.innerHTML="🔄 <strong>"+r[0]+"</strong> is planned "+r[1]+"× this week — maybe try something different?"):!t&&!i?(n.style.display="block",n.innerHTML="🌍 No Bangladeshi or Turkish dishes this week yet — ask Claude for ideas!"):t?i?n.style.display="none":(n.style.display="block",n.innerHTML="🇹🇷 No Turkish dishes this week — köfte or mercimek çorbası would be great!"):(n.style.display="block",n.innerHTML="🇧🇩 No Bangladeshi dishes this week — how about a dal or fish curry?")}function Vs(){const n=h.inv.filter(c=>{const l=bt(c.expiry);return l&&(l.c==="expiring"||l.c==="expired")}).length,e=h.shop.filter(c=>!c.checked).length,t=f("home-exp-val"),i=f("home-exp-sub");t&&(n>0?(t.textContent=n+" item"+(n>1?"s":""),t.className="tc-val",t.style.color="var(--am)"):(t.textContent="All fresh!",t.className="tc-val tc-green")),i&&(i.textContent=n>0?"expiring soon":"Nothing in next 3 days");const s=f("home-shop-val"),r=f("home-shop-sub");s&&(s.textContent=e),r&&(r.textContent=e===1?"item to buy":e===0?"all stocked up":"items to buy");const o=f("sgrd");o&&(o.innerHTML=`<div class="sc" onclick="showScreen('inventory')"><div class="sci">🧺</div><div class="scv">${h.inv.length}</div><div class="scl">Items in stock</div></div><div class="sc${n>0?" warn":""}" onclick="showScreen('inventory')"><div class="sci">⏱</div><div class="scv">${n}</div><div class="scl">Expiring soon</div></div><div class="sc" onclick="showScreen('shopping')"><div class="sci">🛒</div><div class="scv">${e}</div><div class="scl">To buy</div></div><div class="sc" onclick="showScreen('recipes')"><div class="sci">📖</div><div class="scv">${h.recs.length}</div><div class="scl">Saved recipes</div></div>`)}function IE(){const n=h.inv.filter(i=>{const s=bt(i.expiry);return s&&(s.c==="expiring"||s.c==="expired")}).sort((i,s)=>new Date(i.expiry)-new Date(s.expiry)),e=f("exslbl"),t=f("expl");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(i=>{const s=bt(i.expiry);return`<div class="exi${s.c==="expired"?" exp":""}" onclick="openAdj('${i.id}')"><div class="exn">${Si(i.name)}</div><div class="exd">${s.l}</div></div>`}).join("")}}const EE=new Set(["Bottle","Jar","Can","Carton","Bunch","Head","Loaf","Dozen","Tube","Roll","Gallon","Half Gallon","Liter"]),SE=new Set(["Piece","Unit","Pack","Box","Bag","Pound","Oz","Clove"]);function bo(n){return n?EE.has(n)?1:(SE.has(n),2):2}function kE(){const n=h.inv.filter(i=>{if(i.doNotRestock)return!1;const s=i.restockThreshold!=null?i.restockThreshold:bo(i.unit);return i.qty<=s}).sort((i,s)=>i.qty-s.qty),e=f("lowstocklbl"),t=f("lowstocklist");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(i=>`<div class="exi" style="border-color:var(--am)" onclick="openAdj('${i.id}')">
    <div style="flex:1;min-width:0">
      <div class="exn">${Si(i.name)}</div>
      <div style="font-size:.7rem;color:var(--am);font-weight:600;margin-top:1px">${i.qty} ${i.unit||"Unit"}</div>
    </div>
    <button class="low-add-btn" onclick="event.stopPropagation();addLowToShop('${i.id}')">🛒 Add</button>
  </div>`).join("")}}async function CE(n){const e=h.inv.find(i=>i.id===n);if(!e)return;if(h.shop.find(i=>i.name.toLowerCase()===e.name.toLowerCase()&&!i.checked)){P(`${e.name} is already on your list`);return}await ye({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"low-stock"}),P(`${e.name} added to shopping list 🛒`)}async function AE(){const n=f("activityfeed"),e=f("activitylbl");if(!n)return;const t=await jf();if(!t.length){e&&(e.style.display="none"),n.innerHTML="";return}e&&(e.style.display="flex");const i=s=>{const r=Date.now()-new Date(s).getTime(),o=Math.floor(r/6e4);if(o<1)return"just now";if(o<60)return o+"m ago";const c=Math.floor(o/60);if(c<24)return c+"h ago";const l=Math.floor(c/24);return l===1?"yesterday":l+"d ago"};n.innerHTML=t.slice(0,3).map(s=>`<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--b1)">
      <div style="width:28px;height:28px;border-radius:50%;background:var(--acd);display:flex;align-items:center;justify-content:center;font-size:.7rem;flex-shrink:0;color:var(--ac);font-weight:700">${(s.memberName||"?")[0].toUpperCase()}</div>
      <div style="flex:1;font-size:.82rem;color:var(--tx2);line-height:1.4;font-family:'DM Sans',sans-serif"><strong style="color:var(--tx);font-weight:600">${(s.memberName||"Someone").replace(/</g,"&lt;")}</strong> ${(s.action||"").replace(/</g,"&lt;")} <strong style="color:var(--tx);font-weight:600">${(s.itemName||"").replace(/</g,"&lt;")}</strong></div>
      <div style="font-size:.68rem;color:var(--mt);flex-shrink:0">${i(s.timestamp)}</div>
    </div>`).join("")}const rh=5;let rs=[],kt=0;function cm(n){return(n||"").toLowerCase().trim().replace(/^[\d\s\/\.½¼¾⅓⅔]+/,"").replace(/\b(cups?|tbsp?|tsp?|tablespoons?|teaspoons?|ounces?|oz|lbs?|pounds?|grams?|g|kg|ml|liters?|cloves?|cans?|large|small|medium|fresh|dried|chopped|minced|sliced|diced|to taste|optional|about)\b/gi,"").replace(/\s+/g," ").trim().replace(/s$/,"")}function RE(n,e){let t=[];if(n.ingredientsRaw&&Array.isArray(n.ingredientsRaw)?t=n.ingredientsRaw:n.ingredients&&(t=n.ingredients.split(/[;\n]+/).map(c=>c.trim()).filter(Boolean)),!t.length)return{matchPct:0,matchCount:0,totalCount:0,missing:[]};const i=[];let s=0;const r=t.length;for(const c of t){const l=cm(c);if(!l){s++;continue}e.some(m=>m.includes(l)||l.includes(m))?s++:i.push(c)}return{matchPct:r>0?Math.round(s/r*100):0,matchCount:s,totalCount:r,missing:i}}async function PE(){const n=f("recipeMatchResults");if(n){rt("recipematch"),n.innerHTML='<div style="text-align:center;padding:40px 0"><div class="spin" style="width:32px;height:32px;margin:0 auto 12px"></div><div style="font-size:.85rem;color:var(--mt)">Matching recipes to your supplies…</div></div>';try{const e=h.inv.map(i=>cm(i.name)).filter(Boolean),t=await oe("public_recipes");if(!t.length){n.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--mt)">No community recipes available yet.<br/>Publish some recipes first!</div>';return}rs=t.map(i=>{const s=RE(i,e);return{...i,...s}}).filter(i=>i.matchPct>=60).sort((i,s)=>s.matchPct-i.matchPct),kt=0,lm(n)}catch(e){console.error("Recipe match error:",e),n.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--rd)">Something went wrong. Try again.</div>'}}}function lm(n){if(!rs.length){n.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--mt)">No recipes match 60% or more of your supplies.<br/>Try adding more items to your pantry!</div>';return}const e=rs.slice(kt,kt+rh);kt+=e.length;const t=e.map(i=>{let s,r;i.matchPct===100?(s="var(--gn)",r="Ready to cook!"):i.matchPct>=80?(s="var(--am)",r="Almost there"):(s="#e67e22",r="Need a few things");const o=i.imageUrl?`<img src="${i.imageUrl}" style="width:100%;height:140px;object-fit:cover;border-radius:12px 12px 0 0" alt="" onerror="this.style.display='none'"/>`:'<div style="width:100%;height:80px;background:var(--sf);border-radius:12px 12px 0 0;display:flex;align-items:center;justify-content:center;font-size:2rem">🍽</div>',c=i.missing.length?`<div style="margin-top:8px"><div style="font-size:.7rem;color:var(--mt);font-weight:600;margin-bottom:4px">Missing (${i.missing.length}):</div>${i.missing.map(d=>`<span style="display:inline-block;font-size:.68rem;padding:2px 8px;border-radius:8px;background:var(--rdd);color:var(--rd);margin:2px 3px 2px 0">${d}</span>`).join("")}</div>`:"",l=[i.cookTime,i.cuisine].filter(Boolean).join(" · ");return`<div style="background:var(--card);border:1.5px solid var(--b1);border-radius:14px;margin-bottom:12px;overflow:hidden;cursor:pointer" onclick="openComRecipe('${i.id}')">
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
    </div>`}).join("");if(kt<=rh)n.innerHTML=t;else{const i=n.querySelector(".match-more-btn");i&&i.remove(),n.insertAdjacentHTML("beforeend",t)}kt<rs.length?n.insertAdjacentHTML("beforeend",`<div style="text-align:center;padding:12px 0"><button class="btn bs match-more-btn" onclick="showMoreMatches()">Show 5 more (${rs.length-kt} remaining)</button></div>`):kt>0&&n.insertAdjacentHTML("beforeend",`<div style="text-align:center;padding:12px 0;font-size:.75rem;color:var(--mt)">Showing all ${kt} matching recipes</div>`)}function xE(){const n=f("recipeMatchResults");n&&lm(n)}function um(){const n=["fridge","freezer","pantry","household"].map(t=>{const i=h.inv.filter(s=>s.location===t);return i.length?Yf(t).toUpperCase()+`
`+i.map(s=>`- ${s.name}${s.brand?` (${s.brand})`:""}: ${s.qty} ${s.unit}`).join(`
`):""}).filter(Boolean).join(`

`),e=f("expbox");e&&(e.textContent=n||"No items yet.")}const LE="modulepreload",DE=function(n){return"/"+n},oh={},$E=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let o=function(d){return Promise.all(d.map(m=>Promise.resolve(m).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(t.map(d=>{if(d=DE(d),d in oh)return;oh[d]=!0;const m=d.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${g}`))return;const v=document.createElement("link");if(v.rel=m?"stylesheet":LE,m||(v.as="script"),v.crossOrigin="",v.href=d,l&&v.setAttribute("nonce",l),document.head.appendChild(v),m)return new Promise((S,x)=>{v.addEventListener("load",S),v.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${d}`)))})}))}function r(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&r(c.reason);return e().catch(r)})};function dm(n){return n?n.trim().toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").slice(0,60):null}async function To(n){if(!h.hid||!n)return null;const e=dm(n);if(!e)return null;try{return await ie(`households/${h.hid}/productPreferences/${e}`)||null}catch{return null}}async function hm(n,e){if(!h.hid||!n)return;const t=dm(n);if(t)try{const i=await ie(`households/${h.hid}/productPreferences/${t}`)||{};K(`households/${h.hid}/productPreferences/${t}`,{...i,...e,productName:n.trim(),updatedAt:new Date().toISOString()}).catch(s=>console.warn("Failed to save product preference:",s))}catch(i){console.warn("Failed to read product preference for merge:",i)}}function il(n,e){e&&hm(n,{preferredLocation:e})}function sl(n,e){e&&hm(n,{preferredUnit:e})}let Qe=null,pa=!1,Ji="",ma=!1;function NE(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=f("shopAddMicOpt");e&&(e.style.display="")}function ah(n){const e=f("micstatus");e&&e.classList.toggle("visible",n)}function fm(){if(pa&&Qe){ma=!0,Qe.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){P("Voice input not supported");return}Qe=new n,Qe.lang="en-US",Qe.interimResults=!0,Qe.maxAlternatives=1,Qe.continuous=!1,Ji="",pa=!0,ah(!0),Qe.onresult=e=>{let t="";for(let s=e.resultIndex;s<e.results.length;s++){const r=e.results[s][0].transcript;e.results[s].isFinal?Ji+=r:t+=r}const i=f("shi");i&&(i.value=(Ji+t).trim())},Qe.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&P("Couldn't hear that — try again")},Qe.onend=()=>{let e=(Ji||"").trim();if(!e&&ma){const t=f("shi");e=t?t.value.trim():""}if(pa=!1,Qe=null,Ji="",ma=!1,ah(!1),e){let t=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||1):s&&(t=s[2].trim(),i=parseInt(s[1],10)||1);const o={id:Date.now().toString(),name:t,qty:i,checked:!1,src:"manual"};ye(o),P(`Added "${e}" 🎤`);const c=f("shi");c&&(c.value="")}},Qe.start()}function pm(n){if(!n.brand)return!1;if(n.src==="scan")return!0;if(n.src==="search"&&n.searchQuery){const e=n.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),t=n.brand.toLowerCase();return e.some(i=>t.includes(i))}return!1}function ur(n){const e=n.qty||1,t=n.unit||"Unit",i=`<span class="sh-qty${e===1?" sh-qty-one":""}"> × ${e} ${t}</span>`;return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="shop">
    <div class="swipe-inner">
      <!-- Main row: swipeRowTap handles multi-select; checkbox toggles checked; content area opens detail -->
      <div class="shit${n.checked?" chk":""}" onclick="swipeRowTap('${n.id}','shop')">
        <div class="sel-cb">✓</div>           <!-- Multi-select checkbox (hidden unless selectMode is active) -->
        <div class="shck" onclick="event.stopPropagation();togShop('${n.id}')">${n.checked?"✓":""}</div>  <!-- Slim ring: tap to mark as bought; hidden in select mode (replaced by sel-cb) -->
        <div style="flex:1;min-width:0;cursor:pointer" onclick="openItemDetail('${n.id}')">
          <div class="shnm">${Si(n.name)}${i}</div>
          ${pm(n)?`<div class="sh-brand">${n.brand}</div>`:""}  <!-- Brand shown for barcode scans always; for text search only if the user's query matches the brand name -->
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
  </div>`}function Li(){const n=(o,c)=>o.name.localeCompare(c.name),e=f("shlist"),t=h.shop.filter(o=>!o.checked).sort(n),i=h.shop.filter(o=>o.checked).sort(n),s=f("clrchk");s&&(s.style.display=i.length?"block":"none");const r=f("shsub");if(r&&(r.textContent=t.length+" items to buy"),!!e){if(!h.shop.length){e.innerHTML='<div class="es"><div class="ei">🛒</div><p>Your list is empty!<br/>Add items or use "Build from meal plan".</p></div>';return}if(h.aisleMode&&t.length){const o={};t.forEach(c=>{const l=lb(c.name);o[l]||(o[l]=[]),o[l].push(c)}),e.innerHTML=Object.entries(o).sort().map(([c,l])=>`<div class="shsec">${c}</div>${l.map(ur).join("")}`).join("")+(i.length?`<div class="shsec">Done</div>${i.map(ur).join("")}`:"")}else e.innerHTML=(t.length?`<div class="shsec">To buy (${t.length})</div>${t.map(ur).join("")}`:"")+(i.length?`<div class="shsec">Done</div>${i.map(ur).join("")}`:"");if(h.selectMode==="shop"){document.querySelectorAll("#shlist .swipe-wrap").forEach(c=>{c.classList.add("selecting"),h.selectedIds.has(c.dataset.id)&&c.classList.add("selected")});const o=document.querySelector(".shbody");o&&(o.style.paddingLeft="52px")}}}function ME(){const n=f("shi"),e=n.value.trim();if(!e)return;if(hi&&hi.length===1){gm(0);return}let t=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||1):s&&(t=s[2].trim(),i=parseInt(s[1],10)||1);const o=f("addNoteInp"),c=o?o.value.trim():"",l={id:Date.now().toString(),name:t,qty:i,checked:!1,src:"manual"};c&&(l.note=c),ye(l),n.value="",o&&(o.value="");const d=f("addNoteWrap");d&&(d.style.display="none"),rl(),Us()}function OE(){const n=f("addNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=f("addNoteInp");t&&t.focus()}}function VE(){const n=f("shopAddBackdrop"),e=f("shopAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),setTimeout(()=>{const t=f("shi");t&&(t.value="",t.focus())},150)}function Us(){const n=f("shopAddBackdrop"),e=f("shopAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),rl()}function UE(){Us(),window.openScanForList&&window.openScanForList()}function FE(){Us(),fm()}let hi=null;function BE(){}const jE=new Set(["salad","soup","stew","casserole","dish","recipe","curry","pie","sandwich","wrap","risotto","gratin","puree","smoothie","juice","namasu","pickled","marinated","braised","sauteed","sautéed","coleslaw","gazpacho","chutney","relish","compote","ragout","ratatouille","succotash","bruschetta","ceviche","tartare"]),HE=["made with","and vegetable","and rice","and noodle","and cheese","cooked in","served with","topped with","stuffed with","mixed with","tossed with","dressed with"];function zE(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(t===i)return!1;for(const o of HE)if(t.includes(o)&&!i.includes(o))return!0;const s=new Set(i.split(/\s+/)),r=t.split(/[\s,&+\-–—/()[\]]+/).filter(o=>o.length>=2);for(const o of r)if(jE.has(o)&&!s.has(o))return!0;return!1}const mm=new Set(["a","an","the","and","or","with","for","of","in","to","by","is","it","at","on","no","not","all","each","per","from","free","style","natural","original","premium","organic","fresh","whole","pure","real","lite","light","low","high","extra","reduced","fat","nonfat","skim","raw","roasted","unsweetened","sweetened","flavored","smoked","dried","frozen","canned","pack","ct","oz","lb","ml","kg","fl","count","size","gallon","quart","pint","liter","bag","box","can","jar","bottle","container","pouch","tub","carton","plain","creamy","chunky","crispy","crunchy","spicy","mild","hot","cold","classic","homestyle","traditional","artisan","greek","italian","mexican","asian","indian","mini","small","medium","large","jumbo","giant","big","handheld","electric","portable","automatic","manual","new","best","top","value","brand"]);function ch(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(t===i||t.startsWith(i+" "))return!0;const s=i.split(/\s+/).filter(c=>c.length>=2),r=t.split(/[\s,&+\-–—/()[\]]+/).filter(c=>c.length>=2&&!mm.has(c)&&!/^\d+$/.test(c));if(r.length<=2)return!0;let o=0;for(const c of r)s.some(d=>{if(c.startsWith(d)||d.startsWith(c))return!0;const m=Math.min(c.length,d.length,3);return m>=3&&c.slice(0,m)===d.slice(0,m)})&&o++;return o/r.length>=.5}function qE(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(zE(n,e))return 0;if(t===i)return 100;if(t.startsWith(i+" ")||t.startsWith(i))return 95;const r=t.split(/[\s,&+\-–—/]+/).filter(o=>o.length>=2).filter(o=>!mm.has(o)&&!/^\d+$/.test(o));if(r.length&&(r[0].startsWith(i)||i.startsWith(r[0]))){const o=r.filter(l=>!l.startsWith(i)&&!i.startsWith(l)).length,c=85-Math.min(o*8,30);return ch(n,e)?c:0}for(let o=1;o<Math.min(3,r.length);o++)if(r[o].startsWith(i)||i.startsWith(r[o])){const c=r.filter(d=>!d.startsWith(i)&&!i.startsWith(d)).length,l=60-o*10-Math.min(c*8,20);return ch(n,e)?Math.max(l,5):0}return 0}function gm(n){if(!hi||!hi[n])return;const e=hi[n],t=f("addNoteInp"),i=t?t.value.trim():"",s=f("shi")?f("shi").value.trim():"",r={id:Date.now().toString(),name:e.name,qty:1,checked:!1,src:"search",brand:e.brand||"",category:e.category||"",source:e.source||"search",searchQuery:s};i&&(r.note=i),ye(r),P(`Added "${e.name}" ✓`);const o=f("shi");o&&(o.value=""),t&&(t.value="");const c=f("addNoteWrap");c&&(c.style.display="none"),rl(),Us()}function rl(){hi=null;const n=f("shopSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}async function ol(n,e,t){}function ym(){const n=f("enrichBackdrop"),e=f("enrichSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),window._enrichCtx=null}async function vm(n){if(h.selectMode)return;event&&event.stopPropagation();const e=h.shop.find(d=>d.id===n);if(!e)return;const t=f("itemDetailContent");if(!t)return;const i=pm(e);let s=`<div class="item-detail-header">
    <div style="flex:1;min-width:0">
      <div class="item-detail-name">${Si(e.name)}</div>
      ${i?`<div class="item-detail-brand">${e.brand}</div>`:""}
      ${e.checked?'<div style="margin-top:4px"><span class="item-detail-badge" style="background:var(--gnd);color:var(--gn)">✓ Purchased</span></div>':""}
    </div>
  </div>`;const r=e.qty||1,o=e.unit||"Unit";s+=`<div class="item-detail-section">
    <div class="item-detail-label">Quantity</div>
    <div style="display:flex;align-items:center;gap:8px">
      <button class="qbtn" onclick="changeShopQty('${e.id}',-1)">−</button>
      <input class="qinp" id="shop-qty-${e.id}" type="number" min="1" value="${r}" style="width:48px;text-align:center" onblur="changeShopQtyDirect('${e.id}')"/>
      <button class="qbtn" onclick="changeShopQty('${e.id}',1)">+</button>
      <span style="font-size:.8rem;color:var(--mt)">${o}</span>
    </div>
  </div>`,s+=`<div class="item-detail-section">
    <div class="item-detail-label">Unit of Measure</div>
    <select class="detail-select" onchange="changeShopUnit('${e.id}',this.value)">
      ${Im.map(d=>`<option value="${d}"${d===o?" selected":""}>${d}</option>`).join("")}
    </select>
  </div>`,e.note&&(s+=`<div class="item-detail-section">
      <div class="item-detail-label">Note</div>
      <div class="item-detail-value">${e.note}</div>
    </div>`),s+='<button class="btn bs bf" onclick="closeItemDetail()" style="margin-top:8px">Close</button>',t.innerHTML=s;const c=f("itemDetailBackdrop"),l=f("itemDetailSheet");c&&c.classList.add("active"),l&&l.classList.add("active")}function WE(){const n=f("itemDetailBackdrop"),e=f("itemDetailSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}async function GE(n,e){const t=h.shop.find(s=>s.id===n);if(!t)return;await ye({...t,unit:e}),sl(t.name,e);const i=h.inv.find(s=>s.name.toLowerCase().trim()===t.name.toLowerCase().trim());i&&await se({...i,unit:e}),P("Unit updated everywhere"),vm(n)}async function KE(n,e){const t=h.shop.find(r=>r.id===n);if(!t)return;const i=Math.max(1,(t.qty||1)+e),s=f(`shop-qty-${n}`);s&&(s.value=i),await ye({...t,qty:i})}async function QE(n){const e=h.shop.find(s=>s.id===n);if(!e)return;const t=f(`shop-qty-${n}`),i=Math.max(1,parseInt(t==null?void 0:t.value,10)||1);i!==(e.qty||1)&&await ye({...e,qty:i})}async function JE(n){}function YE(n){}async function XE(n){}function ZE(n){const e=window._enrichCtx;if(!e)return;const t=e.results[n];if(t){if(e.list==="shop"){const i=h.shop.find(s=>s.id===e.itemId);i&&ye({...i,name:t.name,brand:t.brand||"",category:t.category||"",source:t.source||"search"})}else if(e.list==="inv"){const i=h.inv.find(s=>s.id===e.itemId);i&&se({...i,name:t.name,brand:t.brand||"",category:t.category||i.category,source:t.source||"search"})}ym(),P(`Updated with "${t.name}" ✓`)}}function wm(n){if(!h.hid||!n)return;const e=Date.now().toString(36)+Math.random().toString(36).slice(2,6);K(`households/${h.hid}/completed_items/${e}`,{name:n,completedAt:new Date().toISOString()}).catch(t=>console.warn("recordCompleted error:",t))}function e0(n){const e=h.shop.find(i=>i.id===n);if(!e)return;const t=!e.checked;ye({...e,checked:t}),t&&wm(e.name)}function t0(n,e){n.stopPropagation();const t=f("sne-"+e),i=f("sni-"+e);if(!t)return;t.classList.toggle("open")&&i&&(i.focus(),i.setSelectionRange(i.value.length,i.value.length))}function n0(n){const e=f("sni-"+n);if(!e)return;const t=h.shop.find(s=>s.id===n);if(!t)return;const i=e.value.trim();i!==(t.note||"")&&ye({...t,note:i})}function i0(n){const e=f("sqe-"+n),t=f("sqi-"+n);if(!e)return;e.classList.toggle("open")&&t&&(t.focus(),t.select())}function s0(n,e){const t=f("sqi-"+n);if(!t)return;const i=Math.max(1,(parseInt(t.value,10)||1)+e);t.value=i,_m(n)}function _m(n){const e=f("sqi-"+n);if(!e)return;const t=h.shop.find(s=>s.id===n);if(!t)return;const i=Math.max(1,parseInt(e.value,10)||1);i!==(t.qty||1)&&ye({...t,qty:i})}function r0(){h.aisleMode=!h.aisleMode;const n=f("aislebtn");n&&(n.style.background=h.aisleMode?"var(--ac)":"",n.style.color=h.aisleMode?"var(--bg)":""),Li()}function o0(n){["list","deals"].forEach(i=>{const s=f("shtab-"+i);s&&s.classList.remove("active");const r=f("sh-"+i+"-body");r&&(r.style.display="none")});const e=f("shtab-"+n);e&&e.classList.add("active");const t=f("sh-"+n+"-body");t&&(t.style.display="block"),n==="deals"&&bm()}function a0(){const n=h.shop.filter(i=>!i.checked);if(!n.length){P("List is empty!");return}const t=`🛒 Shopping List

`+n.map(i=>{let s="• "+i.name;return(i.qty||1)>1&&(s+=" × "+i.qty),i.price&&(s+=" (~$"+i.price+")"),s}).join(`
`);navigator.share?navigator.share({title:"Shopping List",text:t}).catch(()=>{}):navigator.clipboard&&navigator.clipboard.writeText(t).then(()=>P("List copied!"))}let ga={},ec={};async function c0(){const n=h.shop.filter(t=>t.checked);if(!n.length){P("No completed items!");return}ga={},ec={};for(const t of n){const i=await To(t.name),s=t.name.toLowerCase();i!=null&&i.preferredLocation&&(ga[s]=i.preferredLocation),i!=null&&i.preferredUnit&&(ec[s]=i.preferredUnit)}const e=f("atk-body");e.innerHTML=`<div style="padding:16px">
    <p style="font-size:.82rem;color:var(--mt);margin-bottom:16px">Choose where each item goes in your kitchen, then tap Add All.</p>
    ${n.map(t=>{const i=ga[t.name.toLowerCase()]||xc(t.name);return`<div class="atk-item" id="atk-${t.id}" data-loc="${i}">
        <div class="atk-name">${t.name}</div>
        <div class="atk-loc">
          <button onclick="setAtkLoc('${t.id}','fridge',this)" class="${i==="fridge"?"sel":""}">🌡 Fridge</button>
          <button onclick="setAtkLoc('${t.id}','freezer',this)" class="${i==="freezer"?"sel":""}">🧊 Freeze</button>
          <button onclick="setAtkLoc('${t.id}','pantry',this)" class="${i==="pantry"?"sel":""}">🥫 Pantry</button>
          <button onclick="setAtkLoc('${t.id}','household',this)" class="${i==="household"?"sel":""}">🏠 House</button>
        </div>
      </div>`}).join("")}
  </div>`,rt("atk")}function l0(n,e,t){const i=f("atk-"+n);i.dataset.loc=e,i.querySelectorAll(".atk-loc button").forEach(s=>s.classList.remove("sel")),t.classList.add("sel")}async function u0(){const n=h.shop.filter(i=>i.checked),e=new Date().toLocaleDateString();let t=0;for(const i of n){const s=f("atk-"+i.id);if(!s)continue;const r=s.dataset.loc||xc(i.name),o=h.inv.find(l=>l.name.toLowerCase()===i.name.toLowerCase()),c=i.qty||1;await se({id:o?o.id:"inv-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:o?o.name:i.name,qty:o?o.qty+c:c,unit:o?o.unit:i.unit&&i.unit!=="unit"?i.unit:ec[i.name.toLowerCase()]||"unit",location:r,category:o?o.category:Ci({name:i.name}),addedAt:o?o.addedAt:e,brand:o?o.brand:i.brand||"",expiry:o?o.expiry:null,image:o?o.image:i.image||null,source:"shopping"}),il(i.name,r),await Ei(i.id),t++}Ee("atk"),P(`${t} item${t!==1?"s":""} added to your supplies! 🧺`)}async function d0(){const n=ki().map(s=>{const r=s.toISOString().split("T")[0];return h.mp[r]?`${s.toLocaleDateString("en-US",{weekday:"short"})}: ${h.mp[r]}`:""}).filter(Boolean).join(", ");if(!n){P("No meals planned yet!");return}const e=h.inv.map(s=>`${s.name} (${s.qty} ${s.unit})`).join(", "),t=document.querySelector('[onclick="buildList()"]'),i=t?t.textContent:"";t&&(t.disabled=!0,t.textContent="⏳ Thinking…");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:500,messages:[{role:"user",content:`Week meals: ${n}
Already have: ${e}
List ONLY ingredients still needed. Return ONLY a bullet list, each line starting "- ". No categories, no headers, no explanation.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",c=[],l=[];o.split(`
`).forEach(L=>{const R=L.match(/^[-•*]\s+(.+)/);if(R){const M=R[1].replace(/\*\*/g,"").trim();M&&!h.shop.find(U=>U.name.toLowerCase()===M.toLowerCase())&&c.push({name:M,sel:!0})}});const d=o.split(`
`).filter(L=>L.match(/^[-•*]\s+/)).length,m=h.inv.map(L=>L.name.toLowerCase());if(c.forEach(L=>{const R=h.inv.find(M=>M.name.toLowerCase()===L.name.toLowerCase());R&&R.qty>0&&(L.note=`Have ${R.qty} ${R.unit} — need more`)}),!c.length){P("Nothing new needed — you're all stocked! ✓");return}window._bpItems=c;const g=h.inv.length>0?Math.max(0,d-c.length):0,v=c.filter(L=>L.note).length,S=[];g>0&&S.push(`✅ ${g} already in stock`),v>0&&S.push(`⚠️ ${v} partially stocked`),S.push(`🛒 ${c.length} to add`);const x=`<div style="padding:10px 16px;background:var(--acd);border-radius:12px;margin-bottom:12px;font-size:.82rem;color:var(--tx2);line-height:1.6">${S.join("<br>")}</div>`;f("bpList").innerHTML=x+c.map((L,R)=>`<div id="bpitem-${R}" onclick="bpTog(${R})" style="display:flex;align-items:center;gap:12px;padding:13px 16px;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;cursor:pointer;transition:all .15s"><div id="bpck-${R}" style="width:24px;height:24px;border-radius:50%;background:var(--gn);border:2px solid var(--gn);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.8rem;color:#0c0c0a;transition:all .2s">✓</div><div style="flex:1;min-width:0"><div style="font-size:.9rem;font-weight:500">${L.name}</div>${L.note?`<div style="font-size:.72rem;color:var(--am);margin-top:2px">${L.note}</div>`:""}</div></div>`).join(""),al(),f("buildPreviewM").classList.add("active")}catch{P("Couldn't reach Claude — check connection")}finally{t&&(t.disabled=!1,t.textContent=i)}}function h0(n){window._bpItems[n].sel=!window._bpItems[n].sel;const e=f("bpck-"+n),t=f("bpitem-"+n);window._bpItems[n].sel?(e.textContent="✓",e.style.background="var(--gn)",e.style.borderColor="var(--gn)",e.style.color="#0c0c0a",t.style.borderColor="var(--b1)"):(e.textContent="",e.style.background="transparent",e.style.borderColor="var(--b2)",t.style.borderColor="var(--b2)"),al()}function f0(n){window._bpItems.forEach((e,t)=>{window._bpItems[t].sel=n;const i=f("bpck-"+t),s=f("bpitem-"+t);n?(i.textContent="✓",i.style.background="var(--gn)",i.style.borderColor="var(--gn)",i.style.color="#0c0c0a",s.style.borderColor="var(--b1)"):(i.textContent="",i.style.background="transparent",i.style.borderColor="var(--b2)",s.style.borderColor="var(--b2)")}),al()}function al(){const n=window._bpItems.filter(t=>t.sel).length,e=f("bpAddBtn");e&&(e.textContent=n?`Add ${n} item${n!==1?"s":""}  ✓`:"Nothing selected"),e&&(e.disabled=!n)}async function p0(){const n=window._bpItems.filter(e=>e.sel);if(!n.length){f("buildPreviewM").classList.remove("active");return}for(const e of n)await ye({id:Date.now().toString()+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"meal-plan"});f("buildPreviewM").classList.remove("active"),P(`Added ${n.length} item${n.length!==1?"s":""}! 🛒`)}function bm(){const n=f("deals-zip-banner");if(!n)return;const e=h.cfg.zipcode;e?(n.innerHTML=`📍 Searching deals near <strong>${e}</strong> <span style="font-size:.72rem;color:var(--mt)">(change in Settings)</span>`,n.style.borderColor="var(--b2)"):(n.innerHTML=`⚠️ Set your zipcode in <strong style="cursor:pointer;color:var(--ac)" onclick="hideOv('');showOv('settings')">Settings</strong> to find local deals near you.`,n.style.borderColor="var(--am)")}function tc(n,e){const t=f("dealslist");if(!n||!n.length){t.innerHTML=`<div class="es"><div class="ei">🏷</div><p>No deals found for <strong>${e}</strong>.<br>Try a different search term or check back later for new circulars.</p></div>`;return}t.innerHTML="",n.forEach(i=>{const s=document.createElement("div");s.className="deal-card"+(i.onSale?" deal-match":"");const r=document.createElement("div");r.style.flex="1";const o=document.createElement("div");o.className="deal-store",o.textContent=i.store||"Store";const c=document.createElement("div");if(c.className="deal-name",c.textContent=i.name||"",i.brand||i.size){const m=document.createElement("div");m.style.cssText="font-size:.72rem;color:var(--mt);margin-top:1px",m.textContent=[i.brand,i.size].filter(Boolean).join(" · "),r.appendChild(o),r.appendChild(c),r.appendChild(m)}else r.appendChild(o),r.appendChild(c);const l=document.createElement("div");if(l.style.cssText="display:flex;align-items:baseline;gap:6px;margin-top:4px;flex-wrap:wrap",i.sale_price){const m=document.createElement("span");m.className="deal-price",m.textContent=i.sale_price,l.appendChild(m)}if(i.onSale&&i.regular){const m=document.createElement("span");m.className="deal-orig",m.textContent=i.regular,l.appendChild(m)}if(i.savings){const m=document.createElement("span");m.className="deal-badge",m.textContent="Save "+i.savings,l.appendChild(m)}r.appendChild(l);const d=document.createElement("button");d.className="btn bs bsm",d.style.cssText="align-self:center;flex-shrink:0;margin-left:8px",d.textContent="+ List",(m=>{d.onclick=()=>Tm(m)})(i.name||""),s.appendChild(r),s.appendChild(d),t.appendChild(s)})}function nc(n){const e=f("deals-stores");!e||!n||!n.length||(e.style.display="block",e.innerHTML='<div style="font-size:.72rem;color:var(--mt);font-weight:600;margin-bottom:4px">Stores with deals</div>'+n.map(t=>`<div style="font-size:.74rem;color:var(--tx2);padding:2px 0">${t.name}</div>`).join(""))}function Tm(n){const e=(n||"").replace(/&#39;/g,"'");h.shop.find(t=>t.name.toLowerCase()===e.toLowerCase())?P("Already on your list!"):(ye({id:Date.now().toString(),name:e,qty:1,checked:!1,src:"deal"}),P(e+" added!"))}async function ic(n){const e=h.cfg.zipcode;if(!e)throw new Error("Set your zipcode in Settings to search for local deals.");const t="ks-deals-"+e+"-"+n.toLowerCase().replace(/\s+/g,"_").substring(0,40),i=xe(t);if(i&&i.ts&&Date.now()-i.ts<72e5)return i;const s=await fetch("/api/deals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({zipcode:e,query:n})}),r=await s.json();if(!s.ok||r.error)throw new Error(r.message||r.error||"Deals API request failed");return Ze(t,{...r,ts:Date.now()}),r}async function m0(){const n=f("dealsearch").value.trim();if(!n){P("Enter something to search");return}const e=f("dealsstatus");e.style.display="block",e.style.color="var(--mt)",e.textContent="🔍 Searching deals for "+n+" near "+(h.cfg.zipcode||"your area")+"…",f("dealslist").innerHTML="";try{const t=await ic(n);if(e.style.display="none",t.message){f("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${t.message}</p></div>`;return}t.stores&&nc(t.stores),tc(t.deals,n)}catch(t){e.style.color="var(--rd)",e.textContent=t.message||"Unknown error"}}async function g0(){const n=h.shop.filter(i=>!i.checked);if(!n.length){const i=Object.values(h.mp).filter(Boolean);if(!i.length){P("Add items to your list first!");return}if(!confirm(`Your list is empty. Search deals for this week's meals?

`+i.join(", ")))return;const r=f("dealsstatus");r.style.display="block",r.textContent="Searching deals for your meal plan...",f("dealslist").innerHTML="";try{const o=await ic(i.join(", "));if(r.style.display="none",o.message){f("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${o.message}</p></div>`;return}o.stores&&nc(o.stores),tc(o.deals,i.join(", "))}catch(o){r.style.color="var(--rd)",r.textContent=o.message}return}const e=f("dealsstatus"),t=n.slice(0,8).map(i=>i.name).join(", ");e.style.display="block",e.style.color="var(--mt)",e.textContent="Searching deals for: "+t+"...",f("dealslist").innerHTML="";try{const i=await ic(t);if(e.style.display="none",i.message){f("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${i.message}</p></div>`;return}i.stores&&nc(i.stores),i.deals.length?tc(i.deals,t):f("dealslist").innerHTML='<div class="es"><div class="ei">🏷</div><p>No deals found for your list items.<br/>Try searching for individual items.</p></div>'}catch(i){e.style.color="var(--rd)",e.textContent=i.message}}const Im=["Piece","Unit","Pack","Box","Bag","Bottle","Jar","Can","Bunch","Head","Loaf","Dozen","Carton","Tube","Roll","Gallon","Half Gallon","Liter","Pound","Oz","Clove"];function Em(n){if(!n.brand)return!1;if(n.source==="scan"||n.source==="Barcode")return!0;if(n.source==="search"&&n.searchQuery){const e=n.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),t=n.brand.toLowerCase();return e.some(i=>t.includes(i))}return!1}function y0(n){Xf[Ci(n)];const e=bt(n.expiry),t=e?e.c==="expired"?" expired":e.c==="expiring"?" expiring":"":"",i=e?`<div class="etag ${e.c}">${e.l}</div>`:"",s=Em(n)?`<div class="sh-brand">${n.brand}</div>`:"";return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="inv">
    <div class="swipe-inner">
      <div class="iit${t}" onclick="swipeRowTap('${n.id}','inv')">
        <div class="sel-cb">✓</div>
        <!-- Slim outlined circle: tapping opens detail sheet -->
        <div class="shck" onclick="event.stopPropagation();openInvItemDetail('${n.id}')"></div>
        <div style="flex:1;min-width:0;cursor:pointer" onclick="event.stopPropagation();openInvItemDetail('${n.id}')">
          <div class="inm">${Si(n.name)}</div>
          ${s}
          ${n.note?`<div class="shnote" style="margin-top:2px">📝 ${n.note}</div>`:""}
          ${i}
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div class="iqt">${n.qty}</div>
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
  </div>`}function Fs(){const n=(r,o)=>r.name.localeCompare(o.name),e=h.it==="all"?h.inv.slice().sort(n):h.inv.filter(r=>r.location===h.it).slice().sort(n),t=f("isub"),i={all:"items",fridge:"fridge items",freezer:"frozen items",pantry:"pantry items",household:"household items"};t&&(t.textContent=e.length+" "+(i[h.it]||"items")),um();const s=f("ibody");if(s){if(!e.length){s.innerHTML='<div class="es"><div class="ei">🧺</div><p>No items here yet.<br/>Tap + Add item to get started.</p></div>';return}s.innerHTML=`<div class="ilst">${e.map(y0).join("")}</div>`,h.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(r=>{r.classList.add("selecting"),h.selectedIds.has(r.dataset.id)&&r.classList.add("selected")})}}function v0(n){Bs(n)}async function Bs(n){if(h.selectMode)return;const e=h.inv.find(x=>x.id===n);if(!e)return;const t=f("invItemDetailContent");if(!t)return;const s=`<div class="item-detail-img-ph" style="display:flex;align-items:center;justify-content:center">
    <div style="font-size:1.6rem">${Xf[Ci(e)]||"🛒"}</div>
  </div>`,r="",o=Em(e),c=e.unit||"Unit",l=Im.map(x=>`<option value="${x}"${x===c?" selected":""}>${x}</option>`).join(""),d=e.restockThreshold!=null?e.restockThreshold:bo(c),m=bt(e.expiry);let g=`<div class="item-detail-header">
    <div>${s}${r}</div>
    <div style="flex:1;min-width:0">
      <div class="item-detail-name">${Si(e.name)}</div>
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
  </div>`,g+=`<div class="item-detail-section">
    <div class="item-detail-label">Quantity</div>
    <div style="display:flex;align-items:center;gap:8px">
      <button class="qbtn" onclick="changeInvQty('${e.id}',-1)">−</button>
      <input class="qinp" id="inv-qty-${e.id}" type="number" min="0" value="${e.qty}" style="width:48px;text-align:center" onblur="changeInvQtyDirect('${e.id}')"/>
      <button class="qbtn" onclick="changeInvQty('${e.id}',1)">+</button>
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
  </div>`,g+=`<div class="item-detail-section">
    <div class="item-detail-label">Restock when below</div>
    <div style="display:flex;align-items:center;gap:8px">
      <button class="qbtn" onclick="changeInvThreshold('${e.id}',-1)">−</button>
      <input class="qinp" id="inv-thresh-${e.id}" type="number" min="0" value="${d}" style="width:48px;text-align:center" onblur="changeInvThresholdDirect('${e.id}')"/>
      <button class="qbtn" onclick="changeInvThreshold('${e.id}',1)">+</button>
    </div>
  </div>`,g+=`<div class="item-detail-section" style="display:flex;align-items:center;justify-content:space-between">
    <div class="item-detail-label" style="margin-bottom:0">Don't add to Running Low</div>
    <label class="toggle-switch">
      <input type="checkbox" ${e.doNotRestock?"checked":""} onchange="toggleDoNotRestock('${e.id}',this.checked)"/>
      <span class="toggle-slider"></span>
    </label>
  </div>`,g+=`<button class="btn bf" style="margin-top:12px;background:var(--gnd);color:var(--gn);border:1.5px solid var(--gn)" onclick="addInvToShopping('${e.id}')">🛒 Add to Shopping List</button>
  <button class="btn bd bf" onclick="closeInvItemDetail();remItem('${e.id}')" style="margin-top:8px">Remove</button>`,t.innerHTML=g;const v=f("invItemDetailBackdrop"),S=f("invItemDetailSheet");v&&v.classList.add("active"),S&&S.classList.add("active")}function cl(){const n=f("invItemDetailBackdrop"),e=f("invItemDetailSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}async function w0(n){}function _0(n){}async function b0(n){}async function ll(n){const e=h.inv.find(t=>t.id===n);if(e){const t=bt(e.expiry);t&&(t.c==="expired"||t.c==="expiring")&&await xf(e.name)}await Ls(n),P("Item removed"),Ee("adj")}async function T0(n,e){const t=h.inv.find(i=>i.id===h.adjId);t&&(document.querySelectorAll("#adjbody .lbtn").forEach(i=>i.classList.remove("sel")),e.classList.add("sel"),await se({...t,location:n}),il(t.name,n))}async function I0(n){const e=h.inv.find(i=>i.id===h.adjId);if(!e)return;const t=Math.max(0,e.qty+n);if(f("adjqty").value=t,t===0){await ll(h.adjId);return}await se({...e,qty:t})}async function E0(){const n=h.inv.find(t=>t.id===h.adjId);if(!n)return;const e=parseInt(f("adjqty").value);!isNaN(e)&&e>=0&&await se({...n,qty:e})}async function S0(){const n=h.inv.find(e=>e.id===h.adjId);n&&await se({...n,expiry:f("adjexp").value||null})}async function k0(){const n=h.inv.find(t=>t.id===h.adjId);if(!n)return;const e=(f("adjnote").value||"").trim();await se({...n,note:e||null})}async function C0(){const n=h.inv.find(i=>i.id===h.adjId);if(!n)return;const e=f("adjunit").value;await se({...n,unit:e}),sl(n.name,e);const t=h.shop.find(i=>i.name.toLowerCase().trim()===n.name.toLowerCase().trim());t&&await ye({...t,unit:e}),P("Unit updated everywhere")}async function A0(n){const e=h.inv.find(s=>s.id===h.adjId);if(!e)return;const t=e.restockThreshold!=null?e.restockThreshold:bo(e.unit),i=Math.max(0,t+n);f("adjlowthresh").value=i,await se({...e,restockThreshold:i})}async function R0(){const n=h.inv.find(t=>t.id===h.adjId);if(!n)return;const e=parseInt(f("adjlowthresh").value);!isNaN(e)&&e>=0&&await se({...n,restockThreshold:e})}async function P0(){var t;const n=h.inv.find(i=>i.id===h.adjId);if(!n)return;const e=((t=f("adjdonotrestock"))==null?void 0:t.checked)||!1;await se({...n,doNotRestock:e})}async function x0(n,e){const t=h.inv.find(r=>r.id===n);if(!t)return;const i={...t,unit:e};t.restockThreshold==null,await se(i),sl(t.name,e);const s=h.shop.find(r=>r.name.toLowerCase().trim()===t.name.toLowerCase().trim());s&&await ye({...s,unit:e}),P("Unit updated everywhere"),Bs(n)}async function L0(n,e){const t=h.inv.find(o=>o.id===n);if(!t)return;const i=t.restockThreshold!=null?t.restockThreshold:bo(t.unit),s=Math.max(0,i+e),r=f(`inv-thresh-${n}`);r&&(r.value=s),await se({...t,restockThreshold:s})}async function D0(n){const e=h.inv.find(s=>s.id===n);if(!e)return;const t=f(`inv-thresh-${n}`),i=parseInt(t==null?void 0:t.value);!isNaN(i)&&i>=0&&await se({...e,restockThreshold:i})}async function $0(n,e){const t=h.inv.find(i=>i.id===n);t&&await se({...t,doNotRestock:e})}async function N0(n,e,t){const i=h.inv.find(r=>r.id===n);if(!i)return;const s=f("invItemDetailContent");s&&s.querySelectorAll(".lbtn").forEach(r=>r.classList.remove("sel")),t&&t.classList.add("sel"),await se({...i,location:e}),il(i.name,e)}async function M0(n,e){const t=h.inv.find(r=>r.id===n);if(!t)return;const i=Math.max(0,t.qty+e),s=f(`inv-qty-${n}`);if(s&&(s.value=i),i===0){cl(),await ll(n);return}await se({...t,qty:i})}async function O0(n){const e=h.inv.find(s=>s.id===n);if(!e)return;const t=f(`inv-qty-${n}`),i=parseInt(t==null?void 0:t.value);!isNaN(i)&&i>=0&&await se({...e,qty:i})}async function V0(n){const e=h.inv.find(i=>i.id===n);if(!e)return;const t=f(`inv-expiry-${n}`);await se({...e,expiry:(t==null?void 0:t.value)||null})}async function U0(n){const e=h.inv.find(t=>t.id===n);e&&(await se({...e,expiry:null}),Bs(n))}async function F0(n){const e=h.inv.find(i=>i.id===n);if(!e)return;const t=new Date().toISOString().split("T")[0];await se({...e,expiry:t}),Bs(n)}async function B0(n){const e=h.inv.find(s=>s.id===n);if(!e)return;const t=f(`inv-note-${n}`),i=((t==null?void 0:t.value)||"").trim();await se({...e,note:i||null})}function j0(n){h.it=n,document.querySelectorAll(".itab").forEach(t=>t.classList.remove("active"));const e=f("itab-"+n);e&&e.classList.add("active"),Fs()}async function H0(){const n=f("man").value.trim();if(!n)return;const e=f("mac").value,t=f("mau").value.trim()||"unit",i=Math.max(1,parseInt(f("maq").value)||1),s=f("mae").value||null,r="itm-"+n.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now();await se({id:r,barcode:r,name:n,brand:"",unit:t,qty:i,location:h.maL,category:e,image:null,source:"Manual",expiry:s,addedAt:new Date().toLocaleDateString()}),f("man").value="",f("maq").value=1,f("mae").value="",f("mabtn").disabled=!0,P(`${n} added!`),Ee("madd"),ol()}function z0(){f("mabtn").disabled=!f("man").value.trim()}function q0(n){const e=f("maq");e.value=Math.max(1,(parseInt(e.value)||1)+n)}function W0(n,e){h.maL=n,document.querySelectorAll("#ov-madd .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}async function G0(){const n=f("imptxt").value.trim();if(!n)return;let e=0,t=0,i="pantry";for(const s of n.split(`
`)){const r=s.toLowerCase();r.includes("fridge")?i="fridge":r.includes("freezer")?i="freezer":r.includes("pantry")&&(i="pantry");const o=s.match(/^\|\s*([^|]+?)\s*\|\s*(\d+(?:\.\d+)?)\s*\|\s*([^|]+?)\s*\|/),c=s.match(/^[-*]\s+(.+?):\s*(\d+(?:\.\d+)?)\s*([a-zA-Z%\/]+.*)?$/);let l,d,m;if(o?(l=o[1].trim(),d=parseFloat(o[2]),m=o[3].trim()):c&&(l=c[1].trim(),d=parseFloat(c[2]),m=(c[3]||"unit").trim()),l&&d&&l!=="Item"&&l!=="---"&&!l.startsWith("-")){const g="item-imp-"+l.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),v=h.inv.find(S=>S.id===g);await se({id:g,barcode:g,name:l,brand:"",unit:m||"unit",qty:d,location:i,category:"Imported",image:null,source:"Imported",expiry:null,addedAt:v?v.addedAt:new Date().toLocaleDateString()}),v?t++:e++}}f("imptxt").value="",P(`Imported ${e} new, updated ${t}`),Ee("import")}let ms=null,cn=null,Io="fridge",Je=null,ya=!1,dr="",va=!1;const Yi=new Map,K0=300*1e3,Q0=30;function J0(){const n=f("invAddBackdrop"),e=f("invAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),Io="fridge",document.querySelectorAll("#invAddSheet .lbtn").forEach(i=>i.classList.remove("sel"));const t=f("invAddLoc-fridge");t&&t.classList.add("sel"),setTimeout(()=>{const i=f("invi");i&&(i.value="",i.focus())},150)}function js(){const n=f("invAddBackdrop"),e=f("invAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),ul()}function Y0(){js(),window.openScanForInventory&&window.openScanForInventory()}function X0(){js(),Sm()}function Z0(n,e){Io=n,document.querySelectorAll("#invAddSheet .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function eS(){const n=f("invAddNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=f("invAddNoteInp");t&&t.focus()}}async function tS(){const n=f("invi"),e=n?n.value.trim():"";if(!e)return;let t=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||1):s&&(t=s[2].trim(),i=parseInt(s[1],10)||1);const o=f("invAddNoteInp"),c=o?o.value.trim():"",l=await To(t),d=(l==null?void 0:l.preferredLocation)||Io,m=(l==null?void 0:l.preferredUnit)||null,g="itm-"+t.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),v={id:g,barcode:g,name:t,brand:"",unit:m||"unit",qty:i,location:d,category:Ci({name:t}),image:null,source:"Manual",expiry:null,addedAt:new Date().toLocaleDateString()};c&&(v.note=c),se(v),P(`${t} added!`),n&&(n.value=""),o&&(o.value="");const S=f("invAddNoteWrap");S&&(S.style.display="none"),ul(),js(),ol()}function nS(){ms&&clearTimeout(ms);const n=f("invi"),e=n?n.value.trim():"",t=f("invSearchDropdown");if(!e||e.length<2){t&&(t.classList.remove("active"),t.innerHTML=""),cn=null;return}ms=setTimeout(()=>oS(e),350)}function iS(n){if(!n)return"NONE";const e=n.toLowerCase();return e.includes("kroger.com")?"Kroger (real product)":e.includes("img.spoonacular.com/products")?"Spoonacular product (real photo)":e.includes("img.spoonacular.com/ingredients")?"Spoonacular ingredient (illustration)":e.includes("openfoodfacts.org")?"Open Food Facts (real photo)":e.includes("edamam")?"Edamam":"Other: "+new URL(n).hostname}function lh(n){const e=f("invSearchDropdown");!e||!n.length||(cn=n,n.forEach((t,i)=>{const s=iS(t.image);console.log(`[InvDropdown] #${i} "${t.name}" → image: ${s} | url: ${t.image||"(none)"} | score: ${t._score}`)}),e.innerHTML=n.map((t,i)=>{const s='<div class="enrich-img-ph">🛒</div>',r=t.category&&t.category!=="General"?`<div class="enrich-cat">${t.category}</div>`:"";return`<div class="enrich-row" onclick="pickInvInlineResult(${i})">
      ${s}
      <div class="enrich-text">
        <div class="enrich-name">${t.name}</div>
        ${r}
      </div>
    </div>`}).join(""),e.classList.add("active"))}async function sS(n){return null}async function rS(n){const e=n.toLowerCase(),t=Yi.get(e);if(t&&Date.now()-t.ts<K0)return t.scored;const i=h.hid?`&hid=${encodeURIComponent(h.hid)}`:"";let o=(await(await fetch(`/api/text-search?q=${encodeURIComponent(n)}${i}`)).json()).results||[];const c=n.toLowerCase().split(/\s+/).filter(d=>d.length>=2);o=o.filter(d=>{const m=(d.name||"").toLowerCase();return c.some(g=>m.includes(g))});const l=o.map(d=>({...d,_score:qE(d.name||"",n)})).filter(d=>d._score>=15).sort((d,m)=>m._score-d._score).slice(0,5);return Yi.set(e,{scored:l,ts:Date.now()}),Yi.size>Q0&&Yi.delete(Yi.keys().next().value),l}async function oS(n){const e=f("invSearchDropdown");if(e){e.innerHTML='<div class="search-hint">Searching…</div>',e.classList.add("active");try{const t=sS(n),i=rS(n),s=await t;s&&(f("invi")?f("invi").value.trim():"").toLowerCase()===n.toLowerCase()&&(console.log(`[InvSearch] Instant custom product match for "${n}"`),lh([s]));const r=await i;if((f("invi")?f("invi").value.trim():"").toLowerCase()!==n.toLowerCase())return;let c=r;if(s){const l=normalizeProductName(s.name),d=r.filter(m=>normalizeProductName(m.name)!==l);c=[s,...d].slice(0,5)}if(!c.length){e.classList.remove("active"),e.innerHTML="",cn=null;return}lh(c)}catch(t){console.warn("Inventory inline search failed:",t),e.classList.remove("active"),e.innerHTML="",cn=null}}}async function aS(n){if(!cn||!cn[n])return;const e=cn[n],t=f("invAddNoteInp"),i=t?t.value.trim():"",s=await To(e.name),r="itm-"+(e.name||"item").toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),o={id:r,barcode:r,name:e.name,brand:e.brand||"",unit:(s==null?void 0:s.preferredUnit)||"unit",qty:1,location:(s==null?void 0:s.preferredLocation)||Io,category:e.category||Ci({name:e.name}),source:e.source||"search",expiry:null,addedAt:new Date().toLocaleDateString()};i&&(o.note=i),se(o),P(`Added "${e.name}" ✓`);const c=f("invi");c&&(c.value=""),t&&(t.value="");const l=f("invAddNoteWrap");l&&(l.style.display="none"),ul(),js()}function ul(){ms&&clearTimeout(ms),cn=null;const n=f("invSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}function cS(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=f("invAddMicOpt");e&&(e.style.display="")}function uh(n){const e=f("inv-micstatus");e&&e.classList.toggle("visible",n)}function Sm(){if(ya&&Je){va=!0,Je.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){P("Voice input not supported");return}Je=new n,Je.lang="en-US",Je.interimResults=!0,Je.maxAlternatives=1,Je.continuous=!1,dr="",ya=!0,uh(!0),Je.onresult=e=>{let t="";for(let s=e.resultIndex;s<e.results.length;s++){const r=e.results[s][0].transcript;e.results[s].isFinal?dr+=r:t+=r}const i=f("invi");i&&(i.value=(dr+t).trim())},Je.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&P("Couldn't hear that — try again")},Je.onend=async()=>{ya=!1,uh(!1),Je=null;let e=dr.trim();if(!e&&va){const o=f("invi");e=o?o.value.trim():""}if(va=!1,!e)return;const t=await To(e),i="itm-"+e.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),s=(t==null?void 0:t.preferredLocation)||xc(e);se({id:i,barcode:i,name:e,brand:"",unit:(t==null?void 0:t.preferredUnit)||"unit",qty:1,location:s,category:Ci({name:e}),image:null,source:"Voice",expiry:null,addedAt:new Date().toLocaleDateString()}),P(`Added "${e}" to ${s}`);const r=f("invi");r&&(r.value=""),ol()},Je.start()}async function lS(n){const{svShopItem:e}=await $E(async()=>{const{svShopItem:s}=await Promise.resolve().then(()=>rb);return{svShopItem:s}},void 0),t=h.inv.find(s=>s.id===n);if(!t)return;if(h.shop.find(s=>s.name.toLowerCase()===t.name.toLowerCase()&&!s.checked)){P(`${t.name} is already on your list`);return}await e({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:t.name,qty:1,checked:!1,brand:t.brand||"",image:t.image||null,src:"supplies"}),P(`${t.name} added to shopping list 🛒`),cl()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km="firebasestorage.googleapis.com",Cm="storageBucket",uS=120*1e3,dS=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe extends Et{constructor(e,t,i=0){super(wa(e),`Firebase Storage: ${t} (${wa(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,pe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return wa(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var fe;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(fe||(fe={}));function wa(n){return"storage/"+n}function dl(){const n="An unknown error occurred, please check the error payload for server response.";return new pe(fe.UNKNOWN,n)}function hS(n){return new pe(fe.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function fS(n){return new pe(fe.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function pS(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new pe(fe.UNAUTHENTICATED,n)}function mS(){return new pe(fe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function gS(n){return new pe(fe.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function yS(){return new pe(fe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function vS(){return new pe(fe.CANCELED,"User canceled the upload/download.")}function wS(n){return new pe(fe.INVALID_URL,"Invalid URL '"+n+"'.")}function _S(n){return new pe(fe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function bS(){return new pe(fe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Cm+"' property when initializing the app?")}function TS(){return new pe(fe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function IS(){return new pe(fe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ES(n){return new pe(fe.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function sc(n){return new pe(fe.INVALID_ARGUMENT,n)}function Am(){return new pe(fe.APP_DELETED,"The Firebase app was deleted.")}function SS(n){return new pe(fe.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function gs(n,e){return new pe(fe.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Xi(n){throw new pe(fe.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=Ke.makeFromUrl(e,t)}catch{return new Ke(e,"")}if(i.path==="")return i;throw _S(e)}static makeFromUrl(e,t){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function d(F){F.path_=decodeURIComponent(F.path)}const m="v[A-Za-z0-9_]+",g=t.replace(/[.]/g,"\\."),v="(/([^?#]*).*)?$",S=new RegExp(`^https?://${g}/${m}/b/${s}/o${v}`,"i"),x={bucket:1,path:3},L=t===km?"(?:storage.googleapis.com|storage.cloud.google.com)":t,R="([^?#]*)",M=new RegExp(`^https?://${L}/${s}/${R}`,"i"),O=[{regex:c,indices:l,postModify:r},{regex:S,indices:x,postModify:d},{regex:M,indices:{bucket:1,path:2},postModify:d}];for(let F=0;F<O.length;F++){const W=O[F],Y=W.regex.exec(e);if(Y){const T=Y[W.indices.bucket];let w=Y[W.indices.path];w||(w=""),i=new Ke(T,w),W.postModify(i);break}}if(i==null)throw wS(e);return i}}class kS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CS(n,e,t){let i=1,s=null,r=null,o=!1,c=0;function l(){return c===2}let d=!1;function m(...R){d||(d=!0,e.apply(null,R))}function g(R){s=setTimeout(()=>{s=null,n(S,l())},R)}function v(){r&&clearTimeout(r)}function S(R,...M){if(d){v();return}if(R){v(),m.call(null,R,...M);return}if(l()||o){v(),m.call(null,R,...M);return}i<64&&(i*=2);let O;c===1?(c=2,O=0):O=(i+Math.random())*1e3,g(O)}let x=!1;function L(R){x||(x=!0,v(),!d&&(s!==null?(R||(c=2),clearTimeout(s),g(0)):R||(c=1)))}return g(0),r=setTimeout(()=>{o=!0,L(!0)},t),L}function AS(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(n){return n!==void 0}function PS(n){return typeof n=="object"&&!Array.isArray(n)}function hl(n){return typeof n=="string"||n instanceof String}function dh(n){return fl()&&n instanceof Blob}function fl(){return typeof Blob<"u"}function hh(n,e,t,i){if(i<e)throw sc(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw sc(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function Rm(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const s=e(i)+"="+e(n[i]);t=t+s+"&"}return t=t.slice(0,-1),t}var On;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(On||(On={}));/**
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
 */function xS(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e,t,i,s,r,o,c,l,d,m,g,v=!0,S=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=m,this.connectionFactory_=g,this.retry=v,this.isUsingEmulator=S,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,L)=>{this.resolve_=x,this.reject_=L,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new hr(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=c=>{const l=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const c=r.getErrorCode()===On.NO_ERROR,l=r.getStatus();if(!c||xS(l,this.additionalRetryCodes_)&&this.retry){const m=r.getErrorCode()===On.ABORT;i(!1,new hr(!1,null,m));return}const d=this.successCodes_.indexOf(l)!==-1;i(!0,new hr(d,r))})},t=(i,s)=>{const r=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());RS(l)?r(l):r()}catch(l){o(l)}else if(c!==null){const l=dl();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Am():vS();o(l)}else{const l=yS();o(l)}};this.canceled_?t(!1,new hr(!1,null,!0)):this.backoffId_=CS(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&AS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class hr{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function DS(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function $S(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function NS(n,e){e&&(n["X-Firebase-GMPID"]=e)}function MS(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function OS(n,e,t,i,s,r,o=!0,c=!1){const l=Rm(n.urlParams),d=n.url+l,m=Object.assign({},n.headers);return NS(m,e),DS(m,t),$S(m,r),MS(m,i),new LS(d,n.method,m,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VS(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function US(...n){const e=VS();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(fl())return new Blob(n);throw new pe(fe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function FS(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function BS(n){if(typeof atob>"u")throw ES("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class _a{constructor(e,t){this.data=e,this.contentType=t||null}}function jS(n,e){switch(n){case mt.RAW:return new _a(Pm(e));case mt.BASE64:case mt.BASE64URL:return new _a(xm(n,e));case mt.DATA_URL:return new _a(zS(e),qS(e))}throw dl()}function Pm(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const r=i,o=n.charCodeAt(++t);i=65536|(r&1023)<<10|o&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function HS(n){let e;try{e=decodeURIComponent(n)}catch{throw gs(mt.DATA_URL,"Malformed data URL.")}return Pm(e)}function xm(n,e){switch(n){case mt.BASE64:{const s=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(s||r)throw gs(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case mt.BASE64URL:{const s=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(s||r)throw gs(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=BS(e)}catch(s){throw s.message.includes("polyfill")?s:gs(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}class Lm{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw gs(mt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=WS(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function zS(n){const e=new Lm(n);return e.base64?xm(mt.BASE64,e.rest):HS(e.rest)}function qS(n){return new Lm(n).contentType}function WS(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,t){let i=0,s="";dh(e)?(this.data_=e,i=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(dh(this.data_)){const i=this.data_,s=FS(i,e,t);return s===null?null:new Yt(s)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new Yt(i,!0)}}static getBlob(...e){if(fl()){const t=e.map(i=>i instanceof Yt?i.data_:i);return new Yt(US.apply(null,t))}else{const t=e.map(o=>hl(o)?jS(mt.RAW,o).data:o.data_);let i=0;t.forEach(o=>{i+=o.byteLength});const s=new Uint8Array(i);let r=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)s[r++]=o[c]}),new Yt(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(n){let e;try{e=JSON.parse(n)}catch{return null}return PS(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function KS(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function $m(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(n,e){return e}class Fe{constructor(e,t,i,s){this.server=e,this.local=t||e,this.writable=!!i,this.xform=s||QS}}let fr=null;function JS(n){return!hl(n)||n.length<2?n:$m(n)}function Nm(){if(fr)return fr;const n=[];n.push(new Fe("bucket")),n.push(new Fe("generation")),n.push(new Fe("metageneration")),n.push(new Fe("name","fullPath",!0));function e(r,o){return JS(o)}const t=new Fe("name");t.xform=e,n.push(t);function i(r,o){return o!==void 0?Number(o):o}const s=new Fe("size");return s.xform=i,n.push(s),n.push(new Fe("timeCreated")),n.push(new Fe("updated")),n.push(new Fe("md5Hash",null,!0)),n.push(new Fe("cacheControl",null,!0)),n.push(new Fe("contentDisposition",null,!0)),n.push(new Fe("contentEncoding",null,!0)),n.push(new Fe("contentLanguage",null,!0)),n.push(new Fe("contentType",null,!0)),n.push(new Fe("metadata","customMetadata",!0)),fr=n,fr}function YS(n,e){function t(){const i=n.bucket,s=n.fullPath,r=new Ke(i,s);return e._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:t})}function XS(n,e,t){const i={};i.type="file";const s=t.length;for(let r=0;r<s;r++){const o=t[r];i[o.local]=o.xform(i,e[o.server])}return YS(i,n),i}function Mm(n,e,t){const i=Dm(e);return i===null?null:XS(n,i,t)}function ZS(n,e,t,i){const s=Dm(e);if(s===null||!hl(s.downloadTokens))return null;const r=s.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(d=>{const m=n.bucket,g=n.fullPath,v="/b/"+o(m)+"/o/"+o(g),S=Eo(v,t,i),x=Rm({alt:"media",token:d});return S+x})[0]}function ek(n,e){const t={},i=e.length;for(let s=0;s<i;s++){const r=e[s];r.writable&&(t[r.server]=n[r.local])}return JSON.stringify(t)}class pl{constructor(e,t,i,s){this.url=e,this.method=t,this.handler=i,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(n){if(!n)throw dl()}function tk(n,e){function t(i,s){const r=Mm(n,s,e);return Om(r!==null),r}return t}function nk(n,e){function t(i,s){const r=Mm(n,s,e);return Om(r!==null),ZS(r,s,n.host,n._protocol)}return t}function Vm(n){function e(t,i){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=mS():s=pS():t.getStatus()===402?s=fS(n.bucket):t.getStatus()===403?s=gS(n.path):s=i,s.status=t.getStatus(),s.serverResponse=i.serverResponse,s}return e}function Um(n){const e=Vm(n);function t(i,s){let r=e(i,s);return i.getStatus()===404&&(r=hS(n.path)),r.serverResponse=s.serverResponse,r}return t}function ik(n,e,t){const i=e.fullServerUrl(),s=Eo(i,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,c=new pl(s,r,nk(n,t),o);return c.errorHandler=Um(e),c}function sk(n,e){const t=e.fullServerUrl(),i=Eo(t,n.host,n._protocol),s="DELETE",r=n.maxOperationRetryTime;function o(l,d){}const c=new pl(i,s,o,r);return c.successCodes=[200,204],c.errorHandler=Um(e),c}function rk(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function ok(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=rk(null,e)),i}function ak(n,e,t,i,s){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let O="";for(let F=0;F<2;F++)O=O+Math.random().toString().slice(2);return O}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const d=ok(e,i,s),m=ek(d,t),g="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+l+`\r
Content-Type: `+d.contentType+`\r
\r
`,v=`\r
--`+l+"--",S=Yt.getBlob(g,i,v);if(S===null)throw TS();const x={name:d.fullPath},L=Eo(r,n.host,n._protocol),R="POST",M=n.maxUploadRetryTime,U=new pl(L,R,tk(n,t),M);return U.urlParams=x,U.headers=o,U.body=S.uploadData(),U.errorHandler=Vm(e),U}class ck{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=On.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=On.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=On.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,s,r){if(this.sent_)throw Xi("cannot .send() more than once");if(yn(e)&&i&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Xi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Xi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Xi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Xi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class lk extends ck{initXhr(){this.xhr_.responseType="text"}}function ml(){return new lk}/**
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
 */class Hn{constructor(e,t){this._service=e,t instanceof Ke?this._location=t:this._location=Ke.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Hn(e,t)}get root(){const e=new Ke(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return $m(this._location.path)}get storage(){return this._service}get parent(){const e=GS(this._location.path);if(e===null)return null;const t=new Ke(this._location.bucket,e);return new Hn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw SS(e)}}function uk(n,e,t){n._throwIfRoot("uploadBytes");const i=ak(n.storage,n._location,Nm(),new Yt(e,!0),t);return n.storage.makeRequestWithTokens(i,ml).then(s=>({metadata:s,ref:n}))}function dk(n){n._throwIfRoot("getDownloadURL");const e=ik(n.storage,n._location,Nm());return n.storage.makeRequestWithTokens(e,ml).then(t=>{if(t===null)throw IS();return t})}function hk(n){n._throwIfRoot("deleteObject");const e=sk(n.storage,n._location);return n.storage.makeRequestWithTokens(e,ml)}function fk(n,e){const t=KS(n._location.path,e),i=new Ke(n._location.bucket,t);return new Hn(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pk(n){return/^[A-Za-z]+:\/\//.test(n)}function mk(n,e){return new Hn(n,e)}function Fm(n,e){if(n instanceof gl){const t=n;if(t._bucket==null)throw bS();const i=new Hn(t,t._bucket);return e!=null?Fm(i,e):i}else return e!==void 0?fk(n,e):n}function gk(n,e){if(e&&pk(e)){if(n instanceof gl)return mk(n,e);throw sc("To use ref(service, url), the first argument must be a Storage instance.")}else return Fm(n,e)}function fh(n,e){const t=e==null?void 0:e[Cm];return t==null?null:Ke.makeFromBucketSpec(t,n)}function yk(n,e,t,i={}){n.host=`${e}:${t}`;const s=yn(e);s&&(oc(`https://${n.host}/b`),ac("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:r}=i;r&&(n._overrideAuthToken=typeof r=="string"?r:$h(r,n.app.options.projectId))}class gl{constructor(e,t,i,s,r,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._isUsingEmulator=o,this._bucket=null,this._host=km,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=uS,this._maxUploadRetryTime=dS,this._requests=new Set,s!=null?this._bucket=Ke.makeFromBucketSpec(s,this._host):this._bucket=fh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ke.makeFromBucketSpec(this._url,e):this._bucket=fh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){hh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){hh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Be(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Hn(this,e)}_makeRequest(e,t,i,s,r=!0){if(this._deleted)return new kS(Am());{const o=OS(e,this._appId,i,s,t,this._firebaseVersion,r,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,s).getPromise()}}const ph="@firebase/storage",mh="0.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm="storage";function vk(n,e,t){return n=Re(n),uk(n,e,t)}function wk(n){return n=Re(n),dk(n)}function _k(n){return n=Re(n),hk(n)}function jm(n,e){return n=Re(n),gk(n,e)}function bk(n=uc(),e){n=Re(n);const i=to(n,Bm).getImmediate({identifier:e}),s=xh("storage");return s&&Tk(i,...s),i}function Tk(n,e,t,i={}){yk(n,e,t,i)}function Ik(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new gl(t,i,s,e,zn)}function Ek(){Un(new ln(Bm,Ik,"PUBLIC").setMultipleInstances(!0)),gt(ph,mh,""),gt(ph,mh,"esm2020")}Ek();const Hm=bk(bc);function Sk(n,e,t,i){return new Promise((s,r)=>{const o=new Image,c=new FileReader;c.onload=l=>{o.onload=()=>{let d=o.width,m=o.height;if(d>e||m>t){const L=Math.min(e/d,t/m);d=Math.round(d*L),m=Math.round(m*L)}const g=document.createElement("canvas");g.width=d,g.height=m,g.getContext("2d").drawImage(o,0,0,d,m);let S=.82;const x=()=>{g.toBlob(L=>{if(!L)return r(new Error("Canvas compression failed"));L.size<=i||S<=.3?s(L):(S-=.1,x())},"image/jpeg",S)};x()},o.onerror=()=>r(new Error("Failed to load image")),o.src=l.target.result},c.onerror=()=>r(new Error("Failed to read file")),c.readAsDataURL(n)})}async function yl(n,e,t,i,s){if(!n)throw new Error("No file provided");const r=await Sk(n,t,i,s);console.log(`[uploadRecipeImage] Compressed to ${(r.size/1024).toFixed(1)}KB → ${e}`);const o=jm(Hm,e);await vk(o,r,{contentType:"image/jpeg"});const c=await wk(o);return console.log("[uploadRecipeImage] Upload complete:",e),c}async function zm(n,e){return yl(n,`recipes/${e}/cover.jpg`,800,600,300*1024)}async function kk(n,e,t){return yl(n,`recipes/${e}/steps/${t}.jpg`,800,600,300*1024)}async function Ck(n,e,t,i){return yl(n,`recipes/${e}/comments/${t}/${i}.jpg`,600,600,200*1024)}async function qm(n){try{const e=jm(Hm,n);await _k(e),console.log("[deleteRecipeStorageFile] Deleted:",n)}catch(e){e.code!=="storage/object-not-found"&&console.error("[deleteRecipeStorageFile] Error:",e)}}let So="view",_t=null,fi={},ft=[],Dn=[],$n=0;function Wm(n){return[...document.querySelectorAll("#"+n+" .tag.sel")].map(e=>e.dataset.tag)}function Gm(n,e){document.querySelectorAll("#"+n+" .tag").forEach(t=>{t.classList.toggle("sel",(e||[]).includes(t.dataset.tag))})}function Ak(n){n.classList.toggle("sel")}function Rk(n){const e=Array.from({length:5},(o,c)=>`<span class="star${c<n.rating?" on":""}">${c<n.rating?"★":"☆"}</span>`).join(""),t=n.sourceUrl?`<a href="${n.sourceUrl}" target="_blank" onclick="event.stopPropagation()" style="font-size:.68rem;color:var(--ac);text-decoration:none;border:1px solid rgba(212,168,83,.3);border-radius:20px;padding:2px 8px;background:transparent">🔗 View original</a>`:n.source?`<span class="sbdg">${n.source}</span>`:"",i=n.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;max-height:140px"><img src="${n.imageUrl}" alt="" style="width:100%;height:140px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",s=[n.totalTime||n.cookTime?`⏱ ${n.totalTime||n.cookTime}`:"",n.servings?`🍽 ${n.servings} servings`:""].filter(Boolean),r=s.length?`<div style="display:flex;gap:6px;margin-top:6px;flex-wrap:wrap">${s.map(o=>`<span style="font-size:.68rem;color:var(--mt);background:var(--b1);border-radius:8px;padding:2px 8px">${o}</span>`).join("")}</div>`:"";return`<div class="rcd${n.favorited?" fav":""}" onclick="openRecipeView('${n.id}')">${i}<div class="rrow"><div class="rnm">${n.name}</div><div class="rfav" onclick="event.stopPropagation();togFav('${n.id}')">${n.favorited?"❤️":"🤍"}</div></div><div class="stars">${e}</div>${r}${n.description?`<div class="rnot" style="color:var(--tx2);margin-top:6px">${n.description.substring(0,100)}${n.description.length>100?"…":""}</div>`:""}${n.notes?`<div class="rnot">${n.notes}</div>`:""}<div class="rmeta"><span>${n.savedAt}</span>${t}</div></div>`}function Pk(n){h.rt=n,document.querySelectorAll(".rtab").forEach(t=>t.classList.remove("active"));const e=f("rtab-"+n);e&&e.classList.add("active"),n==="community"?_l():ko()}function ko(){if(h.rt==="community")return;let n=[...h.recs];h.rt==="fav"?n=n.filter(i=>i.favorited):h.rt==="top"?n=n.filter(i=>i.rating>=4).sort((i,s)=>s.rating-i.rating):h.rt==="quick"?n=n.filter(i=>(i.tags||[]).includes("Quick")):h.rt==="kid"?n=n.filter(i=>(i.tags||[]).includes("Kid-Friendly")):n=n.sort((i,s)=>new Date(s.savedAt||0)-new Date(i.savedAt||0));const e=f("rsub");e&&(e.textContent=n.length+" recipe"+(n.length!==1?"s":""));const t=f("rbody");if(t){if(!n.length){t.innerHTML=`<div class="es"><div class="ei">📖</div><p>${h.rt==="fav"?"No favorites yet!":h.rt==="top"?"No 4–5 star recipes yet.":h.rt==="quick"?"No quick recipes saved yet.":h.rt==="kid"?"No kid-friendly recipes yet.":"No recipes saved yet.<br/>Mark meals as cooked or tap + Add."}</p></div>`;return}t.innerHTML=n.map(Rk).join("")}}async function xk(n){const e=h.recs.find(t=>t.id===n);e&&(await it({...e,favorited:!e.favorited}),P(e.favorited?"Removed from favorites":"Added to favorites! ❤️"))}function Lk(){f("savrecbtn").disabled=!f("rn").value.trim()}async function Dk(){const n=f("rurl").value.trim();if(!n)return;const e=f("rurlstatus"),t=f("rimportbtn");e.style.display="block",e.style.color="var(--mt)",e.textContent="🤖 Importing recipe with AI…",t.disabled=!0;try{const s=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})})).json();if(!s.success){e.style.color="var(--rd)",e.textContent="⚠️ "+(s.error||"Couldn't import this recipe"),t.disabled=!1;return}const r=s.recipe,o=vl(r);f("rn").value=r.title||"",f("rd").value=o,f("rnotes").value=r.notes||"",f("rsourceurl").value=n,f("rcuisine")&&(f("rcuisine").value=r.cuisine||""),r.tags&&r.tags.length&&Gm("rtags",r.tags),f("savrecbtn").disabled=!r.title,Fk(r.imageUrl),h._importedRecipe={ingredientsRaw:r.ingredients||[],stepsRaw:r.steps||[],imageUrl:r.imageUrl||null,prepTime:r.prepTime||"",cookTime:r.cookTime||"",totalTime:r.totalTime||"",servings:r.servings||""};const c=[r.prepTime?`Prep: ${r.prepTime}`:"",r.cookTime?`Cook: ${r.cookTime}`:"",r.servings?`Serves: ${r.servings}`:""].filter(Boolean);e.style.color="var(--gn)",e.textContent="✓ Recipe imported! "+(c.length?c.join(" · "):"Review and save.")}catch(i){console.error("importFromUrl:",i),e.style.color="var(--rd)",e.textContent="⚠️ Couldn't import — try copying the recipe text manually."}t.disabled=!1}function $k(n){const e=f("importOnePane"),t=f("importManyPane"),i=f("importOneTab"),s=f("importManyTab");e&&(e.style.display=n==="one"?"block":"none"),t&&(t.style.display=n==="many"?"block":"none"),i&&(i.style.background=n==="one"?"var(--ac)":"",i.style.color=n==="one"?"var(--bg)":""),s&&(s.style.background=n==="many"?"var(--ac)":"",s.style.color=n==="many"?"var(--bg)":"")}function Nk(n){const e=/https?:\/\/[^\s<>"'`,;)}\]]+/gi,i=(n.match(e)||[]).map(s=>s.replace(/[.,;:!?)}\]]+$/,""));return[...new Set(i)]}function Mk(n){const e=n.toLowerCase(),t=[{pattern:/youtube\.com|youtu\.be/,name:"YouTube"},{pattern:/tiktok\.com/,name:"TikTok"},{pattern:/instagram\.com\/reel/,name:"Instagram Reel"},{pattern:/vimeo\.com/,name:"Vimeo"},{pattern:/twitter\.com|x\.com/,name:"X/Twitter"}];for(const s of t)if(s.pattern.test(e))return{status:"video",reason:`${s.name} video — can't extract recipe text`};const i=[{pattern:/cooking\.nytimes\.com/,name:"NYT Cooking"},{pattern:/food52\.com/,name:"Food52"}];for(const s of i)if(s.pattern.test(e))return{status:"paywall",reason:`${s.name} — may be paywalled`};return{status:"ok",reason:""}}async function Ok(){const n=f("bulkUrls"),e=n?n.value.trim():"";if(!e)return;const t=Nk(e);if(!t.length){P("No URLs found in the text");return}const i=t.map(g=>({url:g,...Mk(g)})),s=i.filter(g=>g.status==="ok"),r=i.filter(g=>g.status==="paywall"),o=i.filter(g=>g.status==="video"),c=f("bulkImportProgress");if(!c)return;c.style.display="block";const l=f("bulkImportBtn");l&&(l.disabled=!0);const d=[...s,...r],m={success:[],failed:[],skipped:o};for(let g=0;g<d.length;g++){const v=d[g],S=v.status==="paywall"?" — may be paywalled":"";c.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Importing ${g+1} of ${d.length}…${S}</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;try{const L=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:v.url})})).json();if(L.success&&L.recipe){const R=L.recipe,M=vl(R),U="rec-"+Date.now()+"-"+Math.random().toString(36).slice(2,6);await it({id:U,name:R.title||"Untitled Recipe",description:M,notes:R.notes||"",rating:0,favorited:!1,sourceUrl:v.url,source:"AI Import",imageUrl:R.imageUrl||null,ingredientsRaw:R.ingredients||[],stepsRaw:R.steps||[],prepTime:R.prepTime||"",cookTime:R.cookTime||"",totalTime:R.totalTime||"",servings:R.servings||"",tags:R.tags||[],savedAt:new Date().toLocaleDateString()}),m.success.push({url:v.url,name:R.title})}else m.failed.push({url:v.url,error:L.error||"Unknown error"})}catch(x){m.failed.push({url:v.url,error:x.message})}}Vk(c,m),l&&(l.disabled=!1)}function Vk(n,e){let t="";e.success.length&&(t+=`<div style="color:var(--gn);font-size:.78rem;margin-bottom:6px">✓ ${e.success.length} recipe${e.success.length>1?"s":""} imported</div>`,t+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.success.forEach(i=>{t+=`<div>• ${i.name||i.url}</div>`}),t+="</div>"),e.skipped.length&&(t+=`<div style="color:var(--yw,orange);font-size:.78rem;margin-bottom:6px">⚠ ${e.skipped.length} skipped — video links</div>`,t+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.skipped.forEach(i=>{t+=`<div>• ${i.url} <span style="color:var(--mt);font-size:.68rem">(${i.reason})</span></div>`}),t+="</div>"),e.failed.length&&(t+=`<div style="color:var(--rd);font-size:.78rem;margin-bottom:6px">✗ ${e.failed.length} failed</div>`,t+='<div style="font-size:.72rem;margin-bottom:10px;line-height:1.8">',e.failed.forEach(i=>{t+='<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">',t+=`<span style="color:var(--mt);flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i.url}</span>`,t+=`<button class="btn bsm" onclick="retryBulkImport('${i.url.replace(/'/g,"\\'")}')">Retry</button>`,t+="</div>"}),t+="</div>"),!e.success.length&&!e.failed.length&&!e.skipped.length&&(t='<div style="font-size:.78rem;color:var(--mt)">No URLs were processed.</div>'),n.innerHTML=t}async function Uk(n){const e=f("bulkImportProgress");if(!e)return;const t=e.innerHTML;e.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Retrying ${n}…</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;try{const s=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})})).json();if(s.success&&s.recipe){const r=s.recipe,o=vl(r),c="rec-"+Date.now()+"-"+Math.random().toString(36).slice(2,6);await it({id:c,name:r.title||"Untitled Recipe",description:o,notes:r.notes||"",rating:0,favorited:!1,sourceUrl:n,source:"AI Import",imageUrl:r.imageUrl||null,ingredientsRaw:r.ingredients||[],stepsRaw:r.steps||[],prepTime:r.prepTime||"",cookTime:r.cookTime||"",totalTime:r.totalTime||"",servings:r.servings||"",tags:r.tags||[],savedAt:new Date().toLocaleDateString()}),P(`Imported: ${r.title||"Recipe"}`),e.innerHTML=t.replace(new RegExp(`<div style="display:flex[^]*?${n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}[^]*?</div>\\s*</div>`),`<div style="color:var(--gn);font-size:.72rem">✓ ${r.title||n} — imported</div>`)}else P("Import failed: "+(s.error||"Unknown error")),e.innerHTML=t}catch(i){P("Import failed: "+i.message),e.innerHTML=t}}function vl(n){const e=[];return n.description&&(e.push(n.description),e.push("")),n.ingredients&&n.ingredients.length&&(e.push("Ingredients:"),n.ingredients.forEach(t=>{if(typeof t=="string")e.push(`- ${t}`);else{const i=[t.amount,t.unit].filter(Boolean).join(" ");e.push(`- ${i?i+" ":""}${t.name}`)}}),e.push("")),n.steps&&n.steps.length&&(e.push("Steps:"),n.steps.forEach((t,i)=>{e.push(`${i+1}. ${t}`)})),e.join(`
`)}function Fk(n){const e=document.getElementById("rimgpreview");if(e&&e.remove(),!n)return;const t=f("addRecCoverZone");t&&(t.classList.add("has-preview"),t.innerHTML=`<img src="${n}" alt="Cover preview" onerror="this.parentElement.classList.remove('has-preview')"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('add')">✕</button>`)}async function Bk(){const n=f("rn").value.trim();if(!n)return;const e=f("rd").value.trim(),t=f("rsourceurl")?f("rsourceurl").value.trim():"",i=f("rcuisine")?f("rcuisine").value.trim():"",s=Wm("rtags"),r=document.getElementById("rpubtoggle"),o=r?r.classList.contains("on"):!1,c=h._importedRecipe||{},l="rec-"+Date.now();let d=c.imageUrl||null;if(_t)try{P("Uploading cover photo…"),d=await zm(_t,l),_t=null}catch(x){console.error("Cover upload failed:",x),P("Cover photo upload failed — saving recipe without it")}const m={id:l,name:n,rating:h.nr,favorited:!1,notes:f("rnotes").value.trim(),description:e,source:t?"AI Import":"Manual",sourceUrl:t||null,imageUrl:d,tags:s,cuisine:i,prepTime:c.prepTime||"",cookTime:c.cookTime||"",totalTime:c.totalTime||"",servings:c.servings||"",ingredientsRaw:c.ingredientsRaw||[],stepsRaw:c.stepsRaw||[],stepPhotos:{},cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:o};if(await it(m),o){const x=re(),L=(x==null?void 0:x.displayName)||localStorage.getItem("ks-who")||"Anonymous";await kc(m,L,h.hid)}f("rn").value="",f("rnotes").value="",f("rd").value="",f("rsourceurl").value="",f("rurl").value="",f("rcuisine")&&(f("rcuisine").value=""),Gm("rtags",[]),h.nr=0,h._importedRecipe=null,f("savrecbtn").disabled=!0,us("rstars",0);const g=document.getElementById("rimgpreview");g&&g.remove();const v=f("addRecCoverZone");v&&(v.classList.remove("has-preview"),v.innerHTML='<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop</div>'),r&&r.classList.remove("on");const S=f("rurlstatus");S&&(S.style.display="none",S.textContent=""),P("Recipe saved! 📖"),Ee("arec")}function Km(n){const e=h.recs.find(R=>R.id===n);if(!e)return;h.eid=n,So="view";const t=f("erecTitle");t&&(t.textContent="Recipe");let i;e.imageUrl?i=`<div class="rv-cover">
      <img src="${e.imageUrl}" alt="${(e.name||"").replace(/"/g,"&quot;")}" onerror="this.parentElement.style.display='none'"/>
      <div class="rv-edit-btn" onclick="openER('${e.id}')" title="Edit recipe">✏️</div>
    </div>`:i=`<div class="rv-cover-placeholder">
      <div class="rv-cover-title">${(e.name||"Untitled").replace(/</g,"&lt;")}</div>
      <div class="rv-edit-btn" onclick="openER('${e.id}')" title="Edit recipe">✏️</div>
    </div>`;const r=`<div class="rv-header">
    ${e.imageUrl?`<div class="rv-title">${(e.name||"").replace(/</g,"&lt;")}</div>`:""}
    ${e.rating?`<div class="stars" style="margin-bottom:6px">${Array.from({length:5},(R,M)=>`<span class="star${M<e.rating?" on":""}">`+(M<e.rating?"★":"☆")+"</span>").join("")}</div>`:""}
    ${e.savedAt?`<div class="rv-author">Saved ${e.savedAt}${e.source&&e.source!=="Manual"?` · ${e.source}`:""}${e.cookCount?` · Cooked ${e.cookCount}×`:""}</div>`:""}
  </div>`,o=[e.prepTime?`🔪 Prep: ${e.prepTime}`:"",e.cookTime?`🔥 Cook: ${e.cookTime}`:"",e.totalTime?`⏱ Total: ${e.totalTime}`:"",e.servings?`🍽 Serves: ${e.servings}`:""].filter(Boolean),c=o.length?`<div class="rv-meta">${o.map(R=>`<div class="rv-meta-pill">${R}</div>`).join("")}</div>`:"",l=e.cuisine?`<div class="rv-cuisine">${e.cuisine}</div>`:"",d=(e.tags||[]).length?`<div class="rv-tags">${e.tags.map(R=>`<span class="com-tag">${R}</span>`).join("")}</div>`:"";let m="";if(e.ingredientsRaw&&e.ingredientsRaw.length)m=`<div class="rv-section">Ingredients</div><ul class="rv-ingredients">${e.ingredientsRaw.map(M=>{if(typeof M=="string")return`<li>${Ct(M)}</li>`;const U=[M.amount,M.unit].filter(Boolean).join(" ");return`<li>${U?`<strong>${Ct(U)}</strong> `:""}${Ct(M.name||"")}</li>`}).join("")}</ul>`;else if(e.description){const R=e.description.split(`
`),M=R.findIndex(O=>/^ingredients/i.test(O.trim())),U=R.findIndex(O=>/^steps/i.test(O.trim()));if(M>=0){const O=U>M?U:R.length,F=R.slice(M+1,O).filter(W=>W.trim());F.length&&(m=`<div class="rv-section">Ingredients</div><ul class="rv-ingredients">${F.map(W=>`<li>${Ct(W.replace(/^[-•*]\s*/,""))}</li>`).join("")}</ul>`)}}let g="";if(e.stepsRaw&&e.stepsRaw.length)g=`<div class="rv-section">Instructions</div><ol class="rv-steps">${e.stepsRaw.map((M,U)=>{var Y;const O=typeof M=="string"?M:M.text||"",F=(Y=e.stepPhotos)==null?void 0:Y[U],W=F?`<div class="rv-step-photo" onclick="openPhotoViewer(['${F}'],0)"><img src="${F}" alt="Step ${U+1}" onerror="this.parentElement.style.display='none'"/></div>`:"";return`<li>${Ct(O)}${W}</li>`}).join("")}</ol>`;else if(e.description){const R=e.description.split(`
`),M=R.findIndex(U=>/^steps/i.test(U.trim()));if(M>=0){const U=R.slice(M+1).filter(O=>O.trim());U.length&&(g=`<div class="rv-section">Instructions</div><ol class="rv-steps">${U.map(O=>`<li>${Ct(O.replace(/^\d+\.\s*/,""))}</li>`).join("")}</ol>`)}}let v="";!m&&!g&&e.description&&(v=`<div class="rv-section">Details</div><div style="font-size:.88rem;color:var(--tx2);line-height:1.8;white-space:pre-wrap">${Ct(e.description)}</div>`);const S=e.notes?`<div class="rv-section">Notes</div><div style="font-size:.86rem;color:var(--tx2);line-height:1.6;font-style:italic;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">${Ct(e.notes)}</div>`:"",x=e.sourceUrl?`<div style="margin-top:16px"><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);text-decoration:none">🔗 View original recipe ↗</a></div>`:"",L=`<div class="rv-actions">
    <button class="btn bp bsm" style="flex:1" onclick="scheduleRecipe('${e.name.replace(/'/g,"\\'")}')">📅 Schedule</button>
    <button class="btn bs bsm" style="flex:1" onclick="addRecIngToShop('${e.id}')">🛒 Shop ingredients</button>
    <button class="btn bs bsm" onclick="openER('${e.id}')">✏️ Edit</button>
  </div>`;f("erecbody").innerHTML=`
    ${i}
    ${r}
    ${c}
    ${l}
    ${d}
    ${L}
    ${m}
    ${g}
    ${v}
    ${S}
    ${x}
  `,rt("erec")}function jk(){So==="edit"&&h.eid?Km(h.eid):Ee("erec")}function Ct(n){return(n||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Qm(n){const e=h.recs.find(x=>x.id===n);if(!e)return;h.eid=n,So="edit",_t=null,fi={};const t=f("erecTitle");t&&(t.textContent="Edit Recipe");const i=e.rating||0,s=Array.from({length:5},(x,L)=>`<span class="star${L<i?" on":""}" onclick="setStar(${L+1},'e')">${L<i?"★":"☆"}</span>`).join(""),r=e.sourceUrl?`<div class="frow"><label class="flbl">Original</label><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);word-break:break-all">${e.sourceUrl}</a></div>`:"",o=e.tags||[],c=x=>o.includes(x)?" sel":"",l=`<div class="frow"><label class="flbl">Tags</label><div class="tags-grid" id="etags">
    <div class="tag-cat">Meal Type</div>
    <div class="tag${c("Breakfast")}" data-tag="Breakfast" onclick="togTag(this)">🌅 Breakfast</div>
    <div class="tag${c("Lunch")}" data-tag="Lunch" onclick="togTag(this)">🥪 Lunch</div>
    <div class="tag${c("Dinner")}" data-tag="Dinner" onclick="togTag(this)">🍽️ Dinner</div>
    <div class="tag${c("Snack")}" data-tag="Snack" onclick="togTag(this)">🍿 Snack</div>
    <div class="tag${c("Dessert")}" data-tag="Dessert" onclick="togTag(this)">🎂 Dessert</div>
    <div class="tag${c("Drinks")}" data-tag="Drinks" onclick="togTag(this)">🥤 Drinks</div>
    <div class="tag${c("Brunch")}" data-tag="Brunch" onclick="togTag(this)">🥣 Brunch</div>
    <div class="tag${c("Bread & Baking")}" data-tag="Bread & Baking" onclick="togTag(this)">🍞 Bread & Baking</div>
    <div class="tag${c("Sauce & Condiment")}" data-tag="Sauce & Condiment" onclick="togTag(this)">🫙 Sauce & Condiment</div>
    <div class="tag${c("Preserve & Pickle")}" data-tag="Preserve & Pickle" onclick="togTag(this)">🥫 Preserve & Pickle</div>
    <div class="tag-cat">Diet & Lifestyle</div>
    <div class="tag${c("Vegetarian")}" data-tag="Vegetarian" onclick="togTag(this)">🌱 Vegetarian</div>
    <div class="tag${c("Vegan")}" data-tag="Vegan" onclick="togTag(this)">🌿 Vegan</div>
    <div class="tag${c("Pescatarian")}" data-tag="Pescatarian" onclick="togTag(this)">🐟 Pescatarian</div>
    <div class="tag${c("Meat")}" data-tag="Meat" onclick="togTag(this)">🥩 Meat</div>
    <div class="tag${c("Gluten-Free")}" data-tag="Gluten-Free" onclick="togTag(this)">🫘 Gluten-Free</div>
    <div class="tag${c("Dairy-Free")}" data-tag="Dairy-Free" onclick="togTag(this)">🥛 Dairy-Free</div>
    <div class="tag${c("Nut-Free")}" data-tag="Nut-Free" onclick="togTag(this)">🥜 Nut-Free</div>
    <div class="tag${c("Sugar-Free")}" data-tag="Sugar-Free" onclick="togTag(this)">🍬 Sugar-Free</div>
    <div class="tag${c("Healthy")}" data-tag="Healthy" onclick="togTag(this)">🥗 Healthy</div>
    <div class="tag${c("High Protein")}" data-tag="High Protein" onclick="togTag(this)">💪 High Protein</div>
    <div class="tag${c("Low Carb")}" data-tag="Low Carb" onclick="togTag(this)">🫀 Low Carb</div>
    <div class="tag${c("Keto")}" data-tag="Keto" onclick="togTag(this)">🔥 Keto</div>
    <div class="tag${c("Heart Healthy")}" data-tag="Heart Healthy" onclick="togTag(this)">🫀 Heart Healthy</div>
    <div class="tag${c("Pregnancy-Safe")}" data-tag="Pregnancy-Safe" onclick="togTag(this)">🤰 Pregnancy-Safe</div>
    <div class="tag${c("Baby & Toddler")}" data-tag="Baby & Toddler" onclick="togTag(this)">👶 Baby & Toddler</div>
    <div class="tag${c("Halal")}" data-tag="Halal" onclick="togTag(this)">🍽️ Halal</div>
    <div class="tag${c("Kosher")}" data-tag="Kosher" onclick="togTag(this)">✡️ Kosher</div>
    <div class="tag${c("Paleo")}" data-tag="Paleo" onclick="togTag(this)">🌾 Paleo</div>
    <div class="tag${c("Egg-Free")}" data-tag="Egg-Free" onclick="togTag(this)">🥚 Egg-Free</div>
    <div class="tag${c("Mediterranean")}" data-tag="Mediterranean" onclick="togTag(this)">🌊 Mediterranean</div>
    <div class="tag-cat">Cook Style</div>
    <div class="tag${c("Quick")}" data-tag="Quick" onclick="togTag(this)">⚡ Quick</div>
    <div class="tag${c("Kid-Friendly")}" data-tag="Kid-Friendly" onclick="togTag(this)">👨‍👩‍👧 Kid-Friendly</div>
    <div class="tag${c("Date Night")}" data-tag="Date Night" onclick="togTag(this)">🌙 Date Night</div>
    <div class="tag${c("Batch Cook")}" data-tag="Batch Cook" onclick="togTag(this)">📦 Batch Cook</div>
    <div class="tag${c("Freezer Friendly")}" data-tag="Freezer Friendly" onclick="togTag(this)">❄️ Freezer Friendly</div>
    <div class="tag${c("One Pot")}" data-tag="One Pot" onclick="togTag(this)">🥘 One Pot</div>
    <div class="tag${c("Special Occasion")}" data-tag="Special Occasion" onclick="togTag(this)">🎉 Special Occasion</div>
    <div class="tag${c("Budget Friendly")}" data-tag="Budget Friendly" onclick="togTag(this)">💰 Budget Friendly</div>
    <div class="tag${c("Spicy")}" data-tag="Spicy" onclick="togTag(this)">🌶️ Spicy</div>
    <div class="tag${c("Pasta")}" data-tag="Pasta" onclick="togTag(this)">🍝 Pasta</div>
    <div class="tag${c("Salad")}" data-tag="Salad" onclick="togTag(this)">🥗 Salad</div>
    <div class="tag${c("Soup & Stew")}" data-tag="Soup & Stew" onclick="togTag(this)">🍲 Soup & Stew</div>
    <div class="tag${c("Grill & BBQ")}" data-tag="Grill & BBQ" onclick="togTag(this)">🔥 Grill & BBQ</div>
    <div class="tag${c("Slow Cooker")}" data-tag="Slow Cooker" onclick="togTag(this)">🫕 Slow Cooker</div>
    <div class="tag${c("Air Fryer")}" data-tag="Air Fryer" onclick="togTag(this)">⚡ Air Fryer</div>
    <div class="tag${c("Meal Prep")}" data-tag="Meal Prep" onclick="togTag(this)">🍱 Meal Prep</div>
    <div class="tag${c("World Cuisine")}" data-tag="World Cuisine" onclick="togTag(this)">🌍 World Cuisine</div>
    <div class="tag${c("Fermented & Preserved")}" data-tag="Fermented & Preserved" onclick="togTag(this)">🫙 Fermented & Preserved</div>
    <div class="tag${c("Stovetop")}" data-tag="Stovetop" onclick="togTag(this)">🍳 Stovetop</div>
    <div class="tag${c("Wrap & Sandwich")}" data-tag="Wrap & Sandwich" onclick="togTag(this)">🫔 Wrap & Sandwich</div>
    <div class="tag${c("Street Food")}" data-tag="Street Food" onclick="togTag(this)">🥙 Street Food</div>
    <div class="tag${c("Raw & No-Cook")}" data-tag="Raw & No-Cook" onclick="togTag(this)">🍣 Raw & No-Cook</div>
    <div class="tag${c("Camping & Outdoors")}" data-tag="Camping & Outdoors" onclick="togTag(this)">🏕️ Camping & Outdoors</div>
    <div class="tag-cat">Occasion</div>
    <div class="tag${c("Holiday")}" data-tag="Holiday" onclick="togTag(this)">🎄 Holiday</div>
    <div class="tag${c("Party")}" data-tag="Party" onclick="togTag(this)">🎊 Party</div>
    <div class="tag${c("Summer")}" data-tag="Summer" onclick="togTag(this)">🏖️ Summer</div>
    <div class="tag${c("Winter Comfort")}" data-tag="Winter Comfort" onclick="togTag(this)">❄️ Winter Comfort</div>
    <div class="tag${c("Halloween")}" data-tag="Halloween" onclick="togTag(this)">🎃 Halloween</div>
    <div class="tag${c("Thanksgiving")}" data-tag="Thanksgiving" onclick="togTag(this)">🦃 Thanksgiving</div>
    <div class="tag${c("Easter")}" data-tag="Easter" onclick="togTag(this)">🐣 Easter</div>
    <div class="tag${c("Valentine's Day")}" data-tag="Valentine's Day" onclick="togTag(this)">💝 Valentine's Day</div>
    <div class="tag${c("Game Day")}" data-tag="Game Day" onclick="togTag(this)">🏈 Game Day</div>
    <div class="tag${c("Graduation")}" data-tag="Graduation" onclick="togTag(this)">🎓 Graduation</div>
    <div class="tag${c("Brunch Party")}" data-tag="Brunch Party" onclick="togTag(this)">🍳 Brunch Party</div>
    <div class="tag${c("Ramadan")}" data-tag="Ramadan" onclick="togTag(this)">🌿 Ramadan</div>
    <div class="tag${c("Hanukkah")}" data-tag="Hanukkah" onclick="togTag(this)">🕎 Hanukkah</div>
    <!-- Cuisine — regional/cultural food origin tags -->
    <div class="tag-cat">Cuisine</div>
    <div class="tag${c("Italian")}" data-tag="Italian" onclick="togTag(this)">🇮🇹 Italian</div>
    <div class="tag${c("Mexican")}" data-tag="Mexican" onclick="togTag(this)">🇲🇽 Mexican</div>
    <div class="tag${c("Japanese")}" data-tag="Japanese" onclick="togTag(this)">🇯🇵 Japanese</div>
    <div class="tag${c("Chinese")}" data-tag="Chinese" onclick="togTag(this)">🇨🇳 Chinese</div>
    <div class="tag${c("Indian")}" data-tag="Indian" onclick="togTag(this)">🇮🇳 Indian</div>
    <div class="tag${c("Thai")}" data-tag="Thai" onclick="togTag(this)">🇹🇭 Thai</div>
    <div class="tag${c("Greek")}" data-tag="Greek" onclick="togTag(this)">🇬🇷 Greek</div>
    <div class="tag${c("French")}" data-tag="French" onclick="togTag(this)">🇫🇷 French</div>
    <div class="tag${c("Middle Eastern")}" data-tag="Middle Eastern" onclick="togTag(this)">🇱🇧 Middle Eastern</div>
    <div class="tag${c("Korean")}" data-tag="Korean" onclick="togTag(this)">🇰🇷 Korean</div>
    <div class="tag${c("Spanish")}" data-tag="Spanish" onclick="togTag(this)">🇪🇸 Spanish</div>
    <div class="tag${c("Vietnamese")}" data-tag="Vietnamese" onclick="togTag(this)">🇻🇳 Vietnamese</div>
    <div class="tag${c("American")}" data-tag="American" onclick="togTag(this)">🇺🇸 American</div>
    <div class="tag${c("African")}" data-tag="African" onclick="togTag(this)">🌍 African</div>
    <div class="tag${c("Latin American")}" data-tag="Latin American" onclick="togTag(this)">🌎 Latin American</div>
    <div class="tag${c("Turkish")}" data-tag="Turkish" onclick="togTag(this)">🇹🇷 Turkish</div>
    <div class="tag${c("Mediterranean Cuisine")}" data-tag="Mediterranean Cuisine" onclick="togTag(this)">🫔 Mediterranean</div>
    <!-- Protein — main protein source tags -->
    <div class="tag-cat">Protein</div>
    <div class="tag${c("Chicken")}" data-tag="Chicken" onclick="togTag(this)">🐔 Chicken</div>
    <div class="tag${c("Beef")}" data-tag="Beef" onclick="togTag(this)">🥩 Beef</div>
    <div class="tag${c("Pork")}" data-tag="Pork" onclick="togTag(this)">🐷 Pork</div>
    <div class="tag${c("Fish")}" data-tag="Fish" onclick="togTag(this)">🐟 Fish</div>
    <div class="tag${c("Seafood")}" data-tag="Seafood" onclick="togTag(this)">🦐 Seafood</div>
    <div class="tag${c("Eggs")}" data-tag="Eggs" onclick="togTag(this)">🥚 Eggs</div>
    <div class="tag${c("Beans & Legumes")}" data-tag="Beans & Legumes" onclick="togTag(this)">🫘 Beans & Legumes</div>
    <div class="tag${c("Nuts & Seeds")}" data-tag="Nuts & Seeds" onclick="togTag(this)">🌰 Nuts & Seeds</div>
    <div class="tag${c("Cheese")}" data-tag="Cheese" onclick="togTag(this)">🧀 Cheese</div>
  </div></div>`,d=!!e.imageUrl,m=`<div class="cover-upload-zone${d?" has-preview":""}" id="editCoverZone" onclick="triggerCoverUpload('edit')" ondragover="event.preventDefault();this.classList.add('drag-over')" ondragleave="this.classList.remove('drag-over')" ondrop="event.preventDefault();this.classList.remove('drag-over');handleCoverDrop(event,'edit')">
    ${d?`<img src="${e.imageUrl}" alt="Cover" onerror="this.parentElement.classList.remove('has-preview');this.remove()"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('edit')">✕</button>`:'<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop · Max 800×600, 300KB</div>'}
  </div>
  <input type="file" id="editCoverInput" accept="image/*" style="display:none" onchange="handleCoverSelected(event,'edit')"/>`,g=[e.prepTime?`Prep: ${e.prepTime}`:"",e.cookTime?`Cook: ${e.cookTime}`:"",e.totalTime?`Total: ${e.totalTime}`:"",e.servings?`Serves: ${e.servings}`:""].filter(Boolean),v=g.length?`<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px">${g.map(x=>`<span style="font-size:.74rem;color:var(--mt);background:var(--b1);border-radius:8px;padding:4px 10px">${x}</span>`).join("")}</div>`:"";let S="";e.stepsRaw&&e.stepsRaw.length&&(S=`<div class="frow"><label class="flbl">Step Photos <span class="otag">optional</span></label>${e.stepsRaw.map((L,R)=>{var O;const M=typeof L=="string"?L:L.text||"",U=(O=e.stepPhotos)==null?void 0:O[R];return`<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:12px;padding:10px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">
        <div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:var(--acd);color:var(--ac);font-size:.72rem;font-weight:700;display:flex;align-items:center;justify-content:center">${R+1}</div>
        <div style="flex:1;font-size:.84rem;color:var(--tx2);line-height:1.5">${Ct(M)}</div>
        ${U?`<img src="${U}" class="step-photo-preview" onclick="event.stopPropagation();openPhotoViewer(['${U}'],0)" alt="Step ${R+1}"/>`:""}
        <button class="step-photo-btn${U?" has-photo":""}" onclick="event.stopPropagation();triggerStepPhotoUpload(${R})" title="${U?"Change":"Add"} step photo">📷</button>
        ${U?`<button class="step-photo-btn" onclick="event.stopPropagation();removeStepPhoto(${R})" title="Remove step photo" style="color:var(--rd)">✕</button>`:""}
      </div>`}).join("")}</div>`,S+='<input type="file" id="stepPhotoInput" accept="image/*" style="display:none" onchange="handleStepPhotoSelected(event)"/>'),f("erecbody").innerHTML=`
    ${m}
    ${v}
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
    ${l}
    <div class="frow"><label class="flbl">Description / Ingredients</label><textarea class="fta" id="erd" style="min-height:140px">${e.description||""}</textarea></div>
    <div class="frow"><label class="flbl">Notes</label><input class="fi" id="erno" value="${e.notes||""}"/></div>
    ${r}
    <div class="frow"><label class="flbl">Cuisine <span class="otag">optional</span></label><input class="fi" id="ecuis" value="${e.cuisine||""}" placeholder="e.g. Mediterranean, Turkish, Asian…"/></div>
    ${S}
    <div style="display:flex;align-items:center;gap:10px;margin:12px 0"><span style="font-size:.88rem">Favorite</span><div class="tog${e.favorited?" on":""}" id="etog" onclick="this.classList.toggle('on')"></div></div>
    <div style="display:flex;align-items:center;gap:10px;margin:6px 0 14px"><span style="font-size:.88rem">Share publicly</span><div class="tog${e.isPublic?" on":""}" id="epub" onclick="togglePublic('${e.id}');this.classList.toggle('on')"></div><span style="font-size:.72rem;color:var(--mt)">Visible to the community</span></div>
    <div class="brow"><button class="btn bd" style="flex:1" onclick="delER()">Delete</button><button class="btn bp" style="flex:2" onclick="updR()">Save</button></div>`,rt("erec")}async function Hk(){const n=h.recs.find(c=>c.id===h.eid);if(!n)return;const e=[...document.querySelectorAll("#estars .star")].filter(c=>c.classList.contains("on")).length,t=Wm("etags"),i=f("ecuis")?f("ecuis").value.trim():n.cuisine||"";let s=n.imageUrl;if(_t)try{P("Uploading cover photo…"),s=await zm(_t,n.id),_t=null}catch(c){console.error("Cover upload failed:",c),P("Cover photo upload failed — saving recipe without it")}else n._removeCover&&(s=null,delete n._removeCover,qm(`recipes/${n.id}/cover.jpg`).catch(()=>{}));const r={...n.stepPhotos||{}},o=Object.keys(fi);if(o.length){P("Uploading step photos…");for(const c of o)try{const l=await kk(fi[c],n.id,parseInt(c));r[c]=l}catch(l){console.error(`Step ${c} photo upload failed:`,l)}fi={}}await it({...n,name:f("ern").value.trim(),rating:e,description:f("erd").value.trim(),notes:f("erno").value.trim(),favorited:f("etog").classList.contains("on"),tags:t,cuisine:i,imageUrl:s,stepPhotos:r}),P("Recipe updated!"),Ee("erec")}async function zk(){confirm("Delete this recipe?")&&(await Df(h.eid),P("Deleted"),Ee("erec"))}async function qk(n){const e=f("erd");if(!e)return;const t=e.value.trim();if(!t){P("No ingredients to scale");return}const i=f("scaleStatus");i.style.display="block",i.style.color="var(--mt)",i.textContent=`⏳ Scaling to ${n}× with Claude…`;try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Scale ALL ingredient quantities in this recipe by ${n}x. Return ONLY the updated recipe text with scaled quantities. Keep the same format. Do not add any explanation.

${t}`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"";o?(e.value=o.trim(),i.style.color="var(--gn)",i.textContent=`✓ Scaled to ${n}×`):(i.style.color="var(--rd)",i.textContent="Couldn't scale — try again")}catch{i.style.color="var(--rd)",i.textContent="Couldn't reach Claude — check connection"}}async function Wk(){const n=f("rsub");n&&(n.textContent="Thinking…");const e=h.inv.map(s=>`${s.name} (${s.qty} ${s.unit})`).join(", "),t=h.recs.map(s=>s.name).join(", "),i=[h.cfg.nopork?"no pork":null,h.cfg.noshellfish?"no shellfish":null,h.cfg.vegetarian?"vegetarian":null,h.cfg.glutenfree?"gluten-free":null,h.cfg.other||null].filter(Boolean).join(", ");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Based on this exact inventory: ${e}
Restrictions: ${i||"none"}
Saved recipes: ${t||"none"}
Suggest 5 complete meals I can make RIGHT NOW with no extra shopping. Be specific with names. Format as a numbered list.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",c=f("rbody");c&&(c.innerHTML=`<div style="background:var(--card);border:1px solid var(--ac);border-radius:14px;padding:16px;margin-bottom:12px"><div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ac);margin-bottom:10px">🔍 Make right now — no shopping needed</div><div style="font-size:.88rem;line-height:1.8;color:var(--tx2)">${ab(o)}</div><button class="btn bs bsm" style="margin-top:12px;width:100%" onclick="setRT('all')">← Back to recipes</button></div>`),n&&(n.textContent="Based on your inventory")}catch{n&&(n.textContent="Couldn't reach Claude")}}async function Gk(n){const e=h.recs.find(t=>t.id===n);if(!e||!e.description){P("No ingredients listed");return}P("Parsing ingredients…");try{const t=h.inv.map(l=>l.name.toLowerCase()),s=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:400,messages:[{role:"user",content:`Extract a list of ingredient names from this recipe description. Return ONLY a JSON array of strings, no markdown, no quantities, just clean ingredient names. Example: ["chicken","garlic","olive oil"]

Recipe: ${e.description}`}]})})).json(),r=(s.content&&s.content[0]&&s.content[0].text||"").replace(/```json|```/g,"").trim(),c=JSON.parse(r).filter(l=>!t.some(d=>d.includes(l.toLowerCase())||l.toLowerCase().includes(d)));if(!c.length){P("All ingredients already in pantry ✓");return}for(const l of c)await ye({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:l,qty:1,checked:!1,src:"recipe"});P(`Added ${c.length} ingredient${c.length!==1?"s":""} to shopping list 🛒`),Ee("erec"),window.showScreen("shopping")}catch{P("Couldn't parse ingredients")}}function Kk(n,e){h.nr=n,e==="r"?us("rstars",n):e==="c"?us("cstars",n):e==="e"&&us("estars",n)}async function Qk(n){const e=h.recs.find(r=>r.id===n);if(!e)return;const t=!e.isPublic,i=re(),s=(i==null?void 0:i.displayName)||localStorage.getItem("ks-who")||"Anonymous";t?(await kc(e,s,h.hid),P("Recipe shared with the community!")):(await Cc(e.id),P("Recipe removed from community")),await it({...e,isPublic:t})}function Jk(n){const t=f(n==="add"?"addRecCoverInput":"editCoverInput");t&&t.click()}function Yk(n,e){var i,s;const t=(s=(i=n.target)==null?void 0:i.files)==null?void 0:s[0];t&&(_t=t,Jm(t,e))}function Xk(n,e){var i,s;const t=(s=(i=n.dataTransfer)==null?void 0:i.files)==null?void 0:s[0];!t||!t.type.startsWith("image/")||(_t=t,Jm(t,e))}function Jm(n,e){const i=f(e==="add"?"addRecCoverZone":"editCoverZone");if(!i)return;const s=new FileReader;s.onload=r=>{i.classList.add("has-preview"),i.innerHTML=`<img src="${r.target.result}" alt="Cover preview"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('${e}')">✕</button>`},s.readAsDataURL(n)}function Zk(n){_t=null;const t=f(n==="add"?"addRecCoverZone":"editCoverZone");if(t&&(t.classList.remove("has-preview"),t.innerHTML='<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop · Max 800×600, 300KB</div>',n==="edit"&&h.eid)){const i=h.recs.find(s=>s.id===h.eid);i&&(i._removeCover=!0)}}let Pr=null;function eC(n){Pr=n;const e=f("stepPhotoInput");e&&(e.value="",e.click())}function tC(n){var i,s;const e=(s=(i=n.target)==null?void 0:i.files)==null?void 0:s[0];if(!e||Pr===null)return;fi[Pr]=e;const t=new FileReader;t.onload=r=>{P(`Step ${Pr+1} photo added`)},t.readAsDataURL(e)}function nC(n){const e=h.recs.find(t=>t.id===h.eid);if(e){if(delete fi[n],e.stepPhotos&&e.stepPhotos[n]){const t=`recipes/${e.id}/steps/${n}.jpg`;qm(t).catch(()=>{}),delete e.stepPhotos[n]}Qm(e.id),P(`Step ${n+1} photo removed`)}}function iC(n,e){Dn=n||[],$n=e||0,Xm();const t=f("photoViewer");t&&t.classList.add("active"),rC()}function sC(){const n=f("photoViewer");n&&n.classList.remove("active"),Dn=[]}function Ym(n){const e=$n+n;e<0||e>=Dn.length||($n=e,Xm())}function Xm(){const n=f("pvImg"),e=f("pvCounter"),t=f("pvPrev"),i=f("pvNext");n&&(n.src=Dn[$n]||""),e&&(e.textContent=Dn.length>1?`${$n+1} / ${Dn.length}`:""),t&&(t.style.display=$n>0?"flex":"none"),i&&(i.style.display=$n<Dn.length-1?"flex":"none")}function rC(){const n=f("pvWrap");if(!n)return;let e=0,t=0;const i=n.cloneNode(!0);n.parentNode.replaceChild(i,n),i.addEventListener("touchstart",s=>{e=s.touches[0].clientX,t=s.touches[0].clientY},{passive:!0}),i.addEventListener("touchend",s=>{const r=s.changedTouches[0].clientX-e,o=s.changedTouches[0].clientY-t;Math.abs(r)>50&&Math.abs(r)>Math.abs(o)&&Ym(r<0?1:-1)},{passive:!0})}function oC(){const n=f("cmtPhotoInput");n&&(n.value="",n.click())}function aC(n){var t;const e=(t=n.target)==null?void 0:t.files;if(!(!e||!e.length)){for(let i=0;i<e.length;i++)e[i].type.startsWith("image/")&&ft.push(e[i]);Zm()}}function cC(n){ft.splice(n,1),Zm()}function Zm(){const n=f("cmtPhotoPreview");if(!n)return;if(!ft.length){n.innerHTML="";return}let e="";ft.forEach((t,i)=>{const s=URL.createObjectURL(t);e+=`<div style="position:relative;display:inline-block"><img src="${s}" class="cmt-preview-thumb" alt=""/><button onclick="event.stopPropagation();removeCommentPhoto(${i})" style="position:absolute;top:-4px;right:-4px;width:18px;height:18px;border-radius:50%;background:var(--rd);color:#fff;border:none;font-size:.6rem;cursor:pointer;display:flex;align-items:center;justify-content:center">✕</button></div>`}),e+='<div class="cmt-preview-add" onclick="triggerCommentPhotoUpload()">+</div>',n.innerHTML=e}let pt=null;function lC(n){if(!n)return 0;const e=n.toLowerCase();let t=0;const i=e.match(/(\d+)\s*(?:hr|hour)/),s=e.match(/(\d+)\s*min/);return i&&(t+=parseInt(i[1])*60),s&&(t+=parseInt(s[1])),t}function wl(n,e){const t=Math.round(n||0),i=Array.from({length:5},(r,o)=>o<t?"★":"☆").join(""),s=e?`(${e})`:"";return`<span style="color:var(--ac);font-size:.74rem;letter-spacing:1px">${i}</span><span style="font-size:.68rem;color:var(--mt);margin-left:3px">${s}</span>`}async function _l(){const n=f("rbody");if(n){n.innerHTML='<div class="es"><div class="ei">🌍</div><p>Loading community recipes…</p></div>',h.comPage=0;try{h.comRecs=await Ac(),wn()}catch(e){console.error("loadCommunity:",e),n.innerHTML=`<div class="es"><div class="ei">⚠️</div><p>Couldn't load community recipes.</p></div>`}}}function uC(n){h.comCuisine=n,h.comPage=0,wn()}function dC(n){h.comSearch=n,h.comPage=0,wn()}function hC(n){h.comSort=n,h.comPage=0,wn()}function fC(n){const e=h.comTags.indexOf(n);e>=0?h.comTags.splice(e,1):h.comTags.push(n),h.comPage=0,wn()}function pC(n){h.comTime=n,h.comPage=0,wn()}function mC(n){h.comMinRating=parseInt(n)||0,h.comPage=0,wn()}function wn(){const n=f("rbody");if(!n)return;pt&&(pt.disconnect(),pt=null);let e=[...h.comRecs];if(h.comCuisine&&h.comCuisine!=="all"&&(e=e.filter(g=>(g.cuisine||"").toLowerCase().includes(h.comCuisine.toLowerCase())||(g.tags||[]).some(v=>v.toLowerCase().includes(h.comCuisine.toLowerCase())))),h.comSearch){const g=h.comSearch.toLowerCase();e=e.filter(v=>(v.title||"").toLowerCase().includes(g)||(v.tags||[]).join(" ").toLowerCase().includes(g)||(v.cuisine||"").toLowerCase().includes(g)||(v.authorUsername||"").toLowerCase().includes(g)||(v.authorName||"").toLowerCase().includes(g))}h.comTags.length&&(e=e.filter(g=>h.comTags.every(v=>(g.tags||[]).includes(v)))),h.comTime&&h.comTime!=="any"&&(e=e.filter(g=>{const v=lC(g.cookTime||g.totalTime);return v?h.comTime==="under30"?v<=30:h.comTime==="30to60"?v>30&&v<=60:h.comTime==="over60"?v>60:!0:!1})),h.comMinRating>0&&(e=e.filter(g=>(g.avgRating||0)>=h.comMinRating)),h.comSort==="popular"?e.sort((g,v)=>(v.likes||0)-(g.likes||0)):h.comSort==="rated"?e.sort((g,v)=>(v.avgRating||0)-(g.avgRating||0)):e.sort((g,v)=>new Date(v.createdAt||0)-new Date(g.createdAt||0));const i=e.slice(0,(h.comPage+1)*20),s=i.length<e.length,r=f("rsub");r&&(r.textContent=e.length+" community recipe"+(e.length!==1?"s":""));const c=[["all","All Cuisines"],["italian","Italian"],["mexican","Mexican"],["japanese","Japanese"],["chinese","Chinese"],["indian","Indian"],["thai","Thai"],["greek","Greek"],["french","French"],["middle eastern","Middle Eastern"],["korean","Korean"],["spanish","Spanish"],["vietnamese","Vietnamese"],["american","American"],["african","African"],["latin american","Latin American"],["turkish","Turkish"],["mediterranean","Mediterranean"],["asian","Asian"],["bangladeshi","Bangladeshi"]].map(([g,v])=>`<option value="${g}"${h.comCuisine===g?" selected":""}>${v}</option>`).join(""),d=["Breakfast","Lunch","Dinner","Snack","Dessert","Drinks","Brunch","Bread & Baking","Sauce & Condiment","Preserve & Pickle","Vegetarian","Vegan","Pescatarian","Meat","Gluten-Free","Dairy-Free","Nut-Free","Sugar-Free","Healthy","High Protein","Low Carb","Keto","Heart Healthy","Pregnancy-Safe","Baby & Toddler","Halal","Kosher","Paleo","Egg-Free","Mediterranean","Quick","Kid-Friendly","Date Night","Batch Cook","Freezer Friendly","One Pot","Special Occasion","Budget Friendly","Spicy","Pasta","Salad","Soup & Stew","Grill & BBQ","Slow Cooker","Air Fryer","Meal Prep","World Cuisine","Fermented & Preserved","Stovetop","Wrap & Sandwich","Street Food","Raw & No-Cook","Camping & Outdoors","Holiday","Party","Summer","Winter Comfort","Halloween","Thanksgiving","Easter","Valentine's Day","Game Day","Graduation","Brunch Party","Ramadan","Hanukkah","Italian","Mexican","Japanese","Chinese","Indian","Thai","Greek","French","Middle Eastern","Korean","Spanish","Vietnamese","American","African","Latin American","Turkish","Mediterranean Cuisine","Chicken","Beef","Pork","Fish","Seafood","Eggs","Beans & Legumes","Nuts & Seeds","Cheese"].map(g=>{const v=h.comTags.includes(g);return`<div class="com-tag${v?" com-tag-sel":""}" onclick="toggleComTag('${g}')" style="cursor:pointer;${v?"background:var(--ac);color:#fff;border-color:var(--ac)":""}">${g}</div>`}).join("");let m=`<div style="margin-bottom:14px">
    <input class="fi" id="com-search" placeholder="Search recipes, tags, authors…" value="${h.comSearch.replace(/"/g,"&quot;")}" oninput="setComSearch(this.value)" style="margin-bottom:10px"/>
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px">
      <select class="fsel" onchange="setComCuisine(this.value)" style="flex:1;font-size:.78rem;padding:7px 10px">${c}</select>
      <select class="fsel" onchange="setComTime(this.value)" style="flex:1;font-size:.78rem;padding:7px 10px">
        <option value="any"${h.comTime==="any"?" selected":""}>Any time</option>
        <option value="under30"${h.comTime==="under30"?" selected":""}>Under 30 min</option>
        <option value="30to60"${h.comTime==="30to60"?" selected":""}>30–60 min</option>
        <option value="over60"${h.comTime==="over60"?" selected":""}>Over 1 hour</option>
      </select>
    </div>
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px">
      <select class="fsel" onchange="setComMinRating(this.value)" style="font-size:.78rem;padding:7px 10px;flex:1">
        <option value="0"${h.comMinRating===0?" selected":""}>Any rating</option>
        <option value="3"${h.comMinRating===3?" selected":""}>3+ stars</option>
        <option value="4"${h.comMinRating===4?" selected":""}>4+ stars</option>
      </select>
      <select class="fsel" onchange="setComSort(this.value)" style="font-size:.78rem;padding:7px 10px;flex:1">
        <option value="newest"${h.comSort==="newest"?" selected":""}>Newest</option>
        <option value="popular"${h.comSort==="popular"?" selected":""}>Most popular</option>
        <option value="rated"${h.comSort==="rated"?" selected":""}>Highest rated</option>
      </select>
    </div>
    <div style="display:flex;gap:5px;flex-wrap:wrap">${d}</div>
  </div>`;if(!e.length){const g=h.comSearch||h.comCuisine!=="all"||h.comTags.length||h.comTime!=="any"||h.comMinRating>0;m+=`<div class="es"><div class="ei">🌍</div><p>${g?"No recipes match your filters.":"No community recipes yet. Be the first to share!"}</p></div>`,n.innerHTML=m;return}if(i.forEach(g=>{const v=(g.tags||[]).slice(0,3).map(M=>`<span class="com-tag">${M}</span>`).join(""),S=g.authorUsername?`@${g.authorUsername}`:g.authorName||"Anonymous",x=g.cookTime||g.totalTime||"",L=g.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${g.imageUrl}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",R=g.commentCount||0;m+=`<div class="rcd com-rcd" onclick="openComRecipe('${g.id}')">
      ${L}
      <div class="rrow">
        <div class="rnm" style="flex:1">${g.title||"Untitled"}</div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <span style="font-size:.78rem;color:var(--rd)">❤️ ${g.likes||0}</span>
          ${R?`<span style="font-size:.78rem;color:var(--mt)">💬 ${R}</span>`:""}
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-top:4px;flex-wrap:wrap">
        ${g.cuisine?`<span style="font-size:.72rem;color:var(--ac);font-weight:600">${g.cuisine}</span>`:""}
        ${g.avgRating||g.ratingCount?`<span>${wl(g.avgRating,g.ratingCount)}</span>`:""}
        ${x?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${x}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${v}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${S}</div>
      </div>
    </div>`}),s&&(m+='<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>'),n.innerHTML=m,s){const g=f("com-scroll-sentinel");g&&(pt=new IntersectionObserver(v=>{v[0].isIntersecting&&(h.comPage++,eg(e,n))},{rootMargin:"200px"}),pt.observe(g))}}function eg(n,e){const i=h.comPage*20,s=i+20,r=n.slice(i,s),o=s<n.length;let c="";r.forEach(d=>{const m=(d.tags||[]).slice(0,3).map(L=>`<span class="com-tag">${L}</span>`).join(""),g=d.authorUsername?`@${d.authorUsername}`:d.authorName||"Anonymous",v=d.cookTime||d.totalTime||"",S=d.commentCount||0,x=d.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${d.imageUrl}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"";c+=`<div class="rcd com-rcd" onclick="openComRecipe('${d.id}')">
      ${x}
      <div class="rrow">
        <div class="rnm" style="flex:1">${d.title||"Untitled"}</div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <span style="font-size:.78rem;color:var(--rd)">❤️ ${d.likes||0}</span>
          ${S?`<span style="font-size:.78rem;color:var(--mt)">💬 ${S}</span>`:""}
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-top:4px;flex-wrap:wrap">
        ${d.cuisine?`<span style="font-size:.72rem;color:var(--ac);font-weight:600">${d.cuisine}</span>`:""}
        ${d.avgRating||d.ratingCount?`<span>${wl(d.avgRating,d.ratingCount)}</span>`:""}
        ${v?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${v}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${m}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${g}</div>
      </div>
    </div>`});const l=f("com-scroll-sentinel");if(l&&l.remove(),pt&&(pt.disconnect(),pt=null),e.insertAdjacentHTML("beforeend",c),o){e.insertAdjacentHTML("beforeend",'<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>');const d=f("com-scroll-sentinel");d&&(pt=new IntersectionObserver(m=>{m[0].isIntersecting&&(h.comPage++,eg(n,e))},{rootMargin:"200px"}),pt.observe(d))}}async function rc(n){var b;const e=h.comRecs.find(I=>I.id===n);if(!e)return;h._openComId=n,So="view",ft=[];const t=(b=re())==null?void 0:b.uid,[i,s,r,o]=await Promise.all([Vf(n),Of(n).catch(()=>[]),zf(n).catch(()=>null),Bf(n)]);i?h.myLikes.add(n):h.myLikes.delete(n),s.sort((I,E)=>new Date(I.createdAt||0)-new Date(E.createdAt||0)),h._comComments=s;const c=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`,l=e.imageUrl?`<div style="margin:-16px -16px 16px;overflow:hidden;max-height:240px"><img src="${e.imageUrl}" alt="" style="width:100%;height:240px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",d=[e.prepTime?`Prep: ${e.prepTime}`:"",e.cookTime?`Cook: ${e.cookTime}`:"",e.totalTime?`Total: ${e.totalTime}`:"",e.servings?`Serves: ${e.servings}`:""].filter(Boolean),m=d.length?`<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px">${d.map(I=>`<span style="font-size:.74rem;color:var(--mt);background:var(--b1);border-radius:8px;padding:4px 10px">${I}</span>`).join("")}</div>`:"",g=(e.ratingCount||0)>0?`<div style="margin-bottom:6px">${wl(e.avgRating,e.ratingCount)}</div>`:"",v=(e.tags||[]).map(I=>`<span class="com-tag">${I}</span>`).join(""),S=e.authorUsername?`@${e.authorUsername}`:e.authorName||"Anonymous",x=h.myLikes.has(n),L=t&&t===e.authorUid;let R="";e.ingredientsRaw&&e.ingredientsRaw.length?R=`<ul style="margin:0;padding-left:18px;font-size:.88rem;color:var(--tx2);line-height:2">${e.ingredientsRaw.map(I=>`<li>${(typeof I=="string"?I:(I.amount||"")+" "+(I.unit||"")+" "+(I.name||"")).replace(/</g,"&lt;").replace(/>/g,"&gt;").trim()}</li>`).join("")}</ul>`:e.ingredients&&(R=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.ingredients||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);let M="";e.stepsRaw&&e.stepsRaw.length?M=`<ol style="margin:0;padding-left:22px;font-size:.88rem;color:var(--tx2);line-height:1.8">${e.stepsRaw.map(I=>`<li style="margin-bottom:8px">${(typeof I=="string"?I:I.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</li>`).join("")}</ol>`:e.steps&&(M=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.steps||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);const U=TC(s.slice(0,20),n,t,L),O=s.length>20,F=(r==null?void 0:r.rating)||0,W=L?`<div style="font-size:.78rem;color:var(--mt);font-style:italic">You can't rate your own recipe</div>`:Array.from({length:5},(I,E)=>`<span class="star${E<F?" on":""}" onclick="rateComRecipe('${n}',${E+1})" style="cursor:pointer;font-size:1.3rem">${E<F?"★":"☆"}</span>`).join(""),Y=L?`<button class="btn bd bsm" onclick="unpublishComRecipe('${n}')" style="margin-top:12px;width:100%">🚫 Unpublish this recipe</button>`:"",T=!L&&t?`<button class="btn-report" onclick="openReportSheet('recipe','${n}','${n}')" title="Report recipe">🚩 Report</button>`:"";f("erecbody").innerHTML=`
    ${l}
    <div style="margin-bottom:14px">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px">
        <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;line-height:1.3;margin-bottom:6px;flex:1">${e.title||"Untitled"}</div>
        ${T}
      </div>
      ${e.cuisine?`<div style="font-size:.78rem;color:var(--ac);font-weight:600;margin-bottom:6px">${e.cuisine}</div>`:""}
      ${g}
      <div style="font-size:.76rem;color:var(--mt)">by ${S} · ${e.createdAt?new Date(e.createdAt).toLocaleDateString():""}</div>
      ${v?`<div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:8px">${v}</div>`:""}
    </div>

    ${m}

    <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap">
      <button class="btn ${x?"bp":"bs"} bsm" onclick="likeComRecipe('${n}')" id="com-like-btn">
        ${x?"❤️":"🤍"} ${e.likes||0} Like${(e.likes||0)!==1?"s":""}
      </button>
      <button class="btn bs bsm" style="flex:1" onclick="saveComToKitchen('${n}')">📖 Save to my recipes</button>
      <button class="btn bs bsm" onclick="shareComRecipe('${n}')">📤 Share</button>
    </div>

    ${R?`<div class="frow"><label class="flbl">Ingredients</label>${R}</div>`:""}
    ${M?`<div class="frow"><label class="flbl">Instructions</label>${M}</div>`:""}

    <div style="background:var(--card);border:1px solid var(--b2);border-radius:12px;padding:14px;margin-top:16px">
      <div class="flbl" style="margin-bottom:8px">Rate this recipe</div>
      <div id="com-rating-stars" style="display:flex;align-items:center;gap:2px">${W}</div>
      ${F?`<div id="com-rating-label" style="font-size:.72rem;color:var(--mt);margin-top:4px">You rated this ${F}★</div>`:'<div id="com-rating-label"></div>'}
    </div>

    <div style="margin-top:16px">
      <div class="flbl" style="margin-bottom:10px">Comments (${s.length})</div>
      <div id="com-comments">${U||'<div style="font-size:.82rem;color:var(--mt);padding:8px 0">No comments yet.</div>'}</div>
      ${O?`<button class="btn bs bsm" id="com-load-more" onclick="loadMoreComments()" style="width:100%;margin-top:8px">Load more comments (${s.length-20} remaining)</button>`:""}
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

    ${Y}`;const w=f("com-cmt-input");w&&w.addEventListener("input",()=>{const I=f("com-cmt-counter");I&&(I.textContent=`${w.value.length} / 500`)}),rt("erec")}async function gC(n,e){return tg(n,e)}async function tg(n,e){if(!re()){P("Sign in to rate recipes");return}try{const i=await Hf(n,e);if(!i){P("You can't rate your own recipe");return}const s=h.comRecs.find(c=>c.id===n);s&&(s.ratingSum=i.ratingSum,s.ratingCount=i.ratingCount,s.avgRating=i.avgRating);const r=f("com-rating-stars");r&&(r.innerHTML=Array.from({length:5},(c,l)=>`<span class="star${l<e?" on":""}" onclick="rateComRecipe('${n}',${l+1})" style="cursor:pointer;font-size:1.3rem">${l<e?"★":"☆"}</span>`).join(""));const o=f("com-rating-label");o&&(o.textContent=`You rated this ${e}★`),P(`Rated ${e}★`)}catch(i){console.error("rateComRecipe:",i),P("Couldn't submit rating")}}async function yC(n){if(confirm("Remove this recipe from the community?"))try{await Cc(n),h.comRecs=h.comRecs.filter(e=>e.id!==n),P("Recipe unpublished"),Ee("erec"),wn()}catch(e){console.error("unpublishComRecipe:",e),P("Couldn't unpublish recipe")}}async function vC(n){if(!re()){P("Sign in to like recipes");return}const t=h.myLikes.has(n);try{await Nf(n,t),t?h.myLikes.delete(n):h.myLikes.add(n);const i=h.comRecs.find(r=>r.id===n);i&&(i.likes=(i.likes||0)+(t?-1:1));const s=f("com-like-btn");if(s){const r=h.myLikes.has(n);s.className=`btn ${r?"bp":"bs"} bsm`,s.innerHTML=`${r?"❤️":"🤍"} ${(i==null?void 0:i.likes)||0} Like${((i==null?void 0:i.likes)||0)!==1?"s":""}`}P(t?"Like removed":"Liked!")}catch(i){console.error("likeComRecipe:",i),P("Couldn't update like")}}async function wC(n){if(!re()){P("Sign in to save recipes");return}const t=h.comRecs.find(i=>i.id===n);if(t)try{await Uf(t),P("Recipe saved to your kitchen! 📖"),Ee("erec")}catch(i){console.error("saveComToKitchen:",i),P("Couldn't save recipe")}}async function _C(n){var r;const e=re();if(!e){P("Sign in to comment");return}const t=f("com-cmt-input"),i=(r=t==null?void 0:t.value)==null?void 0:r.trim();if(!i&&!ft.length)return;if(i&&i.length>500){P("Comment must be 500 characters or less");return}const s=e.displayName||localStorage.getItem("ks-who")||"Anonymous";try{const o=await Mf(n,i||"",s);if(!o)return;let c=[];if(ft.length){P("Uploading photos…");for(let S=0;S<ft.length;S++)try{const x=await Ck(ft[S],n,o.id,S);c.push(x)}catch(x){console.error(`Comment photo ${S} upload failed:`,x)}c.length&&(o.photoUrls=c,await K(`public_recipes/${n}/comments/${o.id}`,{...o,id:void 0}))}t&&(t.value=""),ft=[];const l=f("cmtPhotoPreview");l&&(l.innerHTML="");const d=f("com-cmt-counter");d&&(d.textContent="0 / 500");const m=f("com-comments"),g=h.comRecs.find(S=>S.id===n),v=e.uid===(g==null?void 0:g.authorUid);m&&o&&(m.querySelector("div[style*='color:var(--mt)']")&&!m.querySelector("div[style*='border-bottom']")&&(m.innerHTML=""),m.innerHTML+=bl(o,n,e.uid,v)),h._comComments&&h._comComments.push(o),P(c.length?`Comment posted with ${c.length} photo${c.length!==1?"s":""}!`:"Comment posted!")}catch(o){console.error("addComComment:",o),P("Couldn't post comment")}}async function bC(n){const e=h.comRecs.find(s=>s.id===n),t=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`,i=(e==null?void 0:e.title)||"Recipe";if(navigator.share)try{await navigator.share({title:i,text:`Check out this recipe: ${i}`,url:t});return}catch{}try{await navigator.clipboard.writeText(t),P("Link copied!")}catch{P("Couldn't copy link")}}function bl(n,e,t,i){const s=(n.authorUsername?"@"+n.authorUsername:n.authorName)||"Anonymous",r=n.createdAt?new Date(n.createdAt).toLocaleDateString():"",o=(n.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;"),c=t&&(n.authorUid===t||i),l=t&&n.authorUid!==t;let d="";c&&(d+=`<button class="btn-report" onclick="deleteComComment('${e}','${n.id}')" title="Delete comment" style="font-size:.7rem">🗑</button>`),l&&(d+=`<button class="btn-report" onclick="openReportSheet('comment','${n.id}','${e}')" title="Report comment" style="font-size:.7rem">🚩</button>`);let m="";const g=n.photoUrls||[];if(g.length){const v=JSON.stringify(g).replace(/'/g,"\\'");m=`<div class="cmt-photos-grid">${g.map((x,L)=>`<img src="${x}" alt="Photo ${L+1}" onclick="event.stopPropagation();openPhotoViewer(${v.replace(/"/g,"&quot;")},${L})" onerror="this.style.display='none'"/>`).join("")}</div>
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
  </div>`}function TC(n,e,t,i){return n.length?n.map(s=>bl(s,e,t,i)).join(""):""}function IC(){var d;const n=h._openComId,e=(d=re())==null?void 0:d.uid,t=h.comRecs.find(m=>m.id===n),i=e&&e===(t==null?void 0:t.authorUid),s=f("com-comments");if(!s||!h._comComments)return;const r=s.querySelectorAll(".com-comment-row").length,o=h._comComments.slice(r,r+20);if(o.length){const m=o.map(g=>bl(g,n,e,i)).join("");s.insertAdjacentHTML("beforeend",m)}const c=h._comComments.length-r-o.length,l=f("com-load-more");l&&(c>0?l.textContent=`Load more comments (${c} remaining)`:l.remove())}async function EC(n,e){if(confirm("Delete this comment?"))try{await qf(n,e);const t=document.getElementById("cmt-"+e);t&&t.remove(),h._comComments&&(h._comComments=h._comComments.filter(i=>i.id!==e)),P("Comment deleted")}catch(t){console.error("deleteComComment:",t),P("Couldn't delete comment")}}function SC(n,e,t){if(!re()){P("Sign in to report content");return}h._reportTarget={type:n,targetId:e,recipeId:t};const s=f("report-sheet"),r=f("reportBackdrop");s&&s.classList.add("active"),r&&r.classList.add("active")}function ng(){const n=f("report-sheet"),e=f("reportBackdrop");n&&n.classList.remove("active"),e&&e.classList.remove("active"),h._reportTarget=null}async function kC(n){const e=h._reportTarget;if(e){try{const t=await Wf(e.type,e.targetId,n,e.recipeId);P(t==="duplicate"?"You've already reported this":"Thanks for your report")}catch(t){console.error("submitComReport:",t),P("Couldn't submit report")}ng()}}async function ig(){try{const n=await Jf(),e=n>9?"9+":String(n),t=n>0,i=f("recipes-notif-badge");i&&(i.textContent=e,i.style.display=t?"flex":"none");const s=f("recipes-notif-badge-hdr");s&&(s.textContent=e,s.style.display=t?"flex":"none")}catch{}}async function CC(){if(!re()){P("Sign in to view notifications");return}try{const e=await Kf();Qf().then(()=>ig());const t=f("erecbody");if(!t)return;let i=`<div style="margin-bottom:14px">
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;margin-bottom:6px">Notifications</div>
      <div style="font-size:.76rem;color:var(--mt)">${e.length?e.length+" notification"+(e.length!==1?"s":""):"No notifications yet"}</div>
    </div>`;e.length?e.forEach(s=>{const r=!s.read,o=s.createdAt?new Date(s.createdAt).toLocaleDateString():"";s.type==="comment"&&(i+=`<div class="rcd" style="${r?"border-left:3px solid var(--ac);":""}" onclick="openComRecipeFromNotif('${s.recipeId}')">
            <div style="font-size:.84rem;font-weight:${r?"600":"400"};line-height:1.5">
              <span style="color:var(--ac)">${(s.commenterUsername||"Someone").replace(/</g,"&lt;")}</span> commented on your recipe
              <span style="font-weight:600">${(s.recipeName||"").replace(/</g,"&lt;")}</span>
            </div>
            <div style="font-size:.68rem;color:var(--mt);margin-top:4px">${o}</div>
          </div>`)}):i+=`<div class="es"><div class="ei">🔔</div><p>When someone comments on your recipe, you'll see it here.</p></div>`,t.innerHTML=i,rt("erec")}catch(e){console.error("openNotifications:",e),P("Couldn't load notifications")}}async function AC(n){if(Ee("erec"),!h.comRecs.length)try{h.comRecs=await Ac()}catch{}if(h.comRecs.find(e=>e.id===n)){h.rt="community",document.querySelectorAll(".rtab").forEach(t=>t.classList.remove("active"));const e=f("rtab-community");e&&e.classList.add("active"),setTimeout(()=>rc(n),100)}else try{const e=await $f(n);e?(h.comRecs.push({id:n,...e}),h.rt="community",setTimeout(()=>rc(n),100)):P("Recipe no longer available")}catch{P("Couldn't load recipe")}}function RC(){const n=h.cookLog,e=h.wasteLog;let t=0;for(let O=0;O<60;O++){const F=new Date;F.setDate(F.getDate()-O);const W=F.toISOString().split("T")[0];if(n.find(Y=>Y.date===W))t++;else if(O>0)break}const i=f("ins-streak-num");i&&(i.textContent=t);const s=f("ins-total-cooked");s&&(s.textContent=n.length);const r=f("ins-waste-count");r&&(r.textContent=e.length);const o=f("ins-sub");o&&(o.textContent=n.length?" "+n.length+" meals cooked":"Your kitchen at a glance");const c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],l=f("ins-week");if(l){const O=ki().map(F=>{const W=F.toISOString().split("T")[0],Y=h.mp[W],T=W===Zt();return`<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--b1)${T?";background:var(--acd);margin:0 -4px;padding:7px 4px;border-radius:6px":""}">
        <div style="font-size:.72rem;color:var(--mt);min-width:30px;font-weight:${T?"600":"400"}">${c[F.getDay()]}</div>
        <div style="font-size:.72rem;color:var(--mt);min-width:20px">${F.getDate()}</div>
        <div style="font-size:.84rem;color:${Y?"var(--tx)":"var(--mt)"};font-style:${Y?"normal":"italic"};flex:1">${Y||"—"}</div>
        ${T?"<div style='font-size:.66rem;color:var(--ac);font-weight:600'>TODAY</div>":""}
      </div>`}).join("");l.innerHTML=O}const d=n.slice(0,7).map(O=>O.name),m=f("ins-variety-nudge"),g=f("ins-variety-msg");if(m&&d.length>=3){const O={};d.forEach(w=>{const b=w.toLowerCase();O[b]=(O[b]||0)+1});const F=Object.entries(O).filter(([,w])=>w>=3),W=Object.values(h.mp).filter(Boolean),Y=W.some(w=>/curry|dal|rice|bengali|biryani|hilsa|mustard|lentil/i.test(w)),T=W.some(w=>/kebab|köfte|pide|börek|meze|turkish|pilav|lahmacun/i.test(w));F.length?(m.style.display="block",g.textContent=`You've cooked "${F[0][0]}" ${F[0][1]} times this week. Time to mix it up?`):!Y&&W.length>=3?(m.style.display="block",g.textContent="No Bangladeshi dishes this week — how about a dal, biryani, or fish curry?"):!T&&W.length>=3?(m.style.display="block",g.textContent="No Turkish dishes planned — köfte, mercimek çorbası, or a pilav would be great this week!"):m.style.display="none"}else m&&(m.style.display="none");const v={};n.forEach(O=>{v[O.name]=(v[O.name]||0)+1});const S=Object.entries(v).sort((O,F)=>F[1]-O[1]).slice(0,6),x=S[0]?S[0][1]:1,L=f("ins-cooked");if(L)if(!S.length)L.innerHTML='<div class="es" style="padding:16px"><p>Cook some meals to see stats!</p></div>';else{const O=["🥇","🥈","🥉","4️⃣","5️⃣","6️⃣"];L.innerHTML=S.map(([F,W],Y)=>`<div class="ibar-row"><div style="font-size:.9rem;margin-right:4px">${O[Y]||""}</div><div class="ibar-lbl">${F}</div><div class="ibar-track"><div class="ibar-fill" style="width:${Math.round(W/x*100)}%"></div></div><div class="ibar-val">${W}×</div></div>`).join("")}const R={Bangladeshi:"#e8a44a",Turkish:"#c0392b",Mediterranean:"#27ae60",American:"#3498db",Italian:"#e74c3c",Asian:"#9b59b6",Other:"#95a5a6"},M=f("ins-cuisine");if(M&&n.length){const O=T=>{const w=T.toLowerCase();return/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(w)?"Bangladeshi":/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner|iskender/i.test(w)?"Turkish":/pasta|pizza|risotto|gnocchi|italian/i.test(w)?"Italian":/tacos|burrito|enchilada|mexican/i.test(w)?"Mexican":/sushi|ramen|stir.?fry|fried rice|asian|chinese|thai|japanese/i.test(w)?"Asian":/burger|sandwich|mac|bbq|american/i.test(w)?"American":"Other"},F={};n.slice(0,20).forEach(T=>{const w=O(T.name);F[w]=(F[w]||0)+1});const W=Object.values(F).reduce((T,w)=>T+w,0),Y=Object.entries(F).sort((T,w)=>w[1]-T[1]);M.innerHTML=Y.map(([T,w])=>{const b=Math.round(w/W*100),I=R[T]||"#95a5a6";return`<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span style="font-size:.82rem;font-weight:500">${T}</span><span style="font-size:.74rem;color:var(--mt)">${w} meals · ${b}%</span></div><div style="height:8px;background:var(--b1);border-radius:4px;overflow:hidden"><div style="height:100%;width:${b}%;background:${I};border-radius:4px;transition:width .6s ease"></div></div></div>`}).join("")||'<div class="es" style="padding:16px"><p>Cook more meals to see your cuisine breakdown.</p></div>'}const U=f("ins-waste");U&&(U.innerHTML=e.length?e.slice(0,10).map(O=>`<div class="waste-item"><span style="font-size:.86rem">${O.name}</span><span style="font-size:.74rem;color:var(--rd)">${O.date}</span></div>`).join(""):'<div class="es" style="padding:16px"><p>Nothing wasted yet — great job! 🎉</p></div>')}function PC(){const n=["fridge","freezer","pantry"].map(o=>{const c=h.inv.filter(l=>l.location===o);return c.length?Yf(o).toUpperCase()+": "+c.map(l=>`${l.name} (${l.qty} ${l.unit})`).join(", "):""}).filter(Boolean).join(`
`),e=h.inv.filter(o=>{const c=bt(o.expiry);return c&&(c.c==="expiring"||c.c==="expired")}).map(o=>{const c=bt(o.expiry);return`${o.name} (${c.l})`}).join(", "),t=ki().map(o=>{const c=o.toISOString().split("T")[0];return h.mp[c]?`${o.toLocaleDateString("en-US",{weekday:"short"})}: ${h.mp[c]}`:""}).filter(Boolean).join(", "),i=h.recs.filter(o=>o.favorited||o.rating>=4).map(o=>`${o.name}${o.rating?` (${o.rating}★)`:""}`).join(", "),s=[h.cfg.nopork?"no pork":null,h.cfg.noshellfish?"no shellfish":null,h.cfg.vegetarian?"vegetarian":null,h.cfg.glutenfree?"gluten-free":null,h.cfg.other].filter(Boolean).join(", "),r=h.cookLog.slice(0,7).map(o=>o.name).join(", ");return`You are a kitchen and household assistant for a family in Edison NJ. You ONLY help with kitchen, food, cooking, grocery, and household topics. This includes:
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
HOUSEHOLD: ${h.cfg.name}, Adults: ${h.cfg.adults}, Kids: ${h.cfg.kids}, Restrictions: ${s||"none"}, Cuisines: ${h.cfg.cuisines}, Cook time: ${h.cfg.cookTime}.
CULTURAL BACKGROUND: Bushra is Bangladeshi, Bora is Turkish — authentically lean toward these cuisines (Bengali spices, mustard oil, dal, hilsa-style fish; Turkish kebabs, meze, börek, yogurt sauces, lentil soups). Suggest these when inventory allows.
Be concise. Use what they have. Suggest variety — lean toward Bangladeshi and Turkish — avoid repeating recent meals. Format grocery lists as bullet points starting "- ".

RECIPE FORMAT RULE: When suggesting recipes (any time you provide a recipe with ingredients/steps), wrap EACH recipe in :::RECIPE::: and :::END::: markers with a JSON object containing: title, ingredients (newline-separated list), steps (numbered newline-separated list), cuisine, cookTime, servings.
Example:
:::RECIPE:::
{"title":"Dal Tadka","ingredients":"1 cup red lentils\\n2 tomatoes, chopped\\n1 tsp cumin seeds\\n1 tsp turmeric","steps":"1. Wash and boil lentils until soft\\n2. Heat oil, add cumin seeds\\n3. Add tomatoes, cook until soft\\n4. Combine with lentils and simmer","cuisine":"Bangladeshi","cookTime":"30 min","servings":4}
:::END:::
Always use this format so the app can offer a one-tap save button. You can include normal text before/after recipe blocks.`}function xC(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<li>$1</li>").replace(/^[-•]\s+(.+)$/gm,"<li>$1</li>").replace(/\n/g,"<br>")}async function sg(){const n=f("chi"),e=n.value.trim();if(!e)return;n.value="",rg(n),h.chat.push({role:"user",content:e}),ba("user",e);const t=f("csb");t&&(t.disabled=!0);const i="thinking-"+Date.now(),s=f("chmsgs");s.innerHTML+=`<div class="cb asst thinking" id="${i}">Thinking…</div>`,s.scrollTop=s.scrollHeight;try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:800,system:PC(),messages:h.chat.map(d=>({role:d.role,content:d.content}))})})).json(),c=o.content&&o.content[0]&&o.content[0].text||"Sorry, I couldn't process that.",l=f(i);l&&l.remove(),h.chat.push({role:"assistant",content:c}),ba("assistant",c)}catch{const o=f(i);o&&o.remove(),ba("assistant","Sorry, I couldn't reach Claude. Check your connection and try again.")}t&&(t.disabled=!1)}function LC(n){const e=[];return{cleanText:n.replace(/:::RECIPE:::\s*([\s\S]*?)\s*:::END:::/g,(i,s)=>{try{const r=JSON.parse(s.trim());r.title&&e.push(r)}catch{}return""}).trim(),recipes:e}}function DC(n){const e=JSON.stringify(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;"),t=(n.ingredients||"").split(`
`).slice(0,3).join(", ");return`<div style="background:var(--card);border:1.5px solid var(--ac);border-radius:14px;padding:16px;margin:10px 0">
    <div style="font-family:'Fraunces',serif;font-size:1.1rem;font-weight:300;color:var(--ac);margin-bottom:6px">${(n.title||"").replace(/</g,"&lt;")}</div>
    ${n.cuisine?`<div style="font-size:.72rem;color:var(--mt);margin-bottom:6px">${n.cuisine}${n.cookTime?" · "+n.cookTime:""}${n.servings?" · "+n.servings+" servings":""}</div>`:""}
    ${t?`<div style="font-size:.8rem;color:var(--tx2);line-height:1.5;margin-bottom:10px">${t.replace(/</g,"&lt;")}…</div>`:""}
    <button class="btn bp bsm" onclick="importChatRecipe(this)" data-recipe="${e}">📖 Add to My Recipes</button>
  </div>`}async function $C(n){try{const e=JSON.parse(n.dataset.recipe),t="rec-"+Date.now(),i=[e.ingredients||"",e.steps?`

Steps:
`+e.steps:""].join("").trim();await it({id:t,name:e.title||"Untitled Recipe",rating:0,favorited:!1,notes:"",description:i,source:"Claude Chat",sourceUrl:null,tags:[],cuisine:e.cuisine||"",cookTime:e.cookTime||"",servings:e.servings||"",cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:!1}),n.textContent="✓ Saved!",n.disabled=!0,n.style.background="var(--gn)",P("Recipe saved! 📖")}catch{P("Couldn't save recipe")}}function ba(n,e){const t=f("chmsgs");if(t){if(n==="assistant"){const{cleanText:i,recipes:s}=LC(e);if(i){const r=document.createElement("div");r.className="cb asst",r.innerHTML=xC(i),t.appendChild(r)}s.forEach(r=>{const o=document.createElement("div");o.style.maxWidth="88%",o.style.alignSelf="flex-start",o.innerHTML=DC(r),t.appendChild(o)})}else{const i=document.createElement("div");i.className="cb user",i.innerHTML=e,t.appendChild(i)}t.scrollTop=t.scrollHeight}}function NC(n){const e=f("chi");e&&(e.value=n.textContent),sg()}function MC(){h.chat=[];const n=f("chmsgs");n&&(n.innerHTML=`<div class="cb asst">Hey! 👋 I'm your kitchen assistant — I can help with recipes, meal planning, grocery tips, and cooking questions. What's on your mind?</div>`)}function rg(n){n.style.height="auto",n.style.height=Math.min(n.scrollHeight,120)+"px"}let Is=!1,xr=!1,Lr=null;function Tl(){if(Is)return;const n=f("scanner-video");if(!n)return;const e=f("scan-status");e&&(e.textContent="Starting camera…",e.style.display="block"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{OC(n,e)})})}function OC(n,e){Quagga.init({inputStream:{name:"Live",type:"LiveStream",target:n,constraints:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}},locator:{patchSize:"medium",halfSample:!0},decoder:{readers:["ean_reader","ean_8_reader","upc_reader","upc_e_reader","code_128_reader","code_39_reader"]},locate:!0,frequency:10},function(t){if(t){console.error("Scanner init error:",t);const i=f("scerr");i&&(i.textContent="⚠️ Could not access camera. Try entering the barcode manually.",i.style.display="block"),e&&(e.style.display="none");return}VC(n),Quagga.start(),Is=!0,e&&(e.textContent="Scanning…"),setTimeout(()=>UC(n),2e3)}),Quagga.onDetected(og)}function VC(n){n.querySelectorAll("video").forEach(e=>{e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,e.play().catch(()=>{})})}async function UC(n){if(!Is)return;const e=n.querySelector("video");if(!(!e||e.videoWidth>0)){console.warn("Camera feed appears black — retrying with manual getUserMedia");try{const t=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}});Lr=t,e.srcObject&&e.srcObject.getTracks().forEach(i=>i.stop()),e.srcObject=t,e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,await e.play()}catch(t){console.error("Manual camera retry failed:",t)}}}function Il(){if(Is){try{Quagga.stop()}catch{}Quagga.offDetected(og),Lr&&(Lr.getTracks().forEach(n=>n.stop()),Lr=null),Is=!1,xr=!1}}async function og(n){var s,r;if(xr)return;const e=n&&n.codeResult&&n.codeResult.code;if(!e)return;const t=((r=(s=n.codeResult.decodedCodes)==null?void 0:s.filter(o=>o.error!==void 0))==null?void 0:r.map(o=>o.error))||[];if(!((t.length?t.reduce((o,c)=>o+c,0)/t.length:1)>.25)){xr=!0,FC(),Il(),f("scanbody").style.display="none",f("scspin").style.display="block",f("scst").textContent="Found "+e+" — looking up…";try{const o=await ag(e);h.cp=o,f("aqty").value=1,f("aexp").value="",El("fridge",f("rl-fridge")),cg(o)}catch{const o=f("scerr");o.textContent="⚠️ Lookup failed. Check your connection or enter the barcode manually.",o.style.display="block"}f("scanbody").style.display="block",f("scspin").style.display="none",xr=!1}}function FC(){const n=f("scan-success");n&&(n.style.display="flex",n.style.animation="none",n.offsetHeight,n.style.animation="",setTimeout(()=>{n.style.display="none"},500))}function BC(){Ee("result"),rt("scan"),f("scerr").style.display="none",Tl()}function jC(){h.scanDestList=!0,rt("scan");const n=f("scanovttl");n&&(n.textContent="Scan → Shopping List");const e=f("scan-dest-hint");e&&(e.textContent="Running low? Scan to add to your shopping list."),f("scerr").style.display="none",Tl()}function HC(){h.scanDestList=!1,rt("scan");const n=f("scanovttl");n&&(n.textContent="Scan Barcode");const e=f("scan-dest-hint");e&&(e.textContent="Scan a barcode to add to your pantry or shopping list."),f("scerr").style.display="none",Tl()}function zC(){const n=f("scanNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=f("scanNoteInp");t&&t.focus()}}function qC(){if(!h.cp)return;const n=h.cp.notFound?"Barcode "+h.cp.barcode:h.cp.name,e=f("scanNoteInp"),t=e?e.value.trim():"",i=parseInt(f("aqty").value)||1,s={id:Date.now().toString(),name:n,qty:i,checked:!1,src:"scan"};h.cp.brand&&(s.brand=h.cp.brand),h.cp.image&&(s.image=h.cp.image),t&&(s.note=t),ye(s),P("Added to list: "+n),Ee("result"),Ee("scan"),h.scanDestList=!1,e&&(e.value="");const r=f("scanNoteWrap");r&&(r.style.display="none"),window.showScreen("shopping")}function WC(){const n=f("mentry");n.style.display=n.style.display==="none"?"block":"none"}async function GC(){const n=f("meinp").value.trim();if(!n)return;Il(),f("scanbody").style.display="none",f("scspin").style.display="block",f("scst").textContent="Looking up…";const e=await ag(n);h.cp=e,f("aqty").value=1,f("aexp").value="",El("fridge",f("rl-fridge")),f("meinp").value="",cg(e),f("scanbody").style.display="block",f("scspin").style.display="none"}async function ag(n){try{const e=await fetch("/api/barcode?code="+encodeURIComponent(n));if(e.ok){const t=await e.json();if(t.found&&t.product)return{...t.product,notFound:!1}}}catch{}return{barcode:n,name:"",brand:"",quantity:"",category:"General",image:null,source:null,description:"",notFound:!0}}function KC(n,e){switch(n){case"Open Food Facts":return`https://world.openfoodfacts.org/product/${e}`;case"Open Beauty Facts":return`https://world.openbeautyfacts.org/product/${e}`;case"Open Pet Food Facts":return`https://world.openpetfoodfacts.org/product/${e}`;case"UPC Item DB":return`https://www.upcitemdb.com/upc/${e}`;case"Edamam":return"https://www.edamam.com/food-database/en/";default:return"#"}}function cg(n){var s;Ee("scan"),f("resttl").textContent=n.notFound?"Not Found":"Product Found ✓",f("aunit").value=n.quantity||"unit";let e="";if(n.notFound)e=`<div class="nfb">⚠️ Barcode <code>${n.barcode}</code> not found in any database. Enter name:<input class="fi" id="mnm" placeholder="Product name (required)" oninput="valAdd()" style="margin-top:10px"/></div>`;else{const r=n.image?`<img src="${n.image}" class="pimg" onerror="this.style.display='none'"/>`:'<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">🛒</div>',o=n.description?`<div class="pdsc">${n.description}</div>`:"",c=n.source?`<a href="${KC(n.source,n.barcode)}" target="_blank" rel="noopener" class="srcb" style="text-decoration:none">${n.source} ↗</a>`:"";e=`<div class="pcard"><div class="phdr">${r}<div style="flex:1"><div class="pnm">${n.name}</div>${n.brand?`<div class="pbr">${n.brand}</div>`:""}<div class="pbc">${n.barcode}</div><span class="bdg">${n.category}</span>${c}</div></div>${o}</div>`}f("resbody").innerHTML=e;const t=(s=f("ov-result"))==null?void 0:s.querySelector(".ovbody");if(t){const r=t.querySelector(".frow"),o=t.querySelectorAll(".frow")[1],c=t.querySelectorAll(".qrow")[1];r&&(r.style.display=h.scanDestList?"none":""),o&&(o.style.display=h.scanDestList?"none":""),c&&(c.style.display=h.scanDestList?"none":"")}const i=f("scan-dest-btns");i&&(h.scanDestList?i.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2;background:var(--gn);border-color:var(--gn)" id="addbtn" onclick="addScannedToList()">🛒 Add to Shopping List</button>
      </div>`:i.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2" id="addbtn" onclick="addToInv()">📦 Add to Pantry</button>
      </div>
      <button class="btn bs bf" style="margin-top:8px;border-color:var(--gn);color:var(--gn)" onclick="addScannedToList()">🛒 Add to Shopping List instead</button>`),n.notFound&&setTimeout(()=>{const r=f("addbtn");r&&(r.disabled=!0)},0),rt("result")}function El(n,e){h.selR=n,document.querySelectorAll("#ov-result .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function QC(){const n=f("mnm");f("addbtn").disabled=!(n&&n.value.trim())}async function JC(){if(!h.cp)return;const n=f("mnm"),e=h.cp.notFound?n&&n.value.trim()||"":h.cp.name;if(!e)return;const t=f("aunit").value.trim()||"unit",i=Math.max(1,parseInt(f("aqty").value)||1),s=f("aexp").value||null,r="item-"+h.cp.barcode.replace(/\W/g,"-"),o=h.inv.find(c=>c.id===r);await se({id:r,barcode:h.cp.barcode,name:e,brand:h.cp.brand||"",unit:t,qty:o?o.qty+i:i,location:h.selR,category:h.cp.category||"General",image:h.cp.image||null,source:h.cp.source||null,expiry:s,addedAt:o?o.addedAt:new Date().toLocaleDateString()}),P(o?`+${i} added to ${e}`:`${e} added!`),h.cp=null,Ee("result")}function YC(n){const e=f("aqty");e.value=Math.max(1,(parseInt(e.value)||1)+n)}let ke=null,pr=0,mr=0,q=null,qt=null,ut=0,ct=!1,Xn=!1;const Wt=80,gr=.1,Gt=.7,yr=8,Pn="cubic-bezier(0.25, 1.5, 0.5, 1)",Ae="cubic-bezier(0.4, 0, 0.2, 1)";function XC(){document.addEventListener("touchstart",e=>{const t=e.target.closest(".swipe-inner");if(!t)return;const i=t.closest(".swipe-wrap");i&&(h.selectMode||(q&&q!==i&&(At(q),q=null),ke=t,pr=e.touches[0].clientX,mr=e.touches[0].clientY,qt=null,ct=!1,ut=i.offsetWidth,t.classList.add("swiping")))},{passive:!0}),document.addEventListener("touchmove",e=>{if(!ke)return;const t=e.touches[0].clientX,i=e.touches[0].clientY,s=t-pr,r=i-mr;if(!qt){if(Math.abs(s)<yr&&Math.abs(r)<yr)return;qt=Math.abs(s)>Math.abs(r)?"horizontal":"vertical"}if(qt==="vertical"){ke.classList.remove("swiping"),ke=null;return}e.preventDefault();const o=ke.closest(".swipe-wrap"),c=o==null?void 0:o.dataset.list,l=s>0&&c==="inv",d=l?s:s>=0?0:s;if(ke.style.transform=`translateX(${d}px)`,d<0){const g=o==null?void 0:o.querySelector(".swipe-del");if(g){const S=Math.min(100,Math.abs(d)/Wt*100);g.style.clipPath=`inset(0 0 0 ${100-S}%)`}const v=o==null?void 0:o.querySelector(".swipe-add");v&&(v.style.clipPath="inset(0 100% 0 0)")}else if(d>0&&l){const g=o==null?void 0:o.querySelector(".swipe-add");if(g){const S=Math.min(100,d/Wt*100);g.style.clipPath=`inset(0 ${100-S}% 0 0)`}const v=o==null?void 0:o.querySelector(".swipe-del");v&&(v.style.clipPath="inset(0 0 0 100%)")}const m=Math.abs(d)/ut;m>=Gt&&!ct?(ct=!0,navigator.vibrate&&navigator.vibrate(10),o==null||o.classList.add("swipe-threshold")):m<Gt&&ct&&(ct=!1,o==null||o.classList.remove("swipe-threshold"))},{passive:!1}),document.addEventListener("touchend",()=>{if(!ke)return;const e=ke,t=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/ut,r=t==null?void 0:t.dataset.list,o=i>0&&r==="inv";if(o&&s>=Gt)yh(t,e);else if(o&&s>=gr){e.style.transition=`transform 0.4s ${Pn}`,e.style.transform=`translateX(${Wt}px)`;const c=t==null?void 0:t.querySelector(".swipe-add");c&&(c.style.transition=`clip-path 0.3s ${Ae}`,c.style.clipPath="inset(0 0 0 0)"),t==null||t.classList.add("open"),q&&q!==t&&At(q),q=t,setTimeout(()=>{e.style.transition=""},400)}else if(!o&&s>=Gt)gh(t,e);else if(!o&&i<0&&s>=gr){e.style.transition=`transform 0.4s ${Pn}`,e.style.transform=`translateX(-${Wt}px)`;const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${Ae}`,c.style.clipPath="inset(0 0 0 0%)"),t==null||t.classList.add("open"),t==null||t.classList.add("swipe-threshold"),q&&q!==t&&At(q),q=t,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${Pn}`,e.style.transform="translateX(0)";const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${Ae}`,c.style.clipPath="inset(0 0 0 100%)");const l=t==null?void 0:t.querySelector(".swipe-add");l&&(l.style.transition=`clip-path 0.3s ${Ae}`,l.style.clipPath="inset(0 100% 0 0)"),t==null||t.classList.remove("open","swipe-threshold"),q===t&&(q=null),setTimeout(()=>{e.style.transition="",c&&(c.style.transition=""),l&&(l.style.transition="")},350)}ke=null}),document.addEventListener("mousedown",e=>{if(e.button!==0)return;const t=e.target.closest(".swipe-inner");if(!t)return;const i=t.closest(".swipe-wrap");i&&(h.selectMode||(q&&q!==i&&(At(q),q=null),Xn=!0,ke=t,pr=e.clientX,mr=e.clientY,qt=null,ct=!1,ut=i.offsetWidth,t.classList.add("swiping")))}),document.addEventListener("mousemove",e=>{if(!Xn||!ke)return;const t=e.clientX-pr,i=e.clientY-mr;if(!qt){if(Math.abs(t)<yr&&Math.abs(i)<yr)return;qt=Math.abs(t)>Math.abs(i)?"horizontal":"vertical"}if(qt==="vertical"){ke.classList.remove("swiping"),ke=null,Xn=!1;return}e.preventDefault();const s=ke.closest(".swipe-wrap"),r=s==null?void 0:s.dataset.list,o=t>0&&r==="inv",c=o?t:t>=0?0:t;if(ke.style.transform=`translateX(${c}px)`,c<0){const d=s==null?void 0:s.querySelector(".swipe-del");if(d){const g=Math.min(100,Math.abs(c)/Wt*100);d.style.clipPath=`inset(0 0 0 ${100-g}%)`}const m=s==null?void 0:s.querySelector(".swipe-add");m&&(m.style.clipPath="inset(0 100% 0 0)")}else if(c>0&&o){const d=s==null?void 0:s.querySelector(".swipe-add");if(d){const g=Math.min(100,c/Wt*100);d.style.clipPath=`inset(0 ${100-g}% 0 0)`}const m=s==null?void 0:s.querySelector(".swipe-del");m&&(m.style.clipPath="inset(0 0 0 100%)")}const l=Math.abs(c)/ut;l>=Gt&&!ct?(ct=!0,navigator.vibrate&&navigator.vibrate(10),s==null||s.classList.add("swipe-threshold")):l<Gt&&ct&&(ct=!1,s==null||s.classList.remove("swipe-threshold"))});function n(){if(!Xn||!ke){Xn=!1;return}Xn=!1;const e=ke,t=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/ut,r=t==null?void 0:t.dataset.list,o=i>0&&r==="inv";if(o&&s>=Gt)yh(t,e);else if(o&&s>=gr){e.style.transition=`transform 0.4s ${Pn}`,e.style.transform=`translateX(${Wt}px)`;const c=t==null?void 0:t.querySelector(".swipe-add");c&&(c.style.transition=`clip-path 0.3s ${Ae}`,c.style.clipPath="inset(0 0 0 0)"),t==null||t.classList.add("open"),q&&q!==t&&At(q),q=t,setTimeout(()=>{e.style.transition=""},400)}else if(!o&&s>=Gt)gh(t,e);else if(!o&&i<0&&s>=gr){e.style.transition=`transform 0.4s ${Pn}`,e.style.transform=`translateX(-${Wt}px)`;const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${Ae}`,c.style.clipPath="inset(0 0 0 0%)"),t==null||t.classList.add("open"),t==null||t.classList.add("swipe-threshold"),q&&q!==t&&At(q),q=t,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${Pn}`,e.style.transform="translateX(0)";const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${Ae}`,c.style.clipPath="inset(0 0 0 100%)");const l=t==null?void 0:t.querySelector(".swipe-add");l&&(l.style.transition=`clip-path 0.3s ${Ae}`,l.style.clipPath="inset(0 100% 0 0)"),t==null||t.classList.remove("open","swipe-threshold"),q===t&&(q=null),setTimeout(()=>{e.style.transition="",c&&(c.style.transition=""),l&&(l.style.transition="")},350)}ke=null}document.addEventListener("mouseup",n),document.addEventListener("mouseleave",n),document.addEventListener("mousedown",e=>{if(!q||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const t=e.target.closest(".swipe-inner");t&&t.closest(".swipe-wrap")===q||(At(q),q=null)}),document.addEventListener("click",e=>{document.querySelectorAll(".sh-note-edit.open").forEach(t=>{if(t.contains(e.target))return;const i=t.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-note-btn");if(s&&s.contains(e.target))return;const r=t.querySelector("textarea");r&&r.blur(),t.classList.remove("open")}),document.querySelectorAll(".sh-qty-edit.open").forEach(t=>{if(t.contains(e.target))return;const i=t.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-qty");if(s&&s.contains(e.target))return;const r=t.querySelector("input");r&&r.blur(),t.classList.remove("open")})},!0),document.addEventListener("touchstart",e=>{if(!q||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const t=e.target.closest(".swipe-inner");t&&t.closest(".swipe-wrap")===q||(At(q),q=null)},{passive:!0})}function At(n){const e=n==null?void 0:n.querySelector(".swipe-inner"),t=n==null?void 0:n.querySelector(".swipe-del"),i=n==null?void 0:n.querySelector(".swipe-add");e&&(e.style.transition=`transform 0.35s ${Pn}`,e.style.transform="translateX(0)",setTimeout(()=>{e.style.transition=""},350)),t&&(t.style.transition=`clip-path 0.3s ${Ae}`,t.style.clipPath="inset(0 0 0 100%)",setTimeout(()=>{t.style.transition=""},300)),i&&(i.style.transition=`clip-path 0.3s ${Ae}`,i.style.clipPath="inset(0 100% 0 0)",setTimeout(()=>{i.style.transition=""},300)),n==null||n.classList.remove("open","swipe-threshold")}async function gh(n,e){const t=n==null?void 0:n.dataset.id,i=n==null?void 0:n.dataset.list;if(!t||!i)return;e.style.transition=`transform 0.3s ${Ae}`,e.style.transform=`translateX(-${ut+100}px)`;const s=n==null?void 0:n.querySelector(".swipe-del");s&&(s.style.transition=`transform 0.3s ${Ae}`,s.style.transform=`translateX(-${ut+100}px)`),await new Promise(r=>setTimeout(r,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",q===n&&(q=null),await new Promise(r=>setTimeout(r,250)),i==="shop"?await Ei(t):(await Ls(t),P("Item removed"))}async function yh(n,e){const t=n==null?void 0:n.dataset.id;if(!t)return;e.style.transition=`transform 0.3s ${Ae}`,e.style.transform=`translateX(${ut+100}px)`;const i=n==null?void 0:n.querySelector(".swipe-add");i&&(i.style.transition=`transform 0.3s ${Ae}`,i.style.transform=`translateX(${ut+100}px)`),await new Promise(s=>setTimeout(s,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",q===n&&(q=null),await new Promise(s=>setTimeout(s,250)),await lg(t)}async function ZC(n,e){if(e!=="inv")return;const t=f("sw-"+n);if(!t)return;const i=t.querySelector(".swipe-inner"),s=t.offsetWidth;i&&(i.style.transition=`transform 0.3s ${Ae}`,i.style.transform=`translateX(${s+100}px)`);const r=t.querySelector(".swipe-add");r&&(r.style.transition=`transform 0.3s ${Ae}`,r.style.transform=`translateX(${s+100}px)`),await new Promise(o=>setTimeout(o,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",q===t&&(q=null),await new Promise(o=>setTimeout(o,250)),await lg(n)}async function lg(n){const e=h.inv.find(i=>i.id===n);if(!e)return;if(h.shop.find(i=>i.name.toLowerCase()===e.name.toLowerCase()&&!i.checked)){P(`${e.name} is already on your list`);return}await ye({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,brand:e.brand||"",image:e.image||null,src:"supplies"}),P(`${e.name} added to shopping list 🛒`)}async function eA(n,e){const t=f("sw-"+n);if(!t)return;const i=t.querySelector(".swipe-inner"),s=t.offsetWidth;i&&(i.style.transition=`transform 0.3s ${Ae}`,i.style.transform=`translateX(-${s+100}px)`);const r=t.querySelector(".swipe-del");r&&(r.style.transition=`transform 0.3s ${Ae}`,r.style.transform=`translateX(-${s+100}px)`),await new Promise(o=>setTimeout(o,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",q===t&&(q=null),await new Promise(o=>setTimeout(o,250)),e==="shop"?await Ei(n):(await Ls(n),P("Item removed"))}function tA(n,e){const t=f("sw-"+n);if(t){const i=t.querySelector(".swipe-inner"),s=parseFloat(((i==null?void 0:i.style.transform)||"").replace("translateX(",""))||0;if(Math.abs(s)>10){At(t),q=null;return}}if(h.selectMode){h.selectedIds.has(n)?(h.selectedIds.delete(n),t==null||t.classList.remove("selected")):(h.selectedIds.add(n),t==null||t.classList.add("selected")),Co();return}e==="shop"?window.openItemDetail(n):window.openInvItemDetail(n)}function nA(){if(h.selectMode==="shop"){bi();return}h.selectMode&&bi(),h.selectMode="shop",h.selectedIds.clear(),document.querySelectorAll("#shlist .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=f("sh-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),Co()}function iA(){if(h.selectMode==="inv"){bi();return}h.selectMode&&bi(),h.selectMode="inv",h.selectedIds.clear(),document.querySelectorAll("#ibody .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=f("inv-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),Co()}function bi(){h.selectMode=null,h.selectedIds.clear(),document.querySelectorAll(".swipe-wrap.selecting").forEach(t=>t.classList.remove("selecting","selected"));const n=f("sh-selbtn");n&&(n.classList.remove("active"),n.textContent="Select");const e=f("inv-selbtn");e&&(e.classList.remove("active"),e.textContent="Select"),Co()}async function sA(){if(!h.selectedIds.size)return;const n=[...h.selectedIds],e=h.selectMode;bi(),e==="shop"?await Promise.all(n.map(t=>Ei(t))):await Promise.all(n.map(t=>Ls(t))),P(`Removed ${n.length} item${n.length!==1?"s":""} 🗑`)}function Co(){const n=f("multi-bar");if(!n)return;const e=h.selectedIds.size,t=f("multi-count");t&&(t.textContent=e),h.selectMode?n.classList.add("visible"):n.classList.remove("visible")}const rA=["Chicken","Beef","Fish","Vegetarian","Vegan","Quick","Kids","Healthy","Batch Cook","Date Night"];function ug(n){return"chip-"+n.split(" ").join("-")}function dg(){const n=f("recChips");n&&(n.innerHTML=rA.map(e=>`<button onclick="toggleChip('${e}')" id="${ug(e)}" style="padding:5px 10px;border-radius:20px;border:1px solid var(--bd);background:var(--s2);color:var(--tx2);font-size:.78rem;cursor:pointer;transition:all .15s">${e}</button>`).join(""))}function oA(n){const e=f(ug(n));window._activeChips.has(n)?(window._activeChips.delete(n),e&&(e.style.background="var(--s2)",e.style.color="var(--tx2)",e.style.borderColor="var(--bd)")):(window._activeChips.add(n),e&&(e.style.background="var(--ac)",e.style.color="#000",e.style.borderColor="var(--ac)")),hg()}function hg(){const n=f("recPicker"),e=f("recFilter")?f("recFilter").value.trim().toLowerCase():"",t=[...window._activeChips].map(r=>r.toLowerCase()),s=[...h.recs].sort((r,o)=>(o.cookCount||0)-(r.cookCount||0)).filter(r=>{const o=(r.name+" "+(r.description||"")+" "+(r.tags||[]).join(" ")).toLowerCase(),c=e?e.split(/\s+/).every(d=>o.includes(d)):!0,l=t.every(d=>o.includes(d));return c&&l});n.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(r=>`<option value="${r.id}">${r.name}</option>`).join(""),window._pickedRec=null,f("mealMinp").value=""}function aA(n,e){h.md=n,f("mealMttl").textContent="Meal for "+e,f("mealMinp").value=h.mp[n]||"",window._pickedRec=null,window._activeChips=new Set;const t=f("recFilter");t&&(t.value=""),dg();const i=f("recPicker");if(h.recs&&h.recs.length){const s=[...h.recs].sort((c,l)=>(l.cookCount||0)-(c.cookCount||0));i.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(c=>`<option value="${c.id}">${c.name}</option>`).join("");const r=h.mp[n]||"",o=s.find(c=>c.name===r);i.value=o?o.id:"",f("recPickerWrap").style.display="block"}else f("recPickerWrap").style.display="none";f("mealM").classList.add("active"),setTimeout(()=>f("mealMinp").focus(),100)}function cA(n){if(!n){window._pickedRec=null,f("mealMinp").value="";return}const e=h.recs.find(t=>t.id===n);e&&(window._pickedRec=e,f("mealMinp").value=e.name)}function Sl(){f("mealM").classList.remove("active")}function lA(){f("schedM").classList.remove("active")}async function uA(){const n=f("mealMinp").value.trim();if(await un(h.md,n||null),window._pickedRec&&window._pickedRec.description){const e=window._pickedRec.description,t=h.inv.map(o=>o.name.toLowerCase()),i=h.shop.map(o=>o.name.toLowerCase()),s=e.split(/[\n,]/).map(o=>o.replace(/^[\d\/\s]*(cup|tbsp|tsp|oz|lb|g|kg|ml|l|clove|slice|piece|bunch|head|can|package|pkg)s?\.?\s*/gi,"").replace(/^[\d]+\s*/,"").trim()).filter(o=>o.length>1&&o.length<60);let r=0;for(const o of s){if(/\b(add|mix|heat|cook|bake|stir|boil|fry|slice|chop|dice|combine|place|pour|season|serve|preheat|bring|remove|let|set|transfer)\b/i.test(o))continue;const c=o.replace(/^[-•*]\s*/,"").trim();if(!c||c.length<2)continue;const l=c.toLowerCase();t.some(d=>d.includes(l)||l.includes(d))||i.some(d=>d===l)||(await ye({id:Date.now().toString()+Math.random().toString(36).slice(2),name:c,qty:1,checked:!1,src:"recipe"}),r++)}r>0&&P(`Added ${r} ingredient${r!==1?"s":""} to shopping list 🛒`)}window._pickedRec=null,Sl(),Kn(),Vs(),xi()}async function dA(){await un(h.md,null),Sl(),Kn(),Vs(),xi()}function hA(n){const e=h.mp[n];e&&(h.cn=e,h.nr=0,f("cookedNm").textContent=e,f("cnotes").value="",us("cstars",0),f("cookedM").classList.add("active"))}async function fA(){await Sc(h.cn,Zt()),await un(Zt(),null),f("cookedM").classList.remove("active"),Kn(),xi(),P("Meal logged!")}async function pA(){var i;const n=f("cnotes").value.trim(),e=(i=f("tog-leftover"))==null?void 0:i.classList.contains("on");await Sc(h.cn,Zt());const t=h.recs.find(s=>s.name.toLowerCase()===h.cn.toLowerCase());t?await it({...t,cookCount:(t.cookCount||0)+1,lastCooked:Zt()}):await it({id:"rec-"+Date.now(),name:h.cn,rating:h.nr,favorited:!1,notes:n,description:"",source:"Meal Plan",tags:[],cookCount:1,savedAt:new Date().toLocaleDateString(),lastCooked:Zt()}),e&&await un(ob(),h.cn+" (leftovers)"),await un(Zt(),null),f("cookedM").classList.remove("active"),Kn(),xi(),P(e?"Saved! Leftovers planned for tomorrow 🥡":"Saved to recipes! ⭐")}function mA(n){f("schedNm").textContent=n;const e=["S","M","T","W","T","F","S"],t=new Date;t.setHours(0,0,0,0),f("schedWk").innerHTML=ki().map((i,s)=>{const r=i.toISOString().split("T")[0],o=i.getTime()===t.getTime(),c=h.mp[r];return`<div class="wd${o?" today":""}${c?" hm":""}" onclick="schedSet('${r}','${n}')"><div class="wdn">${e[s]}</div><div class="wdd">${i.getDate()}</div>${c?`<div class="wdm">${c.substring(0,8)}…</div>`:""}</div>`}).join(""),f("schedM").classList.add("active")}async function gA(n,e){await un(n,e),f("schedM").classList.remove("active"),Kn(),xi(),P("Scheduled! 📅")}function yA(){const n=s=>f(s),e=(s,r)=>{const o=n(s);o&&(o.value=r||"")};e("setName",h.cfg.name),e("setAdults",h.cfg.adults),e("setKids",h.cfg.kids),e("setOther",h.cfg.other),e("setCuisines",h.cfg.cuisines),e("setCookTime",h.cfg.cookTime),e("setZipcode",h.cfg.zipcode);const t=(s,r)=>{const o=n(s);o&&o.classList.toggle("on",!!r)};t("tg-nopork",h.cfg.nopork),t("tg-noshellfish",h.cfg.noshellfish),t("tg-vegetarian",h.cfg.vegetarian),t("tg-glutenfree",h.cfg.glutenfree),t("tg-notif",h.cfg.notif);const i=f("notifTimeRow");i&&(i.style.display=h.cfg.notif?"block":"none"),e("setNotifTime",h.cfg.notifTime||"8"),e("setNotifDays",String(h.cfg.notifDays||3)),e("setUsername",h.username),Cl(),pg()}async function vA(){h.cfg={...h.cfg,name:f("setName").value.trim(),adults:f("setAdults").value.trim(),kids:f("setKids").value.trim(),nopork:f("tg-nopork").classList.contains("on"),noshellfish:f("tg-noshellfish").classList.contains("on"),vegetarian:f("tg-vegetarian").classList.contains("on"),glutenfree:f("tg-glutenfree").classList.contains("on"),other:f("setOther").value.trim(),cuisines:f("setCuisines").value.trim(),cookTime:f("setCookTime").value,zipcode:f("setZipcode")?f("setZipcode").value.trim():"",notif:f("tg-notif").classList.contains("on"),notifTime:f("setNotifTime")?f("setNotifTime").value:"8",notifDays:parseInt(f("setNotifDays")?f("setNotifDays").value:"3")},await xs(),h.cfg.notif&&fg(),P("Settings saved!"),Ee("settings"),el()}async function wA(){var e,t;const n=((t=(e=f("setZipcode"))==null?void 0:e.value)==null?void 0:t.trim())||"";h.cfg={...h.cfg,zipcode:n},await xs(),P("Saved!")}async function _A(n){if(!n.classList.contains("on")){if(!("Notification"in window)){P("Notifications not supported on this browser");return}if(Notification.permission==="denied"){P("Notifications blocked — enable in browser settings");return}if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){P("Notifications permission denied");return}}n.classList.toggle("on");const t=f("notifTimeRow");t&&(t.style.display=n.classList.contains("on")?"block":"none")}function bA(){if(Notification.permission!=="granted"){P("Enable notifications first");return}const n=h.inv.filter(t=>{const i=bt(t.expiry);return i&&(i.c==="expiring"||i.c==="expired")});if(!n.length){new Notification("Kitchen 🧺",{body:"No items expiring soon — you're all good!"});return}const e=n.slice(0,3).map(t=>t.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${e}${n.length>3?" + "+(n.length-3)+" more":""} need attention`})}function fg(){if(!h.cfg.notif||Notification.permission!=="granted")return;const n=parseInt(localStorage.getItem("ks-lastnotif")||"0"),e=Date.now();if(e-n<864e5)return;localStorage.setItem("ks-lastnotif",e.toString());const t=h.cfg.notifDays||3,i=h.inv.filter(r=>{if(!bt(r.expiry))return!1;const c=new Date(r.expiry+"T00:00:00"),l=new Date;return l.setHours(0,0,0,0),Math.round((c-l)/864e5)<=t});if(!i.length)return;const s=i.slice(0,3).map(r=>r.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${s}${i.length>3?" + "+(i.length-3)+" more":""} expiring in ${t} days or less`})}function kl(){return xe("ks-hhs")||[h.hid]}async function pg(){const n=re();if(n)try{const e=await ie(`households/${h.hid}`);if(!e)return;const t=e.ownerUid===n.uid,i=f("hhInviteCode");if(i&&(i.textContent=e.inviteCode||"—"),e.inviteCode&&t)try{await K(`household_codes/${e.inviteCode}`,{householdId:h.hid})}catch{}const s=f("regenCodeBtn");s&&(s.style.display=t?"":"none");const r=f("hhMembers");r&&e.members&&(r.innerHTML=e.members.map(o=>{const c=o.uid===n.uid,l=o.role==="owner"?"Owner":"Member",d=t&&!c?`<button onclick="event.stopPropagation();removeMemberFromHH('${o.uid}')" style="background:none;border:none;color:var(--rd);cursor:pointer;font-size:.78rem;padding:4px 8px">Remove</button>`:"";return`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px">
          <div>
            <div style="font-size:.86rem;font-weight:500;color:var(--tx)">${o.name}${c?" (you)":""}</div>
            <div style="font-size:.7rem;color:var(--mt);margin-top:2px">${l}</div>
          </div>
          ${d}
        </div>`}).join(""))}catch(e){console.error("renderHouseholdInfo error:",e)}}async function TA(){var e;const n=(e=f("hhInviteCode"))==null?void 0:e.textContent;if(!(!n||n==="—"))try{await navigator.clipboard.writeText(n),P("Invite code copied!")}catch{P("Couldn't copy — try manually")}}async function IA(){var t;const n=(t=f("hhInviteCode"))==null?void 0:t.textContent;if(!n||n==="—")return;const e=`Join my kitchen on Kitchen app! Use invite code: ${n} at https://pantry-app-zeta-six.vercel.app`;if(navigator.share)try{await navigator.share({text:e})}catch{}else try{await navigator.clipboard.writeText(e),P("Share text copied to clipboard!")}catch{P("Couldn't share — try manually")}}async function EA(){if(confirm("Regenerate invite code? The old code will stop working."))try{const n=await Af(h.hid);if(n){const e=f("hhInviteCode");e&&(e.textContent=n),P("New invite code generated!")}}catch(n){console.error("regenInviteCode error:",n),P("Failed to regenerate code")}}async function SA(n){if(confirm("Remove this member from the household?"))try{await Rf(h.hid,n),P("Member removed"),pg()}catch(e){console.error("removeMemberFromHH error:",e),P("Failed to remove member")}}async function kA(){var i,s,r;const n=(r=(s=(i=f("newHHCode"))==null?void 0:i.value)==null?void 0:s.trim())==null?void 0:r.toUpperCase();if(!n)return;const e=re();if(!e){P("Sign in first");return}const t=f("newHHCode");t.disabled=!0;try{const o=await Ec(n,e);if(!o){P("Invalid invite code. Check and try again."),t.disabled=!1;return}const c=kl();c.includes(o)||c.push(o),Ze("ks-hhs",c),f("newHHCode").value="",Cl(),P("Household joined!")}catch(o){console.error("addHousehold error:",o),P("Failed to join household")}t.disabled=!1}function CA(n){n!==h.hid&&(localStorage.setItem("ks-h",n),location.reload())}async function AA(n){if(n===h.hid){P("Can't remove active household");return}const e=re();if(e)try{const i=await ie(`users/${e.uid}`);if(i){const r=(i.householdIds||[]).filter(o=>o!==n);await K(`users/${e.uid}`,{...i,householdIds:r,id:void 0})}const s=await ie(`households/${n}`);if(s){const r=(s.members||[]).filter(c=>c.uid!==e.uid),o=(s.memberUids||[]).filter(c=>c!==e.uid);await K(`households/${n}`,{...s,members:r,memberUids:o,id:void 0})}}catch(i){console.error("removeHousehold error:",i)}const t=kl().filter(i=>i!==n);Ze("ks-hhs",t),Cl()}async function Cl(){const n=kl().filter(i=>i!==h.hid),e=f("hhList");if(!e)return;if(!n.length){e.innerHTML='<div style="font-size:.82rem;color:var(--mt);padding:10px 0">No other households yet.</div>';return}const t=[];for(const i of n){let s=i;try{const r=await ie(`households/${i}`);r!=null&&r.name&&(s=r.name)}catch{}t.push({id:i,name:s})}e.innerHTML=t.map(({id:i,name:s})=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px;cursor:pointer" onclick="switchHousehold('${i}')">
      <div>
        <div style="font-size:.88rem;font-weight:500;color:var(--tx)">${s}</div>
        <div style="font-size:.7rem;color:var(--mt);margin-top:2px">Tap to switch</div>
      </div>
      <button onclick="event.stopPropagation();removeHousehold('${i}')" style="background:none;border:none;color:var(--mt);cursor:pointer;font-size:.82rem;padding:4px 8px">✕</button>
    </div>`).join("")}const Yr={gold:{name:"Gold",swatch:"#d4a853",dark:{bg:"#0f0f0d",sf:"#1a1a17",card:"#222220",card2:"#2a2a27",b1:"#333330",b2:"#3d3d39",ac:"#d4a853",ac2:"#e8c27a",acr:"212,168,83",tx:"#ede8d8",tx2:"#b8b09a",mt:"#7a7468"},light:{bg:"#faf8f2",sf:"#ffffff",card:"#f3ede0",card2:"#efe8d8",b1:"#ddd5c0",b2:"#cec4ac",ac:"#a8732a",ac2:"#c48f3e",acr:"168,115,42",tx:"#2a2418",tx2:"#5c5040",mt:"#9a8870"}},forest:{name:"Forest",swatch:"#4a9e5c",dark:{bg:"#0a1410",sf:"#111f17",card:"#182a1e",card2:"#1e3326",b1:"#2a4032",b2:"#355040",ac:"#6db56d",ac2:"#8fd08f",acr:"109,181,109",tx:"#e4f0e4",tx2:"#9dbf9d",mt:"#5a7a5a"},light:{bg:"#f2f9f2",sf:"#ffffff",card:"#e8f5e8",card2:"#dff0df",b1:"#c0ddc0",b2:"#a8cca8",ac:"#2e7d32",ac2:"#43a047",acr:"46,125,50",tx:"#0d2010",tx2:"#2e4f2e",mt:"#5a7a5a"}},ocean:{name:"Ocean",swatch:"#38bdf8",dark:{bg:"#060e1a",sf:"#0d1829",card:"#112035",card2:"#162840",b1:"#1e3554",b2:"#264468",ac:"#38bdf8",ac2:"#7dd3fc",acr:"56,189,248",tx:"#e0f2fe",tx2:"#7ab8d4",mt:"#486880"},light:{bg:"#f0f8ff",sf:"#ffffff",card:"#e0f2fe",card2:"#d4ecf9",b1:"#b0d8f0",b2:"#90c4e4",ac:"#0369a1",ac2:"#0284c7",acr:"3,105,161",tx:"#082040",tx2:"#1e4060",mt:"#4a7090"}},bordeaux:{name:"Bordeaux",swatch:"#e8829a",dark:{bg:"#120810",sf:"#1c0e18",card:"#261420",card2:"#301828",b1:"#4a2238",b2:"#5c2a46",ac:"#e8829a",ac2:"#f4aabb",acr:"232,130,154",tx:"#fce8ee",tx2:"#d4909e",mt:"#8a5060"},light:{bg:"#fff5f7",sf:"#ffffff",card:"#ffe8ed",card2:"#ffd8e0",b1:"#f4b8c4",b2:"#eca0b0",ac:"#be3455",ac2:"#d94070",acr:"190,52,85",tx:"#2a080e",tx2:"#6a2030",mt:"#9a5060"}},sand:{name:"Sand",swatch:"#e07a5f",dark:{bg:"#170e08",sf:"#221508",card:"#2e1c0e",card2:"#382414",b1:"#4a3020",b2:"#5c3c28",ac:"#e07a5f",ac2:"#eca080",acr:"224,122,95",tx:"#fdf0e8",tx2:"#c8a090",mt:"#887060"},light:{bg:"#fdf6ec",sf:"#fffbf5",card:"#f5e8d8",card2:"#eedcc8",b1:"#ddc8ac",b2:"#ccb494",ac:"#c1440e",ac2:"#d4602a",acr:"193,68,14",tx:"#2a1808",tx2:"#5c3820",mt:"#9a7060"}},midnight:{name:"Midnight",swatch:"#818cf8",dark:{bg:"#050814",sf:"#0a0d1f",card:"#0f1228",card2:"#141830",b1:"#1e2448",b2:"#272e58",ac:"#818cf8",ac2:"#a5b0ff",acr:"129,140,248",tx:"#e8eaff",tx2:"#9099cc",mt:"#505880"},light:{bg:"#f0f1ff",sf:"#ffffff",card:"#e4e6ff",card2:"#d8dbff",b1:"#b8bdff",b2:"#a0a6f4",ac:"#4f46e5",ac2:"#6366f1",acr:"79,70,229",tx:"#0a0820",tx2:"#202060",mt:"#5050a0"}},lavender:{name:"Lavender",swatch:"#c084fc",dark:{bg:"#0e0814",sf:"#160e20",card:"#1e1430",card2:"#261a3c",b1:"#382454",b2:"#442c66",ac:"#c084fc",ac2:"#d8a8ff",acr:"192,132,252",tx:"#f5ecff",tx2:"#c0a0e0",mt:"#7a5898"},light:{bg:"#faf5ff",sf:"#ffffff",card:"#f3e8ff",card2:"#ecdcff",b1:"#d8b8f8",b2:"#c8a0f0",ac:"#9333ea",ac2:"#a855f7",acr:"147,51,234",tx:"#1a0830",tx2:"#481080",mt:"#805098"}}};let Es=xe("ks-theme")||"gold",Ss=xe("ks-mode")||"auto";function Xr(n,e){Es=n,Ss=e,Ze("ks-theme",n),Ze("ks-mode",e);const t=Yr[n]||Yr.gold,s=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?t.dark:t.light,r=document.documentElement.style;r.setProperty("--bg",s.bg),r.setProperty("--sf",s.sf),r.setProperty("--card",s.card),r.setProperty("--card2",s.card2),r.setProperty("--b1",s.b1),r.setProperty("--b2",s.b2),r.setProperty("--ac",s.ac),r.setProperty("--ac2",s.ac2),r.setProperty("--acd","rgba("+s.acr+",.12)"),r.setProperty("--tx",s.tx),r.setProperty("--tx2",s.tx2),r.setProperty("--mt",s.mt),r.setProperty("--gn","#6db56d"),r.setProperty("--gnd","rgba(109,181,109,.12)"),r.setProperty("--rd","#d96b6b"),r.setProperty("--rdd","rgba(217,107,107,.12)"),r.setProperty("--am","#c8960a"),r.setProperty("--amd","rgba(200,150,10,.12)"),mg(e),gg(n)}function RA(n){Xr(Es,n)}function mg(n){["auto","light","dark"].forEach(e=>{const t=f("mode-"+e);t&&(t.style.background=e===n?"var(--ac)":"",t.style.color=e===n?"var(--bg)":"",t.style.borderColor=e===n?"var(--ac)":"")})}function gg(n){const e=f("themePicker");e&&(e.innerHTML="",Object.keys(Yr).forEach(t=>{const i=Yr[t],s=t===n,r=document.createElement("div");r.title=i.name,r.style.cssText="width:36px;height:36px;border-radius:50%;background:"+i.swatch+";cursor:pointer;border:3px solid "+(s?"var(--tx)":"transparent")+";box-shadow:"+(s?"0 0 0 2px var(--ac)":"none")+";transition:all .2s;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.85rem",r.textContent=s?"✓":"",r.onclick=()=>Xr(t,Ss),r.onmouseover=function(){this.style.transform="scale(1.15)"},r.onmouseout=function(){this.style.transform="scale(1)"},e.appendChild(r)}))}function PA(){Xr(Es,Ss),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{Ss==="auto"&&Xr(Es,"auto")})}function xA(){gg(Es),mg(Ss)}async function LA(){const n=f("enrichBtn"),e=f("enrichProgress"),t=f("enrichStatus"),i=f("enrichBar");n&&(n.disabled=!0),e&&(e.style.display="block");const s=h.shop.filter(d=>vh(d)),r=h.inv.filter(d=>vh(d)),o=[...s.map(d=>({item:d,list:"shop"})),...r.map(d=>({item:d,list:"inv"}))];if(!o.length){t&&(t.textContent="All items already enriched!"),i&&(i.style.width="100%"),n&&(n.disabled=!1),P("Nothing to enrich — all items already have data.");return}let c=0,l=0;for(let d=0;d<o.length;d++){const{item:m,list:g}=o[d],v=Math.round((d+1)/o.length*100);t&&(t.textContent=`Processing "${m.name}" (${d+1}/${o.length})…`),i&&(i.style.width=v+"%");try{const L=(await(await fetch(`/api/text-search?q=${encodeURIComponent(m.name)}`)).json()).results||[];if(L.length){const R=L[0],M={...m,image:R.image||m.image||null,brand:R.brand||m.brand||"",category:R.category||m.category||"",source:R.source||m.source||"search"};g==="shop"?await ye(M):await se(M),c++}else l++}catch(S){console.warn(`Enrich failed for "${m.name}":`,S),l++}d<o.length-1&&await DA(300)}t&&(t.textContent=`Done! ${c} enriched, ${l} skipped.`),i&&(i.style.width="100%"),n&&(n.disabled=!1),P(`Enrichment complete: ${c} updated, ${l} unchanged.`)}function vh(n){return!n.name||n.name.length<2||n.imageDismissed?!1:!n.image&&!n.brand}function DA(n){return new Promise(e=>setTimeout(e,n))}let Xt=0;async function $A(){const n=re();if(n)try{const e=await ie(`users/${n.uid}`);if(e!=null&&e.onboardingDone)return;NA()}catch{}}function NA(){const n=f("ov-onboarding");n&&(Xt=0,n.classList.add("active"),yg())}function yg(){const n=f("onboarding-body");if(!n)return;const t=`<div style="display:flex;gap:6px;justify-content:center;margin-bottom:24px">${Array.from({length:4},(i,s)=>`<div style="width:8px;height:8px;border-radius:50%;background:${s===Xt?"var(--ac)":"var(--b2)"};transition:background .2s"></div>`).join("")}</div>`;Xt===0?n.innerHTML=`${t}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:4rem;margin-bottom:16px">🧺</div>
        <div style="font-family:'Fraunces',serif;font-size:2rem;font-weight:300;color:var(--ac);margin-bottom:12px">Welcome to Kitchen!</div>
        <p style="font-size:.92rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 28px">Your smart kitchen assistant that tracks inventory, plans meals, finds deals, and suggests recipes — all powered by AI.</p>
        <button class="btn bp bf" onclick="onboardNext()">Let's get started →</button>
      </div>`:Xt===1?n.innerHTML=`${t}
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;margin-bottom:6px">Set up your kitchen</div>
      <p style="font-size:.82rem;color:var(--mt);margin-bottom:18px;line-height:1.5">These help Claude give you better recipe suggestions.</p>
      <div class="frow"><label class="flbl">Household name</label><input class="fi" id="ob-name" placeholder="e.g. The Smith Family" value="${h.cfg.name||""}"/></div>
      <div class="frow"><label class="flbl">Adults</label><input class="fi" id="ob-adults" placeholder="e.g. Bora, Sarah" value="${h.cfg.adults||""}"/></div>
      <div class="frow"><label class="flbl">Kids</label><input class="fi" id="ob-kids" placeholder="e.g. 1 toddler (age 3)" value="${h.cfg.kids||""}"/></div>
      <div class="frow"><label class="flbl">Favourite cuisines</label><input class="fi" id="ob-cuisines" placeholder="e.g. Italian, Turkish, Mexican" value="${h.cfg.cuisines||""}"/></div>
      <div class="frow"><label class="flbl">Weeknight cook time</label>
        <select class="fsel" id="ob-cooktime">
          <option value="20-30 min"${h.cfg.cookTime==="20-30 min"?" selected":""}>20–30 min</option>
          <option value="30-45 min"${h.cfg.cookTime==="30-45 min"?" selected":""}>30–45 min</option>
          <option value="40-60 min"${h.cfg.cookTime==="40-60 min"?" selected":""}>40–60 min</option>
          <option value="60+ min"${h.cfg.cookTime==="60+ min"?" selected":""}>60+ min</option>
        </select>
      </div>
      <div class="frow"><label class="flbl">Dietary restrictions</label>
        <div style="display:flex;flex-direction:column;gap:10px;margin-top:4px">
          <label style="display:flex;align-items:center;gap:10px;font-size:.88rem;cursor:pointer"><input type="checkbox" id="ob-nopork" ${h.cfg.nopork?"checked":""}/> No pork</label>
          <label style="display:flex;align-items:center;gap:10px;font-size:.88rem;cursor:pointer"><input type="checkbox" id="ob-noshellfish" ${h.cfg.noshellfish?"checked":""}/> No shellfish</label>
          <label style="display:flex;align-items:center;gap:10px;font-size:.88rem;cursor:pointer"><input type="checkbox" id="ob-vegetarian" ${h.cfg.vegetarian?"checked":""}/> Vegetarian</label>
          <label style="display:flex;align-items:center;gap:10px;font-size:.88rem;cursor:pointer"><input type="checkbox" id="ob-glutenfree" ${h.cfg.glutenfree?"checked":""}/> Gluten-free</label>
        </div>
      </div>
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:16px">Continue →</button>`:Xt===2?n.innerHTML=`${t}
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
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:20px">Almost done →</button>`:Xt===3&&(n.innerHTML=`${t}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:3rem;margin-bottom:16px">🎉</div>
        <div style="font-family:'Fraunces',serif;font-size:1.6rem;font-weight:300;color:var(--ac);margin-bottom:12px">You're all set!</div>
        <p style="font-size:.88rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 24px">Start by adding your first item to the pantry, or ask Claude for dinner ideas.</p>
        <div style="display:flex;flex-direction:column;gap:10px">
          <button class="btn bp bf" onclick="finishOnboarding();showOv('scan')">📷 Scan your first item</button>
          <button class="btn bs bf" onclick="finishOnboarding();showScreen('chat')">✨ Ask Claude for ideas</button>
          <button class="btn bs bf" onclick="finishOnboarding()">🏠 Go to Home</button>
        </div>
      </div>`)}async function MA(){var n,e,t,i,s,r,o,c,l,d,m,g,v;if(Xt===1){const S=(e=(n=f("ob-name"))==null?void 0:n.value)==null?void 0:e.trim(),x=(i=(t=f("ob-adults"))==null?void 0:t.value)==null?void 0:i.trim(),L=(r=(s=f("ob-kids"))==null?void 0:s.value)==null?void 0:r.trim(),R=(c=(o=f("ob-cuisines"))==null?void 0:o.value)==null?void 0:c.trim(),M=(l=f("ob-cooktime"))==null?void 0:l.value;S&&(h.cfg.name=S),x&&(h.cfg.adults=x),L&&(h.cfg.kids=L),R&&(h.cfg.cuisines=R),M&&(h.cfg.cookTime=M),h.cfg.nopork=((d=f("ob-nopork"))==null?void 0:d.checked)||!1,h.cfg.noshellfish=((m=f("ob-noshellfish"))==null?void 0:m.checked)||!1,h.cfg.vegetarian=((g=f("ob-vegetarian"))==null?void 0:g.checked)||!1,h.cfg.glutenfree=((v=f("ob-glutenfree"))==null?void 0:v.checked)||!1,await xs()}Xt++,yg()}async function vg(){const n=f("ov-onboarding");n&&n.classList.remove("active");const e=re();if(e)try{const t=await ie(`users/${e.uid}`);t&&await K(`users/${e.uid}`,{...t,onboardingDone:!0,id:void 0})}catch{}}async function OA(){await vg(),P("You can always adjust settings later ⚙️")}window.getIdToken=Sf;B.renderAll=tl;B.renderSum=Vs;B.renderRecs=ko;B.renderShop=Li;wE(Fs);window.showScreen=function(n){var e,t;document.querySelectorAll(".ov.active").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".screen").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".ni").forEach(i=>i.classList.remove("active")),(e=f("screen-"+n))==null||e.classList.add("active"),(t=f("nav-"+n))==null||t.classList.add("active"),n==="home"&&nl(),n==="inventory"&&Fs(),n==="recipes"&&(h.rt==="community"?_l():ko()),n==="shopping"&&Li(),n==="insights"&&RC()};const VA=rt;window.showOv=function(n){VA(n),n==="settings"&&setTimeout(xA,80)};window.hideOv=Ee;window.initHome=el;window.addLowToShop=CE;window.toggleHomeSection=_E;window.openRecipeMatch=PE;window.showMoreMatches=xE;window.toggleExp=function(){const n=f("exppanel");n.style.display=n.style.display==="none"?"block":"none"};window.openAdj=v0;window.updL=T0;window.adjQ=I0;window.adjQD=E0;window.adjE=S0;window.adjNote=k0;window.setIT=j0;window.addManual=H0;window.valMA=z0;window.chgMQ=q0;window.selML=W0;window.remItem=ll;window.importDoc=G0;window.adjUnit=C0;window.adjLowThresh=A0;window.adjLowThreshD=R0;window.adjDoNotRestock=P0;window.changeInvUnit=x0;window.changeInvThreshold=L0;window.changeInvThresholdDirect=D0;window.toggleDoNotRestock=$0;window.changeInvLocation=N0;window.changeInvQty=M0;window.changeInvQtyDirect=O0;window.changeInvExpiry=V0;window.clearInvExpiry=U0;window.setInvExpiry=F0;window.changeInvNote=B0;window.openInvAddSheet=J0;window.closeInvAddSheet=js;window.invAddScan=Y0;window.invAddVoice=X0;window.setInvAddLoc=Z0;window.toggleInvAddNote=eS;window.qaddInv=tS;window.onInvInput=nS;window.pickInvInlineResult=aS;window.toggleInvVoice=Sm;window.openInvItemDetail=Bs;window.closeInvItemDetail=cl;window.deleteInvItemImage=w0;window.triggerInvPhotoUpload=_0;window.handleInvPhotoSelected=b0;window.addInvToShopping=lS;window.qadd=ME;window.togShop=e0;window.toggleShNote=t0;window.saveShNote=n0;window.openShQty=i0;window.adjShQty=s0;window.saveShQty=_m;window.togAisle=r0;window.setSHT=o0;window.shareList=a0;window.openAddToKitchen=c0;window.setAtkLoc=l0;window.confirmAddToKitchen=u0;window.buildList=d0;window.toggleVoice=fm;window.toggleAddNote=OE;window.openShopAddSheet=VE;window.closeShopAddSheet=Us;window.shopAddScan=UE;window.shopAddVoice=FE;window.closeEnrichSheet=ym;window.pickEnrichResult=ZE;window.onShopInput=BE;window.pickInlineResult=gm;window.openItemDetail=vm;window.closeItemDetail=WE;window.changeShopUnit=GE;window.changeShopQty=KE;window.changeShopQtyDirect=QE;window.deleteItemImage=JE;window.triggerProductPhotoUpload=YE;window.handleProductPhotoSelected=XE;window.bpTog=h0;window.bpSelAll=f0;window.bpUpdBtn=function(){};window.bpConfirm=p0;window._bpItems=[];window.searchDeals=m0;window.dealsFromList=g0;window.addDealToList=Tm;window.renderDealsZipBanner=bm;window.clrChk=function(){h.shop.filter(n=>n.checked).forEach(n=>{wm(n.name),Ei(n.id)})};window.setRT=Pk;window.togFav=xk;window.valR=Lk;window.importFromUrl=Dk;window.setImportMode=$k;window.startBulkImport=Ok;window.retryBulkImport=Uk;window.saveRec=Bk;window.openER=Qm;window.updR=Hk;window.delER=zk;window.scaleRec=qk;window.whatCanIMake=Wk;window.addRecIngToShop=Gk;window.setStar=Kk;window.togTag=Ak;window.togglePublic=Qk;window.loadCommunity=_l;window.setComCuisine=uC;window.setComSearch=dC;window.setComSort=hC;window.toggleComTag=fC;window.setComTime=pC;window.setComMinRating=mC;window.openComRecipe=rc;window.likeComRecipe=vC;window.saveComToKitchen=wC;window.addComComment=_C;window.shareComRecipe=bC;window.submitComReview=gC;window.unpublishComRecipe=yC;window.rateComRecipe=tg;window.deleteComComment=EC;window.openReportSheet=SC;window.closeReportSheet=ng;window.submitComReport=kC;window.loadMoreComments=IC;window.openNotifications=CC;window.openComRecipeFromNotif=AC;window.openRecipeView=Km;window.handleRecipeBack=jk;window.triggerCoverUpload=Jk;window.handleCoverSelected=Yk;window.handleCoverDrop=Xk;window.removeCoverPhoto=Zk;window.triggerStepPhotoUpload=eC;window.handleStepPhotoSelected=tC;window.removeStepPhoto=nC;window.openPhotoViewer=iC;window.closePhotoViewer=sC;window.photoViewerNav=Ym;window.triggerCommentPhotoUpload=oC;window.handleCommentPhotosSelected=aC;window.removeCommentPhoto=cC;window.sendChat=sg;window.sendPill=NC;window.clrChat=MC;window.ar=rg;window.importChatRecipe=$C;window.stopLiveScanner=Il;window.resumeScanner=BC;window.openScanForList=jC;window.openScanForInventory=HC;window.addScannedToList=qC;window.toggleScanNote=zC;window.togManual=WC;window.manLookup=GC;window.selRL=El;window.valAdd=QC;window.addToInv=JC;window.chgAQ=YC;window.swipeDelItem=eA;window.swipeAddItem=ZC;window.swipeRowTap=tA;window.togShopSelect=nA;window.togInvSelect=iA;window.cancelSelect=bi;window.deleteSelected=sA;window.openMealM=aA;window.pickRec=cA;window.closeMealM=Sl;window.saveMeal=uA;window.clrMeal=dA;window.openCooked=hA;window.skipCooked=fA;window.saveCooked=pA;window.scheduleRecipe=mA;window.schedSet=gA;window.closeSchedM=lA;window.initRecChips=dg;window.toggleChip=oA;window.filterRecs=hg;window._pickedRec=null;window._activeChips=new Set;window.saveSettings=vA;window.saveZipcode=wA;window.toggleNotif=_A;window.testNotif=bA;window.addHousehold=kA;window.switchHousehold=CA;window.removeHousehold=AA;window.setMode=RA;window.showNotif=P;window.copyInviteCode=TA;window.shareInviteCode=IA;window.regenInviteCode=EA;window.removeMemberFromHH=SA;window.enrichExistingItems=LA;window.manualRefresh=async function(n){const e=event==null?void 0:event.target;e&&(e.classList.add("spinning"),setTimeout(()=>e.classList.remove("spinning"),600)),le("syncing");try{(n==="shop"||n==="both")&&(h.shop=await oe(`households/${h.hid}/shopping`),Li()),(n==="inv"||n==="both")&&(h.inv=await oe(`households/${h.hid}/inventory`),Fs(),tl()),le("synced"),P("Refreshed ✓")}catch(t){console.error("manualRefresh error:",t),le("error"),P("Refresh failed")}};window.refreshHomeData=async function(){const n=event==null?void 0:event.target;n&&(n.classList.add("spinning"),setTimeout(()=>n.classList.remove("spinning"),600)),le("syncing");try{const[e,t,i,s]=await Promise.allSettled([oe(`households/${h.hid}/inventory`),oe(`households/${h.hid}/shopping`),oe(`households/${h.hid}/mealplan`),oe(`households/${h.hid}/settings`)]);e.status==="fulfilled"&&(h.inv=e.value),t.status==="fulfilled"&&(h.shop=t.value),i.status==="fulfilled"&&(h.mp={},i.value.forEach(r=>{r.meal&&(h.mp[r.id]=r.meal)})),nl(),Fs(),le("synced"),P("Refreshed ✓")}catch(e){console.error("refreshHomeData error:",e),le("error"),P("Refresh failed")}};window.onboardNext=MA;window.finishOnboarding=vg;window.skipOnboarding=OA;window.saveUsername=async function(){var o;const n=f("usernameInput"),e=f("usernameStatus"),t=f("saveUsernameBtn"),i=((n==null?void 0:n.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(i)){e&&(e.textContent="3-20 characters, letters, numbers, and underscores only.",e.style.color="var(--rd)",e.style.display="block");return}if(t&&(t.disabled=!0,t.textContent="Checking…"),!await Rc(i)){e&&(e.textContent=`"${i}" is already taken. Try another.`,e.style.color="var(--rd)",e.style.display="block"),t&&(t.disabled=!1,t.textContent="Save");return}const r=re();r&&(await Pc(r.uid,i),P("Username set to @"+i)),(o=f("usernameM"))==null||o.classList.remove("active"),t&&(t.disabled=!1,t.textContent="Save")};window.changeUsername=async function(){const n=f("setUsername"),e=((n==null?void 0:n.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(e)){P("3-20 chars, letters/numbers/underscores only");return}if(e===h.username){P("Username unchanged");return}if(!await Rc(e)){P(`"${e}" is already taken`);return}const i=re();i&&(await Pc(i.uid,e),P("Username changed to @"+e))};window._appStart=async function(n){var t;h.hid=n,f("LS").style.display="none",f("APP").style.display="flex",window.showScreen("home"),le("syncing");const e=re();if(e)try{const i=await ie(`users/${e.uid}`);if((t=i==null?void 0:i.householdIds)!=null&&t.length){const s=[...i.householdIds];s.includes(n)||s.push(n),Ze("ks-hhs",s)}else{const s=xe("ks-hhs")||[n];s.includes(n)||(s.push(n),Ze("ks-hhs",s))}}catch{const i=xe("ks-hhs")||[n];i.includes(n)||(i.push(n),Ze("ks-hhs",i))}else{const i=xe("ks-hhs")||[n];i.includes(n)||(i.push(n),Ze("ks-hhs",i))}await Lf(),yA(),el(),NE(),cS(),vE(h.hid);try{le("syncing");const i=await Promise.allSettled([oe(`households/${h.hid}/inventory`),oe(`households/${h.hid}/recipes`),oe(`households/${h.hid}/shopping`)]),s=(r,o)=>r.status==="fulfilled"?r.value:o;h.inv=s(i[0],h.inv),h.recs=s(i[1],h.recs),h.shop=s(i[2],h.shop),le("synced"),tl(),ko(),Li(),Vs()}catch(i){console.error("initial load error",i),le("error")}if(e){const i=await Ff(e.uid);h.username=i;const s=f("setUsername");s&&(s.value=i||""),i||setTimeout(()=>{var r;return(r=f("usernameM"))==null?void 0:r.classList.add("active")},600)}setTimeout(ig,800),setTimeout($A,500)};PA();XC();h.cfg.notif&&setTimeout(fg,3e3);Li();function Ao(n){f("auth-loading").style.display="none",f("auth-signin").style.display=n==="signin"?"flex":"none",f("auth-signup").style.display=n==="signup"?"flex":"none",f("auth-join").style.display=n==="join"?"flex":"none",f("authError").style.display="none",f("signupError").style.display="none"}function tt(n,e){const t=f(n);t&&(t.textContent=e,t.style.display="block")}function Ro(n){return{"auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password.","auth/invalid-credential":"Incorrect email or password.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password must be at least 6 characters.","auth/too-many-requests":"Too many attempts. Please try again later.","auth/popup-closed-by-user":"Sign-in popup was closed.","auth/cancelled-popup-request":"Sign-in was cancelled.","auth/account-exists-with-different-credential":"An account already exists with this email using a different sign-in method."}[n.code]||n.message||"Something went wrong. Please try again."}function We(n,e){n&&(e?(n._origText=n.textContent,n.textContent="Please wait…",n.disabled=!0):(n.textContent=n._origText||n.textContent,n.disabled=!1))}var wh;(wh=f("btnGoogle"))==null||wh.addEventListener("click",async()=>{const n=f("btnGoogle");We(n,!0),f("authError").style.display="none";try{await Z_()}catch(e){tt("authError",Ro(e))}We(n,!1)});var _h;(_h=f("btnApple"))==null||_h.addEventListener("click",async()=>{const n=f("btnApple");We(n,!0),f("authError").style.display="none";try{await eb()}catch(e){tt("authError",Ro(e))}We(n,!1)});var bh;(bh=f("btnEmailSign"))==null||bh.addEventListener("click",async()=>{var i,s,r;const n=(s=(i=f("authEmail"))==null?void 0:i.value)==null?void 0:s.trim(),e=(r=f("authPass"))==null?void 0:r.value;if(!n||!e){tt("authError","Please enter your email and password.");return}const t=f("btnEmailSign");We(t,!0),f("authError").style.display="none";try{await tb(n,e)}catch(o){tt("authError",Ro(o))}We(t,!1)});var Th;(Th=f("btnEmailSignup"))==null||Th.addEventListener("click",async()=>{var s,r,o,c,l;const n=(r=(s=f("signupName"))==null?void 0:s.value)==null?void 0:r.trim(),e=(c=(o=f("signupEmail"))==null?void 0:o.value)==null?void 0:c.trim(),t=(l=f("signupPass"))==null?void 0:l.value;if(!n){tt("signupError","Please enter your name.");return}if(!e||!t){tt("signupError","Please enter your email and password.");return}const i=f("btnEmailSignup");We(i,!0),f("signupError").style.display="none";try{await nb(e,t,n)}catch(d){tt("signupError",Ro(d))}We(i,!1)});var Ih;(Ih=f("btnToggleSignup"))==null||Ih.addEventListener("click",()=>Ao("signup"));var Eh;(Eh=f("btnToggleSignin"))==null||Eh.addEventListener("click",()=>Ao("signin"));var Sh;(Sh=f("authPass"))==null||Sh.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=f("btnEmailSign"))==null||e.click())});var kh;(kh=f("signupPass"))==null||kh.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=f("btnEmailSignup"))==null||e.click())});window.doSignOut=async function(){confirm("Sign out of Kitchen?")&&await ib()};let Ta=!1;function Zr(n){localStorage.setItem("ks-h",n),f("LS").style.display="none",f("APP").style.display="flex",window._appStart(n)}function UA(n){Ao("join"),f("btnCreateKitchen").onclick=async()=>{var e;We(f("btnCreateKitchen"),!0);try{const t=((e=h.cfg)==null?void 0:e.name)||"My Kitchen";await Ic(n.uid,t);const i=await Hr(n);i.householdIds=[n.uid],await K(`users/${n.uid}`,i),localStorage.removeItem("ks-h");const s=xe("ks-hhs");if(s){const r=s.filter(o=>o!==n.uid);r.push(n.uid),localStorage.setItem("ks-hhs",JSON.stringify(r))}Zr(n.uid)}catch(t){console.error("Create kitchen error:",t),tt("joinError","Something went wrong. Please try again."),We(f("btnCreateKitchen"),!1)}},f("btnJoinKitchen").onclick=async()=>{var t,i,s;const e=(s=(i=(t=f("joinCode"))==null?void 0:t.value)==null?void 0:i.trim())==null?void 0:s.toUpperCase();if(!e){tt("joinError","Please enter an invite code.");return}We(f("btnJoinKitchen"),!0),f("joinError").style.display="none";try{let r=await ie(`users/${n.uid}`);r||(r=await Hr(n));const o=await Ec(e,n);if(!o){tt("joinError","Invalid invite code. Check and try again."),We(f("btnJoinKitchen"),!1);return}const c=xe("ks-hhs")||[];c.includes(o)||c.push(o),Ze("ks-hhs",c),Zr(o)}catch(r){console.error("Join kitchen error:",r),tt("joinError","Something went wrong. Please try again."),We(f("btnJoinKitchen"),!1)}}}Y_(async n=>{var e;if(n){if(localStorage.setItem("ks-who",n.displayName||((e=n.email)==null?void 0:e.split("@")[0])||"You"),!Ta){Ta=!0;try{const t=await ie(`users/${n.uid}`),i=localStorage.getItem("ks-h"),s=xe("ks-hhs");if(!!t||!!i||s&&s.length>0){f("LS").style.display="none",f("APP").style.display="flex";const o=await Pf(n);Zr(o)}else UA(n)}catch(t){console.error("Failed to resolve household:",t);const i=n.uid;Zr(i)}}}else am(),Ta=!1,f("APP").style.display="none",f("LS").style.display="flex",Ao("signin")});
