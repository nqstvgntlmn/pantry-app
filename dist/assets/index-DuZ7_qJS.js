(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Ks={name:"The Bora Family",adults:"Bora",kids:"1 toddler (age 3)",nopork:!0,noshellfish:!1,vegetarian:!1,glutenfree:!1,other:"",cuisines:"Bangladeshi, Turkish, Mediterranean, American",cookTime:"40-60 min",zipcode:""},p={hid:null,inv:[],recs:[],shop:[],mp:{},cfg:{...Ks},cookLog:[],wasteLog:[],chat:[],cp:null,selR:"fridge",maL:"fridge",adjId:null,it:"all",rt:"all",md:null,cn:"",nr:0,eid:null,scanDestList:!1,aisleMode:!1,selectMode:null,selectedIds:new Set,comRecs:[],comTab:"browse",comSearch:"",comCuisine:"all",myLikes:new Set};function xe(n){try{return JSON.parse(localStorage.getItem(n))}catch{return null}}function tt(n,e){localStorage.setItem(n,JSON.stringify(e))}const Ep=()=>{};var gl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ip=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(r&63)<<12|(a&63)<<6|c&63)-65536;e[i++]=String.fromCharCode(55296+(u>>10)),e[i++]=String.fromCharCode(56320+(u&1023))}else{const r=n[t++],a=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|a&63)}}return e.join("")},oh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,m=r>>2,_=(r&3)<<4|c>>4;let I=(c&15)<<2|d>>6,R=d&63;u||(R=64,a||(I=64)),i.push(t[m],t[_],t[I],t[R])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(rh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ip(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const _=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||c==null||d==null||_==null)throw new Sp;const I=r<<2|c>>4;if(i.push(I),d!==64){const R=c<<4&240|d>>2;if(i.push(R),_!==64){const N=d<<6&192|_;i.push(N)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Sp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ap=function(n){const e=rh(n);return oh.encodeByteArray(e,!0)},Qs=function(n){return Ap(n).replace(/\./g,"")},ah=function(n){try{return oh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function kp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Cp=()=>kp().__FIREBASE_DEFAULTS__,Rp=()=>{if(typeof process>"u"||typeof gl>"u")return;const n=gl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Pp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ah(n[1]);return e&&JSON.parse(e)},mr=()=>{try{return Ep()||Cp()||Rp()||Pp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ch=n=>{var e,t;return(t=(e=mr())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},xp=n=>{const e=ch(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},lh=()=>{var n;return(n=mr())==null?void 0:n.config},uh=n=>{var e;return(e=mr())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Gn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function hh(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Dp(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Qs(JSON.stringify(t)),Qs(JSON.stringify(a)),""].join(".")}const xi={};function Np(){const n={prod:[],emulator:[]};for(const e of Object.keys(xi))xi[e]?n.emulator.push(e):n.prod.push(e);return n}function Mp(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let yl=!1;function dh(n,e){if(typeof window>"u"||typeof document>"u"||!Gn(window.location.host)||xi[n]===e||xi[n]||yl)return;xi[n]=e;function t(I){return`__firebase__banner__${I}`}const i="__firebase__banner",r=Np().prod.length>0;function a(){const I=document.getElementById(i);I&&I.remove()}function c(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function u(I,R){I.setAttribute("width","24"),I.setAttribute("id",R),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function d(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{yl=!0,a()},I}function m(I,R){I.setAttribute("id",R),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function _(){const I=Mp(i),R=t("text"),N=document.getElementById(R)||document.createElement("span"),$=t("learnmore"),M=document.getElementById($)||document.createElement("a"),W=t("preprendIcon"),Z=document.getElementById(W)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const j=I.element;c(j),m(M,$);const G=d();u(Z,W),j.append(Z,N,M,G),document.body.appendChild(j)}r?(N.innerText="Preview backend disconnected.",Z.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",_):_()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Op(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function Vp(){var e;const n=(e=mr())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $p(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Fp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Up(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jp(){const n=Se();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Bp(){return!Vp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Hp(){try{return typeof indexedDB=="object"}catch{return!1}}function qp(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp="FirebaseError";class yt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=zp,Object.setPrototypeOf(this,yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yi.prototype.create)}}class Yi{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],a=r?Wp(r,i):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new yt(s,c,i)}}function Wp(n,e){return n.replace(Gp,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Gp=/\{\$([^}]+)}/g;function Kp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function fn(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],a=e[s];if(vl(r)&&vl(a)){if(!fn(r,a))return!1}else if(r!==a)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function vl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Si(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Ai(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Qp(n,e){const t=new Jp(n,e);return t.subscribe.bind(t)}class Jp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Yp(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=fo),s.error===void 0&&(s.error=fo),s.complete===void 0&&(s.complete=fo);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function fo(){}/**
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
 */function je(n){return n&&n._delegate?n._delegate:n}class pn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Lp;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(em(e))try{this.getOrInitializeService({instanceIdentifier:cn})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=cn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cn){return this.instances.has(e)}getOptions(e=cn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(r);i===c&&a.resolve(s)}return s}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Zp(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=cn){return this.component?this.component.multipleInstances?e:cn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zp(n){return n===cn?void 0:n}function em(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Xp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const nm={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},im=z.INFO,sm={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},rm=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=sm[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pa{constructor(e){this.name=e,this._logLevel=im,this._logHandler=rm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}const om=(n,e)=>e.some(t=>n instanceof t);let wl,_l;function am(){return wl||(wl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cm(){return _l||(_l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fh=new WeakMap,Do=new WeakMap,ph=new WeakMap,po=new WeakMap,ma=new WeakMap;function lm(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",a)},r=()=>{t(Nt(n.result)),s()},a=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&fh.set(t,n)}).catch(()=>{}),ma.set(e,n),e}function um(n){if(Do.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",a),n.removeEventListener("abort",a)},r=()=>{t(),s()},a=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",a),n.addEventListener("abort",a)});Do.set(n,e)}let No={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Do.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ph.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Nt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function hm(n){No=n(No)}function dm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(mo(this),e,...t);return ph.set(i,e.sort?e.sort():[e]),Nt(i)}:cm().includes(n)?function(...e){return n.apply(mo(this),e),Nt(fh.get(this))}:function(...e){return Nt(n.apply(mo(this),e))}}function fm(n){return typeof n=="function"?dm(n):(n instanceof IDBTransaction&&um(n),om(n,am())?new Proxy(n,No):n)}function Nt(n){if(n instanceof IDBRequest)return lm(n);if(po.has(n))return po.get(n);const e=fm(n);return e!==n&&(po.set(n,e),ma.set(e,n)),e}const mo=n=>ma.get(n);function pm(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const a=indexedDB.open(n,e),c=Nt(a);return i&&a.addEventListener("upgradeneeded",u=>{i(Nt(a.result),u.oldVersion,u.newVersion,Nt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{r&&u.addEventListener("close",()=>r()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const mm=["get","getKey","getAll","getAllKeys","count"],gm=["put","add","delete","clear"],go=new Map;function bl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(go.get(e))return go.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=gm.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||mm.includes(t)))return;const r=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return i&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&u.done]))[0]};return go.set(e,r),r}hm(n=>({...n,get:(e,t,i)=>bl(e,t)||n.get(e,t,i),has:(e,t)=>!!bl(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(vm(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function vm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mo="@firebase/app",Tl="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft=new pa("@firebase/app"),wm="@firebase/app-compat",_m="@firebase/analytics-compat",bm="@firebase/analytics",Tm="@firebase/app-check-compat",Em="@firebase/app-check",Im="@firebase/auth",Sm="@firebase/auth-compat",Am="@firebase/database",km="@firebase/data-connect",Cm="@firebase/database-compat",Rm="@firebase/functions",Pm="@firebase/functions-compat",xm="@firebase/installations",Lm="@firebase/installations-compat",Dm="@firebase/messaging",Nm="@firebase/messaging-compat",Mm="@firebase/performance",Om="@firebase/performance-compat",Vm="@firebase/remote-config",$m="@firebase/remote-config-compat",Fm="@firebase/storage",Um="@firebase/storage-compat",jm="@firebase/firestore",Bm="@firebase/ai",Hm="@firebase/firestore-compat",qm="firebase",zm="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo="[DEFAULT]",Wm={[Mo]:"fire-core",[wm]:"fire-core-compat",[bm]:"fire-analytics",[_m]:"fire-analytics-compat",[Em]:"fire-app-check",[Tm]:"fire-app-check-compat",[Im]:"fire-auth",[Sm]:"fire-auth-compat",[Am]:"fire-rtdb",[km]:"fire-data-connect",[Cm]:"fire-rtdb-compat",[Rm]:"fire-fn",[Pm]:"fire-fn-compat",[xm]:"fire-iid",[Lm]:"fire-iid-compat",[Dm]:"fire-fcm",[Nm]:"fire-fcm-compat",[Mm]:"fire-perf",[Om]:"fire-perf-compat",[Vm]:"fire-rc",[$m]:"fire-rc-compat",[Fm]:"fire-gcs",[Um]:"fire-gcs-compat",[jm]:"fire-fst",[Hm]:"fire-fst-compat",[Bm]:"fire-vertex","fire-js":"fire-js",[qm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=new Map,Gm=new Map,Vo=new Map;function El(n,e){try{n.container.addComponent(e)}catch(t){ft.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function $n(n){const e=n.name;if(Vo.has(e))return ft.debug(`There were multiple attempts to register component ${e}.`),!1;Vo.set(e,n);for(const t of Js.values())El(t,n);for(const t of Gm.values())El(t,n);return!0}function ga(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Oe(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mt=new Yi("app","Firebase",Km);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=zm;function mh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:Oo,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw Mt.create("bad-app-name",{appName:String(s)});if(t||(t=lh()),!t)throw Mt.create("no-options");const r=Js.get(s);if(r){if(fn(t,r.options)&&fn(i,r.config))return r;throw Mt.create("duplicate-app",{appName:s})}const a=new tm(s);for(const u of Vo.values())a.addComponent(u);const c=new Qm(t,i,a);return Js.set(s,c),c}function gh(n=Oo){const e=Js.get(n);if(!e&&n===Oo&&lh())return mh();if(!e)throw Mt.create("no-app",{appName:n});return e}function Ot(n,e,t){let i=Wm[n]??n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),r=e.match(/\s|\//);if(s||r){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&a.push("and"),r&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ft.warn(a.join(" "));return}$n(new pn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Jm="firebase-heartbeat-database",Ym=1,Bi="firebase-heartbeat-store";let yo=null;function yh(){return yo||(yo=pm(Jm,Ym,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Bi)}catch(t){console.warn(t)}}}}).catch(n=>{throw Mt.create("idb-open",{originalErrorMessage:n.message})})),yo}async function Xm(n){try{const t=(await yh()).transaction(Bi),i=await t.objectStore(Bi).get(vh(n));return await t.done,i}catch(e){if(e instanceof yt)ft.warn(e.message);else{const t=Mt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ft.warn(t.message)}}}async function Il(n,e){try{const i=(await yh()).transaction(Bi,"readwrite");await i.objectStore(Bi).put(e,vh(n)),await i.done}catch(t){if(t instanceof yt)ft.warn(t.message);else{const i=Mt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ft.warn(i.message)}}}function vh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Zm=1024,eg=30;class tg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ig(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Sl();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(a=>a.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>eg){const a=sg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){ft.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Sl(),{heartbeatsToSend:i,unsentEntries:s}=ng(this._heartbeatsCache.heartbeats),r=Qs(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return ft.warn(t),""}}}function Sl(){return new Date().toISOString().substring(0,10)}function ng(n,e=Zm){const t=[];let i=n.slice();for(const s of n){const r=t.find(a=>a.agent===s.agent);if(r){if(r.dates.push(s.date),Al(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Al(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class ig{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hp()?qp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Xm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Il(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Il(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Al(n){return Qs(JSON.stringify({version:2,heartbeats:n})).length}function sg(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(n){$n(new pn("platform-logger",e=>new ym(e),"PRIVATE")),$n(new pn("heartbeat",e=>new tg(e),"PRIVATE")),Ot(Mo,Tl,n),Ot(Mo,Tl,"esm2020"),Ot("fire-js","")}rg("");var og="firebase",ag="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot(og,ag,"app");function wh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cg=wh,_h=new Yi("auth","Firebase",wh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=new pa("@firebase/auth");function lg(n,...e){Ys.logLevel<=z.WARN&&Ys.warn(`Auth (${Kn}): ${n}`,...e)}function Ns(n,...e){Ys.logLevel<=z.ERROR&&Ys.error(`Auth (${Kn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(n,...e){throw va(n,...e)}function Qe(n,...e){return va(n,...e)}function ya(n,e,t){const i={...cg(),[e]:t};return new Yi("auth","Firebase",i).create(e,{appName:n.name})}function nt(n){return ya(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function bh(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&qe(n,"argument-error"),ya(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function va(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return _h.create(n,...e)}function F(n,e,...t){if(!n)throw va(e,...t)}function ht(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ns(e),new Error(e)}function pt(n,e){n||ht(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function ug(){return kl()==="http:"||kl()==="https:"}function kl(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ug()||Fp()||"connection"in navigator)?navigator.onLine:!0}function dg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,t){this.shortDelay=e,this.longDelay=t,pt(t>e,"Short delay should be less than long delay!"),this.isMobile=Op()||Up()}get(){return hg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(n,e){pt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],mg=new Zi(3e4,6e4);function Jt(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function vt(n,e,t,i,s={}){return Eh(n,s,async()=>{let r={},a={};i&&(e==="GET"?a=i:r={body:JSON.stringify(i)});const c=Xi({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:u,...r};return $p()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Gn(n.emulatorConfig.host)&&(d.credentials="include"),Th.fetch()(await Ih(n,n.config.apiHost,t,c),d)})}async function Eh(n,e,t){n._canInitEmulator=!1;const i={...fg,...e};try{const s=new yg(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw Ss(n,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const c=r.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ss(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Ss(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Ss(n,"user-disabled",a);const m=i[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw ya(n,m,d);qe(n,m)}}catch(s){if(s instanceof yt)throw s;qe(n,"network-request-failed",{message:String(s)})}}async function es(n,e,t,i,s={}){const r=await vt(n,e,t,i,s);return"mfaPendingCredential"in r&&qe(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function Ih(n,e,t,i){const s=`${e}${t}?${i}`,r=n,a=r.config.emulator?wa(n.config,s):`${n.config.apiScheme}://${s}`;return pg.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(a).toString():a}function gg(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Qe(this.auth,"network-request-failed")),mg.get())})}}function Ss(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=Qe(n,e,i);return s.customData._tokenResponse=t,s}function Cl(n){return n!==void 0&&n.enterprise!==void 0}class vg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return gg(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function wg(n,e){return vt(n,"GET","/v2/recaptchaConfig",Jt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _g(n,e){return vt(n,"POST","/v1/accounts:delete",e)}async function Xs(n,e){return vt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bg(n,e=!1){const t=je(n),i=await t.getIdToken(e),s=_a(i);F(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,a=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Li(vo(s.auth_time)),issuedAtTime:Li(vo(s.iat)),expirationTime:Li(vo(s.exp)),signInProvider:a||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function vo(n){return Number(n)*1e3}function _a(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Ns("JWT malformed, contained fewer than 3 sections"),null;try{const s=ah(t);return s?JSON.parse(s):(Ns("Failed to decode base64 JWT payload"),null)}catch(s){return Ns("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Rl(n){const e=_a(n);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fn(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof yt&&Tg(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Tg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Li(this.lastLoginAt),this.creationTime=Li(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(n){var _;const e=n.auth,t=await n.getIdToken(),i=await Fn(n,Xs(e,{idToken:t}));F(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const r=(_=s.providerUserInfo)!=null&&_.length?Sh(s.providerUserInfo):[],a=Sg(n.providerData,r),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),d=c?u:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Fo(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,m)}async function Ig(n){const e=je(n);await Zs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Sg(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Sh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ag(n,e){const t=await Eh(n,{},async()=>{const i=Xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,a=await Ih(n,s,"/v1/token",`key=${r}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:i};return n.emulatorConfig&&Gn(n.emulatorConfig.host)&&(u.credentials="include"),Th.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function kg(n,e){return vt(n,"POST","/v2/accounts:revokeToken",Jt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){F(e.length!==0,"internal-error");const t=Rl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Ag(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,a=new Rn;return i&&(F(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),s&&(F(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),r&&(F(typeof r=="number","internal-error",{appName:e}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rn,this.toJSON())}_performRefresh(){return ht("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(n,e){F(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ge{constructor({uid:e,auth:t,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new Eg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Fo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Fn(this,this.stsTokenManager.getToken(this.auth,e));return F(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return bg(this,e)}reload(){return Ig(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ge({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Zs(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Oe(this.auth.app))return Promise.reject(nt(this.auth));const e=await this.getIdToken();return await Fn(this,_g(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,s=t.email??void 0,r=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,u=t._redirectEventId??void 0,d=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:_,emailVerified:I,isAnonymous:R,providerData:N,stsTokenManager:$}=t;F(_&&$,e,"internal-error");const M=Rn.fromJSON(this.name,$);F(typeof _=="string",e,"internal-error"),At(i,e.name),At(s,e.name),F(typeof I=="boolean",e,"internal-error"),F(typeof R=="boolean",e,"internal-error"),At(r,e.name),At(a,e.name),At(c,e.name),At(u,e.name),At(d,e.name),At(m,e.name);const W=new Ge({uid:_,auth:e,email:s,emailVerified:I,displayName:i,isAnonymous:R,photoURL:a,phoneNumber:r,tenantId:c,stsTokenManager:M,createdAt:d,lastLoginAt:m});return N&&Array.isArray(N)&&(W.providerData=N.map(Z=>({...Z}))),u&&(W._redirectEventId=u),W}static async _fromIdTokenResponse(e,t,i=!1){const s=new Rn;s.updateFromServerResponse(t);const r=new Ge({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Zs(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];F(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Sh(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),c=new Rn;c.updateFromIdToken(i);const u=new Ge({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Fo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl=new Map;function dt(n){pt(n instanceof Function,"Expected a class definition");let e=Pl.get(n);return e?(pt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Pl.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ah.type="NONE";const xl=Ah;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(n,e,t){return`firebase:${n}:${e}:${t}`}class Pn{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Ms(this.userKey,s.apiKey,r),this.fullPersistenceKey=Ms("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Xs(this.auth,{idToken:e}).catch(()=>{});return t?Ge._fromGetAccountInfoResponse(this.auth,t,e):null}return Ge._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Pn(dt(xl),e,i);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let r=s[0]||dt(xl);const a=Ms(i,e.config.apiKey,e.name);let c=null;for(const d of t)try{const m=await d._get(a);if(m){let _;if(typeof m=="string"){const I=await Xs(e,{idToken:m}).catch(()=>{});if(!I)break;_=await Ge._fromGetAccountInfoResponse(e,I,m)}else _=Ge._fromJSON(e,m);d!==r&&(c=_),r=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!r._shouldAllowMigration||!u.length?new Pn(r,e,i):(r=u[0],c&&await r._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==r)try{await d._remove(a)}catch{}})),new Pn(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ph(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lh(e))return"Blackberry";if(Dh(e))return"Webos";if(Ch(e))return"Safari";if((e.includes("chrome/")||Rh(e))&&!e.includes("edge/"))return"Chrome";if(xh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function kh(n=Se()){return/firefox\//i.test(n)}function Ch(n=Se()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Rh(n=Se()){return/crios\//i.test(n)}function Ph(n=Se()){return/iemobile/i.test(n)}function xh(n=Se()){return/android/i.test(n)}function Lh(n=Se()){return/blackberry/i.test(n)}function Dh(n=Se()){return/webos/i.test(n)}function ba(n=Se()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Cg(n=Se()){var e;return ba(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Rg(){return jp()&&document.documentMode===10}function Nh(n=Se()){return ba(n)||xh(n)||Dh(n)||Lh(n)||/windows phone/i.test(n)||Ph(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(n,e=[]){let t;switch(n){case"Browser":t=Ll(Se());break;case"Worker":t=`${Ll(Se())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Kn}/${i}`}/**
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
 */class Pg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((a,c)=>{try{const u=e(r);a(u)}catch(u){c(u)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function xg(n,e={}){return vt(n,"GET","/v2/passwordPolicy",Jt(n,e))}/**
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
 */const Lg=6;class Dg{constructor(e){var i;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Lg,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dl(this),this.idTokenSubscription=new Dl(this),this.beforeStateQueue=new Pg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_h,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=dt(t)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await Pn.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Xs(this,{idToken:e}),i=await Ge._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(Oe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(r=this.redirectUser)==null?void 0:r._redirectEventId,c=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Zs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Oe(this.app))return Promise.reject(nt(this));const t=e?je(e):null;return t&&F(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Oe(this.app)?Promise.reject(nt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Oe(this.app)?Promise.reject(nt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xg(this),t=new Dg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Yi("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await kg(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&dt(e)||this._popupRedirectResolver;F(t,this,"argument-error"),this.redirectPersistenceManager=await Pn.create(this,[dt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(c,this,"internal-error"),c.then(()=>{a||r(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,i,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;if(Oe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&lg(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ct(n){return je(n)}class Dl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Qp(t=>this.observer=t)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Mg(n){gr=n}function Oh(n){return gr.loadJS(n)}function Og(){return gr.recaptchaEnterpriseScript}function Vg(){return gr.gapiScript}function $g(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Fg{constructor(){this.enterprise=new Ug}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Ug{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const jg="recaptcha-enterprise",Vh="NO_RECAPTCHA";class Bg{constructor(e){this.type=jg,this.auth=ct(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(a,c)=>{wg(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new vg(u);return r.tenantId==null?r._agentRecaptchaConfig=d:r._tenantRecaptchaConfigs[r.tenantId]=d,a(d.siteKey)}}).catch(u=>{c(u)})})}function s(r,a,c){const u=window.grecaptcha;Cl(u)?u.enterprise.ready(()=>{u.enterprise.execute(r,{action:e}).then(d=>{a(d)}).catch(()=>{a(Vh)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Fg().execute("siteKey",{action:"verify"}):new Promise((r,a)=>{i(this.auth).then(c=>{if(!t&&Cl(window.grecaptcha))s(c,r,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Og();u.length!==0&&(u+=c),Oh(u).then(()=>{s(c,r,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function Nl(n,e,t,i=!1,s=!1){const r=new Bg(n);let a;if(s)a=Vh;else try{a=await r.verify(t)}catch{a=await r.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return i?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Uo(n,e,t,i,s){var r;if((r=n._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Nl(n,e,t,t==="getOobCode");return i(n,a)}else return i(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Nl(n,e,t,t==="getOobCode");return i(n,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(n,e){const t=ga(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(fn(r,e??{}))return s;qe(s,"already-initialized")}return t.initialize({options:e})}function qg(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(dt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function zg(n,e,t){const i=ct(n);F(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=$h(e),{host:a,port:c}=Wg(e),u=c===null?"":`:${c}`,d={url:`${r}//${a}${u}/`},m=Object.freeze({host:a,port:c,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){F(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),F(fn(d,i.config.emulator)&&fn(m,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=d,i.emulatorConfig=m,i.settings.appVerificationDisabledForTesting=!0,Gn(a)?(hh(`${r}//${a}${u}`),dh("Auth",!0)):Gg()}function $h(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Wg(n){const e=$h(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Ml(i.substr(r.length+1))}}else{const[r,a]=i.split(":");return{host:r,port:Ml(a)}}}function Ml(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Gg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ht("not implemented")}_getIdTokenResponse(e){return ht("not implemented")}_linkToIdToken(e,t){return ht("not implemented")}_getReauthenticationResolver(e){return ht("not implemented")}}async function Kg(n,e){return vt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qg(n,e){return es(n,"POST","/v1/accounts:signInWithPassword",Jt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jg(n,e){return es(n,"POST","/v1/accounts:signInWithEmailLink",Jt(n,e))}async function Yg(n,e){return es(n,"POST","/v1/accounts:signInWithEmailLink",Jt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi extends Ta{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Hi(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Hi(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uo(e,t,"signInWithPassword",Qg);case"emailLink":return Jg(e,{email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uo(e,i,"signUpPassword",Kg);case"emailLink":return Yg(e,{idToken:t,email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xn(n,e){return es(n,"POST","/v1/accounts:signInWithIdp",Jt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg="http://localhost";class mt extends Ta{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new mt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):qe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...r}=t;if(!i||!s)return null;const a=new mt(i,s);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return xn(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,xn(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xn(e,t)}buildRequest(){const e={requestUri:Xg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Xi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ey(n){const e=Si(Ai(n)).link,t=e?Si(Ai(e)).deep_link_id:null,i=Si(Ai(n)).deep_link_id;return(i?Si(Ai(i)).link:null)||i||t||e||n}class Ea{constructor(e){const t=Si(Ai(e)),i=t.apiKey??null,s=t.oobCode??null,r=Zg(t.mode??null);F(i&&s&&r,"argument-error"),this.apiKey=i,this.operation=r,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=ey(e);try{return new Ea(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(){this.providerId=Qn.PROVIDER_ID}static credential(e,t){return Hi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Ea.parseLink(t);return F(i,"argument-error"),Hi._fromEmailAndCode(e,i.code,i.tenantId)}}Qn.PROVIDER_ID="password";Qn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends yr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Di extends Jn{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return F("providerId"in t&&"signInMethod"in t,"argument-error"),mt._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return F(e.idToken||e.accessToken,"argument-error"),mt._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Di.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Di.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:r,nonce:a,providerId:c}=e;if(!i&&!s&&!t&&!r||!c)return null;try{return new Di(c)._credential({idToken:t,accessToken:i,nonce:a,pendingToken:r})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends Jn{constructor(){super("facebook.com")}static credential(e){return mt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.FACEBOOK_SIGN_IN_METHOD="facebook.com";kt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends Jn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return mt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return ut.credential(t,i)}catch{return null}}}ut.GOOGLE_SIGN_IN_METHOD="google.com";ut.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends Jn{constructor(){super("github.com")}static credential(e){return mt._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ct.credential(e.oauthAccessToken)}catch{return null}}}Ct.GITHUB_SIGN_IN_METHOD="github.com";Ct.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends Jn{constructor(){super("twitter.com")}static credential(e,t){return mt._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Rt.credential(t,i)}catch{return null}}}Rt.TWITTER_SIGN_IN_METHOD="twitter.com";Rt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ty(n,e){return es(n,"POST","/v1/accounts:signUp",Jt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await Ge._fromIdTokenResponse(e,i,s),a=Ol(i);return new mn({user:r,providerId:a,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Ol(i);return new mn({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Ol(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends yt{constructor(e,t,i,s){super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,er.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new er(e,t,i,s)}}function Fh(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?er._fromErrorAndOperation(n,r,e,i):r})}async function ny(n,e,t=!1){const i=await Fn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return mn._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iy(n,e,t=!1){const{auth:i}=n;if(Oe(i.app))return Promise.reject(nt(i));const s="reauthenticate";try{const r=await Fn(n,Fh(i,s,e,n),t);F(r.idToken,i,"internal-error");const a=_a(r.idToken);F(a,i,"internal-error");const{sub:c}=a;return F(n.uid===c,i,"user-mismatch"),mn._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&qe(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uh(n,e,t=!1){if(Oe(n.app))return Promise.reject(nt(n));const i="signIn",s=await Fh(n,i,e),r=await mn._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function sy(n,e){return Uh(ct(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jh(n){const e=ct(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ry(n,e,t){if(Oe(n.app))return Promise.reject(nt(n));const i=ct(n),a=await Uo(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ty).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&jh(n),u}),c=await mn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function oy(n,e,t){return Oe(n.app)?Promise.reject(nt(n)):sy(je(n),Qn.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&jh(n),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ay(n,e){return vt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cy(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=je(n),r={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await Fn(i,ay(i.auth,r));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const c=i.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function ly(n,e,t,i){return je(n).onIdTokenChanged(e,t,i)}function uy(n,e,t){return je(n).beforeAuthStateChanged(e,t)}function hy(n,e,t,i){return je(n).onAuthStateChanged(e,t,i)}function dy(n){return je(n).signOut()}const tr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(tr,"1"),this.storage.removeItem(tr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=1e3,py=10;class Hh extends Bh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Nh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(i);!t&&this.localCache[i]===a||this.notifyListeners(i,a)},r=this.storage.getItem(i);Rg()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,py):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},fy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hh.type="LOCAL";const my=Hh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh extends Bh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}qh.type="SESSION";const zh=qh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new vr(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const c=Array.from(a).map(async d=>d(t.origin,r)),u=await gy(c);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,a;return new Promise((c,u)=>{const d=Ia("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},i);a={messageChannel:s,onMessage(_){const I=_;if(I.data.eventId===d)switch(I.data.status){case"ack":clearTimeout(m),r=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),c(I.data.response);break;default:clearTimeout(m),clearTimeout(r),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(){return window}function vy(n){it().location.href=n}/**
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
 */function Wh(){return typeof it().WorkerGlobalScope<"u"&&typeof it().importScripts=="function"}async function wy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _y(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function by(){return Wh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh="firebaseLocalStorageDb",Ty=1,nr="firebaseLocalStorage",Kh="fbase_key";class ts{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function wr(n,e){return n.transaction([nr],e?"readwrite":"readonly").objectStore(nr)}function Ey(){const n=indexedDB.deleteDatabase(Gh);return new ts(n).toPromise()}function jo(){const n=indexedDB.open(Gh,Ty);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(nr,{keyPath:Kh})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(nr)?e(i):(i.close(),await Ey(),e(await jo()))})})}async function Vl(n,e,t){const i=wr(n,!0).put({[Kh]:e,value:t});return new ts(i).toPromise()}async function Iy(n,e){const t=wr(n,!1).get(e),i=await new ts(t).toPromise();return i===void 0?null:i.value}function $l(n,e){const t=wr(n,!0).delete(e);return new ts(t).toPromise()}const Sy=800,Ay=3;class Qh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Ay)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vr._getInstance(by()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await wy(),!this.activeServiceWorker)return;this.sender=new yy(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_y()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jo();return await Vl(e,tr,"1"),await $l(e,tr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Vl(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Iy(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>$l(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=wr(s,!1).getAll();return new ts(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Sy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qh.type="LOCAL";const ky=Qh;new Zi(3e4,6e4);/**
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
 */function Sa(n,e){return e?dt(e):(F(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa extends Ta{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return xn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return xn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Cy(n){return Uh(n.auth,new Aa(n),n.bypassAuthState)}function Ry(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),iy(t,new Aa(n),n.bypassAuthState)}async function Py(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),ny(t,new Aa(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Cy;case"linkViaPopup":case"linkViaRedirect":return Py;case"reauthViaPopup":case"reauthViaRedirect":return Ry;default:qe(this.auth,"internal-error")}}resolve(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy=new Zi(2e3,1e4);async function Yh(n,e,t){if(Oe(n.app))return Promise.reject(Qe(n,"operation-not-supported-in-this-environment"));const i=ct(n);bh(n,e,yr);const s=Sa(i,t);return new ln(i,"signInViaPopup",e,s).executeNotNull()}class ln extends Jh{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,ln.currentPopupAction&&ln.currentPopupAction.cancel(),ln.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){pt(this.filter.length===1,"Popup operations only handle one event");const e=Ia();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ln.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)==null?void 0:t.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xy.get())};e()}}ln.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly="pendingRedirect",Os=new Map;class Dy extends Jh{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Os.get(this.auth._key());if(!e){try{const i=await Ny(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Os.set(this.auth._key(),e)}return this.bypassAuthState||Os.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ny(n,e){const t=Zh(e),i=Xh(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}async function My(n,e){return Xh(n)._set(Zh(e),"true")}function Oy(n,e){Os.set(n._key(),e)}function Xh(n){return dt(n._redirectPersistence)}function Zh(n){return Ms(Ly,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(n,e,t){return Vy(n,e,t)}async function Vy(n,e,t){if(Oe(n.app))return Promise.reject(nt(n));const i=ct(n);bh(n,e,yr),await i._initializationPromise;const s=Sa(i,t);return await My(s,i),s._openRedirect(i,e,"signInViaRedirect")}async function $y(n,e){return await ct(n)._initializationPromise,td(n,e,!1)}async function td(n,e,t=!1){if(Oe(n.app))return Promise.reject(nt(n));const i=ct(n),s=Sa(i,e),a=await new Dy(i,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy=600*1e3;class Uy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jy(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!nd(e)){const s=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";t.onError(Qe(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Fy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fl(e))}saveEventToCache(e){this.cachedEventUids.add(Fl(e)),this.lastProcessedEventTime=Date.now()}}function Fl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function nd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jy(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nd(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function By(n,e={}){return vt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qy=/^https?/;async function zy(n){if(n.config.emulator)return;const{authorizedDomains:e}=await By(n);for(const t of e)try{if(Wy(t))return}catch{}qe(n,"unauthorized-domain")}function Wy(n){const e=$o(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===i}if(!qy.test(t))return!1;if(Hy.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const Gy=new Zi(3e4,6e4);function Ul(){const n=it().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Ky(n){return new Promise((e,t)=>{var s,r,a;function i(){Ul(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ul(),t(Qe(n,"network-request-failed"))},timeout:Gy.get()})}if((r=(s=it().gapi)==null?void 0:s.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((a=it().gapi)!=null&&a.load)i();else{const c=$g("iframefcb");return it()[c]=()=>{gapi.load?i():t(Qe(n,"network-request-failed"))},Oh(`${Vg()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Vs=null,e})}let Vs=null;function Qy(n){return Vs=Vs||Ky(n),Vs}/**
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
 */const Jy=new Zi(5e3,15e3),Yy="__/auth/iframe",Xy="emulator/auth/iframe",Zy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ev=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tv(n){const e=n.config;F(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?wa(e,Xy):`https://${n.config.authDomain}/${Yy}`,i={apiKey:e.apiKey,appName:n.name,v:Kn},s=ev.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Xi(i).slice(1)}`}async function nv(n){const e=await Qy(n),t=it().gapi;return F(t,n,"internal-error"),e.open({where:document.body,url:tv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Zy,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const a=Qe(n,"network-request-failed"),c=it().setTimeout(()=>{r(a)},Jy.get());function u(){it().clearTimeout(c),s(i)}i.ping(u).then(u,()=>{r(a)})}))}/**
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
 */const iv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sv=500,rv=600,ov="_blank",av="http://localhost";class jl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cv(n,e,t,i=sv,s=rv){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u={...iv,width:i.toString(),height:s.toString(),top:r,left:a},d=Se().toLowerCase();t&&(c=Rh(d)?ov:t),kh(d)&&(e=e||av,u.scrollbars="yes");const m=Object.entries(u).reduce((I,[R,N])=>`${I}${R}=${N},`,"");if(Cg(d)&&c!=="_self")return lv(e||"",c),new jl(null);const _=window.open(e||"",c,m);F(_,n,"popup-blocked");try{_.focus()}catch{}return new jl(_)}function lv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const uv="__/auth/handler",hv="emulator/auth/handler",dv=encodeURIComponent("fac");async function Bl(n,e,t,i,s,r){F(n.config.authDomain,n,"auth-domain-config-required"),F(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Kn,eventId:s};if(e instanceof yr){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Kp(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,_]of Object.entries({}))a[m]=_}if(e instanceof Jn){const m=e.getScopes().filter(_=>_!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const u=await n._getAppCheckToken(),d=u?`#${dv}=${encodeURIComponent(u)}`:"";return`${fv(n)}?${Xi(c).slice(1)}${d}`}function fv({config:n}){return n.emulator?wa(n,hv):`https://${n.authDomain}/${uv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo="webStorageSupport";class pv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zh,this._completeRedirectFn=td,this._overrideRedirectResult=Oy}async _openPopup(e,t,i,s){var a;pt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const r=await Bl(e,t,i,$o(),s);return cv(e,r,Ia())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Bl(e,t,i,$o(),s);return vy(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(pt(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await nv(e),i=new Uy(e);return t.register("authEvent",s=>(F(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(wo,{type:wo},s=>{var a;const r=(a=s==null?void 0:s[0])==null?void 0:a[wo];r!==void 0&&t(!!r),qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=zy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Nh()||Ch()||ba()}}const mv=pv;var Hl="@firebase/auth",ql="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vv(n){$n(new pn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=i.options;F(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mh(n)},d=new Ng(i,s,r,u);return qg(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),$n(new pn("auth-internal",e=>{const t=ct(e.getProvider("auth").getImmediate());return(i=>new gv(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(Hl,ql,yv(n)),Ot(Hl,ql,"esm2020")}/**
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
 */const wv=300,_v=uh("authIdTokenMaxAge")||wv;let zl=null;const bv=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>_v)return;const s=t==null?void 0:t.token;zl!==s&&(zl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Tv(n=gh()){const e=ga(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Hg(n,{popupRedirectResolver:mv,persistence:[ky,my,zh]}),i=uh("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const a=bv(r.toString());uy(t,a,()=>a(t.currentUser)),ly(t,c=>a(c))}}const s=ch("auth");return s&&zg(t,`http://${s}`),t}function Ev(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Mg({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=Qe("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",Ev().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vv("Browser");const Iv={apiKey:"AIzaSyAFURz8fEGSTameAW5YvBKWpr2LXv9Ang0",authDomain:"family-pantry-c65d6.firebaseapp.com",projectId:"family-pantry-c65d6",storageBucket:"family-pantry-c65d6.firebasestorage.app",messagingSenderId:"710701847077",appId:"1:710701847077:web:407a8937330ad2ebcfe5cc"},id=mh(Iv),ze=Tv(id);window._firebaseAuth=ze;const Wl=new ut,ir=new Di("apple.com");ir.addScope("email");ir.addScope("name");let ka=null;const $s=[];function Sv(n){return $s.push(n),n(ka),()=>{const e=$s.indexOf(n);e!==-1&&$s.splice(e,1)}}function Av(n){ka=n,$s.forEach(e=>e(n))}hy(ze,n=>{Av(n||null)});$y(ze).catch(n=>{n.code!=="auth/redirect-cancelled-by-user"&&console.error("Redirect sign-in error:",n)});async function kv(){try{return(await Yh(ze,Wl)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await ed(ze,Wl),null;throw n}}async function Cv(){try{return(await Yh(ze,ir)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await ed(ze,ir),null;throw n}}async function Rv(n,e){return(await oy(ze,n,e)).user}async function Pv(n,e,t){const i=await ry(ze,n,e);return t&&await cy(i.user,{displayName:t}),i.user}async function xv(){await dy(ze)}async function sd(){return ze.currentUser?ze.currentUser.getIdToken():null}function De(){return ka}async function _r(n,e,t){const i={"Content-Type":"application/json"},s=await sd();s&&(i.Authorization=`Bearer ${s}`);const r=await fetch("/api/db",{method:"POST",headers:i,body:JSON.stringify({op:n,path:e,data:t})});if(!(r.headers.get("content-type")||"").includes("application/json"))throw new Error(`/api/db non-JSON response (status ${r.status}) for ${n} ${e}`);return r.json()}async function Le(n){try{return(await _r("list",n)).docs||[]}catch(e){return console.warn("dbList:",n,e.message),[]}}async function X(n,e){return _r("set",n,e)}async function Yt(n){return _r("delete",n)}async function fe(n){try{return(await _r("get",n)).doc||null}catch{return null}}function rd(){return Math.random().toString(36).slice(2,8).toUpperCase()}async function Bo(n){var t;const e={name:n.displayName||((t=n.email)==null?void 0:t.split("@")[0])||"User",email:n.email||"",createdAt:new Date().toISOString(),householdIds:[]};return await X(`users/${n.uid}`,e),e}async function od(n,e){var a;const t=De(),i=n,s=rd(),r={name:e||"My Kitchen",ownerUid:n,members:[{uid:n,name:(t==null?void 0:t.displayName)||((a=t==null?void 0:t.email)==null?void 0:a.split("@")[0])||"Owner",role:"owner"}],memberUids:[n],inviteCode:s,createdAt:new Date().toISOString()};try{await X(`households/${i}`,r),await X(`household_codes/${s}`,{householdId:i})}catch(c){console.error(`[createHousehold] FAILED to write households/${i}:`,c)}return{hid:i,...r}}async function Lv(n){const e=await fe(`household_codes/${n.toUpperCase()}`);return(e==null?void 0:e.householdId)||null}async function ad(n,e){var c;const t=await Lv(n);if(!t)return null;const i=await fe(`households/${t}`);if(!i)return null;const s=i.members||[],r=i.memberUids||s.map(u=>u.uid);s.find(u=>u.uid===e.uid)||(s.push({uid:e.uid,name:e.displayName||((c=e.email)==null?void 0:c.split("@")[0])||"Member",role:"member"}),r.includes(e.uid)||r.push(e.uid),await X(`households/${t}`,{...i,members:s,memberUids:r,id:void 0}));const a=await fe(`users/${e.uid}`);if(a){const u=a.householdIds||[];u.includes(t)||(u.push(t),await X(`users/${e.uid}`,{...a,householdIds:u,id:void 0}))}return t}async function Dv(n){const e=await fe(`households/${n}`);if(!e)return null;if(e.inviteCode)try{await Yt(`household_codes/${e.inviteCode}`)}catch{}const t=rd();return await X(`household_codes/${t}`,{householdId:n}),await X(`households/${n}`,{...e,inviteCode:t,id:void 0}),t}async function Nv(n,e){const t=await fe(`households/${n}`);if(!t)return;const i=(t.members||[]).filter(r=>r.uid!==e),s=(t.memberUids||[]).filter(r=>r!==e);await X(`households/${n}`,{...t,members:i,memberUids:s,id:void 0});try{const r=await fe(`users/${e}`);if(r){const a=(r.householdIds||[]).filter(c=>c!==n);await X(`users/${e}`,{...r,householdIds:a,id:void 0})}}catch{}}async function Gl(n,e){const t=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog"];for(const i of t){const s=await Le(`households/${n}/${i}`);for(const r of s){const a=r.id,c={...r};delete c.id,await X(`households/${e}/${i}/${a}`,c)}}}async function Mv(n){var u,d;const e=n.uid;console.log(`[resolveHousehold] ENTER — uid=${e}`);const t=await fe(`users/${e}`);if(console.log("[resolveHousehold] userDoc=",t),t){const m=(u=t.householdIds)!=null&&u.length?t.householdIds[0]:e;console.log(`[resolveHousehold] RETURNING USER — hid=${m}, householdIds=`,t.householdIds);const _=localStorage.getItem("ks-h");return console.log(`[resolveHousehold] RETURNING USER — ks-h="${_}", hid="${m}", uid="${e}"`),console.log(`[resolveHousehold] RETURNING USER — migration condition: oldHid=${!!_}, oldHid!==hid=${_!==m}, oldHid!==uid=${_!==e}`),_&&_!==m&&_!==e?(console.log(`[resolveHousehold] LATE MIGRATION TRIGGERED: ${_} → ${m}`),await Gl(_,m),localStorage.removeItem("ks-h"),console.log("[resolveHousehold] Late migration DONE, ks-h removed")):console.log("[resolveHousehold] RETURNING USER — NO migration needed"),m}console.log("[resolveHousehold] FIRST-TIME LOGIN — no userDoc found");const i=localStorage.getItem("ks-h"),s=i&&i!==e;console.log(`[resolveHousehold] FIRST-TIME — ks-h="${i}", hasOldData=${s}`);const r=((d=p.cfg)==null?void 0:d.name)||"My Kitchen";console.log(`[resolveHousehold] FIRST-TIME — creating household, cfgName="${r}"`),await od(e,s?r:"My Kitchen"),s&&(console.log(`[resolveHousehold] FIRST-TIME MIGRATION: ${i} → ${e}`),await Gl(i,e),console.log("[resolveHousehold] FIRST-TIME MIGRATION DONE"));const a=await Bo(n);a.householdIds=[e],await X(`users/${e}`,a),console.log("[resolveHousehold] User profile created & saved"),localStorage.removeItem("ks-h");const c=xe("ks-hhs");if(c){const m=c.filter(_=>_!==i);m.includes(e)||m.push(e),localStorage.setItem("ks-hhs",JSON.stringify(m))}return console.log(`[resolveHousehold] EXIT — returning uid=${e}`),e}async function gn(n,e){e?(p.mp[n]=e,await X(`households/${p.hid}/mealplan/${n}`,{date:n,meal:e})):(delete p.mp[n],await Yt(`households/${p.hid}/mealplan/${n}`))}async function br(){await X(`households/${p.hid}/settings/config`,p.cfg)}async function cd(n,e){const t={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:e||Ho(),loggedAt:new Date().toISOString()};p.cookLog.unshift(t),p.cookLog.length>200&&(p.cookLog=p.cookLog.slice(0,200)),await X(`households/${p.hid}/cooklog/${t.id}`,t)}async function Ov(n){if(p.wasteLog.find(t=>t.name===n&&t.date===Ho()))return;const e={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:Ho(),loggedAt:new Date().toISOString()};p.wasteLog.unshift(e),p.wasteLog.length>100&&(p.wasteLog=p.wasteLog.slice(0,100)),await X(`households/${p.hid}/wastelog/${e.id}`,e)}async function Vv(){try{try{const r=await fe(`households/${p.hid}`);r&&r.inviteCode&&(await fe(`household_codes/${r.inviteCode}`)||(await X(`household_codes/${r.inviteCode}`,{householdId:p.hid}),console.log(`[backfill] Created household_codes/${r.inviteCode} for household ${p.hid}`)))}catch(r){console.warn("[backfill] household_codes backfill skipped:",r.message)}const e=(await Le(`households/${p.hid}/settings`)).find(r=>r.id==="config");if(e)p.cfg={...Ks,...e};else{const r=xe("ks-c");p.cfg={...Ks,...r||{}},await br(),r&&localStorage.removeItem("ks-c")}const t=await Le(`households/${p.hid}/mealplan`);if(p.mp={},t.forEach(r=>{r.date&&r.meal&&(p.mp[r.date]=r.meal)}),!t.length){const r=xe("ks-m");if(r&&Object.keys(r).length){p.mp=r;for(const[a,c]of Object.entries(r))await gn(a,c);localStorage.removeItem("ks-m")}}const i=await Le(`households/${p.hid}/cooklog`);if(i.length)p.cookLog=i.sort((r,a)=>new Date(a.loggedAt||a.date||0)-new Date(r.loggedAt||r.date||0));else{const r=xe("ks-cooklog");if(r&&r.length){p.cookLog=r.map((a,c)=>({id:a.id||(Date.now()-c).toString(36),name:a.name,date:a.date,loggedAt:a.loggedAt||new Date().toISOString()}));for(const a of p.cookLog)await X(`households/${p.hid}/cooklog/${a.id}`,a);localStorage.removeItem("ks-cooklog")}}const s=await Le(`households/${p.hid}/wastelog`);if(s.length)p.wasteLog=s.sort((r,a)=>new Date(a.loggedAt||a.date||0)-new Date(r.loggedAt||r.date||0));else{const r=xe("ks-waste");if(r&&r.length){p.wasteLog=r.map((a,c)=>({id:a.id||(Date.now()-c).toString(36),name:a.name,date:a.date,loggedAt:a.loggedAt||new Date().toISOString()}));for(const a of p.wasteLog)await X(`households/${p.hid}/wastelog/${a.id}`,a);localStorage.removeItem("ks-waste")}}}catch(n){console.error("loadFirestoreData error:",n)}}let Ni=0;function Yn(){Ni++,Ni===1&&window._pollIntervalId&&(clearInterval(window._pollIntervalId),window._pollIntervalId=null)}function Xn(){Ni--,Ni<=0&&(Ni=0,window._pollFn&&!window._pollIntervalId&&(window._pollFn(),window._pollIntervalId=setInterval(window._pollFn,3e4)))}const O={renderAll:null,renderSum:null,renderRecs:null,renderShop:null};function ae(n){var i;const e=document.getElementById("sdot"),t=document.getElementById("slb");e&&(e.className="sdot "+n),t&&(t.textContent=n==="synced"?"🏠 "+(((i=p.cfg)==null?void 0:i.name)||p.hid):n==="syncing"?"Syncing…":"Sync error")}async function ke(n){var e,t;ae("syncing"),Yn();try{const i=!p.inv.find(s=>s.id===n.id);p.inv=[...p.inv.filter(s=>s.id!==n.id),n],(e=O.renderAll)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await X(`households/${p.hid}/inventory/${n.id}`,n),i&&Ra("added",n.name+" to inventory"),ae("synced")}catch(i){console.error(i),ae("error")}finally{Xn()}}async function Ca(n){var e,t;ae("syncing"),Yn();try{const i=p.inv.find(s=>s.id===n);p.inv=p.inv.filter(s=>s.id!==n),(e=O.renderAll)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await Yt(`households/${p.hid}/inventory/${n}`),i&&Ra("removed",i.name+" from inventory"),ae("synced")}catch(i){console.error(i),ae("error")}finally{Xn()}}async function Bt(n){var e,t;Yn();try{p.recs=[...p.recs.filter(i=>i.id!==n.id),n],(e=O.renderRecs)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await X(`households/${p.hid}/recipes/${n.id}`,n)}catch(i){console.error(i)}finally{Xn()}}async function $v(n){var e,t;Yn();try{p.recs=p.recs.filter(i=>i.id!==n),(e=O.renderRecs)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await Yt(`households/${p.hid}/recipes/${n}`)}catch(i){console.error(i)}finally{Xn()}}async function Ve(n){var e,t;Yn();try{const i=!p.shop.find(s=>s.id===n.id);p.shop=[...p.shop.filter(s=>s.id!==n.id),n],(e=O.renderShop)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await X(`households/${p.hid}/shopping/${n.id}`,n),i&&Ra("added",n.name+" to shopping list")}catch(i){console.error(i)}finally{Xn()}}async function Tr(n){var e,t;Yn();try{p.shop=p.shop.filter(i=>i.id!==n),(e=O.renderShop)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await Yt(`households/${p.hid}/shopping/${n}`)}catch(i){console.error(i)}finally{Xn()}}async function Fv(n,e,t){var r;const i=n.id,s={title:n.name,ingredients:n.description||"",steps:n.steps||"",tags:n.tags||[],cuisine:n.cuisine||"",authorName:e||"Anonymous",authorUid:((r=De())==null?void 0:r.uid)||"",householdId:t||p.hid,createdAt:new Date().toISOString(),likes:0};return await X(`public_recipes/${i}`,s),{id:i,...s}}async function Uv(n){await Yt(`public_recipes/${n}`)}async function jv(){return Le("public_recipes")}async function Bv(n,e){var a;const t=(a=De())==null?void 0:a.uid;if(!t)return;const i=`public_recipes/${n}/likes/${t}`;e?await Yt(i):await X(i,{likedAt:new Date().toISOString()});const s=await Le(`public_recipes/${n}/likes`),r=await fe(`public_recipes/${n}`);r&&await X(`public_recipes/${n}`,{...r,likes:s.length,id:void 0})}async function Hv(n,e,t){var a;const i=(a=De())==null?void 0:a.uid;if(!i||!e.trim())return;const s="cmt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),r={text:e.trim(),authorName:t,authorUid:i,createdAt:new Date().toISOString()};return await X(`public_recipes/${n}/comments/${s}`,r),{id:s,...r}}async function qv(n){return Le(`public_recipes/${n}/comments`)}async function zv(n){var i;const e=(i=De())==null?void 0:i.uid;return e?!!await fe(`public_recipes/${n}/likes/${e}`):!1}async function Wv(n){const t={id:"rec-"+Date.now(),name:n.title,description:n.ingredients||"",notes:n.steps||"",tags:n.tags||[],rating:0,favorited:!1,source:"Community",sourceUrl:null,cookCount:0,savedAt:new Date().toLocaleDateString()};return await Bt(t),t}async function Ra(n,e){if(!p.hid||!e)return;const t=localStorage.getItem("ks-who")||"Someone",i="act-"+Date.now().toString(36)+Math.random().toString(36).slice(2),s={memberName:t,action:n,itemName:e,timestamp:new Date().toISOString()};try{await X(`households/${p.hid}/activity/${i}`,s),Gv()}catch{}}async function Gv(){try{const n=await Le(`households/${p.hid}/activity`),e=Date.now()-10080*60*1e3;for(const t of n)t.timestamp&&new Date(t.timestamp).getTime()<e&&await Yt(`households/${p.hid}/activity/${t.id}`)}catch{}}async function Kv(){try{return(await Le(`households/${p.hid}/activity`)).sort((e,t)=>new Date(t.timestamp||0)-new Date(e.timestamp||0)).slice(0,10)}catch{return[]}}function Ho(){return new Date().toISOString().split("T")[0]}function f(n){return document.getElementById(n)}function xt(){return new Date().toISOString().split("T")[0]}function Zn(){const n=new Date;n.setHours(0,0,0,0);const e=new Date(n);return e.setDate(n.getDate()-n.getDay()),Array.from({length:7},(t,i)=>{const s=new Date(e);return s.setDate(e.getDate()+i),s})}function Qv(){const n=new Date;return n.setDate(n.getDate()+1),n.toISOString().split("T")[0]}function rt(n){if(!n)return null;const e=new Date;e.setHours(0,0,0,0);const t=new Date(n+"T00:00:00"),i=Math.round((t-e)/864e5);return i<0?{c:"expired",l:"Expired"}:i===0?{c:"expiring",l:"Expires today"}:i<=7?{c:"expiring",l:`Expires in ${i}d`}:{c:"ok",l:t.toLocaleDateString("en-US",{month:"short",day:"numeric"})}}function Pa(n){return{fridge:"🌡 Fridge",freezer:"🧊 Freezer",pantry:"🥫 Pantry"}[n]||n}const xa={Produce:"🥦",Proteins:"🍗",Dairy:"🧀",Grains:"🌾",Condiments:"🧴",Snacks:"🍿",Beverages:"🥤",Frozen:"❄️",General:"📦",Imported:"📥"};function Ht(n){const e=(n.name||"").toLowerCase(),t=(n.category||"").toLowerCase();return t.includes("produce")||t.includes("vegetable")||t.includes("fruit")||e.match(/apple|banana|broccoli|carrot|celery|cabbage|tomato|onion|garlic|jalap|spinach|mushroom|squash|lettuce|cucumber|pepper/)?"Produce":t.includes("protein")||t.includes("meat")||t.includes("seafood")||t.includes("poultry")||e.match(/chicken|beef|lamb|turkey|salmon|cod|tuna|fish|steak|pork|shrimp/)?"Proteins":t.includes("dairy")||t.includes("egg")||e.match(/egg|butter|cheese|milk|cream|yogurt|ghee/)?"Dairy":t.includes("grain")||t.includes("bread")||t.includes("pasta")||e.match(/rice|pasta|bread|flour|oat|cereal|grain|noodle|tortilla/)?"Grains":t.includes("condiment")||t.includes("sauce")||e.match(/sauce|ketchup|mustard|oil|vinegar|salt|pepper|spice|herb|seasoning|mayo/)?"Condiments":n.location==="freezer"?"Frozen":"General"}function Jv(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/^[-•]\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/\n/g,"<br>")}let _o=null;function P(n){const e=f("notif");e&&(e.textContent=n,e.style.display="block",e.style.animation="none",e.offsetWidth,e.style.animation="fn 2.5s ease forwards",_o&&clearTimeout(_o),_o=setTimeout(()=>e.style.display="none",2500))}function wt(n){var e;(e=f("ov-"+n))==null||e.classList.add("active")}function Ae(n){var e;(e=f("ov-"+n))==null||e.classList.remove("active")}function Mi(n,e){const t=f(n);t&&t.querySelectorAll(".star").forEach((i,s)=>{i.textContent=s<e?"★":"☆",i.classList.toggle("on",s<e)})}function La(n){const e=n.toLowerCase();return/frozen|ice cream|pizza|nugget|waffle|tater|edamame|popsicle/.test(e)?"freezer":/milk|cheese|yogurt|butter|cream|egg|meat|chicken|beef|pork|fish|salmon|shrimp|tofu|deli|bacon|sausage|produce|lettuce|spinach|berry|berries|fruit|vegetable|carrot|broccoli|juice/.test(e)?"fridge":"pantry"}const Yv={Produce:["apple","banana","carrot","celery","onion","garlic","tomato","lettuce","cucumber","pepper","broccoli","spinach","mushroom","lemon","lime","herb","cabbage","squash","jalap","avocado","potato","ginger"],"Meat & Fish":["chicken","beef","lamb","turkey","salmon","cod","tuna","fish","steak","shrimp","pork","bacon","sausage","ground"],"Dairy & Eggs":["egg","butter","cheese","milk","cream","yogurt","ghee","kefir"],Frozen:["frozen","ice cream","pizza","nugget","waffle","edamame","okra","lima","broccoli floret"],Pantry:["rice","pasta","flour","oil","vinegar","sauce","spice","salt","pepper","sugar","honey","oat","bread","can","bean","lentil","chickpea","stock","broth"],"Snacks & Drinks":["chip","cracker","cookie","juice","soda","water","tea","coffee","snack","nut","seed"]};function Xv(n){const e=n.toLowerCase();for(const[t,i]of Object.entries(Yv))if(i.some(s=>e.includes(s)))return t;return"Other"}var Kl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vt,ld;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function w(){}w.prototype=y.prototype,b.F=y.prototype,b.prototype=new w,b.prototype.constructor=b,b.D=function(E,T,A){for(var v=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)v[Ne-2]=arguments[Ne];return y.prototype[T].apply(E,v)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,y,w){w||(w=0);const E=Array(16);if(typeof y=="string")for(var T=0;T<16;++T)E[T]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(T=0;T<16;++T)E[T]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=b.g[0],w=b.g[1],T=b.g[2];let A=b.g[3],v;v=y+(A^w&(T^A))+E[0]+3614090360&4294967295,y=w+(v<<7&4294967295|v>>>25),v=A+(T^y&(w^T))+E[1]+3905402710&4294967295,A=y+(v<<12&4294967295|v>>>20),v=T+(w^A&(y^w))+E[2]+606105819&4294967295,T=A+(v<<17&4294967295|v>>>15),v=w+(y^T&(A^y))+E[3]+3250441966&4294967295,w=T+(v<<22&4294967295|v>>>10),v=y+(A^w&(T^A))+E[4]+4118548399&4294967295,y=w+(v<<7&4294967295|v>>>25),v=A+(T^y&(w^T))+E[5]+1200080426&4294967295,A=y+(v<<12&4294967295|v>>>20),v=T+(w^A&(y^w))+E[6]+2821735955&4294967295,T=A+(v<<17&4294967295|v>>>15),v=w+(y^T&(A^y))+E[7]+4249261313&4294967295,w=T+(v<<22&4294967295|v>>>10),v=y+(A^w&(T^A))+E[8]+1770035416&4294967295,y=w+(v<<7&4294967295|v>>>25),v=A+(T^y&(w^T))+E[9]+2336552879&4294967295,A=y+(v<<12&4294967295|v>>>20),v=T+(w^A&(y^w))+E[10]+4294925233&4294967295,T=A+(v<<17&4294967295|v>>>15),v=w+(y^T&(A^y))+E[11]+2304563134&4294967295,w=T+(v<<22&4294967295|v>>>10),v=y+(A^w&(T^A))+E[12]+1804603682&4294967295,y=w+(v<<7&4294967295|v>>>25),v=A+(T^y&(w^T))+E[13]+4254626195&4294967295,A=y+(v<<12&4294967295|v>>>20),v=T+(w^A&(y^w))+E[14]+2792965006&4294967295,T=A+(v<<17&4294967295|v>>>15),v=w+(y^T&(A^y))+E[15]+1236535329&4294967295,w=T+(v<<22&4294967295|v>>>10),v=y+(T^A&(w^T))+E[1]+4129170786&4294967295,y=w+(v<<5&4294967295|v>>>27),v=A+(w^T&(y^w))+E[6]+3225465664&4294967295,A=y+(v<<9&4294967295|v>>>23),v=T+(y^w&(A^y))+E[11]+643717713&4294967295,T=A+(v<<14&4294967295|v>>>18),v=w+(A^y&(T^A))+E[0]+3921069994&4294967295,w=T+(v<<20&4294967295|v>>>12),v=y+(T^A&(w^T))+E[5]+3593408605&4294967295,y=w+(v<<5&4294967295|v>>>27),v=A+(w^T&(y^w))+E[10]+38016083&4294967295,A=y+(v<<9&4294967295|v>>>23),v=T+(y^w&(A^y))+E[15]+3634488961&4294967295,T=A+(v<<14&4294967295|v>>>18),v=w+(A^y&(T^A))+E[4]+3889429448&4294967295,w=T+(v<<20&4294967295|v>>>12),v=y+(T^A&(w^T))+E[9]+568446438&4294967295,y=w+(v<<5&4294967295|v>>>27),v=A+(w^T&(y^w))+E[14]+3275163606&4294967295,A=y+(v<<9&4294967295|v>>>23),v=T+(y^w&(A^y))+E[3]+4107603335&4294967295,T=A+(v<<14&4294967295|v>>>18),v=w+(A^y&(T^A))+E[8]+1163531501&4294967295,w=T+(v<<20&4294967295|v>>>12),v=y+(T^A&(w^T))+E[13]+2850285829&4294967295,y=w+(v<<5&4294967295|v>>>27),v=A+(w^T&(y^w))+E[2]+4243563512&4294967295,A=y+(v<<9&4294967295|v>>>23),v=T+(y^w&(A^y))+E[7]+1735328473&4294967295,T=A+(v<<14&4294967295|v>>>18),v=w+(A^y&(T^A))+E[12]+2368359562&4294967295,w=T+(v<<20&4294967295|v>>>12),v=y+(w^T^A)+E[5]+4294588738&4294967295,y=w+(v<<4&4294967295|v>>>28),v=A+(y^w^T)+E[8]+2272392833&4294967295,A=y+(v<<11&4294967295|v>>>21),v=T+(A^y^w)+E[11]+1839030562&4294967295,T=A+(v<<16&4294967295|v>>>16),v=w+(T^A^y)+E[14]+4259657740&4294967295,w=T+(v<<23&4294967295|v>>>9),v=y+(w^T^A)+E[1]+2763975236&4294967295,y=w+(v<<4&4294967295|v>>>28),v=A+(y^w^T)+E[4]+1272893353&4294967295,A=y+(v<<11&4294967295|v>>>21),v=T+(A^y^w)+E[7]+4139469664&4294967295,T=A+(v<<16&4294967295|v>>>16),v=w+(T^A^y)+E[10]+3200236656&4294967295,w=T+(v<<23&4294967295|v>>>9),v=y+(w^T^A)+E[13]+681279174&4294967295,y=w+(v<<4&4294967295|v>>>28),v=A+(y^w^T)+E[0]+3936430074&4294967295,A=y+(v<<11&4294967295|v>>>21),v=T+(A^y^w)+E[3]+3572445317&4294967295,T=A+(v<<16&4294967295|v>>>16),v=w+(T^A^y)+E[6]+76029189&4294967295,w=T+(v<<23&4294967295|v>>>9),v=y+(w^T^A)+E[9]+3654602809&4294967295,y=w+(v<<4&4294967295|v>>>28),v=A+(y^w^T)+E[12]+3873151461&4294967295,A=y+(v<<11&4294967295|v>>>21),v=T+(A^y^w)+E[15]+530742520&4294967295,T=A+(v<<16&4294967295|v>>>16),v=w+(T^A^y)+E[2]+3299628645&4294967295,w=T+(v<<23&4294967295|v>>>9),v=y+(T^(w|~A))+E[0]+4096336452&4294967295,y=w+(v<<6&4294967295|v>>>26),v=A+(w^(y|~T))+E[7]+1126891415&4294967295,A=y+(v<<10&4294967295|v>>>22),v=T+(y^(A|~w))+E[14]+2878612391&4294967295,T=A+(v<<15&4294967295|v>>>17),v=w+(A^(T|~y))+E[5]+4237533241&4294967295,w=T+(v<<21&4294967295|v>>>11),v=y+(T^(w|~A))+E[12]+1700485571&4294967295,y=w+(v<<6&4294967295|v>>>26),v=A+(w^(y|~T))+E[3]+2399980690&4294967295,A=y+(v<<10&4294967295|v>>>22),v=T+(y^(A|~w))+E[10]+4293915773&4294967295,T=A+(v<<15&4294967295|v>>>17),v=w+(A^(T|~y))+E[1]+2240044497&4294967295,w=T+(v<<21&4294967295|v>>>11),v=y+(T^(w|~A))+E[8]+1873313359&4294967295,y=w+(v<<6&4294967295|v>>>26),v=A+(w^(y|~T))+E[15]+4264355552&4294967295,A=y+(v<<10&4294967295|v>>>22),v=T+(y^(A|~w))+E[6]+2734768916&4294967295,T=A+(v<<15&4294967295|v>>>17),v=w+(A^(T|~y))+E[13]+1309151649&4294967295,w=T+(v<<21&4294967295|v>>>11),v=y+(T^(w|~A))+E[4]+4149444226&4294967295,y=w+(v<<6&4294967295|v>>>26),v=A+(w^(y|~T))+E[11]+3174756917&4294967295,A=y+(v<<10&4294967295|v>>>22),v=T+(y^(A|~w))+E[2]+718787259&4294967295,T=A+(v<<15&4294967295|v>>>17),v=w+(A^(T|~y))+E[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(T+(v<<21&4294967295|v>>>11))&4294967295,b.g[2]=b.g[2]+T&4294967295,b.g[3]=b.g[3]+A&4294967295}i.prototype.v=function(b,y){y===void 0&&(y=b.length);const w=y-this.blockSize,E=this.C;let T=this.h,A=0;for(;A<y;){if(T==0)for(;A<=w;)s(this,b,A),A+=this.blockSize;if(typeof b=="string"){for(;A<y;)if(E[T++]=b.charCodeAt(A++),T==this.blockSize){s(this,E),T=0;break}}else for(;A<y;)if(E[T++]=b[A++],T==this.blockSize){s(this,E),T=0;break}}this.h=T,this.o+=y},i.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;y=this.o*8;for(var w=b.length-8;w<b.length;++w)b[w]=y&255,y/=256;for(this.v(b),b=Array(16),y=0,w=0;w<4;++w)for(let E=0;E<32;E+=8)b[y++]=this.g[w]>>>E&255;return b};function r(b,y){var w=c;return Object.prototype.hasOwnProperty.call(w,b)?w[b]:w[b]=y(b)}function a(b,y){this.h=y;const w=[];let E=!0;for(let T=b.length-1;T>=0;T--){const A=b[T]|0;E&&A==y||(w[T]=A,E=!1)}this.g=w}var c={};function u(b){return-128<=b&&b<128?r(b,function(y){return new a([y|0],y<0?-1:0)}):new a([b|0],b<0?-1:0)}function d(b){if(isNaN(b)||!isFinite(b))return _;if(b<0)return M(d(-b));const y=[];let w=1;for(let E=0;b>=w;E++)y[E]=b/w|0,w*=4294967296;return new a(y,0)}function m(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return M(m(b.substring(1),y));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=d(Math.pow(y,8));let E=_;for(let A=0;A<b.length;A+=8){var T=Math.min(8,b.length-A);const v=parseInt(b.substring(A,A+T),y);T<8?(T=d(Math.pow(y,T)),E=E.j(T).add(d(v))):(E=E.j(w),E=E.add(d(v)))}return E}var _=u(0),I=u(1),R=u(16777216);n=a.prototype,n.m=function(){if($(this))return-M(this).m();let b=0,y=1;for(let w=0;w<this.g.length;w++){const E=this.i(w);b+=(E>=0?E:4294967296+E)*y,y*=4294967296}return b},n.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(N(this))return"0";if($(this))return"-"+M(this).toString(b);const y=d(Math.pow(b,6));var w=this;let E="";for(;;){const T=G(w,y).g;w=W(w,T.j(y));let A=((w.g.length>0?w.g[0]:w.h)>>>0).toString(b);if(w=T,N(w))return A+E;for(;A.length<6;)A="0"+A;E=A+E}},n.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function N(b){if(b.h!=0)return!1;for(let y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function $(b){return b.h==-1}n.l=function(b){return b=W(this,b),$(b)?-1:N(b)?0:1};function M(b){const y=b.g.length,w=[];for(let E=0;E<y;E++)w[E]=~b.g[E];return new a(w,~b.h).add(I)}n.abs=function(){return $(this)?M(this):this},n.add=function(b){const y=Math.max(this.g.length,b.g.length),w=[];let E=0;for(let T=0;T<=y;T++){let A=E+(this.i(T)&65535)+(b.i(T)&65535),v=(A>>>16)+(this.i(T)>>>16)+(b.i(T)>>>16);E=v>>>16,A&=65535,v&=65535,w[T]=v<<16|A}return new a(w,w[w.length-1]&-2147483648?-1:0)};function W(b,y){return b.add(M(y))}n.j=function(b){if(N(this)||N(b))return _;if($(this))return $(b)?M(this).j(M(b)):M(M(this).j(b));if($(b))return M(this.j(M(b)));if(this.l(R)<0&&b.l(R)<0)return d(this.m()*b.m());const y=this.g.length+b.g.length,w=[];for(var E=0;E<2*y;E++)w[E]=0;for(E=0;E<this.g.length;E++)for(let T=0;T<b.g.length;T++){const A=this.i(E)>>>16,v=this.i(E)&65535,Ne=b.i(T)>>>16,Xt=b.i(T)&65535;w[2*E+2*T]+=v*Xt,Z(w,2*E+2*T),w[2*E+2*T+1]+=A*Xt,Z(w,2*E+2*T+1),w[2*E+2*T+1]+=v*Ne,Z(w,2*E+2*T+1),w[2*E+2*T+2]+=A*Ne,Z(w,2*E+2*T+2)}for(b=0;b<y;b++)w[b]=w[2*b+1]<<16|w[2*b];for(b=y;b<2*y;b++)w[b]=0;return new a(w,0)};function Z(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function j(b,y){this.g=b,this.h=y}function G(b,y){if(N(y))throw Error("division by zero");if(N(b))return new j(_,_);if($(b))return y=G(M(b),y),new j(M(y.g),M(y.h));if($(y))return y=G(b,M(y)),new j(M(y.g),y.h);if(b.g.length>30){if($(b)||$(y))throw Error("slowDivide_ only works with positive integers.");for(var w=I,E=y;E.l(b)<=0;)w=ee(w),E=ee(E);var T=te(w,1),A=te(E,1);for(E=te(E,2),w=te(w,2);!N(E);){var v=A.add(E);v.l(b)<=0&&(T=T.add(w),A=v),E=te(E,1),w=te(w,1)}return y=W(b,T.j(y)),new j(T,y)}for(T=_;b.l(y)>=0;){for(w=Math.max(1,Math.floor(b.m()/y.m())),E=Math.ceil(Math.log(w)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),A=d(w),v=A.j(y);$(v)||v.l(b)>0;)w-=E,A=d(w),v=A.j(y);N(A)&&(A=I),T=T.add(A),b=W(b,v)}return new j(T,b)}n.B=function(b){return G(this,b).h},n.and=function(b){const y=Math.max(this.g.length,b.g.length),w=[];for(let E=0;E<y;E++)w[E]=this.i(E)&b.i(E);return new a(w,this.h&b.h)},n.or=function(b){const y=Math.max(this.g.length,b.g.length),w=[];for(let E=0;E<y;E++)w[E]=this.i(E)|b.i(E);return new a(w,this.h|b.h)},n.xor=function(b){const y=Math.max(this.g.length,b.g.length),w=[];for(let E=0;E<y;E++)w[E]=this.i(E)^b.i(E);return new a(w,this.h^b.h)};function ee(b){const y=b.g.length+1,w=[];for(let E=0;E<y;E++)w[E]=b.i(E)<<1|b.i(E-1)>>>31;return new a(w,b.h)}function te(b,y){const w=y>>5;y%=32;const E=b.g.length-w,T=[];for(let A=0;A<E;A++)T[A]=y>0?b.i(A+w)>>>y|b.i(A+w+1)<<32-y:b.i(A+w);return new a(T,b.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,ld=i,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,Vt=a}).apply(typeof Kl<"u"?Kl:typeof self<"u"?self:typeof window<"u"?window:{});var As=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ud,ki,hd,Fs,qo,dd,fd,pd;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof As=="object"&&As];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var i=t(this);function s(o,l){if(l)e:{var h=i;o=o.split(".");for(var g=0;g<o.length-1;g++){var S=o[g];if(!(S in h))break e;h=h[S]}o=o[o.length-1],g=h[o],l=l(g),l!=g&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(l){var h=[],g;for(g in l)Object.prototype.hasOwnProperty.call(l,g)&&h.push([g,l[g]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},a=this||self;function c(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function u(o,l,h){return o.call.apply(o.bind,arguments)}function d(o,l,h){return d=u,d.apply(null,arguments)}function m(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var g=h.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function _(o,l){function h(){}h.prototype=l.prototype,o.Z=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(g,S,k){for(var x=Array(arguments.length-2),q=2;q<arguments.length;q++)x[q-2]=arguments[q];return l.prototype[S].apply(g,x)}}var I=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function R(o){const l=o.length;if(l>0){const h=Array(l);for(let g=0;g<l;g++)h[g]=o[g];return h}return[]}function N(o,l){for(let g=1;g<arguments.length;g++){const S=arguments[g];var h=typeof S;if(h=h!="object"?h:S?Array.isArray(S)?"array":h:"null",h=="array"||h=="object"&&typeof S.length=="number"){h=o.length||0;const k=S.length||0;o.length=h+k;for(let x=0;x<k;x++)o[h+x]=S[x]}else o.push(S)}}class ${constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function M(o){a.setTimeout(()=>{throw o},0)}function W(){var o=b;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class Z{constructor(){this.h=this.g=null}add(l,h){const g=j.get();g.set(l,h),this.h?this.h.next=g:this.g=g,this.h=g}}var j=new $(()=>new G,o=>o.reset());class G{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let ee,te=!1,b=new Z,y=()=>{const o=Promise.resolve(void 0);ee=()=>{o.then(w)}};function w(){for(var o;o=W();){try{o.h.call(o.g)}catch(h){M(h)}var l=j;l.j(o),l.h<100&&(l.h++,o.next=l.g,l.g=o)}te=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,l),a.removeEventListener("test",h,l)}catch{}return o})();function v(o){return/^[\s\xa0]*$/.test(o)}function Ne(o,l){T.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,l)}_(Ne,T),Ne.prototype.init=function(o,l){const h=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget,l||(h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement)),this.relatedTarget=l,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Ne.Z.h.call(this)},Ne.prototype.h=function(){Ne.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Xt="closure_listenable_"+(Math.random()*1e6|0),zf=0;function Wf(o,l,h,g,S){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!g,this.ha=S,this.key=++zf,this.da=this.fa=!1}function us(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function hs(o,l,h){for(const g in o)l.call(h,o[g],g,o)}function Gf(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function mc(o){const l={};for(const h in o)l[h]=o[h];return l}const gc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yc(o,l){let h,g;for(let S=1;S<arguments.length;S++){g=arguments[S];for(h in g)o[h]=g[h];for(let k=0;k<gc.length;k++)h=gc[k],Object.prototype.hasOwnProperty.call(g,h)&&(o[h]=g[h])}}function ds(o){this.src=o,this.g={},this.h=0}ds.prototype.add=function(o,l,h,g,S){const k=o.toString();o=this.g[k],o||(o=this.g[k]=[],this.h++);const x=Hr(o,l,g,S);return x>-1?(l=o[x],h||(l.fa=!1)):(l=new Wf(l,this.src,k,!!g,S),l.fa=h,o.push(l)),l};function Br(o,l){const h=l.type;if(h in o.g){var g=o.g[h],S=Array.prototype.indexOf.call(g,l,void 0),k;(k=S>=0)&&Array.prototype.splice.call(g,S,1),k&&(us(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Hr(o,l,h,g){for(let S=0;S<o.length;++S){const k=o[S];if(!k.da&&k.listener==l&&k.capture==!!h&&k.ha==g)return S}return-1}var qr="closure_lm_"+(Math.random()*1e6|0),zr={};function vc(o,l,h,g,S){if(Array.isArray(l)){for(let k=0;k<l.length;k++)vc(o,l[k],h,g,S);return null}return h=bc(h),o&&o[Xt]?o.J(l,h,c(g)?!!g.capture:!1,S):Kf(o,l,h,!1,g,S)}function Kf(o,l,h,g,S,k){if(!l)throw Error("Invalid event type");const x=c(S)?!!S.capture:!!S;let q=Gr(o);if(q||(o[qr]=q=new ds(o)),h=q.add(l,h,g,x,k),h.proxy)return h;if(g=Qf(),h.proxy=g,g.src=o,g.listener=h,o.addEventListener)A||(S=x),S===void 0&&(S=!1),o.addEventListener(l.toString(),g,S);else if(o.attachEvent)o.attachEvent(_c(l.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Qf(){function o(h){return l.call(o.src,o.listener,h)}const l=Jf;return o}function wc(o,l,h,g,S){if(Array.isArray(l))for(var k=0;k<l.length;k++)wc(o,l[k],h,g,S);else g=c(g)?!!g.capture:!!g,h=bc(h),o&&o[Xt]?(o=o.i,k=String(l).toString(),k in o.g&&(l=o.g[k],h=Hr(l,h,g,S),h>-1&&(us(l[h]),Array.prototype.splice.call(l,h,1),l.length==0&&(delete o.g[k],o.h--)))):o&&(o=Gr(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Hr(l,h,g,S)),(h=o>-1?l[o]:null)&&Wr(h))}function Wr(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Xt])Br(l.i,o);else{var h=o.type,g=o.proxy;l.removeEventListener?l.removeEventListener(h,g,o.capture):l.detachEvent?l.detachEvent(_c(h),g):l.addListener&&l.removeListener&&l.removeListener(g),(h=Gr(l))?(Br(h,o),h.h==0&&(h.src=null,l[qr]=null)):us(o)}}}function _c(o){return o in zr?zr[o]:zr[o]="on"+o}function Jf(o,l){if(o.da)o=!0;else{l=new Ne(l,this);const h=o.listener,g=o.ha||o.src;o.fa&&Wr(o),o=h.call(g,l)}return o}function Gr(o){return o=o[qr],o instanceof ds?o:null}var Kr="__closure_events_fn_"+(Math.random()*1e9>>>0);function bc(o){return typeof o=="function"?o:(o[Kr]||(o[Kr]=function(l){return o.handleEvent(l)}),o[Kr])}function be(){E.call(this),this.i=new ds(this),this.M=this,this.G=null}_(be,E),be.prototype[Xt]=!0,be.prototype.removeEventListener=function(o,l,h,g){wc(this,o,l,h,g)};function Ce(o,l){var h,g=o.G;if(g)for(h=[];g;g=g.G)h.push(g);if(o=o.M,g=l.type||l,typeof l=="string")l=new T(l,o);else if(l instanceof T)l.target=l.target||o;else{var S=l;l=new T(g,o),yc(l,S)}S=!0;let k,x;if(h)for(x=h.length-1;x>=0;x--)k=l.g=h[x],S=fs(k,g,!0,l)&&S;if(k=l.g=o,S=fs(k,g,!0,l)&&S,S=fs(k,g,!1,l)&&S,h)for(x=0;x<h.length;x++)k=l.g=h[x],S=fs(k,g,!1,l)&&S}be.prototype.N=function(){if(be.Z.N.call(this),this.i){var o=this.i;for(const l in o.g){const h=o.g[l];for(let g=0;g<h.length;g++)us(h[g]);delete o.g[l],o.h--}}this.G=null},be.prototype.J=function(o,l,h,g){return this.i.add(String(o),l,!1,h,g)},be.prototype.K=function(o,l,h,g){return this.i.add(String(o),l,!0,h,g)};function fs(o,l,h,g){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();let S=!0;for(let k=0;k<l.length;++k){const x=l[k];if(x&&!x.da&&x.capture==h){const q=x.listener,pe=x.ha||x.src;x.fa&&Br(o.i,x),S=q.call(pe,g)!==!1&&S}}return S&&!g.defaultPrevented}function Yf(o,l){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(o,l||0)}function Tc(o){o.g=Yf(()=>{o.g=null,o.i&&(o.i=!1,Tc(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Xf extends E{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Tc(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ri(o){E.call(this),this.h=o,this.g={}}_(ri,E);var Ec=[];function Ic(o){hs(o.g,function(l,h){this.g.hasOwnProperty(h)&&Wr(l)},o),o.g={}}ri.prototype.N=function(){ri.Z.N.call(this),Ic(this)},ri.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qr=a.JSON.stringify,Zf=a.JSON.parse,ep=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Sc(){}function Ac(){}var oi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Jr(){T.call(this,"d")}_(Jr,T);function Yr(){T.call(this,"c")}_(Yr,T);var Zt={},kc=null;function ps(){return kc=kc||new be}Zt.Ia="serverreachability";function Cc(o){T.call(this,Zt.Ia,o)}_(Cc,T);function ai(o){const l=ps();Ce(l,new Cc(l))}Zt.STAT_EVENT="statevent";function Rc(o,l){T.call(this,Zt.STAT_EVENT,o),this.stat=l}_(Rc,T);function Re(o){const l=ps();Ce(l,new Rc(l,o))}Zt.Ja="timingevent";function Pc(o,l){T.call(this,Zt.Ja,o),this.size=l}_(Pc,T);function ci(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},l)}function li(){this.g=!0}li.prototype.ua=function(){this.g=!1};function tp(o,l,h,g,S,k){o.info(function(){if(o.g)if(k){var x="",q=k.split("&");for(let ne=0;ne<q.length;ne++){var pe=q[ne].split("=");if(pe.length>1){const ye=pe[0];pe=pe[1];const Ye=ye.split("_");x=Ye.length>=2&&Ye[1]=="type"?x+(ye+"="+pe+"&"):x+(ye+"=redacted&")}}}else x=null;else x=k;return"XMLHTTP REQ ("+g+") [attempt "+S+"]: "+l+`
`+h+`
`+x})}function np(o,l,h,g,S,k,x){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+S+"]: "+l+`
`+h+`
`+k+" "+x})}function bn(o,l,h,g){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+sp(o,h)+(g?" "+g:"")})}function ip(o,l){o.info(function(){return"TIMEOUT: "+l})}li.prototype.info=function(){};function sp(o,l){if(!o.g)return l;if(!l)return null;try{const k=JSON.parse(l);if(k){for(o=0;o<k.length;o++)if(Array.isArray(k[o])){var h=k[o];if(!(h.length<2)){var g=h[1];if(Array.isArray(g)&&!(g.length<1)){var S=g[0];if(S!="noop"&&S!="stop"&&S!="close")for(let x=1;x<g.length;x++)g[x]=""}}}}return Qr(k)}catch{return l}}var ms={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},xc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Lc;function Xr(){}_(Xr,Sc),Xr.prototype.g=function(){return new XMLHttpRequest},Lc=new Xr;function ui(o){return encodeURIComponent(String(o))}function rp(o){var l=1;o=o.split(":");const h=[];for(;l>0&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function _t(o,l,h,g){this.j=o,this.i=l,this.l=h,this.S=g||1,this.V=new ri(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Dc}function Dc(){this.i=null,this.g="",this.h=!1}var Nc={},Zr={};function eo(o,l,h){o.M=1,o.A=ys(Je(l)),o.u=h,o.R=!0,Mc(o,null)}function Mc(o,l){o.F=Date.now(),gs(o),o.B=Je(o.A);var h=o.B,g=o.S;Array.isArray(g)||(g=[String(g)]),Kc(h.i,"t",g),o.C=0,h=o.j.L,o.h=new Dc,o.g=dl(o.j,h?l:null,!o.u),o.P>0&&(o.O=new Xf(d(o.Y,o,o.g),o.P)),l=o.V,h=o.g,g=o.ba;var S="readystatechange";Array.isArray(S)||(S&&(Ec[0]=S.toString()),S=Ec);for(let k=0;k<S.length;k++){const x=vc(h,S[k],g||l.handleEvent,!1,l.h||l);if(!x)break;l.g[x.key]=x}l=o.J?mc(o.J):{},o.u?(o.v||(o.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,l)):(o.v="GET",o.g.ea(o.B,o.v,null,l)),ai(),tp(o.i,o.v,o.B,o.l,o.S,o.u)}_t.prototype.ba=function(o){o=o.target;const l=this.O;l&&Et(o)==3?l.j():this.Y(o)},_t.prototype.Y=function(o){try{if(o==this.g)e:{const q=Et(this.g),pe=this.g.ya(),ne=this.g.ca();if(!(q<3)&&(q!=3||this.g&&(this.h.h||this.g.la()||tl(this.g)))){this.K||q!=4||pe==7||(pe==8||ne<=0?ai(3):ai(2)),to(this);var l=this.g.ca();this.X=l;var h=op(this);if(this.o=l==200,np(this.i,this.v,this.B,this.l,this.S,q,l),this.o){if(this.U&&!this.L){t:{if(this.g){var g,S=this.g;if((g=S.g?S.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(g)){var k=g;break t}}k=null}if(o=k)bn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,no(this,o);else{this.o=!1,this.m=3,Re(12),en(this),hi(this);break e}}if(this.R){o=!0;let ye;for(;!this.K&&this.C<h.length;)if(ye=ap(this,h),ye==Zr){q==4&&(this.m=4,Re(14),o=!1),bn(this.i,this.l,null,"[Incomplete Response]");break}else if(ye==Nc){this.m=4,Re(15),bn(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else bn(this.i,this.l,ye,null),no(this,ye);if(Oc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),q!=4||h.length!=0||this.h.h||(this.m=1,Re(16),o=!1),this.o=this.o&&o,!o)bn(this.i,this.l,h,"[Invalid Chunked Response]"),en(this),hi(this);else if(h.length>0&&!this.W){this.W=!0;var x=this.j;x.g==this&&x.aa&&!x.P&&(x.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),uo(x),x.P=!0,Re(11))}}else bn(this.i,this.l,h,null),no(this,h);q==4&&en(this),this.o&&!this.K&&(q==4?cl(this.j,this):(this.o=!1,gs(this)))}else bp(this.g),l==400&&h.indexOf("Unknown SID")>0?(this.m=3,Re(12)):(this.m=0,Re(13)),en(this),hi(this)}}}catch{}finally{}};function op(o){if(!Oc(o))return o.g.la();const l=tl(o.g);if(l==="")return"";let h="";const g=l.length,S=Et(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return en(o),hi(o),"";o.h.i=new a.TextDecoder}for(let k=0;k<g;k++)o.h.h=!0,h+=o.h.i.decode(l[k],{stream:!(S&&k==g-1)});return l.length=0,o.h.g+=h,o.C=0,o.h.g}function Oc(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function ap(o,l){var h=o.C,g=l.indexOf(`
`,h);return g==-1?Zr:(h=Number(l.substring(h,g)),isNaN(h)?Nc:(g+=1,g+h>l.length?Zr:(l=l.slice(g,g+h),o.C=g+h,l)))}_t.prototype.cancel=function(){this.K=!0,en(this)};function gs(o){o.T=Date.now()+o.H,Vc(o,o.H)}function Vc(o,l){if(o.D!=null)throw Error("WatchDog timer not null");o.D=ci(d(o.aa,o),l)}function to(o){o.D&&(a.clearTimeout(o.D),o.D=null)}_t.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(ip(this.i,this.B),this.M!=2&&(ai(),Re(17)),en(this),this.m=2,hi(this)):Vc(this,this.T-o)};function hi(o){o.j.I==0||o.K||cl(o.j,o)}function en(o){to(o);var l=o.O;l&&typeof l.dispose=="function"&&l.dispose(),o.O=null,Ic(o.V),o.g&&(l=o.g,o.g=null,l.abort(),l.dispose())}function no(o,l){try{var h=o.j;if(h.I!=0&&(h.g==o||io(h.h,o))){if(!o.L&&io(h.h,o)&&h.I==3){try{var g=h.Ba.g.parse(l)}catch{g=null}if(Array.isArray(g)&&g.length==3){var S=g;if(S[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)Ts(h),_s(h);else break e;lo(h),Re(18)}}else h.xa=S[1],0<h.xa-h.K&&S[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=ci(d(h.Va,h),6e3));Uc(h.h)<=1&&h.ta&&(h.ta=void 0)}else nn(h,11)}else if((o.L||h.g==o)&&Ts(h),!v(l))for(S=h.Ba.g.parse(l),l=0;l<S.length;l++){let ne=S[l];const ye=ne[0];if(!(ye<=h.K))if(h.K=ye,ne=ne[1],h.I==2)if(ne[0]=="c"){h.M=ne[1],h.ba=ne[2];const Ye=ne[3];Ye!=null&&(h.ka=Ye,h.j.info("VER="+h.ka));const sn=ne[4];sn!=null&&(h.za=sn,h.j.info("SVER="+h.za));const It=ne[5];It!=null&&typeof It=="number"&&It>0&&(g=1.5*It,h.O=g,h.j.info("backChannelRequestTimeoutMs_="+g)),g=h;const St=o.g;if(St){const Is=St.g?St.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Is){var k=g.h;k.g||Is.indexOf("spdy")==-1&&Is.indexOf("quic")==-1&&Is.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(so(k,k.h),k.h=null))}if(g.G){const ho=St.g?St.g.getResponseHeader("X-HTTP-Session-Id"):null;ho&&(g.wa=ho,ie(g.J,g.G,ho))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),g=h;var x=o;if(g.na=hl(g,g.L?g.ba:null,g.W),x.L){jc(g.h,x);var q=x,pe=g.O;pe&&(q.H=pe),q.D&&(to(q),gs(q)),g.g=x}else ol(g);h.i.length>0&&bs(h)}else ne[0]!="stop"&&ne[0]!="close"||nn(h,7);else h.I==3&&(ne[0]=="stop"||ne[0]=="close"?ne[0]=="stop"?nn(h,7):co(h):ne[0]!="noop"&&h.l&&h.l.qa(ne),h.A=0)}}ai(4)}catch{}}var cp=class{constructor(o,l){this.g=o,this.map=l}};function $c(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Fc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Uc(o){return o.h?1:o.g?o.g.size:0}function io(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function so(o,l){o.g?o.g.add(l):o.h=l}function jc(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}$c.prototype.cancel=function(){if(this.i=Bc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Bc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.G);return l}return R(o.i)}var Hc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lp(o,l){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const g=o[h].indexOf("=");let S,k=null;g>=0?(S=o[h].substring(0,g),k=o[h].substring(g+1)):S=o[h],l(S,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function bt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;o instanceof bt?(this.l=o.l,di(this,o.j),this.o=o.o,this.g=o.g,fi(this,o.u),this.h=o.h,ro(this,Qc(o.i)),this.m=o.m):o&&(l=String(o).match(Hc))?(this.l=!1,di(this,l[1]||"",!0),this.o=pi(l[2]||""),this.g=pi(l[3]||"",!0),fi(this,l[4]),this.h=pi(l[5]||"",!0),ro(this,l[6]||"",!0),this.m=pi(l[7]||"")):(this.l=!1,this.i=new gi(null,this.l))}bt.prototype.toString=function(){const o=[];var l=this.j;l&&o.push(mi(l,qc,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(mi(l,qc,!0),"@"),o.push(ui(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(mi(h,h.charAt(0)=="/"?dp:hp,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",mi(h,pp)),o.join("")},bt.prototype.resolve=function(o){const l=Je(this);let h=!!o.j;h?di(l,o.j):h=!!o.o,h?l.o=o.o:h=!!o.g,h?l.g=o.g:h=o.u!=null;var g=o.h;if(h)fi(l,o.u);else if(h=!!o.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var S=l.h.lastIndexOf("/");S!=-1&&(g=l.h.slice(0,S+1)+g)}if(S=g,S==".."||S==".")g="";else if(S.indexOf("./")!=-1||S.indexOf("/.")!=-1){g=S.lastIndexOf("/",0)==0,S=S.split("/");const k=[];for(let x=0;x<S.length;){const q=S[x++];q=="."?g&&x==S.length&&k.push(""):q==".."?((k.length>1||k.length==1&&k[0]!="")&&k.pop(),g&&x==S.length&&k.push("")):(k.push(q),g=!0)}g=k.join("/")}else g=S}return h?l.h=g:h=o.i.toString()!=="",h?ro(l,Qc(o.i)):h=!!o.m,h&&(l.m=o.m),l};function Je(o){return new bt(o)}function di(o,l,h){o.j=h?pi(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function fi(o,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);o.u=l}else o.u=null}function ro(o,l,h){l instanceof gi?(o.i=l,mp(o.i,o.l)):(h||(l=mi(l,fp)),o.i=new gi(l,o.l))}function ie(o,l,h){o.i.set(l,h)}function ys(o){return ie(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function pi(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function mi(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,up),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function up(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var qc=/[#\/\?@]/g,hp=/[#\?:]/g,dp=/[#\?]/g,fp=/[#\?@]/g,pp=/#/g;function gi(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function tn(o){o.g||(o.g=new Map,o.h=0,o.i&&lp(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=gi.prototype,n.add=function(o,l){tn(this),this.i=null,o=Tn(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function zc(o,l){tn(o),l=Tn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Wc(o,l){return tn(o),l=Tn(o,l),o.g.has(l)}n.forEach=function(o,l){tn(this),this.g.forEach(function(h,g){h.forEach(function(S){o.call(l,S,g,this)},this)},this)};function Gc(o,l){tn(o);let h=[];if(typeof l=="string")Wc(o,l)&&(h=h.concat(o.g.get(Tn(o,l))));else for(o=Array.from(o.g.values()),l=0;l<o.length;l++)h=h.concat(o[l]);return h}n.set=function(o,l){return tn(this),this.i=null,o=Tn(this,o),Wc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=Gc(this,o),o.length>0?String(o[0]):l):l};function Kc(o,l,h){zc(o,l),h.length>0&&(o.i=null,o.g.set(Tn(o,l),R(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(let g=0;g<l.length;g++){var h=l[g];const S=ui(h);h=Gc(this,h);for(let k=0;k<h.length;k++){let x=S;h[k]!==""&&(x+="="+ui(h[k])),o.push(x)}}return this.i=o.join("&")};function Qc(o){const l=new gi;return l.i=o.i,o.g&&(l.g=new Map(o.g),l.h=o.h),l}function Tn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function mp(o,l){l&&!o.j&&(tn(o),o.i=null,o.g.forEach(function(h,g){const S=g.toLowerCase();g!=S&&(zc(this,g),Kc(this,S,h))},o)),o.j=l}function gp(o,l){const h=new li;if(a.Image){const g=new Image;g.onload=m(Tt,h,"TestLoadImage: loaded",!0,l,g),g.onerror=m(Tt,h,"TestLoadImage: error",!1,l,g),g.onabort=m(Tt,h,"TestLoadImage: abort",!1,l,g),g.ontimeout=m(Tt,h,"TestLoadImage: timeout",!1,l,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else l(!1)}function yp(o,l){const h=new li,g=new AbortController,S=setTimeout(()=>{g.abort(),Tt(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:g.signal}).then(k=>{clearTimeout(S),k.ok?Tt(h,"TestPingServer: ok",!0,l):Tt(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(S),Tt(h,"TestPingServer: error",!1,l)})}function Tt(o,l,h,g,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),g(h)}catch{}}function vp(){this.g=new ep}function oo(o){this.i=o.Sb||null,this.h=o.ab||!1}_(oo,Sc),oo.prototype.g=function(){return new vs(this.i,this.h)};function vs(o,l){be.call(this),this.H=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}_(vs,be),n=vs.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=l,this.readyState=1,vi(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(l.body=o),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,yi(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,vi(this)),this.g&&(this.readyState=3,vi(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Jc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Jc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?yi(this):vi(this),this.readyState==3&&Jc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,yi(this))},n.Na=function(o){this.g&&(this.response=o,yi(this))},n.ga=function(){this.g&&yi(this)};function yi(o){o.readyState=4,o.l=null,o.j=null,o.B=null,vi(o)}n.setRequestHeader=function(o,l){this.A.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function vi(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(vs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Yc(o){let l="";return hs(o,function(h,g){l+=g,l+=":",l+=h,l+=`\r
`}),l}function ao(o,l,h){e:{for(g in h){var g=!1;break e}g=!0}g||(h=Yc(h),typeof o=="string"?h!=null&&ui(h):ie(o,l,h))}function oe(o){be.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}_(oe,be);var wp=/^https?$/i,_p=["POST","PUT"];n=oe.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,l,h,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Lc.g(),this.g.onreadystatechange=I(d(this.Ca,this));try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(k){Xc(this,k);return}if(o=h||"",h=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var S in g)h.set(S,g[S]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const k of g.keys())h.set(k,g.get(k));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(h.keys()).find(k=>k.toLowerCase()=="content-type"),S=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(_p,l,void 0)>=0)||g||S||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,x]of h)this.g.setRequestHeader(k,x);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(k){Xc(this,k)}};function Xc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.o=5,Zc(o),ws(o)}function Zc(o){o.A||(o.A=!0,Ce(o,"complete"),Ce(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Ce(this,"complete"),Ce(this,"abort"),ws(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ws(this,!0)),oe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?el(this):this.Xa())},n.Xa=function(){el(this)};function el(o){if(o.h&&typeof r<"u"){if(o.v&&Et(o)==4)setTimeout(o.Ca.bind(o),0);else if(Ce(o,"readystatechange"),Et(o)==4){o.h=!1;try{const k=o.ca();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var g;if(g=k===0){let x=String(o.D).match(Hc)[1]||null;!x&&a.self&&a.self.location&&(x=a.self.location.protocol.slice(0,-1)),g=!wp.test(x?x.toLowerCase():"")}h=g}if(h)Ce(o,"complete"),Ce(o,"success");else{o.o=6;try{var S=Et(o)>2?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.ca()+"]",Zc(o)}}finally{ws(o)}}}}function ws(o,l){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,l||Ce(o,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Et(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Et(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Zf(l)}};function tl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function bp(o){const l={};o=(o.g&&Et(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(v(o[g]))continue;var h=rp(o[g]);const S=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const k=l[S]||[];l[S]=k,k.push(h)}Gf(l,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function wi(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function nl(o){this.za=0,this.i=[],this.j=new li,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=wi("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=wi("baseRetryDelayMs",5e3,o),this.Za=wi("retryDelaySeedMs",1e4,o),this.Ta=wi("forwardChannelMaxRetries",2,o),this.va=wi("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new $c(o&&o.concurrentRequestLimit),this.Ba=new vp,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=nl.prototype,n.ka=8,n.I=1,n.connect=function(o,l,h,g){Re(0),this.W=o,this.H=l||{},h&&g!==void 0&&(this.H.OSID=h,this.H.OAID=g),this.F=this.X,this.J=hl(this,null,this.W),bs(this)};function co(o){if(il(o),o.I==3){var l=o.V++,h=Je(o.J);if(ie(h,"SID",o.M),ie(h,"RID",l),ie(h,"TYPE","terminate"),_i(o,h),l=new _t(o,o.j,l),l.M=2,l.A=ys(Je(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=l.A,h=!0),h||(l.g=dl(l.j,null),l.g.ea(l.A)),l.F=Date.now(),gs(l)}ul(o)}function _s(o){o.g&&(uo(o),o.g.cancel(),o.g=null)}function il(o){_s(o),o.v&&(a.clearTimeout(o.v),o.v=null),Ts(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function bs(o){if(!Fc(o.h)&&!o.m){o.m=!0;var l=o.Ea;ee||y(),te||(ee(),te=!0),b.add(l,o),o.D=0}}function Tp(o,l){return Uc(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=l.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=ci(d(o.Ea,o,l),ll(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const S=new _t(this,this.j,o);let k=this.o;if(this.U&&(k?(k=mc(k),yc(k,this.U)):k=this.U),this.u!==null||this.R||(S.J=k,k=null),this.S)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var g=this.i[h];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(l+=g,l>4096){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=rl(this,S,l),h=Je(this.J),ie(h,"RID",o),ie(h,"CVER",22),this.G&&ie(h,"X-HTTP-Session-Id",this.G),_i(this,h),k&&(this.R?l="headers="+ui(Yc(k))+"&"+l:this.u&&ao(h,this.u,k)),so(this.h,S),this.Ra&&ie(h,"TYPE","init"),this.S?(ie(h,"$req",l),ie(h,"SID","null"),S.U=!0,eo(S,h,null)):eo(S,h,l),this.I=2}}else this.I==3&&(o?sl(this,o):this.i.length==0||Fc(this.h)||sl(this))};function sl(o,l){var h;l?h=l.l:h=o.V++;const g=Je(o.J);ie(g,"SID",o.M),ie(g,"RID",h),ie(g,"AID",o.K),_i(o,g),o.u&&o.o&&ao(g,o.u,o.o),h=new _t(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),l&&(o.i=l.G.concat(o.i)),l=rl(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),so(o.h,h),eo(h,g,l)}function _i(o,l){o.H&&hs(o.H,function(h,g){ie(l,g,h)}),o.l&&hs({},function(h,g){ie(l,g,h)})}function rl(o,l,h){h=Math.min(o.i.length,h);const g=o.l?d(o.l.Ka,o.l,o):null;e:{var S=o.i;let q=-1;for(;;){const pe=["count="+h];q==-1?h>0?(q=S[0].g,pe.push("ofs="+q)):q=0:pe.push("ofs="+q);let ne=!0;for(let ye=0;ye<h;ye++){var k=S[ye].g;const Ye=S[ye].map;if(k-=q,k<0)q=Math.max(0,S[ye].g-100),ne=!1;else try{k="req"+k+"_"||"";try{var x=Ye instanceof Map?Ye:Object.entries(Ye);for(const[sn,It]of x){let St=It;c(It)&&(St=Qr(It)),pe.push(k+sn+"="+encodeURIComponent(St))}}catch(sn){throw pe.push(k+"type="+encodeURIComponent("_badmap")),sn}}catch{g&&g(Ye)}}if(ne){x=pe.join("&");break e}}x=void 0}return o=o.i.splice(0,h),l.G=o,x}function ol(o){if(!o.g&&!o.v){o.Y=1;var l=o.Da;ee||y(),te||(ee(),te=!0),b.add(l,o),o.A=0}}function lo(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=ci(d(o.Da,o),ll(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,al(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=ci(d(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Re(10),_s(this),al(this))};function uo(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function al(o){o.g=new _t(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var l=Je(o.na);ie(l,"RID","rpc"),ie(l,"SID",o.M),ie(l,"AID",o.K),ie(l,"CI",o.F?"0":"1"),!o.F&&o.ia&&ie(l,"TO",o.ia),ie(l,"TYPE","xmlhttp"),_i(o,l),o.u&&o.o&&ao(l,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=ys(Je(l)),h.u=null,h.R=!0,Mc(h,o)}n.Va=function(){this.C!=null&&(this.C=null,_s(this),lo(this),Re(19))};function Ts(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function cl(o,l){var h=null;if(o.g==l){Ts(o),uo(o),o.g=null;var g=2}else if(io(o.h,l))h=l.G,jc(o.h,l),g=1;else return;if(o.I!=0){if(l.o)if(g==1){h=l.u?l.u.length:0,l=Date.now()-l.F;var S=o.D;g=ps(),Ce(g,new Pc(g,h)),bs(o)}else ol(o);else if(S=l.m,S==3||S==0&&l.X>0||!(g==1&&Tp(o,l)||g==2&&lo(o)))switch(h&&h.length>0&&(l=o.h,l.i=l.i.concat(h)),S){case 1:nn(o,5);break;case 4:nn(o,10);break;case 3:nn(o,6);break;default:nn(o,2)}}}function ll(o,l){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*l}function nn(o,l){if(o.j.info("Error code "+l),l==2){var h=d(o.bb,o),g=o.Ua;const S=!g;g=new bt(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||di(g,"https"),ys(g),S?gp(g.toString(),h):yp(g.toString(),h)}else Re(2);o.I=0,o.l&&o.l.pa(l),ul(o),il(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Re(2)):(this.j.info("Failed to ping google.com"),Re(1))};function ul(o){if(o.I=0,o.ja=[],o.l){const l=Bc(o.h);(l.length!=0||o.i.length!=0)&&(N(o.ja,l),N(o.ja,o.i),o.h.i.length=0,R(o.i),o.i.length=0),o.l.oa()}}function hl(o,l,h){var g=h instanceof bt?Je(h):new bt(h);if(g.g!="")l&&(g.g=l+"."+g.g),fi(g,g.u);else{var S=a.location;g=S.protocol,l=l?l+"."+S.hostname:S.hostname,S=+S.port;const k=new bt(null);g&&di(k,g),l&&(k.g=l),S&&fi(k,S),h&&(k.h=h),g=k}return h=o.G,l=o.wa,h&&l&&ie(g,h,l),ie(g,"VER",o.ka),_i(o,g),g}function dl(o,l,h){if(l&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Aa&&!o.ma?new oe(new oo({ab:h})):new oe(o.ma),l.Fa(o.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function fl(){}n=fl.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Es(){}Es.prototype.g=function(o,l){return new $e(o,l)};function $e(o,l){be.call(this),this.g=new nl(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(o?o["X-WebChannel-Client-Profile"]=l.sa:o={"X-WebChannel-Client-Profile":l.sa}),this.g.U=o,(o=l&&l.Qb)&&!v(o)&&(this.g.u=o),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!v(l)&&(this.g.G=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new En(this)}_($e,be),$e.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},$e.prototype.close=function(){co(this.g)},$e.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=Qr(o),o=h);l.i.push(new cp(l.Ya++,o)),l.I==3&&bs(l)},$e.prototype.N=function(){this.g.l=null,delete this.j,co(this.g),delete this.g,$e.Z.N.call(this)};function pl(o){Jr.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}_(pl,Jr);function ml(){Yr.call(this),this.status=1}_(ml,Yr);function En(o){this.g=o}_(En,fl),En.prototype.ra=function(){Ce(this.g,"a")},En.prototype.qa=function(o){Ce(this.g,new pl(o))},En.prototype.pa=function(o){Ce(this.g,new ml)},En.prototype.oa=function(){Ce(this.g,"b")},Es.prototype.createWebChannel=Es.prototype.g,$e.prototype.send=$e.prototype.o,$e.prototype.open=$e.prototype.m,$e.prototype.close=$e.prototype.close,pd=function(){return new Es},fd=function(){return ps()},dd=Zt,qo={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ms.NO_ERROR=0,ms.TIMEOUT=8,ms.HTTP_ERROR=6,Fs=ms,xc.COMPLETE="complete",hd=xc,Ac.EventType=oi,oi.OPEN="a",oi.CLOSE="b",oi.ERROR="c",oi.MESSAGE="d",be.prototype.listen=be.prototype.J,ki=Ac,oe.prototype.listenOnce=oe.prototype.K,oe.prototype.getLastError=oe.prototype.Ha,oe.prototype.getLastErrorCode=oe.prototype.ya,oe.prototype.getStatus=oe.prototype.ca,oe.prototype.getResponseJson=oe.prototype.La,oe.prototype.getResponseText=oe.prototype.la,oe.prototype.send=oe.prototype.ea,oe.prototype.setWithCredentials=oe.prototype.Fa,ud=oe}).apply(typeof As<"u"?As:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let ei="12.10.0";function Zv(n){ei=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const yn=new pa("@firebase/firestore");function Sn(){return yn.logLevel}function D(n,...e){if(yn.logLevel<=z.DEBUG){const t=e.map(Da);yn.debug(`Firestore (${ei}): ${n}`,...t)}}function gt(n,...e){if(yn.logLevel<=z.ERROR){const t=e.map(Da);yn.error(`Firestore (${ei}): ${n}`,...t)}}function vn(n,...e){if(yn.logLevel<=z.WARN){const t=e.map(Da);yn.warn(`Firestore (${ei}): ${n}`,...t)}}function Da(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,md(n,i,t)}function md(n,e,t){let i=`FIRESTORE (${ei}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw gt(i),new Error(i)}function re(n,e,t,i){let s="Unexpected state";typeof t=="string"?s=t:i=t,n||md(e,s,i)}function J(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends yt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ew{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ee.UNAUTHENTICATED)))}shutdown(){}}class tw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class nw{constructor(e){this.t=e,this.currentUser=Ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){re(this.o===void 0,42304);let i=this.i;const s=u=>this.i!==i?(i=this.i,t(u)):Promise.resolve();let r=new Ln;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ln,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const u=r;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},c=u=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ln)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(re(typeof i.accessToken=="string",31837,{l:i}),new gd(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string",2055,{h:e}),new Ee(e)}}class iw{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Ee.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class sw{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new iw(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ee.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ql{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rw{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Oe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){re(this.o===void 0,3512);const i=r=>{r.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const a=r.token!==this.m;return this.m=r.token,D("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable((()=>i(r)))};const s=r=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>s(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?s(r):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ql(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(re(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ql(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=ow(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%62))}return i}}function K(n,e){return n<e?-1:n>e?1:0}function zo(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const s=n.charAt(i),r=e.charAt(i);if(s!==r)return bo(s)===bo(r)?K(s,r):bo(s)?1:-1}return K(n.length,e.length)}const aw=55296,cw=57343;function bo(n){const e=n.charCodeAt(0);return e>=aw&&e<=cw}function Un(n,e,t){return n.length===e.length&&n.every(((i,s)=>t(i,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl="__name__";class Xe{constructor(e,t,i){t===void 0?t=0:t>e.length&&H(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&H(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Xe.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Xe?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=Xe.compareSegments(e.get(s),t.get(s));if(r!==0)return r}return K(e.length,t.length)}static compareSegments(e,t){const i=Xe.isNumericId(e),s=Xe.isNumericId(t);return i&&!s?-1:!i&&s?1:i&&s?Xe.extractNumericId(e).compare(Xe.extractNumericId(t)):zo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Vt.fromString(e.substring(4,e.length-2))}}class se extends Xe{construct(e,t,i){return new se(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new V(L.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((s=>s.length>0)))}return new se(t)}static emptyPath(){return new se([])}}const lw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pe extends Xe{construct(e,t,i){return new Pe(e,t,i)}static isValidIdentifier(e){return lw.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pe.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Jl}static keyField(){return new Pe([Jl])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new V(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new V(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new V(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(i+=c,s++):(r(),s++)}if(r(),a)throw new V(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pe(t)}static emptyPath(){return new Pe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(se.fromString(e))}static fromName(e){return new U(se.fromString(e).popFirst(5))}static empty(){return new U(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new se(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(n,e,t){if(!t)throw new V(L.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function hw(n,e,t,i){if(e===!0&&i===!0)throw new V(L.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Yl(n){if(U.isDocumentKey(n))throw new V(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function dw(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function fw(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":H(12329,{type:typeof n})}function Us(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=fw(n);throw new V(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function de(n,e){const t={typeString:n};return e&&(t.value=e),t}function ns(n,e){if(!dw(n))throw new V(L.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const s=e[i].typeString,r="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const a=n[i];if(s&&typeof a!==s){t=`JSON field '${i}' must be a ${s}.`;break}if(r!==void 0&&a!==r.value){t=`Expected '${i}' field to equal '${r.value}'`;break}}if(t)throw new V(L.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl=-62135596800,Zl=1e6;class he{static now(){return he.fromMillis(Date.now())}static fromDate(e){return he.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Zl);return new he(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Xl)throw new V(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Zl}_compareTo(e){return this.seconds===e.seconds?K(this.nanoseconds,e.nanoseconds):K(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:he._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ns(e,he._jsonSchema))return new he(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Xl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}he._jsonSchemaVersion="firestore/timestamp/1.0",he._jsonSchema={type:de("string",he._jsonSchemaVersion),seconds:de("number"),nanoseconds:de("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const qi=-1;function pw(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=B.fromTimestamp(i===1e9?new he(t+1,0):new he(t,i));return new qt(s,U.empty(),e)}function mw(n){return new qt(n.readTime,n.key,qi)}class qt{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new qt(B.min(),U.empty(),qi)}static max(){return new qt(B.max(),U.empty(),qi)}}function gw(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=U.comparator(n.documentKey,e.documentKey),t!==0?t:K(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Er(n){if(n.code!==L.FAILED_PRECONDITION||n.message!==yw)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&H(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C(((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):C.reject(t)}static resolve(e){return new C(((t,i)=>{t(e)}))}static reject(e){return new C(((t,i)=>{i(e)}))}static waitFor(e){return new C(((t,i)=>{let s=0,r=0,a=!1;e.forEach((c=>{++s,c.next((()=>{++r,a&&r===s&&t()}),(u=>i(u)))})),a=!0,r===s&&t()}))}static or(e){let t=C.resolve(!1);for(const i of e)t=t.next((s=>s?C.resolve(s):i()));return t}static forEach(e,t){const i=[];return e.forEach(((s,r)=>{i.push(t.call(this,s,r))})),this.waitFor(i)}static mapArray(e,t){return new C(((i,s)=>{const r=e.length,a=new Array(r);let c=0;for(let u=0;u<r;u++){const d=u;t(e[d]).next((m=>{a[d]=m,++c,c===r&&i(a)}),(m=>s(m)))}}))}static doWhile(e,t){return new C(((i,s)=>{const r=()=>{e()===!0?t().next((()=>{r()}),s):i()};r()}))}}function ww(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ti(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ir{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ir.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w=-1;function Sr(n){return n==null}function Wo(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd="";function bw(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=eu(e)),e=Tw(n.get(t),e);return eu(e)}function Tw(n,e){let t=e;const i=n.length;for(let s=0;s<i;s++){const r=n.charAt(s);switch(r){case"\0":t+="";break;case vd:t+="";break;default:t+=r}}return t}function eu(n){return n+vd+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function is(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ew(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,t){this.comparator=e,this.root=t||we.EMPTY}insert(e,t){return new le(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,we.BLACK,null,null))}remove(e){return new le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,we.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ks(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ks(this.root,e,this.comparator,!1)}getReverseIterator(){return new ks(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ks(this.root,e,this.comparator,!0)}}class ks{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class we{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??we.RED,this.left=s??we.EMPTY,this.right=r??we.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new we(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return we.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return we.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw H(43730,{key:this.key,value:this.value});if(this.right.isRed())throw H(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw H(27949);return e+(this.isRed()?0:1)}}we.EMPTY=null,we.RED=!0,we.BLACK=!1;we.EMPTY=new class{constructor(){this.size=0}get key(){throw H(57766)}get value(){throw H(16141)}get color(){throw H(16727)}get left(){throw H(29726)}get right(){throw H(36894)}copy(e,t,i,s,r){return this}insert(e,t,i){return new we(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.comparator=e,this.data=new le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new nu(this.data.getIterator())}getIteratorFrom(e){return new nu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof ge)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ge(this.comparator);return t.data=e,t}}class nu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.fields=e,e.sort(Pe.comparator)}static empty(){return new Lt([])}unionWith(e){let t=new ge(Pe.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Lt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Un(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class wd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new wd("Invalid base64 string: "+r):r}})(e);return new _e(t)}static fromUint8Array(e){const t=(function(s){let r="";for(let a=0;a<s.length;++a)r+=String.fromCharCode(s[a]);return r})(e);return new _e(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return K(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_e.EMPTY_BYTE_STRING=new _e("");const Iw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zt(n){if(re(!!n,39018),typeof n=="string"){let e=0;const t=Iw.exec(n);if(re(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ce(n.seconds),nanos:ce(n.nanos)}}function ce(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Wt(n){return typeof n=="string"?_e.fromBase64String(n):_e.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d="server_timestamp",bd="__type__",Td="__previous_value__",Ed="__local_write_time__";function Na(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[bd])==null?void 0:i.stringValue)===_d}function Ar(n){const e=n.mapValue.fields[Td];return Na(e)?Ar(e):e}function zi(n){const e=zt(n.mapValue.fields[Ed].timestampValue);return new he(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,t,i,s,r,a,c,u,d,m,_){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=m,this.apiKey=_}}const sr="(default)";class Wi{constructor(e,t){this.projectId=e,this.database=t||sr}static empty(){return new Wi("","")}get isDefaultDatabase(){return this.database===sr}isEqual(e){return e instanceof Wi&&e.projectId===this.projectId&&e.database===this.database}}function Aw(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new V(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wi(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw="__type__",Cw="__max__",Cs={mapValue:{}},Rw="__vector__",Go="value";function Gt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Na(n)?4:xw(n)?9007199254740991:Pw(n)?10:11:H(28295,{value:n})}function ot(n,e){if(n===e)return!0;const t=Gt(n);if(t!==Gt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return zi(n).isEqual(zi(e));case 3:return(function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const a=zt(s.timestampValue),c=zt(r.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,r){return Wt(s.bytesValue).isEqual(Wt(r.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,r){return ce(s.geoPointValue.latitude)===ce(r.geoPointValue.latitude)&&ce(s.geoPointValue.longitude)===ce(r.geoPointValue.longitude)})(n,e);case 2:return(function(s,r){if("integerValue"in s&&"integerValue"in r)return ce(s.integerValue)===ce(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const a=ce(s.doubleValue),c=ce(r.doubleValue);return a===c?Wo(a)===Wo(c):isNaN(a)&&isNaN(c)}return!1})(n,e);case 9:return Un(n.arrayValue.values||[],e.arrayValue.values||[],ot);case 10:case 11:return(function(s,r){const a=s.mapValue.fields||{},c=r.mapValue.fields||{};if(tu(a)!==tu(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!ot(a[u],c[u])))return!1;return!0})(n,e);default:return H(52216,{left:n})}}function Gi(n,e){return(n.values||[]).find((t=>ot(t,e)))!==void 0}function jn(n,e){if(n===e)return 0;const t=Gt(n),i=Gt(e);if(t!==i)return K(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return K(n.booleanValue,e.booleanValue);case 2:return(function(r,a){const c=ce(r.integerValue||r.doubleValue),u=ce(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(n,e);case 3:return iu(n.timestampValue,e.timestampValue);case 4:return iu(zi(n),zi(e));case 5:return zo(n.stringValue,e.stringValue);case 6:return(function(r,a){const c=Wt(r),u=Wt(a);return c.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(r,a){const c=r.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const m=K(c[d],u[d]);if(m!==0)return m}return K(c.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(r,a){const c=K(ce(r.latitude),ce(a.latitude));return c!==0?c:K(ce(r.longitude),ce(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return su(n.arrayValue,e.arrayValue);case 10:return(function(r,a){var I,R,N,$;const c=r.fields||{},u=a.fields||{},d=(I=c[Go])==null?void 0:I.arrayValue,m=(R=u[Go])==null?void 0:R.arrayValue,_=K(((N=d==null?void 0:d.values)==null?void 0:N.length)||0,(($=m==null?void 0:m.values)==null?void 0:$.length)||0);return _!==0?_:su(d,m)})(n.mapValue,e.mapValue);case 11:return(function(r,a){if(r===Cs.mapValue&&a===Cs.mapValue)return 0;if(r===Cs.mapValue)return 1;if(a===Cs.mapValue)return-1;const c=r.fields||{},u=Object.keys(c),d=a.fields||{},m=Object.keys(d);u.sort(),m.sort();for(let _=0;_<u.length&&_<m.length;++_){const I=zo(u[_],m[_]);if(I!==0)return I;const R=jn(c[u[_]],d[m[_]]);if(R!==0)return R}return K(u.length,m.length)})(n.mapValue,e.mapValue);default:throw H(23264,{he:t})}}function iu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return K(n,e);const t=zt(n),i=zt(e),s=K(t.seconds,i.seconds);return s!==0?s:K(t.nanos,i.nanos)}function su(n,e){const t=n.values||[],i=e.values||[];for(let s=0;s<t.length&&s<i.length;++s){const r=jn(t[s],i[s]);if(r)return r}return K(t.length,i.length)}function Bn(n){return Ko(n)}function Ko(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=zt(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Wt(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return U.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",s=!0;for(const r of t.values||[])s?s=!1:i+=",",i+=Ko(r);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let s="{",r=!0;for(const a of i)r?r=!1:s+=",",s+=`${a}:${Ko(t.fields[a])}`;return s+"}"})(n.mapValue):H(61005,{value:n})}function js(n){switch(Gt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ar(n);return e?16+js(e):16;case 5:return 2*n.stringValue.length;case 6:return Wt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((s,r)=>s+js(r)),0)})(n.arrayValue);case 10:case 11:return(function(i){let s=0;return is(i.fields,((r,a)=>{s+=r.length+js(a)})),s})(n.mapValue);default:throw H(13486,{value:n})}}function Qo(n){return!!n&&"integerValue"in n}function Ma(n){return!!n&&"arrayValue"in n}function ru(n){return!!n&&"nullValue"in n}function ou(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function To(n){return!!n&&"mapValue"in n}function Pw(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[kw])==null?void 0:i.stringValue)===Rw}function Oi(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return is(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=Oi(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Oi(n.arrayValue.values[t]);return e}return{...n}}function xw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Cw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.value=e}static empty(){return new Ze({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!To(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Oi(t)}setAll(e){let t=Pe.emptyPath(),i={},s=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,i,s),i={},s=[],t=c.popLast()}a?i[c.lastSegment()]=Oi(a):s.push(c.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());To(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ot(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];To(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){is(t,((s,r)=>e[s]=r));for(const s of i)delete e[s]}clone(){return new Ze(Oi(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t,i,s,r,a,c){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=r,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ie(e,0,B.min(),B.min(),B.min(),Ze.empty(),0)}static newFoundDocument(e,t,i,s){return new Ie(e,1,t,B.min(),i,s,0)}static newNoDocument(e,t){return new Ie(e,2,t,B.min(),B.min(),Ze.empty(),0)}static newUnknownDocument(e,t){return new Ie(e,3,t,B.min(),B.min(),Ze.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ze.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ze.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ie(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class rr{constructor(e,t){this.position=e,this.inclusive=t}}function au(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],a=n.position[s];if(r.field.isKeyField()?i=U.comparator(U.fromName(a.referenceValue),t.key):i=jn(a,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function cu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ot(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class or{constructor(e,t="asc"){this.field=e,this.dir=t}}function Lw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Id{}class me extends Id{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new Nw(e,t,i):t==="array-contains"?new Vw(e,i):t==="in"?new $w(e,i):t==="not-in"?new Fw(e,i):t==="array-contains-any"?new Uw(e,i):new me(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new Mw(e,i):new Ow(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(jn(t,this.value)):t!==null&&Gt(this.value)===Gt(t)&&this.matchesComparison(jn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class at extends Id{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new at(e,t)}matches(e){return Sd(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Sd(n){return n.op==="and"}function Ad(n){return Dw(n)&&Sd(n)}function Dw(n){for(const e of n.filters)if(e instanceof at)return!1;return!0}function Jo(n){if(n instanceof me)return n.field.canonicalString()+n.op.toString()+Bn(n.value);if(Ad(n))return n.filters.map((e=>Jo(e))).join(",");{const e=n.filters.map((t=>Jo(t))).join(",");return`${n.op}(${e})`}}function kd(n,e){return n instanceof me?(function(i,s){return s instanceof me&&i.op===s.op&&i.field.isEqual(s.field)&&ot(i.value,s.value)})(n,e):n instanceof at?(function(i,s){return s instanceof at&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce(((r,a,c)=>r&&kd(a,s.filters[c])),!0):!1})(n,e):void H(19439)}function Cd(n){return n instanceof me?(function(t){return`${t.field.canonicalString()} ${t.op} ${Bn(t.value)}`})(n):n instanceof at?(function(t){return t.op.toString()+" {"+t.getFilters().map(Cd).join(" ,")+"}"})(n):"Filter"}class Nw extends me{constructor(e,t,i){super(e,t,i),this.key=U.fromName(i.referenceValue)}matches(e){const t=U.comparator(e.key,this.key);return this.matchesComparison(t)}}class Mw extends me{constructor(e,t){super(e,"in",t),this.keys=Rd("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Ow extends me{constructor(e,t){super(e,"not-in",t),this.keys=Rd("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Rd(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((i=>U.fromName(i.referenceValue)))}class Vw extends me{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ma(t)&&Gi(t.arrayValue,this.value)}}class $w extends me{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Gi(this.value.arrayValue,t)}}class Fw extends me{constructor(e,t){super(e,"not-in",t)}matches(e){if(Gi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Gi(this.value.arrayValue,t)}}class Uw extends me{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ma(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>Gi(this.value.arrayValue,i)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,t=null,i=[],s=[],r=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=a,this.endAt=c,this.Te=null}}function lu(n,e=null,t=[],i=[],s=null,r=null,a=null){return new jw(n,e,t,i,s,r,a)}function Oa(n){const e=J(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Jo(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(r){return r.field.canonicalString()+r.dir})(i))).join(","),Sr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Bn(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Bn(i))).join(",")),e.Te=t}return e.Te}function Va(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Lw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!kd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!cu(n.startAt,e.startAt)&&cu(n.endAt,e.endAt)}function Yo(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,t=null,i=[],s=[],r=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=a,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Bw(n,e,t,i,s,r,a,c){return new kr(n,e,t,i,s,r,a,c)}function $a(n){return new kr(n)}function uu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Hw(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function qw(n){return n.collectionGroup!==null}function Vi(n){const e=J(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const r of e.explicitOrderBy)e.Ie.push(r),t.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ge(Pe.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(e).forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new or(r,i))})),t.has(Pe.keyField().canonicalString())||e.Ie.push(new or(Pe.keyField(),i))}return e.Ie}function st(n){const e=J(n);return e.Ee||(e.Ee=zw(e,Vi(n))),e.Ee}function zw(n,e){if(n.limitType==="F")return lu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const r=s.dir==="desc"?"asc":"desc";return new or(s.field,r)}));const t=n.endAt?new rr(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new rr(n.startAt.position,n.startAt.inclusive):null;return lu(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Xo(n,e,t){return new kr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Cr(n,e){return Va(st(n),st(e))&&n.limitType===e.limitType}function Pd(n){return`${Oa(st(n))}|lt:${n.limitType}`}function An(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((s=>Cd(s))).join(", ")}]`),Sr(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((s=>Bn(s))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((s=>Bn(s))).join(",")),`Target(${i})`})(st(n))}; limitType=${n.limitType})`}function Rr(n,e){return e.isFoundDocument()&&(function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):U.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)})(n,e)&&(function(i,s){for(const r of Vi(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0})(n,e)&&(function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0})(n,e)&&(function(i,s){return!(i.startAt&&!(function(a,c,u){const d=au(a,c,u);return a.inclusive?d<=0:d<0})(i.startAt,Vi(i),s)||i.endAt&&!(function(a,c,u){const d=au(a,c,u);return a.inclusive?d>=0:d>0})(i.endAt,Vi(i),s))})(n,e)}function Ww(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function xd(n){return(e,t)=>{let i=!1;for(const s of Vi(n)){const r=Gw(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function Gw(n,e,t){const i=n.field.isKeyField()?U.comparator(e.key,t.key):(function(r,a,c){const u=a.data.field(r),d=c.data.field(r);return u!==null&&d!==null?jn(u,d):H(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return H(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){is(this.inner,((t,i)=>{for(const[s,r]of i)e(s,r)}))}isEmpty(){return Ew(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=new le(U.comparator);function Kt(){return Kw}const Ld=new le(U.comparator);function Ci(...n){let e=Ld;for(const t of n)e=e.insert(t.key,t);return e}function Qw(n){let e=Ld;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function un(){return $i()}function Dd(){return $i()}function $i(){return new wn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const Jw=new ge(U.comparator);function Y(...n){let e=Jw;for(const t of n)e=e.add(t);return e}const Yw=new ge(K);function Xw(){return Yw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wo(e)?"-0":e}}function e_(n){return{integerValue:""+n}}/**
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
 */class Pr{constructor(){this._=void 0}}function t_(n,e,t){return n instanceof Zo?(function(s,r){const a={fields:{[bd]:{stringValue:_d},[Ed]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Na(r)&&(r=Ar(r)),r&&(a.fields[Td]=r),{mapValue:a}})(t,e):n instanceof ar?Nd(n,e):n instanceof cr?Md(n,e):(function(s,r){const a=i_(s,r),c=hu(a)+hu(s.Ae);return Qo(a)&&Qo(s.Ae)?e_(c):Zw(s.serializer,c)})(n,e)}function n_(n,e,t){return n instanceof ar?Nd(n,e):n instanceof cr?Md(n,e):t}function i_(n,e){return n instanceof ea?(function(i){return Qo(i)||(function(r){return!!r&&"doubleValue"in r})(i)})(e)?e:{integerValue:0}:null}class Zo extends Pr{}class ar extends Pr{constructor(e){super(),this.elements=e}}function Nd(n,e){const t=Od(e);for(const i of n.elements)t.some((s=>ot(s,i)))||t.push(i);return{arrayValue:{values:t}}}class cr extends Pr{constructor(e){super(),this.elements=e}}function Md(n,e){let t=Od(e);for(const i of n.elements)t=t.filter((s=>!ot(s,i)));return{arrayValue:{values:t}}}class ea extends Pr{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function hu(n){return ce(n.integerValue||n.doubleValue)}function Od(n){return Ma(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function s_(n,e){return n.field.isEqual(e.field)&&(function(i,s){return i instanceof ar&&s instanceof ar||i instanceof cr&&s instanceof cr?Un(i.elements,s.elements,ot):i instanceof ea&&s instanceof ea?ot(i.Ae,s.Ae):i instanceof Zo&&s instanceof Zo})(n.transform,e.transform)}class hn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new hn}static exists(e){return new hn(void 0,e)}static updateTime(e){return new hn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Fa{}function Vd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new o_(n.key,hn.none()):new Ua(n.key,n.data,hn.none());{const t=n.data,i=Ze.empty();let s=new ge(Pe.comparator);for(let r of e.fields)if(!s.has(r)){let a=t.field(r);a===null&&r.length>1&&(r=r.popLast(),a=t.field(r)),a===null?i.delete(r):i.set(r,a),s=s.add(r)}return new xr(n.key,i,new Lt(s.toArray()),hn.none())}}function r_(n,e,t){n instanceof Ua?(function(s,r,a){const c=s.value.clone(),u=fu(s.fieldTransforms,r,a.transformResults);c.setAll(u),r.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof xr?(function(s,r,a){if(!Bs(s.precondition,r))return void r.convertToUnknownDocument(a.version);const c=fu(s.fieldTransforms,r,a.transformResults),u=r.data;u.setAll($d(s)),u.setAll(c),r.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):(function(s,r,a){r.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Fi(n,e,t,i){return n instanceof Ua?(function(r,a,c,u){if(!Bs(r.precondition,a))return c;const d=r.value.clone(),m=pu(r.fieldTransforms,u,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,e,t,i):n instanceof xr?(function(r,a,c,u){if(!Bs(r.precondition,a))return c;const d=pu(r.fieldTransforms,u,a),m=a.data;return m.setAll($d(r)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((_=>_.field)))})(n,e,t,i):(function(r,a,c){return Bs(r.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function du(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Un(i,s,((r,a)=>s_(r,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ua extends Fa{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class xr extends Fa{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function $d(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function fu(n,e,t){const i=new Map;re(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const r=n[s],a=r.transform,c=e.data.field(r.field);i.set(r.field,n_(a,c,t[s]))}return i}function pu(n,e,t){const i=new Map;for(const s of n){const r=s.transform,a=t.data.field(s.field);i.set(s.field,t_(r,a,e))}return i}class o_ extends Fa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&r_(r,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Fi(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Fi(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Dd();return this.mutations.forEach((s=>{const r=e.get(s.key),a=r.overlayedDocument;let c=this.applyToLocalView(a,r.mutatedFields);c=t.has(s.key)?null:c;const u=Vd(a,c);u!==null&&i.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(B.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Y())}isEqual(e){return this.batchId===e.batchId&&Un(this.mutations,e.mutations,((t,i)=>du(t,i)))&&Un(this.baseMutations,e.baseMutations,((t,i)=>du(t,i)))}}/**
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
 */class c_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class l_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue,Q;function Fd(n){if(n===void 0)return gt("GRPC error has no .code"),L.UNKNOWN;switch(n){case ue.OK:return L.OK;case ue.CANCELLED:return L.CANCELLED;case ue.UNKNOWN:return L.UNKNOWN;case ue.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case ue.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case ue.INTERNAL:return L.INTERNAL;case ue.UNAVAILABLE:return L.UNAVAILABLE;case ue.UNAUTHENTICATED:return L.UNAUTHENTICATED;case ue.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case ue.NOT_FOUND:return L.NOT_FOUND;case ue.ALREADY_EXISTS:return L.ALREADY_EXISTS;case ue.PERMISSION_DENIED:return L.PERMISSION_DENIED;case ue.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case ue.ABORTED:return L.ABORTED;case ue.OUT_OF_RANGE:return L.OUT_OF_RANGE;case ue.UNIMPLEMENTED:return L.UNIMPLEMENTED;case ue.DATA_LOSS:return L.DATA_LOSS;default:return H(39323,{code:n})}}(Q=ue||(ue={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function u_(){return new TextEncoder}/**
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
 */const h_=new Vt([4294967295,4294967295],0);function mu(n){const e=u_().encode(n),t=new ld;return t.update(e),new Uint8Array(t.digest())}function gu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Vt([t,i],0),new Vt([s,r],0)]}class ja{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Ri(`Invalid padding: ${t}`);if(i<0)throw new Ri(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ri(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Ri(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Vt.fromNumber(this.ge)}ye(e,t,i){let s=e.add(t.multiply(Vt.fromNumber(i)));return s.compare(h_)===1&&(s=new Vt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=mu(e),[i,s]=gu(t);for(let r=0;r<this.hashCount;r++){const a=this.ye(i,s,r);if(!this.we(a))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),a=new ja(r,s,t);return i.forEach((c=>a.insert(c))),a}insert(e){if(this.ge===0)return;const t=mu(e),[i,s]=gu(t);for(let r=0;r<this.hashCount;r++){const a=this.ye(i,s,r);this.be(a)}}be(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Ri extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,ss.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Lr(B.min(),s,new le(K),Kt(),Y())}}class ss{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new ss(i,t,Y(),Y(),Y())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,t,i,s){this.Se=e,this.removedTargetIds=t,this.key=i,this.De=s}}class Ud{constructor(e,t){this.targetId=e,this.Ce=t}}class jd{constructor(e,t,i=_e.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class yu{constructor(){this.ve=0,this.Fe=vu(),this.Me=_e.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Y(),t=Y(),i=Y();return this.Fe.forEach(((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:H(38017,{changeType:r})}})),new ss(this.Me,this.xe,e,t,i)}Ke(){this.Oe=!1,this.Fe=vu()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,re(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class d_{constructor(e){this.Ge=e,this.ze=new Map,this.je=Kt(),this.He=Rs(),this.Je=Rs(),this.Ze=new le(K)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.We(),i.Ne||i.Ke(),i.Le(e.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.Qe(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:H(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,i=e.Ce.count,s=this.ot(t);if(s){const r=s.target;if(Yo(r))if(i===0){const a=new U(r.path);this.et(t,a,Ie.newNoDocument(a,B.min()))}else re(i===1,20013,{expectedCount:i});else{const a=this._t(t);if(a!==i){const c=this.ut(e),u=c?this.ct(c,e,a):1;if(u!==0){this.it(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=t;let a,c;try{a=Wt(i).toUint8Array()}catch(u){if(u instanceof wd)return vn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new ja(a,s,r)}catch(u){return vn(u instanceof Ri?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let s=0;return i.forEach((r=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${r.path.canonicalString()}`;e.mightContain(c)||(this.et(t,r,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((r,a)=>{const c=this.ot(a);if(c){if(r.current&&Yo(c.target)){const u=new U(c.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,Ie.newNoDocument(u,e))}r.Be&&(t.set(a,r.ke()),r.Ke())}}));let i=Y();this.Je.forEach(((r,a)=>{let c=!0;a.forEachWhile((u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(i=i.add(r))})),this.je.forEach(((r,a)=>a.setReadTime(e)));const s=new Lr(e,t,this.Ze,this.je,i);return this.je=Kt(),this.He=Rs(),this.Je=Rs(),this.Ze=new le(K),s}Ye(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,i),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new yu,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new ge(K),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new ge(K),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||D("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new yu),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Rs(){return new le(U.comparator)}function vu(){return new le(U.comparator)}const f_={asc:"ASCENDING",desc:"DESCENDING"},p_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},m_={and:"AND",or:"OR"};class g_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ta(n,e){return n.useProto3Json||Sr(e)?e:{value:e}}function y_(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function v_(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Dn(n){return re(!!n,49232),B.fromTimestamp((function(t){const i=zt(t);return new he(i.seconds,i.nanos)})(n))}function w_(n,e){return na(n,e).canonicalString()}function na(n,e){const t=(function(s){return new se(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Bd(n){const e=se.fromString(n);return re(Gd(e),10190,{key:e.toString()}),e}function Eo(n,e){const t=Bd(e);if(t.get(1)!==n.databaseId.projectId)throw new V(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new V(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new U(qd(t))}function Hd(n,e){return w_(n.databaseId,e)}function __(n){const e=Bd(n);return e.length===4?se.emptyPath():qd(e)}function wu(n){return new se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function qd(n){return re(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function b_(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:H(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=(function(d,m){return d.useProto3Json?(re(m===void 0||typeof m=="string",58123),_e.fromBase64String(m||"")):(re(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),_e.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(d){const m=d.code===void 0?L.UNKNOWN:Fd(d.code);return new V(m,d.message||"")})(a);t=new jd(i,s,r,c||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Eo(n,i.document.name),r=Dn(i.document.updateTime),a=i.document.createTime?Dn(i.document.createTime):B.min(),c=new Ze({mapValue:{fields:i.document.fields}}),u=Ie.newFoundDocument(s,r,a,c),d=i.targetIds||[],m=i.removedTargetIds||[];t=new Hs(d,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Eo(n,i.document),r=i.readTime?Dn(i.readTime):B.min(),a=Ie.newNoDocument(s,r),c=i.removedTargetIds||[];t=new Hs([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Eo(n,i.document),r=i.removedTargetIds||[];t=new Hs([],r,s,null)}else{if(!("filter"in e))return H(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,a=new l_(s,r),c=i.targetId;t=new Ud(c,a)}}return t}function T_(n,e){return{documents:[Hd(n,e.path)]}}function E_(n,e){const t={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Hd(n,s);const r=(function(d){if(d.length!==0)return Wd(at.create(d,"and"))})(e.filters);r&&(t.structuredQuery.where=r);const a=(function(d){if(d.length!==0)return d.map((m=>(function(I){return{field:kn(I.field),direction:A_(I.dir)}})(m)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=ta(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{ft:t,parent:s}}function I_(n){let e=__(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){re(i===1,65062);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let r=[];t.where&&(r=(function(_){const I=zd(_);return I instanceof at&&Ad(I)?I.getFilters():[I]})(t.where));let a=[];t.orderBy&&(a=(function(_){return _.map((I=>(function(N){return new or(Cn(N.field),(function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(N.direction))})(I)))})(t.orderBy));let c=null;t.limit&&(c=(function(_){let I;return I=typeof _=="object"?_.value:_,Sr(I)?null:I})(t.limit));let u=null;t.startAt&&(u=(function(_){const I=!!_.before,R=_.values||[];return new rr(R,I)})(t.startAt));let d=null;return t.endAt&&(d=(function(_){const I=!_.before,R=_.values||[];return new rr(R,I)})(t.endAt)),Bw(e,s,a,r,c,"F",u,d)}function S_(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function zd(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Cn(t.unaryFilter.field);return me.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=Cn(t.unaryFilter.field);return me.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Cn(t.unaryFilter.field);return me.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Cn(t.unaryFilter.field);return me.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return H(61313);default:return H(60726)}})(n):n.fieldFilter!==void 0?(function(t){return me.create(Cn(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return H(58110);default:return H(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return at.create(t.compositeFilter.filters.map((i=>zd(i))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return H(1026)}})(t.compositeFilter.op))})(n):H(30097,{filter:n})}function A_(n){return f_[n]}function k_(n){return p_[n]}function C_(n){return m_[n]}function kn(n){return{fieldPath:n.canonicalString()}}function Cn(n){return Pe.fromServerFormat(n.fieldPath)}function Wd(n){return n instanceof me?(function(t){if(t.op==="=="){if(ou(t.value))return{unaryFilter:{field:kn(t.field),op:"IS_NAN"}};if(ru(t.value))return{unaryFilter:{field:kn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ou(t.value))return{unaryFilter:{field:kn(t.field),op:"IS_NOT_NAN"}};if(ru(t.value))return{unaryFilter:{field:kn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kn(t.field),op:k_(t.op),value:t.value}}})(n):n instanceof at?(function(t){const i=t.getFilters().map((s=>Wd(s)));return i.length===1?i[0]:{compositeFilter:{op:C_(t.op),filters:i}}})(n):H(54877,{filter:n})}function Gd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,t,i,s,r=B.min(),a=B.min(),c=_e.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Dt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Dt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Dt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Dt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e){this.yt=e}}function P_(n){const e=I_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Xo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(){this.Sn=new L_}addToCollectionParentIndex(e,t){return this.Sn.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(qt.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(qt.min())}updateCollectionGroup(e,t,i){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class L_{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new ge(se.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new ge(se.comparator)).toArray()}}/**
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
 */const _u={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Kd=41943040;class Me{static withCacheSize(e){return new Me(e,Me.DEFAULT_COLLECTION_PERCENTILE,Me.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Me.DEFAULT_COLLECTION_PERCENTILE=10,Me.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Me.DEFAULT=new Me(Kd,Me.DEFAULT_COLLECTION_PERCENTILE,Me.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Me.DISABLED=new Me(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Hn(0)}static ar(){return new Hn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu="LruGarbageCollector",D_=1048576;function Tu([n,e],[t,i]){const s=K(n,t);return s===0?K(e,i):s}class N_{constructor(e){this.Pr=e,this.buffer=new ge(Tu),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Tu(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class M_{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){D(bu,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ti(t)?D(bu,"Ignoring IndexedDB error during garbage collection: ",t):await Er(t)}await this.Ar(3e5)}))}}class O_{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return C.resolve(Ir.ce);const i=new N_(t);return this.Vr.forEachTarget(e,(s=>i.Er(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>i.Er(s))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(_u)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),_u):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let i,s,r,a,c,u,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((_=>(_>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${_}`),s=this.params.maximumSequenceNumbersToCollect):s=_,a=Date.now(),this.nthSequenceNumber(e,s)))).next((_=>(i=_,c=Date.now(),this.removeTargets(e,i,t)))).next((_=>(r=_,u=Date.now(),this.removeOrphanedDocuments(e,i)))).next((_=>(d=Date.now(),Sn()<=z.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${r} targets in `+(u-c)+`ms
	Removed ${_} documents in `+(d-u)+`ms
Total Duration: ${d-m}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:_}))))}}function V_(n,e){return new O_(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(){this.changes=new wn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ie.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?C.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class F_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(i=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(i!==null&&Fi(i.mutation,s,Lt.empty(),he.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,Y()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=Y()){const s=un();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,i).next((r=>{let a=Ci();return r.forEach(((c,u)=>{a=a.insert(c,u.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const i=un();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,Y())))}populateOverlays(e,t,i){const s=[];return i.forEach((r=>{t.has(r)||s.push(r)})),this.documentOverlayCache.getOverlays(e,s).next((r=>{r.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,i,s){let r=Kt();const a=$i(),c=(function(){return $i()})();return t.forEach(((u,d)=>{const m=i.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof xr)?r=r.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),Fi(m.mutation,d,m.mutation.getFieldMask(),he.now())):a.set(d.key,Lt.empty())})),this.recalculateAndSaveOverlays(e,r).next((u=>(u.forEach(((d,m)=>a.set(d,m))),t.forEach(((d,m)=>c.set(d,new F_(m,a.get(d)??null)))),c)))}recalculateAndSaveOverlays(e,t){const i=$i();let s=new le(((a,c)=>a-c)),r=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((u=>{const d=t.get(u);if(d===null)return;let m=i.get(u)||Lt.empty();m=c.applyToLocalView(d,m),i.set(u,m);const _=(s.get(c.batchId)||Y()).add(u);s=s.insert(c.batchId,_)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,m=u.value,_=Dd();m.forEach((I=>{if(!r.has(I)){const R=Vd(t.get(I),i.get(I));R!==null&&_.set(I,R),r=r.add(I)}})),a.push(this.documentOverlayCache.saveOverlays(e,d,_))}return C.waitFor(a)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,s){return Hw(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):qw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,s):this.getDocumentsMatchingCollectionQuery(e,t,i,s)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next((r=>{const a=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-r.size):C.resolve(un());let c=qi,u=r;return a.next((d=>C.forEach(d,((m,_)=>(c<_.largestBatchId&&(c=_.largestBatchId),r.get(m)?C.resolve():this.remoteDocumentCache.getEntry(e,m).next((I=>{u=u.insert(m,I)}))))).next((()=>this.populateOverlays(e,d,r))).next((()=>this.computeViews(e,u,d,Y()))).next((m=>({batchId:c,changes:Qw(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next((i=>{let s=Ci();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,s){const r=t.collectionGroup;let a=Ci();return this.indexManager.getCollectionParents(e,r).next((c=>C.forEach(c,(u=>{const d=(function(_,I){return new kr(I,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)})(t,u.child(r));return this.getDocumentsMatchingCollectionQuery(e,d,i,s).next((m=>{m.forEach(((_,I)=>{a=a.insert(_,I)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((a=>(r=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,r,s)))).next((a=>{r.forEach(((u,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Ie.newInvalidDocument(m)))}));let c=Ci();return a.forEach(((u,d)=>{const m=r.get(u);m!==void 0&&Fi(m.mutation,d,Lt.empty(),he.now()),Rr(t,d)&&(c=c.insert(u,d))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return C.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Dn(s.createTime)}})(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(s){return{name:s.name,query:P_(s.bundledQuery),readTime:Dn(s.readTime)}})(t)),C.resolve()}}/**
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
 */class B_{constructor(){this.overlays=new le(U.comparator),this.Lr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const i=un();return C.forEach(t,(s=>this.getOverlay(e,s).next((r=>{r!==null&&i.set(s,r)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((s,r)=>{this.bt(e,t,r)})),C.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.Lr.get(i);return s!==void 0&&(s.forEach((r=>this.overlays=this.overlays.remove(r))),this.Lr.delete(i)),C.resolve()}getOverlaysForCollection(e,t,i){const s=un(),r=t.length+1,a=new U(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===r&&u.largestBatchId>i&&s.set(u.getKey(),u)}return C.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let r=new le(((d,m)=>d-m));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>i){let m=r.get(d.largestBatchId);m===null&&(m=un(),r=r.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=un(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((d,m)=>c.set(d,m))),!(c.size()>=s)););return C.resolve(c)}bt(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(i.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(i.key,new c_(t,i));let r=this.Lr.get(t);r===void 0&&(r=Y(),this.Lr.set(t,r)),this.Lr.set(t,r.add(i.key))}}/**
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
 */class H_{constructor(){this.sessionToken=_e.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(){this.kr=new ge(ve.Kr),this.qr=new ge(ve.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const i=new ve(e,t);this.kr=this.kr.add(i),this.qr=this.qr.add(i)}$r(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new ve(e,t))}Qr(e,t){e.forEach((i=>this.removeReference(i,t)))}Gr(e){const t=new U(new se([])),i=new ve(t,e),s=new ve(t,e+1),r=[];return this.qr.forEachInRange([i,s],(a=>{this.Wr(a),r.push(a.key)})),r}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new U(new se([])),i=new ve(t,e),s=new ve(t,e+1);let r=Y();return this.qr.forEachInRange([i,s],(a=>{r=r.add(a.key)})),r}containsKey(e){const t=new ve(e,0),i=this.kr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class ve{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return U.comparator(e.key,t.key)||K(e.Hr,t.Hr)}static Ur(e,t){return K(e.Hr,t.Hr)||U.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new ge(ve.Kr)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const r=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new a_(r,t,i,s);this.mutationQueue.push(a);for(const c of s)this.Jr=this.Jr.add(new ve(c.key,r)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return C.resolve(a)}lookupMutationBatch(e,t){return C.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.Xr(i),r=s<0?0:s;return C.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?_w:this.Yn-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new ve(t,0),s=new ve(t,Number.POSITIVE_INFINITY),r=[];return this.Jr.forEachInRange([i,s],(a=>{const c=this.Zr(a.Hr);r.push(c)})),C.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new ge(K);return t.forEach((s=>{const r=new ve(s,0),a=new ve(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([r,a],(c=>{i=i.add(c.Hr)}))})),C.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;U.isDocumentKey(r)||(r=r.child(""));const a=new ve(new U(r),0);let c=new ge(K);return this.Jr.forEachWhile((u=>{const d=u.key.path;return!!i.isPrefixOf(d)&&(d.length===s&&(c=c.add(u.Hr)),!0)}),a),C.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((i=>{const s=this.Zr(i);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){re(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Jr;return C.forEach(t.mutations,(s=>{const r=new ve(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Jr=i}))}nr(e){}containsKey(e,t){const i=new ve(t,0),s=this.Jr.firstAfterOrEqual(i);return C.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e){this.ti=e,this.docs=(function(){return new le(U.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),r=s?s.size:0,a=this.ti(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:a}),this.size+=a-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return C.resolve(i?i.document.mutableCopy():Ie.newInvalidDocument(t))}getEntries(e,t){let i=Kt();return t.forEach((s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Ie.newInvalidDocument(s))})),C.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let r=Kt();const a=t.path,c=new U(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:m}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||gw(mw(m),i)<=0||(s.has(m.key)||Rr(t,m))&&(r=r.insert(m.key,m.mutableCopy()))}return C.resolve(r)}getAllFromCollectionGroup(e,t,i,s){H(9500)}ni(e,t){return C.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new W_(this)}getSize(e){return C.resolve(this.size)}}class W_ extends $_{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(i)})),C.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e){this.persistence=e,this.ri=new wn((t=>Oa(t)),Va),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.ii=0,this.si=new Ba,this.targetCount=0,this.oi=Hn._r()}forEachTarget(e,t){return this.ri.forEach(((i,s)=>t(s))),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.ii&&(this.ii=t),C.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Hn(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.lr(t),C.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.ri.forEach(((a,c)=>{c.sequenceNumber<=t&&i.get(c.targetId)===null&&(this.ri.delete(a),r.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),C.waitFor(r).next((()=>s))}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const i=this.ri.get(t)||null;return C.resolve(i)}addMatchingKeys(e,t,i){return this.si.$r(t,i),C.resolve()}removeMatchingKeys(e,t,i){this.si.Qr(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach((a=>{r.push(s.markPotentiallyOrphaned(e,a))})),C.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const i=this.si.jr(t);return C.resolve(i)}containsKey(e,t){return C.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,t){this._i={},this.overlays={},this.ai=new Ir(0),this.ui=!1,this.ui=!0,this.ci=new H_,this.referenceDelegate=e(this),this.li=new G_(this),this.indexManager=new x_,this.remoteDocumentCache=(function(s){return new z_(s)})((i=>this.referenceDelegate.hi(i))),this.serializer=new R_(t),this.Pi=new j_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new B_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this._i[e.toKey()];return i||(i=new q_(t,this.referenceDelegate),this._i[e.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,i){D("MemoryPersistence","Starting transaction:",e);const s=new K_(this.ai.next());return this.referenceDelegate.Ti(),i(s).next((r=>this.referenceDelegate.Ii(s).next((()=>r)))).toPromise().then((r=>(s.raiseOnCommittedEvent(),r)))}Ei(e,t){return C.or(Object.values(this._i).map((i=>()=>i.containsKey(e,t))))}}class K_ extends vw{constructor(e){super(),this.currentSequenceNumber=e}}class Ha{constructor(e){this.persistence=e,this.Ri=new Ba,this.Ai=null}static Vi(e){return new Ha(e)}get di(){if(this.Ai)return this.Ai;throw H(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.di.delete(i.toString()),C.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.di.add(i.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),C.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((s=>this.di.add(s.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((r=>this.di.add(r.toString())))})).next((()=>i.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.di,(i=>{const s=U.fromPath(i);return this.mi(e,s).next((r=>{r||t.removeEntry(s,B.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((i=>{i?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return C.or([()=>C.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class lr{constructor(e,t){this.persistence=e,this.fi=new wn((i=>bw(i.path)),((i,s)=>i.isEqual(s))),this.garbageCollector=V_(this,t)}static Vi(e,t){return new lr(e,t)}Ti(){}Ii(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((s=>i+s))))}pr(e){let t=0;return this.mr(e,(i=>{t++})).next((()=>t))}mr(e,t){return C.forEach(this.fi,((i,s)=>this.wr(e,i,s).next((r=>r?C.resolve():t(s)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.ni(e,(a=>this.wr(e,a,t).next((c=>{c||(i++,r.removeEntry(a,B.min()))})))).next((()=>r.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),C.resolve()}removeReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),C.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=js(e.data.value)),t}wr(e,t,i){return C.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return C.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.Ts=i,this.Is=s}static Es(e,t){let i=Y(),s=Y();for(const r of t.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new qa(e,t.fromCache,i,s)}}/**
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
 */class Q_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Bp()?8:ww(Se())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,s){const r={result:null};return this.gs(e,t).next((a=>{r.result=a})).next((()=>{if(!r.result)return this.ps(e,t,s,i).next((a=>{r.result=a}))})).next((()=>{if(r.result)return;const a=new Q_;return this.ys(e,t,a).next((c=>{if(r.result=c,this.As)return this.ws(e,t,a,c.size)}))})).next((()=>r.result))}ws(e,t,i,s){return i.documentReadCount<this.Vs?(Sn()<=z.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",An(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),C.resolve()):(Sn()<=z.DEBUG&&D("QueryEngine","Query:",An(t),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.ds*s?(Sn()<=z.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",An(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,st(t))):C.resolve())}gs(e,t){if(uu(t))return C.resolve(null);let i=st(t);return this.indexManager.getIndexType(e,i).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Xo(t,null,"F"),i=st(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((r=>{const a=Y(...r);return this.fs.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,i).next((u=>{const d=this.bs(t,c);return this.Ss(t,d,a,u.readTime)?this.gs(e,Xo(t,null,"F")):this.Ds(e,d,t,u)}))))})))))}ps(e,t,i,s){return uu(t)||s.isEqual(B.min())?C.resolve(null):this.fs.getDocuments(e,i).next((r=>{const a=this.bs(t,r);return this.Ss(t,a,i,s)?C.resolve(null):(Sn()<=z.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),An(t)),this.Ds(e,a,t,pw(s,qi)).next((c=>c)))}))}bs(e,t){let i=new ge(xd(e));return t.forEach(((s,r)=>{Rr(e,r)&&(i=i.add(r))})),i}Ss(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ys(e,t,i){return Sn()<=z.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",An(t)),this.fs.getDocumentsMatchingQuery(e,t,qt.min(),i)}Ds(e,t,i,s){return this.fs.getDocumentsMatchingQuery(e,i,s).next((r=>(t.forEach((a=>{r=r.insert(a.key,a)})),r)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za="LocalStore",Y_=3e8;class X_{constructor(e,t,i,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new le(K),this.Fs=new wn((r=>Oa(r)),Va),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(i)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new U_(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function Z_(n,e,t,i){return new X_(n,e,t,i)}async function Jd(n,e){const t=J(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next((r=>(s=r,t.Os(e),t.mutationQueue.getAllMutationBatches(i)))).next((r=>{const a=[],c=[];let u=Y();for(const d of s){a.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}for(const d of r){c.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(i,u).next((d=>({Ns:d,removedBatchIds:a,addedBatchIds:c})))}))}))}function Yd(n){const e=J(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function eb(n,e){const t=J(n),i=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const c=[];e.targetChanges.forEach(((m,_)=>{const I=s.get(_);if(!I)return;c.push(t.li.removeMatchingKeys(r,m.removedDocuments,_).next((()=>t.li.addMatchingKeys(r,m.addedDocuments,_))));let R=I.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(_)!==null?R=R.withResumeToken(_e.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):m.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(m.resumeToken,i)),s=s.insert(_,R),(function($,M,W){return $.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=Y_?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0})(I,R,m)&&c.push(t.li.updateTargetData(r,R))}));let u=Kt(),d=Y();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(r,m))})),c.push(tb(r,a,e.documentUpdates).next((m=>{u=m.Bs,d=m.Ls}))),!i.isEqual(B.min())){const m=t.li.getLastRemoteSnapshotVersion(r).next((_=>t.li.setTargetsMetadata(r,r.currentSequenceNumber,i)));c.push(m)}return C.waitFor(c).next((()=>a.apply(r))).next((()=>t.localDocuments.getLocalViewOfDocuments(r,u,d))).next((()=>u))})).then((r=>(t.vs=s,r)))}function tb(n,e,t){let i=Y(),s=Y();return t.forEach((r=>i=i.add(r))),e.getEntries(n,i).next((r=>{let a=Kt();return t.forEach(((c,u)=>{const d=r.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(B.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):D(za,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)})),{Bs:a,Ls:s}}))}function nb(n,e){const t=J(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let s;return t.li.getTargetData(i,e).next((r=>r?(s=r,C.resolve(s)):t.li.allocateTargetId(i).next((a=>(s=new Dt(e,a,"TargetPurposeListen",i.currentSequenceNumber),t.li.addTargetData(i,s).next((()=>s)))))))})).then((i=>{const s=t.vs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(i.targetId,i),t.Fs.set(e,i.targetId)),i}))}async function ia(n,e,t){const i=J(n),s=i.vs.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,(a=>i.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!ti(a))throw a;D(za,`Failed to update sequence numbers for target ${e}: ${a}`)}i.vs=i.vs.remove(e),i.Fs.delete(s.target)}function Eu(n,e,t){const i=J(n);let s=B.min(),r=Y();return i.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,d,m){const _=J(u),I=_.Fs.get(m);return I!==void 0?C.resolve(_.vs.get(I)):_.li.getTargetData(d,m)})(i,a,st(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(a,c.targetId).next((u=>{r=u}))})).next((()=>i.Cs.getDocumentsMatchingQuery(a,e,t?s:B.min(),t?r:Y()))).next((c=>(ib(i,Ww(e),c),{documents:c,ks:r})))))}function ib(n,e,t){let i=n.Ms.get(e)||B.min();t.forEach(((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)})),n.Ms.set(e,i)}class Iu{constructor(){this.activeTargetIds=Xw()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sb{constructor(){this.vo=new Iu,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,i){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Iu,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su="ConnectivityMonitor";class Au{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){D(Su,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){D(Su,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ps=null;function sa(){return Ps===null?Ps=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ps++,"0x"+Ps.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io="RestConnection",ob={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class ab{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${i}/databases/${s}`,this.$o=this.databaseId.database===sr?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(e,t,i,s,r){const a=sa(),c=this.Qo(e,t.toUriEncodedString());D(Io,`Sending RPC '${e}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,r);const{host:d}=new URL(c),m=Gn(d);return this.zo(e,c,u,i,m).then((_=>(D(Io,`Received RPC '${e}' ${a}: `,_),_)),(_=>{throw vn(Io,`RPC '${e}' ${a} failed with error: `,_,"url: ",c,"request:",i),_}))}jo(e,t,i,s,r,a){return this.Wo(e,t,i,s,r)}Go(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ei})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,r)=>e[r]=s)),i&&i.headers.forEach(((s,r)=>e[r]=s))}Qo(e,t){const i=ob[e];let s=`${this.qo}/v1/${t}:${i}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te="WebChannelConnection",bi=(n,e,t)=>{n.listen(e,(i=>{try{t(i)}catch(s){setTimeout((()=>{throw s}),0)}}))};class Nn extends ab{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Nn.c_){const e=fd();bi(e,dd.STAT_EVENT,(t=>{t.stat===qo.PROXY?D(Te,"STAT_EVENT: detected buffering proxy"):t.stat===qo.NOPROXY&&D(Te,"STAT_EVENT: detected no buffering proxy")})),Nn.c_=!0}}zo(e,t,i,s,r){const a=sa();return new Promise(((c,u)=>{const d=new ud;d.setWithCredentials(!0),d.listenOnce(hd.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Fs.NO_ERROR:const _=d.getResponseJson();D(Te,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(_)),c(_);break;case Fs.TIMEOUT:D(Te,`RPC '${e}' ${a} timed out`),u(new V(L.DEADLINE_EXCEEDED,"Request time out"));break;case Fs.HTTP_ERROR:const I=d.getStatus();if(D(Te,`RPC '${e}' ${a} failed with status:`,I,"response text:",d.getResponseText()),I>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const N=R==null?void 0:R.error;if(N&&N.status&&N.message){const $=(function(W){const Z=W.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(Z)>=0?Z:L.UNKNOWN})(N.status);u(new V($,N.message))}else u(new V(L.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new V(L.UNAVAILABLE,"Connection failed."));break;default:H(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{D(Te,`RPC '${e}' ${a} completed.`)}}));const m=JSON.stringify(s);D(Te,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",m,i,15)}))}T_(e,t,i){const s=sa(),r=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,i),c.encodeInitMessageHeaders=!0;const d=r.join("");D(Te,`Creating RPC '${e}' stream ${s}: ${d}`,c);const m=a.createWebChannel(d,c);this.I_(m);let _=!1,I=!1;const R=new cb({Ho:N=>{I?D(Te,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(_||(D(Te,`Opening RPC '${e}' stream ${s} transport.`),m.open(),_=!0),D(Te,`RPC '${e}' stream ${s} sending:`,N),m.send(N))},Jo:()=>m.close()});return bi(m,ki.EventType.OPEN,(()=>{I||(D(Te,`RPC '${e}' stream ${s} transport opened.`),R.i_())})),bi(m,ki.EventType.CLOSE,(()=>{I||(I=!0,D(Te,`RPC '${e}' stream ${s} transport closed`),R.o_(),this.E_(m))})),bi(m,ki.EventType.ERROR,(N=>{I||(I=!0,vn(Te,`RPC '${e}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),R.o_(new V(L.UNAVAILABLE,"The operation could not be completed")))})),bi(m,ki.EventType.MESSAGE,(N=>{var $;if(!I){const M=N.data[0];re(!!M,16349);const W=M,Z=(W==null?void 0:W.error)||(($=W[0])==null?void 0:$.error);if(Z){D(Te,`RPC '${e}' stream ${s} received error:`,Z);const j=Z.status;let G=(function(b){const y=ue[b];if(y!==void 0)return Fd(y)})(j),ee=Z.message;j==="NOT_FOUND"&&ee.includes("database")&&ee.includes("does not exist")&&ee.includes(this.databaseId.database)&&vn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),G===void 0&&(G=L.INTERNAL,ee="Unknown error status: "+j+" with message "+Z.message),I=!0,R.o_(new V(G,ee)),m.close()}else D(Te,`RPC '${e}' stream ${s} received:`,M),R.__(M)}})),Nn.u_(),setTimeout((()=>{R.s_()}),0),R}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,i){super.Go(e,t,i),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return pd()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(n){return new Nn(n)}function So(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(n){return new g_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nn.c_=!1;class Zd{constructor(e,t,i=1e3,s=1.5,r=6e4){this.Ci=e,this.timerId=t,this.R_=i,this.A_=s,this.V_=r,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-i);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku="PersistentStream";class ub{constructor(e,t,i,s,r,a,c,u){this.Ci=e,this.b_=i,this.S_=s,this.connection=r,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Zd(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===L.RESOURCE_EXHAUSTED?(gt(t.toString()),gt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,s])=>{this.D_===t&&this.G_(i,s)}),(i=>{e((()=>{const s=new V(L.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(s)}))}))}G_(e,t){const i=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.Yo((()=>{i((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{i((()=>this.z_(s)))})),this.stream.onMessage((s=>{i((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return D(ku,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(D(ku,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class hb extends ub{constructor(e,t,i,s,r,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,a),this.serializer=r}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=b_(this.serializer,e),i=(function(r){if(!("targetChange"in r))return B.min();const a=r.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?Dn(a.readTime):B.min()})(e);return this.listener.J_(t,i)}Z_(e){const t={};t.database=wu(this.serializer),t.addTarget=(function(r,a){let c;const u=a.target;if(c=Yo(u)?{documents:T_(r,u)}:{query:E_(r,u).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=v_(r,a.resumeToken);const d=ta(r,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(B.min())>0){c.readTime=y_(r,a.snapshotVersion.toTimestamp());const d=ta(r,a.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,e);const i=S_(this.serializer,e);i&&(t.labels=i),this.K_(t)}X_(e){const t={};t.database=wu(this.serializer),t.removeTarget=e,this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{}class fb extends db{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new V(L.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,a])=>this.connection.Wo(e,na(t,i),s,r,a))).catch((r=>{throw r.name==="FirebaseError"?(r.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new V(L.UNKNOWN,r.toString())}))}jo(e,t,i,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.jo(e,na(t,i),s,a,c,r))).catch((a=>{throw a.name==="FirebaseError"?(a.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(L.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function pb(n,e,t,i){return new fb(n,e,t,i)}class mb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(gt(t),this.aa=!1):D("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn="RemoteStore";class gb{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=r,this.Aa.Mo((a=>{i.enqueueAndForget((async()=>{os(this)&&(D(qn,"Restarting streams for network reachability change."),await(async function(u){const d=J(u);d.Ea.add(4),await rs(d),d.Va.set("Unknown"),d.Ea.delete(4),await Dr(d)})(this))}))})),this.Va=new mb(i,s)}}async function Dr(n){if(os(n))for(const e of n.Ra)await e(!0)}async function rs(n){for(const e of n.Ra)await e(!1)}function ef(n,e){const t=J(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Qa(t)?Ka(t):ni(t).O_()&&Ga(t,e))}function Wa(n,e){const t=J(n),i=ni(t);t.Ia.delete(e),i.O_()&&tf(t,e),t.Ia.size===0&&(i.O_()?i.L_():os(t)&&t.Va.set("Unknown"))}function Ga(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ni(n).Z_(e)}function tf(n,e){n.da.$e(e),ni(n).X_(e)}function Ka(n){n.da=new d_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),ni(n).start(),n.Va.ua()}function Qa(n){return os(n)&&!ni(n).x_()&&n.Ia.size>0}function os(n){return J(n).Ea.size===0}function nf(n){n.da=void 0}async function yb(n){n.Va.set("Online")}async function vb(n){n.Ia.forEach(((e,t)=>{Ga(n,e)}))}async function wb(n,e){nf(n),Qa(n)?(n.Va.ha(e),Ka(n)):n.Va.set("Unknown")}async function _b(n,e,t){if(n.Va.set("Online"),e instanceof jd&&e.state===2&&e.cause)try{await(async function(s,r){const a=r.cause;for(const c of r.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.da.removeTarget(c))})(n,e)}catch(i){D(qn,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Cu(n,i)}else if(e instanceof Hs?n.da.Xe(e):e instanceof Ud?n.da.st(e):n.da.tt(e),!t.isEqual(B.min()))try{const i=await Yd(n.localStore);t.compareTo(i)>=0&&await(function(r,a){const c=r.da.Tt(a);return c.targetChanges.forEach(((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const m=r.Ia.get(d);m&&r.Ia.set(d,m.withResumeToken(u.resumeToken,a))}})),c.targetMismatches.forEach(((u,d)=>{const m=r.Ia.get(u);if(!m)return;r.Ia.set(u,m.withResumeToken(_e.EMPTY_BYTE_STRING,m.snapshotVersion)),tf(r,u);const _=new Dt(m.target,u,d,m.sequenceNumber);Ga(r,_)})),r.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(i){D(qn,"Failed to raise snapshot:",i),await Cu(n,i)}}async function Cu(n,e,t){if(!ti(e))throw e;n.Ea.add(1),await rs(n),n.Va.set("Offline"),t||(t=()=>Yd(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{D(qn,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Dr(n)}))}async function Ru(n,e){const t=J(n);t.asyncQueue.verifyOperationInProgress(),D(qn,"RemoteStore received new credentials");const i=os(t);t.Ea.add(3),await rs(t),i&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Dr(t)}async function bb(n,e){const t=J(n);e?(t.Ea.delete(2),await Dr(t)):e||(t.Ea.add(2),await rs(t),t.Va.set("Unknown"))}function ni(n){return n.ma||(n.ma=(function(t,i,s){const r=J(t);return r.sa(),new hb(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Zo:yb.bind(null,n),Yo:vb.bind(null,n),t_:wb.bind(null,n),J_:_b.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),Qa(n)?Ka(n):n.Va.set("Unknown")):(await n.ma.stop(),nf(n))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Ln,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,r){const a=Date.now()+i,c=new Ja(e,t,a,s,r);return c.start(i),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sf(n,e){if(gt("AsyncQueue",`${e}: ${n}`),ti(n))return new V(L.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{static emptySet(e){return new Mn(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||U.comparator(t.key,i.key):(t,i)=>U.comparator(t.key,i.key),this.keyedMap=Ci(),this.sortedSet=new le(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Mn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Mn;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(){this.ga=new le(U.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):H(63341,{Vt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class zn{constructor(e,t,i,s,r,a,c,u,d){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,i,s,r){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new zn(e,t,Mn.emptySet(t),a,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Cr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class Eb{constructor(){this.queries=xu(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const s=J(t),r=s.queries;s.queries=xu(),r.forEach(((a,c)=>{for(const u of c.ba)u.onError(i)}))})(this,new V(L.ABORTED,"Firestore shutting down"))}}function xu(){return new wn((n=>Pd(n)),Cr)}async function Ib(n,e){const t=J(n);let i=3;const s=e.query;let r=t.queries.get(s);r?!r.Sa()&&e.Da()&&(i=2):(r=new Tb,i=e.Da()?0:1);try{switch(i){case 0:r.wa=await t.onListen(s,!0);break;case 1:r.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=sf(a,`Initialization of query '${An(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,r),r.ba.push(e),e.va(t.onlineState),r.wa&&e.Fa(r.wa)&&Ya(t)}async function Sb(n,e){const t=J(n),i=e.query;let s=3;const r=t.queries.get(i);if(r){const a=r.ba.indexOf(e);a>=0&&(r.ba.splice(a,1),r.ba.length===0?s=e.Da()?0:1:!r.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function Ab(n,e){const t=J(n);let i=!1;for(const s of e){const r=s.query,a=t.queries.get(r);if(a){for(const c of a.ba)c.Fa(s)&&(i=!0);a.wa=s}}i&&Ya(t)}function kb(n,e,t){const i=J(n),s=i.queries.get(e);if(s)for(const r of s.ba)r.onError(t);i.queries.delete(e)}function Ya(n){n.Ca.forEach((e=>{e.next()}))}var ra,Lu;(Lu=ra||(ra={})).Ma="default",Lu.Cache="cache";class Cb{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new zn(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.Ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=zn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ra.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e){this.key=e}}class of{constructor(e){this.key=e}}class Rb{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Y(),this.mutatedKeys=Y(),this.eu=xd(e),this.tu=new Mn(this.eu)}get nu(){return this.Za}ru(e,t){const i=t?t.iu:new Pu,s=t?t.tu:this.tu;let r=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((m,_)=>{const I=s.get(m),R=Rr(this.query,_)?_:null,N=!!I&&this.mutatedKeys.has(I.key),$=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let M=!1;I&&R?I.data.isEqual(R.data)?N!==$&&(i.track({type:3,doc:R}),M=!0):this.su(I,R)||(i.track({type:2,doc:R}),M=!0,(u&&this.eu(R,u)>0||d&&this.eu(R,d)<0)&&(c=!0)):!I&&R?(i.track({type:0,doc:R}),M=!0):I&&!R&&(i.track({type:1,doc:I}),M=!0,(u||d)&&(c=!0)),M&&(R?(a=a.add(R),r=$?r.add(m):r.delete(m)):(a=a.delete(m),r=r.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),r=r.delete(m.key),i.track({type:1,doc:m})}return{tu:a,iu:i,Ss:c,mutatedKeys:r}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,s){const r=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((m,_)=>(function(R,N){const $=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H(20277,{Vt:M})}};return $(R)-$(N)})(m.type,_.type)||this.eu(m.doc,_.doc))),this.ou(i),s=s??!1;const c=t&&!s?this._u():[],u=this.Ya.size===0&&this.current&&!s?1:0,d=u!==this.Xa;return this.Xa=u,a.length!==0||d?{snapshot:new zn(this.query,e.tu,r,a,e.mutatedKeys,u===0,d,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Pu,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Y(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Ya=this.Ya.add(i.key))}));const t=[];return e.forEach((i=>{this.Ya.has(i)||t.push(new of(i))})),this.Ya.forEach((i=>{e.has(i)||t.push(new rf(i))})),t}cu(e){this.Za=e.ks,this.Ya=Y();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return zn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Xa="SyncEngine";class Pb{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class xb{constructor(e){this.key=e,this.hu=!1}}class Lb{constructor(e,t,i,s,r,a){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new wn((c=>Pd(c)),Cr),this.Iu=new Map,this.Eu=new Set,this.Ru=new le(U.comparator),this.Au=new Map,this.Vu=new Ba,this.du={},this.mu=new Map,this.fu=Hn.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Db(n,e,t=!0){const i=hf(n);let s;const r=i.Tu.get(e);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.lu()):s=await af(i,e,t,!0),s}async function Nb(n,e){const t=hf(n);await af(t,e,!0,!1)}async function af(n,e,t,i){const s=await nb(n.localStore,st(e)),r=s.targetId,a=n.sharedClientState.addLocalQueryTarget(r,t);let c;return i&&(c=await Mb(n,e,r,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&ef(n.remoteStore,s),c}async function Mb(n,e,t,i,s){n.pu=(_,I,R)=>(async function($,M,W,Z){let j=M.view.ru(W);j.Ss&&(j=await Eu($.localStore,M.query,!1).then((({documents:b})=>M.view.ru(b,j))));const G=Z&&Z.targetChanges.get(M.targetId),ee=Z&&Z.targetMismatches.get(M.targetId)!=null,te=M.view.applyChanges(j,$.isPrimaryClient,G,ee);return Nu($,M.targetId,te.au),te.snapshot})(n,_,I,R);const r=await Eu(n.localStore,e,!0),a=new Rb(e,r.ks),c=a.ru(r.documents),u=ss.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,u);Nu(n,t,d.au);const m=new Pb(e,t,a);return n.Tu.set(e,m),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function Ob(n,e,t){const i=J(n),s=i.Tu.get(e),r=i.Iu.get(s.targetId);if(r.length>1)return i.Iu.set(s.targetId,r.filter((a=>!Cr(a,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await ia(i.localStore,s.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(s.targetId),t&&Wa(i.remoteStore,s.targetId),oa(i,s.targetId)})).catch(Er)):(oa(i,s.targetId),await ia(i.localStore,s.targetId,!0))}async function Vb(n,e){const t=J(n),i=t.Tu.get(e),s=t.Iu.get(i.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Wa(t.remoteStore,i.targetId))}async function cf(n,e){const t=J(n);try{const i=await eb(t.localStore,e);e.targetChanges.forEach(((s,r)=>{const a=t.Au.get(r);a&&(re(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?re(a.hu,14607):s.removedDocuments.size>0&&(re(a.hu,42227),a.hu=!1))})),await uf(t,i,e)}catch(i){await Er(i)}}function Du(n,e,t){const i=J(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.Tu.forEach(((r,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const u=J(a);u.onlineState=c;let d=!1;u.queries.forEach(((m,_)=>{for(const I of _.ba)I.va(c)&&(d=!0)})),d&&Ya(u)})(i.eventManager,e),s.length&&i.Pu.J_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function $b(n,e,t){const i=J(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.Au.get(e),r=s&&s.key;if(r){let a=new le(U.comparator);a=a.insert(r,Ie.newNoDocument(r,B.min()));const c=Y().add(r),u=new Lr(B.min(),new Map,new le(K),a,c);await cf(i,u),i.Ru=i.Ru.remove(r),i.Au.delete(e),Za(i)}else await ia(i.localStore,e,!1).then((()=>oa(i,e,t))).catch(Er)}function oa(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Iu.get(e))n.Tu.delete(i),t&&n.Pu.yu(i,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((i=>{n.Vu.containsKey(i)||lf(n,i)}))}function lf(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(Wa(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Za(n))}function Nu(n,e,t){for(const i of t)i instanceof rf?(n.Vu.addReference(i.key,e),Fb(n,i)):i instanceof of?(D(Xa,"Document no longer in limbo: "+i.key),n.Vu.removeReference(i.key,e),n.Vu.containsKey(i.key)||lf(n,i.key)):H(19791,{wu:i})}function Fb(n,e){const t=e.key,i=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(i)||(D(Xa,"New document in limbo: "+t),n.Eu.add(i),Za(n))}function Za(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new U(se.fromString(e)),i=n.fu.next();n.Au.set(i,new xb(t)),n.Ru=n.Ru.insert(t,i),ef(n.remoteStore,new Dt(st($a(t.path)),i,"TargetPurposeLimboResolution",Ir.ce))}}async function uf(n,e,t){const i=J(n),s=[],r=[],a=[];i.Tu.isEmpty()||(i.Tu.forEach(((c,u)=>{a.push(i.pu(u,e,t).then((d=>{var m;if((d||t)&&i.isPrimaryClient){const _=d?!d.fromCache:(m=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:m.current;i.sharedClientState.updateQueryState(u.targetId,_?"current":"not-current")}if(d){s.push(d);const _=qa.Es(u.targetId,d);r.push(_)}})))})),await Promise.all(a),i.Pu.J_(s),await(async function(u,d){const m=J(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(_=>C.forEach(d,(I=>C.forEach(I.Ts,(R=>m.persistence.referenceDelegate.addReference(_,I.targetId,R))).next((()=>C.forEach(I.Is,(R=>m.persistence.referenceDelegate.removeReference(_,I.targetId,R)))))))))}catch(_){if(!ti(_))throw _;D(za,"Failed to update sequence numbers: "+_)}for(const _ of d){const I=_.targetId;if(!_.fromCache){const R=m.vs.get(I),N=R.snapshotVersion,$=R.withLastLimboFreeSnapshotVersion(N);m.vs=m.vs.insert(I,$)}}})(i.localStore,r))}async function Ub(n,e){const t=J(n);if(!t.currentUser.isEqual(e)){D(Xa,"User change. New user:",e.toKey());const i=await Jd(t.localStore,e);t.currentUser=e,(function(r,a){r.mu.forEach((c=>{c.forEach((u=>{u.reject(new V(L.CANCELLED,a))}))})),r.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await uf(t,i.Ns)}}function jb(n,e){const t=J(n),i=t.Au.get(e);if(i&&i.hu)return Y().add(i.key);{let s=Y();const r=t.Iu.get(e);if(!r)return s;for(const a of r){const c=t.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function hf(n){const e=J(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=cf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$b.bind(null,e),e.Pu.J_=Ab.bind(null,e.eventManager),e.Pu.yu=kb.bind(null,e.eventManager),e}class ur{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Xd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Z_(this.persistence,new J_,e.initialUser,this.serializer)}Cu(e){return new Qd(Ha.Vi,this.serializer)}Du(e){return new sb}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ur.provider={build:()=>new ur};class Bb extends ur{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){re(this.persistence.referenceDelegate instanceof lr,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new M_(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Me.withCacheSize(this.cacheSizeBytes):Me.DEFAULT;return new Qd((i=>lr.Vi(i,t)),this.serializer)}}class aa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Du(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ub.bind(null,this.syncEngine),await bb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Eb})()}createDatastore(e){const t=Xd(e.databaseInfo.databaseId),i=lb(e.databaseInfo);return pb(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,s,r,a,c){return new gb(i,s,r,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>Du(this.syncEngine,t,0)),(function(){return Au.v()?new Au:new rb})())}createSyncEngine(e,t){return(function(s,r,a,c,u,d,m){const _=new Lb(s,r,a,c,u,d);return m&&(_.gu=!0),_})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const r=J(s);D(qn,"RemoteStore shutting down."),r.Ea.add(5),await rs(r),r.Aa.shutdown(),r.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}aa.provider={build:()=>new aa};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Hb{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):gt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt="FirestoreClient";class qb{constructor(e,t,i,s,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this._databaseInfo=s,this.user=Ee.UNAUTHENTICATED,this.clientId=yd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,(async a=>{D(Qt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(i,(a=>(D(Qt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ln;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=sf(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function Ao(n,e){n.asyncQueue.verifyOperationInProgress(),D(Qt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async s=>{i.isEqual(s)||(await Jd(e.localStore,s),i=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Mu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await zb(n);D(Qt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>Ru(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,s)=>Ru(e.remoteStore,s))),n._onlineComponents=e}async function zb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D(Qt,"Using user provided OfflineComponentProvider");try{await Ao(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;vn("Error using user provided cache. Falling back to memory cache: "+t),await Ao(n,new ur)}}else D(Qt,"Using default OfflineComponentProvider"),await Ao(n,new Bb(void 0));return n._offlineComponents}async function Wb(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D(Qt,"Using user provided OnlineComponentProvider"),await Mu(n,n._uninitializedComponentsProvider._online)):(D(Qt,"Using default OnlineComponentProvider"),await Mu(n,new aa))),n._onlineComponents}async function Ou(n){const e=await Wb(n),t=e.eventManager;return t.onListen=Db.bind(null,e.syncEngine),t.onUnlisten=Ob.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Nb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Vb.bind(null,e.syncEngine),t}function Gb(n,e,t,i){const s=new Hb(i),r=new Cb(e,s,t);return n.asyncQueue.enqueueAndForget((async()=>Ib(await Ou(n),r))),()=>{s.Nu(),n.asyncQueue.enqueueAndForget((async()=>Sb(await Ou(n),r)))}}/**
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
 */function df(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb="ComponentProvider",Vu=new Map;function Qb(n,e,t,i,s){return new Sw(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,df(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff="firestore.googleapis.com",$u=!0;class Fu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new V(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ff,this.ssl=$u}else this.host=e.host,this.ssl=e.ssl??$u;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Kd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<D_)throw new V(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=df(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new V(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new V(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new V(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ec{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new ew;switch(i.type){case"firstParty":return new sw(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new V(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=Vu.get(t);i&&(D(Kb,"Removing Datastore"),Vu.delete(t),i.terminate())})(this),Promise.resolve()}}function Jb(n,e,t,i={}){var d;n=Us(n,ec);const s=Gn(e),r=n._getSettings(),a={...r,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(hh(`https://${c}`),dh("Firestore",!0)),r.host!==ff&&r.host!==c&&vn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...r,host:c,ssl:s,emulatorOptions:i};if(!fn(u,a)&&(n._setSettings(u),i.mockUserToken)){let m,_;if(typeof i.mockUserToken=="string")m=i.mockUserToken,_=Ee.MOCK_USER;else{m=Dp(i.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const I=i.mockUserToken.sub||i.mockUserToken.user_id;if(!I)throw new V(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new Ee(I)}n._authCredentials=new tw(new gd(m,_))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Nr(this.firestore,e,this._query)}}class Ue{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new On(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ue(this.firestore,e,this._key)}toJSON(){return{type:Ue._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(ns(t,Ue._jsonSchema))return new Ue(e,i||null,new U(se.fromString(t.referencePath)))}}Ue._jsonSchemaVersion="firestore/documentReference/1.0",Ue._jsonSchema={type:de("string",Ue._jsonSchemaVersion),referencePath:de("string")};class On extends Nr{constructor(e,t,i){super(e,t,$a(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ue(this.firestore,null,new U(e))}withConverter(e){return new On(this.firestore,e,this._path)}}function rn(n,e,...t){if(n=je(n),uw("collection","path",e),n instanceof ec){const i=se.fromString(e,...t);return Yl(i),new On(n,null,i)}{if(!(n instanceof Ue||n instanceof On))throw new V(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(se.fromString(e,...t));return Yl(i),new On(n.firestore,null,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu="AsyncQueue";class ju{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Zd(this,"async_queue_retry"),this._c=()=>{const i=So();i&&D(Uu,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=So();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=So();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Ln;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!ti(e))throw e;D(Uu,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,gt("INTERNAL UNHANDLED ERROR: ",Bu(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Ja.createAndSchedule(this,e,t,i,(r=>this.hc(r)));return this.tc.push(s),s}uc(){this.nc&&H(47125,{Pc:Bu(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Bu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class ca extends ec{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new ju,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ju(e),this._firestoreClient=void 0,await e}}}function Yb(n,e){const t=typeof n=="object"?n:gh(),i=typeof n=="string"?n:sr,s=ga(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=xp("firestore");r&&Jb(s,...r)}return s}function Xb(n){if(n._terminated)throw new V(L.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Zb(n),n._firestoreClient}function Zb(n){var i,s,r,a;const e=n._freezeSettings(),t=Qb(n._databaseId,((i=n._app)==null?void 0:i.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(r=e.localCache)!=null&&r._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new qb(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(u){const d=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(d),_online:d}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this._byteString=e}static fromBase64String(e){try{return new et(_e.fromBase64String(e))}catch(t){throw new V(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new et(_e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:et._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ns(e,et._jsonSchema))return et.fromBase64String(e.bytes)}}et._jsonSchemaVersion="firestore/bytes/1.0",et._jsonSchema={type:de("string",et._jsonSchemaVersion),bytes:de("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return K(this._lat,e._lat)||K(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:$t._jsonSchemaVersion}}static fromJSON(e){if(ns(e,$t._jsonSchema))return new $t(e.latitude,e.longitude)}}$t._jsonSchemaVersion="firestore/geoPoint/1.0",$t._jsonSchema={type:de("string",$t._jsonSchemaVersion),latitude:de("number"),longitude:de("number")};/**
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
 */class Ft{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ft._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ns(e,Ft._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Ft(e.vectorValues);throw new V(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ft._jsonSchemaVersion="firestore/vectorValue/1.0",Ft._jsonSchema={type:de("string",Ft._jsonSchemaVersion),vectorValues:de("object")};function mf(n,e,t){if((e=je(e))instanceof pf)return e._internalPath;if(typeof e=="string")return tT(n,e);throw la("Field path arguments must be of type string or ",n)}const eT=new RegExp("[~\\*/\\[\\]]");function tT(n,e,t){if(e.search(eT)>=0)throw la(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new pf(...e.split("."))._internalPath}catch{throw la(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function la(n,e,t,i,s){let r=`Function ${e}() called with invalid data`;r+=". ";let a="";return new V(L.INVALID_ARGUMENT,r+n+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{convertValue(e,t="none"){switch(Gt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Wt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw H(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return is(e,((s,r)=>{i[s]=this.convertValue(r,t)})),i}convertVectorValue(e){var i,s,r;const t=(r=(s=(i=e.fields)==null?void 0:i[Go].arrayValue)==null?void 0:s.values)==null?void 0:r.map((a=>ce(a.doubleValue)));return new Ft(t)}convertGeoPoint(e){return new $t(ce(e.latitude),ce(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Ar(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(zi(e));default:return null}}convertTimestamp(e){const t=zt(e);return new he(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=se.fromString(e);re(Gd(i),9688,{name:e});const s=new Wi(i.get(1),i.get(3)),r=new U(i.popFirst(5));return s.isEqual(t)||gt(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */class gf extends nT{constructor(e){super(),this.firestore=e}convertBytes(e){return new et(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ue(this.firestore,null,t)}}const Hu="@firebase/firestore",qu="4.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new iT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(mf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class iT extends yf{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class dn extends yf{constructor(e,t,i,s,r,a){super(e,t,i,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new qs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(mf("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new V(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=dn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}dn._jsonSchemaVersion="firestore/documentSnapshot/1.0",dn._jsonSchema={type:de("string",dn._jsonSchemaVersion),bundleSource:de("string","DocumentSnapshot"),bundleName:de("string"),bundle:de("string")};class qs extends dn{data(e={}){return super.data(e)}}class Vn{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Pi(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new qs(this._firestore,this._userDataWriter,i.key,i,new Pi(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,r){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const u=new qs(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Pi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>r||c.type!==3)).map((c=>{const u=new qs(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Pi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:rT(c.type),doc:u,oldIndex:d,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new V(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Vn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=yd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],s=[];return this.docs.forEach((r=>{r._document!==null&&(t.push(r._document),i.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),s.push(r.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function rT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H(61501,{type:n})}}/**
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
 */Vn._jsonSchemaVersion="firestore/querySnapshot/1.0",Vn._jsonSchema={type:de("string",Vn._jsonSchemaVersion),bundleSource:de("string","QuerySnapshot"),bundleName:de("string"),bundle:de("string")};function on(n,...e){var d,m,_;n=je(n);let t={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||zu(e[i])||(t=e[i++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(zu(e[i])){const I=e[i];e[i]=(d=I.next)==null?void 0:d.bind(I),e[i+1]=(m=I.error)==null?void 0:m.bind(I),e[i+2]=(_=I.complete)==null?void 0:_.bind(I)}let r,a,c;if(n instanceof Ue)a=Us(n.firestore,ca),c=$a(n._key.path),r={next:I=>{e[i]&&e[i](oT(a,n,I))},error:e[i+1],complete:e[i+2]};else{const I=Us(n,Nr);a=Us(I.firestore,ca),c=I._query;const R=new gf(a);r={next:N=>{e[i]&&e[i](new Vn(a,R,I,N))},error:e[i+1],complete:e[i+2]},sT(n._query)}const u=Xb(a);return Gb(u,c,s,r)}function oT(n,e,t){const i=t.docs.get(e._key),s=new gf(n);return new dn(n,s,e._key,i,new Pi(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){Zv(Kn),$n(new pn("firestore",((i,{instanceIdentifier:s,options:r})=>{const a=i.getProvider("app").getImmediate(),c=new ca(new nw(i.getProvider("auth-internal")),new rw(a,i.getProvider("app-check-internal")),Aw(a,s),a);return r={useFetchStreams:t,...r},c._setSettings(r),c}),"PUBLIC").setMultipleInstances(!0)),Ot(Hu,qu,e),Ot(Hu,qu,"esm2020")})();const an=Yb(id);let lt=[];function aT(n){if(vf(),!n)return;const e=t=>t.docs.map(i=>({id:i.id,...i.data()}));lt.push(on(rn(an,`households/${n}/inventory`),t=>{var i,s;p.inv=e(t),ae("synced"),(i=O.renderAll)==null||i.call(O),(s=O.renderSum)==null||s.call(O)},t=>{console.warn("realtime inv error:",t),ae("error")})),lt.push(on(rn(an,`households/${n}/shopping`),t=>{var i,s;p.shop=e(t),ae("synced"),(i=O.renderShop)==null||i.call(O),(s=O.renderSum)==null||s.call(O)},t=>{console.warn("realtime shop error:",t),ae("error")})),lt.push(on(rn(an,`households/${n}/recipes`),t=>{var i,s;p.recs=e(t),ae("synced"),(i=O.renderRecs)==null||i.call(O),(s=O.renderSum)==null||s.call(O)},t=>{console.warn("realtime recs error:",t),ae("error")})),lt.push(on(rn(an,`households/${n}/mealplan`),t=>{const i={};e(t).forEach(s=>{s.date&&s.meal&&(i[s.date]=s.meal)}),p.mp=i,ae("synced")},t=>{console.warn("realtime mp error:",t)})),lt.push(on(rn(an,`households/${n}/settings`),t=>{const i=e(t).find(s=>s.id==="config");i&&(p.cfg={...Ks,...i})},t=>{console.warn("realtime settings error:",t)})),lt.push(on(rn(an,`households/${n}/cooklog`),t=>{p.cookLog=e(t).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},t=>{console.warn("realtime cooklog error:",t)})),lt.push(on(rn(an,`households/${n}/wastelog`),t=>{p.wasteLog=e(t).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},t=>{console.warn("realtime wastelog error:",t)})),ae("synced"),console.log("[realtime] Listeners started for household:",n)}function vf(){lt.forEach(n=>{try{n()}catch{}}),lt=[],console.log("[realtime] All listeners stopped")}function tc(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(p.cfg.adults||"Bora").split(",")[0].trim(),i=f("grt");i&&(i.innerHTML=`${e}, <span>${t}</span>`);const s=f("hdt");s&&(s.textContent=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})),_n()}function nc(){wf(),zs==null||zs()}let zs=null;function cT(n){zs=n}function wf(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(p.cfg.adults||"Bora").split(",")[0].trim(),i=f("grt");i&&!i.innerHTML&&(i.innerHTML=`${e}, <span>${t}</span>`),_n(),as(),uT(),hT(),ii(),pT(),_f()}function ii(){const n=xt(),e=p.mp[n],t=f("tnd"),i=f("tna"),s=f("tonight-main");s&&(s.onclick=function(){window.openMealM(n,"Today")}),e?(t&&(t.innerHTML=e),i&&(i.innerHTML=`<button class="btn bsm bp" onclick="event.stopPropagation();openCooked('${n}')">✓ Cooked</button><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${n}','Today')">Edit</button>`)):(t&&(t.innerHTML='<span style="font-size:.9rem;color:var(--mt);font-style:italic">No meal planned yet</span>'),i&&(i.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${n}','Today')">+ Plan dinner</button><button class="btn bsm bs" onclick="event.stopPropagation();showScreen('chat')">Ask Claude →</button>`))}function _n(){const n=["S","M","T","W","T","F","S"],e=new Date;e.setHours(0,0,0,0);const t=f("wgrd");t&&(t.innerHTML=Zn().map((i,s)=>{const r=i.toISOString().split("T")[0],a=i.getTime()===e.getTime(),c=p.mp[r];return`<div class="wd${a?" today":""}${c?" hm":""}" onclick="openMealM('${r}','${n[s]} ${i.getDate()}')"><div class="wdn">${n[s]}</div><div class="wdd">${i.getDate()}</div>${c?`<div class="wdm">${c.substring(0,10)}${c.length>10?"…":""}</div>`:""}</div>`}).join(""),lT())}function lT(){const n=f("variety-nudge");if(!n)return;const e=Zn().map(a=>p.mp[a.toISOString().split("T")[0]]).filter(Boolean);if(e.length<3){n.style.display="none";return}const t=e.some(a=>/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(a)),i=e.some(a=>/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner/i.test(a)),s={};e.forEach(a=>{const c=a.toLowerCase();s[c]=(s[c]||0)+1});const r=Object.entries(s).find(([,a])=>a>=3);r?(n.style.display="block",n.innerHTML="🔄 <strong>"+r[0]+"</strong> is planned "+r[1]+"× this week — maybe try something different?"):!t&&!i?(n.style.display="block",n.innerHTML="🌍 No Bangladeshi or Turkish dishes this week yet — ask Claude for ideas!"):t?i?n.style.display="none":(n.style.display="block",n.innerHTML="🇹🇷 No Turkish dishes this week — köfte or mercimek çorbası would be great!"):(n.style.display="block",n.innerHTML="🇧🇩 No Bangladeshi dishes this week — how about a dal or fish curry?")}function as(){const n=p.inv.filter(c=>{const u=rt(c.expiry);return u&&(u.c==="expiring"||u.c==="expired")}).length,e=p.shop.filter(c=>!c.checked).length,t=f("home-exp-val"),i=f("home-exp-sub");t&&(n>0?(t.textContent=n+" item"+(n>1?"s":""),t.className="tc-val",t.style.color="var(--am)"):(t.textContent="All fresh!",t.className="tc-val tc-green")),i&&(i.textContent=n>0?"expiring soon":"Nothing in next 3 days");const s=f("home-shop-val"),r=f("home-shop-sub");s&&(s.textContent=e),r&&(r.textContent=e===1?"item to buy":e===0?"all stocked up":"items to buy");const a=f("sgrd");a&&(a.innerHTML=`<div class="sc" onclick="showScreen('inventory')"><div class="sci">🧺</div><div class="scv">${p.inv.length}</div><div class="scl">Items in stock</div></div><div class="sc${n>0?" warn":""}" onclick="showScreen('inventory')"><div class="sci">⏱</div><div class="scv">${n}</div><div class="scl">Expiring soon</div></div><div class="sc" onclick="showScreen('shopping')"><div class="sci">🛒</div><div class="scv">${e}</div><div class="scl">To buy</div></div><div class="sc" onclick="showScreen('recipes')"><div class="sci">📖</div><div class="scv">${p.recs.length}</div><div class="scl">Saved recipes</div></div>`)}function uT(){const n=p.inv.filter(i=>{const s=rt(i.expiry);return s&&(s.c==="expiring"||s.c==="expired")}).sort((i,s)=>new Date(i.expiry)-new Date(s.expiry)),e=f("exslbl"),t=f("expl");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(i=>{const s=rt(i.expiry);return`<div class="exi${s.c==="expired"?" exp":""}" onclick="openAdj('${i.id}')"><div class="exn">${i.name}</div><div class="exd">${s.l}</div></div>`}).join("")}}function hT(){const n=p.inv.filter(i=>i.qty<=(i.lowStockThreshold||1)).sort((i,s)=>i.qty-s.qty),e=f("lowstocklbl"),t=f("lowstocklist");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(i=>`<div class="exi" style="border-color:var(--am)">
    <div style="display:flex;align-items:center;gap:10px;flex:1;cursor:pointer" onclick="openAdj('${i.id}')">
      <div class="exn">${i.name}</div>
      <div style="font-size:.74rem;color:var(--am);font-weight:600">${i.qty} ${i.unit}</div>
    </div>
    <button class="btn bsm bs" style="flex-shrink:0;font-size:.72rem" onclick="event.stopPropagation();addLowToShop('${i.id}')">🛒 Add to list</button>
  </div>`).join(""),fT(n.length)}}async function dT(n){const e=p.inv.find(i=>i.id===n);if(!e)return;if(p.shop.find(i=>i.name.toLowerCase()===e.name.toLowerCase()&&!i.checked)){P(`${e.name} is already on your list`);return}await Ve({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"low-stock"}),P(`${e.name} added to shopping list 🛒`)}function fT(n){const e=f("nav-inventory");if(!e)return;const t=e.querySelector(".nav-badge");if(t&&t.remove(),n>0){const i=document.createElement("span");i.className="nav-badge",i.textContent=n,i.style.cssText="position:absolute;top:4px;right:calc(50% - 18px);background:var(--am);color:#0c0c0a;font-size:.58rem;font-weight:700;min-width:16px;height:16px;border-radius:8px;display:flex;align-items:center;justify-content:center;padding:0 4px",e.appendChild(i)}}async function pT(){const n=f("activityfeed"),e=f("activitylbl");if(!n)return;const t=await Kv();if(!t.length){e&&(e.style.display="none"),n.innerHTML="";return}e&&(e.style.display="flex");const i=s=>{const r=Date.now()-new Date(s).getTime(),a=Math.floor(r/6e4);if(a<1)return"just now";if(a<60)return a+"m ago";const c=Math.floor(a/60);if(c<24)return c+"h ago";const u=Math.floor(c/24);return u===1?"yesterday":u+"d ago"};n.innerHTML=t.slice(0,5).map(s=>`<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--b1)">
      <div style="width:28px;height:28px;border-radius:50%;background:var(--acd);display:flex;align-items:center;justify-content:center;font-size:.7rem;flex-shrink:0;color:var(--ac);font-weight:700">${(s.memberName||"?")[0].toUpperCase()}</div>
      <div style="flex:1;font-size:.82rem;color:var(--tx2);line-height:1.4"><strong style="color:var(--tx)">${(s.memberName||"Someone").replace(/</g,"&lt;")}</strong> ${(s.action||"").replace(/</g,"&lt;")} <strong>${(s.itemName||"").replace(/</g,"&lt;")}</strong></div>
      <div style="font-size:.68rem;color:var(--mt);flex-shrink:0">${i(s.timestamp)}</div>
    </div>`).join("")}function _f(){const n=["fridge","freezer","pantry"].map(t=>{const i=p.inv.filter(s=>s.location===t);return i.length?Pa(t).toUpperCase()+`
`+i.map(s=>`- ${s.name}${s.brand?` (${s.brand})`:""}: ${s.qty} ${s.unit}`).join(`
`):""}).filter(Boolean).join(`

`),e=f("expbox");e&&(e.textContent=n||"No items yet.")}let Be=null,ko=!1,Ti="",Co=!1;function mT(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=f("shopAddMicOpt");e&&(e.style.display="")}function Wu(n){const e=f("micstatus");e&&e.classList.toggle("visible",n)}function bf(){if(ko&&Be){Co=!0,Be.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){P("Voice input not supported");return}Be=new n,Be.lang="en-US",Be.interimResults=!0,Be.maxAlternatives=1,Be.continuous=!1,Ti="",ko=!0,Wu(!0),Be.onresult=e=>{let t="";for(let s=e.resultIndex;s<e.results.length;s++){const r=e.results[s][0].transcript;e.results[s].isFinal?Ti+=r:t+=r}const i=f("shi");i&&(i.value=(Ti+t).trim())},Be.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&P("Couldn't hear that — try again")},Be.onend=()=>{let e=(Ti||"").trim();if(!e&&Co){const t=f("shi");e=t?t.value.trim():""}if(ko=!1,Be=null,Ti="",Co=!1,Wu(!1),e){let t=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||1):s&&(t=s[2].trim(),i=parseInt(s[1],10)||1);const a={id:Date.now().toString(),name:t,qty:i,checked:!1,src:"manual"};Ve(a),P(`Added "${e}" 🎤`);const c=f("shi");c&&(c.value=""),Mr(a.id,t,"shop")}},Be.start()}function xs(n){const e=n.qty||1,t=`<span class="sh-qty${e===1?" sh-qty-one":""}" onclick="event.stopPropagation();openShQty('${n.id}')"> × ${e}</span>`,i=n.image?`<img src="${n.image}" class="sh-thumb" alt="" onerror="this.style.display='none'"/>`:"";return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="shop">
    <div class="swipe-inner">
      <!-- Main row: swipeRowTap handles multi-select; checkbox toggles checked; content area opens detail -->
      <div class="shit${n.checked?" chk":""}" onclick="swipeRowTap('${n.id}','shop')">
        <div class="sel-cb">✓</div>           <!-- Multi-select checkbox (hidden unless selectMode is active) -->
        <div class="shck" onclick="event.stopPropagation();swipeRowTap('${n.id}','shop')">${n.checked?"✓":""}</div>  <!-- Tap to toggle checked (or toggle selection in multi-select) -->
        ${i}                               <!-- Product thumbnail from barcode scan (if available) -->
        <div style="flex:1;min-width:0;cursor:pointer" onclick="openItemDetail('${n.id}')">
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
  </div>`}function si(){const n=(a,c)=>a.name.localeCompare(c.name),e=f("shlist"),t=p.shop.filter(a=>!a.checked).sort(n),i=p.shop.filter(a=>a.checked).sort(n),s=f("clrchk");s&&(s.style.display=i.length?"block":"none");const r=f("shsub");if(r&&(r.textContent=t.length+" items to buy"),!!e){if(!p.shop.length){e.innerHTML='<div class="es"><div class="ei">🛒</div><p>Your list is empty!<br/>Add items or use "Build from meal plan".</p></div>';return}if(p.aisleMode&&t.length){const a={};t.forEach(c=>{const u=Xv(c.name);a[u]||(a[u]=[]),a[u].push(c)}),e.innerHTML=Object.entries(a).sort().map(([c,u])=>`<div class="shsec">${c}</div>${u.map(xs).join("")}`).join("")+(i.length?`<div class="shsec">Done</div>${i.map(xs).join("")}`:"")}else e.innerHTML=(t.length?`<div class="shsec">To buy (${t.length})</div>${t.map(xs).join("")}`:"")+(i.length?`<div class="shsec">Done</div>${i.map(xs).join("")}`:"");if(p.selectMode==="shop"){document.querySelectorAll("#shlist .swipe-wrap").forEach(c=>{c.classList.add("selecting"),p.selectedIds.has(c.dataset.id)&&c.classList.add("selected")});const a=document.querySelector(".shbody");a&&(a.style.paddingLeft="52px")}}}function gT(){const n=f("shi"),e=n.value.trim();if(!e)return;let t=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||1):s&&(t=s[2].trim(),i=parseInt(s[1],10)||1);const a=f("addNoteInp"),c=a?a.value.trim():"",u={id:Date.now().toString(),name:t,qty:i,checked:!1,src:"manual"};c&&(u.note=c),Ve(u),n.value="",a&&(a.value="");const d=f("addNoteWrap");d&&(d.style.display="none"),ic(),cs()}function yT(){const n=f("addNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=f("addNoteInp");t&&t.focus()}}function vT(){const n=f("shopAddBackdrop"),e=f("shopAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),setTimeout(()=>{const t=f("shi");t&&(t.value="",t.focus())},150)}function cs(){const n=f("shopAddBackdrop"),e=f("shopAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),ic()}function wT(){cs(),window.openScanForList&&window.openScanForList()}function _T(){cs(),bf()}let Ui=null,Ut=null;const Ei=new Map,bT=300*1e3,TT=30;function ET(){Ui&&clearTimeout(Ui);const n=f("shi"),e=n?n.value.trim():"",t=f("shopSearchDropdown");if(!e||e.length<2){t&&(t.classList.remove("active"),t.innerHTML=""),Ut=null;return}Ui=setTimeout(()=>IT(e),350)}const Tf=new Set(["a","an","the","and","or","with","for","of","in","to","by","is","it","at","on","no","not","all","each","per","from","free","style","natural","original","premium","organic","fresh","whole","pure","real","lite","light","low","high","extra","reduced","fat","nonfat","skim","raw","roasted","unsweetened","sweetened","flavored","smoked","dried","frozen","canned","pack","ct","oz","lb","ml","kg","fl","count","size","gallon","quart","pint","liter","bag","box","can","jar","bottle","container","pouch","tub","carton","plain","creamy","chunky","crispy","crunchy","spicy","mild","hot","cold","classic","homestyle","traditional","artisan","greek","italian","mexican","asian","indian","mini","small","medium","large","jumbo","giant","big","handheld","electric","portable","automatic","manual","new","best","top","value","brand"]);function Gu(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(t===i||t.startsWith(i+" "))return!0;const s=i.split(/\s+/).filter(c=>c.length>=2),r=t.split(/[\s,&+\-–—/()[\]]+/).filter(c=>c.length>=2&&!Tf.has(c)&&!/^\d+$/.test(c));if(r.length<=2)return!0;let a=0;for(const c of r)s.some(d=>{if(c.startsWith(d)||d.startsWith(c))return!0;const m=Math.min(c.length,d.length,3);return m>=3&&c.slice(0,m)===d.slice(0,m)})&&a++;return a/r.length>=.5}function Ef(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(t===i)return 100;if(t.startsWith(i+" ")||t.startsWith(i))return 95;const r=t.split(/[\s,&+\-–—/]+/).filter(a=>a.length>=2).filter(a=>!Tf.has(a)&&!/^\d+$/.test(a));if(r.length&&(r[0].startsWith(i)||i.startsWith(r[0]))){const a=r.filter(u=>!u.startsWith(i)&&!i.startsWith(u)).length,c=85-Math.min(a*8,30);return Gu(n,e)?c:0}for(let a=1;a<Math.min(3,r.length);a++)if(r[a].startsWith(i)||i.startsWith(r[a])){const c=r.filter(d=>!d.startsWith(i)&&!i.startsWith(d)).length,u=60-a*10-Math.min(c*8,20);return Gu(n,e)?Math.max(u,5):0}return 0}async function If(n){const e=n.toLowerCase(),t=Ei.get(e);if(t&&Date.now()-t.ts<bT)return t.scored;console.log(`[ShopSearch] Fetching /api/text-search?q=${encodeURIComponent(n)}`);let r=(await(await fetch(`/api/text-search?q=${encodeURIComponent(n)}`)).json()).results||[];const a=n.toLowerCase().split(/\s+/).filter(u=>u.length>=2);r=r.filter(u=>{const d=(u.name||"").toLowerCase();return a.some(m=>d.includes(m))});const c=r.map(u=>({...u,_score:Ef(u.name||"",n)})).filter(u=>u._score>=20).sort((u,d)=>d._score-u._score).slice(0,5);if(Ei.set(e,{scored:c,ts:Date.now()}),Ei.size>TT){const u=Ei.keys().next().value;Ei.delete(u)}return c}async function IT(n){const e=f("shopSearchDropdown");if(e){e.innerHTML='<div class="search-hint">Searching…</div>',e.classList.add("active");try{const t=await If(n);if((f("shi")?f("shi").value.trim():"").toLowerCase()!==n.toLowerCase())return;if(!t.length){e.classList.remove("active"),e.innerHTML="",Ut=null;return}Ut=t,e.innerHTML=t.map((s,r)=>{const a=s.image?`<img src="${s.image}" class="enrich-img" alt="" onerror="this.style.display='none'"/>`:'<div class="enrich-img-ph">🛒</div>',c=s.brand?`<div class="enrich-brand">${s.brand}</div>`:"",u=s.category&&s.category!=="General"?`<div class="enrich-cat">${s.category}</div>`:"";return`<div class="enrich-row" onclick="pickInlineResult(${r})">
        ${a}
        <div style="flex:1;min-width:0">
          <div class="enrich-name">${s.name}</div>
          ${c}${u}
        </div>
      </div>`}).join("")}catch(t){console.warn("Inline search failed:",t),e.classList.remove("active"),e.innerHTML="",Ut=null}}}function ST(n){if(!Ut||!Ut[n])return;const e=Ut[n],t=f("addNoteInp"),i=t?t.value.trim():"",s={id:Date.now().toString(),name:e.name,qty:1,checked:!1,src:"search",brand:e.brand||"",image:e.image||null,category:e.category||"",nutrition:e.nutrition||null,source:e.source||"search"};i&&(s.note=i),Ve(s),P(`Added "${e.name}" ✓`);const r=f("shi");r&&(r.value=""),t&&(t.value="");const a=f("addNoteWrap");a&&(a.style.display="none"),ic(),cs()}function ic(){Ui&&clearTimeout(Ui),Ut=null;const n=f("shopSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}async function Mr(n,e,t){if(!e||e.length<2)return;const i=f("enrichResults"),s=f("enrichTitle");if(!i)return;s&&(s.textContent=`Finding "${e}"…`),i.innerHTML='<div class="enrich-loading"><div class="spin" style="width:28px;height:28px;margin:0 auto 8px"></div>Searching products…</div>';const r=f("enrichBackdrop"),a=f("enrichSheet");r&&r.classList.add("active"),a&&a.classList.add("active");try{let c=await If(e);if(!c.length){hr();return}s&&(s.textContent="Choose a match");let u=c.map((d,m)=>{const _=d.image?`<img src="${d.image}" class="enrich-img" alt="" onerror="this.style.display='none'"/>`:'<div class="enrich-img-ph">🛒</div>',I=d.brand?`<div class="enrich-brand">${d.brand}</div>`:"",R=d.category&&d.category!=="General"?`<div class="enrich-cat">${d.category}</div>`:"";return`<div class="enrich-row" onclick="pickEnrichResult(${m})">
        ${_}
        <div style="flex:1;min-width:0">
          <div class="enrich-name">${d.name}</div>
          ${I}${R}
        </div>
      </div>`}).join("");u+=`<button class="enrich-fallback" onclick="closeEnrichSheet()">
      <span style="font-size:1.1rem">📝</span>
      Just add "${e}" as typed
    </button>`,i.innerHTML=u,window._enrichCtx={itemId:n,query:e,list:t,results:c}}catch(c){console.warn("Text search failed:",c),hr()}}function hr(){const n=f("enrichBackdrop"),e=f("enrichSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),window._enrichCtx=null}function AT(n){if(p.selectMode)return;event&&event.stopPropagation();const e=p.shop.find(d=>d.id===n);if(!e)return;const t=f("itemDetailContent");if(!t)return;let s=`<div class="item-detail-header">
    ${e.image?`<img src="${e.image}" class="item-detail-img" alt="" onerror="this.style.display='none'"/>`:'<div class="item-detail-img-ph">🛒</div>'}
    <div style="flex:1;min-width:0">
      <div class="item-detail-name">${e.name}</div>
      ${e.brand?`<div class="item-detail-brand">${e.brand}</div>`:""}
      ${e.checked?'<div style="margin-top:4px"><span class="item-detail-badge" style="background:var(--gnd);color:var(--gn)">✓ Purchased</span></div>':""}
    </div>
  </div>`;const r=[];e.category&&e.category!=="General"&&r.push(e.category),e.source&&r.push(`via ${e.source}`),e.src&&r.push(e.src==="manual"?"Added manually":e.src==="meal-plan"?"From meal plan":e.src==="deal"?"From deals":e.src==="search"?"Product search":e.src),r.length&&(s+=`<div style="margin-bottom:10px">${r.map(d=>`<span class="item-detail-badge">${d}</span>`).join("")}</div>`);const a=e.qty||1;if(a>1&&(s+=`<div class="item-detail-section">
      <div class="item-detail-label">Quantity</div>
      <div class="item-detail-value">× ${a}</div>
    </div>`),e.note&&(s+=`<div class="item-detail-section">
      <div class="item-detail-label">Note</div>
      <div class="item-detail-value">${e.note}</div>
    </div>`),e.nutrition){const d=e.nutrition,m=[];d.calories!=null&&m.push({val:d.calories,lbl:"Calories"}),d.protein&&m.push({val:d.protein,lbl:"Protein"}),d.fat&&m.push({val:d.fat,lbl:"Fat"}),d.carbs&&m.push({val:d.carbs,lbl:"Carbs"}),m.length&&(s+=`<div class="item-detail-section">
        <div class="item-detail-label">Nutrition</div>
        <div class="item-detail-nutr-grid">
          ${m.map(_=>`<div class="item-detail-nutr-item">
            <div class="item-detail-nutr-val">${_.val}</div>
            <div class="item-detail-nutr-lbl">${_.lbl}</div>
          </div>`).join("")}
        </div>
      </div>`)}s+='<button class="btn bs bf" onclick="closeItemDetail()" style="margin-top:8px">Close</button>',t.innerHTML=s;const c=f("itemDetailBackdrop"),u=f("itemDetailSheet");c&&c.classList.add("active"),u&&u.classList.add("active")}function kT(){const n=f("itemDetailBackdrop"),e=f("itemDetailSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}function CT(n){const e=window._enrichCtx;if(!e)return;const t=e.results[n];if(t){if(e.list==="shop"){const i=p.shop.find(s=>s.id===e.itemId);i&&Ve({...i,name:t.name,brand:t.brand||"",image:t.image||null,category:t.category||"",nutrition:t.nutrition||null,source:t.source||"search"})}else if(e.list==="inv"){const i=p.inv.find(s=>s.id===e.itemId);i&&ke({...i,name:t.name,brand:t.brand||"",image:t.image||null,category:t.category||i.category,nutrition:t.nutrition||null,source:t.source||"search"})}hr(),P(`Updated with "${t.name}" ✓`)}}function Sf(n){if(!p.hid||!n)return;const e=Date.now().toString(36)+Math.random().toString(36).slice(2,6);X(`households/${p.hid}/completed_items/${e}`,{name:n,completedAt:new Date().toISOString()}).catch(t=>console.warn("recordCompleted error:",t))}function RT(n){const e=p.shop.find(i=>i.id===n);if(!e)return;const t=!e.checked;Ve({...e,checked:t}),t&&Sf(e.name)}function PT(n,e){n.stopPropagation();const t=f("sne-"+e),i=f("sni-"+e);if(!t)return;t.classList.toggle("open")&&i&&(i.focus(),i.setSelectionRange(i.value.length,i.value.length))}function xT(n){const e=f("sni-"+n);if(!e)return;const t=p.shop.find(s=>s.id===n);if(!t)return;const i=e.value.trim();i!==(t.note||"")&&Ve({...t,note:i})}function LT(n){const e=f("sqe-"+n),t=f("sqi-"+n);if(!e)return;e.classList.toggle("open")&&t&&(t.focus(),t.select())}function DT(n,e){const t=f("sqi-"+n);if(!t)return;const i=Math.max(1,(parseInt(t.value,10)||1)+e);t.value=i,Af(n)}function Af(n){const e=f("sqi-"+n);if(!e)return;const t=p.shop.find(s=>s.id===n);if(!t)return;const i=Math.max(1,parseInt(e.value,10)||1);i!==(t.qty||1)&&Ve({...t,qty:i})}function NT(){p.aisleMode=!p.aisleMode;const n=f("aislebtn");n&&(n.style.background=p.aisleMode?"var(--ac)":"",n.style.color=p.aisleMode?"var(--bg)":""),si()}function MT(n){["list","deals"].forEach(i=>{const s=f("shtab-"+i);s&&s.classList.remove("active");const r=f("sh-"+i+"-body");r&&(r.style.display="none")});const e=f("shtab-"+n);e&&e.classList.add("active");const t=f("sh-"+n+"-body");t&&(t.style.display="block"),n==="deals"&&kf()}function OT(){const n=p.shop.filter(i=>!i.checked);if(!n.length){P("List is empty!");return}const t=`🛒 Shopping List

`+n.map(i=>{let s="• "+i.name;return(i.qty||1)>1&&(s+=" × "+i.qty),i.price&&(s+=" (~$"+i.price+")"),s}).join(`
`);navigator.share?navigator.share({title:"Shopping List",text:t}).catch(()=>{}):navigator.clipboard&&navigator.clipboard.writeText(t).then(()=>P("List copied!"))}function VT(){const n=p.shop.filter(t=>t.checked);if(!n.length){P("No completed items!");return}const e=f("atk-body");e.innerHTML=`<div style="padding:16px">
    <p style="font-size:.82rem;color:var(--mt);margin-bottom:16px">Choose where each item goes in your kitchen, then tap Add All.</p>
    ${n.map(t=>{const i=La(t.name);return`<div class="atk-item" id="atk-${t.id}" data-loc="${i}">
        <div class="atk-name">${t.name}</div>
        <div class="atk-loc">
          <button onclick="setAtkLoc('${t.id}','fridge',this)" class="${i==="fridge"?"sel":""}">🌡 Fridge</button>
          <button onclick="setAtkLoc('${t.id}','freezer',this)" class="${i==="freezer"?"sel":""}">🧊 Freeze</button>
          <button onclick="setAtkLoc('${t.id}','pantry',this)" class="${i==="pantry"?"sel":""}">🥫 Pantry</button>
        </div>
      </div>`}).join("")}
  </div>`,wt("atk")}function $T(n,e,t){const i=f("atk-"+n);i.dataset.loc=e,i.querySelectorAll(".atk-loc button").forEach(s=>s.classList.remove("sel")),t.classList.add("sel")}async function FT(){const n=p.shop.filter(i=>i.checked),e=new Date().toLocaleDateString();let t=0;for(const i of n){const s=f("atk-"+i.id);if(!s)continue;const r=s.dataset.loc||La(i.name),a=p.inv.find(u=>u.name.toLowerCase()===i.name.toLowerCase()),c=i.qty||1;await ke({id:a?a.id:"inv-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:a?a.name:i.name,qty:a?a.qty+c:c,unit:a?a.unit:"unit",location:r,category:a?a.category:Ht({name:i.name}),addedAt:a?a.addedAt:e,brand:a?a.brand:i.brand||"",expiry:a?a.expiry:null,image:a?a.image:i.image||null,source:"shopping"}),await Tr(i.id),t++}Ae("atk"),P(`${t} item${t!==1?"s":""} added to your kitchen! 🧺`)}async function UT(){const n=Zn().map(s=>{const r=s.toISOString().split("T")[0];return p.mp[r]?`${s.toLocaleDateString("en-US",{weekday:"short"})}: ${p.mp[r]}`:""}).filter(Boolean).join(", ");if(!n){P("No meals planned yet!");return}const e=p.inv.map(s=>`${s.name} (${s.qty} ${s.unit})`).join(", "),t=document.querySelector('[onclick="buildList()"]'),i=t?t.textContent:"";t&&(t.disabled=!0,t.textContent="⏳ Thinking…");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:500,messages:[{role:"user",content:`Week meals: ${n}
Already have: ${e}
List ONLY ingredients still needed. Return ONLY a bullet list, each line starting "- ". No categories, no headers, no explanation.`}]})})).json(),a=r.content&&r.content[0]&&r.content[0].text||"",c=[];if(a.split(`
`).forEach(u=>{const d=u.match(/^[-•*]\s+(.+)/);if(d){const m=d[1].replace(/\*\*/g,"").trim();m&&!p.shop.find(_=>_.name.toLowerCase()===m.toLowerCase())&&c.push({name:m,sel:!0})}}),!c.length){P("Nothing new needed — you're all stocked! ✓");return}window._bpItems=c,f("bpList").innerHTML=c.map((u,d)=>`<div id="bpitem-${d}" onclick="bpTog(${d})" style="display:flex;align-items:center;gap:12px;padding:13px 16px;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;cursor:pointer;transition:all .15s"><div id="bpck-${d}" style="width:24px;height:24px;border-radius:50%;background:var(--gn);border:2px solid var(--gn);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.8rem;color:#0c0c0a;transition:all .2s">✓</div><div style="font-size:.9rem;font-weight:500">${u.name}</div></div>`).join(""),sc(),f("buildPreviewM").classList.add("active")}catch{P("Couldn't reach Claude — check connection")}finally{t&&(t.disabled=!1,t.textContent=i)}}function jT(n){window._bpItems[n].sel=!window._bpItems[n].sel;const e=f("bpck-"+n),t=f("bpitem-"+n);window._bpItems[n].sel?(e.textContent="✓",e.style.background="var(--gn)",e.style.borderColor="var(--gn)",e.style.color="#0c0c0a",t.style.borderColor="var(--b1)"):(e.textContent="",e.style.background="transparent",e.style.borderColor="var(--b2)",t.style.borderColor="var(--b2)"),sc()}function BT(n){window._bpItems.forEach((e,t)=>{window._bpItems[t].sel=n;const i=f("bpck-"+t),s=f("bpitem-"+t);n?(i.textContent="✓",i.style.background="var(--gn)",i.style.borderColor="var(--gn)",i.style.color="#0c0c0a",s.style.borderColor="var(--b1)"):(i.textContent="",i.style.background="transparent",i.style.borderColor="var(--b2)",s.style.borderColor="var(--b2)")}),sc()}function sc(){const n=window._bpItems.filter(t=>t.sel).length,e=f("bpAddBtn");e&&(e.textContent=n?`Add ${n} item${n!==1?"s":""}  ✓`:"Nothing selected"),e&&(e.disabled=!n)}async function HT(){const n=window._bpItems.filter(e=>e.sel);if(!n.length){f("buildPreviewM").classList.remove("active");return}for(const e of n)await Ve({id:Date.now().toString()+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"meal-plan"});f("buildPreviewM").classList.remove("active"),P(`Added ${n.length} item${n.length!==1?"s":""}! 🛒`)}function kf(){const n=f("deals-zip-banner");if(!n)return;const e=p.cfg.zipcode;e?(n.innerHTML=`📍 Searching deals near <strong>${e}</strong> <span style="font-size:.72rem;color:var(--mt)">(change in Settings)</span>`,n.style.borderColor="var(--b2)"):(n.innerHTML=`⚠️ Set your zipcode in <strong style="cursor:pointer;color:var(--ac)" onclick="hideOv('');showOv('settings')">Settings</strong> to find local deals near you.`,n.style.borderColor="var(--am)")}function ua(n,e){const t=f("dealslist");if(!n||!n.length){t.innerHTML=`<div class="es"><div class="ei">🏷</div><p>No deals found for <strong>${e}</strong>.<br>Try a different search term or check back later for new circulars.</p></div>`;return}t.innerHTML="",n.forEach(i=>{const s=document.createElement("div");s.className="deal-card"+(i.onSale?" deal-match":"");const r=document.createElement("div");r.style.flex="1";const a=document.createElement("div");a.className="deal-store",a.textContent=i.store||"Store";const c=document.createElement("div");if(c.className="deal-name",c.textContent=i.name||"",i.brand||i.size){const m=document.createElement("div");m.style.cssText="font-size:.72rem;color:var(--mt);margin-top:1px",m.textContent=[i.brand,i.size].filter(Boolean).join(" · "),r.appendChild(a),r.appendChild(c),r.appendChild(m)}else r.appendChild(a),r.appendChild(c);const u=document.createElement("div");if(u.style.cssText="display:flex;align-items:baseline;gap:6px;margin-top:4px;flex-wrap:wrap",i.sale_price){const m=document.createElement("span");m.className="deal-price",m.textContent=i.sale_price,u.appendChild(m)}if(i.onSale&&i.regular){const m=document.createElement("span");m.className="deal-orig",m.textContent=i.regular,u.appendChild(m)}if(i.savings){const m=document.createElement("span");m.className="deal-badge",m.textContent="Save "+i.savings,u.appendChild(m)}r.appendChild(u);const d=document.createElement("button");d.className="btn bs bsm",d.style.cssText="align-self:center;flex-shrink:0;margin-left:8px",d.textContent="+ List",(m=>{d.onclick=()=>Cf(m)})(i.name||""),s.appendChild(r),s.appendChild(d),t.appendChild(s)})}function ha(n){const e=f("deals-stores");!e||!n||!n.length||(e.style.display="block",e.innerHTML='<div style="font-size:.72rem;color:var(--mt);font-weight:600;margin-bottom:4px">Stores with deals</div>'+n.map(t=>`<div style="font-size:.74rem;color:var(--tx2);padding:2px 0">${t.name}</div>`).join(""))}function Cf(n){const e=(n||"").replace(/&#39;/g,"'");p.shop.find(t=>t.name.toLowerCase()===e.toLowerCase())?P("Already on your list!"):(Ve({id:Date.now().toString(),name:e,qty:1,checked:!1,src:"deal"}),P(e+" added!"))}async function da(n){const e=p.cfg.zipcode;if(!e)throw new Error("Set your zipcode in Settings to search for local deals.");const t="ks-deals-"+e+"-"+n.toLowerCase().replace(/\s+/g,"_").substring(0,40),i=xe(t);if(i&&i.ts&&Date.now()-i.ts<72e5)return i;const s=await fetch("/api/deals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({zipcode:e,query:n})}),r=await s.json();if(!s.ok||r.error)throw new Error(r.message||r.error||"Deals API request failed");return tt(t,{...r,ts:Date.now()}),r}async function qT(){const n=f("dealsearch").value.trim();if(!n){P("Enter something to search");return}const e=f("dealsstatus");e.style.display="block",e.style.color="var(--mt)",e.textContent="🔍 Searching deals for "+n+" near "+(p.cfg.zipcode||"your area")+"…",f("dealslist").innerHTML="";try{const t=await da(n);if(e.style.display="none",t.message){f("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${t.message}</p></div>`;return}t.stores&&ha(t.stores),ua(t.deals,n)}catch(t){e.style.color="var(--rd)",e.textContent=t.message||"Unknown error"}}async function zT(){const n=p.shop.filter(i=>!i.checked);if(!n.length){const i=Object.values(p.mp).filter(Boolean);if(!i.length){P("Add items to your list first!");return}if(!confirm(`Your list is empty. Search deals for this week's meals?

`+i.join(", ")))return;const r=f("dealsstatus");r.style.display="block",r.textContent="Searching deals for your meal plan...",f("dealslist").innerHTML="";try{const a=await da(i.join(", "));if(r.style.display="none",a.message){f("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${a.message}</p></div>`;return}a.stores&&ha(a.stores),ua(a.deals,i.join(", "))}catch(a){r.style.color="var(--rd)",r.textContent=a.message}return}const e=f("dealsstatus"),t=n.slice(0,8).map(i=>i.name).join(", ");e.style.display="block",e.style.color="var(--mt)",e.textContent="Searching deals for: "+t+"...",f("dealslist").innerHTML="";try{const i=await da(t);if(e.style.display="none",i.message){f("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${i.message}</p></div>`;return}i.stores&&ha(i.stores),i.deals.length?ua(i.deals,t):f("dealslist").innerHTML='<div class="es"><div class="ei">🏷</div><p>No deals found for your list items.<br/>Try searching for individual items.</p></div>'}catch(i){e.style.color="var(--rd)",e.textContent=i.message}}function Ls(n){const e=xa[Ht(n)]||"🛒",t=n.image?`<img src="${n.image}" class="iimg" onerror="this.style.display='none'"/>`:`<div class="iph">${e}</div>`,i=rt(n.expiry),s=i?i.c==="expired"?" expired":i.c==="expiring"?" expiring":"":"",r=i?`<div class="etag ${i.c}">${i.l}</div>`:"";return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="inv">
    <div class="swipe-inner">
      <div class="iit${s}" onclick="swipeRowTap('${n.id}','inv')">
        <div class="sel-cb">✓</div>
        <div class="iileft">${t}<div>
          <div class="inm">${n.name}</div>
          <div class="isb">${n.brand||Ht(n)}</div>
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
  </div>`}function Or(){const n=(s,r)=>s.name.localeCompare(r.name),e=(p.it==="all"||p.it==="cat"?p.inv:p.inv.filter(s=>s.location===p.it)).slice().sort(n),t=f("isub");t&&(t.textContent=e.length+" "+({all:"items",fridge:"fridge items",freezer:"frozen items",pantry:"pantry items",cat:"items by type"}[p.it]||"items")),_f();const i=f("ibody");if(i){if(!e.length){i.innerHTML='<div class="es"><div class="ei">🧺</div><p>No items here yet.<br/>Tap Scan or Add to get started.</p></div>';return}if(p.it==="cat"){const s={};e.forEach(r=>{const a=Ht(r);s[a]||(s[a]=[]),s[a].push(r)}),i.innerHTML=Object.entries(s).sort((r,a)=>r[0].localeCompare(a[0])).map(([r,a])=>`<div class="lgrp"><div class="lgt">${xa[r]||"📦"} ${r}</div><div class="ilst">${a.map(Ls).join("")}</div></div>`).join(""),p.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(r=>{r.classList.add("selecting"),p.selectedIds.has(r.dataset.id)&&r.classList.add("selected")});return}if(p.it==="all"){const s=p.inv.filter(a=>{const c=rt(a.expiry);return c&&(c.c==="expiring"||c.c==="expired")}).sort((a,c)=>new Date(a.expiry)-new Date(c.expiry)),r=s.length?`<div class="lgrp"><div class="lgt" style="color:var(--am)">⚠️ Expiring Soon</div><div class="ilst">${s.map(Ls).join("")}</div></div>`:"";i.innerHTML=r+["fridge","freezer","pantry"].map(a=>{const c=e.filter(u=>u.location===a);return c.length?`<div class="lgrp"><div class="lgt">${Pa(a)}</div><div class="ilst">${c.map(Ls).join("")}</div></div>`:""}).join(""),p.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(a=>{a.classList.add("selecting"),p.selectedIds.has(a.dataset.id)&&a.classList.add("selected")});return}i.innerHTML=`<div class="ilst">${e.map(Ls).join("")}</div>`,p.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(s=>{s.classList.add("selecting"),p.selectedIds.has(s.dataset.id)&&s.classList.add("selected")})}}function WT(n){const e=p.inv.find(r=>r.id===n);if(!e)return;p.adjId=n;const t=xa[Ht(e)]||"🛒",i=e.image?`<img src="${e.image}" class="pimg" onerror="this.style.display='none'"/>`:`<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">${t}</div>`;let s="";e.nutrition&&(e.nutrition.calories||e.nutrition.protein)&&(s=`<div class="ngrd">${[["Cal",e.nutrition.calories],["Protein",e.nutrition.protein],["Fat",e.nutrition.fat],["Carbs",e.nutrition.carbs]].map(([r,a])=>`<div class="nb"><div class="nv">${a||"—"}</div><div class="nl">${r}</div></div>`).join("")}</div>`),f("adjbody").innerHTML=`<div class="pcard"><div class="phdr">${i}<div style="flex:1"><div class="pnm">${e.name}</div>${e.brand?`<div class="pbr">${e.brand}</div>`:""}<div style="font-size:.7rem;color:var(--mt);margin-top:2px">Added ${e.addedAt}</div>${e.source?`<span class="srcb" style="display:inline-block;margin-top:4px">${e.source}</span>`:""}</div></div>${s}<div class="frow" style="margin-top:14px"><label class="flbl">Location</label><div class="lpick"><button class="lbtn ${e.location==="fridge"?"sel":""}" onclick="updL('fridge',this)">🌡 Fridge</button><button class="lbtn ${e.location==="freezer"?"sel":""}" onclick="updL('freezer',this)">🧊 Freezer</button><button class="lbtn ${e.location==="pantry"?"sel":""}" onclick="updL('pantry',this)">🥫 Pantry</button></div></div><div class="qrow"><span class="qlbl">Quantity</span><div class="qctl"><button class="qbtn" onclick="adjQ(-1)">−</button><input class="qinp" id="adjqty" type="number" min="0" value="${e.qty}" oninput="adjQD()"/><button class="qbtn" onclick="adjQ(1)">+</button></div></div><div class="frow"><label class="flbl">Expiry Date <span class="otag">optional</span></label><input class="fd" id="adjexp" type="date" value="${e.expiry||""}" onchange="adjE()"/></div><div class="frow"><label class="flbl">Notes <span class="otag">optional</span></label><textarea class="sh-note-inp" id="adjnote" rows="2" placeholder="Brand, store, reminders…" onblur="adjNote()">${e.note||""}</textarea></div><div class="qrow"><span class="qlbl">Low stock alert at</span><div class="qctl"><button class="qbtn" onclick="adjLowThresh(-1)">−</button><input class="qinp" id="adjlowthresh" type="number" min="0" value="${e.lowStockThreshold||1}" oninput="adjLowThreshD()"/><button class="qbtn" onclick="adjLowThresh(1)">+</button></div></div></div>`,f("rembtn").onclick=()=>rc(n),wt("adj")}async function rc(n){const e=p.inv.find(t=>t.id===n);if(e){const t=rt(e.expiry);t&&(t.c==="expired"||t.c==="expiring")&&await Ov(e.name)}await Ca(n),P("Item removed"),Ae("adj")}async function GT(n,e){const t=p.inv.find(i=>i.id===p.adjId);t&&(document.querySelectorAll("#adjbody .lbtn").forEach(i=>i.classList.remove("sel")),e.classList.add("sel"),await ke({...t,location:n}))}async function KT(n){const e=p.inv.find(i=>i.id===p.adjId);if(!e)return;const t=Math.max(0,e.qty+n);if(f("adjqty").value=t,t===0){await rc(p.adjId);return}await ke({...e,qty:t})}async function QT(){const n=p.inv.find(t=>t.id===p.adjId);if(!n)return;const e=parseInt(f("adjqty").value);!isNaN(e)&&e>=0&&await ke({...n,qty:e})}async function JT(){const n=p.inv.find(e=>e.id===p.adjId);n&&await ke({...n,expiry:f("adjexp").value||null})}async function YT(){const n=p.inv.find(t=>t.id===p.adjId);if(!n)return;const e=(f("adjnote").value||"").trim();await ke({...n,note:e||null})}async function XT(n){const e=p.inv.find(i=>i.id===p.adjId);if(!e)return;const t=Math.max(0,(e.lowStockThreshold||1)+n);f("adjlowthresh").value=t,await ke({...e,lowStockThreshold:t})}async function ZT(){const n=p.inv.find(t=>t.id===p.adjId);if(!n)return;const e=parseInt(f("adjlowthresh").value);!isNaN(e)&&e>=0&&await ke({...n,lowStockThreshold:e})}function eE(n){p.it=n,document.querySelectorAll(".itab").forEach(t=>t.classList.remove("active"));const e=f("itab-"+n);e&&e.classList.add("active"),Or()}async function tE(){const n=f("man").value.trim();if(!n)return;const e=f("mac").value,t=f("mau").value.trim()||"unit",i=Math.max(1,parseInt(f("maq").value)||1),s=f("mae").value||null,r="itm-"+n.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now();await ke({id:r,barcode:r,name:n,brand:"",unit:t,qty:i,location:p.maL,category:e,image:null,source:"Manual",nutrition:null,expiry:s,addedAt:new Date().toLocaleDateString()}),f("man").value="",f("maq").value=1,f("mae").value="",f("mabtn").disabled=!0,P(`${n} added!`),Ae("madd"),Mr(r,n,"inv")}function nE(){f("mabtn").disabled=!f("man").value.trim()}function iE(n){const e=f("maq");e.value=Math.max(1,(parseInt(e.value)||1)+n)}function sE(n,e){p.maL=n,document.querySelectorAll("#ov-madd .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}async function rE(){const n=f("imptxt").value.trim();if(!n)return;let e=0,t=0,i="pantry";for(const s of n.split(`
`)){const r=s.toLowerCase();r.includes("fridge")?i="fridge":r.includes("freezer")?i="freezer":r.includes("pantry")&&(i="pantry");const a=s.match(/^\|\s*([^|]+?)\s*\|\s*(\d+(?:\.\d+)?)\s*\|\s*([^|]+?)\s*\|/),c=s.match(/^[-*]\s+(.+?):\s*(\d+(?:\.\d+)?)\s*([a-zA-Z%\/]+.*)?$/);let u,d,m;if(a?(u=a[1].trim(),d=parseFloat(a[2]),m=a[3].trim()):c&&(u=c[1].trim(),d=parseFloat(c[2]),m=(c[3]||"unit").trim()),u&&d&&u!=="Item"&&u!=="---"&&!u.startsWith("-")){const _="item-imp-"+u.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),I=p.inv.find(R=>R.id===_);await ke({id:_,barcode:_,name:u,brand:"",unit:m||"unit",qty:d,location:i,category:"Imported",image:null,source:"Imported",nutrition:null,expiry:null,addedAt:I?I.addedAt:new Date().toLocaleDateString()}),I?t++:e++}}f("imptxt").value="",P(`Imported ${e} new, updated ${t}`),Ae("import")}let ji=null,jt=null,Vr="fridge",He=null,Ro=!1,Ds="",Po=!1;const Ii=new Map,oE=300*1e3,aE=30;function cE(){const n=f("invAddBackdrop"),e=f("invAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),Vr="fridge",document.querySelectorAll("#invAddSheet .lbtn").forEach(i=>i.classList.remove("sel"));const t=f("invAddLoc-fridge");t&&t.classList.add("sel"),setTimeout(()=>{const i=f("invi");i&&(i.value="",i.focus())},150)}function ls(){const n=f("invAddBackdrop"),e=f("invAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),oc()}function lE(){ls(),window.openScanForInventory&&window.openScanForInventory()}function uE(){ls(),Rf()}function hE(n,e){Vr=n,document.querySelectorAll("#invAddSheet .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function dE(){const n=f("invAddNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=f("invAddNoteInp");t&&t.focus()}}function fE(){const n=f("invi"),e=n?n.value.trim():"";if(!e)return;let t=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||1):s&&(t=s[2].trim(),i=parseInt(s[1],10)||1);const a=f("invAddNoteInp"),c=a?a.value.trim():"",u="itm-"+t.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),d={id:u,barcode:u,name:t,brand:"",unit:"unit",qty:i,location:Vr,category:Ht({name:t}),image:null,source:"Manual",nutrition:null,expiry:null,addedAt:new Date().toLocaleDateString()};c&&(d.note=c),ke(d),P(`${t} added!`),n&&(n.value=""),a&&(a.value="");const m=f("invAddNoteWrap");m&&(m.style.display="none"),oc(),ls(),Mr(u,t,"inv")}function pE(){ji&&clearTimeout(ji);const n=f("invi"),e=n?n.value.trim():"",t=f("invSearchDropdown");if(!e||e.length<2){t&&(t.classList.remove("active"),t.innerHTML=""),jt=null;return}ji=setTimeout(()=>mE(e),350)}async function mE(n){const e=f("invSearchDropdown");if(e){e.innerHTML='<div class="search-hint">Searching…</div>',e.classList.add("active");try{const t=n.toLowerCase();let i;const s=Ii.get(t);if(s&&Date.now()-s.ts<oE)i=s.scored;else{let u=(await(await fetch(`/api/text-search?q=${encodeURIComponent(n)}`)).json()).results||[];const d=n.toLowerCase().split(/\s+/).filter(m=>m.length>=2);u=u.filter(m=>{const _=(m.name||"").toLowerCase();return d.some(I=>_.includes(I))}),i=u.map(m=>({...m,_score:Ef(m.name||"",n)})).filter(m=>m._score>=15).sort((m,_)=>_._score-m._score).slice(0,5),Ii.set(t,{scored:i,ts:Date.now()}),Ii.size>aE&&Ii.delete(Ii.keys().next().value)}if((f("invi")?f("invi").value.trim():"").toLowerCase()!==n.toLowerCase())return;if(!i.length){e.classList.remove("active"),e.innerHTML="",jt=null;return}jt=i,e.innerHTML=i.map((a,c)=>{const u=a.image?`<img src="${a.image}" class="enrich-img" alt="" onerror="this.style.display='none'"/>`:'<div class="enrich-img-ph">🛒</div>',d=a.brand?`<div class="enrich-brand">${a.brand}</div>`:"",m=a.category&&a.category!=="General"?`<div class="enrich-cat">${a.category}</div>`:"";return`<div class="enrich-row" onclick="pickInvInlineResult(${c})">
        ${u}
        <div style="flex:1;min-width:0">
          <div class="enrich-name">${a.name}</div>
          ${d}${m}
        </div>
      </div>`}).join("")}catch(t){console.warn("Inventory inline search failed:",t),e.classList.remove("active"),e.innerHTML="",jt=null}}}function gE(n){if(!jt||!jt[n])return;const e=jt[n],t=f("invAddNoteInp"),i=t?t.value.trim():"",s="itm-"+(e.name||"item").toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),r={id:s,barcode:s,name:e.name,brand:e.brand||"",unit:"unit",qty:1,location:Vr,category:e.category||Ht({name:e.name}),image:e.image||null,source:e.source||"search",nutrition:e.nutrition||null,expiry:null,addedAt:new Date().toLocaleDateString()};i&&(r.note=i),ke(r),P(`Added "${e.name}" ✓`);const a=f("invi");a&&(a.value=""),t&&(t.value="");const c=f("invAddNoteWrap");c&&(c.style.display="none"),oc(),ls()}function oc(){ji&&clearTimeout(ji),jt=null;const n=f("invSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}function yE(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=f("invAddMicOpt");e&&(e.style.display="")}function Ku(n){const e=f("inv-micstatus");e&&e.classList.toggle("visible",n)}function Rf(){if(Ro&&He){Po=!0,He.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){P("Voice input not supported");return}He=new n,He.lang="en-US",He.interimResults=!0,He.maxAlternatives=1,He.continuous=!1,Ds="",Ro=!0,Ku(!0),He.onresult=e=>{let t="";for(let s=e.resultIndex;s<e.results.length;s++){const r=e.results[s][0].transcript;e.results[s].isFinal?Ds+=r:t+=r}const i=f("invi");i&&(i.value=(Ds+t).trim())},He.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&P("Couldn't hear that — try again")},He.onend=()=>{Ro=!1,Ku(!1),He=null;let e=Ds.trim();if(!e&&Po){const r=f("invi");e=r?r.value.trim():""}if(Po=!1,!e)return;const t="itm-"+e.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),i=La(e);ke({id:t,barcode:t,name:e,brand:"",unit:"unit",qty:1,location:i,category:Ht({name:e}),image:null,source:"Voice",nutrition:null,expiry:null,addedAt:new Date().toLocaleDateString()}),P(`Added "${e}" to ${i}`);const s=f("invi");s&&(s.value=""),Mr(t,e,"inv")},He.start()}function Pf(n){return[...document.querySelectorAll("#"+n+" .tag.sel")].map(e=>e.dataset.tag)}function vE(n,e){document.querySelectorAll("#"+n+" .tag").forEach(t=>{t.classList.toggle("sel",(e||[]).includes(t.dataset.tag))})}function wE(n){n.classList.toggle("sel")}function _E(n){const e=Array.from({length:5},(i,s)=>`<span class="star${s<n.rating?" on":""}">${s<n.rating?"★":"☆"}</span>`).join(""),t=n.sourceUrl?`<a href="${n.sourceUrl}" target="_blank" onclick="event.stopPropagation()" style="font-size:.68rem;color:var(--ac);text-decoration:none;border:1px solid rgba(212,168,83,.3);border-radius:20px;padding:2px 8px;background:transparent">🔗 View original</a>`:n.source?`<span class="sbdg">${n.source}</span>`:"";return`<div class="rcd${n.favorited?" fav":""}" onclick="openER('${n.id}')"><div class="rrow"><div class="rnm">${n.name}</div><div class="rfav" onclick="event.stopPropagation();togFav('${n.id}')">${n.favorited?"❤️":"🤍"}</div></div><div class="stars">${e}</div>${n.description?`<div class="rnot" style="color:var(--tx2);margin-top:6px">${n.description.substring(0,100)}${n.description.length>100?"…":""}</div>`:""}${n.notes?`<div class="rnot">${n.notes}</div>`:""}<div class="rmeta"><span>${n.savedAt}</span>${t}</div></div>`}function bE(n){p.rt=n,document.querySelectorAll(".rtab").forEach(t=>t.classList.remove("active"));const e=f("rtab-"+n);e&&e.classList.add("active"),n==="community"?ac():$r()}function $r(){if(p.rt==="community")return;let n=[...p.recs];p.rt==="fav"?n=n.filter(i=>i.favorited):p.rt==="top"?n=n.filter(i=>i.rating>=4).sort((i,s)=>s.rating-i.rating):p.rt==="quick"?n=n.filter(i=>(i.tags||[]).includes("Quick")||(i.tags||[]).includes("Under 30 min")):p.rt==="kid"?n=n.filter(i=>(i.tags||[]).includes("Kid-Friendly")):n=n.sort((i,s)=>new Date(s.savedAt||0)-new Date(i.savedAt||0));const e=f("rsub");e&&(e.textContent=n.length+" recipe"+(n.length!==1?"s":""));const t=f("rbody");if(t){if(!n.length){t.innerHTML=`<div class="es"><div class="ei">📖</div><p>${p.rt==="fav"?"No favorites yet!":p.rt==="top"?"No 4–5 star recipes yet.":p.rt==="quick"?"No quick recipes saved yet.":p.rt==="kid"?"No kid-friendly recipes yet.":"No recipes saved yet.<br/>Mark meals as cooked or tap + Add."}</p></div>`;return}t.innerHTML=n.map(_E).join("")}}async function TE(n){const e=p.recs.find(t=>t.id===n);e&&(await Bt({...e,favorited:!e.favorited}),P(e.favorited?"Removed from favorites":"Added to favorites! ❤️"))}function EE(){f("savrecbtn").disabled=!f("rn").value.trim()}async function IE(){const n=f("rurl").value.trim();if(!n)return;const e=f("rurlstatus"),t=f("rimportbtn");e.style.display="block",e.style.color="var(--mt)",e.textContent="⏳ Fetching recipe…",t.disabled=!0;try{const s=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})})).json();if(!s.success){e.style.color="var(--rd)",e.textContent="⚠️ "+(s.error||"Couldn't import this recipe"),t.disabled=!1;return}const r=s.recipe,a=[r.ingredients||"",r.steps?`

Steps:
`+r.steps:""].join("").trim();f("rn").value=r.title||"",f("rd").value=a||r.description||"",f("rnotes").value=r.notes||"",f("rsourceurl").value=n,f("rcuisine")&&(f("rcuisine").value=r.cuisine||""),f("savrecbtn").disabled=!r.title,e.style.color="var(--gn)",e.textContent="✓ Recipe imported! Review and save."}catch{e.style.color="var(--rd)",e.textContent="⚠️ Couldn't import — try copying the recipe text manually."}t.disabled=!1}async function SE(){const n=f("rn").value.trim();if(!n)return;const e=f("rd").value.trim(),t=f("rsourceurl")?f("rsourceurl").value.trim():"",i=f("rcuisine")?f("rcuisine").value.trim():"",s=Pf("rtags");await Bt({id:"rec-"+Date.now(),name:n,rating:p.nr,favorited:!1,notes:f("rnotes").value.trim(),description:e,source:t?"Web Import":"Manual",sourceUrl:t||null,tags:s,cuisine:i,cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:!1}),f("rn").value="",f("rnotes").value="",f("rd").value="",f("rsourceurl").value="",f("rurl").value="",f("rcuisine")&&(f("rcuisine").value=""),vE("rtags",[]),p.nr=0,f("savrecbtn").disabled=!0,Mi("rstars",0),P("Recipe saved! 📖"),Ae("arec")}function AE(n){const e=p.recs.find(a=>a.id===n);if(!e)return;p.eid=n;const t=e.rating||0,i=Array.from({length:5},(a,c)=>`<span class="star${c<t?" on":""}" onclick="setStar(${c+1},'e')">${c<t?"★":"☆"}</span>`).join(""),s=e.sourceUrl?`<div class="frow"><label class="flbl">Original</label><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);word-break:break-all">${e.sourceUrl}</a></div>`:"",r=`<div class="frow"><label class="flbl">Tags</label><div class="tags" id="etags">
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
    <div class="frow"><label class="flbl">Rating</label><div class="sinp" id="estars">${i}</div></div>
    ${r}
    <div class="frow"><label class="flbl">Description / Ingredients</label><textarea class="fta" id="erd" style="min-height:140px">${e.description||""}</textarea></div>
    <div class="frow"><label class="flbl">Notes</label><input class="fi" id="erno" value="${e.notes||""}"/></div>
    ${s}
    <div class="frow"><label class="flbl">Cuisine <span class="otag">optional</span></label><input class="fi" id="ecuis" value="${e.cuisine||""}" placeholder="e.g. Mediterranean, Turkish, Asian…"/></div>
    <div style="display:flex;align-items:center;gap:10px;margin:12px 0"><span style="font-size:.88rem">Favorite</span><div class="tog${e.favorited?" on":""}" id="etog" onclick="this.classList.toggle('on')"></div></div>
    <div style="display:flex;align-items:center;gap:10px;margin:6px 0 14px"><span style="font-size:.88rem">Share publicly</span><div class="tog${e.isPublic?" on":""}" id="epub" onclick="togglePublic('${e.id}');this.classList.toggle('on')"></div><span style="font-size:.72rem;color:var(--mt)">Visible to the community</span></div>
    <div class="brow"><button class="btn bd" style="flex:1" onclick="delER()">Delete</button><button class="btn bp" style="flex:2" onclick="updR()">Save</button></div>`,wt("erec")}async function kE(){const n=p.recs.find(s=>s.id===p.eid);if(!n)return;const e=[...document.querySelectorAll("#estars .star")].filter(s=>s.classList.contains("on")).length,t=Pf("etags"),i=f("ecuis")?f("ecuis").value.trim():n.cuisine||"";await Bt({...n,name:f("ern").value.trim(),rating:e,description:f("erd").value.trim(),notes:f("erno").value.trim(),favorited:f("etog").classList.contains("on"),tags:t,cuisine:i}),P("Recipe updated!"),Ae("erec")}async function CE(){confirm("Delete this recipe?")&&(await $v(p.eid),P("Deleted"),Ae("erec"))}async function RE(n){const e=f("erd");if(!e)return;const t=e.value.trim();if(!t){P("No ingredients to scale");return}const i=f("scaleStatus");i.style.display="block",i.style.color="var(--mt)",i.textContent=`⏳ Scaling to ${n}× with Claude…`;try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Scale ALL ingredient quantities in this recipe by ${n}x. Return ONLY the updated recipe text with scaled quantities. Keep the same format. Do not add any explanation.

${t}`}]})})).json(),a=r.content&&r.content[0]&&r.content[0].text||"";a?(e.value=a.trim(),i.style.color="var(--gn)",i.textContent=`✓ Scaled to ${n}×`):(i.style.color="var(--rd)",i.textContent="Couldn't scale — try again")}catch{i.style.color="var(--rd)",i.textContent="Couldn't reach Claude — check connection"}}async function PE(){const n=f("rsub");n&&(n.textContent="Thinking…");const e=p.inv.map(s=>`${s.name} (${s.qty} ${s.unit})`).join(", "),t=p.recs.map(s=>s.name).join(", "),i=[p.cfg.nopork?"no pork":null,p.cfg.noshellfish?"no shellfish":null,p.cfg.vegetarian?"vegetarian":null,p.cfg.glutenfree?"gluten-free":null,p.cfg.other||null].filter(Boolean).join(", ");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Based on this exact inventory: ${e}
Restrictions: ${i||"none"}
Saved recipes: ${t||"none"}
Suggest 5 complete meals I can make RIGHT NOW with no extra shopping. Be specific with names. Format as a numbered list.`}]})})).json(),a=r.content&&r.content[0]&&r.content[0].text||"",c=f("rbody");c&&(c.innerHTML=`<div style="background:var(--card);border:1px solid var(--ac);border-radius:14px;padding:16px;margin-bottom:12px"><div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ac);margin-bottom:10px">🔍 Make right now — no shopping needed</div><div style="font-size:.88rem;line-height:1.8;color:var(--tx2)">${Jv(a)}</div><button class="btn bs bsm" style="margin-top:12px;width:100%" onclick="setRT('all')">← Back to recipes</button></div>`),n&&(n.textContent="Based on your inventory")}catch{n&&(n.textContent="Couldn't reach Claude")}}async function xE(n){const e=p.recs.find(t=>t.id===n);if(!e||!e.description){P("No ingredients listed");return}P("Parsing ingredients…");try{const t=p.inv.map(u=>u.name.toLowerCase()),s=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:400,messages:[{role:"user",content:`Extract a list of ingredient names from this recipe description. Return ONLY a JSON array of strings, no markdown, no quantities, just clean ingredient names. Example: ["chicken","garlic","olive oil"]

Recipe: ${e.description}`}]})})).json(),r=(s.content&&s.content[0]&&s.content[0].text||"").replace(/```json|```/g,"").trim(),c=JSON.parse(r).filter(u=>!t.some(d=>d.includes(u.toLowerCase())||u.toLowerCase().includes(d)));if(!c.length){P("All ingredients already in pantry ✓");return}for(const u of c)await Ve({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:u,qty:1,checked:!1,src:"recipe"});P(`Added ${c.length} ingredient${c.length!==1?"s":""} to shopping list 🛒`),Ae("erec"),window.showScreen("shopping")}catch{P("Couldn't parse ingredients")}}function LE(n,e){p.nr=n,e==="r"?Mi("rstars",n):e==="c"?Mi("cstars",n):e==="e"&&Mi("estars",n)}async function DE(n){const e=p.recs.find(r=>r.id===n);if(!e)return;const t=!e.isPublic,i=De(),s=(i==null?void 0:i.displayName)||localStorage.getItem("ks-who")||"Anonymous";t?(await Fv(e,s,p.hid),P("Recipe shared with the community!")):(await Uv(e.id),P("Recipe removed from community")),await Bt({...e,isPublic:t})}async function ac(){const n=f("rbody");if(n){n.innerHTML='<div class="es"><div class="ei">🌍</div><p>Loading community recipes…</p></div>';try{p.comRecs=await jv(),cc()}catch(e){console.error("loadCommunity:",e),n.innerHTML=`<div class="es"><div class="ei">⚠️</div><p>Couldn't load community recipes.</p></div>`}}}function NE(n){p.comCuisine=n,cc()}function ME(n){p.comSearch=n,cc()}function cc(){const n=f("rbody");if(!n)return;let e=[...p.comRecs];if(p.comCuisine&&p.comCuisine!=="all"&&(e=e.filter(s=>(s.cuisine||"").toLowerCase().includes(p.comCuisine.toLowerCase())||(s.tags||[]).some(r=>r.toLowerCase().includes(p.comCuisine.toLowerCase())))),p.comSearch){const s=p.comSearch.toLowerCase();e=e.filter(r=>(r.title||"").toLowerCase().includes(s)||(r.tags||[]).join(" ").toLowerCase().includes(s)||(r.cuisine||"").toLowerCase().includes(s)||(r.authorName||"").toLowerCase().includes(s))}e.sort((s,r)=>new Date(r.createdAt||0)-new Date(s.createdAt||0));const t=f("rsub");t&&(t.textContent=e.length+" community recipe"+(e.length!==1?"s":""));let i=`<div style="margin-bottom:14px">
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
  </div>`;if(!e.length){i+=`<div class="es"><div class="ei">🌍</div><p>${p.comSearch||p.comCuisine!=="all"?"No recipes match your filters.":"No community recipes yet. Be the first to share!"}</p></div>`,n.innerHTML=i;return}e.forEach(s=>{const r=(s.tags||[]).map(c=>`<span class="com-tag">${c}</span>`).join(""),a=s.createdAt?new Date(s.createdAt).toLocaleDateString():"";i+=`<div class="rcd com-rcd" onclick="openComRecipe('${s.id}')">
      <div class="rrow">
        <div class="rnm">${s.title||"Untitled"}</div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <span style="font-size:.78rem;color:var(--rd)">❤️ ${s.likes||0}</span>
        </div>
      </div>
      ${s.cuisine?`<div style="font-size:.72rem;color:var(--ac);font-weight:600;margin-top:4px">${s.cuisine}</div>`:""}
      ${s.ingredients?`<div class="rnot" style="color:var(--tx2);margin-top:6px">${(s.ingredients||"").substring(0,100)}${(s.ingredients||"").length>100?"…":""}</div>`:""}
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${r}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${s.authorName||"Anonymous"} · ${a}</div>
      </div>
    </div>`}),n.innerHTML=i}async function OE(n){const e=p.comRecs.find(u=>u.id===n);if(!e)return;await zv(n)?p.myLikes.add(n):p.myLikes.delete(n);let i=[];try{i=await qv(n)}catch{}i.sort((u,d)=>new Date(u.createdAt||0)-new Date(d.createdAt||0));const s=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`;let r=i.map(u=>`<div style="padding:10px 0;border-bottom:1px solid var(--b1)">
    <div style="display:flex;justify-content:space-between;align-items:center">
      <span style="font-size:.78rem;font-weight:600">${u.authorName||"Anonymous"}</span>
      <span style="font-size:.68rem;color:var(--mt)">${u.createdAt?new Date(u.createdAt).toLocaleDateString():""}</span>
    </div>
    <div style="font-size:.84rem;color:var(--tx2);margin-top:4px;line-height:1.5">${(u.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>
  </div>`).join("");const a=(e.tags||[]).map(u=>`<span class="com-tag">${u}</span>`).join(""),c=p.myLikes.has(n);f("erecbody").innerHTML=`
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
      <div class="flbl" style="margin-bottom:10px">Comments (${i.length})</div>
      <div id="com-comments">${r||'<div style="font-size:.82rem;color:var(--mt);padding:8px 0">No comments yet.</div>'}</div>
      <div style="display:flex;gap:8px;margin-top:12px">
        <input class="fi" id="com-cmt-input" placeholder="Add a comment…" style="flex:1" onkeydown="if(event.key==='Enter')addComComment('${n}')"/>
        <button class="btn bp bsm" onclick="addComComment('${n}')">Post</button>
      </div>
    </div>

    <div style="margin-top:16px;padding:12px;background:var(--card);border:1px solid var(--b1);border-radius:12px">
      <div style="font-size:.72rem;color:var(--mt);margin-bottom:6px">Share link (viewable without sign-in)</div>
      <div style="font-size:.8rem;color:var(--ac);word-break:break-all;cursor:pointer" onclick="navigator.clipboard.writeText('${s}');showNotif('Link copied!')">${s}</div>
    </div>`,wt("erec")}async function VE(n){if(!De()){P("Sign in to like recipes");return}const t=p.myLikes.has(n);try{await Bv(n,t),t?p.myLikes.delete(n):p.myLikes.add(n);const i=p.comRecs.find(r=>r.id===n);i&&(i.likes=(i.likes||0)+(t?-1:1));const s=f("com-like-btn");if(s){const r=p.myLikes.has(n);s.className=`btn ${r?"bp":"bs"} bsm`,s.innerHTML=`${r?"❤️":"🤍"} ${(i==null?void 0:i.likes)||0} Like${((i==null?void 0:i.likes)||0)!==1?"s":""}`}P(t?"Like removed":"Liked!")}catch(i){console.error("likeComRecipe:",i),P("Couldn't update like")}}async function $E(n){if(!De()){P("Sign in to save recipes");return}const t=p.comRecs.find(i=>i.id===n);if(t)try{await Wv(t),P("Recipe saved to your kitchen! 📖"),Ae("erec")}catch(i){console.error("saveComToKitchen:",i),P("Couldn't save recipe")}}async function FE(n){var r;const e=De();if(!e){P("Sign in to comment");return}const t=f("com-cmt-input"),i=(r=t==null?void 0:t.value)==null?void 0:r.trim();if(!i)return;const s=e.displayName||localStorage.getItem("ks-who")||"Anonymous";try{const a=await Hv(n,i,s);t.value="";const c=f("com-comments");c&&a&&(c.querySelector("div[style*='color:var(--mt)']")&&!c.querySelector("div[style*='border-bottom']")&&(c.innerHTML=""),c.innerHTML+=`<div style="padding:10px 0;border-bottom:1px solid var(--b1)">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:.78rem;font-weight:600">${a.authorName}</span>
          <span style="font-size:.68rem;color:var(--mt)">${new Date().toLocaleDateString()}</span>
        </div>
        <div style="font-size:.84rem;color:var(--tx2);margin-top:4px;line-height:1.5">${a.text.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>
      </div>`),P("Comment posted!")}catch(a){console.error("addComComment:",a),P("Couldn't post comment")}}async function UE(n){const e=p.comRecs.find(s=>s.id===n),t=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`,i=(e==null?void 0:e.title)||"Recipe";if(navigator.share)try{await navigator.share({title:i,text:`Check out this recipe: ${i}`,url:t});return}catch{}try{await navigator.clipboard.writeText(t),P("Link copied!")}catch{P("Couldn't copy link")}}function jE(){const n=p.cookLog,e=p.wasteLog;let t=0;for(let j=0;j<60;j++){const G=new Date;G.setDate(G.getDate()-j);const ee=G.toISOString().split("T")[0];if(n.find(te=>te.date===ee))t++;else if(j>0)break}const i=f("ins-streak-num");i&&(i.textContent=t);const s=f("ins-total-cooked");s&&(s.textContent=n.length);const r=f("ins-waste-count");r&&(r.textContent=e.length);const a=f("ins-sub");a&&(a.textContent=n.length?" "+n.length+" meals cooked":"Your kitchen at a glance");const c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],u=f("ins-week");if(u){const j=Zn().map(G=>{const ee=G.toISOString().split("T")[0],te=p.mp[ee],b=ee===xt();return`<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--b1)${b?";background:var(--acd);margin:0 -4px;padding:7px 4px;border-radius:6px":""}">
        <div style="font-size:.72rem;color:var(--mt);min-width:30px;font-weight:${b?"600":"400"}">${c[G.getDay()]}</div>
        <div style="font-size:.72rem;color:var(--mt);min-width:20px">${G.getDate()}</div>
        <div style="font-size:.84rem;color:${te?"var(--tx)":"var(--mt)"};font-style:${te?"normal":"italic"};flex:1">${te||"—"}</div>
        ${b?"<div style='font-size:.66rem;color:var(--ac);font-weight:600'>TODAY</div>":""}
      </div>`}).join("");u.innerHTML=j}const d=n.slice(0,7).map(j=>j.name),m=f("ins-variety-nudge"),_=f("ins-variety-msg");if(m&&d.length>=3){const j={};d.forEach(y=>{const w=y.toLowerCase();j[w]=(j[w]||0)+1});const G=Object.entries(j).filter(([,y])=>y>=3),ee=Object.values(p.mp).filter(Boolean),te=ee.some(y=>/curry|dal|rice|bengali|biryani|hilsa|mustard|lentil/i.test(y)),b=ee.some(y=>/kebab|köfte|pide|börek|meze|turkish|pilav|lahmacun/i.test(y));G.length?(m.style.display="block",_.textContent=`You've cooked "${G[0][0]}" ${G[0][1]} times this week. Time to mix it up?`):!te&&ee.length>=3?(m.style.display="block",_.textContent="No Bangladeshi dishes this week — how about a dal, biryani, or fish curry?"):!b&&ee.length>=3?(m.style.display="block",_.textContent="No Turkish dishes planned — köfte, mercimek çorbası, or a pilav would be great this week!"):m.style.display="none"}else m&&(m.style.display="none");const I={};n.forEach(j=>{I[j.name]=(I[j.name]||0)+1});const R=Object.entries(I).sort((j,G)=>G[1]-j[1]).slice(0,6),N=R[0]?R[0][1]:1,$=f("ins-cooked");if($)if(!R.length)$.innerHTML='<div class="es" style="padding:16px"><p>Cook some meals to see stats!</p></div>';else{const j=["🥇","🥈","🥉","4️⃣","5️⃣","6️⃣"];$.innerHTML=R.map(([G,ee],te)=>`<div class="ibar-row"><div style="font-size:.9rem;margin-right:4px">${j[te]||""}</div><div class="ibar-lbl">${G}</div><div class="ibar-track"><div class="ibar-fill" style="width:${Math.round(ee/N*100)}%"></div></div><div class="ibar-val">${ee}×</div></div>`).join("")}const M={Bangladeshi:"#e8a44a",Turkish:"#c0392b",Mediterranean:"#27ae60",American:"#3498db",Italian:"#e74c3c",Asian:"#9b59b6",Other:"#95a5a6"},W=f("ins-cuisine");if(W&&n.length){const j=b=>{const y=b.toLowerCase();return/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(y)?"Bangladeshi":/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner|iskender/i.test(y)?"Turkish":/pasta|pizza|risotto|gnocchi|italian/i.test(y)?"Italian":/tacos|burrito|enchilada|mexican/i.test(y)?"Mexican":/sushi|ramen|stir.?fry|fried rice|asian|chinese|thai|japanese/i.test(y)?"Asian":/burger|sandwich|mac|bbq|american/i.test(y)?"American":"Other"},G={};n.slice(0,20).forEach(b=>{const y=j(b.name);G[y]=(G[y]||0)+1});const ee=Object.values(G).reduce((b,y)=>b+y,0),te=Object.entries(G).sort((b,y)=>y[1]-b[1]);W.innerHTML=te.map(([b,y])=>{const w=Math.round(y/ee*100),E=M[b]||"#95a5a6";return`<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span style="font-size:.82rem;font-weight:500">${b}</span><span style="font-size:.74rem;color:var(--mt)">${y} meals · ${w}%</span></div><div style="height:8px;background:var(--b1);border-radius:4px;overflow:hidden"><div style="height:100%;width:${w}%;background:${E};border-radius:4px;transition:width .6s ease"></div></div></div>`}).join("")||'<div class="es" style="padding:16px"><p>Cook more meals to see your cuisine breakdown.</p></div>'}const Z=f("ins-waste");Z&&(Z.innerHTML=e.length?e.slice(0,10).map(j=>`<div class="waste-item"><span style="font-size:.86rem">${j.name}</span><span style="font-size:.74rem;color:var(--rd)">${j.date}</span></div>`).join(""):'<div class="es" style="padding:16px"><p>Nothing wasted yet — great job! 🎉</p></div>')}function BE(){const n=["fridge","freezer","pantry"].map(a=>{const c=p.inv.filter(u=>u.location===a);return c.length?Pa(a).toUpperCase()+": "+c.map(u=>`${u.name} (${u.qty} ${u.unit})`).join(", "):""}).filter(Boolean).join(`
`),e=p.inv.filter(a=>{const c=rt(a.expiry);return c&&(c.c==="expiring"||c.c==="expired")}).map(a=>{const c=rt(a.expiry);return`${a.name} (${c.l})`}).join(", "),t=Zn().map(a=>{const c=a.toISOString().split("T")[0];return p.mp[c]?`${a.toLocaleDateString("en-US",{weekday:"short"})}: ${p.mp[c]}`:""}).filter(Boolean).join(", "),i=p.recs.filter(a=>a.favorited||a.rating>=4).map(a=>`${a.name}${a.rating?` (${a.rating}★)`:""}`).join(", "),s=[p.cfg.nopork?"no pork":null,p.cfg.noshellfish?"no shellfish":null,p.cfg.vegetarian?"vegetarian":null,p.cfg.glutenfree?"gluten-free":null,p.cfg.other].filter(Boolean).join(", "),r=p.cookLog.slice(0,7).map(a=>a.name).join(", ");return`You are a helpful kitchen assistant for a family in Edison NJ.
INVENTORY:
${n||"Empty."}
${e?"EXPIRING SOON: "+e:""}
${t?"MEAL PLAN: "+t:""}
${i?"FAVOURITE RECIPES: "+i:""}
${r?"RECENTLY COOKED (avoid repeating): "+r:""}
HOUSEHOLD: ${p.cfg.name}, Adults: ${p.cfg.adults}, Kids: ${p.cfg.kids}, Restrictions: ${s||"none"}, Cuisines: ${p.cfg.cuisines}, Cook time: ${p.cfg.cookTime}.
CULTURAL BACKGROUND: Bushra is Bangladeshi, Bora is Turkish — authentically lean toward these cuisines (Bengali spices, mustard oil, dal, hilsa-style fish; Turkish kebabs, meze, börek, yogurt sauces, lentil soups). Suggest these when inventory allows.
Be concise. Use what they have. Suggest variety — lean toward Bangladeshi and Turkish — avoid repeating recent meals. Format grocery lists as bullet points starting "- ".

RECIPE FORMAT RULE: When suggesting recipes (any time you provide a recipe with ingredients/steps), wrap EACH recipe in :::RECIPE::: and :::END::: markers with a JSON object containing: title, ingredients (newline-separated list), steps (numbered newline-separated list), cuisine, cookTime, servings.
Example:
:::RECIPE:::
{"title":"Dal Tadka","ingredients":"1 cup red lentils\\n2 tomatoes, chopped\\n1 tsp cumin seeds\\n1 tsp turmeric","steps":"1. Wash and boil lentils until soft\\n2. Heat oil, add cumin seeds\\n3. Add tomatoes, cook until soft\\n4. Combine with lentils and simmer","cuisine":"Bangladeshi","cookTime":"30 min","servings":4}
:::END:::
Always use this format so the app can offer a one-tap save button. You can include normal text before/after recipe blocks.`}function HE(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<li>$1</li>").replace(/^[-•]\s+(.+)$/gm,"<li>$1</li>").replace(/\n/g,"<br>")}async function xf(){const n=f("chi"),e=n.value.trim();if(!e)return;n.value="",Lf(n),p.chat.push({role:"user",content:e}),xo("user",e);const t=f("csb");t&&(t.disabled=!0);const i="thinking-"+Date.now(),s=f("chmsgs");s.innerHTML+=`<div class="cb asst thinking" id="${i}">Thinking…</div>`,s.scrollTop=s.scrollHeight;try{const a=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:800,system:BE(),messages:p.chat.map(d=>({role:d.role,content:d.content}))})})).json(),c=a.content&&a.content[0]&&a.content[0].text||"Sorry, I couldn't process that.",u=f(i);u&&u.remove(),p.chat.push({role:"assistant",content:c}),xo("assistant",c)}catch{const a=f(i);a&&a.remove(),xo("assistant","Sorry, I couldn't reach Claude. Check your connection and try again.")}t&&(t.disabled=!1)}function qE(n){const e=[];return{cleanText:n.replace(/:::RECIPE:::\s*([\s\S]*?)\s*:::END:::/g,(i,s)=>{try{const r=JSON.parse(s.trim());r.title&&e.push(r)}catch{}return""}).trim(),recipes:e}}function zE(n){const e=JSON.stringify(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;"),t=(n.ingredients||"").split(`
`).slice(0,3).join(", ");return`<div style="background:var(--card);border:1.5px solid var(--ac);border-radius:14px;padding:16px;margin:10px 0">
    <div style="font-family:'Fraunces',serif;font-size:1.1rem;font-weight:300;color:var(--ac);margin-bottom:6px">${(n.title||"").replace(/</g,"&lt;")}</div>
    ${n.cuisine?`<div style="font-size:.72rem;color:var(--mt);margin-bottom:6px">${n.cuisine}${n.cookTime?" · "+n.cookTime:""}${n.servings?" · "+n.servings+" servings":""}</div>`:""}
    ${t?`<div style="font-size:.8rem;color:var(--tx2);line-height:1.5;margin-bottom:10px">${t.replace(/</g,"&lt;")}…</div>`:""}
    <button class="btn bp bsm" onclick="importChatRecipe(this)" data-recipe="${e}">📖 Add to My Recipes</button>
  </div>`}async function WE(n){try{const e=JSON.parse(n.dataset.recipe),t="rec-"+Date.now(),i=[e.ingredients||"",e.steps?`

Steps:
`+e.steps:""].join("").trim();await Bt({id:t,name:e.title||"Untitled Recipe",rating:0,favorited:!1,notes:"",description:i,source:"Claude Chat",sourceUrl:null,tags:[],cuisine:e.cuisine||"",cookTime:e.cookTime||"",servings:e.servings||"",cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:!1}),n.textContent="✓ Saved!",n.disabled=!0,n.style.background="var(--gn)",P("Recipe saved! 📖")}catch{P("Couldn't save recipe")}}function xo(n,e){const t=f("chmsgs");if(t){if(n==="assistant"){const{cleanText:i,recipes:s}=qE(e);if(i){const r=document.createElement("div");r.className="cb asst",r.innerHTML=HE(i),t.appendChild(r)}s.forEach(r=>{const a=document.createElement("div");a.style.maxWidth="88%",a.style.alignSelf="flex-start",a.innerHTML=zE(r),t.appendChild(a)})}else{const i=document.createElement("div");i.className="cb user",i.innerHTML=e,t.appendChild(i)}t.scrollTop=t.scrollHeight}}function GE(n){const e=f("chi");e&&(e.value=n.textContent),xf()}function KE(){p.chat=[];const n=f("chmsgs");n&&(n.innerHTML='<div class="cb asst">Hey! 👋 I know your full inventory, meal plan, and saved recipes. What do you need?</div>')}function Lf(n){n.style.height="auto",n.style.height=Math.min(n.scrollHeight,120)+"px"}let Ki=!1,Ws=!1,Gs=null;function lc(){if(Ki)return;const n=f("scanner-video");if(!n)return;const e=f("scan-status");e&&(e.textContent="Starting camera…",e.style.display="block"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{QE(n,e)})})}function QE(n,e){Quagga.init({inputStream:{name:"Live",type:"LiveStream",target:n,constraints:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}},locator:{patchSize:"medium",halfSample:!0},decoder:{readers:["ean_reader","ean_8_reader","upc_reader","upc_e_reader","code_128_reader","code_39_reader"]},locate:!0,frequency:10},function(t){if(t){console.error("Scanner init error:",t);const i=f("scerr");i&&(i.textContent="⚠️ Could not access camera. Try entering the barcode manually.",i.style.display="block"),e&&(e.style.display="none");return}JE(n),Quagga.start(),Ki=!0,e&&(e.textContent="Scanning…"),setTimeout(()=>YE(n),2e3)}),Quagga.onDetected(Df)}function JE(n){n.querySelectorAll("video").forEach(e=>{e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,e.play().catch(()=>{})})}async function YE(n){if(!Ki)return;const e=n.querySelector("video");if(!(!e||e.videoWidth>0)){console.warn("Camera feed appears black — retrying with manual getUserMedia");try{const t=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}});Gs=t,e.srcObject&&e.srcObject.getTracks().forEach(i=>i.stop()),e.srcObject=t,e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,await e.play()}catch(t){console.error("Manual camera retry failed:",t)}}}function uc(){if(Ki){try{Quagga.stop()}catch{}Quagga.offDetected(Df),Gs&&(Gs.getTracks().forEach(n=>n.stop()),Gs=null),Ki=!1,Ws=!1}}async function Df(n){var s,r;if(Ws)return;const e=n&&n.codeResult&&n.codeResult.code;if(!e)return;const t=((r=(s=n.codeResult.decodedCodes)==null?void 0:s.filter(a=>a.error!==void 0))==null?void 0:r.map(a=>a.error))||[];if(!((t.length?t.reduce((a,c)=>a+c,0)/t.length:1)>.25)){Ws=!0,XE(),uc(),f("scanbody").style.display="none",f("scspin").style.display="block",f("scst").textContent="Found "+e+" — looking up…";try{const a=await Nf(e);p.cp=a,f("aqty").value=1,f("aexp").value="",hc("fridge",f("rl-fridge")),Mf(a)}catch{const a=f("scerr");a.textContent="⚠️ Lookup failed. Check your connection or enter the barcode manually.",a.style.display="block"}f("scanbody").style.display="block",f("scspin").style.display="none",Ws=!1}}function XE(){const n=f("scan-success");n&&(n.style.display="flex",n.style.animation="none",n.offsetHeight,n.style.animation="",setTimeout(()=>{n.style.display="none"},500))}function ZE(){Ae("result"),wt("scan"),f("scerr").style.display="none",lc()}function eI(){p.scanDestList=!0,wt("scan");const n=f("scanovttl");n&&(n.textContent="Scan → Shopping List");const e=f("scan-dest-hint");e&&(e.textContent="Running low? Scan to add to your shopping list."),f("scerr").style.display="none",lc()}function tI(){p.scanDestList=!1,wt("scan");const n=f("scanovttl");n&&(n.textContent="Scan Barcode");const e=f("scan-dest-hint");e&&(e.textContent="Scan a barcode to add to your pantry or shopping list."),f("scerr").style.display="none",lc()}function nI(){const n=f("scanNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=f("scanNoteInp");t&&t.focus()}}function iI(){if(!p.cp)return;const n=p.cp.notFound?"Barcode "+p.cp.barcode:p.cp.name,e=f("scanNoteInp"),t=e?e.value.trim():"",i=parseInt(f("aqty").value)||1,s={id:Date.now().toString(),name:n,qty:i,checked:!1,src:"scan"};p.cp.brand&&(s.brand=p.cp.brand),p.cp.image&&(s.image=p.cp.image),t&&(s.note=t),Ve(s),P("Added to list: "+n),Ae("result"),Ae("scan"),p.scanDestList=!1,e&&(e.value="");const r=f("scanNoteWrap");r&&(r.style.display="none"),window.showScreen("shopping")}function sI(){const n=f("mentry");n.style.display=n.style.display==="none"?"block":"none"}async function rI(){const n=f("meinp").value.trim();if(!n)return;uc(),f("scanbody").style.display="none",f("scspin").style.display="block",f("scst").textContent="Looking up…";const e=await Nf(n);p.cp=e,f("aqty").value=1,f("aexp").value="",hc("fridge",f("rl-fridge")),f("meinp").value="",Mf(e),f("scanbody").style.display="block",f("scspin").style.display="none"}async function Nf(n){try{const e=await fetch("/api/barcode?code="+encodeURIComponent(n));if(e.ok){const t=await e.json();if(t.found&&t.product)return{...t.product,notFound:!1}}}catch{}return{barcode:n,name:"",brand:"",quantity:"",category:"General",image:null,source:null,description:"",notFound:!0}}function oI(n,e){switch(n){case"Open Food Facts":return`https://world.openfoodfacts.org/product/${e}`;case"Open Beauty Facts":return`https://world.openbeautyfacts.org/product/${e}`;case"Open Pet Food Facts":return`https://world.openpetfoodfacts.org/product/${e}`;case"UPC Item DB":return`https://www.upcitemdb.com/upc/${e}`;case"Edamam":return"https://www.edamam.com/food-database/en/";default:return"#"}}function Mf(n){Ae("scan"),f("resttl").textContent=n.notFound?"Not Found":"Product Found ✓",f("aunit").value=n.quantity||"unit";let e="";if(n.notFound)e=`<div class="nfb">⚠️ Barcode <code>${n.barcode}</code> not found in any database. Enter name:<input class="fi" id="mnm" placeholder="Product name (required)" oninput="valAdd()" style="margin-top:10px"/></div>`,setTimeout(()=>f("addbtn").disabled=!0,0);else{const t=n.image?`<img src="${n.image}" class="pimg" onerror="this.style.display='none'"/>`:'<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">🛒</div>';let i="";n.nutrition&&(n.nutrition.calories||n.nutrition.protein)&&(i=`<div class="ngrd">${[["Cal",n.nutrition.calories],["Protein",n.nutrition.protein],["Fat",n.nutrition.fat],["Carbs",n.nutrition.carbs]].map(([a,c])=>`<div class="nb"><div class="nv">${c||"—"}</div><div class="nl">${a}</div></div>`).join("")}</div>`);const s=n.description?`<div class="pdsc">${n.description}</div>`:"",r=n.source?`<a href="${oI(n.source,n.barcode)}" target="_blank" rel="noopener" class="srcb" style="text-decoration:none">${n.source} ↗</a>`:"";e=`<div class="pcard"><div class="phdr">${t}<div style="flex:1"><div class="pnm">${n.name}</div>${n.brand?`<div class="pbr">${n.brand}</div>`:""}<div class="pbc">${n.barcode}</div><span class="bdg">${n.category}</span>${r}</div></div>${s}${i}</div>`,setTimeout(()=>f("addbtn").disabled=!1,0)}f("resbody").innerHTML=e,wt("result")}function hc(n,e){p.selR=n,document.querySelectorAll("#ov-result .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function aI(){const n=f("mnm");f("addbtn").disabled=!(n&&n.value.trim())}async function cI(){if(!p.cp)return;const n=f("mnm"),e=p.cp.notFound?n&&n.value.trim()||"":p.cp.name;if(!e)return;const t=f("aunit").value.trim()||"unit",i=Math.max(1,parseInt(f("aqty").value)||1),s=f("aexp").value||null,r="item-"+p.cp.barcode.replace(/\W/g,"-"),a=p.inv.find(c=>c.id===r);await ke({id:r,barcode:p.cp.barcode,name:e,brand:p.cp.brand||"",unit:t,qty:a?a.qty+i:i,location:p.selR,category:p.cp.category||"General",image:p.cp.image||null,source:p.cp.source||null,nutrition:p.cp.nutrition||null,expiry:s,addedAt:a?a.addedAt:new Date().toLocaleDateString()}),P(a?`+${i} added to ${e}`:`${e} added!`),p.cp=null,Ae("result")}function lI(n){const e=f("aqty");e.value=Math.max(1,(parseInt(e.value)||1)+n)}let In=null,Qu=0,We=null;function uI(){document.addEventListener("touchstart",n=>{const e=n.target.closest(".swipe-inner");!e||!e.closest(".swipe-wrap")||p.selectMode||(In=e,Qu=n.touches[0].clientX,e.classList.add("swiping"))},{passive:!0}),document.addEventListener("touchmove",n=>{if(!In)return;const e=n.touches[0].clientX-Qu,t=Math.max(-80,Math.min(0,e));In.style.transform=`translateX(${t}px)`,Math.abs(e)>8&&n.preventDefault()},{passive:!1}),document.addEventListener("touchend",()=>{if(!In)return;const n=In,e=n.closest(".swipe-wrap");n.classList.remove("swiping"),(parseFloat(n.style.transform.replace("translateX(",""))||0)<-50?(n.style.transform="translateX(-80px)",e==null||e.classList.add("open"),We&&We!==e&&fa(We),We=e):(n.style.transform="translateX(0)",e==null||e.classList.remove("open"),We===e&&(We=null)),In=null}),document.addEventListener("touchstart",n=>{if(!We||n.target.closest(".swipe-del"))return;const e=n.target.closest(".swipe-inner");e&&e.closest(".swipe-wrap")===We||(fa(We),We=null)},{passive:!0})}function fa(n){const e=n==null?void 0:n.querySelector(".swipe-inner");e&&(e.style.transform="translateX(0)"),n==null||n.classList.remove("open")}async function hI(n,e){const t=f("sw-"+n);t&&(t.style.opacity="0.5"),e==="shop"?await Tr(n):(await Ca(n),P("Item removed"))}function dI(n,e){const t=f("sw-"+n);if(t){const i=t.querySelector(".swipe-inner");if((parseFloat((i.style.transform||"").replace("translateX(",""))||0)<-10){fa(t),We=null;return}}if(p.selectMode){p.selectedIds.has(n)?(p.selectedIds.delete(n),t==null||t.classList.remove("selected")):(p.selectedIds.add(n),t==null||t.classList.add("selected")),Fr();return}e==="shop"?window.togShop(n):window.openAdj(n)}function fI(){if(p.selectMode==="shop"){Wn();return}p.selectMode&&Wn(),p.selectMode="shop",p.selectedIds.clear(),document.querySelectorAll("#shlist .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=f("sh-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),Fr()}function pI(){if(p.selectMode==="inv"){Wn();return}p.selectMode&&Wn(),p.selectMode="inv",p.selectedIds.clear(),document.querySelectorAll("#ibody .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=f("inv-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),Fr()}function Wn(){p.selectMode=null,p.selectedIds.clear(),document.querySelectorAll(".swipe-wrap.selecting").forEach(t=>t.classList.remove("selecting","selected"));const n=f("sh-selbtn");n&&(n.classList.remove("active"),n.textContent="Select");const e=f("inv-selbtn");e&&(e.classList.remove("active"),e.textContent="Select"),Fr()}async function mI(){if(!p.selectedIds.size)return;const n=[...p.selectedIds],e=p.selectMode;Wn(),e==="shop"?await Promise.all(n.map(t=>Tr(t))):await Promise.all(n.map(t=>Ca(t))),P(`Removed ${n.length} item${n.length!==1?"s":""} 🗑`)}function Fr(){const n=f("multi-bar");if(!n)return;const e=p.selectedIds.size,t=f("multi-count");t&&(t.textContent=e),p.selectMode?n.classList.add("visible"):n.classList.remove("visible")}const gI=["Chicken","Beef","Fish","Vegetarian","Vegan","Quick","Kids","Healthy","Batch Cook","Date Night"];function Of(n){return"chip-"+n.split(" ").join("-")}function Vf(){const n=f("recChips");n&&(n.innerHTML=gI.map(e=>`<button onclick="toggleChip('${e}')" id="${Of(e)}" style="padding:5px 10px;border-radius:20px;border:1px solid var(--bd);background:var(--s2);color:var(--tx2);font-size:.78rem;cursor:pointer;transition:all .15s">${e}</button>`).join(""))}function yI(n){const e=f(Of(n));window._activeChips.has(n)?(window._activeChips.delete(n),e&&(e.style.background="var(--s2)",e.style.color="var(--tx2)",e.style.borderColor="var(--bd)")):(window._activeChips.add(n),e&&(e.style.background="var(--ac)",e.style.color="#000",e.style.borderColor="var(--ac)")),$f()}function $f(){const n=f("recPicker"),e=f("recFilter")?f("recFilter").value.trim().toLowerCase():"",t=[...window._activeChips].map(r=>r.toLowerCase()),s=[...p.recs].sort((r,a)=>(a.cookCount||0)-(r.cookCount||0)).filter(r=>{const a=(r.name+" "+(r.description||"")+" "+(r.tags||[]).join(" ")).toLowerCase(),c=e?e.split(/\s+/).every(d=>a.includes(d)):!0,u=t.every(d=>a.includes(d));return c&&u});n.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(r=>`<option value="${r.id}">${r.name}</option>`).join(""),window._pickedRec=null,f("mealMinp").value=""}function vI(n,e){p.md=n,f("mealMttl").textContent="Meal for "+e,f("mealMinp").value=p.mp[n]||"",window._pickedRec=null,window._activeChips=new Set;const t=f("recFilter");t&&(t.value=""),Vf();const i=f("recPicker");if(p.recs&&p.recs.length){const s=[...p.recs].sort((c,u)=>(u.cookCount||0)-(c.cookCount||0));i.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(c=>`<option value="${c.id}">${c.name}</option>`).join("");const r=p.mp[n]||"",a=s.find(c=>c.name===r);i.value=a?a.id:"",f("recPickerWrap").style.display="block"}else f("recPickerWrap").style.display="none";f("mealM").classList.add("active"),setTimeout(()=>f("mealMinp").focus(),100)}function wI(n){if(!n){window._pickedRec=null,f("mealMinp").value="";return}const e=p.recs.find(t=>t.id===n);e&&(window._pickedRec=e,f("mealMinp").value=e.name)}function dc(){f("mealM").classList.remove("active")}async function _I(){const n=f("mealMinp").value.trim();if(await gn(p.md,n||null),window._pickedRec&&window._pickedRec.description){const e=window._pickedRec.description,t=p.inv.map(a=>a.name.toLowerCase()),i=p.shop.map(a=>a.name.toLowerCase()),s=e.split(/[\n,]/).map(a=>a.replace(/^[\d\/\s]*(cup|tbsp|tsp|oz|lb|g|kg|ml|l|clove|slice|piece|bunch|head|can|package|pkg)s?\.?\s*/gi,"").replace(/^[\d]+\s*/,"").trim()).filter(a=>a.length>1&&a.length<60);let r=0;for(const a of s){if(/\b(add|mix|heat|cook|bake|stir|boil|fry|slice|chop|dice|combine|place|pour|season|serve|preheat|bring|remove|let|set|transfer)\b/i.test(a))continue;const c=a.replace(/^[-•*]\s*/,"").trim();if(!c||c.length<2)continue;const u=c.toLowerCase();t.some(d=>d.includes(u)||u.includes(d))||i.some(d=>d===u)||(await Ve({id:Date.now().toString()+Math.random().toString(36).slice(2),name:c,qty:1,checked:!1,src:"recipe"}),r++)}r>0&&P(`Added ${r} ingredient${r!==1?"s":""} to shopping list 🛒`)}window._pickedRec=null,dc(),_n(),as(),ii()}async function bI(){await gn(p.md,null),dc(),_n(),as(),ii()}function TI(n){const e=p.mp[n];e&&(p.cn=e,p.nr=0,f("cookedNm").textContent=e,f("cnotes").value="",Mi("cstars",0),f("cookedM").classList.add("active"))}async function EI(){await cd(p.cn,xt()),await gn(xt(),null),f("cookedM").classList.remove("active"),_n(),ii(),P("Meal logged!")}async function II(){var i;const n=f("cnotes").value.trim(),e=(i=f("tog-leftover"))==null?void 0:i.classList.contains("on");await cd(p.cn,xt());const t=p.recs.find(s=>s.name.toLowerCase()===p.cn.toLowerCase());t?await Bt({...t,cookCount:(t.cookCount||0)+1,lastCooked:xt()}):await Bt({id:"rec-"+Date.now(),name:p.cn,rating:p.nr,favorited:!1,notes:n,description:"",source:"Meal Plan",tags:[],cookCount:1,savedAt:new Date().toLocaleDateString(),lastCooked:xt()}),e&&await gn(Qv(),p.cn+" (leftovers)"),await gn(xt(),null),f("cookedM").classList.remove("active"),_n(),ii(),P(e?"Saved! Leftovers planned for tomorrow 🥡":"Saved to recipes! ⭐")}function SI(n){f("schedNm").textContent=n;const e=["S","M","T","W","T","F","S"],t=new Date;t.setHours(0,0,0,0),f("schedWk").innerHTML=Zn().map((i,s)=>{const r=i.toISOString().split("T")[0],a=i.getTime()===t.getTime(),c=p.mp[r];return`<div class="wd${a?" today":""}${c?" hm":""}" onclick="schedSet('${r}','${n}')"><div class="wdn">${e[s]}</div><div class="wdd">${i.getDate()}</div>${c?`<div class="wdm">${c.substring(0,8)}…</div>`:""}</div>`}).join(""),f("schedM").classList.add("active")}async function AI(n,e){await gn(n,e),f("schedM").classList.remove("active"),_n(),ii(),P("Scheduled! 📅")}function kI(){const n=s=>f(s),e=(s,r)=>{const a=n(s);a&&(a.value=r||"")};e("setName",p.cfg.name),e("setAdults",p.cfg.adults),e("setKids",p.cfg.kids),e("setOther",p.cfg.other),e("setCuisines",p.cfg.cuisines),e("setCookTime",p.cfg.cookTime),e("setZipcode",p.cfg.zipcode);const t=(s,r)=>{const a=n(s);a&&a.classList.toggle("on",!!r)};t("tg-nopork",p.cfg.nopork),t("tg-noshellfish",p.cfg.noshellfish),t("tg-vegetarian",p.cfg.vegetarian),t("tg-glutenfree",p.cfg.glutenfree),t("tg-notif",p.cfg.notif);const i=f("notifTimeRow");i&&(i.style.display=p.cfg.notif?"block":"none"),e("setNotifTime",p.cfg.notifTime||"8"),e("setNotifDays",String(p.cfg.notifDays||3)),pc(),Uf()}async function CI(){p.cfg={...p.cfg,name:f("setName").value.trim(),adults:f("setAdults").value.trim(),kids:f("setKids").value.trim(),nopork:f("tg-nopork").classList.contains("on"),noshellfish:f("tg-noshellfish").classList.contains("on"),vegetarian:f("tg-vegetarian").classList.contains("on"),glutenfree:f("tg-glutenfree").classList.contains("on"),other:f("setOther").value.trim(),cuisines:f("setCuisines").value.trim(),cookTime:f("setCookTime").value,zipcode:f("setZipcode")?f("setZipcode").value.trim():"",notif:f("tg-notif").classList.contains("on"),notifTime:f("setNotifTime")?f("setNotifTime").value:"8",notifDays:parseInt(f("setNotifDays")?f("setNotifDays").value:"3")},await br(),p.cfg.notif&&Ff(),P("Settings saved!"),Ae("settings"),tc()}async function RI(){var e,t;const n=((t=(e=f("setZipcode"))==null?void 0:e.value)==null?void 0:t.trim())||"";p.cfg={...p.cfg,zipcode:n},await br(),P("Saved!")}async function PI(n){if(!n.classList.contains("on")){if(!("Notification"in window)){P("Notifications not supported on this browser");return}if(Notification.permission==="denied"){P("Notifications blocked — enable in browser settings");return}if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){P("Notifications permission denied");return}}n.classList.toggle("on");const t=f("notifTimeRow");t&&(t.style.display=n.classList.contains("on")?"block":"none")}function xI(){if(Notification.permission!=="granted"){P("Enable notifications first");return}const n=p.inv.filter(t=>{const i=rt(t.expiry);return i&&(i.c==="expiring"||i.c==="expired")});if(!n.length){new Notification("Kitchen 🧺",{body:"No items expiring soon — you're all good!"});return}const e=n.slice(0,3).map(t=>t.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${e}${n.length>3?" + "+(n.length-3)+" more":""} need attention`})}function Ff(){if(!p.cfg.notif||Notification.permission!=="granted")return;const n=parseInt(localStorage.getItem("ks-lastnotif")||"0"),e=Date.now();if(e-n<864e5)return;localStorage.setItem("ks-lastnotif",e.toString());const t=p.cfg.notifDays||3,i=p.inv.filter(r=>{if(!rt(r.expiry))return!1;const c=new Date(r.expiry+"T00:00:00"),u=new Date;return u.setHours(0,0,0,0),Math.round((c-u)/864e5)<=t});if(!i.length)return;const s=i.slice(0,3).map(r=>r.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${s}${i.length>3?" + "+(i.length-3)+" more":""} expiring in ${t} days or less`})}function fc(){return xe("ks-hhs")||[p.hid]}async function Uf(){const n=De();if(n)try{const e=await fe(`households/${p.hid}`);if(!e)return;const t=e.ownerUid===n.uid,i=f("hhInviteCode");if(i&&(i.textContent=e.inviteCode||"—"),e.inviteCode&&t)try{await X(`household_codes/${e.inviteCode}`,{householdId:p.hid})}catch{}const s=f("regenCodeBtn");s&&(s.style.display=t?"":"none");const r=f("hhMembers");r&&e.members&&(r.innerHTML=e.members.map(a=>{const c=a.uid===n.uid,u=a.role==="owner"?"Owner":"Member",d=t&&!c?`<button onclick="event.stopPropagation();removeMemberFromHH('${a.uid}')" style="background:none;border:none;color:var(--rd);cursor:pointer;font-size:.78rem;padding:4px 8px">Remove</button>`:"";return`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px">
          <div>
            <div style="font-size:.86rem;font-weight:500;color:var(--tx)">${a.name}${c?" (you)":""}</div>
            <div style="font-size:.7rem;color:var(--mt);margin-top:2px">${u}</div>
          </div>
          ${d}
        </div>`}).join(""))}catch(e){console.error("renderHouseholdInfo error:",e)}}async function LI(){var e;const n=(e=f("hhInviteCode"))==null?void 0:e.textContent;if(!(!n||n==="—"))try{await navigator.clipboard.writeText(n),P("Invite code copied!")}catch{P("Couldn't copy — try manually")}}async function DI(){var t;const n=(t=f("hhInviteCode"))==null?void 0:t.textContent;if(!n||n==="—")return;const e=`Join my kitchen on Kitchen app! Use invite code: ${n} at https://pantry-app-zeta-six.vercel.app`;if(navigator.share)try{await navigator.share({text:e})}catch{}else try{await navigator.clipboard.writeText(e),P("Share text copied to clipboard!")}catch{P("Couldn't share — try manually")}}async function NI(){if(confirm("Regenerate invite code? The old code will stop working."))try{const n=await Dv(p.hid);if(n){const e=f("hhInviteCode");e&&(e.textContent=n),P("New invite code generated!")}}catch(n){console.error("regenInviteCode error:",n),P("Failed to regenerate code")}}async function MI(n){if(confirm("Remove this member from the household?"))try{await Nv(p.hid,n),P("Member removed"),Uf()}catch(e){console.error("removeMemberFromHH error:",e),P("Failed to remove member")}}async function OI(){var i,s,r;const n=(r=(s=(i=f("newHHCode"))==null?void 0:i.value)==null?void 0:s.trim())==null?void 0:r.toUpperCase();if(!n)return;const e=De();if(!e){P("Sign in first");return}const t=f("newHHCode");t.disabled=!0;try{const a=await ad(n,e);if(!a){P("Invalid invite code. Check and try again."),t.disabled=!1;return}const c=fc();c.includes(a)||c.push(a),tt("ks-hhs",c),f("newHHCode").value="",pc(),P("Household joined!")}catch(a){console.error("addHousehold error:",a),P("Failed to join household")}t.disabled=!1}function VI(n){n!==p.hid&&(localStorage.setItem("ks-h",n),location.reload())}async function $I(n){if(n===p.hid){P("Can't remove active household");return}const e=De();if(e)try{const i=await fe(`users/${e.uid}`);if(i){const r=(i.householdIds||[]).filter(a=>a!==n);await X(`users/${e.uid}`,{...i,householdIds:r,id:void 0})}const s=await fe(`households/${n}`);if(s){const r=(s.members||[]).filter(c=>c.uid!==e.uid),a=(s.memberUids||[]).filter(c=>c!==e.uid);await X(`households/${n}`,{...s,members:r,memberUids:a,id:void 0})}}catch(i){console.error("removeHousehold error:",i)}const t=fc().filter(i=>i!==n);tt("ks-hhs",t),pc()}async function pc(){const n=fc().filter(i=>i!==p.hid),e=f("hhList");if(!e)return;if(!n.length){e.innerHTML='<div style="font-size:.82rem;color:var(--mt);padding:10px 0">No other households yet.</div>';return}const t=[];for(const i of n){let s=i;try{const r=await fe(`households/${i}`);r!=null&&r.name&&(s=r.name)}catch{}t.push({id:i,name:s})}e.innerHTML=t.map(({id:i,name:s})=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px;cursor:pointer" onclick="switchHousehold('${i}')">
      <div>
        <div style="font-size:.88rem;font-weight:500;color:var(--tx)">${s}</div>
        <div style="font-size:.7rem;color:var(--mt);margin-top:2px">Tap to switch</div>
      </div>
      <button onclick="event.stopPropagation();removeHousehold('${i}')" style="background:none;border:none;color:var(--mt);cursor:pointer;font-size:.82rem;padding:4px 8px">✕</button>
    </div>`).join("")}const dr={gold:{name:"Gold",swatch:"#d4a853",dark:{bg:"#0f0f0d",sf:"#1a1a17",card:"#222220",card2:"#2a2a27",b1:"#333330",b2:"#3d3d39",ac:"#d4a853",ac2:"#e8c27a",acr:"212,168,83",tx:"#ede8d8",tx2:"#b8b09a",mt:"#7a7468"},light:{bg:"#faf8f2",sf:"#ffffff",card:"#f3ede0",card2:"#efe8d8",b1:"#ddd5c0",b2:"#cec4ac",ac:"#a8732a",ac2:"#c48f3e",acr:"168,115,42",tx:"#2a2418",tx2:"#5c5040",mt:"#9a8870"}},forest:{name:"Forest",swatch:"#4a9e5c",dark:{bg:"#0a1410",sf:"#111f17",card:"#182a1e",card2:"#1e3326",b1:"#2a4032",b2:"#355040",ac:"#6db56d",ac2:"#8fd08f",acr:"109,181,109",tx:"#e4f0e4",tx2:"#9dbf9d",mt:"#5a7a5a"},light:{bg:"#f2f9f2",sf:"#ffffff",card:"#e8f5e8",card2:"#dff0df",b1:"#c0ddc0",b2:"#a8cca8",ac:"#2e7d32",ac2:"#43a047",acr:"46,125,50",tx:"#0d2010",tx2:"#2e4f2e",mt:"#5a7a5a"}},ocean:{name:"Ocean",swatch:"#38bdf8",dark:{bg:"#060e1a",sf:"#0d1829",card:"#112035",card2:"#162840",b1:"#1e3554",b2:"#264468",ac:"#38bdf8",ac2:"#7dd3fc",acr:"56,189,248",tx:"#e0f2fe",tx2:"#7ab8d4",mt:"#486880"},light:{bg:"#f0f8ff",sf:"#ffffff",card:"#e0f2fe",card2:"#d4ecf9",b1:"#b0d8f0",b2:"#90c4e4",ac:"#0369a1",ac2:"#0284c7",acr:"3,105,161",tx:"#082040",tx2:"#1e4060",mt:"#4a7090"}},bordeaux:{name:"Bordeaux",swatch:"#e8829a",dark:{bg:"#120810",sf:"#1c0e18",card:"#261420",card2:"#301828",b1:"#4a2238",b2:"#5c2a46",ac:"#e8829a",ac2:"#f4aabb",acr:"232,130,154",tx:"#fce8ee",tx2:"#d4909e",mt:"#8a5060"},light:{bg:"#fff5f7",sf:"#ffffff",card:"#ffe8ed",card2:"#ffd8e0",b1:"#f4b8c4",b2:"#eca0b0",ac:"#be3455",ac2:"#d94070",acr:"190,52,85",tx:"#2a080e",tx2:"#6a2030",mt:"#9a5060"}},sand:{name:"Sand",swatch:"#e07a5f",dark:{bg:"#170e08",sf:"#221508",card:"#2e1c0e",card2:"#382414",b1:"#4a3020",b2:"#5c3c28",ac:"#e07a5f",ac2:"#eca080",acr:"224,122,95",tx:"#fdf0e8",tx2:"#c8a090",mt:"#887060"},light:{bg:"#fdf6ec",sf:"#fffbf5",card:"#f5e8d8",card2:"#eedcc8",b1:"#ddc8ac",b2:"#ccb494",ac:"#c1440e",ac2:"#d4602a",acr:"193,68,14",tx:"#2a1808",tx2:"#5c3820",mt:"#9a7060"}},midnight:{name:"Midnight",swatch:"#818cf8",dark:{bg:"#050814",sf:"#0a0d1f",card:"#0f1228",card2:"#141830",b1:"#1e2448",b2:"#272e58",ac:"#818cf8",ac2:"#a5b0ff",acr:"129,140,248",tx:"#e8eaff",tx2:"#9099cc",mt:"#505880"},light:{bg:"#f0f1ff",sf:"#ffffff",card:"#e4e6ff",card2:"#d8dbff",b1:"#b8bdff",b2:"#a0a6f4",ac:"#4f46e5",ac2:"#6366f1",acr:"79,70,229",tx:"#0a0820",tx2:"#202060",mt:"#5050a0"}},lavender:{name:"Lavender",swatch:"#c084fc",dark:{bg:"#0e0814",sf:"#160e20",card:"#1e1430",card2:"#261a3c",b1:"#382454",b2:"#442c66",ac:"#c084fc",ac2:"#d8a8ff",acr:"192,132,252",tx:"#f5ecff",tx2:"#c0a0e0",mt:"#7a5898"},light:{bg:"#faf5ff",sf:"#ffffff",card:"#f3e8ff",card2:"#ecdcff",b1:"#d8b8f8",b2:"#c8a0f0",ac:"#9333ea",ac2:"#a855f7",acr:"147,51,234",tx:"#1a0830",tx2:"#481080",mt:"#805098"}}};let Qi=xe("ks-theme")||"gold",Ji=xe("ks-mode")||"auto";function fr(n,e){Qi=n,Ji=e,tt("ks-theme",n),tt("ks-mode",e);const t=dr[n]||dr.gold,s=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?t.dark:t.light,r=document.documentElement.style;r.setProperty("--bg",s.bg),r.setProperty("--sf",s.sf),r.setProperty("--card",s.card),r.setProperty("--card2",s.card2),r.setProperty("--b1",s.b1),r.setProperty("--b2",s.b2),r.setProperty("--ac",s.ac),r.setProperty("--ac2",s.ac2),r.setProperty("--acd","rgba("+s.acr+",.12)"),r.setProperty("--tx",s.tx),r.setProperty("--tx2",s.tx2),r.setProperty("--mt",s.mt),r.setProperty("--gn","#6db56d"),r.setProperty("--gnd","rgba(109,181,109,.12)"),r.setProperty("--rd","#d96b6b"),r.setProperty("--rdd","rgba(217,107,107,.12)"),r.setProperty("--am","#c8960a"),r.setProperty("--amd","rgba(200,150,10,.12)"),jf(e),Bf(n)}function FI(n){fr(Qi,n)}function jf(n){["auto","light","dark"].forEach(e=>{const t=f("mode-"+e);t&&(t.style.background=e===n?"var(--ac)":"",t.style.color=e===n?"var(--bg)":"",t.style.borderColor=e===n?"var(--ac)":"")})}function Bf(n){const e=f("themePicker");e&&(e.innerHTML="",Object.keys(dr).forEach(t=>{const i=dr[t],s=t===n,r=document.createElement("div");r.title=i.name,r.style.cssText="width:36px;height:36px;border-radius:50%;background:"+i.swatch+";cursor:pointer;border:3px solid "+(s?"var(--tx)":"transparent")+";box-shadow:"+(s?"0 0 0 2px var(--ac)":"none")+";transition:all .2s;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.85rem",r.textContent=s?"✓":"",r.onclick=()=>fr(t,Ji),r.onmouseover=function(){this.style.transform="scale(1.15)"},r.onmouseout=function(){this.style.transform="scale(1)"},e.appendChild(r)}))}function UI(){fr(Qi,Ji),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{Ji==="auto"&&fr(Qi,"auto")})}function jI(){Bf(Qi),jf(Ji)}async function BI(){const n=f("enrichBtn"),e=f("enrichProgress"),t=f("enrichStatus"),i=f("enrichBar");n&&(n.disabled=!0),e&&(e.style.display="block");const s=p.shop.filter(d=>Ju(d)),r=p.inv.filter(d=>Ju(d)),a=[...s.map(d=>({item:d,list:"shop"})),...r.map(d=>({item:d,list:"inv"}))];if(!a.length){t&&(t.textContent="All items already enriched!"),i&&(i.style.width="100%"),n&&(n.disabled=!1),P("Nothing to enrich — all items already have data.");return}let c=0,u=0;for(let d=0;d<a.length;d++){const{item:m,list:_}=a[d],I=Math.round((d+1)/a.length*100);t&&(t.textContent=`Processing "${m.name}" (${d+1}/${a.length})…`),i&&(i.style.width=I+"%");try{const $=(await(await fetch(`/api/text-search?q=${encodeURIComponent(m.name)}`)).json()).results||[];if($.length){const M=$[0],W={...m,image:M.image||m.image||null,brand:M.brand||m.brand||"",category:M.category||m.category||"",nutrition:M.nutrition||m.nutrition||null,source:M.source||m.source||"search"};_==="shop"?await Ve(W):await ke(W),c++}else u++}catch(R){console.warn(`Enrich failed for "${m.name}":`,R),u++}d<a.length-1&&await HI(300)}t&&(t.textContent=`Done! ${c} enriched, ${u} skipped.`),i&&(i.style.width="100%"),n&&(n.disabled=!1),P(`Enrichment complete: ${c} updated, ${u} unchanged.`)}function Ju(n){return!n.name||n.name.length<2?!1:!n.image&&!n.brand}function HI(n){return new Promise(e=>setTimeout(e,n))}let Pt=0;async function qI(){const n=De();if(n)try{const e=await fe(`users/${n.uid}`);if(e!=null&&e.onboardingDone)return;zI()}catch{}}function zI(){const n=f("ov-onboarding");n&&(Pt=0,n.classList.add("active"),Hf())}function Hf(){const n=f("onboarding-body");if(!n)return;const t=`<div style="display:flex;gap:6px;justify-content:center;margin-bottom:24px">${Array.from({length:4},(i,s)=>`<div style="width:8px;height:8px;border-radius:50%;background:${s===Pt?"var(--ac)":"var(--b2)"};transition:background .2s"></div>`).join("")}</div>`;Pt===0?n.innerHTML=`${t}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:4rem;margin-bottom:16px">🧺</div>
        <div style="font-family:'Fraunces',serif;font-size:2rem;font-weight:300;color:var(--ac);margin-bottom:12px">Welcome to Kitchen!</div>
        <p style="font-size:.92rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 28px">Your smart kitchen assistant that tracks inventory, plans meals, finds deals, and suggests recipes — all powered by AI.</p>
        <button class="btn bp bf" onclick="onboardNext()">Let's get started →</button>
      </div>`:Pt===1?n.innerHTML=`${t}
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
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:16px">Continue →</button>`:Pt===2?n.innerHTML=`${t}
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
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:20px">Almost done →</button>`:Pt===3&&(n.innerHTML=`${t}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:3rem;margin-bottom:16px">🎉</div>
        <div style="font-family:'Fraunces',serif;font-size:1.6rem;font-weight:300;color:var(--ac);margin-bottom:12px">You're all set!</div>
        <p style="font-size:.88rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 24px">Start by adding your first item to the pantry, or ask Claude for dinner ideas.</p>
        <div style="display:flex;flex-direction:column;gap:10px">
          <button class="btn bp bf" onclick="finishOnboarding();showOv('scan')">📷 Scan your first item</button>
          <button class="btn bs bf" onclick="finishOnboarding();showScreen('chat')">✨ Ask Claude for ideas</button>
          <button class="btn bs bf" onclick="finishOnboarding()">🏠 Go to Home</button>
        </div>
      </div>`)}async function WI(){var n,e,t,i,s,r,a,c,u,d,m,_,I;if(Pt===1){const R=(e=(n=f("ob-name"))==null?void 0:n.value)==null?void 0:e.trim(),N=(i=(t=f("ob-adults"))==null?void 0:t.value)==null?void 0:i.trim(),$=(r=(s=f("ob-kids"))==null?void 0:s.value)==null?void 0:r.trim(),M=(c=(a=f("ob-cuisines"))==null?void 0:a.value)==null?void 0:c.trim(),W=(u=f("ob-cooktime"))==null?void 0:u.value;R&&(p.cfg.name=R),N&&(p.cfg.adults=N),$&&(p.cfg.kids=$),M&&(p.cfg.cuisines=M),W&&(p.cfg.cookTime=W),p.cfg.nopork=((d=f("ob-nopork"))==null?void 0:d.checked)||!1,p.cfg.noshellfish=((m=f("ob-noshellfish"))==null?void 0:m.checked)||!1,p.cfg.vegetarian=((_=f("ob-vegetarian"))==null?void 0:_.checked)||!1,p.cfg.glutenfree=((I=f("ob-glutenfree"))==null?void 0:I.checked)||!1,await br()}Pt++,Hf()}async function qf(){const n=f("ov-onboarding");n&&n.classList.remove("active");const e=De();if(e)try{const t=await fe(`users/${e.uid}`);t&&await X(`users/${e.uid}`,{...t,onboardingDone:!0,id:void 0})}catch{}}async function GI(){await qf(),P("You can always adjust settings later ⚙️")}window.getIdToken=sd;O.renderAll=nc;O.renderSum=as;O.renderRecs=$r;O.renderShop=si;cT(Or);window.showScreen=function(n){var e,t;document.querySelectorAll(".ov.active").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".screen").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".ni").forEach(i=>i.classList.remove("active")),(e=f("screen-"+n))==null||e.classList.add("active"),(t=f("nav-"+n))==null||t.classList.add("active"),n==="home"&&wf(),n==="inventory"&&Or(),n==="recipes"&&(p.rt==="community"?ac():$r()),n==="shopping"&&si(),n==="insights"&&jE()};const KI=wt;window.showOv=function(n){KI(n),n==="settings"&&setTimeout(jI,80)};window.hideOv=Ae;window.initHome=tc;window.addLowToShop=dT;window.toggleExp=function(){const n=f("exppanel");n.style.display=n.style.display==="none"?"block":"none"};window.openAdj=WT;window.updL=GT;window.adjQ=KT;window.adjQD=QT;window.adjE=JT;window.adjNote=YT;window.setIT=eE;window.addManual=tE;window.valMA=nE;window.chgMQ=iE;window.selML=sE;window.remItem=rc;window.importDoc=rE;window.adjLowThresh=XT;window.adjLowThreshD=ZT;window.openInvAddSheet=cE;window.closeInvAddSheet=ls;window.invAddScan=lE;window.invAddVoice=uE;window.setInvAddLoc=hE;window.toggleInvAddNote=dE;window.qaddInv=fE;window.onInvInput=pE;window.pickInvInlineResult=gE;window.toggleInvVoice=Rf;window.qadd=gT;window.togShop=RT;window.toggleShNote=PT;window.saveShNote=xT;window.openShQty=LT;window.adjShQty=DT;window.saveShQty=Af;window.togAisle=NT;window.setSHT=MT;window.shareList=OT;window.openAddToKitchen=VT;window.setAtkLoc=$T;window.confirmAddToKitchen=FT;window.buildList=UT;window.toggleVoice=bf;window.toggleAddNote=yT;window.openShopAddSheet=vT;window.closeShopAddSheet=cs;window.shopAddScan=wT;window.shopAddVoice=_T;window.closeEnrichSheet=hr;window.pickEnrichResult=CT;window.onShopInput=ET;window.pickInlineResult=ST;window.openItemDetail=AT;window.closeItemDetail=kT;window.bpTog=jT;window.bpSelAll=BT;window.bpUpdBtn=function(){};window.bpConfirm=HT;window._bpItems=[];window.searchDeals=qT;window.dealsFromList=zT;window.addDealToList=Cf;window.renderDealsZipBanner=kf;window.clrChk=function(){p.shop.filter(n=>n.checked).forEach(n=>{Sf(n.name),Tr(n.id)})};window.setRT=bE;window.togFav=TE;window.valR=EE;window.importFromUrl=IE;window.saveRec=SE;window.openER=AE;window.updR=kE;window.delER=CE;window.scaleRec=RE;window.whatCanIMake=PE;window.addRecIngToShop=xE;window.setStar=LE;window.togTag=wE;window.togglePublic=DE;window.loadCommunity=ac;window.setComCuisine=NE;window.setComSearch=ME;window.openComRecipe=OE;window.likeComRecipe=VE;window.saveComToKitchen=$E;window.addComComment=FE;window.shareComRecipe=UE;window.sendChat=xf;window.sendPill=GE;window.clrChat=KE;window.ar=Lf;window.importChatRecipe=WE;window.stopLiveScanner=uc;window.resumeScanner=ZE;window.openScanForList=eI;window.openScanForInventory=tI;window.addScannedToList=iI;window.toggleScanNote=nI;window.togManual=sI;window.manLookup=rI;window.selRL=hc;window.valAdd=aI;window.addToInv=cI;window.chgAQ=lI;window.swipeDelItem=hI;window.swipeRowTap=dI;window.togShopSelect=fI;window.togInvSelect=pI;window.cancelSelect=Wn;window.deleteSelected=mI;window.openMealM=vI;window.pickRec=wI;window.closeMealM=dc;window.saveMeal=_I;window.clrMeal=bI;window.openCooked=TI;window.skipCooked=EI;window.saveCooked=II;window.scheduleRecipe=SI;window.schedSet=AI;window.initRecChips=Vf;window.toggleChip=yI;window.filterRecs=$f;window._pickedRec=null;window._activeChips=new Set;window.saveSettings=CI;window.saveZipcode=RI;window.toggleNotif=PI;window.testNotif=xI;window.addHousehold=OI;window.switchHousehold=VI;window.removeHousehold=$I;window.setMode=FI;window.showNotif=P;window.copyInviteCode=LI;window.shareInviteCode=DI;window.regenInviteCode=NI;window.removeMemberFromHH=MI;window.enrichExistingItems=BI;window.manualRefresh=async function(n){const e=event==null?void 0:event.target;e&&(e.classList.add("spinning"),setTimeout(()=>e.classList.remove("spinning"),600)),ae("syncing");try{(n==="shop"||n==="both")&&(p.shop=await Le(`households/${p.hid}/shopping`),si()),(n==="inv"||n==="both")&&(p.inv=await Le(`households/${p.hid}/inventory`),Or(),nc()),ae("synced"),P("Refreshed ✓")}catch(t){console.error("manualRefresh error:",t),ae("error"),P("Refresh failed")}};window.onboardNext=WI;window.finishOnboarding=qf;window.skipOnboarding=GI;window._appStart=async function(n){var t;p.hid=n,f("LS").style.display="none",f("APP").style.display="flex",window.showScreen("home"),ae("syncing");const e=De();if(e)try{const i=await fe(`users/${e.uid}`);if((t=i==null?void 0:i.householdIds)!=null&&t.length){const s=[...i.householdIds];s.includes(n)||s.push(n),tt("ks-hhs",s)}else{const s=xe("ks-hhs")||[n];s.includes(n)||(s.push(n),tt("ks-hhs",s))}}catch{const i=xe("ks-hhs")||[n];i.includes(n)||(i.push(n),tt("ks-hhs",i))}else{const i=xe("ks-hhs")||[n];i.includes(n)||(i.push(n),tt("ks-hhs",i))}await Vv(),kI(),tc(),mT(),yE(),aT(p.hid);try{ae("syncing");const i=await Promise.allSettled([Le(`households/${p.hid}/inventory`),Le(`households/${p.hid}/recipes`),Le(`households/${p.hid}/shopping`)]),s=(r,a)=>r.status==="fulfilled"?r.value:a;p.inv=s(i[0],p.inv),p.recs=s(i[1],p.recs),p.shop=s(i[2],p.shop),ae("synced"),nc(),$r(),si(),as()}catch(i){console.error("initial load error",i),ae("error")}setTimeout(qI,500)};UI();uI();p.cfg.notif&&setTimeout(Ff,3e3);si();function Ur(n){f("auth-loading").style.display="none",f("auth-signin").style.display=n==="signin"?"flex":"none",f("auth-signup").style.display=n==="signup"?"flex":"none",f("auth-join").style.display=n==="join"?"flex":"none",f("authError").style.display="none",f("signupError").style.display="none"}function Ke(n,e){const t=f(n);t&&(t.textContent=e,t.style.display="block")}function jr(n){return{"auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password.","auth/invalid-credential":"Incorrect email or password.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password must be at least 6 characters.","auth/too-many-requests":"Too many attempts. Please try again later.","auth/popup-closed-by-user":"Sign-in popup was closed.","auth/cancelled-popup-request":"Sign-in was cancelled.","auth/account-exists-with-different-credential":"An account already exists with this email using a different sign-in method."}[n.code]||n.message||"Something went wrong. Please try again."}function Fe(n,e){n&&(e?(n._origText=n.textContent,n.textContent="Please wait…",n.disabled=!0):(n.textContent=n._origText||n.textContent,n.disabled=!1))}var Yu;(Yu=f("btnGoogle"))==null||Yu.addEventListener("click",async()=>{const n=f("btnGoogle");Fe(n,!0),f("authError").style.display="none";try{await kv()}catch(e){Ke("authError",jr(e))}Fe(n,!1)});var Xu;(Xu=f("btnApple"))==null||Xu.addEventListener("click",async()=>{const n=f("btnApple");Fe(n,!0),f("authError").style.display="none";try{await Cv()}catch(e){Ke("authError",jr(e))}Fe(n,!1)});var Zu;(Zu=f("btnEmailSign"))==null||Zu.addEventListener("click",async()=>{var i,s,r;const n=(s=(i=f("authEmail"))==null?void 0:i.value)==null?void 0:s.trim(),e=(r=f("authPass"))==null?void 0:r.value;if(!n||!e){Ke("authError","Please enter your email and password.");return}const t=f("btnEmailSign");Fe(t,!0),f("authError").style.display="none";try{await Rv(n,e)}catch(a){Ke("authError",jr(a))}Fe(t,!1)});var eh;(eh=f("btnEmailSignup"))==null||eh.addEventListener("click",async()=>{var s,r,a,c,u;const n=(r=(s=f("signupName"))==null?void 0:s.value)==null?void 0:r.trim(),e=(c=(a=f("signupEmail"))==null?void 0:a.value)==null?void 0:c.trim(),t=(u=f("signupPass"))==null?void 0:u.value;if(!n){Ke("signupError","Please enter your name.");return}if(!e||!t){Ke("signupError","Please enter your email and password.");return}const i=f("btnEmailSignup");Fe(i,!0),f("signupError").style.display="none";try{await Pv(e,t,n)}catch(d){Ke("signupError",jr(d))}Fe(i,!1)});var th;(th=f("btnToggleSignup"))==null||th.addEventListener("click",()=>Ur("signup"));var nh;(nh=f("btnToggleSignin"))==null||nh.addEventListener("click",()=>Ur("signin"));var ih;(ih=f("authPass"))==null||ih.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=f("btnEmailSign"))==null||e.click())});var sh;(sh=f("signupPass"))==null||sh.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=f("btnEmailSignup"))==null||e.click())});window.doSignOut=async function(){confirm("Sign out of Kitchen?")&&await xv()};let Lo=!1;function pr(n){localStorage.setItem("ks-h",n),f("LS").style.display="none",f("APP").style.display="flex",window._appStart(n)}function QI(n){Ur("join"),f("btnCreateKitchen").onclick=async()=>{var e;Fe(f("btnCreateKitchen"),!0);try{const t=((e=p.cfg)==null?void 0:e.name)||"My Kitchen";await od(n.uid,t);const i=await Bo(n);i.householdIds=[n.uid],await X(`users/${n.uid}`,i),localStorage.removeItem("ks-h");const s=xe("ks-hhs");if(s){const r=s.filter(a=>a!==n.uid);r.push(n.uid),localStorage.setItem("ks-hhs",JSON.stringify(r))}pr(n.uid)}catch(t){console.error("Create kitchen error:",t),Ke("joinError","Something went wrong. Please try again."),Fe(f("btnCreateKitchen"),!1)}},f("btnJoinKitchen").onclick=async()=>{var t,i,s;const e=(s=(i=(t=f("joinCode"))==null?void 0:t.value)==null?void 0:i.trim())==null?void 0:s.toUpperCase();if(!e){Ke("joinError","Please enter an invite code.");return}Fe(f("btnJoinKitchen"),!0),f("joinError").style.display="none";try{let r=await fe(`users/${n.uid}`);r||(r=await Bo(n));const a=await ad(e,n);if(!a){Ke("joinError","Invalid invite code. Check and try again."),Fe(f("btnJoinKitchen"),!1);return}const c=xe("ks-hhs")||[];c.includes(a)||c.push(a),tt("ks-hhs",c),pr(a)}catch(r){console.error("Join kitchen error:",r),Ke("joinError","Something went wrong. Please try again."),Fe(f("btnJoinKitchen"),!1)}}}Sv(async n=>{var e;if(n){if(localStorage.setItem("ks-who",n.displayName||((e=n.email)==null?void 0:e.split("@")[0])||"You"),!Lo){Lo=!0;try{const t=await fe(`users/${n.uid}`),i=localStorage.getItem("ks-h"),s=xe("ks-hhs");if(!!t||!!i||s&&s.length>0){f("LS").style.display="none",f("APP").style.display="flex";const a=await Mv(n);pr(a)}else QI(n)}catch(t){console.error("Failed to resolve household:",t);const i=n.uid;pr(i)}}}else vf(),Lo=!1,f("APP").style.display="none",f("LS").style.display="flex",Ur("signin")});
