(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Er={name:"The Bora Family",adults:"Bora",kids:"1 toddler (age 3)",nopork:!0,noshellfish:!1,vegetarian:!1,glutenfree:!1,other:"",cuisines:"Bangladeshi, Turkish, Mediterranean, American",cookTime:"40-60 min",zipcode:""},h={hid:null,inv:[],recs:[],shop:[],mp:{},cfg:{...Er},cookLog:[],wasteLog:[],chat:[],cp:null,selR:"fridge",maL:"fridge",adjId:null,it:"all",rt:"all",md:null,cn:"",nr:0,eid:null,scanDestList:!1,aisleMode:!1,selectMode:null,selectedIds:new Set,username:null,comRecs:[],comTab:"browse",comSearch:"",comCuisine:"all",comSort:"newest",comTags:[],comTime:"any",comMinRating:0,comPage:0,myLikes:new Set};function je(n){try{return JSON.parse(localStorage.getItem(n))}catch{return null}}function ut(n,e){localStorage.setItem(n,JSON.stringify(e))}const ig=()=>{};var cu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},sg=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|c&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},lh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,d=l?n[s+2]:0,m=r>>2,y=(r&3)<<4|c>>4;let w=(c&15)<<2|d>>6,C=d&63;l||(C=64,o||(w=64)),i.push(t[m],t[y],t[w],t[C])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ch(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):sg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const y=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||c==null||d==null||y==null)throw new rg;const w=r<<2|c>>4;if(i.push(w),d!==64){const C=c<<4&240|d>>2;if(i.push(C),y!==64){const P=d<<6&192|y;i.push(P)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class rg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const og=function(n){const e=ch(n);return lh.encodeByteArray(e,!0)},Sr=function(n){return og(n).replace(/\./g,"")},uh=function(n){try{return lh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ag(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const cg=()=>ag().__FIREBASE_DEFAULTS__,lg=()=>{if(typeof process>"u"||typeof cu>"u")return;const n=cu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ug=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&uh(n[1]);return e&&JSON.parse(e)},qr=()=>{try{return ig()||cg()||lg()||ug()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},dh=n=>{var e,t;return(t=(e=qr())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},hh=n=>{const e=dh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},fh=()=>{var n;return(n=qr())==null?void 0:n.config},ph=n=>{var e;return(e=qr())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function dn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ja(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function mh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Sr(JSON.stringify(t)),Sr(JSON.stringify(o)),""].join(".")}const Zi={};function hg(){const n={prod:[],emulator:[]};for(const e of Object.keys(Zi))Zi[e]?n.emulator.push(e):n.prod.push(e);return n}function fg(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let lu=!1;function Ya(n,e){if(typeof window>"u"||typeof document>"u"||!dn(window.location.host)||Zi[n]===e||Zi[n]||lu)return;Zi[n]=e;function t(w){return`__firebase__banner__${w}`}const i="__firebase__banner",r=hg().prod.length>0;function o(){const w=document.getElementById(i);w&&w.remove()}function c(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function l(w,C){w.setAttribute("width","24"),w.setAttribute("id",C),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function d(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{lu=!0,o()},w}function m(w,C){w.setAttribute("id",C),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function y(){const w=fg(i),C=t("text"),P=document.getElementById(C)||document.createElement("span"),$=t("learnmore"),L=document.getElementById($)||document.createElement("a"),B=t("preprendIcon"),G=document.getElementById(B)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const M=w.element;c(M),m(L,$);const U=d();l(G,B),M.append(G,P,L,U),document.body.appendChild(M)}r?(P.innerText="Preview backend disconnected.",G.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function mg(){var e;const n=(e=qr())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function yg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function vg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wg(){const n=$e();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function _g(){return!mg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bg(){try{return typeof indexedDB=="object"}catch{return!1}}function Tg(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig="FirebaseError";class wt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Ig,Object.setPrototypeOf(this,wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_s.prototype.create)}}class _s{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Eg(r,i):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new wt(s,c,i)}}function Eg(n,e){return n.replace(Sg,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Sg=/\{\$([^}]+)}/g;function Ag(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function xn(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(uu(r)&&uu(o)){if(!xn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function uu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Wi(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Gi(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function kg(n,e){const t=new Cg(n,e);return t.subscribe.bind(t)}class Cg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Rg(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Wo),s.error===void 0&&(s.error=Wo),s.complete===void 0&&(s.complete=Wo);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Rg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Wo(){}/**
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
 */function xe(n){return n&&n._delegate?n._delegate:n}class nn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class xg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new dg;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Lg(e))try{this.getOrInitializeService({instanceIdentifier:In})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=In){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=In){return this.instances.has(e)}getOptions(e=In){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(r);i===c&&o.resolve(s)}return s}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Pg(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=In){return this.component?this.component.multipleInstances?e:In:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Pg(n){return n===In?void 0:n}function Lg(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new xg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(J||(J={}));const Ng={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},$g=J.INFO,Og={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},Mg=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Og[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xa{constructor(e){this.name=e,this._logLevel=$g,this._logHandler=Mg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ng[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const Vg=(n,e)=>e.some(t=>n instanceof t);let du,hu;function Ug(){return du||(du=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fg(){return hu||(hu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gh=new WeakMap,pa=new WeakMap,yh=new WeakMap,Go=new WeakMap,Za=new WeakMap;function jg(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Jt(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&gh.set(t,n)}).catch(()=>{}),Za.set(e,n),e}function Bg(n){if(pa.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});pa.set(n,e)}let ma={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return pa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||yh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Jt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Hg(n){ma=n(ma)}function zg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Ko(this),e,...t);return yh.set(i,e.sort?e.sort():[e]),Jt(i)}:Fg().includes(n)?function(...e){return n.apply(Ko(this),e),Jt(gh.get(this))}:function(...e){return Jt(n.apply(Ko(this),e))}}function qg(n){return typeof n=="function"?zg(n):(n instanceof IDBTransaction&&Bg(n),Vg(n,Ug())?new Proxy(n,ma):n)}function Jt(n){if(n instanceof IDBRequest)return jg(n);if(Go.has(n))return Go.get(n);const e=qg(n);return e!==n&&(Go.set(n,e),Za.set(e,n)),e}const Ko=n=>Za.get(n);function Wg(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),c=Jt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Jt(o.result),l.oldVersion,l.newVersion,Jt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Gg=["get","getKey","getAll","getAllKeys","count"],Kg=["put","add","delete","clear"],Qo=new Map;function fu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Qo.get(e))return Qo.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Kg.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Gg.includes(t)))return;const r=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let d=l.store;return i&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&l.done]))[0]};return Qo.set(e,r),r}Hg(n=>({...n,get:(e,t,i)=>fu(e,t)||n.get(e,t,i),has:(e,t)=>!!fu(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Jg(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Jg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ga="@firebase/app",pu="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct=new Xa("@firebase/app"),Yg="@firebase/app-compat",Xg="@firebase/analytics-compat",Zg="@firebase/analytics",ey="@firebase/app-check-compat",ty="@firebase/app-check",ny="@firebase/auth",iy="@firebase/auth-compat",sy="@firebase/database",ry="@firebase/data-connect",oy="@firebase/database-compat",ay="@firebase/functions",cy="@firebase/functions-compat",ly="@firebase/installations",uy="@firebase/installations-compat",dy="@firebase/messaging",hy="@firebase/messaging-compat",fy="@firebase/performance",py="@firebase/performance-compat",my="@firebase/remote-config",gy="@firebase/remote-config-compat",yy="@firebase/storage",vy="@firebase/storage-compat",wy="@firebase/firestore",_y="@firebase/ai",by="@firebase/firestore-compat",Ty="firebase",Iy="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya="[DEFAULT]",Ey={[ga]:"fire-core",[Yg]:"fire-core-compat",[Zg]:"fire-analytics",[Xg]:"fire-analytics-compat",[ty]:"fire-app-check",[ey]:"fire-app-check-compat",[ny]:"fire-auth",[iy]:"fire-auth-compat",[sy]:"fire-rtdb",[ry]:"fire-data-connect",[oy]:"fire-rtdb-compat",[ay]:"fire-fn",[cy]:"fire-fn-compat",[ly]:"fire-iid",[uy]:"fire-iid-compat",[dy]:"fire-fcm",[hy]:"fire-fcm-compat",[fy]:"fire-perf",[py]:"fire-perf-compat",[my]:"fire-rc",[gy]:"fire-rc-compat",[yy]:"fire-gcs",[vy]:"fire-gcs-compat",[wy]:"fire-fst",[by]:"fire-fst-compat",[_y]:"fire-vertex","fire-js":"fire-js",[Ty]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new Map,Sy=new Map,va=new Map;function mu(n,e){try{n.container.addComponent(e)}catch(t){Ct.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Pn(n){const e=n.name;if(va.has(e))return Ct.debug(`There were multiple attempts to register component ${e}.`),!1;va.set(e,n);for(const t of Ar.values())mu(t,n);for(const t of Sy.values())mu(t,n);return!0}function Wr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ue(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yt=new _s("app","Firebase",Ay);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=Iy;function vh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:ya,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw Yt.create("bad-app-name",{appName:String(s)});if(t||(t=fh()),!t)throw Yt.create("no-options");const r=Ar.get(s);if(r){if(xn(t,r.options)&&xn(i,r.config))return r;throw Yt.create("duplicate-app",{appName:s})}const o=new Dg(s);for(const l of va.values())o.addComponent(l);const c=new ky(t,i,o);return Ar.set(s,c),c}function ec(n=ya){const e=Ar.get(n);if(!e&&n===ya&&fh())return vh();if(!e)throw Yt.create("no-app",{appName:n});return e}function ht(n,e,t){let i=Ey[n]??n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),r=e.match(/\s|\//);if(s||r){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ct.warn(o.join(" "));return}Pn(new nn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Cy="firebase-heartbeat-database",Ry=1,ds="firebase-heartbeat-store";let Jo=null;function wh(){return Jo||(Jo=Wg(Cy,Ry,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ds)}catch(t){console.warn(t)}}}}).catch(n=>{throw Yt.create("idb-open",{originalErrorMessage:n.message})})),Jo}async function xy(n){try{const t=(await wh()).transaction(ds),i=await t.objectStore(ds).get(_h(n));return await t.done,i}catch(e){if(e instanceof wt)Ct.warn(e.message);else{const t=Yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ct.warn(t.message)}}}async function gu(n,e){try{const i=(await wh()).transaction(ds,"readwrite");await i.objectStore(ds).put(e,_h(n)),await i.done}catch(t){if(t instanceof wt)Ct.warn(t.message);else{const i=Yt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ct.warn(i.message)}}}function _h(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Py=1024,Ly=30;class Dy{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new $y(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=yu();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>Ly){const o=Oy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Ct.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=yu(),{heartbeatsToSend:i,unsentEntries:s}=Ny(this._heartbeatsCache.heartbeats),r=Sr(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Ct.warn(t),""}}}function yu(){return new Date().toISOString().substring(0,10)}function Ny(n,e=Py){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),vu(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),vu(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class $y{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bg()?Tg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await xy(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return gu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return gu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function vu(n){return Sr(JSON.stringify({version:2,heartbeats:n})).length}function Oy(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(n){Pn(new nn("platform-logger",e=>new Qg(e),"PRIVATE")),Pn(new nn("heartbeat",e=>new Dy(e),"PRIVATE")),ht(ga,pu,n),ht(ga,pu,"esm2020"),ht("fire-js","")}My("");var Vy="firebase",Uy="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ht(Vy,Uy,"app");function bh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fy=bh,Th=new _s("auth","Firebase",bh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new Xa("@firebase/auth");function jy(n,...e){kr.logLevel<=J.WARN&&kr.warn(`Auth (${Un}): ${n}`,...e)}function ur(n,...e){kr.logLevel<=J.ERROR&&kr.error(`Auth (${Un}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(n,...e){throw nc(n,...e)}function tt(n,...e){return nc(n,...e)}function tc(n,e,t){const i={...Fy(),[e]:t};return new _s("auth","Firebase",i).create(e,{appName:n.name})}function ft(n){return tc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ih(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&Ye(n,"argument-error"),tc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function nc(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Th.create(n,...e)}function j(n,e,...t){if(!n)throw nc(e,...t)}function St(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ur(e),new Error(e)}function Rt(n,e){n||St(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function By(){return wu()==="http:"||wu()==="https:"}function wu(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(By()||yg()||"connection"in navigator)?navigator.onLine:!0}function zy(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t){this.shortDelay=e,this.longDelay=t,Rt(t>e,"Short delay should be less than long delay!"),this.isMobile=pg()||vg()}get(){return Hy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(n,e){Rt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;St("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;St("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;St("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Gy=new Ts(3e4,6e4);function hn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Lt(n,e,t,i,s={}){return Sh(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const c=bs({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:l,...r};return gg()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&dn(n.emulatorConfig.host)&&(d.credentials="include"),Eh.fetch()(await Ah(n,n.config.apiHost,t,c),d)})}async function Sh(n,e,t){n._canInitEmulator=!1;const i={...qy,...e};try{const s=new Qy(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Qs(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const c=r.ok?o.errorMessage:o.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qs(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Qs(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Qs(n,"user-disabled",o);const m=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw tc(n,m,d);Ye(n,m)}}catch(s){if(s instanceof wt)throw s;Ye(n,"network-request-failed",{message:String(s)})}}async function Is(n,e,t,i,s={}){const r=await Lt(n,e,t,i,s);return"mfaPendingCredential"in r&&Ye(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function Ah(n,e,t,i){const s=`${e}${t}?${i}`,r=n,o=r.config.emulator?ic(n.config,s):`${n.config.apiScheme}://${s}`;return Wy.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function Ky(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Qy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(tt(this.auth,"network-request-failed")),Gy.get())})}}function Qs(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=tt(n,e,i);return s.customData._tokenResponse=t,s}function _u(n){return n!==void 0&&n.enterprise!==void 0}class Jy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Ky(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Yy(n,e){return Lt(n,"GET","/v2/recaptchaConfig",hn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xy(n,e){return Lt(n,"POST","/v1/accounts:delete",e)}async function Cr(n,e){return Lt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Zy(n,e=!1){const t=xe(n),i=await t.getIdToken(e),s=sc(i);j(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:es(Yo(s.auth_time)),issuedAtTime:es(Yo(s.iat)),expirationTime:es(Yo(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Yo(n){return Number(n)*1e3}function sc(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return ur("JWT malformed, contained fewer than 3 sections"),null;try{const s=uh(t);return s?JSON.parse(s):(ur("Failed to decode base64 JWT payload"),null)}catch(s){return ur("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function bu(n){const e=sc(n);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ai(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof wt&&ev(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function ev({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function Rr(n){var y;const e=n.auth,t=await n.getIdToken(),i=await ai(n,Cr(e,{idToken:t}));j(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const r=(y=s.providerUserInfo)!=null&&y.length?kh(s.providerUserInfo):[],o=iv(n.providerData,r),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),d=c?l:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new _a(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,m)}async function nv(n){const e=xe(n);await Rr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iv(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function kh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sv(n,e){const t=await Sh(n,{},async()=>{const i=bs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=await Ah(n,s,"/v1/token",`key=${r}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:i};return n.emulatorConfig&&dn(n.emulatorConfig.host)&&(l.credentials="include"),Eh.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function rv(n,e){return Lt(n,"POST","/v2/accounts:revokeToken",hn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){j(e.length!==0,"internal-error");const t=bu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await sv(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new Xn;return i&&(j(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(j(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(j(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xn,this.toJSON())}_performRefresh(){return St("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(n,e){j(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ze{constructor({uid:e,auth:t,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new tv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new _a(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ai(this,this.stsTokenManager.getToken(this.auth,e));return j(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Zy(this,e)}reload(){return nv(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ze({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Rr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ue(this.auth.app))return Promise.reject(ft(this.auth));const e=await this.getIdToken();return await ai(this,Xy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,s=t.email??void 0,r=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,d=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:y,emailVerified:w,isAnonymous:C,providerData:P,stsTokenManager:$}=t;j(y&&$,e,"internal-error");const L=Xn.fromJSON(this.name,$);j(typeof y=="string",e,"internal-error"),Ut(i,e.name),Ut(s,e.name),j(typeof w=="boolean",e,"internal-error"),j(typeof C=="boolean",e,"internal-error"),Ut(r,e.name),Ut(o,e.name),Ut(c,e.name),Ut(l,e.name),Ut(d,e.name),Ut(m,e.name);const B=new Ze({uid:y,auth:e,email:s,emailVerified:w,displayName:i,isAnonymous:C,photoURL:o,phoneNumber:r,tenantId:c,stsTokenManager:L,createdAt:d,lastLoginAt:m});return P&&Array.isArray(P)&&(B.providerData=P.map(G=>({...G}))),l&&(B._redirectEventId=l),B}static async _fromIdTokenResponse(e,t,i=!1){const s=new Xn;s.updateFromServerResponse(t);const r=new Ze({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Rr(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];j(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?kh(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),c=new Xn;c.updateFromIdToken(i);const l=new Ze({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new _a(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu=new Map;function At(n){Rt(n instanceof Function,"Expected a class definition");let e=Tu.get(n);return e?(Rt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Tu.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ch.type="NONE";const Iu=Ch;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(n,e,t){return`firebase:${n}:${e}:${t}`}class Zn{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=dr(this.userKey,s.apiKey,r),this.fullPersistenceKey=dr("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Cr(this.auth,{idToken:e}).catch(()=>{});return t?Ze._fromGetAccountInfoResponse(this.auth,t,e):null}return Ze._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Zn(At(Iu),e,i);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let r=s[0]||At(Iu);const o=dr(i,e.config.apiKey,e.name);let c=null;for(const d of t)try{const m=await d._get(o);if(m){let y;if(typeof m=="string"){const w=await Cr(e,{idToken:m}).catch(()=>{});if(!w)break;y=await Ze._fromGetAccountInfoResponse(e,w,m)}else y=Ze._fromJSON(e,m);d!==r&&(c=y),r=d;break}}catch{}const l=s.filter(d=>d._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Zn(r,e,i):(r=l[0],c&&await r._set(o,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==r)try{await d._remove(o)}catch{}})),new Zn(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Nh(e))return"Blackberry";if($h(e))return"Webos";if(xh(e))return"Safari";if((e.includes("chrome/")||Ph(e))&&!e.includes("edge/"))return"Chrome";if(Dh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Rh(n=$e()){return/firefox\//i.test(n)}function xh(n=$e()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ph(n=$e()){return/crios\//i.test(n)}function Lh(n=$e()){return/iemobile/i.test(n)}function Dh(n=$e()){return/android/i.test(n)}function Nh(n=$e()){return/blackberry/i.test(n)}function $h(n=$e()){return/webos/i.test(n)}function rc(n=$e()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ov(n=$e()){var e;return rc(n)&&!!((e=window.navigator)!=null&&e.standalone)}function av(){return wg()&&document.documentMode===10}function Oh(n=$e()){return rc(n)||Dh(n)||$h(n)||Nh(n)||/windows phone/i.test(n)||Lh(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(n,e=[]){let t;switch(n){case"Browser":t=Eu($e());break;case"Worker":t=`${Eu($e())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Un}/${i}`}/**
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
 */class cv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,c)=>{try{const l=e(r);o(l)}catch(l){c(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function lv(n,e={}){return Lt(n,"GET","/v2/passwordPolicy",hn(n,e))}/**
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
 */const uv=6;class dv{constructor(e){var i;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??uv,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Su(this),this.idTokenSubscription=new Su(this),this.beforeStateQueue=new cv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Th,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=At(t)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await Zn.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Cr(this,{idToken:e}),i=await Ze._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(Ue(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Rr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ue(this.app))return Promise.reject(ft(this));const t=e?xe(e):null;return t&&j(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ue(this.app)?Promise.reject(ft(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ue(this.app)?Promise.reject(ft(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(At(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lv(this),t=new dv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new _s("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await rv(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&At(e)||this._popupRedirectResolver;j(t,this,"argument-error"),this.redirectPersistenceManager=await Zn.create(this,[At(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(c,this,"internal-error"),c.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;if(Ue(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&jy(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function _t(n){return xe(n)}class Su{constructor(e){this.auth=e,this.observer=null,this.addObserver=kg(t=>this.observer=t)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fv(n){Gr=n}function Vh(n){return Gr.loadJS(n)}function pv(){return Gr.recaptchaEnterpriseScript}function mv(){return Gr.gapiScript}function gv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class yv{constructor(){this.enterprise=new vv}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class vv{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const wv="recaptcha-enterprise",Uh="NO_RECAPTCHA";class _v{constructor(e){this.type=wv,this.auth=_t(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,c)=>{Yy(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new Jy(l);return r.tenantId==null?r._agentRecaptchaConfig=d:r._tenantRecaptchaConfigs[r.tenantId]=d,o(d.siteKey)}}).catch(l=>{c(l)})})}function s(r,o,c){const l=window.grecaptcha;_u(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(d=>{o(d)}).catch(()=>{o(Uh)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new yv().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(c=>{if(!t&&_u(window.grecaptcha))s(c,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=pv();l.length!==0&&(l+=c),Vh(l).then(()=>{s(c,r,o)}).catch(d=>{o(d)})}}).catch(c=>{o(c)})})}}async function Au(n,e,t,i=!1,s=!1){const r=new _v(n);let o;if(s)o=Uh;else try{o=await r.verify(t)}catch{o=await r.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return i?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function ba(n,e,t,i,s){var r;if((r=n._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Au(n,e,t,t==="getOobCode");return i(n,o)}else return i(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Au(n,e,t,t==="getOobCode");return i(n,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(n,e){const t=Wr(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(xn(r,e??{}))return s;Ye(s,"already-initialized")}return t.initialize({options:e})}function Tv(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(At);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Iv(n,e,t){const i=_t(n);j(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=Fh(e),{host:o,port:c}=Ev(e),l=c===null?"":`:${c}`,d={url:`${r}//${o}${l}/`},m=Object.freeze({host:o,port:c,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){j(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),j(xn(d,i.config.emulator)&&xn(m,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=d,i.emulatorConfig=m,i.settings.appVerificationDisabledForTesting=!0,dn(o)?(Ja(`${r}//${o}${l}`),Ya("Auth",!0)):Sv()}function Fh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Ev(n){const e=Fh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:ku(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:ku(o)}}}function ku(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Sv(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return St("not implemented")}_getIdTokenResponse(e){return St("not implemented")}_linkToIdToken(e,t){return St("not implemented")}_getReauthenticationResolver(e){return St("not implemented")}}async function Av(n,e){return Lt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kv(n,e){return Is(n,"POST","/v1/accounts:signInWithPassword",hn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cv(n,e){return Is(n,"POST","/v1/accounts:signInWithEmailLink",hn(n,e))}async function Rv(n,e){return Is(n,"POST","/v1/accounts:signInWithEmailLink",hn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends oc{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new hs(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new hs(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ba(e,t,"signInWithPassword",kv);case"emailLink":return Cv(e,{email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ba(e,i,"signUpPassword",Av);case"emailLink":return Rv(e,{idToken:t,email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const xv="http://localhost";class xt extends oc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new xt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ye("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...r}=t;if(!i||!s)return null;const o=new xt(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ei(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,ei(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ei(e,t)}buildRequest(){const e={requestUri:xv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=bs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Lv(n){const e=Wi(Gi(n)).link,t=e?Wi(Gi(e)).deep_link_id:null,i=Wi(Gi(n)).deep_link_id;return(i?Wi(Gi(i)).link:null)||i||t||e||n}class ac{constructor(e){const t=Wi(Gi(e)),i=t.apiKey??null,s=t.oobCode??null,r=Pv(t.mode??null);j(i&&s&&r,"argument-error"),this.apiKey=i,this.operation=r,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Lv(e);try{return new ac(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(){this.providerId=mi.PROVIDER_ID}static credential(e,t){return hs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=ac.parseLink(t);return j(i,"argument-error"),hs._fromEmailAndCode(e,i.code,i.tenantId)}}mi.PROVIDER_ID="password";mi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";mi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class gi extends Kr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ts extends gi{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return j("providerId"in t&&"signInMethod"in t,"argument-error"),xt._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return j(e.idToken||e.accessToken,"argument-error"),xt._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return ts.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ts.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:r,nonce:o,providerId:c}=e;if(!i&&!s&&!t&&!r||!c)return null;try{return new ts(c)._credential({idToken:t,accessToken:i,nonce:o,pendingToken:r})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends gi{constructor(){super("facebook.com")}static credential(e){return xt._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bt.credential(e.oauthAccessToken)}catch{return null}}}Bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends gi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return xt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Et.credential(t,i)}catch{return null}}}Et.GOOGLE_SIGN_IN_METHOD="google.com";Et.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends gi{constructor(){super("github.com")}static credential(e){return xt._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ht.credential(e.oauthAccessToken)}catch{return null}}}Ht.GITHUB_SIGN_IN_METHOD="github.com";Ht.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends gi{constructor(){super("twitter.com")}static credential(e,t){return xt._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return zt.credential(t,i)}catch{return null}}}zt.TWITTER_SIGN_IN_METHOD="twitter.com";zt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dv(n,e){return Is(n,"POST","/v1/accounts:signUp",hn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await Ze._fromIdTokenResponse(e,i,s),o=Cu(i);return new Ln({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Cu(i);return new Ln({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Cu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends wt{constructor(e,t,i,s){super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,xr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new xr(e,t,i,s)}}function jh(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?xr._fromErrorAndOperation(n,r,e,i):r})}async function Nv(n,e,t=!1){const i=await ai(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ln._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $v(n,e,t=!1){const{auth:i}=n;if(Ue(i.app))return Promise.reject(ft(i));const s="reauthenticate";try{const r=await ai(n,jh(i,s,e,n),t);j(r.idToken,i,"internal-error");const o=sc(r.idToken);j(o,i,"internal-error");const{sub:c}=o;return j(n.uid===c,i,"user-mismatch"),Ln._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ye(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bh(n,e,t=!1){if(Ue(n.app))return Promise.reject(ft(n));const i="signIn",s=await jh(n,i,e),r=await Ln._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function Ov(n,e){return Bh(_t(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hh(n){const e=_t(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Mv(n,e,t){if(Ue(n.app))return Promise.reject(ft(n));const i=_t(n),o=await ba(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Dv).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Hh(n),l}),c=await Ln._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(c.user),c}function Vv(n,e,t){return Ue(n.app)?Promise.reject(ft(n)):Ov(xe(n),mi.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Hh(n),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uv(n,e){return Lt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fv(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=xe(n),r={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await ai(i,Uv(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const c=i.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function jv(n,e,t,i){return xe(n).onIdTokenChanged(e,t,i)}function Bv(n,e,t){return xe(n).beforeAuthStateChanged(e,t)}function Hv(n,e,t,i){return xe(n).onAuthStateChanged(e,t,i)}function zv(n){return xe(n).signOut()}const Pr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Pr,"1"),this.storage.removeItem(Pr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv=1e3,Wv=10;class qh extends zh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Oh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);av()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Wv):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},qv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}qh.type="LOCAL";const Gv=qh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh extends zh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Wh.type="SESSION";const Gh=Wh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Qr(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const c=Array.from(o).map(async d=>d(t.origin,r)),l=await Kv(c);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((c,l)=>{const d=cc("",20);s.port1.start();const m=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(y){const w=y;if(w.data.eventId===d)switch(w.data.status){case"ack":clearTimeout(m),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),c(w.data.response);break;default:clearTimeout(m),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return window}function Jv(n){pt().location.href=n}/**
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
 */function Kh(){return typeof pt().WorkerGlobalScope<"u"&&typeof pt().importScripts=="function"}async function Yv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Xv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Zv(){return Kh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh="firebaseLocalStorageDb",ew=1,Lr="firebaseLocalStorage",Jh="fbase_key";class Es{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Jr(n,e){return n.transaction([Lr],e?"readwrite":"readonly").objectStore(Lr)}function tw(){const n=indexedDB.deleteDatabase(Qh);return new Es(n).toPromise()}function Ta(){const n=indexedDB.open(Qh,ew);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Lr,{keyPath:Jh})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Lr)?e(i):(i.close(),await tw(),e(await Ta()))})})}async function Ru(n,e,t){const i=Jr(n,!0).put({[Jh]:e,value:t});return new Es(i).toPromise()}async function nw(n,e){const t=Jr(n,!1).get(e),i=await new Es(t).toPromise();return i===void 0?null:i.value}function xu(n,e){const t=Jr(n,!0).delete(e);return new Es(t).toPromise()}const iw=800,sw=3;class Yh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ta(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>sw)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qr._getInstance(Zv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await Yv(),!this.activeServiceWorker)return;this.sender=new Qv(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Xv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ta();return await Ru(e,Pr,"1"),await xu(e,Pr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Ru(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>nw(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>xu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Jr(s,!1).getAll();return new Es(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yh.type="LOCAL";const rw=Yh;new Ts(3e4,6e4);/**
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
 */function lc(n,e){return e?At(e):(j(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc extends oc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ei(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ei(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ei(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ow(n){return Bh(n.auth,new uc(n),n.bypassAuthState)}function aw(n){const{auth:e,user:t}=n;return j(t,e,"internal-error"),$v(t,new uc(n),n.bypassAuthState)}async function cw(n){const{auth:e,user:t}=n;return j(t,e,"internal-error"),Nv(t,new uc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ow;case"linkViaPopup":case"linkViaRedirect":return cw;case"reauthViaPopup":case"reauthViaRedirect":return aw;default:Ye(this.auth,"internal-error")}}resolve(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw=new Ts(2e3,1e4);async function Zh(n,e,t){if(Ue(n.app))return Promise.reject(tt(n,"operation-not-supported-in-this-environment"));const i=_t(n);Ih(n,e,Kr);const s=lc(i,t);return new Sn(i,"signInViaPopup",e,s).executeNotNull()}class Sn extends Xh{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Sn.currentPopupAction&&Sn.currentPopupAction.cancel(),Sn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){Rt(this.filter.length===1,"Popup operations only handle one event");const e=cc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)==null?void 0:t.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lw.get())};e()}}Sn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw="pendingRedirect",hr=new Map;class dw extends Xh{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=hr.get(this.auth._key());if(!e){try{const i=await hw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}hr.set(this.auth._key(),e)}return this.bypassAuthState||hr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hw(n,e){const t=tf(e),i=ef(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}async function fw(n,e){return ef(n)._set(tf(e),"true")}function pw(n,e){hr.set(n._key(),e)}function ef(n){return At(n._redirectPersistence)}function tf(n){return dr(uw,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(n,e,t){return mw(n,e,t)}async function mw(n,e,t){if(Ue(n.app))return Promise.reject(ft(n));const i=_t(n);Ih(n,e,Kr),await i._initializationPromise;const s=lc(i,t);return await fw(s,i),s._openRedirect(i,e,"signInViaRedirect")}async function gw(n,e){return await _t(n)._initializationPromise,sf(n,e,!1)}async function sf(n,e,t=!1){if(Ue(n.app))return Promise.reject(ft(n));const i=_t(n),s=lc(i,e),o=await new dw(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=600*1e3;class vw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ww(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!rf(e)){const s=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";t.onError(tt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pu(e))}saveEventToCache(e){this.cachedEventUids.add(Pu(e)),this.lastProcessedEventTime=Date.now()}}function Pu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function rf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ww(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _w(n,e={}){return Lt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tw=/^https?/;async function Iw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await _w(n);for(const t of e)try{if(Ew(t))return}catch{}Ye(n,"unauthorized-domain")}function Ew(n){const e=wa(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!Tw.test(t))return!1;if(bw.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const Sw=new Ts(3e4,6e4);function Lu(){const n=pt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Aw(n){return new Promise((e,t)=>{var s,r,o;function i(){Lu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lu(),t(tt(n,"network-request-failed"))},timeout:Sw.get()})}if((r=(s=pt().gapi)==null?void 0:s.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=pt().gapi)!=null&&o.load)i();else{const c=gv("iframefcb");return pt()[c]=()=>{gapi.load?i():t(tt(n,"network-request-failed"))},Vh(`${mv()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw fr=null,e})}let fr=null;function kw(n){return fr=fr||Aw(n),fr}/**
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
 */const Cw=new Ts(5e3,15e3),Rw="__/auth/iframe",xw="emulator/auth/iframe",Pw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Lw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Dw(n){const e=n.config;j(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ic(e,xw):`https://${n.config.authDomain}/${Rw}`,i={apiKey:e.apiKey,appName:n.name,v:Un},s=Lw.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${bs(i).slice(1)}`}async function Nw(n){const e=await kw(n),t=pt().gapi;return j(t,n,"internal-error"),e.open({where:document.body,url:Dw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Pw,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=tt(n,"network-request-failed"),c=pt().setTimeout(()=>{r(o)},Cw.get());function l(){pt().clearTimeout(c),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const $w={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ow=500,Mw=600,Vw="_blank",Uw="http://localhost";class Du{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Fw(n,e,t,i=Ow,s=Mw){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l={...$w,width:i.toString(),height:s.toString(),top:r,left:o},d=$e().toLowerCase();t&&(c=Ph(d)?Vw:t),Rh(d)&&(e=e||Uw,l.scrollbars="yes");const m=Object.entries(l).reduce((w,[C,P])=>`${w}${C}=${P},`,"");if(ov(d)&&c!=="_self")return jw(e||"",c),new Du(null);const y=window.open(e||"",c,m);j(y,n,"popup-blocked");try{y.focus()}catch{}return new Du(y)}function jw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const Bw="__/auth/handler",Hw="emulator/auth/handler",zw=encodeURIComponent("fac");async function Nu(n,e,t,i,s,r){j(n.config.authDomain,n,"auth-domain-config-required"),j(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Un,eventId:s};if(e instanceof Kr){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Ag(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,y]of Object.entries({}))o[m]=y}if(e instanceof gi){const m=e.getScopes().filter(y=>y!=="");m.length>0&&(o.scopes=m.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const l=await n._getAppCheckToken(),d=l?`#${zw}=${encodeURIComponent(l)}`:"";return`${qw(n)}?${bs(c).slice(1)}${d}`}function qw({config:n}){return n.emulator?ic(n,Hw):`https://${n.authDomain}/${Bw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo="webStorageSupport";class Ww{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gh,this._completeRedirectFn=sf,this._overrideRedirectResult=pw}async _openPopup(e,t,i,s){var o;Rt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await Nu(e,t,i,wa(),s);return Fw(e,r,cc())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Nu(e,t,i,wa(),s);return Jv(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Rt(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Nw(e),i=new vw(e);return t.register("authEvent",s=>(j(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Xo,{type:Xo},s=>{var o;const r=(o=s==null?void 0:s[0])==null?void 0:o[Xo];r!==void 0&&t(!!r),Ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Iw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Oh()||xh()||rc()}}const Gw=Ww;var $u="@firebase/auth",Ou="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Jw(n){Pn(new nn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=i.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mh(n)},d=new hv(i,s,r,l);return Tv(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Pn(new nn("auth-internal",e=>{const t=_t(e.getProvider("auth").getImmediate());return(i=>new Kw(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ht($u,Ou,Qw(n)),ht($u,Ou,"esm2020")}/**
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
 */const Yw=300,Xw=ph("authIdTokenMaxAge")||Yw;let Mu=null;const Zw=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Xw)return;const s=t==null?void 0:t.token;Mu!==s&&(Mu=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function e_(n=ec()){const e=Wr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=bv(n,{popupRedirectResolver:Gw,persistence:[rw,Gv,Gh]}),i=ph("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=Zw(r.toString());Bv(t,o,()=>o(t.currentUser)),jv(t,c=>o(c))}}const s=dh("auth");return s&&Iv(t,`http://${s}`),t}function t_(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}fv({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=tt("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",t_().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Jw("Browser");const n_={apiKey:"AIzaSyAFURz8fEGSTameAW5YvBKWpr2LXv9Ang0",authDomain:"family-pantry-c65d6.firebaseapp.com",projectId:"family-pantry-c65d6",storageBucket:"family-pantry-c65d6.firebasestorage.app",messagingSenderId:"710701847077",appId:"1:710701847077:web:407a8937330ad2ebcfe5cc"},dc=vh(n_),Xe=e_(dc);window._firebaseAuth=Xe;const Vu=new Et,Dr=new ts("apple.com");Dr.addScope("email");Dr.addScope("name");let hc=null;const pr=[];function i_(n){return pr.push(n),n(hc),()=>{const e=pr.indexOf(n);e!==-1&&pr.splice(e,1)}}function s_(n){hc=n,pr.forEach(e=>e(n))}Hv(Xe,n=>{s_(n||null)});gw(Xe).catch(n=>{n.code!=="auth/redirect-cancelled-by-user"&&console.error("Redirect sign-in error:",n)});async function r_(){try{return(await Zh(Xe,Vu)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await nf(Xe,Vu),null;throw n}}async function o_(){try{return(await Zh(Xe,Dr)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await nf(Xe,Dr),null;throw n}}async function a_(n,e){return(await Vv(Xe,n,e)).user}async function c_(n,e,t){const i=await Mv(Xe,n,e);return t&&await Fv(i.user,{displayName:t}),i.user}async function l_(){await zv(Xe)}async function of(){return Xe.currentUser?Xe.currentUser.getIdToken():null}function se(){return hc}async function Yr(n,e,t){const i={"Content-Type":"application/json"},s=await of();s&&(i.Authorization=`Bearer ${s}`);const r=await fetch("/api/db",{method:"POST",headers:i,body:JSON.stringify({op:n,path:e,data:t})});if(!(r.headers.get("content-type")||"").includes("application/json"))throw new Error(`/api/db non-JSON response (status ${r.status}) for ${n} ${e}`);return r.json()}async function ue(n){try{return(await Yr("list",n)).docs||[]}catch(e){return console.warn("dbList:",n,e.message),[]}}async function z(n,e){return Yr("set",n,e)}async function bt(n){return Yr("delete",n)}async function ee(n){try{return(await Yr("get",n)).doc||null}catch{return null}}function af(){return Math.random().toString(36).slice(2,8).toUpperCase()}async function Ia(n){var t;const e={name:n.displayName||((t=n.email)==null?void 0:t.split("@")[0])||"User",email:n.email||"",createdAt:new Date().toISOString(),householdIds:[]};return await z(`users/${n.uid}`,e),e}async function cf(n,e){var o;const t=se(),i=n,s=af(),r={name:e||"My Kitchen",ownerUid:n,members:[{uid:n,name:(t==null?void 0:t.displayName)||((o=t==null?void 0:t.email)==null?void 0:o.split("@")[0])||"Owner",role:"owner"}],memberUids:[n],inviteCode:s,createdAt:new Date().toISOString()};try{await z(`households/${i}`,r),await z(`household_codes/${s}`,{householdId:i})}catch(c){console.error(`[createHousehold] FAILED to write households/${i}:`,c)}return{hid:i,...r}}async function u_(n){const e=await ee(`household_codes/${n.toUpperCase()}`);return(e==null?void 0:e.householdId)||null}async function lf(n,e){var c;const t=await u_(n);if(!t)return null;const i=await ee(`households/${t}`);if(!i)return null;const s=i.members||[],r=i.memberUids||s.map(l=>l.uid);s.find(l=>l.uid===e.uid)||(s.push({uid:e.uid,name:e.displayName||((c=e.email)==null?void 0:c.split("@")[0])||"Member",role:"member"}),r.includes(e.uid)||r.push(e.uid),await z(`households/${t}`,{...i,members:s,memberUids:r,id:void 0}));const o=await ee(`users/${e.uid}`);if(o){const l=o.householdIds||[];l.includes(t)||(l.push(t),await z(`users/${e.uid}`,{...o,householdIds:l,id:void 0}))}return t}async function d_(n){const e=await ee(`households/${n}`);if(!e)return null;if(e.inviteCode)try{await bt(`household_codes/${e.inviteCode}`)}catch{}const t=af();return await z(`household_codes/${t}`,{householdId:n}),await z(`households/${n}`,{...e,inviteCode:t,id:void 0}),t}async function h_(n,e){const t=await ee(`households/${n}`);if(!t)return;const i=(t.members||[]).filter(r=>r.uid!==e),s=(t.memberUids||[]).filter(r=>r!==e);await z(`households/${n}`,{...t,members:i,memberUids:s,id:void 0});try{const r=await ee(`users/${e}`);if(r){const o=(r.householdIds||[]).filter(c=>c!==n);await z(`users/${e}`,{...r,householdIds:o,id:void 0})}}catch{}}async function Uu(n,e){const t=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog"];for(const i of t){const s=await ue(`households/${n}/${i}`);for(const r of s){const o=r.id,c={...r};delete c.id,await z(`households/${e}/${i}/${o}`,c)}}}async function f_(n){var l,d;const e=n.uid;console.log(`[resolveHousehold] ENTER — uid=${e}`);const t=await ee(`users/${e}`);if(console.log("[resolveHousehold] userDoc=",t),t){const m=(l=t.householdIds)!=null&&l.length?t.householdIds[0]:e;console.log(`[resolveHousehold] RETURNING USER — hid=${m}, householdIds=`,t.householdIds);const y=localStorage.getItem("ks-h");return console.log(`[resolveHousehold] RETURNING USER — ks-h="${y}", hid="${m}", uid="${e}"`),console.log(`[resolveHousehold] RETURNING USER — migration condition: oldHid=${!!y}, oldHid!==hid=${y!==m}, oldHid!==uid=${y!==e}`),y&&y!==m&&y!==e?(console.log(`[resolveHousehold] LATE MIGRATION TRIGGERED: ${y} → ${m}`),await Uu(y,m),localStorage.removeItem("ks-h"),console.log("[resolveHousehold] Late migration DONE, ks-h removed")):console.log("[resolveHousehold] RETURNING USER — NO migration needed"),m}console.log("[resolveHousehold] FIRST-TIME LOGIN — no userDoc found");const i=localStorage.getItem("ks-h"),s=i&&i!==e;console.log(`[resolveHousehold] FIRST-TIME — ks-h="${i}", hasOldData=${s}`);const r=((d=h.cfg)==null?void 0:d.name)||"My Kitchen";console.log(`[resolveHousehold] FIRST-TIME — creating household, cfgName="${r}"`),await cf(e,s?r:"My Kitchen"),s&&(console.log(`[resolveHousehold] FIRST-TIME MIGRATION: ${i} → ${e}`),await Uu(i,e),console.log("[resolveHousehold] FIRST-TIME MIGRATION DONE"));const o=await Ia(n);o.householdIds=[e],await z(`users/${e}`,o),console.log("[resolveHousehold] User profile created & saved"),localStorage.removeItem("ks-h");const c=je("ks-hhs");if(c){const m=c.filter(y=>y!==i);m.includes(e)||m.push(e),localStorage.setItem("ks-hhs",JSON.stringify(m))}return console.log(`[resolveHousehold] EXIT — returning uid=${e}`),e}async function Dn(n,e){e?(h.mp[n]=e,await z(`households/${h.hid}/mealplan/${n}`,{date:n,meal:e})):(delete h.mp[n],await bt(`households/${h.hid}/mealplan/${n}`))}async function Xr(){await z(`households/${h.hid}/settings/config`,h.cfg)}async function uf(n,e){const t={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:e||Ea(),loggedAt:new Date().toISOString()};h.cookLog.unshift(t),h.cookLog.length>200&&(h.cookLog=h.cookLog.slice(0,200)),await z(`households/${h.hid}/cooklog/${t.id}`,t)}async function p_(n){if(h.wasteLog.find(t=>t.name===n&&t.date===Ea()))return;const e={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:Ea(),loggedAt:new Date().toISOString()};h.wasteLog.unshift(e),h.wasteLog.length>100&&(h.wasteLog=h.wasteLog.slice(0,100)),await z(`households/${h.hid}/wastelog/${e.id}`,e)}async function m_(){try{try{const r=await ee(`households/${h.hid}`);r&&r.inviteCode&&(await ee(`household_codes/${r.inviteCode}`)||(await z(`household_codes/${r.inviteCode}`,{householdId:h.hid}),console.log(`[backfill] Created household_codes/${r.inviteCode} for household ${h.hid}`)))}catch(r){console.warn("[backfill] household_codes backfill skipped:",r.message)}const e=(await ue(`households/${h.hid}/settings`)).find(r=>r.id==="config");if(e)h.cfg={...Er,...e};else{const r=je("ks-c");h.cfg={...Er,...r||{}},await Xr(),r&&localStorage.removeItem("ks-c")}const t=await ue(`households/${h.hid}/mealplan`);if(h.mp={},t.forEach(r=>{r.date&&r.meal&&(h.mp[r.date]=r.meal)}),!t.length){const r=je("ks-m");if(r&&Object.keys(r).length){h.mp=r;for(const[o,c]of Object.entries(r))await Dn(o,c);localStorage.removeItem("ks-m")}}const i=await ue(`households/${h.hid}/cooklog`);if(i.length)h.cookLog=i.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=je("ks-cooklog");if(r&&r.length){h.cookLog=r.map((o,c)=>({id:o.id||(Date.now()-c).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of h.cookLog)await z(`households/${h.hid}/cooklog/${o.id}`,o);localStorage.removeItem("ks-cooklog")}}const s=await ue(`households/${h.hid}/wastelog`);if(s.length)h.wasteLog=s.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=je("ks-waste");if(r&&r.length){h.wasteLog=r.map((o,c)=>({id:o.id||(Date.now()-c).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of h.wasteLog)await z(`households/${h.hid}/wastelog/${o.id}`,o);localStorage.removeItem("ks-waste")}}}catch(n){console.error("loadFirestoreData error:",n)}}let ns=0;function yi(){ns++,ns===1&&window._pollIntervalId&&(clearInterval(window._pollIntervalId),window._pollIntervalId=null)}function vi(){ns--,ns<=0&&(ns=0,window._pollFn&&!window._pollIntervalId&&(window._pollFn(),window._pollIntervalId=setInterval(window._pollFn,3e4)))}const V={renderAll:null,renderSum:null,renderRecs:null,renderShop:null};function fe(n){var i;const e=document.getElementById("sdot"),t=document.getElementById("slb");e&&(e.className="sdot "+n),t&&(t.textContent=n==="synced"?"🏠 "+(((i=h.cfg)==null?void 0:i.name)||h.hid):n==="syncing"?"Syncing…":"Sync error")}async function Te(n){var e,t;fe("syncing"),yi();try{const i=!h.inv.find(s=>s.id===n.id);h.inv=[...h.inv.filter(s=>s.id!==n.id),n],(e=V.renderAll)==null||e.call(V),(t=V.renderSum)==null||t.call(V),await z(`households/${h.hid}/inventory/${n.id}`,n),i&&fc("added",n.name+" to inventory"),fe("synced")}catch(i){console.error(i),fe("error")}finally{vi()}}async function Zr(n){var e,t;fe("syncing"),yi();try{const i=h.inv.find(s=>s.id===n);h.inv=h.inv.filter(s=>s.id!==n),(e=V.renderAll)==null||e.call(V),(t=V.renderSum)==null||t.call(V),await bt(`households/${h.hid}/inventory/${n}`),i&&fc("removed",i.name+" from inventory"),fe("synced")}catch(i){console.error(i),fe("error")}finally{vi()}}async function sn(n){var e,t;yi();try{h.recs=[...h.recs.filter(i=>i.id!==n.id),n],(e=V.renderRecs)==null||e.call(V),(t=V.renderSum)==null||t.call(V),await z(`households/${h.hid}/recipes/${n.id}`,n)}catch(i){console.error(i)}finally{vi()}}async function g_(n){var e,t;yi();try{h.recs=h.recs.filter(i=>i.id!==n),(e=V.renderRecs)==null||e.call(V),(t=V.renderSum)==null||t.call(V),await bt(`households/${h.hid}/recipes/${n}`)}catch(i){console.error(i)}finally{vi()}}async function ke(n){var e,t;yi();try{const i=!h.shop.find(s=>s.id===n.id);h.shop=[...h.shop.filter(s=>s.id!==n.id),n],(e=V.renderShop)==null||e.call(V),(t=V.renderSum)==null||t.call(V),await z(`households/${h.hid}/shopping/${n.id}`,n),i&&fc("added",n.name+" to shopping list")}catch(i){console.error(i)}finally{vi()}}async function Ss(n){var e,t;yi();try{h.shop=h.shop.filter(i=>i.id!==n),(e=V.renderShop)==null||e.call(V),(t=V.renderSum)==null||t.call(V),await bt(`households/${h.hid}/shopping/${n}`)}catch(i){console.error(i)}finally{vi()}}async function df(n,e,t){var r;const i=n.id,s={title:n.name,ingredients:n.description||"",steps:n.steps||"",tags:n.tags||[],cuisine:n.cuisine||"",imageUrl:n.imageUrl||null,prepTime:n.prepTime||"",cookTime:n.cookTime||"",totalTime:n.totalTime||"",servings:n.servings||"",ingredientsRaw:n.ingredientsRaw||[],stepsRaw:n.stepsRaw||[],authorName:e||"Anonymous",authorUsername:h.username||"",authorUid:((r=se())==null?void 0:r.uid)||"",householdId:t||h.hid,createdAt:new Date().toISOString(),likes:0,commentCount:0,ratingSum:0,ratingCount:0,avgRating:0};return await z(`public_recipes/${i}`,s),{id:i,...s}}async function hf(n){await bt(`public_recipes/${n}`)}async function ff(){return ue("public_recipes")}async function y_(n){return ee(`public_recipes/${n}`)}async function v_(n,e){var o;const t=(o=se())==null?void 0:o.uid;if(!t)return;const i=`public_recipes/${n}/likes/${t}`;e?await bt(i):await z(i,{likedAt:new Date().toISOString()});const s=await ue(`public_recipes/${n}/likes`),r=await ee(`public_recipes/${n}`);r&&await z(`public_recipes/${n}`,{...r,likes:s.length,id:void 0})}async function w_(n,e,t){var c;const i=(c=se())==null?void 0:c.uid;if(!i||!e.trim())return;const s=e.trim().slice(0,500),r="cmt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),o={text:s,authorName:t,authorUsername:h.username||"",authorUid:i,createdAt:new Date().toISOString()};await z(`public_recipes/${n}/comments/${r}`,o);try{const l=await ee(`public_recipes/${n}`);if(l){const d=await ue(`public_recipes/${n}/comments`);await z(`public_recipes/${n}`,{...l,commentCount:d.length,id:void 0}),l.authorUid&&l.authorUid!==i&&await P_(l.authorUid,{type:"comment",recipeId:n,recipeName:l.title||"a recipe",commenterUsername:h.username||t||"Someone"})}}catch{}return{id:r,...o}}async function __(n){return ue(`public_recipes/${n}/comments`)}async function b_(n){var i;const e=(i=se())==null?void 0:i.uid;return e?!!await ee(`public_recipes/${n}/likes/${e}`):!1}async function T_(n){const t={id:"rec-"+Date.now(),name:n.title,description:n.ingredients||"",notes:n.steps||"",tags:n.tags||[],cuisine:n.cuisine||"",imageUrl:n.imageUrl||null,prepTime:n.prepTime||"",cookTime:n.cookTime||"",totalTime:n.totalTime||"",servings:n.servings||"",ingredientsRaw:n.ingredientsRaw||[],stepsRaw:n.stepsRaw||[],rating:0,favorited:!1,source:"Community",sourceUrl:null,cookCount:0,savedAt:new Date().toLocaleDateString()};return await sn(t),t}async function pf(n){return n?!await ee(`usernames/${n.toLowerCase()}`):!1}async function mf(n,e){const t=await ee(`users/${n}`),i=t==null?void 0:t.username;if(i&&i.toLowerCase()!==e.toLowerCase())try{await bt(`usernames/${i.toLowerCase()}`)}catch{}await z(`usernames/${e.toLowerCase()}`,{uid:n}),t&&await z(`users/${n}`,{...t,username:e,id:void 0}),h.username=e}async function I_(n){try{const e=await ee(`users/${n}`);return(e==null?void 0:e.username)||null}catch{return null}}async function E_(n){var t;const e=(t=se())==null?void 0:t.uid;return e?ee(`public_recipes/${n}/reviews/${e}`):null}async function fc(n,e){if(!h.hid||!e)return;const t=localStorage.getItem("ks-who")||"Someone",i="act-"+Date.now().toString(36)+Math.random().toString(36).slice(2),s={memberName:t,action:n,itemName:e,timestamp:new Date().toISOString()};try{await z(`households/${h.hid}/activity/${i}`,s),S_()}catch{}}async function S_(){try{const n=await ue(`households/${h.hid}/activity`),e=Date.now()-10080*60*1e3;for(const t of n)t.timestamp&&new Date(t.timestamp).getTime()<e&&await bt(`households/${h.hid}/activity/${t.id}`)}catch{}}async function A_(){try{return(await ue(`households/${h.hid}/activity`)).sort((e,t)=>new Date(t.timestamp||0)-new Date(e.timestamp||0)).slice(0,10)}catch{return[]}}function Ea(){return new Date().toISOString().split("T")[0]}async function k_(n,e){var y;const t=(y=se())==null?void 0:y.uid;if(!t||!e||e<1||e>5)return null;const i=await ee(`public_recipes/${n}`);if(i&&i.authorUid===t)return null;const s=new Date().toISOString(),r=await ee(`public_recipes/${n}/ratings/${t}`),o={rating:e,createdAt:(r==null?void 0:r.createdAt)||s,updatedAt:s};await z(`public_recipes/${n}/ratings/${t}`,o);const c=await ue(`public_recipes/${n}/ratings`),l=c.reduce((w,C)=>w+(C.rating||0),0),d=c.length,m=d>0?Math.round(l/d*10)/10:0;return i&&await z(`public_recipes/${n}`,{...i,ratingSum:l,ratingCount:d,avgRating:m,id:void 0}),{...o,ratingSum:l,ratingCount:d,avgRating:m}}async function C_(n){var t;const e=(t=se())==null?void 0:t.uid;return e?ee(`public_recipes/${n}/ratings/${e}`):null}async function R_(n,e){await bt(`public_recipes/${n}/comments/${e}`);try{const t=await ee(`public_recipes/${n}`);if(t){const i=await ue(`public_recipes/${n}/comments`);await z(`public_recipes/${n}`,{...t,commentCount:i.length,id:void 0})}}catch{}}async function x_(n,e,t,i){var d;const s=(d=se())==null?void 0:d.uid;if(!s)return null;if((await ue("reports")).find(m=>m.reportedBy===s&&m.targetId===e&&m.type===n))return"duplicate";const c="rpt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),l={type:n,targetId:e,recipeId:i||e,reportedBy:s,reason:t,createdAt:new Date().toISOString(),status:"pending"};return await z(`reports/${c}`,l),{id:c,...l}}async function P_(n,e){if(!n)return;const t="ntf-"+Date.now().toString(36)+Math.random().toString(36).slice(2),i={...e,createdAt:new Date().toISOString(),read:!1};await z(`users/${n}/notifications/${t}`,i)}async function L_(){var t;const n=(t=se())==null?void 0:t.uid;return n?(await ue(`users/${n}/notifications`)).sort((i,s)=>new Date(s.createdAt||0)-new Date(i.createdAt||0)):[]}async function D_(){var t;const n=(t=se())==null?void 0:t.uid;if(!n)return;const e=await ue(`users/${n}/notifications`);for(const i of e)i.read||await z(`users/${n}/notifications/${i.id}`,{...i,read:!0,id:void 0})}async function N_(){var t;const n=(t=se())==null?void 0:t.uid;return n?(await ue(`users/${n}/notifications`)).filter(i=>!i.read).length:0}function p(n){return document.getElementById(n)}function Gt(){return new Date().toISOString().split("T")[0]}function wi(){const n=new Date;n.setHours(0,0,0,0);const e=new Date(n);return e.setDate(n.getDate()-n.getDay()),Array.from({length:7},(t,i)=>{const s=new Date(e);return s.setDate(e.getDate()+i),s})}function $_(){const n=new Date;return n.setDate(n.getDate()+1),n.toISOString().split("T")[0]}function nt(n){if(!n)return null;const e=new Date;e.setHours(0,0,0,0);const t=new Date(n+"T00:00:00"),i=Math.round((t-e)/864e5);return i<0?{c:"expired",l:"Expired"}:i===0?{c:"expiring",l:"Expires today"}:i<=7?{c:"expiring",l:`Expires in ${i}d`}:{c:"ok",l:t.toLocaleDateString("en-US",{month:"short",day:"numeric"})}}function eo(n){return{fridge:"🌡 Fridge",freezer:"🧊 Freezer",pantry:"🥫 Pantry"}[n]||n}const pc={Produce:"🥦",Proteins:"🍗",Dairy:"🧀",Grains:"🌾",Condiments:"🧴",Snacks:"🍿",Beverages:"🥤",Frozen:"❄️",General:"📦",Imported:"📥"};function Fn(n){const e=(n.name||"").toLowerCase(),t=(n.category||"").toLowerCase();return t.includes("produce")||t.includes("vegetable")||t.includes("fruit")||e.match(/apple|banana|broccoli|carrot|celery|cabbage|tomato|onion|garlic|jalap|spinach|mushroom|squash|lettuce|cucumber|pepper/)?"Produce":t.includes("protein")||t.includes("meat")||t.includes("seafood")||t.includes("poultry")||e.match(/chicken|beef|lamb|turkey|salmon|cod|tuna|fish|steak|pork|shrimp/)?"Proteins":t.includes("dairy")||t.includes("egg")||e.match(/egg|butter|cheese|milk|cream|yogurt|ghee/)?"Dairy":t.includes("grain")||t.includes("bread")||t.includes("pasta")||e.match(/rice|pasta|bread|flour|oat|cereal|grain|noodle|tortilla/)?"Grains":t.includes("condiment")||t.includes("sauce")||e.match(/sauce|ketchup|mustard|oil|vinegar|salt|pepper|spice|herb|seasoning|mayo/)?"Condiments":n.location==="freezer"?"Frozen":"General"}function O_(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/^[-•]\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/\n/g,"<br>")}let Zo=null;function R(n){const e=p("notif");e&&(e.textContent=n,e.style.display="block",e.style.animation="none",e.offsetWidth,e.style.animation="fn 2.5s ease forwards",Zo&&clearTimeout(Zo),Zo=setTimeout(()=>e.style.display="none",2500))}function Tt(n){var e;(e=p("ov-"+n))==null||e.classList.add("active")}function Ae(n){var e;(e=p("ov-"+n))==null||e.classList.remove("active")}function is(n,e){const t=p(n);t&&t.querySelectorAll(".star").forEach((i,s)=>{i.textContent=s<e?"★":"☆",i.classList.toggle("on",s<e)})}function mc(n){const e=n.toLowerCase();return/frozen|ice cream|pizza|nugget|waffle|tater|edamame|popsicle/.test(e)?"freezer":/milk|cheese|yogurt|butter|cream|egg|meat|chicken|beef|pork|fish|salmon|shrimp|tofu|deli|bacon|sausage|produce|lettuce|spinach|berry|berries|fruit|vegetable|carrot|broccoli|juice/.test(e)?"fridge":"pantry"}const M_={Produce:["apple","banana","carrot","celery","onion","garlic","tomato","lettuce","cucumber","pepper","broccoli","spinach","mushroom","lemon","lime","herb","cabbage","squash","jalap","avocado","potato","ginger"],"Meat & Fish":["chicken","beef","lamb","turkey","salmon","cod","tuna","fish","steak","shrimp","pork","bacon","sausage","ground"],"Dairy & Eggs":["egg","butter","cheese","milk","cream","yogurt","ghee","kefir"],Frozen:["frozen","ice cream","pizza","nugget","waffle","edamame","okra","lima","broccoli floret"],Pantry:["rice","pasta","flour","oil","vinegar","sauce","spice","salt","pepper","sugar","honey","oat","bread","can","bean","lentil","chickpea","stock","broth"],"Snacks & Drinks":["chip","cracker","cookie","juice","soda","water","tea","coffee","snack","nut","seed"]};function V_(n){const e=n.toLowerCase();for(const[t,i]of Object.entries(M_))if(i.some(s=>e.includes(s)))return t;return"Other"}var Fu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xt,gf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function b(){}b.prototype=v.prototype,T.F=v.prototype,T.prototype=new b,T.prototype.constructor=T,T.D=function(I,E,A){for(var _=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)_[Be-2]=arguments[Be];return v.prototype[E].apply(I,_)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,v,b){b||(b=0);const I=Array(16);if(typeof v=="string")for(var E=0;E<16;++E)I[E]=v.charCodeAt(b++)|v.charCodeAt(b++)<<8|v.charCodeAt(b++)<<16|v.charCodeAt(b++)<<24;else for(E=0;E<16;++E)I[E]=v[b++]|v[b++]<<8|v[b++]<<16|v[b++]<<24;v=T.g[0],b=T.g[1],E=T.g[2];let A=T.g[3],_;_=v+(A^b&(E^A))+I[0]+3614090360&4294967295,v=b+(_<<7&4294967295|_>>>25),_=A+(E^v&(b^E))+I[1]+3905402710&4294967295,A=v+(_<<12&4294967295|_>>>20),_=E+(b^A&(v^b))+I[2]+606105819&4294967295,E=A+(_<<17&4294967295|_>>>15),_=b+(v^E&(A^v))+I[3]+3250441966&4294967295,b=E+(_<<22&4294967295|_>>>10),_=v+(A^b&(E^A))+I[4]+4118548399&4294967295,v=b+(_<<7&4294967295|_>>>25),_=A+(E^v&(b^E))+I[5]+1200080426&4294967295,A=v+(_<<12&4294967295|_>>>20),_=E+(b^A&(v^b))+I[6]+2821735955&4294967295,E=A+(_<<17&4294967295|_>>>15),_=b+(v^E&(A^v))+I[7]+4249261313&4294967295,b=E+(_<<22&4294967295|_>>>10),_=v+(A^b&(E^A))+I[8]+1770035416&4294967295,v=b+(_<<7&4294967295|_>>>25),_=A+(E^v&(b^E))+I[9]+2336552879&4294967295,A=v+(_<<12&4294967295|_>>>20),_=E+(b^A&(v^b))+I[10]+4294925233&4294967295,E=A+(_<<17&4294967295|_>>>15),_=b+(v^E&(A^v))+I[11]+2304563134&4294967295,b=E+(_<<22&4294967295|_>>>10),_=v+(A^b&(E^A))+I[12]+1804603682&4294967295,v=b+(_<<7&4294967295|_>>>25),_=A+(E^v&(b^E))+I[13]+4254626195&4294967295,A=v+(_<<12&4294967295|_>>>20),_=E+(b^A&(v^b))+I[14]+2792965006&4294967295,E=A+(_<<17&4294967295|_>>>15),_=b+(v^E&(A^v))+I[15]+1236535329&4294967295,b=E+(_<<22&4294967295|_>>>10),_=v+(E^A&(b^E))+I[1]+4129170786&4294967295,v=b+(_<<5&4294967295|_>>>27),_=A+(b^E&(v^b))+I[6]+3225465664&4294967295,A=v+(_<<9&4294967295|_>>>23),_=E+(v^b&(A^v))+I[11]+643717713&4294967295,E=A+(_<<14&4294967295|_>>>18),_=b+(A^v&(E^A))+I[0]+3921069994&4294967295,b=E+(_<<20&4294967295|_>>>12),_=v+(E^A&(b^E))+I[5]+3593408605&4294967295,v=b+(_<<5&4294967295|_>>>27),_=A+(b^E&(v^b))+I[10]+38016083&4294967295,A=v+(_<<9&4294967295|_>>>23),_=E+(v^b&(A^v))+I[15]+3634488961&4294967295,E=A+(_<<14&4294967295|_>>>18),_=b+(A^v&(E^A))+I[4]+3889429448&4294967295,b=E+(_<<20&4294967295|_>>>12),_=v+(E^A&(b^E))+I[9]+568446438&4294967295,v=b+(_<<5&4294967295|_>>>27),_=A+(b^E&(v^b))+I[14]+3275163606&4294967295,A=v+(_<<9&4294967295|_>>>23),_=E+(v^b&(A^v))+I[3]+4107603335&4294967295,E=A+(_<<14&4294967295|_>>>18),_=b+(A^v&(E^A))+I[8]+1163531501&4294967295,b=E+(_<<20&4294967295|_>>>12),_=v+(E^A&(b^E))+I[13]+2850285829&4294967295,v=b+(_<<5&4294967295|_>>>27),_=A+(b^E&(v^b))+I[2]+4243563512&4294967295,A=v+(_<<9&4294967295|_>>>23),_=E+(v^b&(A^v))+I[7]+1735328473&4294967295,E=A+(_<<14&4294967295|_>>>18),_=b+(A^v&(E^A))+I[12]+2368359562&4294967295,b=E+(_<<20&4294967295|_>>>12),_=v+(b^E^A)+I[5]+4294588738&4294967295,v=b+(_<<4&4294967295|_>>>28),_=A+(v^b^E)+I[8]+2272392833&4294967295,A=v+(_<<11&4294967295|_>>>21),_=E+(A^v^b)+I[11]+1839030562&4294967295,E=A+(_<<16&4294967295|_>>>16),_=b+(E^A^v)+I[14]+4259657740&4294967295,b=E+(_<<23&4294967295|_>>>9),_=v+(b^E^A)+I[1]+2763975236&4294967295,v=b+(_<<4&4294967295|_>>>28),_=A+(v^b^E)+I[4]+1272893353&4294967295,A=v+(_<<11&4294967295|_>>>21),_=E+(A^v^b)+I[7]+4139469664&4294967295,E=A+(_<<16&4294967295|_>>>16),_=b+(E^A^v)+I[10]+3200236656&4294967295,b=E+(_<<23&4294967295|_>>>9),_=v+(b^E^A)+I[13]+681279174&4294967295,v=b+(_<<4&4294967295|_>>>28),_=A+(v^b^E)+I[0]+3936430074&4294967295,A=v+(_<<11&4294967295|_>>>21),_=E+(A^v^b)+I[3]+3572445317&4294967295,E=A+(_<<16&4294967295|_>>>16),_=b+(E^A^v)+I[6]+76029189&4294967295,b=E+(_<<23&4294967295|_>>>9),_=v+(b^E^A)+I[9]+3654602809&4294967295,v=b+(_<<4&4294967295|_>>>28),_=A+(v^b^E)+I[12]+3873151461&4294967295,A=v+(_<<11&4294967295|_>>>21),_=E+(A^v^b)+I[15]+530742520&4294967295,E=A+(_<<16&4294967295|_>>>16),_=b+(E^A^v)+I[2]+3299628645&4294967295,b=E+(_<<23&4294967295|_>>>9),_=v+(E^(b|~A))+I[0]+4096336452&4294967295,v=b+(_<<6&4294967295|_>>>26),_=A+(b^(v|~E))+I[7]+1126891415&4294967295,A=v+(_<<10&4294967295|_>>>22),_=E+(v^(A|~b))+I[14]+2878612391&4294967295,E=A+(_<<15&4294967295|_>>>17),_=b+(A^(E|~v))+I[5]+4237533241&4294967295,b=E+(_<<21&4294967295|_>>>11),_=v+(E^(b|~A))+I[12]+1700485571&4294967295,v=b+(_<<6&4294967295|_>>>26),_=A+(b^(v|~E))+I[3]+2399980690&4294967295,A=v+(_<<10&4294967295|_>>>22),_=E+(v^(A|~b))+I[10]+4293915773&4294967295,E=A+(_<<15&4294967295|_>>>17),_=b+(A^(E|~v))+I[1]+2240044497&4294967295,b=E+(_<<21&4294967295|_>>>11),_=v+(E^(b|~A))+I[8]+1873313359&4294967295,v=b+(_<<6&4294967295|_>>>26),_=A+(b^(v|~E))+I[15]+4264355552&4294967295,A=v+(_<<10&4294967295|_>>>22),_=E+(v^(A|~b))+I[6]+2734768916&4294967295,E=A+(_<<15&4294967295|_>>>17),_=b+(A^(E|~v))+I[13]+1309151649&4294967295,b=E+(_<<21&4294967295|_>>>11),_=v+(E^(b|~A))+I[4]+4149444226&4294967295,v=b+(_<<6&4294967295|_>>>26),_=A+(b^(v|~E))+I[11]+3174756917&4294967295,A=v+(_<<10&4294967295|_>>>22),_=E+(v^(A|~b))+I[2]+718787259&4294967295,E=A+(_<<15&4294967295|_>>>17),_=b+(A^(E|~v))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+A&4294967295}i.prototype.v=function(T,v){v===void 0&&(v=T.length);const b=v-this.blockSize,I=this.C;let E=this.h,A=0;for(;A<v;){if(E==0)for(;A<=b;)s(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<v;)if(I[E++]=T.charCodeAt(A++),E==this.blockSize){s(this,I),E=0;break}}else for(;A<v;)if(I[E++]=T[A++],E==this.blockSize){s(this,I),E=0;break}}this.h=E,this.o+=v},i.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;v=this.o*8;for(var b=T.length-8;b<T.length;++b)T[b]=v&255,v/=256;for(this.v(T),T=Array(16),v=0,b=0;b<4;++b)for(let I=0;I<32;I+=8)T[v++]=this.g[b]>>>I&255;return T};function r(T,v){var b=c;return Object.prototype.hasOwnProperty.call(b,T)?b[T]:b[T]=v(T)}function o(T,v){this.h=v;const b=[];let I=!0;for(let E=T.length-1;E>=0;E--){const A=T[E]|0;I&&A==v||(b[E]=A,I=!1)}this.g=b}var c={};function l(T){return-128<=T&&T<128?r(T,function(v){return new o([v|0],v<0?-1:0)}):new o([T|0],T<0?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return y;if(T<0)return L(d(-T));const v=[];let b=1;for(let I=0;T>=b;I++)v[I]=T/b|0,b*=4294967296;return new o(v,0)}function m(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return L(m(T.substring(1),v));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const b=d(Math.pow(v,8));let I=y;for(let A=0;A<T.length;A+=8){var E=Math.min(8,T.length-A);const _=parseInt(T.substring(A,A+E),v);E<8?(E=d(Math.pow(v,E)),I=I.j(E).add(d(_))):(I=I.j(b),I=I.add(d(_)))}return I}var y=l(0),w=l(1),C=l(16777216);n=o.prototype,n.m=function(){if($(this))return-L(this).m();let T=0,v=1;for(let b=0;b<this.g.length;b++){const I=this.i(b);T+=(I>=0?I:4294967296+I)*v,v*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(P(this))return"0";if($(this))return"-"+L(this).toString(T);const v=d(Math.pow(T,6));var b=this;let I="";for(;;){const E=U(b,v).g;b=B(b,E.j(v));let A=((b.g.length>0?b.g[0]:b.h)>>>0).toString(T);if(b=E,P(b))return A+I;for(;A.length<6;)A="0"+A;I=A+I}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function P(T){if(T.h!=0)return!1;for(let v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function $(T){return T.h==-1}n.l=function(T){return T=B(this,T),$(T)?-1:P(T)?0:1};function L(T){const v=T.g.length,b=[];for(let I=0;I<v;I++)b[I]=~T.g[I];return new o(b,~T.h).add(w)}n.abs=function(){return $(this)?L(this):this},n.add=function(T){const v=Math.max(this.g.length,T.g.length),b=[];let I=0;for(let E=0;E<=v;E++){let A=I+(this.i(E)&65535)+(T.i(E)&65535),_=(A>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);I=_>>>16,A&=65535,_&=65535,b[E]=_<<16|A}return new o(b,b[b.length-1]&-2147483648?-1:0)};function B(T,v){return T.add(L(v))}n.j=function(T){if(P(this)||P(T))return y;if($(this))return $(T)?L(this).j(L(T)):L(L(this).j(T));if($(T))return L(this.j(L(T)));if(this.l(C)<0&&T.l(C)<0)return d(this.m()*T.m());const v=this.g.length+T.g.length,b=[];for(var I=0;I<2*v;I++)b[I]=0;for(I=0;I<this.g.length;I++)for(let E=0;E<T.g.length;E++){const A=this.i(I)>>>16,_=this.i(I)&65535,Be=T.i(E)>>>16,pn=T.i(E)&65535;b[2*I+2*E]+=_*pn,G(b,2*I+2*E),b[2*I+2*E+1]+=A*pn,G(b,2*I+2*E+1),b[2*I+2*E+1]+=_*Be,G(b,2*I+2*E+1),b[2*I+2*E+2]+=A*Be,G(b,2*I+2*E+2)}for(T=0;T<v;T++)b[T]=b[2*T+1]<<16|b[2*T];for(T=v;T<2*v;T++)b[T]=0;return new o(b,0)};function G(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function M(T,v){this.g=T,this.h=v}function U(T,v){if(P(v))throw Error("division by zero");if(P(T))return new M(y,y);if($(T))return v=U(L(T),v),new M(L(v.g),L(v.h));if($(v))return v=U(T,L(v)),new M(L(v.g),v.h);if(T.g.length>30){if($(T)||$(v))throw Error("slowDivide_ only works with positive integers.");for(var b=w,I=v;I.l(T)<=0;)b=Q(b),I=Q(I);var E=X(b,1),A=X(I,1);for(I=X(I,2),b=X(b,2);!P(I);){var _=A.add(I);_.l(T)<=0&&(E=E.add(b),A=_),I=X(I,1),b=X(b,1)}return v=B(T,E.j(v)),new M(E,v)}for(E=y;T.l(v)>=0;){for(b=Math.max(1,Math.floor(T.m()/v.m())),I=Math.ceil(Math.log(b)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),A=d(b),_=A.j(v);$(_)||_.l(T)>0;)b-=I,A=d(b),_=A.j(v);P(A)&&(A=w),E=E.add(A),T=B(T,_)}return new M(E,T)}n.B=function(T){return U(this,T).h},n.and=function(T){const v=Math.max(this.g.length,T.g.length),b=[];for(let I=0;I<v;I++)b[I]=this.i(I)&T.i(I);return new o(b,this.h&T.h)},n.or=function(T){const v=Math.max(this.g.length,T.g.length),b=[];for(let I=0;I<v;I++)b[I]=this.i(I)|T.i(I);return new o(b,this.h|T.h)},n.xor=function(T){const v=Math.max(this.g.length,T.g.length),b=[];for(let I=0;I<v;I++)b[I]=this.i(I)^T.i(I);return new o(b,this.h^T.h)};function Q(T){const v=T.g.length+1,b=[];for(let I=0;I<v;I++)b[I]=T.i(I)<<1|T.i(I-1)>>>31;return new o(b,T.h)}function X(T,v){const b=v>>5;v%=32;const I=T.g.length-b,E=[];for(let A=0;A<I;A++)E[A]=v>0?T.i(A+b)>>>v|T.i(A+b+1)<<32-v:T.i(A+b);return new o(E,T.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,gf=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=m,Xt=o}).apply(typeof Fu<"u"?Fu:typeof self<"u"?self:typeof window<"u"?window:{});var Js=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yf,Ki,vf,mr,Sa,wf,_f,bf;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Js=="object"&&Js];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var i=t(this);function s(a,u){if(u)e:{var f=i;a=a.split(".");for(var g=0;g<a.length-1;g++){var S=a[g];if(!(S in f))break e;f=f[S]}a=a[a.length-1],g=f[a],u=u(g),u!=g&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(u){var f=[],g;for(g in u)Object.prototype.hasOwnProperty.call(u,g)&&f.push([g,u[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},o=this||self;function c(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function l(a,u,f){return a.call.apply(a.bind,arguments)}function d(a,u,f){return d=l,d.apply(null,arguments)}function m(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function y(a,u){function f(){}f.prototype=u.prototype,a.Z=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(g,S,k){for(var D=Array(arguments.length-2),K=2;K<arguments.length;K++)D[K-2]=arguments[K];return u.prototype[S].apply(g,D)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function C(a){const u=a.length;if(u>0){const f=Array(u);for(let g=0;g<u;g++)f[g]=a[g];return f}return[]}function P(a,u){for(let g=1;g<arguments.length;g++){const S=arguments[g];var f=typeof S;if(f=f!="object"?f:S?Array.isArray(S)?"array":f:"null",f=="array"||f=="object"&&typeof S.length=="number"){f=a.length||0;const k=S.length||0;a.length=f+k;for(let D=0;D<k;D++)a[f+D]=S[D]}else a.push(S)}}class ${constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function L(a){o.setTimeout(()=>{throw a},0)}function B(){var a=T;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class G{constructor(){this.h=this.g=null}add(u,f){const g=M.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var M=new $(()=>new U,a=>a.reset());class U{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Q,X=!1,T=new G,v=()=>{const a=Promise.resolve(void 0);Q=()=>{a.then(b)}};function b(){for(var a;a=B();){try{a.h.call(a.g)}catch(f){L(f)}var u=M;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}X=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,u),o.removeEventListener("test",f,u)}catch{}return a})();function _(a){return/^[\s\xa0]*$/.test(a)}function Be(a,u){E.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}y(Be,E),Be.prototype.init=function(a,u){const f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Be.Z.h.call(this)},Be.prototype.h=function(){Be.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var pn="closure_listenable_"+(Math.random()*1e6|0),Sm=0;function Am(a,u,f,g,S){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=S,this.key=++Sm,this.da=this.fa=!1}function Ns(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function $s(a,u,f){for(const g in a)u.call(f,a[g],g,a)}function km(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function al(a){const u={};for(const f in a)u[f]=a[f];return u}const cl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ll(a,u){let f,g;for(let S=1;S<arguments.length;S++){g=arguments[S];for(f in g)a[f]=g[f];for(let k=0;k<cl.length;k++)f=cl[k],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function Os(a){this.src=a,this.g={},this.h=0}Os.prototype.add=function(a,u,f,g,S){const k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);const D=Io(a,u,g,S);return D>-1?(u=a[D],f||(u.fa=!1)):(u=new Am(u,this.src,k,!!g,S),u.fa=f,a.push(u)),u};function To(a,u){const f=u.type;if(f in a.g){var g=a.g[f],S=Array.prototype.indexOf.call(g,u,void 0),k;(k=S>=0)&&Array.prototype.splice.call(g,S,1),k&&(Ns(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Io(a,u,f,g){for(let S=0;S<a.length;++S){const k=a[S];if(!k.da&&k.listener==u&&k.capture==!!f&&k.ha==g)return S}return-1}var Eo="closure_lm_"+(Math.random()*1e6|0),So={};function ul(a,u,f,g,S){if(Array.isArray(u)){for(let k=0;k<u.length;k++)ul(a,u[k],f,g,S);return null}return f=fl(f),a&&a[pn]?a.J(u,f,c(g)?!!g.capture:!1,S):Cm(a,u,f,!1,g,S)}function Cm(a,u,f,g,S,k){if(!u)throw Error("Invalid event type");const D=c(S)?!!S.capture:!!S;let K=ko(a);if(K||(a[Eo]=K=new Os(a)),f=K.add(u,f,g,D,k),f.proxy)return f;if(g=Rm(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)A||(S=D),S===void 0&&(S=!1),a.addEventListener(u.toString(),g,S);else if(a.attachEvent)a.attachEvent(hl(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Rm(){function a(f){return u.call(a.src,a.listener,f)}const u=xm;return a}function dl(a,u,f,g,S){if(Array.isArray(u))for(var k=0;k<u.length;k++)dl(a,u[k],f,g,S);else g=c(g)?!!g.capture:!!g,f=fl(f),a&&a[pn]?(a=a.i,k=String(u).toString(),k in a.g&&(u=a.g[k],f=Io(u,f,g,S),f>-1&&(Ns(u[f]),Array.prototype.splice.call(u,f,1),u.length==0&&(delete a.g[k],a.h--)))):a&&(a=ko(a))&&(u=a.g[u.toString()],a=-1,u&&(a=Io(u,f,g,S)),(f=a>-1?u[a]:null)&&Ao(f))}function Ao(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[pn])To(u.i,a);else{var f=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(f,g,a.capture):u.detachEvent?u.detachEvent(hl(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=ko(u))?(To(f,a),f.h==0&&(f.src=null,u[Eo]=null)):Ns(a)}}}function hl(a){return a in So?So[a]:So[a]="on"+a}function xm(a,u){if(a.da)a=!0;else{u=new Be(u,this);const f=a.listener,g=a.ha||a.src;a.fa&&Ao(a),a=f.call(g,u)}return a}function ko(a){return a=a[Eo],a instanceof Os?a:null}var Co="__closure_events_fn_"+(Math.random()*1e9>>>0);function fl(a){return typeof a=="function"?a:(a[Co]||(a[Co]=function(u){return a.handleEvent(u)}),a[Co])}function Pe(){I.call(this),this.i=new Os(this),this.M=this,this.G=null}y(Pe,I),Pe.prototype[pn]=!0,Pe.prototype.removeEventListener=function(a,u,f,g){dl(this,a,u,f,g)};function Oe(a,u){var f,g=a.G;if(g)for(f=[];g;g=g.G)f.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new E(u,a);else if(u instanceof E)u.target=u.target||a;else{var S=u;u=new E(g,a),ll(u,S)}S=!0;let k,D;if(f)for(D=f.length-1;D>=0;D--)k=u.g=f[D],S=Ms(k,g,!0,u)&&S;if(k=u.g=a,S=Ms(k,g,!0,u)&&S,S=Ms(k,g,!1,u)&&S,f)for(D=0;D<f.length;D++)k=u.g=f[D],S=Ms(k,g,!1,u)&&S}Pe.prototype.N=function(){if(Pe.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const f=a.g[u];for(let g=0;g<f.length;g++)Ns(f[g]);delete a.g[u],a.h--}}this.G=null},Pe.prototype.J=function(a,u,f,g){return this.i.add(String(a),u,!1,f,g)},Pe.prototype.K=function(a,u,f,g){return this.i.add(String(a),u,!0,f,g)};function Ms(a,u,f,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let S=!0;for(let k=0;k<u.length;++k){const D=u[k];if(D&&!D.da&&D.capture==f){const K=D.listener,we=D.ha||D.src;D.fa&&To(a.i,D),S=K.call(we,g)!==!1&&S}}return S&&!g.defaultPrevented}function Pm(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=d(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function pl(a){a.g=Pm(()=>{a.g=null,a.i&&(a.i=!1,pl(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Lm extends I{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:pl(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Si(a){I.call(this),this.h=a,this.g={}}y(Si,I);var ml=[];function gl(a){$s(a.g,function(u,f){this.g.hasOwnProperty(f)&&Ao(u)},a),a.g={}}Si.prototype.N=function(){Si.Z.N.call(this),gl(this)},Si.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ro=o.JSON.stringify,Dm=o.JSON.parse,Nm=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function yl(){}function vl(){}var Ai={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function xo(){E.call(this,"d")}y(xo,E);function Po(){E.call(this,"c")}y(Po,E);var mn={},wl=null;function Vs(){return wl=wl||new Pe}mn.Ia="serverreachability";function _l(a){E.call(this,mn.Ia,a)}y(_l,E);function ki(a){const u=Vs();Oe(u,new _l(u))}mn.STAT_EVENT="statevent";function bl(a,u){E.call(this,mn.STAT_EVENT,a),this.stat=u}y(bl,E);function Me(a){const u=Vs();Oe(u,new bl(u,a))}mn.Ja="timingevent";function Tl(a,u){E.call(this,mn.Ja,a),this.size=u}y(Tl,E);function Ci(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function Ri(){this.g=!0}Ri.prototype.ua=function(){this.g=!1};function $m(a,u,f,g,S,k){a.info(function(){if(a.g)if(k){var D="",K=k.split("&");for(let re=0;re<K.length;re++){var we=K[re].split("=");if(we.length>1){const Ie=we[0];we=we[1];const st=Ie.split("_");D=st.length>=2&&st[1]=="type"?D+(Ie+"="+we+"&"):D+(Ie+"=redacted&")}}}else D=null;else D=k;return"XMLHTTP REQ ("+g+") [attempt "+S+"]: "+u+`
`+f+`
`+D})}function Om(a,u,f,g,S,k,D){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+S+"]: "+u+`
`+f+`
`+k+" "+D})}function Hn(a,u,f,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Vm(a,f)+(g?" "+g:"")})}function Mm(a,u){a.info(function(){return"TIMEOUT: "+u})}Ri.prototype.info=function(){};function Vm(a,u){if(!a.g)return u;if(!u)return null;try{const k=JSON.parse(u);if(k){for(a=0;a<k.length;a++)if(Array.isArray(k[a])){var f=k[a];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var S=g[0];if(S!="noop"&&S!="stop"&&S!="close")for(let D=1;D<g.length;D++)g[D]=""}}}}return Ro(k)}catch{return u}}var Us={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Il={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},El;function Lo(){}y(Lo,yl),Lo.prototype.g=function(){return new XMLHttpRequest},El=new Lo;function xi(a){return encodeURIComponent(String(a))}function Um(a){var u=1;a=a.split(":");const f=[];for(;u>0&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function Dt(a,u,f,g){this.j=a,this.i=u,this.l=f,this.S=g||1,this.V=new Si(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Sl}function Sl(){this.i=null,this.g="",this.h=!1}var Al={},Do={};function No(a,u,f){a.M=1,a.A=js(it(u)),a.u=f,a.R=!0,kl(a,null)}function kl(a,u){a.F=Date.now(),Fs(a),a.B=it(a.A);var f=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Fl(f.i,"t",g),a.C=0,f=a.j.L,a.h=new Sl,a.g=su(a.j,f?u:null,!a.u),a.P>0&&(a.O=new Lm(d(a.Y,a,a.g),a.P)),u=a.V,f=a.g,g=a.ba;var S="readystatechange";Array.isArray(S)||(S&&(ml[0]=S.toString()),S=ml);for(let k=0;k<S.length;k++){const D=ul(f,S[k],g||u.handleEvent,!1,u.h||u);if(!D)break;u.g[D.key]=D}u=a.J?al(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),ki(),$m(a.i,a.v,a.B,a.l,a.S,a.u)}Dt.prototype.ba=function(a){a=a.target;const u=this.O;u&&Ot(a)==3?u.j():this.Y(a)},Dt.prototype.Y=function(a){try{if(a==this.g)e:{const K=Ot(this.g),we=this.g.ya(),re=this.g.ca();if(!(K<3)&&(K!=3||this.g&&(this.h.h||this.g.la()||Gl(this.g)))){this.K||K!=4||we==7||(we==8||re<=0?ki(3):ki(2)),$o(this);var u=this.g.ca();this.X=u;var f=Fm(this);if(this.o=u==200,Om(this.i,this.v,this.B,this.l,this.S,K,u),this.o){if(this.U&&!this.L){t:{if(this.g){var g,S=this.g;if((g=S.g?S.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(g)){var k=g;break t}}k=null}if(a=k)Hn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Oo(this,a);else{this.o=!1,this.m=3,Me(12),gn(this),Pi(this);break e}}if(this.R){a=!0;let Ie;for(;!this.K&&this.C<f.length;)if(Ie=jm(this,f),Ie==Do){K==4&&(this.m=4,Me(14),a=!1),Hn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ie==Al){this.m=4,Me(15),Hn(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else Hn(this.i,this.l,Ie,null),Oo(this,Ie);if(Cl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),K!=4||f.length!=0||this.h.h||(this.m=1,Me(16),a=!1),this.o=this.o&&a,!a)Hn(this.i,this.l,f,"[Invalid Chunked Response]"),gn(this),Pi(this);else if(f.length>0&&!this.W){this.W=!0;var D=this.j;D.g==this&&D.aa&&!D.P&&(D.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),zo(D),D.P=!0,Me(11))}}else Hn(this.i,this.l,f,null),Oo(this,f);K==4&&gn(this),this.o&&!this.K&&(K==4?eu(this.j,this):(this.o=!1,Fs(this)))}else tg(this.g),u==400&&f.indexOf("Unknown SID")>0?(this.m=3,Me(12)):(this.m=0,Me(13)),gn(this),Pi(this)}}}catch{}finally{}};function Fm(a){if(!Cl(a))return a.g.la();const u=Gl(a.g);if(u==="")return"";let f="";const g=u.length,S=Ot(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return gn(a),Pi(a),"";a.h.i=new o.TextDecoder}for(let k=0;k<g;k++)a.h.h=!0,f+=a.h.i.decode(u[k],{stream:!(S&&k==g-1)});return u.length=0,a.h.g+=f,a.C=0,a.h.g}function Cl(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function jm(a,u){var f=a.C,g=u.indexOf(`
`,f);return g==-1?Do:(f=Number(u.substring(f,g)),isNaN(f)?Al:(g+=1,g+f>u.length?Do:(u=u.slice(g,g+f),a.C=g+f,u)))}Dt.prototype.cancel=function(){this.K=!0,gn(this)};function Fs(a){a.T=Date.now()+a.H,Rl(a,a.H)}function Rl(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ci(d(a.aa,a),u)}function $o(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Dt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Mm(this.i,this.B),this.M!=2&&(ki(),Me(17)),gn(this),this.m=2,Pi(this)):Rl(this,this.T-a)};function Pi(a){a.j.I==0||a.K||eu(a.j,a)}function gn(a){$o(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,gl(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function Oo(a,u){try{var f=a.j;if(f.I!=0&&(f.g==a||Mo(f.h,a))){if(!a.L&&Mo(f.h,a)&&f.I==3){try{var g=f.Ba.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var S=g;if(S[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Ws(f),zs(f);else break e;Ho(f),Me(18)}}else f.xa=S[1],0<f.xa-f.K&&S[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Ci(d(f.Va,f),6e3));Ll(f.h)<=1&&f.ta&&(f.ta=void 0)}else vn(f,11)}else if((a.L||f.g==a)&&Ws(f),!_(u))for(S=f.Ba.g.parse(u),u=0;u<S.length;u++){let re=S[u];const Ie=re[0];if(!(Ie<=f.K))if(f.K=Ie,re=re[1],f.I==2)if(re[0]=="c"){f.M=re[1],f.ba=re[2];const st=re[3];st!=null&&(f.ka=st,f.j.info("VER="+f.ka));const wn=re[4];wn!=null&&(f.za=wn,f.j.info("SVER="+f.za));const Mt=re[5];Mt!=null&&typeof Mt=="number"&&Mt>0&&(g=1.5*Mt,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Vt=a.g;if(Vt){const Ks=Vt.g?Vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ks){var k=g.h;k.g||Ks.indexOf("spdy")==-1&&Ks.indexOf("quic")==-1&&Ks.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Vo(k,k.h),k.h=null))}if(g.G){const qo=Vt.g?Vt.g.getResponseHeader("X-HTTP-Session-Id"):null;qo&&(g.wa=qo,oe(g.J,g.G,qo))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var D=a;if(g.na=iu(g,g.L?g.ba:null,g.W),D.L){Dl(g.h,D);var K=D,we=g.O;we&&(K.H=we),K.D&&($o(K),Fs(K)),g.g=D}else Xl(g);f.i.length>0&&qs(f)}else re[0]!="stop"&&re[0]!="close"||vn(f,7);else f.I==3&&(re[0]=="stop"||re[0]=="close"?re[0]=="stop"?vn(f,7):Bo(f):re[0]!="noop"&&f.l&&f.l.qa(re),f.A=0)}}ki(4)}catch{}}var Bm=class{constructor(a,u){this.g=a,this.map=u}};function xl(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Pl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ll(a){return a.h?1:a.g?a.g.size:0}function Mo(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Vo(a,u){a.g?a.g.add(u):a.h=u}function Dl(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}xl.prototype.cancel=function(){if(this.i=Nl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Nl(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.G);return u}return C(a.i)}var $l=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Hm(a,u){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const g=a[f].indexOf("=");let S,k=null;g>=0?(S=a[f].substring(0,g),k=a[f].substring(g+1)):S=a[f],u(S,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Nt(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof Nt?(this.l=a.l,Li(this,a.j),this.o=a.o,this.g=a.g,Di(this,a.u),this.h=a.h,Uo(this,jl(a.i)),this.m=a.m):a&&(u=String(a).match($l))?(this.l=!1,Li(this,u[1]||"",!0),this.o=Ni(u[2]||""),this.g=Ni(u[3]||"",!0),Di(this,u[4]),this.h=Ni(u[5]||"",!0),Uo(this,u[6]||"",!0),this.m=Ni(u[7]||"")):(this.l=!1,this.i=new Oi(null,this.l))}Nt.prototype.toString=function(){const a=[];var u=this.j;u&&a.push($i(u,Ol,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push($i(u,Ol,!0),"@"),a.push(xi(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push($i(f,f.charAt(0)=="/"?Wm:qm,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",$i(f,Km)),a.join("")},Nt.prototype.resolve=function(a){const u=it(this);let f=!!a.j;f?Li(u,a.j):f=!!a.o,f?u.o=a.o:f=!!a.g,f?u.g=a.g:f=a.u!=null;var g=a.h;if(f)Di(u,a.u);else if(f=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var S=u.h.lastIndexOf("/");S!=-1&&(g=u.h.slice(0,S+1)+g)}if(S=g,S==".."||S==".")g="";else if(S.indexOf("./")!=-1||S.indexOf("/.")!=-1){g=S.lastIndexOf("/",0)==0,S=S.split("/");const k=[];for(let D=0;D<S.length;){const K=S[D++];K=="."?g&&D==S.length&&k.push(""):K==".."?((k.length>1||k.length==1&&k[0]!="")&&k.pop(),g&&D==S.length&&k.push("")):(k.push(K),g=!0)}g=k.join("/")}else g=S}return f?u.h=g:f=a.i.toString()!=="",f?Uo(u,jl(a.i)):f=!!a.m,f&&(u.m=a.m),u};function it(a){return new Nt(a)}function Li(a,u,f){a.j=f?Ni(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Di(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function Uo(a,u,f){u instanceof Oi?(a.i=u,Qm(a.i,a.l)):(f||(u=$i(u,Gm)),a.i=new Oi(u,a.l))}function oe(a,u,f){a.i.set(u,f)}function js(a){return oe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ni(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function $i(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,zm),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function zm(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ol=/[#\/\?@]/g,qm=/[#\?:]/g,Wm=/[#\?]/g,Gm=/[#\?@]/g,Km=/#/g;function Oi(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function yn(a){a.g||(a.g=new Map,a.h=0,a.i&&Hm(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=Oi.prototype,n.add=function(a,u){yn(this),this.i=null,a=zn(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function Ml(a,u){yn(a),u=zn(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Vl(a,u){return yn(a),u=zn(a,u),a.g.has(u)}n.forEach=function(a,u){yn(this),this.g.forEach(function(f,g){f.forEach(function(S){a.call(u,S,g,this)},this)},this)};function Ul(a,u){yn(a);let f=[];if(typeof u=="string")Vl(a,u)&&(f=f.concat(a.g.get(zn(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)f=f.concat(a[u]);return f}n.set=function(a,u){return yn(this),this.i=null,a=zn(this,a),Vl(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=Ul(this,a),a.length>0?String(a[0]):u):u};function Fl(a,u,f){Ml(a,u),f.length>0&&(a.i=null,a.g.set(zn(a,u),C(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let g=0;g<u.length;g++){var f=u[g];const S=xi(f);f=Ul(this,f);for(let k=0;k<f.length;k++){let D=S;f[k]!==""&&(D+="="+xi(f[k])),a.push(D)}}return this.i=a.join("&")};function jl(a){const u=new Oi;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function zn(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function Qm(a,u){u&&!a.j&&(yn(a),a.i=null,a.g.forEach(function(f,g){const S=g.toLowerCase();g!=S&&(Ml(this,g),Fl(this,S,f))},a)),a.j=u}function Jm(a,u){const f=new Ri;if(o.Image){const g=new Image;g.onload=m($t,f,"TestLoadImage: loaded",!0,u,g),g.onerror=m($t,f,"TestLoadImage: error",!1,u,g),g.onabort=m($t,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=m($t,f,"TestLoadImage: timeout",!1,u,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function Ym(a,u){const f=new Ri,g=new AbortController,S=setTimeout(()=>{g.abort(),$t(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(k=>{clearTimeout(S),k.ok?$t(f,"TestPingServer: ok",!0,u):$t(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),$t(f,"TestPingServer: error",!1,u)})}function $t(a,u,f,g,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),g(f)}catch{}}function Xm(){this.g=new Nm}function Fo(a){this.i=a.Sb||null,this.h=a.ab||!1}y(Fo,yl),Fo.prototype.g=function(){return new Bs(this.i,this.h)};function Bs(a,u){Pe.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}y(Bs,Pe),n=Bs.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,Vi(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Mi(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Vi(this)),this.g&&(this.readyState=3,Vi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Bl(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Bl(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Mi(this):Vi(this),this.readyState==3&&Bl(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,Mi(this))},n.Na=function(a){this.g&&(this.response=a,Mi(this))},n.ga=function(){this.g&&Mi(this)};function Mi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Vi(a)}n.setRequestHeader=function(a,u){this.A.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function Vi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Bs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Hl(a){let u="";return $s(a,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function jo(a,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Hl(f),typeof a=="string"?f!=null&&xi(f):oe(a,u,f))}function le(a){Pe.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}y(le,Pe);var Zm=/^https?$/i,eg=["POST","PUT"];n=le.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():El.g(),this.g.onreadystatechange=w(d(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(k){zl(this,k);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var S in g)f.set(S,g[S]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const k of g.keys())f.set(k,g.get(k));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(k=>k.toLowerCase()=="content-type"),S=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(eg,u,void 0)>=0)||g||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,D]of f)this.g.setRequestHeader(k,D);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(k){zl(this,k)}};function zl(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,ql(a),Hs(a)}function ql(a){a.A||(a.A=!0,Oe(a,"complete"),Oe(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Oe(this,"complete"),Oe(this,"abort"),Hs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Hs(this,!0)),le.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Wl(this):this.Xa())},n.Xa=function(){Wl(this)};function Wl(a){if(a.h&&typeof r<"u"){if(a.v&&Ot(a)==4)setTimeout(a.Ca.bind(a),0);else if(Oe(a,"readystatechange"),Ot(a)==4){a.h=!1;try{const k=a.ca();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=k===0){let D=String(a.D).match($l)[1]||null;!D&&o.self&&o.self.location&&(D=o.self.location.protocol.slice(0,-1)),g=!Zm.test(D?D.toLowerCase():"")}f=g}if(f)Oe(a,"complete"),Oe(a,"success");else{a.o=6;try{var S=Ot(a)>2?a.g.statusText:""}catch{S=""}a.l=S+" ["+a.ca()+"]",ql(a)}}finally{Hs(a)}}}}function Hs(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,u||Oe(a,"ready");try{f.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Ot(a){return a.g?a.g.readyState:0}n.ca=function(){try{return Ot(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Dm(u)}};function Gl(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function tg(a){const u={};a=(a.g&&Ot(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(_(a[g]))continue;var f=Um(a[g]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const k=u[S]||[];u[S]=k,k.push(f)}km(u,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ui(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function Kl(a){this.za=0,this.i=[],this.j=new Ri,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ui("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ui("baseRetryDelayMs",5e3,a),this.Za=Ui("retryDelaySeedMs",1e4,a),this.Ta=Ui("forwardChannelMaxRetries",2,a),this.va=Ui("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new xl(a&&a.concurrentRequestLimit),this.Ba=new Xm,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Kl.prototype,n.ka=8,n.I=1,n.connect=function(a,u,f,g){Me(0),this.W=a,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=iu(this,null,this.W),qs(this)};function Bo(a){if(Ql(a),a.I==3){var u=a.V++,f=it(a.J);if(oe(f,"SID",a.M),oe(f,"RID",u),oe(f,"TYPE","terminate"),Fi(a,f),u=new Dt(a,a.j,u),u.M=2,u.A=js(it(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=u.A,f=!0),f||(u.g=su(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Fs(u)}nu(a)}function zs(a){a.g&&(zo(a),a.g.cancel(),a.g=null)}function Ql(a){zs(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ws(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function qs(a){if(!Pl(a.h)&&!a.m){a.m=!0;var u=a.Ea;Q||v(),X||(Q(),X=!0),T.add(u,a),a.D=0}}function ng(a,u){return Ll(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ci(d(a.Ea,a,u),tu(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const S=new Dt(this,this.j,a);let k=this.o;if(this.U&&(k?(k=al(k),ll(k,this.U)):k=this.U),this.u!==null||this.R||(S.J=k,k=null),this.S)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,u>4096){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Yl(this,S,u),f=it(this.J),oe(f,"RID",a),oe(f,"CVER",22),this.G&&oe(f,"X-HTTP-Session-Id",this.G),Fi(this,f),k&&(this.R?u="headers="+xi(Hl(k))+"&"+u:this.u&&jo(f,this.u,k)),Vo(this.h,S),this.Ra&&oe(f,"TYPE","init"),this.S?(oe(f,"$req",u),oe(f,"SID","null"),S.U=!0,No(S,f,null)):No(S,f,u),this.I=2}}else this.I==3&&(a?Jl(this,a):this.i.length==0||Pl(this.h)||Jl(this))};function Jl(a,u){var f;u?f=u.l:f=a.V++;const g=it(a.J);oe(g,"SID",a.M),oe(g,"RID",f),oe(g,"AID",a.K),Fi(a,g),a.u&&a.o&&jo(g,a.u,a.o),f=new Dt(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),u&&(a.i=u.G.concat(a.i)),u=Yl(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Vo(a.h,f),No(f,g,u)}function Fi(a,u){a.H&&$s(a.H,function(f,g){oe(u,g,f)}),a.l&&$s({},function(f,g){oe(u,g,f)})}function Yl(a,u,f){f=Math.min(a.i.length,f);const g=a.l?d(a.l.Ka,a.l,a):null;e:{var S=a.i;let K=-1;for(;;){const we=["count="+f];K==-1?f>0?(K=S[0].g,we.push("ofs="+K)):K=0:we.push("ofs="+K);let re=!0;for(let Ie=0;Ie<f;Ie++){var k=S[Ie].g;const st=S[Ie].map;if(k-=K,k<0)K=Math.max(0,S[Ie].g-100),re=!1;else try{k="req"+k+"_"||"";try{var D=st instanceof Map?st:Object.entries(st);for(const[wn,Mt]of D){let Vt=Mt;c(Mt)&&(Vt=Ro(Mt)),we.push(k+wn+"="+encodeURIComponent(Vt))}}catch(wn){throw we.push(k+"type="+encodeURIComponent("_badmap")),wn}}catch{g&&g(st)}}if(re){D=we.join("&");break e}}D=void 0}return a=a.i.splice(0,f),u.G=a,D}function Xl(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;Q||v(),X||(Q(),X=!0),T.add(u,a),a.A=0}}function Ho(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ci(d(a.Da,a),tu(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,Zl(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ci(d(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Me(10),zs(this),Zl(this))};function zo(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Zl(a){a.g=new Dt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=it(a.na);oe(u,"RID","rpc"),oe(u,"SID",a.M),oe(u,"AID",a.K),oe(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&oe(u,"TO",a.ia),oe(u,"TYPE","xmlhttp"),Fi(a,u),a.u&&a.o&&jo(u,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=js(it(u)),f.u=null,f.R=!0,kl(f,a)}n.Va=function(){this.C!=null&&(this.C=null,zs(this),Ho(this),Me(19))};function Ws(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function eu(a,u){var f=null;if(a.g==u){Ws(a),zo(a),a.g=null;var g=2}else if(Mo(a.h,u))f=u.G,Dl(a.h,u),g=1;else return;if(a.I!=0){if(u.o)if(g==1){f=u.u?u.u.length:0,u=Date.now()-u.F;var S=a.D;g=Vs(),Oe(g,new Tl(g,f)),qs(a)}else Xl(a);else if(S=u.m,S==3||S==0&&u.X>0||!(g==1&&ng(a,u)||g==2&&Ho(a)))switch(f&&f.length>0&&(u=a.h,u.i=u.i.concat(f)),S){case 1:vn(a,5);break;case 4:vn(a,10);break;case 3:vn(a,6);break;default:vn(a,2)}}}function tu(a,u){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*u}function vn(a,u){if(a.j.info("Error code "+u),u==2){var f=d(a.bb,a),g=a.Ua;const S=!g;g=new Nt(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Li(g,"https"),js(g),S?Jm(g.toString(),f):Ym(g.toString(),f)}else Me(2);a.I=0,a.l&&a.l.pa(u),nu(a),Ql(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Me(2)):(this.j.info("Failed to ping google.com"),Me(1))};function nu(a){if(a.I=0,a.ja=[],a.l){const u=Nl(a.h);(u.length!=0||a.i.length!=0)&&(P(a.ja,u),P(a.ja,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.oa()}}function iu(a,u,f){var g=f instanceof Nt?it(f):new Nt(f);if(g.g!="")u&&(g.g=u+"."+g.g),Di(g,g.u);else{var S=o.location;g=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;const k=new Nt(null);g&&Li(k,g),u&&(k.g=u),S&&Di(k,S),f&&(k.h=f),g=k}return f=a.G,u=a.wa,f&&u&&oe(g,f,u),oe(g,"VER",a.ka),Fi(a,g),g}function su(a,u,f){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new le(new Fo({ab:f})):new le(a.ma),u.Fa(a.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ru(){}n=ru.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Gs(){}Gs.prototype.g=function(a,u){return new qe(a,u)};function qe(a,u){Pe.call(this),this.g=new Kl(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!_(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!_(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new qn(this)}y(qe,Pe),qe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},qe.prototype.close=function(){Bo(this.g)},qe.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=Ro(a),a=f);u.i.push(new Bm(u.Ya++,a)),u.I==3&&qs(u)},qe.prototype.N=function(){this.g.l=null,delete this.j,Bo(this.g),delete this.g,qe.Z.N.call(this)};function ou(a){xo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}y(ou,xo);function au(){Po.call(this),this.status=1}y(au,Po);function qn(a){this.g=a}y(qn,ru),qn.prototype.ra=function(){Oe(this.g,"a")},qn.prototype.qa=function(a){Oe(this.g,new ou(a))},qn.prototype.pa=function(a){Oe(this.g,new au)},qn.prototype.oa=function(){Oe(this.g,"b")},Gs.prototype.createWebChannel=Gs.prototype.g,qe.prototype.send=qe.prototype.o,qe.prototype.open=qe.prototype.m,qe.prototype.close=qe.prototype.close,bf=function(){return new Gs},_f=function(){return Vs()},wf=mn,Sa={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Us.NO_ERROR=0,Us.TIMEOUT=8,Us.HTTP_ERROR=6,mr=Us,Il.COMPLETE="complete",vf=Il,vl.EventType=Ai,Ai.OPEN="a",Ai.CLOSE="b",Ai.ERROR="c",Ai.MESSAGE="d",Pe.prototype.listen=Pe.prototype.J,Ki=vl,le.prototype.listenOnce=le.prototype.K,le.prototype.getLastError=le.prototype.Ha,le.prototype.getLastErrorCode=le.prototype.ya,le.prototype.getStatus=le.prototype.ca,le.prototype.getResponseJson=le.prototype.La,le.prototype.getResponseText=le.prototype.la,le.prototype.send=le.prototype.ea,le.prototype.setWithCredentials=le.prototype.Fa,yf=le}).apply(typeof Js<"u"?Js:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}De.UNAUTHENTICATED=new De(null),De.GOOGLE_CREDENTIALS=new De("google-credentials-uid"),De.FIRST_PARTY=new De("first-party-uid"),De.MOCK_USER=new De("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _i="12.10.0";function U_(n){_i=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Nn=new Xa("@firebase/firestore");function Kn(){return Nn.logLevel}function O(n,...e){if(Nn.logLevel<=J.DEBUG){const t=e.map(gc);Nn.debug(`Firestore (${_i}): ${n}`,...t)}}function Pt(n,...e){if(Nn.logLevel<=J.ERROR){const t=e.map(gc);Nn.error(`Firestore (${_i}): ${n}`,...t)}}function $n(n,...e){if(Nn.logLevel<=J.WARN){const t=e.map(gc);Nn.warn(`Firestore (${_i}): ${n}`,...t)}}function gc(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Tf(n,i,t)}function Tf(n,e,t){let i=`FIRESTORE (${_i}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Pt(i),new Error(i)}function ce(n,e,t,i){let s="Unexpected state";typeof t=="string"?s=t:i=t,n||Tf(e,s,i)}function te(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class If{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class F_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(De.UNAUTHENTICATED)))}shutdown(){}}class j_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class B_{constructor(e){this.t=e,this.currentUser=De.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ce(this.o===void 0,42304);let i=this.i;const s=l=>this.i!==i?(i=this.i,t(l)):Promise.resolve();let r=new ti;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ti,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=r;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ti)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ce(typeof i.accessToken=="string",31837,{l:i}),new If(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string",2055,{h:e}),new De(e)}}class H_{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=De.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class z_{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new H_(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(De.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ju{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class q_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ue(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ce(this.o===void 0,3512);const i=r=>{r.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable((()=>i(r)))};const s=r=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>s(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?s(r):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ju(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ce(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ju(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=W_(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%62))}return i}}function Y(n,e){return n<e?-1:n>e?1:0}function Aa(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const s=n.charAt(i),r=e.charAt(i);if(s!==r)return ea(s)===ea(r)?Y(s,r):ea(s)?1:-1}return Y(n.length,e.length)}const G_=55296,K_=57343;function ea(n){const e=n.charCodeAt(0);return e>=G_&&e<=K_}function ci(n,e,t){return n.length===e.length&&n.every(((i,s)=>t(i,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu="__name__";class ot{constructor(e,t,i){t===void 0?t=0:t>e.length&&W(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&W(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return ot.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ot?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=ot.compareSegments(e.get(s),t.get(s));if(r!==0)return r}return Y(e.length,t.length)}static compareSegments(e,t){const i=ot.isNumericId(e),s=ot.isNumericId(t);return i&&!s?-1:!i&&s?1:i&&s?ot.extractNumericId(e).compare(ot.extractNumericId(t)):Aa(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Xt.fromString(e.substring(4,e.length-2))}}class ae extends ot{construct(e,t,i){return new ae(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new F(N.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((s=>s.length>0)))}return new ae(t)}static emptyPath(){return new ae([])}}const Q_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends ot{construct(e,t,i){return new Fe(e,t,i)}static isValidIdentifier(e){return Q_.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Bu}static keyField(){return new Fe([Bu])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new F(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new F(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new F(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(i+=c,s++):(r(),s++)}if(r(),o)throw new F(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fe(t)}static emptyPath(){return new Fe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(ae.fromString(e))}static fromName(e){return new H(ae.fromString(e).popFirst(5))}static empty(){return new H(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ae.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new ae(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J_(n,e,t){if(!t)throw new F(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Y_(n,e,t,i){if(e===!0&&i===!0)throw new F(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Hu(n){if(H.isDocumentKey(n))throw new F(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function X_(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Z_(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":W(12329,{type:typeof n})}function gr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new F(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Z_(n);throw new F(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function ve(n,e){const t={typeString:n};return e&&(t.value=e),t}function As(n,e){if(!X_(n))throw new F(N.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const s=e[i].typeString,r="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const o=n[i];if(s&&typeof o!==s){t=`JSON field '${i}' must be a ${s}.`;break}if(r!==void 0&&o!==r.value){t=`Expected '${i}' field to equal '${r.value}'`;break}}if(t)throw new F(N.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu=-62135596800,qu=1e6;class ye{static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*qu);return new ye(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new F(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new F(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<zu)throw new F(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/qu}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(As(e,ye._jsonSchema))return new ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-zu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ye._jsonSchemaVersion="firestore/timestamp/1.0",ye._jsonSchema={type:ve("string",ye._jsonSchemaVersion),seconds:ve("number"),nanoseconds:ve("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{static fromTimestamp(e){return new q(e)}static min(){return new q(new ye(0,0))}static max(){return new q(new ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const fs=-1;function eb(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=q.fromTimestamp(i===1e9?new ye(t+1,0):new ye(t,i));return new rn(s,H.empty(),e)}function tb(n){return new rn(n.readTime,n.key,fs)}class rn{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new rn(q.min(),H.empty(),fs)}static max(){return new rn(q.max(),H.empty(),fs)}}function nb(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=H.comparator(n.documentKey,e.documentKey),t!==0?t:Y(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==ib)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&W(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new x(((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof x?t:x.resolve(t)}catch(t){return x.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):x.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):x.reject(t)}static resolve(e){return new x(((t,i)=>{t(e)}))}static reject(e){return new x(((t,i)=>{i(e)}))}static waitFor(e){return new x(((t,i)=>{let s=0,r=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++r,o&&r===s&&t()}),(l=>i(l)))})),o=!0,r===s&&t()}))}static or(e){let t=x.resolve(!1);for(const i of e)t=t.next((s=>s?x.resolve(s):i()));return t}static forEach(e,t){const i=[];return e.forEach(((s,r)=>{i.push(t.call(this,s,r))})),this.waitFor(i)}static mapArray(e,t){return new x(((i,s)=>{const r=e.length,o=new Array(r);let c=0;for(let l=0;l<r;l++){const d=l;t(e[d]).next((m=>{o[d]=m,++c,c===r&&i(o)}),(m=>s(m)))}}))}static doWhile(e,t){return new x(((i,s)=>{const r=()=>{e()===!0?t().next((()=>{r()}),s):i()};r()}))}}function rb(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function bi(n){return n.name==="IndexedDbTransactionError"}/**
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
 */const ob=-1;function io(n){return n==null}function ka(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf="";function ab(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Wu(e)),e=cb(n.get(t),e);return Wu(e)}function cb(n,e){let t=e;const i=n.length;for(let s=0;s<i;s++){const r=n.charAt(s);switch(r){case"\0":t+="";break;case Sf:t+="";break;default:t+=r}}return t}function Wu(n){return n+Sf+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ks(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function lb(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,t){this.comparator=e,this.root=t||Ce.EMPTY}insert(e,t){return new me(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ce.BLACK,null,null))}remove(e){return new me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ce.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ys(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ys(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ys(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ys(this.root,e,this.comparator,!0)}}class Ys{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ce{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??Ce.RED,this.left=s??Ce.EMPTY,this.right=r??Ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new Ce(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ce.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ce.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw W(43730,{key:this.key,value:this.value});if(this.right.isRed())throw W(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw W(27949);return e+(this.isRed()?0:1)}}Ce.EMPTY=null,Ce.RED=!0,Ce.BLACK=!1;Ce.EMPTY=new class{constructor(){this.size=0}get key(){throw W(57766)}get value(){throw W(16141)}get color(){throw W(16727)}get left(){throw W(29726)}get right(){throw W(36894)}copy(e,t,i,s,r){return this}insert(e,t,i){return new Ce(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.comparator=e,this.data=new me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ku(this.data.getIterator())}getIteratorFrom(e){return new Ku(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof be)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new be(this.comparator);return t.data=e,t}}class Ku{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.fields=e,e.sort(Fe.comparator)}static empty(){return new Kt([])}unionWith(e){let t=new be(Fe.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Kt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ci(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class Af extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Af("Invalid base64 string: "+r):r}})(e);return new Re(t)}static fromUint8Array(e){const t=(function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r})(e);return new Re(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Re.EMPTY_BYTE_STRING=new Re("");const ub=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function on(n){if(ce(!!n,39018),typeof n=="string"){let e=0;const t=ub.exec(n);if(ce(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:pe(n.seconds),nanos:pe(n.nanos)}}function pe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function an(n){return typeof n=="string"?Re.fromBase64String(n):Re.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf="server_timestamp",Cf="__type__",Rf="__previous_value__",xf="__local_write_time__";function yc(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Cf])==null?void 0:i.stringValue)===kf}function so(n){const e=n.mapValue.fields[Rf];return yc(e)?so(e):e}function ps(n){const e=on(n.mapValue.fields[xf].timestampValue);return new ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e,t,i,s,r,o,c,l,d,m,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=m,this.apiKey=y}}const Nr="(default)";class ms{constructor(e,t){this.projectId=e,this.database=t||Nr}static empty(){return new ms("","")}get isDefaultDatabase(){return this.database===Nr}isEqual(e){return e instanceof ms&&e.projectId===this.projectId&&e.database===this.database}}function hb(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new F(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ms(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb="__type__",pb="__max__",Xs={mapValue:{}},mb="__vector__",Ca="value";function cn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?yc(n)?4:yb(n)?9007199254740991:gb(n)?10:11:W(28295,{value:n})}function yt(n,e){if(n===e)return!0;const t=cn(n);if(t!==cn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ps(n).isEqual(ps(e));case 3:return(function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=on(s.timestampValue),c=on(r.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,r){return an(s.bytesValue).isEqual(an(r.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,r){return pe(s.geoPointValue.latitude)===pe(r.geoPointValue.latitude)&&pe(s.geoPointValue.longitude)===pe(r.geoPointValue.longitude)})(n,e);case 2:return(function(s,r){if("integerValue"in s&&"integerValue"in r)return pe(s.integerValue)===pe(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=pe(s.doubleValue),c=pe(r.doubleValue);return o===c?ka(o)===ka(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return ci(n.arrayValue.values||[],e.arrayValue.values||[],yt);case 10:case 11:return(function(s,r){const o=s.mapValue.fields||{},c=r.mapValue.fields||{};if(Gu(o)!==Gu(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!yt(o[l],c[l])))return!1;return!0})(n,e);default:return W(52216,{left:n})}}function gs(n,e){return(n.values||[]).find((t=>yt(t,e)))!==void 0}function li(n,e){if(n===e)return 0;const t=cn(n),i=cn(e);if(t!==i)return Y(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Y(n.booleanValue,e.booleanValue);case 2:return(function(r,o){const c=pe(r.integerValue||r.doubleValue),l=pe(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return Qu(n.timestampValue,e.timestampValue);case 4:return Qu(ps(n),ps(e));case 5:return Aa(n.stringValue,e.stringValue);case 6:return(function(r,o){const c=an(r),l=an(o);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(r,o){const c=r.split("/"),l=o.split("/");for(let d=0;d<c.length&&d<l.length;d++){const m=Y(c[d],l[d]);if(m!==0)return m}return Y(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(r,o){const c=Y(pe(r.latitude),pe(o.latitude));return c!==0?c:Y(pe(r.longitude),pe(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Ju(n.arrayValue,e.arrayValue);case 10:return(function(r,o){var w,C,P,$;const c=r.fields||{},l=o.fields||{},d=(w=c[Ca])==null?void 0:w.arrayValue,m=(C=l[Ca])==null?void 0:C.arrayValue,y=Y(((P=d==null?void 0:d.values)==null?void 0:P.length)||0,(($=m==null?void 0:m.values)==null?void 0:$.length)||0);return y!==0?y:Ju(d,m)})(n.mapValue,e.mapValue);case 11:return(function(r,o){if(r===Xs.mapValue&&o===Xs.mapValue)return 0;if(r===Xs.mapValue)return 1;if(o===Xs.mapValue)return-1;const c=r.fields||{},l=Object.keys(c),d=o.fields||{},m=Object.keys(d);l.sort(),m.sort();for(let y=0;y<l.length&&y<m.length;++y){const w=Aa(l[y],m[y]);if(w!==0)return w;const C=li(c[l[y]],d[m[y]]);if(C!==0)return C}return Y(l.length,m.length)})(n.mapValue,e.mapValue);default:throw W(23264,{he:t})}}function Qu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Y(n,e);const t=on(n),i=on(e),s=Y(t.seconds,i.seconds);return s!==0?s:Y(t.nanos,i.nanos)}function Ju(n,e){const t=n.values||[],i=e.values||[];for(let s=0;s<t.length&&s<i.length;++s){const r=li(t[s],i[s]);if(r)return r}return Y(t.length,i.length)}function ui(n){return Ra(n)}function Ra(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=on(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return an(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return H.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",s=!0;for(const r of t.values||[])s?s=!1:i+=",",i+=Ra(r);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${Ra(t.fields[o])}`;return s+"}"})(n.mapValue):W(61005,{value:n})}function yr(n){switch(cn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=so(n);return e?16+yr(e):16;case 5:return 2*n.stringValue.length;case 6:return an(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((s,r)=>s+yr(r)),0)})(n.arrayValue);case 10:case 11:return(function(i){let s=0;return ks(i.fields,((r,o)=>{s+=r.length+yr(o)})),s})(n.mapValue);default:throw W(13486,{value:n})}}function xa(n){return!!n&&"integerValue"in n}function vc(n){return!!n&&"arrayValue"in n}function Yu(n){return!!n&&"nullValue"in n}function Xu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ta(n){return!!n&&"mapValue"in n}function gb(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[fb])==null?void 0:i.stringValue)===mb}function ss(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return ks(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=ss(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ss(n.arrayValue.values[t]);return e}return{...n}}function yb(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===pb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.value=e}static empty(){return new at({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!ta(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ss(t)}setAll(e){let t=Fe.emptyPath(),i={},s=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,i,s),i={},s=[],t=c.popLast()}o?i[c.lastSegment()]=ss(o):s.push(c.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());ta(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return yt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];ta(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){ks(t,((s,r)=>e[s]=r));for(const s of i)delete e[s]}clone(){return new at(ss(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,t,i,s,r,o,c){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Ne(e,0,q.min(),q.min(),q.min(),at.empty(),0)}static newFoundDocument(e,t,i,s){return new Ne(e,1,t,q.min(),i,s,0)}static newNoDocument(e,t){return new Ne(e,2,t,q.min(),q.min(),at.empty(),0)}static newUnknownDocument(e,t){return new Ne(e,3,t,q.min(),q.min(),at.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=at.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=at.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ne&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ne(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class $r{constructor(e,t){this.position=e,this.inclusive=t}}function Zu(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],o=n.position[s];if(r.field.isKeyField()?i=H.comparator(H.fromName(o.referenceValue),t.key):i=li(o,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function ed(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!yt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Or{constructor(e,t="asc"){this.field=e,this.dir=t}}function vb(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Pf{}class _e extends Pf{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new _b(e,t,i):t==="array-contains"?new Ib(e,i):t==="in"?new Eb(e,i):t==="not-in"?new Sb(e,i):t==="array-contains-any"?new Ab(e,i):new _e(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new bb(e,i):new Tb(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(li(t,this.value)):t!==null&&cn(this.value)===cn(t)&&this.matchesComparison(li(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vt extends Pf{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new vt(e,t)}matches(e){return Lf(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Lf(n){return n.op==="and"}function Df(n){return wb(n)&&Lf(n)}function wb(n){for(const e of n.filters)if(e instanceof vt)return!1;return!0}function Pa(n){if(n instanceof _e)return n.field.canonicalString()+n.op.toString()+ui(n.value);if(Df(n))return n.filters.map((e=>Pa(e))).join(",");{const e=n.filters.map((t=>Pa(t))).join(",");return`${n.op}(${e})`}}function Nf(n,e){return n instanceof _e?(function(i,s){return s instanceof _e&&i.op===s.op&&i.field.isEqual(s.field)&&yt(i.value,s.value)})(n,e):n instanceof vt?(function(i,s){return s instanceof vt&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce(((r,o,c)=>r&&Nf(o,s.filters[c])),!0):!1})(n,e):void W(19439)}function $f(n){return n instanceof _e?(function(t){return`${t.field.canonicalString()} ${t.op} ${ui(t.value)}`})(n):n instanceof vt?(function(t){return t.op.toString()+" {"+t.getFilters().map($f).join(" ,")+"}"})(n):"Filter"}class _b extends _e{constructor(e,t,i){super(e,t,i),this.key=H.fromName(i.referenceValue)}matches(e){const t=H.comparator(e.key,this.key);return this.matchesComparison(t)}}class bb extends _e{constructor(e,t){super(e,"in",t),this.keys=Of("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Tb extends _e{constructor(e,t){super(e,"not-in",t),this.keys=Of("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Of(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((i=>H.fromName(i.referenceValue)))}class Ib extends _e{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return vc(t)&&gs(t.arrayValue,this.value)}}class Eb extends _e{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&gs(this.value.arrayValue,t)}}class Sb extends _e{constructor(e,t){super(e,"not-in",t)}matches(e){if(gs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!gs(this.value.arrayValue,t)}}class Ab extends _e{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!vc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>gs(this.value.arrayValue,i)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e,t=null,i=[],s=[],r=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=c,this.Te=null}}function td(n,e=null,t=[],i=[],s=null,r=null,o=null){return new kb(n,e,t,i,s,r,o)}function wc(n){const e=te(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Pa(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(r){return r.field.canonicalString()+r.dir})(i))).join(","),io(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>ui(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>ui(i))).join(",")),e.Te=t}return e.Te}function _c(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!vb(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Nf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ed(n.startAt,e.startAt)&&ed(n.endAt,e.endAt)}function La(n){return H.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,t=null,i=[],s=[],r=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Cb(n,e,t,i,s,r,o,c){return new ro(n,e,t,i,s,r,o,c)}function bc(n){return new ro(n)}function nd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Rb(n){return H.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function xb(n){return n.collectionGroup!==null}function rs(n){const e=te(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const r of e.explicitOrderBy)e.Ie.push(r),t.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new be(Fe.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(e).forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new Or(r,i))})),t.has(Fe.keyField().canonicalString())||e.Ie.push(new Or(Fe.keyField(),i))}return e.Ie}function mt(n){const e=te(n);return e.Ee||(e.Ee=Pb(e,rs(n))),e.Ee}function Pb(n,e){if(n.limitType==="F")return td(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const r=s.dir==="desc"?"asc":"desc";return new Or(s.field,r)}));const t=n.endAt?new $r(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new $r(n.startAt.position,n.startAt.inclusive):null;return td(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Da(n,e,t){return new ro(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function oo(n,e){return _c(mt(n),mt(e))&&n.limitType===e.limitType}function Mf(n){return`${wc(mt(n))}|lt:${n.limitType}`}function Qn(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((s=>$f(s))).join(", ")}]`),io(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((s=>ui(s))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((s=>ui(s))).join(",")),`Target(${i})`})(mt(n))}; limitType=${n.limitType})`}function ao(n,e){return e.isFoundDocument()&&(function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):H.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)})(n,e)&&(function(i,s){for(const r of rs(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0})(n,e)&&(function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0})(n,e)&&(function(i,s){return!(i.startAt&&!(function(o,c,l){const d=Zu(o,c,l);return o.inclusive?d<=0:d<0})(i.startAt,rs(i),s)||i.endAt&&!(function(o,c,l){const d=Zu(o,c,l);return o.inclusive?d>=0:d>0})(i.endAt,rs(i),s))})(n,e)}function Lb(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Vf(n){return(e,t)=>{let i=!1;for(const s of rs(n)){const r=Db(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function Db(n,e,t){const i=n.field.isKeyField()?H.comparator(e.key,t.key):(function(r,o,c){const l=o.data.field(r),d=c.data.field(r);return l!==null&&d!==null?li(l,d):W(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return W(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ks(this.inner,((t,i)=>{for(const[s,r]of i)e(s,r)}))}isEmpty(){return lb(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb=new me(H.comparator);function ln(){return Nb}const Uf=new me(H.comparator);function Qi(...n){let e=Uf;for(const t of n)e=e.insert(t.key,t);return e}function $b(n){let e=Uf;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function An(){return os()}function Ff(){return os()}function os(){return new jn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const Ob=new be(H.comparator);function ie(...n){let e=Ob;for(const t of n)e=e.add(t);return e}const Mb=new be(Y);function Vb(){return Mb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ub(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ka(e)?"-0":e}}function Fb(n){return{integerValue:""+n}}/**
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
 */class co{constructor(){this._=void 0}}function jb(n,e,t){return n instanceof Na?(function(s,r){const o={fields:{[Cf]:{stringValue:kf},[xf]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&yc(r)&&(r=so(r)),r&&(o.fields[Rf]=r),{mapValue:o}})(t,e):n instanceof Mr?jf(n,e):n instanceof Vr?Bf(n,e):(function(s,r){const o=Hb(s,r),c=id(o)+id(s.Ae);return xa(o)&&xa(s.Ae)?Fb(c):Ub(s.serializer,c)})(n,e)}function Bb(n,e,t){return n instanceof Mr?jf(n,e):n instanceof Vr?Bf(n,e):t}function Hb(n,e){return n instanceof $a?(function(i){return xa(i)||(function(r){return!!r&&"doubleValue"in r})(i)})(e)?e:{integerValue:0}:null}class Na extends co{}class Mr extends co{constructor(e){super(),this.elements=e}}function jf(n,e){const t=Hf(e);for(const i of n.elements)t.some((s=>yt(s,i)))||t.push(i);return{arrayValue:{values:t}}}class Vr extends co{constructor(e){super(),this.elements=e}}function Bf(n,e){let t=Hf(e);for(const i of n.elements)t=t.filter((s=>!yt(s,i)));return{arrayValue:{values:t}}}class $a extends co{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function id(n){return pe(n.integerValue||n.doubleValue)}function Hf(n){return vc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function zb(n,e){return n.field.isEqual(e.field)&&(function(i,s){return i instanceof Mr&&s instanceof Mr||i instanceof Vr&&s instanceof Vr?ci(i.elements,s.elements,yt):i instanceof $a&&s instanceof $a?yt(i.Ae,s.Ae):i instanceof Na&&s instanceof Na})(n.transform,e.transform)}class kn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new kn}static exists(e){return new kn(void 0,e)}static updateTime(e){return new kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Tc{}function zf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Wb(n.key,kn.none()):new Ic(n.key,n.data,kn.none());{const t=n.data,i=at.empty();let s=new be(Fe.comparator);for(let r of e.fields)if(!s.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new lo(n.key,i,new Kt(s.toArray()),kn.none())}}function qb(n,e,t){n instanceof Ic?(function(s,r,o){const c=s.value.clone(),l=rd(s.fieldTransforms,r,o.transformResults);c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof lo?(function(s,r,o){if(!vr(s.precondition,r))return void r.convertToUnknownDocument(o.version);const c=rd(s.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(qf(s)),l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):(function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function as(n,e,t,i){return n instanceof Ic?(function(r,o,c,l){if(!vr(r.precondition,o))return c;const d=r.value.clone(),m=od(r.fieldTransforms,l,o);return d.setAll(m),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null})(n,e,t,i):n instanceof lo?(function(r,o,c,l){if(!vr(r.precondition,o))return c;const d=od(r.fieldTransforms,l,o),m=o.data;return m.setAll(qf(r)),m.setAll(d),o.convertToFoundDocument(o.version,m).setHasLocalMutations(),c===null?null:c.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((y=>y.field)))})(n,e,t,i):(function(r,o,c){return vr(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function sd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&ci(i,s,((r,o)=>zb(r,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ic extends Tc{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class lo extends Tc{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function qf(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function rd(n,e,t){const i=new Map;ce(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const r=n[s],o=r.transform,c=e.data.field(r.field);i.set(r.field,Bb(o,c,t[s]))}return i}function od(n,e,t){const i=new Map;for(const s of n){const r=s.transform,o=t.data.field(s.field);i.set(s.field,jb(r,o,e))}return i}class Wb extends Tc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&qb(r,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=as(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=as(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Ff();return this.mutations.forEach((s=>{const r=e.get(s.key),o=r.overlayedDocument;let c=this.applyToLocalView(o,r.mutatedFields);c=t.has(s.key)?null:c;const l=zf(o,c);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(q.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ie())}isEqual(e){return this.batchId===e.batchId&&ci(this.mutations,e.mutations,((t,i)=>sd(t,i)))&&ci(this.baseMutations,e.baseMutations,((t,i)=>sd(t,i)))}}/**
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
 */class Kb{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Qb{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge,Z;function Wf(n){if(n===void 0)return Pt("GRPC error has no .code"),N.UNKNOWN;switch(n){case ge.OK:return N.OK;case ge.CANCELLED:return N.CANCELLED;case ge.UNKNOWN:return N.UNKNOWN;case ge.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case ge.INTERNAL:return N.INTERNAL;case ge.UNAVAILABLE:return N.UNAVAILABLE;case ge.UNAUTHENTICATED:return N.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case ge.NOT_FOUND:return N.NOT_FOUND;case ge.ALREADY_EXISTS:return N.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return N.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case ge.ABORTED:return N.ABORTED;case ge.OUT_OF_RANGE:return N.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return N.UNIMPLEMENTED;case ge.DATA_LOSS:return N.DATA_LOSS;default:return W(39323,{code:n})}}(Z=ge||(ge={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Jb(){return new TextEncoder}/**
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
 */const Yb=new Xt([4294967295,4294967295],0);function ad(n){const e=Jb().encode(n),t=new gf;return t.update(e),new Uint8Array(t.digest())}function cd(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Xt([t,i],0),new Xt([s,r],0)]}class Ec{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Ji(`Invalid padding: ${t}`);if(i<0)throw new Ji(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ji(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Ji(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Xt.fromNumber(this.ge)}ye(e,t,i){let s=e.add(t.multiply(Xt.fromNumber(i)));return s.compare(Yb)===1&&(s=new Xt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=ad(e),[i,s]=cd(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(i,s,r);if(!this.we(o))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Ec(r,s,t);return i.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=ad(e),[i,s]=cd(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(i,s,r);this.be(o)}}be(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Ji extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,Cs.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new uo(q.min(),s,new me(Y),ln(),ie())}}class Cs{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Cs(i,t,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,t,i,s){this.Se=e,this.removedTargetIds=t,this.key=i,this.De=s}}class Gf{constructor(e,t){this.targetId=e,this.Ce=t}}class Kf{constructor(e,t,i=Re.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class ld{constructor(){this.ve=0,this.Fe=ud(),this.Me=Re.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ie(),t=ie(),i=ie();return this.Fe.forEach(((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:W(38017,{changeType:r})}})),new Cs(this.Me,this.xe,e,t,i)}Ke(){this.Oe=!1,this.Fe=ud()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ce(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Xb{constructor(e){this.Ge=e,this.ze=new Map,this.je=ln(),this.He=Zs(),this.Je=Zs(),this.Ze=new me(Y)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.We(),i.Ne||i.Ke(),i.Le(e.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.Qe(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:W(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,i=e.Ce.count,s=this.ot(t);if(s){const r=s.target;if(La(r))if(i===0){const o=new H(r.path);this.et(t,o,Ne.newNoDocument(o,q.min()))}else ce(i===1,20013,{expectedCount:i});else{const o=this._t(t);if(o!==i){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=t;let o,c;try{o=an(i).toUint8Array()}catch(l){if(l instanceof Af)return $n("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Ec(o,s,r)}catch(l){return $n(l instanceof Ji?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let s=0;return i.forEach((r=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(c)||(this.et(t,r,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((r,o)=>{const c=this.ot(o);if(c){if(r.current&&La(c.target)){const l=new H(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,Ne.newNoDocument(l,e))}r.Be&&(t.set(o,r.ke()),r.Ke())}}));let i=ie();this.Je.forEach(((r,o)=>{let c=!0;o.forEachWhile((l=>{const d=this.ot(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(i=i.add(r))})),this.je.forEach(((r,o)=>o.setReadTime(e)));const s=new uo(e,t,this.Ze,this.je,i);return this.je=ln(),this.He=Zs(),this.Je=Zs(),this.Ze=new me(Y),s}Ye(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,i),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new ld,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new be(Y),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new be(Y),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new ld),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Zs(){return new me(H.comparator)}function ud(){return new me(H.comparator)}const Zb={asc:"ASCENDING",desc:"DESCENDING"},eT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tT={and:"AND",or:"OR"};class nT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Oa(n,e){return n.useProto3Json||io(e)?e:{value:e}}function iT(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function sT(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ni(n){return ce(!!n,49232),q.fromTimestamp((function(t){const i=on(t);return new ye(i.seconds,i.nanos)})(n))}function rT(n,e){return Ma(n,e).canonicalString()}function Ma(n,e){const t=(function(s){return new ae(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Qf(n){const e=ae.fromString(n);return ce(ep(e),10190,{key:e.toString()}),e}function na(n,e){const t=Qf(e);if(t.get(1)!==n.databaseId.projectId)throw new F(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new F(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new H(Yf(t))}function Jf(n,e){return rT(n.databaseId,e)}function oT(n){const e=Qf(n);return e.length===4?ae.emptyPath():Yf(e)}function dd(n){return new ae(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Yf(n){return ce(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function aT(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:W(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=(function(d,m){return d.useProto3Json?(ce(m===void 0||typeof m=="string",58123),Re.fromBase64String(m||"")):(ce(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),Re.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(d){const m=d.code===void 0?N.UNKNOWN:Wf(d.code);return new F(m,d.message||"")})(o);t=new Kf(i,s,r,c||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=na(n,i.document.name),r=ni(i.document.updateTime),o=i.document.createTime?ni(i.document.createTime):q.min(),c=new at({mapValue:{fields:i.document.fields}}),l=Ne.newFoundDocument(s,r,o,c),d=i.targetIds||[],m=i.removedTargetIds||[];t=new wr(d,m,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=na(n,i.document),r=i.readTime?ni(i.readTime):q.min(),o=Ne.newNoDocument(s,r),c=i.removedTargetIds||[];t=new wr([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=na(n,i.document),r=i.removedTargetIds||[];t=new wr([],r,s,null)}else{if(!("filter"in e))return W(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new Qb(s,r),c=i.targetId;t=new Gf(c,o)}}return t}function cT(n,e){return{documents:[Jf(n,e.path)]}}function lT(n,e){const t={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Jf(n,s);const r=(function(d){if(d.length!==0)return Zf(vt.create(d,"and"))})(e.filters);r&&(t.structuredQuery.where=r);const o=(function(d){if(d.length!==0)return d.map((m=>(function(w){return{field:Jn(w.field),direction:hT(w.dir)}})(m)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Oa(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{ft:t,parent:s}}function uT(n){let e=oT(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){ce(i===1,65062);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let r=[];t.where&&(r=(function(y){const w=Xf(y);return w instanceof vt&&Df(w)?w.getFilters():[w]})(t.where));let o=[];t.orderBy&&(o=(function(y){return y.map((w=>(function(P){return new Or(Yn(P.field),(function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(P.direction))})(w)))})(t.orderBy));let c=null;t.limit&&(c=(function(y){let w;return w=typeof y=="object"?y.value:y,io(w)?null:w})(t.limit));let l=null;t.startAt&&(l=(function(y){const w=!!y.before,C=y.values||[];return new $r(C,w)})(t.startAt));let d=null;return t.endAt&&(d=(function(y){const w=!y.before,C=y.values||[];return new $r(C,w)})(t.endAt)),Cb(e,s,o,r,c,"F",l,d)}function dT(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Xf(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Yn(t.unaryFilter.field);return _e.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=Yn(t.unaryFilter.field);return _e.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Yn(t.unaryFilter.field);return _e.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Yn(t.unaryFilter.field);return _e.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return W(61313);default:return W(60726)}})(n):n.fieldFilter!==void 0?(function(t){return _e.create(Yn(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return W(58110);default:return W(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return vt.create(t.compositeFilter.filters.map((i=>Xf(i))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return W(1026)}})(t.compositeFilter.op))})(n):W(30097,{filter:n})}function hT(n){return Zb[n]}function fT(n){return eT[n]}function pT(n){return tT[n]}function Jn(n){return{fieldPath:n.canonicalString()}}function Yn(n){return Fe.fromServerFormat(n.fieldPath)}function Zf(n){return n instanceof _e?(function(t){if(t.op==="=="){if(Xu(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NAN"}};if(Yu(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Xu(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NOT_NAN"}};if(Yu(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jn(t.field),op:fT(t.op),value:t.value}}})(n):n instanceof vt?(function(t){const i=t.getFilters().map((s=>Zf(s)));return i.length===1?i[0]:{compositeFilter:{op:pT(t.op),filters:i}}})(n):W(54877,{filter:n})}function ep(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,t,i,s,r=q.min(),o=q.min(),c=Re.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Qt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e){this.yt=e}}function gT(n){const e=uT({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Da(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(){this.Sn=new vT}addToCollectionParentIndex(e,t){return this.Sn.add(t),x.resolve()}getCollectionParents(e,t){return x.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return x.resolve()}deleteFieldIndex(e,t){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,t){return x.resolve()}getDocumentsMatchingTarget(e,t){return x.resolve(null)}getIndexType(e,t){return x.resolve(0)}getFieldIndexes(e,t){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,t){return x.resolve(rn.min())}getMinOffsetFromCollectionGroup(e,t){return x.resolve(rn.min())}updateCollectionGroup(e,t,i){return x.resolve()}updateIndexEntries(e,t){return x.resolve()}}class vT{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new be(ae.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new be(ae.comparator)).toArray()}}/**
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
 */const hd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},tp=41943040;class He{static withCacheSize(e){return new He(e,He.DEFAULT_COLLECTION_PERCENTILE,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */He.DEFAULT_COLLECTION_PERCENTILE=10,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,He.DEFAULT=new He(tp,He.DEFAULT_COLLECTION_PERCENTILE,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),He.DISABLED=new He(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const fd="LruGarbageCollector",wT=1048576;function pd([n,e],[t,i]){const s=Y(n,t);return s===0?Y(e,i):s}class _T{constructor(e){this.Pr=e,this.buffer=new be(pd),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();pd(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class bT{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){O(fd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){bi(t)?O(fd,"Ignoring IndexedDB error during garbage collection: ",t):await to(t)}await this.Ar(3e5)}))}}class TT{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return x.resolve(no.ce);const i=new _T(t);return this.Vr.forEachTarget(e,(s=>i.Er(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>i.Er(s))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(hd)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),hd):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let i,s,r,o,c,l,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((y=>(y>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),s=this.params.maximumSequenceNumbersToCollect):s=y,o=Date.now(),this.nthSequenceNumber(e,s)))).next((y=>(i=y,c=Date.now(),this.removeTargets(e,i,t)))).next((y=>(r=y,l=Date.now(),this.removeOrphanedDocuments(e,i)))).next((y=>(d=Date.now(),Kn()<=J.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-m}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${r} targets in `+(l-c)+`ms
	Removed ${y} documents in `+(d-l)+`ms
Total Duration: ${d-m}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:y}))))}}function IT(n,e){return new TT(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(){this.changes=new jn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ne.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?x.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ST{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(i=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(i!==null&&as(i.mutation,s,Kt.empty(),ye.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,ie()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=ie()){const s=An();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,i).next((r=>{let o=Qi();return r.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const i=An();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,ie())))}populateOverlays(e,t,i){const s=[];return i.forEach((r=>{t.has(r)||s.push(r)})),this.documentOverlayCache.getOverlays(e,s).next((r=>{r.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,i,s){let r=ln();const o=os(),c=(function(){return os()})();return t.forEach(((l,d)=>{const m=i.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof lo)?r=r.insert(d.key,d):m!==void 0?(o.set(d.key,m.mutation.getFieldMask()),as(m.mutation,d,m.mutation.getFieldMask(),ye.now())):o.set(d.key,Kt.empty())})),this.recalculateAndSaveOverlays(e,r).next((l=>(l.forEach(((d,m)=>o.set(d,m))),t.forEach(((d,m)=>c.set(d,new ST(m,o.get(d)??null)))),c)))}recalculateAndSaveOverlays(e,t){const i=os();let s=new me(((o,c)=>o-c)),r=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((l=>{const d=t.get(l);if(d===null)return;let m=i.get(l)||Kt.empty();m=c.applyToLocalView(d,m),i.set(l,m);const y=(s.get(c.batchId)||ie()).add(l);s=s.insert(c.batchId,y)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),d=l.key,m=l.value,y=Ff();m.forEach((w=>{if(!r.has(w)){const C=zf(t.get(w),i.get(w));C!==null&&y.set(w,C),r=r.add(w)}})),o.push(this.documentOverlayCache.saveOverlays(e,d,y))}return x.waitFor(o)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,s){return Rb(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):xb(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,s):this.getDocumentsMatchingCollectionQuery(e,t,i,s)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next((r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-r.size):x.resolve(An());let c=fs,l=r;return o.next((d=>x.forEach(d,((m,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),r.get(m)?x.resolve():this.remoteDocumentCache.getEntry(e,m).next((w=>{l=l.insert(m,w)}))))).next((()=>this.populateOverlays(e,d,r))).next((()=>this.computeViews(e,l,d,ie()))).next((m=>({batchId:c,changes:$b(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new H(t)).next((i=>{let s=Qi();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,s){const r=t.collectionGroup;let o=Qi();return this.indexManager.getCollectionParents(e,r).next((c=>x.forEach(c,(l=>{const d=(function(y,w){return new ro(w,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)})(t,l.child(r));return this.getDocumentsMatchingCollectionQuery(e,d,i,s).next((m=>{m.forEach(((y,w)=>{o=o.insert(y,w)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,r,s)))).next((o=>{r.forEach(((l,d)=>{const m=d.getKey();o.get(m)===null&&(o=o.insert(m,Ne.newInvalidDocument(m)))}));let c=Qi();return o.forEach(((l,d)=>{const m=r.get(l);m!==void 0&&as(m.mutation,d,Kt.empty(),ye.now()),ao(t,d)&&(c=c.insert(l,d))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return x.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:ni(s.createTime)}})(t)),x.resolve()}getNamedQuery(e,t){return x.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(s){return{name:s.name,query:gT(s.bundledQuery),readTime:ni(s.readTime)}})(t)),x.resolve()}}/**
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
 */class CT{constructor(){this.overlays=new me(H.comparator),this.Lr=new Map}getOverlay(e,t){return x.resolve(this.overlays.get(t))}getOverlays(e,t){const i=An();return x.forEach(t,(s=>this.getOverlay(e,s).next((r=>{r!==null&&i.set(s,r)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((s,r)=>{this.bt(e,t,r)})),x.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.Lr.get(i);return s!==void 0&&(s.forEach((r=>this.overlays=this.overlays.remove(r))),this.Lr.delete(i)),x.resolve()}getOverlaysForCollection(e,t,i){const s=An(),r=t.length+1,o=new H(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return x.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let r=new me(((d,m)=>d-m));const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>i){let m=r.get(d.largestBatchId);m===null&&(m=An(),r=r.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=An(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((d,m)=>c.set(d,m))),!(c.size()>=s)););return x.resolve(c)}bt(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(i.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new Kb(t,i));let r=this.Lr.get(t);r===void 0&&(r=ie(),this.Lr.set(t,r)),this.Lr.set(t,r.add(i.key))}}/**
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
 */class RT{constructor(){this.sessionToken=Re.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,x.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(){this.kr=new be(Se.Kr),this.qr=new be(Se.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const i=new Se(e,t);this.kr=this.kr.add(i),this.qr=this.qr.add(i)}$r(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new Se(e,t))}Qr(e,t){e.forEach((i=>this.removeReference(i,t)))}Gr(e){const t=new H(new ae([])),i=new Se(t,e),s=new Se(t,e+1),r=[];return this.qr.forEachInRange([i,s],(o=>{this.Wr(o),r.push(o.key)})),r}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new H(new ae([])),i=new Se(t,e),s=new Se(t,e+1);let r=ie();return this.qr.forEachInRange([i,s],(o=>{r=r.add(o.key)})),r}containsKey(e){const t=new Se(e,0),i=this.kr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Se{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return H.comparator(e.key,t.key)||Y(e.Hr,t.Hr)}static Ur(e,t){return Y(e.Hr,t.Hr)||H.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new be(Se.Kr)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const r=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Gb(r,t,i,s);this.mutationQueue.push(o);for(const c of s)this.Jr=this.Jr.add(new Se(c.key,r)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,t){return x.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.Xr(i),r=s<0?0:s;return x.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?ob:this.Yn-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Se(t,0),s=new Se(t,Number.POSITIVE_INFINITY),r=[];return this.Jr.forEachInRange([i,s],(o=>{const c=this.Zr(o.Hr);r.push(c)})),x.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new be(Y);return t.forEach((s=>{const r=new Se(s,0),o=new Se(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([r,o],(c=>{i=i.add(c.Hr)}))})),x.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;H.isDocumentKey(r)||(r=r.child(""));const o=new Se(new H(r),0);let c=new be(Y);return this.Jr.forEachWhile((l=>{const d=l.key.path;return!!i.isPrefixOf(d)&&(d.length===s&&(c=c.add(l.Hr)),!0)}),o),x.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((i=>{const s=this.Zr(i);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){ce(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Jr;return x.forEach(t.mutations,(s=>{const r=new Se(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Jr=i}))}nr(e){}containsKey(e,t){const i=new Se(t,0),s=this.Jr.firstAfterOrEqual(i);return x.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e){this.ti=e,this.docs=(function(){return new me(H.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),r=s?s.size:0,o=this.ti(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return x.resolve(i?i.document.mutableCopy():Ne.newInvalidDocument(t))}getEntries(e,t){let i=ln();return t.forEach((s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Ne.newInvalidDocument(s))})),x.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let r=ln();const o=t.path,c=new H(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:d,value:{document:m}}=l.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||nb(tb(m),i)<=0||(s.has(m.key)||ao(t,m))&&(r=r.insert(m.key,m.mutableCopy()))}return x.resolve(r)}getAllFromCollectionGroup(e,t,i,s){W(9500)}ni(e,t){return x.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new LT(this)}getSize(e){return x.resolve(this.size)}}class LT extends ET{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(i)})),x.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e){this.persistence=e,this.ri=new jn((t=>wc(t)),_c),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.ii=0,this.si=new Sc,this.targetCount=0,this.oi=di._r()}forEachTarget(e,t){return this.ri.forEach(((i,s)=>t(s))),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.ii&&(this.ii=t),x.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new di(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,x.resolve()}updateTargetData(e,t){return this.lr(t),x.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.ri.forEach(((o,c)=>{c.sequenceNumber<=t&&i.get(c.targetId)===null&&(this.ri.delete(o),r.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),x.waitFor(r).next((()=>s))}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,t){const i=this.ri.get(t)||null;return x.resolve(i)}addMatchingKeys(e,t,i){return this.si.$r(t,i),x.resolve()}removeMatchingKeys(e,t,i){this.si.Qr(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach((o=>{r.push(s.markPotentiallyOrphaned(e,o))})),x.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),x.resolve()}getMatchingKeysForTargetId(e,t){const i=this.si.jr(t);return x.resolve(i)}containsKey(e,t){return x.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,t){this._i={},this.overlays={},this.ai=new no(0),this.ui=!1,this.ui=!0,this.ci=new RT,this.referenceDelegate=e(this),this.li=new DT(this),this.indexManager=new yT,this.remoteDocumentCache=(function(s){return new PT(s)})((i=>this.referenceDelegate.hi(i))),this.serializer=new mT(t),this.Pi=new kT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new CT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this._i[e.toKey()];return i||(i=new xT(t,this.referenceDelegate),this._i[e.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,i){O("MemoryPersistence","Starting transaction:",e);const s=new NT(this.ai.next());return this.referenceDelegate.Ti(),i(s).next((r=>this.referenceDelegate.Ii(s).next((()=>r)))).toPromise().then((r=>(s.raiseOnCommittedEvent(),r)))}Ei(e,t){return x.or(Object.values(this._i).map((i=>()=>i.containsKey(e,t))))}}class NT extends sb{constructor(e){super(),this.currentSequenceNumber=e}}class Ac{constructor(e){this.persistence=e,this.Ri=new Sc,this.Ai=null}static Vi(e){return new Ac(e)}get di(){if(this.Ai)return this.Ai;throw W(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.di.delete(i.toString()),x.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.di.add(i.toString()),x.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),x.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((s=>this.di.add(s.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((r=>this.di.add(r.toString())))})).next((()=>i.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.di,(i=>{const s=H.fromPath(i);return this.mi(e,s).next((r=>{r||t.removeEntry(s,q.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((i=>{i?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return x.or([()=>x.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Ur{constructor(e,t){this.persistence=e,this.fi=new jn((i=>ab(i.path)),((i,s)=>i.isEqual(s))),this.garbageCollector=IT(this,t)}static Vi(e,t){return new Ur(e,t)}Ti(){}Ii(e){return x.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((s=>i+s))))}pr(e){let t=0;return this.mr(e,(i=>{t++})).next((()=>t))}mr(e,t){return x.forEach(this.fi,((i,s)=>this.wr(e,i,s).next((r=>r?x.resolve():t(s)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.ni(e,(o=>this.wr(e,o,t).next((c=>{c||(i++,r.removeEntry(o,q.min()))})))).next((()=>r.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),x.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),x.resolve()}removeReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),x.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=yr(e.data.value)),t}wr(e,t,i){return x.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return x.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.Ts=i,this.Is=s}static Es(e,t){let i=ie(),s=ie();for(const r of t.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new kc(e,t.fromCache,i,s)}}/**
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
 */class $T{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return _g()?8:rb($e())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,s){const r={result:null};return this.gs(e,t).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ps(e,t,s,i).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new $T;return this.ys(e,t,o).next((c=>{if(r.result=c,this.As)return this.ws(e,t,o,c.size)}))})).next((()=>r.result))}ws(e,t,i,s){return i.documentReadCount<this.Vs?(Kn()<=J.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",Qn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),x.resolve()):(Kn()<=J.DEBUG&&O("QueryEngine","Query:",Qn(t),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.ds*s?(Kn()<=J.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",Qn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mt(t))):x.resolve())}gs(e,t){if(nd(t))return x.resolve(null);let i=mt(t);return this.indexManager.getIndexType(e,i).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Da(t,null,"F"),i=mt(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((r=>{const o=ie(...r);return this.fs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,i).next((l=>{const d=this.bs(t,c);return this.Ss(t,d,o,l.readTime)?this.gs(e,Da(t,null,"F")):this.Ds(e,d,t,l)}))))})))))}ps(e,t,i,s){return nd(t)||s.isEqual(q.min())?x.resolve(null):this.fs.getDocuments(e,i).next((r=>{const o=this.bs(t,r);return this.Ss(t,o,i,s)?x.resolve(null):(Kn()<=J.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Qn(t)),this.Ds(e,o,t,eb(s,fs)).next((c=>c)))}))}bs(e,t){let i=new be(Vf(e));return t.forEach(((s,r)=>{ao(e,r)&&(i=i.add(r))})),i}Ss(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ys(e,t,i){return Kn()<=J.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Qn(t)),this.fs.getDocumentsMatchingQuery(e,t,rn.min(),i)}Ds(e,t,i,s){return this.fs.getDocumentsMatchingQuery(e,i,s).next((r=>(t.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc="LocalStore",MT=3e8;class VT{constructor(e,t,i,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new me(Y),this.Fs=new jn((r=>wc(r)),_c),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(i)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new AT(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function UT(n,e,t,i){return new VT(n,e,t,i)}async function ip(n,e){const t=te(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next((r=>(s=r,t.Os(e),t.mutationQueue.getAllMutationBatches(i)))).next((r=>{const o=[],c=[];let l=ie();for(const d of s){o.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}for(const d of r){c.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}return t.localDocuments.getDocuments(i,l).next((d=>({Ns:d,removedBatchIds:o,addedBatchIds:c})))}))}))}function sp(n){const e=te(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function FT(n,e){const t=te(n),i=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const c=[];e.targetChanges.forEach(((m,y)=>{const w=s.get(y);if(!w)return;c.push(t.li.removeMatchingKeys(r,m.removedDocuments,y).next((()=>t.li.addMatchingKeys(r,m.addedDocuments,y))));let C=w.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(y)!==null?C=C.withResumeToken(Re.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):m.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(m.resumeToken,i)),s=s.insert(y,C),(function($,L,B){return $.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=MT?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0})(w,C,m)&&c.push(t.li.updateTargetData(r,C))}));let l=ln(),d=ie();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(r,m))})),c.push(jT(r,o,e.documentUpdates).next((m=>{l=m.Bs,d=m.Ls}))),!i.isEqual(q.min())){const m=t.li.getLastRemoteSnapshotVersion(r).next((y=>t.li.setTargetsMetadata(r,r.currentSequenceNumber,i)));c.push(m)}return x.waitFor(c).next((()=>o.apply(r))).next((()=>t.localDocuments.getLocalViewOfDocuments(r,l,d))).next((()=>l))})).then((r=>(t.vs=s,r)))}function jT(n,e,t){let i=ie(),s=ie();return t.forEach((r=>i=i.add(r))),e.getEntries(n,i).next((r=>{let o=ln();return t.forEach(((c,l)=>{const d=r.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(q.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):O(Cc,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)})),{Bs:o,Ls:s}}))}function BT(n,e){const t=te(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let s;return t.li.getTargetData(i,e).next((r=>r?(s=r,x.resolve(s)):t.li.allocateTargetId(i).next((o=>(s=new Qt(e,o,"TargetPurposeListen",i.currentSequenceNumber),t.li.addTargetData(i,s).next((()=>s)))))))})).then((i=>{const s=t.vs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(i.targetId,i),t.Fs.set(e,i.targetId)),i}))}async function Va(n,e,t){const i=te(n),s=i.vs.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,(o=>i.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!bi(o))throw o;O(Cc,`Failed to update sequence numbers for target ${e}: ${o}`)}i.vs=i.vs.remove(e),i.Fs.delete(s.target)}function md(n,e,t){const i=te(n);let s=q.min(),r=ie();return i.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,d,m){const y=te(l),w=y.Fs.get(m);return w!==void 0?x.resolve(y.vs.get(w)):y.li.getTargetData(d,m)})(i,o,mt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(o,c.targetId).next((l=>{r=l}))})).next((()=>i.Cs.getDocumentsMatchingQuery(o,e,t?s:q.min(),t?r:ie()))).next((c=>(HT(i,Lb(e),c),{documents:c,ks:r})))))}function HT(n,e,t){let i=n.Ms.get(e)||q.min();t.forEach(((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)})),n.Ms.set(e,i)}class gd{constructor(){this.activeTargetIds=Vb()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zT{constructor(){this.vo=new gd,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,i){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new gd,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd="ConnectivityMonitor";class vd{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){O(yd,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){O(yd,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const ia="RestConnection",WT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class GT{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${i}/databases/${s}`,this.$o=this.databaseId.database===Nr?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(e,t,i,s,r){const o=Ua(),c=this.Qo(e,t.toUriEncodedString());O(ia,`Sending RPC '${e}' ${o}:`,c,i);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,r);const{host:d}=new URL(c),m=dn(d);return this.zo(e,c,l,i,m).then((y=>(O(ia,`Received RPC '${e}' ${o}: `,y),y)),(y=>{throw $n(ia,`RPC '${e}' ${o} failed with error: `,y,"url: ",c,"request:",i),y}))}jo(e,t,i,s,r,o){return this.Wo(e,t,i,s,r)}Go(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+_i})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,r)=>e[r]=s)),i&&i.headers.forEach(((s,r)=>e[r]=s))}Qo(e,t){const i=WT[e];let s=`${this.qo}/v1/${t}:${i}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le="WebChannelConnection",ji=(n,e,t)=>{n.listen(e,(i=>{try{t(i)}catch(s){setTimeout((()=>{throw s}),0)}}))};class ii extends GT{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!ii.c_){const e=_f();ji(e,wf.STAT_EVENT,(t=>{t.stat===Sa.PROXY?O(Le,"STAT_EVENT: detected buffering proxy"):t.stat===Sa.NOPROXY&&O(Le,"STAT_EVENT: detected no buffering proxy")})),ii.c_=!0}}zo(e,t,i,s,r){const o=Ua();return new Promise(((c,l)=>{const d=new yf;d.setWithCredentials(!0),d.listenOnce(vf.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case mr.NO_ERROR:const y=d.getResponseJson();O(Le,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(y)),c(y);break;case mr.TIMEOUT:O(Le,`RPC '${e}' ${o} timed out`),l(new F(N.DEADLINE_EXCEEDED,"Request time out"));break;case mr.HTTP_ERROR:const w=d.getStatus();if(O(Le,`RPC '${e}' ${o} failed with status:`,w,"response text:",d.getResponseText()),w>0){let C=d.getResponseJson();Array.isArray(C)&&(C=C[0]);const P=C==null?void 0:C.error;if(P&&P.status&&P.message){const $=(function(B){const G=B.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(G)>=0?G:N.UNKNOWN})(P.status);l(new F($,P.message))}else l(new F(N.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new F(N.UNAVAILABLE,"Connection failed."));break;default:W(9055,{l_:e,streamId:o,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{O(Le,`RPC '${e}' ${o} completed.`)}}));const m=JSON.stringify(s);O(Le,`RPC '${e}' ${o} sending request:`,s),d.send(t,"POST",m,i,15)}))}T_(e,t,i){const s=Ua(),r=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,i),c.encodeInitMessageHeaders=!0;const d=r.join("");O(Le,`Creating RPC '${e}' stream ${s}: ${d}`,c);const m=o.createWebChannel(d,c);this.I_(m);let y=!1,w=!1;const C=new KT({Ho:P=>{w?O(Le,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(y||(O(Le,`Opening RPC '${e}' stream ${s} transport.`),m.open(),y=!0),O(Le,`RPC '${e}' stream ${s} sending:`,P),m.send(P))},Jo:()=>m.close()});return ji(m,Ki.EventType.OPEN,(()=>{w||(O(Le,`RPC '${e}' stream ${s} transport opened.`),C.i_())})),ji(m,Ki.EventType.CLOSE,(()=>{w||(w=!0,O(Le,`RPC '${e}' stream ${s} transport closed`),C.o_(),this.E_(m))})),ji(m,Ki.EventType.ERROR,(P=>{w||(w=!0,$n(Le,`RPC '${e}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),C.o_(new F(N.UNAVAILABLE,"The operation could not be completed")))})),ji(m,Ki.EventType.MESSAGE,(P=>{var $;if(!w){const L=P.data[0];ce(!!L,16349);const B=L,G=(B==null?void 0:B.error)||(($=B[0])==null?void 0:$.error);if(G){O(Le,`RPC '${e}' stream ${s} received error:`,G);const M=G.status;let U=(function(T){const v=ge[T];if(v!==void 0)return Wf(v)})(M),Q=G.message;M==="NOT_FOUND"&&Q.includes("database")&&Q.includes("does not exist")&&Q.includes(this.databaseId.database)&&$n(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),U===void 0&&(U=N.INTERNAL,Q="Unknown error status: "+M+" with message "+G.message),w=!0,C.o_(new F(U,Q)),m.close()}else O(Le,`RPC '${e}' stream ${s} received:`,L),C.__(L)}})),ii.u_(),setTimeout((()=>{C.s_()}),0),C}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,i){super.Go(e,t,i),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return bf()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(n){return new ii(n)}function sa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(n){return new nT(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ii.c_=!1;class op{constructor(e,t,i=1e3,s=1.5,r=6e4){this.Ci=e,this.timerId=t,this.R_=i,this.A_=s,this.V_=r,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-i);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd="PersistentStream";class JT{constructor(e,t,i,s,r,o,c,l){this.Ci=e,this.b_=i,this.S_=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new op(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(Pt(t.toString()),Pt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,s])=>{this.D_===t&&this.G_(i,s)}),(i=>{e((()=>{const s=new F(N.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(s)}))}))}G_(e,t){const i=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.Yo((()=>{i((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{i((()=>this.z_(s)))})),this.stream.onMessage((s=>{i((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return O(wd,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(O(wd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class YT extends JT{constructor(e,t,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=aT(this.serializer,e),i=(function(r){if(!("targetChange"in r))return q.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?q.min():o.readTime?ni(o.readTime):q.min()})(e);return this.listener.J_(t,i)}Z_(e){const t={};t.database=dd(this.serializer),t.addTarget=(function(r,o){let c;const l=o.target;if(c=La(l)?{documents:cT(r,l)}:{query:lT(r,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=sT(r,o.resumeToken);const d=Oa(r,o.expectedCount);d!==null&&(c.expectedCount=d)}else if(o.snapshotVersion.compareTo(q.min())>0){c.readTime=iT(r,o.snapshotVersion.toTimestamp());const d=Oa(r,o.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,e);const i=dT(this.serializer,e);i&&(t.labels=i),this.K_(t)}X_(e){const t={};t.database=dd(this.serializer),t.removeTarget=e,this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{}class ZT extends XT{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new F(N.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Wo(e,Ma(t,i),s,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new F(N.UNKNOWN,r.toString())}))}jo(e,t,i,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.jo(e,Ma(t,i),s,o,c,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new F(N.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function eI(n,e,t,i){return new ZT(n,e,t,i)}class tI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Pt(t),this.aa=!1):O("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi="RemoteStore";class nI{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=r,this.Aa.Mo((o=>{i.enqueueAndForget((async()=>{xs(this)&&(O(hi,"Restarting streams for network reachability change."),await(async function(l){const d=te(l);d.Ea.add(4),await Rs(d),d.Va.set("Unknown"),d.Ea.delete(4),await ho(d)})(this))}))})),this.Va=new tI(i,s)}}async function ho(n){if(xs(n))for(const e of n.Ra)await e(!0)}async function Rs(n){for(const e of n.Ra)await e(!1)}function ap(n,e){const t=te(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Lc(t)?Pc(t):Ti(t).O_()&&xc(t,e))}function Rc(n,e){const t=te(n),i=Ti(t);t.Ia.delete(e),i.O_()&&cp(t,e),t.Ia.size===0&&(i.O_()?i.L_():xs(t)&&t.Va.set("Unknown"))}function xc(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ti(n).Z_(e)}function cp(n,e){n.da.$e(e),Ti(n).X_(e)}function Pc(n){n.da=new Xb({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Ti(n).start(),n.Va.ua()}function Lc(n){return xs(n)&&!Ti(n).x_()&&n.Ia.size>0}function xs(n){return te(n).Ea.size===0}function lp(n){n.da=void 0}async function iI(n){n.Va.set("Online")}async function sI(n){n.Ia.forEach(((e,t)=>{xc(n,e)}))}async function rI(n,e){lp(n),Lc(n)?(n.Va.ha(e),Pc(n)):n.Va.set("Unknown")}async function oI(n,e,t){if(n.Va.set("Online"),e instanceof Kf&&e.state===2&&e.cause)try{await(async function(s,r){const o=r.cause;for(const c of r.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.da.removeTarget(c))})(n,e)}catch(i){O(hi,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await _d(n,i)}else if(e instanceof wr?n.da.Xe(e):e instanceof Gf?n.da.st(e):n.da.tt(e),!t.isEqual(q.min()))try{const i=await sp(n.localStore);t.compareTo(i)>=0&&await(function(r,o){const c=r.da.Tt(o);return c.targetChanges.forEach(((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const m=r.Ia.get(d);m&&r.Ia.set(d,m.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,d)=>{const m=r.Ia.get(l);if(!m)return;r.Ia.set(l,m.withResumeToken(Re.EMPTY_BYTE_STRING,m.snapshotVersion)),cp(r,l);const y=new Qt(m.target,l,d,m.sequenceNumber);xc(r,y)})),r.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(i){O(hi,"Failed to raise snapshot:",i),await _d(n,i)}}async function _d(n,e,t){if(!bi(e))throw e;n.Ea.add(1),await Rs(n),n.Va.set("Offline"),t||(t=()=>sp(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{O(hi,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await ho(n)}))}async function bd(n,e){const t=te(n);t.asyncQueue.verifyOperationInProgress(),O(hi,"RemoteStore received new credentials");const i=xs(t);t.Ea.add(3),await Rs(t),i&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await ho(t)}async function aI(n,e){const t=te(n);e?(t.Ea.delete(2),await ho(t)):e||(t.Ea.add(2),await Rs(t),t.Va.set("Unknown"))}function Ti(n){return n.ma||(n.ma=(function(t,i,s){const r=te(t);return r.sa(),new YT(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Zo:iI.bind(null,n),Yo:sI.bind(null,n),t_:rI.bind(null,n),J_:oI.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),Lc(n)?Pc(n):n.Va.set("Unknown")):(await n.ma.stop(),lp(n))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new ti,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,r){const o=Date.now()+i,c=new Dc(e,t,o,s,r);return c.start(i),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function up(n,e){if(Pt("AsyncQueue",`${e}: ${n}`),bi(n))return new F(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{static emptySet(e){return new si(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||H.comparator(t.key,i.key):(t,i)=>H.comparator(t.key,i.key),this.keyedMap=Qi(),this.sortedSet=new me(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof si)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Td{constructor(){this.ga=new me(H.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):W(63341,{Vt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class fi{constructor(e,t,i,s,r,o,c,l,d){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,i,s,r){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new fi(e,t,si.emptySet(t),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&oo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class lI{constructor(){this.queries=Id(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const s=te(t),r=s.queries;s.queries=Id(),r.forEach(((o,c)=>{for(const l of c.ba)l.onError(i)}))})(this,new F(N.ABORTED,"Firestore shutting down"))}}function Id(){return new jn((n=>Mf(n)),oo)}async function uI(n,e){const t=te(n);let i=3;const s=e.query;let r=t.queries.get(s);r?!r.Sa()&&e.Da()&&(i=2):(r=new cI,i=e.Da()?0:1);try{switch(i){case 0:r.wa=await t.onListen(s,!0);break;case 1:r.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=up(o,`Initialization of query '${Qn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,r),r.ba.push(e),e.va(t.onlineState),r.wa&&e.Fa(r.wa)&&Nc(t)}async function dI(n,e){const t=te(n),i=e.query;let s=3;const r=t.queries.get(i);if(r){const o=r.ba.indexOf(e);o>=0&&(r.ba.splice(o,1),r.ba.length===0?s=e.Da()?0:1:!r.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function hI(n,e){const t=te(n);let i=!1;for(const s of e){const r=s.query,o=t.queries.get(r);if(o){for(const c of o.ba)c.Fa(s)&&(i=!0);o.wa=s}}i&&Nc(t)}function fI(n,e,t){const i=te(n),s=i.queries.get(e);if(s)for(const r of s.ba)r.onError(t);i.queries.delete(e)}function Nc(n){n.Ca.forEach((e=>{e.next()}))}var Fa,Ed;(Ed=Fa||(Fa={})).Ma="default",Ed.Cache="cache";class pI{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new fi(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.Ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=fi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Fa.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e){this.key=e}}class hp{constructor(e){this.key=e}}class mI{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ie(),this.mutatedKeys=ie(),this.eu=Vf(e),this.tu=new si(this.eu)}get nu(){return this.Za}ru(e,t){const i=t?t.iu:new Td,s=t?t.tu:this.tu;let r=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((m,y)=>{const w=s.get(m),C=ao(this.query,y)?y:null,P=!!w&&this.mutatedKeys.has(w.key),$=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let L=!1;w&&C?w.data.isEqual(C.data)?P!==$&&(i.track({type:3,doc:C}),L=!0):this.su(w,C)||(i.track({type:2,doc:C}),L=!0,(l&&this.eu(C,l)>0||d&&this.eu(C,d)<0)&&(c=!0)):!w&&C?(i.track({type:0,doc:C}),L=!0):w&&!C&&(i.track({type:1,doc:w}),L=!0,(l||d)&&(c=!0)),L&&(C?(o=o.add(C),r=$?r.add(m):r.delete(m)):(o=o.delete(m),r=r.delete(m)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const m=this.query.limitType==="F"?o.last():o.first();o=o.delete(m.key),r=r.delete(m.key),i.track({type:1,doc:m})}return{tu:o,iu:i,Ss:c,mutatedKeys:r}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,s){const r=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((m,y)=>(function(C,P){const $=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W(20277,{Vt:L})}};return $(C)-$(P)})(m.type,y.type)||this.eu(m.doc,y.doc))),this.ou(i),s=s??!1;const c=t&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,d=l!==this.Xa;return this.Xa=l,o.length!==0||d?{snapshot:new fi(this.query,e.tu,r,o,e.mutatedKeys,l===0,d,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Td,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ie(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Ya=this.Ya.add(i.key))}));const t=[];return e.forEach((i=>{this.Ya.has(i)||t.push(new hp(i))})),this.Ya.forEach((i=>{e.has(i)||t.push(new dp(i))})),t}cu(e){this.Za=e.ks,this.Ya=ie();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return fi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const $c="SyncEngine";class gI{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class yI{constructor(e){this.key=e,this.hu=!1}}class vI{constructor(e,t,i,s,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new jn((c=>Mf(c)),oo),this.Iu=new Map,this.Eu=new Set,this.Ru=new me(H.comparator),this.Au=new Map,this.Vu=new Sc,this.du={},this.mu=new Map,this.fu=di.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function wI(n,e,t=!0){const i=yp(n);let s;const r=i.Tu.get(e);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.lu()):s=await fp(i,e,t,!0),s}async function _I(n,e){const t=yp(n);await fp(t,e,!0,!1)}async function fp(n,e,t,i){const s=await BT(n.localStore,mt(e)),r=s.targetId,o=n.sharedClientState.addLocalQueryTarget(r,t);let c;return i&&(c=await bI(n,e,r,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&ap(n.remoteStore,s),c}async function bI(n,e,t,i,s){n.pu=(y,w,C)=>(async function($,L,B,G){let M=L.view.ru(B);M.Ss&&(M=await md($.localStore,L.query,!1).then((({documents:T})=>L.view.ru(T,M))));const U=G&&G.targetChanges.get(L.targetId),Q=G&&G.targetMismatches.get(L.targetId)!=null,X=L.view.applyChanges(M,$.isPrimaryClient,U,Q);return Ad($,L.targetId,X.au),X.snapshot})(n,y,w,C);const r=await md(n.localStore,e,!0),o=new mI(e,r.ks),c=o.ru(r.documents),l=Cs.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),d=o.applyChanges(c,n.isPrimaryClient,l);Ad(n,t,d.au);const m=new gI(e,t,o);return n.Tu.set(e,m),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function TI(n,e,t){const i=te(n),s=i.Tu.get(e),r=i.Iu.get(s.targetId);if(r.length>1)return i.Iu.set(s.targetId,r.filter((o=>!oo(o,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await Va(i.localStore,s.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(s.targetId),t&&Rc(i.remoteStore,s.targetId),ja(i,s.targetId)})).catch(to)):(ja(i,s.targetId),await Va(i.localStore,s.targetId,!0))}async function II(n,e){const t=te(n),i=t.Tu.get(e),s=t.Iu.get(i.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Rc(t.remoteStore,i.targetId))}async function pp(n,e){const t=te(n);try{const i=await FT(t.localStore,e);e.targetChanges.forEach(((s,r)=>{const o=t.Au.get(r);o&&(ce(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?ce(o.hu,14607):s.removedDocuments.size>0&&(ce(o.hu,42227),o.hu=!1))})),await gp(t,i,e)}catch(i){await to(i)}}function Sd(n,e,t){const i=te(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.Tu.forEach(((r,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=te(o);l.onlineState=c;let d=!1;l.queries.forEach(((m,y)=>{for(const w of y.ba)w.va(c)&&(d=!0)})),d&&Nc(l)})(i.eventManager,e),s.length&&i.Pu.J_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function EI(n,e,t){const i=te(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.Au.get(e),r=s&&s.key;if(r){let o=new me(H.comparator);o=o.insert(r,Ne.newNoDocument(r,q.min()));const c=ie().add(r),l=new uo(q.min(),new Map,new me(Y),o,c);await pp(i,l),i.Ru=i.Ru.remove(r),i.Au.delete(e),Oc(i)}else await Va(i.localStore,e,!1).then((()=>ja(i,e,t))).catch(to)}function ja(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Iu.get(e))n.Tu.delete(i),t&&n.Pu.yu(i,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((i=>{n.Vu.containsKey(i)||mp(n,i)}))}function mp(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(Rc(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Oc(n))}function Ad(n,e,t){for(const i of t)i instanceof dp?(n.Vu.addReference(i.key,e),SI(n,i)):i instanceof hp?(O($c,"Document no longer in limbo: "+i.key),n.Vu.removeReference(i.key,e),n.Vu.containsKey(i.key)||mp(n,i.key)):W(19791,{wu:i})}function SI(n,e){const t=e.key,i=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(i)||(O($c,"New document in limbo: "+t),n.Eu.add(i),Oc(n))}function Oc(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new H(ae.fromString(e)),i=n.fu.next();n.Au.set(i,new yI(t)),n.Ru=n.Ru.insert(t,i),ap(n.remoteStore,new Qt(mt(bc(t.path)),i,"TargetPurposeLimboResolution",no.ce))}}async function gp(n,e,t){const i=te(n),s=[],r=[],o=[];i.Tu.isEmpty()||(i.Tu.forEach(((c,l)=>{o.push(i.pu(l,e,t).then((d=>{var m;if((d||t)&&i.isPrimaryClient){const y=d?!d.fromCache:(m=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:m.current;i.sharedClientState.updateQueryState(l.targetId,y?"current":"not-current")}if(d){s.push(d);const y=kc.Es(l.targetId,d);r.push(y)}})))})),await Promise.all(o),i.Pu.J_(s),await(async function(l,d){const m=te(l);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(y=>x.forEach(d,(w=>x.forEach(w.Ts,(C=>m.persistence.referenceDelegate.addReference(y,w.targetId,C))).next((()=>x.forEach(w.Is,(C=>m.persistence.referenceDelegate.removeReference(y,w.targetId,C)))))))))}catch(y){if(!bi(y))throw y;O(Cc,"Failed to update sequence numbers: "+y)}for(const y of d){const w=y.targetId;if(!y.fromCache){const C=m.vs.get(w),P=C.snapshotVersion,$=C.withLastLimboFreeSnapshotVersion(P);m.vs=m.vs.insert(w,$)}}})(i.localStore,r))}async function AI(n,e){const t=te(n);if(!t.currentUser.isEqual(e)){O($c,"User change. New user:",e.toKey());const i=await ip(t.localStore,e);t.currentUser=e,(function(r,o){r.mu.forEach((c=>{c.forEach((l=>{l.reject(new F(N.CANCELLED,o))}))})),r.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await gp(t,i.Ns)}}function kI(n,e){const t=te(n),i=t.Au.get(e);if(i&&i.hu)return ie().add(i.key);{let s=ie();const r=t.Iu.get(e);if(!r)return s;for(const o of r){const c=t.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function yp(n){const e=te(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=pp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=kI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=EI.bind(null,e),e.Pu.J_=hI.bind(null,e.eventManager),e.Pu.yu=fI.bind(null,e.eventManager),e}class Fr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=rp(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return UT(this.persistence,new OT,e.initialUser,this.serializer)}Cu(e){return new np(Ac.Vi,this.serializer)}Du(e){return new zT}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fr.provider={build:()=>new Fr};class CI extends Fr{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ce(this.persistence.referenceDelegate instanceof Ur,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new bT(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?He.withCacheSize(this.cacheSizeBytes):He.DEFAULT;return new np((i=>Ur.Vi(i,t)),this.serializer)}}class Ba{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Sd(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=AI.bind(null,this.syncEngine),await aI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new lI})()}createDatastore(e){const t=rp(e.databaseInfo.databaseId),i=QT(e.databaseInfo);return eI(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,s,r,o,c){return new nI(i,s,r,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>Sd(this.syncEngine,t,0)),(function(){return vd.v()?new vd:new qT})())}createSyncEngine(e,t){return(function(s,r,o,c,l,d,m){const y=new vI(s,r,o,c,l,d);return m&&(y.gu=!0),y})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const r=te(s);O(hi,"RemoteStore shutting down."),r.Ea.add(5),await Rs(r),r.Aa.shutdown(),r.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Ba.provider={build:()=>new Ba};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class RI{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Pt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un="FirestoreClient";class xI{constructor(e,t,i,s,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this._databaseInfo=s,this.user=De.UNAUTHENTICATED,this.clientId=Ef.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,(async o=>{O(un,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(i,(o=>(O(un,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ti;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=up(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function ra(n,e){n.asyncQueue.verifyOperationInProgress(),O(un,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async s=>{i.isEqual(s)||(await ip(e.localStore,s),i=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function kd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await PI(n);O(un,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>bd(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,s)=>bd(e.remoteStore,s))),n._onlineComponents=e}async function PI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O(un,"Using user provided OfflineComponentProvider");try{await ra(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;$n("Error using user provided cache. Falling back to memory cache: "+t),await ra(n,new Fr)}}else O(un,"Using default OfflineComponentProvider"),await ra(n,new CI(void 0));return n._offlineComponents}async function LI(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O(un,"Using user provided OnlineComponentProvider"),await kd(n,n._uninitializedComponentsProvider._online)):(O(un,"Using default OnlineComponentProvider"),await kd(n,new Ba))),n._onlineComponents}async function Cd(n){const e=await LI(n),t=e.eventManager;return t.onListen=wI.bind(null,e.syncEngine),t.onUnlisten=TI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=_I.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=II.bind(null,e.syncEngine),t}function DI(n,e,t,i){const s=new RI(i),r=new pI(e,s,t);return n.asyncQueue.enqueueAndForget((async()=>uI(await Cd(n),r))),()=>{s.Nu(),n.asyncQueue.enqueueAndForget((async()=>dI(await Cd(n),r)))}}/**
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
 */function vp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI="ComponentProvider",Rd=new Map;function $I(n,e,t,i,s){return new db(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,vp(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp="firestore.googleapis.com",xd=!0;class Pd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new F(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=wp,this.ssl=xd}else this.host=e.host,this.ssl=e.ssl??xd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=tp;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<wT)throw new F(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Y_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vp(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new F(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new F(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new F(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Mc{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new F(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new F_;switch(i.type){case"firstParty":return new z_(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new F(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=Rd.get(t);i&&(O(NI,"Removing Datastore"),Rd.delete(t),i.terminate())})(this),Promise.resolve()}}function OI(n,e,t,i={}){var d;n=gr(n,Mc);const s=dn(e),r=n._getSettings(),o={...r,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(Ja(`https://${c}`),Ya("Firestore",!0)),r.host!==wp&&r.host!==c&&$n("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...r,host:c,ssl:s,emulatorOptions:i};if(!xn(l,o)&&(n._setSettings(l),i.mockUserToken)){let m,y;if(typeof i.mockUserToken=="string")m=i.mockUserToken,y=De.MOCK_USER;else{m=mh(i.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const w=i.mockUserToken.sub||i.mockUserToken.user_id;if(!w)throw new F(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new De(w)}n._authCredentials=new j_(new If(m,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new fo(this.firestore,e,this._query)}}class Ge{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ri(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ge(this.firestore,e,this._key)}toJSON(){return{type:Ge._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(As(t,Ge._jsonSchema))return new Ge(e,i||null,new H(ae.fromString(t.referencePath)))}}Ge._jsonSchemaVersion="firestore/documentReference/1.0",Ge._jsonSchema={type:ve("string",Ge._jsonSchemaVersion),referencePath:ve("string")};class ri extends fo{constructor(e,t,i){super(e,t,bc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ge(this.firestore,null,new H(e))}withConverter(e){return new ri(this.firestore,e,this._path)}}function _n(n,e,...t){if(n=xe(n),J_("collection","path",e),n instanceof Mc){const i=ae.fromString(e,...t);return Hu(i),new ri(n,null,i)}{if(!(n instanceof Ge||n instanceof ri))throw new F(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ae.fromString(e,...t));return Hu(i),new ri(n.firestore,null,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld="AsyncQueue";class Dd{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new op(this,"async_queue_retry"),this._c=()=>{const i=sa();i&&O(Ld,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=sa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=sa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new ti;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!bi(e))throw e;O(Ld,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,Pt("INTERNAL UNHANDLED ERROR: ",Nd(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Dc.createAndSchedule(this,e,t,i,(r=>this.hc(r)));return this.tc.push(s),s}uc(){this.nc&&W(47125,{Pc:Nd(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Nd(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Ha extends Mc{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new Dd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Dd(e),this._firestoreClient=void 0,await e}}}function MI(n,e){const t=typeof n=="object"?n:ec(),i=typeof n=="string"?n:Nr,s=Wr(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=hh("firestore");r&&OI(s,...r)}return s}function VI(n){if(n._terminated)throw new F(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||UI(n),n._firestoreClient}function UI(n){var i,s,r,o;const e=n._freezeSettings(),t=$I(n._databaseId,((i=n._app)==null?void 0:i.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(r=e.localCache)!=null&&r._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new xI(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(l){const d=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(d),_online:d}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ct(Re.fromBase64String(e))}catch(t){throw new F(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ct(Re.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ct._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(As(e,ct._jsonSchema))return ct.fromBase64String(e.bytes)}}ct._jsonSchemaVersion="firestore/bytes/1.0",ct._jsonSchema={type:ve("string",ct._jsonSchemaVersion),bytes:ve("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new F(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new F(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new F(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Zt._jsonSchemaVersion}}static fromJSON(e){if(As(e,Zt._jsonSchema))return new Zt(e.latitude,e.longitude)}}Zt._jsonSchemaVersion="firestore/geoPoint/1.0",Zt._jsonSchema={type:ve("string",Zt._jsonSchemaVersion),latitude:ve("number"),longitude:ve("number")};/**
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
 */class en{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0})(this._values,e._values)}toJSON(){return{type:en._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(As(e,en._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new en(e.vectorValues);throw new F(N.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}en._jsonSchemaVersion="firestore/vectorValue/1.0",en._jsonSchema={type:ve("string",en._jsonSchemaVersion),vectorValues:ve("object")};function bp(n,e,t){if((e=xe(e))instanceof _p)return e._internalPath;if(typeof e=="string")return jI(n,e);throw za("Field path arguments must be of type string or ",n)}const FI=new RegExp("[~\\*/\\[\\]]");function jI(n,e,t){if(e.search(FI)>=0)throw za(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new _p(...e.split("."))._internalPath}catch{throw za(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function za(n,e,t,i,s){let r=`Function ${e}() called with invalid data`;r+=". ";let o="";return new F(N.INVALID_ARGUMENT,r+n+o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{convertValue(e,t="none"){switch(cn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(an(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw W(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return ks(e,((s,r)=>{i[s]=this.convertValue(r,t)})),i}convertVectorValue(e){var i,s,r;const t=(r=(s=(i=e.fields)==null?void 0:i[Ca].arrayValue)==null?void 0:s.values)==null?void 0:r.map((o=>pe(o.doubleValue)));return new en(t)}convertGeoPoint(e){return new Zt(pe(e.latitude),pe(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=so(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(ps(e));default:return null}}convertTimestamp(e){const t=on(e);return new ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=ae.fromString(e);ce(ep(i),9688,{name:e});const s=new ms(i.get(1),i.get(3)),r=new H(i.popFirst(5));return s.isEqual(t)||Pt(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */class Tp extends BI{constructor(e){super(),this.firestore=e}convertBytes(e){return new ct(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ge(this.firestore,null,t)}}const $d="@firebase/firestore",Od="4.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new HI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(bp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class HI extends Ip{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new F(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Yi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Cn extends Ip{constructor(e,t,i,s,r,o){super(e,t,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new _r(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(bp("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new F(N.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Cn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Cn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Cn._jsonSchema={type:ve("string",Cn._jsonSchemaVersion),bundleSource:ve("string","DocumentSnapshot"),bundleName:ve("string"),bundle:ve("string")};class _r extends Cn{data(e={}){return super.data(e)}}class oi{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Yi(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new _r(this._firestore,this._userDataWriter,i.key,i,new Yi(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new F(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new _r(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Yi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>r||c.type!==3)).map((c=>{const l=new _r(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Yi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return c.type!==0&&(d=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),m=o.indexOf(c.doc.key)),{type:qI(c.type),doc:l,oldIndex:d,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new F(N.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=oi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ef.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],s=[];return this.docs.forEach((r=>{r._document!==null&&(t.push(r._document),i.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),s.push(r.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function qI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W(61501,{type:n})}}/**
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
 */oi._jsonSchemaVersion="firestore/querySnapshot/1.0",oi._jsonSchema={type:ve("string",oi._jsonSchemaVersion),bundleSource:ve("string","QuerySnapshot"),bundleName:ve("string"),bundle:ve("string")};function bn(n,...e){var d,m,y;n=xe(n);let t={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||Md(e[i])||(t=e[i++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Md(e[i])){const w=e[i];e[i]=(d=w.next)==null?void 0:d.bind(w),e[i+1]=(m=w.error)==null?void 0:m.bind(w),e[i+2]=(y=w.complete)==null?void 0:y.bind(w)}let r,o,c;if(n instanceof Ge)o=gr(n.firestore,Ha),c=bc(n._key.path),r={next:w=>{e[i]&&e[i](WI(o,n,w))},error:e[i+1],complete:e[i+2]};else{const w=gr(n,fo);o=gr(w.firestore,Ha),c=w._query;const C=new Tp(o);r={next:P=>{e[i]&&e[i](new oi(o,C,w,P))},error:e[i+1],complete:e[i+2]},zI(n._query)}const l=VI(o);return DI(l,c,s,r)}function WI(n,e,t){const i=t.docs.get(e._key),s=new Tp(n);return new Cn(n,s,e._key,i,new Yi(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){U_(Un),Pn(new nn("firestore",((i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),c=new Ha(new B_(i.getProvider("auth-internal")),new q_(o,i.getProvider("app-check-internal")),hb(o,s),o);return r={useFetchStreams:t,...r},c._setSettings(r),c}),"PUBLIC").setMultipleInstances(!0)),ht($d,Od,e),ht($d,Od,"esm2020")})();const Tn=MI(dc);let It=[];function GI(n){if(Ep(),!n)return;const e=t=>t.docs.map(i=>({id:i.id,...i.data()}));It.push(bn(_n(Tn,`households/${n}/inventory`),t=>{var i,s;h.inv=e(t),fe("synced"),(i=V.renderAll)==null||i.call(V),(s=V.renderSum)==null||s.call(V)},t=>{console.warn("realtime inv error:",t),fe("error")})),It.push(bn(_n(Tn,`households/${n}/shopping`),t=>{var i,s;h.shop=e(t),fe("synced"),(i=V.renderShop)==null||i.call(V),(s=V.renderSum)==null||s.call(V)},t=>{console.warn("realtime shop error:",t),fe("error")})),It.push(bn(_n(Tn,`households/${n}/recipes`),t=>{var i,s;h.recs=e(t),fe("synced"),(i=V.renderRecs)==null||i.call(V),(s=V.renderSum)==null||s.call(V)},t=>{console.warn("realtime recs error:",t),fe("error")})),It.push(bn(_n(Tn,`households/${n}/mealplan`),t=>{const i={};e(t).forEach(s=>{s.date&&s.meal&&(i[s.date]=s.meal)}),h.mp=i,fe("synced")},t=>{console.warn("realtime mp error:",t)})),It.push(bn(_n(Tn,`households/${n}/settings`),t=>{const i=e(t).find(s=>s.id==="config");i&&(h.cfg={...Er,...i})},t=>{console.warn("realtime settings error:",t)})),It.push(bn(_n(Tn,`households/${n}/cooklog`),t=>{h.cookLog=e(t).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},t=>{console.warn("realtime cooklog error:",t)})),It.push(bn(_n(Tn,`households/${n}/wastelog`),t=>{h.wasteLog=e(t).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},t=>{console.warn("realtime wastelog error:",t)})),fe("synced"),console.log("[realtime] Listeners started for household:",n)}function Ep(){It.forEach(n=>{try{n()}catch{}}),It=[],console.log("[realtime] All listeners stopped")}function Vc(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(h.cfg.adults||"Bora").split(",")[0].trim(),i=p("grt");i&&(i.innerHTML=`${e}, <span>${t}</span>`);const s=p("hdt");s&&(s.textContent=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})),Bn()}function Uc(){Sp(),br==null||br()}let br=null;function KI(n){br=n}function Sp(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(h.cfg.adults||"Bora").split(",")[0].trim(),i=p("grt");i&&!i.innerHTML&&(i.innerHTML=`${e}, <span>${t}</span>`),Bn(),Ps(),JI(),YI(),Ii(),eE(),Ap()}function Ii(){const n=Gt(),e=h.mp[n],t=p("tnd"),i=p("tna"),s=p("tonight-main");s&&(s.onclick=function(){window.openMealM(n,"Today")}),e?(t&&(t.innerHTML=e),i&&(i.innerHTML=`<button class="btn bsm bp" onclick="event.stopPropagation();openCooked('${n}')">✓ Cooked</button><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${n}','Today')">Edit</button>`)):(t&&(t.innerHTML='<span style="font-size:.9rem;color:var(--mt);font-style:italic">No meal planned yet</span>'),i&&(i.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${n}','Today')">+ Plan dinner</button><button class="btn bsm bs" onclick="event.stopPropagation();showScreen('chat')">Ask Claude →</button>`))}function Bn(){const n=["S","M","T","W","T","F","S"],e=new Date;e.setHours(0,0,0,0);const t=p("wgrd");t&&(t.innerHTML=wi().map((i,s)=>{const r=i.toISOString().split("T")[0],o=i.getTime()===e.getTime(),c=h.mp[r];return`<div class="wd${o?" today":""}${c?" hm":""}" onclick="openMealM('${r}','${n[s]} ${i.getDate()}')"><div class="wdn">${n[s]}</div><div class="wdd">${i.getDate()}</div>${c?`<div class="wdm">${c.substring(0,10)}${c.length>10?"…":""}</div>`:""}</div>`}).join(""),QI())}function QI(){const n=p("variety-nudge");if(!n)return;const e=wi().map(o=>h.mp[o.toISOString().split("T")[0]]).filter(Boolean);if(e.length<3){n.style.display="none";return}const t=e.some(o=>/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(o)),i=e.some(o=>/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner/i.test(o)),s={};e.forEach(o=>{const c=o.toLowerCase();s[c]=(s[c]||0)+1});const r=Object.entries(s).find(([,o])=>o>=3);r?(n.style.display="block",n.innerHTML="🔄 <strong>"+r[0]+"</strong> is planned "+r[1]+"× this week — maybe try something different?"):!t&&!i?(n.style.display="block",n.innerHTML="🌍 No Bangladeshi or Turkish dishes this week yet — ask Claude for ideas!"):t?i?n.style.display="none":(n.style.display="block",n.innerHTML="🇹🇷 No Turkish dishes this week — köfte or mercimek çorbası would be great!"):(n.style.display="block",n.innerHTML="🇧🇩 No Bangladeshi dishes this week — how about a dal or fish curry?")}function Ps(){const n=h.inv.filter(c=>{const l=nt(c.expiry);return l&&(l.c==="expiring"||l.c==="expired")}).length,e=h.shop.filter(c=>!c.checked).length,t=p("home-exp-val"),i=p("home-exp-sub");t&&(n>0?(t.textContent=n+" item"+(n>1?"s":""),t.className="tc-val",t.style.color="var(--am)"):(t.textContent="All fresh!",t.className="tc-val tc-green")),i&&(i.textContent=n>0?"expiring soon":"Nothing in next 3 days");const s=p("home-shop-val"),r=p("home-shop-sub");s&&(s.textContent=e),r&&(r.textContent=e===1?"item to buy":e===0?"all stocked up":"items to buy");const o=p("sgrd");o&&(o.innerHTML=`<div class="sc" onclick="showScreen('inventory')"><div class="sci">🧺</div><div class="scv">${h.inv.length}</div><div class="scl">Items in stock</div></div><div class="sc${n>0?" warn":""}" onclick="showScreen('inventory')"><div class="sci">⏱</div><div class="scv">${n}</div><div class="scl">Expiring soon</div></div><div class="sc" onclick="showScreen('shopping')"><div class="sci">🛒</div><div class="scv">${e}</div><div class="scl">To buy</div></div><div class="sc" onclick="showScreen('recipes')"><div class="sci">📖</div><div class="scv">${h.recs.length}</div><div class="scl">Saved recipes</div></div>`)}function JI(){const n=h.inv.filter(i=>{const s=nt(i.expiry);return s&&(s.c==="expiring"||s.c==="expired")}).sort((i,s)=>new Date(i.expiry)-new Date(s.expiry)),e=p("exslbl"),t=p("expl");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(i=>{const s=nt(i.expiry);return`<div class="exi${s.c==="expired"?" exp":""}" onclick="openAdj('${i.id}')"><div class="exn">${i.name}</div><div class="exd">${s.l}</div></div>`}).join("")}}function YI(){const n=h.inv.filter(i=>i.qty<=(i.lowStockThreshold||1)).sort((i,s)=>i.qty-s.qty),e=p("lowstocklbl"),t=p("lowstocklist");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(i=>`<div class="exi" style="border-color:var(--am)">
    <div style="display:flex;align-items:center;gap:10px;flex:1;cursor:pointer" onclick="openAdj('${i.id}')">
      <div class="exn">${i.name}</div>
      <div style="font-size:.74rem;color:var(--am);font-weight:600">${i.qty} ${i.unit}</div>
    </div>
    <button class="btn bsm bs" style="flex-shrink:0;font-size:.72rem" onclick="event.stopPropagation();addLowToShop('${i.id}')">🛒 Add to list</button>
  </div>`).join(""),ZI(n.length)}}async function XI(n){const e=h.inv.find(i=>i.id===n);if(!e)return;if(h.shop.find(i=>i.name.toLowerCase()===e.name.toLowerCase()&&!i.checked)){R(`${e.name} is already on your list`);return}await ke({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"low-stock"}),R(`${e.name} added to shopping list 🛒`)}function ZI(n){const e=p("nav-inventory");if(!e)return;const t=e.querySelector(".nav-badge");if(t&&t.remove(),n>0){const i=document.createElement("span");i.className="nav-badge",i.textContent=n,i.style.cssText="position:absolute;top:4px;right:calc(50% - 18px);background:var(--am);color:#0c0c0a;font-size:.58rem;font-weight:700;min-width:16px;height:16px;border-radius:8px;display:flex;align-items:center;justify-content:center;padding:0 4px",e.appendChild(i)}}async function eE(){const n=p("activityfeed"),e=p("activitylbl");if(!n)return;const t=await A_();if(!t.length){e&&(e.style.display="none"),n.innerHTML="";return}e&&(e.style.display="flex");const i=s=>{const r=Date.now()-new Date(s).getTime(),o=Math.floor(r/6e4);if(o<1)return"just now";if(o<60)return o+"m ago";const c=Math.floor(o/60);if(c<24)return c+"h ago";const l=Math.floor(c/24);return l===1?"yesterday":l+"d ago"};n.innerHTML=t.slice(0,3).map(s=>`<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--b1)">
      <div style="width:28px;height:28px;border-radius:50%;background:var(--acd);display:flex;align-items:center;justify-content:center;font-size:.7rem;flex-shrink:0;color:var(--ac);font-weight:700">${(s.memberName||"?")[0].toUpperCase()}</div>
      <div style="flex:1;font-size:.82rem;color:var(--tx2);line-height:1.4"><strong style="color:var(--tx)">${(s.memberName||"Someone").replace(/</g,"&lt;")}</strong> ${(s.action||"").replace(/</g,"&lt;")} <strong>${(s.itemName||"").replace(/</g,"&lt;")}</strong></div>
      <div style="font-size:.68rem;color:var(--mt);flex-shrink:0">${i(s.timestamp)}</div>
    </div>`).join("")}function Ap(){const n=["fridge","freezer","pantry"].map(t=>{const i=h.inv.filter(s=>s.location===t);return i.length?eo(t).toUpperCase()+`
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
 */const kp="firebasestorage.googleapis.com",Cp="storageBucket",tE=120*1e3,nE=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he extends wt{constructor(e,t,i=0){super(oa(e),`Firebase Storage: ${t} (${oa(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,he.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return oa(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var de;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(de||(de={}));function oa(n){return"storage/"+n}function Fc(){const n="An unknown error occurred, please check the error payload for server response.";return new he(de.UNKNOWN,n)}function iE(n){return new he(de.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function sE(n){return new he(de.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function rE(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new he(de.UNAUTHENTICATED,n)}function oE(){return new he(de.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function aE(n){return new he(de.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function cE(){return new he(de.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function lE(){return new he(de.CANCELED,"User canceled the upload/download.")}function uE(n){return new he(de.INVALID_URL,"Invalid URL '"+n+"'.")}function dE(n){return new he(de.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function hE(){return new he(de.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Cp+"' property when initializing the app?")}function fE(){return new he(de.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function pE(){return new he(de.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function mE(n){return new he(de.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function qa(n){return new he(de.INVALID_ARGUMENT,n)}function Rp(){return new he(de.APP_DELETED,"The Firebase app was deleted.")}function gE(n){return new he(de.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function cs(n,e){return new he(de.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Bi(n){throw new he(de.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=Ke.makeFromUrl(e,t)}catch{return new Ke(e,"")}if(i.path==="")return i;throw dE(e)}static makeFromUrl(e,t){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(U){U.path.charAt(U.path.length-1)==="/"&&(U.path_=U.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function d(U){U.path_=decodeURIComponent(U.path)}const m="v[A-Za-z0-9_]+",y=t.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",C=new RegExp(`^https?://${y}/${m}/b/${s}/o${w}`,"i"),P={bucket:1,path:3},$=t===kp?"(?:storage.googleapis.com|storage.cloud.google.com)":t,L="([^?#]*)",B=new RegExp(`^https?://${$}/${s}/${L}`,"i"),M=[{regex:c,indices:l,postModify:r},{regex:C,indices:P,postModify:d},{regex:B,indices:{bucket:1,path:2},postModify:d}];for(let U=0;U<M.length;U++){const Q=M[U],X=Q.regex.exec(e);if(X){const T=X[Q.indices.bucket];let v=X[Q.indices.path];v||(v=""),i=new Ke(T,v),Q.postModify(i);break}}if(i==null)throw uE(e);return i}}class yE{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(n,e,t){let i=1,s=null,r=null,o=!1,c=0;function l(){return c===2}let d=!1;function m(...L){d||(d=!0,e.apply(null,L))}function y(L){s=setTimeout(()=>{s=null,n(C,l())},L)}function w(){r&&clearTimeout(r)}function C(L,...B){if(d){w();return}if(L){w(),m.call(null,L,...B);return}if(l()||o){w(),m.call(null,L,...B);return}i<64&&(i*=2);let M;c===1?(c=2,M=0):M=(i+Math.random())*1e3,y(M)}let P=!1;function $(L){P||(P=!0,w(),!d&&(s!==null?(L||(c=2),clearTimeout(s),y(0)):L||(c=1)))}return y(0),r=setTimeout(()=>{o=!0,$(!0)},t),$}function wE(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(n){return n!==void 0}function bE(n){return typeof n=="object"&&!Array.isArray(n)}function jc(n){return typeof n=="string"||n instanceof String}function Vd(n){return Bc()&&n instanceof Blob}function Bc(){return typeof Blob<"u"}function Ud(n,e,t,i){if(i<e)throw qa(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw qa(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function xp(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const s=e(i)+"="+e(n[i]);t=t+s+"&"}return t=t.slice(0,-1),t}var Rn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Rn||(Rn={}));/**
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
 */function TE(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e,t,i,s,r,o,c,l,d,m,y,w=!0,C=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=m,this.connectionFactory_=y,this.retry=w,this.isUsingEmulator=C,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((P,$)=>{this.resolve_=P,this.reject_=$,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new tr(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=c=>{const l=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const c=r.getErrorCode()===Rn.NO_ERROR,l=r.getStatus();if(!c||TE(l,this.additionalRetryCodes_)&&this.retry){const m=r.getErrorCode()===Rn.ABORT;i(!1,new tr(!1,null,m));return}const d=this.successCodes_.indexOf(l)!==-1;i(!0,new tr(d,r))})},t=(i,s)=>{const r=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());_E(l)?r(l):r()}catch(l){o(l)}else if(c!==null){const l=Fc();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Rp():lE();o(l)}else{const l=cE();o(l)}};this.canceled_?t(!1,new tr(!1,null,!0)):this.backoffId_=vE(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&wE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class tr{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function EE(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function SE(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function AE(n,e){e&&(n["X-Firebase-GMPID"]=e)}function kE(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function CE(n,e,t,i,s,r,o=!0,c=!1){const l=xp(n.urlParams),d=n.url+l,m=Object.assign({},n.headers);return AE(m,e),EE(m,t),SE(m,r),kE(m,i),new IE(d,n.method,m,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function xE(...n){const e=RE();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(Bc())return new Blob(n);throw new he(de.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function PE(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function LE(n){if(typeof atob>"u")throw mE("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class aa{constructor(e,t){this.data=e,this.contentType=t||null}}function DE(n,e){switch(n){case dt.RAW:return new aa(Pp(e));case dt.BASE64:case dt.BASE64URL:return new aa(Lp(n,e));case dt.DATA_URL:return new aa($E(e),OE(e))}throw Fc()}function Pp(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const r=i,o=n.charCodeAt(++t);i=65536|(r&1023)<<10|o&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function NE(n){let e;try{e=decodeURIComponent(n)}catch{throw cs(dt.DATA_URL,"Malformed data URL.")}return Pp(e)}function Lp(n,e){switch(n){case dt.BASE64:{const s=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(s||r)throw cs(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case dt.BASE64URL:{const s=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(s||r)throw cs(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=LE(e)}catch(s){throw s.message.includes("polyfill")?s:cs(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}class Dp{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw cs(dt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=ME(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function $E(n){const e=new Dp(n);return e.base64?Lp(dt.BASE64,e.rest):NE(e.rest)}function OE(n){return new Dp(n).contentType}function ME(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t){let i=0,s="";Vd(e)?(this.data_=e,i=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Vd(this.data_)){const i=this.data_,s=PE(i,e,t);return s===null?null:new qt(s)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new qt(i,!0)}}static getBlob(...e){if(Bc()){const t=e.map(i=>i instanceof qt?i.data_:i);return new qt(xE.apply(null,t))}else{const t=e.map(o=>jc(o)?DE(dt.RAW,o).data:o.data_);let i=0;t.forEach(o=>{i+=o.byteLength});const s=new Uint8Array(i);let r=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)s[r++]=o[c]}),new qt(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(n){let e;try{e=JSON.parse(n)}catch{return null}return bE(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function UE(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function $p(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(n,e){return e}class Ve{constructor(e,t,i,s){this.server=e,this.local=t||e,this.writable=!!i,this.xform=s||FE}}let nr=null;function jE(n){return!jc(n)||n.length<2?n:$p(n)}function Op(){if(nr)return nr;const n=[];n.push(new Ve("bucket")),n.push(new Ve("generation")),n.push(new Ve("metageneration")),n.push(new Ve("name","fullPath",!0));function e(r,o){return jE(o)}const t=new Ve("name");t.xform=e,n.push(t);function i(r,o){return o!==void 0?Number(o):o}const s=new Ve("size");return s.xform=i,n.push(s),n.push(new Ve("timeCreated")),n.push(new Ve("updated")),n.push(new Ve("md5Hash",null,!0)),n.push(new Ve("cacheControl",null,!0)),n.push(new Ve("contentDisposition",null,!0)),n.push(new Ve("contentEncoding",null,!0)),n.push(new Ve("contentLanguage",null,!0)),n.push(new Ve("contentType",null,!0)),n.push(new Ve("metadata","customMetadata",!0)),nr=n,nr}function BE(n,e){function t(){const i=n.bucket,s=n.fullPath,r=new Ke(i,s);return e._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:t})}function HE(n,e,t){const i={};i.type="file";const s=t.length;for(let r=0;r<s;r++){const o=t[r];i[o.local]=o.xform(i,e[o.server])}return BE(i,n),i}function Mp(n,e,t){const i=Np(e);return i===null?null:HE(n,i,t)}function zE(n,e,t,i){const s=Np(e);if(s===null||!jc(s.downloadTokens))return null;const r=s.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(d=>{const m=n.bucket,y=n.fullPath,w="/b/"+o(m)+"/o/"+o(y),C=Hc(w,t,i),P=xp({alt:"media",token:d});return C+P})[0]}function qE(n,e){const t={},i=e.length;for(let s=0;s<i;s++){const r=e[s];r.writable&&(t[r.server]=n[r.local])}return JSON.stringify(t)}class Vp{constructor(e,t,i,s){this.url=e,this.method=t,this.handler=i,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(n){if(!n)throw Fc()}function WE(n,e){function t(i,s){const r=Mp(n,s,e);return Up(r!==null),r}return t}function GE(n,e){function t(i,s){const r=Mp(n,s,e);return Up(r!==null),zE(r,s,n.host,n._protocol)}return t}function Fp(n){function e(t,i){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=oE():s=rE():t.getStatus()===402?s=sE(n.bucket):t.getStatus()===403?s=aE(n.path):s=i,s.status=t.getStatus(),s.serverResponse=i.serverResponse,s}return e}function KE(n){const e=Fp(n);function t(i,s){let r=e(i,s);return i.getStatus()===404&&(r=iE(n.path)),r.serverResponse=s.serverResponse,r}return t}function QE(n,e,t){const i=e.fullServerUrl(),s=Hc(i,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,c=new Vp(s,r,GE(n,t),o);return c.errorHandler=KE(e),c}function JE(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function YE(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=JE(null,e)),i}function XE(n,e,t,i,s){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let M="";for(let U=0;U<2;U++)M=M+Math.random().toString().slice(2);return M}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const d=YE(e,i,s),m=qE(d,t),y="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+l+`\r
Content-Type: `+d.contentType+`\r
\r
`,w=`\r
--`+l+"--",C=qt.getBlob(y,i,w);if(C===null)throw fE();const P={name:d.fullPath},$=Hc(r,n.host,n._protocol),L="POST",B=n.maxUploadRetryTime,G=new Vp($,L,WE(n,t),B);return G.urlParams=P,G.headers=o,G.body=C.uploadData(),G.errorHandler=Fp(e),G}class ZE{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Rn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Rn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Rn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,s,r){if(this.sent_)throw Bi("cannot .send() more than once");if(dn(e)&&i&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Bi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Bi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Bi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Bi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class e0 extends ZE{initXhr(){this.xhr_.responseType="text"}}function jp(){return new e0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,t){this._service=e,t instanceof Ke?this._location=t:this._location=Ke.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new On(e,t)}get root(){const e=new Ke(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return $p(this._location.path)}get storage(){return this._service}get parent(){const e=VE(this._location.path);if(e===null)return null;const t=new Ke(this._location.bucket,e);return new On(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw gE(e)}}function t0(n,e,t){n._throwIfRoot("uploadBytes");const i=XE(n.storage,n._location,Op(),new qt(e,!0),t);return n.storage.makeRequestWithTokens(i,jp).then(s=>({metadata:s,ref:n}))}function n0(n){n._throwIfRoot("getDownloadURL");const e=QE(n.storage,n._location,Op());return n.storage.makeRequestWithTokens(e,jp).then(t=>{if(t===null)throw pE();return t})}function i0(n,e){const t=UE(n._location.path,e),i=new Ke(n._location.bucket,t);return new On(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(n){return/^[A-Za-z]+:\/\//.test(n)}function r0(n,e){return new On(n,e)}function Bp(n,e){if(n instanceof zc){const t=n;if(t._bucket==null)throw hE();const i=new On(t,t._bucket);return e!=null?Bp(i,e):i}else return e!==void 0?i0(n,e):n}function o0(n,e){if(e&&s0(e)){if(n instanceof zc)return r0(n,e);throw qa("To use ref(service, url), the first argument must be a Storage instance.")}else return Bp(n,e)}function Fd(n,e){const t=e==null?void 0:e[Cp];return t==null?null:Ke.makeFromBucketSpec(t,n)}function a0(n,e,t,i={}){n.host=`${e}:${t}`;const s=dn(e);s&&(Ja(`https://${n.host}/b`),Ya("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:r}=i;r&&(n._overrideAuthToken=typeof r=="string"?r:mh(r,n.app.options.projectId))}class zc{constructor(e,t,i,s,r,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._isUsingEmulator=o,this._bucket=null,this._host=kp,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=tE,this._maxUploadRetryTime=nE,this._requests=new Set,s!=null?this._bucket=Ke.makeFromBucketSpec(s,this._host):this._bucket=Fd(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ke.makeFromBucketSpec(this._url,e):this._bucket=Fd(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ud("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ud("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Ue(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new On(this,e)}_makeRequest(e,t,i,s,r=!0){if(this._deleted)return new yE(Rp());{const o=CE(e,this._appId,i,s,t,this._firebaseVersion,r,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,s).getPromise()}}const jd="@firebase/storage",Bd="0.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp="storage";function c0(n,e,t){return n=xe(n),t0(n,e,t)}function l0(n){return n=xe(n),n0(n)}function u0(n,e){return n=xe(n),o0(n,e)}function d0(n=ec(),e){n=xe(n);const i=Wr(n,Hp).getImmediate({identifier:e}),s=hh("storage");return s&&h0(i,...s),i}function h0(n,e,t,i={}){a0(n,e,t,i)}function f0(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new zc(t,i,s,e,Un)}function p0(){Pn(new nn(Hp,f0,"PUBLIC").setMultipleInstances(!0)),ht(jd,Bd,""),ht(jd,Bd,"esm2020")}p0();const m0=d0(dc);function ze(n){return(n||"").trim().toLowerCase().replace(/\s+/g,"_").replace(/[^a-z0-9_]/g,"")}function g0(n){return new Promise((e,t)=>{const i=new Image,s=new FileReader;s.onload=r=>{i.onload=()=>{let c=i.width,l=i.height;if(c>400||l>400){const P=Math.min(400/c,400/l);c=Math.round(c*P),l=Math.round(l*P)}const d=document.createElement("canvas");d.width=c,d.height=l,d.getContext("2d").drawImage(i,0,0,c,l);const y=150*1024;let w=.8;const C=()=>{d.toBlob(P=>{if(!P)return t(new Error("Canvas compression failed"));P.size<=y||w<=.3?e(P):(w-=.1,C())},"image/jpeg",w)};C()},i.onerror=()=>t(new Error("Failed to load image")),i.src=r.target.result},s.onerror=()=>t(new Error("Failed to read file")),s.readAsDataURL(n)})}async function po(n,e){var c;if(!h.hid)throw new Error("No household ID — cannot upload");if(!n)throw new Error("No file provided");const t=ze(e);if(!t)throw new Error("Invalid product name for upload");let i;try{i=await g0(n),console.log(`[uploadProductImage] Compressed: ${(i.size/1024).toFixed(1)}KB, type=${i.type}`)}catch(l){throw console.error("[uploadProductImage] Compression failed:",l),new Error("Image compression failed — "+l.message)}const s=`households/${h.hid}/customProducts/${t}.jpg`,r=u0(m0,s);try{console.log(`[uploadProductImage] Uploading to: ${s}`),await c0(r,i,{contentType:"image/jpeg"}),console.log("[uploadProductImage] Upload succeeded")}catch(l){throw console.error("[uploadProductImage] Storage upload failed:",l.code,l.message),new Error("Storage upload failed — "+(l.code||l.message))}let o;try{o=await l0(r),console.log("[uploadProductImage] Download URL obtained")}catch(l){throw console.error("[uploadProductImage] getDownloadURL failed:",l.code,l.message),new Error("Could not get download URL — "+(l.code||l.message))}try{const l=se();await z(`households/${h.hid}/customProducts/${t}`,{name:e.trim(),imageUrl:o,imageDismissed:!1,updatedAt:new Date().toISOString(),updatedBy:(l==null?void 0:l.displayName)||((c=l==null?void 0:l.email)==null?void 0:c.split("@")[0])||"Unknown"}),console.log(`[uploadProductImage] Saved to customProducts collection: ${t}`)}catch(l){console.error("[uploadProductImage] Firestore save failed:",l)}return o}let Qe=null,ca=!1,Hi="",la=!1;function y0(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=p("shopAddMicOpt");e&&(e.style.display="")}function Hd(n){const e=p("micstatus");e&&e.classList.toggle("visible",n)}function zp(){if(ca&&Qe){la=!0,Qe.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){R("Voice input not supported");return}Qe=new n,Qe.lang="en-US",Qe.interimResults=!0,Qe.maxAlternatives=1,Qe.continuous=!1,Hi="",ca=!0,Hd(!0),Qe.onresult=e=>{let t="";for(let s=e.resultIndex;s<e.results.length;s++){const r=e.results[s][0].transcript;e.results[s].isFinal?Hi+=r:t+=r}const i=p("shi");i&&(i.value=(Hi+t).trim())},Qe.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&R("Couldn't hear that — try again")},Qe.onend=()=>{let e=(Hi||"").trim();if(!e&&la){const t=p("shi");e=t?t.value.trim():""}if(ca=!1,Qe=null,Hi="",la=!1,Hd(!1),e){let t=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||1):s&&(t=s[2].trim(),i=parseInt(s[1],10)||1);const o={id:Date.now().toString(),name:t,qty:i,checked:!1,src:"manual"};ke(o),R(`Added "${e}" 🎤`);const c=p("shi");c&&(c.value=""),mo(o.id,t,"shop")}},Qe.start()}function qp(n){return n?n.replace(/\S+/g,e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()):""}function Wp(n){if(!n.brand)return!1;if(n.src==="scan")return!0;if(n.src==="search"&&n.searchQuery){const e=n.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),t=n.brand.toLowerCase();return e.some(i=>t.includes(i))}return!1}function ir(n){const e=n.qty||1,t=`<span class="sh-qty${e===1?" sh-qty-one":""}" onclick="event.stopPropagation();openShQty('${n.id}')"> × ${e}</span>`,i=n.image?`<img src="${n.image}" class="sh-thumb" alt="" onerror="this.style.display='none'"/>`:"";return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="shop">
    <div class="swipe-inner">
      <!-- Main row: swipeRowTap handles multi-select; checkbox toggles checked; content area opens detail -->
      <div class="shit${n.checked?" chk":""}" onclick="swipeRowTap('${n.id}','shop')">
        <div class="sel-cb">✓</div>           <!-- Multi-select checkbox (hidden unless selectMode is active) -->
        <div class="shck" onclick="event.stopPropagation();togShop('${n.id}')">${n.checked?"✓":""}</div>  <!-- Slim ring: tap to mark as bought; hidden in select mode (replaced by sel-cb) -->
        ${i}                               <!-- Product thumbnail from barcode scan (if available) -->
        <div style="flex:1;min-width:0;cursor:pointer" onclick="openItemDetail('${n.id}')">
          <div class="shnm">${qp(n.name)}${t}</div>
          ${Wp(n)?`<div class="sh-brand">${n.brand}</div>`:""}  <!-- Brand shown for barcode scans always; for text search only if the user's query matches the brand name -->
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
  </div>`}function Ei(){const n=(o,c)=>o.name.localeCompare(c.name),e=p("shlist"),t=h.shop.filter(o=>!o.checked).sort(n),i=h.shop.filter(o=>o.checked).sort(n),s=p("clrchk");s&&(s.style.display=i.length?"block":"none");const r=p("shsub");if(r&&(r.textContent=t.length+" items to buy"),!!e){if(!h.shop.length){e.innerHTML='<div class="es"><div class="ei">🛒</div><p>Your list is empty!<br/>Add items or use "Build from meal plan".</p></div>';return}if(h.aisleMode&&t.length){const o={};t.forEach(c=>{const l=V_(c.name);o[l]||(o[l]=[]),o[l].push(c)}),e.innerHTML=Object.entries(o).sort().map(([c,l])=>`<div class="shsec">${c}</div>${l.map(ir).join("")}`).join("")+(i.length?`<div class="shsec">Done</div>${i.map(ir).join("")}`:"")}else e.innerHTML=(t.length?`<div class="shsec">To buy (${t.length})</div>${t.map(ir).join("")}`:"")+(i.length?`<div class="shsec">Done</div>${i.map(ir).join("")}`:"");if(h.selectMode==="shop"){document.querySelectorAll("#shlist .swipe-wrap").forEach(c=>{c.classList.add("selecting"),h.selectedIds.has(c.dataset.id)&&c.classList.add("selected")});const o=document.querySelector(".shbody");o&&(o.style.paddingLeft="52px")}L0()}}function v0(){const n=p("shi"),e=n.value.trim();if(!e)return;if(gt&&gt.length===1){Qp(0);return}let t=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||1):s&&(t=s[2].trim(),i=parseInt(s[1],10)||1);const o=p("addNoteInp"),c=o?o.value.trim():"",l={id:Date.now().toString(),name:t,qty:i,checked:!1,src:"manual"};c&&(l.note=c),ke(l),n.value="",o&&(o.value="");const d=p("addNoteWrap");d&&(d.style.display="none"),Wc(),Ls()}function w0(){const n=p("addNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=p("addNoteInp");t&&t.focus()}}function _0(){const n=p("shopAddBackdrop"),e=p("shopAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),setTimeout(()=>{const t=p("shi");t&&(t.value="",t.focus())},150)}function Ls(){const n=p("shopAddBackdrop"),e=p("shopAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),Wc()}function b0(){Ls(),window.openScanForList&&window.openScanForList()}function T0(){Ls(),zp()}let ls=null,gt=null;const zi=new Map,I0=300*1e3,E0=30;function S0(){ls&&clearTimeout(ls);const n=p("shi"),e=n?n.value.trim():"",t=p("shopSearchDropdown");if(!e||e.length<2){t&&(t.classList.remove("active"),t.innerHTML=""),gt=null;return}ls=setTimeout(()=>P0(e),350)}const A0=new Set(["salad","soup","stew","casserole","dish","recipe","curry","pie","sandwich","wrap","risotto","gratin","puree","smoothie","juice","namasu","pickled","marinated","braised","sauteed","sautéed","coleslaw","gazpacho","chutney","relish","compote","ragout","ratatouille","succotash","bruschetta","ceviche","tartare"]),k0=["made with","and vegetable","and rice","and noodle","and cheese","cooked in","served with","topped with","stuffed with","mixed with","tossed with","dressed with"];function C0(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(t===i)return!1;for(const o of k0)if(t.includes(o)&&!i.includes(o))return!0;const s=new Set(i.split(/\s+/)),r=t.split(/[\s,&+\-–—/()[\]]+/).filter(o=>o.length>=2);for(const o of r)if(A0.has(o)&&!s.has(o))return!0;return!1}const Gp=new Set(["a","an","the","and","or","with","for","of","in","to","by","is","it","at","on","no","not","all","each","per","from","free","style","natural","original","premium","organic","fresh","whole","pure","real","lite","light","low","high","extra","reduced","fat","nonfat","skim","raw","roasted","unsweetened","sweetened","flavored","smoked","dried","frozen","canned","pack","ct","oz","lb","ml","kg","fl","count","size","gallon","quart","pint","liter","bag","box","can","jar","bottle","container","pouch","tub","carton","plain","creamy","chunky","crispy","crunchy","spicy","mild","hot","cold","classic","homestyle","traditional","artisan","greek","italian","mexican","asian","indian","mini","small","medium","large","jumbo","giant","big","handheld","electric","portable","automatic","manual","new","best","top","value","brand"]);function zd(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(t===i||t.startsWith(i+" "))return!0;const s=i.split(/\s+/).filter(c=>c.length>=2),r=t.split(/[\s,&+\-–—/()[\]]+/).filter(c=>c.length>=2&&!Gp.has(c)&&!/^\d+$/.test(c));if(r.length<=2)return!0;let o=0;for(const c of r)s.some(d=>{if(c.startsWith(d)||d.startsWith(c))return!0;const m=Math.min(c.length,d.length,3);return m>=3&&c.slice(0,m)===d.slice(0,m)})&&o++;return o/r.length>=.5}function Kp(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(C0(n,e))return 0;if(t===i)return 100;if(t.startsWith(i+" ")||t.startsWith(i))return 95;const r=t.split(/[\s,&+\-–—/]+/).filter(o=>o.length>=2).filter(o=>!Gp.has(o)&&!/^\d+$/.test(o));if(r.length&&(r[0].startsWith(i)||i.startsWith(r[0]))){const o=r.filter(l=>!l.startsWith(i)&&!i.startsWith(l)).length,c=85-Math.min(o*8,30);return zd(n,e)?c:0}for(let o=1;o<Math.min(3,r.length);o++)if(r[o].startsWith(i)||i.startsWith(r[o])){const c=r.filter(d=>!d.startsWith(i)&&!i.startsWith(d)).length,l=60-o*10-Math.min(c*8,20);return zd(n,e)?Math.max(l,5):0}return 0}async function qc(n){const e=n.toLowerCase(),t=zi.get(e);if(t&&Date.now()-t.ts<I0)return t.scored;const i=h.hid?`&hid=${encodeURIComponent(h.hid)}`:"";console.log(`[ShopSearch] Fetching /api/text-search?q=${encodeURIComponent(n)}${i}`);const r=await(await fetch(`/api/text-search?q=${encodeURIComponent(n)}${i}`)).json();r.imageDismissed&&console.log(`[ShopSearch] imageDismissed for "${n}" — stripping images from results`);let o=r.results||[];const c=n.toLowerCase().split(/\s+/).filter(d=>d.length>=2);o=o.filter(d=>{const m=(d.name||"").toLowerCase();return c.some(y=>m.includes(y))});const l=o.map(d=>({...d,_score:Kp(d.name||"",n)})).filter(d=>d._score>=20).sort((d,m)=>m._score-d._score).slice(0,5);if(zi.set(e,{scored:l,ts:Date.now()}),zi.size>E0){const d=zi.keys().next().value;zi.delete(d)}return l}function R0(n){if(!n)return"NONE";const e=n.toLowerCase();return e.includes("kroger.com")?"Kroger (real product)":e.includes("img.spoonacular.com/products")?"Spoonacular product (real photo)":e.includes("img.spoonacular.com/ingredients")?"Spoonacular ingredient (illustration)":e.includes("openfoodfacts.org")?"Open Food Facts (real photo)":e.includes("edamam")?"Edamam":"Other: "+new URL(n).hostname}function qd(n){const e=p("shopSearchDropdown");!e||!n.length||(gt=n,n.forEach((t,i)=>{const s=R0(t.image);console.log(`[ShopDropdown] #${i} "${t.name}" → image: ${s} | url: ${t.image||"(none)"} | score: ${t._score}`)}),e.innerHTML=n.map((t,i)=>{const s=t.image?`<img src="${t.image}" class="enrich-img" alt="" onerror="this.outerHTML='<div class=\\'enrich-img-ph\\'>🛒</div>'">`:'<div class="enrich-img-ph">🛒</div>',r=t.category&&t.category!=="General"?`<div class="enrich-cat">${t.category}</div>`:"";return`<div class="enrich-row" onclick="pickInlineResult(${i})">
      ${s}
      <div class="enrich-text">
        <div class="enrich-name">${t.name}</div>
        ${r}
      </div>
    </div>`}).join(""),e.classList.add("active"))}async function x0(n){if(!h.hid||!n)return null;const e=ze(n);if(!e)return null;const t=await ee(`households/${h.hid}/customProducts/${e}`);return!t||t.imageDismissed||!t.imageUrl?null:{name:n.trim().replace(/\b\w/g,s=>s.toUpperCase()),image:t.imageUrl,brand:"",category:t.category||"",source:"customProduct",_score:100}}async function P0(n){const e=p("shopSearchDropdown");if(e){e.innerHTML='<div class="search-hint">Searching…</div>',e.classList.add("active");try{const t=x0(n),i=qc(n),s=await t;s&&(p("shi")?p("shi").value.trim():"").toLowerCase()===n.toLowerCase()&&(console.log(`[ShopSearch] Instant custom product match for "${n}"`),qd([s]));const r=await i;if((p("shi")?p("shi").value.trim():"").toLowerCase()!==n.toLowerCase())return;let c=r;if(s){const l=ze(s.name),d=r.filter(m=>ze(m.name)!==l);c=[s,...d].slice(0,5)}if(!c.length){e.classList.remove("active"),e.innerHTML="",gt=null;return}qd(c)}catch(t){console.warn("Inline search failed:",t),e.classList.remove("active"),e.innerHTML="",gt=null}}}function Qp(n){if(!gt||!gt[n])return;const e=gt[n],t=p("addNoteInp"),i=t?t.value.trim():"",s=p("shi")?p("shi").value.trim():"",r={id:Date.now().toString(),name:e.name,qty:1,checked:!1,src:"search",brand:e.brand||"",image:e.image||null,category:e.category||"",source:e.source||"search",searchQuery:s};i&&(r.note=i),ke(r),R(`Added "${e.name}" ✓`);const o=p("shi");o&&(o.value=""),t&&(t.value="");const c=p("addNoteWrap");c&&(c.style.display="none"),Wc(),Ls()}function Wc(){ls&&clearTimeout(ls),gt=null;const n=p("shopSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}const Wd=new Set;function L0(){const n=h.shop.filter(e=>e.src==="reminders"&&!e.image&&!e.imageDismissed&&!Wd.has(e.id));if(n.length)for(const e of n)Wd.add(e.id),qc(e.name).then(t=>{const i=h.shop.find(s=>s.id===e.id);if(!(!i||i.imageDismissed||i.image))if(t.length&&t[0]._score>=80){const s=t[0],r={...i};s.image&&(r.image=s.image),s.brand&&!i.brand&&(r.brand=s.brand),s.category&&s.category!=="General"&&!i.category&&(r.category=s.category),r.src="reminders",ke(r),console.log(`[RemindersEnrich] Auto-enriched "${e.name}" (score=${s._score}) with ${s.image?"image from "+(s.source||"search"):"metadata only (no image)"}`)}else t.length&&console.log(`[RemindersEnrich] Skipped "${e.name}" — top result "${t[0].name}" scored ${t[0]._score} (need >= 80)`)}).catch(()=>{})}async function mo(n,e,t){if(!e||e.length<2)return;const i=p("enrichResults"),s=p("enrichTitle");if(!i)return;s&&(s.textContent=`Finding "${e}"…`),i.innerHTML='<div class="enrich-loading"><div class="spin" style="width:28px;height:28px;margin:0 auto 8px"></div>Searching products…</div>';const r=p("enrichBackdrop"),o=p("enrichSheet");r&&r.classList.add("active"),o&&o.classList.add("active");try{let c=await qc(e);if(!c.length){jr();return}s&&(s.textContent="Choose a match");let l=c.map((d,m)=>{const y=d.image?`<img src="${d.image}" class="enrich-img" alt="" onerror="this.outerHTML='<div class=\\'enrich-img-ph\\'>🛒</div>'">`:'<div class="enrich-img-ph">🛒</div>',w=d.category&&d.category!=="General"?`<div class="enrich-cat">${d.category}</div>`:"";return`<div class="enrich-row" onclick="pickEnrichResult(${m})">
        ${y}
        <div class="enrich-text">
          <div class="enrich-name">${d.name}</div>
          ${w}
        </div>
      </div>`}).join("");l+=`<button class="enrich-fallback" onclick="closeEnrichSheet()">
      <span style="font-size:1.1rem">📝</span>
      Just add "${e}" as typed
    </button>`,i.innerHTML=l,window._enrichCtx={itemId:n,query:e,list:t,results:c}}catch(c){console.warn("Text search failed:",c),jr()}}function jr(){const n=p("enrichBackdrop"),e=p("enrichSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),window._enrichCtx=null}async function Mn(n){if(h.selectMode)return;event&&event.stopPropagation();const e=h.shop.find(w=>w.id===n);if(!e)return;const t=p("itemDetailContent");if(!t)return;let i=e.image;if(e.imageDismissed,h.hid&&e.name){const w=ze(e.name);if(w){const C=await ee(`households/${h.hid}/customProducts/${w}`);C&&(C.imageDismissed?i=null:C.imageUrl&&(i=C.imageUrl))}}const s=i?`<div class="item-detail-img-wrap drop-zone" data-item-id="${e.id}">
        <img src="${i}" class="item-detail-img" alt="" onerror="this.style.display='none'"/>
        <button class="item-detail-img-del" onclick="deleteItemImage('${e.id}')" title="Remove image">×</button>
      </div>`:`<div class="item-detail-img-ph drop-zone" data-item-id="${e.id}" onclick="triggerProductPhotoUpload('${e.id}')" style="cursor:pointer">
        <div style="text-align:center">
          <div style="font-size:1.3rem;margin-bottom:2px;opacity:.45">📷</div>
          <div style="font-size:.6rem;color:var(--mt);opacity:.7">Add photo</div>
        </div>
      </div>`,r=Wp(e),o=i?`<div class="item-detail-change-photo" onclick="triggerProductPhotoUpload('${e.id}')">Change photo</div>`:"";let c=`<div class="item-detail-header">
    <div>${s}${o}</div>
    <div style="flex:1;min-width:0">
      <div class="item-detail-name">${qp(e.name)}</div>
      ${r?`<div class="item-detail-brand">${e.brand}</div>`:""}
      ${e.checked?'<div style="margin-top:4px"><span class="item-detail-badge" style="background:var(--gnd);color:var(--gn)">✓ Purchased</span></div>':""}
    </div>
  </div>
  <!-- Hidden file input for product photo uploads — triggered by Add/Change photo buttons -->
  <input type="file" id="productPhotoInput" accept="image/*" style="display:none"
    onchange="handleProductPhotoSelected('${e.id}')" />`;const l=e.qty||1;l>1&&(c+=`<div class="item-detail-section">
      <div class="item-detail-label">Quantity</div>
      <div class="item-detail-value">× ${l}</div>
    </div>`),e.note&&(c+=`<div class="item-detail-section">
      <div class="item-detail-label">Note</div>
      <div class="item-detail-value">${e.note}</div>
    </div>`),c+='<button class="btn bs bf" onclick="closeItemDetail()" style="margin-top:8px">Close</button>',t.innerHTML=c;const d=p("itemDetailBackdrop"),m=p("itemDetailSheet");d&&d.classList.add("active"),m&&m.classList.add("active");const y=t.querySelector(".drop-zone");y&&N0(y,e.id)}function D0(){const n=p("itemDetailBackdrop"),e=p("itemDetailSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}function N0(n,e){let t=0;n.addEventListener("dragenter",i=>{i.preventDefault(),i.stopPropagation(),t++,n.classList.add("drop-zone-active")}),n.addEventListener("dragover",i=>{i.preventDefault(),i.stopPropagation()}),n.addEventListener("dragleave",i=>{i.preventDefault(),i.stopPropagation(),t--,t<=0&&(t=0,n.classList.remove("drop-zone-active"))}),n.addEventListener("drop",i=>{i.preventDefault(),i.stopPropagation(),t=0,n.classList.remove("drop-zone-active"),$0(i.dataTransfer,e)})}async function $0(n,e){const t=h.shop.find(c=>c.id===e);if(!t)return;if(n.files&&n.files.length>0){const c=n.files[0];if(c.type&&c.type.startsWith("image/")){await Jp(c,t);return}}const i=n.getData("text/uri-list"),s=n.getData("text/plain"),r=i||s||"";if(r&&/^https?:\/\/.+\.(jpe?g|png|gif|webp|bmp)/i.test(r)){await Gd(r,t);return}const o=n.getData("text/html");if(o){const c=o.match(/<img[^>]+src=["']([^"']+)["']/i);if(c&&c[1]&&/^https?:\/\//.test(c[1])){await Gd(c[1],t);return}}console.warn("[DropZone] Dropped data didn't contain a usable image")}async function Jp(n,e){const t=p("itemDetailContent");if(t){const i=t.querySelector(".item-detail-img-wrap, .item-detail-img-ph");i&&(i.innerHTML=`<div style="text-align:center;padding:16px 0">
        <div style="font-size:1.2rem">⏳</div>
        <div style="font-size:.65rem;color:var(--mt);margin-top:2px">Uploading…</div>
      </div>`)}try{const i=await po(n,e.name),s={...e,image:i,imageDismissed:!1};await ke(s),Yp(e.name,i),R("Photo saved ✓"),Mn(e.id)}catch(i){console.error("[DropZone] Upload failed:",i),R("Upload failed — try again"),Mn(e.id)}}async function Gd(n,e){const t=p("itemDetailContent");if(t){const i=t.querySelector(".item-detail-img-wrap, .item-detail-img-ph");i&&(i.innerHTML=`<div style="text-align:center;padding:16px 0">
        <div style="font-size:1.2rem">⏳</div>
        <div style="font-size:.65rem;color:var(--mt);margin-top:2px">Fetching image…</div>
      </div>`)}try{const i=await fetch(n);if(!i.ok)throw new Error(`HTTP ${i.status}`);const s=await i.blob();if(!s.type||!s.type.startsWith("image/"))throw new Error("Fetched resource is not an image");const r=new File([s],"dropped-image.jpg",{type:s.type});await Jp(r,e)}catch(i){console.warn("[DropZone] Could not fetch dropped image URL:",i),R("Couldn't load that image — try saving it first"),Mn(e.id)}}function Yp(n,e){if(!h.hid||!n)return;const t=ze(n);t&&z(`households/${h.hid}/customProducts/${t}`,{name:n.trim(),imageUrl:e,imageDismissed:!1,updatedAt:new Date().toISOString()}).catch(i=>console.warn("Failed to save custom product image:",i))}async function O0(n){const e=h.shop.find(i=>i.id===n);if(!e)return;const t={...e,image:null,imageDismissed:!0};if(await ke(t),h.hid&&e.name){const i=ze(e.name);i&&z(`households/${h.hid}/customProducts/${i}`,{name:e.name.trim(),imageDismissed:!0,imageUrl:null,updatedAt:new Date().toISOString()}).catch(s=>console.warn("Failed to save imageDismissed to customProducts:",s))}Mn(n)}function M0(n){window._uploadTargetItemId=n;const e=document.getElementById("productPhotoInput");e&&(e.value="",e.click())}async function V0(n){const e=document.getElementById("productPhotoInput");if(!e||!e.files||!e.files[0])return;const t=e.files[0],i=h.shop.find(r=>r.id===n);if(!i)return;const s=p("itemDetailContent");if(s){const r=s.querySelector(".item-detail-img-wrap, .item-detail-img-ph");r&&(r.innerHTML=`<div style="text-align:center;padding:16px 0">
        <div style="font-size:1.2rem">⏳</div>
        <div style="font-size:.65rem;color:var(--mt);margin-top:2px">Uploading…</div>
      </div>`)}try{const r=await po(t,i.name),o={...i,image:r,imageDismissed:!1};await ke(o),Yp(i.name,r),R("Photo saved ✓"),Mn(n)}catch(r){console.error("Product photo upload failed:",r),R("Upload failed — try again"),Mn(n)}}function U0(n){const e=window._enrichCtx;if(!e)return;const t=e.results[n];if(t){if(e.list==="shop"){const i=h.shop.find(s=>s.id===e.itemId);if(i&&(ke({...i,name:t.name,brand:t.brand||"",image:t.image||null,category:t.category||"",source:t.source||"search",imageDismissed:!1}),h.hid&&t.name)){const s=ze(t.name);s&&z(`households/${h.hid}/customProducts/${s}`,{name:t.name.trim(),imageDismissed:!1,updatedAt:new Date().toISOString()}).catch(r=>console.warn("Failed to clear imageDismissed in customProducts:",r))}}else if(e.list==="inv"){const i=h.inv.find(s=>s.id===e.itemId);i&&Te({...i,name:t.name,brand:t.brand||"",image:t.image||null,category:t.category||i.category,source:t.source||"search",imageDismissed:!1})}jr(),R(`Updated with "${t.name}" ✓`)}}function Xp(n){if(!h.hid||!n)return;const e=Date.now().toString(36)+Math.random().toString(36).slice(2,6);z(`households/${h.hid}/completed_items/${e}`,{name:n,completedAt:new Date().toISOString()}).catch(t=>console.warn("recordCompleted error:",t))}function F0(n){const e=h.shop.find(i=>i.id===n);if(!e)return;const t=!e.checked;ke({...e,checked:t}),t&&Xp(e.name)}function j0(n,e){n.stopPropagation();const t=p("sne-"+e),i=p("sni-"+e);if(!t)return;t.classList.toggle("open")&&i&&(i.focus(),i.setSelectionRange(i.value.length,i.value.length))}function B0(n){const e=p("sni-"+n);if(!e)return;const t=h.shop.find(s=>s.id===n);if(!t)return;const i=e.value.trim();i!==(t.note||"")&&ke({...t,note:i})}function H0(n){const e=p("sqe-"+n),t=p("sqi-"+n);if(!e)return;e.classList.toggle("open")&&t&&(t.focus(),t.select())}function z0(n,e){const t=p("sqi-"+n);if(!t)return;const i=Math.max(1,(parseInt(t.value,10)||1)+e);t.value=i,Zp(n)}function Zp(n){const e=p("sqi-"+n);if(!e)return;const t=h.shop.find(s=>s.id===n);if(!t)return;const i=Math.max(1,parseInt(e.value,10)||1);i!==(t.qty||1)&&ke({...t,qty:i})}function q0(){h.aisleMode=!h.aisleMode;const n=p("aislebtn");n&&(n.style.background=h.aisleMode?"var(--ac)":"",n.style.color=h.aisleMode?"var(--bg)":""),Ei()}function W0(n){["list","deals"].forEach(i=>{const s=p("shtab-"+i);s&&s.classList.remove("active");const r=p("sh-"+i+"-body");r&&(r.style.display="none")});const e=p("shtab-"+n);e&&e.classList.add("active");const t=p("sh-"+n+"-body");t&&(t.style.display="block"),n==="deals"&&em()}function G0(){const n=h.shop.filter(i=>!i.checked);if(!n.length){R("List is empty!");return}const t=`🛒 Shopping List

`+n.map(i=>{let s="• "+i.name;return(i.qty||1)>1&&(s+=" × "+i.qty),i.price&&(s+=" (~$"+i.price+")"),s}).join(`
`);navigator.share?navigator.share({title:"Shopping List",text:t}).catch(()=>{}):navigator.clipboard&&navigator.clipboard.writeText(t).then(()=>R("List copied!"))}function K0(){const n=h.shop.filter(t=>t.checked);if(!n.length){R("No completed items!");return}const e=p("atk-body");e.innerHTML=`<div style="padding:16px">
    <p style="font-size:.82rem;color:var(--mt);margin-bottom:16px">Choose where each item goes in your kitchen, then tap Add All.</p>
    ${n.map(t=>{const i=mc(t.name);return`<div class="atk-item" id="atk-${t.id}" data-loc="${i}">
        <div class="atk-name">${t.name}</div>
        <div class="atk-loc">
          <button onclick="setAtkLoc('${t.id}','fridge',this)" class="${i==="fridge"?"sel":""}">🌡 Fridge</button>
          <button onclick="setAtkLoc('${t.id}','freezer',this)" class="${i==="freezer"?"sel":""}">🧊 Freeze</button>
          <button onclick="setAtkLoc('${t.id}','pantry',this)" class="${i==="pantry"?"sel":""}">🥫 Pantry</button>
        </div>
      </div>`}).join("")}
  </div>`,Tt("atk")}function Q0(n,e,t){const i=p("atk-"+n);i.dataset.loc=e,i.querySelectorAll(".atk-loc button").forEach(s=>s.classList.remove("sel")),t.classList.add("sel")}async function J0(){const n=h.shop.filter(i=>i.checked),e=new Date().toLocaleDateString();let t=0;for(const i of n){const s=p("atk-"+i.id);if(!s)continue;const r=s.dataset.loc||mc(i.name),o=h.inv.find(l=>l.name.toLowerCase()===i.name.toLowerCase()),c=i.qty||1;await Te({id:o?o.id:"inv-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:o?o.name:i.name,qty:o?o.qty+c:c,unit:o?o.unit:"unit",location:r,category:o?o.category:Fn({name:i.name}),addedAt:o?o.addedAt:e,brand:o?o.brand:i.brand||"",expiry:o?o.expiry:null,image:o?o.image:i.image||null,source:"shopping"}),await Ss(i.id),t++}Ae("atk"),R(`${t} item${t!==1?"s":""} added to your kitchen! 🧺`)}async function Y0(){const n=wi().map(s=>{const r=s.toISOString().split("T")[0];return h.mp[r]?`${s.toLocaleDateString("en-US",{weekday:"short"})}: ${h.mp[r]}`:""}).filter(Boolean).join(", ");if(!n){R("No meals planned yet!");return}const e=h.inv.map(s=>`${s.name} (${s.qty} ${s.unit})`).join(", "),t=document.querySelector('[onclick="buildList()"]'),i=t?t.textContent:"";t&&(t.disabled=!0,t.textContent="⏳ Thinking…");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:500,messages:[{role:"user",content:`Week meals: ${n}
Already have: ${e}
List ONLY ingredients still needed. Return ONLY a bullet list, each line starting "- ". No categories, no headers, no explanation.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",c=[];if(o.split(`
`).forEach(l=>{const d=l.match(/^[-•*]\s+(.+)/);if(d){const m=d[1].replace(/\*\*/g,"").trim();m&&!h.shop.find(y=>y.name.toLowerCase()===m.toLowerCase())&&c.push({name:m,sel:!0})}}),!c.length){R("Nothing new needed — you're all stocked! ✓");return}window._bpItems=c,p("bpList").innerHTML=c.map((l,d)=>`<div id="bpitem-${d}" onclick="bpTog(${d})" style="display:flex;align-items:center;gap:12px;padding:13px 16px;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;cursor:pointer;transition:all .15s"><div id="bpck-${d}" style="width:24px;height:24px;border-radius:50%;background:var(--gn);border:2px solid var(--gn);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.8rem;color:#0c0c0a;transition:all .2s">✓</div><div style="font-size:.9rem;font-weight:500">${l.name}</div></div>`).join(""),Gc(),p("buildPreviewM").classList.add("active")}catch{R("Couldn't reach Claude — check connection")}finally{t&&(t.disabled=!1,t.textContent=i)}}function X0(n){window._bpItems[n].sel=!window._bpItems[n].sel;const e=p("bpck-"+n),t=p("bpitem-"+n);window._bpItems[n].sel?(e.textContent="✓",e.style.background="var(--gn)",e.style.borderColor="var(--gn)",e.style.color="#0c0c0a",t.style.borderColor="var(--b1)"):(e.textContent="",e.style.background="transparent",e.style.borderColor="var(--b2)",t.style.borderColor="var(--b2)"),Gc()}function Z0(n){window._bpItems.forEach((e,t)=>{window._bpItems[t].sel=n;const i=p("bpck-"+t),s=p("bpitem-"+t);n?(i.textContent="✓",i.style.background="var(--gn)",i.style.borderColor="var(--gn)",i.style.color="#0c0c0a",s.style.borderColor="var(--b1)"):(i.textContent="",i.style.background="transparent",i.style.borderColor="var(--b2)",s.style.borderColor="var(--b2)")}),Gc()}function Gc(){const n=window._bpItems.filter(t=>t.sel).length,e=p("bpAddBtn");e&&(e.textContent=n?`Add ${n} item${n!==1?"s":""}  ✓`:"Nothing selected"),e&&(e.disabled=!n)}async function eS(){const n=window._bpItems.filter(e=>e.sel);if(!n.length){p("buildPreviewM").classList.remove("active");return}for(const e of n)await ke({id:Date.now().toString()+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"meal-plan"});p("buildPreviewM").classList.remove("active"),R(`Added ${n.length} item${n.length!==1?"s":""}! 🛒`)}function em(){const n=p("deals-zip-banner");if(!n)return;const e=h.cfg.zipcode;e?(n.innerHTML=`📍 Searching deals near <strong>${e}</strong> <span style="font-size:.72rem;color:var(--mt)">(change in Settings)</span>`,n.style.borderColor="var(--b2)"):(n.innerHTML=`⚠️ Set your zipcode in <strong style="cursor:pointer;color:var(--ac)" onclick="hideOv('');showOv('settings')">Settings</strong> to find local deals near you.`,n.style.borderColor="var(--am)")}function Wa(n,e){const t=p("dealslist");if(!n||!n.length){t.innerHTML=`<div class="es"><div class="ei">🏷</div><p>No deals found for <strong>${e}</strong>.<br>Try a different search term or check back later for new circulars.</p></div>`;return}t.innerHTML="",n.forEach(i=>{const s=document.createElement("div");s.className="deal-card"+(i.onSale?" deal-match":"");const r=document.createElement("div");r.style.flex="1";const o=document.createElement("div");o.className="deal-store",o.textContent=i.store||"Store";const c=document.createElement("div");if(c.className="deal-name",c.textContent=i.name||"",i.brand||i.size){const m=document.createElement("div");m.style.cssText="font-size:.72rem;color:var(--mt);margin-top:1px",m.textContent=[i.brand,i.size].filter(Boolean).join(" · "),r.appendChild(o),r.appendChild(c),r.appendChild(m)}else r.appendChild(o),r.appendChild(c);const l=document.createElement("div");if(l.style.cssText="display:flex;align-items:baseline;gap:6px;margin-top:4px;flex-wrap:wrap",i.sale_price){const m=document.createElement("span");m.className="deal-price",m.textContent=i.sale_price,l.appendChild(m)}if(i.onSale&&i.regular){const m=document.createElement("span");m.className="deal-orig",m.textContent=i.regular,l.appendChild(m)}if(i.savings){const m=document.createElement("span");m.className="deal-badge",m.textContent="Save "+i.savings,l.appendChild(m)}r.appendChild(l);const d=document.createElement("button");d.className="btn bs bsm",d.style.cssText="align-self:center;flex-shrink:0;margin-left:8px",d.textContent="+ List",(m=>{d.onclick=()=>tm(m)})(i.name||""),s.appendChild(r),s.appendChild(d),t.appendChild(s)})}function Ga(n){const e=p("deals-stores");!e||!n||!n.length||(e.style.display="block",e.innerHTML='<div style="font-size:.72rem;color:var(--mt);font-weight:600;margin-bottom:4px">Stores with deals</div>'+n.map(t=>`<div style="font-size:.74rem;color:var(--tx2);padding:2px 0">${t.name}</div>`).join(""))}function tm(n){const e=(n||"").replace(/&#39;/g,"'");h.shop.find(t=>t.name.toLowerCase()===e.toLowerCase())?R("Already on your list!"):(ke({id:Date.now().toString(),name:e,qty:1,checked:!1,src:"deal"}),R(e+" added!"))}async function Ka(n){const e=h.cfg.zipcode;if(!e)throw new Error("Set your zipcode in Settings to search for local deals.");const t="ks-deals-"+e+"-"+n.toLowerCase().replace(/\s+/g,"_").substring(0,40),i=je(t);if(i&&i.ts&&Date.now()-i.ts<72e5)return i;const s=await fetch("/api/deals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({zipcode:e,query:n})}),r=await s.json();if(!s.ok||r.error)throw new Error(r.message||r.error||"Deals API request failed");return ut(t,{...r,ts:Date.now()}),r}async function tS(){const n=p("dealsearch").value.trim();if(!n){R("Enter something to search");return}const e=p("dealsstatus");e.style.display="block",e.style.color="var(--mt)",e.textContent="🔍 Searching deals for "+n+" near "+(h.cfg.zipcode||"your area")+"…",p("dealslist").innerHTML="";try{const t=await Ka(n);if(e.style.display="none",t.message){p("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${t.message}</p></div>`;return}t.stores&&Ga(t.stores),Wa(t.deals,n)}catch(t){e.style.color="var(--rd)",e.textContent=t.message||"Unknown error"}}async function nS(){const n=h.shop.filter(i=>!i.checked);if(!n.length){const i=Object.values(h.mp).filter(Boolean);if(!i.length){R("Add items to your list first!");return}if(!confirm(`Your list is empty. Search deals for this week's meals?

`+i.join(", ")))return;const r=p("dealsstatus");r.style.display="block",r.textContent="Searching deals for your meal plan...",p("dealslist").innerHTML="";try{const o=await Ka(i.join(", "));if(r.style.display="none",o.message){p("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${o.message}</p></div>`;return}o.stores&&Ga(o.stores),Wa(o.deals,i.join(", "))}catch(o){r.style.color="var(--rd)",r.textContent=o.message}return}const e=p("dealsstatus"),t=n.slice(0,8).map(i=>i.name).join(", ");e.style.display="block",e.style.color="var(--mt)",e.textContent="Searching deals for: "+t+"...",p("dealslist").innerHTML="";try{const i=await Ka(t);if(e.style.display="none",i.message){p("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${i.message}</p></div>`;return}i.stores&&Ga(i.stores),i.deals.length?Wa(i.deals,t):p("dealslist").innerHTML='<div class="es"><div class="ei">🏷</div><p>No deals found for your list items.<br/>Try searching for individual items.</p></div>'}catch(i){e.style.color="var(--rd)",e.textContent=i.message}}function Kc(n){return n?n.replace(/\S+/g,e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()):""}function Qc(n){if(!n.brand)return!1;if(n.source==="scan"||n.source==="Barcode")return!0;if(n.source==="search"&&n.searchQuery){const e=n.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),t=n.brand.toLowerCase();return e.some(i=>t.includes(i))}return!1}function sr(n){pc[Fn(n)];const e=n.image?`<img src="${n.image}" class="sh-thumb" alt="" onerror="this.style.display='none'"/>`:"",t=nt(n.expiry),i=t?t.c==="expired"?" expired":t.c==="expiring"?" expiring":"":"",s=t?`<div class="etag ${t.c}">${t.l}</div>`:"",r=Qc(n)?`<div class="sh-brand">${n.brand}</div>`:"";return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="inv">
    <div class="swipe-inner">
      <div class="iit${i}" onclick="swipeRowTap('${n.id}','inv')">
        <div class="sel-cb">✓</div>
        <!-- Slim outlined circle: tapping opens detail sheet -->
        <div class="shck" onclick="event.stopPropagation();openInvItemDetail('${n.id}')"></div>
        ${e}
        <div style="flex:1;min-width:0;cursor:pointer" onclick="event.stopPropagation();openInvItemDetail('${n.id}')">
          <div class="inm">${Kc(n.name)}</div>
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
  </div>`}function go(){const n=(s,r)=>s.name.localeCompare(r.name),e=(h.it==="all"||h.it==="cat"?h.inv:h.inv.filter(s=>s.location===h.it)).slice().sort(n),t=p("isub");t&&(t.textContent=e.length+" "+({all:"items",fridge:"fridge items",freezer:"frozen items",pantry:"pantry items",cat:"items by type"}[h.it]||"items")),Ap();const i=p("ibody");if(i){if(!e.length){i.innerHTML='<div class="es"><div class="ei">🧺</div><p>No items here yet.<br/>Tap Scan or Add to get started.</p></div>';return}if(h.it==="cat"){const s={};e.forEach(r=>{const o=Fn(r);s[o]||(s[o]=[]),s[o].push(r)}),i.innerHTML=Object.entries(s).sort((r,o)=>r[0].localeCompare(o[0])).map(([r,o])=>`<div class="lgrp"><div class="lgt">${pc[r]||"📦"} ${r}</div><div class="ilst">${o.map(sr).join("")}</div></div>`).join(""),h.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(r=>{r.classList.add("selecting"),h.selectedIds.has(r.dataset.id)&&r.classList.add("selected")});return}if(h.it==="all"){const s=h.inv.filter(o=>{const c=nt(o.expiry);return c&&(c.c==="expiring"||c.c==="expired")}).sort((o,c)=>new Date(o.expiry)-new Date(c.expiry)),r=s.length?`<div class="lgrp"><div class="lgt" style="color:var(--am)">⚠️ Expiring Soon</div><div class="ilst">${s.map(sr).join("")}</div></div>`:"";i.innerHTML=r+["fridge","freezer","pantry"].map(o=>{const c=e.filter(l=>l.location===o);return c.length?`<div class="lgrp"><div class="lgt">${eo(o)}</div><div class="ilst">${c.map(sr).join("")}</div></div>`:""}).join(""),h.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(o=>{o.classList.add("selecting"),h.selectedIds.has(o.dataset.id)&&o.classList.add("selected")});return}i.innerHTML=`<div class="ilst">${e.map(sr).join("")}</div>`,h.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(s=>{s.classList.add("selecting"),h.selectedIds.has(s.dataset.id)&&s.classList.add("selected")})}}function iS(n){const e=h.inv.find(r=>r.id===n);if(!e)return;h.adjId=n;const t=pc[Fn(e)]||"🛒",i=e.image?`<img src="${e.image}" class="pimg" onerror="this.style.display='none'"/>`:`<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">${t}</div>`,s=Qc(e)?`<div class="pbr">${e.brand}</div>`:"";p("adjbody").innerHTML=`<div class="pcard"><div class="phdr">${i}<div style="flex:1"><div class="pnm">${Kc(e.name)}</div>${s}<div style="font-size:.7rem;color:var(--mt);margin-top:2px">Added ${e.addedAt}</div></div></div><div class="frow" style="margin-top:14px"><label class="flbl">Location</label><div class="lpick"><button class="lbtn ${e.location==="fridge"?"sel":""}" onclick="updL('fridge',this)">🌡 Fridge</button><button class="lbtn ${e.location==="freezer"?"sel":""}" onclick="updL('freezer',this)">🧊 Freezer</button><button class="lbtn ${e.location==="pantry"?"sel":""}" onclick="updL('pantry',this)">🥫 Pantry</button></div></div><div class="qrow"><span class="qlbl">Quantity</span><div class="qctl"><button class="qbtn" onclick="adjQ(-1)">−</button><input class="qinp" id="adjqty" type="number" min="0" value="${e.qty}" oninput="adjQD()"/><button class="qbtn" onclick="adjQ(1)">+</button></div></div><div class="frow"><label class="flbl">Expiry Date <span class="otag">optional</span></label><input class="fd" id="adjexp" type="date" value="${e.expiry||""}" onchange="adjE()"/></div><div class="frow"><label class="flbl">Notes <span class="otag">optional</span></label><textarea class="sh-note-inp" id="adjnote" rows="2" placeholder="Brand, store, reminders…" onblur="adjNote()">${e.note||""}</textarea></div><div class="qrow"><span class="qlbl">Low stock alert at</span><div class="qctl"><button class="qbtn" onclick="adjLowThresh(-1)">−</button><input class="qinp" id="adjlowthresh" type="number" min="0" value="${e.lowStockThreshold||1}" oninput="adjLowThreshD()"/><button class="qbtn" onclick="adjLowThresh(1)">+</button></div></div></div>`,p("rembtn").onclick=()=>Jc(n),Tt("adj")}async function Vn(n){if(h.selectMode)return;const e=h.inv.find(y=>y.id===n);if(!e)return;const t=p("invItemDetailContent");if(!t)return;let i=e.image;if(e.imageDismissed,h.hid&&e.name){const y=ze(e.name);if(y){const w=await ee(`households/${h.hid}/customProducts/${y}`);w&&(w.imageDismissed?i=null:w.imageUrl&&(i=w.imageUrl))}}const s=i?`<div class="item-detail-img-wrap drop-zone" data-item-id="${e.id}" data-list="inv">
        <img src="${i}" class="item-detail-img" alt="" onerror="this.style.display='none'"/>
        <button class="item-detail-img-del" onclick="deleteInvItemImage('${e.id}')" title="Remove image">×</button>
      </div>`:`<div class="item-detail-img-ph drop-zone" data-item-id="${e.id}" data-list="inv" onclick="triggerInvPhotoUpload('${e.id}')" style="cursor:pointer">
        <div style="text-align:center">
          <div style="font-size:1.3rem;margin-bottom:2px;opacity:.45">📷</div>
          <div style="font-size:.6rem;color:var(--mt);opacity:.7">Add photo</div>
        </div>
      </div>`,r=i?`<div class="item-detail-change-photo" onclick="triggerInvPhotoUpload('${e.id}')">Change photo</div>`:"",o=Qc(e);let c=`<div class="item-detail-header">
    <div>${s}${r}</div>
    <div style="flex:1;min-width:0">
      <div class="item-detail-name">${Kc(e.name)}</div>
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
  <button class="btn bs bf" onclick="closeInvItemDetail()" style="margin-top:8px">Close</button>`,t.innerHTML=c;const l=p("invItemDetailBackdrop"),d=p("invItemDetailSheet");l&&l.classList.add("active"),d&&d.classList.add("active");const m=t.querySelector(".drop-zone");m&&rS(m,e.id)}function sS(){const n=p("invItemDetailBackdrop"),e=p("invItemDetailSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}function rS(n,e){let t=0;n.addEventListener("dragenter",i=>{i.preventDefault(),i.stopPropagation(),t++,n.classList.add("drop-zone-active")}),n.addEventListener("dragover",i=>{i.preventDefault(),i.stopPropagation()}),n.addEventListener("dragleave",i=>{i.preventDefault(),i.stopPropagation(),t--,t<=0&&(t=0,n.classList.remove("drop-zone-active"))}),n.addEventListener("drop",i=>{i.preventDefault(),i.stopPropagation(),t=0,n.classList.remove("drop-zone-active"),oS(i.dataTransfer,e)})}async function oS(n,e){const t=h.inv.find(c=>c.id===e);if(!t)return;if(n.files&&n.files.length>0){const c=n.files[0];if(c.type&&c.type.startsWith("image/")){await nm(c,t);return}}const i=n.getData("text/uri-list"),s=n.getData("text/plain"),r=i||s||"";if(r&&/^https?:\/\/.+\.(jpe?g|png|gif|webp|bmp)/i.test(r)){await Kd(r,t);return}const o=n.getData("text/html");if(o){const c=o.match(/<img[^>]+src=["']([^"']+)["']/i);if(c&&c[1]&&/^https?:\/\//.test(c[1])){await Kd(c[1],t);return}}console.warn("[InvDropZone] Dropped data didn't contain a usable image")}async function nm(n,e){const t=p("invItemDetailContent");if(t){const i=t.querySelector(".item-detail-img-wrap, .item-detail-img-ph");i&&(i.innerHTML=`<div style="text-align:center;padding:16px 0">
        <div style="font-size:1.2rem">⏳</div>
        <div style="font-size:.65rem;color:var(--mt);margin-top:2px">Uploading…</div>
      </div>`)}try{const i=await po(n,e.name),s={...e,image:i,imageDismissed:!1};await Te(s),im(e.name,i),R("Photo saved ✓"),Vn(e.id)}catch(i){console.error("[InvDropZone] Upload failed:",i),R("Upload failed — try again"),Vn(e.id)}}async function Kd(n,e){const t=p("invItemDetailContent");if(t){const i=t.querySelector(".item-detail-img-wrap, .item-detail-img-ph");i&&(i.innerHTML=`<div style="text-align:center;padding:16px 0">
        <div style="font-size:1.2rem">⏳</div>
        <div style="font-size:.65rem;color:var(--mt);margin-top:2px">Fetching image…</div>
      </div>`)}try{const i=await fetch(n);if(!i.ok)throw new Error(`HTTP ${i.status}`);const s=await i.blob();if(!s.type||!s.type.startsWith("image/"))throw new Error("Fetched resource is not an image");const r=new File([s],"dropped-image.jpg",{type:s.type});await nm(r,e)}catch(i){console.warn("[InvDropZone] Could not fetch dropped image URL:",i),R("Couldn't load that image — try saving it first"),Vn(e.id)}}function im(n,e){if(!h.hid||!n)return;const t=ze(n);t&&z(`households/${h.hid}/customProducts/${t}`,{name:n.trim(),imageUrl:e,imageDismissed:!1,updatedAt:new Date().toISOString()}).catch(i=>console.warn("Failed to save custom product image:",i))}async function aS(n){const e=h.inv.find(i=>i.id===n);if(!e)return;const t={...e,image:null,imageDismissed:!0};if(await Te(t),h.hid&&e.name){const i=ze(e.name);i&&z(`households/${h.hid}/customProducts/${i}`,{name:e.name.trim(),imageDismissed:!0,imageUrl:null,updatedAt:new Date().toISOString()}).catch(s=>console.warn("Failed to save imageDismissed to customProducts:",s))}Vn(n)}function cS(n){window._invUploadTargetId=n;const e=document.getElementById("invProductPhotoInput");e&&(e.value="",e.click())}async function lS(n){const e=document.getElementById("invProductPhotoInput");if(!e||!e.files||!e.files[0])return;const t=e.files[0],i=h.inv.find(r=>r.id===n);if(!i)return;const s=p("invItemDetailContent");if(s){const r=s.querySelector(".item-detail-img-wrap, .item-detail-img-ph");r&&(r.innerHTML=`<div style="text-align:center;padding:16px 0">
        <div style="font-size:1.2rem">⏳</div>
        <div style="font-size:.65rem;color:var(--mt);margin-top:2px">Uploading…</div>
      </div>`)}try{const r=await po(t,i.name),o={...i,image:r,imageDismissed:!1};await Te(o),im(i.name,r),R("Photo saved ✓"),Vn(n)}catch(r){console.error("Inventory photo upload failed:",r),R("Upload failed — try again"),Vn(n)}}async function Jc(n){const e=h.inv.find(t=>t.id===n);if(e){const t=nt(e.expiry);t&&(t.c==="expired"||t.c==="expiring")&&await p_(e.name)}await Zr(n),R("Item removed"),Ae("adj")}async function uS(n,e){const t=h.inv.find(i=>i.id===h.adjId);t&&(document.querySelectorAll("#adjbody .lbtn").forEach(i=>i.classList.remove("sel")),e.classList.add("sel"),await Te({...t,location:n}))}async function dS(n){const e=h.inv.find(i=>i.id===h.adjId);if(!e)return;const t=Math.max(0,e.qty+n);if(p("adjqty").value=t,t===0){await Jc(h.adjId);return}await Te({...e,qty:t})}async function hS(){const n=h.inv.find(t=>t.id===h.adjId);if(!n)return;const e=parseInt(p("adjqty").value);!isNaN(e)&&e>=0&&await Te({...n,qty:e})}async function fS(){const n=h.inv.find(e=>e.id===h.adjId);n&&await Te({...n,expiry:p("adjexp").value||null})}async function pS(){const n=h.inv.find(t=>t.id===h.adjId);if(!n)return;const e=(p("adjnote").value||"").trim();await Te({...n,note:e||null})}async function mS(n){const e=h.inv.find(i=>i.id===h.adjId);if(!e)return;const t=Math.max(0,(e.lowStockThreshold||1)+n);p("adjlowthresh").value=t,await Te({...e,lowStockThreshold:t})}async function gS(){const n=h.inv.find(t=>t.id===h.adjId);if(!n)return;const e=parseInt(p("adjlowthresh").value);!isNaN(e)&&e>=0&&await Te({...n,lowStockThreshold:e})}function yS(n){h.it=n,document.querySelectorAll(".itab").forEach(t=>t.classList.remove("active"));const e=p("itab-"+n);e&&e.classList.add("active"),go()}async function vS(){const n=p("man").value.trim();if(!n)return;const e=p("mac").value,t=p("mau").value.trim()||"unit",i=Math.max(1,parseInt(p("maq").value)||1),s=p("mae").value||null,r="itm-"+n.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now();await Te({id:r,barcode:r,name:n,brand:"",unit:t,qty:i,location:h.maL,category:e,image:null,source:"Manual",expiry:s,addedAt:new Date().toLocaleDateString()}),p("man").value="",p("maq").value=1,p("mae").value="",p("mabtn").disabled=!0,R(`${n} added!`),Ae("madd"),mo(r,n,"inv")}function wS(){p("mabtn").disabled=!p("man").value.trim()}function _S(n){const e=p("maq");e.value=Math.max(1,(parseInt(e.value)||1)+n)}function bS(n,e){h.maL=n,document.querySelectorAll("#ov-madd .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}async function TS(){const n=p("imptxt").value.trim();if(!n)return;let e=0,t=0,i="pantry";for(const s of n.split(`
`)){const r=s.toLowerCase();r.includes("fridge")?i="fridge":r.includes("freezer")?i="freezer":r.includes("pantry")&&(i="pantry");const o=s.match(/^\|\s*([^|]+?)\s*\|\s*(\d+(?:\.\d+)?)\s*\|\s*([^|]+?)\s*\|/),c=s.match(/^[-*]\s+(.+?):\s*(\d+(?:\.\d+)?)\s*([a-zA-Z%\/]+.*)?$/);let l,d,m;if(o?(l=o[1].trim(),d=parseFloat(o[2]),m=o[3].trim()):c&&(l=c[1].trim(),d=parseFloat(c[2]),m=(c[3]||"unit").trim()),l&&d&&l!=="Item"&&l!=="---"&&!l.startsWith("-")){const y="item-imp-"+l.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),w=h.inv.find(C=>C.id===y);await Te({id:y,barcode:y,name:l,brand:"",unit:m||"unit",qty:d,location:i,category:"Imported",image:null,source:"Imported",expiry:null,addedAt:w?w.addedAt:new Date().toLocaleDateString()}),w?t++:e++}}p("imptxt").value="",R(`Imported ${e} new, updated ${t}`),Ae("import")}let us=null,tn=null,yo="fridge",Je=null,ua=!1,rr="",da=!1;const qi=new Map,IS=300*1e3,ES=30;function SS(){const n=p("invAddBackdrop"),e=p("invAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),yo="fridge",document.querySelectorAll("#invAddSheet .lbtn").forEach(i=>i.classList.remove("sel"));const t=p("invAddLoc-fridge");t&&t.classList.add("sel"),setTimeout(()=>{const i=p("invi");i&&(i.value="",i.focus())},150)}function Ds(){const n=p("invAddBackdrop"),e=p("invAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),Yc()}function AS(){Ds(),window.openScanForInventory&&window.openScanForInventory()}function kS(){Ds(),sm()}function CS(n,e){yo=n,document.querySelectorAll("#invAddSheet .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function RS(){const n=p("invAddNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=p("invAddNoteInp");t&&t.focus()}}function xS(){const n=p("invi"),e=n?n.value.trim():"";if(!e)return;let t=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||1):s&&(t=s[2].trim(),i=parseInt(s[1],10)||1);const o=p("invAddNoteInp"),c=o?o.value.trim():"",l="itm-"+t.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),d={id:l,barcode:l,name:t,brand:"",unit:"unit",qty:i,location:yo,category:Fn({name:t}),image:null,source:"Manual",expiry:null,addedAt:new Date().toLocaleDateString()};c&&(d.note=c),Te(d),R(`${t} added!`),n&&(n.value=""),o&&(o.value="");const m=p("invAddNoteWrap");m&&(m.style.display="none"),Yc(),Ds(),mo(l,t,"inv")}function PS(){us&&clearTimeout(us);const n=p("invi"),e=n?n.value.trim():"",t=p("invSearchDropdown");if(!e||e.length<2){t&&(t.classList.remove("active"),t.innerHTML=""),tn=null;return}us=setTimeout(()=>$S(e),350)}function LS(n){if(!n)return"NONE";const e=n.toLowerCase();return e.includes("kroger.com")?"Kroger (real product)":e.includes("img.spoonacular.com/products")?"Spoonacular product (real photo)":e.includes("img.spoonacular.com/ingredients")?"Spoonacular ingredient (illustration)":e.includes("openfoodfacts.org")?"Open Food Facts (real photo)":e.includes("edamam")?"Edamam":"Other: "+new URL(n).hostname}function Qd(n){const e=p("invSearchDropdown");!e||!n.length||(tn=n,n.forEach((t,i)=>{const s=LS(t.image);console.log(`[InvDropdown] #${i} "${t.name}" → image: ${s} | url: ${t.image||"(none)"} | score: ${t._score}`)}),e.innerHTML=n.map((t,i)=>{const s=t.image?`<img src="${t.image}" class="enrich-img" alt="" onerror="this.outerHTML='<div class=\\'enrich-img-ph\\'>🛒</div>'">`:'<div class="enrich-img-ph">🛒</div>',r=t.category&&t.category!=="General"?`<div class="enrich-cat">${t.category}</div>`:"";return`<div class="enrich-row" onclick="pickInvInlineResult(${i})">
      ${s}
      <div class="enrich-text">
        <div class="enrich-name">${t.name}</div>
        ${r}
      </div>
    </div>`}).join(""),e.classList.add("active"))}async function DS(n){if(!h.hid||!n)return null;const e=ze(n);if(!e)return null;const t=await ee(`households/${h.hid}/customProducts/${e}`);return!t||t.imageDismissed||!t.imageUrl?null:{name:n.trim().replace(/\b\w/g,s=>s.toUpperCase()),image:t.imageUrl,brand:"",category:t.category||"",source:"customProduct",_score:100}}async function NS(n){const e=n.toLowerCase(),t=qi.get(e);if(t&&Date.now()-t.ts<IS)return t.scored;const i=h.hid?`&hid=${encodeURIComponent(h.hid)}`:"";let o=(await(await fetch(`/api/text-search?q=${encodeURIComponent(n)}${i}`)).json()).results||[];const c=n.toLowerCase().split(/\s+/).filter(d=>d.length>=2);o=o.filter(d=>{const m=(d.name||"").toLowerCase();return c.some(y=>m.includes(y))});const l=o.map(d=>({...d,_score:Kp(d.name||"",n)})).filter(d=>d._score>=15).sort((d,m)=>m._score-d._score).slice(0,5);return qi.set(e,{scored:l,ts:Date.now()}),qi.size>ES&&qi.delete(qi.keys().next().value),l}async function $S(n){const e=p("invSearchDropdown");if(e){e.innerHTML='<div class="search-hint">Searching…</div>',e.classList.add("active");try{const t=DS(n),i=NS(n),s=await t;s&&(p("invi")?p("invi").value.trim():"").toLowerCase()===n.toLowerCase()&&(console.log(`[InvSearch] Instant custom product match for "${n}"`),Qd([s]));const r=await i;if((p("invi")?p("invi").value.trim():"").toLowerCase()!==n.toLowerCase())return;let c=r;if(s){const l=ze(s.name),d=r.filter(m=>ze(m.name)!==l);c=[s,...d].slice(0,5)}if(!c.length){e.classList.remove("active"),e.innerHTML="",tn=null;return}Qd(c)}catch(t){console.warn("Inventory inline search failed:",t),e.classList.remove("active"),e.innerHTML="",tn=null}}}function OS(n){if(!tn||!tn[n])return;const e=tn[n],t=p("invAddNoteInp"),i=t?t.value.trim():"",s="itm-"+(e.name||"item").toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),r={id:s,barcode:s,name:e.name,brand:e.brand||"",unit:"unit",qty:1,location:yo,category:e.category||Fn({name:e.name}),image:e.image||null,source:e.source||"search",expiry:null,addedAt:new Date().toLocaleDateString()};i&&(r.note=i),Te(r),R(`Added "${e.name}" ✓`);const o=p("invi");o&&(o.value=""),t&&(t.value="");const c=p("invAddNoteWrap");c&&(c.style.display="none"),Yc(),Ds()}function Yc(){us&&clearTimeout(us),tn=null;const n=p("invSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}function MS(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=p("invAddMicOpt");e&&(e.style.display="")}function Jd(n){const e=p("inv-micstatus");e&&e.classList.toggle("visible",n)}function sm(){if(ua&&Je){da=!0,Je.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){R("Voice input not supported");return}Je=new n,Je.lang="en-US",Je.interimResults=!0,Je.maxAlternatives=1,Je.continuous=!1,rr="",ua=!0,Jd(!0),Je.onresult=e=>{let t="";for(let s=e.resultIndex;s<e.results.length;s++){const r=e.results[s][0].transcript;e.results[s].isFinal?rr+=r:t+=r}const i=p("invi");i&&(i.value=(rr+t).trim())},Je.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&R("Couldn't hear that — try again")},Je.onend=()=>{ua=!1,Jd(!1),Je=null;let e=rr.trim();if(!e&&da){const r=p("invi");e=r?r.value.trim():""}if(da=!1,!e)return;const t="itm-"+e.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),i=mc(e);Te({id:t,barcode:t,name:e,brand:"",unit:"unit",qty:1,location:i,category:Fn({name:e}),image:null,source:"Voice",expiry:null,addedAt:new Date().toLocaleDateString()}),R(`Added "${e}" to ${i}`);const s=p("invi");s&&(s.value=""),mo(t,e,"inv")},Je.start()}function rm(n){return[...document.querySelectorAll("#"+n+" .tag.sel")].map(e=>e.dataset.tag)}function om(n,e){document.querySelectorAll("#"+n+" .tag").forEach(t=>{t.classList.toggle("sel",(e||[]).includes(t.dataset.tag))})}function VS(n){n.classList.toggle("sel")}function US(n){const e=Array.from({length:5},(o,c)=>`<span class="star${c<n.rating?" on":""}">${c<n.rating?"★":"☆"}</span>`).join(""),t=n.sourceUrl?`<a href="${n.sourceUrl}" target="_blank" onclick="event.stopPropagation()" style="font-size:.68rem;color:var(--ac);text-decoration:none;border:1px solid rgba(212,168,83,.3);border-radius:20px;padding:2px 8px;background:transparent">🔗 View original</a>`:n.source?`<span class="sbdg">${n.source}</span>`:"",i=n.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;max-height:140px"><img src="${n.imageUrl}" alt="" style="width:100%;height:140px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",s=[n.totalTime||n.cookTime?`⏱ ${n.totalTime||n.cookTime}`:"",n.servings?`🍽 ${n.servings} servings`:""].filter(Boolean),r=s.length?`<div style="display:flex;gap:6px;margin-top:6px;flex-wrap:wrap">${s.map(o=>`<span style="font-size:.68rem;color:var(--mt);background:var(--b1);border-radius:8px;padding:2px 8px">${o}</span>`).join("")}</div>`:"";return`<div class="rcd${n.favorited?" fav":""}" onclick="openER('${n.id}')">${i}<div class="rrow"><div class="rnm">${n.name}</div><div class="rfav" onclick="event.stopPropagation();togFav('${n.id}')">${n.favorited?"❤️":"🤍"}</div></div><div class="stars">${e}</div>${r}${n.description?`<div class="rnot" style="color:var(--tx2);margin-top:6px">${n.description.substring(0,100)}${n.description.length>100?"…":""}</div>`:""}${n.notes?`<div class="rnot">${n.notes}</div>`:""}<div class="rmeta"><span>${n.savedAt}</span>${t}</div></div>`}function FS(n){h.rt=n,document.querySelectorAll(".rtab").forEach(t=>t.classList.remove("active"));const e=p("rtab-"+n);e&&e.classList.add("active"),n==="community"?Zc():vo()}function vo(){if(h.rt==="community")return;let n=[...h.recs];h.rt==="fav"?n=n.filter(i=>i.favorited):h.rt==="top"?n=n.filter(i=>i.rating>=4).sort((i,s)=>s.rating-i.rating):h.rt==="quick"?n=n.filter(i=>(i.tags||[]).includes("Quick")||(i.tags||[]).includes("Under 30 min")):h.rt==="kid"?n=n.filter(i=>(i.tags||[]).includes("Kid-Friendly")):n=n.sort((i,s)=>new Date(s.savedAt||0)-new Date(i.savedAt||0));const e=p("rsub");e&&(e.textContent=n.length+" recipe"+(n.length!==1?"s":""));const t=p("rbody");if(t){if(!n.length){t.innerHTML=`<div class="es"><div class="ei">📖</div><p>${h.rt==="fav"?"No favorites yet!":h.rt==="top"?"No 4–5 star recipes yet.":h.rt==="quick"?"No quick recipes saved yet.":h.rt==="kid"?"No kid-friendly recipes yet.":"No recipes saved yet.<br/>Mark meals as cooked or tap + Add."}</p></div>`;return}t.innerHTML=n.map(US).join("")}}async function jS(n){const e=h.recs.find(t=>t.id===n);e&&(await sn({...e,favorited:!e.favorited}),R(e.favorited?"Removed from favorites":"Added to favorites! ❤️"))}function BS(){p("savrecbtn").disabled=!p("rn").value.trim()}async function HS(){const n=p("rurl").value.trim();if(!n)return;const e=p("rurlstatus"),t=p("rimportbtn");e.style.display="block",e.style.color="var(--mt)",e.textContent="🤖 Importing recipe with AI…",t.disabled=!0;try{const s=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})})).json();if(!s.success){e.style.color="var(--rd)",e.textContent="⚠️ "+(s.error||"Couldn't import this recipe"),t.disabled=!1;return}const r=s.recipe,o=zS(r);p("rn").value=r.title||"",p("rd").value=o,p("rnotes").value=r.notes||"",p("rsourceurl").value=n,p("rcuisine")&&(p("rcuisine").value=r.cuisine||""),r.tags&&r.tags.length&&om("rtags",r.tags),p("savrecbtn").disabled=!r.title,qS(r.imageUrl),h._importedRecipe={ingredientsRaw:r.ingredients||[],stepsRaw:r.steps||[],imageUrl:r.imageUrl||null,prepTime:r.prepTime||"",cookTime:r.cookTime||"",totalTime:r.totalTime||"",servings:r.servings||""};const c=[r.prepTime?`Prep: ${r.prepTime}`:"",r.cookTime?`Cook: ${r.cookTime}`:"",r.servings?`Serves: ${r.servings}`:""].filter(Boolean);e.style.color="var(--gn)",e.textContent="✓ Recipe imported! "+(c.length?c.join(" · "):"Review and save.")}catch(i){console.error("importFromUrl:",i),e.style.color="var(--rd)",e.textContent="⚠️ Couldn't import — try copying the recipe text manually."}t.disabled=!1}function zS(n){const e=[];return n.description&&(e.push(n.description),e.push("")),n.ingredients&&n.ingredients.length&&(e.push("Ingredients:"),n.ingredients.forEach(t=>{if(typeof t=="string")e.push(`- ${t}`);else{const i=[t.amount,t.unit].filter(Boolean).join(" ");e.push(`- ${i?i+" ":""}${t.name}`)}}),e.push("")),n.steps&&n.steps.length&&(e.push("Steps:"),n.steps.forEach((t,i)=>{e.push(`${i+1}. ${t}`)})),e.join(`
`)}function qS(n){var s;const e=document.getElementById("rimgpreview");if(e&&e.remove(),!n)return;const t=(s=p("rurlstatus"))==null?void 0:s.parentElement;if(!t)return;const i=document.createElement("div");i.id="rimgpreview",i.style.cssText="margin:12px 0;border-radius:12px;overflow:hidden;background:var(--b1);max-height:200px;display:flex;align-items:center;justify-content:center",i.innerHTML=`<img src="${n}" alt="Recipe photo" style="width:100%;height:200px;object-fit:cover;border-radius:12px" onerror="this.parentElement.style.display='none'"/>`,t.after(i)}async function WS(){const n=p("rn").value.trim();if(!n)return;const e=p("rd").value.trim(),t=p("rsourceurl")?p("rsourceurl").value.trim():"",i=p("rcuisine")?p("rcuisine").value.trim():"",s=rm("rtags"),r=document.getElementById("rpubtoggle"),o=r?r.classList.contains("on"):!1,c=h._importedRecipe||{},l={id:"rec-"+Date.now(),name:n,rating:h.nr,favorited:!1,notes:p("rnotes").value.trim(),description:e,source:t?"AI Import":"Manual",sourceUrl:t||null,imageUrl:c.imageUrl||null,tags:s,cuisine:i,prepTime:c.prepTime||"",cookTime:c.cookTime||"",totalTime:c.totalTime||"",servings:c.servings||"",ingredientsRaw:c.ingredientsRaw||[],stepsRaw:c.stepsRaw||[],cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:o};if(await sn(l),o){const y=se(),w=(y==null?void 0:y.displayName)||localStorage.getItem("ks-who")||"Anonymous";await df(l,w,h.hid)}p("rn").value="",p("rnotes").value="",p("rd").value="",p("rsourceurl").value="",p("rurl").value="",p("rcuisine")&&(p("rcuisine").value=""),om("rtags",[]),h.nr=0,h._importedRecipe=null,p("savrecbtn").disabled=!0,is("rstars",0);const d=document.getElementById("rimgpreview");d&&d.remove(),r&&r.classList.remove("on");const m=p("rurlstatus");m&&(m.style.display="none",m.textContent=""),R("Recipe saved! 📖"),Ae("arec")}function GS(n){const e=h.recs.find(d=>d.id===n);if(!e)return;h.eid=n;const t=e.rating||0,i=Array.from({length:5},(d,m)=>`<span class="star${m<t?" on":""}" onclick="setStar(${m+1},'e')">${m<t?"★":"☆"}</span>`).join(""),s=e.sourceUrl?`<div class="frow"><label class="flbl">Original</label><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);word-break:break-all">${e.sourceUrl}</a></div>`:"",r=`<div class="frow"><label class="flbl">Tags</label><div class="tags" id="etags">
    <div class="tag${(e.tags||[]).includes("Quick")?" sel":""}" data-tag="Quick" onclick="togTag(this)">⚡ Quick</div>
    <div class="tag kid${(e.tags||[]).includes("Kid-Friendly")?" sel":""}" data-tag="Kid-Friendly" onclick="togTag(this)">👶 Kid-Friendly</div>
    <div class="tag date${(e.tags||[]).includes("Date Night")?" sel":""}" data-tag="Date Night" onclick="togTag(this)">🕯 Date Night</div>
    <div class="tag batch${(e.tags||[]).includes("Batch Cook")?" sel":""}" data-tag="Batch Cook" onclick="togTag(this)">📦 Batch Cook</div>
    <div class="tag${(e.tags||[]).includes("Healthy")?" sel":""}" data-tag="Healthy" onclick="togTag(this)">🥗 Healthy</div>
    <div class="tag${(e.tags||[]).includes("Under 30 min")?" sel":""}" data-tag="Under 30 min" onclick="togTag(this)">⏱ Under 30 min</div>
  </div></div>`,o=e.imageUrl?`<div style="margin:-16px -16px 16px;border-radius:0;overflow:hidden;max-height:220px"><img src="${e.imageUrl}" alt="" style="width:100%;height:220px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",c=[e.prepTime?`Prep: ${e.prepTime}`:"",e.cookTime?`Cook: ${e.cookTime}`:"",e.totalTime?`Total: ${e.totalTime}`:"",e.servings?`Serves: ${e.servings}`:""].filter(Boolean),l=c.length?`<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px">${c.map(d=>`<span style="font-size:.74rem;color:var(--mt);background:var(--b1);border-radius:8px;padding:4px 10px">${d}</span>`).join("")}</div>`:"";p("erecbody").innerHTML=`
    ${o}
    ${l}
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
    <div class="brow"><button class="btn bd" style="flex:1" onclick="delER()">Delete</button><button class="btn bp" style="flex:2" onclick="updR()">Save</button></div>`,Tt("erec")}async function KS(){const n=h.recs.find(s=>s.id===h.eid);if(!n)return;const e=[...document.querySelectorAll("#estars .star")].filter(s=>s.classList.contains("on")).length,t=rm("etags"),i=p("ecuis")?p("ecuis").value.trim():n.cuisine||"";await sn({...n,name:p("ern").value.trim(),rating:e,description:p("erd").value.trim(),notes:p("erno").value.trim(),favorited:p("etog").classList.contains("on"),tags:t,cuisine:i}),R("Recipe updated!"),Ae("erec")}async function QS(){confirm("Delete this recipe?")&&(await g_(h.eid),R("Deleted"),Ae("erec"))}async function JS(n){const e=p("erd");if(!e)return;const t=e.value.trim();if(!t){R("No ingredients to scale");return}const i=p("scaleStatus");i.style.display="block",i.style.color="var(--mt)",i.textContent=`⏳ Scaling to ${n}× with Claude…`;try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Scale ALL ingredient quantities in this recipe by ${n}x. Return ONLY the updated recipe text with scaled quantities. Keep the same format. Do not add any explanation.

${t}`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"";o?(e.value=o.trim(),i.style.color="var(--gn)",i.textContent=`✓ Scaled to ${n}×`):(i.style.color="var(--rd)",i.textContent="Couldn't scale — try again")}catch{i.style.color="var(--rd)",i.textContent="Couldn't reach Claude — check connection"}}async function YS(){const n=p("rsub");n&&(n.textContent="Thinking…");const e=h.inv.map(s=>`${s.name} (${s.qty} ${s.unit})`).join(", "),t=h.recs.map(s=>s.name).join(", "),i=[h.cfg.nopork?"no pork":null,h.cfg.noshellfish?"no shellfish":null,h.cfg.vegetarian?"vegetarian":null,h.cfg.glutenfree?"gluten-free":null,h.cfg.other||null].filter(Boolean).join(", ");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Based on this exact inventory: ${e}
Restrictions: ${i||"none"}
Saved recipes: ${t||"none"}
Suggest 5 complete meals I can make RIGHT NOW with no extra shopping. Be specific with names. Format as a numbered list.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",c=p("rbody");c&&(c.innerHTML=`<div style="background:var(--card);border:1px solid var(--ac);border-radius:14px;padding:16px;margin-bottom:12px"><div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ac);margin-bottom:10px">🔍 Make right now — no shopping needed</div><div style="font-size:.88rem;line-height:1.8;color:var(--tx2)">${O_(o)}</div><button class="btn bs bsm" style="margin-top:12px;width:100%" onclick="setRT('all')">← Back to recipes</button></div>`),n&&(n.textContent="Based on your inventory")}catch{n&&(n.textContent="Couldn't reach Claude")}}async function XS(n){const e=h.recs.find(t=>t.id===n);if(!e||!e.description){R("No ingredients listed");return}R("Parsing ingredients…");try{const t=h.inv.map(l=>l.name.toLowerCase()),s=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:400,messages:[{role:"user",content:`Extract a list of ingredient names from this recipe description. Return ONLY a JSON array of strings, no markdown, no quantities, just clean ingredient names. Example: ["chicken","garlic","olive oil"]

Recipe: ${e.description}`}]})})).json(),r=(s.content&&s.content[0]&&s.content[0].text||"").replace(/```json|```/g,"").trim(),c=JSON.parse(r).filter(l=>!t.some(d=>d.includes(l.toLowerCase())||l.toLowerCase().includes(d)));if(!c.length){R("All ingredients already in pantry ✓");return}for(const l of c)await ke({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:l,qty:1,checked:!1,src:"recipe"});R(`Added ${c.length} ingredient${c.length!==1?"s":""} to shopping list 🛒`),Ae("erec"),window.showScreen("shopping")}catch{R("Couldn't parse ingredients")}}function ZS(n,e){h.nr=n,e==="r"?is("rstars",n):e==="c"?is("cstars",n):e==="e"&&is("estars",n)}async function eA(n){const e=h.recs.find(r=>r.id===n);if(!e)return;const t=!e.isPublic,i=se(),s=(i==null?void 0:i.displayName)||localStorage.getItem("ks-who")||"Anonymous";t?(await df(e,s,h.hid),R("Recipe shared with the community!")):(await hf(e.id),R("Recipe removed from community")),await sn({...e,isPublic:t})}let lt=null;function tA(n){if(!n)return 0;const e=n.toLowerCase();let t=0;const i=e.match(/(\d+)\s*(?:hr|hour)/),s=e.match(/(\d+)\s*min/);return i&&(t+=parseInt(i[1])*60),s&&(t+=parseInt(s[1])),t}function Xc(n,e){const t=Math.round(n||0),i=Array.from({length:5},(r,o)=>o<t?"★":"☆").join(""),s=e?`(${e})`:"";return`<span style="color:var(--ac);font-size:.74rem;letter-spacing:1px">${i}</span><span style="font-size:.68rem;color:var(--mt);margin-left:3px">${s}</span>`}async function Zc(){const n=p("rbody");if(n){n.innerHTML='<div class="es"><div class="ei">🌍</div><p>Loading community recipes…</p></div>',h.comPage=0;try{h.comRecs=await ff(),fn()}catch(e){console.error("loadCommunity:",e),n.innerHTML=`<div class="es"><div class="ei">⚠️</div><p>Couldn't load community recipes.</p></div>`}}}function nA(n){h.comCuisine=n,h.comPage=0,fn()}function iA(n){h.comSearch=n,h.comPage=0,fn()}function sA(n){h.comSort=n,h.comPage=0,fn()}function rA(n){const e=h.comTags.indexOf(n);e>=0?h.comTags.splice(e,1):h.comTags.push(n),h.comPage=0,fn()}function oA(n){h.comTime=n,h.comPage=0,fn()}function aA(n){h.comMinRating=parseInt(n)||0,h.comPage=0,fn()}function fn(){const n=p("rbody");if(!n)return;lt&&(lt.disconnect(),lt=null);let e=[...h.comRecs];if(h.comCuisine&&h.comCuisine!=="all"&&(e=e.filter(y=>(y.cuisine||"").toLowerCase().includes(h.comCuisine.toLowerCase())||(y.tags||[]).some(w=>w.toLowerCase().includes(h.comCuisine.toLowerCase())))),h.comSearch){const y=h.comSearch.toLowerCase();e=e.filter(w=>(w.title||"").toLowerCase().includes(y)||(w.tags||[]).join(" ").toLowerCase().includes(y)||(w.cuisine||"").toLowerCase().includes(y)||(w.authorUsername||"").toLowerCase().includes(y)||(w.authorName||"").toLowerCase().includes(y))}h.comTags.length&&(e=e.filter(y=>h.comTags.every(w=>(y.tags||[]).includes(w)))),h.comTime&&h.comTime!=="any"&&(e=e.filter(y=>{const w=tA(y.cookTime||y.totalTime);return w?h.comTime==="under30"?w<=30:h.comTime==="30to60"?w>30&&w<=60:h.comTime==="over60"?w>60:!0:!1})),h.comMinRating>0&&(e=e.filter(y=>(y.avgRating||0)>=h.comMinRating)),h.comSort==="popular"?e.sort((y,w)=>(w.likes||0)-(y.likes||0)):h.comSort==="rated"?e.sort((y,w)=>(w.avgRating||0)-(y.avgRating||0)):e.sort((y,w)=>new Date(w.createdAt||0)-new Date(y.createdAt||0));const i=e.slice(0,(h.comPage+1)*20),s=i.length<e.length,r=p("rsub");r&&(r.textContent=e.length+" community recipe"+(e.length!==1?"s":""));const c=[["all","All Cuisines"],["turkish","Turkish"],["mediterranean","Mediterranean"],["italian","Italian"],["mexican","Mexican"],["asian","Asian"],["american","American"],["indian","Indian"],["bangladeshi","Bangladeshi"],["japanese","Japanese"],["thai","Thai"],["french","French"],["korean","Korean"],["middle eastern","Middle Eastern"]].map(([y,w])=>`<option value="${y}"${h.comCuisine===y?" selected":""}>${w}</option>`).join(""),d=["Quick","Healthy","Kid-Friendly","Date Night","Batch Cook","Under 30 min"].map(y=>{const w=h.comTags.includes(y);return`<div class="com-tag${w?" com-tag-sel":""}" onclick="toggleComTag('${y}')" style="cursor:pointer;${w?"background:var(--ac);color:#fff;border-color:var(--ac)":""}">${y}</div>`}).join("");let m=`<div style="margin-bottom:14px">
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
  </div>`;if(!e.length){const y=h.comSearch||h.comCuisine!=="all"||h.comTags.length||h.comTime!=="any"||h.comMinRating>0;m+=`<div class="es"><div class="ei">🌍</div><p>${y?"No recipes match your filters.":"No community recipes yet. Be the first to share!"}</p></div>`,n.innerHTML=m;return}if(i.forEach(y=>{const w=(y.tags||[]).slice(0,3).map(B=>`<span class="com-tag">${B}</span>`).join(""),C=y.authorUsername?`@${y.authorUsername}`:y.authorName||"Anonymous",P=y.cookTime||y.totalTime||"",$=y.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${y.imageUrl}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",L=y.commentCount||0;m+=`<div class="rcd com-rcd" onclick="openComRecipe('${y.id}')">
      ${$}
      <div class="rrow">
        <div class="rnm" style="flex:1">${y.title||"Untitled"}</div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <span style="font-size:.78rem;color:var(--rd)">❤️ ${y.likes||0}</span>
          ${L?`<span style="font-size:.78rem;color:var(--mt)">💬 ${L}</span>`:""}
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-top:4px;flex-wrap:wrap">
        ${y.cuisine?`<span style="font-size:.72rem;color:var(--ac);font-weight:600">${y.cuisine}</span>`:""}
        ${y.avgRating||y.ratingCount?`<span>${Xc(y.avgRating,y.ratingCount)}</span>`:""}
        ${P?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${P}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${w}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${C}</div>
      </div>
    </div>`}),s&&(m+='<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>'),n.innerHTML=m,s){const y=p("com-scroll-sentinel");y&&(lt=new IntersectionObserver(w=>{w[0].isIntersecting&&(h.comPage++,am(e,n))},{rootMargin:"200px"}),lt.observe(y))}}function am(n,e){const i=h.comPage*20,s=i+20,r=n.slice(i,s),o=s<n.length;let c="";r.forEach(d=>{const m=(d.tags||[]).slice(0,3).map($=>`<span class="com-tag">${$}</span>`).join(""),y=d.authorUsername?`@${d.authorUsername}`:d.authorName||"Anonymous",w=d.cookTime||d.totalTime||"",C=d.commentCount||0,P=d.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${d.imageUrl}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"";c+=`<div class="rcd com-rcd" onclick="openComRecipe('${d.id}')">
      ${P}
      <div class="rrow">
        <div class="rnm" style="flex:1">${d.title||"Untitled"}</div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <span style="font-size:.78rem;color:var(--rd)">❤️ ${d.likes||0}</span>
          ${C?`<span style="font-size:.78rem;color:var(--mt)">💬 ${C}</span>`:""}
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-top:4px;flex-wrap:wrap">
        ${d.cuisine?`<span style="font-size:.72rem;color:var(--ac);font-weight:600">${d.cuisine}</span>`:""}
        ${d.avgRating||d.ratingCount?`<span>${Xc(d.avgRating,d.ratingCount)}</span>`:""}
        ${w?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${w}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${m}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${y}</div>
      </div>
    </div>`});const l=p("com-scroll-sentinel");if(l&&l.remove(),lt&&(lt.disconnect(),lt=null),e.insertAdjacentHTML("beforeend",c),o){e.insertAdjacentHTML("beforeend",'<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>');const d=p("com-scroll-sentinel");d&&(lt=new IntersectionObserver(m=>{m[0].isIntersecting&&(h.comPage++,am(n,e))},{rootMargin:"200px"}),lt.observe(d))}}async function Qa(n){var b;const e=h.comRecs.find(I=>I.id===n);if(!e)return;h._openComId=n;const t=(b=se())==null?void 0:b.uid,[i,s,r,o]=await Promise.all([b_(n),__(n).catch(()=>[]),C_(n).catch(()=>null),E_(n)]);i?h.myLikes.add(n):h.myLikes.delete(n),s.sort((I,E)=>new Date(I.createdAt||0)-new Date(E.createdAt||0)),h._comComments=s;const c=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`,l=e.imageUrl?`<div style="margin:-16px -16px 16px;overflow:hidden;max-height:240px"><img src="${e.imageUrl}" alt="" style="width:100%;height:240px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",d=[e.prepTime?`Prep: ${e.prepTime}`:"",e.cookTime?`Cook: ${e.cookTime}`:"",e.totalTime?`Total: ${e.totalTime}`:"",e.servings?`Serves: ${e.servings}`:""].filter(Boolean),m=d.length?`<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px">${d.map(I=>`<span style="font-size:.74rem;color:var(--mt);background:var(--b1);border-radius:8px;padding:4px 10px">${I}</span>`).join("")}</div>`:"",y=(e.ratingCount||0)>0?`<div style="margin-bottom:6px">${Xc(e.avgRating,e.ratingCount)}</div>`:"",w=(e.tags||[]).map(I=>`<span class="com-tag">${I}</span>`).join(""),C=e.authorUsername?`@${e.authorUsername}`:e.authorName||"Anonymous",P=h.myLikes.has(n),$=t&&t===e.authorUid;let L="";e.ingredientsRaw&&e.ingredientsRaw.length?L=`<ul style="margin:0;padding-left:18px;font-size:.88rem;color:var(--tx2);line-height:2">${e.ingredientsRaw.map(I=>`<li>${(typeof I=="string"?I:(I.amount||"")+" "+(I.unit||"")+" "+(I.name||"")).replace(/</g,"&lt;").replace(/>/g,"&gt;").trim()}</li>`).join("")}</ul>`:e.ingredients&&(L=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.ingredients||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);let B="";e.stepsRaw&&e.stepsRaw.length?B=`<ol style="margin:0;padding-left:22px;font-size:.88rem;color:var(--tx2);line-height:1.8">${e.stepsRaw.map(I=>`<li style="margin-bottom:8px">${(typeof I=="string"?I:I.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</li>`).join("")}</ol>`:e.steps&&(B=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.steps||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);const G=pA(s.slice(0,20),n,t,$),M=s.length>20,U=(r==null?void 0:r.rating)||0,Q=$?`<div style="font-size:.78rem;color:var(--mt);font-style:italic">You can't rate your own recipe</div>`:Array.from({length:5},(I,E)=>`<span class="star${E<U?" on":""}" onclick="rateComRecipe('${n}',${E+1})" style="cursor:pointer;font-size:1.3rem">${E<U?"★":"☆"}</span>`).join(""),X=$?`<button class="btn bd bsm" onclick="unpublishComRecipe('${n}')" style="margin-top:12px;width:100%">🚫 Unpublish this recipe</button>`:"",T=!$&&t?`<button class="btn-report" onclick="openReportSheet('recipe','${n}','${n}')" title="Report recipe">🚩 Report</button>`:"";p("erecbody").innerHTML=`
    ${l}
    <div style="margin-bottom:14px">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px">
        <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;line-height:1.3;margin-bottom:6px;flex:1">${e.title||"Untitled"}</div>
        ${T}
      </div>
      ${e.cuisine?`<div style="font-size:.78rem;color:var(--ac);font-weight:600;margin-bottom:6px">${e.cuisine}</div>`:""}
      ${y}
      <div style="font-size:.76rem;color:var(--mt)">by ${C} · ${e.createdAt?new Date(e.createdAt).toLocaleDateString():""}</div>
      ${w?`<div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:8px">${w}</div>`:""}
    </div>

    ${m}

    <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap">
      <button class="btn ${P?"bp":"bs"} bsm" onclick="likeComRecipe('${n}')" id="com-like-btn">
        ${P?"❤️":"🤍"} ${e.likes||0} Like${(e.likes||0)!==1?"s":""}
      </button>
      <button class="btn bs bsm" style="flex:1" onclick="saveComToKitchen('${n}')">📖 Save to my recipes</button>
      <button class="btn bs bsm" onclick="shareComRecipe('${n}')">📤 Share</button>
    </div>

    ${L?`<div class="frow"><label class="flbl">Ingredients</label>${L}</div>`:""}
    ${B?`<div class="frow"><label class="flbl">Instructions</label>${B}</div>`:""}

    <div style="background:var(--card);border:1px solid var(--b2);border-radius:12px;padding:14px;margin-top:16px">
      <div class="flbl" style="margin-bottom:8px">Rate this recipe</div>
      <div id="com-rating-stars" style="display:flex;align-items:center;gap:2px">${Q}</div>
      ${U?`<div id="com-rating-label" style="font-size:.72rem;color:var(--mt);margin-top:4px">You rated this ${U}★</div>`:'<div id="com-rating-label"></div>'}
    </div>

    <div style="margin-top:16px">
      <div class="flbl" style="margin-bottom:10px">Comments (${s.length})</div>
      <div id="com-comments">${G||'<div style="font-size:.82rem;color:var(--mt);padding:8px 0">No comments yet.</div>'}</div>
      ${M?`<button class="btn bs bsm" id="com-load-more" onclick="loadMoreComments()" style="width:100%;margin-top:8px">Load more comments (${s.length-20} remaining)</button>`:""}
      <div style="display:flex;gap:8px;margin-top:12px">
        <input class="fi" id="com-cmt-input" placeholder="Add a comment…" maxlength="500" style="flex:1" onkeydown="if(event.key==='Enter')addComComment('${n}')"/>
        <button class="btn bp bsm" onclick="addComComment('${n}')">Post</button>
      </div>
      <div style="font-size:.68rem;color:var(--mt);margin-top:4px;text-align:right" id="com-cmt-counter">0 / 500</div>
    </div>

    <div style="margin-top:16px;padding:12px;background:var(--card);border:1px solid var(--b1);border-radius:12px">
      <div style="font-size:.72rem;color:var(--mt);margin-bottom:6px">Share link (viewable without sign-in)</div>
      <div style="font-size:.8rem;color:var(--ac);word-break:break-all;cursor:pointer" onclick="navigator.clipboard.writeText('${c}');showNotif('Link copied!')">${c}</div>
    </div>

    ${X}`;const v=p("com-cmt-input");v&&v.addEventListener("input",()=>{const I=p("com-cmt-counter");I&&(I.textContent=`${v.value.length} / 500`)}),Tt("erec")}async function cA(n,e){return cm(n,e)}async function cm(n,e){if(!se()){R("Sign in to rate recipes");return}try{const i=await k_(n,e);if(!i){R("You can't rate your own recipe");return}const s=h.comRecs.find(c=>c.id===n);s&&(s.ratingSum=i.ratingSum,s.ratingCount=i.ratingCount,s.avgRating=i.avgRating);const r=p("com-rating-stars");r&&(r.innerHTML=Array.from({length:5},(c,l)=>`<span class="star${l<e?" on":""}" onclick="rateComRecipe('${n}',${l+1})" style="cursor:pointer;font-size:1.3rem">${l<e?"★":"☆"}</span>`).join(""));const o=p("com-rating-label");o&&(o.textContent=`You rated this ${e}★`),R(`Rated ${e}★`)}catch(i){console.error("rateComRecipe:",i),R("Couldn't submit rating")}}async function lA(n){if(confirm("Remove this recipe from the community?"))try{await hf(n),h.comRecs=h.comRecs.filter(e=>e.id!==n),R("Recipe unpublished"),Ae("erec"),fn()}catch(e){console.error("unpublishComRecipe:",e),R("Couldn't unpublish recipe")}}async function uA(n){if(!se()){R("Sign in to like recipes");return}const t=h.myLikes.has(n);try{await v_(n,t),t?h.myLikes.delete(n):h.myLikes.add(n);const i=h.comRecs.find(r=>r.id===n);i&&(i.likes=(i.likes||0)+(t?-1:1));const s=p("com-like-btn");if(s){const r=h.myLikes.has(n);s.className=`btn ${r?"bp":"bs"} bsm`,s.innerHTML=`${r?"❤️":"🤍"} ${(i==null?void 0:i.likes)||0} Like${((i==null?void 0:i.likes)||0)!==1?"s":""}`}R(t?"Like removed":"Liked!")}catch(i){console.error("likeComRecipe:",i),R("Couldn't update like")}}async function dA(n){if(!se()){R("Sign in to save recipes");return}const t=h.comRecs.find(i=>i.id===n);if(t)try{await T_(t),R("Recipe saved to your kitchen! 📖"),Ae("erec")}catch(i){console.error("saveComToKitchen:",i),R("Couldn't save recipe")}}async function hA(n){var r;const e=se();if(!e){R("Sign in to comment");return}const t=p("com-cmt-input"),i=(r=t==null?void 0:t.value)==null?void 0:r.trim();if(!i)return;if(i.length>500){R("Comment must be 500 characters or less");return}const s=e.displayName||localStorage.getItem("ks-who")||"Anonymous";try{const o=await w_(n,i,s);t.value="";const c=p("com-cmt-counter");c&&(c.textContent="0 / 500");const l=p("com-comments"),d=h.comRecs.find(y=>y.id===n),m=e.uid===(d==null?void 0:d.authorUid);l&&o&&(l.querySelector("div[style*='color:var(--mt)']")&&!l.querySelector("div[style*='border-bottom']")&&(l.innerHTML=""),l.innerHTML+=el(o,n,e.uid,m)),h._comComments&&h._comComments.push(o),R("Comment posted!")}catch(o){console.error("addComComment:",o),R("Couldn't post comment")}}async function fA(n){const e=h.comRecs.find(s=>s.id===n),t=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`,i=(e==null?void 0:e.title)||"Recipe";if(navigator.share)try{await navigator.share({title:i,text:`Check out this recipe: ${i}`,url:t});return}catch{}try{await navigator.clipboard.writeText(t),R("Link copied!")}catch{R("Couldn't copy link")}}function el(n,e,t,i){const s=(n.authorUsername?"@"+n.authorUsername:n.authorName)||"Anonymous",r=n.createdAt?new Date(n.createdAt).toLocaleDateString():"",o=(n.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;"),c=t&&(n.authorUid===t||i),l=t&&n.authorUid!==t;let d="";return c&&(d+=`<button class="btn-report" onclick="deleteComComment('${e}','${n.id}')" title="Delete comment" style="font-size:.7rem">🗑</button>`),l&&(d+=`<button class="btn-report" onclick="openReportSheet('comment','${n.id}','${e}')" title="Report comment" style="font-size:.7rem">🚩</button>`),`<div class="com-comment-row" id="cmt-${n.id}" style="padding:10px 0;border-bottom:1px solid var(--b1)">
    <div style="display:flex;justify-content:space-between;align-items:center">
      <span style="font-size:.78rem;font-weight:600">${s}</span>
      <div style="display:flex;align-items:center;gap:6px">
        ${d}
        <span style="font-size:.68rem;color:var(--mt)">${r}</span>
      </div>
    </div>
    <div style="font-size:.84rem;color:var(--tx2);margin-top:4px;line-height:1.5">${o}</div>
  </div>`}function pA(n,e,t,i){return n.length?n.map(s=>el(s,e,t,i)).join(""):""}function mA(){var d;const n=h._openComId,e=(d=se())==null?void 0:d.uid,t=h.comRecs.find(m=>m.id===n),i=e&&e===(t==null?void 0:t.authorUid),s=p("com-comments");if(!s||!h._comComments)return;const r=s.querySelectorAll(".com-comment-row").length,o=h._comComments.slice(r,r+20);if(o.length){const m=o.map(y=>el(y,n,e,i)).join("");s.insertAdjacentHTML("beforeend",m)}const c=h._comComments.length-r-o.length,l=p("com-load-more");l&&(c>0?l.textContent=`Load more comments (${c} remaining)`:l.remove())}async function gA(n,e){if(confirm("Delete this comment?"))try{await R_(n,e);const t=document.getElementById("cmt-"+e);t&&t.remove(),h._comComments&&(h._comComments=h._comComments.filter(i=>i.id!==e)),R("Comment deleted")}catch(t){console.error("deleteComComment:",t),R("Couldn't delete comment")}}function yA(n,e,t){if(!se()){R("Sign in to report content");return}h._reportTarget={type:n,targetId:e,recipeId:t};const s=p("report-sheet"),r=p("reportBackdrop");s&&s.classList.add("active"),r&&r.classList.add("active")}function lm(){const n=p("report-sheet"),e=p("reportBackdrop");n&&n.classList.remove("active"),e&&e.classList.remove("active"),h._reportTarget=null}async function vA(n){const e=h._reportTarget;if(e){try{const t=await x_(e.type,e.targetId,n,e.recipeId);R(t==="duplicate"?"You've already reported this":"Thanks for your report")}catch(t){console.error("submitComReport:",t),R("Couldn't submit report")}lm()}}async function um(){try{const n=await N_(),e=n>9?"9+":String(n),t=n>0,i=p("recipes-notif-badge");i&&(i.textContent=e,i.style.display=t?"flex":"none");const s=p("recipes-notif-badge-hdr");s&&(s.textContent=e,s.style.display=t?"flex":"none")}catch{}}async function wA(){if(!se()){R("Sign in to view notifications");return}try{const e=await L_();D_().then(()=>um());const t=p("erecbody");if(!t)return;let i=`<div style="margin-bottom:14px">
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;margin-bottom:6px">Notifications</div>
      <div style="font-size:.76rem;color:var(--mt)">${e.length?e.length+" notification"+(e.length!==1?"s":""):"No notifications yet"}</div>
    </div>`;e.length?e.forEach(s=>{const r=!s.read,o=s.createdAt?new Date(s.createdAt).toLocaleDateString():"";s.type==="comment"&&(i+=`<div class="rcd" style="${r?"border-left:3px solid var(--ac);":""}" onclick="openComRecipeFromNotif('${s.recipeId}')">
            <div style="font-size:.84rem;font-weight:${r?"600":"400"};line-height:1.5">
              <span style="color:var(--ac)">${(s.commenterUsername||"Someone").replace(/</g,"&lt;")}</span> commented on your recipe
              <span style="font-weight:600">${(s.recipeName||"").replace(/</g,"&lt;")}</span>
            </div>
            <div style="font-size:.68rem;color:var(--mt);margin-top:4px">${o}</div>
          </div>`)}):i+=`<div class="es"><div class="ei">🔔</div><p>When someone comments on your recipe, you'll see it here.</p></div>`,t.innerHTML=i,Tt("erec")}catch(e){console.error("openNotifications:",e),R("Couldn't load notifications")}}async function _A(n){if(Ae("erec"),!h.comRecs.length)try{h.comRecs=await ff()}catch{}if(h.comRecs.find(e=>e.id===n)){h.rt="community",document.querySelectorAll(".rtab").forEach(t=>t.classList.remove("active"));const e=p("rtab-community");e&&e.classList.add("active"),setTimeout(()=>Qa(n),100)}else try{const e=await y_(n);e?(h.comRecs.push({id:n,...e}),h.rt="community",setTimeout(()=>Qa(n),100)):R("Recipe no longer available")}catch{R("Couldn't load recipe")}}function bA(){const n=h.cookLog,e=h.wasteLog;let t=0;for(let M=0;M<60;M++){const U=new Date;U.setDate(U.getDate()-M);const Q=U.toISOString().split("T")[0];if(n.find(X=>X.date===Q))t++;else if(M>0)break}const i=p("ins-streak-num");i&&(i.textContent=t);const s=p("ins-total-cooked");s&&(s.textContent=n.length);const r=p("ins-waste-count");r&&(r.textContent=e.length);const o=p("ins-sub");o&&(o.textContent=n.length?" "+n.length+" meals cooked":"Your kitchen at a glance");const c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],l=p("ins-week");if(l){const M=wi().map(U=>{const Q=U.toISOString().split("T")[0],X=h.mp[Q],T=Q===Gt();return`<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--b1)${T?";background:var(--acd);margin:0 -4px;padding:7px 4px;border-radius:6px":""}">
        <div style="font-size:.72rem;color:var(--mt);min-width:30px;font-weight:${T?"600":"400"}">${c[U.getDay()]}</div>
        <div style="font-size:.72rem;color:var(--mt);min-width:20px">${U.getDate()}</div>
        <div style="font-size:.84rem;color:${X?"var(--tx)":"var(--mt)"};font-style:${X?"normal":"italic"};flex:1">${X||"—"}</div>
        ${T?"<div style='font-size:.66rem;color:var(--ac);font-weight:600'>TODAY</div>":""}
      </div>`}).join("");l.innerHTML=M}const d=n.slice(0,7).map(M=>M.name),m=p("ins-variety-nudge"),y=p("ins-variety-msg");if(m&&d.length>=3){const M={};d.forEach(v=>{const b=v.toLowerCase();M[b]=(M[b]||0)+1});const U=Object.entries(M).filter(([,v])=>v>=3),Q=Object.values(h.mp).filter(Boolean),X=Q.some(v=>/curry|dal|rice|bengali|biryani|hilsa|mustard|lentil/i.test(v)),T=Q.some(v=>/kebab|köfte|pide|börek|meze|turkish|pilav|lahmacun/i.test(v));U.length?(m.style.display="block",y.textContent=`You've cooked "${U[0][0]}" ${U[0][1]} times this week. Time to mix it up?`):!X&&Q.length>=3?(m.style.display="block",y.textContent="No Bangladeshi dishes this week — how about a dal, biryani, or fish curry?"):!T&&Q.length>=3?(m.style.display="block",y.textContent="No Turkish dishes planned — köfte, mercimek çorbası, or a pilav would be great this week!"):m.style.display="none"}else m&&(m.style.display="none");const w={};n.forEach(M=>{w[M.name]=(w[M.name]||0)+1});const C=Object.entries(w).sort((M,U)=>U[1]-M[1]).slice(0,6),P=C[0]?C[0][1]:1,$=p("ins-cooked");if($)if(!C.length)$.innerHTML='<div class="es" style="padding:16px"><p>Cook some meals to see stats!</p></div>';else{const M=["🥇","🥈","🥉","4️⃣","5️⃣","6️⃣"];$.innerHTML=C.map(([U,Q],X)=>`<div class="ibar-row"><div style="font-size:.9rem;margin-right:4px">${M[X]||""}</div><div class="ibar-lbl">${U}</div><div class="ibar-track"><div class="ibar-fill" style="width:${Math.round(Q/P*100)}%"></div></div><div class="ibar-val">${Q}×</div></div>`).join("")}const L={Bangladeshi:"#e8a44a",Turkish:"#c0392b",Mediterranean:"#27ae60",American:"#3498db",Italian:"#e74c3c",Asian:"#9b59b6",Other:"#95a5a6"},B=p("ins-cuisine");if(B&&n.length){const M=T=>{const v=T.toLowerCase();return/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(v)?"Bangladeshi":/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner|iskender/i.test(v)?"Turkish":/pasta|pizza|risotto|gnocchi|italian/i.test(v)?"Italian":/tacos|burrito|enchilada|mexican/i.test(v)?"Mexican":/sushi|ramen|stir.?fry|fried rice|asian|chinese|thai|japanese/i.test(v)?"Asian":/burger|sandwich|mac|bbq|american/i.test(v)?"American":"Other"},U={};n.slice(0,20).forEach(T=>{const v=M(T.name);U[v]=(U[v]||0)+1});const Q=Object.values(U).reduce((T,v)=>T+v,0),X=Object.entries(U).sort((T,v)=>v[1]-T[1]);B.innerHTML=X.map(([T,v])=>{const b=Math.round(v/Q*100),I=L[T]||"#95a5a6";return`<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span style="font-size:.82rem;font-weight:500">${T}</span><span style="font-size:.74rem;color:var(--mt)">${v} meals · ${b}%</span></div><div style="height:8px;background:var(--b1);border-radius:4px;overflow:hidden"><div style="height:100%;width:${b}%;background:${I};border-radius:4px;transition:width .6s ease"></div></div></div>`}).join("")||'<div class="es" style="padding:16px"><p>Cook more meals to see your cuisine breakdown.</p></div>'}const G=p("ins-waste");G&&(G.innerHTML=e.length?e.slice(0,10).map(M=>`<div class="waste-item"><span style="font-size:.86rem">${M.name}</span><span style="font-size:.74rem;color:var(--rd)">${M.date}</span></div>`).join(""):'<div class="es" style="padding:16px"><p>Nothing wasted yet — great job! 🎉</p></div>')}function TA(){const n=["fridge","freezer","pantry"].map(o=>{const c=h.inv.filter(l=>l.location===o);return c.length?eo(o).toUpperCase()+": "+c.map(l=>`${l.name} (${l.qty} ${l.unit})`).join(", "):""}).filter(Boolean).join(`
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
Always use this format so the app can offer a one-tap save button. You can include normal text before/after recipe blocks.`}function IA(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<li>$1</li>").replace(/^[-•]\s+(.+)$/gm,"<li>$1</li>").replace(/\n/g,"<br>")}async function dm(){const n=p("chi"),e=n.value.trim();if(!e)return;n.value="",hm(n),h.chat.push({role:"user",content:e}),ha("user",e);const t=p("csb");t&&(t.disabled=!0);const i="thinking-"+Date.now(),s=p("chmsgs");s.innerHTML+=`<div class="cb asst thinking" id="${i}">Thinking…</div>`,s.scrollTop=s.scrollHeight;try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:800,system:TA(),messages:h.chat.map(d=>({role:d.role,content:d.content}))})})).json(),c=o.content&&o.content[0]&&o.content[0].text||"Sorry, I couldn't process that.",l=p(i);l&&l.remove(),h.chat.push({role:"assistant",content:c}),ha("assistant",c)}catch{const o=p(i);o&&o.remove(),ha("assistant","Sorry, I couldn't reach Claude. Check your connection and try again.")}t&&(t.disabled=!1)}function EA(n){const e=[];return{cleanText:n.replace(/:::RECIPE:::\s*([\s\S]*?)\s*:::END:::/g,(i,s)=>{try{const r=JSON.parse(s.trim());r.title&&e.push(r)}catch{}return""}).trim(),recipes:e}}function SA(n){const e=JSON.stringify(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;"),t=(n.ingredients||"").split(`
`).slice(0,3).join(", ");return`<div style="background:var(--card);border:1.5px solid var(--ac);border-radius:14px;padding:16px;margin:10px 0">
    <div style="font-family:'Fraunces',serif;font-size:1.1rem;font-weight:300;color:var(--ac);margin-bottom:6px">${(n.title||"").replace(/</g,"&lt;")}</div>
    ${n.cuisine?`<div style="font-size:.72rem;color:var(--mt);margin-bottom:6px">${n.cuisine}${n.cookTime?" · "+n.cookTime:""}${n.servings?" · "+n.servings+" servings":""}</div>`:""}
    ${t?`<div style="font-size:.8rem;color:var(--tx2);line-height:1.5;margin-bottom:10px">${t.replace(/</g,"&lt;")}…</div>`:""}
    <button class="btn bp bsm" onclick="importChatRecipe(this)" data-recipe="${e}">📖 Add to My Recipes</button>
  </div>`}async function AA(n){try{const e=JSON.parse(n.dataset.recipe),t="rec-"+Date.now(),i=[e.ingredients||"",e.steps?`

Steps:
`+e.steps:""].join("").trim();await sn({id:t,name:e.title||"Untitled Recipe",rating:0,favorited:!1,notes:"",description:i,source:"Claude Chat",sourceUrl:null,tags:[],cuisine:e.cuisine||"",cookTime:e.cookTime||"",servings:e.servings||"",cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:!1}),n.textContent="✓ Saved!",n.disabled=!0,n.style.background="var(--gn)",R("Recipe saved! 📖")}catch{R("Couldn't save recipe")}}function ha(n,e){const t=p("chmsgs");if(t){if(n==="assistant"){const{cleanText:i,recipes:s}=EA(e);if(i){const r=document.createElement("div");r.className="cb asst",r.innerHTML=IA(i),t.appendChild(r)}s.forEach(r=>{const o=document.createElement("div");o.style.maxWidth="88%",o.style.alignSelf="flex-start",o.innerHTML=SA(r),t.appendChild(o)})}else{const i=document.createElement("div");i.className="cb user",i.innerHTML=e,t.appendChild(i)}t.scrollTop=t.scrollHeight}}function kA(n){const e=p("chi");e&&(e.value=n.textContent),dm()}function CA(){h.chat=[];const n=p("chmsgs");n&&(n.innerHTML=`<div class="cb asst">Hey! 👋 I'm your kitchen assistant — I can help with recipes, meal planning, grocery tips, and cooking questions. What's on your mind?</div>`)}function hm(n){n.style.height="auto",n.style.height=Math.min(n.scrollHeight,120)+"px"}let ys=!1,Tr=!1,Ir=null;function tl(){if(ys)return;const n=p("scanner-video");if(!n)return;const e=p("scan-status");e&&(e.textContent="Starting camera…",e.style.display="block"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{RA(n,e)})})}function RA(n,e){Quagga.init({inputStream:{name:"Live",type:"LiveStream",target:n,constraints:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}},locator:{patchSize:"medium",halfSample:!0},decoder:{readers:["ean_reader","ean_8_reader","upc_reader","upc_e_reader","code_128_reader","code_39_reader"]},locate:!0,frequency:10},function(t){if(t){console.error("Scanner init error:",t);const i=p("scerr");i&&(i.textContent="⚠️ Could not access camera. Try entering the barcode manually.",i.style.display="block"),e&&(e.style.display="none");return}xA(n),Quagga.start(),ys=!0,e&&(e.textContent="Scanning…"),setTimeout(()=>PA(n),2e3)}),Quagga.onDetected(fm)}function xA(n){n.querySelectorAll("video").forEach(e=>{e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,e.play().catch(()=>{})})}async function PA(n){if(!ys)return;const e=n.querySelector("video");if(!(!e||e.videoWidth>0)){console.warn("Camera feed appears black — retrying with manual getUserMedia");try{const t=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}});Ir=t,e.srcObject&&e.srcObject.getTracks().forEach(i=>i.stop()),e.srcObject=t,e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,await e.play()}catch(t){console.error("Manual camera retry failed:",t)}}}function nl(){if(ys){try{Quagga.stop()}catch{}Quagga.offDetected(fm),Ir&&(Ir.getTracks().forEach(n=>n.stop()),Ir=null),ys=!1,Tr=!1}}async function fm(n){var s,r;if(Tr)return;const e=n&&n.codeResult&&n.codeResult.code;if(!e)return;const t=((r=(s=n.codeResult.decodedCodes)==null?void 0:s.filter(o=>o.error!==void 0))==null?void 0:r.map(o=>o.error))||[];if(!((t.length?t.reduce((o,c)=>o+c,0)/t.length:1)>.25)){Tr=!0,LA(),nl(),p("scanbody").style.display="none",p("scspin").style.display="block",p("scst").textContent="Found "+e+" — looking up…";try{const o=await pm(e);h.cp=o,p("aqty").value=1,p("aexp").value="",il("fridge",p("rl-fridge")),mm(o)}catch{const o=p("scerr");o.textContent="⚠️ Lookup failed. Check your connection or enter the barcode manually.",o.style.display="block"}p("scanbody").style.display="block",p("scspin").style.display="none",Tr=!1}}function LA(){const n=p("scan-success");n&&(n.style.display="flex",n.style.animation="none",n.offsetHeight,n.style.animation="",setTimeout(()=>{n.style.display="none"},500))}function DA(){Ae("result"),Tt("scan"),p("scerr").style.display="none",tl()}function NA(){h.scanDestList=!0,Tt("scan");const n=p("scanovttl");n&&(n.textContent="Scan → Shopping List");const e=p("scan-dest-hint");e&&(e.textContent="Running low? Scan to add to your shopping list."),p("scerr").style.display="none",tl()}function $A(){h.scanDestList=!1,Tt("scan");const n=p("scanovttl");n&&(n.textContent="Scan Barcode");const e=p("scan-dest-hint");e&&(e.textContent="Scan a barcode to add to your pantry or shopping list."),p("scerr").style.display="none",tl()}function OA(){const n=p("scanNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=p("scanNoteInp");t&&t.focus()}}function MA(){if(!h.cp)return;const n=h.cp.notFound?"Barcode "+h.cp.barcode:h.cp.name,e=p("scanNoteInp"),t=e?e.value.trim():"",i=parseInt(p("aqty").value)||1,s={id:Date.now().toString(),name:n,qty:i,checked:!1,src:"scan"};h.cp.brand&&(s.brand=h.cp.brand),h.cp.image&&(s.image=h.cp.image),t&&(s.note=t),ke(s),R("Added to list: "+n),Ae("result"),Ae("scan"),h.scanDestList=!1,e&&(e.value="");const r=p("scanNoteWrap");r&&(r.style.display="none"),window.showScreen("shopping")}function VA(){const n=p("mentry");n.style.display=n.style.display==="none"?"block":"none"}async function UA(){const n=p("meinp").value.trim();if(!n)return;nl(),p("scanbody").style.display="none",p("scspin").style.display="block",p("scst").textContent="Looking up…";const e=await pm(n);h.cp=e,p("aqty").value=1,p("aexp").value="",il("fridge",p("rl-fridge")),p("meinp").value="",mm(e),p("scanbody").style.display="block",p("scspin").style.display="none"}async function pm(n){try{const e=await fetch("/api/barcode?code="+encodeURIComponent(n));if(e.ok){const t=await e.json();if(t.found&&t.product)return{...t.product,notFound:!1}}}catch{}return{barcode:n,name:"",brand:"",quantity:"",category:"General",image:null,source:null,description:"",notFound:!0}}function FA(n,e){switch(n){case"Open Food Facts":return`https://world.openfoodfacts.org/product/${e}`;case"Open Beauty Facts":return`https://world.openbeautyfacts.org/product/${e}`;case"Open Pet Food Facts":return`https://world.openpetfoodfacts.org/product/${e}`;case"UPC Item DB":return`https://www.upcitemdb.com/upc/${e}`;case"Edamam":return"https://www.edamam.com/food-database/en/";default:return"#"}}function mm(n){var s;Ae("scan"),p("resttl").textContent=n.notFound?"Not Found":"Product Found ✓",p("aunit").value=n.quantity||"unit";let e="";if(n.notFound)e=`<div class="nfb">⚠️ Barcode <code>${n.barcode}</code> not found in any database. Enter name:<input class="fi" id="mnm" placeholder="Product name (required)" oninput="valAdd()" style="margin-top:10px"/></div>`;else{const r=n.image?`<img src="${n.image}" class="pimg" onerror="this.style.display='none'"/>`:'<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">🛒</div>',o=n.description?`<div class="pdsc">${n.description}</div>`:"",c=n.source?`<a href="${FA(n.source,n.barcode)}" target="_blank" rel="noopener" class="srcb" style="text-decoration:none">${n.source} ↗</a>`:"";e=`<div class="pcard"><div class="phdr">${r}<div style="flex:1"><div class="pnm">${n.name}</div>${n.brand?`<div class="pbr">${n.brand}</div>`:""}<div class="pbc">${n.barcode}</div><span class="bdg">${n.category}</span>${c}</div></div>${o}</div>`}p("resbody").innerHTML=e;const t=(s=p("ov-result"))==null?void 0:s.querySelector(".ovbody");if(t){const r=t.querySelector(".frow"),o=t.querySelectorAll(".frow")[1],c=t.querySelectorAll(".qrow")[1];r&&(r.style.display=h.scanDestList?"none":""),o&&(o.style.display=h.scanDestList?"none":""),c&&(c.style.display=h.scanDestList?"none":"")}const i=p("scan-dest-btns");i&&(h.scanDestList?i.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2;background:var(--gn);border-color:var(--gn)" id="addbtn" onclick="addScannedToList()">🛒 Add to Shopping List</button>
      </div>`:i.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2" id="addbtn" onclick="addToInv()">📦 Add to Pantry</button>
      </div>
      <button class="btn bs bf" style="margin-top:8px;border-color:var(--gn);color:var(--gn)" onclick="addScannedToList()">🛒 Add to Shopping List instead</button>`),n.notFound&&setTimeout(()=>{const r=p("addbtn");r&&(r.disabled=!0)},0),Tt("result")}function il(n,e){h.selR=n,document.querySelectorAll("#ov-result .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function jA(){const n=p("mnm");p("addbtn").disabled=!(n&&n.value.trim())}async function BA(){if(!h.cp)return;const n=p("mnm"),e=h.cp.notFound?n&&n.value.trim()||"":h.cp.name;if(!e)return;const t=p("aunit").value.trim()||"unit",i=Math.max(1,parseInt(p("aqty").value)||1),s=p("aexp").value||null,r="item-"+h.cp.barcode.replace(/\W/g,"-"),o=h.inv.find(c=>c.id===r);await Te({id:r,barcode:h.cp.barcode,name:e,brand:h.cp.brand||"",unit:t,qty:o?o.qty+i:i,location:h.selR,category:h.cp.category||"General",image:h.cp.image||null,source:h.cp.source||null,expiry:s,addedAt:o?o.addedAt:new Date().toLocaleDateString()}),R(o?`+${i} added to ${e}`:`${e} added!`),h.cp=null,Ae("result")}function HA(n){const e=p("aqty");e.value=Math.max(1,(parseInt(e.value)||1)+n)}let Ee=null,or=0,ar=0,ne=null,Ft=null,jt=0,rt=!1,Wn=!1;const cr=80,Yd=.1,Gn=.7,lr=8,Xi="cubic-bezier(0.25, 1.5, 0.5, 1)",kt="cubic-bezier(0.4, 0, 0.2, 1)";function zA(){document.addEventListener("touchstart",e=>{const t=e.target.closest(".swipe-inner");if(!t)return;const i=t.closest(".swipe-wrap");i&&(h.selectMode||(ne&&ne!==i&&(En(ne),ne=null),Ee=t,or=e.touches[0].clientX,ar=e.touches[0].clientY,Ft=null,rt=!1,jt=i.offsetWidth,t.classList.add("swiping")))},{passive:!0}),document.addEventListener("touchmove",e=>{if(!Ee)return;const t=e.touches[0].clientX,i=e.touches[0].clientY,s=t-or,r=i-ar;if(!Ft){if(Math.abs(s)<lr&&Math.abs(r)<lr)return;Ft=Math.abs(s)>Math.abs(r)?"horizontal":"vertical"}if(Ft==="vertical"){Ee.classList.remove("swiping"),Ee=null;return}e.preventDefault();const o=s>=0?0:s;Ee.style.transform=`translateX(${o}px)`;const c=Ee.closest(".swipe-wrap"),l=c==null?void 0:c.querySelector(".swipe-del");if(l&&o<0){const m=Math.min(100,Math.abs(o)/cr*100);l.style.clipPath=`inset(0 0 0 ${100-m}%)`}const d=Math.abs(o)/jt;d>=Gn&&!rt?(rt=!0,navigator.vibrate&&navigator.vibrate(10),c==null||c.classList.add("swipe-threshold")):d<Gn&&rt&&(rt=!1,c==null||c.classList.remove("swipe-threshold"))},{passive:!1}),document.addEventListener("touchend",()=>{if(!Ee)return;const e=Ee,t=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/jt;if(s>=Gn)Xd(t,e);else if(s>=Yd){e.style.transition=`transform 0.4s ${Xi}`,e.style.transform=`translateX(-${cr}px)`;const r=t==null?void 0:t.querySelector(".swipe-del");r&&(r.style.transition=`clip-path 0.3s ${kt}`,r.style.clipPath="inset(0 0 0 0%)"),t==null||t.classList.add("open"),t==null||t.classList.add("swipe-threshold"),ne&&ne!==t&&En(ne),ne=t,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${Xi}`,e.style.transform="translateX(0)";const r=t==null?void 0:t.querySelector(".swipe-del");r&&(r.style.transition=`clip-path 0.3s ${kt}`,r.style.clipPath="inset(0 0 0 100%)"),t==null||t.classList.remove("open","swipe-threshold"),ne===t&&(ne=null),setTimeout(()=>{e.style.transition="",r&&(r.style.transition="")},350)}Ee=null}),document.addEventListener("mousedown",e=>{if(e.button!==0)return;const t=e.target.closest(".swipe-inner");if(!t)return;const i=t.closest(".swipe-wrap");i&&(h.selectMode||(ne&&ne!==i&&(En(ne),ne=null),Wn=!0,Ee=t,or=e.clientX,ar=e.clientY,Ft=null,rt=!1,jt=i.offsetWidth,t.classList.add("swiping")))}),document.addEventListener("mousemove",e=>{if(!Wn||!Ee)return;const t=e.clientX-or,i=e.clientY-ar;if(!Ft){if(Math.abs(t)<lr&&Math.abs(i)<lr)return;Ft=Math.abs(t)>Math.abs(i)?"horizontal":"vertical"}if(Ft==="vertical"){Ee.classList.remove("swiping"),Ee=null,Wn=!1;return}e.preventDefault();const s=t>=0?0:t;Ee.style.transform=`translateX(${s}px)`;const r=Ee.closest(".swipe-wrap"),o=r==null?void 0:r.querySelector(".swipe-del");if(o&&s<0){const l=Math.min(100,Math.abs(s)/cr*100);o.style.clipPath=`inset(0 0 0 ${100-l}%)`}const c=Math.abs(s)/jt;c>=Gn&&!rt?(rt=!0,navigator.vibrate&&navigator.vibrate(10),r==null||r.classList.add("swipe-threshold")):c<Gn&&rt&&(rt=!1,r==null||r.classList.remove("swipe-threshold"))});function n(){if(!Wn||!Ee){Wn=!1;return}Wn=!1;const e=Ee,t=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/jt;if(s>=Gn)Xd(t,e);else if(s>=Yd){e.style.transition=`transform 0.4s ${Xi}`,e.style.transform=`translateX(-${cr}px)`;const r=t==null?void 0:t.querySelector(".swipe-del");r&&(r.style.transition=`clip-path 0.3s ${kt}`,r.style.clipPath="inset(0 0 0 0%)"),t==null||t.classList.add("open"),t==null||t.classList.add("swipe-threshold"),ne&&ne!==t&&En(ne),ne=t,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${Xi}`,e.style.transform="translateX(0)";const r=t==null?void 0:t.querySelector(".swipe-del");r&&(r.style.transition=`clip-path 0.3s ${kt}`,r.style.clipPath="inset(0 0 0 100%)"),t==null||t.classList.remove("open","swipe-threshold"),ne===t&&(ne=null),setTimeout(()=>{e.style.transition="",r&&(r.style.transition="")},350)}Ee=null}document.addEventListener("mouseup",n),document.addEventListener("mouseleave",n),document.addEventListener("mousedown",e=>{if(!ne||e.target.closest(".swipe-del"))return;const t=e.target.closest(".swipe-inner");t&&t.closest(".swipe-wrap")===ne||(En(ne),ne=null)}),document.addEventListener("click",e=>{document.querySelectorAll(".sh-note-edit.open").forEach(t=>{if(t.contains(e.target))return;const i=t.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-note-btn");if(s&&s.contains(e.target))return;const r=t.querySelector("textarea");r&&r.blur(),t.classList.remove("open")}),document.querySelectorAll(".sh-qty-edit.open").forEach(t=>{if(t.contains(e.target))return;const i=t.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-qty");if(s&&s.contains(e.target))return;const r=t.querySelector("input");r&&r.blur(),t.classList.remove("open")})},!0),document.addEventListener("touchstart",e=>{if(!ne||e.target.closest(".swipe-del"))return;const t=e.target.closest(".swipe-inner");t&&t.closest(".swipe-wrap")===ne||(En(ne),ne=null)},{passive:!0})}function En(n){const e=n==null?void 0:n.querySelector(".swipe-inner"),t=n==null?void 0:n.querySelector(".swipe-del");e&&(e.style.transition=`transform 0.35s ${Xi}`,e.style.transform="translateX(0)",setTimeout(()=>{e.style.transition=""},350)),t&&(t.style.transition=`clip-path 0.3s ${kt}`,t.style.clipPath="inset(0 0 0 100%)",setTimeout(()=>{t.style.transition=""},300)),n==null||n.classList.remove("open","swipe-threshold")}async function Xd(n,e){const t=n==null?void 0:n.dataset.id,i=n==null?void 0:n.dataset.list;if(!t||!i)return;e.style.transition=`transform 0.3s ${kt}`,e.style.transform=`translateX(-${jt+100}px)`;const s=n==null?void 0:n.querySelector(".swipe-del");s&&(s.style.transition=`transform 0.3s ${kt}`,s.style.transform=`translateX(-${jt+100}px)`),await new Promise(r=>setTimeout(r,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",ne===n&&(ne=null),await new Promise(r=>setTimeout(r,250)),i==="shop"?await Ss(t):(await Zr(t),R("Item removed"))}async function qA(n,e){const t=p("sw-"+n);if(!t)return;const i=t.querySelector(".swipe-inner"),s=t.offsetWidth;i&&(i.style.transition=`transform 0.3s ${kt}`,i.style.transform=`translateX(-${s+100}px)`);const r=t.querySelector(".swipe-del");r&&(r.style.transition=`transform 0.3s ${kt}`,r.style.transform=`translateX(-${s+100}px)`),await new Promise(o=>setTimeout(o,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",ne===t&&(ne=null),await new Promise(o=>setTimeout(o,250)),e==="shop"?await Ss(n):(await Zr(n),R("Item removed"))}function WA(n,e){const t=p("sw-"+n);if(t){const i=t.querySelector(".swipe-inner");if((parseFloat(((i==null?void 0:i.style.transform)||"").replace("translateX(",""))||0)<-10){En(t),ne=null;return}}if(h.selectMode){h.selectedIds.has(n)?(h.selectedIds.delete(n),t==null||t.classList.remove("selected")):(h.selectedIds.add(n),t==null||t.classList.add("selected")),wo();return}e==="shop"?window.openItemDetail(n):window.openInvItemDetail(n)}function GA(){if(h.selectMode==="shop"){pi();return}h.selectMode&&pi(),h.selectMode="shop",h.selectedIds.clear(),document.querySelectorAll("#shlist .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=p("sh-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),wo()}function KA(){if(h.selectMode==="inv"){pi();return}h.selectMode&&pi(),h.selectMode="inv",h.selectedIds.clear(),document.querySelectorAll("#ibody .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=p("inv-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),wo()}function pi(){h.selectMode=null,h.selectedIds.clear(),document.querySelectorAll(".swipe-wrap.selecting").forEach(t=>t.classList.remove("selecting","selected"));const n=p("sh-selbtn");n&&(n.classList.remove("active"),n.textContent="Select");const e=p("inv-selbtn");e&&(e.classList.remove("active"),e.textContent="Select"),wo()}async function QA(){if(!h.selectedIds.size)return;const n=[...h.selectedIds],e=h.selectMode;pi(),e==="shop"?await Promise.all(n.map(t=>Ss(t))):await Promise.all(n.map(t=>Zr(t))),R(`Removed ${n.length} item${n.length!==1?"s":""} 🗑`)}function wo(){const n=p("multi-bar");if(!n)return;const e=h.selectedIds.size,t=p("multi-count");t&&(t.textContent=e),h.selectMode?n.classList.add("visible"):n.classList.remove("visible")}const JA=["Chicken","Beef","Fish","Vegetarian","Vegan","Quick","Kids","Healthy","Batch Cook","Date Night"];function gm(n){return"chip-"+n.split(" ").join("-")}function ym(){const n=p("recChips");n&&(n.innerHTML=JA.map(e=>`<button onclick="toggleChip('${e}')" id="${gm(e)}" style="padding:5px 10px;border-radius:20px;border:1px solid var(--bd);background:var(--s2);color:var(--tx2);font-size:.78rem;cursor:pointer;transition:all .15s">${e}</button>`).join(""))}function YA(n){const e=p(gm(n));window._activeChips.has(n)?(window._activeChips.delete(n),e&&(e.style.background="var(--s2)",e.style.color="var(--tx2)",e.style.borderColor="var(--bd)")):(window._activeChips.add(n),e&&(e.style.background="var(--ac)",e.style.color="#000",e.style.borderColor="var(--ac)")),vm()}function vm(){const n=p("recPicker"),e=p("recFilter")?p("recFilter").value.trim().toLowerCase():"",t=[...window._activeChips].map(r=>r.toLowerCase()),s=[...h.recs].sort((r,o)=>(o.cookCount||0)-(r.cookCount||0)).filter(r=>{const o=(r.name+" "+(r.description||"")+" "+(r.tags||[]).join(" ")).toLowerCase(),c=e?e.split(/\s+/).every(d=>o.includes(d)):!0,l=t.every(d=>o.includes(d));return c&&l});n.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(r=>`<option value="${r.id}">${r.name}</option>`).join(""),window._pickedRec=null,p("mealMinp").value=""}function XA(n,e){h.md=n,p("mealMttl").textContent="Meal for "+e,p("mealMinp").value=h.mp[n]||"",window._pickedRec=null,window._activeChips=new Set;const t=p("recFilter");t&&(t.value=""),ym();const i=p("recPicker");if(h.recs&&h.recs.length){const s=[...h.recs].sort((c,l)=>(l.cookCount||0)-(c.cookCount||0));i.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(c=>`<option value="${c.id}">${c.name}</option>`).join("");const r=h.mp[n]||"",o=s.find(c=>c.name===r);i.value=o?o.id:"",p("recPickerWrap").style.display="block"}else p("recPickerWrap").style.display="none";p("mealM").classList.add("active"),setTimeout(()=>p("mealMinp").focus(),100)}function ZA(n){if(!n){window._pickedRec=null,p("mealMinp").value="";return}const e=h.recs.find(t=>t.id===n);e&&(window._pickedRec=e,p("mealMinp").value=e.name)}function sl(){p("mealM").classList.remove("active")}async function ek(){const n=p("mealMinp").value.trim();if(await Dn(h.md,n||null),window._pickedRec&&window._pickedRec.description){const e=window._pickedRec.description,t=h.inv.map(o=>o.name.toLowerCase()),i=h.shop.map(o=>o.name.toLowerCase()),s=e.split(/[\n,]/).map(o=>o.replace(/^[\d\/\s]*(cup|tbsp|tsp|oz|lb|g|kg|ml|l|clove|slice|piece|bunch|head|can|package|pkg)s?\.?\s*/gi,"").replace(/^[\d]+\s*/,"").trim()).filter(o=>o.length>1&&o.length<60);let r=0;for(const o of s){if(/\b(add|mix|heat|cook|bake|stir|boil|fry|slice|chop|dice|combine|place|pour|season|serve|preheat|bring|remove|let|set|transfer)\b/i.test(o))continue;const c=o.replace(/^[-•*]\s*/,"").trim();if(!c||c.length<2)continue;const l=c.toLowerCase();t.some(d=>d.includes(l)||l.includes(d))||i.some(d=>d===l)||(await ke({id:Date.now().toString()+Math.random().toString(36).slice(2),name:c,qty:1,checked:!1,src:"recipe"}),r++)}r>0&&R(`Added ${r} ingredient${r!==1?"s":""} to shopping list 🛒`)}window._pickedRec=null,sl(),Bn(),Ps(),Ii()}async function tk(){await Dn(h.md,null),sl(),Bn(),Ps(),Ii()}function nk(n){const e=h.mp[n];e&&(h.cn=e,h.nr=0,p("cookedNm").textContent=e,p("cnotes").value="",is("cstars",0),p("cookedM").classList.add("active"))}async function ik(){await uf(h.cn,Gt()),await Dn(Gt(),null),p("cookedM").classList.remove("active"),Bn(),Ii(),R("Meal logged!")}async function sk(){var i;const n=p("cnotes").value.trim(),e=(i=p("tog-leftover"))==null?void 0:i.classList.contains("on");await uf(h.cn,Gt());const t=h.recs.find(s=>s.name.toLowerCase()===h.cn.toLowerCase());t?await sn({...t,cookCount:(t.cookCount||0)+1,lastCooked:Gt()}):await sn({id:"rec-"+Date.now(),name:h.cn,rating:h.nr,favorited:!1,notes:n,description:"",source:"Meal Plan",tags:[],cookCount:1,savedAt:new Date().toLocaleDateString(),lastCooked:Gt()}),e&&await Dn($_(),h.cn+" (leftovers)"),await Dn(Gt(),null),p("cookedM").classList.remove("active"),Bn(),Ii(),R(e?"Saved! Leftovers planned for tomorrow 🥡":"Saved to recipes! ⭐")}function rk(n){p("schedNm").textContent=n;const e=["S","M","T","W","T","F","S"],t=new Date;t.setHours(0,0,0,0),p("schedWk").innerHTML=wi().map((i,s)=>{const r=i.toISOString().split("T")[0],o=i.getTime()===t.getTime(),c=h.mp[r];return`<div class="wd${o?" today":""}${c?" hm":""}" onclick="schedSet('${r}','${n}')"><div class="wdn">${e[s]}</div><div class="wdd">${i.getDate()}</div>${c?`<div class="wdm">${c.substring(0,8)}…</div>`:""}</div>`}).join(""),p("schedM").classList.add("active")}async function ok(n,e){await Dn(n,e),p("schedM").classList.remove("active"),Bn(),Ii(),R("Scheduled! 📅")}function ak(){const n=s=>p(s),e=(s,r)=>{const o=n(s);o&&(o.value=r||"")};e("setName",h.cfg.name),e("setAdults",h.cfg.adults),e("setKids",h.cfg.kids),e("setOther",h.cfg.other),e("setCuisines",h.cfg.cuisines),e("setCookTime",h.cfg.cookTime),e("setZipcode",h.cfg.zipcode);const t=(s,r)=>{const o=n(s);o&&o.classList.toggle("on",!!r)};t("tg-nopork",h.cfg.nopork),t("tg-noshellfish",h.cfg.noshellfish),t("tg-vegetarian",h.cfg.vegetarian),t("tg-glutenfree",h.cfg.glutenfree),t("tg-notif",h.cfg.notif);const i=p("notifTimeRow");i&&(i.style.display=h.cfg.notif?"block":"none"),e("setNotifTime",h.cfg.notifTime||"8"),e("setNotifDays",String(h.cfg.notifDays||3)),e("setUsername",h.username),ol(),_m()}async function ck(){h.cfg={...h.cfg,name:p("setName").value.trim(),adults:p("setAdults").value.trim(),kids:p("setKids").value.trim(),nopork:p("tg-nopork").classList.contains("on"),noshellfish:p("tg-noshellfish").classList.contains("on"),vegetarian:p("tg-vegetarian").classList.contains("on"),glutenfree:p("tg-glutenfree").classList.contains("on"),other:p("setOther").value.trim(),cuisines:p("setCuisines").value.trim(),cookTime:p("setCookTime").value,zipcode:p("setZipcode")?p("setZipcode").value.trim():"",notif:p("tg-notif").classList.contains("on"),notifTime:p("setNotifTime")?p("setNotifTime").value:"8",notifDays:parseInt(p("setNotifDays")?p("setNotifDays").value:"3")},await Xr(),h.cfg.notif&&wm(),R("Settings saved!"),Ae("settings"),Vc()}async function lk(){var e,t;const n=((t=(e=p("setZipcode"))==null?void 0:e.value)==null?void 0:t.trim())||"";h.cfg={...h.cfg,zipcode:n},await Xr(),R("Saved!")}async function uk(n){if(!n.classList.contains("on")){if(!("Notification"in window)){R("Notifications not supported on this browser");return}if(Notification.permission==="denied"){R("Notifications blocked — enable in browser settings");return}if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){R("Notifications permission denied");return}}n.classList.toggle("on");const t=p("notifTimeRow");t&&(t.style.display=n.classList.contains("on")?"block":"none")}function dk(){if(Notification.permission!=="granted"){R("Enable notifications first");return}const n=h.inv.filter(t=>{const i=nt(t.expiry);return i&&(i.c==="expiring"||i.c==="expired")});if(!n.length){new Notification("Kitchen 🧺",{body:"No items expiring soon — you're all good!"});return}const e=n.slice(0,3).map(t=>t.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${e}${n.length>3?" + "+(n.length-3)+" more":""} need attention`})}function wm(){if(!h.cfg.notif||Notification.permission!=="granted")return;const n=parseInt(localStorage.getItem("ks-lastnotif")||"0"),e=Date.now();if(e-n<864e5)return;localStorage.setItem("ks-lastnotif",e.toString());const t=h.cfg.notifDays||3,i=h.inv.filter(r=>{if(!nt(r.expiry))return!1;const c=new Date(r.expiry+"T00:00:00"),l=new Date;return l.setHours(0,0,0,0),Math.round((c-l)/864e5)<=t});if(!i.length)return;const s=i.slice(0,3).map(r=>r.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${s}${i.length>3?" + "+(i.length-3)+" more":""} expiring in ${t} days or less`})}function rl(){return je("ks-hhs")||[h.hid]}async function _m(){const n=se();if(n)try{const e=await ee(`households/${h.hid}`);if(!e)return;const t=e.ownerUid===n.uid,i=p("hhInviteCode");if(i&&(i.textContent=e.inviteCode||"—"),e.inviteCode&&t)try{await z(`household_codes/${e.inviteCode}`,{householdId:h.hid})}catch{}const s=p("regenCodeBtn");s&&(s.style.display=t?"":"none");const r=p("hhMembers");r&&e.members&&(r.innerHTML=e.members.map(o=>{const c=o.uid===n.uid,l=o.role==="owner"?"Owner":"Member",d=t&&!c?`<button onclick="event.stopPropagation();removeMemberFromHH('${o.uid}')" style="background:none;border:none;color:var(--rd);cursor:pointer;font-size:.78rem;padding:4px 8px">Remove</button>`:"";return`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px">
          <div>
            <div style="font-size:.86rem;font-weight:500;color:var(--tx)">${o.name}${c?" (you)":""}</div>
            <div style="font-size:.7rem;color:var(--mt);margin-top:2px">${l}</div>
          </div>
          ${d}
        </div>`}).join(""))}catch(e){console.error("renderHouseholdInfo error:",e)}}async function hk(){var e;const n=(e=p("hhInviteCode"))==null?void 0:e.textContent;if(!(!n||n==="—"))try{await navigator.clipboard.writeText(n),R("Invite code copied!")}catch{R("Couldn't copy — try manually")}}async function fk(){var t;const n=(t=p("hhInviteCode"))==null?void 0:t.textContent;if(!n||n==="—")return;const e=`Join my kitchen on Kitchen app! Use invite code: ${n} at https://pantry-app-zeta-six.vercel.app`;if(navigator.share)try{await navigator.share({text:e})}catch{}else try{await navigator.clipboard.writeText(e),R("Share text copied to clipboard!")}catch{R("Couldn't share — try manually")}}async function pk(){if(confirm("Regenerate invite code? The old code will stop working."))try{const n=await d_(h.hid);if(n){const e=p("hhInviteCode");e&&(e.textContent=n),R("New invite code generated!")}}catch(n){console.error("regenInviteCode error:",n),R("Failed to regenerate code")}}async function mk(n){if(confirm("Remove this member from the household?"))try{await h_(h.hid,n),R("Member removed"),_m()}catch(e){console.error("removeMemberFromHH error:",e),R("Failed to remove member")}}async function gk(){var i,s,r;const n=(r=(s=(i=p("newHHCode"))==null?void 0:i.value)==null?void 0:s.trim())==null?void 0:r.toUpperCase();if(!n)return;const e=se();if(!e){R("Sign in first");return}const t=p("newHHCode");t.disabled=!0;try{const o=await lf(n,e);if(!o){R("Invalid invite code. Check and try again."),t.disabled=!1;return}const c=rl();c.includes(o)||c.push(o),ut("ks-hhs",c),p("newHHCode").value="",ol(),R("Household joined!")}catch(o){console.error("addHousehold error:",o),R("Failed to join household")}t.disabled=!1}function yk(n){n!==h.hid&&(localStorage.setItem("ks-h",n),location.reload())}async function vk(n){if(n===h.hid){R("Can't remove active household");return}const e=se();if(e)try{const i=await ee(`users/${e.uid}`);if(i){const r=(i.householdIds||[]).filter(o=>o!==n);await z(`users/${e.uid}`,{...i,householdIds:r,id:void 0})}const s=await ee(`households/${n}`);if(s){const r=(s.members||[]).filter(c=>c.uid!==e.uid),o=(s.memberUids||[]).filter(c=>c!==e.uid);await z(`households/${n}`,{...s,members:r,memberUids:o,id:void 0})}}catch(i){console.error("removeHousehold error:",i)}const t=rl().filter(i=>i!==n);ut("ks-hhs",t),ol()}async function ol(){const n=rl().filter(i=>i!==h.hid),e=p("hhList");if(!e)return;if(!n.length){e.innerHTML='<div style="font-size:.82rem;color:var(--mt);padding:10px 0">No other households yet.</div>';return}const t=[];for(const i of n){let s=i;try{const r=await ee(`households/${i}`);r!=null&&r.name&&(s=r.name)}catch{}t.push({id:i,name:s})}e.innerHTML=t.map(({id:i,name:s})=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px;cursor:pointer" onclick="switchHousehold('${i}')">
      <div>
        <div style="font-size:.88rem;font-weight:500;color:var(--tx)">${s}</div>
        <div style="font-size:.7rem;color:var(--mt);margin-top:2px">Tap to switch</div>
      </div>
      <button onclick="event.stopPropagation();removeHousehold('${i}')" style="background:none;border:none;color:var(--mt);cursor:pointer;font-size:.82rem;padding:4px 8px">✕</button>
    </div>`).join("")}const Br={gold:{name:"Gold",swatch:"#d4a853",dark:{bg:"#0f0f0d",sf:"#1a1a17",card:"#222220",card2:"#2a2a27",b1:"#333330",b2:"#3d3d39",ac:"#d4a853",ac2:"#e8c27a",acr:"212,168,83",tx:"#ede8d8",tx2:"#b8b09a",mt:"#7a7468"},light:{bg:"#faf8f2",sf:"#ffffff",card:"#f3ede0",card2:"#efe8d8",b1:"#ddd5c0",b2:"#cec4ac",ac:"#a8732a",ac2:"#c48f3e",acr:"168,115,42",tx:"#2a2418",tx2:"#5c5040",mt:"#9a8870"}},forest:{name:"Forest",swatch:"#4a9e5c",dark:{bg:"#0a1410",sf:"#111f17",card:"#182a1e",card2:"#1e3326",b1:"#2a4032",b2:"#355040",ac:"#6db56d",ac2:"#8fd08f",acr:"109,181,109",tx:"#e4f0e4",tx2:"#9dbf9d",mt:"#5a7a5a"},light:{bg:"#f2f9f2",sf:"#ffffff",card:"#e8f5e8",card2:"#dff0df",b1:"#c0ddc0",b2:"#a8cca8",ac:"#2e7d32",ac2:"#43a047",acr:"46,125,50",tx:"#0d2010",tx2:"#2e4f2e",mt:"#5a7a5a"}},ocean:{name:"Ocean",swatch:"#38bdf8",dark:{bg:"#060e1a",sf:"#0d1829",card:"#112035",card2:"#162840",b1:"#1e3554",b2:"#264468",ac:"#38bdf8",ac2:"#7dd3fc",acr:"56,189,248",tx:"#e0f2fe",tx2:"#7ab8d4",mt:"#486880"},light:{bg:"#f0f8ff",sf:"#ffffff",card:"#e0f2fe",card2:"#d4ecf9",b1:"#b0d8f0",b2:"#90c4e4",ac:"#0369a1",ac2:"#0284c7",acr:"3,105,161",tx:"#082040",tx2:"#1e4060",mt:"#4a7090"}},bordeaux:{name:"Bordeaux",swatch:"#e8829a",dark:{bg:"#120810",sf:"#1c0e18",card:"#261420",card2:"#301828",b1:"#4a2238",b2:"#5c2a46",ac:"#e8829a",ac2:"#f4aabb",acr:"232,130,154",tx:"#fce8ee",tx2:"#d4909e",mt:"#8a5060"},light:{bg:"#fff5f7",sf:"#ffffff",card:"#ffe8ed",card2:"#ffd8e0",b1:"#f4b8c4",b2:"#eca0b0",ac:"#be3455",ac2:"#d94070",acr:"190,52,85",tx:"#2a080e",tx2:"#6a2030",mt:"#9a5060"}},sand:{name:"Sand",swatch:"#e07a5f",dark:{bg:"#170e08",sf:"#221508",card:"#2e1c0e",card2:"#382414",b1:"#4a3020",b2:"#5c3c28",ac:"#e07a5f",ac2:"#eca080",acr:"224,122,95",tx:"#fdf0e8",tx2:"#c8a090",mt:"#887060"},light:{bg:"#fdf6ec",sf:"#fffbf5",card:"#f5e8d8",card2:"#eedcc8",b1:"#ddc8ac",b2:"#ccb494",ac:"#c1440e",ac2:"#d4602a",acr:"193,68,14",tx:"#2a1808",tx2:"#5c3820",mt:"#9a7060"}},midnight:{name:"Midnight",swatch:"#818cf8",dark:{bg:"#050814",sf:"#0a0d1f",card:"#0f1228",card2:"#141830",b1:"#1e2448",b2:"#272e58",ac:"#818cf8",ac2:"#a5b0ff",acr:"129,140,248",tx:"#e8eaff",tx2:"#9099cc",mt:"#505880"},light:{bg:"#f0f1ff",sf:"#ffffff",card:"#e4e6ff",card2:"#d8dbff",b1:"#b8bdff",b2:"#a0a6f4",ac:"#4f46e5",ac2:"#6366f1",acr:"79,70,229",tx:"#0a0820",tx2:"#202060",mt:"#5050a0"}},lavender:{name:"Lavender",swatch:"#c084fc",dark:{bg:"#0e0814",sf:"#160e20",card:"#1e1430",card2:"#261a3c",b1:"#382454",b2:"#442c66",ac:"#c084fc",ac2:"#d8a8ff",acr:"192,132,252",tx:"#f5ecff",tx2:"#c0a0e0",mt:"#7a5898"},light:{bg:"#faf5ff",sf:"#ffffff",card:"#f3e8ff",card2:"#ecdcff",b1:"#d8b8f8",b2:"#c8a0f0",ac:"#9333ea",ac2:"#a855f7",acr:"147,51,234",tx:"#1a0830",tx2:"#481080",mt:"#805098"}}};let vs=je("ks-theme")||"gold",ws=je("ks-mode")||"auto";function Hr(n,e){vs=n,ws=e,ut("ks-theme",n),ut("ks-mode",e);const t=Br[n]||Br.gold,s=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?t.dark:t.light,r=document.documentElement.style;r.setProperty("--bg",s.bg),r.setProperty("--sf",s.sf),r.setProperty("--card",s.card),r.setProperty("--card2",s.card2),r.setProperty("--b1",s.b1),r.setProperty("--b2",s.b2),r.setProperty("--ac",s.ac),r.setProperty("--ac2",s.ac2),r.setProperty("--acd","rgba("+s.acr+",.12)"),r.setProperty("--tx",s.tx),r.setProperty("--tx2",s.tx2),r.setProperty("--mt",s.mt),r.setProperty("--gn","#6db56d"),r.setProperty("--gnd","rgba(109,181,109,.12)"),r.setProperty("--rd","#d96b6b"),r.setProperty("--rdd","rgba(217,107,107,.12)"),r.setProperty("--am","#c8960a"),r.setProperty("--amd","rgba(200,150,10,.12)"),bm(e),Tm(n)}function wk(n){Hr(vs,n)}function bm(n){["auto","light","dark"].forEach(e=>{const t=p("mode-"+e);t&&(t.style.background=e===n?"var(--ac)":"",t.style.color=e===n?"var(--bg)":"",t.style.borderColor=e===n?"var(--ac)":"")})}function Tm(n){const e=p("themePicker");e&&(e.innerHTML="",Object.keys(Br).forEach(t=>{const i=Br[t],s=t===n,r=document.createElement("div");r.title=i.name,r.style.cssText="width:36px;height:36px;border-radius:50%;background:"+i.swatch+";cursor:pointer;border:3px solid "+(s?"var(--tx)":"transparent")+";box-shadow:"+(s?"0 0 0 2px var(--ac)":"none")+";transition:all .2s;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.85rem",r.textContent=s?"✓":"",r.onclick=()=>Hr(t,ws),r.onmouseover=function(){this.style.transform="scale(1.15)"},r.onmouseout=function(){this.style.transform="scale(1)"},e.appendChild(r)}))}function _k(){Hr(vs,ws),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{ws==="auto"&&Hr(vs,"auto")})}function bk(){Tm(vs),bm(ws)}async function Tk(){const n=p("enrichBtn"),e=p("enrichProgress"),t=p("enrichStatus"),i=p("enrichBar");n&&(n.disabled=!0),e&&(e.style.display="block");const s=h.shop.filter(d=>Zd(d)),r=h.inv.filter(d=>Zd(d)),o=[...s.map(d=>({item:d,list:"shop"})),...r.map(d=>({item:d,list:"inv"}))];if(!o.length){t&&(t.textContent="All items already enriched!"),i&&(i.style.width="100%"),n&&(n.disabled=!1),R("Nothing to enrich — all items already have data.");return}let c=0,l=0;for(let d=0;d<o.length;d++){const{item:m,list:y}=o[d],w=Math.round((d+1)/o.length*100);t&&(t.textContent=`Processing "${m.name}" (${d+1}/${o.length})…`),i&&(i.style.width=w+"%");try{const $=(await(await fetch(`/api/text-search?q=${encodeURIComponent(m.name)}`)).json()).results||[];if($.length){const L=$[0],B={...m,image:L.image||m.image||null,brand:L.brand||m.brand||"",category:L.category||m.category||"",source:L.source||m.source||"search"};y==="shop"?await ke(B):await Te(B),c++}else l++}catch(C){console.warn(`Enrich failed for "${m.name}":`,C),l++}d<o.length-1&&await Ik(300)}t&&(t.textContent=`Done! ${c} enriched, ${l} skipped.`),i&&(i.style.width="100%"),n&&(n.disabled=!1),R(`Enrichment complete: ${c} updated, ${l} unchanged.`)}function Zd(n){return!n.name||n.name.length<2||n.imageDismissed?!1:!n.image&&!n.brand}function Ik(n){return new Promise(e=>setTimeout(e,n))}let Wt=0;async function Ek(){const n=se();if(n)try{const e=await ee(`users/${n.uid}`);if(e!=null&&e.onboardingDone)return;Sk()}catch{}}function Sk(){const n=p("ov-onboarding");n&&(Wt=0,n.classList.add("active"),Im())}function Im(){const n=p("onboarding-body");if(!n)return;const t=`<div style="display:flex;gap:6px;justify-content:center;margin-bottom:24px">${Array.from({length:4},(i,s)=>`<div style="width:8px;height:8px;border-radius:50%;background:${s===Wt?"var(--ac)":"var(--b2)"};transition:background .2s"></div>`).join("")}</div>`;Wt===0?n.innerHTML=`${t}
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
      </div>`)}async function Ak(){var n,e,t,i,s,r,o,c,l,d,m,y,w;if(Wt===1){const C=(e=(n=p("ob-name"))==null?void 0:n.value)==null?void 0:e.trim(),P=(i=(t=p("ob-adults"))==null?void 0:t.value)==null?void 0:i.trim(),$=(r=(s=p("ob-kids"))==null?void 0:s.value)==null?void 0:r.trim(),L=(c=(o=p("ob-cuisines"))==null?void 0:o.value)==null?void 0:c.trim(),B=(l=p("ob-cooktime"))==null?void 0:l.value;C&&(h.cfg.name=C),P&&(h.cfg.adults=P),$&&(h.cfg.kids=$),L&&(h.cfg.cuisines=L),B&&(h.cfg.cookTime=B),h.cfg.nopork=((d=p("ob-nopork"))==null?void 0:d.checked)||!1,h.cfg.noshellfish=((m=p("ob-noshellfish"))==null?void 0:m.checked)||!1,h.cfg.vegetarian=((y=p("ob-vegetarian"))==null?void 0:y.checked)||!1,h.cfg.glutenfree=((w=p("ob-glutenfree"))==null?void 0:w.checked)||!1,await Xr()}Wt++,Im()}async function Em(){const n=p("ov-onboarding");n&&n.classList.remove("active");const e=se();if(e)try{const t=await ee(`users/${e.uid}`);t&&await z(`users/${e.uid}`,{...t,onboardingDone:!0,id:void 0})}catch{}}async function kk(){await Em(),R("You can always adjust settings later ⚙️")}window.getIdToken=of;V.renderAll=Uc;V.renderSum=Ps;V.renderRecs=vo;V.renderShop=Ei;KI(go);window.showScreen=function(n){var e,t;document.querySelectorAll(".ov.active").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".screen").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".ni").forEach(i=>i.classList.remove("active")),(e=p("screen-"+n))==null||e.classList.add("active"),(t=p("nav-"+n))==null||t.classList.add("active"),n==="home"&&Sp(),n==="inventory"&&go(),n==="recipes"&&(h.rt==="community"?Zc():vo()),n==="shopping"&&Ei(),n==="insights"&&bA()};const Ck=Tt;window.showOv=function(n){Ck(n),n==="settings"&&setTimeout(bk,80)};window.hideOv=Ae;window.initHome=Vc;window.addLowToShop=XI;window.toggleExp=function(){const n=p("exppanel");n.style.display=n.style.display==="none"?"block":"none"};window.openAdj=iS;window.updL=uS;window.adjQ=dS;window.adjQD=hS;window.adjE=fS;window.adjNote=pS;window.setIT=yS;window.addManual=vS;window.valMA=wS;window.chgMQ=_S;window.selML=bS;window.remItem=Jc;window.importDoc=TS;window.adjLowThresh=mS;window.adjLowThreshD=gS;window.openInvAddSheet=SS;window.closeInvAddSheet=Ds;window.invAddScan=AS;window.invAddVoice=kS;window.setInvAddLoc=CS;window.toggleInvAddNote=RS;window.qaddInv=xS;window.onInvInput=PS;window.pickInvInlineResult=OS;window.toggleInvVoice=sm;window.openInvItemDetail=Vn;window.closeInvItemDetail=sS;window.deleteInvItemImage=aS;window.triggerInvPhotoUpload=cS;window.handleInvPhotoSelected=lS;window.qadd=v0;window.togShop=F0;window.toggleShNote=j0;window.saveShNote=B0;window.openShQty=H0;window.adjShQty=z0;window.saveShQty=Zp;window.togAisle=q0;window.setSHT=W0;window.shareList=G0;window.openAddToKitchen=K0;window.setAtkLoc=Q0;window.confirmAddToKitchen=J0;window.buildList=Y0;window.toggleVoice=zp;window.toggleAddNote=w0;window.openShopAddSheet=_0;window.closeShopAddSheet=Ls;window.shopAddScan=b0;window.shopAddVoice=T0;window.closeEnrichSheet=jr;window.pickEnrichResult=U0;window.onShopInput=S0;window.pickInlineResult=Qp;window.openItemDetail=Mn;window.closeItemDetail=D0;window.deleteItemImage=O0;window.triggerProductPhotoUpload=M0;window.handleProductPhotoSelected=V0;window.bpTog=X0;window.bpSelAll=Z0;window.bpUpdBtn=function(){};window.bpConfirm=eS;window._bpItems=[];window.searchDeals=tS;window.dealsFromList=nS;window.addDealToList=tm;window.renderDealsZipBanner=em;window.clrChk=function(){h.shop.filter(n=>n.checked).forEach(n=>{Xp(n.name),Ss(n.id)})};window.setRT=FS;window.togFav=jS;window.valR=BS;window.importFromUrl=HS;window.saveRec=WS;window.openER=GS;window.updR=KS;window.delER=QS;window.scaleRec=JS;window.whatCanIMake=YS;window.addRecIngToShop=XS;window.setStar=ZS;window.togTag=VS;window.togglePublic=eA;window.loadCommunity=Zc;window.setComCuisine=nA;window.setComSearch=iA;window.setComSort=sA;window.toggleComTag=rA;window.setComTime=oA;window.setComMinRating=aA;window.openComRecipe=Qa;window.likeComRecipe=uA;window.saveComToKitchen=dA;window.addComComment=hA;window.shareComRecipe=fA;window.submitComReview=cA;window.unpublishComRecipe=lA;window.rateComRecipe=cm;window.deleteComComment=gA;window.openReportSheet=yA;window.closeReportSheet=lm;window.submitComReport=vA;window.loadMoreComments=mA;window.openNotifications=wA;window.openComRecipeFromNotif=_A;window.sendChat=dm;window.sendPill=kA;window.clrChat=CA;window.ar=hm;window.importChatRecipe=AA;window.stopLiveScanner=nl;window.resumeScanner=DA;window.openScanForList=NA;window.openScanForInventory=$A;window.addScannedToList=MA;window.toggleScanNote=OA;window.togManual=VA;window.manLookup=UA;window.selRL=il;window.valAdd=jA;window.addToInv=BA;window.chgAQ=HA;window.swipeDelItem=qA;window.swipeRowTap=WA;window.togShopSelect=GA;window.togInvSelect=KA;window.cancelSelect=pi;window.deleteSelected=QA;window.openMealM=XA;window.pickRec=ZA;window.closeMealM=sl;window.saveMeal=ek;window.clrMeal=tk;window.openCooked=nk;window.skipCooked=ik;window.saveCooked=sk;window.scheduleRecipe=rk;window.schedSet=ok;window.initRecChips=ym;window.toggleChip=YA;window.filterRecs=vm;window._pickedRec=null;window._activeChips=new Set;window.saveSettings=ck;window.saveZipcode=lk;window.toggleNotif=uk;window.testNotif=dk;window.addHousehold=gk;window.switchHousehold=yk;window.removeHousehold=vk;window.setMode=wk;window.showNotif=R;window.copyInviteCode=hk;window.shareInviteCode=fk;window.regenInviteCode=pk;window.removeMemberFromHH=mk;window.enrichExistingItems=Tk;window.manualRefresh=async function(n){const e=event==null?void 0:event.target;e&&(e.classList.add("spinning"),setTimeout(()=>e.classList.remove("spinning"),600)),fe("syncing");try{(n==="shop"||n==="both")&&(h.shop=await ue(`households/${h.hid}/shopping`),Ei()),(n==="inv"||n==="both")&&(h.inv=await ue(`households/${h.hid}/inventory`),go(),Uc()),fe("synced"),R("Refreshed ✓")}catch(t){console.error("manualRefresh error:",t),fe("error"),R("Refresh failed")}};window.onboardNext=Ak;window.finishOnboarding=Em;window.skipOnboarding=kk;window.saveUsername=async function(){var o;const n=p("usernameInput"),e=p("usernameStatus"),t=p("saveUsernameBtn"),i=((n==null?void 0:n.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(i)){e&&(e.textContent="3-20 characters, letters, numbers, and underscores only.",e.style.color="var(--rd)",e.style.display="block");return}if(t&&(t.disabled=!0,t.textContent="Checking…"),!await pf(i)){e&&(e.textContent=`"${i}" is already taken. Try another.`,e.style.color="var(--rd)",e.style.display="block"),t&&(t.disabled=!1,t.textContent="Save");return}const r=se();r&&(await mf(r.uid,i),R("Username set to @"+i)),(o=p("usernameM"))==null||o.classList.remove("active"),t&&(t.disabled=!1,t.textContent="Save")};window.changeUsername=async function(){const n=p("setUsername"),e=((n==null?void 0:n.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(e)){R("3-20 chars, letters/numbers/underscores only");return}if(e===h.username){R("Username unchanged");return}if(!await pf(e)){R(`"${e}" is already taken`);return}const i=se();i&&(await mf(i.uid,e),R("Username changed to @"+e))};window._appStart=async function(n){var t;h.hid=n,p("LS").style.display="none",p("APP").style.display="flex",window.showScreen("home"),fe("syncing");const e=se();if(e)try{const i=await ee(`users/${e.uid}`);if((t=i==null?void 0:i.householdIds)!=null&&t.length){const s=[...i.householdIds];s.includes(n)||s.push(n),ut("ks-hhs",s)}else{const s=je("ks-hhs")||[n];s.includes(n)||(s.push(n),ut("ks-hhs",s))}}catch{const i=je("ks-hhs")||[n];i.includes(n)||(i.push(n),ut("ks-hhs",i))}else{const i=je("ks-hhs")||[n];i.includes(n)||(i.push(n),ut("ks-hhs",i))}await m_(),ak(),Vc(),y0(),MS(),GI(h.hid);try{fe("syncing");const i=await Promise.allSettled([ue(`households/${h.hid}/inventory`),ue(`households/${h.hid}/recipes`),ue(`households/${h.hid}/shopping`)]),s=(r,o)=>r.status==="fulfilled"?r.value:o;h.inv=s(i[0],h.inv),h.recs=s(i[1],h.recs),h.shop=s(i[2],h.shop),fe("synced"),Uc(),vo(),Ei(),Ps()}catch(i){console.error("initial load error",i),fe("error")}if(e){const i=await I_(e.uid);h.username=i;const s=p("setUsername");s&&(s.value=i||""),i||setTimeout(()=>{var r;return(r=p("usernameM"))==null?void 0:r.classList.add("active")},600)}setTimeout(um,800),setTimeout(Ek,500)};_k();zA();h.cfg.notif&&setTimeout(wm,3e3);Ei();function _o(n){p("auth-loading").style.display="none",p("auth-signin").style.display=n==="signin"?"flex":"none",p("auth-signup").style.display=n==="signup"?"flex":"none",p("auth-join").style.display=n==="join"?"flex":"none",p("authError").style.display="none",p("signupError").style.display="none"}function et(n,e){const t=p(n);t&&(t.textContent=e,t.style.display="block")}function bo(n){return{"auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password.","auth/invalid-credential":"Incorrect email or password.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password must be at least 6 characters.","auth/too-many-requests":"Too many attempts. Please try again later.","auth/popup-closed-by-user":"Sign-in popup was closed.","auth/cancelled-popup-request":"Sign-in was cancelled.","auth/account-exists-with-different-credential":"An account already exists with this email using a different sign-in method."}[n.code]||n.message||"Something went wrong. Please try again."}function We(n,e){n&&(e?(n._origText=n.textContent,n.textContent="Please wait…",n.disabled=!0):(n.textContent=n._origText||n.textContent,n.disabled=!1))}var eh;(eh=p("btnGoogle"))==null||eh.addEventListener("click",async()=>{const n=p("btnGoogle");We(n,!0),p("authError").style.display="none";try{await r_()}catch(e){et("authError",bo(e))}We(n,!1)});var th;(th=p("btnApple"))==null||th.addEventListener("click",async()=>{const n=p("btnApple");We(n,!0),p("authError").style.display="none";try{await o_()}catch(e){et("authError",bo(e))}We(n,!1)});var nh;(nh=p("btnEmailSign"))==null||nh.addEventListener("click",async()=>{var i,s,r;const n=(s=(i=p("authEmail"))==null?void 0:i.value)==null?void 0:s.trim(),e=(r=p("authPass"))==null?void 0:r.value;if(!n||!e){et("authError","Please enter your email and password.");return}const t=p("btnEmailSign");We(t,!0),p("authError").style.display="none";try{await a_(n,e)}catch(o){et("authError",bo(o))}We(t,!1)});var ih;(ih=p("btnEmailSignup"))==null||ih.addEventListener("click",async()=>{var s,r,o,c,l;const n=(r=(s=p("signupName"))==null?void 0:s.value)==null?void 0:r.trim(),e=(c=(o=p("signupEmail"))==null?void 0:o.value)==null?void 0:c.trim(),t=(l=p("signupPass"))==null?void 0:l.value;if(!n){et("signupError","Please enter your name.");return}if(!e||!t){et("signupError","Please enter your email and password.");return}const i=p("btnEmailSignup");We(i,!0),p("signupError").style.display="none";try{await c_(e,t,n)}catch(d){et("signupError",bo(d))}We(i,!1)});var sh;(sh=p("btnToggleSignup"))==null||sh.addEventListener("click",()=>_o("signup"));var rh;(rh=p("btnToggleSignin"))==null||rh.addEventListener("click",()=>_o("signin"));var oh;(oh=p("authPass"))==null||oh.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=p("btnEmailSign"))==null||e.click())});var ah;(ah=p("signupPass"))==null||ah.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=p("btnEmailSignup"))==null||e.click())});window.doSignOut=async function(){confirm("Sign out of Kitchen?")&&await l_()};let fa=!1;function zr(n){localStorage.setItem("ks-h",n),p("LS").style.display="none",p("APP").style.display="flex",window._appStart(n)}function Rk(n){_o("join"),p("btnCreateKitchen").onclick=async()=>{var e;We(p("btnCreateKitchen"),!0);try{const t=((e=h.cfg)==null?void 0:e.name)||"My Kitchen";await cf(n.uid,t);const i=await Ia(n);i.householdIds=[n.uid],await z(`users/${n.uid}`,i),localStorage.removeItem("ks-h");const s=je("ks-hhs");if(s){const r=s.filter(o=>o!==n.uid);r.push(n.uid),localStorage.setItem("ks-hhs",JSON.stringify(r))}zr(n.uid)}catch(t){console.error("Create kitchen error:",t),et("joinError","Something went wrong. Please try again."),We(p("btnCreateKitchen"),!1)}},p("btnJoinKitchen").onclick=async()=>{var t,i,s;const e=(s=(i=(t=p("joinCode"))==null?void 0:t.value)==null?void 0:i.trim())==null?void 0:s.toUpperCase();if(!e){et("joinError","Please enter an invite code.");return}We(p("btnJoinKitchen"),!0),p("joinError").style.display="none";try{let r=await ee(`users/${n.uid}`);r||(r=await Ia(n));const o=await lf(e,n);if(!o){et("joinError","Invalid invite code. Check and try again."),We(p("btnJoinKitchen"),!1);return}const c=je("ks-hhs")||[];c.includes(o)||c.push(o),ut("ks-hhs",c),zr(o)}catch(r){console.error("Join kitchen error:",r),et("joinError","Something went wrong. Please try again."),We(p("btnJoinKitchen"),!1)}}}i_(async n=>{var e;if(n){if(localStorage.setItem("ks-who",n.displayName||((e=n.email)==null?void 0:e.split("@")[0])||"You"),!fa){fa=!0;try{const t=await ee(`users/${n.uid}`),i=localStorage.getItem("ks-h"),s=je("ks-hhs");if(!!t||!!i||s&&s.length>0){p("LS").style.display="none",p("APP").style.display="flex";const o=await f_(n);zr(o)}else Rk(n)}catch(t){console.error("Failed to resolve household:",t);const i=n.uid;zr(i)}}}else Ep(),fa=!1,p("APP").style.display="none",p("LS").style.display="flex",_o("signin")});
