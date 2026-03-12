(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const or={name:"The Bora Family",adults:"Bora",kids:"1 toddler (age 3)",nopork:!0,noshellfish:!1,vegetarian:!1,glutenfree:!1,other:"",cuisines:"Bangladeshi, Turkish, Mediterranean, American",cookTime:"40-60 min",zipcode:""},p={hid:null,inv:[],recs:[],shop:[],mp:{},cfg:{...or},cookLog:[],wasteLog:[],chat:[],cp:null,selR:"fridge",maL:"fridge",adjId:null,it:"all",rt:"all",md:null,cn:"",nr:0,eid:null,scanDestList:!1,aisleMode:!1,selectMode:null,selectedIds:new Set,comRecs:[],comTab:"browse",comSearch:"",comCuisine:"all",myLikes:new Set};function $e(n){try{return JSON.parse(localStorage.getItem(n))}catch{return null}}function rt(n,e){localStorage.setItem(n,JSON.stringify(e))}const vm=()=>{};var Bl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},wm=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],c=n[t++],u=((i&7)<<18|(r&63)<<12|(o&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},$h={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,c=o?n[i+1]:0,u=i+2<n.length,d=u?n[i+2]:0,m=r>>2,v=(r&3)<<4|c>>4;let T=(c&15)<<2|d>>6,C=d&63;u||(C=64,o||(T=64)),s.push(t[m],t[v],t[T],t[C])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Vh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):wm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const v=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||c==null||d==null||v==null)throw new _m;const T=r<<2|c>>4;if(s.push(T),d!==64){const C=c<<4&240|d>>2;if(s.push(C),v!==64){const D=d<<6&192|v;s.push(D)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class _m extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bm=function(n){const e=Vh(n);return $h.encodeByteArray(e,!0)},ar=function(n){return bm(n).replace(/\./g,"")},Uh=function(n){try{return $h.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Tm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Em=()=>Tm().__FIREBASE_DEFAULTS__,Im=()=>{if(typeof process>"u"||typeof Bl>"u")return;const n=Bl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Sm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Uh(n[1]);return e&&JSON.parse(e)},Cr=()=>{try{return vm()||Em()||Im()||Sm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Fh=n=>{var e,t;return(t=(e=Cr())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},jh=n=>{const e=Fh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Bh=()=>{var n;return(n=Cr())==null?void 0:n.config},Hh=n=>{var e;return(e=Cr())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function sn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function xa(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function qh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[ar(JSON.stringify(t)),ar(JSON.stringify(o)),""].join(".")}const Fs={};function km(){const n={prod:[],emulator:[]};for(const e of Object.keys(Fs))Fs[e]?n.emulator.push(e):n.prod.push(e);return n}function Cm(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Hl=!1;function La(n,e){if(typeof window>"u"||typeof document>"u"||!sn(window.location.host)||Fs[n]===e||Fs[n]||Hl)return;Fs[n]=e;function t(T){return`__firebase__banner__${T}`}const s="__firebase__banner",r=km().prod.length>0;function o(){const T=document.getElementById(s);T&&T.remove()}function c(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function u(T,C){T.setAttribute("width","24"),T.setAttribute("id",C),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function d(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{Hl=!0,o()},T}function m(T,C){T.setAttribute("id",C),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function v(){const T=Cm(s),C=t("text"),D=document.getElementById(C)||document.createElement("span"),M=t("learnmore"),N=document.getElementById(M)||document.createElement("a"),z=t("preprendIcon"),G=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const V=T.element;c(V),m(N,M);const j=d();u(G,z),V.append(G,D,N,j),document.body.appendChild(V)}r?(D.innerText="Preview backend disconnected.",G.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function Pm(){var e;const n=(e=Cr())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Lm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Dm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Nm(){const n=Re();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Om(){return!Pm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Mm(){try{return typeof indexedDB=="object"}catch{return!1}}function Vm(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m="FirebaseError";class mt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=$m,Object.setPrototypeOf(this,mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ai.prototype.create)}}class ai{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Um(r,s):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new mt(i,c,s)}}function Um(n,e){return n.replace(Fm,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Fm=/\{\$([^}]+)}/g;function jm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Tn(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(ql(r)&&ql(o)){if(!Tn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function ql(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ns(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Os(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Bm(n,e){const t=new Hm(n,e);return t.subscribe.bind(t)}class Hm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");qm(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=ko),i.error===void 0&&(i.error=ko),i.complete===void 0&&(i.complete=ko);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ko(){}/**
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
 */function Ee(n){return n&&n._delegate?n._delegate:n}class Kt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const gn="[DEFAULT]";/**
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
 */class zm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Am;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gm(e))try{this.getOrInitializeService({instanceIdentifier:gn})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=gn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gn){return this.instances.has(e)}getOptions(e=gn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(r);s===c&&o.resolve(i)}return i}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Wm(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=gn){return this.component?this.component.multipleInstances?e:gn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Wm(n){return n===gn?void 0:n}function Gm(n){return n.instantiationMode==="EAGER"}/**
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
 */class Km{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new zm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const Qm={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Jm=Q.INFO,Ym={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},Xm=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Ym[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Da{constructor(e){this.name=e,this._logLevel=Jm,this._logHandler=Xm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const Zm=(n,e)=>e.some(t=>n instanceof t);let zl,Wl;function eg(){return zl||(zl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tg(){return Wl||(Wl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zh=new WeakMap,Qo=new WeakMap,Wh=new WeakMap,Co=new WeakMap,Na=new WeakMap;function ng(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Bt(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&zh.set(t,n)}).catch(()=>{}),Na.set(e,n),e}function sg(n){if(Qo.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Qo.set(n,e)}let Jo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Qo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Wh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Bt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ig(n){Jo=n(Jo)}function rg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Ro(this),e,...t);return Wh.set(s,e.sort?e.sort():[e]),Bt(s)}:tg().includes(n)?function(...e){return n.apply(Ro(this),e),Bt(zh.get(this))}:function(...e){return Bt(n.apply(Ro(this),e))}}function og(n){return typeof n=="function"?rg(n):(n instanceof IDBTransaction&&sg(n),Zm(n,eg())?new Proxy(n,Jo):n)}function Bt(n){if(n instanceof IDBRequest)return ng(n);if(Co.has(n))return Co.get(n);const e=og(n);return e!==n&&(Co.set(n,e),Na.set(e,n)),e}const Ro=n=>Na.get(n);function ag(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),c=Bt(o);return s&&o.addEventListener("upgradeneeded",u=>{s(Bt(o.result),u.oldVersion,u.newVersion,Bt(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{r&&u.addEventListener("close",()=>r()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const cg=["get","getKey","getAll","getAllKeys","count"],lg=["put","add","delete","clear"],Po=new Map;function Gl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Po.get(e))return Po.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=lg.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||cg.includes(t)))return;const r=async function(o,...c){const u=this.transaction(o,i?"readwrite":"readonly");let d=u.store;return s&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),i&&u.done]))[0]};return Po.set(e,r),r}ig(n=>({...n,get:(e,t,s)=>Gl(e,t)||n.get(e,t,s),has:(e,t)=>!!Gl(e,t)||n.has(e,t)}));/**
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
 */class ug{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(hg(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function hg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yo="@firebase/app",Kl="0.14.9";/**
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
 */const bt=new Da("@firebase/app"),dg="@firebase/app-compat",fg="@firebase/analytics-compat",pg="@firebase/analytics",mg="@firebase/app-check-compat",gg="@firebase/app-check",yg="@firebase/auth",vg="@firebase/auth-compat",wg="@firebase/database",_g="@firebase/data-connect",bg="@firebase/database-compat",Tg="@firebase/functions",Eg="@firebase/functions-compat",Ig="@firebase/installations",Sg="@firebase/installations-compat",Ag="@firebase/messaging",kg="@firebase/messaging-compat",Cg="@firebase/performance",Rg="@firebase/performance-compat",Pg="@firebase/remote-config",xg="@firebase/remote-config-compat",Lg="@firebase/storage",Dg="@firebase/storage-compat",Ng="@firebase/firestore",Og="@firebase/ai",Mg="@firebase/firestore-compat",Vg="firebase",$g="12.10.0";/**
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
 */const Xo="[DEFAULT]",Ug={[Yo]:"fire-core",[dg]:"fire-core-compat",[pg]:"fire-analytics",[fg]:"fire-analytics-compat",[gg]:"fire-app-check",[mg]:"fire-app-check-compat",[yg]:"fire-auth",[vg]:"fire-auth-compat",[wg]:"fire-rtdb",[_g]:"fire-data-connect",[bg]:"fire-rtdb-compat",[Tg]:"fire-fn",[Eg]:"fire-fn-compat",[Ig]:"fire-iid",[Sg]:"fire-iid-compat",[Ag]:"fire-fcm",[kg]:"fire-fcm-compat",[Cg]:"fire-perf",[Rg]:"fire-perf-compat",[Pg]:"fire-rc",[xg]:"fire-rc-compat",[Lg]:"fire-gcs",[Dg]:"fire-gcs-compat",[Ng]:"fire-fst",[Mg]:"fire-fst-compat",[Og]:"fire-vertex","fire-js":"fire-js",[Vg]:"fire-js-all"};/**
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
 */const cr=new Map,Fg=new Map,Zo=new Map;function Ql(n,e){try{n.container.addComponent(e)}catch(t){bt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function En(n){const e=n.name;if(Zo.has(e))return bt.debug(`There were multiple attempts to register component ${e}.`),!1;Zo.set(e,n);for(const t of cr.values())Ql(t,n);for(const t of Fg.values())Ql(t,n);return!0}function Rr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Me(n){return n==null?!1:n.settings!==void 0}/**
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
 */const jg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ht=new ai("app","Firebase",jg);/**
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
 */class Bg{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
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
 */const Rn=$g;function Gh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Xo,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw Ht.create("bad-app-name",{appName:String(i)});if(t||(t=Bh()),!t)throw Ht.create("no-options");const r=cr.get(i);if(r){if(Tn(t,r.options)&&Tn(s,r.config))return r;throw Ht.create("duplicate-app",{appName:i})}const o=new Km(i);for(const u of Zo.values())o.addComponent(u);const c=new Bg(t,s,o);return cr.set(i,c),c}function Oa(n=Xo){const e=cr.get(n);if(!e&&n===Xo&&Bh())return Gh();if(!e)throw Ht.create("no-app",{appName:n});return e}function at(n,e,t){let s=Ug[n]??n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bt.warn(o.join(" "));return}En(new Kt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Hg="firebase-heartbeat-database",qg=1,Xs="firebase-heartbeat-store";let xo=null;function Kh(){return xo||(xo=ag(Hg,qg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Xs)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ht.create("idb-open",{originalErrorMessage:n.message})})),xo}async function zg(n){try{const t=(await Kh()).transaction(Xs),s=await t.objectStore(Xs).get(Qh(n));return await t.done,s}catch(e){if(e instanceof mt)bt.warn(e.message);else{const t=Ht.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bt.warn(t.message)}}}async function Jl(n,e){try{const s=(await Kh()).transaction(Xs,"readwrite");await s.objectStore(Xs).put(e,Qh(n)),await s.done}catch(t){if(t instanceof mt)bt.warn(t.message);else{const s=Ht.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});bt.warn(s.message)}}}function Qh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Wg=1024,Gg=30;class Kg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Jg(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Yl();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>Gg){const o=Yg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){bt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Yl(),{heartbeatsToSend:s,unsentEntries:i}=Qg(this._heartbeatsCache.heartbeats),r=ar(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return bt.warn(t),""}}}function Yl(){return new Date().toISOString().substring(0,10)}function Qg(n,e=Wg){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Xl(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Xl(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Jg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mm()?Vm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await zg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Jl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Jl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Xl(n){return ar(JSON.stringify({version:2,heartbeats:n})).length}function Yg(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function Xg(n){En(new Kt("platform-logger",e=>new ug(e),"PRIVATE")),En(new Kt("heartbeat",e=>new Kg(e),"PRIVATE")),at(Yo,Kl,n),at(Yo,Kl,"esm2020"),at("fire-js","")}Xg("");var Zg="firebase",ey="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */at(Zg,ey,"app");function Jh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ty=Jh,Yh=new ai("auth","Firebase",Jh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=new Da("@firebase/auth");function ny(n,...e){lr.logLevel<=Q.WARN&&lr.warn(`Auth (${Rn}): ${n}`,...e)}function Wi(n,...e){lr.logLevel<=Q.ERROR&&lr.error(`Auth (${Rn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(n,...e){throw Va(n,...e)}function Ze(n,...e){return Va(n,...e)}function Ma(n,e,t){const s={...ty(),[e]:t};return new ai("auth","Firebase",s).create(e,{appName:n.name})}function ct(n){return Ma(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xh(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ke(n,"argument-error"),Ma(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Va(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Yh.create(n,...e)}function F(n,e,...t){if(!n)throw Va(e,...t)}function wt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Wi(e),new Error(e)}function Tt(n,e){n||wt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function sy(){return Zl()==="http:"||Zl()==="https:"}function Zl(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sy()||Lm()||"connection"in navigator)?navigator.onLine:!0}function ry(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,t){this.shortDelay=e,this.longDelay=t,Tt(t>e,"Short delay should be less than long delay!"),this.isMobile=Rm()||Dm()}get(){return iy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(n,e){Tt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],cy=new li(3e4,6e4);function rn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function St(n,e,t,s,i={}){return ed(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const c=ci({key:n.config.apiKey,...o}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:u,...r};return xm()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&sn(n.emulatorConfig.host)&&(d.credentials="include"),Zh.fetch()(await td(n,n.config.apiHost,t,c),d)})}async function ed(n,e,t){n._canInitEmulator=!1;const s={...oy,...e};try{const i=new uy(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Oi(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const c=r.ok?o.errorMessage:o.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oi(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Oi(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw Oi(n,"user-disabled",o);const m=s[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Ma(n,m,d);Ke(n,m)}}catch(i){if(i instanceof mt)throw i;Ke(n,"network-request-failed",{message:String(i)})}}async function ui(n,e,t,s,i={}){const r=await St(n,e,t,s,i);return"mfaPendingCredential"in r&&Ke(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function td(n,e,t,s){const i=`${e}${t}?${s}`,r=n,o=r.config.emulator?$a(n.config,i):`${n.config.apiScheme}://${i}`;return ay.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function ly(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class uy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Ze(this.auth,"network-request-failed")),cy.get())})}}function Oi(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=Ze(n,e,s);return i.customData._tokenResponse=t,i}function eu(n){return n!==void 0&&n.enterprise!==void 0}class hy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return ly(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function dy(n,e){return St(n,"GET","/v2/recaptchaConfig",rn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fy(n,e){return St(n,"POST","/v1/accounts:delete",e)}async function ur(n,e){return St(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function py(n,e=!1){const t=Ee(n),s=await t.getIdToken(e),i=Ua(s);F(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:js(Lo(i.auth_time)),issuedAtTime:js(Lo(i.iat)),expirationTime:js(Lo(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Lo(n){return Number(n)*1e3}function Ua(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Wi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Uh(t);return i?JSON.parse(i):(Wi("Failed to decode base64 JWT payload"),null)}catch(i){return Wi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function tu(n){const e=Ua(n);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qn(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof mt&&my(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function my({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=js(this.lastLoginAt),this.creationTime=js(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function hr(n){var v;const e=n.auth,t=await n.getIdToken(),s=await Qn(n,ur(e,{idToken:t}));F(s==null?void 0:s.users.length,e,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const r=(v=i.providerUserInfo)!=null&&v.length?nd(i.providerUserInfo):[],o=vy(n.providerData,r),c=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(o!=null&&o.length),d=c?u:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new ta(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,m)}async function yy(n){const e=Ee(n);await hr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vy(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function nd(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wy(n,e){const t=await ed(n,{},async()=>{const s=ci({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=await td(n,i,"/v1/token",`key=${r}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:s};return n.emulatorConfig&&sn(n.emulatorConfig.host)&&(u.credentials="include"),Zh.fetch()(o,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function _y(n,e){return St(n,"POST","/v2/accounts:revokeToken",rn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){F(e.length!==0,"internal-error");const t=tu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await wy(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new Fn;return s&&(F(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(F(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(F(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fn,this.toJSON())}_performRefresh(){return wt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(n,e){F(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ye{constructor({uid:e,auth:t,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new gy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ta(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Qn(this,this.stsTokenManager.getToken(this.auth,e));return F(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return py(this,e)}reload(){return yy(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ye({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await hr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Me(this.auth.app))return Promise.reject(ct(this.auth));const e=await this.getIdToken();return await Qn(this,fy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,i=t.email??void 0,r=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,u=t._redirectEventId??void 0,d=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:v,emailVerified:T,isAnonymous:C,providerData:D,stsTokenManager:M}=t;F(v&&M,e,"internal-error");const N=Fn.fromJSON(this.name,M);F(typeof v=="string",e,"internal-error"),Dt(s,e.name),Dt(i,e.name),F(typeof T=="boolean",e,"internal-error"),F(typeof C=="boolean",e,"internal-error"),Dt(r,e.name),Dt(o,e.name),Dt(c,e.name),Dt(u,e.name),Dt(d,e.name),Dt(m,e.name);const z=new Ye({uid:v,auth:e,email:i,emailVerified:T,displayName:s,isAnonymous:C,photoURL:o,phoneNumber:r,tenantId:c,stsTokenManager:N,createdAt:d,lastLoginAt:m});return D&&Array.isArray(D)&&(z.providerData=D.map(G=>({...G}))),u&&(z._redirectEventId=u),z}static async _fromIdTokenResponse(e,t,s=!1){const i=new Fn;i.updateFromServerResponse(t);const r=new Ye({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await hr(r),r}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];F(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?nd(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),c=new Fn;c.updateFromIdToken(s);const u=new Ye({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new ta(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu=new Map;function _t(n){Tt(n instanceof Function,"Expected a class definition");let e=nu.get(n);return e?(Tt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,nu.set(n,e),e)}/**
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
 */class sd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}sd.type="NONE";const su=sd;/**
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
 */function Gi(n,e,t){return`firebase:${n}:${e}:${t}`}class jn{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Gi(this.userKey,i.apiKey,r),this.fullPersistenceKey=Gi("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ur(this.auth,{idToken:e}).catch(()=>{});return t?Ye._fromGetAccountInfoResponse(this.auth,t,e):null}return Ye._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new jn(_t(su),e,s);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let r=i[0]||_t(su);const o=Gi(s,e.config.apiKey,e.name);let c=null;for(const d of t)try{const m=await d._get(o);if(m){let v;if(typeof m=="string"){const T=await ur(e,{idToken:m}).catch(()=>{});if(!T)break;v=await Ye._fromGetAccountInfoResponse(e,T,m)}else v=Ye._fromJSON(e,m);d!==r&&(c=v),r=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!r._shouldAllowMigration||!u.length?new jn(r,e,s):(r=u[0],c&&await r._set(o,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==r)try{await d._remove(o)}catch{}})),new jn(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ad(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(id(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ld(e))return"Blackberry";if(ud(e))return"Webos";if(rd(e))return"Safari";if((e.includes("chrome/")||od(e))&&!e.includes("edge/"))return"Chrome";if(cd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function id(n=Re()){return/firefox\//i.test(n)}function rd(n=Re()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function od(n=Re()){return/crios\//i.test(n)}function ad(n=Re()){return/iemobile/i.test(n)}function cd(n=Re()){return/android/i.test(n)}function ld(n=Re()){return/blackberry/i.test(n)}function ud(n=Re()){return/webos/i.test(n)}function Fa(n=Re()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function by(n=Re()){var e;return Fa(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Ty(){return Nm()&&document.documentMode===10}function hd(n=Re()){return Fa(n)||cd(n)||ud(n)||ld(n)||/windows phone/i.test(n)||ad(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(n,e=[]){let t;switch(n){case"Browser":t=iu(Re());break;case"Worker":t=`${iu(Re())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Rn}/${s}`}/**
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
 */class Ey{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,c)=>{try{const u=e(r);o(u)}catch(u){c(u)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Iy(n,e={}){return St(n,"GET","/v2/passwordPolicy",rn(n,e))}/**
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
 */const Sy=6;class Ay{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Sy,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ru(this),this.idTokenSubscription=new ru(this),this.beforeStateQueue=new Ey(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_t(t)),this._initializationPromise=this.queue(async()=>{var s,i,r;if(!this._deleted&&(this.persistenceManager=await jn.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ur(this,{idToken:e}),s=await Ye._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(Me(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===c)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await hr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ry()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Me(this.app))return Promise.reject(ct(this));const t=e?Ee(e):null;return t&&F(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Me(this.app)?Promise.reject(ct(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Me(this.app)?Promise.reject(ct(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_t(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Iy(this),t=new Ay(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ai("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await _y(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_t(e)||this._popupRedirectResolver;F(t,this,"argument-error"),this.redirectPersistenceManager=await jn.create(this,[_t(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(c,this,"internal-error"),c.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,s,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Me(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&ny(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function gt(n){return Ee(n)}class ru{constructor(e){this.auth=e,this.observer=null,this.addObserver=Bm(t=>this.observer=t)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Cy(n){Pr=n}function fd(n){return Pr.loadJS(n)}function Ry(){return Pr.recaptchaEnterpriseScript}function Py(){return Pr.gapiScript}function xy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Ly{constructor(){this.enterprise=new Dy}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Dy{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Ny="recaptcha-enterprise",pd="NO_RECAPTCHA";class Oy{constructor(e){this.type=Ny,this.auth=gt(e)}async verify(e="verify",t=!1){async function s(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,c)=>{dy(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new hy(u);return r.tenantId==null?r._agentRecaptchaConfig=d:r._tenantRecaptchaConfigs[r.tenantId]=d,o(d.siteKey)}}).catch(u=>{c(u)})})}function i(r,o,c){const u=window.grecaptcha;eu(u)?u.enterprise.ready(()=>{u.enterprise.execute(r,{action:e}).then(d=>{o(d)}).catch(()=>{o(pd)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Ly().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{s(this.auth).then(c=>{if(!t&&eu(window.grecaptcha))i(c,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Ry();u.length!==0&&(u+=c),fd(u).then(()=>{i(c,r,o)}).catch(d=>{o(d)})}}).catch(c=>{o(c)})})}}async function ou(n,e,t,s=!1,i=!1){const r=new Oy(n);let o;if(i)o=pd;else try{o=await r.verify(t)}catch{o=await r.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return s?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function na(n,e,t,s,i){var r;if((r=n._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await ou(n,e,t,t==="getOobCode");return s(n,o)}else return s(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await ou(n,e,t,t==="getOobCode");return s(n,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(n,e){const t=Rr(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(Tn(r,e??{}))return i;Ke(i,"already-initialized")}return t.initialize({options:e})}function Vy(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(_t);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function $y(n,e,t){const s=gt(n);F(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=md(e),{host:o,port:c}=Uy(e),u=c===null?"":`:${c}`,d={url:`${r}//${o}${u}/`},m=Object.freeze({host:o,port:c,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){F(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),F(Tn(d,s.config.emulator)&&Tn(m,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=d,s.emulatorConfig=m,s.settings.appVerificationDisabledForTesting=!0,sn(o)?(xa(`${r}//${o}${u}`),La("Auth",!0)):Fy()}function md(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Uy(n){const e=md(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:au(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:au(o)}}}function au(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Fy(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return wt("not implemented")}_getIdTokenResponse(e){return wt("not implemented")}_linkToIdToken(e,t){return wt("not implemented")}_getReauthenticationResolver(e){return wt("not implemented")}}async function jy(n,e){return St(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function By(n,e){return ui(n,"POST","/v1/accounts:signInWithPassword",rn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hy(n,e){return ui(n,"POST","/v1/accounts:signInWithEmailLink",rn(n,e))}async function qy(n,e){return ui(n,"POST","/v1/accounts:signInWithEmailLink",rn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs extends ja{constructor(e,t,s,i=null){super("password",s),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Zs(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Zs(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return na(e,t,"signInWithPassword",By);case"emailLink":return Hy(e,{email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return na(e,s,"signUpPassword",jy);case"emailLink":return qy(e,{idToken:t,email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bn(n,e){return ui(n,"POST","/v1/accounts:signInWithIdp",rn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy="http://localhost";class Et extends ja{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Et(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ke("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,...r}=t;if(!s||!i)return null;const o=new Et(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Bn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Bn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Bn(e,t)}buildRequest(){const e={requestUri:zy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ci(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wy(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Gy(n){const e=Ns(Os(n)).link,t=e?Ns(Os(e)).deep_link_id:null,s=Ns(Os(n)).deep_link_id;return(s?Ns(Os(s)).link:null)||s||t||e||n}class Ba{constructor(e){const t=Ns(Os(e)),s=t.apiKey??null,i=t.oobCode??null,r=Wy(t.mode??null);F(s&&i&&r,"argument-error"),this.apiKey=s,this.operation=r,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Gy(e);try{return new Ba(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.providerId=ss.PROVIDER_ID}static credential(e,t){return Zs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Ba.parseLink(t);return F(s,"argument-error"),Zs._fromEmailAndCode(e,s.code,s.tenantId)}}ss.PROVIDER_ID="password";ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class is extends xr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Bs extends is{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return F("providerId"in t&&"signInMethod"in t,"argument-error"),Et._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return F(e.idToken||e.accessToken,"argument-error"),Et._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Bs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Bs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s,oauthTokenSecret:i,pendingToken:r,nonce:o,providerId:c}=e;if(!s&&!i&&!t&&!r||!c)return null;try{return new Bs(c)._credential({idToken:t,accessToken:s,nonce:o,pendingToken:r})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends is{constructor(){super("facebook.com")}static credential(e){return Et._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nt.credential(e.oauthAccessToken)}catch{return null}}}Nt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends is{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Et._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return vt.credential(t,s)}catch{return null}}}vt.GOOGLE_SIGN_IN_METHOD="google.com";vt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends is{constructor(){super("github.com")}static credential(e){return Et._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ot.credential(e.oauthAccessToken)}catch{return null}}}Ot.GITHUB_SIGN_IN_METHOD="github.com";Ot.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends is{constructor(){super("twitter.com")}static credential(e,t){return Et._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Mt.credential(t,s)}catch{return null}}}Mt.TWITTER_SIGN_IN_METHOD="twitter.com";Mt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ky(n,e){return ui(n,"POST","/v1/accounts:signUp",rn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await Ye._fromIdTokenResponse(e,s,i),o=cu(s);return new In({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=cu(s);return new In({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function cu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends mt{constructor(e,t,s,i){super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,dr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new dr(e,t,s,i)}}function gd(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?dr._fromErrorAndOperation(n,r,e,s):r})}async function Qy(n,e,t=!1){const s=await Qn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return In._forOperation(n,"link",s)}/**
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
 */async function Jy(n,e,t=!1){const{auth:s}=n;if(Me(s.app))return Promise.reject(ct(s));const i="reauthenticate";try{const r=await Qn(n,gd(s,i,e,n),t);F(r.idToken,s,"internal-error");const o=Ua(r.idToken);F(o,s,"internal-error");const{sub:c}=o;return F(n.uid===c,s,"user-mismatch"),In._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ke(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yd(n,e,t=!1){if(Me(n.app))return Promise.reject(ct(n));const s="signIn",i=await gd(n,s,e),r=await In._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}async function Yy(n,e){return yd(gt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vd(n){const e=gt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Xy(n,e,t){if(Me(n.app))return Promise.reject(ct(n));const s=gt(n),o=await na(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ky).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&vd(n),u}),c=await In._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(c.user),c}function Zy(n,e,t){return Me(n.app)?Promise.reject(ct(n)):Yy(Ee(n),ss.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&vd(n),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ev(n,e){return St(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tv(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=Ee(n),r={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Qn(s,ev(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const c=s.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=s.displayName,c.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function nv(n,e,t,s){return Ee(n).onIdTokenChanged(e,t,s)}function sv(n,e,t){return Ee(n).beforeAuthStateChanged(e,t)}function iv(n,e,t,s){return Ee(n).onAuthStateChanged(e,t,s)}function rv(n){return Ee(n).signOut()}const fr="__sak";/**
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
 */class wd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(fr,"1"),this.storage.removeItem(fr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov=1e3,av=10;class _d extends wd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const s=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Ty()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,av):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},ov)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}_d.type="LOCAL";const cv=_d;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd extends wd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}bd.type="SESSION";const Td=bd;/**
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
 */function lv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Lr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new Lr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const c=Array.from(o).map(async d=>d(t.origin,r)),u=await lv(c);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class uv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((c,u)=>{const d=Ha("",20);i.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(v){const T=v;if(T.data.eventId===d)switch(T.data.status){case"ack":clearTimeout(m),r=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),c(T.data.response);break;default:clearTimeout(m),clearTimeout(r),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return window}function hv(n){lt().location.href=n}/**
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
 */function Ed(){return typeof lt().WorkerGlobalScope<"u"&&typeof lt().importScripts=="function"}async function dv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function pv(){return Ed()?self:null}/**
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
 */const Id="firebaseLocalStorageDb",mv=1,pr="firebaseLocalStorage",Sd="fbase_key";class hi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Dr(n,e){return n.transaction([pr],e?"readwrite":"readonly").objectStore(pr)}function gv(){const n=indexedDB.deleteDatabase(Id);return new hi(n).toPromise()}function sa(){const n=indexedDB.open(Id,mv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(pr,{keyPath:Sd})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(pr)?e(s):(s.close(),await gv(),e(await sa()))})})}async function lu(n,e,t){const s=Dr(n,!0).put({[Sd]:e,value:t});return new hi(s).toPromise()}async function yv(n,e){const t=Dr(n,!1).get(e),s=await new hi(t).toPromise();return s===void 0?null:s.value}function uu(n,e){const t=Dr(n,!0).delete(e);return new hi(t).toPromise()}const vv=800,wv=3;class Ad{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>wv)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ed()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lr._getInstance(pv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await dv(),!this.activeServiceWorker)return;this.sender=new uv(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sa();return await lu(e,fr,"1"),await uu(e,fr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>lu(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>yv(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>uu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Dr(i,!1).getAll();return new hi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ad.type="LOCAL";const _v=Ad;new li(3e4,6e4);/**
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
 */function qa(n,e){return e?_t(e):(F(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class za extends ja{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Bn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Bn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function bv(n){return yd(n.auth,new za(n),n.bypassAuthState)}function Tv(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),Jy(t,new za(n),n.bypassAuthState)}async function Ev(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),Qy(t,new za(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bv;case"linkViaPopup":case"linkViaRedirect":return Ev;case"reauthViaPopup":case"reauthViaRedirect":return Tv;default:Ke(this.auth,"internal-error")}}resolve(e){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv=new li(2e3,1e4);async function Cd(n,e,t){if(Me(n.app))return Promise.reject(Ze(n,"operation-not-supported-in-this-environment"));const s=gt(n);Xh(n,e,xr);const i=qa(s,t);return new yn(s,"signInViaPopup",e,i).executeNotNull()}class yn extends kd{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,yn.currentPopupAction&&yn.currentPopupAction.cancel(),yn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){Tt(this.filter.length===1,"Popup operations only handle one event");const e=Ha();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Iv.get())};e()}}yn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv="pendingRedirect",Ki=new Map;class Av extends kd{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Ki.get(this.auth._key());if(!e){try{const s=await kv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Ki.set(this.auth._key(),e)}return this.bypassAuthState||Ki.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kv(n,e){const t=Pd(e),s=Rd(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}async function Cv(n,e){return Rd(n)._set(Pd(e),"true")}function Rv(n,e){Ki.set(n._key(),e)}function Rd(n){return _t(n._redirectPersistence)}function Pd(n){return Gi(Sv,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(n,e,t){return Pv(n,e,t)}async function Pv(n,e,t){if(Me(n.app))return Promise.reject(ct(n));const s=gt(n);Xh(n,e,xr),await s._initializationPromise;const i=qa(s,t);return await Cv(i,s),i._openRedirect(s,e,"signInViaRedirect")}async function xv(n,e){return await gt(n)._initializationPromise,Ld(n,e,!1)}async function Ld(n,e,t=!1){if(Me(n.app))return Promise.reject(ct(n));const s=gt(n),i=qa(s,e),o=await new Av(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv=600*1e3;class Dv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Nv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Dd(e)){const i=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(Ze(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Lv&&this.cachedEventUids.clear(),this.cachedEventUids.has(hu(e))}saveEventToCache(e){this.cachedEventUids.add(hu(e)),this.lastProcessedEventTime=Date.now()}}function hu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Dd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Nv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dd(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ov(n,e={}){return St(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vv=/^https?/;async function $v(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Ov(n);for(const t of e)try{if(Uv(t))return}catch{}Ke(n,"unauthorized-domain")}function Uv(n){const e=ea(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!Vv.test(t))return!1;if(Mv.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Fv=new li(3e4,6e4);function du(){const n=lt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function jv(n){return new Promise((e,t)=>{var i,r,o;function s(){du(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{du(),t(Ze(n,"network-request-failed"))},timeout:Fv.get()})}if((r=(i=lt().gapi)==null?void 0:i.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=lt().gapi)!=null&&o.load)s();else{const c=xy("iframefcb");return lt()[c]=()=>{gapi.load?s():t(Ze(n,"network-request-failed"))},fd(`${Py()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Qi=null,e})}let Qi=null;function Bv(n){return Qi=Qi||jv(n),Qi}/**
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
 */const Hv=new li(5e3,15e3),qv="__/auth/iframe",zv="emulator/auth/iframe",Wv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Kv(n){const e=n.config;F(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?$a(e,zv):`https://${n.config.authDomain}/${qv}`,s={apiKey:e.apiKey,appName:n.name,v:Rn},i=Gv.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${ci(s).slice(1)}`}async function Qv(n){const e=await Bv(n),t=lt().gapi;return F(t,n,"internal-error"),e.open({where:document.body,url:Kv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Wv,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Ze(n,"network-request-failed"),c=lt().setTimeout(()=>{r(o)},Hv.get());function u(){lt().clearTimeout(c),i(s)}s.ping(u).then(u,()=>{r(o)})}))}/**
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
 */const Jv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Yv=500,Xv=600,Zv="_blank",ew="http://localhost";class fu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tw(n,e,t,s=Yv,i=Xv){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const u={...Jv,width:s.toString(),height:i.toString(),top:r,left:o},d=Re().toLowerCase();t&&(c=od(d)?Zv:t),id(d)&&(e=e||ew,u.scrollbars="yes");const m=Object.entries(u).reduce((T,[C,D])=>`${T}${C}=${D},`,"");if(by(d)&&c!=="_self")return nw(e||"",c),new fu(null);const v=window.open(e||"",c,m);F(v,n,"popup-blocked");try{v.focus()}catch{}return new fu(v)}function nw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const sw="__/auth/handler",iw="emulator/auth/handler",rw=encodeURIComponent("fac");async function pu(n,e,t,s,i,r){F(n.config.authDomain,n,"auth-domain-config-required"),F(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Rn,eventId:i};if(e instanceof xr){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",jm(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,v]of Object.entries({}))o[m]=v}if(e instanceof is){const m=e.getScopes().filter(v=>v!=="");m.length>0&&(o.scopes=m.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const u=await n._getAppCheckToken(),d=u?`#${rw}=${encodeURIComponent(u)}`:"";return`${ow(n)}?${ci(c).slice(1)}${d}`}function ow({config:n}){return n.emulator?$a(n,iw):`https://${n.authDomain}/${sw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do="webStorageSupport";class aw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Td,this._completeRedirectFn=Ld,this._overrideRedirectResult=Rv}async _openPopup(e,t,s,i){var o;Tt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await pu(e,t,s,ea(),i);return tw(e,r,Ha())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await pu(e,t,s,ea(),i);return hv(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(Tt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await Qv(e),s=new Dv(e);return t.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Do,{type:Do},i=>{var o;const r=(o=i==null?void 0:i[0])==null?void 0:o[Do];r!==void 0&&t(!!r),Ke(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=$v(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return hd()||rd()||Fa()}}const cw=aw;var mu="@firebase/auth",gu="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hw(n){En(new Kt("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=s.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const u={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dd(n)},d=new ky(s,i,r,u);return Vy(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),En(new Kt("auth-internal",e=>{const t=gt(e.getProvider("auth").getImmediate());return(s=>new lw(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),at(mu,gu,uw(n)),at(mu,gu,"esm2020")}/**
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
 */const dw=300,fw=Hh("authIdTokenMaxAge")||dw;let yu=null;const pw=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>fw)return;const i=t==null?void 0:t.token;yu!==i&&(yu=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function mw(n=Oa()){const e=Rr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=My(n,{popupRedirectResolver:cw,persistence:[_v,cv,Td]}),s=Hh("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=pw(r.toString());sv(t,o,()=>o(t.currentUser)),nv(t,c=>o(c))}}const i=Fh("auth");return i&&$y(t,`http://${i}`),t}function gw(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Cy({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=Ze("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",gw().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hw("Browser");const yw={apiKey:"AIzaSyAFURz8fEGSTameAW5YvBKWpr2LXv9Ang0",authDomain:"family-pantry-c65d6.firebaseapp.com",projectId:"family-pantry-c65d6",storageBucket:"family-pantry-c65d6.firebasestorage.app",messagingSenderId:"710701847077",appId:"1:710701847077:web:407a8937330ad2ebcfe5cc"},Wa=Gh(yw),Qe=mw(Wa);window._firebaseAuth=Qe;const vu=new vt,mr=new Bs("apple.com");mr.addScope("email");mr.addScope("name");let Ga=null;const Ji=[];function vw(n){return Ji.push(n),n(Ga),()=>{const e=Ji.indexOf(n);e!==-1&&Ji.splice(e,1)}}function ww(n){Ga=n,Ji.forEach(e=>e(n))}iv(Qe,n=>{ww(n||null)});xv(Qe).catch(n=>{n.code!=="auth/redirect-cancelled-by-user"&&console.error("Redirect sign-in error:",n)});async function _w(){try{return(await Cd(Qe,vu)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await xd(Qe,vu),null;throw n}}async function bw(){try{return(await Cd(Qe,mr)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await xd(Qe,mr),null;throw n}}async function Tw(n,e){return(await Zy(Qe,n,e)).user}async function Ew(n,e,t){const s=await Xy(Qe,n,e);return t&&await tv(s.user,{displayName:t}),s.user}async function Iw(){await rv(Qe)}async function Nd(){return Qe.currentUser?Qe.currentUser.getIdToken():null}function xe(){return Ga}async function Nr(n,e,t){const s={"Content-Type":"application/json"},i=await Nd();i&&(s.Authorization=`Bearer ${i}`);const r=await fetch("/api/db",{method:"POST",headers:s,body:JSON.stringify({op:n,path:e,data:t})});if(!(r.headers.get("content-type")||"").includes("application/json"))throw new Error(`/api/db non-JSON response (status ${r.status}) for ${n} ${e}`);return r.json()}async function Ue(n){try{return(await Nr("list",n)).docs||[]}catch(e){return console.warn("dbList:",n,e.message),[]}}async function ee(n,e){return Nr("set",n,e)}async function on(n){return Nr("delete",n)}async function me(n){try{return(await Nr("get",n)).doc||null}catch{return null}}function Od(){return Math.random().toString(36).slice(2,8).toUpperCase()}async function ia(n){var t;const e={name:n.displayName||((t=n.email)==null?void 0:t.split("@")[0])||"User",email:n.email||"",createdAt:new Date().toISOString(),householdIds:[]};return await ee(`users/${n.uid}`,e),e}async function Md(n,e){var o;const t=xe(),s=n,i=Od(),r={name:e||"My Kitchen",ownerUid:n,members:[{uid:n,name:(t==null?void 0:t.displayName)||((o=t==null?void 0:t.email)==null?void 0:o.split("@")[0])||"Owner",role:"owner"}],memberUids:[n],inviteCode:i,createdAt:new Date().toISOString()};try{await ee(`households/${s}`,r),await ee(`household_codes/${i}`,{householdId:s})}catch(c){console.error(`[createHousehold] FAILED to write households/${s}:`,c)}return{hid:s,...r}}async function Sw(n){const e=await me(`household_codes/${n.toUpperCase()}`);return(e==null?void 0:e.householdId)||null}async function Vd(n,e){var c;const t=await Sw(n);if(!t)return null;const s=await me(`households/${t}`);if(!s)return null;const i=s.members||[],r=s.memberUids||i.map(u=>u.uid);i.find(u=>u.uid===e.uid)||(i.push({uid:e.uid,name:e.displayName||((c=e.email)==null?void 0:c.split("@")[0])||"Member",role:"member"}),r.includes(e.uid)||r.push(e.uid),await ee(`households/${t}`,{...s,members:i,memberUids:r,id:void 0}));const o=await me(`users/${e.uid}`);if(o){const u=o.householdIds||[];u.includes(t)||(u.push(t),await ee(`users/${e.uid}`,{...o,householdIds:u,id:void 0}))}return t}async function Aw(n){const e=await me(`households/${n}`);if(!e)return null;if(e.inviteCode)try{await on(`household_codes/${e.inviteCode}`)}catch{}const t=Od();return await ee(`household_codes/${t}`,{householdId:n}),await ee(`households/${n}`,{...e,inviteCode:t,id:void 0}),t}async function kw(n,e){const t=await me(`households/${n}`);if(!t)return;const s=(t.members||[]).filter(r=>r.uid!==e),i=(t.memberUids||[]).filter(r=>r!==e);await ee(`households/${n}`,{...t,members:s,memberUids:i,id:void 0});try{const r=await me(`users/${e}`);if(r){const o=(r.householdIds||[]).filter(c=>c!==n);await ee(`users/${e}`,{...r,householdIds:o,id:void 0})}}catch{}}async function wu(n,e){const t=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog"];for(const s of t){const i=await Ue(`households/${n}/${s}`);for(const r of i){const o=r.id,c={...r};delete c.id,await ee(`households/${e}/${s}/${o}`,c)}}}async function Cw(n){var u,d;const e=n.uid;console.log(`[resolveHousehold] ENTER — uid=${e}`);const t=await me(`users/${e}`);if(console.log("[resolveHousehold] userDoc=",t),t){const m=(u=t.householdIds)!=null&&u.length?t.householdIds[0]:e;console.log(`[resolveHousehold] RETURNING USER — hid=${m}, householdIds=`,t.householdIds);const v=localStorage.getItem("ks-h");return console.log(`[resolveHousehold] RETURNING USER — ks-h="${v}", hid="${m}", uid="${e}"`),console.log(`[resolveHousehold] RETURNING USER — migration condition: oldHid=${!!v}, oldHid!==hid=${v!==m}, oldHid!==uid=${v!==e}`),v&&v!==m&&v!==e?(console.log(`[resolveHousehold] LATE MIGRATION TRIGGERED: ${v} → ${m}`),await wu(v,m),localStorage.removeItem("ks-h"),console.log("[resolveHousehold] Late migration DONE, ks-h removed")):console.log("[resolveHousehold] RETURNING USER — NO migration needed"),m}console.log("[resolveHousehold] FIRST-TIME LOGIN — no userDoc found");const s=localStorage.getItem("ks-h"),i=s&&s!==e;console.log(`[resolveHousehold] FIRST-TIME — ks-h="${s}", hasOldData=${i}`);const r=((d=p.cfg)==null?void 0:d.name)||"My Kitchen";console.log(`[resolveHousehold] FIRST-TIME — creating household, cfgName="${r}"`),await Md(e,i?r:"My Kitchen"),i&&(console.log(`[resolveHousehold] FIRST-TIME MIGRATION: ${s} → ${e}`),await wu(s,e),console.log("[resolveHousehold] FIRST-TIME MIGRATION DONE"));const o=await ia(n);o.householdIds=[e],await ee(`users/${e}`,o),console.log("[resolveHousehold] User profile created & saved"),localStorage.removeItem("ks-h");const c=$e("ks-hhs");if(c){const m=c.filter(v=>v!==s);m.includes(e)||m.push(e),localStorage.setItem("ks-hhs",JSON.stringify(m))}return console.log(`[resolveHousehold] EXIT — returning uid=${e}`),e}async function Sn(n,e){e?(p.mp[n]=e,await ee(`households/${p.hid}/mealplan/${n}`,{date:n,meal:e})):(delete p.mp[n],await on(`households/${p.hid}/mealplan/${n}`))}async function Or(){await ee(`households/${p.hid}/settings/config`,p.cfg)}async function $d(n,e){const t={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:e||ra(),loggedAt:new Date().toISOString()};p.cookLog.unshift(t),p.cookLog.length>200&&(p.cookLog=p.cookLog.slice(0,200)),await ee(`households/${p.hid}/cooklog/${t.id}`,t)}async function Rw(n){if(p.wasteLog.find(t=>t.name===n&&t.date===ra()))return;const e={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:ra(),loggedAt:new Date().toISOString()};p.wasteLog.unshift(e),p.wasteLog.length>100&&(p.wasteLog=p.wasteLog.slice(0,100)),await ee(`households/${p.hid}/wastelog/${e.id}`,e)}async function Pw(){try{try{const r=await me(`households/${p.hid}`);r&&r.inviteCode&&(await me(`household_codes/${r.inviteCode}`)||(await ee(`household_codes/${r.inviteCode}`,{householdId:p.hid}),console.log(`[backfill] Created household_codes/${r.inviteCode} for household ${p.hid}`)))}catch(r){console.warn("[backfill] household_codes backfill skipped:",r.message)}const e=(await Ue(`households/${p.hid}/settings`)).find(r=>r.id==="config");if(e)p.cfg={...or,...e};else{const r=$e("ks-c");p.cfg={...or,...r||{}},await Or(),r&&localStorage.removeItem("ks-c")}const t=await Ue(`households/${p.hid}/mealplan`);if(p.mp={},t.forEach(r=>{r.date&&r.meal&&(p.mp[r.date]=r.meal)}),!t.length){const r=$e("ks-m");if(r&&Object.keys(r).length){p.mp=r;for(const[o,c]of Object.entries(r))await Sn(o,c);localStorage.removeItem("ks-m")}}const s=await Ue(`households/${p.hid}/cooklog`);if(s.length)p.cookLog=s.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=$e("ks-cooklog");if(r&&r.length){p.cookLog=r.map((o,c)=>({id:o.id||(Date.now()-c).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of p.cookLog)await ee(`households/${p.hid}/cooklog/${o.id}`,o);localStorage.removeItem("ks-cooklog")}}const i=await Ue(`households/${p.hid}/wastelog`);if(i.length)p.wasteLog=i.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=$e("ks-waste");if(r&&r.length){p.wasteLog=r.map((o,c)=>({id:o.id||(Date.now()-c).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of p.wasteLog)await ee(`households/${p.hid}/wastelog/${o.id}`,o);localStorage.removeItem("ks-waste")}}}catch(n){console.error("loadFirestoreData error:",n)}}let Hs=0;function rs(){Hs++,Hs===1&&window._pollIntervalId&&(clearInterval(window._pollIntervalId),window._pollIntervalId=null)}function os(){Hs--,Hs<=0&&(Hs=0,window._pollFn&&!window._pollIntervalId&&(window._pollFn(),window._pollIntervalId=setInterval(window._pollFn,3e4)))}const $={renderAll:null,renderSum:null,renderRecs:null,renderShop:null};function le(n){var s;const e=document.getElementById("sdot"),t=document.getElementById("slb");e&&(e.className="sdot "+n),t&&(t.textContent=n==="synced"?"🏠 "+(((s=p.cfg)==null?void 0:s.name)||p.hid):n==="syncing"?"Syncing…":"Sync error")}async function Le(n){var e,t;le("syncing"),rs();try{const s=!p.inv.find(i=>i.id===n.id);p.inv=[...p.inv.filter(i=>i.id!==n.id),n],(e=$.renderAll)==null||e.call($),(t=$.renderSum)==null||t.call($),await ee(`households/${p.hid}/inventory/${n.id}`,n),s&&Qa("added",n.name+" to inventory"),le("synced")}catch(s){console.error(s),le("error")}finally{os()}}async function Ka(n){var e,t;le("syncing"),rs();try{const s=p.inv.find(i=>i.id===n);p.inv=p.inv.filter(i=>i.id!==n),(e=$.renderAll)==null||e.call($),(t=$.renderSum)==null||t.call($),await on(`households/${p.hid}/inventory/${n}`),s&&Qa("removed",s.name+" from inventory"),le("synced")}catch(s){console.error(s),le("error")}finally{os()}}async function Qt(n){var e,t;rs();try{p.recs=[...p.recs.filter(s=>s.id!==n.id),n],(e=$.renderRecs)==null||e.call($),(t=$.renderSum)==null||t.call($),await ee(`households/${p.hid}/recipes/${n.id}`,n)}catch(s){console.error(s)}finally{os()}}async function xw(n){var e,t;rs();try{p.recs=p.recs.filter(s=>s.id!==n),(e=$.renderRecs)==null||e.call($),(t=$.renderSum)==null||t.call($),await on(`households/${p.hid}/recipes/${n}`)}catch(s){console.error(s)}finally{os()}}async function Ie(n){var e,t;rs();try{const s=!p.shop.find(i=>i.id===n.id);p.shop=[...p.shop.filter(i=>i.id!==n.id),n],(e=$.renderShop)==null||e.call($),(t=$.renderSum)==null||t.call($),await ee(`households/${p.hid}/shopping/${n.id}`,n),s&&Qa("added",n.name+" to shopping list")}catch(s){console.error(s)}finally{os()}}async function Mr(n){var e,t;rs();try{p.shop=p.shop.filter(s=>s.id!==n),(e=$.renderShop)==null||e.call($),(t=$.renderSum)==null||t.call($),await on(`households/${p.hid}/shopping/${n}`)}catch(s){console.error(s)}finally{os()}}async function Lw(n,e,t){var r;const s=n.id,i={title:n.name,ingredients:n.description||"",steps:n.steps||"",tags:n.tags||[],cuisine:n.cuisine||"",authorName:e||"Anonymous",authorUid:((r=xe())==null?void 0:r.uid)||"",householdId:t||p.hid,createdAt:new Date().toISOString(),likes:0};return await ee(`public_recipes/${s}`,i),{id:s,...i}}async function Dw(n){await on(`public_recipes/${n}`)}async function Nw(){return Ue("public_recipes")}async function Ow(n,e){var o;const t=(o=xe())==null?void 0:o.uid;if(!t)return;const s=`public_recipes/${n}/likes/${t}`;e?await on(s):await ee(s,{likedAt:new Date().toISOString()});const i=await Ue(`public_recipes/${n}/likes`),r=await me(`public_recipes/${n}`);r&&await ee(`public_recipes/${n}`,{...r,likes:i.length,id:void 0})}async function Mw(n,e,t){var o;const s=(o=xe())==null?void 0:o.uid;if(!s||!e.trim())return;const i="cmt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),r={text:e.trim(),authorName:t,authorUid:s,createdAt:new Date().toISOString()};return await ee(`public_recipes/${n}/comments/${i}`,r),{id:i,...r}}async function Vw(n){return Ue(`public_recipes/${n}/comments`)}async function $w(n){var s;const e=(s=xe())==null?void 0:s.uid;return e?!!await me(`public_recipes/${n}/likes/${e}`):!1}async function Uw(n){const t={id:"rec-"+Date.now(),name:n.title,description:n.ingredients||"",notes:n.steps||"",tags:n.tags||[],rating:0,favorited:!1,source:"Community",sourceUrl:null,cookCount:0,savedAt:new Date().toLocaleDateString()};return await Qt(t),t}async function Qa(n,e){if(!p.hid||!e)return;const t=localStorage.getItem("ks-who")||"Someone",s="act-"+Date.now().toString(36)+Math.random().toString(36).slice(2),i={memberName:t,action:n,itemName:e,timestamp:new Date().toISOString()};try{await ee(`households/${p.hid}/activity/${s}`,i),Fw()}catch{}}async function Fw(){try{const n=await Ue(`households/${p.hid}/activity`),e=Date.now()-10080*60*1e3;for(const t of n)t.timestamp&&new Date(t.timestamp).getTime()<e&&await on(`households/${p.hid}/activity/${t.id}`)}catch{}}async function jw(){try{return(await Ue(`households/${p.hid}/activity`)).sort((e,t)=>new Date(t.timestamp||0)-new Date(e.timestamp||0)).slice(0,10)}catch{return[]}}function ra(){return new Date().toISOString().split("T")[0]}function f(n){return document.getElementById(n)}function Ut(){return new Date().toISOString().split("T")[0]}function as(){const n=new Date;n.setHours(0,0,0,0);const e=new Date(n);return e.setDate(n.getDate()-n.getDay()),Array.from({length:7},(t,s)=>{const i=new Date(e);return i.setDate(e.getDate()+s),i})}function Bw(){const n=new Date;return n.setDate(n.getDate()+1),n.toISOString().split("T")[0]}function dt(n){if(!n)return null;const e=new Date;e.setHours(0,0,0,0);const t=new Date(n+"T00:00:00"),s=Math.round((t-e)/864e5);return s<0?{c:"expired",l:"Expired"}:s===0?{c:"expiring",l:"Expires today"}:s<=7?{c:"expiring",l:`Expires in ${s}d`}:{c:"ok",l:t.toLocaleDateString("en-US",{month:"short",day:"numeric"})}}function Ja(n){return{fridge:"🌡 Fridge",freezer:"🧊 Freezer",pantry:"🥫 Pantry"}[n]||n}const Ya={Produce:"🥦",Proteins:"🍗",Dairy:"🧀",Grains:"🌾",Condiments:"🧴",Snacks:"🍿",Beverages:"🥤",Frozen:"❄️",General:"📦",Imported:"📥"};function Jt(n){const e=(n.name||"").toLowerCase(),t=(n.category||"").toLowerCase();return t.includes("produce")||t.includes("vegetable")||t.includes("fruit")||e.match(/apple|banana|broccoli|carrot|celery|cabbage|tomato|onion|garlic|jalap|spinach|mushroom|squash|lettuce|cucumber|pepper/)?"Produce":t.includes("protein")||t.includes("meat")||t.includes("seafood")||t.includes("poultry")||e.match(/chicken|beef|lamb|turkey|salmon|cod|tuna|fish|steak|pork|shrimp/)?"Proteins":t.includes("dairy")||t.includes("egg")||e.match(/egg|butter|cheese|milk|cream|yogurt|ghee/)?"Dairy":t.includes("grain")||t.includes("bread")||t.includes("pasta")||e.match(/rice|pasta|bread|flour|oat|cereal|grain|noodle|tortilla/)?"Grains":t.includes("condiment")||t.includes("sauce")||e.match(/sauce|ketchup|mustard|oil|vinegar|salt|pepper|spice|herb|seasoning|mayo/)?"Condiments":n.location==="freezer"?"Frozen":"General"}function Hw(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/^[-•]\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/\n/g,"<br>")}let No=null;function P(n){const e=f("notif");e&&(e.textContent=n,e.style.display="block",e.style.animation="none",e.offsetWidth,e.style.animation="fn 2.5s ease forwards",No&&clearTimeout(No),No=setTimeout(()=>e.style.display="none",2500))}function At(n){var e;(e=f("ov-"+n))==null||e.classList.add("active")}function Pe(n){var e;(e=f("ov-"+n))==null||e.classList.remove("active")}function qs(n,e){const t=f(n);t&&t.querySelectorAll(".star").forEach((s,i)=>{s.textContent=i<e?"★":"☆",s.classList.toggle("on",i<e)})}function Xa(n){const e=n.toLowerCase();return/frozen|ice cream|pizza|nugget|waffle|tater|edamame|popsicle/.test(e)?"freezer":/milk|cheese|yogurt|butter|cream|egg|meat|chicken|beef|pork|fish|salmon|shrimp|tofu|deli|bacon|sausage|produce|lettuce|spinach|berry|berries|fruit|vegetable|carrot|broccoli|juice/.test(e)?"fridge":"pantry"}const qw={Produce:["apple","banana","carrot","celery","onion","garlic","tomato","lettuce","cucumber","pepper","broccoli","spinach","mushroom","lemon","lime","herb","cabbage","squash","jalap","avocado","potato","ginger"],"Meat & Fish":["chicken","beef","lamb","turkey","salmon","cod","tuna","fish","steak","shrimp","pork","bacon","sausage","ground"],"Dairy & Eggs":["egg","butter","cheese","milk","cream","yogurt","ghee","kefir"],Frozen:["frozen","ice cream","pizza","nugget","waffle","edamame","okra","lima","broccoli floret"],Pantry:["rice","pasta","flour","oil","vinegar","sauce","spice","salt","pepper","sugar","honey","oat","bread","can","bean","lentil","chickpea","stock","broth"],"Snacks & Drinks":["chip","cracker","cookie","juice","soda","water","tea","coffee","snack","nut","seed"]};function zw(n){const e=n.toLowerCase();for(const[t,s]of Object.entries(qw))if(s.some(i=>e.includes(i)))return t;return"Other"}var _u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qt,Ud;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function _(){}_.prototype=y.prototype,b.F=y.prototype,b.prototype=new _,b.prototype.constructor=b,b.D=function(I,E,A){for(var w=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)w[Fe-2]=arguments[Fe];return y.prototype[E].apply(I,w)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,y,_){_||(_=0);const I=Array(16);if(typeof y=="string")for(var E=0;E<16;++E)I[E]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(E=0;E<16;++E)I[E]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=b.g[0],_=b.g[1],E=b.g[2];let A=b.g[3],w;w=y+(A^_&(E^A))+I[0]+3614090360&4294967295,y=_+(w<<7&4294967295|w>>>25),w=A+(E^y&(_^E))+I[1]+3905402710&4294967295,A=y+(w<<12&4294967295|w>>>20),w=E+(_^A&(y^_))+I[2]+606105819&4294967295,E=A+(w<<17&4294967295|w>>>15),w=_+(y^E&(A^y))+I[3]+3250441966&4294967295,_=E+(w<<22&4294967295|w>>>10),w=y+(A^_&(E^A))+I[4]+4118548399&4294967295,y=_+(w<<7&4294967295|w>>>25),w=A+(E^y&(_^E))+I[5]+1200080426&4294967295,A=y+(w<<12&4294967295|w>>>20),w=E+(_^A&(y^_))+I[6]+2821735955&4294967295,E=A+(w<<17&4294967295|w>>>15),w=_+(y^E&(A^y))+I[7]+4249261313&4294967295,_=E+(w<<22&4294967295|w>>>10),w=y+(A^_&(E^A))+I[8]+1770035416&4294967295,y=_+(w<<7&4294967295|w>>>25),w=A+(E^y&(_^E))+I[9]+2336552879&4294967295,A=y+(w<<12&4294967295|w>>>20),w=E+(_^A&(y^_))+I[10]+4294925233&4294967295,E=A+(w<<17&4294967295|w>>>15),w=_+(y^E&(A^y))+I[11]+2304563134&4294967295,_=E+(w<<22&4294967295|w>>>10),w=y+(A^_&(E^A))+I[12]+1804603682&4294967295,y=_+(w<<7&4294967295|w>>>25),w=A+(E^y&(_^E))+I[13]+4254626195&4294967295,A=y+(w<<12&4294967295|w>>>20),w=E+(_^A&(y^_))+I[14]+2792965006&4294967295,E=A+(w<<17&4294967295|w>>>15),w=_+(y^E&(A^y))+I[15]+1236535329&4294967295,_=E+(w<<22&4294967295|w>>>10),w=y+(E^A&(_^E))+I[1]+4129170786&4294967295,y=_+(w<<5&4294967295|w>>>27),w=A+(_^E&(y^_))+I[6]+3225465664&4294967295,A=y+(w<<9&4294967295|w>>>23),w=E+(y^_&(A^y))+I[11]+643717713&4294967295,E=A+(w<<14&4294967295|w>>>18),w=_+(A^y&(E^A))+I[0]+3921069994&4294967295,_=E+(w<<20&4294967295|w>>>12),w=y+(E^A&(_^E))+I[5]+3593408605&4294967295,y=_+(w<<5&4294967295|w>>>27),w=A+(_^E&(y^_))+I[10]+38016083&4294967295,A=y+(w<<9&4294967295|w>>>23),w=E+(y^_&(A^y))+I[15]+3634488961&4294967295,E=A+(w<<14&4294967295|w>>>18),w=_+(A^y&(E^A))+I[4]+3889429448&4294967295,_=E+(w<<20&4294967295|w>>>12),w=y+(E^A&(_^E))+I[9]+568446438&4294967295,y=_+(w<<5&4294967295|w>>>27),w=A+(_^E&(y^_))+I[14]+3275163606&4294967295,A=y+(w<<9&4294967295|w>>>23),w=E+(y^_&(A^y))+I[3]+4107603335&4294967295,E=A+(w<<14&4294967295|w>>>18),w=_+(A^y&(E^A))+I[8]+1163531501&4294967295,_=E+(w<<20&4294967295|w>>>12),w=y+(E^A&(_^E))+I[13]+2850285829&4294967295,y=_+(w<<5&4294967295|w>>>27),w=A+(_^E&(y^_))+I[2]+4243563512&4294967295,A=y+(w<<9&4294967295|w>>>23),w=E+(y^_&(A^y))+I[7]+1735328473&4294967295,E=A+(w<<14&4294967295|w>>>18),w=_+(A^y&(E^A))+I[12]+2368359562&4294967295,_=E+(w<<20&4294967295|w>>>12),w=y+(_^E^A)+I[5]+4294588738&4294967295,y=_+(w<<4&4294967295|w>>>28),w=A+(y^_^E)+I[8]+2272392833&4294967295,A=y+(w<<11&4294967295|w>>>21),w=E+(A^y^_)+I[11]+1839030562&4294967295,E=A+(w<<16&4294967295|w>>>16),w=_+(E^A^y)+I[14]+4259657740&4294967295,_=E+(w<<23&4294967295|w>>>9),w=y+(_^E^A)+I[1]+2763975236&4294967295,y=_+(w<<4&4294967295|w>>>28),w=A+(y^_^E)+I[4]+1272893353&4294967295,A=y+(w<<11&4294967295|w>>>21),w=E+(A^y^_)+I[7]+4139469664&4294967295,E=A+(w<<16&4294967295|w>>>16),w=_+(E^A^y)+I[10]+3200236656&4294967295,_=E+(w<<23&4294967295|w>>>9),w=y+(_^E^A)+I[13]+681279174&4294967295,y=_+(w<<4&4294967295|w>>>28),w=A+(y^_^E)+I[0]+3936430074&4294967295,A=y+(w<<11&4294967295|w>>>21),w=E+(A^y^_)+I[3]+3572445317&4294967295,E=A+(w<<16&4294967295|w>>>16),w=_+(E^A^y)+I[6]+76029189&4294967295,_=E+(w<<23&4294967295|w>>>9),w=y+(_^E^A)+I[9]+3654602809&4294967295,y=_+(w<<4&4294967295|w>>>28),w=A+(y^_^E)+I[12]+3873151461&4294967295,A=y+(w<<11&4294967295|w>>>21),w=E+(A^y^_)+I[15]+530742520&4294967295,E=A+(w<<16&4294967295|w>>>16),w=_+(E^A^y)+I[2]+3299628645&4294967295,_=E+(w<<23&4294967295|w>>>9),w=y+(E^(_|~A))+I[0]+4096336452&4294967295,y=_+(w<<6&4294967295|w>>>26),w=A+(_^(y|~E))+I[7]+1126891415&4294967295,A=y+(w<<10&4294967295|w>>>22),w=E+(y^(A|~_))+I[14]+2878612391&4294967295,E=A+(w<<15&4294967295|w>>>17),w=_+(A^(E|~y))+I[5]+4237533241&4294967295,_=E+(w<<21&4294967295|w>>>11),w=y+(E^(_|~A))+I[12]+1700485571&4294967295,y=_+(w<<6&4294967295|w>>>26),w=A+(_^(y|~E))+I[3]+2399980690&4294967295,A=y+(w<<10&4294967295|w>>>22),w=E+(y^(A|~_))+I[10]+4293915773&4294967295,E=A+(w<<15&4294967295|w>>>17),w=_+(A^(E|~y))+I[1]+2240044497&4294967295,_=E+(w<<21&4294967295|w>>>11),w=y+(E^(_|~A))+I[8]+1873313359&4294967295,y=_+(w<<6&4294967295|w>>>26),w=A+(_^(y|~E))+I[15]+4264355552&4294967295,A=y+(w<<10&4294967295|w>>>22),w=E+(y^(A|~_))+I[6]+2734768916&4294967295,E=A+(w<<15&4294967295|w>>>17),w=_+(A^(E|~y))+I[13]+1309151649&4294967295,_=E+(w<<21&4294967295|w>>>11),w=y+(E^(_|~A))+I[4]+4149444226&4294967295,y=_+(w<<6&4294967295|w>>>26),w=A+(_^(y|~E))+I[11]+3174756917&4294967295,A=y+(w<<10&4294967295|w>>>22),w=E+(y^(A|~_))+I[2]+718787259&4294967295,E=A+(w<<15&4294967295|w>>>17),w=_+(A^(E|~y))+I[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(E+(w<<21&4294967295|w>>>11))&4294967295,b.g[2]=b.g[2]+E&4294967295,b.g[3]=b.g[3]+A&4294967295}s.prototype.v=function(b,y){y===void 0&&(y=b.length);const _=y-this.blockSize,I=this.C;let E=this.h,A=0;for(;A<y;){if(E==0)for(;A<=_;)i(this,b,A),A+=this.blockSize;if(typeof b=="string"){for(;A<y;)if(I[E++]=b.charCodeAt(A++),E==this.blockSize){i(this,I),E=0;break}}else for(;A<y;)if(I[E++]=b[A++],E==this.blockSize){i(this,I),E=0;break}}this.h=E,this.o+=y},s.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;y=this.o*8;for(var _=b.length-8;_<b.length;++_)b[_]=y&255,y/=256;for(this.v(b),b=Array(16),y=0,_=0;_<4;++_)for(let I=0;I<32;I+=8)b[y++]=this.g[_]>>>I&255;return b};function r(b,y){var _=c;return Object.prototype.hasOwnProperty.call(_,b)?_[b]:_[b]=y(b)}function o(b,y){this.h=y;const _=[];let I=!0;for(let E=b.length-1;E>=0;E--){const A=b[E]|0;I&&A==y||(_[E]=A,I=!1)}this.g=_}var c={};function u(b){return-128<=b&&b<128?r(b,function(y){return new o([y|0],y<0?-1:0)}):new o([b|0],b<0?-1:0)}function d(b){if(isNaN(b)||!isFinite(b))return v;if(b<0)return N(d(-b));const y=[];let _=1;for(let I=0;b>=_;I++)y[I]=b/_|0,_*=4294967296;return new o(y,0)}function m(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return N(m(b.substring(1),y));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=d(Math.pow(y,8));let I=v;for(let A=0;A<b.length;A+=8){var E=Math.min(8,b.length-A);const w=parseInt(b.substring(A,A+E),y);E<8?(E=d(Math.pow(y,E)),I=I.j(E).add(d(w))):(I=I.j(_),I=I.add(d(w)))}return I}var v=u(0),T=u(1),C=u(16777216);n=o.prototype,n.m=function(){if(M(this))return-N(this).m();let b=0,y=1;for(let _=0;_<this.g.length;_++){const I=this.i(_);b+=(I>=0?I:4294967296+I)*y,y*=4294967296}return b},n.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(D(this))return"0";if(M(this))return"-"+N(this).toString(b);const y=d(Math.pow(b,6));var _=this;let I="";for(;;){const E=j(_,y).g;_=z(_,E.j(y));let A=((_.g.length>0?_.g[0]:_.h)>>>0).toString(b);if(_=E,D(_))return A+I;for(;A.length<6;)A="0"+A;I=A+I}},n.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function D(b){if(b.h!=0)return!1;for(let y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function M(b){return b.h==-1}n.l=function(b){return b=z(this,b),M(b)?-1:D(b)?0:1};function N(b){const y=b.g.length,_=[];for(let I=0;I<y;I++)_[I]=~b.g[I];return new o(_,~b.h).add(T)}n.abs=function(){return M(this)?N(this):this},n.add=function(b){const y=Math.max(this.g.length,b.g.length),_=[];let I=0;for(let E=0;E<=y;E++){let A=I+(this.i(E)&65535)+(b.i(E)&65535),w=(A>>>16)+(this.i(E)>>>16)+(b.i(E)>>>16);I=w>>>16,A&=65535,w&=65535,_[E]=w<<16|A}return new o(_,_[_.length-1]&-2147483648?-1:0)};function z(b,y){return b.add(N(y))}n.j=function(b){if(D(this)||D(b))return v;if(M(this))return M(b)?N(this).j(N(b)):N(N(this).j(b));if(M(b))return N(this.j(N(b)));if(this.l(C)<0&&b.l(C)<0)return d(this.m()*b.m());const y=this.g.length+b.g.length,_=[];for(var I=0;I<2*y;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(let E=0;E<b.g.length;E++){const A=this.i(I)>>>16,w=this.i(I)&65535,Fe=b.i(E)>>>16,an=b.i(E)&65535;_[2*I+2*E]+=w*an,G(_,2*I+2*E),_[2*I+2*E+1]+=A*an,G(_,2*I+2*E+1),_[2*I+2*E+1]+=w*Fe,G(_,2*I+2*E+1),_[2*I+2*E+2]+=A*Fe,G(_,2*I+2*E+2)}for(b=0;b<y;b++)_[b]=_[2*b+1]<<16|_[2*b];for(b=y;b<2*y;b++)_[b]=0;return new o(_,0)};function G(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function V(b,y){this.g=b,this.h=y}function j(b,y){if(D(y))throw Error("division by zero");if(D(b))return new V(v,v);if(M(b))return y=j(N(b),y),new V(N(y.g),N(y.h));if(M(y))return y=j(b,N(y)),new V(N(y.g),y.h);if(b.g.length>30){if(M(b)||M(y))throw Error("slowDivide_ only works with positive integers.");for(var _=T,I=y;I.l(b)<=0;)_=K(_),I=K(I);var E=te(_,1),A=te(I,1);for(I=te(I,2),_=te(_,2);!D(I);){var w=A.add(I);w.l(b)<=0&&(E=E.add(_),A=w),I=te(I,1),_=te(_,1)}return y=z(b,E.j(y)),new V(E,y)}for(E=v;b.l(y)>=0;){for(_=Math.max(1,Math.floor(b.m()/y.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),A=d(_),w=A.j(y);M(w)||w.l(b)>0;)_-=I,A=d(_),w=A.j(y);D(A)&&(A=T),E=E.add(A),b=z(b,w)}return new V(E,b)}n.B=function(b){return j(this,b).h},n.and=function(b){const y=Math.max(this.g.length,b.g.length),_=[];for(let I=0;I<y;I++)_[I]=this.i(I)&b.i(I);return new o(_,this.h&b.h)},n.or=function(b){const y=Math.max(this.g.length,b.g.length),_=[];for(let I=0;I<y;I++)_[I]=this.i(I)|b.i(I);return new o(_,this.h|b.h)},n.xor=function(b){const y=Math.max(this.g.length,b.g.length),_=[];for(let I=0;I<y;I++)_[I]=this.i(I)^b.i(I);return new o(_,this.h^b.h)};function K(b){const y=b.g.length+1,_=[];for(let I=0;I<y;I++)_[I]=b.i(I)<<1|b.i(I-1)>>>31;return new o(_,b.h)}function te(b,y){const _=y>>5;y%=32;const I=b.g.length-_,E=[];for(let A=0;A<I;A++)E[A]=y>0?b.i(A+_)>>>y|b.i(A+_+1)<<32-y:b.i(A+_);return new o(E,b.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Ud=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=m,qt=o}).apply(typeof _u<"u"?_u:typeof self<"u"?self:typeof window<"u"?window:{});var Mi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fd,Ms,jd,Yi,oa,Bd,Hd,qd;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mi=="object"&&Mi];for(var l=0;l<a.length;++l){var h=a[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var s=t(this);function i(a,l){if(l)e:{var h=s;a=a.split(".");for(var g=0;g<a.length-1;g++){var S=a[g];if(!(S in h))break e;h=h[S]}a=a[a.length-1],g=h[a],l=l(g),l!=g&&l!=null&&e(h,a,{configurable:!0,writable:!0,value:l})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(l){var h=[],g;for(g in l)Object.prototype.hasOwnProperty.call(l,g)&&h.push([g,l[g]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},o=this||self;function c(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function u(a,l,h){return a.call.apply(a.bind,arguments)}function d(a,l,h){return d=u,d.apply(null,arguments)}function m(a,l){var h=Array.prototype.slice.call(arguments,1);return function(){var g=h.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function v(a,l){function h(){}h.prototype=l.prototype,a.Z=l.prototype,a.prototype=new h,a.prototype.constructor=a,a.Ob=function(g,S,k){for(var x=Array(arguments.length-2),W=2;W<arguments.length;W++)x[W-2]=arguments[W];return l.prototype[S].apply(g,x)}}var T=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function C(a){const l=a.length;if(l>0){const h=Array(l);for(let g=0;g<l;g++)h[g]=a[g];return h}return[]}function D(a,l){for(let g=1;g<arguments.length;g++){const S=arguments[g];var h=typeof S;if(h=h!="object"?h:S?Array.isArray(S)?"array":h:"null",h=="array"||h=="object"&&typeof S.length=="number"){h=a.length||0;const k=S.length||0;a.length=h+k;for(let x=0;x<k;x++)a[h+x]=S[x]}else a.push(S)}}class M{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function N(a){o.setTimeout(()=>{throw a},0)}function z(){var a=b;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class G{constructor(){this.h=this.g=null}add(l,h){const g=V.get();g.set(l,h),this.h?this.h.next=g:this.g=g,this.h=g}}var V=new M(()=>new j,a=>a.reset());class j{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let K,te=!1,b=new G,y=()=>{const a=Promise.resolve(void 0);K=()=>{a.then(_)}};function _(){for(var a;a=z();){try{a.h.call(a.g)}catch(h){N(h)}var l=V;l.j(a),l.h<100&&(l.h++,a.next=l.g,l.g=a)}te=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const h=()=>{};o.addEventListener("test",h,l),o.removeEventListener("test",h,l)}catch{}return a})();function w(a){return/^[\s\xa0]*$/.test(a)}function Fe(a,l){E.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,l)}v(Fe,E),Fe.prototype.init=function(a,l){const h=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget,l||(h=="mouseover"?l=a.fromElement:h=="mouseout"&&(l=a.toElement)),this.relatedTarget=l,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Fe.Z.h.call(this)},Fe.prototype.h=function(){Fe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var an="closure_listenable_"+(Math.random()*1e6|0),Fp=0;function jp(a,l,h,g,S){this.listener=a,this.proxy=null,this.src=l,this.type=h,this.capture=!!g,this.ha=S,this.key=++Fp,this.da=this.fa=!1}function _i(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function bi(a,l,h){for(const g in a)l.call(h,a[g],g,a)}function Bp(a,l){for(const h in a)l.call(void 0,a[h],h,a)}function jc(a){const l={};for(const h in a)l[h]=a[h];return l}const Bc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Hc(a,l){let h,g;for(let S=1;S<arguments.length;S++){g=arguments[S];for(h in g)a[h]=g[h];for(let k=0;k<Bc.length;k++)h=Bc[k],Object.prototype.hasOwnProperty.call(g,h)&&(a[h]=g[h])}}function Ti(a){this.src=a,this.g={},this.h=0}Ti.prototype.add=function(a,l,h,g,S){const k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);const x=so(a,l,g,S);return x>-1?(l=a[x],h||(l.fa=!1)):(l=new jp(l,this.src,k,!!g,S),l.fa=h,a.push(l)),l};function no(a,l){const h=l.type;if(h in a.g){var g=a.g[h],S=Array.prototype.indexOf.call(g,l,void 0),k;(k=S>=0)&&Array.prototype.splice.call(g,S,1),k&&(_i(l),a.g[h].length==0&&(delete a.g[h],a.h--))}}function so(a,l,h,g){for(let S=0;S<a.length;++S){const k=a[S];if(!k.da&&k.listener==l&&k.capture==!!h&&k.ha==g)return S}return-1}var io="closure_lm_"+(Math.random()*1e6|0),ro={};function qc(a,l,h,g,S){if(Array.isArray(l)){for(let k=0;k<l.length;k++)qc(a,l[k],h,g,S);return null}return h=Gc(h),a&&a[an]?a.J(l,h,c(g)?!!g.capture:!1,S):Hp(a,l,h,!1,g,S)}function Hp(a,l,h,g,S,k){if(!l)throw Error("Invalid event type");const x=c(S)?!!S.capture:!!S;let W=ao(a);if(W||(a[io]=W=new Ti(a)),h=W.add(l,h,g,x,k),h.proxy)return h;if(g=qp(),h.proxy=g,g.src=a,g.listener=h,a.addEventListener)A||(S=x),S===void 0&&(S=!1),a.addEventListener(l.toString(),g,S);else if(a.attachEvent)a.attachEvent(Wc(l.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return h}function qp(){function a(h){return l.call(a.src,a.listener,h)}const l=zp;return a}function zc(a,l,h,g,S){if(Array.isArray(l))for(var k=0;k<l.length;k++)zc(a,l[k],h,g,S);else g=c(g)?!!g.capture:!!g,h=Gc(h),a&&a[an]?(a=a.i,k=String(l).toString(),k in a.g&&(l=a.g[k],h=so(l,h,g,S),h>-1&&(_i(l[h]),Array.prototype.splice.call(l,h,1),l.length==0&&(delete a.g[k],a.h--)))):a&&(a=ao(a))&&(l=a.g[l.toString()],a=-1,l&&(a=so(l,h,g,S)),(h=a>-1?l[a]:null)&&oo(h))}function oo(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[an])no(l.i,a);else{var h=a.type,g=a.proxy;l.removeEventListener?l.removeEventListener(h,g,a.capture):l.detachEvent?l.detachEvent(Wc(h),g):l.addListener&&l.removeListener&&l.removeListener(g),(h=ao(l))?(no(h,a),h.h==0&&(h.src=null,l[io]=null)):_i(a)}}}function Wc(a){return a in ro?ro[a]:ro[a]="on"+a}function zp(a,l){if(a.da)a=!0;else{l=new Fe(l,this);const h=a.listener,g=a.ha||a.src;a.fa&&oo(a),a=h.call(g,l)}return a}function ao(a){return a=a[io],a instanceof Ti?a:null}var co="__closure_events_fn_"+(Math.random()*1e9>>>0);function Gc(a){return typeof a=="function"?a:(a[co]||(a[co]=function(l){return a.handleEvent(l)}),a[co])}function Se(){I.call(this),this.i=new Ti(this),this.M=this,this.G=null}v(Se,I),Se.prototype[an]=!0,Se.prototype.removeEventListener=function(a,l,h,g){zc(this,a,l,h,g)};function De(a,l){var h,g=a.G;if(g)for(h=[];g;g=g.G)h.push(g);if(a=a.M,g=l.type||l,typeof l=="string")l=new E(l,a);else if(l instanceof E)l.target=l.target||a;else{var S=l;l=new E(g,a),Hc(l,S)}S=!0;let k,x;if(h)for(x=h.length-1;x>=0;x--)k=l.g=h[x],S=Ei(k,g,!0,l)&&S;if(k=l.g=a,S=Ei(k,g,!0,l)&&S,S=Ei(k,g,!1,l)&&S,h)for(x=0;x<h.length;x++)k=l.g=h[x],S=Ei(k,g,!1,l)&&S}Se.prototype.N=function(){if(Se.Z.N.call(this),this.i){var a=this.i;for(const l in a.g){const h=a.g[l];for(let g=0;g<h.length;g++)_i(h[g]);delete a.g[l],a.h--}}this.G=null},Se.prototype.J=function(a,l,h,g){return this.i.add(String(a),l,!1,h,g)},Se.prototype.K=function(a,l,h,g){return this.i.add(String(a),l,!0,h,g)};function Ei(a,l,h,g){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();let S=!0;for(let k=0;k<l.length;++k){const x=l[k];if(x&&!x.da&&x.capture==h){const W=x.listener,ge=x.ha||x.src;x.fa&&no(a.i,x),S=W.call(ge,g)!==!1&&S}}return S&&!g.defaultPrevented}function Wp(a,l){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=d(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:o.setTimeout(a,l||0)}function Kc(a){a.g=Wp(()=>{a.g=null,a.i&&(a.i=!1,Kc(a))},a.l);const l=a.h;a.h=null,a.m.apply(null,l)}class Gp extends I{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Kc(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fs(a){I.call(this),this.h=a,this.g={}}v(fs,I);var Qc=[];function Jc(a){bi(a.g,function(l,h){this.g.hasOwnProperty(h)&&oo(l)},a),a.g={}}fs.prototype.N=function(){fs.Z.N.call(this),Jc(this)},fs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var lo=o.JSON.stringify,Kp=o.JSON.parse,Qp=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Yc(){}function Xc(){}var ps={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function uo(){E.call(this,"d")}v(uo,E);function ho(){E.call(this,"c")}v(ho,E);var cn={},Zc=null;function Ii(){return Zc=Zc||new Se}cn.Ia="serverreachability";function el(a){E.call(this,cn.Ia,a)}v(el,E);function ms(a){const l=Ii();De(l,new el(l))}cn.STAT_EVENT="statevent";function tl(a,l){E.call(this,cn.STAT_EVENT,a),this.stat=l}v(tl,E);function Ne(a){const l=Ii();De(l,new tl(l,a))}cn.Ja="timingevent";function nl(a,l){E.call(this,cn.Ja,a),this.size=l}v(nl,E);function gs(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},l)}function ys(){this.g=!0}ys.prototype.ua=function(){this.g=!1};function Jp(a,l,h,g,S,k){a.info(function(){if(a.g)if(k){var x="",W=k.split("&");for(let ne=0;ne<W.length;ne++){var ge=W[ne].split("=");if(ge.length>1){const we=ge[0];ge=ge[1];const tt=we.split("_");x=tt.length>=2&&tt[1]=="type"?x+(we+"="+ge+"&"):x+(we+"=redacted&")}}}else x=null;else x=k;return"XMLHTTP REQ ("+g+") [attempt "+S+"]: "+l+`
`+h+`
`+x})}function Yp(a,l,h,g,S,k,x){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+S+"]: "+l+`
`+h+`
`+k+" "+x})}function Ln(a,l,h,g){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+Zp(a,h)+(g?" "+g:"")})}function Xp(a,l){a.info(function(){return"TIMEOUT: "+l})}ys.prototype.info=function(){};function Zp(a,l){if(!a.g)return l;if(!l)return null;try{const k=JSON.parse(l);if(k){for(a=0;a<k.length;a++)if(Array.isArray(k[a])){var h=k[a];if(!(h.length<2)){var g=h[1];if(Array.isArray(g)&&!(g.length<1)){var S=g[0];if(S!="noop"&&S!="stop"&&S!="close")for(let x=1;x<g.length;x++)g[x]=""}}}}return lo(k)}catch{return l}}var Si={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},sl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},il;function fo(){}v(fo,Yc),fo.prototype.g=function(){return new XMLHttpRequest},il=new fo;function vs(a){return encodeURIComponent(String(a))}function em(a){var l=1;a=a.split(":");const h=[];for(;l>0&&a.length;)h.push(a.shift()),l--;return a.length&&h.push(a.join(":")),h}function kt(a,l,h,g){this.j=a,this.i=l,this.l=h,this.S=g||1,this.V=new fs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new rl}function rl(){this.i=null,this.g="",this.h=!1}var ol={},po={};function mo(a,l,h){a.M=1,a.A=ki(et(l)),a.u=h,a.R=!0,al(a,null)}function al(a,l){a.F=Date.now(),Ai(a),a.B=et(a.A);var h=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),_l(h.i,"t",g),a.C=0,h=a.j.L,a.h=new rl,a.g=$l(a.j,h?l:null,!a.u),a.P>0&&(a.O=new Gp(d(a.Y,a,a.g),a.P)),l=a.V,h=a.g,g=a.ba;var S="readystatechange";Array.isArray(S)||(S&&(Qc[0]=S.toString()),S=Qc);for(let k=0;k<S.length;k++){const x=qc(h,S[k],g||l.handleEvent,!1,l.h||l);if(!x)break;l.g[x.key]=x}l=a.J?jc(a.J):{},a.u?(a.v||(a.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,l)):(a.v="GET",a.g.ea(a.B,a.v,null,l)),ms(),Jp(a.i,a.v,a.B,a.l,a.S,a.u)}kt.prototype.ba=function(a){a=a.target;const l=this.O;l&&Pt(a)==3?l.j():this.Y(a)},kt.prototype.Y=function(a){try{if(a==this.g)e:{const W=Pt(this.g),ge=this.g.ya(),ne=this.g.ca();if(!(W<3)&&(W!=3||this.g&&(this.h.h||this.g.la()||kl(this.g)))){this.K||W!=4||ge==7||(ge==8||ne<=0?ms(3):ms(2)),go(this);var l=this.g.ca();this.X=l;var h=tm(this);if(this.o=l==200,Yp(this.i,this.v,this.B,this.l,this.S,W,l),this.o){if(this.U&&!this.L){t:{if(this.g){var g,S=this.g;if((g=S.g?S.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(g)){var k=g;break t}}k=null}if(a=k)Ln(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,yo(this,a);else{this.o=!1,this.m=3,Ne(12),ln(this),ws(this);break e}}if(this.R){a=!0;let we;for(;!this.K&&this.C<h.length;)if(we=nm(this,h),we==po){W==4&&(this.m=4,Ne(14),a=!1),Ln(this.i,this.l,null,"[Incomplete Response]");break}else if(we==ol){this.m=4,Ne(15),Ln(this.i,this.l,h,"[Invalid Chunk]"),a=!1;break}else Ln(this.i,this.l,we,null),yo(this,we);if(cl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),W!=4||h.length!=0||this.h.h||(this.m=1,Ne(16),a=!1),this.o=this.o&&a,!a)Ln(this.i,this.l,h,"[Invalid Chunked Response]"),ln(this),ws(this);else if(h.length>0&&!this.W){this.W=!0;var x=this.j;x.g==this&&x.aa&&!x.P&&(x.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),So(x),x.P=!0,Ne(11))}}else Ln(this.i,this.l,h,null),yo(this,h);W==4&&ln(this),this.o&&!this.K&&(W==4?Nl(this.j,this):(this.o=!1,Ai(this)))}else gm(this.g),l==400&&h.indexOf("Unknown SID")>0?(this.m=3,Ne(12)):(this.m=0,Ne(13)),ln(this),ws(this)}}}catch{}finally{}};function tm(a){if(!cl(a))return a.g.la();const l=kl(a.g);if(l==="")return"";let h="";const g=l.length,S=Pt(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return ln(a),ws(a),"";a.h.i=new o.TextDecoder}for(let k=0;k<g;k++)a.h.h=!0,h+=a.h.i.decode(l[k],{stream:!(S&&k==g-1)});return l.length=0,a.h.g+=h,a.C=0,a.h.g}function cl(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function nm(a,l){var h=a.C,g=l.indexOf(`
`,h);return g==-1?po:(h=Number(l.substring(h,g)),isNaN(h)?ol:(g+=1,g+h>l.length?po:(l=l.slice(g,g+h),a.C=g+h,l)))}kt.prototype.cancel=function(){this.K=!0,ln(this)};function Ai(a){a.T=Date.now()+a.H,ll(a,a.H)}function ll(a,l){if(a.D!=null)throw Error("WatchDog timer not null");a.D=gs(d(a.aa,a),l)}function go(a){a.D&&(o.clearTimeout(a.D),a.D=null)}kt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Xp(this.i,this.B),this.M!=2&&(ms(),Ne(17)),ln(this),this.m=2,ws(this)):ll(this,this.T-a)};function ws(a){a.j.I==0||a.K||Nl(a.j,a)}function ln(a){go(a);var l=a.O;l&&typeof l.dispose=="function"&&l.dispose(),a.O=null,Jc(a.V),a.g&&(l=a.g,a.g=null,l.abort(),l.dispose())}function yo(a,l){try{var h=a.j;if(h.I!=0&&(h.g==a||vo(h.h,a))){if(!a.L&&vo(h.h,a)&&h.I==3){try{var g=h.Ba.g.parse(l)}catch{g=null}if(Array.isArray(g)&&g.length==3){var S=g;if(S[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<a.F)Li(h),Pi(h);else break e;Io(h),Ne(18)}}else h.xa=S[1],0<h.xa-h.K&&S[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=gs(d(h.Va,h),6e3));dl(h.h)<=1&&h.ta&&(h.ta=void 0)}else hn(h,11)}else if((a.L||h.g==a)&&Li(h),!w(l))for(S=h.Ba.g.parse(l),l=0;l<S.length;l++){let ne=S[l];const we=ne[0];if(!(we<=h.K))if(h.K=we,ne=ne[1],h.I==2)if(ne[0]=="c"){h.M=ne[1],h.ba=ne[2];const tt=ne[3];tt!=null&&(h.ka=tt,h.j.info("VER="+h.ka));const dn=ne[4];dn!=null&&(h.za=dn,h.j.info("SVER="+h.za));const xt=ne[5];xt!=null&&typeof xt=="number"&&xt>0&&(g=1.5*xt,h.O=g,h.j.info("backChannelRequestTimeoutMs_="+g)),g=h;const Lt=a.g;if(Lt){const Ni=Lt.g?Lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ni){var k=g.h;k.g||Ni.indexOf("spdy")==-1&&Ni.indexOf("quic")==-1&&Ni.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(wo(k,k.h),k.h=null))}if(g.G){const Ao=Lt.g?Lt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ao&&(g.wa=Ao,se(g.J,g.G,Ao))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-a.F,h.j.info("Handshake RTT: "+h.T+"ms")),g=h;var x=a;if(g.na=Vl(g,g.L?g.ba:null,g.W),x.L){fl(g.h,x);var W=x,ge=g.O;ge&&(W.H=ge),W.D&&(go(W),Ai(W)),g.g=x}else Ll(g);h.i.length>0&&xi(h)}else ne[0]!="stop"&&ne[0]!="close"||hn(h,7);else h.I==3&&(ne[0]=="stop"||ne[0]=="close"?ne[0]=="stop"?hn(h,7):Eo(h):ne[0]!="noop"&&h.l&&h.l.qa(ne),h.A=0)}}ms(4)}catch{}}var sm=class{constructor(a,l){this.g=a,this.map=l}};function ul(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function hl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function dl(a){return a.h?1:a.g?a.g.size:0}function vo(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function wo(a,l){a.g?a.g.add(l):a.h=l}function fl(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}ul.prototype.cancel=function(){if(this.i=pl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function pl(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let l=a.i;for(const h of a.g.values())l=l.concat(h.G);return l}return C(a.i)}var ml=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function im(a,l){if(a){a=a.split("&");for(let h=0;h<a.length;h++){const g=a[h].indexOf("=");let S,k=null;g>=0?(S=a[h].substring(0,g),k=a[h].substring(g+1)):S=a[h],l(S,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Ct(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;a instanceof Ct?(this.l=a.l,_s(this,a.j),this.o=a.o,this.g=a.g,bs(this,a.u),this.h=a.h,_o(this,bl(a.i)),this.m=a.m):a&&(l=String(a).match(ml))?(this.l=!1,_s(this,l[1]||"",!0),this.o=Ts(l[2]||""),this.g=Ts(l[3]||"",!0),bs(this,l[4]),this.h=Ts(l[5]||"",!0),_o(this,l[6]||"",!0),this.m=Ts(l[7]||"")):(this.l=!1,this.i=new Is(null,this.l))}Ct.prototype.toString=function(){const a=[];var l=this.j;l&&a.push(Es(l,gl,!0),":");var h=this.g;return(h||l=="file")&&(a.push("//"),(l=this.o)&&a.push(Es(l,gl,!0),"@"),a.push(vs(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&a.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push(Es(h,h.charAt(0)=="/"?am:om,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",Es(h,lm)),a.join("")},Ct.prototype.resolve=function(a){const l=et(this);let h=!!a.j;h?_s(l,a.j):h=!!a.o,h?l.o=a.o:h=!!a.g,h?l.g=a.g:h=a.u!=null;var g=a.h;if(h)bs(l,a.u);else if(h=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var S=l.h.lastIndexOf("/");S!=-1&&(g=l.h.slice(0,S+1)+g)}if(S=g,S==".."||S==".")g="";else if(S.indexOf("./")!=-1||S.indexOf("/.")!=-1){g=S.lastIndexOf("/",0)==0,S=S.split("/");const k=[];for(let x=0;x<S.length;){const W=S[x++];W=="."?g&&x==S.length&&k.push(""):W==".."?((k.length>1||k.length==1&&k[0]!="")&&k.pop(),g&&x==S.length&&k.push("")):(k.push(W),g=!0)}g=k.join("/")}else g=S}return h?l.h=g:h=a.i.toString()!=="",h?_o(l,bl(a.i)):h=!!a.m,h&&(l.m=a.m),l};function et(a){return new Ct(a)}function _s(a,l,h){a.j=h?Ts(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function bs(a,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);a.u=l}else a.u=null}function _o(a,l,h){l instanceof Is?(a.i=l,um(a.i,a.l)):(h||(l=Es(l,cm)),a.i=new Is(l,a.l))}function se(a,l,h){a.i.set(l,h)}function ki(a){return se(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ts(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Es(a,l,h){return typeof a=="string"?(a=encodeURI(a).replace(l,rm),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function rm(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var gl=/[#\/\?@]/g,om=/[#\?:]/g,am=/[#\?]/g,cm=/[#\?@]/g,lm=/#/g;function Is(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function un(a){a.g||(a.g=new Map,a.h=0,a.i&&im(a.i,function(l,h){a.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=Is.prototype,n.add=function(a,l){un(this),this.i=null,a=Dn(this,a);let h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(l),this.h+=1,this};function yl(a,l){un(a),l=Dn(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function vl(a,l){return un(a),l=Dn(a,l),a.g.has(l)}n.forEach=function(a,l){un(this),this.g.forEach(function(h,g){h.forEach(function(S){a.call(l,S,g,this)},this)},this)};function wl(a,l){un(a);let h=[];if(typeof l=="string")vl(a,l)&&(h=h.concat(a.g.get(Dn(a,l))));else for(a=Array.from(a.g.values()),l=0;l<a.length;l++)h=h.concat(a[l]);return h}n.set=function(a,l){return un(this),this.i=null,a=Dn(this,a),vl(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},n.get=function(a,l){return a?(a=wl(this,a),a.length>0?String(a[0]):l):l};function _l(a,l,h){yl(a,l),h.length>0&&(a.i=null,a.g.set(Dn(a,l),C(h)),a.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],l=Array.from(this.g.keys());for(let g=0;g<l.length;g++){var h=l[g];const S=vs(h);h=wl(this,h);for(let k=0;k<h.length;k++){let x=S;h[k]!==""&&(x+="="+vs(h[k])),a.push(x)}}return this.i=a.join("&")};function bl(a){const l=new Is;return l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),l}function Dn(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function um(a,l){l&&!a.j&&(un(a),a.i=null,a.g.forEach(function(h,g){const S=g.toLowerCase();g!=S&&(yl(this,g),_l(this,S,h))},a)),a.j=l}function hm(a,l){const h=new ys;if(o.Image){const g=new Image;g.onload=m(Rt,h,"TestLoadImage: loaded",!0,l,g),g.onerror=m(Rt,h,"TestLoadImage: error",!1,l,g),g.onabort=m(Rt,h,"TestLoadImage: abort",!1,l,g),g.ontimeout=m(Rt,h,"TestLoadImage: timeout",!1,l,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else l(!1)}function dm(a,l){const h=new ys,g=new AbortController,S=setTimeout(()=>{g.abort(),Rt(h,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:g.signal}).then(k=>{clearTimeout(S),k.ok?Rt(h,"TestPingServer: ok",!0,l):Rt(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(S),Rt(h,"TestPingServer: error",!1,l)})}function Rt(a,l,h,g,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),g(h)}catch{}}function fm(){this.g=new Qp}function bo(a){this.i=a.Sb||null,this.h=a.ab||!1}v(bo,Yc),bo.prototype.g=function(){return new Ci(this.i,this.h)};function Ci(a,l){Se.call(this),this.H=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}v(Ci,Se),n=Ci.prototype,n.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=l,this.readyState=1,As(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(l.body=a),(this.H||o).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ss(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,As(this)),this.g&&(this.readyState=3,As(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Tl(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Tl(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?Ss(this):As(this),this.readyState==3&&Tl(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,Ss(this))},n.Na=function(a){this.g&&(this.response=a,Ss(this))},n.ga=function(){this.g&&Ss(this)};function Ss(a){a.readyState=4,a.l=null,a.j=null,a.B=null,As(a)}n.setRequestHeader=function(a,l){this.A.append(a,l)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=l.next();return a.join(`\r
`)};function As(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ci.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function El(a){let l="";return bi(a,function(h,g){l+=g,l+=":",l+=h,l+=`\r
`}),l}function To(a,l,h){e:{for(g in h){var g=!1;break e}g=!0}g||(h=El(h),typeof a=="string"?h!=null&&vs(h):se(a,l,h))}function oe(a){Se.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}v(oe,Se);var pm=/^https?$/i,mm=["POST","PUT"];n=oe.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,l,h,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():il.g(),this.g.onreadystatechange=T(d(this.Ca,this));try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(k){Il(this,k);return}if(a=h||"",h=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var S in g)h.set(S,g[S]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const k of g.keys())h.set(k,g.get(k));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(h.keys()).find(k=>k.toLowerCase()=="content-type"),S=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(mm,l,void 0)>=0)||g||S||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,x]of h)this.g.setRequestHeader(k,x);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(k){Il(this,k)}};function Il(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.o=5,Sl(a),Ri(a)}function Sl(a){a.A||(a.A=!0,De(a,"complete"),De(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,De(this,"complete"),De(this,"abort"),Ri(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ri(this,!0)),oe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Al(this):this.Xa())},n.Xa=function(){Al(this)};function Al(a){if(a.h&&typeof r<"u"){if(a.v&&Pt(a)==4)setTimeout(a.Ca.bind(a),0);else if(De(a,"readystatechange"),Pt(a)==4){a.h=!1;try{const k=a.ca();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var g;if(g=k===0){let x=String(a.D).match(ml)[1]||null;!x&&o.self&&o.self.location&&(x=o.self.location.protocol.slice(0,-1)),g=!pm.test(x?x.toLowerCase():"")}h=g}if(h)De(a,"complete"),De(a,"success");else{a.o=6;try{var S=Pt(a)>2?a.g.statusText:""}catch{S=""}a.l=S+" ["+a.ca()+"]",Sl(a)}}finally{Ri(a)}}}}function Ri(a,l){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const h=a.g;a.g=null,l||De(a,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Pt(a){return a.g?a.g.readyState:0}n.ca=function(){try{return Pt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),Kp(l)}};function kl(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function gm(a){const l={};a=(a.g&&Pt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(w(a[g]))continue;var h=em(a[g]);const S=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const k=l[S]||[];l[S]=k,k.push(h)}Bp(l,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ks(a,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||l}function Cl(a){this.za=0,this.i=[],this.j=new ys,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ks("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ks("baseRetryDelayMs",5e3,a),this.Za=ks("retryDelaySeedMs",1e4,a),this.Ta=ks("forwardChannelMaxRetries",2,a),this.va=ks("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new ul(a&&a.concurrentRequestLimit),this.Ba=new fm,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Cl.prototype,n.ka=8,n.I=1,n.connect=function(a,l,h,g){Ne(0),this.W=a,this.H=l||{},h&&g!==void 0&&(this.H.OSID=h,this.H.OAID=g),this.F=this.X,this.J=Vl(this,null,this.W),xi(this)};function Eo(a){if(Rl(a),a.I==3){var l=a.V++,h=et(a.J);if(se(h,"SID",a.M),se(h,"RID",l),se(h,"TYPE","terminate"),Cs(a,h),l=new kt(a,a.j,l),l.M=2,l.A=ki(et(h)),h=!1,o.navigator&&o.navigator.sendBeacon)try{h=o.navigator.sendBeacon(l.A.toString(),"")}catch{}!h&&o.Image&&(new Image().src=l.A,h=!0),h||(l.g=$l(l.j,null),l.g.ea(l.A)),l.F=Date.now(),Ai(l)}Ml(a)}function Pi(a){a.g&&(So(a),a.g.cancel(),a.g=null)}function Rl(a){Pi(a),a.v&&(o.clearTimeout(a.v),a.v=null),Li(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function xi(a){if(!hl(a.h)&&!a.m){a.m=!0;var l=a.Ea;K||y(),te||(K(),te=!0),b.add(l,a),a.D=0}}function ym(a,l){return dl(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=l.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=gs(d(a.Ea,a,l),Ol(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const S=new kt(this,this.j,a);let k=this.o;if(this.U&&(k?(k=jc(k),Hc(k,this.U)):k=this.U),this.u!==null||this.R||(S.J=k,k=null),this.S)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var g=this.i[h];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(l+=g,l>4096){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=xl(this,S,l),h=et(this.J),se(h,"RID",a),se(h,"CVER",22),this.G&&se(h,"X-HTTP-Session-Id",this.G),Cs(this,h),k&&(this.R?l="headers="+vs(El(k))+"&"+l:this.u&&To(h,this.u,k)),wo(this.h,S),this.Ra&&se(h,"TYPE","init"),this.S?(se(h,"$req",l),se(h,"SID","null"),S.U=!0,mo(S,h,null)):mo(S,h,l),this.I=2}}else this.I==3&&(a?Pl(this,a):this.i.length==0||hl(this.h)||Pl(this))};function Pl(a,l){var h;l?h=l.l:h=a.V++;const g=et(a.J);se(g,"SID",a.M),se(g,"RID",h),se(g,"AID",a.K),Cs(a,g),a.u&&a.o&&To(g,a.u,a.o),h=new kt(a,a.j,h,a.D+1),a.u===null&&(h.J=a.o),l&&(a.i=l.G.concat(a.i)),l=xl(a,h,1e3),h.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),wo(a.h,h),mo(h,g,l)}function Cs(a,l){a.H&&bi(a.H,function(h,g){se(l,g,h)}),a.l&&bi({},function(h,g){se(l,g,h)})}function xl(a,l,h){h=Math.min(a.i.length,h);const g=a.l?d(a.l.Ka,a.l,a):null;e:{var S=a.i;let W=-1;for(;;){const ge=["count="+h];W==-1?h>0?(W=S[0].g,ge.push("ofs="+W)):W=0:ge.push("ofs="+W);let ne=!0;for(let we=0;we<h;we++){var k=S[we].g;const tt=S[we].map;if(k-=W,k<0)W=Math.max(0,S[we].g-100),ne=!1;else try{k="req"+k+"_"||"";try{var x=tt instanceof Map?tt:Object.entries(tt);for(const[dn,xt]of x){let Lt=xt;c(xt)&&(Lt=lo(xt)),ge.push(k+dn+"="+encodeURIComponent(Lt))}}catch(dn){throw ge.push(k+"type="+encodeURIComponent("_badmap")),dn}}catch{g&&g(tt)}}if(ne){x=ge.join("&");break e}}x=void 0}return a=a.i.splice(0,h),l.G=a,x}function Ll(a){if(!a.g&&!a.v){a.Y=1;var l=a.Da;K||y(),te||(K(),te=!0),b.add(l,a),a.A=0}}function Io(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=gs(d(a.Da,a),Ol(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,Dl(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=gs(d(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ne(10),Pi(this),Dl(this))};function So(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Dl(a){a.g=new kt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var l=et(a.na);se(l,"RID","rpc"),se(l,"SID",a.M),se(l,"AID",a.K),se(l,"CI",a.F?"0":"1"),!a.F&&a.ia&&se(l,"TO",a.ia),se(l,"TYPE","xmlhttp"),Cs(a,l),a.u&&a.o&&To(l,a.u,a.o),a.O&&(a.g.H=a.O);var h=a.g;a=a.ba,h.M=1,h.A=ki(et(l)),h.u=null,h.R=!0,al(h,a)}n.Va=function(){this.C!=null&&(this.C=null,Pi(this),Io(this),Ne(19))};function Li(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Nl(a,l){var h=null;if(a.g==l){Li(a),So(a),a.g=null;var g=2}else if(vo(a.h,l))h=l.G,fl(a.h,l),g=1;else return;if(a.I!=0){if(l.o)if(g==1){h=l.u?l.u.length:0,l=Date.now()-l.F;var S=a.D;g=Ii(),De(g,new nl(g,h)),xi(a)}else Ll(a);else if(S=l.m,S==3||S==0&&l.X>0||!(g==1&&ym(a,l)||g==2&&Io(a)))switch(h&&h.length>0&&(l=a.h,l.i=l.i.concat(h)),S){case 1:hn(a,5);break;case 4:hn(a,10);break;case 3:hn(a,6);break;default:hn(a,2)}}}function Ol(a,l){let h=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(h*=2),h*l}function hn(a,l){if(a.j.info("Error code "+l),l==2){var h=d(a.bb,a),g=a.Ua;const S=!g;g=new Ct(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||_s(g,"https"),ki(g),S?hm(g.toString(),h):dm(g.toString(),h)}else Ne(2);a.I=0,a.l&&a.l.pa(l),Ml(a),Rl(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Ne(2)):(this.j.info("Failed to ping google.com"),Ne(1))};function Ml(a){if(a.I=0,a.ja=[],a.l){const l=pl(a.h);(l.length!=0||a.i.length!=0)&&(D(a.ja,l),D(a.ja,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.oa()}}function Vl(a,l,h){var g=h instanceof Ct?et(h):new Ct(h);if(g.g!="")l&&(g.g=l+"."+g.g),bs(g,g.u);else{var S=o.location;g=S.protocol,l=l?l+"."+S.hostname:S.hostname,S=+S.port;const k=new Ct(null);g&&_s(k,g),l&&(k.g=l),S&&bs(k,S),h&&(k.h=h),g=k}return h=a.G,l=a.wa,h&&l&&se(g,h,l),se(g,"VER",a.ka),Cs(a,g),g}function $l(a,l,h){if(l&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Aa&&!a.ma?new oe(new bo({ab:h})):new oe(a.ma),l.Fa(a.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ul(){}n=Ul.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Di(){}Di.prototype.g=function(a,l){return new Be(a,l)};function Be(a,l){Se.call(this),this.g=new Cl(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(a?a["X-WebChannel-Client-Profile"]=l.sa:a={"X-WebChannel-Client-Profile":l.sa}),this.g.U=a,(a=l&&l.Qb)&&!w(a)&&(this.g.u=a),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!w(l)&&(this.g.G=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new Nn(this)}v(Be,Se),Be.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Be.prototype.close=function(){Eo(this.g)},Be.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.v&&(h={},h.__data__=lo(a),a=h);l.i.push(new sm(l.Ya++,a)),l.I==3&&xi(l)},Be.prototype.N=function(){this.g.l=null,delete this.j,Eo(this.g),delete this.g,Be.Z.N.call(this)};function Fl(a){uo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){e:{for(const h in l){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}v(Fl,uo);function jl(){ho.call(this),this.status=1}v(jl,ho);function Nn(a){this.g=a}v(Nn,Ul),Nn.prototype.ra=function(){De(this.g,"a")},Nn.prototype.qa=function(a){De(this.g,new Fl(a))},Nn.prototype.pa=function(a){De(this.g,new jl)},Nn.prototype.oa=function(){De(this.g,"b")},Di.prototype.createWebChannel=Di.prototype.g,Be.prototype.send=Be.prototype.o,Be.prototype.open=Be.prototype.m,Be.prototype.close=Be.prototype.close,qd=function(){return new Di},Hd=function(){return Ii()},Bd=cn,oa={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Si.NO_ERROR=0,Si.TIMEOUT=8,Si.HTTP_ERROR=6,Yi=Si,sl.COMPLETE="complete",jd=sl,Xc.EventType=ps,ps.OPEN="a",ps.CLOSE="b",ps.ERROR="c",ps.MESSAGE="d",Se.prototype.listen=Se.prototype.J,Ms=Xc,oe.prototype.listenOnce=oe.prototype.K,oe.prototype.getLastError=oe.prototype.Ha,oe.prototype.getLastErrorCode=oe.prototype.ya,oe.prototype.getStatus=oe.prototype.ca,oe.prototype.getResponseJson=oe.prototype.La,oe.prototype.getResponseText=oe.prototype.la,oe.prototype.send=oe.prototype.ea,oe.prototype.setWithCredentials=oe.prototype.Fa,Fd=oe}).apply(typeof Mi<"u"?Mi:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ke.UNAUTHENTICATED=new ke(null),ke.GOOGLE_CREDENTIALS=new ke("google-credentials-uid"),ke.FIRST_PARTY=new ke("first-party-uid"),ke.MOCK_USER=new ke("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cs="12.10.0";function Ww(n){cs=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const An=new Da("@firebase/firestore");function Mn(){return An.logLevel}function O(n,...e){if(An.logLevel<=Q.DEBUG){const t=e.map(Za);An.debug(`Firestore (${cs}): ${n}`,...t)}}function It(n,...e){if(An.logLevel<=Q.ERROR){const t=e.map(Za);An.error(`Firestore (${cs}): ${n}`,...t)}}function kn(n,...e){if(An.logLevel<=Q.WARN){const t=e.map(Za);An.warn(`Firestore (${cs}): ${n}`,...t)}}function Za(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,zd(n,s,t)}function zd(n,e,t){let s=`FIRESTORE (${cs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw It(s),new Error(s)}function re(n,e,t,s){let i="Unexpected state";typeof t=="string"?i=t:s=t,n||zd(e,i,s)}function X(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Hn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Gw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ke.UNAUTHENTICATED)))}shutdown(){}}class Kw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Qw{constructor(e){this.t=e,this.currentUser=ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){re(this.o===void 0,42304);let s=this.i;const i=u=>this.i!==s?(s=this.i,t(u)):Promise.resolve();let r=new Hn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Hn,e.enqueueRetryable((()=>i(this.currentUser)))};const o=()=>{const u=r;e.enqueueRetryable((async()=>{await u.promise,await i(this.currentUser)}))},c=u=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Hn)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(re(typeof s.accessToken=="string",31837,{l:s}),new Wd(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string",2055,{h:e}),new ke(e)}}class Jw{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=ke.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Yw{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new Jw(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ke.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class bu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xw{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Me(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){re(this.o===void 0,3512);const s=r=>{r.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable((()=>s(r)))};const i=r=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>i(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?i(r):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new bu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(re(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new bu(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const i=Zw(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<t&&(s+=e.charAt(i[r]%62))}return s}}function J(n,e){return n<e?-1:n>e?1:0}function aa(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const i=n.charAt(s),r=e.charAt(s);if(i!==r)return Oo(i)===Oo(r)?J(i,r):Oo(i)?1:-1}return J(n.length,e.length)}const e_=55296,t_=57343;function Oo(n){const e=n.charCodeAt(0);return e>=e_&&e<=t_}function Jn(n,e,t){return n.length===e.length&&n.every(((s,i)=>t(s,e[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu="__name__";class nt{constructor(e,t,s){t===void 0?t=0:t>e.length&&q(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&q(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return nt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof nt?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const r=nt.compareSegments(e.get(i),t.get(i));if(r!==0)return r}return J(e.length,t.length)}static compareSegments(e,t){const s=nt.isNumericId(e),i=nt.isNumericId(t);return s&&!i?-1:!s&&i?1:s&&i?nt.extractNumericId(e).compare(nt.extractNumericId(t)):aa(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return qt.fromString(e.substring(4,e.length-2))}}class ie extends nt{construct(e,t,s){return new ie(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new U(L.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((i=>i.length>0)))}return new ie(t)}static emptyPath(){return new ie([])}}const n_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends nt{construct(e,t,s){return new Ve(e,t,s)}static isValidIdentifier(e){return n_.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Tu}static keyField(){return new Ve([Tu])}static fromServerFormat(e){const t=[];let s="",i=0;const r=()=>{if(s.length===0)throw new U(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new U(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new U(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(s+=c,i++):(r(),i++)}if(r(),o)throw new U(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ve(t)}static emptyPath(){return new Ve([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(ie.fromString(e))}static fromName(e){return new B(ie.fromString(e).popFirst(5))}static empty(){return new B(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ie.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new ie(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(n,e,t){if(!t)throw new U(L.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function i_(n,e,t,s){if(e===!0&&s===!0)throw new U(L.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Eu(n){if(B.isDocumentKey(n))throw new U(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function r_(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function o_(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":q(12329,{type:typeof n})}function Xi(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new U(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=o_(n);throw new U(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function pe(n,e){const t={typeString:n};return e&&(t.value=e),t}function di(n,e){if(!r_(n))throw new U(L.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const i=e[s].typeString,r="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const o=n[s];if(i&&typeof o!==i){t=`JSON field '${s}' must be a ${i}.`;break}if(r!==void 0&&o!==r.value){t=`Expected '${s}' field to equal '${r.value}'`;break}}if(t)throw new U(L.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=-62135596800,Su=1e6;class fe{static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Su);return new fe(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new U(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new U(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Iu)throw new U(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Su}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(di(e,fe._jsonSchema))return new fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Iu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}fe._jsonSchemaVersion="firestore/timestamp/1.0",fe._jsonSchema={type:pe("string",fe._jsonSchemaVersion),seconds:pe("number"),nanoseconds:pe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ei=-1;function a_(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=H.fromTimestamp(s===1e9?new fe(t+1,0):new fe(t,s));return new Yt(i,B.empty(),e)}function c_(n){return new Yt(n.readTime,n.key,ei)}class Yt{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Yt(H.min(),B.empty(),ei)}static max(){return new Yt(H.max(),B.empty(),ei)}}function l_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(n.documentKey,e.documentKey),t!==0?t:J(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class h_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vr(n){if(n.code!==L.FAILED_PRECONDITION||n.message!==u_)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R(((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(t,r).next(s,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):R.reject(t)}static resolve(e){return new R(((t,s)=>{t(e)}))}static reject(e){return new R(((t,s)=>{s(e)}))}static waitFor(e){return new R(((t,s)=>{let i=0,r=0,o=!1;e.forEach((c=>{++i,c.next((()=>{++r,o&&r===i&&t()}),(u=>s(u)))})),o=!0,r===i&&t()}))}static or(e){let t=R.resolve(!1);for(const s of e)t=t.next((i=>i?R.resolve(i):s()));return t}static forEach(e,t){const s=[];return e.forEach(((i,r)=>{s.push(t.call(this,i,r))})),this.waitFor(s)}static mapArray(e,t){return new R(((s,i)=>{const r=e.length,o=new Array(r);let c=0;for(let u=0;u<r;u++){const d=u;t(e[d]).next((m=>{o[d]=m,++c,c===r&&s(o)}),(m=>i(m)))}}))}static doWhile(e,t){return new R(((s,i)=>{const r=()=>{e()===!0?t().next((()=>{r()}),i):s()};r()}))}}function d_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ls(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class $r{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}$r.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_=-1;function Ur(n){return n==null}function ca(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd="";function p_(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Au(e)),e=m_(n.get(t),e);return Au(e)}function m_(n,e){let t=e;const s=n.length;for(let i=0;i<s;i++){const r=n.charAt(i);switch(r){case"\0":t+="";break;case Kd:t+="";break;default:t+=r}}return t}function Au(n){return n+Kd+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function fi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function g_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,t){this.comparator=e,this.root=t||be.EMPTY}insert(e,t){return new he(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,be.BLACK,null,null))}remove(e){return new he(this.comparator,this.root.remove(e,this.comparator).copy(null,null,be.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return t+s.left.size;i<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vi(this.root,e,this.comparator,!0)}}class Vi{constructor(e,t,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?s(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class be{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??be.RED,this.left=i??be.EMPTY,this.right=r??be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,i,r){return new be(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return be.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw q(27949);return e+(this.isRed()?0:1)}}be.EMPTY=null,be.RED=!0,be.BLACK=!1;be.EMPTY=new class{constructor(){this.size=0}get key(){throw q(57766)}get value(){throw q(16141)}get color(){throw q(16727)}get left(){throw q(29726)}get right(){throw q(36894)}copy(e,t,s,i,r){return this}insert(e,t,s){return new be(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.comparator=e,this.data=new he(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Cu(this.data.getIterator())}getIteratorFrom(e){return new Cu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof ve)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ve(this.comparator);return t.data=e,t}}class Cu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new Ft([])}unionWith(e){let t=new ve(Ve.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Ft(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Jn(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class Qd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Qd("Invalid base64 string: "+r):r}})(e);return new Te(t)}static fromUint8Array(e){const t=(function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r})(e);return new Te(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Te.EMPTY_BYTE_STRING=new Te("");const y_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xt(n){if(re(!!n,39018),typeof n=="string"){let e=0;const t=y_.exec(n);if(re(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ue(n.seconds),nanos:ue(n.nanos)}}function ue(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Zt(n){return typeof n=="string"?Te.fromBase64String(n):Te.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="server_timestamp",Yd="__type__",Xd="__previous_value__",Zd="__local_write_time__";function ec(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Yd])==null?void 0:s.stringValue)===Jd}function Fr(n){const e=n.mapValue.fields[Xd];return ec(e)?Fr(e):e}function ti(n){const e=Xt(n.mapValue.fields[Zd].timestampValue);return new fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,t,s,i,r,o,c,u,d,m,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=m,this.apiKey=v}}const gr="(default)";class ni{constructor(e,t){this.projectId=e,this.database=t||gr}static empty(){return new ni("","")}get isDefaultDatabase(){return this.database===gr}isEqual(e){return e instanceof ni&&e.projectId===this.projectId&&e.database===this.database}}function w_(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new U(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ni(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __="__type__",b_="__max__",$i={mapValue:{}},T_="__vector__",la="value";function en(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ec(n)?4:I_(n)?9007199254740991:E_(n)?10:11:q(28295,{value:n})}function ft(n,e){if(n===e)return!0;const t=en(n);if(t!==en(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ti(n).isEqual(ti(e));case 3:return(function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=Xt(i.timestampValue),c=Xt(r.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,r){return Zt(i.bytesValue).isEqual(Zt(r.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,r){return ue(i.geoPointValue.latitude)===ue(r.geoPointValue.latitude)&&ue(i.geoPointValue.longitude)===ue(r.geoPointValue.longitude)})(n,e);case 2:return(function(i,r){if("integerValue"in i&&"integerValue"in r)return ue(i.integerValue)===ue(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=ue(i.doubleValue),c=ue(r.doubleValue);return o===c?ca(o)===ca(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return Jn(n.arrayValue.values||[],e.arrayValue.values||[],ft);case 10:case 11:return(function(i,r){const o=i.mapValue.fields||{},c=r.mapValue.fields||{};if(ku(o)!==ku(c))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!ft(o[u],c[u])))return!1;return!0})(n,e);default:return q(52216,{left:n})}}function si(n,e){return(n.values||[]).find((t=>ft(t,e)))!==void 0}function Yn(n,e){if(n===e)return 0;const t=en(n),s=en(e);if(t!==s)return J(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return J(n.booleanValue,e.booleanValue);case 2:return(function(r,o){const c=ue(r.integerValue||r.doubleValue),u=ue(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(n,e);case 3:return Ru(n.timestampValue,e.timestampValue);case 4:return Ru(ti(n),ti(e));case 5:return aa(n.stringValue,e.stringValue);case 6:return(function(r,o){const c=Zt(r),u=Zt(o);return c.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(r,o){const c=r.split("/"),u=o.split("/");for(let d=0;d<c.length&&d<u.length;d++){const m=J(c[d],u[d]);if(m!==0)return m}return J(c.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(r,o){const c=J(ue(r.latitude),ue(o.latitude));return c!==0?c:J(ue(r.longitude),ue(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Pu(n.arrayValue,e.arrayValue);case 10:return(function(r,o){var T,C,D,M;const c=r.fields||{},u=o.fields||{},d=(T=c[la])==null?void 0:T.arrayValue,m=(C=u[la])==null?void 0:C.arrayValue,v=J(((D=d==null?void 0:d.values)==null?void 0:D.length)||0,((M=m==null?void 0:m.values)==null?void 0:M.length)||0);return v!==0?v:Pu(d,m)})(n.mapValue,e.mapValue);case 11:return(function(r,o){if(r===$i.mapValue&&o===$i.mapValue)return 0;if(r===$i.mapValue)return 1;if(o===$i.mapValue)return-1;const c=r.fields||{},u=Object.keys(c),d=o.fields||{},m=Object.keys(d);u.sort(),m.sort();for(let v=0;v<u.length&&v<m.length;++v){const T=aa(u[v],m[v]);if(T!==0)return T;const C=Yn(c[u[v]],d[m[v]]);if(C!==0)return C}return J(u.length,m.length)})(n.mapValue,e.mapValue);default:throw q(23264,{he:t})}}function Ru(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return J(n,e);const t=Xt(n),s=Xt(e),i=J(t.seconds,s.seconds);return i!==0?i:J(t.nanos,s.nanos)}function Pu(n,e){const t=n.values||[],s=e.values||[];for(let i=0;i<t.length&&i<s.length;++i){const r=Yn(t[i],s[i]);if(r)return r}return J(t.length,s.length)}function Xn(n){return ua(n)}function ua(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=Xt(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Zt(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return B.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",i=!0;for(const r of t.values||[])i?i=!1:s+=",",s+=ua(r);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${ua(t.fields[o])}`;return i+"}"})(n.mapValue):q(61005,{value:n})}function Zi(n){switch(en(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Fr(n);return e?16+Zi(e):16;case 5:return 2*n.stringValue.length;case 6:return Zt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((i,r)=>i+Zi(r)),0)})(n.arrayValue);case 10:case 11:return(function(s){let i=0;return fi(s.fields,((r,o)=>{i+=r.length+Zi(o)})),i})(n.mapValue);default:throw q(13486,{value:n})}}function ha(n){return!!n&&"integerValue"in n}function tc(n){return!!n&&"arrayValue"in n}function xu(n){return!!n&&"nullValue"in n}function Lu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Mo(n){return!!n&&"mapValue"in n}function E_(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[__])==null?void 0:s.stringValue)===T_}function zs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return fi(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=zs(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=zs(n.arrayValue.values[t]);return e}return{...n}}function I_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===b_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.value=e}static empty(){return new st({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Mo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=zs(t)}setAll(e){let t=Ve.emptyPath(),s={},i=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,s,i),s={},i=[],t=c.popLast()}o?s[c.lastSegment()]=zs(o):i.push(c.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,s,i)}delete(e){const t=this.field(e.popLast());Mo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ft(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=t.mapValue.fields[e.get(s)];Mo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,s){fi(t,((i,r)=>e[i]=r));for(const i of s)delete e[i]}clone(){return new st(zs(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t,s,i,r,o,c){this.key=e,this.documentType=t,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Ce(e,0,H.min(),H.min(),H.min(),st.empty(),0)}static newFoundDocument(e,t,s,i){return new Ce(e,1,t,H.min(),s,i,0)}static newNoDocument(e,t){return new Ce(e,2,t,H.min(),H.min(),st.empty(),0)}static newUnknownDocument(e,t){return new Ce(e,3,t,H.min(),H.min(),st.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class yr{constructor(e,t){this.position=e,this.inclusive=t}}function Du(n,e,t){let s=0;for(let i=0;i<n.position.length;i++){const r=e[i],o=n.position[i];if(r.field.isKeyField()?s=B.comparator(B.fromName(o.referenceValue),t.key):s=Yn(o,t.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Nu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ft(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class vr{constructor(e,t="asc"){this.field=e,this.dir=t}}function S_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class ef{}class ye extends ef{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new k_(e,t,s):t==="array-contains"?new P_(e,s):t==="in"?new x_(e,s):t==="not-in"?new L_(e,s):t==="array-contains-any"?new D_(e,s):new ye(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new C_(e,s):new R_(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Yn(t,this.value)):t!==null&&en(this.value)===en(t)&&this.matchesComparison(Yn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pt extends ef{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new pt(e,t)}matches(e){return tf(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function tf(n){return n.op==="and"}function nf(n){return A_(n)&&tf(n)}function A_(n){for(const e of n.filters)if(e instanceof pt)return!1;return!0}function da(n){if(n instanceof ye)return n.field.canonicalString()+n.op.toString()+Xn(n.value);if(nf(n))return n.filters.map((e=>da(e))).join(",");{const e=n.filters.map((t=>da(t))).join(",");return`${n.op}(${e})`}}function sf(n,e){return n instanceof ye?(function(s,i){return i instanceof ye&&s.op===i.op&&s.field.isEqual(i.field)&&ft(s.value,i.value)})(n,e):n instanceof pt?(function(s,i){return i instanceof pt&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce(((r,o,c)=>r&&sf(o,i.filters[c])),!0):!1})(n,e):void q(19439)}function rf(n){return n instanceof ye?(function(t){return`${t.field.canonicalString()} ${t.op} ${Xn(t.value)}`})(n):n instanceof pt?(function(t){return t.op.toString()+" {"+t.getFilters().map(rf).join(" ,")+"}"})(n):"Filter"}class k_ extends ye{constructor(e,t,s){super(e,t,s),this.key=B.fromName(s.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class C_ extends ye{constructor(e,t){super(e,"in",t),this.keys=of("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class R_ extends ye{constructor(e,t){super(e,"not-in",t),this.keys=of("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function of(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>B.fromName(s.referenceValue)))}class P_ extends ye{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return tc(t)&&si(t.arrayValue,this.value)}}class x_ extends ye{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&si(this.value.arrayValue,t)}}class L_ extends ye{constructor(e,t){super(e,"not-in",t)}matches(e){if(si(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!si(this.value.arrayValue,t)}}class D_ extends ye{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!tc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>si(this.value.arrayValue,s)))}}/**
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
 */class N_{constructor(e,t=null,s=[],i=[],r=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=c,this.Te=null}}function Ou(n,e=null,t=[],s=[],i=null,r=null,o=null){return new N_(n,e,t,s,i,r,o)}function nc(n){const e=X(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>da(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(r){return r.field.canonicalString()+r.dir})(s))).join(","),Ur(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Xn(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Xn(s))).join(",")),e.Te=t}return e.Te}function sc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!S_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!sf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Nu(n.startAt,e.startAt)&&Nu(n.endAt,e.endAt)}function fa(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,t=null,s=[],i=[],r=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function O_(n,e,t,s,i,r,o,c){return new jr(n,e,t,s,i,r,o,c)}function ic(n){return new jr(n)}function Mu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function M_(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function V_(n){return n.collectionGroup!==null}function Ws(n){const e=X(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const r of e.explicitOrderBy)e.Ie.push(r),t.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ve(Ve.comparator);return o.filters.forEach((u=>{u.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(e).forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new vr(r,s))})),t.has(Ve.keyField().canonicalString())||e.Ie.push(new vr(Ve.keyField(),s))}return e.Ie}function ut(n){const e=X(n);return e.Ee||(e.Ee=$_(e,Ws(n))),e.Ee}function $_(n,e){if(n.limitType==="F")return Ou(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const r=i.dir==="desc"?"asc":"desc";return new vr(i.field,r)}));const t=n.endAt?new yr(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new yr(n.startAt.position,n.startAt.inclusive):null;return Ou(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function pa(n,e,t){return new jr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Br(n,e){return sc(ut(n),ut(e))&&n.limitType===e.limitType}function af(n){return`${nc(ut(n))}|lt:${n.limitType}`}function Vn(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((i=>rf(i))).join(", ")}]`),Ur(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((i=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(i))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((i=>Xn(i))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((i=>Xn(i))).join(",")),`Target(${s})`})(ut(n))}; limitType=${n.limitType})`}function Hr(n,e){return e.isFoundDocument()&&(function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):B.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)})(n,e)&&(function(s,i){for(const r of Ws(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0})(n,e)&&(function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0})(n,e)&&(function(s,i){return!(s.startAt&&!(function(o,c,u){const d=Du(o,c,u);return o.inclusive?d<=0:d<0})(s.startAt,Ws(s),i)||s.endAt&&!(function(o,c,u){const d=Du(o,c,u);return o.inclusive?d>=0:d>0})(s.endAt,Ws(s),i))})(n,e)}function U_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function cf(n){return(e,t)=>{let s=!1;for(const i of Ws(n)){const r=F_(i,e,t);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function F_(n,e,t){const s=n.field.isKeyField()?B.comparator(e.key,t.key):(function(r,o,c){const u=o.data.field(r),d=c.data.field(r);return u!==null&&d!==null?Yn(u,d):q(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return q(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[t]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){fi(this.inner,((t,s)=>{for(const[i,r]of s)e(i,r)}))}isEmpty(){return g_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_=new he(B.comparator);function tn(){return j_}const lf=new he(B.comparator);function Vs(...n){let e=lf;for(const t of n)e=e.insert(t.key,t);return e}function B_(n){let e=lf;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function vn(){return Gs()}function uf(){return Gs()}function Gs(){return new Pn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const H_=new ve(B.comparator);function Z(...n){let e=H_;for(const t of n)e=e.add(t);return e}const q_=new ve(J);function z_(){return q_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ca(e)?"-0":e}}function G_(n){return{integerValue:""+n}}/**
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
 */class qr{constructor(){this._=void 0}}function K_(n,e,t){return n instanceof ma?(function(i,r){const o={fields:{[Yd]:{stringValue:Jd},[Zd]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&ec(r)&&(r=Fr(r)),r&&(o.fields[Xd]=r),{mapValue:o}})(t,e):n instanceof wr?hf(n,e):n instanceof _r?df(n,e):(function(i,r){const o=J_(i,r),c=Vu(o)+Vu(i.Ae);return ha(o)&&ha(i.Ae)?G_(c):W_(i.serializer,c)})(n,e)}function Q_(n,e,t){return n instanceof wr?hf(n,e):n instanceof _r?df(n,e):t}function J_(n,e){return n instanceof ga?(function(s){return ha(s)||(function(r){return!!r&&"doubleValue"in r})(s)})(e)?e:{integerValue:0}:null}class ma extends qr{}class wr extends qr{constructor(e){super(),this.elements=e}}function hf(n,e){const t=ff(e);for(const s of n.elements)t.some((i=>ft(i,s)))||t.push(s);return{arrayValue:{values:t}}}class _r extends qr{constructor(e){super(),this.elements=e}}function df(n,e){let t=ff(e);for(const s of n.elements)t=t.filter((i=>!ft(i,s)));return{arrayValue:{values:t}}}class ga extends qr{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Vu(n){return ue(n.integerValue||n.doubleValue)}function ff(n){return tc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Y_(n,e){return n.field.isEqual(e.field)&&(function(s,i){return s instanceof wr&&i instanceof wr||s instanceof _r&&i instanceof _r?Jn(s.elements,i.elements,ft):s instanceof ga&&i instanceof ga?ft(s.Ae,i.Ae):s instanceof ma&&i instanceof ma})(n.transform,e.transform)}class wn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new wn}static exists(e){return new wn(void 0,e)}static updateTime(e){return new wn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function er(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class rc{}function pf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Z_(n.key,wn.none()):new oc(n.key,n.data,wn.none());{const t=n.data,s=st.empty();let i=new ve(Ve.comparator);for(let r of e.fields)if(!i.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new zr(n.key,s,new Ft(i.toArray()),wn.none())}}function X_(n,e,t){n instanceof oc?(function(i,r,o){const c=i.value.clone(),u=Uu(i.fieldTransforms,r,o.transformResults);c.setAll(u),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof zr?(function(i,r,o){if(!er(i.precondition,r))return void r.convertToUnknownDocument(o.version);const c=Uu(i.fieldTransforms,r,o.transformResults),u=r.data;u.setAll(mf(i)),u.setAll(c),r.convertToFoundDocument(o.version,u).setHasCommittedMutations()})(n,e,t):(function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function Ks(n,e,t,s){return n instanceof oc?(function(r,o,c,u){if(!er(r.precondition,o))return c;const d=r.value.clone(),m=Fu(r.fieldTransforms,u,o);return d.setAll(m),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null})(n,e,t,s):n instanceof zr?(function(r,o,c,u){if(!er(r.precondition,o))return c;const d=Fu(r.fieldTransforms,u,o),m=o.data;return m.setAll(mf(r)),m.setAll(d),o.convertToFoundDocument(o.version,m).setHasLocalMutations(),c===null?null:c.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((v=>v.field)))})(n,e,t,s):(function(r,o,c){return er(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function $u(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&Jn(s,i,((r,o)=>Y_(r,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class oc extends rc{constructor(e,t,s,i=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class zr extends rc{constructor(e,t,s,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function mf(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function Uu(n,e,t){const s=new Map;re(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let i=0;i<t.length;i++){const r=n[i],o=r.transform,c=e.data.field(r.field);s.set(r.field,Q_(o,c,t[i]))}return s}function Fu(n,e,t){const s=new Map;for(const i of n){const r=i.transform,o=t.data.field(i.field);s.set(i.field,K_(r,o,e))}return s}class Z_ extends rc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,t,s,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&X_(r,e,s[i])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ks(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ks(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=uf();return this.mutations.forEach((i=>{const r=e.get(i.key),o=r.overlayedDocument;let c=this.applyToLocalView(o,r.mutatedFields);c=t.has(i.key)?null:c;const u=pf(o,c);u!==null&&s.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(H.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Z())}isEqual(e){return this.batchId===e.batchId&&Jn(this.mutations,e.mutations,((t,s)=>$u(t,s)))&&Jn(this.baseMutations,e.baseMutations,((t,s)=>$u(t,s)))}}/**
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
 */class tb{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class nb{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de,Y;function gf(n){if(n===void 0)return It("GRPC error has no .code"),L.UNKNOWN;switch(n){case de.OK:return L.OK;case de.CANCELLED:return L.CANCELLED;case de.UNKNOWN:return L.UNKNOWN;case de.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case de.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case de.INTERNAL:return L.INTERNAL;case de.UNAVAILABLE:return L.UNAVAILABLE;case de.UNAUTHENTICATED:return L.UNAUTHENTICATED;case de.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case de.NOT_FOUND:return L.NOT_FOUND;case de.ALREADY_EXISTS:return L.ALREADY_EXISTS;case de.PERMISSION_DENIED:return L.PERMISSION_DENIED;case de.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case de.ABORTED:return L.ABORTED;case de.OUT_OF_RANGE:return L.OUT_OF_RANGE;case de.UNIMPLEMENTED:return L.UNIMPLEMENTED;case de.DATA_LOSS:return L.DATA_LOSS;default:return q(39323,{code:n})}}(Y=de||(de={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function sb(){return new TextEncoder}/**
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
 */const ib=new qt([4294967295,4294967295],0);function ju(n){const e=sb().encode(n),t=new Ud;return t.update(e),new Uint8Array(t.digest())}function Bu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new qt([t,s],0),new qt([i,r],0)]}class ac{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new $s(`Invalid padding: ${t}`);if(s<0)throw new $s(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new $s(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new $s(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=qt.fromNumber(this.ge)}ye(e,t,s){let i=e.add(t.multiply(qt.fromNumber(s)));return i.compare(ib)===1&&(i=new qt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=ju(e),[s,i]=Bu(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(s,i,r);if(!this.we(o))return!1}return!0}static create(e,t,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new ac(r,i,t);return s.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=ju(e),[s,i]=Bu(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(s,i,r);this.be(o)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class $s extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,t,s,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const i=new Map;return i.set(e,pi.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Wr(H.min(),i,new he(J),tn(),Z())}}class pi{constructor(e,t,s,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new pi(s,t,Z(),Z(),Z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,t,s,i){this.Se=e,this.removedTargetIds=t,this.key=s,this.De=i}}class yf{constructor(e,t){this.targetId=e,this.Ce=t}}class vf{constructor(e,t,s=Te.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=i}}class Hu{constructor(){this.ve=0,this.Fe=qu(),this.Me=Te.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Z(),t=Z(),s=Z();return this.Fe.forEach(((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:s=s.add(i);break;default:q(38017,{changeType:r})}})),new pi(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=qu()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,re(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class rb{constructor(e){this.Ge=e,this.ze=new Map,this.je=tn(),this.He=Ui(),this.Je=Ui(),this.Ze=new he(J)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:q(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,i)=>{this.rt(i)&&t(i)}))}st(e){const t=e.targetId,s=e.Ce.count,i=this.ot(t);if(i){const r=i.target;if(fa(r))if(s===0){const o=new B(r.path);this.et(t,o,Ce.newNoDocument(o,H.min()))}else re(s===1,20013,{expectedCount:s});else{const o=this._t(t);if(o!==s){const c=this.ut(e),u=c?this.ct(c,e,o):1;if(u!==0){this.it(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=t;let o,c;try{o=Zt(s).toUint8Array()}catch(u){if(u instanceof Qd)return kn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new ac(o,i,r)}catch(u){return kn(u instanceof $s?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let i=0;return s.forEach((r=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(c)||(this.et(t,r,null),i++)})),i}Tt(e){const t=new Map;this.ze.forEach(((r,o)=>{const c=this.ot(o);if(c){if(r.current&&fa(c.target)){const u=new B(c.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Ce.newNoDocument(u,e))}r.Be&&(t.set(o,r.ke()),r.Ke())}}));let s=Z();this.Je.forEach(((r,o)=>{let c=!0;o.forEachWhile((u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(s=s.add(r))})),this.je.forEach(((r,o)=>o.setReadTime(e)));const i=new Wr(e,t,this.Ze,this.je,s);return this.je=tn(),this.He=Ui(),this.Je=Ui(),this.Ze=new he(J),i}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.qe(t,1):i.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Hu,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new ve(J),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new ve(J),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Hu),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ui(){return new he(B.comparator)}function qu(){return new he(B.comparator)}const ob={asc:"ASCENDING",desc:"DESCENDING"},ab={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cb={and:"AND",or:"OR"};class lb{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ya(n,e){return n.useProto3Json||Ur(e)?e:{value:e}}function ub(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hb(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function qn(n){return re(!!n,49232),H.fromTimestamp((function(t){const s=Xt(t);return new fe(s.seconds,s.nanos)})(n))}function db(n,e){return va(n,e).canonicalString()}function va(n,e){const t=(function(i){return new ie(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function wf(n){const e=ie.fromString(n);return re(If(e),10190,{key:e.toString()}),e}function Vo(n,e){const t=wf(e);if(t.get(1)!==n.databaseId.projectId)throw new U(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new U(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new B(bf(t))}function _f(n,e){return db(n.databaseId,e)}function fb(n){const e=wf(n);return e.length===4?ie.emptyPath():bf(e)}function zu(n){return new ie(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function bf(n){return re(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function pb(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:q(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=(function(d,m){return d.useProto3Json?(re(m===void 0||typeof m=="string",58123),Te.fromBase64String(m||"")):(re(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),Te.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(d){const m=d.code===void 0?L.UNKNOWN:gf(d.code);return new U(m,d.message||"")})(o);t=new vf(s,i,r,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Vo(n,s.document.name),r=qn(s.document.updateTime),o=s.document.createTime?qn(s.document.createTime):H.min(),c=new st({mapValue:{fields:s.document.fields}}),u=Ce.newFoundDocument(i,r,o,c),d=s.targetIds||[],m=s.removedTargetIds||[];t=new tr(d,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Vo(n,s.document),r=s.readTime?qn(s.readTime):H.min(),o=Ce.newNoDocument(i,r),c=s.removedTargetIds||[];t=new tr([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Vo(n,s.document),r=s.removedTargetIds||[];t=new tr([],r,i,null)}else{if(!("filter"in e))return q(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new nb(i,r),c=s.targetId;t=new yf(c,o)}}return t}function mb(n,e){return{documents:[_f(n,e.path)]}}function gb(n,e){const t={structuredQuery:{}},s=e.path;let i;e.collectionGroup!==null?(i=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=_f(n,i);const r=(function(d){if(d.length!==0)return Ef(pt.create(d,"and"))})(e.filters);r&&(t.structuredQuery.where=r);const o=(function(d){if(d.length!==0)return d.map((m=>(function(T){return{field:$n(T.field),direction:wb(T.dir)}})(m)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=ya(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{ft:t,parent:i}}function yb(n){let e=fb(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let i=null;if(s>0){re(s===1,65062);const m=t.from[0];m.allDescendants?i=m.collectionId:e=e.child(m.collectionId)}let r=[];t.where&&(r=(function(v){const T=Tf(v);return T instanceof pt&&nf(T)?T.getFilters():[T]})(t.where));let o=[];t.orderBy&&(o=(function(v){return v.map((T=>(function(D){return new vr(Un(D.field),(function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(D.direction))})(T)))})(t.orderBy));let c=null;t.limit&&(c=(function(v){let T;return T=typeof v=="object"?v.value:v,Ur(T)?null:T})(t.limit));let u=null;t.startAt&&(u=(function(v){const T=!!v.before,C=v.values||[];return new yr(C,T)})(t.startAt));let d=null;return t.endAt&&(d=(function(v){const T=!v.before,C=v.values||[];return new yr(C,T)})(t.endAt)),O_(e,i,o,r,c,"F",u,d)}function vb(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Tf(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Un(t.unaryFilter.field);return ye.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=Un(t.unaryFilter.field);return ye.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Un(t.unaryFilter.field);return ye.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Un(t.unaryFilter.field);return ye.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return q(61313);default:return q(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ye.create(Un(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return q(58110);default:return q(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return pt.create(t.compositeFilter.filters.map((s=>Tf(s))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return q(1026)}})(t.compositeFilter.op))})(n):q(30097,{filter:n})}function wb(n){return ob[n]}function _b(n){return ab[n]}function bb(n){return cb[n]}function $n(n){return{fieldPath:n.canonicalString()}}function Un(n){return Ve.fromServerFormat(n.fieldPath)}function Ef(n){return n instanceof ye?(function(t){if(t.op==="=="){if(Lu(t.value))return{unaryFilter:{field:$n(t.field),op:"IS_NAN"}};if(xu(t.value))return{unaryFilter:{field:$n(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Lu(t.value))return{unaryFilter:{field:$n(t.field),op:"IS_NOT_NAN"}};if(xu(t.value))return{unaryFilter:{field:$n(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$n(t.field),op:_b(t.op),value:t.value}}})(n):n instanceof pt?(function(t){const s=t.getFilters().map((i=>Ef(i)));return s.length===1?s[0]:{compositeFilter:{op:bb(t.op),filters:s}}})(n):q(54877,{filter:n})}function If(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t,s,i,r=H.min(),o=H.min(),c=Te.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new jt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new jt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e){this.yt=e}}function Eb(n){const e=yb({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?pa(e,e.limit,"L"):e}/**
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
 */class Ib{constructor(){this.Sn=new Sb}addToCollectionParentIndex(e,t){return this.Sn.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(Yt.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(Yt.min())}updateCollectionGroup(e,t,s){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class Sb{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t]||new ve(ie.comparator),r=!i.has(s);return this.index[t]=i.add(s),r}has(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t];return i&&i.has(s)}getEntries(e){return(this.index[e]||new ve(ie.comparator)).toArray()}}/**
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
 */const Wu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Sf=41943040;class je{static withCacheSize(e){return new je(e,je.DEFAULT_COLLECTION_PERCENTILE,je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */je.DEFAULT_COLLECTION_PERCENTILE=10,je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,je.DEFAULT=new je(Sf,je.DEFAULT_COLLECTION_PERCENTILE,je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),je.DISABLED=new je(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Zn(0)}static ar(){return new Zn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu="LruGarbageCollector",Ab=1048576;function Ku([n,e],[t,s]){const i=J(n,t);return i===0?J(e,s):i}class kb{constructor(e){this.Pr=e,this.buffer=new ve(Ku),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Ku(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Cb{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){O(Gu,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ls(t)?O(Gu,"Ignoring IndexedDB error during garbage collection: ",t):await Vr(t)}await this.Ar(3e5)}))}}class Rb{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return R.resolve($r.ce);const s=new kb(t);return this.Vr.forEachTarget(e,(i=>s.Er(i.sequenceNumber))).next((()=>this.Vr.mr(e,(i=>s.Er(i))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(Wu)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Wu):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,i,r,o,c,u,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((v=>(v>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),i=this.params.maximumSequenceNumbersToCollect):i=v,o=Date.now(),this.nthSequenceNumber(e,i)))).next((v=>(s=v,c=Date.now(),this.removeTargets(e,s,t)))).next((v=>(r=v,u=Date.now(),this.removeOrphanedDocuments(e,s)))).next((v=>(d=Date.now(),Mn()<=Q.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-m}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${r} targets in `+(u-c)+`ms
	Removed ${v} documents in `+(d-u)+`ms
Total Duration: ${d-m}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:v}))))}}function Pb(n,e){return new Rb(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(){this.changes=new Pn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ce.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?R.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Lb{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e,t,s,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(s=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(s!==null&&Ks(s.mutation,i,Ft.empty(),fe.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Z()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Z()){const i=vn();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,s).next((r=>{let o=Vs();return r.forEach(((c,u)=>{o=o.insert(c,u.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const s=vn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Z())))}populateOverlays(e,t,s){const i=[];return s.forEach((r=>{t.has(r)||i.push(r)})),this.documentOverlayCache.getOverlays(e,i).next((r=>{r.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,s,i){let r=tn();const o=Gs(),c=(function(){return Gs()})();return t.forEach(((u,d)=>{const m=s.get(d.key);i.has(d.key)&&(m===void 0||m.mutation instanceof zr)?r=r.insert(d.key,d):m!==void 0?(o.set(d.key,m.mutation.getFieldMask()),Ks(m.mutation,d,m.mutation.getFieldMask(),fe.now())):o.set(d.key,Ft.empty())})),this.recalculateAndSaveOverlays(e,r).next((u=>(u.forEach(((d,m)=>o.set(d,m))),t.forEach(((d,m)=>c.set(d,new Lb(m,o.get(d)??null)))),c)))}recalculateAndSaveOverlays(e,t){const s=Gs();let i=new he(((o,c)=>o-c)),r=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((u=>{const d=t.get(u);if(d===null)return;let m=s.get(u)||Ft.empty();m=c.applyToLocalView(d,m),s.set(u,m);const v=(i.get(c.batchId)||Z()).add(u);i=i.insert(c.batchId,v)}))})).next((()=>{const o=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,m=u.value,v=uf();m.forEach((T=>{if(!r.has(T)){const C=pf(t.get(T),s.get(T));C!==null&&v.set(T,C),r=r.add(T)}})),o.push(this.documentOverlayCache.saveOverlays(e,d,v))}return R.waitFor(o)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,i){return M_(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):V_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,i):this.getDocumentsMatchingCollectionQuery(e,t,s,i)}getNextDocuments(e,t,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,i).next((r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,i-r.size):R.resolve(vn());let c=ei,u=r;return o.next((d=>R.forEach(d,((m,v)=>(c<v.largestBatchId&&(c=v.largestBatchId),r.get(m)?R.resolve():this.remoteDocumentCache.getEntry(e,m).next((T=>{u=u.insert(m,T)}))))).next((()=>this.populateOverlays(e,d,r))).next((()=>this.computeViews(e,u,d,Z()))).next((m=>({batchId:c,changes:B_(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next((s=>{let i=Vs();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,i){const r=t.collectionGroup;let o=Vs();return this.indexManager.getCollectionParents(e,r).next((c=>R.forEach(c,(u=>{const d=(function(v,T){return new jr(T,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)})(t,u.child(r));return this.getDocumentsMatchingCollectionQuery(e,d,s,i).next((m=>{m.forEach(((v,T)=>{o=o.insert(v,T)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,r,i)))).next((o=>{r.forEach(((u,d)=>{const m=d.getKey();o.get(m)===null&&(o=o.insert(m,Ce.newInvalidDocument(m)))}));let c=Vs();return o.forEach(((u,d)=>{const m=r.get(u);m!==void 0&&Ks(m.mutation,d,Ft.empty(),fe.now()),Hr(t,d)&&(c=c.insert(u,d))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return R.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:qn(i.createTime)}})(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(i){return{name:i.name,query:Eb(i.bundledQuery),readTime:qn(i.readTime)}})(t)),R.resolve()}}/**
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
 */class Ob{constructor(){this.overlays=new he(B.comparator),this.Lr=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const s=vn();return R.forEach(t,(i=>this.getOverlay(e,i).next((r=>{r!==null&&s.set(i,r)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((i,r)=>{this.bt(e,t,r)})),R.resolve()}removeOverlaysForBatchId(e,t,s){const i=this.Lr.get(s);return i!==void 0&&(i.forEach((r=>this.overlays=this.overlays.remove(r))),this.Lr.delete(s)),R.resolve()}getOverlaysForCollection(e,t,s){const i=vn(),r=t.length+1,o=new B(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===r&&u.largestBatchId>s&&i.set(u.getKey(),u)}return R.resolve(i)}getOverlaysForCollectionGroup(e,t,s,i){let r=new he(((d,m)=>d-m));const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>s){let m=r.get(d.largestBatchId);m===null&&(m=vn(),r=r.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=vn(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((d,m)=>c.set(d,m))),!(c.size()>=i)););return R.resolve(c)}bt(e,t,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(s.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new tb(t,s));let r=this.Lr.get(t);r===void 0&&(r=Z(),this.Lr.set(t,r)),this.Lr.set(t,r.add(s.key))}}/**
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
 */class Mb{constructor(){this.sessionToken=Te.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(){this.kr=new ve(_e.Kr),this.qr=new ve(_e.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new _e(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new _e(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new B(new ie([])),s=new _e(t,e),i=new _e(t,e+1),r=[];return this.qr.forEachInRange([s,i],(o=>{this.Wr(o),r.push(o.key)})),r}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new B(new ie([])),s=new _e(t,e),i=new _e(t,e+1);let r=Z();return this.qr.forEachInRange([s,i],(o=>{r=r.add(o.key)})),r}containsKey(e){const t=new _e(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class _e{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return B.comparator(e.key,t.key)||J(e.Hr,t.Hr)}static Ur(e,t){return J(e.Hr,t.Hr)||B.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new ve(_e.Kr)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,i){const r=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new eb(r,t,s,i);this.mutationQueue.push(o);for(const c of i)this.Jr=this.Jr.add(new _e(c.key,r)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,t){return R.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=this.Xr(s),r=i<0?0:i;return R.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?f_:this.Yn-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new _e(t,0),i=new _e(t,Number.POSITIVE_INFINITY),r=[];return this.Jr.forEachInRange([s,i],(o=>{const c=this.Zr(o.Hr);r.push(c)})),R.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new ve(J);return t.forEach((i=>{const r=new _e(i,0),o=new _e(i,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([r,o],(c=>{s=s.add(c.Hr)}))})),R.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1;let r=s;B.isDocumentKey(r)||(r=r.child(""));const o=new _e(new B(r),0);let c=new ve(J);return this.Jr.forEachWhile((u=>{const d=u.key.path;return!!s.isPrefixOf(d)&&(d.length===i&&(c=c.add(u.Hr)),!0)}),o),R.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((s=>{const i=this.Zr(s);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){re(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Jr;return R.forEach(t.mutations,(i=>{const r=new _e(i.key,t.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Jr=s}))}nr(e){}containsKey(e,t){const s=new _e(t,0),i=this.Jr.firstAfterOrEqual(s);return R.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e){this.ti=e,this.docs=(function(){return new he(B.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,i=this.docs.get(s),r=i?i.size:0,o=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return R.resolve(s?s.document.mutableCopy():Ce.newInvalidDocument(t))}getEntries(e,t){let s=tn();return t.forEach((i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Ce.newInvalidDocument(i))})),R.resolve(s)}getDocumentsMatchingQuery(e,t,s,i){let r=tn();const o=t.path,c=new B(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:m}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||l_(c_(m),s)<=0||(i.has(m.key)||Hr(t,m))&&(r=r.insert(m.key,m.mutableCopy()))}return R.resolve(r)}getAllFromCollectionGroup(e,t,s,i){q(9500)}ni(e,t){return R.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new Ub(this)}getSize(e){return R.resolve(this.size)}}class Ub extends xb{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,i)=>{i.isValidDocument()?t.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(s)})),R.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e){this.persistence=e,this.ri=new Pn((t=>nc(t)),sc),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.ii=0,this.si=new cc,this.targetCount=0,this.oi=Zn._r()}forEachTarget(e,t){return this.ri.forEach(((s,i)=>t(i))),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),R.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Zn(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.lr(t),R.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,s){let i=0;const r=[];return this.ri.forEach(((o,c)=>{c.sequenceNumber<=t&&s.get(c.targetId)===null&&(this.ri.delete(o),r.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)})),R.waitFor(r).next((()=>i))}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return R.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),R.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach((o=>{r.push(i.markPotentiallyOrphaned(e,o))})),R.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return R.resolve(s)}containsKey(e,t){return R.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e,t){this._i={},this.overlays={},this.ai=new $r(0),this.ui=!1,this.ui=!0,this.ci=new Mb,this.referenceDelegate=e(this),this.li=new Fb(this),this.indexManager=new Ib,this.remoteDocumentCache=(function(i){return new $b(i)})((s=>this.referenceDelegate.hi(s))),this.serializer=new Tb(t),this.Pi=new Nb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ob,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new Vb(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){O("MemoryPersistence","Starting transaction:",e);const i=new jb(this.ai.next());return this.referenceDelegate.Ti(),s(i).next((r=>this.referenceDelegate.Ii(i).next((()=>r)))).toPromise().then((r=>(i.raiseOnCommittedEvent(),r)))}Ei(e,t){return R.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class jb extends h_{constructor(e){super(),this.currentSequenceNumber=e}}class lc{constructor(e){this.persistence=e,this.Ri=new cc,this.Ai=null}static Vi(e){return new lc(e)}get di(){if(this.Ai)return this.Ai;throw q(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),R.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),R.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((i=>this.di.add(i.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((r=>this.di.add(r.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.di,(s=>{const i=B.fromPath(s);return this.mi(e,i).next((r=>{r||t.removeEntry(i,H.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return R.or([()=>R.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class br{constructor(e,t){this.persistence=e,this.fi=new Pn((s=>p_(s.path)),((s,i)=>s.isEqual(i))),this.garbageCollector=Pb(this,t)}static Vi(e,t){return new br(e,t)}Ti(){}Ii(e){return R.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((i=>s+i))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return R.forEach(this.fi,((s,i)=>this.wr(e,s,i).next((r=>r?R.resolve():t(i)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const i=this.persistence.getRemoteDocumentCache(),r=i.newChangeBuffer();return i.ni(e,(o=>this.wr(e,o,t).next((c=>{c||(s++,r.removeEntry(o,H.min()))})))).next((()=>r.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),R.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),R.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),R.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),R.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Zi(e.data.value)),t}wr(e,t,s){return R.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.fi.get(t);return R.resolve(i!==void 0&&i>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,t,s,i){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=i}static Es(e,t){let s=Z(),i=Z();for(const r of t.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new uc(e,t.fromCache,s,i)}}/**
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
 */class Bb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Hb{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Om()?8:d_(Re())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,i){const r={result:null};return this.gs(e,t).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ps(e,t,i,s).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new Bb;return this.ys(e,t,o).next((c=>{if(r.result=c,this.As)return this.ws(e,t,o,c.size)}))})).next((()=>r.result))}ws(e,t,s,i){return s.documentReadCount<this.Vs?(Mn()<=Q.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",Vn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),R.resolve()):(Mn()<=Q.DEBUG&&O("QueryEngine","Query:",Vn(t),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.ds*i?(Mn()<=Q.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",Vn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ut(t))):R.resolve())}gs(e,t){if(Mu(t))return R.resolve(null);let s=ut(t);return this.indexManager.getIndexType(e,s).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=pa(t,null,"F"),s=ut(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((r=>{const o=Z(...r);return this.fs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,s).next((u=>{const d=this.bs(t,c);return this.Ss(t,d,o,u.readTime)?this.gs(e,pa(t,null,"F")):this.Ds(e,d,t,u)}))))})))))}ps(e,t,s,i){return Mu(t)||i.isEqual(H.min())?R.resolve(null):this.fs.getDocuments(e,s).next((r=>{const o=this.bs(t,r);return this.Ss(t,o,s,i)?R.resolve(null):(Mn()<=Q.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Vn(t)),this.Ds(e,o,t,a_(i,ei)).next((c=>c)))}))}bs(e,t){let s=new ve(cf(e));return t.forEach(((i,r)=>{Hr(e,r)&&(s=s.add(r))})),s}Ss(e,t,s,i){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}ys(e,t,s){return Mn()<=Q.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Vn(t)),this.fs.getDocumentsMatchingQuery(e,t,Yt.min(),s)}Ds(e,t,s,i){return this.fs.getDocumentsMatchingQuery(e,s,i).next((r=>(t.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc="LocalStore",qb=3e8;class zb{constructor(e,t,s,i){this.persistence=e,this.Cs=t,this.serializer=i,this.vs=new he(J),this.Fs=new Pn((r=>nc(r)),sc),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Db(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function Wb(n,e,t,s){return new zb(n,e,t,s)}async function kf(n,e){const t=X(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let i;return t.mutationQueue.getAllMutationBatches(s).next((r=>(i=r,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((r=>{const o=[],c=[];let u=Z();for(const d of i){o.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}for(const d of r){c.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(s,u).next((d=>({Ns:d,removedBatchIds:o,addedBatchIds:c})))}))}))}function Cf(n){const e=X(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function Gb(n,e){const t=X(n),s=e.snapshotVersion;let i=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});i=t.vs;const c=[];e.targetChanges.forEach(((m,v)=>{const T=i.get(v);if(!T)return;c.push(t.li.removeMatchingKeys(r,m.removedDocuments,v).next((()=>t.li.addMatchingKeys(r,m.addedDocuments,v))));let C=T.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(v)!==null?C=C.withResumeToken(Te.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):m.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(m.resumeToken,s)),i=i.insert(v,C),(function(M,N,z){return M.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=qb?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0})(T,C,m)&&c.push(t.li.updateTargetData(r,C))}));let u=tn(),d=Z();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(r,m))})),c.push(Kb(r,o,e.documentUpdates).next((m=>{u=m.Bs,d=m.Ls}))),!s.isEqual(H.min())){const m=t.li.getLastRemoteSnapshotVersion(r).next((v=>t.li.setTargetsMetadata(r,r.currentSequenceNumber,s)));c.push(m)}return R.waitFor(c).next((()=>o.apply(r))).next((()=>t.localDocuments.getLocalViewOfDocuments(r,u,d))).next((()=>u))})).then((r=>(t.vs=i,r)))}function Kb(n,e,t){let s=Z(),i=Z();return t.forEach((r=>s=s.add(r))),e.getEntries(n,s).next((r=>{let o=tn();return t.forEach(((c,u)=>{const d=r.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(H.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):O(hc,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)})),{Bs:o,Ls:i}}))}function Qb(n,e){const t=X(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let i;return t.li.getTargetData(s,e).next((r=>r?(i=r,R.resolve(i)):t.li.allocateTargetId(s).next((o=>(i=new jt(e,o,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,i).next((()=>i)))))))})).then((s=>{const i=t.vs.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function wa(n,e,t){const s=X(n),i=s.vs.get(e),r=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",r,(o=>s.persistence.referenceDelegate.removeTarget(o,i)))}catch(o){if(!ls(o))throw o;O(hc,`Failed to update sequence numbers for target ${e}: ${o}`)}s.vs=s.vs.remove(e),s.Fs.delete(i.target)}function Qu(n,e,t){const s=X(n);let i=H.min(),r=Z();return s.persistence.runTransaction("Execute query","readwrite",(o=>(function(u,d,m){const v=X(u),T=v.Fs.get(m);return T!==void 0?R.resolve(v.vs.get(T)):v.li.getTargetData(d,m)})(s,o,ut(e)).next((c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(o,c.targetId).next((u=>{r=u}))})).next((()=>s.Cs.getDocumentsMatchingQuery(o,e,t?i:H.min(),t?r:Z()))).next((c=>(Jb(s,U_(e),c),{documents:c,ks:r})))))}function Jb(n,e,t){let s=n.Ms.get(e)||H.min();t.forEach(((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)})),n.Ms.set(e,s)}class Ju{constructor(){this.activeTargetIds=z_()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Yb{constructor(){this.vo=new Ju,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Ju,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Xb{Mo(e){}shutdown(){}}/**
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
 */const Yu="ConnectivityMonitor";class Xu{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){O(Yu,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){O(Yu,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Fi=null;function _a(){return Fi===null?Fi=(function(){return 268435456+Math.round(2147483648*Math.random())})():Fi++,"0x"+Fi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o="RestConnection",Zb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class eT{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${i}`,this.$o=this.databaseId.database===gr?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Wo(e,t,s,i,r){const o=_a(),c=this.Qo(e,t.toUriEncodedString());O($o,`Sending RPC '${e}' ${o}:`,c,s);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,r);const{host:d}=new URL(c),m=sn(d);return this.zo(e,c,u,s,m).then((v=>(O($o,`Received RPC '${e}' ${o}: `,v),v)),(v=>{throw kn($o,`RPC '${e}' ${o} failed with error: `,v,"url: ",c,"request:",s),v}))}jo(e,t,s,i,r,o){return this.Wo(e,t,s,i,r)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+cs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,r)=>e[r]=i)),s&&s.headers.forEach(((i,r)=>e[r]=i))}Qo(e,t){const s=Zb[e];let i=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae="WebChannelConnection",Rs=(n,e,t)=>{n.listen(e,(s=>{try{t(s)}catch(i){setTimeout((()=>{throw i}),0)}}))};class zn extends eT{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!zn.c_){const e=Hd();Rs(e,Bd.STAT_EVENT,(t=>{t.stat===oa.PROXY?O(Ae,"STAT_EVENT: detected buffering proxy"):t.stat===oa.NOPROXY&&O(Ae,"STAT_EVENT: detected no buffering proxy")})),zn.c_=!0}}zo(e,t,s,i,r){const o=_a();return new Promise(((c,u)=>{const d=new Fd;d.setWithCredentials(!0),d.listenOnce(jd.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Yi.NO_ERROR:const v=d.getResponseJson();O(Ae,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(v)),c(v);break;case Yi.TIMEOUT:O(Ae,`RPC '${e}' ${o} timed out`),u(new U(L.DEADLINE_EXCEEDED,"Request time out"));break;case Yi.HTTP_ERROR:const T=d.getStatus();if(O(Ae,`RPC '${e}' ${o} failed with status:`,T,"response text:",d.getResponseText()),T>0){let C=d.getResponseJson();Array.isArray(C)&&(C=C[0]);const D=C==null?void 0:C.error;if(D&&D.status&&D.message){const M=(function(z){const G=z.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(G)>=0?G:L.UNKNOWN})(D.status);u(new U(M,D.message))}else u(new U(L.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new U(L.UNAVAILABLE,"Connection failed."));break;default:q(9055,{l_:e,streamId:o,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{O(Ae,`RPC '${e}' ${o} completed.`)}}));const m=JSON.stringify(i);O(Ae,`RPC '${e}' ${o} sending request:`,i),d.send(t,"POST",m,s,15)}))}T_(e,t,s){const i=_a(),r=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const d=r.join("");O(Ae,`Creating RPC '${e}' stream ${i}: ${d}`,c);const m=o.createWebChannel(d,c);this.I_(m);let v=!1,T=!1;const C=new tT({Ho:D=>{T?O(Ae,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(v||(O(Ae,`Opening RPC '${e}' stream ${i} transport.`),m.open(),v=!0),O(Ae,`RPC '${e}' stream ${i} sending:`,D),m.send(D))},Jo:()=>m.close()});return Rs(m,Ms.EventType.OPEN,(()=>{T||(O(Ae,`RPC '${e}' stream ${i} transport opened.`),C.i_())})),Rs(m,Ms.EventType.CLOSE,(()=>{T||(T=!0,O(Ae,`RPC '${e}' stream ${i} transport closed`),C.o_(),this.E_(m))})),Rs(m,Ms.EventType.ERROR,(D=>{T||(T=!0,kn(Ae,`RPC '${e}' stream ${i} transport errored. Name:`,D.name,"Message:",D.message),C.o_(new U(L.UNAVAILABLE,"The operation could not be completed")))})),Rs(m,Ms.EventType.MESSAGE,(D=>{var M;if(!T){const N=D.data[0];re(!!N,16349);const z=N,G=(z==null?void 0:z.error)||((M=z[0])==null?void 0:M.error);if(G){O(Ae,`RPC '${e}' stream ${i} received error:`,G);const V=G.status;let j=(function(b){const y=de[b];if(y!==void 0)return gf(y)})(V),K=G.message;V==="NOT_FOUND"&&K.includes("database")&&K.includes("does not exist")&&K.includes(this.databaseId.database)&&kn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),j===void 0&&(j=L.INTERNAL,K="Unknown error status: "+V+" with message "+G.message),T=!0,C.o_(new U(j,K)),m.close()}else O(Ae,`RPC '${e}' stream ${i} received:`,N),C.__(N)}})),zn.u_(),setTimeout((()=>{C.s_()}),0),C}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return qd()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(n){return new zn(n)}function Uo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(n){return new lb(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zn.c_=!1;class Pf{constructor(e,t,s=1e3,i=1.5,r=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=i,this.V_=r,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-s);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu="PersistentStream";class sT{constructor(e,t,s,i,r,o,c,u){this.Ci=e,this.b_=s,this.S_=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Pf(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===L.RESOURCE_EXHAUSTED?(It(t.toString()),It("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,i])=>{this.D_===t&&this.G_(s,i)}),(s=>{e((()=>{const i=new U(L.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(i)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((i=>{s((()=>this.z_(i)))})),this.stream.onMessage((i=>{s((()=>++this.F_==1?this.H_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return O(Zu,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(O(Zu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class iT extends sT{constructor(e,t,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,i,o),this.serializer=r}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=pb(this.serializer,e),s=(function(r){if(!("targetChange"in r))return H.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?H.min():o.readTime?qn(o.readTime):H.min()})(e);return this.listener.J_(t,s)}Z_(e){const t={};t.database=zu(this.serializer),t.addTarget=(function(r,o){let c;const u=o.target;if(c=fa(u)?{documents:mb(r,u)}:{query:gb(r,u).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=hb(r,o.resumeToken);const d=ya(r,o.expectedCount);d!==null&&(c.expectedCount=d)}else if(o.snapshotVersion.compareTo(H.min())>0){c.readTime=ub(r,o.snapshotVersion.toTimestamp());const d=ya(r,o.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,e);const s=vb(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=zu(this.serializer),t.removeTarget=e,this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{}class oT extends rT{constructor(e,t,s,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new U(L.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Wo(e,va(t,s),i,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new U(L.UNKNOWN,r.toString())}))}jo(e,t,s,i,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.jo(e,va(t,s),i,o,c,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new U(L.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function aT(n,e,t,s){return new oT(n,e,t,s)}class cT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(It(t),this.aa=!1):O("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="RemoteStore";class lT{constructor(e,t,s,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=r,this.Aa.Mo((o=>{s.enqueueAndForget((async()=>{gi(this)&&(O(es,"Restarting streams for network reachability change."),await(async function(u){const d=X(u);d.Ea.add(4),await mi(d),d.Va.set("Unknown"),d.Ea.delete(4),await Gr(d)})(this))}))})),this.Va=new cT(s,i)}}async function Gr(n){if(gi(n))for(const e of n.Ra)await e(!0)}async function mi(n){for(const e of n.Ra)await e(!1)}function xf(n,e){const t=X(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),mc(t)?pc(t):us(t).O_()&&fc(t,e))}function dc(n,e){const t=X(n),s=us(t);t.Ia.delete(e),s.O_()&&Lf(t,e),t.Ia.size===0&&(s.O_()?s.L_():gi(t)&&t.Va.set("Unknown"))}function fc(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}us(n).Z_(e)}function Lf(n,e){n.da.$e(e),us(n).X_(e)}function pc(n){n.da=new rb({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),us(n).start(),n.Va.ua()}function mc(n){return gi(n)&&!us(n).x_()&&n.Ia.size>0}function gi(n){return X(n).Ea.size===0}function Df(n){n.da=void 0}async function uT(n){n.Va.set("Online")}async function hT(n){n.Ia.forEach(((e,t)=>{fc(n,e)}))}async function dT(n,e){Df(n),mc(n)?(n.Va.ha(e),pc(n)):n.Va.set("Unknown")}async function fT(n,e,t){if(n.Va.set("Online"),e instanceof vf&&e.state===2&&e.cause)try{await(async function(i,r){const o=r.cause;for(const c of r.targetIds)i.Ia.has(c)&&(await i.remoteSyncer.rejectListen(c,o),i.Ia.delete(c),i.da.removeTarget(c))})(n,e)}catch(s){O(es,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await eh(n,s)}else if(e instanceof tr?n.da.Xe(e):e instanceof yf?n.da.st(e):n.da.tt(e),!t.isEqual(H.min()))try{const s=await Cf(n.localStore);t.compareTo(s)>=0&&await(function(r,o){const c=r.da.Tt(o);return c.targetChanges.forEach(((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const m=r.Ia.get(d);m&&r.Ia.set(d,m.withResumeToken(u.resumeToken,o))}})),c.targetMismatches.forEach(((u,d)=>{const m=r.Ia.get(u);if(!m)return;r.Ia.set(u,m.withResumeToken(Te.EMPTY_BYTE_STRING,m.snapshotVersion)),Lf(r,u);const v=new jt(m.target,u,d,m.sequenceNumber);fc(r,v)})),r.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(s){O(es,"Failed to raise snapshot:",s),await eh(n,s)}}async function eh(n,e,t){if(!ls(e))throw e;n.Ea.add(1),await mi(n),n.Va.set("Offline"),t||(t=()=>Cf(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{O(es,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Gr(n)}))}async function th(n,e){const t=X(n);t.asyncQueue.verifyOperationInProgress(),O(es,"RemoteStore received new credentials");const s=gi(t);t.Ea.add(3),await mi(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Gr(t)}async function pT(n,e){const t=X(n);e?(t.Ea.delete(2),await Gr(t)):e||(t.Ea.add(2),await mi(t),t.Va.set("Unknown"))}function us(n){return n.ma||(n.ma=(function(t,s,i){const r=X(t);return r.sa(),new iT(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)})(n.datastore,n.asyncQueue,{Zo:uT.bind(null,n),Yo:hT.bind(null,n),t_:dT.bind(null,n),J_:fT.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),mc(n)?pc(n):n.Va.set("Unknown")):(await n.ma.stop(),Df(n))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,t,s,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Hn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,i,r){const o=Date.now()+s,c=new gc(e,t,o,i,r);return c.start(s),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Nf(n,e){if(It("AsyncQueue",`${e}: ${n}`),ls(n))return new U(L.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{static emptySet(e){return new Wn(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||B.comparator(t.key,s.key):(t,s)=>B.comparator(t.key,s.key),this.keyedMap=Vs(),this.sortedSet=new he(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Wn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Wn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(){this.ga=new he(B.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):q(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class ts{constructor(e,t,s,i,r,o,c,u,d){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,s,i,r){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new ts(e,t,Wn.emptySet(t),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Br(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==s[i].type||!t[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class gT{constructor(){this.queries=sh(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const i=X(t),r=i.queries;i.queries=sh(),r.forEach(((o,c)=>{for(const u of c.ba)u.onError(s)}))})(this,new U(L.ABORTED,"Firestore shutting down"))}}function sh(){return new Pn((n=>af(n)),Br)}async function yT(n,e){const t=X(n);let s=3;const i=e.query;let r=t.queries.get(i);r?!r.Sa()&&e.Da()&&(s=2):(r=new mT,s=e.Da()?0:1);try{switch(s){case 0:r.wa=await t.onListen(i,!0);break;case 1:r.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const c=Nf(o,`Initialization of query '${Vn(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,r),r.ba.push(e),e.va(t.onlineState),r.wa&&e.Fa(r.wa)&&yc(t)}async function vT(n,e){const t=X(n),s=e.query;let i=3;const r=t.queries.get(s);if(r){const o=r.ba.indexOf(e);o>=0&&(r.ba.splice(o,1),r.ba.length===0?i=e.Da()?0:1:!r.Sa()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function wT(n,e){const t=X(n);let s=!1;for(const i of e){const r=i.query,o=t.queries.get(r);if(o){for(const c of o.ba)c.Fa(i)&&(s=!0);o.wa=i}}s&&yc(t)}function _T(n,e,t){const s=X(n),i=s.queries.get(e);if(i)for(const r of i.ba)r.onError(t);s.queries.delete(e)}function yc(n){n.Ca.forEach((e=>{e.next()}))}var ba,ih;(ih=ba||(ba={})).Ma="default",ih.Cache="cache";class bT{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new ts(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.Ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=ts.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ba.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e){this.key=e}}class Mf{constructor(e){this.key=e}}class TT{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Z(),this.mutatedKeys=Z(),this.eu=cf(e),this.tu=new Wn(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new nh,i=t?t.tu:this.tu;let r=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((m,v)=>{const T=i.get(m),C=Hr(this.query,v)?v:null,D=!!T&&this.mutatedKeys.has(T.key),M=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let N=!1;T&&C?T.data.isEqual(C.data)?D!==M&&(s.track({type:3,doc:C}),N=!0):this.su(T,C)||(s.track({type:2,doc:C}),N=!0,(u&&this.eu(C,u)>0||d&&this.eu(C,d)<0)&&(c=!0)):!T&&C?(s.track({type:0,doc:C}),N=!0):T&&!C&&(s.track({type:1,doc:T}),N=!0,(u||d)&&(c=!0)),N&&(C?(o=o.add(C),r=M?r.add(m):r.delete(m)):(o=o.delete(m),r=r.delete(m)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const m=this.query.limitType==="F"?o.last():o.first();o=o.delete(m.key),r=r.delete(m.key),s.track({type:1,doc:m})}return{tu:o,iu:s,Ss:c,mutatedKeys:r}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,i){const r=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((m,v)=>(function(C,D){const M=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q(20277,{Vt:N})}};return M(C)-M(D)})(m.type,v.type)||this.eu(m.doc,v.doc))),this.ou(s),i=i??!1;const c=t&&!i?this._u():[],u=this.Ya.size===0&&this.current&&!i?1:0,d=u!==this.Xa;return this.Xa=u,o.length!==0||d?{snapshot:new ts(this.query,e.tu,r,o,e.mutatedKeys,u===0,d,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new nh,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Z(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new Mf(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new Of(s))})),t}cu(e){this.Za=e.ks,this.Ya=Z();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return ts.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const vc="SyncEngine";class ET{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class IT{constructor(e){this.key=e,this.hu=!1}}class ST{constructor(e,t,s,i,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Pn((c=>af(c)),Br),this.Iu=new Map,this.Eu=new Set,this.Ru=new he(B.comparator),this.Au=new Map,this.Vu=new cc,this.du={},this.mu=new Map,this.fu=Zn.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function AT(n,e,t=!0){const s=jf(n);let i;const r=s.Tu.get(e);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.lu()):i=await Vf(s,e,t,!0),i}async function kT(n,e){const t=jf(n);await Vf(t,e,!0,!1)}async function Vf(n,e,t,s){const i=await Qb(n.localStore,ut(e)),r=i.targetId,o=n.sharedClientState.addLocalQueryTarget(r,t);let c;return s&&(c=await CT(n,e,r,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&xf(n.remoteStore,i),c}async function CT(n,e,t,s,i){n.pu=(v,T,C)=>(async function(M,N,z,G){let V=N.view.ru(z);V.Ss&&(V=await Qu(M.localStore,N.query,!1).then((({documents:b})=>N.view.ru(b,V))));const j=G&&G.targetChanges.get(N.targetId),K=G&&G.targetMismatches.get(N.targetId)!=null,te=N.view.applyChanges(V,M.isPrimaryClient,j,K);return oh(M,N.targetId,te.au),te.snapshot})(n,v,T,C);const r=await Qu(n.localStore,e,!0),o=new TT(e,r.ks),c=o.ru(r.documents),u=pi.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",i),d=o.applyChanges(c,n.isPrimaryClient,u);oh(n,t,d.au);const m=new ET(e,t,o);return n.Tu.set(e,m),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function RT(n,e,t){const s=X(n),i=s.Tu.get(e),r=s.Iu.get(i.targetId);if(r.length>1)return s.Iu.set(i.targetId,r.filter((o=>!Br(o,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await wa(s.localStore,i.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(i.targetId),t&&dc(s.remoteStore,i.targetId),Ta(s,i.targetId)})).catch(Vr)):(Ta(s,i.targetId),await wa(s.localStore,i.targetId,!0))}async function PT(n,e){const t=X(n),s=t.Tu.get(e),i=t.Iu.get(s.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),dc(t.remoteStore,s.targetId))}async function $f(n,e){const t=X(n);try{const s=await Gb(t.localStore,e);e.targetChanges.forEach(((i,r)=>{const o=t.Au.get(r);o&&(re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?re(o.hu,14607):i.removedDocuments.size>0&&(re(o.hu,42227),o.hu=!1))})),await Ff(t,s,e)}catch(s){await Vr(s)}}function rh(n,e,t){const s=X(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const i=[];s.Tu.forEach(((r,o)=>{const c=o.view.va(e);c.snapshot&&i.push(c.snapshot)})),(function(o,c){const u=X(o);u.onlineState=c;let d=!1;u.queries.forEach(((m,v)=>{for(const T of v.ba)T.va(c)&&(d=!0)})),d&&yc(u)})(s.eventManager,e),i.length&&s.Pu.J_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function xT(n,e,t){const s=X(n);s.sharedClientState.updateQueryState(e,"rejected",t);const i=s.Au.get(e),r=i&&i.key;if(r){let o=new he(B.comparator);o=o.insert(r,Ce.newNoDocument(r,H.min()));const c=Z().add(r),u=new Wr(H.min(),new Map,new he(J),o,c);await $f(s,u),s.Ru=s.Ru.remove(r),s.Au.delete(e),wc(s)}else await wa(s.localStore,e,!1).then((()=>Ta(s,e,t))).catch(Vr)}function Ta(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((s=>{n.Vu.containsKey(s)||Uf(n,s)}))}function Uf(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(dc(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),wc(n))}function oh(n,e,t){for(const s of t)s instanceof Of?(n.Vu.addReference(s.key,e),LT(n,s)):s instanceof Mf?(O(vc,"Document no longer in limbo: "+s.key),n.Vu.removeReference(s.key,e),n.Vu.containsKey(s.key)||Uf(n,s.key)):q(19791,{wu:s})}function LT(n,e){const t=e.key,s=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(s)||(O(vc,"New document in limbo: "+t),n.Eu.add(s),wc(n))}function wc(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new B(ie.fromString(e)),s=n.fu.next();n.Au.set(s,new IT(t)),n.Ru=n.Ru.insert(t,s),xf(n.remoteStore,new jt(ut(ic(t.path)),s,"TargetPurposeLimboResolution",$r.ce))}}async function Ff(n,e,t){const s=X(n),i=[],r=[],o=[];s.Tu.isEmpty()||(s.Tu.forEach(((c,u)=>{o.push(s.pu(u,e,t).then((d=>{var m;if((d||t)&&s.isPrimaryClient){const v=d?!d.fromCache:(m=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:m.current;s.sharedClientState.updateQueryState(u.targetId,v?"current":"not-current")}if(d){i.push(d);const v=uc.Es(u.targetId,d);r.push(v)}})))})),await Promise.all(o),s.Pu.J_(i),await(async function(u,d){const m=X(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(v=>R.forEach(d,(T=>R.forEach(T.Ts,(C=>m.persistence.referenceDelegate.addReference(v,T.targetId,C))).next((()=>R.forEach(T.Is,(C=>m.persistence.referenceDelegate.removeReference(v,T.targetId,C)))))))))}catch(v){if(!ls(v))throw v;O(hc,"Failed to update sequence numbers: "+v)}for(const v of d){const T=v.targetId;if(!v.fromCache){const C=m.vs.get(T),D=C.snapshotVersion,M=C.withLastLimboFreeSnapshotVersion(D);m.vs=m.vs.insert(T,M)}}})(s.localStore,r))}async function DT(n,e){const t=X(n);if(!t.currentUser.isEqual(e)){O(vc,"User change. New user:",e.toKey());const s=await kf(t.localStore,e);t.currentUser=e,(function(r,o){r.mu.forEach((c=>{c.forEach((u=>{u.reject(new U(L.CANCELLED,o))}))})),r.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ff(t,s.Ns)}}function NT(n,e){const t=X(n),s=t.Au.get(e);if(s&&s.hu)return Z().add(s.key);{let i=Z();const r=t.Iu.get(e);if(!r)return i;for(const o of r){const c=t.Tu.get(o);i=i.unionWith(c.view.nu)}return i}}function jf(n){const e=X(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=$f.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=NT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xT.bind(null,e),e.Pu.J_=wT.bind(null,e.eventManager),e.Pu.yu=_T.bind(null,e.eventManager),e}class Tr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Rf(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Wb(this.persistence,new Hb,e.initialUser,this.serializer)}Cu(e){return new Af(lc.Vi,this.serializer)}Du(e){return new Yb}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Tr.provider={build:()=>new Tr};class OT extends Tr{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){re(this.persistence.referenceDelegate instanceof br,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Cb(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?je.withCacheSize(this.cacheSizeBytes):je.DEFAULT;return new Af((s=>br.Vi(s,t)),this.serializer)}}class Ea{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>rh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=DT.bind(null,this.syncEngine),await pT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new gT})()}createDatastore(e){const t=Rf(e.databaseInfo.databaseId),s=nT(e.databaseInfo);return aT(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,i,r,o,c){return new lT(s,i,r,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>rh(this.syncEngine,t,0)),(function(){return Xu.v()?new Xu:new Xb})())}createSyncEngine(e,t){return(function(i,r,o,c,u,d,m){const v=new ST(i,r,o,c,u,d);return m&&(v.gu=!0),v})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(i){const r=X(i);O(es,"RemoteStore shutting down."),r.Ea.add(5),await mi(r),r.Aa.shutdown(),r.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Ea.provider={build:()=>new Ea};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class MT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):It("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="FirestoreClient";class VT{constructor(e,t,s,i,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=i,this.user=ke.UNAUTHENTICATED,this.clientId=Gd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,(async o=>{O(nn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(s,(o=>(O(nn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Hn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Nf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Fo(n,e){n.asyncQueue.verifyOperationInProgress(),O(nn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async i=>{s.isEqual(i)||(await kf(e.localStore,i),s=i)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function ah(n,e){n.asyncQueue.verifyOperationInProgress();const t=await $T(n);O(nn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>th(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,i)=>th(e.remoteStore,i))),n._onlineComponents=e}async function $T(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O(nn,"Using user provided OfflineComponentProvider");try{await Fo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;kn("Error using user provided cache. Falling back to memory cache: "+t),await Fo(n,new Tr)}}else O(nn,"Using default OfflineComponentProvider"),await Fo(n,new OT(void 0));return n._offlineComponents}async function UT(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O(nn,"Using user provided OnlineComponentProvider"),await ah(n,n._uninitializedComponentsProvider._online)):(O(nn,"Using default OnlineComponentProvider"),await ah(n,new Ea))),n._onlineComponents}async function ch(n){const e=await UT(n),t=e.eventManager;return t.onListen=AT.bind(null,e.syncEngine),t.onUnlisten=RT.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=kT.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=PT.bind(null,e.syncEngine),t}function FT(n,e,t,s){const i=new MT(s),r=new bT(e,i,t);return n.asyncQueue.enqueueAndForget((async()=>yT(await ch(n),r))),()=>{i.Nu(),n.asyncQueue.enqueueAndForget((async()=>vT(await ch(n),r)))}}/**
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
 */function Bf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT="ComponentProvider",lh=new Map;function BT(n,e,t,s,i){return new v_(n,e,t,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,Bf(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf="firestore.googleapis.com",uh=!0;class hh{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new U(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Hf,this.ssl=uh}else this.host=e.host,this.ssl=e.ssl??uh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Sf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ab)throw new U(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}i_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bf(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new U(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new U(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new U(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,i){return s.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _c{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new U(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new Gw;switch(s.type){case"firstParty":return new Yw(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new U(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=lh.get(t);s&&(O(jT,"Removing Datastore"),lh.delete(t),s.terminate())})(this),Promise.resolve()}}function HT(n,e,t,s={}){var d;n=Xi(n,_c);const i=sn(e),r=n._getSettings(),o={...r,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;i&&(xa(`https://${c}`),La("Firestore",!0)),r.host!==Hf&&r.host!==c&&kn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...r,host:c,ssl:i,emulatorOptions:s};if(!Tn(u,o)&&(n._setSettings(u),s.mockUserToken)){let m,v;if(typeof s.mockUserToken=="string")m=s.mockUserToken,v=ke.MOCK_USER;else{m=qh(s.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const T=s.mockUserToken.sub||s.mockUserToken.user_id;if(!T)throw new U(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new ke(T)}n._authCredentials=new Kw(new Wd(m,v))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Kr(this.firestore,e,this._query)}}class qe{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qe(this.firestore,e,this._key)}toJSON(){return{type:qe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(di(t,qe._jsonSchema))return new qe(e,s||null,new B(ie.fromString(t.referencePath)))}}qe._jsonSchemaVersion="firestore/documentReference/1.0",qe._jsonSchema={type:pe("string",qe._jsonSchemaVersion),referencePath:pe("string")};class Gn extends Kr{constructor(e,t,s){super(e,t,ic(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qe(this.firestore,null,new B(e))}withConverter(e){return new Gn(this.firestore,e,this._path)}}function fn(n,e,...t){if(n=Ee(n),s_("collection","path",e),n instanceof _c){const s=ie.fromString(e,...t);return Eu(s),new Gn(n,null,s)}{if(!(n instanceof qe||n instanceof Gn))throw new U(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ie.fromString(e,...t));return Eu(s),new Gn(n.firestore,null,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh="AsyncQueue";class fh{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Pf(this,"async_queue_retry"),this._c=()=>{const s=Uo();s&&O(dh,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Uo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Uo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Hn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!ls(e))throw e;O(dh,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,It("INTERNAL UNHANDLED ERROR: ",ph(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=gc.createAndSchedule(this,e,t,s,(r=>this.hc(r)));return this.tc.push(i),i}uc(){this.nc&&q(47125,{Pc:ph(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function ph(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Ia extends _c{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=new fh,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new fh(e),this._firestoreClient=void 0,await e}}}function qT(n,e){const t=typeof n=="object"?n:Oa(),s=typeof n=="string"?n:gr,i=Rr(t,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=jh("firestore");r&&HT(i,...r)}return i}function zT(n){if(n._terminated)throw new U(L.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||WT(n),n._firestoreClient}function WT(n){var s,i,r,o;const e=n._freezeSettings(),t=BT(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(i=n._app)==null?void 0:i.options.apiKey,e);n._componentsProvider||(r=e.localCache)!=null&&r._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new VT(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(u){const d=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(d),_online:d}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this._byteString=e}static fromBase64String(e){try{return new it(Te.fromBase64String(e))}catch(t){throw new U(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new it(Te.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:it._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(di(e,it._jsonSchema))return it.fromBase64String(e.bytes)}}it._jsonSchemaVersion="firestore/bytes/1.0",it._jsonSchema={type:pe("string",it._jsonSchemaVersion),bytes:pe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new U(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new U(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new U(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:zt._jsonSchemaVersion}}static fromJSON(e){if(di(e,zt._jsonSchema))return new zt(e.latitude,e.longitude)}}zt._jsonSchemaVersion="firestore/geoPoint/1.0",zt._jsonSchema={type:pe("string",zt._jsonSchemaVersion),latitude:pe("number"),longitude:pe("number")};/**
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
 */class Wt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Wt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(di(e,Wt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Wt(e.vectorValues);throw new U(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Wt._jsonSchemaVersion="firestore/vectorValue/1.0",Wt._jsonSchema={type:pe("string",Wt._jsonSchemaVersion),vectorValues:pe("object")};function zf(n,e,t){if((e=Ee(e))instanceof qf)return e._internalPath;if(typeof e=="string")return KT(n,e);throw Sa("Field path arguments must be of type string or ",n)}const GT=new RegExp("[~\\*/\\[\\]]");function KT(n,e,t){if(e.search(GT)>=0)throw Sa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new qf(...e.split("."))._internalPath}catch{throw Sa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function Sa(n,e,t,s,i){let r=`Function ${e}() called with invalid data`;r+=". ";let o="";return new U(L.INVALID_ARGUMENT,r+n+o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{convertValue(e,t="none"){switch(en(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Zt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw q(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return fi(e,((i,r)=>{s[i]=this.convertValue(r,t)})),s}convertVectorValue(e){var s,i,r;const t=(r=(i=(s=e.fields)==null?void 0:s[la].arrayValue)==null?void 0:i.values)==null?void 0:r.map((o=>ue(o.doubleValue)));return new Wt(t)}convertGeoPoint(e){return new zt(ue(e.latitude),ue(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Fr(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(ti(e));default:return null}}convertTimestamp(e){const t=Xt(e);return new fe(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=ie.fromString(e);re(If(s),9688,{name:e});const i=new ni(s.get(1),s.get(3)),r=new B(s.popFirst(5));return i.isEqual(t)||It(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */class Wf extends QT{constructor(e){super(),this.firestore=e}convertBytes(e){return new it(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,t)}}const mh="@firebase/firestore",gh="4.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const i=t;for(const r of s)if(r in i&&typeof i[r]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,t,s,i,r){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new JT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(zf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class JT extends Gf{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new U(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Us{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _n extends Gf{constructor(e,t,s,i,r,o){super(e,t,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new nr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(zf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new U(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=_n._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}_n._jsonSchemaVersion="firestore/documentSnapshot/1.0",_n._jsonSchema={type:pe("string",_n._jsonSchemaVersion),bundleSource:pe("string","DocumentSnapshot"),bundleName:pe("string"),bundle:pe("string")};class nr extends _n{data(e={}){return super.data(e)}}class Kn{constructor(e,t,s,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Us(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new nr(this._firestore,this._userDataWriter,s.key,s,new Us(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new U(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map((c=>{const u=new nr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Us(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}}))}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((c=>r||c.type!==3)).map((c=>{const u=new nr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Us(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,m=-1;return c.type!==0&&(d=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),m=o.indexOf(c.doc.key)),{type:XT(c.type),doc:u,oldIndex:d,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new U(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Kn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Gd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],i=[];return this.docs.forEach((r=>{r._document!==null&&(t.push(r._document),s.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),i.push(r.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function XT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q(61501,{type:n})}}/**
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
 */Kn._jsonSchemaVersion="firestore/querySnapshot/1.0",Kn._jsonSchema={type:pe("string",Kn._jsonSchemaVersion),bundleSource:pe("string","QuerySnapshot"),bundleName:pe("string"),bundle:pe("string")};function pn(n,...e){var d,m,v;n=Ee(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||yh(e[s])||(t=e[s++]);const i={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(yh(e[s])){const T=e[s];e[s]=(d=T.next)==null?void 0:d.bind(T),e[s+1]=(m=T.error)==null?void 0:m.bind(T),e[s+2]=(v=T.complete)==null?void 0:v.bind(T)}let r,o,c;if(n instanceof qe)o=Xi(n.firestore,Ia),c=ic(n._key.path),r={next:T=>{e[s]&&e[s](ZT(o,n,T))},error:e[s+1],complete:e[s+2]};else{const T=Xi(n,Kr);o=Xi(T.firestore,Ia),c=T._query;const C=new Wf(o);r={next:D=>{e[s]&&e[s](new Kn(o,C,T,D))},error:e[s+1],complete:e[s+2]},YT(n._query)}const u=zT(o);return FT(u,c,i,r)}function ZT(n,e,t){const s=t.docs.get(e._key),i=new Wf(n);return new _n(n,i,e._key,s,new Us(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){Ww(Rn),En(new Kt("firestore",((s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),c=new Ia(new Qw(s.getProvider("auth-internal")),new Xw(o,s.getProvider("app-check-internal")),w_(o,i),o);return r={useFetchStreams:t,...r},c._setSettings(r),c}),"PUBLIC").setMultipleInstances(!0)),at(mh,gh,e),at(mh,gh,"esm2020")})();const mn=qT(Wa);let yt=[];function eE(n){if(Kf(),!n)return;const e=t=>t.docs.map(s=>({id:s.id,...s.data()}));yt.push(pn(fn(mn,`households/${n}/inventory`),t=>{var s,i;p.inv=e(t),le("synced"),(s=$.renderAll)==null||s.call($),(i=$.renderSum)==null||i.call($)},t=>{console.warn("realtime inv error:",t),le("error")})),yt.push(pn(fn(mn,`households/${n}/shopping`),t=>{var s,i;p.shop=e(t),le("synced"),(s=$.renderShop)==null||s.call($),(i=$.renderSum)==null||i.call($)},t=>{console.warn("realtime shop error:",t),le("error")})),yt.push(pn(fn(mn,`households/${n}/recipes`),t=>{var s,i;p.recs=e(t),le("synced"),(s=$.renderRecs)==null||s.call($),(i=$.renderSum)==null||i.call($)},t=>{console.warn("realtime recs error:",t),le("error")})),yt.push(pn(fn(mn,`households/${n}/mealplan`),t=>{const s={};e(t).forEach(i=>{i.date&&i.meal&&(s[i.date]=i.meal)}),p.mp=s,le("synced")},t=>{console.warn("realtime mp error:",t)})),yt.push(pn(fn(mn,`households/${n}/settings`),t=>{const s=e(t).find(i=>i.id==="config");s&&(p.cfg={...or,...s})},t=>{console.warn("realtime settings error:",t)})),yt.push(pn(fn(mn,`households/${n}/cooklog`),t=>{p.cookLog=e(t).sort((s,i)=>new Date(i.loggedAt||i.date||0)-new Date(s.loggedAt||s.date||0))},t=>{console.warn("realtime cooklog error:",t)})),yt.push(pn(fn(mn,`households/${n}/wastelog`),t=>{p.wasteLog=e(t).sort((s,i)=>new Date(i.loggedAt||i.date||0)-new Date(s.loggedAt||s.date||0))},t=>{console.warn("realtime wastelog error:",t)})),le("synced"),console.log("[realtime] Listeners started for household:",n)}function Kf(){yt.forEach(n=>{try{n()}catch{}}),yt=[],console.log("[realtime] All listeners stopped")}function bc(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(p.cfg.adults||"Bora").split(",")[0].trim(),s=f("grt");s&&(s.innerHTML=`${e}, <span>${t}</span>`);const i=f("hdt");i&&(i.textContent=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})),xn()}function Tc(){Qf(),sr==null||sr()}let sr=null;function tE(n){sr=n}function Qf(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(p.cfg.adults||"Bora").split(",")[0].trim(),s=f("grt");s&&!s.innerHTML&&(s.innerHTML=`${e}, <span>${t}</span>`),xn(),yi(),sE(),iE(),hs(),aE(),Jf()}function hs(){const n=Ut(),e=p.mp[n],t=f("tnd"),s=f("tna"),i=f("tonight-main");i&&(i.onclick=function(){window.openMealM(n,"Today")}),e?(t&&(t.innerHTML=e),s&&(s.innerHTML=`<button class="btn bsm bp" onclick="event.stopPropagation();openCooked('${n}')">✓ Cooked</button><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${n}','Today')">Edit</button>`)):(t&&(t.innerHTML='<span style="font-size:.9rem;color:var(--mt);font-style:italic">No meal planned yet</span>'),s&&(s.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${n}','Today')">+ Plan dinner</button><button class="btn bsm bs" onclick="event.stopPropagation();showScreen('chat')">Ask Claude →</button>`))}function xn(){const n=["S","M","T","W","T","F","S"],e=new Date;e.setHours(0,0,0,0);const t=f("wgrd");t&&(t.innerHTML=as().map((s,i)=>{const r=s.toISOString().split("T")[0],o=s.getTime()===e.getTime(),c=p.mp[r];return`<div class="wd${o?" today":""}${c?" hm":""}" onclick="openMealM('${r}','${n[i]} ${s.getDate()}')"><div class="wdn">${n[i]}</div><div class="wdd">${s.getDate()}</div>${c?`<div class="wdm">${c.substring(0,10)}${c.length>10?"…":""}</div>`:""}</div>`}).join(""),nE())}function nE(){const n=f("variety-nudge");if(!n)return;const e=as().map(o=>p.mp[o.toISOString().split("T")[0]]).filter(Boolean);if(e.length<3){n.style.display="none";return}const t=e.some(o=>/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(o)),s=e.some(o=>/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner/i.test(o)),i={};e.forEach(o=>{const c=o.toLowerCase();i[c]=(i[c]||0)+1});const r=Object.entries(i).find(([,o])=>o>=3);r?(n.style.display="block",n.innerHTML="🔄 <strong>"+r[0]+"</strong> is planned "+r[1]+"× this week — maybe try something different?"):!t&&!s?(n.style.display="block",n.innerHTML="🌍 No Bangladeshi or Turkish dishes this week yet — ask Claude for ideas!"):t?s?n.style.display="none":(n.style.display="block",n.innerHTML="🇹🇷 No Turkish dishes this week — köfte or mercimek çorbası would be great!"):(n.style.display="block",n.innerHTML="🇧🇩 No Bangladeshi dishes this week — how about a dal or fish curry?")}function yi(){const n=p.inv.filter(c=>{const u=dt(c.expiry);return u&&(u.c==="expiring"||u.c==="expired")}).length,e=p.shop.filter(c=>!c.checked).length,t=f("home-exp-val"),s=f("home-exp-sub");t&&(n>0?(t.textContent=n+" item"+(n>1?"s":""),t.className="tc-val",t.style.color="var(--am)"):(t.textContent="All fresh!",t.className="tc-val tc-green")),s&&(s.textContent=n>0?"expiring soon":"Nothing in next 3 days");const i=f("home-shop-val"),r=f("home-shop-sub");i&&(i.textContent=e),r&&(r.textContent=e===1?"item to buy":e===0?"all stocked up":"items to buy");const o=f("sgrd");o&&(o.innerHTML=`<div class="sc" onclick="showScreen('inventory')"><div class="sci">🧺</div><div class="scv">${p.inv.length}</div><div class="scl">Items in stock</div></div><div class="sc${n>0?" warn":""}" onclick="showScreen('inventory')"><div class="sci">⏱</div><div class="scv">${n}</div><div class="scl">Expiring soon</div></div><div class="sc" onclick="showScreen('shopping')"><div class="sci">🛒</div><div class="scv">${e}</div><div class="scl">To buy</div></div><div class="sc" onclick="showScreen('recipes')"><div class="sci">📖</div><div class="scv">${p.recs.length}</div><div class="scl">Saved recipes</div></div>`)}function sE(){const n=p.inv.filter(s=>{const i=dt(s.expiry);return i&&(i.c==="expiring"||i.c==="expired")}).sort((s,i)=>new Date(s.expiry)-new Date(i.expiry)),e=f("exslbl"),t=f("expl");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(s=>{const i=dt(s.expiry);return`<div class="exi${i.c==="expired"?" exp":""}" onclick="openAdj('${s.id}')"><div class="exn">${s.name}</div><div class="exd">${i.l}</div></div>`}).join("")}}function iE(){const n=p.inv.filter(s=>s.qty<=(s.lowStockThreshold||1)).sort((s,i)=>s.qty-i.qty),e=f("lowstocklbl"),t=f("lowstocklist");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(s=>`<div class="exi" style="border-color:var(--am)">
    <div style="display:flex;align-items:center;gap:10px;flex:1;cursor:pointer" onclick="openAdj('${s.id}')">
      <div class="exn">${s.name}</div>
      <div style="font-size:.74rem;color:var(--am);font-weight:600">${s.qty} ${s.unit}</div>
    </div>
    <button class="btn bsm bs" style="flex-shrink:0;font-size:.72rem" onclick="event.stopPropagation();addLowToShop('${s.id}')">🛒 Add to list</button>
  </div>`).join(""),oE(n.length)}}async function rE(n){const e=p.inv.find(s=>s.id===n);if(!e)return;if(p.shop.find(s=>s.name.toLowerCase()===e.name.toLowerCase()&&!s.checked)){P(`${e.name} is already on your list`);return}await Ie({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"low-stock"}),P(`${e.name} added to shopping list 🛒`)}function oE(n){const e=f("nav-inventory");if(!e)return;const t=e.querySelector(".nav-badge");if(t&&t.remove(),n>0){const s=document.createElement("span");s.className="nav-badge",s.textContent=n,s.style.cssText="position:absolute;top:4px;right:calc(50% - 18px);background:var(--am);color:#0c0c0a;font-size:.58rem;font-weight:700;min-width:16px;height:16px;border-radius:8px;display:flex;align-items:center;justify-content:center;padding:0 4px",e.appendChild(s)}}async function aE(){const n=f("activityfeed"),e=f("activitylbl");if(!n)return;const t=await jw();if(!t.length){e&&(e.style.display="none"),n.innerHTML="";return}e&&(e.style.display="flex");const s=i=>{const r=Date.now()-new Date(i).getTime(),o=Math.floor(r/6e4);if(o<1)return"just now";if(o<60)return o+"m ago";const c=Math.floor(o/60);if(c<24)return c+"h ago";const u=Math.floor(c/24);return u===1?"yesterday":u+"d ago"};n.innerHTML=t.slice(0,3).map(i=>`<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--b1)">
      <div style="width:28px;height:28px;border-radius:50%;background:var(--acd);display:flex;align-items:center;justify-content:center;font-size:.7rem;flex-shrink:0;color:var(--ac);font-weight:700">${(i.memberName||"?")[0].toUpperCase()}</div>
      <div style="flex:1;font-size:.82rem;color:var(--tx2);line-height:1.4"><strong style="color:var(--tx)">${(i.memberName||"Someone").replace(/</g,"&lt;")}</strong> ${(i.action||"").replace(/</g,"&lt;")} <strong>${(i.itemName||"").replace(/</g,"&lt;")}</strong></div>
      <div style="font-size:.68rem;color:var(--mt);flex-shrink:0">${s(i.timestamp)}</div>
    </div>`).join("")}function Jf(){const n=["fridge","freezer","pantry"].map(t=>{const s=p.inv.filter(i=>i.location===t);return s.length?Ja(t).toUpperCase()+`
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
 */const Yf="firebasestorage.googleapis.com",Xf="storageBucket",cE=120*1e3,lE=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce extends mt{constructor(e,t,s=0){super(jo(e),`Firebase Storage: ${t} (${jo(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ce.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return jo(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ae;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ae||(ae={}));function jo(n){return"storage/"+n}function Ec(){const n="An unknown error occurred, please check the error payload for server response.";return new ce(ae.UNKNOWN,n)}function uE(n){return new ce(ae.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function hE(n){return new ce(ae.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function dE(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ce(ae.UNAUTHENTICATED,n)}function fE(){return new ce(ae.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function pE(n){return new ce(ae.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function mE(){return new ce(ae.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function gE(){return new ce(ae.CANCELED,"User canceled the upload/download.")}function yE(n){return new ce(ae.INVALID_URL,"Invalid URL '"+n+"'.")}function vE(n){return new ce(ae.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function wE(){return new ce(ae.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Xf+"' property when initializing the app?")}function _E(){return new ce(ae.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function bE(){return new ce(ae.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function TE(n){return new ce(ae.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Aa(n){return new ce(ae.INVALID_ARGUMENT,n)}function Zf(){return new ce(ae.APP_DELETED,"The Firebase app was deleted.")}function EE(n){return new ce(ae.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Qs(n,e){return new ce(ae.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Ps(n){throw new ce(ae.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=ze.makeFromUrl(e,t)}catch{return new ze(e,"")}if(s.path==="")return s;throw vE(e)}static makeFromUrl(e,t){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function d(j){j.path_=decodeURIComponent(j.path)}const m="v[A-Za-z0-9_]+",v=t.replace(/[.]/g,"\\."),T="(/([^?#]*).*)?$",C=new RegExp(`^https?://${v}/${m}/b/${i}/o${T}`,"i"),D={bucket:1,path:3},M=t===Yf?"(?:storage.googleapis.com|storage.cloud.google.com)":t,N="([^?#]*)",z=new RegExp(`^https?://${M}/${i}/${N}`,"i"),V=[{regex:c,indices:u,postModify:r},{regex:C,indices:D,postModify:d},{regex:z,indices:{bucket:1,path:2},postModify:d}];for(let j=0;j<V.length;j++){const K=V[j],te=K.regex.exec(e);if(te){const b=te[K.indices.bucket];let y=te[K.indices.path];y||(y=""),s=new ze(b,y),K.postModify(s);break}}if(s==null)throw yE(e);return s}}class IE{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(n,e,t){let s=1,i=null,r=null,o=!1,c=0;function u(){return c===2}let d=!1;function m(...N){d||(d=!0,e.apply(null,N))}function v(N){i=setTimeout(()=>{i=null,n(C,u())},N)}function T(){r&&clearTimeout(r)}function C(N,...z){if(d){T();return}if(N){T(),m.call(null,N,...z);return}if(u()||o){T(),m.call(null,N,...z);return}s<64&&(s*=2);let V;c===1?(c=2,V=0):V=(s+Math.random())*1e3,v(V)}let D=!1;function M(N){D||(D=!0,T(),!d&&(i!==null?(N||(c=2),clearTimeout(i),v(0)):N||(c=1)))}return v(0),r=setTimeout(()=>{o=!0,M(!0)},t),M}function AE(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(n){return n!==void 0}function CE(n){return typeof n=="object"&&!Array.isArray(n)}function Ic(n){return typeof n=="string"||n instanceof String}function vh(n){return Sc()&&n instanceof Blob}function Sc(){return typeof Blob<"u"}function wh(n,e,t,s){if(s<e)throw Aa(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw Aa(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(n,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${n}`}function ep(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const i=e(s)+"="+e(n[s]);t=t+i+"&"}return t=t.slice(0,-1),t}var bn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(bn||(bn={}));/**
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
 */function RE(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e,t,s,i,r,o,c,u,d,m,v,T=!0,C=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=m,this.connectionFactory_=v,this.retry=T,this.isUsingEmulator=C,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((D,M)=>{this.resolve_=D,this.reject_=M,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new ji(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=c=>{const u=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const c=r.getErrorCode()===bn.NO_ERROR,u=r.getStatus();if(!c||RE(u,this.additionalRetryCodes_)&&this.retry){const m=r.getErrorCode()===bn.ABORT;s(!1,new ji(!1,null,m));return}const d=this.successCodes_.indexOf(u)!==-1;s(!0,new ji(d,r))})},t=(s,i)=>{const r=this.resolve_,o=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());kE(u)?r(u):r()}catch(u){o(u)}else if(c!==null){const u=Ec();u.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,u)):o(u)}else if(i.canceled){const u=this.appDelete_?Zf():gE();o(u)}else{const u=mE();o(u)}};this.canceled_?t(!1,new ji(!1,null,!0)):this.backoffId_=SE(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&AE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ji{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function xE(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function LE(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function DE(n,e){e&&(n["X-Firebase-GMPID"]=e)}function NE(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function OE(n,e,t,s,i,r,o=!0,c=!1){const u=ep(n.urlParams),d=n.url+u,m=Object.assign({},n.headers);return DE(m,e),xE(m,t),LE(m,r),NE(m,s),new PE(d,n.method,m,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function VE(...n){const e=ME();if(e!==void 0){const t=new e;for(let s=0;s<n.length;s++)t.append(n[s]);return t.getBlob()}else{if(Sc())return new Blob(n);throw new ce(ae.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function $E(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function UE(n){if(typeof atob>"u")throw TE("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Bo{constructor(e,t){this.data=e,this.contentType=t||null}}function FE(n,e){switch(n){case ot.RAW:return new Bo(tp(e));case ot.BASE64:case ot.BASE64URL:return new Bo(np(n,e));case ot.DATA_URL:return new Bo(BE(e),HE(e))}throw Ec()}function tp(n){const e=[];for(let t=0;t<n.length;t++){let s=n.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const r=s,o=n.charCodeAt(++t);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function jE(n){let e;try{e=decodeURIComponent(n)}catch{throw Qs(ot.DATA_URL,"Malformed data URL.")}return tp(e)}function np(n,e){switch(n){case ot.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw Qs(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case ot.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw Qs(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=UE(e)}catch(i){throw i.message.includes("polyfill")?i:Qs(n,"Invalid character found")}const s=new Uint8Array(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return s}class sp{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Qs(ot.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=qE(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function BE(n){const e=new sp(n);return e.base64?np(ot.BASE64,e.rest):jE(e.rest)}function HE(n){return new sp(n).contentType}function qE(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t){let s=0,i="";vh(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(vh(this.data_)){const s=this.data_,i=$E(s,e,t);return i===null?null:new Vt(i)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new Vt(s,!0)}}static getBlob(...e){if(Sc()){const t=e.map(s=>s instanceof Vt?s.data_:s);return new Vt(VE.apply(null,t))}else{const t=e.map(o=>Ic(o)?FE(ot.RAW,o).data:o.data_);let s=0;t.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)i[r++]=o[c]}),new Vt(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(n){let e;try{e=JSON.parse(n)}catch{return null}return CE(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function WE(n,e){const t=e.split("/").filter(s=>s.length>0).join("/");return n.length===0?t:n+"/"+t}function rp(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(n,e){return e}class Oe{constructor(e,t,s,i){this.server=e,this.local=t||e,this.writable=!!s,this.xform=i||GE}}let Bi=null;function KE(n){return!Ic(n)||n.length<2?n:rp(n)}function op(){if(Bi)return Bi;const n=[];n.push(new Oe("bucket")),n.push(new Oe("generation")),n.push(new Oe("metageneration")),n.push(new Oe("name","fullPath",!0));function e(r,o){return KE(o)}const t=new Oe("name");t.xform=e,n.push(t);function s(r,o){return o!==void 0?Number(o):o}const i=new Oe("size");return i.xform=s,n.push(i),n.push(new Oe("timeCreated")),n.push(new Oe("updated")),n.push(new Oe("md5Hash",null,!0)),n.push(new Oe("cacheControl",null,!0)),n.push(new Oe("contentDisposition",null,!0)),n.push(new Oe("contentEncoding",null,!0)),n.push(new Oe("contentLanguage",null,!0)),n.push(new Oe("contentType",null,!0)),n.push(new Oe("metadata","customMetadata",!0)),Bi=n,Bi}function QE(n,e){function t(){const s=n.bucket,i=n.fullPath,r=new ze(s,i);return e._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:t})}function JE(n,e,t){const s={};s.type="file";const i=t.length;for(let r=0;r<i;r++){const o=t[r];s[o.local]=o.xform(s,e[o.server])}return QE(s,n),s}function ap(n,e,t){const s=ip(e);return s===null?null:JE(n,s,t)}function YE(n,e,t,s){const i=ip(e);if(i===null||!Ic(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(d=>{const m=n.bucket,v=n.fullPath,T="/b/"+o(m)+"/o/"+o(v),C=Ac(T,t,s),D=ep({alt:"media",token:d});return C+D})[0]}function XE(n,e){const t={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(t[r.server]=n[r.local])}return JSON.stringify(t)}class cp{constructor(e,t,s,i){this.url=e,this.method=t,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(n){if(!n)throw Ec()}function ZE(n,e){function t(s,i){const r=ap(n,i,e);return lp(r!==null),r}return t}function eI(n,e){function t(s,i){const r=ap(n,i,e);return lp(r!==null),YE(r,i,n.host,n._protocol)}return t}function up(n){function e(t,s){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=fE():i=dE():t.getStatus()===402?i=hE(n.bucket):t.getStatus()===403?i=pE(n.path):i=s,i.status=t.getStatus(),i.serverResponse=s.serverResponse,i}return e}function tI(n){const e=up(n);function t(s,i){let r=e(s,i);return s.getStatus()===404&&(r=uE(n.path)),r.serverResponse=i.serverResponse,r}return t}function nI(n,e,t){const s=e.fullServerUrl(),i=Ac(s,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,c=new cp(i,r,eI(n,t),o);return c.errorHandler=tI(e),c}function sI(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function iI(n,e,t){const s=Object.assign({},t);return s.fullPath=n.path,s.size=e.size(),s.contentType||(s.contentType=sI(null,e)),s}function rI(n,e,t,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let V="";for(let j=0;j<2;j++)V=V+Math.random().toString().slice(2);return V}const u=c();o["Content-Type"]="multipart/related; boundary="+u;const d=iI(e,s,i),m=XE(d,t),v="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+u+`\r
Content-Type: `+d.contentType+`\r
\r
`,T=`\r
--`+u+"--",C=Vt.getBlob(v,s,T);if(C===null)throw _E();const D={name:d.fullPath},M=Ac(r,n.host,n._protocol),N="POST",z=n.maxUploadRetryTime,G=new cp(M,N,ZE(n,t),z);return G.urlParams=D,G.headers=o,G.body=C.uploadData(),G.errorHandler=up(e),G}class oI{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=bn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=bn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=bn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,i,r){if(this.sent_)throw Ps("cannot .send() more than once");if(sn(e)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ps("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ps("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ps("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ps("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class aI extends oI{initXhr(){this.xhr_.responseType="text"}}function hp(){return new aI}/**
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
 */class Cn{constructor(e,t){this._service=e,t instanceof ze?this._location=t:this._location=ze.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Cn(e,t)}get root(){const e=new ze(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return rp(this._location.path)}get storage(){return this._service}get parent(){const e=zE(this._location.path);if(e===null)return null;const t=new ze(this._location.bucket,e);return new Cn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw EE(e)}}function cI(n,e,t){n._throwIfRoot("uploadBytes");const s=rI(n.storage,n._location,op(),new Vt(e,!0),t);return n.storage.makeRequestWithTokens(s,hp).then(i=>({metadata:i,ref:n}))}function lI(n){n._throwIfRoot("getDownloadURL");const e=nI(n.storage,n._location,op());return n.storage.makeRequestWithTokens(e,hp).then(t=>{if(t===null)throw bE();return t})}function uI(n,e){const t=WE(n._location.path,e),s=new ze(n._location.bucket,t);return new Cn(n.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(n){return/^[A-Za-z]+:\/\//.test(n)}function dI(n,e){return new Cn(n,e)}function dp(n,e){if(n instanceof kc){const t=n;if(t._bucket==null)throw wE();const s=new Cn(t,t._bucket);return e!=null?dp(s,e):s}else return e!==void 0?uI(n,e):n}function fI(n,e){if(e&&hI(e)){if(n instanceof kc)return dI(n,e);throw Aa("To use ref(service, url), the first argument must be a Storage instance.")}else return dp(n,e)}function _h(n,e){const t=e==null?void 0:e[Xf];return t==null?null:ze.makeFromBucketSpec(t,n)}function pI(n,e,t,s={}){n.host=`${e}:${t}`;const i=sn(e);i&&(xa(`https://${n.host}/b`),La("Storage",!0)),n._isUsingEmulator=!0,n._protocol=i?"https":"http";const{mockUserToken:r}=s;r&&(n._overrideAuthToken=typeof r=="string"?r:qh(r,n.app.options.projectId))}class kc{constructor(e,t,s,i,r,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._isUsingEmulator=o,this._bucket=null,this._host=Yf,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=cE,this._maxUploadRetryTime=lE,this._requests=new Set,i!=null?this._bucket=ze.makeFromBucketSpec(i,this._host):this._bucket=_h(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ze.makeFromBucketSpec(this._url,e):this._bucket=_h(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){wh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){wh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Me(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Cn(this,e)}_makeRequest(e,t,s,i,r=!0){if(this._deleted)return new IE(Zf());{const o=OE(e,this._appId,s,i,t,this._firebaseVersion,r,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,i).getPromise()}}const bh="@firebase/storage",Th="0.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp="storage";function mI(n,e,t){return n=Ee(n),cI(n,e,t)}function gI(n){return n=Ee(n),lI(n)}function yI(n,e){return n=Ee(n),fI(n,e)}function vI(n=Oa(),e){n=Ee(n);const s=Rr(n,fp).getImmediate({identifier:e}),i=jh("storage");return i&&wI(s,...i),s}function wI(n,e,t,s={}){pI(n,e,t,s)}function _I(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new kc(t,s,i,e,Rn)}function bI(){En(new Kt(fp,_I,"PUBLIC").setMultipleInstances(!0)),at(bh,Th,""),at(bh,Th,"esm2020")}bI();const TI=vI(Wa);function EI(n){return(n||"").trim().toLowerCase().replace(/\s+/g,"_").replace(/[^a-z0-9_]/g,"")}function II(n){return new Promise((e,t)=>{const s=new Image,i=new FileReader;i.onload=r=>{s.onload=()=>{let c=s.width,u=s.height;if(c>400||u>400){const D=Math.min(400/c,400/u);c=Math.round(c*D),u=Math.round(u*D)}const d=document.createElement("canvas");d.width=c,d.height=u,d.getContext("2d").drawImage(s,0,0,c,u);const v=150*1024;let T=.8;const C=()=>{d.toBlob(D=>{if(!D)return t(new Error("Canvas compression failed"));D.size<=v||T<=.3?e(D):(T-=.1,C())},"image/jpeg",T)};C()},s.onerror=()=>t(new Error("Failed to load image")),s.src=r.target.result},i.onerror=()=>t(new Error("Failed to read file")),i.readAsDataURL(n)})}async function SI(n,e){var u;if(!p.hid)throw new Error("No household ID — cannot upload");if(!n)throw new Error("No file provided");const t=EI(e);if(!t)throw new Error("Invalid product name for upload");const s=await II(n),i=`households/${p.hid}/customProducts/${t}.jpg`,r=yI(TI,i);await mI(r,s,{contentType:"image/jpeg"});const o=await gI(r),c=xe();return await ee(`customProducts/${p.hid}/items/${t}`,{name:e.trim(),imageUrl:o,updatedAt:new Date().toISOString(),updatedBy:(c==null?void 0:c.displayName)||((u=c==null?void 0:c.email)==null?void 0:u.split("@")[0])||"Unknown"}),o}let We=null,Ho=!1,xs="",qo=!1;function AI(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=f("shopAddMicOpt");e&&(e.style.display="")}function Eh(n){const e=f("micstatus");e&&e.classList.toggle("visible",n)}function pp(){if(Ho&&We){qo=!0,We.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){P("Voice input not supported");return}We=new n,We.lang="en-US",We.interimResults=!0,We.maxAlternatives=1,We.continuous=!1,xs="",Ho=!0,Eh(!0),We.onresult=e=>{let t="";for(let i=e.resultIndex;i<e.results.length;i++){const r=e.results[i][0].transcript;e.results[i].isFinal?xs+=r:t+=r}const s=f("shi");s&&(s.value=(xs+t).trim())},We.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&P("Couldn't hear that — try again")},We.onend=()=>{let e=(xs||"").trim();if(!e&&qo){const t=f("shi");e=t?t.value.trim():""}if(Ho=!1,We=null,xs="",qo=!1,Eh(!1),e){let t=e,s=1;const i=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),s=parseInt(r[2],10)||1):i&&(t=i[2].trim(),s=parseInt(i[1],10)||1);const o={id:Date.now().toString(),name:t,qty:s,checked:!1,src:"manual"};Ie(o),P(`Added "${e}" 🎤`);const c=f("shi");c&&(c.value=""),Qr(o.id,t,"shop")}},We.start()}function mp(n){return n?n.replace(/\S+/g,e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()):""}function gp(n){if(!n.brand)return!1;if(n.src==="scan")return!0;if(n.src==="search"&&n.searchQuery){const e=n.searchQuery.toLowerCase().split(/\s+/).filter(s=>s.length>=2),t=n.brand.toLowerCase();return e.some(s=>t.includes(s))}return!1}function Hi(n){const e=n.qty||1,t=`<span class="sh-qty${e===1?" sh-qty-one":""}" onclick="event.stopPropagation();openShQty('${n.id}')"> × ${e}</span>`,s=n.image?`<img src="${n.image}" class="sh-thumb" alt="" onerror="this.style.display='none'"/>`:"";return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="shop">
    <div class="swipe-inner">
      <!-- Main row: swipeRowTap handles multi-select; checkbox toggles checked; content area opens detail -->
      <div class="shit${n.checked?" chk":""}" onclick="swipeRowTap('${n.id}','shop')">
        <div class="sel-cb">✓</div>           <!-- Multi-select checkbox (hidden unless selectMode is active) -->
        <div class="shck" onclick="event.stopPropagation();togShop('${n.id}')">${n.checked?"✓":""}</div>  <!-- Slim ring: tap to mark as bought; hidden in select mode (replaced by sel-cb) -->
        ${s}                               <!-- Product thumbnail from barcode scan (if available) -->
        <div style="flex:1;min-width:0;cursor:pointer" onclick="openItemDetail('${n.id}')">
          <div class="shnm">${mp(n.name)}${t}</div>
          ${gp(n)?`<div class="sh-brand">${n.brand}</div>`:""}  <!-- Brand shown for barcode scans always; for text search only if the user's query matches the brand name -->
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
    <!-- Delete action revealed when user swipes the row left -->
    <div class="swipe-del" onclick="swipeDelItem('${n.id}','shop')"><span>🗑</span>Delete</div>
  </div>`}function ds(){const n=(o,c)=>o.name.localeCompare(c.name),e=f("shlist"),t=p.shop.filter(o=>!o.checked).sort(n),s=p.shop.filter(o=>o.checked).sort(n),i=f("clrchk");i&&(i.style.display=s.length?"block":"none");const r=f("shsub");if(r&&(r.textContent=t.length+" items to buy"),!!e){if(!p.shop.length){e.innerHTML='<div class="es"><div class="ei">🛒</div><p>Your list is empty!<br/>Add items or use "Build from meal plan".</p></div>';return}if(p.aisleMode&&t.length){const o={};t.forEach(c=>{const u=zw(c.name);o[u]||(o[u]=[]),o[u].push(c)}),e.innerHTML=Object.entries(o).sort().map(([c,u])=>`<div class="shsec">${c}</div>${u.map(Hi).join("")}`).join("")+(s.length?`<div class="shsec">Done</div>${s.map(Hi).join("")}`:"")}else e.innerHTML=(t.length?`<div class="shsec">To buy (${t.length})</div>${t.map(Hi).join("")}`:"")+(s.length?`<div class="shsec">Done</div>${s.map(Hi).join("")}`:"");if(p.selectMode==="shop"){document.querySelectorAll("#shlist .swipe-wrap").forEach(c=>{c.classList.add("selecting"),p.selectedIds.has(c.dataset.id)&&c.classList.add("selected")});const o=document.querySelector(".shbody");o&&(o.style.paddingLeft="52px")}FI()}}function kI(){const n=f("shi"),e=n.value.trim();if(!e)return;if(ht&&ht.length===1){wp(0);return}let t=e,s=1;const i=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),s=parseInt(r[2],10)||1):i&&(t=i[2].trim(),s=parseInt(i[1],10)||1);const o=f("addNoteInp"),c=o?o.value.trim():"",u={id:Date.now().toString(),name:t,qty:s,checked:!1,src:"manual"};c&&(u.note=c),Ie(u),n.value="",o&&(o.value="");const d=f("addNoteWrap");d&&(d.style.display="none"),Rc(),vi()}function CI(){const n=f("addNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=f("addNoteInp");t&&t.focus()}}function RI(){const n=f("shopAddBackdrop"),e=f("shopAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),setTimeout(()=>{const t=f("shi");t&&(t.value="",t.focus())},150)}function vi(){const n=f("shopAddBackdrop"),e=f("shopAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),Rc()}function PI(){vi(),window.openScanForList&&window.openScanForList()}function xI(){vi(),pp()}let Js=null,ht=null;const Ls=new Map,LI=300*1e3,DI=30;function NI(){Js&&clearTimeout(Js);const n=f("shi"),e=n?n.value.trim():"",t=f("shopSearchDropdown");if(!e||e.length<2){t&&(t.classList.remove("active"),t.innerHTML=""),ht=null;return}Js=setTimeout(()=>UI(e),350)}const OI=new Set(["salad","soup","stew","casserole","dish","recipe","curry","pie","sandwich","wrap","risotto","gratin","puree","smoothie","juice","namasu","pickled","marinated","braised","sauteed","sautéed","coleslaw","gazpacho","chutney","relish","compote","ragout","ratatouille","succotash","bruschetta","ceviche","tartare"]),MI=["made with","and vegetable","and rice","and noodle","and cheese","cooked in","served with","topped with","stuffed with","mixed with","tossed with","dressed with"];function VI(n,e){const t=(n||"").toLowerCase().trim(),s=e.toLowerCase().trim();if(t===s)return!1;for(const o of MI)if(t.includes(o)&&!s.includes(o))return!0;const i=new Set(s.split(/\s+/)),r=t.split(/[\s,&+\-–—/()[\]]+/).filter(o=>o.length>=2);for(const o of r)if(OI.has(o)&&!i.has(o))return!0;return!1}const yp=new Set(["a","an","the","and","or","with","for","of","in","to","by","is","it","at","on","no","not","all","each","per","from","free","style","natural","original","premium","organic","fresh","whole","pure","real","lite","light","low","high","extra","reduced","fat","nonfat","skim","raw","roasted","unsweetened","sweetened","flavored","smoked","dried","frozen","canned","pack","ct","oz","lb","ml","kg","fl","count","size","gallon","quart","pint","liter","bag","box","can","jar","bottle","container","pouch","tub","carton","plain","creamy","chunky","crispy","crunchy","spicy","mild","hot","cold","classic","homestyle","traditional","artisan","greek","italian","mexican","asian","indian","mini","small","medium","large","jumbo","giant","big","handheld","electric","portable","automatic","manual","new","best","top","value","brand"]);function Ih(n,e){const t=(n||"").toLowerCase().trim(),s=e.toLowerCase().trim();if(t===s||t.startsWith(s+" "))return!0;const i=s.split(/\s+/).filter(c=>c.length>=2),r=t.split(/[\s,&+\-–—/()[\]]+/).filter(c=>c.length>=2&&!yp.has(c)&&!/^\d+$/.test(c));if(r.length<=2)return!0;let o=0;for(const c of r)i.some(d=>{if(c.startsWith(d)||d.startsWith(c))return!0;const m=Math.min(c.length,d.length,3);return m>=3&&c.slice(0,m)===d.slice(0,m)})&&o++;return o/r.length>=.5}function vp(n,e){const t=(n||"").toLowerCase().trim(),s=e.toLowerCase().trim();if(VI(n,e))return 0;if(t===s)return 100;if(t.startsWith(s+" ")||t.startsWith(s))return 95;const r=t.split(/[\s,&+\-–—/]+/).filter(o=>o.length>=2).filter(o=>!yp.has(o)&&!/^\d+$/.test(o));if(r.length&&(r[0].startsWith(s)||s.startsWith(r[0]))){const o=r.filter(u=>!u.startsWith(s)&&!s.startsWith(u)).length,c=85-Math.min(o*8,30);return Ih(n,e)?c:0}for(let o=1;o<Math.min(3,r.length);o++)if(r[o].startsWith(s)||s.startsWith(r[o])){const c=r.filter(d=>!d.startsWith(s)&&!s.startsWith(d)).length,u=60-o*10-Math.min(c*8,20);return Ih(n,e)?Math.max(u,5):0}return 0}async function Cc(n){const e=n.toLowerCase(),t=Ls.get(e);if(t&&Date.now()-t.ts<LI)return t.scored;const s=p.hid?`&hid=${encodeURIComponent(p.hid)}`:"";console.log(`[ShopSearch] Fetching /api/text-search?q=${encodeURIComponent(n)}${s}`);let o=(await(await fetch(`/api/text-search?q=${encodeURIComponent(n)}${s}`)).json()).results||[];const c=n.toLowerCase().split(/\s+/).filter(d=>d.length>=2);o=o.filter(d=>{const m=(d.name||"").toLowerCase();return c.some(v=>m.includes(v))});const u=o.map(d=>({...d,_score:vp(d.name||"",n)})).filter(d=>d._score>=20).sort((d,m)=>m._score-d._score).slice(0,5);if(Ls.set(e,{scored:u,ts:Date.now()}),Ls.size>DI){const d=Ls.keys().next().value;Ls.delete(d)}return u}function $I(n){if(!n)return"NONE";const e=n.toLowerCase();return e.includes("kroger.com")?"Kroger (real product)":e.includes("img.spoonacular.com/products")?"Spoonacular product (real photo)":e.includes("img.spoonacular.com/ingredients")?"Spoonacular ingredient (illustration)":e.includes("openfoodfacts.org")?"Open Food Facts (real photo)":e.includes("edamam")?"Edamam":"Other: "+new URL(n).hostname}async function UI(n){const e=f("shopSearchDropdown");if(e){e.innerHTML='<div class="search-hint">Searching…</div>',e.classList.add("active");try{const t=await Cc(n);if((f("shi")?f("shi").value.trim():"").toLowerCase()!==n.toLowerCase())return;if(!t.length){e.classList.remove("active"),e.innerHTML="",ht=null;return}ht=t,t.forEach((i,r)=>{const o=$I(i.image);console.log(`[ShopDropdown] #${r} "${i.name}" → image: ${o} | url: ${i.image||"(none)"} | score: ${i._score}`)}),e.innerHTML=t.map((i,r)=>{const o=i.image?`<img src="${i.image}" class="enrich-img" alt="" onerror="this.style.display='none'; console.warn('[ShopDropdown] Image failed to load:', '${(i.image||"").replace(/'/g,"\\'")}')"`:'<div class="enrich-img-ph">🛒</div>',c=i.category&&i.category!=="General"?`<div class="enrich-cat">${i.category}</div>`:"";return`<div class="enrich-row" onclick="pickInlineResult(${r})">
        ${o}
        <div style="flex:1;min-width:0">
          <div class="enrich-name">${i.name}</div>
          ${c}
        </div>
      </div>`}).join("")}catch(t){console.warn("Inline search failed:",t),e.classList.remove("active"),e.innerHTML="",ht=null}}}function wp(n){if(!ht||!ht[n])return;const e=ht[n],t=f("addNoteInp"),s=t?t.value.trim():"",i=f("shi")?f("shi").value.trim():"",r={id:Date.now().toString(),name:e.name,qty:1,checked:!1,src:"search",brand:e.brand||"",image:e.image||null,category:e.category||"",source:e.source||"search",searchQuery:i};s&&(r.note=s),Ie(r),P(`Added "${e.name}" ✓`);const o=f("shi");o&&(o.value=""),t&&(t.value="");const c=f("addNoteWrap");c&&(c.style.display="none"),Rc(),vi()}function Rc(){Js&&clearTimeout(Js),ht=null;const n=f("shopSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}const Sh=new Set;function FI(){const n=p.shop.filter(e=>e.src==="reminders"&&!e.image&&!Sh.has(e.id));if(n.length)for(const e of n)Sh.add(e.id),Cc(e.name).then(t=>{if(t.length&&t[0]._score>=20&&t[0].image){const s=t[0],i={...e};i.image=s.image,s.brand&&!e.brand&&(i.brand=s.brand),s.category&&s.category!=="General"&&!e.category&&(i.category=s.category),i.src="reminders",Ie(i),console.log(`[RemindersEnrich] Auto-enriched "${e.name}" with image from ${s.source||"search"}`)}}).catch(()=>{})}async function Qr(n,e,t){if(!e||e.length<2)return;const s=f("enrichResults"),i=f("enrichTitle");if(!s)return;i&&(i.textContent=`Finding "${e}"…`),s.innerHTML='<div class="enrich-loading"><div class="spin" style="width:28px;height:28px;margin:0 auto 8px"></div>Searching products…</div>';const r=f("enrichBackdrop"),o=f("enrichSheet");r&&r.classList.add("active"),o&&o.classList.add("active");try{let c=await Cc(e);if(!c.length){Er();return}i&&(i.textContent="Choose a match");let u=c.map((d,m)=>{const v=d.image?`<img src="${d.image}" class="enrich-img" alt="" onerror="this.style.display='none'"/>`:'<div class="enrich-img-ph">🛒</div>',T=d.category&&d.category!=="General"?`<div class="enrich-cat">${d.category}</div>`:"";return`<div class="enrich-row" onclick="pickEnrichResult(${m})">
        ${v}
        <div style="flex:1;min-width:0">
          <div class="enrich-name">${d.name}</div>
          ${T}
        </div>
      </div>`}).join("");u+=`<button class="enrich-fallback" onclick="closeEnrichSheet()">
      <span style="font-size:1.1rem">📝</span>
      Just add "${e}" as typed
    </button>`,s.innerHTML=u,window._enrichCtx={itemId:n,query:e,list:t,results:c}}catch(c){console.warn("Text search failed:",c),Er()}}function Er(){const n=f("enrichBackdrop"),e=f("enrichSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),window._enrichCtx=null}function Ir(n){if(p.selectMode)return;event&&event.stopPropagation();const e=p.shop.find(v=>v.id===n);if(!e)return;const t=f("itemDetailContent");if(!t)return;const s=e.image?`<div class="item-detail-img-wrap">
        <img src="${e.image}" class="item-detail-img" alt="" onerror="this.style.display='none'"/>
        <button class="item-detail-img-del" onclick="deleteItemImage('${e.id}')" title="Remove image">×</button>
      </div>`:`<div class="item-detail-img-ph" onclick="triggerProductPhotoUpload('${e.id}')" style="cursor:pointer">
        <div style="text-align:center">
          <div style="font-size:1.5rem;margin-bottom:2px">📷</div>
          <div style="font-size:.65rem;color:var(--mt)">Add photo</div>
        </div>
      </div>`,i=gp(e),r=e.image?`<div class="item-detail-change-photo" onclick="triggerProductPhotoUpload('${e.id}')">Change photo</div>`:"";let o=`<div class="item-detail-header">
    <div>${s}${r}</div>
    <div style="flex:1;min-width:0">
      <div class="item-detail-name">${mp(e.name)}</div>
      ${i?`<div class="item-detail-brand">${e.brand}</div>`:""}
      ${e.checked?'<div style="margin-top:4px"><span class="item-detail-badge" style="background:var(--gnd);color:var(--gn)">✓ Purchased</span></div>':""}
    </div>
  </div>
  <!-- Hidden file input for product photo uploads — triggered by Add/Change photo buttons -->
  <input type="file" id="productPhotoInput" accept="image/*" style="display:none"
    onchange="handleProductPhotoSelected('${e.id}')" />`;const c=[];e.category&&e.category!=="General"&&c.push(e.category),e.source&&c.push(`via ${e.source}`),e.src&&c.push(e.src==="manual"?"Added manually":e.src==="meal-plan"?"From meal plan":e.src==="deal"?"From deals":e.src==="search"?"Product search":e.src),c.length&&(o+=`<div style="margin-bottom:10px">${c.map(v=>`<span class="item-detail-badge">${v}</span>`).join("")}</div>`);const u=e.qty||1;u>1&&(o+=`<div class="item-detail-section">
      <div class="item-detail-label">Quantity</div>
      <div class="item-detail-value">× ${u}</div>
    </div>`),e.note&&(o+=`<div class="item-detail-section">
      <div class="item-detail-label">Note</div>
      <div class="item-detail-value">${e.note}</div>
    </div>`),o+='<button class="btn bs bf" onclick="closeItemDetail()" style="margin-top:8px">Close</button>',t.innerHTML=o;const d=f("itemDetailBackdrop"),m=f("itemDetailSheet");d&&d.classList.add("active"),m&&m.classList.add("active")}function jI(){const n=f("itemDetailBackdrop"),e=f("itemDetailSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}async function BI(n){const e=p.shop.find(s=>s.id===n);if(!e)return;const t={...e,image:null};await Ie(t),Ir(n)}function HI(n){window._uploadTargetItemId=n;const e=document.getElementById("productPhotoInput");e&&(e.value="",e.click())}async function qI(n){const e=document.getElementById("productPhotoInput");if(!e||!e.files||!e.files[0])return;const t=e.files[0],s=p.shop.find(r=>r.id===n);if(!s)return;const i=f("itemDetailContent");if(i){const r=i.querySelector(".item-detail-img-wrap, .item-detail-img-ph");r&&(r.innerHTML=`<div style="text-align:center;padding:16px 0">
        <div style="font-size:1.2rem">⏳</div>
        <div style="font-size:.65rem;color:var(--mt);margin-top:2px">Uploading…</div>
      </div>`)}try{const r=await SI(t,s.name),o={...s,image:r};await Ie(o),P("Photo saved ✓"),Ir(n)}catch(r){console.error("Product photo upload failed:",r),P("Upload failed — try again"),Ir(n)}}function zI(n){const e=window._enrichCtx;if(!e)return;const t=e.results[n];if(t){if(e.list==="shop"){const s=p.shop.find(i=>i.id===e.itemId);s&&Ie({...s,name:t.name,brand:t.brand||"",image:t.image||null,category:t.category||"",source:t.source||"search"})}else if(e.list==="inv"){const s=p.inv.find(i=>i.id===e.itemId);s&&Le({...s,name:t.name,brand:t.brand||"",image:t.image||null,category:t.category||s.category,source:t.source||"search"})}Er(),P(`Updated with "${t.name}" ✓`)}}function _p(n){if(!p.hid||!n)return;const e=Date.now().toString(36)+Math.random().toString(36).slice(2,6);ee(`households/${p.hid}/completed_items/${e}`,{name:n,completedAt:new Date().toISOString()}).catch(t=>console.warn("recordCompleted error:",t))}function WI(n){const e=p.shop.find(s=>s.id===n);if(!e)return;const t=!e.checked;Ie({...e,checked:t}),t&&_p(e.name)}function GI(n,e){n.stopPropagation();const t=f("sne-"+e),s=f("sni-"+e);if(!t)return;t.classList.toggle("open")&&s&&(s.focus(),s.setSelectionRange(s.value.length,s.value.length))}function KI(n){const e=f("sni-"+n);if(!e)return;const t=p.shop.find(i=>i.id===n);if(!t)return;const s=e.value.trim();s!==(t.note||"")&&Ie({...t,note:s})}function QI(n){const e=f("sqe-"+n),t=f("sqi-"+n);if(!e)return;e.classList.toggle("open")&&t&&(t.focus(),t.select())}function JI(n,e){const t=f("sqi-"+n);if(!t)return;const s=Math.max(1,(parseInt(t.value,10)||1)+e);t.value=s,bp(n)}function bp(n){const e=f("sqi-"+n);if(!e)return;const t=p.shop.find(i=>i.id===n);if(!t)return;const s=Math.max(1,parseInt(e.value,10)||1);s!==(t.qty||1)&&Ie({...t,qty:s})}function YI(){p.aisleMode=!p.aisleMode;const n=f("aislebtn");n&&(n.style.background=p.aisleMode?"var(--ac)":"",n.style.color=p.aisleMode?"var(--bg)":""),ds()}function XI(n){["list","deals"].forEach(s=>{const i=f("shtab-"+s);i&&i.classList.remove("active");const r=f("sh-"+s+"-body");r&&(r.style.display="none")});const e=f("shtab-"+n);e&&e.classList.add("active");const t=f("sh-"+n+"-body");t&&(t.style.display="block"),n==="deals"&&Tp()}function ZI(){const n=p.shop.filter(s=>!s.checked);if(!n.length){P("List is empty!");return}const t=`🛒 Shopping List

`+n.map(s=>{let i="• "+s.name;return(s.qty||1)>1&&(i+=" × "+s.qty),s.price&&(i+=" (~$"+s.price+")"),i}).join(`
`);navigator.share?navigator.share({title:"Shopping List",text:t}).catch(()=>{}):navigator.clipboard&&navigator.clipboard.writeText(t).then(()=>P("List copied!"))}function eS(){const n=p.shop.filter(t=>t.checked);if(!n.length){P("No completed items!");return}const e=f("atk-body");e.innerHTML=`<div style="padding:16px">
    <p style="font-size:.82rem;color:var(--mt);margin-bottom:16px">Choose where each item goes in your kitchen, then tap Add All.</p>
    ${n.map(t=>{const s=Xa(t.name);return`<div class="atk-item" id="atk-${t.id}" data-loc="${s}">
        <div class="atk-name">${t.name}</div>
        <div class="atk-loc">
          <button onclick="setAtkLoc('${t.id}','fridge',this)" class="${s==="fridge"?"sel":""}">🌡 Fridge</button>
          <button onclick="setAtkLoc('${t.id}','freezer',this)" class="${s==="freezer"?"sel":""}">🧊 Freeze</button>
          <button onclick="setAtkLoc('${t.id}','pantry',this)" class="${s==="pantry"?"sel":""}">🥫 Pantry</button>
        </div>
      </div>`}).join("")}
  </div>`,At("atk")}function tS(n,e,t){const s=f("atk-"+n);s.dataset.loc=e,s.querySelectorAll(".atk-loc button").forEach(i=>i.classList.remove("sel")),t.classList.add("sel")}async function nS(){const n=p.shop.filter(s=>s.checked),e=new Date().toLocaleDateString();let t=0;for(const s of n){const i=f("atk-"+s.id);if(!i)continue;const r=i.dataset.loc||Xa(s.name),o=p.inv.find(u=>u.name.toLowerCase()===s.name.toLowerCase()),c=s.qty||1;await Le({id:o?o.id:"inv-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:o?o.name:s.name,qty:o?o.qty+c:c,unit:o?o.unit:"unit",location:r,category:o?o.category:Jt({name:s.name}),addedAt:o?o.addedAt:e,brand:o?o.brand:s.brand||"",expiry:o?o.expiry:null,image:o?o.image:s.image||null,source:"shopping"}),await Mr(s.id),t++}Pe("atk"),P(`${t} item${t!==1?"s":""} added to your kitchen! 🧺`)}async function sS(){const n=as().map(i=>{const r=i.toISOString().split("T")[0];return p.mp[r]?`${i.toLocaleDateString("en-US",{weekday:"short"})}: ${p.mp[r]}`:""}).filter(Boolean).join(", ");if(!n){P("No meals planned yet!");return}const e=p.inv.map(i=>`${i.name} (${i.qty} ${i.unit})`).join(", "),t=document.querySelector('[onclick="buildList()"]'),s=t?t.textContent:"";t&&(t.disabled=!0,t.textContent="⏳ Thinking…");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:500,messages:[{role:"user",content:`Week meals: ${n}
Already have: ${e}
List ONLY ingredients still needed. Return ONLY a bullet list, each line starting "- ". No categories, no headers, no explanation.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",c=[];if(o.split(`
`).forEach(u=>{const d=u.match(/^[-•*]\s+(.+)/);if(d){const m=d[1].replace(/\*\*/g,"").trim();m&&!p.shop.find(v=>v.name.toLowerCase()===m.toLowerCase())&&c.push({name:m,sel:!0})}}),!c.length){P("Nothing new needed — you're all stocked! ✓");return}window._bpItems=c,f("bpList").innerHTML=c.map((u,d)=>`<div id="bpitem-${d}" onclick="bpTog(${d})" style="display:flex;align-items:center;gap:12px;padding:13px 16px;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;cursor:pointer;transition:all .15s"><div id="bpck-${d}" style="width:24px;height:24px;border-radius:50%;background:var(--gn);border:2px solid var(--gn);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.8rem;color:#0c0c0a;transition:all .2s">✓</div><div style="font-size:.9rem;font-weight:500">${u.name}</div></div>`).join(""),Pc(),f("buildPreviewM").classList.add("active")}catch{P("Couldn't reach Claude — check connection")}finally{t&&(t.disabled=!1,t.textContent=s)}}function iS(n){window._bpItems[n].sel=!window._bpItems[n].sel;const e=f("bpck-"+n),t=f("bpitem-"+n);window._bpItems[n].sel?(e.textContent="✓",e.style.background="var(--gn)",e.style.borderColor="var(--gn)",e.style.color="#0c0c0a",t.style.borderColor="var(--b1)"):(e.textContent="",e.style.background="transparent",e.style.borderColor="var(--b2)",t.style.borderColor="var(--b2)"),Pc()}function rS(n){window._bpItems.forEach((e,t)=>{window._bpItems[t].sel=n;const s=f("bpck-"+t),i=f("bpitem-"+t);n?(s.textContent="✓",s.style.background="var(--gn)",s.style.borderColor="var(--gn)",s.style.color="#0c0c0a",i.style.borderColor="var(--b1)"):(s.textContent="",s.style.background="transparent",s.style.borderColor="var(--b2)",i.style.borderColor="var(--b2)")}),Pc()}function Pc(){const n=window._bpItems.filter(t=>t.sel).length,e=f("bpAddBtn");e&&(e.textContent=n?`Add ${n} item${n!==1?"s":""}  ✓`:"Nothing selected"),e&&(e.disabled=!n)}async function oS(){const n=window._bpItems.filter(e=>e.sel);if(!n.length){f("buildPreviewM").classList.remove("active");return}for(const e of n)await Ie({id:Date.now().toString()+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"meal-plan"});f("buildPreviewM").classList.remove("active"),P(`Added ${n.length} item${n.length!==1?"s":""}! 🛒`)}function Tp(){const n=f("deals-zip-banner");if(!n)return;const e=p.cfg.zipcode;e?(n.innerHTML=`📍 Searching deals near <strong>${e}</strong> <span style="font-size:.72rem;color:var(--mt)">(change in Settings)</span>`,n.style.borderColor="var(--b2)"):(n.innerHTML=`⚠️ Set your zipcode in <strong style="cursor:pointer;color:var(--ac)" onclick="hideOv('');showOv('settings')">Settings</strong> to find local deals near you.`,n.style.borderColor="var(--am)")}function ka(n,e){const t=f("dealslist");if(!n||!n.length){t.innerHTML=`<div class="es"><div class="ei">🏷</div><p>No deals found for <strong>${e}</strong>.<br>Try a different search term or check back later for new circulars.</p></div>`;return}t.innerHTML="",n.forEach(s=>{const i=document.createElement("div");i.className="deal-card"+(s.onSale?" deal-match":"");const r=document.createElement("div");r.style.flex="1";const o=document.createElement("div");o.className="deal-store",o.textContent=s.store||"Store";const c=document.createElement("div");if(c.className="deal-name",c.textContent=s.name||"",s.brand||s.size){const m=document.createElement("div");m.style.cssText="font-size:.72rem;color:var(--mt);margin-top:1px",m.textContent=[s.brand,s.size].filter(Boolean).join(" · "),r.appendChild(o),r.appendChild(c),r.appendChild(m)}else r.appendChild(o),r.appendChild(c);const u=document.createElement("div");if(u.style.cssText="display:flex;align-items:baseline;gap:6px;margin-top:4px;flex-wrap:wrap",s.sale_price){const m=document.createElement("span");m.className="deal-price",m.textContent=s.sale_price,u.appendChild(m)}if(s.onSale&&s.regular){const m=document.createElement("span");m.className="deal-orig",m.textContent=s.regular,u.appendChild(m)}if(s.savings){const m=document.createElement("span");m.className="deal-badge",m.textContent="Save "+s.savings,u.appendChild(m)}r.appendChild(u);const d=document.createElement("button");d.className="btn bs bsm",d.style.cssText="align-self:center;flex-shrink:0;margin-left:8px",d.textContent="+ List",(m=>{d.onclick=()=>Ep(m)})(s.name||""),i.appendChild(r),i.appendChild(d),t.appendChild(i)})}function Ca(n){const e=f("deals-stores");!e||!n||!n.length||(e.style.display="block",e.innerHTML='<div style="font-size:.72rem;color:var(--mt);font-weight:600;margin-bottom:4px">Stores with deals</div>'+n.map(t=>`<div style="font-size:.74rem;color:var(--tx2);padding:2px 0">${t.name}</div>`).join(""))}function Ep(n){const e=(n||"").replace(/&#39;/g,"'");p.shop.find(t=>t.name.toLowerCase()===e.toLowerCase())?P("Already on your list!"):(Ie({id:Date.now().toString(),name:e,qty:1,checked:!1,src:"deal"}),P(e+" added!"))}async function Ra(n){const e=p.cfg.zipcode;if(!e)throw new Error("Set your zipcode in Settings to search for local deals.");const t="ks-deals-"+e+"-"+n.toLowerCase().replace(/\s+/g,"_").substring(0,40),s=$e(t);if(s&&s.ts&&Date.now()-s.ts<72e5)return s;const i=await fetch("/api/deals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({zipcode:e,query:n})}),r=await i.json();if(!i.ok||r.error)throw new Error(r.message||r.error||"Deals API request failed");return rt(t,{...r,ts:Date.now()}),r}async function aS(){const n=f("dealsearch").value.trim();if(!n){P("Enter something to search");return}const e=f("dealsstatus");e.style.display="block",e.style.color="var(--mt)",e.textContent="🔍 Searching deals for "+n+" near "+(p.cfg.zipcode||"your area")+"…",f("dealslist").innerHTML="";try{const t=await Ra(n);if(e.style.display="none",t.message){f("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${t.message}</p></div>`;return}t.stores&&Ca(t.stores),ka(t.deals,n)}catch(t){e.style.color="var(--rd)",e.textContent=t.message||"Unknown error"}}async function cS(){const n=p.shop.filter(s=>!s.checked);if(!n.length){const s=Object.values(p.mp).filter(Boolean);if(!s.length){P("Add items to your list first!");return}if(!confirm(`Your list is empty. Search deals for this week's meals?

`+s.join(", ")))return;const r=f("dealsstatus");r.style.display="block",r.textContent="Searching deals for your meal plan...",f("dealslist").innerHTML="";try{const o=await Ra(s.join(", "));if(r.style.display="none",o.message){f("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${o.message}</p></div>`;return}o.stores&&Ca(o.stores),ka(o.deals,s.join(", "))}catch(o){r.style.color="var(--rd)",r.textContent=o.message}return}const e=f("dealsstatus"),t=n.slice(0,8).map(s=>s.name).join(", ");e.style.display="block",e.style.color="var(--mt)",e.textContent="Searching deals for: "+t+"...",f("dealslist").innerHTML="";try{const s=await Ra(t);if(e.style.display="none",s.message){f("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${s.message}</p></div>`;return}s.stores&&Ca(s.stores),s.deals.length?ka(s.deals,t):f("dealslist").innerHTML='<div class="es"><div class="ei">🏷</div><p>No deals found for your list items.<br/>Try searching for individual items.</p></div>'}catch(s){e.style.color="var(--rd)",e.textContent=s.message}}function qi(n){const e=Ya[Jt(n)]||"🛒",t=n.image?`<img src="${n.image}" class="iimg" onerror="this.style.display='none'"/>`:`<div class="iph">${e}</div>`,s=dt(n.expiry),i=s?s.c==="expired"?" expired":s.c==="expiring"?" expiring":"":"",r=s?`<div class="etag ${s.c}">${s.l}</div>`:"";return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="inv">
    <div class="swipe-inner">
      <div class="iit${i}" onclick="swipeRowTap('${n.id}','inv')">
        <div class="sel-cb">✓</div>
        <div class="iileft">${t}<div>
          <div class="inm">${n.name}</div>
          <div class="isb">${n.brand||Jt(n)}</div>
          ${n.note?`<div class="shnote" style="margin-top:2px">📝 ${n.note}</div>`:""}
          ${r}
        </div></div>
        <div style="text-align:right">
          <div class="iqt">${n.qty}</div>
          <div class="iun">${n.unit}</div>
        </div>
      </div>
    </div>
    <div class="swipe-del" onclick="swipeDelItem('${n.id}','inv')"><span>🗑</span>Delete</div>
  </div>`}function Jr(){const n=(i,r)=>i.name.localeCompare(r.name),e=(p.it==="all"||p.it==="cat"?p.inv:p.inv.filter(i=>i.location===p.it)).slice().sort(n),t=f("isub");t&&(t.textContent=e.length+" "+({all:"items",fridge:"fridge items",freezer:"frozen items",pantry:"pantry items",cat:"items by type"}[p.it]||"items")),Jf();const s=f("ibody");if(s){if(!e.length){s.innerHTML='<div class="es"><div class="ei">🧺</div><p>No items here yet.<br/>Tap Scan or Add to get started.</p></div>';return}if(p.it==="cat"){const i={};e.forEach(r=>{const o=Jt(r);i[o]||(i[o]=[]),i[o].push(r)}),s.innerHTML=Object.entries(i).sort((r,o)=>r[0].localeCompare(o[0])).map(([r,o])=>`<div class="lgrp"><div class="lgt">${Ya[r]||"📦"} ${r}</div><div class="ilst">${o.map(qi).join("")}</div></div>`).join(""),p.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(r=>{r.classList.add("selecting"),p.selectedIds.has(r.dataset.id)&&r.classList.add("selected")});return}if(p.it==="all"){const i=p.inv.filter(o=>{const c=dt(o.expiry);return c&&(c.c==="expiring"||c.c==="expired")}).sort((o,c)=>new Date(o.expiry)-new Date(c.expiry)),r=i.length?`<div class="lgrp"><div class="lgt" style="color:var(--am)">⚠️ Expiring Soon</div><div class="ilst">${i.map(qi).join("")}</div></div>`:"";s.innerHTML=r+["fridge","freezer","pantry"].map(o=>{const c=e.filter(u=>u.location===o);return c.length?`<div class="lgrp"><div class="lgt">${Ja(o)}</div><div class="ilst">${c.map(qi).join("")}</div></div>`:""}).join(""),p.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(o=>{o.classList.add("selecting"),p.selectedIds.has(o.dataset.id)&&o.classList.add("selected")});return}s.innerHTML=`<div class="ilst">${e.map(qi).join("")}</div>`,p.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(i=>{i.classList.add("selecting"),p.selectedIds.has(i.dataset.id)&&i.classList.add("selected")})}}function lS(n){const e=p.inv.find(i=>i.id===n);if(!e)return;p.adjId=n;const t=Ya[Jt(e)]||"🛒",s=e.image?`<img src="${e.image}" class="pimg" onerror="this.style.display='none'"/>`:`<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">${t}</div>`;f("adjbody").innerHTML=`<div class="pcard"><div class="phdr">${s}<div style="flex:1"><div class="pnm">${e.name}</div>${e.brand?`<div class="pbr">${e.brand}</div>`:""}<div style="font-size:.7rem;color:var(--mt);margin-top:2px">Added ${e.addedAt}</div>${e.source?`<span class="srcb" style="display:inline-block;margin-top:4px">${e.source}</span>`:""}</div></div><div class="frow" style="margin-top:14px"><label class="flbl">Location</label><div class="lpick"><button class="lbtn ${e.location==="fridge"?"sel":""}" onclick="updL('fridge',this)">🌡 Fridge</button><button class="lbtn ${e.location==="freezer"?"sel":""}" onclick="updL('freezer',this)">🧊 Freezer</button><button class="lbtn ${e.location==="pantry"?"sel":""}" onclick="updL('pantry',this)">🥫 Pantry</button></div></div><div class="qrow"><span class="qlbl">Quantity</span><div class="qctl"><button class="qbtn" onclick="adjQ(-1)">−</button><input class="qinp" id="adjqty" type="number" min="0" value="${e.qty}" oninput="adjQD()"/><button class="qbtn" onclick="adjQ(1)">+</button></div></div><div class="frow"><label class="flbl">Expiry Date <span class="otag">optional</span></label><input class="fd" id="adjexp" type="date" value="${e.expiry||""}" onchange="adjE()"/></div><div class="frow"><label class="flbl">Notes <span class="otag">optional</span></label><textarea class="sh-note-inp" id="adjnote" rows="2" placeholder="Brand, store, reminders…" onblur="adjNote()">${e.note||""}</textarea></div><div class="qrow"><span class="qlbl">Low stock alert at</span><div class="qctl"><button class="qbtn" onclick="adjLowThresh(-1)">−</button><input class="qinp" id="adjlowthresh" type="number" min="0" value="${e.lowStockThreshold||1}" oninput="adjLowThreshD()"/><button class="qbtn" onclick="adjLowThresh(1)">+</button></div></div></div>`,f("rembtn").onclick=()=>xc(n),At("adj")}async function xc(n){const e=p.inv.find(t=>t.id===n);if(e){const t=dt(e.expiry);t&&(t.c==="expired"||t.c==="expiring")&&await Rw(e.name)}await Ka(n),P("Item removed"),Pe("adj")}async function uS(n,e){const t=p.inv.find(s=>s.id===p.adjId);t&&(document.querySelectorAll("#adjbody .lbtn").forEach(s=>s.classList.remove("sel")),e.classList.add("sel"),await Le({...t,location:n}))}async function hS(n){const e=p.inv.find(s=>s.id===p.adjId);if(!e)return;const t=Math.max(0,e.qty+n);if(f("adjqty").value=t,t===0){await xc(p.adjId);return}await Le({...e,qty:t})}async function dS(){const n=p.inv.find(t=>t.id===p.adjId);if(!n)return;const e=parseInt(f("adjqty").value);!isNaN(e)&&e>=0&&await Le({...n,qty:e})}async function fS(){const n=p.inv.find(e=>e.id===p.adjId);n&&await Le({...n,expiry:f("adjexp").value||null})}async function pS(){const n=p.inv.find(t=>t.id===p.adjId);if(!n)return;const e=(f("adjnote").value||"").trim();await Le({...n,note:e||null})}async function mS(n){const e=p.inv.find(s=>s.id===p.adjId);if(!e)return;const t=Math.max(0,(e.lowStockThreshold||1)+n);f("adjlowthresh").value=t,await Le({...e,lowStockThreshold:t})}async function gS(){const n=p.inv.find(t=>t.id===p.adjId);if(!n)return;const e=parseInt(f("adjlowthresh").value);!isNaN(e)&&e>=0&&await Le({...n,lowStockThreshold:e})}function yS(n){p.it=n,document.querySelectorAll(".itab").forEach(t=>t.classList.remove("active"));const e=f("itab-"+n);e&&e.classList.add("active"),Jr()}async function vS(){const n=f("man").value.trim();if(!n)return;const e=f("mac").value,t=f("mau").value.trim()||"unit",s=Math.max(1,parseInt(f("maq").value)||1),i=f("mae").value||null,r="itm-"+n.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now();await Le({id:r,barcode:r,name:n,brand:"",unit:t,qty:s,location:p.maL,category:e,image:null,source:"Manual",expiry:i,addedAt:new Date().toLocaleDateString()}),f("man").value="",f("maq").value=1,f("mae").value="",f("mabtn").disabled=!0,P(`${n} added!`),Pe("madd"),Qr(r,n,"inv")}function wS(){f("mabtn").disabled=!f("man").value.trim()}function _S(n){const e=f("maq");e.value=Math.max(1,(parseInt(e.value)||1)+n)}function bS(n,e){p.maL=n,document.querySelectorAll("#ov-madd .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}async function TS(){const n=f("imptxt").value.trim();if(!n)return;let e=0,t=0,s="pantry";for(const i of n.split(`
`)){const r=i.toLowerCase();r.includes("fridge")?s="fridge":r.includes("freezer")?s="freezer":r.includes("pantry")&&(s="pantry");const o=i.match(/^\|\s*([^|]+?)\s*\|\s*(\d+(?:\.\d+)?)\s*\|\s*([^|]+?)\s*\|/),c=i.match(/^[-*]\s+(.+?):\s*(\d+(?:\.\d+)?)\s*([a-zA-Z%\/]+.*)?$/);let u,d,m;if(o?(u=o[1].trim(),d=parseFloat(o[2]),m=o[3].trim()):c&&(u=c[1].trim(),d=parseFloat(c[2]),m=(c[3]||"unit").trim()),u&&d&&u!=="Item"&&u!=="---"&&!u.startsWith("-")){const v="item-imp-"+u.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),T=p.inv.find(C=>C.id===v);await Le({id:v,barcode:v,name:u,brand:"",unit:m||"unit",qty:d,location:s,category:"Imported",image:null,source:"Imported",expiry:null,addedAt:T?T.addedAt:new Date().toLocaleDateString()}),T?t++:e++}}f("imptxt").value="",P(`Imported ${e} new, updated ${t}`),Pe("import")}let Ys=null,Gt=null,Yr="fridge",Ge=null,zo=!1,zi="",Wo=!1;const Ds=new Map,ES=300*1e3,IS=30;function SS(){const n=f("invAddBackdrop"),e=f("invAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),Yr="fridge",document.querySelectorAll("#invAddSheet .lbtn").forEach(s=>s.classList.remove("sel"));const t=f("invAddLoc-fridge");t&&t.classList.add("sel"),setTimeout(()=>{const s=f("invi");s&&(s.value="",s.focus())},150)}function wi(){const n=f("invAddBackdrop"),e=f("invAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),Lc()}function AS(){wi(),window.openScanForInventory&&window.openScanForInventory()}function kS(){wi(),Ip()}function CS(n,e){Yr=n,document.querySelectorAll("#invAddSheet .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function RS(){const n=f("invAddNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=f("invAddNoteInp");t&&t.focus()}}function PS(){const n=f("invi"),e=n?n.value.trim():"";if(!e)return;let t=e,s=1;const i=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),s=parseInt(r[2],10)||1):i&&(t=i[2].trim(),s=parseInt(i[1],10)||1);const o=f("invAddNoteInp"),c=o?o.value.trim():"",u="itm-"+t.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),d={id:u,barcode:u,name:t,brand:"",unit:"unit",qty:s,location:Yr,category:Jt({name:t}),image:null,source:"Manual",expiry:null,addedAt:new Date().toLocaleDateString()};c&&(d.note=c),Le(d),P(`${t} added!`),n&&(n.value=""),o&&(o.value="");const m=f("invAddNoteWrap");m&&(m.style.display="none"),Lc(),wi(),Qr(u,t,"inv")}function xS(){Ys&&clearTimeout(Ys);const n=f("invi"),e=n?n.value.trim():"",t=f("invSearchDropdown");if(!e||e.length<2){t&&(t.classList.remove("active"),t.innerHTML=""),Gt=null;return}Ys=setTimeout(()=>DS(e),350)}function LS(n){if(!n)return"NONE";const e=n.toLowerCase();return e.includes("kroger.com")?"Kroger (real product)":e.includes("img.spoonacular.com/products")?"Spoonacular product (real photo)":e.includes("img.spoonacular.com/ingredients")?"Spoonacular ingredient (illustration)":e.includes("openfoodfacts.org")?"Open Food Facts (real photo)":e.includes("edamam")?"Edamam":"Other: "+new URL(n).hostname}async function DS(n){const e=f("invSearchDropdown");if(e){e.innerHTML='<div class="search-hint">Searching…</div>',e.classList.add("active");try{const t=n.toLowerCase();let s;const i=Ds.get(t);if(i&&Date.now()-i.ts<ES)s=i.scored;else{let u=(await(await fetch(`/api/text-search?q=${encodeURIComponent(n)}`)).json()).results||[];const d=n.toLowerCase().split(/\s+/).filter(m=>m.length>=2);u=u.filter(m=>{const v=(m.name||"").toLowerCase();return d.some(T=>v.includes(T))}),s=u.map(m=>({...m,_score:vp(m.name||"",n)})).filter(m=>m._score>=15).sort((m,v)=>v._score-m._score).slice(0,5),Ds.set(t,{scored:s,ts:Date.now()}),Ds.size>IS&&Ds.delete(Ds.keys().next().value)}if((f("invi")?f("invi").value.trim():"").toLowerCase()!==n.toLowerCase())return;if(!s.length){e.classList.remove("active"),e.innerHTML="",Gt=null;return}Gt=s,s.forEach((o,c)=>{const u=LS(o.image);console.log(`[InvDropdown] #${c} "${o.name}" → image: ${u} | url: ${o.image||"(none)"} | score: ${o._score}`)}),e.innerHTML=s.map((o,c)=>{const u=o.image?`<img src="${o.image}" class="enrich-img" alt="" onerror="this.style.display='none'"/>`:'<div class="enrich-img-ph">🛒</div>',d=o.brand?`<div class="enrich-brand">${o.brand}</div>`:"",m=o.category&&o.category!=="General"?`<div class="enrich-cat">${o.category}</div>`:"";return`<div class="enrich-row" onclick="pickInvInlineResult(${c})">
        ${u}
        <div style="flex:1;min-width:0">
          <div class="enrich-name">${o.name}</div>
          ${d}${m}
        </div>
      </div>`}).join("")}catch(t){console.warn("Inventory inline search failed:",t),e.classList.remove("active"),e.innerHTML="",Gt=null}}}function NS(n){if(!Gt||!Gt[n])return;const e=Gt[n],t=f("invAddNoteInp"),s=t?t.value.trim():"",i="itm-"+(e.name||"item").toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),r={id:i,barcode:i,name:e.name,brand:e.brand||"",unit:"unit",qty:1,location:Yr,category:e.category||Jt({name:e.name}),image:e.image||null,source:e.source||"search",expiry:null,addedAt:new Date().toLocaleDateString()};s&&(r.note=s),Le(r),P(`Added "${e.name}" ✓`);const o=f("invi");o&&(o.value=""),t&&(t.value="");const c=f("invAddNoteWrap");c&&(c.style.display="none"),Lc(),wi()}function Lc(){Ys&&clearTimeout(Ys),Gt=null;const n=f("invSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}function OS(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=f("invAddMicOpt");e&&(e.style.display="")}function Ah(n){const e=f("inv-micstatus");e&&e.classList.toggle("visible",n)}function Ip(){if(zo&&Ge){Wo=!0,Ge.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){P("Voice input not supported");return}Ge=new n,Ge.lang="en-US",Ge.interimResults=!0,Ge.maxAlternatives=1,Ge.continuous=!1,zi="",zo=!0,Ah(!0),Ge.onresult=e=>{let t="";for(let i=e.resultIndex;i<e.results.length;i++){const r=e.results[i][0].transcript;e.results[i].isFinal?zi+=r:t+=r}const s=f("invi");s&&(s.value=(zi+t).trim())},Ge.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&P("Couldn't hear that — try again")},Ge.onend=()=>{zo=!1,Ah(!1),Ge=null;let e=zi.trim();if(!e&&Wo){const r=f("invi");e=r?r.value.trim():""}if(Wo=!1,!e)return;const t="itm-"+e.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),s=Xa(e);Le({id:t,barcode:t,name:e,brand:"",unit:"unit",qty:1,location:s,category:Jt({name:e}),image:null,source:"Voice",expiry:null,addedAt:new Date().toLocaleDateString()}),P(`Added "${e}" to ${s}`);const i=f("invi");i&&(i.value=""),Qr(t,e,"inv")},Ge.start()}function Sp(n){return[...document.querySelectorAll("#"+n+" .tag.sel")].map(e=>e.dataset.tag)}function MS(n,e){document.querySelectorAll("#"+n+" .tag").forEach(t=>{t.classList.toggle("sel",(e||[]).includes(t.dataset.tag))})}function VS(n){n.classList.toggle("sel")}function $S(n){const e=Array.from({length:5},(s,i)=>`<span class="star${i<n.rating?" on":""}">${i<n.rating?"★":"☆"}</span>`).join(""),t=n.sourceUrl?`<a href="${n.sourceUrl}" target="_blank" onclick="event.stopPropagation()" style="font-size:.68rem;color:var(--ac);text-decoration:none;border:1px solid rgba(212,168,83,.3);border-radius:20px;padding:2px 8px;background:transparent">🔗 View original</a>`:n.source?`<span class="sbdg">${n.source}</span>`:"";return`<div class="rcd${n.favorited?" fav":""}" onclick="openER('${n.id}')"><div class="rrow"><div class="rnm">${n.name}</div><div class="rfav" onclick="event.stopPropagation();togFav('${n.id}')">${n.favorited?"❤️":"🤍"}</div></div><div class="stars">${e}</div>${n.description?`<div class="rnot" style="color:var(--tx2);margin-top:6px">${n.description.substring(0,100)}${n.description.length>100?"…":""}</div>`:""}${n.notes?`<div class="rnot">${n.notes}</div>`:""}<div class="rmeta"><span>${n.savedAt}</span>${t}</div></div>`}function US(n){p.rt=n,document.querySelectorAll(".rtab").forEach(t=>t.classList.remove("active"));const e=f("rtab-"+n);e&&e.classList.add("active"),n==="community"?Dc():Xr()}function Xr(){if(p.rt==="community")return;let n=[...p.recs];p.rt==="fav"?n=n.filter(s=>s.favorited):p.rt==="top"?n=n.filter(s=>s.rating>=4).sort((s,i)=>i.rating-s.rating):p.rt==="quick"?n=n.filter(s=>(s.tags||[]).includes("Quick")||(s.tags||[]).includes("Under 30 min")):p.rt==="kid"?n=n.filter(s=>(s.tags||[]).includes("Kid-Friendly")):n=n.sort((s,i)=>new Date(i.savedAt||0)-new Date(s.savedAt||0));const e=f("rsub");e&&(e.textContent=n.length+" recipe"+(n.length!==1?"s":""));const t=f("rbody");if(t){if(!n.length){t.innerHTML=`<div class="es"><div class="ei">📖</div><p>${p.rt==="fav"?"No favorites yet!":p.rt==="top"?"No 4–5 star recipes yet.":p.rt==="quick"?"No quick recipes saved yet.":p.rt==="kid"?"No kid-friendly recipes yet.":"No recipes saved yet.<br/>Mark meals as cooked or tap + Add."}</p></div>`;return}t.innerHTML=n.map($S).join("")}}async function FS(n){const e=p.recs.find(t=>t.id===n);e&&(await Qt({...e,favorited:!e.favorited}),P(e.favorited?"Removed from favorites":"Added to favorites! ❤️"))}function jS(){f("savrecbtn").disabled=!f("rn").value.trim()}async function BS(){const n=f("rurl").value.trim();if(!n)return;const e=f("rurlstatus"),t=f("rimportbtn");e.style.display="block",e.style.color="var(--mt)",e.textContent="⏳ Fetching recipe…",t.disabled=!0;try{const i=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})})).json();if(!i.success){e.style.color="var(--rd)",e.textContent="⚠️ "+(i.error||"Couldn't import this recipe"),t.disabled=!1;return}const r=i.recipe,o=[r.ingredients||"",r.steps?`

Steps:
`+r.steps:""].join("").trim();f("rn").value=r.title||"",f("rd").value=o||r.description||"",f("rnotes").value=r.notes||"",f("rsourceurl").value=n,f("rcuisine")&&(f("rcuisine").value=r.cuisine||""),f("savrecbtn").disabled=!r.title,e.style.color="var(--gn)",e.textContent="✓ Recipe imported! Review and save."}catch{e.style.color="var(--rd)",e.textContent="⚠️ Couldn't import — try copying the recipe text manually."}t.disabled=!1}async function HS(){const n=f("rn").value.trim();if(!n)return;const e=f("rd").value.trim(),t=f("rsourceurl")?f("rsourceurl").value.trim():"",s=f("rcuisine")?f("rcuisine").value.trim():"",i=Sp("rtags");await Qt({id:"rec-"+Date.now(),name:n,rating:p.nr,favorited:!1,notes:f("rnotes").value.trim(),description:e,source:t?"Web Import":"Manual",sourceUrl:t||null,tags:i,cuisine:s,cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:!1}),f("rn").value="",f("rnotes").value="",f("rd").value="",f("rsourceurl").value="",f("rurl").value="",f("rcuisine")&&(f("rcuisine").value=""),MS("rtags",[]),p.nr=0,f("savrecbtn").disabled=!0,qs("rstars",0),P("Recipe saved! 📖"),Pe("arec")}function qS(n){const e=p.recs.find(o=>o.id===n);if(!e)return;p.eid=n;const t=e.rating||0,s=Array.from({length:5},(o,c)=>`<span class="star${c<t?" on":""}" onclick="setStar(${c+1},'e')">${c<t?"★":"☆"}</span>`).join(""),i=e.sourceUrl?`<div class="frow"><label class="flbl">Original</label><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);word-break:break-all">${e.sourceUrl}</a></div>`:"",r=`<div class="frow"><label class="flbl">Tags</label><div class="tags" id="etags">
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
    <div class="brow"><button class="btn bd" style="flex:1" onclick="delER()">Delete</button><button class="btn bp" style="flex:2" onclick="updR()">Save</button></div>`,At("erec")}async function zS(){const n=p.recs.find(i=>i.id===p.eid);if(!n)return;const e=[...document.querySelectorAll("#estars .star")].filter(i=>i.classList.contains("on")).length,t=Sp("etags"),s=f("ecuis")?f("ecuis").value.trim():n.cuisine||"";await Qt({...n,name:f("ern").value.trim(),rating:e,description:f("erd").value.trim(),notes:f("erno").value.trim(),favorited:f("etog").classList.contains("on"),tags:t,cuisine:s}),P("Recipe updated!"),Pe("erec")}async function WS(){confirm("Delete this recipe?")&&(await xw(p.eid),P("Deleted"),Pe("erec"))}async function GS(n){const e=f("erd");if(!e)return;const t=e.value.trim();if(!t){P("No ingredients to scale");return}const s=f("scaleStatus");s.style.display="block",s.style.color="var(--mt)",s.textContent=`⏳ Scaling to ${n}× with Claude…`;try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Scale ALL ingredient quantities in this recipe by ${n}x. Return ONLY the updated recipe text with scaled quantities. Keep the same format. Do not add any explanation.

${t}`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"";o?(e.value=o.trim(),s.style.color="var(--gn)",s.textContent=`✓ Scaled to ${n}×`):(s.style.color="var(--rd)",s.textContent="Couldn't scale — try again")}catch{s.style.color="var(--rd)",s.textContent="Couldn't reach Claude — check connection"}}async function KS(){const n=f("rsub");n&&(n.textContent="Thinking…");const e=p.inv.map(i=>`${i.name} (${i.qty} ${i.unit})`).join(", "),t=p.recs.map(i=>i.name).join(", "),s=[p.cfg.nopork?"no pork":null,p.cfg.noshellfish?"no shellfish":null,p.cfg.vegetarian?"vegetarian":null,p.cfg.glutenfree?"gluten-free":null,p.cfg.other||null].filter(Boolean).join(", ");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Based on this exact inventory: ${e}
Restrictions: ${s||"none"}
Saved recipes: ${t||"none"}
Suggest 5 complete meals I can make RIGHT NOW with no extra shopping. Be specific with names. Format as a numbered list.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",c=f("rbody");c&&(c.innerHTML=`<div style="background:var(--card);border:1px solid var(--ac);border-radius:14px;padding:16px;margin-bottom:12px"><div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ac);margin-bottom:10px">🔍 Make right now — no shopping needed</div><div style="font-size:.88rem;line-height:1.8;color:var(--tx2)">${Hw(o)}</div><button class="btn bs bsm" style="margin-top:12px;width:100%" onclick="setRT('all')">← Back to recipes</button></div>`),n&&(n.textContent="Based on your inventory")}catch{n&&(n.textContent="Couldn't reach Claude")}}async function QS(n){const e=p.recs.find(t=>t.id===n);if(!e||!e.description){P("No ingredients listed");return}P("Parsing ingredients…");try{const t=p.inv.map(u=>u.name.toLowerCase()),i=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:400,messages:[{role:"user",content:`Extract a list of ingredient names from this recipe description. Return ONLY a JSON array of strings, no markdown, no quantities, just clean ingredient names. Example: ["chicken","garlic","olive oil"]

Recipe: ${e.description}`}]})})).json(),r=(i.content&&i.content[0]&&i.content[0].text||"").replace(/```json|```/g,"").trim(),c=JSON.parse(r).filter(u=>!t.some(d=>d.includes(u.toLowerCase())||u.toLowerCase().includes(d)));if(!c.length){P("All ingredients already in pantry ✓");return}for(const u of c)await Ie({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:u,qty:1,checked:!1,src:"recipe"});P(`Added ${c.length} ingredient${c.length!==1?"s":""} to shopping list 🛒`),Pe("erec"),window.showScreen("shopping")}catch{P("Couldn't parse ingredients")}}function JS(n,e){p.nr=n,e==="r"?qs("rstars",n):e==="c"?qs("cstars",n):e==="e"&&qs("estars",n)}async function YS(n){const e=p.recs.find(r=>r.id===n);if(!e)return;const t=!e.isPublic,s=xe(),i=(s==null?void 0:s.displayName)||localStorage.getItem("ks-who")||"Anonymous";t?(await Lw(e,i,p.hid),P("Recipe shared with the community!")):(await Dw(e.id),P("Recipe removed from community")),await Qt({...e,isPublic:t})}async function Dc(){const n=f("rbody");if(n){n.innerHTML='<div class="es"><div class="ei">🌍</div><p>Loading community recipes…</p></div>';try{p.comRecs=await Nw(),Nc()}catch(e){console.error("loadCommunity:",e),n.innerHTML=`<div class="es"><div class="ei">⚠️</div><p>Couldn't load community recipes.</p></div>`}}}function XS(n){p.comCuisine=n,Nc()}function ZS(n){p.comSearch=n,Nc()}function Nc(){const n=f("rbody");if(!n)return;let e=[...p.comRecs];if(p.comCuisine&&p.comCuisine!=="all"&&(e=e.filter(i=>(i.cuisine||"").toLowerCase().includes(p.comCuisine.toLowerCase())||(i.tags||[]).some(r=>r.toLowerCase().includes(p.comCuisine.toLowerCase())))),p.comSearch){const i=p.comSearch.toLowerCase();e=e.filter(r=>(r.title||"").toLowerCase().includes(i)||(r.tags||[]).join(" ").toLowerCase().includes(i)||(r.cuisine||"").toLowerCase().includes(i)||(r.authorName||"").toLowerCase().includes(i))}e.sort((i,r)=>new Date(r.createdAt||0)-new Date(i.createdAt||0));const t=f("rsub");t&&(t.textContent=e.length+" community recipe"+(e.length!==1?"s":""));let s=`<div style="margin-bottom:14px">
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
    </div>`}),n.innerHTML=s}async function eA(n){const e=p.comRecs.find(u=>u.id===n);if(!e)return;await $w(n)?p.myLikes.add(n):p.myLikes.delete(n);let s=[];try{s=await Vw(n)}catch{}s.sort((u,d)=>new Date(u.createdAt||0)-new Date(d.createdAt||0));const i=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`;let r=s.map(u=>`<div style="padding:10px 0;border-bottom:1px solid var(--b1)">
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
    </div>`,At("erec")}async function tA(n){if(!xe()){P("Sign in to like recipes");return}const t=p.myLikes.has(n);try{await Ow(n,t),t?p.myLikes.delete(n):p.myLikes.add(n);const s=p.comRecs.find(r=>r.id===n);s&&(s.likes=(s.likes||0)+(t?-1:1));const i=f("com-like-btn");if(i){const r=p.myLikes.has(n);i.className=`btn ${r?"bp":"bs"} bsm`,i.innerHTML=`${r?"❤️":"🤍"} ${(s==null?void 0:s.likes)||0} Like${((s==null?void 0:s.likes)||0)!==1?"s":""}`}P(t?"Like removed":"Liked!")}catch(s){console.error("likeComRecipe:",s),P("Couldn't update like")}}async function nA(n){if(!xe()){P("Sign in to save recipes");return}const t=p.comRecs.find(s=>s.id===n);if(t)try{await Uw(t),P("Recipe saved to your kitchen! 📖"),Pe("erec")}catch(s){console.error("saveComToKitchen:",s),P("Couldn't save recipe")}}async function sA(n){var r;const e=xe();if(!e){P("Sign in to comment");return}const t=f("com-cmt-input"),s=(r=t==null?void 0:t.value)==null?void 0:r.trim();if(!s)return;const i=e.displayName||localStorage.getItem("ks-who")||"Anonymous";try{const o=await Mw(n,s,i);t.value="";const c=f("com-comments");c&&o&&(c.querySelector("div[style*='color:var(--mt)']")&&!c.querySelector("div[style*='border-bottom']")&&(c.innerHTML=""),c.innerHTML+=`<div style="padding:10px 0;border-bottom:1px solid var(--b1)">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:.78rem;font-weight:600">${o.authorName}</span>
          <span style="font-size:.68rem;color:var(--mt)">${new Date().toLocaleDateString()}</span>
        </div>
        <div style="font-size:.84rem;color:var(--tx2);margin-top:4px;line-height:1.5">${o.text.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>
      </div>`),P("Comment posted!")}catch(o){console.error("addComComment:",o),P("Couldn't post comment")}}async function iA(n){const e=p.comRecs.find(i=>i.id===n),t=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`,s=(e==null?void 0:e.title)||"Recipe";if(navigator.share)try{await navigator.share({title:s,text:`Check out this recipe: ${s}`,url:t});return}catch{}try{await navigator.clipboard.writeText(t),P("Link copied!")}catch{P("Couldn't copy link")}}function rA(){const n=p.cookLog,e=p.wasteLog;let t=0;for(let V=0;V<60;V++){const j=new Date;j.setDate(j.getDate()-V);const K=j.toISOString().split("T")[0];if(n.find(te=>te.date===K))t++;else if(V>0)break}const s=f("ins-streak-num");s&&(s.textContent=t);const i=f("ins-total-cooked");i&&(i.textContent=n.length);const r=f("ins-waste-count");r&&(r.textContent=e.length);const o=f("ins-sub");o&&(o.textContent=n.length?" "+n.length+" meals cooked":"Your kitchen at a glance");const c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],u=f("ins-week");if(u){const V=as().map(j=>{const K=j.toISOString().split("T")[0],te=p.mp[K],b=K===Ut();return`<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--b1)${b?";background:var(--acd);margin:0 -4px;padding:7px 4px;border-radius:6px":""}">
        <div style="font-size:.72rem;color:var(--mt);min-width:30px;font-weight:${b?"600":"400"}">${c[j.getDay()]}</div>
        <div style="font-size:.72rem;color:var(--mt);min-width:20px">${j.getDate()}</div>
        <div style="font-size:.84rem;color:${te?"var(--tx)":"var(--mt)"};font-style:${te?"normal":"italic"};flex:1">${te||"—"}</div>
        ${b?"<div style='font-size:.66rem;color:var(--ac);font-weight:600'>TODAY</div>":""}
      </div>`}).join("");u.innerHTML=V}const d=n.slice(0,7).map(V=>V.name),m=f("ins-variety-nudge"),v=f("ins-variety-msg");if(m&&d.length>=3){const V={};d.forEach(y=>{const _=y.toLowerCase();V[_]=(V[_]||0)+1});const j=Object.entries(V).filter(([,y])=>y>=3),K=Object.values(p.mp).filter(Boolean),te=K.some(y=>/curry|dal|rice|bengali|biryani|hilsa|mustard|lentil/i.test(y)),b=K.some(y=>/kebab|köfte|pide|börek|meze|turkish|pilav|lahmacun/i.test(y));j.length?(m.style.display="block",v.textContent=`You've cooked "${j[0][0]}" ${j[0][1]} times this week. Time to mix it up?`):!te&&K.length>=3?(m.style.display="block",v.textContent="No Bangladeshi dishes this week — how about a dal, biryani, or fish curry?"):!b&&K.length>=3?(m.style.display="block",v.textContent="No Turkish dishes planned — köfte, mercimek çorbası, or a pilav would be great this week!"):m.style.display="none"}else m&&(m.style.display="none");const T={};n.forEach(V=>{T[V.name]=(T[V.name]||0)+1});const C=Object.entries(T).sort((V,j)=>j[1]-V[1]).slice(0,6),D=C[0]?C[0][1]:1,M=f("ins-cooked");if(M)if(!C.length)M.innerHTML='<div class="es" style="padding:16px"><p>Cook some meals to see stats!</p></div>';else{const V=["🥇","🥈","🥉","4️⃣","5️⃣","6️⃣"];M.innerHTML=C.map(([j,K],te)=>`<div class="ibar-row"><div style="font-size:.9rem;margin-right:4px">${V[te]||""}</div><div class="ibar-lbl">${j}</div><div class="ibar-track"><div class="ibar-fill" style="width:${Math.round(K/D*100)}%"></div></div><div class="ibar-val">${K}×</div></div>`).join("")}const N={Bangladeshi:"#e8a44a",Turkish:"#c0392b",Mediterranean:"#27ae60",American:"#3498db",Italian:"#e74c3c",Asian:"#9b59b6",Other:"#95a5a6"},z=f("ins-cuisine");if(z&&n.length){const V=b=>{const y=b.toLowerCase();return/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(y)?"Bangladeshi":/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner|iskender/i.test(y)?"Turkish":/pasta|pizza|risotto|gnocchi|italian/i.test(y)?"Italian":/tacos|burrito|enchilada|mexican/i.test(y)?"Mexican":/sushi|ramen|stir.?fry|fried rice|asian|chinese|thai|japanese/i.test(y)?"Asian":/burger|sandwich|mac|bbq|american/i.test(y)?"American":"Other"},j={};n.slice(0,20).forEach(b=>{const y=V(b.name);j[y]=(j[y]||0)+1});const K=Object.values(j).reduce((b,y)=>b+y,0),te=Object.entries(j).sort((b,y)=>y[1]-b[1]);z.innerHTML=te.map(([b,y])=>{const _=Math.round(y/K*100),I=N[b]||"#95a5a6";return`<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span style="font-size:.82rem;font-weight:500">${b}</span><span style="font-size:.74rem;color:var(--mt)">${y} meals · ${_}%</span></div><div style="height:8px;background:var(--b1);border-radius:4px;overflow:hidden"><div style="height:100%;width:${_}%;background:${I};border-radius:4px;transition:width .6s ease"></div></div></div>`}).join("")||'<div class="es" style="padding:16px"><p>Cook more meals to see your cuisine breakdown.</p></div>'}const G=f("ins-waste");G&&(G.innerHTML=e.length?e.slice(0,10).map(V=>`<div class="waste-item"><span style="font-size:.86rem">${V.name}</span><span style="font-size:.74rem;color:var(--rd)">${V.date}</span></div>`).join(""):'<div class="es" style="padding:16px"><p>Nothing wasted yet — great job! 🎉</p></div>')}function oA(){const n=["fridge","freezer","pantry"].map(o=>{const c=p.inv.filter(u=>u.location===o);return c.length?Ja(o).toUpperCase()+": "+c.map(u=>`${u.name} (${u.qty} ${u.unit})`).join(", "):""}).filter(Boolean).join(`
`),e=p.inv.filter(o=>{const c=dt(o.expiry);return c&&(c.c==="expiring"||c.c==="expired")}).map(o=>{const c=dt(o.expiry);return`${o.name} (${c.l})`}).join(", "),t=as().map(o=>{const c=o.toISOString().split("T")[0];return p.mp[c]?`${o.toLocaleDateString("en-US",{weekday:"short"})}: ${p.mp[c]}`:""}).filter(Boolean).join(", "),s=p.recs.filter(o=>o.favorited||o.rating>=4).map(o=>`${o.name}${o.rating?` (${o.rating}★)`:""}`).join(", "),i=[p.cfg.nopork?"no pork":null,p.cfg.noshellfish?"no shellfish":null,p.cfg.vegetarian?"vegetarian":null,p.cfg.glutenfree?"gluten-free":null,p.cfg.other].filter(Boolean).join(", "),r=p.cookLog.slice(0,7).map(o=>o.name).join(", ");return`You are a kitchen and household assistant for a family in Edison NJ. You ONLY help with kitchen, food, cooking, grocery, and household topics. This includes:
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
Always use this format so the app can offer a one-tap save button. You can include normal text before/after recipe blocks.`}function aA(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<li>$1</li>").replace(/^[-•]\s+(.+)$/gm,"<li>$1</li>").replace(/\n/g,"<br>")}async function Ap(){const n=f("chi"),e=n.value.trim();if(!e)return;n.value="",kp(n),p.chat.push({role:"user",content:e}),Go("user",e);const t=f("csb");t&&(t.disabled=!0);const s="thinking-"+Date.now(),i=f("chmsgs");i.innerHTML+=`<div class="cb asst thinking" id="${s}">Thinking…</div>`,i.scrollTop=i.scrollHeight;try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:800,system:oA(),messages:p.chat.map(d=>({role:d.role,content:d.content}))})})).json(),c=o.content&&o.content[0]&&o.content[0].text||"Sorry, I couldn't process that.",u=f(s);u&&u.remove(),p.chat.push({role:"assistant",content:c}),Go("assistant",c)}catch{const o=f(s);o&&o.remove(),Go("assistant","Sorry, I couldn't reach Claude. Check your connection and try again.")}t&&(t.disabled=!1)}function cA(n){const e=[];return{cleanText:n.replace(/:::RECIPE:::\s*([\s\S]*?)\s*:::END:::/g,(s,i)=>{try{const r=JSON.parse(i.trim());r.title&&e.push(r)}catch{}return""}).trim(),recipes:e}}function lA(n){const e=JSON.stringify(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;"),t=(n.ingredients||"").split(`
`).slice(0,3).join(", ");return`<div style="background:var(--card);border:1.5px solid var(--ac);border-radius:14px;padding:16px;margin:10px 0">
    <div style="font-family:'Fraunces',serif;font-size:1.1rem;font-weight:300;color:var(--ac);margin-bottom:6px">${(n.title||"").replace(/</g,"&lt;")}</div>
    ${n.cuisine?`<div style="font-size:.72rem;color:var(--mt);margin-bottom:6px">${n.cuisine}${n.cookTime?" · "+n.cookTime:""}${n.servings?" · "+n.servings+" servings":""}</div>`:""}
    ${t?`<div style="font-size:.8rem;color:var(--tx2);line-height:1.5;margin-bottom:10px">${t.replace(/</g,"&lt;")}…</div>`:""}
    <button class="btn bp bsm" onclick="importChatRecipe(this)" data-recipe="${e}">📖 Add to My Recipes</button>
  </div>`}async function uA(n){try{const e=JSON.parse(n.dataset.recipe),t="rec-"+Date.now(),s=[e.ingredients||"",e.steps?`

Steps:
`+e.steps:""].join("").trim();await Qt({id:t,name:e.title||"Untitled Recipe",rating:0,favorited:!1,notes:"",description:s,source:"Claude Chat",sourceUrl:null,tags:[],cuisine:e.cuisine||"",cookTime:e.cookTime||"",servings:e.servings||"",cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:!1}),n.textContent="✓ Saved!",n.disabled=!0,n.style.background="var(--gn)",P("Recipe saved! 📖")}catch{P("Couldn't save recipe")}}function Go(n,e){const t=f("chmsgs");if(t){if(n==="assistant"){const{cleanText:s,recipes:i}=cA(e);if(s){const r=document.createElement("div");r.className="cb asst",r.innerHTML=aA(s),t.appendChild(r)}i.forEach(r=>{const o=document.createElement("div");o.style.maxWidth="88%",o.style.alignSelf="flex-start",o.innerHTML=lA(r),t.appendChild(o)})}else{const s=document.createElement("div");s.className="cb user",s.innerHTML=e,t.appendChild(s)}t.scrollTop=t.scrollHeight}}function hA(n){const e=f("chi");e&&(e.value=n.textContent),Ap()}function dA(){p.chat=[];const n=f("chmsgs");n&&(n.innerHTML=`<div class="cb asst">Hey! 👋 I'm your kitchen assistant — I can help with recipes, meal planning, grocery tips, and cooking questions. What's on your mind?</div>`)}function kp(n){n.style.height="auto",n.style.height=Math.min(n.scrollHeight,120)+"px"}let ii=!1,ir=!1,rr=null;function Oc(){if(ii)return;const n=f("scanner-video");if(!n)return;const e=f("scan-status");e&&(e.textContent="Starting camera…",e.style.display="block"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{fA(n,e)})})}function fA(n,e){Quagga.init({inputStream:{name:"Live",type:"LiveStream",target:n,constraints:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}},locator:{patchSize:"medium",halfSample:!0},decoder:{readers:["ean_reader","ean_8_reader","upc_reader","upc_e_reader","code_128_reader","code_39_reader"]},locate:!0,frequency:10},function(t){if(t){console.error("Scanner init error:",t);const s=f("scerr");s&&(s.textContent="⚠️ Could not access camera. Try entering the barcode manually.",s.style.display="block"),e&&(e.style.display="none");return}pA(n),Quagga.start(),ii=!0,e&&(e.textContent="Scanning…"),setTimeout(()=>mA(n),2e3)}),Quagga.onDetected(Cp)}function pA(n){n.querySelectorAll("video").forEach(e=>{e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,e.play().catch(()=>{})})}async function mA(n){if(!ii)return;const e=n.querySelector("video");if(!(!e||e.videoWidth>0)){console.warn("Camera feed appears black — retrying with manual getUserMedia");try{const t=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}});rr=t,e.srcObject&&e.srcObject.getTracks().forEach(s=>s.stop()),e.srcObject=t,e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,await e.play()}catch(t){console.error("Manual camera retry failed:",t)}}}function Mc(){if(ii){try{Quagga.stop()}catch{}Quagga.offDetected(Cp),rr&&(rr.getTracks().forEach(n=>n.stop()),rr=null),ii=!1,ir=!1}}async function Cp(n){var i,r;if(ir)return;const e=n&&n.codeResult&&n.codeResult.code;if(!e)return;const t=((r=(i=n.codeResult.decodedCodes)==null?void 0:i.filter(o=>o.error!==void 0))==null?void 0:r.map(o=>o.error))||[];if(!((t.length?t.reduce((o,c)=>o+c,0)/t.length:1)>.25)){ir=!0,gA(),Mc(),f("scanbody").style.display="none",f("scspin").style.display="block",f("scst").textContent="Found "+e+" — looking up…";try{const o=await Rp(e);p.cp=o,f("aqty").value=1,f("aexp").value="",Vc("fridge",f("rl-fridge")),Pp(o)}catch{const o=f("scerr");o.textContent="⚠️ Lookup failed. Check your connection or enter the barcode manually.",o.style.display="block"}f("scanbody").style.display="block",f("scspin").style.display="none",ir=!1}}function gA(){const n=f("scan-success");n&&(n.style.display="flex",n.style.animation="none",n.offsetHeight,n.style.animation="",setTimeout(()=>{n.style.display="none"},500))}function yA(){Pe("result"),At("scan"),f("scerr").style.display="none",Oc()}function vA(){p.scanDestList=!0,At("scan");const n=f("scanovttl");n&&(n.textContent="Scan → Shopping List");const e=f("scan-dest-hint");e&&(e.textContent="Running low? Scan to add to your shopping list."),f("scerr").style.display="none",Oc()}function wA(){p.scanDestList=!1,At("scan");const n=f("scanovttl");n&&(n.textContent="Scan Barcode");const e=f("scan-dest-hint");e&&(e.textContent="Scan a barcode to add to your pantry or shopping list."),f("scerr").style.display="none",Oc()}function _A(){const n=f("scanNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=f("scanNoteInp");t&&t.focus()}}function bA(){if(!p.cp)return;const n=p.cp.notFound?"Barcode "+p.cp.barcode:p.cp.name,e=f("scanNoteInp"),t=e?e.value.trim():"",s=parseInt(f("aqty").value)||1,i={id:Date.now().toString(),name:n,qty:s,checked:!1,src:"scan"};p.cp.brand&&(i.brand=p.cp.brand),p.cp.image&&(i.image=p.cp.image),t&&(i.note=t),Ie(i),P("Added to list: "+n),Pe("result"),Pe("scan"),p.scanDestList=!1,e&&(e.value="");const r=f("scanNoteWrap");r&&(r.style.display="none"),window.showScreen("shopping")}function TA(){const n=f("mentry");n.style.display=n.style.display==="none"?"block":"none"}async function EA(){const n=f("meinp").value.trim();if(!n)return;Mc(),f("scanbody").style.display="none",f("scspin").style.display="block",f("scst").textContent="Looking up…";const e=await Rp(n);p.cp=e,f("aqty").value=1,f("aexp").value="",Vc("fridge",f("rl-fridge")),f("meinp").value="",Pp(e),f("scanbody").style.display="block",f("scspin").style.display="none"}async function Rp(n){try{const e=await fetch("/api/barcode?code="+encodeURIComponent(n));if(e.ok){const t=await e.json();if(t.found&&t.product)return{...t.product,notFound:!1}}}catch{}return{barcode:n,name:"",brand:"",quantity:"",category:"General",image:null,source:null,description:"",notFound:!0}}function IA(n,e){switch(n){case"Open Food Facts":return`https://world.openfoodfacts.org/product/${e}`;case"Open Beauty Facts":return`https://world.openbeautyfacts.org/product/${e}`;case"Open Pet Food Facts":return`https://world.openpetfoodfacts.org/product/${e}`;case"UPC Item DB":return`https://www.upcitemdb.com/upc/${e}`;case"Edamam":return"https://www.edamam.com/food-database/en/";default:return"#"}}function Pp(n){var i;Pe("scan"),f("resttl").textContent=n.notFound?"Not Found":"Product Found ✓",f("aunit").value=n.quantity||"unit";let e="";if(n.notFound)e=`<div class="nfb">⚠️ Barcode <code>${n.barcode}</code> not found in any database. Enter name:<input class="fi" id="mnm" placeholder="Product name (required)" oninput="valAdd()" style="margin-top:10px"/></div>`;else{const r=n.image?`<img src="${n.image}" class="pimg" onerror="this.style.display='none'"/>`:'<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">🛒</div>',o=n.description?`<div class="pdsc">${n.description}</div>`:"",c=n.source?`<a href="${IA(n.source,n.barcode)}" target="_blank" rel="noopener" class="srcb" style="text-decoration:none">${n.source} ↗</a>`:"";e=`<div class="pcard"><div class="phdr">${r}<div style="flex:1"><div class="pnm">${n.name}</div>${n.brand?`<div class="pbr">${n.brand}</div>`:""}<div class="pbc">${n.barcode}</div><span class="bdg">${n.category}</span>${c}</div></div>${o}</div>`}f("resbody").innerHTML=e;const t=(i=f("ov-result"))==null?void 0:i.querySelector(".ovbody");if(t){const r=t.querySelector(".frow"),o=t.querySelectorAll(".frow")[1],c=t.querySelectorAll(".qrow")[1];r&&(r.style.display=p.scanDestList?"none":""),o&&(o.style.display=p.scanDestList?"none":""),c&&(c.style.display=p.scanDestList?"none":"")}const s=f("scan-dest-btns");s&&(p.scanDestList?s.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2;background:var(--gn);border-color:var(--gn)" id="addbtn" onclick="addScannedToList()">🛒 Add to Shopping List</button>
      </div>`:s.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2" id="addbtn" onclick="addToInv()">📦 Add to Pantry</button>
      </div>
      <button class="btn bs bf" style="margin-top:8px;border-color:var(--gn);color:var(--gn)" onclick="addScannedToList()">🛒 Add to Shopping List instead</button>`),n.notFound&&setTimeout(()=>{const r=f("addbtn");r&&(r.disabled=!0)},0),At("result")}function Vc(n,e){p.selR=n,document.querySelectorAll("#ov-result .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function SA(){const n=f("mnm");f("addbtn").disabled=!(n&&n.value.trim())}async function AA(){if(!p.cp)return;const n=f("mnm"),e=p.cp.notFound?n&&n.value.trim()||"":p.cp.name;if(!e)return;const t=f("aunit").value.trim()||"unit",s=Math.max(1,parseInt(f("aqty").value)||1),i=f("aexp").value||null,r="item-"+p.cp.barcode.replace(/\W/g,"-"),o=p.inv.find(c=>c.id===r);await Le({id:r,barcode:p.cp.barcode,name:e,brand:p.cp.brand||"",unit:t,qty:o?o.qty+s:s,location:p.selR,category:p.cp.category||"General",image:p.cp.image||null,source:p.cp.source||null,expiry:i,addedAt:o?o.addedAt:new Date().toLocaleDateString()}),P(o?`+${s} added to ${e}`:`${e} added!`),p.cp=null,Pe("result")}function kA(n){const e=f("aqty");e.value=Math.max(1,(parseInt(e.value)||1)+n)}let On=null,kh=0,Je=null;function CA(){document.addEventListener("touchstart",n=>{const e=n.target.closest(".swipe-inner");!e||!e.closest(".swipe-wrap")||p.selectMode||(On=e,kh=n.touches[0].clientX,e.classList.add("swiping"))},{passive:!0}),document.addEventListener("touchmove",n=>{if(!On)return;const e=n.touches[0].clientX-kh,t=Math.max(-80,Math.min(0,e));On.style.transform=`translateX(${t}px)`,Math.abs(e)>8&&n.preventDefault()},{passive:!1}),document.addEventListener("touchend",()=>{if(!On)return;const n=On,e=n.closest(".swipe-wrap");n.classList.remove("swiping"),(parseFloat(n.style.transform.replace("translateX(",""))||0)<-50?(n.style.transform="translateX(-80px)",e==null||e.classList.add("open"),Je&&Je!==e&&Pa(Je),Je=e):(n.style.transform="translateX(0)",e==null||e.classList.remove("open"),Je===e&&(Je=null)),On=null}),document.addEventListener("touchstart",n=>{if(!Je||n.target.closest(".swipe-del"))return;const e=n.target.closest(".swipe-inner");e&&e.closest(".swipe-wrap")===Je||(Pa(Je),Je=null)},{passive:!0})}function Pa(n){const e=n==null?void 0:n.querySelector(".swipe-inner");e&&(e.style.transform="translateX(0)"),n==null||n.classList.remove("open")}async function RA(n,e){const t=f("sw-"+n);t&&(t.style.opacity="0.5"),e==="shop"?await Mr(n):(await Ka(n),P("Item removed"))}function PA(n,e){const t=f("sw-"+n);if(t){const s=t.querySelector(".swipe-inner");if((parseFloat((s.style.transform||"").replace("translateX(",""))||0)<-10){Pa(t),Je=null;return}}if(p.selectMode){p.selectedIds.has(n)?(p.selectedIds.delete(n),t==null||t.classList.remove("selected")):(p.selectedIds.add(n),t==null||t.classList.add("selected")),Zr();return}e==="shop"?window.openItemDetail(n):window.openAdj(n)}function xA(){if(p.selectMode==="shop"){ns();return}p.selectMode&&ns(),p.selectMode="shop",p.selectedIds.clear(),document.querySelectorAll("#shlist .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=f("sh-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),Zr()}function LA(){if(p.selectMode==="inv"){ns();return}p.selectMode&&ns(),p.selectMode="inv",p.selectedIds.clear(),document.querySelectorAll("#ibody .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=f("inv-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),Zr()}function ns(){p.selectMode=null,p.selectedIds.clear(),document.querySelectorAll(".swipe-wrap.selecting").forEach(t=>t.classList.remove("selecting","selected"));const n=f("sh-selbtn");n&&(n.classList.remove("active"),n.textContent="Select");const e=f("inv-selbtn");e&&(e.classList.remove("active"),e.textContent="Select"),Zr()}async function DA(){if(!p.selectedIds.size)return;const n=[...p.selectedIds],e=p.selectMode;ns(),e==="shop"?await Promise.all(n.map(t=>Mr(t))):await Promise.all(n.map(t=>Ka(t))),P(`Removed ${n.length} item${n.length!==1?"s":""} 🗑`)}function Zr(){const n=f("multi-bar");if(!n)return;const e=p.selectedIds.size,t=f("multi-count");t&&(t.textContent=e),p.selectMode?n.classList.add("visible"):n.classList.remove("visible")}const NA=["Chicken","Beef","Fish","Vegetarian","Vegan","Quick","Kids","Healthy","Batch Cook","Date Night"];function xp(n){return"chip-"+n.split(" ").join("-")}function Lp(){const n=f("recChips");n&&(n.innerHTML=NA.map(e=>`<button onclick="toggleChip('${e}')" id="${xp(e)}" style="padding:5px 10px;border-radius:20px;border:1px solid var(--bd);background:var(--s2);color:var(--tx2);font-size:.78rem;cursor:pointer;transition:all .15s">${e}</button>`).join(""))}function OA(n){const e=f(xp(n));window._activeChips.has(n)?(window._activeChips.delete(n),e&&(e.style.background="var(--s2)",e.style.color="var(--tx2)",e.style.borderColor="var(--bd)")):(window._activeChips.add(n),e&&(e.style.background="var(--ac)",e.style.color="#000",e.style.borderColor="var(--ac)")),Dp()}function Dp(){const n=f("recPicker"),e=f("recFilter")?f("recFilter").value.trim().toLowerCase():"",t=[...window._activeChips].map(r=>r.toLowerCase()),i=[...p.recs].sort((r,o)=>(o.cookCount||0)-(r.cookCount||0)).filter(r=>{const o=(r.name+" "+(r.description||"")+" "+(r.tags||[]).join(" ")).toLowerCase(),c=e?e.split(/\s+/).every(d=>o.includes(d)):!0,u=t.every(d=>o.includes(d));return c&&u});n.innerHTML='<option value="">— pick a saved recipe —</option>'+i.map(r=>`<option value="${r.id}">${r.name}</option>`).join(""),window._pickedRec=null,f("mealMinp").value=""}function MA(n,e){p.md=n,f("mealMttl").textContent="Meal for "+e,f("mealMinp").value=p.mp[n]||"",window._pickedRec=null,window._activeChips=new Set;const t=f("recFilter");t&&(t.value=""),Lp();const s=f("recPicker");if(p.recs&&p.recs.length){const i=[...p.recs].sort((c,u)=>(u.cookCount||0)-(c.cookCount||0));s.innerHTML='<option value="">— pick a saved recipe —</option>'+i.map(c=>`<option value="${c.id}">${c.name}</option>`).join("");const r=p.mp[n]||"",o=i.find(c=>c.name===r);s.value=o?o.id:"",f("recPickerWrap").style.display="block"}else f("recPickerWrap").style.display="none";f("mealM").classList.add("active"),setTimeout(()=>f("mealMinp").focus(),100)}function VA(n){if(!n){window._pickedRec=null,f("mealMinp").value="";return}const e=p.recs.find(t=>t.id===n);e&&(window._pickedRec=e,f("mealMinp").value=e.name)}function $c(){f("mealM").classList.remove("active")}async function $A(){const n=f("mealMinp").value.trim();if(await Sn(p.md,n||null),window._pickedRec&&window._pickedRec.description){const e=window._pickedRec.description,t=p.inv.map(o=>o.name.toLowerCase()),s=p.shop.map(o=>o.name.toLowerCase()),i=e.split(/[\n,]/).map(o=>o.replace(/^[\d\/\s]*(cup|tbsp|tsp|oz|lb|g|kg|ml|l|clove|slice|piece|bunch|head|can|package|pkg)s?\.?\s*/gi,"").replace(/^[\d]+\s*/,"").trim()).filter(o=>o.length>1&&o.length<60);let r=0;for(const o of i){if(/\b(add|mix|heat|cook|bake|stir|boil|fry|slice|chop|dice|combine|place|pour|season|serve|preheat|bring|remove|let|set|transfer)\b/i.test(o))continue;const c=o.replace(/^[-•*]\s*/,"").trim();if(!c||c.length<2)continue;const u=c.toLowerCase();t.some(d=>d.includes(u)||u.includes(d))||s.some(d=>d===u)||(await Ie({id:Date.now().toString()+Math.random().toString(36).slice(2),name:c,qty:1,checked:!1,src:"recipe"}),r++)}r>0&&P(`Added ${r} ingredient${r!==1?"s":""} to shopping list 🛒`)}window._pickedRec=null,$c(),xn(),yi(),hs()}async function UA(){await Sn(p.md,null),$c(),xn(),yi(),hs()}function FA(n){const e=p.mp[n];e&&(p.cn=e,p.nr=0,f("cookedNm").textContent=e,f("cnotes").value="",qs("cstars",0),f("cookedM").classList.add("active"))}async function jA(){await $d(p.cn,Ut()),await Sn(Ut(),null),f("cookedM").classList.remove("active"),xn(),hs(),P("Meal logged!")}async function BA(){var s;const n=f("cnotes").value.trim(),e=(s=f("tog-leftover"))==null?void 0:s.classList.contains("on");await $d(p.cn,Ut());const t=p.recs.find(i=>i.name.toLowerCase()===p.cn.toLowerCase());t?await Qt({...t,cookCount:(t.cookCount||0)+1,lastCooked:Ut()}):await Qt({id:"rec-"+Date.now(),name:p.cn,rating:p.nr,favorited:!1,notes:n,description:"",source:"Meal Plan",tags:[],cookCount:1,savedAt:new Date().toLocaleDateString(),lastCooked:Ut()}),e&&await Sn(Bw(),p.cn+" (leftovers)"),await Sn(Ut(),null),f("cookedM").classList.remove("active"),xn(),hs(),P(e?"Saved! Leftovers planned for tomorrow 🥡":"Saved to recipes! ⭐")}function HA(n){f("schedNm").textContent=n;const e=["S","M","T","W","T","F","S"],t=new Date;t.setHours(0,0,0,0),f("schedWk").innerHTML=as().map((s,i)=>{const r=s.toISOString().split("T")[0],o=s.getTime()===t.getTime(),c=p.mp[r];return`<div class="wd${o?" today":""}${c?" hm":""}" onclick="schedSet('${r}','${n}')"><div class="wdn">${e[i]}</div><div class="wdd">${s.getDate()}</div>${c?`<div class="wdm">${c.substring(0,8)}…</div>`:""}</div>`}).join(""),f("schedM").classList.add("active")}async function qA(n,e){await Sn(n,e),f("schedM").classList.remove("active"),xn(),hs(),P("Scheduled! 📅")}function zA(){const n=i=>f(i),e=(i,r)=>{const o=n(i);o&&(o.value=r||"")};e("setName",p.cfg.name),e("setAdults",p.cfg.adults),e("setKids",p.cfg.kids),e("setOther",p.cfg.other),e("setCuisines",p.cfg.cuisines),e("setCookTime",p.cfg.cookTime),e("setZipcode",p.cfg.zipcode);const t=(i,r)=>{const o=n(i);o&&o.classList.toggle("on",!!r)};t("tg-nopork",p.cfg.nopork),t("tg-noshellfish",p.cfg.noshellfish),t("tg-vegetarian",p.cfg.vegetarian),t("tg-glutenfree",p.cfg.glutenfree),t("tg-notif",p.cfg.notif);const s=f("notifTimeRow");s&&(s.style.display=p.cfg.notif?"block":"none"),e("setNotifTime",p.cfg.notifTime||"8"),e("setNotifDays",String(p.cfg.notifDays||3)),Fc(),Op()}async function WA(){p.cfg={...p.cfg,name:f("setName").value.trim(),adults:f("setAdults").value.trim(),kids:f("setKids").value.trim(),nopork:f("tg-nopork").classList.contains("on"),noshellfish:f("tg-noshellfish").classList.contains("on"),vegetarian:f("tg-vegetarian").classList.contains("on"),glutenfree:f("tg-glutenfree").classList.contains("on"),other:f("setOther").value.trim(),cuisines:f("setCuisines").value.trim(),cookTime:f("setCookTime").value,zipcode:f("setZipcode")?f("setZipcode").value.trim():"",notif:f("tg-notif").classList.contains("on"),notifTime:f("setNotifTime")?f("setNotifTime").value:"8",notifDays:parseInt(f("setNotifDays")?f("setNotifDays").value:"3")},await Or(),p.cfg.notif&&Np(),P("Settings saved!"),Pe("settings"),bc()}async function GA(){var e,t;const n=((t=(e=f("setZipcode"))==null?void 0:e.value)==null?void 0:t.trim())||"";p.cfg={...p.cfg,zipcode:n},await Or(),P("Saved!")}async function KA(n){if(!n.classList.contains("on")){if(!("Notification"in window)){P("Notifications not supported on this browser");return}if(Notification.permission==="denied"){P("Notifications blocked — enable in browser settings");return}if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){P("Notifications permission denied");return}}n.classList.toggle("on");const t=f("notifTimeRow");t&&(t.style.display=n.classList.contains("on")?"block":"none")}function QA(){if(Notification.permission!=="granted"){P("Enable notifications first");return}const n=p.inv.filter(t=>{const s=dt(t.expiry);return s&&(s.c==="expiring"||s.c==="expired")});if(!n.length){new Notification("Kitchen 🧺",{body:"No items expiring soon — you're all good!"});return}const e=n.slice(0,3).map(t=>t.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${e}${n.length>3?" + "+(n.length-3)+" more":""} need attention`})}function Np(){if(!p.cfg.notif||Notification.permission!=="granted")return;const n=parseInt(localStorage.getItem("ks-lastnotif")||"0"),e=Date.now();if(e-n<864e5)return;localStorage.setItem("ks-lastnotif",e.toString());const t=p.cfg.notifDays||3,s=p.inv.filter(r=>{if(!dt(r.expiry))return!1;const c=new Date(r.expiry+"T00:00:00"),u=new Date;return u.setHours(0,0,0,0),Math.round((c-u)/864e5)<=t});if(!s.length)return;const i=s.slice(0,3).map(r=>r.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${i}${s.length>3?" + "+(s.length-3)+" more":""} expiring in ${t} days or less`})}function Uc(){return $e("ks-hhs")||[p.hid]}async function Op(){const n=xe();if(n)try{const e=await me(`households/${p.hid}`);if(!e)return;const t=e.ownerUid===n.uid,s=f("hhInviteCode");if(s&&(s.textContent=e.inviteCode||"—"),e.inviteCode&&t)try{await ee(`household_codes/${e.inviteCode}`,{householdId:p.hid})}catch{}const i=f("regenCodeBtn");i&&(i.style.display=t?"":"none");const r=f("hhMembers");r&&e.members&&(r.innerHTML=e.members.map(o=>{const c=o.uid===n.uid,u=o.role==="owner"?"Owner":"Member",d=t&&!c?`<button onclick="event.stopPropagation();removeMemberFromHH('${o.uid}')" style="background:none;border:none;color:var(--rd);cursor:pointer;font-size:.78rem;padding:4px 8px">Remove</button>`:"";return`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px">
          <div>
            <div style="font-size:.86rem;font-weight:500;color:var(--tx)">${o.name}${c?" (you)":""}</div>
            <div style="font-size:.7rem;color:var(--mt);margin-top:2px">${u}</div>
          </div>
          ${d}
        </div>`}).join(""))}catch(e){console.error("renderHouseholdInfo error:",e)}}async function JA(){var e;const n=(e=f("hhInviteCode"))==null?void 0:e.textContent;if(!(!n||n==="—"))try{await navigator.clipboard.writeText(n),P("Invite code copied!")}catch{P("Couldn't copy — try manually")}}async function YA(){var t;const n=(t=f("hhInviteCode"))==null?void 0:t.textContent;if(!n||n==="—")return;const e=`Join my kitchen on Kitchen app! Use invite code: ${n} at https://pantry-app-zeta-six.vercel.app`;if(navigator.share)try{await navigator.share({text:e})}catch{}else try{await navigator.clipboard.writeText(e),P("Share text copied to clipboard!")}catch{P("Couldn't share — try manually")}}async function XA(){if(confirm("Regenerate invite code? The old code will stop working."))try{const n=await Aw(p.hid);if(n){const e=f("hhInviteCode");e&&(e.textContent=n),P("New invite code generated!")}}catch(n){console.error("regenInviteCode error:",n),P("Failed to regenerate code")}}async function ZA(n){if(confirm("Remove this member from the household?"))try{await kw(p.hid,n),P("Member removed"),Op()}catch(e){console.error("removeMemberFromHH error:",e),P("Failed to remove member")}}async function e0(){var s,i,r;const n=(r=(i=(s=f("newHHCode"))==null?void 0:s.value)==null?void 0:i.trim())==null?void 0:r.toUpperCase();if(!n)return;const e=xe();if(!e){P("Sign in first");return}const t=f("newHHCode");t.disabled=!0;try{const o=await Vd(n,e);if(!o){P("Invalid invite code. Check and try again."),t.disabled=!1;return}const c=Uc();c.includes(o)||c.push(o),rt("ks-hhs",c),f("newHHCode").value="",Fc(),P("Household joined!")}catch(o){console.error("addHousehold error:",o),P("Failed to join household")}t.disabled=!1}function t0(n){n!==p.hid&&(localStorage.setItem("ks-h",n),location.reload())}async function n0(n){if(n===p.hid){P("Can't remove active household");return}const e=xe();if(e)try{const s=await me(`users/${e.uid}`);if(s){const r=(s.householdIds||[]).filter(o=>o!==n);await ee(`users/${e.uid}`,{...s,householdIds:r,id:void 0})}const i=await me(`households/${n}`);if(i){const r=(i.members||[]).filter(c=>c.uid!==e.uid),o=(i.memberUids||[]).filter(c=>c!==e.uid);await ee(`households/${n}`,{...i,members:r,memberUids:o,id:void 0})}}catch(s){console.error("removeHousehold error:",s)}const t=Uc().filter(s=>s!==n);rt("ks-hhs",t),Fc()}async function Fc(){const n=Uc().filter(s=>s!==p.hid),e=f("hhList");if(!e)return;if(!n.length){e.innerHTML='<div style="font-size:.82rem;color:var(--mt);padding:10px 0">No other households yet.</div>';return}const t=[];for(const s of n){let i=s;try{const r=await me(`households/${s}`);r!=null&&r.name&&(i=r.name)}catch{}t.push({id:s,name:i})}e.innerHTML=t.map(({id:s,name:i})=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px;cursor:pointer" onclick="switchHousehold('${s}')">
      <div>
        <div style="font-size:.88rem;font-weight:500;color:var(--tx)">${i}</div>
        <div style="font-size:.7rem;color:var(--mt);margin-top:2px">Tap to switch</div>
      </div>
      <button onclick="event.stopPropagation();removeHousehold('${s}')" style="background:none;border:none;color:var(--mt);cursor:pointer;font-size:.82rem;padding:4px 8px">✕</button>
    </div>`).join("")}const Sr={gold:{name:"Gold",swatch:"#d4a853",dark:{bg:"#0f0f0d",sf:"#1a1a17",card:"#222220",card2:"#2a2a27",b1:"#333330",b2:"#3d3d39",ac:"#d4a853",ac2:"#e8c27a",acr:"212,168,83",tx:"#ede8d8",tx2:"#b8b09a",mt:"#7a7468"},light:{bg:"#faf8f2",sf:"#ffffff",card:"#f3ede0",card2:"#efe8d8",b1:"#ddd5c0",b2:"#cec4ac",ac:"#a8732a",ac2:"#c48f3e",acr:"168,115,42",tx:"#2a2418",tx2:"#5c5040",mt:"#9a8870"}},forest:{name:"Forest",swatch:"#4a9e5c",dark:{bg:"#0a1410",sf:"#111f17",card:"#182a1e",card2:"#1e3326",b1:"#2a4032",b2:"#355040",ac:"#6db56d",ac2:"#8fd08f",acr:"109,181,109",tx:"#e4f0e4",tx2:"#9dbf9d",mt:"#5a7a5a"},light:{bg:"#f2f9f2",sf:"#ffffff",card:"#e8f5e8",card2:"#dff0df",b1:"#c0ddc0",b2:"#a8cca8",ac:"#2e7d32",ac2:"#43a047",acr:"46,125,50",tx:"#0d2010",tx2:"#2e4f2e",mt:"#5a7a5a"}},ocean:{name:"Ocean",swatch:"#38bdf8",dark:{bg:"#060e1a",sf:"#0d1829",card:"#112035",card2:"#162840",b1:"#1e3554",b2:"#264468",ac:"#38bdf8",ac2:"#7dd3fc",acr:"56,189,248",tx:"#e0f2fe",tx2:"#7ab8d4",mt:"#486880"},light:{bg:"#f0f8ff",sf:"#ffffff",card:"#e0f2fe",card2:"#d4ecf9",b1:"#b0d8f0",b2:"#90c4e4",ac:"#0369a1",ac2:"#0284c7",acr:"3,105,161",tx:"#082040",tx2:"#1e4060",mt:"#4a7090"}},bordeaux:{name:"Bordeaux",swatch:"#e8829a",dark:{bg:"#120810",sf:"#1c0e18",card:"#261420",card2:"#301828",b1:"#4a2238",b2:"#5c2a46",ac:"#e8829a",ac2:"#f4aabb",acr:"232,130,154",tx:"#fce8ee",tx2:"#d4909e",mt:"#8a5060"},light:{bg:"#fff5f7",sf:"#ffffff",card:"#ffe8ed",card2:"#ffd8e0",b1:"#f4b8c4",b2:"#eca0b0",ac:"#be3455",ac2:"#d94070",acr:"190,52,85",tx:"#2a080e",tx2:"#6a2030",mt:"#9a5060"}},sand:{name:"Sand",swatch:"#e07a5f",dark:{bg:"#170e08",sf:"#221508",card:"#2e1c0e",card2:"#382414",b1:"#4a3020",b2:"#5c3c28",ac:"#e07a5f",ac2:"#eca080",acr:"224,122,95",tx:"#fdf0e8",tx2:"#c8a090",mt:"#887060"},light:{bg:"#fdf6ec",sf:"#fffbf5",card:"#f5e8d8",card2:"#eedcc8",b1:"#ddc8ac",b2:"#ccb494",ac:"#c1440e",ac2:"#d4602a",acr:"193,68,14",tx:"#2a1808",tx2:"#5c3820",mt:"#9a7060"}},midnight:{name:"Midnight",swatch:"#818cf8",dark:{bg:"#050814",sf:"#0a0d1f",card:"#0f1228",card2:"#141830",b1:"#1e2448",b2:"#272e58",ac:"#818cf8",ac2:"#a5b0ff",acr:"129,140,248",tx:"#e8eaff",tx2:"#9099cc",mt:"#505880"},light:{bg:"#f0f1ff",sf:"#ffffff",card:"#e4e6ff",card2:"#d8dbff",b1:"#b8bdff",b2:"#a0a6f4",ac:"#4f46e5",ac2:"#6366f1",acr:"79,70,229",tx:"#0a0820",tx2:"#202060",mt:"#5050a0"}},lavender:{name:"Lavender",swatch:"#c084fc",dark:{bg:"#0e0814",sf:"#160e20",card:"#1e1430",card2:"#261a3c",b1:"#382454",b2:"#442c66",ac:"#c084fc",ac2:"#d8a8ff",acr:"192,132,252",tx:"#f5ecff",tx2:"#c0a0e0",mt:"#7a5898"},light:{bg:"#faf5ff",sf:"#ffffff",card:"#f3e8ff",card2:"#ecdcff",b1:"#d8b8f8",b2:"#c8a0f0",ac:"#9333ea",ac2:"#a855f7",acr:"147,51,234",tx:"#1a0830",tx2:"#481080",mt:"#805098"}}};let ri=$e("ks-theme")||"gold",oi=$e("ks-mode")||"auto";function Ar(n,e){ri=n,oi=e,rt("ks-theme",n),rt("ks-mode",e);const t=Sr[n]||Sr.gold,i=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?t.dark:t.light,r=document.documentElement.style;r.setProperty("--bg",i.bg),r.setProperty("--sf",i.sf),r.setProperty("--card",i.card),r.setProperty("--card2",i.card2),r.setProperty("--b1",i.b1),r.setProperty("--b2",i.b2),r.setProperty("--ac",i.ac),r.setProperty("--ac2",i.ac2),r.setProperty("--acd","rgba("+i.acr+",.12)"),r.setProperty("--tx",i.tx),r.setProperty("--tx2",i.tx2),r.setProperty("--mt",i.mt),r.setProperty("--gn","#6db56d"),r.setProperty("--gnd","rgba(109,181,109,.12)"),r.setProperty("--rd","#d96b6b"),r.setProperty("--rdd","rgba(217,107,107,.12)"),r.setProperty("--am","#c8960a"),r.setProperty("--amd","rgba(200,150,10,.12)"),Mp(e),Vp(n)}function s0(n){Ar(ri,n)}function Mp(n){["auto","light","dark"].forEach(e=>{const t=f("mode-"+e);t&&(t.style.background=e===n?"var(--ac)":"",t.style.color=e===n?"var(--bg)":"",t.style.borderColor=e===n?"var(--ac)":"")})}function Vp(n){const e=f("themePicker");e&&(e.innerHTML="",Object.keys(Sr).forEach(t=>{const s=Sr[t],i=t===n,r=document.createElement("div");r.title=s.name,r.style.cssText="width:36px;height:36px;border-radius:50%;background:"+s.swatch+";cursor:pointer;border:3px solid "+(i?"var(--tx)":"transparent")+";box-shadow:"+(i?"0 0 0 2px var(--ac)":"none")+";transition:all .2s;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.85rem",r.textContent=i?"✓":"",r.onclick=()=>Ar(t,oi),r.onmouseover=function(){this.style.transform="scale(1.15)"},r.onmouseout=function(){this.style.transform="scale(1)"},e.appendChild(r)}))}function i0(){Ar(ri,oi),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{oi==="auto"&&Ar(ri,"auto")})}function r0(){Vp(ri),Mp(oi)}async function o0(){const n=f("enrichBtn"),e=f("enrichProgress"),t=f("enrichStatus"),s=f("enrichBar");n&&(n.disabled=!0),e&&(e.style.display="block");const i=p.shop.filter(d=>Ch(d)),r=p.inv.filter(d=>Ch(d)),o=[...i.map(d=>({item:d,list:"shop"})),...r.map(d=>({item:d,list:"inv"}))];if(!o.length){t&&(t.textContent="All items already enriched!"),s&&(s.style.width="100%"),n&&(n.disabled=!1),P("Nothing to enrich — all items already have data.");return}let c=0,u=0;for(let d=0;d<o.length;d++){const{item:m,list:v}=o[d],T=Math.round((d+1)/o.length*100);t&&(t.textContent=`Processing "${m.name}" (${d+1}/${o.length})…`),s&&(s.style.width=T+"%");try{const M=(await(await fetch(`/api/text-search?q=${encodeURIComponent(m.name)}`)).json()).results||[];if(M.length){const N=M[0],z={...m,image:N.image||m.image||null,brand:N.brand||m.brand||"",category:N.category||m.category||"",source:N.source||m.source||"search"};v==="shop"?await Ie(z):await Le(z),c++}else u++}catch(C){console.warn(`Enrich failed for "${m.name}":`,C),u++}d<o.length-1&&await a0(300)}t&&(t.textContent=`Done! ${c} enriched, ${u} skipped.`),s&&(s.style.width="100%"),n&&(n.disabled=!1),P(`Enrichment complete: ${c} updated, ${u} unchanged.`)}function Ch(n){return!n.name||n.name.length<2?!1:!n.image&&!n.brand}function a0(n){return new Promise(e=>setTimeout(e,n))}let $t=0;async function c0(){const n=xe();if(n)try{const e=await me(`users/${n.uid}`);if(e!=null&&e.onboardingDone)return;l0()}catch{}}function l0(){const n=f("ov-onboarding");n&&($t=0,n.classList.add("active"),$p())}function $p(){const n=f("onboarding-body");if(!n)return;const t=`<div style="display:flex;gap:6px;justify-content:center;margin-bottom:24px">${Array.from({length:4},(s,i)=>`<div style="width:8px;height:8px;border-radius:50%;background:${i===$t?"var(--ac)":"var(--b2)"};transition:background .2s"></div>`).join("")}</div>`;$t===0?n.innerHTML=`${t}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:4rem;margin-bottom:16px">🧺</div>
        <div style="font-family:'Fraunces',serif;font-size:2rem;font-weight:300;color:var(--ac);margin-bottom:12px">Welcome to Kitchen!</div>
        <p style="font-size:.92rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 28px">Your smart kitchen assistant that tracks inventory, plans meals, finds deals, and suggests recipes — all powered by AI.</p>
        <button class="btn bp bf" onclick="onboardNext()">Let's get started →</button>
      </div>`:$t===1?n.innerHTML=`${t}
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
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:16px">Continue →</button>`:$t===2?n.innerHTML=`${t}
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
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:20px">Almost done →</button>`:$t===3&&(n.innerHTML=`${t}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:3rem;margin-bottom:16px">🎉</div>
        <div style="font-family:'Fraunces',serif;font-size:1.6rem;font-weight:300;color:var(--ac);margin-bottom:12px">You're all set!</div>
        <p style="font-size:.88rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 24px">Start by adding your first item to the pantry, or ask Claude for dinner ideas.</p>
        <div style="display:flex;flex-direction:column;gap:10px">
          <button class="btn bp bf" onclick="finishOnboarding();showOv('scan')">📷 Scan your first item</button>
          <button class="btn bs bf" onclick="finishOnboarding();showScreen('chat')">✨ Ask Claude for ideas</button>
          <button class="btn bs bf" onclick="finishOnboarding()">🏠 Go to Home</button>
        </div>
      </div>`)}async function u0(){var n,e,t,s,i,r,o,c,u,d,m,v,T;if($t===1){const C=(e=(n=f("ob-name"))==null?void 0:n.value)==null?void 0:e.trim(),D=(s=(t=f("ob-adults"))==null?void 0:t.value)==null?void 0:s.trim(),M=(r=(i=f("ob-kids"))==null?void 0:i.value)==null?void 0:r.trim(),N=(c=(o=f("ob-cuisines"))==null?void 0:o.value)==null?void 0:c.trim(),z=(u=f("ob-cooktime"))==null?void 0:u.value;C&&(p.cfg.name=C),D&&(p.cfg.adults=D),M&&(p.cfg.kids=M),N&&(p.cfg.cuisines=N),z&&(p.cfg.cookTime=z),p.cfg.nopork=((d=f("ob-nopork"))==null?void 0:d.checked)||!1,p.cfg.noshellfish=((m=f("ob-noshellfish"))==null?void 0:m.checked)||!1,p.cfg.vegetarian=((v=f("ob-vegetarian"))==null?void 0:v.checked)||!1,p.cfg.glutenfree=((T=f("ob-glutenfree"))==null?void 0:T.checked)||!1,await Or()}$t++,$p()}async function Up(){const n=f("ov-onboarding");n&&n.classList.remove("active");const e=xe();if(e)try{const t=await me(`users/${e.uid}`);t&&await ee(`users/${e.uid}`,{...t,onboardingDone:!0,id:void 0})}catch{}}async function h0(){await Up(),P("You can always adjust settings later ⚙️")}window.getIdToken=Nd;$.renderAll=Tc;$.renderSum=yi;$.renderRecs=Xr;$.renderShop=ds;tE(Jr);window.showScreen=function(n){var e,t;document.querySelectorAll(".ov.active").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".ni").forEach(s=>s.classList.remove("active")),(e=f("screen-"+n))==null||e.classList.add("active"),(t=f("nav-"+n))==null||t.classList.add("active"),n==="home"&&Qf(),n==="inventory"&&Jr(),n==="recipes"&&(p.rt==="community"?Dc():Xr()),n==="shopping"&&ds(),n==="insights"&&rA()};const d0=At;window.showOv=function(n){d0(n),n==="settings"&&setTimeout(r0,80)};window.hideOv=Pe;window.initHome=bc;window.addLowToShop=rE;window.toggleExp=function(){const n=f("exppanel");n.style.display=n.style.display==="none"?"block":"none"};window.openAdj=lS;window.updL=uS;window.adjQ=hS;window.adjQD=dS;window.adjE=fS;window.adjNote=pS;window.setIT=yS;window.addManual=vS;window.valMA=wS;window.chgMQ=_S;window.selML=bS;window.remItem=xc;window.importDoc=TS;window.adjLowThresh=mS;window.adjLowThreshD=gS;window.openInvAddSheet=SS;window.closeInvAddSheet=wi;window.invAddScan=AS;window.invAddVoice=kS;window.setInvAddLoc=CS;window.toggleInvAddNote=RS;window.qaddInv=PS;window.onInvInput=xS;window.pickInvInlineResult=NS;window.toggleInvVoice=Ip;window.qadd=kI;window.togShop=WI;window.toggleShNote=GI;window.saveShNote=KI;window.openShQty=QI;window.adjShQty=JI;window.saveShQty=bp;window.togAisle=YI;window.setSHT=XI;window.shareList=ZI;window.openAddToKitchen=eS;window.setAtkLoc=tS;window.confirmAddToKitchen=nS;window.buildList=sS;window.toggleVoice=pp;window.toggleAddNote=CI;window.openShopAddSheet=RI;window.closeShopAddSheet=vi;window.shopAddScan=PI;window.shopAddVoice=xI;window.closeEnrichSheet=Er;window.pickEnrichResult=zI;window.onShopInput=NI;window.pickInlineResult=wp;window.openItemDetail=Ir;window.closeItemDetail=jI;window.deleteItemImage=BI;window.triggerProductPhotoUpload=HI;window.handleProductPhotoSelected=qI;window.bpTog=iS;window.bpSelAll=rS;window.bpUpdBtn=function(){};window.bpConfirm=oS;window._bpItems=[];window.searchDeals=aS;window.dealsFromList=cS;window.addDealToList=Ep;window.renderDealsZipBanner=Tp;window.clrChk=function(){p.shop.filter(n=>n.checked).forEach(n=>{_p(n.name),Mr(n.id)})};window.setRT=US;window.togFav=FS;window.valR=jS;window.importFromUrl=BS;window.saveRec=HS;window.openER=qS;window.updR=zS;window.delER=WS;window.scaleRec=GS;window.whatCanIMake=KS;window.addRecIngToShop=QS;window.setStar=JS;window.togTag=VS;window.togglePublic=YS;window.loadCommunity=Dc;window.setComCuisine=XS;window.setComSearch=ZS;window.openComRecipe=eA;window.likeComRecipe=tA;window.saveComToKitchen=nA;window.addComComment=sA;window.shareComRecipe=iA;window.sendChat=Ap;window.sendPill=hA;window.clrChat=dA;window.ar=kp;window.importChatRecipe=uA;window.stopLiveScanner=Mc;window.resumeScanner=yA;window.openScanForList=vA;window.openScanForInventory=wA;window.addScannedToList=bA;window.toggleScanNote=_A;window.togManual=TA;window.manLookup=EA;window.selRL=Vc;window.valAdd=SA;window.addToInv=AA;window.chgAQ=kA;window.swipeDelItem=RA;window.swipeRowTap=PA;window.togShopSelect=xA;window.togInvSelect=LA;window.cancelSelect=ns;window.deleteSelected=DA;window.openMealM=MA;window.pickRec=VA;window.closeMealM=$c;window.saveMeal=$A;window.clrMeal=UA;window.openCooked=FA;window.skipCooked=jA;window.saveCooked=BA;window.scheduleRecipe=HA;window.schedSet=qA;window.initRecChips=Lp;window.toggleChip=OA;window.filterRecs=Dp;window._pickedRec=null;window._activeChips=new Set;window.saveSettings=WA;window.saveZipcode=GA;window.toggleNotif=KA;window.testNotif=QA;window.addHousehold=e0;window.switchHousehold=t0;window.removeHousehold=n0;window.setMode=s0;window.showNotif=P;window.copyInviteCode=JA;window.shareInviteCode=YA;window.regenInviteCode=XA;window.removeMemberFromHH=ZA;window.enrichExistingItems=o0;window.manualRefresh=async function(n){const e=event==null?void 0:event.target;e&&(e.classList.add("spinning"),setTimeout(()=>e.classList.remove("spinning"),600)),le("syncing");try{(n==="shop"||n==="both")&&(p.shop=await Ue(`households/${p.hid}/shopping`),ds()),(n==="inv"||n==="both")&&(p.inv=await Ue(`households/${p.hid}/inventory`),Jr(),Tc()),le("synced"),P("Refreshed ✓")}catch(t){console.error("manualRefresh error:",t),le("error"),P("Refresh failed")}};window.onboardNext=u0;window.finishOnboarding=Up;window.skipOnboarding=h0;window._appStart=async function(n){var t;p.hid=n,f("LS").style.display="none",f("APP").style.display="flex",window.showScreen("home"),le("syncing");const e=xe();if(e)try{const s=await me(`users/${e.uid}`);if((t=s==null?void 0:s.householdIds)!=null&&t.length){const i=[...s.householdIds];i.includes(n)||i.push(n),rt("ks-hhs",i)}else{const i=$e("ks-hhs")||[n];i.includes(n)||(i.push(n),rt("ks-hhs",i))}}catch{const s=$e("ks-hhs")||[n];s.includes(n)||(s.push(n),rt("ks-hhs",s))}else{const s=$e("ks-hhs")||[n];s.includes(n)||(s.push(n),rt("ks-hhs",s))}await Pw(),zA(),bc(),AI(),OS(),eE(p.hid);try{le("syncing");const s=await Promise.allSettled([Ue(`households/${p.hid}/inventory`),Ue(`households/${p.hid}/recipes`),Ue(`households/${p.hid}/shopping`)]),i=(r,o)=>r.status==="fulfilled"?r.value:o;p.inv=i(s[0],p.inv),p.recs=i(s[1],p.recs),p.shop=i(s[2],p.shop),le("synced"),Tc(),Xr(),ds(),yi()}catch(s){console.error("initial load error",s),le("error")}setTimeout(c0,500)};i0();CA();p.cfg.notif&&setTimeout(Np,3e3);ds();function eo(n){f("auth-loading").style.display="none",f("auth-signin").style.display=n==="signin"?"flex":"none",f("auth-signup").style.display=n==="signup"?"flex":"none",f("auth-join").style.display=n==="join"?"flex":"none",f("authError").style.display="none",f("signupError").style.display="none"}function Xe(n,e){const t=f(n);t&&(t.textContent=e,t.style.display="block")}function to(n){return{"auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password.","auth/invalid-credential":"Incorrect email or password.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password must be at least 6 characters.","auth/too-many-requests":"Too many attempts. Please try again later.","auth/popup-closed-by-user":"Sign-in popup was closed.","auth/cancelled-popup-request":"Sign-in was cancelled.","auth/account-exists-with-different-credential":"An account already exists with this email using a different sign-in method."}[n.code]||n.message||"Something went wrong. Please try again."}function He(n,e){n&&(e?(n._origText=n.textContent,n.textContent="Please wait…",n.disabled=!0):(n.textContent=n._origText||n.textContent,n.disabled=!1))}var Rh;(Rh=f("btnGoogle"))==null||Rh.addEventListener("click",async()=>{const n=f("btnGoogle");He(n,!0),f("authError").style.display="none";try{await _w()}catch(e){Xe("authError",to(e))}He(n,!1)});var Ph;(Ph=f("btnApple"))==null||Ph.addEventListener("click",async()=>{const n=f("btnApple");He(n,!0),f("authError").style.display="none";try{await bw()}catch(e){Xe("authError",to(e))}He(n,!1)});var xh;(xh=f("btnEmailSign"))==null||xh.addEventListener("click",async()=>{var s,i,r;const n=(i=(s=f("authEmail"))==null?void 0:s.value)==null?void 0:i.trim(),e=(r=f("authPass"))==null?void 0:r.value;if(!n||!e){Xe("authError","Please enter your email and password.");return}const t=f("btnEmailSign");He(t,!0),f("authError").style.display="none";try{await Tw(n,e)}catch(o){Xe("authError",to(o))}He(t,!1)});var Lh;(Lh=f("btnEmailSignup"))==null||Lh.addEventListener("click",async()=>{var i,r,o,c,u;const n=(r=(i=f("signupName"))==null?void 0:i.value)==null?void 0:r.trim(),e=(c=(o=f("signupEmail"))==null?void 0:o.value)==null?void 0:c.trim(),t=(u=f("signupPass"))==null?void 0:u.value;if(!n){Xe("signupError","Please enter your name.");return}if(!e||!t){Xe("signupError","Please enter your email and password.");return}const s=f("btnEmailSignup");He(s,!0),f("signupError").style.display="none";try{await Ew(e,t,n)}catch(d){Xe("signupError",to(d))}He(s,!1)});var Dh;(Dh=f("btnToggleSignup"))==null||Dh.addEventListener("click",()=>eo("signup"));var Nh;(Nh=f("btnToggleSignin"))==null||Nh.addEventListener("click",()=>eo("signin"));var Oh;(Oh=f("authPass"))==null||Oh.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=f("btnEmailSign"))==null||e.click())});var Mh;(Mh=f("signupPass"))==null||Mh.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=f("btnEmailSignup"))==null||e.click())});window.doSignOut=async function(){confirm("Sign out of Kitchen?")&&await Iw()};let Ko=!1;function kr(n){localStorage.setItem("ks-h",n),f("LS").style.display="none",f("APP").style.display="flex",window._appStart(n)}function f0(n){eo("join"),f("btnCreateKitchen").onclick=async()=>{var e;He(f("btnCreateKitchen"),!0);try{const t=((e=p.cfg)==null?void 0:e.name)||"My Kitchen";await Md(n.uid,t);const s=await ia(n);s.householdIds=[n.uid],await ee(`users/${n.uid}`,s),localStorage.removeItem("ks-h");const i=$e("ks-hhs");if(i){const r=i.filter(o=>o!==n.uid);r.push(n.uid),localStorage.setItem("ks-hhs",JSON.stringify(r))}kr(n.uid)}catch(t){console.error("Create kitchen error:",t),Xe("joinError","Something went wrong. Please try again."),He(f("btnCreateKitchen"),!1)}},f("btnJoinKitchen").onclick=async()=>{var t,s,i;const e=(i=(s=(t=f("joinCode"))==null?void 0:t.value)==null?void 0:s.trim())==null?void 0:i.toUpperCase();if(!e){Xe("joinError","Please enter an invite code.");return}He(f("btnJoinKitchen"),!0),f("joinError").style.display="none";try{let r=await me(`users/${n.uid}`);r||(r=await ia(n));const o=await Vd(e,n);if(!o){Xe("joinError","Invalid invite code. Check and try again."),He(f("btnJoinKitchen"),!1);return}const c=$e("ks-hhs")||[];c.includes(o)||c.push(o),rt("ks-hhs",c),kr(o)}catch(r){console.error("Join kitchen error:",r),Xe("joinError","Something went wrong. Please try again."),He(f("btnJoinKitchen"),!1)}}}vw(async n=>{var e;if(n){if(localStorage.setItem("ks-who",n.displayName||((e=n.email)==null?void 0:e.split("@")[0])||"You"),!Ko){Ko=!0;try{const t=await me(`users/${n.uid}`),s=localStorage.getItem("ks-h"),i=$e("ks-hhs");if(!!t||!!s||i&&i.length>0){f("LS").style.display="none",f("APP").style.display="flex";const o=await Cw(n);kr(o)}else f0(n)}catch(t){console.error("Failed to resolve household:",t);const s=n.uid;kr(s)}}}else Kf(),Ko=!1,f("APP").style.display="none",f("LS").style.display="flex",eo("signin")});
