(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Mi={name:"The Bora Family",adults:"Bora",kids:"1 toddler (age 3)",nopork:!0,noshellfish:!1,vegetarian:!1,glutenfree:!1,other:"",cuisines:"Bangladeshi, Turkish, Mediterranean, American",cookTime:"40-60 min",zipcode:""},f={hid:null,inv:[],recs:[],shop:[],mp:{},cfg:{...Mi},cookLog:[],wasteLog:[],chat:[],cp:null,selR:"fridge",maL:"fridge",adjId:null,it:"all",rt:"all",md:null,cn:"",nr:0,eid:null,scanDestList:!1,aisleMode:!1,selectMode:null,selectedIds:new Set,comRecs:[],comTab:"browse",comSearch:"",comCuisine:"all",myLikes:new Set};function Pe(n){try{return JSON.parse(localStorage.getItem(n))}catch{return null}}function et(n,e){localStorage.setItem(n,JSON.stringify(e))}const tp=()=>{};var Zc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},np=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],a=n[t++],c=n[t++],u=((i&7)<<18|(r&63)<<12|(a&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const r=n[t++],a=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|a&63)}}return e.join("")},ju={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],a=i+1<n.length,c=a?n[i+1]:0,u=i+2<n.length,d=u?n[i+2]:0,g=r>>2,w=(r&3)<<4|c>>4;let I=(c&15)<<2|d>>6,R=d&63;u||(R=64,a||(I=64)),s.push(t[g],t[w],t[I],t[R])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Uu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):np(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const w=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||c==null||d==null||w==null)throw new sp;const I=r<<2|c>>4;if(s.push(I),d!==64){const R=c<<4&240|d>>2;if(s.push(R),w!==64){const N=d<<6&192|w;s.push(N)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class sp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ip=function(n){const e=Uu(n);return ju.encodeByteArray(e,!0)},Vi=function(n){return ip(n).replace(/\./g,"")},Bu=function(n){try{return ju.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const op=()=>rp().__FIREBASE_DEFAULTS__,ap=()=>{if(typeof process>"u"||typeof Zc>"u")return;const n=Zc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},cp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Bu(n[1]);return e&&JSON.parse(e)},ir=()=>{try{return tp()||op()||ap()||cp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},qu=n=>{var e,t;return(t=(e=ir())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},lp=n=>{const e=qu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Hu=()=>{var n;return(n=ir())==null?void 0:n.config},zu=n=>{var e;return(e=ir())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function qn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Gu(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function hp(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Vi(JSON.stringify(t)),Vi(JSON.stringify(a)),""].join(".")}const Ss={};function dp(){const n={prod:[],emulator:[]};for(const e of Object.keys(Ss))Ss[e]?n.emulator.push(e):n.prod.push(e);return n}function fp(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let el=!1;function Ku(n,e){if(typeof window>"u"||typeof document>"u"||!qn(window.location.host)||Ss[n]===e||Ss[n]||el)return;Ss[n]=e;function t(I){return`__firebase__banner__${I}`}const s="__firebase__banner",r=dp().prod.length>0;function a(){const I=document.getElementById(s);I&&I.remove()}function c(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function u(I,R){I.setAttribute("width","24"),I.setAttribute("id",R),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function d(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{el=!0,a()},I}function g(I,R){I.setAttribute("id",R),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function w(){const I=fp(s),R=t("text"),N=document.getElementById(R)||document.createElement("span"),V=t("learnmore"),O=document.getElementById(V)||document.createElement("a"),G=t("preprendIcon"),Z=document.getElementById(G)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const j=I.element;c(j),g(O,V);const K=d();u(Z,G),j.append(Z,N,O,K),document.body.appendChild(j)}r?(N.innerText="Preview backend disconnected.",Z.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function mp(){var e;const n=(e=ir())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function yp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function vp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _p(){const n=Se();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function wp(){return!mp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bp(){try{return typeof indexedDB=="object"}catch{return!1}}function Ep(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp="FirebaseError";class gt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Tp,Object.setPrototypeOf(this,gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qs.prototype.create)}}class qs{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],a=r?Ip(r,s):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new gt(i,c,s)}}function Ip(n,e){return n.replace(Sp,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Sp=/\{\$([^}]+)}/g;function Ap(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ln(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],a=e[i];if(tl(r)&&tl(a)){if(!ln(r,a))return!1}else if(r!==a)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function tl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function _s(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function ws(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function kp(n,e){const t=new Cp(n,e);return t.subscribe.bind(t)}class Cp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Rp(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=eo),i.error===void 0&&(i.error=eo),i.complete===void 0&&(i.complete=eo);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Rp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function eo(){}/**
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
 */class Pp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new up;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dp(e))try{this.getOrInitializeService({instanceIdentifier:sn})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=sn){return this.instances.has(e)}getOptions(e=sn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(r);s===c&&a.resolve(i)}return i}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:xp(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=sn){return this.component?this.component.multipleInstances?e:sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xp(n){return n===sn?void 0:n}function Dp(n){return n.instantiationMode==="EAGER"}/**
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
 */class Lp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Pp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const Np={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},Op=z.INFO,Mp={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},Vp=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Mp[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zo{constructor(e){this.name=e,this._logLevel=Op,this._logHandler=Vp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Np[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}const $p=(n,e)=>e.some(t=>n instanceof t);let nl,sl;function Fp(){return nl||(nl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Up(){return sl||(sl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wu=new WeakMap,vo=new WeakMap,Qu=new WeakMap,to=new WeakMap,ea=new WeakMap;function jp(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",a)},r=()=>{t(Lt(n.result)),i()},a=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Wu.set(t,n)}).catch(()=>{}),ea.set(e,n),e}function Bp(n){if(vo.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",a),n.removeEventListener("abort",a)},r=()=>{t(),i()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",a),n.addEventListener("abort",a)});vo.set(n,e)}let _o={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return vo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Qu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Lt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function qp(n){_o=n(_o)}function Hp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(no(this),e,...t);return Qu.set(s,e.sort?e.sort():[e]),Lt(s)}:Up().includes(n)?function(...e){return n.apply(no(this),e),Lt(Wu.get(this))}:function(...e){return Lt(n.apply(no(this),e))}}function zp(n){return typeof n=="function"?Hp(n):(n instanceof IDBTransaction&&Bp(n),$p(n,Fp())?new Proxy(n,_o):n)}function Lt(n){if(n instanceof IDBRequest)return jp(n);if(to.has(n))return to.get(n);const e=zp(n);return e!==n&&(to.set(n,e),ea.set(e,n)),e}const no=n=>ea.get(n);function Gp(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const a=indexedDB.open(n,e),c=Lt(a);return s&&a.addEventListener("upgradeneeded",u=>{s(Lt(a.result),u.oldVersion,u.newVersion,Lt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{r&&u.addEventListener("close",()=>r()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Kp=["get","getKey","getAll","getAllKeys","count"],Wp=["put","add","delete","clear"],so=new Map;function il(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(so.get(e))return so.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Wp.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Kp.includes(t)))return;const r=async function(a,...c){const u=this.transaction(a,i?"readwrite":"readonly");let d=u.store;return s&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),i&&u.done]))[0]};return so.set(e,r),r}qp(n=>({...n,get:(e,t,s)=>il(e,t)||n.get(e,t,s),has:(e,t)=>!!il(e,t)||n.has(e,t)}));/**
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
 */class Qp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Jp(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Jp(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wo="@firebase/app",rl="0.14.9";/**
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
 */const dt=new Zo("@firebase/app"),Yp="@firebase/app-compat",Xp="@firebase/analytics-compat",Zp="@firebase/analytics",em="@firebase/app-check-compat",tm="@firebase/app-check",nm="@firebase/auth",sm="@firebase/auth-compat",im="@firebase/database",rm="@firebase/data-connect",om="@firebase/database-compat",am="@firebase/functions",cm="@firebase/functions-compat",lm="@firebase/installations",um="@firebase/installations-compat",hm="@firebase/messaging",dm="@firebase/messaging-compat",fm="@firebase/performance",pm="@firebase/performance-compat",mm="@firebase/remote-config",gm="@firebase/remote-config-compat",ym="@firebase/storage",vm="@firebase/storage-compat",_m="@firebase/firestore",wm="@firebase/ai",bm="@firebase/firestore-compat",Em="firebase",Tm="12.10.0";/**
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
 */const bo="[DEFAULT]",Im={[wo]:"fire-core",[Yp]:"fire-core-compat",[Zp]:"fire-analytics",[Xp]:"fire-analytics-compat",[tm]:"fire-app-check",[em]:"fire-app-check-compat",[nm]:"fire-auth",[sm]:"fire-auth-compat",[im]:"fire-rtdb",[rm]:"fire-data-connect",[om]:"fire-rtdb-compat",[am]:"fire-fn",[cm]:"fire-fn-compat",[lm]:"fire-iid",[um]:"fire-iid-compat",[hm]:"fire-fcm",[dm]:"fire-fcm-compat",[fm]:"fire-perf",[pm]:"fire-perf-compat",[mm]:"fire-rc",[gm]:"fire-rc-compat",[ym]:"fire-gcs",[vm]:"fire-gcs-compat",[_m]:"fire-fst",[bm]:"fire-fst-compat",[wm]:"fire-vertex","fire-js":"fire-js",[Em]:"fire-js-all"};/**
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
 */const $i=new Map,Sm=new Map,Eo=new Map;function ol(n,e){try{n.container.addComponent(e)}catch(t){dt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Nn(n){const e=n.name;if(Eo.has(e))return dt.debug(`There were multiple attempts to register component ${e}.`),!1;Eo.set(e,n);for(const t of $i.values())ol(t,n);for(const t of Sm.values())ol(t,n);return!0}function ta(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Oe(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Am={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nt=new qs("app","Firebase",Am);/**
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
 */class km{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}}/**
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
 */const Hn=Tm;function Ju(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:bo,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw Nt.create("bad-app-name",{appName:String(i)});if(t||(t=Hu()),!t)throw Nt.create("no-options");const r=$i.get(i);if(r){if(ln(t,r.options)&&ln(s,r.config))return r;throw Nt.create("duplicate-app",{appName:i})}const a=new Lp(i);for(const u of Eo.values())a.addComponent(u);const c=new km(t,s,a);return $i.set(i,c),c}function Yu(n=bo){const e=$i.get(n);if(!e&&n===bo&&Hu())return Ju();if(!e)throw Nt.create("no-app",{appName:n});return e}function Ot(n,e,t){let s=Im[n]??n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&a.push("and"),r&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dt.warn(a.join(" "));return}Nn(new un(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Cm="firebase-heartbeat-database",Rm=1,Ns="firebase-heartbeat-store";let io=null;function Xu(){return io||(io=Gp(Cm,Rm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ns)}catch(t){console.warn(t)}}}}).catch(n=>{throw Nt.create("idb-open",{originalErrorMessage:n.message})})),io}async function Pm(n){try{const t=(await Xu()).transaction(Ns),s=await t.objectStore(Ns).get(Zu(n));return await t.done,s}catch(e){if(e instanceof gt)dt.warn(e.message);else{const t=Nt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dt.warn(t.message)}}}async function al(n,e){try{const s=(await Xu()).transaction(Ns,"readwrite");await s.objectStore(Ns).put(e,Zu(n)),await s.done}catch(t){if(t instanceof gt)dt.warn(t.message);else{const s=Nt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});dt.warn(s.message)}}}function Zu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const xm=1024,Dm=30;class Lm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Om(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=cl();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(a=>a.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>Dm){const a=Mm(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){dt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=cl(),{heartbeatsToSend:s,unsentEntries:i}=Nm(this._heartbeatsCache.heartbeats),r=Vi(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return dt.warn(t),""}}}function cl(){return new Date().toISOString().substring(0,10)}function Nm(n,e=xm){const t=[];let s=n.slice();for(const i of n){const r=t.find(a=>a.agent===i.agent);if(r){if(r.dates.push(i.date),ll(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),ll(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Om{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bp()?Ep().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Pm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return al(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return al(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ll(n){return Vi(JSON.stringify({version:2,heartbeats:n})).length}function Mm(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function Vm(n){Nn(new un("platform-logger",e=>new Qp(e),"PRIVATE")),Nn(new un("heartbeat",e=>new Lm(e),"PRIVATE")),Ot(wo,rl,n),Ot(wo,rl,"esm2020"),Ot("fire-js","")}Vm("");var $m="firebase",Fm="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot($m,Fm,"app");function eh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Um=eh,th=new qs("auth","Firebase",eh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=new Zo("@firebase/auth");function jm(n,...e){Fi.logLevel<=z.WARN&&Fi.warn(`Auth (${Hn}): ${n}`,...e)}function Ti(n,...e){Fi.logLevel<=z.ERROR&&Fi.error(`Auth (${Hn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(n,...e){throw sa(n,...e)}function We(n,...e){return sa(n,...e)}function na(n,e,t){const s={...Um(),[e]:t};return new qs("auth","Firebase",s).create(e,{appName:n.name})}function tt(n){return na(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function nh(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&qe(n,"argument-error"),na(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function sa(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return th.create(n,...e)}function F(n,e,...t){if(!n)throw sa(e,...t)}function ut(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ti(e),new Error(e)}function ft(n,e){n||ut(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Bm(){return ul()==="http:"||ul()==="https:"}function ul(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Bm()||yp()||"connection"in navigator)?navigator.onLine:!0}function Hm(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,t){this.shortDelay=e,this.longDelay=t,ft(t>e,"Short delay should be less than long delay!"),this.isMobile=pp()||vp()}get(){return qm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(n,e){ft(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Km=new zs(3e4,6e4);function Gt(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function yt(n,e,t,s,i={}){return ih(n,i,async()=>{let r={},a={};s&&(e==="GET"?a=s:r={body:JSON.stringify(s)});const c=Hs({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:u,...r};return gp()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&qn(n.emulatorConfig.host)&&(d.credentials="include"),sh.fetch()(await rh(n,n.config.apiHost,t,c),d)})}async function ih(n,e,t){n._canInitEmulator=!1;const s={...zm,...e};try{const i=new Qm(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw mi(n,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const c=r.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw mi(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw mi(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw mi(n,"user-disabled",a);const g=s[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw na(n,g,d);qe(n,g)}}catch(i){if(i instanceof gt)throw i;qe(n,"network-request-failed",{message:String(i)})}}async function Gs(n,e,t,s,i={}){const r=await yt(n,e,t,s,i);return"mfaPendingCredential"in r&&qe(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function rh(n,e,t,s){const i=`${e}${t}?${s}`,r=n,a=r.config.emulator?ia(n.config,i):`${n.config.apiScheme}://${i}`;return Gm.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(a).toString():a}function Wm(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Qm{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(We(this.auth,"network-request-failed")),Km.get())})}}function mi(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=We(n,e,s);return i.customData._tokenResponse=t,i}function hl(n){return n!==void 0&&n.enterprise!==void 0}class Jm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Wm(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Ym(n,e){return yt(n,"GET","/v2/recaptchaConfig",Gt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xm(n,e){return yt(n,"POST","/v1/accounts:delete",e)}async function Ui(n,e){return yt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Zm(n,e=!1){const t=Fe(n),s=await t.getIdToken(e),i=ra(s);F(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,a=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:As(ro(i.auth_time)),issuedAtTime:As(ro(i.iat)),expirationTime:As(ro(i.exp)),signInProvider:a||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ro(n){return Number(n)*1e3}function ra(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Ti("JWT malformed, contained fewer than 3 sections"),null;try{const i=Bu(t);return i?JSON.parse(i):(Ti("Failed to decode base64 JWT payload"),null)}catch(i){return Ti("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function dl(n){const e=ra(n);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function On(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof gt&&eg(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function eg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=As(this.lastLoginAt),this.creationTime=As(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ji(n){var w;const e=n.auth,t=await n.getIdToken(),s=await On(n,Ui(e,{idToken:t}));F(s==null?void 0:s.users.length,e,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const r=(w=i.providerUserInfo)!=null&&w.length?oh(i.providerUserInfo):[],a=sg(n.providerData,r),c=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),d=c?u:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Io(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,g)}async function ng(n){const e=Fe(n);await ji(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sg(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function oh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ig(n,e){const t=await ih(n,{},async()=>{const s=Hs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,a=await rh(n,i,"/v1/token",`key=${r}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:s};return n.emulatorConfig&&qn(n.emulatorConfig.host)&&(u.credentials="include"),sh.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function rg(n,e){return yt(n,"POST","/v2/accounts:revokeToken",Gt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){F(e.length!==0,"internal-error");const t=dl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await ig(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,a=new Sn;return s&&(F(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),i&&(F(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),r&&(F(typeof r=="number","internal-error",{appName:e}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Sn,this.toJSON())}_performRefresh(){return ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(n,e){F(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ge{constructor({uid:e,auth:t,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new tg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Io(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await On(this,this.stsTokenManager.getToken(this.auth,e));return F(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Zm(this,e)}reload(){return ng(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ge({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await ji(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Oe(this.auth.app))return Promise.reject(tt(this.auth));const e=await this.getIdToken();return await On(this,Xm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,i=t.email??void 0,r=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,u=t._redirectEventId??void 0,d=t.createdAt??void 0,g=t.lastLoginAt??void 0,{uid:w,emailVerified:I,isAnonymous:R,providerData:N,stsTokenManager:V}=t;F(w&&V,e,"internal-error");const O=Sn.fromJSON(this.name,V);F(typeof w=="string",e,"internal-error"),St(s,e.name),St(i,e.name),F(typeof I=="boolean",e,"internal-error"),F(typeof R=="boolean",e,"internal-error"),St(r,e.name),St(a,e.name),St(c,e.name),St(u,e.name),St(d,e.name),St(g,e.name);const G=new Ge({uid:w,auth:e,email:i,emailVerified:I,displayName:s,isAnonymous:R,photoURL:a,phoneNumber:r,tenantId:c,stsTokenManager:O,createdAt:d,lastLoginAt:g});return N&&Array.isArray(N)&&(G.providerData=N.map(Z=>({...Z}))),u&&(G._redirectEventId=u),G}static async _fromIdTokenResponse(e,t,s=!1){const i=new Sn;i.updateFromServerResponse(t);const r=new Ge({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await ji(r),r}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];F(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?oh(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),c=new Sn;c.updateFromIdToken(s);const u=new Ge({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Io(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=new Map;function ht(n){ft(n instanceof Function,"Expected a class definition");let e=fl.get(n);return e?(ft(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,fl.set(n,e),e)}/**
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
 */class ah{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ah.type="NONE";const pl=ah;/**
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
 */function Ii(n,e,t){return`firebase:${n}:${e}:${t}`}class An{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Ii(this.userKey,i.apiKey,r),this.fullPersistenceKey=Ii("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ui(this.auth,{idToken:e}).catch(()=>{});return t?Ge._fromGetAccountInfoResponse(this.auth,t,e):null}return Ge._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new An(ht(pl),e,s);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let r=i[0]||ht(pl);const a=Ii(s,e.config.apiKey,e.name);let c=null;for(const d of t)try{const g=await d._get(a);if(g){let w;if(typeof g=="string"){const I=await Ui(e,{idToken:g}).catch(()=>{});if(!I)break;w=await Ge._fromGetAccountInfoResponse(e,I,g)}else w=Ge._fromJSON(e,g);d!==r&&(c=w),r=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!r._shouldAllowMigration||!u.length?new An(r,e,s):(r=u[0],c&&await r._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==r)try{await d._remove(a)}catch{}})),new An(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ch(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fh(e))return"Blackberry";if(ph(e))return"Webos";if(lh(e))return"Safari";if((e.includes("chrome/")||uh(e))&&!e.includes("edge/"))return"Chrome";if(dh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ch(n=Se()){return/firefox\//i.test(n)}function lh(n=Se()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uh(n=Se()){return/crios\//i.test(n)}function hh(n=Se()){return/iemobile/i.test(n)}function dh(n=Se()){return/android/i.test(n)}function fh(n=Se()){return/blackberry/i.test(n)}function ph(n=Se()){return/webos/i.test(n)}function oa(n=Se()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function og(n=Se()){var e;return oa(n)&&!!((e=window.navigator)!=null&&e.standalone)}function ag(){return _p()&&document.documentMode===10}function mh(n=Se()){return oa(n)||dh(n)||ph(n)||fh(n)||/windows phone/i.test(n)||hh(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(n,e=[]){let t;switch(n){case"Browser":t=ml(Se());break;case"Worker":t=`${ml(Se())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Hn}/${s}`}/**
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
 */class cg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((a,c)=>{try{const u=e(r);a(u)}catch(u){c(u)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function lg(n,e={}){return yt(n,"GET","/v2/passwordPolicy",Gt(n,e))}/**
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
 */const ug=6;class hg{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??ug,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gl(this),this.idTokenSubscription=new gl(this),this.beforeStateQueue=new cg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=th,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ht(t)),this._initializationPromise=this.queue(async()=>{var s,i,r;if(!this._deleted&&(this.persistenceManager=await An.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ui(this,{idToken:e}),s=await Ge._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(Oe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(r=this.redirectUser)==null?void 0:r._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ji(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Hm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Oe(this.app))return Promise.reject(tt(this));const t=e?Fe(e):null;return t&&F(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Oe(this.app)?Promise.reject(tt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Oe(this.app)?Promise.reject(tt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ht(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lg(this),t=new hg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new qs("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await rg(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ht(e)||this._popupRedirectResolver;F(t,this,"argument-error"),this.redirectPersistenceManager=await An.create(this,[ht(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(c,this,"internal-error"),c.then(()=>{a||r(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,s,i);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Oe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&jm(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function at(n){return Fe(n)}class gl{constructor(e){this.auth=e,this.observer=null,this.addObserver=kp(t=>this.observer=t)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fg(n){rr=n}function yh(n){return rr.loadJS(n)}function pg(){return rr.recaptchaEnterpriseScript}function mg(){return rr.gapiScript}function gg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class yg{constructor(){this.enterprise=new vg}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class vg{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const _g="recaptcha-enterprise",vh="NO_RECAPTCHA";class wg{constructor(e){this.type=_g,this.auth=at(e)}async verify(e="verify",t=!1){async function s(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(a,c)=>{Ym(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new Jm(u);return r.tenantId==null?r._agentRecaptchaConfig=d:r._tenantRecaptchaConfigs[r.tenantId]=d,a(d.siteKey)}}).catch(u=>{c(u)})})}function i(r,a,c){const u=window.grecaptcha;hl(u)?u.enterprise.ready(()=>{u.enterprise.execute(r,{action:e}).then(d=>{a(d)}).catch(()=>{a(vh)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new yg().execute("siteKey",{action:"verify"}):new Promise((r,a)=>{s(this.auth).then(c=>{if(!t&&hl(window.grecaptcha))i(c,r,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=pg();u.length!==0&&(u+=c),yh(u).then(()=>{i(c,r,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function yl(n,e,t,s=!1,i=!1){const r=new wg(n);let a;if(i)a=vh;else try{a=await r.verify(t)}catch{a=await r.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return s?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function So(n,e,t,s,i){var r;if((r=n._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await yl(n,e,t,t==="getOobCode");return s(n,a)}else return s(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await yl(n,e,t,t==="getOobCode");return s(n,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(n,e){const t=ta(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(ln(r,e??{}))return i;qe(i,"already-initialized")}return t.initialize({options:e})}function Eg(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(ht);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Tg(n,e,t){const s=at(n);F(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=_h(e),{host:a,port:c}=Ig(e),u=c===null?"":`:${c}`,d={url:`${r}//${a}${u}/`},g=Object.freeze({host:a,port:c,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){F(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),F(ln(d,s.config.emulator)&&ln(g,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=d,s.emulatorConfig=g,s.settings.appVerificationDisabledForTesting=!0,qn(a)?(Gu(`${r}//${a}${u}`),Ku("Auth",!0)):Sg()}function _h(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Ig(n){const e=_h(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:vl(s.substr(r.length+1))}}else{const[r,a]=s.split(":");return{host:r,port:vl(a)}}}function vl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Sg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ut("not implemented")}_getIdTokenResponse(e){return ut("not implemented")}_linkToIdToken(e,t){return ut("not implemented")}_getReauthenticationResolver(e){return ut("not implemented")}}async function Ag(n,e){return yt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kg(n,e){return Gs(n,"POST","/v1/accounts:signInWithPassword",Gt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cg(n,e){return Gs(n,"POST","/v1/accounts:signInWithEmailLink",Gt(n,e))}async function Rg(n,e){return Gs(n,"POST","/v1/accounts:signInWithEmailLink",Gt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os extends aa{constructor(e,t,s,i=null){super("password",s),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Os(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Os(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return So(e,t,"signInWithPassword",kg);case"emailLink":return Cg(e,{email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return So(e,s,"signUpPassword",Ag);case"emailLink":return Rg(e,{idToken:t,email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kn(n,e){return Gs(n,"POST","/v1/accounts:signInWithIdp",Gt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg="http://localhost";class pt extends aa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new pt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):qe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,...r}=t;if(!s||!i)return null;const a=new pt(s,i);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return kn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,kn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,kn(e,t)}buildRequest(){const e={requestUri:Pg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Hs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Dg(n){const e=_s(ws(n)).link,t=e?_s(ws(e)).deep_link_id:null,s=_s(ws(n)).deep_link_id;return(s?_s(ws(s)).link:null)||s||t||e||n}class ca{constructor(e){const t=_s(ws(e)),s=t.apiKey??null,i=t.oobCode??null,r=xg(t.mode??null);F(s&&i&&r,"argument-error"),this.apiKey=s,this.operation=r,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Dg(e);try{return new ca(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.providerId=zn.PROVIDER_ID}static credential(e,t){return Os._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=ca.parseLink(t);return F(s,"argument-error"),Os._fromEmailAndCode(e,s.code,s.tenantId)}}zn.PROVIDER_ID="password";zn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Gn extends or{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ks extends Gn{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return F("providerId"in t&&"signInMethod"in t,"argument-error"),pt._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return F(e.idToken||e.accessToken,"argument-error"),pt._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return ks.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ks.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s,oauthTokenSecret:i,pendingToken:r,nonce:a,providerId:c}=e;if(!s&&!i&&!t&&!r||!c)return null;try{return new ks(c)._credential({idToken:t,accessToken:s,nonce:a,pendingToken:r})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function Lg(n,e){return Gs(n,"POST","/v1/accounts:signUp",Gt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await Ge._fromIdTokenResponse(e,s,i),a=_l(s);return new hn({user:r,providerId:a,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=_l(s);return new hn({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function _l(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends gt{constructor(e,t,s,i){super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Bi.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new Bi(e,t,s,i)}}function wh(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Bi._fromErrorAndOperation(n,r,e,s):r})}async function Ng(n,e,t=!1){const s=await On(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return hn._forOperation(n,"link",s)}/**
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
 */async function Og(n,e,t=!1){const{auth:s}=n;if(Oe(s.app))return Promise.reject(tt(s));const i="reauthenticate";try{const r=await On(n,wh(s,i,e,n),t);F(r.idToken,s,"internal-error");const a=ra(r.idToken);F(a,s,"internal-error");const{sub:c}=a;return F(n.uid===c,s,"user-mismatch"),hn._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&qe(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bh(n,e,t=!1){if(Oe(n.app))return Promise.reject(tt(n));const s="signIn",i=await wh(n,s,e),r=await hn._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}async function Mg(n,e){return bh(at(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eh(n){const e=at(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Vg(n,e,t){if(Oe(n.app))return Promise.reject(tt(n));const s=at(n),a=await So(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Lg).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Eh(n),u}),c=await hn._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function $g(n,e,t){return Oe(n.app)?Promise.reject(tt(n)):Mg(Fe(n),zn.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Eh(n),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fg(n,e){return yt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ug(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=Fe(n),r={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await On(s,Fg(s.auth,r));s.displayName=a.displayName||null,s.photoURL=a.photoUrl||null;const c=s.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=s.displayName,c.photoURL=s.photoURL),await s._updateTokensIfNecessary(a)}function jg(n,e,t,s){return Fe(n).onIdTokenChanged(e,t,s)}function Bg(n,e,t){return Fe(n).beforeAuthStateChanged(e,t)}function qg(n,e,t,s){return Fe(n).onAuthStateChanged(e,t,s)}function Hg(n){return Fe(n).signOut()}const qi="__sak";/**
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
 */class Th{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(qi,"1"),this.storage.removeItem(qi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg=1e3,Gg=10;class Ih extends Th{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=mh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const s=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(s);!t&&this.localCache[s]===a||this.notifyListeners(s,a)},r=this.storage.getItem(s);ag()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Gg):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},zg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ih.type="LOCAL";const Kg=Ih;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh extends Th{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Sh.type="SESSION";const Ah=Sh;/**
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
 */function Wg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ar{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new ar(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const c=Array.from(a).map(async d=>d(t.origin,r)),u=await Wg(c);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ar.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Qg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,a;return new Promise((c,u)=>{const d=la("",20);i.port1.start();const g=setTimeout(()=>{u(new Error("unsupported_event"))},s);a={messageChannel:i,onMessage(w){const I=w;if(I.data.eventId===d)switch(I.data.status){case"ack":clearTimeout(g),r=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),c(I.data.response);break;default:clearTimeout(g),clearTimeout(r),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return window}function Jg(n){nt().location.href=n}/**
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
 */function kh(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function Yg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Xg(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Zg(){return kh()?self:null}/**
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
 */const Ch="firebaseLocalStorageDb",ey=1,Hi="firebaseLocalStorage",Rh="fbase_key";class Ks{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function cr(n,e){return n.transaction([Hi],e?"readwrite":"readonly").objectStore(Hi)}function ty(){const n=indexedDB.deleteDatabase(Ch);return new Ks(n).toPromise()}function Ao(){const n=indexedDB.open(Ch,ey);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Hi,{keyPath:Rh})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Hi)?e(s):(s.close(),await ty(),e(await Ao()))})})}async function wl(n,e,t){const s=cr(n,!0).put({[Rh]:e,value:t});return new Ks(s).toPromise()}async function ny(n,e){const t=cr(n,!1).get(e),s=await new Ks(t).toPromise();return s===void 0?null:s.value}function bl(n,e){const t=cr(n,!0).delete(e);return new Ks(t).toPromise()}const sy=800,iy=3;class Ph{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ao(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>iy)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ar._getInstance(Zg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await Yg(),!this.activeServiceWorker)return;this.sender=new Qg(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Xg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ao();return await wl(e,qi,"1"),await bl(e,qi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>wl(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>ny(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>bl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=cr(i,!1).getAll();return new Ks(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ph.type="LOCAL";const ry=Ph;new zs(3e4,6e4);/**
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
 */function ua(n,e){return e?ht(e):(F(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ha extends aa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return kn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return kn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return kn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function oy(n){return bh(n.auth,new ha(n),n.bypassAuthState)}function ay(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),Og(t,new ha(n),n.bypassAuthState)}async function cy(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),Ng(t,new ha(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oy;case"linkViaPopup":case"linkViaRedirect":return cy;case"reauthViaPopup":case"reauthViaRedirect":return ay;default:qe(this.auth,"internal-error")}}resolve(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly=new zs(2e3,1e4);async function Dh(n,e,t){if(Oe(n.app))return Promise.reject(We(n,"operation-not-supported-in-this-environment"));const s=at(n);nh(n,e,or);const i=ua(s,t);return new rn(s,"signInViaPopup",e,i).executeNotNull()}class rn extends xh{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,rn.currentPopupAction&&rn.currentPopupAction.cancel(),rn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){ft(this.filter.length===1,"Popup operations only handle one event");const e=la();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(We(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(We(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(We(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ly.get())};e()}}rn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy="pendingRedirect",Si=new Map;class hy extends xh{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Si.get(this.auth._key());if(!e){try{const s=await dy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Si.set(this.auth._key(),e)}return this.bypassAuthState||Si.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dy(n,e){const t=Nh(e),s=Lh(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}async function fy(n,e){return Lh(n)._set(Nh(e),"true")}function py(n,e){Si.set(n._key(),e)}function Lh(n){return ht(n._redirectPersistence)}function Nh(n){return Ii(uy,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(n,e,t){return my(n,e,t)}async function my(n,e,t){if(Oe(n.app))return Promise.reject(tt(n));const s=at(n);nh(n,e,or),await s._initializationPromise;const i=ua(s,t);return await fy(i,s),i._openRedirect(s,e,"signInViaRedirect")}async function gy(n,e){return await at(n)._initializationPromise,Mh(n,e,!1)}async function Mh(n,e,t=!1){if(Oe(n.app))return Promise.reject(tt(n));const s=at(n),i=ua(s,e),a=await new hy(s,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy=600*1e3;class vy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_y(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Vh(e)){const i=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(We(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yy&&this.cachedEventUids.clear(),this.cachedEventUids.has(El(e))}saveEventToCache(e){this.cachedEventUids.add(El(e)),this.lastProcessedEventTime=Date.now()}}function El(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Vh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _y(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vh(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wy(n,e={}){return yt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ey=/^https?/;async function Ty(n){if(n.config.emulator)return;const{authorizedDomains:e}=await wy(n);for(const t of e)try{if(Iy(t))return}catch{}qe(n,"unauthorized-domain")}function Iy(n){const e=To(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===s}if(!Ey.test(t))return!1;if(by.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Sy=new zs(3e4,6e4);function Tl(){const n=nt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Ay(n){return new Promise((e,t)=>{var i,r,a;function s(){Tl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tl(),t(We(n,"network-request-failed"))},timeout:Sy.get()})}if((r=(i=nt().gapi)==null?void 0:i.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((a=nt().gapi)!=null&&a.load)s();else{const c=gg("iframefcb");return nt()[c]=()=>{gapi.load?s():t(We(n,"network-request-failed"))},yh(`${mg()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Ai=null,e})}let Ai=null;function ky(n){return Ai=Ai||Ay(n),Ai}/**
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
 */const Cy=new zs(5e3,15e3),Ry="__/auth/iframe",Py="emulator/auth/iframe",xy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Dy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ly(n){const e=n.config;F(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ia(e,Py):`https://${n.config.authDomain}/${Ry}`,s={apiKey:e.apiKey,appName:n.name,v:Hn},i=Dy.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${Hs(s).slice(1)}`}async function Ny(n){const e=await ky(n),t=nt().gapi;return F(t,n,"internal-error"),e.open({where:document.body,url:Ly(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xy,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const a=We(n,"network-request-failed"),c=nt().setTimeout(()=>{r(a)},Cy.get());function u(){nt().clearTimeout(c),i(s)}s.ping(u).then(u,()=>{r(a)})}))}/**
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
 */const Oy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},My=500,Vy=600,$y="_blank",Fy="http://localhost";class Il{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Uy(n,e,t,s=My,i=Vy){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const u={...Oy,width:s.toString(),height:i.toString(),top:r,left:a},d=Se().toLowerCase();t&&(c=uh(d)?$y:t),ch(d)&&(e=e||Fy,u.scrollbars="yes");const g=Object.entries(u).reduce((I,[R,N])=>`${I}${R}=${N},`,"");if(og(d)&&c!=="_self")return jy(e||"",c),new Il(null);const w=window.open(e||"",c,g);F(w,n,"popup-blocked");try{w.focus()}catch{}return new Il(w)}function jy(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const By="__/auth/handler",qy="emulator/auth/handler",Hy=encodeURIComponent("fac");async function Sl(n,e,t,s,i,r){F(n.config.authDomain,n,"auth-domain-config-required"),F(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Hn,eventId:i};if(e instanceof or){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Ap(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,w]of Object.entries({}))a[g]=w}if(e instanceof Gn){const g=e.getScopes().filter(w=>w!=="");g.length>0&&(a.scopes=g.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const g of Object.keys(c))c[g]===void 0&&delete c[g];const u=await n._getAppCheckToken(),d=u?`#${Hy}=${encodeURIComponent(u)}`:"";return`${zy(n)}?${Hs(c).slice(1)}${d}`}function zy({config:n}){return n.emulator?ia(n,qy):`https://${n.authDomain}/${By}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo="webStorageSupport";class Gy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ah,this._completeRedirectFn=Mh,this._overrideRedirectResult=py}async _openPopup(e,t,s,i){var a;ft((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const r=await Sl(e,t,s,To(),i);return Uy(e,r,la())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await Sl(e,t,s,To(),i);return Jg(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(ft(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await Ny(e),s=new vy(e);return t.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(oo,{type:oo},i=>{var a;const r=(a=i==null?void 0:i[0])==null?void 0:a[oo];r!==void 0&&t(!!r),qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ty(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return mh()||lh()||oa()}}const Ky=Gy;var Al="@firebase/auth",kl="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Jy(n){Nn(new un("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=s.options;F(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gh(n)},d=new dg(s,i,r,u);return Eg(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Nn(new un("auth-internal",e=>{const t=at(e.getProvider("auth").getImmediate());return(s=>new Wy(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(Al,kl,Qy(n)),Ot(Al,kl,"esm2020")}/**
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
 */const Yy=300,Xy=zu("authIdTokenMaxAge")||Yy;let Cl=null;const Zy=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Xy)return;const i=t==null?void 0:t.token;Cl!==i&&(Cl=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ev(n=Yu()){const e=ta(n,"auth");if(e.isInitialized())return e.getImmediate();const t=bg(n,{popupRedirectResolver:Ky,persistence:[ry,Kg,Ah]}),s=zu("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const a=Zy(r.toString());Bg(t,a,()=>a(t.currentUser)),jg(t,c=>a(c))}}const i=qu("auth");return i&&Tg(t,`http://${i}`),t}function tv(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}fg({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=We("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",tv().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Jy("Browser");const nv={apiKey:"AIzaSyAFURz8fEGSTameAW5YvBKWpr2LXv9Ang0",authDomain:"family-pantry-c65d6.firebaseapp.com",projectId:"family-pantry-c65d6",storageBucket:"family-pantry-c65d6.firebasestorage.app",messagingSenderId:"710701847077",appId:"1:710701847077:web:407a8937330ad2ebcfe5cc"},$h=Ju(nv),He=ev($h);window._firebaseAuth=He;const Rl=new lt,zi=new ks("apple.com");zi.addScope("email");zi.addScope("name");let da=null;const ki=[];function sv(n){return ki.push(n),n(da),()=>{const e=ki.indexOf(n);e!==-1&&ki.splice(e,1)}}function iv(n){da=n,ki.forEach(e=>e(n))}qg(He,n=>{iv(n||null)});gy(He).catch(n=>{n.code!=="auth/redirect-cancelled-by-user"&&console.error("Redirect sign-in error:",n)});async function rv(){try{return(await Dh(He,Rl)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await Oh(He,Rl),null;throw n}}async function ov(){try{return(await Dh(He,zi)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await Oh(He,zi),null;throw n}}async function av(n,e){return(await $g(He,n,e)).user}async function cv(n,e,t){const s=await Vg(He,n,e);return t&&await Ug(s.user,{displayName:t}),s.user}async function lv(){await Hg(He)}async function Fh(){return He.currentUser?He.currentUser.getIdToken():null}function De(){return da}async function lr(n,e,t){const s={"Content-Type":"application/json"},i=await Fh();i&&(s.Authorization=`Bearer ${i}`);const r=await fetch("/api/db",{method:"POST",headers:s,body:JSON.stringify({op:n,path:e,data:t})});if(!(r.headers.get("content-type")||"").includes("application/json"))throw new Error(`/api/db non-JSON response (status ${r.status}) for ${n} ${e}`);return r.json()}async function xe(n){try{return(await lr("list",n)).docs||[]}catch(e){return console.warn("dbList:",n,e.message),[]}}async function X(n,e){return lr("set",n,e)}async function Kt(n){return lr("delete",n)}async function fe(n){try{return(await lr("get",n)).doc||null}catch{return null}}function Uh(){return Math.random().toString(36).slice(2,8).toUpperCase()}async function ko(n){var t;const e={name:n.displayName||((t=n.email)==null?void 0:t.split("@")[0])||"User",email:n.email||"",createdAt:new Date().toISOString(),householdIds:[]};return await X(`users/${n.uid}`,e),e}async function jh(n,e){var a;const t=De(),s=n,i=Uh(),r={name:e||"My Kitchen",ownerUid:n,members:[{uid:n,name:(t==null?void 0:t.displayName)||((a=t==null?void 0:t.email)==null?void 0:a.split("@")[0])||"Owner",role:"owner"}],memberUids:[n],inviteCode:i,createdAt:new Date().toISOString()};try{await X(`households/${s}`,r),await X(`household_codes/${i}`,{householdId:s})}catch(c){console.error(`[createHousehold] FAILED to write households/${s}:`,c)}return{hid:s,...r}}async function uv(n){const e=await fe(`household_codes/${n.toUpperCase()}`);return(e==null?void 0:e.householdId)||null}async function Bh(n,e){var c;const t=await uv(n);if(!t)return null;const s=await fe(`households/${t}`);if(!s)return null;const i=s.members||[],r=s.memberUids||i.map(u=>u.uid);i.find(u=>u.uid===e.uid)||(i.push({uid:e.uid,name:e.displayName||((c=e.email)==null?void 0:c.split("@")[0])||"Member",role:"member"}),r.includes(e.uid)||r.push(e.uid),await X(`households/${t}`,{...s,members:i,memberUids:r,id:void 0}));const a=await fe(`users/${e.uid}`);if(a){const u=a.householdIds||[];u.includes(t)||(u.push(t),await X(`users/${e.uid}`,{...a,householdIds:u,id:void 0}))}return t}async function hv(n){const e=await fe(`households/${n}`);if(!e)return null;if(e.inviteCode)try{await Kt(`household_codes/${e.inviteCode}`)}catch{}const t=Uh();return await X(`household_codes/${t}`,{householdId:n}),await X(`households/${n}`,{...e,inviteCode:t,id:void 0}),t}async function dv(n,e){const t=await fe(`households/${n}`);if(!t)return;const s=(t.members||[]).filter(r=>r.uid!==e),i=(t.memberUids||[]).filter(r=>r!==e);await X(`households/${n}`,{...t,members:s,memberUids:i,id:void 0});try{const r=await fe(`users/${e}`);if(r){const a=(r.householdIds||[]).filter(c=>c!==n);await X(`users/${e}`,{...r,householdIds:a,id:void 0})}}catch{}}async function Pl(n,e){const t=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog"];for(const s of t){const i=await xe(`households/${n}/${s}`);for(const r of i){const a=r.id,c={...r};delete c.id,await X(`households/${e}/${s}/${a}`,c)}}}async function fv(n){var u,d;const e=n.uid;console.log(`[resolveHousehold] ENTER — uid=${e}`);const t=await fe(`users/${e}`);if(console.log("[resolveHousehold] userDoc=",t),t){const g=(u=t.householdIds)!=null&&u.length?t.householdIds[0]:e;console.log(`[resolveHousehold] RETURNING USER — hid=${g}, householdIds=`,t.householdIds);const w=localStorage.getItem("ks-h");return console.log(`[resolveHousehold] RETURNING USER — ks-h="${w}", hid="${g}", uid="${e}"`),console.log(`[resolveHousehold] RETURNING USER — migration condition: oldHid=${!!w}, oldHid!==hid=${w!==g}, oldHid!==uid=${w!==e}`),w&&w!==g&&w!==e?(console.log(`[resolveHousehold] LATE MIGRATION TRIGGERED: ${w} → ${g}`),await Pl(w,g),localStorage.removeItem("ks-h"),console.log("[resolveHousehold] Late migration DONE, ks-h removed")):console.log("[resolveHousehold] RETURNING USER — NO migration needed"),g}console.log("[resolveHousehold] FIRST-TIME LOGIN — no userDoc found");const s=localStorage.getItem("ks-h"),i=s&&s!==e;console.log(`[resolveHousehold] FIRST-TIME — ks-h="${s}", hasOldData=${i}`);const r=((d=f.cfg)==null?void 0:d.name)||"My Kitchen";console.log(`[resolveHousehold] FIRST-TIME — creating household, cfgName="${r}"`),await jh(e,i?r:"My Kitchen"),i&&(console.log(`[resolveHousehold] FIRST-TIME MIGRATION: ${s} → ${e}`),await Pl(s,e),console.log("[resolveHousehold] FIRST-TIME MIGRATION DONE"));const a=await ko(n);a.householdIds=[e],await X(`users/${e}`,a),console.log("[resolveHousehold] User profile created & saved"),localStorage.removeItem("ks-h");const c=Pe("ks-hhs");if(c){const g=c.filter(w=>w!==s);g.includes(e)||g.push(e),localStorage.setItem("ks-hhs",JSON.stringify(g))}return console.log(`[resolveHousehold] EXIT — returning uid=${e}`),e}async function dn(n,e){e?(f.mp[n]=e,await X(`households/${f.hid}/mealplan/${n}`,{date:n,meal:e})):(delete f.mp[n],await Kt(`households/${f.hid}/mealplan/${n}`))}async function ur(){await X(`households/${f.hid}/settings/config`,f.cfg)}async function qh(n,e){const t={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:e||Co(),loggedAt:new Date().toISOString()};f.cookLog.unshift(t),f.cookLog.length>200&&(f.cookLog=f.cookLog.slice(0,200)),await X(`households/${f.hid}/cooklog/${t.id}`,t)}async function pv(n){if(f.wasteLog.find(t=>t.name===n&&t.date===Co()))return;const e={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:Co(),loggedAt:new Date().toISOString()};f.wasteLog.unshift(e),f.wasteLog.length>100&&(f.wasteLog=f.wasteLog.slice(0,100)),await X(`households/${f.hid}/wastelog/${e.id}`,e)}async function mv(){try{try{const r=await fe(`households/${f.hid}`);r&&r.inviteCode&&(await fe(`household_codes/${r.inviteCode}`)||(await X(`household_codes/${r.inviteCode}`,{householdId:f.hid}),console.log(`[backfill] Created household_codes/${r.inviteCode} for household ${f.hid}`)))}catch(r){console.warn("[backfill] household_codes backfill skipped:",r.message)}const e=(await xe(`households/${f.hid}/settings`)).find(r=>r.id==="config");if(e)f.cfg={...Mi,...e};else{const r=Pe("ks-c");f.cfg={...Mi,...r||{}},await ur(),r&&localStorage.removeItem("ks-c")}const t=await xe(`households/${f.hid}/mealplan`);if(f.mp={},t.forEach(r=>{r.date&&r.meal&&(f.mp[r.date]=r.meal)}),!t.length){const r=Pe("ks-m");if(r&&Object.keys(r).length){f.mp=r;for(const[a,c]of Object.entries(r))await dn(a,c);localStorage.removeItem("ks-m")}}const s=await xe(`households/${f.hid}/cooklog`);if(s.length)f.cookLog=s.sort((r,a)=>new Date(a.loggedAt||a.date||0)-new Date(r.loggedAt||r.date||0));else{const r=Pe("ks-cooklog");if(r&&r.length){f.cookLog=r.map((a,c)=>({id:a.id||(Date.now()-c).toString(36),name:a.name,date:a.date,loggedAt:a.loggedAt||new Date().toISOString()}));for(const a of f.cookLog)await X(`households/${f.hid}/cooklog/${a.id}`,a);localStorage.removeItem("ks-cooklog")}}const i=await xe(`households/${f.hid}/wastelog`);if(i.length)f.wasteLog=i.sort((r,a)=>new Date(a.loggedAt||a.date||0)-new Date(r.loggedAt||r.date||0));else{const r=Pe("ks-waste");if(r&&r.length){f.wasteLog=r.map((a,c)=>({id:a.id||(Date.now()-c).toString(36),name:a.name,date:a.date,loggedAt:a.loggedAt||new Date().toISOString()}));for(const a of f.wasteLog)await X(`households/${f.hid}/wastelog/${a.id}`,a);localStorage.removeItem("ks-waste")}}}catch(n){console.error("loadFirestoreData error:",n)}}let Cs=0;function Kn(){Cs++,Cs===1&&window._pollIntervalId&&(clearInterval(window._pollIntervalId),window._pollIntervalId=null)}function Wn(){Cs--,Cs<=0&&(Cs=0,window._pollFn&&!window._pollIntervalId&&(window._pollFn(),window._pollIntervalId=setInterval(window._pollFn,3e4)))}const M={renderAll:null,renderSum:null,renderRecs:null,renderShop:null};function ae(n){var s;const e=document.getElementById("sdot"),t=document.getElementById("slb");e&&(e.className="sdot "+n),t&&(t.textContent=n==="synced"?"🏠 "+(((s=f.cfg)==null?void 0:s.name)||f.hid):n==="syncing"?"Syncing…":"Sync error")}async function Ue(n){var e,t;ae("syncing"),Kn();try{const s=!f.inv.find(i=>i.id===n.id);f.inv=[...f.inv.filter(i=>i.id!==n.id),n],(e=M.renderAll)==null||e.call(M),(t=M.renderSum)==null||t.call(M),await X(`households/${f.hid}/inventory/${n.id}`,n),s&&pa("added",n.name+" to inventory"),ae("synced")}catch(s){console.error(s),ae("error")}finally{Wn()}}async function fa(n){var e,t;ae("syncing"),Kn();try{const s=f.inv.find(i=>i.id===n);f.inv=f.inv.filter(i=>i.id!==n),(e=M.renderAll)==null||e.call(M),(t=M.renderSum)==null||t.call(M),await Kt(`households/${f.hid}/inventory/${n}`),s&&pa("removed",s.name+" from inventory"),ae("synced")}catch(s){console.error(s),ae("error")}finally{Wn()}}async function Ft(n){var e,t;Kn();try{f.recs=[...f.recs.filter(s=>s.id!==n.id),n],(e=M.renderRecs)==null||e.call(M),(t=M.renderSum)==null||t.call(M),await X(`households/${f.hid}/recipes/${n.id}`,n)}catch(s){console.error(s)}finally{Wn()}}async function gv(n){var e,t;Kn();try{f.recs=f.recs.filter(s=>s.id!==n),(e=M.renderRecs)==null||e.call(M),(t=M.renderSum)==null||t.call(M),await Kt(`households/${f.hid}/recipes/${n}`)}catch(s){console.error(s)}finally{Wn()}}async function je(n){var e,t;Kn();try{const s=!f.shop.find(i=>i.id===n.id);f.shop=[...f.shop.filter(i=>i.id!==n.id),n],(e=M.renderShop)==null||e.call(M),(t=M.renderSum)==null||t.call(M),await X(`households/${f.hid}/shopping/${n.id}`,n),s&&pa("added",n.name+" to shopping list")}catch(s){console.error(s)}finally{Wn()}}async function hr(n){var e,t;Kn();try{f.shop=f.shop.filter(s=>s.id!==n),(e=M.renderShop)==null||e.call(M),(t=M.renderSum)==null||t.call(M),await Kt(`households/${f.hid}/shopping/${n}`)}catch(s){console.error(s)}finally{Wn()}}async function yv(n,e,t){var r;const s=n.id,i={title:n.name,ingredients:n.description||"",steps:n.steps||"",tags:n.tags||[],cuisine:n.cuisine||"",authorName:e||"Anonymous",authorUid:((r=De())==null?void 0:r.uid)||"",householdId:t||f.hid,createdAt:new Date().toISOString(),likes:0};return await X(`public_recipes/${s}`,i),{id:s,...i}}async function vv(n){await Kt(`public_recipes/${n}`)}async function _v(){return xe("public_recipes")}async function wv(n,e){var a;const t=(a=De())==null?void 0:a.uid;if(!t)return;const s=`public_recipes/${n}/likes/${t}`;e?await Kt(s):await X(s,{likedAt:new Date().toISOString()});const i=await xe(`public_recipes/${n}/likes`),r=await fe(`public_recipes/${n}`);r&&await X(`public_recipes/${n}`,{...r,likes:i.length,id:void 0})}async function bv(n,e,t){var a;const s=(a=De())==null?void 0:a.uid;if(!s||!e.trim())return;const i="cmt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),r={text:e.trim(),authorName:t,authorUid:s,createdAt:new Date().toISOString()};return await X(`public_recipes/${n}/comments/${i}`,r),{id:i,...r}}async function Ev(n){return xe(`public_recipes/${n}/comments`)}async function Tv(n){var s;const e=(s=De())==null?void 0:s.uid;return e?!!await fe(`public_recipes/${n}/likes/${e}`):!1}async function Iv(n){const t={id:"rec-"+Date.now(),name:n.title,description:n.ingredients||"",notes:n.steps||"",tags:n.tags||[],rating:0,favorited:!1,source:"Community",sourceUrl:null,cookCount:0,savedAt:new Date().toLocaleDateString()};return await Ft(t),t}async function pa(n,e){if(!f.hid||!e)return;const t=localStorage.getItem("ks-who")||"Someone",s="act-"+Date.now().toString(36)+Math.random().toString(36).slice(2),i={memberName:t,action:n,itemName:e,timestamp:new Date().toISOString()};try{await X(`households/${f.hid}/activity/${s}`,i),Sv()}catch{}}async function Sv(){try{const n=await xe(`households/${f.hid}/activity`),e=Date.now()-10080*60*1e3;for(const t of n)t.timestamp&&new Date(t.timestamp).getTime()<e&&await Kt(`households/${f.hid}/activity/${t.id}`)}catch{}}async function Av(){try{return(await xe(`households/${f.hid}/activity`)).sort((e,t)=>new Date(t.timestamp||0)-new Date(e.timestamp||0)).slice(0,10)}catch{return[]}}function Co(){return new Date().toISOString().split("T")[0]}function p(n){return document.getElementById(n)}function Pt(){return new Date().toISOString().split("T")[0]}function Qn(){const n=new Date;n.setHours(0,0,0,0);const e=new Date(n);return e.setDate(n.getDate()-n.getDay()),Array.from({length:7},(t,s)=>{const i=new Date(e);return i.setDate(e.getDate()+s),i})}function kv(){const n=new Date;return n.setDate(n.getDate()+1),n.toISOString().split("T")[0]}function it(n){if(!n)return null;const e=new Date;e.setHours(0,0,0,0);const t=new Date(n+"T00:00:00"),s=Math.round((t-e)/864e5);return s<0?{c:"expired",l:"Expired"}:s===0?{c:"expiring",l:"Expires today"}:s<=7?{c:"expiring",l:`Expires in ${s}d`}:{c:"ok",l:t.toLocaleDateString("en-US",{month:"short",day:"numeric"})}}function ma(n){return{fridge:"🌡 Fridge",freezer:"🧊 Freezer",pantry:"🥫 Pantry"}[n]||n}const ga={Produce:"🥦",Proteins:"🍗",Dairy:"🧀",Grains:"🌾",Condiments:"🧴",Snacks:"🍿",Beverages:"🥤",Frozen:"❄️",General:"📦",Imported:"📥"};function Ms(n){const e=(n.name||"").toLowerCase(),t=(n.category||"").toLowerCase();return t.includes("produce")||t.includes("vegetable")||t.includes("fruit")||e.match(/apple|banana|broccoli|carrot|celery|cabbage|tomato|onion|garlic|jalap|spinach|mushroom|squash|lettuce|cucumber|pepper/)?"Produce":t.includes("protein")||t.includes("meat")||t.includes("seafood")||t.includes("poultry")||e.match(/chicken|beef|lamb|turkey|salmon|cod|tuna|fish|steak|pork|shrimp/)?"Proteins":t.includes("dairy")||t.includes("egg")||e.match(/egg|butter|cheese|milk|cream|yogurt|ghee/)?"Dairy":t.includes("grain")||t.includes("bread")||t.includes("pasta")||e.match(/rice|pasta|bread|flour|oat|cereal|grain|noodle|tortilla/)?"Grains":t.includes("condiment")||t.includes("sauce")||e.match(/sauce|ketchup|mustard|oil|vinegar|salt|pepper|spice|herb|seasoning|mayo/)?"Condiments":n.location==="freezer"?"Frozen":"General"}function Cv(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/^[-•]\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/\n/g,"<br>")}let ao=null;function D(n){const e=p("notif");e&&(e.textContent=n,e.style.display="block",e.style.animation="none",e.offsetWidth,e.style.animation="fn 2.5s ease forwards",ao&&clearTimeout(ao),ao=setTimeout(()=>e.style.display="none",2500))}function vt(n){var e;(e=p("ov-"+n))==null||e.classList.add("active")}function Ae(n){var e;(e=p("ov-"+n))==null||e.classList.remove("active")}function Rs(n,e){const t=p(n);t&&t.querySelectorAll(".star").forEach((s,i)=>{s.textContent=i<e?"★":"☆",s.classList.toggle("on",i<e)})}function Hh(n){const e=n.toLowerCase();return/frozen|ice cream|pizza|nugget|waffle|tater|edamame|popsicle/.test(e)?"freezer":/milk|cheese|yogurt|butter|cream|egg|meat|chicken|beef|pork|fish|salmon|shrimp|tofu|deli|bacon|sausage|produce|lettuce|spinach|berry|berries|fruit|vegetable|carrot|broccoli|juice/.test(e)?"fridge":"pantry"}const Rv={Produce:["apple","banana","carrot","celery","onion","garlic","tomato","lettuce","cucumber","pepper","broccoli","spinach","mushroom","lemon","lime","herb","cabbage","squash","jalap","avocado","potato","ginger"],"Meat & Fish":["chicken","beef","lamb","turkey","salmon","cod","tuna","fish","steak","shrimp","pork","bacon","sausage","ground"],"Dairy & Eggs":["egg","butter","cheese","milk","cream","yogurt","ghee","kefir"],Frozen:["frozen","ice cream","pizza","nugget","waffle","edamame","okra","lima","broccoli floret"],Pantry:["rice","pasta","flour","oil","vinegar","sauce","spice","salt","pepper","sugar","honey","oat","bread","can","bean","lentil","chickpea","stock","broth"],"Snacks & Drinks":["chip","cracker","cookie","juice","soda","water","tea","coffee","snack","nut","seed"]};function Pv(n){const e=n.toLowerCase();for(const[t,s]of Object.entries(Rv))if(s.some(i=>e.includes(i)))return t;return"Other"}var xl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mt,zh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function _(){}_.prototype=y.prototype,b.F=y.prototype,b.prototype=new _,b.prototype.constructor=b,b.D=function(T,E,A){for(var v=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)v[Le-2]=arguments[Le];return y.prototype[E].apply(T,v)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,y,_){_||(_=0);const T=Array(16);if(typeof y=="string")for(var E=0;E<16;++E)T[E]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(E=0;E<16;++E)T[E]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=b.g[0],_=b.g[1],E=b.g[2];let A=b.g[3],v;v=y+(A^_&(E^A))+T[0]+3614090360&4294967295,y=_+(v<<7&4294967295|v>>>25),v=A+(E^y&(_^E))+T[1]+3905402710&4294967295,A=y+(v<<12&4294967295|v>>>20),v=E+(_^A&(y^_))+T[2]+606105819&4294967295,E=A+(v<<17&4294967295|v>>>15),v=_+(y^E&(A^y))+T[3]+3250441966&4294967295,_=E+(v<<22&4294967295|v>>>10),v=y+(A^_&(E^A))+T[4]+4118548399&4294967295,y=_+(v<<7&4294967295|v>>>25),v=A+(E^y&(_^E))+T[5]+1200080426&4294967295,A=y+(v<<12&4294967295|v>>>20),v=E+(_^A&(y^_))+T[6]+2821735955&4294967295,E=A+(v<<17&4294967295|v>>>15),v=_+(y^E&(A^y))+T[7]+4249261313&4294967295,_=E+(v<<22&4294967295|v>>>10),v=y+(A^_&(E^A))+T[8]+1770035416&4294967295,y=_+(v<<7&4294967295|v>>>25),v=A+(E^y&(_^E))+T[9]+2336552879&4294967295,A=y+(v<<12&4294967295|v>>>20),v=E+(_^A&(y^_))+T[10]+4294925233&4294967295,E=A+(v<<17&4294967295|v>>>15),v=_+(y^E&(A^y))+T[11]+2304563134&4294967295,_=E+(v<<22&4294967295|v>>>10),v=y+(A^_&(E^A))+T[12]+1804603682&4294967295,y=_+(v<<7&4294967295|v>>>25),v=A+(E^y&(_^E))+T[13]+4254626195&4294967295,A=y+(v<<12&4294967295|v>>>20),v=E+(_^A&(y^_))+T[14]+2792965006&4294967295,E=A+(v<<17&4294967295|v>>>15),v=_+(y^E&(A^y))+T[15]+1236535329&4294967295,_=E+(v<<22&4294967295|v>>>10),v=y+(E^A&(_^E))+T[1]+4129170786&4294967295,y=_+(v<<5&4294967295|v>>>27),v=A+(_^E&(y^_))+T[6]+3225465664&4294967295,A=y+(v<<9&4294967295|v>>>23),v=E+(y^_&(A^y))+T[11]+643717713&4294967295,E=A+(v<<14&4294967295|v>>>18),v=_+(A^y&(E^A))+T[0]+3921069994&4294967295,_=E+(v<<20&4294967295|v>>>12),v=y+(E^A&(_^E))+T[5]+3593408605&4294967295,y=_+(v<<5&4294967295|v>>>27),v=A+(_^E&(y^_))+T[10]+38016083&4294967295,A=y+(v<<9&4294967295|v>>>23),v=E+(y^_&(A^y))+T[15]+3634488961&4294967295,E=A+(v<<14&4294967295|v>>>18),v=_+(A^y&(E^A))+T[4]+3889429448&4294967295,_=E+(v<<20&4294967295|v>>>12),v=y+(E^A&(_^E))+T[9]+568446438&4294967295,y=_+(v<<5&4294967295|v>>>27),v=A+(_^E&(y^_))+T[14]+3275163606&4294967295,A=y+(v<<9&4294967295|v>>>23),v=E+(y^_&(A^y))+T[3]+4107603335&4294967295,E=A+(v<<14&4294967295|v>>>18),v=_+(A^y&(E^A))+T[8]+1163531501&4294967295,_=E+(v<<20&4294967295|v>>>12),v=y+(E^A&(_^E))+T[13]+2850285829&4294967295,y=_+(v<<5&4294967295|v>>>27),v=A+(_^E&(y^_))+T[2]+4243563512&4294967295,A=y+(v<<9&4294967295|v>>>23),v=E+(y^_&(A^y))+T[7]+1735328473&4294967295,E=A+(v<<14&4294967295|v>>>18),v=_+(A^y&(E^A))+T[12]+2368359562&4294967295,_=E+(v<<20&4294967295|v>>>12),v=y+(_^E^A)+T[5]+4294588738&4294967295,y=_+(v<<4&4294967295|v>>>28),v=A+(y^_^E)+T[8]+2272392833&4294967295,A=y+(v<<11&4294967295|v>>>21),v=E+(A^y^_)+T[11]+1839030562&4294967295,E=A+(v<<16&4294967295|v>>>16),v=_+(E^A^y)+T[14]+4259657740&4294967295,_=E+(v<<23&4294967295|v>>>9),v=y+(_^E^A)+T[1]+2763975236&4294967295,y=_+(v<<4&4294967295|v>>>28),v=A+(y^_^E)+T[4]+1272893353&4294967295,A=y+(v<<11&4294967295|v>>>21),v=E+(A^y^_)+T[7]+4139469664&4294967295,E=A+(v<<16&4294967295|v>>>16),v=_+(E^A^y)+T[10]+3200236656&4294967295,_=E+(v<<23&4294967295|v>>>9),v=y+(_^E^A)+T[13]+681279174&4294967295,y=_+(v<<4&4294967295|v>>>28),v=A+(y^_^E)+T[0]+3936430074&4294967295,A=y+(v<<11&4294967295|v>>>21),v=E+(A^y^_)+T[3]+3572445317&4294967295,E=A+(v<<16&4294967295|v>>>16),v=_+(E^A^y)+T[6]+76029189&4294967295,_=E+(v<<23&4294967295|v>>>9),v=y+(_^E^A)+T[9]+3654602809&4294967295,y=_+(v<<4&4294967295|v>>>28),v=A+(y^_^E)+T[12]+3873151461&4294967295,A=y+(v<<11&4294967295|v>>>21),v=E+(A^y^_)+T[15]+530742520&4294967295,E=A+(v<<16&4294967295|v>>>16),v=_+(E^A^y)+T[2]+3299628645&4294967295,_=E+(v<<23&4294967295|v>>>9),v=y+(E^(_|~A))+T[0]+4096336452&4294967295,y=_+(v<<6&4294967295|v>>>26),v=A+(_^(y|~E))+T[7]+1126891415&4294967295,A=y+(v<<10&4294967295|v>>>22),v=E+(y^(A|~_))+T[14]+2878612391&4294967295,E=A+(v<<15&4294967295|v>>>17),v=_+(A^(E|~y))+T[5]+4237533241&4294967295,_=E+(v<<21&4294967295|v>>>11),v=y+(E^(_|~A))+T[12]+1700485571&4294967295,y=_+(v<<6&4294967295|v>>>26),v=A+(_^(y|~E))+T[3]+2399980690&4294967295,A=y+(v<<10&4294967295|v>>>22),v=E+(y^(A|~_))+T[10]+4293915773&4294967295,E=A+(v<<15&4294967295|v>>>17),v=_+(A^(E|~y))+T[1]+2240044497&4294967295,_=E+(v<<21&4294967295|v>>>11),v=y+(E^(_|~A))+T[8]+1873313359&4294967295,y=_+(v<<6&4294967295|v>>>26),v=A+(_^(y|~E))+T[15]+4264355552&4294967295,A=y+(v<<10&4294967295|v>>>22),v=E+(y^(A|~_))+T[6]+2734768916&4294967295,E=A+(v<<15&4294967295|v>>>17),v=_+(A^(E|~y))+T[13]+1309151649&4294967295,_=E+(v<<21&4294967295|v>>>11),v=y+(E^(_|~A))+T[4]+4149444226&4294967295,y=_+(v<<6&4294967295|v>>>26),v=A+(_^(y|~E))+T[11]+3174756917&4294967295,A=y+(v<<10&4294967295|v>>>22),v=E+(y^(A|~_))+T[2]+718787259&4294967295,E=A+(v<<15&4294967295|v>>>17),v=_+(A^(E|~y))+T[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(E+(v<<21&4294967295|v>>>11))&4294967295,b.g[2]=b.g[2]+E&4294967295,b.g[3]=b.g[3]+A&4294967295}s.prototype.v=function(b,y){y===void 0&&(y=b.length);const _=y-this.blockSize,T=this.C;let E=this.h,A=0;for(;A<y;){if(E==0)for(;A<=_;)i(this,b,A),A+=this.blockSize;if(typeof b=="string"){for(;A<y;)if(T[E++]=b.charCodeAt(A++),E==this.blockSize){i(this,T),E=0;break}}else for(;A<y;)if(T[E++]=b[A++],E==this.blockSize){i(this,T),E=0;break}}this.h=E,this.o+=y},s.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;y=this.o*8;for(var _=b.length-8;_<b.length;++_)b[_]=y&255,y/=256;for(this.v(b),b=Array(16),y=0,_=0;_<4;++_)for(let T=0;T<32;T+=8)b[y++]=this.g[_]>>>T&255;return b};function r(b,y){var _=c;return Object.prototype.hasOwnProperty.call(_,b)?_[b]:_[b]=y(b)}function a(b,y){this.h=y;const _=[];let T=!0;for(let E=b.length-1;E>=0;E--){const A=b[E]|0;T&&A==y||(_[E]=A,T=!1)}this.g=_}var c={};function u(b){return-128<=b&&b<128?r(b,function(y){return new a([y|0],y<0?-1:0)}):new a([b|0],b<0?-1:0)}function d(b){if(isNaN(b)||!isFinite(b))return w;if(b<0)return O(d(-b));const y=[];let _=1;for(let T=0;b>=_;T++)y[T]=b/_|0,_*=4294967296;return new a(y,0)}function g(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return O(g(b.substring(1),y));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=d(Math.pow(y,8));let T=w;for(let A=0;A<b.length;A+=8){var E=Math.min(8,b.length-A);const v=parseInt(b.substring(A,A+E),y);E<8?(E=d(Math.pow(y,E)),T=T.j(E).add(d(v))):(T=T.j(_),T=T.add(d(v)))}return T}var w=u(0),I=u(1),R=u(16777216);n=a.prototype,n.m=function(){if(V(this))return-O(this).m();let b=0,y=1;for(let _=0;_<this.g.length;_++){const T=this.i(_);b+=(T>=0?T:4294967296+T)*y,y*=4294967296}return b},n.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(N(this))return"0";if(V(this))return"-"+O(this).toString(b);const y=d(Math.pow(b,6));var _=this;let T="";for(;;){const E=K(_,y).g;_=G(_,E.j(y));let A=((_.g.length>0?_.g[0]:_.h)>>>0).toString(b);if(_=E,N(_))return A+T;for(;A.length<6;)A="0"+A;T=A+T}},n.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function N(b){if(b.h!=0)return!1;for(let y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function V(b){return b.h==-1}n.l=function(b){return b=G(this,b),V(b)?-1:N(b)?0:1};function O(b){const y=b.g.length,_=[];for(let T=0;T<y;T++)_[T]=~b.g[T];return new a(_,~b.h).add(I)}n.abs=function(){return V(this)?O(this):this},n.add=function(b){const y=Math.max(this.g.length,b.g.length),_=[];let T=0;for(let E=0;E<=y;E++){let A=T+(this.i(E)&65535)+(b.i(E)&65535),v=(A>>>16)+(this.i(E)>>>16)+(b.i(E)>>>16);T=v>>>16,A&=65535,v&=65535,_[E]=v<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function G(b,y){return b.add(O(y))}n.j=function(b){if(N(this)||N(b))return w;if(V(this))return V(b)?O(this).j(O(b)):O(O(this).j(b));if(V(b))return O(this.j(O(b)));if(this.l(R)<0&&b.l(R)<0)return d(this.m()*b.m());const y=this.g.length+b.g.length,_=[];for(var T=0;T<2*y;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(let E=0;E<b.g.length;E++){const A=this.i(T)>>>16,v=this.i(T)&65535,Le=b.i(E)>>>16,Wt=b.i(E)&65535;_[2*T+2*E]+=v*Wt,Z(_,2*T+2*E),_[2*T+2*E+1]+=A*Wt,Z(_,2*T+2*E+1),_[2*T+2*E+1]+=v*Le,Z(_,2*T+2*E+1),_[2*T+2*E+2]+=A*Le,Z(_,2*T+2*E+2)}for(b=0;b<y;b++)_[b]=_[2*b+1]<<16|_[2*b];for(b=y;b<2*y;b++)_[b]=0;return new a(_,0)};function Z(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function j(b,y){this.g=b,this.h=y}function K(b,y){if(N(y))throw Error("division by zero");if(N(b))return new j(w,w);if(V(b))return y=K(O(b),y),new j(O(y.g),O(y.h));if(V(y))return y=K(b,O(y)),new j(O(y.g),y.h);if(b.g.length>30){if(V(b)||V(y))throw Error("slowDivide_ only works with positive integers.");for(var _=I,T=y;T.l(b)<=0;)_=ee(_),T=ee(T);var E=te(_,1),A=te(T,1);for(T=te(T,2),_=te(_,2);!N(T);){var v=A.add(T);v.l(b)<=0&&(E=E.add(_),A=v),T=te(T,1),_=te(_,1)}return y=G(b,E.j(y)),new j(E,y)}for(E=w;b.l(y)>=0;){for(_=Math.max(1,Math.floor(b.m()/y.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),A=d(_),v=A.j(y);V(v)||v.l(b)>0;)_-=T,A=d(_),v=A.j(y);N(A)&&(A=I),E=E.add(A),b=G(b,v)}return new j(E,b)}n.B=function(b){return K(this,b).h},n.and=function(b){const y=Math.max(this.g.length,b.g.length),_=[];for(let T=0;T<y;T++)_[T]=this.i(T)&b.i(T);return new a(_,this.h&b.h)},n.or=function(b){const y=Math.max(this.g.length,b.g.length),_=[];for(let T=0;T<y;T++)_[T]=this.i(T)|b.i(T);return new a(_,this.h|b.h)},n.xor=function(b){const y=Math.max(this.g.length,b.g.length),_=[];for(let T=0;T<y;T++)_[T]=this.i(T)^b.i(T);return new a(_,this.h^b.h)};function ee(b){const y=b.g.length+1,_=[];for(let T=0;T<y;T++)_[T]=b.i(T)<<1|b.i(T-1)>>>31;return new a(_,b.h)}function te(b,y){const _=y>>5;y%=32;const T=b.g.length-_,E=[];for(let A=0;A<T;A++)E[A]=y>0?b.i(A+_)>>>y|b.i(A+_+1)<<32-y:b.i(A+_);return new a(E,b.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,zh=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=g,Mt=a}).apply(typeof xl<"u"?xl:typeof self<"u"?self:typeof window<"u"?window:{});var gi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gh,bs,Kh,Ci,Ro,Wh,Qh,Jh;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof gi=="object"&&gi];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var s=t(this);function i(o,l){if(l)e:{var h=s;o=o.split(".");for(var m=0;m<o.length-1;m++){var S=o[m];if(!(S in h))break e;h=h[S]}o=o[o.length-1],m=h[o],l=l(m),l!=m&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}i("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(o){return o||function(l){var h=[],m;for(m in l)Object.prototype.hasOwnProperty.call(l,m)&&h.push([m,l[m]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},a=this||self;function c(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function u(o,l,h){return o.call.apply(o.bind,arguments)}function d(o,l,h){return d=u,d.apply(null,arguments)}function g(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function w(o,l){function h(){}h.prototype=l.prototype,o.Z=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(m,S,k){for(var P=Array(arguments.length-2),H=2;H<arguments.length;H++)P[H-2]=arguments[H];return l.prototype[S].apply(m,P)}}var I=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function R(o){const l=o.length;if(l>0){const h=Array(l);for(let m=0;m<l;m++)h[m]=o[m];return h}return[]}function N(o,l){for(let m=1;m<arguments.length;m++){const S=arguments[m];var h=typeof S;if(h=h!="object"?h:S?Array.isArray(S)?"array":h:"null",h=="array"||h=="object"&&typeof S.length=="number"){h=o.length||0;const k=S.length||0;o.length=h+k;for(let P=0;P<k;P++)o[h+P]=S[P]}else o.push(S)}}class V{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function O(o){a.setTimeout(()=>{throw o},0)}function G(){var o=b;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class Z{constructor(){this.h=this.g=null}add(l,h){const m=j.get();m.set(l,h),this.h?this.h.next=m:this.g=m,this.h=m}}var j=new V(()=>new K,o=>o.reset());class K{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let ee,te=!1,b=new Z,y=()=>{const o=Promise.resolve(void 0);ee=()=>{o.then(_)}};function _(){for(var o;o=G();){try{o.h.call(o.g)}catch(h){O(h)}var l=j;l.j(o),l.h<100&&(l.h++,o.next=l.g,l.g=o)}te=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,l),a.removeEventListener("test",h,l)}catch{}return o})();function v(o){return/^[\s\xa0]*$/.test(o)}function Le(o,l){E.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,l)}w(Le,E),Le.prototype.init=function(o,l){const h=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget,l||(h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement)),this.relatedTarget=l,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Le.Z.h.call(this)},Le.prototype.h=function(){Le.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Wt="closure_listenable_"+(Math.random()*1e6|0),Tf=0;function If(o,l,h,m,S){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!m,this.ha=S,this.key=++Tf,this.da=this.fa=!1}function ei(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ti(o,l,h){for(const m in o)l.call(h,o[m],m,o)}function Sf(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function Xa(o){const l={};for(const h in o)l[h]=o[h];return l}const Za="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ec(o,l){let h,m;for(let S=1;S<arguments.length;S++){m=arguments[S];for(h in m)o[h]=m[h];for(let k=0;k<Za.length;k++)h=Za[k],Object.prototype.hasOwnProperty.call(m,h)&&(o[h]=m[h])}}function ni(o){this.src=o,this.g={},this.h=0}ni.prototype.add=function(o,l,h,m,S){const k=o.toString();o=this.g[k],o||(o=this.g[k]=[],this.h++);const P=xr(o,l,m,S);return P>-1?(l=o[P],h||(l.fa=!1)):(l=new If(l,this.src,k,!!m,S),l.fa=h,o.push(l)),l};function Pr(o,l){const h=l.type;if(h in o.g){var m=o.g[h],S=Array.prototype.indexOf.call(m,l,void 0),k;(k=S>=0)&&Array.prototype.splice.call(m,S,1),k&&(ei(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function xr(o,l,h,m){for(let S=0;S<o.length;++S){const k=o[S];if(!k.da&&k.listener==l&&k.capture==!!h&&k.ha==m)return S}return-1}var Dr="closure_lm_"+(Math.random()*1e6|0),Lr={};function tc(o,l,h,m,S){if(Array.isArray(l)){for(let k=0;k<l.length;k++)tc(o,l[k],h,m,S);return null}return h=ic(h),o&&o[Wt]?o.J(l,h,c(m)?!!m.capture:!1,S):Af(o,l,h,!1,m,S)}function Af(o,l,h,m,S,k){if(!l)throw Error("Invalid event type");const P=c(S)?!!S.capture:!!S;let H=Or(o);if(H||(o[Dr]=H=new ni(o)),h=H.add(l,h,m,P,k),h.proxy)return h;if(m=kf(),h.proxy=m,m.src=o,m.listener=h,o.addEventListener)A||(S=P),S===void 0&&(S=!1),o.addEventListener(l.toString(),m,S);else if(o.attachEvent)o.attachEvent(sc(l.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function kf(){function o(h){return l.call(o.src,o.listener,h)}const l=Cf;return o}function nc(o,l,h,m,S){if(Array.isArray(l))for(var k=0;k<l.length;k++)nc(o,l[k],h,m,S);else m=c(m)?!!m.capture:!!m,h=ic(h),o&&o[Wt]?(o=o.i,k=String(l).toString(),k in o.g&&(l=o.g[k],h=xr(l,h,m,S),h>-1&&(ei(l[h]),Array.prototype.splice.call(l,h,1),l.length==0&&(delete o.g[k],o.h--)))):o&&(o=Or(o))&&(l=o.g[l.toString()],o=-1,l&&(o=xr(l,h,m,S)),(h=o>-1?l[o]:null)&&Nr(h))}function Nr(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Wt])Pr(l.i,o);else{var h=o.type,m=o.proxy;l.removeEventListener?l.removeEventListener(h,m,o.capture):l.detachEvent?l.detachEvent(sc(h),m):l.addListener&&l.removeListener&&l.removeListener(m),(h=Or(l))?(Pr(h,o),h.h==0&&(h.src=null,l[Dr]=null)):ei(o)}}}function sc(o){return o in Lr?Lr[o]:Lr[o]="on"+o}function Cf(o,l){if(o.da)o=!0;else{l=new Le(l,this);const h=o.listener,m=o.ha||o.src;o.fa&&Nr(o),o=h.call(m,l)}return o}function Or(o){return o=o[Dr],o instanceof ni?o:null}var Mr="__closure_events_fn_"+(Math.random()*1e9>>>0);function ic(o){return typeof o=="function"?o:(o[Mr]||(o[Mr]=function(l){return o.handleEvent(l)}),o[Mr])}function be(){T.call(this),this.i=new ni(this),this.M=this,this.G=null}w(be,T),be.prototype[Wt]=!0,be.prototype.removeEventListener=function(o,l,h,m){nc(this,o,l,h,m)};function ke(o,l){var h,m=o.G;if(m)for(h=[];m;m=m.G)h.push(m);if(o=o.M,m=l.type||l,typeof l=="string")l=new E(l,o);else if(l instanceof E)l.target=l.target||o;else{var S=l;l=new E(m,o),ec(l,S)}S=!0;let k,P;if(h)for(P=h.length-1;P>=0;P--)k=l.g=h[P],S=si(k,m,!0,l)&&S;if(k=l.g=o,S=si(k,m,!0,l)&&S,S=si(k,m,!1,l)&&S,h)for(P=0;P<h.length;P++)k=l.g=h[P],S=si(k,m,!1,l)&&S}be.prototype.N=function(){if(be.Z.N.call(this),this.i){var o=this.i;for(const l in o.g){const h=o.g[l];for(let m=0;m<h.length;m++)ei(h[m]);delete o.g[l],o.h--}}this.G=null},be.prototype.J=function(o,l,h,m){return this.i.add(String(o),l,!1,h,m)},be.prototype.K=function(o,l,h,m){return this.i.add(String(o),l,!0,h,m)};function si(o,l,h,m){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();let S=!0;for(let k=0;k<l.length;++k){const P=l[k];if(P&&!P.da&&P.capture==h){const H=P.listener,pe=P.ha||P.src;P.fa&&Pr(o.i,P),S=H.call(pe,m)!==!1&&S}}return S&&!m.defaultPrevented}function Rf(o,l){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(o,l||0)}function rc(o){o.g=Rf(()=>{o.g=null,o.i&&(o.i=!1,rc(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Pf extends T{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:rc(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ts(o){T.call(this),this.h=o,this.g={}}w(ts,T);var oc=[];function ac(o){ti(o.g,function(l,h){this.g.hasOwnProperty(h)&&Nr(l)},o),o.g={}}ts.prototype.N=function(){ts.Z.N.call(this),ac(this)},ts.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vr=a.JSON.stringify,xf=a.JSON.parse,Df=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function cc(){}function lc(){}var ns={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function $r(){E.call(this,"d")}w($r,E);function Fr(){E.call(this,"c")}w(Fr,E);var Qt={},uc=null;function ii(){return uc=uc||new be}Qt.Ia="serverreachability";function hc(o){E.call(this,Qt.Ia,o)}w(hc,E);function ss(o){const l=ii();ke(l,new hc(l))}Qt.STAT_EVENT="statevent";function dc(o,l){E.call(this,Qt.STAT_EVENT,o),this.stat=l}w(dc,E);function Ce(o){const l=ii();ke(l,new dc(l,o))}Qt.Ja="timingevent";function fc(o,l){E.call(this,Qt.Ja,o),this.size=l}w(fc,E);function is(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},l)}function rs(){this.g=!0}rs.prototype.ua=function(){this.g=!1};function Lf(o,l,h,m,S,k){o.info(function(){if(o.g)if(k){var P="",H=k.split("&");for(let ne=0;ne<H.length;ne++){var pe=H[ne].split("=");if(pe.length>1){const ye=pe[0];pe=pe[1];const Je=ye.split("_");P=Je.length>=2&&Je[1]=="type"?P+(ye+"="+pe+"&"):P+(ye+"=redacted&")}}}else P=null;else P=k;return"XMLHTTP REQ ("+m+") [attempt "+S+"]: "+l+`
`+h+`
`+P})}function Nf(o,l,h,m,S,k,P){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+S+"]: "+l+`
`+h+`
`+k+" "+P})}function yn(o,l,h,m){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Mf(o,h)+(m?" "+m:"")})}function Of(o,l){o.info(function(){return"TIMEOUT: "+l})}rs.prototype.info=function(){};function Mf(o,l){if(!o.g)return l;if(!l)return null;try{const k=JSON.parse(l);if(k){for(o=0;o<k.length;o++)if(Array.isArray(k[o])){var h=k[o];if(!(h.length<2)){var m=h[1];if(Array.isArray(m)&&!(m.length<1)){var S=m[0];if(S!="noop"&&S!="stop"&&S!="close")for(let P=1;P<m.length;P++)m[P]=""}}}}return Vr(k)}catch{return l}}var ri={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},pc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},mc;function Ur(){}w(Ur,cc),Ur.prototype.g=function(){return new XMLHttpRequest},mc=new Ur;function os(o){return encodeURIComponent(String(o))}function Vf(o){var l=1;o=o.split(":");const h=[];for(;l>0&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function _t(o,l,h,m){this.j=o,this.i=l,this.l=h,this.S=m||1,this.V=new ts(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new gc}function gc(){this.i=null,this.g="",this.h=!1}var yc={},jr={};function Br(o,l,h){o.M=1,o.A=ai(Qe(l)),o.u=h,o.R=!0,vc(o,null)}function vc(o,l){o.F=Date.now(),oi(o),o.B=Qe(o.A);var h=o.B,m=o.S;Array.isArray(m)||(m=[String(m)]),xc(h.i,"t",m),o.C=0,h=o.j.L,o.h=new gc,o.g=Qc(o.j,h?l:null,!o.u),o.P>0&&(o.O=new Pf(d(o.Y,o,o.g),o.P)),l=o.V,h=o.g,m=o.ba;var S="readystatechange";Array.isArray(S)||(S&&(oc[0]=S.toString()),S=oc);for(let k=0;k<S.length;k++){const P=tc(h,S[k],m||l.handleEvent,!1,l.h||l);if(!P)break;l.g[P.key]=P}l=o.J?Xa(o.J):{},o.u?(o.v||(o.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,l)):(o.v="GET",o.g.ea(o.B,o.v,null,l)),ss(),Lf(o.i,o.v,o.B,o.l,o.S,o.u)}_t.prototype.ba=function(o){o=o.target;const l=this.O;l&&Et(o)==3?l.j():this.Y(o)},_t.prototype.Y=function(o){try{if(o==this.g)e:{const H=Et(this.g),pe=this.g.ya(),ne=this.g.ca();if(!(H<3)&&(H!=3||this.g&&(this.h.h||this.g.la()||$c(this.g)))){this.K||H!=4||pe==7||(pe==8||ne<=0?ss(3):ss(2)),qr(this);var l=this.g.ca();this.X=l;var h=$f(this);if(this.o=l==200,Nf(this.i,this.v,this.B,this.l,this.S,H,l),this.o){if(this.U&&!this.L){t:{if(this.g){var m,S=this.g;if((m=S.g?S.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(m)){var k=m;break t}}k=null}if(o=k)yn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Hr(this,o);else{this.o=!1,this.m=3,Ce(12),Jt(this),as(this);break e}}if(this.R){o=!0;let ye;for(;!this.K&&this.C<h.length;)if(ye=Ff(this,h),ye==jr){H==4&&(this.m=4,Ce(14),o=!1),yn(this.i,this.l,null,"[Incomplete Response]");break}else if(ye==yc){this.m=4,Ce(15),yn(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else yn(this.i,this.l,ye,null),Hr(this,ye);if(_c(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),H!=4||h.length!=0||this.h.h||(this.m=1,Ce(16),o=!1),this.o=this.o&&o,!o)yn(this.i,this.l,h,"[Invalid Chunked Response]"),Jt(this),as(this);else if(h.length>0&&!this.W){this.W=!0;var P=this.j;P.g==this&&P.aa&&!P.P&&(P.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),Xr(P),P.P=!0,Ce(11))}}else yn(this.i,this.l,h,null),Hr(this,h);H==4&&Jt(this),this.o&&!this.K&&(H==4?zc(this.j,this):(this.o=!1,oi(this)))}else Zf(this.g),l==400&&h.indexOf("Unknown SID")>0?(this.m=3,Ce(12)):(this.m=0,Ce(13)),Jt(this),as(this)}}}catch{}finally{}};function $f(o){if(!_c(o))return o.g.la();const l=$c(o.g);if(l==="")return"";let h="";const m=l.length,S=Et(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Jt(o),as(o),"";o.h.i=new a.TextDecoder}for(let k=0;k<m;k++)o.h.h=!0,h+=o.h.i.decode(l[k],{stream:!(S&&k==m-1)});return l.length=0,o.h.g+=h,o.C=0,o.h.g}function _c(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Ff(o,l){var h=o.C,m=l.indexOf(`
`,h);return m==-1?jr:(h=Number(l.substring(h,m)),isNaN(h)?yc:(m+=1,m+h>l.length?jr:(l=l.slice(m,m+h),o.C=m+h,l)))}_t.prototype.cancel=function(){this.K=!0,Jt(this)};function oi(o){o.T=Date.now()+o.H,wc(o,o.H)}function wc(o,l){if(o.D!=null)throw Error("WatchDog timer not null");o.D=is(d(o.aa,o),l)}function qr(o){o.D&&(a.clearTimeout(o.D),o.D=null)}_t.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Of(this.i,this.B),this.M!=2&&(ss(),Ce(17)),Jt(this),this.m=2,as(this)):wc(this,this.T-o)};function as(o){o.j.I==0||o.K||zc(o.j,o)}function Jt(o){qr(o);var l=o.O;l&&typeof l.dispose=="function"&&l.dispose(),o.O=null,ac(o.V),o.g&&(l=o.g,o.g=null,l.abort(),l.dispose())}function Hr(o,l){try{var h=o.j;if(h.I!=0&&(h.g==o||zr(h.h,o))){if(!o.L&&zr(h.h,o)&&h.I==3){try{var m=h.Ba.g.parse(l)}catch{m=null}if(Array.isArray(m)&&m.length==3){var S=m;if(S[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)di(h),ui(h);else break e;Yr(h),Ce(18)}}else h.xa=S[1],0<h.xa-h.K&&S[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=is(d(h.Va,h),6e3));Tc(h.h)<=1&&h.ta&&(h.ta=void 0)}else Xt(h,11)}else if((o.L||h.g==o)&&di(h),!v(l))for(S=h.Ba.g.parse(l),l=0;l<S.length;l++){let ne=S[l];const ye=ne[0];if(!(ye<=h.K))if(h.K=ye,ne=ne[1],h.I==2)if(ne[0]=="c"){h.M=ne[1],h.ba=ne[2];const Je=ne[3];Je!=null&&(h.ka=Je,h.j.info("VER="+h.ka));const Zt=ne[4];Zt!=null&&(h.za=Zt,h.j.info("SVER="+h.za));const Tt=ne[5];Tt!=null&&typeof Tt=="number"&&Tt>0&&(m=1.5*Tt,h.O=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;const It=o.g;if(It){const pi=It.g?It.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(pi){var k=m.h;k.g||pi.indexOf("spdy")==-1&&pi.indexOf("quic")==-1&&pi.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Gr(k,k.h),k.h=null))}if(m.G){const Zr=It.g?It.g.getResponseHeader("X-HTTP-Session-Id"):null;Zr&&(m.wa=Zr,se(m.J,m.G,Zr))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),m=h;var P=o;if(m.na=Wc(m,m.L?m.ba:null,m.W),P.L){Ic(m.h,P);var H=P,pe=m.O;pe&&(H.H=pe),H.D&&(qr(H),oi(H)),m.g=P}else qc(m);h.i.length>0&&hi(h)}else ne[0]!="stop"&&ne[0]!="close"||Xt(h,7);else h.I==3&&(ne[0]=="stop"||ne[0]=="close"?ne[0]=="stop"?Xt(h,7):Jr(h):ne[0]!="noop"&&h.l&&h.l.qa(ne),h.A=0)}}ss(4)}catch{}}var Uf=class{constructor(o,l){this.g=o,this.map=l}};function bc(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ec(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Tc(o){return o.h?1:o.g?o.g.size:0}function zr(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Gr(o,l){o.g?o.g.add(l):o.h=l}function Ic(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}bc.prototype.cancel=function(){if(this.i=Sc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Sc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.G);return l}return R(o.i)}var Ac=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jf(o,l){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const m=o[h].indexOf("=");let S,k=null;m>=0?(S=o[h].substring(0,m),k=o[h].substring(m+1)):S=o[h],l(S,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function wt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;o instanceof wt?(this.l=o.l,cs(this,o.j),this.o=o.o,this.g=o.g,ls(this,o.u),this.h=o.h,Kr(this,Dc(o.i)),this.m=o.m):o&&(l=String(o).match(Ac))?(this.l=!1,cs(this,l[1]||"",!0),this.o=us(l[2]||""),this.g=us(l[3]||"",!0),ls(this,l[4]),this.h=us(l[5]||"",!0),Kr(this,l[6]||"",!0),this.m=us(l[7]||"")):(this.l=!1,this.i=new ds(null,this.l))}wt.prototype.toString=function(){const o=[];var l=this.j;l&&o.push(hs(l,kc,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(hs(l,kc,!0),"@"),o.push(os(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(hs(h,h.charAt(0)=="/"?Hf:qf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",hs(h,Gf)),o.join("")},wt.prototype.resolve=function(o){const l=Qe(this);let h=!!o.j;h?cs(l,o.j):h=!!o.o,h?l.o=o.o:h=!!o.g,h?l.g=o.g:h=o.u!=null;var m=o.h;if(h)ls(l,o.u);else if(h=!!o.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var S=l.h.lastIndexOf("/");S!=-1&&(m=l.h.slice(0,S+1)+m)}if(S=m,S==".."||S==".")m="";else if(S.indexOf("./")!=-1||S.indexOf("/.")!=-1){m=S.lastIndexOf("/",0)==0,S=S.split("/");const k=[];for(let P=0;P<S.length;){const H=S[P++];H=="."?m&&P==S.length&&k.push(""):H==".."?((k.length>1||k.length==1&&k[0]!="")&&k.pop(),m&&P==S.length&&k.push("")):(k.push(H),m=!0)}m=k.join("/")}else m=S}return h?l.h=m:h=o.i.toString()!=="",h?Kr(l,Dc(o.i)):h=!!o.m,h&&(l.m=o.m),l};function Qe(o){return new wt(o)}function cs(o,l,h){o.j=h?us(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function ls(o,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);o.u=l}else o.u=null}function Kr(o,l,h){l instanceof ds?(o.i=l,Kf(o.i,o.l)):(h||(l=hs(l,zf)),o.i=new ds(l,o.l))}function se(o,l,h){o.i.set(l,h)}function ai(o){return se(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function us(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function hs(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,Bf),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Bf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var kc=/[#\/\?@]/g,qf=/[#\?:]/g,Hf=/[#\?]/g,zf=/[#\?@]/g,Gf=/#/g;function ds(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function Yt(o){o.g||(o.g=new Map,o.h=0,o.i&&jf(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=ds.prototype,n.add=function(o,l){Yt(this),this.i=null,o=vn(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function Cc(o,l){Yt(o),l=vn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Rc(o,l){return Yt(o),l=vn(o,l),o.g.has(l)}n.forEach=function(o,l){Yt(this),this.g.forEach(function(h,m){h.forEach(function(S){o.call(l,S,m,this)},this)},this)};function Pc(o,l){Yt(o);let h=[];if(typeof l=="string")Rc(o,l)&&(h=h.concat(o.g.get(vn(o,l))));else for(o=Array.from(o.g.values()),l=0;l<o.length;l++)h=h.concat(o[l]);return h}n.set=function(o,l){return Yt(this),this.i=null,o=vn(this,o),Rc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=Pc(this,o),o.length>0?String(o[0]):l):l};function xc(o,l,h){Cc(o,l),h.length>0&&(o.i=null,o.g.set(vn(o,l),R(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(let m=0;m<l.length;m++){var h=l[m];const S=os(h);h=Pc(this,h);for(let k=0;k<h.length;k++){let P=S;h[k]!==""&&(P+="="+os(h[k])),o.push(P)}}return this.i=o.join("&")};function Dc(o){const l=new ds;return l.i=o.i,o.g&&(l.g=new Map(o.g),l.h=o.h),l}function vn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Kf(o,l){l&&!o.j&&(Yt(o),o.i=null,o.g.forEach(function(h,m){const S=m.toLowerCase();m!=S&&(Cc(this,m),xc(this,S,h))},o)),o.j=l}function Wf(o,l){const h=new rs;if(a.Image){const m=new Image;m.onload=g(bt,h,"TestLoadImage: loaded",!0,l,m),m.onerror=g(bt,h,"TestLoadImage: error",!1,l,m),m.onabort=g(bt,h,"TestLoadImage: abort",!1,l,m),m.ontimeout=g(bt,h,"TestLoadImage: timeout",!1,l,m),a.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else l(!1)}function Qf(o,l){const h=new rs,m=new AbortController,S=setTimeout(()=>{m.abort(),bt(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:m.signal}).then(k=>{clearTimeout(S),k.ok?bt(h,"TestPingServer: ok",!0,l):bt(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(S),bt(h,"TestPingServer: error",!1,l)})}function bt(o,l,h,m,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),m(h)}catch{}}function Jf(){this.g=new Df}function Wr(o){this.i=o.Sb||null,this.h=o.ab||!1}w(Wr,cc),Wr.prototype.g=function(){return new ci(this.i,this.h)};function ci(o,l){be.call(this),this.H=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}w(ci,be),n=ci.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=l,this.readyState=1,ps(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(l.body=o),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,fs(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ps(this)),this.g&&(this.readyState=3,ps(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Lc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Lc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?fs(this):ps(this),this.readyState==3&&Lc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,fs(this))},n.Na=function(o){this.g&&(this.response=o,fs(this))},n.ga=function(){this.g&&fs(this)};function fs(o){o.readyState=4,o.l=null,o.j=null,o.B=null,ps(o)}n.setRequestHeader=function(o,l){this.A.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function ps(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ci.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Nc(o){let l="";return ti(o,function(h,m){l+=m,l+=":",l+=h,l+=`\r
`}),l}function Qr(o,l,h){e:{for(m in h){var m=!1;break e}m=!0}m||(h=Nc(h),typeof o=="string"?h!=null&&os(h):se(o,l,h))}function oe(o){be.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}w(oe,be);var Yf=/^https?$/i,Xf=["POST","PUT"];n=oe.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,l,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():mc.g(),this.g.onreadystatechange=I(d(this.Ca,this));try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(k){Oc(this,k);return}if(o=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var S in m)h.set(S,m[S]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const k of m.keys())h.set(k,m.get(k));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(k=>k.toLowerCase()=="content-type"),S=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Xf,l,void 0)>=0)||m||S||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,P]of h)this.g.setRequestHeader(k,P);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(k){Oc(this,k)}};function Oc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.o=5,Mc(o),li(o)}function Mc(o){o.A||(o.A=!0,ke(o,"complete"),ke(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,ke(this,"complete"),ke(this,"abort"),li(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),li(this,!0)),oe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Vc(this):this.Xa())},n.Xa=function(){Vc(this)};function Vc(o){if(o.h&&typeof r<"u"){if(o.v&&Et(o)==4)setTimeout(o.Ca.bind(o),0);else if(ke(o,"readystatechange"),Et(o)==4){o.h=!1;try{const k=o.ca();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var m;if(m=k===0){let P=String(o.D).match(Ac)[1]||null;!P&&a.self&&a.self.location&&(P=a.self.location.protocol.slice(0,-1)),m=!Yf.test(P?P.toLowerCase():"")}h=m}if(h)ke(o,"complete"),ke(o,"success");else{o.o=6;try{var S=Et(o)>2?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.ca()+"]",Mc(o)}}finally{li(o)}}}}function li(o,l){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,l||ke(o,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Et(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Et(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),xf(l)}};function $c(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Zf(o){const l={};o=(o.g&&Et(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(v(o[m]))continue;var h=Vf(o[m]);const S=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const k=l[S]||[];l[S]=k,k.push(h)}Sf(l,function(m){return m.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ms(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function Fc(o){this.za=0,this.i=[],this.j=new rs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ms("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ms("baseRetryDelayMs",5e3,o),this.Za=ms("retryDelaySeedMs",1e4,o),this.Ta=ms("forwardChannelMaxRetries",2,o),this.va=ms("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new bc(o&&o.concurrentRequestLimit),this.Ba=new Jf,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Fc.prototype,n.ka=8,n.I=1,n.connect=function(o,l,h,m){Ce(0),this.W=o,this.H=l||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.J=Wc(this,null,this.W),hi(this)};function Jr(o){if(Uc(o),o.I==3){var l=o.V++,h=Qe(o.J);if(se(h,"SID",o.M),se(h,"RID",l),se(h,"TYPE","terminate"),gs(o,h),l=new _t(o,o.j,l),l.M=2,l.A=ai(Qe(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=l.A,h=!0),h||(l.g=Qc(l.j,null),l.g.ea(l.A)),l.F=Date.now(),oi(l)}Kc(o)}function ui(o){o.g&&(Xr(o),o.g.cancel(),o.g=null)}function Uc(o){ui(o),o.v&&(a.clearTimeout(o.v),o.v=null),di(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function hi(o){if(!Ec(o.h)&&!o.m){o.m=!0;var l=o.Ea;ee||y(),te||(ee(),te=!0),b.add(l,o),o.D=0}}function ep(o,l){return Tc(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=l.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=is(d(o.Ea,o,l),Gc(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const S=new _t(this,this.j,o);let k=this.o;if(this.U&&(k?(k=Xa(k),ec(k,this.U)):k=this.U),this.u!==null||this.R||(S.J=k,k=null),this.S)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(l+=m,l>4096){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=Bc(this,S,l),h=Qe(this.J),se(h,"RID",o),se(h,"CVER",22),this.G&&se(h,"X-HTTP-Session-Id",this.G),gs(this,h),k&&(this.R?l="headers="+os(Nc(k))+"&"+l:this.u&&Qr(h,this.u,k)),Gr(this.h,S),this.Ra&&se(h,"TYPE","init"),this.S?(se(h,"$req",l),se(h,"SID","null"),S.U=!0,Br(S,h,null)):Br(S,h,l),this.I=2}}else this.I==3&&(o?jc(this,o):this.i.length==0||Ec(this.h)||jc(this))};function jc(o,l){var h;l?h=l.l:h=o.V++;const m=Qe(o.J);se(m,"SID",o.M),se(m,"RID",h),se(m,"AID",o.K),gs(o,m),o.u&&o.o&&Qr(m,o.u,o.o),h=new _t(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),l&&(o.i=l.G.concat(o.i)),l=Bc(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Gr(o.h,h),Br(h,m,l)}function gs(o,l){o.H&&ti(o.H,function(h,m){se(l,m,h)}),o.l&&ti({},function(h,m){se(l,m,h)})}function Bc(o,l,h){h=Math.min(o.i.length,h);const m=o.l?d(o.l.Ka,o.l,o):null;e:{var S=o.i;let H=-1;for(;;){const pe=["count="+h];H==-1?h>0?(H=S[0].g,pe.push("ofs="+H)):H=0:pe.push("ofs="+H);let ne=!0;for(let ye=0;ye<h;ye++){var k=S[ye].g;const Je=S[ye].map;if(k-=H,k<0)H=Math.max(0,S[ye].g-100),ne=!1;else try{k="req"+k+"_"||"";try{var P=Je instanceof Map?Je:Object.entries(Je);for(const[Zt,Tt]of P){let It=Tt;c(Tt)&&(It=Vr(Tt)),pe.push(k+Zt+"="+encodeURIComponent(It))}}catch(Zt){throw pe.push(k+"type="+encodeURIComponent("_badmap")),Zt}}catch{m&&m(Je)}}if(ne){P=pe.join("&");break e}}P=void 0}return o=o.i.splice(0,h),l.G=o,P}function qc(o){if(!o.g&&!o.v){o.Y=1;var l=o.Da;ee||y(),te||(ee(),te=!0),b.add(l,o),o.A=0}}function Yr(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=is(d(o.Da,o),Gc(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Hc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=is(d(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ce(10),ui(this),Hc(this))};function Xr(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Hc(o){o.g=new _t(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var l=Qe(o.na);se(l,"RID","rpc"),se(l,"SID",o.M),se(l,"AID",o.K),se(l,"CI",o.F?"0":"1"),!o.F&&o.ia&&se(l,"TO",o.ia),se(l,"TYPE","xmlhttp"),gs(o,l),o.u&&o.o&&Qr(l,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=ai(Qe(l)),h.u=null,h.R=!0,vc(h,o)}n.Va=function(){this.C!=null&&(this.C=null,ui(this),Yr(this),Ce(19))};function di(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function zc(o,l){var h=null;if(o.g==l){di(o),Xr(o),o.g=null;var m=2}else if(zr(o.h,l))h=l.G,Ic(o.h,l),m=1;else return;if(o.I!=0){if(l.o)if(m==1){h=l.u?l.u.length:0,l=Date.now()-l.F;var S=o.D;m=ii(),ke(m,new fc(m,h)),hi(o)}else qc(o);else if(S=l.m,S==3||S==0&&l.X>0||!(m==1&&ep(o,l)||m==2&&Yr(o)))switch(h&&h.length>0&&(l=o.h,l.i=l.i.concat(h)),S){case 1:Xt(o,5);break;case 4:Xt(o,10);break;case 3:Xt(o,6);break;default:Xt(o,2)}}}function Gc(o,l){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*l}function Xt(o,l){if(o.j.info("Error code "+l),l==2){var h=d(o.bb,o),m=o.Ua;const S=!m;m=new wt(m||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||cs(m,"https"),ai(m),S?Wf(m.toString(),h):Qf(m.toString(),h)}else Ce(2);o.I=0,o.l&&o.l.pa(l),Kc(o),Uc(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Ce(2)):(this.j.info("Failed to ping google.com"),Ce(1))};function Kc(o){if(o.I=0,o.ja=[],o.l){const l=Sc(o.h);(l.length!=0||o.i.length!=0)&&(N(o.ja,l),N(o.ja,o.i),o.h.i.length=0,R(o.i),o.i.length=0),o.l.oa()}}function Wc(o,l,h){var m=h instanceof wt?Qe(h):new wt(h);if(m.g!="")l&&(m.g=l+"."+m.g),ls(m,m.u);else{var S=a.location;m=S.protocol,l=l?l+"."+S.hostname:S.hostname,S=+S.port;const k=new wt(null);m&&cs(k,m),l&&(k.g=l),S&&ls(k,S),h&&(k.h=h),m=k}return h=o.G,l=o.wa,h&&l&&se(m,h,l),se(m,"VER",o.ka),gs(o,m),m}function Qc(o,l,h){if(l&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Aa&&!o.ma?new oe(new Wr({ab:h})):new oe(o.ma),l.Fa(o.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Jc(){}n=Jc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function fi(){}fi.prototype.g=function(o,l){return new Me(o,l)};function Me(o,l){be.call(this),this.g=new Fc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(o?o["X-WebChannel-Client-Profile"]=l.sa:o={"X-WebChannel-Client-Profile":l.sa}),this.g.U=o,(o=l&&l.Qb)&&!v(o)&&(this.g.u=o),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!v(l)&&(this.g.G=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new _n(this)}w(Me,be),Me.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Me.prototype.close=function(){Jr(this.g)},Me.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=Vr(o),o=h);l.i.push(new Uf(l.Ya++,o)),l.I==3&&hi(l)},Me.prototype.N=function(){this.g.l=null,delete this.j,Jr(this.g),delete this.g,Me.Z.N.call(this)};function Yc(o){$r.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}w(Yc,$r);function Xc(){Fr.call(this),this.status=1}w(Xc,Fr);function _n(o){this.g=o}w(_n,Jc),_n.prototype.ra=function(){ke(this.g,"a")},_n.prototype.qa=function(o){ke(this.g,new Yc(o))},_n.prototype.pa=function(o){ke(this.g,new Xc)},_n.prototype.oa=function(){ke(this.g,"b")},fi.prototype.createWebChannel=fi.prototype.g,Me.prototype.send=Me.prototype.o,Me.prototype.open=Me.prototype.m,Me.prototype.close=Me.prototype.close,Jh=function(){return new fi},Qh=function(){return ii()},Wh=Qt,Ro={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ri.NO_ERROR=0,ri.TIMEOUT=8,ri.HTTP_ERROR=6,Ci=ri,pc.COMPLETE="complete",Kh=pc,lc.EventType=ns,ns.OPEN="a",ns.CLOSE="b",ns.ERROR="c",ns.MESSAGE="d",be.prototype.listen=be.prototype.J,bs=lc,oe.prototype.listenOnce=oe.prototype.K,oe.prototype.getLastError=oe.prototype.Ha,oe.prototype.getLastErrorCode=oe.prototype.ya,oe.prototype.getStatus=oe.prototype.ca,oe.prototype.getResponseJson=oe.prototype.La,oe.prototype.getResponseText=oe.prototype.la,oe.prototype.send=oe.prototype.ea,oe.prototype.setWithCredentials=oe.prototype.Fa,Gh=oe}).apply(typeof gi<"u"?gi:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Te.UNAUTHENTICATED=new Te(null),Te.GOOGLE_CREDENTIALS=new Te("google-credentials-uid"),Te.FIRST_PARTY=new Te("first-party-uid"),Te.MOCK_USER=new Te("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jn="12.10.0";function xv(n){Jn=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const fn=new Zo("@firebase/firestore");function bn(){return fn.logLevel}function L(n,...e){if(fn.logLevel<=z.DEBUG){const t=e.map(ya);fn.debug(`Firestore (${Jn}): ${n}`,...t)}}function mt(n,...e){if(fn.logLevel<=z.ERROR){const t=e.map(ya);fn.error(`Firestore (${Jn}): ${n}`,...t)}}function pn(n,...e){if(fn.logLevel<=z.WARN){const t=e.map(ya);fn.warn(`Firestore (${Jn}): ${n}`,...t)}}function ya(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Yh(n,s,t)}function Yh(n,e,t){let s=`FIRESTORE (${Jn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw mt(s),new Error(s)}function re(n,e,t,s){let i="Unexpected state";typeof t=="string"?i=t:s=t,n||Yh(e,i,s)}function J(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends gt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Xh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Dv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Te.UNAUTHENTICATED)))}shutdown(){}}class Lv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Nv{constructor(e){this.t=e,this.currentUser=Te.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){re(this.o===void 0,42304);let s=this.i;const i=u=>this.i!==s?(s=this.i,t(u)):Promise.resolve();let r=new Cn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Cn,e.enqueueRetryable((()=>i(this.currentUser)))};const a=()=>{const u=r;e.enqueueRetryable((async()=>{await u.promise,await i(this.currentUser)}))},c=u=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Cn)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(re(typeof s.accessToken=="string",31837,{l:s}),new Xh(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string",2055,{h:e}),new Te(e)}}class Ov{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Te.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Mv{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new Ov(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Te.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Dl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Vv{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Oe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){re(this.o===void 0,3512);const s=r=>{r.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const a=r.token!==this.m;return this.m=r.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable((()=>s(r)))};const i=r=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>i(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?i(r):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Dl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(re(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Dl(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const i=$v(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<t&&(s+=e.charAt(i[r]%62))}return s}}function W(n,e){return n<e?-1:n>e?1:0}function Po(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const i=n.charAt(s),r=e.charAt(s);if(i!==r)return co(i)===co(r)?W(i,r):co(i)?1:-1}return W(n.length,e.length)}const Fv=55296,Uv=57343;function co(n){const e=n.charCodeAt(0);return e>=Fv&&e<=Uv}function Mn(n,e,t){return n.length===e.length&&n.every(((s,i)=>t(s,e[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll="__name__";class Ye{constructor(e,t,s){t===void 0?t=0:t>e.length&&q(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&q(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ye.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ye?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const r=Ye.compareSegments(e.get(i),t.get(i));if(r!==0)return r}return W(e.length,t.length)}static compareSegments(e,t){const s=Ye.isNumericId(e),i=Ye.isNumericId(t);return s&&!i?-1:!s&&i?1:s&&i?Ye.extractNumericId(e).compare(Ye.extractNumericId(t)):Po(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Mt.fromString(e.substring(4,e.length-2))}}class ie extends Ye{construct(e,t,s){return new ie(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new $(x.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((i=>i.length>0)))}return new ie(t)}static emptyPath(){return new ie([])}}const jv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Re extends Ye{construct(e,t,s){return new Re(e,t,s)}static isValidIdentifier(e){return jv.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Re.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ll}static keyField(){return new Re([Ll])}static fromServerFormat(e){const t=[];let s="",i=0;const r=()=>{if(s.length===0)throw new $(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new $(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(s+=c,i++):(r(),i++)}if(r(),a)throw new $(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Re(t)}static emptyPath(){return new Re([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Bv(n,e,t){if(!t)throw new $(x.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function qv(n,e,t,s){if(e===!0&&s===!0)throw new $(x.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Nl(n){if(U.isDocumentKey(n))throw new $(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Hv(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function zv(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":q(12329,{type:typeof n})}function Ri(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new $(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=zv(n);throw new $(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function de(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ws(n,e){if(!Hv(n))throw new $(x.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const i=e[s].typeString,r="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const a=n[s];if(i&&typeof a!==i){t=`JSON field '${s}' must be a ${i}.`;break}if(r!==void 0&&a!==r.value){t=`Expected '${s}' field to equal '${r.value}'`;break}}if(t)throw new $(x.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=-62135596800,Ml=1e6;class he{static now(){return he.fromMillis(Date.now())}static fromDate(e){return he.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Ml);return new he(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new $(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new $(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ol)throw new $(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ml}_compareTo(e){return this.seconds===e.seconds?W(this.nanoseconds,e.nanoseconds):W(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:he._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ws(e,he._jsonSchema))return new he(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ol;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}he._jsonSchemaVersion="firestore/timestamp/1.0",he._jsonSchema={type:de("string",he._jsonSchemaVersion),seconds:de("number"),nanoseconds:de("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{static fromTimestamp(e){return new B(e)}static min(){return new B(new he(0,0))}static max(){return new B(new he(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Vs=-1;function Gv(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=B.fromTimestamp(s===1e9?new he(t+1,0):new he(t,s));return new Ut(i,U.empty(),e)}function Kv(n){return new Ut(n.readTime,n.key,Vs)}class Ut{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ut(B.min(),U.empty(),Vs)}static max(){return new Ut(B.max(),U.empty(),Vs)}}function Wv(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=U.comparator(n.documentKey,e.documentKey),t!==0?t:W(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Jv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dr(n){if(n.code!==x.FAILED_PRECONDITION||n.message!==Qv)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C(((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(t,r).next(s,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):C.reject(t)}static resolve(e){return new C(((t,s)=>{t(e)}))}static reject(e){return new C(((t,s)=>{s(e)}))}static waitFor(e){return new C(((t,s)=>{let i=0,r=0,a=!1;e.forEach((c=>{++i,c.next((()=>{++r,a&&r===i&&t()}),(u=>s(u)))})),a=!0,r===i&&t()}))}static or(e){let t=C.resolve(!1);for(const s of e)t=t.next((i=>i?C.resolve(i):s()));return t}static forEach(e,t){const s=[];return e.forEach(((i,r)=>{s.push(t.call(this,i,r))})),this.waitFor(s)}static mapArray(e,t){return new C(((s,i)=>{const r=e.length,a=new Array(r);let c=0;for(let u=0;u<r;u++){const d=u;t(e[d]).next((g=>{a[d]=g,++c,c===r&&s(a)}),(g=>i(g)))}}))}static doWhile(e,t){return new C(((s,i)=>{const r=()=>{e()===!0?t().next((()=>{r()}),i):s()};r()}))}}function Yv(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Yn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */const Xv=-1;function pr(n){return n==null}function xo(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed="";function Zv(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Vl(e)),e=e_(n.get(t),e);return Vl(e)}function e_(n,e){let t=e;const s=n.length;for(let i=0;i<s;i++){const r=n.charAt(i);switch(r){case"\0":t+="";break;case ed:t+="";break;default:t+=r}}return t}function Vl(n){return n+ed+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Qs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function t_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,t){this.comparator=e,this.root=t||_e.EMPTY}insert(e,t){return new le(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,_e.BLACK,null,null))}remove(e){return new le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_e.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return t+s.left.size;i<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yi(this.root,e,this.comparator,!1)}getReverseIterator(){return new yi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yi(this.root,e,this.comparator,!0)}}class yi{constructor(e,t,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?s(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _e{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??_e.RED,this.left=i??_e.EMPTY,this.right=r??_e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,i,r){return new _e(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return _e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return _e.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw q(27949);return e+(this.isRed()?0:1)}}_e.EMPTY=null,_e.RED=!0,_e.BLACK=!1;_e.EMPTY=new class{constructor(){this.size=0}get key(){throw q(57766)}get value(){throw q(16141)}get color(){throw q(16727)}get left(){throw q(29726)}get right(){throw q(36894)}copy(e,t,s,i,r){return this}insert(e,t,s){return new _e(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.comparator=e,this.data=new le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Fl(this.data.getIterator())}getIteratorFrom(e){return new Fl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof ge)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ge(this.comparator);return t.data=e,t}}class Fl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.fields=e,e.sort(Re.comparator)}static empty(){return new xt([])}unionWith(e){let t=new ge(Re.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new xt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Mn(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class td extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new td("Invalid base64 string: "+r):r}})(e);return new we(t)}static fromUint8Array(e){const t=(function(i){let r="";for(let a=0;a<i.length;++a)r+=String.fromCharCode(i[a]);return r})(e);return new we(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return W(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}we.EMPTY_BYTE_STRING=new we("");const n_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jt(n){if(re(!!n,39018),typeof n=="string"){let e=0;const t=n_.exec(n);if(re(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ce(n.seconds),nanos:ce(n.nanos)}}function ce(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Bt(n){return typeof n=="string"?we.fromBase64String(n):we.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd="server_timestamp",sd="__type__",id="__previous_value__",rd="__local_write_time__";function va(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[sd])==null?void 0:s.stringValue)===nd}function mr(n){const e=n.mapValue.fields[id];return va(e)?mr(e):e}function $s(n){const e=jt(n.mapValue.fields[rd].timestampValue);return new he(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,t,s,i,r,a,c,u,d,g,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=g,this.apiKey=w}}const Gi="(default)";class Fs{constructor(e,t){this.projectId=e,this.database=t||Gi}static empty(){return new Fs("","")}get isDefaultDatabase(){return this.database===Gi}isEqual(e){return e instanceof Fs&&e.projectId===this.projectId&&e.database===this.database}}function i_(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new $(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fs(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_="__type__",o_="__max__",vi={mapValue:{}},a_="__vector__",Do="value";function qt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?va(n)?4:l_(n)?9007199254740991:c_(n)?10:11:q(28295,{value:n})}function rt(n,e){if(n===e)return!0;const t=qt(n);if(t!==qt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return $s(n).isEqual($s(e));case 3:return(function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const a=jt(i.timestampValue),c=jt(r.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,r){return Bt(i.bytesValue).isEqual(Bt(r.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,r){return ce(i.geoPointValue.latitude)===ce(r.geoPointValue.latitude)&&ce(i.geoPointValue.longitude)===ce(r.geoPointValue.longitude)})(n,e);case 2:return(function(i,r){if("integerValue"in i&&"integerValue"in r)return ce(i.integerValue)===ce(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const a=ce(i.doubleValue),c=ce(r.doubleValue);return a===c?xo(a)===xo(c):isNaN(a)&&isNaN(c)}return!1})(n,e);case 9:return Mn(n.arrayValue.values||[],e.arrayValue.values||[],rt);case 10:case 11:return(function(i,r){const a=i.mapValue.fields||{},c=r.mapValue.fields||{};if($l(a)!==$l(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!rt(a[u],c[u])))return!1;return!0})(n,e);default:return q(52216,{left:n})}}function Us(n,e){return(n.values||[]).find((t=>rt(t,e)))!==void 0}function Vn(n,e){if(n===e)return 0;const t=qt(n),s=qt(e);if(t!==s)return W(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return W(n.booleanValue,e.booleanValue);case 2:return(function(r,a){const c=ce(r.integerValue||r.doubleValue),u=ce(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(n,e);case 3:return Ul(n.timestampValue,e.timestampValue);case 4:return Ul($s(n),$s(e));case 5:return Po(n.stringValue,e.stringValue);case 6:return(function(r,a){const c=Bt(r),u=Bt(a);return c.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(r,a){const c=r.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const g=W(c[d],u[d]);if(g!==0)return g}return W(c.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(r,a){const c=W(ce(r.latitude),ce(a.latitude));return c!==0?c:W(ce(r.longitude),ce(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return jl(n.arrayValue,e.arrayValue);case 10:return(function(r,a){var I,R,N,V;const c=r.fields||{},u=a.fields||{},d=(I=c[Do])==null?void 0:I.arrayValue,g=(R=u[Do])==null?void 0:R.arrayValue,w=W(((N=d==null?void 0:d.values)==null?void 0:N.length)||0,((V=g==null?void 0:g.values)==null?void 0:V.length)||0);return w!==0?w:jl(d,g)})(n.mapValue,e.mapValue);case 11:return(function(r,a){if(r===vi.mapValue&&a===vi.mapValue)return 0;if(r===vi.mapValue)return 1;if(a===vi.mapValue)return-1;const c=r.fields||{},u=Object.keys(c),d=a.fields||{},g=Object.keys(d);u.sort(),g.sort();for(let w=0;w<u.length&&w<g.length;++w){const I=Po(u[w],g[w]);if(I!==0)return I;const R=Vn(c[u[w]],d[g[w]]);if(R!==0)return R}return W(u.length,g.length)})(n.mapValue,e.mapValue);default:throw q(23264,{he:t})}}function Ul(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return W(n,e);const t=jt(n),s=jt(e),i=W(t.seconds,s.seconds);return i!==0?i:W(t.nanos,s.nanos)}function jl(n,e){const t=n.values||[],s=e.values||[];for(let i=0;i<t.length&&i<s.length;++i){const r=Vn(t[i],s[i]);if(r)return r}return W(t.length,s.length)}function $n(n){return Lo(n)}function Lo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=jt(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Bt(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return U.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",i=!0;for(const r of t.values||[])i?i=!1:s+=",",s+=Lo(r);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let i="{",r=!0;for(const a of s)r?r=!1:i+=",",i+=`${a}:${Lo(t.fields[a])}`;return i+"}"})(n.mapValue):q(61005,{value:n})}function Pi(n){switch(qt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=mr(n);return e?16+Pi(e):16;case 5:return 2*n.stringValue.length;case 6:return Bt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((i,r)=>i+Pi(r)),0)})(n.arrayValue);case 10:case 11:return(function(s){let i=0;return Qs(s.fields,((r,a)=>{i+=r.length+Pi(a)})),i})(n.mapValue);default:throw q(13486,{value:n})}}function No(n){return!!n&&"integerValue"in n}function _a(n){return!!n&&"arrayValue"in n}function Bl(n){return!!n&&"nullValue"in n}function ql(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function lo(n){return!!n&&"mapValue"in n}function c_(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[r_])==null?void 0:s.stringValue)===a_}function Ps(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Qs(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Ps(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ps(n.arrayValue.values[t]);return e}return{...n}}function l_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===o_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.value=e}static empty(){return new Xe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!lo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ps(t)}setAll(e){let t=Re.emptyPath(),s={},i=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,s,i),s={},i=[],t=c.popLast()}a?s[c.lastSegment()]=Ps(a):i.push(c.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,s,i)}delete(e){const t=this.field(e.popLast());lo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=t.mapValue.fields[e.get(s)];lo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,s){Qs(t,((i,r)=>e[i]=r));for(const i of s)delete e[i]}clone(){return new Xe(Ps(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ki{constructor(e,t){this.position=e,this.inclusive=t}}function Hl(n,e,t){let s=0;for(let i=0;i<n.position.length;i++){const r=e[i],a=n.position[i];if(r.field.isKeyField()?s=U.comparator(U.fromName(a.referenceValue),t.key):s=Vn(a,t.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function zl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!rt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Wi{constructor(e,t="asc"){this.field=e,this.dir=t}}function u_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class od{}class me extends od{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new d_(e,t,s):t==="array-contains"?new m_(e,s):t==="in"?new g_(e,s):t==="not-in"?new y_(e,s):t==="array-contains-any"?new v_(e,s):new me(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new f_(e,s):new p_(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Vn(t,this.value)):t!==null&&qt(this.value)===qt(t)&&this.matchesComparison(Vn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ot extends od{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ot(e,t)}matches(e){return ad(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ad(n){return n.op==="and"}function cd(n){return h_(n)&&ad(n)}function h_(n){for(const e of n.filters)if(e instanceof ot)return!1;return!0}function Oo(n){if(n instanceof me)return n.field.canonicalString()+n.op.toString()+$n(n.value);if(cd(n))return n.filters.map((e=>Oo(e))).join(",");{const e=n.filters.map((t=>Oo(t))).join(",");return`${n.op}(${e})`}}function ld(n,e){return n instanceof me?(function(s,i){return i instanceof me&&s.op===i.op&&s.field.isEqual(i.field)&&rt(s.value,i.value)})(n,e):n instanceof ot?(function(s,i){return i instanceof ot&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce(((r,a,c)=>r&&ld(a,i.filters[c])),!0):!1})(n,e):void q(19439)}function ud(n){return n instanceof me?(function(t){return`${t.field.canonicalString()} ${t.op} ${$n(t.value)}`})(n):n instanceof ot?(function(t){return t.op.toString()+" {"+t.getFilters().map(ud).join(" ,")+"}"})(n):"Filter"}class d_ extends me{constructor(e,t,s){super(e,t,s),this.key=U.fromName(s.referenceValue)}matches(e){const t=U.comparator(e.key,this.key);return this.matchesComparison(t)}}class f_ extends me{constructor(e,t){super(e,"in",t),this.keys=hd("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class p_ extends me{constructor(e,t){super(e,"not-in",t),this.keys=hd("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function hd(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>U.fromName(s.referenceValue)))}class m_ extends me{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return _a(t)&&Us(t.arrayValue,this.value)}}class g_ extends me{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Us(this.value.arrayValue,t)}}class y_ extends me{constructor(e,t){super(e,"not-in",t)}matches(e){if(Us(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Us(this.value.arrayValue,t)}}class v_ extends me{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!_a(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Us(this.value.arrayValue,s)))}}/**
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
 */class __{constructor(e,t=null,s=[],i=[],r=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=a,this.endAt=c,this.Te=null}}function Gl(n,e=null,t=[],s=[],i=null,r=null,a=null){return new __(n,e,t,s,i,r,a)}function wa(n){const e=J(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Oo(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(r){return r.field.canonicalString()+r.dir})(s))).join(","),pr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>$n(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>$n(s))).join(",")),e.Te=t}return e.Te}function ba(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!u_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ld(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!zl(n.startAt,e.startAt)&&zl(n.endAt,e.endAt)}function Mo(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,t=null,s=[],i=[],r=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=a,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function w_(n,e,t,s,i,r,a,c){return new gr(n,e,t,s,i,r,a,c)}function Ea(n){return new gr(n)}function Kl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function b_(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function E_(n){return n.collectionGroup!==null}function xs(n){const e=J(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const r of e.explicitOrderBy)e.Ie.push(r),t.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ge(Re.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(e).forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new Wi(r,s))})),t.has(Re.keyField().canonicalString())||e.Ie.push(new Wi(Re.keyField(),s))}return e.Ie}function st(n){const e=J(n);return e.Ee||(e.Ee=T_(e,xs(n))),e.Ee}function T_(n,e){if(n.limitType==="F")return Gl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const r=i.dir==="desc"?"asc":"desc";return new Wi(i.field,r)}));const t=n.endAt?new Ki(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Ki(n.startAt.position,n.startAt.inclusive):null;return Gl(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Vo(n,e,t){return new gr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function yr(n,e){return ba(st(n),st(e))&&n.limitType===e.limitType}function dd(n){return`${wa(st(n))}|lt:${n.limitType}`}function En(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((i=>ud(i))).join(", ")}]`),pr(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((i=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(i))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((i=>$n(i))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((i=>$n(i))).join(",")),`Target(${s})`})(st(n))}; limitType=${n.limitType})`}function vr(n,e){return e.isFoundDocument()&&(function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):U.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)})(n,e)&&(function(s,i){for(const r of xs(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0})(n,e)&&(function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0})(n,e)&&(function(s,i){return!(s.startAt&&!(function(a,c,u){const d=Hl(a,c,u);return a.inclusive?d<=0:d<0})(s.startAt,xs(s),i)||s.endAt&&!(function(a,c,u){const d=Hl(a,c,u);return a.inclusive?d>=0:d>0})(s.endAt,xs(s),i))})(n,e)}function I_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function fd(n){return(e,t)=>{let s=!1;for(const i of xs(n)){const r=S_(i,e,t);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function S_(n,e,t){const s=n.field.isKeyField()?U.comparator(e.key,t.key):(function(r,a,c){const u=a.data.field(r),d=c.data.field(r);return u!==null&&d!==null?Vn(u,d):q(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return q(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[t]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Qs(this.inner,((t,s)=>{for(const[i,r]of s)e(i,r)}))}isEmpty(){return t_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_=new le(U.comparator);function Ht(){return A_}const pd=new le(U.comparator);function Es(...n){let e=pd;for(const t of n)e=e.insert(t.key,t);return e}function k_(n){let e=pd;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function on(){return Ds()}function md(){return Ds()}function Ds(){return new mn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const C_=new ge(U.comparator);function Y(...n){let e=C_;for(const t of n)e=e.add(t);return e}const R_=new ge(W);function P_(){return R_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xo(e)?"-0":e}}function D_(n){return{integerValue:""+n}}/**
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
 */class _r{constructor(){this._=void 0}}function L_(n,e,t){return n instanceof $o?(function(i,r){const a={fields:{[sd]:{stringValue:nd},[rd]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&va(r)&&(r=mr(r)),r&&(a.fields[id]=r),{mapValue:a}})(t,e):n instanceof Qi?gd(n,e):n instanceof Ji?yd(n,e):(function(i,r){const a=O_(i,r),c=Wl(a)+Wl(i.Ae);return No(a)&&No(i.Ae)?D_(c):x_(i.serializer,c)})(n,e)}function N_(n,e,t){return n instanceof Qi?gd(n,e):n instanceof Ji?yd(n,e):t}function O_(n,e){return n instanceof Fo?(function(s){return No(s)||(function(r){return!!r&&"doubleValue"in r})(s)})(e)?e:{integerValue:0}:null}class $o extends _r{}class Qi extends _r{constructor(e){super(),this.elements=e}}function gd(n,e){const t=vd(e);for(const s of n.elements)t.some((i=>rt(i,s)))||t.push(s);return{arrayValue:{values:t}}}class Ji extends _r{constructor(e){super(),this.elements=e}}function yd(n,e){let t=vd(e);for(const s of n.elements)t=t.filter((i=>!rt(i,s)));return{arrayValue:{values:t}}}class Fo extends _r{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Wl(n){return ce(n.integerValue||n.doubleValue)}function vd(n){return _a(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function M_(n,e){return n.field.isEqual(e.field)&&(function(s,i){return s instanceof Qi&&i instanceof Qi||s instanceof Ji&&i instanceof Ji?Mn(s.elements,i.elements,rt):s instanceof Fo&&i instanceof Fo?rt(s.Ae,i.Ae):s instanceof $o&&i instanceof $o})(n.transform,e.transform)}class an{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new an}static exists(e){return new an(void 0,e)}static updateTime(e){return new an(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ta{}function _d(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new $_(n.key,an.none()):new Ia(n.key,n.data,an.none());{const t=n.data,s=Xe.empty();let i=new ge(Re.comparator);for(let r of e.fields)if(!i.has(r)){let a=t.field(r);a===null&&r.length>1&&(r=r.popLast(),a=t.field(r)),a===null?s.delete(r):s.set(r,a),i=i.add(r)}return new wr(n.key,s,new xt(i.toArray()),an.none())}}function V_(n,e,t){n instanceof Ia?(function(i,r,a){const c=i.value.clone(),u=Jl(i.fieldTransforms,r,a.transformResults);c.setAll(u),r.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof wr?(function(i,r,a){if(!xi(i.precondition,r))return void r.convertToUnknownDocument(a.version);const c=Jl(i.fieldTransforms,r,a.transformResults),u=r.data;u.setAll(wd(i)),u.setAll(c),r.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):(function(i,r,a){r.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Ls(n,e,t,s){return n instanceof Ia?(function(r,a,c,u){if(!xi(r.precondition,a))return c;const d=r.value.clone(),g=Yl(r.fieldTransforms,u,a);return d.setAll(g),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,e,t,s):n instanceof wr?(function(r,a,c,u){if(!xi(r.precondition,a))return c;const d=Yl(r.fieldTransforms,u,a),g=a.data;return g.setAll(wd(r)),g.setAll(d),a.convertToFoundDocument(a.version,g).setHasLocalMutations(),c===null?null:c.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((w=>w.field)))})(n,e,t,s):(function(r,a,c){return xi(r.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function Ql(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&Mn(s,i,((r,a)=>M_(r,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ia extends Ta{constructor(e,t,s,i=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class wr extends Ta{constructor(e,t,s,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function wd(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function Jl(n,e,t){const s=new Map;re(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let i=0;i<t.length;i++){const r=n[i],a=r.transform,c=e.data.field(r.field);s.set(r.field,N_(a,c,t[i]))}return s}function Yl(n,e,t){const s=new Map;for(const i of n){const r=i.transform,a=t.data.field(i.field);s.set(i.field,L_(r,a,e))}return s}class $_ extends Ta{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,t,s,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&V_(r,e,s[i])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ls(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ls(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=md();return this.mutations.forEach((i=>{const r=e.get(i.key),a=r.overlayedDocument;let c=this.applyToLocalView(a,r.mutatedFields);c=t.has(i.key)?null:c;const u=_d(a,c);u!==null&&s.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(B.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Y())}isEqual(e){return this.batchId===e.batchId&&Mn(this.mutations,e.mutations,((t,s)=>Ql(t,s)))&&Mn(this.baseMutations,e.baseMutations,((t,s)=>Ql(t,s)))}}/**
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
 */class U_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class j_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue,Q;function bd(n){if(n===void 0)return mt("GRPC error has no .code"),x.UNKNOWN;switch(n){case ue.OK:return x.OK;case ue.CANCELLED:return x.CANCELLED;case ue.UNKNOWN:return x.UNKNOWN;case ue.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case ue.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case ue.INTERNAL:return x.INTERNAL;case ue.UNAVAILABLE:return x.UNAVAILABLE;case ue.UNAUTHENTICATED:return x.UNAUTHENTICATED;case ue.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case ue.NOT_FOUND:return x.NOT_FOUND;case ue.ALREADY_EXISTS:return x.ALREADY_EXISTS;case ue.PERMISSION_DENIED:return x.PERMISSION_DENIED;case ue.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case ue.ABORTED:return x.ABORTED;case ue.OUT_OF_RANGE:return x.OUT_OF_RANGE;case ue.UNIMPLEMENTED:return x.UNIMPLEMENTED;case ue.DATA_LOSS:return x.DATA_LOSS;default:return q(39323,{code:n})}}(Q=ue||(ue={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function B_(){return new TextEncoder}/**
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
 */const q_=new Mt([4294967295,4294967295],0);function Xl(n){const e=B_().encode(n),t=new zh;return t.update(e),new Uint8Array(t.digest())}function Zl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Mt([t,s],0),new Mt([i,r],0)]}class Sa{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ts(`Invalid padding: ${t}`);if(s<0)throw new Ts(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ts(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ts(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Mt.fromNumber(this.ge)}ye(e,t,s){let i=e.add(t.multiply(Mt.fromNumber(s)));return i.compare(q_)===1&&(i=new Mt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Xl(e),[s,i]=Zl(t);for(let r=0;r<this.hashCount;r++){const a=this.ye(s,i,r);if(!this.we(a))return!1}return!0}static create(e,t,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),a=new Sa(r,i,t);return s.forEach((c=>a.insert(c))),a}insert(e){if(this.ge===0)return;const t=Xl(e),[s,i]=Zl(t);for(let r=0;r<this.hashCount;r++){const a=this.ye(s,i,r);this.be(a)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ts extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,t,s,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const i=new Map;return i.set(e,Js.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new br(B.min(),i,new le(W),Ht(),Y())}}class Js{constructor(e,t,s,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Js(s,t,Y(),Y(),Y())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,t,s,i){this.Se=e,this.removedTargetIds=t,this.key=s,this.De=i}}class Ed{constructor(e,t){this.targetId=e,this.Ce=t}}class Td{constructor(e,t,s=we.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=i}}class eu{constructor(){this.ve=0,this.Fe=tu(),this.Me=we.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Y(),t=Y(),s=Y();return this.Fe.forEach(((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:s=s.add(i);break;default:q(38017,{changeType:r})}})),new Js(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=tu()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,re(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class H_{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ht(),this.He=_i(),this.Je=_i(),this.Ze=new le(W)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:q(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,i)=>{this.rt(i)&&t(i)}))}st(e){const t=e.targetId,s=e.Ce.count,i=this.ot(t);if(i){const r=i.target;if(Mo(r))if(s===0){const a=new U(r.path);this.et(t,a,Ie.newNoDocument(a,B.min()))}else re(s===1,20013,{expectedCount:s});else{const a=this._t(t);if(a!==s){const c=this.ut(e),u=c?this.ct(c,e,a):1;if(u!==0){this.it(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=t;let a,c;try{a=Bt(s).toUint8Array()}catch(u){if(u instanceof td)return pn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Sa(a,i,r)}catch(u){return pn(u instanceof Ts?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let i=0;return s.forEach((r=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${r.path.canonicalString()}`;e.mightContain(c)||(this.et(t,r,null),i++)})),i}Tt(e){const t=new Map;this.ze.forEach(((r,a)=>{const c=this.ot(a);if(c){if(r.current&&Mo(c.target)){const u=new U(c.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,Ie.newNoDocument(u,e))}r.Be&&(t.set(a,r.ke()),r.Ke())}}));let s=Y();this.Je.forEach(((r,a)=>{let c=!0;a.forEachWhile((u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(s=s.add(r))})),this.je.forEach(((r,a)=>a.setReadTime(e)));const i=new br(e,t,this.Ze,this.je,s);return this.je=Ht(),this.He=_i(),this.Je=_i(),this.Ze=new le(W),i}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.qe(t,1):i.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new eu,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new ge(W),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new ge(W),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||L("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new eu),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function _i(){return new le(U.comparator)}function tu(){return new le(U.comparator)}const z_={asc:"ASCENDING",desc:"DESCENDING"},G_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},K_={and:"AND",or:"OR"};class W_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Uo(n,e){return n.useProto3Json||pr(e)?e:{value:e}}function Q_(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function J_(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Rn(n){return re(!!n,49232),B.fromTimestamp((function(t){const s=jt(t);return new he(s.seconds,s.nanos)})(n))}function Y_(n,e){return jo(n,e).canonicalString()}function jo(n,e){const t=(function(i){return new ie(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Id(n){const e=ie.fromString(n);return re(Rd(e),10190,{key:e.toString()}),e}function uo(n,e){const t=Id(e);if(t.get(1)!==n.databaseId.projectId)throw new $(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new $(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new U(Ad(t))}function Sd(n,e){return Y_(n.databaseId,e)}function X_(n){const e=Id(n);return e.length===4?ie.emptyPath():Ad(e)}function nu(n){return new ie(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ad(n){return re(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Z_(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:q(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=(function(d,g){return d.useProto3Json?(re(g===void 0||typeof g=="string",58123),we.fromBase64String(g||"")):(re(g===void 0||g instanceof Buffer||g instanceof Uint8Array,16193),we.fromUint8Array(g||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(d){const g=d.code===void 0?x.UNKNOWN:bd(d.code);return new $(g,d.message||"")})(a);t=new Td(s,i,r,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=uo(n,s.document.name),r=Rn(s.document.updateTime),a=s.document.createTime?Rn(s.document.createTime):B.min(),c=new Xe({mapValue:{fields:s.document.fields}}),u=Ie.newFoundDocument(i,r,a,c),d=s.targetIds||[],g=s.removedTargetIds||[];t=new Di(d,g,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=uo(n,s.document),r=s.readTime?Rn(s.readTime):B.min(),a=Ie.newNoDocument(i,r),c=s.removedTargetIds||[];t=new Di([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=uo(n,s.document),r=s.removedTargetIds||[];t=new Di([],r,i,null)}else{if(!("filter"in e))return q(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,a=new j_(i,r),c=s.targetId;t=new Ed(c,a)}}return t}function ew(n,e){return{documents:[Sd(n,e.path)]}}function tw(n,e){const t={structuredQuery:{}},s=e.path;let i;e.collectionGroup!==null?(i=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Sd(n,i);const r=(function(d){if(d.length!==0)return Cd(ot.create(d,"and"))})(e.filters);r&&(t.structuredQuery.where=r);const a=(function(d){if(d.length!==0)return d.map((g=>(function(I){return{field:Tn(I.field),direction:iw(I.dir)}})(g)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Uo(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{ft:t,parent:i}}function nw(n){let e=X_(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let i=null;if(s>0){re(s===1,65062);const g=t.from[0];g.allDescendants?i=g.collectionId:e=e.child(g.collectionId)}let r=[];t.where&&(r=(function(w){const I=kd(w);return I instanceof ot&&cd(I)?I.getFilters():[I]})(t.where));let a=[];t.orderBy&&(a=(function(w){return w.map((I=>(function(N){return new Wi(In(N.field),(function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(N.direction))})(I)))})(t.orderBy));let c=null;t.limit&&(c=(function(w){let I;return I=typeof w=="object"?w.value:w,pr(I)?null:I})(t.limit));let u=null;t.startAt&&(u=(function(w){const I=!!w.before,R=w.values||[];return new Ki(R,I)})(t.startAt));let d=null;return t.endAt&&(d=(function(w){const I=!w.before,R=w.values||[];return new Ki(R,I)})(t.endAt)),w_(e,i,a,r,c,"F",u,d)}function sw(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function kd(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=In(t.unaryFilter.field);return me.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=In(t.unaryFilter.field);return me.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=In(t.unaryFilter.field);return me.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=In(t.unaryFilter.field);return me.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return q(61313);default:return q(60726)}})(n):n.fieldFilter!==void 0?(function(t){return me.create(In(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return q(58110);default:return q(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return ot.create(t.compositeFilter.filters.map((s=>kd(s))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return q(1026)}})(t.compositeFilter.op))})(n):q(30097,{filter:n})}function iw(n){return z_[n]}function rw(n){return G_[n]}function ow(n){return K_[n]}function Tn(n){return{fieldPath:n.canonicalString()}}function In(n){return Re.fromServerFormat(n.fieldPath)}function Cd(n){return n instanceof me?(function(t){if(t.op==="=="){if(ql(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NAN"}};if(Bl(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ql(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NOT_NAN"}};if(Bl(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Tn(t.field),op:rw(t.op),value:t.value}}})(n):n instanceof ot?(function(t){const s=t.getFilters().map((i=>Cd(i)));return s.length===1?s[0]:{compositeFilter:{op:ow(t.op),filters:s}}})(n):q(54877,{filter:n})}function Rd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class aw{constructor(e){this.yt=e}}function cw(n){const e=nw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Vo(e,e.limit,"L"):e}/**
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
 */class lw{constructor(){this.Sn=new uw}addToCollectionParentIndex(e,t){return this.Sn.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(Ut.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(Ut.min())}updateCollectionGroup(e,t,s){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class uw{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t]||new ge(ie.comparator),r=!i.has(s);return this.index[t]=i.add(s),r}has(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t];return i&&i.has(s)}getEntries(e){return(this.index[e]||new ge(ie.comparator)).toArray()}}/**
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
 */const su={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Pd=41943040;class Ne{static withCacheSize(e){return new Ne(e,Ne.DEFAULT_COLLECTION_PERCENTILE,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ne.DEFAULT_COLLECTION_PERCENTILE=10,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ne.DEFAULT=new Ne(Pd,Ne.DEFAULT_COLLECTION_PERCENTILE,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ne.DISABLED=new Ne(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const iu="LruGarbageCollector",hw=1048576;function ru([n,e],[t,s]){const i=W(n,t);return i===0?W(e,s):i}class dw{constructor(e){this.Pr=e,this.buffer=new ge(ru),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();ru(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class fw{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){L(iu,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Yn(t)?L(iu,"Ignoring IndexedDB error during garbage collection: ",t):await dr(t)}await this.Ar(3e5)}))}}class pw{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return C.resolve(fr.ce);const s=new dw(t);return this.Vr.forEachTarget(e,(i=>s.Er(i.sequenceNumber))).next((()=>this.Vr.mr(e,(i=>s.Er(i))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(su)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),su):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,i,r,a,c,u,d;const g=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),i=this.params.maximumSequenceNumbersToCollect):i=w,a=Date.now(),this.nthSequenceNumber(e,i)))).next((w=>(s=w,c=Date.now(),this.removeTargets(e,s,t)))).next((w=>(r=w,u=Date.now(),this.removeOrphanedDocuments(e,s)))).next((w=>(d=Date.now(),bn()<=z.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-g}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${r} targets in `+(u-c)+`ms
	Removed ${w} documents in `+(d-u)+`ms
Total Duration: ${d-g}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:w}))))}}function mw(n,e){return new pw(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(){this.changes=new mn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ie.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?C.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class yw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e,t,s,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(s=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(s!==null&&Ls(s.mutation,i,xt.empty(),he.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Y()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Y()){const i=on();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,s).next((r=>{let a=Es();return r.forEach(((c,u)=>{a=a.insert(c,u.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const s=on();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Y())))}populateOverlays(e,t,s){const i=[];return s.forEach((r=>{t.has(r)||i.push(r)})),this.documentOverlayCache.getOverlays(e,i).next((r=>{r.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,s,i){let r=Ht();const a=Ds(),c=(function(){return Ds()})();return t.forEach(((u,d)=>{const g=s.get(d.key);i.has(d.key)&&(g===void 0||g.mutation instanceof wr)?r=r.insert(d.key,d):g!==void 0?(a.set(d.key,g.mutation.getFieldMask()),Ls(g.mutation,d,g.mutation.getFieldMask(),he.now())):a.set(d.key,xt.empty())})),this.recalculateAndSaveOverlays(e,r).next((u=>(u.forEach(((d,g)=>a.set(d,g))),t.forEach(((d,g)=>c.set(d,new yw(g,a.get(d)??null)))),c)))}recalculateAndSaveOverlays(e,t){const s=Ds();let i=new le(((a,c)=>a-c)),r=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((u=>{const d=t.get(u);if(d===null)return;let g=s.get(u)||xt.empty();g=c.applyToLocalView(d,g),s.set(u,g);const w=(i.get(c.batchId)||Y()).add(u);i=i.insert(c.batchId,w)}))})).next((()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,g=u.value,w=md();g.forEach((I=>{if(!r.has(I)){const R=_d(t.get(I),s.get(I));R!==null&&w.set(I,R),r=r.add(I)}})),a.push(this.documentOverlayCache.saveOverlays(e,d,w))}return C.waitFor(a)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,i){return b_(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):E_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,i):this.getDocumentsMatchingCollectionQuery(e,t,s,i)}getNextDocuments(e,t,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,i).next((r=>{const a=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,i-r.size):C.resolve(on());let c=Vs,u=r;return a.next((d=>C.forEach(d,((g,w)=>(c<w.largestBatchId&&(c=w.largestBatchId),r.get(g)?C.resolve():this.remoteDocumentCache.getEntry(e,g).next((I=>{u=u.insert(g,I)}))))).next((()=>this.populateOverlays(e,d,r))).next((()=>this.computeViews(e,u,d,Y()))).next((g=>({batchId:c,changes:k_(g)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next((s=>{let i=Es();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,i){const r=t.collectionGroup;let a=Es();return this.indexManager.getCollectionParents(e,r).next((c=>C.forEach(c,(u=>{const d=(function(w,I){return new gr(I,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(t,u.child(r));return this.getDocumentsMatchingCollectionQuery(e,d,s,i).next((g=>{g.forEach(((w,I)=>{a=a.insert(w,I)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((a=>(r=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,r,i)))).next((a=>{r.forEach(((u,d)=>{const g=d.getKey();a.get(g)===null&&(a=a.insert(g,Ie.newInvalidDocument(g)))}));let c=Es();return a.forEach(((u,d)=>{const g=r.get(u);g!==void 0&&Ls(g.mutation,d,xt.empty(),he.now()),vr(t,d)&&(c=c.insert(u,d))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return C.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:Rn(i.createTime)}})(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(i){return{name:i.name,query:cw(i.bundledQuery),readTime:Rn(i.readTime)}})(t)),C.resolve()}}/**
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
 */class ww{constructor(){this.overlays=new le(U.comparator),this.Lr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const s=on();return C.forEach(t,(i=>this.getOverlay(e,i).next((r=>{r!==null&&s.set(i,r)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((i,r)=>{this.bt(e,t,r)})),C.resolve()}removeOverlaysForBatchId(e,t,s){const i=this.Lr.get(s);return i!==void 0&&(i.forEach((r=>this.overlays=this.overlays.remove(r))),this.Lr.delete(s)),C.resolve()}getOverlaysForCollection(e,t,s){const i=on(),r=t.length+1,a=new U(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===r&&u.largestBatchId>s&&i.set(u.getKey(),u)}return C.resolve(i)}getOverlaysForCollectionGroup(e,t,s,i){let r=new le(((d,g)=>d-g));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>s){let g=r.get(d.largestBatchId);g===null&&(g=on(),r=r.insert(d.largestBatchId,g)),g.set(d.getKey(),d)}}const c=on(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((d,g)=>c.set(d,g))),!(c.size()>=i)););return C.resolve(c)}bt(e,t,s){const i=this.overlays.get(s.key);if(i!==null){const a=this.Lr.get(i.largestBatchId).delete(s.key);this.Lr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new U_(t,s));let r=this.Lr.get(t);r===void 0&&(r=Y(),this.Lr.set(t,r)),this.Lr.set(t,r.add(s.key))}}/**
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
 */class bw{constructor(){this.sessionToken=we.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(){this.kr=new ge(ve.Kr),this.qr=new ge(ve.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new ve(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new ve(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new U(new ie([])),s=new ve(t,e),i=new ve(t,e+1),r=[];return this.qr.forEachInRange([s,i],(a=>{this.Wr(a),r.push(a.key)})),r}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new U(new ie([])),s=new ve(t,e),i=new ve(t,e+1);let r=Y();return this.qr.forEachInRange([s,i],(a=>{r=r.add(a.key)})),r}containsKey(e){const t=new ve(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class ve{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return U.comparator(e.key,t.key)||W(e.Hr,t.Hr)}static Ur(e,t){return W(e.Hr,t.Hr)||U.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new ge(ve.Kr)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,i){const r=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new F_(r,t,s,i);this.mutationQueue.push(a);for(const c of i)this.Jr=this.Jr.add(new ve(c.key,r)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return C.resolve(a)}lookupMutationBatch(e,t){return C.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=this.Xr(s),r=i<0?0:i;return C.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?Xv:this.Yn-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new ve(t,0),i=new ve(t,Number.POSITIVE_INFINITY),r=[];return this.Jr.forEachInRange([s,i],(a=>{const c=this.Zr(a.Hr);r.push(c)})),C.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new ge(W);return t.forEach((i=>{const r=new ve(i,0),a=new ve(i,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([r,a],(c=>{s=s.add(c.Hr)}))})),C.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1;let r=s;U.isDocumentKey(r)||(r=r.child(""));const a=new ve(new U(r),0);let c=new ge(W);return this.Jr.forEachWhile((u=>{const d=u.key.path;return!!s.isPrefixOf(d)&&(d.length===i&&(c=c.add(u.Hr)),!0)}),a),C.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((s=>{const i=this.Zr(s);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){re(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Jr;return C.forEach(t.mutations,(i=>{const r=new ve(i.key,t.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Jr=s}))}nr(e){}containsKey(e,t){const s=new ve(t,0),i=this.Jr.firstAfterOrEqual(s);return C.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e){this.ti=e,this.docs=(function(){return new le(U.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,i=this.docs.get(s),r=i?i.size:0,a=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return C.resolve(s?s.document.mutableCopy():Ie.newInvalidDocument(t))}getEntries(e,t){let s=Ht();return t.forEach((i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Ie.newInvalidDocument(i))})),C.resolve(s)}getDocumentsMatchingQuery(e,t,s,i){let r=Ht();const a=t.path,c=new U(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:g}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Wv(Kv(g),s)<=0||(i.has(g.key)||vr(t,g))&&(r=r.insert(g.key,g.mutableCopy()))}return C.resolve(r)}getAllFromCollectionGroup(e,t,s,i){q(9500)}ni(e,t){return C.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new Iw(this)}getSize(e){return C.resolve(this.size)}}class Iw extends gw{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,i)=>{i.isValidDocument()?t.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(s)})),C.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e){this.persistence=e,this.ri=new mn((t=>wa(t)),ba),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.ii=0,this.si=new Aa,this.targetCount=0,this.oi=Fn._r()}forEachTarget(e,t){return this.ri.forEach(((s,i)=>t(i))),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),C.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Fn(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.lr(t),C.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,s){let i=0;const r=[];return this.ri.forEach(((a,c)=>{c.sequenceNumber<=t&&s.get(c.targetId)===null&&(this.ri.delete(a),r.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)})),C.waitFor(r).next((()=>i))}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return C.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),C.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach((a=>{r.push(i.markPotentiallyOrphaned(e,a))})),C.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return C.resolve(s)}containsKey(e,t){return C.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,t){this._i={},this.overlays={},this.ai=new fr(0),this.ui=!1,this.ui=!0,this.ci=new bw,this.referenceDelegate=e(this),this.li=new Sw(this),this.indexManager=new lw,this.remoteDocumentCache=(function(i){return new Tw(i)})((s=>this.referenceDelegate.hi(s))),this.serializer=new aw(t),this.Pi=new _w(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ww,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new Ew(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){L("MemoryPersistence","Starting transaction:",e);const i=new Aw(this.ai.next());return this.referenceDelegate.Ti(),s(i).next((r=>this.referenceDelegate.Ii(i).next((()=>r)))).toPromise().then((r=>(i.raiseOnCommittedEvent(),r)))}Ei(e,t){return C.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class Aw extends Jv{constructor(e){super(),this.currentSequenceNumber=e}}class ka{constructor(e){this.persistence=e,this.Ri=new Aa,this.Ai=null}static Vi(e){return new ka(e)}get di(){if(this.Ai)return this.Ai;throw q(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),C.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),C.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((i=>this.di.add(i.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((r=>this.di.add(r.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.di,(s=>{const i=U.fromPath(s);return this.mi(e,i).next((r=>{r||t.removeEntry(i,B.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return C.or([()=>C.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Yi{constructor(e,t){this.persistence=e,this.fi=new mn((s=>Zv(s.path)),((s,i)=>s.isEqual(i))),this.garbageCollector=mw(this,t)}static Vi(e,t){return new Yi(e,t)}Ti(){}Ii(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((i=>s+i))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return C.forEach(this.fi,((s,i)=>this.wr(e,s,i).next((r=>r?C.resolve():t(i)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const i=this.persistence.getRemoteDocumentCache(),r=i.newChangeBuffer();return i.ni(e,(a=>this.wr(e,a,t).next((c=>{c||(s++,r.removeEntry(a,B.min()))})))).next((()=>r.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),C.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),C.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Pi(e.data.value)),t}wr(e,t,s){return C.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.fi.get(t);return C.resolve(i!==void 0&&i>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,t,s,i){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=i}static Es(e,t){let s=Y(),i=Y();for(const r of t.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Ca(e,t.fromCache,s,i)}}/**
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
 */class kw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Cw{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return wp()?8:Yv(Se())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,i){const r={result:null};return this.gs(e,t).next((a=>{r.result=a})).next((()=>{if(!r.result)return this.ps(e,t,i,s).next((a=>{r.result=a}))})).next((()=>{if(r.result)return;const a=new kw;return this.ys(e,t,a).next((c=>{if(r.result=c,this.As)return this.ws(e,t,a,c.size)}))})).next((()=>r.result))}ws(e,t,s,i){return s.documentReadCount<this.Vs?(bn()<=z.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",En(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),C.resolve()):(bn()<=z.DEBUG&&L("QueryEngine","Query:",En(t),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.ds*i?(bn()<=z.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",En(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,st(t))):C.resolve())}gs(e,t){if(Kl(t))return C.resolve(null);let s=st(t);return this.indexManager.getIndexType(e,s).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=Vo(t,null,"F"),s=st(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((r=>{const a=Y(...r);return this.fs.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,s).next((u=>{const d=this.bs(t,c);return this.Ss(t,d,a,u.readTime)?this.gs(e,Vo(t,null,"F")):this.Ds(e,d,t,u)}))))})))))}ps(e,t,s,i){return Kl(t)||i.isEqual(B.min())?C.resolve(null):this.fs.getDocuments(e,s).next((r=>{const a=this.bs(t,r);return this.Ss(t,a,s,i)?C.resolve(null):(bn()<=z.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),En(t)),this.Ds(e,a,t,Gv(i,Vs)).next((c=>c)))}))}bs(e,t){let s=new ge(fd(e));return t.forEach(((i,r)=>{vr(e,r)&&(s=s.add(r))})),s}Ss(e,t,s,i){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}ys(e,t,s){return bn()<=z.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",En(t)),this.fs.getDocumentsMatchingQuery(e,t,Ut.min(),s)}Ds(e,t,s,i){return this.fs.getDocumentsMatchingQuery(e,s,i).next((r=>(t.forEach((a=>{r=r.insert(a.key,a)})),r)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="LocalStore",Rw=3e8;class Pw{constructor(e,t,s,i){this.persistence=e,this.Cs=t,this.serializer=i,this.vs=new le(W),this.Fs=new mn((r=>wa(r)),ba),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new vw(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function xw(n,e,t,s){return new Pw(n,e,t,s)}async function Dd(n,e){const t=J(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let i;return t.mutationQueue.getAllMutationBatches(s).next((r=>(i=r,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((r=>{const a=[],c=[];let u=Y();for(const d of i){a.push(d.batchId);for(const g of d.mutations)u=u.add(g.key)}for(const d of r){c.push(d.batchId);for(const g of d.mutations)u=u.add(g.key)}return t.localDocuments.getDocuments(s,u).next((d=>({Ns:d,removedBatchIds:a,addedBatchIds:c})))}))}))}function Ld(n){const e=J(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function Dw(n,e){const t=J(n),s=e.snapshotVersion;let i=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});i=t.vs;const c=[];e.targetChanges.forEach(((g,w)=>{const I=i.get(w);if(!I)return;c.push(t.li.removeMatchingKeys(r,g.removedDocuments,w).next((()=>t.li.addMatchingKeys(r,g.addedDocuments,w))));let R=I.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(w)!==null?R=R.withResumeToken(we.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):g.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(g.resumeToken,s)),i=i.insert(w,R),(function(V,O,G){return V.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=Rw?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0})(I,R,g)&&c.push(t.li.updateTargetData(r,R))}));let u=Ht(),d=Y();if(e.documentUpdates.forEach((g=>{e.resolvedLimboDocuments.has(g)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(r,g))})),c.push(Lw(r,a,e.documentUpdates).next((g=>{u=g.Bs,d=g.Ls}))),!s.isEqual(B.min())){const g=t.li.getLastRemoteSnapshotVersion(r).next((w=>t.li.setTargetsMetadata(r,r.currentSequenceNumber,s)));c.push(g)}return C.waitFor(c).next((()=>a.apply(r))).next((()=>t.localDocuments.getLocalViewOfDocuments(r,u,d))).next((()=>u))})).then((r=>(t.vs=i,r)))}function Lw(n,e,t){let s=Y(),i=Y();return t.forEach((r=>s=s.add(r))),e.getEntries(n,s).next((r=>{let a=Ht();return t.forEach(((c,u)=>{const d=r.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(B.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):L(Ra,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)})),{Bs:a,Ls:i}}))}function Nw(n,e){const t=J(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let i;return t.li.getTargetData(s,e).next((r=>r?(i=r,C.resolve(i)):t.li.allocateTargetId(s).next((a=>(i=new Dt(e,a,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,i).next((()=>i)))))))})).then((s=>{const i=t.vs.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function Bo(n,e,t){const s=J(n),i=s.vs.get(e),r=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",r,(a=>s.persistence.referenceDelegate.removeTarget(a,i)))}catch(a){if(!Yn(a))throw a;L(Ra,`Failed to update sequence numbers for target ${e}: ${a}`)}s.vs=s.vs.remove(e),s.Fs.delete(i.target)}function ou(n,e,t){const s=J(n);let i=B.min(),r=Y();return s.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,d,g){const w=J(u),I=w.Fs.get(g);return I!==void 0?C.resolve(w.vs.get(I)):w.li.getTargetData(d,g)})(s,a,st(e)).next((c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(a,c.targetId).next((u=>{r=u}))})).next((()=>s.Cs.getDocumentsMatchingQuery(a,e,t?i:B.min(),t?r:Y()))).next((c=>(Ow(s,I_(e),c),{documents:c,ks:r})))))}function Ow(n,e,t){let s=n.Ms.get(e)||B.min();t.forEach(((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)})),n.Ms.set(e,s)}class au{constructor(){this.activeTargetIds=P_()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Mw{constructor(){this.vo=new au,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new au,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Vw{Mo(e){}shutdown(){}}/**
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
 */const cu="ConnectivityMonitor";class lu{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){L(cu,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){L(cu,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let wi=null;function qo(){return wi===null?wi=(function(){return 268435456+Math.round(2147483648*Math.random())})():wi++,"0x"+wi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho="RestConnection",$w={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Fw{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${i}`,this.$o=this.databaseId.database===Gi?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Wo(e,t,s,i,r){const a=qo(),c=this.Qo(e,t.toUriEncodedString());L(ho,`Sending RPC '${e}' ${a}:`,c,s);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,r);const{host:d}=new URL(c),g=qn(d);return this.zo(e,c,u,s,g).then((w=>(L(ho,`Received RPC '${e}' ${a}: `,w),w)),(w=>{throw pn(ho,`RPC '${e}' ${a} failed with error: `,w,"url: ",c,"request:",s),w}))}jo(e,t,s,i,r,a){return this.Wo(e,t,s,i,r)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Jn})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,r)=>e[r]=i)),s&&s.headers.forEach(((i,r)=>e[r]=i))}Qo(e,t){const s=$w[e];let i=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee="WebChannelConnection",ys=(n,e,t)=>{n.listen(e,(s=>{try{t(s)}catch(i){setTimeout((()=>{throw i}),0)}}))};class Pn extends Fw{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Pn.c_){const e=Qh();ys(e,Wh.STAT_EVENT,(t=>{t.stat===Ro.PROXY?L(Ee,"STAT_EVENT: detected buffering proxy"):t.stat===Ro.NOPROXY&&L(Ee,"STAT_EVENT: detected no buffering proxy")})),Pn.c_=!0}}zo(e,t,s,i,r){const a=qo();return new Promise(((c,u)=>{const d=new Gh;d.setWithCredentials(!0),d.listenOnce(Kh.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Ci.NO_ERROR:const w=d.getResponseJson();L(Ee,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(w)),c(w);break;case Ci.TIMEOUT:L(Ee,`RPC '${e}' ${a} timed out`),u(new $(x.DEADLINE_EXCEEDED,"Request time out"));break;case Ci.HTTP_ERROR:const I=d.getStatus();if(L(Ee,`RPC '${e}' ${a} failed with status:`,I,"response text:",d.getResponseText()),I>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const N=R==null?void 0:R.error;if(N&&N.status&&N.message){const V=(function(G){const Z=G.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(Z)>=0?Z:x.UNKNOWN})(N.status);u(new $(V,N.message))}else u(new $(x.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new $(x.UNAVAILABLE,"Connection failed."));break;default:q(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{L(Ee,`RPC '${e}' ${a} completed.`)}}));const g=JSON.stringify(i);L(Ee,`RPC '${e}' ${a} sending request:`,i),d.send(t,"POST",g,s,15)}))}T_(e,t,s){const i=qo(),r=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const d=r.join("");L(Ee,`Creating RPC '${e}' stream ${i}: ${d}`,c);const g=a.createWebChannel(d,c);this.I_(g);let w=!1,I=!1;const R=new Uw({Ho:N=>{I?L(Ee,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(w||(L(Ee,`Opening RPC '${e}' stream ${i} transport.`),g.open(),w=!0),L(Ee,`RPC '${e}' stream ${i} sending:`,N),g.send(N))},Jo:()=>g.close()});return ys(g,bs.EventType.OPEN,(()=>{I||(L(Ee,`RPC '${e}' stream ${i} transport opened.`),R.i_())})),ys(g,bs.EventType.CLOSE,(()=>{I||(I=!0,L(Ee,`RPC '${e}' stream ${i} transport closed`),R.o_(),this.E_(g))})),ys(g,bs.EventType.ERROR,(N=>{I||(I=!0,pn(Ee,`RPC '${e}' stream ${i} transport errored. Name:`,N.name,"Message:",N.message),R.o_(new $(x.UNAVAILABLE,"The operation could not be completed")))})),ys(g,bs.EventType.MESSAGE,(N=>{var V;if(!I){const O=N.data[0];re(!!O,16349);const G=O,Z=(G==null?void 0:G.error)||((V=G[0])==null?void 0:V.error);if(Z){L(Ee,`RPC '${e}' stream ${i} received error:`,Z);const j=Z.status;let K=(function(b){const y=ue[b];if(y!==void 0)return bd(y)})(j),ee=Z.message;j==="NOT_FOUND"&&ee.includes("database")&&ee.includes("does not exist")&&ee.includes(this.databaseId.database)&&pn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),K===void 0&&(K=x.INTERNAL,ee="Unknown error status: "+j+" with message "+Z.message),I=!0,R.o_(new $(K,ee)),g.close()}else L(Ee,`RPC '${e}' stream ${i} received:`,O),R.__(O)}})),Pn.u_(),setTimeout((()=>{R.s_()}),0),R}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Jh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(n){return new Pn(n)}function fo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(n){return new W_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pn.c_=!1;class Od{constructor(e,t,s=1e3,i=1.5,r=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=i,this.V_=r,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-s);i>0&&L("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu="PersistentStream";class Bw{constructor(e,t,s,i,r,a,c,u){this.Ci=e,this.b_=s,this.S_=i,this.connection=r,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Od(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===x.RESOURCE_EXHAUSTED?(mt(t.toString()),mt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,i])=>{this.D_===t&&this.G_(s,i)}),(s=>{e((()=>{const i=new $(x.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(i)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((i=>{s((()=>this.z_(i)))})),this.stream.onMessage((i=>{s((()=>++this.F_==1?this.H_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return L(uu,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(L(uu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class qw extends Bw{constructor(e,t,s,i,r,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,i,a),this.serializer=r}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Z_(this.serializer,e),s=(function(r){if(!("targetChange"in r))return B.min();const a=r.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?Rn(a.readTime):B.min()})(e);return this.listener.J_(t,s)}Z_(e){const t={};t.database=nu(this.serializer),t.addTarget=(function(r,a){let c;const u=a.target;if(c=Mo(u)?{documents:ew(r,u)}:{query:tw(r,u).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=J_(r,a.resumeToken);const d=Uo(r,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(B.min())>0){c.readTime=Q_(r,a.snapshotVersion.toTimestamp());const d=Uo(r,a.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,e);const s=sw(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=nu(this.serializer),t.removeTarget=e,this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{}class zw extends Hw{constructor(e,t,s,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new $(x.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,a])=>this.connection.Wo(e,jo(t,s),i,r,a))).catch((r=>{throw r.name==="FirebaseError"?(r.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new $(x.UNKNOWN,r.toString())}))}jo(e,t,s,i,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.jo(e,jo(t,s),i,a,c,r))).catch((a=>{throw a.name==="FirebaseError"?(a.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new $(x.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function Gw(n,e,t,s){return new zw(n,e,t,s)}class Kw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */const Un="RemoteStore";class Ww{constructor(e,t,s,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=r,this.Aa.Mo((a=>{s.enqueueAndForget((async()=>{Xs(this)&&(L(Un,"Restarting streams for network reachability change."),await(async function(u){const d=J(u);d.Ea.add(4),await Ys(d),d.Va.set("Unknown"),d.Ea.delete(4),await Er(d)})(this))}))})),this.Va=new Kw(s,i)}}async function Er(n){if(Xs(n))for(const e of n.Ra)await e(!0)}async function Ys(n){for(const e of n.Ra)await e(!1)}function Md(n,e){const t=J(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),La(t)?Da(t):Xn(t).O_()&&xa(t,e))}function Pa(n,e){const t=J(n),s=Xn(t);t.Ia.delete(e),s.O_()&&Vd(t,e),t.Ia.size===0&&(s.O_()?s.L_():Xs(t)&&t.Va.set("Unknown"))}function xa(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Xn(n).Z_(e)}function Vd(n,e){n.da.$e(e),Xn(n).X_(e)}function Da(n){n.da=new H_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Xn(n).start(),n.Va.ua()}function La(n){return Xs(n)&&!Xn(n).x_()&&n.Ia.size>0}function Xs(n){return J(n).Ea.size===0}function $d(n){n.da=void 0}async function Qw(n){n.Va.set("Online")}async function Jw(n){n.Ia.forEach(((e,t)=>{xa(n,e)}))}async function Yw(n,e){$d(n),La(n)?(n.Va.ha(e),Da(n)):n.Va.set("Unknown")}async function Xw(n,e,t){if(n.Va.set("Online"),e instanceof Td&&e.state===2&&e.cause)try{await(async function(i,r){const a=r.cause;for(const c of r.targetIds)i.Ia.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.Ia.delete(c),i.da.removeTarget(c))})(n,e)}catch(s){L(Un,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await hu(n,s)}else if(e instanceof Di?n.da.Xe(e):e instanceof Ed?n.da.st(e):n.da.tt(e),!t.isEqual(B.min()))try{const s=await Ld(n.localStore);t.compareTo(s)>=0&&await(function(r,a){const c=r.da.Tt(a);return c.targetChanges.forEach(((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const g=r.Ia.get(d);g&&r.Ia.set(d,g.withResumeToken(u.resumeToken,a))}})),c.targetMismatches.forEach(((u,d)=>{const g=r.Ia.get(u);if(!g)return;r.Ia.set(u,g.withResumeToken(we.EMPTY_BYTE_STRING,g.snapshotVersion)),Vd(r,u);const w=new Dt(g.target,u,d,g.sequenceNumber);xa(r,w)})),r.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(s){L(Un,"Failed to raise snapshot:",s),await hu(n,s)}}async function hu(n,e,t){if(!Yn(e))throw e;n.Ea.add(1),await Ys(n),n.Va.set("Offline"),t||(t=()=>Ld(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{L(Un,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Er(n)}))}async function du(n,e){const t=J(n);t.asyncQueue.verifyOperationInProgress(),L(Un,"RemoteStore received new credentials");const s=Xs(t);t.Ea.add(3),await Ys(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Er(t)}async function Zw(n,e){const t=J(n);e?(t.Ea.delete(2),await Er(t)):e||(t.Ea.add(2),await Ys(t),t.Va.set("Unknown"))}function Xn(n){return n.ma||(n.ma=(function(t,s,i){const r=J(t);return r.sa(),new qw(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)})(n.datastore,n.asyncQueue,{Zo:Qw.bind(null,n),Yo:Jw.bind(null,n),t_:Yw.bind(null,n),J_:Xw.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),La(n)?Da(n):n.Va.set("Unknown")):(await n.ma.stop(),$d(n))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,t,s,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Cn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,i,r){const a=Date.now()+s,c=new Na(e,t,a,i,r);return c.start(s),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fd(n,e){if(mt("AsyncQueue",`${e}: ${n}`),Yn(n))return new $(x.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{static emptySet(e){return new xn(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||U.comparator(t.key,s.key):(t,s)=>U.comparator(t.key,s.key),this.keyedMap=Es(),this.sortedSet=new le(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof xn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class fu{constructor(){this.ga=new le(U.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):q(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class jn{constructor(e,t,s,i,r,a,c,u,d){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,s,i,r){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new jn(e,t,xn.emptySet(t),a,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==s[i].type||!t[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class tb{constructor(){this.queries=pu(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const i=J(t),r=i.queries;i.queries=pu(),r.forEach(((a,c)=>{for(const u of c.ba)u.onError(s)}))})(this,new $(x.ABORTED,"Firestore shutting down"))}}function pu(){return new mn((n=>dd(n)),yr)}async function nb(n,e){const t=J(n);let s=3;const i=e.query;let r=t.queries.get(i);r?!r.Sa()&&e.Da()&&(s=2):(r=new eb,s=e.Da()?0:1);try{switch(s){case 0:r.wa=await t.onListen(i,!0);break;case 1:r.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const c=Fd(a,`Initialization of query '${En(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,r),r.ba.push(e),e.va(t.onlineState),r.wa&&e.Fa(r.wa)&&Oa(t)}async function sb(n,e){const t=J(n),s=e.query;let i=3;const r=t.queries.get(s);if(r){const a=r.ba.indexOf(e);a>=0&&(r.ba.splice(a,1),r.ba.length===0?i=e.Da()?0:1:!r.Sa()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function ib(n,e){const t=J(n);let s=!1;for(const i of e){const r=i.query,a=t.queries.get(r);if(a){for(const c of a.ba)c.Fa(i)&&(s=!0);a.wa=i}}s&&Oa(t)}function rb(n,e,t){const s=J(n),i=s.queries.get(e);if(i)for(const r of i.ba)r.onError(t);s.queries.delete(e)}function Oa(n){n.Ca.forEach((e=>{e.next()}))}var Ho,mu;(mu=Ho||(Ho={})).Ma="default",mu.Cache="cache";class ob{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new jn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.Ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=jn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ho.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e){this.key=e}}class jd{constructor(e){this.key=e}}class ab{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Y(),this.mutatedKeys=Y(),this.eu=fd(e),this.tu=new xn(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new fu,i=t?t.tu:this.tu;let r=t?t.mutatedKeys:this.mutatedKeys,a=i,c=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((g,w)=>{const I=i.get(g),R=vr(this.query,w)?w:null,N=!!I&&this.mutatedKeys.has(I.key),V=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let O=!1;I&&R?I.data.isEqual(R.data)?N!==V&&(s.track({type:3,doc:R}),O=!0):this.su(I,R)||(s.track({type:2,doc:R}),O=!0,(u&&this.eu(R,u)>0||d&&this.eu(R,d)<0)&&(c=!0)):!I&&R?(s.track({type:0,doc:R}),O=!0):I&&!R&&(s.track({type:1,doc:I}),O=!0,(u||d)&&(c=!0)),O&&(R?(a=a.add(R),r=V?r.add(g):r.delete(g)):(a=a.delete(g),r=r.delete(g)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const g=this.query.limitType==="F"?a.last():a.first();a=a.delete(g.key),r=r.delete(g.key),s.track({type:1,doc:g})}return{tu:a,iu:s,Ss:c,mutatedKeys:r}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,i){const r=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((g,w)=>(function(R,N){const V=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q(20277,{Vt:O})}};return V(R)-V(N)})(g.type,w.type)||this.eu(g.doc,w.doc))),this.ou(s),i=i??!1;const c=t&&!i?this._u():[],u=this.Ya.size===0&&this.current&&!i?1:0,d=u!==this.Xa;return this.Xa=u,a.length!==0||d?{snapshot:new jn(this.query,e.tu,r,a,e.mutatedKeys,u===0,d,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new fu,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Y(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new jd(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new Ud(s))})),t}cu(e){this.Za=e.ks,this.Ya=Y();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return jn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Ma="SyncEngine";class cb{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class lb{constructor(e){this.key=e,this.hu=!1}}class ub{constructor(e,t,s,i,r,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new mn((c=>dd(c)),yr),this.Iu=new Map,this.Eu=new Set,this.Ru=new le(U.comparator),this.Au=new Map,this.Vu=new Aa,this.du={},this.mu=new Map,this.fu=Fn.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function hb(n,e,t=!0){const s=Gd(n);let i;const r=s.Tu.get(e);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.lu()):i=await Bd(s,e,t,!0),i}async function db(n,e){const t=Gd(n);await Bd(t,e,!0,!1)}async function Bd(n,e,t,s){const i=await Nw(n.localStore,st(e)),r=i.targetId,a=n.sharedClientState.addLocalQueryTarget(r,t);let c;return s&&(c=await fb(n,e,r,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Md(n.remoteStore,i),c}async function fb(n,e,t,s,i){n.pu=(w,I,R)=>(async function(V,O,G,Z){let j=O.view.ru(G);j.Ss&&(j=await ou(V.localStore,O.query,!1).then((({documents:b})=>O.view.ru(b,j))));const K=Z&&Z.targetChanges.get(O.targetId),ee=Z&&Z.targetMismatches.get(O.targetId)!=null,te=O.view.applyChanges(j,V.isPrimaryClient,K,ee);return yu(V,O.targetId,te.au),te.snapshot})(n,w,I,R);const r=await ou(n.localStore,e,!0),a=new ab(e,r.ks),c=a.ru(r.documents),u=Js.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",i),d=a.applyChanges(c,n.isPrimaryClient,u);yu(n,t,d.au);const g=new cb(e,t,a);return n.Tu.set(e,g),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function pb(n,e,t){const s=J(n),i=s.Tu.get(e),r=s.Iu.get(i.targetId);if(r.length>1)return s.Iu.set(i.targetId,r.filter((a=>!yr(a,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await Bo(s.localStore,i.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(i.targetId),t&&Pa(s.remoteStore,i.targetId),zo(s,i.targetId)})).catch(dr)):(zo(s,i.targetId),await Bo(s.localStore,i.targetId,!0))}async function mb(n,e){const t=J(n),s=t.Tu.get(e),i=t.Iu.get(s.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Pa(t.remoteStore,s.targetId))}async function qd(n,e){const t=J(n);try{const s=await Dw(t.localStore,e);e.targetChanges.forEach(((i,r)=>{const a=t.Au.get(r);a&&(re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.hu=!0:i.modifiedDocuments.size>0?re(a.hu,14607):i.removedDocuments.size>0&&(re(a.hu,42227),a.hu=!1))})),await zd(t,s,e)}catch(s){await dr(s)}}function gu(n,e,t){const s=J(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const i=[];s.Tu.forEach(((r,a)=>{const c=a.view.va(e);c.snapshot&&i.push(c.snapshot)})),(function(a,c){const u=J(a);u.onlineState=c;let d=!1;u.queries.forEach(((g,w)=>{for(const I of w.ba)I.va(c)&&(d=!0)})),d&&Oa(u)})(s.eventManager,e),i.length&&s.Pu.J_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function gb(n,e,t){const s=J(n);s.sharedClientState.updateQueryState(e,"rejected",t);const i=s.Au.get(e),r=i&&i.key;if(r){let a=new le(U.comparator);a=a.insert(r,Ie.newNoDocument(r,B.min()));const c=Y().add(r),u=new br(B.min(),new Map,new le(W),a,c);await qd(s,u),s.Ru=s.Ru.remove(r),s.Au.delete(e),Va(s)}else await Bo(s.localStore,e,!1).then((()=>zo(s,e,t))).catch(dr)}function zo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((s=>{n.Vu.containsKey(s)||Hd(n,s)}))}function Hd(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(Pa(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Va(n))}function yu(n,e,t){for(const s of t)s instanceof Ud?(n.Vu.addReference(s.key,e),yb(n,s)):s instanceof jd?(L(Ma,"Document no longer in limbo: "+s.key),n.Vu.removeReference(s.key,e),n.Vu.containsKey(s.key)||Hd(n,s.key)):q(19791,{wu:s})}function yb(n,e){const t=e.key,s=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(s)||(L(Ma,"New document in limbo: "+t),n.Eu.add(s),Va(n))}function Va(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new U(ie.fromString(e)),s=n.fu.next();n.Au.set(s,new lb(t)),n.Ru=n.Ru.insert(t,s),Md(n.remoteStore,new Dt(st(Ea(t.path)),s,"TargetPurposeLimboResolution",fr.ce))}}async function zd(n,e,t){const s=J(n),i=[],r=[],a=[];s.Tu.isEmpty()||(s.Tu.forEach(((c,u)=>{a.push(s.pu(u,e,t).then((d=>{var g;if((d||t)&&s.isPrimaryClient){const w=d?!d.fromCache:(g=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:g.current;s.sharedClientState.updateQueryState(u.targetId,w?"current":"not-current")}if(d){i.push(d);const w=Ca.Es(u.targetId,d);r.push(w)}})))})),await Promise.all(a),s.Pu.J_(i),await(async function(u,d){const g=J(u);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>C.forEach(d,(I=>C.forEach(I.Ts,(R=>g.persistence.referenceDelegate.addReference(w,I.targetId,R))).next((()=>C.forEach(I.Is,(R=>g.persistence.referenceDelegate.removeReference(w,I.targetId,R)))))))))}catch(w){if(!Yn(w))throw w;L(Ra,"Failed to update sequence numbers: "+w)}for(const w of d){const I=w.targetId;if(!w.fromCache){const R=g.vs.get(I),N=R.snapshotVersion,V=R.withLastLimboFreeSnapshotVersion(N);g.vs=g.vs.insert(I,V)}}})(s.localStore,r))}async function vb(n,e){const t=J(n);if(!t.currentUser.isEqual(e)){L(Ma,"User change. New user:",e.toKey());const s=await Dd(t.localStore,e);t.currentUser=e,(function(r,a){r.mu.forEach((c=>{c.forEach((u=>{u.reject(new $(x.CANCELLED,a))}))})),r.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await zd(t,s.Ns)}}function _b(n,e){const t=J(n),s=t.Au.get(e);if(s&&s.hu)return Y().add(s.key);{let i=Y();const r=t.Iu.get(e);if(!r)return i;for(const a of r){const c=t.Tu.get(a);i=i.unionWith(c.view.nu)}return i}}function Gd(n){const e=J(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=qd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_b.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gb.bind(null,e),e.Pu.J_=ib.bind(null,e.eventManager),e.Pu.yu=rb.bind(null,e.eventManager),e}class Xi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Nd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return xw(this.persistence,new Cw,e.initialUser,this.serializer)}Cu(e){return new xd(ka.Vi,this.serializer)}Du(e){return new Mw}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xi.provider={build:()=>new Xi};class wb extends Xi{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){re(this.persistence.referenceDelegate instanceof Yi,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new fw(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ne.withCacheSize(this.cacheSizeBytes):Ne.DEFAULT;return new xd((s=>Yi.Vi(s,t)),this.serializer)}}class Go{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>gu(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=vb.bind(null,this.syncEngine),await Zw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new tb})()}createDatastore(e){const t=Nd(e.databaseInfo.databaseId),s=jw(e.databaseInfo);return Gw(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,i,r,a,c){return new Ww(s,i,r,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>gu(this.syncEngine,t,0)),(function(){return lu.v()?new lu:new Vw})())}createSyncEngine(e,t){return(function(i,r,a,c,u,d,g){const w=new ub(i,r,a,c,u,d);return g&&(w.gu=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(i){const r=J(i);L(Un,"RemoteStore shutting down."),r.Ea.add(5),await Ys(r),r.Aa.shutdown(),r.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Go.provider={build:()=>new Go};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bb{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):mt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt="FirestoreClient";class Eb{constructor(e,t,s,i,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=i,this.user=Te.UNAUTHENTICATED,this.clientId=Zh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,(async a=>{L(zt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(s,(a=>(L(zt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Cn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Fd(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function po(n,e){n.asyncQueue.verifyOperationInProgress(),L(zt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async i=>{s.isEqual(i)||(await Dd(e.localStore,i),s=i)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function vu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Tb(n);L(zt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>du(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,i)=>du(e.remoteStore,i))),n._onlineComponents=e}async function Tb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L(zt,"Using user provided OfflineComponentProvider");try{await po(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===x.FAILED_PRECONDITION||i.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;pn("Error using user provided cache. Falling back to memory cache: "+t),await po(n,new Xi)}}else L(zt,"Using default OfflineComponentProvider"),await po(n,new wb(void 0));return n._offlineComponents}async function Ib(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L(zt,"Using user provided OnlineComponentProvider"),await vu(n,n._uninitializedComponentsProvider._online)):(L(zt,"Using default OnlineComponentProvider"),await vu(n,new Go))),n._onlineComponents}async function _u(n){const e=await Ib(n),t=e.eventManager;return t.onListen=hb.bind(null,e.syncEngine),t.onUnlisten=pb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=db.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=mb.bind(null,e.syncEngine),t}function Sb(n,e,t,s){const i=new bb(s),r=new ob(e,i,t);return n.asyncQueue.enqueueAndForget((async()=>nb(await _u(n),r))),()=>{i.Nu(),n.asyncQueue.enqueueAndForget((async()=>sb(await _u(n),r)))}}/**
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
 */function Kd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab="ComponentProvider",wu=new Map;function kb(n,e,t,s,i){return new s_(n,e,t,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,Kd(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd="firestore.googleapis.com",bu=!0;class Eu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new $(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Wd,this.ssl=bu}else this.host=e.host,this.ssl=e.ssl??bu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Pd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<hw)throw new $(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Kd(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,i){return s.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class $a{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Eu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Eu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new Dv;switch(s.type){case"firstParty":return new Mv(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new $(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=wu.get(t);s&&(L(Ab,"Removing Datastore"),wu.delete(t),s.terminate())})(this),Promise.resolve()}}function Cb(n,e,t,s={}){var d;n=Ri(n,$a);const i=qn(e),r=n._getSettings(),a={...r,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;i&&(Gu(`https://${c}`),Ku("Firestore",!0)),r.host!==Wd&&r.host!==c&&pn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...r,host:c,ssl:i,emulatorOptions:s};if(!ln(u,a)&&(n._setSettings(u),s.mockUserToken)){let g,w;if(typeof s.mockUserToken=="string")g=s.mockUserToken,w=Te.MOCK_USER;else{g=hp(s.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const I=s.mockUserToken.sub||s.mockUserToken.user_id;if(!I)throw new $(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new Te(I)}n._authCredentials=new Lv(new Xh(g,w))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Tr(this.firestore,e,this._query)}}class $e{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $e(this.firestore,e,this._key)}toJSON(){return{type:$e._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Ws(t,$e._jsonSchema))return new $e(e,s||null,new U(ie.fromString(t.referencePath)))}}$e._jsonSchemaVersion="firestore/documentReference/1.0",$e._jsonSchema={type:de("string",$e._jsonSchemaVersion),referencePath:de("string")};class Dn extends Tr{constructor(e,t,s){super(e,t,Ea(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $e(this.firestore,null,new U(e))}withConverter(e){return new Dn(this.firestore,e,this._path)}}function en(n,e,...t){if(n=Fe(n),Bv("collection","path",e),n instanceof $a){const s=ie.fromString(e,...t);return Nl(s),new Dn(n,null,s)}{if(!(n instanceof $e||n instanceof Dn))throw new $(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ie.fromString(e,...t));return Nl(s),new Dn(n.firestore,null,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu="AsyncQueue";class Iu{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Od(this,"async_queue_retry"),this._c=()=>{const s=fo();s&&L(Tu,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=fo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=fo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Cn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Yn(e))throw e;L(Tu,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,mt("INTERNAL UNHANDLED ERROR: ",Su(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=Na.createAndSchedule(this,e,t,s,(r=>this.hc(r)));return this.tc.push(i),i}uc(){this.nc&&q(47125,{Pc:Su(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Su(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Ko extends $a{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=new Iu,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Iu(e),this._firestoreClient=void 0,await e}}}function Rb(n,e){const t=typeof n=="object"?n:Yu(),s=typeof n=="string"?n:Gi,i=ta(t,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=lp("firestore");r&&Cb(i,...r)}return i}function Pb(n){if(n._terminated)throw new $(x.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||xb(n),n._firestoreClient}function xb(n){var s,i,r,a;const e=n._freezeSettings(),t=kb(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(i=n._app)==null?void 0:i.options.apiKey,e);n._componentsProvider||(r=e.localCache)!=null&&r._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Eb(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(u){const d=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(d),_online:d}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ze(we.fromBase64String(e))}catch(t){throw new $(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ze(we.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ze._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ws(e,Ze._jsonSchema))return Ze.fromBase64String(e.bytes)}}Ze._jsonSchemaVersion="firestore/bytes/1.0",Ze._jsonSchema={type:de("string",Ze._jsonSchemaVersion),bytes:de("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new $(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Re(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new $(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new $(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return W(this._lat,e._lat)||W(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Vt._jsonSchemaVersion}}static fromJSON(e){if(Ws(e,Vt._jsonSchema))return new Vt(e.latitude,e.longitude)}}Vt._jsonSchemaVersion="firestore/geoPoint/1.0",Vt._jsonSchema={type:de("string",Vt._jsonSchemaVersion),latitude:de("number"),longitude:de("number")};/**
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
 */class $t{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0})(this._values,e._values)}toJSON(){return{type:$t._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ws(e,$t._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new $t(e.vectorValues);throw new $(x.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}$t._jsonSchemaVersion="firestore/vectorValue/1.0",$t._jsonSchema={type:de("string",$t._jsonSchemaVersion),vectorValues:de("object")};function Jd(n,e,t){if((e=Fe(e))instanceof Qd)return e._internalPath;if(typeof e=="string")return Lb(n,e);throw Wo("Field path arguments must be of type string or ",n)}const Db=new RegExp("[~\\*/\\[\\]]");function Lb(n,e,t){if(e.search(Db)>=0)throw Wo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new Qd(...e.split("."))._internalPath}catch{throw Wo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function Wo(n,e,t,s,i){let r=`Function ${e}() called with invalid data`;r+=". ";let a="";return new $(x.INVALID_ARGUMENT,r+n+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{convertValue(e,t="none"){switch(qt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Bt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw q(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Qs(e,((i,r)=>{s[i]=this.convertValue(r,t)})),s}convertVectorValue(e){var s,i,r;const t=(r=(i=(s=e.fields)==null?void 0:s[Do].arrayValue)==null?void 0:i.values)==null?void 0:r.map((a=>ce(a.doubleValue)));return new $t(t)}convertGeoPoint(e){return new Vt(ce(e.latitude),ce(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=mr(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp($s(e));default:return null}}convertTimestamp(e){const t=jt(e);return new he(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=ie.fromString(e);re(Rd(s),9688,{name:e});const i=new Fs(s.get(1),s.get(3)),r=new U(s.popFirst(5));return i.isEqual(t)||mt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */class Yd extends Nb{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ze(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new $e(this.firestore,null,t)}}const Au="@firebase/firestore",ku="4.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const i=t;for(const r of s)if(r in i&&typeof i[r]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,t,s,i,r){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new $e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ob(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Jd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ob extends Xd{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mb(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new $(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Is{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cn extends Xd{constructor(e,t,s,i,r,a){super(e,t,s,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Li(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Jd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(x.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=cn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}cn._jsonSchemaVersion="firestore/documentSnapshot/1.0",cn._jsonSchema={type:de("string",cn._jsonSchemaVersion),bundleSource:de("string","DocumentSnapshot"),bundleName:de("string"),bundle:de("string")};class Li extends cn{data(e={}){return super.data(e)}}class Ln{constructor(e,t,s,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Is(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Li(this._firestore,this._userDataWriter,s.key,s,new Is(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new $(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,r){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map((c=>{const u=new Li(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Is(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((c=>r||c.type!==3)).map((c=>{const u=new Li(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Is(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,g=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),g=a.indexOf(c.doc.key)),{type:Vb(c.type),doc:u,oldIndex:d,newIndex:g}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(x.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ln._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Zh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],i=[];return this.docs.forEach((r=>{r._document!==null&&(t.push(r._document),s.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),i.push(r.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Vb(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q(61501,{type:n})}}/**
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
 */Ln._jsonSchemaVersion="firestore/querySnapshot/1.0",Ln._jsonSchema={type:de("string",Ln._jsonSchemaVersion),bundleSource:de("string","QuerySnapshot"),bundleName:de("string"),bundle:de("string")};function tn(n,...e){var d,g,w;n=Fe(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||Cu(e[s])||(t=e[s++]);const i={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Cu(e[s])){const I=e[s];e[s]=(d=I.next)==null?void 0:d.bind(I),e[s+1]=(g=I.error)==null?void 0:g.bind(I),e[s+2]=(w=I.complete)==null?void 0:w.bind(I)}let r,a,c;if(n instanceof $e)a=Ri(n.firestore,Ko),c=Ea(n._key.path),r={next:I=>{e[s]&&e[s]($b(a,n,I))},error:e[s+1],complete:e[s+2]};else{const I=Ri(n,Tr);a=Ri(I.firestore,Ko),c=I._query;const R=new Yd(a);r={next:N=>{e[s]&&e[s](new Ln(a,R,I,N))},error:e[s+1],complete:e[s+2]},Mb(n._query)}const u=Pb(a);return Sb(u,c,i,r)}function $b(n,e,t){const s=t.docs.get(e._key),i=new Yd(n);return new cn(n,i,e._key,s,new Is(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){xv(Hn),Nn(new un("firestore",((s,{instanceIdentifier:i,options:r})=>{const a=s.getProvider("app").getImmediate(),c=new Ko(new Nv(s.getProvider("auth-internal")),new Vv(a,s.getProvider("app-check-internal")),i_(a,i),a);return r={useFetchStreams:t,...r},c._setSettings(r),c}),"PUBLIC").setMultipleInstances(!0)),Ot(Au,ku,e),Ot(Au,ku,"esm2020")})();const nn=Rb($h);let ct=[];function Fb(n){if(Zd(),!n)return;const e=t=>t.docs.map(s=>({id:s.id,...s.data()}));ct.push(tn(en(nn,`households/${n}/inventory`),t=>{var s,i;f.inv=e(t),ae("synced"),(s=M.renderAll)==null||s.call(M),(i=M.renderSum)==null||i.call(M)},t=>{console.warn("realtime inv error:",t),ae("error")})),ct.push(tn(en(nn,`households/${n}/shopping`),t=>{var s,i;f.shop=e(t),ae("synced"),(s=M.renderShop)==null||s.call(M),(i=M.renderSum)==null||i.call(M)},t=>{console.warn("realtime shop error:",t),ae("error")})),ct.push(tn(en(nn,`households/${n}/recipes`),t=>{var s,i;f.recs=e(t),ae("synced"),(s=M.renderRecs)==null||s.call(M),(i=M.renderSum)==null||i.call(M)},t=>{console.warn("realtime recs error:",t),ae("error")})),ct.push(tn(en(nn,`households/${n}/mealplan`),t=>{const s={};e(t).forEach(i=>{i.date&&i.meal&&(s[i.date]=i.meal)}),f.mp=s,ae("synced")},t=>{console.warn("realtime mp error:",t)})),ct.push(tn(en(nn,`households/${n}/settings`),t=>{const s=e(t).find(i=>i.id==="config");s&&(f.cfg={...Mi,...s})},t=>{console.warn("realtime settings error:",t)})),ct.push(tn(en(nn,`households/${n}/cooklog`),t=>{f.cookLog=e(t).sort((s,i)=>new Date(i.loggedAt||i.date||0)-new Date(s.loggedAt||s.date||0))},t=>{console.warn("realtime cooklog error:",t)})),ct.push(tn(en(nn,`households/${n}/wastelog`),t=>{f.wasteLog=e(t).sort((s,i)=>new Date(i.loggedAt||i.date||0)-new Date(s.loggedAt||s.date||0))},t=>{console.warn("realtime wastelog error:",t)})),ae("synced"),console.log("[realtime] Listeners started for household:",n)}function Zd(){ct.forEach(n=>{try{n()}catch{}}),ct=[],console.log("[realtime] All listeners stopped")}function Fa(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(f.cfg.adults||"Bora").split(",")[0].trim(),s=p("grt");s&&(s.innerHTML=`${e}, <span>${t}</span>`);const i=p("hdt");i&&(i.textContent=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})),gn()}function Ua(){ef(),Ni==null||Ni()}let Ni=null;function Ub(n){Ni=n}function ef(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(f.cfg.adults||"Bora").split(",")[0].trim(),s=p("grt");s&&!s.innerHTML&&(s.innerHTML=`${e}, <span>${t}</span>`),gn(),Zs(),Bb(),qb(),Zn(),Gb(),tf()}function Zn(){const n=Pt(),e=f.mp[n],t=p("tnd"),s=p("tna"),i=p("tonight-main");i&&(i.onclick=function(){window.openMealM(n,"Today")}),e?(t&&(t.innerHTML=e),s&&(s.innerHTML=`<button class="btn bsm bp" onclick="event.stopPropagation();openCooked('${n}')">✓ Cooked</button><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${n}','Today')">Edit</button>`)):(t&&(t.innerHTML='<span style="font-size:.9rem;color:var(--mt);font-style:italic">No meal planned yet</span>'),s&&(s.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${n}','Today')">+ Plan dinner</button><button class="btn bsm bs" onclick="event.stopPropagation();showScreen('chat')">Ask Claude →</button>`))}function gn(){const n=["S","M","T","W","T","F","S"],e=new Date;e.setHours(0,0,0,0);const t=p("wgrd");t&&(t.innerHTML=Qn().map((s,i)=>{const r=s.toISOString().split("T")[0],a=s.getTime()===e.getTime(),c=f.mp[r];return`<div class="wd${a?" today":""}${c?" hm":""}" onclick="openMealM('${r}','${n[i]} ${s.getDate()}')"><div class="wdn">${n[i]}</div><div class="wdd">${s.getDate()}</div>${c?`<div class="wdm">${c.substring(0,10)}${c.length>10?"…":""}</div>`:""}</div>`}).join(""),jb())}function jb(){const n=p("variety-nudge");if(!n)return;const e=Qn().map(a=>f.mp[a.toISOString().split("T")[0]]).filter(Boolean);if(e.length<3){n.style.display="none";return}const t=e.some(a=>/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(a)),s=e.some(a=>/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner/i.test(a)),i={};e.forEach(a=>{const c=a.toLowerCase();i[c]=(i[c]||0)+1});const r=Object.entries(i).find(([,a])=>a>=3);r?(n.style.display="block",n.innerHTML="🔄 <strong>"+r[0]+"</strong> is planned "+r[1]+"× this week — maybe try something different?"):!t&&!s?(n.style.display="block",n.innerHTML="🌍 No Bangladeshi or Turkish dishes this week yet — ask Claude for ideas!"):t?s?n.style.display="none":(n.style.display="block",n.innerHTML="🇹🇷 No Turkish dishes this week — köfte or mercimek çorbası would be great!"):(n.style.display="block",n.innerHTML="🇧🇩 No Bangladeshi dishes this week — how about a dal or fish curry?")}function Zs(){const n=f.inv.filter(c=>{const u=it(c.expiry);return u&&(u.c==="expiring"||u.c==="expired")}).length,e=f.shop.filter(c=>!c.checked).length,t=p("home-exp-val"),s=p("home-exp-sub");t&&(n>0?(t.textContent=n+" item"+(n>1?"s":""),t.className="tc-val",t.style.color="var(--am)"):(t.textContent="All fresh!",t.className="tc-val tc-green")),s&&(s.textContent=n>0?"expiring soon":"Nothing in next 3 days");const i=p("home-shop-val"),r=p("home-shop-sub");i&&(i.textContent=e),r&&(r.textContent=e===1?"item to buy":e===0?"all stocked up":"items to buy");const a=p("sgrd");a&&(a.innerHTML=`<div class="sc" onclick="showScreen('inventory')"><div class="sci">🧺</div><div class="scv">${f.inv.length}</div><div class="scl">Items in stock</div></div><div class="sc${n>0?" warn":""}" onclick="showScreen('inventory')"><div class="sci">⏱</div><div class="scv">${n}</div><div class="scl">Expiring soon</div></div><div class="sc" onclick="showScreen('shopping')"><div class="sci">🛒</div><div class="scv">${e}</div><div class="scl">To buy</div></div><div class="sc" onclick="showScreen('recipes')"><div class="sci">📖</div><div class="scv">${f.recs.length}</div><div class="scl">Saved recipes</div></div>`)}function Bb(){const n=f.inv.filter(s=>{const i=it(s.expiry);return i&&(i.c==="expiring"||i.c==="expired")}).sort((s,i)=>new Date(s.expiry)-new Date(i.expiry)),e=p("exslbl"),t=p("expl");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(s=>{const i=it(s.expiry);return`<div class="exi${i.c==="expired"?" exp":""}" onclick="openAdj('${s.id}')"><div class="exn">${s.name}</div><div class="exd">${i.l}</div></div>`}).join("")}}function qb(){const n=f.inv.filter(s=>s.qty<=(s.lowStockThreshold||1)).sort((s,i)=>s.qty-i.qty),e=p("lowstocklbl"),t=p("lowstocklist");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(s=>`<div class="exi" style="border-color:var(--am)">
    <div style="display:flex;align-items:center;gap:10px;flex:1;cursor:pointer" onclick="openAdj('${s.id}')">
      <div class="exn">${s.name}</div>
      <div style="font-size:.74rem;color:var(--am);font-weight:600">${s.qty} ${s.unit}</div>
    </div>
    <button class="btn bsm bs" style="flex-shrink:0;font-size:.72rem" onclick="event.stopPropagation();addLowToShop('${s.id}')">🛒 Add to list</button>
  </div>`).join(""),zb(n.length)}}async function Hb(n){const e=f.inv.find(s=>s.id===n);if(!e)return;if(f.shop.find(s=>s.name.toLowerCase()===e.name.toLowerCase()&&!s.checked)){D(`${e.name} is already on your list`);return}await je({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"low-stock"}),D(`${e.name} added to shopping list 🛒`)}function zb(n){const e=p("nav-inventory");if(!e)return;const t=e.querySelector(".nav-badge");if(t&&t.remove(),n>0){const s=document.createElement("span");s.className="nav-badge",s.textContent=n,s.style.cssText="position:absolute;top:4px;right:calc(50% - 18px);background:var(--am);color:#0c0c0a;font-size:.58rem;font-weight:700;min-width:16px;height:16px;border-radius:8px;display:flex;align-items:center;justify-content:center;padding:0 4px",e.appendChild(s)}}async function Gb(){const n=p("activityfeed"),e=p("activitylbl");if(!n)return;const t=await Av();if(!t.length){e&&(e.style.display="none"),n.innerHTML="";return}e&&(e.style.display="flex");const s=i=>{const r=Date.now()-new Date(i).getTime(),a=Math.floor(r/6e4);if(a<1)return"just now";if(a<60)return a+"m ago";const c=Math.floor(a/60);if(c<24)return c+"h ago";const u=Math.floor(c/24);return u===1?"yesterday":u+"d ago"};n.innerHTML=t.slice(0,5).map(i=>`<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--b1)">
      <div style="width:28px;height:28px;border-radius:50%;background:var(--acd);display:flex;align-items:center;justify-content:center;font-size:.7rem;flex-shrink:0;color:var(--ac);font-weight:700">${(i.memberName||"?")[0].toUpperCase()}</div>
      <div style="flex:1;font-size:.82rem;color:var(--tx2);line-height:1.4"><strong style="color:var(--tx)">${(i.memberName||"Someone").replace(/</g,"&lt;")}</strong> ${(i.action||"").replace(/</g,"&lt;")} <strong>${(i.itemName||"").replace(/</g,"&lt;")}</strong></div>
      <div style="font-size:.68rem;color:var(--mt);flex-shrink:0">${s(i.timestamp)}</div>
    </div>`).join("")}function tf(){const n=["fridge","freezer","pantry"].map(t=>{const s=f.inv.filter(i=>i.location===t);return s.length?ma(t).toUpperCase()+`
`+s.map(i=>`- ${i.name}${i.brand?` (${i.brand})`:""}: ${i.qty} ${i.unit}`).join(`
`):""}).filter(Boolean).join(`

`),e=p("expbox");e&&(e.textContent=n||"No items yet.")}let Be=null,mo=!1,vs="";function Kb(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=p("shopAddMicOpt");e&&(e.style.display="")}function Ru(n){const e=p("micstatus");e&&e.classList.toggle("visible",n)}function nf(){if(mo&&Be){Be.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){D("Voice input not supported");return}Be=new n,Be.lang="en-US",Be.interimResults=!0,Be.maxAlternatives=1,Be.continuous=!1,vs="",mo=!0,Ru(!0),Be.onresult=e=>{let t="";for(let i=e.resultIndex;i<e.results.length;i++){const r=e.results[i][0].transcript;e.results[i].isFinal?vs+=r:t+=r}const s=p("shi");s&&(s.value=(vs+t).trim())},Be.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&D("Couldn't hear that — try again")},Be.onend=()=>{const e=(vs||"").trim();if(mo=!1,Be=null,vs="",Ru(!1),e){let t=e,s=1;const i=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),s=parseInt(r[2],10)||1):i&&(t=i[2].trim(),s=parseInt(i[1],10)||1);const a={id:Date.now().toString(),name:t,qty:s,checked:!1,src:"manual"};je(a),D(`Added "${e}" 🎤`),ja(a.id,t,"shop")}},Be.start()}function bi(n){const e=n.qty||1,t=`<span class="sh-qty${e===1?" sh-qty-one":""}" onclick="event.stopPropagation();openShQty('${n.id}')"> × ${e}</span>`,s=n.image?`<img src="${n.image}" class="sh-thumb" alt="" onerror="this.style.display='none'"/>`:"";return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="shop">
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
  </div>`}function es(){const n=(a,c)=>a.name.localeCompare(c.name),e=p("shlist"),t=f.shop.filter(a=>!a.checked).sort(n),s=f.shop.filter(a=>a.checked).sort(n),i=p("clrchk");i&&(i.style.display=s.length?"block":"none");const r=p("shsub");if(r&&(r.textContent=t.length+" items to buy"),!!e){if(!f.shop.length){e.innerHTML='<div class="es"><div class="ei">🛒</div><p>Your list is empty!<br/>Add items or use "Build from meal plan".</p></div>';return}if(f.aisleMode&&t.length){const a={};t.forEach(c=>{const u=Pv(c.name);a[u]||(a[u]=[]),a[u].push(c)}),e.innerHTML=Object.entries(a).sort().map(([c,u])=>`<div class="shsec">${c}</div>${u.map(bi).join("")}`).join("")+(s.length?`<div class="shsec">Done</div>${s.map(bi).join("")}`:"")}else e.innerHTML=(t.length?`<div class="shsec">To buy (${t.length})</div>${t.map(bi).join("")}`:"")+(s.length?`<div class="shsec">Done</div>${s.map(bi).join("")}`:"");if(f.selectMode==="shop"){document.querySelectorAll("#shlist .swipe-wrap").forEach(c=>{c.classList.add("selecting"),f.selectedIds.has(c.dataset.id)&&c.classList.add("selected")});const a=document.querySelector(".shbody");a&&(a.style.paddingLeft="52px")}}}function Wb(){const n=p("shi"),e=n.value.trim();if(!e)return;let t=e,s=1;const i=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),s=parseInt(r[2],10)||1):i&&(t=i[2].trim(),s=parseInt(i[1],10)||1);const a=p("addNoteInp"),c=a?a.value.trim():"",u={id:Date.now().toString(),name:t,qty:s,checked:!1,src:"manual"};c&&(u.note=c),je(u),n.value="",a&&(a.value="");const d=p("addNoteWrap");d&&(d.style.display="none"),Ir(),ja(u.id,t,"shop")}function Qb(){const n=p("addNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=p("addNoteInp");t&&t.focus()}}function Jb(){const n=p("shopAddBackdrop"),e=p("shopAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),setTimeout(()=>{const t=p("shi");t&&(t.value="",t.focus())},150)}function Ir(){const n=p("shopAddBackdrop"),e=p("shopAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}function Yb(){Ir(),window.openScanForList&&window.openScanForList()}function Xb(){Ir(),nf()}async function ja(n,e,t){if(!e||e.length<2)return;const s=p("enrichResults"),i=p("enrichTitle");if(!s)return;i&&(i.textContent=`Finding "${e}"…`),s.innerHTML='<div class="enrich-loading"><div class="spin" style="width:28px;height:28px;margin:0 auto 8px"></div>Searching products…</div>';const r=p("enrichBackdrop"),a=p("enrichSheet");r&&r.classList.add("active"),a&&a.classList.add("active");try{const d=(await(await fetch(`/api/text-search?q=${encodeURIComponent(e)}`)).json()).results||[];if(!d.length){Zi();return}i&&(i.textContent="Choose a match");let g=d.map((w,I)=>{const R=w.image?`<img src="${w.image}" class="enrich-img" alt="" onerror="this.style.display='none'"/>`:'<div class="enrich-img-ph">🛒</div>',N=w.brand?`<div class="enrich-brand">${w.brand}</div>`:"",V=w.category&&w.category!=="General"?`<div class="enrich-cat">${w.category}</div>`:"";return`<div class="enrich-row" onclick="pickEnrichResult(${I})">
        ${R}
        <div style="flex:1;min-width:0">
          <div class="enrich-name">${w.name}</div>
          ${N}${V}
        </div>
      </div>`}).join("");g+=`<button class="enrich-fallback" onclick="closeEnrichSheet()">
      <span style="font-size:1.1rem">📝</span>
      Just add "${e}" as typed
    </button>`,s.innerHTML=g,window._enrichCtx={itemId:n,query:e,list:t,results:d}}catch(c){console.warn("Text search failed:",c),Zi()}}function Zi(){const n=p("enrichBackdrop"),e=p("enrichSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),window._enrichCtx=null}function Zb(n){const e=window._enrichCtx;if(!e)return;const t=e.results[n];if(t){if(e.list==="shop"){const s=f.shop.find(i=>i.id===e.itemId);s&&je({...s,name:t.name,brand:t.brand||"",image:t.image||null,category:t.category||"",nutrition:t.nutrition||null,source:t.source||"search"})}else if(e.list==="inv"){const s=f.inv.find(i=>i.id===e.itemId);s&&Ue({...s,name:t.name,brand:t.brand||"",image:t.image||null,category:t.category||s.category,nutrition:t.nutrition||null,source:t.source||"search"})}Zi(),D(`Updated with "${t.name}" ✓`)}}function sf(n){if(!f.hid||!n)return;const e=Date.now().toString(36)+Math.random().toString(36).slice(2,6);X(`households/${f.hid}/completed_items/${e}`,{name:n,completedAt:new Date().toISOString()}).catch(t=>console.warn("recordCompleted error:",t))}function eE(n){const e=f.shop.find(s=>s.id===n);if(!e)return;const t=!e.checked;je({...e,checked:t}),t&&sf(e.name)}function tE(n,e){n.stopPropagation();const t=p("sne-"+e),s=p("sni-"+e);if(!t)return;t.classList.toggle("open")&&s&&(s.focus(),s.setSelectionRange(s.value.length,s.value.length))}function nE(n){const e=p("sni-"+n);if(!e)return;const t=f.shop.find(i=>i.id===n);if(!t)return;const s=e.value.trim();s!==(t.note||"")&&je({...t,note:s})}function sE(n){const e=p("sqe-"+n),t=p("sqi-"+n);if(!e)return;e.classList.toggle("open")&&t&&(t.focus(),t.select())}function iE(n,e){const t=p("sqi-"+n);if(!t)return;const s=Math.max(1,(parseInt(t.value,10)||1)+e);t.value=s,rf(n)}function rf(n){const e=p("sqi-"+n);if(!e)return;const t=f.shop.find(i=>i.id===n);if(!t)return;const s=Math.max(1,parseInt(e.value,10)||1);s!==(t.qty||1)&&je({...t,qty:s})}function rE(){f.aisleMode=!f.aisleMode;const n=p("aislebtn");n&&(n.style.background=f.aisleMode?"var(--ac)":"",n.style.color=f.aisleMode?"var(--bg)":""),es()}function oE(n){["list","deals"].forEach(s=>{const i=p("shtab-"+s);i&&i.classList.remove("active");const r=p("sh-"+s+"-body");r&&(r.style.display="none")});const e=p("shtab-"+n);e&&e.classList.add("active");const t=p("sh-"+n+"-body");t&&(t.style.display="block"),n==="deals"&&of()}function aE(){const n=f.shop.filter(s=>!s.checked);if(!n.length){D("List is empty!");return}const t=`🛒 Shopping List

`+n.map(s=>{let i="• "+s.name;return(s.qty||1)>1&&(i+=" × "+s.qty),s.price&&(i+=" (~$"+s.price+")"),i}).join(`
`);navigator.share?navigator.share({title:"Shopping List",text:t}).catch(()=>{}):navigator.clipboard&&navigator.clipboard.writeText(t).then(()=>D("List copied!"))}function cE(){const n=f.shop.filter(t=>t.checked);if(!n.length){D("No completed items!");return}const e=p("atk-body");e.innerHTML=`<div style="padding:16px">
    <p style="font-size:.82rem;color:var(--mt);margin-bottom:16px">Choose where each item goes in your kitchen, then tap Add All.</p>
    ${n.map(t=>{const s=Hh(t.name);return`<div class="atk-item" id="atk-${t.id}" data-loc="${s}">
        <div class="atk-name">${t.name}</div>
        <div class="atk-loc">
          <button onclick="setAtkLoc('${t.id}','fridge',this)" class="${s==="fridge"?"sel":""}">🌡 Fridge</button>
          <button onclick="setAtkLoc('${t.id}','freezer',this)" class="${s==="freezer"?"sel":""}">🧊 Freeze</button>
          <button onclick="setAtkLoc('${t.id}','pantry',this)" class="${s==="pantry"?"sel":""}">🥫 Pantry</button>
        </div>
      </div>`}).join("")}
  </div>`,vt("atk")}function lE(n,e,t){const s=p("atk-"+n);s.dataset.loc=e,s.querySelectorAll(".atk-loc button").forEach(i=>i.classList.remove("sel")),t.classList.add("sel")}async function uE(){const n=f.shop.filter(s=>s.checked),e=new Date().toLocaleDateString();let t=0;for(const s of n){const i=p("atk-"+s.id);if(!i)continue;const r=i.dataset.loc||Hh(s.name),a=f.inv.find(u=>u.name.toLowerCase()===s.name.toLowerCase()),c=s.qty||1;await Ue({id:a?a.id:"inv-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:a?a.name:s.name,qty:a?a.qty+c:c,unit:a?a.unit:"unit",location:r,category:a?a.category:Ms({name:s.name}),addedAt:a?a.addedAt:e,brand:a?a.brand:s.brand||"",expiry:a?a.expiry:null,image:a?a.image:s.image||null,source:"shopping"}),await hr(s.id),t++}Ae("atk"),D(`${t} item${t!==1?"s":""} added to your kitchen! 🧺`)}async function hE(){const n=Qn().map(i=>{const r=i.toISOString().split("T")[0];return f.mp[r]?`${i.toLocaleDateString("en-US",{weekday:"short"})}: ${f.mp[r]}`:""}).filter(Boolean).join(", ");if(!n){D("No meals planned yet!");return}const e=f.inv.map(i=>`${i.name} (${i.qty} ${i.unit})`).join(", "),t=document.querySelector('[onclick="buildList()"]'),s=t?t.textContent:"";t&&(t.disabled=!0,t.textContent="⏳ Thinking…");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:500,messages:[{role:"user",content:`Week meals: ${n}
Already have: ${e}
List ONLY ingredients still needed. Return ONLY a bullet list, each line starting "- ". No categories, no headers, no explanation.`}]})})).json(),a=r.content&&r.content[0]&&r.content[0].text||"",c=[];if(a.split(`
`).forEach(u=>{const d=u.match(/^[-•*]\s+(.+)/);if(d){const g=d[1].replace(/\*\*/g,"").trim();g&&!f.shop.find(w=>w.name.toLowerCase()===g.toLowerCase())&&c.push({name:g,sel:!0})}}),!c.length){D("Nothing new needed — you're all stocked! ✓");return}window._bpItems=c,p("bpList").innerHTML=c.map((u,d)=>`<div id="bpitem-${d}" onclick="bpTog(${d})" style="display:flex;align-items:center;gap:12px;padding:13px 16px;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;cursor:pointer;transition:all .15s"><div id="bpck-${d}" style="width:24px;height:24px;border-radius:50%;background:var(--gn);border:2px solid var(--gn);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.8rem;color:#0c0c0a;transition:all .2s">✓</div><div style="font-size:.9rem;font-weight:500">${u.name}</div></div>`).join(""),Ba(),p("buildPreviewM").classList.add("active")}catch{D("Couldn't reach Claude — check connection")}finally{t&&(t.disabled=!1,t.textContent=s)}}function dE(n){window._bpItems[n].sel=!window._bpItems[n].sel;const e=p("bpck-"+n),t=p("bpitem-"+n);window._bpItems[n].sel?(e.textContent="✓",e.style.background="var(--gn)",e.style.borderColor="var(--gn)",e.style.color="#0c0c0a",t.style.borderColor="var(--b1)"):(e.textContent="",e.style.background="transparent",e.style.borderColor="var(--b2)",t.style.borderColor="var(--b2)"),Ba()}function fE(n){window._bpItems.forEach((e,t)=>{window._bpItems[t].sel=n;const s=p("bpck-"+t),i=p("bpitem-"+t);n?(s.textContent="✓",s.style.background="var(--gn)",s.style.borderColor="var(--gn)",s.style.color="#0c0c0a",i.style.borderColor="var(--b1)"):(s.textContent="",s.style.background="transparent",s.style.borderColor="var(--b2)",i.style.borderColor="var(--b2)")}),Ba()}function Ba(){const n=window._bpItems.filter(t=>t.sel).length,e=p("bpAddBtn");e&&(e.textContent=n?`Add ${n} item${n!==1?"s":""}  ✓`:"Nothing selected"),e&&(e.disabled=!n)}async function pE(){const n=window._bpItems.filter(e=>e.sel);if(!n.length){p("buildPreviewM").classList.remove("active");return}for(const e of n)await je({id:Date.now().toString()+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"meal-plan"});p("buildPreviewM").classList.remove("active"),D(`Added ${n.length} item${n.length!==1?"s":""}! 🛒`)}function of(){const n=p("deals-zip-banner");if(!n)return;const e=f.cfg.zipcode;e?(n.innerHTML=`📍 Searching deals near <strong>${e}</strong> <span style="font-size:.72rem;color:var(--mt)">(change in Settings)</span>`,n.style.borderColor="var(--b2)"):(n.innerHTML=`⚠️ Set your zipcode in <strong style="cursor:pointer;color:var(--ac)" onclick="hideOv('');showOv('settings')">Settings</strong> to find local deals near you.`,n.style.borderColor="var(--am)")}function Qo(n,e){const t=p("dealslist");if(!n||!n.length){t.innerHTML=`<div class="es"><div class="ei">🏷</div><p>No deals found for <strong>${e}</strong>.<br>Try a different search term or check back later for new circulars.</p></div>`;return}t.innerHTML="",n.forEach(s=>{const i=document.createElement("div");i.className="deal-card"+(s.onSale?" deal-match":"");const r=document.createElement("div");r.style.flex="1";const a=document.createElement("div");a.className="deal-store",a.textContent=s.store||"Store";const c=document.createElement("div");if(c.className="deal-name",c.textContent=s.name||"",s.brand||s.size){const g=document.createElement("div");g.style.cssText="font-size:.72rem;color:var(--mt);margin-top:1px",g.textContent=[s.brand,s.size].filter(Boolean).join(" · "),r.appendChild(a),r.appendChild(c),r.appendChild(g)}else r.appendChild(a),r.appendChild(c);const u=document.createElement("div");if(u.style.cssText="display:flex;align-items:baseline;gap:6px;margin-top:4px;flex-wrap:wrap",s.sale_price){const g=document.createElement("span");g.className="deal-price",g.textContent=s.sale_price,u.appendChild(g)}if(s.onSale&&s.regular){const g=document.createElement("span");g.className="deal-orig",g.textContent=s.regular,u.appendChild(g)}if(s.savings){const g=document.createElement("span");g.className="deal-badge",g.textContent="Save "+s.savings,u.appendChild(g)}r.appendChild(u);const d=document.createElement("button");d.className="btn bs bsm",d.style.cssText="align-self:center;flex-shrink:0;margin-left:8px",d.textContent="+ List",(g=>{d.onclick=()=>af(g)})(s.name||""),i.appendChild(r),i.appendChild(d),t.appendChild(i)})}function Jo(n){const e=p("deals-stores");!e||!n||!n.length||(e.style.display="block",e.innerHTML='<div style="font-size:.72rem;color:var(--mt);font-weight:600;margin-bottom:4px">Stores with deals</div>'+n.map(t=>`<div style="font-size:.74rem;color:var(--tx2);padding:2px 0">${t.name}</div>`).join(""))}function af(n){const e=(n||"").replace(/&#39;/g,"'");f.shop.find(t=>t.name.toLowerCase()===e.toLowerCase())?D("Already on your list!"):(je({id:Date.now().toString(),name:e,qty:1,checked:!1,src:"deal"}),D(e+" added!"))}async function Yo(n){const e=f.cfg.zipcode;if(!e)throw new Error("Set your zipcode in Settings to search for local deals.");const t="ks-deals-"+e+"-"+n.toLowerCase().replace(/\s+/g,"_").substring(0,40),s=Pe(t);if(s&&s.ts&&Date.now()-s.ts<72e5)return s;const i=await fetch("/api/deals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({zipcode:e,query:n})}),r=await i.json();if(!i.ok||r.error)throw new Error(r.message||r.error||"Deals API request failed");return et(t,{...r,ts:Date.now()}),r}async function mE(){const n=p("dealsearch").value.trim();if(!n){D("Enter something to search");return}const e=p("dealsstatus");e.style.display="block",e.style.color="var(--mt)",e.textContent="🔍 Searching deals for "+n+" near "+(f.cfg.zipcode||"your area")+"…",p("dealslist").innerHTML="";try{const t=await Yo(n);if(e.style.display="none",t.message){p("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${t.message}</p></div>`;return}t.stores&&Jo(t.stores),Qo(t.deals,n)}catch(t){e.style.color="var(--rd)",e.textContent=t.message||"Unknown error"}}async function gE(){const n=f.shop.filter(s=>!s.checked);if(!n.length){const s=Object.values(f.mp).filter(Boolean);if(!s.length){D("Add items to your list first!");return}if(!confirm(`Your list is empty. Search deals for this week's meals?

`+s.join(", ")))return;const r=p("dealsstatus");r.style.display="block",r.textContent="Searching deals for your meal plan...",p("dealslist").innerHTML="";try{const a=await Yo(s.join(", "));if(r.style.display="none",a.message){p("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${a.message}</p></div>`;return}a.stores&&Jo(a.stores),Qo(a.deals,s.join(", "))}catch(a){r.style.color="var(--rd)",r.textContent=a.message}return}const e=p("dealsstatus"),t=n.slice(0,8).map(s=>s.name).join(", ");e.style.display="block",e.style.color="var(--mt)",e.textContent="Searching deals for: "+t+"...",p("dealslist").innerHTML="";try{const s=await Yo(t);if(e.style.display="none",s.message){p("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${s.message}</p></div>`;return}s.stores&&Jo(s.stores),s.deals.length?Qo(s.deals,t):p("dealslist").innerHTML='<div class="es"><div class="ei">🏷</div><p>No deals found for your list items.<br/>Try searching for individual items.</p></div>'}catch(s){e.style.color="var(--rd)",e.textContent=s.message}}function Ei(n){const e=ga[Ms(n)]||"🛒",t=n.image?`<img src="${n.image}" class="iimg" onerror="this.style.display='none'"/>`:`<div class="iph">${e}</div>`,s=it(n.expiry),i=s?s.c==="expired"?" expired":s.c==="expiring"?" expiring":"":"",r=s?`<div class="etag ${s.c}">${s.l}</div>`:"";return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="inv">
    <div class="swipe-inner">
      <div class="iit${i}" onclick="swipeRowTap('${n.id}','inv')">
        <div class="sel-cb">✓</div>
        <div class="iileft">${t}<div>
          <div class="inm">${n.name}</div>
          <div class="isb">${n.brand||Ms(n)}</div>
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
  </div>`}function Sr(){const n=(i,r)=>i.name.localeCompare(r.name),e=(f.it==="all"||f.it==="cat"?f.inv:f.inv.filter(i=>i.location===f.it)).slice().sort(n),t=p("isub");t&&(t.textContent=e.length+" "+({all:"items",fridge:"fridge items",freezer:"frozen items",pantry:"pantry items",cat:"items by type"}[f.it]||"items")),tf();const s=p("ibody");if(s){if(!e.length){s.innerHTML='<div class="es"><div class="ei">🧺</div><p>No items here yet.<br/>Tap Scan or Add to get started.</p></div>';return}if(f.it==="cat"){const i={};e.forEach(r=>{const a=Ms(r);i[a]||(i[a]=[]),i[a].push(r)}),s.innerHTML=Object.entries(i).sort((r,a)=>r[0].localeCompare(a[0])).map(([r,a])=>`<div class="lgrp"><div class="lgt">${ga[r]||"📦"} ${r}</div><div class="ilst">${a.map(Ei).join("")}</div></div>`).join(""),f.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(r=>{r.classList.add("selecting"),f.selectedIds.has(r.dataset.id)&&r.classList.add("selected")});return}if(f.it==="all"){const i=f.inv.filter(a=>{const c=it(a.expiry);return c&&(c.c==="expiring"||c.c==="expired")}).sort((a,c)=>new Date(a.expiry)-new Date(c.expiry)),r=i.length?`<div class="lgrp"><div class="lgt" style="color:var(--am)">⚠️ Expiring Soon</div><div class="ilst">${i.map(Ei).join("")}</div></div>`:"";s.innerHTML=r+["fridge","freezer","pantry"].map(a=>{const c=e.filter(u=>u.location===a);return c.length?`<div class="lgrp"><div class="lgt">${ma(a)}</div><div class="ilst">${c.map(Ei).join("")}</div></div>`:""}).join(""),f.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(a=>{a.classList.add("selecting"),f.selectedIds.has(a.dataset.id)&&a.classList.add("selected")});return}s.innerHTML=`<div class="ilst">${e.map(Ei).join("")}</div>`,f.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(i=>{i.classList.add("selecting"),f.selectedIds.has(i.dataset.id)&&i.classList.add("selected")})}}function yE(n){const e=f.inv.find(r=>r.id===n);if(!e)return;f.adjId=n;const t=ga[Ms(e)]||"🛒",s=e.image?`<img src="${e.image}" class="pimg" onerror="this.style.display='none'"/>`:`<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">${t}</div>`;let i="";e.nutrition&&(e.nutrition.calories||e.nutrition.protein)&&(i=`<div class="ngrd">${[["Cal",e.nutrition.calories],["Protein",e.nutrition.protein],["Fat",e.nutrition.fat],["Carbs",e.nutrition.carbs]].map(([r,a])=>`<div class="nb"><div class="nv">${a||"—"}</div><div class="nl">${r}</div></div>`).join("")}</div>`),p("adjbody").innerHTML=`<div class="pcard"><div class="phdr">${s}<div style="flex:1"><div class="pnm">${e.name}</div>${e.brand?`<div class="pbr">${e.brand}</div>`:""}<div style="font-size:.7rem;color:var(--mt);margin-top:2px">Added ${e.addedAt}</div>${e.source?`<span class="srcb" style="display:inline-block;margin-top:4px">${e.source}</span>`:""}</div></div>${i}<div class="frow" style="margin-top:14px"><label class="flbl">Location</label><div class="lpick"><button class="lbtn ${e.location==="fridge"?"sel":""}" onclick="updL('fridge',this)">🌡 Fridge</button><button class="lbtn ${e.location==="freezer"?"sel":""}" onclick="updL('freezer',this)">🧊 Freezer</button><button class="lbtn ${e.location==="pantry"?"sel":""}" onclick="updL('pantry',this)">🥫 Pantry</button></div></div><div class="qrow"><span class="qlbl">Quantity</span><div class="qctl"><button class="qbtn" onclick="adjQ(-1)">−</button><input class="qinp" id="adjqty" type="number" min="0" value="${e.qty}" oninput="adjQD()"/><button class="qbtn" onclick="adjQ(1)">+</button></div></div><div class="frow"><label class="flbl">Expiry Date <span class="otag">optional</span></label><input class="fd" id="adjexp" type="date" value="${e.expiry||""}" onchange="adjE()"/></div><div class="frow"><label class="flbl">Notes <span class="otag">optional</span></label><textarea class="sh-note-inp" id="adjnote" rows="2" placeholder="Brand, store, reminders…" onblur="adjNote()">${e.note||""}</textarea></div><div class="qrow"><span class="qlbl">Low stock alert at</span><div class="qctl"><button class="qbtn" onclick="adjLowThresh(-1)">−</button><input class="qinp" id="adjlowthresh" type="number" min="0" value="${e.lowStockThreshold||1}" oninput="adjLowThreshD()"/><button class="qbtn" onclick="adjLowThresh(1)">+</button></div></div></div>`,p("rembtn").onclick=()=>qa(n),vt("adj")}async function qa(n){const e=f.inv.find(t=>t.id===n);if(e){const t=it(e.expiry);t&&(t.c==="expired"||t.c==="expiring")&&await pv(e.name)}await fa(n),D("Item removed"),Ae("adj")}async function vE(n,e){const t=f.inv.find(s=>s.id===f.adjId);t&&(document.querySelectorAll("#adjbody .lbtn").forEach(s=>s.classList.remove("sel")),e.classList.add("sel"),await Ue({...t,location:n}))}async function _E(n){const e=f.inv.find(s=>s.id===f.adjId);if(!e)return;const t=Math.max(0,e.qty+n);if(p("adjqty").value=t,t===0){await qa(f.adjId);return}await Ue({...e,qty:t})}async function wE(){const n=f.inv.find(t=>t.id===f.adjId);if(!n)return;const e=parseInt(p("adjqty").value);!isNaN(e)&&e>=0&&await Ue({...n,qty:e})}async function bE(){const n=f.inv.find(e=>e.id===f.adjId);n&&await Ue({...n,expiry:p("adjexp").value||null})}async function EE(){const n=f.inv.find(t=>t.id===f.adjId);if(!n)return;const e=(p("adjnote").value||"").trim();await Ue({...n,note:e||null})}async function TE(n){const e=f.inv.find(s=>s.id===f.adjId);if(!e)return;const t=Math.max(0,(e.lowStockThreshold||1)+n);p("adjlowthresh").value=t,await Ue({...e,lowStockThreshold:t})}async function IE(){const n=f.inv.find(t=>t.id===f.adjId);if(!n)return;const e=parseInt(p("adjlowthresh").value);!isNaN(e)&&e>=0&&await Ue({...n,lowStockThreshold:e})}function SE(n){f.it=n,document.querySelectorAll(".itab").forEach(t=>t.classList.remove("active"));const e=p("itab-"+n);e&&e.classList.add("active"),Sr()}async function AE(){const n=p("man").value.trim();if(!n)return;const e=p("mac").value,t=p("mau").value.trim()||"unit",s=Math.max(1,parseInt(p("maq").value)||1),i=p("mae").value||null,r="itm-"+n.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now();await Ue({id:r,barcode:r,name:n,brand:"",unit:t,qty:s,location:f.maL,category:e,image:null,source:"Manual",nutrition:null,expiry:i,addedAt:new Date().toLocaleDateString()}),p("man").value="",p("maq").value=1,p("mae").value="",p("mabtn").disabled=!0,D(`${n} added!`),Ae("madd"),ja(r,n,"inv")}function kE(){p("mabtn").disabled=!p("man").value.trim()}function CE(n){const e=p("maq");e.value=Math.max(1,(parseInt(e.value)||1)+n)}function RE(n,e){f.maL=n,document.querySelectorAll("#ov-madd .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}async function PE(){const n=p("imptxt").value.trim();if(!n)return;let e=0,t=0,s="pantry";for(const i of n.split(`
`)){const r=i.toLowerCase();r.includes("fridge")?s="fridge":r.includes("freezer")?s="freezer":r.includes("pantry")&&(s="pantry");const a=i.match(/^\|\s*([^|]+?)\s*\|\s*(\d+(?:\.\d+)?)\s*\|\s*([^|]+?)\s*\|/),c=i.match(/^[-*]\s+(.+?):\s*(\d+(?:\.\d+)?)\s*([a-zA-Z%\/]+.*)?$/);let u,d,g;if(a?(u=a[1].trim(),d=parseFloat(a[2]),g=a[3].trim()):c&&(u=c[1].trim(),d=parseFloat(c[2]),g=(c[3]||"unit").trim()),u&&d&&u!=="Item"&&u!=="---"&&!u.startsWith("-")){const w="item-imp-"+u.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),I=f.inv.find(R=>R.id===w);await Ue({id:w,barcode:w,name:u,brand:"",unit:g||"unit",qty:d,location:s,category:"Imported",image:null,source:"Imported",nutrition:null,expiry:null,addedAt:I?I.addedAt:new Date().toLocaleDateString()}),I?t++:e++}}p("imptxt").value="",D(`Imported ${e} new, updated ${t}`),Ae("import")}function cf(n){return[...document.querySelectorAll("#"+n+" .tag.sel")].map(e=>e.dataset.tag)}function xE(n,e){document.querySelectorAll("#"+n+" .tag").forEach(t=>{t.classList.toggle("sel",(e||[]).includes(t.dataset.tag))})}function DE(n){n.classList.toggle("sel")}function LE(n){const e=Array.from({length:5},(s,i)=>`<span class="star${i<n.rating?" on":""}">${i<n.rating?"★":"☆"}</span>`).join(""),t=n.sourceUrl?`<a href="${n.sourceUrl}" target="_blank" onclick="event.stopPropagation()" style="font-size:.68rem;color:var(--ac);text-decoration:none;border:1px solid rgba(212,168,83,.3);border-radius:20px;padding:2px 8px;background:transparent">🔗 View original</a>`:n.source?`<span class="sbdg">${n.source}</span>`:"";return`<div class="rcd${n.favorited?" fav":""}" onclick="openER('${n.id}')"><div class="rrow"><div class="rnm">${n.name}</div><div class="rfav" onclick="event.stopPropagation();togFav('${n.id}')">${n.favorited?"❤️":"🤍"}</div></div><div class="stars">${e}</div>${n.description?`<div class="rnot" style="color:var(--tx2);margin-top:6px">${n.description.substring(0,100)}${n.description.length>100?"…":""}</div>`:""}${n.notes?`<div class="rnot">${n.notes}</div>`:""}<div class="rmeta"><span>${n.savedAt}</span>${t}</div></div>`}function NE(n){f.rt=n,document.querySelectorAll(".rtab").forEach(t=>t.classList.remove("active"));const e=p("rtab-"+n);e&&e.classList.add("active"),n==="community"?Ha():Ar()}function Ar(){if(f.rt==="community")return;let n=[...f.recs];f.rt==="fav"?n=n.filter(s=>s.favorited):f.rt==="top"?n=n.filter(s=>s.rating>=4).sort((s,i)=>i.rating-s.rating):f.rt==="quick"?n=n.filter(s=>(s.tags||[]).includes("Quick")||(s.tags||[]).includes("Under 30 min")):f.rt==="kid"?n=n.filter(s=>(s.tags||[]).includes("Kid-Friendly")):n=n.sort((s,i)=>new Date(i.savedAt||0)-new Date(s.savedAt||0));const e=p("rsub");e&&(e.textContent=n.length+" recipe"+(n.length!==1?"s":""));const t=p("rbody");if(t){if(!n.length){t.innerHTML=`<div class="es"><div class="ei">📖</div><p>${f.rt==="fav"?"No favorites yet!":f.rt==="top"?"No 4–5 star recipes yet.":f.rt==="quick"?"No quick recipes saved yet.":f.rt==="kid"?"No kid-friendly recipes yet.":"No recipes saved yet.<br/>Mark meals as cooked or tap + Add."}</p></div>`;return}t.innerHTML=n.map(LE).join("")}}async function OE(n){const e=f.recs.find(t=>t.id===n);e&&(await Ft({...e,favorited:!e.favorited}),D(e.favorited?"Removed from favorites":"Added to favorites! ❤️"))}function ME(){p("savrecbtn").disabled=!p("rn").value.trim()}async function VE(){const n=p("rurl").value.trim();if(!n)return;const e=p("rurlstatus"),t=p("rimportbtn");e.style.display="block",e.style.color="var(--mt)",e.textContent="⏳ Fetching recipe…",t.disabled=!0;try{const i=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})})).json();if(!i.success){e.style.color="var(--rd)",e.textContent="⚠️ "+(i.error||"Couldn't import this recipe"),t.disabled=!1;return}const r=i.recipe,a=[r.ingredients||"",r.steps?`

Steps:
`+r.steps:""].join("").trim();p("rn").value=r.title||"",p("rd").value=a||r.description||"",p("rnotes").value=r.notes||"",p("rsourceurl").value=n,p("rcuisine")&&(p("rcuisine").value=r.cuisine||""),p("savrecbtn").disabled=!r.title,e.style.color="var(--gn)",e.textContent="✓ Recipe imported! Review and save."}catch{e.style.color="var(--rd)",e.textContent="⚠️ Couldn't import — try copying the recipe text manually."}t.disabled=!1}async function $E(){const n=p("rn").value.trim();if(!n)return;const e=p("rd").value.trim(),t=p("rsourceurl")?p("rsourceurl").value.trim():"",s=p("rcuisine")?p("rcuisine").value.trim():"",i=cf("rtags");await Ft({id:"rec-"+Date.now(),name:n,rating:f.nr,favorited:!1,notes:p("rnotes").value.trim(),description:e,source:t?"Web Import":"Manual",sourceUrl:t||null,tags:i,cuisine:s,cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:!1}),p("rn").value="",p("rnotes").value="",p("rd").value="",p("rsourceurl").value="",p("rurl").value="",p("rcuisine")&&(p("rcuisine").value=""),xE("rtags",[]),f.nr=0,p("savrecbtn").disabled=!0,Rs("rstars",0),D("Recipe saved! 📖"),Ae("arec")}function FE(n){const e=f.recs.find(a=>a.id===n);if(!e)return;f.eid=n;const t=e.rating||0,s=Array.from({length:5},(a,c)=>`<span class="star${c<t?" on":""}" onclick="setStar(${c+1},'e')">${c<t?"★":"☆"}</span>`).join(""),i=e.sourceUrl?`<div class="frow"><label class="flbl">Original</label><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);word-break:break-all">${e.sourceUrl}</a></div>`:"",r=`<div class="frow"><label class="flbl">Tags</label><div class="tags" id="etags">
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
    <div class="brow"><button class="btn bd" style="flex:1" onclick="delER()">Delete</button><button class="btn bp" style="flex:2" onclick="updR()">Save</button></div>`,vt("erec")}async function UE(){const n=f.recs.find(i=>i.id===f.eid);if(!n)return;const e=[...document.querySelectorAll("#estars .star")].filter(i=>i.classList.contains("on")).length,t=cf("etags"),s=p("ecuis")?p("ecuis").value.trim():n.cuisine||"";await Ft({...n,name:p("ern").value.trim(),rating:e,description:p("erd").value.trim(),notes:p("erno").value.trim(),favorited:p("etog").classList.contains("on"),tags:t,cuisine:s}),D("Recipe updated!"),Ae("erec")}async function jE(){confirm("Delete this recipe?")&&(await gv(f.eid),D("Deleted"),Ae("erec"))}async function BE(n){const e=p("erd");if(!e)return;const t=e.value.trim();if(!t){D("No ingredients to scale");return}const s=p("scaleStatus");s.style.display="block",s.style.color="var(--mt)",s.textContent=`⏳ Scaling to ${n}× with Claude…`;try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Scale ALL ingredient quantities in this recipe by ${n}x. Return ONLY the updated recipe text with scaled quantities. Keep the same format. Do not add any explanation.

${t}`}]})})).json(),a=r.content&&r.content[0]&&r.content[0].text||"";a?(e.value=a.trim(),s.style.color="var(--gn)",s.textContent=`✓ Scaled to ${n}×`):(s.style.color="var(--rd)",s.textContent="Couldn't scale — try again")}catch{s.style.color="var(--rd)",s.textContent="Couldn't reach Claude — check connection"}}async function qE(){const n=p("rsub");n&&(n.textContent="Thinking…");const e=f.inv.map(i=>`${i.name} (${i.qty} ${i.unit})`).join(", "),t=f.recs.map(i=>i.name).join(", "),s=[f.cfg.nopork?"no pork":null,f.cfg.noshellfish?"no shellfish":null,f.cfg.vegetarian?"vegetarian":null,f.cfg.glutenfree?"gluten-free":null,f.cfg.other||null].filter(Boolean).join(", ");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Based on this exact inventory: ${e}
Restrictions: ${s||"none"}
Saved recipes: ${t||"none"}
Suggest 5 complete meals I can make RIGHT NOW with no extra shopping. Be specific with names. Format as a numbered list.`}]})})).json(),a=r.content&&r.content[0]&&r.content[0].text||"",c=p("rbody");c&&(c.innerHTML=`<div style="background:var(--card);border:1px solid var(--ac);border-radius:14px;padding:16px;margin-bottom:12px"><div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ac);margin-bottom:10px">🔍 Make right now — no shopping needed</div><div style="font-size:.88rem;line-height:1.8;color:var(--tx2)">${Cv(a)}</div><button class="btn bs bsm" style="margin-top:12px;width:100%" onclick="setRT('all')">← Back to recipes</button></div>`),n&&(n.textContent="Based on your inventory")}catch{n&&(n.textContent="Couldn't reach Claude")}}async function HE(n){const e=f.recs.find(t=>t.id===n);if(!e||!e.description){D("No ingredients listed");return}D("Parsing ingredients…");try{const t=f.inv.map(u=>u.name.toLowerCase()),i=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:400,messages:[{role:"user",content:`Extract a list of ingredient names from this recipe description. Return ONLY a JSON array of strings, no markdown, no quantities, just clean ingredient names. Example: ["chicken","garlic","olive oil"]

Recipe: ${e.description}`}]})})).json(),r=(i.content&&i.content[0]&&i.content[0].text||"").replace(/```json|```/g,"").trim(),c=JSON.parse(r).filter(u=>!t.some(d=>d.includes(u.toLowerCase())||u.toLowerCase().includes(d)));if(!c.length){D("All ingredients already in pantry ✓");return}for(const u of c)await je({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:u,qty:1,checked:!1,src:"recipe"});D(`Added ${c.length} ingredient${c.length!==1?"s":""} to shopping list 🛒`),Ae("erec"),window.showScreen("shopping")}catch{D("Couldn't parse ingredients")}}function zE(n,e){f.nr=n,e==="r"?Rs("rstars",n):e==="c"?Rs("cstars",n):e==="e"&&Rs("estars",n)}async function GE(n){const e=f.recs.find(r=>r.id===n);if(!e)return;const t=!e.isPublic,s=De(),i=(s==null?void 0:s.displayName)||localStorage.getItem("ks-who")||"Anonymous";t?(await yv(e,i,f.hid),D("Recipe shared with the community!")):(await vv(e.id),D("Recipe removed from community")),await Ft({...e,isPublic:t})}async function Ha(){const n=p("rbody");if(n){n.innerHTML='<div class="es"><div class="ei">🌍</div><p>Loading community recipes…</p></div>';try{f.comRecs=await _v(),za()}catch(e){console.error("loadCommunity:",e),n.innerHTML=`<div class="es"><div class="ei">⚠️</div><p>Couldn't load community recipes.</p></div>`}}}function KE(n){f.comCuisine=n,za()}function WE(n){f.comSearch=n,za()}function za(){const n=p("rbody");if(!n)return;let e=[...f.comRecs];if(f.comCuisine&&f.comCuisine!=="all"&&(e=e.filter(i=>(i.cuisine||"").toLowerCase().includes(f.comCuisine.toLowerCase())||(i.tags||[]).some(r=>r.toLowerCase().includes(f.comCuisine.toLowerCase())))),f.comSearch){const i=f.comSearch.toLowerCase();e=e.filter(r=>(r.title||"").toLowerCase().includes(i)||(r.tags||[]).join(" ").toLowerCase().includes(i)||(r.cuisine||"").toLowerCase().includes(i)||(r.authorName||"").toLowerCase().includes(i))}e.sort((i,r)=>new Date(r.createdAt||0)-new Date(i.createdAt||0));const t=p("rsub");t&&(t.textContent=e.length+" community recipe"+(e.length!==1?"s":""));let s=`<div style="margin-bottom:14px">
    <input class="fi" id="com-search" placeholder="Search recipes, tags, authors…" value="${f.comSearch}" oninput="setComSearch(this.value)" style="margin-bottom:8px"/>
    <div style="display:flex;gap:6px;flex-wrap:wrap">
      <select class="fsel" id="com-cuisine" onchange="setComCuisine(this.value)" style="flex:1;font-size:.8rem;padding:8px 10px">
        <option value="all"${f.comCuisine==="all"?" selected":""}>All Cuisines</option>
        <option value="mediterranean"${f.comCuisine==="mediterranean"?" selected":""}>Mediterranean</option>
        <option value="asian"${f.comCuisine==="asian"?" selected":""}>Asian</option>
        <option value="american"${f.comCuisine==="american"?" selected":""}>American</option>
        <option value="turkish"${f.comCuisine==="turkish"?" selected":""}>Turkish</option>
        <option value="indian"${f.comCuisine==="indian"?" selected":""}>Indian</option>
        <option value="mexican"${f.comCuisine==="mexican"?" selected":""}>Mexican</option>
        <option value="italian"${f.comCuisine==="italian"?" selected":""}>Italian</option>
      </select>
    </div>
  </div>`;if(!e.length){s+=`<div class="es"><div class="ei">🌍</div><p>${f.comSearch||f.comCuisine!=="all"?"No recipes match your filters.":"No community recipes yet. Be the first to share!"}</p></div>`,n.innerHTML=s;return}e.forEach(i=>{const r=(i.tags||[]).map(c=>`<span class="com-tag">${c}</span>`).join(""),a=i.createdAt?new Date(i.createdAt).toLocaleDateString():"";s+=`<div class="rcd com-rcd" onclick="openComRecipe('${i.id}')">
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
    </div>`}),n.innerHTML=s}async function QE(n){const e=f.comRecs.find(u=>u.id===n);if(!e)return;await Tv(n)?f.myLikes.add(n):f.myLikes.delete(n);let s=[];try{s=await Ev(n)}catch{}s.sort((u,d)=>new Date(u.createdAt||0)-new Date(d.createdAt||0));const i=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`;let r=s.map(u=>`<div style="padding:10px 0;border-bottom:1px solid var(--b1)">
    <div style="display:flex;justify-content:space-between;align-items:center">
      <span style="font-size:.78rem;font-weight:600">${u.authorName||"Anonymous"}</span>
      <span style="font-size:.68rem;color:var(--mt)">${u.createdAt?new Date(u.createdAt).toLocaleDateString():""}</span>
    </div>
    <div style="font-size:.84rem;color:var(--tx2);margin-top:4px;line-height:1.5">${(u.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>
  </div>`).join("");const a=(e.tags||[]).map(u=>`<span class="com-tag">${u}</span>`).join(""),c=f.myLikes.has(n);p("erecbody").innerHTML=`
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
    </div>`,vt("erec")}async function JE(n){if(!De()){D("Sign in to like recipes");return}const t=f.myLikes.has(n);try{await wv(n,t),t?f.myLikes.delete(n):f.myLikes.add(n);const s=f.comRecs.find(r=>r.id===n);s&&(s.likes=(s.likes||0)+(t?-1:1));const i=p("com-like-btn");if(i){const r=f.myLikes.has(n);i.className=`btn ${r?"bp":"bs"} bsm`,i.innerHTML=`${r?"❤️":"🤍"} ${(s==null?void 0:s.likes)||0} Like${((s==null?void 0:s.likes)||0)!==1?"s":""}`}D(t?"Like removed":"Liked!")}catch(s){console.error("likeComRecipe:",s),D("Couldn't update like")}}async function YE(n){if(!De()){D("Sign in to save recipes");return}const t=f.comRecs.find(s=>s.id===n);if(t)try{await Iv(t),D("Recipe saved to your kitchen! 📖"),Ae("erec")}catch(s){console.error("saveComToKitchen:",s),D("Couldn't save recipe")}}async function XE(n){var r;const e=De();if(!e){D("Sign in to comment");return}const t=p("com-cmt-input"),s=(r=t==null?void 0:t.value)==null?void 0:r.trim();if(!s)return;const i=e.displayName||localStorage.getItem("ks-who")||"Anonymous";try{const a=await bv(n,s,i);t.value="";const c=p("com-comments");c&&a&&(c.querySelector("div[style*='color:var(--mt)']")&&!c.querySelector("div[style*='border-bottom']")&&(c.innerHTML=""),c.innerHTML+=`<div style="padding:10px 0;border-bottom:1px solid var(--b1)">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:.78rem;font-weight:600">${a.authorName}</span>
          <span style="font-size:.68rem;color:var(--mt)">${new Date().toLocaleDateString()}</span>
        </div>
        <div style="font-size:.84rem;color:var(--tx2);margin-top:4px;line-height:1.5">${a.text.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>
      </div>`),D("Comment posted!")}catch(a){console.error("addComComment:",a),D("Couldn't post comment")}}async function ZE(n){const e=f.comRecs.find(i=>i.id===n),t=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`,s=(e==null?void 0:e.title)||"Recipe";if(navigator.share)try{await navigator.share({title:s,text:`Check out this recipe: ${s}`,url:t});return}catch{}try{await navigator.clipboard.writeText(t),D("Link copied!")}catch{D("Couldn't copy link")}}function eT(){const n=f.cookLog,e=f.wasteLog;let t=0;for(let j=0;j<60;j++){const K=new Date;K.setDate(K.getDate()-j);const ee=K.toISOString().split("T")[0];if(n.find(te=>te.date===ee))t++;else if(j>0)break}const s=p("ins-streak-num");s&&(s.textContent=t);const i=p("ins-total-cooked");i&&(i.textContent=n.length);const r=p("ins-waste-count");r&&(r.textContent=e.length);const a=p("ins-sub");a&&(a.textContent=n.length?" "+n.length+" meals cooked":"Your kitchen at a glance");const c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],u=p("ins-week");if(u){const j=Qn().map(K=>{const ee=K.toISOString().split("T")[0],te=f.mp[ee],b=ee===Pt();return`<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--b1)${b?";background:var(--acd);margin:0 -4px;padding:7px 4px;border-radius:6px":""}">
        <div style="font-size:.72rem;color:var(--mt);min-width:30px;font-weight:${b?"600":"400"}">${c[K.getDay()]}</div>
        <div style="font-size:.72rem;color:var(--mt);min-width:20px">${K.getDate()}</div>
        <div style="font-size:.84rem;color:${te?"var(--tx)":"var(--mt)"};font-style:${te?"normal":"italic"};flex:1">${te||"—"}</div>
        ${b?"<div style='font-size:.66rem;color:var(--ac);font-weight:600'>TODAY</div>":""}
      </div>`}).join("");u.innerHTML=j}const d=n.slice(0,7).map(j=>j.name),g=p("ins-variety-nudge"),w=p("ins-variety-msg");if(g&&d.length>=3){const j={};d.forEach(y=>{const _=y.toLowerCase();j[_]=(j[_]||0)+1});const K=Object.entries(j).filter(([,y])=>y>=3),ee=Object.values(f.mp).filter(Boolean),te=ee.some(y=>/curry|dal|rice|bengali|biryani|hilsa|mustard|lentil/i.test(y)),b=ee.some(y=>/kebab|köfte|pide|börek|meze|turkish|pilav|lahmacun/i.test(y));K.length?(g.style.display="block",w.textContent=`You've cooked "${K[0][0]}" ${K[0][1]} times this week. Time to mix it up?`):!te&&ee.length>=3?(g.style.display="block",w.textContent="No Bangladeshi dishes this week — how about a dal, biryani, or fish curry?"):!b&&ee.length>=3?(g.style.display="block",w.textContent="No Turkish dishes planned — köfte, mercimek çorbası, or a pilav would be great this week!"):g.style.display="none"}else g&&(g.style.display="none");const I={};n.forEach(j=>{I[j.name]=(I[j.name]||0)+1});const R=Object.entries(I).sort((j,K)=>K[1]-j[1]).slice(0,6),N=R[0]?R[0][1]:1,V=p("ins-cooked");if(V)if(!R.length)V.innerHTML='<div class="es" style="padding:16px"><p>Cook some meals to see stats!</p></div>';else{const j=["🥇","🥈","🥉","4️⃣","5️⃣","6️⃣"];V.innerHTML=R.map(([K,ee],te)=>`<div class="ibar-row"><div style="font-size:.9rem;margin-right:4px">${j[te]||""}</div><div class="ibar-lbl">${K}</div><div class="ibar-track"><div class="ibar-fill" style="width:${Math.round(ee/N*100)}%"></div></div><div class="ibar-val">${ee}×</div></div>`).join("")}const O={Bangladeshi:"#e8a44a",Turkish:"#c0392b",Mediterranean:"#27ae60",American:"#3498db",Italian:"#e74c3c",Asian:"#9b59b6",Other:"#95a5a6"},G=p("ins-cuisine");if(G&&n.length){const j=b=>{const y=b.toLowerCase();return/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(y)?"Bangladeshi":/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner|iskender/i.test(y)?"Turkish":/pasta|pizza|risotto|gnocchi|italian/i.test(y)?"Italian":/tacos|burrito|enchilada|mexican/i.test(y)?"Mexican":/sushi|ramen|stir.?fry|fried rice|asian|chinese|thai|japanese/i.test(y)?"Asian":/burger|sandwich|mac|bbq|american/i.test(y)?"American":"Other"},K={};n.slice(0,20).forEach(b=>{const y=j(b.name);K[y]=(K[y]||0)+1});const ee=Object.values(K).reduce((b,y)=>b+y,0),te=Object.entries(K).sort((b,y)=>y[1]-b[1]);G.innerHTML=te.map(([b,y])=>{const _=Math.round(y/ee*100),T=O[b]||"#95a5a6";return`<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span style="font-size:.82rem;font-weight:500">${b}</span><span style="font-size:.74rem;color:var(--mt)">${y} meals · ${_}%</span></div><div style="height:8px;background:var(--b1);border-radius:4px;overflow:hidden"><div style="height:100%;width:${_}%;background:${T};border-radius:4px;transition:width .6s ease"></div></div></div>`}).join("")||'<div class="es" style="padding:16px"><p>Cook more meals to see your cuisine breakdown.</p></div>'}const Z=p("ins-waste");Z&&(Z.innerHTML=e.length?e.slice(0,10).map(j=>`<div class="waste-item"><span style="font-size:.86rem">${j.name}</span><span style="font-size:.74rem;color:var(--rd)">${j.date}</span></div>`).join(""):'<div class="es" style="padding:16px"><p>Nothing wasted yet — great job! 🎉</p></div>')}function tT(){const n=["fridge","freezer","pantry"].map(a=>{const c=f.inv.filter(u=>u.location===a);return c.length?ma(a).toUpperCase()+": "+c.map(u=>`${u.name} (${u.qty} ${u.unit})`).join(", "):""}).filter(Boolean).join(`
`),e=f.inv.filter(a=>{const c=it(a.expiry);return c&&(c.c==="expiring"||c.c==="expired")}).map(a=>{const c=it(a.expiry);return`${a.name} (${c.l})`}).join(", "),t=Qn().map(a=>{const c=a.toISOString().split("T")[0];return f.mp[c]?`${a.toLocaleDateString("en-US",{weekday:"short"})}: ${f.mp[c]}`:""}).filter(Boolean).join(", "),s=f.recs.filter(a=>a.favorited||a.rating>=4).map(a=>`${a.name}${a.rating?` (${a.rating}★)`:""}`).join(", "),i=[f.cfg.nopork?"no pork":null,f.cfg.noshellfish?"no shellfish":null,f.cfg.vegetarian?"vegetarian":null,f.cfg.glutenfree?"gluten-free":null,f.cfg.other].filter(Boolean).join(", "),r=f.cookLog.slice(0,7).map(a=>a.name).join(", ");return`You are a helpful kitchen assistant for a family in Edison NJ.
INVENTORY:
${n||"Empty."}
${e?"EXPIRING SOON: "+e:""}
${t?"MEAL PLAN: "+t:""}
${s?"FAVOURITE RECIPES: "+s:""}
${r?"RECENTLY COOKED (avoid repeating): "+r:""}
HOUSEHOLD: ${f.cfg.name}, Adults: ${f.cfg.adults}, Kids: ${f.cfg.kids}, Restrictions: ${i||"none"}, Cuisines: ${f.cfg.cuisines}, Cook time: ${f.cfg.cookTime}.
CULTURAL BACKGROUND: Bushra is Bangladeshi, Bora is Turkish — authentically lean toward these cuisines (Bengali spices, mustard oil, dal, hilsa-style fish; Turkish kebabs, meze, börek, yogurt sauces, lentil soups). Suggest these when inventory allows.
Be concise. Use what they have. Suggest variety — lean toward Bangladeshi and Turkish — avoid repeating recent meals. Format grocery lists as bullet points starting "- ".

RECIPE FORMAT RULE: When suggesting recipes (any time you provide a recipe with ingredients/steps), wrap EACH recipe in :::RECIPE::: and :::END::: markers with a JSON object containing: title, ingredients (newline-separated list), steps (numbered newline-separated list), cuisine, cookTime, servings.
Example:
:::RECIPE:::
{"title":"Dal Tadka","ingredients":"1 cup red lentils\\n2 tomatoes, chopped\\n1 tsp cumin seeds\\n1 tsp turmeric","steps":"1. Wash and boil lentils until soft\\n2. Heat oil, add cumin seeds\\n3. Add tomatoes, cook until soft\\n4. Combine with lentils and simmer","cuisine":"Bangladeshi","cookTime":"30 min","servings":4}
:::END:::
Always use this format so the app can offer a one-tap save button. You can include normal text before/after recipe blocks.`}function nT(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<li>$1</li>").replace(/^[-•]\s+(.+)$/gm,"<li>$1</li>").replace(/\n/g,"<br>")}async function lf(){const n=p("chi"),e=n.value.trim();if(!e)return;n.value="",uf(n),f.chat.push({role:"user",content:e}),go("user",e);const t=p("csb");t&&(t.disabled=!0);const s="thinking-"+Date.now(),i=p("chmsgs");i.innerHTML+=`<div class="cb asst thinking" id="${s}">Thinking…</div>`,i.scrollTop=i.scrollHeight;try{const a=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:800,system:tT(),messages:f.chat.map(d=>({role:d.role,content:d.content}))})})).json(),c=a.content&&a.content[0]&&a.content[0].text||"Sorry, I couldn't process that.",u=p(s);u&&u.remove(),f.chat.push({role:"assistant",content:c}),go("assistant",c)}catch{const a=p(s);a&&a.remove(),go("assistant","Sorry, I couldn't reach Claude. Check your connection and try again.")}t&&(t.disabled=!1)}function sT(n){const e=[];return{cleanText:n.replace(/:::RECIPE:::\s*([\s\S]*?)\s*:::END:::/g,(s,i)=>{try{const r=JSON.parse(i.trim());r.title&&e.push(r)}catch{}return""}).trim(),recipes:e}}function iT(n){const e=JSON.stringify(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;"),t=(n.ingredients||"").split(`
`).slice(0,3).join(", ");return`<div style="background:var(--card);border:1.5px solid var(--ac);border-radius:14px;padding:16px;margin:10px 0">
    <div style="font-family:'Fraunces',serif;font-size:1.1rem;font-weight:300;color:var(--ac);margin-bottom:6px">${(n.title||"").replace(/</g,"&lt;")}</div>
    ${n.cuisine?`<div style="font-size:.72rem;color:var(--mt);margin-bottom:6px">${n.cuisine}${n.cookTime?" · "+n.cookTime:""}${n.servings?" · "+n.servings+" servings":""}</div>`:""}
    ${t?`<div style="font-size:.8rem;color:var(--tx2);line-height:1.5;margin-bottom:10px">${t.replace(/</g,"&lt;")}…</div>`:""}
    <button class="btn bp bsm" onclick="importChatRecipe(this)" data-recipe="${e}">📖 Add to My Recipes</button>
  </div>`}async function rT(n){try{const e=JSON.parse(n.dataset.recipe),t="rec-"+Date.now(),s=[e.ingredients||"",e.steps?`

Steps:
`+e.steps:""].join("").trim();await Ft({id:t,name:e.title||"Untitled Recipe",rating:0,favorited:!1,notes:"",description:s,source:"Claude Chat",sourceUrl:null,tags:[],cuisine:e.cuisine||"",cookTime:e.cookTime||"",servings:e.servings||"",cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:!1}),n.textContent="✓ Saved!",n.disabled=!0,n.style.background="var(--gn)",D("Recipe saved! 📖")}catch{D("Couldn't save recipe")}}function go(n,e){const t=p("chmsgs");if(t){if(n==="assistant"){const{cleanText:s,recipes:i}=sT(e);if(s){const r=document.createElement("div");r.className="cb asst",r.innerHTML=nT(s),t.appendChild(r)}i.forEach(r=>{const a=document.createElement("div");a.style.maxWidth="88%",a.style.alignSelf="flex-start",a.innerHTML=iT(r),t.appendChild(a)})}else{const s=document.createElement("div");s.className="cb user",s.innerHTML=e,t.appendChild(s)}t.scrollTop=t.scrollHeight}}function oT(n){const e=p("chi");e&&(e.value=n.textContent),lf()}function aT(){f.chat=[];const n=p("chmsgs");n&&(n.innerHTML='<div class="cb asst">Hey! 👋 I know your full inventory, meal plan, and saved recipes. What do you need?</div>')}function uf(n){n.style.height="auto",n.style.height=Math.min(n.scrollHeight,120)+"px"}let er=!1,Oi=!1;function Ga(){if(er)return;const n=p("scanner-video");if(!n)return;const e=p("scan-status");e&&(e.textContent="Starting camera…",e.style.display="block"),Quagga.init({inputStream:{name:"Live",type:"LiveStream",target:n,constraints:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}},locator:{patchSize:"medium",halfSample:!0},decoder:{readers:["ean_reader","ean_8_reader","upc_reader","upc_e_reader","code_128_reader","code_39_reader"]},locate:!0,frequency:10},function(t){if(t){console.error("Scanner init error:",t);const s=p("scerr");s&&(s.textContent="⚠️ Could not access camera. Try entering the barcode manually.",s.style.display="block"),e&&(e.style.display="none");return}Quagga.start(),er=!0,e&&(e.textContent="Scanning…")}),Quagga.onDetected(hf)}function Ka(){if(er){try{Quagga.stop()}catch{}Quagga.offDetected(hf),er=!1,Oi=!1}}async function hf(n){var i,r;if(Oi)return;const e=n&&n.codeResult&&n.codeResult.code;if(!e)return;const t=((r=(i=n.codeResult.decodedCodes)==null?void 0:i.filter(a=>a.error!==void 0))==null?void 0:r.map(a=>a.error))||[];if(!((t.length?t.reduce((a,c)=>a+c,0)/t.length:1)>.25)){Oi=!0,cT(),Ka(),p("scanbody").style.display="none",p("scspin").style.display="block",p("scst").textContent="Found "+e+" — looking up…";try{const a=await df(e);f.cp=a,p("aqty").value=1,p("aexp").value="",Wa("fridge",p("rl-fridge")),ff(a)}catch{const a=p("scerr");a.textContent="⚠️ Lookup failed. Check your connection or enter the barcode manually.",a.style.display="block"}p("scanbody").style.display="block",p("scspin").style.display="none",Oi=!1}}function cT(){const n=p("scan-success");n&&(n.style.display="flex",n.style.animation="none",n.offsetHeight,n.style.animation="",setTimeout(()=>{n.style.display="none"},500))}function lT(){Ae("result"),vt("scan"),p("scerr").style.display="none",Ga()}function uT(){f.scanDestList=!0,vt("scan");const n=p("scanovttl");n&&(n.textContent="Scan → Shopping List");const e=p("scan-dest-hint");e&&(e.textContent="Running low? Scan to add to your shopping list."),p("scerr").style.display="none",Ga()}function hT(){f.scanDestList=!1,vt("scan");const n=p("scanovttl");n&&(n.textContent="Scan Barcode");const e=p("scan-dest-hint");e&&(e.textContent="Scan a barcode to add to your pantry or shopping list."),p("scerr").style.display="none",Ga()}function dT(){const n=p("scanNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=p("scanNoteInp");t&&t.focus()}}function fT(){if(!f.cp)return;const n=f.cp.notFound?"Barcode "+f.cp.barcode:f.cp.name,e=p("scanNoteInp"),t=e?e.value.trim():"",s=parseInt(p("aqty").value)||1,i={id:Date.now().toString(),name:n,qty:s,checked:!1,src:"scan"};f.cp.brand&&(i.brand=f.cp.brand),f.cp.image&&(i.image=f.cp.image),t&&(i.note=t),je(i),D("Added to list: "+n),Ae("result"),Ae("scan"),f.scanDestList=!1,e&&(e.value="");const r=p("scanNoteWrap");r&&(r.style.display="none"),window.showScreen("shopping")}function pT(){const n=p("mentry");n.style.display=n.style.display==="none"?"block":"none"}async function mT(){const n=p("meinp").value.trim();if(!n)return;Ka(),p("scanbody").style.display="none",p("scspin").style.display="block",p("scst").textContent="Looking up…";const e=await df(n);f.cp=e,p("aqty").value=1,p("aexp").value="",Wa("fridge",p("rl-fridge")),p("meinp").value="",ff(e),p("scanbody").style.display="block",p("scspin").style.display="none"}async function df(n){try{const e=await fetch("/api/barcode?code="+encodeURIComponent(n));if(e.ok){const t=await e.json();if(t.found&&t.product)return{...t.product,notFound:!1}}}catch{}return{barcode:n,name:"",brand:"",quantity:"",category:"General",image:null,source:null,description:"",notFound:!0}}function gT(n,e){switch(n){case"Open Food Facts":return`https://world.openfoodfacts.org/product/${e}`;case"Open Beauty Facts":return`https://world.openbeautyfacts.org/product/${e}`;case"Open Pet Food Facts":return`https://world.openpetfoodfacts.org/product/${e}`;case"UPC Item DB":return`https://www.upcitemdb.com/upc/${e}`;case"Edamam":return"https://www.edamam.com/food-database/en/";default:return"#"}}function ff(n){Ae("scan"),p("resttl").textContent=n.notFound?"Not Found":"Product Found ✓",p("aunit").value=n.quantity||"unit";let e="";if(n.notFound)e=`<div class="nfb">⚠️ Barcode <code>${n.barcode}</code> not found in any database. Enter name:<input class="fi" id="mnm" placeholder="Product name (required)" oninput="valAdd()" style="margin-top:10px"/></div>`,setTimeout(()=>p("addbtn").disabled=!0,0);else{const t=n.image?`<img src="${n.image}" class="pimg" onerror="this.style.display='none'"/>`:'<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">🛒</div>';let s="";n.nutrition&&(n.nutrition.calories||n.nutrition.protein)&&(s=`<div class="ngrd">${[["Cal",n.nutrition.calories],["Protein",n.nutrition.protein],["Fat",n.nutrition.fat],["Carbs",n.nutrition.carbs]].map(([a,c])=>`<div class="nb"><div class="nv">${c||"—"}</div><div class="nl">${a}</div></div>`).join("")}</div>`);const i=n.description?`<div class="pdsc">${n.description}</div>`:"",r=n.source?`<a href="${gT(n.source,n.barcode)}" target="_blank" rel="noopener" class="srcb" style="text-decoration:none">${n.source} ↗</a>`:"";e=`<div class="pcard"><div class="phdr">${t}<div style="flex:1"><div class="pnm">${n.name}</div>${n.brand?`<div class="pbr">${n.brand}</div>`:""}<div class="pbc">${n.barcode}</div><span class="bdg">${n.category}</span>${r}</div></div>${i}${s}</div>`,setTimeout(()=>p("addbtn").disabled=!1,0)}p("resbody").innerHTML=e,vt("result")}function Wa(n,e){f.selR=n,document.querySelectorAll("#ov-result .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function yT(){const n=p("mnm");p("addbtn").disabled=!(n&&n.value.trim())}async function vT(){if(!f.cp)return;const n=p("mnm"),e=f.cp.notFound?n&&n.value.trim()||"":f.cp.name;if(!e)return;const t=p("aunit").value.trim()||"unit",s=Math.max(1,parseInt(p("aqty").value)||1),i=p("aexp").value||null,r="item-"+f.cp.barcode.replace(/\W/g,"-"),a=f.inv.find(c=>c.id===r);await Ue({id:r,barcode:f.cp.barcode,name:e,brand:f.cp.brand||"",unit:t,qty:a?a.qty+s:s,location:f.selR,category:f.cp.category||"General",image:f.cp.image||null,source:f.cp.source||null,nutrition:f.cp.nutrition||null,expiry:i,addedAt:a?a.addedAt:new Date().toLocaleDateString()}),D(a?`+${s} added to ${e}`:`${e} added!`),f.cp=null,Ae("result")}function _T(n){const e=p("aqty");e.value=Math.max(1,(parseInt(e.value)||1)+n)}let wn=null,Pu=0,ze=null;function wT(){document.addEventListener("touchstart",n=>{const e=n.target.closest(".swipe-inner");!e||!e.closest(".swipe-wrap")||f.selectMode||(wn=e,Pu=n.touches[0].clientX,e.classList.add("swiping"))},{passive:!0}),document.addEventListener("touchmove",n=>{if(!wn)return;const e=n.touches[0].clientX-Pu,t=Math.max(-80,Math.min(0,e));wn.style.transform=`translateX(${t}px)`,Math.abs(e)>8&&n.preventDefault()},{passive:!1}),document.addEventListener("touchend",()=>{if(!wn)return;const n=wn,e=n.closest(".swipe-wrap");n.classList.remove("swiping"),(parseFloat(n.style.transform.replace("translateX(",""))||0)<-50?(n.style.transform="translateX(-80px)",e==null||e.classList.add("open"),ze&&ze!==e&&Xo(ze),ze=e):(n.style.transform="translateX(0)",e==null||e.classList.remove("open"),ze===e&&(ze=null)),wn=null}),document.addEventListener("touchstart",n=>{if(!ze||n.target.closest(".swipe-del"))return;const e=n.target.closest(".swipe-inner");e&&e.closest(".swipe-wrap")===ze||(Xo(ze),ze=null)},{passive:!0})}function Xo(n){const e=n==null?void 0:n.querySelector(".swipe-inner");e&&(e.style.transform="translateX(0)"),n==null||n.classList.remove("open")}async function bT(n,e){const t=p("sw-"+n);t&&(t.style.opacity="0.5"),e==="shop"?await hr(n):(await fa(n),D("Item removed"))}function ET(n,e){const t=p("sw-"+n);if(t){const s=t.querySelector(".swipe-inner");if((parseFloat((s.style.transform||"").replace("translateX(",""))||0)<-10){Xo(t),ze=null;return}}if(f.selectMode){f.selectedIds.has(n)?(f.selectedIds.delete(n),t==null||t.classList.remove("selected")):(f.selectedIds.add(n),t==null||t.classList.add("selected")),kr();return}e==="shop"?window.togShop(n):window.openAdj(n)}function TT(){if(f.selectMode==="shop"){Bn();return}f.selectMode&&Bn(),f.selectMode="shop",f.selectedIds.clear(),document.querySelectorAll("#shlist .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=p("sh-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),kr()}function IT(){if(f.selectMode==="inv"){Bn();return}f.selectMode&&Bn(),f.selectMode="inv",f.selectedIds.clear(),document.querySelectorAll("#ibody .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=p("inv-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),kr()}function Bn(){f.selectMode=null,f.selectedIds.clear(),document.querySelectorAll(".swipe-wrap.selecting").forEach(t=>t.classList.remove("selecting","selected"));const n=p("sh-selbtn");n&&(n.classList.remove("active"),n.textContent="Select");const e=p("inv-selbtn");e&&(e.classList.remove("active"),e.textContent="Select"),kr()}async function ST(){if(!f.selectedIds.size)return;const n=[...f.selectedIds],e=f.selectMode;Bn(),e==="shop"?await Promise.all(n.map(t=>hr(t))):await Promise.all(n.map(t=>fa(t))),D(`Removed ${n.length} item${n.length!==1?"s":""} 🗑`)}function kr(){const n=p("multi-bar");if(!n)return;const e=f.selectedIds.size,t=p("multi-count");t&&(t.textContent=e),f.selectMode?n.classList.add("visible"):n.classList.remove("visible")}const AT=["Chicken","Beef","Fish","Vegetarian","Vegan","Quick","Kids","Healthy","Batch Cook","Date Night"];function pf(n){return"chip-"+n.split(" ").join("-")}function mf(){const n=p("recChips");n&&(n.innerHTML=AT.map(e=>`<button onclick="toggleChip('${e}')" id="${pf(e)}" style="padding:5px 10px;border-radius:20px;border:1px solid var(--bd);background:var(--s2);color:var(--tx2);font-size:.78rem;cursor:pointer;transition:all .15s">${e}</button>`).join(""))}function kT(n){const e=p(pf(n));window._activeChips.has(n)?(window._activeChips.delete(n),e&&(e.style.background="var(--s2)",e.style.color="var(--tx2)",e.style.borderColor="var(--bd)")):(window._activeChips.add(n),e&&(e.style.background="var(--ac)",e.style.color="#000",e.style.borderColor="var(--ac)")),gf()}function gf(){const n=p("recPicker"),e=p("recFilter")?p("recFilter").value.trim().toLowerCase():"",t=[...window._activeChips].map(r=>r.toLowerCase()),i=[...f.recs].sort((r,a)=>(a.cookCount||0)-(r.cookCount||0)).filter(r=>{const a=(r.name+" "+(r.description||"")+" "+(r.tags||[]).join(" ")).toLowerCase(),c=e?e.split(/\s+/).every(d=>a.includes(d)):!0,u=t.every(d=>a.includes(d));return c&&u});n.innerHTML='<option value="">— pick a saved recipe —</option>'+i.map(r=>`<option value="${r.id}">${r.name}</option>`).join(""),window._pickedRec=null,p("mealMinp").value=""}function CT(n,e){f.md=n,p("mealMttl").textContent="Meal for "+e,p("mealMinp").value=f.mp[n]||"",window._pickedRec=null,window._activeChips=new Set;const t=p("recFilter");t&&(t.value=""),mf();const s=p("recPicker");if(f.recs&&f.recs.length){const i=[...f.recs].sort((c,u)=>(u.cookCount||0)-(c.cookCount||0));s.innerHTML='<option value="">— pick a saved recipe —</option>'+i.map(c=>`<option value="${c.id}">${c.name}</option>`).join("");const r=f.mp[n]||"",a=i.find(c=>c.name===r);s.value=a?a.id:"",p("recPickerWrap").style.display="block"}else p("recPickerWrap").style.display="none";p("mealM").classList.add("active"),setTimeout(()=>p("mealMinp").focus(),100)}function RT(n){if(!n){window._pickedRec=null,p("mealMinp").value="";return}const e=f.recs.find(t=>t.id===n);e&&(window._pickedRec=e,p("mealMinp").value=e.name)}function Qa(){p("mealM").classList.remove("active")}async function PT(){const n=p("mealMinp").value.trim();if(await dn(f.md,n||null),window._pickedRec&&window._pickedRec.description){const e=window._pickedRec.description,t=f.inv.map(a=>a.name.toLowerCase()),s=f.shop.map(a=>a.name.toLowerCase()),i=e.split(/[\n,]/).map(a=>a.replace(/^[\d\/\s]*(cup|tbsp|tsp|oz|lb|g|kg|ml|l|clove|slice|piece|bunch|head|can|package|pkg)s?\.?\s*/gi,"").replace(/^[\d]+\s*/,"").trim()).filter(a=>a.length>1&&a.length<60);let r=0;for(const a of i){if(/\b(add|mix|heat|cook|bake|stir|boil|fry|slice|chop|dice|combine|place|pour|season|serve|preheat|bring|remove|let|set|transfer)\b/i.test(a))continue;const c=a.replace(/^[-•*]\s*/,"").trim();if(!c||c.length<2)continue;const u=c.toLowerCase();t.some(d=>d.includes(u)||u.includes(d))||s.some(d=>d===u)||(await je({id:Date.now().toString()+Math.random().toString(36).slice(2),name:c,qty:1,checked:!1,src:"recipe"}),r++)}r>0&&D(`Added ${r} ingredient${r!==1?"s":""} to shopping list 🛒`)}window._pickedRec=null,Qa(),gn(),Zs(),Zn()}async function xT(){await dn(f.md,null),Qa(),gn(),Zs(),Zn()}function DT(n){const e=f.mp[n];e&&(f.cn=e,f.nr=0,p("cookedNm").textContent=e,p("cnotes").value="",Rs("cstars",0),p("cookedM").classList.add("active"))}async function LT(){await qh(f.cn,Pt()),await dn(Pt(),null),p("cookedM").classList.remove("active"),gn(),Zn(),D("Meal logged!")}async function NT(){var s;const n=p("cnotes").value.trim(),e=(s=p("tog-leftover"))==null?void 0:s.classList.contains("on");await qh(f.cn,Pt());const t=f.recs.find(i=>i.name.toLowerCase()===f.cn.toLowerCase());t?await Ft({...t,cookCount:(t.cookCount||0)+1,lastCooked:Pt()}):await Ft({id:"rec-"+Date.now(),name:f.cn,rating:f.nr,favorited:!1,notes:n,description:"",source:"Meal Plan",tags:[],cookCount:1,savedAt:new Date().toLocaleDateString(),lastCooked:Pt()}),e&&await dn(kv(),f.cn+" (leftovers)"),await dn(Pt(),null),p("cookedM").classList.remove("active"),gn(),Zn(),D(e?"Saved! Leftovers planned for tomorrow 🥡":"Saved to recipes! ⭐")}function OT(n){p("schedNm").textContent=n;const e=["S","M","T","W","T","F","S"],t=new Date;t.setHours(0,0,0,0),p("schedWk").innerHTML=Qn().map((s,i)=>{const r=s.toISOString().split("T")[0],a=s.getTime()===t.getTime(),c=f.mp[r];return`<div class="wd${a?" today":""}${c?" hm":""}" onclick="schedSet('${r}','${n}')"><div class="wdn">${e[i]}</div><div class="wdd">${s.getDate()}</div>${c?`<div class="wdm">${c.substring(0,8)}…</div>`:""}</div>`}).join(""),p("schedM").classList.add("active")}async function MT(n,e){await dn(n,e),p("schedM").classList.remove("active"),gn(),Zn(),D("Scheduled! 📅")}function VT(){const n=i=>p(i),e=(i,r)=>{const a=n(i);a&&(a.value=r||"")};e("setName",f.cfg.name),e("setAdults",f.cfg.adults),e("setKids",f.cfg.kids),e("setOther",f.cfg.other),e("setCuisines",f.cfg.cuisines),e("setCookTime",f.cfg.cookTime),e("setZipcode",f.cfg.zipcode);const t=(i,r)=>{const a=n(i);a&&a.classList.toggle("on",!!r)};t("tg-nopork",f.cfg.nopork),t("tg-noshellfish",f.cfg.noshellfish),t("tg-vegetarian",f.cfg.vegetarian),t("tg-glutenfree",f.cfg.glutenfree),t("tg-notif",f.cfg.notif);const s=p("notifTimeRow");s&&(s.style.display=f.cfg.notif?"block":"none"),e("setNotifTime",f.cfg.notifTime||"8"),e("setNotifDays",String(f.cfg.notifDays||3)),Ya(),vf()}async function $T(){f.cfg={...f.cfg,name:p("setName").value.trim(),adults:p("setAdults").value.trim(),kids:p("setKids").value.trim(),nopork:p("tg-nopork").classList.contains("on"),noshellfish:p("tg-noshellfish").classList.contains("on"),vegetarian:p("tg-vegetarian").classList.contains("on"),glutenfree:p("tg-glutenfree").classList.contains("on"),other:p("setOther").value.trim(),cuisines:p("setCuisines").value.trim(),cookTime:p("setCookTime").value,zipcode:p("setZipcode")?p("setZipcode").value.trim():"",notif:p("tg-notif").classList.contains("on"),notifTime:p("setNotifTime")?p("setNotifTime").value:"8",notifDays:parseInt(p("setNotifDays")?p("setNotifDays").value:"3")},await ur(),f.cfg.notif&&yf(),D("Settings saved!"),Ae("settings"),Fa()}async function FT(){var e,t;const n=((t=(e=p("setZipcode"))==null?void 0:e.value)==null?void 0:t.trim())||"";f.cfg={...f.cfg,zipcode:n},await ur(),D("Saved!")}async function UT(n){if(!n.classList.contains("on")){if(!("Notification"in window)){D("Notifications not supported on this browser");return}if(Notification.permission==="denied"){D("Notifications blocked — enable in browser settings");return}if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){D("Notifications permission denied");return}}n.classList.toggle("on");const t=p("notifTimeRow");t&&(t.style.display=n.classList.contains("on")?"block":"none")}function jT(){if(Notification.permission!=="granted"){D("Enable notifications first");return}const n=f.inv.filter(t=>{const s=it(t.expiry);return s&&(s.c==="expiring"||s.c==="expired")});if(!n.length){new Notification("Kitchen 🧺",{body:"No items expiring soon — you're all good!"});return}const e=n.slice(0,3).map(t=>t.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${e}${n.length>3?" + "+(n.length-3)+" more":""} need attention`})}function yf(){if(!f.cfg.notif||Notification.permission!=="granted")return;const n=parseInt(localStorage.getItem("ks-lastnotif")||"0"),e=Date.now();if(e-n<864e5)return;localStorage.setItem("ks-lastnotif",e.toString());const t=f.cfg.notifDays||3,s=f.inv.filter(r=>{if(!it(r.expiry))return!1;const c=new Date(r.expiry+"T00:00:00"),u=new Date;return u.setHours(0,0,0,0),Math.round((c-u)/864e5)<=t});if(!s.length)return;const i=s.slice(0,3).map(r=>r.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${i}${s.length>3?" + "+(s.length-3)+" more":""} expiring in ${t} days or less`})}function Ja(){return Pe("ks-hhs")||[f.hid]}async function vf(){const n=De();if(n)try{const e=await fe(`households/${f.hid}`);if(!e)return;const t=e.ownerUid===n.uid,s=p("hhInviteCode");if(s&&(s.textContent=e.inviteCode||"—"),e.inviteCode&&t)try{await X(`household_codes/${e.inviteCode}`,{householdId:f.hid})}catch{}const i=p("regenCodeBtn");i&&(i.style.display=t?"":"none");const r=p("hhMembers");r&&e.members&&(r.innerHTML=e.members.map(a=>{const c=a.uid===n.uid,u=a.role==="owner"?"Owner":"Member",d=t&&!c?`<button onclick="event.stopPropagation();removeMemberFromHH('${a.uid}')" style="background:none;border:none;color:var(--rd);cursor:pointer;font-size:.78rem;padding:4px 8px">Remove</button>`:"";return`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px">
          <div>
            <div style="font-size:.86rem;font-weight:500;color:var(--tx)">${a.name}${c?" (you)":""}</div>
            <div style="font-size:.7rem;color:var(--mt);margin-top:2px">${u}</div>
          </div>
          ${d}
        </div>`}).join(""))}catch(e){console.error("renderHouseholdInfo error:",e)}}async function BT(){var e;const n=(e=p("hhInviteCode"))==null?void 0:e.textContent;if(!(!n||n==="—"))try{await navigator.clipboard.writeText(n),D("Invite code copied!")}catch{D("Couldn't copy — try manually")}}async function qT(){var t;const n=(t=p("hhInviteCode"))==null?void 0:t.textContent;if(!n||n==="—")return;const e=`Join my kitchen on Kitchen app! Use invite code: ${n} at https://pantry-app-zeta-six.vercel.app`;if(navigator.share)try{await navigator.share({text:e})}catch{}else try{await navigator.clipboard.writeText(e),D("Share text copied to clipboard!")}catch{D("Couldn't share — try manually")}}async function HT(){if(confirm("Regenerate invite code? The old code will stop working."))try{const n=await hv(f.hid);if(n){const e=p("hhInviteCode");e&&(e.textContent=n),D("New invite code generated!")}}catch(n){console.error("regenInviteCode error:",n),D("Failed to regenerate code")}}async function zT(n){if(confirm("Remove this member from the household?"))try{await dv(f.hid,n),D("Member removed"),vf()}catch(e){console.error("removeMemberFromHH error:",e),D("Failed to remove member")}}async function GT(){var s,i,r;const n=(r=(i=(s=p("newHHCode"))==null?void 0:s.value)==null?void 0:i.trim())==null?void 0:r.toUpperCase();if(!n)return;const e=De();if(!e){D("Sign in first");return}const t=p("newHHCode");t.disabled=!0;try{const a=await Bh(n,e);if(!a){D("Invalid invite code. Check and try again."),t.disabled=!1;return}const c=Ja();c.includes(a)||c.push(a),et("ks-hhs",c),p("newHHCode").value="",Ya(),D("Household joined!")}catch(a){console.error("addHousehold error:",a),D("Failed to join household")}t.disabled=!1}function KT(n){n!==f.hid&&(localStorage.setItem("ks-h",n),location.reload())}async function WT(n){if(n===f.hid){D("Can't remove active household");return}const e=De();if(e)try{const s=await fe(`users/${e.uid}`);if(s){const r=(s.householdIds||[]).filter(a=>a!==n);await X(`users/${e.uid}`,{...s,householdIds:r,id:void 0})}const i=await fe(`households/${n}`);if(i){const r=(i.members||[]).filter(c=>c.uid!==e.uid),a=(i.memberUids||[]).filter(c=>c!==e.uid);await X(`households/${n}`,{...i,members:r,memberUids:a,id:void 0})}}catch(s){console.error("removeHousehold error:",s)}const t=Ja().filter(s=>s!==n);et("ks-hhs",t),Ya()}async function Ya(){const n=Ja().filter(s=>s!==f.hid),e=p("hhList");if(!e)return;if(!n.length){e.innerHTML='<div style="font-size:.82rem;color:var(--mt);padding:10px 0">No other households yet.</div>';return}const t=[];for(const s of n){let i=s;try{const r=await fe(`households/${s}`);r!=null&&r.name&&(i=r.name)}catch{}t.push({id:s,name:i})}e.innerHTML=t.map(({id:s,name:i})=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px;cursor:pointer" onclick="switchHousehold('${s}')">
      <div>
        <div style="font-size:.88rem;font-weight:500;color:var(--tx)">${i}</div>
        <div style="font-size:.7rem;color:var(--mt);margin-top:2px">Tap to switch</div>
      </div>
      <button onclick="event.stopPropagation();removeHousehold('${s}')" style="background:none;border:none;color:var(--mt);cursor:pointer;font-size:.82rem;padding:4px 8px">✕</button>
    </div>`).join("")}const tr={gold:{name:"Gold",swatch:"#d4a853",dark:{bg:"#0f0f0d",sf:"#1a1a17",card:"#222220",card2:"#2a2a27",b1:"#333330",b2:"#3d3d39",ac:"#d4a853",ac2:"#e8c27a",acr:"212,168,83",tx:"#ede8d8",tx2:"#b8b09a",mt:"#7a7468"},light:{bg:"#faf8f2",sf:"#ffffff",card:"#f3ede0",card2:"#efe8d8",b1:"#ddd5c0",b2:"#cec4ac",ac:"#a8732a",ac2:"#c48f3e",acr:"168,115,42",tx:"#2a2418",tx2:"#5c5040",mt:"#9a8870"}},forest:{name:"Forest",swatch:"#4a9e5c",dark:{bg:"#0a1410",sf:"#111f17",card:"#182a1e",card2:"#1e3326",b1:"#2a4032",b2:"#355040",ac:"#6db56d",ac2:"#8fd08f",acr:"109,181,109",tx:"#e4f0e4",tx2:"#9dbf9d",mt:"#5a7a5a"},light:{bg:"#f2f9f2",sf:"#ffffff",card:"#e8f5e8",card2:"#dff0df",b1:"#c0ddc0",b2:"#a8cca8",ac:"#2e7d32",ac2:"#43a047",acr:"46,125,50",tx:"#0d2010",tx2:"#2e4f2e",mt:"#5a7a5a"}},ocean:{name:"Ocean",swatch:"#38bdf8",dark:{bg:"#060e1a",sf:"#0d1829",card:"#112035",card2:"#162840",b1:"#1e3554",b2:"#264468",ac:"#38bdf8",ac2:"#7dd3fc",acr:"56,189,248",tx:"#e0f2fe",tx2:"#7ab8d4",mt:"#486880"},light:{bg:"#f0f8ff",sf:"#ffffff",card:"#e0f2fe",card2:"#d4ecf9",b1:"#b0d8f0",b2:"#90c4e4",ac:"#0369a1",ac2:"#0284c7",acr:"3,105,161",tx:"#082040",tx2:"#1e4060",mt:"#4a7090"}},bordeaux:{name:"Bordeaux",swatch:"#e8829a",dark:{bg:"#120810",sf:"#1c0e18",card:"#261420",card2:"#301828",b1:"#4a2238",b2:"#5c2a46",ac:"#e8829a",ac2:"#f4aabb",acr:"232,130,154",tx:"#fce8ee",tx2:"#d4909e",mt:"#8a5060"},light:{bg:"#fff5f7",sf:"#ffffff",card:"#ffe8ed",card2:"#ffd8e0",b1:"#f4b8c4",b2:"#eca0b0",ac:"#be3455",ac2:"#d94070",acr:"190,52,85",tx:"#2a080e",tx2:"#6a2030",mt:"#9a5060"}},sand:{name:"Sand",swatch:"#e07a5f",dark:{bg:"#170e08",sf:"#221508",card:"#2e1c0e",card2:"#382414",b1:"#4a3020",b2:"#5c3c28",ac:"#e07a5f",ac2:"#eca080",acr:"224,122,95",tx:"#fdf0e8",tx2:"#c8a090",mt:"#887060"},light:{bg:"#fdf6ec",sf:"#fffbf5",card:"#f5e8d8",card2:"#eedcc8",b1:"#ddc8ac",b2:"#ccb494",ac:"#c1440e",ac2:"#d4602a",acr:"193,68,14",tx:"#2a1808",tx2:"#5c3820",mt:"#9a7060"}},midnight:{name:"Midnight",swatch:"#818cf8",dark:{bg:"#050814",sf:"#0a0d1f",card:"#0f1228",card2:"#141830",b1:"#1e2448",b2:"#272e58",ac:"#818cf8",ac2:"#a5b0ff",acr:"129,140,248",tx:"#e8eaff",tx2:"#9099cc",mt:"#505880"},light:{bg:"#f0f1ff",sf:"#ffffff",card:"#e4e6ff",card2:"#d8dbff",b1:"#b8bdff",b2:"#a0a6f4",ac:"#4f46e5",ac2:"#6366f1",acr:"79,70,229",tx:"#0a0820",tx2:"#202060",mt:"#5050a0"}},lavender:{name:"Lavender",swatch:"#c084fc",dark:{bg:"#0e0814",sf:"#160e20",card:"#1e1430",card2:"#261a3c",b1:"#382454",b2:"#442c66",ac:"#c084fc",ac2:"#d8a8ff",acr:"192,132,252",tx:"#f5ecff",tx2:"#c0a0e0",mt:"#7a5898"},light:{bg:"#faf5ff",sf:"#ffffff",card:"#f3e8ff",card2:"#ecdcff",b1:"#d8b8f8",b2:"#c8a0f0",ac:"#9333ea",ac2:"#a855f7",acr:"147,51,234",tx:"#1a0830",tx2:"#481080",mt:"#805098"}}};let js=Pe("ks-theme")||"gold",Bs=Pe("ks-mode")||"auto";function nr(n,e){js=n,Bs=e,et("ks-theme",n),et("ks-mode",e);const t=tr[n]||tr.gold,i=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?t.dark:t.light,r=document.documentElement.style;r.setProperty("--bg",i.bg),r.setProperty("--sf",i.sf),r.setProperty("--card",i.card),r.setProperty("--card2",i.card2),r.setProperty("--b1",i.b1),r.setProperty("--b2",i.b2),r.setProperty("--ac",i.ac),r.setProperty("--ac2",i.ac2),r.setProperty("--acd","rgba("+i.acr+",.12)"),r.setProperty("--tx",i.tx),r.setProperty("--tx2",i.tx2),r.setProperty("--mt",i.mt),r.setProperty("--gn","#6db56d"),r.setProperty("--gnd","rgba(109,181,109,.12)"),r.setProperty("--rd","#d96b6b"),r.setProperty("--rdd","rgba(217,107,107,.12)"),r.setProperty("--am","#c8960a"),r.setProperty("--amd","rgba(200,150,10,.12)"),_f(e),wf(n)}function QT(n){nr(js,n)}function _f(n){["auto","light","dark"].forEach(e=>{const t=p("mode-"+e);t&&(t.style.background=e===n?"var(--ac)":"",t.style.color=e===n?"var(--bg)":"",t.style.borderColor=e===n?"var(--ac)":"")})}function wf(n){const e=p("themePicker");e&&(e.innerHTML="",Object.keys(tr).forEach(t=>{const s=tr[t],i=t===n,r=document.createElement("div");r.title=s.name,r.style.cssText="width:36px;height:36px;border-radius:50%;background:"+s.swatch+";cursor:pointer;border:3px solid "+(i?"var(--tx)":"transparent")+";box-shadow:"+(i?"0 0 0 2px var(--ac)":"none")+";transition:all .2s;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.85rem",r.textContent=i?"✓":"",r.onclick=()=>nr(t,Bs),r.onmouseover=function(){this.style.transform="scale(1.15)"},r.onmouseout=function(){this.style.transform="scale(1)"},e.appendChild(r)}))}function JT(){nr(js,Bs),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{Bs==="auto"&&nr(js,"auto")})}function YT(){wf(js),_f(Bs)}async function XT(){const n=p("enrichBtn"),e=p("enrichProgress"),t=p("enrichStatus"),s=p("enrichBar");n&&(n.disabled=!0),e&&(e.style.display="block");const i=f.shop.filter(d=>xu(d)),r=f.inv.filter(d=>xu(d)),a=[...i.map(d=>({item:d,list:"shop"})),...r.map(d=>({item:d,list:"inv"}))];if(!a.length){t&&(t.textContent="All items already enriched!"),s&&(s.style.width="100%"),n&&(n.disabled=!1),D("Nothing to enrich — all items already have data.");return}let c=0,u=0;for(let d=0;d<a.length;d++){const{item:g,list:w}=a[d],I=Math.round((d+1)/a.length*100);t&&(t.textContent=`Processing "${g.name}" (${d+1}/${a.length})…`),s&&(s.style.width=I+"%");try{const V=(await(await fetch(`/api/text-search?q=${encodeURIComponent(g.name)}`)).json()).results||[];if(V.length){const O=V[0],G={...g,image:O.image||g.image||null,brand:O.brand||g.brand||"",category:O.category||g.category||"",nutrition:O.nutrition||g.nutrition||null,source:O.source||g.source||"search"};w==="shop"?await je(G):await Ue(G),c++}else u++}catch(R){console.warn(`Enrich failed for "${g.name}":`,R),u++}d<a.length-1&&await ZT(300)}t&&(t.textContent=`Done! ${c} enriched, ${u} skipped.`),s&&(s.style.width="100%"),n&&(n.disabled=!1),D(`Enrichment complete: ${c} updated, ${u} unchanged.`)}function xu(n){return!n.name||n.name.length<2?!1:!n.image&&!n.brand}function ZT(n){return new Promise(e=>setTimeout(e,n))}let Rt=0;async function eI(){const n=De();if(n)try{const e=await fe(`users/${n.uid}`);if(e!=null&&e.onboardingDone)return;tI()}catch{}}function tI(){const n=p("ov-onboarding");n&&(Rt=0,n.classList.add("active"),bf())}function bf(){const n=p("onboarding-body");if(!n)return;const t=`<div style="display:flex;gap:6px;justify-content:center;margin-bottom:24px">${Array.from({length:4},(s,i)=>`<div style="width:8px;height:8px;border-radius:50%;background:${i===Rt?"var(--ac)":"var(--b2)"};transition:background .2s"></div>`).join("")}</div>`;Rt===0?n.innerHTML=`${t}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:4rem;margin-bottom:16px">🧺</div>
        <div style="font-family:'Fraunces',serif;font-size:2rem;font-weight:300;color:var(--ac);margin-bottom:12px">Welcome to Kitchen!</div>
        <p style="font-size:.92rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 28px">Your smart kitchen assistant that tracks inventory, plans meals, finds deals, and suggests recipes — all powered by AI.</p>
        <button class="btn bp bf" onclick="onboardNext()">Let's get started →</button>
      </div>`:Rt===1?n.innerHTML=`${t}
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;margin-bottom:6px">Set up your kitchen</div>
      <p style="font-size:.82rem;color:var(--mt);margin-bottom:18px;line-height:1.5">These help Claude give you better recipe suggestions.</p>
      <div class="frow"><label class="flbl">Household name</label><input class="fi" id="ob-name" placeholder="e.g. The Smith Family" value="${f.cfg.name||""}"/></div>
      <div class="frow"><label class="flbl">Adults</label><input class="fi" id="ob-adults" placeholder="e.g. Bora, Sarah" value="${f.cfg.adults||""}"/></div>
      <div class="frow"><label class="flbl">Kids</label><input class="fi" id="ob-kids" placeholder="e.g. 1 toddler (age 3)" value="${f.cfg.kids||""}"/></div>
      <div class="frow"><label class="flbl">Favourite cuisines</label><input class="fi" id="ob-cuisines" placeholder="e.g. Italian, Turkish, Mexican" value="${f.cfg.cuisines||""}"/></div>
      <div class="frow"><label class="flbl">Weeknight cook time</label>
        <select class="fsel" id="ob-cooktime">
          <option value="20-30 min"${f.cfg.cookTime==="20-30 min"?" selected":""}>20–30 min</option>
          <option value="30-45 min"${f.cfg.cookTime==="30-45 min"?" selected":""}>30–45 min</option>
          <option value="40-60 min"${f.cfg.cookTime==="40-60 min"?" selected":""}>40–60 min</option>
          <option value="60+ min"${f.cfg.cookTime==="60+ min"?" selected":""}>60+ min</option>
        </select>
      </div>
      <div class="frow"><label class="flbl">Dietary restrictions</label>
        <div style="display:flex;flex-direction:column;gap:10px;margin-top:4px">
          <label style="display:flex;align-items:center;gap:10px;font-size:.88rem;cursor:pointer"><input type="checkbox" id="ob-nopork" ${f.cfg.nopork?"checked":""}/> No pork</label>
          <label style="display:flex;align-items:center;gap:10px;font-size:.88rem;cursor:pointer"><input type="checkbox" id="ob-noshellfish" ${f.cfg.noshellfish?"checked":""}/> No shellfish</label>
          <label style="display:flex;align-items:center;gap:10px;font-size:.88rem;cursor:pointer"><input type="checkbox" id="ob-vegetarian" ${f.cfg.vegetarian?"checked":""}/> Vegetarian</label>
          <label style="display:flex;align-items:center;gap:10px;font-size:.88rem;cursor:pointer"><input type="checkbox" id="ob-glutenfree" ${f.cfg.glutenfree?"checked":""}/> Gluten-free</label>
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
      </div>`)}async function nI(){var n,e,t,s,i,r,a,c,u,d,g,w,I;if(Rt===1){const R=(e=(n=p("ob-name"))==null?void 0:n.value)==null?void 0:e.trim(),N=(s=(t=p("ob-adults"))==null?void 0:t.value)==null?void 0:s.trim(),V=(r=(i=p("ob-kids"))==null?void 0:i.value)==null?void 0:r.trim(),O=(c=(a=p("ob-cuisines"))==null?void 0:a.value)==null?void 0:c.trim(),G=(u=p("ob-cooktime"))==null?void 0:u.value;R&&(f.cfg.name=R),N&&(f.cfg.adults=N),V&&(f.cfg.kids=V),O&&(f.cfg.cuisines=O),G&&(f.cfg.cookTime=G),f.cfg.nopork=((d=p("ob-nopork"))==null?void 0:d.checked)||!1,f.cfg.noshellfish=((g=p("ob-noshellfish"))==null?void 0:g.checked)||!1,f.cfg.vegetarian=((w=p("ob-vegetarian"))==null?void 0:w.checked)||!1,f.cfg.glutenfree=((I=p("ob-glutenfree"))==null?void 0:I.checked)||!1,await ur()}Rt++,bf()}async function Ef(){const n=p("ov-onboarding");n&&n.classList.remove("active");const e=De();if(e)try{const t=await fe(`users/${e.uid}`);t&&await X(`users/${e.uid}`,{...t,onboardingDone:!0,id:void 0})}catch{}}async function sI(){await Ef(),D("You can always adjust settings later ⚙️")}window.getIdToken=Fh;M.renderAll=Ua;M.renderSum=Zs;M.renderRecs=Ar;M.renderShop=es;Ub(Sr);window.showScreen=function(n){var e,t;document.querySelectorAll(".ov.active").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".ni").forEach(s=>s.classList.remove("active")),(e=p("screen-"+n))==null||e.classList.add("active"),(t=p("nav-"+n))==null||t.classList.add("active"),n==="home"&&ef(),n==="inventory"&&Sr(),n==="recipes"&&(f.rt==="community"?Ha():Ar()),n==="shopping"&&es(),n==="insights"&&eT()};const iI=vt;window.showOv=function(n){iI(n),n==="settings"&&setTimeout(YT,80)};window.hideOv=Ae;window.initHome=Fa;window.addLowToShop=Hb;window.toggleExp=function(){const n=p("exppanel");n.style.display=n.style.display==="none"?"block":"none"};window.openAdj=yE;window.updL=vE;window.adjQ=_E;window.adjQD=wE;window.adjE=bE;window.adjNote=EE;window.setIT=SE;window.addManual=AE;window.valMA=kE;window.chgMQ=CE;window.selML=RE;window.remItem=qa;window.importDoc=PE;window.adjLowThresh=TE;window.adjLowThreshD=IE;window.qadd=Wb;window.togShop=eE;window.toggleShNote=tE;window.saveShNote=nE;window.openShQty=sE;window.adjShQty=iE;window.saveShQty=rf;window.togAisle=rE;window.setSHT=oE;window.shareList=aE;window.openAddToKitchen=cE;window.setAtkLoc=lE;window.confirmAddToKitchen=uE;window.buildList=hE;window.toggleVoice=nf;window.toggleAddNote=Qb;window.openShopAddSheet=Jb;window.closeShopAddSheet=Ir;window.shopAddScan=Yb;window.shopAddVoice=Xb;window.closeEnrichSheet=Zi;window.pickEnrichResult=Zb;window.bpTog=dE;window.bpSelAll=fE;window.bpUpdBtn=function(){};window.bpConfirm=pE;window._bpItems=[];window.searchDeals=mE;window.dealsFromList=gE;window.addDealToList=af;window.renderDealsZipBanner=of;window.clrChk=function(){f.shop.filter(n=>n.checked).forEach(n=>{sf(n.name),hr(n.id)})};window.setRT=NE;window.togFav=OE;window.valR=ME;window.importFromUrl=VE;window.saveRec=$E;window.openER=FE;window.updR=UE;window.delER=jE;window.scaleRec=BE;window.whatCanIMake=qE;window.addRecIngToShop=HE;window.setStar=zE;window.togTag=DE;window.togglePublic=GE;window.loadCommunity=Ha;window.setComCuisine=KE;window.setComSearch=WE;window.openComRecipe=QE;window.likeComRecipe=JE;window.saveComToKitchen=YE;window.addComComment=XE;window.shareComRecipe=ZE;window.sendChat=lf;window.sendPill=oT;window.clrChat=aT;window.ar=uf;window.importChatRecipe=rT;window.stopLiveScanner=Ka;window.resumeScanner=lT;window.openScanForList=uT;window.openScanForInventory=hT;window.addScannedToList=fT;window.toggleScanNote=dT;window.togManual=pT;window.manLookup=mT;window.selRL=Wa;window.valAdd=yT;window.addToInv=vT;window.chgAQ=_T;window.swipeDelItem=bT;window.swipeRowTap=ET;window.togShopSelect=TT;window.togInvSelect=IT;window.cancelSelect=Bn;window.deleteSelected=ST;window.openMealM=CT;window.pickRec=RT;window.closeMealM=Qa;window.saveMeal=PT;window.clrMeal=xT;window.openCooked=DT;window.skipCooked=LT;window.saveCooked=NT;window.scheduleRecipe=OT;window.schedSet=MT;window.initRecChips=mf;window.toggleChip=kT;window.filterRecs=gf;window._pickedRec=null;window._activeChips=new Set;window.saveSettings=$T;window.saveZipcode=FT;window.toggleNotif=UT;window.testNotif=jT;window.addHousehold=GT;window.switchHousehold=KT;window.removeHousehold=WT;window.setMode=QT;window.showNotif=D;window.copyInviteCode=BT;window.shareInviteCode=qT;window.regenInviteCode=HT;window.removeMemberFromHH=zT;window.enrichExistingItems=XT;window.manualRefresh=async function(n){const e=event==null?void 0:event.target;e&&(e.classList.add("spinning"),setTimeout(()=>e.classList.remove("spinning"),600)),ae("syncing");try{(n==="shop"||n==="both")&&(f.shop=await xe(`households/${f.hid}/shopping`),es()),(n==="inv"||n==="both")&&(f.inv=await xe(`households/${f.hid}/inventory`),Sr(),Ua()),ae("synced"),D("Refreshed ✓")}catch(t){console.error("manualRefresh error:",t),ae("error"),D("Refresh failed")}};window.onboardNext=nI;window.finishOnboarding=Ef;window.skipOnboarding=sI;window._appStart=async function(n){var t;f.hid=n,p("LS").style.display="none",p("APP").style.display="flex",window.showScreen("home"),ae("syncing");const e=De();if(e)try{const s=await fe(`users/${e.uid}`);if((t=s==null?void 0:s.householdIds)!=null&&t.length){const i=[...s.householdIds];i.includes(n)||i.push(n),et("ks-hhs",i)}else{const i=Pe("ks-hhs")||[n];i.includes(n)||(i.push(n),et("ks-hhs",i))}}catch{const s=Pe("ks-hhs")||[n];s.includes(n)||(s.push(n),et("ks-hhs",s))}else{const s=Pe("ks-hhs")||[n];s.includes(n)||(s.push(n),et("ks-hhs",s))}await mv(),VT(),Fa(),Kb(),Fb(f.hid);try{ae("syncing");const s=await Promise.allSettled([xe(`households/${f.hid}/inventory`),xe(`households/${f.hid}/recipes`),xe(`households/${f.hid}/shopping`)]),i=(r,a)=>r.status==="fulfilled"?r.value:a;f.inv=i(s[0],f.inv),f.recs=i(s[1],f.recs),f.shop=i(s[2],f.shop),ae("synced"),Ua(),Ar(),es(),Zs()}catch(s){console.error("initial load error",s),ae("error")}setTimeout(eI,500)};JT();wT();f.cfg.notif&&setTimeout(yf,3e3);es();function Cr(n){p("auth-loading").style.display="none",p("auth-signin").style.display=n==="signin"?"flex":"none",p("auth-signup").style.display=n==="signup"?"flex":"none",p("auth-join").style.display=n==="join"?"flex":"none",p("authError").style.display="none",p("signupError").style.display="none"}function Ke(n,e){const t=p(n);t&&(t.textContent=e,t.style.display="block")}function Rr(n){return{"auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password.","auth/invalid-credential":"Incorrect email or password.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password must be at least 6 characters.","auth/too-many-requests":"Too many attempts. Please try again later.","auth/popup-closed-by-user":"Sign-in popup was closed.","auth/cancelled-popup-request":"Sign-in was cancelled.","auth/account-exists-with-different-credential":"An account already exists with this email using a different sign-in method."}[n.code]||n.message||"Something went wrong. Please try again."}function Ve(n,e){n&&(e?(n._origText=n.textContent,n.textContent="Please wait…",n.disabled=!0):(n.textContent=n._origText||n.textContent,n.disabled=!1))}var Du;(Du=p("btnGoogle"))==null||Du.addEventListener("click",async()=>{const n=p("btnGoogle");Ve(n,!0),p("authError").style.display="none";try{await rv()}catch(e){Ke("authError",Rr(e))}Ve(n,!1)});var Lu;(Lu=p("btnApple"))==null||Lu.addEventListener("click",async()=>{const n=p("btnApple");Ve(n,!0),p("authError").style.display="none";try{await ov()}catch(e){Ke("authError",Rr(e))}Ve(n,!1)});var Nu;(Nu=p("btnEmailSign"))==null||Nu.addEventListener("click",async()=>{var s,i,r;const n=(i=(s=p("authEmail"))==null?void 0:s.value)==null?void 0:i.trim(),e=(r=p("authPass"))==null?void 0:r.value;if(!n||!e){Ke("authError","Please enter your email and password.");return}const t=p("btnEmailSign");Ve(t,!0),p("authError").style.display="none";try{await av(n,e)}catch(a){Ke("authError",Rr(a))}Ve(t,!1)});var Ou;(Ou=p("btnEmailSignup"))==null||Ou.addEventListener("click",async()=>{var i,r,a,c,u;const n=(r=(i=p("signupName"))==null?void 0:i.value)==null?void 0:r.trim(),e=(c=(a=p("signupEmail"))==null?void 0:a.value)==null?void 0:c.trim(),t=(u=p("signupPass"))==null?void 0:u.value;if(!n){Ke("signupError","Please enter your name.");return}if(!e||!t){Ke("signupError","Please enter your email and password.");return}const s=p("btnEmailSignup");Ve(s,!0),p("signupError").style.display="none";try{await cv(e,t,n)}catch(d){Ke("signupError",Rr(d))}Ve(s,!1)});var Mu;(Mu=p("btnToggleSignup"))==null||Mu.addEventListener("click",()=>Cr("signup"));var Vu;(Vu=p("btnToggleSignin"))==null||Vu.addEventListener("click",()=>Cr("signin"));var $u;($u=p("authPass"))==null||$u.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=p("btnEmailSign"))==null||e.click())});var Fu;(Fu=p("signupPass"))==null||Fu.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=p("btnEmailSignup"))==null||e.click())});window.doSignOut=async function(){confirm("Sign out of Kitchen?")&&await lv()};let yo=!1;function sr(n){localStorage.setItem("ks-h",n),p("LS").style.display="none",p("APP").style.display="flex",window._appStart(n)}function rI(n){Cr("join"),p("btnCreateKitchen").onclick=async()=>{var e;Ve(p("btnCreateKitchen"),!0);try{const t=((e=f.cfg)==null?void 0:e.name)||"My Kitchen";await jh(n.uid,t);const s=await ko(n);s.householdIds=[n.uid],await X(`users/${n.uid}`,s),localStorage.removeItem("ks-h");const i=Pe("ks-hhs");if(i){const r=i.filter(a=>a!==n.uid);r.push(n.uid),localStorage.setItem("ks-hhs",JSON.stringify(r))}sr(n.uid)}catch(t){console.error("Create kitchen error:",t),Ke("joinError","Something went wrong. Please try again."),Ve(p("btnCreateKitchen"),!1)}},p("btnJoinKitchen").onclick=async()=>{var t,s,i;const e=(i=(s=(t=p("joinCode"))==null?void 0:t.value)==null?void 0:s.trim())==null?void 0:i.toUpperCase();if(!e){Ke("joinError","Please enter an invite code.");return}Ve(p("btnJoinKitchen"),!0),p("joinError").style.display="none";try{let r=await fe(`users/${n.uid}`);r||(r=await ko(n));const a=await Bh(e,n);if(!a){Ke("joinError","Invalid invite code. Check and try again."),Ve(p("btnJoinKitchen"),!1);return}const c=Pe("ks-hhs")||[];c.includes(a)||c.push(a),et("ks-hhs",c),sr(a)}catch(r){console.error("Join kitchen error:",r),Ke("joinError","Something went wrong. Please try again."),Ve(p("btnJoinKitchen"),!1)}}}sv(async n=>{var e;if(n){if(localStorage.setItem("ks-who",n.displayName||((e=n.email)==null?void 0:e.split("@")[0])||"You"),!yo){yo=!0;try{const t=await fe(`users/${n.uid}`),s=localStorage.getItem("ks-h"),i=Pe("ks-hhs");if(!!t||!!s||i&&i.length>0){p("LS").style.display="none",p("APP").style.display="flex";const a=await fv(n);sr(a)}else rI(n)}catch(t){console.error("Failed to resolve household:",t);const s=n.uid;sr(s)}}}else Zd(),yo=!1,p("APP").style.display="none",p("LS").style.display="flex",Cr("signin")});
