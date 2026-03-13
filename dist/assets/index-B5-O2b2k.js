(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Er={name:"The Bora Family",adults:"Bora",kids:"1 toddler (age 3)",nopork:!0,noshellfish:!1,vegetarian:!1,glutenfree:!1,other:"",cuisines:"Bangladeshi, Turkish, Mediterranean, American",cookTime:"40-60 min",zipcode:""},h={hid:null,inv:[],recs:[],shop:[],mp:{},cfg:{...Er},cookLog:[],wasteLog:[],chat:[],cp:null,selR:"fridge",maL:"fridge",adjId:null,it:"all",rt:"all",md:null,cn:"",nr:0,eid:null,scanDestList:!1,aisleMode:!1,selectMode:null,selectedIds:new Set,username:null,comRecs:[],comTab:"browse",comSearch:"",comCuisine:"all",comSort:"newest",comTags:[],comTime:"any",comMinRating:0,comPage:0,myLikes:new Set};function je(n){try{return JSON.parse(localStorage.getItem(n))}catch{return null}}function ut(n,e){localStorage.setItem(n,JSON.stringify(e))}const Ym=()=>{};var ou={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Xm=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],c=n[t++],u=((s&7)<<18|(r&63)<<12|(o&63)<<6|c&63)-65536;e[i++]=String.fromCharCode(55296+(u>>10)),e[i++]=String.fromCharCode(56320+(u&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ah={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,c=o?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,m=r>>2,y=(r&3)<<4|c>>4;let w=(c&15)<<2|d>>6,C=d&63;u||(C=64,o||(w=64)),i.push(t[m],t[y],t[w],t[C])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(oh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Xm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const y=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||c==null||d==null||y==null)throw new Zm;const w=r<<2|c>>4;if(i.push(w),d!==64){const C=c<<4&240|d>>2;if(i.push(C),y!==64){const x=d<<6&192|y;i.push(x)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Zm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eg=function(n){const e=oh(n);return ah.encodeByteArray(e,!0)},Sr=function(n){return eg(n).replace(/\./g,"")},ch=function(n){try{return ah.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function tg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ng=()=>tg().__FIREBASE_DEFAULTS__,ig=()=>{if(typeof process>"u"||typeof ou>"u")return;const n=ou.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},sg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ch(n[1]);return e&&JSON.parse(e)},qr=()=>{try{return Ym()||ng()||ig()||sg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},lh=n=>{var e,t;return(t=(e=qr())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},uh=n=>{const e=lh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},dh=()=>{var n;return(n=qr())==null?void 0:n.config},hh=n=>{var e;return(e=qr())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function dn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Qa(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function fh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Sr(JSON.stringify(t)),Sr(JSON.stringify(o)),""].join(".")}const Zi={};function og(){const n={prod:[],emulator:[]};for(const e of Object.keys(Zi))Zi[e]?n.emulator.push(e):n.prod.push(e);return n}function ag(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let au=!1;function Ja(n,e){if(typeof window>"u"||typeof document>"u"||!dn(window.location.host)||Zi[n]===e||Zi[n]||au)return;Zi[n]=e;function t(w){return`__firebase__banner__${w}`}const i="__firebase__banner",r=og().prod.length>0;function o(){const w=document.getElementById(i);w&&w.remove()}function c(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function u(w,C){w.setAttribute("width","24"),w.setAttribute("id",C),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function d(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{au=!0,o()},w}function m(w,C){w.setAttribute("id",C),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function y(){const w=ag(i),C=t("text"),x=document.getElementById(C)||document.createElement("span"),O=t("learnmore"),L=document.getElementById(O)||document.createElement("a"),z=t("preprendIcon"),G=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const $=w.element;c($),m(L,O);const j=d();u(G,z),$.append(G,x,L,j),document.body.appendChild($)}r?(x.innerText="Preview backend disconnected.",G.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oe())}function lg(){var e;const n=(e=qr())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ug(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function dg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function hg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fg(){const n=Oe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function pg(){return!lg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mg(){try{return typeof indexedDB=="object"}catch{return!1}}function gg(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg="FirebaseError";class wt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=yg,Object.setPrototypeOf(this,wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_s.prototype.create)}}class _s{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?vg(r,i):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new wt(s,c,i)}}function vg(n,e){return n.replace(wg,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const wg=/\{\$([^}]+)}/g;function _g(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Pn(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(cu(r)&&cu(o)){if(!Pn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function cu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Wi(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Gi(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function bg(n,e){const t=new Tg(n,e);return t.subscribe.bind(t)}class Tg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Ig(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Wo),s.error===void 0&&(s.error=Wo),s.complete===void 0&&(s.complete=Wo);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ig(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Wo(){}/**
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
 */function Re(n){return n&&n._delegate?n._delegate:n}class nn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new rg;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ag(e))try{this.getOrInitializeService({instanceIdentifier:In})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=In){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=In){return this.instances.has(e)}getOptions(e=In){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(r);i===c&&o.resolve(s)}return s}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Sg(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=In){return this.component?this.component.multipleInstances?e:In:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sg(n){return n===In?void 0:n}function Ag(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Eg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Y||(Y={}));const Cg={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Rg=Y.INFO,Pg={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},xg=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Pg[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ya{constructor(e){this.name=e,this._logLevel=Rg,this._logHandler=xg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const Lg=(n,e)=>e.some(t=>n instanceof t);let lu,uu;function Dg(){return lu||(lu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ng(){return uu||(uu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ph=new WeakMap,pa=new WeakMap,mh=new WeakMap,Go=new WeakMap,Xa=new WeakMap;function Og(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Jt(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ph.set(t,n)}).catch(()=>{}),Xa.set(e,n),e}function Mg(n){if(pa.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});pa.set(n,e)}let ma={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return pa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||mh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Jt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function $g(n){ma=n(ma)}function Vg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Ko(this),e,...t);return mh.set(i,e.sort?e.sort():[e]),Jt(i)}:Ng().includes(n)?function(...e){return n.apply(Ko(this),e),Jt(ph.get(this))}:function(...e){return Jt(n.apply(Ko(this),e))}}function Ug(n){return typeof n=="function"?Vg(n):(n instanceof IDBTransaction&&Mg(n),Lg(n,Dg())?new Proxy(n,ma):n)}function Jt(n){if(n instanceof IDBRequest)return Og(n);if(Go.has(n))return Go.get(n);const e=Ug(n);return e!==n&&(Go.set(n,e),Xa.set(e,n)),e}const Ko=n=>Xa.get(n);function Fg(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),c=Jt(o);return i&&o.addEventListener("upgradeneeded",u=>{i(Jt(o.result),u.oldVersion,u.newVersion,Jt(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{r&&u.addEventListener("close",()=>r()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const jg=["get","getKey","getAll","getAllKeys","count"],Bg=["put","add","delete","clear"],Qo=new Map;function du(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Qo.get(e))return Qo.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Bg.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||jg.includes(t)))return;const r=async function(o,...c){const u=this.transaction(o,s?"readwrite":"readonly");let d=u.store;return i&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&u.done]))[0]};return Qo.set(e,r),r}$g(n=>({...n,get:(e,t,i)=>du(e,t)||n.get(e,t,i),has:(e,t)=>!!du(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(zg(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function zg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ga="@firebase/app",hu="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=new Ya("@firebase/app"),qg="@firebase/app-compat",Wg="@firebase/analytics-compat",Gg="@firebase/analytics",Kg="@firebase/app-check-compat",Qg="@firebase/app-check",Jg="@firebase/auth",Yg="@firebase/auth-compat",Xg="@firebase/database",Zg="@firebase/data-connect",ey="@firebase/database-compat",ty="@firebase/functions",ny="@firebase/functions-compat",iy="@firebase/installations",sy="@firebase/installations-compat",ry="@firebase/messaging",oy="@firebase/messaging-compat",ay="@firebase/performance",cy="@firebase/performance-compat",ly="@firebase/remote-config",uy="@firebase/remote-config-compat",dy="@firebase/storage",hy="@firebase/storage-compat",fy="@firebase/firestore",py="@firebase/ai",my="@firebase/firestore-compat",gy="firebase",yy="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya="[DEFAULT]",vy={[ga]:"fire-core",[qg]:"fire-core-compat",[Gg]:"fire-analytics",[Wg]:"fire-analytics-compat",[Qg]:"fire-app-check",[Kg]:"fire-app-check-compat",[Jg]:"fire-auth",[Yg]:"fire-auth-compat",[Xg]:"fire-rtdb",[Zg]:"fire-data-connect",[ey]:"fire-rtdb-compat",[ty]:"fire-fn",[ny]:"fire-fn-compat",[iy]:"fire-iid",[sy]:"fire-iid-compat",[ry]:"fire-fcm",[oy]:"fire-fcm-compat",[ay]:"fire-perf",[cy]:"fire-perf-compat",[ly]:"fire-rc",[uy]:"fire-rc-compat",[dy]:"fire-gcs",[hy]:"fire-gcs-compat",[fy]:"fire-fst",[my]:"fire-fst-compat",[py]:"fire-vertex","fire-js":"fire-js",[gy]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new Map,wy=new Map,va=new Map;function fu(n,e){try{n.container.addComponent(e)}catch(t){At.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function xn(n){const e=n.name;if(va.has(e))return At.debug(`There were multiple attempts to register component ${e}.`),!1;va.set(e,n);for(const t of Ar.values())fu(t,n);for(const t of wy.values())fu(t,n);return!0}function Wr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ue(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yt=new _s("app","Firebase",_y);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=yy;function gh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:ya,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw Yt.create("bad-app-name",{appName:String(s)});if(t||(t=dh()),!t)throw Yt.create("no-options");const r=Ar.get(s);if(r){if(Pn(t,r.options)&&Pn(i,r.config))return r;throw Yt.create("duplicate-app",{appName:s})}const o=new kg(s);for(const u of va.values())o.addComponent(u);const c=new by(t,i,o);return Ar.set(s,c),c}function Za(n=ya){const e=Ar.get(n);if(!e&&n===ya&&dh())return gh();if(!e)throw Yt.create("no-app",{appName:n});return e}function ht(n,e,t){let i=vy[n]??n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),r=e.match(/\s|\//);if(s||r){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),At.warn(o.join(" "));return}xn(new nn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Ty="firebase-heartbeat-database",Iy=1,ds="firebase-heartbeat-store";let Jo=null;function yh(){return Jo||(Jo=Fg(Ty,Iy,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ds)}catch(t){console.warn(t)}}}}).catch(n=>{throw Yt.create("idb-open",{originalErrorMessage:n.message})})),Jo}async function Ey(n){try{const t=(await yh()).transaction(ds),i=await t.objectStore(ds).get(vh(n));return await t.done,i}catch(e){if(e instanceof wt)At.warn(e.message);else{const t=Yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});At.warn(t.message)}}}async function pu(n,e){try{const i=(await yh()).transaction(ds,"readwrite");await i.objectStore(ds).put(e,vh(n)),await i.done}catch(t){if(t instanceof wt)At.warn(t.message);else{const i=Yt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});At.warn(i.message)}}}function vh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Sy=1024,Ay=30;class ky{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ry(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=mu();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>Ay){const o=Py(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){At.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=mu(),{heartbeatsToSend:i,unsentEntries:s}=Cy(this._heartbeatsCache.heartbeats),r=Sr(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return At.warn(t),""}}}function mu(){return new Date().toISOString().substring(0,10)}function Cy(n,e=Sy){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),gu(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),gu(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Ry{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mg()?gg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ey(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return pu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return pu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function gu(n){return Sr(JSON.stringify({version:2,heartbeats:n})).length}function Py(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(n){xn(new nn("platform-logger",e=>new Hg(e),"PRIVATE")),xn(new nn("heartbeat",e=>new ky(e),"PRIVATE")),ht(ga,hu,n),ht(ga,hu,"esm2020"),ht("fire-js","")}xy("");var Ly="firebase",Dy="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ht(Ly,Dy,"app");function wh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ny=wh,_h=new _s("auth","Firebase",wh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new Ya("@firebase/auth");function Oy(n,...e){kr.logLevel<=Y.WARN&&kr.warn(`Auth (${Un}): ${n}`,...e)}function ur(n,...e){kr.logLevel<=Y.ERROR&&kr.error(`Auth (${Un}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(n,...e){throw tc(n,...e)}function tt(n,...e){return tc(n,...e)}function ec(n,e,t){const i={...Ny(),[e]:t};return new _s("auth","Firebase",i).create(e,{appName:n.name})}function ft(n){return ec(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function bh(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&Ye(n,"argument-error"),ec(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function tc(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return _h.create(n,...e)}function B(n,e,...t){if(!n)throw tc(e,...t)}function It(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ur(e),new Error(e)}function kt(n,e){n||It(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function My(){return yu()==="http:"||yu()==="https:"}function yu(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(My()||dg()||"connection"in navigator)?navigator.onLine:!0}function Vy(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t){this.shortDelay=e,this.longDelay=t,kt(t>e,"Short delay should be less than long delay!"),this.isMobile=cg()||hg()}get(){return $y()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(n,e){kt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;It("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;It("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;It("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],jy=new Ts(3e4,6e4);function hn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Pt(n,e,t,i,s={}){return Ih(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const c=bs({key:n.config.apiKey,...o}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:u,...r};return ug()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&dn(n.emulatorConfig.host)&&(d.credentials="include"),Th.fetch()(await Eh(n,n.config.apiHost,t,c),d)})}async function Ih(n,e,t){n._canInitEmulator=!1;const i={...Uy,...e};try{const s=new Hy(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Qs(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const c=r.ok?o.errorMessage:o.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qs(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Qs(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw Qs(n,"user-disabled",o);const m=i[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw ec(n,m,d);Ye(n,m)}}catch(s){if(s instanceof wt)throw s;Ye(n,"network-request-failed",{message:String(s)})}}async function Is(n,e,t,i,s={}){const r=await Pt(n,e,t,i,s);return"mfaPendingCredential"in r&&Ye(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function Eh(n,e,t,i){const s=`${e}${t}?${i}`,r=n,o=r.config.emulator?nc(n.config,s):`${n.config.apiScheme}://${s}`;return Fy.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function By(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Hy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(tt(this.auth,"network-request-failed")),jy.get())})}}function Qs(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=tt(n,e,i);return s.customData._tokenResponse=t,s}function vu(n){return n!==void 0&&n.enterprise!==void 0}class zy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return By(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function qy(n,e){return Pt(n,"GET","/v2/recaptchaConfig",hn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wy(n,e){return Pt(n,"POST","/v1/accounts:delete",e)}async function Cr(n,e){return Pt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Gy(n,e=!1){const t=Re(n),i=await t.getIdToken(e),s=ic(i);B(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:es(Yo(s.auth_time)),issuedAtTime:es(Yo(s.iat)),expirationTime:es(Yo(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Yo(n){return Number(n)*1e3}function ic(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return ur("JWT malformed, contained fewer than 3 sections"),null;try{const s=ch(t);return s?JSON.parse(s):(ur("Failed to decode base64 JWT payload"),null)}catch(s){return ur("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function wu(n){const e=ic(n);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ai(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof wt&&Ky(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Ky({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=es(this.lastLoginAt),this.creationTime=es(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rr(n){var y;const e=n.auth,t=await n.getIdToken(),i=await ai(n,Cr(e,{idToken:t}));B(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const r=(y=s.providerUserInfo)!=null&&y.length?Sh(s.providerUserInfo):[],o=Yy(n.providerData,r),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),d=c?u:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new _a(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,m)}async function Jy(n){const e=Re(n);await Rr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yy(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Sh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xy(n,e){const t=await Ih(n,{},async()=>{const i=bs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=await Eh(n,s,"/v1/token",`key=${r}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:i};return n.emulatorConfig&&dn(n.emulatorConfig.host)&&(u.credentials="include"),Th.fetch()(o,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Zy(n,e){return Pt(n,"POST","/v2/accounts:revokeToken",hn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){B(e.length!==0,"internal-error");const t=wu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Xy(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new Xn;return i&&(B(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(B(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(B(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xn,this.toJSON())}_performRefresh(){return It("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(n,e){B(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ze{constructor({uid:e,auth:t,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new Qy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new _a(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ai(this,this.stsTokenManager.getToken(this.auth,e));return B(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Gy(this,e)}reload(){return Jy(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ze({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Rr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ue(this.auth.app))return Promise.reject(ft(this.auth));const e=await this.getIdToken();return await ai(this,Wy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,s=t.email??void 0,r=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,u=t._redirectEventId??void 0,d=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:y,emailVerified:w,isAnonymous:C,providerData:x,stsTokenManager:O}=t;B(y&&O,e,"internal-error");const L=Xn.fromJSON(this.name,O);B(typeof y=="string",e,"internal-error"),Ut(i,e.name),Ut(s,e.name),B(typeof w=="boolean",e,"internal-error"),B(typeof C=="boolean",e,"internal-error"),Ut(r,e.name),Ut(o,e.name),Ut(c,e.name),Ut(u,e.name),Ut(d,e.name),Ut(m,e.name);const z=new Ze({uid:y,auth:e,email:s,emailVerified:w,displayName:i,isAnonymous:C,photoURL:o,phoneNumber:r,tenantId:c,stsTokenManager:L,createdAt:d,lastLoginAt:m});return x&&Array.isArray(x)&&(z.providerData=x.map(G=>({...G}))),u&&(z._redirectEventId=u),z}static async _fromIdTokenResponse(e,t,i=!1){const s=new Xn;s.updateFromServerResponse(t);const r=new Ze({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Rr(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];B(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Sh(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),c=new Xn;c.updateFromIdToken(i);const u=new Ze({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new _a(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=new Map;function Et(n){kt(n instanceof Function,"Expected a class definition");let e=_u.get(n);return e?(kt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,_u.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ah.type="NONE";const bu=Ah;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(n,e,t){return`firebase:${n}:${e}:${t}`}class Zn{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=dr(this.userKey,s.apiKey,r),this.fullPersistenceKey=dr("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Cr(this.auth,{idToken:e}).catch(()=>{});return t?Ze._fromGetAccountInfoResponse(this.auth,t,e):null}return Ze._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Zn(Et(bu),e,i);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let r=s[0]||Et(bu);const o=dr(i,e.config.apiKey,e.name);let c=null;for(const d of t)try{const m=await d._get(o);if(m){let y;if(typeof m=="string"){const w=await Cr(e,{idToken:m}).catch(()=>{});if(!w)break;y=await Ze._fromGetAccountInfoResponse(e,w,m)}else y=Ze._fromJSON(e,m);d!==r&&(c=y),r=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!r._shouldAllowMigration||!u.length?new Zn(r,e,i):(r=u[0],c&&await r._set(o,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==r)try{await d._remove(o)}catch{}})),new Zn(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ph(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lh(e))return"Blackberry";if(Dh(e))return"Webos";if(Ch(e))return"Safari";if((e.includes("chrome/")||Rh(e))&&!e.includes("edge/"))return"Chrome";if(xh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function kh(n=Oe()){return/firefox\//i.test(n)}function Ch(n=Oe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Rh(n=Oe()){return/crios\//i.test(n)}function Ph(n=Oe()){return/iemobile/i.test(n)}function xh(n=Oe()){return/android/i.test(n)}function Lh(n=Oe()){return/blackberry/i.test(n)}function Dh(n=Oe()){return/webos/i.test(n)}function sc(n=Oe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ev(n=Oe()){var e;return sc(n)&&!!((e=window.navigator)!=null&&e.standalone)}function tv(){return fg()&&document.documentMode===10}function Nh(n=Oe()){return sc(n)||xh(n)||Dh(n)||Lh(n)||/windows phone/i.test(n)||Ph(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(n,e=[]){let t;switch(n){case"Browser":t=Tu(Oe());break;case"Worker":t=`${Tu(Oe())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Un}/${i}`}/**
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
 */class nv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,c)=>{try{const u=e(r);o(u)}catch(u){c(u)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function iv(n,e={}){return Pt(n,"GET","/v2/passwordPolicy",hn(n,e))}/**
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
 */const sv=6;class rv{constructor(e){var i;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??sv,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Iu(this),this.idTokenSubscription=new Iu(this),this.beforeStateQueue=new nv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_h,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Et(t)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await Zn.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Cr(this,{idToken:e}),i=await Ze._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(Ue(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,c=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===c)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Rr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Vy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ue(this.app))return Promise.reject(ft(this));const t=e?Re(e):null;return t&&B(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ue(this.app)?Promise.reject(ft(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ue(this.app)?Promise.reject(ft(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Et(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await iv(this),t=new rv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new _s("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Zy(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Et(e)||this._popupRedirectResolver;B(t,this,"argument-error"),this.redirectPersistenceManager=await Zn.create(this,[Et(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(c,this,"internal-error"),c.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,i,s);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Oh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;if(Ue(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Oy(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function _t(n){return Re(n)}class Iu{constructor(e){this.auth=e,this.observer=null,this.addObserver=bg(t=>this.observer=t)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function av(n){Gr=n}function Mh(n){return Gr.loadJS(n)}function cv(){return Gr.recaptchaEnterpriseScript}function lv(){return Gr.gapiScript}function uv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class dv{constructor(){this.enterprise=new hv}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class hv{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const fv="recaptcha-enterprise",$h="NO_RECAPTCHA";class pv{constructor(e){this.type=fv,this.auth=_t(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,c)=>{qy(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new zy(u);return r.tenantId==null?r._agentRecaptchaConfig=d:r._tenantRecaptchaConfigs[r.tenantId]=d,o(d.siteKey)}}).catch(u=>{c(u)})})}function s(r,o,c){const u=window.grecaptcha;vu(u)?u.enterprise.ready(()=>{u.enterprise.execute(r,{action:e}).then(d=>{o(d)}).catch(()=>{o($h)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new dv().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(c=>{if(!t&&vu(window.grecaptcha))s(c,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=cv();u.length!==0&&(u+=c),Mh(u).then(()=>{s(c,r,o)}).catch(d=>{o(d)})}}).catch(c=>{o(c)})})}}async function Eu(n,e,t,i=!1,s=!1){const r=new pv(n);let o;if(s)o=$h;else try{o=await r.verify(t)}catch{o=await r.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return i?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function ba(n,e,t,i,s){var r;if((r=n._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Eu(n,e,t,t==="getOobCode");return i(n,o)}else return i(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Eu(n,e,t,t==="getOobCode");return i(n,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(n,e){const t=Wr(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(Pn(r,e??{}))return s;Ye(s,"already-initialized")}return t.initialize({options:e})}function gv(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Et);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function yv(n,e,t){const i=_t(n);B(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=Vh(e),{host:o,port:c}=vv(e),u=c===null?"":`:${c}`,d={url:`${r}//${o}${u}/`},m=Object.freeze({host:o,port:c,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){B(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),B(Pn(d,i.config.emulator)&&Pn(m,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=d,i.emulatorConfig=m,i.settings.appVerificationDisabledForTesting=!0,dn(o)?(Qa(`${r}//${o}${u}`),Ja("Auth",!0)):wv()}function Vh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function vv(n){const e=Vh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Su(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Su(o)}}}function Su(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function wv(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return It("not implemented")}_getIdTokenResponse(e){return It("not implemented")}_linkToIdToken(e,t){return It("not implemented")}_getReauthenticationResolver(e){return It("not implemented")}}async function _v(n,e){return Pt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bv(n,e){return Is(n,"POST","/v1/accounts:signInWithPassword",hn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tv(n,e){return Is(n,"POST","/v1/accounts:signInWithEmailLink",hn(n,e))}async function Iv(n,e){return Is(n,"POST","/v1/accounts:signInWithEmailLink",hn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends rc{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new hs(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new hs(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ba(e,t,"signInWithPassword",bv);case"emailLink":return Tv(e,{email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ba(e,i,"signUpPassword",_v);case"emailLink":return Iv(e,{idToken:t,email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ei(n,e){return Is(n,"POST","/v1/accounts:signInWithIdp",hn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev="http://localhost";class Ct extends rc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ct(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ye("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...r}=t;if(!i||!s)return null;const o=new Ct(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ei(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,ei(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ei(e,t)}buildRequest(){const e={requestUri:Ev,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=bs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Av(n){const e=Wi(Gi(n)).link,t=e?Wi(Gi(e)).deep_link_id:null,i=Wi(Gi(n)).deep_link_id;return(i?Wi(Gi(i)).link:null)||i||t||e||n}class oc{constructor(e){const t=Wi(Gi(e)),i=t.apiKey??null,s=t.oobCode??null,r=Sv(t.mode??null);B(i&&s&&r,"argument-error"),this.apiKey=i,this.operation=r,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Av(e);try{return new oc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(){this.providerId=mi.PROVIDER_ID}static credential(e,t){return hs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=oc.parseLink(t);return B(i,"argument-error"),hs._fromEmailAndCode(e,i.code,i.tenantId)}}mi.PROVIDER_ID="password";mi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";mi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends Kr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ts extends gi{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return B("providerId"in t&&"signInMethod"in t,"argument-error"),Ct._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return B(e.idToken||e.accessToken,"argument-error"),Ct._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return ts.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ts.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:r,nonce:o,providerId:c}=e;if(!i&&!s&&!t&&!r||!c)return null;try{return new ts(c)._credential({idToken:t,accessToken:i,nonce:o,pendingToken:r})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends gi{constructor(){super("facebook.com")}static credential(e){return Ct._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bt.credential(e.oauthAccessToken)}catch{return null}}}Bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends gi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ct._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Tt.credential(t,i)}catch{return null}}}Tt.GOOGLE_SIGN_IN_METHOD="google.com";Tt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends gi{constructor(){super("github.com")}static credential(e){return Ct._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ht.credential(e.oauthAccessToken)}catch{return null}}}Ht.GITHUB_SIGN_IN_METHOD="github.com";Ht.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends gi{constructor(){super("twitter.com")}static credential(e,t){return Ct._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return zt.credential(t,i)}catch{return null}}}zt.TWITTER_SIGN_IN_METHOD="twitter.com";zt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kv(n,e){return Is(n,"POST","/v1/accounts:signUp",hn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await Ze._fromIdTokenResponse(e,i,s),o=Au(i);return new Ln({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Au(i);return new Ln({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Au(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends wt{constructor(e,t,i,s){super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Pr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Pr(e,t,i,s)}}function Uh(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Pr._fromErrorAndOperation(n,r,e,i):r})}async function Cv(n,e,t=!1){const i=await ai(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ln._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rv(n,e,t=!1){const{auth:i}=n;if(Ue(i.app))return Promise.reject(ft(i));const s="reauthenticate";try{const r=await ai(n,Uh(i,s,e,n),t);B(r.idToken,i,"internal-error");const o=ic(r.idToken);B(o,i,"internal-error");const{sub:c}=o;return B(n.uid===c,i,"user-mismatch"),Ln._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ye(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fh(n,e,t=!1){if(Ue(n.app))return Promise.reject(ft(n));const i="signIn",s=await Uh(n,i,e),r=await Ln._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function Pv(n,e){return Fh(_t(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jh(n){const e=_t(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function xv(n,e,t){if(Ue(n.app))return Promise.reject(ft(n));const i=_t(n),o=await ba(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",kv).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&jh(n),u}),c=await Ln._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(c.user),c}function Lv(n,e,t){return Ue(n.app)?Promise.reject(ft(n)):Pv(Re(n),mi.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&jh(n),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dv(n,e){return Pt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nv(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=Re(n),r={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await ai(i,Dv(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const c=i.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function Ov(n,e,t,i){return Re(n).onIdTokenChanged(e,t,i)}function Mv(n,e,t){return Re(n).beforeAuthStateChanged(e,t)}function $v(n,e,t,i){return Re(n).onAuthStateChanged(e,t,i)}function Vv(n){return Re(n).signOut()}const xr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(xr,"1"),this.storage.removeItem(xr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=1e3,Fv=10;class Hh extends Bh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Nh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);tv()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Fv):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Uv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hh.type="LOCAL";const jv=Hh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh extends Bh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}zh.type="SESSION";const qh=zh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Qr(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const c=Array.from(o).map(async d=>d(t.origin,r)),u=await Bv(c);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((c,u)=>{const d=ac("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(y){const w=y;if(w.data.eventId===d)switch(w.data.status){case"ack":clearTimeout(m),r=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),c(w.data.response);break;default:clearTimeout(m),clearTimeout(r),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return window}function zv(n){pt().location.href=n}/**
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
 */function Wh(){return typeof pt().WorkerGlobalScope<"u"&&typeof pt().importScripts=="function"}async function qv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Wv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Gv(){return Wh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh="firebaseLocalStorageDb",Kv=1,Lr="firebaseLocalStorage",Kh="fbase_key";class Es{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Jr(n,e){return n.transaction([Lr],e?"readwrite":"readonly").objectStore(Lr)}function Qv(){const n=indexedDB.deleteDatabase(Gh);return new Es(n).toPromise()}function Ta(){const n=indexedDB.open(Gh,Kv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Lr,{keyPath:Kh})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Lr)?e(i):(i.close(),await Qv(),e(await Ta()))})})}async function ku(n,e,t){const i=Jr(n,!0).put({[Kh]:e,value:t});return new Es(i).toPromise()}async function Jv(n,e){const t=Jr(n,!1).get(e),i=await new Es(t).toPromise();return i===void 0?null:i.value}function Cu(n,e){const t=Jr(n,!0).delete(e);return new Es(t).toPromise()}const Yv=800,Xv=3;class Qh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ta(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Xv)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qr._getInstance(Gv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await qv(),!this.activeServiceWorker)return;this.sender=new Hv(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Wv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ta();return await ku(e,xr,"1"),await Cu(e,xr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>ku(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Jv(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Cu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Jr(s,!1).getAll();return new Es(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Yv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qh.type="LOCAL";const Zv=Qh;new Ts(3e4,6e4);/**
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
 */function cc(n,e){return e?Et(e):(B(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc extends rc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ei(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ei(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ei(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ew(n){return Fh(n.auth,new lc(n),n.bypassAuthState)}function tw(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),Rv(t,new lc(n),n.bypassAuthState)}async function nw(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),Cv(t,new lc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ew;case"linkViaPopup":case"linkViaRedirect":return nw;case"reauthViaPopup":case"reauthViaRedirect":return tw;default:Ye(this.auth,"internal-error")}}resolve(e){kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw=new Ts(2e3,1e4);async function Yh(n,e,t){if(Ue(n.app))return Promise.reject(tt(n,"operation-not-supported-in-this-environment"));const i=_t(n);bh(n,e,Kr);const s=cc(i,t);return new Sn(i,"signInViaPopup",e,s).executeNotNull()}class Sn extends Jh{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Sn.currentPopupAction&&Sn.currentPopupAction.cancel(),Sn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){kt(this.filter.length===1,"Popup operations only handle one event");const e=ac();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)==null?void 0:t.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iw.get())};e()}}Sn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw="pendingRedirect",hr=new Map;class rw extends Jh{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=hr.get(this.auth._key());if(!e){try{const i=await ow(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}hr.set(this.auth._key(),e)}return this.bypassAuthState||hr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ow(n,e){const t=Zh(e),i=Xh(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}async function aw(n,e){return Xh(n)._set(Zh(e),"true")}function cw(n,e){hr.set(n._key(),e)}function Xh(n){return Et(n._redirectPersistence)}function Zh(n){return dr(sw,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(n,e,t){return lw(n,e,t)}async function lw(n,e,t){if(Ue(n.app))return Promise.reject(ft(n));const i=_t(n);bh(n,e,Kr),await i._initializationPromise;const s=cc(i,t);return await aw(s,i),s._openRedirect(i,e,"signInViaRedirect")}async function uw(n,e){return await _t(n)._initializationPromise,tf(n,e,!1)}async function tf(n,e,t=!1){if(Ue(n.app))return Promise.reject(ft(n));const i=_t(n),s=cc(i,e),o=await new rw(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw=600*1e3;class hw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!nf(e)){const s=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";t.onError(tt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ru(e))}saveEventToCache(e){this.cachedEventUids.add(Ru(e)),this.lastProcessedEventTime=Date.now()}}function Ru(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function nf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pw(n,e={}){return Pt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gw=/^https?/;async function yw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await pw(n);for(const t of e)try{if(vw(t))return}catch{}Ye(n,"unauthorized-domain")}function vw(n){const e=wa(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!gw.test(t))return!1;if(mw.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const ww=new Ts(3e4,6e4);function Pu(){const n=pt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function _w(n){return new Promise((e,t)=>{var s,r,o;function i(){Pu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pu(),t(tt(n,"network-request-failed"))},timeout:ww.get()})}if((r=(s=pt().gapi)==null?void 0:s.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=pt().gapi)!=null&&o.load)i();else{const c=uv("iframefcb");return pt()[c]=()=>{gapi.load?i():t(tt(n,"network-request-failed"))},Mh(`${lv()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw fr=null,e})}let fr=null;function bw(n){return fr=fr||_w(n),fr}/**
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
 */const Tw=new Ts(5e3,15e3),Iw="__/auth/iframe",Ew="emulator/auth/iframe",Sw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Aw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kw(n){const e=n.config;B(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?nc(e,Ew):`https://${n.config.authDomain}/${Iw}`,i={apiKey:e.apiKey,appName:n.name,v:Un},s=Aw.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${bs(i).slice(1)}`}async function Cw(n){const e=await bw(n),t=pt().gapi;return B(t,n,"internal-error"),e.open({where:document.body,url:kw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Sw,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=tt(n,"network-request-failed"),c=pt().setTimeout(()=>{r(o)},Tw.get());function u(){pt().clearTimeout(c),s(i)}i.ping(u).then(u,()=>{r(o)})}))}/**
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
 */const Rw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Pw=500,xw=600,Lw="_blank",Dw="http://localhost";class xu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Nw(n,e,t,i=Pw,s=xw){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u={...Rw,width:i.toString(),height:s.toString(),top:r,left:o},d=Oe().toLowerCase();t&&(c=Rh(d)?Lw:t),kh(d)&&(e=e||Dw,u.scrollbars="yes");const m=Object.entries(u).reduce((w,[C,x])=>`${w}${C}=${x},`,"");if(ev(d)&&c!=="_self")return Ow(e||"",c),new xu(null);const y=window.open(e||"",c,m);B(y,n,"popup-blocked");try{y.focus()}catch{}return new xu(y)}function Ow(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const Mw="__/auth/handler",$w="emulator/auth/handler",Vw=encodeURIComponent("fac");async function Lu(n,e,t,i,s,r){B(n.config.authDomain,n,"auth-domain-config-required"),B(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Un,eventId:s};if(e instanceof Kr){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",_g(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,y]of Object.entries({}))o[m]=y}if(e instanceof gi){const m=e.getScopes().filter(y=>y!=="");m.length>0&&(o.scopes=m.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const u=await n._getAppCheckToken(),d=u?`#${Vw}=${encodeURIComponent(u)}`:"";return`${Uw(n)}?${bs(c).slice(1)}${d}`}function Uw({config:n}){return n.emulator?nc(n,$w):`https://${n.authDomain}/${Mw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo="webStorageSupport";class Fw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qh,this._completeRedirectFn=tf,this._overrideRedirectResult=cw}async _openPopup(e,t,i,s){var o;kt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await Lu(e,t,i,wa(),s);return Nw(e,r,ac())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Lu(e,t,i,wa(),s);return zv(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(kt(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Cw(e),i=new hw(e);return t.register("authEvent",s=>(B(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Xo,{type:Xo},s=>{var o;const r=(o=s==null?void 0:s[0])==null?void 0:o[Xo];r!==void 0&&t(!!r),Ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=yw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Nh()||Ch()||sc()}}const jw=Fw;var Du="@firebase/auth",Nu="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zw(n){xn(new nn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=i.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const u={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Oh(n)},d=new ov(i,s,r,u);return gv(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),xn(new nn("auth-internal",e=>{const t=_t(e.getProvider("auth").getImmediate());return(i=>new Bw(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ht(Du,Nu,Hw(n)),ht(Du,Nu,"esm2020")}/**
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
 */const qw=300,Ww=hh("authIdTokenMaxAge")||qw;let Ou=null;const Gw=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Ww)return;const s=t==null?void 0:t.token;Ou!==s&&(Ou=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Kw(n=Za()){const e=Wr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=mv(n,{popupRedirectResolver:jw,persistence:[Zv,jv,qh]}),i=hh("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=Gw(r.toString());Mv(t,o,()=>o(t.currentUser)),Ov(t,c=>o(c))}}const s=lh("auth");return s&&yv(t,`http://${s}`),t}function Qw(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}av({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=tt("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",Qw().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zw("Browser");const Jw={apiKey:"AIzaSyAFURz8fEGSTameAW5YvBKWpr2LXv9Ang0",authDomain:"family-pantry-c65d6.firebaseapp.com",projectId:"family-pantry-c65d6",storageBucket:"family-pantry-c65d6.firebasestorage.app",messagingSenderId:"710701847077",appId:"1:710701847077:web:407a8937330ad2ebcfe5cc"},uc=gh(Jw),Xe=Kw(uc);window._firebaseAuth=Xe;const Mu=new Tt,Dr=new ts("apple.com");Dr.addScope("email");Dr.addScope("name");let dc=null;const pr=[];function Yw(n){return pr.push(n),n(dc),()=>{const e=pr.indexOf(n);e!==-1&&pr.splice(e,1)}}function Xw(n){dc=n,pr.forEach(e=>e(n))}$v(Xe,n=>{Xw(n||null)});uw(Xe).catch(n=>{n.code!=="auth/redirect-cancelled-by-user"&&console.error("Redirect sign-in error:",n)});async function Zw(){try{return(await Yh(Xe,Mu)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await ef(Xe,Mu),null;throw n}}async function e_(){try{return(await Yh(Xe,Dr)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await ef(Xe,Dr),null;throw n}}async function t_(n,e){return(await Lv(Xe,n,e)).user}async function n_(n,e,t){const i=await xv(Xe,n,e);return t&&await Nv(i.user,{displayName:t}),i.user}async function i_(){await Vv(Xe)}async function sf(){return Xe.currentUser?Xe.currentUser.getIdToken():null}function ce(){return dc}async function Yr(n,e,t){const i={"Content-Type":"application/json"},s=await sf();s&&(i.Authorization=`Bearer ${s}`);const r=await fetch("/api/db",{method:"POST",headers:i,body:JSON.stringify({op:n,path:e,data:t})});if(!(r.headers.get("content-type")||"").includes("application/json"))throw new Error(`/api/db non-JSON response (status ${r.status}) for ${n} ${e}`);return r.json()}async function Ne(n){try{return(await Yr("list",n)).docs||[]}catch(e){return console.warn("dbList:",n,e.message),[]}}async function K(n,e){return Yr("set",n,e)}async function xt(n){return Yr("delete",n)}async function ie(n){try{return(await Yr("get",n)).doc||null}catch{return null}}function rf(){return Math.random().toString(36).slice(2,8).toUpperCase()}async function Ia(n){var t;const e={name:n.displayName||((t=n.email)==null?void 0:t.split("@")[0])||"User",email:n.email||"",createdAt:new Date().toISOString(),householdIds:[]};return await K(`users/${n.uid}`,e),e}async function of(n,e){var o;const t=ce(),i=n,s=rf(),r={name:e||"My Kitchen",ownerUid:n,members:[{uid:n,name:(t==null?void 0:t.displayName)||((o=t==null?void 0:t.email)==null?void 0:o.split("@")[0])||"Owner",role:"owner"}],memberUids:[n],inviteCode:s,createdAt:new Date().toISOString()};try{await K(`households/${i}`,r),await K(`household_codes/${s}`,{householdId:i})}catch(c){console.error(`[createHousehold] FAILED to write households/${i}:`,c)}return{hid:i,...r}}async function s_(n){const e=await ie(`household_codes/${n.toUpperCase()}`);return(e==null?void 0:e.householdId)||null}async function af(n,e){var c;const t=await s_(n);if(!t)return null;const i=await ie(`households/${t}`);if(!i)return null;const s=i.members||[],r=i.memberUids||s.map(u=>u.uid);s.find(u=>u.uid===e.uid)||(s.push({uid:e.uid,name:e.displayName||((c=e.email)==null?void 0:c.split("@")[0])||"Member",role:"member"}),r.includes(e.uid)||r.push(e.uid),await K(`households/${t}`,{...i,members:s,memberUids:r,id:void 0}));const o=await ie(`users/${e.uid}`);if(o){const u=o.householdIds||[];u.includes(t)||(u.push(t),await K(`users/${e.uid}`,{...o,householdIds:u,id:void 0}))}return t}async function r_(n){const e=await ie(`households/${n}`);if(!e)return null;if(e.inviteCode)try{await xt(`household_codes/${e.inviteCode}`)}catch{}const t=rf();return await K(`household_codes/${t}`,{householdId:n}),await K(`households/${n}`,{...e,inviteCode:t,id:void 0}),t}async function o_(n,e){const t=await ie(`households/${n}`);if(!t)return;const i=(t.members||[]).filter(r=>r.uid!==e),s=(t.memberUids||[]).filter(r=>r!==e);await K(`households/${n}`,{...t,members:i,memberUids:s,id:void 0});try{const r=await ie(`users/${e}`);if(r){const o=(r.householdIds||[]).filter(c=>c!==n);await K(`users/${e}`,{...r,householdIds:o,id:void 0})}}catch{}}async function $u(n,e){const t=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog"];for(const i of t){const s=await Ne(`households/${n}/${i}`);for(const r of s){const o=r.id,c={...r};delete c.id,await K(`households/${e}/${i}/${o}`,c)}}}async function a_(n){var u,d;const e=n.uid;console.log(`[resolveHousehold] ENTER — uid=${e}`);const t=await ie(`users/${e}`);if(console.log("[resolveHousehold] userDoc=",t),t){const m=(u=t.householdIds)!=null&&u.length?t.householdIds[0]:e;console.log(`[resolveHousehold] RETURNING USER — hid=${m}, householdIds=`,t.householdIds);const y=localStorage.getItem("ks-h");return console.log(`[resolveHousehold] RETURNING USER — ks-h="${y}", hid="${m}", uid="${e}"`),console.log(`[resolveHousehold] RETURNING USER — migration condition: oldHid=${!!y}, oldHid!==hid=${y!==m}, oldHid!==uid=${y!==e}`),y&&y!==m&&y!==e?(console.log(`[resolveHousehold] LATE MIGRATION TRIGGERED: ${y} → ${m}`),await $u(y,m),localStorage.removeItem("ks-h"),console.log("[resolveHousehold] Late migration DONE, ks-h removed")):console.log("[resolveHousehold] RETURNING USER — NO migration needed"),m}console.log("[resolveHousehold] FIRST-TIME LOGIN — no userDoc found");const i=localStorage.getItem("ks-h"),s=i&&i!==e;console.log(`[resolveHousehold] FIRST-TIME — ks-h="${i}", hasOldData=${s}`);const r=((d=h.cfg)==null?void 0:d.name)||"My Kitchen";console.log(`[resolveHousehold] FIRST-TIME — creating household, cfgName="${r}"`),await of(e,s?r:"My Kitchen"),s&&(console.log(`[resolveHousehold] FIRST-TIME MIGRATION: ${i} → ${e}`),await $u(i,e),console.log("[resolveHousehold] FIRST-TIME MIGRATION DONE"));const o=await Ia(n);o.householdIds=[e],await K(`users/${e}`,o),console.log("[resolveHousehold] User profile created & saved"),localStorage.removeItem("ks-h");const c=je("ks-hhs");if(c){const m=c.filter(y=>y!==i);m.includes(e)||m.push(e),localStorage.setItem("ks-hhs",JSON.stringify(m))}return console.log(`[resolveHousehold] EXIT — returning uid=${e}`),e}async function Dn(n,e){e?(h.mp[n]=e,await K(`households/${h.hid}/mealplan/${n}`,{date:n,meal:e})):(delete h.mp[n],await xt(`households/${h.hid}/mealplan/${n}`))}async function Xr(){await K(`households/${h.hid}/settings/config`,h.cfg)}async function cf(n,e){const t={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:e||Ea(),loggedAt:new Date().toISOString()};h.cookLog.unshift(t),h.cookLog.length>200&&(h.cookLog=h.cookLog.slice(0,200)),await K(`households/${h.hid}/cooklog/${t.id}`,t)}async function c_(n){if(h.wasteLog.find(t=>t.name===n&&t.date===Ea()))return;const e={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:Ea(),loggedAt:new Date().toISOString()};h.wasteLog.unshift(e),h.wasteLog.length>100&&(h.wasteLog=h.wasteLog.slice(0,100)),await K(`households/${h.hid}/wastelog/${e.id}`,e)}async function l_(){try{try{const r=await ie(`households/${h.hid}`);r&&r.inviteCode&&(await ie(`household_codes/${r.inviteCode}`)||(await K(`household_codes/${r.inviteCode}`,{householdId:h.hid}),console.log(`[backfill] Created household_codes/${r.inviteCode} for household ${h.hid}`)))}catch(r){console.warn("[backfill] household_codes backfill skipped:",r.message)}const e=(await Ne(`households/${h.hid}/settings`)).find(r=>r.id==="config");if(e)h.cfg={...Er,...e};else{const r=je("ks-c");h.cfg={...Er,...r||{}},await Xr(),r&&localStorage.removeItem("ks-c")}const t=await Ne(`households/${h.hid}/mealplan`);if(h.mp={},t.forEach(r=>{r.date&&r.meal&&(h.mp[r.date]=r.meal)}),!t.length){const r=je("ks-m");if(r&&Object.keys(r).length){h.mp=r;for(const[o,c]of Object.entries(r))await Dn(o,c);localStorage.removeItem("ks-m")}}const i=await Ne(`households/${h.hid}/cooklog`);if(i.length)h.cookLog=i.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=je("ks-cooklog");if(r&&r.length){h.cookLog=r.map((o,c)=>({id:o.id||(Date.now()-c).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of h.cookLog)await K(`households/${h.hid}/cooklog/${o.id}`,o);localStorage.removeItem("ks-cooklog")}}const s=await Ne(`households/${h.hid}/wastelog`);if(s.length)h.wasteLog=s.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=je("ks-waste");if(r&&r.length){h.wasteLog=r.map((o,c)=>({id:o.id||(Date.now()-c).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of h.wasteLog)await K(`households/${h.hid}/wastelog/${o.id}`,o);localStorage.removeItem("ks-waste")}}}catch(n){console.error("loadFirestoreData error:",n)}}let ns=0;function yi(){ns++,ns===1&&window._pollIntervalId&&(clearInterval(window._pollIntervalId),window._pollIntervalId=null)}function vi(){ns--,ns<=0&&(ns=0,window._pollFn&&!window._pollIntervalId&&(window._pollFn(),window._pollIntervalId=setInterval(window._pollFn,3e4)))}const U={renderAll:null,renderSum:null,renderRecs:null,renderShop:null};function he(n){var i;const e=document.getElementById("sdot"),t=document.getElementById("slb");e&&(e.className="sdot "+n),t&&(t.textContent=n==="synced"?"🏠 "+(((i=h.cfg)==null?void 0:i.name)||h.hid):n==="syncing"?"Syncing…":"Sync error")}async function be(n){var e,t;he("syncing"),yi();try{const i=!h.inv.find(s=>s.id===n.id);h.inv=[...h.inv.filter(s=>s.id!==n.id),n],(e=U.renderAll)==null||e.call(U),(t=U.renderSum)==null||t.call(U),await K(`households/${h.hid}/inventory/${n.id}`,n),i&&hc("added",n.name+" to inventory"),he("synced")}catch(i){console.error(i),he("error")}finally{vi()}}async function Zr(n){var e,t;he("syncing"),yi();try{const i=h.inv.find(s=>s.id===n);h.inv=h.inv.filter(s=>s.id!==n),(e=U.renderAll)==null||e.call(U),(t=U.renderSum)==null||t.call(U),await xt(`households/${h.hid}/inventory/${n}`),i&&hc("removed",i.name+" from inventory"),he("synced")}catch(i){console.error(i),he("error")}finally{vi()}}async function sn(n){var e,t;yi();try{h.recs=[...h.recs.filter(i=>i.id!==n.id),n],(e=U.renderRecs)==null||e.call(U),(t=U.renderSum)==null||t.call(U),await K(`households/${h.hid}/recipes/${n.id}`,n)}catch(i){console.error(i)}finally{vi()}}async function u_(n){var e,t;yi();try{h.recs=h.recs.filter(i=>i.id!==n),(e=U.renderRecs)==null||e.call(U),(t=U.renderSum)==null||t.call(U),await xt(`households/${h.hid}/recipes/${n}`)}catch(i){console.error(i)}finally{vi()}}async function Se(n){var e,t;yi();try{const i=!h.shop.find(s=>s.id===n.id);h.shop=[...h.shop.filter(s=>s.id!==n.id),n],(e=U.renderShop)==null||e.call(U),(t=U.renderSum)==null||t.call(U),await K(`households/${h.hid}/shopping/${n.id}`,n),i&&hc("added",n.name+" to shopping list")}catch(i){console.error(i)}finally{vi()}}async function Ss(n){var e,t;yi();try{h.shop=h.shop.filter(i=>i.id!==n),(e=U.renderShop)==null||e.call(U),(t=U.renderSum)==null||t.call(U),await xt(`households/${h.hid}/shopping/${n}`)}catch(i){console.error(i)}finally{vi()}}async function lf(n,e,t){var r;const i=n.id,s={title:n.name,ingredients:n.description||"",steps:n.steps||"",tags:n.tags||[],cuisine:n.cuisine||"",imageUrl:n.imageUrl||null,prepTime:n.prepTime||"",cookTime:n.cookTime||"",totalTime:n.totalTime||"",servings:n.servings||"",ingredientsRaw:n.ingredientsRaw||[],stepsRaw:n.stepsRaw||[],authorName:e||"Anonymous",authorUsername:h.username||"",authorUid:((r=ce())==null?void 0:r.uid)||"",householdId:t||h.hid,createdAt:new Date().toISOString(),likes:0,ratingSum:0,ratingCount:0,avgRating:0};return await K(`public_recipes/${i}`,s),{id:i,...s}}async function uf(n){await xt(`public_recipes/${n}`)}async function d_(){return Ne("public_recipes")}async function h_(n,e){var o;const t=(o=ce())==null?void 0:o.uid;if(!t)return;const i=`public_recipes/${n}/likes/${t}`;e?await xt(i):await K(i,{likedAt:new Date().toISOString()});const s=await Ne(`public_recipes/${n}/likes`),r=await ie(`public_recipes/${n}`);r&&await K(`public_recipes/${n}`,{...r,likes:s.length,id:void 0})}async function f_(n,e,t){var o;const i=(o=ce())==null?void 0:o.uid;if(!i||!e.trim())return;const s="cmt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),r={text:e.trim(),authorName:t,authorUid:i,createdAt:new Date().toISOString()};return await K(`public_recipes/${n}/comments/${s}`,r),{id:s,...r}}async function p_(n){return Ne(`public_recipes/${n}/comments`)}async function m_(n){var i;const e=(i=ce())==null?void 0:i.uid;return e?!!await ie(`public_recipes/${n}/likes/${e}`):!1}async function g_(n){const t={id:"rec-"+Date.now(),name:n.title,description:n.ingredients||"",notes:n.steps||"",tags:n.tags||[],cuisine:n.cuisine||"",imageUrl:n.imageUrl||null,prepTime:n.prepTime||"",cookTime:n.cookTime||"",totalTime:n.totalTime||"",servings:n.servings||"",ingredientsRaw:n.ingredientsRaw||[],stepsRaw:n.stepsRaw||[],rating:0,favorited:!1,source:"Community",sourceUrl:null,cookCount:0,savedAt:new Date().toLocaleDateString()};return await sn(t),t}async function df(n){return n?!await ie(`usernames/${n.toLowerCase()}`):!1}async function hf(n,e){const t=await ie(`users/${n}`),i=t==null?void 0:t.username;if(i&&i.toLowerCase()!==e.toLowerCase())try{await xt(`usernames/${i.toLowerCase()}`)}catch{}await K(`usernames/${e.toLowerCase()}`,{uid:n}),t&&await K(`users/${n}`,{...t,username:e,id:void 0}),h.username=e}async function y_(n){try{const e=await ie(`users/${n}`);return(e==null?void 0:e.username)||null}catch{return null}}async function v_(n,e,t){var m;const i=(m=ce())==null?void 0:m.uid;if(!i||!e)return;const s={rating:e,text:"".trim(),authorName:localStorage.getItem("ks-who")||"Anonymous",authorUsername:h.username||"",authorUid:i,createdAt:new Date().toISOString()};await K(`public_recipes/${n}/reviews/${i}`,s);const r=await Ne(`public_recipes/${n}/reviews`),o=r.reduce((y,w)=>y+(w.rating||0),0),c=r.length,u=c>0?Math.round(o/c*10)/10:0,d=await ie(`public_recipes/${n}`);return d&&await K(`public_recipes/${n}`,{...d,ratingSum:o,ratingCount:c,avgRating:u,id:void 0}),{id:i,...s}}async function w_(n){var t;const e=(t=ce())==null?void 0:t.uid;return e?ie(`public_recipes/${n}/reviews/${e}`):null}async function hc(n,e){if(!h.hid||!e)return;const t=localStorage.getItem("ks-who")||"Someone",i="act-"+Date.now().toString(36)+Math.random().toString(36).slice(2),s={memberName:t,action:n,itemName:e,timestamp:new Date().toISOString()};try{await K(`households/${h.hid}/activity/${i}`,s),__()}catch{}}async function __(){try{const n=await Ne(`households/${h.hid}/activity`),e=Date.now()-10080*60*1e3;for(const t of n)t.timestamp&&new Date(t.timestamp).getTime()<e&&await xt(`households/${h.hid}/activity/${t.id}`)}catch{}}async function b_(){try{return(await Ne(`households/${h.hid}/activity`)).sort((e,t)=>new Date(t.timestamp||0)-new Date(e.timestamp||0)).slice(0,10)}catch{return[]}}function Ea(){return new Date().toISOString().split("T")[0]}function p(n){return document.getElementById(n)}function Gt(){return new Date().toISOString().split("T")[0]}function wi(){const n=new Date;n.setHours(0,0,0,0);const e=new Date(n);return e.setDate(n.getDate()-n.getDay()),Array.from({length:7},(t,i)=>{const s=new Date(e);return s.setDate(e.getDate()+i),s})}function T_(){const n=new Date;return n.setDate(n.getDate()+1),n.toISOString().split("T")[0]}function nt(n){if(!n)return null;const e=new Date;e.setHours(0,0,0,0);const t=new Date(n+"T00:00:00"),i=Math.round((t-e)/864e5);return i<0?{c:"expired",l:"Expired"}:i===0?{c:"expiring",l:"Expires today"}:i<=7?{c:"expiring",l:`Expires in ${i}d`}:{c:"ok",l:t.toLocaleDateString("en-US",{month:"short",day:"numeric"})}}function eo(n){return{fridge:"🌡 Fridge",freezer:"🧊 Freezer",pantry:"🥫 Pantry"}[n]||n}const fc={Produce:"🥦",Proteins:"🍗",Dairy:"🧀",Grains:"🌾",Condiments:"🧴",Snacks:"🍿",Beverages:"🥤",Frozen:"❄️",General:"📦",Imported:"📥"};function Fn(n){const e=(n.name||"").toLowerCase(),t=(n.category||"").toLowerCase();return t.includes("produce")||t.includes("vegetable")||t.includes("fruit")||e.match(/apple|banana|broccoli|carrot|celery|cabbage|tomato|onion|garlic|jalap|spinach|mushroom|squash|lettuce|cucumber|pepper/)?"Produce":t.includes("protein")||t.includes("meat")||t.includes("seafood")||t.includes("poultry")||e.match(/chicken|beef|lamb|turkey|salmon|cod|tuna|fish|steak|pork|shrimp/)?"Proteins":t.includes("dairy")||t.includes("egg")||e.match(/egg|butter|cheese|milk|cream|yogurt|ghee/)?"Dairy":t.includes("grain")||t.includes("bread")||t.includes("pasta")||e.match(/rice|pasta|bread|flour|oat|cereal|grain|noodle|tortilla/)?"Grains":t.includes("condiment")||t.includes("sauce")||e.match(/sauce|ketchup|mustard|oil|vinegar|salt|pepper|spice|herb|seasoning|mayo/)?"Condiments":n.location==="freezer"?"Frozen":"General"}function I_(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/^[-•]\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/\n/g,"<br>")}let Zo=null;function P(n){const e=p("notif");e&&(e.textContent=n,e.style.display="block",e.style.animation="none",e.offsetWidth,e.style.animation="fn 2.5s ease forwards",Zo&&clearTimeout(Zo),Zo=setTimeout(()=>e.style.display="none",2500))}function Lt(n){var e;(e=p("ov-"+n))==null||e.classList.add("active")}function ke(n){var e;(e=p("ov-"+n))==null||e.classList.remove("active")}function is(n,e){const t=p(n);t&&t.querySelectorAll(".star").forEach((i,s)=>{i.textContent=s<e?"★":"☆",i.classList.toggle("on",s<e)})}function pc(n){const e=n.toLowerCase();return/frozen|ice cream|pizza|nugget|waffle|tater|edamame|popsicle/.test(e)?"freezer":/milk|cheese|yogurt|butter|cream|egg|meat|chicken|beef|pork|fish|salmon|shrimp|tofu|deli|bacon|sausage|produce|lettuce|spinach|berry|berries|fruit|vegetable|carrot|broccoli|juice/.test(e)?"fridge":"pantry"}const E_={Produce:["apple","banana","carrot","celery","onion","garlic","tomato","lettuce","cucumber","pepper","broccoli","spinach","mushroom","lemon","lime","herb","cabbage","squash","jalap","avocado","potato","ginger"],"Meat & Fish":["chicken","beef","lamb","turkey","salmon","cod","tuna","fish","steak","shrimp","pork","bacon","sausage","ground"],"Dairy & Eggs":["egg","butter","cheese","milk","cream","yogurt","ghee","kefir"],Frozen:["frozen","ice cream","pizza","nugget","waffle","edamame","okra","lima","broccoli floret"],Pantry:["rice","pasta","flour","oil","vinegar","sauce","spice","salt","pepper","sugar","honey","oat","bread","can","bean","lentil","chickpea","stock","broth"],"Snacks & Drinks":["chip","cracker","cookie","juice","soda","water","tea","coffee","snack","nut","seed"]};function S_(n){const e=n.toLowerCase();for(const[t,i]of Object.entries(E_))if(i.some(s=>e.includes(s)))return t;return"Other"}var Vu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xt,ff;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function b(){}b.prototype=v.prototype,T.F=v.prototype,T.prototype=new b,T.prototype.constructor=T,T.D=function(E,I,A){for(var _=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)_[Be-2]=arguments[Be];return v.prototype[I].apply(E,_)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,v,b){b||(b=0);const E=Array(16);if(typeof v=="string")for(var I=0;I<16;++I)E[I]=v.charCodeAt(b++)|v.charCodeAt(b++)<<8|v.charCodeAt(b++)<<16|v.charCodeAt(b++)<<24;else for(I=0;I<16;++I)E[I]=v[b++]|v[b++]<<8|v[b++]<<16|v[b++]<<24;v=T.g[0],b=T.g[1],I=T.g[2];let A=T.g[3],_;_=v+(A^b&(I^A))+E[0]+3614090360&4294967295,v=b+(_<<7&4294967295|_>>>25),_=A+(I^v&(b^I))+E[1]+3905402710&4294967295,A=v+(_<<12&4294967295|_>>>20),_=I+(b^A&(v^b))+E[2]+606105819&4294967295,I=A+(_<<17&4294967295|_>>>15),_=b+(v^I&(A^v))+E[3]+3250441966&4294967295,b=I+(_<<22&4294967295|_>>>10),_=v+(A^b&(I^A))+E[4]+4118548399&4294967295,v=b+(_<<7&4294967295|_>>>25),_=A+(I^v&(b^I))+E[5]+1200080426&4294967295,A=v+(_<<12&4294967295|_>>>20),_=I+(b^A&(v^b))+E[6]+2821735955&4294967295,I=A+(_<<17&4294967295|_>>>15),_=b+(v^I&(A^v))+E[7]+4249261313&4294967295,b=I+(_<<22&4294967295|_>>>10),_=v+(A^b&(I^A))+E[8]+1770035416&4294967295,v=b+(_<<7&4294967295|_>>>25),_=A+(I^v&(b^I))+E[9]+2336552879&4294967295,A=v+(_<<12&4294967295|_>>>20),_=I+(b^A&(v^b))+E[10]+4294925233&4294967295,I=A+(_<<17&4294967295|_>>>15),_=b+(v^I&(A^v))+E[11]+2304563134&4294967295,b=I+(_<<22&4294967295|_>>>10),_=v+(A^b&(I^A))+E[12]+1804603682&4294967295,v=b+(_<<7&4294967295|_>>>25),_=A+(I^v&(b^I))+E[13]+4254626195&4294967295,A=v+(_<<12&4294967295|_>>>20),_=I+(b^A&(v^b))+E[14]+2792965006&4294967295,I=A+(_<<17&4294967295|_>>>15),_=b+(v^I&(A^v))+E[15]+1236535329&4294967295,b=I+(_<<22&4294967295|_>>>10),_=v+(I^A&(b^I))+E[1]+4129170786&4294967295,v=b+(_<<5&4294967295|_>>>27),_=A+(b^I&(v^b))+E[6]+3225465664&4294967295,A=v+(_<<9&4294967295|_>>>23),_=I+(v^b&(A^v))+E[11]+643717713&4294967295,I=A+(_<<14&4294967295|_>>>18),_=b+(A^v&(I^A))+E[0]+3921069994&4294967295,b=I+(_<<20&4294967295|_>>>12),_=v+(I^A&(b^I))+E[5]+3593408605&4294967295,v=b+(_<<5&4294967295|_>>>27),_=A+(b^I&(v^b))+E[10]+38016083&4294967295,A=v+(_<<9&4294967295|_>>>23),_=I+(v^b&(A^v))+E[15]+3634488961&4294967295,I=A+(_<<14&4294967295|_>>>18),_=b+(A^v&(I^A))+E[4]+3889429448&4294967295,b=I+(_<<20&4294967295|_>>>12),_=v+(I^A&(b^I))+E[9]+568446438&4294967295,v=b+(_<<5&4294967295|_>>>27),_=A+(b^I&(v^b))+E[14]+3275163606&4294967295,A=v+(_<<9&4294967295|_>>>23),_=I+(v^b&(A^v))+E[3]+4107603335&4294967295,I=A+(_<<14&4294967295|_>>>18),_=b+(A^v&(I^A))+E[8]+1163531501&4294967295,b=I+(_<<20&4294967295|_>>>12),_=v+(I^A&(b^I))+E[13]+2850285829&4294967295,v=b+(_<<5&4294967295|_>>>27),_=A+(b^I&(v^b))+E[2]+4243563512&4294967295,A=v+(_<<9&4294967295|_>>>23),_=I+(v^b&(A^v))+E[7]+1735328473&4294967295,I=A+(_<<14&4294967295|_>>>18),_=b+(A^v&(I^A))+E[12]+2368359562&4294967295,b=I+(_<<20&4294967295|_>>>12),_=v+(b^I^A)+E[5]+4294588738&4294967295,v=b+(_<<4&4294967295|_>>>28),_=A+(v^b^I)+E[8]+2272392833&4294967295,A=v+(_<<11&4294967295|_>>>21),_=I+(A^v^b)+E[11]+1839030562&4294967295,I=A+(_<<16&4294967295|_>>>16),_=b+(I^A^v)+E[14]+4259657740&4294967295,b=I+(_<<23&4294967295|_>>>9),_=v+(b^I^A)+E[1]+2763975236&4294967295,v=b+(_<<4&4294967295|_>>>28),_=A+(v^b^I)+E[4]+1272893353&4294967295,A=v+(_<<11&4294967295|_>>>21),_=I+(A^v^b)+E[7]+4139469664&4294967295,I=A+(_<<16&4294967295|_>>>16),_=b+(I^A^v)+E[10]+3200236656&4294967295,b=I+(_<<23&4294967295|_>>>9),_=v+(b^I^A)+E[13]+681279174&4294967295,v=b+(_<<4&4294967295|_>>>28),_=A+(v^b^I)+E[0]+3936430074&4294967295,A=v+(_<<11&4294967295|_>>>21),_=I+(A^v^b)+E[3]+3572445317&4294967295,I=A+(_<<16&4294967295|_>>>16),_=b+(I^A^v)+E[6]+76029189&4294967295,b=I+(_<<23&4294967295|_>>>9),_=v+(b^I^A)+E[9]+3654602809&4294967295,v=b+(_<<4&4294967295|_>>>28),_=A+(v^b^I)+E[12]+3873151461&4294967295,A=v+(_<<11&4294967295|_>>>21),_=I+(A^v^b)+E[15]+530742520&4294967295,I=A+(_<<16&4294967295|_>>>16),_=b+(I^A^v)+E[2]+3299628645&4294967295,b=I+(_<<23&4294967295|_>>>9),_=v+(I^(b|~A))+E[0]+4096336452&4294967295,v=b+(_<<6&4294967295|_>>>26),_=A+(b^(v|~I))+E[7]+1126891415&4294967295,A=v+(_<<10&4294967295|_>>>22),_=I+(v^(A|~b))+E[14]+2878612391&4294967295,I=A+(_<<15&4294967295|_>>>17),_=b+(A^(I|~v))+E[5]+4237533241&4294967295,b=I+(_<<21&4294967295|_>>>11),_=v+(I^(b|~A))+E[12]+1700485571&4294967295,v=b+(_<<6&4294967295|_>>>26),_=A+(b^(v|~I))+E[3]+2399980690&4294967295,A=v+(_<<10&4294967295|_>>>22),_=I+(v^(A|~b))+E[10]+4293915773&4294967295,I=A+(_<<15&4294967295|_>>>17),_=b+(A^(I|~v))+E[1]+2240044497&4294967295,b=I+(_<<21&4294967295|_>>>11),_=v+(I^(b|~A))+E[8]+1873313359&4294967295,v=b+(_<<6&4294967295|_>>>26),_=A+(b^(v|~I))+E[15]+4264355552&4294967295,A=v+(_<<10&4294967295|_>>>22),_=I+(v^(A|~b))+E[6]+2734768916&4294967295,I=A+(_<<15&4294967295|_>>>17),_=b+(A^(I|~v))+E[13]+1309151649&4294967295,b=I+(_<<21&4294967295|_>>>11),_=v+(I^(b|~A))+E[4]+4149444226&4294967295,v=b+(_<<6&4294967295|_>>>26),_=A+(b^(v|~I))+E[11]+3174756917&4294967295,A=v+(_<<10&4294967295|_>>>22),_=I+(v^(A|~b))+E[2]+718787259&4294967295,I=A+(_<<15&4294967295|_>>>17),_=b+(A^(I|~v))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(I+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+I&4294967295,T.g[3]=T.g[3]+A&4294967295}i.prototype.v=function(T,v){v===void 0&&(v=T.length);const b=v-this.blockSize,E=this.C;let I=this.h,A=0;for(;A<v;){if(I==0)for(;A<=b;)s(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<v;)if(E[I++]=T.charCodeAt(A++),I==this.blockSize){s(this,E),I=0;break}}else for(;A<v;)if(E[I++]=T[A++],I==this.blockSize){s(this,E),I=0;break}}this.h=I,this.o+=v},i.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;v=this.o*8;for(var b=T.length-8;b<T.length;++b)T[b]=v&255,v/=256;for(this.v(T),T=Array(16),v=0,b=0;b<4;++b)for(let E=0;E<32;E+=8)T[v++]=this.g[b]>>>E&255;return T};function r(T,v){var b=c;return Object.prototype.hasOwnProperty.call(b,T)?b[T]:b[T]=v(T)}function o(T,v){this.h=v;const b=[];let E=!0;for(let I=T.length-1;I>=0;I--){const A=T[I]|0;E&&A==v||(b[I]=A,E=!1)}this.g=b}var c={};function u(T){return-128<=T&&T<128?r(T,function(v){return new o([v|0],v<0?-1:0)}):new o([T|0],T<0?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return y;if(T<0)return L(d(-T));const v=[];let b=1;for(let E=0;T>=b;E++)v[E]=T/b|0,b*=4294967296;return new o(v,0)}function m(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return L(m(T.substring(1),v));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const b=d(Math.pow(v,8));let E=y;for(let A=0;A<T.length;A+=8){var I=Math.min(8,T.length-A);const _=parseInt(T.substring(A,A+I),v);I<8?(I=d(Math.pow(v,I)),E=E.j(I).add(d(_))):(E=E.j(b),E=E.add(d(_)))}return E}var y=u(0),w=u(1),C=u(16777216);n=o.prototype,n.m=function(){if(O(this))return-L(this).m();let T=0,v=1;for(let b=0;b<this.g.length;b++){const E=this.i(b);T+=(E>=0?E:4294967296+E)*v,v*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(x(this))return"0";if(O(this))return"-"+L(this).toString(T);const v=d(Math.pow(T,6));var b=this;let E="";for(;;){const I=j(b,v).g;b=z(b,I.j(v));let A=((b.g.length>0?b.g[0]:b.h)>>>0).toString(T);if(b=I,x(b))return A+E;for(;A.length<6;)A="0"+A;E=A+E}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function x(T){if(T.h!=0)return!1;for(let v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function O(T){return T.h==-1}n.l=function(T){return T=z(this,T),O(T)?-1:x(T)?0:1};function L(T){const v=T.g.length,b=[];for(let E=0;E<v;E++)b[E]=~T.g[E];return new o(b,~T.h).add(w)}n.abs=function(){return O(this)?L(this):this},n.add=function(T){const v=Math.max(this.g.length,T.g.length),b=[];let E=0;for(let I=0;I<=v;I++){let A=E+(this.i(I)&65535)+(T.i(I)&65535),_=(A>>>16)+(this.i(I)>>>16)+(T.i(I)>>>16);E=_>>>16,A&=65535,_&=65535,b[I]=_<<16|A}return new o(b,b[b.length-1]&-2147483648?-1:0)};function z(T,v){return T.add(L(v))}n.j=function(T){if(x(this)||x(T))return y;if(O(this))return O(T)?L(this).j(L(T)):L(L(this).j(T));if(O(T))return L(this.j(L(T)));if(this.l(C)<0&&T.l(C)<0)return d(this.m()*T.m());const v=this.g.length+T.g.length,b=[];for(var E=0;E<2*v;E++)b[E]=0;for(E=0;E<this.g.length;E++)for(let I=0;I<T.g.length;I++){const A=this.i(E)>>>16,_=this.i(E)&65535,Be=T.i(I)>>>16,pn=T.i(I)&65535;b[2*E+2*I]+=_*pn,G(b,2*E+2*I),b[2*E+2*I+1]+=A*pn,G(b,2*E+2*I+1),b[2*E+2*I+1]+=_*Be,G(b,2*E+2*I+1),b[2*E+2*I+2]+=A*Be,G(b,2*E+2*I+2)}for(T=0;T<v;T++)b[T]=b[2*T+1]<<16|b[2*T];for(T=v;T<2*v;T++)b[T]=0;return new o(b,0)};function G(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function $(T,v){this.g=T,this.h=v}function j(T,v){if(x(v))throw Error("division by zero");if(x(T))return new $(y,y);if(O(T))return v=j(L(T),v),new $(L(v.g),L(v.h));if(O(v))return v=j(T,L(v)),new $(L(v.g),v.h);if(T.g.length>30){if(O(T)||O(v))throw Error("slowDivide_ only works with positive integers.");for(var b=w,E=v;E.l(T)<=0;)b=J(b),E=J(E);var I=V(b,1),A=V(E,1);for(E=V(E,2),b=V(b,2);!x(E);){var _=A.add(E);_.l(T)<=0&&(I=I.add(b),A=_),E=V(E,1),b=V(b,1)}return v=z(T,I.j(v)),new $(I,v)}for(I=y;T.l(v)>=0;){for(b=Math.max(1,Math.floor(T.m()/v.m())),E=Math.ceil(Math.log(b)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),A=d(b),_=A.j(v);O(_)||_.l(T)>0;)b-=E,A=d(b),_=A.j(v);x(A)&&(A=w),I=I.add(A),T=z(T,_)}return new $(I,T)}n.B=function(T){return j(this,T).h},n.and=function(T){const v=Math.max(this.g.length,T.g.length),b=[];for(let E=0;E<v;E++)b[E]=this.i(E)&T.i(E);return new o(b,this.h&T.h)},n.or=function(T){const v=Math.max(this.g.length,T.g.length),b=[];for(let E=0;E<v;E++)b[E]=this.i(E)|T.i(E);return new o(b,this.h|T.h)},n.xor=function(T){const v=Math.max(this.g.length,T.g.length),b=[];for(let E=0;E<v;E++)b[E]=this.i(E)^T.i(E);return new o(b,this.h^T.h)};function J(T){const v=T.g.length+1,b=[];for(let E=0;E<v;E++)b[E]=T.i(E)<<1|T.i(E-1)>>>31;return new o(b,T.h)}function V(T,v){const b=v>>5;v%=32;const E=T.g.length-b,I=[];for(let A=0;A<E;A++)I[A]=v>0?T.i(A+b)>>>v|T.i(A+b+1)<<32-v:T.i(A+b);return new o(I,T.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,ff=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=m,Xt=o}).apply(typeof Vu<"u"?Vu:typeof self<"u"?self:typeof window<"u"?window:{});var Js=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pf,Ki,mf,mr,Sa,gf,yf,vf;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Js=="object"&&Js];for(var l=0;l<a.length;++l){var f=a[l];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var i=t(this);function s(a,l){if(l)e:{var f=i;a=a.split(".");for(var g=0;g<a.length-1;g++){var S=a[g];if(!(S in f))break e;f=f[S]}a=a[a.length-1],g=f[a],l=l(g),l!=g&&l!=null&&e(f,a,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(l){var f=[],g;for(g in l)Object.prototype.hasOwnProperty.call(l,g)&&f.push([g,l[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},o=this||self;function c(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function u(a,l,f){return a.call.apply(a.bind,arguments)}function d(a,l,f){return d=u,d.apply(null,arguments)}function m(a,l){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function y(a,l){function f(){}f.prototype=l.prototype,a.Z=l.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(g,S,k){for(var D=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)D[Q-2]=arguments[Q];return l.prototype[S].apply(g,D)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function C(a){const l=a.length;if(l>0){const f=Array(l);for(let g=0;g<l;g++)f[g]=a[g];return f}return[]}function x(a,l){for(let g=1;g<arguments.length;g++){const S=arguments[g];var f=typeof S;if(f=f!="object"?f:S?Array.isArray(S)?"array":f:"null",f=="array"||f=="object"&&typeof S.length=="number"){f=a.length||0;const k=S.length||0;a.length=f+k;for(let D=0;D<k;D++)a[f+D]=S[D]}else a.push(S)}}class O{constructor(l,f){this.i=l,this.j=f,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function L(a){o.setTimeout(()=>{throw a},0)}function z(){var a=T;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class G{constructor(){this.h=this.g=null}add(l,f){const g=$.get();g.set(l,f),this.h?this.h.next=g:this.g=g,this.h=g}}var $=new O(()=>new j,a=>a.reset());class j{constructor(){this.next=this.g=this.h=null}set(l,f){this.h=l,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let J,V=!1,T=new G,v=()=>{const a=Promise.resolve(void 0);J=()=>{a.then(b)}};function b(){for(var a;a=z();){try{a.h.call(a.g)}catch(f){L(f)}var l=$;l.j(a),l.h<100&&(l.h++,a.next=l.g,l.g=a)}V=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,l),o.removeEventListener("test",f,l)}catch{}return a})();function _(a){return/^[\s\xa0]*$/.test(a)}function Be(a,l){I.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,l)}y(Be,I),Be.prototype.init=function(a,l){const f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget,l||(f=="mouseover"?l=a.fromElement:f=="mouseout"&&(l=a.toElement)),this.relatedTarget=l,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Be.Z.h.call(this)},Be.prototype.h=function(){Be.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var pn="closure_listenable_"+(Math.random()*1e6|0),wm=0;function _m(a,l,f,g,S){this.listener=a,this.proxy=null,this.src=l,this.type=f,this.capture=!!g,this.ha=S,this.key=++wm,this.da=this.fa=!1}function Ns(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Os(a,l,f){for(const g in a)l.call(f,a[g],g,a)}function bm(a,l){for(const f in a)l.call(void 0,a[f],f,a)}function rl(a){const l={};for(const f in a)l[f]=a[f];return l}const ol="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function al(a,l){let f,g;for(let S=1;S<arguments.length;S++){g=arguments[S];for(f in g)a[f]=g[f];for(let k=0;k<ol.length;k++)f=ol[k],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function Ms(a){this.src=a,this.g={},this.h=0}Ms.prototype.add=function(a,l,f,g,S){const k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);const D=Io(a,l,g,S);return D>-1?(l=a[D],f||(l.fa=!1)):(l=new _m(l,this.src,k,!!g,S),l.fa=f,a.push(l)),l};function To(a,l){const f=l.type;if(f in a.g){var g=a.g[f],S=Array.prototype.indexOf.call(g,l,void 0),k;(k=S>=0)&&Array.prototype.splice.call(g,S,1),k&&(Ns(l),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Io(a,l,f,g){for(let S=0;S<a.length;++S){const k=a[S];if(!k.da&&k.listener==l&&k.capture==!!f&&k.ha==g)return S}return-1}var Eo="closure_lm_"+(Math.random()*1e6|0),So={};function cl(a,l,f,g,S){if(Array.isArray(l)){for(let k=0;k<l.length;k++)cl(a,l[k],f,g,S);return null}return f=dl(f),a&&a[pn]?a.J(l,f,c(g)?!!g.capture:!1,S):Tm(a,l,f,!1,g,S)}function Tm(a,l,f,g,S,k){if(!l)throw Error("Invalid event type");const D=c(S)?!!S.capture:!!S;let Q=ko(a);if(Q||(a[Eo]=Q=new Ms(a)),f=Q.add(l,f,g,D,k),f.proxy)return f;if(g=Im(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)A||(S=D),S===void 0&&(S=!1),a.addEventListener(l.toString(),g,S);else if(a.attachEvent)a.attachEvent(ul(l.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Im(){function a(f){return l.call(a.src,a.listener,f)}const l=Em;return a}function ll(a,l,f,g,S){if(Array.isArray(l))for(var k=0;k<l.length;k++)ll(a,l[k],f,g,S);else g=c(g)?!!g.capture:!!g,f=dl(f),a&&a[pn]?(a=a.i,k=String(l).toString(),k in a.g&&(l=a.g[k],f=Io(l,f,g,S),f>-1&&(Ns(l[f]),Array.prototype.splice.call(l,f,1),l.length==0&&(delete a.g[k],a.h--)))):a&&(a=ko(a))&&(l=a.g[l.toString()],a=-1,l&&(a=Io(l,f,g,S)),(f=a>-1?l[a]:null)&&Ao(f))}function Ao(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[pn])To(l.i,a);else{var f=a.type,g=a.proxy;l.removeEventListener?l.removeEventListener(f,g,a.capture):l.detachEvent?l.detachEvent(ul(f),g):l.addListener&&l.removeListener&&l.removeListener(g),(f=ko(l))?(To(f,a),f.h==0&&(f.src=null,l[Eo]=null)):Ns(a)}}}function ul(a){return a in So?So[a]:So[a]="on"+a}function Em(a,l){if(a.da)a=!0;else{l=new Be(l,this);const f=a.listener,g=a.ha||a.src;a.fa&&Ao(a),a=f.call(g,l)}return a}function ko(a){return a=a[Eo],a instanceof Ms?a:null}var Co="__closure_events_fn_"+(Math.random()*1e9>>>0);function dl(a){return typeof a=="function"?a:(a[Co]||(a[Co]=function(l){return a.handleEvent(l)}),a[Co])}function Pe(){E.call(this),this.i=new Ms(this),this.M=this,this.G=null}y(Pe,E),Pe.prototype[pn]=!0,Pe.prototype.removeEventListener=function(a,l,f,g){ll(this,a,l,f,g)};function Me(a,l){var f,g=a.G;if(g)for(f=[];g;g=g.G)f.push(g);if(a=a.M,g=l.type||l,typeof l=="string")l=new I(l,a);else if(l instanceof I)l.target=l.target||a;else{var S=l;l=new I(g,a),al(l,S)}S=!0;let k,D;if(f)for(D=f.length-1;D>=0;D--)k=l.g=f[D],S=$s(k,g,!0,l)&&S;if(k=l.g=a,S=$s(k,g,!0,l)&&S,S=$s(k,g,!1,l)&&S,f)for(D=0;D<f.length;D++)k=l.g=f[D],S=$s(k,g,!1,l)&&S}Pe.prototype.N=function(){if(Pe.Z.N.call(this),this.i){var a=this.i;for(const l in a.g){const f=a.g[l];for(let g=0;g<f.length;g++)Ns(f[g]);delete a.g[l],a.h--}}this.G=null},Pe.prototype.J=function(a,l,f,g){return this.i.add(String(a),l,!1,f,g)},Pe.prototype.K=function(a,l,f,g){return this.i.add(String(a),l,!0,f,g)};function $s(a,l,f,g){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();let S=!0;for(let k=0;k<l.length;++k){const D=l[k];if(D&&!D.da&&D.capture==f){const Q=D.listener,ve=D.ha||D.src;D.fa&&To(a.i,D),S=Q.call(ve,g)!==!1&&S}}return S&&!g.defaultPrevented}function Sm(a,l){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=d(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:o.setTimeout(a,l||0)}function hl(a){a.g=Sm(()=>{a.g=null,a.i&&(a.i=!1,hl(a))},a.l);const l=a.h;a.h=null,a.m.apply(null,l)}class Am extends E{constructor(l,f){super(),this.m=l,this.l=f,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:hl(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Si(a){E.call(this),this.h=a,this.g={}}y(Si,E);var fl=[];function pl(a){Os(a.g,function(l,f){this.g.hasOwnProperty(f)&&Ao(l)},a),a.g={}}Si.prototype.N=function(){Si.Z.N.call(this),pl(this)},Si.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ro=o.JSON.stringify,km=o.JSON.parse,Cm=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function ml(){}function gl(){}var Ai={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Po(){I.call(this,"d")}y(Po,I);function xo(){I.call(this,"c")}y(xo,I);var mn={},yl=null;function Vs(){return yl=yl||new Pe}mn.Ia="serverreachability";function vl(a){I.call(this,mn.Ia,a)}y(vl,I);function ki(a){const l=Vs();Me(l,new vl(l))}mn.STAT_EVENT="statevent";function wl(a,l){I.call(this,mn.STAT_EVENT,a),this.stat=l}y(wl,I);function $e(a){const l=Vs();Me(l,new wl(l,a))}mn.Ja="timingevent";function _l(a,l){I.call(this,mn.Ja,a),this.size=l}y(_l,I);function Ci(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},l)}function Ri(){this.g=!0}Ri.prototype.ua=function(){this.g=!1};function Rm(a,l,f,g,S,k){a.info(function(){if(a.g)if(k){var D="",Q=k.split("&");for(let se=0;se<Q.length;se++){var ve=Q[se].split("=");if(ve.length>1){const Te=ve[0];ve=ve[1];const st=Te.split("_");D=st.length>=2&&st[1]=="type"?D+(Te+"="+ve+"&"):D+(Te+"=redacted&")}}}else D=null;else D=k;return"XMLHTTP REQ ("+g+") [attempt "+S+"]: "+l+`
`+f+`
`+D})}function Pm(a,l,f,g,S,k,D){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+S+"]: "+l+`
`+f+`
`+k+" "+D})}function Hn(a,l,f,g){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+Lm(a,f)+(g?" "+g:"")})}function xm(a,l){a.info(function(){return"TIMEOUT: "+l})}Ri.prototype.info=function(){};function Lm(a,l){if(!a.g)return l;if(!l)return null;try{const k=JSON.parse(l);if(k){for(a=0;a<k.length;a++)if(Array.isArray(k[a])){var f=k[a];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var S=g[0];if(S!="noop"&&S!="stop"&&S!="close")for(let D=1;D<g.length;D++)g[D]=""}}}}return Ro(k)}catch{return l}}var Us={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},bl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Tl;function Lo(){}y(Lo,ml),Lo.prototype.g=function(){return new XMLHttpRequest},Tl=new Lo;function Pi(a){return encodeURIComponent(String(a))}function Dm(a){var l=1;a=a.split(":");const f=[];for(;l>0&&a.length;)f.push(a.shift()),l--;return a.length&&f.push(a.join(":")),f}function Dt(a,l,f,g){this.j=a,this.i=l,this.l=f,this.S=g||1,this.V=new Si(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Il}function Il(){this.i=null,this.g="",this.h=!1}var El={},Do={};function No(a,l,f){a.M=1,a.A=js(it(l)),a.u=f,a.R=!0,Sl(a,null)}function Sl(a,l){a.F=Date.now(),Fs(a),a.B=it(a.A);var f=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Vl(f.i,"t",g),a.C=0,f=a.j.L,a.h=new Il,a.g=nu(a.j,f?l:null,!a.u),a.P>0&&(a.O=new Am(d(a.Y,a,a.g),a.P)),l=a.V,f=a.g,g=a.ba;var S="readystatechange";Array.isArray(S)||(S&&(fl[0]=S.toString()),S=fl);for(let k=0;k<S.length;k++){const D=cl(f,S[k],g||l.handleEvent,!1,l.h||l);if(!D)break;l.g[D.key]=D}l=a.J?rl(a.J):{},a.u?(a.v||(a.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,l)):(a.v="GET",a.g.ea(a.B,a.v,null,l)),ki(),Rm(a.i,a.v,a.B,a.l,a.S,a.u)}Dt.prototype.ba=function(a){a=a.target;const l=this.O;l&&Mt(a)==3?l.j():this.Y(a)},Dt.prototype.Y=function(a){try{if(a==this.g)e:{const Q=Mt(this.g),ve=this.g.ya(),se=this.g.ca();if(!(Q<3)&&(Q!=3||this.g&&(this.h.h||this.g.la()||ql(this.g)))){this.K||Q!=4||ve==7||(ve==8||se<=0?ki(3):ki(2)),Oo(this);var l=this.g.ca();this.X=l;var f=Nm(this);if(this.o=l==200,Pm(this.i,this.v,this.B,this.l,this.S,Q,l),this.o){if(this.U&&!this.L){t:{if(this.g){var g,S=this.g;if((g=S.g?S.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(g)){var k=g;break t}}k=null}if(a=k)Hn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Mo(this,a);else{this.o=!1,this.m=3,$e(12),gn(this),xi(this);break e}}if(this.R){a=!0;let Te;for(;!this.K&&this.C<f.length;)if(Te=Om(this,f),Te==Do){Q==4&&(this.m=4,$e(14),a=!1),Hn(this.i,this.l,null,"[Incomplete Response]");break}else if(Te==El){this.m=4,$e(15),Hn(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else Hn(this.i,this.l,Te,null),Mo(this,Te);if(Al(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Q!=4||f.length!=0||this.h.h||(this.m=1,$e(16),a=!1),this.o=this.o&&a,!a)Hn(this.i,this.l,f,"[Invalid Chunked Response]"),gn(this),xi(this);else if(f.length>0&&!this.W){this.W=!0;var D=this.j;D.g==this&&D.aa&&!D.P&&(D.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),zo(D),D.P=!0,$e(11))}}else Hn(this.i,this.l,f,null),Mo(this,f);Q==4&&gn(this),this.o&&!this.K&&(Q==4?Xl(this.j,this):(this.o=!1,Fs(this)))}else Qm(this.g),l==400&&f.indexOf("Unknown SID")>0?(this.m=3,$e(12)):(this.m=0,$e(13)),gn(this),xi(this)}}}catch{}finally{}};function Nm(a){if(!Al(a))return a.g.la();const l=ql(a.g);if(l==="")return"";let f="";const g=l.length,S=Mt(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return gn(a),xi(a),"";a.h.i=new o.TextDecoder}for(let k=0;k<g;k++)a.h.h=!0,f+=a.h.i.decode(l[k],{stream:!(S&&k==g-1)});return l.length=0,a.h.g+=f,a.C=0,a.h.g}function Al(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Om(a,l){var f=a.C,g=l.indexOf(`
`,f);return g==-1?Do:(f=Number(l.substring(f,g)),isNaN(f)?El:(g+=1,g+f>l.length?Do:(l=l.slice(g,g+f),a.C=g+f,l)))}Dt.prototype.cancel=function(){this.K=!0,gn(this)};function Fs(a){a.T=Date.now()+a.H,kl(a,a.H)}function kl(a,l){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ci(d(a.aa,a),l)}function Oo(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Dt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(xm(this.i,this.B),this.M!=2&&(ki(),$e(17)),gn(this),this.m=2,xi(this)):kl(this,this.T-a)};function xi(a){a.j.I==0||a.K||Xl(a.j,a)}function gn(a){Oo(a);var l=a.O;l&&typeof l.dispose=="function"&&l.dispose(),a.O=null,pl(a.V),a.g&&(l=a.g,a.g=null,l.abort(),l.dispose())}function Mo(a,l){try{var f=a.j;if(f.I!=0&&(f.g==a||$o(f.h,a))){if(!a.L&&$o(f.h,a)&&f.I==3){try{var g=f.Ba.g.parse(l)}catch{g=null}if(Array.isArray(g)&&g.length==3){var S=g;if(S[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Ws(f),zs(f);else break e;Ho(f),$e(18)}}else f.xa=S[1],0<f.xa-f.K&&S[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Ci(d(f.Va,f),6e3));Pl(f.h)<=1&&f.ta&&(f.ta=void 0)}else vn(f,11)}else if((a.L||f.g==a)&&Ws(f),!_(l))for(S=f.Ba.g.parse(l),l=0;l<S.length;l++){let se=S[l];const Te=se[0];if(!(Te<=f.K))if(f.K=Te,se=se[1],f.I==2)if(se[0]=="c"){f.M=se[1],f.ba=se[2];const st=se[3];st!=null&&(f.ka=st,f.j.info("VER="+f.ka));const wn=se[4];wn!=null&&(f.za=wn,f.j.info("SVER="+f.za));const $t=se[5];$t!=null&&typeof $t=="number"&&$t>0&&(g=1.5*$t,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Vt=a.g;if(Vt){const Ks=Vt.g?Vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ks){var k=g.h;k.g||Ks.indexOf("spdy")==-1&&Ks.indexOf("quic")==-1&&Ks.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Vo(k,k.h),k.h=null))}if(g.G){const qo=Vt.g?Vt.g.getResponseHeader("X-HTTP-Session-Id"):null;qo&&(g.wa=qo,re(g.J,g.G,qo))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var D=a;if(g.na=tu(g,g.L?g.ba:null,g.W),D.L){xl(g.h,D);var Q=D,ve=g.O;ve&&(Q.H=ve),Q.D&&(Oo(Q),Fs(Q)),g.g=D}else Jl(g);f.i.length>0&&qs(f)}else se[0]!="stop"&&se[0]!="close"||vn(f,7);else f.I==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?vn(f,7):Bo(f):se[0]!="noop"&&f.l&&f.l.qa(se),f.A=0)}}ki(4)}catch{}}var Mm=class{constructor(a,l){this.g=a,this.map=l}};function Cl(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Rl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Pl(a){return a.h?1:a.g?a.g.size:0}function $o(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function Vo(a,l){a.g?a.g.add(l):a.h=l}function xl(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}Cl.prototype.cancel=function(){if(this.i=Ll(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ll(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let l=a.i;for(const f of a.g.values())l=l.concat(f.G);return l}return C(a.i)}var Dl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $m(a,l){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const g=a[f].indexOf("=");let S,k=null;g>=0?(S=a[f].substring(0,g),k=a[f].substring(g+1)):S=a[f],l(S,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Nt(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;a instanceof Nt?(this.l=a.l,Li(this,a.j),this.o=a.o,this.g=a.g,Di(this,a.u),this.h=a.h,Uo(this,Ul(a.i)),this.m=a.m):a&&(l=String(a).match(Dl))?(this.l=!1,Li(this,l[1]||"",!0),this.o=Ni(l[2]||""),this.g=Ni(l[3]||"",!0),Di(this,l[4]),this.h=Ni(l[5]||"",!0),Uo(this,l[6]||"",!0),this.m=Ni(l[7]||"")):(this.l=!1,this.i=new Mi(null,this.l))}Nt.prototype.toString=function(){const a=[];var l=this.j;l&&a.push(Oi(l,Nl,!0),":");var f=this.g;return(f||l=="file")&&(a.push("//"),(l=this.o)&&a.push(Oi(l,Nl,!0),"@"),a.push(Pi(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Oi(f,f.charAt(0)=="/"?Fm:Um,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Oi(f,Bm)),a.join("")},Nt.prototype.resolve=function(a){const l=it(this);let f=!!a.j;f?Li(l,a.j):f=!!a.o,f?l.o=a.o:f=!!a.g,f?l.g=a.g:f=a.u!=null;var g=a.h;if(f)Di(l,a.u);else if(f=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var S=l.h.lastIndexOf("/");S!=-1&&(g=l.h.slice(0,S+1)+g)}if(S=g,S==".."||S==".")g="";else if(S.indexOf("./")!=-1||S.indexOf("/.")!=-1){g=S.lastIndexOf("/",0)==0,S=S.split("/");const k=[];for(let D=0;D<S.length;){const Q=S[D++];Q=="."?g&&D==S.length&&k.push(""):Q==".."?((k.length>1||k.length==1&&k[0]!="")&&k.pop(),g&&D==S.length&&k.push("")):(k.push(Q),g=!0)}g=k.join("/")}else g=S}return f?l.h=g:f=a.i.toString()!=="",f?Uo(l,Ul(a.i)):f=!!a.m,f&&(l.m=a.m),l};function it(a){return new Nt(a)}function Li(a,l,f){a.j=f?Ni(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function Di(a,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);a.u=l}else a.u=null}function Uo(a,l,f){l instanceof Mi?(a.i=l,Hm(a.i,a.l)):(f||(l=Oi(l,jm)),a.i=new Mi(l,a.l))}function re(a,l,f){a.i.set(l,f)}function js(a){return re(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ni(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Oi(a,l,f){return typeof a=="string"?(a=encodeURI(a).replace(l,Vm),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Vm(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Nl=/[#\/\?@]/g,Um=/[#\?:]/g,Fm=/[#\?]/g,jm=/[#\?@]/g,Bm=/#/g;function Mi(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function yn(a){a.g||(a.g=new Map,a.h=0,a.i&&$m(a.i,function(l,f){a.add(decodeURIComponent(l.replace(/\+/g," ")),f)}))}n=Mi.prototype,n.add=function(a,l){yn(this),this.i=null,a=zn(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(l),this.h+=1,this};function Ol(a,l){yn(a),l=zn(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function Ml(a,l){return yn(a),l=zn(a,l),a.g.has(l)}n.forEach=function(a,l){yn(this),this.g.forEach(function(f,g){f.forEach(function(S){a.call(l,S,g,this)},this)},this)};function $l(a,l){yn(a);let f=[];if(typeof l=="string")Ml(a,l)&&(f=f.concat(a.g.get(zn(a,l))));else for(a=Array.from(a.g.values()),l=0;l<a.length;l++)f=f.concat(a[l]);return f}n.set=function(a,l){return yn(this),this.i=null,a=zn(this,a),Ml(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},n.get=function(a,l){return a?(a=$l(this,a),a.length>0?String(a[0]):l):l};function Vl(a,l,f){Ol(a,l),f.length>0&&(a.i=null,a.g.set(zn(a,l),C(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],l=Array.from(this.g.keys());for(let g=0;g<l.length;g++){var f=l[g];const S=Pi(f);f=$l(this,f);for(let k=0;k<f.length;k++){let D=S;f[k]!==""&&(D+="="+Pi(f[k])),a.push(D)}}return this.i=a.join("&")};function Ul(a){const l=new Mi;return l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),l}function zn(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function Hm(a,l){l&&!a.j&&(yn(a),a.i=null,a.g.forEach(function(f,g){const S=g.toLowerCase();g!=S&&(Ol(this,g),Vl(this,S,f))},a)),a.j=l}function zm(a,l){const f=new Ri;if(o.Image){const g=new Image;g.onload=m(Ot,f,"TestLoadImage: loaded",!0,l,g),g.onerror=m(Ot,f,"TestLoadImage: error",!1,l,g),g.onabort=m(Ot,f,"TestLoadImage: abort",!1,l,g),g.ontimeout=m(Ot,f,"TestLoadImage: timeout",!1,l,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else l(!1)}function qm(a,l){const f=new Ri,g=new AbortController,S=setTimeout(()=>{g.abort(),Ot(f,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:g.signal}).then(k=>{clearTimeout(S),k.ok?Ot(f,"TestPingServer: ok",!0,l):Ot(f,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(S),Ot(f,"TestPingServer: error",!1,l)})}function Ot(a,l,f,g,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),g(f)}catch{}}function Wm(){this.g=new Cm}function Fo(a){this.i=a.Sb||null,this.h=a.ab||!1}y(Fo,ml),Fo.prototype.g=function(){return new Bs(this.i,this.h)};function Bs(a,l){Pe.call(this),this.H=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}y(Bs,Pe),n=Bs.prototype,n.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=l,this.readyState=1,Vi(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(l.body=a),(this.H||o).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,$i(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Vi(this)),this.g&&(this.readyState=3,Vi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Fl(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Fl(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?$i(this):Vi(this),this.readyState==3&&Fl(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,$i(this))},n.Na=function(a){this.g&&(this.response=a,$i(this))},n.ga=function(){this.g&&$i(this)};function $i(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Vi(a)}n.setRequestHeader=function(a,l){this.A.append(a,l)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],l=this.h.entries();for(var f=l.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=l.next();return a.join(`\r
`)};function Vi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Bs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function jl(a){let l="";return Os(a,function(f,g){l+=g,l+=":",l+=f,l+=`\r
`}),l}function jo(a,l,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=jl(f),typeof a=="string"?f!=null&&Pi(f):re(a,l,f))}function le(a){Pe.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}y(le,Pe);var Gm=/^https?$/i,Km=["POST","PUT"];n=le.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,l,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Tl.g(),this.g.onreadystatechange=w(d(this.Ca,this));try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(k){Bl(this,k);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var S in g)f.set(S,g[S]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const k of g.keys())f.set(k,g.get(k));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(k=>k.toLowerCase()=="content-type"),S=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Km,l,void 0)>=0)||g||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,D]of f)this.g.setRequestHeader(k,D);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(k){Bl(this,k)}};function Bl(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.o=5,Hl(a),Hs(a)}function Hl(a){a.A||(a.A=!0,Me(a,"complete"),Me(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Me(this,"complete"),Me(this,"abort"),Hs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Hs(this,!0)),le.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?zl(this):this.Xa())},n.Xa=function(){zl(this)};function zl(a){if(a.h&&typeof r<"u"){if(a.v&&Mt(a)==4)setTimeout(a.Ca.bind(a),0);else if(Me(a,"readystatechange"),Mt(a)==4){a.h=!1;try{const k=a.ca();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var f;if(!(f=l)){var g;if(g=k===0){let D=String(a.D).match(Dl)[1]||null;!D&&o.self&&o.self.location&&(D=o.self.location.protocol.slice(0,-1)),g=!Gm.test(D?D.toLowerCase():"")}f=g}if(f)Me(a,"complete"),Me(a,"success");else{a.o=6;try{var S=Mt(a)>2?a.g.statusText:""}catch{S=""}a.l=S+" ["+a.ca()+"]",Hl(a)}}finally{Hs(a)}}}}function Hs(a,l){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,l||Me(a,"ready");try{f.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Mt(a){return a.g?a.g.readyState:0}n.ca=function(){try{return Mt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),km(l)}};function ql(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Qm(a){const l={};a=(a.g&&Mt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(_(a[g]))continue;var f=Dm(a[g]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const k=l[S]||[];l[S]=k,k.push(f)}bm(l,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ui(a,l,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||l}function Wl(a){this.za=0,this.i=[],this.j=new Ri,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ui("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ui("baseRetryDelayMs",5e3,a),this.Za=Ui("retryDelaySeedMs",1e4,a),this.Ta=Ui("forwardChannelMaxRetries",2,a),this.va=Ui("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Cl(a&&a.concurrentRequestLimit),this.Ba=new Wm,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Wl.prototype,n.ka=8,n.I=1,n.connect=function(a,l,f,g){$e(0),this.W=a,this.H=l||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=tu(this,null,this.W),qs(this)};function Bo(a){if(Gl(a),a.I==3){var l=a.V++,f=it(a.J);if(re(f,"SID",a.M),re(f,"RID",l),re(f,"TYPE","terminate"),Fi(a,f),l=new Dt(a,a.j,l),l.M=2,l.A=js(it(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(l.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=l.A,f=!0),f||(l.g=nu(l.j,null),l.g.ea(l.A)),l.F=Date.now(),Fs(l)}eu(a)}function zs(a){a.g&&(zo(a),a.g.cancel(),a.g=null)}function Gl(a){zs(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ws(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function qs(a){if(!Rl(a.h)&&!a.m){a.m=!0;var l=a.Ea;J||v(),V||(J(),V=!0),T.add(l,a),a.D=0}}function Jm(a,l){return Pl(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=l.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ci(d(a.Ea,a,l),Zl(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const S=new Dt(this,this.j,a);let k=this.o;if(this.U&&(k?(k=rl(k),al(k,this.U)):k=this.U),this.u!==null||this.R||(S.J=k,k=null),this.S)e:{for(var l=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(l+=g,l>4096){l=f;break e}if(l===4096||f===this.i.length-1){l=f+1;break e}}l=1e3}else l=1e3;l=Ql(this,S,l),f=it(this.J),re(f,"RID",a),re(f,"CVER",22),this.G&&re(f,"X-HTTP-Session-Id",this.G),Fi(this,f),k&&(this.R?l="headers="+Pi(jl(k))+"&"+l:this.u&&jo(f,this.u,k)),Vo(this.h,S),this.Ra&&re(f,"TYPE","init"),this.S?(re(f,"$req",l),re(f,"SID","null"),S.U=!0,No(S,f,null)):No(S,f,l),this.I=2}}else this.I==3&&(a?Kl(this,a):this.i.length==0||Rl(this.h)||Kl(this))};function Kl(a,l){var f;l?f=l.l:f=a.V++;const g=it(a.J);re(g,"SID",a.M),re(g,"RID",f),re(g,"AID",a.K),Fi(a,g),a.u&&a.o&&jo(g,a.u,a.o),f=new Dt(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),l&&(a.i=l.G.concat(a.i)),l=Ql(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Vo(a.h,f),No(f,g,l)}function Fi(a,l){a.H&&Os(a.H,function(f,g){re(l,g,f)}),a.l&&Os({},function(f,g){re(l,g,f)})}function Ql(a,l,f){f=Math.min(a.i.length,f);const g=a.l?d(a.l.Ka,a.l,a):null;e:{var S=a.i;let Q=-1;for(;;){const ve=["count="+f];Q==-1?f>0?(Q=S[0].g,ve.push("ofs="+Q)):Q=0:ve.push("ofs="+Q);let se=!0;for(let Te=0;Te<f;Te++){var k=S[Te].g;const st=S[Te].map;if(k-=Q,k<0)Q=Math.max(0,S[Te].g-100),se=!1;else try{k="req"+k+"_"||"";try{var D=st instanceof Map?st:Object.entries(st);for(const[wn,$t]of D){let Vt=$t;c($t)&&(Vt=Ro($t)),ve.push(k+wn+"="+encodeURIComponent(Vt))}}catch(wn){throw ve.push(k+"type="+encodeURIComponent("_badmap")),wn}}catch{g&&g(st)}}if(se){D=ve.join("&");break e}}D=void 0}return a=a.i.splice(0,f),l.G=a,D}function Jl(a){if(!a.g&&!a.v){a.Y=1;var l=a.Da;J||v(),V||(J(),V=!0),T.add(l,a),a.A=0}}function Ho(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ci(d(a.Da,a),Zl(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,Yl(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ci(d(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,$e(10),zs(this),Yl(this))};function zo(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Yl(a){a.g=new Dt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var l=it(a.na);re(l,"RID","rpc"),re(l,"SID",a.M),re(l,"AID",a.K),re(l,"CI",a.F?"0":"1"),!a.F&&a.ia&&re(l,"TO",a.ia),re(l,"TYPE","xmlhttp"),Fi(a,l),a.u&&a.o&&jo(l,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=js(it(l)),f.u=null,f.R=!0,Sl(f,a)}n.Va=function(){this.C!=null&&(this.C=null,zs(this),Ho(this),$e(19))};function Ws(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Xl(a,l){var f=null;if(a.g==l){Ws(a),zo(a),a.g=null;var g=2}else if($o(a.h,l))f=l.G,xl(a.h,l),g=1;else return;if(a.I!=0){if(l.o)if(g==1){f=l.u?l.u.length:0,l=Date.now()-l.F;var S=a.D;g=Vs(),Me(g,new _l(g,f)),qs(a)}else Jl(a);else if(S=l.m,S==3||S==0&&l.X>0||!(g==1&&Jm(a,l)||g==2&&Ho(a)))switch(f&&f.length>0&&(l=a.h,l.i=l.i.concat(f)),S){case 1:vn(a,5);break;case 4:vn(a,10);break;case 3:vn(a,6);break;default:vn(a,2)}}}function Zl(a,l){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*l}function vn(a,l){if(a.j.info("Error code "+l),l==2){var f=d(a.bb,a),g=a.Ua;const S=!g;g=new Nt(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Li(g,"https"),js(g),S?zm(g.toString(),f):qm(g.toString(),f)}else $e(2);a.I=0,a.l&&a.l.pa(l),eu(a),Gl(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),$e(2)):(this.j.info("Failed to ping google.com"),$e(1))};function eu(a){if(a.I=0,a.ja=[],a.l){const l=Ll(a.h);(l.length!=0||a.i.length!=0)&&(x(a.ja,l),x(a.ja,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.oa()}}function tu(a,l,f){var g=f instanceof Nt?it(f):new Nt(f);if(g.g!="")l&&(g.g=l+"."+g.g),Di(g,g.u);else{var S=o.location;g=S.protocol,l=l?l+"."+S.hostname:S.hostname,S=+S.port;const k=new Nt(null);g&&Li(k,g),l&&(k.g=l),S&&Di(k,S),f&&(k.h=f),g=k}return f=a.G,l=a.wa,f&&l&&re(g,f,l),re(g,"VER",a.ka),Fi(a,g),g}function nu(a,l,f){if(l&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Aa&&!a.ma?new le(new Fo({ab:f})):new le(a.ma),l.Fa(a.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function iu(){}n=iu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Gs(){}Gs.prototype.g=function(a,l){return new qe(a,l)};function qe(a,l){Pe.call(this),this.g=new Wl(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(a?a["X-WebChannel-Client-Profile"]=l.sa:a={"X-WebChannel-Client-Profile":l.sa}),this.g.U=a,(a=l&&l.Qb)&&!_(a)&&(this.g.u=a),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!_(l)&&(this.g.G=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new qn(this)}y(qe,Pe),qe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},qe.prototype.close=function(){Bo(this.g)},qe.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=Ro(a),a=f);l.i.push(new Mm(l.Ya++,a)),l.I==3&&qs(l)},qe.prototype.N=function(){this.g.l=null,delete this.j,Bo(this.g),delete this.g,qe.Z.N.call(this)};function su(a){Po.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){e:{for(const f in l){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}y(su,Po);function ru(){xo.call(this),this.status=1}y(ru,xo);function qn(a){this.g=a}y(qn,iu),qn.prototype.ra=function(){Me(this.g,"a")},qn.prototype.qa=function(a){Me(this.g,new su(a))},qn.prototype.pa=function(a){Me(this.g,new ru)},qn.prototype.oa=function(){Me(this.g,"b")},Gs.prototype.createWebChannel=Gs.prototype.g,qe.prototype.send=qe.prototype.o,qe.prototype.open=qe.prototype.m,qe.prototype.close=qe.prototype.close,vf=function(){return new Gs},yf=function(){return Vs()},gf=mn,Sa={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Us.NO_ERROR=0,Us.TIMEOUT=8,Us.HTTP_ERROR=6,mr=Us,bl.COMPLETE="complete",mf=bl,gl.EventType=Ai,Ai.OPEN="a",Ai.CLOSE="b",Ai.ERROR="c",Ai.MESSAGE="d",Pe.prototype.listen=Pe.prototype.J,Ki=gl,le.prototype.listenOnce=le.prototype.K,le.prototype.getLastError=le.prototype.Ha,le.prototype.getLastErrorCode=le.prototype.ya,le.prototype.getStatus=le.prototype.ca,le.prototype.getResponseJson=le.prototype.La,le.prototype.getResponseText=le.prototype.la,le.prototype.send=le.prototype.ea,le.prototype.setWithCredentials=le.prototype.Fa,pf=le}).apply(typeof Js<"u"?Js:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Le.UNAUTHENTICATED=new Le(null),Le.GOOGLE_CREDENTIALS=new Le("google-credentials-uid"),Le.FIRST_PARTY=new Le("first-party-uid"),Le.MOCK_USER=new Le("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _i="12.10.0";function A_(n){_i=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Nn=new Ya("@firebase/firestore");function Kn(){return Nn.logLevel}function M(n,...e){if(Nn.logLevel<=Y.DEBUG){const t=e.map(mc);Nn.debug(`Firestore (${_i}): ${n}`,...t)}}function Rt(n,...e){if(Nn.logLevel<=Y.ERROR){const t=e.map(mc);Nn.error(`Firestore (${_i}): ${n}`,...t)}}function On(n,...e){if(Nn.logLevel<=Y.WARN){const t=e.map(mc);Nn.warn(`Firestore (${_i}): ${n}`,...t)}}function mc(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,wf(n,i,t)}function wf(n,e,t){let i=`FIRESTORE (${_i}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Rt(i),new Error(i)}function ae(n,e,t,i){let s="Unexpected state";typeof t=="string"?s=t:i=t,n||wf(e,s,i)}function ee(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends wt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class k_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Le.UNAUTHENTICATED)))}shutdown(){}}class C_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class R_{constructor(e){this.t=e,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ae(this.o===void 0,42304);let i=this.i;const s=u=>this.i!==i?(i=this.i,t(u)):Promise.resolve();let r=new ti;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ti,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const u=r;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},c=u=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ti)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ae(typeof i.accessToken=="string",31837,{l:i}),new _f(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string",2055,{h:e}),new Le(e)}}class P_{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class x_{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new P_(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Le.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Uu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class L_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ue(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ae(this.o===void 0,3512);const i=r=>{r.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable((()=>i(r)))};const s=r=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>s(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?s(r):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Uu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ae(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Uu(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=D_(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%62))}return i}}function X(n,e){return n<e?-1:n>e?1:0}function Aa(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const s=n.charAt(i),r=e.charAt(i);if(s!==r)return ea(s)===ea(r)?X(s,r):ea(s)?1:-1}return X(n.length,e.length)}const N_=55296,O_=57343;function ea(n){const e=n.charCodeAt(0);return e>=N_&&e<=O_}function ci(n,e,t){return n.length===e.length&&n.every(((i,s)=>t(i,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu="__name__";class ot{constructor(e,t,i){t===void 0?t=0:t>e.length&&W(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&W(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return ot.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ot?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=ot.compareSegments(e.get(s),t.get(s));if(r!==0)return r}return X(e.length,t.length)}static compareSegments(e,t){const i=ot.isNumericId(e),s=ot.isNumericId(t);return i&&!s?-1:!i&&s?1:i&&s?ot.extractNumericId(e).compare(ot.extractNumericId(t)):Aa(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Xt.fromString(e.substring(4,e.length-2))}}class oe extends ot{construct(e,t,i){return new oe(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new F(N.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((s=>s.length>0)))}return new oe(t)}static emptyPath(){return new oe([])}}const M_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends ot{construct(e,t,i){return new Fe(e,t,i)}static isValidIdentifier(e){return M_.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Fu}static keyField(){return new Fe([Fu])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new F(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new F(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new F(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=u,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(i+=c,s++):(r(),s++)}if(r(),o)throw new F(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fe(t)}static emptyPath(){return new Fe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(oe.fromString(e))}static fromName(e){return new H(oe.fromString(e).popFirst(5))}static empty(){return new H(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return oe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new oe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(n,e,t){if(!t)throw new F(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function V_(n,e,t,i){if(e===!0&&i===!0)throw new F(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ju(n){if(H.isDocumentKey(n))throw new F(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function U_(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function F_(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":W(12329,{type:typeof n})}function gr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new F(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=F_(n);throw new F(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function ye(n,e){const t={typeString:n};return e&&(t.value=e),t}function As(n,e){if(!U_(n))throw new F(N.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const s=e[i].typeString,r="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const o=n[i];if(s&&typeof o!==s){t=`JSON field '${i}' must be a ${s}.`;break}if(r!==void 0&&o!==r.value){t=`Expected '${i}' field to equal '${r.value}'`;break}}if(t)throw new F(N.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=-62135596800,Hu=1e6;class ge{static now(){return ge.fromMillis(Date.now())}static fromDate(e){return ge.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Hu);return new ge(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new F(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new F(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Bu)throw new F(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Hu}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ge._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(As(e,ge._jsonSchema))return new ge(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Bu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ge._jsonSchemaVersion="firestore/timestamp/1.0",ge._jsonSchema={type:ye("string",ge._jsonSchemaVersion),seconds:ye("number"),nanoseconds:ye("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{static fromTimestamp(e){return new q(e)}static min(){return new q(new ge(0,0))}static max(){return new q(new ge(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const fs=-1;function j_(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=q.fromTimestamp(i===1e9?new ge(t+1,0):new ge(t,i));return new rn(s,H.empty(),e)}function B_(n){return new rn(n.readTime,n.key,fs)}class rn{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new rn(q.min(),H.empty(),fs)}static max(){return new rn(q.max(),H.empty(),fs)}}function H_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=H.comparator(n.documentKey,e.documentKey),t!==0?t:X(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class q_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==z_)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&W(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R(((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):R.reject(t)}static resolve(e){return new R(((t,i)=>{t(e)}))}static reject(e){return new R(((t,i)=>{i(e)}))}static waitFor(e){return new R(((t,i)=>{let s=0,r=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++r,o&&r===s&&t()}),(u=>i(u)))})),o=!0,r===s&&t()}))}static or(e){let t=R.resolve(!1);for(const i of e)t=t.next((s=>s?R.resolve(s):i()));return t}static forEach(e,t){const i=[];return e.forEach(((s,r)=>{i.push(t.call(this,s,r))})),this.waitFor(i)}static mapArray(e,t){return new R(((i,s)=>{const r=e.length,o=new Array(r);let c=0;for(let u=0;u<r;u++){const d=u;t(e[d]).next((m=>{o[d]=m,++c,c===r&&i(o)}),(m=>s(m)))}}))}static doWhile(e,t){return new R(((i,s)=>{const r=()=>{e()===!0?t().next((()=>{r()}),s):i()};r()}))}}function W_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function bi(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class no{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}no.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_=-1;function io(n){return n==null}function ka(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf="";function K_(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=zu(e)),e=Q_(n.get(t),e);return zu(e)}function Q_(n,e){let t=e;const i=n.length;for(let s=0;s<i;s++){const r=n.charAt(s);switch(r){case"\0":t+="";break;case Tf:t+="";break;default:t+=r}}return t}function zu(n){return n+Tf+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ks(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function J_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,t){this.comparator=e,this.root=t||Ae.EMPTY}insert(e,t){return new pe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ae.BLACK,null,null))}remove(e){return new pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ae.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ys(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ys(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ys(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ys(this.root,e,this.comparator,!0)}}class Ys{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ae{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??Ae.RED,this.left=s??Ae.EMPTY,this.right=r??Ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new Ae(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ae.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw W(43730,{key:this.key,value:this.value});if(this.right.isRed())throw W(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw W(27949);return e+(this.isRed()?0:1)}}Ae.EMPTY=null,Ae.RED=!0,Ae.BLACK=!1;Ae.EMPTY=new class{constructor(){this.size=0}get key(){throw W(57766)}get value(){throw W(16141)}get color(){throw W(16727)}get left(){throw W(29726)}get right(){throw W(36894)}copy(e,t,i,s,r){return this}insert(e,t,i){return new Ae(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.comparator=e,this.data=new pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Wu(this.data.getIterator())}getIteratorFrom(e){return new Wu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new _e(this.comparator);return t.data=e,t}}class Wu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.fields=e,e.sort(Fe.comparator)}static empty(){return new Kt([])}unionWith(e){let t=new _e(Fe.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Kt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ci(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class If extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new If("Invalid base64 string: "+r):r}})(e);return new Ce(t)}static fromUint8Array(e){const t=(function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r})(e);return new Ce(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ce.EMPTY_BYTE_STRING=new Ce("");const Y_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function on(n){if(ae(!!n,39018),typeof n=="string"){let e=0;const t=Y_.exec(n);if(ae(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:fe(n.seconds),nanos:fe(n.nanos)}}function fe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function an(n){return typeof n=="string"?Ce.fromBase64String(n):Ce.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef="server_timestamp",Sf="__type__",Af="__previous_value__",kf="__local_write_time__";function gc(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Sf])==null?void 0:i.stringValue)===Ef}function so(n){const e=n.mapValue.fields[Af];return gc(e)?so(e):e}function ps(n){const e=on(n.mapValue.fields[kf].timestampValue);return new ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e,t,i,s,r,o,c,u,d,m,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=m,this.apiKey=y}}const Nr="(default)";class ms{constructor(e,t){this.projectId=e,this.database=t||Nr}static empty(){return new ms("","")}get isDefaultDatabase(){return this.database===Nr}isEqual(e){return e instanceof ms&&e.projectId===this.projectId&&e.database===this.database}}function Z_(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new F(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ms(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb="__type__",tb="__max__",Xs={mapValue:{}},nb="__vector__",Ca="value";function cn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?gc(n)?4:sb(n)?9007199254740991:ib(n)?10:11:W(28295,{value:n})}function yt(n,e){if(n===e)return!0;const t=cn(n);if(t!==cn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ps(n).isEqual(ps(e));case 3:return(function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=on(s.timestampValue),c=on(r.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,r){return an(s.bytesValue).isEqual(an(r.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,r){return fe(s.geoPointValue.latitude)===fe(r.geoPointValue.latitude)&&fe(s.geoPointValue.longitude)===fe(r.geoPointValue.longitude)})(n,e);case 2:return(function(s,r){if("integerValue"in s&&"integerValue"in r)return fe(s.integerValue)===fe(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=fe(s.doubleValue),c=fe(r.doubleValue);return o===c?ka(o)===ka(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return ci(n.arrayValue.values||[],e.arrayValue.values||[],yt);case 10:case 11:return(function(s,r){const o=s.mapValue.fields||{},c=r.mapValue.fields||{};if(qu(o)!==qu(c))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!yt(o[u],c[u])))return!1;return!0})(n,e);default:return W(52216,{left:n})}}function gs(n,e){return(n.values||[]).find((t=>yt(t,e)))!==void 0}function li(n,e){if(n===e)return 0;const t=cn(n),i=cn(e);if(t!==i)return X(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return X(n.booleanValue,e.booleanValue);case 2:return(function(r,o){const c=fe(r.integerValue||r.doubleValue),u=fe(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(n,e);case 3:return Gu(n.timestampValue,e.timestampValue);case 4:return Gu(ps(n),ps(e));case 5:return Aa(n.stringValue,e.stringValue);case 6:return(function(r,o){const c=an(r),u=an(o);return c.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(r,o){const c=r.split("/"),u=o.split("/");for(let d=0;d<c.length&&d<u.length;d++){const m=X(c[d],u[d]);if(m!==0)return m}return X(c.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(r,o){const c=X(fe(r.latitude),fe(o.latitude));return c!==0?c:X(fe(r.longitude),fe(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Ku(n.arrayValue,e.arrayValue);case 10:return(function(r,o){var w,C,x,O;const c=r.fields||{},u=o.fields||{},d=(w=c[Ca])==null?void 0:w.arrayValue,m=(C=u[Ca])==null?void 0:C.arrayValue,y=X(((x=d==null?void 0:d.values)==null?void 0:x.length)||0,((O=m==null?void 0:m.values)==null?void 0:O.length)||0);return y!==0?y:Ku(d,m)})(n.mapValue,e.mapValue);case 11:return(function(r,o){if(r===Xs.mapValue&&o===Xs.mapValue)return 0;if(r===Xs.mapValue)return 1;if(o===Xs.mapValue)return-1;const c=r.fields||{},u=Object.keys(c),d=o.fields||{},m=Object.keys(d);u.sort(),m.sort();for(let y=0;y<u.length&&y<m.length;++y){const w=Aa(u[y],m[y]);if(w!==0)return w;const C=li(c[u[y]],d[m[y]]);if(C!==0)return C}return X(u.length,m.length)})(n.mapValue,e.mapValue);default:throw W(23264,{he:t})}}function Gu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return X(n,e);const t=on(n),i=on(e),s=X(t.seconds,i.seconds);return s!==0?s:X(t.nanos,i.nanos)}function Ku(n,e){const t=n.values||[],i=e.values||[];for(let s=0;s<t.length&&s<i.length;++s){const r=li(t[s],i[s]);if(r)return r}return X(t.length,i.length)}function ui(n){return Ra(n)}function Ra(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=on(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return an(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return H.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",s=!0;for(const r of t.values||[])s?s=!1:i+=",",i+=Ra(r);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${Ra(t.fields[o])}`;return s+"}"})(n.mapValue):W(61005,{value:n})}function yr(n){switch(cn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=so(n);return e?16+yr(e):16;case 5:return 2*n.stringValue.length;case 6:return an(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((s,r)=>s+yr(r)),0)})(n.arrayValue);case 10:case 11:return(function(i){let s=0;return ks(i.fields,((r,o)=>{s+=r.length+yr(o)})),s})(n.mapValue);default:throw W(13486,{value:n})}}function Pa(n){return!!n&&"integerValue"in n}function yc(n){return!!n&&"arrayValue"in n}function Qu(n){return!!n&&"nullValue"in n}function Ju(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ta(n){return!!n&&"mapValue"in n}function ib(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[eb])==null?void 0:i.stringValue)===nb}function ss(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return ks(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=ss(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ss(n.arrayValue.values[t]);return e}return{...n}}function sb(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===tb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.value=e}static empty(){return new at({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!ta(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ss(t)}setAll(e){let t=Fe.emptyPath(),i={},s=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,i,s),i={},s=[],t=c.popLast()}o?i[c.lastSegment()]=ss(o):s.push(c.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());ta(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return yt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];ta(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){ks(t,((s,r)=>e[s]=r));for(const s of i)delete e[s]}clone(){return new at(ss(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t,i,s,r,o,c){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=c}static newInvalidDocument(e){return new De(e,0,q.min(),q.min(),q.min(),at.empty(),0)}static newFoundDocument(e,t,i,s){return new De(e,1,t,q.min(),i,s,0)}static newNoDocument(e,t){return new De(e,2,t,q.min(),q.min(),at.empty(),0)}static newUnknownDocument(e,t){return new De(e,3,t,q.min(),q.min(),at.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=at.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=at.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof De&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new De(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Or{constructor(e,t){this.position=e,this.inclusive=t}}function Yu(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],o=n.position[s];if(r.field.isKeyField()?i=H.comparator(H.fromName(o.referenceValue),t.key):i=li(o,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Xu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!yt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Mr{constructor(e,t="asc"){this.field=e,this.dir=t}}function rb(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Cf{}class we extends Cf{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new ab(e,t,i):t==="array-contains"?new ub(e,i):t==="in"?new db(e,i):t==="not-in"?new hb(e,i):t==="array-contains-any"?new fb(e,i):new we(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new cb(e,i):new lb(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(li(t,this.value)):t!==null&&cn(this.value)===cn(t)&&this.matchesComparison(li(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vt extends Cf{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new vt(e,t)}matches(e){return Rf(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Rf(n){return n.op==="and"}function Pf(n){return ob(n)&&Rf(n)}function ob(n){for(const e of n.filters)if(e instanceof vt)return!1;return!0}function xa(n){if(n instanceof we)return n.field.canonicalString()+n.op.toString()+ui(n.value);if(Pf(n))return n.filters.map((e=>xa(e))).join(",");{const e=n.filters.map((t=>xa(t))).join(",");return`${n.op}(${e})`}}function xf(n,e){return n instanceof we?(function(i,s){return s instanceof we&&i.op===s.op&&i.field.isEqual(s.field)&&yt(i.value,s.value)})(n,e):n instanceof vt?(function(i,s){return s instanceof vt&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce(((r,o,c)=>r&&xf(o,s.filters[c])),!0):!1})(n,e):void W(19439)}function Lf(n){return n instanceof we?(function(t){return`${t.field.canonicalString()} ${t.op} ${ui(t.value)}`})(n):n instanceof vt?(function(t){return t.op.toString()+" {"+t.getFilters().map(Lf).join(" ,")+"}"})(n):"Filter"}class ab extends we{constructor(e,t,i){super(e,t,i),this.key=H.fromName(i.referenceValue)}matches(e){const t=H.comparator(e.key,this.key);return this.matchesComparison(t)}}class cb extends we{constructor(e,t){super(e,"in",t),this.keys=Df("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class lb extends we{constructor(e,t){super(e,"not-in",t),this.keys=Df("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Df(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((i=>H.fromName(i.referenceValue)))}class ub extends we{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return yc(t)&&gs(t.arrayValue,this.value)}}class db extends we{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&gs(this.value.arrayValue,t)}}class hb extends we{constructor(e,t){super(e,"not-in",t)}matches(e){if(gs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!gs(this.value.arrayValue,t)}}class fb extends we{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!yc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>gs(this.value.arrayValue,i)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e,t=null,i=[],s=[],r=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=c,this.Te=null}}function Zu(n,e=null,t=[],i=[],s=null,r=null,o=null){return new pb(n,e,t,i,s,r,o)}function vc(n){const e=ee(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>xa(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(r){return r.field.canonicalString()+r.dir})(i))).join(","),io(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>ui(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>ui(i))).join(",")),e.Te=t}return e.Te}function wc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!rb(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!xf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Xu(n.startAt,e.startAt)&&Xu(n.endAt,e.endAt)}function La(n){return H.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,t=null,i=[],s=[],r=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function mb(n,e,t,i,s,r,o,c){return new ro(n,e,t,i,s,r,o,c)}function _c(n){return new ro(n)}function ed(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function gb(n){return H.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function yb(n){return n.collectionGroup!==null}function rs(n){const e=ee(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const r of e.explicitOrderBy)e.Ie.push(r),t.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new _e(Fe.comparator);return o.filters.forEach((u=>{u.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(e).forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new Mr(r,i))})),t.has(Fe.keyField().canonicalString())||e.Ie.push(new Mr(Fe.keyField(),i))}return e.Ie}function mt(n){const e=ee(n);return e.Ee||(e.Ee=vb(e,rs(n))),e.Ee}function vb(n,e){if(n.limitType==="F")return Zu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const r=s.dir==="desc"?"asc":"desc";return new Mr(s.field,r)}));const t=n.endAt?new Or(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Or(n.startAt.position,n.startAt.inclusive):null;return Zu(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Da(n,e,t){return new ro(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function oo(n,e){return wc(mt(n),mt(e))&&n.limitType===e.limitType}function Nf(n){return`${vc(mt(n))}|lt:${n.limitType}`}function Qn(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((s=>Lf(s))).join(", ")}]`),io(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((s=>ui(s))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((s=>ui(s))).join(",")),`Target(${i})`})(mt(n))}; limitType=${n.limitType})`}function ao(n,e){return e.isFoundDocument()&&(function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):H.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)})(n,e)&&(function(i,s){for(const r of rs(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0})(n,e)&&(function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0})(n,e)&&(function(i,s){return!(i.startAt&&!(function(o,c,u){const d=Yu(o,c,u);return o.inclusive?d<=0:d<0})(i.startAt,rs(i),s)||i.endAt&&!(function(o,c,u){const d=Yu(o,c,u);return o.inclusive?d>=0:d>0})(i.endAt,rs(i),s))})(n,e)}function wb(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Of(n){return(e,t)=>{let i=!1;for(const s of rs(n)){const r=_b(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function _b(n,e,t){const i=n.field.isKeyField()?H.comparator(e.key,t.key):(function(r,o,c){const u=o.data.field(r),d=c.data.field(r);return u!==null&&d!==null?li(u,d):W(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return W(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ks(this.inner,((t,i)=>{for(const[s,r]of i)e(s,r)}))}isEmpty(){return J_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb=new pe(H.comparator);function ln(){return bb}const Mf=new pe(H.comparator);function Qi(...n){let e=Mf;for(const t of n)e=e.insert(t.key,t);return e}function Tb(n){let e=Mf;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function An(){return os()}function $f(){return os()}function os(){return new jn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const Ib=new _e(H.comparator);function ne(...n){let e=Ib;for(const t of n)e=e.add(t);return e}const Eb=new _e(X);function Sb(){return Eb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ab(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ka(e)?"-0":e}}function kb(n){return{integerValue:""+n}}/**
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
 */class co{constructor(){this._=void 0}}function Cb(n,e,t){return n instanceof Na?(function(s,r){const o={fields:{[Sf]:{stringValue:Ef},[kf]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&gc(r)&&(r=so(r)),r&&(o.fields[Af]=r),{mapValue:o}})(t,e):n instanceof $r?Vf(n,e):n instanceof Vr?Uf(n,e):(function(s,r){const o=Pb(s,r),c=td(o)+td(s.Ae);return Pa(o)&&Pa(s.Ae)?kb(c):Ab(s.serializer,c)})(n,e)}function Rb(n,e,t){return n instanceof $r?Vf(n,e):n instanceof Vr?Uf(n,e):t}function Pb(n,e){return n instanceof Oa?(function(i){return Pa(i)||(function(r){return!!r&&"doubleValue"in r})(i)})(e)?e:{integerValue:0}:null}class Na extends co{}class $r extends co{constructor(e){super(),this.elements=e}}function Vf(n,e){const t=Ff(e);for(const i of n.elements)t.some((s=>yt(s,i)))||t.push(i);return{arrayValue:{values:t}}}class Vr extends co{constructor(e){super(),this.elements=e}}function Uf(n,e){let t=Ff(e);for(const i of n.elements)t=t.filter((s=>!yt(s,i)));return{arrayValue:{values:t}}}class Oa extends co{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function td(n){return fe(n.integerValue||n.doubleValue)}function Ff(n){return yc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function xb(n,e){return n.field.isEqual(e.field)&&(function(i,s){return i instanceof $r&&s instanceof $r||i instanceof Vr&&s instanceof Vr?ci(i.elements,s.elements,yt):i instanceof Oa&&s instanceof Oa?yt(i.Ae,s.Ae):i instanceof Na&&s instanceof Na})(n.transform,e.transform)}class kn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new kn}static exists(e){return new kn(void 0,e)}static updateTime(e){return new kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class bc{}function jf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Db(n.key,kn.none()):new Tc(n.key,n.data,kn.none());{const t=n.data,i=at.empty();let s=new _e(Fe.comparator);for(let r of e.fields)if(!s.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new lo(n.key,i,new Kt(s.toArray()),kn.none())}}function Lb(n,e,t){n instanceof Tc?(function(s,r,o){const c=s.value.clone(),u=id(s.fieldTransforms,r,o.transformResults);c.setAll(u),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof lo?(function(s,r,o){if(!vr(s.precondition,r))return void r.convertToUnknownDocument(o.version);const c=id(s.fieldTransforms,r,o.transformResults),u=r.data;u.setAll(Bf(s)),u.setAll(c),r.convertToFoundDocument(o.version,u).setHasCommittedMutations()})(n,e,t):(function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function as(n,e,t,i){return n instanceof Tc?(function(r,o,c,u){if(!vr(r.precondition,o))return c;const d=r.value.clone(),m=sd(r.fieldTransforms,u,o);return d.setAll(m),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null})(n,e,t,i):n instanceof lo?(function(r,o,c,u){if(!vr(r.precondition,o))return c;const d=sd(r.fieldTransforms,u,o),m=o.data;return m.setAll(Bf(r)),m.setAll(d),o.convertToFoundDocument(o.version,m).setHasLocalMutations(),c===null?null:c.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((y=>y.field)))})(n,e,t,i):(function(r,o,c){return vr(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function nd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&ci(i,s,((r,o)=>xb(r,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Tc extends bc{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class lo extends bc{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Bf(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function id(n,e,t){const i=new Map;ae(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const r=n[s],o=r.transform,c=e.data.field(r.field);i.set(r.field,Rb(o,c,t[s]))}return i}function sd(n,e,t){const i=new Map;for(const s of n){const r=s.transform,o=t.data.field(s.field);i.set(s.field,Cb(r,o,e))}return i}class Db extends bc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&Lb(r,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=as(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=as(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=$f();return this.mutations.forEach((s=>{const r=e.get(s.key),o=r.overlayedDocument;let c=this.applyToLocalView(o,r.mutatedFields);c=t.has(s.key)?null:c;const u=jf(o,c);u!==null&&i.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(q.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ne())}isEqual(e){return this.batchId===e.batchId&&ci(this.mutations,e.mutations,((t,i)=>nd(t,i)))&&ci(this.baseMutations,e.baseMutations,((t,i)=>nd(t,i)))}}/**
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
 */class Ob{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Mb{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me,Z;function Hf(n){if(n===void 0)return Rt("GRPC error has no .code"),N.UNKNOWN;switch(n){case me.OK:return N.OK;case me.CANCELLED:return N.CANCELLED;case me.UNKNOWN:return N.UNKNOWN;case me.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case me.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case me.INTERNAL:return N.INTERNAL;case me.UNAVAILABLE:return N.UNAVAILABLE;case me.UNAUTHENTICATED:return N.UNAUTHENTICATED;case me.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case me.NOT_FOUND:return N.NOT_FOUND;case me.ALREADY_EXISTS:return N.ALREADY_EXISTS;case me.PERMISSION_DENIED:return N.PERMISSION_DENIED;case me.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case me.ABORTED:return N.ABORTED;case me.OUT_OF_RANGE:return N.OUT_OF_RANGE;case me.UNIMPLEMENTED:return N.UNIMPLEMENTED;case me.DATA_LOSS:return N.DATA_LOSS;default:return W(39323,{code:n})}}(Z=me||(me={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function $b(){return new TextEncoder}/**
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
 */const Vb=new Xt([4294967295,4294967295],0);function rd(n){const e=$b().encode(n),t=new ff;return t.update(e),new Uint8Array(t.digest())}function od(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Xt([t,i],0),new Xt([s,r],0)]}class Ic{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Ji(`Invalid padding: ${t}`);if(i<0)throw new Ji(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ji(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Ji(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Xt.fromNumber(this.ge)}ye(e,t,i){let s=e.add(t.multiply(Xt.fromNumber(i)));return s.compare(Vb)===1&&(s=new Xt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=rd(e),[i,s]=od(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(i,s,r);if(!this.we(o))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Ic(r,s,t);return i.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=rd(e),[i,s]=od(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(i,s,r);this.be(o)}}be(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Ji extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,Cs.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new uo(q.min(),s,new pe(X),ln(),ne())}}class Cs{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Cs(i,t,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,t,i,s){this.Se=e,this.removedTargetIds=t,this.key=i,this.De=s}}class zf{constructor(e,t){this.targetId=e,this.Ce=t}}class qf{constructor(e,t,i=Ce.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class ad{constructor(){this.ve=0,this.Fe=cd(),this.Me=Ce.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ne(),t=ne(),i=ne();return this.Fe.forEach(((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:W(38017,{changeType:r})}})),new Cs(this.Me,this.xe,e,t,i)}Ke(){this.Oe=!1,this.Fe=cd()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ae(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Ub{constructor(e){this.Ge=e,this.ze=new Map,this.je=ln(),this.He=Zs(),this.Je=Zs(),this.Ze=new pe(X)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.We(),i.Ne||i.Ke(),i.Le(e.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.Qe(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:W(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,i=e.Ce.count,s=this.ot(t);if(s){const r=s.target;if(La(r))if(i===0){const o=new H(r.path);this.et(t,o,De.newNoDocument(o,q.min()))}else ae(i===1,20013,{expectedCount:i});else{const o=this._t(t);if(o!==i){const c=this.ut(e),u=c?this.ct(c,e,o):1;if(u!==0){this.it(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=t;let o,c;try{o=an(i).toUint8Array()}catch(u){if(u instanceof If)return On("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Ic(o,s,r)}catch(u){return On(u instanceof Ji?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let s=0;return i.forEach((r=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(c)||(this.et(t,r,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((r,o)=>{const c=this.ot(o);if(c){if(r.current&&La(c.target)){const u=new H(c.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,De.newNoDocument(u,e))}r.Be&&(t.set(o,r.ke()),r.Ke())}}));let i=ne();this.Je.forEach(((r,o)=>{let c=!0;o.forEachWhile((u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(i=i.add(r))})),this.je.forEach(((r,o)=>o.setReadTime(e)));const s=new uo(e,t,this.Ze,this.je,i);return this.je=ln(),this.He=Zs(),this.Je=Zs(),this.Ze=new pe(X),s}Ye(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,i),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new ad,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new _e(X),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new _e(X),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new ad),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Zs(){return new pe(H.comparator)}function cd(){return new pe(H.comparator)}const Fb={asc:"ASCENDING",desc:"DESCENDING"},jb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Bb={and:"AND",or:"OR"};class Hb{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ma(n,e){return n.useProto3Json||io(e)?e:{value:e}}function zb(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qb(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ni(n){return ae(!!n,49232),q.fromTimestamp((function(t){const i=on(t);return new ge(i.seconds,i.nanos)})(n))}function Wb(n,e){return $a(n,e).canonicalString()}function $a(n,e){const t=(function(s){return new oe(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Wf(n){const e=oe.fromString(n);return ae(Yf(e),10190,{key:e.toString()}),e}function na(n,e){const t=Wf(e);if(t.get(1)!==n.databaseId.projectId)throw new F(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new F(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new H(Kf(t))}function Gf(n,e){return Wb(n.databaseId,e)}function Gb(n){const e=Wf(n);return e.length===4?oe.emptyPath():Kf(e)}function ld(n){return new oe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Kf(n){return ae(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Kb(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:W(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=(function(d,m){return d.useProto3Json?(ae(m===void 0||typeof m=="string",58123),Ce.fromBase64String(m||"")):(ae(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),Ce.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(d){const m=d.code===void 0?N.UNKNOWN:Hf(d.code);return new F(m,d.message||"")})(o);t=new qf(i,s,r,c||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=na(n,i.document.name),r=ni(i.document.updateTime),o=i.document.createTime?ni(i.document.createTime):q.min(),c=new at({mapValue:{fields:i.document.fields}}),u=De.newFoundDocument(s,r,o,c),d=i.targetIds||[],m=i.removedTargetIds||[];t=new wr(d,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=na(n,i.document),r=i.readTime?ni(i.readTime):q.min(),o=De.newNoDocument(s,r),c=i.removedTargetIds||[];t=new wr([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=na(n,i.document),r=i.removedTargetIds||[];t=new wr([],r,s,null)}else{if(!("filter"in e))return W(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new Mb(s,r),c=i.targetId;t=new zf(c,o)}}return t}function Qb(n,e){return{documents:[Gf(n,e.path)]}}function Jb(n,e){const t={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Gf(n,s);const r=(function(d){if(d.length!==0)return Jf(vt.create(d,"and"))})(e.filters);r&&(t.structuredQuery.where=r);const o=(function(d){if(d.length!==0)return d.map((m=>(function(w){return{field:Jn(w.field),direction:Zb(w.dir)}})(m)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Ma(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{ft:t,parent:s}}function Yb(n){let e=Gb(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){ae(i===1,65062);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let r=[];t.where&&(r=(function(y){const w=Qf(y);return w instanceof vt&&Pf(w)?w.getFilters():[w]})(t.where));let o=[];t.orderBy&&(o=(function(y){return y.map((w=>(function(x){return new Mr(Yn(x.field),(function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(x.direction))})(w)))})(t.orderBy));let c=null;t.limit&&(c=(function(y){let w;return w=typeof y=="object"?y.value:y,io(w)?null:w})(t.limit));let u=null;t.startAt&&(u=(function(y){const w=!!y.before,C=y.values||[];return new Or(C,w)})(t.startAt));let d=null;return t.endAt&&(d=(function(y){const w=!y.before,C=y.values||[];return new Or(C,w)})(t.endAt)),mb(e,s,o,r,c,"F",u,d)}function Xb(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Qf(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Yn(t.unaryFilter.field);return we.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=Yn(t.unaryFilter.field);return we.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Yn(t.unaryFilter.field);return we.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Yn(t.unaryFilter.field);return we.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return W(61313);default:return W(60726)}})(n):n.fieldFilter!==void 0?(function(t){return we.create(Yn(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return W(58110);default:return W(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return vt.create(t.compositeFilter.filters.map((i=>Qf(i))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return W(1026)}})(t.compositeFilter.op))})(n):W(30097,{filter:n})}function Zb(n){return Fb[n]}function eT(n){return jb[n]}function tT(n){return Bb[n]}function Jn(n){return{fieldPath:n.canonicalString()}}function Yn(n){return Fe.fromServerFormat(n.fieldPath)}function Jf(n){return n instanceof we?(function(t){if(t.op==="=="){if(Ju(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NAN"}};if(Qu(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ju(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NOT_NAN"}};if(Qu(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jn(t.field),op:eT(t.op),value:t.value}}})(n):n instanceof vt?(function(t){const i=t.getFilters().map((s=>Jf(s)));return i.length===1?i[0]:{compositeFilter:{op:tT(t.op),filters:i}}})(n):W(54877,{filter:n})}function Yf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,t,i,s,r=q.min(),o=q.min(),c=Ce.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Qt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e){this.yt=e}}function iT(n){const e=Yb({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Da(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(){this.Sn=new rT}addToCollectionParentIndex(e,t){return this.Sn.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(rn.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(rn.min())}updateCollectionGroup(e,t,i){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class rT{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new _e(oe.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new _e(oe.comparator)).toArray()}}/**
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
 */const ud={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Xf=41943040;class He{static withCacheSize(e){return new He(e,He.DEFAULT_COLLECTION_PERCENTILE,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */He.DEFAULT_COLLECTION_PERCENTILE=10,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,He.DEFAULT=new He(Xf,He.DEFAULT_COLLECTION_PERCENTILE,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),He.DISABLED=new He(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new di(0)}static ar(){return new di(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="LruGarbageCollector",oT=1048576;function hd([n,e],[t,i]){const s=X(n,t);return s===0?X(e,i):s}class aT{constructor(e){this.Pr=e,this.buffer=new _e(hd),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();hd(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class cT{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){M(dd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){bi(t)?M(dd,"Ignoring IndexedDB error during garbage collection: ",t):await to(t)}await this.Ar(3e5)}))}}class lT{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return R.resolve(no.ce);const i=new aT(t);return this.Vr.forEachTarget(e,(s=>i.Er(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>i.Er(s))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(ud)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ud):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let i,s,r,o,c,u,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((y=>(y>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),s=this.params.maximumSequenceNumbersToCollect):s=y,o=Date.now(),this.nthSequenceNumber(e,s)))).next((y=>(i=y,c=Date.now(),this.removeTargets(e,i,t)))).next((y=>(r=y,u=Date.now(),this.removeOrphanedDocuments(e,i)))).next((y=>(d=Date.now(),Kn()<=Y.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-m}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${r} targets in `+(u-c)+`ms
	Removed ${y} documents in `+(d-u)+`ms
Total Duration: ${d-m}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:y}))))}}function uT(n,e){return new lT(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(){this.changes=new jn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,De.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?R.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class hT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(i=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(i!==null&&as(i.mutation,s,Kt.empty(),ge.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,ne()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=ne()){const s=An();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,i).next((r=>{let o=Qi();return r.forEach(((c,u)=>{o=o.insert(c,u.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const i=An();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,ne())))}populateOverlays(e,t,i){const s=[];return i.forEach((r=>{t.has(r)||s.push(r)})),this.documentOverlayCache.getOverlays(e,s).next((r=>{r.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,i,s){let r=ln();const o=os(),c=(function(){return os()})();return t.forEach(((u,d)=>{const m=i.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof lo)?r=r.insert(d.key,d):m!==void 0?(o.set(d.key,m.mutation.getFieldMask()),as(m.mutation,d,m.mutation.getFieldMask(),ge.now())):o.set(d.key,Kt.empty())})),this.recalculateAndSaveOverlays(e,r).next((u=>(u.forEach(((d,m)=>o.set(d,m))),t.forEach(((d,m)=>c.set(d,new hT(m,o.get(d)??null)))),c)))}recalculateAndSaveOverlays(e,t){const i=os();let s=new pe(((o,c)=>o-c)),r=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((u=>{const d=t.get(u);if(d===null)return;let m=i.get(u)||Kt.empty();m=c.applyToLocalView(d,m),i.set(u,m);const y=(s.get(c.batchId)||ne()).add(u);s=s.insert(c.batchId,y)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,m=u.value,y=$f();m.forEach((w=>{if(!r.has(w)){const C=jf(t.get(w),i.get(w));C!==null&&y.set(w,C),r=r.add(w)}})),o.push(this.documentOverlayCache.saveOverlays(e,d,y))}return R.waitFor(o)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,s){return gb(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):yb(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,s):this.getDocumentsMatchingCollectionQuery(e,t,i,s)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next((r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-r.size):R.resolve(An());let c=fs,u=r;return o.next((d=>R.forEach(d,((m,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),r.get(m)?R.resolve():this.remoteDocumentCache.getEntry(e,m).next((w=>{u=u.insert(m,w)}))))).next((()=>this.populateOverlays(e,d,r))).next((()=>this.computeViews(e,u,d,ne()))).next((m=>({batchId:c,changes:Tb(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new H(t)).next((i=>{let s=Qi();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,s){const r=t.collectionGroup;let o=Qi();return this.indexManager.getCollectionParents(e,r).next((c=>R.forEach(c,(u=>{const d=(function(y,w){return new ro(w,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)})(t,u.child(r));return this.getDocumentsMatchingCollectionQuery(e,d,i,s).next((m=>{m.forEach(((y,w)=>{o=o.insert(y,w)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,r,s)))).next((o=>{r.forEach(((u,d)=>{const m=d.getKey();o.get(m)===null&&(o=o.insert(m,De.newInvalidDocument(m)))}));let c=Qi();return o.forEach(((u,d)=>{const m=r.get(u);m!==void 0&&as(m.mutation,d,Kt.empty(),ge.now()),ao(t,d)&&(c=c.insert(u,d))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return R.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:ni(s.createTime)}})(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(s){return{name:s.name,query:iT(s.bundledQuery),readTime:ni(s.readTime)}})(t)),R.resolve()}}/**
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
 */class mT{constructor(){this.overlays=new pe(H.comparator),this.Lr=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const i=An();return R.forEach(t,(s=>this.getOverlay(e,s).next((r=>{r!==null&&i.set(s,r)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((s,r)=>{this.bt(e,t,r)})),R.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.Lr.get(i);return s!==void 0&&(s.forEach((r=>this.overlays=this.overlays.remove(r))),this.Lr.delete(i)),R.resolve()}getOverlaysForCollection(e,t,i){const s=An(),r=t.length+1,o=new H(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===r&&u.largestBatchId>i&&s.set(u.getKey(),u)}return R.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let r=new pe(((d,m)=>d-m));const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>i){let m=r.get(d.largestBatchId);m===null&&(m=An(),r=r.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=An(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((d,m)=>c.set(d,m))),!(c.size()>=s)););return R.resolve(c)}bt(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(i.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new Ob(t,i));let r=this.Lr.get(t);r===void 0&&(r=ne(),this.Lr.set(t,r)),this.Lr.set(t,r.add(i.key))}}/**
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
 */class gT{constructor(){this.sessionToken=Ce.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(){this.kr=new _e(Ee.Kr),this.qr=new _e(Ee.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const i=new Ee(e,t);this.kr=this.kr.add(i),this.qr=this.qr.add(i)}$r(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new Ee(e,t))}Qr(e,t){e.forEach((i=>this.removeReference(i,t)))}Gr(e){const t=new H(new oe([])),i=new Ee(t,e),s=new Ee(t,e+1),r=[];return this.qr.forEachInRange([i,s],(o=>{this.Wr(o),r.push(o.key)})),r}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new H(new oe([])),i=new Ee(t,e),s=new Ee(t,e+1);let r=ne();return this.qr.forEachInRange([i,s],(o=>{r=r.add(o.key)})),r}containsKey(e){const t=new Ee(e,0),i=this.kr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Ee{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return H.comparator(e.key,t.key)||X(e.Hr,t.Hr)}static Ur(e,t){return X(e.Hr,t.Hr)||H.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new _e(Ee.Kr)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const r=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Nb(r,t,i,s);this.mutationQueue.push(o);for(const c of s)this.Jr=this.Jr.add(new Ee(c.key,r)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,t){return R.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.Xr(i),r=s<0?0:s;return R.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?G_:this.Yn-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Ee(t,0),s=new Ee(t,Number.POSITIVE_INFINITY),r=[];return this.Jr.forEachInRange([i,s],(o=>{const c=this.Zr(o.Hr);r.push(c)})),R.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new _e(X);return t.forEach((s=>{const r=new Ee(s,0),o=new Ee(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([r,o],(c=>{i=i.add(c.Hr)}))})),R.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;H.isDocumentKey(r)||(r=r.child(""));const o=new Ee(new H(r),0);let c=new _e(X);return this.Jr.forEachWhile((u=>{const d=u.key.path;return!!i.isPrefixOf(d)&&(d.length===s&&(c=c.add(u.Hr)),!0)}),o),R.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((i=>{const s=this.Zr(i);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){ae(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Jr;return R.forEach(t.mutations,(s=>{const r=new Ee(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Jr=i}))}nr(e){}containsKey(e,t){const i=new Ee(t,0),s=this.Jr.firstAfterOrEqual(i);return R.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e){this.ti=e,this.docs=(function(){return new pe(H.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),r=s?s.size:0,o=this.ti(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return R.resolve(i?i.document.mutableCopy():De.newInvalidDocument(t))}getEntries(e,t){let i=ln();return t.forEach((s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():De.newInvalidDocument(s))})),R.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let r=ln();const o=t.path,c=new H(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:m}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||H_(B_(m),i)<=0||(s.has(m.key)||ao(t,m))&&(r=r.insert(m.key,m.mutableCopy()))}return R.resolve(r)}getAllFromCollectionGroup(e,t,i,s){W(9500)}ni(e,t){return R.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new wT(this)}getSize(e){return R.resolve(this.size)}}class wT extends dT{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(i)})),R.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(e){this.persistence=e,this.ri=new jn((t=>vc(t)),wc),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.ii=0,this.si=new Ec,this.targetCount=0,this.oi=di._r()}forEachTarget(e,t){return this.ri.forEach(((i,s)=>t(s))),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.ii&&(this.ii=t),R.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new di(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.lr(t),R.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.ri.forEach(((o,c)=>{c.sequenceNumber<=t&&i.get(c.targetId)===null&&(this.ri.delete(o),r.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),R.waitFor(r).next((()=>s))}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const i=this.ri.get(t)||null;return R.resolve(i)}addMatchingKeys(e,t,i){return this.si.$r(t,i),R.resolve()}removeMatchingKeys(e,t,i){this.si.Qr(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach((o=>{r.push(s.markPotentiallyOrphaned(e,o))})),R.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const i=this.si.jr(t);return R.resolve(i)}containsKey(e,t){return R.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,t){this._i={},this.overlays={},this.ai=new no(0),this.ui=!1,this.ui=!0,this.ci=new gT,this.referenceDelegate=e(this),this.li=new _T(this),this.indexManager=new sT,this.remoteDocumentCache=(function(s){return new vT(s)})((i=>this.referenceDelegate.hi(i))),this.serializer=new nT(t),this.Pi=new pT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new mT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this._i[e.toKey()];return i||(i=new yT(t,this.referenceDelegate),this._i[e.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,i){M("MemoryPersistence","Starting transaction:",e);const s=new bT(this.ai.next());return this.referenceDelegate.Ti(),i(s).next((r=>this.referenceDelegate.Ii(s).next((()=>r)))).toPromise().then((r=>(s.raiseOnCommittedEvent(),r)))}Ei(e,t){return R.or(Object.values(this._i).map((i=>()=>i.containsKey(e,t))))}}class bT extends q_{constructor(e){super(),this.currentSequenceNumber=e}}class Sc{constructor(e){this.persistence=e,this.Ri=new Ec,this.Ai=null}static Vi(e){return new Sc(e)}get di(){if(this.Ai)return this.Ai;throw W(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.di.delete(i.toString()),R.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.di.add(i.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),R.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((s=>this.di.add(s.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((r=>this.di.add(r.toString())))})).next((()=>i.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.di,(i=>{const s=H.fromPath(i);return this.mi(e,s).next((r=>{r||t.removeEntry(s,q.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((i=>{i?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return R.or([()=>R.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Ur{constructor(e,t){this.persistence=e,this.fi=new jn((i=>K_(i.path)),((i,s)=>i.isEqual(s))),this.garbageCollector=uT(this,t)}static Vi(e,t){return new Ur(e,t)}Ti(){}Ii(e){return R.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((s=>i+s))))}pr(e){let t=0;return this.mr(e,(i=>{t++})).next((()=>t))}mr(e,t){return R.forEach(this.fi,((i,s)=>this.wr(e,i,s).next((r=>r?R.resolve():t(s)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.ni(e,(o=>this.wr(e,o,t).next((c=>{c||(i++,r.removeEntry(o,q.min()))})))).next((()=>r.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),R.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),R.resolve()}removeReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),R.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),R.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=yr(e.data.value)),t}wr(e,t,i){return R.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return R.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.Ts=i,this.Is=s}static Es(e,t){let i=ne(),s=ne();for(const r of t.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Ac(e,t.fromCache,i,s)}}/**
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
 */class TT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return pg()?8:W_(Oe())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,s){const r={result:null};return this.gs(e,t).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ps(e,t,s,i).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new TT;return this.ys(e,t,o).next((c=>{if(r.result=c,this.As)return this.ws(e,t,o,c.size)}))})).next((()=>r.result))}ws(e,t,i,s){return i.documentReadCount<this.Vs?(Kn()<=Y.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Qn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),R.resolve()):(Kn()<=Y.DEBUG&&M("QueryEngine","Query:",Qn(t),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.ds*s?(Kn()<=Y.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Qn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mt(t))):R.resolve())}gs(e,t){if(ed(t))return R.resolve(null);let i=mt(t);return this.indexManager.getIndexType(e,i).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Da(t,null,"F"),i=mt(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((r=>{const o=ne(...r);return this.fs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,i).next((u=>{const d=this.bs(t,c);return this.Ss(t,d,o,u.readTime)?this.gs(e,Da(t,null,"F")):this.Ds(e,d,t,u)}))))})))))}ps(e,t,i,s){return ed(t)||s.isEqual(q.min())?R.resolve(null):this.fs.getDocuments(e,i).next((r=>{const o=this.bs(t,r);return this.Ss(t,o,i,s)?R.resolve(null):(Kn()<=Y.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Qn(t)),this.Ds(e,o,t,j_(s,fs)).next((c=>c)))}))}bs(e,t){let i=new _e(Of(e));return t.forEach(((s,r)=>{ao(e,r)&&(i=i.add(r))})),i}Ss(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ys(e,t,i){return Kn()<=Y.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Qn(t)),this.fs.getDocumentsMatchingQuery(e,t,rn.min(),i)}Ds(e,t,i,s){return this.fs.getDocumentsMatchingQuery(e,i,s).next((r=>(t.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc="LocalStore",ET=3e8;class ST{constructor(e,t,i,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new pe(X),this.Fs=new jn((r=>vc(r)),wc),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(i)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fT(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function AT(n,e,t,i){return new ST(n,e,t,i)}async function ep(n,e){const t=ee(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next((r=>(s=r,t.Os(e),t.mutationQueue.getAllMutationBatches(i)))).next((r=>{const o=[],c=[];let u=ne();for(const d of s){o.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}for(const d of r){c.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(i,u).next((d=>({Ns:d,removedBatchIds:o,addedBatchIds:c})))}))}))}function tp(n){const e=ee(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function kT(n,e){const t=ee(n),i=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const c=[];e.targetChanges.forEach(((m,y)=>{const w=s.get(y);if(!w)return;c.push(t.li.removeMatchingKeys(r,m.removedDocuments,y).next((()=>t.li.addMatchingKeys(r,m.addedDocuments,y))));let C=w.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(y)!==null?C=C.withResumeToken(Ce.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):m.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(m.resumeToken,i)),s=s.insert(y,C),(function(O,L,z){return O.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=ET?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0})(w,C,m)&&c.push(t.li.updateTargetData(r,C))}));let u=ln(),d=ne();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(r,m))})),c.push(CT(r,o,e.documentUpdates).next((m=>{u=m.Bs,d=m.Ls}))),!i.isEqual(q.min())){const m=t.li.getLastRemoteSnapshotVersion(r).next((y=>t.li.setTargetsMetadata(r,r.currentSequenceNumber,i)));c.push(m)}return R.waitFor(c).next((()=>o.apply(r))).next((()=>t.localDocuments.getLocalViewOfDocuments(r,u,d))).next((()=>u))})).then((r=>(t.vs=s,r)))}function CT(n,e,t){let i=ne(),s=ne();return t.forEach((r=>i=i.add(r))),e.getEntries(n,i).next((r=>{let o=ln();return t.forEach(((c,u)=>{const d=r.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(q.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):M(kc,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)})),{Bs:o,Ls:s}}))}function RT(n,e){const t=ee(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let s;return t.li.getTargetData(i,e).next((r=>r?(s=r,R.resolve(s)):t.li.allocateTargetId(i).next((o=>(s=new Qt(e,o,"TargetPurposeListen",i.currentSequenceNumber),t.li.addTargetData(i,s).next((()=>s)))))))})).then((i=>{const s=t.vs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(i.targetId,i),t.Fs.set(e,i.targetId)),i}))}async function Va(n,e,t){const i=ee(n),s=i.vs.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,(o=>i.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!bi(o))throw o;M(kc,`Failed to update sequence numbers for target ${e}: ${o}`)}i.vs=i.vs.remove(e),i.Fs.delete(s.target)}function fd(n,e,t){const i=ee(n);let s=q.min(),r=ne();return i.persistence.runTransaction("Execute query","readwrite",(o=>(function(u,d,m){const y=ee(u),w=y.Fs.get(m);return w!==void 0?R.resolve(y.vs.get(w)):y.li.getTargetData(d,m)})(i,o,mt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(o,c.targetId).next((u=>{r=u}))})).next((()=>i.Cs.getDocumentsMatchingQuery(o,e,t?s:q.min(),t?r:ne()))).next((c=>(PT(i,wb(e),c),{documents:c,ks:r})))))}function PT(n,e,t){let i=n.Ms.get(e)||q.min();t.forEach(((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)})),n.Ms.set(e,i)}class pd{constructor(){this.activeTargetIds=Sb()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xT{constructor(){this.vo=new pd,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,i){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new pd,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md="ConnectivityMonitor";class gd{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){M(md,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){M(md,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let er=null;function Ua(){return er===null?er=(function(){return 268435456+Math.round(2147483648*Math.random())})():er++,"0x"+er.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia="RestConnection",DT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class NT{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${i}/databases/${s}`,this.$o=this.databaseId.database===Nr?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(e,t,i,s,r){const o=Ua(),c=this.Qo(e,t.toUriEncodedString());M(ia,`Sending RPC '${e}' ${o}:`,c,i);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,r);const{host:d}=new URL(c),m=dn(d);return this.zo(e,c,u,i,m).then((y=>(M(ia,`Received RPC '${e}' ${o}: `,y),y)),(y=>{throw On(ia,`RPC '${e}' ${o} failed with error: `,y,"url: ",c,"request:",i),y}))}jo(e,t,i,s,r,o){return this.Wo(e,t,i,s,r)}Go(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+_i})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,r)=>e[r]=s)),i&&i.headers.forEach(((s,r)=>e[r]=s))}Qo(e,t){const i=DT[e];let s=`${this.qo}/v1/${t}:${i}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe="WebChannelConnection",ji=(n,e,t)=>{n.listen(e,(i=>{try{t(i)}catch(s){setTimeout((()=>{throw s}),0)}}))};class ii extends NT{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!ii.c_){const e=yf();ji(e,gf.STAT_EVENT,(t=>{t.stat===Sa.PROXY?M(xe,"STAT_EVENT: detected buffering proxy"):t.stat===Sa.NOPROXY&&M(xe,"STAT_EVENT: detected no buffering proxy")})),ii.c_=!0}}zo(e,t,i,s,r){const o=Ua();return new Promise(((c,u)=>{const d=new pf;d.setWithCredentials(!0),d.listenOnce(mf.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case mr.NO_ERROR:const y=d.getResponseJson();M(xe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(y)),c(y);break;case mr.TIMEOUT:M(xe,`RPC '${e}' ${o} timed out`),u(new F(N.DEADLINE_EXCEEDED,"Request time out"));break;case mr.HTTP_ERROR:const w=d.getStatus();if(M(xe,`RPC '${e}' ${o} failed with status:`,w,"response text:",d.getResponseText()),w>0){let C=d.getResponseJson();Array.isArray(C)&&(C=C[0]);const x=C==null?void 0:C.error;if(x&&x.status&&x.message){const O=(function(z){const G=z.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(G)>=0?G:N.UNKNOWN})(x.status);u(new F(O,x.message))}else u(new F(N.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new F(N.UNAVAILABLE,"Connection failed."));break;default:W(9055,{l_:e,streamId:o,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{M(xe,`RPC '${e}' ${o} completed.`)}}));const m=JSON.stringify(s);M(xe,`RPC '${e}' ${o} sending request:`,s),d.send(t,"POST",m,i,15)}))}T_(e,t,i){const s=Ua(),r=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,i),c.encodeInitMessageHeaders=!0;const d=r.join("");M(xe,`Creating RPC '${e}' stream ${s}: ${d}`,c);const m=o.createWebChannel(d,c);this.I_(m);let y=!1,w=!1;const C=new OT({Ho:x=>{w?M(xe,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(y||(M(xe,`Opening RPC '${e}' stream ${s} transport.`),m.open(),y=!0),M(xe,`RPC '${e}' stream ${s} sending:`,x),m.send(x))},Jo:()=>m.close()});return ji(m,Ki.EventType.OPEN,(()=>{w||(M(xe,`RPC '${e}' stream ${s} transport opened.`),C.i_())})),ji(m,Ki.EventType.CLOSE,(()=>{w||(w=!0,M(xe,`RPC '${e}' stream ${s} transport closed`),C.o_(),this.E_(m))})),ji(m,Ki.EventType.ERROR,(x=>{w||(w=!0,On(xe,`RPC '${e}' stream ${s} transport errored. Name:`,x.name,"Message:",x.message),C.o_(new F(N.UNAVAILABLE,"The operation could not be completed")))})),ji(m,Ki.EventType.MESSAGE,(x=>{var O;if(!w){const L=x.data[0];ae(!!L,16349);const z=L,G=(z==null?void 0:z.error)||((O=z[0])==null?void 0:O.error);if(G){M(xe,`RPC '${e}' stream ${s} received error:`,G);const $=G.status;let j=(function(T){const v=me[T];if(v!==void 0)return Hf(v)})($),J=G.message;$==="NOT_FOUND"&&J.includes("database")&&J.includes("does not exist")&&J.includes(this.databaseId.database)&&On(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),j===void 0&&(j=N.INTERNAL,J="Unknown error status: "+$+" with message "+G.message),w=!0,C.o_(new F(j,J)),m.close()}else M(xe,`RPC '${e}' stream ${s} received:`,L),C.__(L)}})),ii.u_(),setTimeout((()=>{C.s_()}),0),C}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,i){super.Go(e,t,i),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return vf()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(n){return new ii(n)}function sa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(n){return new Hb(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ii.c_=!1;class ip{constructor(e,t,i=1e3,s=1.5,r=6e4){this.Ci=e,this.timerId=t,this.R_=i,this.A_=s,this.V_=r,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-i);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd="PersistentStream";class $T{constructor(e,t,i,s,r,o,c,u){this.Ci=e,this.b_=i,this.S_=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ip(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(Rt(t.toString()),Rt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,s])=>{this.D_===t&&this.G_(i,s)}),(i=>{e((()=>{const s=new F(N.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(s)}))}))}G_(e,t){const i=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.Yo((()=>{i((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{i((()=>this.z_(s)))})),this.stream.onMessage((s=>{i((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return M(yd,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(M(yd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class VT extends $T{constructor(e,t,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Kb(this.serializer,e),i=(function(r){if(!("targetChange"in r))return q.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?q.min():o.readTime?ni(o.readTime):q.min()})(e);return this.listener.J_(t,i)}Z_(e){const t={};t.database=ld(this.serializer),t.addTarget=(function(r,o){let c;const u=o.target;if(c=La(u)?{documents:Qb(r,u)}:{query:Jb(r,u).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=qb(r,o.resumeToken);const d=Ma(r,o.expectedCount);d!==null&&(c.expectedCount=d)}else if(o.snapshotVersion.compareTo(q.min())>0){c.readTime=zb(r,o.snapshotVersion.toTimestamp());const d=Ma(r,o.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,e);const i=Xb(this.serializer,e);i&&(t.labels=i),this.K_(t)}X_(e){const t={};t.database=ld(this.serializer),t.removeTarget=e,this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{}class FT extends UT{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new F(N.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Wo(e,$a(t,i),s,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new F(N.UNKNOWN,r.toString())}))}jo(e,t,i,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.jo(e,$a(t,i),s,o,c,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new F(N.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function jT(n,e,t,i){return new FT(n,e,t,i)}class BT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Rt(t),this.aa=!1):M("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi="RemoteStore";class HT{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=r,this.Aa.Mo((o=>{i.enqueueAndForget((async()=>{Ps(this)&&(M(hi,"Restarting streams for network reachability change."),await(async function(u){const d=ee(u);d.Ea.add(4),await Rs(d),d.Va.set("Unknown"),d.Ea.delete(4),await ho(d)})(this))}))})),this.Va=new BT(i,s)}}async function ho(n){if(Ps(n))for(const e of n.Ra)await e(!0)}async function Rs(n){for(const e of n.Ra)await e(!1)}function sp(n,e){const t=ee(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),xc(t)?Pc(t):Ti(t).O_()&&Rc(t,e))}function Cc(n,e){const t=ee(n),i=Ti(t);t.Ia.delete(e),i.O_()&&rp(t,e),t.Ia.size===0&&(i.O_()?i.L_():Ps(t)&&t.Va.set("Unknown"))}function Rc(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ti(n).Z_(e)}function rp(n,e){n.da.$e(e),Ti(n).X_(e)}function Pc(n){n.da=new Ub({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Ti(n).start(),n.Va.ua()}function xc(n){return Ps(n)&&!Ti(n).x_()&&n.Ia.size>0}function Ps(n){return ee(n).Ea.size===0}function op(n){n.da=void 0}async function zT(n){n.Va.set("Online")}async function qT(n){n.Ia.forEach(((e,t)=>{Rc(n,e)}))}async function WT(n,e){op(n),xc(n)?(n.Va.ha(e),Pc(n)):n.Va.set("Unknown")}async function GT(n,e,t){if(n.Va.set("Online"),e instanceof qf&&e.state===2&&e.cause)try{await(async function(s,r){const o=r.cause;for(const c of r.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.da.removeTarget(c))})(n,e)}catch(i){M(hi,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await vd(n,i)}else if(e instanceof wr?n.da.Xe(e):e instanceof zf?n.da.st(e):n.da.tt(e),!t.isEqual(q.min()))try{const i=await tp(n.localStore);t.compareTo(i)>=0&&await(function(r,o){const c=r.da.Tt(o);return c.targetChanges.forEach(((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const m=r.Ia.get(d);m&&r.Ia.set(d,m.withResumeToken(u.resumeToken,o))}})),c.targetMismatches.forEach(((u,d)=>{const m=r.Ia.get(u);if(!m)return;r.Ia.set(u,m.withResumeToken(Ce.EMPTY_BYTE_STRING,m.snapshotVersion)),rp(r,u);const y=new Qt(m.target,u,d,m.sequenceNumber);Rc(r,y)})),r.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(i){M(hi,"Failed to raise snapshot:",i),await vd(n,i)}}async function vd(n,e,t){if(!bi(e))throw e;n.Ea.add(1),await Rs(n),n.Va.set("Offline"),t||(t=()=>tp(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{M(hi,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await ho(n)}))}async function wd(n,e){const t=ee(n);t.asyncQueue.verifyOperationInProgress(),M(hi,"RemoteStore received new credentials");const i=Ps(t);t.Ea.add(3),await Rs(t),i&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await ho(t)}async function KT(n,e){const t=ee(n);e?(t.Ea.delete(2),await ho(t)):e||(t.Ea.add(2),await Rs(t),t.Va.set("Unknown"))}function Ti(n){return n.ma||(n.ma=(function(t,i,s){const r=ee(t);return r.sa(),new VT(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Zo:zT.bind(null,n),Yo:qT.bind(null,n),t_:WT.bind(null,n),J_:GT.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),xc(n)?Pc(n):n.Va.set("Unknown")):(await n.ma.stop(),op(n))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new ti,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,r){const o=Date.now()+i,c=new Lc(e,t,o,s,r);return c.start(i),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ap(n,e){if(Rt("AsyncQueue",`${e}: ${n}`),bi(n))return new F(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{static emptySet(e){return new si(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||H.comparator(t.key,i.key):(t,i)=>H.comparator(t.key,i.key),this.keyedMap=Qi(),this.sortedSet=new pe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof si)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new si;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(){this.ga=new pe(H.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):W(63341,{Vt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class fi{constructor(e,t,i,s,r,o,c,u,d){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,i,s,r){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new fi(e,t,si.emptySet(t),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&oo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class JT{constructor(){this.queries=bd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const s=ee(t),r=s.queries;s.queries=bd(),r.forEach(((o,c)=>{for(const u of c.ba)u.onError(i)}))})(this,new F(N.ABORTED,"Firestore shutting down"))}}function bd(){return new jn((n=>Nf(n)),oo)}async function YT(n,e){const t=ee(n);let i=3;const s=e.query;let r=t.queries.get(s);r?!r.Sa()&&e.Da()&&(i=2):(r=new QT,i=e.Da()?0:1);try{switch(i){case 0:r.wa=await t.onListen(s,!0);break;case 1:r.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=ap(o,`Initialization of query '${Qn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,r),r.ba.push(e),e.va(t.onlineState),r.wa&&e.Fa(r.wa)&&Dc(t)}async function XT(n,e){const t=ee(n),i=e.query;let s=3;const r=t.queries.get(i);if(r){const o=r.ba.indexOf(e);o>=0&&(r.ba.splice(o,1),r.ba.length===0?s=e.Da()?0:1:!r.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function ZT(n,e){const t=ee(n);let i=!1;for(const s of e){const r=s.query,o=t.queries.get(r);if(o){for(const c of o.ba)c.Fa(s)&&(i=!0);o.wa=s}}i&&Dc(t)}function eI(n,e,t){const i=ee(n),s=i.queries.get(e);if(s)for(const r of s.ba)r.onError(t);i.queries.delete(e)}function Dc(n){n.Ca.forEach((e=>{e.next()}))}var Fa,Td;(Td=Fa||(Fa={})).Ma="default",Td.Cache="cache";class tI{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new fi(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.Ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=fi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Fa.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e){this.key=e}}class lp{constructor(e){this.key=e}}class nI{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ne(),this.mutatedKeys=ne(),this.eu=Of(e),this.tu=new si(this.eu)}get nu(){return this.Za}ru(e,t){const i=t?t.iu:new _d,s=t?t.tu:this.tu;let r=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((m,y)=>{const w=s.get(m),C=ao(this.query,y)?y:null,x=!!w&&this.mutatedKeys.has(w.key),O=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let L=!1;w&&C?w.data.isEqual(C.data)?x!==O&&(i.track({type:3,doc:C}),L=!0):this.su(w,C)||(i.track({type:2,doc:C}),L=!0,(u&&this.eu(C,u)>0||d&&this.eu(C,d)<0)&&(c=!0)):!w&&C?(i.track({type:0,doc:C}),L=!0):w&&!C&&(i.track({type:1,doc:w}),L=!0,(u||d)&&(c=!0)),L&&(C?(o=o.add(C),r=O?r.add(m):r.delete(m)):(o=o.delete(m),r=r.delete(m)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const m=this.query.limitType==="F"?o.last():o.first();o=o.delete(m.key),r=r.delete(m.key),i.track({type:1,doc:m})}return{tu:o,iu:i,Ss:c,mutatedKeys:r}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,s){const r=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((m,y)=>(function(C,x){const O=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W(20277,{Vt:L})}};return O(C)-O(x)})(m.type,y.type)||this.eu(m.doc,y.doc))),this.ou(i),s=s??!1;const c=t&&!s?this._u():[],u=this.Ya.size===0&&this.current&&!s?1:0,d=u!==this.Xa;return this.Xa=u,o.length!==0||d?{snapshot:new fi(this.query,e.tu,r,o,e.mutatedKeys,u===0,d,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new _d,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ne(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Ya=this.Ya.add(i.key))}));const t=[];return e.forEach((i=>{this.Ya.has(i)||t.push(new lp(i))})),this.Ya.forEach((i=>{e.has(i)||t.push(new cp(i))})),t}cu(e){this.Za=e.ks,this.Ya=ne();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return fi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Nc="SyncEngine";class iI{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class sI{constructor(e){this.key=e,this.hu=!1}}class rI{constructor(e,t,i,s,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new jn((c=>Nf(c)),oo),this.Iu=new Map,this.Eu=new Set,this.Ru=new pe(H.comparator),this.Au=new Map,this.Vu=new Ec,this.du={},this.mu=new Map,this.fu=di.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function oI(n,e,t=!0){const i=pp(n);let s;const r=i.Tu.get(e);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.lu()):s=await up(i,e,t,!0),s}async function aI(n,e){const t=pp(n);await up(t,e,!0,!1)}async function up(n,e,t,i){const s=await RT(n.localStore,mt(e)),r=s.targetId,o=n.sharedClientState.addLocalQueryTarget(r,t);let c;return i&&(c=await cI(n,e,r,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&sp(n.remoteStore,s),c}async function cI(n,e,t,i,s){n.pu=(y,w,C)=>(async function(O,L,z,G){let $=L.view.ru(z);$.Ss&&($=await fd(O.localStore,L.query,!1).then((({documents:T})=>L.view.ru(T,$))));const j=G&&G.targetChanges.get(L.targetId),J=G&&G.targetMismatches.get(L.targetId)!=null,V=L.view.applyChanges($,O.isPrimaryClient,j,J);return Ed(O,L.targetId,V.au),V.snapshot})(n,y,w,C);const r=await fd(n.localStore,e,!0),o=new nI(e,r.ks),c=o.ru(r.documents),u=Cs.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),d=o.applyChanges(c,n.isPrimaryClient,u);Ed(n,t,d.au);const m=new iI(e,t,o);return n.Tu.set(e,m),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function lI(n,e,t){const i=ee(n),s=i.Tu.get(e),r=i.Iu.get(s.targetId);if(r.length>1)return i.Iu.set(s.targetId,r.filter((o=>!oo(o,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await Va(i.localStore,s.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(s.targetId),t&&Cc(i.remoteStore,s.targetId),ja(i,s.targetId)})).catch(to)):(ja(i,s.targetId),await Va(i.localStore,s.targetId,!0))}async function uI(n,e){const t=ee(n),i=t.Tu.get(e),s=t.Iu.get(i.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Cc(t.remoteStore,i.targetId))}async function dp(n,e){const t=ee(n);try{const i=await kT(t.localStore,e);e.targetChanges.forEach(((s,r)=>{const o=t.Au.get(r);o&&(ae(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?ae(o.hu,14607):s.removedDocuments.size>0&&(ae(o.hu,42227),o.hu=!1))})),await fp(t,i,e)}catch(i){await to(i)}}function Id(n,e,t){const i=ee(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.Tu.forEach(((r,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const u=ee(o);u.onlineState=c;let d=!1;u.queries.forEach(((m,y)=>{for(const w of y.ba)w.va(c)&&(d=!0)})),d&&Dc(u)})(i.eventManager,e),s.length&&i.Pu.J_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function dI(n,e,t){const i=ee(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.Au.get(e),r=s&&s.key;if(r){let o=new pe(H.comparator);o=o.insert(r,De.newNoDocument(r,q.min()));const c=ne().add(r),u=new uo(q.min(),new Map,new pe(X),o,c);await dp(i,u),i.Ru=i.Ru.remove(r),i.Au.delete(e),Oc(i)}else await Va(i.localStore,e,!1).then((()=>ja(i,e,t))).catch(to)}function ja(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Iu.get(e))n.Tu.delete(i),t&&n.Pu.yu(i,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((i=>{n.Vu.containsKey(i)||hp(n,i)}))}function hp(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(Cc(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Oc(n))}function Ed(n,e,t){for(const i of t)i instanceof cp?(n.Vu.addReference(i.key,e),hI(n,i)):i instanceof lp?(M(Nc,"Document no longer in limbo: "+i.key),n.Vu.removeReference(i.key,e),n.Vu.containsKey(i.key)||hp(n,i.key)):W(19791,{wu:i})}function hI(n,e){const t=e.key,i=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(i)||(M(Nc,"New document in limbo: "+t),n.Eu.add(i),Oc(n))}function Oc(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new H(oe.fromString(e)),i=n.fu.next();n.Au.set(i,new sI(t)),n.Ru=n.Ru.insert(t,i),sp(n.remoteStore,new Qt(mt(_c(t.path)),i,"TargetPurposeLimboResolution",no.ce))}}async function fp(n,e,t){const i=ee(n),s=[],r=[],o=[];i.Tu.isEmpty()||(i.Tu.forEach(((c,u)=>{o.push(i.pu(u,e,t).then((d=>{var m;if((d||t)&&i.isPrimaryClient){const y=d?!d.fromCache:(m=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:m.current;i.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(d){s.push(d);const y=Ac.Es(u.targetId,d);r.push(y)}})))})),await Promise.all(o),i.Pu.J_(s),await(async function(u,d){const m=ee(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(y=>R.forEach(d,(w=>R.forEach(w.Ts,(C=>m.persistence.referenceDelegate.addReference(y,w.targetId,C))).next((()=>R.forEach(w.Is,(C=>m.persistence.referenceDelegate.removeReference(y,w.targetId,C)))))))))}catch(y){if(!bi(y))throw y;M(kc,"Failed to update sequence numbers: "+y)}for(const y of d){const w=y.targetId;if(!y.fromCache){const C=m.vs.get(w),x=C.snapshotVersion,O=C.withLastLimboFreeSnapshotVersion(x);m.vs=m.vs.insert(w,O)}}})(i.localStore,r))}async function fI(n,e){const t=ee(n);if(!t.currentUser.isEqual(e)){M(Nc,"User change. New user:",e.toKey());const i=await ep(t.localStore,e);t.currentUser=e,(function(r,o){r.mu.forEach((c=>{c.forEach((u=>{u.reject(new F(N.CANCELLED,o))}))})),r.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await fp(t,i.Ns)}}function pI(n,e){const t=ee(n),i=t.Au.get(e);if(i&&i.hu)return ne().add(i.key);{let s=ne();const r=t.Iu.get(e);if(!r)return s;for(const o of r){const c=t.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function pp(n){const e=ee(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=dp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dI.bind(null,e),e.Pu.J_=ZT.bind(null,e.eventManager),e.Pu.yu=eI.bind(null,e.eventManager),e}class Fr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=np(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return AT(this.persistence,new IT,e.initialUser,this.serializer)}Cu(e){return new Zf(Sc.Vi,this.serializer)}Du(e){return new xT}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fr.provider={build:()=>new Fr};class mI extends Fr{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ae(this.persistence.referenceDelegate instanceof Ur,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new cT(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?He.withCacheSize(this.cacheSizeBytes):He.DEFAULT;return new Zf((i=>Ur.Vi(i,t)),this.serializer)}}class Ba{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Id(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=fI.bind(null,this.syncEngine),await KT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new JT})()}createDatastore(e){const t=np(e.databaseInfo.databaseId),i=MT(e.databaseInfo);return jT(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,s,r,o,c){return new HT(i,s,r,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>Id(this.syncEngine,t,0)),(function(){return gd.v()?new gd:new LT})())}createSyncEngine(e,t){return(function(s,r,o,c,u,d,m){const y=new rI(s,r,o,c,u,d);return m&&(y.gu=!0),y})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const r=ee(s);M(hi,"RemoteStore shutting down."),r.Ea.add(5),await Rs(r),r.Aa.shutdown(),r.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Ba.provider={build:()=>new Ba};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class gI{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Rt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un="FirestoreClient";class yI{constructor(e,t,i,s,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this._databaseInfo=s,this.user=Le.UNAUTHENTICATED,this.clientId=bf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,(async o=>{M(un,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(i,(o=>(M(un,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ti;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=ap(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function ra(n,e){n.asyncQueue.verifyOperationInProgress(),M(un,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async s=>{i.isEqual(s)||(await ep(e.localStore,s),i=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Sd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await vI(n);M(un,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>wd(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,s)=>wd(e.remoteStore,s))),n._onlineComponents=e}async function vI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M(un,"Using user provided OfflineComponentProvider");try{await ra(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;On("Error using user provided cache. Falling back to memory cache: "+t),await ra(n,new Fr)}}else M(un,"Using default OfflineComponentProvider"),await ra(n,new mI(void 0));return n._offlineComponents}async function wI(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M(un,"Using user provided OnlineComponentProvider"),await Sd(n,n._uninitializedComponentsProvider._online)):(M(un,"Using default OnlineComponentProvider"),await Sd(n,new Ba))),n._onlineComponents}async function Ad(n){const e=await wI(n),t=e.eventManager;return t.onListen=oI.bind(null,e.syncEngine),t.onUnlisten=lI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=aI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=uI.bind(null,e.syncEngine),t}function _I(n,e,t,i){const s=new gI(i),r=new tI(e,s,t);return n.asyncQueue.enqueueAndForget((async()=>YT(await Ad(n),r))),()=>{s.Nu(),n.asyncQueue.enqueueAndForget((async()=>XT(await Ad(n),r)))}}/**
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
 */function mp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI="ComponentProvider",kd=new Map;function TI(n,e,t,i,s){return new X_(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,mp(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp="firestore.googleapis.com",Cd=!0;class Rd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new F(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=gp,this.ssl=Cd}else this.host=e.host,this.ssl=e.ssl??Cd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Xf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<oT)throw new F(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}V_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mp(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new F(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new F(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new F(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Mc{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Rd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new F(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Rd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new k_;switch(i.type){case"firstParty":return new x_(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new F(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=kd.get(t);i&&(M(bI,"Removing Datastore"),kd.delete(t),i.terminate())})(this),Promise.resolve()}}function II(n,e,t,i={}){var d;n=gr(n,Mc);const s=dn(e),r=n._getSettings(),o={...r,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(Qa(`https://${c}`),Ja("Firestore",!0)),r.host!==gp&&r.host!==c&&On("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...r,host:c,ssl:s,emulatorOptions:i};if(!Pn(u,o)&&(n._setSettings(u),i.mockUserToken)){let m,y;if(typeof i.mockUserToken=="string")m=i.mockUserToken,y=Le.MOCK_USER;else{m=fh(i.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const w=i.mockUserToken.sub||i.mockUserToken.user_id;if(!w)throw new F(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new Le(w)}n._authCredentials=new C_(new _f(m,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new fo(this.firestore,e,this._query)}}class Ge{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ri(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ge(this.firestore,e,this._key)}toJSON(){return{type:Ge._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(As(t,Ge._jsonSchema))return new Ge(e,i||null,new H(oe.fromString(t.referencePath)))}}Ge._jsonSchemaVersion="firestore/documentReference/1.0",Ge._jsonSchema={type:ye("string",Ge._jsonSchemaVersion),referencePath:ye("string")};class ri extends fo{constructor(e,t,i){super(e,t,_c(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ge(this.firestore,null,new H(e))}withConverter(e){return new ri(this.firestore,e,this._path)}}function _n(n,e,...t){if(n=Re(n),$_("collection","path",e),n instanceof Mc){const i=oe.fromString(e,...t);return ju(i),new ri(n,null,i)}{if(!(n instanceof Ge||n instanceof ri))throw new F(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(oe.fromString(e,...t));return ju(i),new ri(n.firestore,null,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd="AsyncQueue";class xd{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ip(this,"async_queue_retry"),this._c=()=>{const i=sa();i&&M(Pd,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=sa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=sa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new ti;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!bi(e))throw e;M(Pd,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,Rt("INTERNAL UNHANDLED ERROR: ",Ld(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Lc.createAndSchedule(this,e,t,i,(r=>this.hc(r)));return this.tc.push(s),s}uc(){this.nc&&W(47125,{Pc:Ld(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Ld(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Ha extends Mc{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new xd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new xd(e),this._firestoreClient=void 0,await e}}}function EI(n,e){const t=typeof n=="object"?n:Za(),i=typeof n=="string"?n:Nr,s=Wr(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=uh("firestore");r&&II(s,...r)}return s}function SI(n){if(n._terminated)throw new F(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||AI(n),n._firestoreClient}function AI(n){var i,s,r,o;const e=n._freezeSettings(),t=TI(n._databaseId,((i=n._app)==null?void 0:i.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(r=e.localCache)!=null&&r._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new yI(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(u){const d=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(d),_online:d}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ct(Ce.fromBase64String(e))}catch(t){throw new F(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ct(Ce.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ct._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(As(e,ct._jsonSchema))return ct.fromBase64String(e.bytes)}}ct._jsonSchemaVersion="firestore/bytes/1.0",ct._jsonSchema={type:ye("string",ct._jsonSchemaVersion),bytes:ye("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new F(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new F(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new F(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Zt._jsonSchemaVersion}}static fromJSON(e){if(As(e,Zt._jsonSchema))return new Zt(e.latitude,e.longitude)}}Zt._jsonSchemaVersion="firestore/geoPoint/1.0",Zt._jsonSchema={type:ye("string",Zt._jsonSchemaVersion),latitude:ye("number"),longitude:ye("number")};/**
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
 */class en{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0})(this._values,e._values)}toJSON(){return{type:en._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(As(e,en._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new en(e.vectorValues);throw new F(N.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}en._jsonSchemaVersion="firestore/vectorValue/1.0",en._jsonSchema={type:ye("string",en._jsonSchemaVersion),vectorValues:ye("object")};function vp(n,e,t){if((e=Re(e))instanceof yp)return e._internalPath;if(typeof e=="string")return CI(n,e);throw za("Field path arguments must be of type string or ",n)}const kI=new RegExp("[~\\*/\\[\\]]");function CI(n,e,t){if(e.search(kI)>=0)throw za(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new yp(...e.split("."))._internalPath}catch{throw za(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function za(n,e,t,i,s){let r=`Function ${e}() called with invalid data`;r+=". ";let o="";return new F(N.INVALID_ARGUMENT,r+n+o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{convertValue(e,t="none"){switch(cn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(an(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw W(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return ks(e,((s,r)=>{i[s]=this.convertValue(r,t)})),i}convertVectorValue(e){var i,s,r;const t=(r=(s=(i=e.fields)==null?void 0:i[Ca].arrayValue)==null?void 0:s.values)==null?void 0:r.map((o=>fe(o.doubleValue)));return new en(t)}convertGeoPoint(e){return new Zt(fe(e.latitude),fe(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=so(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(ps(e));default:return null}}convertTimestamp(e){const t=on(e);return new ge(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=oe.fromString(e);ae(Yf(i),9688,{name:e});const s=new ms(i.get(1),i.get(3)),r=new H(i.popFirst(5));return s.isEqual(t)||Rt(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */class wp extends RI{constructor(e){super(),this.firestore=e}convertBytes(e){return new ct(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ge(this.firestore,null,t)}}const Dd="@firebase/firestore",Nd="4.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new PI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(vp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class PI extends _p{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new F(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Yi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Cn extends _p{constructor(e,t,i,s,r,o){super(e,t,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new _r(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(vp("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new F(N.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Cn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Cn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Cn._jsonSchema={type:ye("string",Cn._jsonSchemaVersion),bundleSource:ye("string","DocumentSnapshot"),bundleName:ye("string"),bundle:ye("string")};class _r extends Cn{data(e={}){return super.data(e)}}class oi{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Yi(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new _r(this._firestore,this._userDataWriter,i.key,i,new Yi(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new F(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const u=new _r(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Yi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>r||c.type!==3)).map((c=>{const u=new _r(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Yi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return c.type!==0&&(d=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),m=o.indexOf(c.doc.key)),{type:LI(c.type),doc:u,oldIndex:d,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new F(N.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=oi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=bf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],s=[];return this.docs.forEach((r=>{r._document!==null&&(t.push(r._document),i.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),s.push(r.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function LI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W(61501,{type:n})}}/**
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
 */oi._jsonSchemaVersion="firestore/querySnapshot/1.0",oi._jsonSchema={type:ye("string",oi._jsonSchemaVersion),bundleSource:ye("string","QuerySnapshot"),bundleName:ye("string"),bundle:ye("string")};function bn(n,...e){var d,m,y;n=Re(n);let t={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||Od(e[i])||(t=e[i++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Od(e[i])){const w=e[i];e[i]=(d=w.next)==null?void 0:d.bind(w),e[i+1]=(m=w.error)==null?void 0:m.bind(w),e[i+2]=(y=w.complete)==null?void 0:y.bind(w)}let r,o,c;if(n instanceof Ge)o=gr(n.firestore,Ha),c=_c(n._key.path),r={next:w=>{e[i]&&e[i](DI(o,n,w))},error:e[i+1],complete:e[i+2]};else{const w=gr(n,fo);o=gr(w.firestore,Ha),c=w._query;const C=new wp(o);r={next:x=>{e[i]&&e[i](new oi(o,C,w,x))},error:e[i+1],complete:e[i+2]},xI(n._query)}const u=SI(o);return _I(u,c,s,r)}function DI(n,e,t){const i=t.docs.get(e._key),s=new wp(n);return new Cn(n,s,e._key,i,new Yi(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){A_(Un),xn(new nn("firestore",((i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),c=new Ha(new R_(i.getProvider("auth-internal")),new L_(o,i.getProvider("app-check-internal")),Z_(o,s),o);return r={useFetchStreams:t,...r},c._setSettings(r),c}),"PUBLIC").setMultipleInstances(!0)),ht(Dd,Nd,e),ht(Dd,Nd,"esm2020")})();const Tn=EI(uc);let bt=[];function NI(n){if(bp(),!n)return;const e=t=>t.docs.map(i=>({id:i.id,...i.data()}));bt.push(bn(_n(Tn,`households/${n}/inventory`),t=>{var i,s;h.inv=e(t),he("synced"),(i=U.renderAll)==null||i.call(U),(s=U.renderSum)==null||s.call(U)},t=>{console.warn("realtime inv error:",t),he("error")})),bt.push(bn(_n(Tn,`households/${n}/shopping`),t=>{var i,s;h.shop=e(t),he("synced"),(i=U.renderShop)==null||i.call(U),(s=U.renderSum)==null||s.call(U)},t=>{console.warn("realtime shop error:",t),he("error")})),bt.push(bn(_n(Tn,`households/${n}/recipes`),t=>{var i,s;h.recs=e(t),he("synced"),(i=U.renderRecs)==null||i.call(U),(s=U.renderSum)==null||s.call(U)},t=>{console.warn("realtime recs error:",t),he("error")})),bt.push(bn(_n(Tn,`households/${n}/mealplan`),t=>{const i={};e(t).forEach(s=>{s.date&&s.meal&&(i[s.date]=s.meal)}),h.mp=i,he("synced")},t=>{console.warn("realtime mp error:",t)})),bt.push(bn(_n(Tn,`households/${n}/settings`),t=>{const i=e(t).find(s=>s.id==="config");i&&(h.cfg={...Er,...i})},t=>{console.warn("realtime settings error:",t)})),bt.push(bn(_n(Tn,`households/${n}/cooklog`),t=>{h.cookLog=e(t).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},t=>{console.warn("realtime cooklog error:",t)})),bt.push(bn(_n(Tn,`households/${n}/wastelog`),t=>{h.wasteLog=e(t).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},t=>{console.warn("realtime wastelog error:",t)})),he("synced"),console.log("[realtime] Listeners started for household:",n)}function bp(){bt.forEach(n=>{try{n()}catch{}}),bt=[],console.log("[realtime] All listeners stopped")}function $c(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(h.cfg.adults||"Bora").split(",")[0].trim(),i=p("grt");i&&(i.innerHTML=`${e}, <span>${t}</span>`);const s=p("hdt");s&&(s.textContent=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})),Bn()}function Vc(){Tp(),br==null||br()}let br=null;function OI(n){br=n}function Tp(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(h.cfg.adults||"Bora").split(",")[0].trim(),i=p("grt");i&&!i.innerHTML&&(i.innerHTML=`${e}, <span>${t}</span>`),Bn(),xs(),$I(),VI(),Ii(),jI(),Ip()}function Ii(){const n=Gt(),e=h.mp[n],t=p("tnd"),i=p("tna"),s=p("tonight-main");s&&(s.onclick=function(){window.openMealM(n,"Today")}),e?(t&&(t.innerHTML=e),i&&(i.innerHTML=`<button class="btn bsm bp" onclick="event.stopPropagation();openCooked('${n}')">✓ Cooked</button><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${n}','Today')">Edit</button>`)):(t&&(t.innerHTML='<span style="font-size:.9rem;color:var(--mt);font-style:italic">No meal planned yet</span>'),i&&(i.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${n}','Today')">+ Plan dinner</button><button class="btn bsm bs" onclick="event.stopPropagation();showScreen('chat')">Ask Claude →</button>`))}function Bn(){const n=["S","M","T","W","T","F","S"],e=new Date;e.setHours(0,0,0,0);const t=p("wgrd");t&&(t.innerHTML=wi().map((i,s)=>{const r=i.toISOString().split("T")[0],o=i.getTime()===e.getTime(),c=h.mp[r];return`<div class="wd${o?" today":""}${c?" hm":""}" onclick="openMealM('${r}','${n[s]} ${i.getDate()}')"><div class="wdn">${n[s]}</div><div class="wdd">${i.getDate()}</div>${c?`<div class="wdm">${c.substring(0,10)}${c.length>10?"…":""}</div>`:""}</div>`}).join(""),MI())}function MI(){const n=p("variety-nudge");if(!n)return;const e=wi().map(o=>h.mp[o.toISOString().split("T")[0]]).filter(Boolean);if(e.length<3){n.style.display="none";return}const t=e.some(o=>/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(o)),i=e.some(o=>/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner/i.test(o)),s={};e.forEach(o=>{const c=o.toLowerCase();s[c]=(s[c]||0)+1});const r=Object.entries(s).find(([,o])=>o>=3);r?(n.style.display="block",n.innerHTML="🔄 <strong>"+r[0]+"</strong> is planned "+r[1]+"× this week — maybe try something different?"):!t&&!i?(n.style.display="block",n.innerHTML="🌍 No Bangladeshi or Turkish dishes this week yet — ask Claude for ideas!"):t?i?n.style.display="none":(n.style.display="block",n.innerHTML="🇹🇷 No Turkish dishes this week — köfte or mercimek çorbası would be great!"):(n.style.display="block",n.innerHTML="🇧🇩 No Bangladeshi dishes this week — how about a dal or fish curry?")}function xs(){const n=h.inv.filter(c=>{const u=nt(c.expiry);return u&&(u.c==="expiring"||u.c==="expired")}).length,e=h.shop.filter(c=>!c.checked).length,t=p("home-exp-val"),i=p("home-exp-sub");t&&(n>0?(t.textContent=n+" item"+(n>1?"s":""),t.className="tc-val",t.style.color="var(--am)"):(t.textContent="All fresh!",t.className="tc-val tc-green")),i&&(i.textContent=n>0?"expiring soon":"Nothing in next 3 days");const s=p("home-shop-val"),r=p("home-shop-sub");s&&(s.textContent=e),r&&(r.textContent=e===1?"item to buy":e===0?"all stocked up":"items to buy");const o=p("sgrd");o&&(o.innerHTML=`<div class="sc" onclick="showScreen('inventory')"><div class="sci">🧺</div><div class="scv">${h.inv.length}</div><div class="scl">Items in stock</div></div><div class="sc${n>0?" warn":""}" onclick="showScreen('inventory')"><div class="sci">⏱</div><div class="scv">${n}</div><div class="scl">Expiring soon</div></div><div class="sc" onclick="showScreen('shopping')"><div class="sci">🛒</div><div class="scv">${e}</div><div class="scl">To buy</div></div><div class="sc" onclick="showScreen('recipes')"><div class="sci">📖</div><div class="scv">${h.recs.length}</div><div class="scl">Saved recipes</div></div>`)}function $I(){const n=h.inv.filter(i=>{const s=nt(i.expiry);return s&&(s.c==="expiring"||s.c==="expired")}).sort((i,s)=>new Date(i.expiry)-new Date(s.expiry)),e=p("exslbl"),t=p("expl");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(i=>{const s=nt(i.expiry);return`<div class="exi${s.c==="expired"?" exp":""}" onclick="openAdj('${i.id}')"><div class="exn">${i.name}</div><div class="exd">${s.l}</div></div>`}).join("")}}function VI(){const n=h.inv.filter(i=>i.qty<=(i.lowStockThreshold||1)).sort((i,s)=>i.qty-s.qty),e=p("lowstocklbl"),t=p("lowstocklist");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(i=>`<div class="exi" style="border-color:var(--am)">
    <div style="display:flex;align-items:center;gap:10px;flex:1;cursor:pointer" onclick="openAdj('${i.id}')">
      <div class="exn">${i.name}</div>
      <div style="font-size:.74rem;color:var(--am);font-weight:600">${i.qty} ${i.unit}</div>
    </div>
    <button class="btn bsm bs" style="flex-shrink:0;font-size:.72rem" onclick="event.stopPropagation();addLowToShop('${i.id}')">🛒 Add to list</button>
  </div>`).join(""),FI(n.length)}}async function UI(n){const e=h.inv.find(i=>i.id===n);if(!e)return;if(h.shop.find(i=>i.name.toLowerCase()===e.name.toLowerCase()&&!i.checked)){P(`${e.name} is already on your list`);return}await Se({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"low-stock"}),P(`${e.name} added to shopping list 🛒`)}function FI(n){const e=p("nav-inventory");if(!e)return;const t=e.querySelector(".nav-badge");if(t&&t.remove(),n>0){const i=document.createElement("span");i.className="nav-badge",i.textContent=n,i.style.cssText="position:absolute;top:4px;right:calc(50% - 18px);background:var(--am);color:#0c0c0a;font-size:.58rem;font-weight:700;min-width:16px;height:16px;border-radius:8px;display:flex;align-items:center;justify-content:center;padding:0 4px",e.appendChild(i)}}async function jI(){const n=p("activityfeed"),e=p("activitylbl");if(!n)return;const t=await b_();if(!t.length){e&&(e.style.display="none"),n.innerHTML="";return}e&&(e.style.display="flex");const i=s=>{const r=Date.now()-new Date(s).getTime(),o=Math.floor(r/6e4);if(o<1)return"just now";if(o<60)return o+"m ago";const c=Math.floor(o/60);if(c<24)return c+"h ago";const u=Math.floor(c/24);return u===1?"yesterday":u+"d ago"};n.innerHTML=t.slice(0,3).map(s=>`<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--b1)">
      <div style="width:28px;height:28px;border-radius:50%;background:var(--acd);display:flex;align-items:center;justify-content:center;font-size:.7rem;flex-shrink:0;color:var(--ac);font-weight:700">${(s.memberName||"?")[0].toUpperCase()}</div>
      <div style="flex:1;font-size:.82rem;color:var(--tx2);line-height:1.4"><strong style="color:var(--tx)">${(s.memberName||"Someone").replace(/</g,"&lt;")}</strong> ${(s.action||"").replace(/</g,"&lt;")} <strong>${(s.itemName||"").replace(/</g,"&lt;")}</strong></div>
      <div style="font-size:.68rem;color:var(--mt);flex-shrink:0">${i(s.timestamp)}</div>
    </div>`).join("")}function Ip(){const n=["fridge","freezer","pantry"].map(t=>{const i=h.inv.filter(s=>s.location===t);return i.length?eo(t).toUpperCase()+`
`+i.map(s=>`- ${s.name}${s.brand?` (${s.brand})`:""}: ${s.qty} ${s.unit}`).join(`
`):""}).filter(Boolean).join(`

`),e=p("expbox");e&&(e.textContent=n||"No items yet.")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep="firebasestorage.googleapis.com",Sp="storageBucket",BI=120*1e3,HI=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de extends wt{constructor(e,t,i=0){super(oa(e),`Firebase Storage: ${t} (${oa(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,de.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return oa(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ue;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ue||(ue={}));function oa(n){return"storage/"+n}function Uc(){const n="An unknown error occurred, please check the error payload for server response.";return new de(ue.UNKNOWN,n)}function zI(n){return new de(ue.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function qI(n){return new de(ue.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function WI(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new de(ue.UNAUTHENTICATED,n)}function GI(){return new de(ue.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function KI(n){return new de(ue.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function QI(){return new de(ue.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function JI(){return new de(ue.CANCELED,"User canceled the upload/download.")}function YI(n){return new de(ue.INVALID_URL,"Invalid URL '"+n+"'.")}function XI(n){return new de(ue.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function ZI(){return new de(ue.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Sp+"' property when initializing the app?")}function eE(){return new de(ue.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function tE(){return new de(ue.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function nE(n){return new de(ue.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function qa(n){return new de(ue.INVALID_ARGUMENT,n)}function Ap(){return new de(ue.APP_DELETED,"The Firebase app was deleted.")}function iE(n){return new de(ue.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function cs(n,e){return new de(ue.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Bi(n){throw new de(ue.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=Ke.makeFromUrl(e,t)}catch{return new Ke(e,"")}if(i.path==="")return i;throw XI(e)}static makeFromUrl(e,t){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function d(j){j.path_=decodeURIComponent(j.path)}const m="v[A-Za-z0-9_]+",y=t.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",C=new RegExp(`^https?://${y}/${m}/b/${s}/o${w}`,"i"),x={bucket:1,path:3},O=t===Ep?"(?:storage.googleapis.com|storage.cloud.google.com)":t,L="([^?#]*)",z=new RegExp(`^https?://${O}/${s}/${L}`,"i"),$=[{regex:c,indices:u,postModify:r},{regex:C,indices:x,postModify:d},{regex:z,indices:{bucket:1,path:2},postModify:d}];for(let j=0;j<$.length;j++){const J=$[j],V=J.regex.exec(e);if(V){const T=V[J.indices.bucket];let v=V[J.indices.path];v||(v=""),i=new Ke(T,v),J.postModify(i);break}}if(i==null)throw YI(e);return i}}class sE{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(n,e,t){let i=1,s=null,r=null,o=!1,c=0;function u(){return c===2}let d=!1;function m(...L){d||(d=!0,e.apply(null,L))}function y(L){s=setTimeout(()=>{s=null,n(C,u())},L)}function w(){r&&clearTimeout(r)}function C(L,...z){if(d){w();return}if(L){w(),m.call(null,L,...z);return}if(u()||o){w(),m.call(null,L,...z);return}i<64&&(i*=2);let $;c===1?(c=2,$=0):$=(i+Math.random())*1e3,y($)}let x=!1;function O(L){x||(x=!0,w(),!d&&(s!==null?(L||(c=2),clearTimeout(s),y(0)):L||(c=1)))}return y(0),r=setTimeout(()=>{o=!0,O(!0)},t),O}function oE(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(n){return n!==void 0}function cE(n){return typeof n=="object"&&!Array.isArray(n)}function Fc(n){return typeof n=="string"||n instanceof String}function Md(n){return jc()&&n instanceof Blob}function jc(){return typeof Blob<"u"}function $d(n,e,t,i){if(i<e)throw qa(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw qa(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function kp(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const s=e(i)+"="+e(n[i]);t=t+s+"&"}return t=t.slice(0,-1),t}var Rn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Rn||(Rn={}));/**
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
 */function lE(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e,t,i,s,r,o,c,u,d,m,y,w=!0,C=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=m,this.connectionFactory_=y,this.retry=w,this.isUsingEmulator=C,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,O)=>{this.resolve_=x,this.reject_=O,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new tr(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=c=>{const u=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const c=r.getErrorCode()===Rn.NO_ERROR,u=r.getStatus();if(!c||lE(u,this.additionalRetryCodes_)&&this.retry){const m=r.getErrorCode()===Rn.ABORT;i(!1,new tr(!1,null,m));return}const d=this.successCodes_.indexOf(u)!==-1;i(!0,new tr(d,r))})},t=(i,s)=>{const r=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());aE(u)?r(u):r()}catch(u){o(u)}else if(c!==null){const u=Uc();u.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,u)):o(u)}else if(s.canceled){const u=this.appDelete_?Ap():JI();o(u)}else{const u=QI();o(u)}};this.canceled_?t(!1,new tr(!1,null,!0)):this.backoffId_=rE(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&oE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class tr{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function dE(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function hE(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function fE(n,e){e&&(n["X-Firebase-GMPID"]=e)}function pE(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function mE(n,e,t,i,s,r,o=!0,c=!1){const u=kp(n.urlParams),d=n.url+u,m=Object.assign({},n.headers);return fE(m,e),dE(m,t),hE(m,r),pE(m,i),new uE(d,n.method,m,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function yE(...n){const e=gE();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(jc())return new Blob(n);throw new de(ue.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function vE(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function wE(n){if(typeof atob>"u")throw nE("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class aa{constructor(e,t){this.data=e,this.contentType=t||null}}function _E(n,e){switch(n){case dt.RAW:return new aa(Cp(e));case dt.BASE64:case dt.BASE64URL:return new aa(Rp(n,e));case dt.DATA_URL:return new aa(TE(e),IE(e))}throw Uc()}function Cp(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const r=i,o=n.charCodeAt(++t);i=65536|(r&1023)<<10|o&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function bE(n){let e;try{e=decodeURIComponent(n)}catch{throw cs(dt.DATA_URL,"Malformed data URL.")}return Cp(e)}function Rp(n,e){switch(n){case dt.BASE64:{const s=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(s||r)throw cs(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case dt.BASE64URL:{const s=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(s||r)throw cs(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=wE(e)}catch(s){throw s.message.includes("polyfill")?s:cs(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}class Pp{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw cs(dt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=EE(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function TE(n){const e=new Pp(n);return e.base64?Rp(dt.BASE64,e.rest):bE(e.rest)}function IE(n){return new Pp(n).contentType}function EE(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t){let i=0,s="";Md(e)?(this.data_=e,i=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Md(this.data_)){const i=this.data_,s=vE(i,e,t);return s===null?null:new qt(s)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new qt(i,!0)}}static getBlob(...e){if(jc()){const t=e.map(i=>i instanceof qt?i.data_:i);return new qt(yE.apply(null,t))}else{const t=e.map(o=>Fc(o)?_E(dt.RAW,o).data:o.data_);let i=0;t.forEach(o=>{i+=o.byteLength});const s=new Uint8Array(i);let r=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)s[r++]=o[c]}),new qt(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(n){let e;try{e=JSON.parse(n)}catch{return null}return cE(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function AE(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function Lp(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(n,e){return e}class Ve{constructor(e,t,i,s){this.server=e,this.local=t||e,this.writable=!!i,this.xform=s||kE}}let nr=null;function CE(n){return!Fc(n)||n.length<2?n:Lp(n)}function Dp(){if(nr)return nr;const n=[];n.push(new Ve("bucket")),n.push(new Ve("generation")),n.push(new Ve("metageneration")),n.push(new Ve("name","fullPath",!0));function e(r,o){return CE(o)}const t=new Ve("name");t.xform=e,n.push(t);function i(r,o){return o!==void 0?Number(o):o}const s=new Ve("size");return s.xform=i,n.push(s),n.push(new Ve("timeCreated")),n.push(new Ve("updated")),n.push(new Ve("md5Hash",null,!0)),n.push(new Ve("cacheControl",null,!0)),n.push(new Ve("contentDisposition",null,!0)),n.push(new Ve("contentEncoding",null,!0)),n.push(new Ve("contentLanguage",null,!0)),n.push(new Ve("contentType",null,!0)),n.push(new Ve("metadata","customMetadata",!0)),nr=n,nr}function RE(n,e){function t(){const i=n.bucket,s=n.fullPath,r=new Ke(i,s);return e._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:t})}function PE(n,e,t){const i={};i.type="file";const s=t.length;for(let r=0;r<s;r++){const o=t[r];i[o.local]=o.xform(i,e[o.server])}return RE(i,n),i}function Np(n,e,t){const i=xp(e);return i===null?null:PE(n,i,t)}function xE(n,e,t,i){const s=xp(e);if(s===null||!Fc(s.downloadTokens))return null;const r=s.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(d=>{const m=n.bucket,y=n.fullPath,w="/b/"+o(m)+"/o/"+o(y),C=Bc(w,t,i),x=kp({alt:"media",token:d});return C+x})[0]}function LE(n,e){const t={},i=e.length;for(let s=0;s<i;s++){const r=e[s];r.writable&&(t[r.server]=n[r.local])}return JSON.stringify(t)}class Op{constructor(e,t,i,s){this.url=e,this.method=t,this.handler=i,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(n){if(!n)throw Uc()}function DE(n,e){function t(i,s){const r=Np(n,s,e);return Mp(r!==null),r}return t}function NE(n,e){function t(i,s){const r=Np(n,s,e);return Mp(r!==null),xE(r,s,n.host,n._protocol)}return t}function $p(n){function e(t,i){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=GI():s=WI():t.getStatus()===402?s=qI(n.bucket):t.getStatus()===403?s=KI(n.path):s=i,s.status=t.getStatus(),s.serverResponse=i.serverResponse,s}return e}function OE(n){const e=$p(n);function t(i,s){let r=e(i,s);return i.getStatus()===404&&(r=zI(n.path)),r.serverResponse=s.serverResponse,r}return t}function ME(n,e,t){const i=e.fullServerUrl(),s=Bc(i,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,c=new Op(s,r,NE(n,t),o);return c.errorHandler=OE(e),c}function $E(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function VE(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=$E(null,e)),i}function UE(n,e,t,i,s){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let $="";for(let j=0;j<2;j++)$=$+Math.random().toString().slice(2);return $}const u=c();o["Content-Type"]="multipart/related; boundary="+u;const d=VE(e,i,s),m=LE(d,t),y="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+u+`\r
Content-Type: `+d.contentType+`\r
\r
`,w=`\r
--`+u+"--",C=qt.getBlob(y,i,w);if(C===null)throw eE();const x={name:d.fullPath},O=Bc(r,n.host,n._protocol),L="POST",z=n.maxUploadRetryTime,G=new Op(O,L,DE(n,t),z);return G.urlParams=x,G.headers=o,G.body=C.uploadData(),G.errorHandler=$p(e),G}class FE{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Rn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Rn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Rn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,s,r){if(this.sent_)throw Bi("cannot .send() more than once");if(dn(e)&&i&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Bi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Bi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Bi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Bi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class jE extends FE{initXhr(){this.xhr_.responseType="text"}}function Vp(){return new jE}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,t){this._service=e,t instanceof Ke?this._location=t:this._location=Ke.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Mn(e,t)}get root(){const e=new Ke(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Lp(this._location.path)}get storage(){return this._service}get parent(){const e=SE(this._location.path);if(e===null)return null;const t=new Ke(this._location.bucket,e);return new Mn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw iE(e)}}function BE(n,e,t){n._throwIfRoot("uploadBytes");const i=UE(n.storage,n._location,Dp(),new qt(e,!0),t);return n.storage.makeRequestWithTokens(i,Vp).then(s=>({metadata:s,ref:n}))}function HE(n){n._throwIfRoot("getDownloadURL");const e=ME(n.storage,n._location,Dp());return n.storage.makeRequestWithTokens(e,Vp).then(t=>{if(t===null)throw tE();return t})}function zE(n,e){const t=AE(n._location.path,e),i=new Ke(n._location.bucket,t);return new Mn(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(n){return/^[A-Za-z]+:\/\//.test(n)}function WE(n,e){return new Mn(n,e)}function Up(n,e){if(n instanceof Hc){const t=n;if(t._bucket==null)throw ZI();const i=new Mn(t,t._bucket);return e!=null?Up(i,e):i}else return e!==void 0?zE(n,e):n}function GE(n,e){if(e&&qE(e)){if(n instanceof Hc)return WE(n,e);throw qa("To use ref(service, url), the first argument must be a Storage instance.")}else return Up(n,e)}function Vd(n,e){const t=e==null?void 0:e[Sp];return t==null?null:Ke.makeFromBucketSpec(t,n)}function KE(n,e,t,i={}){n.host=`${e}:${t}`;const s=dn(e);s&&(Qa(`https://${n.host}/b`),Ja("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:r}=i;r&&(n._overrideAuthToken=typeof r=="string"?r:fh(r,n.app.options.projectId))}class Hc{constructor(e,t,i,s,r,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._isUsingEmulator=o,this._bucket=null,this._host=Ep,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=BI,this._maxUploadRetryTime=HI,this._requests=new Set,s!=null?this._bucket=Ke.makeFromBucketSpec(s,this._host):this._bucket=Vd(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ke.makeFromBucketSpec(this._url,e):this._bucket=Vd(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){$d("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){$d("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Ue(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Mn(this,e)}_makeRequest(e,t,i,s,r=!0){if(this._deleted)return new sE(Ap());{const o=mE(e,this._appId,i,s,t,this._firebaseVersion,r,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,s).getPromise()}}const Ud="@firebase/storage",Fd="0.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp="storage";function QE(n,e,t){return n=Re(n),BE(n,e,t)}function JE(n){return n=Re(n),HE(n)}function YE(n,e){return n=Re(n),GE(n,e)}function XE(n=Za(),e){n=Re(n);const i=Wr(n,Fp).getImmediate({identifier:e}),s=uh("storage");return s&&ZE(i,...s),i}function ZE(n,e,t,i={}){KE(n,e,t,i)}function e0(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Hc(t,i,s,e,Un)}function t0(){xn(new nn(Fp,e0,"PUBLIC").setMultipleInstances(!0)),ht(Ud,Fd,""),ht(Ud,Fd,"esm2020")}t0();const n0=XE(uc);function ze(n){return(n||"").trim().toLowerCase().replace(/\s+/g,"_").replace(/[^a-z0-9_]/g,"")}function i0(n){return new Promise((e,t)=>{const i=new Image,s=new FileReader;s.onload=r=>{i.onload=()=>{let c=i.width,u=i.height;if(c>400||u>400){const x=Math.min(400/c,400/u);c=Math.round(c*x),u=Math.round(u*x)}const d=document.createElement("canvas");d.width=c,d.height=u,d.getContext("2d").drawImage(i,0,0,c,u);const y=150*1024;let w=.8;const C=()=>{d.toBlob(x=>{if(!x)return t(new Error("Canvas compression failed"));x.size<=y||w<=.3?e(x):(w-=.1,C())},"image/jpeg",w)};C()},i.onerror=()=>t(new Error("Failed to load image")),i.src=r.target.result},s.onerror=()=>t(new Error("Failed to read file")),s.readAsDataURL(n)})}async function po(n,e){var c;if(!h.hid)throw new Error("No household ID — cannot upload");if(!n)throw new Error("No file provided");const t=ze(e);if(!t)throw new Error("Invalid product name for upload");let i;try{i=await i0(n),console.log(`[uploadProductImage] Compressed: ${(i.size/1024).toFixed(1)}KB, type=${i.type}`)}catch(u){throw console.error("[uploadProductImage] Compression failed:",u),new Error("Image compression failed — "+u.message)}const s=`households/${h.hid}/customProducts/${t}.jpg`,r=YE(n0,s);try{console.log(`[uploadProductImage] Uploading to: ${s}`),await QE(r,i,{contentType:"image/jpeg"}),console.log("[uploadProductImage] Upload succeeded")}catch(u){throw console.error("[uploadProductImage] Storage upload failed:",u.code,u.message),new Error("Storage upload failed — "+(u.code||u.message))}let o;try{o=await JE(r),console.log("[uploadProductImage] Download URL obtained")}catch(u){throw console.error("[uploadProductImage] getDownloadURL failed:",u.code,u.message),new Error("Could not get download URL — "+(u.code||u.message))}try{const u=ce();await K(`households/${h.hid}/customProducts/${t}`,{name:e.trim(),imageUrl:o,imageDismissed:!1,updatedAt:new Date().toISOString(),updatedBy:(u==null?void 0:u.displayName)||((c=u==null?void 0:u.email)==null?void 0:c.split("@")[0])||"Unknown"}),console.log(`[uploadProductImage] Saved to customProducts collection: ${t}`)}catch(u){console.error("[uploadProductImage] Firestore save failed:",u)}return o}let Qe=null,ca=!1,Hi="",la=!1;function s0(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=p("shopAddMicOpt");e&&(e.style.display="")}function jd(n){const e=p("micstatus");e&&e.classList.toggle("visible",n)}function jp(){if(ca&&Qe){la=!0,Qe.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){P("Voice input not supported");return}Qe=new n,Qe.lang="en-US",Qe.interimResults=!0,Qe.maxAlternatives=1,Qe.continuous=!1,Hi="",ca=!0,jd(!0),Qe.onresult=e=>{let t="";for(let s=e.resultIndex;s<e.results.length;s++){const r=e.results[s][0].transcript;e.results[s].isFinal?Hi+=r:t+=r}const i=p("shi");i&&(i.value=(Hi+t).trim())},Qe.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&P("Couldn't hear that — try again")},Qe.onend=()=>{let e=(Hi||"").trim();if(!e&&la){const t=p("shi");e=t?t.value.trim():""}if(ca=!1,Qe=null,Hi="",la=!1,jd(!1),e){let t=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||1):s&&(t=s[2].trim(),i=parseInt(s[1],10)||1);const o={id:Date.now().toString(),name:t,qty:i,checked:!1,src:"manual"};Se(o),P(`Added "${e}" 🎤`);const c=p("shi");c&&(c.value=""),mo(o.id,t,"shop")}},Qe.start()}function Bp(n){return n?n.replace(/\S+/g,e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()):""}function Hp(n){if(!n.brand)return!1;if(n.src==="scan")return!0;if(n.src==="search"&&n.searchQuery){const e=n.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),t=n.brand.toLowerCase();return e.some(i=>t.includes(i))}return!1}function ir(n){const e=n.qty||1,t=`<span class="sh-qty${e===1?" sh-qty-one":""}" onclick="event.stopPropagation();openShQty('${n.id}')"> × ${e}</span>`,i=n.image?`<img src="${n.image}" class="sh-thumb" alt="" onerror="this.style.display='none'"/>`:"";return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="shop">
    <div class="swipe-inner">
      <!-- Main row: swipeRowTap handles multi-select; checkbox toggles checked; content area opens detail -->
      <div class="shit${n.checked?" chk":""}" onclick="swipeRowTap('${n.id}','shop')">
        <div class="sel-cb">✓</div>           <!-- Multi-select checkbox (hidden unless selectMode is active) -->
        <div class="shck" onclick="event.stopPropagation();togShop('${n.id}')">${n.checked?"✓":""}</div>  <!-- Slim ring: tap to mark as bought; hidden in select mode (replaced by sel-cb) -->
        ${i}                               <!-- Product thumbnail from barcode scan (if available) -->
        <div style="flex:1;min-width:0;cursor:pointer" onclick="openItemDetail('${n.id}')">
          <div class="shnm">${Bp(n.name)}${t}</div>
          ${Hp(n)?`<div class="sh-brand">${n.brand}</div>`:""}  <!-- Brand shown for barcode scans always; for text search only if the user's query matches the brand name -->
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
  </div>`}function Ei(){const n=(o,c)=>o.name.localeCompare(c.name),e=p("shlist"),t=h.shop.filter(o=>!o.checked).sort(n),i=h.shop.filter(o=>o.checked).sort(n),s=p("clrchk");s&&(s.style.display=i.length?"block":"none");const r=p("shsub");if(r&&(r.textContent=t.length+" items to buy"),!!e){if(!h.shop.length){e.innerHTML='<div class="es"><div class="ei">🛒</div><p>Your list is empty!<br/>Add items or use "Build from meal plan".</p></div>';return}if(h.aisleMode&&t.length){const o={};t.forEach(c=>{const u=S_(c.name);o[u]||(o[u]=[]),o[u].push(c)}),e.innerHTML=Object.entries(o).sort().map(([c,u])=>`<div class="shsec">${c}</div>${u.map(ir).join("")}`).join("")+(i.length?`<div class="shsec">Done</div>${i.map(ir).join("")}`:"")}else e.innerHTML=(t.length?`<div class="shsec">To buy (${t.length})</div>${t.map(ir).join("")}`:"")+(i.length?`<div class="shsec">Done</div>${i.map(ir).join("")}`:"");if(h.selectMode==="shop"){document.querySelectorAll("#shlist .swipe-wrap").forEach(c=>{c.classList.add("selecting"),h.selectedIds.has(c.dataset.id)&&c.classList.add("selected")});const o=document.querySelector(".shbody");o&&(o.style.paddingLeft="52px")}w0()}}function r0(){const n=p("shi"),e=n.value.trim();if(!e)return;if(gt&&gt.length===1){Wp(0);return}let t=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||1):s&&(t=s[2].trim(),i=parseInt(s[1],10)||1);const o=p("addNoteInp"),c=o?o.value.trim():"",u={id:Date.now().toString(),name:t,qty:i,checked:!1,src:"manual"};c&&(u.note=c),Se(u),n.value="",o&&(o.value="");const d=p("addNoteWrap");d&&(d.style.display="none"),qc(),Ls()}function o0(){const n=p("addNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=p("addNoteInp");t&&t.focus()}}function a0(){const n=p("shopAddBackdrop"),e=p("shopAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),setTimeout(()=>{const t=p("shi");t&&(t.value="",t.focus())},150)}function Ls(){const n=p("shopAddBackdrop"),e=p("shopAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),qc()}function c0(){Ls(),window.openScanForList&&window.openScanForList()}function l0(){Ls(),jp()}let ls=null,gt=null;const zi=new Map,u0=300*1e3,d0=30;function h0(){ls&&clearTimeout(ls);const n=p("shi"),e=n?n.value.trim():"",t=p("shopSearchDropdown");if(!e||e.length<2){t&&(t.classList.remove("active"),t.innerHTML=""),gt=null;return}ls=setTimeout(()=>v0(e),350)}const f0=new Set(["salad","soup","stew","casserole","dish","recipe","curry","pie","sandwich","wrap","risotto","gratin","puree","smoothie","juice","namasu","pickled","marinated","braised","sauteed","sautéed","coleslaw","gazpacho","chutney","relish","compote","ragout","ratatouille","succotash","bruschetta","ceviche","tartare"]),p0=["made with","and vegetable","and rice","and noodle","and cheese","cooked in","served with","topped with","stuffed with","mixed with","tossed with","dressed with"];function m0(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(t===i)return!1;for(const o of p0)if(t.includes(o)&&!i.includes(o))return!0;const s=new Set(i.split(/\s+/)),r=t.split(/[\s,&+\-–—/()[\]]+/).filter(o=>o.length>=2);for(const o of r)if(f0.has(o)&&!s.has(o))return!0;return!1}const zp=new Set(["a","an","the","and","or","with","for","of","in","to","by","is","it","at","on","no","not","all","each","per","from","free","style","natural","original","premium","organic","fresh","whole","pure","real","lite","light","low","high","extra","reduced","fat","nonfat","skim","raw","roasted","unsweetened","sweetened","flavored","smoked","dried","frozen","canned","pack","ct","oz","lb","ml","kg","fl","count","size","gallon","quart","pint","liter","bag","box","can","jar","bottle","container","pouch","tub","carton","plain","creamy","chunky","crispy","crunchy","spicy","mild","hot","cold","classic","homestyle","traditional","artisan","greek","italian","mexican","asian","indian","mini","small","medium","large","jumbo","giant","big","handheld","electric","portable","automatic","manual","new","best","top","value","brand"]);function Bd(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(t===i||t.startsWith(i+" "))return!0;const s=i.split(/\s+/).filter(c=>c.length>=2),r=t.split(/[\s,&+\-–—/()[\]]+/).filter(c=>c.length>=2&&!zp.has(c)&&!/^\d+$/.test(c));if(r.length<=2)return!0;let o=0;for(const c of r)s.some(d=>{if(c.startsWith(d)||d.startsWith(c))return!0;const m=Math.min(c.length,d.length,3);return m>=3&&c.slice(0,m)===d.slice(0,m)})&&o++;return o/r.length>=.5}function qp(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(m0(n,e))return 0;if(t===i)return 100;if(t.startsWith(i+" ")||t.startsWith(i))return 95;const r=t.split(/[\s,&+\-–—/]+/).filter(o=>o.length>=2).filter(o=>!zp.has(o)&&!/^\d+$/.test(o));if(r.length&&(r[0].startsWith(i)||i.startsWith(r[0]))){const o=r.filter(u=>!u.startsWith(i)&&!i.startsWith(u)).length,c=85-Math.min(o*8,30);return Bd(n,e)?c:0}for(let o=1;o<Math.min(3,r.length);o++)if(r[o].startsWith(i)||i.startsWith(r[o])){const c=r.filter(d=>!d.startsWith(i)&&!i.startsWith(d)).length,u=60-o*10-Math.min(c*8,20);return Bd(n,e)?Math.max(u,5):0}return 0}async function zc(n){const e=n.toLowerCase(),t=zi.get(e);if(t&&Date.now()-t.ts<u0)return t.scored;const i=h.hid?`&hid=${encodeURIComponent(h.hid)}`:"";console.log(`[ShopSearch] Fetching /api/text-search?q=${encodeURIComponent(n)}${i}`);const r=await(await fetch(`/api/text-search?q=${encodeURIComponent(n)}${i}`)).json();r.imageDismissed&&console.log(`[ShopSearch] imageDismissed for "${n}" — stripping images from results`);let o=r.results||[];const c=n.toLowerCase().split(/\s+/).filter(d=>d.length>=2);o=o.filter(d=>{const m=(d.name||"").toLowerCase();return c.some(y=>m.includes(y))});const u=o.map(d=>({...d,_score:qp(d.name||"",n)})).filter(d=>d._score>=20).sort((d,m)=>m._score-d._score).slice(0,5);if(zi.set(e,{scored:u,ts:Date.now()}),zi.size>d0){const d=zi.keys().next().value;zi.delete(d)}return u}function g0(n){if(!n)return"NONE";const e=n.toLowerCase();return e.includes("kroger.com")?"Kroger (real product)":e.includes("img.spoonacular.com/products")?"Spoonacular product (real photo)":e.includes("img.spoonacular.com/ingredients")?"Spoonacular ingredient (illustration)":e.includes("openfoodfacts.org")?"Open Food Facts (real photo)":e.includes("edamam")?"Edamam":"Other: "+new URL(n).hostname}function Hd(n){const e=p("shopSearchDropdown");!e||!n.length||(gt=n,n.forEach((t,i)=>{const s=g0(t.image);console.log(`[ShopDropdown] #${i} "${t.name}" → image: ${s} | url: ${t.image||"(none)"} | score: ${t._score}`)}),e.innerHTML=n.map((t,i)=>{const s=t.image?`<img src="${t.image}" class="enrich-img" alt="" onerror="this.outerHTML='<div class=\\'enrich-img-ph\\'>🛒</div>'">`:'<div class="enrich-img-ph">🛒</div>',r=t.category&&t.category!=="General"?`<div class="enrich-cat">${t.category}</div>`:"";return`<div class="enrich-row" onclick="pickInlineResult(${i})">
      ${s}
      <div class="enrich-text">
        <div class="enrich-name">${t.name}</div>
        ${r}
      </div>
    </div>`}).join(""),e.classList.add("active"))}async function y0(n){if(!h.hid||!n)return null;const e=ze(n);if(!e)return null;const t=await ie(`households/${h.hid}/customProducts/${e}`);return!t||t.imageDismissed||!t.imageUrl?null:{name:n.trim().replace(/\b\w/g,s=>s.toUpperCase()),image:t.imageUrl,brand:"",category:t.category||"",source:"customProduct",_score:100}}async function v0(n){const e=p("shopSearchDropdown");if(e){e.innerHTML='<div class="search-hint">Searching…</div>',e.classList.add("active");try{const t=y0(n),i=zc(n),s=await t;s&&(p("shi")?p("shi").value.trim():"").toLowerCase()===n.toLowerCase()&&(console.log(`[ShopSearch] Instant custom product match for "${n}"`),Hd([s]));const r=await i;if((p("shi")?p("shi").value.trim():"").toLowerCase()!==n.toLowerCase())return;let c=r;if(s){const u=ze(s.name),d=r.filter(m=>ze(m.name)!==u);c=[s,...d].slice(0,5)}if(!c.length){e.classList.remove("active"),e.innerHTML="",gt=null;return}Hd(c)}catch(t){console.warn("Inline search failed:",t),e.classList.remove("active"),e.innerHTML="",gt=null}}}function Wp(n){if(!gt||!gt[n])return;const e=gt[n],t=p("addNoteInp"),i=t?t.value.trim():"",s=p("shi")?p("shi").value.trim():"",r={id:Date.now().toString(),name:e.name,qty:1,checked:!1,src:"search",brand:e.brand||"",image:e.image||null,category:e.category||"",source:e.source||"search",searchQuery:s};i&&(r.note=i),Se(r),P(`Added "${e.name}" ✓`);const o=p("shi");o&&(o.value=""),t&&(t.value="");const c=p("addNoteWrap");c&&(c.style.display="none"),qc(),Ls()}function qc(){ls&&clearTimeout(ls),gt=null;const n=p("shopSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}const zd=new Set;function w0(){const n=h.shop.filter(e=>e.src==="reminders"&&!e.image&&!e.imageDismissed&&!zd.has(e.id));if(n.length)for(const e of n)zd.add(e.id),zc(e.name).then(t=>{const i=h.shop.find(s=>s.id===e.id);if(!(!i||i.imageDismissed||i.image))if(t.length&&t[0]._score>=80){const s=t[0],r={...i};s.image&&(r.image=s.image),s.brand&&!i.brand&&(r.brand=s.brand),s.category&&s.category!=="General"&&!i.category&&(r.category=s.category),r.src="reminders",Se(r),console.log(`[RemindersEnrich] Auto-enriched "${e.name}" (score=${s._score}) with ${s.image?"image from "+(s.source||"search"):"metadata only (no image)"}`)}else t.length&&console.log(`[RemindersEnrich] Skipped "${e.name}" — top result "${t[0].name}" scored ${t[0]._score} (need >= 80)`)}).catch(()=>{})}async function mo(n,e,t){if(!e||e.length<2)return;const i=p("enrichResults"),s=p("enrichTitle");if(!i)return;s&&(s.textContent=`Finding "${e}"…`),i.innerHTML='<div class="enrich-loading"><div class="spin" style="width:28px;height:28px;margin:0 auto 8px"></div>Searching products…</div>';const r=p("enrichBackdrop"),o=p("enrichSheet");r&&r.classList.add("active"),o&&o.classList.add("active");try{let c=await zc(e);if(!c.length){jr();return}s&&(s.textContent="Choose a match");let u=c.map((d,m)=>{const y=d.image?`<img src="${d.image}" class="enrich-img" alt="" onerror="this.outerHTML='<div class=\\'enrich-img-ph\\'>🛒</div>'">`:'<div class="enrich-img-ph">🛒</div>',w=d.category&&d.category!=="General"?`<div class="enrich-cat">${d.category}</div>`:"";return`<div class="enrich-row" onclick="pickEnrichResult(${m})">
        ${y}
        <div class="enrich-text">
          <div class="enrich-name">${d.name}</div>
          ${w}
        </div>
      </div>`}).join("");u+=`<button class="enrich-fallback" onclick="closeEnrichSheet()">
      <span style="font-size:1.1rem">📝</span>
      Just add "${e}" as typed
    </button>`,i.innerHTML=u,window._enrichCtx={itemId:n,query:e,list:t,results:c}}catch(c){console.warn("Text search failed:",c),jr()}}function jr(){const n=p("enrichBackdrop"),e=p("enrichSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),window._enrichCtx=null}async function $n(n){if(h.selectMode)return;event&&event.stopPropagation();const e=h.shop.find(w=>w.id===n);if(!e)return;const t=p("itemDetailContent");if(!t)return;let i=e.image;if(e.imageDismissed,h.hid&&e.name){const w=ze(e.name);if(w){const C=await ie(`households/${h.hid}/customProducts/${w}`);C&&(C.imageDismissed?i=null:C.imageUrl&&(i=C.imageUrl))}}const s=i?`<div class="item-detail-img-wrap drop-zone" data-item-id="${e.id}">
        <img src="${i}" class="item-detail-img" alt="" onerror="this.style.display='none'"/>
        <button class="item-detail-img-del" onclick="deleteItemImage('${e.id}')" title="Remove image">×</button>
      </div>`:`<div class="item-detail-img-ph drop-zone" data-item-id="${e.id}" onclick="triggerProductPhotoUpload('${e.id}')" style="cursor:pointer">
        <div style="text-align:center">
          <div style="font-size:1.3rem;margin-bottom:2px;opacity:.45">📷</div>
          <div style="font-size:.6rem;color:var(--mt);opacity:.7">Add photo</div>
        </div>
      </div>`,r=Hp(e),o=i?`<div class="item-detail-change-photo" onclick="triggerProductPhotoUpload('${e.id}')">Change photo</div>`:"";let c=`<div class="item-detail-header">
    <div>${s}${o}</div>
    <div style="flex:1;min-width:0">
      <div class="item-detail-name">${Bp(e.name)}</div>
      ${r?`<div class="item-detail-brand">${e.brand}</div>`:""}
      ${e.checked?'<div style="margin-top:4px"><span class="item-detail-badge" style="background:var(--gnd);color:var(--gn)">✓ Purchased</span></div>':""}
    </div>
  </div>
  <!-- Hidden file input for product photo uploads — triggered by Add/Change photo buttons -->
  <input type="file" id="productPhotoInput" accept="image/*" style="display:none"
    onchange="handleProductPhotoSelected('${e.id}')" />`;const u=e.qty||1;u>1&&(c+=`<div class="item-detail-section">
      <div class="item-detail-label">Quantity</div>
      <div class="item-detail-value">× ${u}</div>
    </div>`),e.note&&(c+=`<div class="item-detail-section">
      <div class="item-detail-label">Note</div>
      <div class="item-detail-value">${e.note}</div>
    </div>`),c+='<button class="btn bs bf" onclick="closeItemDetail()" style="margin-top:8px">Close</button>',t.innerHTML=c;const d=p("itemDetailBackdrop"),m=p("itemDetailSheet");d&&d.classList.add("active"),m&&m.classList.add("active");const y=t.querySelector(".drop-zone");y&&b0(y,e.id)}function _0(){const n=p("itemDetailBackdrop"),e=p("itemDetailSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}function b0(n,e){let t=0;n.addEventListener("dragenter",i=>{i.preventDefault(),i.stopPropagation(),t++,n.classList.add("drop-zone-active")}),n.addEventListener("dragover",i=>{i.preventDefault(),i.stopPropagation()}),n.addEventListener("dragleave",i=>{i.preventDefault(),i.stopPropagation(),t--,t<=0&&(t=0,n.classList.remove("drop-zone-active"))}),n.addEventListener("drop",i=>{i.preventDefault(),i.stopPropagation(),t=0,n.classList.remove("drop-zone-active"),T0(i.dataTransfer,e)})}async function T0(n,e){const t=h.shop.find(c=>c.id===e);if(!t)return;if(n.files&&n.files.length>0){const c=n.files[0];if(c.type&&c.type.startsWith("image/")){await Gp(c,t);return}}const i=n.getData("text/uri-list"),s=n.getData("text/plain"),r=i||s||"";if(r&&/^https?:\/\/.+\.(jpe?g|png|gif|webp|bmp)/i.test(r)){await qd(r,t);return}const o=n.getData("text/html");if(o){const c=o.match(/<img[^>]+src=["']([^"']+)["']/i);if(c&&c[1]&&/^https?:\/\//.test(c[1])){await qd(c[1],t);return}}console.warn("[DropZone] Dropped data didn't contain a usable image")}async function Gp(n,e){const t=p("itemDetailContent");if(t){const i=t.querySelector(".item-detail-img-wrap, .item-detail-img-ph");i&&(i.innerHTML=`<div style="text-align:center;padding:16px 0">
        <div style="font-size:1.2rem">⏳</div>
        <div style="font-size:.65rem;color:var(--mt);margin-top:2px">Uploading…</div>
      </div>`)}try{const i=await po(n,e.name),s={...e,image:i,imageDismissed:!1};await Se(s),Kp(e.name,i),P("Photo saved ✓"),$n(e.id)}catch(i){console.error("[DropZone] Upload failed:",i),P("Upload failed — try again"),$n(e.id)}}async function qd(n,e){const t=p("itemDetailContent");if(t){const i=t.querySelector(".item-detail-img-wrap, .item-detail-img-ph");i&&(i.innerHTML=`<div style="text-align:center;padding:16px 0">
        <div style="font-size:1.2rem">⏳</div>
        <div style="font-size:.65rem;color:var(--mt);margin-top:2px">Fetching image…</div>
      </div>`)}try{const i=await fetch(n);if(!i.ok)throw new Error(`HTTP ${i.status}`);const s=await i.blob();if(!s.type||!s.type.startsWith("image/"))throw new Error("Fetched resource is not an image");const r=new File([s],"dropped-image.jpg",{type:s.type});await Gp(r,e)}catch(i){console.warn("[DropZone] Could not fetch dropped image URL:",i),P("Couldn't load that image — try saving it first"),$n(e.id)}}function Kp(n,e){if(!h.hid||!n)return;const t=ze(n);t&&K(`households/${h.hid}/customProducts/${t}`,{name:n.trim(),imageUrl:e,imageDismissed:!1,updatedAt:new Date().toISOString()}).catch(i=>console.warn("Failed to save custom product image:",i))}async function I0(n){const e=h.shop.find(i=>i.id===n);if(!e)return;const t={...e,image:null,imageDismissed:!0};if(await Se(t),h.hid&&e.name){const i=ze(e.name);i&&K(`households/${h.hid}/customProducts/${i}`,{name:e.name.trim(),imageDismissed:!0,imageUrl:null,updatedAt:new Date().toISOString()}).catch(s=>console.warn("Failed to save imageDismissed to customProducts:",s))}$n(n)}function E0(n){window._uploadTargetItemId=n;const e=document.getElementById("productPhotoInput");e&&(e.value="",e.click())}async function S0(n){const e=document.getElementById("productPhotoInput");if(!e||!e.files||!e.files[0])return;const t=e.files[0],i=h.shop.find(r=>r.id===n);if(!i)return;const s=p("itemDetailContent");if(s){const r=s.querySelector(".item-detail-img-wrap, .item-detail-img-ph");r&&(r.innerHTML=`<div style="text-align:center;padding:16px 0">
        <div style="font-size:1.2rem">⏳</div>
        <div style="font-size:.65rem;color:var(--mt);margin-top:2px">Uploading…</div>
      </div>`)}try{const r=await po(t,i.name),o={...i,image:r,imageDismissed:!1};await Se(o),Kp(i.name,r),P("Photo saved ✓"),$n(n)}catch(r){console.error("Product photo upload failed:",r),P("Upload failed — try again"),$n(n)}}function A0(n){const e=window._enrichCtx;if(!e)return;const t=e.results[n];if(t){if(e.list==="shop"){const i=h.shop.find(s=>s.id===e.itemId);if(i&&(Se({...i,name:t.name,brand:t.brand||"",image:t.image||null,category:t.category||"",source:t.source||"search",imageDismissed:!1}),h.hid&&t.name)){const s=ze(t.name);s&&K(`households/${h.hid}/customProducts/${s}`,{name:t.name.trim(),imageDismissed:!1,updatedAt:new Date().toISOString()}).catch(r=>console.warn("Failed to clear imageDismissed in customProducts:",r))}}else if(e.list==="inv"){const i=h.inv.find(s=>s.id===e.itemId);i&&be({...i,name:t.name,brand:t.brand||"",image:t.image||null,category:t.category||i.category,source:t.source||"search",imageDismissed:!1})}jr(),P(`Updated with "${t.name}" ✓`)}}function Qp(n){if(!h.hid||!n)return;const e=Date.now().toString(36)+Math.random().toString(36).slice(2,6);K(`households/${h.hid}/completed_items/${e}`,{name:n,completedAt:new Date().toISOString()}).catch(t=>console.warn("recordCompleted error:",t))}function k0(n){const e=h.shop.find(i=>i.id===n);if(!e)return;const t=!e.checked;Se({...e,checked:t}),t&&Qp(e.name)}function C0(n,e){n.stopPropagation();const t=p("sne-"+e),i=p("sni-"+e);if(!t)return;t.classList.toggle("open")&&i&&(i.focus(),i.setSelectionRange(i.value.length,i.value.length))}function R0(n){const e=p("sni-"+n);if(!e)return;const t=h.shop.find(s=>s.id===n);if(!t)return;const i=e.value.trim();i!==(t.note||"")&&Se({...t,note:i})}function P0(n){const e=p("sqe-"+n),t=p("sqi-"+n);if(!e)return;e.classList.toggle("open")&&t&&(t.focus(),t.select())}function x0(n,e){const t=p("sqi-"+n);if(!t)return;const i=Math.max(1,(parseInt(t.value,10)||1)+e);t.value=i,Jp(n)}function Jp(n){const e=p("sqi-"+n);if(!e)return;const t=h.shop.find(s=>s.id===n);if(!t)return;const i=Math.max(1,parseInt(e.value,10)||1);i!==(t.qty||1)&&Se({...t,qty:i})}function L0(){h.aisleMode=!h.aisleMode;const n=p("aislebtn");n&&(n.style.background=h.aisleMode?"var(--ac)":"",n.style.color=h.aisleMode?"var(--bg)":""),Ei()}function D0(n){["list","deals"].forEach(i=>{const s=p("shtab-"+i);s&&s.classList.remove("active");const r=p("sh-"+i+"-body");r&&(r.style.display="none")});const e=p("shtab-"+n);e&&e.classList.add("active");const t=p("sh-"+n+"-body");t&&(t.style.display="block"),n==="deals"&&Yp()}function N0(){const n=h.shop.filter(i=>!i.checked);if(!n.length){P("List is empty!");return}const t=`🛒 Shopping List

`+n.map(i=>{let s="• "+i.name;return(i.qty||1)>1&&(s+=" × "+i.qty),i.price&&(s+=" (~$"+i.price+")"),s}).join(`
`);navigator.share?navigator.share({title:"Shopping List",text:t}).catch(()=>{}):navigator.clipboard&&navigator.clipboard.writeText(t).then(()=>P("List copied!"))}function O0(){const n=h.shop.filter(t=>t.checked);if(!n.length){P("No completed items!");return}const e=p("atk-body");e.innerHTML=`<div style="padding:16px">
    <p style="font-size:.82rem;color:var(--mt);margin-bottom:16px">Choose where each item goes in your kitchen, then tap Add All.</p>
    ${n.map(t=>{const i=pc(t.name);return`<div class="atk-item" id="atk-${t.id}" data-loc="${i}">
        <div class="atk-name">${t.name}</div>
        <div class="atk-loc">
          <button onclick="setAtkLoc('${t.id}','fridge',this)" class="${i==="fridge"?"sel":""}">🌡 Fridge</button>
          <button onclick="setAtkLoc('${t.id}','freezer',this)" class="${i==="freezer"?"sel":""}">🧊 Freeze</button>
          <button onclick="setAtkLoc('${t.id}','pantry',this)" class="${i==="pantry"?"sel":""}">🥫 Pantry</button>
        </div>
      </div>`}).join("")}
  </div>`,Lt("atk")}function M0(n,e,t){const i=p("atk-"+n);i.dataset.loc=e,i.querySelectorAll(".atk-loc button").forEach(s=>s.classList.remove("sel")),t.classList.add("sel")}async function $0(){const n=h.shop.filter(i=>i.checked),e=new Date().toLocaleDateString();let t=0;for(const i of n){const s=p("atk-"+i.id);if(!s)continue;const r=s.dataset.loc||pc(i.name),o=h.inv.find(u=>u.name.toLowerCase()===i.name.toLowerCase()),c=i.qty||1;await be({id:o?o.id:"inv-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:o?o.name:i.name,qty:o?o.qty+c:c,unit:o?o.unit:"unit",location:r,category:o?o.category:Fn({name:i.name}),addedAt:o?o.addedAt:e,brand:o?o.brand:i.brand||"",expiry:o?o.expiry:null,image:o?o.image:i.image||null,source:"shopping"}),await Ss(i.id),t++}ke("atk"),P(`${t} item${t!==1?"s":""} added to your kitchen! 🧺`)}async function V0(){const n=wi().map(s=>{const r=s.toISOString().split("T")[0];return h.mp[r]?`${s.toLocaleDateString("en-US",{weekday:"short"})}: ${h.mp[r]}`:""}).filter(Boolean).join(", ");if(!n){P("No meals planned yet!");return}const e=h.inv.map(s=>`${s.name} (${s.qty} ${s.unit})`).join(", "),t=document.querySelector('[onclick="buildList()"]'),i=t?t.textContent:"";t&&(t.disabled=!0,t.textContent="⏳ Thinking…");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:500,messages:[{role:"user",content:`Week meals: ${n}
Already have: ${e}
List ONLY ingredients still needed. Return ONLY a bullet list, each line starting "- ". No categories, no headers, no explanation.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",c=[];if(o.split(`
`).forEach(u=>{const d=u.match(/^[-•*]\s+(.+)/);if(d){const m=d[1].replace(/\*\*/g,"").trim();m&&!h.shop.find(y=>y.name.toLowerCase()===m.toLowerCase())&&c.push({name:m,sel:!0})}}),!c.length){P("Nothing new needed — you're all stocked! ✓");return}window._bpItems=c,p("bpList").innerHTML=c.map((u,d)=>`<div id="bpitem-${d}" onclick="bpTog(${d})" style="display:flex;align-items:center;gap:12px;padding:13px 16px;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;cursor:pointer;transition:all .15s"><div id="bpck-${d}" style="width:24px;height:24px;border-radius:50%;background:var(--gn);border:2px solid var(--gn);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.8rem;color:#0c0c0a;transition:all .2s">✓</div><div style="font-size:.9rem;font-weight:500">${u.name}</div></div>`).join(""),Wc(),p("buildPreviewM").classList.add("active")}catch{P("Couldn't reach Claude — check connection")}finally{t&&(t.disabled=!1,t.textContent=i)}}function U0(n){window._bpItems[n].sel=!window._bpItems[n].sel;const e=p("bpck-"+n),t=p("bpitem-"+n);window._bpItems[n].sel?(e.textContent="✓",e.style.background="var(--gn)",e.style.borderColor="var(--gn)",e.style.color="#0c0c0a",t.style.borderColor="var(--b1)"):(e.textContent="",e.style.background="transparent",e.style.borderColor="var(--b2)",t.style.borderColor="var(--b2)"),Wc()}function F0(n){window._bpItems.forEach((e,t)=>{window._bpItems[t].sel=n;const i=p("bpck-"+t),s=p("bpitem-"+t);n?(i.textContent="✓",i.style.background="var(--gn)",i.style.borderColor="var(--gn)",i.style.color="#0c0c0a",s.style.borderColor="var(--b1)"):(i.textContent="",i.style.background="transparent",i.style.borderColor="var(--b2)",s.style.borderColor="var(--b2)")}),Wc()}function Wc(){const n=window._bpItems.filter(t=>t.sel).length,e=p("bpAddBtn");e&&(e.textContent=n?`Add ${n} item${n!==1?"s":""}  ✓`:"Nothing selected"),e&&(e.disabled=!n)}async function j0(){const n=window._bpItems.filter(e=>e.sel);if(!n.length){p("buildPreviewM").classList.remove("active");return}for(const e of n)await Se({id:Date.now().toString()+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"meal-plan"});p("buildPreviewM").classList.remove("active"),P(`Added ${n.length} item${n.length!==1?"s":""}! 🛒`)}function Yp(){const n=p("deals-zip-banner");if(!n)return;const e=h.cfg.zipcode;e?(n.innerHTML=`📍 Searching deals near <strong>${e}</strong> <span style="font-size:.72rem;color:var(--mt)">(change in Settings)</span>`,n.style.borderColor="var(--b2)"):(n.innerHTML=`⚠️ Set your zipcode in <strong style="cursor:pointer;color:var(--ac)" onclick="hideOv('');showOv('settings')">Settings</strong> to find local deals near you.`,n.style.borderColor="var(--am)")}function Wa(n,e){const t=p("dealslist");if(!n||!n.length){t.innerHTML=`<div class="es"><div class="ei">🏷</div><p>No deals found for <strong>${e}</strong>.<br>Try a different search term or check back later for new circulars.</p></div>`;return}t.innerHTML="",n.forEach(i=>{const s=document.createElement("div");s.className="deal-card"+(i.onSale?" deal-match":"");const r=document.createElement("div");r.style.flex="1";const o=document.createElement("div");o.className="deal-store",o.textContent=i.store||"Store";const c=document.createElement("div");if(c.className="deal-name",c.textContent=i.name||"",i.brand||i.size){const m=document.createElement("div");m.style.cssText="font-size:.72rem;color:var(--mt);margin-top:1px",m.textContent=[i.brand,i.size].filter(Boolean).join(" · "),r.appendChild(o),r.appendChild(c),r.appendChild(m)}else r.appendChild(o),r.appendChild(c);const u=document.createElement("div");if(u.style.cssText="display:flex;align-items:baseline;gap:6px;margin-top:4px;flex-wrap:wrap",i.sale_price){const m=document.createElement("span");m.className="deal-price",m.textContent=i.sale_price,u.appendChild(m)}if(i.onSale&&i.regular){const m=document.createElement("span");m.className="deal-orig",m.textContent=i.regular,u.appendChild(m)}if(i.savings){const m=document.createElement("span");m.className="deal-badge",m.textContent="Save "+i.savings,u.appendChild(m)}r.appendChild(u);const d=document.createElement("button");d.className="btn bs bsm",d.style.cssText="align-self:center;flex-shrink:0;margin-left:8px",d.textContent="+ List",(m=>{d.onclick=()=>Xp(m)})(i.name||""),s.appendChild(r),s.appendChild(d),t.appendChild(s)})}function Ga(n){const e=p("deals-stores");!e||!n||!n.length||(e.style.display="block",e.innerHTML='<div style="font-size:.72rem;color:var(--mt);font-weight:600;margin-bottom:4px">Stores with deals</div>'+n.map(t=>`<div style="font-size:.74rem;color:var(--tx2);padding:2px 0">${t.name}</div>`).join(""))}function Xp(n){const e=(n||"").replace(/&#39;/g,"'");h.shop.find(t=>t.name.toLowerCase()===e.toLowerCase())?P("Already on your list!"):(Se({id:Date.now().toString(),name:e,qty:1,checked:!1,src:"deal"}),P(e+" added!"))}async function Ka(n){const e=h.cfg.zipcode;if(!e)throw new Error("Set your zipcode in Settings to search for local deals.");const t="ks-deals-"+e+"-"+n.toLowerCase().replace(/\s+/g,"_").substring(0,40),i=je(t);if(i&&i.ts&&Date.now()-i.ts<72e5)return i;const s=await fetch("/api/deals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({zipcode:e,query:n})}),r=await s.json();if(!s.ok||r.error)throw new Error(r.message||r.error||"Deals API request failed");return ut(t,{...r,ts:Date.now()}),r}async function B0(){const n=p("dealsearch").value.trim();if(!n){P("Enter something to search");return}const e=p("dealsstatus");e.style.display="block",e.style.color="var(--mt)",e.textContent="🔍 Searching deals for "+n+" near "+(h.cfg.zipcode||"your area")+"…",p("dealslist").innerHTML="";try{const t=await Ka(n);if(e.style.display="none",t.message){p("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${t.message}</p></div>`;return}t.stores&&Ga(t.stores),Wa(t.deals,n)}catch(t){e.style.color="var(--rd)",e.textContent=t.message||"Unknown error"}}async function H0(){const n=h.shop.filter(i=>!i.checked);if(!n.length){const i=Object.values(h.mp).filter(Boolean);if(!i.length){P("Add items to your list first!");return}if(!confirm(`Your list is empty. Search deals for this week's meals?

`+i.join(", ")))return;const r=p("dealsstatus");r.style.display="block",r.textContent="Searching deals for your meal plan...",p("dealslist").innerHTML="";try{const o=await Ka(i.join(", "));if(r.style.display="none",o.message){p("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${o.message}</p></div>`;return}o.stores&&Ga(o.stores),Wa(o.deals,i.join(", "))}catch(o){r.style.color="var(--rd)",r.textContent=o.message}return}const e=p("dealsstatus"),t=n.slice(0,8).map(i=>i.name).join(", ");e.style.display="block",e.style.color="var(--mt)",e.textContent="Searching deals for: "+t+"...",p("dealslist").innerHTML="";try{const i=await Ka(t);if(e.style.display="none",i.message){p("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${i.message}</p></div>`;return}i.stores&&Ga(i.stores),i.deals.length?Wa(i.deals,t):p("dealslist").innerHTML='<div class="es"><div class="ei">🏷</div><p>No deals found for your list items.<br/>Try searching for individual items.</p></div>'}catch(i){e.style.color="var(--rd)",e.textContent=i.message}}function Gc(n){return n?n.replace(/\S+/g,e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()):""}function Kc(n){if(!n.brand)return!1;if(n.source==="scan"||n.source==="Barcode")return!0;if(n.source==="search"&&n.searchQuery){const e=n.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),t=n.brand.toLowerCase();return e.some(i=>t.includes(i))}return!1}function sr(n){fc[Fn(n)];const e=n.image?`<img src="${n.image}" class="sh-thumb" alt="" onerror="this.style.display='none'"/>`:"",t=nt(n.expiry),i=t?t.c==="expired"?" expired":t.c==="expiring"?" expiring":"":"",s=t?`<div class="etag ${t.c}">${t.l}</div>`:"",r=Kc(n)?`<div class="sh-brand">${n.brand}</div>`:"";return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="inv">
    <div class="swipe-inner">
      <div class="iit${i}" onclick="swipeRowTap('${n.id}','inv')">
        <div class="sel-cb">✓</div>
        <!-- Slim outlined circle: tapping opens detail sheet -->
        <div class="shck" onclick="event.stopPropagation();openInvItemDetail('${n.id}')"></div>
        ${e}
        <div style="flex:1;min-width:0;cursor:pointer" onclick="event.stopPropagation();openInvItemDetail('${n.id}')">
          <div class="inm">${Gc(n.name)}</div>
          ${r}
          ${n.note?`<div class="shnote" style="margin-top:2px">📝 ${n.note}</div>`:""}
          ${s}
        </div>
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
  </div>`}function go(){const n=(s,r)=>s.name.localeCompare(r.name),e=(h.it==="all"||h.it==="cat"?h.inv:h.inv.filter(s=>s.location===h.it)).slice().sort(n),t=p("isub");t&&(t.textContent=e.length+" "+({all:"items",fridge:"fridge items",freezer:"frozen items",pantry:"pantry items",cat:"items by type"}[h.it]||"items")),Ip();const i=p("ibody");if(i){if(!e.length){i.innerHTML='<div class="es"><div class="ei">🧺</div><p>No items here yet.<br/>Tap Scan or Add to get started.</p></div>';return}if(h.it==="cat"){const s={};e.forEach(r=>{const o=Fn(r);s[o]||(s[o]=[]),s[o].push(r)}),i.innerHTML=Object.entries(s).sort((r,o)=>r[0].localeCompare(o[0])).map(([r,o])=>`<div class="lgrp"><div class="lgt">${fc[r]||"📦"} ${r}</div><div class="ilst">${o.map(sr).join("")}</div></div>`).join(""),h.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(r=>{r.classList.add("selecting"),h.selectedIds.has(r.dataset.id)&&r.classList.add("selected")});return}if(h.it==="all"){const s=h.inv.filter(o=>{const c=nt(o.expiry);return c&&(c.c==="expiring"||c.c==="expired")}).sort((o,c)=>new Date(o.expiry)-new Date(c.expiry)),r=s.length?`<div class="lgrp"><div class="lgt" style="color:var(--am)">⚠️ Expiring Soon</div><div class="ilst">${s.map(sr).join("")}</div></div>`:"";i.innerHTML=r+["fridge","freezer","pantry"].map(o=>{const c=e.filter(u=>u.location===o);return c.length?`<div class="lgrp"><div class="lgt">${eo(o)}</div><div class="ilst">${c.map(sr).join("")}</div></div>`:""}).join(""),h.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(o=>{o.classList.add("selecting"),h.selectedIds.has(o.dataset.id)&&o.classList.add("selected")});return}i.innerHTML=`<div class="ilst">${e.map(sr).join("")}</div>`,h.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(s=>{s.classList.add("selecting"),h.selectedIds.has(s.dataset.id)&&s.classList.add("selected")})}}function z0(n){const e=h.inv.find(r=>r.id===n);if(!e)return;h.adjId=n;const t=fc[Fn(e)]||"🛒",i=e.image?`<img src="${e.image}" class="pimg" onerror="this.style.display='none'"/>`:`<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">${t}</div>`,s=Kc(e)?`<div class="pbr">${e.brand}</div>`:"";p("adjbody").innerHTML=`<div class="pcard"><div class="phdr">${i}<div style="flex:1"><div class="pnm">${Gc(e.name)}</div>${s}<div style="font-size:.7rem;color:var(--mt);margin-top:2px">Added ${e.addedAt}</div></div></div><div class="frow" style="margin-top:14px"><label class="flbl">Location</label><div class="lpick"><button class="lbtn ${e.location==="fridge"?"sel":""}" onclick="updL('fridge',this)">🌡 Fridge</button><button class="lbtn ${e.location==="freezer"?"sel":""}" onclick="updL('freezer',this)">🧊 Freezer</button><button class="lbtn ${e.location==="pantry"?"sel":""}" onclick="updL('pantry',this)">🥫 Pantry</button></div></div><div class="qrow"><span class="qlbl">Quantity</span><div class="qctl"><button class="qbtn" onclick="adjQ(-1)">−</button><input class="qinp" id="adjqty" type="number" min="0" value="${e.qty}" oninput="adjQD()"/><button class="qbtn" onclick="adjQ(1)">+</button></div></div><div class="frow"><label class="flbl">Expiry Date <span class="otag">optional</span></label><input class="fd" id="adjexp" type="date" value="${e.expiry||""}" onchange="adjE()"/></div><div class="frow"><label class="flbl">Notes <span class="otag">optional</span></label><textarea class="sh-note-inp" id="adjnote" rows="2" placeholder="Brand, store, reminders…" onblur="adjNote()">${e.note||""}</textarea></div><div class="qrow"><span class="qlbl">Low stock alert at</span><div class="qctl"><button class="qbtn" onclick="adjLowThresh(-1)">−</button><input class="qinp" id="adjlowthresh" type="number" min="0" value="${e.lowStockThreshold||1}" oninput="adjLowThreshD()"/><button class="qbtn" onclick="adjLowThresh(1)">+</button></div></div></div>`,p("rembtn").onclick=()=>Qc(n),Lt("adj")}async function Vn(n){if(h.selectMode)return;const e=h.inv.find(y=>y.id===n);if(!e)return;const t=p("invItemDetailContent");if(!t)return;let i=e.image;if(e.imageDismissed,h.hid&&e.name){const y=ze(e.name);if(y){const w=await ie(`households/${h.hid}/customProducts/${y}`);w&&(w.imageDismissed?i=null:w.imageUrl&&(i=w.imageUrl))}}const s=i?`<div class="item-detail-img-wrap drop-zone" data-item-id="${e.id}" data-list="inv">
        <img src="${i}" class="item-detail-img" alt="" onerror="this.style.display='none'"/>
        <button class="item-detail-img-del" onclick="deleteInvItemImage('${e.id}')" title="Remove image">×</button>
      </div>`:`<div class="item-detail-img-ph drop-zone" data-item-id="${e.id}" data-list="inv" onclick="triggerInvPhotoUpload('${e.id}')" style="cursor:pointer">
        <div style="text-align:center">
          <div style="font-size:1.3rem;margin-bottom:2px;opacity:.45">📷</div>
          <div style="font-size:.6rem;color:var(--mt);opacity:.7">Add photo</div>
        </div>
      </div>`,r=i?`<div class="item-detail-change-photo" onclick="triggerInvPhotoUpload('${e.id}')">Change photo</div>`:"",o=Kc(e);let c=`<div class="item-detail-header">
    <div>${s}${r}</div>
    <div style="flex:1;min-width:0">
      <div class="item-detail-name">${Gc(e.name)}</div>
      ${o?`<div class="item-detail-brand">${e.brand}</div>`:""}
      <div style="font-size:.7rem;color:var(--mt);margin-top:4px">${eo(e.location)}</div>
    </div>
  </div>
  <!-- Hidden file input for product photo uploads — triggered by Add/Change photo buttons -->
  <input type="file" id="invProductPhotoInput" accept="image/*" style="display:none"
    onchange="handleInvPhotoSelected('${e.id}')" />`;if(c+=`<div class="item-detail-section">
    <div class="item-detail-label">Quantity</div>
    <div class="item-detail-value">${e.qty} ${e.unit||"unit"}</div>
  </div>`,e.expiry){const y=nt(e.expiry);c+=`<div class="item-detail-section">
      <div class="item-detail-label">Expiry</div>
      <div class="item-detail-value">${e.expiry}${y?` <span class="etag ${y.c}" style="margin-left:6px">${y.l}</span>`:""}</div>
    </div>`}e.note&&(c+=`<div class="item-detail-section">
      <div class="item-detail-label">Note</div>
      <div class="item-detail-value">${e.note}</div>
    </div>`),c+=`<div style="display:flex;gap:8px;margin-top:12px">
    <button class="btn bs bf" onclick="closeInvItemDetail();openAdj('${e.id}')" style="flex:1">⚙️ Adjust</button>
    <button class="btn bd bf" onclick="closeInvItemDetail();remItem('${e.id}')" style="flex:1">Remove</button>
  </div>
  <button class="btn bs bf" onclick="closeInvItemDetail()" style="margin-top:8px">Close</button>`,t.innerHTML=c;const u=p("invItemDetailBackdrop"),d=p("invItemDetailSheet");u&&u.classList.add("active"),d&&d.classList.add("active");const m=t.querySelector(".drop-zone");m&&W0(m,e.id)}function q0(){const n=p("invItemDetailBackdrop"),e=p("invItemDetailSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}function W0(n,e){let t=0;n.addEventListener("dragenter",i=>{i.preventDefault(),i.stopPropagation(),t++,n.classList.add("drop-zone-active")}),n.addEventListener("dragover",i=>{i.preventDefault(),i.stopPropagation()}),n.addEventListener("dragleave",i=>{i.preventDefault(),i.stopPropagation(),t--,t<=0&&(t=0,n.classList.remove("drop-zone-active"))}),n.addEventListener("drop",i=>{i.preventDefault(),i.stopPropagation(),t=0,n.classList.remove("drop-zone-active"),G0(i.dataTransfer,e)})}async function G0(n,e){const t=h.inv.find(c=>c.id===e);if(!t)return;if(n.files&&n.files.length>0){const c=n.files[0];if(c.type&&c.type.startsWith("image/")){await Zp(c,t);return}}const i=n.getData("text/uri-list"),s=n.getData("text/plain"),r=i||s||"";if(r&&/^https?:\/\/.+\.(jpe?g|png|gif|webp|bmp)/i.test(r)){await Wd(r,t);return}const o=n.getData("text/html");if(o){const c=o.match(/<img[^>]+src=["']([^"']+)["']/i);if(c&&c[1]&&/^https?:\/\//.test(c[1])){await Wd(c[1],t);return}}console.warn("[InvDropZone] Dropped data didn't contain a usable image")}async function Zp(n,e){const t=p("invItemDetailContent");if(t){const i=t.querySelector(".item-detail-img-wrap, .item-detail-img-ph");i&&(i.innerHTML=`<div style="text-align:center;padding:16px 0">
        <div style="font-size:1.2rem">⏳</div>
        <div style="font-size:.65rem;color:var(--mt);margin-top:2px">Uploading…</div>
      </div>`)}try{const i=await po(n,e.name),s={...e,image:i,imageDismissed:!1};await be(s),em(e.name,i),P("Photo saved ✓"),Vn(e.id)}catch(i){console.error("[InvDropZone] Upload failed:",i),P("Upload failed — try again"),Vn(e.id)}}async function Wd(n,e){const t=p("invItemDetailContent");if(t){const i=t.querySelector(".item-detail-img-wrap, .item-detail-img-ph");i&&(i.innerHTML=`<div style="text-align:center;padding:16px 0">
        <div style="font-size:1.2rem">⏳</div>
        <div style="font-size:.65rem;color:var(--mt);margin-top:2px">Fetching image…</div>
      </div>`)}try{const i=await fetch(n);if(!i.ok)throw new Error(`HTTP ${i.status}`);const s=await i.blob();if(!s.type||!s.type.startsWith("image/"))throw new Error("Fetched resource is not an image");const r=new File([s],"dropped-image.jpg",{type:s.type});await Zp(r,e)}catch(i){console.warn("[InvDropZone] Could not fetch dropped image URL:",i),P("Couldn't load that image — try saving it first"),Vn(e.id)}}function em(n,e){if(!h.hid||!n)return;const t=ze(n);t&&K(`households/${h.hid}/customProducts/${t}`,{name:n.trim(),imageUrl:e,imageDismissed:!1,updatedAt:new Date().toISOString()}).catch(i=>console.warn("Failed to save custom product image:",i))}async function K0(n){const e=h.inv.find(i=>i.id===n);if(!e)return;const t={...e,image:null,imageDismissed:!0};if(await be(t),h.hid&&e.name){const i=ze(e.name);i&&K(`households/${h.hid}/customProducts/${i}`,{name:e.name.trim(),imageDismissed:!0,imageUrl:null,updatedAt:new Date().toISOString()}).catch(s=>console.warn("Failed to save imageDismissed to customProducts:",s))}Vn(n)}function Q0(n){window._invUploadTargetId=n;const e=document.getElementById("invProductPhotoInput");e&&(e.value="",e.click())}async function J0(n){const e=document.getElementById("invProductPhotoInput");if(!e||!e.files||!e.files[0])return;const t=e.files[0],i=h.inv.find(r=>r.id===n);if(!i)return;const s=p("invItemDetailContent");if(s){const r=s.querySelector(".item-detail-img-wrap, .item-detail-img-ph");r&&(r.innerHTML=`<div style="text-align:center;padding:16px 0">
        <div style="font-size:1.2rem">⏳</div>
        <div style="font-size:.65rem;color:var(--mt);margin-top:2px">Uploading…</div>
      </div>`)}try{const r=await po(t,i.name),o={...i,image:r,imageDismissed:!1};await be(o),em(i.name,r),P("Photo saved ✓"),Vn(n)}catch(r){console.error("Inventory photo upload failed:",r),P("Upload failed — try again"),Vn(n)}}async function Qc(n){const e=h.inv.find(t=>t.id===n);if(e){const t=nt(e.expiry);t&&(t.c==="expired"||t.c==="expiring")&&await c_(e.name)}await Zr(n),P("Item removed"),ke("adj")}async function Y0(n,e){const t=h.inv.find(i=>i.id===h.adjId);t&&(document.querySelectorAll("#adjbody .lbtn").forEach(i=>i.classList.remove("sel")),e.classList.add("sel"),await be({...t,location:n}))}async function X0(n){const e=h.inv.find(i=>i.id===h.adjId);if(!e)return;const t=Math.max(0,e.qty+n);if(p("adjqty").value=t,t===0){await Qc(h.adjId);return}await be({...e,qty:t})}async function Z0(){const n=h.inv.find(t=>t.id===h.adjId);if(!n)return;const e=parseInt(p("adjqty").value);!isNaN(e)&&e>=0&&await be({...n,qty:e})}async function eS(){const n=h.inv.find(e=>e.id===h.adjId);n&&await be({...n,expiry:p("adjexp").value||null})}async function tS(){const n=h.inv.find(t=>t.id===h.adjId);if(!n)return;const e=(p("adjnote").value||"").trim();await be({...n,note:e||null})}async function nS(n){const e=h.inv.find(i=>i.id===h.adjId);if(!e)return;const t=Math.max(0,(e.lowStockThreshold||1)+n);p("adjlowthresh").value=t,await be({...e,lowStockThreshold:t})}async function iS(){const n=h.inv.find(t=>t.id===h.adjId);if(!n)return;const e=parseInt(p("adjlowthresh").value);!isNaN(e)&&e>=0&&await be({...n,lowStockThreshold:e})}function sS(n){h.it=n,document.querySelectorAll(".itab").forEach(t=>t.classList.remove("active"));const e=p("itab-"+n);e&&e.classList.add("active"),go()}async function rS(){const n=p("man").value.trim();if(!n)return;const e=p("mac").value,t=p("mau").value.trim()||"unit",i=Math.max(1,parseInt(p("maq").value)||1),s=p("mae").value||null,r="itm-"+n.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now();await be({id:r,barcode:r,name:n,brand:"",unit:t,qty:i,location:h.maL,category:e,image:null,source:"Manual",expiry:s,addedAt:new Date().toLocaleDateString()}),p("man").value="",p("maq").value=1,p("mae").value="",p("mabtn").disabled=!0,P(`${n} added!`),ke("madd"),mo(r,n,"inv")}function oS(){p("mabtn").disabled=!p("man").value.trim()}function aS(n){const e=p("maq");e.value=Math.max(1,(parseInt(e.value)||1)+n)}function cS(n,e){h.maL=n,document.querySelectorAll("#ov-madd .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}async function lS(){const n=p("imptxt").value.trim();if(!n)return;let e=0,t=0,i="pantry";for(const s of n.split(`
`)){const r=s.toLowerCase();r.includes("fridge")?i="fridge":r.includes("freezer")?i="freezer":r.includes("pantry")&&(i="pantry");const o=s.match(/^\|\s*([^|]+?)\s*\|\s*(\d+(?:\.\d+)?)\s*\|\s*([^|]+?)\s*\|/),c=s.match(/^[-*]\s+(.+?):\s*(\d+(?:\.\d+)?)\s*([a-zA-Z%\/]+.*)?$/);let u,d,m;if(o?(u=o[1].trim(),d=parseFloat(o[2]),m=o[3].trim()):c&&(u=c[1].trim(),d=parseFloat(c[2]),m=(c[3]||"unit").trim()),u&&d&&u!=="Item"&&u!=="---"&&!u.startsWith("-")){const y="item-imp-"+u.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),w=h.inv.find(C=>C.id===y);await be({id:y,barcode:y,name:u,brand:"",unit:m||"unit",qty:d,location:i,category:"Imported",image:null,source:"Imported",expiry:null,addedAt:w?w.addedAt:new Date().toLocaleDateString()}),w?t++:e++}}p("imptxt").value="",P(`Imported ${e} new, updated ${t}`),ke("import")}let us=null,tn=null,yo="fridge",Je=null,ua=!1,rr="",da=!1;const qi=new Map,uS=300*1e3,dS=30;function hS(){const n=p("invAddBackdrop"),e=p("invAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),yo="fridge",document.querySelectorAll("#invAddSheet .lbtn").forEach(i=>i.classList.remove("sel"));const t=p("invAddLoc-fridge");t&&t.classList.add("sel"),setTimeout(()=>{const i=p("invi");i&&(i.value="",i.focus())},150)}function Ds(){const n=p("invAddBackdrop"),e=p("invAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),Jc()}function fS(){Ds(),window.openScanForInventory&&window.openScanForInventory()}function pS(){Ds(),tm()}function mS(n,e){yo=n,document.querySelectorAll("#invAddSheet .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function gS(){const n=p("invAddNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=p("invAddNoteInp");t&&t.focus()}}function yS(){const n=p("invi"),e=n?n.value.trim():"";if(!e)return;let t=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||1):s&&(t=s[2].trim(),i=parseInt(s[1],10)||1);const o=p("invAddNoteInp"),c=o?o.value.trim():"",u="itm-"+t.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),d={id:u,barcode:u,name:t,brand:"",unit:"unit",qty:i,location:yo,category:Fn({name:t}),image:null,source:"Manual",expiry:null,addedAt:new Date().toLocaleDateString()};c&&(d.note=c),be(d),P(`${t} added!`),n&&(n.value=""),o&&(o.value="");const m=p("invAddNoteWrap");m&&(m.style.display="none"),Jc(),Ds(),mo(u,t,"inv")}function vS(){us&&clearTimeout(us);const n=p("invi"),e=n?n.value.trim():"",t=p("invSearchDropdown");if(!e||e.length<2){t&&(t.classList.remove("active"),t.innerHTML=""),tn=null;return}us=setTimeout(()=>TS(e),350)}function wS(n){if(!n)return"NONE";const e=n.toLowerCase();return e.includes("kroger.com")?"Kroger (real product)":e.includes("img.spoonacular.com/products")?"Spoonacular product (real photo)":e.includes("img.spoonacular.com/ingredients")?"Spoonacular ingredient (illustration)":e.includes("openfoodfacts.org")?"Open Food Facts (real photo)":e.includes("edamam")?"Edamam":"Other: "+new URL(n).hostname}function Gd(n){const e=p("invSearchDropdown");!e||!n.length||(tn=n,n.forEach((t,i)=>{const s=wS(t.image);console.log(`[InvDropdown] #${i} "${t.name}" → image: ${s} | url: ${t.image||"(none)"} | score: ${t._score}`)}),e.innerHTML=n.map((t,i)=>{const s=t.image?`<img src="${t.image}" class="enrich-img" alt="" onerror="this.outerHTML='<div class=\\'enrich-img-ph\\'>🛒</div>'">`:'<div class="enrich-img-ph">🛒</div>',r=t.category&&t.category!=="General"?`<div class="enrich-cat">${t.category}</div>`:"";return`<div class="enrich-row" onclick="pickInvInlineResult(${i})">
      ${s}
      <div class="enrich-text">
        <div class="enrich-name">${t.name}</div>
        ${r}
      </div>
    </div>`}).join(""),e.classList.add("active"))}async function _S(n){if(!h.hid||!n)return null;const e=ze(n);if(!e)return null;const t=await ie(`households/${h.hid}/customProducts/${e}`);return!t||t.imageDismissed||!t.imageUrl?null:{name:n.trim().replace(/\b\w/g,s=>s.toUpperCase()),image:t.imageUrl,brand:"",category:t.category||"",source:"customProduct",_score:100}}async function bS(n){const e=n.toLowerCase(),t=qi.get(e);if(t&&Date.now()-t.ts<uS)return t.scored;const i=h.hid?`&hid=${encodeURIComponent(h.hid)}`:"";let o=(await(await fetch(`/api/text-search?q=${encodeURIComponent(n)}${i}`)).json()).results||[];const c=n.toLowerCase().split(/\s+/).filter(d=>d.length>=2);o=o.filter(d=>{const m=(d.name||"").toLowerCase();return c.some(y=>m.includes(y))});const u=o.map(d=>({...d,_score:qp(d.name||"",n)})).filter(d=>d._score>=15).sort((d,m)=>m._score-d._score).slice(0,5);return qi.set(e,{scored:u,ts:Date.now()}),qi.size>dS&&qi.delete(qi.keys().next().value),u}async function TS(n){const e=p("invSearchDropdown");if(e){e.innerHTML='<div class="search-hint">Searching…</div>',e.classList.add("active");try{const t=_S(n),i=bS(n),s=await t;s&&(p("invi")?p("invi").value.trim():"").toLowerCase()===n.toLowerCase()&&(console.log(`[InvSearch] Instant custom product match for "${n}"`),Gd([s]));const r=await i;if((p("invi")?p("invi").value.trim():"").toLowerCase()!==n.toLowerCase())return;let c=r;if(s){const u=ze(s.name),d=r.filter(m=>ze(m.name)!==u);c=[s,...d].slice(0,5)}if(!c.length){e.classList.remove("active"),e.innerHTML="",tn=null;return}Gd(c)}catch(t){console.warn("Inventory inline search failed:",t),e.classList.remove("active"),e.innerHTML="",tn=null}}}function IS(n){if(!tn||!tn[n])return;const e=tn[n],t=p("invAddNoteInp"),i=t?t.value.trim():"",s="itm-"+(e.name||"item").toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),r={id:s,barcode:s,name:e.name,brand:e.brand||"",unit:"unit",qty:1,location:yo,category:e.category||Fn({name:e.name}),image:e.image||null,source:e.source||"search",expiry:null,addedAt:new Date().toLocaleDateString()};i&&(r.note=i),be(r),P(`Added "${e.name}" ✓`);const o=p("invi");o&&(o.value=""),t&&(t.value="");const c=p("invAddNoteWrap");c&&(c.style.display="none"),Jc(),Ds()}function Jc(){us&&clearTimeout(us),tn=null;const n=p("invSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}function ES(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=p("invAddMicOpt");e&&(e.style.display="")}function Kd(n){const e=p("inv-micstatus");e&&e.classList.toggle("visible",n)}function tm(){if(ua&&Je){da=!0,Je.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){P("Voice input not supported");return}Je=new n,Je.lang="en-US",Je.interimResults=!0,Je.maxAlternatives=1,Je.continuous=!1,rr="",ua=!0,Kd(!0),Je.onresult=e=>{let t="";for(let s=e.resultIndex;s<e.results.length;s++){const r=e.results[s][0].transcript;e.results[s].isFinal?rr+=r:t+=r}const i=p("invi");i&&(i.value=(rr+t).trim())},Je.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&P("Couldn't hear that — try again")},Je.onend=()=>{ua=!1,Kd(!1),Je=null;let e=rr.trim();if(!e&&da){const r=p("invi");e=r?r.value.trim():""}if(da=!1,!e)return;const t="itm-"+e.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),i=pc(e);be({id:t,barcode:t,name:e,brand:"",unit:"unit",qty:1,location:i,category:Fn({name:e}),image:null,source:"Voice",expiry:null,addedAt:new Date().toLocaleDateString()}),P(`Added "${e}" to ${i}`);const s=p("invi");s&&(s.value=""),mo(t,e,"inv")},Je.start()}function nm(n){return[...document.querySelectorAll("#"+n+" .tag.sel")].map(e=>e.dataset.tag)}function im(n,e){document.querySelectorAll("#"+n+" .tag").forEach(t=>{t.classList.toggle("sel",(e||[]).includes(t.dataset.tag))})}function SS(n){n.classList.toggle("sel")}function AS(n){const e=Array.from({length:5},(o,c)=>`<span class="star${c<n.rating?" on":""}">${c<n.rating?"★":"☆"}</span>`).join(""),t=n.sourceUrl?`<a href="${n.sourceUrl}" target="_blank" onclick="event.stopPropagation()" style="font-size:.68rem;color:var(--ac);text-decoration:none;border:1px solid rgba(212,168,83,.3);border-radius:20px;padding:2px 8px;background:transparent">🔗 View original</a>`:n.source?`<span class="sbdg">${n.source}</span>`:"",i=n.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;max-height:140px"><img src="${n.imageUrl}" alt="" style="width:100%;height:140px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",s=[n.totalTime||n.cookTime?`⏱ ${n.totalTime||n.cookTime}`:"",n.servings?`🍽 ${n.servings} servings`:""].filter(Boolean),r=s.length?`<div style="display:flex;gap:6px;margin-top:6px;flex-wrap:wrap">${s.map(o=>`<span style="font-size:.68rem;color:var(--mt);background:var(--b1);border-radius:8px;padding:2px 8px">${o}</span>`).join("")}</div>`:"";return`<div class="rcd${n.favorited?" fav":""}" onclick="openER('${n.id}')">${i}<div class="rrow"><div class="rnm">${n.name}</div><div class="rfav" onclick="event.stopPropagation();togFav('${n.id}')">${n.favorited?"❤️":"🤍"}</div></div><div class="stars">${e}</div>${r}${n.description?`<div class="rnot" style="color:var(--tx2);margin-top:6px">${n.description.substring(0,100)}${n.description.length>100?"…":""}</div>`:""}${n.notes?`<div class="rnot">${n.notes}</div>`:""}<div class="rmeta"><span>${n.savedAt}</span>${t}</div></div>`}function kS(n){h.rt=n,document.querySelectorAll(".rtab").forEach(t=>t.classList.remove("active"));const e=p("rtab-"+n);e&&e.classList.add("active"),n==="community"?Xc():vo()}function vo(){if(h.rt==="community")return;let n=[...h.recs];h.rt==="fav"?n=n.filter(i=>i.favorited):h.rt==="top"?n=n.filter(i=>i.rating>=4).sort((i,s)=>s.rating-i.rating):h.rt==="quick"?n=n.filter(i=>(i.tags||[]).includes("Quick")||(i.tags||[]).includes("Under 30 min")):h.rt==="kid"?n=n.filter(i=>(i.tags||[]).includes("Kid-Friendly")):n=n.sort((i,s)=>new Date(s.savedAt||0)-new Date(i.savedAt||0));const e=p("rsub");e&&(e.textContent=n.length+" recipe"+(n.length!==1?"s":""));const t=p("rbody");if(t){if(!n.length){t.innerHTML=`<div class="es"><div class="ei">📖</div><p>${h.rt==="fav"?"No favorites yet!":h.rt==="top"?"No 4–5 star recipes yet.":h.rt==="quick"?"No quick recipes saved yet.":h.rt==="kid"?"No kid-friendly recipes yet.":"No recipes saved yet.<br/>Mark meals as cooked or tap + Add."}</p></div>`;return}t.innerHTML=n.map(AS).join("")}}async function CS(n){const e=h.recs.find(t=>t.id===n);e&&(await sn({...e,favorited:!e.favorited}),P(e.favorited?"Removed from favorites":"Added to favorites! ❤️"))}function RS(){p("savrecbtn").disabled=!p("rn").value.trim()}async function PS(){const n=p("rurl").value.trim();if(!n)return;const e=p("rurlstatus"),t=p("rimportbtn");e.style.display="block",e.style.color="var(--mt)",e.textContent="🤖 Importing recipe with AI…",t.disabled=!0;try{const s=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})})).json();if(!s.success){e.style.color="var(--rd)",e.textContent="⚠️ "+(s.error||"Couldn't import this recipe"),t.disabled=!1;return}const r=s.recipe,o=xS(r);p("rn").value=r.title||"",p("rd").value=o,p("rnotes").value=r.notes||"",p("rsourceurl").value=n,p("rcuisine")&&(p("rcuisine").value=r.cuisine||""),r.tags&&r.tags.length&&im("rtags",r.tags),p("savrecbtn").disabled=!r.title,LS(r.imageUrl),h._importedRecipe={ingredientsRaw:r.ingredients||[],stepsRaw:r.steps||[],imageUrl:r.imageUrl||null,prepTime:r.prepTime||"",cookTime:r.cookTime||"",totalTime:r.totalTime||"",servings:r.servings||""};const c=[r.prepTime?`Prep: ${r.prepTime}`:"",r.cookTime?`Cook: ${r.cookTime}`:"",r.servings?`Serves: ${r.servings}`:""].filter(Boolean);e.style.color="var(--gn)",e.textContent="✓ Recipe imported! "+(c.length?c.join(" · "):"Review and save.")}catch(i){console.error("importFromUrl:",i),e.style.color="var(--rd)",e.textContent="⚠️ Couldn't import — try copying the recipe text manually."}t.disabled=!1}function xS(n){const e=[];return n.description&&(e.push(n.description),e.push("")),n.ingredients&&n.ingredients.length&&(e.push("Ingredients:"),n.ingredients.forEach(t=>{if(typeof t=="string")e.push(`- ${t}`);else{const i=[t.amount,t.unit].filter(Boolean).join(" ");e.push(`- ${i?i+" ":""}${t.name}`)}}),e.push("")),n.steps&&n.steps.length&&(e.push("Steps:"),n.steps.forEach((t,i)=>{e.push(`${i+1}. ${t}`)})),e.join(`
`)}function LS(n){var s;const e=document.getElementById("rimgpreview");if(e&&e.remove(),!n)return;const t=(s=p("rurlstatus"))==null?void 0:s.parentElement;if(!t)return;const i=document.createElement("div");i.id="rimgpreview",i.style.cssText="margin:12px 0;border-radius:12px;overflow:hidden;background:var(--b1);max-height:200px;display:flex;align-items:center;justify-content:center",i.innerHTML=`<img src="${n}" alt="Recipe photo" style="width:100%;height:200px;object-fit:cover;border-radius:12px" onerror="this.parentElement.style.display='none'"/>`,t.after(i)}async function DS(){const n=p("rn").value.trim();if(!n)return;const e=p("rd").value.trim(),t=p("rsourceurl")?p("rsourceurl").value.trim():"",i=p("rcuisine")?p("rcuisine").value.trim():"",s=nm("rtags"),r=document.getElementById("rpubtoggle"),o=r?r.classList.contains("on"):!1,c=h._importedRecipe||{},u={id:"rec-"+Date.now(),name:n,rating:h.nr,favorited:!1,notes:p("rnotes").value.trim(),description:e,source:t?"AI Import":"Manual",sourceUrl:t||null,imageUrl:c.imageUrl||null,tags:s,cuisine:i,prepTime:c.prepTime||"",cookTime:c.cookTime||"",totalTime:c.totalTime||"",servings:c.servings||"",ingredientsRaw:c.ingredientsRaw||[],stepsRaw:c.stepsRaw||[],cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:o};if(await sn(u),o){const y=ce(),w=(y==null?void 0:y.displayName)||localStorage.getItem("ks-who")||"Anonymous";await lf(u,w,h.hid)}p("rn").value="",p("rnotes").value="",p("rd").value="",p("rsourceurl").value="",p("rurl").value="",p("rcuisine")&&(p("rcuisine").value=""),im("rtags",[]),h.nr=0,h._importedRecipe=null,p("savrecbtn").disabled=!0,is("rstars",0);const d=document.getElementById("rimgpreview");d&&d.remove(),r&&r.classList.remove("on");const m=p("rurlstatus");m&&(m.style.display="none",m.textContent=""),P("Recipe saved! 📖"),ke("arec")}function NS(n){const e=h.recs.find(d=>d.id===n);if(!e)return;h.eid=n;const t=e.rating||0,i=Array.from({length:5},(d,m)=>`<span class="star${m<t?" on":""}" onclick="setStar(${m+1},'e')">${m<t?"★":"☆"}</span>`).join(""),s=e.sourceUrl?`<div class="frow"><label class="flbl">Original</label><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);word-break:break-all">${e.sourceUrl}</a></div>`:"",r=`<div class="frow"><label class="flbl">Tags</label><div class="tags" id="etags">
    <div class="tag${(e.tags||[]).includes("Quick")?" sel":""}" data-tag="Quick" onclick="togTag(this)">⚡ Quick</div>
    <div class="tag kid${(e.tags||[]).includes("Kid-Friendly")?" sel":""}" data-tag="Kid-Friendly" onclick="togTag(this)">👶 Kid-Friendly</div>
    <div class="tag date${(e.tags||[]).includes("Date Night")?" sel":""}" data-tag="Date Night" onclick="togTag(this)">🕯 Date Night</div>
    <div class="tag batch${(e.tags||[]).includes("Batch Cook")?" sel":""}" data-tag="Batch Cook" onclick="togTag(this)">📦 Batch Cook</div>
    <div class="tag${(e.tags||[]).includes("Healthy")?" sel":""}" data-tag="Healthy" onclick="togTag(this)">🥗 Healthy</div>
    <div class="tag${(e.tags||[]).includes("Under 30 min")?" sel":""}" data-tag="Under 30 min" onclick="togTag(this)">⏱ Under 30 min</div>
  </div></div>`,o=e.imageUrl?`<div style="margin:-16px -16px 16px;border-radius:0;overflow:hidden;max-height:220px"><img src="${e.imageUrl}" alt="" style="width:100%;height:220px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",c=[e.prepTime?`Prep: ${e.prepTime}`:"",e.cookTime?`Cook: ${e.cookTime}`:"",e.totalTime?`Total: ${e.totalTime}`:"",e.servings?`Serves: ${e.servings}`:""].filter(Boolean),u=c.length?`<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px">${c.map(d=>`<span style="font-size:.74rem;color:var(--mt);background:var(--b1);border-radius:8px;padding:4px 10px">${d}</span>`).join("")}</div>`:"";p("erecbody").innerHTML=`
    ${o}
    ${u}
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
    <div class="brow"><button class="btn bd" style="flex:1" onclick="delER()">Delete</button><button class="btn bp" style="flex:2" onclick="updR()">Save</button></div>`,Lt("erec")}async function OS(){const n=h.recs.find(s=>s.id===h.eid);if(!n)return;const e=[...document.querySelectorAll("#estars .star")].filter(s=>s.classList.contains("on")).length,t=nm("etags"),i=p("ecuis")?p("ecuis").value.trim():n.cuisine||"";await sn({...n,name:p("ern").value.trim(),rating:e,description:p("erd").value.trim(),notes:p("erno").value.trim(),favorited:p("etog").classList.contains("on"),tags:t,cuisine:i}),P("Recipe updated!"),ke("erec")}async function MS(){confirm("Delete this recipe?")&&(await u_(h.eid),P("Deleted"),ke("erec"))}async function $S(n){const e=p("erd");if(!e)return;const t=e.value.trim();if(!t){P("No ingredients to scale");return}const i=p("scaleStatus");i.style.display="block",i.style.color="var(--mt)",i.textContent=`⏳ Scaling to ${n}× with Claude…`;try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Scale ALL ingredient quantities in this recipe by ${n}x. Return ONLY the updated recipe text with scaled quantities. Keep the same format. Do not add any explanation.

${t}`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"";o?(e.value=o.trim(),i.style.color="var(--gn)",i.textContent=`✓ Scaled to ${n}×`):(i.style.color="var(--rd)",i.textContent="Couldn't scale — try again")}catch{i.style.color="var(--rd)",i.textContent="Couldn't reach Claude — check connection"}}async function VS(){const n=p("rsub");n&&(n.textContent="Thinking…");const e=h.inv.map(s=>`${s.name} (${s.qty} ${s.unit})`).join(", "),t=h.recs.map(s=>s.name).join(", "),i=[h.cfg.nopork?"no pork":null,h.cfg.noshellfish?"no shellfish":null,h.cfg.vegetarian?"vegetarian":null,h.cfg.glutenfree?"gluten-free":null,h.cfg.other||null].filter(Boolean).join(", ");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Based on this exact inventory: ${e}
Restrictions: ${i||"none"}
Saved recipes: ${t||"none"}
Suggest 5 complete meals I can make RIGHT NOW with no extra shopping. Be specific with names. Format as a numbered list.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",c=p("rbody");c&&(c.innerHTML=`<div style="background:var(--card);border:1px solid var(--ac);border-radius:14px;padding:16px;margin-bottom:12px"><div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ac);margin-bottom:10px">🔍 Make right now — no shopping needed</div><div style="font-size:.88rem;line-height:1.8;color:var(--tx2)">${I_(o)}</div><button class="btn bs bsm" style="margin-top:12px;width:100%" onclick="setRT('all')">← Back to recipes</button></div>`),n&&(n.textContent="Based on your inventory")}catch{n&&(n.textContent="Couldn't reach Claude")}}async function US(n){const e=h.recs.find(t=>t.id===n);if(!e||!e.description){P("No ingredients listed");return}P("Parsing ingredients…");try{const t=h.inv.map(u=>u.name.toLowerCase()),s=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:400,messages:[{role:"user",content:`Extract a list of ingredient names from this recipe description. Return ONLY a JSON array of strings, no markdown, no quantities, just clean ingredient names. Example: ["chicken","garlic","olive oil"]

Recipe: ${e.description}`}]})})).json(),r=(s.content&&s.content[0]&&s.content[0].text||"").replace(/```json|```/g,"").trim(),c=JSON.parse(r).filter(u=>!t.some(d=>d.includes(u.toLowerCase())||u.toLowerCase().includes(d)));if(!c.length){P("All ingredients already in pantry ✓");return}for(const u of c)await Se({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:u,qty:1,checked:!1,src:"recipe"});P(`Added ${c.length} ingredient${c.length!==1?"s":""} to shopping list 🛒`),ke("erec"),window.showScreen("shopping")}catch{P("Couldn't parse ingredients")}}function FS(n,e){h.nr=n,e==="r"?is("rstars",n):e==="c"?is("cstars",n):e==="e"&&is("estars",n)}async function jS(n){const e=h.recs.find(r=>r.id===n);if(!e)return;const t=!e.isPublic,i=ce(),s=(i==null?void 0:i.displayName)||localStorage.getItem("ks-who")||"Anonymous";t?(await lf(e,s,h.hid),P("Recipe shared with the community!")):(await uf(e.id),P("Recipe removed from community")),await sn({...e,isPublic:t})}let lt=null;function BS(n){if(!n)return 0;const e=n.toLowerCase();let t=0;const i=e.match(/(\d+)\s*(?:hr|hour)/),s=e.match(/(\d+)\s*min/);return i&&(t+=parseInt(i[1])*60),s&&(t+=parseInt(s[1])),t}function Yc(n,e){const t=Math.round(n||0),i=Array.from({length:5},(r,o)=>o<t?"★":"☆").join(""),s=e?`(${e})`:"";return`<span style="color:var(--ac);font-size:.74rem;letter-spacing:1px">${i}</span><span style="font-size:.68rem;color:var(--mt);margin-left:3px">${s}</span>`}async function Xc(){const n=p("rbody");if(n){n.innerHTML='<div class="es"><div class="ei">🌍</div><p>Loading community recipes…</p></div>',h.comPage=0;try{h.comRecs=await d_(),fn()}catch(e){console.error("loadCommunity:",e),n.innerHTML=`<div class="es"><div class="ei">⚠️</div><p>Couldn't load community recipes.</p></div>`}}}function HS(n){h.comCuisine=n,h.comPage=0,fn()}function zS(n){h.comSearch=n,h.comPage=0,fn()}function qS(n){h.comSort=n,h.comPage=0,fn()}function WS(n){const e=h.comTags.indexOf(n);e>=0?h.comTags.splice(e,1):h.comTags.push(n),h.comPage=0,fn()}function GS(n){h.comTime=n,h.comPage=0,fn()}function KS(n){h.comMinRating=parseInt(n)||0,h.comPage=0,fn()}function fn(){const n=p("rbody");if(!n)return;lt&&(lt.disconnect(),lt=null);let e=[...h.comRecs];if(h.comCuisine&&h.comCuisine!=="all"&&(e=e.filter(y=>(y.cuisine||"").toLowerCase().includes(h.comCuisine.toLowerCase())||(y.tags||[]).some(w=>w.toLowerCase().includes(h.comCuisine.toLowerCase())))),h.comSearch){const y=h.comSearch.toLowerCase();e=e.filter(w=>(w.title||"").toLowerCase().includes(y)||(w.tags||[]).join(" ").toLowerCase().includes(y)||(w.cuisine||"").toLowerCase().includes(y)||(w.authorUsername||"").toLowerCase().includes(y)||(w.authorName||"").toLowerCase().includes(y))}h.comTags.length&&(e=e.filter(y=>h.comTags.every(w=>(y.tags||[]).includes(w)))),h.comTime&&h.comTime!=="any"&&(e=e.filter(y=>{const w=BS(y.cookTime||y.totalTime);return w?h.comTime==="under30"?w<=30:h.comTime==="30to60"?w>30&&w<=60:h.comTime==="over60"?w>60:!0:!1})),h.comMinRating>0&&(e=e.filter(y=>(y.avgRating||0)>=h.comMinRating)),h.comSort==="popular"?e.sort((y,w)=>(w.likes||0)-(y.likes||0)):h.comSort==="rated"?e.sort((y,w)=>(w.avgRating||0)-(y.avgRating||0)):e.sort((y,w)=>new Date(w.createdAt||0)-new Date(y.createdAt||0));const i=e.slice(0,(h.comPage+1)*20),s=i.length<e.length,r=p("rsub");r&&(r.textContent=e.length+" community recipe"+(e.length!==1?"s":""));const c=[["all","All Cuisines"],["turkish","Turkish"],["mediterranean","Mediterranean"],["italian","Italian"],["mexican","Mexican"],["asian","Asian"],["american","American"],["indian","Indian"],["bangladeshi","Bangladeshi"],["japanese","Japanese"],["thai","Thai"],["french","French"],["korean","Korean"],["middle eastern","Middle Eastern"]].map(([y,w])=>`<option value="${y}"${h.comCuisine===y?" selected":""}>${w}</option>`).join(""),d=["Quick","Healthy","Kid-Friendly","Date Night","Batch Cook","Under 30 min"].map(y=>{const w=h.comTags.includes(y);return`<div class="com-tag${w?" com-tag-sel":""}" onclick="toggleComTag('${y}')" style="cursor:pointer;${w?"background:var(--ac);color:#fff;border-color:var(--ac)":""}">${y}</div>`}).join("");let m=`<div style="margin-bottom:14px">
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
  </div>`;if(!e.length){const y=h.comSearch||h.comCuisine!=="all"||h.comTags.length||h.comTime!=="any"||h.comMinRating>0;m+=`<div class="es"><div class="ei">🌍</div><p>${y?"No recipes match your filters.":"No community recipes yet. Be the first to share!"}</p></div>`,n.innerHTML=m;return}if(i.forEach(y=>{const w=(y.tags||[]).slice(0,3).map(L=>`<span class="com-tag">${L}</span>`).join(""),C=y.authorUsername?`@${y.authorUsername}`:y.authorName||"Anonymous",x=y.cookTime||y.totalTime||"",O=y.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${y.imageUrl}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"";m+=`<div class="rcd com-rcd" onclick="openComRecipe('${y.id}')">
      ${O}
      <div class="rrow">
        <div class="rnm" style="flex:1">${y.title||"Untitled"}</div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <span style="font-size:.78rem;color:var(--rd)">❤️ ${y.likes||0}</span>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-top:4px;flex-wrap:wrap">
        ${y.cuisine?`<span style="font-size:.72rem;color:var(--ac);font-weight:600">${y.cuisine}</span>`:""}
        ${y.avgRating||y.ratingCount?`<span>${Yc(y.avgRating,y.ratingCount)}</span>`:""}
        ${x?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${x}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${w}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${C}</div>
      </div>
    </div>`}),s&&(m+='<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>'),n.innerHTML=m,s){const y=p("com-scroll-sentinel");y&&(lt=new IntersectionObserver(w=>{w[0].isIntersecting&&(h.comPage++,sm(e,n))},{rootMargin:"200px"}),lt.observe(y))}}function sm(n,e){const i=h.comPage*20,s=i+20,r=n.slice(i,s),o=s<n.length;let c="";r.forEach(d=>{const m=(d.tags||[]).slice(0,3).map(x=>`<span class="com-tag">${x}</span>`).join(""),y=d.authorUsername?`@${d.authorUsername}`:d.authorName||"Anonymous",w=d.cookTime||d.totalTime||"",C=d.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${d.imageUrl}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"";c+=`<div class="rcd com-rcd" onclick="openComRecipe('${d.id}')">
      ${C}
      <div class="rrow">
        <div class="rnm" style="flex:1">${d.title||"Untitled"}</div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <span style="font-size:.78rem;color:var(--rd)">❤️ ${d.likes||0}</span>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-top:4px;flex-wrap:wrap">
        ${d.cuisine?`<span style="font-size:.72rem;color:var(--ac);font-weight:600">${d.cuisine}</span>`:""}
        ${d.avgRating||d.ratingCount?`<span>${Yc(d.avgRating,d.ratingCount)}</span>`:""}
        ${w?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${w}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${m}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${y}</div>
      </div>
    </div>`});const u=p("com-scroll-sentinel");if(u&&u.remove(),lt&&(lt.disconnect(),lt=null),e.insertAdjacentHTML("beforeend",c),o){e.insertAdjacentHTML("beforeend",'<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>');const d=p("com-scroll-sentinel");d&&(lt=new IntersectionObserver(m=>{m[0].isIntersecting&&(h.comPage++,sm(n,e))},{rootMargin:"200px"}),lt.observe(d))}}async function QS(n){var J;const e=h.comRecs.find(V=>V.id===n);if(!e)return;const t=(J=ce())==null?void 0:J.uid,[i,s,r]=await Promise.all([m_(n),p_(n).catch(()=>[]),w_(n)]);i?h.myLikes.add(n):h.myLikes.delete(n),s.sort((V,T)=>new Date(V.createdAt||0)-new Date(T.createdAt||0));const o=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`,c=e.imageUrl?`<div style="margin:-16px -16px 16px;overflow:hidden;max-height:240px"><img src="${e.imageUrl}" alt="" style="width:100%;height:240px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",u=[e.prepTime?`Prep: ${e.prepTime}`:"",e.cookTime?`Cook: ${e.cookTime}`:"",e.totalTime?`Total: ${e.totalTime}`:"",e.servings?`Serves: ${e.servings}`:""].filter(Boolean),d=u.length?`<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px">${u.map(V=>`<span style="font-size:.74rem;color:var(--mt);background:var(--b1);border-radius:8px;padding:4px 10px">${V}</span>`).join("")}</div>`:"",m=(e.ratingCount||0)>0?`<div style="margin-bottom:6px">${Yc(e.avgRating,e.ratingCount)}</div>`:"",y=(e.tags||[]).map(V=>`<span class="com-tag">${V}</span>`).join(""),w=e.authorUsername?`@${e.authorUsername}`:e.authorName||"Anonymous",C=h.myLikes.has(n),x=t&&t===e.authorUid;let O="";e.ingredientsRaw&&e.ingredientsRaw.length?O=`<ul style="margin:0;padding-left:18px;font-size:.88rem;color:var(--tx2);line-height:2">${e.ingredientsRaw.map(V=>`<li>${(typeof V=="string"?V:(V.amount||"")+" "+(V.unit||"")+" "+(V.name||"")).replace(/</g,"&lt;").replace(/>/g,"&gt;").trim()}</li>`).join("")}</ul>`:e.ingredients&&(O=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.ingredients||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);let L="";e.stepsRaw&&e.stepsRaw.length?L=`<ol style="margin:0;padding-left:22px;font-size:.88rem;color:var(--tx2);line-height:1.8">${e.stepsRaw.map(V=>`<li style="margin-bottom:8px">${(typeof V=="string"?V:V.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</li>`).join("")}</ol>`:e.steps&&(L=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.steps||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);let z=s.map(V=>`<div style="padding:10px 0;border-bottom:1px solid var(--b1)">
    <div style="display:flex;justify-content:space-between;align-items:center">
      <span style="font-size:.78rem;font-weight:600">${(V.authorUsername?"@"+V.authorUsername:V.authorName)||"Anonymous"}</span>
      <span style="font-size:.68rem;color:var(--mt)">${V.createdAt?new Date(V.createdAt).toLocaleDateString():""}</span>
    </div>
    <div style="font-size:.84rem;color:var(--tx2);margin-top:4px;line-height:1.5">${(V.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>
  </div>`).join("");const G=(r==null?void 0:r.rating)||0,$=Array.from({length:5},(V,T)=>`<span class="star${T<G?" on":""}" onclick="submitComReview('${n}',${T+1})" style="cursor:pointer;font-size:1.3rem">${T<G?"★":"☆"}</span>`).join(""),j=x?`<button class="btn bd bsm" onclick="unpublishComRecipe('${n}')" style="margin-top:12px;width:100%">🚫 Unpublish this recipe</button>`:"";p("erecbody").innerHTML=`
    ${c}
    <div style="margin-bottom:14px">
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;line-height:1.3;margin-bottom:6px">${e.title||"Untitled"}</div>
      ${e.cuisine?`<div style="font-size:.78rem;color:var(--ac);font-weight:600;margin-bottom:6px">${e.cuisine}</div>`:""}
      ${m}
      <div style="font-size:.76rem;color:var(--mt)">by ${w} · ${e.createdAt?new Date(e.createdAt).toLocaleDateString():""}</div>
      ${y?`<div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:8px">${y}</div>`:""}
    </div>

    ${d}

    <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap">
      <button class="btn ${C?"bp":"bs"} bsm" onclick="likeComRecipe('${n}')" id="com-like-btn">
        ${C?"❤️":"🤍"} ${e.likes||0} Like${(e.likes||0)!==1?"s":""}
      </button>
      <button class="btn bs bsm" style="flex:1" onclick="saveComToKitchen('${n}')">📖 Save to my recipes</button>
      <button class="btn bs bsm" onclick="shareComRecipe('${n}')">📤 Share</button>
    </div>

    ${O?`<div class="frow"><label class="flbl">Ingredients</label>${O}</div>`:""}
    ${L?`<div class="frow"><label class="flbl">Instructions</label>${L}</div>`:""}

    <div style="background:var(--card);border:1px solid var(--b2);border-radius:12px;padding:14px;margin-top:16px">
      <div class="flbl" style="margin-bottom:8px">Rate this recipe</div>
      <div id="com-review-stars" style="display:flex;align-items:center;gap:2px">${$}</div>
      ${r?`<div style="font-size:.72rem;color:var(--mt);margin-top:4px">You rated this ${r.rating}★</div>`:""}
    </div>

    <div style="margin-top:16px">
      <div class="flbl" style="margin-bottom:10px">Comments (${s.length})</div>
      <div id="com-comments">${z||'<div style="font-size:.82rem;color:var(--mt);padding:8px 0">No comments yet.</div>'}</div>
      <div style="display:flex;gap:8px;margin-top:12px">
        <input class="fi" id="com-cmt-input" placeholder="Add a comment…" style="flex:1" onkeydown="if(event.key==='Enter')addComComment('${n}')"/>
        <button class="btn bp bsm" onclick="addComComment('${n}')">Post</button>
      </div>
    </div>

    <div style="margin-top:16px;padding:12px;background:var(--card);border:1px solid var(--b1);border-radius:12px">
      <div style="font-size:.72rem;color:var(--mt);margin-bottom:6px">Share link (viewable without sign-in)</div>
      <div style="font-size:.8rem;color:var(--ac);word-break:break-all;cursor:pointer" onclick="navigator.clipboard.writeText('${o}');showNotif('Link copied!')">${o}</div>
    </div>

    ${j}`,Lt("erec")}async function JS(n,e){if(!ce()){P("Sign in to rate recipes");return}try{await v_(n,e,"");const i=h.comRecs.find(r=>r.id===n);i&&(i.ratingCount=(i.ratingCount||0)+1,i.ratingSum=(i.ratingSum||0)+e,i.avgRating=Math.round(i.ratingSum/i.ratingCount*10)/10);const s=p("com-review-stars");s&&(s.innerHTML=Array.from({length:5},(r,o)=>`<span class="star${o<e?" on":""}" onclick="submitComReview('${n}',${o+1})" style="cursor:pointer;font-size:1.3rem">${o<e?"★":"☆"}</span>`).join("")),P(`Rated ${e}★`)}catch(i){console.error("submitComReview:",i),P("Couldn't submit rating")}}async function YS(n){if(confirm("Remove this recipe from the community?"))try{await uf(n),h.comRecs=h.comRecs.filter(e=>e.id!==n),P("Recipe unpublished"),ke("erec"),fn()}catch(e){console.error("unpublishComRecipe:",e),P("Couldn't unpublish recipe")}}async function XS(n){if(!ce()){P("Sign in to like recipes");return}const t=h.myLikes.has(n);try{await h_(n,t),t?h.myLikes.delete(n):h.myLikes.add(n);const i=h.comRecs.find(r=>r.id===n);i&&(i.likes=(i.likes||0)+(t?-1:1));const s=p("com-like-btn");if(s){const r=h.myLikes.has(n);s.className=`btn ${r?"bp":"bs"} bsm`,s.innerHTML=`${r?"❤️":"🤍"} ${(i==null?void 0:i.likes)||0} Like${((i==null?void 0:i.likes)||0)!==1?"s":""}`}P(t?"Like removed":"Liked!")}catch(i){console.error("likeComRecipe:",i),P("Couldn't update like")}}async function ZS(n){if(!ce()){P("Sign in to save recipes");return}const t=h.comRecs.find(i=>i.id===n);if(t)try{await g_(t),P("Recipe saved to your kitchen! 📖"),ke("erec")}catch(i){console.error("saveComToKitchen:",i),P("Couldn't save recipe")}}async function eA(n){var r;const e=ce();if(!e){P("Sign in to comment");return}const t=p("com-cmt-input"),i=(r=t==null?void 0:t.value)==null?void 0:r.trim();if(!i)return;const s=e.displayName||localStorage.getItem("ks-who")||"Anonymous";try{const o=await f_(n,i,s);t.value="";const c=p("com-comments");c&&o&&(c.querySelector("div[style*='color:var(--mt)']")&&!c.querySelector("div[style*='border-bottom']")&&(c.innerHTML=""),c.innerHTML+=`<div style="padding:10px 0;border-bottom:1px solid var(--b1)">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:.78rem;font-weight:600">${h.username?"@"+h.username:o.authorName}</span>
          <span style="font-size:.68rem;color:var(--mt)">${new Date().toLocaleDateString()}</span>
        </div>
        <div style="font-size:.84rem;color:var(--tx2);margin-top:4px;line-height:1.5">${o.text.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>
      </div>`),P("Comment posted!")}catch(o){console.error("addComComment:",o),P("Couldn't post comment")}}async function tA(n){const e=h.comRecs.find(s=>s.id===n),t=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`,i=(e==null?void 0:e.title)||"Recipe";if(navigator.share)try{await navigator.share({title:i,text:`Check out this recipe: ${i}`,url:t});return}catch{}try{await navigator.clipboard.writeText(t),P("Link copied!")}catch{P("Couldn't copy link")}}function nA(){const n=h.cookLog,e=h.wasteLog;let t=0;for(let $=0;$<60;$++){const j=new Date;j.setDate(j.getDate()-$);const J=j.toISOString().split("T")[0];if(n.find(V=>V.date===J))t++;else if($>0)break}const i=p("ins-streak-num");i&&(i.textContent=t);const s=p("ins-total-cooked");s&&(s.textContent=n.length);const r=p("ins-waste-count");r&&(r.textContent=e.length);const o=p("ins-sub");o&&(o.textContent=n.length?" "+n.length+" meals cooked":"Your kitchen at a glance");const c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],u=p("ins-week");if(u){const $=wi().map(j=>{const J=j.toISOString().split("T")[0],V=h.mp[J],T=J===Gt();return`<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--b1)${T?";background:var(--acd);margin:0 -4px;padding:7px 4px;border-radius:6px":""}">
        <div style="font-size:.72rem;color:var(--mt);min-width:30px;font-weight:${T?"600":"400"}">${c[j.getDay()]}</div>
        <div style="font-size:.72rem;color:var(--mt);min-width:20px">${j.getDate()}</div>
        <div style="font-size:.84rem;color:${V?"var(--tx)":"var(--mt)"};font-style:${V?"normal":"italic"};flex:1">${V||"—"}</div>
        ${T?"<div style='font-size:.66rem;color:var(--ac);font-weight:600'>TODAY</div>":""}
      </div>`}).join("");u.innerHTML=$}const d=n.slice(0,7).map($=>$.name),m=p("ins-variety-nudge"),y=p("ins-variety-msg");if(m&&d.length>=3){const $={};d.forEach(v=>{const b=v.toLowerCase();$[b]=($[b]||0)+1});const j=Object.entries($).filter(([,v])=>v>=3),J=Object.values(h.mp).filter(Boolean),V=J.some(v=>/curry|dal|rice|bengali|biryani|hilsa|mustard|lentil/i.test(v)),T=J.some(v=>/kebab|köfte|pide|börek|meze|turkish|pilav|lahmacun/i.test(v));j.length?(m.style.display="block",y.textContent=`You've cooked "${j[0][0]}" ${j[0][1]} times this week. Time to mix it up?`):!V&&J.length>=3?(m.style.display="block",y.textContent="No Bangladeshi dishes this week — how about a dal, biryani, or fish curry?"):!T&&J.length>=3?(m.style.display="block",y.textContent="No Turkish dishes planned — köfte, mercimek çorbası, or a pilav would be great this week!"):m.style.display="none"}else m&&(m.style.display="none");const w={};n.forEach($=>{w[$.name]=(w[$.name]||0)+1});const C=Object.entries(w).sort(($,j)=>j[1]-$[1]).slice(0,6),x=C[0]?C[0][1]:1,O=p("ins-cooked");if(O)if(!C.length)O.innerHTML='<div class="es" style="padding:16px"><p>Cook some meals to see stats!</p></div>';else{const $=["🥇","🥈","🥉","4️⃣","5️⃣","6️⃣"];O.innerHTML=C.map(([j,J],V)=>`<div class="ibar-row"><div style="font-size:.9rem;margin-right:4px">${$[V]||""}</div><div class="ibar-lbl">${j}</div><div class="ibar-track"><div class="ibar-fill" style="width:${Math.round(J/x*100)}%"></div></div><div class="ibar-val">${J}×</div></div>`).join("")}const L={Bangladeshi:"#e8a44a",Turkish:"#c0392b",Mediterranean:"#27ae60",American:"#3498db",Italian:"#e74c3c",Asian:"#9b59b6",Other:"#95a5a6"},z=p("ins-cuisine");if(z&&n.length){const $=T=>{const v=T.toLowerCase();return/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(v)?"Bangladeshi":/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner|iskender/i.test(v)?"Turkish":/pasta|pizza|risotto|gnocchi|italian/i.test(v)?"Italian":/tacos|burrito|enchilada|mexican/i.test(v)?"Mexican":/sushi|ramen|stir.?fry|fried rice|asian|chinese|thai|japanese/i.test(v)?"Asian":/burger|sandwich|mac|bbq|american/i.test(v)?"American":"Other"},j={};n.slice(0,20).forEach(T=>{const v=$(T.name);j[v]=(j[v]||0)+1});const J=Object.values(j).reduce((T,v)=>T+v,0),V=Object.entries(j).sort((T,v)=>v[1]-T[1]);z.innerHTML=V.map(([T,v])=>{const b=Math.round(v/J*100),E=L[T]||"#95a5a6";return`<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span style="font-size:.82rem;font-weight:500">${T}</span><span style="font-size:.74rem;color:var(--mt)">${v} meals · ${b}%</span></div><div style="height:8px;background:var(--b1);border-radius:4px;overflow:hidden"><div style="height:100%;width:${b}%;background:${E};border-radius:4px;transition:width .6s ease"></div></div></div>`}).join("")||'<div class="es" style="padding:16px"><p>Cook more meals to see your cuisine breakdown.</p></div>'}const G=p("ins-waste");G&&(G.innerHTML=e.length?e.slice(0,10).map($=>`<div class="waste-item"><span style="font-size:.86rem">${$.name}</span><span style="font-size:.74rem;color:var(--rd)">${$.date}</span></div>`).join(""):'<div class="es" style="padding:16px"><p>Nothing wasted yet — great job! 🎉</p></div>')}function iA(){const n=["fridge","freezer","pantry"].map(o=>{const c=h.inv.filter(u=>u.location===o);return c.length?eo(o).toUpperCase()+": "+c.map(u=>`${u.name} (${u.qty} ${u.unit})`).join(", "):""}).filter(Boolean).join(`
`),e=h.inv.filter(o=>{const c=nt(o.expiry);return c&&(c.c==="expiring"||c.c==="expired")}).map(o=>{const c=nt(o.expiry);return`${o.name} (${c.l})`}).join(", "),t=wi().map(o=>{const c=o.toISOString().split("T")[0];return h.mp[c]?`${o.toLocaleDateString("en-US",{weekday:"short"})}: ${h.mp[c]}`:""}).filter(Boolean).join(", "),i=h.recs.filter(o=>o.favorited||o.rating>=4).map(o=>`${o.name}${o.rating?` (${o.rating}★)`:""}`).join(", "),s=[h.cfg.nopork?"no pork":null,h.cfg.noshellfish?"no shellfish":null,h.cfg.vegetarian?"vegetarian":null,h.cfg.glutenfree?"gluten-free":null,h.cfg.other].filter(Boolean).join(", "),r=h.cookLog.slice(0,7).map(o=>o.name).join(", ");return`You are a kitchen and household assistant for a family in Edison NJ. You ONLY help with kitchen, food, cooking, grocery, and household topics. This includes:
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
Always use this format so the app can offer a one-tap save button. You can include normal text before/after recipe blocks.`}function sA(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<li>$1</li>").replace(/^[-•]\s+(.+)$/gm,"<li>$1</li>").replace(/\n/g,"<br>")}async function rm(){const n=p("chi"),e=n.value.trim();if(!e)return;n.value="",om(n),h.chat.push({role:"user",content:e}),ha("user",e);const t=p("csb");t&&(t.disabled=!0);const i="thinking-"+Date.now(),s=p("chmsgs");s.innerHTML+=`<div class="cb asst thinking" id="${i}">Thinking…</div>`,s.scrollTop=s.scrollHeight;try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:800,system:iA(),messages:h.chat.map(d=>({role:d.role,content:d.content}))})})).json(),c=o.content&&o.content[0]&&o.content[0].text||"Sorry, I couldn't process that.",u=p(i);u&&u.remove(),h.chat.push({role:"assistant",content:c}),ha("assistant",c)}catch{const o=p(i);o&&o.remove(),ha("assistant","Sorry, I couldn't reach Claude. Check your connection and try again.")}t&&(t.disabled=!1)}function rA(n){const e=[];return{cleanText:n.replace(/:::RECIPE:::\s*([\s\S]*?)\s*:::END:::/g,(i,s)=>{try{const r=JSON.parse(s.trim());r.title&&e.push(r)}catch{}return""}).trim(),recipes:e}}function oA(n){const e=JSON.stringify(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;"),t=(n.ingredients||"").split(`
`).slice(0,3).join(", ");return`<div style="background:var(--card);border:1.5px solid var(--ac);border-radius:14px;padding:16px;margin:10px 0">
    <div style="font-family:'Fraunces',serif;font-size:1.1rem;font-weight:300;color:var(--ac);margin-bottom:6px">${(n.title||"").replace(/</g,"&lt;")}</div>
    ${n.cuisine?`<div style="font-size:.72rem;color:var(--mt);margin-bottom:6px">${n.cuisine}${n.cookTime?" · "+n.cookTime:""}${n.servings?" · "+n.servings+" servings":""}</div>`:""}
    ${t?`<div style="font-size:.8rem;color:var(--tx2);line-height:1.5;margin-bottom:10px">${t.replace(/</g,"&lt;")}…</div>`:""}
    <button class="btn bp bsm" onclick="importChatRecipe(this)" data-recipe="${e}">📖 Add to My Recipes</button>
  </div>`}async function aA(n){try{const e=JSON.parse(n.dataset.recipe),t="rec-"+Date.now(),i=[e.ingredients||"",e.steps?`

Steps:
`+e.steps:""].join("").trim();await sn({id:t,name:e.title||"Untitled Recipe",rating:0,favorited:!1,notes:"",description:i,source:"Claude Chat",sourceUrl:null,tags:[],cuisine:e.cuisine||"",cookTime:e.cookTime||"",servings:e.servings||"",cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:!1}),n.textContent="✓ Saved!",n.disabled=!0,n.style.background="var(--gn)",P("Recipe saved! 📖")}catch{P("Couldn't save recipe")}}function ha(n,e){const t=p("chmsgs");if(t){if(n==="assistant"){const{cleanText:i,recipes:s}=rA(e);if(i){const r=document.createElement("div");r.className="cb asst",r.innerHTML=sA(i),t.appendChild(r)}s.forEach(r=>{const o=document.createElement("div");o.style.maxWidth="88%",o.style.alignSelf="flex-start",o.innerHTML=oA(r),t.appendChild(o)})}else{const i=document.createElement("div");i.className="cb user",i.innerHTML=e,t.appendChild(i)}t.scrollTop=t.scrollHeight}}function cA(n){const e=p("chi");e&&(e.value=n.textContent),rm()}function lA(){h.chat=[];const n=p("chmsgs");n&&(n.innerHTML=`<div class="cb asst">Hey! 👋 I'm your kitchen assistant — I can help with recipes, meal planning, grocery tips, and cooking questions. What's on your mind?</div>`)}function om(n){n.style.height="auto",n.style.height=Math.min(n.scrollHeight,120)+"px"}let ys=!1,Tr=!1,Ir=null;function Zc(){if(ys)return;const n=p("scanner-video");if(!n)return;const e=p("scan-status");e&&(e.textContent="Starting camera…",e.style.display="block"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{uA(n,e)})})}function uA(n,e){Quagga.init({inputStream:{name:"Live",type:"LiveStream",target:n,constraints:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}},locator:{patchSize:"medium",halfSample:!0},decoder:{readers:["ean_reader","ean_8_reader","upc_reader","upc_e_reader","code_128_reader","code_39_reader"]},locate:!0,frequency:10},function(t){if(t){console.error("Scanner init error:",t);const i=p("scerr");i&&(i.textContent="⚠️ Could not access camera. Try entering the barcode manually.",i.style.display="block"),e&&(e.style.display="none");return}dA(n),Quagga.start(),ys=!0,e&&(e.textContent="Scanning…"),setTimeout(()=>hA(n),2e3)}),Quagga.onDetected(am)}function dA(n){n.querySelectorAll("video").forEach(e=>{e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,e.play().catch(()=>{})})}async function hA(n){if(!ys)return;const e=n.querySelector("video");if(!(!e||e.videoWidth>0)){console.warn("Camera feed appears black — retrying with manual getUserMedia");try{const t=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}});Ir=t,e.srcObject&&e.srcObject.getTracks().forEach(i=>i.stop()),e.srcObject=t,e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,await e.play()}catch(t){console.error("Manual camera retry failed:",t)}}}function el(){if(ys){try{Quagga.stop()}catch{}Quagga.offDetected(am),Ir&&(Ir.getTracks().forEach(n=>n.stop()),Ir=null),ys=!1,Tr=!1}}async function am(n){var s,r;if(Tr)return;const e=n&&n.codeResult&&n.codeResult.code;if(!e)return;const t=((r=(s=n.codeResult.decodedCodes)==null?void 0:s.filter(o=>o.error!==void 0))==null?void 0:r.map(o=>o.error))||[];if(!((t.length?t.reduce((o,c)=>o+c,0)/t.length:1)>.25)){Tr=!0,fA(),el(),p("scanbody").style.display="none",p("scspin").style.display="block",p("scst").textContent="Found "+e+" — looking up…";try{const o=await cm(e);h.cp=o,p("aqty").value=1,p("aexp").value="",tl("fridge",p("rl-fridge")),lm(o)}catch{const o=p("scerr");o.textContent="⚠️ Lookup failed. Check your connection or enter the barcode manually.",o.style.display="block"}p("scanbody").style.display="block",p("scspin").style.display="none",Tr=!1}}function fA(){const n=p("scan-success");n&&(n.style.display="flex",n.style.animation="none",n.offsetHeight,n.style.animation="",setTimeout(()=>{n.style.display="none"},500))}function pA(){ke("result"),Lt("scan"),p("scerr").style.display="none",Zc()}function mA(){h.scanDestList=!0,Lt("scan");const n=p("scanovttl");n&&(n.textContent="Scan → Shopping List");const e=p("scan-dest-hint");e&&(e.textContent="Running low? Scan to add to your shopping list."),p("scerr").style.display="none",Zc()}function gA(){h.scanDestList=!1,Lt("scan");const n=p("scanovttl");n&&(n.textContent="Scan Barcode");const e=p("scan-dest-hint");e&&(e.textContent="Scan a barcode to add to your pantry or shopping list."),p("scerr").style.display="none",Zc()}function yA(){const n=p("scanNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=p("scanNoteInp");t&&t.focus()}}function vA(){if(!h.cp)return;const n=h.cp.notFound?"Barcode "+h.cp.barcode:h.cp.name,e=p("scanNoteInp"),t=e?e.value.trim():"",i=parseInt(p("aqty").value)||1,s={id:Date.now().toString(),name:n,qty:i,checked:!1,src:"scan"};h.cp.brand&&(s.brand=h.cp.brand),h.cp.image&&(s.image=h.cp.image),t&&(s.note=t),Se(s),P("Added to list: "+n),ke("result"),ke("scan"),h.scanDestList=!1,e&&(e.value="");const r=p("scanNoteWrap");r&&(r.style.display="none"),window.showScreen("shopping")}function wA(){const n=p("mentry");n.style.display=n.style.display==="none"?"block":"none"}async function _A(){const n=p("meinp").value.trim();if(!n)return;el(),p("scanbody").style.display="none",p("scspin").style.display="block",p("scst").textContent="Looking up…";const e=await cm(n);h.cp=e,p("aqty").value=1,p("aexp").value="",tl("fridge",p("rl-fridge")),p("meinp").value="",lm(e),p("scanbody").style.display="block",p("scspin").style.display="none"}async function cm(n){try{const e=await fetch("/api/barcode?code="+encodeURIComponent(n));if(e.ok){const t=await e.json();if(t.found&&t.product)return{...t.product,notFound:!1}}}catch{}return{barcode:n,name:"",brand:"",quantity:"",category:"General",image:null,source:null,description:"",notFound:!0}}function bA(n,e){switch(n){case"Open Food Facts":return`https://world.openfoodfacts.org/product/${e}`;case"Open Beauty Facts":return`https://world.openbeautyfacts.org/product/${e}`;case"Open Pet Food Facts":return`https://world.openpetfoodfacts.org/product/${e}`;case"UPC Item DB":return`https://www.upcitemdb.com/upc/${e}`;case"Edamam":return"https://www.edamam.com/food-database/en/";default:return"#"}}function lm(n){var s;ke("scan"),p("resttl").textContent=n.notFound?"Not Found":"Product Found ✓",p("aunit").value=n.quantity||"unit";let e="";if(n.notFound)e=`<div class="nfb">⚠️ Barcode <code>${n.barcode}</code> not found in any database. Enter name:<input class="fi" id="mnm" placeholder="Product name (required)" oninput="valAdd()" style="margin-top:10px"/></div>`;else{const r=n.image?`<img src="${n.image}" class="pimg" onerror="this.style.display='none'"/>`:'<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">🛒</div>',o=n.description?`<div class="pdsc">${n.description}</div>`:"",c=n.source?`<a href="${bA(n.source,n.barcode)}" target="_blank" rel="noopener" class="srcb" style="text-decoration:none">${n.source} ↗</a>`:"";e=`<div class="pcard"><div class="phdr">${r}<div style="flex:1"><div class="pnm">${n.name}</div>${n.brand?`<div class="pbr">${n.brand}</div>`:""}<div class="pbc">${n.barcode}</div><span class="bdg">${n.category}</span>${c}</div></div>${o}</div>`}p("resbody").innerHTML=e;const t=(s=p("ov-result"))==null?void 0:s.querySelector(".ovbody");if(t){const r=t.querySelector(".frow"),o=t.querySelectorAll(".frow")[1],c=t.querySelectorAll(".qrow")[1];r&&(r.style.display=h.scanDestList?"none":""),o&&(o.style.display=h.scanDestList?"none":""),c&&(c.style.display=h.scanDestList?"none":"")}const i=p("scan-dest-btns");i&&(h.scanDestList?i.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2;background:var(--gn);border-color:var(--gn)" id="addbtn" onclick="addScannedToList()">🛒 Add to Shopping List</button>
      </div>`:i.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2" id="addbtn" onclick="addToInv()">📦 Add to Pantry</button>
      </div>
      <button class="btn bs bf" style="margin-top:8px;border-color:var(--gn);color:var(--gn)" onclick="addScannedToList()">🛒 Add to Shopping List instead</button>`),n.notFound&&setTimeout(()=>{const r=p("addbtn");r&&(r.disabled=!0)},0),Lt("result")}function tl(n,e){h.selR=n,document.querySelectorAll("#ov-result .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function TA(){const n=p("mnm");p("addbtn").disabled=!(n&&n.value.trim())}async function IA(){if(!h.cp)return;const n=p("mnm"),e=h.cp.notFound?n&&n.value.trim()||"":h.cp.name;if(!e)return;const t=p("aunit").value.trim()||"unit",i=Math.max(1,parseInt(p("aqty").value)||1),s=p("aexp").value||null,r="item-"+h.cp.barcode.replace(/\W/g,"-"),o=h.inv.find(c=>c.id===r);await be({id:r,barcode:h.cp.barcode,name:e,brand:h.cp.brand||"",unit:t,qty:o?o.qty+i:i,location:h.selR,category:h.cp.category||"General",image:h.cp.image||null,source:h.cp.source||null,expiry:s,addedAt:o?o.addedAt:new Date().toLocaleDateString()}),P(o?`+${i} added to ${e}`:`${e} added!`),h.cp=null,ke("result")}function EA(n){const e=p("aqty");e.value=Math.max(1,(parseInt(e.value)||1)+n)}let Ie=null,or=0,ar=0,te=null,Ft=null,jt=0,rt=!1,Wn=!1;const cr=80,Qd=.1,Gn=.7,lr=8,Xi="cubic-bezier(0.25, 1.5, 0.5, 1)",St="cubic-bezier(0.4, 0, 0.2, 1)";function SA(){document.addEventListener("touchstart",e=>{const t=e.target.closest(".swipe-inner");if(!t)return;const i=t.closest(".swipe-wrap");i&&(h.selectMode||(te&&te!==i&&(En(te),te=null),Ie=t,or=e.touches[0].clientX,ar=e.touches[0].clientY,Ft=null,rt=!1,jt=i.offsetWidth,t.classList.add("swiping")))},{passive:!0}),document.addEventListener("touchmove",e=>{if(!Ie)return;const t=e.touches[0].clientX,i=e.touches[0].clientY,s=t-or,r=i-ar;if(!Ft){if(Math.abs(s)<lr&&Math.abs(r)<lr)return;Ft=Math.abs(s)>Math.abs(r)?"horizontal":"vertical"}if(Ft==="vertical"){Ie.classList.remove("swiping"),Ie=null;return}e.preventDefault();const o=s>=0?0:s;Ie.style.transform=`translateX(${o}px)`;const c=Ie.closest(".swipe-wrap"),u=c==null?void 0:c.querySelector(".swipe-del");if(u&&o<0){const m=Math.min(100,Math.abs(o)/cr*100);u.style.clipPath=`inset(0 0 0 ${100-m}%)`}const d=Math.abs(o)/jt;d>=Gn&&!rt?(rt=!0,navigator.vibrate&&navigator.vibrate(10),c==null||c.classList.add("swipe-threshold")):d<Gn&&rt&&(rt=!1,c==null||c.classList.remove("swipe-threshold"))},{passive:!1}),document.addEventListener("touchend",()=>{if(!Ie)return;const e=Ie,t=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/jt;if(s>=Gn)Jd(t,e);else if(s>=Qd){e.style.transition=`transform 0.4s ${Xi}`,e.style.transform=`translateX(-${cr}px)`;const r=t==null?void 0:t.querySelector(".swipe-del");r&&(r.style.transition=`clip-path 0.3s ${St}`,r.style.clipPath="inset(0 0 0 0%)"),t==null||t.classList.add("open"),t==null||t.classList.add("swipe-threshold"),te&&te!==t&&En(te),te=t,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${Xi}`,e.style.transform="translateX(0)";const r=t==null?void 0:t.querySelector(".swipe-del");r&&(r.style.transition=`clip-path 0.3s ${St}`,r.style.clipPath="inset(0 0 0 100%)"),t==null||t.classList.remove("open","swipe-threshold"),te===t&&(te=null),setTimeout(()=>{e.style.transition="",r&&(r.style.transition="")},350)}Ie=null}),document.addEventListener("mousedown",e=>{if(e.button!==0)return;const t=e.target.closest(".swipe-inner");if(!t)return;const i=t.closest(".swipe-wrap");i&&(h.selectMode||(te&&te!==i&&(En(te),te=null),Wn=!0,Ie=t,or=e.clientX,ar=e.clientY,Ft=null,rt=!1,jt=i.offsetWidth,t.classList.add("swiping")))}),document.addEventListener("mousemove",e=>{if(!Wn||!Ie)return;const t=e.clientX-or,i=e.clientY-ar;if(!Ft){if(Math.abs(t)<lr&&Math.abs(i)<lr)return;Ft=Math.abs(t)>Math.abs(i)?"horizontal":"vertical"}if(Ft==="vertical"){Ie.classList.remove("swiping"),Ie=null,Wn=!1;return}e.preventDefault();const s=t>=0?0:t;Ie.style.transform=`translateX(${s}px)`;const r=Ie.closest(".swipe-wrap"),o=r==null?void 0:r.querySelector(".swipe-del");if(o&&s<0){const u=Math.min(100,Math.abs(s)/cr*100);o.style.clipPath=`inset(0 0 0 ${100-u}%)`}const c=Math.abs(s)/jt;c>=Gn&&!rt?(rt=!0,navigator.vibrate&&navigator.vibrate(10),r==null||r.classList.add("swipe-threshold")):c<Gn&&rt&&(rt=!1,r==null||r.classList.remove("swipe-threshold"))});function n(){if(!Wn||!Ie){Wn=!1;return}Wn=!1;const e=Ie,t=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/jt;if(s>=Gn)Jd(t,e);else if(s>=Qd){e.style.transition=`transform 0.4s ${Xi}`,e.style.transform=`translateX(-${cr}px)`;const r=t==null?void 0:t.querySelector(".swipe-del");r&&(r.style.transition=`clip-path 0.3s ${St}`,r.style.clipPath="inset(0 0 0 0%)"),t==null||t.classList.add("open"),t==null||t.classList.add("swipe-threshold"),te&&te!==t&&En(te),te=t,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${Xi}`,e.style.transform="translateX(0)";const r=t==null?void 0:t.querySelector(".swipe-del");r&&(r.style.transition=`clip-path 0.3s ${St}`,r.style.clipPath="inset(0 0 0 100%)"),t==null||t.classList.remove("open","swipe-threshold"),te===t&&(te=null),setTimeout(()=>{e.style.transition="",r&&(r.style.transition="")},350)}Ie=null}document.addEventListener("mouseup",n),document.addEventListener("mouseleave",n),document.addEventListener("mousedown",e=>{if(!te||e.target.closest(".swipe-del"))return;const t=e.target.closest(".swipe-inner");t&&t.closest(".swipe-wrap")===te||(En(te),te=null)}),document.addEventListener("click",e=>{document.querySelectorAll(".sh-note-edit.open").forEach(t=>{if(t.contains(e.target))return;const i=t.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-note-btn");if(s&&s.contains(e.target))return;const r=t.querySelector("textarea");r&&r.blur(),t.classList.remove("open")}),document.querySelectorAll(".sh-qty-edit.open").forEach(t=>{if(t.contains(e.target))return;const i=t.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-qty");if(s&&s.contains(e.target))return;const r=t.querySelector("input");r&&r.blur(),t.classList.remove("open")})},!0),document.addEventListener("touchstart",e=>{if(!te||e.target.closest(".swipe-del"))return;const t=e.target.closest(".swipe-inner");t&&t.closest(".swipe-wrap")===te||(En(te),te=null)},{passive:!0})}function En(n){const e=n==null?void 0:n.querySelector(".swipe-inner"),t=n==null?void 0:n.querySelector(".swipe-del");e&&(e.style.transition=`transform 0.35s ${Xi}`,e.style.transform="translateX(0)",setTimeout(()=>{e.style.transition=""},350)),t&&(t.style.transition=`clip-path 0.3s ${St}`,t.style.clipPath="inset(0 0 0 100%)",setTimeout(()=>{t.style.transition=""},300)),n==null||n.classList.remove("open","swipe-threshold")}async function Jd(n,e){const t=n==null?void 0:n.dataset.id,i=n==null?void 0:n.dataset.list;if(!t||!i)return;e.style.transition=`transform 0.3s ${St}`,e.style.transform=`translateX(-${jt+100}px)`;const s=n==null?void 0:n.querySelector(".swipe-del");s&&(s.style.transition=`transform 0.3s ${St}`,s.style.transform=`translateX(-${jt+100}px)`),await new Promise(r=>setTimeout(r,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",te===n&&(te=null),await new Promise(r=>setTimeout(r,250)),i==="shop"?await Ss(t):(await Zr(t),P("Item removed"))}async function AA(n,e){const t=p("sw-"+n);if(!t)return;const i=t.querySelector(".swipe-inner"),s=t.offsetWidth;i&&(i.style.transition=`transform 0.3s ${St}`,i.style.transform=`translateX(-${s+100}px)`);const r=t.querySelector(".swipe-del");r&&(r.style.transition=`transform 0.3s ${St}`,r.style.transform=`translateX(-${s+100}px)`),await new Promise(o=>setTimeout(o,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",te===t&&(te=null),await new Promise(o=>setTimeout(o,250)),e==="shop"?await Ss(n):(await Zr(n),P("Item removed"))}function kA(n,e){const t=p("sw-"+n);if(t){const i=t.querySelector(".swipe-inner");if((parseFloat(((i==null?void 0:i.style.transform)||"").replace("translateX(",""))||0)<-10){En(t),te=null;return}}if(h.selectMode){h.selectedIds.has(n)?(h.selectedIds.delete(n),t==null||t.classList.remove("selected")):(h.selectedIds.add(n),t==null||t.classList.add("selected")),wo();return}e==="shop"?window.openItemDetail(n):window.openInvItemDetail(n)}function CA(){if(h.selectMode==="shop"){pi();return}h.selectMode&&pi(),h.selectMode="shop",h.selectedIds.clear(),document.querySelectorAll("#shlist .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=p("sh-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),wo()}function RA(){if(h.selectMode==="inv"){pi();return}h.selectMode&&pi(),h.selectMode="inv",h.selectedIds.clear(),document.querySelectorAll("#ibody .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=p("inv-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),wo()}function pi(){h.selectMode=null,h.selectedIds.clear(),document.querySelectorAll(".swipe-wrap.selecting").forEach(t=>t.classList.remove("selecting","selected"));const n=p("sh-selbtn");n&&(n.classList.remove("active"),n.textContent="Select");const e=p("inv-selbtn");e&&(e.classList.remove("active"),e.textContent="Select"),wo()}async function PA(){if(!h.selectedIds.size)return;const n=[...h.selectedIds],e=h.selectMode;pi(),e==="shop"?await Promise.all(n.map(t=>Ss(t))):await Promise.all(n.map(t=>Zr(t))),P(`Removed ${n.length} item${n.length!==1?"s":""} 🗑`)}function wo(){const n=p("multi-bar");if(!n)return;const e=h.selectedIds.size,t=p("multi-count");t&&(t.textContent=e),h.selectMode?n.classList.add("visible"):n.classList.remove("visible")}const xA=["Chicken","Beef","Fish","Vegetarian","Vegan","Quick","Kids","Healthy","Batch Cook","Date Night"];function um(n){return"chip-"+n.split(" ").join("-")}function dm(){const n=p("recChips");n&&(n.innerHTML=xA.map(e=>`<button onclick="toggleChip('${e}')" id="${um(e)}" style="padding:5px 10px;border-radius:20px;border:1px solid var(--bd);background:var(--s2);color:var(--tx2);font-size:.78rem;cursor:pointer;transition:all .15s">${e}</button>`).join(""))}function LA(n){const e=p(um(n));window._activeChips.has(n)?(window._activeChips.delete(n),e&&(e.style.background="var(--s2)",e.style.color="var(--tx2)",e.style.borderColor="var(--bd)")):(window._activeChips.add(n),e&&(e.style.background="var(--ac)",e.style.color="#000",e.style.borderColor="var(--ac)")),hm()}function hm(){const n=p("recPicker"),e=p("recFilter")?p("recFilter").value.trim().toLowerCase():"",t=[...window._activeChips].map(r=>r.toLowerCase()),s=[...h.recs].sort((r,o)=>(o.cookCount||0)-(r.cookCount||0)).filter(r=>{const o=(r.name+" "+(r.description||"")+" "+(r.tags||[]).join(" ")).toLowerCase(),c=e?e.split(/\s+/).every(d=>o.includes(d)):!0,u=t.every(d=>o.includes(d));return c&&u});n.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(r=>`<option value="${r.id}">${r.name}</option>`).join(""),window._pickedRec=null,p("mealMinp").value=""}function DA(n,e){h.md=n,p("mealMttl").textContent="Meal for "+e,p("mealMinp").value=h.mp[n]||"",window._pickedRec=null,window._activeChips=new Set;const t=p("recFilter");t&&(t.value=""),dm();const i=p("recPicker");if(h.recs&&h.recs.length){const s=[...h.recs].sort((c,u)=>(u.cookCount||0)-(c.cookCount||0));i.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(c=>`<option value="${c.id}">${c.name}</option>`).join("");const r=h.mp[n]||"",o=s.find(c=>c.name===r);i.value=o?o.id:"",p("recPickerWrap").style.display="block"}else p("recPickerWrap").style.display="none";p("mealM").classList.add("active"),setTimeout(()=>p("mealMinp").focus(),100)}function NA(n){if(!n){window._pickedRec=null,p("mealMinp").value="";return}const e=h.recs.find(t=>t.id===n);e&&(window._pickedRec=e,p("mealMinp").value=e.name)}function nl(){p("mealM").classList.remove("active")}async function OA(){const n=p("mealMinp").value.trim();if(await Dn(h.md,n||null),window._pickedRec&&window._pickedRec.description){const e=window._pickedRec.description,t=h.inv.map(o=>o.name.toLowerCase()),i=h.shop.map(o=>o.name.toLowerCase()),s=e.split(/[\n,]/).map(o=>o.replace(/^[\d\/\s]*(cup|tbsp|tsp|oz|lb|g|kg|ml|l|clove|slice|piece|bunch|head|can|package|pkg)s?\.?\s*/gi,"").replace(/^[\d]+\s*/,"").trim()).filter(o=>o.length>1&&o.length<60);let r=0;for(const o of s){if(/\b(add|mix|heat|cook|bake|stir|boil|fry|slice|chop|dice|combine|place|pour|season|serve|preheat|bring|remove|let|set|transfer)\b/i.test(o))continue;const c=o.replace(/^[-•*]\s*/,"").trim();if(!c||c.length<2)continue;const u=c.toLowerCase();t.some(d=>d.includes(u)||u.includes(d))||i.some(d=>d===u)||(await Se({id:Date.now().toString()+Math.random().toString(36).slice(2),name:c,qty:1,checked:!1,src:"recipe"}),r++)}r>0&&P(`Added ${r} ingredient${r!==1?"s":""} to shopping list 🛒`)}window._pickedRec=null,nl(),Bn(),xs(),Ii()}async function MA(){await Dn(h.md,null),nl(),Bn(),xs(),Ii()}function $A(n){const e=h.mp[n];e&&(h.cn=e,h.nr=0,p("cookedNm").textContent=e,p("cnotes").value="",is("cstars",0),p("cookedM").classList.add("active"))}async function VA(){await cf(h.cn,Gt()),await Dn(Gt(),null),p("cookedM").classList.remove("active"),Bn(),Ii(),P("Meal logged!")}async function UA(){var i;const n=p("cnotes").value.trim(),e=(i=p("tog-leftover"))==null?void 0:i.classList.contains("on");await cf(h.cn,Gt());const t=h.recs.find(s=>s.name.toLowerCase()===h.cn.toLowerCase());t?await sn({...t,cookCount:(t.cookCount||0)+1,lastCooked:Gt()}):await sn({id:"rec-"+Date.now(),name:h.cn,rating:h.nr,favorited:!1,notes:n,description:"",source:"Meal Plan",tags:[],cookCount:1,savedAt:new Date().toLocaleDateString(),lastCooked:Gt()}),e&&await Dn(T_(),h.cn+" (leftovers)"),await Dn(Gt(),null),p("cookedM").classList.remove("active"),Bn(),Ii(),P(e?"Saved! Leftovers planned for tomorrow 🥡":"Saved to recipes! ⭐")}function FA(n){p("schedNm").textContent=n;const e=["S","M","T","W","T","F","S"],t=new Date;t.setHours(0,0,0,0),p("schedWk").innerHTML=wi().map((i,s)=>{const r=i.toISOString().split("T")[0],o=i.getTime()===t.getTime(),c=h.mp[r];return`<div class="wd${o?" today":""}${c?" hm":""}" onclick="schedSet('${r}','${n}')"><div class="wdn">${e[s]}</div><div class="wdd">${i.getDate()}</div>${c?`<div class="wdm">${c.substring(0,8)}…</div>`:""}</div>`}).join(""),p("schedM").classList.add("active")}async function jA(n,e){await Dn(n,e),p("schedM").classList.remove("active"),Bn(),Ii(),P("Scheduled! 📅")}function BA(){const n=s=>p(s),e=(s,r)=>{const o=n(s);o&&(o.value=r||"")};e("setName",h.cfg.name),e("setAdults",h.cfg.adults),e("setKids",h.cfg.kids),e("setOther",h.cfg.other),e("setCuisines",h.cfg.cuisines),e("setCookTime",h.cfg.cookTime),e("setZipcode",h.cfg.zipcode);const t=(s,r)=>{const o=n(s);o&&o.classList.toggle("on",!!r)};t("tg-nopork",h.cfg.nopork),t("tg-noshellfish",h.cfg.noshellfish),t("tg-vegetarian",h.cfg.vegetarian),t("tg-glutenfree",h.cfg.glutenfree),t("tg-notif",h.cfg.notif);const i=p("notifTimeRow");i&&(i.style.display=h.cfg.notif?"block":"none"),e("setNotifTime",h.cfg.notifTime||"8"),e("setNotifDays",String(h.cfg.notifDays||3)),e("setUsername",h.username),sl(),pm()}async function HA(){h.cfg={...h.cfg,name:p("setName").value.trim(),adults:p("setAdults").value.trim(),kids:p("setKids").value.trim(),nopork:p("tg-nopork").classList.contains("on"),noshellfish:p("tg-noshellfish").classList.contains("on"),vegetarian:p("tg-vegetarian").classList.contains("on"),glutenfree:p("tg-glutenfree").classList.contains("on"),other:p("setOther").value.trim(),cuisines:p("setCuisines").value.trim(),cookTime:p("setCookTime").value,zipcode:p("setZipcode")?p("setZipcode").value.trim():"",notif:p("tg-notif").classList.contains("on"),notifTime:p("setNotifTime")?p("setNotifTime").value:"8",notifDays:parseInt(p("setNotifDays")?p("setNotifDays").value:"3")},await Xr(),h.cfg.notif&&fm(),P("Settings saved!"),ke("settings"),$c()}async function zA(){var e,t;const n=((t=(e=p("setZipcode"))==null?void 0:e.value)==null?void 0:t.trim())||"";h.cfg={...h.cfg,zipcode:n},await Xr(),P("Saved!")}async function qA(n){if(!n.classList.contains("on")){if(!("Notification"in window)){P("Notifications not supported on this browser");return}if(Notification.permission==="denied"){P("Notifications blocked — enable in browser settings");return}if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){P("Notifications permission denied");return}}n.classList.toggle("on");const t=p("notifTimeRow");t&&(t.style.display=n.classList.contains("on")?"block":"none")}function WA(){if(Notification.permission!=="granted"){P("Enable notifications first");return}const n=h.inv.filter(t=>{const i=nt(t.expiry);return i&&(i.c==="expiring"||i.c==="expired")});if(!n.length){new Notification("Kitchen 🧺",{body:"No items expiring soon — you're all good!"});return}const e=n.slice(0,3).map(t=>t.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${e}${n.length>3?" + "+(n.length-3)+" more":""} need attention`})}function fm(){if(!h.cfg.notif||Notification.permission!=="granted")return;const n=parseInt(localStorage.getItem("ks-lastnotif")||"0"),e=Date.now();if(e-n<864e5)return;localStorage.setItem("ks-lastnotif",e.toString());const t=h.cfg.notifDays||3,i=h.inv.filter(r=>{if(!nt(r.expiry))return!1;const c=new Date(r.expiry+"T00:00:00"),u=new Date;return u.setHours(0,0,0,0),Math.round((c-u)/864e5)<=t});if(!i.length)return;const s=i.slice(0,3).map(r=>r.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${s}${i.length>3?" + "+(i.length-3)+" more":""} expiring in ${t} days or less`})}function il(){return je("ks-hhs")||[h.hid]}async function pm(){const n=ce();if(n)try{const e=await ie(`households/${h.hid}`);if(!e)return;const t=e.ownerUid===n.uid,i=p("hhInviteCode");if(i&&(i.textContent=e.inviteCode||"—"),e.inviteCode&&t)try{await K(`household_codes/${e.inviteCode}`,{householdId:h.hid})}catch{}const s=p("regenCodeBtn");s&&(s.style.display=t?"":"none");const r=p("hhMembers");r&&e.members&&(r.innerHTML=e.members.map(o=>{const c=o.uid===n.uid,u=o.role==="owner"?"Owner":"Member",d=t&&!c?`<button onclick="event.stopPropagation();removeMemberFromHH('${o.uid}')" style="background:none;border:none;color:var(--rd);cursor:pointer;font-size:.78rem;padding:4px 8px">Remove</button>`:"";return`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px">
          <div>
            <div style="font-size:.86rem;font-weight:500;color:var(--tx)">${o.name}${c?" (you)":""}</div>
            <div style="font-size:.7rem;color:var(--mt);margin-top:2px">${u}</div>
          </div>
          ${d}
        </div>`}).join(""))}catch(e){console.error("renderHouseholdInfo error:",e)}}async function GA(){var e;const n=(e=p("hhInviteCode"))==null?void 0:e.textContent;if(!(!n||n==="—"))try{await navigator.clipboard.writeText(n),P("Invite code copied!")}catch{P("Couldn't copy — try manually")}}async function KA(){var t;const n=(t=p("hhInviteCode"))==null?void 0:t.textContent;if(!n||n==="—")return;const e=`Join my kitchen on Kitchen app! Use invite code: ${n} at https://pantry-app-zeta-six.vercel.app`;if(navigator.share)try{await navigator.share({text:e})}catch{}else try{await navigator.clipboard.writeText(e),P("Share text copied to clipboard!")}catch{P("Couldn't share — try manually")}}async function QA(){if(confirm("Regenerate invite code? The old code will stop working."))try{const n=await r_(h.hid);if(n){const e=p("hhInviteCode");e&&(e.textContent=n),P("New invite code generated!")}}catch(n){console.error("regenInviteCode error:",n),P("Failed to regenerate code")}}async function JA(n){if(confirm("Remove this member from the household?"))try{await o_(h.hid,n),P("Member removed"),pm()}catch(e){console.error("removeMemberFromHH error:",e),P("Failed to remove member")}}async function YA(){var i,s,r;const n=(r=(s=(i=p("newHHCode"))==null?void 0:i.value)==null?void 0:s.trim())==null?void 0:r.toUpperCase();if(!n)return;const e=ce();if(!e){P("Sign in first");return}const t=p("newHHCode");t.disabled=!0;try{const o=await af(n,e);if(!o){P("Invalid invite code. Check and try again."),t.disabled=!1;return}const c=il();c.includes(o)||c.push(o),ut("ks-hhs",c),p("newHHCode").value="",sl(),P("Household joined!")}catch(o){console.error("addHousehold error:",o),P("Failed to join household")}t.disabled=!1}function XA(n){n!==h.hid&&(localStorage.setItem("ks-h",n),location.reload())}async function ZA(n){if(n===h.hid){P("Can't remove active household");return}const e=ce();if(e)try{const i=await ie(`users/${e.uid}`);if(i){const r=(i.householdIds||[]).filter(o=>o!==n);await K(`users/${e.uid}`,{...i,householdIds:r,id:void 0})}const s=await ie(`households/${n}`);if(s){const r=(s.members||[]).filter(c=>c.uid!==e.uid),o=(s.memberUids||[]).filter(c=>c!==e.uid);await K(`households/${n}`,{...s,members:r,memberUids:o,id:void 0})}}catch(i){console.error("removeHousehold error:",i)}const t=il().filter(i=>i!==n);ut("ks-hhs",t),sl()}async function sl(){const n=il().filter(i=>i!==h.hid),e=p("hhList");if(!e)return;if(!n.length){e.innerHTML='<div style="font-size:.82rem;color:var(--mt);padding:10px 0">No other households yet.</div>';return}const t=[];for(const i of n){let s=i;try{const r=await ie(`households/${i}`);r!=null&&r.name&&(s=r.name)}catch{}t.push({id:i,name:s})}e.innerHTML=t.map(({id:i,name:s})=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px;cursor:pointer" onclick="switchHousehold('${i}')">
      <div>
        <div style="font-size:.88rem;font-weight:500;color:var(--tx)">${s}</div>
        <div style="font-size:.7rem;color:var(--mt);margin-top:2px">Tap to switch</div>
      </div>
      <button onclick="event.stopPropagation();removeHousehold('${i}')" style="background:none;border:none;color:var(--mt);cursor:pointer;font-size:.82rem;padding:4px 8px">✕</button>
    </div>`).join("")}const Br={gold:{name:"Gold",swatch:"#d4a853",dark:{bg:"#0f0f0d",sf:"#1a1a17",card:"#222220",card2:"#2a2a27",b1:"#333330",b2:"#3d3d39",ac:"#d4a853",ac2:"#e8c27a",acr:"212,168,83",tx:"#ede8d8",tx2:"#b8b09a",mt:"#7a7468"},light:{bg:"#faf8f2",sf:"#ffffff",card:"#f3ede0",card2:"#efe8d8",b1:"#ddd5c0",b2:"#cec4ac",ac:"#a8732a",ac2:"#c48f3e",acr:"168,115,42",tx:"#2a2418",tx2:"#5c5040",mt:"#9a8870"}},forest:{name:"Forest",swatch:"#4a9e5c",dark:{bg:"#0a1410",sf:"#111f17",card:"#182a1e",card2:"#1e3326",b1:"#2a4032",b2:"#355040",ac:"#6db56d",ac2:"#8fd08f",acr:"109,181,109",tx:"#e4f0e4",tx2:"#9dbf9d",mt:"#5a7a5a"},light:{bg:"#f2f9f2",sf:"#ffffff",card:"#e8f5e8",card2:"#dff0df",b1:"#c0ddc0",b2:"#a8cca8",ac:"#2e7d32",ac2:"#43a047",acr:"46,125,50",tx:"#0d2010",tx2:"#2e4f2e",mt:"#5a7a5a"}},ocean:{name:"Ocean",swatch:"#38bdf8",dark:{bg:"#060e1a",sf:"#0d1829",card:"#112035",card2:"#162840",b1:"#1e3554",b2:"#264468",ac:"#38bdf8",ac2:"#7dd3fc",acr:"56,189,248",tx:"#e0f2fe",tx2:"#7ab8d4",mt:"#486880"},light:{bg:"#f0f8ff",sf:"#ffffff",card:"#e0f2fe",card2:"#d4ecf9",b1:"#b0d8f0",b2:"#90c4e4",ac:"#0369a1",ac2:"#0284c7",acr:"3,105,161",tx:"#082040",tx2:"#1e4060",mt:"#4a7090"}},bordeaux:{name:"Bordeaux",swatch:"#e8829a",dark:{bg:"#120810",sf:"#1c0e18",card:"#261420",card2:"#301828",b1:"#4a2238",b2:"#5c2a46",ac:"#e8829a",ac2:"#f4aabb",acr:"232,130,154",tx:"#fce8ee",tx2:"#d4909e",mt:"#8a5060"},light:{bg:"#fff5f7",sf:"#ffffff",card:"#ffe8ed",card2:"#ffd8e0",b1:"#f4b8c4",b2:"#eca0b0",ac:"#be3455",ac2:"#d94070",acr:"190,52,85",tx:"#2a080e",tx2:"#6a2030",mt:"#9a5060"}},sand:{name:"Sand",swatch:"#e07a5f",dark:{bg:"#170e08",sf:"#221508",card:"#2e1c0e",card2:"#382414",b1:"#4a3020",b2:"#5c3c28",ac:"#e07a5f",ac2:"#eca080",acr:"224,122,95",tx:"#fdf0e8",tx2:"#c8a090",mt:"#887060"},light:{bg:"#fdf6ec",sf:"#fffbf5",card:"#f5e8d8",card2:"#eedcc8",b1:"#ddc8ac",b2:"#ccb494",ac:"#c1440e",ac2:"#d4602a",acr:"193,68,14",tx:"#2a1808",tx2:"#5c3820",mt:"#9a7060"}},midnight:{name:"Midnight",swatch:"#818cf8",dark:{bg:"#050814",sf:"#0a0d1f",card:"#0f1228",card2:"#141830",b1:"#1e2448",b2:"#272e58",ac:"#818cf8",ac2:"#a5b0ff",acr:"129,140,248",tx:"#e8eaff",tx2:"#9099cc",mt:"#505880"},light:{bg:"#f0f1ff",sf:"#ffffff",card:"#e4e6ff",card2:"#d8dbff",b1:"#b8bdff",b2:"#a0a6f4",ac:"#4f46e5",ac2:"#6366f1",acr:"79,70,229",tx:"#0a0820",tx2:"#202060",mt:"#5050a0"}},lavender:{name:"Lavender",swatch:"#c084fc",dark:{bg:"#0e0814",sf:"#160e20",card:"#1e1430",card2:"#261a3c",b1:"#382454",b2:"#442c66",ac:"#c084fc",ac2:"#d8a8ff",acr:"192,132,252",tx:"#f5ecff",tx2:"#c0a0e0",mt:"#7a5898"},light:{bg:"#faf5ff",sf:"#ffffff",card:"#f3e8ff",card2:"#ecdcff",b1:"#d8b8f8",b2:"#c8a0f0",ac:"#9333ea",ac2:"#a855f7",acr:"147,51,234",tx:"#1a0830",tx2:"#481080",mt:"#805098"}}};let vs=je("ks-theme")||"gold",ws=je("ks-mode")||"auto";function Hr(n,e){vs=n,ws=e,ut("ks-theme",n),ut("ks-mode",e);const t=Br[n]||Br.gold,s=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?t.dark:t.light,r=document.documentElement.style;r.setProperty("--bg",s.bg),r.setProperty("--sf",s.sf),r.setProperty("--card",s.card),r.setProperty("--card2",s.card2),r.setProperty("--b1",s.b1),r.setProperty("--b2",s.b2),r.setProperty("--ac",s.ac),r.setProperty("--ac2",s.ac2),r.setProperty("--acd","rgba("+s.acr+",.12)"),r.setProperty("--tx",s.tx),r.setProperty("--tx2",s.tx2),r.setProperty("--mt",s.mt),r.setProperty("--gn","#6db56d"),r.setProperty("--gnd","rgba(109,181,109,.12)"),r.setProperty("--rd","#d96b6b"),r.setProperty("--rdd","rgba(217,107,107,.12)"),r.setProperty("--am","#c8960a"),r.setProperty("--amd","rgba(200,150,10,.12)"),mm(e),gm(n)}function ek(n){Hr(vs,n)}function mm(n){["auto","light","dark"].forEach(e=>{const t=p("mode-"+e);t&&(t.style.background=e===n?"var(--ac)":"",t.style.color=e===n?"var(--bg)":"",t.style.borderColor=e===n?"var(--ac)":"")})}function gm(n){const e=p("themePicker");e&&(e.innerHTML="",Object.keys(Br).forEach(t=>{const i=Br[t],s=t===n,r=document.createElement("div");r.title=i.name,r.style.cssText="width:36px;height:36px;border-radius:50%;background:"+i.swatch+";cursor:pointer;border:3px solid "+(s?"var(--tx)":"transparent")+";box-shadow:"+(s?"0 0 0 2px var(--ac)":"none")+";transition:all .2s;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.85rem",r.textContent=s?"✓":"",r.onclick=()=>Hr(t,ws),r.onmouseover=function(){this.style.transform="scale(1.15)"},r.onmouseout=function(){this.style.transform="scale(1)"},e.appendChild(r)}))}function tk(){Hr(vs,ws),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{ws==="auto"&&Hr(vs,"auto")})}function nk(){gm(vs),mm(ws)}async function ik(){const n=p("enrichBtn"),e=p("enrichProgress"),t=p("enrichStatus"),i=p("enrichBar");n&&(n.disabled=!0),e&&(e.style.display="block");const s=h.shop.filter(d=>Yd(d)),r=h.inv.filter(d=>Yd(d)),o=[...s.map(d=>({item:d,list:"shop"})),...r.map(d=>({item:d,list:"inv"}))];if(!o.length){t&&(t.textContent="All items already enriched!"),i&&(i.style.width="100%"),n&&(n.disabled=!1),P("Nothing to enrich — all items already have data.");return}let c=0,u=0;for(let d=0;d<o.length;d++){const{item:m,list:y}=o[d],w=Math.round((d+1)/o.length*100);t&&(t.textContent=`Processing "${m.name}" (${d+1}/${o.length})…`),i&&(i.style.width=w+"%");try{const O=(await(await fetch(`/api/text-search?q=${encodeURIComponent(m.name)}`)).json()).results||[];if(O.length){const L=O[0],z={...m,image:L.image||m.image||null,brand:L.brand||m.brand||"",category:L.category||m.category||"",source:L.source||m.source||"search"};y==="shop"?await Se(z):await be(z),c++}else u++}catch(C){console.warn(`Enrich failed for "${m.name}":`,C),u++}d<o.length-1&&await sk(300)}t&&(t.textContent=`Done! ${c} enriched, ${u} skipped.`),i&&(i.style.width="100%"),n&&(n.disabled=!1),P(`Enrichment complete: ${c} updated, ${u} unchanged.`)}function Yd(n){return!n.name||n.name.length<2||n.imageDismissed?!1:!n.image&&!n.brand}function sk(n){return new Promise(e=>setTimeout(e,n))}let Wt=0;async function rk(){const n=ce();if(n)try{const e=await ie(`users/${n.uid}`);if(e!=null&&e.onboardingDone)return;ok()}catch{}}function ok(){const n=p("ov-onboarding");n&&(Wt=0,n.classList.add("active"),ym())}function ym(){const n=p("onboarding-body");if(!n)return;const t=`<div style="display:flex;gap:6px;justify-content:center;margin-bottom:24px">${Array.from({length:4},(i,s)=>`<div style="width:8px;height:8px;border-radius:50%;background:${s===Wt?"var(--ac)":"var(--b2)"};transition:background .2s"></div>`).join("")}</div>`;Wt===0?n.innerHTML=`${t}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:4rem;margin-bottom:16px">🧺</div>
        <div style="font-family:'Fraunces',serif;font-size:2rem;font-weight:300;color:var(--ac);margin-bottom:12px">Welcome to Kitchen!</div>
        <p style="font-size:.92rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 28px">Your smart kitchen assistant that tracks inventory, plans meals, finds deals, and suggests recipes — all powered by AI.</p>
        <button class="btn bp bf" onclick="onboardNext()">Let's get started →</button>
      </div>`:Wt===1?n.innerHTML=`${t}
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
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:16px">Continue →</button>`:Wt===2?n.innerHTML=`${t}
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
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:20px">Almost done →</button>`:Wt===3&&(n.innerHTML=`${t}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:3rem;margin-bottom:16px">🎉</div>
        <div style="font-family:'Fraunces',serif;font-size:1.6rem;font-weight:300;color:var(--ac);margin-bottom:12px">You're all set!</div>
        <p style="font-size:.88rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 24px">Start by adding your first item to the pantry, or ask Claude for dinner ideas.</p>
        <div style="display:flex;flex-direction:column;gap:10px">
          <button class="btn bp bf" onclick="finishOnboarding();showOv('scan')">📷 Scan your first item</button>
          <button class="btn bs bf" onclick="finishOnboarding();showScreen('chat')">✨ Ask Claude for ideas</button>
          <button class="btn bs bf" onclick="finishOnboarding()">🏠 Go to Home</button>
        </div>
      </div>`)}async function ak(){var n,e,t,i,s,r,o,c,u,d,m,y,w;if(Wt===1){const C=(e=(n=p("ob-name"))==null?void 0:n.value)==null?void 0:e.trim(),x=(i=(t=p("ob-adults"))==null?void 0:t.value)==null?void 0:i.trim(),O=(r=(s=p("ob-kids"))==null?void 0:s.value)==null?void 0:r.trim(),L=(c=(o=p("ob-cuisines"))==null?void 0:o.value)==null?void 0:c.trim(),z=(u=p("ob-cooktime"))==null?void 0:u.value;C&&(h.cfg.name=C),x&&(h.cfg.adults=x),O&&(h.cfg.kids=O),L&&(h.cfg.cuisines=L),z&&(h.cfg.cookTime=z),h.cfg.nopork=((d=p("ob-nopork"))==null?void 0:d.checked)||!1,h.cfg.noshellfish=((m=p("ob-noshellfish"))==null?void 0:m.checked)||!1,h.cfg.vegetarian=((y=p("ob-vegetarian"))==null?void 0:y.checked)||!1,h.cfg.glutenfree=((w=p("ob-glutenfree"))==null?void 0:w.checked)||!1,await Xr()}Wt++,ym()}async function vm(){const n=p("ov-onboarding");n&&n.classList.remove("active");const e=ce();if(e)try{const t=await ie(`users/${e.uid}`);t&&await K(`users/${e.uid}`,{...t,onboardingDone:!0,id:void 0})}catch{}}async function ck(){await vm(),P("You can always adjust settings later ⚙️")}window.getIdToken=sf;U.renderAll=Vc;U.renderSum=xs;U.renderRecs=vo;U.renderShop=Ei;OI(go);window.showScreen=function(n){var e,t;document.querySelectorAll(".ov.active").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".screen").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".ni").forEach(i=>i.classList.remove("active")),(e=p("screen-"+n))==null||e.classList.add("active"),(t=p("nav-"+n))==null||t.classList.add("active"),n==="home"&&Tp(),n==="inventory"&&go(),n==="recipes"&&(h.rt==="community"?Xc():vo()),n==="shopping"&&Ei(),n==="insights"&&nA()};const lk=Lt;window.showOv=function(n){lk(n),n==="settings"&&setTimeout(nk,80)};window.hideOv=ke;window.initHome=$c;window.addLowToShop=UI;window.toggleExp=function(){const n=p("exppanel");n.style.display=n.style.display==="none"?"block":"none"};window.openAdj=z0;window.updL=Y0;window.adjQ=X0;window.adjQD=Z0;window.adjE=eS;window.adjNote=tS;window.setIT=sS;window.addManual=rS;window.valMA=oS;window.chgMQ=aS;window.selML=cS;window.remItem=Qc;window.importDoc=lS;window.adjLowThresh=nS;window.adjLowThreshD=iS;window.openInvAddSheet=hS;window.closeInvAddSheet=Ds;window.invAddScan=fS;window.invAddVoice=pS;window.setInvAddLoc=mS;window.toggleInvAddNote=gS;window.qaddInv=yS;window.onInvInput=vS;window.pickInvInlineResult=IS;window.toggleInvVoice=tm;window.openInvItemDetail=Vn;window.closeInvItemDetail=q0;window.deleteInvItemImage=K0;window.triggerInvPhotoUpload=Q0;window.handleInvPhotoSelected=J0;window.qadd=r0;window.togShop=k0;window.toggleShNote=C0;window.saveShNote=R0;window.openShQty=P0;window.adjShQty=x0;window.saveShQty=Jp;window.togAisle=L0;window.setSHT=D0;window.shareList=N0;window.openAddToKitchen=O0;window.setAtkLoc=M0;window.confirmAddToKitchen=$0;window.buildList=V0;window.toggleVoice=jp;window.toggleAddNote=o0;window.openShopAddSheet=a0;window.closeShopAddSheet=Ls;window.shopAddScan=c0;window.shopAddVoice=l0;window.closeEnrichSheet=jr;window.pickEnrichResult=A0;window.onShopInput=h0;window.pickInlineResult=Wp;window.openItemDetail=$n;window.closeItemDetail=_0;window.deleteItemImage=I0;window.triggerProductPhotoUpload=E0;window.handleProductPhotoSelected=S0;window.bpTog=U0;window.bpSelAll=F0;window.bpUpdBtn=function(){};window.bpConfirm=j0;window._bpItems=[];window.searchDeals=B0;window.dealsFromList=H0;window.addDealToList=Xp;window.renderDealsZipBanner=Yp;window.clrChk=function(){h.shop.filter(n=>n.checked).forEach(n=>{Qp(n.name),Ss(n.id)})};window.setRT=kS;window.togFav=CS;window.valR=RS;window.importFromUrl=PS;window.saveRec=DS;window.openER=NS;window.updR=OS;window.delER=MS;window.scaleRec=$S;window.whatCanIMake=VS;window.addRecIngToShop=US;window.setStar=FS;window.togTag=SS;window.togglePublic=jS;window.loadCommunity=Xc;window.setComCuisine=HS;window.setComSearch=zS;window.setComSort=qS;window.toggleComTag=WS;window.setComTime=GS;window.setComMinRating=KS;window.openComRecipe=QS;window.likeComRecipe=XS;window.saveComToKitchen=ZS;window.addComComment=eA;window.shareComRecipe=tA;window.submitComReview=JS;window.unpublishComRecipe=YS;window.sendChat=rm;window.sendPill=cA;window.clrChat=lA;window.ar=om;window.importChatRecipe=aA;window.stopLiveScanner=el;window.resumeScanner=pA;window.openScanForList=mA;window.openScanForInventory=gA;window.addScannedToList=vA;window.toggleScanNote=yA;window.togManual=wA;window.manLookup=_A;window.selRL=tl;window.valAdd=TA;window.addToInv=IA;window.chgAQ=EA;window.swipeDelItem=AA;window.swipeRowTap=kA;window.togShopSelect=CA;window.togInvSelect=RA;window.cancelSelect=pi;window.deleteSelected=PA;window.openMealM=DA;window.pickRec=NA;window.closeMealM=nl;window.saveMeal=OA;window.clrMeal=MA;window.openCooked=$A;window.skipCooked=VA;window.saveCooked=UA;window.scheduleRecipe=FA;window.schedSet=jA;window.initRecChips=dm;window.toggleChip=LA;window.filterRecs=hm;window._pickedRec=null;window._activeChips=new Set;window.saveSettings=HA;window.saveZipcode=zA;window.toggleNotif=qA;window.testNotif=WA;window.addHousehold=YA;window.switchHousehold=XA;window.removeHousehold=ZA;window.setMode=ek;window.showNotif=P;window.copyInviteCode=GA;window.shareInviteCode=KA;window.regenInviteCode=QA;window.removeMemberFromHH=JA;window.enrichExistingItems=ik;window.manualRefresh=async function(n){const e=event==null?void 0:event.target;e&&(e.classList.add("spinning"),setTimeout(()=>e.classList.remove("spinning"),600)),he("syncing");try{(n==="shop"||n==="both")&&(h.shop=await Ne(`households/${h.hid}/shopping`),Ei()),(n==="inv"||n==="both")&&(h.inv=await Ne(`households/${h.hid}/inventory`),go(),Vc()),he("synced"),P("Refreshed ✓")}catch(t){console.error("manualRefresh error:",t),he("error"),P("Refresh failed")}};window.onboardNext=ak;window.finishOnboarding=vm;window.skipOnboarding=ck;window.saveUsername=async function(){var o;const n=p("usernameInput"),e=p("usernameStatus"),t=p("saveUsernameBtn"),i=((n==null?void 0:n.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(i)){e&&(e.textContent="3-20 characters, letters, numbers, and underscores only.",e.style.color="var(--rd)",e.style.display="block");return}if(t&&(t.disabled=!0,t.textContent="Checking…"),!await df(i)){e&&(e.textContent=`"${i}" is already taken. Try another.`,e.style.color="var(--rd)",e.style.display="block"),t&&(t.disabled=!1,t.textContent="Save");return}const r=ce();r&&(await hf(r.uid,i),P("Username set to @"+i)),(o=p("usernameM"))==null||o.classList.remove("active"),t&&(t.disabled=!1,t.textContent="Save")};window.changeUsername=async function(){const n=p("setUsername"),e=((n==null?void 0:n.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(e)){P("3-20 chars, letters/numbers/underscores only");return}if(e===h.username){P("Username unchanged");return}if(!await df(e)){P(`"${e}" is already taken`);return}const i=ce();i&&(await hf(i.uid,e),P("Username changed to @"+e))};window._appStart=async function(n){var t;h.hid=n,p("LS").style.display="none",p("APP").style.display="flex",window.showScreen("home"),he("syncing");const e=ce();if(e)try{const i=await ie(`users/${e.uid}`);if((t=i==null?void 0:i.householdIds)!=null&&t.length){const s=[...i.householdIds];s.includes(n)||s.push(n),ut("ks-hhs",s)}else{const s=je("ks-hhs")||[n];s.includes(n)||(s.push(n),ut("ks-hhs",s))}}catch{const i=je("ks-hhs")||[n];i.includes(n)||(i.push(n),ut("ks-hhs",i))}else{const i=je("ks-hhs")||[n];i.includes(n)||(i.push(n),ut("ks-hhs",i))}await l_(),BA(),$c(),s0(),ES(),NI(h.hid);try{he("syncing");const i=await Promise.allSettled([Ne(`households/${h.hid}/inventory`),Ne(`households/${h.hid}/recipes`),Ne(`households/${h.hid}/shopping`)]),s=(r,o)=>r.status==="fulfilled"?r.value:o;h.inv=s(i[0],h.inv),h.recs=s(i[1],h.recs),h.shop=s(i[2],h.shop),he("synced"),Vc(),vo(),Ei(),xs()}catch(i){console.error("initial load error",i),he("error")}if(e){const i=await y_(e.uid);h.username=i;const s=p("setUsername");s&&(s.value=i||""),i||setTimeout(()=>{var r;return(r=p("usernameM"))==null?void 0:r.classList.add("active")},600)}setTimeout(rk,500)};tk();SA();h.cfg.notif&&setTimeout(fm,3e3);Ei();function _o(n){p("auth-loading").style.display="none",p("auth-signin").style.display=n==="signin"?"flex":"none",p("auth-signup").style.display=n==="signup"?"flex":"none",p("auth-join").style.display=n==="join"?"flex":"none",p("authError").style.display="none",p("signupError").style.display="none"}function et(n,e){const t=p(n);t&&(t.textContent=e,t.style.display="block")}function bo(n){return{"auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password.","auth/invalid-credential":"Incorrect email or password.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password must be at least 6 characters.","auth/too-many-requests":"Too many attempts. Please try again later.","auth/popup-closed-by-user":"Sign-in popup was closed.","auth/cancelled-popup-request":"Sign-in was cancelled.","auth/account-exists-with-different-credential":"An account already exists with this email using a different sign-in method."}[n.code]||n.message||"Something went wrong. Please try again."}function We(n,e){n&&(e?(n._origText=n.textContent,n.textContent="Please wait…",n.disabled=!0):(n.textContent=n._origText||n.textContent,n.disabled=!1))}var Xd;(Xd=p("btnGoogle"))==null||Xd.addEventListener("click",async()=>{const n=p("btnGoogle");We(n,!0),p("authError").style.display="none";try{await Zw()}catch(e){et("authError",bo(e))}We(n,!1)});var Zd;(Zd=p("btnApple"))==null||Zd.addEventListener("click",async()=>{const n=p("btnApple");We(n,!0),p("authError").style.display="none";try{await e_()}catch(e){et("authError",bo(e))}We(n,!1)});var eh;(eh=p("btnEmailSign"))==null||eh.addEventListener("click",async()=>{var i,s,r;const n=(s=(i=p("authEmail"))==null?void 0:i.value)==null?void 0:s.trim(),e=(r=p("authPass"))==null?void 0:r.value;if(!n||!e){et("authError","Please enter your email and password.");return}const t=p("btnEmailSign");We(t,!0),p("authError").style.display="none";try{await t_(n,e)}catch(o){et("authError",bo(o))}We(t,!1)});var th;(th=p("btnEmailSignup"))==null||th.addEventListener("click",async()=>{var s,r,o,c,u;const n=(r=(s=p("signupName"))==null?void 0:s.value)==null?void 0:r.trim(),e=(c=(o=p("signupEmail"))==null?void 0:o.value)==null?void 0:c.trim(),t=(u=p("signupPass"))==null?void 0:u.value;if(!n){et("signupError","Please enter your name.");return}if(!e||!t){et("signupError","Please enter your email and password.");return}const i=p("btnEmailSignup");We(i,!0),p("signupError").style.display="none";try{await n_(e,t,n)}catch(d){et("signupError",bo(d))}We(i,!1)});var nh;(nh=p("btnToggleSignup"))==null||nh.addEventListener("click",()=>_o("signup"));var ih;(ih=p("btnToggleSignin"))==null||ih.addEventListener("click",()=>_o("signin"));var sh;(sh=p("authPass"))==null||sh.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=p("btnEmailSign"))==null||e.click())});var rh;(rh=p("signupPass"))==null||rh.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=p("btnEmailSignup"))==null||e.click())});window.doSignOut=async function(){confirm("Sign out of Kitchen?")&&await i_()};let fa=!1;function zr(n){localStorage.setItem("ks-h",n),p("LS").style.display="none",p("APP").style.display="flex",window._appStart(n)}function uk(n){_o("join"),p("btnCreateKitchen").onclick=async()=>{var e;We(p("btnCreateKitchen"),!0);try{const t=((e=h.cfg)==null?void 0:e.name)||"My Kitchen";await of(n.uid,t);const i=await Ia(n);i.householdIds=[n.uid],await K(`users/${n.uid}`,i),localStorage.removeItem("ks-h");const s=je("ks-hhs");if(s){const r=s.filter(o=>o!==n.uid);r.push(n.uid),localStorage.setItem("ks-hhs",JSON.stringify(r))}zr(n.uid)}catch(t){console.error("Create kitchen error:",t),et("joinError","Something went wrong. Please try again."),We(p("btnCreateKitchen"),!1)}},p("btnJoinKitchen").onclick=async()=>{var t,i,s;const e=(s=(i=(t=p("joinCode"))==null?void 0:t.value)==null?void 0:i.trim())==null?void 0:s.toUpperCase();if(!e){et("joinError","Please enter an invite code.");return}We(p("btnJoinKitchen"),!0),p("joinError").style.display="none";try{let r=await ie(`users/${n.uid}`);r||(r=await Ia(n));const o=await af(e,n);if(!o){et("joinError","Invalid invite code. Check and try again."),We(p("btnJoinKitchen"),!1);return}const c=je("ks-hhs")||[];c.includes(o)||c.push(o),ut("ks-hhs",c),zr(o)}catch(r){console.error("Join kitchen error:",r),et("joinError","Something went wrong. Please try again."),We(p("btnJoinKitchen"),!1)}}}Yw(async n=>{var e;if(n){if(localStorage.setItem("ks-who",n.displayName||((e=n.email)==null?void 0:e.split("@")[0])||"You"),!fa){fa=!0;try{const t=await ie(`users/${n.uid}`),i=localStorage.getItem("ks-h"),s=je("ks-hhs");if(!!t||!!i||s&&s.length>0){p("LS").style.display="none",p("APP").style.display="flex";const o=await a_(n);zr(o)}else uk(n)}catch(t){console.error("Failed to resolve household:",t);const i=n.uid;zr(i)}}}else bp(),fa=!1,p("APP").style.display="none",p("LS").style.display="flex",_o("signin")});
