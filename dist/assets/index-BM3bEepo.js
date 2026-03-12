(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const dr={name:"The Bora Family",adults:"Bora",kids:"1 toddler (age 3)",nopork:!0,noshellfish:!1,vegetarian:!1,glutenfree:!1,other:"",cuisines:"Bangladeshi, Turkish, Mediterranean, American",cookTime:"40-60 min",zipcode:""},p={hid:null,inv:[],recs:[],shop:[],mp:{},cfg:{...dr},cookLog:[],wasteLog:[],chat:[],cp:null,selR:"fridge",maL:"fridge",adjId:null,it:"all",rt:"all",md:null,cn:"",nr:0,eid:null,scanDestList:!1,aisleMode:!1,selectMode:null,selectedIds:new Set,comRecs:[],comTab:"browse",comSearch:"",comCuisine:"all",myLikes:new Set};function Ue(n){try{return JSON.parse(localStorage.getItem(n))}catch{return null}}function rt(n,e){localStorage.setItem(n,JSON.stringify(e))}const km=()=>{};var Kl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Cm=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],c=n[t++],u=((i&7)<<18|(r&63)<<12|(o&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Gh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,c=o?n[i+1]:0,u=i+2<n.length,d=u?n[i+2]:0,m=r>>2,v=(r&3)<<4|c>>4;let T=(c&15)<<2|d>>6,C=d&63;u||(C=64,o||(T=64)),s.push(t[m],t[v],t[T],t[C])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Wh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Cm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const v=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||c==null||d==null||v==null)throw new Rm;const T=r<<2|c>>4;if(s.push(T),d!==64){const C=c<<4&240|d>>2;if(s.push(C),v!==64){const D=d<<6&192|v;s.push(D)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Rm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pm=function(n){const e=Wh(n);return Gh.encodeByteArray(e,!0)},fr=function(n){return Pm(n).replace(/\./g,"")},Kh=function(n){try{return Gh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function xm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Lm=()=>xm().__FIREBASE_DEFAULTS__,Dm=()=>{if(typeof process>"u"||typeof Kl>"u")return;const n=Kl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Nm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Kh(n[1]);return e&&JSON.parse(e)},Nr=()=>{try{return km()||Lm()||Dm()||Nm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Qh=n=>{var e,t;return(t=(e=Nr())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Jh=n=>{const e=Qh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Yh=()=>{var n;return(n=Nr())==null?void 0:n.config},Xh=n=>{var e;return(e=Nr())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function rn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function $a(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Zh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[fr(JSON.stringify(t)),fr(JSON.stringify(o)),""].join(".")}const js={};function Mm(){const n={prod:[],emulator:[]};for(const e of Object.keys(js))js[e]?n.emulator.push(e):n.prod.push(e);return n}function Vm(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Ql=!1;function Ua(n,e){if(typeof window>"u"||typeof document>"u"||!rn(window.location.host)||js[n]===e||js[n]||Ql)return;js[n]=e;function t(T){return`__firebase__banner__${T}`}const s="__firebase__banner",r=Mm().prod.length>0;function o(){const T=document.getElementById(s);T&&T.remove()}function c(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function u(T,C){T.setAttribute("width","24"),T.setAttribute("id",C),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function d(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{Ql=!0,o()},T}function m(T,C){T.setAttribute("id",C),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function v(){const T=Vm(s),C=t("text"),D=document.getElementById(C)||document.createElement("span"),M=t("learnmore"),N=document.getElementById(M)||document.createElement("a"),z=t("preprendIcon"),G=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const V=T.element;c(V),m(N,M);const B=d();u(G,z),V.append(G,D,N,B),document.body.appendChild(V)}r?(D.innerText="Preview backend disconnected.",G.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(G.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,D.innerText="Preview backend running in this workspace."),D.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",v):v()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $m(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function Um(){var e;const n=(e=Nr())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Fm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Bm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function jm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hm(){const n=Pe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function qm(){return!Um()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zm(){try{return typeof indexedDB=="object"}catch{return!1}}function Wm(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm="FirebaseError";class mt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Gm,Object.setPrototypeOf(this,mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ui.prototype.create)}}class ui{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Km(r,s):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new mt(i,c,s)}}function Km(n,e){return n.replace(Qm,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Qm=/\{\$([^}]+)}/g;function Jm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function En(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Jl(r)&&Jl(o)){if(!En(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Jl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ms(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Vs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Ym(n,e){const t=new Xm(n,e);return t.subscribe.bind(t)}class Xm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Zm(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=Do),i.error===void 0&&(i.error=Do),i.complete===void 0&&(i.complete=Do);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Do(){}/**
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
 */function Ie(n){return n&&n._delegate?n._delegate:n}class Qt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const yn="[DEFAULT]";/**
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
 */class eg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Om;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ng(e))try{this.getOrInitializeService({instanceIdentifier:yn})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yn){return this.instances.has(e)}getOptions(e=yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(r);s===c&&o.resolve(i)}return i}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:tg(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=yn){return this.component?this.component.multipleInstances?e:yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tg(n){return n===yn?void 0:n}function ng(n){return n.instantiationMode==="EAGER"}/**
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
 */class sg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new eg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const ig={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},rg=Q.INFO,og={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},ag=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=og[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fa{constructor(e){this.name=e,this._logLevel=rg,this._logHandler=ag,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ig[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const cg=(n,e)=>e.some(t=>n instanceof t);let Yl,Xl;function lg(){return Yl||(Yl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ug(){return Xl||(Xl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ed=new WeakMap,na=new WeakMap,td=new WeakMap,No=new WeakMap,Ba=new WeakMap;function hg(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Ht(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ed.set(t,n)}).catch(()=>{}),Ba.set(e,n),e}function dg(n){if(na.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});na.set(n,e)}let sa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return na.get(n);if(e==="objectStoreNames")return n.objectStoreNames||td.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ht(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function fg(n){sa=n(sa)}function pg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Oo(this),e,...t);return td.set(s,e.sort?e.sort():[e]),Ht(s)}:ug().includes(n)?function(...e){return n.apply(Oo(this),e),Ht(ed.get(this))}:function(...e){return Ht(n.apply(Oo(this),e))}}function mg(n){return typeof n=="function"?pg(n):(n instanceof IDBTransaction&&dg(n),cg(n,lg())?new Proxy(n,sa):n)}function Ht(n){if(n instanceof IDBRequest)return hg(n);if(No.has(n))return No.get(n);const e=mg(n);return e!==n&&(No.set(n,e),Ba.set(e,n)),e}const Oo=n=>Ba.get(n);function gg(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),c=Ht(o);return s&&o.addEventListener("upgradeneeded",u=>{s(Ht(o.result),u.oldVersion,u.newVersion,Ht(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{r&&u.addEventListener("close",()=>r()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const yg=["get","getKey","getAll","getAllKeys","count"],vg=["put","add","delete","clear"],Mo=new Map;function Zl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Mo.get(e))return Mo.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=vg.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||yg.includes(t)))return;const r=async function(o,...c){const u=this.transaction(o,i?"readwrite":"readonly");let d=u.store;return s&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),i&&u.done]))[0]};return Mo.set(e,r),r}fg(n=>({...n,get:(e,t,s)=>Zl(e,t)||n.get(e,t,s),has:(e,t)=>!!Zl(e,t)||n.has(e,t)}));/**
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
 */class _g{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(wg(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function wg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ia="@firebase/app",eu="0.14.9";/**
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
 */const Tt=new Fa("@firebase/app"),bg="@firebase/app-compat",Tg="@firebase/analytics-compat",Eg="@firebase/analytics",Ig="@firebase/app-check-compat",Sg="@firebase/app-check",Ag="@firebase/auth",kg="@firebase/auth-compat",Cg="@firebase/database",Rg="@firebase/data-connect",Pg="@firebase/database-compat",xg="@firebase/functions",Lg="@firebase/functions-compat",Dg="@firebase/installations",Ng="@firebase/installations-compat",Og="@firebase/messaging",Mg="@firebase/messaging-compat",Vg="@firebase/performance",$g="@firebase/performance-compat",Ug="@firebase/remote-config",Fg="@firebase/remote-config-compat",Bg="@firebase/storage",jg="@firebase/storage-compat",Hg="@firebase/firestore",qg="@firebase/ai",zg="@firebase/firestore-compat",Wg="firebase",Gg="12.10.0";/**
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
 */const ra="[DEFAULT]",Kg={[ia]:"fire-core",[bg]:"fire-core-compat",[Eg]:"fire-analytics",[Tg]:"fire-analytics-compat",[Sg]:"fire-app-check",[Ig]:"fire-app-check-compat",[Ag]:"fire-auth",[kg]:"fire-auth-compat",[Cg]:"fire-rtdb",[Rg]:"fire-data-connect",[Pg]:"fire-rtdb-compat",[xg]:"fire-fn",[Lg]:"fire-fn-compat",[Dg]:"fire-iid",[Ng]:"fire-iid-compat",[Og]:"fire-fcm",[Mg]:"fire-fcm-compat",[Vg]:"fire-perf",[$g]:"fire-perf-compat",[Ug]:"fire-rc",[Fg]:"fire-rc-compat",[Bg]:"fire-gcs",[jg]:"fire-gcs-compat",[Hg]:"fire-fst",[zg]:"fire-fst-compat",[qg]:"fire-vertex","fire-js":"fire-js",[Wg]:"fire-js-all"};/**
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
 */const pr=new Map,Qg=new Map,oa=new Map;function tu(n,e){try{n.container.addComponent(e)}catch(t){Tt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function In(n){const e=n.name;if(oa.has(e))return Tt.debug(`There were multiple attempts to register component ${e}.`),!1;oa.set(e,n);for(const t of pr.values())tu(t,n);for(const t of Qg.values())tu(t,n);return!0}function Or(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ve(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Jg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qt=new ui("app","Firebase",Jg);/**
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
 */class Yg{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qt.create("app-deleted",{appName:this._name})}}/**
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
 */const xn=Gg;function nd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:ra,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw qt.create("bad-app-name",{appName:String(i)});if(t||(t=Yh()),!t)throw qt.create("no-options");const r=pr.get(i);if(r){if(En(t,r.options)&&En(s,r.config))return r;throw qt.create("duplicate-app",{appName:i})}const o=new sg(i);for(const u of oa.values())o.addComponent(u);const c=new Yg(t,s,o);return pr.set(i,c),c}function ja(n=ra){const e=pr.get(n);if(!e&&n===ra&&Yh())return nd();if(!e)throw qt.create("no-app",{appName:n});return e}function at(n,e,t){let s=Kg[n]??n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tt.warn(o.join(" "));return}In(new Qt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Xg="firebase-heartbeat-database",Zg=1,ti="firebase-heartbeat-store";let Vo=null;function sd(){return Vo||(Vo=gg(Xg,Zg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ti)}catch(t){console.warn(t)}}}}).catch(n=>{throw qt.create("idb-open",{originalErrorMessage:n.message})})),Vo}async function ey(n){try{const t=(await sd()).transaction(ti),s=await t.objectStore(ti).get(id(n));return await t.done,s}catch(e){if(e instanceof mt)Tt.warn(e.message);else{const t=qt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tt.warn(t.message)}}}async function nu(n,e){try{const s=(await sd()).transaction(ti,"readwrite");await s.objectStore(ti).put(e,id(n)),await s.done}catch(t){if(t instanceof mt)Tt.warn(t.message);else{const s=qt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Tt.warn(s.message)}}}function id(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ty=1024,ny=30;class sy{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ry(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=su();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>ny){const o=oy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Tt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=su(),{heartbeatsToSend:s,unsentEntries:i}=iy(this._heartbeatsCache.heartbeats),r=fr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Tt.warn(t),""}}}function su(){return new Date().toISOString().substring(0,10)}function iy(n,e=ty){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),iu(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),iu(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class ry{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zm()?Wm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ey(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return nu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return nu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function iu(n){return fr(JSON.stringify({version:2,heartbeats:n})).length}function oy(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function ay(n){In(new Qt("platform-logger",e=>new _g(e),"PRIVATE")),In(new Qt("heartbeat",e=>new sy(e),"PRIVATE")),at(ia,eu,n),at(ia,eu,"esm2020"),at("fire-js","")}ay("");var cy="firebase",ly="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */at(cy,ly,"app");function rd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uy=rd,od=new ui("auth","Firebase",rd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=new Fa("@firebase/auth");function hy(n,...e){mr.logLevel<=Q.WARN&&mr.warn(`Auth (${xn}): ${n}`,...e)}function Yi(n,...e){mr.logLevel<=Q.ERROR&&mr.error(`Auth (${xn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(n,...e){throw qa(n,...e)}function Ze(n,...e){return qa(n,...e)}function Ha(n,e,t){const s={...uy(),[e]:t};return new ui("auth","Firebase",s).create(e,{appName:n.name})}function ct(n){return Ha(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ad(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Qe(n,"argument-error"),Ha(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function qa(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return od.create(n,...e)}function F(n,e,...t){if(!n)throw qa(e,...t)}function wt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Yi(e),new Error(e)}function Et(n,e){n||wt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function dy(){return ru()==="http:"||ru()==="https:"}function ru(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dy()||Bm()||"connection"in navigator)?navigator.onLine:!0}function py(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,t){this.shortDelay=e,this.longDelay=t,Et(t>e,"Short delay should be less than long delay!"),this.isMobile=$m()||jm()}get(){return fy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(n,e){Et(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],yy=new di(3e4,6e4);function on(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function At(n,e,t,s,i={}){return ld(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const c=hi({key:n.config.apiKey,...o}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:u,...r};return Fm()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&rn(n.emulatorConfig.host)&&(d.credentials="include"),cd.fetch()(await ud(n,n.config.apiHost,t,c),d)})}async function ld(n,e,t){n._canInitEmulator=!1;const s={...my,...e};try{const i=new _y(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ui(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const c=r.ok?o.errorMessage:o.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ui(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ui(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ui(n,"user-disabled",o);const m=s[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Ha(n,m,d);Qe(n,m)}}catch(i){if(i instanceof mt)throw i;Qe(n,"network-request-failed",{message:String(i)})}}async function fi(n,e,t,s,i={}){const r=await At(n,e,t,s,i);return"mfaPendingCredential"in r&&Qe(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function ud(n,e,t,s){const i=`${e}${t}?${s}`,r=n,o=r.config.emulator?za(n.config,i):`${n.config.apiScheme}://${i}`;return gy.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function vy(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _y{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Ze(this.auth,"network-request-failed")),yy.get())})}}function Ui(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=Ze(n,e,s);return i.customData._tokenResponse=t,i}function ou(n){return n!==void 0&&n.enterprise!==void 0}class wy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return vy(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function by(n,e){return At(n,"GET","/v2/recaptchaConfig",on(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ty(n,e){return At(n,"POST","/v1/accounts:delete",e)}async function gr(n,e){return At(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ey(n,e=!1){const t=Ie(n),s=await t.getIdToken(e),i=Wa(s);F(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Hs($o(i.auth_time)),issuedAtTime:Hs($o(i.iat)),expirationTime:Hs($o(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function $o(n){return Number(n)*1e3}function Wa(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Yi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Kh(t);return i?JSON.parse(i):(Yi("Failed to decode base64 JWT payload"),null)}catch(i){return Yi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function au(n){const e=Wa(n);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jn(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof mt&&Iy(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Iy({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hs(this.lastLoginAt),this.creationTime=Hs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function yr(n){var v;const e=n.auth,t=await n.getIdToken(),s=await Jn(n,gr(e,{idToken:t}));F(s==null?void 0:s.users.length,e,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const r=(v=i.providerUserInfo)!=null&&v.length?hd(i.providerUserInfo):[],o=ky(n.providerData,r),c=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(o!=null&&o.length),d=c?u:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new ca(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,m)}async function Ay(n){const e=Ie(n);await yr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ky(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function hd(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cy(n,e){const t=await ld(n,{},async()=>{const s=hi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=await ud(n,i,"/v1/token",`key=${r}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:s};return n.emulatorConfig&&rn(n.emulatorConfig.host)&&(u.credentials="include"),cd.fetch()(o,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Ry(n,e){return At(n,"POST","/v2/accounts:revokeToken",on(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):au(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){F(e.length!==0,"internal-error");const t=au(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await Cy(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new Bn;return s&&(F(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(F(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(F(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bn,this.toJSON())}_performRefresh(){return wt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(n,e){F(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ye{constructor({uid:e,auth:t,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new Sy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ca(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Jn(this,this.stsTokenManager.getToken(this.auth,e));return F(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ey(this,e)}reload(){return Ay(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ye({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await yr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ve(this.auth.app))return Promise.reject(ct(this.auth));const e=await this.getIdToken();return await Jn(this,Ty(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,i=t.email??void 0,r=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,u=t._redirectEventId??void 0,d=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:v,emailVerified:T,isAnonymous:C,providerData:D,stsTokenManager:M}=t;F(v&&M,e,"internal-error");const N=Bn.fromJSON(this.name,M);F(typeof v=="string",e,"internal-error"),Nt(s,e.name),Nt(i,e.name),F(typeof T=="boolean",e,"internal-error"),F(typeof C=="boolean",e,"internal-error"),Nt(r,e.name),Nt(o,e.name),Nt(c,e.name),Nt(u,e.name),Nt(d,e.name),Nt(m,e.name);const z=new Ye({uid:v,auth:e,email:i,emailVerified:T,displayName:s,isAnonymous:C,photoURL:o,phoneNumber:r,tenantId:c,stsTokenManager:N,createdAt:d,lastLoginAt:m});return D&&Array.isArray(D)&&(z.providerData=D.map(G=>({...G}))),u&&(z._redirectEventId=u),z}static async _fromIdTokenResponse(e,t,s=!1){const i=new Bn;i.updateFromServerResponse(t);const r=new Ye({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await yr(r),r}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];F(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?hd(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),c=new Bn;c.updateFromIdToken(s);const u=new Ye({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new ca(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=new Map;function bt(n){Et(n instanceof Function,"Expected a class definition");let e=cu.get(n);return e?(Et(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,cu.set(n,e),e)}/**
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
 */class dd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}dd.type="NONE";const lu=dd;/**
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
 */function Xi(n,e,t){return`firebase:${n}:${e}:${t}`}class jn{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Xi(this.userKey,i.apiKey,r),this.fullPersistenceKey=Xi("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await gr(this.auth,{idToken:e}).catch(()=>{});return t?Ye._fromGetAccountInfoResponse(this.auth,t,e):null}return Ye._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new jn(bt(lu),e,s);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let r=i[0]||bt(lu);const o=Xi(s,e.config.apiKey,e.name);let c=null;for(const d of t)try{const m=await d._get(o);if(m){let v;if(typeof m=="string"){const T=await gr(e,{idToken:m}).catch(()=>{});if(!T)break;v=await Ye._fromGetAccountInfoResponse(e,T,m)}else v=Ye._fromJSON(e,m);d!==r&&(c=v),r=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!r._shouldAllowMigration||!u.length?new jn(r,e,s):(r=u[0],c&&await r._set(o,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==r)try{await d._remove(o)}catch{}})),new jn(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vd(e))return"Blackberry";if(_d(e))return"Webos";if(pd(e))return"Safari";if((e.includes("chrome/")||md(e))&&!e.includes("edge/"))return"Chrome";if(yd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function fd(n=Pe()){return/firefox\//i.test(n)}function pd(n=Pe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function md(n=Pe()){return/crios\//i.test(n)}function gd(n=Pe()){return/iemobile/i.test(n)}function yd(n=Pe()){return/android/i.test(n)}function vd(n=Pe()){return/blackberry/i.test(n)}function _d(n=Pe()){return/webos/i.test(n)}function Ga(n=Pe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Py(n=Pe()){var e;return Ga(n)&&!!((e=window.navigator)!=null&&e.standalone)}function xy(){return Hm()&&document.documentMode===10}function wd(n=Pe()){return Ga(n)||yd(n)||_d(n)||vd(n)||/windows phone/i.test(n)||gd(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(n,e=[]){let t;switch(n){case"Browser":t=uu(Pe());break;case"Worker":t=`${uu(Pe())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${xn}/${s}`}/**
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
 */class Ly{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,c)=>{try{const u=e(r);o(u)}catch(u){c(u)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Dy(n,e={}){return At(n,"GET","/v2/passwordPolicy",on(n,e))}/**
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
 */const Ny=6;class Oy{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Ny,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hu(this),this.idTokenSubscription=new hu(this),this.beforeStateQueue=new Ly(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=od,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=bt(t)),this._initializationPromise=this.queue(async()=>{var s,i,r;if(!this._deleted&&(this.persistenceManager=await jn.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await gr(this,{idToken:e}),s=await Ye._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(Ve(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===c)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await yr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=py()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ve(this.app))return Promise.reject(ct(this));const t=e?Ie(e):null;return t&&F(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ve(this.app)?Promise.reject(ct(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ve(this.app)?Promise.reject(ct(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Dy(this),t=new Oy(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ui("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Ry(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&bt(e)||this._popupRedirectResolver;F(t,this,"argument-error"),this.redirectPersistenceManager=await jn.create(this,[bt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(c,this,"internal-error"),c.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,s,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Ve(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&hy(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function gt(n){return Ie(n)}class hu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ym(t=>this.observer=t)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Vy(n){Mr=n}function Td(n){return Mr.loadJS(n)}function $y(){return Mr.recaptchaEnterpriseScript}function Uy(){return Mr.gapiScript}function Fy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class By{constructor(){this.enterprise=new jy}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class jy{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Hy="recaptcha-enterprise",Ed="NO_RECAPTCHA";class qy{constructor(e){this.type=Hy,this.auth=gt(e)}async verify(e="verify",t=!1){async function s(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,c)=>{by(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new wy(u);return r.tenantId==null?r._agentRecaptchaConfig=d:r._tenantRecaptchaConfigs[r.tenantId]=d,o(d.siteKey)}}).catch(u=>{c(u)})})}function i(r,o,c){const u=window.grecaptcha;ou(u)?u.enterprise.ready(()=>{u.enterprise.execute(r,{action:e}).then(d=>{o(d)}).catch(()=>{o(Ed)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new By().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{s(this.auth).then(c=>{if(!t&&ou(window.grecaptcha))i(c,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=$y();u.length!==0&&(u+=c),Td(u).then(()=>{i(c,r,o)}).catch(d=>{o(d)})}}).catch(c=>{o(c)})})}}async function du(n,e,t,s=!1,i=!1){const r=new qy(n);let o;if(i)o=Ed;else try{o=await r.verify(t)}catch{o=await r.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return s?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function la(n,e,t,s,i){var r;if((r=n._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await du(n,e,t,t==="getOobCode");return s(n,o)}else return s(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await du(n,e,t,t==="getOobCode");return s(n,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(n,e){const t=Or(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(En(r,e??{}))return i;Qe(i,"already-initialized")}return t.initialize({options:e})}function Wy(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(bt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Gy(n,e,t){const s=gt(n);F(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Id(e),{host:o,port:c}=Ky(e),u=c===null?"":`:${c}`,d={url:`${r}//${o}${u}/`},m=Object.freeze({host:o,port:c,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){F(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),F(En(d,s.config.emulator)&&En(m,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=d,s.emulatorConfig=m,s.settings.appVerificationDisabledForTesting=!0,rn(o)?($a(`${r}//${o}${u}`),Ua("Auth",!0)):Qy()}function Id(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Ky(n){const e=Id(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:fu(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:fu(o)}}}function fu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Qy(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return wt("not implemented")}_getIdTokenResponse(e){return wt("not implemented")}_linkToIdToken(e,t){return wt("not implemented")}_getReauthenticationResolver(e){return wt("not implemented")}}async function Jy(n,e){return At(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yy(n,e){return fi(n,"POST","/v1/accounts:signInWithPassword",on(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xy(n,e){return fi(n,"POST","/v1/accounts:signInWithEmailLink",on(n,e))}async function Zy(n,e){return fi(n,"POST","/v1/accounts:signInWithEmailLink",on(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends Ka{constructor(e,t,s,i=null){super("password",s),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ni(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new ni(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return la(e,t,"signInWithPassword",Yy);case"emailLink":return Xy(e,{email:this._email,oobCode:this._password});default:Qe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return la(e,s,"signUpPassword",Jy);case"emailLink":return Zy(e,{idToken:t,email:this._email,oobCode:this._password});default:Qe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hn(n,e){return fi(n,"POST","/v1/accounts:signInWithIdp",on(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev="http://localhost";class It extends Ka{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new It(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Qe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,...r}=t;if(!s||!i)return null;const o=new It(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Hn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Hn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Hn(e,t)}buildRequest(){const e={requestUri:ev,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=hi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nv(n){const e=Ms(Vs(n)).link,t=e?Ms(Vs(e)).deep_link_id:null,s=Ms(Vs(n)).deep_link_id;return(s?Ms(Vs(s)).link:null)||s||t||e||n}class Qa{constructor(e){const t=Ms(Vs(e)),s=t.apiKey??null,i=t.oobCode??null,r=tv(t.mode??null);F(s&&i&&r,"argument-error"),this.apiKey=s,this.operation=r,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=nv(e);try{return new Qa(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(){this.providerId=is.PROVIDER_ID}static credential(e,t){return ni._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Qa.parseLink(t);return F(s,"argument-error"),ni._fromEmailAndCode(e,s.code,s.tenantId)}}is.PROVIDER_ID="password";is.EMAIL_PASSWORD_SIGN_IN_METHOD="password";is.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class rs extends Vr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class qs extends rs{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return F("providerId"in t&&"signInMethod"in t,"argument-error"),It._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return F(e.idToken||e.accessToken,"argument-error"),It._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return qs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return qs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s,oauthTokenSecret:i,pendingToken:r,nonce:o,providerId:c}=e;if(!s&&!i&&!t&&!r||!c)return null;try{return new qs(c)._credential({idToken:t,accessToken:s,nonce:o,pendingToken:r})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends rs{constructor(){super("facebook.com")}static credential(e){return It._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ot.credential(e.oauthAccessToken)}catch{return null}}}Ot.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ot.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends rs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return It._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return _t.credential(t,s)}catch{return null}}}_t.GOOGLE_SIGN_IN_METHOD="google.com";_t.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends rs{constructor(){super("github.com")}static credential(e){return It._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mt.credential(e.oauthAccessToken)}catch{return null}}}Mt.GITHUB_SIGN_IN_METHOD="github.com";Mt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends rs{constructor(){super("twitter.com")}static credential(e,t){return It._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Vt.credential(t,s)}catch{return null}}}Vt.TWITTER_SIGN_IN_METHOD="twitter.com";Vt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sv(n,e){return fi(n,"POST","/v1/accounts:signUp",on(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await Ye._fromIdTokenResponse(e,s,i),o=pu(s);return new Sn({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=pu(s);return new Sn({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function pu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends mt{constructor(e,t,s,i){super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,vr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new vr(e,t,s,i)}}function Sd(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?vr._fromErrorAndOperation(n,r,e,s):r})}async function iv(n,e,t=!1){const s=await Jn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Sn._forOperation(n,"link",s)}/**
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
 */async function rv(n,e,t=!1){const{auth:s}=n;if(Ve(s.app))return Promise.reject(ct(s));const i="reauthenticate";try{const r=await Jn(n,Sd(s,i,e,n),t);F(r.idToken,s,"internal-error");const o=Wa(r.idToken);F(o,s,"internal-error");const{sub:c}=o;return F(n.uid===c,s,"user-mismatch"),Sn._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Qe(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ad(n,e,t=!1){if(Ve(n.app))return Promise.reject(ct(n));const s="signIn",i=await Sd(n,s,e),r=await Sn._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}async function ov(n,e){return Ad(gt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kd(n){const e=gt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function av(n,e,t){if(Ve(n.app))return Promise.reject(ct(n));const s=gt(n),o=await la(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",sv).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&kd(n),u}),c=await Sn._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(c.user),c}function cv(n,e,t){return Ve(n.app)?Promise.reject(ct(n)):ov(Ie(n),is.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&kd(n),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lv(n,e){return At(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uv(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=Ie(n),r={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Jn(s,lv(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const c=s.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=s.displayName,c.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function hv(n,e,t,s){return Ie(n).onIdTokenChanged(e,t,s)}function dv(n,e,t){return Ie(n).beforeAuthStateChanged(e,t)}function fv(n,e,t,s){return Ie(n).onAuthStateChanged(e,t,s)}function pv(n){return Ie(n).signOut()}const _r="__sak";/**
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
 */class Cd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(_r,"1"),this.storage.removeItem(_r),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv=1e3,gv=10;class Rd extends Cd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=wd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const s=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);xy()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,gv):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},mv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rd.type="LOCAL";const yv=Rd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd extends Cd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Pd.type="SESSION";const xd=Pd;/**
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
 */function vv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class $r{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new $r(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const c=Array.from(o).map(async d=>d(t.origin,r)),u=await vv(c);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$r.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class _v{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((c,u)=>{const d=Ja("",20);i.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(v){const T=v;if(T.data.eventId===d)switch(T.data.status){case"ack":clearTimeout(m),r=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),c(T.data.response);break;default:clearTimeout(m),clearTimeout(r),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return window}function wv(n){lt().location.href=n}/**
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
 */function Ld(){return typeof lt().WorkerGlobalScope<"u"&&typeof lt().importScripts=="function"}async function bv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Tv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Ev(){return Ld()?self:null}/**
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
 */const Dd="firebaseLocalStorageDb",Iv=1,wr="firebaseLocalStorage",Nd="fbase_key";class pi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ur(n,e){return n.transaction([wr],e?"readwrite":"readonly").objectStore(wr)}function Sv(){const n=indexedDB.deleteDatabase(Dd);return new pi(n).toPromise()}function ua(){const n=indexedDB.open(Dd,Iv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(wr,{keyPath:Nd})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(wr)?e(s):(s.close(),await Sv(),e(await ua()))})})}async function mu(n,e,t){const s=Ur(n,!0).put({[Nd]:e,value:t});return new pi(s).toPromise()}async function Av(n,e){const t=Ur(n,!1).get(e),s=await new pi(t).toPromise();return s===void 0?null:s.value}function gu(n,e){const t=Ur(n,!0).delete(e);return new pi(t).toPromise()}const kv=800,Cv=3;class Od{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ua(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Cv)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ld()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$r._getInstance(Ev()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await bv(),!this.activeServiceWorker)return;this.sender=new _v(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Tv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ua();return await mu(e,_r,"1"),await gu(e,_r),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>mu(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Av(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>gu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Ur(i,!1).getAll();return new pi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Od.type="LOCAL";const Rv=Od;new di(3e4,6e4);/**
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
 */function Ya(n,e){return e?bt(e):(F(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Xa extends Ka{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Hn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Hn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Pv(n){return Ad(n.auth,new Xa(n),n.bypassAuthState)}function xv(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),rv(t,new Xa(n),n.bypassAuthState)}async function Lv(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),iv(t,new Xa(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pv;case"linkViaPopup":case"linkViaRedirect":return Lv;case"reauthViaPopup":case"reauthViaRedirect":return xv;default:Qe(this.auth,"internal-error")}}resolve(e){Et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv=new di(2e3,1e4);async function Vd(n,e,t){if(Ve(n.app))return Promise.reject(Ze(n,"operation-not-supported-in-this-environment"));const s=gt(n);ad(n,e,Vr);const i=Ya(s,t);return new vn(s,"signInViaPopup",e,i).executeNotNull()}class vn extends Md{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,vn.currentPopupAction&&vn.currentPopupAction.cancel(),vn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){Et(this.filter.length===1,"Popup operations only handle one event");const e=Ja();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Dv.get())};e()}}vn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv="pendingRedirect",Zi=new Map;class Ov extends Md{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Zi.get(this.auth._key());if(!e){try{const s=await Mv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Zi.set(this.auth._key(),e)}return this.bypassAuthState||Zi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Mv(n,e){const t=Ud(e),s=$d(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}async function Vv(n,e){return $d(n)._set(Ud(e),"true")}function $v(n,e){Zi.set(n._key(),e)}function $d(n){return bt(n._redirectPersistence)}function Ud(n){return Xi(Nv,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(n,e,t){return Uv(n,e,t)}async function Uv(n,e,t){if(Ve(n.app))return Promise.reject(ct(n));const s=gt(n);ad(n,e,Vr),await s._initializationPromise;const i=Ya(s,t);return await Vv(i,s),i._openRedirect(s,e,"signInViaRedirect")}async function Fv(n,e){return await gt(n)._initializationPromise,Bd(n,e,!1)}async function Bd(n,e,t=!1){if(Ve(n.app))return Promise.reject(ct(n));const s=gt(n),i=Ya(s,e),o=await new Ov(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv=600*1e3;class jv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Hv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!jd(e)){const i=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(Ze(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bv&&this.cachedEventUids.clear(),this.cachedEventUids.has(yu(e))}saveEventToCache(e){this.cachedEventUids.add(yu(e)),this.lastProcessedEventTime=Date.now()}}function yu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function jd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Hv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jd(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qv(n,e={}){return At(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Wv=/^https?/;async function Gv(n){if(n.config.emulator)return;const{authorizedDomains:e}=await qv(n);for(const t of e)try{if(Kv(t))return}catch{}Qe(n,"unauthorized-domain")}function Kv(n){const e=aa(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!Wv.test(t))return!1;if(zv.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Qv=new di(3e4,6e4);function vu(){const n=lt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Jv(n){return new Promise((e,t)=>{var i,r,o;function s(){vu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vu(),t(Ze(n,"network-request-failed"))},timeout:Qv.get()})}if((r=(i=lt().gapi)==null?void 0:i.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=lt().gapi)!=null&&o.load)s();else{const c=Fy("iframefcb");return lt()[c]=()=>{gapi.load?s():t(Ze(n,"network-request-failed"))},Td(`${Uy()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw er=null,e})}let er=null;function Yv(n){return er=er||Jv(n),er}/**
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
 */const Xv=new di(5e3,15e3),Zv="__/auth/iframe",e_="emulator/auth/iframe",t_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},n_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function s_(n){const e=n.config;F(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?za(e,e_):`https://${n.config.authDomain}/${Zv}`,s={apiKey:e.apiKey,appName:n.name,v:xn},i=n_.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${hi(s).slice(1)}`}async function i_(n){const e=await Yv(n),t=lt().gapi;return F(t,n,"internal-error"),e.open({where:document.body,url:s_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:t_,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Ze(n,"network-request-failed"),c=lt().setTimeout(()=>{r(o)},Xv.get());function u(){lt().clearTimeout(c),i(s)}s.ping(u).then(u,()=>{r(o)})}))}/**
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
 */const r_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},o_=500,a_=600,c_="_blank",l_="http://localhost";class _u{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function u_(n,e,t,s=o_,i=a_){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const u={...r_,width:s.toString(),height:i.toString(),top:r,left:o},d=Pe().toLowerCase();t&&(c=md(d)?c_:t),fd(d)&&(e=e||l_,u.scrollbars="yes");const m=Object.entries(u).reduce((T,[C,D])=>`${T}${C}=${D},`,"");if(Py(d)&&c!=="_self")return h_(e||"",c),new _u(null);const v=window.open(e||"",c,m);F(v,n,"popup-blocked");try{v.focus()}catch{}return new _u(v)}function h_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const d_="__/auth/handler",f_="emulator/auth/handler",p_=encodeURIComponent("fac");async function wu(n,e,t,s,i,r){F(n.config.authDomain,n,"auth-domain-config-required"),F(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:xn,eventId:i};if(e instanceof Vr){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Jm(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,v]of Object.entries({}))o[m]=v}if(e instanceof rs){const m=e.getScopes().filter(v=>v!=="");m.length>0&&(o.scopes=m.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const u=await n._getAppCheckToken(),d=u?`#${p_}=${encodeURIComponent(u)}`:"";return`${m_(n)}?${hi(c).slice(1)}${d}`}function m_({config:n}){return n.emulator?za(n,f_):`https://${n.authDomain}/${d_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo="webStorageSupport";class g_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xd,this._completeRedirectFn=Bd,this._overrideRedirectResult=$v}async _openPopup(e,t,s,i){var o;Et((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await wu(e,t,s,aa(),i);return u_(e,r,Ja())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await wu(e,t,s,aa(),i);return wv(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(Et(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await i_(e),s=new jv(e);return t.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Uo,{type:Uo},i=>{var o;const r=(o=i==null?void 0:i[0])==null?void 0:o[Uo];r!==void 0&&t(!!r),Qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Gv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return wd()||pd()||Ga()}}const y_=g_;var bu="@firebase/auth",Tu="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function w_(n){In(new Qt("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=s.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const u={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bd(n)},d=new My(s,i,r,u);return Wy(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),In(new Qt("auth-internal",e=>{const t=gt(e.getProvider("auth").getImmediate());return(s=>new v_(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),at(bu,Tu,__(n)),at(bu,Tu,"esm2020")}/**
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
 */const b_=300,T_=Xh("authIdTokenMaxAge")||b_;let Eu=null;const E_=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>T_)return;const i=t==null?void 0:t.token;Eu!==i&&(Eu=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function I_(n=ja()){const e=Or(n,"auth");if(e.isInitialized())return e.getImmediate();const t=zy(n,{popupRedirectResolver:y_,persistence:[Rv,yv,xd]}),s=Xh("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=E_(r.toString());dv(t,o,()=>o(t.currentUser)),hv(t,c=>o(c))}}const i=Qh("auth");return i&&Gy(t,`http://${i}`),t}function S_(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Vy({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=Ze("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",S_().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});w_("Browser");const A_={apiKey:"AIzaSyAFURz8fEGSTameAW5YvBKWpr2LXv9Ang0",authDomain:"family-pantry-c65d6.firebaseapp.com",projectId:"family-pantry-c65d6",storageBucket:"family-pantry-c65d6.firebasestorage.app",messagingSenderId:"710701847077",appId:"1:710701847077:web:407a8937330ad2ebcfe5cc"},Za=nd(A_),Je=I_(Za);window._firebaseAuth=Je;const Iu=new _t,br=new qs("apple.com");br.addScope("email");br.addScope("name");let ec=null;const tr=[];function k_(n){return tr.push(n),n(ec),()=>{const e=tr.indexOf(n);e!==-1&&tr.splice(e,1)}}function C_(n){ec=n,tr.forEach(e=>e(n))}fv(Je,n=>{C_(n||null)});Fv(Je).catch(n=>{n.code!=="auth/redirect-cancelled-by-user"&&console.error("Redirect sign-in error:",n)});async function R_(){try{return(await Vd(Je,Iu)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await Fd(Je,Iu),null;throw n}}async function P_(){try{return(await Vd(Je,br)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await Fd(Je,br),null;throw n}}async function x_(n,e){return(await cv(Je,n,e)).user}async function L_(n,e,t){const s=await av(Je,n,e);return t&&await uv(s.user,{displayName:t}),s.user}async function D_(){await pv(Je)}async function Hd(){return Je.currentUser?Je.currentUser.getIdToken():null}function Le(){return ec}async function Fr(n,e,t){const s={"Content-Type":"application/json"},i=await Hd();i&&(s.Authorization=`Bearer ${i}`);const r=await fetch("/api/db",{method:"POST",headers:s,body:JSON.stringify({op:n,path:e,data:t})});if(!(r.headers.get("content-type")||"").includes("application/json"))throw new Error(`/api/db non-JSON response (status ${r.status}) for ${n} ${e}`);return r.json()}async function Fe(n){try{return(await Fr("list",n)).docs||[]}catch(e){return console.warn("dbList:",n,e.message),[]}}async function ee(n,e){return Fr("set",n,e)}async function an(n){return Fr("delete",n)}async function me(n){try{return(await Fr("get",n)).doc||null}catch{return null}}function qd(){return Math.random().toString(36).slice(2,8).toUpperCase()}async function ha(n){var t;const e={name:n.displayName||((t=n.email)==null?void 0:t.split("@")[0])||"User",email:n.email||"",createdAt:new Date().toISOString(),householdIds:[]};return await ee(`users/${n.uid}`,e),e}async function zd(n,e){var o;const t=Le(),s=n,i=qd(),r={name:e||"My Kitchen",ownerUid:n,members:[{uid:n,name:(t==null?void 0:t.displayName)||((o=t==null?void 0:t.email)==null?void 0:o.split("@")[0])||"Owner",role:"owner"}],memberUids:[n],inviteCode:i,createdAt:new Date().toISOString()};try{await ee(`households/${s}`,r),await ee(`household_codes/${i}`,{householdId:s})}catch(c){console.error(`[createHousehold] FAILED to write households/${s}:`,c)}return{hid:s,...r}}async function N_(n){const e=await me(`household_codes/${n.toUpperCase()}`);return(e==null?void 0:e.householdId)||null}async function Wd(n,e){var c;const t=await N_(n);if(!t)return null;const s=await me(`households/${t}`);if(!s)return null;const i=s.members||[],r=s.memberUids||i.map(u=>u.uid);i.find(u=>u.uid===e.uid)||(i.push({uid:e.uid,name:e.displayName||((c=e.email)==null?void 0:c.split("@")[0])||"Member",role:"member"}),r.includes(e.uid)||r.push(e.uid),await ee(`households/${t}`,{...s,members:i,memberUids:r,id:void 0}));const o=await me(`users/${e.uid}`);if(o){const u=o.householdIds||[];u.includes(t)||(u.push(t),await ee(`users/${e.uid}`,{...o,householdIds:u,id:void 0}))}return t}async function O_(n){const e=await me(`households/${n}`);if(!e)return null;if(e.inviteCode)try{await an(`household_codes/${e.inviteCode}`)}catch{}const t=qd();return await ee(`household_codes/${t}`,{householdId:n}),await ee(`households/${n}`,{...e,inviteCode:t,id:void 0}),t}async function M_(n,e){const t=await me(`households/${n}`);if(!t)return;const s=(t.members||[]).filter(r=>r.uid!==e),i=(t.memberUids||[]).filter(r=>r!==e);await ee(`households/${n}`,{...t,members:s,memberUids:i,id:void 0});try{const r=await me(`users/${e}`);if(r){const o=(r.householdIds||[]).filter(c=>c!==n);await ee(`users/${e}`,{...r,householdIds:o,id:void 0})}}catch{}}async function Su(n,e){const t=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog"];for(const s of t){const i=await Fe(`households/${n}/${s}`);for(const r of i){const o=r.id,c={...r};delete c.id,await ee(`households/${e}/${s}/${o}`,c)}}}async function V_(n){var u,d;const e=n.uid;console.log(`[resolveHousehold] ENTER — uid=${e}`);const t=await me(`users/${e}`);if(console.log("[resolveHousehold] userDoc=",t),t){const m=(u=t.householdIds)!=null&&u.length?t.householdIds[0]:e;console.log(`[resolveHousehold] RETURNING USER — hid=${m}, householdIds=`,t.householdIds);const v=localStorage.getItem("ks-h");return console.log(`[resolveHousehold] RETURNING USER — ks-h="${v}", hid="${m}", uid="${e}"`),console.log(`[resolveHousehold] RETURNING USER — migration condition: oldHid=${!!v}, oldHid!==hid=${v!==m}, oldHid!==uid=${v!==e}`),v&&v!==m&&v!==e?(console.log(`[resolveHousehold] LATE MIGRATION TRIGGERED: ${v} → ${m}`),await Su(v,m),localStorage.removeItem("ks-h"),console.log("[resolveHousehold] Late migration DONE, ks-h removed")):console.log("[resolveHousehold] RETURNING USER — NO migration needed"),m}console.log("[resolveHousehold] FIRST-TIME LOGIN — no userDoc found");const s=localStorage.getItem("ks-h"),i=s&&s!==e;console.log(`[resolveHousehold] FIRST-TIME — ks-h="${s}", hasOldData=${i}`);const r=((d=p.cfg)==null?void 0:d.name)||"My Kitchen";console.log(`[resolveHousehold] FIRST-TIME — creating household, cfgName="${r}"`),await zd(e,i?r:"My Kitchen"),i&&(console.log(`[resolveHousehold] FIRST-TIME MIGRATION: ${s} → ${e}`),await Su(s,e),console.log("[resolveHousehold] FIRST-TIME MIGRATION DONE"));const o=await ha(n);o.householdIds=[e],await ee(`users/${e}`,o),console.log("[resolveHousehold] User profile created & saved"),localStorage.removeItem("ks-h");const c=Ue("ks-hhs");if(c){const m=c.filter(v=>v!==s);m.includes(e)||m.push(e),localStorage.setItem("ks-hhs",JSON.stringify(m))}return console.log(`[resolveHousehold] EXIT — returning uid=${e}`),e}async function An(n,e){e?(p.mp[n]=e,await ee(`households/${p.hid}/mealplan/${n}`,{date:n,meal:e})):(delete p.mp[n],await an(`households/${p.hid}/mealplan/${n}`))}async function Br(){await ee(`households/${p.hid}/settings/config`,p.cfg)}async function Gd(n,e){const t={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:e||da(),loggedAt:new Date().toISOString()};p.cookLog.unshift(t),p.cookLog.length>200&&(p.cookLog=p.cookLog.slice(0,200)),await ee(`households/${p.hid}/cooklog/${t.id}`,t)}async function $_(n){if(p.wasteLog.find(t=>t.name===n&&t.date===da()))return;const e={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:da(),loggedAt:new Date().toISOString()};p.wasteLog.unshift(e),p.wasteLog.length>100&&(p.wasteLog=p.wasteLog.slice(0,100)),await ee(`households/${p.hid}/wastelog/${e.id}`,e)}async function U_(){try{try{const r=await me(`households/${p.hid}`);r&&r.inviteCode&&(await me(`household_codes/${r.inviteCode}`)||(await ee(`household_codes/${r.inviteCode}`,{householdId:p.hid}),console.log(`[backfill] Created household_codes/${r.inviteCode} for household ${p.hid}`)))}catch(r){console.warn("[backfill] household_codes backfill skipped:",r.message)}const e=(await Fe(`households/${p.hid}/settings`)).find(r=>r.id==="config");if(e)p.cfg={...dr,...e};else{const r=Ue("ks-c");p.cfg={...dr,...r||{}},await Br(),r&&localStorage.removeItem("ks-c")}const t=await Fe(`households/${p.hid}/mealplan`);if(p.mp={},t.forEach(r=>{r.date&&r.meal&&(p.mp[r.date]=r.meal)}),!t.length){const r=Ue("ks-m");if(r&&Object.keys(r).length){p.mp=r;for(const[o,c]of Object.entries(r))await An(o,c);localStorage.removeItem("ks-m")}}const s=await Fe(`households/${p.hid}/cooklog`);if(s.length)p.cookLog=s.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=Ue("ks-cooklog");if(r&&r.length){p.cookLog=r.map((o,c)=>({id:o.id||(Date.now()-c).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of p.cookLog)await ee(`households/${p.hid}/cooklog/${o.id}`,o);localStorage.removeItem("ks-cooklog")}}const i=await Fe(`households/${p.hid}/wastelog`);if(i.length)p.wasteLog=i.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=Ue("ks-waste");if(r&&r.length){p.wasteLog=r.map((o,c)=>({id:o.id||(Date.now()-c).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of p.wasteLog)await ee(`households/${p.hid}/wastelog/${o.id}`,o);localStorage.removeItem("ks-waste")}}}catch(n){console.error("loadFirestoreData error:",n)}}let zs=0;function os(){zs++,zs===1&&window._pollIntervalId&&(clearInterval(window._pollIntervalId),window._pollIntervalId=null)}function as(){zs--,zs<=0&&(zs=0,window._pollFn&&!window._pollIntervalId&&(window._pollFn(),window._pollIntervalId=setInterval(window._pollFn,3e4)))}const $={renderAll:null,renderSum:null,renderRecs:null,renderShop:null};function le(n){var s;const e=document.getElementById("sdot"),t=document.getElementById("slb");e&&(e.className="sdot "+n),t&&(t.textContent=n==="synced"?"🏠 "+(((s=p.cfg)==null?void 0:s.name)||p.hid):n==="syncing"?"Syncing…":"Sync error")}async function De(n){var e,t;le("syncing"),os();try{const s=!p.inv.find(i=>i.id===n.id);p.inv=[...p.inv.filter(i=>i.id!==n.id),n],(e=$.renderAll)==null||e.call($),(t=$.renderSum)==null||t.call($),await ee(`households/${p.hid}/inventory/${n.id}`,n),s&&tc("added",n.name+" to inventory"),le("synced")}catch(s){console.error(s),le("error")}finally{as()}}async function jr(n){var e,t;le("syncing"),os();try{const s=p.inv.find(i=>i.id===n);p.inv=p.inv.filter(i=>i.id!==n),(e=$.renderAll)==null||e.call($),(t=$.renderSum)==null||t.call($),await an(`households/${p.hid}/inventory/${n}`),s&&tc("removed",s.name+" from inventory"),le("synced")}catch(s){console.error(s),le("error")}finally{as()}}async function Jt(n){var e,t;os();try{p.recs=[...p.recs.filter(s=>s.id!==n.id),n],(e=$.renderRecs)==null||e.call($),(t=$.renderSum)==null||t.call($),await ee(`households/${p.hid}/recipes/${n.id}`,n)}catch(s){console.error(s)}finally{as()}}async function F_(n){var e,t;os();try{p.recs=p.recs.filter(s=>s.id!==n),(e=$.renderRecs)==null||e.call($),(t=$.renderSum)==null||t.call($),await an(`households/${p.hid}/recipes/${n}`)}catch(s){console.error(s)}finally{as()}}async function Se(n){var e,t;os();try{const s=!p.shop.find(i=>i.id===n.id);p.shop=[...p.shop.filter(i=>i.id!==n.id),n],(e=$.renderShop)==null||e.call($),(t=$.renderSum)==null||t.call($),await ee(`households/${p.hid}/shopping/${n.id}`,n),s&&tc("added",n.name+" to shopping list")}catch(s){console.error(s)}finally{as()}}async function mi(n){var e,t;os();try{p.shop=p.shop.filter(s=>s.id!==n),(e=$.renderShop)==null||e.call($),(t=$.renderSum)==null||t.call($),await an(`households/${p.hid}/shopping/${n}`)}catch(s){console.error(s)}finally{as()}}async function B_(n,e,t){var r;const s=n.id,i={title:n.name,ingredients:n.description||"",steps:n.steps||"",tags:n.tags||[],cuisine:n.cuisine||"",authorName:e||"Anonymous",authorUid:((r=Le())==null?void 0:r.uid)||"",householdId:t||p.hid,createdAt:new Date().toISOString(),likes:0};return await ee(`public_recipes/${s}`,i),{id:s,...i}}async function j_(n){await an(`public_recipes/${n}`)}async function H_(){return Fe("public_recipes")}async function q_(n,e){var o;const t=(o=Le())==null?void 0:o.uid;if(!t)return;const s=`public_recipes/${n}/likes/${t}`;e?await an(s):await ee(s,{likedAt:new Date().toISOString()});const i=await Fe(`public_recipes/${n}/likes`),r=await me(`public_recipes/${n}`);r&&await ee(`public_recipes/${n}`,{...r,likes:i.length,id:void 0})}async function z_(n,e,t){var o;const s=(o=Le())==null?void 0:o.uid;if(!s||!e.trim())return;const i="cmt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),r={text:e.trim(),authorName:t,authorUid:s,createdAt:new Date().toISOString()};return await ee(`public_recipes/${n}/comments/${i}`,r),{id:i,...r}}async function W_(n){return Fe(`public_recipes/${n}/comments`)}async function G_(n){var s;const e=(s=Le())==null?void 0:s.uid;return e?!!await me(`public_recipes/${n}/likes/${e}`):!1}async function K_(n){const t={id:"rec-"+Date.now(),name:n.title,description:n.ingredients||"",notes:n.steps||"",tags:n.tags||[],rating:0,favorited:!1,source:"Community",sourceUrl:null,cookCount:0,savedAt:new Date().toLocaleDateString()};return await Jt(t),t}async function tc(n,e){if(!p.hid||!e)return;const t=localStorage.getItem("ks-who")||"Someone",s="act-"+Date.now().toString(36)+Math.random().toString(36).slice(2),i={memberName:t,action:n,itemName:e,timestamp:new Date().toISOString()};try{await ee(`households/${p.hid}/activity/${s}`,i),Q_()}catch{}}async function Q_(){try{const n=await Fe(`households/${p.hid}/activity`),e=Date.now()-10080*60*1e3;for(const t of n)t.timestamp&&new Date(t.timestamp).getTime()<e&&await an(`households/${p.hid}/activity/${t.id}`)}catch{}}async function J_(){try{return(await Fe(`households/${p.hid}/activity`)).sort((e,t)=>new Date(t.timestamp||0)-new Date(e.timestamp||0)).slice(0,10)}catch{return[]}}function da(){return new Date().toISOString().split("T")[0]}function f(n){return document.getElementById(n)}function Ft(){return new Date().toISOString().split("T")[0]}function cs(){const n=new Date;n.setHours(0,0,0,0);const e=new Date(n);return e.setDate(n.getDate()-n.getDay()),Array.from({length:7},(t,s)=>{const i=new Date(e);return i.setDate(e.getDate()+s),i})}function Y_(){const n=new Date;return n.setDate(n.getDate()+1),n.toISOString().split("T")[0]}function dt(n){if(!n)return null;const e=new Date;e.setHours(0,0,0,0);const t=new Date(n+"T00:00:00"),s=Math.round((t-e)/864e5);return s<0?{c:"expired",l:"Expired"}:s===0?{c:"expiring",l:"Expires today"}:s<=7?{c:"expiring",l:`Expires in ${s}d`}:{c:"ok",l:t.toLocaleDateString("en-US",{month:"short",day:"numeric"})}}function nc(n){return{fridge:"🌡 Fridge",freezer:"🧊 Freezer",pantry:"🥫 Pantry"}[n]||n}const sc={Produce:"🥦",Proteins:"🍗",Dairy:"🧀",Grains:"🌾",Condiments:"🧴",Snacks:"🍿",Beverages:"🥤",Frozen:"❄️",General:"📦",Imported:"📥"};function Yt(n){const e=(n.name||"").toLowerCase(),t=(n.category||"").toLowerCase();return t.includes("produce")||t.includes("vegetable")||t.includes("fruit")||e.match(/apple|banana|broccoli|carrot|celery|cabbage|tomato|onion|garlic|jalap|spinach|mushroom|squash|lettuce|cucumber|pepper/)?"Produce":t.includes("protein")||t.includes("meat")||t.includes("seafood")||t.includes("poultry")||e.match(/chicken|beef|lamb|turkey|salmon|cod|tuna|fish|steak|pork|shrimp/)?"Proteins":t.includes("dairy")||t.includes("egg")||e.match(/egg|butter|cheese|milk|cream|yogurt|ghee/)?"Dairy":t.includes("grain")||t.includes("bread")||t.includes("pasta")||e.match(/rice|pasta|bread|flour|oat|cereal|grain|noodle|tortilla/)?"Grains":t.includes("condiment")||t.includes("sauce")||e.match(/sauce|ketchup|mustard|oil|vinegar|salt|pepper|spice|herb|seasoning|mayo/)?"Condiments":n.location==="freezer"?"Frozen":"General"}function X_(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/^[-•]\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/\n/g,"<br>")}let Fo=null;function P(n){const e=f("notif");e&&(e.textContent=n,e.style.display="block",e.style.animation="none",e.offsetWidth,e.style.animation="fn 2.5s ease forwards",Fo&&clearTimeout(Fo),Fo=setTimeout(()=>e.style.display="none",2500))}function kt(n){var e;(e=f("ov-"+n))==null||e.classList.add("active")}function xe(n){var e;(e=f("ov-"+n))==null||e.classList.remove("active")}function Ws(n,e){const t=f(n);t&&t.querySelectorAll(".star").forEach((s,i)=>{s.textContent=i<e?"★":"☆",s.classList.toggle("on",i<e)})}function ic(n){const e=n.toLowerCase();return/frozen|ice cream|pizza|nugget|waffle|tater|edamame|popsicle/.test(e)?"freezer":/milk|cheese|yogurt|butter|cream|egg|meat|chicken|beef|pork|fish|salmon|shrimp|tofu|deli|bacon|sausage|produce|lettuce|spinach|berry|berries|fruit|vegetable|carrot|broccoli|juice/.test(e)?"fridge":"pantry"}const Z_={Produce:["apple","banana","carrot","celery","onion","garlic","tomato","lettuce","cucumber","pepper","broccoli","spinach","mushroom","lemon","lime","herb","cabbage","squash","jalap","avocado","potato","ginger"],"Meat & Fish":["chicken","beef","lamb","turkey","salmon","cod","tuna","fish","steak","shrimp","pork","bacon","sausage","ground"],"Dairy & Eggs":["egg","butter","cheese","milk","cream","yogurt","ghee","kefir"],Frozen:["frozen","ice cream","pizza","nugget","waffle","edamame","okra","lima","broccoli floret"],Pantry:["rice","pasta","flour","oil","vinegar","sauce","spice","salt","pepper","sugar","honey","oat","bread","can","bean","lentil","chickpea","stock","broth"],"Snacks & Drinks":["chip","cracker","cookie","juice","soda","water","tea","coffee","snack","nut","seed"]};function ew(n){const e=n.toLowerCase();for(const[t,s]of Object.entries(Z_))if(s.some(i=>e.includes(i)))return t;return"Other"}var Au=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zt,Kd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function w(){}w.prototype=y.prototype,b.F=y.prototype,b.prototype=new w,b.prototype.constructor=b,b.D=function(I,E,A){for(var _=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)_[Be-2]=arguments[Be];return y.prototype[E].apply(I,_)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,y,w){w||(w=0);const I=Array(16);if(typeof y=="string")for(var E=0;E<16;++E)I[E]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(E=0;E<16;++E)I[E]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=b.g[0],w=b.g[1],E=b.g[2];let A=b.g[3],_;_=y+(A^w&(E^A))+I[0]+3614090360&4294967295,y=w+(_<<7&4294967295|_>>>25),_=A+(E^y&(w^E))+I[1]+3905402710&4294967295,A=y+(_<<12&4294967295|_>>>20),_=E+(w^A&(y^w))+I[2]+606105819&4294967295,E=A+(_<<17&4294967295|_>>>15),_=w+(y^E&(A^y))+I[3]+3250441966&4294967295,w=E+(_<<22&4294967295|_>>>10),_=y+(A^w&(E^A))+I[4]+4118548399&4294967295,y=w+(_<<7&4294967295|_>>>25),_=A+(E^y&(w^E))+I[5]+1200080426&4294967295,A=y+(_<<12&4294967295|_>>>20),_=E+(w^A&(y^w))+I[6]+2821735955&4294967295,E=A+(_<<17&4294967295|_>>>15),_=w+(y^E&(A^y))+I[7]+4249261313&4294967295,w=E+(_<<22&4294967295|_>>>10),_=y+(A^w&(E^A))+I[8]+1770035416&4294967295,y=w+(_<<7&4294967295|_>>>25),_=A+(E^y&(w^E))+I[9]+2336552879&4294967295,A=y+(_<<12&4294967295|_>>>20),_=E+(w^A&(y^w))+I[10]+4294925233&4294967295,E=A+(_<<17&4294967295|_>>>15),_=w+(y^E&(A^y))+I[11]+2304563134&4294967295,w=E+(_<<22&4294967295|_>>>10),_=y+(A^w&(E^A))+I[12]+1804603682&4294967295,y=w+(_<<7&4294967295|_>>>25),_=A+(E^y&(w^E))+I[13]+4254626195&4294967295,A=y+(_<<12&4294967295|_>>>20),_=E+(w^A&(y^w))+I[14]+2792965006&4294967295,E=A+(_<<17&4294967295|_>>>15),_=w+(y^E&(A^y))+I[15]+1236535329&4294967295,w=E+(_<<22&4294967295|_>>>10),_=y+(E^A&(w^E))+I[1]+4129170786&4294967295,y=w+(_<<5&4294967295|_>>>27),_=A+(w^E&(y^w))+I[6]+3225465664&4294967295,A=y+(_<<9&4294967295|_>>>23),_=E+(y^w&(A^y))+I[11]+643717713&4294967295,E=A+(_<<14&4294967295|_>>>18),_=w+(A^y&(E^A))+I[0]+3921069994&4294967295,w=E+(_<<20&4294967295|_>>>12),_=y+(E^A&(w^E))+I[5]+3593408605&4294967295,y=w+(_<<5&4294967295|_>>>27),_=A+(w^E&(y^w))+I[10]+38016083&4294967295,A=y+(_<<9&4294967295|_>>>23),_=E+(y^w&(A^y))+I[15]+3634488961&4294967295,E=A+(_<<14&4294967295|_>>>18),_=w+(A^y&(E^A))+I[4]+3889429448&4294967295,w=E+(_<<20&4294967295|_>>>12),_=y+(E^A&(w^E))+I[9]+568446438&4294967295,y=w+(_<<5&4294967295|_>>>27),_=A+(w^E&(y^w))+I[14]+3275163606&4294967295,A=y+(_<<9&4294967295|_>>>23),_=E+(y^w&(A^y))+I[3]+4107603335&4294967295,E=A+(_<<14&4294967295|_>>>18),_=w+(A^y&(E^A))+I[8]+1163531501&4294967295,w=E+(_<<20&4294967295|_>>>12),_=y+(E^A&(w^E))+I[13]+2850285829&4294967295,y=w+(_<<5&4294967295|_>>>27),_=A+(w^E&(y^w))+I[2]+4243563512&4294967295,A=y+(_<<9&4294967295|_>>>23),_=E+(y^w&(A^y))+I[7]+1735328473&4294967295,E=A+(_<<14&4294967295|_>>>18),_=w+(A^y&(E^A))+I[12]+2368359562&4294967295,w=E+(_<<20&4294967295|_>>>12),_=y+(w^E^A)+I[5]+4294588738&4294967295,y=w+(_<<4&4294967295|_>>>28),_=A+(y^w^E)+I[8]+2272392833&4294967295,A=y+(_<<11&4294967295|_>>>21),_=E+(A^y^w)+I[11]+1839030562&4294967295,E=A+(_<<16&4294967295|_>>>16),_=w+(E^A^y)+I[14]+4259657740&4294967295,w=E+(_<<23&4294967295|_>>>9),_=y+(w^E^A)+I[1]+2763975236&4294967295,y=w+(_<<4&4294967295|_>>>28),_=A+(y^w^E)+I[4]+1272893353&4294967295,A=y+(_<<11&4294967295|_>>>21),_=E+(A^y^w)+I[7]+4139469664&4294967295,E=A+(_<<16&4294967295|_>>>16),_=w+(E^A^y)+I[10]+3200236656&4294967295,w=E+(_<<23&4294967295|_>>>9),_=y+(w^E^A)+I[13]+681279174&4294967295,y=w+(_<<4&4294967295|_>>>28),_=A+(y^w^E)+I[0]+3936430074&4294967295,A=y+(_<<11&4294967295|_>>>21),_=E+(A^y^w)+I[3]+3572445317&4294967295,E=A+(_<<16&4294967295|_>>>16),_=w+(E^A^y)+I[6]+76029189&4294967295,w=E+(_<<23&4294967295|_>>>9),_=y+(w^E^A)+I[9]+3654602809&4294967295,y=w+(_<<4&4294967295|_>>>28),_=A+(y^w^E)+I[12]+3873151461&4294967295,A=y+(_<<11&4294967295|_>>>21),_=E+(A^y^w)+I[15]+530742520&4294967295,E=A+(_<<16&4294967295|_>>>16),_=w+(E^A^y)+I[2]+3299628645&4294967295,w=E+(_<<23&4294967295|_>>>9),_=y+(E^(w|~A))+I[0]+4096336452&4294967295,y=w+(_<<6&4294967295|_>>>26),_=A+(w^(y|~E))+I[7]+1126891415&4294967295,A=y+(_<<10&4294967295|_>>>22),_=E+(y^(A|~w))+I[14]+2878612391&4294967295,E=A+(_<<15&4294967295|_>>>17),_=w+(A^(E|~y))+I[5]+4237533241&4294967295,w=E+(_<<21&4294967295|_>>>11),_=y+(E^(w|~A))+I[12]+1700485571&4294967295,y=w+(_<<6&4294967295|_>>>26),_=A+(w^(y|~E))+I[3]+2399980690&4294967295,A=y+(_<<10&4294967295|_>>>22),_=E+(y^(A|~w))+I[10]+4293915773&4294967295,E=A+(_<<15&4294967295|_>>>17),_=w+(A^(E|~y))+I[1]+2240044497&4294967295,w=E+(_<<21&4294967295|_>>>11),_=y+(E^(w|~A))+I[8]+1873313359&4294967295,y=w+(_<<6&4294967295|_>>>26),_=A+(w^(y|~E))+I[15]+4264355552&4294967295,A=y+(_<<10&4294967295|_>>>22),_=E+(y^(A|~w))+I[6]+2734768916&4294967295,E=A+(_<<15&4294967295|_>>>17),_=w+(A^(E|~y))+I[13]+1309151649&4294967295,w=E+(_<<21&4294967295|_>>>11),_=y+(E^(w|~A))+I[4]+4149444226&4294967295,y=w+(_<<6&4294967295|_>>>26),_=A+(w^(y|~E))+I[11]+3174756917&4294967295,A=y+(_<<10&4294967295|_>>>22),_=E+(y^(A|~w))+I[2]+718787259&4294967295,E=A+(_<<15&4294967295|_>>>17),_=w+(A^(E|~y))+I[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,b.g[2]=b.g[2]+E&4294967295,b.g[3]=b.g[3]+A&4294967295}s.prototype.v=function(b,y){y===void 0&&(y=b.length);const w=y-this.blockSize,I=this.C;let E=this.h,A=0;for(;A<y;){if(E==0)for(;A<=w;)i(this,b,A),A+=this.blockSize;if(typeof b=="string"){for(;A<y;)if(I[E++]=b.charCodeAt(A++),E==this.blockSize){i(this,I),E=0;break}}else for(;A<y;)if(I[E++]=b[A++],E==this.blockSize){i(this,I),E=0;break}}this.h=E,this.o+=y},s.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;y=this.o*8;for(var w=b.length-8;w<b.length;++w)b[w]=y&255,y/=256;for(this.v(b),b=Array(16),y=0,w=0;w<4;++w)for(let I=0;I<32;I+=8)b[y++]=this.g[w]>>>I&255;return b};function r(b,y){var w=c;return Object.prototype.hasOwnProperty.call(w,b)?w[b]:w[b]=y(b)}function o(b,y){this.h=y;const w=[];let I=!0;for(let E=b.length-1;E>=0;E--){const A=b[E]|0;I&&A==y||(w[E]=A,I=!1)}this.g=w}var c={};function u(b){return-128<=b&&b<128?r(b,function(y){return new o([y|0],y<0?-1:0)}):new o([b|0],b<0?-1:0)}function d(b){if(isNaN(b)||!isFinite(b))return v;if(b<0)return N(d(-b));const y=[];let w=1;for(let I=0;b>=w;I++)y[I]=b/w|0,w*=4294967296;return new o(y,0)}function m(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return N(m(b.substring(1),y));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=d(Math.pow(y,8));let I=v;for(let A=0;A<b.length;A+=8){var E=Math.min(8,b.length-A);const _=parseInt(b.substring(A,A+E),y);E<8?(E=d(Math.pow(y,E)),I=I.j(E).add(d(_))):(I=I.j(w),I=I.add(d(_)))}return I}var v=u(0),T=u(1),C=u(16777216);n=o.prototype,n.m=function(){if(M(this))return-N(this).m();let b=0,y=1;for(let w=0;w<this.g.length;w++){const I=this.i(w);b+=(I>=0?I:4294967296+I)*y,y*=4294967296}return b},n.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(D(this))return"0";if(M(this))return"-"+N(this).toString(b);const y=d(Math.pow(b,6));var w=this;let I="";for(;;){const E=B(w,y).g;w=z(w,E.j(y));let A=((w.g.length>0?w.g[0]:w.h)>>>0).toString(b);if(w=E,D(w))return A+I;for(;A.length<6;)A="0"+A;I=A+I}},n.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function D(b){if(b.h!=0)return!1;for(let y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function M(b){return b.h==-1}n.l=function(b){return b=z(this,b),M(b)?-1:D(b)?0:1};function N(b){const y=b.g.length,w=[];for(let I=0;I<y;I++)w[I]=~b.g[I];return new o(w,~b.h).add(T)}n.abs=function(){return M(this)?N(this):this},n.add=function(b){const y=Math.max(this.g.length,b.g.length),w=[];let I=0;for(let E=0;E<=y;E++){let A=I+(this.i(E)&65535)+(b.i(E)&65535),_=(A>>>16)+(this.i(E)>>>16)+(b.i(E)>>>16);I=_>>>16,A&=65535,_&=65535,w[E]=_<<16|A}return new o(w,w[w.length-1]&-2147483648?-1:0)};function z(b,y){return b.add(N(y))}n.j=function(b){if(D(this)||D(b))return v;if(M(this))return M(b)?N(this).j(N(b)):N(N(this).j(b));if(M(b))return N(this.j(N(b)));if(this.l(C)<0&&b.l(C)<0)return d(this.m()*b.m());const y=this.g.length+b.g.length,w=[];for(var I=0;I<2*y;I++)w[I]=0;for(I=0;I<this.g.length;I++)for(let E=0;E<b.g.length;E++){const A=this.i(I)>>>16,_=this.i(I)&65535,Be=b.i(E)>>>16,cn=b.i(E)&65535;w[2*I+2*E]+=_*cn,G(w,2*I+2*E),w[2*I+2*E+1]+=A*cn,G(w,2*I+2*E+1),w[2*I+2*E+1]+=_*Be,G(w,2*I+2*E+1),w[2*I+2*E+2]+=A*Be,G(w,2*I+2*E+2)}for(b=0;b<y;b++)w[b]=w[2*b+1]<<16|w[2*b];for(b=y;b<2*y;b++)w[b]=0;return new o(w,0)};function G(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function V(b,y){this.g=b,this.h=y}function B(b,y){if(D(y))throw Error("division by zero");if(D(b))return new V(v,v);if(M(b))return y=B(N(b),y),new V(N(y.g),N(y.h));if(M(y))return y=B(b,N(y)),new V(N(y.g),y.h);if(b.g.length>30){if(M(b)||M(y))throw Error("slowDivide_ only works with positive integers.");for(var w=T,I=y;I.l(b)<=0;)w=K(w),I=K(I);var E=te(w,1),A=te(I,1);for(I=te(I,2),w=te(w,2);!D(I);){var _=A.add(I);_.l(b)<=0&&(E=E.add(w),A=_),I=te(I,1),w=te(w,1)}return y=z(b,E.j(y)),new V(E,y)}for(E=v;b.l(y)>=0;){for(w=Math.max(1,Math.floor(b.m()/y.m())),I=Math.ceil(Math.log(w)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),A=d(w),_=A.j(y);M(_)||_.l(b)>0;)w-=I,A=d(w),_=A.j(y);D(A)&&(A=T),E=E.add(A),b=z(b,_)}return new V(E,b)}n.B=function(b){return B(this,b).h},n.and=function(b){const y=Math.max(this.g.length,b.g.length),w=[];for(let I=0;I<y;I++)w[I]=this.i(I)&b.i(I);return new o(w,this.h&b.h)},n.or=function(b){const y=Math.max(this.g.length,b.g.length),w=[];for(let I=0;I<y;I++)w[I]=this.i(I)|b.i(I);return new o(w,this.h|b.h)},n.xor=function(b){const y=Math.max(this.g.length,b.g.length),w=[];for(let I=0;I<y;I++)w[I]=this.i(I)^b.i(I);return new o(w,this.h^b.h)};function K(b){const y=b.g.length+1,w=[];for(let I=0;I<y;I++)w[I]=b.i(I)<<1|b.i(I-1)>>>31;return new o(w,b.h)}function te(b,y){const w=y>>5;y%=32;const I=b.g.length-w,E=[];for(let A=0;A<I;A++)E[A]=y>0?b.i(A+w)>>>y|b.i(A+w+1)<<32-y:b.i(A+w);return new o(E,b.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Kd=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=m,zt=o}).apply(typeof Au<"u"?Au:typeof self<"u"?self:typeof window<"u"?window:{});var Fi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qd,$s,Jd,nr,fa,Yd,Xd,Zd;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fi=="object"&&Fi];for(var l=0;l<a.length;++l){var h=a[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var s=t(this);function i(a,l){if(l)e:{var h=s;a=a.split(".");for(var g=0;g<a.length-1;g++){var S=a[g];if(!(S in h))break e;h=h[S]}a=a[a.length-1],g=h[a],l=l(g),l!=g&&l!=null&&e(h,a,{configurable:!0,writable:!0,value:l})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(l){var h=[],g;for(g in l)Object.prototype.hasOwnProperty.call(l,g)&&h.push([g,l[g]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},o=this||self;function c(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function u(a,l,h){return a.call.apply(a.bind,arguments)}function d(a,l,h){return d=u,d.apply(null,arguments)}function m(a,l){var h=Array.prototype.slice.call(arguments,1);return function(){var g=h.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function v(a,l){function h(){}h.prototype=l.prototype,a.Z=l.prototype,a.prototype=new h,a.prototype.constructor=a,a.Ob=function(g,S,k){for(var x=Array(arguments.length-2),W=2;W<arguments.length;W++)x[W-2]=arguments[W];return l.prototype[S].apply(g,x)}}var T=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function C(a){const l=a.length;if(l>0){const h=Array(l);for(let g=0;g<l;g++)h[g]=a[g];return h}return[]}function D(a,l){for(let g=1;g<arguments.length;g++){const S=arguments[g];var h=typeof S;if(h=h!="object"?h:S?Array.isArray(S)?"array":h:"null",h=="array"||h=="object"&&typeof S.length=="number"){h=a.length||0;const k=S.length||0;a.length=h+k;for(let x=0;x<k;x++)a[h+x]=S[x]}else a.push(S)}}class M{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function N(a){o.setTimeout(()=>{throw a},0)}function z(){var a=b;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class G{constructor(){this.h=this.g=null}add(l,h){const g=V.get();g.set(l,h),this.h?this.h.next=g:this.g=g,this.h=g}}var V=new M(()=>new B,a=>a.reset());class B{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let K,te=!1,b=new G,y=()=>{const a=Promise.resolve(void 0);K=()=>{a.then(w)}};function w(){for(var a;a=z();){try{a.h.call(a.g)}catch(h){N(h)}var l=V;l.j(a),l.h<100&&(l.h++,a.next=l.g,l.g=a)}te=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const h=()=>{};o.addEventListener("test",h,l),o.removeEventListener("test",h,l)}catch{}return a})();function _(a){return/^[\s\xa0]*$/.test(a)}function Be(a,l){E.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,l)}v(Be,E),Be.prototype.init=function(a,l){const h=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget,l||(h=="mouseover"?l=a.fromElement:h=="mouseout"&&(l=a.toElement)),this.relatedTarget=l,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Be.Z.h.call(this)},Be.prototype.h=function(){Be.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var cn="closure_listenable_"+(Math.random()*1e6|0),Qp=0;function Jp(a,l,h,g,S){this.listener=a,this.proxy=null,this.src=l,this.type=h,this.capture=!!g,this.ha=S,this.key=++Qp,this.da=this.fa=!1}function Ii(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Si(a,l,h){for(const g in a)l.call(h,a[g],g,a)}function Yp(a,l){for(const h in a)l.call(void 0,a[h],h,a)}function Gc(a){const l={};for(const h in a)l[h]=a[h];return l}const Kc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qc(a,l){let h,g;for(let S=1;S<arguments.length;S++){g=arguments[S];for(h in g)a[h]=g[h];for(let k=0;k<Kc.length;k++)h=Kc[k],Object.prototype.hasOwnProperty.call(g,h)&&(a[h]=g[h])}}function Ai(a){this.src=a,this.g={},this.h=0}Ai.prototype.add=function(a,l,h,g,S){const k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);const x=lo(a,l,g,S);return x>-1?(l=a[x],h||(l.fa=!1)):(l=new Jp(l,this.src,k,!!g,S),l.fa=h,a.push(l)),l};function co(a,l){const h=l.type;if(h in a.g){var g=a.g[h],S=Array.prototype.indexOf.call(g,l,void 0),k;(k=S>=0)&&Array.prototype.splice.call(g,S,1),k&&(Ii(l),a.g[h].length==0&&(delete a.g[h],a.h--))}}function lo(a,l,h,g){for(let S=0;S<a.length;++S){const k=a[S];if(!k.da&&k.listener==l&&k.capture==!!h&&k.ha==g)return S}return-1}var uo="closure_lm_"+(Math.random()*1e6|0),ho={};function Jc(a,l,h,g,S){if(Array.isArray(l)){for(let k=0;k<l.length;k++)Jc(a,l[k],h,g,S);return null}return h=Zc(h),a&&a[cn]?a.J(l,h,c(g)?!!g.capture:!1,S):Xp(a,l,h,!1,g,S)}function Xp(a,l,h,g,S,k){if(!l)throw Error("Invalid event type");const x=c(S)?!!S.capture:!!S;let W=po(a);if(W||(a[uo]=W=new Ai(a)),h=W.add(l,h,g,x,k),h.proxy)return h;if(g=Zp(),h.proxy=g,g.src=a,g.listener=h,a.addEventListener)A||(S=x),S===void 0&&(S=!1),a.addEventListener(l.toString(),g,S);else if(a.attachEvent)a.attachEvent(Xc(l.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Zp(){function a(h){return l.call(a.src,a.listener,h)}const l=em;return a}function Yc(a,l,h,g,S){if(Array.isArray(l))for(var k=0;k<l.length;k++)Yc(a,l[k],h,g,S);else g=c(g)?!!g.capture:!!g,h=Zc(h),a&&a[cn]?(a=a.i,k=String(l).toString(),k in a.g&&(l=a.g[k],h=lo(l,h,g,S),h>-1&&(Ii(l[h]),Array.prototype.splice.call(l,h,1),l.length==0&&(delete a.g[k],a.h--)))):a&&(a=po(a))&&(l=a.g[l.toString()],a=-1,l&&(a=lo(l,h,g,S)),(h=a>-1?l[a]:null)&&fo(h))}function fo(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[cn])co(l.i,a);else{var h=a.type,g=a.proxy;l.removeEventListener?l.removeEventListener(h,g,a.capture):l.detachEvent?l.detachEvent(Xc(h),g):l.addListener&&l.removeListener&&l.removeListener(g),(h=po(l))?(co(h,a),h.h==0&&(h.src=null,l[uo]=null)):Ii(a)}}}function Xc(a){return a in ho?ho[a]:ho[a]="on"+a}function em(a,l){if(a.da)a=!0;else{l=new Be(l,this);const h=a.listener,g=a.ha||a.src;a.fa&&fo(a),a=h.call(g,l)}return a}function po(a){return a=a[uo],a instanceof Ai?a:null}var mo="__closure_events_fn_"+(Math.random()*1e9>>>0);function Zc(a){return typeof a=="function"?a:(a[mo]||(a[mo]=function(l){return a.handleEvent(l)}),a[mo])}function Ae(){I.call(this),this.i=new Ai(this),this.M=this,this.G=null}v(Ae,I),Ae.prototype[cn]=!0,Ae.prototype.removeEventListener=function(a,l,h,g){Yc(this,a,l,h,g)};function Ne(a,l){var h,g=a.G;if(g)for(h=[];g;g=g.G)h.push(g);if(a=a.M,g=l.type||l,typeof l=="string")l=new E(l,a);else if(l instanceof E)l.target=l.target||a;else{var S=l;l=new E(g,a),Qc(l,S)}S=!0;let k,x;if(h)for(x=h.length-1;x>=0;x--)k=l.g=h[x],S=ki(k,g,!0,l)&&S;if(k=l.g=a,S=ki(k,g,!0,l)&&S,S=ki(k,g,!1,l)&&S,h)for(x=0;x<h.length;x++)k=l.g=h[x],S=ki(k,g,!1,l)&&S}Ae.prototype.N=function(){if(Ae.Z.N.call(this),this.i){var a=this.i;for(const l in a.g){const h=a.g[l];for(let g=0;g<h.length;g++)Ii(h[g]);delete a.g[l],a.h--}}this.G=null},Ae.prototype.J=function(a,l,h,g){return this.i.add(String(a),l,!1,h,g)},Ae.prototype.K=function(a,l,h,g){return this.i.add(String(a),l,!0,h,g)};function ki(a,l,h,g){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();let S=!0;for(let k=0;k<l.length;++k){const x=l[k];if(x&&!x.da&&x.capture==h){const W=x.listener,ge=x.ha||x.src;x.fa&&co(a.i,x),S=W.call(ge,g)!==!1&&S}}return S&&!g.defaultPrevented}function tm(a,l){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=d(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:o.setTimeout(a,l||0)}function el(a){a.g=tm(()=>{a.g=null,a.i&&(a.i=!1,el(a))},a.l);const l=a.h;a.h=null,a.m.apply(null,l)}class nm extends I{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:el(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ps(a){I.call(this),this.h=a,this.g={}}v(ps,I);var tl=[];function nl(a){Si(a.g,function(l,h){this.g.hasOwnProperty(h)&&fo(l)},a),a.g={}}ps.prototype.N=function(){ps.Z.N.call(this),nl(this)},ps.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var go=o.JSON.stringify,sm=o.JSON.parse,im=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function sl(){}function il(){}var ms={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function yo(){E.call(this,"d")}v(yo,E);function vo(){E.call(this,"c")}v(vo,E);var ln={},rl=null;function Ci(){return rl=rl||new Ae}ln.Ia="serverreachability";function ol(a){E.call(this,ln.Ia,a)}v(ol,E);function gs(a){const l=Ci();Ne(l,new ol(l))}ln.STAT_EVENT="statevent";function al(a,l){E.call(this,ln.STAT_EVENT,a),this.stat=l}v(al,E);function Oe(a){const l=Ci();Ne(l,new al(l,a))}ln.Ja="timingevent";function cl(a,l){E.call(this,ln.Ja,a),this.size=l}v(cl,E);function ys(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},l)}function vs(){this.g=!0}vs.prototype.ua=function(){this.g=!1};function rm(a,l,h,g,S,k){a.info(function(){if(a.g)if(k){var x="",W=k.split("&");for(let ne=0;ne<W.length;ne++){var ge=W[ne].split("=");if(ge.length>1){const we=ge[0];ge=ge[1];const tt=we.split("_");x=tt.length>=2&&tt[1]=="type"?x+(we+"="+ge+"&"):x+(we+"=redacted&")}}}else x=null;else x=k;return"XMLHTTP REQ ("+g+") [attempt "+S+"]: "+l+`
`+h+`
`+x})}function om(a,l,h,g,S,k,x){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+S+"]: "+l+`
`+h+`
`+k+" "+x})}function Nn(a,l,h,g){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+cm(a,h)+(g?" "+g:"")})}function am(a,l){a.info(function(){return"TIMEOUT: "+l})}vs.prototype.info=function(){};function cm(a,l){if(!a.g)return l;if(!l)return null;try{const k=JSON.parse(l);if(k){for(a=0;a<k.length;a++)if(Array.isArray(k[a])){var h=k[a];if(!(h.length<2)){var g=h[1];if(Array.isArray(g)&&!(g.length<1)){var S=g[0];if(S!="noop"&&S!="stop"&&S!="close")for(let x=1;x<g.length;x++)g[x]=""}}}}return go(k)}catch{return l}}var Ri={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ll={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ul;function _o(){}v(_o,sl),_o.prototype.g=function(){return new XMLHttpRequest},ul=new _o;function _s(a){return encodeURIComponent(String(a))}function lm(a){var l=1;a=a.split(":");const h=[];for(;l>0&&a.length;)h.push(a.shift()),l--;return a.length&&h.push(a.join(":")),h}function Ct(a,l,h,g){this.j=a,this.i=l,this.l=h,this.S=g||1,this.V=new ps(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new hl}function hl(){this.i=null,this.g="",this.h=!1}var dl={},wo={};function bo(a,l,h){a.M=1,a.A=xi(et(l)),a.u=h,a.R=!0,fl(a,null)}function fl(a,l){a.F=Date.now(),Pi(a),a.B=et(a.A);var h=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Al(h.i,"t",g),a.C=0,h=a.j.L,a.h=new hl,a.g=ql(a.j,h?l:null,!a.u),a.P>0&&(a.O=new nm(d(a.Y,a,a.g),a.P)),l=a.V,h=a.g,g=a.ba;var S="readystatechange";Array.isArray(S)||(S&&(tl[0]=S.toString()),S=tl);for(let k=0;k<S.length;k++){const x=Jc(h,S[k],g||l.handleEvent,!1,l.h||l);if(!x)break;l.g[x.key]=x}l=a.J?Gc(a.J):{},a.u?(a.v||(a.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,l)):(a.v="GET",a.g.ea(a.B,a.v,null,l)),gs(),rm(a.i,a.v,a.B,a.l,a.S,a.u)}Ct.prototype.ba=function(a){a=a.target;const l=this.O;l&&xt(a)==3?l.j():this.Y(a)},Ct.prototype.Y=function(a){try{if(a==this.g)e:{const W=xt(this.g),ge=this.g.ya(),ne=this.g.ca();if(!(W<3)&&(W!=3||this.g&&(this.h.h||this.g.la()||Dl(this.g)))){this.K||W!=4||ge==7||(ge==8||ne<=0?gs(3):gs(2)),To(this);var l=this.g.ca();this.X=l;var h=um(this);if(this.o=l==200,om(this.i,this.v,this.B,this.l,this.S,W,l),this.o){if(this.U&&!this.L){t:{if(this.g){var g,S=this.g;if((g=S.g?S.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(g)){var k=g;break t}}k=null}if(a=k)Nn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Eo(this,a);else{this.o=!1,this.m=3,Oe(12),un(this),ws(this);break e}}if(this.R){a=!0;let we;for(;!this.K&&this.C<h.length;)if(we=hm(this,h),we==wo){W==4&&(this.m=4,Oe(14),a=!1),Nn(this.i,this.l,null,"[Incomplete Response]");break}else if(we==dl){this.m=4,Oe(15),Nn(this.i,this.l,h,"[Invalid Chunk]"),a=!1;break}else Nn(this.i,this.l,we,null),Eo(this,we);if(pl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),W!=4||h.length!=0||this.h.h||(this.m=1,Oe(16),a=!1),this.o=this.o&&a,!a)Nn(this.i,this.l,h,"[Invalid Chunked Response]"),un(this),ws(this);else if(h.length>0&&!this.W){this.W=!0;var x=this.j;x.g==this&&x.aa&&!x.P&&(x.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),xo(x),x.P=!0,Oe(11))}}else Nn(this.i,this.l,h,null),Eo(this,h);W==4&&un(this),this.o&&!this.K&&(W==4?Fl(this.j,this):(this.o=!1,Pi(this)))}else Sm(this.g),l==400&&h.indexOf("Unknown SID")>0?(this.m=3,Oe(12)):(this.m=0,Oe(13)),un(this),ws(this)}}}catch{}finally{}};function um(a){if(!pl(a))return a.g.la();const l=Dl(a.g);if(l==="")return"";let h="";const g=l.length,S=xt(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return un(a),ws(a),"";a.h.i=new o.TextDecoder}for(let k=0;k<g;k++)a.h.h=!0,h+=a.h.i.decode(l[k],{stream:!(S&&k==g-1)});return l.length=0,a.h.g+=h,a.C=0,a.h.g}function pl(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function hm(a,l){var h=a.C,g=l.indexOf(`
`,h);return g==-1?wo:(h=Number(l.substring(h,g)),isNaN(h)?dl:(g+=1,g+h>l.length?wo:(l=l.slice(g,g+h),a.C=g+h,l)))}Ct.prototype.cancel=function(){this.K=!0,un(this)};function Pi(a){a.T=Date.now()+a.H,ml(a,a.H)}function ml(a,l){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ys(d(a.aa,a),l)}function To(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Ct.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(am(this.i,this.B),this.M!=2&&(gs(),Oe(17)),un(this),this.m=2,ws(this)):ml(this,this.T-a)};function ws(a){a.j.I==0||a.K||Fl(a.j,a)}function un(a){To(a);var l=a.O;l&&typeof l.dispose=="function"&&l.dispose(),a.O=null,nl(a.V),a.g&&(l=a.g,a.g=null,l.abort(),l.dispose())}function Eo(a,l){try{var h=a.j;if(h.I!=0&&(h.g==a||Io(h.h,a))){if(!a.L&&Io(h.h,a)&&h.I==3){try{var g=h.Ba.g.parse(l)}catch{g=null}if(Array.isArray(g)&&g.length==3){var S=g;if(S[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<a.F)Mi(h),Ni(h);else break e;Po(h),Oe(18)}}else h.xa=S[1],0<h.xa-h.K&&S[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=ys(d(h.Va,h),6e3));vl(h.h)<=1&&h.ta&&(h.ta=void 0)}else dn(h,11)}else if((a.L||h.g==a)&&Mi(h),!_(l))for(S=h.Ba.g.parse(l),l=0;l<S.length;l++){let ne=S[l];const we=ne[0];if(!(we<=h.K))if(h.K=we,ne=ne[1],h.I==2)if(ne[0]=="c"){h.M=ne[1],h.ba=ne[2];const tt=ne[3];tt!=null&&(h.ka=tt,h.j.info("VER="+h.ka));const fn=ne[4];fn!=null&&(h.za=fn,h.j.info("SVER="+h.za));const Lt=ne[5];Lt!=null&&typeof Lt=="number"&&Lt>0&&(g=1.5*Lt,h.O=g,h.j.info("backChannelRequestTimeoutMs_="+g)),g=h;const Dt=a.g;if(Dt){const $i=Dt.g?Dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($i){var k=g.h;k.g||$i.indexOf("spdy")==-1&&$i.indexOf("quic")==-1&&$i.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(So(k,k.h),k.h=null))}if(g.G){const Lo=Dt.g?Dt.g.getResponseHeader("X-HTTP-Session-Id"):null;Lo&&(g.wa=Lo,se(g.J,g.G,Lo))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-a.F,h.j.info("Handshake RTT: "+h.T+"ms")),g=h;var x=a;if(g.na=Hl(g,g.L?g.ba:null,g.W),x.L){_l(g.h,x);var W=x,ge=g.O;ge&&(W.H=ge),W.D&&(To(W),Pi(W)),g.g=x}else $l(g);h.i.length>0&&Oi(h)}else ne[0]!="stop"&&ne[0]!="close"||dn(h,7);else h.I==3&&(ne[0]=="stop"||ne[0]=="close"?ne[0]=="stop"?dn(h,7):Ro(h):ne[0]!="noop"&&h.l&&h.l.qa(ne),h.A=0)}}gs(4)}catch{}}var dm=class{constructor(a,l){this.g=a,this.map=l}};function gl(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function yl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function vl(a){return a.h?1:a.g?a.g.size:0}function Io(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function So(a,l){a.g?a.g.add(l):a.h=l}function _l(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}gl.prototype.cancel=function(){if(this.i=wl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function wl(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let l=a.i;for(const h of a.g.values())l=l.concat(h.G);return l}return C(a.i)}var bl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fm(a,l){if(a){a=a.split("&");for(let h=0;h<a.length;h++){const g=a[h].indexOf("=");let S,k=null;g>=0?(S=a[h].substring(0,g),k=a[h].substring(g+1)):S=a[h],l(S,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Rt(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;a instanceof Rt?(this.l=a.l,bs(this,a.j),this.o=a.o,this.g=a.g,Ts(this,a.u),this.h=a.h,Ao(this,kl(a.i)),this.m=a.m):a&&(l=String(a).match(bl))?(this.l=!1,bs(this,l[1]||"",!0),this.o=Es(l[2]||""),this.g=Es(l[3]||"",!0),Ts(this,l[4]),this.h=Es(l[5]||"",!0),Ao(this,l[6]||"",!0),this.m=Es(l[7]||"")):(this.l=!1,this.i=new Ss(null,this.l))}Rt.prototype.toString=function(){const a=[];var l=this.j;l&&a.push(Is(l,Tl,!0),":");var h=this.g;return(h||l=="file")&&(a.push("//"),(l=this.o)&&a.push(Is(l,Tl,!0),"@"),a.push(_s(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&a.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push(Is(h,h.charAt(0)=="/"?gm:mm,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",Is(h,vm)),a.join("")},Rt.prototype.resolve=function(a){const l=et(this);let h=!!a.j;h?bs(l,a.j):h=!!a.o,h?l.o=a.o:h=!!a.g,h?l.g=a.g:h=a.u!=null;var g=a.h;if(h)Ts(l,a.u);else if(h=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var S=l.h.lastIndexOf("/");S!=-1&&(g=l.h.slice(0,S+1)+g)}if(S=g,S==".."||S==".")g="";else if(S.indexOf("./")!=-1||S.indexOf("/.")!=-1){g=S.lastIndexOf("/",0)==0,S=S.split("/");const k=[];for(let x=0;x<S.length;){const W=S[x++];W=="."?g&&x==S.length&&k.push(""):W==".."?((k.length>1||k.length==1&&k[0]!="")&&k.pop(),g&&x==S.length&&k.push("")):(k.push(W),g=!0)}g=k.join("/")}else g=S}return h?l.h=g:h=a.i.toString()!=="",h?Ao(l,kl(a.i)):h=!!a.m,h&&(l.m=a.m),l};function et(a){return new Rt(a)}function bs(a,l,h){a.j=h?Es(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function Ts(a,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);a.u=l}else a.u=null}function Ao(a,l,h){l instanceof Ss?(a.i=l,_m(a.i,a.l)):(h||(l=Is(l,ym)),a.i=new Ss(l,a.l))}function se(a,l,h){a.i.set(l,h)}function xi(a){return se(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Es(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Is(a,l,h){return typeof a=="string"?(a=encodeURI(a).replace(l,pm),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function pm(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Tl=/[#\/\?@]/g,mm=/[#\?:]/g,gm=/[#\?]/g,ym=/[#\?@]/g,vm=/#/g;function Ss(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function hn(a){a.g||(a.g=new Map,a.h=0,a.i&&fm(a.i,function(l,h){a.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=Ss.prototype,n.add=function(a,l){hn(this),this.i=null,a=On(this,a);let h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(l),this.h+=1,this};function El(a,l){hn(a),l=On(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function Il(a,l){return hn(a),l=On(a,l),a.g.has(l)}n.forEach=function(a,l){hn(this),this.g.forEach(function(h,g){h.forEach(function(S){a.call(l,S,g,this)},this)},this)};function Sl(a,l){hn(a);let h=[];if(typeof l=="string")Il(a,l)&&(h=h.concat(a.g.get(On(a,l))));else for(a=Array.from(a.g.values()),l=0;l<a.length;l++)h=h.concat(a[l]);return h}n.set=function(a,l){return hn(this),this.i=null,a=On(this,a),Il(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},n.get=function(a,l){return a?(a=Sl(this,a),a.length>0?String(a[0]):l):l};function Al(a,l,h){El(a,l),h.length>0&&(a.i=null,a.g.set(On(a,l),C(h)),a.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],l=Array.from(this.g.keys());for(let g=0;g<l.length;g++){var h=l[g];const S=_s(h);h=Sl(this,h);for(let k=0;k<h.length;k++){let x=S;h[k]!==""&&(x+="="+_s(h[k])),a.push(x)}}return this.i=a.join("&")};function kl(a){const l=new Ss;return l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),l}function On(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function _m(a,l){l&&!a.j&&(hn(a),a.i=null,a.g.forEach(function(h,g){const S=g.toLowerCase();g!=S&&(El(this,g),Al(this,S,h))},a)),a.j=l}function wm(a,l){const h=new vs;if(o.Image){const g=new Image;g.onload=m(Pt,h,"TestLoadImage: loaded",!0,l,g),g.onerror=m(Pt,h,"TestLoadImage: error",!1,l,g),g.onabort=m(Pt,h,"TestLoadImage: abort",!1,l,g),g.ontimeout=m(Pt,h,"TestLoadImage: timeout",!1,l,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else l(!1)}function bm(a,l){const h=new vs,g=new AbortController,S=setTimeout(()=>{g.abort(),Pt(h,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:g.signal}).then(k=>{clearTimeout(S),k.ok?Pt(h,"TestPingServer: ok",!0,l):Pt(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(S),Pt(h,"TestPingServer: error",!1,l)})}function Pt(a,l,h,g,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),g(h)}catch{}}function Tm(){this.g=new im}function ko(a){this.i=a.Sb||null,this.h=a.ab||!1}v(ko,sl),ko.prototype.g=function(){return new Li(this.i,this.h)};function Li(a,l){Ae.call(this),this.H=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}v(Li,Ae),n=Li.prototype,n.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=l,this.readyState=1,ks(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(l.body=a),(this.H||o).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,As(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ks(this)),this.g&&(this.readyState=3,ks(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Cl(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Cl(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?As(this):ks(this),this.readyState==3&&Cl(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,As(this))},n.Na=function(a){this.g&&(this.response=a,As(this))},n.ga=function(){this.g&&As(this)};function As(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ks(a)}n.setRequestHeader=function(a,l){this.A.append(a,l)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=l.next();return a.join(`\r
`)};function ks(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Li.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Rl(a){let l="";return Si(a,function(h,g){l+=g,l+=":",l+=h,l+=`\r
`}),l}function Co(a,l,h){e:{for(g in h){var g=!1;break e}g=!0}g||(h=Rl(h),typeof a=="string"?h!=null&&_s(h):se(a,l,h))}function oe(a){Ae.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}v(oe,Ae);var Em=/^https?$/i,Im=["POST","PUT"];n=oe.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,l,h,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ul.g(),this.g.onreadystatechange=T(d(this.Ca,this));try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(k){Pl(this,k);return}if(a=h||"",h=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var S in g)h.set(S,g[S]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const k of g.keys())h.set(k,g.get(k));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(h.keys()).find(k=>k.toLowerCase()=="content-type"),S=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Im,l,void 0)>=0)||g||S||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,x]of h)this.g.setRequestHeader(k,x);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(k){Pl(this,k)}};function Pl(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.o=5,xl(a),Di(a)}function xl(a){a.A||(a.A=!0,Ne(a,"complete"),Ne(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Ne(this,"complete"),Ne(this,"abort"),Di(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Di(this,!0)),oe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Ll(this):this.Xa())},n.Xa=function(){Ll(this)};function Ll(a){if(a.h&&typeof r<"u"){if(a.v&&xt(a)==4)setTimeout(a.Ca.bind(a),0);else if(Ne(a,"readystatechange"),xt(a)==4){a.h=!1;try{const k=a.ca();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var g;if(g=k===0){let x=String(a.D).match(bl)[1]||null;!x&&o.self&&o.self.location&&(x=o.self.location.protocol.slice(0,-1)),g=!Em.test(x?x.toLowerCase():"")}h=g}if(h)Ne(a,"complete"),Ne(a,"success");else{a.o=6;try{var S=xt(a)>2?a.g.statusText:""}catch{S=""}a.l=S+" ["+a.ca()+"]",xl(a)}}finally{Di(a)}}}}function Di(a,l){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const h=a.g;a.g=null,l||Ne(a,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function xt(a){return a.g?a.g.readyState:0}n.ca=function(){try{return xt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),sm(l)}};function Dl(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Sm(a){const l={};a=(a.g&&xt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(_(a[g]))continue;var h=lm(a[g]);const S=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const k=l[S]||[];l[S]=k,k.push(h)}Yp(l,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Cs(a,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||l}function Nl(a){this.za=0,this.i=[],this.j=new vs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Cs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Cs("baseRetryDelayMs",5e3,a),this.Za=Cs("retryDelaySeedMs",1e4,a),this.Ta=Cs("forwardChannelMaxRetries",2,a),this.va=Cs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new gl(a&&a.concurrentRequestLimit),this.Ba=new Tm,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Nl.prototype,n.ka=8,n.I=1,n.connect=function(a,l,h,g){Oe(0),this.W=a,this.H=l||{},h&&g!==void 0&&(this.H.OSID=h,this.H.OAID=g),this.F=this.X,this.J=Hl(this,null,this.W),Oi(this)};function Ro(a){if(Ol(a),a.I==3){var l=a.V++,h=et(a.J);if(se(h,"SID",a.M),se(h,"RID",l),se(h,"TYPE","terminate"),Rs(a,h),l=new Ct(a,a.j,l),l.M=2,l.A=xi(et(h)),h=!1,o.navigator&&o.navigator.sendBeacon)try{h=o.navigator.sendBeacon(l.A.toString(),"")}catch{}!h&&o.Image&&(new Image().src=l.A,h=!0),h||(l.g=ql(l.j,null),l.g.ea(l.A)),l.F=Date.now(),Pi(l)}jl(a)}function Ni(a){a.g&&(xo(a),a.g.cancel(),a.g=null)}function Ol(a){Ni(a),a.v&&(o.clearTimeout(a.v),a.v=null),Mi(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Oi(a){if(!yl(a.h)&&!a.m){a.m=!0;var l=a.Ea;K||y(),te||(K(),te=!0),b.add(l,a),a.D=0}}function Am(a,l){return vl(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=l.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ys(d(a.Ea,a,l),Bl(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const S=new Ct(this,this.j,a);let k=this.o;if(this.U&&(k?(k=Gc(k),Qc(k,this.U)):k=this.U),this.u!==null||this.R||(S.J=k,k=null),this.S)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var g=this.i[h];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(l+=g,l>4096){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=Vl(this,S,l),h=et(this.J),se(h,"RID",a),se(h,"CVER",22),this.G&&se(h,"X-HTTP-Session-Id",this.G),Rs(this,h),k&&(this.R?l="headers="+_s(Rl(k))+"&"+l:this.u&&Co(h,this.u,k)),So(this.h,S),this.Ra&&se(h,"TYPE","init"),this.S?(se(h,"$req",l),se(h,"SID","null"),S.U=!0,bo(S,h,null)):bo(S,h,l),this.I=2}}else this.I==3&&(a?Ml(this,a):this.i.length==0||yl(this.h)||Ml(this))};function Ml(a,l){var h;l?h=l.l:h=a.V++;const g=et(a.J);se(g,"SID",a.M),se(g,"RID",h),se(g,"AID",a.K),Rs(a,g),a.u&&a.o&&Co(g,a.u,a.o),h=new Ct(a,a.j,h,a.D+1),a.u===null&&(h.J=a.o),l&&(a.i=l.G.concat(a.i)),l=Vl(a,h,1e3),h.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),So(a.h,h),bo(h,g,l)}function Rs(a,l){a.H&&Si(a.H,function(h,g){se(l,g,h)}),a.l&&Si({},function(h,g){se(l,g,h)})}function Vl(a,l,h){h=Math.min(a.i.length,h);const g=a.l?d(a.l.Ka,a.l,a):null;e:{var S=a.i;let W=-1;for(;;){const ge=["count="+h];W==-1?h>0?(W=S[0].g,ge.push("ofs="+W)):W=0:ge.push("ofs="+W);let ne=!0;for(let we=0;we<h;we++){var k=S[we].g;const tt=S[we].map;if(k-=W,k<0)W=Math.max(0,S[we].g-100),ne=!1;else try{k="req"+k+"_"||"";try{var x=tt instanceof Map?tt:Object.entries(tt);for(const[fn,Lt]of x){let Dt=Lt;c(Lt)&&(Dt=go(Lt)),ge.push(k+fn+"="+encodeURIComponent(Dt))}}catch(fn){throw ge.push(k+"type="+encodeURIComponent("_badmap")),fn}}catch{g&&g(tt)}}if(ne){x=ge.join("&");break e}}x=void 0}return a=a.i.splice(0,h),l.G=a,x}function $l(a){if(!a.g&&!a.v){a.Y=1;var l=a.Da;K||y(),te||(K(),te=!0),b.add(l,a),a.A=0}}function Po(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ys(d(a.Da,a),Bl(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,Ul(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ys(d(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Oe(10),Ni(this),Ul(this))};function xo(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Ul(a){a.g=new Ct(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var l=et(a.na);se(l,"RID","rpc"),se(l,"SID",a.M),se(l,"AID",a.K),se(l,"CI",a.F?"0":"1"),!a.F&&a.ia&&se(l,"TO",a.ia),se(l,"TYPE","xmlhttp"),Rs(a,l),a.u&&a.o&&Co(l,a.u,a.o),a.O&&(a.g.H=a.O);var h=a.g;a=a.ba,h.M=1,h.A=xi(et(l)),h.u=null,h.R=!0,fl(h,a)}n.Va=function(){this.C!=null&&(this.C=null,Ni(this),Po(this),Oe(19))};function Mi(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Fl(a,l){var h=null;if(a.g==l){Mi(a),xo(a),a.g=null;var g=2}else if(Io(a.h,l))h=l.G,_l(a.h,l),g=1;else return;if(a.I!=0){if(l.o)if(g==1){h=l.u?l.u.length:0,l=Date.now()-l.F;var S=a.D;g=Ci(),Ne(g,new cl(g,h)),Oi(a)}else $l(a);else if(S=l.m,S==3||S==0&&l.X>0||!(g==1&&Am(a,l)||g==2&&Po(a)))switch(h&&h.length>0&&(l=a.h,l.i=l.i.concat(h)),S){case 1:dn(a,5);break;case 4:dn(a,10);break;case 3:dn(a,6);break;default:dn(a,2)}}}function Bl(a,l){let h=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(h*=2),h*l}function dn(a,l){if(a.j.info("Error code "+l),l==2){var h=d(a.bb,a),g=a.Ua;const S=!g;g=new Rt(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||bs(g,"https"),xi(g),S?wm(g.toString(),h):bm(g.toString(),h)}else Oe(2);a.I=0,a.l&&a.l.pa(l),jl(a),Ol(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Oe(2)):(this.j.info("Failed to ping google.com"),Oe(1))};function jl(a){if(a.I=0,a.ja=[],a.l){const l=wl(a.h);(l.length!=0||a.i.length!=0)&&(D(a.ja,l),D(a.ja,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.oa()}}function Hl(a,l,h){var g=h instanceof Rt?et(h):new Rt(h);if(g.g!="")l&&(g.g=l+"."+g.g),Ts(g,g.u);else{var S=o.location;g=S.protocol,l=l?l+"."+S.hostname:S.hostname,S=+S.port;const k=new Rt(null);g&&bs(k,g),l&&(k.g=l),S&&Ts(k,S),h&&(k.h=h),g=k}return h=a.G,l=a.wa,h&&l&&se(g,h,l),se(g,"VER",a.ka),Rs(a,g),g}function ql(a,l,h){if(l&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Aa&&!a.ma?new oe(new ko({ab:h})):new oe(a.ma),l.Fa(a.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function zl(){}n=zl.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Vi(){}Vi.prototype.g=function(a,l){return new He(a,l)};function He(a,l){Ae.call(this),this.g=new Nl(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(a?a["X-WebChannel-Client-Profile"]=l.sa:a={"X-WebChannel-Client-Profile":l.sa}),this.g.U=a,(a=l&&l.Qb)&&!_(a)&&(this.g.u=a),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!_(l)&&(this.g.G=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new Mn(this)}v(He,Ae),He.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},He.prototype.close=function(){Ro(this.g)},He.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.v&&(h={},h.__data__=go(a),a=h);l.i.push(new dm(l.Ya++,a)),l.I==3&&Oi(l)},He.prototype.N=function(){this.g.l=null,delete this.j,Ro(this.g),delete this.g,He.Z.N.call(this)};function Wl(a){yo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){e:{for(const h in l){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}v(Wl,yo);function Gl(){vo.call(this),this.status=1}v(Gl,vo);function Mn(a){this.g=a}v(Mn,zl),Mn.prototype.ra=function(){Ne(this.g,"a")},Mn.prototype.qa=function(a){Ne(this.g,new Wl(a))},Mn.prototype.pa=function(a){Ne(this.g,new Gl)},Mn.prototype.oa=function(){Ne(this.g,"b")},Vi.prototype.createWebChannel=Vi.prototype.g,He.prototype.send=He.prototype.o,He.prototype.open=He.prototype.m,He.prototype.close=He.prototype.close,Zd=function(){return new Vi},Xd=function(){return Ci()},Yd=ln,fa={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ri.NO_ERROR=0,Ri.TIMEOUT=8,Ri.HTTP_ERROR=6,nr=Ri,ll.COMPLETE="complete",Jd=ll,il.EventType=ms,ms.OPEN="a",ms.CLOSE="b",ms.ERROR="c",ms.MESSAGE="d",Ae.prototype.listen=Ae.prototype.J,$s=il,oe.prototype.listenOnce=oe.prototype.K,oe.prototype.getLastError=oe.prototype.Ha,oe.prototype.getLastErrorCode=oe.prototype.ya,oe.prototype.getStatus=oe.prototype.ca,oe.prototype.getResponseJson=oe.prototype.La,oe.prototype.getResponseText=oe.prototype.la,oe.prototype.send=oe.prototype.ea,oe.prototype.setWithCredentials=oe.prototype.Fa,Qd=oe}).apply(typeof Fi<"u"?Fi:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ce.UNAUTHENTICATED=new Ce(null),Ce.GOOGLE_CREDENTIALS=new Ce("google-credentials-uid"),Ce.FIRST_PARTY=new Ce("first-party-uid"),Ce.MOCK_USER=new Ce("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ls="12.10.0";function tw(n){ls=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const kn=new Fa("@firebase/firestore");function Vn(){return kn.logLevel}function O(n,...e){if(kn.logLevel<=Q.DEBUG){const t=e.map(rc);kn.debug(`Firestore (${ls}): ${n}`,...t)}}function St(n,...e){if(kn.logLevel<=Q.ERROR){const t=e.map(rc);kn.error(`Firestore (${ls}): ${n}`,...t)}}function Cn(n,...e){if(kn.logLevel<=Q.WARN){const t=e.map(rc);kn.warn(`Firestore (${ls}): ${n}`,...t)}}function rc(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,ef(n,s,t)}function ef(n,e,t){let s=`FIRESTORE (${ls}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw St(s),new Error(s)}function re(n,e,t,s){let i="Unexpected state";typeof t=="string"?i=t:s=t,n||ef(e,i,s)}function X(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends mt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ce.UNAUTHENTICATED)))}shutdown(){}}class sw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class iw{constructor(e){this.t=e,this.currentUser=Ce.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){re(this.o===void 0,42304);let s=this.i;const i=u=>this.i!==s?(s=this.i,t(u)):Promise.resolve();let r=new qn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new qn,e.enqueueRetryable((()=>i(this.currentUser)))};const o=()=>{const u=r;e.enqueueRetryable((async()=>{await u.promise,await i(this.currentUser)}))},c=u=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new qn)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(re(typeof s.accessToken=="string",31837,{l:s}),new tf(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string",2055,{h:e}),new Ce(e)}}class rw{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ce.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class ow{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new rw(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ce.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ku{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class aw{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ve(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){re(this.o===void 0,3512);const s=r=>{r.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable((()=>s(r)))};const i=r=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>i(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?i(r):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ku(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(re(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ku(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const i=cw(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<t&&(s+=e.charAt(i[r]%62))}return s}}function J(n,e){return n<e?-1:n>e?1:0}function pa(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const i=n.charAt(s),r=e.charAt(s);if(i!==r)return Bo(i)===Bo(r)?J(i,r):Bo(i)?1:-1}return J(n.length,e.length)}const lw=55296,uw=57343;function Bo(n){const e=n.charCodeAt(0);return e>=lw&&e<=uw}function Yn(n,e,t){return n.length===e.length&&n.every(((s,i)=>t(s,e[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu="__name__";class nt{constructor(e,t,s){t===void 0?t=0:t>e.length&&q(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&q(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return nt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof nt?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const r=nt.compareSegments(e.get(i),t.get(i));if(r!==0)return r}return J(e.length,t.length)}static compareSegments(e,t){const s=nt.isNumericId(e),i=nt.isNumericId(t);return s&&!i?-1:!s&&i?1:s&&i?nt.extractNumericId(e).compare(nt.extractNumericId(t)):pa(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return zt.fromString(e.substring(4,e.length-2))}}class ie extends nt{construct(e,t,s){return new ie(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new U(L.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((i=>i.length>0)))}return new ie(t)}static emptyPath(){return new ie([])}}const hw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends nt{construct(e,t,s){return new $e(e,t,s)}static isValidIdentifier(e){return hw.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Cu}static keyField(){return new $e([Cu])}static fromServerFormat(e){const t=[];let s="",i=0;const r=()=>{if(s.length===0)throw new U(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new U(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new U(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(s+=c,i++):(r(),i++)}if(r(),o)throw new U(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(t)}static emptyPath(){return new $e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(ie.fromString(e))}static fromName(e){return new j(ie.fromString(e).popFirst(5))}static empty(){return new j(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ie.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new ie(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(n,e,t){if(!t)throw new U(L.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function fw(n,e,t,s){if(e===!0&&s===!0)throw new U(L.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ru(n){if(j.isDocumentKey(n))throw new U(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function pw(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function mw(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":q(12329,{type:typeof n})}function sr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new U(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=mw(n);throw new U(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function pe(n,e){const t={typeString:n};return e&&(t.value=e),t}function gi(n,e){if(!pw(n))throw new U(L.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const i=e[s].typeString,r="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const o=n[s];if(i&&typeof o!==i){t=`JSON field '${s}' must be a ${i}.`;break}if(r!==void 0&&o!==r.value){t=`Expected '${s}' field to equal '${r.value}'`;break}}if(t)throw new U(L.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu=-62135596800,xu=1e6;class fe{static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*xu);return new fe(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new U(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new U(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Pu)throw new U(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/xu}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(gi(e,fe._jsonSchema))return new fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Pu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}fe._jsonSchemaVersion="firestore/timestamp/1.0",fe._jsonSchema={type:pe("string",fe._jsonSchemaVersion),seconds:pe("number"),nanoseconds:pe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{static fromTimestamp(e){return new H(e)}static min(){return new H(new fe(0,0))}static max(){return new H(new fe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const si=-1;function gw(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=H.fromTimestamp(s===1e9?new fe(t+1,0):new fe(t,s));return new Xt(i,j.empty(),e)}function yw(n){return new Xt(n.readTime,n.key,si)}class Xt{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Xt(H.min(),j.empty(),si)}static max(){return new Xt(H.max(),j.empty(),si)}}function vw(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=j.comparator(n.documentKey,e.documentKey),t!==0?t:J(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ww{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr(n){if(n.code!==L.FAILED_PRECONDITION||n.message!==_w)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R(((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(t,r).next(s,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):R.reject(t)}static resolve(e){return new R(((t,s)=>{t(e)}))}static reject(e){return new R(((t,s)=>{s(e)}))}static waitFor(e){return new R(((t,s)=>{let i=0,r=0,o=!1;e.forEach((c=>{++i,c.next((()=>{++r,o&&r===i&&t()}),(u=>s(u)))})),o=!0,r===i&&t()}))}static or(e){let t=R.resolve(!1);for(const s of e)t=t.next((i=>i?R.resolve(i):s()));return t}static forEach(e,t){const s=[];return e.forEach(((i,r)=>{s.push(t.call(this,i,r))})),this.waitFor(s)}static mapArray(e,t){return new R(((s,i)=>{const r=e.length,o=new Array(r);let c=0;for(let u=0;u<r;u++){const d=u;t(e[d]).next((m=>{o[d]=m,++c,c===r&&s(o)}),(m=>i(m)))}}))}static doWhile(e,t){return new R(((s,i)=>{const r=()=>{e()===!0?t().next((()=>{r()}),i):s()};r()}))}}function bw(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function us(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class qr{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}qr.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw=-1;function zr(n){return n==null}function ma(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf="";function Ew(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Lu(e)),e=Iw(n.get(t),e);return Lu(e)}function Iw(n,e){let t=e;const s=n.length;for(let i=0;i<s;i++){const r=n.charAt(i);switch(r){case"\0":t+="";break;case sf:t+="";break;default:t+=r}}return t}function Lu(n){return n+sf+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function yi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Sw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,t){this.comparator=e,this.root=t||Te.EMPTY}insert(e,t){return new he(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Te.BLACK,null,null))}remove(e){return new he(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Te.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return t+s.left.size;i<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bi(this.root,e,this.comparator,!0)}}class Bi{constructor(e,t,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?s(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Te{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??Te.RED,this.left=i??Te.EMPTY,this.right=r??Te.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,i,r){return new Te(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Te.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Te.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw q(27949);return e+(this.isRed()?0:1)}}Te.EMPTY=null,Te.RED=!0,Te.BLACK=!1;Te.EMPTY=new class{constructor(){this.size=0}get key(){throw q(57766)}get value(){throw q(16141)}get color(){throw q(16727)}get left(){throw q(29726)}get right(){throw q(36894)}copy(e,t,s,i,r){return this}insert(e,t,s){return new Te(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.comparator=e,this.data=new he(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Nu(this.data.getIterator())}getIteratorFrom(e){return new Nu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new _e(this.comparator);return t.data=e,t}}class Nu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new Bt([])}unionWith(e){let t=new _e($e.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Bt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Yn(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class rf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new rf("Invalid base64 string: "+r):r}})(e);return new Ee(t)}static fromUint8Array(e){const t=(function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r})(e);return new Ee(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ee.EMPTY_BYTE_STRING=new Ee("");const Aw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zt(n){if(re(!!n,39018),typeof n=="string"){let e=0;const t=Aw.exec(n);if(re(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ue(n.seconds),nanos:ue(n.nanos)}}function ue(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function en(n){return typeof n=="string"?Ee.fromBase64String(n):Ee.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of="server_timestamp",af="__type__",cf="__previous_value__",lf="__local_write_time__";function oc(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[af])==null?void 0:s.stringValue)===of}function Wr(n){const e=n.mapValue.fields[cf];return oc(e)?Wr(e):e}function ii(n){const e=Zt(n.mapValue.fields[lf].timestampValue);return new fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,t,s,i,r,o,c,u,d,m,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=m,this.apiKey=v}}const Tr="(default)";class ri{constructor(e,t){this.projectId=e,this.database=t||Tr}static empty(){return new ri("","")}get isDefaultDatabase(){return this.database===Tr}isEqual(e){return e instanceof ri&&e.projectId===this.projectId&&e.database===this.database}}function Cw(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new U(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ri(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw="__type__",Pw="__max__",ji={mapValue:{}},xw="__vector__",ga="value";function tn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?oc(n)?4:Dw(n)?9007199254740991:Lw(n)?10:11:q(28295,{value:n})}function ft(n,e){if(n===e)return!0;const t=tn(n);if(t!==tn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ii(n).isEqual(ii(e));case 3:return(function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=Zt(i.timestampValue),c=Zt(r.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,r){return en(i.bytesValue).isEqual(en(r.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,r){return ue(i.geoPointValue.latitude)===ue(r.geoPointValue.latitude)&&ue(i.geoPointValue.longitude)===ue(r.geoPointValue.longitude)})(n,e);case 2:return(function(i,r){if("integerValue"in i&&"integerValue"in r)return ue(i.integerValue)===ue(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=ue(i.doubleValue),c=ue(r.doubleValue);return o===c?ma(o)===ma(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return Yn(n.arrayValue.values||[],e.arrayValue.values||[],ft);case 10:case 11:return(function(i,r){const o=i.mapValue.fields||{},c=r.mapValue.fields||{};if(Du(o)!==Du(c))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!ft(o[u],c[u])))return!1;return!0})(n,e);default:return q(52216,{left:n})}}function oi(n,e){return(n.values||[]).find((t=>ft(t,e)))!==void 0}function Xn(n,e){if(n===e)return 0;const t=tn(n),s=tn(e);if(t!==s)return J(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return J(n.booleanValue,e.booleanValue);case 2:return(function(r,o){const c=ue(r.integerValue||r.doubleValue),u=ue(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(n,e);case 3:return Ou(n.timestampValue,e.timestampValue);case 4:return Ou(ii(n),ii(e));case 5:return pa(n.stringValue,e.stringValue);case 6:return(function(r,o){const c=en(r),u=en(o);return c.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(r,o){const c=r.split("/"),u=o.split("/");for(let d=0;d<c.length&&d<u.length;d++){const m=J(c[d],u[d]);if(m!==0)return m}return J(c.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(r,o){const c=J(ue(r.latitude),ue(o.latitude));return c!==0?c:J(ue(r.longitude),ue(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Mu(n.arrayValue,e.arrayValue);case 10:return(function(r,o){var T,C,D,M;const c=r.fields||{},u=o.fields||{},d=(T=c[ga])==null?void 0:T.arrayValue,m=(C=u[ga])==null?void 0:C.arrayValue,v=J(((D=d==null?void 0:d.values)==null?void 0:D.length)||0,((M=m==null?void 0:m.values)==null?void 0:M.length)||0);return v!==0?v:Mu(d,m)})(n.mapValue,e.mapValue);case 11:return(function(r,o){if(r===ji.mapValue&&o===ji.mapValue)return 0;if(r===ji.mapValue)return 1;if(o===ji.mapValue)return-1;const c=r.fields||{},u=Object.keys(c),d=o.fields||{},m=Object.keys(d);u.sort(),m.sort();for(let v=0;v<u.length&&v<m.length;++v){const T=pa(u[v],m[v]);if(T!==0)return T;const C=Xn(c[u[v]],d[m[v]]);if(C!==0)return C}return J(u.length,m.length)})(n.mapValue,e.mapValue);default:throw q(23264,{he:t})}}function Ou(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return J(n,e);const t=Zt(n),s=Zt(e),i=J(t.seconds,s.seconds);return i!==0?i:J(t.nanos,s.nanos)}function Mu(n,e){const t=n.values||[],s=e.values||[];for(let i=0;i<t.length&&i<s.length;++i){const r=Xn(t[i],s[i]);if(r)return r}return J(t.length,s.length)}function Zn(n){return ya(n)}function ya(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=Zt(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return en(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return j.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",i=!0;for(const r of t.values||[])i?i=!1:s+=",",s+=ya(r);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${ya(t.fields[o])}`;return i+"}"})(n.mapValue):q(61005,{value:n})}function ir(n){switch(tn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Wr(n);return e?16+ir(e):16;case 5:return 2*n.stringValue.length;case 6:return en(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((i,r)=>i+ir(r)),0)})(n.arrayValue);case 10:case 11:return(function(s){let i=0;return yi(s.fields,((r,o)=>{i+=r.length+ir(o)})),i})(n.mapValue);default:throw q(13486,{value:n})}}function va(n){return!!n&&"integerValue"in n}function ac(n){return!!n&&"arrayValue"in n}function Vu(n){return!!n&&"nullValue"in n}function $u(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function jo(n){return!!n&&"mapValue"in n}function Lw(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Rw])==null?void 0:s.stringValue)===xw}function Gs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return yi(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Gs(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Gs(n.arrayValue.values[t]);return e}return{...n}}function Dw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Pw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.value=e}static empty(){return new st({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!jo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gs(t)}setAll(e){let t=$e.emptyPath(),s={},i=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,s,i),s={},i=[],t=c.popLast()}o?s[c.lastSegment()]=Gs(o):i.push(c.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,s,i)}delete(e){const t=this.field(e.popLast());jo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ft(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=t.mapValue.fields[e.get(s)];jo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,s){yi(t,((i,r)=>e[i]=r));for(const i of s)delete e[i]}clone(){return new st(Gs(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t,s,i,r,o,c){this.key=e,this.documentType=t,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Re(e,0,H.min(),H.min(),H.min(),st.empty(),0)}static newFoundDocument(e,t,s,i){return new Re(e,1,t,H.min(),s,i,0)}static newNoDocument(e,t){return new Re(e,2,t,H.min(),H.min(),st.empty(),0)}static newUnknownDocument(e,t){return new Re(e,3,t,H.min(),H.min(),st.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Er{constructor(e,t){this.position=e,this.inclusive=t}}function Uu(n,e,t){let s=0;for(let i=0;i<n.position.length;i++){const r=e[i],o=n.position[i];if(r.field.isKeyField()?s=j.comparator(j.fromName(o.referenceValue),t.key):s=Xn(o,t.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Fu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ft(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ir{constructor(e,t="asc"){this.field=e,this.dir=t}}function Nw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class uf{}class ve extends uf{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Mw(e,t,s):t==="array-contains"?new Uw(e,s):t==="in"?new Fw(e,s):t==="not-in"?new Bw(e,s):t==="array-contains-any"?new jw(e,s):new ve(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Vw(e,s):new $w(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Xn(t,this.value)):t!==null&&tn(this.value)===tn(t)&&this.matchesComparison(Xn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pt extends uf{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new pt(e,t)}matches(e){return hf(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function hf(n){return n.op==="and"}function df(n){return Ow(n)&&hf(n)}function Ow(n){for(const e of n.filters)if(e instanceof pt)return!1;return!0}function _a(n){if(n instanceof ve)return n.field.canonicalString()+n.op.toString()+Zn(n.value);if(df(n))return n.filters.map((e=>_a(e))).join(",");{const e=n.filters.map((t=>_a(t))).join(",");return`${n.op}(${e})`}}function ff(n,e){return n instanceof ve?(function(s,i){return i instanceof ve&&s.op===i.op&&s.field.isEqual(i.field)&&ft(s.value,i.value)})(n,e):n instanceof pt?(function(s,i){return i instanceof pt&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce(((r,o,c)=>r&&ff(o,i.filters[c])),!0):!1})(n,e):void q(19439)}function pf(n){return n instanceof ve?(function(t){return`${t.field.canonicalString()} ${t.op} ${Zn(t.value)}`})(n):n instanceof pt?(function(t){return t.op.toString()+" {"+t.getFilters().map(pf).join(" ,")+"}"})(n):"Filter"}class Mw extends ve{constructor(e,t,s){super(e,t,s),this.key=j.fromName(s.referenceValue)}matches(e){const t=j.comparator(e.key,this.key);return this.matchesComparison(t)}}class Vw extends ve{constructor(e,t){super(e,"in",t),this.keys=mf("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class $w extends ve{constructor(e,t){super(e,"not-in",t),this.keys=mf("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function mf(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>j.fromName(s.referenceValue)))}class Uw extends ve{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ac(t)&&oi(t.arrayValue,this.value)}}class Fw extends ve{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&oi(this.value.arrayValue,t)}}class Bw extends ve{constructor(e,t){super(e,"not-in",t)}matches(e){if(oi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!oi(this.value.arrayValue,t)}}class jw extends ve{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ac(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>oi(this.value.arrayValue,s)))}}/**
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
 */class Hw{constructor(e,t=null,s=[],i=[],r=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=c,this.Te=null}}function Bu(n,e=null,t=[],s=[],i=null,r=null,o=null){return new Hw(n,e,t,s,i,r,o)}function cc(n){const e=X(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>_a(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(r){return r.field.canonicalString()+r.dir})(s))).join(","),zr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Zn(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Zn(s))).join(",")),e.Te=t}return e.Te}function lc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Nw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ff(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Fu(n.startAt,e.startAt)&&Fu(n.endAt,e.endAt)}function wa(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,t=null,s=[],i=[],r=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function qw(n,e,t,s,i,r,o,c){return new Gr(n,e,t,s,i,r,o,c)}function uc(n){return new Gr(n)}function ju(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function zw(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Ww(n){return n.collectionGroup!==null}function Ks(n){const e=X(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const r of e.explicitOrderBy)e.Ie.push(r),t.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new _e($e.comparator);return o.filters.forEach((u=>{u.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(e).forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new Ir(r,s))})),t.has($e.keyField().canonicalString())||e.Ie.push(new Ir($e.keyField(),s))}return e.Ie}function ut(n){const e=X(n);return e.Ee||(e.Ee=Gw(e,Ks(n))),e.Ee}function Gw(n,e){if(n.limitType==="F")return Bu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const r=i.dir==="desc"?"asc":"desc";return new Ir(i.field,r)}));const t=n.endAt?new Er(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Er(n.startAt.position,n.startAt.inclusive):null;return Bu(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function ba(n,e,t){return new Gr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Kr(n,e){return lc(ut(n),ut(e))&&n.limitType===e.limitType}function gf(n){return`${cc(ut(n))}|lt:${n.limitType}`}function $n(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((i=>pf(i))).join(", ")}]`),zr(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((i=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(i))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((i=>Zn(i))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((i=>Zn(i))).join(",")),`Target(${s})`})(ut(n))}; limitType=${n.limitType})`}function Qr(n,e){return e.isFoundDocument()&&(function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):j.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)})(n,e)&&(function(s,i){for(const r of Ks(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0})(n,e)&&(function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0})(n,e)&&(function(s,i){return!(s.startAt&&!(function(o,c,u){const d=Uu(o,c,u);return o.inclusive?d<=0:d<0})(s.startAt,Ks(s),i)||s.endAt&&!(function(o,c,u){const d=Uu(o,c,u);return o.inclusive?d>=0:d>0})(s.endAt,Ks(s),i))})(n,e)}function Kw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function yf(n){return(e,t)=>{let s=!1;for(const i of Ks(n)){const r=Qw(i,e,t);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Qw(n,e,t){const s=n.field.isKeyField()?j.comparator(e.key,t.key):(function(r,o,c){const u=o.data.field(r),d=c.data.field(r);return u!==null&&d!==null?Xn(u,d):q(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return q(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[t]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){yi(this.inner,((t,s)=>{for(const[i,r]of s)e(i,r)}))}isEmpty(){return Sw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw=new he(j.comparator);function nn(){return Jw}const vf=new he(j.comparator);function Us(...n){let e=vf;for(const t of n)e=e.insert(t.key,t);return e}function Yw(n){let e=vf;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function _n(){return Qs()}function _f(){return Qs()}function Qs(){return new Ln((n=>n.toString()),((n,e)=>n.isEqual(e)))}const Xw=new _e(j.comparator);function Z(...n){let e=Xw;for(const t of n)e=e.add(t);return e}const Zw=new _e(J);function eb(){return Zw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ma(e)?"-0":e}}function nb(n){return{integerValue:""+n}}/**
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
 */class Jr{constructor(){this._=void 0}}function sb(n,e,t){return n instanceof Ta?(function(i,r){const o={fields:{[af]:{stringValue:of},[lf]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&oc(r)&&(r=Wr(r)),r&&(o.fields[cf]=r),{mapValue:o}})(t,e):n instanceof Sr?wf(n,e):n instanceof Ar?bf(n,e):(function(i,r){const o=rb(i,r),c=Hu(o)+Hu(i.Ae);return va(o)&&va(i.Ae)?nb(c):tb(i.serializer,c)})(n,e)}function ib(n,e,t){return n instanceof Sr?wf(n,e):n instanceof Ar?bf(n,e):t}function rb(n,e){return n instanceof Ea?(function(s){return va(s)||(function(r){return!!r&&"doubleValue"in r})(s)})(e)?e:{integerValue:0}:null}class Ta extends Jr{}class Sr extends Jr{constructor(e){super(),this.elements=e}}function wf(n,e){const t=Tf(e);for(const s of n.elements)t.some((i=>ft(i,s)))||t.push(s);return{arrayValue:{values:t}}}class Ar extends Jr{constructor(e){super(),this.elements=e}}function bf(n,e){let t=Tf(e);for(const s of n.elements)t=t.filter((i=>!ft(i,s)));return{arrayValue:{values:t}}}class Ea extends Jr{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Hu(n){return ue(n.integerValue||n.doubleValue)}function Tf(n){return ac(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function ob(n,e){return n.field.isEqual(e.field)&&(function(s,i){return s instanceof Sr&&i instanceof Sr||s instanceof Ar&&i instanceof Ar?Yn(s.elements,i.elements,ft):s instanceof Ea&&i instanceof Ea?ft(s.Ae,i.Ae):s instanceof Ta&&i instanceof Ta})(n.transform,e.transform)}class wn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new wn}static exists(e){return new wn(void 0,e)}static updateTime(e){return new wn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class hc{}function Ef(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new cb(n.key,wn.none()):new dc(n.key,n.data,wn.none());{const t=n.data,s=st.empty();let i=new _e($e.comparator);for(let r of e.fields)if(!i.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Yr(n.key,s,new Bt(i.toArray()),wn.none())}}function ab(n,e,t){n instanceof dc?(function(i,r,o){const c=i.value.clone(),u=zu(i.fieldTransforms,r,o.transformResults);c.setAll(u),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof Yr?(function(i,r,o){if(!rr(i.precondition,r))return void r.convertToUnknownDocument(o.version);const c=zu(i.fieldTransforms,r,o.transformResults),u=r.data;u.setAll(If(i)),u.setAll(c),r.convertToFoundDocument(o.version,u).setHasCommittedMutations()})(n,e,t):(function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function Js(n,e,t,s){return n instanceof dc?(function(r,o,c,u){if(!rr(r.precondition,o))return c;const d=r.value.clone(),m=Wu(r.fieldTransforms,u,o);return d.setAll(m),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null})(n,e,t,s):n instanceof Yr?(function(r,o,c,u){if(!rr(r.precondition,o))return c;const d=Wu(r.fieldTransforms,u,o),m=o.data;return m.setAll(If(r)),m.setAll(d),o.convertToFoundDocument(o.version,m).setHasLocalMutations(),c===null?null:c.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((v=>v.field)))})(n,e,t,s):(function(r,o,c){return rr(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function qu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&Yn(s,i,((r,o)=>ob(r,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class dc extends hc{constructor(e,t,s,i=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Yr extends hc{constructor(e,t,s,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function If(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function zu(n,e,t){const s=new Map;re(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let i=0;i<t.length;i++){const r=n[i],o=r.transform,c=e.data.field(r.field);s.set(r.field,ib(o,c,t[i]))}return s}function Wu(n,e,t){const s=new Map;for(const i of n){const r=i.transform,o=t.data.field(i.field);s.set(i.field,sb(r,o,e))}return s}class cb extends hc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e,t,s,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&ab(r,e,s[i])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Js(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Js(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=_f();return this.mutations.forEach((i=>{const r=e.get(i.key),o=r.overlayedDocument;let c=this.applyToLocalView(o,r.mutatedFields);c=t.has(i.key)?null:c;const u=Ef(o,c);u!==null&&s.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(H.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Z())}isEqual(e){return this.batchId===e.batchId&&Yn(this.mutations,e.mutations,((t,s)=>qu(t,s)))&&Yn(this.baseMutations,e.baseMutations,((t,s)=>qu(t,s)))}}/**
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
 */class ub{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class hb{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de,Y;function Sf(n){if(n===void 0)return St("GRPC error has no .code"),L.UNKNOWN;switch(n){case de.OK:return L.OK;case de.CANCELLED:return L.CANCELLED;case de.UNKNOWN:return L.UNKNOWN;case de.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case de.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case de.INTERNAL:return L.INTERNAL;case de.UNAVAILABLE:return L.UNAVAILABLE;case de.UNAUTHENTICATED:return L.UNAUTHENTICATED;case de.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case de.NOT_FOUND:return L.NOT_FOUND;case de.ALREADY_EXISTS:return L.ALREADY_EXISTS;case de.PERMISSION_DENIED:return L.PERMISSION_DENIED;case de.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case de.ABORTED:return L.ABORTED;case de.OUT_OF_RANGE:return L.OUT_OF_RANGE;case de.UNIMPLEMENTED:return L.UNIMPLEMENTED;case de.DATA_LOSS:return L.DATA_LOSS;default:return q(39323,{code:n})}}(Y=de||(de={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function db(){return new TextEncoder}/**
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
 */const fb=new zt([4294967295,4294967295],0);function Gu(n){const e=db().encode(n),t=new Kd;return t.update(e),new Uint8Array(t.digest())}function Ku(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new zt([t,s],0),new zt([i,r],0)]}class fc{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Fs(`Invalid padding: ${t}`);if(s<0)throw new Fs(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Fs(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Fs(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=zt.fromNumber(this.ge)}ye(e,t,s){let i=e.add(t.multiply(zt.fromNumber(s)));return i.compare(fb)===1&&(i=new zt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Gu(e),[s,i]=Ku(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(s,i,r);if(!this.we(o))return!1}return!0}static create(e,t,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new fc(r,i,t);return s.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=Gu(e),[s,i]=Ku(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(s,i,r);this.be(o)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Fs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,t,s,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const i=new Map;return i.set(e,vi.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Xr(H.min(),i,new he(J),nn(),Z())}}class vi{constructor(e,t,s,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new vi(s,t,Z(),Z(),Z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,t,s,i){this.Se=e,this.removedTargetIds=t,this.key=s,this.De=i}}class Af{constructor(e,t){this.targetId=e,this.Ce=t}}class kf{constructor(e,t,s=Ee.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=i}}class Qu{constructor(){this.ve=0,this.Fe=Ju(),this.Me=Ee.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Z(),t=Z(),s=Z();return this.Fe.forEach(((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:s=s.add(i);break;default:q(38017,{changeType:r})}})),new vi(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=Ju()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,re(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class pb{constructor(e){this.Ge=e,this.ze=new Map,this.je=nn(),this.He=Hi(),this.Je=Hi(),this.Ze=new he(J)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:q(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,i)=>{this.rt(i)&&t(i)}))}st(e){const t=e.targetId,s=e.Ce.count,i=this.ot(t);if(i){const r=i.target;if(wa(r))if(s===0){const o=new j(r.path);this.et(t,o,Re.newNoDocument(o,H.min()))}else re(s===1,20013,{expectedCount:s});else{const o=this._t(t);if(o!==s){const c=this.ut(e),u=c?this.ct(c,e,o):1;if(u!==0){this.it(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=t;let o,c;try{o=en(s).toUint8Array()}catch(u){if(u instanceof rf)return Cn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new fc(o,i,r)}catch(u){return Cn(u instanceof Fs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let i=0;return s.forEach((r=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(c)||(this.et(t,r,null),i++)})),i}Tt(e){const t=new Map;this.ze.forEach(((r,o)=>{const c=this.ot(o);if(c){if(r.current&&wa(c.target)){const u=new j(c.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Re.newNoDocument(u,e))}r.Be&&(t.set(o,r.ke()),r.Ke())}}));let s=Z();this.Je.forEach(((r,o)=>{let c=!0;o.forEachWhile((u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(s=s.add(r))})),this.je.forEach(((r,o)=>o.setReadTime(e)));const i=new Xr(e,t,this.Ze,this.je,s);return this.je=nn(),this.He=Hi(),this.Je=Hi(),this.Ze=new he(J),i}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.qe(t,1):i.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Qu,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new _e(J),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new _e(J),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Qu),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Hi(){return new he(j.comparator)}function Ju(){return new he(j.comparator)}const mb={asc:"ASCENDING",desc:"DESCENDING"},gb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},yb={and:"AND",or:"OR"};class vb{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ia(n,e){return n.useProto3Json||zr(e)?e:{value:e}}function _b(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wb(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function zn(n){return re(!!n,49232),H.fromTimestamp((function(t){const s=Zt(t);return new fe(s.seconds,s.nanos)})(n))}function bb(n,e){return Sa(n,e).canonicalString()}function Sa(n,e){const t=(function(i){return new ie(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Cf(n){const e=ie.fromString(n);return re(Df(e),10190,{key:e.toString()}),e}function Ho(n,e){const t=Cf(e);if(t.get(1)!==n.databaseId.projectId)throw new U(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new U(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new j(Pf(t))}function Rf(n,e){return bb(n.databaseId,e)}function Tb(n){const e=Cf(n);return e.length===4?ie.emptyPath():Pf(e)}function Yu(n){return new ie(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Pf(n){return re(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Eb(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:q(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=(function(d,m){return d.useProto3Json?(re(m===void 0||typeof m=="string",58123),Ee.fromBase64String(m||"")):(re(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),Ee.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(d){const m=d.code===void 0?L.UNKNOWN:Sf(d.code);return new U(m,d.message||"")})(o);t=new kf(s,i,r,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Ho(n,s.document.name),r=zn(s.document.updateTime),o=s.document.createTime?zn(s.document.createTime):H.min(),c=new st({mapValue:{fields:s.document.fields}}),u=Re.newFoundDocument(i,r,o,c),d=s.targetIds||[],m=s.removedTargetIds||[];t=new or(d,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Ho(n,s.document),r=s.readTime?zn(s.readTime):H.min(),o=Re.newNoDocument(i,r),c=s.removedTargetIds||[];t=new or([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Ho(n,s.document),r=s.removedTargetIds||[];t=new or([],r,i,null)}else{if(!("filter"in e))return q(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new hb(i,r),c=s.targetId;t=new Af(c,o)}}return t}function Ib(n,e){return{documents:[Rf(n,e.path)]}}function Sb(n,e){const t={structuredQuery:{}},s=e.path;let i;e.collectionGroup!==null?(i=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Rf(n,i);const r=(function(d){if(d.length!==0)return Lf(pt.create(d,"and"))})(e.filters);r&&(t.structuredQuery.where=r);const o=(function(d){if(d.length!==0)return d.map((m=>(function(T){return{field:Un(T.field),direction:Cb(T.dir)}})(m)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Ia(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{ft:t,parent:i}}function Ab(n){let e=Tb(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let i=null;if(s>0){re(s===1,65062);const m=t.from[0];m.allDescendants?i=m.collectionId:e=e.child(m.collectionId)}let r=[];t.where&&(r=(function(v){const T=xf(v);return T instanceof pt&&df(T)?T.getFilters():[T]})(t.where));let o=[];t.orderBy&&(o=(function(v){return v.map((T=>(function(D){return new Ir(Fn(D.field),(function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(D.direction))})(T)))})(t.orderBy));let c=null;t.limit&&(c=(function(v){let T;return T=typeof v=="object"?v.value:v,zr(T)?null:T})(t.limit));let u=null;t.startAt&&(u=(function(v){const T=!!v.before,C=v.values||[];return new Er(C,T)})(t.startAt));let d=null;return t.endAt&&(d=(function(v){const T=!v.before,C=v.values||[];return new Er(C,T)})(t.endAt)),qw(e,i,o,r,c,"F",u,d)}function kb(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function xf(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Fn(t.unaryFilter.field);return ve.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=Fn(t.unaryFilter.field);return ve.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Fn(t.unaryFilter.field);return ve.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Fn(t.unaryFilter.field);return ve.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return q(61313);default:return q(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ve.create(Fn(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return q(58110);default:return q(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return pt.create(t.compositeFilter.filters.map((s=>xf(s))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return q(1026)}})(t.compositeFilter.op))})(n):q(30097,{filter:n})}function Cb(n){return mb[n]}function Rb(n){return gb[n]}function Pb(n){return yb[n]}function Un(n){return{fieldPath:n.canonicalString()}}function Fn(n){return $e.fromServerFormat(n.fieldPath)}function Lf(n){return n instanceof ve?(function(t){if(t.op==="=="){if($u(t.value))return{unaryFilter:{field:Un(t.field),op:"IS_NAN"}};if(Vu(t.value))return{unaryFilter:{field:Un(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if($u(t.value))return{unaryFilter:{field:Un(t.field),op:"IS_NOT_NAN"}};if(Vu(t.value))return{unaryFilter:{field:Un(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Un(t.field),op:Rb(t.op),value:t.value}}})(n):n instanceof pt?(function(t){const s=t.getFilters().map((i=>Lf(i)));return s.length===1?s[0]:{compositeFilter:{op:Pb(t.op),filters:s}}})(n):q(54877,{filter:n})}function Df(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t,s,i,r=H.min(),o=H.min(),c=Ee.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new jt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new jt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e){this.yt=e}}function Lb(n){const e=Ab({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ba(e,e.limit,"L"):e}/**
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
 */class Db{constructor(){this.Sn=new Nb}addToCollectionParentIndex(e,t){return this.Sn.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(Xt.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(Xt.min())}updateCollectionGroup(e,t,s){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class Nb{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t]||new _e(ie.comparator),r=!i.has(s);return this.index[t]=i.add(s),r}has(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t];return i&&i.has(s)}getEntries(e){return(this.index[e]||new _e(ie.comparator)).toArray()}}/**
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
 */const Xu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Nf=41943040;class je{static withCacheSize(e){return new je(e,je.DEFAULT_COLLECTION_PERCENTILE,je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */je.DEFAULT_COLLECTION_PERCENTILE=10,je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,je.DEFAULT=new je(Nf,je.DEFAULT_COLLECTION_PERCENTILE,je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),je.DISABLED=new je(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new es(0)}static ar(){return new es(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu="LruGarbageCollector",Ob=1048576;function eh([n,e],[t,s]){const i=J(n,t);return i===0?J(e,s):i}class Mb{constructor(e){this.Pr=e,this.buffer=new _e(eh),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();eh(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Vb{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){O(Zu,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){us(t)?O(Zu,"Ignoring IndexedDB error during garbage collection: ",t):await Hr(t)}await this.Ar(3e5)}))}}class $b{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return R.resolve(qr.ce);const s=new Mb(t);return this.Vr.forEachTarget(e,(i=>s.Er(i.sequenceNumber))).next((()=>this.Vr.mr(e,(i=>s.Er(i))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(Xu)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xu):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,i,r,o,c,u,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((v=>(v>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),i=this.params.maximumSequenceNumbersToCollect):i=v,o=Date.now(),this.nthSequenceNumber(e,i)))).next((v=>(s=v,c=Date.now(),this.removeTargets(e,s,t)))).next((v=>(r=v,u=Date.now(),this.removeOrphanedDocuments(e,s)))).next((v=>(d=Date.now(),Vn()<=Q.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-m}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${r} targets in `+(u-c)+`ms
	Removed ${v} documents in `+(d-u)+`ms
Total Duration: ${d-m}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:v}))))}}function Ub(n,e){return new $b(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(){this.changes=new Ln((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?R.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Bb{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e,t,s,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(s=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(s!==null&&Js(s.mutation,i,Bt.empty(),fe.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Z()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Z()){const i=_n();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,s).next((r=>{let o=Us();return r.forEach(((c,u)=>{o=o.insert(c,u.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const s=_n();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Z())))}populateOverlays(e,t,s){const i=[];return s.forEach((r=>{t.has(r)||i.push(r)})),this.documentOverlayCache.getOverlays(e,i).next((r=>{r.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,s,i){let r=nn();const o=Qs(),c=(function(){return Qs()})();return t.forEach(((u,d)=>{const m=s.get(d.key);i.has(d.key)&&(m===void 0||m.mutation instanceof Yr)?r=r.insert(d.key,d):m!==void 0?(o.set(d.key,m.mutation.getFieldMask()),Js(m.mutation,d,m.mutation.getFieldMask(),fe.now())):o.set(d.key,Bt.empty())})),this.recalculateAndSaveOverlays(e,r).next((u=>(u.forEach(((d,m)=>o.set(d,m))),t.forEach(((d,m)=>c.set(d,new Bb(m,o.get(d)??null)))),c)))}recalculateAndSaveOverlays(e,t){const s=Qs();let i=new he(((o,c)=>o-c)),r=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((u=>{const d=t.get(u);if(d===null)return;let m=s.get(u)||Bt.empty();m=c.applyToLocalView(d,m),s.set(u,m);const v=(i.get(c.batchId)||Z()).add(u);i=i.insert(c.batchId,v)}))})).next((()=>{const o=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,m=u.value,v=_f();m.forEach((T=>{if(!r.has(T)){const C=Ef(t.get(T),s.get(T));C!==null&&v.set(T,C),r=r.add(T)}})),o.push(this.documentOverlayCache.saveOverlays(e,d,v))}return R.waitFor(o)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,i){return zw(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ww(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,i):this.getDocumentsMatchingCollectionQuery(e,t,s,i)}getNextDocuments(e,t,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,i).next((r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,i-r.size):R.resolve(_n());let c=si,u=r;return o.next((d=>R.forEach(d,((m,v)=>(c<v.largestBatchId&&(c=v.largestBatchId),r.get(m)?R.resolve():this.remoteDocumentCache.getEntry(e,m).next((T=>{u=u.insert(m,T)}))))).next((()=>this.populateOverlays(e,d,r))).next((()=>this.computeViews(e,u,d,Z()))).next((m=>({batchId:c,changes:Yw(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new j(t)).next((s=>{let i=Us();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,i){const r=t.collectionGroup;let o=Us();return this.indexManager.getCollectionParents(e,r).next((c=>R.forEach(c,(u=>{const d=(function(v,T){return new Gr(T,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)})(t,u.child(r));return this.getDocumentsMatchingCollectionQuery(e,d,s,i).next((m=>{m.forEach(((v,T)=>{o=o.insert(v,T)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,r,i)))).next((o=>{r.forEach(((u,d)=>{const m=d.getKey();o.get(m)===null&&(o=o.insert(m,Re.newInvalidDocument(m)))}));let c=Us();return o.forEach(((u,d)=>{const m=r.get(u);m!==void 0&&Js(m.mutation,d,Bt.empty(),fe.now()),Qr(t,d)&&(c=c.insert(u,d))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return R.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:zn(i.createTime)}})(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(i){return{name:i.name,query:Lb(i.bundledQuery),readTime:zn(i.readTime)}})(t)),R.resolve()}}/**
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
 */class qb{constructor(){this.overlays=new he(j.comparator),this.Lr=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const s=_n();return R.forEach(t,(i=>this.getOverlay(e,i).next((r=>{r!==null&&s.set(i,r)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((i,r)=>{this.bt(e,t,r)})),R.resolve()}removeOverlaysForBatchId(e,t,s){const i=this.Lr.get(s);return i!==void 0&&(i.forEach((r=>this.overlays=this.overlays.remove(r))),this.Lr.delete(s)),R.resolve()}getOverlaysForCollection(e,t,s){const i=_n(),r=t.length+1,o=new j(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===r&&u.largestBatchId>s&&i.set(u.getKey(),u)}return R.resolve(i)}getOverlaysForCollectionGroup(e,t,s,i){let r=new he(((d,m)=>d-m));const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>s){let m=r.get(d.largestBatchId);m===null&&(m=_n(),r=r.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=_n(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((d,m)=>c.set(d,m))),!(c.size()>=i)););return R.resolve(c)}bt(e,t,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(s.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new ub(t,s));let r=this.Lr.get(t);r===void 0&&(r=Z(),this.Lr.set(t,r)),this.Lr.set(t,r.add(s.key))}}/**
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
 */class zb{constructor(){this.sessionToken=Ee.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(){this.kr=new _e(be.Kr),this.qr=new _e(be.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new be(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new be(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new j(new ie([])),s=new be(t,e),i=new be(t,e+1),r=[];return this.qr.forEachInRange([s,i],(o=>{this.Wr(o),r.push(o.key)})),r}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new j(new ie([])),s=new be(t,e),i=new be(t,e+1);let r=Z();return this.qr.forEachInRange([s,i],(o=>{r=r.add(o.key)})),r}containsKey(e){const t=new be(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class be{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return j.comparator(e.key,t.key)||J(e.Hr,t.Hr)}static Ur(e,t){return J(e.Hr,t.Hr)||j.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new _e(be.Kr)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,i){const r=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new lb(r,t,s,i);this.mutationQueue.push(o);for(const c of i)this.Jr=this.Jr.add(new be(c.key,r)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,t){return R.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=this.Xr(s),r=i<0?0:i;return R.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?Tw:this.Yn-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new be(t,0),i=new be(t,Number.POSITIVE_INFINITY),r=[];return this.Jr.forEachInRange([s,i],(o=>{const c=this.Zr(o.Hr);r.push(c)})),R.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new _e(J);return t.forEach((i=>{const r=new be(i,0),o=new be(i,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([r,o],(c=>{s=s.add(c.Hr)}))})),R.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1;let r=s;j.isDocumentKey(r)||(r=r.child(""));const o=new be(new j(r),0);let c=new _e(J);return this.Jr.forEachWhile((u=>{const d=u.key.path;return!!s.isPrefixOf(d)&&(d.length===i&&(c=c.add(u.Hr)),!0)}),o),R.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((s=>{const i=this.Zr(s);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){re(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Jr;return R.forEach(t.mutations,(i=>{const r=new be(i.key,t.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Jr=s}))}nr(e){}containsKey(e,t){const s=new be(t,0),i=this.Jr.firstAfterOrEqual(s);return R.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e){this.ti=e,this.docs=(function(){return new he(j.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,i=this.docs.get(s),r=i?i.size:0,o=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return R.resolve(s?s.document.mutableCopy():Re.newInvalidDocument(t))}getEntries(e,t){let s=nn();return t.forEach((i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Re.newInvalidDocument(i))})),R.resolve(s)}getDocumentsMatchingQuery(e,t,s,i){let r=nn();const o=t.path,c=new j(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:m}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||vw(yw(m),s)<=0||(i.has(m.key)||Qr(t,m))&&(r=r.insert(m.key,m.mutableCopy()))}return R.resolve(r)}getAllFromCollectionGroup(e,t,s,i){q(9500)}ni(e,t){return R.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new Kb(this)}getSize(e){return R.resolve(this.size)}}class Kb extends Fb{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,i)=>{i.isValidDocument()?t.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(s)})),R.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e){this.persistence=e,this.ri=new Ln((t=>cc(t)),lc),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.ii=0,this.si=new pc,this.targetCount=0,this.oi=es._r()}forEachTarget(e,t){return this.ri.forEach(((s,i)=>t(i))),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),R.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new es(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.lr(t),R.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,s){let i=0;const r=[];return this.ri.forEach(((o,c)=>{c.sequenceNumber<=t&&s.get(c.targetId)===null&&(this.ri.delete(o),r.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)})),R.waitFor(r).next((()=>i))}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return R.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),R.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach((o=>{r.push(i.markPotentiallyOrphaned(e,o))})),R.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return R.resolve(s)}containsKey(e,t){return R.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,t){this._i={},this.overlays={},this.ai=new qr(0),this.ui=!1,this.ui=!0,this.ci=new zb,this.referenceDelegate=e(this),this.li=new Qb(this),this.indexManager=new Db,this.remoteDocumentCache=(function(i){return new Gb(i)})((s=>this.referenceDelegate.hi(s))),this.serializer=new xb(t),this.Pi=new Hb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new qb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new Wb(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){O("MemoryPersistence","Starting transaction:",e);const i=new Jb(this.ai.next());return this.referenceDelegate.Ti(),s(i).next((r=>this.referenceDelegate.Ii(i).next((()=>r)))).toPromise().then((r=>(i.raiseOnCommittedEvent(),r)))}Ei(e,t){return R.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class Jb extends ww{constructor(e){super(),this.currentSequenceNumber=e}}class mc{constructor(e){this.persistence=e,this.Ri=new pc,this.Ai=null}static Vi(e){return new mc(e)}get di(){if(this.Ai)return this.Ai;throw q(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),R.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),R.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((i=>this.di.add(i.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((r=>this.di.add(r.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.di,(s=>{const i=j.fromPath(s);return this.mi(e,i).next((r=>{r||t.removeEntry(i,H.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return R.or([()=>R.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class kr{constructor(e,t){this.persistence=e,this.fi=new Ln((s=>Ew(s.path)),((s,i)=>s.isEqual(i))),this.garbageCollector=Ub(this,t)}static Vi(e,t){return new kr(e,t)}Ti(){}Ii(e){return R.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((i=>s+i))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return R.forEach(this.fi,((s,i)=>this.wr(e,s,i).next((r=>r?R.resolve():t(i)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const i=this.persistence.getRemoteDocumentCache(),r=i.newChangeBuffer();return i.ni(e,(o=>this.wr(e,o,t).next((c=>{c||(s++,r.removeEntry(o,H.min()))})))).next((()=>r.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),R.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),R.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),R.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),R.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ir(e.data.value)),t}wr(e,t,s){return R.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.fi.get(t);return R.resolve(i!==void 0&&i>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,t,s,i){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=i}static Es(e,t){let s=Z(),i=Z();for(const r of t.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new gc(e,t.fromCache,s,i)}}/**
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
 */class Yb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Xb{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return qm()?8:bw(Pe())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,i){const r={result:null};return this.gs(e,t).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ps(e,t,i,s).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new Yb;return this.ys(e,t,o).next((c=>{if(r.result=c,this.As)return this.ws(e,t,o,c.size)}))})).next((()=>r.result))}ws(e,t,s,i){return s.documentReadCount<this.Vs?(Vn()<=Q.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",$n(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),R.resolve()):(Vn()<=Q.DEBUG&&O("QueryEngine","Query:",$n(t),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.ds*i?(Vn()<=Q.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",$n(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ut(t))):R.resolve())}gs(e,t){if(ju(t))return R.resolve(null);let s=ut(t);return this.indexManager.getIndexType(e,s).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=ba(t,null,"F"),s=ut(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((r=>{const o=Z(...r);return this.fs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,s).next((u=>{const d=this.bs(t,c);return this.Ss(t,d,o,u.readTime)?this.gs(e,ba(t,null,"F")):this.Ds(e,d,t,u)}))))})))))}ps(e,t,s,i){return ju(t)||i.isEqual(H.min())?R.resolve(null):this.fs.getDocuments(e,s).next((r=>{const o=this.bs(t,r);return this.Ss(t,o,s,i)?R.resolve(null):(Vn()<=Q.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),$n(t)),this.Ds(e,o,t,gw(i,si)).next((c=>c)))}))}bs(e,t){let s=new _e(yf(e));return t.forEach(((i,r)=>{Qr(e,r)&&(s=s.add(r))})),s}Ss(e,t,s,i){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}ys(e,t,s){return Vn()<=Q.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",$n(t)),this.fs.getDocumentsMatchingQuery(e,t,Xt.min(),s)}Ds(e,t,s,i){return this.fs.getDocumentsMatchingQuery(e,s,i).next((r=>(t.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc="LocalStore",Zb=3e8;class eT{constructor(e,t,s,i){this.persistence=e,this.Cs=t,this.serializer=i,this.vs=new he(J),this.Fs=new Ln((r=>cc(r)),lc),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jb(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function tT(n,e,t,s){return new eT(n,e,t,s)}async function Mf(n,e){const t=X(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let i;return t.mutationQueue.getAllMutationBatches(s).next((r=>(i=r,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((r=>{const o=[],c=[];let u=Z();for(const d of i){o.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}for(const d of r){c.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(s,u).next((d=>({Ns:d,removedBatchIds:o,addedBatchIds:c})))}))}))}function Vf(n){const e=X(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function nT(n,e){const t=X(n),s=e.snapshotVersion;let i=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});i=t.vs;const c=[];e.targetChanges.forEach(((m,v)=>{const T=i.get(v);if(!T)return;c.push(t.li.removeMatchingKeys(r,m.removedDocuments,v).next((()=>t.li.addMatchingKeys(r,m.addedDocuments,v))));let C=T.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(v)!==null?C=C.withResumeToken(Ee.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):m.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(m.resumeToken,s)),i=i.insert(v,C),(function(M,N,z){return M.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=Zb?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0})(T,C,m)&&c.push(t.li.updateTargetData(r,C))}));let u=nn(),d=Z();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(r,m))})),c.push(sT(r,o,e.documentUpdates).next((m=>{u=m.Bs,d=m.Ls}))),!s.isEqual(H.min())){const m=t.li.getLastRemoteSnapshotVersion(r).next((v=>t.li.setTargetsMetadata(r,r.currentSequenceNumber,s)));c.push(m)}return R.waitFor(c).next((()=>o.apply(r))).next((()=>t.localDocuments.getLocalViewOfDocuments(r,u,d))).next((()=>u))})).then((r=>(t.vs=i,r)))}function sT(n,e,t){let s=Z(),i=Z();return t.forEach((r=>s=s.add(r))),e.getEntries(n,s).next((r=>{let o=nn();return t.forEach(((c,u)=>{const d=r.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(H.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):O(yc,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)})),{Bs:o,Ls:i}}))}function iT(n,e){const t=X(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let i;return t.li.getTargetData(s,e).next((r=>r?(i=r,R.resolve(i)):t.li.allocateTargetId(s).next((o=>(i=new jt(e,o,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,i).next((()=>i)))))))})).then((s=>{const i=t.vs.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function Aa(n,e,t){const s=X(n),i=s.vs.get(e),r=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",r,(o=>s.persistence.referenceDelegate.removeTarget(o,i)))}catch(o){if(!us(o))throw o;O(yc,`Failed to update sequence numbers for target ${e}: ${o}`)}s.vs=s.vs.remove(e),s.Fs.delete(i.target)}function th(n,e,t){const s=X(n);let i=H.min(),r=Z();return s.persistence.runTransaction("Execute query","readwrite",(o=>(function(u,d,m){const v=X(u),T=v.Fs.get(m);return T!==void 0?R.resolve(v.vs.get(T)):v.li.getTargetData(d,m)})(s,o,ut(e)).next((c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(o,c.targetId).next((u=>{r=u}))})).next((()=>s.Cs.getDocumentsMatchingQuery(o,e,t?i:H.min(),t?r:Z()))).next((c=>(rT(s,Kw(e),c),{documents:c,ks:r})))))}function rT(n,e,t){let s=n.Ms.get(e)||H.min();t.forEach(((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)})),n.Ms.set(e,s)}class nh{constructor(){this.activeTargetIds=eb()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class oT{constructor(){this.vo=new nh,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new nh,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class aT{Mo(e){}shutdown(){}}/**
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
 */const sh="ConnectivityMonitor";class ih{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){O(sh,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){O(sh,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let qi=null;function ka(){return qi===null?qi=(function(){return 268435456+Math.round(2147483648*Math.random())})():qi++,"0x"+qi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo="RestConnection",cT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class lT{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${i}`,this.$o=this.databaseId.database===Tr?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Wo(e,t,s,i,r){const o=ka(),c=this.Qo(e,t.toUriEncodedString());O(qo,`Sending RPC '${e}' ${o}:`,c,s);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,r);const{host:d}=new URL(c),m=rn(d);return this.zo(e,c,u,s,m).then((v=>(O(qo,`Received RPC '${e}' ${o}: `,v),v)),(v=>{throw Cn(qo,`RPC '${e}' ${o} failed with error: `,v,"url: ",c,"request:",s),v}))}jo(e,t,s,i,r,o){return this.Wo(e,t,s,i,r)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ls})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,r)=>e[r]=i)),s&&s.headers.forEach(((i,r)=>e[r]=i))}Qo(e,t){const s=cT[e];let i=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke="WebChannelConnection",Ps=(n,e,t)=>{n.listen(e,(s=>{try{t(s)}catch(i){setTimeout((()=>{throw i}),0)}}))};class Wn extends lT{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Wn.c_){const e=Xd();Ps(e,Yd.STAT_EVENT,(t=>{t.stat===fa.PROXY?O(ke,"STAT_EVENT: detected buffering proxy"):t.stat===fa.NOPROXY&&O(ke,"STAT_EVENT: detected no buffering proxy")})),Wn.c_=!0}}zo(e,t,s,i,r){const o=ka();return new Promise(((c,u)=>{const d=new Qd;d.setWithCredentials(!0),d.listenOnce(Jd.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case nr.NO_ERROR:const v=d.getResponseJson();O(ke,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(v)),c(v);break;case nr.TIMEOUT:O(ke,`RPC '${e}' ${o} timed out`),u(new U(L.DEADLINE_EXCEEDED,"Request time out"));break;case nr.HTTP_ERROR:const T=d.getStatus();if(O(ke,`RPC '${e}' ${o} failed with status:`,T,"response text:",d.getResponseText()),T>0){let C=d.getResponseJson();Array.isArray(C)&&(C=C[0]);const D=C==null?void 0:C.error;if(D&&D.status&&D.message){const M=(function(z){const G=z.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(G)>=0?G:L.UNKNOWN})(D.status);u(new U(M,D.message))}else u(new U(L.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new U(L.UNAVAILABLE,"Connection failed."));break;default:q(9055,{l_:e,streamId:o,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{O(ke,`RPC '${e}' ${o} completed.`)}}));const m=JSON.stringify(i);O(ke,`RPC '${e}' ${o} sending request:`,i),d.send(t,"POST",m,s,15)}))}T_(e,t,s){const i=ka(),r=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const d=r.join("");O(ke,`Creating RPC '${e}' stream ${i}: ${d}`,c);const m=o.createWebChannel(d,c);this.I_(m);let v=!1,T=!1;const C=new uT({Ho:D=>{T?O(ke,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(v||(O(ke,`Opening RPC '${e}' stream ${i} transport.`),m.open(),v=!0),O(ke,`RPC '${e}' stream ${i} sending:`,D),m.send(D))},Jo:()=>m.close()});return Ps(m,$s.EventType.OPEN,(()=>{T||(O(ke,`RPC '${e}' stream ${i} transport opened.`),C.i_())})),Ps(m,$s.EventType.CLOSE,(()=>{T||(T=!0,O(ke,`RPC '${e}' stream ${i} transport closed`),C.o_(),this.E_(m))})),Ps(m,$s.EventType.ERROR,(D=>{T||(T=!0,Cn(ke,`RPC '${e}' stream ${i} transport errored. Name:`,D.name,"Message:",D.message),C.o_(new U(L.UNAVAILABLE,"The operation could not be completed")))})),Ps(m,$s.EventType.MESSAGE,(D=>{var M;if(!T){const N=D.data[0];re(!!N,16349);const z=N,G=(z==null?void 0:z.error)||((M=z[0])==null?void 0:M.error);if(G){O(ke,`RPC '${e}' stream ${i} received error:`,G);const V=G.status;let B=(function(b){const y=de[b];if(y!==void 0)return Sf(y)})(V),K=G.message;V==="NOT_FOUND"&&K.includes("database")&&K.includes("does not exist")&&K.includes(this.databaseId.database)&&Cn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),B===void 0&&(B=L.INTERNAL,K="Unknown error status: "+V+" with message "+G.message),T=!0,C.o_(new U(B,K)),m.close()}else O(ke,`RPC '${e}' stream ${i} received:`,N),C.__(N)}})),Wn.u_(),setTimeout((()=>{C.s_()}),0),C}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Zd()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(n){return new Wn(n)}function zo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(n){return new vb(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wn.c_=!1;class Uf{constructor(e,t,s=1e3,i=1.5,r=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=i,this.V_=r,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-s);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh="PersistentStream";class dT{constructor(e,t,s,i,r,o,c,u){this.Ci=e,this.b_=s,this.S_=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Uf(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===L.RESOURCE_EXHAUSTED?(St(t.toString()),St("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,i])=>{this.D_===t&&this.G_(s,i)}),(s=>{e((()=>{const i=new U(L.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(i)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((i=>{s((()=>this.z_(i)))})),this.stream.onMessage((i=>{s((()=>++this.F_==1?this.H_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return O(rh,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(O(rh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class fT extends dT{constructor(e,t,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,i,o),this.serializer=r}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Eb(this.serializer,e),s=(function(r){if(!("targetChange"in r))return H.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?H.min():o.readTime?zn(o.readTime):H.min()})(e);return this.listener.J_(t,s)}Z_(e){const t={};t.database=Yu(this.serializer),t.addTarget=(function(r,o){let c;const u=o.target;if(c=wa(u)?{documents:Ib(r,u)}:{query:Sb(r,u).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=wb(r,o.resumeToken);const d=Ia(r,o.expectedCount);d!==null&&(c.expectedCount=d)}else if(o.snapshotVersion.compareTo(H.min())>0){c.readTime=_b(r,o.snapshotVersion.toTimestamp());const d=Ia(r,o.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,e);const s=kb(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=Yu(this.serializer),t.removeTarget=e,this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{}class mT extends pT{constructor(e,t,s,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new U(L.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Wo(e,Sa(t,s),i,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new U(L.UNKNOWN,r.toString())}))}jo(e,t,s,i,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.jo(e,Sa(t,s),i,o,c,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new U(L.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function gT(n,e,t,s){return new mT(n,e,t,s)}class yT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(St(t),this.aa=!1):O("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts="RemoteStore";class vT{constructor(e,t,s,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=r,this.Aa.Mo((o=>{s.enqueueAndForget((async()=>{wi(this)&&(O(ts,"Restarting streams for network reachability change."),await(async function(u){const d=X(u);d.Ea.add(4),await _i(d),d.Va.set("Unknown"),d.Ea.delete(4),await Zr(d)})(this))}))})),this.Va=new yT(s,i)}}async function Zr(n){if(wi(n))for(const e of n.Ra)await e(!0)}async function _i(n){for(const e of n.Ra)await e(!1)}function Ff(n,e){const t=X(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),bc(t)?wc(t):hs(t).O_()&&_c(t,e))}function vc(n,e){const t=X(n),s=hs(t);t.Ia.delete(e),s.O_()&&Bf(t,e),t.Ia.size===0&&(s.O_()?s.L_():wi(t)&&t.Va.set("Unknown"))}function _c(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}hs(n).Z_(e)}function Bf(n,e){n.da.$e(e),hs(n).X_(e)}function wc(n){n.da=new pb({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),hs(n).start(),n.Va.ua()}function bc(n){return wi(n)&&!hs(n).x_()&&n.Ia.size>0}function wi(n){return X(n).Ea.size===0}function jf(n){n.da=void 0}async function _T(n){n.Va.set("Online")}async function wT(n){n.Ia.forEach(((e,t)=>{_c(n,e)}))}async function bT(n,e){jf(n),bc(n)?(n.Va.ha(e),wc(n)):n.Va.set("Unknown")}async function TT(n,e,t){if(n.Va.set("Online"),e instanceof kf&&e.state===2&&e.cause)try{await(async function(i,r){const o=r.cause;for(const c of r.targetIds)i.Ia.has(c)&&(await i.remoteSyncer.rejectListen(c,o),i.Ia.delete(c),i.da.removeTarget(c))})(n,e)}catch(s){O(ts,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await oh(n,s)}else if(e instanceof or?n.da.Xe(e):e instanceof Af?n.da.st(e):n.da.tt(e),!t.isEqual(H.min()))try{const s=await Vf(n.localStore);t.compareTo(s)>=0&&await(function(r,o){const c=r.da.Tt(o);return c.targetChanges.forEach(((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const m=r.Ia.get(d);m&&r.Ia.set(d,m.withResumeToken(u.resumeToken,o))}})),c.targetMismatches.forEach(((u,d)=>{const m=r.Ia.get(u);if(!m)return;r.Ia.set(u,m.withResumeToken(Ee.EMPTY_BYTE_STRING,m.snapshotVersion)),Bf(r,u);const v=new jt(m.target,u,d,m.sequenceNumber);_c(r,v)})),r.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(s){O(ts,"Failed to raise snapshot:",s),await oh(n,s)}}async function oh(n,e,t){if(!us(e))throw e;n.Ea.add(1),await _i(n),n.Va.set("Offline"),t||(t=()=>Vf(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{O(ts,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Zr(n)}))}async function ah(n,e){const t=X(n);t.asyncQueue.verifyOperationInProgress(),O(ts,"RemoteStore received new credentials");const s=wi(t);t.Ea.add(3),await _i(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Zr(t)}async function ET(n,e){const t=X(n);e?(t.Ea.delete(2),await Zr(t)):e||(t.Ea.add(2),await _i(t),t.Va.set("Unknown"))}function hs(n){return n.ma||(n.ma=(function(t,s,i){const r=X(t);return r.sa(),new fT(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)})(n.datastore,n.asyncQueue,{Zo:_T.bind(null,n),Yo:wT.bind(null,n),t_:bT.bind(null,n),J_:TT.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),bc(n)?wc(n):n.Va.set("Unknown")):(await n.ma.stop(),jf(n))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,t,s,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,i,r){const o=Date.now()+s,c=new Tc(e,t,o,i,r);return c.start(s),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hf(n,e){if(St("AsyncQueue",`${e}: ${n}`),us(n))return new U(L.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{static emptySet(e){return new Gn(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||j.comparator(t.key,s.key):(t,s)=>j.comparator(t.key,s.key),this.keyedMap=Us(),this.sortedSet=new he(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Gn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Gn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(){this.ga=new he(j.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):q(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class ns{constructor(e,t,s,i,r,o,c,u,d){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,s,i,r){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new ns(e,t,Gn.emptySet(t),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Kr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==s[i].type||!t[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class ST{constructor(){this.queries=lh(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const i=X(t),r=i.queries;i.queries=lh(),r.forEach(((o,c)=>{for(const u of c.ba)u.onError(s)}))})(this,new U(L.ABORTED,"Firestore shutting down"))}}function lh(){return new Ln((n=>gf(n)),Kr)}async function AT(n,e){const t=X(n);let s=3;const i=e.query;let r=t.queries.get(i);r?!r.Sa()&&e.Da()&&(s=2):(r=new IT,s=e.Da()?0:1);try{switch(s){case 0:r.wa=await t.onListen(i,!0);break;case 1:r.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const c=Hf(o,`Initialization of query '${$n(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,r),r.ba.push(e),e.va(t.onlineState),r.wa&&e.Fa(r.wa)&&Ec(t)}async function kT(n,e){const t=X(n),s=e.query;let i=3;const r=t.queries.get(s);if(r){const o=r.ba.indexOf(e);o>=0&&(r.ba.splice(o,1),r.ba.length===0?i=e.Da()?0:1:!r.Sa()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function CT(n,e){const t=X(n);let s=!1;for(const i of e){const r=i.query,o=t.queries.get(r);if(o){for(const c of o.ba)c.Fa(i)&&(s=!0);o.wa=i}}s&&Ec(t)}function RT(n,e,t){const s=X(n),i=s.queries.get(e);if(i)for(const r of i.ba)r.onError(t);s.queries.delete(e)}function Ec(n){n.Ca.forEach((e=>{e.next()}))}var Ca,uh;(uh=Ca||(Ca={})).Ma="default",uh.Cache="cache";class PT{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new ns(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.Ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ca.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e){this.key=e}}class zf{constructor(e){this.key=e}}class xT{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Z(),this.mutatedKeys=Z(),this.eu=yf(e),this.tu=new Gn(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new ch,i=t?t.tu:this.tu;let r=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((m,v)=>{const T=i.get(m),C=Qr(this.query,v)?v:null,D=!!T&&this.mutatedKeys.has(T.key),M=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let N=!1;T&&C?T.data.isEqual(C.data)?D!==M&&(s.track({type:3,doc:C}),N=!0):this.su(T,C)||(s.track({type:2,doc:C}),N=!0,(u&&this.eu(C,u)>0||d&&this.eu(C,d)<0)&&(c=!0)):!T&&C?(s.track({type:0,doc:C}),N=!0):T&&!C&&(s.track({type:1,doc:T}),N=!0,(u||d)&&(c=!0)),N&&(C?(o=o.add(C),r=M?r.add(m):r.delete(m)):(o=o.delete(m),r=r.delete(m)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const m=this.query.limitType==="F"?o.last():o.first();o=o.delete(m.key),r=r.delete(m.key),s.track({type:1,doc:m})}return{tu:o,iu:s,Ss:c,mutatedKeys:r}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,i){const r=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((m,v)=>(function(C,D){const M=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q(20277,{Vt:N})}};return M(C)-M(D)})(m.type,v.type)||this.eu(m.doc,v.doc))),this.ou(s),i=i??!1;const c=t&&!i?this._u():[],u=this.Ya.size===0&&this.current&&!i?1:0,d=u!==this.Xa;return this.Xa=u,o.length!==0||d?{snapshot:new ns(this.query,e.tu,r,o,e.mutatedKeys,u===0,d,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ch,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Z(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new zf(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new qf(s))})),t}cu(e){this.Za=e.ks,this.Ya=Z();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return ns.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Ic="SyncEngine";class LT{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class DT{constructor(e){this.key=e,this.hu=!1}}class NT{constructor(e,t,s,i,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Ln((c=>gf(c)),Kr),this.Iu=new Map,this.Eu=new Set,this.Ru=new he(j.comparator),this.Au=new Map,this.Vu=new pc,this.du={},this.mu=new Map,this.fu=es.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function OT(n,e,t=!0){const s=Jf(n);let i;const r=s.Tu.get(e);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.lu()):i=await Wf(s,e,t,!0),i}async function MT(n,e){const t=Jf(n);await Wf(t,e,!0,!1)}async function Wf(n,e,t,s){const i=await iT(n.localStore,ut(e)),r=i.targetId,o=n.sharedClientState.addLocalQueryTarget(r,t);let c;return s&&(c=await VT(n,e,r,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&Ff(n.remoteStore,i),c}async function VT(n,e,t,s,i){n.pu=(v,T,C)=>(async function(M,N,z,G){let V=N.view.ru(z);V.Ss&&(V=await th(M.localStore,N.query,!1).then((({documents:b})=>N.view.ru(b,V))));const B=G&&G.targetChanges.get(N.targetId),K=G&&G.targetMismatches.get(N.targetId)!=null,te=N.view.applyChanges(V,M.isPrimaryClient,B,K);return dh(M,N.targetId,te.au),te.snapshot})(n,v,T,C);const r=await th(n.localStore,e,!0),o=new xT(e,r.ks),c=o.ru(r.documents),u=vi.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",i),d=o.applyChanges(c,n.isPrimaryClient,u);dh(n,t,d.au);const m=new LT(e,t,o);return n.Tu.set(e,m),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function $T(n,e,t){const s=X(n),i=s.Tu.get(e),r=s.Iu.get(i.targetId);if(r.length>1)return s.Iu.set(i.targetId,r.filter((o=>!Kr(o,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await Aa(s.localStore,i.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(i.targetId),t&&vc(s.remoteStore,i.targetId),Ra(s,i.targetId)})).catch(Hr)):(Ra(s,i.targetId),await Aa(s.localStore,i.targetId,!0))}async function UT(n,e){const t=X(n),s=t.Tu.get(e),i=t.Iu.get(s.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),vc(t.remoteStore,s.targetId))}async function Gf(n,e){const t=X(n);try{const s=await nT(t.localStore,e);e.targetChanges.forEach(((i,r)=>{const o=t.Au.get(r);o&&(re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?re(o.hu,14607):i.removedDocuments.size>0&&(re(o.hu,42227),o.hu=!1))})),await Qf(t,s,e)}catch(s){await Hr(s)}}function hh(n,e,t){const s=X(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const i=[];s.Tu.forEach(((r,o)=>{const c=o.view.va(e);c.snapshot&&i.push(c.snapshot)})),(function(o,c){const u=X(o);u.onlineState=c;let d=!1;u.queries.forEach(((m,v)=>{for(const T of v.ba)T.va(c)&&(d=!0)})),d&&Ec(u)})(s.eventManager,e),i.length&&s.Pu.J_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function FT(n,e,t){const s=X(n);s.sharedClientState.updateQueryState(e,"rejected",t);const i=s.Au.get(e),r=i&&i.key;if(r){let o=new he(j.comparator);o=o.insert(r,Re.newNoDocument(r,H.min()));const c=Z().add(r),u=new Xr(H.min(),new Map,new he(J),o,c);await Gf(s,u),s.Ru=s.Ru.remove(r),s.Au.delete(e),Sc(s)}else await Aa(s.localStore,e,!1).then((()=>Ra(s,e,t))).catch(Hr)}function Ra(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((s=>{n.Vu.containsKey(s)||Kf(n,s)}))}function Kf(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(vc(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Sc(n))}function dh(n,e,t){for(const s of t)s instanceof qf?(n.Vu.addReference(s.key,e),BT(n,s)):s instanceof zf?(O(Ic,"Document no longer in limbo: "+s.key),n.Vu.removeReference(s.key,e),n.Vu.containsKey(s.key)||Kf(n,s.key)):q(19791,{wu:s})}function BT(n,e){const t=e.key,s=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(s)||(O(Ic,"New document in limbo: "+t),n.Eu.add(s),Sc(n))}function Sc(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new j(ie.fromString(e)),s=n.fu.next();n.Au.set(s,new DT(t)),n.Ru=n.Ru.insert(t,s),Ff(n.remoteStore,new jt(ut(uc(t.path)),s,"TargetPurposeLimboResolution",qr.ce))}}async function Qf(n,e,t){const s=X(n),i=[],r=[],o=[];s.Tu.isEmpty()||(s.Tu.forEach(((c,u)=>{o.push(s.pu(u,e,t).then((d=>{var m;if((d||t)&&s.isPrimaryClient){const v=d?!d.fromCache:(m=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:m.current;s.sharedClientState.updateQueryState(u.targetId,v?"current":"not-current")}if(d){i.push(d);const v=gc.Es(u.targetId,d);r.push(v)}})))})),await Promise.all(o),s.Pu.J_(i),await(async function(u,d){const m=X(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(v=>R.forEach(d,(T=>R.forEach(T.Ts,(C=>m.persistence.referenceDelegate.addReference(v,T.targetId,C))).next((()=>R.forEach(T.Is,(C=>m.persistence.referenceDelegate.removeReference(v,T.targetId,C)))))))))}catch(v){if(!us(v))throw v;O(yc,"Failed to update sequence numbers: "+v)}for(const v of d){const T=v.targetId;if(!v.fromCache){const C=m.vs.get(T),D=C.snapshotVersion,M=C.withLastLimboFreeSnapshotVersion(D);m.vs=m.vs.insert(T,M)}}})(s.localStore,r))}async function jT(n,e){const t=X(n);if(!t.currentUser.isEqual(e)){O(Ic,"User change. New user:",e.toKey());const s=await Mf(t.localStore,e);t.currentUser=e,(function(r,o){r.mu.forEach((c=>{c.forEach((u=>{u.reject(new U(L.CANCELLED,o))}))})),r.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Qf(t,s.Ns)}}function HT(n,e){const t=X(n),s=t.Au.get(e);if(s&&s.hu)return Z().add(s.key);{let i=Z();const r=t.Iu.get(e);if(!r)return i;for(const o of r){const c=t.Tu.get(o);i=i.unionWith(c.view.nu)}return i}}function Jf(n){const e=X(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Gf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=HT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=FT.bind(null,e),e.Pu.J_=CT.bind(null,e.eventManager),e.Pu.yu=RT.bind(null,e.eventManager),e}class Cr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$f(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return tT(this.persistence,new Xb,e.initialUser,this.serializer)}Cu(e){return new Of(mc.Vi,this.serializer)}Du(e){return new oT}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Cr.provider={build:()=>new Cr};class qT extends Cr{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){re(this.persistence.referenceDelegate instanceof kr,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Vb(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?je.withCacheSize(this.cacheSizeBytes):je.DEFAULT;return new Of((s=>kr.Vi(s,t)),this.serializer)}}class Pa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>hh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=jT.bind(null,this.syncEngine),await ET(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new ST})()}createDatastore(e){const t=$f(e.databaseInfo.databaseId),s=hT(e.databaseInfo);return gT(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,i,r,o,c){return new vT(s,i,r,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>hh(this.syncEngine,t,0)),(function(){return ih.v()?new ih:new aT})())}createSyncEngine(e,t){return(function(i,r,o,c,u,d,m){const v=new NT(i,r,o,c,u,d);return m&&(v.gu=!0),v})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(i){const r=X(i);O(ts,"RemoteStore shutting down."),r.Ea.add(5),await _i(r),r.Aa.shutdown(),r.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Pa.provider={build:()=>new Pa};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):St("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="FirestoreClient";class WT{constructor(e,t,s,i,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=i,this.user=Ce.UNAUTHENTICATED,this.clientId=nf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,(async o=>{O(sn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(s,(o=>(O(sn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Hf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Wo(n,e){n.asyncQueue.verifyOperationInProgress(),O(sn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async i=>{s.isEqual(i)||(await Mf(e.localStore,i),s=i)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function fh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await GT(n);O(sn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>ah(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,i)=>ah(e.remoteStore,i))),n._onlineComponents=e}async function GT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O(sn,"Using user provided OfflineComponentProvider");try{await Wo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;Cn("Error using user provided cache. Falling back to memory cache: "+t),await Wo(n,new Cr)}}else O(sn,"Using default OfflineComponentProvider"),await Wo(n,new qT(void 0));return n._offlineComponents}async function KT(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O(sn,"Using user provided OnlineComponentProvider"),await fh(n,n._uninitializedComponentsProvider._online)):(O(sn,"Using default OnlineComponentProvider"),await fh(n,new Pa))),n._onlineComponents}async function ph(n){const e=await KT(n),t=e.eventManager;return t.onListen=OT.bind(null,e.syncEngine),t.onUnlisten=$T.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=MT.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=UT.bind(null,e.syncEngine),t}function QT(n,e,t,s){const i=new zT(s),r=new PT(e,i,t);return n.asyncQueue.enqueueAndForget((async()=>AT(await ph(n),r))),()=>{i.Nu(),n.asyncQueue.enqueueAndForget((async()=>kT(await ph(n),r)))}}/**
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
 */function Yf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT="ComponentProvider",mh=new Map;function YT(n,e,t,s,i){return new kw(n,e,t,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,Yf(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf="firestore.googleapis.com",gh=!0;class yh{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new U(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Xf,this.ssl=gh}else this.host=e.host,this.ssl=e.ssl??gh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Nf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ob)throw new U(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Yf(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new U(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new U(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new U(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,i){return s.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ac{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new U(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new nw;switch(s.type){case"firstParty":return new ow(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new U(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=mh.get(t);s&&(O(JT,"Removing Datastore"),mh.delete(t),s.terminate())})(this),Promise.resolve()}}function XT(n,e,t,s={}){var d;n=sr(n,Ac);const i=rn(e),r=n._getSettings(),o={...r,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;i&&($a(`https://${c}`),Ua("Firestore",!0)),r.host!==Xf&&r.host!==c&&Cn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...r,host:c,ssl:i,emulatorOptions:s};if(!En(u,o)&&(n._setSettings(u),s.mockUserToken)){let m,v;if(typeof s.mockUserToken=="string")m=s.mockUserToken,v=Ce.MOCK_USER;else{m=Zh(s.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const T=s.mockUserToken.sub||s.mockUserToken.user_id;if(!T)throw new U(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new Ce(T)}n._authCredentials=new sw(new tf(m,v))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new eo(this.firestore,e,this._query)}}class ze{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ze(this.firestore,e,this._key)}toJSON(){return{type:ze._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(gi(t,ze._jsonSchema))return new ze(e,s||null,new j(ie.fromString(t.referencePath)))}}ze._jsonSchemaVersion="firestore/documentReference/1.0",ze._jsonSchema={type:pe("string",ze._jsonSchemaVersion),referencePath:pe("string")};class Kn extends eo{constructor(e,t,s){super(e,t,uc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ze(this.firestore,null,new j(e))}withConverter(e){return new Kn(this.firestore,e,this._path)}}function pn(n,e,...t){if(n=Ie(n),dw("collection","path",e),n instanceof Ac){const s=ie.fromString(e,...t);return Ru(s),new Kn(n,null,s)}{if(!(n instanceof ze||n instanceof Kn))throw new U(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ie.fromString(e,...t));return Ru(s),new Kn(n.firestore,null,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh="AsyncQueue";class _h{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Uf(this,"async_queue_retry"),this._c=()=>{const s=zo();s&&O(vh,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=zo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=zo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new qn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!us(e))throw e;O(vh,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,St("INTERNAL UNHANDLED ERROR: ",wh(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=Tc.createAndSchedule(this,e,t,s,(r=>this.hc(r)));return this.tc.push(i),i}uc(){this.nc&&q(47125,{Pc:wh(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function wh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class xa extends Ac{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=new _h,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _h(e),this._firestoreClient=void 0,await e}}}function ZT(n,e){const t=typeof n=="object"?n:ja(),s=typeof n=="string"?n:Tr,i=Or(t,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Jh("firestore");r&&XT(i,...r)}return i}function eE(n){if(n._terminated)throw new U(L.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||tE(n),n._firestoreClient}function tE(n){var s,i,r,o;const e=n._freezeSettings(),t=YT(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(i=n._app)==null?void 0:i.options.apiKey,e);n._componentsProvider||(r=e.localCache)!=null&&r._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new WT(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(u){const d=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(d),_online:d}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this._byteString=e}static fromBase64String(e){try{return new it(Ee.fromBase64String(e))}catch(t){throw new U(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new it(Ee.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:it._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(gi(e,it._jsonSchema))return it.fromBase64String(e.bytes)}}it._jsonSchemaVersion="firestore/bytes/1.0",it._jsonSchema={type:pe("string",it._jsonSchemaVersion),bytes:pe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new U(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new U(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new U(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Wt._jsonSchemaVersion}}static fromJSON(e){if(gi(e,Wt._jsonSchema))return new Wt(e.latitude,e.longitude)}}Wt._jsonSchemaVersion="firestore/geoPoint/1.0",Wt._jsonSchema={type:pe("string",Wt._jsonSchemaVersion),latitude:pe("number"),longitude:pe("number")};/**
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
 */class Gt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Gt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(gi(e,Gt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Gt(e.vectorValues);throw new U(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Gt._jsonSchemaVersion="firestore/vectorValue/1.0",Gt._jsonSchema={type:pe("string",Gt._jsonSchemaVersion),vectorValues:pe("object")};function ep(n,e,t){if((e=Ie(e))instanceof Zf)return e._internalPath;if(typeof e=="string")return sE(n,e);throw La("Field path arguments must be of type string or ",n)}const nE=new RegExp("[~\\*/\\[\\]]");function sE(n,e,t){if(e.search(nE)>=0)throw La(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new Zf(...e.split("."))._internalPath}catch{throw La(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function La(n,e,t,s,i){let r=`Function ${e}() called with invalid data`;r+=". ";let o="";return new U(L.INVALID_ARGUMENT,r+n+o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{convertValue(e,t="none"){switch(tn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(en(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw q(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return yi(e,((i,r)=>{s[i]=this.convertValue(r,t)})),s}convertVectorValue(e){var s,i,r;const t=(r=(i=(s=e.fields)==null?void 0:s[ga].arrayValue)==null?void 0:i.values)==null?void 0:r.map((o=>ue(o.doubleValue)));return new Gt(t)}convertGeoPoint(e){return new Wt(ue(e.latitude),ue(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Wr(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(ii(e));default:return null}}convertTimestamp(e){const t=Zt(e);return new fe(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=ie.fromString(e);re(Df(s),9688,{name:e});const i=new ri(s.get(1),s.get(3)),r=new j(s.popFirst(5));return i.isEqual(t)||St(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */class tp extends iE{constructor(e){super(),this.firestore=e}convertBytes(e){return new it(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ze(this.firestore,null,t)}}const bh="@firebase/firestore",Th="4.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const i=t;for(const r of s)if(r in i&&typeof i[r]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,t,s,i,r){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(ep("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class rE extends np{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new U(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bn extends np{constructor(e,t,s,i,r,o){super(e,t,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ar(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(ep("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new U(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=bn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}bn._jsonSchemaVersion="firestore/documentSnapshot/1.0",bn._jsonSchema={type:pe("string",bn._jsonSchemaVersion),bundleSource:pe("string","DocumentSnapshot"),bundleName:pe("string"),bundle:pe("string")};class ar extends bn{data(e={}){return super.data(e)}}class Qn{constructor(e,t,s,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Bs(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new ar(this._firestore,this._userDataWriter,s.key,s,new Bs(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new U(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map((c=>{const u=new ar(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Bs(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}}))}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((c=>r||c.type!==3)).map((c=>{const u=new ar(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Bs(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,m=-1;return c.type!==0&&(d=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),m=o.indexOf(c.doc.key)),{type:aE(c.type),doc:u,oldIndex:d,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new U(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Qn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=nf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],i=[];return this.docs.forEach((r=>{r._document!==null&&(t.push(r._document),s.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),i.push(r.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function aE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q(61501,{type:n})}}/**
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
 */Qn._jsonSchemaVersion="firestore/querySnapshot/1.0",Qn._jsonSchema={type:pe("string",Qn._jsonSchemaVersion),bundleSource:pe("string","QuerySnapshot"),bundleName:pe("string"),bundle:pe("string")};function mn(n,...e){var d,m,v;n=Ie(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||Eh(e[s])||(t=e[s++]);const i={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Eh(e[s])){const T=e[s];e[s]=(d=T.next)==null?void 0:d.bind(T),e[s+1]=(m=T.error)==null?void 0:m.bind(T),e[s+2]=(v=T.complete)==null?void 0:v.bind(T)}let r,o,c;if(n instanceof ze)o=sr(n.firestore,xa),c=uc(n._key.path),r={next:T=>{e[s]&&e[s](cE(o,n,T))},error:e[s+1],complete:e[s+2]};else{const T=sr(n,eo);o=sr(T.firestore,xa),c=T._query;const C=new tp(o);r={next:D=>{e[s]&&e[s](new Qn(o,C,T,D))},error:e[s+1],complete:e[s+2]},oE(n._query)}const u=eE(o);return QT(u,c,i,r)}function cE(n,e,t){const s=t.docs.get(e._key),i=new tp(n);return new bn(n,i,e._key,s,new Bs(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){tw(xn),In(new Qt("firestore",((s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),c=new xa(new iw(s.getProvider("auth-internal")),new aw(o,s.getProvider("app-check-internal")),Cw(o,i),o);return r={useFetchStreams:t,...r},c._setSettings(r),c}),"PUBLIC").setMultipleInstances(!0)),at(bh,Th,e),at(bh,Th,"esm2020")})();const gn=ZT(Za);let vt=[];function lE(n){if(sp(),!n)return;const e=t=>t.docs.map(s=>({id:s.id,...s.data()}));vt.push(mn(pn(gn,`households/${n}/inventory`),t=>{var s,i;p.inv=e(t),le("synced"),(s=$.renderAll)==null||s.call($),(i=$.renderSum)==null||i.call($)},t=>{console.warn("realtime inv error:",t),le("error")})),vt.push(mn(pn(gn,`households/${n}/shopping`),t=>{var s,i;p.shop=e(t),le("synced"),(s=$.renderShop)==null||s.call($),(i=$.renderSum)==null||i.call($)},t=>{console.warn("realtime shop error:",t),le("error")})),vt.push(mn(pn(gn,`households/${n}/recipes`),t=>{var s,i;p.recs=e(t),le("synced"),(s=$.renderRecs)==null||s.call($),(i=$.renderSum)==null||i.call($)},t=>{console.warn("realtime recs error:",t),le("error")})),vt.push(mn(pn(gn,`households/${n}/mealplan`),t=>{const s={};e(t).forEach(i=>{i.date&&i.meal&&(s[i.date]=i.meal)}),p.mp=s,le("synced")},t=>{console.warn("realtime mp error:",t)})),vt.push(mn(pn(gn,`households/${n}/settings`),t=>{const s=e(t).find(i=>i.id==="config");s&&(p.cfg={...dr,...s})},t=>{console.warn("realtime settings error:",t)})),vt.push(mn(pn(gn,`households/${n}/cooklog`),t=>{p.cookLog=e(t).sort((s,i)=>new Date(i.loggedAt||i.date||0)-new Date(s.loggedAt||s.date||0))},t=>{console.warn("realtime cooklog error:",t)})),vt.push(mn(pn(gn,`households/${n}/wastelog`),t=>{p.wasteLog=e(t).sort((s,i)=>new Date(i.loggedAt||i.date||0)-new Date(s.loggedAt||s.date||0))},t=>{console.warn("realtime wastelog error:",t)})),le("synced"),console.log("[realtime] Listeners started for household:",n)}function sp(){vt.forEach(n=>{try{n()}catch{}}),vt=[],console.log("[realtime] All listeners stopped")}function kc(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(p.cfg.adults||"Bora").split(",")[0].trim(),s=f("grt");s&&(s.innerHTML=`${e}, <span>${t}</span>`);const i=f("hdt");i&&(i.textContent=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})),Dn()}function Cc(){ip(),cr==null||cr()}let cr=null;function uE(n){cr=n}function ip(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(p.cfg.adults||"Bora").split(",")[0].trim(),s=f("grt");s&&!s.innerHTML&&(s.innerHTML=`${e}, <span>${t}</span>`),Dn(),bi(),dE(),fE(),ds(),gE(),rp()}function ds(){const n=Ft(),e=p.mp[n],t=f("tnd"),s=f("tna"),i=f("tonight-main");i&&(i.onclick=function(){window.openMealM(n,"Today")}),e?(t&&(t.innerHTML=e),s&&(s.innerHTML=`<button class="btn bsm bp" onclick="event.stopPropagation();openCooked('${n}')">✓ Cooked</button><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${n}','Today')">Edit</button>`)):(t&&(t.innerHTML='<span style="font-size:.9rem;color:var(--mt);font-style:italic">No meal planned yet</span>'),s&&(s.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${n}','Today')">+ Plan dinner</button><button class="btn bsm bs" onclick="event.stopPropagation();showScreen('chat')">Ask Claude →</button>`))}function Dn(){const n=["S","M","T","W","T","F","S"],e=new Date;e.setHours(0,0,0,0);const t=f("wgrd");t&&(t.innerHTML=cs().map((s,i)=>{const r=s.toISOString().split("T")[0],o=s.getTime()===e.getTime(),c=p.mp[r];return`<div class="wd${o?" today":""}${c?" hm":""}" onclick="openMealM('${r}','${n[i]} ${s.getDate()}')"><div class="wdn">${n[i]}</div><div class="wdd">${s.getDate()}</div>${c?`<div class="wdm">${c.substring(0,10)}${c.length>10?"…":""}</div>`:""}</div>`}).join(""),hE())}function hE(){const n=f("variety-nudge");if(!n)return;const e=cs().map(o=>p.mp[o.toISOString().split("T")[0]]).filter(Boolean);if(e.length<3){n.style.display="none";return}const t=e.some(o=>/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(o)),s=e.some(o=>/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner/i.test(o)),i={};e.forEach(o=>{const c=o.toLowerCase();i[c]=(i[c]||0)+1});const r=Object.entries(i).find(([,o])=>o>=3);r?(n.style.display="block",n.innerHTML="🔄 <strong>"+r[0]+"</strong> is planned "+r[1]+"× this week — maybe try something different?"):!t&&!s?(n.style.display="block",n.innerHTML="🌍 No Bangladeshi or Turkish dishes this week yet — ask Claude for ideas!"):t?s?n.style.display="none":(n.style.display="block",n.innerHTML="🇹🇷 No Turkish dishes this week — köfte or mercimek çorbası would be great!"):(n.style.display="block",n.innerHTML="🇧🇩 No Bangladeshi dishes this week — how about a dal or fish curry?")}function bi(){const n=p.inv.filter(c=>{const u=dt(c.expiry);return u&&(u.c==="expiring"||u.c==="expired")}).length,e=p.shop.filter(c=>!c.checked).length,t=f("home-exp-val"),s=f("home-exp-sub");t&&(n>0?(t.textContent=n+" item"+(n>1?"s":""),t.className="tc-val",t.style.color="var(--am)"):(t.textContent="All fresh!",t.className="tc-val tc-green")),s&&(s.textContent=n>0?"expiring soon":"Nothing in next 3 days");const i=f("home-shop-val"),r=f("home-shop-sub");i&&(i.textContent=e),r&&(r.textContent=e===1?"item to buy":e===0?"all stocked up":"items to buy");const o=f("sgrd");o&&(o.innerHTML=`<div class="sc" onclick="showScreen('inventory')"><div class="sci">🧺</div><div class="scv">${p.inv.length}</div><div class="scl">Items in stock</div></div><div class="sc${n>0?" warn":""}" onclick="showScreen('inventory')"><div class="sci">⏱</div><div class="scv">${n}</div><div class="scl">Expiring soon</div></div><div class="sc" onclick="showScreen('shopping')"><div class="sci">🛒</div><div class="scv">${e}</div><div class="scl">To buy</div></div><div class="sc" onclick="showScreen('recipes')"><div class="sci">📖</div><div class="scv">${p.recs.length}</div><div class="scl">Saved recipes</div></div>`)}function dE(){const n=p.inv.filter(s=>{const i=dt(s.expiry);return i&&(i.c==="expiring"||i.c==="expired")}).sort((s,i)=>new Date(s.expiry)-new Date(i.expiry)),e=f("exslbl"),t=f("expl");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(s=>{const i=dt(s.expiry);return`<div class="exi${i.c==="expired"?" exp":""}" onclick="openAdj('${s.id}')"><div class="exn">${s.name}</div><div class="exd">${i.l}</div></div>`}).join("")}}function fE(){const n=p.inv.filter(s=>s.qty<=(s.lowStockThreshold||1)).sort((s,i)=>s.qty-i.qty),e=f("lowstocklbl"),t=f("lowstocklist");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(s=>`<div class="exi" style="border-color:var(--am)">
    <div style="display:flex;align-items:center;gap:10px;flex:1;cursor:pointer" onclick="openAdj('${s.id}')">
      <div class="exn">${s.name}</div>
      <div style="font-size:.74rem;color:var(--am);font-weight:600">${s.qty} ${s.unit}</div>
    </div>
    <button class="btn bsm bs" style="flex-shrink:0;font-size:.72rem" onclick="event.stopPropagation();addLowToShop('${s.id}')">🛒 Add to list</button>
  </div>`).join(""),mE(n.length)}}async function pE(n){const e=p.inv.find(s=>s.id===n);if(!e)return;if(p.shop.find(s=>s.name.toLowerCase()===e.name.toLowerCase()&&!s.checked)){P(`${e.name} is already on your list`);return}await Se({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"low-stock"}),P(`${e.name} added to shopping list 🛒`)}function mE(n){const e=f("nav-inventory");if(!e)return;const t=e.querySelector(".nav-badge");if(t&&t.remove(),n>0){const s=document.createElement("span");s.className="nav-badge",s.textContent=n,s.style.cssText="position:absolute;top:4px;right:calc(50% - 18px);background:var(--am);color:#0c0c0a;font-size:.58rem;font-weight:700;min-width:16px;height:16px;border-radius:8px;display:flex;align-items:center;justify-content:center;padding:0 4px",e.appendChild(s)}}async function gE(){const n=f("activityfeed"),e=f("activitylbl");if(!n)return;const t=await J_();if(!t.length){e&&(e.style.display="none"),n.innerHTML="";return}e&&(e.style.display="flex");const s=i=>{const r=Date.now()-new Date(i).getTime(),o=Math.floor(r/6e4);if(o<1)return"just now";if(o<60)return o+"m ago";const c=Math.floor(o/60);if(c<24)return c+"h ago";const u=Math.floor(c/24);return u===1?"yesterday":u+"d ago"};n.innerHTML=t.slice(0,3).map(i=>`<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--b1)">
      <div style="width:28px;height:28px;border-radius:50%;background:var(--acd);display:flex;align-items:center;justify-content:center;font-size:.7rem;flex-shrink:0;color:var(--ac);font-weight:700">${(i.memberName||"?")[0].toUpperCase()}</div>
      <div style="flex:1;font-size:.82rem;color:var(--tx2);line-height:1.4"><strong style="color:var(--tx)">${(i.memberName||"Someone").replace(/</g,"&lt;")}</strong> ${(i.action||"").replace(/</g,"&lt;")} <strong>${(i.itemName||"").replace(/</g,"&lt;")}</strong></div>
      <div style="font-size:.68rem;color:var(--mt);flex-shrink:0">${s(i.timestamp)}</div>
    </div>`).join("")}function rp(){const n=["fridge","freezer","pantry"].map(t=>{const s=p.inv.filter(i=>i.location===t);return s.length?nc(t).toUpperCase()+`
`+s.map(i=>`- ${i.name}${i.brand?` (${i.brand})`:""}: ${i.qty} ${i.unit}`).join(`
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
 */const op="firebasestorage.googleapis.com",ap="storageBucket",yE=120*1e3,vE=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce extends mt{constructor(e,t,s=0){super(Go(e),`Firebase Storage: ${t} (${Go(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ce.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Go(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ae;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ae||(ae={}));function Go(n){return"storage/"+n}function Rc(){const n="An unknown error occurred, please check the error payload for server response.";return new ce(ae.UNKNOWN,n)}function _E(n){return new ce(ae.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function wE(n){return new ce(ae.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function bE(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ce(ae.UNAUTHENTICATED,n)}function TE(){return new ce(ae.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function EE(n){return new ce(ae.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function IE(){return new ce(ae.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function SE(){return new ce(ae.CANCELED,"User canceled the upload/download.")}function AE(n){return new ce(ae.INVALID_URL,"Invalid URL '"+n+"'.")}function kE(n){return new ce(ae.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function CE(){return new ce(ae.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ap+"' property when initializing the app?")}function RE(){return new ce(ae.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function PE(){return new ce(ae.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function xE(n){return new ce(ae.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Da(n){return new ce(ae.INVALID_ARGUMENT,n)}function cp(){return new ce(ae.APP_DELETED,"The Firebase app was deleted.")}function LE(n){return new ce(ae.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ys(n,e){return new ce(ae.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function xs(n){throw new ce(ae.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=We.makeFromUrl(e,t)}catch{return new We(e,"")}if(s.path==="")return s;throw kE(e)}static makeFromUrl(e,t){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(B){B.path.charAt(B.path.length-1)==="/"&&(B.path_=B.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function d(B){B.path_=decodeURIComponent(B.path)}const m="v[A-Za-z0-9_]+",v=t.replace(/[.]/g,"\\."),T="(/([^?#]*).*)?$",C=new RegExp(`^https?://${v}/${m}/b/${i}/o${T}`,"i"),D={bucket:1,path:3},M=t===op?"(?:storage.googleapis.com|storage.cloud.google.com)":t,N="([^?#]*)",z=new RegExp(`^https?://${M}/${i}/${N}`,"i"),V=[{regex:c,indices:u,postModify:r},{regex:C,indices:D,postModify:d},{regex:z,indices:{bucket:1,path:2},postModify:d}];for(let B=0;B<V.length;B++){const K=V[B],te=K.regex.exec(e);if(te){const b=te[K.indices.bucket];let y=te[K.indices.path];y||(y=""),s=new We(b,y),K.postModify(s);break}}if(s==null)throw AE(e);return s}}class DE{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(n,e,t){let s=1,i=null,r=null,o=!1,c=0;function u(){return c===2}let d=!1;function m(...N){d||(d=!0,e.apply(null,N))}function v(N){i=setTimeout(()=>{i=null,n(C,u())},N)}function T(){r&&clearTimeout(r)}function C(N,...z){if(d){T();return}if(N){T(),m.call(null,N,...z);return}if(u()||o){T(),m.call(null,N,...z);return}s<64&&(s*=2);let V;c===1?(c=2,V=0):V=(s+Math.random())*1e3,v(V)}let D=!1;function M(N){D||(D=!0,T(),!d&&(i!==null?(N||(c=2),clearTimeout(i),v(0)):N||(c=1)))}return v(0),r=setTimeout(()=>{o=!0,M(!0)},t),M}function OE(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(n){return n!==void 0}function VE(n){return typeof n=="object"&&!Array.isArray(n)}function Pc(n){return typeof n=="string"||n instanceof String}function Ih(n){return xc()&&n instanceof Blob}function xc(){return typeof Blob<"u"}function Sh(n,e,t,s){if(s<e)throw Da(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw Da(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(n,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${n}`}function lp(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const i=e(s)+"="+e(n[s]);t=t+i+"&"}return t=t.slice(0,-1),t}var Tn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Tn||(Tn={}));/**
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
 */function $E(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e,t,s,i,r,o,c,u,d,m,v,T=!0,C=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=m,this.connectionFactory_=v,this.retry=T,this.isUsingEmulator=C,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((D,M)=>{this.resolve_=D,this.reject_=M,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new zi(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=c=>{const u=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const c=r.getErrorCode()===Tn.NO_ERROR,u=r.getStatus();if(!c||$E(u,this.additionalRetryCodes_)&&this.retry){const m=r.getErrorCode()===Tn.ABORT;s(!1,new zi(!1,null,m));return}const d=this.successCodes_.indexOf(u)!==-1;s(!0,new zi(d,r))})},t=(s,i)=>{const r=this.resolve_,o=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());ME(u)?r(u):r()}catch(u){o(u)}else if(c!==null){const u=Rc();u.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,u)):o(u)}else if(i.canceled){const u=this.appDelete_?cp():SE();o(u)}else{const u=IE();o(u)}};this.canceled_?t(!1,new zi(!1,null,!0)):this.backoffId_=NE(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&OE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class zi{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function FE(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function BE(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function jE(n,e){e&&(n["X-Firebase-GMPID"]=e)}function HE(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function qE(n,e,t,s,i,r,o=!0,c=!1){const u=lp(n.urlParams),d=n.url+u,m=Object.assign({},n.headers);return jE(m,e),FE(m,t),BE(m,r),HE(m,s),new UE(d,n.method,m,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function WE(...n){const e=zE();if(e!==void 0){const t=new e;for(let s=0;s<n.length;s++)t.append(n[s]);return t.getBlob()}else{if(xc())return new Blob(n);throw new ce(ae.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function GE(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function KE(n){if(typeof atob>"u")throw xE("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ko{constructor(e,t){this.data=e,this.contentType=t||null}}function QE(n,e){switch(n){case ot.RAW:return new Ko(up(e));case ot.BASE64:case ot.BASE64URL:return new Ko(hp(n,e));case ot.DATA_URL:return new Ko(YE(e),XE(e))}throw Rc()}function up(n){const e=[];for(let t=0;t<n.length;t++){let s=n.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const r=s,o=n.charCodeAt(++t);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function JE(n){let e;try{e=decodeURIComponent(n)}catch{throw Ys(ot.DATA_URL,"Malformed data URL.")}return up(e)}function hp(n,e){switch(n){case ot.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw Ys(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case ot.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw Ys(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=KE(e)}catch(i){throw i.message.includes("polyfill")?i:Ys(n,"Invalid character found")}const s=new Uint8Array(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return s}class dp{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Ys(ot.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=ZE(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function YE(n){const e=new dp(n);return e.base64?hp(ot.BASE64,e.rest):JE(e.rest)}function XE(n){return new dp(n).contentType}function ZE(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,t){let s=0,i="";Ih(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(Ih(this.data_)){const s=this.data_,i=GE(s,e,t);return i===null?null:new $t(i)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new $t(s,!0)}}static getBlob(...e){if(xc()){const t=e.map(s=>s instanceof $t?s.data_:s);return new $t(WE.apply(null,t))}else{const t=e.map(o=>Pc(o)?QE(ot.RAW,o).data:o.data_);let s=0;t.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)i[r++]=o[c]}),new $t(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(n){let e;try{e=JSON.parse(n)}catch{return null}return VE(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function tI(n,e){const t=e.split("/").filter(s=>s.length>0).join("/");return n.length===0?t:n+"/"+t}function pp(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(n,e){return e}class Me{constructor(e,t,s,i){this.server=e,this.local=t||e,this.writable=!!s,this.xform=i||nI}}let Wi=null;function sI(n){return!Pc(n)||n.length<2?n:pp(n)}function mp(){if(Wi)return Wi;const n=[];n.push(new Me("bucket")),n.push(new Me("generation")),n.push(new Me("metageneration")),n.push(new Me("name","fullPath",!0));function e(r,o){return sI(o)}const t=new Me("name");t.xform=e,n.push(t);function s(r,o){return o!==void 0?Number(o):o}const i=new Me("size");return i.xform=s,n.push(i),n.push(new Me("timeCreated")),n.push(new Me("updated")),n.push(new Me("md5Hash",null,!0)),n.push(new Me("cacheControl",null,!0)),n.push(new Me("contentDisposition",null,!0)),n.push(new Me("contentEncoding",null,!0)),n.push(new Me("contentLanguage",null,!0)),n.push(new Me("contentType",null,!0)),n.push(new Me("metadata","customMetadata",!0)),Wi=n,Wi}function iI(n,e){function t(){const s=n.bucket,i=n.fullPath,r=new We(s,i);return e._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:t})}function rI(n,e,t){const s={};s.type="file";const i=t.length;for(let r=0;r<i;r++){const o=t[r];s[o.local]=o.xform(s,e[o.server])}return iI(s,n),s}function gp(n,e,t){const s=fp(e);return s===null?null:rI(n,s,t)}function oI(n,e,t,s){const i=fp(e);if(i===null||!Pc(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(d=>{const m=n.bucket,v=n.fullPath,T="/b/"+o(m)+"/o/"+o(v),C=Lc(T,t,s),D=lp({alt:"media",token:d});return C+D})[0]}function aI(n,e){const t={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(t[r.server]=n[r.local])}return JSON.stringify(t)}class yp{constructor(e,t,s,i){this.url=e,this.method=t,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(n){if(!n)throw Rc()}function cI(n,e){function t(s,i){const r=gp(n,i,e);return vp(r!==null),r}return t}function lI(n,e){function t(s,i){const r=gp(n,i,e);return vp(r!==null),oI(r,i,n.host,n._protocol)}return t}function _p(n){function e(t,s){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=TE():i=bE():t.getStatus()===402?i=wE(n.bucket):t.getStatus()===403?i=EE(n.path):i=s,i.status=t.getStatus(),i.serverResponse=s.serverResponse,i}return e}function uI(n){const e=_p(n);function t(s,i){let r=e(s,i);return s.getStatus()===404&&(r=_E(n.path)),r.serverResponse=i.serverResponse,r}return t}function hI(n,e,t){const s=e.fullServerUrl(),i=Lc(s,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,c=new yp(i,r,lI(n,t),o);return c.errorHandler=uI(e),c}function dI(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function fI(n,e,t){const s=Object.assign({},t);return s.fullPath=n.path,s.size=e.size(),s.contentType||(s.contentType=dI(null,e)),s}function pI(n,e,t,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let V="";for(let B=0;B<2;B++)V=V+Math.random().toString().slice(2);return V}const u=c();o["Content-Type"]="multipart/related; boundary="+u;const d=fI(e,s,i),m=aI(d,t),v="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+u+`\r
Content-Type: `+d.contentType+`\r
\r
`,T=`\r
--`+u+"--",C=$t.getBlob(v,s,T);if(C===null)throw RE();const D={name:d.fullPath},M=Lc(r,n.host,n._protocol),N="POST",z=n.maxUploadRetryTime,G=new yp(M,N,cI(n,t),z);return G.urlParams=D,G.headers=o,G.body=C.uploadData(),G.errorHandler=_p(e),G}class mI{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Tn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Tn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Tn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,i,r){if(this.sent_)throw xs("cannot .send() more than once");if(rn(e)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw xs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw xs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw xs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw xs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class gI extends mI{initXhr(){this.xhr_.responseType="text"}}function wp(){return new gI}/**
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
 */class Rn{constructor(e,t){this._service=e,t instanceof We?this._location=t:this._location=We.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Rn(e,t)}get root(){const e=new We(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return pp(this._location.path)}get storage(){return this._service}get parent(){const e=eI(this._location.path);if(e===null)return null;const t=new We(this._location.bucket,e);return new Rn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw LE(e)}}function yI(n,e,t){n._throwIfRoot("uploadBytes");const s=pI(n.storage,n._location,mp(),new $t(e,!0),t);return n.storage.makeRequestWithTokens(s,wp).then(i=>({metadata:i,ref:n}))}function vI(n){n._throwIfRoot("getDownloadURL");const e=hI(n.storage,n._location,mp());return n.storage.makeRequestWithTokens(e,wp).then(t=>{if(t===null)throw PE();return t})}function _I(n,e){const t=tI(n._location.path,e),s=new We(n._location.bucket,t);return new Rn(n.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(n){return/^[A-Za-z]+:\/\//.test(n)}function bI(n,e){return new Rn(n,e)}function bp(n,e){if(n instanceof Dc){const t=n;if(t._bucket==null)throw CE();const s=new Rn(t,t._bucket);return e!=null?bp(s,e):s}else return e!==void 0?_I(n,e):n}function TI(n,e){if(e&&wI(e)){if(n instanceof Dc)return bI(n,e);throw Da("To use ref(service, url), the first argument must be a Storage instance.")}else return bp(n,e)}function Ah(n,e){const t=e==null?void 0:e[ap];return t==null?null:We.makeFromBucketSpec(t,n)}function EI(n,e,t,s={}){n.host=`${e}:${t}`;const i=rn(e);i&&($a(`https://${n.host}/b`),Ua("Storage",!0)),n._isUsingEmulator=!0,n._protocol=i?"https":"http";const{mockUserToken:r}=s;r&&(n._overrideAuthToken=typeof r=="string"?r:Zh(r,n.app.options.projectId))}class Dc{constructor(e,t,s,i,r,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._isUsingEmulator=o,this._bucket=null,this._host=op,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=yE,this._maxUploadRetryTime=vE,this._requests=new Set,i!=null?this._bucket=We.makeFromBucketSpec(i,this._host):this._bucket=Ah(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=We.makeFromBucketSpec(this._url,e):this._bucket=Ah(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Sh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Sh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Ve(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Rn(this,e)}_makeRequest(e,t,s,i,r=!0){if(this._deleted)return new DE(cp());{const o=qE(e,this._appId,s,i,t,this._firebaseVersion,r,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,i).getPromise()}}const kh="@firebase/storage",Ch="0.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp="storage";function II(n,e,t){return n=Ie(n),yI(n,e,t)}function SI(n){return n=Ie(n),vI(n)}function AI(n,e){return n=Ie(n),TI(n,e)}function kI(n=ja(),e){n=Ie(n);const s=Or(n,Tp).getImmediate({identifier:e}),i=Jh("storage");return i&&CI(s,...i),s}function CI(n,e,t,s={}){EI(n,e,t,s)}function RI(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Dc(t,s,i,e,xn)}function PI(){In(new Qt(Tp,RI,"PUBLIC").setMultipleInstances(!0)),at(kh,Ch,""),at(kh,Ch,"esm2020")}PI();const xI=kI(Za);function LI(n){return(n||"").trim().toLowerCase().replace(/\s+/g,"_").replace(/[^a-z0-9_]/g,"")}function DI(n){return new Promise((e,t)=>{const s=new Image,i=new FileReader;i.onload=r=>{s.onload=()=>{let c=s.width,u=s.height;if(c>400||u>400){const D=Math.min(400/c,400/u);c=Math.round(c*D),u=Math.round(u*D)}const d=document.createElement("canvas");d.width=c,d.height=u,d.getContext("2d").drawImage(s,0,0,c,u);const v=150*1024;let T=.8;const C=()=>{d.toBlob(D=>{if(!D)return t(new Error("Canvas compression failed"));D.size<=v||T<=.3?e(D):(T-=.1,C())},"image/jpeg",T)};C()},s.onerror=()=>t(new Error("Failed to load image")),s.src=r.target.result},i.onerror=()=>t(new Error("Failed to read file")),i.readAsDataURL(n)})}async function NI(n,e){var c;if(!p.hid)throw new Error("No household ID — cannot upload");if(!n)throw new Error("No file provided");const t=LI(e);if(!t)throw new Error("Invalid product name for upload");let s;try{s=await DI(n),console.log(`[uploadProductImage] Compressed: ${(s.size/1024).toFixed(1)}KB, type=${s.type}`)}catch(u){throw console.error("[uploadProductImage] Compression failed:",u),new Error("Image compression failed — "+u.message)}const i=`households/${p.hid}/customProducts/${t}.jpg`,r=AI(xI,i);try{console.log(`[uploadProductImage] Uploading to: ${i}`),await II(r,s,{contentType:"image/jpeg"}),console.log("[uploadProductImage] Upload succeeded")}catch(u){throw console.error("[uploadProductImage] Storage upload failed:",u.code,u.message),new Error("Storage upload failed — "+(u.code||u.message))}let o;try{o=await SI(r),console.log("[uploadProductImage] Download URL obtained")}catch(u){throw console.error("[uploadProductImage] getDownloadURL failed:",u.code,u.message),new Error("Could not get download URL — "+(u.code||u.message))}try{const u=Le();await ee(`customProducts/${p.hid}/items/${t}`,{name:e.trim(),imageUrl:o,updatedAt:new Date().toISOString(),updatedBy:(u==null?void 0:u.displayName)||((c=u==null?void 0:u.email)==null?void 0:c.split("@")[0])||"Unknown"}),console.log(`[uploadProductImage] Saved to customProducts collection: ${t}`)}catch(u){console.error("[uploadProductImage] Firestore save failed:",u)}return o}let Ge=null,Qo=!1,Ls="",Jo=!1;function OI(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=f("shopAddMicOpt");e&&(e.style.display="")}function Rh(n){const e=f("micstatus");e&&e.classList.toggle("visible",n)}function Ep(){if(Qo&&Ge){Jo=!0,Ge.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){P("Voice input not supported");return}Ge=new n,Ge.lang="en-US",Ge.interimResults=!0,Ge.maxAlternatives=1,Ge.continuous=!1,Ls="",Qo=!0,Rh(!0),Ge.onresult=e=>{let t="";for(let i=e.resultIndex;i<e.results.length;i++){const r=e.results[i][0].transcript;e.results[i].isFinal?Ls+=r:t+=r}const s=f("shi");s&&(s.value=(Ls+t).trim())},Ge.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&P("Couldn't hear that — try again")},Ge.onend=()=>{let e=(Ls||"").trim();if(!e&&Jo){const t=f("shi");e=t?t.value.trim():""}if(Qo=!1,Ge=null,Ls="",Jo=!1,Rh(!1),e){let t=e,s=1;const i=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),s=parseInt(r[2],10)||1):i&&(t=i[2].trim(),s=parseInt(i[1],10)||1);const o={id:Date.now().toString(),name:t,qty:s,checked:!1,src:"manual"};Se(o),P(`Added "${e}" 🎤`);const c=f("shi");c&&(c.value=""),to(o.id,t,"shop")}},Ge.start()}function Ip(n){return n?n.replace(/\S+/g,e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()):""}function Sp(n){if(!n.brand)return!1;if(n.src==="scan")return!0;if(n.src==="search"&&n.searchQuery){const e=n.searchQuery.toLowerCase().split(/\s+/).filter(s=>s.length>=2),t=n.brand.toLowerCase();return e.some(s=>t.includes(s))}return!1}function Gi(n){const e=n.qty||1,t=`<span class="sh-qty${e===1?" sh-qty-one":""}" onclick="event.stopPropagation();openShQty('${n.id}')"> × ${e}</span>`,s=n.image?`<img src="${n.image}" class="sh-thumb" alt="" onerror="this.style.display='none'"/>`:"";return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="shop">
    <div class="swipe-inner">
      <!-- Main row: swipeRowTap handles multi-select; checkbox toggles checked; content area opens detail -->
      <div class="shit${n.checked?" chk":""}" onclick="swipeRowTap('${n.id}','shop')">
        <div class="sel-cb">✓</div>           <!-- Multi-select checkbox (hidden unless selectMode is active) -->
        <div class="shck" onclick="event.stopPropagation();togShop('${n.id}')">${n.checked?"✓":""}</div>  <!-- Slim ring: tap to mark as bought; hidden in select mode (replaced by sel-cb) -->
        ${s}                               <!-- Product thumbnail from barcode scan (if available) -->
        <div style="flex:1;min-width:0;cursor:pointer" onclick="openItemDetail('${n.id}')">
          <div class="shnm">${Ip(n.name)}${t}</div>
          ${Sp(n)?`<div class="sh-brand">${n.brand}</div>`:""}  <!-- Brand shown for barcode scans always; for text search only if the user's query matches the brand name -->
          ${n.note?`<div class="shnote">📝 ${n.note}</div>`:""}  <!-- Optional user note shown below name -->
        </div>
        ${n.price?`<div class="price-tag">~$${n.price}</div>`:""}  <!-- Estimated price if available -->
        <button class="sh-note-btn" onclick="toggleShNote(event,'${n.id}')" title="Add note">✏️</button>
      </div>
      <!-- Inline qty editor (hidden by default, toggled by openShQty) -->
      <div class="sh-qty-edit" id="sqe-${n.id}">
        <label class="sh-qty-lbl">Qty</label>
        <div class="sh-qty-ctl">
          <button class="qbtn" onclick="adjShQty('${n.id}',-1)">−</button>
          <input class="sh-qty-inp" id="sqi-${n.id}" type="number" min="1" value="${e}" onblur="saveShQty('${n.id}')"/>
          <button class="qbtn" onclick="adjShQty('${n.id}',1)">+</button>
        </div>
      </div>
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
  </div>`}function fs(){const n=(o,c)=>o.name.localeCompare(c.name),e=f("shlist"),t=p.shop.filter(o=>!o.checked).sort(n),s=p.shop.filter(o=>o.checked).sort(n),i=f("clrchk");i&&(i.style.display=s.length?"block":"none");const r=f("shsub");if(r&&(r.textContent=t.length+" items to buy"),!!e){if(!p.shop.length){e.innerHTML='<div class="es"><div class="ei">🛒</div><p>Your list is empty!<br/>Add items or use "Build from meal plan".</p></div>';return}if(p.aisleMode&&t.length){const o={};t.forEach(c=>{const u=ew(c.name);o[u]||(o[u]=[]),o[u].push(c)}),e.innerHTML=Object.entries(o).sort().map(([c,u])=>`<div class="shsec">${c}</div>${u.map(Gi).join("")}`).join("")+(s.length?`<div class="shsec">Done</div>${s.map(Gi).join("")}`:"")}else e.innerHTML=(t.length?`<div class="shsec">To buy (${t.length})</div>${t.map(Gi).join("")}`:"")+(s.length?`<div class="shsec">Done</div>${s.map(Gi).join("")}`:"");if(p.selectMode==="shop"){document.querySelectorAll("#shlist .swipe-wrap").forEach(c=>{c.classList.add("selecting"),p.selectedIds.has(c.dataset.id)&&c.classList.add("selected")});const o=document.querySelector(".shbody");o&&(o.style.paddingLeft="52px")}QI()}}function MI(){const n=f("shi"),e=n.value.trim();if(!e)return;if(ht&&ht.length===1){Cp(0);return}let t=e,s=1;const i=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),s=parseInt(r[2],10)||1):i&&(t=i[2].trim(),s=parseInt(i[1],10)||1);const o=f("addNoteInp"),c=o?o.value.trim():"",u={id:Date.now().toString(),name:t,qty:s,checked:!1,src:"manual"};c&&(u.note=c),Se(u),n.value="",o&&(o.value="");const d=f("addNoteWrap");d&&(d.style.display="none"),Oc(),Ti()}function VI(){const n=f("addNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=f("addNoteInp");t&&t.focus()}}function $I(){const n=f("shopAddBackdrop"),e=f("shopAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),setTimeout(()=>{const t=f("shi");t&&(t.value="",t.focus())},150)}function Ti(){const n=f("shopAddBackdrop"),e=f("shopAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),Oc()}function UI(){Ti(),window.openScanForList&&window.openScanForList()}function FI(){Ti(),Ep()}let Xs=null,ht=null;const Ds=new Map,BI=300*1e3,jI=30;function HI(){Xs&&clearTimeout(Xs);const n=f("shi"),e=n?n.value.trim():"",t=f("shopSearchDropdown");if(!e||e.length<2){t&&(t.classList.remove("active"),t.innerHTML=""),ht=null;return}Xs=setTimeout(()=>KI(e),350)}const qI=new Set(["salad","soup","stew","casserole","dish","recipe","curry","pie","sandwich","wrap","risotto","gratin","puree","smoothie","juice","namasu","pickled","marinated","braised","sauteed","sautéed","coleslaw","gazpacho","chutney","relish","compote","ragout","ratatouille","succotash","bruschetta","ceviche","tartare"]),zI=["made with","and vegetable","and rice","and noodle","and cheese","cooked in","served with","topped with","stuffed with","mixed with","tossed with","dressed with"];function WI(n,e){const t=(n||"").toLowerCase().trim(),s=e.toLowerCase().trim();if(t===s)return!1;for(const o of zI)if(t.includes(o)&&!s.includes(o))return!0;const i=new Set(s.split(/\s+/)),r=t.split(/[\s,&+\-–—/()[\]]+/).filter(o=>o.length>=2);for(const o of r)if(qI.has(o)&&!i.has(o))return!0;return!1}const Ap=new Set(["a","an","the","and","or","with","for","of","in","to","by","is","it","at","on","no","not","all","each","per","from","free","style","natural","original","premium","organic","fresh","whole","pure","real","lite","light","low","high","extra","reduced","fat","nonfat","skim","raw","roasted","unsweetened","sweetened","flavored","smoked","dried","frozen","canned","pack","ct","oz","lb","ml","kg","fl","count","size","gallon","quart","pint","liter","bag","box","can","jar","bottle","container","pouch","tub","carton","plain","creamy","chunky","crispy","crunchy","spicy","mild","hot","cold","classic","homestyle","traditional","artisan","greek","italian","mexican","asian","indian","mini","small","medium","large","jumbo","giant","big","handheld","electric","portable","automatic","manual","new","best","top","value","brand"]);function Ph(n,e){const t=(n||"").toLowerCase().trim(),s=e.toLowerCase().trim();if(t===s||t.startsWith(s+" "))return!0;const i=s.split(/\s+/).filter(c=>c.length>=2),r=t.split(/[\s,&+\-–—/()[\]]+/).filter(c=>c.length>=2&&!Ap.has(c)&&!/^\d+$/.test(c));if(r.length<=2)return!0;let o=0;for(const c of r)i.some(d=>{if(c.startsWith(d)||d.startsWith(c))return!0;const m=Math.min(c.length,d.length,3);return m>=3&&c.slice(0,m)===d.slice(0,m)})&&o++;return o/r.length>=.5}function kp(n,e){const t=(n||"").toLowerCase().trim(),s=e.toLowerCase().trim();if(WI(n,e))return 0;if(t===s)return 100;if(t.startsWith(s+" ")||t.startsWith(s))return 95;const r=t.split(/[\s,&+\-–—/]+/).filter(o=>o.length>=2).filter(o=>!Ap.has(o)&&!/^\d+$/.test(o));if(r.length&&(r[0].startsWith(s)||s.startsWith(r[0]))){const o=r.filter(u=>!u.startsWith(s)&&!s.startsWith(u)).length,c=85-Math.min(o*8,30);return Ph(n,e)?c:0}for(let o=1;o<Math.min(3,r.length);o++)if(r[o].startsWith(s)||s.startsWith(r[o])){const c=r.filter(d=>!d.startsWith(s)&&!s.startsWith(d)).length,u=60-o*10-Math.min(c*8,20);return Ph(n,e)?Math.max(u,5):0}return 0}async function Nc(n){const e=n.toLowerCase(),t=Ds.get(e);if(t&&Date.now()-t.ts<BI)return t.scored;const s=p.hid?`&hid=${encodeURIComponent(p.hid)}`:"";console.log(`[ShopSearch] Fetching /api/text-search?q=${encodeURIComponent(n)}${s}`);let o=(await(await fetch(`/api/text-search?q=${encodeURIComponent(n)}${s}`)).json()).results||[];const c=n.toLowerCase().split(/\s+/).filter(d=>d.length>=2);o=o.filter(d=>{const m=(d.name||"").toLowerCase();return c.some(v=>m.includes(v))});const u=o.map(d=>({...d,_score:kp(d.name||"",n)})).filter(d=>d._score>=20).sort((d,m)=>m._score-d._score).slice(0,5);if(Ds.set(e,{scored:u,ts:Date.now()}),Ds.size>jI){const d=Ds.keys().next().value;Ds.delete(d)}return u}function GI(n){if(!n)return"NONE";const e=n.toLowerCase();return e.includes("kroger.com")?"Kroger (real product)":e.includes("img.spoonacular.com/products")?"Spoonacular product (real photo)":e.includes("img.spoonacular.com/ingredients")?"Spoonacular ingredient (illustration)":e.includes("openfoodfacts.org")?"Open Food Facts (real photo)":e.includes("edamam")?"Edamam":"Other: "+new URL(n).hostname}async function KI(n){const e=f("shopSearchDropdown");if(e){e.innerHTML='<div class="search-hint">Searching…</div>',e.classList.add("active");try{const t=await Nc(n);if((f("shi")?f("shi").value.trim():"").toLowerCase()!==n.toLowerCase())return;if(!t.length){e.classList.remove("active"),e.innerHTML="",ht=null;return}ht=t,t.forEach((i,r)=>{const o=GI(i.image);console.log(`[ShopDropdown] #${r} "${i.name}" → image: ${o} | url: ${i.image||"(none)"} | score: ${i._score}`)}),e.innerHTML=t.map((i,r)=>{const o=i.image?`<img src="${i.image}" class="enrich-img" alt="" onerror="this.style.display='none'; console.warn('[ShopDropdown] Image failed to load:', '${(i.image||"").replace(/'/g,"\\'")}')"`:'<div class="enrich-img-ph">🛒</div>',c=i.category&&i.category!=="General"?`<div class="enrich-cat">${i.category}</div>`:"";return`<div class="enrich-row" onclick="pickInlineResult(${r})">
        ${o}
        <div style="flex:1;min-width:0">
          <div class="enrich-name">${i.name}</div>
          ${c}
        </div>
      </div>`}).join("")}catch(t){console.warn("Inline search failed:",t),e.classList.remove("active"),e.innerHTML="",ht=null}}}function Cp(n){if(!ht||!ht[n])return;const e=ht[n],t=f("addNoteInp"),s=t?t.value.trim():"",i=f("shi")?f("shi").value.trim():"",r={id:Date.now().toString(),name:e.name,qty:1,checked:!1,src:"search",brand:e.brand||"",image:e.image||null,category:e.category||"",source:e.source||"search",searchQuery:i};s&&(r.note=s),Se(r),P(`Added "${e.name}" ✓`);const o=f("shi");o&&(o.value=""),t&&(t.value="");const c=f("addNoteWrap");c&&(c.style.display="none"),Oc(),Ti()}function Oc(){Xs&&clearTimeout(Xs),ht=null;const n=f("shopSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}const xh=new Set;function QI(){const n=p.shop.filter(e=>e.src==="reminders"&&!e.image&&!e.imageDismissed&&!xh.has(e.id));if(n.length)for(const e of n)xh.add(e.id),Nc(e.name).then(t=>{if(t.length&&t[0]._score>=20&&t[0].image){const s=t[0],i={...e};i.image=s.image,s.brand&&!e.brand&&(i.brand=s.brand),s.category&&s.category!=="General"&&!e.category&&(i.category=s.category),i.src="reminders",Se(i),console.log(`[RemindersEnrich] Auto-enriched "${e.name}" with image from ${s.source||"search"}`)}}).catch(()=>{})}async function to(n,e,t){if(!e||e.length<2)return;const s=f("enrichResults"),i=f("enrichTitle");if(!s)return;i&&(i.textContent=`Finding "${e}"…`),s.innerHTML='<div class="enrich-loading"><div class="spin" style="width:28px;height:28px;margin:0 auto 8px"></div>Searching products…</div>';const r=f("enrichBackdrop"),o=f("enrichSheet");r&&r.classList.add("active"),o&&o.classList.add("active");try{let c=await Nc(e);if(!c.length){Rr();return}i&&(i.textContent="Choose a match");let u=c.map((d,m)=>{const v=d.image?`<img src="${d.image}" class="enrich-img" alt="" onerror="this.style.display='none'"/>`:'<div class="enrich-img-ph">🛒</div>',T=d.category&&d.category!=="General"?`<div class="enrich-cat">${d.category}</div>`:"";return`<div class="enrich-row" onclick="pickEnrichResult(${m})">
        ${v}
        <div style="flex:1;min-width:0">
          <div class="enrich-name">${d.name}</div>
          ${T}
        </div>
      </div>`}).join("");u+=`<button class="enrich-fallback" onclick="closeEnrichSheet()">
      <span style="font-size:1.1rem">📝</span>
      Just add "${e}" as typed
    </button>`,s.innerHTML=u,window._enrichCtx={itemId:n,query:e,list:t,results:c}}catch(c){console.warn("Text search failed:",c),Rr()}}function Rr(){const n=f("enrichBackdrop"),e=f("enrichSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),window._enrichCtx=null}function Pr(n){if(p.selectMode)return;event&&event.stopPropagation();const e=p.shop.find(m=>m.id===n);if(!e)return;const t=f("itemDetailContent");if(!t)return;const s=e.image?`<div class="item-detail-img-wrap">
        <img src="${e.image}" class="item-detail-img" alt="" onerror="this.style.display='none'"/>
        <button class="item-detail-img-del" onclick="deleteItemImage('${e.id}')" title="Remove image">×</button>
      </div>`:`<div class="item-detail-img-ph" onclick="triggerProductPhotoUpload('${e.id}')" style="cursor:pointer">
        <div style="text-align:center">
          <div style="font-size:1.5rem;margin-bottom:2px">📷</div>
          <div style="font-size:.65rem;color:var(--mt)">Add photo</div>
        </div>
      </div>`,i=Sp(e),r=e.image?`<div class="item-detail-change-photo" onclick="triggerProductPhotoUpload('${e.id}')">Change photo</div>`:"";let o=`<div class="item-detail-header">
    <div>${s}${r}</div>
    <div style="flex:1;min-width:0">
      <div class="item-detail-name">${Ip(e.name)}</div>
      ${i?`<div class="item-detail-brand">${e.brand}</div>`:""}
      ${e.checked?'<div style="margin-top:4px"><span class="item-detail-badge" style="background:var(--gnd);color:var(--gn)">✓ Purchased</span></div>':""}
    </div>
  </div>
  <!-- Hidden file input for product photo uploads — triggered by Add/Change photo buttons -->
  <input type="file" id="productPhotoInput" accept="image/*" style="display:none"
    onchange="handleProductPhotoSelected('${e.id}')" />`;const c=e.qty||1;c>1&&(o+=`<div class="item-detail-section">
      <div class="item-detail-label">Quantity</div>
      <div class="item-detail-value">× ${c}</div>
    </div>`),e.note&&(o+=`<div class="item-detail-section">
      <div class="item-detail-label">Note</div>
      <div class="item-detail-value">${e.note}</div>
    </div>`),o+='<button class="btn bs bf" onclick="closeItemDetail()" style="margin-top:8px">Close</button>',t.innerHTML=o;const u=f("itemDetailBackdrop"),d=f("itemDetailSheet");u&&u.classList.add("active"),d&&d.classList.add("active")}function JI(){const n=f("itemDetailBackdrop"),e=f("itemDetailSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}async function YI(n){const e=p.shop.find(s=>s.id===n);if(!e)return;const t={...e,image:null,imageDismissed:!0};await Se(t),Pr(n)}function XI(n){window._uploadTargetItemId=n;const e=document.getElementById("productPhotoInput");e&&(e.value="",e.click())}async function ZI(n){const e=document.getElementById("productPhotoInput");if(!e||!e.files||!e.files[0])return;const t=e.files[0],s=p.shop.find(r=>r.id===n);if(!s)return;const i=f("itemDetailContent");if(i){const r=i.querySelector(".item-detail-img-wrap, .item-detail-img-ph");r&&(r.innerHTML=`<div style="text-align:center;padding:16px 0">
        <div style="font-size:1.2rem">⏳</div>
        <div style="font-size:.65rem;color:var(--mt);margin-top:2px">Uploading…</div>
      </div>`)}try{const r=await NI(t,s.name),o={...s,image:r,imageDismissed:!1};await Se(o),P("Photo saved ✓"),Pr(n)}catch(r){console.error("Product photo upload failed:",r),P("Upload failed — try again"),Pr(n)}}function eS(n){const e=window._enrichCtx;if(!e)return;const t=e.results[n];if(t){if(e.list==="shop"){const s=p.shop.find(i=>i.id===e.itemId);s&&Se({...s,name:t.name,brand:t.brand||"",image:t.image||null,category:t.category||"",source:t.source||"search",imageDismissed:!1})}else if(e.list==="inv"){const s=p.inv.find(i=>i.id===e.itemId);s&&De({...s,name:t.name,brand:t.brand||"",image:t.image||null,category:t.category||s.category,source:t.source||"search",imageDismissed:!1})}Rr(),P(`Updated with "${t.name}" ✓`)}}function Rp(n){if(!p.hid||!n)return;const e=Date.now().toString(36)+Math.random().toString(36).slice(2,6);ee(`households/${p.hid}/completed_items/${e}`,{name:n,completedAt:new Date().toISOString()}).catch(t=>console.warn("recordCompleted error:",t))}function tS(n){const e=p.shop.find(s=>s.id===n);if(!e)return;const t=!e.checked;Se({...e,checked:t}),t&&Rp(e.name)}function nS(n,e){n.stopPropagation();const t=f("sne-"+e),s=f("sni-"+e);if(!t)return;t.classList.toggle("open")&&s&&(s.focus(),s.setSelectionRange(s.value.length,s.value.length))}function sS(n){const e=f("sni-"+n);if(!e)return;const t=p.shop.find(i=>i.id===n);if(!t)return;const s=e.value.trim();s!==(t.note||"")&&Se({...t,note:s})}function iS(n){const e=f("sqe-"+n),t=f("sqi-"+n);if(!e)return;e.classList.toggle("open")&&t&&(t.focus(),t.select())}function rS(n,e){const t=f("sqi-"+n);if(!t)return;const s=Math.max(1,(parseInt(t.value,10)||1)+e);t.value=s,Pp(n)}function Pp(n){const e=f("sqi-"+n);if(!e)return;const t=p.shop.find(i=>i.id===n);if(!t)return;const s=Math.max(1,parseInt(e.value,10)||1);s!==(t.qty||1)&&Se({...t,qty:s})}function oS(){p.aisleMode=!p.aisleMode;const n=f("aislebtn");n&&(n.style.background=p.aisleMode?"var(--ac)":"",n.style.color=p.aisleMode?"var(--bg)":""),fs()}function aS(n){["list","deals"].forEach(s=>{const i=f("shtab-"+s);i&&i.classList.remove("active");const r=f("sh-"+s+"-body");r&&(r.style.display="none")});const e=f("shtab-"+n);e&&e.classList.add("active");const t=f("sh-"+n+"-body");t&&(t.style.display="block"),n==="deals"&&xp()}function cS(){const n=p.shop.filter(s=>!s.checked);if(!n.length){P("List is empty!");return}const t=`🛒 Shopping List

`+n.map(s=>{let i="• "+s.name;return(s.qty||1)>1&&(i+=" × "+s.qty),s.price&&(i+=" (~$"+s.price+")"),i}).join(`
`);navigator.share?navigator.share({title:"Shopping List",text:t}).catch(()=>{}):navigator.clipboard&&navigator.clipboard.writeText(t).then(()=>P("List copied!"))}function lS(){const n=p.shop.filter(t=>t.checked);if(!n.length){P("No completed items!");return}const e=f("atk-body");e.innerHTML=`<div style="padding:16px">
    <p style="font-size:.82rem;color:var(--mt);margin-bottom:16px">Choose where each item goes in your kitchen, then tap Add All.</p>
    ${n.map(t=>{const s=ic(t.name);return`<div class="atk-item" id="atk-${t.id}" data-loc="${s}">
        <div class="atk-name">${t.name}</div>
        <div class="atk-loc">
          <button onclick="setAtkLoc('${t.id}','fridge',this)" class="${s==="fridge"?"sel":""}">🌡 Fridge</button>
          <button onclick="setAtkLoc('${t.id}','freezer',this)" class="${s==="freezer"?"sel":""}">🧊 Freeze</button>
          <button onclick="setAtkLoc('${t.id}','pantry',this)" class="${s==="pantry"?"sel":""}">🥫 Pantry</button>
        </div>
      </div>`}).join("")}
  </div>`,kt("atk")}function uS(n,e,t){const s=f("atk-"+n);s.dataset.loc=e,s.querySelectorAll(".atk-loc button").forEach(i=>i.classList.remove("sel")),t.classList.add("sel")}async function hS(){const n=p.shop.filter(s=>s.checked),e=new Date().toLocaleDateString();let t=0;for(const s of n){const i=f("atk-"+s.id);if(!i)continue;const r=i.dataset.loc||ic(s.name),o=p.inv.find(u=>u.name.toLowerCase()===s.name.toLowerCase()),c=s.qty||1;await De({id:o?o.id:"inv-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:o?o.name:s.name,qty:o?o.qty+c:c,unit:o?o.unit:"unit",location:r,category:o?o.category:Yt({name:s.name}),addedAt:o?o.addedAt:e,brand:o?o.brand:s.brand||"",expiry:o?o.expiry:null,image:o?o.image:s.image||null,source:"shopping"}),await mi(s.id),t++}xe("atk"),P(`${t} item${t!==1?"s":""} added to your kitchen! 🧺`)}async function dS(){const n=cs().map(i=>{const r=i.toISOString().split("T")[0];return p.mp[r]?`${i.toLocaleDateString("en-US",{weekday:"short"})}: ${p.mp[r]}`:""}).filter(Boolean).join(", ");if(!n){P("No meals planned yet!");return}const e=p.inv.map(i=>`${i.name} (${i.qty} ${i.unit})`).join(", "),t=document.querySelector('[onclick="buildList()"]'),s=t?t.textContent:"";t&&(t.disabled=!0,t.textContent="⏳ Thinking…");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:500,messages:[{role:"user",content:`Week meals: ${n}
Already have: ${e}
List ONLY ingredients still needed. Return ONLY a bullet list, each line starting "- ". No categories, no headers, no explanation.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",c=[];if(o.split(`
`).forEach(u=>{const d=u.match(/^[-•*]\s+(.+)/);if(d){const m=d[1].replace(/\*\*/g,"").trim();m&&!p.shop.find(v=>v.name.toLowerCase()===m.toLowerCase())&&c.push({name:m,sel:!0})}}),!c.length){P("Nothing new needed — you're all stocked! ✓");return}window._bpItems=c,f("bpList").innerHTML=c.map((u,d)=>`<div id="bpitem-${d}" onclick="bpTog(${d})" style="display:flex;align-items:center;gap:12px;padding:13px 16px;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;cursor:pointer;transition:all .15s"><div id="bpck-${d}" style="width:24px;height:24px;border-radius:50%;background:var(--gn);border:2px solid var(--gn);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.8rem;color:#0c0c0a;transition:all .2s">✓</div><div style="font-size:.9rem;font-weight:500">${u.name}</div></div>`).join(""),Mc(),f("buildPreviewM").classList.add("active")}catch{P("Couldn't reach Claude — check connection")}finally{t&&(t.disabled=!1,t.textContent=s)}}function fS(n){window._bpItems[n].sel=!window._bpItems[n].sel;const e=f("bpck-"+n),t=f("bpitem-"+n);window._bpItems[n].sel?(e.textContent="✓",e.style.background="var(--gn)",e.style.borderColor="var(--gn)",e.style.color="#0c0c0a",t.style.borderColor="var(--b1)"):(e.textContent="",e.style.background="transparent",e.style.borderColor="var(--b2)",t.style.borderColor="var(--b2)"),Mc()}function pS(n){window._bpItems.forEach((e,t)=>{window._bpItems[t].sel=n;const s=f("bpck-"+t),i=f("bpitem-"+t);n?(s.textContent="✓",s.style.background="var(--gn)",s.style.borderColor="var(--gn)",s.style.color="#0c0c0a",i.style.borderColor="var(--b1)"):(s.textContent="",s.style.background="transparent",s.style.borderColor="var(--b2)",i.style.borderColor="var(--b2)")}),Mc()}function Mc(){const n=window._bpItems.filter(t=>t.sel).length,e=f("bpAddBtn");e&&(e.textContent=n?`Add ${n} item${n!==1?"s":""}  ✓`:"Nothing selected"),e&&(e.disabled=!n)}async function mS(){const n=window._bpItems.filter(e=>e.sel);if(!n.length){f("buildPreviewM").classList.remove("active");return}for(const e of n)await Se({id:Date.now().toString()+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"meal-plan"});f("buildPreviewM").classList.remove("active"),P(`Added ${n.length} item${n.length!==1?"s":""}! 🛒`)}function xp(){const n=f("deals-zip-banner");if(!n)return;const e=p.cfg.zipcode;e?(n.innerHTML=`📍 Searching deals near <strong>${e}</strong> <span style="font-size:.72rem;color:var(--mt)">(change in Settings)</span>`,n.style.borderColor="var(--b2)"):(n.innerHTML=`⚠️ Set your zipcode in <strong style="cursor:pointer;color:var(--ac)" onclick="hideOv('');showOv('settings')">Settings</strong> to find local deals near you.`,n.style.borderColor="var(--am)")}function Na(n,e){const t=f("dealslist");if(!n||!n.length){t.innerHTML=`<div class="es"><div class="ei">🏷</div><p>No deals found for <strong>${e}</strong>.<br>Try a different search term or check back later for new circulars.</p></div>`;return}t.innerHTML="",n.forEach(s=>{const i=document.createElement("div");i.className="deal-card"+(s.onSale?" deal-match":"");const r=document.createElement("div");r.style.flex="1";const o=document.createElement("div");o.className="deal-store",o.textContent=s.store||"Store";const c=document.createElement("div");if(c.className="deal-name",c.textContent=s.name||"",s.brand||s.size){const m=document.createElement("div");m.style.cssText="font-size:.72rem;color:var(--mt);margin-top:1px",m.textContent=[s.brand,s.size].filter(Boolean).join(" · "),r.appendChild(o),r.appendChild(c),r.appendChild(m)}else r.appendChild(o),r.appendChild(c);const u=document.createElement("div");if(u.style.cssText="display:flex;align-items:baseline;gap:6px;margin-top:4px;flex-wrap:wrap",s.sale_price){const m=document.createElement("span");m.className="deal-price",m.textContent=s.sale_price,u.appendChild(m)}if(s.onSale&&s.regular){const m=document.createElement("span");m.className="deal-orig",m.textContent=s.regular,u.appendChild(m)}if(s.savings){const m=document.createElement("span");m.className="deal-badge",m.textContent="Save "+s.savings,u.appendChild(m)}r.appendChild(u);const d=document.createElement("button");d.className="btn bs bsm",d.style.cssText="align-self:center;flex-shrink:0;margin-left:8px",d.textContent="+ List",(m=>{d.onclick=()=>Lp(m)})(s.name||""),i.appendChild(r),i.appendChild(d),t.appendChild(i)})}function Oa(n){const e=f("deals-stores");!e||!n||!n.length||(e.style.display="block",e.innerHTML='<div style="font-size:.72rem;color:var(--mt);font-weight:600;margin-bottom:4px">Stores with deals</div>'+n.map(t=>`<div style="font-size:.74rem;color:var(--tx2);padding:2px 0">${t.name}</div>`).join(""))}function Lp(n){const e=(n||"").replace(/&#39;/g,"'");p.shop.find(t=>t.name.toLowerCase()===e.toLowerCase())?P("Already on your list!"):(Se({id:Date.now().toString(),name:e,qty:1,checked:!1,src:"deal"}),P(e+" added!"))}async function Ma(n){const e=p.cfg.zipcode;if(!e)throw new Error("Set your zipcode in Settings to search for local deals.");const t="ks-deals-"+e+"-"+n.toLowerCase().replace(/\s+/g,"_").substring(0,40),s=Ue(t);if(s&&s.ts&&Date.now()-s.ts<72e5)return s;const i=await fetch("/api/deals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({zipcode:e,query:n})}),r=await i.json();if(!i.ok||r.error)throw new Error(r.message||r.error||"Deals API request failed");return rt(t,{...r,ts:Date.now()}),r}async function gS(){const n=f("dealsearch").value.trim();if(!n){P("Enter something to search");return}const e=f("dealsstatus");e.style.display="block",e.style.color="var(--mt)",e.textContent="🔍 Searching deals for "+n+" near "+(p.cfg.zipcode||"your area")+"…",f("dealslist").innerHTML="";try{const t=await Ma(n);if(e.style.display="none",t.message){f("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${t.message}</p></div>`;return}t.stores&&Oa(t.stores),Na(t.deals,n)}catch(t){e.style.color="var(--rd)",e.textContent=t.message||"Unknown error"}}async function yS(){const n=p.shop.filter(s=>!s.checked);if(!n.length){const s=Object.values(p.mp).filter(Boolean);if(!s.length){P("Add items to your list first!");return}if(!confirm(`Your list is empty. Search deals for this week's meals?

`+s.join(", ")))return;const r=f("dealsstatus");r.style.display="block",r.textContent="Searching deals for your meal plan...",f("dealslist").innerHTML="";try{const o=await Ma(s.join(", "));if(r.style.display="none",o.message){f("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${o.message}</p></div>`;return}o.stores&&Oa(o.stores),Na(o.deals,s.join(", "))}catch(o){r.style.color="var(--rd)",r.textContent=o.message}return}const e=f("dealsstatus"),t=n.slice(0,8).map(s=>s.name).join(", ");e.style.display="block",e.style.color="var(--mt)",e.textContent="Searching deals for: "+t+"...",f("dealslist").innerHTML="";try{const s=await Ma(t);if(e.style.display="none",s.message){f("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${s.message}</p></div>`;return}s.stores&&Oa(s.stores),s.deals.length?Na(s.deals,t):f("dealslist").innerHTML='<div class="es"><div class="ei">🏷</div><p>No deals found for your list items.<br/>Try searching for individual items.</p></div>'}catch(s){e.style.color="var(--rd)",e.textContent=s.message}}function Ki(n){const e=sc[Yt(n)]||"🛒",t=n.image?`<img src="${n.image}" class="iimg" onerror="this.style.display='none'"/>`:`<div class="iph">${e}</div>`,s=dt(n.expiry),i=s?s.c==="expired"?" expired":s.c==="expiring"?" expiring":"":"",r=s?`<div class="etag ${s.c}">${s.l}</div>`:"";return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="inv">
    <div class="swipe-inner">
      <div class="iit${i}" onclick="swipeRowTap('${n.id}','inv')">
        <div class="sel-cb">✓</div>
        <div class="iileft">${t}<div>
          <div class="inm">${n.name}</div>
          <div class="isb">${n.brand||Yt(n)}</div>
          ${n.note?`<div class="shnote" style="margin-top:2px">📝 ${n.note}</div>`:""}
          ${r}
        </div></div>
        <div style="text-align:right">
          <div class="iqt">${n.qty}</div>
          <div class="iun">${n.unit}</div>
        </div>
      </div>
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
  </div>`}function no(){const n=(i,r)=>i.name.localeCompare(r.name),e=(p.it==="all"||p.it==="cat"?p.inv:p.inv.filter(i=>i.location===p.it)).slice().sort(n),t=f("isub");t&&(t.textContent=e.length+" "+({all:"items",fridge:"fridge items",freezer:"frozen items",pantry:"pantry items",cat:"items by type"}[p.it]||"items")),rp();const s=f("ibody");if(s){if(!e.length){s.innerHTML='<div class="es"><div class="ei">🧺</div><p>No items here yet.<br/>Tap Scan or Add to get started.</p></div>';return}if(p.it==="cat"){const i={};e.forEach(r=>{const o=Yt(r);i[o]||(i[o]=[]),i[o].push(r)}),s.innerHTML=Object.entries(i).sort((r,o)=>r[0].localeCompare(o[0])).map(([r,o])=>`<div class="lgrp"><div class="lgt">${sc[r]||"📦"} ${r}</div><div class="ilst">${o.map(Ki).join("")}</div></div>`).join(""),p.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(r=>{r.classList.add("selecting"),p.selectedIds.has(r.dataset.id)&&r.classList.add("selected")});return}if(p.it==="all"){const i=p.inv.filter(o=>{const c=dt(o.expiry);return c&&(c.c==="expiring"||c.c==="expired")}).sort((o,c)=>new Date(o.expiry)-new Date(c.expiry)),r=i.length?`<div class="lgrp"><div class="lgt" style="color:var(--am)">⚠️ Expiring Soon</div><div class="ilst">${i.map(Ki).join("")}</div></div>`:"";s.innerHTML=r+["fridge","freezer","pantry"].map(o=>{const c=e.filter(u=>u.location===o);return c.length?`<div class="lgrp"><div class="lgt">${nc(o)}</div><div class="ilst">${c.map(Ki).join("")}</div></div>`:""}).join(""),p.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(o=>{o.classList.add("selecting"),p.selectedIds.has(o.dataset.id)&&o.classList.add("selected")});return}s.innerHTML=`<div class="ilst">${e.map(Ki).join("")}</div>`,p.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(i=>{i.classList.add("selecting"),p.selectedIds.has(i.dataset.id)&&i.classList.add("selected")})}}function vS(n){const e=p.inv.find(i=>i.id===n);if(!e)return;p.adjId=n;const t=sc[Yt(e)]||"🛒",s=e.image?`<img src="${e.image}" class="pimg" onerror="this.style.display='none'"/>`:`<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">${t}</div>`;f("adjbody").innerHTML=`<div class="pcard"><div class="phdr">${s}<div style="flex:1"><div class="pnm">${e.name}</div>${e.brand?`<div class="pbr">${e.brand}</div>`:""}<div style="font-size:.7rem;color:var(--mt);margin-top:2px">Added ${e.addedAt}</div>${e.source?`<span class="srcb" style="display:inline-block;margin-top:4px">${e.source}</span>`:""}</div></div><div class="frow" style="margin-top:14px"><label class="flbl">Location</label><div class="lpick"><button class="lbtn ${e.location==="fridge"?"sel":""}" onclick="updL('fridge',this)">🌡 Fridge</button><button class="lbtn ${e.location==="freezer"?"sel":""}" onclick="updL('freezer',this)">🧊 Freezer</button><button class="lbtn ${e.location==="pantry"?"sel":""}" onclick="updL('pantry',this)">🥫 Pantry</button></div></div><div class="qrow"><span class="qlbl">Quantity</span><div class="qctl"><button class="qbtn" onclick="adjQ(-1)">−</button><input class="qinp" id="adjqty" type="number" min="0" value="${e.qty}" oninput="adjQD()"/><button class="qbtn" onclick="adjQ(1)">+</button></div></div><div class="frow"><label class="flbl">Expiry Date <span class="otag">optional</span></label><input class="fd" id="adjexp" type="date" value="${e.expiry||""}" onchange="adjE()"/></div><div class="frow"><label class="flbl">Notes <span class="otag">optional</span></label><textarea class="sh-note-inp" id="adjnote" rows="2" placeholder="Brand, store, reminders…" onblur="adjNote()">${e.note||""}</textarea></div><div class="qrow"><span class="qlbl">Low stock alert at</span><div class="qctl"><button class="qbtn" onclick="adjLowThresh(-1)">−</button><input class="qinp" id="adjlowthresh" type="number" min="0" value="${e.lowStockThreshold||1}" oninput="adjLowThreshD()"/><button class="qbtn" onclick="adjLowThresh(1)">+</button></div></div></div>`,f("rembtn").onclick=()=>Vc(n),kt("adj")}async function Vc(n){const e=p.inv.find(t=>t.id===n);if(e){const t=dt(e.expiry);t&&(t.c==="expired"||t.c==="expiring")&&await $_(e.name)}await jr(n),P("Item removed"),xe("adj")}async function _S(n,e){const t=p.inv.find(s=>s.id===p.adjId);t&&(document.querySelectorAll("#adjbody .lbtn").forEach(s=>s.classList.remove("sel")),e.classList.add("sel"),await De({...t,location:n}))}async function wS(n){const e=p.inv.find(s=>s.id===p.adjId);if(!e)return;const t=Math.max(0,e.qty+n);if(f("adjqty").value=t,t===0){await Vc(p.adjId);return}await De({...e,qty:t})}async function bS(){const n=p.inv.find(t=>t.id===p.adjId);if(!n)return;const e=parseInt(f("adjqty").value);!isNaN(e)&&e>=0&&await De({...n,qty:e})}async function TS(){const n=p.inv.find(e=>e.id===p.adjId);n&&await De({...n,expiry:f("adjexp").value||null})}async function ES(){const n=p.inv.find(t=>t.id===p.adjId);if(!n)return;const e=(f("adjnote").value||"").trim();await De({...n,note:e||null})}async function IS(n){const e=p.inv.find(s=>s.id===p.adjId);if(!e)return;const t=Math.max(0,(e.lowStockThreshold||1)+n);f("adjlowthresh").value=t,await De({...e,lowStockThreshold:t})}async function SS(){const n=p.inv.find(t=>t.id===p.adjId);if(!n)return;const e=parseInt(f("adjlowthresh").value);!isNaN(e)&&e>=0&&await De({...n,lowStockThreshold:e})}function AS(n){p.it=n,document.querySelectorAll(".itab").forEach(t=>t.classList.remove("active"));const e=f("itab-"+n);e&&e.classList.add("active"),no()}async function kS(){const n=f("man").value.trim();if(!n)return;const e=f("mac").value,t=f("mau").value.trim()||"unit",s=Math.max(1,parseInt(f("maq").value)||1),i=f("mae").value||null,r="itm-"+n.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now();await De({id:r,barcode:r,name:n,brand:"",unit:t,qty:s,location:p.maL,category:e,image:null,source:"Manual",expiry:i,addedAt:new Date().toLocaleDateString()}),f("man").value="",f("maq").value=1,f("mae").value="",f("mabtn").disabled=!0,P(`${n} added!`),xe("madd"),to(r,n,"inv")}function CS(){f("mabtn").disabled=!f("man").value.trim()}function RS(n){const e=f("maq");e.value=Math.max(1,(parseInt(e.value)||1)+n)}function PS(n,e){p.maL=n,document.querySelectorAll("#ov-madd .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}async function xS(){const n=f("imptxt").value.trim();if(!n)return;let e=0,t=0,s="pantry";for(const i of n.split(`
`)){const r=i.toLowerCase();r.includes("fridge")?s="fridge":r.includes("freezer")?s="freezer":r.includes("pantry")&&(s="pantry");const o=i.match(/^\|\s*([^|]+?)\s*\|\s*(\d+(?:\.\d+)?)\s*\|\s*([^|]+?)\s*\|/),c=i.match(/^[-*]\s+(.+?):\s*(\d+(?:\.\d+)?)\s*([a-zA-Z%\/]+.*)?$/);let u,d,m;if(o?(u=o[1].trim(),d=parseFloat(o[2]),m=o[3].trim()):c&&(u=c[1].trim(),d=parseFloat(c[2]),m=(c[3]||"unit").trim()),u&&d&&u!=="Item"&&u!=="---"&&!u.startsWith("-")){const v="item-imp-"+u.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),T=p.inv.find(C=>C.id===v);await De({id:v,barcode:v,name:u,brand:"",unit:m||"unit",qty:d,location:s,category:"Imported",image:null,source:"Imported",expiry:null,addedAt:T?T.addedAt:new Date().toLocaleDateString()}),T?t++:e++}}f("imptxt").value="",P(`Imported ${e} new, updated ${t}`),xe("import")}let Zs=null,Kt=null,so="fridge",Ke=null,Yo=!1,Qi="",Xo=!1;const Ns=new Map,LS=300*1e3,DS=30;function NS(){const n=f("invAddBackdrop"),e=f("invAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),so="fridge",document.querySelectorAll("#invAddSheet .lbtn").forEach(s=>s.classList.remove("sel"));const t=f("invAddLoc-fridge");t&&t.classList.add("sel"),setTimeout(()=>{const s=f("invi");s&&(s.value="",s.focus())},150)}function Ei(){const n=f("invAddBackdrop"),e=f("invAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),$c()}function OS(){Ei(),window.openScanForInventory&&window.openScanForInventory()}function MS(){Ei(),Dp()}function VS(n,e){so=n,document.querySelectorAll("#invAddSheet .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function $S(){const n=f("invAddNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=f("invAddNoteInp");t&&t.focus()}}function US(){const n=f("invi"),e=n?n.value.trim():"";if(!e)return;let t=e,s=1;const i=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),s=parseInt(r[2],10)||1):i&&(t=i[2].trim(),s=parseInt(i[1],10)||1);const o=f("invAddNoteInp"),c=o?o.value.trim():"",u="itm-"+t.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),d={id:u,barcode:u,name:t,brand:"",unit:"unit",qty:s,location:so,category:Yt({name:t}),image:null,source:"Manual",expiry:null,addedAt:new Date().toLocaleDateString()};c&&(d.note=c),De(d),P(`${t} added!`),n&&(n.value=""),o&&(o.value="");const m=f("invAddNoteWrap");m&&(m.style.display="none"),$c(),Ei(),to(u,t,"inv")}function FS(){Zs&&clearTimeout(Zs);const n=f("invi"),e=n?n.value.trim():"",t=f("invSearchDropdown");if(!e||e.length<2){t&&(t.classList.remove("active"),t.innerHTML=""),Kt=null;return}Zs=setTimeout(()=>jS(e),350)}function BS(n){if(!n)return"NONE";const e=n.toLowerCase();return e.includes("kroger.com")?"Kroger (real product)":e.includes("img.spoonacular.com/products")?"Spoonacular product (real photo)":e.includes("img.spoonacular.com/ingredients")?"Spoonacular ingredient (illustration)":e.includes("openfoodfacts.org")?"Open Food Facts (real photo)":e.includes("edamam")?"Edamam":"Other: "+new URL(n).hostname}async function jS(n){const e=f("invSearchDropdown");if(e){e.innerHTML='<div class="search-hint">Searching…</div>',e.classList.add("active");try{const t=n.toLowerCase();let s;const i=Ns.get(t);if(i&&Date.now()-i.ts<LS)s=i.scored;else{let u=(await(await fetch(`/api/text-search?q=${encodeURIComponent(n)}`)).json()).results||[];const d=n.toLowerCase().split(/\s+/).filter(m=>m.length>=2);u=u.filter(m=>{const v=(m.name||"").toLowerCase();return d.some(T=>v.includes(T))}),s=u.map(m=>({...m,_score:kp(m.name||"",n)})).filter(m=>m._score>=15).sort((m,v)=>v._score-m._score).slice(0,5),Ns.set(t,{scored:s,ts:Date.now()}),Ns.size>DS&&Ns.delete(Ns.keys().next().value)}if((f("invi")?f("invi").value.trim():"").toLowerCase()!==n.toLowerCase())return;if(!s.length){e.classList.remove("active"),e.innerHTML="",Kt=null;return}Kt=s,s.forEach((o,c)=>{const u=BS(o.image);console.log(`[InvDropdown] #${c} "${o.name}" → image: ${u} | url: ${o.image||"(none)"} | score: ${o._score}`)}),e.innerHTML=s.map((o,c)=>{const u=o.image?`<img src="${o.image}" class="enrich-img" alt="" onerror="this.style.display='none'"/>`:'<div class="enrich-img-ph">🛒</div>',d=o.brand?`<div class="enrich-brand">${o.brand}</div>`:"",m=o.category&&o.category!=="General"?`<div class="enrich-cat">${o.category}</div>`:"";return`<div class="enrich-row" onclick="pickInvInlineResult(${c})">
        ${u}
        <div style="flex:1;min-width:0">
          <div class="enrich-name">${o.name}</div>
          ${d}${m}
        </div>
      </div>`}).join("")}catch(t){console.warn("Inventory inline search failed:",t),e.classList.remove("active"),e.innerHTML="",Kt=null}}}function HS(n){if(!Kt||!Kt[n])return;const e=Kt[n],t=f("invAddNoteInp"),s=t?t.value.trim():"",i="itm-"+(e.name||"item").toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),r={id:i,barcode:i,name:e.name,brand:e.brand||"",unit:"unit",qty:1,location:so,category:e.category||Yt({name:e.name}),image:e.image||null,source:e.source||"search",expiry:null,addedAt:new Date().toLocaleDateString()};s&&(r.note=s),De(r),P(`Added "${e.name}" ✓`);const o=f("invi");o&&(o.value=""),t&&(t.value="");const c=f("invAddNoteWrap");c&&(c.style.display="none"),$c(),Ei()}function $c(){Zs&&clearTimeout(Zs),Kt=null;const n=f("invSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}function qS(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=f("invAddMicOpt");e&&(e.style.display="")}function Lh(n){const e=f("inv-micstatus");e&&e.classList.toggle("visible",n)}function Dp(){if(Yo&&Ke){Xo=!0,Ke.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){P("Voice input not supported");return}Ke=new n,Ke.lang="en-US",Ke.interimResults=!0,Ke.maxAlternatives=1,Ke.continuous=!1,Qi="",Yo=!0,Lh(!0),Ke.onresult=e=>{let t="";for(let i=e.resultIndex;i<e.results.length;i++){const r=e.results[i][0].transcript;e.results[i].isFinal?Qi+=r:t+=r}const s=f("invi");s&&(s.value=(Qi+t).trim())},Ke.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&P("Couldn't hear that — try again")},Ke.onend=()=>{Yo=!1,Lh(!1),Ke=null;let e=Qi.trim();if(!e&&Xo){const r=f("invi");e=r?r.value.trim():""}if(Xo=!1,!e)return;const t="itm-"+e.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),s=ic(e);De({id:t,barcode:t,name:e,brand:"",unit:"unit",qty:1,location:s,category:Yt({name:e}),image:null,source:"Voice",expiry:null,addedAt:new Date().toLocaleDateString()}),P(`Added "${e}" to ${s}`);const i=f("invi");i&&(i.value=""),to(t,e,"inv")},Ke.start()}function Np(n){return[...document.querySelectorAll("#"+n+" .tag.sel")].map(e=>e.dataset.tag)}function zS(n,e){document.querySelectorAll("#"+n+" .tag").forEach(t=>{t.classList.toggle("sel",(e||[]).includes(t.dataset.tag))})}function WS(n){n.classList.toggle("sel")}function GS(n){const e=Array.from({length:5},(s,i)=>`<span class="star${i<n.rating?" on":""}">${i<n.rating?"★":"☆"}</span>`).join(""),t=n.sourceUrl?`<a href="${n.sourceUrl}" target="_blank" onclick="event.stopPropagation()" style="font-size:.68rem;color:var(--ac);text-decoration:none;border:1px solid rgba(212,168,83,.3);border-radius:20px;padding:2px 8px;background:transparent">🔗 View original</a>`:n.source?`<span class="sbdg">${n.source}</span>`:"";return`<div class="rcd${n.favorited?" fav":""}" onclick="openER('${n.id}')"><div class="rrow"><div class="rnm">${n.name}</div><div class="rfav" onclick="event.stopPropagation();togFav('${n.id}')">${n.favorited?"❤️":"🤍"}</div></div><div class="stars">${e}</div>${n.description?`<div class="rnot" style="color:var(--tx2);margin-top:6px">${n.description.substring(0,100)}${n.description.length>100?"…":""}</div>`:""}${n.notes?`<div class="rnot">${n.notes}</div>`:""}<div class="rmeta"><span>${n.savedAt}</span>${t}</div></div>`}function KS(n){p.rt=n,document.querySelectorAll(".rtab").forEach(t=>t.classList.remove("active"));const e=f("rtab-"+n);e&&e.classList.add("active"),n==="community"?Uc():io()}function io(){if(p.rt==="community")return;let n=[...p.recs];p.rt==="fav"?n=n.filter(s=>s.favorited):p.rt==="top"?n=n.filter(s=>s.rating>=4).sort((s,i)=>i.rating-s.rating):p.rt==="quick"?n=n.filter(s=>(s.tags||[]).includes("Quick")||(s.tags||[]).includes("Under 30 min")):p.rt==="kid"?n=n.filter(s=>(s.tags||[]).includes("Kid-Friendly")):n=n.sort((s,i)=>new Date(i.savedAt||0)-new Date(s.savedAt||0));const e=f("rsub");e&&(e.textContent=n.length+" recipe"+(n.length!==1?"s":""));const t=f("rbody");if(t){if(!n.length){t.innerHTML=`<div class="es"><div class="ei">📖</div><p>${p.rt==="fav"?"No favorites yet!":p.rt==="top"?"No 4–5 star recipes yet.":p.rt==="quick"?"No quick recipes saved yet.":p.rt==="kid"?"No kid-friendly recipes yet.":"No recipes saved yet.<br/>Mark meals as cooked or tap + Add."}</p></div>`;return}t.innerHTML=n.map(GS).join("")}}async function QS(n){const e=p.recs.find(t=>t.id===n);e&&(await Jt({...e,favorited:!e.favorited}),P(e.favorited?"Removed from favorites":"Added to favorites! ❤️"))}function JS(){f("savrecbtn").disabled=!f("rn").value.trim()}async function YS(){const n=f("rurl").value.trim();if(!n)return;const e=f("rurlstatus"),t=f("rimportbtn");e.style.display="block",e.style.color="var(--mt)",e.textContent="⏳ Fetching recipe…",t.disabled=!0;try{const i=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})})).json();if(!i.success){e.style.color="var(--rd)",e.textContent="⚠️ "+(i.error||"Couldn't import this recipe"),t.disabled=!1;return}const r=i.recipe,o=[r.ingredients||"",r.steps?`

Steps:
`+r.steps:""].join("").trim();f("rn").value=r.title||"",f("rd").value=o||r.description||"",f("rnotes").value=r.notes||"",f("rsourceurl").value=n,f("rcuisine")&&(f("rcuisine").value=r.cuisine||""),f("savrecbtn").disabled=!r.title,e.style.color="var(--gn)",e.textContent="✓ Recipe imported! Review and save."}catch{e.style.color="var(--rd)",e.textContent="⚠️ Couldn't import — try copying the recipe text manually."}t.disabled=!1}async function XS(){const n=f("rn").value.trim();if(!n)return;const e=f("rd").value.trim(),t=f("rsourceurl")?f("rsourceurl").value.trim():"",s=f("rcuisine")?f("rcuisine").value.trim():"",i=Np("rtags");await Jt({id:"rec-"+Date.now(),name:n,rating:p.nr,favorited:!1,notes:f("rnotes").value.trim(),description:e,source:t?"Web Import":"Manual",sourceUrl:t||null,tags:i,cuisine:s,cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:!1}),f("rn").value="",f("rnotes").value="",f("rd").value="",f("rsourceurl").value="",f("rurl").value="",f("rcuisine")&&(f("rcuisine").value=""),zS("rtags",[]),p.nr=0,f("savrecbtn").disabled=!0,Ws("rstars",0),P("Recipe saved! 📖"),xe("arec")}function ZS(n){const e=p.recs.find(o=>o.id===n);if(!e)return;p.eid=n;const t=e.rating||0,s=Array.from({length:5},(o,c)=>`<span class="star${c<t?" on":""}" onclick="setStar(${c+1},'e')">${c<t?"★":"☆"}</span>`).join(""),i=e.sourceUrl?`<div class="frow"><label class="flbl">Original</label><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);word-break:break-all">${e.sourceUrl}</a></div>`:"",r=`<div class="frow"><label class="flbl">Tags</label><div class="tags" id="etags">
    <div class="tag${(e.tags||[]).includes("Quick")?" sel":""}" data-tag="Quick" onclick="togTag(this)">⚡ Quick</div>
    <div class="tag kid${(e.tags||[]).includes("Kid-Friendly")?" sel":""}" data-tag="Kid-Friendly" onclick="togTag(this)">👶 Kid-Friendly</div>
    <div class="tag date${(e.tags||[]).includes("Date Night")?" sel":""}" data-tag="Date Night" onclick="togTag(this)">🕯 Date Night</div>
    <div class="tag batch${(e.tags||[]).includes("Batch Cook")?" sel":""}" data-tag="Batch Cook" onclick="togTag(this)">📦 Batch Cook</div>
    <div class="tag${(e.tags||[]).includes("Healthy")?" sel":""}" data-tag="Healthy" onclick="togTag(this)">🥗 Healthy</div>
    <div class="tag${(e.tags||[]).includes("Under 30 min")?" sel":""}" data-tag="Under 30 min" onclick="togTag(this)">⏱ Under 30 min</div>
  </div></div>`;f("erecbody").innerHTML=`
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
    <div class="frow"><label class="flbl">Cuisine <span class="otag">optional</span></label><input class="fi" id="ecuis" value="${e.cuisine||""}" placeholder="e.g. Mediterranean, Turkish, Asian…"/></div>
    <div style="display:flex;align-items:center;gap:10px;margin:12px 0"><span style="font-size:.88rem">Favorite</span><div class="tog${e.favorited?" on":""}" id="etog" onclick="this.classList.toggle('on')"></div></div>
    <div style="display:flex;align-items:center;gap:10px;margin:6px 0 14px"><span style="font-size:.88rem">Share publicly</span><div class="tog${e.isPublic?" on":""}" id="epub" onclick="togglePublic('${e.id}');this.classList.toggle('on')"></div><span style="font-size:.72rem;color:var(--mt)">Visible to the community</span></div>
    <div class="brow"><button class="btn bd" style="flex:1" onclick="delER()">Delete</button><button class="btn bp" style="flex:2" onclick="updR()">Save</button></div>`,kt("erec")}async function e0(){const n=p.recs.find(i=>i.id===p.eid);if(!n)return;const e=[...document.querySelectorAll("#estars .star")].filter(i=>i.classList.contains("on")).length,t=Np("etags"),s=f("ecuis")?f("ecuis").value.trim():n.cuisine||"";await Jt({...n,name:f("ern").value.trim(),rating:e,description:f("erd").value.trim(),notes:f("erno").value.trim(),favorited:f("etog").classList.contains("on"),tags:t,cuisine:s}),P("Recipe updated!"),xe("erec")}async function t0(){confirm("Delete this recipe?")&&(await F_(p.eid),P("Deleted"),xe("erec"))}async function n0(n){const e=f("erd");if(!e)return;const t=e.value.trim();if(!t){P("No ingredients to scale");return}const s=f("scaleStatus");s.style.display="block",s.style.color="var(--mt)",s.textContent=`⏳ Scaling to ${n}× with Claude…`;try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Scale ALL ingredient quantities in this recipe by ${n}x. Return ONLY the updated recipe text with scaled quantities. Keep the same format. Do not add any explanation.

${t}`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"";o?(e.value=o.trim(),s.style.color="var(--gn)",s.textContent=`✓ Scaled to ${n}×`):(s.style.color="var(--rd)",s.textContent="Couldn't scale — try again")}catch{s.style.color="var(--rd)",s.textContent="Couldn't reach Claude — check connection"}}async function s0(){const n=f("rsub");n&&(n.textContent="Thinking…");const e=p.inv.map(i=>`${i.name} (${i.qty} ${i.unit})`).join(", "),t=p.recs.map(i=>i.name).join(", "),s=[p.cfg.nopork?"no pork":null,p.cfg.noshellfish?"no shellfish":null,p.cfg.vegetarian?"vegetarian":null,p.cfg.glutenfree?"gluten-free":null,p.cfg.other||null].filter(Boolean).join(", ");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Based on this exact inventory: ${e}
Restrictions: ${s||"none"}
Saved recipes: ${t||"none"}
Suggest 5 complete meals I can make RIGHT NOW with no extra shopping. Be specific with names. Format as a numbered list.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",c=f("rbody");c&&(c.innerHTML=`<div style="background:var(--card);border:1px solid var(--ac);border-radius:14px;padding:16px;margin-bottom:12px"><div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ac);margin-bottom:10px">🔍 Make right now — no shopping needed</div><div style="font-size:.88rem;line-height:1.8;color:var(--tx2)">${X_(o)}</div><button class="btn bs bsm" style="margin-top:12px;width:100%" onclick="setRT('all')">← Back to recipes</button></div>`),n&&(n.textContent="Based on your inventory")}catch{n&&(n.textContent="Couldn't reach Claude")}}async function i0(n){const e=p.recs.find(t=>t.id===n);if(!e||!e.description){P("No ingredients listed");return}P("Parsing ingredients…");try{const t=p.inv.map(u=>u.name.toLowerCase()),i=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:400,messages:[{role:"user",content:`Extract a list of ingredient names from this recipe description. Return ONLY a JSON array of strings, no markdown, no quantities, just clean ingredient names. Example: ["chicken","garlic","olive oil"]

Recipe: ${e.description}`}]})})).json(),r=(i.content&&i.content[0]&&i.content[0].text||"").replace(/```json|```/g,"").trim(),c=JSON.parse(r).filter(u=>!t.some(d=>d.includes(u.toLowerCase())||u.toLowerCase().includes(d)));if(!c.length){P("All ingredients already in pantry ✓");return}for(const u of c)await Se({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:u,qty:1,checked:!1,src:"recipe"});P(`Added ${c.length} ingredient${c.length!==1?"s":""} to shopping list 🛒`),xe("erec"),window.showScreen("shopping")}catch{P("Couldn't parse ingredients")}}function r0(n,e){p.nr=n,e==="r"?Ws("rstars",n):e==="c"?Ws("cstars",n):e==="e"&&Ws("estars",n)}async function o0(n){const e=p.recs.find(r=>r.id===n);if(!e)return;const t=!e.isPublic,s=Le(),i=(s==null?void 0:s.displayName)||localStorage.getItem("ks-who")||"Anonymous";t?(await B_(e,i,p.hid),P("Recipe shared with the community!")):(await j_(e.id),P("Recipe removed from community")),await Jt({...e,isPublic:t})}async function Uc(){const n=f("rbody");if(n){n.innerHTML='<div class="es"><div class="ei">🌍</div><p>Loading community recipes…</p></div>';try{p.comRecs=await H_(),Fc()}catch(e){console.error("loadCommunity:",e),n.innerHTML=`<div class="es"><div class="ei">⚠️</div><p>Couldn't load community recipes.</p></div>`}}}function a0(n){p.comCuisine=n,Fc()}function c0(n){p.comSearch=n,Fc()}function Fc(){const n=f("rbody");if(!n)return;let e=[...p.comRecs];if(p.comCuisine&&p.comCuisine!=="all"&&(e=e.filter(i=>(i.cuisine||"").toLowerCase().includes(p.comCuisine.toLowerCase())||(i.tags||[]).some(r=>r.toLowerCase().includes(p.comCuisine.toLowerCase())))),p.comSearch){const i=p.comSearch.toLowerCase();e=e.filter(r=>(r.title||"").toLowerCase().includes(i)||(r.tags||[]).join(" ").toLowerCase().includes(i)||(r.cuisine||"").toLowerCase().includes(i)||(r.authorName||"").toLowerCase().includes(i))}e.sort((i,r)=>new Date(r.createdAt||0)-new Date(i.createdAt||0));const t=f("rsub");t&&(t.textContent=e.length+" community recipe"+(e.length!==1?"s":""));let s=`<div style="margin-bottom:14px">
    <input class="fi" id="com-search" placeholder="Search recipes, tags, authors…" value="${p.comSearch}" oninput="setComSearch(this.value)" style="margin-bottom:8px"/>
    <div style="display:flex;gap:6px;flex-wrap:wrap">
      <select class="fsel" id="com-cuisine" onchange="setComCuisine(this.value)" style="flex:1;font-size:.8rem;padding:8px 10px">
        <option value="all"${p.comCuisine==="all"?" selected":""}>All Cuisines</option>
        <option value="mediterranean"${p.comCuisine==="mediterranean"?" selected":""}>Mediterranean</option>
        <option value="asian"${p.comCuisine==="asian"?" selected":""}>Asian</option>
        <option value="american"${p.comCuisine==="american"?" selected":""}>American</option>
        <option value="turkish"${p.comCuisine==="turkish"?" selected":""}>Turkish</option>
        <option value="indian"${p.comCuisine==="indian"?" selected":""}>Indian</option>
        <option value="mexican"${p.comCuisine==="mexican"?" selected":""}>Mexican</option>
        <option value="italian"${p.comCuisine==="italian"?" selected":""}>Italian</option>
      </select>
    </div>
  </div>`;if(!e.length){s+=`<div class="es"><div class="ei">🌍</div><p>${p.comSearch||p.comCuisine!=="all"?"No recipes match your filters.":"No community recipes yet. Be the first to share!"}</p></div>`,n.innerHTML=s;return}e.forEach(i=>{const r=(i.tags||[]).map(c=>`<span class="com-tag">${c}</span>`).join(""),o=i.createdAt?new Date(i.createdAt).toLocaleDateString():"";s+=`<div class="rcd com-rcd" onclick="openComRecipe('${i.id}')">
      <div class="rrow">
        <div class="rnm">${i.title||"Untitled"}</div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <span style="font-size:.78rem;color:var(--rd)">❤️ ${i.likes||0}</span>
        </div>
      </div>
      ${i.cuisine?`<div style="font-size:.72rem;color:var(--ac);font-weight:600;margin-top:4px">${i.cuisine}</div>`:""}
      ${i.ingredients?`<div class="rnot" style="color:var(--tx2);margin-top:6px">${(i.ingredients||"").substring(0,100)}${(i.ingredients||"").length>100?"…":""}</div>`:""}
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${r}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${i.authorName||"Anonymous"} · ${o}</div>
      </div>
    </div>`}),n.innerHTML=s}async function l0(n){const e=p.comRecs.find(u=>u.id===n);if(!e)return;await G_(n)?p.myLikes.add(n):p.myLikes.delete(n);let s=[];try{s=await W_(n)}catch{}s.sort((u,d)=>new Date(u.createdAt||0)-new Date(d.createdAt||0));const i=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`;let r=s.map(u=>`<div style="padding:10px 0;border-bottom:1px solid var(--b1)">
    <div style="display:flex;justify-content:space-between;align-items:center">
      <span style="font-size:.78rem;font-weight:600">${u.authorName||"Anonymous"}</span>
      <span style="font-size:.68rem;color:var(--mt)">${u.createdAt?new Date(u.createdAt).toLocaleDateString():""}</span>
    </div>
    <div style="font-size:.84rem;color:var(--tx2);margin-top:4px;line-height:1.5">${(u.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>
  </div>`).join("");const o=(e.tags||[]).map(u=>`<span class="com-tag">${u}</span>`).join(""),c=p.myLikes.has(n);f("erecbody").innerHTML=`
    <div style="margin-bottom:14px">
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;line-height:1.3;margin-bottom:6px">${e.title||"Untitled"}</div>
      ${e.cuisine?`<div style="font-size:.78rem;color:var(--ac);font-weight:600;margin-bottom:6px">${e.cuisine}</div>`:""}
      <div style="font-size:.76rem;color:var(--mt)">by ${e.authorName||"Anonymous"} · ${e.createdAt?new Date(e.createdAt).toLocaleDateString():""}</div>
      ${o?`<div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:8px">${o}</div>`:""}
    </div>

    <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap">
      <button class="btn ${c?"bp":"bs"} bsm" onclick="likeComRecipe('${n}')" id="com-like-btn">
        ${c?"❤️":"🤍"} ${e.likes||0} Like${(e.likes||0)!==1?"s":""}
      </button>
      <button class="btn bs bsm" style="flex:1" onclick="saveComToKitchen('${n}')">📖 Save to my kitchen</button>
      <button class="btn bs bsm" onclick="shareComRecipe('${n}')">📤 Share</button>
    </div>

    ${e.ingredients?`<div class="frow"><label class="flbl">Ingredients</label><div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.ingredients||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div></div>`:""}
    ${e.steps?`<div class="frow"><label class="flbl">Steps</label><div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.steps||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div></div>`:""}

    <div style="margin-top:16px">
      <div class="flbl" style="margin-bottom:10px">Comments (${s.length})</div>
      <div id="com-comments">${r||'<div style="font-size:.82rem;color:var(--mt);padding:8px 0">No comments yet.</div>'}</div>
      <div style="display:flex;gap:8px;margin-top:12px">
        <input class="fi" id="com-cmt-input" placeholder="Add a comment…" style="flex:1" onkeydown="if(event.key==='Enter')addComComment('${n}')"/>
        <button class="btn bp bsm" onclick="addComComment('${n}')">Post</button>
      </div>
    </div>

    <div style="margin-top:16px;padding:12px;background:var(--card);border:1px solid var(--b1);border-radius:12px">
      <div style="font-size:.72rem;color:var(--mt);margin-bottom:6px">Share link (viewable without sign-in)</div>
      <div style="font-size:.8rem;color:var(--ac);word-break:break-all;cursor:pointer" onclick="navigator.clipboard.writeText('${i}');showNotif('Link copied!')">${i}</div>
    </div>`,kt("erec")}async function u0(n){if(!Le()){P("Sign in to like recipes");return}const t=p.myLikes.has(n);try{await q_(n,t),t?p.myLikes.delete(n):p.myLikes.add(n);const s=p.comRecs.find(r=>r.id===n);s&&(s.likes=(s.likes||0)+(t?-1:1));const i=f("com-like-btn");if(i){const r=p.myLikes.has(n);i.className=`btn ${r?"bp":"bs"} bsm`,i.innerHTML=`${r?"❤️":"🤍"} ${(s==null?void 0:s.likes)||0} Like${((s==null?void 0:s.likes)||0)!==1?"s":""}`}P(t?"Like removed":"Liked!")}catch(s){console.error("likeComRecipe:",s),P("Couldn't update like")}}async function h0(n){if(!Le()){P("Sign in to save recipes");return}const t=p.comRecs.find(s=>s.id===n);if(t)try{await K_(t),P("Recipe saved to your kitchen! 📖"),xe("erec")}catch(s){console.error("saveComToKitchen:",s),P("Couldn't save recipe")}}async function d0(n){var r;const e=Le();if(!e){P("Sign in to comment");return}const t=f("com-cmt-input"),s=(r=t==null?void 0:t.value)==null?void 0:r.trim();if(!s)return;const i=e.displayName||localStorage.getItem("ks-who")||"Anonymous";try{const o=await z_(n,s,i);t.value="";const c=f("com-comments");c&&o&&(c.querySelector("div[style*='color:var(--mt)']")&&!c.querySelector("div[style*='border-bottom']")&&(c.innerHTML=""),c.innerHTML+=`<div style="padding:10px 0;border-bottom:1px solid var(--b1)">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:.78rem;font-weight:600">${o.authorName}</span>
          <span style="font-size:.68rem;color:var(--mt)">${new Date().toLocaleDateString()}</span>
        </div>
        <div style="font-size:.84rem;color:var(--tx2);margin-top:4px;line-height:1.5">${o.text.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>
      </div>`),P("Comment posted!")}catch(o){console.error("addComComment:",o),P("Couldn't post comment")}}async function f0(n){const e=p.comRecs.find(i=>i.id===n),t=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`,s=(e==null?void 0:e.title)||"Recipe";if(navigator.share)try{await navigator.share({title:s,text:`Check out this recipe: ${s}`,url:t});return}catch{}try{await navigator.clipboard.writeText(t),P("Link copied!")}catch{P("Couldn't copy link")}}function p0(){const n=p.cookLog,e=p.wasteLog;let t=0;for(let V=0;V<60;V++){const B=new Date;B.setDate(B.getDate()-V);const K=B.toISOString().split("T")[0];if(n.find(te=>te.date===K))t++;else if(V>0)break}const s=f("ins-streak-num");s&&(s.textContent=t);const i=f("ins-total-cooked");i&&(i.textContent=n.length);const r=f("ins-waste-count");r&&(r.textContent=e.length);const o=f("ins-sub");o&&(o.textContent=n.length?" "+n.length+" meals cooked":"Your kitchen at a glance");const c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],u=f("ins-week");if(u){const V=cs().map(B=>{const K=B.toISOString().split("T")[0],te=p.mp[K],b=K===Ft();return`<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--b1)${b?";background:var(--acd);margin:0 -4px;padding:7px 4px;border-radius:6px":""}">
        <div style="font-size:.72rem;color:var(--mt);min-width:30px;font-weight:${b?"600":"400"}">${c[B.getDay()]}</div>
        <div style="font-size:.72rem;color:var(--mt);min-width:20px">${B.getDate()}</div>
        <div style="font-size:.84rem;color:${te?"var(--tx)":"var(--mt)"};font-style:${te?"normal":"italic"};flex:1">${te||"—"}</div>
        ${b?"<div style='font-size:.66rem;color:var(--ac);font-weight:600'>TODAY</div>":""}
      </div>`}).join("");u.innerHTML=V}const d=n.slice(0,7).map(V=>V.name),m=f("ins-variety-nudge"),v=f("ins-variety-msg");if(m&&d.length>=3){const V={};d.forEach(y=>{const w=y.toLowerCase();V[w]=(V[w]||0)+1});const B=Object.entries(V).filter(([,y])=>y>=3),K=Object.values(p.mp).filter(Boolean),te=K.some(y=>/curry|dal|rice|bengali|biryani|hilsa|mustard|lentil/i.test(y)),b=K.some(y=>/kebab|köfte|pide|börek|meze|turkish|pilav|lahmacun/i.test(y));B.length?(m.style.display="block",v.textContent=`You've cooked "${B[0][0]}" ${B[0][1]} times this week. Time to mix it up?`):!te&&K.length>=3?(m.style.display="block",v.textContent="No Bangladeshi dishes this week — how about a dal, biryani, or fish curry?"):!b&&K.length>=3?(m.style.display="block",v.textContent="No Turkish dishes planned — köfte, mercimek çorbası, or a pilav would be great this week!"):m.style.display="none"}else m&&(m.style.display="none");const T={};n.forEach(V=>{T[V.name]=(T[V.name]||0)+1});const C=Object.entries(T).sort((V,B)=>B[1]-V[1]).slice(0,6),D=C[0]?C[0][1]:1,M=f("ins-cooked");if(M)if(!C.length)M.innerHTML='<div class="es" style="padding:16px"><p>Cook some meals to see stats!</p></div>';else{const V=["🥇","🥈","🥉","4️⃣","5️⃣","6️⃣"];M.innerHTML=C.map(([B,K],te)=>`<div class="ibar-row"><div style="font-size:.9rem;margin-right:4px">${V[te]||""}</div><div class="ibar-lbl">${B}</div><div class="ibar-track"><div class="ibar-fill" style="width:${Math.round(K/D*100)}%"></div></div><div class="ibar-val">${K}×</div></div>`).join("")}const N={Bangladeshi:"#e8a44a",Turkish:"#c0392b",Mediterranean:"#27ae60",American:"#3498db",Italian:"#e74c3c",Asian:"#9b59b6",Other:"#95a5a6"},z=f("ins-cuisine");if(z&&n.length){const V=b=>{const y=b.toLowerCase();return/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(y)?"Bangladeshi":/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner|iskender/i.test(y)?"Turkish":/pasta|pizza|risotto|gnocchi|italian/i.test(y)?"Italian":/tacos|burrito|enchilada|mexican/i.test(y)?"Mexican":/sushi|ramen|stir.?fry|fried rice|asian|chinese|thai|japanese/i.test(y)?"Asian":/burger|sandwich|mac|bbq|american/i.test(y)?"American":"Other"},B={};n.slice(0,20).forEach(b=>{const y=V(b.name);B[y]=(B[y]||0)+1});const K=Object.values(B).reduce((b,y)=>b+y,0),te=Object.entries(B).sort((b,y)=>y[1]-b[1]);z.innerHTML=te.map(([b,y])=>{const w=Math.round(y/K*100),I=N[b]||"#95a5a6";return`<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span style="font-size:.82rem;font-weight:500">${b}</span><span style="font-size:.74rem;color:var(--mt)">${y} meals · ${w}%</span></div><div style="height:8px;background:var(--b1);border-radius:4px;overflow:hidden"><div style="height:100%;width:${w}%;background:${I};border-radius:4px;transition:width .6s ease"></div></div></div>`}).join("")||'<div class="es" style="padding:16px"><p>Cook more meals to see your cuisine breakdown.</p></div>'}const G=f("ins-waste");G&&(G.innerHTML=e.length?e.slice(0,10).map(V=>`<div class="waste-item"><span style="font-size:.86rem">${V.name}</span><span style="font-size:.74rem;color:var(--rd)">${V.date}</span></div>`).join(""):'<div class="es" style="padding:16px"><p>Nothing wasted yet — great job! 🎉</p></div>')}function m0(){const n=["fridge","freezer","pantry"].map(o=>{const c=p.inv.filter(u=>u.location===o);return c.length?nc(o).toUpperCase()+": "+c.map(u=>`${u.name} (${u.qty} ${u.unit})`).join(", "):""}).filter(Boolean).join(`
`),e=p.inv.filter(o=>{const c=dt(o.expiry);return c&&(c.c==="expiring"||c.c==="expired")}).map(o=>{const c=dt(o.expiry);return`${o.name} (${c.l})`}).join(", "),t=cs().map(o=>{const c=o.toISOString().split("T")[0];return p.mp[c]?`${o.toLocaleDateString("en-US",{weekday:"short"})}: ${p.mp[c]}`:""}).filter(Boolean).join(", "),s=p.recs.filter(o=>o.favorited||o.rating>=4).map(o=>`${o.name}${o.rating?` (${o.rating}★)`:""}`).join(", "),i=[p.cfg.nopork?"no pork":null,p.cfg.noshellfish?"no shellfish":null,p.cfg.vegetarian?"vegetarian":null,p.cfg.glutenfree?"gluten-free":null,p.cfg.other].filter(Boolean).join(", "),r=p.cookLog.slice(0,7).map(o=>o.name).join(", ");return`You are a kitchen and household assistant for a family in Edison NJ. You ONLY help with kitchen, food, cooking, grocery, and household topics. This includes:
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
${s?"FAVOURITE RECIPES: "+s:""}
${r?"RECENTLY COOKED (avoid repeating): "+r:""}
HOUSEHOLD: ${p.cfg.name}, Adults: ${p.cfg.adults}, Kids: ${p.cfg.kids}, Restrictions: ${i||"none"}, Cuisines: ${p.cfg.cuisines}, Cook time: ${p.cfg.cookTime}.
CULTURAL BACKGROUND: Bushra is Bangladeshi, Bora is Turkish — authentically lean toward these cuisines (Bengali spices, mustard oil, dal, hilsa-style fish; Turkish kebabs, meze, börek, yogurt sauces, lentil soups). Suggest these when inventory allows.
Be concise. Use what they have. Suggest variety — lean toward Bangladeshi and Turkish — avoid repeating recent meals. Format grocery lists as bullet points starting "- ".

RECIPE FORMAT RULE: When suggesting recipes (any time you provide a recipe with ingredients/steps), wrap EACH recipe in :::RECIPE::: and :::END::: markers with a JSON object containing: title, ingredients (newline-separated list), steps (numbered newline-separated list), cuisine, cookTime, servings.
Example:
:::RECIPE:::
{"title":"Dal Tadka","ingredients":"1 cup red lentils\\n2 tomatoes, chopped\\n1 tsp cumin seeds\\n1 tsp turmeric","steps":"1. Wash and boil lentils until soft\\n2. Heat oil, add cumin seeds\\n3. Add tomatoes, cook until soft\\n4. Combine with lentils and simmer","cuisine":"Bangladeshi","cookTime":"30 min","servings":4}
:::END:::
Always use this format so the app can offer a one-tap save button. You can include normal text before/after recipe blocks.`}function g0(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<li>$1</li>").replace(/^[-•]\s+(.+)$/gm,"<li>$1</li>").replace(/\n/g,"<br>")}async function Op(){const n=f("chi"),e=n.value.trim();if(!e)return;n.value="",Mp(n),p.chat.push({role:"user",content:e}),Zo("user",e);const t=f("csb");t&&(t.disabled=!0);const s="thinking-"+Date.now(),i=f("chmsgs");i.innerHTML+=`<div class="cb asst thinking" id="${s}">Thinking…</div>`,i.scrollTop=i.scrollHeight;try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:800,system:m0(),messages:p.chat.map(d=>({role:d.role,content:d.content}))})})).json(),c=o.content&&o.content[0]&&o.content[0].text||"Sorry, I couldn't process that.",u=f(s);u&&u.remove(),p.chat.push({role:"assistant",content:c}),Zo("assistant",c)}catch{const o=f(s);o&&o.remove(),Zo("assistant","Sorry, I couldn't reach Claude. Check your connection and try again.")}t&&(t.disabled=!1)}function y0(n){const e=[];return{cleanText:n.replace(/:::RECIPE:::\s*([\s\S]*?)\s*:::END:::/g,(s,i)=>{try{const r=JSON.parse(i.trim());r.title&&e.push(r)}catch{}return""}).trim(),recipes:e}}function v0(n){const e=JSON.stringify(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;"),t=(n.ingredients||"").split(`
`).slice(0,3).join(", ");return`<div style="background:var(--card);border:1.5px solid var(--ac);border-radius:14px;padding:16px;margin:10px 0">
    <div style="font-family:'Fraunces',serif;font-size:1.1rem;font-weight:300;color:var(--ac);margin-bottom:6px">${(n.title||"").replace(/</g,"&lt;")}</div>
    ${n.cuisine?`<div style="font-size:.72rem;color:var(--mt);margin-bottom:6px">${n.cuisine}${n.cookTime?" · "+n.cookTime:""}${n.servings?" · "+n.servings+" servings":""}</div>`:""}
    ${t?`<div style="font-size:.8rem;color:var(--tx2);line-height:1.5;margin-bottom:10px">${t.replace(/</g,"&lt;")}…</div>`:""}
    <button class="btn bp bsm" onclick="importChatRecipe(this)" data-recipe="${e}">📖 Add to My Recipes</button>
  </div>`}async function _0(n){try{const e=JSON.parse(n.dataset.recipe),t="rec-"+Date.now(),s=[e.ingredients||"",e.steps?`

Steps:
`+e.steps:""].join("").trim();await Jt({id:t,name:e.title||"Untitled Recipe",rating:0,favorited:!1,notes:"",description:s,source:"Claude Chat",sourceUrl:null,tags:[],cuisine:e.cuisine||"",cookTime:e.cookTime||"",servings:e.servings||"",cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:!1}),n.textContent="✓ Saved!",n.disabled=!0,n.style.background="var(--gn)",P("Recipe saved! 📖")}catch{P("Couldn't save recipe")}}function Zo(n,e){const t=f("chmsgs");if(t){if(n==="assistant"){const{cleanText:s,recipes:i}=y0(e);if(s){const r=document.createElement("div");r.className="cb asst",r.innerHTML=g0(s),t.appendChild(r)}i.forEach(r=>{const o=document.createElement("div");o.style.maxWidth="88%",o.style.alignSelf="flex-start",o.innerHTML=v0(r),t.appendChild(o)})}else{const s=document.createElement("div");s.className="cb user",s.innerHTML=e,t.appendChild(s)}t.scrollTop=t.scrollHeight}}function w0(n){const e=f("chi");e&&(e.value=n.textContent),Op()}function b0(){p.chat=[];const n=f("chmsgs");n&&(n.innerHTML=`<div class="cb asst">Hey! 👋 I'm your kitchen assistant — I can help with recipes, meal planning, grocery tips, and cooking questions. What's on your mind?</div>`)}function Mp(n){n.style.height="auto",n.style.height=Math.min(n.scrollHeight,120)+"px"}let ai=!1,lr=!1,ur=null;function Bc(){if(ai)return;const n=f("scanner-video");if(!n)return;const e=f("scan-status");e&&(e.textContent="Starting camera…",e.style.display="block"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{T0(n,e)})})}function T0(n,e){Quagga.init({inputStream:{name:"Live",type:"LiveStream",target:n,constraints:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}},locator:{patchSize:"medium",halfSample:!0},decoder:{readers:["ean_reader","ean_8_reader","upc_reader","upc_e_reader","code_128_reader","code_39_reader"]},locate:!0,frequency:10},function(t){if(t){console.error("Scanner init error:",t);const s=f("scerr");s&&(s.textContent="⚠️ Could not access camera. Try entering the barcode manually.",s.style.display="block"),e&&(e.style.display="none");return}E0(n),Quagga.start(),ai=!0,e&&(e.textContent="Scanning…"),setTimeout(()=>I0(n),2e3)}),Quagga.onDetected(Vp)}function E0(n){n.querySelectorAll("video").forEach(e=>{e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,e.play().catch(()=>{})})}async function I0(n){if(!ai)return;const e=n.querySelector("video");if(!(!e||e.videoWidth>0)){console.warn("Camera feed appears black — retrying with manual getUserMedia");try{const t=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}});ur=t,e.srcObject&&e.srcObject.getTracks().forEach(s=>s.stop()),e.srcObject=t,e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,await e.play()}catch(t){console.error("Manual camera retry failed:",t)}}}function jc(){if(ai){try{Quagga.stop()}catch{}Quagga.offDetected(Vp),ur&&(ur.getTracks().forEach(n=>n.stop()),ur=null),ai=!1,lr=!1}}async function Vp(n){var i,r;if(lr)return;const e=n&&n.codeResult&&n.codeResult.code;if(!e)return;const t=((r=(i=n.codeResult.decodedCodes)==null?void 0:i.filter(o=>o.error!==void 0))==null?void 0:r.map(o=>o.error))||[];if(!((t.length?t.reduce((o,c)=>o+c,0)/t.length:1)>.25)){lr=!0,S0(),jc(),f("scanbody").style.display="none",f("scspin").style.display="block",f("scst").textContent="Found "+e+" — looking up…";try{const o=await $p(e);p.cp=o,f("aqty").value=1,f("aexp").value="",Hc("fridge",f("rl-fridge")),Up(o)}catch{const o=f("scerr");o.textContent="⚠️ Lookup failed. Check your connection or enter the barcode manually.",o.style.display="block"}f("scanbody").style.display="block",f("scspin").style.display="none",lr=!1}}function S0(){const n=f("scan-success");n&&(n.style.display="flex",n.style.animation="none",n.offsetHeight,n.style.animation="",setTimeout(()=>{n.style.display="none"},500))}function A0(){xe("result"),kt("scan"),f("scerr").style.display="none",Bc()}function k0(){p.scanDestList=!0,kt("scan");const n=f("scanovttl");n&&(n.textContent="Scan → Shopping List");const e=f("scan-dest-hint");e&&(e.textContent="Running low? Scan to add to your shopping list."),f("scerr").style.display="none",Bc()}function C0(){p.scanDestList=!1,kt("scan");const n=f("scanovttl");n&&(n.textContent="Scan Barcode");const e=f("scan-dest-hint");e&&(e.textContent="Scan a barcode to add to your pantry or shopping list."),f("scerr").style.display="none",Bc()}function R0(){const n=f("scanNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=f("scanNoteInp");t&&t.focus()}}function P0(){if(!p.cp)return;const n=p.cp.notFound?"Barcode "+p.cp.barcode:p.cp.name,e=f("scanNoteInp"),t=e?e.value.trim():"",s=parseInt(f("aqty").value)||1,i={id:Date.now().toString(),name:n,qty:s,checked:!1,src:"scan"};p.cp.brand&&(i.brand=p.cp.brand),p.cp.image&&(i.image=p.cp.image),t&&(i.note=t),Se(i),P("Added to list: "+n),xe("result"),xe("scan"),p.scanDestList=!1,e&&(e.value="");const r=f("scanNoteWrap");r&&(r.style.display="none"),window.showScreen("shopping")}function x0(){const n=f("mentry");n.style.display=n.style.display==="none"?"block":"none"}async function L0(){const n=f("meinp").value.trim();if(!n)return;jc(),f("scanbody").style.display="none",f("scspin").style.display="block",f("scst").textContent="Looking up…";const e=await $p(n);p.cp=e,f("aqty").value=1,f("aexp").value="",Hc("fridge",f("rl-fridge")),f("meinp").value="",Up(e),f("scanbody").style.display="block",f("scspin").style.display="none"}async function $p(n){try{const e=await fetch("/api/barcode?code="+encodeURIComponent(n));if(e.ok){const t=await e.json();if(t.found&&t.product)return{...t.product,notFound:!1}}}catch{}return{barcode:n,name:"",brand:"",quantity:"",category:"General",image:null,source:null,description:"",notFound:!0}}function D0(n,e){switch(n){case"Open Food Facts":return`https://world.openfoodfacts.org/product/${e}`;case"Open Beauty Facts":return`https://world.openbeautyfacts.org/product/${e}`;case"Open Pet Food Facts":return`https://world.openpetfoodfacts.org/product/${e}`;case"UPC Item DB":return`https://www.upcitemdb.com/upc/${e}`;case"Edamam":return"https://www.edamam.com/food-database/en/";default:return"#"}}function Up(n){var i;xe("scan"),f("resttl").textContent=n.notFound?"Not Found":"Product Found ✓",f("aunit").value=n.quantity||"unit";let e="";if(n.notFound)e=`<div class="nfb">⚠️ Barcode <code>${n.barcode}</code> not found in any database. Enter name:<input class="fi" id="mnm" placeholder="Product name (required)" oninput="valAdd()" style="margin-top:10px"/></div>`;else{const r=n.image?`<img src="${n.image}" class="pimg" onerror="this.style.display='none'"/>`:'<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">🛒</div>',o=n.description?`<div class="pdsc">${n.description}</div>`:"",c=n.source?`<a href="${D0(n.source,n.barcode)}" target="_blank" rel="noopener" class="srcb" style="text-decoration:none">${n.source} ↗</a>`:"";e=`<div class="pcard"><div class="phdr">${r}<div style="flex:1"><div class="pnm">${n.name}</div>${n.brand?`<div class="pbr">${n.brand}</div>`:""}<div class="pbc">${n.barcode}</div><span class="bdg">${n.category}</span>${c}</div></div>${o}</div>`}f("resbody").innerHTML=e;const t=(i=f("ov-result"))==null?void 0:i.querySelector(".ovbody");if(t){const r=t.querySelector(".frow"),o=t.querySelectorAll(".frow")[1],c=t.querySelectorAll(".qrow")[1];r&&(r.style.display=p.scanDestList?"none":""),o&&(o.style.display=p.scanDestList?"none":""),c&&(c.style.display=p.scanDestList?"none":"")}const s=f("scan-dest-btns");s&&(p.scanDestList?s.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2;background:var(--gn);border-color:var(--gn)" id="addbtn" onclick="addScannedToList()">🛒 Add to Shopping List</button>
      </div>`:s.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2" id="addbtn" onclick="addToInv()">📦 Add to Pantry</button>
      </div>
      <button class="btn bs bf" style="margin-top:8px;border-color:var(--gn);color:var(--gn)" onclick="addScannedToList()">🛒 Add to Shopping List instead</button>`),n.notFound&&setTimeout(()=>{const r=f("addbtn");r&&(r.disabled=!0)},0),kt("result")}function Hc(n,e){p.selR=n,document.querySelectorAll("#ov-result .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function N0(){const n=f("mnm");f("addbtn").disabled=!(n&&n.value.trim())}async function O0(){if(!p.cp)return;const n=f("mnm"),e=p.cp.notFound?n&&n.value.trim()||"":p.cp.name;if(!e)return;const t=f("aunit").value.trim()||"unit",s=Math.max(1,parseInt(f("aqty").value)||1),i=f("aexp").value||null,r="item-"+p.cp.barcode.replace(/\W/g,"-"),o=p.inv.find(c=>c.id===r);await De({id:r,barcode:p.cp.barcode,name:e,brand:p.cp.brand||"",unit:t,qty:o?o.qty+s:s,location:p.selR,category:p.cp.category||"General",image:p.cp.image||null,source:p.cp.source||null,expiry:i,addedAt:o?o.addedAt:new Date().toLocaleDateString()}),P(o?`+${s} added to ${e}`:`${e} added!`),p.cp=null,xe("result")}function M0(n){const e=f("aqty");e.value=Math.max(1,(parseInt(e.value)||1)+n)}let yt=null,Dh=0,Nh=0,ye=null,Ji=null,ei=0,Os=!1;const Oh=80,V0=.1,ea=.7,Mh=8,Va="cubic-bezier(0.25, 1.5, 0.5, 1)",Pn="cubic-bezier(0.4, 0, 0.2, 1)";function $0(){document.addEventListener("touchstart",n=>{const e=n.target.closest(".swipe-inner");if(!e)return;const t=e.closest(".swipe-wrap");t&&(p.selectMode||(ye&&ye!==t&&(hr(ye),ye=null),yt=e,Dh=n.touches[0].clientX,Nh=n.touches[0].clientY,Ji=null,Os=!1,ei=t.offsetWidth,e.classList.add("swiping")))},{passive:!0}),document.addEventListener("touchmove",n=>{if(!yt)return;const e=n.touches[0].clientX,t=n.touches[0].clientY,s=e-Dh,i=t-Nh;if(!Ji){if(Math.abs(s)<Mh&&Math.abs(i)<Mh)return;Ji=Math.abs(s)>Math.abs(i)?"horizontal":"vertical"}if(Ji==="vertical"){yt.classList.remove("swiping"),yt=null;return}n.preventDefault();const r=s>=0?0:s;yt.style.transform=`translateX(${r}px)`;const o=yt.closest(".swipe-wrap"),c=o==null?void 0:o.querySelector(".swipe-del");if(c&&r<0){const d=Math.min(100,Math.abs(r)/Oh*100);c.style.clipPath=`inset(0 0 0 ${100-d}%)`}const u=Math.abs(r)/ei;u>=ea&&!Os?(Os=!0,navigator.vibrate&&navigator.vibrate(10),o==null||o.classList.add("swipe-threshold")):u<ea&&Os&&(Os=!1,o==null||o.classList.remove("swipe-threshold"))},{passive:!1}),document.addEventListener("touchend",()=>{if(!yt)return;const n=yt,e=n.closest(".swipe-wrap");n.classList.remove("swiping");const t=parseFloat(n.style.transform.replace("translateX(",""))||0,s=Math.abs(t)/ei;if(s>=ea)U0(e,n);else if(s>=V0){n.style.transition=`transform 0.4s ${Va}`,n.style.transform=`translateX(-${Oh}px)`;const i=e==null?void 0:e.querySelector(".swipe-del");i&&(i.style.transition=`clip-path 0.3s ${Pn}`,i.style.clipPath="inset(0 0 0 0%)"),e==null||e.classList.add("open"),e==null||e.classList.add("swipe-threshold"),ye&&ye!==e&&hr(ye),ye=e,setTimeout(()=>{n.style.transition=""},400)}else{n.style.transition=`transform 0.35s ${Va}`,n.style.transform="translateX(0)";const i=e==null?void 0:e.querySelector(".swipe-del");i&&(i.style.transition=`clip-path 0.3s ${Pn}`,i.style.clipPath="inset(0 0 0 100%)"),e==null||e.classList.remove("open","swipe-threshold"),ye===e&&(ye=null),setTimeout(()=>{n.style.transition="",i&&(i.style.transition="")},350)}yt=null}),document.addEventListener("click",n=>{document.querySelectorAll(".sh-note-edit.open").forEach(e=>{if(e.contains(n.target))return;const t=e.closest(".swipe-inner"),s=t==null?void 0:t.querySelector(".sh-note-btn");if(s&&s.contains(n.target))return;const i=e.querySelector("textarea");i&&i.blur(),e.classList.remove("open")}),document.querySelectorAll(".sh-qty-edit.open").forEach(e=>{if(e.contains(n.target))return;const t=e.closest(".swipe-inner"),s=t==null?void 0:t.querySelector(".sh-qty");if(s&&s.contains(n.target))return;const i=e.querySelector("input");i&&i.blur(),e.classList.remove("open")})},!0),document.addEventListener("touchstart",n=>{if(!ye||n.target.closest(".swipe-del"))return;const e=n.target.closest(".swipe-inner");e&&e.closest(".swipe-wrap")===ye||(hr(ye),ye=null)},{passive:!0})}function hr(n){const e=n==null?void 0:n.querySelector(".swipe-inner"),t=n==null?void 0:n.querySelector(".swipe-del");e&&(e.style.transition=`transform 0.35s ${Va}`,e.style.transform="translateX(0)",setTimeout(()=>{e.style.transition=""},350)),t&&(t.style.transition=`clip-path 0.3s ${Pn}`,t.style.clipPath="inset(0 0 0 100%)",setTimeout(()=>{t.style.transition=""},300)),n==null||n.classList.remove("open","swipe-threshold")}async function U0(n,e){const t=n==null?void 0:n.dataset.id,s=n==null?void 0:n.dataset.list;if(!t||!s)return;e.style.transition=`transform 0.3s ${Pn}`,e.style.transform=`translateX(-${ei+100}px)`;const i=n==null?void 0:n.querySelector(".swipe-del");i&&(i.style.transition=`transform 0.3s ${Pn}`,i.style.transform=`translateX(-${ei+100}px)`),await new Promise(r=>setTimeout(r,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",ye===n&&(ye=null),await new Promise(r=>setTimeout(r,250)),s==="shop"?await mi(t):(await jr(t),P("Item removed"))}async function F0(n,e){const t=f("sw-"+n);if(!t)return;const s=t.querySelector(".swipe-inner"),i=t.offsetWidth;s&&(s.style.transition=`transform 0.3s ${Pn}`,s.style.transform=`translateX(-${i+100}px)`);const r=t.querySelector(".swipe-del");r&&(r.style.transition=`transform 0.3s ${Pn}`,r.style.transform=`translateX(-${i+100}px)`),await new Promise(o=>setTimeout(o,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",ye===t&&(ye=null),await new Promise(o=>setTimeout(o,250)),e==="shop"?await mi(n):(await jr(n),P("Item removed"))}function B0(n,e){const t=f("sw-"+n);if(t){const s=t.querySelector(".swipe-inner");if((parseFloat(((s==null?void 0:s.style.transform)||"").replace("translateX(",""))||0)<-10){hr(t),ye=null;return}}if(p.selectMode){p.selectedIds.has(n)?(p.selectedIds.delete(n),t==null||t.classList.remove("selected")):(p.selectedIds.add(n),t==null||t.classList.add("selected")),ro();return}e==="shop"?window.openItemDetail(n):window.openAdj(n)}function j0(){if(p.selectMode==="shop"){ss();return}p.selectMode&&ss(),p.selectMode="shop",p.selectedIds.clear(),document.querySelectorAll("#shlist .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=f("sh-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),ro()}function H0(){if(p.selectMode==="inv"){ss();return}p.selectMode&&ss(),p.selectMode="inv",p.selectedIds.clear(),document.querySelectorAll("#ibody .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=f("inv-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),ro()}function ss(){p.selectMode=null,p.selectedIds.clear(),document.querySelectorAll(".swipe-wrap.selecting").forEach(t=>t.classList.remove("selecting","selected"));const n=f("sh-selbtn");n&&(n.classList.remove("active"),n.textContent="Select");const e=f("inv-selbtn");e&&(e.classList.remove("active"),e.textContent="Select"),ro()}async function q0(){if(!p.selectedIds.size)return;const n=[...p.selectedIds],e=p.selectMode;ss(),e==="shop"?await Promise.all(n.map(t=>mi(t))):await Promise.all(n.map(t=>jr(t))),P(`Removed ${n.length} item${n.length!==1?"s":""} 🗑`)}function ro(){const n=f("multi-bar");if(!n)return;const e=p.selectedIds.size,t=f("multi-count");t&&(t.textContent=e),p.selectMode?n.classList.add("visible"):n.classList.remove("visible")}const z0=["Chicken","Beef","Fish","Vegetarian","Vegan","Quick","Kids","Healthy","Batch Cook","Date Night"];function Fp(n){return"chip-"+n.split(" ").join("-")}function Bp(){const n=f("recChips");n&&(n.innerHTML=z0.map(e=>`<button onclick="toggleChip('${e}')" id="${Fp(e)}" style="padding:5px 10px;border-radius:20px;border:1px solid var(--bd);background:var(--s2);color:var(--tx2);font-size:.78rem;cursor:pointer;transition:all .15s">${e}</button>`).join(""))}function W0(n){const e=f(Fp(n));window._activeChips.has(n)?(window._activeChips.delete(n),e&&(e.style.background="var(--s2)",e.style.color="var(--tx2)",e.style.borderColor="var(--bd)")):(window._activeChips.add(n),e&&(e.style.background="var(--ac)",e.style.color="#000",e.style.borderColor="var(--ac)")),jp()}function jp(){const n=f("recPicker"),e=f("recFilter")?f("recFilter").value.trim().toLowerCase():"",t=[...window._activeChips].map(r=>r.toLowerCase()),i=[...p.recs].sort((r,o)=>(o.cookCount||0)-(r.cookCount||0)).filter(r=>{const o=(r.name+" "+(r.description||"")+" "+(r.tags||[]).join(" ")).toLowerCase(),c=e?e.split(/\s+/).every(d=>o.includes(d)):!0,u=t.every(d=>o.includes(d));return c&&u});n.innerHTML='<option value="">— pick a saved recipe —</option>'+i.map(r=>`<option value="${r.id}">${r.name}</option>`).join(""),window._pickedRec=null,f("mealMinp").value=""}function G0(n,e){p.md=n,f("mealMttl").textContent="Meal for "+e,f("mealMinp").value=p.mp[n]||"",window._pickedRec=null,window._activeChips=new Set;const t=f("recFilter");t&&(t.value=""),Bp();const s=f("recPicker");if(p.recs&&p.recs.length){const i=[...p.recs].sort((c,u)=>(u.cookCount||0)-(c.cookCount||0));s.innerHTML='<option value="">— pick a saved recipe —</option>'+i.map(c=>`<option value="${c.id}">${c.name}</option>`).join("");const r=p.mp[n]||"",o=i.find(c=>c.name===r);s.value=o?o.id:"",f("recPickerWrap").style.display="block"}else f("recPickerWrap").style.display="none";f("mealM").classList.add("active"),setTimeout(()=>f("mealMinp").focus(),100)}function K0(n){if(!n){window._pickedRec=null,f("mealMinp").value="";return}const e=p.recs.find(t=>t.id===n);e&&(window._pickedRec=e,f("mealMinp").value=e.name)}function qc(){f("mealM").classList.remove("active")}async function Q0(){const n=f("mealMinp").value.trim();if(await An(p.md,n||null),window._pickedRec&&window._pickedRec.description){const e=window._pickedRec.description,t=p.inv.map(o=>o.name.toLowerCase()),s=p.shop.map(o=>o.name.toLowerCase()),i=e.split(/[\n,]/).map(o=>o.replace(/^[\d\/\s]*(cup|tbsp|tsp|oz|lb|g|kg|ml|l|clove|slice|piece|bunch|head|can|package|pkg)s?\.?\s*/gi,"").replace(/^[\d]+\s*/,"").trim()).filter(o=>o.length>1&&o.length<60);let r=0;for(const o of i){if(/\b(add|mix|heat|cook|bake|stir|boil|fry|slice|chop|dice|combine|place|pour|season|serve|preheat|bring|remove|let|set|transfer)\b/i.test(o))continue;const c=o.replace(/^[-•*]\s*/,"").trim();if(!c||c.length<2)continue;const u=c.toLowerCase();t.some(d=>d.includes(u)||u.includes(d))||s.some(d=>d===u)||(await Se({id:Date.now().toString()+Math.random().toString(36).slice(2),name:c,qty:1,checked:!1,src:"recipe"}),r++)}r>0&&P(`Added ${r} ingredient${r!==1?"s":""} to shopping list 🛒`)}window._pickedRec=null,qc(),Dn(),bi(),ds()}async function J0(){await An(p.md,null),qc(),Dn(),bi(),ds()}function Y0(n){const e=p.mp[n];e&&(p.cn=e,p.nr=0,f("cookedNm").textContent=e,f("cnotes").value="",Ws("cstars",0),f("cookedM").classList.add("active"))}async function X0(){await Gd(p.cn,Ft()),await An(Ft(),null),f("cookedM").classList.remove("active"),Dn(),ds(),P("Meal logged!")}async function Z0(){var s;const n=f("cnotes").value.trim(),e=(s=f("tog-leftover"))==null?void 0:s.classList.contains("on");await Gd(p.cn,Ft());const t=p.recs.find(i=>i.name.toLowerCase()===p.cn.toLowerCase());t?await Jt({...t,cookCount:(t.cookCount||0)+1,lastCooked:Ft()}):await Jt({id:"rec-"+Date.now(),name:p.cn,rating:p.nr,favorited:!1,notes:n,description:"",source:"Meal Plan",tags:[],cookCount:1,savedAt:new Date().toLocaleDateString(),lastCooked:Ft()}),e&&await An(Y_(),p.cn+" (leftovers)"),await An(Ft(),null),f("cookedM").classList.remove("active"),Dn(),ds(),P(e?"Saved! Leftovers planned for tomorrow 🥡":"Saved to recipes! ⭐")}function eA(n){f("schedNm").textContent=n;const e=["S","M","T","W","T","F","S"],t=new Date;t.setHours(0,0,0,0),f("schedWk").innerHTML=cs().map((s,i)=>{const r=s.toISOString().split("T")[0],o=s.getTime()===t.getTime(),c=p.mp[r];return`<div class="wd${o?" today":""}${c?" hm":""}" onclick="schedSet('${r}','${n}')"><div class="wdn">${e[i]}</div><div class="wdd">${s.getDate()}</div>${c?`<div class="wdm">${c.substring(0,8)}…</div>`:""}</div>`}).join(""),f("schedM").classList.add("active")}async function tA(n,e){await An(n,e),f("schedM").classList.remove("active"),Dn(),ds(),P("Scheduled! 📅")}function nA(){const n=i=>f(i),e=(i,r)=>{const o=n(i);o&&(o.value=r||"")};e("setName",p.cfg.name),e("setAdults",p.cfg.adults),e("setKids",p.cfg.kids),e("setOther",p.cfg.other),e("setCuisines",p.cfg.cuisines),e("setCookTime",p.cfg.cookTime),e("setZipcode",p.cfg.zipcode);const t=(i,r)=>{const o=n(i);o&&o.classList.toggle("on",!!r)};t("tg-nopork",p.cfg.nopork),t("tg-noshellfish",p.cfg.noshellfish),t("tg-vegetarian",p.cfg.vegetarian),t("tg-glutenfree",p.cfg.glutenfree),t("tg-notif",p.cfg.notif);const s=f("notifTimeRow");s&&(s.style.display=p.cfg.notif?"block":"none"),e("setNotifTime",p.cfg.notifTime||"8"),e("setNotifDays",String(p.cfg.notifDays||3)),Wc(),qp()}async function sA(){p.cfg={...p.cfg,name:f("setName").value.trim(),adults:f("setAdults").value.trim(),kids:f("setKids").value.trim(),nopork:f("tg-nopork").classList.contains("on"),noshellfish:f("tg-noshellfish").classList.contains("on"),vegetarian:f("tg-vegetarian").classList.contains("on"),glutenfree:f("tg-glutenfree").classList.contains("on"),other:f("setOther").value.trim(),cuisines:f("setCuisines").value.trim(),cookTime:f("setCookTime").value,zipcode:f("setZipcode")?f("setZipcode").value.trim():"",notif:f("tg-notif").classList.contains("on"),notifTime:f("setNotifTime")?f("setNotifTime").value:"8",notifDays:parseInt(f("setNotifDays")?f("setNotifDays").value:"3")},await Br(),p.cfg.notif&&Hp(),P("Settings saved!"),xe("settings"),kc()}async function iA(){var e,t;const n=((t=(e=f("setZipcode"))==null?void 0:e.value)==null?void 0:t.trim())||"";p.cfg={...p.cfg,zipcode:n},await Br(),P("Saved!")}async function rA(n){if(!n.classList.contains("on")){if(!("Notification"in window)){P("Notifications not supported on this browser");return}if(Notification.permission==="denied"){P("Notifications blocked — enable in browser settings");return}if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){P("Notifications permission denied");return}}n.classList.toggle("on");const t=f("notifTimeRow");t&&(t.style.display=n.classList.contains("on")?"block":"none")}function oA(){if(Notification.permission!=="granted"){P("Enable notifications first");return}const n=p.inv.filter(t=>{const s=dt(t.expiry);return s&&(s.c==="expiring"||s.c==="expired")});if(!n.length){new Notification("Kitchen 🧺",{body:"No items expiring soon — you're all good!"});return}const e=n.slice(0,3).map(t=>t.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${e}${n.length>3?" + "+(n.length-3)+" more":""} need attention`})}function Hp(){if(!p.cfg.notif||Notification.permission!=="granted")return;const n=parseInt(localStorage.getItem("ks-lastnotif")||"0"),e=Date.now();if(e-n<864e5)return;localStorage.setItem("ks-lastnotif",e.toString());const t=p.cfg.notifDays||3,s=p.inv.filter(r=>{if(!dt(r.expiry))return!1;const c=new Date(r.expiry+"T00:00:00"),u=new Date;return u.setHours(0,0,0,0),Math.round((c-u)/864e5)<=t});if(!s.length)return;const i=s.slice(0,3).map(r=>r.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${i}${s.length>3?" + "+(s.length-3)+" more":""} expiring in ${t} days or less`})}function zc(){return Ue("ks-hhs")||[p.hid]}async function qp(){const n=Le();if(n)try{const e=await me(`households/${p.hid}`);if(!e)return;const t=e.ownerUid===n.uid,s=f("hhInviteCode");if(s&&(s.textContent=e.inviteCode||"—"),e.inviteCode&&t)try{await ee(`household_codes/${e.inviteCode}`,{householdId:p.hid})}catch{}const i=f("regenCodeBtn");i&&(i.style.display=t?"":"none");const r=f("hhMembers");r&&e.members&&(r.innerHTML=e.members.map(o=>{const c=o.uid===n.uid,u=o.role==="owner"?"Owner":"Member",d=t&&!c?`<button onclick="event.stopPropagation();removeMemberFromHH('${o.uid}')" style="background:none;border:none;color:var(--rd);cursor:pointer;font-size:.78rem;padding:4px 8px">Remove</button>`:"";return`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px">
          <div>
            <div style="font-size:.86rem;font-weight:500;color:var(--tx)">${o.name}${c?" (you)":""}</div>
            <div style="font-size:.7rem;color:var(--mt);margin-top:2px">${u}</div>
          </div>
          ${d}
        </div>`}).join(""))}catch(e){console.error("renderHouseholdInfo error:",e)}}async function aA(){var e;const n=(e=f("hhInviteCode"))==null?void 0:e.textContent;if(!(!n||n==="—"))try{await navigator.clipboard.writeText(n),P("Invite code copied!")}catch{P("Couldn't copy — try manually")}}async function cA(){var t;const n=(t=f("hhInviteCode"))==null?void 0:t.textContent;if(!n||n==="—")return;const e=`Join my kitchen on Kitchen app! Use invite code: ${n} at https://pantry-app-zeta-six.vercel.app`;if(navigator.share)try{await navigator.share({text:e})}catch{}else try{await navigator.clipboard.writeText(e),P("Share text copied to clipboard!")}catch{P("Couldn't share — try manually")}}async function lA(){if(confirm("Regenerate invite code? The old code will stop working."))try{const n=await O_(p.hid);if(n){const e=f("hhInviteCode");e&&(e.textContent=n),P("New invite code generated!")}}catch(n){console.error("regenInviteCode error:",n),P("Failed to regenerate code")}}async function uA(n){if(confirm("Remove this member from the household?"))try{await M_(p.hid,n),P("Member removed"),qp()}catch(e){console.error("removeMemberFromHH error:",e),P("Failed to remove member")}}async function hA(){var s,i,r;const n=(r=(i=(s=f("newHHCode"))==null?void 0:s.value)==null?void 0:i.trim())==null?void 0:r.toUpperCase();if(!n)return;const e=Le();if(!e){P("Sign in first");return}const t=f("newHHCode");t.disabled=!0;try{const o=await Wd(n,e);if(!o){P("Invalid invite code. Check and try again."),t.disabled=!1;return}const c=zc();c.includes(o)||c.push(o),rt("ks-hhs",c),f("newHHCode").value="",Wc(),P("Household joined!")}catch(o){console.error("addHousehold error:",o),P("Failed to join household")}t.disabled=!1}function dA(n){n!==p.hid&&(localStorage.setItem("ks-h",n),location.reload())}async function fA(n){if(n===p.hid){P("Can't remove active household");return}const e=Le();if(e)try{const s=await me(`users/${e.uid}`);if(s){const r=(s.householdIds||[]).filter(o=>o!==n);await ee(`users/${e.uid}`,{...s,householdIds:r,id:void 0})}const i=await me(`households/${n}`);if(i){const r=(i.members||[]).filter(c=>c.uid!==e.uid),o=(i.memberUids||[]).filter(c=>c!==e.uid);await ee(`households/${n}`,{...i,members:r,memberUids:o,id:void 0})}}catch(s){console.error("removeHousehold error:",s)}const t=zc().filter(s=>s!==n);rt("ks-hhs",t),Wc()}async function Wc(){const n=zc().filter(s=>s!==p.hid),e=f("hhList");if(!e)return;if(!n.length){e.innerHTML='<div style="font-size:.82rem;color:var(--mt);padding:10px 0">No other households yet.</div>';return}const t=[];for(const s of n){let i=s;try{const r=await me(`households/${s}`);r!=null&&r.name&&(i=r.name)}catch{}t.push({id:s,name:i})}e.innerHTML=t.map(({id:s,name:i})=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px;cursor:pointer" onclick="switchHousehold('${s}')">
      <div>
        <div style="font-size:.88rem;font-weight:500;color:var(--tx)">${i}</div>
        <div style="font-size:.7rem;color:var(--mt);margin-top:2px">Tap to switch</div>
      </div>
      <button onclick="event.stopPropagation();removeHousehold('${s}')" style="background:none;border:none;color:var(--mt);cursor:pointer;font-size:.82rem;padding:4px 8px">✕</button>
    </div>`).join("")}const xr={gold:{name:"Gold",swatch:"#d4a853",dark:{bg:"#0f0f0d",sf:"#1a1a17",card:"#222220",card2:"#2a2a27",b1:"#333330",b2:"#3d3d39",ac:"#d4a853",ac2:"#e8c27a",acr:"212,168,83",tx:"#ede8d8",tx2:"#b8b09a",mt:"#7a7468"},light:{bg:"#faf8f2",sf:"#ffffff",card:"#f3ede0",card2:"#efe8d8",b1:"#ddd5c0",b2:"#cec4ac",ac:"#a8732a",ac2:"#c48f3e",acr:"168,115,42",tx:"#2a2418",tx2:"#5c5040",mt:"#9a8870"}},forest:{name:"Forest",swatch:"#4a9e5c",dark:{bg:"#0a1410",sf:"#111f17",card:"#182a1e",card2:"#1e3326",b1:"#2a4032",b2:"#355040",ac:"#6db56d",ac2:"#8fd08f",acr:"109,181,109",tx:"#e4f0e4",tx2:"#9dbf9d",mt:"#5a7a5a"},light:{bg:"#f2f9f2",sf:"#ffffff",card:"#e8f5e8",card2:"#dff0df",b1:"#c0ddc0",b2:"#a8cca8",ac:"#2e7d32",ac2:"#43a047",acr:"46,125,50",tx:"#0d2010",tx2:"#2e4f2e",mt:"#5a7a5a"}},ocean:{name:"Ocean",swatch:"#38bdf8",dark:{bg:"#060e1a",sf:"#0d1829",card:"#112035",card2:"#162840",b1:"#1e3554",b2:"#264468",ac:"#38bdf8",ac2:"#7dd3fc",acr:"56,189,248",tx:"#e0f2fe",tx2:"#7ab8d4",mt:"#486880"},light:{bg:"#f0f8ff",sf:"#ffffff",card:"#e0f2fe",card2:"#d4ecf9",b1:"#b0d8f0",b2:"#90c4e4",ac:"#0369a1",ac2:"#0284c7",acr:"3,105,161",tx:"#082040",tx2:"#1e4060",mt:"#4a7090"}},bordeaux:{name:"Bordeaux",swatch:"#e8829a",dark:{bg:"#120810",sf:"#1c0e18",card:"#261420",card2:"#301828",b1:"#4a2238",b2:"#5c2a46",ac:"#e8829a",ac2:"#f4aabb",acr:"232,130,154",tx:"#fce8ee",tx2:"#d4909e",mt:"#8a5060"},light:{bg:"#fff5f7",sf:"#ffffff",card:"#ffe8ed",card2:"#ffd8e0",b1:"#f4b8c4",b2:"#eca0b0",ac:"#be3455",ac2:"#d94070",acr:"190,52,85",tx:"#2a080e",tx2:"#6a2030",mt:"#9a5060"}},sand:{name:"Sand",swatch:"#e07a5f",dark:{bg:"#170e08",sf:"#221508",card:"#2e1c0e",card2:"#382414",b1:"#4a3020",b2:"#5c3c28",ac:"#e07a5f",ac2:"#eca080",acr:"224,122,95",tx:"#fdf0e8",tx2:"#c8a090",mt:"#887060"},light:{bg:"#fdf6ec",sf:"#fffbf5",card:"#f5e8d8",card2:"#eedcc8",b1:"#ddc8ac",b2:"#ccb494",ac:"#c1440e",ac2:"#d4602a",acr:"193,68,14",tx:"#2a1808",tx2:"#5c3820",mt:"#9a7060"}},midnight:{name:"Midnight",swatch:"#818cf8",dark:{bg:"#050814",sf:"#0a0d1f",card:"#0f1228",card2:"#141830",b1:"#1e2448",b2:"#272e58",ac:"#818cf8",ac2:"#a5b0ff",acr:"129,140,248",tx:"#e8eaff",tx2:"#9099cc",mt:"#505880"},light:{bg:"#f0f1ff",sf:"#ffffff",card:"#e4e6ff",card2:"#d8dbff",b1:"#b8bdff",b2:"#a0a6f4",ac:"#4f46e5",ac2:"#6366f1",acr:"79,70,229",tx:"#0a0820",tx2:"#202060",mt:"#5050a0"}},lavender:{name:"Lavender",swatch:"#c084fc",dark:{bg:"#0e0814",sf:"#160e20",card:"#1e1430",card2:"#261a3c",b1:"#382454",b2:"#442c66",ac:"#c084fc",ac2:"#d8a8ff",acr:"192,132,252",tx:"#f5ecff",tx2:"#c0a0e0",mt:"#7a5898"},light:{bg:"#faf5ff",sf:"#ffffff",card:"#f3e8ff",card2:"#ecdcff",b1:"#d8b8f8",b2:"#c8a0f0",ac:"#9333ea",ac2:"#a855f7",acr:"147,51,234",tx:"#1a0830",tx2:"#481080",mt:"#805098"}}};let ci=Ue("ks-theme")||"gold",li=Ue("ks-mode")||"auto";function Lr(n,e){ci=n,li=e,rt("ks-theme",n),rt("ks-mode",e);const t=xr[n]||xr.gold,i=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?t.dark:t.light,r=document.documentElement.style;r.setProperty("--bg",i.bg),r.setProperty("--sf",i.sf),r.setProperty("--card",i.card),r.setProperty("--card2",i.card2),r.setProperty("--b1",i.b1),r.setProperty("--b2",i.b2),r.setProperty("--ac",i.ac),r.setProperty("--ac2",i.ac2),r.setProperty("--acd","rgba("+i.acr+",.12)"),r.setProperty("--tx",i.tx),r.setProperty("--tx2",i.tx2),r.setProperty("--mt",i.mt),r.setProperty("--gn","#6db56d"),r.setProperty("--gnd","rgba(109,181,109,.12)"),r.setProperty("--rd","#d96b6b"),r.setProperty("--rdd","rgba(217,107,107,.12)"),r.setProperty("--am","#c8960a"),r.setProperty("--amd","rgba(200,150,10,.12)"),zp(e),Wp(n)}function pA(n){Lr(ci,n)}function zp(n){["auto","light","dark"].forEach(e=>{const t=f("mode-"+e);t&&(t.style.background=e===n?"var(--ac)":"",t.style.color=e===n?"var(--bg)":"",t.style.borderColor=e===n?"var(--ac)":"")})}function Wp(n){const e=f("themePicker");e&&(e.innerHTML="",Object.keys(xr).forEach(t=>{const s=xr[t],i=t===n,r=document.createElement("div");r.title=s.name,r.style.cssText="width:36px;height:36px;border-radius:50%;background:"+s.swatch+";cursor:pointer;border:3px solid "+(i?"var(--tx)":"transparent")+";box-shadow:"+(i?"0 0 0 2px var(--ac)":"none")+";transition:all .2s;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.85rem",r.textContent=i?"✓":"",r.onclick=()=>Lr(t,li),r.onmouseover=function(){this.style.transform="scale(1.15)"},r.onmouseout=function(){this.style.transform="scale(1)"},e.appendChild(r)}))}function mA(){Lr(ci,li),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{li==="auto"&&Lr(ci,"auto")})}function gA(){Wp(ci),zp(li)}async function yA(){const n=f("enrichBtn"),e=f("enrichProgress"),t=f("enrichStatus"),s=f("enrichBar");n&&(n.disabled=!0),e&&(e.style.display="block");const i=p.shop.filter(d=>Vh(d)),r=p.inv.filter(d=>Vh(d)),o=[...i.map(d=>({item:d,list:"shop"})),...r.map(d=>({item:d,list:"inv"}))];if(!o.length){t&&(t.textContent="All items already enriched!"),s&&(s.style.width="100%"),n&&(n.disabled=!1),P("Nothing to enrich — all items already have data.");return}let c=0,u=0;for(let d=0;d<o.length;d++){const{item:m,list:v}=o[d],T=Math.round((d+1)/o.length*100);t&&(t.textContent=`Processing "${m.name}" (${d+1}/${o.length})…`),s&&(s.style.width=T+"%");try{const M=(await(await fetch(`/api/text-search?q=${encodeURIComponent(m.name)}`)).json()).results||[];if(M.length){const N=M[0],z={...m,image:N.image||m.image||null,brand:N.brand||m.brand||"",category:N.category||m.category||"",source:N.source||m.source||"search"};v==="shop"?await Se(z):await De(z),c++}else u++}catch(C){console.warn(`Enrich failed for "${m.name}":`,C),u++}d<o.length-1&&await vA(300)}t&&(t.textContent=`Done! ${c} enriched, ${u} skipped.`),s&&(s.style.width="100%"),n&&(n.disabled=!1),P(`Enrichment complete: ${c} updated, ${u} unchanged.`)}function Vh(n){return!n.name||n.name.length<2||n.imageDismissed?!1:!n.image&&!n.brand}function vA(n){return new Promise(e=>setTimeout(e,n))}let Ut=0;async function _A(){const n=Le();if(n)try{const e=await me(`users/${n.uid}`);if(e!=null&&e.onboardingDone)return;wA()}catch{}}function wA(){const n=f("ov-onboarding");n&&(Ut=0,n.classList.add("active"),Gp())}function Gp(){const n=f("onboarding-body");if(!n)return;const t=`<div style="display:flex;gap:6px;justify-content:center;margin-bottom:24px">${Array.from({length:4},(s,i)=>`<div style="width:8px;height:8px;border-radius:50%;background:${i===Ut?"var(--ac)":"var(--b2)"};transition:background .2s"></div>`).join("")}</div>`;Ut===0?n.innerHTML=`${t}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:4rem;margin-bottom:16px">🧺</div>
        <div style="font-family:'Fraunces',serif;font-size:2rem;font-weight:300;color:var(--ac);margin-bottom:12px">Welcome to Kitchen!</div>
        <p style="font-size:.92rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 28px">Your smart kitchen assistant that tracks inventory, plans meals, finds deals, and suggests recipes — all powered by AI.</p>
        <button class="btn bp bf" onclick="onboardNext()">Let's get started →</button>
      </div>`:Ut===1?n.innerHTML=`${t}
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;margin-bottom:6px">Set up your kitchen</div>
      <p style="font-size:.82rem;color:var(--mt);margin-bottom:18px;line-height:1.5">These help Claude give you better recipe suggestions.</p>
      <div class="frow"><label class="flbl">Household name</label><input class="fi" id="ob-name" placeholder="e.g. The Smith Family" value="${p.cfg.name||""}"/></div>
      <div class="frow"><label class="flbl">Adults</label><input class="fi" id="ob-adults" placeholder="e.g. Bora, Sarah" value="${p.cfg.adults||""}"/></div>
      <div class="frow"><label class="flbl">Kids</label><input class="fi" id="ob-kids" placeholder="e.g. 1 toddler (age 3)" value="${p.cfg.kids||""}"/></div>
      <div class="frow"><label class="flbl">Favourite cuisines</label><input class="fi" id="ob-cuisines" placeholder="e.g. Italian, Turkish, Mexican" value="${p.cfg.cuisines||""}"/></div>
      <div class="frow"><label class="flbl">Weeknight cook time</label>
        <select class="fsel" id="ob-cooktime">
          <option value="20-30 min"${p.cfg.cookTime==="20-30 min"?" selected":""}>20–30 min</option>
          <option value="30-45 min"${p.cfg.cookTime==="30-45 min"?" selected":""}>30–45 min</option>
          <option value="40-60 min"${p.cfg.cookTime==="40-60 min"?" selected":""}>40–60 min</option>
          <option value="60+ min"${p.cfg.cookTime==="60+ min"?" selected":""}>60+ min</option>
        </select>
      </div>
      <div class="frow"><label class="flbl">Dietary restrictions</label>
        <div style="display:flex;flex-direction:column;gap:10px;margin-top:4px">
          <label style="display:flex;align-items:center;gap:10px;font-size:.88rem;cursor:pointer"><input type="checkbox" id="ob-nopork" ${p.cfg.nopork?"checked":""}/> No pork</label>
          <label style="display:flex;align-items:center;gap:10px;font-size:.88rem;cursor:pointer"><input type="checkbox" id="ob-noshellfish" ${p.cfg.noshellfish?"checked":""}/> No shellfish</label>
          <label style="display:flex;align-items:center;gap:10px;font-size:.88rem;cursor:pointer"><input type="checkbox" id="ob-vegetarian" ${p.cfg.vegetarian?"checked":""}/> Vegetarian</label>
          <label style="display:flex;align-items:center;gap:10px;font-size:.88rem;cursor:pointer"><input type="checkbox" id="ob-glutenfree" ${p.cfg.glutenfree?"checked":""}/> Gluten-free</label>
        </div>
      </div>
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:16px">Continue →</button>`:Ut===2?n.innerHTML=`${t}
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
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:20px">Almost done →</button>`:Ut===3&&(n.innerHTML=`${t}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:3rem;margin-bottom:16px">🎉</div>
        <div style="font-family:'Fraunces',serif;font-size:1.6rem;font-weight:300;color:var(--ac);margin-bottom:12px">You're all set!</div>
        <p style="font-size:.88rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 24px">Start by adding your first item to the pantry, or ask Claude for dinner ideas.</p>
        <div style="display:flex;flex-direction:column;gap:10px">
          <button class="btn bp bf" onclick="finishOnboarding();showOv('scan')">📷 Scan your first item</button>
          <button class="btn bs bf" onclick="finishOnboarding();showScreen('chat')">✨ Ask Claude for ideas</button>
          <button class="btn bs bf" onclick="finishOnboarding()">🏠 Go to Home</button>
        </div>
      </div>`)}async function bA(){var n,e,t,s,i,r,o,c,u,d,m,v,T;if(Ut===1){const C=(e=(n=f("ob-name"))==null?void 0:n.value)==null?void 0:e.trim(),D=(s=(t=f("ob-adults"))==null?void 0:t.value)==null?void 0:s.trim(),M=(r=(i=f("ob-kids"))==null?void 0:i.value)==null?void 0:r.trim(),N=(c=(o=f("ob-cuisines"))==null?void 0:o.value)==null?void 0:c.trim(),z=(u=f("ob-cooktime"))==null?void 0:u.value;C&&(p.cfg.name=C),D&&(p.cfg.adults=D),M&&(p.cfg.kids=M),N&&(p.cfg.cuisines=N),z&&(p.cfg.cookTime=z),p.cfg.nopork=((d=f("ob-nopork"))==null?void 0:d.checked)||!1,p.cfg.noshellfish=((m=f("ob-noshellfish"))==null?void 0:m.checked)||!1,p.cfg.vegetarian=((v=f("ob-vegetarian"))==null?void 0:v.checked)||!1,p.cfg.glutenfree=((T=f("ob-glutenfree"))==null?void 0:T.checked)||!1,await Br()}Ut++,Gp()}async function Kp(){const n=f("ov-onboarding");n&&n.classList.remove("active");const e=Le();if(e)try{const t=await me(`users/${e.uid}`);t&&await ee(`users/${e.uid}`,{...t,onboardingDone:!0,id:void 0})}catch{}}async function TA(){await Kp(),P("You can always adjust settings later ⚙️")}window.getIdToken=Hd;$.renderAll=Cc;$.renderSum=bi;$.renderRecs=io;$.renderShop=fs;uE(no);window.showScreen=function(n){var e,t;document.querySelectorAll(".ov.active").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".ni").forEach(s=>s.classList.remove("active")),(e=f("screen-"+n))==null||e.classList.add("active"),(t=f("nav-"+n))==null||t.classList.add("active"),n==="home"&&ip(),n==="inventory"&&no(),n==="recipes"&&(p.rt==="community"?Uc():io()),n==="shopping"&&fs(),n==="insights"&&p0()};const EA=kt;window.showOv=function(n){EA(n),n==="settings"&&setTimeout(gA,80)};window.hideOv=xe;window.initHome=kc;window.addLowToShop=pE;window.toggleExp=function(){const n=f("exppanel");n.style.display=n.style.display==="none"?"block":"none"};window.openAdj=vS;window.updL=_S;window.adjQ=wS;window.adjQD=bS;window.adjE=TS;window.adjNote=ES;window.setIT=AS;window.addManual=kS;window.valMA=CS;window.chgMQ=RS;window.selML=PS;window.remItem=Vc;window.importDoc=xS;window.adjLowThresh=IS;window.adjLowThreshD=SS;window.openInvAddSheet=NS;window.closeInvAddSheet=Ei;window.invAddScan=OS;window.invAddVoice=MS;window.setInvAddLoc=VS;window.toggleInvAddNote=$S;window.qaddInv=US;window.onInvInput=FS;window.pickInvInlineResult=HS;window.toggleInvVoice=Dp;window.qadd=MI;window.togShop=tS;window.toggleShNote=nS;window.saveShNote=sS;window.openShQty=iS;window.adjShQty=rS;window.saveShQty=Pp;window.togAisle=oS;window.setSHT=aS;window.shareList=cS;window.openAddToKitchen=lS;window.setAtkLoc=uS;window.confirmAddToKitchen=hS;window.buildList=dS;window.toggleVoice=Ep;window.toggleAddNote=VI;window.openShopAddSheet=$I;window.closeShopAddSheet=Ti;window.shopAddScan=UI;window.shopAddVoice=FI;window.closeEnrichSheet=Rr;window.pickEnrichResult=eS;window.onShopInput=HI;window.pickInlineResult=Cp;window.openItemDetail=Pr;window.closeItemDetail=JI;window.deleteItemImage=YI;window.triggerProductPhotoUpload=XI;window.handleProductPhotoSelected=ZI;window.bpTog=fS;window.bpSelAll=pS;window.bpUpdBtn=function(){};window.bpConfirm=mS;window._bpItems=[];window.searchDeals=gS;window.dealsFromList=yS;window.addDealToList=Lp;window.renderDealsZipBanner=xp;window.clrChk=function(){p.shop.filter(n=>n.checked).forEach(n=>{Rp(n.name),mi(n.id)})};window.setRT=KS;window.togFav=QS;window.valR=JS;window.importFromUrl=YS;window.saveRec=XS;window.openER=ZS;window.updR=e0;window.delER=t0;window.scaleRec=n0;window.whatCanIMake=s0;window.addRecIngToShop=i0;window.setStar=r0;window.togTag=WS;window.togglePublic=o0;window.loadCommunity=Uc;window.setComCuisine=a0;window.setComSearch=c0;window.openComRecipe=l0;window.likeComRecipe=u0;window.saveComToKitchen=h0;window.addComComment=d0;window.shareComRecipe=f0;window.sendChat=Op;window.sendPill=w0;window.clrChat=b0;window.ar=Mp;window.importChatRecipe=_0;window.stopLiveScanner=jc;window.resumeScanner=A0;window.openScanForList=k0;window.openScanForInventory=C0;window.addScannedToList=P0;window.toggleScanNote=R0;window.togManual=x0;window.manLookup=L0;window.selRL=Hc;window.valAdd=N0;window.addToInv=O0;window.chgAQ=M0;window.swipeDelItem=F0;window.swipeRowTap=B0;window.togShopSelect=j0;window.togInvSelect=H0;window.cancelSelect=ss;window.deleteSelected=q0;window.openMealM=G0;window.pickRec=K0;window.closeMealM=qc;window.saveMeal=Q0;window.clrMeal=J0;window.openCooked=Y0;window.skipCooked=X0;window.saveCooked=Z0;window.scheduleRecipe=eA;window.schedSet=tA;window.initRecChips=Bp;window.toggleChip=W0;window.filterRecs=jp;window._pickedRec=null;window._activeChips=new Set;window.saveSettings=sA;window.saveZipcode=iA;window.toggleNotif=rA;window.testNotif=oA;window.addHousehold=hA;window.switchHousehold=dA;window.removeHousehold=fA;window.setMode=pA;window.showNotif=P;window.copyInviteCode=aA;window.shareInviteCode=cA;window.regenInviteCode=lA;window.removeMemberFromHH=uA;window.enrichExistingItems=yA;window.manualRefresh=async function(n){const e=event==null?void 0:event.target;e&&(e.classList.add("spinning"),setTimeout(()=>e.classList.remove("spinning"),600)),le("syncing");try{(n==="shop"||n==="both")&&(p.shop=await Fe(`households/${p.hid}/shopping`),fs()),(n==="inv"||n==="both")&&(p.inv=await Fe(`households/${p.hid}/inventory`),no(),Cc()),le("synced"),P("Refreshed ✓")}catch(t){console.error("manualRefresh error:",t),le("error"),P("Refresh failed")}};window.onboardNext=bA;window.finishOnboarding=Kp;window.skipOnboarding=TA;window._appStart=async function(n){var t;p.hid=n,f("LS").style.display="none",f("APP").style.display="flex",window.showScreen("home"),le("syncing");const e=Le();if(e)try{const s=await me(`users/${e.uid}`);if((t=s==null?void 0:s.householdIds)!=null&&t.length){const i=[...s.householdIds];i.includes(n)||i.push(n),rt("ks-hhs",i)}else{const i=Ue("ks-hhs")||[n];i.includes(n)||(i.push(n),rt("ks-hhs",i))}}catch{const s=Ue("ks-hhs")||[n];s.includes(n)||(s.push(n),rt("ks-hhs",s))}else{const s=Ue("ks-hhs")||[n];s.includes(n)||(s.push(n),rt("ks-hhs",s))}await U_(),nA(),kc(),OI(),qS(),lE(p.hid);try{le("syncing");const s=await Promise.allSettled([Fe(`households/${p.hid}/inventory`),Fe(`households/${p.hid}/recipes`),Fe(`households/${p.hid}/shopping`)]),i=(r,o)=>r.status==="fulfilled"?r.value:o;p.inv=i(s[0],p.inv),p.recs=i(s[1],p.recs),p.shop=i(s[2],p.shop),le("synced"),Cc(),io(),fs(),bi()}catch(s){console.error("initial load error",s),le("error")}setTimeout(_A,500)};mA();$0();p.cfg.notif&&setTimeout(Hp,3e3);fs();function oo(n){f("auth-loading").style.display="none",f("auth-signin").style.display=n==="signin"?"flex":"none",f("auth-signup").style.display=n==="signup"?"flex":"none",f("auth-join").style.display=n==="join"?"flex":"none",f("authError").style.display="none",f("signupError").style.display="none"}function Xe(n,e){const t=f(n);t&&(t.textContent=e,t.style.display="block")}function ao(n){return{"auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password.","auth/invalid-credential":"Incorrect email or password.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password must be at least 6 characters.","auth/too-many-requests":"Too many attempts. Please try again later.","auth/popup-closed-by-user":"Sign-in popup was closed.","auth/cancelled-popup-request":"Sign-in was cancelled.","auth/account-exists-with-different-credential":"An account already exists with this email using a different sign-in method."}[n.code]||n.message||"Something went wrong. Please try again."}function qe(n,e){n&&(e?(n._origText=n.textContent,n.textContent="Please wait…",n.disabled=!0):(n.textContent=n._origText||n.textContent,n.disabled=!1))}var $h;($h=f("btnGoogle"))==null||$h.addEventListener("click",async()=>{const n=f("btnGoogle");qe(n,!0),f("authError").style.display="none";try{await R_()}catch(e){Xe("authError",ao(e))}qe(n,!1)});var Uh;(Uh=f("btnApple"))==null||Uh.addEventListener("click",async()=>{const n=f("btnApple");qe(n,!0),f("authError").style.display="none";try{await P_()}catch(e){Xe("authError",ao(e))}qe(n,!1)});var Fh;(Fh=f("btnEmailSign"))==null||Fh.addEventListener("click",async()=>{var s,i,r;const n=(i=(s=f("authEmail"))==null?void 0:s.value)==null?void 0:i.trim(),e=(r=f("authPass"))==null?void 0:r.value;if(!n||!e){Xe("authError","Please enter your email and password.");return}const t=f("btnEmailSign");qe(t,!0),f("authError").style.display="none";try{await x_(n,e)}catch(o){Xe("authError",ao(o))}qe(t,!1)});var Bh;(Bh=f("btnEmailSignup"))==null||Bh.addEventListener("click",async()=>{var i,r,o,c,u;const n=(r=(i=f("signupName"))==null?void 0:i.value)==null?void 0:r.trim(),e=(c=(o=f("signupEmail"))==null?void 0:o.value)==null?void 0:c.trim(),t=(u=f("signupPass"))==null?void 0:u.value;if(!n){Xe("signupError","Please enter your name.");return}if(!e||!t){Xe("signupError","Please enter your email and password.");return}const s=f("btnEmailSignup");qe(s,!0),f("signupError").style.display="none";try{await L_(e,t,n)}catch(d){Xe("signupError",ao(d))}qe(s,!1)});var jh;(jh=f("btnToggleSignup"))==null||jh.addEventListener("click",()=>oo("signup"));var Hh;(Hh=f("btnToggleSignin"))==null||Hh.addEventListener("click",()=>oo("signin"));var qh;(qh=f("authPass"))==null||qh.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=f("btnEmailSign"))==null||e.click())});var zh;(zh=f("signupPass"))==null||zh.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=f("btnEmailSignup"))==null||e.click())});window.doSignOut=async function(){confirm("Sign out of Kitchen?")&&await D_()};let ta=!1;function Dr(n){localStorage.setItem("ks-h",n),f("LS").style.display="none",f("APP").style.display="flex",window._appStart(n)}function IA(n){oo("join"),f("btnCreateKitchen").onclick=async()=>{var e;qe(f("btnCreateKitchen"),!0);try{const t=((e=p.cfg)==null?void 0:e.name)||"My Kitchen";await zd(n.uid,t);const s=await ha(n);s.householdIds=[n.uid],await ee(`users/${n.uid}`,s),localStorage.removeItem("ks-h");const i=Ue("ks-hhs");if(i){const r=i.filter(o=>o!==n.uid);r.push(n.uid),localStorage.setItem("ks-hhs",JSON.stringify(r))}Dr(n.uid)}catch(t){console.error("Create kitchen error:",t),Xe("joinError","Something went wrong. Please try again."),qe(f("btnCreateKitchen"),!1)}},f("btnJoinKitchen").onclick=async()=>{var t,s,i;const e=(i=(s=(t=f("joinCode"))==null?void 0:t.value)==null?void 0:s.trim())==null?void 0:i.toUpperCase();if(!e){Xe("joinError","Please enter an invite code.");return}qe(f("btnJoinKitchen"),!0),f("joinError").style.display="none";try{let r=await me(`users/${n.uid}`);r||(r=await ha(n));const o=await Wd(e,n);if(!o){Xe("joinError","Invalid invite code. Check and try again."),qe(f("btnJoinKitchen"),!1);return}const c=Ue("ks-hhs")||[];c.includes(o)||c.push(o),rt("ks-hhs",c),Dr(o)}catch(r){console.error("Join kitchen error:",r),Xe("joinError","Something went wrong. Please try again."),qe(f("btnJoinKitchen"),!1)}}}k_(async n=>{var e;if(n){if(localStorage.setItem("ks-who",n.displayName||((e=n.email)==null?void 0:e.split("@")[0])||"You"),!ta){ta=!0;try{const t=await me(`users/${n.uid}`),s=localStorage.getItem("ks-h"),i=Ue("ks-hhs");if(!!t||!!s||i&&i.length>0){f("LS").style.display="none",f("APP").style.display="flex";const o=await V_(n);Dr(o)}else IA(n)}catch(t){console.error("Failed to resolve household:",t);const s=n.uid;Dr(s)}}}else sp(),ta=!1,f("APP").style.display="none",f("LS").style.display="flex",oo("signin")});
