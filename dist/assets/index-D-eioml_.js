(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Mi={name:"The Bora Family",adults:"Bora",kids:"1 toddler (age 3)",nopork:!0,noshellfish:!1,vegetarian:!1,glutenfree:!1,other:"",cuisines:"Bangladeshi, Turkish, Mediterranean, American",cookTime:"40-60 min",zipcode:""},d={hid:null,inv:[],recs:[],shop:[],mp:{},cfg:{...Mi},cookLog:[],wasteLog:[],chat:[],cp:null,selR:"fridge",maL:"fridge",adjId:null,it:"all",rt:"all",md:null,cn:"",nr:0,eid:null,scanDestList:!1,aisleMode:!1,selectMode:null,selectedIds:new Set,comRecs:[],comTab:"browse",comSearch:"",comCuisine:"all",myLikes:new Set};function Pe(n){try{return JSON.parse(localStorage.getItem(n))}catch{return null}}function et(n,e){localStorage.setItem(n,JSON.stringify(e))}const ep=()=>{};var Xc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},tp=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],a=n[t++],c=n[t++],u=((i&7)<<18|(r&63)<<12|(a&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const r=n[t++],a=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|a&63)}}return e.join("")},Fu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],a=i+1<n.length,c=a?n[i+1]:0,u=i+2<n.length,f=u?n[i+2]:0,g=r>>2,w=(r&3)<<4|c>>4;let I=(c&15)<<2|f>>6,R=f&63;u||(R=64,a||(I=64)),s.push(t[g],t[w],t[I],t[R])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray($u(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):tp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const f=i<n.length?t[n.charAt(i)]:64;++i;const w=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||c==null||f==null||w==null)throw new np;const I=r<<2|c>>4;if(s.push(I),f!==64){const R=c<<4&240|f>>2;if(s.push(R),w!==64){const N=f<<6&192|w;s.push(N)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class np extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sp=function(n){const e=$u(n);return Fu.encodeByteArray(e,!0)},Vi=function(n){return sp(n).replace(/\./g,"")},Uu=function(n){try{return Fu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ip(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rp=()=>ip().__FIREBASE_DEFAULTS__,op=()=>{if(typeof process>"u"||typeof Xc>"u")return;const n=Xc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ap=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Uu(n[1]);return e&&JSON.parse(e)},ir=()=>{try{return ep()||rp()||op()||ap()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ju=n=>{var e,t;return(t=(e=ir())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},cp=n=>{const e=ju(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Bu=()=>{var n;return(n=ir())==null?void 0:n.config},qu=n=>{var e;return(e=ir())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function qn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Hu(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function up(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Vi(JSON.stringify(t)),Vi(JSON.stringify(a)),""].join(".")}const Is={};function hp(){const n={prod:[],emulator:[]};for(const e of Object.keys(Is))Is[e]?n.emulator.push(e):n.prod.push(e);return n}function dp(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Zc=!1;function zu(n,e){if(typeof window>"u"||typeof document>"u"||!qn(window.location.host)||Is[n]===e||Is[n]||Zc)return;Is[n]=e;function t(I){return`__firebase__banner__${I}`}const s="__firebase__banner",r=hp().prod.length>0;function a(){const I=document.getElementById(s);I&&I.remove()}function c(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function u(I,R){I.setAttribute("width","24"),I.setAttribute("id",R),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function f(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{Zc=!0,a()},I}function g(I,R){I.setAttribute("id",R),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function w(){const I=dp(s),R=t("text"),N=document.getElementById(R)||document.createElement("span"),$=t("learnmore"),M=document.getElementById($)||document.createElement("a"),Y=t("preprendIcon"),Z=document.getElementById(Y)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const j=I.element;c(j),g(M,$);const G=f();u(Z,Y),j.append(Z,N,M,G),document.body.appendChild(j)}r?(N.innerText="Preview backend disconnected.",Z.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Z.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function pp(){var e;const n=(e=ir())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function yp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vp(){const n=Se();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function _p(){return!pp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function wp(){try{return typeof indexedDB=="object"}catch{return!1}}function bp(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp="FirebaseError";class gt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Tp,Object.setPrototypeOf(this,gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bs.prototype.create)}}class Bs{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],a=r?Ep(r,s):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new gt(i,c,s)}}function Ep(n,e){return n.replace(Ip,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Ip=/\{\$([^}]+)}/g;function Sp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ln(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],a=e[i];if(el(r)&&el(a)){if(!ln(r,a))return!1}else if(r!==a)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function el(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function vs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function _s(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Ap(n,e){const t=new kp(n,e);return t.subscribe.bind(t)}class kp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Cp(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=Zr),i.error===void 0&&(i.error=Zr),i.complete===void 0&&(i.complete=Zr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Zr(){}/**
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
 */function Fe(n){return n&&n._delegate?n._delegate:n}class un{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const sn="[DEFAULT]";/**
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
 */class Rp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new lp;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xp(e))try{this.getOrInitializeService({instanceIdentifier:sn})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=sn){return this.instances.has(e)}getOptions(e=sn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(r);s===c&&a.resolve(i)}return i}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Pp(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=sn){return this.component?this.component.multipleInstances?e:sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Pp(n){return n===sn?void 0:n}function xp(n){return n.instantiationMode==="EAGER"}/**
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
 */class Dp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Rp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const Lp={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},Np=z.INFO,Op={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},Mp=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Op[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xo{constructor(e){this.name=e,this._logLevel=Np,this._logHandler=Mp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}const Vp=(n,e)=>e.some(t=>n instanceof t);let tl,nl;function $p(){return tl||(tl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fp(){return nl||(nl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gu=new WeakMap,yo=new WeakMap,Ku=new WeakMap,eo=new WeakMap,Zo=new WeakMap;function Up(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",a)},r=()=>{t(Lt(n.result)),i()},a=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Gu.set(t,n)}).catch(()=>{}),Zo.set(e,n),e}function jp(n){if(yo.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",a),n.removeEventListener("abort",a)},r=()=>{t(),i()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",a),n.addEventListener("abort",a)});yo.set(n,e)}let vo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return yo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ku.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Lt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Bp(n){vo=n(vo)}function qp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(to(this),e,...t);return Ku.set(s,e.sort?e.sort():[e]),Lt(s)}:Fp().includes(n)?function(...e){return n.apply(to(this),e),Lt(Gu.get(this))}:function(...e){return Lt(n.apply(to(this),e))}}function Hp(n){return typeof n=="function"?qp(n):(n instanceof IDBTransaction&&jp(n),Vp(n,$p())?new Proxy(n,vo):n)}function Lt(n){if(n instanceof IDBRequest)return Up(n);if(eo.has(n))return eo.get(n);const e=Hp(n);return e!==n&&(eo.set(n,e),Zo.set(e,n)),e}const to=n=>Zo.get(n);function zp(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const a=indexedDB.open(n,e),c=Lt(a);return s&&a.addEventListener("upgradeneeded",u=>{s(Lt(a.result),u.oldVersion,u.newVersion,Lt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{r&&u.addEventListener("close",()=>r()),i&&u.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const Gp=["get","getKey","getAll","getAllKeys","count"],Kp=["put","add","delete","clear"],no=new Map;function sl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(no.get(e))return no.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Kp.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Gp.includes(t)))return;const r=async function(a,...c){const u=this.transaction(a,i?"readwrite":"readonly");let f=u.store;return s&&(f=f.index(c.shift())),(await Promise.all([f[t](...c),i&&u.done]))[0]};return no.set(e,r),r}Bp(n=>({...n,get:(e,t,s)=>sl(e,t)||n.get(e,t,s),has:(e,t)=>!!sl(e,t)||n.has(e,t)}));/**
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
 */class Wp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Qp(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Qp(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _o="@firebase/app",il="0.14.9";/**
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
 */const dt=new Xo("@firebase/app"),Jp="@firebase/app-compat",Yp="@firebase/analytics-compat",Xp="@firebase/analytics",Zp="@firebase/app-check-compat",em="@firebase/app-check",tm="@firebase/auth",nm="@firebase/auth-compat",sm="@firebase/database",im="@firebase/data-connect",rm="@firebase/database-compat",om="@firebase/functions",am="@firebase/functions-compat",cm="@firebase/installations",lm="@firebase/installations-compat",um="@firebase/messaging",hm="@firebase/messaging-compat",dm="@firebase/performance",fm="@firebase/performance-compat",pm="@firebase/remote-config",mm="@firebase/remote-config-compat",gm="@firebase/storage",ym="@firebase/storage-compat",vm="@firebase/firestore",_m="@firebase/ai",wm="@firebase/firestore-compat",bm="firebase",Tm="12.10.0";/**
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
 */const wo="[DEFAULT]",Em={[_o]:"fire-core",[Jp]:"fire-core-compat",[Xp]:"fire-analytics",[Yp]:"fire-analytics-compat",[em]:"fire-app-check",[Zp]:"fire-app-check-compat",[tm]:"fire-auth",[nm]:"fire-auth-compat",[sm]:"fire-rtdb",[im]:"fire-data-connect",[rm]:"fire-rtdb-compat",[om]:"fire-fn",[am]:"fire-fn-compat",[cm]:"fire-iid",[lm]:"fire-iid-compat",[um]:"fire-fcm",[hm]:"fire-fcm-compat",[dm]:"fire-perf",[fm]:"fire-perf-compat",[pm]:"fire-rc",[mm]:"fire-rc-compat",[gm]:"fire-gcs",[ym]:"fire-gcs-compat",[vm]:"fire-fst",[wm]:"fire-fst-compat",[_m]:"fire-vertex","fire-js":"fire-js",[bm]:"fire-js-all"};/**
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
 */const $i=new Map,Im=new Map,bo=new Map;function rl(n,e){try{n.container.addComponent(e)}catch(t){dt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Nn(n){const e=n.name;if(bo.has(e))return dt.debug(`There were multiple attempts to register component ${e}.`),!1;bo.set(e,n);for(const t of $i.values())rl(t,n);for(const t of Im.values())rl(t,n);return!0}function ea(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ne(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Sm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nt=new Bs("app","Firebase",Sm);/**
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
 */class Am{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}}/**
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
 */const Hn=Tm;function Wu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:wo,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw Nt.create("bad-app-name",{appName:String(i)});if(t||(t=Bu()),!t)throw Nt.create("no-options");const r=$i.get(i);if(r){if(ln(t,r.options)&&ln(s,r.config))return r;throw Nt.create("duplicate-app",{appName:i})}const a=new Dp(i);for(const u of bo.values())a.addComponent(u);const c=new Am(t,s,a);return $i.set(i,c),c}function Qu(n=wo){const e=$i.get(n);if(!e&&n===wo&&Bu())return Wu();if(!e)throw Nt.create("no-app",{appName:n});return e}function Ot(n,e,t){let s=Em[n]??n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&a.push("and"),r&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dt.warn(a.join(" "));return}Nn(new un(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const km="firebase-heartbeat-database",Cm=1,Ls="firebase-heartbeat-store";let so=null;function Ju(){return so||(so=zp(km,Cm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ls)}catch(t){console.warn(t)}}}}).catch(n=>{throw Nt.create("idb-open",{originalErrorMessage:n.message})})),so}async function Rm(n){try{const t=(await Ju()).transaction(Ls),s=await t.objectStore(Ls).get(Yu(n));return await t.done,s}catch(e){if(e instanceof gt)dt.warn(e.message);else{const t=Nt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dt.warn(t.message)}}}async function ol(n,e){try{const s=(await Ju()).transaction(Ls,"readwrite");await s.objectStore(Ls).put(e,Yu(n)),await s.done}catch(t){if(t instanceof gt)dt.warn(t.message);else{const s=Nt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});dt.warn(s.message)}}}function Yu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Pm=1024,xm=30;class Dm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Nm(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=al();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(a=>a.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>xm){const a=Om(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){dt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=al(),{heartbeatsToSend:s,unsentEntries:i}=Lm(this._heartbeatsCache.heartbeats),r=Vi(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return dt.warn(t),""}}}function al(){return new Date().toISOString().substring(0,10)}function Lm(n,e=Pm){const t=[];let s=n.slice();for(const i of n){const r=t.find(a=>a.agent===i.agent);if(r){if(r.dates.push(i.date),cl(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),cl(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Nm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wp()?bp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Rm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ol(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ol(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function cl(n){return Vi(JSON.stringify({version:2,heartbeats:n})).length}function Om(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function Mm(n){Nn(new un("platform-logger",e=>new Wp(e),"PRIVATE")),Nn(new un("heartbeat",e=>new Dm(e),"PRIVATE")),Ot(_o,il,n),Ot(_o,il,"esm2020"),Ot("fire-js","")}Mm("");var Vm="firebase",$m="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot(Vm,$m,"app");function Xu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fm=Xu,Zu=new Bs("auth","Firebase",Xu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=new Xo("@firebase/auth");function Um(n,...e){Fi.logLevel<=z.WARN&&Fi.warn(`Auth (${Hn}): ${n}`,...e)}function Ei(n,...e){Fi.logLevel<=z.ERROR&&Fi.error(`Auth (${Hn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(n,...e){throw na(n,...e)}function We(n,...e){return na(n,...e)}function ta(n,e,t){const s={...Fm(),[e]:t};return new Bs("auth","Firebase",s).create(e,{appName:n.name})}function tt(n){return ta(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function eh(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&je(n,"argument-error"),ta(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function na(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Zu.create(n,...e)}function F(n,e,...t){if(!n)throw na(e,...t)}function ut(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ei(e),new Error(e)}function ft(n,e){n||ut(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function jm(){return ll()==="http:"||ll()==="https:"}function ll(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jm()||gp()||"connection"in navigator)?navigator.onLine:!0}function qm(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,t){this.shortDelay=e,this.longDelay=t,ft(t>e,"Short delay should be less than long delay!"),this.isMobile=fp()||yp()}get(){return Bm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(n,e){ft(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Gm=new Hs(3e4,6e4);function Gt(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function yt(n,e,t,s,i={}){return nh(n,i,async()=>{let r={},a={};s&&(e==="GET"?a=s:r={body:JSON.stringify(s)});const c=qs({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const f={method:e,headers:u,...r};return mp()||(f.referrerPolicy="no-referrer"),n.emulatorConfig&&qn(n.emulatorConfig.host)&&(f.credentials="include"),th.fetch()(await sh(n,n.config.apiHost,t,c),f)})}async function nh(n,e,t){n._canInitEmulator=!1;const s={...Hm,...e};try{const i=new Wm(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw mi(n,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const c=r.ok?a.errorMessage:a.error.message,[u,f]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw mi(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw mi(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw mi(n,"user-disabled",a);const g=s[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw ta(n,g,f);je(n,g)}}catch(i){if(i instanceof gt)throw i;je(n,"network-request-failed",{message:String(i)})}}async function zs(n,e,t,s,i={}){const r=await yt(n,e,t,s,i);return"mfaPendingCredential"in r&&je(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function sh(n,e,t,s){const i=`${e}${t}?${s}`,r=n,a=r.config.emulator?sa(n.config,i):`${n.config.apiScheme}://${i}`;return zm.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(a).toString():a}function Km(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Wm{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(We(this.auth,"network-request-failed")),Gm.get())})}}function mi(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=We(n,e,s);return i.customData._tokenResponse=t,i}function ul(n){return n!==void 0&&n.enterprise!==void 0}class Qm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Km(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Jm(n,e){return yt(n,"GET","/v2/recaptchaConfig",Gt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ym(n,e){return yt(n,"POST","/v1/accounts:delete",e)}async function Ui(n,e){return yt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Xm(n,e=!1){const t=Fe(n),s=await t.getIdToken(e),i=ia(s);F(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,a=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ss(io(i.auth_time)),issuedAtTime:Ss(io(i.iat)),expirationTime:Ss(io(i.exp)),signInProvider:a||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function io(n){return Number(n)*1e3}function ia(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Ei("JWT malformed, contained fewer than 3 sections"),null;try{const i=Uu(t);return i?JSON.parse(i):(Ei("Failed to decode base64 JWT payload"),null)}catch(i){return Ei("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function hl(n){const e=ia(n);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function On(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof gt&&Zm(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Zm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ss(this.lastLoginAt),this.creationTime=Ss(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ji(n){var w;const e=n.auth,t=await n.getIdToken(),s=await On(n,Ui(e,{idToken:t}));F(s==null?void 0:s.users.length,e,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const r=(w=i.providerUserInfo)!=null&&w.length?ih(i.providerUserInfo):[],a=ng(n.providerData,r),c=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),f=c?u:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Eo(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,g)}async function tg(n){const e=Fe(n);await ji(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ng(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function ih(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sg(n,e){const t=await nh(n,{},async()=>{const s=qs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,a=await sh(n,i,"/v1/token",`key=${r}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:s};return n.emulatorConfig&&qn(n.emulatorConfig.host)&&(u.credentials="include"),th.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ig(n,e){return yt(n,"POST","/v2/accounts:revokeToken",Gt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){F(e.length!==0,"internal-error");const t=hl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await sg(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,a=new Sn;return s&&(F(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),i&&(F(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),r&&(F(typeof r=="number","internal-error",{appName:e}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Sn,this.toJSON())}_performRefresh(){return ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(n,e){F(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ge{constructor({uid:e,auth:t,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new eg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Eo(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await On(this,this.stsTokenManager.getToken(this.auth,e));return F(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Xm(this,e)}reload(){return tg(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ge({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await ji(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ne(this.auth.app))return Promise.reject(tt(this.auth));const e=await this.getIdToken();return await On(this,Ym(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,i=t.email??void 0,r=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,u=t._redirectEventId??void 0,f=t.createdAt??void 0,g=t.lastLoginAt??void 0,{uid:w,emailVerified:I,isAnonymous:R,providerData:N,stsTokenManager:$}=t;F(w&&$,e,"internal-error");const M=Sn.fromJSON(this.name,$);F(typeof w=="string",e,"internal-error"),St(s,e.name),St(i,e.name),F(typeof I=="boolean",e,"internal-error"),F(typeof R=="boolean",e,"internal-error"),St(r,e.name),St(a,e.name),St(c,e.name),St(u,e.name),St(f,e.name),St(g,e.name);const Y=new Ge({uid:w,auth:e,email:i,emailVerified:I,displayName:s,isAnonymous:R,photoURL:a,phoneNumber:r,tenantId:c,stsTokenManager:M,createdAt:f,lastLoginAt:g});return N&&Array.isArray(N)&&(Y.providerData=N.map(Z=>({...Z}))),u&&(Y._redirectEventId=u),Y}static async _fromIdTokenResponse(e,t,s=!1){const i=new Sn;i.updateFromServerResponse(t);const r=new Ge({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await ji(r),r}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];F(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?ih(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),c=new Sn;c.updateFromIdToken(s);const u=new Ge({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Eo(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(u,f),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl=new Map;function ht(n){ft(n instanceof Function,"Expected a class definition");let e=dl.get(n);return e?(ft(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,dl.set(n,e),e)}/**
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
 */class rh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}rh.type="NONE";const fl=rh;/**
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
 */function Ii(n,e,t){return`firebase:${n}:${e}:${t}`}class An{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Ii(this.userKey,i.apiKey,r),this.fullPersistenceKey=Ii("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ui(this.auth,{idToken:e}).catch(()=>{});return t?Ge._fromGetAccountInfoResponse(this.auth,t,e):null}return Ge._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new An(ht(fl),e,s);const i=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let r=i[0]||ht(fl);const a=Ii(s,e.config.apiKey,e.name);let c=null;for(const f of t)try{const g=await f._get(a);if(g){let w;if(typeof g=="string"){const I=await Ui(e,{idToken:g}).catch(()=>{});if(!I)break;w=await Ge._fromGetAccountInfoResponse(e,I,g)}else w=Ge._fromJSON(e,g);f!==r&&(c=w),r=f;break}}catch{}const u=i.filter(f=>f._shouldAllowMigration);return!r._shouldAllowMigration||!u.length?new An(r,e,s):(r=u[0],c&&await r._set(a,c.toJSON()),await Promise.all(t.map(async f=>{if(f!==r)try{await f._remove(a)}catch{}})),new An(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(oh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hh(e))return"Blackberry";if(dh(e))return"Webos";if(ah(e))return"Safari";if((e.includes("chrome/")||ch(e))&&!e.includes("edge/"))return"Chrome";if(uh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function oh(n=Se()){return/firefox\//i.test(n)}function ah(n=Se()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ch(n=Se()){return/crios\//i.test(n)}function lh(n=Se()){return/iemobile/i.test(n)}function uh(n=Se()){return/android/i.test(n)}function hh(n=Se()){return/blackberry/i.test(n)}function dh(n=Se()){return/webos/i.test(n)}function ra(n=Se()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function rg(n=Se()){var e;return ra(n)&&!!((e=window.navigator)!=null&&e.standalone)}function og(){return vp()&&document.documentMode===10}function fh(n=Se()){return ra(n)||uh(n)||dh(n)||hh(n)||/windows phone/i.test(n)||lh(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(n,e=[]){let t;switch(n){case"Browser":t=pl(Se());break;case"Worker":t=`${pl(Se())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Hn}/${s}`}/**
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
 */class ag{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((a,c)=>{try{const u=e(r);a(u)}catch(u){c(u)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function cg(n,e={}){return yt(n,"GET","/v2/passwordPolicy",Gt(n,e))}/**
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
 */const lg=6;class ug{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??lg,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ml(this),this.idTokenSubscription=new ml(this),this.beforeStateQueue=new ag(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ht(t)),this._initializationPromise=this.queue(async()=>{var s,i,r;if(!this._deleted&&(this.persistenceManager=await An.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ui(this,{idToken:e}),s=await Ge._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(Ne(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(r=this.redirectUser)==null?void 0:r._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ji(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ne(this.app))return Promise.reject(tt(this));const t=e?Fe(e):null;return t&&F(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ne(this.app)?Promise.reject(tt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ne(this.app)?Promise.reject(tt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ht(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await cg(this),t=new ug(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Bs("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await ig(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ht(e)||this._popupRedirectResolver;F(t,this,"argument-error"),this.redirectPersistenceManager=await An.create(this,[ht(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(c,this,"internal-error"),c.then(()=>{a||r(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,s,i);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ph(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Ne(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Um(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function at(n){return Fe(n)}class ml{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ap(t=>this.observer=t)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dg(n){rr=n}function mh(n){return rr.loadJS(n)}function fg(){return rr.recaptchaEnterpriseScript}function pg(){return rr.gapiScript}function mg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class gg{constructor(){this.enterprise=new yg}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class yg{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const vg="recaptcha-enterprise",gh="NO_RECAPTCHA";class _g{constructor(e){this.type=vg,this.auth=at(e)}async verify(e="verify",t=!1){async function s(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(a,c)=>{Jm(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const f=new Qm(u);return r.tenantId==null?r._agentRecaptchaConfig=f:r._tenantRecaptchaConfigs[r.tenantId]=f,a(f.siteKey)}}).catch(u=>{c(u)})})}function i(r,a,c){const u=window.grecaptcha;ul(u)?u.enterprise.ready(()=>{u.enterprise.execute(r,{action:e}).then(f=>{a(f)}).catch(()=>{a(gh)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new gg().execute("siteKey",{action:"verify"}):new Promise((r,a)=>{s(this.auth).then(c=>{if(!t&&ul(window.grecaptcha))i(c,r,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=fg();u.length!==0&&(u+=c),mh(u).then(()=>{i(c,r,a)}).catch(f=>{a(f)})}}).catch(c=>{a(c)})})}}async function gl(n,e,t,s=!1,i=!1){const r=new _g(n);let a;if(i)a=gh;else try{a=await r.verify(t)}catch{a=await r.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,f=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:f,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return s?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Io(n,e,t,s,i){var r;if((r=n._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await gl(n,e,t,t==="getOobCode");return s(n,a)}else return s(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await gl(n,e,t,t==="getOobCode");return s(n,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(n,e){const t=ea(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(ln(r,e??{}))return i;je(i,"already-initialized")}return t.initialize({options:e})}function bg(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(ht);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Tg(n,e,t){const s=at(n);F(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=yh(e),{host:a,port:c}=Eg(e),u=c===null?"":`:${c}`,f={url:`${r}//${a}${u}/`},g=Object.freeze({host:a,port:c,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){F(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),F(ln(f,s.config.emulator)&&ln(g,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=f,s.emulatorConfig=g,s.settings.appVerificationDisabledForTesting=!0,qn(a)?(Hu(`${r}//${a}${u}`),zu("Auth",!0)):Ig()}function yh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Eg(n){const e=yh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:yl(s.substr(r.length+1))}}else{const[r,a]=s.split(":");return{host:r,port:yl(a)}}}function yl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Ig(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ut("not implemented")}_getIdTokenResponse(e){return ut("not implemented")}_linkToIdToken(e,t){return ut("not implemented")}_getReauthenticationResolver(e){return ut("not implemented")}}async function Sg(n,e){return yt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ag(n,e){return zs(n,"POST","/v1/accounts:signInWithPassword",Gt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kg(n,e){return zs(n,"POST","/v1/accounts:signInWithEmailLink",Gt(n,e))}async function Cg(n,e){return zs(n,"POST","/v1/accounts:signInWithEmailLink",Gt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns extends oa{constructor(e,t,s,i=null){super("password",s),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Ns(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ns(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Io(e,t,"signInWithPassword",Ag);case"emailLink":return kg(e,{email:this._email,oobCode:this._password});default:je(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Io(e,s,"signUpPassword",Sg);case"emailLink":return Cg(e,{idToken:t,email:this._email,oobCode:this._password});default:je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kn(n,e){return zs(n,"POST","/v1/accounts:signInWithIdp",Gt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg="http://localhost";class pt extends oa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new pt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):je("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,...r}=t;if(!s||!i)return null;const a=new pt(s,i);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return kn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,kn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,kn(e,t)}buildRequest(){const e={requestUri:Rg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=qs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xg(n){const e=vs(_s(n)).link,t=e?vs(_s(e)).deep_link_id:null,s=vs(_s(n)).deep_link_id;return(s?vs(_s(s)).link:null)||s||t||e||n}class aa{constructor(e){const t=vs(_s(e)),s=t.apiKey??null,i=t.oobCode??null,r=Pg(t.mode??null);F(s&&i&&r,"argument-error"),this.apiKey=s,this.operation=r,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=xg(e);try{return new aa(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.providerId=zn.PROVIDER_ID}static credential(e,t){return Ns._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=aa.parseLink(t);return F(s,"argument-error"),Ns._fromEmailAndCode(e,s.code,s.tenantId)}}zn.PROVIDER_ID="password";zn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Gn extends or{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class As extends Gn{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return F("providerId"in t&&"signInMethod"in t,"argument-error"),pt._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return F(e.idToken||e.accessToken,"argument-error"),pt._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return As.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return As.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s,oauthTokenSecret:i,pendingToken:r,nonce:a,providerId:c}=e;if(!s&&!i&&!t&&!r||!c)return null;try{return new As(c)._credential({idToken:t,accessToken:s,nonce:a,pendingToken:r})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends Gn{constructor(){super("facebook.com")}static credential(e){return pt._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return At.credential(e.oauthAccessToken)}catch{return null}}}At.FACEBOOK_SIGN_IN_METHOD="facebook.com";At.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends Gn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return pt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return lt.credential(t,s)}catch{return null}}}lt.GOOGLE_SIGN_IN_METHOD="google.com";lt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends Gn{constructor(){super("github.com")}static credential(e){return pt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.GITHUB_SIGN_IN_METHOD="github.com";kt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends Gn{constructor(){super("twitter.com")}static credential(e,t){return pt._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Ct.credential(t,s)}catch{return null}}}Ct.TWITTER_SIGN_IN_METHOD="twitter.com";Ct.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dg(n,e){return zs(n,"POST","/v1/accounts:signUp",Gt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await Ge._fromIdTokenResponse(e,s,i),a=vl(s);return new hn({user:r,providerId:a,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=vl(s);return new hn({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function vl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends gt{constructor(e,t,s,i){super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Bi.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new Bi(e,t,s,i)}}function vh(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Bi._fromErrorAndOperation(n,r,e,s):r})}async function Lg(n,e,t=!1){const s=await On(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return hn._forOperation(n,"link",s)}/**
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
 */async function Ng(n,e,t=!1){const{auth:s}=n;if(Ne(s.app))return Promise.reject(tt(s));const i="reauthenticate";try{const r=await On(n,vh(s,i,e,n),t);F(r.idToken,s,"internal-error");const a=ia(r.idToken);F(a,s,"internal-error");const{sub:c}=a;return F(n.uid===c,s,"user-mismatch"),hn._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&je(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _h(n,e,t=!1){if(Ne(n.app))return Promise.reject(tt(n));const s="signIn",i=await vh(n,s,e),r=await hn._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}async function Og(n,e){return _h(at(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wh(n){const e=at(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Mg(n,e,t){if(Ne(n.app))return Promise.reject(tt(n));const s=at(n),a=await Io(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Dg).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&wh(n),u}),c=await hn._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function Vg(n,e,t){return Ne(n.app)?Promise.reject(tt(n)):Og(Fe(n),zn.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&wh(n),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $g(n,e){return yt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fg(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=Fe(n),r={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await On(s,$g(s.auth,r));s.displayName=a.displayName||null,s.photoURL=a.photoUrl||null;const c=s.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=s.displayName,c.photoURL=s.photoURL),await s._updateTokensIfNecessary(a)}function Ug(n,e,t,s){return Fe(n).onIdTokenChanged(e,t,s)}function jg(n,e,t){return Fe(n).beforeAuthStateChanged(e,t)}function Bg(n,e,t,s){return Fe(n).onAuthStateChanged(e,t,s)}function qg(n){return Fe(n).signOut()}const qi="__sak";/**
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
 */class bh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(qi,"1"),this.storage.removeItem(qi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=1e3,zg=10;class Th extends bh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const s=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(s);!t&&this.localCache[s]===a||this.notifyListeners(s,a)},r=this.storage.getItem(s);og()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,zg):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Hg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Th.type="LOCAL";const Gg=Th;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh extends bh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Eh.type="SESSION";const Ih=Eh;/**
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
 */function Kg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ar{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new ar(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const c=Array.from(a).map(async f=>f(t.origin,r)),u=await Kg(c);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ar.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Wg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,a;return new Promise((c,u)=>{const f=ca("",20);i.port1.start();const g=setTimeout(()=>{u(new Error("unsupported_event"))},s);a={messageChannel:i,onMessage(w){const I=w;if(I.data.eventId===f)switch(I.data.status){case"ack":clearTimeout(g),r=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),c(I.data.response);break;default:clearTimeout(g),clearTimeout(r),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return window}function Qg(n){nt().location.href=n}/**
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
 */function Sh(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function Jg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Yg(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Xg(){return Sh()?self:null}/**
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
 */const Ah="firebaseLocalStorageDb",Zg=1,Hi="firebaseLocalStorage",kh="fbase_key";class Gs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function cr(n,e){return n.transaction([Hi],e?"readwrite":"readonly").objectStore(Hi)}function ey(){const n=indexedDB.deleteDatabase(Ah);return new Gs(n).toPromise()}function So(){const n=indexedDB.open(Ah,Zg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Hi,{keyPath:kh})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Hi)?e(s):(s.close(),await ey(),e(await So()))})})}async function _l(n,e,t){const s=cr(n,!0).put({[kh]:e,value:t});return new Gs(s).toPromise()}async function ty(n,e){const t=cr(n,!1).get(e),s=await new Gs(t).toPromise();return s===void 0?null:s.value}function wl(n,e){const t=cr(n,!0).delete(e);return new Gs(t).toPromise()}const ny=800,sy=3;class Ch{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await So(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>sy)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ar._getInstance(Xg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await Jg(),!this.activeServiceWorker)return;this.sender=new Wg(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Yg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await So();return await _l(e,qi,"1"),await wl(e,qi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>_l(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>ty(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>wl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=cr(i,!1).getAll();return new Gs(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ny)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ch.type="LOCAL";const iy=Ch;new Hs(3e4,6e4);/**
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
 */function la(n,e){return e?ht(e):(F(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ua extends oa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return kn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return kn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return kn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ry(n){return _h(n.auth,new ua(n),n.bypassAuthState)}function oy(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),Ng(t,new ua(n),n.bypassAuthState)}async function ay(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),Lg(t,new ua(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ry;case"linkViaPopup":case"linkViaRedirect":return ay;case"reauthViaPopup":case"reauthViaRedirect":return oy;default:je(this.auth,"internal-error")}}resolve(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=new Hs(2e3,1e4);async function Ph(n,e,t){if(Ne(n.app))return Promise.reject(We(n,"operation-not-supported-in-this-environment"));const s=at(n);eh(n,e,or);const i=la(s,t);return new rn(s,"signInViaPopup",e,i).executeNotNull()}class rn extends Rh{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,rn.currentPopupAction&&rn.currentPopupAction.cancel(),rn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){ft(this.filter.length===1,"Popup operations only handle one event");const e=ca();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(We(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(We(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(We(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cy.get())};e()}}rn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly="pendingRedirect",Si=new Map;class uy extends Rh{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Si.get(this.auth._key());if(!e){try{const s=await hy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Si.set(this.auth._key(),e)}return this.bypassAuthState||Si.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hy(n,e){const t=Dh(e),s=xh(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}async function dy(n,e){return xh(n)._set(Dh(e),"true")}function fy(n,e){Si.set(n._key(),e)}function xh(n){return ht(n._redirectPersistence)}function Dh(n){return Ii(ly,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(n,e,t){return py(n,e,t)}async function py(n,e,t){if(Ne(n.app))return Promise.reject(tt(n));const s=at(n);eh(n,e,or),await s._initializationPromise;const i=la(s,t);return await dy(i,s),i._openRedirect(s,e,"signInViaRedirect")}async function my(n,e){return await at(n)._initializationPromise,Nh(n,e,!1)}async function Nh(n,e,t=!1){if(Ne(n.app))return Promise.reject(tt(n));const s=at(n),i=la(s,e),a=await new uy(s,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy=600*1e3;class yy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vy(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Oh(e)){const i=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(We(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gy&&this.cachedEventUids.clear(),this.cachedEventUids.has(bl(e))}saveEventToCache(e){this.cachedEventUids.add(bl(e)),this.lastProcessedEventTime=Date.now()}}function bl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Oh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vy(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Oh(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _y(n,e={}){return yt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,by=/^https?/;async function Ty(n){if(n.config.emulator)return;const{authorizedDomains:e}=await _y(n);for(const t of e)try{if(Ey(t))return}catch{}je(n,"unauthorized-domain")}function Ey(n){const e=To(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===s}if(!by.test(t))return!1;if(wy.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Iy=new Hs(3e4,6e4);function Tl(){const n=nt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Sy(n){return new Promise((e,t)=>{var i,r,a;function s(){Tl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tl(),t(We(n,"network-request-failed"))},timeout:Iy.get()})}if((r=(i=nt().gapi)==null?void 0:i.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((a=nt().gapi)!=null&&a.load)s();else{const c=mg("iframefcb");return nt()[c]=()=>{gapi.load?s():t(We(n,"network-request-failed"))},mh(`${pg()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Ai=null,e})}let Ai=null;function Ay(n){return Ai=Ai||Sy(n),Ai}/**
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
 */const ky=new Hs(5e3,15e3),Cy="__/auth/iframe",Ry="emulator/auth/iframe",Py={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Dy(n){const e=n.config;F(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?sa(e,Ry):`https://${n.config.authDomain}/${Cy}`,s={apiKey:e.apiKey,appName:n.name,v:Hn},i=xy.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${qs(s).slice(1)}`}async function Ly(n){const e=await Ay(n),t=nt().gapi;return F(t,n,"internal-error"),e.open({where:document.body,url:Dy(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Py,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const a=We(n,"network-request-failed"),c=nt().setTimeout(()=>{r(a)},ky.get());function u(){nt().clearTimeout(c),i(s)}s.ping(u).then(u,()=>{r(a)})}))}/**
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
 */const Ny={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Oy=500,My=600,Vy="_blank",$y="http://localhost";class El{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Fy(n,e,t,s=Oy,i=My){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const u={...Ny,width:s.toString(),height:i.toString(),top:r,left:a},f=Se().toLowerCase();t&&(c=ch(f)?Vy:t),oh(f)&&(e=e||$y,u.scrollbars="yes");const g=Object.entries(u).reduce((I,[R,N])=>`${I}${R}=${N},`,"");if(rg(f)&&c!=="_self")return Uy(e||"",c),new El(null);const w=window.open(e||"",c,g);F(w,n,"popup-blocked");try{w.focus()}catch{}return new El(w)}function Uy(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const jy="__/auth/handler",By="emulator/auth/handler",qy=encodeURIComponent("fac");async function Il(n,e,t,s,i,r){F(n.config.authDomain,n,"auth-domain-config-required"),F(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Hn,eventId:i};if(e instanceof or){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Sp(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,w]of Object.entries({}))a[g]=w}if(e instanceof Gn){const g=e.getScopes().filter(w=>w!=="");g.length>0&&(a.scopes=g.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const g of Object.keys(c))c[g]===void 0&&delete c[g];const u=await n._getAppCheckToken(),f=u?`#${qy}=${encodeURIComponent(u)}`:"";return`${Hy(n)}?${qs(c).slice(1)}${f}`}function Hy({config:n}){return n.emulator?sa(n,By):`https://${n.authDomain}/${jy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro="webStorageSupport";class zy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ih,this._completeRedirectFn=Nh,this._overrideRedirectResult=fy}async _openPopup(e,t,s,i){var a;ft((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const r=await Il(e,t,s,To(),i);return Fy(e,r,ca())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await Il(e,t,s,To(),i);return Qg(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(ft(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await Ly(e),s=new yy(e);return t.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ro,{type:ro},i=>{var a;const r=(a=i==null?void 0:i[0])==null?void 0:a[ro];r!==void 0&&t(!!r),je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ty(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return fh()||ah()||ra()}}const Gy=zy;var Sl="@firebase/auth",Al="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Qy(n){Nn(new un("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=s.options;F(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ph(n)},f=new hg(s,i,r,u);return bg(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Nn(new un("auth-internal",e=>{const t=at(e.getProvider("auth").getImmediate());return(s=>new Ky(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(Sl,Al,Wy(n)),Ot(Sl,Al,"esm2020")}/**
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
 */const Jy=300,Yy=qu("authIdTokenMaxAge")||Jy;let kl=null;const Xy=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Yy)return;const i=t==null?void 0:t.token;kl!==i&&(kl=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Zy(n=Qu()){const e=ea(n,"auth");if(e.isInitialized())return e.getImmediate();const t=wg(n,{popupRedirectResolver:Gy,persistence:[iy,Gg,Ih]}),s=qu("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const a=Xy(r.toString());jg(t,a,()=>a(t.currentUser)),Ug(t,c=>a(c))}}const i=ju("auth");return i&&Tg(t,`http://${i}`),t}function ev(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}dg({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=We("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",ev().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Qy("Browser");const tv={apiKey:"AIzaSyAFURz8fEGSTameAW5YvBKWpr2LXv9Ang0",authDomain:"family-pantry-c65d6.firebaseapp.com",projectId:"family-pantry-c65d6",storageBucket:"family-pantry-c65d6.firebasestorage.app",messagingSenderId:"710701847077",appId:"1:710701847077:web:407a8937330ad2ebcfe5cc"},Mh=Wu(tv),Be=Zy(Mh);window._firebaseAuth=Be;const Cl=new lt,zi=new As("apple.com");zi.addScope("email");zi.addScope("name");let ha=null;const ki=[];function nv(n){return ki.push(n),n(ha),()=>{const e=ki.indexOf(n);e!==-1&&ki.splice(e,1)}}function sv(n){ha=n,ki.forEach(e=>e(n))}Bg(Be,n=>{sv(n||null)});my(Be).catch(n=>{n.code!=="auth/redirect-cancelled-by-user"&&console.error("Redirect sign-in error:",n)});async function iv(){try{return(await Ph(Be,Cl)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await Lh(Be,Cl),null;throw n}}async function rv(){try{return(await Ph(Be,zi)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await Lh(Be,zi),null;throw n}}async function ov(n,e){return(await Vg(Be,n,e)).user}async function av(n,e,t){const s=await Mg(Be,n,e);return t&&await Fg(s.user,{displayName:t}),s.user}async function cv(){await qg(Be)}async function Vh(){return Be.currentUser?Be.currentUser.getIdToken():null}function xe(){return ha}async function lr(n,e,t){const s={"Content-Type":"application/json"},i=await Vh();i&&(s.Authorization=`Bearer ${i}`);const r=await fetch("/api/db",{method:"POST",headers:s,body:JSON.stringify({op:n,path:e,data:t})});if(!(r.headers.get("content-type")||"").includes("application/json"))throw new Error(`/api/db non-JSON response (status ${r.status}) for ${n} ${e}`);return r.json()}async function Ve(n){try{return(await lr("list",n)).docs||[]}catch(e){return console.warn("dbList:",n,e.message),[]}}async function X(n,e){return lr("set",n,e)}async function Kt(n){return lr("delete",n)}async function de(n){try{return(await lr("get",n)).doc||null}catch{return null}}function $h(){return Math.random().toString(36).slice(2,8).toUpperCase()}async function Ao(n){var t;const e={name:n.displayName||((t=n.email)==null?void 0:t.split("@")[0])||"User",email:n.email||"",createdAt:new Date().toISOString(),householdIds:[]};return await X(`users/${n.uid}`,e),e}async function Fh(n,e){var a;const t=xe(),s=n,i=$h(),r={name:e||"My Kitchen",ownerUid:n,members:[{uid:n,name:(t==null?void 0:t.displayName)||((a=t==null?void 0:t.email)==null?void 0:a.split("@")[0])||"Owner",role:"owner"}],memberUids:[n],inviteCode:i,createdAt:new Date().toISOString()};try{await X(`households/${s}`,r),await X(`household_codes/${i}`,{householdId:s})}catch(c){console.error(`[createHousehold] FAILED to write households/${s}:`,c)}return{hid:s,...r}}async function lv(n){const e=await de(`household_codes/${n.toUpperCase()}`);return(e==null?void 0:e.householdId)||null}async function Uh(n,e){var c;const t=await lv(n);if(!t)return null;const s=await de(`households/${t}`);if(!s)return null;const i=s.members||[],r=s.memberUids||i.map(u=>u.uid);i.find(u=>u.uid===e.uid)||(i.push({uid:e.uid,name:e.displayName||((c=e.email)==null?void 0:c.split("@")[0])||"Member",role:"member"}),r.includes(e.uid)||r.push(e.uid),await X(`households/${t}`,{...s,members:i,memberUids:r,id:void 0}));const a=await de(`users/${e.uid}`);if(a){const u=a.householdIds||[];u.includes(t)||(u.push(t),await X(`users/${e.uid}`,{...a,householdIds:u,id:void 0}))}return t}async function uv(n){const e=await de(`households/${n}`);if(!e)return null;if(e.inviteCode)try{await Kt(`household_codes/${e.inviteCode}`)}catch{}const t=$h();return await X(`household_codes/${t}`,{householdId:n}),await X(`households/${n}`,{...e,inviteCode:t,id:void 0}),t}async function hv(n,e){const t=await de(`households/${n}`);if(!t)return;const s=(t.members||[]).filter(r=>r.uid!==e),i=(t.memberUids||[]).filter(r=>r!==e);await X(`households/${n}`,{...t,members:s,memberUids:i,id:void 0});try{const r=await de(`users/${e}`);if(r){const a=(r.householdIds||[]).filter(c=>c!==n);await X(`users/${e}`,{...r,householdIds:a,id:void 0})}}catch{}}async function Rl(n,e){const t=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog"];for(const s of t){const i=await Ve(`households/${n}/${s}`);for(const r of i){const a=r.id,c={...r};delete c.id,await X(`households/${e}/${s}/${a}`,c)}}}async function dv(n){var u,f;const e=n.uid;console.log(`[resolveHousehold] ENTER — uid=${e}`);const t=await de(`users/${e}`);if(console.log("[resolveHousehold] userDoc=",t),t){const g=(u=t.householdIds)!=null&&u.length?t.householdIds[0]:e;console.log(`[resolveHousehold] RETURNING USER — hid=${g}, householdIds=`,t.householdIds);const w=localStorage.getItem("ks-h");return console.log(`[resolveHousehold] RETURNING USER — ks-h="${w}", hid="${g}", uid="${e}"`),console.log(`[resolveHousehold] RETURNING USER — migration condition: oldHid=${!!w}, oldHid!==hid=${w!==g}, oldHid!==uid=${w!==e}`),w&&w!==g&&w!==e?(console.log(`[resolveHousehold] LATE MIGRATION TRIGGERED: ${w} → ${g}`),await Rl(w,g),localStorage.removeItem("ks-h"),console.log("[resolveHousehold] Late migration DONE, ks-h removed")):console.log("[resolveHousehold] RETURNING USER — NO migration needed"),g}console.log("[resolveHousehold] FIRST-TIME LOGIN — no userDoc found");const s=localStorage.getItem("ks-h"),i=s&&s!==e;console.log(`[resolveHousehold] FIRST-TIME — ks-h="${s}", hasOldData=${i}`);const r=((f=d.cfg)==null?void 0:f.name)||"My Kitchen";console.log(`[resolveHousehold] FIRST-TIME — creating household, cfgName="${r}"`),await Fh(e,i?r:"My Kitchen"),i&&(console.log(`[resolveHousehold] FIRST-TIME MIGRATION: ${s} → ${e}`),await Rl(s,e),console.log("[resolveHousehold] FIRST-TIME MIGRATION DONE"));const a=await Ao(n);a.householdIds=[e],await X(`users/${e}`,a),console.log("[resolveHousehold] User profile created & saved"),localStorage.removeItem("ks-h");const c=Pe("ks-hhs");if(c){const g=c.filter(w=>w!==s);g.includes(e)||g.push(e),localStorage.setItem("ks-hhs",JSON.stringify(g))}return console.log(`[resolveHousehold] EXIT — returning uid=${e}`),e}async function dn(n,e){e?(d.mp[n]=e,await X(`households/${d.hid}/mealplan/${n}`,{date:n,meal:e})):(delete d.mp[n],await Kt(`households/${d.hid}/mealplan/${n}`))}async function ur(){await X(`households/${d.hid}/settings/config`,d.cfg)}async function jh(n,e){const t={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:e||ko(),loggedAt:new Date().toISOString()};d.cookLog.unshift(t),d.cookLog.length>200&&(d.cookLog=d.cookLog.slice(0,200)),await X(`households/${d.hid}/cooklog/${t.id}`,t)}async function fv(n){if(d.wasteLog.find(t=>t.name===n&&t.date===ko()))return;const e={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:ko(),loggedAt:new Date().toISOString()};d.wasteLog.unshift(e),d.wasteLog.length>100&&(d.wasteLog=d.wasteLog.slice(0,100)),await X(`households/${d.hid}/wastelog/${e.id}`,e)}async function pv(){try{try{const r=await de(`households/${d.hid}`);r&&r.inviteCode&&(await de(`household_codes/${r.inviteCode}`)||(await X(`household_codes/${r.inviteCode}`,{householdId:d.hid}),console.log(`[backfill] Created household_codes/${r.inviteCode} for household ${d.hid}`)))}catch(r){console.warn("[backfill] household_codes backfill skipped:",r.message)}const e=(await Ve(`households/${d.hid}/settings`)).find(r=>r.id==="config");if(e)d.cfg={...Mi,...e};else{const r=Pe("ks-c");d.cfg={...Mi,...r||{}},await ur(),r&&localStorage.removeItem("ks-c")}const t=await Ve(`households/${d.hid}/mealplan`);if(d.mp={},t.forEach(r=>{r.date&&r.meal&&(d.mp[r.date]=r.meal)}),!t.length){const r=Pe("ks-m");if(r&&Object.keys(r).length){d.mp=r;for(const[a,c]of Object.entries(r))await dn(a,c);localStorage.removeItem("ks-m")}}const s=await Ve(`households/${d.hid}/cooklog`);if(s.length)d.cookLog=s.sort((r,a)=>new Date(a.loggedAt||a.date||0)-new Date(r.loggedAt||r.date||0));else{const r=Pe("ks-cooklog");if(r&&r.length){d.cookLog=r.map((a,c)=>({id:a.id||(Date.now()-c).toString(36),name:a.name,date:a.date,loggedAt:a.loggedAt||new Date().toISOString()}));for(const a of d.cookLog)await X(`households/${d.hid}/cooklog/${a.id}`,a);localStorage.removeItem("ks-cooklog")}}const i=await Ve(`households/${d.hid}/wastelog`);if(i.length)d.wasteLog=i.sort((r,a)=>new Date(a.loggedAt||a.date||0)-new Date(r.loggedAt||r.date||0));else{const r=Pe("ks-waste");if(r&&r.length){d.wasteLog=r.map((a,c)=>({id:a.id||(Date.now()-c).toString(36),name:a.name,date:a.date,loggedAt:a.loggedAt||new Date().toISOString()}));for(const a of d.wasteLog)await X(`households/${d.hid}/wastelog/${a.id}`,a);localStorage.removeItem("ks-waste")}}}catch(n){console.error("loadFirestoreData error:",n)}}let ks=0;function Kn(){ks++,ks===1&&window._pollIntervalId&&(clearInterval(window._pollIntervalId),window._pollIntervalId=null)}function Wn(){ks--,ks<=0&&(ks=0,window._pollFn&&!window._pollIntervalId&&(window._pollFn(),window._pollIntervalId=setInterval(window._pollFn,3e4)))}const O={renderAll:null,renderSum:null,renderRecs:null,renderShop:null};function ve(n){var s;const e=document.getElementById("sdot"),t=document.getElementById("slb");e&&(e.className="sdot "+n),t&&(t.textContent=n==="synced"?"🏠 "+(((s=d.cfg)==null?void 0:s.name)||d.hid):n==="syncing"?"Syncing…":"Sync error")}async function qe(n){var e,t;ve("syncing"),Kn();try{const s=!d.inv.find(i=>i.id===n.id);d.inv=[...d.inv.filter(i=>i.id!==n.id),n],(e=O.renderAll)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await X(`households/${d.hid}/inventory/${n.id}`,n),s&&fa("added",n.name+" to inventory"),ve("synced")}catch(s){console.error(s),ve("error")}finally{Wn()}}async function da(n){var e,t;ve("syncing"),Kn();try{const s=d.inv.find(i=>i.id===n);d.inv=d.inv.filter(i=>i.id!==n),(e=O.renderAll)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await Kt(`households/${d.hid}/inventory/${n}`),s&&fa("removed",s.name+" from inventory"),ve("synced")}catch(s){console.error(s),ve("error")}finally{Wn()}}async function Ft(n){var e,t;Kn();try{d.recs=[...d.recs.filter(s=>s.id!==n.id),n],(e=O.renderRecs)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await X(`households/${d.hid}/recipes/${n.id}`,n)}catch(s){console.error(s)}finally{Wn()}}async function mv(n){var e,t;Kn();try{d.recs=d.recs.filter(s=>s.id!==n),(e=O.renderRecs)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await Kt(`households/${d.hid}/recipes/${n}`)}catch(s){console.error(s)}finally{Wn()}}async function He(n){var e,t;Kn();try{const s=!d.shop.find(i=>i.id===n.id);d.shop=[...d.shop.filter(i=>i.id!==n.id),n],(e=O.renderShop)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await X(`households/${d.hid}/shopping/${n.id}`,n),s&&fa("added",n.name+" to shopping list")}catch(s){console.error(s)}finally{Wn()}}async function hr(n){var e,t;Kn();try{d.shop=d.shop.filter(s=>s.id!==n),(e=O.renderShop)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await Kt(`households/${d.hid}/shopping/${n}`)}catch(s){console.error(s)}finally{Wn()}}async function gv(n,e,t){var r;const s=n.id,i={title:n.name,ingredients:n.description||"",steps:n.steps||"",tags:n.tags||[],cuisine:n.cuisine||"",authorName:e||"Anonymous",authorUid:((r=xe())==null?void 0:r.uid)||"",householdId:t||d.hid,createdAt:new Date().toISOString(),likes:0};return await X(`public_recipes/${s}`,i),{id:s,...i}}async function yv(n){await Kt(`public_recipes/${n}`)}async function vv(){return Ve("public_recipes")}async function _v(n,e){var a;const t=(a=xe())==null?void 0:a.uid;if(!t)return;const s=`public_recipes/${n}/likes/${t}`;e?await Kt(s):await X(s,{likedAt:new Date().toISOString()});const i=await Ve(`public_recipes/${n}/likes`),r=await de(`public_recipes/${n}`);r&&await X(`public_recipes/${n}`,{...r,likes:i.length,id:void 0})}async function wv(n,e,t){var a;const s=(a=xe())==null?void 0:a.uid;if(!s||!e.trim())return;const i="cmt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),r={text:e.trim(),authorName:t,authorUid:s,createdAt:new Date().toISOString()};return await X(`public_recipes/${n}/comments/${i}`,r),{id:i,...r}}async function bv(n){return Ve(`public_recipes/${n}/comments`)}async function Tv(n){var s;const e=(s=xe())==null?void 0:s.uid;return e?!!await de(`public_recipes/${n}/likes/${e}`):!1}async function Ev(n){const t={id:"rec-"+Date.now(),name:n.title,description:n.ingredients||"",notes:n.steps||"",tags:n.tags||[],rating:0,favorited:!1,source:"Community",sourceUrl:null,cookCount:0,savedAt:new Date().toLocaleDateString()};return await Ft(t),t}async function fa(n,e){if(!d.hid||!e)return;const t=localStorage.getItem("ks-who")||"Someone",s="act-"+Date.now().toString(36)+Math.random().toString(36).slice(2),i={memberName:t,action:n,itemName:e,timestamp:new Date().toISOString()};try{await X(`households/${d.hid}/activity/${s}`,i),Iv()}catch{}}async function Iv(){try{const n=await Ve(`households/${d.hid}/activity`),e=Date.now()-10080*60*1e3;for(const t of n)t.timestamp&&new Date(t.timestamp).getTime()<e&&await Kt(`households/${d.hid}/activity/${t.id}`)}catch{}}async function Sv(){try{return(await Ve(`households/${d.hid}/activity`)).sort((e,t)=>new Date(t.timestamp||0)-new Date(e.timestamp||0)).slice(0,10)}catch{return[]}}function ko(){return new Date().toISOString().split("T")[0]}function p(n){return document.getElementById(n)}function Pt(){return new Date().toISOString().split("T")[0]}function Qn(){const n=new Date;n.setHours(0,0,0,0);const e=new Date(n);return e.setDate(n.getDate()-n.getDay()),Array.from({length:7},(t,s)=>{const i=new Date(e);return i.setDate(e.getDate()+s),i})}function Av(){const n=new Date;return n.setDate(n.getDate()+1),n.toISOString().split("T")[0]}function it(n){if(!n)return null;const e=new Date;e.setHours(0,0,0,0);const t=new Date(n+"T00:00:00"),s=Math.round((t-e)/864e5);return s<0?{c:"expired",l:"Expired"}:s===0?{c:"expiring",l:"Expires today"}:s<=7?{c:"expiring",l:`Expires in ${s}d`}:{c:"ok",l:t.toLocaleDateString("en-US",{month:"short",day:"numeric"})}}function pa(n){return{fridge:"🌡 Fridge",freezer:"🧊 Freezer",pantry:"🥫 Pantry"}[n]||n}const ma={Produce:"🥦",Proteins:"🍗",Dairy:"🧀",Grains:"🌾",Condiments:"🧴",Snacks:"🍿",Beverages:"🥤",Frozen:"❄️",General:"📦",Imported:"📥"};function Os(n){const e=(n.name||"").toLowerCase(),t=(n.category||"").toLowerCase();return t.includes("produce")||t.includes("vegetable")||t.includes("fruit")||e.match(/apple|banana|broccoli|carrot|celery|cabbage|tomato|onion|garlic|jalap|spinach|mushroom|squash|lettuce|cucumber|pepper/)?"Produce":t.includes("protein")||t.includes("meat")||t.includes("seafood")||t.includes("poultry")||e.match(/chicken|beef|lamb|turkey|salmon|cod|tuna|fish|steak|pork|shrimp/)?"Proteins":t.includes("dairy")||t.includes("egg")||e.match(/egg|butter|cheese|milk|cream|yogurt|ghee/)?"Dairy":t.includes("grain")||t.includes("bread")||t.includes("pasta")||e.match(/rice|pasta|bread|flour|oat|cereal|grain|noodle|tortilla/)?"Grains":t.includes("condiment")||t.includes("sauce")||e.match(/sauce|ketchup|mustard|oil|vinegar|salt|pepper|spice|herb|seasoning|mayo/)?"Condiments":n.location==="freezer"?"Frozen":"General"}function kv(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/^[-•]\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/\n/g,"<br>")}let oo=null;function D(n){const e=p("notif");e&&(e.textContent=n,e.style.display="block",e.style.animation="none",e.offsetWidth,e.style.animation="fn 2.5s ease forwards",oo&&clearTimeout(oo),oo=setTimeout(()=>e.style.display="none",2500))}function vt(n){var e;(e=p("ov-"+n))==null||e.classList.add("active")}function Ae(n){var e;(e=p("ov-"+n))==null||e.classList.remove("active")}function Cs(n,e){const t=p(n);t&&t.querySelectorAll(".star").forEach((s,i)=>{s.textContent=i<e?"★":"☆",s.classList.toggle("on",i<e)})}function Bh(n){const e=n.toLowerCase();return/frozen|ice cream|pizza|nugget|waffle|tater|edamame|popsicle/.test(e)?"freezer":/milk|cheese|yogurt|butter|cream|egg|meat|chicken|beef|pork|fish|salmon|shrimp|tofu|deli|bacon|sausage|produce|lettuce|spinach|berry|berries|fruit|vegetable|carrot|broccoli|juice/.test(e)?"fridge":"pantry"}const Cv={Produce:["apple","banana","carrot","celery","onion","garlic","tomato","lettuce","cucumber","pepper","broccoli","spinach","mushroom","lemon","lime","herb","cabbage","squash","jalap","avocado","potato","ginger"],"Meat & Fish":["chicken","beef","lamb","turkey","salmon","cod","tuna","fish","steak","shrimp","pork","bacon","sausage","ground"],"Dairy & Eggs":["egg","butter","cheese","milk","cream","yogurt","ghee","kefir"],Frozen:["frozen","ice cream","pizza","nugget","waffle","edamame","okra","lima","broccoli floret"],Pantry:["rice","pasta","flour","oil","vinegar","sauce","spice","salt","pepper","sugar","honey","oat","bread","can","bean","lentil","chickpea","stock","broth"],"Snacks & Drinks":["chip","cracker","cookie","juice","soda","water","tea","coffee","snack","nut","seed"]};function Rv(n){const e=n.toLowerCase();for(const[t,s]of Object.entries(Cv))if(s.some(i=>e.includes(i)))return t;return"Other"}var Pl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mt,qh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function _(){}_.prototype=y.prototype,b.F=y.prototype,b.prototype=new _,b.prototype.constructor=b,b.D=function(E,T,A){for(var v=Array(arguments.length-2),De=2;De<arguments.length;De++)v[De-2]=arguments[De];return y.prototype[T].apply(E,v)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,y,_){_||(_=0);const E=Array(16);if(typeof y=="string")for(var T=0;T<16;++T)E[T]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(T=0;T<16;++T)E[T]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=b.g[0],_=b.g[1],T=b.g[2];let A=b.g[3],v;v=y+(A^_&(T^A))+E[0]+3614090360&4294967295,y=_+(v<<7&4294967295|v>>>25),v=A+(T^y&(_^T))+E[1]+3905402710&4294967295,A=y+(v<<12&4294967295|v>>>20),v=T+(_^A&(y^_))+E[2]+606105819&4294967295,T=A+(v<<17&4294967295|v>>>15),v=_+(y^T&(A^y))+E[3]+3250441966&4294967295,_=T+(v<<22&4294967295|v>>>10),v=y+(A^_&(T^A))+E[4]+4118548399&4294967295,y=_+(v<<7&4294967295|v>>>25),v=A+(T^y&(_^T))+E[5]+1200080426&4294967295,A=y+(v<<12&4294967295|v>>>20),v=T+(_^A&(y^_))+E[6]+2821735955&4294967295,T=A+(v<<17&4294967295|v>>>15),v=_+(y^T&(A^y))+E[7]+4249261313&4294967295,_=T+(v<<22&4294967295|v>>>10),v=y+(A^_&(T^A))+E[8]+1770035416&4294967295,y=_+(v<<7&4294967295|v>>>25),v=A+(T^y&(_^T))+E[9]+2336552879&4294967295,A=y+(v<<12&4294967295|v>>>20),v=T+(_^A&(y^_))+E[10]+4294925233&4294967295,T=A+(v<<17&4294967295|v>>>15),v=_+(y^T&(A^y))+E[11]+2304563134&4294967295,_=T+(v<<22&4294967295|v>>>10),v=y+(A^_&(T^A))+E[12]+1804603682&4294967295,y=_+(v<<7&4294967295|v>>>25),v=A+(T^y&(_^T))+E[13]+4254626195&4294967295,A=y+(v<<12&4294967295|v>>>20),v=T+(_^A&(y^_))+E[14]+2792965006&4294967295,T=A+(v<<17&4294967295|v>>>15),v=_+(y^T&(A^y))+E[15]+1236535329&4294967295,_=T+(v<<22&4294967295|v>>>10),v=y+(T^A&(_^T))+E[1]+4129170786&4294967295,y=_+(v<<5&4294967295|v>>>27),v=A+(_^T&(y^_))+E[6]+3225465664&4294967295,A=y+(v<<9&4294967295|v>>>23),v=T+(y^_&(A^y))+E[11]+643717713&4294967295,T=A+(v<<14&4294967295|v>>>18),v=_+(A^y&(T^A))+E[0]+3921069994&4294967295,_=T+(v<<20&4294967295|v>>>12),v=y+(T^A&(_^T))+E[5]+3593408605&4294967295,y=_+(v<<5&4294967295|v>>>27),v=A+(_^T&(y^_))+E[10]+38016083&4294967295,A=y+(v<<9&4294967295|v>>>23),v=T+(y^_&(A^y))+E[15]+3634488961&4294967295,T=A+(v<<14&4294967295|v>>>18),v=_+(A^y&(T^A))+E[4]+3889429448&4294967295,_=T+(v<<20&4294967295|v>>>12),v=y+(T^A&(_^T))+E[9]+568446438&4294967295,y=_+(v<<5&4294967295|v>>>27),v=A+(_^T&(y^_))+E[14]+3275163606&4294967295,A=y+(v<<9&4294967295|v>>>23),v=T+(y^_&(A^y))+E[3]+4107603335&4294967295,T=A+(v<<14&4294967295|v>>>18),v=_+(A^y&(T^A))+E[8]+1163531501&4294967295,_=T+(v<<20&4294967295|v>>>12),v=y+(T^A&(_^T))+E[13]+2850285829&4294967295,y=_+(v<<5&4294967295|v>>>27),v=A+(_^T&(y^_))+E[2]+4243563512&4294967295,A=y+(v<<9&4294967295|v>>>23),v=T+(y^_&(A^y))+E[7]+1735328473&4294967295,T=A+(v<<14&4294967295|v>>>18),v=_+(A^y&(T^A))+E[12]+2368359562&4294967295,_=T+(v<<20&4294967295|v>>>12),v=y+(_^T^A)+E[5]+4294588738&4294967295,y=_+(v<<4&4294967295|v>>>28),v=A+(y^_^T)+E[8]+2272392833&4294967295,A=y+(v<<11&4294967295|v>>>21),v=T+(A^y^_)+E[11]+1839030562&4294967295,T=A+(v<<16&4294967295|v>>>16),v=_+(T^A^y)+E[14]+4259657740&4294967295,_=T+(v<<23&4294967295|v>>>9),v=y+(_^T^A)+E[1]+2763975236&4294967295,y=_+(v<<4&4294967295|v>>>28),v=A+(y^_^T)+E[4]+1272893353&4294967295,A=y+(v<<11&4294967295|v>>>21),v=T+(A^y^_)+E[7]+4139469664&4294967295,T=A+(v<<16&4294967295|v>>>16),v=_+(T^A^y)+E[10]+3200236656&4294967295,_=T+(v<<23&4294967295|v>>>9),v=y+(_^T^A)+E[13]+681279174&4294967295,y=_+(v<<4&4294967295|v>>>28),v=A+(y^_^T)+E[0]+3936430074&4294967295,A=y+(v<<11&4294967295|v>>>21),v=T+(A^y^_)+E[3]+3572445317&4294967295,T=A+(v<<16&4294967295|v>>>16),v=_+(T^A^y)+E[6]+76029189&4294967295,_=T+(v<<23&4294967295|v>>>9),v=y+(_^T^A)+E[9]+3654602809&4294967295,y=_+(v<<4&4294967295|v>>>28),v=A+(y^_^T)+E[12]+3873151461&4294967295,A=y+(v<<11&4294967295|v>>>21),v=T+(A^y^_)+E[15]+530742520&4294967295,T=A+(v<<16&4294967295|v>>>16),v=_+(T^A^y)+E[2]+3299628645&4294967295,_=T+(v<<23&4294967295|v>>>9),v=y+(T^(_|~A))+E[0]+4096336452&4294967295,y=_+(v<<6&4294967295|v>>>26),v=A+(_^(y|~T))+E[7]+1126891415&4294967295,A=y+(v<<10&4294967295|v>>>22),v=T+(y^(A|~_))+E[14]+2878612391&4294967295,T=A+(v<<15&4294967295|v>>>17),v=_+(A^(T|~y))+E[5]+4237533241&4294967295,_=T+(v<<21&4294967295|v>>>11),v=y+(T^(_|~A))+E[12]+1700485571&4294967295,y=_+(v<<6&4294967295|v>>>26),v=A+(_^(y|~T))+E[3]+2399980690&4294967295,A=y+(v<<10&4294967295|v>>>22),v=T+(y^(A|~_))+E[10]+4293915773&4294967295,T=A+(v<<15&4294967295|v>>>17),v=_+(A^(T|~y))+E[1]+2240044497&4294967295,_=T+(v<<21&4294967295|v>>>11),v=y+(T^(_|~A))+E[8]+1873313359&4294967295,y=_+(v<<6&4294967295|v>>>26),v=A+(_^(y|~T))+E[15]+4264355552&4294967295,A=y+(v<<10&4294967295|v>>>22),v=T+(y^(A|~_))+E[6]+2734768916&4294967295,T=A+(v<<15&4294967295|v>>>17),v=_+(A^(T|~y))+E[13]+1309151649&4294967295,_=T+(v<<21&4294967295|v>>>11),v=y+(T^(_|~A))+E[4]+4149444226&4294967295,y=_+(v<<6&4294967295|v>>>26),v=A+(_^(y|~T))+E[11]+3174756917&4294967295,A=y+(v<<10&4294967295|v>>>22),v=T+(y^(A|~_))+E[2]+718787259&4294967295,T=A+(v<<15&4294967295|v>>>17),v=_+(A^(T|~y))+E[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(T+(v<<21&4294967295|v>>>11))&4294967295,b.g[2]=b.g[2]+T&4294967295,b.g[3]=b.g[3]+A&4294967295}s.prototype.v=function(b,y){y===void 0&&(y=b.length);const _=y-this.blockSize,E=this.C;let T=this.h,A=0;for(;A<y;){if(T==0)for(;A<=_;)i(this,b,A),A+=this.blockSize;if(typeof b=="string"){for(;A<y;)if(E[T++]=b.charCodeAt(A++),T==this.blockSize){i(this,E),T=0;break}}else for(;A<y;)if(E[T++]=b[A++],T==this.blockSize){i(this,E),T=0;break}}this.h=T,this.o+=y},s.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;y=this.o*8;for(var _=b.length-8;_<b.length;++_)b[_]=y&255,y/=256;for(this.v(b),b=Array(16),y=0,_=0;_<4;++_)for(let E=0;E<32;E+=8)b[y++]=this.g[_]>>>E&255;return b};function r(b,y){var _=c;return Object.prototype.hasOwnProperty.call(_,b)?_[b]:_[b]=y(b)}function a(b,y){this.h=y;const _=[];let E=!0;for(let T=b.length-1;T>=0;T--){const A=b[T]|0;E&&A==y||(_[T]=A,E=!1)}this.g=_}var c={};function u(b){return-128<=b&&b<128?r(b,function(y){return new a([y|0],y<0?-1:0)}):new a([b|0],b<0?-1:0)}function f(b){if(isNaN(b)||!isFinite(b))return w;if(b<0)return M(f(-b));const y=[];let _=1;for(let E=0;b>=_;E++)y[E]=b/_|0,_*=4294967296;return new a(y,0)}function g(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return M(g(b.substring(1),y));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=f(Math.pow(y,8));let E=w;for(let A=0;A<b.length;A+=8){var T=Math.min(8,b.length-A);const v=parseInt(b.substring(A,A+T),y);T<8?(T=f(Math.pow(y,T)),E=E.j(T).add(f(v))):(E=E.j(_),E=E.add(f(v)))}return E}var w=u(0),I=u(1),R=u(16777216);n=a.prototype,n.m=function(){if($(this))return-M(this).m();let b=0,y=1;for(let _=0;_<this.g.length;_++){const E=this.i(_);b+=(E>=0?E:4294967296+E)*y,y*=4294967296}return b},n.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(N(this))return"0";if($(this))return"-"+M(this).toString(b);const y=f(Math.pow(b,6));var _=this;let E="";for(;;){const T=G(_,y).g;_=Y(_,T.j(y));let A=((_.g.length>0?_.g[0]:_.h)>>>0).toString(b);if(_=T,N(_))return A+E;for(;A.length<6;)A="0"+A;E=A+E}},n.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function N(b){if(b.h!=0)return!1;for(let y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function $(b){return b.h==-1}n.l=function(b){return b=Y(this,b),$(b)?-1:N(b)?0:1};function M(b){const y=b.g.length,_=[];for(let E=0;E<y;E++)_[E]=~b.g[E];return new a(_,~b.h).add(I)}n.abs=function(){return $(this)?M(this):this},n.add=function(b){const y=Math.max(this.g.length,b.g.length),_=[];let E=0;for(let T=0;T<=y;T++){let A=E+(this.i(T)&65535)+(b.i(T)&65535),v=(A>>>16)+(this.i(T)>>>16)+(b.i(T)>>>16);E=v>>>16,A&=65535,v&=65535,_[T]=v<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function Y(b,y){return b.add(M(y))}n.j=function(b){if(N(this)||N(b))return w;if($(this))return $(b)?M(this).j(M(b)):M(M(this).j(b));if($(b))return M(this.j(M(b)));if(this.l(R)<0&&b.l(R)<0)return f(this.m()*b.m());const y=this.g.length+b.g.length,_=[];for(var E=0;E<2*y;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(let T=0;T<b.g.length;T++){const A=this.i(E)>>>16,v=this.i(E)&65535,De=b.i(T)>>>16,Wt=b.i(T)&65535;_[2*E+2*T]+=v*Wt,Z(_,2*E+2*T),_[2*E+2*T+1]+=A*Wt,Z(_,2*E+2*T+1),_[2*E+2*T+1]+=v*De,Z(_,2*E+2*T+1),_[2*E+2*T+2]+=A*De,Z(_,2*E+2*T+2)}for(b=0;b<y;b++)_[b]=_[2*b+1]<<16|_[2*b];for(b=y;b<2*y;b++)_[b]=0;return new a(_,0)};function Z(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function j(b,y){this.g=b,this.h=y}function G(b,y){if(N(y))throw Error("division by zero");if(N(b))return new j(w,w);if($(b))return y=G(M(b),y),new j(M(y.g),M(y.h));if($(y))return y=G(b,M(y)),new j(M(y.g),y.h);if(b.g.length>30){if($(b)||$(y))throw Error("slowDivide_ only works with positive integers.");for(var _=I,E=y;E.l(b)<=0;)_=ee(_),E=ee(E);var T=te(_,1),A=te(E,1);for(E=te(E,2),_=te(_,2);!N(E);){var v=A.add(E);v.l(b)<=0&&(T=T.add(_),A=v),E=te(E,1),_=te(_,1)}return y=Y(b,T.j(y)),new j(T,y)}for(T=w;b.l(y)>=0;){for(_=Math.max(1,Math.floor(b.m()/y.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),A=f(_),v=A.j(y);$(v)||v.l(b)>0;)_-=E,A=f(_),v=A.j(y);N(A)&&(A=I),T=T.add(A),b=Y(b,v)}return new j(T,b)}n.B=function(b){return G(this,b).h},n.and=function(b){const y=Math.max(this.g.length,b.g.length),_=[];for(let E=0;E<y;E++)_[E]=this.i(E)&b.i(E);return new a(_,this.h&b.h)},n.or=function(b){const y=Math.max(this.g.length,b.g.length),_=[];for(let E=0;E<y;E++)_[E]=this.i(E)|b.i(E);return new a(_,this.h|b.h)},n.xor=function(b){const y=Math.max(this.g.length,b.g.length),_=[];for(let E=0;E<y;E++)_[E]=this.i(E)^b.i(E);return new a(_,this.h^b.h)};function ee(b){const y=b.g.length+1,_=[];for(let E=0;E<y;E++)_[E]=b.i(E)<<1|b.i(E-1)>>>31;return new a(_,b.h)}function te(b,y){const _=y>>5;y%=32;const E=b.g.length-_,T=[];for(let A=0;A<E;A++)T[A]=y>0?b.i(A+_)>>>y|b.i(A+_+1)<<32-y:b.i(A+_);return new a(T,b.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,qh=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=g,Mt=a}).apply(typeof Pl<"u"?Pl:typeof self<"u"?self:typeof window<"u"?window:{});var gi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hh,ws,zh,Ci,Co,Gh,Kh,Wh;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof gi=="object"&&gi];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var s=t(this);function i(o,l){if(l)e:{var h=s;o=o.split(".");for(var m=0;m<o.length-1;m++){var S=o[m];if(!(S in h))break e;h=h[S]}o=o[o.length-1],m=h[o],l=l(m),l!=m&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}i("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(o){return o||function(l){var h=[],m;for(m in l)Object.prototype.hasOwnProperty.call(l,m)&&h.push([m,l[m]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},a=this||self;function c(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function u(o,l,h){return o.call.apply(o.bind,arguments)}function f(o,l,h){return f=u,f.apply(null,arguments)}function g(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function w(o,l){function h(){}h.prototype=l.prototype,o.Z=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(m,S,k){for(var P=Array(arguments.length-2),H=2;H<arguments.length;H++)P[H-2]=arguments[H];return l.prototype[S].apply(m,P)}}var I=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function R(o){const l=o.length;if(l>0){const h=Array(l);for(let m=0;m<l;m++)h[m]=o[m];return h}return[]}function N(o,l){for(let m=1;m<arguments.length;m++){const S=arguments[m];var h=typeof S;if(h=h!="object"?h:S?Array.isArray(S)?"array":h:"null",h=="array"||h=="object"&&typeof S.length=="number"){h=o.length||0;const k=S.length||0;o.length=h+k;for(let P=0;P<k;P++)o[h+P]=S[P]}else o.push(S)}}class ${constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function M(o){a.setTimeout(()=>{throw o},0)}function Y(){var o=b;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class Z{constructor(){this.h=this.g=null}add(l,h){const m=j.get();m.set(l,h),this.h?this.h.next=m:this.g=m,this.h=m}}var j=new $(()=>new G,o=>o.reset());class G{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let ee,te=!1,b=new Z,y=()=>{const o=Promise.resolve(void 0);ee=()=>{o.then(_)}};function _(){for(var o;o=Y();){try{o.h.call(o.g)}catch(h){M(h)}var l=j;l.j(o),l.h<100&&(l.h++,o.next=l.g,l.g=o)}te=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,l),a.removeEventListener("test",h,l)}catch{}return o})();function v(o){return/^[\s\xa0]*$/.test(o)}function De(o,l){T.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,l)}w(De,T),De.prototype.init=function(o,l){const h=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget,l||(h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement)),this.relatedTarget=l,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&De.Z.h.call(this)},De.prototype.h=function(){De.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Wt="closure_listenable_"+(Math.random()*1e6|0),Tf=0;function Ef(o,l,h,m,S){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!m,this.ha=S,this.key=++Tf,this.da=this.fa=!1}function ei(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ti(o,l,h){for(const m in o)l.call(h,o[m],m,o)}function If(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function Ya(o){const l={};for(const h in o)l[h]=o[h];return l}const Xa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Za(o,l){let h,m;for(let S=1;S<arguments.length;S++){m=arguments[S];for(h in m)o[h]=m[h];for(let k=0;k<Xa.length;k++)h=Xa[k],Object.prototype.hasOwnProperty.call(m,h)&&(o[h]=m[h])}}function ni(o){this.src=o,this.g={},this.h=0}ni.prototype.add=function(o,l,h,m,S){const k=o.toString();o=this.g[k],o||(o=this.g[k]=[],this.h++);const P=Pr(o,l,m,S);return P>-1?(l=o[P],h||(l.fa=!1)):(l=new Ef(l,this.src,k,!!m,S),l.fa=h,o.push(l)),l};function Rr(o,l){const h=l.type;if(h in o.g){var m=o.g[h],S=Array.prototype.indexOf.call(m,l,void 0),k;(k=S>=0)&&Array.prototype.splice.call(m,S,1),k&&(ei(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Pr(o,l,h,m){for(let S=0;S<o.length;++S){const k=o[S];if(!k.da&&k.listener==l&&k.capture==!!h&&k.ha==m)return S}return-1}var xr="closure_lm_"+(Math.random()*1e6|0),Dr={};function ec(o,l,h,m,S){if(Array.isArray(l)){for(let k=0;k<l.length;k++)ec(o,l[k],h,m,S);return null}return h=sc(h),o&&o[Wt]?o.J(l,h,c(m)?!!m.capture:!1,S):Sf(o,l,h,!1,m,S)}function Sf(o,l,h,m,S,k){if(!l)throw Error("Invalid event type");const P=c(S)?!!S.capture:!!S;let H=Nr(o);if(H||(o[xr]=H=new ni(o)),h=H.add(l,h,m,P,k),h.proxy)return h;if(m=Af(),h.proxy=m,m.src=o,m.listener=h,o.addEventListener)A||(S=P),S===void 0&&(S=!1),o.addEventListener(l.toString(),m,S);else if(o.attachEvent)o.attachEvent(nc(l.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Af(){function o(h){return l.call(o.src,o.listener,h)}const l=kf;return o}function tc(o,l,h,m,S){if(Array.isArray(l))for(var k=0;k<l.length;k++)tc(o,l[k],h,m,S);else m=c(m)?!!m.capture:!!m,h=sc(h),o&&o[Wt]?(o=o.i,k=String(l).toString(),k in o.g&&(l=o.g[k],h=Pr(l,h,m,S),h>-1&&(ei(l[h]),Array.prototype.splice.call(l,h,1),l.length==0&&(delete o.g[k],o.h--)))):o&&(o=Nr(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Pr(l,h,m,S)),(h=o>-1?l[o]:null)&&Lr(h))}function Lr(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Wt])Rr(l.i,o);else{var h=o.type,m=o.proxy;l.removeEventListener?l.removeEventListener(h,m,o.capture):l.detachEvent?l.detachEvent(nc(h),m):l.addListener&&l.removeListener&&l.removeListener(m),(h=Nr(l))?(Rr(h,o),h.h==0&&(h.src=null,l[xr]=null)):ei(o)}}}function nc(o){return o in Dr?Dr[o]:Dr[o]="on"+o}function kf(o,l){if(o.da)o=!0;else{l=new De(l,this);const h=o.listener,m=o.ha||o.src;o.fa&&Lr(o),o=h.call(m,l)}return o}function Nr(o){return o=o[xr],o instanceof ni?o:null}var Or="__closure_events_fn_"+(Math.random()*1e9>>>0);function sc(o){return typeof o=="function"?o:(o[Or]||(o[Or]=function(l){return o.handleEvent(l)}),o[Or])}function be(){E.call(this),this.i=new ni(this),this.M=this,this.G=null}w(be,E),be.prototype[Wt]=!0,be.prototype.removeEventListener=function(o,l,h,m){tc(this,o,l,h,m)};function ke(o,l){var h,m=o.G;if(m)for(h=[];m;m=m.G)h.push(m);if(o=o.M,m=l.type||l,typeof l=="string")l=new T(l,o);else if(l instanceof T)l.target=l.target||o;else{var S=l;l=new T(m,o),Za(l,S)}S=!0;let k,P;if(h)for(P=h.length-1;P>=0;P--)k=l.g=h[P],S=si(k,m,!0,l)&&S;if(k=l.g=o,S=si(k,m,!0,l)&&S,S=si(k,m,!1,l)&&S,h)for(P=0;P<h.length;P++)k=l.g=h[P],S=si(k,m,!1,l)&&S}be.prototype.N=function(){if(be.Z.N.call(this),this.i){var o=this.i;for(const l in o.g){const h=o.g[l];for(let m=0;m<h.length;m++)ei(h[m]);delete o.g[l],o.h--}}this.G=null},be.prototype.J=function(o,l,h,m){return this.i.add(String(o),l,!1,h,m)},be.prototype.K=function(o,l,h,m){return this.i.add(String(o),l,!0,h,m)};function si(o,l,h,m){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();let S=!0;for(let k=0;k<l.length;++k){const P=l[k];if(P&&!P.da&&P.capture==h){const H=P.listener,fe=P.ha||P.src;P.fa&&Rr(o.i,P),S=H.call(fe,m)!==!1&&S}}return S&&!m.defaultPrevented}function Cf(o,l){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=f(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(o,l||0)}function ic(o){o.g=Cf(()=>{o.g=null,o.i&&(o.i=!1,ic(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Rf extends E{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:ic(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function es(o){E.call(this),this.h=o,this.g={}}w(es,E);var rc=[];function oc(o){ti(o.g,function(l,h){this.g.hasOwnProperty(h)&&Lr(l)},o),o.g={}}es.prototype.N=function(){es.Z.N.call(this),oc(this)},es.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Mr=a.JSON.stringify,Pf=a.JSON.parse,xf=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function ac(){}function cc(){}var ts={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Vr(){T.call(this,"d")}w(Vr,T);function $r(){T.call(this,"c")}w($r,T);var Qt={},lc=null;function ii(){return lc=lc||new be}Qt.Ia="serverreachability";function uc(o){T.call(this,Qt.Ia,o)}w(uc,T);function ns(o){const l=ii();ke(l,new uc(l))}Qt.STAT_EVENT="statevent";function hc(o,l){T.call(this,Qt.STAT_EVENT,o),this.stat=l}w(hc,T);function Ce(o){const l=ii();ke(l,new hc(l,o))}Qt.Ja="timingevent";function dc(o,l){T.call(this,Qt.Ja,o),this.size=l}w(dc,T);function ss(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},l)}function is(){this.g=!0}is.prototype.ua=function(){this.g=!1};function Df(o,l,h,m,S,k){o.info(function(){if(o.g)if(k){var P="",H=k.split("&");for(let ne=0;ne<H.length;ne++){var fe=H[ne].split("=");if(fe.length>1){const ge=fe[0];fe=fe[1];const Je=ge.split("_");P=Je.length>=2&&Je[1]=="type"?P+(ge+"="+fe+"&"):P+(ge+"=redacted&")}}}else P=null;else P=k;return"XMLHTTP REQ ("+m+") [attempt "+S+"]: "+l+`
`+h+`
`+P})}function Lf(o,l,h,m,S,k,P){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+S+"]: "+l+`
`+h+`
`+k+" "+P})}function yn(o,l,h,m){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Of(o,h)+(m?" "+m:"")})}function Nf(o,l){o.info(function(){return"TIMEOUT: "+l})}is.prototype.info=function(){};function Of(o,l){if(!o.g)return l;if(!l)return null;try{const k=JSON.parse(l);if(k){for(o=0;o<k.length;o++)if(Array.isArray(k[o])){var h=k[o];if(!(h.length<2)){var m=h[1];if(Array.isArray(m)&&!(m.length<1)){var S=m[0];if(S!="noop"&&S!="stop"&&S!="close")for(let P=1;P<m.length;P++)m[P]=""}}}}return Mr(k)}catch{return l}}var ri={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},fc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},pc;function Fr(){}w(Fr,ac),Fr.prototype.g=function(){return new XMLHttpRequest},pc=new Fr;function rs(o){return encodeURIComponent(String(o))}function Mf(o){var l=1;o=o.split(":");const h=[];for(;l>0&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function _t(o,l,h,m){this.j=o,this.i=l,this.l=h,this.S=m||1,this.V=new es(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new mc}function mc(){this.i=null,this.g="",this.h=!1}var gc={},Ur={};function jr(o,l,h){o.M=1,o.A=ai(Qe(l)),o.u=h,o.R=!0,yc(o,null)}function yc(o,l){o.F=Date.now(),oi(o),o.B=Qe(o.A);var h=o.B,m=o.S;Array.isArray(m)||(m=[String(m)]),Pc(h.i,"t",m),o.C=0,h=o.j.L,o.h=new mc,o.g=Wc(o.j,h?l:null,!o.u),o.P>0&&(o.O=new Rf(f(o.Y,o,o.g),o.P)),l=o.V,h=o.g,m=o.ba;var S="readystatechange";Array.isArray(S)||(S&&(rc[0]=S.toString()),S=rc);for(let k=0;k<S.length;k++){const P=ec(h,S[k],m||l.handleEvent,!1,l.h||l);if(!P)break;l.g[P.key]=P}l=o.J?Ya(o.J):{},o.u?(o.v||(o.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,l)):(o.v="GET",o.g.ea(o.B,o.v,null,l)),ns(),Df(o.i,o.v,o.B,o.l,o.S,o.u)}_t.prototype.ba=function(o){o=o.target;const l=this.O;l&&Tt(o)==3?l.j():this.Y(o)},_t.prototype.Y=function(o){try{if(o==this.g)e:{const H=Tt(this.g),fe=this.g.ya(),ne=this.g.ca();if(!(H<3)&&(H!=3||this.g&&(this.h.h||this.g.la()||Vc(this.g)))){this.K||H!=4||fe==7||(fe==8||ne<=0?ns(3):ns(2)),Br(this);var l=this.g.ca();this.X=l;var h=Vf(this);if(this.o=l==200,Lf(this.i,this.v,this.B,this.l,this.S,H,l),this.o){if(this.U&&!this.L){t:{if(this.g){var m,S=this.g;if((m=S.g?S.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(m)){var k=m;break t}}k=null}if(o=k)yn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,qr(this,o);else{this.o=!1,this.m=3,Ce(12),Jt(this),os(this);break e}}if(this.R){o=!0;let ge;for(;!this.K&&this.C<h.length;)if(ge=$f(this,h),ge==Ur){H==4&&(this.m=4,Ce(14),o=!1),yn(this.i,this.l,null,"[Incomplete Response]");break}else if(ge==gc){this.m=4,Ce(15),yn(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else yn(this.i,this.l,ge,null),qr(this,ge);if(vc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),H!=4||h.length!=0||this.h.h||(this.m=1,Ce(16),o=!1),this.o=this.o&&o,!o)yn(this.i,this.l,h,"[Invalid Chunked Response]"),Jt(this),os(this);else if(h.length>0&&!this.W){this.W=!0;var P=this.j;P.g==this&&P.aa&&!P.P&&(P.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),Yr(P),P.P=!0,Ce(11))}}else yn(this.i,this.l,h,null),qr(this,h);H==4&&Jt(this),this.o&&!this.K&&(H==4?Hc(this.j,this):(this.o=!1,oi(this)))}else Xf(this.g),l==400&&h.indexOf("Unknown SID")>0?(this.m=3,Ce(12)):(this.m=0,Ce(13)),Jt(this),os(this)}}}catch{}finally{}};function Vf(o){if(!vc(o))return o.g.la();const l=Vc(o.g);if(l==="")return"";let h="";const m=l.length,S=Tt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Jt(o),os(o),"";o.h.i=new a.TextDecoder}for(let k=0;k<m;k++)o.h.h=!0,h+=o.h.i.decode(l[k],{stream:!(S&&k==m-1)});return l.length=0,o.h.g+=h,o.C=0,o.h.g}function vc(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function $f(o,l){var h=o.C,m=l.indexOf(`
`,h);return m==-1?Ur:(h=Number(l.substring(h,m)),isNaN(h)?gc:(m+=1,m+h>l.length?Ur:(l=l.slice(m,m+h),o.C=m+h,l)))}_t.prototype.cancel=function(){this.K=!0,Jt(this)};function oi(o){o.T=Date.now()+o.H,_c(o,o.H)}function _c(o,l){if(o.D!=null)throw Error("WatchDog timer not null");o.D=ss(f(o.aa,o),l)}function Br(o){o.D&&(a.clearTimeout(o.D),o.D=null)}_t.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Nf(this.i,this.B),this.M!=2&&(ns(),Ce(17)),Jt(this),this.m=2,os(this)):_c(this,this.T-o)};function os(o){o.j.I==0||o.K||Hc(o.j,o)}function Jt(o){Br(o);var l=o.O;l&&typeof l.dispose=="function"&&l.dispose(),o.O=null,oc(o.V),o.g&&(l=o.g,o.g=null,l.abort(),l.dispose())}function qr(o,l){try{var h=o.j;if(h.I!=0&&(h.g==o||Hr(h.h,o))){if(!o.L&&Hr(h.h,o)&&h.I==3){try{var m=h.Ba.g.parse(l)}catch{m=null}if(Array.isArray(m)&&m.length==3){var S=m;if(S[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)di(h),ui(h);else break e;Jr(h),Ce(18)}}else h.xa=S[1],0<h.xa-h.K&&S[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=ss(f(h.Va,h),6e3));Tc(h.h)<=1&&h.ta&&(h.ta=void 0)}else Xt(h,11)}else if((o.L||h.g==o)&&di(h),!v(l))for(S=h.Ba.g.parse(l),l=0;l<S.length;l++){let ne=S[l];const ge=ne[0];if(!(ge<=h.K))if(h.K=ge,ne=ne[1],h.I==2)if(ne[0]=="c"){h.M=ne[1],h.ba=ne[2];const Je=ne[3];Je!=null&&(h.ka=Je,h.j.info("VER="+h.ka));const Zt=ne[4];Zt!=null&&(h.za=Zt,h.j.info("SVER="+h.za));const Et=ne[5];Et!=null&&typeof Et=="number"&&Et>0&&(m=1.5*Et,h.O=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;const It=o.g;if(It){const pi=It.g?It.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(pi){var k=m.h;k.g||pi.indexOf("spdy")==-1&&pi.indexOf("quic")==-1&&pi.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(zr(k,k.h),k.h=null))}if(m.G){const Xr=It.g?It.g.getResponseHeader("X-HTTP-Session-Id"):null;Xr&&(m.wa=Xr,se(m.J,m.G,Xr))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),m=h;var P=o;if(m.na=Kc(m,m.L?m.ba:null,m.W),P.L){Ec(m.h,P);var H=P,fe=m.O;fe&&(H.H=fe),H.D&&(Br(H),oi(H)),m.g=P}else Bc(m);h.i.length>0&&hi(h)}else ne[0]!="stop"&&ne[0]!="close"||Xt(h,7);else h.I==3&&(ne[0]=="stop"||ne[0]=="close"?ne[0]=="stop"?Xt(h,7):Qr(h):ne[0]!="noop"&&h.l&&h.l.qa(ne),h.A=0)}}ns(4)}catch{}}var Ff=class{constructor(o,l){this.g=o,this.map=l}};function wc(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function bc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Tc(o){return o.h?1:o.g?o.g.size:0}function Hr(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function zr(o,l){o.g?o.g.add(l):o.h=l}function Ec(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}wc.prototype.cancel=function(){if(this.i=Ic(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ic(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.G);return l}return R(o.i)}var Sc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Uf(o,l){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const m=o[h].indexOf("=");let S,k=null;m>=0?(S=o[h].substring(0,m),k=o[h].substring(m+1)):S=o[h],l(S,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function wt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;o instanceof wt?(this.l=o.l,as(this,o.j),this.o=o.o,this.g=o.g,cs(this,o.u),this.h=o.h,Gr(this,xc(o.i)),this.m=o.m):o&&(l=String(o).match(Sc))?(this.l=!1,as(this,l[1]||"",!0),this.o=ls(l[2]||""),this.g=ls(l[3]||"",!0),cs(this,l[4]),this.h=ls(l[5]||"",!0),Gr(this,l[6]||"",!0),this.m=ls(l[7]||"")):(this.l=!1,this.i=new hs(null,this.l))}wt.prototype.toString=function(){const o=[];var l=this.j;l&&o.push(us(l,Ac,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(us(l,Ac,!0),"@"),o.push(rs(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(us(h,h.charAt(0)=="/"?qf:Bf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",us(h,zf)),o.join("")},wt.prototype.resolve=function(o){const l=Qe(this);let h=!!o.j;h?as(l,o.j):h=!!o.o,h?l.o=o.o:h=!!o.g,h?l.g=o.g:h=o.u!=null;var m=o.h;if(h)cs(l,o.u);else if(h=!!o.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var S=l.h.lastIndexOf("/");S!=-1&&(m=l.h.slice(0,S+1)+m)}if(S=m,S==".."||S==".")m="";else if(S.indexOf("./")!=-1||S.indexOf("/.")!=-1){m=S.lastIndexOf("/",0)==0,S=S.split("/");const k=[];for(let P=0;P<S.length;){const H=S[P++];H=="."?m&&P==S.length&&k.push(""):H==".."?((k.length>1||k.length==1&&k[0]!="")&&k.pop(),m&&P==S.length&&k.push("")):(k.push(H),m=!0)}m=k.join("/")}else m=S}return h?l.h=m:h=o.i.toString()!=="",h?Gr(l,xc(o.i)):h=!!o.m,h&&(l.m=o.m),l};function Qe(o){return new wt(o)}function as(o,l,h){o.j=h?ls(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function cs(o,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);o.u=l}else o.u=null}function Gr(o,l,h){l instanceof hs?(o.i=l,Gf(o.i,o.l)):(h||(l=us(l,Hf)),o.i=new hs(l,o.l))}function se(o,l,h){o.i.set(l,h)}function ai(o){return se(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function ls(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function us(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,jf),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function jf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ac=/[#\/\?@]/g,Bf=/[#\?:]/g,qf=/[#\?]/g,Hf=/[#\?@]/g,zf=/#/g;function hs(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function Yt(o){o.g||(o.g=new Map,o.h=0,o.i&&Uf(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=hs.prototype,n.add=function(o,l){Yt(this),this.i=null,o=vn(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function kc(o,l){Yt(o),l=vn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Cc(o,l){return Yt(o),l=vn(o,l),o.g.has(l)}n.forEach=function(o,l){Yt(this),this.g.forEach(function(h,m){h.forEach(function(S){o.call(l,S,m,this)},this)},this)};function Rc(o,l){Yt(o);let h=[];if(typeof l=="string")Cc(o,l)&&(h=h.concat(o.g.get(vn(o,l))));else for(o=Array.from(o.g.values()),l=0;l<o.length;l++)h=h.concat(o[l]);return h}n.set=function(o,l){return Yt(this),this.i=null,o=vn(this,o),Cc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=Rc(this,o),o.length>0?String(o[0]):l):l};function Pc(o,l,h){kc(o,l),h.length>0&&(o.i=null,o.g.set(vn(o,l),R(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(let m=0;m<l.length;m++){var h=l[m];const S=rs(h);h=Rc(this,h);for(let k=0;k<h.length;k++){let P=S;h[k]!==""&&(P+="="+rs(h[k])),o.push(P)}}return this.i=o.join("&")};function xc(o){const l=new hs;return l.i=o.i,o.g&&(l.g=new Map(o.g),l.h=o.h),l}function vn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Gf(o,l){l&&!o.j&&(Yt(o),o.i=null,o.g.forEach(function(h,m){const S=m.toLowerCase();m!=S&&(kc(this,m),Pc(this,S,h))},o)),o.j=l}function Kf(o,l){const h=new is;if(a.Image){const m=new Image;m.onload=g(bt,h,"TestLoadImage: loaded",!0,l,m),m.onerror=g(bt,h,"TestLoadImage: error",!1,l,m),m.onabort=g(bt,h,"TestLoadImage: abort",!1,l,m),m.ontimeout=g(bt,h,"TestLoadImage: timeout",!1,l,m),a.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else l(!1)}function Wf(o,l){const h=new is,m=new AbortController,S=setTimeout(()=>{m.abort(),bt(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:m.signal}).then(k=>{clearTimeout(S),k.ok?bt(h,"TestPingServer: ok",!0,l):bt(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(S),bt(h,"TestPingServer: error",!1,l)})}function bt(o,l,h,m,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),m(h)}catch{}}function Qf(){this.g=new xf}function Kr(o){this.i=o.Sb||null,this.h=o.ab||!1}w(Kr,ac),Kr.prototype.g=function(){return new ci(this.i,this.h)};function ci(o,l){be.call(this),this.H=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}w(ci,be),n=ci.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=l,this.readyState=1,fs(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(l.body=o),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ds(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,fs(this)),this.g&&(this.readyState=3,fs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Dc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Dc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?ds(this):fs(this),this.readyState==3&&Dc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,ds(this))},n.Na=function(o){this.g&&(this.response=o,ds(this))},n.ga=function(){this.g&&ds(this)};function ds(o){o.readyState=4,o.l=null,o.j=null,o.B=null,fs(o)}n.setRequestHeader=function(o,l){this.A.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function fs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ci.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Lc(o){let l="";return ti(o,function(h,m){l+=m,l+=":",l+=h,l+=`\r
`}),l}function Wr(o,l,h){e:{for(m in h){var m=!1;break e}m=!0}m||(h=Lc(h),typeof o=="string"?h!=null&&rs(h):se(o,l,h))}function oe(o){be.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}w(oe,be);var Jf=/^https?$/i,Yf=["POST","PUT"];n=oe.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,l,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():pc.g(),this.g.onreadystatechange=I(f(this.Ca,this));try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(k){Nc(this,k);return}if(o=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var S in m)h.set(S,m[S]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const k of m.keys())h.set(k,m.get(k));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(k=>k.toLowerCase()=="content-type"),S=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Yf,l,void 0)>=0)||m||S||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,P]of h)this.g.setRequestHeader(k,P);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(k){Nc(this,k)}};function Nc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.o=5,Oc(o),li(o)}function Oc(o){o.A||(o.A=!0,ke(o,"complete"),ke(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,ke(this,"complete"),ke(this,"abort"),li(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),li(this,!0)),oe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Mc(this):this.Xa())},n.Xa=function(){Mc(this)};function Mc(o){if(o.h&&typeof r<"u"){if(o.v&&Tt(o)==4)setTimeout(o.Ca.bind(o),0);else if(ke(o,"readystatechange"),Tt(o)==4){o.h=!1;try{const k=o.ca();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var m;if(m=k===0){let P=String(o.D).match(Sc)[1]||null;!P&&a.self&&a.self.location&&(P=a.self.location.protocol.slice(0,-1)),m=!Jf.test(P?P.toLowerCase():"")}h=m}if(h)ke(o,"complete"),ke(o,"success");else{o.o=6;try{var S=Tt(o)>2?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.ca()+"]",Oc(o)}}finally{li(o)}}}}function li(o,l){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,l||ke(o,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Tt(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Tt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Pf(l)}};function Vc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Xf(o){const l={};o=(o.g&&Tt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(v(o[m]))continue;var h=Mf(o[m]);const S=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const k=l[S]||[];l[S]=k,k.push(h)}If(l,function(m){return m.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ps(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function $c(o){this.za=0,this.i=[],this.j=new is,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ps("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ps("baseRetryDelayMs",5e3,o),this.Za=ps("retryDelaySeedMs",1e4,o),this.Ta=ps("forwardChannelMaxRetries",2,o),this.va=ps("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new wc(o&&o.concurrentRequestLimit),this.Ba=new Qf,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=$c.prototype,n.ka=8,n.I=1,n.connect=function(o,l,h,m){Ce(0),this.W=o,this.H=l||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.J=Kc(this,null,this.W),hi(this)};function Qr(o){if(Fc(o),o.I==3){var l=o.V++,h=Qe(o.J);if(se(h,"SID",o.M),se(h,"RID",l),se(h,"TYPE","terminate"),ms(o,h),l=new _t(o,o.j,l),l.M=2,l.A=ai(Qe(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=l.A,h=!0),h||(l.g=Wc(l.j,null),l.g.ea(l.A)),l.F=Date.now(),oi(l)}Gc(o)}function ui(o){o.g&&(Yr(o),o.g.cancel(),o.g=null)}function Fc(o){ui(o),o.v&&(a.clearTimeout(o.v),o.v=null),di(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function hi(o){if(!bc(o.h)&&!o.m){o.m=!0;var l=o.Ea;ee||y(),te||(ee(),te=!0),b.add(l,o),o.D=0}}function Zf(o,l){return Tc(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=l.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=ss(f(o.Ea,o,l),zc(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const S=new _t(this,this.j,o);let k=this.o;if(this.U&&(k?(k=Ya(k),Za(k,this.U)):k=this.U),this.u!==null||this.R||(S.J=k,k=null),this.S)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(l+=m,l>4096){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=jc(this,S,l),h=Qe(this.J),se(h,"RID",o),se(h,"CVER",22),this.G&&se(h,"X-HTTP-Session-Id",this.G),ms(this,h),k&&(this.R?l="headers="+rs(Lc(k))+"&"+l:this.u&&Wr(h,this.u,k)),zr(this.h,S),this.Ra&&se(h,"TYPE","init"),this.S?(se(h,"$req",l),se(h,"SID","null"),S.U=!0,jr(S,h,null)):jr(S,h,l),this.I=2}}else this.I==3&&(o?Uc(this,o):this.i.length==0||bc(this.h)||Uc(this))};function Uc(o,l){var h;l?h=l.l:h=o.V++;const m=Qe(o.J);se(m,"SID",o.M),se(m,"RID",h),se(m,"AID",o.K),ms(o,m),o.u&&o.o&&Wr(m,o.u,o.o),h=new _t(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),l&&(o.i=l.G.concat(o.i)),l=jc(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),zr(o.h,h),jr(h,m,l)}function ms(o,l){o.H&&ti(o.H,function(h,m){se(l,m,h)}),o.l&&ti({},function(h,m){se(l,m,h)})}function jc(o,l,h){h=Math.min(o.i.length,h);const m=o.l?f(o.l.Ka,o.l,o):null;e:{var S=o.i;let H=-1;for(;;){const fe=["count="+h];H==-1?h>0?(H=S[0].g,fe.push("ofs="+H)):H=0:fe.push("ofs="+H);let ne=!0;for(let ge=0;ge<h;ge++){var k=S[ge].g;const Je=S[ge].map;if(k-=H,k<0)H=Math.max(0,S[ge].g-100),ne=!1;else try{k="req"+k+"_"||"";try{var P=Je instanceof Map?Je:Object.entries(Je);for(const[Zt,Et]of P){let It=Et;c(Et)&&(It=Mr(Et)),fe.push(k+Zt+"="+encodeURIComponent(It))}}catch(Zt){throw fe.push(k+"type="+encodeURIComponent("_badmap")),Zt}}catch{m&&m(Je)}}if(ne){P=fe.join("&");break e}}P=void 0}return o=o.i.splice(0,h),l.G=o,P}function Bc(o){if(!o.g&&!o.v){o.Y=1;var l=o.Da;ee||y(),te||(ee(),te=!0),b.add(l,o),o.A=0}}function Jr(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=ss(f(o.Da,o),zc(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,qc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=ss(f(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ce(10),ui(this),qc(this))};function Yr(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function qc(o){o.g=new _t(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var l=Qe(o.na);se(l,"RID","rpc"),se(l,"SID",o.M),se(l,"AID",o.K),se(l,"CI",o.F?"0":"1"),!o.F&&o.ia&&se(l,"TO",o.ia),se(l,"TYPE","xmlhttp"),ms(o,l),o.u&&o.o&&Wr(l,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=ai(Qe(l)),h.u=null,h.R=!0,yc(h,o)}n.Va=function(){this.C!=null&&(this.C=null,ui(this),Jr(this),Ce(19))};function di(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Hc(o,l){var h=null;if(o.g==l){di(o),Yr(o),o.g=null;var m=2}else if(Hr(o.h,l))h=l.G,Ec(o.h,l),m=1;else return;if(o.I!=0){if(l.o)if(m==1){h=l.u?l.u.length:0,l=Date.now()-l.F;var S=o.D;m=ii(),ke(m,new dc(m,h)),hi(o)}else Bc(o);else if(S=l.m,S==3||S==0&&l.X>0||!(m==1&&Zf(o,l)||m==2&&Jr(o)))switch(h&&h.length>0&&(l=o.h,l.i=l.i.concat(h)),S){case 1:Xt(o,5);break;case 4:Xt(o,10);break;case 3:Xt(o,6);break;default:Xt(o,2)}}}function zc(o,l){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*l}function Xt(o,l){if(o.j.info("Error code "+l),l==2){var h=f(o.bb,o),m=o.Ua;const S=!m;m=new wt(m||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||as(m,"https"),ai(m),S?Kf(m.toString(),h):Wf(m.toString(),h)}else Ce(2);o.I=0,o.l&&o.l.pa(l),Gc(o),Fc(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Ce(2)):(this.j.info("Failed to ping google.com"),Ce(1))};function Gc(o){if(o.I=0,o.ja=[],o.l){const l=Ic(o.h);(l.length!=0||o.i.length!=0)&&(N(o.ja,l),N(o.ja,o.i),o.h.i.length=0,R(o.i),o.i.length=0),o.l.oa()}}function Kc(o,l,h){var m=h instanceof wt?Qe(h):new wt(h);if(m.g!="")l&&(m.g=l+"."+m.g),cs(m,m.u);else{var S=a.location;m=S.protocol,l=l?l+"."+S.hostname:S.hostname,S=+S.port;const k=new wt(null);m&&as(k,m),l&&(k.g=l),S&&cs(k,S),h&&(k.h=h),m=k}return h=o.G,l=o.wa,h&&l&&se(m,h,l),se(m,"VER",o.ka),ms(o,m),m}function Wc(o,l,h){if(l&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Aa&&!o.ma?new oe(new Kr({ab:h})):new oe(o.ma),l.Fa(o.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qc(){}n=Qc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function fi(){}fi.prototype.g=function(o,l){return new Oe(o,l)};function Oe(o,l){be.call(this),this.g=new $c(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(o?o["X-WebChannel-Client-Profile"]=l.sa:o={"X-WebChannel-Client-Profile":l.sa}),this.g.U=o,(o=l&&l.Qb)&&!v(o)&&(this.g.u=o),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!v(l)&&(this.g.G=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new _n(this)}w(Oe,be),Oe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Oe.prototype.close=function(){Qr(this.g)},Oe.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=Mr(o),o=h);l.i.push(new Ff(l.Ya++,o)),l.I==3&&hi(l)},Oe.prototype.N=function(){this.g.l=null,delete this.j,Qr(this.g),delete this.g,Oe.Z.N.call(this)};function Jc(o){Vr.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}w(Jc,Vr);function Yc(){$r.call(this),this.status=1}w(Yc,$r);function _n(o){this.g=o}w(_n,Qc),_n.prototype.ra=function(){ke(this.g,"a")},_n.prototype.qa=function(o){ke(this.g,new Jc(o))},_n.prototype.pa=function(o){ke(this.g,new Yc)},_n.prototype.oa=function(){ke(this.g,"b")},fi.prototype.createWebChannel=fi.prototype.g,Oe.prototype.send=Oe.prototype.o,Oe.prototype.open=Oe.prototype.m,Oe.prototype.close=Oe.prototype.close,Wh=function(){return new fi},Kh=function(){return ii()},Gh=Qt,Co={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ri.NO_ERROR=0,ri.TIMEOUT=8,ri.HTTP_ERROR=6,Ci=ri,fc.COMPLETE="complete",zh=fc,cc.EventType=ts,ts.OPEN="a",ts.CLOSE="b",ts.ERROR="c",ts.MESSAGE="d",be.prototype.listen=be.prototype.J,ws=cc,oe.prototype.listenOnce=oe.prototype.K,oe.prototype.getLastError=oe.prototype.Ha,oe.prototype.getLastErrorCode=oe.prototype.ya,oe.prototype.getStatus=oe.prototype.ca,oe.prototype.getResponseJson=oe.prototype.La,oe.prototype.getResponseText=oe.prototype.la,oe.prototype.send=oe.prototype.ea,oe.prototype.setWithCredentials=oe.prototype.Fa,Hh=oe}).apply(typeof gi<"u"?gi:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ee.UNAUTHENTICATED=new Ee(null),Ee.GOOGLE_CREDENTIALS=new Ee("google-credentials-uid"),Ee.FIRST_PARTY=new Ee("first-party-uid"),Ee.MOCK_USER=new Ee("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jn="12.10.0";function Pv(n){Jn=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const fn=new Xo("@firebase/firestore");function bn(){return fn.logLevel}function L(n,...e){if(fn.logLevel<=z.DEBUG){const t=e.map(ga);fn.debug(`Firestore (${Jn}): ${n}`,...t)}}function mt(n,...e){if(fn.logLevel<=z.ERROR){const t=e.map(ga);fn.error(`Firestore (${Jn}): ${n}`,...t)}}function pn(n,...e){if(fn.logLevel<=z.WARN){const t=e.map(ga);fn.warn(`Firestore (${Jn}): ${n}`,...t)}}function ga(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Qh(n,s,t)}function Qh(n,e,t){let s=`FIRESTORE (${Jn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw mt(s),new Error(s)}function re(n,e,t,s){let i="Unexpected state";typeof t=="string"?i=t:s=t,n||Qh(e,i,s)}function Q(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends gt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ee.UNAUTHENTICATED)))}shutdown(){}}class Dv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Lv{constructor(e){this.t=e,this.currentUser=Ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){re(this.o===void 0,42304);let s=this.i;const i=u=>this.i!==s?(s=this.i,t(u)):Promise.resolve();let r=new Cn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Cn,e.enqueueRetryable((()=>i(this.currentUser)))};const a=()=>{const u=r;e.enqueueRetryable((async()=>{await u.promise,await i(this.currentUser)}))},c=u=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Cn)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(re(typeof s.accessToken=="string",31837,{l:s}),new Jh(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string",2055,{h:e}),new Ee(e)}}class Nv{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ee.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Ov{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new Nv(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ee.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class xl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Mv{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ne(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){re(this.o===void 0,3512);const s=r=>{r.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const a=r.token!==this.m;return this.m=r.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable((()=>s(r)))};const i=r=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>i(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?i(r):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new xl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(re(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new xl(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const i=Vv(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<t&&(s+=e.charAt(i[r]%62))}return s}}function K(n,e){return n<e?-1:n>e?1:0}function Ro(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const i=n.charAt(s),r=e.charAt(s);if(i!==r)return ao(i)===ao(r)?K(i,r):ao(i)?1:-1}return K(n.length,e.length)}const $v=55296,Fv=57343;function ao(n){const e=n.charCodeAt(0);return e>=$v&&e<=Fv}function Mn(n,e,t){return n.length===e.length&&n.every(((s,i)=>t(s,e[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl="__name__";class Ye{constructor(e,t,s){t===void 0?t=0:t>e.length&&q(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&q(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ye.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ye?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const r=Ye.compareSegments(e.get(i),t.get(i));if(r!==0)return r}return K(e.length,t.length)}static compareSegments(e,t){const s=Ye.isNumericId(e),i=Ye.isNumericId(t);return s&&!i?-1:!s&&i?1:s&&i?Ye.extractNumericId(e).compare(Ye.extractNumericId(t)):Ro(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Mt.fromString(e.substring(4,e.length-2))}}class ie extends Ye{construct(e,t,s){return new ie(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new V(x.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((i=>i.length>0)))}return new ie(t)}static emptyPath(){return new ie([])}}const Uv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Re extends Ye{construct(e,t,s){return new Re(e,t,s)}static isValidIdentifier(e){return Uv.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Re.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Dl}static keyField(){return new Re([Dl])}static fromServerFormat(e){const t=[];let s="",i=0;const r=()=>{if(s.length===0)throw new V(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new V(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new V(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(s+=c,i++):(r(),i++)}if(r(),a)throw new V(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Re(t)}static emptyPath(){return new Re([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(ie.fromString(e))}static fromName(e){return new U(ie.fromString(e).popFirst(5))}static empty(){return new U(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ie.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new ie(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(n,e,t){if(!t)throw new V(x.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Bv(n,e,t,s){if(e===!0&&s===!0)throw new V(x.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ll(n){if(U.isDocumentKey(n))throw new V(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function qv(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Hv(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":q(12329,{type:typeof n})}function Ri(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Hv(n);throw new V(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function he(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ks(n,e){if(!qv(n))throw new V(x.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const i=e[s].typeString,r="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const a=n[s];if(i&&typeof a!==i){t=`JSON field '${s}' must be a ${i}.`;break}if(r!==void 0&&a!==r.value){t=`Expected '${s}' field to equal '${r.value}'`;break}}if(t)throw new V(x.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl=-62135596800,Ol=1e6;class ue{static now(){return ue.fromMillis(Date.now())}static fromDate(e){return ue.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Ol);return new ue(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Nl)throw new V(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ol}_compareTo(e){return this.seconds===e.seconds?K(this.nanoseconds,e.nanoseconds):K(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ue._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ks(e,ue._jsonSchema))return new ue(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Nl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ue._jsonSchemaVersion="firestore/timestamp/1.0",ue._jsonSchema={type:he("string",ue._jsonSchemaVersion),seconds:he("number"),nanoseconds:he("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{static fromTimestamp(e){return new B(e)}static min(){return new B(new ue(0,0))}static max(){return new B(new ue(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ms=-1;function zv(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=B.fromTimestamp(s===1e9?new ue(t+1,0):new ue(t,s));return new Ut(i,U.empty(),e)}function Gv(n){return new Ut(n.readTime,n.key,Ms)}class Ut{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ut(B.min(),U.empty(),Ms)}static max(){return new Ut(B.max(),U.empty(),Ms)}}function Kv(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=U.comparator(n.documentKey,e.documentKey),t!==0?t:K(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dr(n){if(n.code!==x.FAILED_PRECONDITION||n.message!==Wv)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C(((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(t,r).next(s,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):C.reject(t)}static resolve(e){return new C(((t,s)=>{t(e)}))}static reject(e){return new C(((t,s)=>{s(e)}))}static waitFor(e){return new C(((t,s)=>{let i=0,r=0,a=!1;e.forEach((c=>{++i,c.next((()=>{++r,a&&r===i&&t()}),(u=>s(u)))})),a=!0,r===i&&t()}))}static or(e){let t=C.resolve(!1);for(const s of e)t=t.next((i=>i?C.resolve(i):s()));return t}static forEach(e,t){const s=[];return e.forEach(((i,r)=>{s.push(t.call(this,i,r))})),this.waitFor(s)}static mapArray(e,t){return new C(((s,i)=>{const r=e.length,a=new Array(r);let c=0;for(let u=0;u<r;u++){const f=u;t(e[f]).next((g=>{a[f]=g,++c,c===r&&s(a)}),(g=>i(g)))}}))}static doWhile(e,t){return new C(((s,i)=>{const r=()=>{e()===!0?t().next((()=>{r()}),i):s()};r()}))}}function Jv(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Yn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class fr{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}fr.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv=-1;function pr(n){return n==null}function Po(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh="";function Xv(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Ml(e)),e=Zv(n.get(t),e);return Ml(e)}function Zv(n,e){let t=e;const s=n.length;for(let i=0;i<s;i++){const r=n.charAt(i);switch(r){case"\0":t+="";break;case Xh:t+="";break;default:t+=r}}return t}function Ml(n){return n+Xh+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ws(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function e_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,t){this.comparator=e,this.root=t||_e.EMPTY}insert(e,t){return new ce(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,_e.BLACK,null,null))}remove(e){return new ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_e.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return t+s.left.size;i<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yi(this.root,e,this.comparator,!1)}getReverseIterator(){return new yi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yi(this.root,e,this.comparator,!0)}}class yi{constructor(e,t,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?s(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _e{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??_e.RED,this.left=i??_e.EMPTY,this.right=r??_e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,i,r){return new _e(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return _e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return _e.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw q(27949);return e+(this.isRed()?0:1)}}_e.EMPTY=null,_e.RED=!0,_e.BLACK=!1;_e.EMPTY=new class{constructor(){this.size=0}get key(){throw q(57766)}get value(){throw q(16141)}get color(){throw q(16727)}get left(){throw q(29726)}get right(){throw q(36894)}copy(e,t,s,i,r){return this}insert(e,t,s){return new _e(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.comparator=e,this.data=new ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new $l(this.data.getIterator())}getIteratorFrom(e){return new $l(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof me)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new me(this.comparator);return t.data=e,t}}class $l{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.fields=e,e.sort(Re.comparator)}static empty(){return new xt([])}unionWith(e){let t=new me(Re.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new xt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Mn(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class Zh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Zh("Invalid base64 string: "+r):r}})(e);return new we(t)}static fromUint8Array(e){const t=(function(i){let r="";for(let a=0;a<i.length;++a)r+=String.fromCharCode(i[a]);return r})(e);return new we(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return K(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}we.EMPTY_BYTE_STRING=new we("");const t_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jt(n){if(re(!!n,39018),typeof n=="string"){let e=0;const t=t_.exec(n);if(re(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ae(n.seconds),nanos:ae(n.nanos)}}function ae(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Bt(n){return typeof n=="string"?we.fromBase64String(n):we.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed="server_timestamp",td="__type__",nd="__previous_value__",sd="__local_write_time__";function ya(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[td])==null?void 0:s.stringValue)===ed}function mr(n){const e=n.mapValue.fields[nd];return ya(e)?mr(e):e}function Vs(n){const e=jt(n.mapValue.fields[sd].timestampValue);return new ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,t,s,i,r,a,c,u,f,g,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=f,this.isUsingEmulator=g,this.apiKey=w}}const Gi="(default)";class $s{constructor(e,t){this.projectId=e,this.database=t||Gi}static empty(){return new $s("","")}get isDefaultDatabase(){return this.database===Gi}isEqual(e){return e instanceof $s&&e.projectId===this.projectId&&e.database===this.database}}function s_(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new V(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $s(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_="__type__",r_="__max__",vi={mapValue:{}},o_="__vector__",xo="value";function qt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ya(n)?4:c_(n)?9007199254740991:a_(n)?10:11:q(28295,{value:n})}function rt(n,e){if(n===e)return!0;const t=qt(n);if(t!==qt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Vs(n).isEqual(Vs(e));case 3:return(function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const a=jt(i.timestampValue),c=jt(r.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,r){return Bt(i.bytesValue).isEqual(Bt(r.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,r){return ae(i.geoPointValue.latitude)===ae(r.geoPointValue.latitude)&&ae(i.geoPointValue.longitude)===ae(r.geoPointValue.longitude)})(n,e);case 2:return(function(i,r){if("integerValue"in i&&"integerValue"in r)return ae(i.integerValue)===ae(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const a=ae(i.doubleValue),c=ae(r.doubleValue);return a===c?Po(a)===Po(c):isNaN(a)&&isNaN(c)}return!1})(n,e);case 9:return Mn(n.arrayValue.values||[],e.arrayValue.values||[],rt);case 10:case 11:return(function(i,r){const a=i.mapValue.fields||{},c=r.mapValue.fields||{};if(Vl(a)!==Vl(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!rt(a[u],c[u])))return!1;return!0})(n,e);default:return q(52216,{left:n})}}function Fs(n,e){return(n.values||[]).find((t=>rt(t,e)))!==void 0}function Vn(n,e){if(n===e)return 0;const t=qt(n),s=qt(e);if(t!==s)return K(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return K(n.booleanValue,e.booleanValue);case 2:return(function(r,a){const c=ae(r.integerValue||r.doubleValue),u=ae(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(n,e);case 3:return Fl(n.timestampValue,e.timestampValue);case 4:return Fl(Vs(n),Vs(e));case 5:return Ro(n.stringValue,e.stringValue);case 6:return(function(r,a){const c=Bt(r),u=Bt(a);return c.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(r,a){const c=r.split("/"),u=a.split("/");for(let f=0;f<c.length&&f<u.length;f++){const g=K(c[f],u[f]);if(g!==0)return g}return K(c.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(r,a){const c=K(ae(r.latitude),ae(a.latitude));return c!==0?c:K(ae(r.longitude),ae(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Ul(n.arrayValue,e.arrayValue);case 10:return(function(r,a){var I,R,N,$;const c=r.fields||{},u=a.fields||{},f=(I=c[xo])==null?void 0:I.arrayValue,g=(R=u[xo])==null?void 0:R.arrayValue,w=K(((N=f==null?void 0:f.values)==null?void 0:N.length)||0,(($=g==null?void 0:g.values)==null?void 0:$.length)||0);return w!==0?w:Ul(f,g)})(n.mapValue,e.mapValue);case 11:return(function(r,a){if(r===vi.mapValue&&a===vi.mapValue)return 0;if(r===vi.mapValue)return 1;if(a===vi.mapValue)return-1;const c=r.fields||{},u=Object.keys(c),f=a.fields||{},g=Object.keys(f);u.sort(),g.sort();for(let w=0;w<u.length&&w<g.length;++w){const I=Ro(u[w],g[w]);if(I!==0)return I;const R=Vn(c[u[w]],f[g[w]]);if(R!==0)return R}return K(u.length,g.length)})(n.mapValue,e.mapValue);default:throw q(23264,{he:t})}}function Fl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return K(n,e);const t=jt(n),s=jt(e),i=K(t.seconds,s.seconds);return i!==0?i:K(t.nanos,s.nanos)}function Ul(n,e){const t=n.values||[],s=e.values||[];for(let i=0;i<t.length&&i<s.length;++i){const r=Vn(t[i],s[i]);if(r)return r}return K(t.length,s.length)}function $n(n){return Do(n)}function Do(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=jt(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Bt(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return U.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",i=!0;for(const r of t.values||[])i?i=!1:s+=",",s+=Do(r);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let i="{",r=!0;for(const a of s)r?r=!1:i+=",",i+=`${a}:${Do(t.fields[a])}`;return i+"}"})(n.mapValue):q(61005,{value:n})}function Pi(n){switch(qt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=mr(n);return e?16+Pi(e):16;case 5:return 2*n.stringValue.length;case 6:return Bt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((i,r)=>i+Pi(r)),0)})(n.arrayValue);case 10:case 11:return(function(s){let i=0;return Ws(s.fields,((r,a)=>{i+=r.length+Pi(a)})),i})(n.mapValue);default:throw q(13486,{value:n})}}function Lo(n){return!!n&&"integerValue"in n}function va(n){return!!n&&"arrayValue"in n}function jl(n){return!!n&&"nullValue"in n}function Bl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function co(n){return!!n&&"mapValue"in n}function a_(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[i_])==null?void 0:s.stringValue)===o_}function Rs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Ws(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Rs(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Rs(n.arrayValue.values[t]);return e}return{...n}}function c_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===r_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.value=e}static empty(){return new Xe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!co(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Rs(t)}setAll(e){let t=Re.emptyPath(),s={},i=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,s,i),s={},i=[],t=c.popLast()}a?s[c.lastSegment()]=Rs(a):i.push(c.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,s,i)}delete(e){const t=this.field(e.popLast());co(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=t.mapValue.fields[e.get(s)];co(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,s){Ws(t,((i,r)=>e[i]=r));for(const i of s)delete e[i]}clone(){return new Xe(Rs(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t,s,i,r,a,c){this.key=e,this.documentType=t,this.version=s,this.readTime=i,this.createTime=r,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ie(e,0,B.min(),B.min(),B.min(),Xe.empty(),0)}static newFoundDocument(e,t,s,i){return new Ie(e,1,t,B.min(),s,i,0)}static newNoDocument(e,t){return new Ie(e,2,t,B.min(),B.min(),Xe.empty(),0)}static newUnknownDocument(e,t){return new Ie(e,3,t,B.min(),B.min(),Xe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Xe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Xe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ie(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ki{constructor(e,t){this.position=e,this.inclusive=t}}function ql(n,e,t){let s=0;for(let i=0;i<n.position.length;i++){const r=e[i],a=n.position[i];if(r.field.isKeyField()?s=U.comparator(U.fromName(a.referenceValue),t.key):s=Vn(a,t.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Hl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!rt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Wi{constructor(e,t="asc"){this.field=e,this.dir=t}}function l_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class id{}class pe extends id{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new h_(e,t,s):t==="array-contains"?new p_(e,s):t==="in"?new m_(e,s):t==="not-in"?new g_(e,s):t==="array-contains-any"?new y_(e,s):new pe(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new d_(e,s):new f_(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Vn(t,this.value)):t!==null&&qt(this.value)===qt(t)&&this.matchesComparison(Vn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ot extends id{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ot(e,t)}matches(e){return rd(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function rd(n){return n.op==="and"}function od(n){return u_(n)&&rd(n)}function u_(n){for(const e of n.filters)if(e instanceof ot)return!1;return!0}function No(n){if(n instanceof pe)return n.field.canonicalString()+n.op.toString()+$n(n.value);if(od(n))return n.filters.map((e=>No(e))).join(",");{const e=n.filters.map((t=>No(t))).join(",");return`${n.op}(${e})`}}function ad(n,e){return n instanceof pe?(function(s,i){return i instanceof pe&&s.op===i.op&&s.field.isEqual(i.field)&&rt(s.value,i.value)})(n,e):n instanceof ot?(function(s,i){return i instanceof ot&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce(((r,a,c)=>r&&ad(a,i.filters[c])),!0):!1})(n,e):void q(19439)}function cd(n){return n instanceof pe?(function(t){return`${t.field.canonicalString()} ${t.op} ${$n(t.value)}`})(n):n instanceof ot?(function(t){return t.op.toString()+" {"+t.getFilters().map(cd).join(" ,")+"}"})(n):"Filter"}class h_ extends pe{constructor(e,t,s){super(e,t,s),this.key=U.fromName(s.referenceValue)}matches(e){const t=U.comparator(e.key,this.key);return this.matchesComparison(t)}}class d_ extends pe{constructor(e,t){super(e,"in",t),this.keys=ld("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class f_ extends pe{constructor(e,t){super(e,"not-in",t),this.keys=ld("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function ld(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>U.fromName(s.referenceValue)))}class p_ extends pe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return va(t)&&Fs(t.arrayValue,this.value)}}class m_ extends pe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Fs(this.value.arrayValue,t)}}class g_ extends pe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Fs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Fs(this.value.arrayValue,t)}}class y_ extends pe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!va(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Fs(this.value.arrayValue,s)))}}/**
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
 */class v_{constructor(e,t=null,s=[],i=[],r=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=a,this.endAt=c,this.Te=null}}function zl(n,e=null,t=[],s=[],i=null,r=null,a=null){return new v_(n,e,t,s,i,r,a)}function _a(n){const e=Q(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>No(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(r){return r.field.canonicalString()+r.dir})(s))).join(","),pr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>$n(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>$n(s))).join(",")),e.Te=t}return e.Te}function wa(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!l_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ad(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Hl(n.startAt,e.startAt)&&Hl(n.endAt,e.endAt)}function Oo(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,t=null,s=[],i=[],r=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=a,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function __(n,e,t,s,i,r,a,c){return new gr(n,e,t,s,i,r,a,c)}function ba(n){return new gr(n)}function Gl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function w_(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function b_(n){return n.collectionGroup!==null}function Ps(n){const e=Q(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const r of e.explicitOrderBy)e.Ie.push(r),t.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new me(Re.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((f=>{f.isInequality()&&(c=c.add(f.field))}))})),c})(e).forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new Wi(r,s))})),t.has(Re.keyField().canonicalString())||e.Ie.push(new Wi(Re.keyField(),s))}return e.Ie}function st(n){const e=Q(n);return e.Ee||(e.Ee=T_(e,Ps(n))),e.Ee}function T_(n,e){if(n.limitType==="F")return zl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const r=i.dir==="desc"?"asc":"desc";return new Wi(i.field,r)}));const t=n.endAt?new Ki(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Ki(n.startAt.position,n.startAt.inclusive):null;return zl(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Mo(n,e,t){return new gr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function yr(n,e){return wa(st(n),st(e))&&n.limitType===e.limitType}function ud(n){return`${_a(st(n))}|lt:${n.limitType}`}function Tn(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((i=>cd(i))).join(", ")}]`),pr(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((i=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(i))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((i=>$n(i))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((i=>$n(i))).join(",")),`Target(${s})`})(st(n))}; limitType=${n.limitType})`}function vr(n,e){return e.isFoundDocument()&&(function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):U.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)})(n,e)&&(function(s,i){for(const r of Ps(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0})(n,e)&&(function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0})(n,e)&&(function(s,i){return!(s.startAt&&!(function(a,c,u){const f=ql(a,c,u);return a.inclusive?f<=0:f<0})(s.startAt,Ps(s),i)||s.endAt&&!(function(a,c,u){const f=ql(a,c,u);return a.inclusive?f>=0:f>0})(s.endAt,Ps(s),i))})(n,e)}function E_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function hd(n){return(e,t)=>{let s=!1;for(const i of Ps(n)){const r=I_(i,e,t);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function I_(n,e,t){const s=n.field.isKeyField()?U.comparator(e.key,t.key):(function(r,a,c){const u=a.data.field(r),f=c.data.field(r);return u!==null&&f!==null?Vn(u,f):q(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return q(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[t]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ws(this.inner,((t,s)=>{for(const[i,r]of s)e(i,r)}))}isEmpty(){return e_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=new ce(U.comparator);function Ht(){return S_}const dd=new ce(U.comparator);function bs(...n){let e=dd;for(const t of n)e=e.insert(t.key,t);return e}function A_(n){let e=dd;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function on(){return xs()}function fd(){return xs()}function xs(){return new mn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const k_=new me(U.comparator);function J(...n){let e=k_;for(const t of n)e=e.add(t);return e}const C_=new me(K);function R_(){return C_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Po(e)?"-0":e}}function x_(n){return{integerValue:""+n}}/**
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
 */class _r{constructor(){this._=void 0}}function D_(n,e,t){return n instanceof Vo?(function(i,r){const a={fields:{[td]:{stringValue:ed},[sd]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&ya(r)&&(r=mr(r)),r&&(a.fields[nd]=r),{mapValue:a}})(t,e):n instanceof Qi?pd(n,e):n instanceof Ji?md(n,e):(function(i,r){const a=N_(i,r),c=Kl(a)+Kl(i.Ae);return Lo(a)&&Lo(i.Ae)?x_(c):P_(i.serializer,c)})(n,e)}function L_(n,e,t){return n instanceof Qi?pd(n,e):n instanceof Ji?md(n,e):t}function N_(n,e){return n instanceof $o?(function(s){return Lo(s)||(function(r){return!!r&&"doubleValue"in r})(s)})(e)?e:{integerValue:0}:null}class Vo extends _r{}class Qi extends _r{constructor(e){super(),this.elements=e}}function pd(n,e){const t=gd(e);for(const s of n.elements)t.some((i=>rt(i,s)))||t.push(s);return{arrayValue:{values:t}}}class Ji extends _r{constructor(e){super(),this.elements=e}}function md(n,e){let t=gd(e);for(const s of n.elements)t=t.filter((i=>!rt(i,s)));return{arrayValue:{values:t}}}class $o extends _r{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Kl(n){return ae(n.integerValue||n.doubleValue)}function gd(n){return va(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function O_(n,e){return n.field.isEqual(e.field)&&(function(s,i){return s instanceof Qi&&i instanceof Qi||s instanceof Ji&&i instanceof Ji?Mn(s.elements,i.elements,rt):s instanceof $o&&i instanceof $o?rt(s.Ae,i.Ae):s instanceof Vo&&i instanceof Vo})(n.transform,e.transform)}class an{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new an}static exists(e){return new an(void 0,e)}static updateTime(e){return new an(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ta{}function yd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new V_(n.key,an.none()):new Ea(n.key,n.data,an.none());{const t=n.data,s=Xe.empty();let i=new me(Re.comparator);for(let r of e.fields)if(!i.has(r)){let a=t.field(r);a===null&&r.length>1&&(r=r.popLast(),a=t.field(r)),a===null?s.delete(r):s.set(r,a),i=i.add(r)}return new wr(n.key,s,new xt(i.toArray()),an.none())}}function M_(n,e,t){n instanceof Ea?(function(i,r,a){const c=i.value.clone(),u=Ql(i.fieldTransforms,r,a.transformResults);c.setAll(u),r.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof wr?(function(i,r,a){if(!xi(i.precondition,r))return void r.convertToUnknownDocument(a.version);const c=Ql(i.fieldTransforms,r,a.transformResults),u=r.data;u.setAll(vd(i)),u.setAll(c),r.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):(function(i,r,a){r.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Ds(n,e,t,s){return n instanceof Ea?(function(r,a,c,u){if(!xi(r.precondition,a))return c;const f=r.value.clone(),g=Jl(r.fieldTransforms,u,a);return f.setAll(g),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null})(n,e,t,s):n instanceof wr?(function(r,a,c,u){if(!xi(r.precondition,a))return c;const f=Jl(r.fieldTransforms,u,a),g=a.data;return g.setAll(vd(r)),g.setAll(f),a.convertToFoundDocument(a.version,g).setHasLocalMutations(),c===null?null:c.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((w=>w.field)))})(n,e,t,s):(function(r,a,c){return xi(r.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function Wl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&Mn(s,i,((r,a)=>O_(r,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ea extends Ta{constructor(e,t,s,i=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class wr extends Ta{constructor(e,t,s,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function vd(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function Ql(n,e,t){const s=new Map;re(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let i=0;i<t.length;i++){const r=n[i],a=r.transform,c=e.data.field(r.field);s.set(r.field,L_(a,c,t[i]))}return s}function Jl(n,e,t){const s=new Map;for(const i of n){const r=i.transform,a=t.data.field(i.field);s.set(i.field,D_(r,a,e))}return s}class V_ extends Ta{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,t,s,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&M_(r,e,s[i])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ds(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ds(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=fd();return this.mutations.forEach((i=>{const r=e.get(i.key),a=r.overlayedDocument;let c=this.applyToLocalView(a,r.mutatedFields);c=t.has(i.key)?null:c;const u=yd(a,c);u!==null&&s.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(B.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),J())}isEqual(e){return this.batchId===e.batchId&&Mn(this.mutations,e.mutations,((t,s)=>Wl(t,s)))&&Mn(this.baseMutations,e.baseMutations,((t,s)=>Wl(t,s)))}}/**
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
 */class F_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class U_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le,W;function _d(n){if(n===void 0)return mt("GRPC error has no .code"),x.UNKNOWN;switch(n){case le.OK:return x.OK;case le.CANCELLED:return x.CANCELLED;case le.UNKNOWN:return x.UNKNOWN;case le.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case le.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case le.INTERNAL:return x.INTERNAL;case le.UNAVAILABLE:return x.UNAVAILABLE;case le.UNAUTHENTICATED:return x.UNAUTHENTICATED;case le.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case le.NOT_FOUND:return x.NOT_FOUND;case le.ALREADY_EXISTS:return x.ALREADY_EXISTS;case le.PERMISSION_DENIED:return x.PERMISSION_DENIED;case le.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case le.ABORTED:return x.ABORTED;case le.OUT_OF_RANGE:return x.OUT_OF_RANGE;case le.UNIMPLEMENTED:return x.UNIMPLEMENTED;case le.DATA_LOSS:return x.DATA_LOSS;default:return q(39323,{code:n})}}(W=le||(le={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function j_(){return new TextEncoder}/**
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
 */const B_=new Mt([4294967295,4294967295],0);function Yl(n){const e=j_().encode(n),t=new qh;return t.update(e),new Uint8Array(t.digest())}function Xl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Mt([t,s],0),new Mt([i,r],0)]}class Ia{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ts(`Invalid padding: ${t}`);if(s<0)throw new Ts(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ts(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ts(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Mt.fromNumber(this.ge)}ye(e,t,s){let i=e.add(t.multiply(Mt.fromNumber(s)));return i.compare(B_)===1&&(i=new Mt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Yl(e),[s,i]=Xl(t);for(let r=0;r<this.hashCount;r++){const a=this.ye(s,i,r);if(!this.we(a))return!1}return!0}static create(e,t,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),a=new Ia(r,i,t);return s.forEach((c=>a.insert(c))),a}insert(e){if(this.ge===0)return;const t=Yl(e),[s,i]=Xl(t);for(let r=0;r<this.hashCount;r++){const a=this.ye(s,i,r);this.be(a)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ts extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,t,s,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const i=new Map;return i.set(e,Qs.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new br(B.min(),i,new ce(K),Ht(),J())}}class Qs{constructor(e,t,s,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Qs(s,t,J(),J(),J())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,t,s,i){this.Se=e,this.removedTargetIds=t,this.key=s,this.De=i}}class wd{constructor(e,t){this.targetId=e,this.Ce=t}}class bd{constructor(e,t,s=we.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=i}}class Zl{constructor(){this.ve=0,this.Fe=eu(),this.Me=we.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=J(),t=J(),s=J();return this.Fe.forEach(((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:s=s.add(i);break;default:q(38017,{changeType:r})}})),new Qs(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=eu()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,re(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class q_{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ht(),this.He=_i(),this.Je=_i(),this.Ze=new ce(K)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:q(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,i)=>{this.rt(i)&&t(i)}))}st(e){const t=e.targetId,s=e.Ce.count,i=this.ot(t);if(i){const r=i.target;if(Oo(r))if(s===0){const a=new U(r.path);this.et(t,a,Ie.newNoDocument(a,B.min()))}else re(s===1,20013,{expectedCount:s});else{const a=this._t(t);if(a!==s){const c=this.ut(e),u=c?this.ct(c,e,a):1;if(u!==0){this.it(t);const f=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,f)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=t;let a,c;try{a=Bt(s).toUint8Array()}catch(u){if(u instanceof Zh)return pn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Ia(a,i,r)}catch(u){return pn(u instanceof Ts?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let i=0;return s.forEach((r=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${r.path.canonicalString()}`;e.mightContain(c)||(this.et(t,r,null),i++)})),i}Tt(e){const t=new Map;this.ze.forEach(((r,a)=>{const c=this.ot(a);if(c){if(r.current&&Oo(c.target)){const u=new U(c.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,Ie.newNoDocument(u,e))}r.Be&&(t.set(a,r.ke()),r.Ke())}}));let s=J();this.Je.forEach(((r,a)=>{let c=!0;a.forEachWhile((u=>{const f=this.ot(u);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(s=s.add(r))})),this.je.forEach(((r,a)=>a.setReadTime(e)));const i=new br(e,t,this.Ze,this.je,s);return this.je=Ht(),this.He=_i(),this.Je=_i(),this.Ze=new ce(K),i}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.qe(t,1):i.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Zl,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new me(K),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new me(K),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||L("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Zl),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function _i(){return new ce(U.comparator)}function eu(){return new ce(U.comparator)}const H_={asc:"ASCENDING",desc:"DESCENDING"},z_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},G_={and:"AND",or:"OR"};class K_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Fo(n,e){return n.useProto3Json||pr(e)?e:{value:e}}function W_(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Q_(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Rn(n){return re(!!n,49232),B.fromTimestamp((function(t){const s=jt(t);return new ue(s.seconds,s.nanos)})(n))}function J_(n,e){return Uo(n,e).canonicalString()}function Uo(n,e){const t=(function(i){return new ie(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Td(n){const e=ie.fromString(n);return re(kd(e),10190,{key:e.toString()}),e}function lo(n,e){const t=Td(e);if(t.get(1)!==n.databaseId.projectId)throw new V(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new V(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new U(Id(t))}function Ed(n,e){return J_(n.databaseId,e)}function Y_(n){const e=Td(n);return e.length===4?ie.emptyPath():Id(e)}function tu(n){return new ie(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Id(n){return re(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function X_(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:q(39313,{state:f})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=(function(f,g){return f.useProto3Json?(re(g===void 0||typeof g=="string",58123),we.fromBase64String(g||"")):(re(g===void 0||g instanceof Buffer||g instanceof Uint8Array,16193),we.fromUint8Array(g||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(f){const g=f.code===void 0?x.UNKNOWN:_d(f.code);return new V(g,f.message||"")})(a);t=new bd(s,i,r,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=lo(n,s.document.name),r=Rn(s.document.updateTime),a=s.document.createTime?Rn(s.document.createTime):B.min(),c=new Xe({mapValue:{fields:s.document.fields}}),u=Ie.newFoundDocument(i,r,a,c),f=s.targetIds||[],g=s.removedTargetIds||[];t=new Di(f,g,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=lo(n,s.document),r=s.readTime?Rn(s.readTime):B.min(),a=Ie.newNoDocument(i,r),c=s.removedTargetIds||[];t=new Di([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=lo(n,s.document),r=s.removedTargetIds||[];t=new Di([],r,i,null)}else{if(!("filter"in e))return q(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,a=new U_(i,r),c=s.targetId;t=new wd(c,a)}}return t}function Z_(n,e){return{documents:[Ed(n,e.path)]}}function ew(n,e){const t={structuredQuery:{}},s=e.path;let i;e.collectionGroup!==null?(i=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Ed(n,i);const r=(function(f){if(f.length!==0)return Ad(ot.create(f,"and"))})(e.filters);r&&(t.structuredQuery.where=r);const a=(function(f){if(f.length!==0)return f.map((g=>(function(I){return{field:En(I.field),direction:sw(I.dir)}})(g)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Fo(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(f){return{before:f.inclusive,values:f.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(f){return{before:!f.inclusive,values:f.position}})(e.endAt)),{ft:t,parent:i}}function tw(n){let e=Y_(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let i=null;if(s>0){re(s===1,65062);const g=t.from[0];g.allDescendants?i=g.collectionId:e=e.child(g.collectionId)}let r=[];t.where&&(r=(function(w){const I=Sd(w);return I instanceof ot&&od(I)?I.getFilters():[I]})(t.where));let a=[];t.orderBy&&(a=(function(w){return w.map((I=>(function(N){return new Wi(In(N.field),(function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(N.direction))})(I)))})(t.orderBy));let c=null;t.limit&&(c=(function(w){let I;return I=typeof w=="object"?w.value:w,pr(I)?null:I})(t.limit));let u=null;t.startAt&&(u=(function(w){const I=!!w.before,R=w.values||[];return new Ki(R,I)})(t.startAt));let f=null;return t.endAt&&(f=(function(w){const I=!w.before,R=w.values||[];return new Ki(R,I)})(t.endAt)),__(e,i,a,r,c,"F",u,f)}function nw(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Sd(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=In(t.unaryFilter.field);return pe.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=In(t.unaryFilter.field);return pe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=In(t.unaryFilter.field);return pe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=In(t.unaryFilter.field);return pe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return q(61313);default:return q(60726)}})(n):n.fieldFilter!==void 0?(function(t){return pe.create(In(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return q(58110);default:return q(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return ot.create(t.compositeFilter.filters.map((s=>Sd(s))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return q(1026)}})(t.compositeFilter.op))})(n):q(30097,{filter:n})}function sw(n){return H_[n]}function iw(n){return z_[n]}function rw(n){return G_[n]}function En(n){return{fieldPath:n.canonicalString()}}function In(n){return Re.fromServerFormat(n.fieldPath)}function Ad(n){return n instanceof pe?(function(t){if(t.op==="=="){if(Bl(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NAN"}};if(jl(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Bl(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NOT_NAN"}};if(jl(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:En(t.field),op:iw(t.op),value:t.value}}})(n):n instanceof ot?(function(t){const s=t.getFilters().map((i=>Ad(i)));return s.length===1?s[0]:{compositeFilter:{op:rw(t.op),filters:s}}})(n):q(54877,{filter:n})}function kd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,t,s,i,r=B.min(),a=B.min(),c=we.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Dt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Dt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Dt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Dt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e){this.yt=e}}function aw(n){const e=tw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Mo(e,e.limit,"L"):e}/**
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
 */class cw{constructor(){this.Sn=new lw}addToCollectionParentIndex(e,t){return this.Sn.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(Ut.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(Ut.min())}updateCollectionGroup(e,t,s){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class lw{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t]||new me(ie.comparator),r=!i.has(s);return this.index[t]=i.add(s),r}has(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t];return i&&i.has(s)}getEntries(e){return(this.index[e]||new me(ie.comparator)).toArray()}}/**
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
 */const nu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Cd=41943040;class Le{static withCacheSize(e){return new Le(e,Le.DEFAULT_COLLECTION_PERCENTILE,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Le.DEFAULT_COLLECTION_PERCENTILE=10,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Le.DEFAULT=new Le(Cd,Le.DEFAULT_COLLECTION_PERCENTILE,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Le.DISABLED=new Le(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Fn(0)}static ar(){return new Fn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su="LruGarbageCollector",uw=1048576;function iu([n,e],[t,s]){const i=K(n,t);return i===0?K(e,s):i}class hw{constructor(e){this.Pr=e,this.buffer=new me(iu),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();iu(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class dw{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){L(su,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Yn(t)?L(su,"Ignoring IndexedDB error during garbage collection: ",t):await dr(t)}await this.Ar(3e5)}))}}class fw{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return C.resolve(fr.ce);const s=new hw(t);return this.Vr.forEachTarget(e,(i=>s.Er(i.sequenceNumber))).next((()=>this.Vr.mr(e,(i=>s.Er(i))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(nu)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),nu):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,i,r,a,c,u,f;const g=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),i=this.params.maximumSequenceNumbersToCollect):i=w,a=Date.now(),this.nthSequenceNumber(e,i)))).next((w=>(s=w,c=Date.now(),this.removeTargets(e,s,t)))).next((w=>(r=w,u=Date.now(),this.removeOrphanedDocuments(e,s)))).next((w=>(f=Date.now(),bn()<=z.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-g}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${r} targets in `+(u-c)+`ms
	Removed ${w} documents in `+(f-u)+`ms
Total Duration: ${f-g}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:w}))))}}function pw(n,e){return new fw(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(){this.changes=new mn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ie.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?C.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class gw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,t,s,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(s=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(s!==null&&Ds(s.mutation,i,xt.empty(),ue.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,J()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=J()){const i=on();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,s).next((r=>{let a=bs();return r.forEach(((c,u)=>{a=a.insert(c,u.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const s=on();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,J())))}populateOverlays(e,t,s){const i=[];return s.forEach((r=>{t.has(r)||i.push(r)})),this.documentOverlayCache.getOverlays(e,i).next((r=>{r.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,s,i){let r=Ht();const a=xs(),c=(function(){return xs()})();return t.forEach(((u,f)=>{const g=s.get(f.key);i.has(f.key)&&(g===void 0||g.mutation instanceof wr)?r=r.insert(f.key,f):g!==void 0?(a.set(f.key,g.mutation.getFieldMask()),Ds(g.mutation,f,g.mutation.getFieldMask(),ue.now())):a.set(f.key,xt.empty())})),this.recalculateAndSaveOverlays(e,r).next((u=>(u.forEach(((f,g)=>a.set(f,g))),t.forEach(((f,g)=>c.set(f,new gw(g,a.get(f)??null)))),c)))}recalculateAndSaveOverlays(e,t){const s=xs();let i=new ce(((a,c)=>a-c)),r=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((u=>{const f=t.get(u);if(f===null)return;let g=s.get(u)||xt.empty();g=c.applyToLocalView(f,g),s.set(u,g);const w=(i.get(c.batchId)||J()).add(u);i=i.insert(c.batchId,w)}))})).next((()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),f=u.key,g=u.value,w=fd();g.forEach((I=>{if(!r.has(I)){const R=yd(t.get(I),s.get(I));R!==null&&w.set(I,R),r=r.add(I)}})),a.push(this.documentOverlayCache.saveOverlays(e,f,w))}return C.waitFor(a)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,i){return w_(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):b_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,i):this.getDocumentsMatchingCollectionQuery(e,t,s,i)}getNextDocuments(e,t,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,i).next((r=>{const a=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,i-r.size):C.resolve(on());let c=Ms,u=r;return a.next((f=>C.forEach(f,((g,w)=>(c<w.largestBatchId&&(c=w.largestBatchId),r.get(g)?C.resolve():this.remoteDocumentCache.getEntry(e,g).next((I=>{u=u.insert(g,I)}))))).next((()=>this.populateOverlays(e,f,r))).next((()=>this.computeViews(e,u,f,J()))).next((g=>({batchId:c,changes:A_(g)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next((s=>{let i=bs();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,i){const r=t.collectionGroup;let a=bs();return this.indexManager.getCollectionParents(e,r).next((c=>C.forEach(c,(u=>{const f=(function(w,I){return new gr(I,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(t,u.child(r));return this.getDocumentsMatchingCollectionQuery(e,f,s,i).next((g=>{g.forEach(((w,I)=>{a=a.insert(w,I)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((a=>(r=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,r,i)))).next((a=>{r.forEach(((u,f)=>{const g=f.getKey();a.get(g)===null&&(a=a.insert(g,Ie.newInvalidDocument(g)))}));let c=bs();return a.forEach(((u,f)=>{const g=r.get(u);g!==void 0&&Ds(g.mutation,f,xt.empty(),ue.now()),vr(t,f)&&(c=c.insert(u,f))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return C.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:Rn(i.createTime)}})(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(i){return{name:i.name,query:aw(i.bundledQuery),readTime:Rn(i.readTime)}})(t)),C.resolve()}}/**
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
 */class _w{constructor(){this.overlays=new ce(U.comparator),this.Lr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const s=on();return C.forEach(t,(i=>this.getOverlay(e,i).next((r=>{r!==null&&s.set(i,r)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((i,r)=>{this.bt(e,t,r)})),C.resolve()}removeOverlaysForBatchId(e,t,s){const i=this.Lr.get(s);return i!==void 0&&(i.forEach((r=>this.overlays=this.overlays.remove(r))),this.Lr.delete(s)),C.resolve()}getOverlaysForCollection(e,t,s){const i=on(),r=t.length+1,a=new U(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,f=u.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===r&&u.largestBatchId>s&&i.set(u.getKey(),u)}return C.resolve(i)}getOverlaysForCollectionGroup(e,t,s,i){let r=new ce(((f,g)=>f-g));const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>s){let g=r.get(f.largestBatchId);g===null&&(g=on(),r=r.insert(f.largestBatchId,g)),g.set(f.getKey(),f)}}const c=on(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((f,g)=>c.set(f,g))),!(c.size()>=i)););return C.resolve(c)}bt(e,t,s){const i=this.overlays.get(s.key);if(i!==null){const a=this.Lr.get(i.largestBatchId).delete(s.key);this.Lr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new F_(t,s));let r=this.Lr.get(t);r===void 0&&(r=J(),this.Lr.set(t,r)),this.Lr.set(t,r.add(s.key))}}/**
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
 */class ww{constructor(){this.sessionToken=we.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(){this.kr=new me(ye.Kr),this.qr=new me(ye.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new ye(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new ye(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new U(new ie([])),s=new ye(t,e),i=new ye(t,e+1),r=[];return this.qr.forEachInRange([s,i],(a=>{this.Wr(a),r.push(a.key)})),r}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new U(new ie([])),s=new ye(t,e),i=new ye(t,e+1);let r=J();return this.qr.forEachInRange([s,i],(a=>{r=r.add(a.key)})),r}containsKey(e){const t=new ye(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class ye{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return U.comparator(e.key,t.key)||K(e.Hr,t.Hr)}static Ur(e,t){return K(e.Hr,t.Hr)||U.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new me(ye.Kr)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,i){const r=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new $_(r,t,s,i);this.mutationQueue.push(a);for(const c of i)this.Jr=this.Jr.add(new ye(c.key,r)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return C.resolve(a)}lookupMutationBatch(e,t){return C.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=this.Xr(s),r=i<0?0:i;return C.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?Yv:this.Yn-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new ye(t,0),i=new ye(t,Number.POSITIVE_INFINITY),r=[];return this.Jr.forEachInRange([s,i],(a=>{const c=this.Zr(a.Hr);r.push(c)})),C.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new me(K);return t.forEach((i=>{const r=new ye(i,0),a=new ye(i,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([r,a],(c=>{s=s.add(c.Hr)}))})),C.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1;let r=s;U.isDocumentKey(r)||(r=r.child(""));const a=new ye(new U(r),0);let c=new me(K);return this.Jr.forEachWhile((u=>{const f=u.key.path;return!!s.isPrefixOf(f)&&(f.length===i&&(c=c.add(u.Hr)),!0)}),a),C.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((s=>{const i=this.Zr(s);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){re(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Jr;return C.forEach(t.mutations,(i=>{const r=new ye(i.key,t.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Jr=s}))}nr(e){}containsKey(e,t){const s=new ye(t,0),i=this.Jr.firstAfterOrEqual(s);return C.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e){this.ti=e,this.docs=(function(){return new ce(U.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,i=this.docs.get(s),r=i?i.size:0,a=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return C.resolve(s?s.document.mutableCopy():Ie.newInvalidDocument(t))}getEntries(e,t){let s=Ht();return t.forEach((i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Ie.newInvalidDocument(i))})),C.resolve(s)}getDocumentsMatchingQuery(e,t,s,i){let r=Ht();const a=t.path,c=new U(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:f,value:{document:g}}=u.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||Kv(Gv(g),s)<=0||(i.has(g.key)||vr(t,g))&&(r=r.insert(g.key,g.mutableCopy()))}return C.resolve(r)}getAllFromCollectionGroup(e,t,s,i){q(9500)}ni(e,t){return C.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new Ew(this)}getSize(e){return C.resolve(this.size)}}class Ew extends mw{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,i)=>{i.isValidDocument()?t.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(s)})),C.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e){this.persistence=e,this.ri=new mn((t=>_a(t)),wa),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.ii=0,this.si=new Sa,this.targetCount=0,this.oi=Fn._r()}forEachTarget(e,t){return this.ri.forEach(((s,i)=>t(i))),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),C.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Fn(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.lr(t),C.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,s){let i=0;const r=[];return this.ri.forEach(((a,c)=>{c.sequenceNumber<=t&&s.get(c.targetId)===null&&(this.ri.delete(a),r.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)})),C.waitFor(r).next((()=>i))}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return C.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),C.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach((a=>{r.push(i.markPotentiallyOrphaned(e,a))})),C.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return C.resolve(s)}containsKey(e,t){return C.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,t){this._i={},this.overlays={},this.ai=new fr(0),this.ui=!1,this.ui=!0,this.ci=new ww,this.referenceDelegate=e(this),this.li=new Iw(this),this.indexManager=new cw,this.remoteDocumentCache=(function(i){return new Tw(i)})((s=>this.referenceDelegate.hi(s))),this.serializer=new ow(t),this.Pi=new vw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new _w,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new bw(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){L("MemoryPersistence","Starting transaction:",e);const i=new Sw(this.ai.next());return this.referenceDelegate.Ti(),s(i).next((r=>this.referenceDelegate.Ii(i).next((()=>r)))).toPromise().then((r=>(i.raiseOnCommittedEvent(),r)))}Ei(e,t){return C.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class Sw extends Qv{constructor(e){super(),this.currentSequenceNumber=e}}class Aa{constructor(e){this.persistence=e,this.Ri=new Sa,this.Ai=null}static Vi(e){return new Aa(e)}get di(){if(this.Ai)return this.Ai;throw q(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),C.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),C.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((i=>this.di.add(i.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((r=>this.di.add(r.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.di,(s=>{const i=U.fromPath(s);return this.mi(e,i).next((r=>{r||t.removeEntry(i,B.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return C.or([()=>C.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Yi{constructor(e,t){this.persistence=e,this.fi=new mn((s=>Xv(s.path)),((s,i)=>s.isEqual(i))),this.garbageCollector=pw(this,t)}static Vi(e,t){return new Yi(e,t)}Ti(){}Ii(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((i=>s+i))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return C.forEach(this.fi,((s,i)=>this.wr(e,s,i).next((r=>r?C.resolve():t(i)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const i=this.persistence.getRemoteDocumentCache(),r=i.newChangeBuffer();return i.ni(e,(a=>this.wr(e,a,t).next((c=>{c||(s++,r.removeEntry(a,B.min()))})))).next((()=>r.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),C.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),C.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Pi(e.data.value)),t}wr(e,t,s){return C.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.fi.get(t);return C.resolve(i!==void 0&&i>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,t,s,i){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=i}static Es(e,t){let s=J(),i=J();for(const r of t.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new ka(e,t.fromCache,s,i)}}/**
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
 */class Aw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class kw{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return _p()?8:Jv(Se())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,i){const r={result:null};return this.gs(e,t).next((a=>{r.result=a})).next((()=>{if(!r.result)return this.ps(e,t,i,s).next((a=>{r.result=a}))})).next((()=>{if(r.result)return;const a=new Aw;return this.ys(e,t,a).next((c=>{if(r.result=c,this.As)return this.ws(e,t,a,c.size)}))})).next((()=>r.result))}ws(e,t,s,i){return s.documentReadCount<this.Vs?(bn()<=z.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",Tn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),C.resolve()):(bn()<=z.DEBUG&&L("QueryEngine","Query:",Tn(t),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.ds*i?(bn()<=z.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",Tn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,st(t))):C.resolve())}gs(e,t){if(Gl(t))return C.resolve(null);let s=st(t);return this.indexManager.getIndexType(e,s).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=Mo(t,null,"F"),s=st(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((r=>{const a=J(...r);return this.fs.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,s).next((u=>{const f=this.bs(t,c);return this.Ss(t,f,a,u.readTime)?this.gs(e,Mo(t,null,"F")):this.Ds(e,f,t,u)}))))})))))}ps(e,t,s,i){return Gl(t)||i.isEqual(B.min())?C.resolve(null):this.fs.getDocuments(e,s).next((r=>{const a=this.bs(t,r);return this.Ss(t,a,s,i)?C.resolve(null):(bn()<=z.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Tn(t)),this.Ds(e,a,t,zv(i,Ms)).next((c=>c)))}))}bs(e,t){let s=new me(hd(e));return t.forEach(((i,r)=>{vr(e,r)&&(s=s.add(r))})),s}Ss(e,t,s,i){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}ys(e,t,s){return bn()<=z.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Tn(t)),this.fs.getDocumentsMatchingQuery(e,t,Ut.min(),s)}Ds(e,t,s,i){return this.fs.getDocumentsMatchingQuery(e,s,i).next((r=>(t.forEach((a=>{r=r.insert(a.key,a)})),r)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca="LocalStore",Cw=3e8;class Rw{constructor(e,t,s,i){this.persistence=e,this.Cs=t,this.serializer=i,this.vs=new ce(K),this.Fs=new mn((r=>_a(r)),wa),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yw(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function Pw(n,e,t,s){return new Rw(n,e,t,s)}async function Pd(n,e){const t=Q(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let i;return t.mutationQueue.getAllMutationBatches(s).next((r=>(i=r,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((r=>{const a=[],c=[];let u=J();for(const f of i){a.push(f.batchId);for(const g of f.mutations)u=u.add(g.key)}for(const f of r){c.push(f.batchId);for(const g of f.mutations)u=u.add(g.key)}return t.localDocuments.getDocuments(s,u).next((f=>({Ns:f,removedBatchIds:a,addedBatchIds:c})))}))}))}function xd(n){const e=Q(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function xw(n,e){const t=Q(n),s=e.snapshotVersion;let i=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});i=t.vs;const c=[];e.targetChanges.forEach(((g,w)=>{const I=i.get(w);if(!I)return;c.push(t.li.removeMatchingKeys(r,g.removedDocuments,w).next((()=>t.li.addMatchingKeys(r,g.addedDocuments,w))));let R=I.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(w)!==null?R=R.withResumeToken(we.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):g.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(g.resumeToken,s)),i=i.insert(w,R),(function($,M,Y){return $.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=Cw?!0:Y.addedDocuments.size+Y.modifiedDocuments.size+Y.removedDocuments.size>0})(I,R,g)&&c.push(t.li.updateTargetData(r,R))}));let u=Ht(),f=J();if(e.documentUpdates.forEach((g=>{e.resolvedLimboDocuments.has(g)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(r,g))})),c.push(Dw(r,a,e.documentUpdates).next((g=>{u=g.Bs,f=g.Ls}))),!s.isEqual(B.min())){const g=t.li.getLastRemoteSnapshotVersion(r).next((w=>t.li.setTargetsMetadata(r,r.currentSequenceNumber,s)));c.push(g)}return C.waitFor(c).next((()=>a.apply(r))).next((()=>t.localDocuments.getLocalViewOfDocuments(r,u,f))).next((()=>u))})).then((r=>(t.vs=i,r)))}function Dw(n,e,t){let s=J(),i=J();return t.forEach((r=>s=s.add(r))),e.getEntries(n,s).next((r=>{let a=Ht();return t.forEach(((c,u)=>{const f=r.get(c);u.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(B.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!f.isValidDocument()||u.version.compareTo(f.version)>0||u.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):L(Ca,"Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",u.version)})),{Bs:a,Ls:i}}))}function Lw(n,e){const t=Q(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let i;return t.li.getTargetData(s,e).next((r=>r?(i=r,C.resolve(i)):t.li.allocateTargetId(s).next((a=>(i=new Dt(e,a,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,i).next((()=>i)))))))})).then((s=>{const i=t.vs.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function jo(n,e,t){const s=Q(n),i=s.vs.get(e),r=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",r,(a=>s.persistence.referenceDelegate.removeTarget(a,i)))}catch(a){if(!Yn(a))throw a;L(Ca,`Failed to update sequence numbers for target ${e}: ${a}`)}s.vs=s.vs.remove(e),s.Fs.delete(i.target)}function ru(n,e,t){const s=Q(n);let i=B.min(),r=J();return s.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,f,g){const w=Q(u),I=w.Fs.get(g);return I!==void 0?C.resolve(w.vs.get(I)):w.li.getTargetData(f,g)})(s,a,st(e)).next((c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(a,c.targetId).next((u=>{r=u}))})).next((()=>s.Cs.getDocumentsMatchingQuery(a,e,t?i:B.min(),t?r:J()))).next((c=>(Nw(s,E_(e),c),{documents:c,ks:r})))))}function Nw(n,e,t){let s=n.Ms.get(e)||B.min();t.forEach(((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)})),n.Ms.set(e,s)}class ou{constructor(){this.activeTargetIds=R_()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ow{constructor(){this.vo=new ou,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new ou,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Mw{Mo(e){}shutdown(){}}/**
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
 */const au="ConnectivityMonitor";class cu{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){L(au,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){L(au,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let wi=null;function Bo(){return wi===null?wi=(function(){return 268435456+Math.round(2147483648*Math.random())})():wi++,"0x"+wi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo="RestConnection",Vw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class $w{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${i}`,this.$o=this.databaseId.database===Gi?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Wo(e,t,s,i,r){const a=Bo(),c=this.Qo(e,t.toUriEncodedString());L(uo,`Sending RPC '${e}' ${a}:`,c,s);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,r);const{host:f}=new URL(c),g=qn(f);return this.zo(e,c,u,s,g).then((w=>(L(uo,`Received RPC '${e}' ${a}: `,w),w)),(w=>{throw pn(uo,`RPC '${e}' ${a} failed with error: `,w,"url: ",c,"request:",s),w}))}jo(e,t,s,i,r,a){return this.Wo(e,t,s,i,r)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Jn})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,r)=>e[r]=i)),s&&s.headers.forEach(((i,r)=>e[r]=i))}Qo(e,t){const s=Vw[e];let i=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te="WebChannelConnection",gs=(n,e,t)=>{n.listen(e,(s=>{try{t(s)}catch(i){setTimeout((()=>{throw i}),0)}}))};class Pn extends $w{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Pn.c_){const e=Kh();gs(e,Gh.STAT_EVENT,(t=>{t.stat===Co.PROXY?L(Te,"STAT_EVENT: detected buffering proxy"):t.stat===Co.NOPROXY&&L(Te,"STAT_EVENT: detected no buffering proxy")})),Pn.c_=!0}}zo(e,t,s,i,r){const a=Bo();return new Promise(((c,u)=>{const f=new Hh;f.setWithCredentials(!0),f.listenOnce(zh.COMPLETE,(()=>{try{switch(f.getLastErrorCode()){case Ci.NO_ERROR:const w=f.getResponseJson();L(Te,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(w)),c(w);break;case Ci.TIMEOUT:L(Te,`RPC '${e}' ${a} timed out`),u(new V(x.DEADLINE_EXCEEDED,"Request time out"));break;case Ci.HTTP_ERROR:const I=f.getStatus();if(L(Te,`RPC '${e}' ${a} failed with status:`,I,"response text:",f.getResponseText()),I>0){let R=f.getResponseJson();Array.isArray(R)&&(R=R[0]);const N=R==null?void 0:R.error;if(N&&N.status&&N.message){const $=(function(Y){const Z=Y.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(Z)>=0?Z:x.UNKNOWN})(N.status);u(new V($,N.message))}else u(new V(x.UNKNOWN,"Server responded with status "+f.getStatus()))}else u(new V(x.UNAVAILABLE,"Connection failed."));break;default:q(9055,{l_:e,streamId:a,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{L(Te,`RPC '${e}' ${a} completed.`)}}));const g=JSON.stringify(i);L(Te,`RPC '${e}' ${a} sending request:`,i),f.send(t,"POST",g,s,15)}))}T_(e,t,s){const i=Bo(),r=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const f=r.join("");L(Te,`Creating RPC '${e}' stream ${i}: ${f}`,c);const g=a.createWebChannel(f,c);this.I_(g);let w=!1,I=!1;const R=new Fw({Ho:N=>{I?L(Te,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(w||(L(Te,`Opening RPC '${e}' stream ${i} transport.`),g.open(),w=!0),L(Te,`RPC '${e}' stream ${i} sending:`,N),g.send(N))},Jo:()=>g.close()});return gs(g,ws.EventType.OPEN,(()=>{I||(L(Te,`RPC '${e}' stream ${i} transport opened.`),R.i_())})),gs(g,ws.EventType.CLOSE,(()=>{I||(I=!0,L(Te,`RPC '${e}' stream ${i} transport closed`),R.o_(),this.E_(g))})),gs(g,ws.EventType.ERROR,(N=>{I||(I=!0,pn(Te,`RPC '${e}' stream ${i} transport errored. Name:`,N.name,"Message:",N.message),R.o_(new V(x.UNAVAILABLE,"The operation could not be completed")))})),gs(g,ws.EventType.MESSAGE,(N=>{var $;if(!I){const M=N.data[0];re(!!M,16349);const Y=M,Z=(Y==null?void 0:Y.error)||(($=Y[0])==null?void 0:$.error);if(Z){L(Te,`RPC '${e}' stream ${i} received error:`,Z);const j=Z.status;let G=(function(b){const y=le[b];if(y!==void 0)return _d(y)})(j),ee=Z.message;j==="NOT_FOUND"&&ee.includes("database")&&ee.includes("does not exist")&&ee.includes(this.databaseId.database)&&pn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),G===void 0&&(G=x.INTERNAL,ee="Unknown error status: "+j+" with message "+Z.message),I=!0,R.o_(new V(G,ee)),g.close()}else L(Te,`RPC '${e}' stream ${i} received:`,M),R.__(M)}})),Pn.u_(),setTimeout((()=>{R.s_()}),0),R}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Wh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(n){return new Pn(n)}function ho(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(n){return new K_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pn.c_=!1;class Ld{constructor(e,t,s=1e3,i=1.5,r=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=i,this.V_=r,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-s);i>0&&L("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu="PersistentStream";class jw{constructor(e,t,s,i,r,a,c,u){this.Ci=e,this.b_=s,this.S_=i,this.connection=r,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Ld(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===x.RESOURCE_EXHAUSTED?(mt(t.toString()),mt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,i])=>{this.D_===t&&this.G_(s,i)}),(s=>{e((()=>{const i=new V(x.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(i)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((i=>{s((()=>this.z_(i)))})),this.stream.onMessage((i=>{s((()=>++this.F_==1?this.H_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return L(lu,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(L(lu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Bw extends jw{constructor(e,t,s,i,r,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,i,a),this.serializer=r}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=X_(this.serializer,e),s=(function(r){if(!("targetChange"in r))return B.min();const a=r.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?Rn(a.readTime):B.min()})(e);return this.listener.J_(t,s)}Z_(e){const t={};t.database=tu(this.serializer),t.addTarget=(function(r,a){let c;const u=a.target;if(c=Oo(u)?{documents:Z_(r,u)}:{query:ew(r,u).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Q_(r,a.resumeToken);const f=Fo(r,a.expectedCount);f!==null&&(c.expectedCount=f)}else if(a.snapshotVersion.compareTo(B.min())>0){c.readTime=W_(r,a.snapshotVersion.toTimestamp());const f=Fo(r,a.expectedCount);f!==null&&(c.expectedCount=f)}return c})(this.serializer,e);const s=nw(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=tu(this.serializer),t.removeTarget=e,this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{}class Hw extends qw{constructor(e,t,s,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new V(x.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,a])=>this.connection.Wo(e,Uo(t,s),i,r,a))).catch((r=>{throw r.name==="FirebaseError"?(r.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new V(x.UNKNOWN,r.toString())}))}jo(e,t,s,i,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.jo(e,Uo(t,s),i,a,c,r))).catch((a=>{throw a.name==="FirebaseError"?(a.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(x.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function zw(n,e,t,s){return new Hw(n,e,t,s)}class Gw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(mt(t),this.aa=!1):L("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un="RemoteStore";class Kw{constructor(e,t,s,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=r,this.Aa.Mo((a=>{s.enqueueAndForget((async()=>{Ys(this)&&(L(Un,"Restarting streams for network reachability change."),await(async function(u){const f=Q(u);f.Ea.add(4),await Js(f),f.Va.set("Unknown"),f.Ea.delete(4),await Tr(f)})(this))}))})),this.Va=new Gw(s,i)}}async function Tr(n){if(Ys(n))for(const e of n.Ra)await e(!0)}async function Js(n){for(const e of n.Ra)await e(!1)}function Nd(n,e){const t=Q(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Da(t)?xa(t):Xn(t).O_()&&Pa(t,e))}function Ra(n,e){const t=Q(n),s=Xn(t);t.Ia.delete(e),s.O_()&&Od(t,e),t.Ia.size===0&&(s.O_()?s.L_():Ys(t)&&t.Va.set("Unknown"))}function Pa(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Xn(n).Z_(e)}function Od(n,e){n.da.$e(e),Xn(n).X_(e)}function xa(n){n.da=new q_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Xn(n).start(),n.Va.ua()}function Da(n){return Ys(n)&&!Xn(n).x_()&&n.Ia.size>0}function Ys(n){return Q(n).Ea.size===0}function Md(n){n.da=void 0}async function Ww(n){n.Va.set("Online")}async function Qw(n){n.Ia.forEach(((e,t)=>{Pa(n,e)}))}async function Jw(n,e){Md(n),Da(n)?(n.Va.ha(e),xa(n)):n.Va.set("Unknown")}async function Yw(n,e,t){if(n.Va.set("Online"),e instanceof bd&&e.state===2&&e.cause)try{await(async function(i,r){const a=r.cause;for(const c of r.targetIds)i.Ia.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.Ia.delete(c),i.da.removeTarget(c))})(n,e)}catch(s){L(Un,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await uu(n,s)}else if(e instanceof Di?n.da.Xe(e):e instanceof wd?n.da.st(e):n.da.tt(e),!t.isEqual(B.min()))try{const s=await xd(n.localStore);t.compareTo(s)>=0&&await(function(r,a){const c=r.da.Tt(a);return c.targetChanges.forEach(((u,f)=>{if(u.resumeToken.approximateByteSize()>0){const g=r.Ia.get(f);g&&r.Ia.set(f,g.withResumeToken(u.resumeToken,a))}})),c.targetMismatches.forEach(((u,f)=>{const g=r.Ia.get(u);if(!g)return;r.Ia.set(u,g.withResumeToken(we.EMPTY_BYTE_STRING,g.snapshotVersion)),Od(r,u);const w=new Dt(g.target,u,f,g.sequenceNumber);Pa(r,w)})),r.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(s){L(Un,"Failed to raise snapshot:",s),await uu(n,s)}}async function uu(n,e,t){if(!Yn(e))throw e;n.Ea.add(1),await Js(n),n.Va.set("Offline"),t||(t=()=>xd(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{L(Un,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Tr(n)}))}async function hu(n,e){const t=Q(n);t.asyncQueue.verifyOperationInProgress(),L(Un,"RemoteStore received new credentials");const s=Ys(t);t.Ea.add(3),await Js(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Tr(t)}async function Xw(n,e){const t=Q(n);e?(t.Ea.delete(2),await Tr(t)):e||(t.Ea.add(2),await Js(t),t.Va.set("Unknown"))}function Xn(n){return n.ma||(n.ma=(function(t,s,i){const r=Q(t);return r.sa(),new Bw(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)})(n.datastore,n.asyncQueue,{Zo:Ww.bind(null,n),Yo:Qw.bind(null,n),t_:Jw.bind(null,n),J_:Yw.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),Da(n)?xa(n):n.Va.set("Unknown")):(await n.ma.stop(),Md(n))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,t,s,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Cn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,i,r){const a=Date.now()+s,c=new La(e,t,a,i,r);return c.start(s),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vd(n,e){if(mt("AsyncQueue",`${e}: ${n}`),Yn(n))return new V(x.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{static emptySet(e){return new xn(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||U.comparator(t.key,s.key):(t,s)=>U.comparator(t.key,s.key),this.keyedMap=bs(),this.sortedSet=new ce(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof xn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new xn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(){this.ga=new ce(U.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):q(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class jn{constructor(e,t,s,i,r,a,c,u,f){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=f}static fromInitialDocuments(e,t,s,i,r){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new jn(e,t,xn.emptySet(t),a,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==s[i].type||!t[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class eb{constructor(){this.queries=fu(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const i=Q(t),r=i.queries;i.queries=fu(),r.forEach(((a,c)=>{for(const u of c.ba)u.onError(s)}))})(this,new V(x.ABORTED,"Firestore shutting down"))}}function fu(){return new mn((n=>ud(n)),yr)}async function tb(n,e){const t=Q(n);let s=3;const i=e.query;let r=t.queries.get(i);r?!r.Sa()&&e.Da()&&(s=2):(r=new Zw,s=e.Da()?0:1);try{switch(s){case 0:r.wa=await t.onListen(i,!0);break;case 1:r.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const c=Vd(a,`Initialization of query '${Tn(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,r),r.ba.push(e),e.va(t.onlineState),r.wa&&e.Fa(r.wa)&&Na(t)}async function nb(n,e){const t=Q(n),s=e.query;let i=3;const r=t.queries.get(s);if(r){const a=r.ba.indexOf(e);a>=0&&(r.ba.splice(a,1),r.ba.length===0?i=e.Da()?0:1:!r.Sa()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function sb(n,e){const t=Q(n);let s=!1;for(const i of e){const r=i.query,a=t.queries.get(r);if(a){for(const c of a.ba)c.Fa(i)&&(s=!0);a.wa=i}}s&&Na(t)}function ib(n,e,t){const s=Q(n),i=s.queries.get(e);if(i)for(const r of i.ba)r.onError(t);s.queries.delete(e)}function Na(n){n.Ca.forEach((e=>{e.next()}))}var qo,pu;(pu=qo||(qo={})).Ma="default",pu.Cache="cache";class rb{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new jn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.Ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=jn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==qo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e){this.key=e}}class Fd{constructor(e){this.key=e}}class ob{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=J(),this.mutatedKeys=J(),this.eu=hd(e),this.tu=new xn(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new du,i=t?t.tu:this.tu;let r=t?t.mutatedKeys:this.mutatedKeys,a=i,c=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((g,w)=>{const I=i.get(g),R=vr(this.query,w)?w:null,N=!!I&&this.mutatedKeys.has(I.key),$=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let M=!1;I&&R?I.data.isEqual(R.data)?N!==$&&(s.track({type:3,doc:R}),M=!0):this.su(I,R)||(s.track({type:2,doc:R}),M=!0,(u&&this.eu(R,u)>0||f&&this.eu(R,f)<0)&&(c=!0)):!I&&R?(s.track({type:0,doc:R}),M=!0):I&&!R&&(s.track({type:1,doc:I}),M=!0,(u||f)&&(c=!0)),M&&(R?(a=a.add(R),r=$?r.add(g):r.delete(g)):(a=a.delete(g),r=r.delete(g)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const g=this.query.limitType==="F"?a.last():a.first();a=a.delete(g.key),r=r.delete(g.key),s.track({type:1,doc:g})}return{tu:a,iu:s,Ss:c,mutatedKeys:r}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,i){const r=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((g,w)=>(function(R,N){const $=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q(20277,{Vt:M})}};return $(R)-$(N)})(g.type,w.type)||this.eu(g.doc,w.doc))),this.ou(s),i=i??!1;const c=t&&!i?this._u():[],u=this.Ya.size===0&&this.current&&!i?1:0,f=u!==this.Xa;return this.Xa=u,a.length!==0||f?{snapshot:new jn(this.query,e.tu,r,a,e.mutatedKeys,u===0,f,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new du,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=J(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new Fd(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new $d(s))})),t}cu(e){this.Za=e.ks,this.Ya=J();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return jn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Oa="SyncEngine";class ab{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class cb{constructor(e){this.key=e,this.hu=!1}}class lb{constructor(e,t,s,i,r,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new mn((c=>ud(c)),yr),this.Iu=new Map,this.Eu=new Set,this.Ru=new ce(U.comparator),this.Au=new Map,this.Vu=new Sa,this.du={},this.mu=new Map,this.fu=Fn.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function ub(n,e,t=!0){const s=Hd(n);let i;const r=s.Tu.get(e);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.lu()):i=await Ud(s,e,t,!0),i}async function hb(n,e){const t=Hd(n);await Ud(t,e,!0,!1)}async function Ud(n,e,t,s){const i=await Lw(n.localStore,st(e)),r=i.targetId,a=n.sharedClientState.addLocalQueryTarget(r,t);let c;return s&&(c=await db(n,e,r,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Nd(n.remoteStore,i),c}async function db(n,e,t,s,i){n.pu=(w,I,R)=>(async function($,M,Y,Z){let j=M.view.ru(Y);j.Ss&&(j=await ru($.localStore,M.query,!1).then((({documents:b})=>M.view.ru(b,j))));const G=Z&&Z.targetChanges.get(M.targetId),ee=Z&&Z.targetMismatches.get(M.targetId)!=null,te=M.view.applyChanges(j,$.isPrimaryClient,G,ee);return gu($,M.targetId,te.au),te.snapshot})(n,w,I,R);const r=await ru(n.localStore,e,!0),a=new ob(e,r.ks),c=a.ru(r.documents),u=Qs.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",i),f=a.applyChanges(c,n.isPrimaryClient,u);gu(n,t,f.au);const g=new ab(e,t,a);return n.Tu.set(e,g),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),f.snapshot}async function fb(n,e,t){const s=Q(n),i=s.Tu.get(e),r=s.Iu.get(i.targetId);if(r.length>1)return s.Iu.set(i.targetId,r.filter((a=>!yr(a,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await jo(s.localStore,i.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(i.targetId),t&&Ra(s.remoteStore,i.targetId),Ho(s,i.targetId)})).catch(dr)):(Ho(s,i.targetId),await jo(s.localStore,i.targetId,!0))}async function pb(n,e){const t=Q(n),s=t.Tu.get(e),i=t.Iu.get(s.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Ra(t.remoteStore,s.targetId))}async function jd(n,e){const t=Q(n);try{const s=await xw(t.localStore,e);e.targetChanges.forEach(((i,r)=>{const a=t.Au.get(r);a&&(re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.hu=!0:i.modifiedDocuments.size>0?re(a.hu,14607):i.removedDocuments.size>0&&(re(a.hu,42227),a.hu=!1))})),await qd(t,s,e)}catch(s){await dr(s)}}function mu(n,e,t){const s=Q(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const i=[];s.Tu.forEach(((r,a)=>{const c=a.view.va(e);c.snapshot&&i.push(c.snapshot)})),(function(a,c){const u=Q(a);u.onlineState=c;let f=!1;u.queries.forEach(((g,w)=>{for(const I of w.ba)I.va(c)&&(f=!0)})),f&&Na(u)})(s.eventManager,e),i.length&&s.Pu.J_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function mb(n,e,t){const s=Q(n);s.sharedClientState.updateQueryState(e,"rejected",t);const i=s.Au.get(e),r=i&&i.key;if(r){let a=new ce(U.comparator);a=a.insert(r,Ie.newNoDocument(r,B.min()));const c=J().add(r),u=new br(B.min(),new Map,new ce(K),a,c);await jd(s,u),s.Ru=s.Ru.remove(r),s.Au.delete(e),Ma(s)}else await jo(s.localStore,e,!1).then((()=>Ho(s,e,t))).catch(dr)}function Ho(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((s=>{n.Vu.containsKey(s)||Bd(n,s)}))}function Bd(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(Ra(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Ma(n))}function gu(n,e,t){for(const s of t)s instanceof $d?(n.Vu.addReference(s.key,e),gb(n,s)):s instanceof Fd?(L(Oa,"Document no longer in limbo: "+s.key),n.Vu.removeReference(s.key,e),n.Vu.containsKey(s.key)||Bd(n,s.key)):q(19791,{wu:s})}function gb(n,e){const t=e.key,s=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(s)||(L(Oa,"New document in limbo: "+t),n.Eu.add(s),Ma(n))}function Ma(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new U(ie.fromString(e)),s=n.fu.next();n.Au.set(s,new cb(t)),n.Ru=n.Ru.insert(t,s),Nd(n.remoteStore,new Dt(st(ba(t.path)),s,"TargetPurposeLimboResolution",fr.ce))}}async function qd(n,e,t){const s=Q(n),i=[],r=[],a=[];s.Tu.isEmpty()||(s.Tu.forEach(((c,u)=>{a.push(s.pu(u,e,t).then((f=>{var g;if((f||t)&&s.isPrimaryClient){const w=f?!f.fromCache:(g=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:g.current;s.sharedClientState.updateQueryState(u.targetId,w?"current":"not-current")}if(f){i.push(f);const w=ka.Es(u.targetId,f);r.push(w)}})))})),await Promise.all(a),s.Pu.J_(i),await(async function(u,f){const g=Q(u);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>C.forEach(f,(I=>C.forEach(I.Ts,(R=>g.persistence.referenceDelegate.addReference(w,I.targetId,R))).next((()=>C.forEach(I.Is,(R=>g.persistence.referenceDelegate.removeReference(w,I.targetId,R)))))))))}catch(w){if(!Yn(w))throw w;L(Ca,"Failed to update sequence numbers: "+w)}for(const w of f){const I=w.targetId;if(!w.fromCache){const R=g.vs.get(I),N=R.snapshotVersion,$=R.withLastLimboFreeSnapshotVersion(N);g.vs=g.vs.insert(I,$)}}})(s.localStore,r))}async function yb(n,e){const t=Q(n);if(!t.currentUser.isEqual(e)){L(Oa,"User change. New user:",e.toKey());const s=await Pd(t.localStore,e);t.currentUser=e,(function(r,a){r.mu.forEach((c=>{c.forEach((u=>{u.reject(new V(x.CANCELLED,a))}))})),r.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await qd(t,s.Ns)}}function vb(n,e){const t=Q(n),s=t.Au.get(e);if(s&&s.hu)return J().add(s.key);{let i=J();const r=t.Iu.get(e);if(!r)return i;for(const a of r){const c=t.Tu.get(a);i=i.unionWith(c.view.nu)}return i}}function Hd(n){const e=Q(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=jd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mb.bind(null,e),e.Pu.J_=sb.bind(null,e.eventManager),e.Pu.yu=ib.bind(null,e.eventManager),e}class Xi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Dd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Pw(this.persistence,new kw,e.initialUser,this.serializer)}Cu(e){return new Rd(Aa.Vi,this.serializer)}Du(e){return new Ow}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xi.provider={build:()=>new Xi};class _b extends Xi{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){re(this.persistence.referenceDelegate instanceof Yi,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new dw(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Le.withCacheSize(this.cacheSizeBytes):Le.DEFAULT;return new Rd((s=>Yi.Vi(s,t)),this.serializer)}}class zo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>mu(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=yb.bind(null,this.syncEngine),await Xw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new eb})()}createDatastore(e){const t=Dd(e.databaseInfo.databaseId),s=Uw(e.databaseInfo);return zw(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,i,r,a,c){return new Kw(s,i,r,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>mu(this.syncEngine,t,0)),(function(){return cu.v()?new cu:new Mw})())}createSyncEngine(e,t){return(function(i,r,a,c,u,f,g){const w=new lb(i,r,a,c,u,f);return g&&(w.gu=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(i){const r=Q(i);L(Un,"RemoteStore shutting down."),r.Ea.add(5),await Js(r),r.Aa.shutdown(),r.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}zo.provider={build:()=>new zo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class wb{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):mt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt="FirestoreClient";class bb{constructor(e,t,s,i,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=i,this.user=Ee.UNAUTHENTICATED,this.clientId=Yh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,(async a=>{L(zt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(s,(a=>(L(zt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Cn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Vd(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function fo(n,e){n.asyncQueue.verifyOperationInProgress(),L(zt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async i=>{s.isEqual(i)||(await Pd(e.localStore,i),s=i)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function yu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Tb(n);L(zt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>hu(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,i)=>hu(e.remoteStore,i))),n._onlineComponents=e}async function Tb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L(zt,"Using user provided OfflineComponentProvider");try{await fo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===x.FAILED_PRECONDITION||i.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;pn("Error using user provided cache. Falling back to memory cache: "+t),await fo(n,new Xi)}}else L(zt,"Using default OfflineComponentProvider"),await fo(n,new _b(void 0));return n._offlineComponents}async function Eb(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L(zt,"Using user provided OnlineComponentProvider"),await yu(n,n._uninitializedComponentsProvider._online)):(L(zt,"Using default OnlineComponentProvider"),await yu(n,new zo))),n._onlineComponents}async function vu(n){const e=await Eb(n),t=e.eventManager;return t.onListen=ub.bind(null,e.syncEngine),t.onUnlisten=fb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=hb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=pb.bind(null,e.syncEngine),t}function Ib(n,e,t,s){const i=new wb(s),r=new rb(e,i,t);return n.asyncQueue.enqueueAndForget((async()=>tb(await vu(n),r))),()=>{i.Nu(),n.asyncQueue.enqueueAndForget((async()=>nb(await vu(n),r)))}}/**
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
 */function zd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb="ComponentProvider",_u=new Map;function Ab(n,e,t,s,i){return new n_(n,e,t,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,zd(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd="firestore.googleapis.com",wu=!0;class bu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new V(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Gd,this.ssl=wu}else this.host=e.host,this.ssl=e.ssl??wu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Cd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<uw)throw new V(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Bv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zd(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new V(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new V(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new V(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,i){return s.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Va{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new xv;switch(s.type){case"firstParty":return new Ov(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new V(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=_u.get(t);s&&(L(Sb,"Removing Datastore"),_u.delete(t),s.terminate())})(this),Promise.resolve()}}function kb(n,e,t,s={}){var f;n=Ri(n,Va);const i=qn(e),r=n._getSettings(),a={...r,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;i&&(Hu(`https://${c}`),zu("Firestore",!0)),r.host!==Gd&&r.host!==c&&pn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...r,host:c,ssl:i,emulatorOptions:s};if(!ln(u,a)&&(n._setSettings(u),s.mockUserToken)){let g,w;if(typeof s.mockUserToken=="string")g=s.mockUserToken,w=Ee.MOCK_USER;else{g=up(s.mockUserToken,(f=n._app)==null?void 0:f.options.projectId);const I=s.mockUserToken.sub||s.mockUserToken.user_id;if(!I)throw new V(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new Ee(I)}n._authCredentials=new Dv(new Jh(g,w))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Er(this.firestore,e,this._query)}}class $e{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $e(this.firestore,e,this._key)}toJSON(){return{type:$e._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Ks(t,$e._jsonSchema))return new $e(e,s||null,new U(ie.fromString(t.referencePath)))}}$e._jsonSchemaVersion="firestore/documentReference/1.0",$e._jsonSchema={type:he("string",$e._jsonSchemaVersion),referencePath:he("string")};class Dn extends Er{constructor(e,t,s){super(e,t,ba(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $e(this.firestore,null,new U(e))}withConverter(e){return new Dn(this.firestore,e,this._path)}}function en(n,e,...t){if(n=Fe(n),jv("collection","path",e),n instanceof Va){const s=ie.fromString(e,...t);return Ll(s),new Dn(n,null,s)}{if(!(n instanceof $e||n instanceof Dn))throw new V(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ie.fromString(e,...t));return Ll(s),new Dn(n.firestore,null,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu="AsyncQueue";class Eu{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ld(this,"async_queue_retry"),this._c=()=>{const s=ho();s&&L(Tu,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=ho();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ho();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Cn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Yn(e))throw e;L(Tu,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,mt("INTERNAL UNHANDLED ERROR: ",Iu(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=La.createAndSchedule(this,e,t,s,(r=>this.hc(r)));return this.tc.push(i),i}uc(){this.nc&&q(47125,{Pc:Iu(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Iu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Go extends Va{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=new Eu,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Eu(e),this._firestoreClient=void 0,await e}}}function Cb(n,e){const t=typeof n=="object"?n:Qu(),s=typeof n=="string"?n:Gi,i=ea(t,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=cp("firestore");r&&kb(i,...r)}return i}function Rb(n){if(n._terminated)throw new V(x.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Pb(n),n._firestoreClient}function Pb(n){var s,i,r,a;const e=n._freezeSettings(),t=Ab(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(i=n._app)==null?void 0:i.options.apiKey,e);n._componentsProvider||(r=e.localCache)!=null&&r._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new bb(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(u){const f=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(f),_online:f}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ze(we.fromBase64String(e))}catch(t){throw new V(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ze(we.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ze._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ks(e,Ze._jsonSchema))return Ze.fromBase64String(e.bytes)}}Ze._jsonSchemaVersion="firestore/bytes/1.0",Ze._jsonSchema={type:he("string",Ze._jsonSchemaVersion),bytes:he("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Re(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return K(this._lat,e._lat)||K(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Vt._jsonSchemaVersion}}static fromJSON(e){if(Ks(e,Vt._jsonSchema))return new Vt(e.latitude,e.longitude)}}Vt._jsonSchemaVersion="firestore/geoPoint/1.0",Vt._jsonSchema={type:he("string",Vt._jsonSchemaVersion),latitude:he("number"),longitude:he("number")};/**
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
 */class $t{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0})(this._values,e._values)}toJSON(){return{type:$t._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ks(e,$t._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new $t(e.vectorValues);throw new V(x.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}$t._jsonSchemaVersion="firestore/vectorValue/1.0",$t._jsonSchema={type:he("string",$t._jsonSchemaVersion),vectorValues:he("object")};function Wd(n,e,t){if((e=Fe(e))instanceof Kd)return e._internalPath;if(typeof e=="string")return Db(n,e);throw Ko("Field path arguments must be of type string or ",n)}const xb=new RegExp("[~\\*/\\[\\]]");function Db(n,e,t){if(e.search(xb)>=0)throw Ko(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new Kd(...e.split("."))._internalPath}catch{throw Ko(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function Ko(n,e,t,s,i){let r=`Function ${e}() called with invalid data`;r+=". ";let a="";return new V(x.INVALID_ARGUMENT,r+n+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{convertValue(e,t="none"){switch(qt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Bt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw q(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Ws(e,((i,r)=>{s[i]=this.convertValue(r,t)})),s}convertVectorValue(e){var s,i,r;const t=(r=(i=(s=e.fields)==null?void 0:s[xo].arrayValue)==null?void 0:i.values)==null?void 0:r.map((a=>ae(a.doubleValue)));return new $t(t)}convertGeoPoint(e){return new Vt(ae(e.latitude),ae(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=mr(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Vs(e));default:return null}}convertTimestamp(e){const t=jt(e);return new ue(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=ie.fromString(e);re(kd(s),9688,{name:e});const i=new $s(s.get(1),s.get(3)),r=new U(s.popFirst(5));return i.isEqual(t)||mt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */class Qd extends Lb{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ze(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new $e(this.firestore,null,t)}}const Su="@firebase/firestore",Au="4.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const i=t;for(const r of s)if(r in i&&typeof i[r]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,t,s,i,r){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new $e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Nb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Wd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Nb extends Jd{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ob(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Es{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cn extends Jd{constructor(e,t,s,i,r,a){super(e,t,s,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Li(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Wd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new V(x.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=cn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}cn._jsonSchemaVersion="firestore/documentSnapshot/1.0",cn._jsonSchema={type:he("string",cn._jsonSchemaVersion),bundleSource:he("string","DocumentSnapshot"),bundleName:he("string"),bundle:he("string")};class Li extends cn{data(e={}){return super.data(e)}}class Ln{constructor(e,t,s,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Es(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Li(this._firestore,this._userDataWriter,s.key,s,new Es(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,r){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map((c=>{const u=new Li(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Es(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((c=>r||c.type!==3)).map((c=>{const u=new Li(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Es(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,g=-1;return c.type!==0&&(f=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),g=a.indexOf(c.doc.key)),{type:Mb(c.type),doc:u,oldIndex:f,newIndex:g}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new V(x.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ln._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Yh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],i=[];return this.docs.forEach((r=>{r._document!==null&&(t.push(r._document),s.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),i.push(r.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Mb(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q(61501,{type:n})}}/**
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
 */Ln._jsonSchemaVersion="firestore/querySnapshot/1.0",Ln._jsonSchema={type:he("string",Ln._jsonSchemaVersion),bundleSource:he("string","QuerySnapshot"),bundleName:he("string"),bundle:he("string")};function tn(n,...e){var f,g,w;n=Fe(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||ku(e[s])||(t=e[s++]);const i={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(ku(e[s])){const I=e[s];e[s]=(f=I.next)==null?void 0:f.bind(I),e[s+1]=(g=I.error)==null?void 0:g.bind(I),e[s+2]=(w=I.complete)==null?void 0:w.bind(I)}let r,a,c;if(n instanceof $e)a=Ri(n.firestore,Go),c=ba(n._key.path),r={next:I=>{e[s]&&e[s](Vb(a,n,I))},error:e[s+1],complete:e[s+2]};else{const I=Ri(n,Er);a=Ri(I.firestore,Go),c=I._query;const R=new Qd(a);r={next:N=>{e[s]&&e[s](new Ln(a,R,I,N))},error:e[s+1],complete:e[s+2]},Ob(n._query)}const u=Rb(a);return Ib(u,c,i,r)}function Vb(n,e,t){const s=t.docs.get(e._key),i=new Qd(n);return new cn(n,i,e._key,s,new Es(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){Pv(Hn),Nn(new un("firestore",((s,{instanceIdentifier:i,options:r})=>{const a=s.getProvider("app").getImmediate(),c=new Go(new Lv(s.getProvider("auth-internal")),new Mv(a,s.getProvider("app-check-internal")),s_(a,i),a);return r={useFetchStreams:t,...r},c._setSettings(r),c}),"PUBLIC").setMultipleInstances(!0)),Ot(Su,Au,e),Ot(Su,Au,"esm2020")})();const nn=Cb(Mh);let ct=[];function $b(n){if(Yd(),!n)return;const e=t=>t.docs.map(s=>({id:s.id,...s.data()}));ct.push(tn(en(nn,`households/${n}/inventory`),t=>{var s,i;d.inv=e(t),ve("synced"),(s=O.renderAll)==null||s.call(O),(i=O.renderSum)==null||i.call(O)},t=>{console.warn("realtime inv error:",t),ve("error")})),ct.push(tn(en(nn,`households/${n}/shopping`),t=>{var s,i;d.shop=e(t),ve("synced"),(s=O.renderShop)==null||s.call(O),(i=O.renderSum)==null||i.call(O)},t=>{console.warn("realtime shop error:",t),ve("error")})),ct.push(tn(en(nn,`households/${n}/recipes`),t=>{var s,i;d.recs=e(t),ve("synced"),(s=O.renderRecs)==null||s.call(O),(i=O.renderSum)==null||i.call(O)},t=>{console.warn("realtime recs error:",t),ve("error")})),ct.push(tn(en(nn,`households/${n}/mealplan`),t=>{const s={};e(t).forEach(i=>{i.date&&i.meal&&(s[i.date]=i.meal)}),d.mp=s,ve("synced")},t=>{console.warn("realtime mp error:",t)})),ct.push(tn(en(nn,`households/${n}/settings`),t=>{const s=e(t).find(i=>i.id==="config");s&&(d.cfg={...Mi,...s})},t=>{console.warn("realtime settings error:",t)})),ct.push(tn(en(nn,`households/${n}/cooklog`),t=>{d.cookLog=e(t).sort((s,i)=>new Date(i.loggedAt||i.date||0)-new Date(s.loggedAt||s.date||0))},t=>{console.warn("realtime cooklog error:",t)})),ct.push(tn(en(nn,`households/${n}/wastelog`),t=>{d.wasteLog=e(t).sort((s,i)=>new Date(i.loggedAt||i.date||0)-new Date(s.loggedAt||s.date||0))},t=>{console.warn("realtime wastelog error:",t)})),ve("synced"),console.log("[realtime] Listeners started for household:",n)}function Yd(){ct.forEach(n=>{try{n()}catch{}}),ct=[],console.log("[realtime] All listeners stopped")}function $a(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(d.cfg.adults||"Bora").split(",")[0].trim(),s=p("grt");s&&(s.innerHTML=`${e}, <span>${t}</span>`);const i=p("hdt");i&&(i.textContent=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})),gn()}function Xd(){Zd(),Ni==null||Ni()}let Ni=null;function Fb(n){Ni=n}function Zd(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(d.cfg.adults||"Bora").split(",")[0].trim(),s=p("grt");s&&!s.innerHTML&&(s.innerHTML=`${e}, <span>${t}</span>`),gn(),Xs(),jb(),Bb(),Zn(),zb(),ef()}function Zn(){const n=Pt(),e=d.mp[n],t=p("tnd"),s=p("tna"),i=p("tonight-main");i&&(i.onclick=function(){window.openMealM(n,"Today")}),e?(t&&(t.innerHTML=e),s&&(s.innerHTML=`<button class="btn bsm bp" onclick="event.stopPropagation();openCooked('${n}')">✓ Cooked</button><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${n}','Today')">Edit</button>`)):(t&&(t.innerHTML='<span style="font-size:.9rem;color:var(--mt);font-style:italic">No meal planned yet</span>'),s&&(s.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${n}','Today')">+ Plan dinner</button><button class="btn bsm bs" onclick="event.stopPropagation();showScreen('chat')">Ask Claude →</button>`))}function gn(){const n=["S","M","T","W","T","F","S"],e=new Date;e.setHours(0,0,0,0);const t=p("wgrd");t&&(t.innerHTML=Qn().map((s,i)=>{const r=s.toISOString().split("T")[0],a=s.getTime()===e.getTime(),c=d.mp[r];return`<div class="wd${a?" today":""}${c?" hm":""}" onclick="openMealM('${r}','${n[i]} ${s.getDate()}')"><div class="wdn">${n[i]}</div><div class="wdd">${s.getDate()}</div>${c?`<div class="wdm">${c.substring(0,10)}${c.length>10?"…":""}</div>`:""}</div>`}).join(""),Ub())}function Ub(){const n=p("variety-nudge");if(!n)return;const e=Qn().map(a=>d.mp[a.toISOString().split("T")[0]]).filter(Boolean);if(e.length<3){n.style.display="none";return}const t=e.some(a=>/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(a)),s=e.some(a=>/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner/i.test(a)),i={};e.forEach(a=>{const c=a.toLowerCase();i[c]=(i[c]||0)+1});const r=Object.entries(i).find(([,a])=>a>=3);r?(n.style.display="block",n.innerHTML="🔄 <strong>"+r[0]+"</strong> is planned "+r[1]+"× this week — maybe try something different?"):!t&&!s?(n.style.display="block",n.innerHTML="🌍 No Bangladeshi or Turkish dishes this week yet — ask Claude for ideas!"):t?s?n.style.display="none":(n.style.display="block",n.innerHTML="🇹🇷 No Turkish dishes this week — köfte or mercimek çorbası would be great!"):(n.style.display="block",n.innerHTML="🇧🇩 No Bangladeshi dishes this week — how about a dal or fish curry?")}function Xs(){const n=d.inv.filter(c=>{const u=it(c.expiry);return u&&(u.c==="expiring"||u.c==="expired")}).length,e=d.shop.filter(c=>!c.checked).length,t=p("home-exp-val"),s=p("home-exp-sub");t&&(n>0?(t.textContent=n+" item"+(n>1?"s":""),t.className="tc-val",t.style.color="var(--am)"):(t.textContent="All fresh!",t.className="tc-val tc-green")),s&&(s.textContent=n>0?"expiring soon":"Nothing in next 3 days");const i=p("home-shop-val"),r=p("home-shop-sub");i&&(i.textContent=e),r&&(r.textContent=e===1?"item to buy":e===0?"all stocked up":"items to buy");const a=p("sgrd");a&&(a.innerHTML=`<div class="sc" onclick="showScreen('inventory')"><div class="sci">🧺</div><div class="scv">${d.inv.length}</div><div class="scl">Items in stock</div></div><div class="sc${n>0?" warn":""}" onclick="showScreen('inventory')"><div class="sci">⏱</div><div class="scv">${n}</div><div class="scl">Expiring soon</div></div><div class="sc" onclick="showScreen('shopping')"><div class="sci">🛒</div><div class="scv">${e}</div><div class="scl">To buy</div></div><div class="sc" onclick="showScreen('recipes')"><div class="sci">📖</div><div class="scv">${d.recs.length}</div><div class="scl">Saved recipes</div></div>`)}function jb(){const n=d.inv.filter(s=>{const i=it(s.expiry);return i&&(i.c==="expiring"||i.c==="expired")}).sort((s,i)=>new Date(s.expiry)-new Date(i.expiry)),e=p("exslbl"),t=p("expl");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(s=>{const i=it(s.expiry);return`<div class="exi${i.c==="expired"?" exp":""}" onclick="openAdj('${s.id}')"><div class="exn">${s.name}</div><div class="exd">${i.l}</div></div>`}).join("")}}function Bb(){const n=d.inv.filter(s=>s.qty<=(s.lowStockThreshold||1)).sort((s,i)=>s.qty-i.qty),e=p("lowstocklbl"),t=p("lowstocklist");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(s=>`<div class="exi" style="border-color:var(--am)">
    <div style="display:flex;align-items:center;gap:10px;flex:1;cursor:pointer" onclick="openAdj('${s.id}')">
      <div class="exn">${s.name}</div>
      <div style="font-size:.74rem;color:var(--am);font-weight:600">${s.qty} ${s.unit}</div>
    </div>
    <button class="btn bsm bs" style="flex-shrink:0;font-size:.72rem" onclick="event.stopPropagation();addLowToShop('${s.id}')">🛒 Add to list</button>
  </div>`).join(""),Hb(n.length)}}async function qb(n){const e=d.inv.find(s=>s.id===n);if(!e)return;if(d.shop.find(s=>s.name.toLowerCase()===e.name.toLowerCase()&&!s.checked)){D(`${e.name} is already on your list`);return}await He({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"low-stock"}),D(`${e.name} added to shopping list 🛒`)}function Hb(n){const e=p("nav-inventory");if(!e)return;const t=e.querySelector(".nav-badge");if(t&&t.remove(),n>0){const s=document.createElement("span");s.className="nav-badge",s.textContent=n,s.style.cssText="position:absolute;top:4px;right:calc(50% - 18px);background:var(--am);color:#0c0c0a;font-size:.58rem;font-weight:700;min-width:16px;height:16px;border-radius:8px;display:flex;align-items:center;justify-content:center;padding:0 4px",e.appendChild(s)}}async function zb(){const n=p("activityfeed"),e=p("activitylbl");if(!n)return;const t=await Sv();if(!t.length){e&&(e.style.display="none"),n.innerHTML="";return}e&&(e.style.display="flex");const s=i=>{const r=Date.now()-new Date(i).getTime(),a=Math.floor(r/6e4);if(a<1)return"just now";if(a<60)return a+"m ago";const c=Math.floor(a/60);if(c<24)return c+"h ago";const u=Math.floor(c/24);return u===1?"yesterday":u+"d ago"};n.innerHTML=t.slice(0,5).map(i=>`<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--b1)">
      <div style="width:28px;height:28px;border-radius:50%;background:var(--acd);display:flex;align-items:center;justify-content:center;font-size:.7rem;flex-shrink:0;color:var(--ac);font-weight:700">${(i.memberName||"?")[0].toUpperCase()}</div>
      <div style="flex:1;font-size:.82rem;color:var(--tx2);line-height:1.4"><strong style="color:var(--tx)">${(i.memberName||"Someone").replace(/</g,"&lt;")}</strong> ${(i.action||"").replace(/</g,"&lt;")} <strong>${(i.itemName||"").replace(/</g,"&lt;")}</strong></div>
      <div style="font-size:.68rem;color:var(--mt);flex-shrink:0">${s(i.timestamp)}</div>
    </div>`).join("")}function ef(){const n=["fridge","freezer","pantry"].map(t=>{const s=d.inv.filter(i=>i.location===t);return s.length?pa(t).toUpperCase()+`
`+s.map(i=>`- ${i.name}${i.brand?` (${i.brand})`:""}: ${i.qty} ${i.unit}`).join(`
`):""}).filter(Boolean).join(`

`),e=p("expbox");e&&(e.textContent=n||"No items yet.")}let Ue=null,po=!1,ys="";function Gb(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=p("shopAddMicOpt");e&&(e.style.display="")}function Cu(n){const e=p("micstatus");e&&e.classList.toggle("visible",n)}function tf(){if(po&&Ue){Ue.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){D("Voice input not supported");return}Ue=new n,Ue.lang="en-US",Ue.interimResults=!0,Ue.maxAlternatives=1,Ue.continuous=!1,ys="",po=!0,Cu(!0),Ue.onresult=e=>{let t="";for(let i=e.resultIndex;i<e.results.length;i++){const r=e.results[i][0].transcript;e.results[i].isFinal?ys+=r:t+=r}const s=p("shi");s&&(s.value=(ys+t).trim())},Ue.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&D("Couldn't hear that — try again")},Ue.onend=()=>{const e=(ys||"").trim();if(po=!1,Ue=null,ys="",Cu(!1),e){let t=e,s=1;const i=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),s=parseInt(r[2],10)||1):i&&(t=i[2].trim(),s=parseInt(i[1],10)||1);const a={id:Date.now().toString(),name:t,qty:s,checked:!1,src:"manual"};He(a),D(`Added "${e}" 🎤`),Fa(a.id,t,"shop")}},Ue.start()}function bi(n){const e=n.qty||1,t=`<span class="sh-qty${e===1?" sh-qty-one":""}" onclick="event.stopPropagation();openShQty('${n.id}')"> × ${e}</span>`,s=n.image?`<img src="${n.image}" class="sh-thumb" alt="" onerror="this.style.display='none'"/>`:"";return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="shop">
    <div class="swipe-inner">
      <!-- Main row: tap toggles checked state -->
      <div class="shit${n.checked?" chk":""}" onclick="swipeRowTap('${n.id}','shop')">
        <div class="sel-cb">✓</div>           <!-- Multi-select checkbox (hidden unless selectMode is active) -->
        <div class="shck">${n.checked?"✓":""}</div>  <!-- Checked indicator circle -->
        ${s}                               <!-- Product thumbnail from barcode scan (if available) -->
        <div style="flex:1;min-width:0">
          <div class="shnm">${n.name}${t}</div>
          ${n.brand?`<div class="sh-brand">${n.brand}</div>`:""}  <!-- Brand subtitle from barcode scan -->
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
  </div>`}function Zs(){const n=(a,c)=>a.name.localeCompare(c.name),e=p("shlist"),t=d.shop.filter(a=>!a.checked).sort(n),s=d.shop.filter(a=>a.checked).sort(n),i=p("clrchk");i&&(i.style.display=s.length?"block":"none");const r=p("shsub");if(r&&(r.textContent=t.length+" items to buy"),!!e){if(!d.shop.length){e.innerHTML='<div class="es"><div class="ei">🛒</div><p>Your list is empty!<br/>Add items or use "Build from meal plan".</p></div>';return}if(d.aisleMode&&t.length){const a={};t.forEach(c=>{const u=Rv(c.name);a[u]||(a[u]=[]),a[u].push(c)}),e.innerHTML=Object.entries(a).sort().map(([c,u])=>`<div class="shsec">${c}</div>${u.map(bi).join("")}`).join("")+(s.length?`<div class="shsec">Done</div>${s.map(bi).join("")}`:"")}else e.innerHTML=(t.length?`<div class="shsec">To buy (${t.length})</div>${t.map(bi).join("")}`:"")+(s.length?`<div class="shsec">Done</div>${s.map(bi).join("")}`:"");if(d.selectMode==="shop"){document.querySelectorAll("#shlist .swipe-wrap").forEach(c=>{c.classList.add("selecting"),d.selectedIds.has(c.dataset.id)&&c.classList.add("selected")});const a=document.querySelector(".shbody");a&&(a.style.paddingLeft="52px")}}}function Kb(){const n=p("shi"),e=n.value.trim();if(!e)return;let t=e,s=1;const i=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),s=parseInt(r[2],10)||1):i&&(t=i[2].trim(),s=parseInt(i[1],10)||1);const a=p("addNoteInp"),c=a?a.value.trim():"",u={id:Date.now().toString(),name:t,qty:s,checked:!1,src:"manual"};c&&(u.note=c),He(u),n.value="",a&&(a.value="");const f=p("addNoteWrap");f&&(f.style.display="none"),Ir(),Fa(u.id,t,"shop")}function Wb(){const n=p("addNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=p("addNoteInp");t&&t.focus()}}function Qb(){const n=p("shopAddBackdrop"),e=p("shopAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),setTimeout(()=>{const t=p("shi");t&&(t.value="",t.focus())},150)}function Ir(){const n=p("shopAddBackdrop"),e=p("shopAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}function Jb(){Ir(),window.openScanForList&&window.openScanForList()}function Yb(){Ir(),tf()}async function Fa(n,e,t){if(!e||e.length<2)return;const s=p("enrichResults"),i=p("enrichTitle");if(!s)return;i&&(i.textContent=`Finding "${e}"…`),s.innerHTML='<div class="enrich-loading"><div class="spin" style="width:28px;height:28px;margin:0 auto 8px"></div>Searching products…</div>';const r=p("enrichBackdrop"),a=p("enrichSheet");r&&r.classList.add("active"),a&&a.classList.add("active");try{const f=(await(await fetch(`/api/text-search?q=${encodeURIComponent(e)}`)).json()).results||[];if(!f.length){Zi();return}i&&(i.textContent="Choose a match");let g=f.map((w,I)=>{const R=w.image?`<img src="${w.image}" class="enrich-img" alt="" onerror="this.style.display='none'"/>`:'<div class="enrich-img-ph">🛒</div>',N=w.brand?`<div class="enrich-brand">${w.brand}</div>`:"",$=w.category&&w.category!=="General"?`<div class="enrich-cat">${w.category}</div>`:"";return`<div class="enrich-row" onclick="pickEnrichResult(${I})">
        ${R}
        <div style="flex:1;min-width:0">
          <div class="enrich-name">${w.name}</div>
          ${N}${$}
        </div>
      </div>`}).join("");g+=`<button class="enrich-fallback" onclick="closeEnrichSheet()">
      <span style="font-size:1.1rem">📝</span>
      Just add "${e}" as typed
    </button>`,s.innerHTML=g,window._enrichCtx={itemId:n,query:e,list:t,results:f}}catch(c){console.warn("Text search failed:",c),Zi()}}function Zi(){const n=p("enrichBackdrop"),e=p("enrichSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),window._enrichCtx=null}function Xb(n){const e=window._enrichCtx;if(!e)return;const t=e.results[n];if(t){if(e.list==="shop"){const s=d.shop.find(i=>i.id===e.itemId);s&&He({...s,name:t.name,brand:t.brand||"",image:t.image||null,category:t.category||"",nutrition:t.nutrition||null,source:t.source||"search"})}else if(e.list==="inv"){const s=d.inv.find(i=>i.id===e.itemId);s&&qe({...s,name:t.name,brand:t.brand||"",image:t.image||null,category:t.category||s.category,nutrition:t.nutrition||null,source:t.source||"search"})}Zi(),D(`Updated with "${t.name}" ✓`)}}function nf(n){if(!d.hid||!n)return;const e=Date.now().toString(36)+Math.random().toString(36).slice(2,6);X(`households/${d.hid}/completed_items/${e}`,{name:n,completedAt:new Date().toISOString()}).catch(t=>console.warn("recordCompleted error:",t))}function Zb(n){const e=d.shop.find(s=>s.id===n);if(!e)return;const t=!e.checked;He({...e,checked:t}),t&&nf(e.name)}function eT(n,e){n.stopPropagation();const t=p("sne-"+e),s=p("sni-"+e);if(!t)return;t.classList.toggle("open")&&s&&(s.focus(),s.setSelectionRange(s.value.length,s.value.length))}function tT(n){const e=p("sni-"+n);if(!e)return;const t=d.shop.find(i=>i.id===n);if(!t)return;const s=e.value.trim();s!==(t.note||"")&&He({...t,note:s})}function nT(n){const e=p("sqe-"+n),t=p("sqi-"+n);if(!e)return;e.classList.toggle("open")&&t&&(t.focus(),t.select())}function sT(n,e){const t=p("sqi-"+n);if(!t)return;const s=Math.max(1,(parseInt(t.value,10)||1)+e);t.value=s,sf(n)}function sf(n){const e=p("sqi-"+n);if(!e)return;const t=d.shop.find(i=>i.id===n);if(!t)return;const s=Math.max(1,parseInt(e.value,10)||1);s!==(t.qty||1)&&He({...t,qty:s})}function iT(){d.aisleMode=!d.aisleMode;const n=p("aislebtn");n&&(n.style.background=d.aisleMode?"var(--ac)":"",n.style.color=d.aisleMode?"var(--bg)":""),Zs()}function rT(n){["list","deals"].forEach(s=>{const i=p("shtab-"+s);i&&i.classList.remove("active");const r=p("sh-"+s+"-body");r&&(r.style.display="none")});const e=p("shtab-"+n);e&&e.classList.add("active");const t=p("sh-"+n+"-body");t&&(t.style.display="block"),n==="deals"&&rf()}function oT(){const n=d.shop.filter(s=>!s.checked);if(!n.length){D("List is empty!");return}const t=`🛒 Shopping List

`+n.map(s=>{let i="• "+s.name;return(s.qty||1)>1&&(i+=" × "+s.qty),s.price&&(i+=" (~$"+s.price+")"),i}).join(`
`);navigator.share?navigator.share({title:"Shopping List",text:t}).catch(()=>{}):navigator.clipboard&&navigator.clipboard.writeText(t).then(()=>D("List copied!"))}function aT(){const n=d.shop.filter(t=>t.checked);if(!n.length){D("No completed items!");return}const e=p("atk-body");e.innerHTML=`<div style="padding:16px">
    <p style="font-size:.82rem;color:var(--mt);margin-bottom:16px">Choose where each item goes in your kitchen, then tap Add All.</p>
    ${n.map(t=>{const s=Bh(t.name);return`<div class="atk-item" id="atk-${t.id}" data-loc="${s}">
        <div class="atk-name">${t.name}</div>
        <div class="atk-loc">
          <button onclick="setAtkLoc('${t.id}','fridge',this)" class="${s==="fridge"?"sel":""}">🌡 Fridge</button>
          <button onclick="setAtkLoc('${t.id}','freezer',this)" class="${s==="freezer"?"sel":""}">🧊 Freeze</button>
          <button onclick="setAtkLoc('${t.id}','pantry',this)" class="${s==="pantry"?"sel":""}">🥫 Pantry</button>
        </div>
      </div>`}).join("")}
  </div>`,vt("atk")}function cT(n,e,t){const s=p("atk-"+n);s.dataset.loc=e,s.querySelectorAll(".atk-loc button").forEach(i=>i.classList.remove("sel")),t.classList.add("sel")}async function lT(){const n=d.shop.filter(s=>s.checked),e=new Date().toLocaleDateString();let t=0;for(const s of n){const i=p("atk-"+s.id);if(!i)continue;const r=i.dataset.loc||Bh(s.name),a=d.inv.find(u=>u.name.toLowerCase()===s.name.toLowerCase()),c=s.qty||1;await qe({id:a?a.id:"inv-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:a?a.name:s.name,qty:a?a.qty+c:c,unit:a?a.unit:"unit",location:r,category:a?a.category:Os({name:s.name}),addedAt:a?a.addedAt:e,brand:a?a.brand:s.brand||"",expiry:a?a.expiry:null,image:a?a.image:s.image||null,source:"shopping"}),await hr(s.id),t++}Ae("atk"),D(`${t} item${t!==1?"s":""} added to your kitchen! 🧺`)}async function uT(){const n=Qn().map(i=>{const r=i.toISOString().split("T")[0];return d.mp[r]?`${i.toLocaleDateString("en-US",{weekday:"short"})}: ${d.mp[r]}`:""}).filter(Boolean).join(", ");if(!n){D("No meals planned yet!");return}const e=d.inv.map(i=>`${i.name} (${i.qty} ${i.unit})`).join(", "),t=document.querySelector('[onclick="buildList()"]'),s=t?t.textContent:"";t&&(t.disabled=!0,t.textContent="⏳ Thinking…");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:500,messages:[{role:"user",content:`Week meals: ${n}
Already have: ${e}
List ONLY ingredients still needed. Return ONLY a bullet list, each line starting "- ". No categories, no headers, no explanation.`}]})})).json(),a=r.content&&r.content[0]&&r.content[0].text||"",c=[];if(a.split(`
`).forEach(u=>{const f=u.match(/^[-•*]\s+(.+)/);if(f){const g=f[1].replace(/\*\*/g,"").trim();g&&!d.shop.find(w=>w.name.toLowerCase()===g.toLowerCase())&&c.push({name:g,sel:!0})}}),!c.length){D("Nothing new needed — you're all stocked! ✓");return}window._bpItems=c,p("bpList").innerHTML=c.map((u,f)=>`<div id="bpitem-${f}" onclick="bpTog(${f})" style="display:flex;align-items:center;gap:12px;padding:13px 16px;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;cursor:pointer;transition:all .15s"><div id="bpck-${f}" style="width:24px;height:24px;border-radius:50%;background:var(--gn);border:2px solid var(--gn);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.8rem;color:#0c0c0a;transition:all .2s">✓</div><div style="font-size:.9rem;font-weight:500">${u.name}</div></div>`).join(""),Ua(),p("buildPreviewM").classList.add("active")}catch{D("Couldn't reach Claude — check connection")}finally{t&&(t.disabled=!1,t.textContent=s)}}function hT(n){window._bpItems[n].sel=!window._bpItems[n].sel;const e=p("bpck-"+n),t=p("bpitem-"+n);window._bpItems[n].sel?(e.textContent="✓",e.style.background="var(--gn)",e.style.borderColor="var(--gn)",e.style.color="#0c0c0a",t.style.borderColor="var(--b1)"):(e.textContent="",e.style.background="transparent",e.style.borderColor="var(--b2)",t.style.borderColor="var(--b2)"),Ua()}function dT(n){window._bpItems.forEach((e,t)=>{window._bpItems[t].sel=n;const s=p("bpck-"+t),i=p("bpitem-"+t);n?(s.textContent="✓",s.style.background="var(--gn)",s.style.borderColor="var(--gn)",s.style.color="#0c0c0a",i.style.borderColor="var(--b1)"):(s.textContent="",s.style.background="transparent",s.style.borderColor="var(--b2)",i.style.borderColor="var(--b2)")}),Ua()}function Ua(){const n=window._bpItems.filter(t=>t.sel).length,e=p("bpAddBtn");e&&(e.textContent=n?`Add ${n} item${n!==1?"s":""}  ✓`:"Nothing selected"),e&&(e.disabled=!n)}async function fT(){const n=window._bpItems.filter(e=>e.sel);if(!n.length){p("buildPreviewM").classList.remove("active");return}for(const e of n)await He({id:Date.now().toString()+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"meal-plan"});p("buildPreviewM").classList.remove("active"),D(`Added ${n.length} item${n.length!==1?"s":""}! 🛒`)}function rf(){const n=p("deals-zip-banner");if(!n)return;const e=d.cfg.zipcode;e?(n.innerHTML=`📍 Searching deals near <strong>${e}</strong> <span style="font-size:.72rem;color:var(--mt)">(change in Settings)</span>`,n.style.borderColor="var(--b2)"):(n.innerHTML=`⚠️ Set your zipcode in <strong style="cursor:pointer;color:var(--ac)" onclick="hideOv('');showOv('settings')">Settings</strong> to find local deals near you.`,n.style.borderColor="var(--am)")}function Wo(n,e){const t=p("dealslist");if(!n||!n.length){t.innerHTML=`<div class="es"><div class="ei">🏷</div><p>No deals found for <strong>${e}</strong>.<br>Try a different search term or check back later for new circulars.</p></div>`;return}t.innerHTML="",n.forEach(s=>{const i=document.createElement("div");i.className="deal-card"+(s.onSale?" deal-match":"");const r=document.createElement("div");r.style.flex="1";const a=document.createElement("div");a.className="deal-store",a.textContent=s.store||"Store";const c=document.createElement("div");if(c.className="deal-name",c.textContent=s.name||"",s.brand||s.size){const g=document.createElement("div");g.style.cssText="font-size:.72rem;color:var(--mt);margin-top:1px",g.textContent=[s.brand,s.size].filter(Boolean).join(" · "),r.appendChild(a),r.appendChild(c),r.appendChild(g)}else r.appendChild(a),r.appendChild(c);const u=document.createElement("div");if(u.style.cssText="display:flex;align-items:baseline;gap:6px;margin-top:4px;flex-wrap:wrap",s.sale_price){const g=document.createElement("span");g.className="deal-price",g.textContent=s.sale_price,u.appendChild(g)}if(s.onSale&&s.regular){const g=document.createElement("span");g.className="deal-orig",g.textContent=s.regular,u.appendChild(g)}if(s.savings){const g=document.createElement("span");g.className="deal-badge",g.textContent="Save "+s.savings,u.appendChild(g)}r.appendChild(u);const f=document.createElement("button");f.className="btn bs bsm",f.style.cssText="align-self:center;flex-shrink:0;margin-left:8px",f.textContent="+ List",(g=>{f.onclick=()=>of(g)})(s.name||""),i.appendChild(r),i.appendChild(f),t.appendChild(i)})}function Qo(n){const e=p("deals-stores");!e||!n||!n.length||(e.style.display="block",e.innerHTML='<div style="font-size:.72rem;color:var(--mt);font-weight:600;margin-bottom:4px">Stores with deals</div>'+n.map(t=>`<div style="font-size:.74rem;color:var(--tx2);padding:2px 0">${t.name}</div>`).join(""))}function of(n){const e=(n||"").replace(/&#39;/g,"'");d.shop.find(t=>t.name.toLowerCase()===e.toLowerCase())?D("Already on your list!"):(He({id:Date.now().toString(),name:e,qty:1,checked:!1,src:"deal"}),D(e+" added!"))}async function Jo(n){const e=d.cfg.zipcode;if(!e)throw new Error("Set your zipcode in Settings to search for local deals.");const t="ks-deals-"+e+"-"+n.toLowerCase().replace(/\s+/g,"_").substring(0,40),s=Pe(t);if(s&&s.ts&&Date.now()-s.ts<72e5)return s;const i=await fetch("/api/deals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({zipcode:e,query:n})}),r=await i.json();if(!i.ok||r.error)throw new Error(r.message||r.error||"Deals API request failed");return et(t,{...r,ts:Date.now()}),r}async function pT(){const n=p("dealsearch").value.trim();if(!n){D("Enter something to search");return}const e=p("dealsstatus");e.style.display="block",e.style.color="var(--mt)",e.textContent="🔍 Searching deals for "+n+" near "+(d.cfg.zipcode||"your area")+"…",p("dealslist").innerHTML="";try{const t=await Jo(n);if(e.style.display="none",t.message){p("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${t.message}</p></div>`;return}t.stores&&Qo(t.stores),Wo(t.deals,n)}catch(t){e.style.color="var(--rd)",e.textContent=t.message||"Unknown error"}}async function mT(){const n=d.shop.filter(s=>!s.checked);if(!n.length){const s=Object.values(d.mp).filter(Boolean);if(!s.length){D("Add items to your list first!");return}if(!confirm(`Your list is empty. Search deals for this week's meals?

`+s.join(", ")))return;const r=p("dealsstatus");r.style.display="block",r.textContent="Searching deals for your meal plan...",p("dealslist").innerHTML="";try{const a=await Jo(s.join(", "));if(r.style.display="none",a.message){p("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${a.message}</p></div>`;return}a.stores&&Qo(a.stores),Wo(a.deals,s.join(", "))}catch(a){r.style.color="var(--rd)",r.textContent=a.message}return}const e=p("dealsstatus"),t=n.slice(0,8).map(s=>s.name).join(", ");e.style.display="block",e.style.color="var(--mt)",e.textContent="Searching deals for: "+t+"...",p("dealslist").innerHTML="";try{const s=await Jo(t);if(e.style.display="none",s.message){p("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${s.message}</p></div>`;return}s.stores&&Qo(s.stores),s.deals.length?Wo(s.deals,t):p("dealslist").innerHTML='<div class="es"><div class="ei">🏷</div><p>No deals found for your list items.<br/>Try searching for individual items.</p></div>'}catch(s){e.style.color="var(--rd)",e.textContent=s.message}}function Ti(n){const e=ma[Os(n)]||"🛒",t=n.image?`<img src="${n.image}" class="iimg" onerror="this.style.display='none'"/>`:`<div class="iph">${e}</div>`,s=it(n.expiry),i=s?s.c==="expired"?" expired":s.c==="expiring"?" expiring":"":"",r=s?`<div class="etag ${s.c}">${s.l}</div>`:"";return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="inv">
    <div class="swipe-inner">
      <div class="iit${i}" onclick="swipeRowTap('${n.id}','inv')">
        <div class="sel-cb">✓</div>
        <div class="iileft">${t}<div>
          <div class="inm">${n.name}</div>
          <div class="isb">${n.brand||Os(n)}</div>
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
  </div>`}function ja(){const n=(i,r)=>i.name.localeCompare(r.name),e=(d.it==="all"||d.it==="cat"?d.inv:d.inv.filter(i=>i.location===d.it)).slice().sort(n),t=p("isub");t&&(t.textContent=e.length+" "+({all:"items",fridge:"fridge items",freezer:"frozen items",pantry:"pantry items",cat:"items by type"}[d.it]||"items")),ef();const s=p("ibody");if(s){if(!e.length){s.innerHTML='<div class="es"><div class="ei">🧺</div><p>No items here yet.<br/>Tap Scan or Add to get started.</p></div>';return}if(d.it==="cat"){const i={};e.forEach(r=>{const a=Os(r);i[a]||(i[a]=[]),i[a].push(r)}),s.innerHTML=Object.entries(i).sort((r,a)=>r[0].localeCompare(a[0])).map(([r,a])=>`<div class="lgrp"><div class="lgt">${ma[r]||"📦"} ${r}</div><div class="ilst">${a.map(Ti).join("")}</div></div>`).join(""),d.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(r=>{r.classList.add("selecting"),d.selectedIds.has(r.dataset.id)&&r.classList.add("selected")});return}if(d.it==="all"){const i=d.inv.filter(a=>{const c=it(a.expiry);return c&&(c.c==="expiring"||c.c==="expired")}).sort((a,c)=>new Date(a.expiry)-new Date(c.expiry)),r=i.length?`<div class="lgrp"><div class="lgt" style="color:var(--am)">⚠️ Expiring Soon</div><div class="ilst">${i.map(Ti).join("")}</div></div>`:"";s.innerHTML=r+["fridge","freezer","pantry"].map(a=>{const c=e.filter(u=>u.location===a);return c.length?`<div class="lgrp"><div class="lgt">${pa(a)}</div><div class="ilst">${c.map(Ti).join("")}</div></div>`:""}).join(""),d.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(a=>{a.classList.add("selecting"),d.selectedIds.has(a.dataset.id)&&a.classList.add("selected")});return}s.innerHTML=`<div class="ilst">${e.map(Ti).join("")}</div>`,d.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(i=>{i.classList.add("selecting"),d.selectedIds.has(i.dataset.id)&&i.classList.add("selected")})}}function gT(n){const e=d.inv.find(r=>r.id===n);if(!e)return;d.adjId=n;const t=ma[Os(e)]||"🛒",s=e.image?`<img src="${e.image}" class="pimg" onerror="this.style.display='none'"/>`:`<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">${t}</div>`;let i="";e.nutrition&&(e.nutrition.calories||e.nutrition.protein)&&(i=`<div class="ngrd">${[["Cal",e.nutrition.calories],["Protein",e.nutrition.protein],["Fat",e.nutrition.fat],["Carbs",e.nutrition.carbs]].map(([r,a])=>`<div class="nb"><div class="nv">${a||"—"}</div><div class="nl">${r}</div></div>`).join("")}</div>`),p("adjbody").innerHTML=`<div class="pcard"><div class="phdr">${s}<div style="flex:1"><div class="pnm">${e.name}</div>${e.brand?`<div class="pbr">${e.brand}</div>`:""}<div style="font-size:.7rem;color:var(--mt);margin-top:2px">Added ${e.addedAt}</div>${e.source?`<span class="srcb" style="display:inline-block;margin-top:4px">${e.source}</span>`:""}</div></div>${i}<div class="frow" style="margin-top:14px"><label class="flbl">Location</label><div class="lpick"><button class="lbtn ${e.location==="fridge"?"sel":""}" onclick="updL('fridge',this)">🌡 Fridge</button><button class="lbtn ${e.location==="freezer"?"sel":""}" onclick="updL('freezer',this)">🧊 Freezer</button><button class="lbtn ${e.location==="pantry"?"sel":""}" onclick="updL('pantry',this)">🥫 Pantry</button></div></div><div class="qrow"><span class="qlbl">Quantity</span><div class="qctl"><button class="qbtn" onclick="adjQ(-1)">−</button><input class="qinp" id="adjqty" type="number" min="0" value="${e.qty}" oninput="adjQD()"/><button class="qbtn" onclick="adjQ(1)">+</button></div></div><div class="frow"><label class="flbl">Expiry Date <span class="otag">optional</span></label><input class="fd" id="adjexp" type="date" value="${e.expiry||""}" onchange="adjE()"/></div><div class="frow"><label class="flbl">Notes <span class="otag">optional</span></label><textarea class="sh-note-inp" id="adjnote" rows="2" placeholder="Brand, store, reminders…" onblur="adjNote()">${e.note||""}</textarea></div><div class="qrow"><span class="qlbl">Low stock alert at</span><div class="qctl"><button class="qbtn" onclick="adjLowThresh(-1)">−</button><input class="qinp" id="adjlowthresh" type="number" min="0" value="${e.lowStockThreshold||1}" oninput="adjLowThreshD()"/><button class="qbtn" onclick="adjLowThresh(1)">+</button></div></div></div>`,p("rembtn").onclick=()=>Ba(n),vt("adj")}async function Ba(n){const e=d.inv.find(t=>t.id===n);if(e){const t=it(e.expiry);t&&(t.c==="expired"||t.c==="expiring")&&await fv(e.name)}await da(n),D("Item removed"),Ae("adj")}async function yT(n,e){const t=d.inv.find(s=>s.id===d.adjId);t&&(document.querySelectorAll("#adjbody .lbtn").forEach(s=>s.classList.remove("sel")),e.classList.add("sel"),await qe({...t,location:n}))}async function vT(n){const e=d.inv.find(s=>s.id===d.adjId);if(!e)return;const t=Math.max(0,e.qty+n);if(p("adjqty").value=t,t===0){await Ba(d.adjId);return}await qe({...e,qty:t})}async function _T(){const n=d.inv.find(t=>t.id===d.adjId);if(!n)return;const e=parseInt(p("adjqty").value);!isNaN(e)&&e>=0&&await qe({...n,qty:e})}async function wT(){const n=d.inv.find(e=>e.id===d.adjId);n&&await qe({...n,expiry:p("adjexp").value||null})}async function bT(){const n=d.inv.find(t=>t.id===d.adjId);if(!n)return;const e=(p("adjnote").value||"").trim();await qe({...n,note:e||null})}async function TT(n){const e=d.inv.find(s=>s.id===d.adjId);if(!e)return;const t=Math.max(0,(e.lowStockThreshold||1)+n);p("adjlowthresh").value=t,await qe({...e,lowStockThreshold:t})}async function ET(){const n=d.inv.find(t=>t.id===d.adjId);if(!n)return;const e=parseInt(p("adjlowthresh").value);!isNaN(e)&&e>=0&&await qe({...n,lowStockThreshold:e})}function IT(n){d.it=n,document.querySelectorAll(".itab").forEach(t=>t.classList.remove("active"));const e=p("itab-"+n);e&&e.classList.add("active"),ja()}async function ST(){const n=p("man").value.trim();if(!n)return;const e=p("mac").value,t=p("mau").value.trim()||"unit",s=Math.max(1,parseInt(p("maq").value)||1),i=p("mae").value||null,r="itm-"+n.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now();await qe({id:r,barcode:r,name:n,brand:"",unit:t,qty:s,location:d.maL,category:e,image:null,source:"Manual",nutrition:null,expiry:i,addedAt:new Date().toLocaleDateString()}),p("man").value="",p("maq").value=1,p("mae").value="",p("mabtn").disabled=!0,D(`${n} added!`),Ae("madd"),Fa(r,n,"inv")}function AT(){p("mabtn").disabled=!p("man").value.trim()}function kT(n){const e=p("maq");e.value=Math.max(1,(parseInt(e.value)||1)+n)}function CT(n,e){d.maL=n,document.querySelectorAll("#ov-madd .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}async function RT(){const n=p("imptxt").value.trim();if(!n)return;let e=0,t=0,s="pantry";for(const i of n.split(`
`)){const r=i.toLowerCase();r.includes("fridge")?s="fridge":r.includes("freezer")?s="freezer":r.includes("pantry")&&(s="pantry");const a=i.match(/^\|\s*([^|]+?)\s*\|\s*(\d+(?:\.\d+)?)\s*\|\s*([^|]+?)\s*\|/),c=i.match(/^[-*]\s+(.+?):\s*(\d+(?:\.\d+)?)\s*([a-zA-Z%\/]+.*)?$/);let u,f,g;if(a?(u=a[1].trim(),f=parseFloat(a[2]),g=a[3].trim()):c&&(u=c[1].trim(),f=parseFloat(c[2]),g=(c[3]||"unit").trim()),u&&f&&u!=="Item"&&u!=="---"&&!u.startsWith("-")){const w="item-imp-"+u.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),I=d.inv.find(R=>R.id===w);await qe({id:w,barcode:w,name:u,brand:"",unit:g||"unit",qty:f,location:s,category:"Imported",image:null,source:"Imported",nutrition:null,expiry:null,addedAt:I?I.addedAt:new Date().toLocaleDateString()}),I?t++:e++}}p("imptxt").value="",D(`Imported ${e} new, updated ${t}`),Ae("import")}function af(n){return[...document.querySelectorAll("#"+n+" .tag.sel")].map(e=>e.dataset.tag)}function PT(n,e){document.querySelectorAll("#"+n+" .tag").forEach(t=>{t.classList.toggle("sel",(e||[]).includes(t.dataset.tag))})}function xT(n){n.classList.toggle("sel")}function DT(n){const e=Array.from({length:5},(s,i)=>`<span class="star${i<n.rating?" on":""}">${i<n.rating?"★":"☆"}</span>`).join(""),t=n.sourceUrl?`<a href="${n.sourceUrl}" target="_blank" onclick="event.stopPropagation()" style="font-size:.68rem;color:var(--ac);text-decoration:none;border:1px solid rgba(212,168,83,.3);border-radius:20px;padding:2px 8px;background:transparent">🔗 View original</a>`:n.source?`<span class="sbdg">${n.source}</span>`:"";return`<div class="rcd${n.favorited?" fav":""}" onclick="openER('${n.id}')"><div class="rrow"><div class="rnm">${n.name}</div><div class="rfav" onclick="event.stopPropagation();togFav('${n.id}')">${n.favorited?"❤️":"🤍"}</div></div><div class="stars">${e}</div>${n.description?`<div class="rnot" style="color:var(--tx2);margin-top:6px">${n.description.substring(0,100)}${n.description.length>100?"…":""}</div>`:""}${n.notes?`<div class="rnot">${n.notes}</div>`:""}<div class="rmeta"><span>${n.savedAt}</span>${t}</div></div>`}function LT(n){d.rt=n,document.querySelectorAll(".rtab").forEach(t=>t.classList.remove("active"));const e=p("rtab-"+n);e&&e.classList.add("active"),n==="community"?qa():Sr()}function Sr(){if(d.rt==="community")return;let n=[...d.recs];d.rt==="fav"?n=n.filter(s=>s.favorited):d.rt==="top"?n=n.filter(s=>s.rating>=4).sort((s,i)=>i.rating-s.rating):d.rt==="quick"?n=n.filter(s=>(s.tags||[]).includes("Quick")||(s.tags||[]).includes("Under 30 min")):d.rt==="kid"?n=n.filter(s=>(s.tags||[]).includes("Kid-Friendly")):n=n.sort((s,i)=>new Date(i.savedAt||0)-new Date(s.savedAt||0));const e=p("rsub");e&&(e.textContent=n.length+" recipe"+(n.length!==1?"s":""));const t=p("rbody");if(t){if(!n.length){t.innerHTML=`<div class="es"><div class="ei">📖</div><p>${d.rt==="fav"?"No favorites yet!":d.rt==="top"?"No 4–5 star recipes yet.":d.rt==="quick"?"No quick recipes saved yet.":d.rt==="kid"?"No kid-friendly recipes yet.":"No recipes saved yet.<br/>Mark meals as cooked or tap + Add."}</p></div>`;return}t.innerHTML=n.map(DT).join("")}}async function NT(n){const e=d.recs.find(t=>t.id===n);e&&(await Ft({...e,favorited:!e.favorited}),D(e.favorited?"Removed from favorites":"Added to favorites! ❤️"))}function OT(){p("savrecbtn").disabled=!p("rn").value.trim()}async function MT(){const n=p("rurl").value.trim();if(!n)return;const e=p("rurlstatus"),t=p("rimportbtn");e.style.display="block",e.style.color="var(--mt)",e.textContent="⏳ Fetching recipe…",t.disabled=!0;try{const i=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})})).json();if(!i.success){e.style.color="var(--rd)",e.textContent="⚠️ "+(i.error||"Couldn't import this recipe"),t.disabled=!1;return}const r=i.recipe,a=[r.ingredients||"",r.steps?`

Steps:
`+r.steps:""].join("").trim();p("rn").value=r.title||"",p("rd").value=a||r.description||"",p("rnotes").value=r.notes||"",p("rsourceurl").value=n,p("rcuisine")&&(p("rcuisine").value=r.cuisine||""),p("savrecbtn").disabled=!r.title,e.style.color="var(--gn)",e.textContent="✓ Recipe imported! Review and save."}catch{e.style.color="var(--rd)",e.textContent="⚠️ Couldn't import — try copying the recipe text manually."}t.disabled=!1}async function VT(){const n=p("rn").value.trim();if(!n)return;const e=p("rd").value.trim(),t=p("rsourceurl")?p("rsourceurl").value.trim():"",s=p("rcuisine")?p("rcuisine").value.trim():"",i=af("rtags");await Ft({id:"rec-"+Date.now(),name:n,rating:d.nr,favorited:!1,notes:p("rnotes").value.trim(),description:e,source:t?"Web Import":"Manual",sourceUrl:t||null,tags:i,cuisine:s,cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:!1}),p("rn").value="",p("rnotes").value="",p("rd").value="",p("rsourceurl").value="",p("rurl").value="",p("rcuisine")&&(p("rcuisine").value=""),PT("rtags",[]),d.nr=0,p("savrecbtn").disabled=!0,Cs("rstars",0),D("Recipe saved! 📖"),Ae("arec")}function $T(n){const e=d.recs.find(a=>a.id===n);if(!e)return;d.eid=n;const t=e.rating||0,s=Array.from({length:5},(a,c)=>`<span class="star${c<t?" on":""}" onclick="setStar(${c+1},'e')">${c<t?"★":"☆"}</span>`).join(""),i=e.sourceUrl?`<div class="frow"><label class="flbl">Original</label><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);word-break:break-all">${e.sourceUrl}</a></div>`:"",r=`<div class="frow"><label class="flbl">Tags</label><div class="tags" id="etags">
    <div class="tag${(e.tags||[]).includes("Quick")?" sel":""}" data-tag="Quick" onclick="togTag(this)">⚡ Quick</div>
    <div class="tag kid${(e.tags||[]).includes("Kid-Friendly")?" sel":""}" data-tag="Kid-Friendly" onclick="togTag(this)">👶 Kid-Friendly</div>
    <div class="tag date${(e.tags||[]).includes("Date Night")?" sel":""}" data-tag="Date Night" onclick="togTag(this)">🕯 Date Night</div>
    <div class="tag batch${(e.tags||[]).includes("Batch Cook")?" sel":""}" data-tag="Batch Cook" onclick="togTag(this)">📦 Batch Cook</div>
    <div class="tag${(e.tags||[]).includes("Healthy")?" sel":""}" data-tag="Healthy" onclick="togTag(this)">🥗 Healthy</div>
    <div class="tag${(e.tags||[]).includes("Under 30 min")?" sel":""}" data-tag="Under 30 min" onclick="togTag(this)">⏱ Under 30 min</div>
  </div></div>`;p("erecbody").innerHTML=`
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
    <div class="brow"><button class="btn bd" style="flex:1" onclick="delER()">Delete</button><button class="btn bp" style="flex:2" onclick="updR()">Save</button></div>`,vt("erec")}async function FT(){const n=d.recs.find(i=>i.id===d.eid);if(!n)return;const e=[...document.querySelectorAll("#estars .star")].filter(i=>i.classList.contains("on")).length,t=af("etags"),s=p("ecuis")?p("ecuis").value.trim():n.cuisine||"";await Ft({...n,name:p("ern").value.trim(),rating:e,description:p("erd").value.trim(),notes:p("erno").value.trim(),favorited:p("etog").classList.contains("on"),tags:t,cuisine:s}),D("Recipe updated!"),Ae("erec")}async function UT(){confirm("Delete this recipe?")&&(await mv(d.eid),D("Deleted"),Ae("erec"))}async function jT(n){const e=p("erd");if(!e)return;const t=e.value.trim();if(!t){D("No ingredients to scale");return}const s=p("scaleStatus");s.style.display="block",s.style.color="var(--mt)",s.textContent=`⏳ Scaling to ${n}× with Claude…`;try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Scale ALL ingredient quantities in this recipe by ${n}x. Return ONLY the updated recipe text with scaled quantities. Keep the same format. Do not add any explanation.

${t}`}]})})).json(),a=r.content&&r.content[0]&&r.content[0].text||"";a?(e.value=a.trim(),s.style.color="var(--gn)",s.textContent=`✓ Scaled to ${n}×`):(s.style.color="var(--rd)",s.textContent="Couldn't scale — try again")}catch{s.style.color="var(--rd)",s.textContent="Couldn't reach Claude — check connection"}}async function BT(){const n=p("rsub");n&&(n.textContent="Thinking…");const e=d.inv.map(i=>`${i.name} (${i.qty} ${i.unit})`).join(", "),t=d.recs.map(i=>i.name).join(", "),s=[d.cfg.nopork?"no pork":null,d.cfg.noshellfish?"no shellfish":null,d.cfg.vegetarian?"vegetarian":null,d.cfg.glutenfree?"gluten-free":null,d.cfg.other||null].filter(Boolean).join(", ");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Based on this exact inventory: ${e}
Restrictions: ${s||"none"}
Saved recipes: ${t||"none"}
Suggest 5 complete meals I can make RIGHT NOW with no extra shopping. Be specific with names. Format as a numbered list.`}]})})).json(),a=r.content&&r.content[0]&&r.content[0].text||"",c=p("rbody");c&&(c.innerHTML=`<div style="background:var(--card);border:1px solid var(--ac);border-radius:14px;padding:16px;margin-bottom:12px"><div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ac);margin-bottom:10px">🔍 Make right now — no shopping needed</div><div style="font-size:.88rem;line-height:1.8;color:var(--tx2)">${kv(a)}</div><button class="btn bs bsm" style="margin-top:12px;width:100%" onclick="setRT('all')">← Back to recipes</button></div>`),n&&(n.textContent="Based on your inventory")}catch{n&&(n.textContent="Couldn't reach Claude")}}async function qT(n){const e=d.recs.find(t=>t.id===n);if(!e||!e.description){D("No ingredients listed");return}D("Parsing ingredients…");try{const t=d.inv.map(u=>u.name.toLowerCase()),i=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:400,messages:[{role:"user",content:`Extract a list of ingredient names from this recipe description. Return ONLY a JSON array of strings, no markdown, no quantities, just clean ingredient names. Example: ["chicken","garlic","olive oil"]

Recipe: ${e.description}`}]})})).json(),r=(i.content&&i.content[0]&&i.content[0].text||"").replace(/```json|```/g,"").trim(),c=JSON.parse(r).filter(u=>!t.some(f=>f.includes(u.toLowerCase())||u.toLowerCase().includes(f)));if(!c.length){D("All ingredients already in pantry ✓");return}for(const u of c)await He({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:u,qty:1,checked:!1,src:"recipe"});D(`Added ${c.length} ingredient${c.length!==1?"s":""} to shopping list 🛒`),Ae("erec"),window.showScreen("shopping")}catch{D("Couldn't parse ingredients")}}function HT(n,e){d.nr=n,e==="r"?Cs("rstars",n):e==="c"?Cs("cstars",n):e==="e"&&Cs("estars",n)}async function zT(n){const e=d.recs.find(r=>r.id===n);if(!e)return;const t=!e.isPublic,s=xe(),i=(s==null?void 0:s.displayName)||localStorage.getItem("ks-who")||"Anonymous";t?(await gv(e,i,d.hid),D("Recipe shared with the community!")):(await yv(e.id),D("Recipe removed from community")),await Ft({...e,isPublic:t})}async function qa(){const n=p("rbody");if(n){n.innerHTML='<div class="es"><div class="ei">🌍</div><p>Loading community recipes…</p></div>';try{d.comRecs=await vv(),Ha()}catch(e){console.error("loadCommunity:",e),n.innerHTML=`<div class="es"><div class="ei">⚠️</div><p>Couldn't load community recipes.</p></div>`}}}function GT(n){d.comCuisine=n,Ha()}function KT(n){d.comSearch=n,Ha()}function Ha(){const n=p("rbody");if(!n)return;let e=[...d.comRecs];if(d.comCuisine&&d.comCuisine!=="all"&&(e=e.filter(i=>(i.cuisine||"").toLowerCase().includes(d.comCuisine.toLowerCase())||(i.tags||[]).some(r=>r.toLowerCase().includes(d.comCuisine.toLowerCase())))),d.comSearch){const i=d.comSearch.toLowerCase();e=e.filter(r=>(r.title||"").toLowerCase().includes(i)||(r.tags||[]).join(" ").toLowerCase().includes(i)||(r.cuisine||"").toLowerCase().includes(i)||(r.authorName||"").toLowerCase().includes(i))}e.sort((i,r)=>new Date(r.createdAt||0)-new Date(i.createdAt||0));const t=p("rsub");t&&(t.textContent=e.length+" community recipe"+(e.length!==1?"s":""));let s=`<div style="margin-bottom:14px">
    <input class="fi" id="com-search" placeholder="Search recipes, tags, authors…" value="${d.comSearch}" oninput="setComSearch(this.value)" style="margin-bottom:8px"/>
    <div style="display:flex;gap:6px;flex-wrap:wrap">
      <select class="fsel" id="com-cuisine" onchange="setComCuisine(this.value)" style="flex:1;font-size:.8rem;padding:8px 10px">
        <option value="all"${d.comCuisine==="all"?" selected":""}>All Cuisines</option>
        <option value="mediterranean"${d.comCuisine==="mediterranean"?" selected":""}>Mediterranean</option>
        <option value="asian"${d.comCuisine==="asian"?" selected":""}>Asian</option>
        <option value="american"${d.comCuisine==="american"?" selected":""}>American</option>
        <option value="turkish"${d.comCuisine==="turkish"?" selected":""}>Turkish</option>
        <option value="indian"${d.comCuisine==="indian"?" selected":""}>Indian</option>
        <option value="mexican"${d.comCuisine==="mexican"?" selected":""}>Mexican</option>
        <option value="italian"${d.comCuisine==="italian"?" selected":""}>Italian</option>
      </select>
    </div>
  </div>`;if(!e.length){s+=`<div class="es"><div class="ei">🌍</div><p>${d.comSearch||d.comCuisine!=="all"?"No recipes match your filters.":"No community recipes yet. Be the first to share!"}</p></div>`,n.innerHTML=s;return}e.forEach(i=>{const r=(i.tags||[]).map(c=>`<span class="com-tag">${c}</span>`).join(""),a=i.createdAt?new Date(i.createdAt).toLocaleDateString():"";s+=`<div class="rcd com-rcd" onclick="openComRecipe('${i.id}')">
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
        <div style="font-size:.7rem;color:var(--mt)">by ${i.authorName||"Anonymous"} · ${a}</div>
      </div>
    </div>`}),n.innerHTML=s}async function WT(n){const e=d.comRecs.find(u=>u.id===n);if(!e)return;await Tv(n)?d.myLikes.add(n):d.myLikes.delete(n);let s=[];try{s=await bv(n)}catch{}s.sort((u,f)=>new Date(u.createdAt||0)-new Date(f.createdAt||0));const i=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`;let r=s.map(u=>`<div style="padding:10px 0;border-bottom:1px solid var(--b1)">
    <div style="display:flex;justify-content:space-between;align-items:center">
      <span style="font-size:.78rem;font-weight:600">${u.authorName||"Anonymous"}</span>
      <span style="font-size:.68rem;color:var(--mt)">${u.createdAt?new Date(u.createdAt).toLocaleDateString():""}</span>
    </div>
    <div style="font-size:.84rem;color:var(--tx2);margin-top:4px;line-height:1.5">${(u.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>
  </div>`).join("");const a=(e.tags||[]).map(u=>`<span class="com-tag">${u}</span>`).join(""),c=d.myLikes.has(n);p("erecbody").innerHTML=`
    <div style="margin-bottom:14px">
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;line-height:1.3;margin-bottom:6px">${e.title||"Untitled"}</div>
      ${e.cuisine?`<div style="font-size:.78rem;color:var(--ac);font-weight:600;margin-bottom:6px">${e.cuisine}</div>`:""}
      <div style="font-size:.76rem;color:var(--mt)">by ${e.authorName||"Anonymous"} · ${e.createdAt?new Date(e.createdAt).toLocaleDateString():""}</div>
      ${a?`<div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:8px">${a}</div>`:""}
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
    </div>`,vt("erec")}async function QT(n){if(!xe()){D("Sign in to like recipes");return}const t=d.myLikes.has(n);try{await _v(n,t),t?d.myLikes.delete(n):d.myLikes.add(n);const s=d.comRecs.find(r=>r.id===n);s&&(s.likes=(s.likes||0)+(t?-1:1));const i=p("com-like-btn");if(i){const r=d.myLikes.has(n);i.className=`btn ${r?"bp":"bs"} bsm`,i.innerHTML=`${r?"❤️":"🤍"} ${(s==null?void 0:s.likes)||0} Like${((s==null?void 0:s.likes)||0)!==1?"s":""}`}D(t?"Like removed":"Liked!")}catch(s){console.error("likeComRecipe:",s),D("Couldn't update like")}}async function JT(n){if(!xe()){D("Sign in to save recipes");return}const t=d.comRecs.find(s=>s.id===n);if(t)try{await Ev(t),D("Recipe saved to your kitchen! 📖"),Ae("erec")}catch(s){console.error("saveComToKitchen:",s),D("Couldn't save recipe")}}async function YT(n){var r;const e=xe();if(!e){D("Sign in to comment");return}const t=p("com-cmt-input"),s=(r=t==null?void 0:t.value)==null?void 0:r.trim();if(!s)return;const i=e.displayName||localStorage.getItem("ks-who")||"Anonymous";try{const a=await wv(n,s,i);t.value="";const c=p("com-comments");c&&a&&(c.querySelector("div[style*='color:var(--mt)']")&&!c.querySelector("div[style*='border-bottom']")&&(c.innerHTML=""),c.innerHTML+=`<div style="padding:10px 0;border-bottom:1px solid var(--b1)">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:.78rem;font-weight:600">${a.authorName}</span>
          <span style="font-size:.68rem;color:var(--mt)">${new Date().toLocaleDateString()}</span>
        </div>
        <div style="font-size:.84rem;color:var(--tx2);margin-top:4px;line-height:1.5">${a.text.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>
      </div>`),D("Comment posted!")}catch(a){console.error("addComComment:",a),D("Couldn't post comment")}}async function XT(n){const e=d.comRecs.find(i=>i.id===n),t=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`,s=(e==null?void 0:e.title)||"Recipe";if(navigator.share)try{await navigator.share({title:s,text:`Check out this recipe: ${s}`,url:t});return}catch{}try{await navigator.clipboard.writeText(t),D("Link copied!")}catch{D("Couldn't copy link")}}function ZT(){const n=d.cookLog,e=d.wasteLog;let t=0;for(let j=0;j<60;j++){const G=new Date;G.setDate(G.getDate()-j);const ee=G.toISOString().split("T")[0];if(n.find(te=>te.date===ee))t++;else if(j>0)break}const s=p("ins-streak-num");s&&(s.textContent=t);const i=p("ins-total-cooked");i&&(i.textContent=n.length);const r=p("ins-waste-count");r&&(r.textContent=e.length);const a=p("ins-sub");a&&(a.textContent=n.length?" "+n.length+" meals cooked":"Your kitchen at a glance");const c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],u=p("ins-week");if(u){const j=Qn().map(G=>{const ee=G.toISOString().split("T")[0],te=d.mp[ee],b=ee===Pt();return`<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--b1)${b?";background:var(--acd);margin:0 -4px;padding:7px 4px;border-radius:6px":""}">
        <div style="font-size:.72rem;color:var(--mt);min-width:30px;font-weight:${b?"600":"400"}">${c[G.getDay()]}</div>
        <div style="font-size:.72rem;color:var(--mt);min-width:20px">${G.getDate()}</div>
        <div style="font-size:.84rem;color:${te?"var(--tx)":"var(--mt)"};font-style:${te?"normal":"italic"};flex:1">${te||"—"}</div>
        ${b?"<div style='font-size:.66rem;color:var(--ac);font-weight:600'>TODAY</div>":""}
      </div>`}).join("");u.innerHTML=j}const f=n.slice(0,7).map(j=>j.name),g=p("ins-variety-nudge"),w=p("ins-variety-msg");if(g&&f.length>=3){const j={};f.forEach(y=>{const _=y.toLowerCase();j[_]=(j[_]||0)+1});const G=Object.entries(j).filter(([,y])=>y>=3),ee=Object.values(d.mp).filter(Boolean),te=ee.some(y=>/curry|dal|rice|bengali|biryani|hilsa|mustard|lentil/i.test(y)),b=ee.some(y=>/kebab|köfte|pide|börek|meze|turkish|pilav|lahmacun/i.test(y));G.length?(g.style.display="block",w.textContent=`You've cooked "${G[0][0]}" ${G[0][1]} times this week. Time to mix it up?`):!te&&ee.length>=3?(g.style.display="block",w.textContent="No Bangladeshi dishes this week — how about a dal, biryani, or fish curry?"):!b&&ee.length>=3?(g.style.display="block",w.textContent="No Turkish dishes planned — köfte, mercimek çorbası, or a pilav would be great this week!"):g.style.display="none"}else g&&(g.style.display="none");const I={};n.forEach(j=>{I[j.name]=(I[j.name]||0)+1});const R=Object.entries(I).sort((j,G)=>G[1]-j[1]).slice(0,6),N=R[0]?R[0][1]:1,$=p("ins-cooked");if($)if(!R.length)$.innerHTML='<div class="es" style="padding:16px"><p>Cook some meals to see stats!</p></div>';else{const j=["🥇","🥈","🥉","4️⃣","5️⃣","6️⃣"];$.innerHTML=R.map(([G,ee],te)=>`<div class="ibar-row"><div style="font-size:.9rem;margin-right:4px">${j[te]||""}</div><div class="ibar-lbl">${G}</div><div class="ibar-track"><div class="ibar-fill" style="width:${Math.round(ee/N*100)}%"></div></div><div class="ibar-val">${ee}×</div></div>`).join("")}const M={Bangladeshi:"#e8a44a",Turkish:"#c0392b",Mediterranean:"#27ae60",American:"#3498db",Italian:"#e74c3c",Asian:"#9b59b6",Other:"#95a5a6"},Y=p("ins-cuisine");if(Y&&n.length){const j=b=>{const y=b.toLowerCase();return/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(y)?"Bangladeshi":/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner|iskender/i.test(y)?"Turkish":/pasta|pizza|risotto|gnocchi|italian/i.test(y)?"Italian":/tacos|burrito|enchilada|mexican/i.test(y)?"Mexican":/sushi|ramen|stir.?fry|fried rice|asian|chinese|thai|japanese/i.test(y)?"Asian":/burger|sandwich|mac|bbq|american/i.test(y)?"American":"Other"},G={};n.slice(0,20).forEach(b=>{const y=j(b.name);G[y]=(G[y]||0)+1});const ee=Object.values(G).reduce((b,y)=>b+y,0),te=Object.entries(G).sort((b,y)=>y[1]-b[1]);Y.innerHTML=te.map(([b,y])=>{const _=Math.round(y/ee*100),E=M[b]||"#95a5a6";return`<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span style="font-size:.82rem;font-weight:500">${b}</span><span style="font-size:.74rem;color:var(--mt)">${y} meals · ${_}%</span></div><div style="height:8px;background:var(--b1);border-radius:4px;overflow:hidden"><div style="height:100%;width:${_}%;background:${E};border-radius:4px;transition:width .6s ease"></div></div></div>`}).join("")||'<div class="es" style="padding:16px"><p>Cook more meals to see your cuisine breakdown.</p></div>'}const Z=p("ins-waste");Z&&(Z.innerHTML=e.length?e.slice(0,10).map(j=>`<div class="waste-item"><span style="font-size:.86rem">${j.name}</span><span style="font-size:.74rem;color:var(--rd)">${j.date}</span></div>`).join(""):'<div class="es" style="padding:16px"><p>Nothing wasted yet — great job! 🎉</p></div>')}function eE(){const n=["fridge","freezer","pantry"].map(a=>{const c=d.inv.filter(u=>u.location===a);return c.length?pa(a).toUpperCase()+": "+c.map(u=>`${u.name} (${u.qty} ${u.unit})`).join(", "):""}).filter(Boolean).join(`
`),e=d.inv.filter(a=>{const c=it(a.expiry);return c&&(c.c==="expiring"||c.c==="expired")}).map(a=>{const c=it(a.expiry);return`${a.name} (${c.l})`}).join(", "),t=Qn().map(a=>{const c=a.toISOString().split("T")[0];return d.mp[c]?`${a.toLocaleDateString("en-US",{weekday:"short"})}: ${d.mp[c]}`:""}).filter(Boolean).join(", "),s=d.recs.filter(a=>a.favorited||a.rating>=4).map(a=>`${a.name}${a.rating?` (${a.rating}★)`:""}`).join(", "),i=[d.cfg.nopork?"no pork":null,d.cfg.noshellfish?"no shellfish":null,d.cfg.vegetarian?"vegetarian":null,d.cfg.glutenfree?"gluten-free":null,d.cfg.other].filter(Boolean).join(", "),r=d.cookLog.slice(0,7).map(a=>a.name).join(", ");return`You are a helpful kitchen assistant for a family in Edison NJ.
INVENTORY:
${n||"Empty."}
${e?"EXPIRING SOON: "+e:""}
${t?"MEAL PLAN: "+t:""}
${s?"FAVOURITE RECIPES: "+s:""}
${r?"RECENTLY COOKED (avoid repeating): "+r:""}
HOUSEHOLD: ${d.cfg.name}, Adults: ${d.cfg.adults}, Kids: ${d.cfg.kids}, Restrictions: ${i||"none"}, Cuisines: ${d.cfg.cuisines}, Cook time: ${d.cfg.cookTime}.
CULTURAL BACKGROUND: Bushra is Bangladeshi, Bora is Turkish — authentically lean toward these cuisines (Bengali spices, mustard oil, dal, hilsa-style fish; Turkish kebabs, meze, börek, yogurt sauces, lentil soups). Suggest these when inventory allows.
Be concise. Use what they have. Suggest variety — lean toward Bangladeshi and Turkish — avoid repeating recent meals. Format grocery lists as bullet points starting "- ".

RECIPE FORMAT RULE: When suggesting recipes (any time you provide a recipe with ingredients/steps), wrap EACH recipe in :::RECIPE::: and :::END::: markers with a JSON object containing: title, ingredients (newline-separated list), steps (numbered newline-separated list), cuisine, cookTime, servings.
Example:
:::RECIPE:::
{"title":"Dal Tadka","ingredients":"1 cup red lentils\\n2 tomatoes, chopped\\n1 tsp cumin seeds\\n1 tsp turmeric","steps":"1. Wash and boil lentils until soft\\n2. Heat oil, add cumin seeds\\n3. Add tomatoes, cook until soft\\n4. Combine with lentils and simmer","cuisine":"Bangladeshi","cookTime":"30 min","servings":4}
:::END:::
Always use this format so the app can offer a one-tap save button. You can include normal text before/after recipe blocks.`}function tE(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<li>$1</li>").replace(/^[-•]\s+(.+)$/gm,"<li>$1</li>").replace(/\n/g,"<br>")}async function cf(){const n=p("chi"),e=n.value.trim();if(!e)return;n.value="",lf(n),d.chat.push({role:"user",content:e}),mo("user",e);const t=p("csb");t&&(t.disabled=!0);const s="thinking-"+Date.now(),i=p("chmsgs");i.innerHTML+=`<div class="cb asst thinking" id="${s}">Thinking…</div>`,i.scrollTop=i.scrollHeight;try{const a=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:800,system:eE(),messages:d.chat.map(f=>({role:f.role,content:f.content}))})})).json(),c=a.content&&a.content[0]&&a.content[0].text||"Sorry, I couldn't process that.",u=p(s);u&&u.remove(),d.chat.push({role:"assistant",content:c}),mo("assistant",c)}catch{const a=p(s);a&&a.remove(),mo("assistant","Sorry, I couldn't reach Claude. Check your connection and try again.")}t&&(t.disabled=!1)}function nE(n){const e=[];return{cleanText:n.replace(/:::RECIPE:::\s*([\s\S]*?)\s*:::END:::/g,(s,i)=>{try{const r=JSON.parse(i.trim());r.title&&e.push(r)}catch{}return""}).trim(),recipes:e}}function sE(n){const e=JSON.stringify(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;"),t=(n.ingredients||"").split(`
`).slice(0,3).join(", ");return`<div style="background:var(--card);border:1.5px solid var(--ac);border-radius:14px;padding:16px;margin:10px 0">
    <div style="font-family:'Fraunces',serif;font-size:1.1rem;font-weight:300;color:var(--ac);margin-bottom:6px">${(n.title||"").replace(/</g,"&lt;")}</div>
    ${n.cuisine?`<div style="font-size:.72rem;color:var(--mt);margin-bottom:6px">${n.cuisine}${n.cookTime?" · "+n.cookTime:""}${n.servings?" · "+n.servings+" servings":""}</div>`:""}
    ${t?`<div style="font-size:.8rem;color:var(--tx2);line-height:1.5;margin-bottom:10px">${t.replace(/</g,"&lt;")}…</div>`:""}
    <button class="btn bp bsm" onclick="importChatRecipe(this)" data-recipe="${e}">📖 Add to My Recipes</button>
  </div>`}async function iE(n){try{const e=JSON.parse(n.dataset.recipe),t="rec-"+Date.now(),s=[e.ingredients||"",e.steps?`

Steps:
`+e.steps:""].join("").trim();await Ft({id:t,name:e.title||"Untitled Recipe",rating:0,favorited:!1,notes:"",description:s,source:"Claude Chat",sourceUrl:null,tags:[],cuisine:e.cuisine||"",cookTime:e.cookTime||"",servings:e.servings||"",cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:!1}),n.textContent="✓ Saved!",n.disabled=!0,n.style.background="var(--gn)",D("Recipe saved! 📖")}catch{D("Couldn't save recipe")}}function mo(n,e){const t=p("chmsgs");if(t){if(n==="assistant"){const{cleanText:s,recipes:i}=nE(e);if(s){const r=document.createElement("div");r.className="cb asst",r.innerHTML=tE(s),t.appendChild(r)}i.forEach(r=>{const a=document.createElement("div");a.style.maxWidth="88%",a.style.alignSelf="flex-start",a.innerHTML=sE(r),t.appendChild(a)})}else{const s=document.createElement("div");s.className="cb user",s.innerHTML=e,t.appendChild(s)}t.scrollTop=t.scrollHeight}}function rE(n){const e=p("chi");e&&(e.value=n.textContent),cf()}function oE(){d.chat=[];const n=p("chmsgs");n&&(n.innerHTML='<div class="cb asst">Hey! 👋 I know your full inventory, meal plan, and saved recipes. What do you need?</div>')}function lf(n){n.style.height="auto",n.style.height=Math.min(n.scrollHeight,120)+"px"}let er=!1,Oi=!1;function za(){if(er)return;const n=p("scanner-video");if(!n)return;const e=p("scan-status");e&&(e.textContent="Starting camera…",e.style.display="block"),Quagga.init({inputStream:{name:"Live",type:"LiveStream",target:n,constraints:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}},locator:{patchSize:"medium",halfSample:!0},decoder:{readers:["ean_reader","ean_8_reader","upc_reader","upc_e_reader","code_128_reader","code_39_reader"]},locate:!0,frequency:10},function(t){if(t){console.error("Scanner init error:",t);const s=p("scerr");s&&(s.textContent="⚠️ Could not access camera. Try entering the barcode manually.",s.style.display="block"),e&&(e.style.display="none");return}Quagga.start(),er=!0,e&&(e.textContent="Scanning…")}),Quagga.onDetected(uf)}function Ga(){if(er){try{Quagga.stop()}catch{}Quagga.offDetected(uf),er=!1,Oi=!1}}async function uf(n){var i,r;if(Oi)return;const e=n&&n.codeResult&&n.codeResult.code;if(!e)return;const t=((r=(i=n.codeResult.decodedCodes)==null?void 0:i.filter(a=>a.error!==void 0))==null?void 0:r.map(a=>a.error))||[];if(!((t.length?t.reduce((a,c)=>a+c,0)/t.length:1)>.25)){Oi=!0,aE(),Ga(),p("scanbody").style.display="none",p("scspin").style.display="block",p("scst").textContent="Found "+e+" — looking up…";try{const a=await hf(e);d.cp=a,p("aqty").value=1,p("aexp").value="",Ka("fridge",p("rl-fridge")),df(a)}catch{const a=p("scerr");a.textContent="⚠️ Lookup failed. Check your connection or enter the barcode manually.",a.style.display="block"}p("scanbody").style.display="block",p("scspin").style.display="none",Oi=!1}}function aE(){const n=p("scan-success");n&&(n.style.display="flex",n.style.animation="none",n.offsetHeight,n.style.animation="",setTimeout(()=>{n.style.display="none"},500))}function cE(){Ae("result"),vt("scan"),p("scerr").style.display="none",za()}function lE(){d.scanDestList=!0,vt("scan");const n=p("scanovttl");n&&(n.textContent="Scan → Shopping List");const e=p("scan-dest-hint");e&&(e.textContent="Running low? Scan to add to your shopping list."),p("scerr").style.display="none",za()}function uE(){d.scanDestList=!1,vt("scan");const n=p("scanovttl");n&&(n.textContent="Scan Barcode");const e=p("scan-dest-hint");e&&(e.textContent="Scan a barcode to add to your pantry or shopping list."),p("scerr").style.display="none",za()}function hE(){const n=p("scanNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=p("scanNoteInp");t&&t.focus()}}function dE(){if(!d.cp)return;const n=d.cp.notFound?"Barcode "+d.cp.barcode:d.cp.name,e=p("scanNoteInp"),t=e?e.value.trim():"",s=parseInt(p("aqty").value)||1,i={id:Date.now().toString(),name:n,qty:s,checked:!1,src:"scan"};d.cp.brand&&(i.brand=d.cp.brand),d.cp.image&&(i.image=d.cp.image),t&&(i.note=t),He(i),D("Added to list: "+n),Ae("result"),Ae("scan"),d.scanDestList=!1,e&&(e.value="");const r=p("scanNoteWrap");r&&(r.style.display="none"),window.showScreen("shopping")}function fE(){const n=p("mentry");n.style.display=n.style.display==="none"?"block":"none"}async function pE(){const n=p("meinp").value.trim();if(!n)return;Ga(),p("scanbody").style.display="none",p("scspin").style.display="block",p("scst").textContent="Looking up…";const e=await hf(n);d.cp=e,p("aqty").value=1,p("aexp").value="",Ka("fridge",p("rl-fridge")),p("meinp").value="",df(e),p("scanbody").style.display="block",p("scspin").style.display="none"}async function hf(n){try{const e=await fetch("/api/barcode?code="+encodeURIComponent(n));if(e.ok){const t=await e.json();if(t.found&&t.product)return{...t.product,notFound:!1}}}catch{}return{barcode:n,name:"",brand:"",quantity:"",category:"General",image:null,source:null,description:"",notFound:!0}}function mE(n,e){switch(n){case"Open Food Facts":return`https://world.openfoodfacts.org/product/${e}`;case"Open Beauty Facts":return`https://world.openbeautyfacts.org/product/${e}`;case"Open Pet Food Facts":return`https://world.openpetfoodfacts.org/product/${e}`;case"UPC Item DB":return`https://www.upcitemdb.com/upc/${e}`;case"Edamam":return"https://www.edamam.com/food-database/en/";default:return"#"}}function df(n){Ae("scan"),p("resttl").textContent=n.notFound?"Not Found":"Product Found ✓",p("aunit").value=n.quantity||"unit";let e="";if(n.notFound)e=`<div class="nfb">⚠️ Barcode <code>${n.barcode}</code> not found in any database. Enter name:<input class="fi" id="mnm" placeholder="Product name (required)" oninput="valAdd()" style="margin-top:10px"/></div>`,setTimeout(()=>p("addbtn").disabled=!0,0);else{const t=n.image?`<img src="${n.image}" class="pimg" onerror="this.style.display='none'"/>`:'<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">🛒</div>';let s="";n.nutrition&&(n.nutrition.calories||n.nutrition.protein)&&(s=`<div class="ngrd">${[["Cal",n.nutrition.calories],["Protein",n.nutrition.protein],["Fat",n.nutrition.fat],["Carbs",n.nutrition.carbs]].map(([a,c])=>`<div class="nb"><div class="nv">${c||"—"}</div><div class="nl">${a}</div></div>`).join("")}</div>`);const i=n.description?`<div class="pdsc">${n.description}</div>`:"",r=n.source?`<a href="${mE(n.source,n.barcode)}" target="_blank" rel="noopener" class="srcb" style="text-decoration:none">${n.source} ↗</a>`:"";e=`<div class="pcard"><div class="phdr">${t}<div style="flex:1"><div class="pnm">${n.name}</div>${n.brand?`<div class="pbr">${n.brand}</div>`:""}<div class="pbc">${n.barcode}</div><span class="bdg">${n.category}</span>${r}</div></div>${i}${s}</div>`,setTimeout(()=>p("addbtn").disabled=!1,0)}p("resbody").innerHTML=e,vt("result")}function Ka(n,e){d.selR=n,document.querySelectorAll("#ov-result .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function gE(){const n=p("mnm");p("addbtn").disabled=!(n&&n.value.trim())}async function yE(){if(!d.cp)return;const n=p("mnm"),e=d.cp.notFound?n&&n.value.trim()||"":d.cp.name;if(!e)return;const t=p("aunit").value.trim()||"unit",s=Math.max(1,parseInt(p("aqty").value)||1),i=p("aexp").value||null,r="item-"+d.cp.barcode.replace(/\W/g,"-"),a=d.inv.find(c=>c.id===r);await qe({id:r,barcode:d.cp.barcode,name:e,brand:d.cp.brand||"",unit:t,qty:a?a.qty+s:s,location:d.selR,category:d.cp.category||"General",image:d.cp.image||null,source:d.cp.source||null,nutrition:d.cp.nutrition||null,expiry:i,addedAt:a?a.addedAt:new Date().toLocaleDateString()}),D(a?`+${s} added to ${e}`:`${e} added!`),d.cp=null,Ae("result")}function vE(n){const e=p("aqty");e.value=Math.max(1,(parseInt(e.value)||1)+n)}let wn=null,Ru=0,ze=null;function _E(){document.addEventListener("touchstart",n=>{const e=n.target.closest(".swipe-inner");!e||!e.closest(".swipe-wrap")||d.selectMode||(wn=e,Ru=n.touches[0].clientX,e.classList.add("swiping"))},{passive:!0}),document.addEventListener("touchmove",n=>{if(!wn)return;const e=n.touches[0].clientX-Ru,t=Math.max(-80,Math.min(0,e));wn.style.transform=`translateX(${t}px)`,Math.abs(e)>8&&n.preventDefault()},{passive:!1}),document.addEventListener("touchend",()=>{if(!wn)return;const n=wn,e=n.closest(".swipe-wrap");n.classList.remove("swiping"),(parseFloat(n.style.transform.replace("translateX(",""))||0)<-50?(n.style.transform="translateX(-80px)",e==null||e.classList.add("open"),ze&&ze!==e&&Yo(ze),ze=e):(n.style.transform="translateX(0)",e==null||e.classList.remove("open"),ze===e&&(ze=null)),wn=null}),document.addEventListener("touchstart",n=>{if(!ze||n.target.closest(".swipe-del"))return;const e=n.target.closest(".swipe-inner");e&&e.closest(".swipe-wrap")===ze||(Yo(ze),ze=null)},{passive:!0})}function Yo(n){const e=n==null?void 0:n.querySelector(".swipe-inner");e&&(e.style.transform="translateX(0)"),n==null||n.classList.remove("open")}async function wE(n,e){const t=p("sw-"+n);t&&(t.style.opacity="0.5"),e==="shop"?await hr(n):(await da(n),D("Item removed"))}function bE(n,e){const t=p("sw-"+n);if(t){const s=t.querySelector(".swipe-inner");if((parseFloat((s.style.transform||"").replace("translateX(",""))||0)<-10){Yo(t),ze=null;return}}if(d.selectMode){d.selectedIds.has(n)?(d.selectedIds.delete(n),t==null||t.classList.remove("selected")):(d.selectedIds.add(n),t==null||t.classList.add("selected")),Ar();return}e==="shop"?window.togShop(n):window.openAdj(n)}function TE(){if(d.selectMode==="shop"){Bn();return}d.selectMode&&Bn(),d.selectMode="shop",d.selectedIds.clear(),document.querySelectorAll("#shlist .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=p("sh-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),Ar()}function EE(){if(d.selectMode==="inv"){Bn();return}d.selectMode&&Bn(),d.selectMode="inv",d.selectedIds.clear(),document.querySelectorAll("#ibody .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=p("inv-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),Ar()}function Bn(){d.selectMode=null,d.selectedIds.clear(),document.querySelectorAll(".swipe-wrap.selecting").forEach(t=>t.classList.remove("selecting","selected"));const n=p("sh-selbtn");n&&(n.classList.remove("active"),n.textContent="Select");const e=p("inv-selbtn");e&&(e.classList.remove("active"),e.textContent="Select"),Ar()}async function IE(){if(!d.selectedIds.size)return;const n=[...d.selectedIds],e=d.selectMode;Bn(),e==="shop"?await Promise.all(n.map(t=>hr(t))):await Promise.all(n.map(t=>da(t))),D(`Removed ${n.length} item${n.length!==1?"s":""} 🗑`)}function Ar(){const n=p("multi-bar");if(!n)return;const e=d.selectedIds.size,t=p("multi-count");t&&(t.textContent=e),d.selectMode?n.classList.add("visible"):n.classList.remove("visible")}const SE=["Chicken","Beef","Fish","Vegetarian","Vegan","Quick","Kids","Healthy","Batch Cook","Date Night"];function ff(n){return"chip-"+n.split(" ").join("-")}function pf(){const n=p("recChips");n&&(n.innerHTML=SE.map(e=>`<button onclick="toggleChip('${e}')" id="${ff(e)}" style="padding:5px 10px;border-radius:20px;border:1px solid var(--bd);background:var(--s2);color:var(--tx2);font-size:.78rem;cursor:pointer;transition:all .15s">${e}</button>`).join(""))}function AE(n){const e=p(ff(n));window._activeChips.has(n)?(window._activeChips.delete(n),e&&(e.style.background="var(--s2)",e.style.color="var(--tx2)",e.style.borderColor="var(--bd)")):(window._activeChips.add(n),e&&(e.style.background="var(--ac)",e.style.color="#000",e.style.borderColor="var(--ac)")),mf()}function mf(){const n=p("recPicker"),e=p("recFilter")?p("recFilter").value.trim().toLowerCase():"",t=[...window._activeChips].map(r=>r.toLowerCase()),i=[...d.recs].sort((r,a)=>(a.cookCount||0)-(r.cookCount||0)).filter(r=>{const a=(r.name+" "+(r.description||"")+" "+(r.tags||[]).join(" ")).toLowerCase(),c=e?e.split(/\s+/).every(f=>a.includes(f)):!0,u=t.every(f=>a.includes(f));return c&&u});n.innerHTML='<option value="">— pick a saved recipe —</option>'+i.map(r=>`<option value="${r.id}">${r.name}</option>`).join(""),window._pickedRec=null,p("mealMinp").value=""}function kE(n,e){d.md=n,p("mealMttl").textContent="Meal for "+e,p("mealMinp").value=d.mp[n]||"",window._pickedRec=null,window._activeChips=new Set;const t=p("recFilter");t&&(t.value=""),pf();const s=p("recPicker");if(d.recs&&d.recs.length){const i=[...d.recs].sort((c,u)=>(u.cookCount||0)-(c.cookCount||0));s.innerHTML='<option value="">— pick a saved recipe —</option>'+i.map(c=>`<option value="${c.id}">${c.name}</option>`).join("");const r=d.mp[n]||"",a=i.find(c=>c.name===r);s.value=a?a.id:"",p("recPickerWrap").style.display="block"}else p("recPickerWrap").style.display="none";p("mealM").classList.add("active"),setTimeout(()=>p("mealMinp").focus(),100)}function CE(n){if(!n){window._pickedRec=null,p("mealMinp").value="";return}const e=d.recs.find(t=>t.id===n);e&&(window._pickedRec=e,p("mealMinp").value=e.name)}function Wa(){p("mealM").classList.remove("active")}async function RE(){const n=p("mealMinp").value.trim();if(await dn(d.md,n||null),window._pickedRec&&window._pickedRec.description){const e=window._pickedRec.description,t=d.inv.map(a=>a.name.toLowerCase()),s=d.shop.map(a=>a.name.toLowerCase()),i=e.split(/[\n,]/).map(a=>a.replace(/^[\d\/\s]*(cup|tbsp|tsp|oz|lb|g|kg|ml|l|clove|slice|piece|bunch|head|can|package|pkg)s?\.?\s*/gi,"").replace(/^[\d]+\s*/,"").trim()).filter(a=>a.length>1&&a.length<60);let r=0;for(const a of i){if(/\b(add|mix|heat|cook|bake|stir|boil|fry|slice|chop|dice|combine|place|pour|season|serve|preheat|bring|remove|let|set|transfer)\b/i.test(a))continue;const c=a.replace(/^[-•*]\s*/,"").trim();if(!c||c.length<2)continue;const u=c.toLowerCase();t.some(f=>f.includes(u)||u.includes(f))||s.some(f=>f===u)||(await He({id:Date.now().toString()+Math.random().toString(36).slice(2),name:c,qty:1,checked:!1,src:"recipe"}),r++)}r>0&&D(`Added ${r} ingredient${r!==1?"s":""} to shopping list 🛒`)}window._pickedRec=null,Wa(),gn(),Xs(),Zn()}async function PE(){await dn(d.md,null),Wa(),gn(),Xs(),Zn()}function xE(n){const e=d.mp[n];e&&(d.cn=e,d.nr=0,p("cookedNm").textContent=e,p("cnotes").value="",Cs("cstars",0),p("cookedM").classList.add("active"))}async function DE(){await jh(d.cn,Pt()),await dn(Pt(),null),p("cookedM").classList.remove("active"),gn(),Zn(),D("Meal logged!")}async function LE(){var s;const n=p("cnotes").value.trim(),e=(s=p("tog-leftover"))==null?void 0:s.classList.contains("on");await jh(d.cn,Pt());const t=d.recs.find(i=>i.name.toLowerCase()===d.cn.toLowerCase());t?await Ft({...t,cookCount:(t.cookCount||0)+1,lastCooked:Pt()}):await Ft({id:"rec-"+Date.now(),name:d.cn,rating:d.nr,favorited:!1,notes:n,description:"",source:"Meal Plan",tags:[],cookCount:1,savedAt:new Date().toLocaleDateString(),lastCooked:Pt()}),e&&await dn(Av(),d.cn+" (leftovers)"),await dn(Pt(),null),p("cookedM").classList.remove("active"),gn(),Zn(),D(e?"Saved! Leftovers planned for tomorrow 🥡":"Saved to recipes! ⭐")}function NE(n){p("schedNm").textContent=n;const e=["S","M","T","W","T","F","S"],t=new Date;t.setHours(0,0,0,0),p("schedWk").innerHTML=Qn().map((s,i)=>{const r=s.toISOString().split("T")[0],a=s.getTime()===t.getTime(),c=d.mp[r];return`<div class="wd${a?" today":""}${c?" hm":""}" onclick="schedSet('${r}','${n}')"><div class="wdn">${e[i]}</div><div class="wdd">${s.getDate()}</div>${c?`<div class="wdm">${c.substring(0,8)}…</div>`:""}</div>`}).join(""),p("schedM").classList.add("active")}async function OE(n,e){await dn(n,e),p("schedM").classList.remove("active"),gn(),Zn(),D("Scheduled! 📅")}function ME(){const n=i=>p(i),e=(i,r)=>{const a=n(i);a&&(a.value=r||"")};e("setName",d.cfg.name),e("setAdults",d.cfg.adults),e("setKids",d.cfg.kids),e("setOther",d.cfg.other),e("setCuisines",d.cfg.cuisines),e("setCookTime",d.cfg.cookTime),e("setZipcode",d.cfg.zipcode);const t=(i,r)=>{const a=n(i);a&&a.classList.toggle("on",!!r)};t("tg-nopork",d.cfg.nopork),t("tg-noshellfish",d.cfg.noshellfish),t("tg-vegetarian",d.cfg.vegetarian),t("tg-glutenfree",d.cfg.glutenfree),t("tg-notif",d.cfg.notif);const s=p("notifTimeRow");s&&(s.style.display=d.cfg.notif?"block":"none"),e("setNotifTime",d.cfg.notifTime||"8"),e("setNotifDays",String(d.cfg.notifDays||3)),Ja(),yf()}async function VE(){d.cfg={...d.cfg,name:p("setName").value.trim(),adults:p("setAdults").value.trim(),kids:p("setKids").value.trim(),nopork:p("tg-nopork").classList.contains("on"),noshellfish:p("tg-noshellfish").classList.contains("on"),vegetarian:p("tg-vegetarian").classList.contains("on"),glutenfree:p("tg-glutenfree").classList.contains("on"),other:p("setOther").value.trim(),cuisines:p("setCuisines").value.trim(),cookTime:p("setCookTime").value,zipcode:p("setZipcode")?p("setZipcode").value.trim():"",notif:p("tg-notif").classList.contains("on"),notifTime:p("setNotifTime")?p("setNotifTime").value:"8",notifDays:parseInt(p("setNotifDays")?p("setNotifDays").value:"3")},await ur(),d.cfg.notif&&gf(),D("Settings saved!"),Ae("settings"),$a()}async function $E(){var e,t;const n=((t=(e=p("setZipcode"))==null?void 0:e.value)==null?void 0:t.trim())||"";d.cfg={...d.cfg,zipcode:n},await ur(),D("Saved!")}async function FE(n){if(!n.classList.contains("on")){if(!("Notification"in window)){D("Notifications not supported on this browser");return}if(Notification.permission==="denied"){D("Notifications blocked — enable in browser settings");return}if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){D("Notifications permission denied");return}}n.classList.toggle("on");const t=p("notifTimeRow");t&&(t.style.display=n.classList.contains("on")?"block":"none")}function UE(){if(Notification.permission!=="granted"){D("Enable notifications first");return}const n=d.inv.filter(t=>{const s=it(t.expiry);return s&&(s.c==="expiring"||s.c==="expired")});if(!n.length){new Notification("Kitchen 🧺",{body:"No items expiring soon — you're all good!"});return}const e=n.slice(0,3).map(t=>t.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${e}${n.length>3?" + "+(n.length-3)+" more":""} need attention`})}function gf(){if(!d.cfg.notif||Notification.permission!=="granted")return;const n=parseInt(localStorage.getItem("ks-lastnotif")||"0"),e=Date.now();if(e-n<864e5)return;localStorage.setItem("ks-lastnotif",e.toString());const t=d.cfg.notifDays||3,s=d.inv.filter(r=>{if(!it(r.expiry))return!1;const c=new Date(r.expiry+"T00:00:00"),u=new Date;return u.setHours(0,0,0,0),Math.round((c-u)/864e5)<=t});if(!s.length)return;const i=s.slice(0,3).map(r=>r.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${i}${s.length>3?" + "+(s.length-3)+" more":""} expiring in ${t} days or less`})}function Qa(){return Pe("ks-hhs")||[d.hid]}async function yf(){const n=xe();if(n)try{const e=await de(`households/${d.hid}`);if(!e)return;const t=e.ownerUid===n.uid,s=p("hhInviteCode");if(s&&(s.textContent=e.inviteCode||"—"),e.inviteCode&&t)try{await X(`household_codes/${e.inviteCode}`,{householdId:d.hid})}catch{}const i=p("regenCodeBtn");i&&(i.style.display=t?"":"none");const r=p("hhMembers");r&&e.members&&(r.innerHTML=e.members.map(a=>{const c=a.uid===n.uid,u=a.role==="owner"?"Owner":"Member",f=t&&!c?`<button onclick="event.stopPropagation();removeMemberFromHH('${a.uid}')" style="background:none;border:none;color:var(--rd);cursor:pointer;font-size:.78rem;padding:4px 8px">Remove</button>`:"";return`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px">
          <div>
            <div style="font-size:.86rem;font-weight:500;color:var(--tx)">${a.name}${c?" (you)":""}</div>
            <div style="font-size:.7rem;color:var(--mt);margin-top:2px">${u}</div>
          </div>
          ${f}
        </div>`}).join(""))}catch(e){console.error("renderHouseholdInfo error:",e)}}async function jE(){var e;const n=(e=p("hhInviteCode"))==null?void 0:e.textContent;if(!(!n||n==="—"))try{await navigator.clipboard.writeText(n),D("Invite code copied!")}catch{D("Couldn't copy — try manually")}}async function BE(){var t;const n=(t=p("hhInviteCode"))==null?void 0:t.textContent;if(!n||n==="—")return;const e=`Join my kitchen on Kitchen app! Use invite code: ${n} at https://pantry-app-zeta-six.vercel.app`;if(navigator.share)try{await navigator.share({text:e})}catch{}else try{await navigator.clipboard.writeText(e),D("Share text copied to clipboard!")}catch{D("Couldn't share — try manually")}}async function qE(){if(confirm("Regenerate invite code? The old code will stop working."))try{const n=await uv(d.hid);if(n){const e=p("hhInviteCode");e&&(e.textContent=n),D("New invite code generated!")}}catch(n){console.error("regenInviteCode error:",n),D("Failed to regenerate code")}}async function HE(n){if(confirm("Remove this member from the household?"))try{await hv(d.hid,n),D("Member removed"),yf()}catch(e){console.error("removeMemberFromHH error:",e),D("Failed to remove member")}}async function zE(){var s,i,r;const n=(r=(i=(s=p("newHHCode"))==null?void 0:s.value)==null?void 0:i.trim())==null?void 0:r.toUpperCase();if(!n)return;const e=xe();if(!e){D("Sign in first");return}const t=p("newHHCode");t.disabled=!0;try{const a=await Uh(n,e);if(!a){D("Invalid invite code. Check and try again."),t.disabled=!1;return}const c=Qa();c.includes(a)||c.push(a),et("ks-hhs",c),p("newHHCode").value="",Ja(),D("Household joined!")}catch(a){console.error("addHousehold error:",a),D("Failed to join household")}t.disabled=!1}function GE(n){n!==d.hid&&(localStorage.setItem("ks-h",n),location.reload())}async function KE(n){if(n===d.hid){D("Can't remove active household");return}const e=xe();if(e)try{const s=await de(`users/${e.uid}`);if(s){const r=(s.householdIds||[]).filter(a=>a!==n);await X(`users/${e.uid}`,{...s,householdIds:r,id:void 0})}const i=await de(`households/${n}`);if(i){const r=(i.members||[]).filter(c=>c.uid!==e.uid),a=(i.memberUids||[]).filter(c=>c!==e.uid);await X(`households/${n}`,{...i,members:r,memberUids:a,id:void 0})}}catch(s){console.error("removeHousehold error:",s)}const t=Qa().filter(s=>s!==n);et("ks-hhs",t),Ja()}async function Ja(){const n=Qa().filter(s=>s!==d.hid),e=p("hhList");if(!e)return;if(!n.length){e.innerHTML='<div style="font-size:.82rem;color:var(--mt);padding:10px 0">No other households yet.</div>';return}const t=[];for(const s of n){let i=s;try{const r=await de(`households/${s}`);r!=null&&r.name&&(i=r.name)}catch{}t.push({id:s,name:i})}e.innerHTML=t.map(({id:s,name:i})=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px;cursor:pointer" onclick="switchHousehold('${s}')">
      <div>
        <div style="font-size:.88rem;font-weight:500;color:var(--tx)">${i}</div>
        <div style="font-size:.7rem;color:var(--mt);margin-top:2px">Tap to switch</div>
      </div>
      <button onclick="event.stopPropagation();removeHousehold('${s}')" style="background:none;border:none;color:var(--mt);cursor:pointer;font-size:.82rem;padding:4px 8px">✕</button>
    </div>`).join("")}const tr={gold:{name:"Gold",swatch:"#d4a853",dark:{bg:"#0f0f0d",sf:"#1a1a17",card:"#222220",card2:"#2a2a27",b1:"#333330",b2:"#3d3d39",ac:"#d4a853",ac2:"#e8c27a",acr:"212,168,83",tx:"#ede8d8",tx2:"#b8b09a",mt:"#7a7468"},light:{bg:"#faf8f2",sf:"#ffffff",card:"#f3ede0",card2:"#efe8d8",b1:"#ddd5c0",b2:"#cec4ac",ac:"#a8732a",ac2:"#c48f3e",acr:"168,115,42",tx:"#2a2418",tx2:"#5c5040",mt:"#9a8870"}},forest:{name:"Forest",swatch:"#4a9e5c",dark:{bg:"#0a1410",sf:"#111f17",card:"#182a1e",card2:"#1e3326",b1:"#2a4032",b2:"#355040",ac:"#6db56d",ac2:"#8fd08f",acr:"109,181,109",tx:"#e4f0e4",tx2:"#9dbf9d",mt:"#5a7a5a"},light:{bg:"#f2f9f2",sf:"#ffffff",card:"#e8f5e8",card2:"#dff0df",b1:"#c0ddc0",b2:"#a8cca8",ac:"#2e7d32",ac2:"#43a047",acr:"46,125,50",tx:"#0d2010",tx2:"#2e4f2e",mt:"#5a7a5a"}},ocean:{name:"Ocean",swatch:"#38bdf8",dark:{bg:"#060e1a",sf:"#0d1829",card:"#112035",card2:"#162840",b1:"#1e3554",b2:"#264468",ac:"#38bdf8",ac2:"#7dd3fc",acr:"56,189,248",tx:"#e0f2fe",tx2:"#7ab8d4",mt:"#486880"},light:{bg:"#f0f8ff",sf:"#ffffff",card:"#e0f2fe",card2:"#d4ecf9",b1:"#b0d8f0",b2:"#90c4e4",ac:"#0369a1",ac2:"#0284c7",acr:"3,105,161",tx:"#082040",tx2:"#1e4060",mt:"#4a7090"}},bordeaux:{name:"Bordeaux",swatch:"#e8829a",dark:{bg:"#120810",sf:"#1c0e18",card:"#261420",card2:"#301828",b1:"#4a2238",b2:"#5c2a46",ac:"#e8829a",ac2:"#f4aabb",acr:"232,130,154",tx:"#fce8ee",tx2:"#d4909e",mt:"#8a5060"},light:{bg:"#fff5f7",sf:"#ffffff",card:"#ffe8ed",card2:"#ffd8e0",b1:"#f4b8c4",b2:"#eca0b0",ac:"#be3455",ac2:"#d94070",acr:"190,52,85",tx:"#2a080e",tx2:"#6a2030",mt:"#9a5060"}},sand:{name:"Sand",swatch:"#e07a5f",dark:{bg:"#170e08",sf:"#221508",card:"#2e1c0e",card2:"#382414",b1:"#4a3020",b2:"#5c3c28",ac:"#e07a5f",ac2:"#eca080",acr:"224,122,95",tx:"#fdf0e8",tx2:"#c8a090",mt:"#887060"},light:{bg:"#fdf6ec",sf:"#fffbf5",card:"#f5e8d8",card2:"#eedcc8",b1:"#ddc8ac",b2:"#ccb494",ac:"#c1440e",ac2:"#d4602a",acr:"193,68,14",tx:"#2a1808",tx2:"#5c3820",mt:"#9a7060"}},midnight:{name:"Midnight",swatch:"#818cf8",dark:{bg:"#050814",sf:"#0a0d1f",card:"#0f1228",card2:"#141830",b1:"#1e2448",b2:"#272e58",ac:"#818cf8",ac2:"#a5b0ff",acr:"129,140,248",tx:"#e8eaff",tx2:"#9099cc",mt:"#505880"},light:{bg:"#f0f1ff",sf:"#ffffff",card:"#e4e6ff",card2:"#d8dbff",b1:"#b8bdff",b2:"#a0a6f4",ac:"#4f46e5",ac2:"#6366f1",acr:"79,70,229",tx:"#0a0820",tx2:"#202060",mt:"#5050a0"}},lavender:{name:"Lavender",swatch:"#c084fc",dark:{bg:"#0e0814",sf:"#160e20",card:"#1e1430",card2:"#261a3c",b1:"#382454",b2:"#442c66",ac:"#c084fc",ac2:"#d8a8ff",acr:"192,132,252",tx:"#f5ecff",tx2:"#c0a0e0",mt:"#7a5898"},light:{bg:"#faf5ff",sf:"#ffffff",card:"#f3e8ff",card2:"#ecdcff",b1:"#d8b8f8",b2:"#c8a0f0",ac:"#9333ea",ac2:"#a855f7",acr:"147,51,234",tx:"#1a0830",tx2:"#481080",mt:"#805098"}}};let Us=Pe("ks-theme")||"gold",js=Pe("ks-mode")||"auto";function nr(n,e){Us=n,js=e,et("ks-theme",n),et("ks-mode",e);const t=tr[n]||tr.gold,i=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?t.dark:t.light,r=document.documentElement.style;r.setProperty("--bg",i.bg),r.setProperty("--sf",i.sf),r.setProperty("--card",i.card),r.setProperty("--card2",i.card2),r.setProperty("--b1",i.b1),r.setProperty("--b2",i.b2),r.setProperty("--ac",i.ac),r.setProperty("--ac2",i.ac2),r.setProperty("--acd","rgba("+i.acr+",.12)"),r.setProperty("--tx",i.tx),r.setProperty("--tx2",i.tx2),r.setProperty("--mt",i.mt),r.setProperty("--gn","#6db56d"),r.setProperty("--gnd","rgba(109,181,109,.12)"),r.setProperty("--rd","#d96b6b"),r.setProperty("--rdd","rgba(217,107,107,.12)"),r.setProperty("--am","#c8960a"),r.setProperty("--amd","rgba(200,150,10,.12)"),vf(e),_f(n)}function WE(n){nr(Us,n)}function vf(n){["auto","light","dark"].forEach(e=>{const t=p("mode-"+e);t&&(t.style.background=e===n?"var(--ac)":"",t.style.color=e===n?"var(--bg)":"",t.style.borderColor=e===n?"var(--ac)":"")})}function _f(n){const e=p("themePicker");e&&(e.innerHTML="",Object.keys(tr).forEach(t=>{const s=tr[t],i=t===n,r=document.createElement("div");r.title=s.name,r.style.cssText="width:36px;height:36px;border-radius:50%;background:"+s.swatch+";cursor:pointer;border:3px solid "+(i?"var(--tx)":"transparent")+";box-shadow:"+(i?"0 0 0 2px var(--ac)":"none")+";transition:all .2s;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.85rem",r.textContent=i?"✓":"",r.onclick=()=>nr(t,js),r.onmouseover=function(){this.style.transform="scale(1.15)"},r.onmouseout=function(){this.style.transform="scale(1)"},e.appendChild(r)}))}function QE(){nr(Us,js),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{js==="auto"&&nr(Us,"auto")})}function JE(){_f(Us),vf(js)}let Rt=0;async function YE(){const n=xe();if(n)try{const e=await de(`users/${n.uid}`);if(e!=null&&e.onboardingDone)return;XE()}catch{}}function XE(){const n=p("ov-onboarding");n&&(Rt=0,n.classList.add("active"),wf())}function wf(){const n=p("onboarding-body");if(!n)return;const t=`<div style="display:flex;gap:6px;justify-content:center;margin-bottom:24px">${Array.from({length:4},(s,i)=>`<div style="width:8px;height:8px;border-radius:50%;background:${i===Rt?"var(--ac)":"var(--b2)"};transition:background .2s"></div>`).join("")}</div>`;Rt===0?n.innerHTML=`${t}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:4rem;margin-bottom:16px">🧺</div>
        <div style="font-family:'Fraunces',serif;font-size:2rem;font-weight:300;color:var(--ac);margin-bottom:12px">Welcome to Kitchen!</div>
        <p style="font-size:.92rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 28px">Your smart kitchen assistant that tracks inventory, plans meals, finds deals, and suggests recipes — all powered by AI.</p>
        <button class="btn bp bf" onclick="onboardNext()">Let's get started →</button>
      </div>`:Rt===1?n.innerHTML=`${t}
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
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:16px">Continue →</button>`:Rt===2?n.innerHTML=`${t}
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
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:20px">Almost done →</button>`:Rt===3&&(n.innerHTML=`${t}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:3rem;margin-bottom:16px">🎉</div>
        <div style="font-family:'Fraunces',serif;font-size:1.6rem;font-weight:300;color:var(--ac);margin-bottom:12px">You're all set!</div>
        <p style="font-size:.88rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 24px">Start by adding your first item to the pantry, or ask Claude for dinner ideas.</p>
        <div style="display:flex;flex-direction:column;gap:10px">
          <button class="btn bp bf" onclick="finishOnboarding();showOv('scan')">📷 Scan your first item</button>
          <button class="btn bs bf" onclick="finishOnboarding();showScreen('chat')">✨ Ask Claude for ideas</button>
          <button class="btn bs bf" onclick="finishOnboarding()">🏠 Go to Home</button>
        </div>
      </div>`)}async function ZE(){var n,e,t,s,i,r,a,c,u,f,g,w,I;if(Rt===1){const R=(e=(n=p("ob-name"))==null?void 0:n.value)==null?void 0:e.trim(),N=(s=(t=p("ob-adults"))==null?void 0:t.value)==null?void 0:s.trim(),$=(r=(i=p("ob-kids"))==null?void 0:i.value)==null?void 0:r.trim(),M=(c=(a=p("ob-cuisines"))==null?void 0:a.value)==null?void 0:c.trim(),Y=(u=p("ob-cooktime"))==null?void 0:u.value;R&&(d.cfg.name=R),N&&(d.cfg.adults=N),$&&(d.cfg.kids=$),M&&(d.cfg.cuisines=M),Y&&(d.cfg.cookTime=Y),d.cfg.nopork=((f=p("ob-nopork"))==null?void 0:f.checked)||!1,d.cfg.noshellfish=((g=p("ob-noshellfish"))==null?void 0:g.checked)||!1,d.cfg.vegetarian=((w=p("ob-vegetarian"))==null?void 0:w.checked)||!1,d.cfg.glutenfree=((I=p("ob-glutenfree"))==null?void 0:I.checked)||!1,await ur()}Rt++,wf()}async function bf(){const n=p("ov-onboarding");n&&n.classList.remove("active");const e=xe();if(e)try{const t=await de(`users/${e.uid}`);t&&await X(`users/${e.uid}`,{...t,onboardingDone:!0,id:void 0})}catch{}}async function eI(){await bf(),D("You can always adjust settings later ⚙️")}window.getIdToken=Vh;O.renderAll=Xd;O.renderSum=Xs;O.renderRecs=Sr;O.renderShop=Zs;Fb(ja);window.showScreen=function(n){var e,t;document.querySelectorAll(".ov.active").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".ni").forEach(s=>s.classList.remove("active")),(e=p("screen-"+n))==null||e.classList.add("active"),(t=p("nav-"+n))==null||t.classList.add("active"),n==="home"&&Zd(),n==="inventory"&&ja(),n==="recipes"&&(d.rt==="community"?qa():Sr()),n==="shopping"&&Zs(),n==="insights"&&ZT()};const tI=vt;window.showOv=function(n){tI(n),n==="settings"&&setTimeout(JE,80)};window.hideOv=Ae;window.initHome=$a;window.addLowToShop=qb;window.toggleExp=function(){const n=p("exppanel");n.style.display=n.style.display==="none"?"block":"none"};window.openAdj=gT;window.updL=yT;window.adjQ=vT;window.adjQD=_T;window.adjE=wT;window.adjNote=bT;window.setIT=IT;window.addManual=ST;window.valMA=AT;window.chgMQ=kT;window.selML=CT;window.remItem=Ba;window.importDoc=RT;window.adjLowThresh=TT;window.adjLowThreshD=ET;window.qadd=Kb;window.togShop=Zb;window.toggleShNote=eT;window.saveShNote=tT;window.openShQty=nT;window.adjShQty=sT;window.saveShQty=sf;window.togAisle=iT;window.setSHT=rT;window.shareList=oT;window.openAddToKitchen=aT;window.setAtkLoc=cT;window.confirmAddToKitchen=lT;window.buildList=uT;window.toggleVoice=tf;window.toggleAddNote=Wb;window.openShopAddSheet=Qb;window.closeShopAddSheet=Ir;window.shopAddScan=Jb;window.shopAddVoice=Yb;window.closeEnrichSheet=Zi;window.pickEnrichResult=Xb;window.bpTog=hT;window.bpSelAll=dT;window.bpUpdBtn=function(){};window.bpConfirm=fT;window._bpItems=[];window.searchDeals=pT;window.dealsFromList=mT;window.addDealToList=of;window.renderDealsZipBanner=rf;window.clrChk=function(){d.shop.filter(n=>n.checked).forEach(n=>{nf(n.name),hr(n.id)})};window.setRT=LT;window.togFav=NT;window.valR=OT;window.importFromUrl=MT;window.saveRec=VT;window.openER=$T;window.updR=FT;window.delER=UT;window.scaleRec=jT;window.whatCanIMake=BT;window.addRecIngToShop=qT;window.setStar=HT;window.togTag=xT;window.togglePublic=zT;window.loadCommunity=qa;window.setComCuisine=GT;window.setComSearch=KT;window.openComRecipe=WT;window.likeComRecipe=QT;window.saveComToKitchen=JT;window.addComComment=YT;window.shareComRecipe=XT;window.sendChat=cf;window.sendPill=rE;window.clrChat=oE;window.ar=lf;window.importChatRecipe=iE;window.stopLiveScanner=Ga;window.resumeScanner=cE;window.openScanForList=lE;window.openScanForInventory=uE;window.addScannedToList=dE;window.toggleScanNote=hE;window.togManual=fE;window.manLookup=pE;window.selRL=Ka;window.valAdd=gE;window.addToInv=yE;window.chgAQ=vE;window.swipeDelItem=wE;window.swipeRowTap=bE;window.togShopSelect=TE;window.togInvSelect=EE;window.cancelSelect=Bn;window.deleteSelected=IE;window.openMealM=kE;window.pickRec=CE;window.closeMealM=Wa;window.saveMeal=RE;window.clrMeal=PE;window.openCooked=xE;window.skipCooked=DE;window.saveCooked=LE;window.scheduleRecipe=NE;window.schedSet=OE;window.initRecChips=pf;window.toggleChip=AE;window.filterRecs=mf;window._pickedRec=null;window._activeChips=new Set;window.saveSettings=VE;window.saveZipcode=$E;window.toggleNotif=FE;window.testNotif=UE;window.addHousehold=zE;window.switchHousehold=GE;window.removeHousehold=KE;window.setMode=WE;window.showNotif=D;window.copyInviteCode=jE;window.shareInviteCode=BE;window.regenInviteCode=qE;window.removeMemberFromHH=HE;window.onboardNext=ZE;window.finishOnboarding=bf;window.skipOnboarding=eI;window._appStart=async function(n){var t;d.hid=n,p("LS").style.display="none",p("APP").style.display="flex",window.showScreen("home"),ve("syncing");const e=xe();if(e)try{const s=await de(`users/${e.uid}`);if((t=s==null?void 0:s.householdIds)!=null&&t.length){const i=[...s.householdIds];i.includes(n)||i.push(n),et("ks-hhs",i)}else{const i=Pe("ks-hhs")||[n];i.includes(n)||(i.push(n),et("ks-hhs",i))}}catch{const s=Pe("ks-hhs")||[n];s.includes(n)||(s.push(n),et("ks-hhs",s))}else{const s=Pe("ks-hhs")||[n];s.includes(n)||(s.push(n),et("ks-hhs",s))}await pv(),ME(),$a(),Gb(),$b(d.hid);try{ve("syncing");const s=await Promise.allSettled([Ve(`households/${d.hid}/inventory`),Ve(`households/${d.hid}/recipes`),Ve(`households/${d.hid}/shopping`)]),i=(r,a)=>r.status==="fulfilled"?r.value:a;d.inv=i(s[0],d.inv),d.recs=i(s[1],d.recs),d.shop=i(s[2],d.shop),ve("synced"),Xd(),Sr(),Zs(),Xs()}catch(s){console.error("initial load error",s),ve("error")}setTimeout(YE,500)};QE();_E();d.cfg.notif&&setTimeout(gf,3e3);Zs();function kr(n){p("auth-loading").style.display="none",p("auth-signin").style.display=n==="signin"?"flex":"none",p("auth-signup").style.display=n==="signup"?"flex":"none",p("auth-join").style.display=n==="join"?"flex":"none",p("authError").style.display="none",p("signupError").style.display="none"}function Ke(n,e){const t=p(n);t&&(t.textContent=e,t.style.display="block")}function Cr(n){return{"auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password.","auth/invalid-credential":"Incorrect email or password.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password must be at least 6 characters.","auth/too-many-requests":"Too many attempts. Please try again later.","auth/popup-closed-by-user":"Sign-in popup was closed.","auth/cancelled-popup-request":"Sign-in was cancelled.","auth/account-exists-with-different-credential":"An account already exists with this email using a different sign-in method."}[n.code]||n.message||"Something went wrong. Please try again."}function Me(n,e){n&&(e?(n._origText=n.textContent,n.textContent="Please wait…",n.disabled=!0):(n.textContent=n._origText||n.textContent,n.disabled=!1))}var Pu;(Pu=p("btnGoogle"))==null||Pu.addEventListener("click",async()=>{const n=p("btnGoogle");Me(n,!0),p("authError").style.display="none";try{await iv()}catch(e){Ke("authError",Cr(e))}Me(n,!1)});var xu;(xu=p("btnApple"))==null||xu.addEventListener("click",async()=>{const n=p("btnApple");Me(n,!0),p("authError").style.display="none";try{await rv()}catch(e){Ke("authError",Cr(e))}Me(n,!1)});var Du;(Du=p("btnEmailSign"))==null||Du.addEventListener("click",async()=>{var s,i,r;const n=(i=(s=p("authEmail"))==null?void 0:s.value)==null?void 0:i.trim(),e=(r=p("authPass"))==null?void 0:r.value;if(!n||!e){Ke("authError","Please enter your email and password.");return}const t=p("btnEmailSign");Me(t,!0),p("authError").style.display="none";try{await ov(n,e)}catch(a){Ke("authError",Cr(a))}Me(t,!1)});var Lu;(Lu=p("btnEmailSignup"))==null||Lu.addEventListener("click",async()=>{var i,r,a,c,u;const n=(r=(i=p("signupName"))==null?void 0:i.value)==null?void 0:r.trim(),e=(c=(a=p("signupEmail"))==null?void 0:a.value)==null?void 0:c.trim(),t=(u=p("signupPass"))==null?void 0:u.value;if(!n){Ke("signupError","Please enter your name.");return}if(!e||!t){Ke("signupError","Please enter your email and password.");return}const s=p("btnEmailSignup");Me(s,!0),p("signupError").style.display="none";try{await av(e,t,n)}catch(f){Ke("signupError",Cr(f))}Me(s,!1)});var Nu;(Nu=p("btnToggleSignup"))==null||Nu.addEventListener("click",()=>kr("signup"));var Ou;(Ou=p("btnToggleSignin"))==null||Ou.addEventListener("click",()=>kr("signin"));var Mu;(Mu=p("authPass"))==null||Mu.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=p("btnEmailSign"))==null||e.click())});var Vu;(Vu=p("signupPass"))==null||Vu.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=p("btnEmailSignup"))==null||e.click())});window.doSignOut=async function(){confirm("Sign out of Kitchen?")&&await cv()};let go=!1;function sr(n){localStorage.setItem("ks-h",n),p("LS").style.display="none",p("APP").style.display="flex",window._appStart(n)}function nI(n){kr("join"),p("btnCreateKitchen").onclick=async()=>{var e;Me(p("btnCreateKitchen"),!0);try{const t=((e=d.cfg)==null?void 0:e.name)||"My Kitchen";await Fh(n.uid,t);const s=await Ao(n);s.householdIds=[n.uid],await X(`users/${n.uid}`,s),localStorage.removeItem("ks-h");const i=Pe("ks-hhs");if(i){const r=i.filter(a=>a!==n.uid);r.push(n.uid),localStorage.setItem("ks-hhs",JSON.stringify(r))}sr(n.uid)}catch(t){console.error("Create kitchen error:",t),Ke("joinError","Something went wrong. Please try again."),Me(p("btnCreateKitchen"),!1)}},p("btnJoinKitchen").onclick=async()=>{var t,s,i;const e=(i=(s=(t=p("joinCode"))==null?void 0:t.value)==null?void 0:s.trim())==null?void 0:i.toUpperCase();if(!e){Ke("joinError","Please enter an invite code.");return}Me(p("btnJoinKitchen"),!0),p("joinError").style.display="none";try{let r=await de(`users/${n.uid}`);r||(r=await Ao(n));const a=await Uh(e,n);if(!a){Ke("joinError","Invalid invite code. Check and try again."),Me(p("btnJoinKitchen"),!1);return}const c=Pe("ks-hhs")||[];c.includes(a)||c.push(a),et("ks-hhs",c),sr(a)}catch(r){console.error("Join kitchen error:",r),Ke("joinError","Something went wrong. Please try again."),Me(p("btnJoinKitchen"),!1)}}}nv(async n=>{var e;if(n){if(localStorage.setItem("ks-who",n.displayName||((e=n.email)==null?void 0:e.split("@")[0])||"You"),!go){go=!0;try{const t=await de(`users/${n.uid}`),s=localStorage.getItem("ks-h"),i=Pe("ks-hhs");if(!!t||!!s||i&&i.length>0){p("LS").style.display="none",p("APP").style.display="flex";const a=await dv(n);sr(a)}else nI(n)}catch(t){console.error("Failed to resolve household:",t);const s=n.uid;sr(s)}}}else Yd(),go=!1,p("APP").style.display="none",p("LS").style.display="flex",kr("signin")});
